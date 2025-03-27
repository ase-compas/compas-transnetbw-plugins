var gu = Object.defineProperty;
var _u = (t, e, n) => e in t ? gu(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var gr = (t, e, n) => (_u(t, typeof e != "symbol" ? e + "" : e, n), n), bu = (t, e, n) => {
  if (!e.has(t))
    throw TypeError("Cannot " + n);
};
var Nn = (t, e, n) => (bu(t, e, "read from private field"), n ? n.call(t) : e.get(t)), bs = (t, e, n) => {
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
function Ya(t) {
  return t();
}
function vs() {
  return /* @__PURE__ */ Object.create(null);
}
function Ye(t) {
  t.forEach(Ya);
}
function pe(t) {
  return typeof t == "function";
}
function Ce(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
function vu(t) {
  return Object.keys(t).length === 0;
}
function $r(t, ...e) {
  if (t == null) {
    for (const i of e)
      i(void 0);
    return Qe;
  }
  const n = t.subscribe(...e);
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
function Iu(t) {
  let e;
  return $r(t, (n) => e = n)(), e;
}
function st(t, e, n) {
  t.$$.on_destroy.push($r(e, n));
}
function Ie(t, e, n, i) {
  if (t) {
    const r = Za(t, e, n, i);
    return t[0](r);
  }
}
function Za(t, e, n, i) {
  return t[1] && i ? X(n.ctx.slice(), t[1](i(e))) : n.ctx;
}
function Ee(t, e, n, i) {
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
function Ae(t, e, n, i, r, s) {
  if (r) {
    const a = Za(e, n, i, s);
    t.p(a, r);
  }
}
function ye(t) {
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
function ge(t, e) {
  const n = {};
  e = new Set(e);
  for (const i in t)
    !e.has(i) && i[0] !== "$" && (n[i] = t[i]);
  return n;
}
function es(t) {
  const e = {};
  for (const n in t)
    e[n] = !0;
  return e;
}
function kt(t, e, n) {
  return t.set(n), e;
}
function he(t) {
  return t && pe(t.destroy) ? t.destroy : Qe;
}
const Eu = ["", !0, 1, "true", "contenteditable"], Qa = typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : (
  // @ts-ignore Node typings have this
  global
);
function J(t, e) {
  t.appendChild(e);
}
function V(t, e, n) {
  t.insertBefore(e, n || null);
}
function B(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function ts(t, e) {
  for (let n = 0; n < t.length; n += 1)
    t[n] && t[n].d(e);
}
function ne(t) {
  return document.createElement(t);
}
function ut(t) {
  return document.createElementNS("http://www.w3.org/2000/svg", t);
}
function ct(t) {
  return document.createTextNode(t);
}
function ae() {
  return ct(" ");
}
function Ze() {
  return ct("");
}
function ue(t, e, n, i) {
  return t.addEventListener(e, n, i), () => t.removeEventListener(e, n, i);
}
function P(t, e, n) {
  n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
const Au = ["width", "height"];
function ce(t, e) {
  const n = Object.getOwnPropertyDescriptors(t.__proto__);
  for (const i in e)
    e[i] == null ? t.removeAttribute(i) : i === "style" ? t.style.cssText = e[i] : i === "__value" ? t.value = t[i] = e[i] : n[i] && n[i].set && Au.indexOf(i) === -1 ? t[i] = e[i] : P(t, i, e[i]);
}
function Is(t, e) {
  for (const n in e)
    P(t, n, e[n]);
}
function yu(t, e) {
  Object.keys(e).forEach((n) => {
    Cu(t, n, e[n]);
  });
}
function Cu(t, e, n) {
  const i = e.toLowerCase();
  i in t ? t[i] = typeof t[i] == "boolean" && n === "" ? !0 : n : e in t ? t[e] = typeof t[e] == "boolean" && n === "" ? !0 : n : P(t, e, n);
}
function Fi(t) {
  return /-/.test(t) ? yu : ce;
}
function Ja(t) {
  return t === "" ? null : +t;
}
function Su(t) {
  return Array.from(t.childNodes);
}
function ht(t, e) {
  e = "" + e, t.data !== e && (t.data = /** @type {string} */
  e);
}
function Tu(t, e) {
  e = "" + e, t.wholeText !== e && (t.data = /** @type {string} */
  e);
}
function Lu(t, e, n) {
  ~Eu.indexOf(n) ? Tu(t, e) : ht(t, e);
}
function $t(t, e) {
  t.value = e ?? "";
}
function wr(t, e, n, i) {
  n == null ? t.style.removeProperty(e) : t.style.setProperty(e, n, "");
}
function Ou(t, e, { bubbles: n = !1, cancelable: i = !1 } = {}) {
  return new CustomEvent(t, { detail: e, bubbles: n, cancelable: i });
}
function Nt(t, e) {
  return new t(e);
}
let mi;
function hi(t) {
  mi = t;
}
function Je() {
  if (!mi)
    throw new Error("Function called outside component initialization");
  return mi;
}
function ft(t) {
  Je().$$.on_mount.push(t);
}
function Qt(t) {
  Je().$$.on_destroy.push(t);
}
function Ru() {
  const t = Je();
  return (e, n, { cancelable: i = !1 } = {}) => {
    const r = t.$$.callbacks[e];
    if (r) {
      const s = Ou(
        /** @type {string} */
        e,
        n,
        { cancelable: i }
      );
      return r.slice().forEach((a) => {
        a.call(t, s);
      }), !s.defaultPrevented;
    }
    return !0;
  };
}
function Ge(t, e) {
  return Je().$$.context.set(t, e), e;
}
function ze(t) {
  return Je().$$.context.get(t);
}
function Kn(t, e) {
  const n = t.$$.callbacks[e.type];
  n && n.slice().forEach((i) => i.call(this, e));
}
const Bn = [], le = [];
let qn = [];
const Ur = [], xa = /* @__PURE__ */ Promise.resolve();
let Br = !1;
function $a() {
  Br || (Br = !0, xa.then(eo));
}
function ns() {
  return $a(), xa;
}
function Vr(t) {
  qn.push(t);
}
function bt(t) {
  Ur.push(t);
}
const _r = /* @__PURE__ */ new Set();
let Hn = 0;
function eo() {
  if (Hn !== 0)
    return;
  const t = mi;
  do {
    try {
      for (; Hn < Bn.length; ) {
        const e = Bn[Hn];
        Hn++, hi(e), Du(e.$$);
      }
    } catch (e) {
      throw Bn.length = 0, Hn = 0, e;
    }
    for (hi(null), Bn.length = 0, Hn = 0; le.length; )
      le.pop()();
    for (let e = 0; e < qn.length; e += 1) {
      const n = qn[e];
      _r.has(n) || (_r.add(n), n());
    }
    qn.length = 0;
  } while (Bn.length);
  for (; Ur.length; )
    Ur.pop()();
  Br = !1, _r.clear(), hi(t);
}
function Du(t) {
  if (t.fragment !== null) {
    t.update(), Ye(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(Vr);
  }
}
function Mu(t) {
  const e = [], n = [];
  qn.forEach((i) => t.indexOf(i) === -1 ? e.push(i) : n.push(i)), n.forEach((i) => i()), qn = e;
}
const Di = /* @__PURE__ */ new Set();
let Sn;
function Ue() {
  Sn = {
    r: 0,
    c: [],
    p: Sn
    // parent group
  };
}
function Be() {
  Sn.r || Ye(Sn.c), Sn = Sn.p;
}
function y(t, e) {
  t && t.i && (Di.delete(t), t.i(e));
}
function O(t, e, n, i) {
  if (t && t.o) {
    if (Di.has(t))
      return;
    Di.add(t), Sn.c.push(() => {
      Di.delete(t), i && (n && t.d(1), i());
    }), t.o(e);
  } else
    i && i();
}
function zt(t) {
  return (t == null ? void 0 : t.length) !== void 0 ? t : Array.from(t);
}
function is(t, e) {
  O(t, 1, 1, () => {
    e.delete(t.key);
  });
}
function rs(t, e, n, i, r, s, a, l, o, u, c, f) {
  let d = t.length, h = s.length, p = d;
  const g = {};
  for (; p--; )
    g[t[p].key] = p;
  const m = [], E = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ new Map(), S = [];
  for (p = h; p--; ) {
    const _ = f(r, s, p), L = n(_);
    let k = a.get(L);
    k ? S.push(() => k.p(_, e)) : (k = u(L, _), k.c()), E.set(L, m[p] = k), L in g && v.set(L, Math.abs(p - g[L]));
  }
  const C = /* @__PURE__ */ new Set(), D = /* @__PURE__ */ new Set();
  function M(_) {
    y(_, 1), _.m(l, c), a.set(_.key, _), c = _.first, h--;
  }
  for (; d && h; ) {
    const _ = m[h - 1], L = t[d - 1], k = _.key, A = L.key;
    _ === L ? (c = _.first, d--, h--) : E.has(A) ? !a.has(k) || C.has(k) ? M(_) : D.has(A) ? d-- : v.get(k) > v.get(A) ? (D.add(k), M(_)) : (C.add(A), d--) : (o(L, a), d--);
  }
  for (; d--; ) {
    const _ = t[d];
    E.has(_.key) || o(_, a);
  }
  for (; h; )
    M(m[h - 1]);
  return Ye(S), m;
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
function Fe(t) {
  return typeof t == "object" && t !== null ? t : {};
}
function vt(t, e, n) {
  const i = t.$$.props[e];
  i !== void 0 && (t.$$.bound[i] = n, n(t.$$.ctx[i]));
}
function ie(t) {
  t && t.c();
}
function ee(t, e, n) {
  const { fragment: i, after_update: r } = t.$$;
  i && i.m(e, n), Vr(() => {
    const s = t.$$.on_mount.map(Ya).filter(pe);
    t.$$.on_destroy ? t.$$.on_destroy.push(...s) : Ye(s), t.$$.on_mount = [];
  }), r.forEach(Vr);
}
function te(t, e) {
  const n = t.$$;
  n.fragment !== null && (Mu(n.after_update), Ye(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []);
}
function ku(t, e) {
  t.$$.dirty[0] === -1 && (Bn.push(t), $a(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function De(t, e, n, i, r, s, a = null, l = [-1]) {
  const o = mi;
  hi(t);
  const u = t.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: s,
    update: Qe,
    not_equal: r,
    bound: vs(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (o ? o.$$.context : [])),
    // everything else
    callbacks: vs(),
    dirty: l,
    skip_bound: !1,
    root: e.target || o.$$.root
  };
  a && a(u.root);
  let c = !1;
  if (u.ctx = n ? n(t, e.props || {}, (f, d, ...h) => {
    const p = h.length ? h[0] : d;
    return u.ctx && r(u.ctx[f], u.ctx[f] = p) && (!u.skip_bound && u.bound[f] && u.bound[f](p), c && ku(t, f)), d;
  }) : [], u.update(), c = !0, Ye(u.before_update), u.fragment = i ? i(u.ctx) : !1, e.target) {
    if (e.hydrate) {
      const f = Su(e.target);
      u.fragment && u.fragment.l(f), f.forEach(B);
    } else
      u.fragment && u.fragment.c();
    e.intro && y(t.$$.fragment), ee(t, e.target, e.anchor), eo();
  }
  hi(o);
}
class Me {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    gr(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    gr(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    te(this, 1), this.$destroy = Qe;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, n) {
    if (!pe(n))
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
    this.$$set && !vu(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const Fu = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(Fu);
const to = "version-editor", no = "0.0.1", Nu = "Location", Hu = "Search", Pu = "UUID", wu = "Filename", Uu = "Author", Bu = "Type", Vu = "Version", Gu = "Date", ju = "Done", qu = "Filter Types", Wu = "Add Filter", zu = {
  location: Nu,
  search: Hu,
  uuid: Pu,
  filename: wu,
  author: Uu,
  type: Bu,
  version: Vu,
  date: Gu,
  "versionHistory.title": "Version History of file {filename}",
  "versionTable.heading": "Version Table",
  done: ju,
  filter_types: qu,
  add_filter: Wu
}, Ku = "Ort", Xu = "Suche", Yu = "UUID", Zu = "File Name", Qu = "Autor", Ju = "Typ", xu = "Version", $u = "Datum", ec = "Fertig", tc = "Filtertypen", nc = "Filter Hinzufügen", ic = {
  location: Ku,
  search: Xu,
  uuid: Yu,
  filename: Zu,
  author: Qu,
  type: Ju,
  version: xu,
  date: $u,
  "versionHistory.title": "Versionsverlauf der Datei {filename}",
  "versionTable.heading": "Versionstabelle",
  done: ec,
  filter_types: tc,
  add_filter: nc
}, Pn = [];
function rc(t, e) {
  return {
    subscribe: At(t, e).subscribe
  };
}
function At(t, e = Qe) {
  let n;
  const i = /* @__PURE__ */ new Set();
  function r(l) {
    if (Ce(t, l) && (t = l, n)) {
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
function $n(t, e, n) {
  const i = !Array.isArray(t), r = i ? [t] : t;
  if (!r.every(Boolean))
    throw new Error("derived() expects stores as input, got a falsy value");
  const s = e.length < 2;
  return rc(n, (a, l) => {
    let o = !1;
    const u = [];
    let c = 0, f = Qe;
    const d = () => {
      if (c)
        return;
      f();
      const p = e(i ? u[0] : u, a, l);
      s ? a(p) : f = pe(p) ? p : Qe;
    }, h = r.map(
      (p, g) => $r(
        p,
        (m) => {
          u[g] = m, c &= ~(1 << g), o && d();
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
function sc(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var lc = function(e) {
  return ac(e) && !oc(e);
};
function ac(t) {
  return !!t && typeof t == "object";
}
function oc(t) {
  var e = Object.prototype.toString.call(t);
  return e === "[object RegExp]" || e === "[object Date]" || fc(t);
}
var uc = typeof Symbol == "function" && Symbol.for, cc = uc ? Symbol.for("react.element") : 60103;
function fc(t) {
  return t.$$typeof === cc;
}
function dc(t) {
  return Array.isArray(t) ? [] : {};
}
function pi(t, e) {
  return e.clone !== !1 && e.isMergeableObject(t) ? Xn(dc(t), t, e) : t;
}
function hc(t, e, n) {
  return t.concat(e).map(function(i) {
    return pi(i, n);
  });
}
function mc(t, e) {
  if (!e.customMerge)
    return Xn;
  var n = e.customMerge(t);
  return typeof n == "function" ? n : Xn;
}
function pc(t) {
  return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(t).filter(function(e) {
    return Object.propertyIsEnumerable.call(t, e);
  }) : [];
}
function Es(t) {
  return Object.keys(t).concat(pc(t));
}
function io(t, e) {
  try {
    return e in t;
  } catch {
    return !1;
  }
}
function gc(t, e) {
  return io(t, e) && !(Object.hasOwnProperty.call(t, e) && Object.propertyIsEnumerable.call(t, e));
}
function _c(t, e, n) {
  var i = {};
  return n.isMergeableObject(t) && Es(t).forEach(function(r) {
    i[r] = pi(t[r], n);
  }), Es(e).forEach(function(r) {
    gc(t, r) || (io(t, r) && n.isMergeableObject(e[r]) ? i[r] = mc(r, n)(t[r], e[r], n) : i[r] = pi(e[r], n));
  }), i;
}
function Xn(t, e, n) {
  n = n || {}, n.arrayMerge = n.arrayMerge || hc, n.isMergeableObject = n.isMergeableObject || lc, n.cloneUnlessOtherwiseSpecified = pi;
  var i = Array.isArray(e), r = Array.isArray(t), s = i === r;
  return s ? i ? n.arrayMerge(t, e, n) : _c(t, e, n) : pi(e, n);
}
Xn.all = function(e, n) {
  if (!Array.isArray(e))
    throw new Error("first argument should be an array");
  return e.reduce(function(i, r) {
    return Xn(i, r, n);
  }, {});
};
var bc = Xn, vc = bc;
const Ic = /* @__PURE__ */ sc(vc);
var Gr = function(t, e) {
  return Gr = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
    n.__proto__ = i;
  } || function(n, i) {
    for (var r in i)
      Object.prototype.hasOwnProperty.call(i, r) && (n[r] = i[r]);
  }, Gr(t, e);
};
function at(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  Gr(t, e);
  function n() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : (n.prototype = e.prototype, new n());
}
var fe = function() {
  return fe = Object.assign || function(e) {
    for (var n, i = 1, r = arguments.length; i < r; i++) {
      n = arguments[i];
      for (var s in n)
        Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s]);
    }
    return e;
  }, fe.apply(this, arguments);
};
function Ec(t, e) {
  var n = {};
  for (var i in t)
    Object.prototype.hasOwnProperty.call(t, i) && e.indexOf(i) < 0 && (n[i] = t[i]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var r = 0, i = Object.getOwnPropertySymbols(t); r < i.length; r++)
      e.indexOf(i[r]) < 0 && Object.prototype.propertyIsEnumerable.call(t, i[r]) && (n[i[r]] = t[i[r]]);
  return n;
}
function ro(t, e, n, i) {
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
function ss(t, e) {
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
function Rt(t) {
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
function Yn(t, e) {
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
function Wn(t) {
  return this instanceof Wn ? (this.v = t, this) : new Wn(t);
}
function Ac(t, e, n) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var i = n.apply(t, e || []), r, s = [];
  return r = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype), l("next"), l("throw"), l("return", a), r[Symbol.asyncIterator] = function() {
    return this;
  }, r;
  function a(h) {
    return function(p) {
      return Promise.resolve(p).then(h, f);
    };
  }
  function l(h, p) {
    i[h] && (r[h] = function(g) {
      return new Promise(function(m, E) {
        s.push([h, g, m, E]) > 1 || o(h, g);
      });
    }, p && (r[h] = p(r[h])));
  }
  function o(h, p) {
    try {
      u(i[h](p));
    } catch (g) {
      d(s[0][3], g);
    }
  }
  function u(h) {
    h.value instanceof Wn ? Promise.resolve(h.value.v).then(c, f) : d(s[0][2], h);
  }
  function c(h) {
    o("next", h);
  }
  function f(h) {
    o("throw", h);
  }
  function d(h, p) {
    h(p), s.shift(), s.length && o(s[0][0], s[0][1]);
  }
}
function yc(t) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var e = t[Symbol.asyncIterator], n;
  return e ? e.call(t) : (t = typeof Rt == "function" ? Rt(t) : t[Symbol.iterator](), n = {}, i("next"), i("throw"), i("return"), n[Symbol.asyncIterator] = function() {
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
function br(t, e) {
  var n = e && e.cache ? e.cache : Dc, i = e && e.serializer ? e.serializer : Oc, r = e && e.strategy ? e.strategy : Tc;
  return r(t, {
    cache: n,
    serializer: i
  });
}
function Cc(t) {
  return t == null || typeof t == "number" || typeof t == "boolean";
}
function Sc(t, e, n, i) {
  var r = Cc(i) ? i : n(i), s = e.get(r);
  return typeof s > "u" && (s = t.call(this, i), e.set(r, s)), s;
}
function so(t, e, n) {
  var i = Array.prototype.slice.call(arguments, 3), r = n(i), s = e.get(r);
  return typeof s > "u" && (s = t.apply(this, i), e.set(r, s)), s;
}
function lo(t, e, n, i, r) {
  return n.bind(e, t, i, r);
}
function Tc(t, e) {
  var n = t.length === 1 ? Sc : so;
  return lo(t, this, n, e.cache.create(), e.serializer);
}
function Lc(t, e) {
  return lo(t, this, so, e.cache.create(), e.serializer);
}
var Oc = function() {
  return JSON.stringify(arguments);
}, Rc = (
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
), Dc = {
  create: function() {
    return new Rc();
  }
}, vr = {
  variadic: Lc
}, tt;
(function(t) {
  t[t.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", t[t.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", t[t.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", t[t.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", t[t.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", t[t.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", t[t.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", t[t.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", t[t.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", t[t.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", t[t.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", t[t.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", t[t.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", t[t.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", t[t.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", t[t.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", t[t.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", t[t.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", t[t.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", t[t.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", t[t.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", t[t.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", t[t.INVALID_TAG = 23] = "INVALID_TAG", t[t.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", t[t.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", t[t.UNCLOSED_TAG = 27] = "UNCLOSED_TAG";
})(tt || (tt = {}));
var pt;
(function(t) {
  t[t.literal = 0] = "literal", t[t.argument = 1] = "argument", t[t.number = 2] = "number", t[t.date = 3] = "date", t[t.time = 4] = "time", t[t.select = 5] = "select", t[t.plural = 6] = "plural", t[t.pound = 7] = "pound", t[t.tag = 8] = "tag";
})(pt || (pt = {}));
var Zn;
(function(t) {
  t[t.number = 0] = "number", t[t.dateTime = 1] = "dateTime";
})(Zn || (Zn = {}));
function As(t) {
  return t.type === pt.literal;
}
function Mc(t) {
  return t.type === pt.argument;
}
function ao(t) {
  return t.type === pt.number;
}
function oo(t) {
  return t.type === pt.date;
}
function uo(t) {
  return t.type === pt.time;
}
function co(t) {
  return t.type === pt.select;
}
function fo(t) {
  return t.type === pt.plural;
}
function kc(t) {
  return t.type === pt.pound;
}
function ho(t) {
  return t.type === pt.tag;
}
function mo(t) {
  return !!(t && typeof t == "object" && t.type === Zn.number);
}
function jr(t) {
  return !!(t && typeof t == "object" && t.type === Zn.dateTime);
}
var po = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/, Fc = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
function Nc(t) {
  var e = {};
  return t.replace(Fc, function(n) {
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
var Hc = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
function Pc(t) {
  if (t.length === 0)
    throw new Error("Number skeleton cannot be empty");
  for (var e = t.split(Hc).filter(function(d) {
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
function wc(t) {
  return t.replace(/^(.*?)-/, "");
}
var ys = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g, go = /^(@+)?(\+|#+)?[rs]?$/g, Uc = /(\*)(0+)|(#+)(0+)|(0+)/g, _o = /^(0+)$/;
function Cs(t) {
  var e = {};
  return t[t.length - 1] === "r" ? e.roundingPriority = "morePrecision" : t[t.length - 1] === "s" && (e.roundingPriority = "lessPrecision"), t.replace(go, function(n, i, r) {
    return typeof r != "string" ? (e.minimumSignificantDigits = i.length, e.maximumSignificantDigits = i.length) : r === "+" ? e.minimumSignificantDigits = i.length : i[0] === "#" ? e.maximumSignificantDigits = i.length : (e.minimumSignificantDigits = i.length, e.maximumSignificantDigits = i.length + (typeof r == "string" ? r.length : 0)), "";
  }), e;
}
function bo(t) {
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
function Bc(t) {
  var e;
  if (t[0] === "E" && t[1] === "E" ? (e = {
    notation: "engineering"
  }, t = t.slice(2)) : t[0] === "E" && (e = {
    notation: "scientific"
  }, t = t.slice(1)), e) {
    var n = t.slice(0, 2);
    if (n === "+!" ? (e.signDisplay = "always", t = t.slice(2)) : n === "+?" && (e.signDisplay = "exceptZero", t = t.slice(2)), !_o.test(t))
      throw new Error("Malformed concise eng/scientific notation");
    e.minimumIntegerDigits = t.length;
  }
  return e;
}
function Ss(t) {
  var e = {}, n = bo(t);
  return n || e;
}
function Vc(t) {
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
        e.style = "unit", e.unit = wc(r.options[0]);
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
        e = fe(fe(fe({}, e), { notation: "scientific" }), r.options.reduce(function(o, u) {
          return fe(fe({}, o), Ss(u));
        }, {}));
        continue;
      case "engineering":
        e = fe(fe(fe({}, e), { notation: "engineering" }), r.options.reduce(function(o, u) {
          return fe(fe({}, o), Ss(u));
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
        r.options[0].replace(Uc, function(o, u, c, f, d, h) {
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
    if (_o.test(r.stem)) {
      e.minimumIntegerDigits = r.stem.length;
      continue;
    }
    if (ys.test(r.stem)) {
      if (r.options.length > 1)
        throw new RangeError("Fraction-precision stems only accept a single optional option");
      r.stem.replace(ys, function(o, u, c, f, d, h) {
        return c === "*" ? e.minimumFractionDigits = u.length : f && f[0] === "#" ? e.maximumFractionDigits = f.length : d && h ? (e.minimumFractionDigits = d.length, e.maximumFractionDigits = d.length + h.length) : (e.minimumFractionDigits = u.length, e.maximumFractionDigits = u.length), "";
      });
      var s = r.options[0];
      s === "w" ? e = fe(fe({}, e), { trailingZeroDisplay: "stripIfInteger" }) : s && (e = fe(fe({}, e), Cs(s)));
      continue;
    }
    if (go.test(r.stem)) {
      e = fe(fe({}, e), Cs(r.stem));
      continue;
    }
    var a = bo(r.stem);
    a && (e = fe(fe({}, e), a));
    var l = Bc(r.stem);
    l && (e = fe(fe({}, e), l));
  }
  return e;
}
var yi = {
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
function Gc(t, e) {
  for (var n = "", i = 0; i < t.length; i++) {
    var r = t.charAt(i);
    if (r === "j") {
      for (var s = 0; i + 1 < t.length && t.charAt(i + 1) === r; )
        s++, i++;
      var a = 1 + (s & 1), l = s < 2 ? 1 : 3 + (s >> 1), o = "a", u = jc(e);
      for ((u == "H" || u == "k") && (l = 0); l-- > 0; )
        n += o;
      for (; a-- > 0; )
        n = u + n;
    } else
      r === "J" ? n += "H" : n += r;
  }
  return n;
}
function jc(t) {
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
  var r = yi[i || ""] || yi[n || ""] || yi["".concat(n, "-001")] || yi["001"];
  return r[0];
}
var Ir, qc = new RegExp("^".concat(po.source, "*")), Wc = new RegExp("".concat(po.source, "*$"));
function it(t, e) {
  return { start: t, end: e };
}
var zc = !!String.prototype.startsWith && "_a".startsWith("a", 1), Kc = !!String.fromCodePoint, Xc = !!Object.fromEntries, Yc = !!String.prototype.codePointAt, Zc = !!String.prototype.trimStart, Qc = !!String.prototype.trimEnd, Jc = !!Number.isSafeInteger, xc = Jc ? Number.isSafeInteger : function(t) {
  return typeof t == "number" && isFinite(t) && Math.floor(t) === t && Math.abs(t) <= 9007199254740991;
}, qr = !0;
try {
  var $c = Io("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  qr = ((Ir = $c.exec("a")) === null || Ir === void 0 ? void 0 : Ir[0]) === "a";
} catch {
  qr = !1;
}
var Ts = zc ? (
  // Native
  function(e, n, i) {
    return e.startsWith(n, i);
  }
) : (
  // For IE11
  function(e, n, i) {
    return e.slice(i, i + n.length) === n;
  }
), Wr = Kc ? String.fromCodePoint : (
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
), Ls = (
  // native
  Xc ? Object.fromEntries : (
    // Ponyfill
    function(e) {
      for (var n = {}, i = 0, r = e; i < r.length; i++) {
        var s = r[i], a = s[0], l = s[1];
        n[a] = l;
      }
      return n;
    }
  )
), vo = Yc ? (
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
), ef = Zc ? (
  // Native
  function(e) {
    return e.trimStart();
  }
) : (
  // Ponyfill
  function(e) {
    return e.replace(qc, "");
  }
), tf = Qc ? (
  // Native
  function(e) {
    return e.trimEnd();
  }
) : (
  // Ponyfill
  function(e) {
    return e.replace(Wc, "");
  }
);
function Io(t, e) {
  return new RegExp(t, e);
}
var zr;
if (qr) {
  var Os = Io("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  zr = function(e, n) {
    var i;
    Os.lastIndex = n;
    var r = Os.exec(e);
    return (i = r[1]) !== null && i !== void 0 ? i : "";
  };
} else
  zr = function(e, n) {
    for (var i = []; ; ) {
      var r = vo(e, n);
      if (r === void 0 || Eo(r) || lf(r))
        break;
      i.push(r), n += r >= 65536 ? 2 : 1;
    }
    return Wr.apply(void 0, i);
  };
var nf = (
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
              type: pt.pound,
              location: it(l, this.clonePosition())
            });
          } else if (s === 60 && !this.ignoreTag && this.peek() === 47) {
            if (i)
              break;
            return this.error(tt.UNMATCHED_CLOSING_TAG, it(this.clonePosition(), this.clonePosition()));
          } else if (s === 60 && !this.ignoreTag && Kr(this.peek() || 0)) {
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
            type: pt.literal,
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
          if (this.isEOF() || !Kr(this.char()))
            return this.error(tt.INVALID_TAG, it(l, this.clonePosition()));
          var o = this.clonePosition(), u = this.parseTagName();
          return r !== u ? this.error(tt.UNMATCHED_CLOSING_TAG, it(o, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
            val: {
              type: pt.tag,
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
      for (this.bump(); !this.isEOF() && sf(this.char()); )
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
        val: { type: pt.literal, value: r, location: o },
        err: null
      };
    }, t.prototype.tryParseLeftAngleBracket = function() {
      return !this.isEOF() && this.char() === 60 && (this.ignoreTag || // If at the opening tag or closing tag position, bail.
      !rf(this.peek() || 0)) ? (this.bump(), "<") : null;
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
      return Wr.apply(void 0, n);
    }, t.prototype.tryParseUnquoted = function(e, n) {
      if (this.isEOF())
        return null;
      var i = this.char();
      return i === 60 || i === 123 || i === 35 && (n === "plural" || n === "selectordinal") || i === 125 && e > 0 ? null : (this.bump(), Wr(i));
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
              type: pt.argument,
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
      var e = this.clonePosition(), n = this.offset(), i = zr(this.message, n), r = n + i.length;
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
            var d = tf(f.val);
            if (d.length === 0)
              return this.error(tt.EXPECT_ARGUMENT_STYLE, it(this.clonePosition(), this.clonePosition()));
            var h = it(c, this.clonePosition());
            u = { style: d, styleLocation: h };
          }
          var p = this.tryParseArgumentClose(r);
          if (p.err)
            return p;
          var g = it(r, this.clonePosition());
          if (u && Ts(u == null ? void 0 : u.style, "::", 0)) {
            var m = ef(u.style.slice(2));
            if (l === "number") {
              var f = this.parseNumberSkeletonFromString(m, u.styleLocation);
              return f.err ? f : {
                val: { type: pt.number, value: i, location: g, style: f.val },
                err: null
              };
            } else {
              if (m.length === 0)
                return this.error(tt.EXPECT_DATE_TIME_SKELETON, g);
              var E = m;
              this.locale && (E = Gc(m, this.locale));
              var d = {
                type: Zn.dateTime,
                pattern: E,
                location: u.styleLocation,
                parsedOptions: this.shouldParseSkeletons ? Nc(E) : {}
              }, v = l === "date" ? pt.date : pt.time;
              return {
                val: { type: v, value: i, location: g, style: d },
                err: null
              };
            }
          }
          return {
            val: {
              type: l === "number" ? pt.number : l === "date" ? pt.date : pt.time,
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
            return this.error(tt.EXPECT_SELECT_ARGUMENT_OPTIONS, it(S, fe({}, S)));
          this.bumpSpace();
          var C = this.parseIdentifierIfPossible(), D = 0;
          if (l !== "select" && C.value === "offset") {
            if (!this.bumpIf(":"))
              return this.error(tt.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, it(this.clonePosition(), this.clonePosition()));
            this.bumpSpace();
            var f = this.tryParseDecimalInteger(tt.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, tt.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);
            if (f.err)
              return f;
            this.bumpSpace(), C = this.parseIdentifierIfPossible(), D = f.val;
          }
          var M = this.tryParsePluralOrSelectOptions(e, l, n, C);
          if (M.err)
            return M;
          var p = this.tryParseArgumentClose(r);
          if (p.err)
            return p;
          var _ = it(r, this.clonePosition());
          return l === "select" ? {
            val: {
              type: pt.select,
              value: i,
              options: Ls(M.val),
              location: _
            },
            err: null
          } : {
            val: {
              type: pt.plural,
              value: i,
              options: Ls(M.val),
              offset: D,
              pluralType: l === "plural" ? "cardinal" : "ordinal",
              location: _
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
        i = Pc(e);
      } catch {
        return this.error(tt.INVALID_NUMBER_SKELETON, n);
      }
      return {
        val: {
          type: Zn.number,
          tokens: i,
          location: n,
          parsedOptions: this.shouldParseSkeletons ? Vc(i) : {}
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
        var p = this.parseMessage(e + 1, n, i);
        if (p.err)
          return p;
        var g = this.tryParseArgumentClose(h);
        if (g.err)
          return g;
        l.push([
          u,
          {
            value: p.val,
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
      return s ? (a *= i, xc(a) ? { val: a, err: null } : this.error(n, o)) : this.error(e, o);
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
      var n = vo(this.message, e);
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
      if (Ts(this.message, e, this.offset())) {
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
      for (; !this.isEOF() && Eo(this.char()); )
        this.bump();
    }, t.prototype.peek = function() {
      if (this.isEOF())
        return null;
      var e = this.char(), n = this.offset(), i = this.message.charCodeAt(n + (e >= 65536 ? 2 : 1));
      return i ?? null;
    }, t;
  }()
);
function Kr(t) {
  return t >= 97 && t <= 122 || t >= 65 && t <= 90;
}
function rf(t) {
  return Kr(t) || t === 47;
}
function sf(t) {
  return t === 45 || t === 46 || t >= 48 && t <= 57 || t === 95 || t >= 97 && t <= 122 || t >= 65 && t <= 90 || t == 183 || t >= 192 && t <= 214 || t >= 216 && t <= 246 || t >= 248 && t <= 893 || t >= 895 && t <= 8191 || t >= 8204 && t <= 8205 || t >= 8255 && t <= 8256 || t >= 8304 && t <= 8591 || t >= 11264 && t <= 12271 || t >= 12289 && t <= 55295 || t >= 63744 && t <= 64975 || t >= 65008 && t <= 65533 || t >= 65536 && t <= 983039;
}
function Eo(t) {
  return t >= 9 && t <= 13 || t === 32 || t === 133 || t >= 8206 && t <= 8207 || t === 8232 || t === 8233;
}
function lf(t) {
  return t >= 33 && t <= 35 || t === 36 || t >= 37 && t <= 39 || t === 40 || t === 41 || t === 42 || t === 43 || t === 44 || t === 45 || t >= 46 && t <= 47 || t >= 58 && t <= 59 || t >= 60 && t <= 62 || t >= 63 && t <= 64 || t === 91 || t === 92 || t === 93 || t === 94 || t === 96 || t === 123 || t === 124 || t === 125 || t === 126 || t === 161 || t >= 162 && t <= 165 || t === 166 || t === 167 || t === 169 || t === 171 || t === 172 || t === 174 || t === 176 || t === 177 || t === 182 || t === 187 || t === 191 || t === 215 || t === 247 || t >= 8208 && t <= 8213 || t >= 8214 && t <= 8215 || t === 8216 || t === 8217 || t === 8218 || t >= 8219 && t <= 8220 || t === 8221 || t === 8222 || t === 8223 || t >= 8224 && t <= 8231 || t >= 8240 && t <= 8248 || t === 8249 || t === 8250 || t >= 8251 && t <= 8254 || t >= 8257 && t <= 8259 || t === 8260 || t === 8261 || t === 8262 || t >= 8263 && t <= 8273 || t === 8274 || t === 8275 || t >= 8277 && t <= 8286 || t >= 8592 && t <= 8596 || t >= 8597 && t <= 8601 || t >= 8602 && t <= 8603 || t >= 8604 && t <= 8607 || t === 8608 || t >= 8609 && t <= 8610 || t === 8611 || t >= 8612 && t <= 8613 || t === 8614 || t >= 8615 && t <= 8621 || t === 8622 || t >= 8623 && t <= 8653 || t >= 8654 && t <= 8655 || t >= 8656 && t <= 8657 || t === 8658 || t === 8659 || t === 8660 || t >= 8661 && t <= 8691 || t >= 8692 && t <= 8959 || t >= 8960 && t <= 8967 || t === 8968 || t === 8969 || t === 8970 || t === 8971 || t >= 8972 && t <= 8991 || t >= 8992 && t <= 8993 || t >= 8994 && t <= 9e3 || t === 9001 || t === 9002 || t >= 9003 && t <= 9083 || t === 9084 || t >= 9085 && t <= 9114 || t >= 9115 && t <= 9139 || t >= 9140 && t <= 9179 || t >= 9180 && t <= 9185 || t >= 9186 && t <= 9254 || t >= 9255 && t <= 9279 || t >= 9280 && t <= 9290 || t >= 9291 && t <= 9311 || t >= 9472 && t <= 9654 || t === 9655 || t >= 9656 && t <= 9664 || t === 9665 || t >= 9666 && t <= 9719 || t >= 9720 && t <= 9727 || t >= 9728 && t <= 9838 || t === 9839 || t >= 9840 && t <= 10087 || t === 10088 || t === 10089 || t === 10090 || t === 10091 || t === 10092 || t === 10093 || t === 10094 || t === 10095 || t === 10096 || t === 10097 || t === 10098 || t === 10099 || t === 10100 || t === 10101 || t >= 10132 && t <= 10175 || t >= 10176 && t <= 10180 || t === 10181 || t === 10182 || t >= 10183 && t <= 10213 || t === 10214 || t === 10215 || t === 10216 || t === 10217 || t === 10218 || t === 10219 || t === 10220 || t === 10221 || t === 10222 || t === 10223 || t >= 10224 && t <= 10239 || t >= 10240 && t <= 10495 || t >= 10496 && t <= 10626 || t === 10627 || t === 10628 || t === 10629 || t === 10630 || t === 10631 || t === 10632 || t === 10633 || t === 10634 || t === 10635 || t === 10636 || t === 10637 || t === 10638 || t === 10639 || t === 10640 || t === 10641 || t === 10642 || t === 10643 || t === 10644 || t === 10645 || t === 10646 || t === 10647 || t === 10648 || t >= 10649 && t <= 10711 || t === 10712 || t === 10713 || t === 10714 || t === 10715 || t >= 10716 && t <= 10747 || t === 10748 || t === 10749 || t >= 10750 && t <= 11007 || t >= 11008 && t <= 11055 || t >= 11056 && t <= 11076 || t >= 11077 && t <= 11078 || t >= 11079 && t <= 11084 || t >= 11085 && t <= 11123 || t >= 11124 && t <= 11125 || t >= 11126 && t <= 11157 || t === 11158 || t >= 11159 && t <= 11263 || t >= 11776 && t <= 11777 || t === 11778 || t === 11779 || t === 11780 || t === 11781 || t >= 11782 && t <= 11784 || t === 11785 || t === 11786 || t === 11787 || t === 11788 || t === 11789 || t >= 11790 && t <= 11798 || t === 11799 || t >= 11800 && t <= 11801 || t === 11802 || t === 11803 || t === 11804 || t === 11805 || t >= 11806 && t <= 11807 || t === 11808 || t === 11809 || t === 11810 || t === 11811 || t === 11812 || t === 11813 || t === 11814 || t === 11815 || t === 11816 || t === 11817 || t >= 11818 && t <= 11822 || t === 11823 || t >= 11824 && t <= 11833 || t >= 11834 && t <= 11835 || t >= 11836 && t <= 11839 || t === 11840 || t === 11841 || t === 11842 || t >= 11843 && t <= 11855 || t >= 11856 && t <= 11857 || t === 11858 || t >= 11859 && t <= 11903 || t >= 12289 && t <= 12291 || t === 12296 || t === 12297 || t === 12298 || t === 12299 || t === 12300 || t === 12301 || t === 12302 || t === 12303 || t === 12304 || t === 12305 || t >= 12306 && t <= 12307 || t === 12308 || t === 12309 || t === 12310 || t === 12311 || t === 12312 || t === 12313 || t === 12314 || t === 12315 || t === 12316 || t === 12317 || t >= 12318 && t <= 12319 || t === 12320 || t === 12336 || t === 64830 || t === 64831 || t >= 65093 && t <= 65094;
}
function Xr(t) {
  t.forEach(function(e) {
    if (delete e.location, co(e) || fo(e))
      for (var n in e.options)
        delete e.options[n].location, Xr(e.options[n].value);
    else
      ao(e) && mo(e.style) || (oo(e) || uo(e)) && jr(e.style) ? delete e.style.location : ho(e) && Xr(e.children);
  });
}
function af(t, e) {
  e === void 0 && (e = {}), e = fe({ shouldParseSkeletons: !0, requiresOtherClause: !0 }, e);
  var n = new nf(t, e).parse();
  if (n.err) {
    var i = SyntaxError(tt[n.err.kind]);
    throw i.location = n.err.location, i.originalMessage = n.err.message, i;
  }
  return e != null && e.captureLocation || Xr(n.val), n.val;
}
var Qn;
(function(t) {
  t.MISSING_VALUE = "MISSING_VALUE", t.INVALID_VALUE = "INVALID_VALUE", t.MISSING_INTL_API = "MISSING_INTL_API";
})(Qn || (Qn = {}));
var Vi = (
  /** @class */
  function(t) {
    at(e, t);
    function e(n, i, r) {
      var s = t.call(this, n) || this;
      return s.code = i, s.originalMessage = r, s;
    }
    return e.prototype.toString = function() {
      return "[formatjs Error: ".concat(this.code, "] ").concat(this.message);
    }, e;
  }(Error)
), Rs = (
  /** @class */
  function(t) {
    at(e, t);
    function e(n, i, r, s) {
      return t.call(this, 'Invalid values for "'.concat(n, '": "').concat(i, '". Options are "').concat(Object.keys(r).join('", "'), '"'), Qn.INVALID_VALUE, s) || this;
    }
    return e;
  }(Vi)
), of = (
  /** @class */
  function(t) {
    at(e, t);
    function e(n, i, r) {
      return t.call(this, 'Value for "'.concat(n, '" must be of type ').concat(i), Qn.INVALID_VALUE, r) || this;
    }
    return e;
  }(Vi)
), uf = (
  /** @class */
  function(t) {
    at(e, t);
    function e(n, i) {
      return t.call(this, 'The intl string context variable "'.concat(n, '" was not provided to the string "').concat(i, '"'), Qn.MISSING_VALUE, i) || this;
    }
    return e;
  }(Vi)
), Ht;
(function(t) {
  t[t.literal = 0] = "literal", t[t.object = 1] = "object";
})(Ht || (Ht = {}));
function cf(t) {
  return t.length < 2 ? t : t.reduce(function(e, n) {
    var i = e[e.length - 1];
    return !i || i.type !== Ht.literal || n.type !== Ht.literal ? e.push(n) : i.value += n.value, e;
  }, []);
}
function ff(t) {
  return typeof t == "function";
}
function Mi(t, e, n, i, r, s, a) {
  if (t.length === 1 && As(t[0]))
    return [
      {
        type: Ht.literal,
        value: t[0].value
      }
    ];
  for (var l = [], o = 0, u = t; o < u.length; o++) {
    var c = u[o];
    if (As(c)) {
      l.push({
        type: Ht.literal,
        value: c.value
      });
      continue;
    }
    if (kc(c)) {
      typeof s == "number" && l.push({
        type: Ht.literal,
        value: n.getNumberFormat(e).format(s)
      });
      continue;
    }
    var f = c.value;
    if (!(r && f in r))
      throw new uf(f, a);
    var d = r[f];
    if (Mc(c)) {
      (!d || typeof d == "string" || typeof d == "number") && (d = typeof d == "string" || typeof d == "number" ? String(d) : ""), l.push({
        type: typeof d == "string" ? Ht.literal : Ht.object,
        value: d
      });
      continue;
    }
    if (oo(c)) {
      var h = typeof c.style == "string" ? i.date[c.style] : jr(c.style) ? c.style.parsedOptions : void 0;
      l.push({
        type: Ht.literal,
        value: n.getDateTimeFormat(e, h).format(d)
      });
      continue;
    }
    if (uo(c)) {
      var h = typeof c.style == "string" ? i.time[c.style] : jr(c.style) ? c.style.parsedOptions : i.time.medium;
      l.push({
        type: Ht.literal,
        value: n.getDateTimeFormat(e, h).format(d)
      });
      continue;
    }
    if (ao(c)) {
      var h = typeof c.style == "string" ? i.number[c.style] : mo(c.style) ? c.style.parsedOptions : void 0;
      h && h.scale && (d = d * (h.scale || 1)), l.push({
        type: Ht.literal,
        value: n.getNumberFormat(e, h).format(d)
      });
      continue;
    }
    if (ho(c)) {
      var p = c.children, g = c.value, m = r[g];
      if (!ff(m))
        throw new of(g, "function", a);
      var E = Mi(p, e, n, i, r, s), v = m(E.map(function(D) {
        return D.value;
      }));
      Array.isArray(v) || (v = [v]), l.push.apply(l, v.map(function(D) {
        return {
          type: typeof D == "string" ? Ht.literal : Ht.object,
          value: D
        };
      }));
    }
    if (co(c)) {
      var S = c.options[d] || c.options.other;
      if (!S)
        throw new Rs(c.value, d, Object.keys(c.options), a);
      l.push.apply(l, Mi(S.value, e, n, i, r));
      continue;
    }
    if (fo(c)) {
      var S = c.options["=".concat(d)];
      if (!S) {
        if (!Intl.PluralRules)
          throw new Vi(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`, Qn.MISSING_INTL_API, a);
        var C = n.getPluralRules(e, { type: c.pluralType }).select(d - (c.offset || 0));
        S = c.options[C] || c.options.other;
      }
      if (!S)
        throw new Rs(c.value, d, Object.keys(c.options), a);
      l.push.apply(l, Mi(S.value, e, n, i, r, d - (c.offset || 0)));
      continue;
    }
  }
  return cf(l);
}
function df(t, e) {
  return e ? fe(fe(fe({}, t || {}), e || {}), Object.keys(t).reduce(function(n, i) {
    return n[i] = fe(fe({}, t[i]), e[i] || {}), n;
  }, {})) : t;
}
function hf(t, e) {
  return e ? Object.keys(t).reduce(function(n, i) {
    return n[i] = df(t[i], e[i]), n;
  }, fe({}, t)) : t;
}
function Er(t) {
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
function mf(t) {
  return t === void 0 && (t = {
    number: {},
    dateTime: {},
    pluralRules: {}
  }), {
    getNumberFormat: br(function() {
      for (var e, n = [], i = 0; i < arguments.length; i++)
        n[i] = arguments[i];
      return new ((e = Intl.NumberFormat).bind.apply(e, bn([void 0], n, !1)))();
    }, {
      cache: Er(t.number),
      strategy: vr.variadic
    }),
    getDateTimeFormat: br(function() {
      for (var e, n = [], i = 0; i < arguments.length; i++)
        n[i] = arguments[i];
      return new ((e = Intl.DateTimeFormat).bind.apply(e, bn([void 0], n, !1)))();
    }, {
      cache: Er(t.dateTime),
      strategy: vr.variadic
    }),
    getPluralRules: br(function() {
      for (var e, n = [], i = 0; i < arguments.length; i++)
        n[i] = arguments[i];
      return new ((e = Intl.PluralRules).bind.apply(e, bn([void 0], n, !1)))();
    }, {
      cache: Er(t.pluralRules),
      strategy: vr.variadic
    })
  };
}
var Ao = (
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
          return !f.length || d.type !== Ht.literal || typeof f[f.length - 1] != "string" ? f.push(d.value) : f[f.length - 1] += d.value, f;
        }, []);
        return c.length <= 1 ? c[0] || "" : c;
      }, this.formatToParts = function(o) {
        return Mi(s.ast, s.locales, s.formatters, s.formats, o, void 0, s.message);
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
        var l = Ec(a, ["formatters"]);
        this.ast = t.__parse(e, fe(fe({}, l), { locale: this.resolvedLocale }));
      } else
        this.ast = e;
      if (!Array.isArray(this.ast))
        throw new TypeError("A message must be provided as a String or AST.");
      this.formats = hf(t.formats, i), this.formatters = r && r.formatters || mf(this.formatterCache);
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
    }, t.__parse = af, t.formats = {
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
function pf(t, e) {
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
const _n = {}, gf = (t, e, n) => n && (e in _n || (_n[e] = {}), t in _n[e] || (_n[e][t] = n), n), yo = (t, e) => {
  if (e == null)
    return;
  if (e in _n && t in _n[e])
    return _n[e][t];
  const n = bi(e);
  for (let i = 0; i < n.length; i++) {
    const r = n[i], s = bf(r, t);
    if (s)
      return gf(t, e, s);
  }
};
let ls;
const _i = At({});
function _f(t) {
  return ls[t] || null;
}
function Co(t) {
  return t in ls;
}
function bf(t, e) {
  if (!Co(t))
    return null;
  const n = _f(t);
  return pf(n, e);
}
function vf(t) {
  if (t == null)
    return;
  const e = bi(t);
  for (let n = 0; n < e.length; n++) {
    const i = e[n];
    if (Co(i))
      return i;
  }
}
function So(t, ...e) {
  delete _n[t], _i.update((n) => (n[t] = Ic.all([n[t] || {}, ...e]), n));
}
$n(
  [_i],
  ([t]) => Object.keys(t)
);
_i.subscribe((t) => ls = t);
const ki = {};
function If(t, e) {
  ki[t].delete(e), ki[t].size === 0 && delete ki[t];
}
function To(t) {
  return ki[t];
}
function Ef(t) {
  return bi(t).map((e) => {
    const n = To(e);
    return [e, n ? [...n] : []];
  }).filter(([, e]) => e.length > 0);
}
function Ni(t) {
  return t == null ? !1 : bi(t).some(
    (e) => {
      var n;
      return (n = To(e)) == null ? void 0 : n.size;
    }
  );
}
function Af(t, e) {
  return Promise.all(
    e.map((i) => (If(t, i), i().then((r) => r.default || r)))
  ).then((i) => So(t, ...i));
}
const ri = {};
function Lo(t) {
  if (!Ni(t))
    return t in ri ? ri[t] : Promise.resolve();
  const e = Ef(t);
  return ri[t] = Promise.all(
    e.map(
      ([n, i]) => Af(n, i)
    )
  ).then(() => {
    if (Ni(t))
      return Lo(t);
    delete ri[t];
  }), ri[t];
}
var Ds = Object.getOwnPropertySymbols, yf = Object.prototype.hasOwnProperty, Cf = Object.prototype.propertyIsEnumerable, Sf = (t, e) => {
  var n = {};
  for (var i in t)
    yf.call(t, i) && e.indexOf(i) < 0 && (n[i] = t[i]);
  if (t != null && Ds)
    for (var i of Ds(t))
      e.indexOf(i) < 0 && Cf.call(t, i) && (n[i] = t[i]);
  return n;
};
const Tf = {
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
function Lf({ locale: t, id: e }) {
  console.warn(
    `[svelte-i18n] The message "${e}" was not found in "${bi(
      t
    ).join('", "')}".${Ni(vn()) ? `

Note: there are at least one loader still registered to this locale that wasn't executed.` : ""}`
  );
}
const Of = {
  fallbackLocale: null,
  loadingDelay: 200,
  formats: Tf,
  warnOnMissingMessages: !0,
  handleMissingMessage: void 0,
  ignoreTag: !0
}, ci = Of;
function Jn() {
  return ci;
}
function Rf(t) {
  const e = t, { formats: n } = e, i = Sf(e, ["formats"]);
  let r = t.fallbackLocale;
  if (t.initialLocale)
    try {
      Ao.resolveLocale(t.initialLocale) && (r = t.initialLocale);
    } catch {
      console.warn(
        `[svelte-i18n] The initial locale "${t.initialLocale}" is not a valid locale.`
      );
    }
  return i.warnOnMissingMessages && (delete i.warnOnMissingMessages, i.handleMissingMessage == null ? i.handleMissingMessage = Lf : console.warn(
    '[svelte-i18n] The "warnOnMissingMessages" option is deprecated. Please use the "handleMissingMessage" option instead.'
  )), Object.assign(ci, i, { initialLocale: r }), n && ("number" in n && Object.assign(ci.formats.number, n.number), "date" in n && Object.assign(ci.formats.date, n.date), "time" in n && Object.assign(ci.formats.time, n.time)), Rn.set(r);
}
const Ar = At(!1);
var Df = Object.defineProperty, Mf = Object.defineProperties, kf = Object.getOwnPropertyDescriptors, Ms = Object.getOwnPropertySymbols, Ff = Object.prototype.hasOwnProperty, Nf = Object.prototype.propertyIsEnumerable, ks = (t, e, n) => e in t ? Df(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n, Hf = (t, e) => {
  for (var n in e || (e = {}))
    Ff.call(e, n) && ks(t, n, e[n]);
  if (Ms)
    for (var n of Ms(e))
      Nf.call(e, n) && ks(t, n, e[n]);
  return t;
}, Pf = (t, e) => Mf(t, kf(e));
let Yr;
const Hi = At(null);
function Fs(t) {
  return t.split("-").map((e, n, i) => i.slice(0, n + 1).join("-")).reverse();
}
function bi(t, e = Jn().fallbackLocale) {
  const n = Fs(t);
  return e ? [.../* @__PURE__ */ new Set([...n, ...Fs(e)])] : n;
}
function vn() {
  return Yr ?? void 0;
}
Hi.subscribe((t) => {
  Yr = t ?? void 0, typeof window < "u" && t != null && document.documentElement.setAttribute("lang", t);
});
const wf = (t) => {
  if (t && vf(t) && Ni(t)) {
    const { loadingDelay: e } = Jn();
    let n;
    return typeof window < "u" && vn() != null && e ? n = window.setTimeout(
      () => Ar.set(!0),
      e
    ) : Ar.set(!0), Lo(t).then(() => {
      Hi.set(t);
    }).finally(() => {
      clearTimeout(n), Ar.set(!1);
    });
  }
  return Hi.set(t);
}, Rn = Pf(Hf({}, Hi), {
  set: wf
}), Uf = () => typeof window > "u" ? null : window.navigator.language || window.navigator.languages[0], Gi = (t) => {
  const e = /* @__PURE__ */ Object.create(null);
  return (i) => {
    const r = JSON.stringify(i);
    return r in e ? e[r] : e[r] = t(i);
  };
};
var Bf = Object.defineProperty, Pi = Object.getOwnPropertySymbols, Oo = Object.prototype.hasOwnProperty, Ro = Object.prototype.propertyIsEnumerable, Ns = (t, e, n) => e in t ? Bf(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n, as = (t, e) => {
  for (var n in e || (e = {}))
    Oo.call(e, n) && Ns(t, n, e[n]);
  if (Pi)
    for (var n of Pi(e))
      Ro.call(e, n) && Ns(t, n, e[n]);
  return t;
}, ei = (t, e) => {
  var n = {};
  for (var i in t)
    Oo.call(t, i) && e.indexOf(i) < 0 && (n[i] = t[i]);
  if (t != null && Pi)
    for (var i of Pi(t))
      e.indexOf(i) < 0 && Ro.call(t, i) && (n[i] = t[i]);
  return n;
};
const gi = (t, e) => {
  const { formats: n } = Jn();
  if (t in n && e in n[t])
    return n[t][e];
  throw new Error(`[svelte-i18n] Unknown "${e}" ${t} format.`);
}, Vf = Gi(
  (t) => {
    var e = t, { locale: n, format: i } = e, r = ei(e, ["locale", "format"]);
    if (n == null)
      throw new Error('[svelte-i18n] A "locale" must be set to format numbers');
    return i && (r = gi("number", i)), new Intl.NumberFormat(n, r);
  }
), Gf = Gi(
  (t) => {
    var e = t, { locale: n, format: i } = e, r = ei(e, ["locale", "format"]);
    if (n == null)
      throw new Error('[svelte-i18n] A "locale" must be set to format dates');
    return i ? r = gi("date", i) : Object.keys(r).length === 0 && (r = gi("date", "short")), new Intl.DateTimeFormat(n, r);
  }
), jf = Gi(
  (t) => {
    var e = t, { locale: n, format: i } = e, r = ei(e, ["locale", "format"]);
    if (n == null)
      throw new Error(
        '[svelte-i18n] A "locale" must be set to format time values'
      );
    return i ? r = gi("time", i) : Object.keys(r).length === 0 && (r = gi("time", "short")), new Intl.DateTimeFormat(n, r);
  }
), qf = (t = {}) => {
  var e = t, {
    locale: n = vn()
  } = e, i = ei(e, [
    "locale"
  ]);
  return Vf(as({ locale: n }, i));
}, Wf = (t = {}) => {
  var e = t, {
    locale: n = vn()
  } = e, i = ei(e, [
    "locale"
  ]);
  return Gf(as({ locale: n }, i));
}, zf = (t = {}) => {
  var e = t, {
    locale: n = vn()
  } = e, i = ei(e, [
    "locale"
  ]);
  return jf(as({ locale: n }, i));
}, Kf = Gi(
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  (t, e = vn()) => new Ao(t, e, Jn().formats, {
    ignoreTag: Jn().ignoreTag
  })
), Xf = (t, e = {}) => {
  var n, i, r, s;
  let a = e;
  typeof t == "object" && (a = t, t = a.id);
  const {
    values: l,
    locale: o = vn(),
    default: u
  } = a;
  if (o == null)
    throw new Error(
      "[svelte-i18n] Cannot format a message without first setting the initial locale."
    );
  let c = yo(t, o);
  if (!c)
    c = (s = (r = (i = (n = Jn()).handleMissingMessage) == null ? void 0 : i.call(n, { locale: o, id: t, defaultValue: u })) != null ? r : u) != null ? s : t;
  else if (typeof c != "string")
    return console.warn(
      `[svelte-i18n] Message with id "${t}" must be of type "string", found: "${typeof c}". Gettin its value through the "$format" method is deprecated; use the "json" method instead.`
    ), c;
  if (!l)
    return c;
  let f = c;
  try {
    f = Kf(c, o).format(l);
  } catch (d) {
    d instanceof Error && console.warn(
      `[svelte-i18n] Message "${t}" has syntax error:`,
      d.message
    );
  }
  return f;
}, Yf = (t, e) => zf(e).format(t), Zf = (t, e) => Wf(e).format(t), Qf = (t, e) => qf(e).format(t), Jf = (t, e = vn()) => yo(t, e), xf = $n([Rn, _i], () => Xf);
$n([Rn], () => Yf);
$n([Rn], () => Zf);
$n([Rn], () => Qf);
$n([Rn, _i], () => Jf);
function $f(t, e) {
  Object.entries(t).forEach(([s, a]) => {
    So(s, a);
  });
  const n = localStorage.getItem("language"), i = "en", r = n ?? Uf();
  console.log("Initial: Setting the language to", r), Rf({
    fallbackLocale: i,
    initialLocale: r
  }), window.addEventListener("oscd-language-changed", (s) => {
    const a = s;
    if (!a.detail.language) {
      console.error("No translations for language");
      return;
    }
    console.log("Updating the language to", a.detail.language), Rn.set(a.detail.language);
  });
}
function ed(t, e = {}) {
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
function se(t) {
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
function Kt(t, e) {
  let n = Object.getOwnPropertyNames(t);
  const i = {};
  for (let r = 0; r < n.length; r++) {
    const s = n[r], a = s.indexOf("$");
    a !== -1 && e.indexOf(s.substring(0, a + 1)) !== -1 || e.indexOf(s) === -1 && (i[s] = t[s]);
  }
  return i;
}
const Hs = /^[a-z]+(?::(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/, td = /^[^$]+(?:\$(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/;
function rt(t) {
  let e, n = [];
  t.$on = (r, s) => {
    let a = r, l = () => {
    };
    return e ? l = e(a, s) : n.push([a, s]), a.match(Hs) && console && console.warn('Event modifiers in SMUI now use "$" instead of ":", so that all events can be bound with modifiers. Please update your event binding: ', a), () => {
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
      const d = u.match(Hs), h = u.match(td), p = d || h;
      if (u.match(/^SMUI:\w+:/)) {
        const E = u.split(":");
        let v = "";
        for (let S = 0; S < E.length; S++)
          v += S === E.length - 1 ? ":" + E[S] : E[S].split("-").map((C) => C.slice(0, 1).toUpperCase() + C.slice(1)).join("");
        console.warn(`The event ${u.split("$")[0]} has been renamed to ${v.split("$")[0]}.`), u = v;
      }
      if (p) {
        const E = u.split(d ? ":" : "$");
        u = E[0];
        const v = E.slice(1).reduce((S, C) => (S[C] = !0, S), {});
        v.passive && (f = f || {}, f.passive = !0), v.nonpassive && (f = f || {}, f.passive = !1), v.capture && (f = f || {}, f.capture = !0), v.once && (f = f || {}, f.once = !0), v.preventDefault && (c = nd(c)), v.stopPropagation && (c = id(c)), v.stopImmediatePropagation && (c = rd(c)), v.self && (c = sd(r, c)), v.trusted && (c = ld(c));
      }
      const g = Ps(r, u, c, f), m = () => {
        g();
        const E = s.indexOf(m);
        E > -1 && s.splice(E, 1);
      };
      return s.push(m), u in a || (a[u] = Ps(r, u, i)), m;
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
function Ps(t, e, n, i) {
  return t.addEventListener(e, n, i), () => t.removeEventListener(e, n, i);
}
function nd(t) {
  return function(e) {
    return e.preventDefault(), t.call(this, e);
  };
}
function id(t) {
  return function(e) {
    return e.stopPropagation(), t.call(this, e);
  };
}
function rd(t) {
  return function(e) {
    return e.stopImmediatePropagation(), t.call(this, e);
  };
}
function sd(t, e) {
  return function(n) {
    if (n.target === t)
      return e.call(this, n);
  };
}
function ld(t) {
  return function(e) {
    if (e.isTrusted)
      return t.call(this, e);
  };
}
function Ve(t, e) {
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
var Ci;
function Do(t, e) {
  e === void 0 && (e = !1);
  var n = t.CSS, i = Ci;
  if (typeof Ci == "boolean" && !e)
    return Ci;
  var r = n && typeof n.supports == "function";
  if (!r)
    return !1;
  var s = n.supports("--css-vars", "yes"), a = n.supports("(--css-vars: yes)") && n.supports("color", "#00000000");
  return i = s || a, e || (Ci = i), i;
}
function ad(t, e, n) {
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
var Dt = (
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
var ji = (
  /** @class */
  function() {
    function t(e, n) {
      for (var i = [], r = 2; r < arguments.length; r++)
        i[r - 2] = arguments[r];
      this.root = e, this.initialize.apply(this, bn([], Yn(i))), this.foundation = n === void 0 ? this.getDefaultFoundation() : n, this.foundation.init(), this.initialSyncWithDOM();
    }
    return t.attachTo = function(e) {
      return new t(e, new Dt({}));
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
function fi(t) {
  return t === void 0 && (t = window), od(t) ? { passive: !0 } : !1;
}
function od(t) {
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
const Mo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  applyPassive: fi
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
function ud(t, e) {
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
function cd(t) {
  var e = t;
  if (e.offsetParent !== null)
    return e.scrollWidth;
  var n = e.cloneNode(!0);
  n.style.setProperty("position", "absolute"), n.style.setProperty("transform", "translate(-9999px, -9999px)"), document.documentElement.appendChild(n);
  var i = n.scrollWidth;
  return document.documentElement.removeChild(n), i;
}
const vi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  closest: ud,
  estimateScrollWidth: cd,
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
var fd = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  BG_FOCUSED: "mdc-ripple-upgraded--background-focused",
  FG_ACTIVATION: "mdc-ripple-upgraded--foreground-activation",
  FG_DEACTIVATION: "mdc-ripple-upgraded--foreground-deactivation",
  ROOT: "mdc-ripple-upgraded",
  UNBOUNDED: "mdc-ripple-upgraded--unbounded"
}, dd = {
  VAR_FG_SCALE: "--mdc-ripple-fg-scale",
  VAR_FG_SIZE: "--mdc-ripple-fg-size",
  VAR_FG_TRANSLATE_END: "--mdc-ripple-fg-translate-end",
  VAR_FG_TRANSLATE_START: "--mdc-ripple-fg-translate-start",
  VAR_LEFT: "--mdc-ripple-left",
  VAR_TOP: "--mdc-ripple-top"
}, ws = {
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
var Us = [
  "touchstart",
  "pointerdown",
  "mousedown",
  "keydown"
], Bs = [
  "touchend",
  "pointerup",
  "mouseup",
  "contextmenu"
], Si = [], qi = (
  /** @class */
  function(t) {
    at(e, t);
    function e(n) {
      var i = t.call(this, fe(fe({}, e.defaultAdapter), n)) || this;
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
        return fd;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return dd;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return ws;
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
          for (var s = Rt(Us), a = s.next(); !a.done; a = s.next()) {
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
          for (var s = Rt(Bs), a = s.next(); !a.done; a = s.next()) {
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
        for (var r = Rt(Us), s = r.next(); !s.done; s = r.next()) {
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
        for (var r = Rt(Bs), s = r.next(); !s.done; s = r.next()) {
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
            var l = n !== void 0 && Si.length > 0 && Si.some(function(o) {
              return i.adapter.containsEventTarget(o);
            });
            if (l) {
              this.resetActivationState();
              return;
            }
            n !== void 0 && (Si.push(n.target), this.registerDeactivationHandlers(n)), r.wasElementMadeActive = this.checkElementMadeActive(n), r.wasElementMadeActive && this.animateActivation(), requestAnimationFrame(function() {
              Si = [], !r.wasElementMadeActive && n !== void 0 && (n.key === " " || n.keyCode === 32) && (r.wasElementMadeActive = i.checkElementMadeActive(n), r.wasElementMadeActive && i.animateActivation()), r.wasElementMadeActive || (i.activationState = i.defaultActivationState());
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
        var d = this.getFgTranslationCoordinates(), h = d.startPoint, p = d.endPoint;
        c = h.x + "px, " + h.y + "px", f = p.x + "px, " + p.y + "px";
      }
      this.adapter.updateCssVariable(r, c), this.adapter.updateCssVariable(s, f), clearTimeout(this.activationTimer), clearTimeout(this.fgDeactivationRemovalTimer), this.rmBoundedActivationClasses(), this.adapter.removeClass(l), this.adapter.computeBoundingRect(), this.adapter.addClass(o), this.activationTimer = setTimeout(function() {
        n.activationTimerCallback();
      }, u);
    }, e.prototype.getFgTranslationCoordinates = function() {
      var n = this.activationState, i = n.activationEvent, r = n.wasActivatedByPointer, s;
      r ? s = ad(i, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect()) : s = {
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
      }, ws.FG_DEACTIVATION_MS));
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
        var r = fe({}, i);
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
  }(Dt)
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
    at(e, t);
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
          return Do(window);
        },
        computeBoundingRect: function() {
          return n.root.getBoundingClientRect();
        },
        containsEventTarget: function(i) {
          return n.root.contains(i);
        },
        deregisterDocumentInteractionHandler: function(i, r) {
          return document.documentElement.removeEventListener(i, r, fi());
        },
        deregisterInteractionHandler: function(i, r) {
          return n.root.removeEventListener(i, r, fi());
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
          return document.documentElement.addEventListener(i, r, fi());
        },
        registerInteractionHandler: function(i, r) {
          return n.root.addEventListener(i, r, fi());
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
      return new qi(e.createAdapter(this));
    }, e.prototype.initialSyncWithDOM = function() {
      var n = this.root;
      this.isUnbounded = "mdcRippleIsUnbounded" in n.dataset;
    }, e.prototype.setUnbounded = function() {
      this.foundation.setUnbounded(!!this.isUnbounded);
    }, e;
  }(ji)
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
var yr = "mdc-dom-focus-sentinel", hd = (
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
      [].slice.call(this.root.querySelectorAll("." + yr)).forEach(function(e) {
        e.parentElement.removeChild(e);
      }), !this.options.skipRestoreFocus && this.elFocusedBeforeTrapFocus && this.elFocusedBeforeTrapFocus.focus();
    }, t.prototype.wrapTabFocus = function(e) {
      var n = this, i = this.createSentinel(), r = this.createSentinel();
      i.addEventListener("focus", function() {
        var s = n.getFocusableElements(e);
        s.length > 0 && s[s.length - 1].focus();
      }), r.addEventListener("focus", function() {
        var s = n.getFocusableElements(e);
        s.length > 0 && s[0].focus();
      }), e.insertBefore(i, e.children[0]), e.appendChild(r);
    }, t.prototype.focusInitialElement = function(e, n) {
      var i = 0;
      n && (i = Math.max(e.indexOf(n), 0)), e[i].focus();
    }, t.prototype.getFocusableElements = function(e) {
      var n = [].slice.call(e.querySelectorAll("[autofocus], [tabindex], a, input, textarea, select, button"));
      return n.filter(function(i) {
        var r = i.getAttribute("aria-disabled") === "true" || i.getAttribute("disabled") != null || i.getAttribute("hidden") != null || i.getAttribute("aria-hidden") === "true", s = i.tabIndex >= 0 && i.getBoundingClientRect().width > 0 && !i.classList.contains(yr) && !r, a = !1;
        if (s) {
          var l = getComputedStyle(i);
          a = l.display === "none" || l.visibility === "hidden";
        }
        return s && !a;
      });
    }, t.prototype.createSentinel = function() {
      var e = document.createElement("div");
      return e.setAttribute("tabindex", "0"), e.setAttribute("aria-hidden", "true"), e.classList.add(yr), e;
    }, t;
  }()
);
const md = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  FocusTrap: hd
}, Symbol.toStringTag, { value: "Module" }));
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
var Bt = {
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
}, wt = /* @__PURE__ */ new Map();
wt.set(Bt.BACKSPACE, we.BACKSPACE);
wt.set(Bt.ENTER, we.ENTER);
wt.set(Bt.SPACEBAR, we.SPACEBAR);
wt.set(Bt.PAGE_UP, we.PAGE_UP);
wt.set(Bt.PAGE_DOWN, we.PAGE_DOWN);
wt.set(Bt.END, we.END);
wt.set(Bt.HOME, we.HOME);
wt.set(Bt.ARROW_LEFT, we.ARROW_LEFT);
wt.set(Bt.ARROW_UP, we.ARROW_UP);
wt.set(Bt.ARROW_RIGHT, we.ARROW_RIGHT);
wt.set(Bt.ARROW_DOWN, we.ARROW_DOWN);
wt.set(Bt.DELETE, we.DELETE);
wt.set(Bt.ESCAPE, we.ESCAPE);
wt.set(Bt.TAB, we.TAB);
var fn = /* @__PURE__ */ new Set();
fn.add(we.PAGE_UP);
fn.add(we.PAGE_DOWN);
fn.add(we.END);
fn.add(we.HOME);
fn.add(we.ARROW_LEFT);
fn.add(we.ARROW_UP);
fn.add(we.ARROW_RIGHT);
fn.add(we.ARROW_DOWN);
function Et(t) {
  var e = t.key;
  if (Pt.has(e))
    return e;
  var n = wt.get(t.keyCode);
  return n || we.UNKNOWN;
}
function pd(t) {
  return fn.has(Et(t));
}
const { applyPassive: Ti } = Mo, { matches: gd } = vi;
function Ft(t, { ripple: e = !0, surface: n = !1, unbounded: i = !1, disabled: r = !1, color: s, active: a, rippleElement: l, eventTarget: o, activeTarget: u, addClass: c = (p) => t.classList.add(p), removeClass: f = (p) => t.classList.remove(p), addStyle: d = (p, g) => t.style.setProperty(p, g), initPromise: h = Promise.resolve() } = {}) {
  let p, g = ze("SMUI:addLayoutListener"), m, E = a, v = o, S = u;
  function C() {
    n ? (c("mdc-ripple-surface"), s === "primary" ? (c("smui-ripple-surface--primary"), f("smui-ripple-surface--secondary")) : s === "secondary" ? (f("smui-ripple-surface--primary"), c("smui-ripple-surface--secondary")) : (f("smui-ripple-surface--primary"), f("smui-ripple-surface--secondary"))) : (f("mdc-ripple-surface"), f("smui-ripple-surface--primary"), f("smui-ripple-surface--secondary")), p && E !== a && (E = a, a ? p.activate() : a === !1 && p.deactivate()), e && !p ? (p = new qi({
      addClass: c,
      browserSupportsCssVars: () => Do(window),
      computeBoundingRect: () => (l || t).getBoundingClientRect(),
      containsEventTarget: (M) => t.contains(M),
      deregisterDocumentInteractionHandler: (M, _) => document.documentElement.removeEventListener(M, _, Ti()),
      deregisterInteractionHandler: (M, _) => (o || t).removeEventListener(M, _, Ti()),
      deregisterResizeHandler: (M) => window.removeEventListener("resize", M),
      getWindowPageOffset: () => ({
        x: window.pageXOffset,
        y: window.pageYOffset
      }),
      isSurfaceActive: () => a ?? gd(u || t, ":active"),
      isSurfaceDisabled: () => !!r,
      isUnbounded: () => !!i,
      registerDocumentInteractionHandler: (M, _) => document.documentElement.addEventListener(M, _, Ti()),
      registerInteractionHandler: (M, _) => (o || t).addEventListener(M, _, Ti()),
      registerResizeHandler: (M) => window.addEventListener("resize", M),
      removeClass: f,
      updateCssVariable: d
    }), h.then(() => {
      p && (p.init(), p.setUnbounded(i));
    })) : p && !e && h.then(() => {
      p && (p.destroy(), p = void 0);
    }), p && (v !== o || S !== u) && (v = o, S = u, p.destroy(), requestAnimationFrame(() => {
      p && (p.init(), p.setUnbounded(i));
    })), !e && i && c("mdc-ripple-upgraded--unbounded");
  }
  C(), g && (m = g(D));
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
        color: s,
        active: a,
        rippleElement: l,
        eventTarget: o,
        activeTarget: u,
        addClass: c,
        removeClass: f,
        addStyle: d,
        initPromise: h
      } = Object.assign({ ripple: !0, surface: !1, unbounded: !1, disabled: !1, color: void 0, active: void 0, rippleElement: void 0, eventTarget: void 0, activeTarget: void 0, addClass: (_) => t.classList.add(_), removeClass: (_) => t.classList.remove(_), addStyle: (_, L) => t.style.setProperty(_, L), initPromise: Promise.resolve() }, M)), C();
    },
    destroy() {
      p && (p.destroy(), p = void 0, f("mdc-ripple-surface"), f("smui-ripple-surface--primary"), f("smui-ripple-surface--secondary")), m && m();
    }
  };
}
function _d(t) {
  let e;
  const n = (
    /*#slots*/
    t[10].default
  ), i = Ie(
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
      4096) && Ae(
        i,
        n,
        r,
        /*$$scope*/
        r[12],
        e ? Ee(
          n,
          /*$$scope*/
          r[12],
          s,
          null
        ) : ye(
          /*$$scope*/
          r[12]
        ),
        null
      );
    },
    i(r) {
      e || (y(i, r), e = !0);
    },
    o(r) {
      O(i, r), e = !1;
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
      class: se({
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
        class: se({
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
      64 && Fe(
        /*context*/
        l[6] === "snackbar" ? { "aria-atomic": "false" } : {}
      ),
      o & /*tabindex*/
      128 && { tabindex: (
        /*tabindex*/
        l[7]
      ) },
      o & /*$$restProps*/
      256 && Fe(
        /*$$restProps*/
        l[8]
      )
    ]))), { props: u };
  }
  return s && (e = Nt(s, a(t)), t[11](e)), {
    c() {
      e && ie(e.$$.fragment), n = Ze();
    },
    m(l, o) {
      e && ee(e, l, o), V(l, n, o), i = !0;
    },
    p(l, [o]) {
      if (o & /*component*/
      4 && s !== (s = /*component*/
      l[2])) {
        if (e) {
          Ue();
          const u = e;
          O(u.$$.fragment, 1, 0, () => {
            te(u, 1);
          }), Be();
        }
        s ? (e = Nt(s, a(l, o)), l[11](e), ie(e.$$.fragment), y(e.$$.fragment, 1), ee(e, n.parentNode, n)) : e = null;
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
            class: se({
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
          64 && Fe(
            /*context*/
            l[6] === "snackbar" ? { "aria-atomic": "false" } : {}
          ),
          o & /*tabindex*/
          128 && { tabindex: (
            /*tabindex*/
            l[7]
          ) },
          o & /*$$restProps*/
          256 && Fe(
            /*$$restProps*/
            l[8]
          )
        ]) : {};
        o & /*$$scope*/
        4096 && (u.$$scope = { dirty: o, ctx: l }), e.$set(u);
      }
    },
    i(l) {
      i || (e && y(e.$$.fragment, l), i = !0);
    },
    o(l) {
      e && O(e.$$.fragment, l), i = !1;
    },
    d(l) {
      l && B(n), t[11](null), e && te(e, l);
    }
  };
}
function vd(t, e, n) {
  const i = ["use", "class", "component", "tag", "getElement"];
  let r = ge(e, i), { $$slots: s = {}, $$scope: a } = e;
  const l = rt(Je());
  let { use: o = [] } = e, { class: u = "" } = e, c, { component: f = Ut } = e, { tag: d = f === Ut ? "span" : void 0 } = e;
  const h = ze("SMUI:label:context"), p = ze("SMUI:label:tabindex");
  function g() {
    return c.getElement();
  }
  function m(E) {
    le[E ? "unshift" : "push"](() => {
      c = E, n(4, c);
    });
  }
  return t.$$set = (E) => {
    e = X(X({}, e), nt(E)), n(8, r = ge(e, i)), "use" in E && n(0, o = E.use), "class" in E && n(1, u = E.class), "component" in E && n(2, f = E.component), "tag" in E && n(3, d = E.tag), "$$scope" in E && n(12, a = E.$$scope);
  }, [
    o,
    u,
    f,
    d,
    c,
    l,
    h,
    p,
    r,
    g,
    s,
    m,
    a
  ];
}
class ko extends Me {
  constructor(e) {
    super(), De(this, e, vd, bd, Ce, {
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
function Id(t) {
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
      r && r.m(s, a), V(s, n, a), i = !0;
    },
    p(s, a) {
      /*tag*/
      s[1] ? e ? Ce(
        e,
        /*tag*/
        s[1]
      ) ? (r.d(1), r = Cr(s), e = /*tag*/
      s[1], r.c(), r.m(n.parentNode, n)) : r.p(s, a) : (r = Cr(s), e = /*tag*/
      s[1], r.c(), r.m(n.parentNode, n)) : e && (r.d(1), r = null, e = /*tag*/
      s[1]);
    },
    i(s) {
      i || (y(r, s), i = !0);
    },
    o(s) {
      O(r, s), i = !1;
    },
    d(s) {
      s && B(n), r && r.d(s);
    }
  };
}
function Ed(t) {
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
      i && i.m(r, s), V(r, n, s);
    },
    p(r, s) {
      /*tag*/
      r[1] ? e ? Ce(
        e,
        /*tag*/
        r[1]
      ) ? (i.d(1), i = Sr(r), e = /*tag*/
      r[1], i.c(), i.m(n.parentNode, n)) : i.p(r, s) : (i = Sr(r), e = /*tag*/
      r[1], i.c(), i.m(n.parentNode, n)) : e && (i.d(1), i = null, e = /*tag*/
      r[1]);
    },
    i: Qe,
    o: Qe,
    d(r) {
      r && B(n), i && i.d(r);
    }
  };
}
function Ad(t) {
  let e, n, i, r, s;
  const a = (
    /*#slots*/
    t[8].default
  ), l = Ie(
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
      e = ut("svg"), l && l.c(), Is(e, u);
    },
    m(c, f) {
      V(c, e, f), l && l.m(e, null), t[9](e), i = !0, r || (s = [
        he(n = xe.call(
          null,
          e,
          /*use*/
          t[0]
        )),
        he(
          /*forwardEvents*/
          t[4].call(null, e)
        )
      ], r = !0);
    },
    p(c, f) {
      l && l.p && (!i || f & /*$$scope*/
      128) && Ae(
        l,
        a,
        c,
        /*$$scope*/
        c[7],
        i ? Ee(
          a,
          /*$$scope*/
          c[7],
          f,
          null
        ) : ye(
          /*$$scope*/
          c[7]
        ),
        null
      ), Is(e, u = me(o, [f & /*$$restProps*/
      32 && /*$$restProps*/
      c[5]])), n && pe(n.update) && f & /*use*/
      1 && n.update.call(
        null,
        /*use*/
        c[0]
      );
    },
    i(c) {
      i || (y(l, c), i = !0);
    },
    o(c) {
      O(l, c), i = !1;
    },
    d(c) {
      c && B(e), l && l.d(c), t[9](null), r = !1, Ye(s);
    }
  };
}
function Cr(t) {
  let e, n, i, r, s;
  const a = (
    /*#slots*/
    t[8].default
  ), l = Ie(
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
      e = ne(
        /*tag*/
        t[1]
      ), l && l.c(), Fi(
        /*tag*/
        t[1]
      )(e, u);
    },
    m(c, f) {
      V(c, e, f), l && l.m(e, null), t[11](e), i = !0, r || (s = [
        he(n = xe.call(
          null,
          e,
          /*use*/
          t[0]
        )),
        he(
          /*forwardEvents*/
          t[4].call(null, e)
        )
      ], r = !0);
    },
    p(c, f) {
      l && l.p && (!i || f & /*$$scope*/
      128) && Ae(
        l,
        a,
        c,
        /*$$scope*/
        c[7],
        i ? Ee(
          a,
          /*$$scope*/
          c[7],
          f,
          null
        ) : ye(
          /*$$scope*/
          c[7]
        ),
        null
      ), Fi(
        /*tag*/
        c[1]
      )(e, u = me(o, [f & /*$$restProps*/
      32 && /*$$restProps*/
      c[5]])), n && pe(n.update) && f & /*use*/
      1 && n.update.call(
        null,
        /*use*/
        c[0]
      );
    },
    i(c) {
      i || (y(l, c), i = !0);
    },
    o(c) {
      O(l, c), i = !1;
    },
    d(c) {
      c && B(e), l && l.d(c), t[11](null), r = !1, Ye(s);
    }
  };
}
function Sr(t) {
  let e, n, i, r, s = [
    /*$$restProps*/
    t[5]
  ], a = {};
  for (let l = 0; l < s.length; l += 1)
    a = X(a, s[l]);
  return {
    c() {
      e = ne(
        /*tag*/
        t[1]
      ), Fi(
        /*tag*/
        t[1]
      )(e, a);
    },
    m(l, o) {
      V(l, e, o), t[10](e), i || (r = [
        he(n = xe.call(
          null,
          e,
          /*use*/
          t[0]
        )),
        he(
          /*forwardEvents*/
          t[4].call(null, e)
        )
      ], i = !0);
    },
    p(l, o) {
      Fi(
        /*tag*/
        l[1]
      )(e, a = me(s, [o & /*$$restProps*/
      32 && /*$$restProps*/
      l[5]])), n && pe(n.update) && o & /*use*/
      1 && n.update.call(
        null,
        /*use*/
        l[0]
      );
    },
    d(l) {
      l && B(e), t[10](null), i = !1, Ye(r);
    }
  };
}
function yd(t) {
  let e, n, i, r;
  const s = [Ad, Ed, Id], a = [];
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
      a[e].m(o, u), V(o, i, u), r = !0;
    },
    p(o, [u]) {
      let c = e;
      e = l(o), e === c ? a[e].p(o, u) : (Ue(), O(a[c], 1, 1, () => {
        a[c] = null;
      }), Be(), n = a[e], n ? n.p(o, u) : (n = a[e] = s[e](o), n.c()), y(n, 1), n.m(i.parentNode, i));
    },
    i(o) {
      r || (y(n), r = !0);
    },
    o(o) {
      O(n), r = !1;
    },
    d(o) {
      o && B(i), a[e].d(o);
    }
  };
}
function Cd(t, e, n) {
  let i;
  const r = ["use", "tag", "getElement"];
  let s = ge(e, r), { $$slots: a = {}, $$scope: l } = e, { use: o = [] } = e, { tag: u } = e;
  const c = rt(Je());
  let f;
  function d() {
    return f;
  }
  function h(m) {
    le[m ? "unshift" : "push"](() => {
      f = m, n(2, f);
    });
  }
  function p(m) {
    le[m ? "unshift" : "push"](() => {
      f = m, n(2, f);
    });
  }
  function g(m) {
    le[m ? "unshift" : "push"](() => {
      f = m, n(2, f);
    });
  }
  return t.$$set = (m) => {
    e = X(X({}, e), nt(m)), n(5, s = ge(e, r)), "use" in m && n(0, o = m.use), "tag" in m && n(1, u = m.tag), "$$scope" in m && n(7, l = m.$$scope);
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
    p,
    g
  ];
}
class Ut extends Me {
  constructor(e) {
    super(), De(this, e, Cd, yd, Ce, { use: 0, tag: 1, getElement: 6 });
  }
  get getElement() {
    return this.$$.ctx[6];
  }
}
function Sd(t) {
  let e;
  const n = (
    /*#slots*/
    t[4].default
  ), i = Ie(
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
      8) && Ae(
        i,
        n,
        r,
        /*$$scope*/
        r[3],
        e ? Ee(
          n,
          /*$$scope*/
          r[3],
          s,
          null
        ) : ye(
          /*$$scope*/
          r[3]
        ),
        null
      );
    },
    i(r) {
      e || (y(i, r), e = !0);
    },
    o(r) {
      O(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function Td(t, e, n) {
  let i, { $$slots: r = {}, $$scope: s } = e, { key: a } = e, { value: l } = e;
  const o = At(l);
  return st(t, o, (u) => n(5, i = u)), Ge(a, o), Qt(() => {
    o.set(void 0);
  }), t.$$set = (u) => {
    "key" in u && n(1, a = u.key), "value" in u && n(2, l = u.value), "$$scope" in u && n(3, s = u.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty & /*value*/
    4 && kt(o, i = l, i);
  }, [o, a, l, s, r];
}
class xn extends Me {
  constructor(e) {
    super(), De(this, e, Td, Sd, Ce, { key: 1, value: 2 });
  }
}
function Vs(t) {
  let e;
  return {
    c() {
      e = ne("div"), P(e, "class", "mdc-button__touch");
    },
    m(n, i) {
      V(n, e, i);
    },
    d(n) {
      n && B(e);
    }
  };
}
function Ld(t) {
  let e, n, i, r;
  const s = (
    /*#slots*/
    t[28].default
  ), a = Ie(
    s,
    t,
    /*$$scope*/
    t[30],
    null
  );
  let l = (
    /*touch*/
    t[6] && Vs()
  );
  return {
    c() {
      e = ne("div"), n = ae(), a && a.c(), l && l.c(), i = Ze(), P(e, "class", "mdc-button__ripple");
    },
    m(o, u) {
      V(o, e, u), V(o, n, u), a && a.m(o, u), l && l.m(o, u), V(o, i, u), r = !0;
    },
    p(o, u) {
      a && a.p && (!r || u[0] & /*$$scope*/
      1073741824) && Ae(
        a,
        s,
        o,
        /*$$scope*/
        o[30],
        r ? Ee(
          s,
          /*$$scope*/
          o[30],
          u,
          null
        ) : ye(
          /*$$scope*/
          o[30]
        ),
        null
      ), /*touch*/
      o[6] ? l || (l = Vs(), l.c(), l.m(i.parentNode, i)) : l && (l.d(1), l = null);
    },
    i(o) {
      r || (y(a, o), r = !0);
    },
    o(o) {
      O(a, o), r = !1;
    },
    d(o) {
      o && (B(e), B(n), B(i)), a && a.d(o), l && l.d(o);
    }
  };
}
function Od(t) {
  let e, n, i;
  const r = [
    { tag: (
      /*tag*/
      t[10]
    ) },
    {
      use: [
        [
          Ft,
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
      class: se({
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
      $$slots: { default: [Ld] },
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
            Ft,
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
        class: se({
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
      65536 && Fe(
        /*actionProp*/
        l[16]
      ),
      o[0] & /*defaultProp*/
      32768 && Fe(
        /*defaultProp*/
        l[15]
      ),
      o[0] & /*secondaryProp*/
      16384 && Fe(
        /*secondaryProp*/
        l[14]
      ),
      o[0] & /*href*/
      128 && { href: (
        /*href*/
        l[7]
      ) },
      o[0] & /*$$restProps*/
      8388608 && Fe(
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
      e && ie(e.$$.fragment), n = Ze();
    },
    m(l, o) {
      e && ee(e, l, o), V(l, n, o), i = !0;
    },
    p(l, o) {
      if (o[0] & /*component*/
      512 && s !== (s = /*component*/
      l[9])) {
        if (e) {
          Ue();
          const u = e;
          O(u.$$.fragment, 1, 0, () => {
            te(u, 1);
          }), Be();
        }
        s ? (e = Nt(s, a(l, o)), l[29](e), e.$on(
          "click",
          /*handleClick*/
          l[22]
        ), ie(e.$$.fragment), y(e.$$.fragment, 1), ee(e, n.parentNode, n)) : e = null;
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
                Ft,
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
            class: se({
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
          65536 && Fe(
            /*actionProp*/
            l[16]
          ),
          o[0] & /*defaultProp*/
          32768 && Fe(
            /*defaultProp*/
            l[15]
          ),
          o[0] & /*secondaryProp*/
          16384 && Fe(
            /*secondaryProp*/
            l[14]
          ),
          o[0] & /*href*/
          128 && { href: (
            /*href*/
            l[7]
          ) },
          o[0] & /*$$restProps*/
          8388608 && Fe(
            /*$$restProps*/
            l[23]
          )
        ]) : {};
        o[0] & /*$$scope, touch*/
        1073741888 && (u.$$scope = { dirty: o, ctx: l }), e.$set(u);
      }
    },
    i(l) {
      i || (e && y(e.$$.fragment, l), i = !0);
    },
    o(l) {
      e && O(e.$$.fragment, l), i = !1;
    },
    d(l) {
      l && B(n), t[29](null), e && te(e, l);
    }
  };
}
const Tr = ([t, e]) => `${t}: ${e};`;
function Rd(t, e, n) {
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
  let l = ge(e, a), { $$slots: o = {}, $$scope: u } = e;
  const c = rt(Je());
  let { use: f = [] } = e, { class: d = "" } = e, { style: h = "" } = e, { ripple: p = !0 } = e, { color: g = "primary" } = e, { variant: m = "text" } = e, { touch: E = !1 } = e, { href: v = void 0 } = e, { action: S = "close" } = e, { defaultAction: C = !1 } = e, { secondary: D = !1 } = e, M, _ = {}, L = {}, k = ze("SMUI:button:context"), { component: A = Ut } = e, { tag: b = A === Ut ? v == null ? "button" : "a" : void 0 } = e, I = l.disabled;
  Ge("SMUI:label:context", "button"), Ge("SMUI:icon:context", "button");
  function T(R) {
    _[R] || n(12, _[R] = !0, _);
  }
  function H(R) {
    (!(R in _) || _[R]) && n(12, _[R] = !1, _);
  }
  function q(R, G) {
    L[R] != G && (G === "" || G == null ? (delete L[R], n(13, L)) : n(13, L[R] = G, L));
  }
  function j() {
    k === "banner" && _e(K(), D ? "SMUIBannerButton:secondaryActionClick" : "SMUIBannerButton:primaryActionClick");
  }
  function K() {
    return M.getElement();
  }
  function N(R) {
    le[R ? "unshift" : "push"](() => {
      M = R, n(11, M);
    });
  }
  return t.$$set = (R) => {
    n(31, e = X(X({}, e), nt(R))), n(23, l = ge(e, a)), "use" in R && n(0, f = R.use), "class" in R && n(1, d = R.class), "style" in R && n(2, h = R.style), "ripple" in R && n(3, p = R.ripple), "color" in R && n(4, g = R.color), "variant" in R && n(5, m = R.variant), "touch" in R && n(6, E = R.touch), "href" in R && n(7, v = R.href), "action" in R && n(24, S = R.action), "defaultAction" in R && n(25, C = R.defaultAction), "secondary" in R && n(8, D = R.secondary), "component" in R && n(9, A = R.component), "tag" in R && n(10, b = R.tag), "$$scope" in R && n(30, u = R.$$scope);
  }, t.$$.update = () => {
    if (n(16, i = k === "dialog:action" && S != null ? { "data-mdc-dialog-action": S } : { action: e.action }), n(15, r = k === "dialog:action" && C ? { "data-mdc-dialog-button-default": "" } : { default: e.default }), n(14, s = k === "banner" ? {} : { secondary: e.secondary }), I !== l.disabled) {
      if (M) {
        const R = K();
        "blur" in R && R.blur();
      }
      n(27, I = l.disabled);
    }
  }, e = nt(e), [
    f,
    d,
    h,
    p,
    g,
    m,
    E,
    v,
    D,
    A,
    b,
    M,
    _,
    L,
    s,
    r,
    i,
    c,
    k,
    T,
    H,
    q,
    j,
    l,
    S,
    C,
    K,
    I,
    o,
    N,
    u
  ];
}
class Dd extends Me {
  constructor(e) {
    super(), De(
      this,
      e,
      Rd,
      Od,
      Ce,
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
function Md(t) {
  let e;
  const n = (
    /*#slots*/
    t[4].default
  ), i = Ie(
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
      32) && Ae(
        i,
        n,
        r,
        /*$$scope*/
        r[5],
        e ? Ee(
          n,
          /*$$scope*/
          r[5],
          s,
          null
        ) : ye(
          /*$$scope*/
          r[5]
        ),
        null
      );
    },
    i(r) {
      e || (y(i, r), e = !0);
    },
    o(r) {
      O(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function kd(t) {
  let e, n;
  return e = new Dd({
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
      $$slots: { default: [Md] },
      $$scope: { ctx: t }
    }
  }), e.$on("click", function() {
    pe(
      /*callback*/
      t[0]()
    ) && t[0]().apply(this, arguments);
  }), {
    c() {
      ie(e.$$.fragment);
    },
    m(i, r) {
      ee(e, i, r), n = !0;
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
      n || (y(e.$$.fragment, i), n = !0);
    },
    o(i) {
      O(e.$$.fragment, i), n = !1;
    },
    d(i) {
      te(e, i);
    }
  };
}
function Fd(t, e, n) {
  let { $$slots: i = {}, $$scope: r } = e, { callback: s = () => {
  } } = e, { disabled: a = !1 } = e, { variant: l = "default" } = e, { isAbortAction: o = !1 } = e;
  return t.$$set = (u) => {
    "callback" in u && n(0, s = u.callback), "disabled" in u && n(1, a = u.disabled), "variant" in u && n(2, l = u.variant), "isAbortAction" in u && n(3, o = u.isAbortAction), "$$scope" in u && n(5, r = u.$$scope);
  }, [s, a, l, o, i, r];
}
class Wi extends Me {
  constructor(e) {
    super(), De(this, e, Fd, kd, Ce, {
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
var Li = {
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
var Nd = (
  /** @class */
  function(t) {
    at(e, t);
    function e(n) {
      var i = t.call(this, fe(fe({}, e.defaultAdapter), n)) || this;
      return i.hasToggledAriaLabel = !1, i;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Li;
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
      return this.adapter.hasClass(Li.ICON_BUTTON_ON);
    }, e.prototype.toggle = function(n) {
      if (n === void 0 && (n = !this.isOn()), n ? this.adapter.addClass(Li.ICON_BUTTON_ON) : this.adapter.removeClass(Li.ICON_BUTTON_ON), this.hasToggledAriaLabel) {
        var i = n ? this.adapter.getAttr(rn.DATA_ARIA_LABEL_ON) : this.adapter.getAttr(rn.DATA_ARIA_LABEL_OFF);
        this.adapter.setAttr(rn.ARIA_LABEL, i || "");
      } else
        this.adapter.setAttr(rn.ARIA_PRESSED, "" + n);
    }, e;
  }(Dt)
);
function Gs(t) {
  let e;
  return {
    c() {
      e = ne("div"), P(e, "class", "mdc-icon-button__touch");
    },
    m(n, i) {
      V(n, e, i);
    },
    d(n) {
      n && B(e);
    }
  };
}
function Hd(t) {
  let e, n, i, r;
  const s = (
    /*#slots*/
    t[33].default
  ), a = Ie(
    s,
    t,
    /*$$scope*/
    t[37],
    null
  );
  let l = (
    /*touch*/
    t[8] && Gs()
  );
  return {
    c() {
      e = ne("div"), n = ae(), a && a.c(), l && l.c(), i = Ze(), P(e, "class", "mdc-icon-button__ripple");
    },
    m(o, u) {
      V(o, e, u), V(o, n, u), a && a.m(o, u), l && l.m(o, u), V(o, i, u), r = !0;
    },
    p(o, u) {
      a && a.p && (!r || u[1] & /*$$scope*/
      64) && Ae(
        a,
        s,
        o,
        /*$$scope*/
        o[37],
        r ? Ee(
          s,
          /*$$scope*/
          o[37],
          u,
          null
        ) : ye(
          /*$$scope*/
          o[37]
        ),
        null
      ), /*touch*/
      o[8] ? l || (l = Gs(), l.c(), l.m(i.parentNode, i)) : l && (l.d(1), l = null);
    },
    i(o) {
      r || (y(a, o), r = !0);
    },
    o(o) {
      O(a, o), r = !1;
    },
    d(o) {
      o && (B(e), B(n), B(i)), a && a.d(o), l && l.d(o);
    }
  };
}
function Pd(t) {
  let e, n, i;
  const r = [
    { tag: (
      /*tag*/
      t[14]
    ) },
    {
      use: [
        [
          Ft,
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
      class: se({
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
      $$slots: { default: [Hd] },
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
            Ft,
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
        class: se({
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
      2097152 && Fe(
        /*actionProp*/
        l[21]
      ),
      o[0] & /*internalAttrs*/
      1048576 && Fe(
        /*internalAttrs*/
        l[20]
      ),
      o[0] & /*$$restProps*/
      536870912 && Fe(
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
      e && ie(e.$$.fragment), n = Ze();
    },
    m(l, o) {
      e && ee(e, l, o), V(l, n, o), i = !0;
    },
    p(l, o) {
      if (o[0] & /*component*/
      8192 && s !== (s = /*component*/
      l[13])) {
        if (e) {
          Ue();
          const u = e;
          O(u.$$.fragment, 1, 0, () => {
            te(u, 1);
          }), Be();
        }
        s ? (e = Nt(s, a(l, o)), l[34](e), e.$on(
          "click",
          /*click_handler*/
          l[35]
        ), e.$on(
          "click",
          /*click_handler_1*/
          l[36]
        ), ie(e.$$.fragment), y(e.$$.fragment, 1), ee(e, n.parentNode, n)) : e = null;
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
                Ft,
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
            class: se({
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
          2097152 && Fe(
            /*actionProp*/
            l[21]
          ),
          o[0] & /*internalAttrs*/
          1048576 && Fe(
            /*internalAttrs*/
            l[20]
          ),
          o[0] & /*$$restProps*/
          536870912 && Fe(
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
      i || (e && y(e.$$.fragment, l), i = !0);
    },
    o(l) {
      e && O(e.$$.fragment, l), i = !1;
    },
    d(l) {
      l && B(n), t[34](null), e && te(e, l);
    }
  };
}
const Lr = ([t, e]) => `${t}: ${e};`;
function wd(t, e, n) {
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
  let s = ge(e, r), { $$slots: a = {}, $$scope: l } = e;
  const o = rt(Je());
  let u = () => {
  };
  function c(W) {
    return W === u;
  }
  let { use: f = [] } = e, { class: d = "" } = e, { style: h = "" } = e, { ripple: p = !0 } = e, { color: g = void 0 } = e, { toggle: m = !1 } = e, { pressed: E = u } = e, { ariaLabelOn: v = void 0 } = e, { ariaLabelOff: S = void 0 } = e, { touch: C = !1 } = e, { displayFlex: D = !0 } = e, { size: M = "normal" } = e, { href: _ = void 0 } = e, { action: L = void 0 } = e, k, A, b = {}, I = {}, T = {}, H = ze("SMUI:icon-button:context"), q = ze("SMUI:icon-button:aria-describedby"), { component: j = Ut } = e, { tag: K = j === Ut ? _ == null ? "button" : "a" : void 0 } = e, N = s.disabled;
  Ge("SMUI:icon:context", "icon-button");
  let R = null;
  Qt(() => {
    A && A.destroy();
  });
  function G(W) {
    return W in b ? b[W] : be().classList.contains(W);
  }
  function oe(W) {
    b[W] || n(18, b[W] = !0, b);
  }
  function Oe(W) {
    (!(W in b) || b[W]) && n(18, b[W] = !1, b);
  }
  function ve(W, Ke) {
    I[W] != Ke && (Ke === "" || Ke == null ? (delete I[W], n(19, I)) : n(19, I[W] = Ke, I));
  }
  function Xe(W) {
    var Ke;
    return W in T ? (Ke = T[W]) !== null && Ke !== void 0 ? Ke : null : be().getAttribute(W);
  }
  function z(W, Ke) {
    T[W] !== Ke && n(20, T[W] = Ke, T);
  }
  function x(W) {
    n(0, E = W.isOn);
  }
  function be() {
    return k.getElement();
  }
  function Se(W) {
    le[W ? "unshift" : "push"](() => {
      k = W, n(16, k);
    });
  }
  const He = () => A && A.handleClick(), re = () => H === "top-app-bar:navigation" && _e(be(), "SMUITopAppBarIconButton:nav");
  return t.$$set = (W) => {
    e = X(X({}, e), nt(W)), n(29, s = ge(e, r)), "use" in W && n(1, f = W.use), "class" in W && n(2, d = W.class), "style" in W && n(3, h = W.style), "ripple" in W && n(4, p = W.ripple), "color" in W && n(5, g = W.color), "toggle" in W && n(30, m = W.toggle), "pressed" in W && n(0, E = W.pressed), "ariaLabelOn" in W && n(6, v = W.ariaLabelOn), "ariaLabelOff" in W && n(7, S = W.ariaLabelOff), "touch" in W && n(8, C = W.touch), "displayFlex" in W && n(9, D = W.displayFlex), "size" in W && n(10, M = W.size), "href" in W && n(11, _ = W.href), "action" in W && n(12, L = W.action), "component" in W && n(13, j = W.component), "tag" in W && n(14, K = W.tag), "$$scope" in W && n(37, l = W.$$scope);
  }, t.$$.update = () => {
    if (t.$$.dirty[0] & /*action*/
    4096 && n(21, i = (() => {
      if (H === "data-table:pagination")
        switch (L) {
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
        return H === "dialog:header" || H === "dialog:sheet" ? { "data-mdc-dialog-action": L } : { action: L };
    })()), N !== s.disabled) {
      if (k) {
        const W = be();
        "blur" in W && W.blur();
      }
      n(31, N = s.disabled);
    }
    t.$$.dirty[0] & /*element, toggle, instance*/
    1073938432 | t.$$.dirty[1] & /*oldToggle*/
    2 && k && be() && m !== R && (m && !A ? (n(17, A = new Nd({
      addClass: oe,
      hasClass: G,
      notifyChange: (W) => {
        x(W), _e(be(), "SMUIIconButtonToggle:change", W, void 0, !0);
      },
      removeClass: Oe,
      getAttr: Xe,
      setAttr: z
    })), A.init()) : !m && A && (A.destroy(), n(17, A = void 0), n(18, b = {}), n(20, T = {})), n(32, R = m)), t.$$.dirty[0] & /*instance, pressed*/
    131073 && A && !c(E) && A.isOn() !== E && A.toggle(E);
  }, [
    E,
    f,
    d,
    h,
    p,
    g,
    v,
    S,
    C,
    D,
    M,
    _,
    L,
    j,
    K,
    be,
    k,
    A,
    b,
    I,
    T,
    i,
    o,
    c,
    H,
    q,
    oe,
    Oe,
    ve,
    s,
    m,
    N,
    R,
    a,
    Se,
    He,
    re,
    l
  ];
}
class Ud extends Me {
  constructor(e) {
    super(), De(
      this,
      e,
      wd,
      Pd,
      Ce,
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
function Bd(t) {
  let e;
  return {
    c() {
      e = ct(
        /*icon*/
        t[1]
      );
    },
    m(n, i) {
      V(n, e, i);
    },
    p(n, i) {
      i & /*icon*/
      2 && ht(
        e,
        /*icon*/
        n[1]
      );
    },
    i: Qe,
    o: Qe,
    d(n) {
      n && B(e);
    }
  };
}
function Vd(t) {
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
  return r && (e = Nt(r, s(t))), {
    c() {
      e && ie(e.$$.fragment), n = Ze();
    },
    m(a, l) {
      e && ee(e, a, l), V(a, n, l), i = !0;
    },
    p(a, l) {
      if (l & /*iconComponent*/
      4 && r !== (r = /*iconComponent*/
      a[2])) {
        if (e) {
          Ue();
          const o = e;
          O(o.$$.fragment, 1, 0, () => {
            te(o, 1);
          }), Be();
        }
        r ? (e = Nt(r, s(a)), ie(e.$$.fragment), y(e.$$.fragment, 1), ee(e, n.parentNode, n)) : e = null;
      } else if (r) {
        const o = {};
        l & /*iconStyles*/
        8 && (o.svgStyles = /*iconStyles*/
        a[3]), e.$set(o);
      }
    },
    i(a) {
      i || (e && y(e.$$.fragment, a), i = !0);
    },
    o(a) {
      e && O(e.$$.fragment, a), i = !1;
    },
    d(a) {
      a && B(n), e && te(e, a);
    }
  };
}
function Gd(t) {
  let e, n, i, r;
  const s = [Vd, Bd], a = [];
  function l(o, u) {
    return (
      /*iconComponent*/
      o[2] ? 0 : 1
    );
  }
  return e = l(t), n = a[e] = s[e](t), {
    c() {
      n.c(), i = Ze();
    },
    m(o, u) {
      a[e].m(o, u), V(o, i, u), r = !0;
    },
    p(o, u) {
      let c = e;
      e = l(o), e === c ? a[e].p(o, u) : (Ue(), O(a[c], 1, 1, () => {
        a[c] = null;
      }), Be(), n = a[e], n ? n.p(o, u) : (n = a[e] = s[e](o), n.c()), y(n, 1), n.m(i.parentNode, i));
    },
    i(o) {
      r || (y(n), r = !0);
    },
    o(o) {
      O(n), r = !1;
    },
    d(o) {
      o && B(i), a[e].d(o);
    }
  };
}
function jd(t) {
  let e, n;
  return e = new Ud({
    props: {
      class: "material-icons",
      disabled: (
        /*disabled*/
        t[4]
      ),
      style: "margin-bottom: 0;",
      $$slots: { default: [Gd] },
      $$scope: { ctx: t }
    }
  }), e.$on("click", function() {
    pe(
      /*callback*/
      t[0]
    ) && t[0].apply(this, arguments);
  }), {
    c() {
      ie(e.$$.fragment);
    },
    m(i, r) {
      ee(e, i, r), n = !0;
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
      n || (y(e.$$.fragment, i), n = !0);
    },
    o(i) {
      O(e.$$.fragment, i), n = !1;
    },
    d(i) {
      te(e, i);
    }
  };
}
function qd(t, e, n) {
  let { callback: i = () => {
  } } = e, { icon: r = "" } = e, { iconComponent: s = null } = e, { iconStyles: a = "" } = e, { disabled: l = !1 } = e;
  return t.$$set = (o) => {
    "callback" in o && n(0, i = o.callback), "icon" in o && n(1, r = o.icon), "iconComponent" in o && n(2, s = o.iconComponent), "iconStyles" in o && n(3, a = o.iconStyles), "disabled" in o && n(4, l = o.disabled);
  }, [i, r, s, a, l];
}
class Wd extends Me {
  constructor(e) {
    super(), De(this, e, qd, jd, Ce, {
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
var zd = {
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
var Kd = (
  /** @class */
  function(t) {
    at(e, t);
    function e(n) {
      var i = t.call(this, fe(fe({}, e.defaultAdapter), n)) || this;
      return i.shakeAnimationEndHandler = function() {
        i.handleShakeAnimationEnd();
      }, i;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return zd;
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
  }(Dt)
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
var Xd = (
  /** @class */
  function(t) {
    at(e, t);
    function e(n) {
      var i = t.call(this, fe(fe({}, e.defaultAdapter), n)) || this;
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
  }(Dt)
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
var Yd = {
  NOTCH_ELEMENT_SELECTOR: ".mdc-notched-outline__notch"
}, js = {
  // This should stay in sync with $mdc-notched-outline-padding * 2.
  NOTCH_ELEMENT_PADDING: 8
}, Zd = {
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
var Qd = (
  /** @class */
  function(t) {
    at(e, t);
    function e(n) {
      return t.call(this, fe(fe({}, e.defaultAdapter), n)) || this;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return Yd;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Zd;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return js;
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
      n > 0 && (n += js.NOTCH_ELEMENT_PADDING), this.adapter.setNotchWidthProperty(n), this.adapter.addClass(i);
    }, e.prototype.closeNotch = function() {
      var n = e.cssClasses.OUTLINE_NOTCHED;
      this.adapter.removeClass(n), this.adapter.removeNotchWidthProperty();
    }, e;
  }(Dt)
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
}, Jd = {
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
}, qs = {
  LABEL_SCALE: 0.75
}, xd = [
  "pattern",
  "min",
  "max",
  "required",
  "step",
  "minlength",
  "maxlength"
], $d = [
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
var Ws = ["mousedown", "touchstart"], zs = ["click", "keydown"], eh = (
  /** @class */
  function(t) {
    at(e, t);
    function e(n, i) {
      i === void 0 && (i = {});
      var r = t.call(this, fe(fe({}, e.defaultAdapter), n)) || this;
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
        return Jd;
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
        return qs;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "shouldAlwaysFloat", {
      get: function() {
        var n = this.getNativeInput().type;
        return $d.indexOf(n) >= 0;
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
        for (var a = Rt(Ws), l = a.next(); !l.done; l = a.next()) {
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
        for (var u = Rt(zs), c = u.next(); !c.done; c = u.next()) {
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
        for (var a = Rt(Ws), l = a.next(); !l.done; l = a.next()) {
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
        for (var u = Rt(zs), c = u.next(); !c.done; c = u.next()) {
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
        return xd.indexOf(r) > -1 ? (i.styleValidity(!0), i.adapter.setLabelRequired(i.getNativeInput().required), !0) : !1;
      }), n.indexOf("maxlength") > -1 && this.setcharacterCounter(this.getValue().length);
    }, e.prototype.notchOutline = function(n) {
      if (!(!this.adapter.hasOutline() || !this.adapter.hasLabel()))
        if (n) {
          var i = this.adapter.getLabelWidth() * qs.LABEL_SCALE;
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
  }(Dt)
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
var Ks = {
  ICON_EVENT: "MDCTextField:icon",
  ICON_ROLE: "button"
}, th = {
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
var Xs = ["click", "keydown"], nh = (
  /** @class */
  function(t) {
    at(e, t);
    function e(n) {
      var i = t.call(this, fe(fe({}, e.defaultAdapter), n)) || this;
      return i.savedTabIndex = null, i.interactionHandler = function(r) {
        i.handleInteraction(r);
      }, i;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return Ks;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return th;
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
        for (var r = Rt(Xs), s = r.next(); !s.done; s = r.next()) {
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
        for (var r = Rt(Xs), s = r.next(); !s.done; s = r.next()) {
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
      this.savedTabIndex && (n ? (this.adapter.setAttr("tabindex", "-1"), this.adapter.removeAttr("role")) : (this.adapter.setAttr("tabindex", this.savedTabIndex), this.adapter.setAttr("role", Ks.ICON_ROLE)));
    }, e.prototype.setAriaLabel = function(n) {
      this.adapter.setAttr("aria-label", n);
    }, e.prototype.setContent = function(n) {
      this.adapter.setContent(n);
    }, e.prototype.handleInteraction = function(n) {
      var i = n.key === "Enter" || n.keyCode === 13;
      (n.type === "click" || i) && (n.preventDefault(), this.adapter.notifyIconAction());
    }, e;
  }(Dt)
);
function ih(t) {
  let e, n, i, r, s, a, l, o;
  const u = (
    /*#slots*/
    t[22].default
  ), c = Ie(
    u,
    t,
    /*$$scope*/
    t[21],
    null
  );
  let f = [
    {
      class: n = se({
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
      ).map(Zs).concat([
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
      e = ne("label"), c && c.c(), ce(e, d);
    },
    m(h, p) {
      V(h, e, p), c && c.m(e, null), t[24](e), a = !0, l || (o = [
        he(s = xe.call(
          null,
          e,
          /*use*/
          t[2]
        )),
        he(
          /*forwardEvents*/
          t[10].call(null, e)
        )
      ], l = !0);
    },
    p(h, p) {
      c && c.p && (!a || p & /*$$scope*/
      2097152) && Ae(
        c,
        u,
        h,
        /*$$scope*/
        h[21],
        a ? Ee(
          u,
          /*$$scope*/
          h[21],
          p,
          null
        ) : ye(
          /*$$scope*/
          h[21]
        ),
        null
      ), ce(e, d = me(f, [
        (!a || p & /*className, floatAbove, required, internalClasses*/
        267 && n !== (n = se({
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
        (!a || p & /*internalStyles, style*/
        528 && i !== (i = Object.entries(
          /*internalStyles*/
          h[9]
        ).map(Zs).concat([
          /*style*/
          h[4]
        ]).join(" "))) && { style: i },
        (!a || p & /*forId*/
        32 && r !== (r = /*forId*/
        h[5] || /*inputProps*/
        (h[11] ? (
          /*inputProps*/
          h[11].id
        ) : void 0))) && { for: r },
        p & /*$$restProps*/
        4096 && /*$$restProps*/
        h[12]
      ])), s && pe(s.update) && p & /*use*/
      4 && s.update.call(
        null,
        /*use*/
        h[2]
      );
    },
    i(h) {
      a || (y(c, h), a = !0);
    },
    o(h) {
      O(c, h), a = !1;
    },
    d(h) {
      h && B(e), c && c.d(h), t[24](null), l = !1, Ye(o);
    }
  };
}
function rh(t) {
  let e, n, i, r, s, a, l;
  const o = (
    /*#slots*/
    t[22].default
  ), u = Ie(
    o,
    t,
    /*$$scope*/
    t[21],
    null
  );
  let c = [
    {
      class: n = se({
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
      ).map(Ys).concat([
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
      e = ne("span"), u && u.c(), ce(e, f);
    },
    m(d, h) {
      V(d, e, h), u && u.m(e, null), t[23](e), s = !0, a || (l = [
        he(r = xe.call(
          null,
          e,
          /*use*/
          t[2]
        )),
        he(
          /*forwardEvents*/
          t[10].call(null, e)
        )
      ], a = !0);
    },
    p(d, h) {
      u && u.p && (!s || h & /*$$scope*/
      2097152) && Ae(
        u,
        o,
        d,
        /*$$scope*/
        d[21],
        s ? Ee(
          o,
          /*$$scope*/
          d[21],
          h,
          null
        ) : ye(
          /*$$scope*/
          d[21]
        ),
        null
      ), ce(e, f = me(c, [
        (!s || h & /*className, floatAbove, required, internalClasses*/
        267 && n !== (n = se({
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
        ).map(Ys).concat([
          /*style*/
          d[4]
        ]).join(" "))) && { style: i },
        h & /*$$restProps*/
        4096 && /*$$restProps*/
        d[12]
      ])), r && pe(r.update) && h & /*use*/
      4 && r.update.call(
        null,
        /*use*/
        d[2]
      );
    },
    i(d) {
      s || (y(u, d), s = !0);
    },
    o(d) {
      O(u, d), s = !1;
    },
    d(d) {
      d && B(e), u && u.d(d), t[23](null), a = !1, Ye(l);
    }
  };
}
function sh(t) {
  let e, n, i, r;
  const s = [rh, ih], a = [];
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
      a[e].m(o, u), V(o, i, u), r = !0;
    },
    p(o, [u]) {
      let c = e;
      e = l(o), e === c ? a[e].p(o, u) : (Ue(), O(a[c], 1, 1, () => {
        a[c] = null;
      }), Be(), n = a[e], n ? n.p(o, u) : (n = a[e] = s[e](o), n.c()), y(n, 1), n.m(i.parentNode, i));
    },
    i(o) {
      r || (y(n), r = !0);
    },
    o(o) {
      O(n), r = !1;
    },
    d(o) {
      o && B(i), a[e].d(o);
    }
  };
}
const Ys = ([t, e]) => `${t}: ${e};`, Zs = ([t, e]) => `${t}: ${e};`;
function lh(t, e, n) {
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
  let r = ge(e, i), { $$slots: s = {}, $$scope: a } = e;
  var l;
  const o = rt(Je());
  let { use: u = [] } = e, { class: c = "" } = e, { style: f = "" } = e, { for: d = void 0 } = e, { floatAbove: h = !1 } = e, { required: p = !1 } = e, { wrapped: g = !1 } = e, m, E, v = {}, S = {}, C = (l = ze("SMUI:generic:input:props")) !== null && l !== void 0 ? l : {}, D = h, M = p;
  ft(() => {
    n(18, E = new Kd({
      addClass: _,
      removeClass: L,
      getWidth: () => {
        var R, G;
        const oe = q(), Oe = oe.cloneNode(!0);
        (R = oe.parentNode) === null || R === void 0 || R.appendChild(Oe), Oe.classList.add("smui-floating-label--remove-transition"), Oe.classList.add("smui-floating-label--force-size"), Oe.classList.remove("mdc-floating-label--float-above");
        const ve = Oe.scrollWidth;
        return (G = oe.parentNode) === null || G === void 0 || G.removeChild(Oe), ve;
      },
      registerInteractionHandler: (R, G) => q().addEventListener(R, G),
      deregisterInteractionHandler: (R, G) => q().removeEventListener(R, G)
    }));
    const N = {
      get element() {
        return q();
      },
      addStyle: k,
      removeStyle: A
    };
    return _e(m, "SMUIFloatingLabel:mount", N), E.init(), () => {
      _e(m, "SMUIFloatingLabel:unmount", N), E.destroy();
    };
  });
  function _(N) {
    v[N] || n(8, v[N] = !0, v);
  }
  function L(N) {
    (!(N in v) || v[N]) && n(8, v[N] = !1, v);
  }
  function k(N, R) {
    S[N] != R && (R === "" || R == null ? (delete S[N], n(9, S)) : n(9, S[N] = R, S));
  }
  function A(N) {
    N in S && (delete S[N], n(9, S));
  }
  function b(N) {
    E.shake(N);
  }
  function I(N) {
    n(0, h = N);
  }
  function T(N) {
    n(1, p = N);
  }
  function H() {
    return E.getWidth();
  }
  function q() {
    return m;
  }
  function j(N) {
    le[N ? "unshift" : "push"](() => {
      m = N, n(7, m);
    });
  }
  function K(N) {
    le[N ? "unshift" : "push"](() => {
      m = N, n(7, m);
    });
  }
  return t.$$set = (N) => {
    e = X(X({}, e), nt(N)), n(12, r = ge(e, i)), "use" in N && n(2, u = N.use), "class" in N && n(3, c = N.class), "style" in N && n(4, f = N.style), "for" in N && n(5, d = N.for), "floatAbove" in N && n(0, h = N.floatAbove), "required" in N && n(1, p = N.required), "wrapped" in N && n(6, g = N.wrapped), "$$scope" in N && n(21, a = N.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty & /*instance, previousFloatAbove, floatAbove*/
    786433 && E && D !== h && (n(19, D = h), E.float(h)), t.$$.dirty & /*instance, previousRequired, required*/
    1310722 && E && M !== p && (n(20, M = p), E.setRequired(p));
  }, [
    h,
    p,
    u,
    c,
    f,
    d,
    g,
    m,
    v,
    S,
    o,
    C,
    r,
    b,
    I,
    T,
    H,
    q,
    E,
    D,
    M,
    a,
    s,
    j,
    K
  ];
}
class zi extends Me {
  constructor(e) {
    super(), De(this, e, lh, sh, Ce, {
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
function ah(t) {
  let e, n, i, r, s, a, l = [
    {
      class: n = se({
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
      ).map(Qs).concat([
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
      e = ne("div"), ce(e, o);
    },
    m(u, c) {
      V(u, e, c), t[13](e), s || (a = [
        he(r = xe.call(
          null,
          e,
          /*use*/
          t[0]
        )),
        he(
          /*forwardEvents*/
          t[7].call(null, e)
        )
      ], s = !0);
    },
    p(u, [c]) {
      ce(e, o = me(l, [
        c & /*className, active, internalClasses*/
        42 && n !== (n = se({
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
        ).map(Qs).concat([
          /*style*/
          u[2]
        ]).join(" ")) && { style: i },
        c & /*$$restProps*/
        256 && /*$$restProps*/
        u[8]
      ])), r && pe(r.update) && c & /*use*/
      1 && r.update.call(
        null,
        /*use*/
        u[0]
      );
    },
    i: Qe,
    o: Qe,
    d(u) {
      u && B(e), t[13](null), s = !1, Ye(a);
    }
  };
}
const Qs = ([t, e]) => `${t}: ${e};`;
function oh(t, e, n) {
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
  let r = ge(e, i);
  const s = rt(Je());
  let { use: a = [] } = e, { class: l = "" } = e, { style: o = "" } = e, { active: u = !1 } = e, c, f, d = {}, h = {};
  ft(() => (f = new Xd({
    addClass: g,
    removeClass: m,
    hasClass: p,
    setStyle: E,
    registerEventHandler: (_, L) => D().addEventListener(_, L),
    deregisterEventHandler: (_, L) => D().removeEventListener(_, L)
  }), f.init(), () => {
    f.destroy();
  }));
  function p(_) {
    return _ in d ? d[_] : D().classList.contains(_);
  }
  function g(_) {
    d[_] || n(5, d[_] = !0, d);
  }
  function m(_) {
    (!(_ in d) || d[_]) && n(5, d[_] = !1, d);
  }
  function E(_, L) {
    h[_] != L && (L === "" || L == null ? (delete h[_], n(6, h)) : n(6, h[_] = L, h));
  }
  function v() {
    f.activate();
  }
  function S() {
    f.deactivate();
  }
  function C(_) {
    f.setRippleCenter(_);
  }
  function D() {
    return c;
  }
  function M(_) {
    le[_ ? "unshift" : "push"](() => {
      c = _, n(4, c);
    });
  }
  return t.$$set = (_) => {
    e = X(X({}, e), nt(_)), n(8, r = ge(e, i)), "use" in _ && n(0, a = _.use), "class" in _ && n(1, l = _.class), "style" in _ && n(2, o = _.style), "active" in _ && n(3, u = _.active);
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
    v,
    S,
    C,
    D,
    M
  ];
}
class Fo extends Me {
  constructor(e) {
    super(), De(this, e, oh, ah, Ce, {
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
function Js(t) {
  let e, n, i;
  const r = (
    /*#slots*/
    t[15].default
  ), s = Ie(
    r,
    t,
    /*$$scope*/
    t[14],
    null
  );
  return {
    c() {
      e = ne("div"), s && s.c(), P(e, "class", "mdc-notched-outline__notch"), P(e, "style", n = Object.entries(
        /*notchStyles*/
        t[7]
      ).map(xs).join(" "));
    },
    m(a, l) {
      V(a, e, l), s && s.m(e, null), i = !0;
    },
    p(a, l) {
      s && s.p && (!i || l & /*$$scope*/
      16384) && Ae(
        s,
        r,
        a,
        /*$$scope*/
        a[14],
        i ? Ee(
          r,
          /*$$scope*/
          a[14],
          l,
          null
        ) : ye(
          /*$$scope*/
          a[14]
        ),
        null
      ), (!i || l & /*notchStyles*/
      128 && n !== (n = Object.entries(
        /*notchStyles*/
        a[7]
      ).map(xs).join(" "))) && P(e, "style", n);
    },
    i(a) {
      i || (y(s, a), i = !0);
    },
    o(a) {
      O(s, a), i = !1;
    },
    d(a) {
      a && B(e), s && s.d(a);
    }
  };
}
function uh(t) {
  let e, n, i, r, s, a, l, o, u, c, f = !/*noLabel*/
  t[3] && Js(t), d = [
    {
      class: a = se({
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
  for (let p = 0; p < d.length; p += 1)
    h = X(h, d[p]);
  return {
    c() {
      e = ne("div"), n = ne("div"), i = ae(), f && f.c(), r = ae(), s = ne("div"), P(n, "class", "mdc-notched-outline__leading"), P(s, "class", "mdc-notched-outline__trailing"), ce(e, h);
    },
    m(p, g) {
      V(p, e, g), J(e, n), J(e, i), f && f.m(e, null), J(e, r), J(e, s), t[16](e), o = !0, u || (c = [
        he(l = xe.call(
          null,
          e,
          /*use*/
          t[0]
        )),
        he(
          /*forwardEvents*/
          t[8].call(null, e)
        ),
        ue(
          e,
          "SMUIFloatingLabel:mount",
          /*handleFloatingLabelMount*/
          t[9]
        ),
        ue(
          e,
          "SMUIFloatingLabel:unmount",
          /*SMUIFloatingLabel_unmount_handler*/
          t[17]
        )
      ], u = !0);
    },
    p(p, [g]) {
      /*noLabel*/
      p[3] ? f && (Ue(), O(f, 1, 1, () => {
        f = null;
      }), Be()) : f ? (f.p(p, g), g & /*noLabel*/
      8 && y(f, 1)) : (f = Js(p), f.c(), y(f, 1), f.m(e, r)), ce(e, h = me(d, [
        (!o || g & /*className, notched, noLabel, internalClasses*/
        78 && a !== (a = se({
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
        }))) && { class: a },
        g & /*$$restProps*/
        1024 && /*$$restProps*/
        p[10]
      ])), l && pe(l.update) && g & /*use*/
      1 && l.update.call(
        null,
        /*use*/
        p[0]
      );
    },
    i(p) {
      o || (y(f), o = !0);
    },
    o(p) {
      O(f), o = !1;
    },
    d(p) {
      p && B(e), f && f.d(), t[16](null), u = !1, Ye(c);
    }
  };
}
const xs = ([t, e]) => `${t}: ${e};`;
function ch(t, e, n) {
  const i = ["use", "class", "notched", "noLabel", "notch", "closeNotch", "getElement"];
  let r = ge(e, i), { $$slots: s = {}, $$scope: a } = e;
  const l = rt(Je());
  let { use: o = [] } = e, { class: u = "" } = e, { notched: c = !1 } = e, { noLabel: f = !1 } = e, d, h, p, g = {}, m = {};
  ft(() => (h = new Qd({
    addClass: v,
    removeClass: S,
    setNotchWidthProperty: (b) => C("width", b + "px"),
    removeNotchWidthProperty: () => D("width")
  }), h.init(), () => {
    h.destroy();
  }));
  function E(b) {
    n(4, p = b.detail);
  }
  function v(b) {
    g[b] || n(6, g[b] = !0, g);
  }
  function S(b) {
    (!(b in g) || g[b]) && n(6, g[b] = !1, g);
  }
  function C(b, I) {
    m[b] != I && (I === "" || I == null ? (delete m[b], n(7, m)) : n(7, m[b] = I, m));
  }
  function D(b) {
    b in m && (delete m[b], n(7, m));
  }
  function M(b) {
    h.notch(b);
  }
  function _() {
    h.closeNotch();
  }
  function L() {
    return d;
  }
  function k(b) {
    le[b ? "unshift" : "push"](() => {
      d = b, n(5, d);
    });
  }
  const A = () => n(4, p = void 0);
  return t.$$set = (b) => {
    e = X(X({}, e), nt(b)), n(10, r = ge(e, i)), "use" in b && n(0, o = b.use), "class" in b && n(1, u = b.class), "notched" in b && n(2, c = b.notched), "noLabel" in b && n(3, f = b.noLabel), "$$scope" in b && n(14, a = b.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty & /*floatingLabel*/
    16 && (p ? (p.addStyle("transition-duration", "0s"), v("mdc-notched-outline--upgraded"), requestAnimationFrame(() => {
      p && p.removeStyle("transition-duration");
    })) : S("mdc-notched-outline--upgraded"));
  }, [
    o,
    u,
    c,
    f,
    p,
    d,
    g,
    m,
    l,
    E,
    r,
    M,
    _,
    L,
    a,
    s,
    k,
    A
  ];
}
class No extends Me {
  constructor(e) {
    super(), De(this, e, ch, uh, Ce, {
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
function fh(t) {
  let e;
  const n = (
    /*#slots*/
    t[11].default
  ), i = Ie(
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
      8192) && Ae(
        i,
        n,
        r,
        /*$$scope*/
        r[13],
        e ? Ee(
          n,
          /*$$scope*/
          r[13],
          s,
          null
        ) : ye(
          /*$$scope*/
          r[13]
        ),
        null
      );
    },
    i(r) {
      e || (y(i, r), e = !0);
    },
    o(r) {
      O(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function dh(t) {
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
      class: se({
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
      $$slots: { default: [fh] },
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
        class: se({
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
      128 && Fe(
        /*props*/
        l[7]
      ),
      o & /*$$restProps*/
      512 && Fe(
        /*$$restProps*/
        l[9]
      )
    ]))), { props: u };
  }
  return s && (e = Nt(s, a(t)), t[12](e)), {
    c() {
      e && ie(e.$$.fragment), n = Ze();
    },
    m(l, o) {
      e && ee(e, l, o), V(l, n, o), i = !0;
    },
    p(l, [o]) {
      if (o & /*component*/
      4 && s !== (s = /*component*/
      l[2])) {
        if (e) {
          Ue();
          const u = e;
          O(u.$$.fragment, 1, 0, () => {
            te(u, 1);
          }), Be();
        }
        s ? (e = Nt(s, a(l, o)), l[12](e), ie(e.$$.fragment), y(e.$$.fragment, 1), ee(e, n.parentNode, n)) : e = null;
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
            class: se({
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
          128 && Fe(
            /*props*/
            l[7]
          ),
          o & /*$$restProps*/
          512 && Fe(
            /*$$restProps*/
            l[9]
          )
        ]) : {};
        o & /*$$scope*/
        8192 && (u.$$scope = { dirty: o, ctx: l }), e.$set(u);
      }
    },
    i(l) {
      i || (e && y(e.$$.fragment, l), i = !0);
    },
    o(l) {
      e && O(e.$$.fragment, l), i = !1;
    },
    d(l) {
      l && B(n), t[12](null), e && te(e, l);
    }
  };
}
const on = {
  component: Ut,
  tag: "div",
  class: "",
  classMap: {},
  contexts: {},
  props: {}
};
function hh(t, e, n) {
  const i = ["use", "class", "component", "tag", "getElement"];
  let r = ge(e, i), { $$slots: s = {}, $$scope: a } = e, { use: l = [] } = e, { class: o = "" } = e, u;
  const c = on.class, f = {}, d = [], h = on.contexts, p = on.props;
  let { component: g = on.component } = e, { tag: m = g === Ut ? on.tag : void 0 } = e;
  Object.entries(on.classMap).forEach(([C, D]) => {
    const M = ze(D);
    M && "subscribe" in M && d.push(M.subscribe((_) => {
      n(5, f[C] = _, f);
    }));
  });
  const E = rt(Je());
  for (let C in h)
    h.hasOwnProperty(C) && Ge(C, h[C]);
  Qt(() => {
    for (const C of d)
      C();
  });
  function v() {
    return u.getElement();
  }
  function S(C) {
    le[C ? "unshift" : "push"](() => {
      u = C, n(4, u);
    });
  }
  return t.$$set = (C) => {
    e = X(X({}, e), nt(C)), n(9, r = ge(e, i)), "use" in C && n(0, l = C.use), "class" in C && n(1, o = C.class), "component" in C && n(2, g = C.component), "tag" in C && n(3, m = C.tag), "$$scope" in C && n(13, a = C.$$scope);
  }, [
    l,
    o,
    g,
    m,
    u,
    f,
    c,
    p,
    E,
    r,
    v,
    s,
    S,
    a
  ];
}
class mh extends Me {
  constructor(e) {
    super(), De(this, e, hh, dh, Ce, {
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
const $s = Object.assign({}, on);
function Lt(t) {
  return new Proxy(mh, {
    construct: function(e, n) {
      return Object.assign(on, $s, t), new e(...n);
    },
    get: function(e, n) {
      return Object.assign(on, $s, t), e[n];
    }
  });
}
const ph = Lt({
  class: "mdc-text-field-helper-line",
  tag: "div"
}), gh = Lt({
  class: "mdc-text-field__affix mdc-text-field__affix--prefix",
  tag: "span"
}), _h = Lt({
  class: "mdc-text-field__affix mdc-text-field__affix--suffix",
  tag: "span"
});
function bh(t) {
  let e, n, i, r, s, a = [
    {
      class: n = se({
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
      e = ne("input"), ce(e, l);
    },
    m(o, u) {
      V(o, e, u), e.autofocus && e.focus(), t[26](e), r || (s = [
        he(i = xe.call(
          null,
          e,
          /*use*/
          t[0]
        )),
        he(
          /*forwardEvents*/
          t[7].call(null, e)
        ),
        ue(
          e,
          "input",
          /*input_handler*/
          t[27]
        ),
        ue(
          e,
          "change",
          /*changeHandler*/
          t[9]
        ),
        ue(
          e,
          "blur",
          /*blur_handler*/
          t[24]
        ),
        ue(
          e,
          "focus",
          /*focus_handler*/
          t[25]
        )
      ], r = !0);
    },
    p(o, [u]) {
      ce(e, l = me(a, [
        u & /*className*/
        2 && n !== (n = se({
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
      ])), i && pe(i.update) && u & /*use*/
      1 && i.update.call(
        null,
        /*use*/
        o[0]
      );
    },
    i: Qe,
    o: Qe,
    d(o) {
      o && B(e), t[26](null), r = !1, Ye(s);
    }
  };
}
function vh(t) {
  return t === "" ? Number.NaN : +t;
}
function Ih(t, e, n) {
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
  let r = ge(e, i);
  const s = rt(Je());
  let a = () => {
  };
  function l(R) {
    return R === a;
  }
  let { use: o = [] } = e, { class: u = "" } = e, { type: c = "text" } = e, { placeholder: f = " " } = e, { value: d = a } = e;
  const h = l(d);
  h && (d = "");
  let { files: p = null } = e, { dirty: g = !1 } = e, { invalid: m = !1 } = e, { updateInvalid: E = !0 } = e, { emptyValueNull: v = d === null } = e;
  h && v && (d = null);
  let { emptyValueUndefined: S = d === void 0 } = e;
  h && S && (d = void 0);
  let C, D = {}, M = {};
  ft(() => {
    E && n(14, m = C.matches(":invalid"));
  });
  function _(R) {
    if (c === "file") {
      n(12, p = R.currentTarget.files);
      return;
    }
    if (R.currentTarget.value === "" && v) {
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
        n(11, d = vh(R.currentTarget.value));
        break;
      default:
        n(11, d = R.currentTarget.value);
        break;
    }
  }
  function L(R) {
    (c === "file" || c === "range") && _(R), n(13, g = !0), E && n(14, m = C.matches(":invalid"));
  }
  function k(R) {
    var G;
    return R in D ? (G = D[R]) !== null && G !== void 0 ? G : null : H().getAttribute(R);
  }
  function A(R, G) {
    D[R] !== G && n(6, D[R] = G, D);
  }
  function b(R) {
    (!(R in D) || D[R] != null) && n(6, D[R] = void 0, D);
  }
  function I() {
    H().focus();
  }
  function T() {
    H().blur();
  }
  function H() {
    return C;
  }
  function q(R) {
    Kn.call(this, t, R);
  }
  function j(R) {
    Kn.call(this, t, R);
  }
  function K(R) {
    le[R ? "unshift" : "push"](() => {
      C = R, n(5, C);
    });
  }
  const N = (R) => c !== "file" && _(R);
  return t.$$set = (R) => {
    e = X(X({}, e), nt(R)), n(10, r = ge(e, i)), "use" in R && n(0, o = R.use), "class" in R && n(1, u = R.class), "type" in R && n(2, c = R.type), "placeholder" in R && n(3, f = R.placeholder), "value" in R && n(11, d = R.value), "files" in R && n(12, p = R.files), "dirty" in R && n(13, g = R.dirty), "invalid" in R && n(14, m = R.invalid), "updateInvalid" in R && n(15, E = R.updateInvalid), "emptyValueNull" in R && n(16, v = R.emptyValueNull), "emptyValueUndefined" in R && n(17, S = R.emptyValueUndefined);
  }, t.$$.update = () => {
    t.$$.dirty & /*type, valueProp, value*/
    2068 && (c === "file" ? (delete M.value, n(4, M), n(2, c), n(11, d)) : n(4, M.value = d ?? "", M));
  }, [
    o,
    u,
    c,
    f,
    M,
    C,
    D,
    s,
    _,
    L,
    r,
    d,
    p,
    g,
    m,
    E,
    v,
    S,
    k,
    A,
    b,
    I,
    T,
    H,
    q,
    j,
    K,
    N
  ];
}
class Eh extends Me {
  constructor(e) {
    super(), De(this, e, Ih, bh, Ce, {
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
function Ah(t) {
  let e, n, i, r, s, a, l = [
    {
      class: n = se({
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
      e = ne("textarea"), ce(e, o);
    },
    m(u, c) {
      V(u, e, c), e.autofocus && e.focus(), t[21](e), $t(
        e,
        /*value*/
        t[0]
      ), s || (a = [
        he(r = xe.call(
          null,
          e,
          /*use*/
          t[1]
        )),
        he(
          /*forwardEvents*/
          t[7].call(null, e)
        ),
        ue(
          e,
          "change",
          /*changeHandler*/
          t[8]
        ),
        ue(
          e,
          "blur",
          /*blur_handler*/
          t[19]
        ),
        ue(
          e,
          "focus",
          /*focus_handler*/
          t[20]
        ),
        ue(
          e,
          "input",
          /*textarea_input_handler*/
          t[22]
        )
      ], s = !0);
    },
    p(u, [c]) {
      ce(e, o = me(l, [
        c & /*className*/
        4 && n !== (n = se({
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
      ])), r && pe(r.update) && c & /*use*/
      2 && r.update.call(
        null,
        /*use*/
        u[1]
      ), c & /*value*/
      1 && $t(
        e,
        /*value*/
        u[0]
      );
    },
    i: Qe,
    o: Qe,
    d(u) {
      u && B(e), t[21](null), s = !1, Ye(a);
    }
  };
}
function yh(t, e, n) {
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
  let r = ge(e, i);
  const s = rt(Je());
  let { use: a = [] } = e, { class: l = "" } = e, { style: o = "" } = e, { value: u = "" } = e, { dirty: c = !1 } = e, { invalid: f = !1 } = e, { updateInvalid: d = !0 } = e, { resizable: h = !0 } = e, p, g = {};
  ft(() => {
    d && n(11, f = p.matches(":invalid"));
  });
  function m() {
    n(10, c = !0), d && n(11, f = p.matches(":invalid"));
  }
  function E(b) {
    var I;
    return b in g ? (I = g[b]) !== null && I !== void 0 ? I : null : M().getAttribute(b);
  }
  function v(b, I) {
    g[b] !== I && n(6, g[b] = I, g);
  }
  function S(b) {
    (!(b in g) || g[b] != null) && n(6, g[b] = void 0, g);
  }
  function C() {
    M().focus();
  }
  function D() {
    M().blur();
  }
  function M() {
    return p;
  }
  function _(b) {
    Kn.call(this, t, b);
  }
  function L(b) {
    Kn.call(this, t, b);
  }
  function k(b) {
    le[b ? "unshift" : "push"](() => {
      p = b, n(5, p);
    });
  }
  function A() {
    u = this.value, n(0, u);
  }
  return t.$$set = (b) => {
    e = X(X({}, e), nt(b)), n(9, r = ge(e, i)), "use" in b && n(1, a = b.use), "class" in b && n(2, l = b.class), "style" in b && n(3, o = b.style), "value" in b && n(0, u = b.value), "dirty" in b && n(10, c = b.dirty), "invalid" in b && n(11, f = b.invalid), "updateInvalid" in b && n(12, d = b.updateInvalid), "resizable" in b && n(4, h = b.resizable);
  }, [
    u,
    a,
    l,
    o,
    h,
    p,
    g,
    s,
    m,
    r,
    c,
    f,
    d,
    E,
    v,
    S,
    C,
    D,
    M,
    _,
    L,
    k,
    A
  ];
}
class Ch extends Me {
  constructor(e) {
    super(), De(this, e, yh, Ah, Ce, {
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
const Sh = (t) => ({}), el = (t) => ({}), Th = (t) => ({}), tl = (t) => ({}), Lh = (t) => ({}), nl = (t) => ({}), Oh = (t) => ({}), il = (t) => ({}), Rh = (t) => ({}), rl = (t) => ({}), Dh = (t) => ({}), sl = (t) => ({}), Mh = (t) => ({}), ll = (t) => ({}), kh = (t) => ({}), al = (t) => ({}), Fh = (t) => ({}), ol = (t) => ({}), Nh = (t) => ({}), ul = (t) => ({}), Hh = (t) => ({}), cl = (t) => ({}), Ph = (t) => ({}), fl = (t) => ({});
function wh(t) {
  let e, n, i, r, s, a, l, o, u, c, f, d, h, p;
  const g = (
    /*#slots*/
    t[56].label
  ), m = Ie(
    g,
    t,
    /*$$scope*/
    t[87],
    rl
  );
  i = new xn({
    props: {
      key: "SMUI:textfield:icon:leading",
      value: !0,
      $$slots: { default: [Bh] },
      $$scope: { ctx: t }
    }
  });
  const E = (
    /*#slots*/
    t[56].default
  ), v = Ie(
    E,
    t,
    /*$$scope*/
    t[87],
    null
  );
  a = new xn({
    props: {
      key: "SMUI:textfield:icon:leading",
      value: !1,
      $$slots: { default: [Vh] },
      $$scope: { ctx: t }
    }
  });
  const S = (
    /*#slots*/
    t[56].ripple
  ), C = Ie(
    S,
    t,
    /*$$scope*/
    t[87],
    tl
  );
  let D = [
    {
      class: o = se({
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
      ).map(Al).concat([
        /*style*/
        t[10]
      ]).join(" ")
    },
    Kt(
      /*$$restProps*/
      t[46],
      ["input$", "label$", "ripple$", "outline$", "helperLine$"]
    )
  ], M = {};
  for (let _ = 0; _ < D.length; _ += 1)
    M = X(M, D[_]);
  return {
    c() {
      e = ne("div"), m && m.c(), n = ae(), ie(i.$$.fragment), r = ae(), v && v.c(), s = ae(), ie(a.$$.fragment), l = ae(), C && C.c(), ce(e, M);
    },
    m(_, L) {
      V(_, e, L), m && m.m(e, null), J(e, n), ee(i, e, null), J(e, r), v && v.m(e, null), J(e, s), ee(a, e, null), J(e, l), C && C.m(e, null), t[82](e), d = !0, h || (p = [
        he(c = Ft.call(null, e, {
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
        he(f = xe.call(
          null,
          e,
          /*use*/
          t[8]
        )),
        he(
          /*forwardEvents*/
          t[34].call(null, e)
        ),
        ue(
          e,
          "SMUITextfieldLeadingIcon:mount",
          /*handleLeadingIconMount*/
          t[38]
        ),
        ue(
          e,
          "SMUITextfieldLeadingIcon:unmount",
          /*SMUITextfieldLeadingIcon_unmount_handler_1*/
          t[83]
        ),
        ue(
          e,
          "SMUITextfieldTrailingIcon:mount",
          /*handleTrailingIconMount*/
          t[39]
        ),
        ue(
          e,
          "SMUITextfieldTrailingIcon:unmount",
          /*SMUITextfieldTrailingIcon_unmount_handler_1*/
          t[84]
        )
      ], h = !0);
    },
    p(_, L) {
      m && m.p && (!d || L[2] & /*$$scope*/
      33554432) && Ae(
        m,
        g,
        _,
        /*$$scope*/
        _[87],
        d ? Ee(
          g,
          /*$$scope*/
          _[87],
          L,
          Rh
        ) : ye(
          /*$$scope*/
          _[87]
        ),
        rl
      );
      const k = {};
      L[2] & /*$$scope*/
      33554432 && (k.$$scope = { dirty: L, ctx: _ }), i.$set(k), v && v.p && (!d || L[2] & /*$$scope*/
      33554432) && Ae(
        v,
        E,
        _,
        /*$$scope*/
        _[87],
        d ? Ee(
          E,
          /*$$scope*/
          _[87],
          L,
          null
        ) : ye(
          /*$$scope*/
          _[87]
        ),
        null
      );
      const A = {};
      L[2] & /*$$scope*/
      33554432 && (A.$$scope = { dirty: L, ctx: _ }), a.$set(A), C && C.p && (!d || L[2] & /*$$scope*/
      33554432) && Ae(
        C,
        S,
        _,
        /*$$scope*/
        _[87],
        d ? Ee(
          S,
          /*$$scope*/
          _[87],
          L,
          Th
        ) : ye(
          /*$$scope*/
          _[87]
        ),
        tl
      ), ce(e, M = me(D, [
        (!d || L[0] & /*className, disabled, textarea, variant, noLabel, invalid, internalClasses*/
        33673730 | L[1] & /*$$slots*/
        65536 && o !== (o = se({
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
        (!d || L[0] & /*internalStyles, style*/
        67109888 && u !== (u = Object.entries(
          /*internalStyles*/
          _[26]
        ).map(Al).concat([
          /*style*/
          _[10]
        ]).join(" "))) && { style: u },
        L[1] & /*$$restProps*/
        32768 && Kt(
          /*$$restProps*/
          _[46],
          ["input$", "label$", "ripple$", "outline$", "helperLine$"]
        )
      ])), c && pe(c.update) && L[0] & /*ripple*/
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
      }), f && pe(f.update) && L[0] & /*use*/
      256 && f.update.call(
        null,
        /*use*/
        _[8]
      );
    },
    i(_) {
      d || (y(m, _), y(i.$$.fragment, _), y(v, _), y(a.$$.fragment, _), y(C, _), d = !0);
    },
    o(_) {
      O(m, _), O(i.$$.fragment, _), O(v, _), O(a.$$.fragment, _), O(C, _), d = !1;
    },
    d(_) {
      _ && B(e), m && m.d(_), te(i), v && v.d(_), te(a), C && C.d(_), t[82](null), h = !1, Ye(p);
    }
  };
}
function Uh(t) {
  let e, n, i, r, s, a, l, o, u, c, f, d, h, p, g, m, E, v, S = !/*textarea*/
  t[14] && /*variant*/
  t[15] !== "outlined" && dl(t), C = (
    /*textarea*/
    (t[14] || /*variant*/
    t[15] === "outlined") && pl(t)
  );
  r = new xn({
    props: {
      key: "SMUI:textfield:icon:leading",
      value: !0,
      $$slots: { default: [Wh] },
      $$scope: { ctx: t }
    }
  });
  const D = (
    /*#slots*/
    t[56].default
  ), M = Ie(
    D,
    t,
    /*$$scope*/
    t[87],
    null
  ), _ = [Kh, zh], L = [];
  function k(T, H) {
    return (
      /*textarea*/
      T[14] && typeof /*value*/
      T[0] == "string" ? 0 : 1
    );
  }
  l = k(t), o = L[l] = _[l](t), c = new xn({
    props: {
      key: "SMUI:textfield:icon:leading",
      value: !1,
      $$slots: { default: [Zh] },
      $$scope: { ctx: t }
    }
  });
  let A = !/*textarea*/
  t[14] && /*variant*/
  t[15] !== "outlined" && /*ripple*/
  t[11] && vl(t), b = [
    {
      class: d = se({
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
      ).map(El).concat([
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
    Kt(
      /*$$restProps*/
      t[46],
      ["input$", "label$", "ripple$", "outline$", "helperLine$"]
    )
  ], I = {};
  for (let T = 0; T < b.length; T += 1)
    I = X(I, b[T]);
  return {
    c() {
      e = ne("label"), S && S.c(), n = ae(), C && C.c(), i = ae(), ie(r.$$.fragment), s = ae(), M && M.c(), a = ae(), o.c(), u = ae(), ie(c.$$.fragment), f = ae(), A && A.c(), ce(e, I);
    },
    m(T, H) {
      V(T, e, H), S && S.m(e, null), J(e, n), C && C.m(e, null), J(e, i), ee(r, e, null), J(e, s), M && M.m(e, null), J(e, a), L[l].m(e, null), J(e, u), ee(c, e, null), J(e, f), A && A.m(e, null), t[78](e), m = !0, E || (v = [
        he(p = Ft.call(null, e, {
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
        he(g = xe.call(
          null,
          e,
          /*use*/
          t[8]
        )),
        he(
          /*forwardEvents*/
          t[34].call(null, e)
        ),
        ue(
          e,
          "SMUITextfieldLeadingIcon:mount",
          /*handleLeadingIconMount*/
          t[38]
        ),
        ue(
          e,
          "SMUITextfieldLeadingIcon:unmount",
          /*SMUITextfieldLeadingIcon_unmount_handler*/
          t[79]
        ),
        ue(
          e,
          "SMUITextfieldTrailingIcon:mount",
          /*handleTrailingIconMount*/
          t[39]
        ),
        ue(
          e,
          "SMUITextfieldTrailingIcon:unmount",
          /*SMUITextfieldTrailingIcon_unmount_handler*/
          t[80]
        ),
        ue(
          e,
          "SMUITextfieldCharacterCounter:mount",
          /*handleCharacterCounterMount*/
          t[40]
        ),
        ue(
          e,
          "SMUITextfieldCharacterCounter:unmount",
          /*SMUITextfieldCharacterCounter_unmount_handler*/
          t[81]
        )
      ], E = !0);
    },
    p(T, H) {
      !/*textarea*/
      T[14] && /*variant*/
      T[15] !== "outlined" ? S ? (S.p(T, H), H[0] & /*textarea, variant*/
      49152 && y(S, 1)) : (S = dl(T), S.c(), y(S, 1), S.m(e, n)) : S && (Ue(), O(S, 1, 1, () => {
        S = null;
      }), Be()), /*textarea*/
      T[14] || /*variant*/
      T[15] === "outlined" ? C ? (C.p(T, H), H[0] & /*textarea, variant*/
      49152 && y(C, 1)) : (C = pl(T), C.c(), y(C, 1), C.m(e, i)) : C && (Ue(), O(C, 1, 1, () => {
        C = null;
      }), Be());
      const q = {};
      H[2] & /*$$scope*/
      33554432 && (q.$$scope = { dirty: H, ctx: T }), r.$set(q), M && M.p && (!m || H[2] & /*$$scope*/
      33554432) && Ae(
        M,
        D,
        T,
        /*$$scope*/
        T[87],
        m ? Ee(
          D,
          /*$$scope*/
          T[87],
          H,
          null
        ) : ye(
          /*$$scope*/
          T[87]
        ),
        null
      );
      let j = l;
      l = k(T), l === j ? L[l].p(T, H) : (Ue(), O(L[j], 1, 1, () => {
        L[j] = null;
      }), Be(), o = L[l], o ? o.p(T, H) : (o = L[l] = _[l](T), o.c()), y(o, 1), o.m(e, u));
      const K = {};
      H[2] & /*$$scope*/
      33554432 && (K.$$scope = { dirty: H, ctx: T }), c.$set(K), !/*textarea*/
      T[14] && /*variant*/
      T[15] !== "outlined" && /*ripple*/
      T[11] ? A ? (A.p(T, H), H[0] & /*textarea, variant, ripple*/
      51200 && y(A, 1)) : (A = vl(T), A.c(), y(A, 1), A.m(e, null)) : A && (Ue(), O(A, 1, 1, () => {
        A = null;
      }), Be()), ce(e, I = me(b, [
        (!m || H[0] & /*className, disabled, textarea, variant, noLabel, label, focused, value, withLeadingIcon, withTrailingIcon, invalid, internalClasses*/
        314823171 | H[1] & /*$$slots*/
        65536 && d !== (d = se({
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
        (!m || H[0] & /*internalStyles, style*/
        67109888 && h !== (h = Object.entries(
          /*internalStyles*/
          T[26]
        ).map(El).concat([
          /*style*/
          T[10]
        ]).join(" "))) && { style: h },
        {
          for: (
            /* suppress a11y warning, since this is wrapped */
            void 0
          )
        },
        H[1] & /*$$restProps*/
        32768 && Kt(
          /*$$restProps*/
          T[46],
          ["input$", "label$", "ripple$", "outline$", "helperLine$"]
        )
      ])), p && pe(p.update) && H[0] & /*textarea, variant*/
      49152 | H[1] & /*inputElement*/
      4 && p.update.call(null, {
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
      }), g && pe(g.update) && H[0] & /*use*/
      256 && g.update.call(
        null,
        /*use*/
        T[8]
      );
    },
    i(T) {
      m || (y(S), y(C), y(r.$$.fragment, T), y(M, T), y(o), y(c.$$.fragment, T), y(A), m = !0);
    },
    o(T) {
      O(S), O(C), O(r.$$.fragment, T), O(M, T), O(o), O(c.$$.fragment, T), O(A), m = !1;
    },
    d(T) {
      T && B(e), S && S.d(), C && C.d(), te(r), M && M.d(T), L[l].d(), te(c), A && A.d(), t[78](null), E = !1, Ye(v);
    }
  };
}
function Bh(t) {
  let e;
  const n = (
    /*#slots*/
    t[56].leadingIcon
  ), i = Ie(
    n,
    t,
    /*$$scope*/
    t[87],
    il
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
      33554432) && Ae(
        i,
        n,
        r,
        /*$$scope*/
        r[87],
        e ? Ee(
          n,
          /*$$scope*/
          r[87],
          s,
          Oh
        ) : ye(
          /*$$scope*/
          r[87]
        ),
        il
      );
    },
    i(r) {
      e || (y(i, r), e = !0);
    },
    o(r) {
      O(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function Vh(t) {
  let e;
  const n = (
    /*#slots*/
    t[56].trailingIcon
  ), i = Ie(
    n,
    t,
    /*$$scope*/
    t[87],
    nl
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
      33554432) && Ae(
        i,
        n,
        r,
        /*$$scope*/
        r[87],
        e ? Ee(
          n,
          /*$$scope*/
          r[87],
          s,
          Lh
        ) : ye(
          /*$$scope*/
          r[87]
        ),
        nl
      );
    },
    i(r) {
      e || (y(i, r), e = !0);
    },
    o(r) {
      O(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function dl(t) {
  let e, n, i, r = (
    /*variant*/
    t[15] === "filled" && hl()
  ), s = !/*noLabel*/
  t[16] && /*label*/
  (t[17] != null || /*$$slots*/
  t[47].label) && ml(t);
  return {
    c() {
      r && r.c(), e = ae(), s && s.c(), n = Ze();
    },
    m(a, l) {
      r && r.m(a, l), V(a, e, l), s && s.m(a, l), V(a, n, l), i = !0;
    },
    p(a, l) {
      /*variant*/
      a[15] === "filled" ? r || (r = hl(), r.c(), r.m(e.parentNode, e)) : r && (r.d(1), r = null), !/*noLabel*/
      a[16] && /*label*/
      (a[17] != null || /*$$slots*/
      a[47].label) ? s ? (s.p(a, l), l[0] & /*noLabel, label*/
      196608 | l[1] & /*$$slots*/
      65536 && y(s, 1)) : (s = ml(a), s.c(), y(s, 1), s.m(n.parentNode, n)) : s && (Ue(), O(s, 1, 1, () => {
        s = null;
      }), Be());
    },
    i(a) {
      i || (y(s), i = !0);
    },
    o(a) {
      O(s), i = !1;
    },
    d(a) {
      a && (B(e), B(n)), r && r.d(a), s && s.d(a);
    }
  };
}
function hl(t) {
  let e;
  return {
    c() {
      e = ne("span"), P(e, "class", "mdc-text-field__ripple");
    },
    m(n, i) {
      V(n, e, i);
    },
    d(n) {
      n && B(e);
    }
  };
}
function ml(t) {
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
    Ve(
      /*$$restProps*/
      t[46],
      "label$"
    )
  ];
  let r = {
    $$slots: { default: [Gh] },
    $$scope: { ctx: t }
  };
  for (let s = 0; s < i.length; s += 1)
    r = X(r, i[s]);
  return e = new zi({ props: r }), t[57](e), {
    c() {
      ie(e.$$.fragment);
    },
    m(s, a) {
      ee(e, s, a), n = !0;
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
        32768 && Fe(Ve(
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
      n || (y(e.$$.fragment, s), n = !0);
    },
    o(s) {
      O(e.$$.fragment, s), n = !1;
    },
    d(s) {
      t[57](null), te(e, s);
    }
  };
}
function Gh(t) {
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
  ), s = Ie(
    r,
    t,
    /*$$scope*/
    t[87],
    fl
  );
  return {
    c() {
      n = ct(e), s && s.c();
    },
    m(a, l) {
      V(a, n, l), s && s.m(a, l), i = !0;
    },
    p(a, l) {
      (!i || l[0] & /*label*/
      131072) && e !== (e = /*label*/
      (a[17] == null ? "" : (
        /*label*/
        a[17]
      )) + "") && ht(n, e), s && s.p && (!i || l[2] & /*$$scope*/
      33554432) && Ae(
        s,
        r,
        a,
        /*$$scope*/
        a[87],
        i ? Ee(
          r,
          /*$$scope*/
          a[87],
          l,
          Ph
        ) : ye(
          /*$$scope*/
          a[87]
        ),
        fl
      );
    },
    i(a) {
      i || (y(s, a), i = !0);
    },
    o(a) {
      O(s, a), i = !1;
    },
    d(a) {
      a && B(n), s && s.d(a);
    }
  };
}
function pl(t) {
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
    Ve(
      /*$$restProps*/
      t[46],
      "outline$"
    )
  ];
  let r = {
    $$slots: { default: [qh] },
    $$scope: { ctx: t }
  };
  for (let s = 0; s < i.length; s += 1)
    r = X(r, i[s]);
  return e = new No({ props: r }), t[59](e), {
    c() {
      ie(e.$$.fragment);
    },
    m(s, a) {
      ee(e, s, a), n = !0;
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
        32768 && Fe(Ve(
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
      n || (y(e.$$.fragment, s), n = !0);
    },
    o(s) {
      O(e.$$.fragment, s), n = !1;
    },
    d(s) {
      t[59](null), te(e, s);
    }
  };
}
function gl(t) {
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
    Ve(
      /*$$restProps*/
      t[46],
      "label$"
    )
  ];
  let r = {
    $$slots: { default: [jh] },
    $$scope: { ctx: t }
  };
  for (let s = 0; s < i.length; s += 1)
    r = X(r, i[s]);
  return e = new zi({ props: r }), t[58](e), {
    c() {
      ie(e.$$.fragment);
    },
    m(s, a) {
      ee(e, s, a), n = !0;
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
        32768 && Fe(Ve(
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
      n || (y(e.$$.fragment, s), n = !0);
    },
    o(s) {
      O(e.$$.fragment, s), n = !1;
    },
    d(s) {
      t[58](null), te(e, s);
    }
  };
}
function jh(t) {
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
  ), s = Ie(
    r,
    t,
    /*$$scope*/
    t[87],
    cl
  );
  return {
    c() {
      n = ct(e), s && s.c();
    },
    m(a, l) {
      V(a, n, l), s && s.m(a, l), i = !0;
    },
    p(a, l) {
      (!i || l[0] & /*label*/
      131072) && e !== (e = /*label*/
      (a[17] == null ? "" : (
        /*label*/
        a[17]
      )) + "") && ht(n, e), s && s.p && (!i || l[2] & /*$$scope*/
      33554432) && Ae(
        s,
        r,
        a,
        /*$$scope*/
        a[87],
        i ? Ee(
          r,
          /*$$scope*/
          a[87],
          l,
          Hh
        ) : ye(
          /*$$scope*/
          a[87]
        ),
        cl
      );
    },
    i(a) {
      i || (y(s, a), i = !0);
    },
    o(a) {
      O(s, a), i = !1;
    },
    d(a) {
      a && B(n), s && s.d(a);
    }
  };
}
function qh(t) {
  let e, n, i = !/*noLabel*/
  t[16] && /*label*/
  (t[17] != null || /*$$slots*/
  t[47].label) && gl(t);
  return {
    c() {
      i && i.c(), e = Ze();
    },
    m(r, s) {
      i && i.m(r, s), V(r, e, s), n = !0;
    },
    p(r, s) {
      !/*noLabel*/
      r[16] && /*label*/
      (r[17] != null || /*$$slots*/
      r[47].label) ? i ? (i.p(r, s), s[0] & /*noLabel, label*/
      196608 | s[1] & /*$$slots*/
      65536 && y(i, 1)) : (i = gl(r), i.c(), y(i, 1), i.m(e.parentNode, e)) : i && (Ue(), O(i, 1, 1, () => {
        i = null;
      }), Be());
    },
    i(r) {
      n || (y(i), n = !0);
    },
    o(r) {
      O(i), n = !1;
    },
    d(r) {
      r && B(e), i && i.d(r);
    }
  };
}
function Wh(t) {
  let e;
  const n = (
    /*#slots*/
    t[56].leadingIcon
  ), i = Ie(
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
      33554432) && Ae(
        i,
        n,
        r,
        /*$$scope*/
        r[87],
        e ? Ee(
          n,
          /*$$scope*/
          r[87],
          s,
          Nh
        ) : ye(
          /*$$scope*/
          r[87]
        ),
        ul
      );
    },
    i(r) {
      e || (y(i, r), e = !0);
    },
    o(r) {
      O(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function zh(t) {
  let e, n, i, r, s, a, l, o, u, c;
  const f = (
    /*#slots*/
    t[56].prefix
  ), d = Ie(
    f,
    t,
    /*$$scope*/
    t[87],
    al
  );
  let h = (
    /*prefix*/
    t[20] != null && _l(t)
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
    Ve(
      /*$$restProps*/
      t[46],
      "input$"
    )
  ];
  function g(_) {
    t[69](_);
  }
  function m(_) {
    t[70](_);
  }
  function E(_) {
    t[71](_);
  }
  function v(_) {
    t[72](_);
  }
  let S = {};
  for (let _ = 0; _ < p.length; _ += 1)
    S = X(S, p[_]);
  /*value*/
  t[0] !== void 0 && (S.value = /*value*/
  t[0]), /*files*/
  t[3] !== void 0 && (S.files = /*files*/
  t[3]), /*dirty*/
  t[4] !== void 0 && (S.dirty = /*dirty*/
  t[4]), /*invalid*/
  t[1] !== void 0 && (S.invalid = /*invalid*/
  t[1]), i = new Eh({ props: S }), t[68](i), le.push(() => vt(i, "value", g)), le.push(() => vt(i, "files", m)), le.push(() => vt(i, "dirty", E)), le.push(() => vt(i, "invalid", v)), i.$on(
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
    t[21] != null && bl(t)
  );
  const D = (
    /*#slots*/
    t[56].suffix
  ), M = Ie(
    D,
    t,
    /*$$scope*/
    t[87],
    ll
  );
  return {
    c() {
      d && d.c(), e = ae(), h && h.c(), n = ae(), ie(i.$$.fragment), o = ae(), C && C.c(), u = ae(), M && M.c();
    },
    m(_, L) {
      d && d.m(_, L), V(_, e, L), h && h.m(_, L), V(_, n, L), ee(i, _, L), V(_, o, L), C && C.m(_, L), V(_, u, L), M && M.m(_, L), c = !0;
    },
    p(_, L) {
      d && d.p && (!c || L[2] & /*$$scope*/
      33554432) && Ae(
        d,
        f,
        _,
        /*$$scope*/
        _[87],
        c ? Ee(
          f,
          /*$$scope*/
          _[87],
          L,
          kh
        ) : ye(
          /*$$scope*/
          _[87]
        ),
        al
      ), /*prefix*/
      _[20] != null ? h ? (h.p(_, L), L[0] & /*prefix*/
      1048576 && y(h, 1)) : (h = _l(_), h.c(), y(h, 1), h.m(n.parentNode, n)) : h && (Ue(), O(h, 1, 1, () => {
        h = null;
      }), Be());
      const k = L[0] & /*type, disabled, required, updateInvalid, helperId, noLabel, label*/
      135213056 | L[1] & /*$$restProps*/
      32768 ? me(p, [
        L[0] & /*type*/
        262144 && { type: (
          /*type*/
          _[18]
        ) },
        L[0] & /*disabled*/
        4096 && { disabled: (
          /*disabled*/
          _[12]
        ) },
        L[0] & /*required*/
        8192 && { required: (
          /*required*/
          _[13]
        ) },
        L[0] & /*updateInvalid*/
        524288 && { updateInvalid: (
          /*updateInvalid*/
          _[19]
        ) },
        L[0] & /*helperId*/
        134217728 && { "aria-controls": (
          /*helperId*/
          _[27]
        ) },
        L[0] & /*helperId*/
        134217728 && { "aria-describedby": (
          /*helperId*/
          _[27]
        ) },
        L[0] & /*noLabel, label*/
        196608 && Fe(
          /*noLabel*/
          _[16] && /*label*/
          _[17] != null ? { placeholder: (
            /*label*/
            _[17]
          ) } : {}
        ),
        L[1] & /*$$restProps*/
        32768 && Fe(Ve(
          /*$$restProps*/
          _[46],
          "input$"
        ))
      ]) : {};
      !r && L[0] & /*value*/
      1 && (r = !0, k.value = /*value*/
      _[0], bt(() => r = !1)), !s && L[0] & /*files*/
      8 && (s = !0, k.files = /*files*/
      _[3], bt(() => s = !1)), !a && L[0] & /*dirty*/
      16 && (a = !0, k.dirty = /*dirty*/
      _[4], bt(() => a = !1)), !l && L[0] & /*invalid*/
      2 && (l = !0, k.invalid = /*invalid*/
      _[1], bt(() => l = !1)), i.$set(k), /*suffix*/
      _[21] != null ? C ? (C.p(_, L), L[0] & /*suffix*/
      2097152 && y(C, 1)) : (C = bl(_), C.c(), y(C, 1), C.m(u.parentNode, u)) : C && (Ue(), O(C, 1, 1, () => {
        C = null;
      }), Be()), M && M.p && (!c || L[2] & /*$$scope*/
      33554432) && Ae(
        M,
        D,
        _,
        /*$$scope*/
        _[87],
        c ? Ee(
          D,
          /*$$scope*/
          _[87],
          L,
          Mh
        ) : ye(
          /*$$scope*/
          _[87]
        ),
        ll
      );
    },
    i(_) {
      c || (y(d, _), y(h), y(i.$$.fragment, _), y(C), y(M, _), c = !0);
    },
    o(_) {
      O(d, _), O(h), O(i.$$.fragment, _), O(C), O(M, _), c = !1;
    },
    d(_) {
      _ && (B(e), B(n), B(o), B(u)), d && d.d(_), h && h.d(_), t[68](null), te(i, _), C && C.d(_), M && M.d(_);
    }
  };
}
function Kh(t) {
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
    Ve(
      /*$$restProps*/
      t[46],
      "input$"
    )
  ];
  function c(m) {
    t[61](m);
  }
  function f(m) {
    t[62](m);
  }
  function d(m) {
    t[63](m);
  }
  let h = {};
  for (let m = 0; m < u.length; m += 1)
    h = X(h, u[m]);
  /*value*/
  t[0] !== void 0 && (h.value = /*value*/
  t[0]), /*dirty*/
  t[4] !== void 0 && (h.dirty = /*dirty*/
  t[4]), /*invalid*/
  t[1] !== void 0 && (h.invalid = /*invalid*/
  t[1]), n = new Ch({ props: h }), t[60](n), le.push(() => vt(n, "value", c)), le.push(() => vt(n, "dirty", f)), le.push(() => vt(n, "invalid", d)), n.$on(
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
  ), g = Ie(
    p,
    t,
    /*$$scope*/
    t[87],
    ol
  );
  return {
    c() {
      e = ne("span"), ie(n.$$.fragment), a = ae(), g && g.c(), P(e, "class", l = se({
        "mdc-text-field__resizer": !("input$resizable" in /*$$restProps*/
        t[46]) || /*$$restProps*/
        t[46].input$resizable
      }));
    },
    m(m, E) {
      V(m, e, E), ee(n, e, null), J(e, a), g && g.m(e, null), o = !0;
    },
    p(m, E) {
      const v = E[0] & /*disabled, required, updateInvalid, helperId*/
      134754304 | E[1] & /*$$restProps*/
      32768 ? me(u, [
        E[0] & /*disabled*/
        4096 && { disabled: (
          /*disabled*/
          m[12]
        ) },
        E[0] & /*required*/
        8192 && { required: (
          /*required*/
          m[13]
        ) },
        E[0] & /*updateInvalid*/
        524288 && { updateInvalid: (
          /*updateInvalid*/
          m[19]
        ) },
        E[0] & /*helperId*/
        134217728 && { "aria-controls": (
          /*helperId*/
          m[27]
        ) },
        E[0] & /*helperId*/
        134217728 && { "aria-describedby": (
          /*helperId*/
          m[27]
        ) },
        E[1] & /*$$restProps*/
        32768 && Fe(Ve(
          /*$$restProps*/
          m[46],
          "input$"
        ))
      ]) : {};
      !i && E[0] & /*value*/
      1 && (i = !0, v.value = /*value*/
      m[0], bt(() => i = !1)), !r && E[0] & /*dirty*/
      16 && (r = !0, v.dirty = /*dirty*/
      m[4], bt(() => r = !1)), !s && E[0] & /*invalid*/
      2 && (s = !0, v.invalid = /*invalid*/
      m[1], bt(() => s = !1)), n.$set(v), g && g.p && (!o || E[2] & /*$$scope*/
      33554432) && Ae(
        g,
        p,
        m,
        /*$$scope*/
        m[87],
        o ? Ee(
          p,
          /*$$scope*/
          m[87],
          E,
          Fh
        ) : ye(
          /*$$scope*/
          m[87]
        ),
        ol
      ), (!o || E[1] & /*$$restProps*/
      32768 && l !== (l = se({
        "mdc-text-field__resizer": !("input$resizable" in /*$$restProps*/
        m[46]) || /*$$restProps*/
        m[46].input$resizable
      }))) && P(e, "class", l);
    },
    i(m) {
      o || (y(n.$$.fragment, m), y(g, m), o = !0);
    },
    o(m) {
      O(n.$$.fragment, m), O(g, m), o = !1;
    },
    d(m) {
      m && B(e), t[60](null), te(n), g && g.d(m);
    }
  };
}
function _l(t) {
  let e, n;
  return e = new gh({
    props: {
      $$slots: { default: [Xh] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      ie(e.$$.fragment);
    },
    m(i, r) {
      ee(e, i, r), n = !0;
    },
    p(i, r) {
      const s = {};
      r[0] & /*prefix*/
      1048576 | r[2] & /*$$scope*/
      33554432 && (s.$$scope = { dirty: r, ctx: i }), e.$set(s);
    },
    i(i) {
      n || (y(e.$$.fragment, i), n = !0);
    },
    o(i) {
      O(e.$$.fragment, i), n = !1;
    },
    d(i) {
      te(e, i);
    }
  };
}
function Xh(t) {
  let e;
  return {
    c() {
      e = ct(
        /*prefix*/
        t[20]
      );
    },
    m(n, i) {
      V(n, e, i);
    },
    p(n, i) {
      i[0] & /*prefix*/
      1048576 && ht(
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
function bl(t) {
  let e, n;
  return e = new _h({
    props: {
      $$slots: { default: [Yh] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      ie(e.$$.fragment);
    },
    m(i, r) {
      ee(e, i, r), n = !0;
    },
    p(i, r) {
      const s = {};
      r[0] & /*suffix*/
      2097152 | r[2] & /*$$scope*/
      33554432 && (s.$$scope = { dirty: r, ctx: i }), e.$set(s);
    },
    i(i) {
      n || (y(e.$$.fragment, i), n = !0);
    },
    o(i) {
      O(e.$$.fragment, i), n = !1;
    },
    d(i) {
      te(e, i);
    }
  };
}
function Yh(t) {
  let e;
  return {
    c() {
      e = ct(
        /*suffix*/
        t[21]
      );
    },
    m(n, i) {
      V(n, e, i);
    },
    p(n, i) {
      i[0] & /*suffix*/
      2097152 && ht(
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
function Zh(t) {
  let e;
  const n = (
    /*#slots*/
    t[56].trailingIcon
  ), i = Ie(
    n,
    t,
    /*$$scope*/
    t[87],
    sl
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
      33554432) && Ae(
        i,
        n,
        r,
        /*$$scope*/
        r[87],
        e ? Ee(
          n,
          /*$$scope*/
          r[87],
          s,
          Dh
        ) : ye(
          /*$$scope*/
          r[87]
        ),
        sl
      );
    },
    i(r) {
      e || (y(i, r), e = !0);
    },
    o(r) {
      O(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function vl(t) {
  let e, n;
  const i = [Ve(
    /*$$restProps*/
    t[46],
    "ripple$"
  )];
  let r = {};
  for (let s = 0; s < i.length; s += 1)
    r = X(r, i[s]);
  return e = new Fo({ props: r }), t[77](e), {
    c() {
      ie(e.$$.fragment);
    },
    m(s, a) {
      ee(e, s, a), n = !0;
    },
    p(s, a) {
      const l = a[1] & /*$$restProps*/
      32768 ? me(i, [Fe(Ve(
        /*$$restProps*/
        s[46],
        "ripple$"
      ))]) : {};
      e.$set(l);
    },
    i(s) {
      n || (y(e.$$.fragment, s), n = !0);
    },
    o(s) {
      O(e.$$.fragment, s), n = !1;
    },
    d(s) {
      t[77](null), te(e, s);
    }
  };
}
function Il(t) {
  let e, n;
  const i = [Ve(
    /*$$restProps*/
    t[46],
    "helperLine$"
  )];
  let r = {
    $$slots: { default: [Qh] },
    $$scope: { ctx: t }
  };
  for (let s = 0; s < i.length; s += 1)
    r = X(r, i[s]);
  return e = new ph({ props: r }), e.$on(
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
      ie(e.$$.fragment);
    },
    m(s, a) {
      ee(e, s, a), n = !0;
    },
    p(s, a) {
      const l = a[1] & /*$$restProps*/
      32768 ? me(i, [Fe(Ve(
        /*$$restProps*/
        s[46],
        "helperLine$"
      ))]) : {};
      a[2] & /*$$scope*/
      33554432 && (l.$$scope = { dirty: a, ctx: s }), e.$set(l);
    },
    i(s) {
      n || (y(e.$$.fragment, s), n = !0);
    },
    o(s) {
      O(e.$$.fragment, s), n = !1;
    },
    d(s) {
      te(e, s);
    }
  };
}
function Qh(t) {
  let e;
  const n = (
    /*#slots*/
    t[56].helper
  ), i = Ie(
    n,
    t,
    /*$$scope*/
    t[87],
    el
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
      33554432) && Ae(
        i,
        n,
        r,
        /*$$scope*/
        r[87],
        e ? Ee(
          n,
          /*$$scope*/
          r[87],
          s,
          Sh
        ) : ye(
          /*$$scope*/
          r[87]
        ),
        el
      );
    },
    i(r) {
      e || (y(i, r), e = !0);
    },
    o(r) {
      O(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function Jh(t) {
  let e, n, i, r, s;
  const a = [Uh, wh], l = [];
  function o(c, f) {
    return (
      /*valued*/
      c[36] ? 0 : 1
    );
  }
  e = o(t), n = l[e] = a[e](t);
  let u = (
    /*$$slots*/
    t[47].helper && Il(t)
  );
  return {
    c() {
      n.c(), i = ae(), u && u.c(), r = Ze();
    },
    m(c, f) {
      l[e].m(c, f), V(c, i, f), u && u.m(c, f), V(c, r, f), s = !0;
    },
    p(c, f) {
      n.p(c, f), /*$$slots*/
      c[47].helper ? u ? (u.p(c, f), f[1] & /*$$slots*/
      65536 && y(u, 1)) : (u = Il(c), u.c(), y(u, 1), u.m(r.parentNode, r)) : u && (Ue(), O(u, 1, 1, () => {
        u = null;
      }), Be());
    },
    i(c) {
      s || (y(n), y(u), s = !0);
    },
    o(c) {
      O(n), O(u), s = !1;
    },
    d(c) {
      c && (B(i), B(r)), l[e].d(c), u && u.d(c);
    }
  };
}
const El = ([t, e]) => `${t}: ${e};`, Al = ([t, e]) => `${t}: ${e};`;
function xh(t, e, n) {
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
  let s = ge(e, r), { $$slots: a = {}, $$scope: l } = e;
  const o = es(a), { applyPassive: u } = Mo, c = rt(Je());
  let f = () => {
  };
  function d(w) {
    return w === f;
  }
  let { use: h = [] } = e, { class: p = "" } = e, { style: g = "" } = e, { ripple: m = !0 } = e, { disabled: E = !1 } = e, { required: v = !1 } = e, { textarea: S = !1 } = e, { variant: C = S ? "outlined" : "standard" } = e, { noLabel: D = !1 } = e, { label: M = void 0 } = e, { type: _ = "text" } = e, { value: L = s.input$emptyValueUndefined ? void 0 : f } = e, { files: k = f } = e;
  const A = !d(L) || !d(k);
  d(L) && (L = void 0), d(k) && (k = null);
  let { invalid: b = f } = e, { updateInvalid: I = d(b) } = e;
  d(b) && (b = !1);
  let { dirty: T = !1 } = e, { prefix: H = void 0 } = e, { suffix: q = void 0 } = e, { validateOnValueChange: j = I } = e, { useNativeValidation: K = I } = e, { withLeadingIcon: N = f } = e, { withTrailingIcon: R = f } = e, { input: G = void 0 } = e, { floatingLabel: oe = void 0 } = e, { lineRipple: Oe = void 0 } = e, { notchedOutline: ve = void 0 } = e, Xe, z, x = {}, be = {}, Se, He = !1, re = ze("SMUI:addLayoutListener"), W, Ke, qe = new Promise((w) => Ke = w), gt, Y, Le, We, Pe = L;
  re && (W = re(Z)), ft(() => {
    if (n(54, z = new eh(
      {
        // getRootAdapterMethods_
        addClass: dt,
        removeClass: et,
        hasClass: mt,
        registerTextFieldInteractionHandler: (w, It) => Te().addEventListener(w, It),
        deregisterTextFieldInteractionHandler: (w, It) => Te().removeEventListener(w, It),
        registerValidationAttributeChangeHandler: (w) => {
          const It = (ni) => ni.map((ii) => ii.attributeName).filter((ii) => ii), Ai = new MutationObserver((ni) => {
            K && w(It(ni));
          }), pr = { attributes: !0 };
          return G && Ai.observe(G.getElement(), pr), Ai;
        },
        deregisterValidationAttributeChangeHandler: (w) => {
          w.disconnect();
        },
        // getInputAdapterMethods_
        getNativeInput: () => {
          var w;
          return (w = G == null ? void 0 : G.getElement()) !== null && w !== void 0 ? w : null;
        },
        setInputAttr: (w, It) => {
          G == null || G.addAttr(w, It);
        },
        removeInputAttr: (w) => {
          G == null || G.removeAttr(w);
        },
        isFocused: () => document.activeElement === (G == null ? void 0 : G.getElement()),
        registerInputInteractionHandler: (w, It) => {
          G == null || G.getElement().addEventListener(w, It, u());
        },
        deregisterInputInteractionHandler: (w, It) => {
          G == null || G.getElement().removeEventListener(w, It, u());
        },
        // getLabelAdapterMethods_
        floatLabel: (w) => oe && oe.float(w),
        getLabelWidth: () => oe ? oe.getWidth() : 0,
        hasLabel: () => !!oe,
        shakeLabel: (w) => oe && oe.shake(w),
        setLabelRequired: (w) => oe && oe.setRequired(w),
        // getLineRippleAdapterMethods_
        activateLineRipple: () => Oe && Oe.activate(),
        deactivateLineRipple: () => Oe && Oe.deactivate(),
        setLineRippleTransformOrigin: (w) => Oe && Oe.setRippleCenter(w),
        // getOutlineAdapterMethods_
        closeOutline: () => ve && ve.closeNotch(),
        hasOutline: () => !!ve,
        notchOutline: (w) => ve && ve.notch(w)
      },
      {
        get helperText() {
          return Le;
        },
        get characterCounter() {
          return We;
        },
        get leadingIcon() {
          return gt;
        },
        get trailingIcon() {
          return Y;
        }
      }
    )), A) {
      if (G == null)
        throw new Error("SMUI Textfield must be initialized with either a non-undefined initial value or an Input component.");
      z.init();
    } else
      ns().then(() => {
        if (G == null)
          throw new Error("SMUI Textfield must be initialized with either a non-undefined initial value or an Input component.");
        z.init();
      });
    return Ke(), () => {
      z.destroy();
    };
  }), Qt(() => {
    W && W();
  });
  function Ot(w) {
    n(29, gt = w.detail);
  }
  function F(w) {
    n(30, Y = w.detail);
  }
  function $(w) {
    n(32, We = w.detail);
  }
  function Q(w) {
    n(27, Se = w.detail);
  }
  function je(w) {
    n(31, Le = w.detail);
  }
  function mt(w) {
    var It;
    return w in x ? (It = x[w]) !== null && It !== void 0 ? It : null : Te().classList.contains(w);
  }
  function dt(w) {
    x[w] || n(25, x[w] = !0, x);
  }
  function et(w) {
    (!(w in x) || x[w]) && n(25, x[w] = !1, x);
  }
  function ke(w, It) {
    be[w] != It && (It === "" || It == null ? (delete be[w], n(26, be)) : n(26, be[w] = It, be));
  }
  function de() {
    G == null || G.focus();
  }
  function qt() {
    G == null || G.blur();
  }
  function Z() {
    if (z) {
      const w = z.shouldFloat;
      z.notchOutline(w);
    }
  }
  function Te() {
    return Xe;
  }
  function Re(w) {
    le[w ? "unshift" : "push"](() => {
      oe = w, n(5, oe);
    });
  }
  function lt(w) {
    le[w ? "unshift" : "push"](() => {
      oe = w, n(5, oe);
    });
  }
  function nn(w) {
    le[w ? "unshift" : "push"](() => {
      ve = w, n(7, ve);
    });
  }
  function ti(w) {
    le[w ? "unshift" : "push"](() => {
      G = w, n(2, G);
    });
  }
  function Xi(w) {
    L = w, n(0, L);
  }
  function Yi(w) {
    T = w, n(4, T);
  }
  function Zi(w) {
    b = w, n(1, b), n(54, z), n(19, I);
  }
  const Qi = () => n(28, He = !1), Ji = () => n(28, He = !0), kn = (w) => _e(Xe, "blur", w), xi = (w) => _e(Xe, "focus", w);
  function Ii(w) {
    le[w ? "unshift" : "push"](() => {
      G = w, n(2, G);
    });
  }
  function $i(w) {
    L = w, n(0, L);
  }
  function Ei(w) {
    k = w, n(3, k);
  }
  function Fn(w) {
    T = w, n(4, T);
  }
  function er(w) {
    b = w, n(1, b), n(54, z), n(19, I);
  }
  const tr = () => n(28, He = !1), nr = () => n(28, He = !0), ir = (w) => _e(Xe, "blur", w), rr = (w) => _e(Xe, "focus", w);
  function sr(w) {
    le[w ? "unshift" : "push"](() => {
      Oe = w, n(6, Oe);
    });
  }
  function lr(w) {
    le[w ? "unshift" : "push"](() => {
      Xe = w, n(24, Xe);
    });
  }
  const ar = () => n(29, gt = void 0), or = () => n(30, Y = void 0), ur = () => n(32, We = void 0);
  function cr(w) {
    le[w ? "unshift" : "push"](() => {
      Xe = w, n(24, Xe);
    });
  }
  const fr = () => n(29, gt = void 0), dr = () => n(30, Y = void 0), hr = () => {
    n(27, Se = void 0), n(31, Le = void 0);
  }, mr = () => n(32, We = void 0);
  return t.$$set = (w) => {
    e = X(X({}, e), nt(w)), n(46, s = ge(e, r)), "use" in w && n(8, h = w.use), "class" in w && n(9, p = w.class), "style" in w && n(10, g = w.style), "ripple" in w && n(11, m = w.ripple), "disabled" in w && n(12, E = w.disabled), "required" in w && n(13, v = w.required), "textarea" in w && n(14, S = w.textarea), "variant" in w && n(15, C = w.variant), "noLabel" in w && n(16, D = w.noLabel), "label" in w && n(17, M = w.label), "type" in w && n(18, _ = w.type), "value" in w && n(0, L = w.value), "files" in w && n(3, k = w.files), "invalid" in w && n(1, b = w.invalid), "updateInvalid" in w && n(19, I = w.updateInvalid), "dirty" in w && n(4, T = w.dirty), "prefix" in w && n(20, H = w.prefix), "suffix" in w && n(21, q = w.suffix), "validateOnValueChange" in w && n(48, j = w.validateOnValueChange), "useNativeValidation" in w && n(49, K = w.useNativeValidation), "withLeadingIcon" in w && n(22, N = w.withLeadingIcon), "withTrailingIcon" in w && n(23, R = w.withTrailingIcon), "input" in w && n(2, G = w.input), "floatingLabel" in w && n(5, oe = w.floatingLabel), "lineRipple" in w && n(6, Oe = w.lineRipple), "notchedOutline" in w && n(7, ve = w.notchedOutline), "$$scope" in w && n(87, l = w.$$scope);
  }, t.$$.update = () => {
    if (t.$$.dirty[0] & /*input*/
    4 && n(33, i = G && G.getElement()), t.$$.dirty[0] & /*invalid, updateInvalid*/
    524290 | t.$$.dirty[1] & /*instance*/
    8388608 && z && z.isValid() !== !b && (I ? n(1, b = !z.isValid()) : z.setValid(!b)), t.$$.dirty[1] & /*instance, validateOnValueChange*/
    8519680 && z && z.getValidateOnValueChange() !== j && z.setValidateOnValueChange(d(j) ? !1 : j), t.$$.dirty[1] & /*instance, useNativeValidation*/
    8650752 && z && z.setUseNativeValidation(d(K) ? !0 : K), t.$$.dirty[0] & /*disabled*/
    4096 | t.$$.dirty[1] & /*instance*/
    8388608 && z && z.setDisabled(E), t.$$.dirty[0] & /*value*/
    1 | t.$$.dirty[1] & /*instance, previousValue*/
    25165824 && z && A && Pe !== L) {
      n(55, Pe = L);
      const w = `${L}`;
      z.getValue() !== w && z.setValue(w);
    }
  }, [
    L,
    b,
    G,
    k,
    T,
    oe,
    Oe,
    ve,
    h,
    p,
    g,
    m,
    E,
    v,
    S,
    C,
    D,
    M,
    _,
    I,
    H,
    q,
    N,
    R,
    Xe,
    x,
    be,
    Se,
    He,
    gt,
    Y,
    Le,
    We,
    i,
    c,
    d,
    A,
    qe,
    Ot,
    F,
    $,
    Q,
    je,
    dt,
    et,
    ke,
    s,
    o,
    j,
    K,
    de,
    qt,
    Z,
    Te,
    z,
    Pe,
    a,
    Re,
    lt,
    nn,
    ti,
    Xi,
    Yi,
    Zi,
    Qi,
    Ji,
    kn,
    xi,
    Ii,
    $i,
    Ei,
    Fn,
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
    hr,
    mr,
    l
  ];
}
class Ho extends Me {
  constructor(e) {
    super(), De(
      this,
      e,
      xh,
      Jh,
      Ce,
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
function $h(t) {
  let e;
  return {
    c() {
      e = ct(
        /*content*/
        t[7]
      );
    },
    m(n, i) {
      V(n, e, i);
    },
    p(n, i) {
      i & /*content*/
      128 && ht(
        e,
        /*content*/
        n[7]
      );
    },
    i: Qe,
    o: Qe,
    d(n) {
      n && B(e);
    }
  };
}
function em(t) {
  let e;
  const n = (
    /*#slots*/
    t[15].default
  ), i = Ie(
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
      16384) && Ae(
        i,
        n,
        r,
        /*$$scope*/
        r[14],
        e ? Ee(
          n,
          /*$$scope*/
          r[14],
          s,
          null
        ) : ye(
          /*$$scope*/
          r[14]
        ),
        null
      );
    },
    i(r) {
      e || (y(i, r), e = !0);
    },
    o(r) {
      O(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function tm(t) {
  let e, n, i, r, s, a, l, o, u, c;
  const f = [em, $h], d = [];
  function h(m, E) {
    return (
      /*content*/
      m[7] == null ? 0 : 1
    );
  }
  n = h(t), i = d[n] = f[n](t);
  let p = [
    {
      class: r = se({
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
  for (let m = 0; m < p.length; m += 1)
    g = X(g, p[m]);
  return {
    c() {
      e = ne("i"), i.c(), ce(e, g);
    },
    m(m, E) {
      V(m, e, E), d[n].m(e, null), t[16](e), o = !0, u || (c = [
        he(l = xe.call(
          null,
          e,
          /*use*/
          t[0]
        )),
        he(
          /*forwardEvents*/
          t[9].call(null, e)
        )
      ], u = !0);
    },
    p(m, [E]) {
      let v = n;
      n = h(m), n === v ? d[n].p(m, E) : (Ue(), O(d[v], 1, 1, () => {
        d[v] = null;
      }), Be(), i = d[n], i ? i.p(m, E) : (i = d[n] = f[n](m), i.c()), y(i, 1), i.m(e, null)), ce(e, g = me(p, [
        (!o || E & /*className*/
        2 && r !== (r = se({
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
        (!o || E & /*tabindex*/
        8 && s !== (s = /*tabindex*/
        m[3] === -1 ? "true" : "false")) && { "aria-hidden": s },
        (!o || E & /*role, disabled*/
        20 && a !== (a = /*role*/
        m[2] === "button" ? (
          /*disabled*/
          m[4] ? "true" : "false"
        ) : void 0)) && { "aria-disabled": a },
        E & /*roleProps*/
        256 && /*roleProps*/
        m[8],
        E & /*internalAttrs*/
        64 && /*internalAttrs*/
        m[6],
        E & /*$$restProps*/
        4096 && /*$$restProps*/
        m[12]
      ])), l && pe(l.update) && E & /*use*/
      1 && l.update.call(
        null,
        /*use*/
        m[0]
      );
    },
    i(m) {
      o || (y(i), o = !0);
    },
    o(m) {
      O(i), o = !1;
    },
    d(m) {
      m && B(e), d[n].d(), t[16](null), u = !1, Ye(c);
    }
  };
}
function nm(t, e, n) {
  let i;
  const r = ["use", "class", "role", "tabindex", "disabled", "getElement"];
  let s = ge(e, r), a, { $$slots: l = {}, $$scope: o } = e;
  const u = rt(Je());
  let { use: c = [] } = e, { class: f = "" } = e, { role: d = void 0 } = e, { tabindex: h = d === "button" ? 0 : -1 } = e, { disabled: p = !1 } = e, g, m, E = {};
  const v = ze("SMUI:textfield:icon:leading");
  st(t, v, (A) => n(18, a = A));
  const S = a;
  let C;
  ft(() => (m = new nh({
    getAttr: D,
    setAttr: M,
    removeAttr: _,
    setContent: (A) => {
      n(7, C = A);
    },
    registerInteractionHandler: (A, b) => L().addEventListener(A, b),
    deregisterInteractionHandler: (A, b) => L().removeEventListener(A, b),
    notifyIconAction: () => _e(L(), "SMUITextField:icon", void 0, void 0, !0)
  }), _e(
    L(),
    S ? "SMUITextfieldLeadingIcon:mount" : "SMUITextfieldTrailingIcon:mount",
    m
  ), m.init(), () => {
    _e(
      L(),
      S ? "SMUITextfieldLeadingIcon:unmount" : "SMUITextfieldTrailingIcon:unmount",
      m
    ), m.destroy();
  }));
  function D(A) {
    var b;
    return A in E ? (b = E[A]) !== null && b !== void 0 ? b : null : L().getAttribute(A);
  }
  function M(A, b) {
    E[A] !== b && n(6, E[A] = b, E);
  }
  function _(A) {
    (!(A in E) || E[A] != null) && n(6, E[A] = void 0, E);
  }
  function L() {
    return g;
  }
  function k(A) {
    le[A ? "unshift" : "push"](() => {
      g = A, n(5, g);
    });
  }
  return t.$$set = (A) => {
    e = X(X({}, e), nt(A)), n(12, s = ge(e, r)), "use" in A && n(0, c = A.use), "class" in A && n(1, f = A.class), "role" in A && n(2, d = A.role), "tabindex" in A && n(3, h = A.tabindex), "disabled" in A && n(4, p = A.disabled), "$$scope" in A && n(14, o = A.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty & /*role, tabindex*/
    12 && n(8, i = { role: d, tabindex: h });
  }, [
    c,
    f,
    d,
    h,
    p,
    g,
    E,
    C,
    i,
    u,
    v,
    S,
    s,
    L,
    o,
    l,
    k
  ];
}
class im extends Me {
  constructor(e) {
    super(), De(this, e, nm, tm, Ce, {
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
function rm(t) {
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
    t[0]), e = new Ho({ props: s }), le.push(() => vt(e, "value", r)), {
      c() {
        ie(e.$$.fragment);
      },
      m(a, l) {
        ee(e, a, l), i = !0;
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
        a[0], bt(() => n = !1)), e.$set(o);
      },
      i(a) {
        i || (y(e.$$.fragment, a), i = !0);
      },
      o(a) {
        O(e.$$.fragment, a), i = !1;
      },
      d(a) {
        te(e, a);
      }
    }
  );
}
function sm(t) {
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
    $$slots: { leadingIcon: [am] },
    $$scope: { ctx: t }
  };
  return (
    /*value*/
    t[0] !== void 0 && (s.value = /*value*/
    t[0]), e = new Ho({ props: s }), le.push(() => vt(e, "value", r)), {
      c() {
        ie(e.$$.fragment);
      },
      m(a, l) {
        ee(e, a, l), i = !0;
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
        a[0], bt(() => n = !1)), e.$set(o);
      },
      i(a) {
        i || (y(e.$$.fragment, a), i = !0);
      },
      o(a) {
        O(e.$$.fragment, a), i = !1;
      },
      d(a) {
        te(e, a);
      }
    }
  );
}
function lm(t) {
  let e;
  return {
    c() {
      e = ct(
        /*icon*/
        t[3]
      );
    },
    m(n, i) {
      V(n, e, i);
    },
    p(n, i) {
      i & /*icon*/
      8 && ht(
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
function am(t) {
  let e, n;
  return e = new im({
    props: {
      class: "material-icons",
      slot: "leadingIcon",
      $$slots: { default: [lm] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      ie(e.$$.fragment);
    },
    m(i, r) {
      ee(e, i, r), n = !0;
    },
    p(i, r) {
      const s = {};
      r & /*$$scope, icon*/
      136 && (s.$$scope = { dirty: r, ctx: i }), e.$set(s);
    },
    i(i) {
      n || (y(e.$$.fragment, i), n = !0);
    },
    o(i) {
      O(e.$$.fragment, i), n = !1;
    },
    d(i) {
      te(e, i);
    }
  };
}
function om(t) {
  let e, n, i, r;
  const s = [sm, rm], a = [];
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
      a[e].m(o, u), V(o, i, u), r = !0;
    },
    p(o, [u]) {
      let c = e;
      e = l(o), e === c ? a[e].p(o, u) : (Ue(), O(a[c], 1, 1, () => {
        a[c] = null;
      }), Be(), n = a[e], n ? n.p(o, u) : (n = a[e] = s[e](o), n.c()), y(n, 1), n.m(i.parentNode, i));
    },
    i(o) {
      r || (y(n), r = !0);
    },
    o(o) {
      O(n), r = !1;
    },
    d(o) {
      o && B(i), a[e].d(o);
    }
  };
}
function um(t, e, n) {
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
class cm extends Me {
  constructor(e) {
    super(), De(this, e, um, om, Ce, {
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
var fm = {
  ANCHOR: "mdc-menu-surface--anchor",
  ANIMATING_CLOSED: "mdc-menu-surface--animating-closed",
  ANIMATING_OPEN: "mdc-menu-surface--animating-open",
  FIXED: "mdc-menu-surface--fixed",
  IS_OPEN_BELOW: "mdc-menu-surface--is-open-below",
  OPEN: "mdc-menu-surface--open",
  ROOT: "mdc-menu-surface"
}, dm = {
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
}, St;
(function(t) {
  t[t.BOTTOM = 1] = "BOTTOM", t[t.CENTER = 2] = "CENTER", t[t.RIGHT = 4] = "RIGHT", t[t.FLIP_RTL = 8] = "FLIP_RTL";
})(St || (St = {}));
var Ln;
(function(t) {
  t[t.TOP_LEFT = 0] = "TOP_LEFT", t[t.TOP_RIGHT = 4] = "TOP_RIGHT", t[t.BOTTOM_LEFT = 1] = "BOTTOM_LEFT", t[t.BOTTOM_RIGHT = 5] = "BOTTOM_RIGHT", t[t.TOP_START = 8] = "TOP_START", t[t.TOP_END = 12] = "TOP_END", t[t.BOTTOM_START = 9] = "BOTTOM_START", t[t.BOTTOM_END = 13] = "BOTTOM_END";
})(Ln || (Ln = {}));
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
var hn, sn, $e = {
  LIST_ITEM_ACTIVATED_CLASS: "mdc-list-item--activated",
  LIST_ITEM_CLASS: "mdc-list-item",
  LIST_ITEM_DISABLED_CLASS: "mdc-list-item--disabled",
  LIST_ITEM_SELECTED_CLASS: "mdc-list-item--selected",
  LIST_ITEM_TEXT_CLASS: "mdc-list-item__text",
  LIST_ITEM_PRIMARY_TEXT_CLASS: "mdc-list-item__primary-text",
  ROOT: "mdc-list"
};
hn = {}, hn["" + $e.LIST_ITEM_ACTIVATED_CLASS] = "mdc-list-item--activated", hn["" + $e.LIST_ITEM_CLASS] = "mdc-list-item", hn["" + $e.LIST_ITEM_DISABLED_CLASS] = "mdc-list-item--disabled", hn["" + $e.LIST_ITEM_SELECTED_CLASS] = "mdc-list-item--selected", hn["" + $e.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-list-item__primary-text", hn["" + $e.ROOT] = "mdc-list";
var wn = (sn = {}, sn["" + $e.LIST_ITEM_ACTIVATED_CLASS] = "mdc-deprecated-list-item--activated", sn["" + $e.LIST_ITEM_CLASS] = "mdc-deprecated-list-item", sn["" + $e.LIST_ITEM_DISABLED_CLASS] = "mdc-deprecated-list-item--disabled", sn["" + $e.LIST_ITEM_SELECTED_CLASS] = "mdc-deprecated-list-item--selected", sn["" + $e.LIST_ITEM_TEXT_CLASS] = "mdc-deprecated-list-item__text", sn["" + $e.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-deprecated-list-item__primary-text", sn["" + $e.ROOT] = "mdc-deprecated-list", sn), mn = {
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
    .` + $e.LIST_ITEM_CLASS + ` button:not(:disabled),
    .` + $e.LIST_ITEM_CLASS + ` a,
    .` + wn[$e.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + wn[$e.LIST_ITEM_CLASS] + ` a
  `,
  DEPRECATED_SELECTOR: ".mdc-deprecated-list",
  FOCUSABLE_CHILD_ELEMENTS: `
    .` + $e.LIST_ITEM_CLASS + ` button:not(:disabled),
    .` + $e.LIST_ITEM_CLASS + ` a,
    .` + $e.LIST_ITEM_CLASS + ` input[type="radio"]:not(:disabled),
    .` + $e.LIST_ITEM_CLASS + ` input[type="checkbox"]:not(:disabled),
    .` + wn[$e.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + wn[$e.LIST_ITEM_CLASS] + ` a,
    .` + wn[$e.LIST_ITEM_CLASS] + ` input[type="radio"]:not(:disabled),
    .` + wn[$e.LIST_ITEM_CLASS] + ` input[type="checkbox"]:not(:disabled)
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
var hm = ["input", "button", "textarea", "select"], Wt = function(t) {
  var e = t.target;
  if (e) {
    var n = ("" + e.tagName).toLowerCase();
    hm.indexOf(n) === -1 && t.preventDefault();
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
function mm() {
  var t = {
    bufferClearTimeout: 0,
    currentFirstChar: "",
    sortedIndexCursor: 0,
    typeaheadBuffer: ""
  };
  return t;
}
function pm(t, e) {
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
function Zr(t, e) {
  var n = t.nextChar, i = t.focusItemAtIndex, r = t.sortedIndexByFirstChar, s = t.focusedItemIndex, a = t.skipFocus, l = t.isItemAtIndexDisabled;
  clearTimeout(e.bufferClearTimeout), e.bufferClearTimeout = setTimeout(function() {
    wo(e);
  }, yt.TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS), e.typeaheadBuffer = e.typeaheadBuffer + n;
  var o;
  return e.typeaheadBuffer.length === 1 ? o = gm(r, s, l, e) : o = _m(r, l, e), o !== -1 && !a && i(o), o;
}
function gm(t, e, n, i) {
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
function _m(t, e, n) {
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
function Po(t) {
  return t.typeaheadBuffer.length > 0;
}
function wo(t) {
  t.typeaheadBuffer = "";
}
function yl(t, e) {
  var n = t.event, i = t.isTargetListItem, r = t.focusedItemIndex, s = t.focusItemAtIndex, a = t.sortedIndexByFirstChar, l = t.isItemAtIndexDisabled, o = Et(n) === "ArrowLeft", u = Et(n) === "ArrowUp", c = Et(n) === "ArrowRight", f = Et(n) === "ArrowDown", d = Et(n) === "Home", h = Et(n) === "End", p = Et(n) === "Enter", g = Et(n) === "Spacebar";
  if (n.altKey || n.ctrlKey || n.metaKey || o || u || c || f || d || h || p)
    return -1;
  var m = !g && n.key.length === 1;
  if (m) {
    Wt(n);
    var E = {
      focusItemAtIndex: s,
      focusedItemIndex: r,
      nextChar: n.key.toLowerCase(),
      sortedIndexByFirstChar: a,
      skipFocus: !1,
      isItemAtIndexDisabled: l
    };
    return Zr(E, e);
  }
  if (!g)
    return -1;
  i && Wt(n);
  var v = i && Po(e);
  if (v) {
    var E = {
      focusItemAtIndex: s,
      focusedItemIndex: r,
      nextChar: " ",
      sortedIndexByFirstChar: a,
      skipFocus: !1,
      isItemAtIndexDisabled: l
    };
    return Zr(E, e);
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
function bm(t) {
  return t instanceof Array;
}
var vm = ["Alt", "Control", "Meta", "Shift"];
function Cl(t) {
  var e = new Set(t ? vm.filter(function(n) {
    return t.getModifierState(n);
  }) : []);
  return function(n) {
    return n.every(function(i) {
      return e.has(i);
    }) && n.length === e.size;
  };
}
var Im = (
  /** @class */
  function(t) {
    at(e, t);
    function e(n) {
      var i = t.call(this, fe(fe({}, e.defaultAdapter), n)) || this;
      return i.wrapFocus = !1, i.isVertical = !0, i.isSingleSelectionList = !1, i.areDisabledItemsFocusable = !0, i.selectedIndex = yt.UNSET_INDEX, i.focusedItemIndex = yt.UNSET_INDEX, i.useActivatedClass = !1, i.useSelectedAttr = !1, i.ariaCurrentAttrValue = null, i.isCheckboxList = !1, i.isRadioList = !1, i.lastSelectedIndex = null, i.hasTypeahead = !1, i.typeaheadState = mm(), i.sortedIndexByFirstChar = /* @__PURE__ */ new Map(), i;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return mn;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return $e;
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
        var i = this.adapter.listItemAtIndexHasClass(n, $e.LIST_ITEM_ACTIVATED_CLASS);
        i && this.setUseActivatedClass(!0), this.isSingleSelectionList = !0, this.selectedIndex = n;
      }
    }, e.prototype.getSelectedIndexFromDOM = function() {
      for (var n = yt.UNSET_INDEX, i = this.adapter.getListItemCount(), r = 0; r < i; r++) {
        var s = this.adapter.listItemAtIndexHasClass(r, $e.LIST_ITEM_SELECTED_CLASS), a = this.adapter.listItemAtIndexHasClass(r, $e.LIST_ITEM_ACTIVATED_CLASS);
        if (s || a) {
          n = r;
          break;
        }
      }
      return n;
    }, e.prototype.setHasTypeahead = function(n) {
      this.hasTypeahead = n, n && (this.sortedIndexByFirstChar = this.typeaheadInitSortedIndex());
    }, e.prototype.isTypeaheadInProgress = function() {
      return this.hasTypeahead && Po(this.typeaheadState);
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
      return this.adapter.listItemAtIndexHasClass(n, $e.LIST_ITEM_DISABLED_CLASS);
    }, e.prototype.handleKeydown = function(n, i, r) {
      var s = this, a, l = Et(n) === "ArrowLeft", o = Et(n) === "ArrowUp", u = Et(n) === "ArrowRight", c = Et(n) === "ArrowDown", f = Et(n) === "Home", d = Et(n) === "End", h = Et(n) === "Enter", p = Et(n) === "Spacebar", g = this.isVertical && c || !this.isVertical && u, m = this.isVertical && o || !this.isVertical && l, E = n.key === "A" || n.key === "a", v = Cl(n);
      if (this.adapter.isRootFocused()) {
        if ((m || d) && v([]))
          n.preventDefault(), this.focusLastElement();
        else if ((g || f) && v([]))
          n.preventDefault(), this.focusFirstElement();
        else if (m && v(["Shift"]) && this.isCheckboxList) {
          n.preventDefault();
          var S = this.focusLastElement();
          S !== -1 && this.setSelectedIndexOnAction(S, !1);
        } else if (g && v(["Shift"]) && this.isCheckboxList) {
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
          yl(C, this.typeaheadState);
        }
        return;
      }
      var D = this.adapter.getFocusedElementIndex();
      if (!(D === -1 && (D = r, D < 0))) {
        if (g && v([]))
          Wt(n), this.focusNextElement(D);
        else if (m && v([]))
          Wt(n), this.focusPrevElement(D);
        else if (g && v(["Shift"]) && this.isCheckboxList) {
          Wt(n);
          var S = this.focusNextElement(D);
          S !== -1 && this.setSelectedIndexOnAction(S, !1);
        } else if (m && v(["Shift"]) && this.isCheckboxList) {
          Wt(n);
          var S = this.focusPrevElement(D);
          S !== -1 && this.setSelectedIndexOnAction(S, !1);
        } else if (f && v([]))
          Wt(n), this.focusFirstElement();
        else if (d && v([]))
          Wt(n), this.focusLastElement();
        else if (f && v(["Control", "Shift"]) && this.isCheckboxList) {
          if (Wt(n), this.isIndexDisabled(D))
            return;
          this.focusFirstElement(), this.toggleCheckboxRange(0, D, D);
        } else if (d && v(["Control", "Shift"]) && this.isCheckboxList) {
          if (Wt(n), this.isIndexDisabled(D))
            return;
          this.focusLastElement(), this.toggleCheckboxRange(D, this.adapter.getListItemCount() - 1, D);
        } else if (E && v(["Control"]) && this.isCheckboxList)
          n.preventDefault(), this.checkboxListToggleAll(this.selectedIndex === yt.UNSET_INDEX ? [] : this.selectedIndex, !0);
        else if ((h || p) && v([])) {
          if (i) {
            var M = n.target;
            if (M && M.tagName === "A" && h || (Wt(n), this.isIndexDisabled(D)))
              return;
            this.isTypeaheadInProgress() || (this.isSelectableList() && this.setSelectedIndexOnAction(D, !1), this.adapter.notifyAction(D));
          }
        } else if ((h || p) && v(["Shift"]) && this.isCheckboxList) {
          var M = n.target;
          if (M && M.tagName === "A" && h || (Wt(n), this.isIndexDisabled(D)))
            return;
          this.isTypeaheadInProgress() || (this.toggleCheckboxRange((a = this.lastSelectedIndex) !== null && a !== void 0 ? a : D, D, D), this.adapter.notifyAction(D));
        }
        if (this.hasTypeahead) {
          var C = {
            event: n,
            focusItemAtIndex: function(L) {
              s.focusItemAtIndex(L);
            },
            focusedItemIndex: this.focusedItemIndex,
            isTargetListItem: i,
            sortedIndexByFirstChar: this.sortedIndexByFirstChar,
            isItemAtIndexDisabled: function(L) {
              return s.isIndexDisabled(L);
            }
          };
          yl(C, this.typeaheadState);
        }
      }
    }, e.prototype.handleClick = function(n, i, r) {
      var s, a = Cl(r);
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
      this.isIndexValid(n, !1) && (i ? (this.adapter.removeClassForElementIndex(n, $e.LIST_ITEM_DISABLED_CLASS), this.adapter.setAttributeForElementIndex(n, mn.ARIA_DISABLED, "false")) : (this.adapter.addClassForElementIndex(n, $e.LIST_ITEM_DISABLED_CLASS), this.adapter.setAttributeForElementIndex(n, mn.ARIA_DISABLED, "true")));
    }, e.prototype.setSingleSelectionAtIndex = function(n, i) {
      if (i === void 0 && (i = {}), !(this.selectedIndex === n && !i.forceUpdate)) {
        var r = $e.LIST_ITEM_SELECTED_CLASS;
        this.useActivatedClass && (r = $e.LIST_ITEM_ACTIVATED_CLASS), this.selectedIndex !== yt.UNSET_INDEX && this.adapter.removeClassForElementIndex(this.selectedIndex, r), this.setAriaForSingleSelectionAtIndex(n), this.setTabindexAtIndex(n), n !== yt.UNSET_INDEX && this.adapter.addClassForElementIndex(n, r), this.selectedIndex = n, i.isUserInteraction && !i.forceUpdate && this.adapter.notifySelectionChange([n]);
      }
    }, e.prototype.setAriaForSingleSelectionAtIndex = function(n) {
      this.selectedIndex === yt.UNSET_INDEX && (this.ariaCurrentAttrValue = this.adapter.getAttributeForElementIndex(n, mn.ARIA_CURRENT));
      var i = this.ariaCurrentAttrValue !== null, r = i ? mn.ARIA_CURRENT : mn.ARIA_SELECTED;
      if (this.selectedIndex !== yt.UNSET_INDEX && this.adapter.setAttributeForElementIndex(this.selectedIndex, r, "false"), n !== yt.UNSET_INDEX) {
        var s = i ? this.ariaCurrentAttrValue : "true";
        this.adapter.setAttributeForElementIndex(n, r, s);
      }
    }, e.prototype.getSelectionAttribute = function() {
      return this.useSelectedAttr ? mn.ARIA_SELECTED : mn.ARIA_CHECKED;
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
      for (var s = new Set(this.selectedIndex === yt.UNSET_INDEX ? [] : this.selectedIndex), a = !(s != null && s.has(r)), l = Yn([n, i].sort(), 2), o = l[0], u = l[1], c = this.getSelectionAttribute(), f = [], d = o; d <= u; d++)
        if (!this.isIndexDisabled(d)) {
          var h = s.has(d);
          a !== h && (f.push(d), this.adapter.setCheckedCheckboxOrRadioAtIndex(d, a), this.adapter.setAttributeForElementIndex(d, c, "" + a), a ? s.add(d) : s.delete(d));
        }
      f.length && (this.selectedIndex = bn([], Yn(s)), this.adapter.notifySelectionChange(f));
    }, e.prototype.setTabindexAtIndex = function(n) {
      this.focusedItemIndex === yt.UNSET_INDEX && n !== 0 ? this.adapter.setAttributeForElementIndex(0, "tabindex", "-1") : this.focusedItemIndex >= 0 && this.focusedItemIndex !== n && this.adapter.setAttributeForElementIndex(this.focusedItemIndex, "tabindex", "-1"), !(this.selectedIndex instanceof Array) && this.selectedIndex !== n && this.adapter.setAttributeForElementIndex(this.selectedIndex, "tabindex", "-1"), n !== yt.UNSET_INDEX && this.adapter.setAttributeForElementIndex(n, "tabindex", "0");
    }, e.prototype.isSelectableList = function() {
      return this.isSingleSelectionList || this.isCheckboxList || this.isRadioList;
    }, e.prototype.setTabindexToFirstSelectedOrFocusedItem = function() {
      var n = this.getFirstSelectedOrFocusedItemIndex();
      this.setTabindexAtIndex(n);
    }, e.prototype.getFirstSelectedOrFocusedItemIndex = function() {
      return this.isSelectableList() ? typeof this.selectedIndex == "number" && this.selectedIndex !== yt.UNSET_INDEX ? this.selectedIndex : bm(this.selectedIndex) && this.selectedIndex.length > 0 ? this.selectedIndex.reduce(function(n, i) {
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
      return Zr(a, this.typeaheadState);
    }, e.prototype.typeaheadInitSortedIndex = function() {
      return pm(this.adapter.getListItemCount(), this.adapter.getPrimaryTextAtIndex);
    }, e.prototype.clearTypeaheadBuffer = function() {
      wo(this.typeaheadState);
    }, e;
  }(Dt)
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
var Uo = (
  /** @class */
  function(t) {
    at(e, t);
    function e(n) {
      var i = t.call(this, fe(fe({}, e.defaultAdapter), n)) || this;
      return i.isSurfaceOpen = !1, i.isQuickOpen = !1, i.isHoistedElement = !1, i.isFixedPosition = !1, i.isHorizontallyCenteredOnViewport = !1, i.maxHeight = 0, i.openBottomBias = 0, i.openAnimationEndTimerId = 0, i.closeAnimationEndTimerId = 0, i.animationRequestId = 0, i.anchorCorner = Ln.TOP_START, i.originCorner = Ln.TOP_START, i.anchorMargin = { top: 0, right: 0, bottom: 0, left: 0 }, i.position = { x: 0, y: 0 }, i;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return fm;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return dm;
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
        return Ln;
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
      this.originCorner = this.originCorner ^ St.RIGHT;
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
      var i = this.getoriginCorner(), r = this.getMenuSurfaceMaxHeight(i), s = this.hasBit(i, St.BOTTOM) ? "bottom" : "top", a = this.hasBit(i, St.RIGHT) ? "right" : "left", l = this.getHorizontalOriginOffset(i), o = this.getVerticalOriginOffset(i), u = this.measurements, c = u.anchorSize, f = u.surfaceSize, d = (n = {}, n[a] = l, n[s] = o, n);
      c.width / f.width > si.ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO && (a = "center"), (this.isHoistedElement || this.isFixedPosition) && this.adjustPositionForHoistedElement(d), this.adapter.setTransformOrigin(a + " " + s), this.adapter.setPosition(d), this.adapter.setMaxHeight(r ? r + "px" : ""), this.hasBit(i, St.BOTTOM) || this.adapter.addClass(e.cssClasses.IS_OPEN_BELOW);
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
      var n = this.originCorner, i = this.measurements, r = i.viewportDistance, s = i.anchorSize, a = i.surfaceSize, l = e.numbers.MARGIN_TO_EDGE, o = this.hasBit(this.anchorCorner, St.BOTTOM), u, c;
      o ? (u = r.top - l + this.anchorMargin.bottom, c = r.bottom - l - this.anchorMargin.bottom) : (u = r.top - l + this.anchorMargin.top, c = r.bottom - l + s.height - this.anchorMargin.top);
      var f = c - a.height > 0;
      !f && u > c + this.openBottomBias && (n = this.setBit(n, St.BOTTOM));
      var d = this.adapter.isRtl(), h = this.hasBit(this.anchorCorner, St.FLIP_RTL), p = this.hasBit(this.anchorCorner, St.RIGHT) || this.hasBit(n, St.RIGHT), g = !1;
      d && h ? g = !p : g = p;
      var m, E;
      g ? (m = r.left + s.width + this.anchorMargin.right, E = r.right - this.anchorMargin.right) : (m = r.left + this.anchorMargin.left, E = r.right + s.width - this.anchorMargin.left);
      var v = m - a.width > 0, S = E - a.width > 0, C = this.hasBit(n, St.FLIP_RTL) && this.hasBit(n, St.RIGHT);
      return S && C && d || !v && C ? n = this.unsetBit(n, St.RIGHT) : (v && g && d || v && !g && p || !S && m >= E) && (n = this.setBit(n, St.RIGHT)), n;
    }, e.prototype.getMenuSurfaceMaxHeight = function(n) {
      if (this.maxHeight > 0)
        return this.maxHeight;
      var i = this.measurements.viewportDistance, r = 0, s = this.hasBit(n, St.BOTTOM), a = this.hasBit(this.anchorCorner, St.BOTTOM), l = e.numbers.MARGIN_TO_EDGE;
      return s ? (r = i.top + this.anchorMargin.top - l, a || (r += this.measurements.anchorSize.height)) : (r = i.bottom - this.anchorMargin.bottom + this.measurements.anchorSize.height - l, a && (r -= this.measurements.anchorSize.height)), r;
    }, e.prototype.getHorizontalOriginOffset = function(n) {
      var i = this.measurements.anchorSize, r = this.hasBit(n, St.RIGHT), s = this.hasBit(this.anchorCorner, St.RIGHT);
      if (r) {
        var a = s ? i.width - this.anchorMargin.left : this.anchorMargin.right;
        return this.isHoistedElement || this.isFixedPosition ? a - (this.measurements.viewportSize.width - this.measurements.bodySize.width) : a;
      }
      return s ? i.width - this.anchorMargin.right : this.anchorMargin.left;
    }, e.prototype.getVerticalOriginOffset = function(n) {
      var i = this.measurements.anchorSize, r = this.hasBit(n, St.BOTTOM), s = this.hasBit(this.anchorCorner, St.BOTTOM), a = 0;
      return r ? a = s ? i.height - this.anchorMargin.top : -this.anchorMargin.bottom : a = s ? i.height + this.anchorMargin.bottom : this.anchorMargin.top, a;
    }, e.prototype.adjustPositionForHoistedElement = function(n) {
      var i, r, s = this.measurements, a = s.windowScroll, l = s.viewportDistance, o = s.surfaceSize, u = s.viewportSize, c = Object.keys(n);
      try {
        for (var f = Rt(c), d = f.next(); !d.done; d = f.next()) {
          var h = d.value, p = n[h] || 0;
          if (this.isHorizontallyCenteredOnViewport && (h === "left" || h === "right")) {
            n[h] = (u.width - o.width) / 2;
            continue;
          }
          p += l[h], this.isFixedPosition || (h === "top" ? p += a.y : h === "bottom" ? p -= a.y : h === "left" ? p += a.x : p -= a.x), n[h] = p;
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
  }(Dt)
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
var Sl = {
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
function Em(t) {
  return !!t.document && typeof t.document.createElement == "function";
}
function Am(t, e) {
  if (Em(t) && e in Sl) {
    var n = t.document.createElement("div"), i = Sl[e], r = i.standard, s = i.prefixed, a = r in n.style;
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
var zn = {
  MENU_SELECTED_LIST_ITEM: "mdc-menu-item--selected",
  MENU_SELECTION_GROUP: "mdc-menu__selection-group",
  ROOT: "mdc-menu"
}, Un = {
  ARIA_CHECKED_ATTR: "aria-checked",
  ARIA_DISABLED_ATTR: "aria-disabled",
  CHECKBOX_SELECTOR: 'input[type="checkbox"]',
  LIST_SELECTOR: ".mdc-list,.mdc-deprecated-list",
  SELECTED_EVENT: "MDCMenu:selected",
  SKIP_RESTORE_FOCUS: "data-menu-item-skip-restore-focus"
}, ym = {
  FOCUS_ROOT_INDEX: -1
}, Vn;
(function(t) {
  t[t.NONE = 0] = "NONE", t[t.LIST_ROOT = 1] = "LIST_ROOT", t[t.FIRST_ITEM = 2] = "FIRST_ITEM", t[t.LAST_ITEM = 3] = "LAST_ITEM";
})(Vn || (Vn = {}));
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
var Cm = (
  /** @class */
  function(t) {
    at(e, t);
    function e(n) {
      var i = t.call(this, fe(fe({}, e.defaultAdapter), n)) || this;
      return i.closeAnimationEndTimerId = 0, i.defaultFocusState = Vn.LIST_ROOT, i.selectedIndex = -1, i;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return zn;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Un;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return ym;
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
        var s = this.adapter.getAttributeFromElementAtIndex(r, Un.SKIP_RESTORE_FOCUS) === "true";
        this.adapter.closeSurface(s), this.closeAnimationEndTimerId = setTimeout(function() {
          var a = i.adapter.getElementIndex(n);
          a >= 0 && i.adapter.isSelectableItemAtIndex(a) && i.setSelectedIndex(a);
        }, Uo.numbers.TRANSITION_CLOSE_DURATION);
      }
    }, e.prototype.handleMenuSurfaceOpened = function() {
      switch (this.defaultFocusState) {
        case Vn.FIRST_ITEM:
          this.adapter.focusItemAtIndex(0);
          break;
        case Vn.LAST_ITEM:
          this.adapter.focusItemAtIndex(this.adapter.getMenuItemCount() - 1);
          break;
        case Vn.NONE:
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
      i >= 0 && (this.adapter.removeAttributeFromElementAtIndex(i, Un.ARIA_CHECKED_ATTR), this.adapter.removeClassFromElementAtIndex(i, zn.MENU_SELECTED_LIST_ITEM)), this.adapter.addClassToElementAtIndex(n, zn.MENU_SELECTED_LIST_ITEM), this.adapter.addAttributeToElementAtIndex(n, Un.ARIA_CHECKED_ATTR, "true"), this.selectedIndex = n;
    }, e.prototype.setEnabled = function(n, i) {
      this.validatedIndex(n), i ? (this.adapter.removeClassFromElementAtIndex(n, $e.LIST_ITEM_DISABLED_CLASS), this.adapter.addAttributeToElementAtIndex(n, Un.ARIA_DISABLED_ATTR, "false")) : (this.adapter.addClassToElementAtIndex(n, $e.LIST_ITEM_DISABLED_CLASS), this.adapter.addAttributeToElementAtIndex(n, Un.ARIA_DISABLED_ATTR, "true"));
    }, e.prototype.validatedIndex = function(n) {
      var i = this.adapter.getMenuItemCount(), r = n >= 0 && n < i;
      if (!r)
        throw new Error("MDCMenuFoundation: No list item at specified index.");
    }, e;
  }(Dt)
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
}, An = {
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
var Sm = (
  /** @class */
  function(t) {
    at(e, t);
    function e(n, i) {
      i === void 0 && (i = {});
      var r = t.call(this, fe(fe({}, e.defaultAdapter), n)) || this;
      return r.disabled = !1, r.isMenuOpen = !1, r.useDefaultValidation = !0, r.customValidity = !0, r.lastSelectedIndex = An.UNSET_INDEX, r.clickDebounceTimeout = 0, r.recentlyClicked = !1, r.leadingIcon = i.leadingIcon, r.helperText = i.helperText, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return _t;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return An;
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
      i === void 0 && (i = !1), r === void 0 && (r = !1), !(n >= this.adapter.getMenuItemCount()) && (n === An.UNSET_INDEX ? this.adapter.setSelectedText("") : this.adapter.setSelectedText(this.adapter.getMenuItemTextAtIndex(n).trim()), this.adapter.setSelectedIndex(n), i && this.adapter.closeMenu(), !r && this.lastSelectedIndex !== n && this.handleChange(), this.lastSelectedIndex = n);
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
      return n !== An.UNSET_INDEX ? i[n] : "";
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
        var i = Et(n) === we.ENTER, r = Et(n) === we.SPACEBAR, s = Et(n) === we.ARROW_UP, a = Et(n) === we.ARROW_DOWN, l = n.ctrlKey || n.metaKey;
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
          var r = An.LABEL_SCALE, s = this.adapter.getLabelWidth() * r;
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
      return this.useDefaultValidation && this.adapter.hasClass(_t.REQUIRED) && !this.adapter.hasClass(_t.DISABLED) ? this.getSelectedIndex() !== An.UNSET_INDEX && (this.getSelectedIndex() !== 0 || !!this.getValue()) : this.customValidity;
    }, e.prototype.setRequired = function(n) {
      n ? this.adapter.addClass(_t.REQUIRED) : this.adapter.removeClass(_t.REQUIRED), this.adapter.setSelectAnchorAttr("aria-required", n.toString()), this.adapter.setLabelRequired(n);
    }, e.prototype.getRequired = function() {
      return this.adapter.getSelectAnchorAttr("aria-required") === "true";
    }, e.prototype.init = function() {
      var n = this.adapter.getAnchorElement();
      n && (this.adapter.setMenuAnchorElement(n), this.adapter.setMenuAnchorCorner(Ln.BOTTOM_START)), this.adapter.setMenuWrapFocus(!1), this.setDisabled(this.adapter.hasClass(_t.DISABLED)), this.syncHelperTextValidity(!this.adapter.hasClass(_t.INVALID)), this.layout(), this.layoutOptions();
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
      }, An.CLICK_DEBOUNCE_TIMEOUT_MS), this.recentlyClicked = !0;
    }, e;
  }(Dt)
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
var yn = {
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
var Tm = (
  /** @class */
  function(t) {
    at(e, t);
    function e(n) {
      return t.call(this, fe(fe({}, e.defaultAdapter), n)) || this;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return ln;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return yn;
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
      return this.adapter.getAttr(yn.ARIA_HIDDEN) !== "true";
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
          this.showToScreenReader(), n ? this.adapter.removeAttr(yn.ROLE) : this.adapter.setAttr(yn.ROLE, "alert");
          return;
        }
        this.adapter.removeAttr(yn.ROLE), this.hide();
      }
    }, e.prototype.showToScreenReader = function() {
      this.adapter.removeAttr(yn.ARIA_HIDDEN);
    }, e.prototype.hide = function() {
      this.adapter.setAttr(yn.ARIA_HIDDEN, "true");
    }, e;
  }(Dt)
);
const { document: Lm } = Qa;
function Om(t) {
  let e, n, i, r, s, a, l, o;
  const u = (
    /*#slots*/
    t[34].default
  ), c = Ie(
    u,
    t,
    /*$$scope*/
    t[33],
    null
  );
  let f = [
    {
      class: i = se({
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
      ).map(Tl).concat([
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
      e = ae(), n = ne("div"), c && c.c(), ce(n, d);
    },
    m(h, p) {
      V(h, e, p), V(h, n, p), c && c.m(n, null), t[35](n), a = !0, l || (o = [
        ue(
          Lm.body,
          "click",
          /*handleBodyClick*/
          t[11],
          !0
        ),
        he(s = xe.call(
          null,
          n,
          /*use*/
          t[0]
        )),
        he(
          /*forwardEvents*/
          t[10].call(null, n)
        ),
        ue(n, "keydown", function() {
          pe(
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
    p(h, p) {
      t = h, c && c.p && (!a || p[1] & /*$$scope*/
      4) && Ae(
        c,
        u,
        t,
        /*$$scope*/
        t[33],
        a ? Ee(
          u,
          /*$$scope*/
          t[33],
          p,
          null
        ) : ye(
          /*$$scope*/
          t[33]
        ),
        null
      ), ce(n, d = me(f, [
        (!a || p[0] & /*className, fixed, isStatic, fullWidth, internalClasses*/
        314 && i !== (i = se({
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
        (!a || p[0] & /*internalStyles, style*/
        516 && r !== (r = Object.entries(
          /*internalStyles*/
          t[9]
        ).map(Tl).concat([
          /*style*/
          t[2]
        ]).join(" "))) && { style: r },
        { role: "dialog" },
        p[0] & /*$$restProps*/
        4096 && /*$$restProps*/
        t[12]
      ])), s && pe(s.update) && p[0] & /*use*/
      1 && s.update.call(
        null,
        /*use*/
        t[0]
      );
    },
    i(h) {
      a || (y(c, h), a = !0);
    },
    o(h) {
      O(c, h), a = !1;
    },
    d(h) {
      h && (B(e), B(n)), c && c.d(h), t[35](null), l = !1, Ye(o);
    }
  };
}
const Tl = ([t, e]) => `${t}: ${e};`;
function Rm(t, e, n) {
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
  let r = ge(e, i), { $$slots: s = {}, $$scope: a } = e;
  var l, o, u;
  const c = rt(Je());
  let { use: f = [] } = e, { class: d = "" } = e, { style: h = "" } = e, { static: p = !1 } = e, { anchor: g = !0 } = e, { fixed: m = !1 } = e, { open: E = p } = e, { managed: v = !1 } = e, { fullWidth: S = !1 } = e, { quickOpen: C = !1 } = e, { anchorElement: D = void 0 } = e, { anchorCorner: M = void 0 } = e, { anchorMargin: _ = { top: 0, right: 0, bottom: 0, left: 0 } } = e, { maxHeight: L = 0 } = e, { horizontallyCenteredOnViewport: k = !1 } = e, { openBottomBias: A = 0 } = e, { neverRestoreFocus: b = !1 } = e, I, T, H = {}, q = {}, j;
  Ge("SMUI:list:role", "menu"), Ge("SMUI:list:item:role", "menuitem");
  const K = Ln;
  ft(() => (n(7, T = new Uo({
    addClass: R,
    removeClass: G,
    hasClass: N,
    hasAnchor: () => !!D,
    notifyClose: () => {
      v || n(13, E = p), E || _e(I, "SMUIMenuSurface:closed", void 0, void 0, !0);
    },
    notifyClosing: () => {
      v || n(13, E = p), E || _e(I, "SMUIMenuSurface:closing", void 0, void 0, !0);
    },
    notifyOpen: () => {
      v || n(13, E = !0), E && _e(I, "SMUIMenuSurface:opened", void 0, void 0, !0);
    },
    notifyOpening: () => {
      E || _e(I, "SMUIMenuSurface:opening", void 0, void 0, !0);
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
      !b && (!I || I.contains(document.activeElement)) && j && document.contains(j) && "focus" in j && j.focus();
    },
    getInnerDimensions: () => ({
      width: I.offsetWidth,
      height: I.offsetHeight
    }),
    getAnchorDimensions: () => D ? D.getBoundingClientRect() : null,
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
      return E;
    },
    set open(W) {
      n(13, E = W);
    },
    closeProgrammatic: oe
  }), T.init(), () => {
    var W;
    const Ke = T.isHoistedElement;
    T.destroy(), Ke && ((W = I.parentNode) === null || W === void 0 || W.removeChild(I));
  })), Qt(() => {
    var re;
    g && I && ((re = I.parentElement) === null || re === void 0 || re.classList.remove("mdc-menu-surface--anchor"));
  });
  function N(re) {
    return re in H ? H[re] : Se().classList.contains(re);
  }
  function R(re) {
    H[re] || n(8, H[re] = !0, H);
  }
  function G(re) {
    (!(re in H) || H[re]) && n(8, H[re] = !1, H);
  }
  function oe(re) {
    T.close(re), n(13, E = !1);
  }
  function Oe(re) {
    T && E && !v && T.handleBodyClick(re);
  }
  function ve() {
    return E;
  }
  function Xe(re) {
    n(13, E = re);
  }
  function z(re, W) {
    return T.setAbsolutePosition(re, W);
  }
  function x(re) {
    return T.setIsHoisted(re);
  }
  function be() {
    return T.isFixed();
  }
  function Se() {
    return I;
  }
  function He(re) {
    le[re ? "unshift" : "push"](() => {
      I = re, n(6, I);
    });
  }
  return t.$$set = (re) => {
    e = X(X({}, e), nt(re)), n(12, r = ge(e, i)), "use" in re && n(0, f = re.use), "class" in re && n(1, d = re.class), "style" in re && n(2, h = re.style), "static" in re && n(3, p = re.static), "anchor" in re && n(15, g = re.anchor), "fixed" in re && n(4, m = re.fixed), "open" in re && n(13, E = re.open), "managed" in re && n(16, v = re.managed), "fullWidth" in re && n(5, S = re.fullWidth), "quickOpen" in re && n(17, C = re.quickOpen), "anchorElement" in re && n(14, D = re.anchorElement), "anchorCorner" in re && n(18, M = re.anchorCorner), "anchorMargin" in re && n(19, _ = re.anchorMargin), "maxHeight" in re && n(20, L = re.maxHeight), "horizontallyCenteredOnViewport" in re && n(21, k = re.horizontallyCenteredOnViewport), "openBottomBias" in re && n(22, A = re.openBottomBias), "neverRestoreFocus" in re && n(23, b = re.neverRestoreFocus), "$$scope" in re && n(33, a = re.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty[0] & /*element, anchor, _a*/
    1073774656 | t.$$.dirty[1] & /*_b, _c*/
    3 && I && g && !(!(n(30, l = I.parentElement) === null || l === void 0) && l.classList.contains("mdc-menu-surface--anchor")) && (n(31, o = I.parentElement) === null || o === void 0 || o.classList.add("mdc-menu-surface--anchor"), n(14, D = n(32, u = I.parentElement) !== null && u !== void 0 ? u : void 0)), t.$$.dirty[0] & /*instance, open*/
    8320 && T && T.isOpen() !== E && (E ? T.open() : T.close()), t.$$.dirty[0] & /*instance, quickOpen*/
    131200 && T && T.setQuickOpen(C), t.$$.dirty[0] & /*instance, fixed*/
    144 && T && T.setFixedPosition(m), t.$$.dirty[0] & /*instance, maxHeight*/
    1048704 && T && T.setMaxHeight(L), t.$$.dirty[0] & /*instance, horizontallyCenteredOnViewport*/
    2097280 && T && T.setIsHorizontallyCenteredOnViewport(k), t.$$.dirty[0] & /*instance, anchorCorner*/
    262272 && T && M != null && (typeof M == "string" ? T.setAnchorCorner(K[M]) : T.setAnchorCorner(M)), t.$$.dirty[0] & /*instance, anchorMargin*/
    524416 && T && T.setAnchorMargin(_), t.$$.dirty[0] & /*instance, openBottomBias*/
    4194432 && T && T.setOpenBottomBias(A);
  }, [
    f,
    d,
    h,
    p,
    m,
    S,
    I,
    T,
    H,
    q,
    c,
    Oe,
    r,
    E,
    D,
    g,
    v,
    C,
    M,
    _,
    L,
    k,
    A,
    b,
    ve,
    Xe,
    z,
    x,
    be,
    Se,
    l,
    o,
    u,
    a,
    s,
    He
  ];
}
class Dm extends Me {
  constructor(e) {
    super(), De(
      this,
      e,
      Rm,
      Om,
      Ce,
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
function Mm(t, { addClass: e = (i) => t.classList.add(i), removeClass: n = (i) => t.classList.remove(i) } = {}) {
  return e("mdc-menu-surface--anchor"), {
    destroy() {
      n("mdc-menu-surface--anchor");
    }
  };
}
function km(t) {
  let e;
  const n = (
    /*#slots*/
    t[17].default
  ), i = Ie(
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
      4194304) && Ae(
        i,
        n,
        r,
        /*$$scope*/
        r[22],
        e ? Ee(
          n,
          /*$$scope*/
          r[22],
          s,
          null
        ) : ye(
          /*$$scope*/
          r[22]
        ),
        null
      );
    },
    i(r) {
      e || (y(i, r), e = !0);
    },
    o(r) {
      O(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function Fm(t) {
  let e, n, i;
  const r = [
    { use: (
      /*usePass*/
      t[5]
    ) },
    {
      class: se({
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
    $$slots: { default: [km] },
    $$scope: { ctx: t }
  };
  for (let l = 0; l < r.length; l += 1)
    a = X(a, r[l]);
  return (
    /*open*/
    t[0] !== void 0 && (a.open = /*open*/
    t[0]), e = new Dm({ props: a }), t[18](e), le.push(() => vt(e, "open", s)), e.$on(
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
        ie(e.$$.fragment);
      },
      m(l, o) {
        ee(e, l, o), i = !0;
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
            class: se({
              [
                /*className*/
                l[1]
              ]: !0,
              "mdc-menu": !0
            })
          },
          o & /*$$restProps*/
          512 && Fe(
            /*$$restProps*/
            l[9]
          )
        ]) : {};
        o & /*$$scope*/
        4194304 && (u.$$scope = { dirty: o, ctx: l }), !n && o & /*open*/
        1 && (n = !0, u.open = /*open*/
        l[0], bt(() => n = !1)), e.$set(u);
      },
      i(l) {
        i || (y(e.$$.fragment, l), i = !0);
      },
      o(l) {
        O(e.$$.fragment, l), i = !1;
      },
      d(l) {
        t[18](null), te(e, l);
      }
    }
  );
}
function Nm(t, e, n) {
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
  let s = ge(e, r), { $$slots: a = {}, $$scope: l } = e;
  const { closest: o } = vi, u = rt(Je());
  let { use: c = [] } = e, { class: f = "" } = e, { open: d = !1 } = e, h, p, g, m;
  ft(() => (n(3, p = new Cm({
    addClassToElementAtIndex: (H, q) => {
      m.addClassForElementIndex(H, q);
    },
    removeClassFromElementAtIndex: (H, q) => {
      m.removeClassForElementIndex(H, q);
    },
    addAttributeToElementAtIndex: (H, q, j) => {
      m.setAttributeForElementIndex(H, q, j);
    },
    removeAttributeFromElementAtIndex: (H, q) => {
      m.removeAttributeForElementIndex(H, q);
    },
    getAttributeFromElementAtIndex: (H, q) => m.getAttributeFromElementIndex(H, q),
    elementContainsClass: (H, q) => H.classList.contains(q),
    closeSurface: (H) => {
      g.closeProgrammatic(H), _e(k(), "SMUIMenu:closedProgrammatically");
    },
    getElementIndex: (H) => m.getOrderedList().map((q) => q.element).indexOf(H),
    notifySelected: (H) => _e(
      k(),
      "SMUIMenu:selected",
      {
        index: H.index,
        item: m.getOrderedList()[H.index].element
      },
      void 0,
      !0
    ),
    getMenuItemCount: () => m.items.length,
    focusItemAtIndex: (H) => m.focusItemAtIndex(H),
    focusListRoot: () => "focus" in m.element && m.element.focus(),
    isSelectableItemAtIndex: (H) => !!o(m.getOrderedList()[H].element, `.${zn.MENU_SELECTION_GROUP}`),
    getSelectedSiblingOfItemAtIndex: (H) => {
      const q = m.getOrderedList(), j = o(q[H].element, `.${zn.MENU_SELECTION_GROUP}`), K = j == null ? void 0 : j.querySelector(`.${zn.MENU_SELECTED_LIST_ITEM}`);
      return K ? q.map((N) => N.element).indexOf(K) : -1;
    }
  })), _e(k(), "SMUIMenu:mount", p), p.init(), () => {
    p.destroy();
  }));
  function E(H) {
    p && p.handleKeydown(H);
  }
  function v(H) {
    g || (g = H.detail);
  }
  function S(H) {
    m || n(4, m = H.detail);
  }
  function C() {
    return d;
  }
  function D(H) {
    n(0, d = H);
  }
  function M(H) {
    p.setDefaultFocusState(H);
  }
  function _() {
    return p.getSelectedIndex();
  }
  function L() {
    return h;
  }
  function k() {
    return h.getElement();
  }
  function A(H) {
    le[H ? "unshift" : "push"](() => {
      h = H, n(2, h);
    });
  }
  function b(H) {
    d = H, n(0, d);
  }
  const I = () => p && p.handleMenuSurfaceOpened(), T = (H) => p && p.handleItemAction(m.getOrderedList()[H.detail.index].element);
  return t.$$set = (H) => {
    e = X(X({}, e), nt(H)), n(9, s = ge(e, r)), "use" in H && n(10, c = H.use), "class" in H && n(1, f = H.class), "open" in H && n(0, d = H.open), "$$scope" in H && n(22, l = H.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty & /*use*/
    1024 && n(5, i = [u, ...c]);
  }, [
    d,
    f,
    h,
    p,
    m,
    i,
    E,
    v,
    S,
    s,
    c,
    C,
    D,
    M,
    _,
    L,
    k,
    a,
    A,
    b,
    I,
    T,
    l
  ];
}
class Hm extends Me {
  constructor(e) {
    super(), De(this, e, Nm, Fm, Ce, {
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
function Pm(t) {
  let e;
  const n = (
    /*#slots*/
    t[42].default
  ), i = Ie(
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
      8192) && Ae(
        i,
        n,
        r,
        /*$$scope*/
        r[44],
        e ? Ee(
          n,
          /*$$scope*/
          r[44],
          s,
          null
        ) : ye(
          /*$$scope*/
          r[44]
        ),
        null
      );
    },
    i(r) {
      e || (y(i, r), e = !0);
    },
    o(r) {
      O(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function wm(t) {
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
      class: se({
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
      $$slots: { default: [Pm] },
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
        class: se({
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
      33554432 && Fe(
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
      e && ie(e.$$.fragment), n = Ze();
    },
    m(l, o) {
      e && ee(e, l, o), V(l, n, o), i = !0;
    },
    p(l, o) {
      if (o[0] & /*component*/
      4096 && s !== (s = /*component*/
      l[12])) {
        if (e) {
          Ue();
          const u = e;
          O(u.$$.fragment, 1, 0, () => {
            te(u, 1);
          }), Be();
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
        ), ie(e.$$.fragment), y(e.$$.fragment, 1), ee(e, n.parentNode, n)) : e = null;
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
            class: se({
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
          33554432 && Fe(
            /*$$restProps*/
            l[25]
          )
        ]) : {};
        o[1] & /*$$scope*/
        8192 && (u.$$scope = { dirty: o, ctx: l }), e.$set(u);
      }
    },
    i(l) {
      i || (e && y(e.$$.fragment, l), i = !0);
    },
    o(l) {
      e && O(e.$$.fragment, l), i = !1;
    },
    d(l) {
      l && B(n), t[43](null), e && te(e, l);
    }
  };
}
function Um(t, e, n) {
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
  let r = ge(e, i), { $$slots: s = {}, $$scope: a } = e;
  var l;
  const { closest: o, matches: u } = vi, c = rt(Je());
  let { use: f = [] } = e, { class: d = "" } = e, { nonInteractive: h = !1 } = e, { dense: p = !1 } = e, { textualList: g = !1 } = e, { avatarList: m = !1 } = e, { iconList: E = !1 } = e, { imageList: v = !1 } = e, { thumbnailList: S = !1 } = e, { videoList: C = !1 } = e, { twoLine: D = !1 } = e, { threeLine: M = !1 } = e, { vertical: _ = !0 } = e, { wrapFocus: L = (l = ze("SMUI:list:wrapFocus")) !== null && l !== void 0 ? l : !1 } = e, { singleSelection: k = !1 } = e, { disabledItemsFocusable: A = !1 } = e, { selectedIndex: b = -1 } = e, { radioList: I = !1 } = e, { checkList: T = !1 } = e, { hasTypeahead: H = !1 } = e, q, j, K = [], N = ze("SMUI:list:role"), R = ze("SMUI:list:nav");
  const G = /* @__PURE__ */ new WeakMap();
  let oe = ze("SMUI:dialog:selection"), Oe = ze("SMUI:addLayoutListener"), ve, { component: Xe = Ut } = e, { tag: z = Xe === Ut ? R ? "nav" : "ul" : void 0 } = e;
  Ge("SMUI:list:nonInteractive", h), Ge("SMUI:separator:context", "list"), N || (k ? (N = "listbox", Ge("SMUI:list:item:role", "option")) : I ? (N = "radiogroup", Ge("SMUI:list:item:role", "radio")) : T ? (N = "group", Ge("SMUI:list:item:role", "checkbox")) : (N = "list", Ge("SMUI:list:item:role", void 0))), Oe && (ve = Oe(Q)), ft(() => {
    n(41, j = new Im({
      addClassForElementIndex: Y,
      focusItemAtIndex: ke,
      getAttributeForElementIndex: (Te, Re) => {
        var lt, nn;
        return (nn = (lt = qe()[Te]) === null || lt === void 0 ? void 0 : lt.getAttr(Re)) !== null && nn !== void 0 ? nn : null;
      },
      getFocusedElementIndex: () => document.activeElement ? qe().map((Te) => Te.element).indexOf(document.activeElement) : -1,
      getListItemCount: () => K.length,
      getPrimaryTextAtIndex: F,
      hasCheckboxAtIndex: (Te) => {
        var Re, lt;
        return (lt = (Re = qe()[Te]) === null || Re === void 0 ? void 0 : Re.hasCheckbox) !== null && lt !== void 0 ? lt : !1;
      },
      hasRadioAtIndex: (Te) => {
        var Re, lt;
        return (lt = (Re = qe()[Te]) === null || Re === void 0 ? void 0 : Re.hasRadio) !== null && lt !== void 0 ? lt : !1;
      },
      isCheckboxCheckedAtIndex: (Te) => {
        var Re;
        const lt = qe()[Te];
        return (Re = (lt == null ? void 0 : lt.hasCheckbox) && lt.checked) !== null && Re !== void 0 ? Re : !1;
      },
      isFocusInsideList: () => q != null && de() !== document.activeElement && de().contains(document.activeElement),
      isRootFocused: () => q != null && document.activeElement === de(),
      listItemAtIndexHasClass: gt,
      notifyAction: (Te) => {
        n(26, b = Te), q != null && _e(de(), "SMUIList:action", { index: Te }, void 0, !0);
      },
      notifySelectionChange: (Te) => {
        q != null && _e(de(), "SMUIList:selectionChange", { changedIndices: Te });
      },
      removeClassForElementIndex: Le,
      setAttributeForElementIndex: We,
      setCheckedCheckboxOrRadioAtIndex: (Te, Re) => {
        qe()[Te].checked = Re;
      },
      setTabIndexForListItemChildren: (Te, Re) => {
        const lt = qe()[Te];
        Array.prototype.forEach.call(lt.element.querySelectorAll("button:not(:disabled), a"), (ti) => {
          ti.setAttribute("tabindex", Re);
        });
      }
    }));
    const Z = {
      get element() {
        return de();
      },
      get items() {
        return K;
      },
      get typeaheadInProgress() {
        return j.isTypeaheadInProgress();
      },
      typeaheadMatchItem(Te, Re) {
        return j.typeaheadMatchItem(
          Te,
          Re,
          /** skipFocus */
          !0
        );
      },
      getOrderedList: qe,
      focusItemAtIndex: ke,
      addClassForElementIndex: Y,
      removeClassForElementIndex: Le,
      setAttributeForElementIndex: We,
      removeAttributeForElementIndex: Pe,
      getAttributeFromElementIndex: Ot,
      getPrimaryTextAtIndex: F
    };
    return _e(de(), "SMUIList:mount", Z), j.init(), j.layout(), () => {
      j.destroy();
    };
  }), Qt(() => {
    ve && ve();
  });
  function x(Z) {
    K.push(Z.detail), G.set(Z.detail.element, Z.detail), k && Z.detail.selected && n(26, b = $(Z.detail.element)), Z.stopPropagation();
  }
  function be(Z) {
    var Te;
    const Re = (Te = Z.detail && K.indexOf(Z.detail)) !== null && Te !== void 0 ? Te : -1;
    Re !== -1 && (K.splice(Re, 1), K = K, G.delete(Z.detail.element)), Z.stopPropagation();
  }
  function Se(Z) {
    j && Z.target && j.handleKeydown(Z, Z.target.classList.contains("mdc-deprecated-list-item"), $(Z.target));
  }
  function He(Z) {
    j && Z.target && j.handleFocusIn($(Z.target));
  }
  function re(Z) {
    j && Z.target && j.handleFocusOut($(Z.target));
  }
  function W(Z) {
    j && Z.target && j.handleClick($(Z.target), !u(Z.target, 'input[type="checkbox"], input[type="radio"]'), Z);
  }
  function Ke(Z) {
    if (I || T) {
      const Te = $(Z.target);
      if (Te !== -1) {
        const Re = qe()[Te];
        Re && (I && !Re.checked || T) && (u(Z.detail.target, 'input[type="checkbox"], input[type="radio"]') || (Re.checked = !Re.checked), Re.activateRipple(), window.requestAnimationFrame(() => {
          Re.deactivateRipple();
        }));
      }
    }
  }
  function qe() {
    return q == null ? [] : [...de().children].map((Z) => G.get(Z)).filter((Z) => Z && Z._smui_list_item_accessor);
  }
  function gt(Z, Te) {
    var Re;
    const lt = qe()[Z];
    return (Re = lt && lt.hasClass(Te)) !== null && Re !== void 0 ? Re : !1;
  }
  function Y(Z, Te) {
    const Re = qe()[Z];
    Re && Re.addClass(Te);
  }
  function Le(Z, Te) {
    const Re = qe()[Z];
    Re && Re.removeClass(Te);
  }
  function We(Z, Te, Re) {
    const lt = qe()[Z];
    lt && lt.addAttr(Te, Re);
  }
  function Pe(Z, Te) {
    const Re = qe()[Z];
    Re && Re.removeAttr(Te);
  }
  function Ot(Z, Te) {
    const Re = qe()[Z];
    return Re ? Re.getAttr(Te) : null;
  }
  function F(Z) {
    var Te;
    const Re = qe()[Z];
    return (Te = Re && Re.getPrimaryText()) !== null && Te !== void 0 ? Te : "";
  }
  function $(Z) {
    const Te = o(Z, ".mdc-deprecated-list-item, .mdc-deprecated-list");
    return Te && u(Te, ".mdc-deprecated-list-item") ? qe().map((Re) => Re == null ? void 0 : Re.element).indexOf(Te) : -1;
  }
  function Q() {
    return j.layout();
  }
  function je(Z, Te) {
    return j.setEnabled(Z, Te);
  }
  function mt() {
    return j.isTypeaheadInProgress();
  }
  function dt() {
    return j.getSelectedIndex();
  }
  function et() {
    return j.getFocusedItemIndex();
  }
  function ke(Z) {
    const Te = qe()[Z];
    Te && "focus" in Te.element && Te.element.focus();
  }
  function de() {
    return q.getElement();
  }
  function qt(Z) {
    le[Z ? "unshift" : "push"](() => {
      q = Z, n(14, q);
    });
  }
  return t.$$set = (Z) => {
    e = X(X({}, e), nt(Z)), n(25, r = ge(e, i)), "use" in Z && n(0, f = Z.use), "class" in Z && n(1, d = Z.class), "nonInteractive" in Z && n(2, h = Z.nonInteractive), "dense" in Z && n(3, p = Z.dense), "textualList" in Z && n(4, g = Z.textualList), "avatarList" in Z && n(5, m = Z.avatarList), "iconList" in Z && n(6, E = Z.iconList), "imageList" in Z && n(7, v = Z.imageList), "thumbnailList" in Z && n(8, S = Z.thumbnailList), "videoList" in Z && n(9, C = Z.videoList), "twoLine" in Z && n(10, D = Z.twoLine), "threeLine" in Z && n(11, M = Z.threeLine), "vertical" in Z && n(27, _ = Z.vertical), "wrapFocus" in Z && n(28, L = Z.wrapFocus), "singleSelection" in Z && n(29, k = Z.singleSelection), "disabledItemsFocusable" in Z && n(30, A = Z.disabledItemsFocusable), "selectedIndex" in Z && n(26, b = Z.selectedIndex), "radioList" in Z && n(31, I = Z.radioList), "checkList" in Z && n(32, T = Z.checkList), "hasTypeahead" in Z && n(33, H = Z.hasTypeahead), "component" in Z && n(12, Xe = Z.component), "tag" in Z && n(13, z = Z.tag), "$$scope" in Z && n(44, a = Z.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty[0] & /*vertical*/
    134217728 | t.$$.dirty[1] & /*instance*/
    1024 && j && j.setVerticalOrientation(_), t.$$.dirty[0] & /*wrapFocus*/
    268435456 | t.$$.dirty[1] & /*instance*/
    1024 && j && j.setWrapFocus(L), t.$$.dirty[1] & /*instance, hasTypeahead*/
    1028 && j && j.setHasTypeahead(H), t.$$.dirty[0] & /*singleSelection*/
    536870912 | t.$$.dirty[1] & /*instance*/
    1024 && j && j.setSingleSelection(k), t.$$.dirty[0] & /*disabledItemsFocusable*/
    1073741824 | t.$$.dirty[1] & /*instance*/
    1024 && j && j.setDisabledItemsFocusable(A), t.$$.dirty[0] & /*singleSelection, selectedIndex*/
    603979776 | t.$$.dirty[1] & /*instance*/
    1024 && j && k && dt() !== b && j.setSelectedIndex(b);
  }, [
    f,
    d,
    h,
    p,
    g,
    m,
    E,
    v,
    S,
    C,
    D,
    M,
    Xe,
    z,
    q,
    N,
    c,
    oe,
    x,
    be,
    Se,
    He,
    re,
    W,
    Ke,
    r,
    b,
    _,
    L,
    k,
    A,
    I,
    T,
    H,
    Q,
    je,
    mt,
    dt,
    et,
    ke,
    de,
    j,
    s,
    qt,
    a
  ];
}
class Bm extends Me {
  constructor(e) {
    super(), De(
      this,
      e,
      Um,
      wm,
      Ce,
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
function Ll(t) {
  let e;
  return {
    c() {
      e = ne("span"), P(e, "class", "mdc-deprecated-list-item__ripple");
    },
    m(n, i) {
      V(n, e, i);
    },
    d(n) {
      n && B(e);
    }
  };
}
function Vm(t) {
  let e, n, i = (
    /*ripple*/
    t[7] && Ll()
  );
  const r = (
    /*#slots*/
    t[34].default
  ), s = Ie(
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
      i && i.m(a, l), V(a, e, l), s && s.m(a, l), n = !0;
    },
    p(a, l) {
      /*ripple*/
      a[7] ? i || (i = Ll(), i.c(), i.m(e.parentNode, e)) : i && (i.d(1), i = null), s && s.p && (!n || l[1] & /*$$scope*/
      64) && Ae(
        s,
        r,
        a,
        /*$$scope*/
        a[37],
        n ? Ee(
          r,
          /*$$scope*/
          a[37],
          l,
          null
        ) : ye(
          /*$$scope*/
          a[37]
        ),
        null
      );
    },
    i(a) {
      n || (y(s, a), n = !0);
    },
    o(a) {
      O(s, a), n = !1;
    },
    d(a) {
      a && B(e), i && i.d(a), s && s.d(a);
    }
  };
}
function Gm(t) {
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
            Ft,
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
      class: se({
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
      ).map(Dr).concat([
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
      $$slots: { default: [Vm] },
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
              Ft,
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
        class: se({
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
        ).map(Dr).concat([
          /*style*/
          l[4]
        ]).join(" ")
      },
      o[0] & /*nav, activated*/
      8388610 && Fe(
        /*nav*/
        l[23] && /*activated*/
        l[1] ? { "aria-current": "page" } : {}
      ),
      o[0] & /*nav, wrapper, role*/
      8389376 && Fe(!/*nav*/
      l[23] || /*wrapper*/
      l[8] ? { role: (
        /*role*/
        l[9]
      ) } : {}),
      o[0] & /*nav, role, selected*/
      8389121 && Fe(!/*nav*/
      l[23] && /*role*/
      l[9] === "option" ? {
        "aria-selected": (
          /*selected*/
          l[0] ? "true" : "false"
        )
      } : {}),
      o[0] & /*nav, role, input*/
      8454656 && Fe(!/*nav*/
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
      8389632 && Fe(/*nav*/
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
      1048576 && Fe(
        /*internalAttrs*/
        l[20]
      ),
      o[0] & /*$$restProps*/
      536870912 && Fe(
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
      e && ie(e.$$.fragment), n = Ze();
    },
    m(l, o) {
      e && ee(e, l, o), V(l, n, o), i = !0;
    },
    p(l, o) {
      if (o[0] & /*component*/
      8192 && s !== (s = /*component*/
      l[13])) {
        if (e) {
          Ue();
          const u = e;
          O(u.$$.fragment, 1, 0, () => {
            te(u, 1);
          }), Be();
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
        ), ie(e.$$.fragment), y(e.$$.fragment, 1), ee(e, n.parentNode, n)) : e = null;
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
                  Ft,
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
            class: se({
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
            ).map(Dr).concat([
              /*style*/
              l[4]
            ]).join(" ")
          },
          o[0] & /*nav, activated*/
          8388610 && Fe(
            /*nav*/
            l[23] && /*activated*/
            l[1] ? { "aria-current": "page" } : {}
          ),
          o[0] & /*nav, wrapper, role*/
          8389376 && Fe(!/*nav*/
          l[23] || /*wrapper*/
          l[8] ? { role: (
            /*role*/
            l[9]
          ) } : {}),
          o[0] & /*nav, role, selected*/
          8389121 && Fe(!/*nav*/
          l[23] && /*role*/
          l[9] === "option" ? {
            "aria-selected": (
              /*selected*/
              l[0] ? "true" : "false"
            )
          } : {}),
          o[0] & /*nav, role, input*/
          8454656 && Fe(!/*nav*/
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
          8389632 && Fe(/*nav*/
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
          1048576 && Fe(
            /*internalAttrs*/
            l[20]
          ),
          o[0] & /*$$restProps*/
          536870912 && Fe(
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
      i || (e && y(e.$$.fragment, l), i = !0);
    },
    o(l) {
      e && O(e.$$.fragment, l), i = !1;
    },
    d(l) {
      l && B(n), t[35](null), e && te(e, l);
    }
  };
}
let jm = 0;
const Dr = ([t, e]) => `${t}: ${e};`;
function qm(t, e, n) {
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
  let s = ge(e, r), { $$slots: a = {}, $$scope: l } = e;
  var o;
  const u = rt(Je());
  let c = () => {
  };
  function f(Y) {
    return Y === c;
  }
  let { use: d = [] } = e, { class: h = "" } = e, { style: p = "" } = e, { color: g = void 0 } = e, { nonInteractive: m = (o = ze("SMUI:list:nonInteractive")) !== null && o !== void 0 ? o : !1 } = e;
  Ge("SMUI:list:nonInteractive", void 0);
  let { ripple: E = !m } = e, { wrapper: v = !1 } = e, { activated: S = !1 } = e, { role: C = v ? "presentation" : ze("SMUI:list:item:role") } = e;
  Ge("SMUI:list:item:role", void 0);
  let { selected: D = !1 } = e, { disabled: M = !1 } = e, { skipRestoreFocus: _ = !1 } = e, { tabindex: L = c } = e, { inputId: k = "SMUI-form-field-list-" + jm++ } = e, { href: A = void 0 } = e, b, I = {}, T = {}, H = {}, q, j, K = ze("SMUI:list:item:nav"), { component: N = Ut } = e, { tag: R = N === Ut ? K ? A ? "a" : "span" : "li" : void 0 } = e;
  Ge("SMUI:generic:input:props", { id: k }), Ge("SMUI:separator:context", void 0), ft(() => {
    if (!D && !m) {
      let Le = !0, We = b.getElement();
      for (; We.previousSibling; )
        if (We = We.previousSibling, We.nodeType === 1 && We.classList.contains("mdc-deprecated-list-item") && !We.classList.contains("mdc-deprecated-list-item--disabled")) {
          Le = !1;
          break;
        }
      Le && (j = window.requestAnimationFrame(() => be(We)));
    }
    const Y = {
      _smui_list_item_accessor: !0,
      get element() {
        return Ke();
      },
      get selected() {
        return D;
      },
      set selected(Le) {
        n(0, D = Le);
      },
      hasClass: G,
      addClass: oe,
      removeClass: Oe,
      getAttr: Xe,
      addAttr: z,
      removeAttr: x,
      getPrimaryText: W,
      // For inputs within item.
      get checked() {
        var Le;
        return (Le = q && q.checked) !== null && Le !== void 0 ? Le : !1;
      },
      set checked(Le) {
        q && n(16, q.checked = !!Le, q);
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
      action: re,
      get tabindex() {
        return i;
      },
      set tabindex(Le) {
        n(30, L = Le);
      },
      get disabled() {
        return M;
      },
      get activated() {
        return S;
      },
      set activated(Le) {
        n(1, S = Le);
      }
    };
    return _e(Ke(), "SMUIListItem:mount", Y), () => {
      _e(Ke(), "SMUIListItem:unmount", Y);
    };
  }), Qt(() => {
    j && window.cancelAnimationFrame(j);
  });
  function G(Y) {
    return Y in I ? I[Y] : Ke().classList.contains(Y);
  }
  function oe(Y) {
    I[Y] || n(18, I[Y] = !0, I);
  }
  function Oe(Y) {
    (!(Y in I) || I[Y]) && n(18, I[Y] = !1, I);
  }
  function ve(Y, Le) {
    T[Y] != Le && (Le === "" || Le == null ? (delete T[Y], n(19, T)) : n(19, T[Y] = Le, T));
  }
  function Xe(Y) {
    var Le;
    return Y in H ? (Le = H[Y]) !== null && Le !== void 0 ? Le : null : Ke().getAttribute(Y);
  }
  function z(Y, Le) {
    H[Y] !== Le && n(20, H[Y] = Le, H);
  }
  function x(Y) {
    (!(Y in H) || H[Y] != null) && n(20, H[Y] = void 0, H);
  }
  function be(Y) {
    let Le = !0;
    for (; Y.nextElementSibling; )
      if (Y = Y.nextElementSibling, Y.nodeType === 1 && Y.classList.contains("mdc-deprecated-list-item")) {
        const We = Y.attributes.getNamedItem("tabindex");
        if (We && We.value === "0") {
          Le = !1;
          break;
        }
      }
    Le && n(21, i = 0);
  }
  function Se(Y) {
    const Le = Y.key === "Enter", We = Y.key === "Space";
    (Le || We) && re(Y);
  }
  function He(Y) {
    ("_smui_checkbox_accessor" in Y.detail || "_smui_radio_accessor" in Y.detail) && n(16, q = Y.detail);
  }
  function re(Y) {
    M || _e(Ke(), "SMUI:action", Y);
  }
  function W() {
    var Y, Le, We;
    const Pe = Ke(), Ot = Pe.querySelector(".mdc-deprecated-list-item__primary-text");
    if (Ot)
      return (Y = Ot.textContent) !== null && Y !== void 0 ? Y : "";
    const F = Pe.querySelector(".mdc-deprecated-list-item__text");
    return F ? (Le = F.textContent) !== null && Le !== void 0 ? Le : "" : (We = Pe.textContent) !== null && We !== void 0 ? We : "";
  }
  function Ke() {
    return b.getElement();
  }
  function qe(Y) {
    le[Y ? "unshift" : "push"](() => {
      b = Y, n(17, b);
    });
  }
  const gt = () => n(16, q = void 0);
  return t.$$set = (Y) => {
    e = X(X({}, e), nt(Y)), n(29, s = ge(e, r)), "use" in Y && n(2, d = Y.use), "class" in Y && n(3, h = Y.class), "style" in Y && n(4, p = Y.style), "color" in Y && n(5, g = Y.color), "nonInteractive" in Y && n(6, m = Y.nonInteractive), "ripple" in Y && n(7, E = Y.ripple), "wrapper" in Y && n(8, v = Y.wrapper), "activated" in Y && n(1, S = Y.activated), "role" in Y && n(9, C = Y.role), "selected" in Y && n(0, D = Y.selected), "disabled" in Y && n(10, M = Y.disabled), "skipRestoreFocus" in Y && n(11, _ = Y.skipRestoreFocus), "tabindex" in Y && n(30, L = Y.tabindex), "inputId" in Y && n(31, k = Y.inputId), "href" in Y && n(12, A = Y.href), "component" in Y && n(13, N = Y.component), "tag" in Y && n(14, R = Y.tag), "$$scope" in Y && n(37, l = Y.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty[0] & /*tabindexProp, nonInteractive, disabled, selected, input*/
    1073808449 && n(21, i = f(L) ? !m && !M && (D || q && q.checked) ? 0 : -1 : L);
  }, [
    D,
    S,
    d,
    h,
    p,
    g,
    m,
    E,
    v,
    C,
    M,
    _,
    A,
    N,
    R,
    re,
    q,
    b,
    I,
    T,
    H,
    i,
    u,
    K,
    oe,
    Oe,
    ve,
    Se,
    He,
    s,
    L,
    k,
    W,
    Ke,
    a,
    qe,
    gt,
    l
  ];
}
class Wm extends Me {
  constructor(e) {
    super(), De(
      this,
      e,
      qm,
      Gm,
      Ce,
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
Lt({
  class: "mdc-deprecated-list-item__text",
  tag: "span"
});
Lt({
  class: "mdc-deprecated-list-item__primary-text",
  tag: "span"
});
Lt({
  class: "mdc-deprecated-list-item__secondary-text",
  tag: "span"
});
function zm(t) {
  let e, n, i, r, s, a;
  const l = (
    /*#slots*/
    t[8].default
  ), o = Ie(
    l,
    t,
    /*$$scope*/
    t[7],
    null
  );
  let u = [
    {
      class: n = se({
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
      e = ne("span"), o && o.c(), ce(e, c);
    },
    m(f, d) {
      V(f, e, d), o && o.m(e, null), t[9](e), r = !0, s || (a = [
        he(i = xe.call(
          null,
          e,
          /*use*/
          t[0]
        )),
        he(
          /*forwardEvents*/
          t[3].call(null, e)
        )
      ], s = !0);
    },
    p(f, [d]) {
      o && o.p && (!r || d & /*$$scope*/
      128) && Ae(
        o,
        l,
        f,
        /*$$scope*/
        f[7],
        r ? Ee(
          l,
          /*$$scope*/
          f[7],
          d,
          null
        ) : ye(
          /*$$scope*/
          f[7]
        ),
        null
      ), ce(e, c = me(u, [
        (!r || d & /*className*/
        2 && n !== (n = se({
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
      ])), i && pe(i.update) && d & /*use*/
      1 && i.update.call(
        null,
        /*use*/
        f[0]
      );
    },
    i(f) {
      r || (y(o, f), r = !0);
    },
    o(f) {
      O(o, f), r = !1;
    },
    d(f) {
      f && B(e), o && o.d(f), t[9](null), s = !1, Ye(a);
    }
  };
}
function Km(t, e, n) {
  const i = ["use", "class", "getElement"];
  let r = ge(e, i), { $$slots: s = {}, $$scope: a } = e;
  const l = rt(Je());
  let { use: o = [] } = e, { class: u = "" } = e, c, f = ze("SMUI:list:graphic:menu-selection-group");
  function d() {
    return c;
  }
  function h(p) {
    le[p ? "unshift" : "push"](() => {
      c = p, n(2, c);
    });
  }
  return t.$$set = (p) => {
    e = X(X({}, e), nt(p)), n(5, r = ge(e, i)), "use" in p && n(0, o = p.use), "class" in p && n(1, u = p.class), "$$scope" in p && n(7, a = p.$$scope);
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
class Xm extends Me {
  constructor(e) {
    super(), De(this, e, Km, zm, Ce, { use: 0, class: 1, getElement: 6 });
  }
  get getElement() {
    return this.$$.ctx[6];
  }
}
Lt({
  class: "mdc-deprecated-list-item__meta",
  tag: "span"
});
Lt({
  class: "mdc-deprecated-list-group",
  tag: "div"
});
Lt({
  class: "mdc-deprecated-list-group__subheader",
  tag: "h3"
});
Lt({
  class: "mdc-menu__selection-group-icon",
  component: Xm
});
function Ym(t) {
  let e;
  return {
    c() {
      e = ct(
        /*content*/
        t[8]
      );
    },
    m(n, i) {
      V(n, e, i);
    },
    p(n, i) {
      i & /*content*/
      256 && ht(
        e,
        /*content*/
        n[8]
      );
    },
    i: Qe,
    o: Qe,
    d(n) {
      n && B(e);
    }
  };
}
function Zm(t) {
  let e;
  const n = (
    /*#slots*/
    t[13].default
  ), i = Ie(
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
      4096) && Ae(
        i,
        n,
        r,
        /*$$scope*/
        r[12],
        e ? Ee(
          n,
          /*$$scope*/
          r[12],
          s,
          null
        ) : ye(
          /*$$scope*/
          r[12]
        ),
        null
      );
    },
    i(r) {
      e || (y(i, r), e = !0);
    },
    o(r) {
      O(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function Qm(t) {
  let e, n, i, r, s, a, l, o, u;
  const c = [Zm, Ym], f = [];
  function d(g, m) {
    return (
      /*content*/
      g[8] == null ? 0 : 1
    );
  }
  n = d(t), i = f[n] = c[n](t);
  let h = [
    {
      class: r = se({
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
  ], p = {};
  for (let g = 0; g < h.length; g += 1)
    p = X(p, h[g]);
  return {
    c() {
      e = ne("div"), i.c(), ce(e, p);
    },
    m(g, m) {
      V(g, e, m), f[n].m(e, null), t[14](e), l = !0, o || (u = [
        he(a = xe.call(
          null,
          e,
          /*use*/
          t[0]
        )),
        he(
          /*forwardEvents*/
          t[9].call(null, e)
        )
      ], o = !0);
    },
    p(g, [m]) {
      let E = n;
      n = d(g), n === E ? f[n].p(g, m) : (Ue(), O(f[E], 1, 1, () => {
        f[E] = null;
      }), Be(), i = f[n], i ? i.p(g, m) : (i = f[n] = c[n](g), i.c()), y(i, 1), i.m(e, null)), ce(e, p = me(h, [
        (!l || m & /*className, validationMsg, persistent, internalClasses*/
        90 && r !== (r = se({
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
        (!l || m & /*persistent*/
        8 && s !== (s = /*persistent*/
        g[3] ? void 0 : "true")) && { "aria-hidden": s },
        (!l || m & /*id*/
        4) && { id: (
          /*id*/
          g[2]
        ) },
        m & /*internalAttrs*/
        128 && /*internalAttrs*/
        g[7],
        m & /*$$restProps*/
        1024 && /*$$restProps*/
        g[10]
      ])), a && pe(a.update) && m & /*use*/
      1 && a.update.call(
        null,
        /*use*/
        g[0]
      );
    },
    i(g) {
      l || (y(i), l = !0);
    },
    o(g) {
      O(i), l = !1;
    },
    d(g) {
      g && B(e), f[n].d(), t[14](null), o = !1, Ye(u);
    }
  };
}
let Jm = 0;
function xm(t, e, n) {
  const i = ["use", "class", "id", "persistent", "validationMsg", "getElement"];
  let r = ge(e, i), { $$slots: s = {}, $$scope: a } = e;
  const l = rt(Je());
  let { use: o = [] } = e, { class: u = "" } = e, { id: c = "SMUI-select-helper-text-" + Jm++ } = e, { persistent: f = !1 } = e, { validationMsg: d = !1 } = e, h, p, g = {}, m = {}, E;
  ft(() => (p = new Tm({
    addClass: S,
    removeClass: C,
    hasClass: v,
    getAttr: D,
    setAttr: M,
    removeAttr: _,
    setContent: (A) => {
      n(8, E = A);
    }
  }), c.startsWith("SMUI-select-helper-text-") && _e(L(), "SMUISelectHelperText:id", c), _e(L(), "SMUISelectHelperText:mount", p), p.init(), () => {
    _e(L(), "SMUISelectHelperText:unmount", p), p.destroy();
  }));
  function v(A) {
    return A in g ? g[A] : L().classList.contains(A);
  }
  function S(A) {
    g[A] || n(6, g[A] = !0, g);
  }
  function C(A) {
    (!(A in g) || g[A]) && n(6, g[A] = !1, g);
  }
  function D(A) {
    var b;
    return A in m ? (b = m[A]) !== null && b !== void 0 ? b : null : L().getAttribute(A);
  }
  function M(A, b) {
    m[A] !== b && n(7, m[A] = b, m);
  }
  function _(A) {
    (!(A in m) || m[A] != null) && n(7, m[A] = void 0, m);
  }
  function L() {
    return h;
  }
  function k(A) {
    le[A ? "unshift" : "push"](() => {
      h = A, n(5, h);
    });
  }
  return t.$$set = (A) => {
    e = X(X({}, e), nt(A)), n(10, r = ge(e, i)), "use" in A && n(0, o = A.use), "class" in A && n(1, u = A.class), "id" in A && n(2, c = A.id), "persistent" in A && n(3, f = A.persistent), "validationMsg" in A && n(4, d = A.validationMsg), "$$scope" in A && n(12, a = A.$$scope);
  }, [
    o,
    u,
    c,
    f,
    d,
    h,
    g,
    m,
    E,
    l,
    r,
    L,
    a,
    s,
    k
  ];
}
class $m extends Me {
  constructor(e) {
    super(), De(this, e, xm, Qm, Ce, {
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
const ep = (t) => ({}), Ol = (t) => ({}), tp = (t) => ({}), Rl = (t) => ({}), np = (t) => ({}), Dl = (t) => ({}), ip = (t) => ({}), Ml = (t) => ({});
function kl(t) {
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
    Ve(
      /*$$restProps*/
      t[53],
      "input$"
    )
  ], i = {};
  for (let r = 0; r < n.length; r += 1)
    i = X(i, n[r]);
  return {
    c() {
      e = ne("input"), ce(e, i);
    },
    m(r, s) {
      V(r, e, s), e.autofocus && e.focus();
    },
    p(r, s) {
      ce(e, i = me(n, [
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
        4194304 && Ve(
          /*$$restProps*/
          r[53],
          "input$"
        )
      ]));
    },
    d(r) {
      r && B(e);
    }
  };
}
function Fl(t) {
  let e;
  return {
    c() {
      e = ne("span"), P(e, "class", "mdc-select__ripple");
    },
    m(n, i) {
      V(n, e, i);
    },
    d(n) {
      n && B(e);
    }
  };
}
function Nl(t) {
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
    Ve(
      /*$$restProps*/
      t[53],
      "label$"
    )
  ];
  let r = {
    $$slots: { default: [rp] },
    $$scope: { ctx: t }
  };
  for (let s = 0; s < i.length; s += 1)
    r = X(r, i[s]);
  return e = new zi({ props: r }), t[67](e), {
    c() {
      ie(e.$$.fragment);
    },
    m(s, a) {
      ee(e, s, a), n = !0;
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
        4194304 && Fe(Ve(
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
      n || (y(e.$$.fragment, s), n = !0);
    },
    o(s) {
      O(e.$$.fragment, s), n = !1;
    },
    d(s) {
      t[67](null), te(e, s);
    }
  };
}
function rp(t) {
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
  ), s = Ie(
    r,
    t,
    /*$$scope*/
    t[87],
    Ml
  );
  return {
    c() {
      n = ct(e), s && s.c();
    },
    m(a, l) {
      V(a, n, l), s && s.m(a, l), i = !0;
    },
    p(a, l) {
      (!i || l[0] & /*label*/
      512) && e !== (e = /*label*/
      (a[9] == null ? "" : (
        /*label*/
        a[9]
      )) + "") && ht(n, e), s && s.p && (!i || l[2] & /*$$scope*/
      33554432) && Ae(
        s,
        r,
        a,
        /*$$scope*/
        a[87],
        i ? Ee(
          r,
          /*$$scope*/
          a[87],
          l,
          ip
        ) : ye(
          /*$$scope*/
          a[87]
        ),
        Ml
      );
    },
    i(a) {
      i || (y(s, a), i = !0);
    },
    o(a) {
      O(s, a), i = !1;
    },
    d(a) {
      a && B(n), s && s.d(a);
    }
  };
}
function Hl(t) {
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
    Ve(
      /*$$restProps*/
      t[53],
      "outline$"
    )
  ];
  let r = {
    $$slots: { default: [lp] },
    $$scope: { ctx: t }
  };
  for (let s = 0; s < i.length; s += 1)
    r = X(r, i[s]);
  return e = new No({ props: r }), t[69](e), {
    c() {
      ie(e.$$.fragment);
    },
    m(s, a) {
      ee(e, s, a), n = !0;
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
        4194304 && Fe(Ve(
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
      n || (y(e.$$.fragment, s), n = !0);
    },
    o(s) {
      O(e.$$.fragment, s), n = !1;
    },
    d(s) {
      t[69](null), te(e, s);
    }
  };
}
function Pl(t) {
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
    Ve(
      /*$$restProps*/
      t[53],
      "label$"
    )
  ];
  let r = {
    $$slots: { default: [sp] },
    $$scope: { ctx: t }
  };
  for (let s = 0; s < i.length; s += 1)
    r = X(r, i[s]);
  return e = new zi({ props: r }), t[68](e), {
    c() {
      ie(e.$$.fragment);
    },
    m(s, a) {
      ee(e, s, a), n = !0;
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
        4194304 && Fe(Ve(
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
      n || (y(e.$$.fragment, s), n = !0);
    },
    o(s) {
      O(e.$$.fragment, s), n = !1;
    },
    d(s) {
      t[68](null), te(e, s);
    }
  };
}
function sp(t) {
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
  ), s = Ie(
    r,
    t,
    /*$$scope*/
    t[87],
    Dl
  );
  return {
    c() {
      n = ct(e), s && s.c();
    },
    m(a, l) {
      V(a, n, l), s && s.m(a, l), i = !0;
    },
    p(a, l) {
      (!i || l[0] & /*label*/
      512) && e !== (e = /*label*/
      (a[9] == null ? "" : (
        /*label*/
        a[9]
      )) + "") && ht(n, e), s && s.p && (!i || l[2] & /*$$scope*/
      33554432) && Ae(
        s,
        r,
        a,
        /*$$scope*/
        a[87],
        i ? Ee(
          r,
          /*$$scope*/
          a[87],
          l,
          np
        ) : ye(
          /*$$scope*/
          a[87]
        ),
        Dl
      );
    },
    i(a) {
      i || (y(s, a), i = !0);
    },
    o(a) {
      O(s, a), i = !1;
    },
    d(a) {
      a && B(n), s && s.d(a);
    }
  };
}
function lp(t) {
  let e, n, i = !/*noLabel*/
  t[8] && /*label*/
  (t[9] != null || /*$$slots*/
  t[54].label) && Pl(t);
  return {
    c() {
      i && i.c(), e = Ze();
    },
    m(r, s) {
      i && i.m(r, s), V(r, e, s), n = !0;
    },
    p(r, s) {
      !/*noLabel*/
      r[8] && /*label*/
      (r[9] != null || /*$$slots*/
      r[54].label) ? i ? (i.p(r, s), s[0] & /*noLabel, label*/
      768 | s[1] & /*$$slots*/
      8388608 && y(i, 1)) : (i = Pl(r), i.c(), y(i, 1), i.m(e.parentNode, e)) : i && (Ue(), O(i, 1, 1, () => {
        i = null;
      }), Be());
    },
    i(r) {
      n || (y(i), n = !0);
    },
    o(r) {
      O(i), n = !1;
    },
    d(r) {
      r && B(e), i && i.d(r);
    }
  };
}
function wl(t) {
  let e, n;
  const i = [Ve(
    /*$$restProps*/
    t[53],
    "ripple$"
  )];
  let r = {};
  for (let s = 0; s < i.length; s += 1)
    r = X(r, i[s]);
  return e = new Fo({ props: r }), t[70](e), {
    c() {
      ie(e.$$.fragment);
    },
    m(s, a) {
      ee(e, s, a), n = !0;
    },
    p(s, a) {
      const l = a[1] & /*$$restProps*/
      4194304 ? me(i, [Fe(Ve(
        /*$$restProps*/
        s[53],
        "ripple$"
      ))]) : {};
      e.$set(l);
    },
    i(s) {
      n || (y(e.$$.fragment, s), n = !0);
    },
    o(s) {
      O(e.$$.fragment, s), n = !1;
    },
    d(s) {
      t[70](null), te(e, s);
    }
  };
}
function ap(t) {
  let e;
  const n = (
    /*#slots*/
    t[64].default
  ), i = Ie(
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
      33554432) && Ae(
        i,
        n,
        r,
        /*$$scope*/
        r[87],
        e ? Ee(
          n,
          /*$$scope*/
          r[87],
          s,
          null
        ) : ye(
          /*$$scope*/
          r[87]
        ),
        null
      );
    },
    i(r) {
      e || (y(i, r), e = !0);
    },
    o(r) {
      O(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function op(t) {
  let e, n, i;
  const r = [
    { role: "listbox" },
    { wrapFocus: (
      /*wrapFocus*/
      t[35]
    ) },
    Ve(
      /*$$restProps*/
      t[53],
      "list$"
    )
  ];
  function s(l) {
    t[75](l);
  }
  let a = {
    $$slots: { default: [ap] },
    $$scope: { ctx: t }
  };
  for (let l = 0; l < r.length; l += 1)
    a = X(a, r[l]);
  return (
    /*selectedIndex*/
    t[24] !== void 0 && (a.selectedIndex = /*selectedIndex*/
    t[24]), e = new Bm({ props: a }), le.push(() => vt(e, "selectedIndex", s)), e.$on(
      "SMUIList:mount",
      /*SMUIList_mount_handler*/
      t[76]
    ), {
      c() {
        ie(e.$$.fragment);
      },
      m(l, o) {
        ee(e, l, o), i = !0;
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
          4194304 && Fe(Ve(
            /*$$restProps*/
            l[53],
            "list$"
          ))
        ]) : {};
        o[2] & /*$$scope*/
        33554432 && (u.$$scope = { dirty: o, ctx: l }), !n && o[0] & /*selectedIndex*/
        16777216 && (n = !0, u.selectedIndex = /*selectedIndex*/
        l[24], bt(() => n = !1)), e.$set(u);
      },
      i(l) {
        i || (y(e.$$.fragment, l), i = !0);
      },
      o(l) {
        O(e.$$.fragment, l), i = !1;
      },
      d(l) {
        te(e, l);
      }
    }
  );
}
function Ul(t) {
  let e, n;
  const i = [Ve(
    /*$$restProps*/
    t[53],
    "helperText$"
  )];
  let r = {
    $$slots: { default: [up] },
    $$scope: { ctx: t }
  };
  for (let s = 0; s < i.length; s += 1)
    r = X(r, i[s]);
  return e = new $m({ props: r }), e.$on(
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
      ie(e.$$.fragment);
    },
    m(s, a) {
      ee(e, s, a), n = !0;
    },
    p(s, a) {
      const l = a[1] & /*$$restProps*/
      4194304 ? me(i, [Fe(Ve(
        /*$$restProps*/
        s[53],
        "helperText$"
      ))]) : {};
      a[2] & /*$$scope*/
      33554432 && (l.$$scope = { dirty: a, ctx: s }), e.$set(l);
    },
    i(s) {
      n || (y(e.$$.fragment, s), n = !0);
    },
    o(s) {
      O(e.$$.fragment, s), n = !1;
    },
    d(s) {
      te(e, s);
    }
  };
}
function up(t) {
  let e;
  const n = (
    /*#slots*/
    t[64].helperText
  ), i = Ie(
    n,
    t,
    /*$$scope*/
    t[87],
    Ol
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
      33554432) && Ae(
        i,
        n,
        r,
        /*$$scope*/
        r[87],
        e ? Ee(
          n,
          /*$$scope*/
          r[87],
          s,
          ep
        ) : ye(
          /*$$scope*/
          r[87]
        ),
        Ol
      );
    },
    i(r) {
      e || (y(i, r), e = !0);
    },
    o(r) {
      O(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function cp(t) {
  let e, n, i, r, s, a, l, o, u, c, f, d, h, p, g, m, E, v, S, C, D, M, _, L, k, A, b, I, T, H, q, j, K, N, R, G, oe, Oe, ve, Xe, z, x = (
    /*hiddenInput*/
    t[12] && kl(t)
  ), be = (
    /*variant*/
    t[7] === "filled" && Fl()
  ), Se = (
    /*variant*/
    t[7] !== "outlined" && !/*noLabel*/
    t[8] && /*label*/
    (t[9] != null || /*$$slots*/
    t[54].label) && Nl(t)
  ), He = (
    /*variant*/
    t[7] === "outlined" && Hl(t)
  );
  const re = (
    /*#slots*/
    t[64].leadingIcon
  ), W = Ie(
    re,
    t,
    /*$$scope*/
    t[87],
    Rl
  );
  let Ke = [
    {
      id: f = /*inputId*/
      t[11] + "-smui-selected-text"
    },
    {
      class: d = se({
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
    Ve(
      /*$$restProps*/
      t[53],
      "selectedText$"
    )
  ], qe = {};
  for (let ke = 0; ke < Ke.length; ke += 1)
    qe = X(qe, Ke[ke]);
  let gt = [
    {
      class: g = se({
        [
          /*selectedTextContainer$class*/
          t[17]
        ]: !0,
        "mdc-select__selected-text-container": !0
      })
    },
    Ve(
      /*$$restProps*/
      t[53],
      "selectedTextContainer$"
    )
  ], Y = {};
  for (let ke = 0; ke < gt.length; ke += 1)
    Y = X(Y, gt[ke]);
  let Le = [
    {
      class: M = se({
        [
          /*dropdownIcon$class*/
          t[21]
        ]: !0,
        "mdc-select__dropdown-icon": !0
      })
    },
    Ve(
      /*$$restProps*/
      t[53],
      "dropdownIcon$"
    )
  ], We = {};
  for (let ke = 0; ke < Le.length; ke += 1)
    We = X(We, Le[ke]);
  let Pe = (
    /*variant*/
    t[7] !== "outlined" && /*ripple*/
    t[5] && wl(t)
  ), Ot = [
    {
      class: k = se({
        [
          /*anchor$class*/
          t[15]
        ]: !0,
        "mdc-select__anchor": !0
      })
    },
    {
      "aria-required": A = /*required*/
      t[10] ? "true" : void 0
    },
    {
      "aria-disabled": b = /*disabled*/
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
    Ve(
      /*$$restProps*/
      t[53],
      "anchor$"
    )
  ], F = {};
  for (let ke = 0; ke < Ot.length; ke += 1)
    F = X(F, Ot[ke]);
  const $ = [
    {
      class: se({
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
    Ve(
      /*$$restProps*/
      t[53],
      "menu$"
    )
  ];
  function Q(ke) {
    t[77](ke);
  }
  let je = {
    $$slots: { default: [op] },
    $$scope: { ctx: t }
  };
  for (let ke = 0; ke < $.length; ke += 1)
    je = X(je, $[ke]);
  /*menuOpen*/
  t[31] !== void 0 && (je.open = /*menuOpen*/
  t[31]), q = new Hm({ props: je }), le.push(() => vt(q, "open", Q)), q.$on(
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
  let mt = [
    {
      class: K = se({
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
      style: N = Object.entries(
        /*internalStyles*/
        t[27]
      ).map(Bl).concat([
        /*style*/
        t[4]
      ]).join(" ")
    },
    Kt(
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
  ], dt = {};
  for (let ke = 0; ke < mt.length; ke += 1)
    dt = X(dt, mt[ke]);
  let et = (
    /*$$slots*/
    t[54].helperText && Ul(t)
  );
  return {
    c() {
      e = ne("div"), x && x.c(), n = ae(), i = ne("div"), be && be.c(), r = ae(), Se && Se.c(), s = ae(), He && He.c(), a = ae(), W && W.c(), l = ae(), o = ne("span"), u = ne("span"), c = ct(
        /*$selectedTextStore*/
        t[42]
      ), E = ae(), v = ne("span"), S = ut("svg"), C = ut("polygon"), D = ut("polygon"), L = ae(), Pe && Pe.c(), H = ae(), ie(q.$$.fragment), oe = ae(), et && et.c(), Oe = Ze(), ce(u, qe), ce(o, Y), P(C, "class", "mdc-select__dropdown-icon-inactive"), P(C, "stroke", "none"), P(C, "fill-rule", "evenodd"), P(C, "points", "7 10 12 15 17 10"), P(D, "class", "mdc-select__dropdown-icon-active"), P(D, "stroke", "none"), P(D, "fill-rule", "evenodd"), P(D, "points", "7 15 12 10 17 15"), P(S, "class", "mdc-select__dropdown-icon-graphic"), P(S, "viewBox", "7 10 10 5"), P(S, "focusable", "false"), ce(v, We), ce(i, F), ce(e, dt);
    },
    m(ke, de) {
      V(ke, e, de), x && x.m(e, null), J(e, n), J(e, i), be && be.m(i, null), J(i, r), Se && Se.m(i, null), J(i, s), He && He.m(i, null), J(i, a), W && W.m(i, null), J(i, l), J(i, o), J(o, u), J(u, c), J(i, E), J(i, v), J(v, S), J(S, C), J(S, D), J(i, L), Pe && Pe.m(i, null), t[71](i), J(e, H), ee(q, e, null), t[82](e), V(ke, oe, de), et && et.m(ke, de), V(ke, Oe, de), ve = !0, Xe || (z = [
        he(p = xe.call(
          null,
          u,
          /*selectedText$use*/
          t[18]
        )),
        he(m = xe.call(
          null,
          o,
          /*selectedTextContainer$use*/
          t[16]
        )),
        he(_ = xe.call(
          null,
          v,
          /*dropdownIcon$use*/
          t[20]
        )),
        he(T = xe.call(
          null,
          i,
          /*anchor$use*/
          t[14]
        )),
        ue(
          i,
          "focus",
          /*focus_handler_1*/
          t[72]
        ),
        ue(
          i,
          "blur",
          /*blur_handler_1*/
          t[73]
        ),
        ue(
          i,
          "click",
          /*click_handler*/
          t[74]
        ),
        ue(i, "keydown", function() {
          pe(
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
        ue(
          i,
          "focus",
          /*focus_handler*/
          t[65]
        ),
        ue(
          i,
          "blur",
          /*blur_handler*/
          t[66]
        ),
        he(R = Ft.call(null, e, {
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
        he(Mm.call(null, e, {
          addClass: (
            /*addClass*/
            t[50]
          ),
          removeClass: (
            /*removeClass*/
            t[51]
          )
        })),
        he(G = xe.call(
          null,
          e,
          /*use*/
          t[2]
        )),
        he(
          /*forwardEvents*/
          t[43].call(null, e)
        ),
        ue(
          e,
          "SMUISelectLeadingIcon:mount",
          /*handleLeadingIconMount*/
          t[49]
        ),
        ue(
          e,
          "SMUISelectLeadingIcon:unmount",
          /*SMUISelectLeadingIcon_unmount_handler*/
          t[83]
        )
      ], Xe = !0);
    },
    p(ke, de) {
      t = ke, /*hiddenInput*/
      t[12] ? x ? x.p(t, de) : (x = kl(t), x.c(), x.m(e, n)) : x && (x.d(1), x = null), /*variant*/
      t[7] === "filled" ? be || (be = Fl(), be.c(), be.m(i, r)) : be && (be.d(1), be = null), /*variant*/
      t[7] !== "outlined" && !/*noLabel*/
      t[8] && /*label*/
      (t[9] != null || /*$$slots*/
      t[54].label) ? Se ? (Se.p(t, de), de[0] & /*variant, noLabel, label*/
      896 | de[1] & /*$$slots*/
      8388608 && y(Se, 1)) : (Se = Nl(t), Se.c(), y(Se, 1), Se.m(i, s)) : Se && (Ue(), O(Se, 1, 1, () => {
        Se = null;
      }), Be()), /*variant*/
      t[7] === "outlined" ? He ? (He.p(t, de), de[0] & /*variant*/
      128 && y(He, 1)) : (He = Hl(t), He.c(), y(He, 1), He.m(i, a)) : He && (Ue(), O(He, 1, 1, () => {
        He = null;
      }), Be()), W && W.p && (!ve || de[2] & /*$$scope*/
      33554432) && Ae(
        W,
        re,
        t,
        /*$$scope*/
        t[87],
        ve ? Ee(
          re,
          /*$$scope*/
          t[87],
          de,
          tp
        ) : ye(
          /*$$scope*/
          t[87]
        ),
        Rl
      ), (!ve || de[1] & /*$selectedTextStore*/
      2048) && Lu(
        c,
        /*$selectedTextStore*/
        t[42],
        qe.contenteditable
      ), ce(u, qe = me(Ke, [
        (!ve || de[0] & /*inputId*/
        2048 && f !== (f = /*inputId*/
        t[11] + "-smui-selected-text")) && { id: f },
        (!ve || de[0] & /*selectedText$class*/
        524288 && d !== (d = se({
          [
            /*selectedText$class*/
            t[19]
          ]: !0,
          "mdc-select__selected-text": !0
        }))) && { class: d },
        { role: "button" },
        { "aria-haspopup": "listbox" },
        (!ve || de[0] & /*inputId*/
        2048 && h !== (h = /*inputId*/
        t[11] + "-smui-label")) && {
          "aria-labelledby": h
        },
        de[1] & /*$$restProps*/
        4194304 && Ve(
          /*$$restProps*/
          t[53],
          "selectedText$"
        )
      ])), p && pe(p.update) && de[0] & /*selectedText$use*/
      262144 && p.update.call(
        null,
        /*selectedText$use*/
        t[18]
      ), ce(o, Y = me(gt, [
        (!ve || de[0] & /*selectedTextContainer$class*/
        131072 && g !== (g = se({
          [
            /*selectedTextContainer$class*/
            t[17]
          ]: !0,
          "mdc-select__selected-text-container": !0
        }))) && { class: g },
        de[1] & /*$$restProps*/
        4194304 && Ve(
          /*$$restProps*/
          t[53],
          "selectedTextContainer$"
        )
      ])), m && pe(m.update) && de[0] & /*selectedTextContainer$use*/
      65536 && m.update.call(
        null,
        /*selectedTextContainer$use*/
        t[16]
      ), ce(v, We = me(Le, [
        (!ve || de[0] & /*dropdownIcon$class*/
        2097152 && M !== (M = se({
          [
            /*dropdownIcon$class*/
            t[21]
          ]: !0,
          "mdc-select__dropdown-icon": !0
        }))) && { class: M },
        de[1] & /*$$restProps*/
        4194304 && Ve(
          /*$$restProps*/
          t[53],
          "dropdownIcon$"
        )
      ])), _ && pe(_.update) && de[0] & /*dropdownIcon$use*/
      1048576 && _.update.call(
        null,
        /*dropdownIcon$use*/
        t[20]
      ), /*variant*/
      t[7] !== "outlined" && /*ripple*/
      t[5] ? Pe ? (Pe.p(t, de), de[0] & /*variant, ripple*/
      160 && y(Pe, 1)) : (Pe = wl(t), Pe.c(), y(Pe, 1), Pe.m(i, null)) : Pe && (Ue(), O(Pe, 1, 1, () => {
        Pe = null;
      }), Be()), ce(i, F = me(Ot, [
        (!ve || de[0] & /*anchor$class*/
        32768 && k !== (k = se({
          [
            /*anchor$class*/
            t[15]
          ]: !0,
          "mdc-select__anchor": !0
        }))) && { class: k },
        (!ve || de[0] & /*required*/
        1024 && A !== (A = /*required*/
        t[10] ? "true" : void 0)) && {
          "aria-required": A
        },
        (!ve || de[0] & /*disabled*/
        64 && b !== (b = /*disabled*/
        t[6] ? "true" : void 0)) && {
          "aria-disabled": b
        },
        { "aria-controls": (
          /*menuId*/
          t[45]
        ) },
        (!ve || de[1] & /*menuOpen*/
        1 && I !== (I = /*menuOpen*/
        t[31] ? "true" : "false")) && {
          "aria-expanded": I
        },
        (!ve || de[0] & /*helperId*/
        1073741824) && { "aria-describedby": (
          /*helperId*/
          t[30]
        ) },
        { role: "combobox" },
        { tabindex: "0" },
        de[0] & /*selectAnchorAttrs*/
        536870912 && /*selectAnchorAttrs*/
        t[29],
        de[1] & /*$$restProps*/
        4194304 && Ve(
          /*$$restProps*/
          t[53],
          "anchor$"
        )
      ])), T && pe(T.update) && de[0] & /*anchor$use*/
      16384 && T.update.call(
        null,
        /*anchor$use*/
        t[14]
      );
      const qt = de[0] & /*menu$class*/
      4194304 | de[1] & /*menuClasses, menuId, anchorElement, anchorCorner, $$restProps*/
      4210702 ? me($, [
        de[0] & /*menu$class*/
        4194304 | de[1] & /*menuClasses*/
        2 && {
          class: se({
            [
              /*menu$class*/
              t[22]
            ]: !0,
            "mdc-select__menu": !0,
            .../*menuClasses*/
            t[32]
          })
        },
        de[1] & /*menuId*/
        16384 && { id: (
          /*menuId*/
          t[45]
        ) },
        $[2],
        $[3],
        de[1] & /*anchorElement*/
        4 && { anchorElement: (
          /*anchorElement*/
          t[33]
        ) },
        de[1] & /*anchorCorner*/
        8 && { anchorCorner: (
          /*anchorCorner*/
          t[34]
        ) },
        de[1] & /*$$restProps*/
        4194304 && Fe(Ve(
          /*$$restProps*/
          t[53],
          "menu$"
        ))
      ]) : {};
      de[0] & /*selectedIndex*/
      16777216 | de[1] & /*wrapFocus, $$restProps, list*/
      4194352 | de[2] & /*$$scope*/
      33554432 && (qt.$$scope = { dirty: de, ctx: t }), !j && de[1] & /*menuOpen*/
      1 && (j = !0, qt.open = /*menuOpen*/
      t[31], bt(() => j = !1)), q.$set(qt), ce(e, dt = me(mt, [
        (!ve || de[0] & /*className, required, disabled, variant, withLeadingIcon, noLabel, label, invalid, internalClasses*/
        67119050 | de[1] & /*$$slots, menuOpen*/
        8388609 && K !== (K = se({
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
        (!ve || de[0] & /*internalStyles, style*/
        134217744 && N !== (N = Object.entries(
          /*internalStyles*/
          t[27]
        ).map(Bl).concat([
          /*style*/
          t[4]
        ]).join(" "))) && { style: N },
        de[1] & /*$$restProps*/
        4194304 && Kt(
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
      ])), R && pe(R.update) && de[0] & /*variant*/
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
      }), G && pe(G.update) && de[0] & /*use*/
      4 && G.update.call(
        null,
        /*use*/
        t[2]
      ), /*$$slots*/
      t[54].helperText ? et ? (et.p(t, de), de[1] & /*$$slots*/
      8388608 && y(et, 1)) : (et = Ul(t), et.c(), y(et, 1), et.m(Oe.parentNode, Oe)) : et && (Ue(), O(et, 1, 1, () => {
        et = null;
      }), Be());
    },
    i(ke) {
      ve || (y(Se), y(He), y(W, ke), y(Pe), y(q.$$.fragment, ke), y(et), ve = !0);
    },
    o(ke) {
      O(Se), O(He), O(W, ke), O(Pe), O(q.$$.fragment, ke), O(et), ve = !1;
    },
    d(ke) {
      ke && (B(e), B(oe), B(Oe)), x && x.d(), be && be.d(), Se && Se.d(), He && He.d(), W && W.d(ke), Pe && Pe.d(), t[71](null), te(q), t[82](null), et && et.d(ke), Xe = !1, Ye(z);
    }
  };
}
let fp = 0;
function dp(t) {
  const e = t.currentTarget.getBoundingClientRect();
  return (hp(t) ? t.touches[0].clientX : t.clientX) - e.left;
}
function hp(t) {
  return "touches" in t;
}
const Bl = ([t, e]) => `${t}: ${e};`;
function mp(t, e, n) {
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
  let r = ge(e, i), s, a, { $$slots: l = {}, $$scope: o } = e;
  const u = es(l);
  var c;
  const f = rt(Je());
  let d = () => {
  };
  function h(U) {
    return U === d;
  }
  let { use: p = [] } = e, { class: g = "" } = e, { style: m = "" } = e, { ripple: E = !0 } = e, { disabled: v = !1 } = e, { variant: S = "standard" } = e, { noLabel: C = !1 } = e, { label: D = void 0 } = e, { value: M = "" } = e, { key: _ = (U) => U } = e, { dirty: L = !1 } = e, { invalid: k = d } = e, { updateInvalid: A = h(k) } = e;
  const b = h(k);
  h(k) && (k = !1);
  let { required: I = !1 } = e, { inputId: T = "SMUI-select-" + fp++ } = e, { hiddenInput: H = !1 } = e, { withLeadingIcon: q = d } = e, { anchor$use: j = [] } = e, { anchor$class: K = "" } = e, { selectedTextContainer$use: N = [] } = e, { selectedTextContainer$class: R = "" } = e, { selectedText$use: G = [] } = e, { selectedText$class: oe = "" } = e, { dropdownIcon$use: Oe = [] } = e, { dropdownIcon$class: ve = "" } = e, { menu$class: Xe = "" } = e, z, x, be = {}, Se = {}, He, re = {}, W = -1, Ke = (c = r.menu$id) !== null && c !== void 0 ? c : T + "-menu", qe, gt = ze("SMUI:addLayoutListener"), Y, Le = !1, We = {}, Pe, Ot, F = !1, $, Q = ze("SMUI:select:context"), je, mt, dt, et, ke;
  Ge("SMUI:list:role", ""), Ge("SMUI:list:nav", !1);
  const de = At("");
  st(t, de, (U) => n(42, s = U)), Ge("SMUI:select:selectedText", de);
  const qt = At(M);
  st(t, qt, (U) => n(90, a = U)), Ge("SMUI:select:value", qt);
  let Z = W;
  gt && (Y = gt(Ei)), ft(() => (n(23, x = new Sm(
    {
      // getSelectAdapterMethods
      // getMenuItemAttr: (menuItem: Element, attr: string) =>
      //   menuItem.getAttribute(attr),
      setSelectedText: (U) => {
        kt(de, s = U, s);
      },
      isSelectAnchorFocused: () => document.activeElement === He,
      getSelectAnchorAttr: Zi,
      setSelectAnchorAttr: Qi,
      removeSelectAnchorAttr: Ji,
      addMenuClass: Xi,
      removeMenuClass: Yi,
      openMenu: () => {
        n(31, Le = !0);
      },
      closeMenu: () => {
        n(31, Le = !1);
      },
      getAnchorElement: () => He,
      setMenuAnchorElement: (U) => {
        n(33, Pe = U);
      },
      setMenuAnchorCorner: (U) => {
        n(34, Ot = U);
      },
      setMenuWrapFocus: (U) => {
        n(35, F = U);
      },
      getSelectedIndex: () => W,
      setSelectedIndex: (U) => {
        n(63, Z = U), n(24, W = U), n(0, M = kn()[W]);
      },
      focusMenuItemAtIndex: (U) => {
        $.focusItemAtIndex(U);
      },
      getMenuItemCount: () => $.items.length,
      getMenuItemValues: () => kn().map(_),
      getMenuItemTextAtIndex: (U) => $.getPrimaryTextAtIndex(U),
      isTypeaheadInProgress: () => $.typeaheadInProgress,
      typeaheadMatchItem: (U, Vt) => $.typeaheadMatchItem(U, Vt),
      // getCommonAdapterMethods
      addClass: lt,
      removeClass: nn,
      hasClass: Re,
      setRippleCenter: (U) => et && et.setRippleCenter(U),
      activateBottomLine: () => et && et.activate(),
      deactivateBottomLine: () => et && et.deactivate(),
      notifyChange: (U) => {
        n(55, L = !0), A && n(1, k = !x.isValid()), _e(Fn(), "SMUISelect:change", { value: M, index: W }, void 0, !0);
      },
      // getOutlineAdapterMethods
      hasOutline: () => !!ke,
      notchOutline: (U) => ke && ke.notch(U),
      closeOutline: () => ke && ke.closeNotch(),
      // getLabelAdapterMethods
      hasLabel: () => !!dt,
      floatLabel: (U) => dt && dt.float(U),
      getLabelWidth: () => dt ? dt.getWidth() : 0,
      setLabelRequired: (U) => dt && dt.setRequired(U)
    },
    {
      get helperText() {
        return mt;
      },
      get leadingIcon() {
        return je;
      }
    }
  )), n(24, W = kn().indexOf(M)), x.init(), Ii(b), () => {
    x.destroy();
  })), Qt(() => {
    Y && Y();
  });
  function Te(U) {
    n(37, je = U.detail);
  }
  function Re(U) {
    return U in be ? be[U] : Fn().classList.contains(U);
  }
  function lt(U) {
    be[U] || n(26, be[U] = !0, be);
  }
  function nn(U) {
    (!(U in be) || be[U]) && n(26, be[U] = !1, be);
  }
  function ti(U, Vt) {
    Se[U] != Vt && (Vt === "" || Vt == null ? (delete Se[U], n(27, Se)) : n(27, Se[U] = Vt, Se));
  }
  function Xi(U) {
    We[U] || n(32, We[U] = !0, We);
  }
  function Yi(U) {
    (!(U in We) || We[U]) && n(32, We[U] = !1, We);
  }
  function Zi(U) {
    var Vt;
    return U in re ? (Vt = re[U]) !== null && Vt !== void 0 ? Vt : null : Fn().getAttribute(U);
  }
  function Qi(U, Vt) {
    re[U] !== Vt && n(29, re[U] = Vt, re);
  }
  function Ji(U) {
    (!(U in re) || re[U] != null) && n(29, re[U] = void 0, re);
  }
  function kn() {
    return $.getOrderedList().map((U) => U.getValue());
  }
  function xi() {
    return x.getUseDefaultValidation();
  }
  function Ii(U) {
    x.setUseDefaultValidation(U);
  }
  function $i() {
    He.focus();
  }
  function Ei() {
    x.layout();
  }
  function Fn() {
    return z;
  }
  function er(U) {
    Kn.call(this, t, U);
  }
  function tr(U) {
    Kn.call(this, t, U);
  }
  function nr(U) {
    le[U ? "unshift" : "push"](() => {
      dt = U, n(39, dt);
    });
  }
  function ir(U) {
    le[U ? "unshift" : "push"](() => {
      dt = U, n(39, dt);
    });
  }
  function rr(U) {
    le[U ? "unshift" : "push"](() => {
      ke = U, n(41, ke);
    });
  }
  function sr(U) {
    le[U ? "unshift" : "push"](() => {
      et = U, n(40, et);
    });
  }
  function lr(U) {
    le[U ? "unshift" : "push"](() => {
      He = U, n(28, He);
    });
  }
  const ar = () => x && x.handleFocus(), or = () => x && x.handleBlur(), ur = (U) => {
    He.focus(), x && x.handleClick(dp(U));
  };
  function cr(U) {
    W = U, n(24, W);
  }
  const fr = (U) => n(36, $ = U.detail);
  function dr(U) {
    Le = U, n(31, Le);
  }
  const hr = (U) => x && x.handleMenuItemAction(U.detail.index), mr = () => x && x.handleMenuClosing(), w = () => x && x.handleMenuClosed(), It = () => x && x.handleMenuOpened();
  function Ai(U) {
    le[U ? "unshift" : "push"](() => {
      z = U, n(25, z);
    });
  }
  const pr = () => n(37, je = void 0), ni = (U) => n(30, qe = U.detail), ii = (U) => n(38, mt = U.detail), pu = () => {
    n(30, qe = void 0), n(38, mt = void 0);
  };
  return t.$$set = (U) => {
    e = X(X({}, e), nt(U)), n(53, r = ge(e, i)), "use" in U && n(2, p = U.use), "class" in U && n(3, g = U.class), "style" in U && n(4, m = U.style), "ripple" in U && n(5, E = U.ripple), "disabled" in U && n(6, v = U.disabled), "variant" in U && n(7, S = U.variant), "noLabel" in U && n(8, C = U.noLabel), "label" in U && n(9, D = U.label), "value" in U && n(0, M = U.value), "key" in U && n(56, _ = U.key), "dirty" in U && n(55, L = U.dirty), "invalid" in U && n(1, k = U.invalid), "updateInvalid" in U && n(57, A = U.updateInvalid), "required" in U && n(10, I = U.required), "inputId" in U && n(11, T = U.inputId), "hiddenInput" in U && n(12, H = U.hiddenInput), "withLeadingIcon" in U && n(13, q = U.withLeadingIcon), "anchor$use" in U && n(14, j = U.anchor$use), "anchor$class" in U && n(15, K = U.anchor$class), "selectedTextContainer$use" in U && n(16, N = U.selectedTextContainer$use), "selectedTextContainer$class" in U && n(17, R = U.selectedTextContainer$class), "selectedText$use" in U && n(18, G = U.selectedText$use), "selectedText$class" in U && n(19, oe = U.selectedText$class), "dropdownIcon$use" in U && n(20, Oe = U.dropdownIcon$use), "dropdownIcon$class" in U && n(21, ve = U.dropdownIcon$class), "menu$class" in U && n(22, Xe = U.menu$class), "$$scope" in U && n(87, o = U.$$scope);
  }, t.$$.update = () => {
    if (t.$$.dirty[0] & /*selectedIndex, instance, value*/
    25165825 | t.$$.dirty[2] & /*previousSelectedIndex*/
    2 && Z !== W)
      if (n(63, Z = W), x)
        x.setSelectedIndex(
          W,
          /* closeMenu */
          !1,
          /* skipNotify */
          !0
        );
      else {
        const U = kn();
        M !== U[W] && n(0, M = U[W]);
      }
    t.$$.dirty[0] & /*value*/
    1 && kt(qt, a = M, a), t.$$.dirty[0] & /*instance, value*/
    8388609 | t.$$.dirty[1] & /*key*/
    33554432 && x && x.getValue() !== _(M) && x.setValue(_(M)), t.$$.dirty[0] & /*instance, disabled*/
    8388672 && x && x.getDisabled() !== v && x.setDisabled(v), t.$$.dirty[0] & /*instance, invalid*/
    8388610 | t.$$.dirty[1] & /*dirty, updateInvalid*/
    83886080 && x && L && x.isValid() !== !k && (A ? n(1, k = !x.isValid()) : x.setValid(!k)), t.$$.dirty[0] & /*instance, required*/
    8389632 && x && x.getRequired() !== I && x.setRequired(I);
  }, [
    M,
    k,
    p,
    g,
    m,
    E,
    v,
    S,
    C,
    D,
    I,
    T,
    H,
    q,
    j,
    K,
    N,
    R,
    G,
    oe,
    Oe,
    ve,
    Xe,
    x,
    W,
    z,
    be,
    Se,
    He,
    re,
    qe,
    Le,
    We,
    Pe,
    Ot,
    F,
    $,
    je,
    mt,
    dt,
    et,
    ke,
    s,
    f,
    h,
    Ke,
    Q,
    de,
    qt,
    Te,
    lt,
    nn,
    ti,
    r,
    u,
    L,
    _,
    A,
    xi,
    Ii,
    $i,
    Ei,
    Fn,
    Z,
    l,
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
    hr,
    mr,
    w,
    It,
    Ai,
    pr,
    ni,
    ii,
    pu,
    o
  ];
}
class pp extends Me {
  constructor(e) {
    super(), De(
      this,
      e,
      mp,
      cp,
      Ce,
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
function gp(t) {
  let e;
  const n = (
    /*#slots*/
    t[11].default
  ), i = Ie(
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
      8192) && Ae(
        i,
        n,
        r,
        /*$$scope*/
        r[13],
        e ? Ee(
          n,
          /*$$scope*/
          r[13],
          s,
          null
        ) : ye(
          /*$$scope*/
          r[13]
        ),
        null
      );
    },
    i(r) {
      e || (y(i, r), e = !0);
    },
    o(r) {
      O(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function _p(t) {
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
    $$slots: { default: [gp] },
    $$scope: { ctx: t }
  };
  for (let s = 0; s < i.length; s += 1)
    r = X(r, i[s]);
  return e = new Wm({ props: r }), t[12](e), {
    c() {
      ie(e.$$.fragment);
    },
    m(s, a) {
      ee(e, s, a), n = !0;
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
        64 && Fe(
          /*$$restProps*/
          s[6]
        )
      ]) : {};
      a & /*$$scope*/
      8192 && (l.$$scope = { dirty: a, ctx: s }), e.$set(l);
    },
    i(s) {
      n || (y(e.$$.fragment, s), n = !0);
    },
    o(s) {
      O(e.$$.fragment, s), n = !1;
    },
    d(s) {
      t[12](null), te(e, s);
    }
  };
}
function bp(t, e, n) {
  let i, r;
  const s = ["use", "class", "value", "getElement"];
  let a = ge(e, s), l, o, { $$slots: u = {}, $$scope: c } = e;
  const f = rt(Je());
  let { use: d = [] } = e;
  const h = "";
  let { value: p = "" } = e, g;
  const m = ze("SMUI:select:selectedText");
  st(t, m, (D) => n(14, l = D));
  const E = ze("SMUI:select:value");
  st(t, E, (D) => n(10, o = D)), Ge("SMUI:list:item:role", "option"), ft(v), Qt(v);
  function v() {
    r && g && kt(m, l = g.getPrimaryText(), l);
  }
  function S() {
    return g.getElement();
  }
  function C(D) {
    le[D ? "unshift" : "push"](() => {
      g = D, n(1, g);
    });
  }
  return t.$$set = (D) => {
    e = X(X({}, e), nt(D)), n(6, a = ge(e, s)), "use" in D && n(7, d = D.use), "value" in D && n(0, p = D.value), "$$scope" in D && n(13, c = D.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty & /*use*/
    128 && n(3, i = [f, ...d]), t.$$.dirty & /*value, $selectedValue*/
    1025 && n(2, r = p != null && p !== "" && o === p);
  }, [
    p,
    g,
    r,
    i,
    m,
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
class vp extends Me {
  constructor(e) {
    super(), De(this, e, bp, _p, Ce, {
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
function Vl(t, e, n) {
  const i = t.slice();
  return i[11] = e[n], i[13] = n, i;
}
function Ip(t) {
  let e = (
    /*d*/
    t[11].label + ""
  ), n;
  return {
    c() {
      n = ct(e);
    },
    m(i, r) {
      V(i, n, r);
    },
    p(i, r) {
      r & /*data*/
      2 && e !== (e = /*d*/
      i[11].label + "") && ht(n, e);
    },
    d(i) {
      i && B(n);
    }
  };
}
function Gl(t) {
  let e, n;
  return e = new vp({
    props: {
      value: (
        /*d*/
        t[11].value
      ),
      $$slots: { default: [Ip] },
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
      ie(e.$$.fragment);
    },
    m(i, r) {
      ee(e, i, r), n = !0;
    },
    p(i, r) {
      const s = {};
      r & /*data*/
      2 && (s.value = /*d*/
      i[11].value), r & /*$$scope, data*/
      16386 && (s.$$scope = { dirty: r, ctx: i }), e.$set(s);
    },
    i(i) {
      n || (y(e.$$.fragment, i), n = !0);
    },
    o(i) {
      O(e.$$.fragment, i), n = !1;
    },
    d(i) {
      te(e, i);
    }
  };
}
function Ep(t) {
  let e, n, i = zt(
    /*data*/
    t[1]
  ), r = [];
  for (let a = 0; a < i.length; a += 1)
    r[a] = Gl(Vl(t, i, a));
  const s = (a) => O(r[a], 1, 1, () => {
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
      V(a, e, l), n = !0;
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
          const u = Vl(a, i, o);
          r[o] ? (r[o].p(u, l), y(r[o], 1)) : (r[o] = Gl(u), r[o].c(), y(r[o], 1), r[o].m(e.parentNode, e));
        }
        for (Ue(), o = i.length; o < r.length; o += 1)
          s(o);
        Be();
      }
    },
    i(a) {
      if (!n) {
        for (let l = 0; l < i.length; l += 1)
          y(r[l]);
        n = !0;
      }
    },
    o(a) {
      r = r.filter(Boolean);
      for (let l = 0; l < r.length; l += 1)
        O(r[l]);
      n = !1;
    },
    d(a) {
      a && B(e), ts(r, a);
    }
  };
}
function Ap(t) {
  let e, n, i;
  function r(a) {
    t[10](a);
  }
  let s = {
    disabled: (
      /*disabled*/
      t[4]
    ),
    key: yp,
    label: (
      /*label*/
      t[2]
    ),
    style: "width: 100%;",
    required: (
      /*required*/
      t[3]
    ),
    $$slots: { default: [Ep] },
    $$scope: { ctx: t }
  };
  return (
    /*value*/
    t[0] !== void 0 && (s.value = /*value*/
    t[0]), e = new pp({ props: s }), le.push(() => vt(e, "value", r)), {
      c() {
        ie(e.$$.fragment);
      },
      m(a, l) {
        ee(e, a, l), i = !0;
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
        a[0], bt(() => n = !1)), e.$set(o);
      },
      i(a) {
        i || (y(e.$$.fragment, a), i = !0);
      },
      o(a) {
        O(e.$$.fragment, a), i = !1;
      },
      d(a) {
        te(e, a);
      }
    }
  );
}
const yp = (t) => `${t ?? ""}`;
function Cp(t, e, n) {
  let { data: i = [] } = e, { placeholder: r = "" } = e, { label: s = "" } = e, { description: a = "" } = e, { value: l = "" } = e, { required: o = !1 } = e, { size: u = "sm" } = e, { selectedOptionIndex: c = -1 } = e, { disabled: f = !1 } = e;
  function d(p) {
    return () => n(6, c = p);
  }
  function h(p) {
    l = p, n(0, l);
  }
  return t.$$set = (p) => {
    "data" in p && n(1, i = p.data), "placeholder" in p && n(7, r = p.placeholder), "label" in p && n(2, s = p.label), "description" in p && n(8, a = p.description), "value" in p && n(0, l = p.value), "required" in p && n(3, o = p.required), "size" in p && n(9, u = p.size), "selectedOptionIndex" in p && n(6, c = p.selectedOptionIndex), "disabled" in p && n(4, f = p.disabled);
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
class Bo extends Me {
  constructor(e) {
    super(), De(this, e, Cp, Ap, Ce, {
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
function Sp(t) {
  return t ? t.scrollHeight > t.offsetHeight : !1;
}
function Tp(t) {
  return t ? t.scrollTop === 0 : !1;
}
function Lp(t) {
  return t ? Math.ceil(t.scrollHeight - t.scrollTop) === t.clientHeight : !1;
}
function Op(t) {
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
var Rp = (
  /** @class */
  function() {
    function t() {
      this.rafIDs = /* @__PURE__ */ new Map();
    }
    return t.prototype.request = function(e, n) {
      var i = this;
      this.cancel(e);
      var r = requestAnimationFrame(function(s) {
        i.rafIDs.delete(e), n(s);
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
var ot = {
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
}, li = {
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
}, Mr = {
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
var Ui;
(function(t) {
  t.POLL_SCROLL_POS = "poll_scroll_position", t.POLL_LAYOUT_CHANGE = "poll_layout_change";
})(Ui || (Ui = {}));
var Dp = (
  /** @class */
  function(t) {
    at(e, t);
    function e(n) {
      var i = t.call(this, fe(fe({}, e.defaultAdapter), n)) || this;
      return i.dialogOpen = !1, i.isFullscreen = !1, i.animationFrame = 0, i.animationTimer = 0, i.escapeKeyAction = li.CLOSE_ACTION, i.scrimClickAction = li.CLOSE_ACTION, i.autoStackButtons = !0, i.areButtonsStacked = !1, i.suppressDefaultPressSelector = li.SUPPRESS_DEFAULT_PRESS_SELECTOR, i.animFrame = new Rp(), i.contentScrollHandler = function() {
        i.handleScrollEvent();
      }, i.windowResizeHandler = function() {
        i.layout();
      }, i.windowOrientationChangeHandler = function() {
        i.layout();
      }, i;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return ot;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return li;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return Mr;
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
      this.adapter.hasClass(ot.STACKED) && this.setAutoStackButtons(!1), this.isFullscreen = this.adapter.hasClass(ot.FULLSCREEN);
    }, e.prototype.destroy = function() {
      this.animationTimer && (clearTimeout(this.animationTimer), this.handleAnimationTimerEnd()), this.isFullscreen && this.adapter.deregisterContentEventHandler("scroll", this.contentScrollHandler), this.animFrame.cancelAll(), this.adapter.deregisterWindowEventHandler("resize", this.windowResizeHandler), this.adapter.deregisterWindowEventHandler("orientationchange", this.windowOrientationChangeHandler);
    }, e.prototype.open = function(n) {
      var i = this;
      this.dialogOpen = !0, this.adapter.notifyOpening(), this.adapter.addClass(ot.OPENING), this.isFullscreen && this.adapter.registerContentEventHandler("scroll", this.contentScrollHandler), n && n.isAboveFullscreenDialog && this.adapter.addClass(ot.SCRIM_HIDDEN), this.adapter.registerWindowEventHandler("resize", this.windowResizeHandler), this.adapter.registerWindowEventHandler("orientationchange", this.windowOrientationChangeHandler), this.runNextAnimationFrame(function() {
        i.adapter.addClass(ot.OPEN), i.adapter.addBodyClass(ot.SCROLL_LOCK), i.layout(), i.animationTimer = setTimeout(function() {
          i.handleAnimationTimerEnd(), i.adapter.trapFocus(i.adapter.getInitialFocusEl()), i.adapter.notifyOpened();
        }, Mr.DIALOG_ANIMATION_OPEN_TIME_MS);
      });
    }, e.prototype.close = function(n) {
      var i = this;
      n === void 0 && (n = ""), this.dialogOpen && (this.dialogOpen = !1, this.adapter.notifyClosing(n), this.adapter.addClass(ot.CLOSING), this.adapter.removeClass(ot.OPEN), this.adapter.removeBodyClass(ot.SCROLL_LOCK), this.isFullscreen && this.adapter.deregisterContentEventHandler("scroll", this.contentScrollHandler), this.adapter.deregisterWindowEventHandler("resize", this.windowResizeHandler), this.adapter.deregisterWindowEventHandler("orientationchange", this.windowOrientationChangeHandler), cancelAnimationFrame(this.animationFrame), this.animationFrame = 0, clearTimeout(this.animationTimer), this.animationTimer = setTimeout(function() {
        i.adapter.releaseFocus(), i.handleAnimationTimerEnd(), i.adapter.notifyClosed(n);
      }, Mr.DIALOG_ANIMATION_CLOSE_TIME_MS));
    }, e.prototype.showSurfaceScrim = function() {
      var n = this;
      this.adapter.addClass(ot.SURFACE_SCRIM_SHOWING), this.runNextAnimationFrame(function() {
        n.adapter.addClass(ot.SURFACE_SCRIM_SHOWN);
      });
    }, e.prototype.hideSurfaceScrim = function() {
      this.adapter.removeClass(ot.SURFACE_SCRIM_SHOWN), this.adapter.addClass(ot.SURFACE_SCRIM_HIDING);
    }, e.prototype.handleSurfaceScrimTransitionEnd = function() {
      this.adapter.removeClass(ot.SURFACE_SCRIM_HIDING), this.adapter.removeClass(ot.SURFACE_SCRIM_SHOWING);
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
      this.animFrame.request(Ui.POLL_LAYOUT_CHANGE, function() {
        n.layoutInternal();
      });
    }, e.prototype.handleClick = function(n) {
      var i = this.adapter.eventTargetMatches(n.target, li.SCRIM_SELECTOR);
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
          var s = n.composedPath ? n.composedPath()[0] : n.target, a = this.suppressDefaultPressSelector ? !this.adapter.eventTargetMatches(s, this.suppressDefaultPressSelector) : !0;
          i && a && this.adapter.clickDefaultButton();
        }
      }
    }, e.prototype.handleDocumentKeydown = function(n) {
      var i = n.key === "Escape" || n.keyCode === 27;
      i && this.escapeKeyAction !== "" && this.close(this.escapeKeyAction);
    }, e.prototype.handleScrollEvent = function() {
      var n = this;
      this.animFrame.request(Ui.POLL_SCROLL_POS, function() {
        n.toggleScrollDividerHeader(), n.toggleScrollDividerFooter();
      });
    }, e.prototype.layoutInternal = function() {
      this.autoStackButtons && this.detectStackedButtons(), this.toggleScrollableClasses();
    }, e.prototype.handleAnimationTimerEnd = function() {
      this.animationTimer = 0, this.adapter.removeClass(ot.OPENING), this.adapter.removeClass(ot.CLOSING);
    }, e.prototype.runNextAnimationFrame = function(n) {
      var i = this;
      cancelAnimationFrame(this.animationFrame), this.animationFrame = requestAnimationFrame(function() {
        i.animationFrame = 0, clearTimeout(i.animationTimer), i.animationTimer = setTimeout(n, 0);
      });
    }, e.prototype.detectStackedButtons = function() {
      this.adapter.removeClass(ot.STACKED);
      var n = this.adapter.areButtonsStacked();
      n && this.adapter.addClass(ot.STACKED), n !== this.areButtonsStacked && (this.adapter.reverseButtons(), this.areButtonsStacked = n);
    }, e.prototype.toggleScrollableClasses = function() {
      this.adapter.removeClass(ot.SCROLLABLE), this.adapter.isContentScrollable() && (this.adapter.addClass(ot.SCROLLABLE), this.isFullscreen && (this.toggleScrollDividerHeader(), this.toggleScrollDividerFooter()));
    }, e.prototype.toggleScrollDividerHeader = function() {
      this.adapter.isScrollableContentAtTop() ? this.adapter.hasClass(ot.SCROLL_DIVIDER_HEADER) && this.adapter.removeClass(ot.SCROLL_DIVIDER_HEADER) : this.adapter.addClass(ot.SCROLL_DIVIDER_HEADER);
    }, e.prototype.toggleScrollDividerFooter = function() {
      this.adapter.isScrollableContentAtBottom() ? this.adapter.hasClass(ot.SCROLL_DIVIDER_FOOTER) && this.adapter.removeClass(ot.SCROLL_DIVIDER_FOOTER) : this.adapter.addClass(ot.SCROLL_DIVIDER_FOOTER);
    }, e;
  }(Dt)
);
const { document: Mp, window: jl } = Qa, kp = (t) => ({}), ql = (t) => ({});
function Wl(t) {
  let e, n, i;
  return {
    c() {
      e = ne("div"), P(e, "class", "mdc-dialog__surface-scrim");
    },
    m(r, s) {
      V(r, e, s), n || (i = ue(
        e,
        "transitionend",
        /*transitionend_handler*/
        t[32]
      ), n = !0);
    },
    p: Qe,
    d(r) {
      r && B(e), n = !1, i();
    }
  };
}
function Fp(t) {
  let e, n, i, r, s, a, l, o, u, c, f, d, h, p, g;
  const m = (
    /*#slots*/
    t[29].default
  ), E = Ie(
    m,
    t,
    /*$$scope*/
    t[28],
    null
  );
  let v = (
    /*fullscreen*/
    t[5] && Wl(t)
  ), S = [
    {
      class: a = se({
        [
          /*surface$class*/
          t[9]
        ]: !0,
        "mdc-dialog__surface": !0
      })
    },
    { role: "alertdialog" },
    { "aria-modal": "true" },
    Ve(
      /*$$restProps*/
      t[19],
      "surface$"
    )
  ], C = {};
  for (let b = 0; b < S.length; b += 1)
    C = X(C, S[b]);
  let D = [
    {
      class: l = se({
        [
          /*container$class*/
          t[8]
        ]: !0,
        "mdc-dialog__container": !0
      })
    },
    Ve(
      /*$$restProps*/
      t[19],
      "container$"
    )
  ], M = {};
  for (let b = 0; b < D.length; b += 1)
    M = X(M, D[b]);
  let _ = [
    {
      class: c = se({
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
    Kt(
      /*$$restProps*/
      t[19],
      ["container$", "surface$"]
    )
  ], L = {};
  for (let b = 0; b < _.length; b += 1)
    L = X(L, _[b]);
  const k = (
    /*#slots*/
    t[29].over
  ), A = Ie(
    k,
    t,
    /*$$scope*/
    t[28],
    ql
  );
  return {
    c() {
      e = ae(), n = ne("div"), i = ne("div"), r = ne("div"), E && E.c(), s = ae(), v && v.c(), o = ae(), u = ne("div"), d = ae(), A && A.c(), ce(r, C), ce(i, M), P(u, "class", "mdc-dialog__scrim"), ce(n, L);
    },
    m(b, I) {
      V(b, e, I), V(b, n, I), J(n, i), J(i, r), E && E.m(r, null), J(r, s), v && v.m(r, null), J(n, o), J(n, u), t[33](n), V(b, d, I), A && A.m(b, I), h = !0, p || (g = [
        ue(
          jl,
          "resize",
          /*resize_handler*/
          t[30]
        ),
        ue(
          jl,
          "orientationchange",
          /*orientationchange_handler*/
          t[31]
        ),
        ue(Mp.body, "keydown", function() {
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
        he(f = xe.call(
          null,
          n,
          /*use*/
          t[1]
        )),
        he(
          /*forwardEvents*/
          t[13].call(null, n)
        ),
        ue(
          n,
          "SMUIDialog:opening",
          /*handleDialogOpening*/
          t[16]
        ),
        ue(
          n,
          "SMUIDialog:opened",
          /*handleDialogOpened*/
          t[17]
        ),
        ue(
          n,
          "SMUIDialog:closed",
          /*handleDialogClosed*/
          t[18]
        ),
        ue(n, "click", function() {
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
        ue(n, "keydown", function() {
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
      ], p = !0);
    },
    p(b, I) {
      t = b, E && E.p && (!h || I[0] & /*$$scope*/
      268435456) && Ae(
        E,
        m,
        t,
        /*$$scope*/
        t[28],
        h ? Ee(
          m,
          /*$$scope*/
          t[28],
          I,
          null
        ) : ye(
          /*$$scope*/
          t[28]
        ),
        null
      ), /*fullscreen*/
      t[5] ? v ? v.p(t, I) : (v = Wl(t), v.c(), v.m(r, null)) : v && (v.d(1), v = null), ce(r, C = me(S, [
        (!h || I[0] & /*surface$class*/
        512 && a !== (a = se({
          [
            /*surface$class*/
            t[9]
          ]: !0,
          "mdc-dialog__surface": !0
        }))) && { class: a },
        { role: "alertdialog" },
        { "aria-modal": "true" },
        I[0] & /*$$restProps*/
        524288 && Ve(
          /*$$restProps*/
          t[19],
          "surface$"
        )
      ])), ce(i, M = me(D, [
        (!h || I[0] & /*container$class*/
        256 && l !== (l = se({
          [
            /*container$class*/
            t[8]
          ]: !0,
          "mdc-dialog__container": !0
        }))) && { class: l },
        I[0] & /*$$restProps*/
        524288 && Ve(
          /*$$restProps*/
          t[19],
          "container$"
        )
      ])), ce(n, L = me(_, [
        (!h || I[0] & /*className, autoStackButtons, fullscreen, sheet, noContentPadding, selection, internalClasses*/
        4348 && c !== (c = se({
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
        }))) && { class: c },
        { role: "alertdialog" },
        { "aria-modal": "true" },
        I[0] & /*$$restProps*/
        524288 && Kt(
          /*$$restProps*/
          t[19],
          ["container$", "surface$"]
        )
      ])), f && pe(f.update) && I[0] & /*use*/
      2 && f.update.call(
        null,
        /*use*/
        t[1]
      ), A && A.p && (!h || I[0] & /*$$scope*/
      268435456) && Ae(
        A,
        k,
        t,
        /*$$scope*/
        t[28],
        h ? Ee(
          k,
          /*$$scope*/
          t[28],
          I,
          kp
        ) : ye(
          /*$$scope*/
          t[28]
        ),
        ql
      );
    },
    i(b) {
      h || (y(E, b), y(A, b), h = !0);
    },
    o(b) {
      O(E, b), O(A, b), h = !1;
    },
    d(b) {
      b && (B(e), B(n), B(d)), E && E.d(b), v && v.d(), t[33](null), A && A.d(b), p = !1, Ye(g);
    }
  };
}
function Np(t, e, n) {
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
  let r = ge(e, i), s, a, { $$slots: l = {}, $$scope: o } = e;
  var u;
  const { FocusTrap: c } = md, { closest: f, matches: d } = vi, h = rt(Je());
  let { use: p = [] } = e, { class: g = "" } = e, { open: m = !1 } = e, { selection: E = !1 } = e, { escapeKeyAction: v = "close" } = e, { scrimClickAction: S = "close" } = e, { autoStackButtons: C = !0 } = e, { fullscreen: D = !1 } = e, { sheet: M = !1 } = e, { noContentPadding: _ = !1 } = e, { container$class: L = "" } = e, { surface$class: k = "" } = e, A, b, I = {}, T, H = At(!1);
  st(t, H, (F) => n(37, a = F));
  let q = ze("SMUI:dialog:aboveFullscreen"), j = (u = ze("SMUI:dialog:aboveFullscreenShown")) !== null && u !== void 0 ? u : At(!1);
  st(t, j, (F) => n(27, s = F));
  let K = ze("SMUI:addLayoutListener"), N, R = [], G = (F) => (R.push(F), () => {
    const $ = R.indexOf(F);
    $ >= 0 && R.splice($, 1);
  });
  Ge("SMUI:dialog:actions:reversed", H), Ge("SMUI:addLayoutListener", G), Ge("SMUI:dialog:selection", E), Ge("SMUI:dialog:aboveFullscreen", q || D), Ge("SMUI:dialog:aboveFullscreenShown", j), M && Ge("SMUI:icon-button:context", "dialog:sheet"), K && (N = K(gt));
  let oe = s;
  ft(() => {
    var F;
    return T = new c(
      A,
      {
        initialFocusEl: (F = Se()) !== null && F !== void 0 ? F : void 0
      }
    ), n(10, b = new Dp({
      addBodyClass: ($) => document.body.classList.add($),
      addClass: ve,
      areButtonsStacked: () => Op(z()),
      clickDefaultButton: () => {
        const $ = x();
        $ && $.click();
      },
      eventTargetMatches: ($, Q) => $ ? d($, Q) : !1,
      getActionFromEvent: ($) => {
        if (!$.target)
          return "";
        const Q = f($.target, "[data-mdc-dialog-action]");
        return Q && Q.getAttribute("data-mdc-dialog-action");
      },
      getInitialFocusEl: Se,
      hasClass: Oe,
      isContentScrollable: () => Sp(be()),
      notifyClosed: ($) => {
        n(0, m = !1), _e(Y(), "SMUIDialog:closed", $ ? { action: $ } : {}, void 0, !0);
      },
      notifyClosing: ($) => _e(Y(), "SMUIDialog:closing", $ ? { action: $ } : {}, void 0, !0),
      notifyOpened: () => _e(Y(), "SMUIDialog:opened", {}, void 0, !0),
      notifyOpening: () => _e(Y(), "SMUIDialog:opening", {}, void 0, !0),
      releaseFocus: () => T.releaseFocus(),
      removeBodyClass: ($) => document.body.classList.remove($),
      removeClass: Xe,
      reverseButtons: () => {
        kt(H, a = !0, a);
      },
      trapFocus: () => T.trapFocus(),
      registerContentEventHandler: ($, Q) => {
        const je = be();
        je instanceof HTMLElement && je.addEventListener($, Q);
      },
      deregisterContentEventHandler: ($, Q) => {
        const je = be();
        je instanceof HTMLElement && je.removeEventListener($, Q);
      },
      isScrollableContentAtTop: () => Tp(be()),
      isScrollableContentAtBottom: () => Lp(be()),
      registerWindowEventHandler: ($, Q) => {
        window.addEventListener($, Q);
      },
      deregisterWindowEventHandler: ($, Q) => {
        window.removeEventListener($, Q);
      }
    })), b.init(), () => {
      b.destroy();
    };
  }), Qt(() => {
    N && N();
  });
  function Oe(F) {
    return F in I ? I[F] : Y().classList.contains(F);
  }
  function ve(F) {
    I[F] || n(12, I[F] = !0, I);
  }
  function Xe(F) {
    (!(F in I) || I[F]) && n(12, I[F] = !1, I);
  }
  function z() {
    return [].slice.call(A.querySelectorAll(".mdc-dialog__button"));
  }
  function x() {
    return A.querySelector("[data-mdc-dialog-button-default]");
  }
  function be() {
    return A.querySelector(".mdc-dialog__content");
  }
  function Se() {
    return A.querySelector("[data-mdc-dialog-initial-focus]");
  }
  function He() {
    q && kt(j, s = !0, s), requestAnimationFrame(() => {
      R.forEach((F) => F());
    });
  }
  function re() {
    R.forEach((F) => F());
  }
  function W() {
    q && kt(j, s = !1, s);
  }
  function Ke() {
    return m;
  }
  function qe(F) {
    n(0, m = F);
  }
  function gt() {
    return b.layout();
  }
  function Y() {
    return A;
  }
  const Le = () => m && b && b.layout(), We = () => m && b && b.layout(), Pe = () => b && b.handleSurfaceScrimTransitionEnd();
  function Ot(F) {
    le[F ? "unshift" : "push"](() => {
      A = F, n(11, A);
    });
  }
  return t.$$set = (F) => {
    e = X(X({}, e), nt(F)), n(19, r = ge(e, i)), "use" in F && n(1, p = F.use), "class" in F && n(2, g = F.class), "open" in F && n(0, m = F.open), "selection" in F && n(3, E = F.selection), "escapeKeyAction" in F && n(20, v = F.escapeKeyAction), "scrimClickAction" in F && n(21, S = F.scrimClickAction), "autoStackButtons" in F && n(4, C = F.autoStackButtons), "fullscreen" in F && n(5, D = F.fullscreen), "sheet" in F && n(6, M = F.sheet), "noContentPadding" in F && n(7, _ = F.noContentPadding), "container$class" in F && n(8, L = F.container$class), "surface$class" in F && n(9, k = F.surface$class), "$$scope" in F && n(28, o = F.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty[0] & /*instance, escapeKeyAction*/
    1049600 && b && b.getEscapeKeyAction() !== v && b.setEscapeKeyAction(v), t.$$.dirty[0] & /*instance, scrimClickAction*/
    2098176 && b && b.getScrimClickAction() !== S && b.setScrimClickAction(S), t.$$.dirty[0] & /*instance, autoStackButtons*/
    1040 && b && b.getAutoStackButtons() !== C && b.setAutoStackButtons(C), t.$$.dirty[0] & /*autoStackButtons*/
    16 && (C || kt(H, a = !0, a)), t.$$.dirty[0] & /*instance, open*/
    1025 && b && b.isOpen() !== m && (m ? b.open({
      isAboveFullscreenDialog: !!q
    }) : b.close()), t.$$.dirty[0] & /*fullscreen, instance, previousAboveFullscreenShown, $aboveFullscreenShown*/
    201327648 && D && b && oe !== s && (n(26, oe = s), s ? b.showSurfaceScrim() : b.hideSurfaceScrim());
  }, [
    m,
    p,
    g,
    E,
    C,
    D,
    M,
    _,
    L,
    k,
    b,
    A,
    I,
    h,
    H,
    j,
    He,
    re,
    W,
    r,
    v,
    S,
    Ke,
    qe,
    gt,
    Y,
    oe,
    s,
    o,
    l,
    Le,
    We,
    Pe,
    Ot
  ];
}
class Hp extends Me {
  constructor(e) {
    super(), De(
      this,
      e,
      Np,
      Fp,
      Ce,
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
Lt({
  class: "mdc-dialog__header",
  tag: "div",
  contexts: {
    "SMUI:icon-button:context": "dialog:header"
  }
});
Lt({
  class: "mdc-dialog__title",
  tag: "h2"
});
const Pp = Lt({
  class: "mdc-dialog__content",
  tag: "div"
}), wp = Lt({
  class: "mdc-dialog__actions",
  tag: "div",
  classMap: {
    "smui-dialog__actions--reversed": "SMUI:dialog:actions:reversed"
  },
  contexts: {
    "SMUI:button:context": "dialog:action"
  }
}), Up = (t) => ({}), zl = (t) => ({}), Bp = (t) => ({}), Kl = (t) => ({}), Vp = (t) => ({}), Xl = (t) => ({});
function Gp(t) {
  let e;
  const n = (
    /*#slots*/
    t[2].content
  ), i = Ie(
    n,
    t,
    /*$$scope*/
    t[5],
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
      i && i.p && (!e || s & /*$$scope*/
      32) && Ae(
        i,
        n,
        r,
        /*$$scope*/
        r[5],
        e ? Ee(
          n,
          /*$$scope*/
          r[5],
          s,
          Bp
        ) : ye(
          /*$$scope*/
          r[5]
        ),
        Kl
      );
    },
    i(r) {
      e || (y(i, r), e = !0);
    },
    o(r) {
      O(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function jp(t) {
  let e;
  const n = (
    /*#slots*/
    t[2].actions
  ), i = Ie(
    n,
    t,
    /*$$scope*/
    t[5],
    zl
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
      32) && Ae(
        i,
        n,
        r,
        /*$$scope*/
        r[5],
        e ? Ee(
          n,
          /*$$scope*/
          r[5],
          s,
          Up
        ) : ye(
          /*$$scope*/
          r[5]
        ),
        zl
      );
    },
    i(r) {
      e || (y(i, r), e = !0);
    },
    o(r) {
      O(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function qp(t) {
  let e, n, i, r, s, a;
  const l = (
    /*#slots*/
    t[2].title
  ), o = Ie(
    l,
    t,
    /*$$scope*/
    t[5],
    Xl
  );
  return i = new Pp({
    props: {
      id: "large-scroll-content",
      $$slots: { default: [Gp] },
      $$scope: { ctx: t }
    }
  }), s = new wp({
    props: {
      $$slots: { default: [jp] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      e = ne("div"), o && o.c(), n = ae(), ie(i.$$.fragment), r = ae(), ie(s.$$.fragment), P(e, "class", "dialog-title svelte-4sevka");
    },
    m(u, c) {
      V(u, e, c), o && o.m(e, null), V(u, n, c), ee(i, u, c), V(u, r, c), ee(s, u, c), a = !0;
    },
    p(u, c) {
      o && o.p && (!a || c & /*$$scope*/
      32) && Ae(
        o,
        l,
        u,
        /*$$scope*/
        u[5],
        a ? Ee(
          l,
          /*$$scope*/
          u[5],
          c,
          Vp
        ) : ye(
          /*$$scope*/
          u[5]
        ),
        Xl
      );
      const f = {};
      c & /*$$scope*/
      32 && (f.$$scope = { dirty: c, ctx: u }), i.$set(f);
      const d = {};
      c & /*$$scope*/
      32 && (d.$$scope = { dirty: c, ctx: u }), s.$set(d);
    },
    i(u) {
      a || (y(o, u), y(i.$$.fragment, u), y(s.$$.fragment, u), a = !0);
    },
    o(u) {
      O(o, u), O(i.$$.fragment, u), O(s.$$.fragment, u), a = !1;
    },
    d(u) {
      u && (B(e), B(n), B(r)), o && o.d(u), te(i, u), te(s, u);
    }
  };
}
function Wp(t) {
  let e, n, i;
  function r(a) {
    t[3](a);
  }
  let s = {
    "aria-labelledby": "large-scroll-title",
    "aria-describedby": "large-scroll-content",
    surface$style: "width: 1080px; max-width: calc(100vw - 32px);",
    $$slots: { default: [qp] },
    $$scope: { ctx: t }
  };
  return (
    /*open*/
    t[0] !== void 0 && (s.open = /*open*/
    t[0]), e = new Hp({ props: s }), le.push(() => vt(e, "open", r)), e.$on(
      "SMUIDialog:closed",
      /*SMUIDialog_closed_handler*/
      t[4]
    ), {
      c() {
        ie(e.$$.fragment);
      },
      m(a, l) {
        ee(e, a, l), i = !0;
      },
      p(a, [l]) {
        const o = {};
        l & /*$$scope*/
        32 && (o.$$scope = { dirty: l, ctx: a }), !n && l & /*open*/
        1 && (n = !0, o.open = /*open*/
        a[0], bt(() => n = !1)), e.$set(o);
      },
      i(a) {
        i || (y(e.$$.fragment, a), i = !0);
      },
      o(a) {
        O(e.$$.fragment, a), i = !1;
      },
      d(a) {
        te(e, a);
      }
    }
  );
}
function zp(t, e, n) {
  let { $$slots: i = {}, $$scope: r } = e, { open: s = !1 } = e;
  const a = Ru();
  function l(u) {
    s = u, n(0, s);
  }
  const o = (u) => {
    n(0, s = !1), a("close");
  };
  return t.$$set = (u) => {
    "open" in u && n(0, s = u.open), "$$scope" in u && n(5, r = u.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty & /*open*/
    1 && console.log("Dialog open status changed:", s);
  }, [s, a, i, l, o, r];
}
class Kp extends Me {
  constructor(e) {
    super(), De(this, e, zp, Wp, Ce, { open: 0 });
  }
}
function Xp(t) {
  let e, n, i, r, s, a;
  const l = (
    /*#slots*/
    t[12].default
  ), o = Ie(
    l,
    t,
    /*$$scope*/
    t[11],
    null
  );
  let u = [
    {
      class: n = se({
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
      e = ne("div"), o && o.c(), ce(e, c);
    },
    m(f, d) {
      V(f, e, d), o && o.m(e, null), t[13](e), r = !0, s || (a = [
        he(i = xe.call(
          null,
          e,
          /*use*/
          t[0]
        )),
        he(
          /*forwardEvents*/
          t[8].call(null, e)
        )
      ], s = !0);
    },
    p(f, [d]) {
      o && o.p && (!r || d & /*$$scope*/
      2048) && Ae(
        o,
        l,
        f,
        /*$$scope*/
        f[11],
        r ? Ee(
          l,
          /*$$scope*/
          f[11],
          d,
          null
        ) : ye(
          /*$$scope*/
          f[11]
        ),
        null
      ), ce(e, c = me(u, [
        (!r || d & /*className, variant, elevation, square, color, transition*/
        126 && n !== (n = se({
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
      ])), i && pe(i.update) && d & /*use*/
      1 && i.update.call(
        null,
        /*use*/
        f[0]
      );
    },
    i(f) {
      r || (y(o, f), r = !0);
    },
    o(f) {
      O(o, f), r = !1;
    },
    d(f) {
      f && B(e), o && o.d(f), t[13](null), s = !1, Ye(a);
    }
  };
}
function Yp(t, e, n) {
  const i = ["use", "class", "variant", "square", "color", "elevation", "transition", "getElement"];
  let r = ge(e, i), { $$slots: s = {}, $$scope: a } = e;
  const l = rt(Je());
  let { use: o = [] } = e, { class: u = "" } = e, { variant: c = "raised" } = e, { square: f = !1 } = e, { color: d = "default" } = e, { elevation: h = 1 } = e, { transition: p = !1 } = e, g;
  function m() {
    return g;
  }
  function E(v) {
    le[v ? "unshift" : "push"](() => {
      g = v, n(7, g);
    });
  }
  return t.$$set = (v) => {
    e = X(X({}, e), nt(v)), n(9, r = ge(e, i)), "use" in v && n(0, o = v.use), "class" in v && n(1, u = v.class), "variant" in v && n(2, c = v.variant), "square" in v && n(3, f = v.square), "color" in v && n(4, d = v.color), "elevation" in v && n(5, h = v.elevation), "transition" in v && n(6, p = v.transition), "$$scope" in v && n(11, a = v.$$scope);
  }, [
    o,
    u,
    c,
    f,
    d,
    h,
    p,
    g,
    l,
    r,
    m,
    a,
    s,
    E
  ];
}
class Zp extends Me {
  constructor(e) {
    super(), De(this, e, Yp, Xp, Ce, {
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
Lt({
  class: "smui-paper__content",
  tag: "div"
});
Lt({
  class: "smui-paper__title",
  tag: "h5"
});
Lt({
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
var Qr;
(function(t) {
  t.POLITE = "polite", t.ASSERTIVE = "assertive";
})(Qr || (Qr = {}));
var Qp = "data-mdc-dom-announce";
function Jp(t, e) {
  xp.getInstance().say(t, e);
}
var xp = (
  /** @class */
  function() {
    function t() {
      this.liveRegions = /* @__PURE__ */ new Map();
    }
    return t.getInstance = function() {
      return t.instance || (t.instance = new t()), t.instance;
    }, t.prototype.say = function(e, n) {
      var i, r, s = (i = n == null ? void 0 : n.priority) !== null && i !== void 0 ? i : Qr.POLITE, a = (r = n == null ? void 0 : n.ownerDocument) !== null && r !== void 0 ? r : document, l = this.getLiveRegion(s, a);
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
      return i.style.position = "absolute", i.style.top = "-9999px", i.style.left = "-9999px", i.style.height = "1px", i.style.overflow = "hidden", i.setAttribute("aria-atomic", "true"), i.setAttribute("aria-live", e), i.setAttribute(Qp, "true"), n.body.appendChild(i), i;
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
var Vo = (
  /** @class */
  function(t) {
    at(e, t);
    function e(n) {
      return t.call(this, fe(fe({}, e.defaultAdapter), n)) || this;
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
      var i = Et(n);
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
  }(Dt)
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
var Go = (
  /** @class */
  function(t) {
    at(e, t);
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
      this.rippleSurface = n(this.root, new qi(i));
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
      return new Vo(i);
    }, e.prototype.isNavigable = function() {
      return this.foundation.isNavigable();
    }, e.prototype.focus = function() {
      this.foundation.focus();
    }, e.prototype.removeFocus = function() {
      this.foundation.removeFocus();
    }, e;
  }(ji)
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
var xt;
(function(t) {
  t.LEFT = "left", t.RIGHT = "right";
})(xt || (xt = {}));
var un;
(function(t) {
  t.PRIMARY = "primary", t.TRAILING = "trailing", t.NONE = "none";
})(un || (un = {}));
var Ne = {
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
}, Ct = {
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
}, Xt = /* @__PURE__ */ new Set();
Xt.add(Ne.ARROW_LEFT_KEY);
Xt.add(Ne.ARROW_RIGHT_KEY);
Xt.add(Ne.ARROW_DOWN_KEY);
Xt.add(Ne.ARROW_UP_KEY);
Xt.add(Ne.END_KEY);
Xt.add(Ne.HOME_KEY);
Xt.add(Ne.IE_ARROW_LEFT_KEY);
Xt.add(Ne.IE_ARROW_RIGHT_KEY);
Xt.add(Ne.IE_ARROW_DOWN_KEY);
Xt.add(Ne.IE_ARROW_UP_KEY);
var In = /* @__PURE__ */ new Set();
In.add(Ne.ARROW_UP_KEY);
In.add(Ne.ARROW_DOWN_KEY);
In.add(Ne.HOME_KEY);
In.add(Ne.END_KEY);
In.add(Ne.IE_ARROW_UP_KEY);
In.add(Ne.IE_ARROW_DOWN_KEY);
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
var Yl = {
  bottom: 0,
  height: 0,
  left: 0,
  right: 0,
  top: 0,
  width: 0
}, Gn;
(function(t) {
  t[t.SHOULD_FOCUS = 0] = "SHOULD_FOCUS", t[t.SHOULD_NOT_FOCUS = 1] = "SHOULD_NOT_FOCUS";
})(Gn || (Gn = {}));
var us = (
  /** @class */
  function(t) {
    at(e, t);
    function e(n) {
      var i = t.call(this, fe(fe({}, e.defaultAdapter), n)) || this;
      return i.shouldRemoveOnTrailingIconClick = !0, i.shouldFocusPrimaryActionOnClick = !0, i;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return Ne;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Ct;
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
            return Yl;
          },
          getComputedStyleValue: function() {
            return "";
          },
          getRootBoundingClientRect: function() {
            return Yl;
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
      return this.adapter.hasClass(Ct.SELECTED);
    }, e.prototype.isEditable = function() {
      return this.adapter.hasClass(Ct.EDITABLE);
    }, e.prototype.isEditing = function() {
      return this.adapter.hasClass(Ct.EDITING);
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
      this.adapter.addClass(Ct.CHIP_EXIT);
    }, e.prototype.handleClick = function() {
      this.adapter.notifyInteraction(), this.setPrimaryActionFocusable(this.getFocusBehavior());
    }, e.prototype.handleDoubleClick = function() {
      this.isEditable() && this.startEditing();
    }, e.prototype.handleTransitionEnd = function(n) {
      var i = this, r = this.adapter.eventTargetHasClass(n.target, Ct.CHIP_EXIT), s = n.propertyName === "width", a = n.propertyName === "opacity";
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
        var o = this.adapter.getAttribute(Ne.REMOVED_ANNOUNCEMENT_ATTRIBUTE);
        this.adapter.notifyRemoval(o);
      }
      if (a) {
        var u = this.adapter.eventTargetHasClass(n.target, Ct.LEADING_ICON) && this.adapter.hasClass(Ct.SELECTED), c = this.adapter.eventTargetHasClass(n.target, Ct.CHECKMARK) && !this.adapter.hasClass(Ct.SELECTED);
        if (u) {
          this.adapter.addClassToLeadingIcon(Ct.HIDDEN_LEADING_ICON);
          return;
        }
        if (c) {
          this.adapter.removeClassFromLeadingIcon(Ct.HIDDEN_LEADING_ICON);
          return;
        }
      }
    }, e.prototype.handleFocusIn = function(n) {
      this.eventFromPrimaryAction(n) && this.adapter.addClass(Ct.PRIMARY_ACTION_FOCUSED);
    }, e.prototype.handleFocusOut = function(n) {
      this.eventFromPrimaryAction(n) && (this.isEditing() && this.finishEditing(), this.adapter.removeClass(Ct.PRIMARY_ACTION_FOCUSED));
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
      Xt.has(n.key) && (n.preventDefault(), this.focusNextAction(n.key, un.PRIMARY));
    }, e.prototype.handleTrailingActionNavigation = function(n) {
      this.focusNextAction(n.detail.key, un.TRAILING);
    }, e.prototype.removeFocus = function() {
      this.adapter.setPrimaryActionAttr(Ne.TAB_INDEX, "-1"), this.adapter.removeTrailingActionFocus();
    }, e.prototype.focusPrimaryAction = function() {
      this.setPrimaryActionFocusable(Gn.SHOULD_FOCUS);
    }, e.prototype.focusTrailingAction = function() {
      var n = this.adapter.isTrailingActionNavigable();
      if (n) {
        this.adapter.setPrimaryActionAttr(Ne.TAB_INDEX, "-1"), this.adapter.focusTrailingAction();
        return;
      }
      this.focusPrimaryAction();
    }, e.prototype.setPrimaryActionFocusable = function(n) {
      this.adapter.setPrimaryActionAttr(Ne.TAB_INDEX, "0"), n === Gn.SHOULD_FOCUS && this.adapter.focusPrimaryAction(), this.adapter.removeTrailingActionFocus();
    }, e.prototype.getFocusBehavior = function() {
      return this.shouldFocusPrimaryActionOnClick ? Gn.SHOULD_FOCUS : Gn.SHOULD_NOT_FOCUS;
    }, e.prototype.focusNextAction = function(n, i) {
      var r = this.adapter.isTrailingActionNavigable(), s = this.getDirection(n);
      if (In.has(n) || !r) {
        this.adapter.notifyNavigation(n, i);
        return;
      }
      if (i === un.PRIMARY && s === xt.RIGHT) {
        this.focusTrailingAction();
        return;
      }
      if (i === un.TRAILING && s === xt.LEFT) {
        this.focusPrimaryAction();
        return;
      }
      this.adapter.notifyNavigation(n, un.NONE);
    }, e.prototype.getDirection = function(n) {
      var i = this.adapter.isRTL(), r = n === Ne.ARROW_LEFT_KEY || n === Ne.IE_ARROW_LEFT_KEY, s = n === Ne.ARROW_RIGHT_KEY || n === Ne.IE_ARROW_RIGHT_KEY;
      return !i && r || i && s ? xt.LEFT : xt.RIGHT;
    }, e.prototype.removeChip = function() {
      this.shouldRemoveOnTrailingIconClick && this.beginExit();
    }, e.prototype.shouldStartEditing = function(n) {
      return this.eventFromPrimaryAction(n) && n.key === Ne.ENTER_KEY;
    }, e.prototype.shouldFinishEditing = function(n) {
      return n.key === Ne.ENTER_KEY;
    }, e.prototype.shouldNotifyInteraction = function(n) {
      return n.key === Ne.ENTER_KEY || n.key === Ne.SPACEBAR_KEY;
    }, e.prototype.isDeleteAction = function(n) {
      var i = this.adapter.hasClass(Ct.DELETABLE);
      return i && (n.key === Ne.BACKSPACE_KEY || n.key === Ne.DELETE_KEY || n.key === Ne.IE_DELETE_KEY);
    }, e.prototype.setSelectedImpl = function(n) {
      n ? (this.adapter.addClass(Ct.SELECTED), this.adapter.setPrimaryActionAttr(Ne.ARIA_CHECKED, "true")) : (this.adapter.removeClass(Ct.SELECTED), this.adapter.setPrimaryActionAttr(Ne.ARIA_CHECKED, "false"));
    }, e.prototype.notifySelection = function(n) {
      this.adapter.notifySelection(n, !1);
    }, e.prototype.notifyIgnoredSelection = function(n) {
      this.adapter.notifySelection(n, !0);
    }, e.prototype.eventFromPrimaryAction = function(n) {
      return this.adapter.eventTargetHasClass(n.target, Ct.PRIMARY_ACTION);
    }, e.prototype.startEditing = function() {
      this.adapter.addClass(Ct.EDITING), this.adapter.notifyEditStart();
    }, e.prototype.finishEditing = function() {
      this.adapter.removeClass(Ct.EDITING), this.adapter.notifyEditFinish();
    }, e;
  }(Dt)
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
var jo = (
  /** @class */
  function(t) {
    at(e, t);
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
        return new Go(l);
      }), this.leadingIcon = this.root.querySelector(Ne.LEADING_ICON_SELECTOR), this.checkmark = this.root.querySelector(Ne.CHECKMARK_SELECTOR), this.primaryAction = this.root.querySelector(Ne.PRIMARY_ACTION_SELECTOR);
      var s = this.root.querySelector(Ne.TRAILING_ACTION_SELECTOR);
      s && (this.trailingAction = i(s));
      var a = fe(fe({}, wi.createAdapter(this)), { computeBoundingRect: function() {
        return r.foundation.getDimensions();
      } });
      this.rippleSurface = n(this.root, new qi(a));
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
            Ne.INTERACTION_EVENT,
            { chipId: n.id },
            !0
            /* shouldBubble */
          );
        },
        notifyNavigation: function(r, s) {
          return n.emit(
            Ne.NAVIGATION_EVENT,
            { chipId: n.id, key: r, source: s },
            !0
            /* shouldBubble */
          );
        },
        notifyRemoval: function(r) {
          n.emit(
            Ne.REMOVAL_EVENT,
            { chipId: n.id, removedAnnouncement: r },
            !0
            /* shouldBubble */
          );
        },
        notifySelection: function(r, s) {
          return n.emit(
            Ne.SELECTION_EVENT,
            { chipId: n.id, selected: r, shouldIgnore: s },
            !0
            /* shouldBubble */
          );
        },
        notifyTrailingIconInteraction: function() {
          return n.emit(
            Ne.TRAILING_ICON_INTERACTION_EVENT,
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
      return new us(i);
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
  }(ji)
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
var qo = {
  CHIP_SELECTOR: ".mdc-chip"
}, di = {
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
var cs = (
  /** @class */
  function(t) {
    at(e, t);
    function e(n) {
      var i = t.call(this, fe(fe({}, e.defaultAdapter), n)) || this;
      return i.selectedChipIds = [], i;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return qo;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return di;
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
      this.removeFocusFromChipsExcept(r), (this.adapter.hasClass(di.CHOICE) || this.adapter.hasClass(di.FILTER)) && this.toggleSelect(i);
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
      if (!(l === -1 || !Xt.has(r))) {
        var o = this.adapter.isRTL(), u = r === Ne.ARROW_LEFT_KEY || r === Ne.IE_ARROW_LEFT_KEY, c = r === Ne.ARROW_RIGHT_KEY || r === Ne.IE_ARROW_RIGHT_KEY, f = r === Ne.ARROW_DOWN_KEY || r === Ne.IE_ARROW_DOWN_KEY, d = !o && c || o && u || f, h = r === Ne.HOME_KEY, p = r === Ne.END_KEY;
        d ? l++ : h ? l = 0 : p ? l = a : l--, !(l < 0 || l > a) && (this.removeFocusFromChipsExcept(l), this.focusChipAction(l, r, s));
      }
    }, e.prototype.focusChipAction = function(n, i, r) {
      var s = In.has(i);
      if (s && r === un.PRIMARY)
        return this.adapter.focusChipPrimaryActionAtIndex(n);
      if (s && r === un.TRAILING)
        return this.adapter.focusChipTrailingActionAtIndex(n);
      var a = this.getDirection(i);
      if (a === xt.LEFT)
        return this.adapter.focusChipTrailingActionAtIndex(n);
      if (a === xt.RIGHT)
        return this.adapter.focusChipPrimaryActionAtIndex(n);
    }, e.prototype.getDirection = function(n) {
      var i = this.adapter.isRTL(), r = n === Ne.ARROW_LEFT_KEY || n === Ne.IE_ARROW_LEFT_KEY, s = n === Ne.ARROW_RIGHT_KEY || n === Ne.IE_ARROW_RIGHT_KEY;
      return !i && r || i && s ? xt.LEFT : xt.RIGHT;
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
        if (this.adapter.hasClass(di.CHOICE) && this.selectedChipIds.length > 0) {
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
  }(Dt)
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
var Ki = us.strings, Zl = Ki.INTERACTION_EVENT, Ql = Ki.SELECTION_EVENT, Jl = Ki.REMOVAL_EVENT, xl = Ki.NAVIGATION_EVENT, $p = cs.strings.CHIP_SELECTOR, $l = 0, eg = (
  /** @class */
  function(t) {
    at(e, t);
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
        return new jo(i);
      }), this.chipFactory = n, this.chipsList = this.instantiateChips(this.chipFactory);
    }, e.prototype.initialSyncWithDOM = function() {
      var n, i, r = this;
      try {
        for (var s = Rt(this.chipsList), a = s.next(); !a.done; a = s.next()) {
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
      }, this.listen(Zl, this.handleChipInteraction), this.listen(Ql, this.handleChipSelection), this.listen(Jl, this.handleChipRemoval), this.listen(xl, this.handleChipNavigation);
    }, e.prototype.destroy = function() {
      var n, i;
      try {
        for (var r = Rt(this.chipsList), s = r.next(); !s.done; s = r.next()) {
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
      this.unlisten(Zl, this.handleChipInteraction), this.unlisten(Ql, this.handleChipSelection), this.unlisten(Jl, this.handleChipRemoval), this.unlisten(xl, this.handleChipNavigation), t.prototype.destroy.call(this);
    }, e.prototype.addChip = function(n) {
      n.id = n.id || "mdc-chip-" + ++$l, this.chipsList.push(this.chipFactory(n));
    }, e.prototype.getDefaultFoundation = function() {
      var n = this, i = {
        announceMessage: function(r) {
          Jp(r);
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
      return new cs(i);
    }, e.prototype.instantiateChips = function(n) {
      var i = [].slice.call(this.root.querySelectorAll($p));
      return i.map(function(r) {
        return r.id = r.id || "mdc-chip-" + ++$l, n(r);
      });
    }, e.prototype.findChipIndex = function(n) {
      for (var i = 0; i < this.chips.length; i++)
        if (this.chipsList[i].id === n)
          return i;
      return -1;
    }, e;
  }(ji)
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
const fs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  MDCChip: jo,
  MDCChipFoundation: us,
  MDCChipSet: eg,
  MDCChipSetFoundation: cs,
  MDCChipTrailingAction: Go,
  MDCChipTrailingActionFoundation: Vo,
  chipCssClasses: Ct,
  chipSetCssClasses: di,
  chipSetStrings: qo,
  chipStrings: Ne,
  trailingActionStrings: Zt
}, Symbol.toStringTag, { value: "Module" }));
function ea(t) {
  let e;
  return {
    c() {
      e = ne("div"), P(e, "class", "mdc-chip__ripple");
    },
    m(n, i) {
      V(n, e, i);
    },
    d(n) {
      n && B(e);
    }
  };
}
function ta(t) {
  let e;
  return {
    c() {
      e = ne("div"), P(e, "class", "mdc-chip__touch");
    },
    m(n, i) {
      V(n, e, i);
    },
    d(n) {
      n && B(e);
    }
  };
}
function tg(t) {
  let e, n, i, r, s = (
    /*ripple*/
    t[3] && !/*$nonInteractive*/
    t[14] && ea()
  );
  const a = (
    /*#slots*/
    t[34].default
  ), l = Ie(
    a,
    t,
    /*$$scope*/
    t[38],
    null
  );
  let o = (
    /*touch*/
    t[4] && ta()
  );
  return {
    c() {
      s && s.c(), e = ae(), l && l.c(), n = ae(), o && o.c(), i = Ze();
    },
    m(u, c) {
      s && s.m(u, c), V(u, e, c), l && l.m(u, c), V(u, n, c), o && o.m(u, c), V(u, i, c), r = !0;
    },
    p(u, c) {
      /*ripple*/
      u[3] && !/*$nonInteractive*/
      u[14] ? s || (s = ea(), s.c(), s.m(e.parentNode, e)) : s && (s.d(1), s = null), l && l.p && (!r || c[1] & /*$$scope*/
      128) && Ae(
        l,
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
        ) : ye(
          /*$$scope*/
          u[38]
        ),
        null
      ), /*touch*/
      u[4] ? o || (o = ta(), o.c(), o.m(i.parentNode, i)) : o && (o.d(1), o = null);
    },
    i(u) {
      r || (y(l, u), r = !0);
    },
    o(u) {
      O(l, u), r = !1;
    },
    d(u) {
      u && (B(e), B(n), B(i)), s && s.d(u), l && l.d(u), o && o.d(u);
    }
  };
}
function ng(t) {
  let e, n, i;
  const r = [
    { tag: (
      /*tag*/
      t[6]
    ) },
    {
      use: [
        [
          Ft,
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
      class: se({
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
      ).map(kr).concat([
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
      $$slots: { default: [tg] },
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
            Ft,
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
        class: se({
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
        ).map(kr).concat([
          /*style*/
          l[2]
        ]).join(" ")
      },
      r[4],
      o[0] & /*$$restProps*/
      268435456 && Fe(
        /*$$restProps*/
        l[28]
      )
    ]))), { props: u };
  }
  return s && (e = Nt(s, a(t)), t[35](e), e.$on("transitionend", function() {
    pe(
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
    pe(
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
    pe(
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
    pe(
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
    pe(
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
    pe(
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
    pe(
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
      e && ie(e.$$.fragment), n = Ze();
    },
    m(l, o) {
      e && ee(e, l, o), V(l, n, o), i = !0;
    },
    p(l, o) {
      if (t = l, o[0] & /*component*/
      32 && s !== (s = /*component*/
      t[5])) {
        if (e) {
          Ue();
          const u = e;
          O(u.$$.fragment, 1, 0, () => {
            te(u, 1);
          }), Be();
        }
        s ? (e = Nt(s, a(t, o)), t[35](e), e.$on("transitionend", function() {
          pe(
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
          pe(
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
          pe(
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
          pe(
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
          pe(
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
          pe(
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
          pe(
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
        ), ie(e.$$.fragment), y(e.$$.fragment, 1), ee(e, n.parentNode, n)) : e = null;
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
                Ft,
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
            class: se({
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
            ).map(kr).concat([
              /*style*/
              t[2]
            ]).join(" ")
          },
          r[4],
          o[0] & /*$$restProps*/
          268435456 && Fe(
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
      i || (e && y(e.$$.fragment, l), i = !0);
    },
    o(l) {
      e && O(e.$$.fragment, l), i = !1;
    },
    d(l) {
      l && B(n), t[35](null), e && te(e, l);
    }
  };
}
const kr = ([t, e]) => `${t}: ${e};`;
function ig(t, e, n) {
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
  let r = ge(e, i), s, a, l, o, u, c, f, { $$slots: d = {}, $$scope: h } = e;
  const { MDCChipFoundation: p } = fs, g = rt(Je());
  let { use: m = [] } = e, { class: E = "" } = e, { style: v = "" } = e, { chip: S } = e, { ripple: C = !0 } = e, { touch: D = !1 } = e, { shouldRemoveOnTrailingIconClick: M = !0 } = e, { shouldFocusPrimaryActionOnClick: _ = !0 } = e, L, k, A = {}, b = {}, I = {};
  const T = ze("SMUI:chips:chip:initialSelected");
  st(t, T, (Q) => n(44, c = Q));
  let H = c, q, j;
  const K = ze("SMUI:chips:nonInteractive");
  st(t, K, (Q) => n(14, f = Q));
  const N = ze("SMUI:chips:choice");
  st(t, N, (Q) => n(40, a = Q));
  const R = ze("SMUI:chips:chip:index");
  st(t, R, (Q) => n(39, s = Q));
  let { component: G = Ut } = e, { tag: oe = G === Ut ? "div" : void 0 } = e;
  const Oe = At(M);
  st(t, Oe, (Q) => n(43, u = Q)), Ge("SMUI:chips:chip:shouldRemoveOnTrailingIconClick", Oe);
  const ve = At(H);
  st(t, ve, (Q) => n(42, o = Q)), Ge("SMUI:chips:chip:isSelected", ve);
  const Xe = At(b);
  if (st(t, Xe, (Q) => n(41, l = Q)), Ge("SMUI:chips:chip:leadingIconClasses", Xe), Ge("SMUI:chips:chip:focusable", a && H || s === 0), !S)
    throw new Error("The chip property is required! It should be passed down from the Set to the Chip.");
  ft(() => {
    n(7, k = new p({
      addClass: Se,
      addClassToLeadingIcon: re,
      eventTargetHasClass: (je, mt) => je && "classList" in je ? je.classList.contains(mt) : !1,
      focusPrimaryAction: () => {
        q && q.focus();
      },
      focusTrailingAction: () => {
        j && j.focus();
      },
      getAttribute: (je) => Pe().getAttribute(je),
      getCheckmarkBoundingClientRect: () => {
        const je = Pe().querySelector(".mdc-chip__checkmark");
        return je ? je.getBoundingClientRect() : null;
      },
      getComputedStyleValue: qe,
      getRootBoundingClientRect: () => Pe().getBoundingClientRect(),
      hasClass: be,
      hasLeadingIcon: () => !!Pe().querySelector(".mdc-chip__icon--leading"),
      isRTL: () => getComputedStyle(Pe()).getPropertyValue("direction") === "rtl",
      isTrailingActionNavigable: () => j ? j.isNavigable() : !1,
      notifyInteraction: () => _e(Pe(), "SMUIChip:interaction", { chipId: S }, void 0, !0),
      notifyNavigation: (je, mt) => _e(Pe(), "SMUIChip:navigation", { chipId: S, key: je, source: mt }, void 0, !0),
      notifyRemoval: (je) => {
        _e(Pe(), "SMUIChip:removal", { chipId: S, removedAnnouncement: je }, void 0, !0);
      },
      notifySelection: (je, mt) => _e(Pe(), "SMUIChip:selection", { chipId: S, selected: je, shouldIgnore: mt }, void 0, !0),
      notifyTrailingIconInteraction: () => _e(Pe(), "SMUIChip:trailingIconInteraction", { chipId: S }, void 0, !0),
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
      setPrimaryActionAttr: (je, mt) => {
        q && q.addAttr(je, mt);
      },
      setStyleProperty: Ke
    }));
    const Q = {
      chipId: S,
      get selected() {
        return H;
      },
      focusPrimaryAction: Y,
      focusTrailingAction: Le,
      removeFocus: We,
      setSelectedFromChipSet: gt
    };
    return _e(Pe(), "SMUIChipsChip:mount", Q), k.init(), () => {
      _e(Pe(), "SMUIChipsChip:unmount", Q), k.destroy();
    };
  });
  function z(Q) {
    n(12, q = Q.detail);
  }
  function x(Q) {
    n(13, j = Q.detail);
  }
  function be(Q) {
    return Q in A ? A[Q] : Pe().classList.contains(Q);
  }
  function Se(Q) {
    A[Q] || n(10, A[Q] = !0, A);
  }
  function He(Q) {
    (!(Q in A) || A[Q]) && n(10, A[Q] = !1, A);
  }
  function re(Q) {
    b[Q] || n(33, b[Q] = !0, b);
  }
  function W(Q) {
    (!(Q in b) || b[Q]) && n(33, b[Q] = !1, b);
  }
  function Ke(Q, je) {
    I[Q] != je && (je === "" || je == null ? (delete I[Q], n(11, I)) : n(11, I[Q] = je, I));
  }
  function qe(Q) {
    return Q in I ? I[Q] : getComputedStyle(Pe()).getPropertyValue(Q);
  }
  function gt(Q, je) {
    n(8, H = Q), k.setSelectedFromChipSet(H, je);
  }
  function Y() {
    k.focusPrimaryAction();
  }
  function Le() {
    k.focusTrailingAction();
  }
  function We() {
    k.removeFocus();
  }
  function Pe() {
    return L.getElement();
  }
  function Ot(Q) {
    le[Q ? "unshift" : "push"](() => {
      L = Q, n(9, L);
    });
  }
  const F = () => n(12, q = void 0), $ = () => n(13, j = void 0);
  return t.$$set = (Q) => {
    e = X(X({}, e), nt(Q)), n(28, r = ge(e, i)), "use" in Q && n(0, m = Q.use), "class" in Q && n(1, E = Q.class), "style" in Q && n(2, v = Q.style), "chip" in Q && n(29, S = Q.chip), "ripple" in Q && n(3, C = Q.ripple), "touch" in Q && n(4, D = Q.touch), "shouldRemoveOnTrailingIconClick" in Q && n(30, M = Q.shouldRemoveOnTrailingIconClick), "shouldFocusPrimaryActionOnClick" in Q && n(31, _ = Q.shouldFocusPrimaryActionOnClick), "component" in Q && n(5, G = Q.component), "tag" in Q && n(6, oe = Q.tag), "$$scope" in Q && n(38, h = Q.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty[0] & /*shouldRemoveOnTrailingIconClick*/
    1073741824 && kt(Oe, u = M, u), t.$$.dirty[0] & /*selected*/
    256 && kt(ve, o = H, o), t.$$.dirty[1] & /*leadingIconClasses*/
    4 && kt(Xe, l = b, l), t.$$.dirty[0] & /*instance, shouldRemoveOnTrailingIconClick*/
    1073741952 && k && k.getShouldRemoveOnTrailingIconClick() !== M && k.setShouldRemoveOnTrailingIconClick(M), t.$$.dirty[0] & /*instance*/
    128 | t.$$.dirty[1] & /*shouldFocusPrimaryActionOnClick*/
    1 && k && k.setShouldFocusPrimaryActionOnClick(_);
  }, [
    m,
    E,
    v,
    C,
    D,
    G,
    oe,
    k,
    H,
    L,
    A,
    I,
    q,
    j,
    f,
    g,
    T,
    K,
    N,
    R,
    Oe,
    ve,
    Xe,
    z,
    x,
    Se,
    He,
    Ke,
    r,
    S,
    M,
    _,
    Pe,
    b,
    d,
    Ot,
    F,
    $,
    h
  ];
}
class rg extends Me {
  constructor(e) {
    super(), De(
      this,
      e,
      ig,
      ng,
      Ce,
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
function na(t, e, n) {
  const i = t.slice();
  return i[37] = e[n], i[39] = n, i;
}
const sg = (t) => ({ chip: t[0] & /*chips*/
1 }), ia = (t) => ({ chip: (
  /*chip*/
  t[37]
) });
function lg(t) {
  let e;
  const n = (
    /*#slots*/
    t[25].default
  ), i = Ie(
    n,
    t,
    /*$$scope*/
    t[27],
    ia
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
      134217729) && Ae(
        i,
        n,
        r,
        /*$$scope*/
        r[27],
        e ? Ee(
          n,
          /*$$scope*/
          r[27],
          s,
          sg
        ) : ye(
          /*$$scope*/
          r[27]
        ),
        ia
      );
    },
    i(r) {
      e || (y(i, r), e = !0);
    },
    o(r) {
      O(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function ag(t) {
  let e, n, i;
  return e = new xn({
    props: {
      key: "SMUI:chips:chip:initialSelected",
      value: (
        /*initialSelected*/
        t[10][
          /*i*/
          t[39]
        ]
      ),
      $$slots: { default: [lg] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      ie(e.$$.fragment), n = ae();
    },
    m(r, s) {
      ee(e, r, s), V(r, n, s), i = !0;
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
      i || (y(e.$$.fragment, r), i = !0);
    },
    o(r) {
      O(e.$$.fragment, r), i = !1;
    },
    d(r) {
      r && B(n), te(e, r);
    }
  };
}
function ra(t, e) {
  let n, i, r;
  return i = new xn({
    props: {
      key: "SMUI:chips:chip:index",
      value: (
        /*i*/
        e[39]
      ),
      $$slots: { default: [ag] },
      $$scope: { ctx: e }
    }
  }), {
    key: t,
    first: null,
    c() {
      n = Ze(), ie(i.$$.fragment), this.first = n;
    },
    m(s, a) {
      V(s, n, a), ee(i, s, a), r = !0;
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
      r || (y(i.$$.fragment, s), r = !0);
    },
    o(s) {
      O(i.$$.fragment, s), r = !1;
    },
    d(s) {
      s && B(n), te(i, s);
    }
  };
}
function og(t) {
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
    let p = na(t, u, h), g = c(p);
    i.set(g, n[h] = ra(g, p));
  }
  let f = [
    {
      class: r = se({
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
      e = ne("div");
      for (let h = 0; h < n.length; h += 1)
        n[h].c();
      ce(e, d);
    },
    m(h, p) {
      V(h, e, p);
      for (let g = 0; g < n.length; g += 1)
        n[g] && n[g].m(e, null);
      t[26](e), a = !0, l || (o = [
        he(s = xe.call(
          null,
          e,
          /*use*/
          t[1]
        )),
        he(
          /*forwardEvents*/
          t[9].call(null, e)
        ),
        ue(
          e,
          "SMUIChipsChip:mount",
          /*handleChipMount*/
          t[14]
        ),
        ue(
          e,
          "SMUIChipsChip:unmount",
          /*handleChipUnmount*/
          t[15]
        ),
        ue(
          e,
          "SMUIChip:interaction",
          /*handleChipInteraction*/
          t[16]
        ),
        ue(
          e,
          "SMUIChip:selection",
          /*handleChipSelection*/
          t[17]
        ),
        ue(
          e,
          "SMUIChip:removal",
          /*handleChipRemoval*/
          t[18]
        ),
        ue(
          e,
          "SMUIChip:navigation",
          /*handleChipNavigation*/
          t[19]
        )
      ], l = !0);
    },
    p(h, p) {
      p[0] & /*chips, initialSelected, $$scope, key*/
      134218761 && (u = zt(
        /*chips*/
        h[0]
      ), Ue(), n = rs(n, p, c, 1, h, u, i, e, is, ra, null, na), Be()), ce(e, d = me(f, [
        (!a || p[0] & /*className, nonInteractive, choice, filter, input*/
        244 && r !== (r = se({
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
        p[0] & /*$$restProps*/
        1048576 && /*$$restProps*/
        h[20]
      ])), s && pe(s.update) && p[0] & /*use*/
      2 && s.update.call(
        null,
        /*use*/
        h[1]
      );
    },
    i(h) {
      if (!a) {
        for (let p = 0; p < u.length; p += 1)
          y(n[p]);
        a = !0;
      }
    },
    o(h) {
      for (let p = 0; p < n.length; p += 1)
        O(n[p]);
      a = !1;
    },
    d(h) {
      h && B(e);
      for (let p = 0; p < n.length; p += 1)
        n[p].d();
      t[26](null), l = !1, Ye(o);
    }
  };
}
function sa(t, e) {
  let n = new Set(t);
  for (let i of e)
    n.delete(i);
  return n;
}
function ug(t, e, n) {
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
  let r = ge(e, i), s, a, l, { $$slots: o = {}, $$scope: u } = e;
  const { MDCChipSetFoundation: c } = fs, f = rt(Je());
  let { use: d = [] } = e, { class: h = "" } = e, { chips: p = [] } = e, { key: g = (z) => z } = e, { selected: m = void 0 } = e, { nonInteractive: E = !1 } = e, { choice: v = !1 } = e, { filter: S = !1 } = e, { input: C = !1 } = e, D, M, _ = {}, L = /* @__PURE__ */ new WeakMap(), k = p.map((z) => v && m === z || S && m.indexOf(z) !== -1);
  const A = At(E);
  st(t, A, (z) => n(31, l = z)), Ge("SMUI:chips:nonInteractive", A);
  const b = At(v);
  st(t, b, (z) => n(30, a = z)), Ge("SMUI:chips:choice", b);
  const I = At(S);
  st(t, I, (z) => n(29, s = z)), Ge("SMUI:chips:filter", I);
  let T = S ? new Set(m) : m;
  ft(() => {
    if (n(23, M = new c({
      announceMessage: ed,
      focusChipPrimaryActionAtIndex: (z) => {
        var x;
        (x = G(p[z])) === null || x === void 0 || x.focusPrimaryAction();
      },
      focusChipTrailingActionAtIndex: (z) => {
        var x;
        (x = G(p[z])) === null || x === void 0 || x.focusTrailingAction();
      },
      getChipListCount: () => p.length,
      getIndexOfChipById: (z) => p.indexOf(z),
      hasClass: (z) => ve().classList.contains(z),
      isRTL: () => getComputedStyle(ve()).getPropertyValue("direction") === "rtl",
      removeChipAtIndex: (z) => {
        z >= 0 && z < p.length && (v && m === p[z] ? n(21, m = null) : S && m.indexOf(p[z]) !== -1 && (m.splice(m.indexOf(p[z]), 1), n(21, m)), p.splice(z, 1), n(0, p));
      },
      removeFocusFromChipAtIndex: (z) => {
        var x;
        (x = G(p[z])) === null || x === void 0 || x.removeFocus();
      },
      selectChipAtIndex: (z, x, be) => {
        var Se;
        if (z >= 0 && z < p.length) {
          if (S) {
            const He = m.indexOf(p[z]);
            x && He === -1 ? (m.push(p[z]), n(21, m)) : !x && He !== -1 && (m.splice(He, 1), n(21, m));
          } else
            v && (x || m === p[z]) && n(21, m = x ? p[z] : null);
          (Se = G(p[z])) === null || Se === void 0 || Se.setSelectedFromChipSet(x, be);
        }
      }
    })), M.init(), v && m != null)
      M.select(m);
    else if (S && m.length)
      for (const z of m)
        M.select(z);
    return () => {
      M.destroy();
    };
  });
  function H(z) {
    const x = z.detail;
    oe(x.chipId, x);
  }
  function q(z) {
    const x = z.detail;
    Oe(x.chipId);
  }
  function j(z) {
    M && M.handleChipInteraction(z.detail);
  }
  function K(z) {
    M && M.handleChipSelection(z.detail);
  }
  function N(z) {
    M && M.handleChipRemoval(z.detail);
  }
  function R(z) {
    M && M.handleChipNavigation(z.detail);
  }
  function G(z) {
    return z instanceof Object ? L.get(z) : _[z];
  }
  function oe(z, x) {
    z instanceof Object ? L.set(z, x) : _[z] = x;
  }
  function Oe(z) {
    z instanceof Object ? L.delete(z) : delete _[z];
  }
  function ve() {
    return D;
  }
  function Xe(z) {
    le[z ? "unshift" : "push"](() => {
      D = z, n(8, D);
    });
  }
  return t.$$set = (z) => {
    e = X(X({}, e), nt(z)), n(20, r = ge(e, i)), "use" in z && n(1, d = z.use), "class" in z && n(2, h = z.class), "chips" in z && n(0, p = z.chips), "key" in z && n(3, g = z.key), "selected" in z && n(21, m = z.selected), "nonInteractive" in z && n(4, E = z.nonInteractive), "choice" in z && n(5, v = z.choice), "filter" in z && n(6, S = z.filter), "input" in z && n(7, C = z.input), "$$scope" in z && n(27, u = z.$$scope);
  }, t.$$.update = () => {
    if (t.$$.dirty[0] & /*nonInteractive*/
    16 && kt(A, l = E, l), t.$$.dirty[0] & /*choice*/
    32 && kt(b, a = v, a), t.$$.dirty[0] & /*filter*/
    64 && kt(I, s = S, s), t.$$.dirty[0] & /*instance, choice, previousSelected, selected*/
    27263008 && M && v && T !== m && (n(24, T = m), M.select(m)), t.$$.dirty[0] & /*instance, filter, selected, previousSelected, chips*/
    27263041 && M && S) {
      const z = new Set(m), x = sa(T, z), be = sa(z, T);
      if (x.size || be.size) {
        n(24, T = z);
        for (let Se of x)
          p.indexOf(Se) !== -1 && M.handleChipSelection({ chipId: Se, selected: !1 });
        for (let Se of be)
          M.handleChipSelection({ chipId: Se, selected: !0 });
      }
    }
  }, [
    p,
    d,
    h,
    g,
    E,
    v,
    S,
    C,
    D,
    f,
    k,
    A,
    b,
    I,
    H,
    q,
    j,
    K,
    N,
    R,
    r,
    m,
    ve,
    M,
    T,
    o,
    Xe,
    u
  ];
}
class cg extends Me {
  constructor(e) {
    super(), De(
      this,
      e,
      ug,
      og,
      Ce,
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
function fg(t) {
  let e, n, i, r, s, a, l, o = [
    {
      class: r = se({
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
      e = ne("span"), n = ut("svg"), i = ut("path"), P(i, "class", "mdc-chip__checkmark-path"), P(i, "fill", "none"), P(i, "stroke", "black"), P(i, "d", "M1.73,12.91 8.1,19.28 22.79,4.59"), P(n, "class", "mdc-chip__checkmark-svg"), P(n, "viewBox", "-2 -3 30 30"), ce(e, u);
    },
    m(c, f) {
      V(c, e, f), J(e, n), J(n, i), t[5](e), a || (l = he(s = xe.call(
        null,
        e,
        /*use*/
        t[0]
      )), a = !0);
    },
    p(c, [f]) {
      ce(e, u = me(o, [
        f & /*className*/
        2 && r !== (r = se({
          [
            /*className*/
            c[1]
          ]: !0,
          "mdc-chip__checkmark": !0
        })) && { class: r },
        f & /*$$restProps*/
        8 && /*$$restProps*/
        c[3]
      ])), s && pe(s.update) && f & /*use*/
      1 && s.update.call(
        null,
        /*use*/
        c[0]
      );
    },
    i: Qe,
    o: Qe,
    d(c) {
      c && B(e), t[5](null), a = !1, l();
    }
  };
}
function dg(t, e, n) {
  const i = ["use", "class", "getElement"];
  let r = ge(e, i), { use: s = [] } = e, { class: a = "" } = e, l;
  function o() {
    return l;
  }
  function u(c) {
    le[c ? "unshift" : "push"](() => {
      l = c, n(2, l);
    });
  }
  return t.$$set = (c) => {
    e = X(X({}, e), nt(c)), n(3, r = ge(e, i)), "use" in c && n(0, s = c.use), "class" in c && n(1, a = c.class);
  }, [s, a, l, r, o, u];
}
class hg extends Me {
  constructor(e) {
    super(), De(this, e, dg, fg, Ce, { use: 0, class: 1, getElement: 4 });
  }
  get getElement() {
    return this.$$.ctx[4];
  }
}
function la(t) {
  let e, n, i = {};
  return e = new hg({ props: i }), t[23](e), {
    c() {
      ie(e.$$.fragment);
    },
    m(r, s) {
      ee(e, r, s), n = !0;
    },
    p(r, s) {
      const a = {};
      e.$set(a);
    },
    i(r) {
      n || (y(e.$$.fragment, r), n = !0);
    },
    o(r) {
      O(e.$$.fragment, r), n = !1;
    },
    d(r) {
      t[23](null), te(e, r);
    }
  };
}
function mg(t) {
  let e, n, i, r;
  const s = (
    /*#slots*/
    t[22].default
  ), a = Ie(
    s,
    t,
    /*$$scope*/
    t[21],
    null
  );
  let l = [
    {
      class: i = se({
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
      e = ne("span"), n = ne("span"), a && a.c(), P(n, "class", "mdc-chip__text"), ce(e, o);
    },
    m(u, c) {
      V(u, e, c), J(e, n), a && a.m(n, null), t[24](e), r = !0;
    },
    p(u, c) {
      a && a.p && (!r || c & /*$$scope*/
      2097152) && Ae(
        a,
        s,
        u,
        /*$$scope*/
        u[21],
        r ? Ee(
          s,
          /*$$scope*/
          u[21],
          c,
          null
        ) : ye(
          /*$$scope*/
          u[21]
        ),
        null
      ), ce(e, o = me(l, [
        (!r || c & /*className*/
        2 && i !== (i = se({
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
      r || (y(a, u), r = !0);
    },
    o(u) {
      O(a, u), r = !1;
    },
    d(u) {
      u && B(e), a && a.d(u), t[24](null);
    }
  };
}
function pg(t) {
  let e, n;
  const i = (
    /*#slots*/
    t[22].default
  ), r = Ie(
    i,
    t,
    /*$$scope*/
    t[21],
    null
  );
  return {
    c() {
      e = ne("span"), r && r.c(), P(e, "class", "mdc-chip__text");
    },
    m(s, a) {
      V(s, e, a), r && r.m(e, null), n = !0;
    },
    p(s, a) {
      r && r.p && (!n || a & /*$$scope*/
      2097152) && Ae(
        r,
        i,
        s,
        /*$$scope*/
        s[21],
        n ? Ee(
          i,
          /*$$scope*/
          s[21],
          a,
          null
        ) : ye(
          /*$$scope*/
          s[21]
        ),
        null
      );
    },
    i(s) {
      n || (y(r, s), n = !0);
    },
    o(s) {
      O(r, s), n = !1;
    },
    d(s) {
      s && B(e), r && r.d(s);
    }
  };
}
function gg(t) {
  let e, n, i, r, s, a, l, o, u = (
    /*$filter*/
    t[3] && la(t)
  );
  const c = [pg, mg], f = [];
  function d(h, p) {
    return (
      /*$nonInteractive*/
      h[9] ? 0 : 1
    );
  }
  return i = d(t), r = f[i] = c[i](t), {
    c() {
      u && u.c(), e = ae(), n = ne("span"), r.c(), P(n, "role", "gridcell");
    },
    m(h, p) {
      u && u.m(h, p), V(h, e, p), V(h, n, p), f[i].m(n, null), t[25](n), a = !0, l || (o = [
        he(s = xe.call(
          null,
          n,
          /*use*/
          t[0]
        )),
        he(
          /*forwardEvents*/
          t[11].call(null, n)
        )
      ], l = !0);
    },
    p(h, [p]) {
      /*$filter*/
      h[3] ? u ? (u.p(h, p), p & /*$filter*/
      8 && y(u, 1)) : (u = la(h), u.c(), y(u, 1), u.m(e.parentNode, e)) : u && (Ue(), O(u, 1, 1, () => {
        u = null;
      }), Be());
      let g = i;
      i = d(h), i === g ? f[i].p(h, p) : (Ue(), O(f[g], 1, 1, () => {
        f[g] = null;
      }), Be(), r = f[i], r ? r.p(h, p) : (r = f[i] = c[i](h), r.c()), y(r, 1), r.m(n, null)), s && pe(s.update) && p & /*use*/
      1 && s.update.call(
        null,
        /*use*/
        h[0]
      );
    },
    i(h) {
      a || (y(u), y(r), a = !0);
    },
    o(h) {
      O(u), O(r), a = !1;
    },
    d(h) {
      h && (B(e), B(n)), u && u.d(h), f[i].d(), t[25](null), l = !1, Ye(o);
    }
  };
}
function _g(t, e, n) {
  let i;
  const r = ["use", "class", "tabindex", "focus", "getInput", "getElement"];
  let s = ge(e, r), a, l, o, u, { $$slots: c = {}, $$scope: f } = e;
  const d = rt(Je());
  let { use: h = [] } = e, { class: p = "" } = e, { tabindex: g = ze("SMUI:chips:chip:focusable") ? 0 : -1 } = e, m, E, v, S = {};
  const C = ze("SMUI:chips:nonInteractive");
  st(t, C, (j) => n(9, o = j));
  const D = ze("SMUI:chips:choice");
  st(t, D, (j) => n(2, a = j));
  const M = ze("SMUI:chips:filter");
  st(t, M, (j) => n(3, l = j));
  const _ = ze("SMUI:chips:chip:isSelected");
  st(t, _, (j) => n(10, u = j)), ft(() => {
    let j = { focus: A, addAttr: L };
    return _e(I(), "SMUIChipsChipPrimaryAction:mount", j), () => {
      _e(I(), "SMUIChipsChipPrimaryAction:unmount", j);
    };
  });
  function L(j, K) {
    S[j] !== K && n(7, S[j] = K, S);
  }
  function k(j) {
    S.tabindex !== m.getAttribute("tabindex") ? ns().then(j) : j();
  }
  function A() {
    k(() => {
      v && v.focus();
    });
  }
  function b() {
    return E && E.getElement();
  }
  function I() {
    return m;
  }
  function T(j) {
    le[j ? "unshift" : "push"](() => {
      E = j, n(5, E);
    });
  }
  function H(j) {
    le[j ? "unshift" : "push"](() => {
      v = j, n(6, v);
    });
  }
  function q(j) {
    le[j ? "unshift" : "push"](() => {
      m = j, n(4, m);
    });
  }
  return t.$$set = (j) => {
    e = X(X({}, e), nt(j)), n(16, s = ge(e, r)), "use" in j && n(0, h = j.use), "class" in j && n(1, p = j.class), "tabindex" in j && n(17, g = j.tabindex), "$$scope" in j && n(21, f = j.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty & /*$filter, $choice, tabindex*/
    131084 && n(8, i = {
      role: l ? "checkbox" : a ? "radio" : "button",
      tabindex: g
    });
  }, [
    h,
    p,
    a,
    l,
    m,
    E,
    v,
    S,
    i,
    o,
    u,
    d,
    C,
    D,
    M,
    _,
    s,
    g,
    A,
    b,
    I,
    f,
    c,
    T,
    H,
    q
  ];
}
class bg extends Me {
  constructor(e) {
    super(), De(this, e, _g, gg, Ce, {
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
function aa(t) {
  let e;
  return {
    c() {
      e = ne("span"), P(e, "class", "mdc-deprecated-chip-trailing-action__touch");
    },
    m(n, i) {
      V(n, e, i);
    },
    d(n) {
      n && B(e);
    }
  };
}
function vg(t) {
  let e, n, i, r, s, a, l, o, u, c, f, d, h, p, g, m = (
    /*touch*/
    t[4] && aa()
  );
  const E = (
    /*#slots*/
    t[23].default
  ), v = Ie(
    E,
    t,
    /*$$scope*/
    t[22],
    null
  );
  let S = [
    {
      class: a = se({
        [
          /*icon$class*/
          t[7]
        ]: !0,
        "mdc-deprecated-chip-trailing-action__icon": !0
      })
    },
    Ve(
      /*$$restProps*/
      t[17],
      "icon$"
    )
  ], C = {};
  for (let _ = 0; _ < S.length; _ += 1)
    C = X(C, S[_]);
  let D = [
    { type: "button" },
    {
      class: o = se({
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
      ).map(oa).concat([
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
    Kt(
      /*$$restProps*/
      t[17],
      ["icon$"]
    )
  ], M = {};
  for (let _ = 0; _ < D.length; _ += 1)
    M = X(M, D[_]);
  return {
    c() {
      e = ne("button"), n = ne("span"), i = ae(), m && m.c(), r = ae(), s = ne("span"), v && v.c(), P(n, "class", "mdc-deprecated-chip-trailing-action__ripple"), ce(s, C), ce(e, M);
    },
    m(_, L) {
      V(_, e, L), J(e, n), J(e, i), m && m.m(e, null), J(e, r), J(e, s), v && v.m(s, null), e.autofocus && e.focus(), t[24](e), h = !0, p || (g = [
        he(l = xe.call(
          null,
          s,
          /*icon$use*/
          t[6]
        )),
        he(f = Ft.call(null, e, {
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
        he(d = xe.call(
          null,
          e,
          /*use*/
          t[0]
        )),
        he(
          /*forwardEvents*/
          t[13].call(null, e)
        ),
        ue(e, "click", function() {
          pe(
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
        ue(e, "keydown", function() {
          pe(
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
      ], p = !0);
    },
    p(_, [L]) {
      t = _, /*touch*/
      t[4] ? m || (m = aa(), m.c(), m.m(e, r)) : m && (m.d(1), m = null), v && v.p && (!h || L & /*$$scope*/
      4194304) && Ae(
        v,
        E,
        t,
        /*$$scope*/
        t[22],
        h ? Ee(
          E,
          /*$$scope*/
          t[22],
          L,
          null
        ) : ye(
          /*$$scope*/
          t[22]
        ),
        null
      ), ce(s, C = me(S, [
        (!h || L & /*icon$class*/
        128 && a !== (a = se({
          [
            /*icon$class*/
            t[7]
          ]: !0,
          "mdc-deprecated-chip-trailing-action__icon": !0
        }))) && { class: a },
        L & /*$$restProps*/
        131072 && Ve(
          /*$$restProps*/
          t[17],
          "icon$"
        )
      ])), l && pe(l.update) && L & /*icon$use*/
      64 && l.update.call(
        null,
        /*icon$use*/
        t[6]
      ), ce(e, M = me(D, [
        { type: "button" },
        (!h || L & /*className, internalClasses*/
        1026 && o !== (o = se({
          [
            /*className*/
            t[1]
          ]: !0,
          "mdc-deprecated-chip-trailing-action": !0,
          .../*internalClasses*/
          t[10]
        }))) && { class: o },
        (!h || L & /*internalStyles, style*/
        2052 && u !== (u = Object.entries(
          /*internalStyles*/
          t[11]
        ).map(oa).concat([
          /*style*/
          t[2]
        ]).join(" "))) && { style: u },
        (!h || L & /*nonNavigable*/
        32 && c !== (c = /*nonNavigable*/
        t[5] ? "true" : void 0)) && { "aria-hidden": c },
        { tabindex: "-1" },
        L & /*internalAttrs*/
        4096 && /*internalAttrs*/
        t[12],
        L & /*$$restProps*/
        131072 && Kt(
          /*$$restProps*/
          t[17],
          ["icon$"]
        )
      ])), f && pe(f.update) && L & /*ripple*/
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
      }), d && pe(d.update) && L & /*use*/
      1 && d.update.call(
        null,
        /*use*/
        t[0]
      );
    },
    i(_) {
      h || (y(v, _), h = !0);
    },
    o(_) {
      O(v, _), h = !1;
    },
    d(_) {
      _ && B(e), m && m.d(), v && v.d(_), t[24](null), p = !1, Ye(g);
    }
  };
}
const oa = ([t, e]) => `${t}: ${e};`;
function Ig(t, e, n) {
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
  let r = ge(e, i), { $$slots: s = {}, $$scope: a } = e;
  const { MDCChipTrailingActionFoundation: l } = fs, o = rt(Je());
  let { use: u = [] } = e, { class: c = "" } = e, { style: f = "" } = e, { ripple: d = !0 } = e, { touch: h = !1 } = e, { nonNavigable: p = !1 } = e, { icon$use: g = [] } = e, { icon$class: m = "" } = e, E, v, S = {}, C = {}, D = {};
  ft(() => {
    n(9, v = new l({
      focus: () => {
        const N = q();
        b(() => {
          N.focus();
        });
      },
      getAttribute: k,
      notifyInteraction: (N) => _e(q(), "SMUIChipTrailingAction:interaction", { trigger: N }, void 0, !0),
      notifyNavigation: (N) => {
        _e(q(), "SMUIChipTrailingAction:navigation", { key: N }, void 0, !0);
      },
      setAttribute: A
    }));
    const K = { isNavigable: I, focus: T, removeFocus: H };
    return _e(q(), "SMUIChipsChipTrailingAction:mount", K), v.init(), () => {
      _e(q(), "SMUIChipsChipTrailingAction:unmount", K), v.destroy();
    };
  });
  function M(K) {
    S[K] || n(10, S[K] = !0, S);
  }
  function _(K) {
    (!(K in S) || S[K]) && n(10, S[K] = !1, S);
  }
  function L(K, N) {
    C[K] != N && (N === "" || N == null ? (delete C[K], n(11, C)) : n(11, C[K] = N, C));
  }
  function k(K) {
    var N;
    return K in D ? (N = D[K]) !== null && N !== void 0 ? N : null : q().getAttribute(K);
  }
  function A(K, N) {
    D[K] !== N && n(12, D[K] = N, D);
  }
  function b(K) {
    D.tabindex !== E.getAttribute("tabindex") ? ns().then(K) : K();
  }
  function I() {
    return v.isNavigable();
  }
  function T() {
    v.focus();
  }
  function H() {
    v.removeFocus();
  }
  function q() {
    return E;
  }
  function j(K) {
    le[K ? "unshift" : "push"](() => {
      E = K, n(8, E);
    });
  }
  return t.$$set = (K) => {
    e = X(X({}, e), nt(K)), n(17, r = ge(e, i)), "use" in K && n(0, u = K.use), "class" in K && n(1, c = K.class), "style" in K && n(2, f = K.style), "ripple" in K && n(3, d = K.ripple), "touch" in K && n(4, h = K.touch), "nonNavigable" in K && n(5, p = K.nonNavigable), "icon$use" in K && n(6, g = K.icon$use), "icon$class" in K && n(7, m = K.icon$class), "$$scope" in K && n(22, a = K.$$scope);
  }, [
    u,
    c,
    f,
    d,
    h,
    p,
    g,
    m,
    E,
    v,
    S,
    C,
    D,
    o,
    M,
    _,
    L,
    r,
    I,
    T,
    H,
    q,
    a,
    s,
    j
  ];
}
class Eg extends Me {
  constructor(e) {
    super(), De(this, e, Ig, vg, Ce, {
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
function Ag(t) {
  let e, n;
  const i = (
    /*#slots*/
    t[1].default
  ), r = Ie(
    i,
    t,
    /*$$scope*/
    t[0],
    null
  );
  return {
    c() {
      e = ne("span"), r && r.c(), P(e, "class", "oscd-icon");
    },
    m(s, a) {
      V(s, e, a), r && r.m(e, null), n = !0;
    },
    p(s, [a]) {
      r && r.p && (!n || a & /*$$scope*/
      1) && Ae(
        r,
        i,
        s,
        /*$$scope*/
        s[0],
        n ? Ee(
          i,
          /*$$scope*/
          s[0],
          a,
          null
        ) : ye(
          /*$$scope*/
          s[0]
        ),
        null
      );
    },
    i(s) {
      n || (y(r, s), n = !0);
    },
    o(s) {
      O(r, s), n = !1;
    },
    d(s) {
      s && B(e), r && r.d(s);
    }
  };
}
function yg(t, e, n) {
  let { $$slots: i = {}, $$scope: r } = e;
  return t.$$set = (s) => {
    "$$scope" in s && n(0, r = s.$$scope);
  }, [r, i];
}
class dn extends Me {
  constructor(e) {
    super(), De(this, e, yg, Ag, Ce, {});
  }
}
function Cg(t) {
  let e, n;
  return {
    c() {
      e = ut("svg"), n = ut("path"), P(n, "d", "M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"), P(
        e,
        "style",
        /*svgStyles*/
        t[0]
      ), P(e, "xmlns", "http://www.w3.org/2000/svg"), P(e, "height", "24px"), P(e, "viewBox", "0 -960 960 960"), P(e, "width", "24px"), P(e, "fill", "#e8eaed");
    },
    m(i, r) {
      V(i, e, r), J(e, n);
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
      i && B(e);
    }
  };
}
function Sg(t) {
  let e, n;
  return e = new dn({
    props: {
      $$slots: { default: [Cg] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      ie(e.$$.fragment);
    },
    m(i, r) {
      ee(e, i, r), n = !0;
    },
    p(i, [r]) {
      const s = {};
      r & /*$$scope, svgStyles*/
      3 && (s.$$scope = { dirty: r, ctx: i }), e.$set(s);
    },
    i(i) {
      n || (y(e.$$.fragment, i), n = !0);
    },
    o(i) {
      O(e.$$.fragment, i), n = !1;
    },
    d(i) {
      te(e, i);
    }
  };
}
function Tg(t, e, n) {
  let { svgStyles: i = "" } = e;
  return t.$$set = (r) => {
    "svgStyles" in r && n(0, i = r.svgStyles);
  }, [i];
}
class Lg extends Me {
  constructor(e) {
    super(), De(this, e, Tg, Sg, Ce, { svgStyles: 0 });
  }
}
function Og(t) {
  let e, n;
  return {
    c() {
      e = ut("svg"), n = ut("path"), P(n, "d", "m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"), P(
        e,
        "style",
        /*svgStyles*/
        t[0]
      ), P(e, "xmlns", "http://www.w3.org/2000/svg"), P(e, "viewBox", "0 -960 960 960"), P(e, "width", "24px");
    },
    m(i, r) {
      V(i, e, r), J(e, n);
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
      i && B(e);
    }
  };
}
function Rg(t) {
  let e, n;
  return e = new dn({
    props: {
      $$slots: { default: [Og] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      ie(e.$$.fragment);
    },
    m(i, r) {
      ee(e, i, r), n = !0;
    },
    p(i, [r]) {
      const s = {};
      r & /*$$scope, svgStyles*/
      3 && (s.$$scope = { dirty: r, ctx: i }), e.$set(s);
    },
    i(i) {
      n || (y(e.$$.fragment, i), n = !0);
    },
    o(i) {
      O(e.$$.fragment, i), n = !1;
    },
    d(i) {
      te(e, i);
    }
  };
}
function Dg(t, e, n) {
  let { svgStyles: i = "" } = e;
  return t.$$set = (r) => {
    "svgStyles" in r && n(0, i = r.svgStyles);
  }, [i];
}
class ds extends Me {
  constructor(e) {
    super(), De(this, e, Dg, Rg, Ce, { svgStyles: 0 });
  }
}
function Mg(t) {
  let e, n;
  return {
    c() {
      e = ut("svg"), n = ut("path"), P(n, "d", "M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z"), P(
        e,
        "style",
        /*svgStyles*/
        t[0]
      ), P(e, "xmlns", "http://www.w3.org/2000/svg"), P(e, "viewBox", "0 -960 960 960");
    },
    m(i, r) {
      V(i, e, r), J(e, n);
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
      i && B(e);
    }
  };
}
function kg(t) {
  let e, n;
  return e = new dn({
    props: {
      $$slots: { default: [Mg] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      ie(e.$$.fragment);
    },
    m(i, r) {
      ee(e, i, r), n = !0;
    },
    p(i, [r]) {
      const s = {};
      r & /*$$scope, svgStyles*/
      3 && (s.$$scope = { dirty: r, ctx: i }), e.$set(s);
    },
    i(i) {
      n || (y(e.$$.fragment, i), n = !0);
    },
    o(i) {
      O(e.$$.fragment, i), n = !1;
    },
    d(i) {
      te(e, i);
    }
  };
}
function Fg(t, e, n) {
  let { svgStyles: i = "" } = e;
  return t.$$set = (r) => {
    "svgStyles" in r && n(0, i = r.svgStyles);
  }, [i];
}
class Ng extends Me {
  constructor(e) {
    super(), De(this, e, Fg, kg, Ce, { svgStyles: 0 });
  }
}
function Hg(t) {
  let e, n;
  return {
    c() {
      e = ut("svg"), n = ut("path"), P(n, "d", "m590-160 80 80H240q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h360l200 240v480q0 20-8.5 36.5T768-96L560-302q-17 11-37 16.5t-43 5.5q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 23-5.5 43T618-360l102 104v-356L562-800H240v640h350ZM480-360q33 0 56.5-23.5T560-440q0-33-23.5-56.5T480-520q-33 0-56.5 23.5T400-440q0 33 23.5 56.5T480-360Zm0-80Zm0 0Z"), P(
        e,
        "style",
        /*svgStyles*/
        t[0]
      ), P(e, "xmlns", "http://www.w3.org/2000/svg"), P(e, "viewBox", "0 -960 960 960");
    },
    m(i, r) {
      V(i, e, r), J(e, n);
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
      i && B(e);
    }
  };
}
function Pg(t) {
  let e, n;
  return e = new dn({
    props: {
      $$slots: { default: [Hg] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      ie(e.$$.fragment);
    },
    m(i, r) {
      ee(e, i, r), n = !0;
    },
    p(i, [r]) {
      const s = {};
      r & /*$$scope, svgStyles*/
      3 && (s.$$scope = { dirty: r, ctx: i }), e.$set(s);
    },
    i(i) {
      n || (y(e.$$.fragment, i), n = !0);
    },
    o(i) {
      O(e.$$.fragment, i), n = !1;
    },
    d(i) {
      te(e, i);
    }
  };
}
function wg(t, e, n) {
  let { svgStyles: i = "" } = e;
  return t.$$set = (r) => {
    "svgStyles" in r && n(0, i = r.svgStyles);
  }, [i];
}
class Ug extends Me {
  constructor(e) {
    super(), De(this, e, wg, Pg, Ce, { svgStyles: 0 });
  }
}
function Bg(t) {
  let e, n;
  return {
    c() {
      e = ut("svg"), n = ut("path"), P(n, "d", "M480-160q-134 0-227-93t-93-227q0-134 93-227t227-93q69 0 132 28.5T720-690v-110h80v280H520v-80h168q-32-56-87.5-88T480-720q-100 0-170 70t-70 170q0 100 70 170t170 70q77 0 139-44t87-116h84q-28 106-114 173t-196 67Z"), P(e, "xmlns", "http://www.w3.org/2000/svg"), P(e, "height", "24px"), P(e, "viewBox", "0 -960 960 960"), P(e, "width", "24px"), P(e, "fill", "#e8eaed");
    },
    m(i, r) {
      V(i, e, r), J(e, n);
    },
    p: Qe,
    d(i) {
      i && B(e);
    }
  };
}
function Vg(t) {
  let e, n;
  return e = new dn({
    props: {
      $$slots: { default: [Bg] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      ie(e.$$.fragment);
    },
    m(i, r) {
      ee(e, i, r), n = !0;
    },
    p(i, [r]) {
      const s = {};
      r & /*$$scope*/
      2 && (s.$$scope = { dirty: r, ctx: i }), e.$set(s);
    },
    i(i) {
      n || (y(e.$$.fragment, i), n = !0);
    },
    o(i) {
      O(e.$$.fragment, i), n = !1;
    },
    d(i) {
      te(e, i);
    }
  };
}
function Gg(t, e, n) {
  let { svgStyles: i = "" } = e;
  return t.$$set = (r) => {
    "svgStyles" in r && n(0, i = r.svgStyles);
  }, [i];
}
class jg extends Me {
  constructor(e) {
    super(), De(this, e, Gg, Vg, Ce, { svgStyles: 0 });
  }
}
function qg(t) {
  let e, n;
  return {
    c() {
      e = ut("svg"), n = ut("path"), P(n, "d", "M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"), P(
        e,
        "style",
        /*svgStyles*/
        t[0]
      ), P(e, "xmlns", "http://www.w3.org/2000/svg"), P(e, "viewBox", "0 -960 960 960");
    },
    m(i, r) {
      V(i, e, r), J(e, n);
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
      i && B(e);
    }
  };
}
function Wg(t) {
  let e, n;
  return e = new dn({
    props: {
      $$slots: { default: [qg] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      ie(e.$$.fragment);
    },
    m(i, r) {
      ee(e, i, r), n = !0;
    },
    p(i, [r]) {
      const s = {};
      r & /*$$scope, svgStyles*/
      3 && (s.$$scope = { dirty: r, ctx: i }), e.$set(s);
    },
    i(i) {
      n || (y(e.$$.fragment, i), n = !0);
    },
    o(i) {
      O(e.$$.fragment, i), n = !1;
    },
    d(i) {
      te(e, i);
    }
  };
}
function zg(t, e, n) {
  let { svgStyles: i = "" } = e;
  return t.$$set = (r) => {
    "svgStyles" in r && n(0, i = r.svgStyles);
  }, [i];
}
class Kg extends Me {
  constructor(e) {
    super(), De(this, e, zg, Wg, Ce, { svgStyles: 0 });
  }
}
function Xg(t) {
  let e, n;
  return {
    c() {
      e = ut("svg"), n = ut("path"), P(n, "d", "M200-440v-80h560v80H200Z"), P(e, "xmlns", "http://www.w3.org/2000/svg"), P(e, "height", "24px"), P(e, "viewBox", "0 -960 960 960"), P(e, "width", "24px"), P(e, "fill", "#e8eaed");
    },
    m(i, r) {
      V(i, e, r), J(e, n);
    },
    p: Qe,
    d(i) {
      i && B(e);
    }
  };
}
function Yg(t) {
  let e, n;
  return e = new dn({
    props: {
      $$slots: { default: [Xg] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      ie(e.$$.fragment);
    },
    m(i, r) {
      ee(e, i, r), n = !0;
    },
    p(i, [r]) {
      const s = {};
      r & /*$$scope*/
      2 && (s.$$scope = { dirty: r, ctx: i }), e.$set(s);
    },
    i(i) {
      n || (y(e.$$.fragment, i), n = !0);
    },
    o(i) {
      O(e.$$.fragment, i), n = !1;
    },
    d(i) {
      te(e, i);
    }
  };
}
function Zg(t, e, n) {
  let { svgStyles: i = "" } = e;
  return t.$$set = (r) => {
    "svgStyles" in r && n(0, i = r.svgStyles);
  }, [i];
}
class Qg extends Me {
  constructor(e) {
    super(), De(this, e, Zg, Yg, Ce, { svgStyles: 0 });
  }
}
function Jg(t) {
  let e, n;
  return {
    c() {
      e = ut("svg"), n = ut("path"), P(n, "d", "M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"), P(
        e,
        "style",
        /*svgStyles*/
        t[0]
      ), P(e, "xmlns", "http://www.w3.org/2000/svg"), P(e, "viewBox", "0 -960 960 960");
    },
    m(i, r) {
      V(i, e, r), J(e, n);
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
      i && B(e);
    }
  };
}
function xg(t) {
  let e, n;
  return e = new dn({
    props: {
      $$slots: { default: [Jg] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      ie(e.$$.fragment);
    },
    m(i, r) {
      ee(e, i, r), n = !0;
    },
    p(i, [r]) {
      const s = {};
      r & /*$$scope, svgStyles*/
      3 && (s.$$scope = { dirty: r, ctx: i }), e.$set(s);
    },
    i(i) {
      n || (y(e.$$.fragment, i), n = !0);
    },
    o(i) {
      O(e.$$.fragment, i), n = !1;
    },
    d(i) {
      te(e, i);
    }
  };
}
function $g(t, e, n) {
  let { svgStyles: i = "" } = e;
  return t.$$set = (r) => {
    "svgStyles" in r && n(0, i = r.svgStyles);
  }, [i];
}
class e_ extends Me {
  constructor(e) {
    super(), De(this, e, $g, xg, Ce, { svgStyles: 0 });
  }
}
function t_(t) {
  let e, n;
  return {
    c() {
      e = ut("svg"), n = ut("path"), P(n, "d", "M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"), P(
        e,
        "style",
        /*svgStyles*/
        t[0]
      ), P(e, "xmlns", "http://www.w3.org/2000/svg"), P(e, "viewBox", "0 -960 960 960");
    },
    m(i, r) {
      V(i, e, r), J(e, n);
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
      i && B(e);
    }
  };
}
function n_(t) {
  let e, n;
  return e = new dn({
    props: {
      $$slots: { default: [t_] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      ie(e.$$.fragment);
    },
    m(i, r) {
      ee(e, i, r), n = !0;
    },
    p(i, [r]) {
      const s = {};
      r & /*$$scope, svgStyles*/
      3 && (s.$$scope = { dirty: r, ctx: i }), e.$set(s);
    },
    i(i) {
      n || (y(e.$$.fragment, i), n = !0);
    },
    o(i) {
      O(e.$$.fragment, i), n = !1;
    },
    d(i) {
      te(e, i);
    }
  };
}
function i_(t, e, n) {
  let { svgStyles: i = "" } = e;
  return t.$$set = (r) => {
    "svgStyles" in r && n(0, i = r.svgStyles);
  }, [i];
}
class r_ extends Me {
  constructor(e) {
    super(), De(this, e, i_, n_, Ce, { svgStyles: 0 });
  }
}
function s_(t) {
  let e;
  return {
    c() {
      e = ct(
        /*title*/
        t[0]
      );
    },
    m(n, i) {
      V(n, e, i);
    },
    p(n, i) {
      i & /*title*/
      1 && ht(
        e,
        /*title*/
        n[0]
      );
    },
    d(n) {
      n && B(e);
    }
  };
}
function ua(t) {
  let e, n;
  return e = new Eg({
    props: {
      $$slots: { default: [l_] },
      $$scope: { ctx: t }
    }
  }), e.$on("click", function() {
    pe(
      /*callback*/
      t[2]
    ) && t[2].apply(this, arguments);
  }), {
    c() {
      ie(e.$$.fragment);
    },
    m(i, r) {
      ee(e, i, r), n = !0;
    },
    p(i, r) {
      t = i;
      const s = {};
      r & /*$$scope*/
      16 && (s.$$scope = { dirty: r, ctx: t }), e.$set(s);
    },
    i(i) {
      n || (y(e.$$.fragment, i), n = !0);
    },
    o(i) {
      O(e.$$.fragment, i), n = !1;
    },
    d(i) {
      te(e, i);
    }
  };
}
function l_(t) {
  let e, n;
  return e = new ds({
    props: {
      svgStyles: "margin-left: 0; fill: unset;"
    }
  }), {
    c() {
      ie(e.$$.fragment);
    },
    m(i, r) {
      ee(e, i, r), n = !0;
    },
    p: Qe,
    i(i) {
      n || (y(e.$$.fragment, i), n = !0);
    },
    o(i) {
      O(e.$$.fragment, i), n = !1;
    },
    d(i) {
      te(e, i);
    }
  };
}
function a_(t) {
  let e, n, i, r;
  e = new bg({
    props: {
      $$slots: { default: [s_] },
      $$scope: { ctx: t }
    }
  });
  let s = (
    /*closeable*/
    t[1] && !/*disabled*/
    t[3] && ua(t)
  );
  return {
    c() {
      ie(e.$$.fragment), n = ae(), s && s.c(), i = Ze();
    },
    m(a, l) {
      ee(e, a, l), V(a, n, l), s && s.m(a, l), V(a, i, l), r = !0;
    },
    p(a, l) {
      const o = {};
      l & /*$$scope, title*/
      17 && (o.$$scope = { dirty: l, ctx: a }), e.$set(o), /*closeable*/
      a[1] && !/*disabled*/
      a[3] ? s ? (s.p(a, l), l & /*closeable, disabled*/
      10 && y(s, 1)) : (s = ua(a), s.c(), y(s, 1), s.m(i.parentNode, i)) : s && (Ue(), O(s, 1, 1, () => {
        s = null;
      }), Be());
    },
    i(a) {
      r || (y(e.$$.fragment, a), y(s), r = !0);
    },
    o(a) {
      O(e.$$.fragment, a), O(s), r = !1;
    },
    d(a) {
      a && (B(n), B(i)), te(e, a), s && s.d(a);
    }
  };
}
function o_(t) {
  let e, n;
  return e = new rg({
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
      $$slots: { default: [a_] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      ie(e.$$.fragment);
    },
    m(i, r) {
      ee(e, i, r), n = !0;
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
      n || (y(e.$$.fragment, i), n = !0);
    },
    o(i) {
      O(e.$$.fragment, i), n = !1;
    },
    d(i) {
      te(e, i);
    }
  };
}
function u_(t, e, n) {
  let { title: i = "" } = e, { closeable: r = !0 } = e, { callback: s } = e, { disabled: a = !1 } = e;
  return t.$$set = (l) => {
    "title" in l && n(0, i = l.title), "closeable" in l && n(1, r = l.closeable), "callback" in l && n(2, s = l.callback), "disabled" in l && n(3, a = l.disabled);
  }, [i, r, s, a];
}
class c_ extends Me {
  constructor(e) {
    super(), De(this, e, u_, o_, Ce, {
      title: 0,
      closeable: 1,
      callback: 2,
      disabled: 3
    });
  }
}
function f_(t) {
  let e, n, i, r, s, a, l, o, u;
  return {
    c() {
      e = ne("div"), n = ne("input"), i = ae(), r = ne("label"), s = ct(
        /*label*/
        t[1]
      ), a = ae(), l = ne("span"), P(n, "type", "date"), P(n, "id", "datetime-picker"), P(n, "class", "custom-text-field__input svelte-ar6zwk"), P(n, "placeholder", ""), P(r, "for", "datetime-picker"), P(r, "class", "custom-floating-label svelte-ar6zwk"), P(l, "class", "custom-line svelte-ar6zwk"), P(e, "class", "custom-text-field svelte-ar6zwk");
    },
    m(c, f) {
      V(c, e, f), J(e, n), $t(
        n,
        /*value*/
        t[0]
      ), J(e, i), J(e, r), J(r, s), J(e, a), J(e, l), o || (u = [
        ue(
          n,
          "input",
          /*input_input_handler*/
          t[3]
        ),
        ue(
          n,
          "change",
          /*handleDateTimeChange*/
          t[2]
        )
      ], o = !0);
    },
    p(c, [f]) {
      f & /*value*/
      1 && $t(
        n,
        /*value*/
        c[0]
      ), f & /*label*/
      2 && ht(
        s,
        /*label*/
        c[1]
      );
    },
    i: Qe,
    o: Qe,
    d(c) {
      c && B(e), o = !1, Ye(u);
    }
  };
}
function d_(t, e, n) {
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
class h_ extends Me {
  constructor(e) {
    super(), De(this, e, d_, f_, Ce, { label: 1, value: 0 });
  }
}
const Mt = [];
for (let t = 0; t < 256; ++t)
  Mt.push((t + 256).toString(16).slice(1));
function m_(t, e = 0) {
  return (Mt[t[e + 0]] + Mt[t[e + 1]] + Mt[t[e + 2]] + Mt[t[e + 3]] + "-" + Mt[t[e + 4]] + Mt[t[e + 5]] + "-" + Mt[t[e + 6]] + Mt[t[e + 7]] + "-" + Mt[t[e + 8]] + Mt[t[e + 9]] + "-" + Mt[t[e + 10]] + Mt[t[e + 11]] + Mt[t[e + 12]] + Mt[t[e + 13]] + Mt[t[e + 14]] + Mt[t[e + 15]]).toLowerCase();
}
let Fr;
const p_ = new Uint8Array(16);
function g_() {
  if (!Fr) {
    if (typeof crypto > "u" || !crypto.getRandomValues)
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    Fr = crypto.getRandomValues.bind(crypto);
  }
  return Fr(p_);
}
const __ = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), ca = { randomUUID: __ };
function Wo(t, e, n) {
  var r;
  if (ca.randomUUID && !t)
    return ca.randomUUID();
  t = t || {};
  const i = t.random ?? ((r = t.rng) == null ? void 0 : r.call(t)) ?? g_();
  if (i.length < 16)
    throw new Error("Random bytes length must be >= 16");
  return i[6] = i[6] & 15 | 64, i[8] = i[8] & 63 | 128, m_(i);
}
const b_ = (t) => ({}), fa = (t) => ({});
function da(t) {
  let e, n, i;
  function r(a) {
    t[16](a);
  }
  let s = { label: "Input" };
  return (
    /*inputValue*/
    t[5] !== void 0 && (s.value = /*inputValue*/
    t[5]), e = new cm({ props: s }), le.push(() => vt(e, "value", r)), {
      c() {
        ie(e.$$.fragment);
      },
      m(a, l) {
        ee(e, a, l), i = !0;
      },
      p(a, l) {
        const o = {};
        !n && l & /*inputValue*/
        32 && (n = !0, o.value = /*inputValue*/
        a[5], bt(() => n = !1)), e.$set(o);
      },
      i(a) {
        i || (y(e.$$.fragment, a), i = !0);
      },
      o(a) {
        O(e.$$.fragment, a), i = !1;
      },
      d(a) {
        te(e, a);
      }
    }
  );
}
function ha(t) {
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
    t[1]), e = new Bo({ props: l }), le.push(() => vt(e, "value", s)), le.push(() => vt(e, "selectedOptionIndex", a)), {
      c() {
        ie(e.$$.fragment);
      },
      m(u, c) {
        ee(e, u, c), r = !0;
      },
      p(u, c) {
        var d;
        const f = {};
        c & /*getSelectedFilterType*/
        128 && (f.data = /*getSelectedFilterType*/
        (d = u[7].inputType) == null ? void 0 : d.options), !n && c & /*inputValue*/
        32 && (n = !0, f.value = /*inputValue*/
        u[5], bt(() => n = !1)), !i && c & /*selectedOptionIndex*/
        2 && (i = !0, f.selectedOptionIndex = /*selectedOptionIndex*/
        u[1], bt(() => i = !1)), e.$set(f);
      },
      i(u) {
        r || (y(e.$$.fragment, u), r = !0);
      },
      o(u) {
        O(e.$$.fragment, u), r = !1;
      },
      d(u) {
        te(e, u);
      }
    }
  );
}
function ma(t) {
  let e, n, i;
  function r(a) {
    t[19](a);
  }
  let s = {};
  return (
    /*inputValue*/
    t[5] !== void 0 && (s.value = /*inputValue*/
    t[5]), e = new h_({ props: s }), le.push(() => vt(e, "value", r)), {
      c() {
        ie(e.$$.fragment);
      },
      m(a, l) {
        ee(e, a, l), i = !0;
      },
      p(a, l) {
        const o = {};
        !n && l & /*inputValue*/
        32 && (n = !0, o.value = /*inputValue*/
        a[5], bt(() => n = !1)), e.$set(o);
      },
      i(a) {
        i || (y(e.$$.fragment, a), i = !0);
      },
      o(a) {
        O(e.$$.fragment, a), i = !1;
      },
      d(a) {
        te(e, a);
      }
    }
  );
}
function pa(t) {
  let e, n, i;
  function r(a) {
    t[20](a);
  }
  let s = {};
  return (
    /*inputValue*/
    t[5] !== void 0 && (s.value = /*inputValue*/
    t[5]), e = new D_({ props: s }), le.push(() => vt(e, "value", r)), {
      c() {
        ie(e.$$.fragment);
      },
      m(a, l) {
        ee(e, a, l), i = !0;
      },
      p(a, l) {
        const o = {};
        !n && l & /*inputValue*/
        32 && (n = !0, o.value = /*inputValue*/
        a[5], bt(() => n = !1)), e.$set(o);
      },
      i(a) {
        i || (y(e.$$.fragment, a), i = !0);
      },
      o(a) {
        O(e.$$.fragment, a), i = !1;
      },
      d(a) {
        te(e, a);
      }
    }
  );
}
function v_(t) {
  let e;
  return {
    c() {
      e = ct(
        /*addFilterLabel*/
        t[3]
      );
    },
    m(n, i) {
      V(n, e, i);
    },
    p(n, i) {
      i & /*addFilterLabel*/
      8 && ht(
        e,
        /*addFilterLabel*/
        n[3]
      );
    },
    d(n) {
      n && B(e);
    }
  };
}
function I_(t) {
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
  return e = new c_({
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
      ie(e.$$.fragment);
    },
    m(r, s) {
      ee(e, r, s), n = !0;
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
      n || (y(e.$$.fragment, r), n = !0);
    },
    o(r) {
      O(e.$$.fragment, r), n = !1;
    },
    d(r) {
      te(e, r);
    }
  };
}
function E_(t) {
  var I, T, H, q, j, K, N, R;
  let e, n, i, r, s, a, l, o, u, c, f, d, h, p, g, m, E, v, S;
  function C(G) {
    t[15](G);
  }
  let D = {
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
  t[6] !== void 0 && (D.value = /*selectedFilterType*/
  t[6]), r = new Bo({ props: D }), le.push(() => vt(r, "value", C));
  let M = (
    /*getSelectedFilterType*/
    ((T = (I = t[7]) == null ? void 0 : I.inputType) == null ? void 0 : T.type) === "string" && da(t)
  ), _ = (
    /*getSelectedFilterType*/
    ((q = (H = t[7]) == null ? void 0 : H.inputType) == null ? void 0 : q.type) === "select" && ha(t)
  ), L = (
    /*getSelectedFilterType*/
    ((K = (j = t[7]) == null ? void 0 : j.inputType) == null ? void 0 : K.type) === "datepicker" && ma(t)
  ), k = (
    /*getSelectedFilterType*/
    ((R = (N = t[7]) == null ? void 0 : N.inputType) == null ? void 0 : R.type) === "timepicker" && pa(t)
  );
  d = new Wi({
    props: {
      callback: (
        /*addFilter*/
        t[10]
      ),
      disabled: (
        /*addFilterDisabled*/
        t[8]
      ),
      $$slots: { default: [v_] },
      $$scope: { ctx: t }
    }
  });
  const A = (
    /*#slots*/
    t[14]["filter-controls"]
  ), b = Ie(
    A,
    t,
    /*$$scope*/
    t[22],
    fa
  );
  return v = new cg({
    props: {
      chips: (
        /*activeFilters*/
        t[0]
      ),
      $$slots: {
        default: [
          I_,
          ({ chip: G }) => ({ 25: G }),
          ({ chip: G }) => G ? 33554432 : 0
        ]
      },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      e = ne("div"), n = ne("div"), i = ne("div"), ie(r.$$.fragment), a = ae(), M && M.c(), l = ae(), _ && _.c(), o = ae(), L && L.c(), u = ae(), k && k.c(), c = ae(), f = ne("div"), ie(d.$$.fragment), h = ae(), b && b.c(), p = ae(), g = ne("div"), m = ae(), E = ne("div"), ie(v.$$.fragment), P(i, "class", "filter-input-controls svelte-1tmo1p6"), P(f, "class", "filter-button-controls svelte-1tmo1p6"), P(n, "class", "input-section svelte-1tmo1p6"), P(g, "class", "separator svelte-1tmo1p6"), P(E, "class", "chip-section svelte-1tmo1p6"), P(e, "class", "filter-box-container svelte-1tmo1p6");
    },
    m(G, oe) {
      V(G, e, oe), J(e, n), J(n, i), ee(r, i, null), J(i, a), M && M.m(i, null), J(i, l), _ && _.m(i, null), J(i, o), L && L.m(i, null), J(i, u), k && k.m(i, null), J(n, c), J(n, f), ee(d, f, null), J(f, h), b && b.m(f, null), J(e, p), J(e, g), J(e, m), J(e, E), ee(v, E, null), S = !0;
    },
    p(G, oe) {
      var z, x, be, Se, He, re, W, Ke;
      const Oe = {};
      oe & /*disabled*/
      4 && (Oe.disabled = /*disabled*/
      G[2]), oe & /*selectFilterLabel*/
      16 && (Oe.label = /*selectFilterLabel*/
      G[4]), oe & /*convertTypeToSelection*/
      512 && (Oe.data = /*convertTypeToSelection*/
      G[9]), !s && oe & /*selectedFilterType*/
      64 && (s = !0, Oe.value = /*selectedFilterType*/
      G[6], bt(() => s = !1)), r.$set(Oe), /*getSelectedFilterType*/
      ((x = (z = G[7]) == null ? void 0 : z.inputType) == null ? void 0 : x.type) === "string" ? M ? (M.p(G, oe), oe & /*getSelectedFilterType*/
      128 && y(M, 1)) : (M = da(G), M.c(), y(M, 1), M.m(i, l)) : M && (Ue(), O(M, 1, 1, () => {
        M = null;
      }), Be()), /*getSelectedFilterType*/
      ((Se = (be = G[7]) == null ? void 0 : be.inputType) == null ? void 0 : Se.type) === "select" ? _ ? (_.p(G, oe), oe & /*getSelectedFilterType*/
      128 && y(_, 1)) : (_ = ha(G), _.c(), y(_, 1), _.m(i, o)) : _ && (Ue(), O(_, 1, 1, () => {
        _ = null;
      }), Be()), /*getSelectedFilterType*/
      ((re = (He = G[7]) == null ? void 0 : He.inputType) == null ? void 0 : re.type) === "datepicker" ? L ? (L.p(G, oe), oe & /*getSelectedFilterType*/
      128 && y(L, 1)) : (L = ma(G), L.c(), y(L, 1), L.m(i, u)) : L && (Ue(), O(L, 1, 1, () => {
        L = null;
      }), Be()), /*getSelectedFilterType*/
      ((Ke = (W = G[7]) == null ? void 0 : W.inputType) == null ? void 0 : Ke.type) === "timepicker" ? k ? (k.p(G, oe), oe & /*getSelectedFilterType*/
      128 && y(k, 1)) : (k = pa(G), k.c(), y(k, 1), k.m(i, null)) : k && (Ue(), O(k, 1, 1, () => {
        k = null;
      }), Be());
      const ve = {};
      oe & /*addFilterDisabled*/
      256 && (ve.disabled = /*addFilterDisabled*/
      G[8]), oe & /*$$scope, addFilterLabel*/
      4194312 && (ve.$$scope = { dirty: oe, ctx: G }), d.$set(ve), b && b.p && (!S || oe & /*$$scope*/
      4194304) && Ae(
        b,
        A,
        G,
        /*$$scope*/
        G[22],
        S ? Ee(
          A,
          /*$$scope*/
          G[22],
          oe,
          b_
        ) : ye(
          /*$$scope*/
          G[22]
        ),
        fa
      );
      const Xe = {};
      oe & /*activeFilters*/
      1 && (Xe.chips = /*activeFilters*/
      G[0]), oe & /*$$scope, chip*/
      37748736 && (Xe.$$scope = { dirty: oe, ctx: G }), v.$set(Xe);
    },
    i(G) {
      S || (y(r.$$.fragment, G), y(M), y(_), y(L), y(k), y(d.$$.fragment, G), y(b, G), y(v.$$.fragment, G), S = !0);
    },
    o(G) {
      O(r.$$.fragment, G), O(M), O(_), O(L), O(k), O(d.$$.fragment, G), O(b, G), O(v.$$.fragment, G), S = !1;
    },
    d(G) {
      G && B(e), te(r), M && M.d(), _ && _.d(), L && L.d(), k && k.d(), te(d), b && b.d(G), te(v);
    }
  };
}
function A_(t) {
  let e, n;
  return e = new Zp({
    props: {
      $$slots: { default: [E_] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      ie(e.$$.fragment);
    },
    m(i, r) {
      ee(e, i, r), n = !0;
    },
    p(i, [r]) {
      const s = {};
      r & /*$$scope, activeFilters, addFilterDisabled, addFilterLabel, inputValue, getSelectedFilterType, selectedOptionIndex, disabled, selectFilterLabel, convertTypeToSelection, selectedFilterType*/
      4195327 && (s.$$scope = { dirty: r, ctx: i }), e.$set(s);
    },
    i(i) {
      n || (y(e.$$.fragment, i), n = !0);
    },
    o(i) {
      O(e.$$.fragment, i), n = !1;
    },
    d(i) {
      te(e, i);
    }
  };
}
function y_(t, e, n) {
  let i, r, s, { $$slots: a = {}, $$scope: l } = e, { filterTypes: o = [] } = e, { activeFilters: u = [] } = e, { useOptionLabelInChipText: c = !1 } = e, { selectedOptionIndex: f = -1 } = e, { disabled: d = !1 } = e, { addFilterLabel: h = "Add Filter" } = e, { selectFilterLabel: p = "Filter Types" } = e, g = "", m = "";
  function E() {
    var I;
    if (!m || !g) {
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
        id: Wo(),
        key: s.label.toLowerCase(),
        value: g,
        operation: "=",
        text: `${m}: ${c && (!((I = s.inputType.options) === null || I === void 0) && I.length) ? s.inputType.options[f].label : g}`,
        disabled: !1
      }
    ];
    n(0, u = T), C(), S();
  }
  function v(I) {
    setTimeout(
      () => {
        n(0, u = u.filter((T) => T.id !== I)), C();
      },
      0
    );
  }
  function S() {
    n(5, g = ""), n(6, m = void 0);
  }
  function C() {
    const I = [...u];
    I.find((T) => T.key === "uuid") ? I.filter((T) => T.key !== "uuid").forEach((T) => {
      T.disabled = !0;
    }) : I.forEach((T) => {
      T.disabled = !1;
    }), n(0, u = I);
  }
  function D(I) {
    m = I, n(6, m);
  }
  function M(I) {
    g = I, n(5, g);
  }
  function _(I) {
    g = I, n(5, g);
  }
  function L(I) {
    f = I, n(1, f);
  }
  function k(I) {
    g = I, n(5, g);
  }
  function A(I) {
    g = I, n(5, g);
  }
  const b = (I) => v(I.id);
  return t.$$set = (I) => {
    "filterTypes" in I && n(12, o = I.filterTypes), "activeFilters" in I && n(0, u = I.activeFilters), "useOptionLabelInChipText" in I && n(13, c = I.useOptionLabelInChipText), "selectedOptionIndex" in I && n(1, f = I.selectedOptionIndex), "disabled" in I && n(2, d = I.disabled), "addFilterLabel" in I && n(3, h = I.addFilterLabel), "selectFilterLabel" in I && n(4, p = I.selectFilterLabel), "$$scope" in I && n(22, l = I.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty & /*filterTypes*/
    4096 && n(9, i = o.map((I) => ({ value: I.label, label: I.label }))), t.$$.dirty & /*selectedFilterType, inputValue*/
    96 && n(8, r = !m || !g), t.$$.dirty & /*filterTypes, selectedFilterType*/
    4160 && n(7, s = o.find((I) => I.label === m));
  }, [
    u,
    f,
    d,
    h,
    p,
    g,
    m,
    s,
    r,
    i,
    E,
    v,
    o,
    c,
    a,
    D,
    M,
    _,
    L,
    k,
    A,
    b,
    l
  ];
}
class C_ extends Me {
  constructor(e) {
    super(), De(this, e, y_, A_, Ce, {
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
function ga(t) {
  let e, n, i, r, s, a;
  return {
    c() {
      e = ne("div"), n = ne("div"), i = ne("div"), r = ae(), s = ne("span"), a = ct(
        /*message*/
        t[1]
      ), P(i, "class", "loading-spinner svelte-quxj5m"), P(s, "class", "loading-message svelte-quxj5m"), P(n, "class", "loading-spinner-container svelte-quxj5m"), P(e, "class", "overlay svelte-quxj5m");
    },
    m(l, o) {
      V(l, e, o), J(e, n), J(n, i), J(n, r), J(n, s), J(s, a);
    },
    p(l, o) {
      o & /*message*/
      2 && ht(
        a,
        /*message*/
        l[1]
      );
    },
    d(l) {
      l && B(e);
    }
  };
}
function S_(t) {
  let e, n = !/*loadingDone*/
  t[0] && ga(t);
  return {
    c() {
      e = ne("div"), n && n.c();
    },
    m(i, r) {
      V(i, e, r), n && n.m(e, null);
    },
    p(i, [r]) {
      /*loadingDone*/
      i[0] ? n && (n.d(1), n = null) : n ? n.p(i, r) : (n = ga(i), n.c(), n.m(e, null));
    },
    i: Qe,
    o: Qe,
    d(i) {
      i && B(e), n && n.d();
    }
  };
}
function T_(t, e, n) {
  let { loadingDone: i = !0 } = e, { message: r = "Loading..." } = e;
  return t.$$set = (s) => {
    "loadingDone" in s && n(0, i = s.loadingDone), "message" in s && n(1, r = s.message);
  }, [i, r];
}
class L_ extends Me {
  constructor(e) {
    super(), De(this, e, T_, S_, Ce, { loadingDone: 0, message: 1 });
  }
}
function O_(t) {
  let e, n, i, r, s, a, l, o, u;
  return {
    c() {
      e = ne("div"), n = ne("input"), i = ae(), r = ne("label"), s = ct(
        /*label*/
        t[1]
      ), a = ae(), l = ne("span"), P(n, "type", "datetime-local"), P(n, "id", "datetime-picker"), P(n, "class", "custom-text-field__input svelte-ar6zwk"), P(n, "placeholder", ""), P(r, "for", "datetime-picker"), P(r, "class", "custom-floating-label svelte-ar6zwk"), P(l, "class", "custom-line svelte-ar6zwk"), P(e, "class", "custom-text-field svelte-ar6zwk");
    },
    m(c, f) {
      V(c, e, f), J(e, n), $t(
        n,
        /*value*/
        t[0]
      ), J(e, i), J(e, r), J(r, s), J(e, a), J(e, l), o || (u = [
        ue(
          n,
          "input",
          /*input_input_handler*/
          t[3]
        ),
        ue(
          n,
          "change",
          /*handleDateTimeChange*/
          t[2]
        )
      ], o = !0);
    },
    p(c, [f]) {
      f & /*value*/
      1 && $t(
        n,
        /*value*/
        c[0]
      ), f & /*label*/
      2 && ht(
        s,
        /*label*/
        c[1]
      );
    },
    i: Qe,
    o: Qe,
    d(c) {
      c && B(e), o = !1, Ye(u);
    }
  };
}
function R_(t, e, n) {
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
class D_ extends Me {
  constructor(e) {
    super(), De(this, e, R_, O_, Ce, { label: 1, value: 0 });
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
var Gt = {
  CLOSED_CLASS: "mdc-linear-progress--closed",
  CLOSED_ANIMATION_OFF_CLASS: "mdc-linear-progress--closed-animation-off",
  INDETERMINATE_CLASS: "mdc-linear-progress--indeterminate",
  REVERSED_CLASS: "mdc-linear-progress--reversed",
  ANIMATION_READY_CLASS: "mdc-linear-progress--animation-ready"
}, Yt = {
  ARIA_HIDDEN: "aria-hidden",
  ARIA_VALUEMAX: "aria-valuemax",
  ARIA_VALUEMIN: "aria-valuemin",
  ARIA_VALUENOW: "aria-valuenow",
  BUFFER_BAR_SELECTOR: ".mdc-linear-progress__buffer-bar",
  FLEX_BASIS: "flex-basis",
  PRIMARY_BAR_SELECTOR: ".mdc-linear-progress__primary-bar"
}, ai = {
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
var M_ = (
  /** @class */
  function(t) {
    at(e, t);
    function e(n) {
      var i = t.call(this, fe(fe({}, e.defaultAdapter), n)) || this;
      return i.observer = null, i;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Gt;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Yt;
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
      this.determinate = !this.adapter.hasClass(Gt.INDETERMINATE_CLASS), this.adapter.addClass(Gt.ANIMATION_READY_CLASS), this.progress = 0, this.buffer = 1, this.observer = this.adapter.attachResizeObserver(function(i) {
        var r, s;
        if (!n.determinate)
          try {
            for (var a = Rt(i), l = a.next(); !l.done; l = a.next()) {
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
        this.adapter.removeClass(Gt.INDETERMINATE_CLASS), this.adapter.setAttribute(Yt.ARIA_VALUENOW, this.progress.toString()), this.adapter.setAttribute(Yt.ARIA_VALUEMAX, "1"), this.adapter.setAttribute(Yt.ARIA_VALUEMIN, "0"), this.setPrimaryBarProgress(this.progress), this.setBufferBarProgress(this.buffer);
        return;
      }
      this.observer && this.calculateAndSetDimensions(this.adapter.getWidth()), this.adapter.addClass(Gt.INDETERMINATE_CLASS), this.adapter.removeAttribute(Yt.ARIA_VALUENOW), this.adapter.removeAttribute(Yt.ARIA_VALUEMAX), this.adapter.removeAttribute(Yt.ARIA_VALUEMIN), this.setPrimaryBarProgress(1), this.setBufferBarProgress(1);
    }, e.prototype.isDeterminate = function() {
      return this.determinate;
    }, e.prototype.setProgress = function(n) {
      this.progress = n, this.determinate && (this.setPrimaryBarProgress(n), this.adapter.setAttribute(Yt.ARIA_VALUENOW, n.toString()));
    }, e.prototype.getProgress = function() {
      return this.progress;
    }, e.prototype.setBuffer = function(n) {
      this.buffer = n, this.determinate && this.setBufferBarProgress(n);
    }, e.prototype.getBuffer = function() {
      return this.buffer;
    }, e.prototype.open = function() {
      this.adapter.removeClass(Gt.CLOSED_CLASS), this.adapter.removeClass(Gt.CLOSED_ANIMATION_OFF_CLASS), this.adapter.removeAttribute(Yt.ARIA_HIDDEN);
    }, e.prototype.close = function() {
      this.adapter.addClass(Gt.CLOSED_CLASS), this.adapter.setAttribute(Yt.ARIA_HIDDEN, "true");
    }, e.prototype.isClosed = function() {
      return this.adapter.hasClass(Gt.CLOSED_CLASS);
    }, e.prototype.handleTransitionEnd = function() {
      this.adapter.hasClass(Gt.CLOSED_CLASS) && this.adapter.addClass(Gt.CLOSED_ANIMATION_OFF_CLASS);
    }, e.prototype.destroy = function() {
      t.prototype.destroy.call(this), this.observer && this.observer.disconnect();
    }, e.prototype.restartAnimation = function() {
      this.adapter.removeClass(Gt.ANIMATION_READY_CLASS), this.adapter.forceLayout(), this.adapter.addClass(Gt.ANIMATION_READY_CLASS);
    }, e.prototype.setPrimaryBarProgress = function(n) {
      var i = "scaleX(" + n + ")", r = typeof window < "u" ? Am(window, "transform") : "transform";
      this.adapter.setPrimaryBarStyle(r, i);
    }, e.prototype.setBufferBarProgress = function(n) {
      var i = n * 100 + "%";
      this.adapter.setBufferBarStyle(Yt.FLEX_BASIS, i);
    }, e.prototype.calculateAndSetDimensions = function(n) {
      var i = n * ai.PRIMARY_HALF, r = n * ai.PRIMARY_FULL, s = n * ai.SECONDARY_QUARTER, a = n * ai.SECONDARY_HALF, l = n * ai.SECONDARY_FULL;
      this.adapter.setStyle("--mdc-linear-progress-primary-half", i + "px"), this.adapter.setStyle("--mdc-linear-progress-primary-half-neg", -i + "px"), this.adapter.setStyle("--mdc-linear-progress-primary-full", r + "px"), this.adapter.setStyle("--mdc-linear-progress-primary-full-neg", -r + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-quarter", s + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-quarter-neg", -s + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-half", a + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-half-neg", -a + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-full", l + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-full-neg", -l + "px"), this.restartAnimation();
    }, e;
  }(Dt)
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
}, _a = {
  ARIA_SELECTED: "aria-selected",
  ARIA_SORT: "aria-sort"
}, Cn = {
  ARIA_SELECTED: _a.ARIA_SELECTED,
  ARIA_SORT: _a.ARIA_SORT
}, jt;
(function(t) {
  t.ASCENDING = "ascending", t.DESCENDING = "descending", t.NONE = "none", t.OTHER = "other";
})(jt || (jt = {}));
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
var k_ = (
  /** @class */
  function(t) {
    at(e, t);
    function e(n) {
      return t.call(this, fe(fe({}, e.defaultAdapter), n)) || this;
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
      return ro(this, void 0, void 0, function() {
        return ss(this, function(n) {
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
        a !== r && (this.adapter.removeClassNameByHeaderCellIndex(a, an.HEADER_CELL_SORTED), this.adapter.removeClassNameByHeaderCellIndex(a, an.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(a, Cn.ARIA_SORT, jt.NONE), this.adapter.setSortStatusLabelByHeaderCellIndex(a, jt.NONE));
      this.adapter.setClassNameByHeaderCellIndex(r, an.HEADER_CELL_SORTED);
      var l = this.adapter.getAttributeByHeaderCellIndex(r, Cn.ARIA_SORT), o = jt.NONE;
      l === jt.ASCENDING ? (this.adapter.setClassNameByHeaderCellIndex(r, an.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(r, Cn.ARIA_SORT, jt.DESCENDING), o = jt.DESCENDING) : l === jt.DESCENDING ? (this.adapter.removeClassNameByHeaderCellIndex(r, an.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(r, Cn.ARIA_SORT, jt.ASCENDING), o = jt.ASCENDING) : (this.adapter.setAttributeByHeaderCellIndex(r, Cn.ARIA_SORT, jt.ASCENDING), o = jt.ASCENDING), this.adapter.setSortStatusLabelByHeaderCellIndex(r, o), this.adapter.notifySortAction({
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
      i ? (this.adapter.addClassAtRowIndex(n, an.ROW_SELECTED), this.adapter.setAttributeAtRowIndex(n, Cn.ARIA_SELECTED, "true")) : (this.adapter.removeClassAtRowIndex(n, an.ROW_SELECTED), this.adapter.setAttributeAtRowIndex(n, Cn.ARIA_SELECTED, "false"));
    }, e;
  }(Dt)
);
const F_ = (t) => ({}), ba = (t) => ({}), N_ = (t) => ({}), va = (t) => ({});
function Ia(t) {
  let e, n, i, r, s;
  const a = (
    /*#slots*/
    t[36].progress
  ), l = Ie(
    a,
    t,
    /*$$scope*/
    t[35],
    va
  );
  return {
    c() {
      e = ne("div"), n = ne("div"), i = ae(), l && l.c(), P(n, "class", "mdc-data-table__scrim"), P(e, "class", "mdc-data-table__progress-indicator"), P(e, "style", r = Object.entries(
        /*progressIndicatorStyles*/
        t[13]
      ).map(Ea).join(" "));
    },
    m(o, u) {
      V(o, e, u), J(e, n), J(e, i), l && l.m(e, null), s = !0;
    },
    p(o, u) {
      l && l.p && (!s || u[1] & /*$$scope*/
      16) && Ae(
        l,
        a,
        o,
        /*$$scope*/
        o[35],
        s ? Ee(
          a,
          /*$$scope*/
          o[35],
          u,
          N_
        ) : ye(
          /*$$scope*/
          o[35]
        ),
        va
      ), (!s || u[0] & /*progressIndicatorStyles*/
      8192 && r !== (r = Object.entries(
        /*progressIndicatorStyles*/
        o[13]
      ).map(Ea).join(" "))) && P(e, "style", r);
    },
    i(o) {
      s || (y(l, o), s = !0);
    },
    o(o) {
      O(l, o), s = !1;
    },
    d(o) {
      o && B(e), l && l.d(o);
    }
  };
}
function H_(t) {
  let e, n, i, r, s, a, l, o, u, c, f, d, h, p;
  const g = (
    /*#slots*/
    t[36].default
  ), m = Ie(
    g,
    t,
    /*$$scope*/
    t[35],
    null
  );
  let E = [
    {
      class: r = se({
        [
          /*table$class*/
          t[6]
        ]: !0,
        "mdc-data-table__table": !0
      })
    },
    Ve(
      /*$$restProps*/
      t[25],
      "table$"
    )
  ], v = {};
  for (let A = 0; A < E.length; A += 1)
    v = X(v, E[A]);
  let S = [
    {
      class: a = se({
        [
          /*container$class*/
          t[4]
        ]: !0,
        "mdc-data-table__table-container": !0
      })
    },
    Ve(
      /*$$restProps*/
      t[25],
      "container$"
    )
  ], C = {};
  for (let A = 0; A < S.length; A += 1)
    C = X(C, S[A]);
  let D = (
    /*$$slots*/
    t[24].progress && Ia(t)
  );
  const M = (
    /*#slots*/
    t[36].paginate
  ), _ = Ie(
    M,
    t,
    /*$$scope*/
    t[35],
    ba
  );
  let L = [
    {
      class: c = se({
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
    Kt(
      /*$$restProps*/
      t[25],
      ["container$", "table$"]
    )
  ], k = {};
  for (let A = 0; A < L.length; A += 1)
    k = X(k, L[A]);
  return {
    c() {
      e = ne("div"), n = ne("div"), i = ne("table"), m && m.c(), o = ae(), D && D.c(), u = ae(), _ && _.c(), ce(i, v), ce(n, C), ce(e, k);
    },
    m(A, b) {
      V(A, e, b), J(e, n), J(n, i), m && m.m(i, null), t[37](n), J(e, o), D && D.m(e, null), J(e, u), _ && _.m(e, null), t[38](e), d = !0, h || (p = [
        he(s = xe.call(
          null,
          i,
          /*table$use*/
          t[5]
        )),
        he(l = xe.call(
          null,
          n,
          /*container$use*/
          t[3]
        )),
        he(f = xe.call(
          null,
          e,
          /*use*/
          t[0]
        )),
        he(
          /*forwardEvents*/
          t[15].call(null, e)
        ),
        ue(
          e,
          "SMUICheckbox:mount",
          /*SMUICheckbox_mount_handler*/
          t[39]
        ),
        ue(
          e,
          "SMUIDataTableHeader:mount",
          /*handleHeaderMount*/
          t[19]
        ),
        ue(
          e,
          "SMUIDataTableHeader:unmount",
          /*SMUIDataTableHeader_unmount_handler*/
          t[40]
        ),
        ue(
          e,
          "SMUIDataTableBody:mount",
          /*handleBodyMount*/
          t[20]
        ),
        ue(
          e,
          "SMUIDataTableBody:unmount",
          /*SMUIDataTableBody_unmount_handler*/
          t[41]
        ),
        ue(
          e,
          "SMUIDataTableHeaderCheckbox:change",
          /*SMUIDataTableHeaderCheckbox_change_handler*/
          t[42]
        ),
        ue(
          e,
          "SMUIDataTableHeader:click",
          /*handleHeaderRowClick*/
          t[22]
        ),
        ue(
          e,
          "SMUIDataTableRow:click",
          /*handleRowClick*/
          t[23]
        ),
        ue(
          e,
          "SMUIDataTableBodyCheckbox:change",
          /*handleBodyCheckboxChange*/
          t[21]
        )
      ], h = !0);
    },
    p(A, b) {
      m && m.p && (!d || b[1] & /*$$scope*/
      16) && Ae(
        m,
        g,
        A,
        /*$$scope*/
        A[35],
        d ? Ee(
          g,
          /*$$scope*/
          A[35],
          b,
          null
        ) : ye(
          /*$$scope*/
          A[35]
        ),
        null
      ), ce(i, v = me(E, [
        (!d || b[0] & /*table$class*/
        64 && r !== (r = se({
          [
            /*table$class*/
            A[6]
          ]: !0,
          "mdc-data-table__table": !0
        }))) && { class: r },
        b[0] & /*$$restProps*/
        33554432 && Ve(
          /*$$restProps*/
          A[25],
          "table$"
        )
      ])), s && pe(s.update) && b[0] & /*table$use*/
      32 && s.update.call(
        null,
        /*table$use*/
        A[5]
      ), ce(n, C = me(S, [
        (!d || b[0] & /*container$class*/
        16 && a !== (a = se({
          [
            /*container$class*/
            A[4]
          ]: !0,
          "mdc-data-table__table-container": !0
        }))) && { class: a },
        b[0] & /*$$restProps*/
        33554432 && Ve(
          /*$$restProps*/
          A[25],
          "container$"
        )
      ])), l && pe(l.update) && b[0] & /*container$use*/
      8 && l.update.call(
        null,
        /*container$use*/
        A[3]
      ), /*$$slots*/
      A[24].progress ? D ? (D.p(A, b), b[0] & /*$$slots*/
      16777216 && y(D, 1)) : (D = Ia(A), D.c(), y(D, 1), D.m(e, u)) : D && (Ue(), O(D, 1, 1, () => {
        D = null;
      }), Be()), _ && _.p && (!d || b[1] & /*$$scope*/
      16) && Ae(
        _,
        M,
        A,
        /*$$scope*/
        A[35],
        d ? Ee(
          M,
          /*$$scope*/
          A[35],
          b,
          F_
        ) : ye(
          /*$$scope*/
          A[35]
        ),
        ba
      ), ce(e, k = me(L, [
        (!d || b[0] & /*className, stickyHeader, internalClasses*/
        4102 && c !== (c = se({
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
        b[0] & /*$$restProps*/
        33554432 && Kt(
          /*$$restProps*/
          A[25],
          ["container$", "table$"]
        )
      ])), f && pe(f.update) && b[0] & /*use*/
      1 && f.update.call(
        null,
        /*use*/
        A[0]
      );
    },
    i(A) {
      d || (y(m, A), y(D), y(_, A), d = !0);
    },
    o(A) {
      O(m, A), O(D), O(_, A), d = !1;
    },
    d(A) {
      A && B(e), m && m.d(A), t[37](null), D && D.d(), _ && _.d(A), t[38](null), h = !1, Ye(p);
    }
  };
}
const Ea = ([t, e]) => `${t}: ${e};`;
function P_(t, e, n) {
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
  let r = ge(e, i), s, a, l, { $$slots: o = {}, $$scope: u } = e;
  const c = es(o), { closest: f } = vi, d = rt(Je());
  let { use: h = [] } = e, { class: p = "" } = e, { stickyHeader: g = !1 } = e, { sortable: m = !1 } = e, { sort: E = null } = e, { sortDirection: v = "ascending" } = e, { sortAscendingAriaLabel: S = "sorted, ascending" } = e, { sortDescendingAriaLabel: C = "sorted, descending" } = e, { container$use: D = [] } = e, { container$class: M = "" } = e, { table$use: _ = [] } = e, { table$class: L = "" } = e, k, A, b, I, T, H = {}, q = { height: "auto", top: "initial" }, j = ze("SMUI:addLayoutListener"), K, N = !1, R = At(!1);
  st(t, R, (F) => n(34, s = F));
  let G = At(E);
  st(t, G, (F) => n(45, l = F));
  let oe = At(v);
  st(t, oe, (F) => n(44, a = F)), Ge("SMUI:checkbox:context", "data-table"), Ge("SMUI:linear-progress:context", "data-table"), Ge("SMUI:linear-progress:closed", R), Ge("SMUI:data-table:sortable", m), Ge("SMUI:data-table:sort", G), Ge("SMUI:data-table:sortDirection", oe), Ge("SMUI:data-table:sortAscendingAriaLabel", S), Ge("SMUI:data-table:sortDescendingAriaLabel", C), j && (K = j(Ke));
  let Oe;
  ft(() => (n(7, A = new k_({
    addClass: x,
    removeClass: be,
    getHeaderCellElements: () => {
      var F;
      return (F = I == null ? void 0 : I.cells.map(($) => $.element)) !== null && F !== void 0 ? F : [];
    },
    getHeaderCellCount: () => {
      var F;
      return (F = I == null ? void 0 : I.cells.length) !== null && F !== void 0 ? F : 0;
    },
    getAttributeByHeaderCellIndex: (F, $) => {
      var Q;
      return (Q = I == null ? void 0 : I.orderedCells[F].getAttr($)) !== null && Q !== void 0 ? Q : null;
    },
    setAttributeByHeaderCellIndex: (F, $, Q) => {
      I == null || I.orderedCells[F].addAttr($, Q);
    },
    setClassNameByHeaderCellIndex: (F, $) => {
      I == null || I.orderedCells[F].addClass($);
    },
    removeClassNameByHeaderCellIndex: (F, $) => {
      I == null || I.orderedCells[F].removeClass($);
    },
    notifySortAction: (F) => {
      n(26, E = F.columnId), n(27, v = F.sortValue), _e(qe(), "SMUIDataTable:sorted", F, void 0, !0);
    },
    getTableContainerHeight: () => b.getBoundingClientRect().height,
    getTableHeaderHeight: () => {
      const F = qe().querySelector(".mdc-data-table__header-row");
      if (!F)
        throw new Error("MDCDataTable: Table header element not found.");
      return F.getBoundingClientRect().height;
    },
    setProgressIndicatorStyles: (F) => {
      n(13, q = F);
    },
    addClassAtRowIndex: (F, $) => {
      T == null || T.orderedRows[F].addClass($);
    },
    getRowCount: () => {
      var F;
      return (F = T == null ? void 0 : T.rows.length) !== null && F !== void 0 ? F : 0;
    },
    getRowElements: () => {
      var F;
      return (F = T == null ? void 0 : T.rows.map(($) => $.element)) !== null && F !== void 0 ? F : [];
    },
    getRowIdAtIndex: (F) => {
      var $;
      return ($ = T == null ? void 0 : T.orderedRows[F].rowId) !== null && $ !== void 0 ? $ : null;
    },
    getRowIndexByChildElement: (F) => {
      var $;
      return ($ = T == null ? void 0 : T.orderedRows.map((Q) => Q.element).indexOf(f(F, ".mdc-data-table__row"))) !== null && $ !== void 0 ? $ : -1;
    },
    getSelectedRowCount: () => {
      var F;
      return (F = T == null ? void 0 : T.rows.filter(($) => $.selected).length) !== null && F !== void 0 ? F : 0;
    },
    isCheckboxAtRowIndexChecked: (F) => {
      const $ = T == null ? void 0 : T.orderedRows[F].checkbox;
      return $ ? $.checked : !1;
    },
    isHeaderRowCheckboxChecked: () => {
      const F = I == null ? void 0 : I.checkbox;
      return F ? F.checked : !1;
    },
    isRowsSelectable: () => !!qe().querySelector(".mdc-data-table__row-checkbox") || !!qe().querySelector(".mdc-data-table__header-row-checkbox"),
    notifyRowSelectionChanged: (F) => {
      const $ = T == null ? void 0 : T.orderedRows[F.rowIndex];
      $ && _e(
        qe(),
        "SMUIDataTable:rowSelectionChanged",
        {
          row: $.element,
          rowId: $.rowId,
          rowIndex: F.rowIndex,
          selected: F.selected
        },
        void 0,
        !0
      );
    },
    notifySelectedAll: () => {
      Se(!1), _e(qe(), "SMUIDataTable:selectedAll", void 0, void 0, !0);
    },
    notifyUnselectedAll: () => {
      Se(!1), _e(qe(), "SMUIDataTable:unselectedAll", void 0, void 0, !0);
    },
    notifyRowClick: (F) => {
      _e(qe(), "SMUIDataTable:rowClick", F, void 0, !0);
    },
    registerHeaderRowCheckbox: () => {
    },
    // Handled automatically.
    registerRowCheckboxes: () => {
    },
    // Handled automatically.
    removeClassAtRowIndex: (F, $) => {
      T == null || T.orderedRows[F].removeClass($);
    },
    setAttributeAtRowIndex: (F, $, Q) => {
      T == null || T.orderedRows[F].addAttr($, Q);
    },
    setHeaderRowCheckboxChecked: (F) => {
      const $ = I == null ? void 0 : I.checkbox;
      $ && ($.checked = F);
    },
    setHeaderRowCheckboxIndeterminate: Se,
    setRowCheckboxCheckedAtIndex: (F, $) => {
      const Q = T == null ? void 0 : T.orderedRows[F].checkbox;
      Q && (Q.checked = $);
    },
    setSortStatusLabelByHeaderCellIndex: (F, $) => {
    }
    // Handled automatically.
  })), A.init(), A.layout(), n(14, N = !0), () => {
    A.destroy();
  })), Qt(() => {
    K && K();
  });
  function ve(F) {
    n(10, I = F.detail);
  }
  function Xe(F) {
    n(11, T = F.detail);
  }
  function z(F) {
    A && A.handleRowCheckboxChange(F);
  }
  function x(F) {
    H[F] || n(12, H[F] = !0, H);
  }
  function be(F) {
    (!(F in H) || H[F]) && n(12, H[F] = !1, H);
  }
  function Se(F) {
    const $ = I == null ? void 0 : I.checkbox;
    $ && ($.indeterminate = F);
  }
  function He(F) {
    if (!A || !F.detail.target)
      return;
    const $ = f(F.detail.target, ".mdc-data-table__header-cell--with-sort");
    $ && W($);
  }
  function re(F) {
    if (!A || !F.detail.target)
      return;
    const $ = f(F.detail.target, ".mdc-data-table__row");
    $ && A && A.handleRowClick({ rowId: F.detail.rowId, row: $ });
  }
  function W(F) {
    var $, Q;
    const je = ($ = I == null ? void 0 : I.orderedCells) !== null && $ !== void 0 ? $ : [], mt = je.map((et) => et.element).indexOf(F);
    if (mt === -1)
      return;
    const dt = (Q = je[mt].columnId) !== null && Q !== void 0 ? Q : null;
    A.handleSortAction({ columnId: dt, columnIndex: mt, headerCell: F });
  }
  function Ke() {
    return A.layout();
  }
  function qe() {
    return k;
  }
  function gt(F) {
    le[F ? "unshift" : "push"](() => {
      b = F, n(9, b);
    });
  }
  function Y(F) {
    le[F ? "unshift" : "push"](() => {
      k = F, n(8, k);
    });
  }
  const Le = () => A && N && A.layout(), We = () => n(10, I = void 0), Pe = () => n(11, T = void 0), Ot = () => A && A.handleHeaderRowCheckboxChange();
  return t.$$set = (F) => {
    e = X(X({}, e), nt(F)), n(25, r = ge(e, i)), "use" in F && n(0, h = F.use), "class" in F && n(1, p = F.class), "stickyHeader" in F && n(2, g = F.stickyHeader), "sortable" in F && n(28, m = F.sortable), "sort" in F && n(26, E = F.sort), "sortDirection" in F && n(27, v = F.sortDirection), "sortAscendingAriaLabel" in F && n(29, S = F.sortAscendingAriaLabel), "sortDescendingAriaLabel" in F && n(30, C = F.sortDescendingAriaLabel), "container$use" in F && n(3, D = F.container$use), "container$class" in F && n(4, M = F.container$class), "table$use" in F && n(5, _ = F.table$use), "table$class" in F && n(6, L = F.table$class), "$$scope" in F && n(35, u = F.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty[0] & /*sort*/
    67108864 && kt(G, l = E, l), t.$$.dirty[0] & /*sortDirection*/
    134217728 && kt(oe, a = v, a), t.$$.dirty[0] & /*instance*/
    128 | t.$$.dirty[1] & /*previousProgressClosed, $progressClosed*/
    12 && c.progress && A && Oe !== s && (n(33, Oe = s), s ? A.hideProgress() : A.showProgress());
  }, [
    h,
    p,
    g,
    D,
    M,
    _,
    L,
    A,
    k,
    b,
    I,
    T,
    H,
    q,
    N,
    d,
    R,
    G,
    oe,
    ve,
    Xe,
    z,
    He,
    re,
    c,
    r,
    E,
    v,
    m,
    S,
    C,
    Ke,
    qe,
    Oe,
    s,
    u,
    o,
    gt,
    Y,
    Le,
    We,
    Pe,
    Ot
  ];
}
class w_ extends Me {
  constructor(e) {
    super(), De(
      this,
      e,
      P_,
      H_,
      Ce,
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
function U_(t) {
  let e, n, i, r, s;
  const a = (
    /*#slots*/
    t[10].default
  ), l = Ie(
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
      e = ne("thead"), l && l.c(), ce(e, u);
    },
    m(c, f) {
      V(c, e, f), l && l.m(e, null), t[11](e), i = !0, r || (s = [
        he(n = xe.call(
          null,
          e,
          /*use*/
          t[0]
        )),
        he(
          /*forwardEvents*/
          t[3].call(null, e)
        ),
        ue(
          e,
          "SMUICheckbox:mount",
          /*handleCheckboxMount*/
          t[4]
        ),
        ue(
          e,
          "SMUICheckbox:unmount",
          /*SMUICheckbox_unmount_handler*/
          t[12]
        ),
        ue(
          e,
          "SMUIDataTableCell:mount",
          /*handleCellMount*/
          t[5]
        ),
        ue(
          e,
          "SMUIDataTableCell:unmount",
          /*handleCellUnmount*/
          t[6]
        )
      ], r = !0);
    },
    p(c, [f]) {
      l && l.p && (!i || f & /*$$scope*/
      512) && Ae(
        l,
        a,
        c,
        /*$$scope*/
        c[9],
        i ? Ee(
          a,
          /*$$scope*/
          c[9],
          f,
          null
        ) : ye(
          /*$$scope*/
          c[9]
        ),
        null
      ), ce(e, u = me(o, [f & /*$$restProps*/
      128 && /*$$restProps*/
      c[7]])), n && pe(n.update) && f & /*use*/
      1 && n.update.call(
        null,
        /*use*/
        c[0]
      );
    },
    i(c) {
      i || (y(l, c), i = !0);
    },
    o(c) {
      O(l, c), i = !1;
    },
    d(c) {
      c && B(e), l && l.d(c), t[11](null), r = !1, Ye(s);
    }
  };
}
function B_(t, e, n) {
  const i = ["use", "getElement"];
  let r = ge(e, i), { $$slots: s = {}, $$scope: a } = e;
  const l = rt(Je());
  let { use: o = [] } = e, u, c, f = [];
  const d = /* @__PURE__ */ new WeakMap();
  Ge("SMUI:data-table:row:header", !0), ft(() => {
    const C = {
      get cells() {
        return f;
      },
      get orderedCells() {
        return m();
      },
      get checkbox() {
        return c;
      }
    };
    return _e(E(), "SMUIDataTableHeader:mount", C), () => {
      _e(E(), "SMUIDataTableHeader:unmount", C);
    };
  });
  function h(C) {
    n(2, c = C.detail);
  }
  function p(C) {
    f.push(C.detail), d.set(C.detail.element, C.detail), C.stopPropagation();
  }
  function g(C) {
    const D = f.indexOf(C.detail);
    D !== -1 && (f.splice(D, 1), f = f), d.delete(C.detail.element), C.stopPropagation();
  }
  function m() {
    return [...E().querySelectorAll(".mdc-data-table__header-cell")].map((C) => d.get(C)).filter((C) => C && C._smui_data_table_header_cell_accessor);
  }
  function E() {
    return u;
  }
  function v(C) {
    le[C ? "unshift" : "push"](() => {
      u = C, n(1, u);
    });
  }
  const S = () => n(2, c = void 0);
  return t.$$set = (C) => {
    e = X(X({}, e), nt(C)), n(7, r = ge(e, i)), "use" in C && n(0, o = C.use), "$$scope" in C && n(9, a = C.$$scope);
  }, [
    o,
    u,
    c,
    l,
    h,
    p,
    g,
    r,
    E,
    a,
    s,
    v,
    S
  ];
}
class V_ extends Me {
  constructor(e) {
    super(), De(this, e, B_, U_, Ce, { use: 0, getElement: 8 });
  }
  get getElement() {
    return this.$$.ctx[8];
  }
}
function G_(t) {
  let e, n, i, r, s, a;
  const l = (
    /*#slots*/
    t[9].default
  ), o = Ie(
    l,
    t,
    /*$$scope*/
    t[8],
    null
  );
  let u = [
    {
      class: n = se({
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
      e = ne("tbody"), o && o.c(), ce(e, c);
    },
    m(f, d) {
      V(f, e, d), o && o.m(e, null), t[10](e), r = !0, s || (a = [
        he(i = xe.call(
          null,
          e,
          /*use*/
          t[0]
        )),
        he(
          /*forwardEvents*/
          t[3].call(null, e)
        ),
        ue(
          e,
          "SMUIDataTableRow:mount",
          /*handleRowMount*/
          t[4]
        ),
        ue(
          e,
          "SMUIDataTableRow:unmount",
          /*handleRowUnmount*/
          t[5]
        )
      ], s = !0);
    },
    p(f, [d]) {
      o && o.p && (!r || d & /*$$scope*/
      256) && Ae(
        o,
        l,
        f,
        /*$$scope*/
        f[8],
        r ? Ee(
          l,
          /*$$scope*/
          f[8],
          d,
          null
        ) : ye(
          /*$$scope*/
          f[8]
        ),
        null
      ), ce(e, c = me(u, [
        (!r || d & /*className*/
        2 && n !== (n = se({
          [
            /*className*/
            f[1]
          ]: !0,
          "mdc-data-table__content": !0
        }))) && { class: n },
        d & /*$$restProps*/
        64 && /*$$restProps*/
        f[6]
      ])), i && pe(i.update) && d & /*use*/
      1 && i.update.call(
        null,
        /*use*/
        f[0]
      );
    },
    i(f) {
      r || (y(o, f), r = !0);
    },
    o(f) {
      O(o, f), r = !1;
    },
    d(f) {
      f && B(e), o && o.d(f), t[10](null), s = !1, Ye(a);
    }
  };
}
function j_(t, e, n) {
  const i = ["use", "class", "getElement"];
  let r = ge(e, i), { $$slots: s = {}, $$scope: a } = e;
  const l = rt(Je());
  let { use: o = [] } = e, { class: u = "" } = e, c, f = [];
  const d = /* @__PURE__ */ new WeakMap();
  Ge("SMUI:data-table:row:header", !1), ft(() => {
    const v = {
      get rows() {
        return f;
      },
      get orderedRows() {
        return g();
      }
    };
    return _e(m(), "SMUIDataTableBody:mount", v), () => {
      _e(m(), "SMUIDataTableBody:unmount", v);
    };
  });
  function h(v) {
    f.push(v.detail), d.set(v.detail.element, v.detail), v.stopPropagation();
  }
  function p(v) {
    const S = f.indexOf(v.detail);
    S !== -1 && (f.splice(S, 1), f = f), d.delete(v.detail.element), v.stopPropagation();
  }
  function g() {
    return [...m().querySelectorAll(".mdc-data-table__row")].map((v) => d.get(v)).filter((v) => v && v._smui_data_table_row_accessor);
  }
  function m() {
    return c;
  }
  function E(v) {
    le[v ? "unshift" : "push"](() => {
      c = v, n(2, c);
    });
  }
  return t.$$set = (v) => {
    e = X(X({}, e), nt(v)), n(6, r = ge(e, i)), "use" in v && n(0, o = v.use), "class" in v && n(1, u = v.class), "$$scope" in v && n(8, a = v.$$scope);
  }, [
    o,
    u,
    c,
    l,
    h,
    p,
    r,
    m,
    a,
    s,
    E
  ];
}
class q_ extends Me {
  constructor(e) {
    super(), De(this, e, j_, G_, Ce, { use: 0, class: 1, getElement: 7 });
  }
  get getElement() {
    return this.$$.ctx[7];
  }
}
function W_(t) {
  let e, n, i, r, s, a, l;
  const o = (
    /*#slots*/
    t[15].default
  ), u = Ie(
    o,
    t,
    /*$$scope*/
    t[14],
    null
  );
  let c = [
    {
      class: n = se({
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
      e = ne("tr"), u && u.c(), ce(e, f);
    },
    m(d, h) {
      V(d, e, h), u && u.m(e, null), t[16](e), s = !0, a || (l = [
        he(r = xe.call(
          null,
          e,
          /*use*/
          t[0]
        )),
        he(
          /*forwardEvents*/
          t[6].call(null, e)
        ),
        ue(
          e,
          "click",
          /*click_handler*/
          t[17]
        ),
        ue(
          e,
          "SMUICheckbox:mount",
          /*handleCheckboxMount*/
          t[8]
        ),
        ue(
          e,
          "SMUICheckbox:unmount",
          /*SMUICheckbox_unmount_handler*/
          t[18]
        )
      ], a = !0);
    },
    p(d, [h]) {
      u && u.p && (!s || h & /*$$scope*/
      16384) && Ae(
        u,
        o,
        d,
        /*$$scope*/
        d[14],
        s ? Ee(
          o,
          /*$$scope*/
          d[14],
          h,
          null
        ) : ye(
          /*$$scope*/
          d[14]
        ),
        null
      ), ce(e, f = me(c, [
        (!s || h & /*className, checkbox, internalClasses*/
        26 && n !== (n = se({
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
      ])), r && pe(r.update) && h & /*use*/
      1 && r.update.call(
        null,
        /*use*/
        d[0]
      );
    },
    i(d) {
      s || (y(u, d), s = !0);
    },
    o(d) {
      O(u, d), s = !1;
    },
    d(d) {
      d && B(e), u && u.d(d), t[16](null), a = !1, Ye(l);
    }
  };
}
let z_ = 0;
function K_(t, e, n) {
  const i = ["use", "class", "rowId", "getElement"];
  let r = ge(e, i), { $$slots: s = {}, $$scope: a } = e;
  const l = rt(Je());
  let { use: o = [] } = e, { class: u = "" } = e, { rowId: c = "SMUI-data-table-row-" + z_++ } = e, f, d, h = {}, p = {}, g = ze("SMUI:data-table:row:header");
  ft(() => {
    const b = g ? {
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
      removeClass: v,
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
      removeClass: v,
      getAttr: S,
      addAttr: C
    };
    return _e(_(), "SMUIDataTableRow:mount", b), () => {
      _e(_(), "SMUIDataTableRow:unmount", b);
    };
  });
  function m(b) {
    n(3, d = b.detail);
  }
  function E(b) {
    h[b] || n(4, h[b] = !0, h);
  }
  function v(b) {
    (!(b in h) || h[b]) && n(4, h[b] = !1, h);
  }
  function S(b) {
    var I;
    return b in p ? (I = p[b]) !== null && I !== void 0 ? I : null : _().getAttribute(b);
  }
  function C(b, I) {
    p[b] !== I && n(5, p[b] = I, p);
  }
  function D(b) {
    _e(_(), "SMUIDataTableHeader:click", b);
  }
  function M(b) {
    _e(_(), "SMUIDataTableRow:click", { rowId: c, target: b.target });
  }
  function _() {
    return f;
  }
  function L(b) {
    le[b ? "unshift" : "push"](() => {
      f = b, n(2, f);
    });
  }
  const k = (b) => g ? D(b) : M(b), A = () => n(3, d = void 0);
  return t.$$set = (b) => {
    e = X(X({}, e), nt(b)), n(11, r = ge(e, i)), "use" in b && n(0, o = b.use), "class" in b && n(1, u = b.class), "rowId" in b && n(12, c = b.rowId), "$$scope" in b && n(14, a = b.$$scope);
  }, [
    o,
    u,
    f,
    d,
    h,
    p,
    l,
    g,
    m,
    D,
    M,
    r,
    c,
    _,
    a,
    s,
    L,
    k,
    A
  ];
}
class zo extends Me {
  constructor(e) {
    super(), De(this, e, K_, W_, Ce, {
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
function X_(t) {
  let e, n, i, r, s, a;
  const l = (
    /*#slots*/
    t[22].default
  ), o = Ie(
    l,
    t,
    /*$$scope*/
    t[21],
    null
  );
  let u = [
    {
      class: n = se({
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
      e = ne("td"), o && o.c(), ce(e, c);
    },
    m(f, d) {
      V(f, e, d), o && o.m(e, null), t[25](e), r = !0, s || (a = [
        he(i = xe.call(
          null,
          e,
          /*use*/
          t[0]
        )),
        he(
          /*forwardEvents*/
          t[11].call(null, e)
        ),
        ue(
          e,
          "change",
          /*change_handler_1*/
          t[26]
        )
      ], s = !0);
    },
    p(f, d) {
      o && o.p && (!r || d & /*$$scope*/
      2097152) && Ae(
        o,
        l,
        f,
        /*$$scope*/
        f[21],
        r ? Ee(
          l,
          /*$$scope*/
          f[21],
          d,
          null
        ) : ye(
          /*$$scope*/
          f[21]
        ),
        null
      ), ce(e, c = me(u, [
        (!r || d & /*className, numeric, checkbox, internalClasses*/
        142 && n !== (n = se({
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
      ])), i && pe(i.update) && d & /*use*/
      1 && i.update.call(
        null,
        /*use*/
        f[0]
      );
    },
    i(f) {
      r || (y(o, f), r = !0);
    },
    o(f) {
      O(o, f), r = !1;
    },
    d(f) {
      f && B(e), o && o.d(f), t[25](null), s = !1, Ye(a);
    }
  };
}
function Y_(t) {
  let e, n, i, r, s, a, l, o, u;
  const c = [Q_, Z_], f = [];
  function d(g, m) {
    return (
      /*sortable*/
      g[5] ? 0 : 1
    );
  }
  n = d(t), i = f[n] = c[n](t);
  let h = [
    {
      class: r = se({
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
  ], p = {};
  for (let g = 0; g < h.length; g += 1)
    p = X(p, h[g]);
  return {
    c() {
      e = ne("th"), i.c(), ce(e, p);
    },
    m(g, m) {
      V(g, e, m), f[n].m(e, null), t[23](e), l = !0, o || (u = [
        he(a = xe.call(
          null,
          e,
          /*use*/
          t[0]
        )),
        he(
          /*forwardEvents*/
          t[11].call(null, e)
        ),
        ue(
          e,
          "change",
          /*change_handler*/
          t[24]
        )
      ], o = !0);
    },
    p(g, m) {
      let E = n;
      n = d(g), n === E ? f[n].p(g, m) : (Ue(), O(f[E], 1, 1, () => {
        f[E] = null;
      }), Be(), i = f[n], i ? i.p(g, m) : (i = f[n] = c[n](g), i.c()), y(i, 1), i.m(e, null)), ce(e, p = me(h, [
        (!l || m & /*className, numeric, checkbox, sortable, $sort, columnId, internalClasses*/
        702 && r !== (r = se({
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
        (!l || m & /*columnId*/
        16) && { "data-column-id": (
          /*columnId*/
          g[4]
        ) },
        (!l || m & /*sortable, $sort, columnId, $sortDirection*/
        1584 && s !== (s = /*sortable*/
        g[5] ? (
          /*$sort*/
          g[9] === /*columnId*/
          g[4] ? (
            /*$sortDirection*/
            g[10]
          ) : "none"
        ) : void 0)) && { "aria-sort": s },
        m & /*internalAttrs*/
        256 && /*internalAttrs*/
        g[8],
        m & /*$$restProps*/
        524288 && /*$$restProps*/
        g[19]
      ])), a && pe(a.update) && m & /*use*/
      1 && a.update.call(
        null,
        /*use*/
        g[0]
      );
    },
    i(g) {
      l || (y(i), l = !0);
    },
    o(g) {
      O(i), l = !1;
    },
    d(g) {
      g && B(e), f[n].d(), t[23](null), o = !1, Ye(u);
    }
  };
}
function Z_(t) {
  let e;
  const n = (
    /*#slots*/
    t[22].default
  ), i = Ie(
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
      2097152) && Ae(
        i,
        n,
        r,
        /*$$scope*/
        r[21],
        e ? Ee(
          n,
          /*$$scope*/
          r[21],
          s,
          null
        ) : ye(
          /*$$scope*/
          r[21]
        ),
        null
      );
    },
    i(r) {
      e || (y(i, r), e = !0);
    },
    o(r) {
      O(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function Q_(t) {
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
  ), u = Ie(
    o,
    t,
    /*$$scope*/
    t[21],
    null
  );
  return {
    c() {
      e = ne("div"), u && u.c(), n = ae(), i = ne("div"), s = ct(r), P(i, "class", "mdc-data-table__sort-status-label"), P(i, "aria-hidden", "true"), P(i, "id", a = /*columnId*/
      t[4] + "-status-label"), P(e, "class", "mdc-data-table__header-cell-wrapper");
    },
    m(c, f) {
      V(c, e, f), u && u.m(e, null), J(e, n), J(e, i), J(i, s), l = !0;
    },
    p(c, f) {
      u && u.p && (!l || f & /*$$scope*/
      2097152) && Ae(
        u,
        o,
        c,
        /*$$scope*/
        c[21],
        l ? Ee(
          o,
          /*$$scope*/
          c[21],
          f,
          null
        ) : ye(
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
      ) : "") + "") && ht(s, r), (!l || f & /*columnId*/
      16 && a !== (a = /*columnId*/
      c[4] + "-status-label")) && P(i, "id", a);
    },
    i(c) {
      l || (y(u, c), l = !0);
    },
    o(c) {
      O(u, c), l = !1;
    },
    d(c) {
      c && B(e), u && u.d(c);
    }
  };
}
function J_(t) {
  let e, n, i, r;
  const s = [Y_, X_], a = [];
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
      a[e].m(o, u), V(o, i, u), r = !0;
    },
    p(o, [u]) {
      n.p(o, u);
    },
    i(o) {
      r || (y(n), r = !0);
    },
    o(o) {
      O(n), r = !1;
    },
    d(o) {
      o && B(i), a[e].d(o);
    }
  };
}
let x_ = 0;
function $_(t, e, n) {
  const i = ["use", "class", "numeric", "checkbox", "columnId", "sortable", "getElement"];
  let r = ge(e, i), s, a, { $$slots: l = {}, $$scope: o } = e;
  const u = rt(Je());
  let c = ze("SMUI:data-table:row:header"), { use: f = [] } = e, { class: d = "" } = e, { numeric: h = !1 } = e, { checkbox: p = !1 } = e, { columnId: g = c ? "SMUI-data-table-column-" + x_++ : "SMUI-data-table-unused" } = e, { sortable: m = ze("SMUI:data-table:sortable") } = e, E, v = {}, S = {}, C = ze("SMUI:data-table:sort");
  st(t, C, (R) => n(9, s = R));
  let D = ze("SMUI:data-table:sortDirection");
  st(t, D, (R) => n(10, a = R));
  let M = ze("SMUI:data-table:sortAscendingAriaLabel"), _ = ze("SMUI:data-table:sortDescendingAriaLabel");
  m && (Ge("SMUI:label:context", "data-table:sortable-header-cell"), Ge("SMUI:icon-button:context", "data-table:sortable-header-cell"), Ge("SMUI:icon-button:aria-describedby", g + "-status-label")), ft(() => {
    const R = c ? {
      _smui_data_table_header_cell_accessor: !0,
      get element() {
        return H();
      },
      get columnId() {
        return g;
      },
      addClass: L,
      removeClass: k,
      getAttr: A,
      addAttr: b
    } : {
      _smui_data_table_header_cell_accessor: !1,
      get element() {
        return H();
      },
      get columnId() {
      },
      addClass: L,
      removeClass: k,
      getAttr: A,
      addAttr: b
    };
    return _e(H(), "SMUIDataTableCell:mount", R), () => {
      _e(H(), "SMUIDataTableCell:unmount", R);
    };
  });
  function L(R) {
    v[R] || n(7, v[R] = !0, v);
  }
  function k(R) {
    (!(R in v) || v[R]) && n(7, v[R] = !1, v);
  }
  function A(R) {
    var G;
    return R in S ? (G = S[R]) !== null && G !== void 0 ? G : null : H().getAttribute(R);
  }
  function b(R, G) {
    S[R] !== G && n(8, S[R] = G, S);
  }
  function I(R) {
    _e(H(), "SMUIDataTableHeaderCheckbox:change", R);
  }
  function T(R) {
    _e(H(), "SMUIDataTableBodyCheckbox:change", R);
  }
  function H() {
    return E;
  }
  function q(R) {
    le[R ? "unshift" : "push"](() => {
      E = R, n(6, E);
    });
  }
  const j = (R) => p && I(R);
  function K(R) {
    le[R ? "unshift" : "push"](() => {
      E = R, n(6, E);
    });
  }
  const N = (R) => p && T(R);
  return t.$$set = (R) => {
    e = X(X({}, e), nt(R)), n(19, r = ge(e, i)), "use" in R && n(0, f = R.use), "class" in R && n(1, d = R.class), "numeric" in R && n(2, h = R.numeric), "checkbox" in R && n(3, p = R.checkbox), "columnId" in R && n(4, g = R.columnId), "sortable" in R && n(5, m = R.sortable), "$$scope" in R && n(21, o = R.$$scope);
  }, [
    f,
    d,
    h,
    p,
    g,
    m,
    E,
    v,
    S,
    s,
    a,
    u,
    c,
    C,
    D,
    M,
    _,
    I,
    T,
    r,
    H,
    o,
    l,
    q,
    j,
    K,
    N
  ];
}
class hs extends Me {
  constructor(e) {
    super(), De(this, e, $_, J_, Ce, {
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
function eb(t) {
  let e, n, i, r, s, a, l, o, u, c, f, d, h, p, g, m, E, v, S, C, D = [
    {
      class: h = se({
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
      ).map(Ca).concat([
        /*style*/
        t[2]
      ]).join(" ")
    },
    { role: "progressbar" },
    {
      "aria-valuemin": g = 0
    },
    {
      "aria-valuemax": m = 1
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
  ], M = {};
  for (let _ = 0; _ < D.length; _ += 1)
    M = X(M, D[_]);
  return {
    c() {
      e = ne("div"), n = ne("div"), i = ne("div"), s = ae(), a = ne("div"), l = ae(), o = ne("div"), u = ne("span"), f = ae(), d = ne("div"), d.innerHTML = '<span class="mdc-linear-progress__bar-inner"></span>', P(i, "class", "mdc-linear-progress__buffer-bar"), P(i, "style", r = Object.entries(
        /*bufferBarStyles*/
        t[11]
      ).map(Aa).join(" ")), P(a, "class", "mdc-linear-progress__buffer-dots"), P(n, "class", "mdc-linear-progress__buffer"), P(u, "class", "mdc-linear-progress__bar-inner"), P(o, "class", "mdc-linear-progress__bar mdc-linear-progress__primary-bar"), P(o, "style", c = Object.entries(
        /*primaryBarStyles*/
        t[12]
      ).map(ya).join(" ")), P(d, "class", "mdc-linear-progress__bar mdc-linear-progress__secondary-bar"), ce(e, M);
    },
    m(_, L) {
      V(_, e, L), J(e, n), J(n, i), J(n, s), J(n, a), J(e, l), J(e, o), J(o, u), J(e, f), J(e, d), t[19](e), S || (C = [
        he(v = xe.call(
          null,
          e,
          /*use*/
          t[0]
        )),
        he(
          /*forwardEvents*/
          t[13].call(null, e)
        ),
        ue(
          e,
          "transitionend",
          /*transitionend_handler*/
          t[20]
        )
      ], S = !0);
    },
    p(_, [L]) {
      L & /*bufferBarStyles*/
      2048 && r !== (r = Object.entries(
        /*bufferBarStyles*/
        _[11]
      ).map(Aa).join(" ")) && P(i, "style", r), L & /*primaryBarStyles*/
      4096 && c !== (c = Object.entries(
        /*primaryBarStyles*/
        _[12]
      ).map(ya).join(" ")) && P(o, "style", c), ce(e, M = me(D, [
        L & /*className, indeterminate, closed, internalClasses*/
        282 && h !== (h = se({
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
        L & /*internalStyles, style*/
        1028 && p !== (p = Object.entries(
          /*internalStyles*/
          _[10]
        ).map(Ca).concat([
          /*style*/
          _[2]
        ]).join(" ")) && { style: p },
        { role: "progressbar" },
        {
          "aria-valuemin": g
        },
        {
          "aria-valuemax": m
        },
        L & /*indeterminate, progress*/
        40 && E !== (E = /*indeterminate*/
        _[3] ? void 0 : (
          /*progress*/
          _[5]
        )) && {
          "aria-valuenow": E
        },
        L & /*internalAttrs*/
        512 && /*internalAttrs*/
        _[9],
        L & /*$$restProps*/
        65536 && /*$$restProps*/
        _[16]
      ])), v && pe(v.update) && L & /*use*/
      1 && v.update.call(
        null,
        /*use*/
        _[0]
      );
    },
    i: Qe,
    o: Qe,
    d(_) {
      _ && B(e), t[19](null), S = !1, Ye(C);
    }
  };
}
const Aa = ([t, e]) => `${t}: ${e};`, ya = ([t, e]) => `${t}: ${e};`, Ca = ([t, e]) => `${t}: ${e};`;
function tb(t, e, n) {
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
  let r = ge(e, i), s;
  const a = rt(Je());
  let { use: l = [] } = e, { class: o = "" } = e, { style: u = "" } = e, { indeterminate: c = !1 } = e, { closed: f = !1 } = e, { progress: d = 0 } = e, { buffer: h = void 0 } = e, p, g, m = {}, E = {}, v = {}, S = {}, C = {}, D = ze("SMUI:linear-progress:context"), M = ze("SMUI:linear-progress:closed");
  st(t, M, (N) => n(21, s = N)), ft(() => (n(6, g = new M_({
    addClass: L,
    forceLayout: () => {
      q().getBoundingClientRect();
    },
    setBufferBarStyle: T,
    setPrimaryBarStyle: H,
    hasClass: _,
    removeAttribute: b,
    removeClass: k,
    setAttribute: A,
    setStyle: I,
    attachResizeObserver: (N) => {
      const R = window.ResizeObserver;
      if (R) {
        const G = new R(N);
        return G.observe(q()), G;
      }
      return null;
    },
    getWidth: () => q().offsetWidth
  })), g.init(), () => {
    g.destroy();
  }));
  function _(N) {
    return N in m ? m[N] : q().classList.contains(N);
  }
  function L(N) {
    m[N] || n(8, m[N] = !0, m);
  }
  function k(N) {
    (!(N in m) || m[N]) && n(8, m[N] = !1, m);
  }
  function A(N, R) {
    E[N] !== R && n(9, E[N] = R, E);
  }
  function b(N) {
    (!(N in E) || E[N] != null) && n(9, E[N] = void 0, E);
  }
  function I(N, R) {
    v[N] != R && (R === "" || R == null ? (delete v[N], n(10, v)) : n(10, v[N] = R, v));
  }
  function T(N, R) {
    S[N] != R && (R === "" || R == null ? (delete S[N], n(11, S)) : n(11, S[N] = R, S));
  }
  function H(N, R) {
    C[N] != R && (R === "" || R == null ? (delete C[N], n(12, C)) : n(12, C[N] = R, C));
  }
  function q() {
    return p;
  }
  function j(N) {
    le[N ? "unshift" : "push"](() => {
      p = N, n(7, p);
    });
  }
  const K = () => g && g.handleTransitionEnd();
  return t.$$set = (N) => {
    e = X(X({}, e), nt(N)), n(16, r = ge(e, i)), "use" in N && n(0, l = N.use), "class" in N && n(1, o = N.class), "style" in N && n(2, u = N.style), "indeterminate" in N && n(3, c = N.indeterminate), "closed" in N && n(4, f = N.closed), "progress" in N && n(5, d = N.progress), "buffer" in N && n(17, h = N.buffer);
  }, t.$$.update = () => {
    t.$$.dirty & /*closed*/
    16 && M && kt(M, s = f, s), t.$$.dirty & /*instance, indeterminate*/
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
    p,
    m,
    E,
    v,
    S,
    C,
    a,
    D,
    M,
    r,
    h,
    q,
    j,
    K
  ];
}
class nb extends Me {
  constructor(e) {
    super(), De(this, e, tb, eb, Ce, {
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
function Sa(t, e, n) {
  const i = t.slice();
  return i[25] = e[n], i[27] = n, i;
}
function Ta(t, e, n) {
  const i = t.slice();
  return i[28] = e[n], i;
}
function La(t, e, n) {
  const i = t.slice();
  return i[31] = e[n], i;
}
function Oa(t, e, n) {
  const i = t.slice();
  return i[28] = e[n], i[34] = e, i[35] = n, i;
}
function Ra(t) {
  let e, n = (
    /*$sortColumn*/
    t[6] === /*col*/
    t[28].field && /*$sortDirection*/
    t[7] !== null && Da(t)
  );
  return {
    c() {
      n && n.c(), e = Ze();
    },
    m(i, r) {
      n && n.m(i, r), V(i, e, r);
    },
    p(i, r) {
      /*$sortColumn*/
      i[6] === /*col*/
      i[28].field && /*$sortDirection*/
      i[7] !== null ? n ? n.p(i, r) : (n = Da(i), n.c(), n.m(e.parentNode, e)) : n && (n.d(1), n = null);
    },
    d(i) {
      i && B(e), n && n.d(i);
    }
  };
}
function Da(t) {
  let e;
  function n(s, a) {
    if (
      /*$sortDirection*/
      s[7] === "asc"
    )
      return rb;
    if (
      /*$sortDirection*/
      s[7] === "desc"
    )
      return ib;
  }
  let i = n(t), r = i && i(t);
  return {
    c() {
      r && r.c(), e = Ze();
    },
    m(s, a) {
      r && r.m(s, a), V(s, e, a);
    },
    p(s, a) {
      i !== (i = n(s)) && (r && r.d(1), r = i && i(s), r && (r.c(), r.m(e.parentNode, e)));
    },
    d(s) {
      s && B(e), r && r.d(s);
    }
  };
}
function ib(t) {
  let e, n;
  return {
    c() {
      e = ut("svg"), n = ut("path"), P(n, "d", "M12 20l8-8H4l8 8z"), P(e, "xmlns", "http://www.w3.org/2000/svg"), P(e, "viewBox", "0 0 24 24"), P(e, "width", "16"), P(e, "height", "16"), P(e, "fill", "currentColor"), P(e, "class", "svelte-29x22x");
    },
    m(i, r) {
      V(i, e, r), J(e, n);
    },
    d(i) {
      i && B(e);
    }
  };
}
function rb(t) {
  let e, n;
  return {
    c() {
      e = ut("svg"), n = ut("path"), P(n, "d", "M12 4l-8 8h16l-8-8z"), P(e, "xmlns", "http://www.w3.org/2000/svg"), P(e, "viewBox", "0 0 24 24"), P(e, "width", "16"), P(e, "height", "16"), P(e, "fill", "currentColor"), P(e, "class", "svelte-29x22x");
    },
    m(i, r) {
      V(i, e, r), J(e, n);
    },
    d(i) {
      i && B(e);
    }
  };
}
function Ma(t) {
  let e, n, i = (
    /*col*/
    t[28].filterType === "text" && ka(t)
  ), r = (
    /*col*/
    t[28].filterType === "number" && Fa(t)
  );
  return {
    c() {
      i && i.c(), e = ae(), r && r.c(), n = Ze();
    },
    m(s, a) {
      i && i.m(s, a), V(s, e, a), r && r.m(s, a), V(s, n, a);
    },
    p(s, a) {
      /*col*/
      s[28].filterType === "text" ? i ? i.p(s, a) : (i = ka(s), i.c(), i.m(e.parentNode, e)) : i && (i.d(1), i = null), /*col*/
      s[28].filterType === "number" ? r ? r.p(s, a) : (r = Fa(s), r.c(), r.m(n.parentNode, n)) : r && (r.d(1), r = null);
    },
    d(s) {
      s && (B(e), B(n)), i && i.d(s), r && r.d(s);
    }
  };
}
function ka(t) {
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
      e = ne("input"), P(e, "type", "text"), P(e, "placeholder", n = `${/*searchInputLabel*/
      t[4]} ${/*col*/
      t[28].headerName}`), P(e, "class", "svelte-29x22x");
    },
    m(a, l) {
      V(a, e, l), $t(
        e,
        /*filters*/
        t[5][
          /*col*/
          t[28].field
        ]
      ), i || (r = [
        ue(e, "input", s),
        ue(
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
      ] && $t(
        e,
        /*filters*/
        t[5][
          /*col*/
          t[28].field
        ]
      );
    },
    d(a) {
      a && B(e), i = !1, Ye(r);
    }
  };
}
function Fa(t) {
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
      e = ne("input"), P(e, "type", "number"), P(e, "placeholder", n = `${/*searchInputLabel*/
      t[4]} ${/*col*/
      t[28].headerName}`), P(e, "class", "svelte-29x22x");
    },
    m(a, l) {
      V(a, e, l), $t(
        e,
        /*filters*/
        t[5][
          /*col*/
          t[28].field
        ]
      ), i || (r = [
        ue(e, "input", s),
        ue(
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
      36 && Ja(e.value) !== /*filters*/
      t[5][
        /*col*/
        t[28].field
      ] && $t(
        e,
        /*filters*/
        t[5][
          /*col*/
          t[28].field
        ]
      );
    },
    d(a) {
      a && B(e), i = !1, Ye(r);
    }
  };
}
function sb(t) {
  let e, n, i, r = (
    /*col*/
    t[28].headerName + ""
  ), s, a, l, o, u = (
    /*col*/
    t[28].sortable && Ra(t)
  ), c = (
    /*col*/
    t[28].filter && Ma(t)
  );
  return {
    c() {
      e = ne("div"), n = ne("div"), i = ne("span"), s = ct(r), a = ae(), u && u.c(), l = ae(), c && c.c(), o = ae(), P(i, "class", "header-title svelte-29x22x"), P(n, "class", "cell-header svelte-29x22x"), P(e, "class", "custom-cell-container svelte-29x22x"), wr(
        e,
        "min-width",
        /*col*/
        t[28].minWidth ?? 0
      );
    },
    m(f, d) {
      V(f, e, d), J(e, n), J(n, i), J(i, s), J(n, a), u && u.m(n, null), J(e, l), c && c.m(e, null), V(f, o, d);
    },
    p(f, d) {
      d[0] & /*columnDefs*/
      4 && r !== (r = /*col*/
      f[28].headerName + "") && ht(s, r), /*col*/
      f[28].sortable ? u ? u.p(f, d) : (u = Ra(f), u.c(), u.m(n, null)) : u && (u.d(1), u = null), /*col*/
      f[28].filter ? c ? c.p(f, d) : (c = Ma(f), c.c(), c.m(e, null)) : c && (c.d(1), c = null), d[0] & /*columnDefs*/
      4 && wr(
        e,
        "min-width",
        /*col*/
        f[28].minWidth ?? 0
      );
    },
    d(f) {
      f && (B(e), B(o)), u && u.d(), c && c.d();
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
  return e = new hs({
    props: {
      style: (
        /*col*/
        t[28].headerStyle
      ),
      $$slots: { default: [sb] },
      $$scope: { ctx: t }
    }
  }), e.$on("click", i), {
    c() {
      ie(e.$$.fragment);
    },
    m(r, s) {
      ee(e, r, s), n = !0;
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
      n || (y(e.$$.fragment, r), n = !0);
    },
    o(r) {
      O(e.$$.fragment, r), n = !1;
    },
    d(r) {
      te(e, r);
    }
  };
}
function lb(t) {
  let e, n, i = zt(
    /*columnDefs*/
    t[2]
  ), r = [];
  for (let a = 0; a < i.length; a += 1)
    r[a] = Na(Oa(t, i, a));
  const s = (a) => O(r[a], 1, 1, () => {
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
      V(a, e, l), n = !0;
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
          const u = Oa(a, i, o);
          r[o] ? (r[o].p(u, l), y(r[o], 1)) : (r[o] = Na(u), r[o].c(), y(r[o], 1), r[o].m(e.parentNode, e));
        }
        for (Ue(), o = i.length; o < r.length; o += 1)
          s(o);
        Be();
      }
    },
    i(a) {
      if (!n) {
        for (let l = 0; l < i.length; l += 1)
          y(r[l]);
        n = !0;
      }
    },
    o(a) {
      r = r.filter(Boolean);
      for (let l = 0; l < r.length; l += 1)
        O(r[l]);
      n = !1;
    },
    d(a) {
      a && B(e), ts(r, a);
    }
  };
}
function ab(t) {
  let e, n;
  return e = new zo({
    props: {
      class: "header-row",
      $$slots: { default: [lb] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      ie(e.$$.fragment);
    },
    m(i, r) {
      ee(e, i, r), n = !0;
    },
    p(i, r) {
      const s = {};
      r[0] & /*columnDefs, searchInputLabel, filters, $sortDirection, $sortColumn*/
      244 | r[1] & /*$$scope*/
      32 && (s.$$scope = { dirty: r, ctx: i }), e.$set(s);
    },
    i(i) {
      n || (y(e.$$.fragment, i), n = !0);
    },
    o(i) {
      O(e.$$.fragment, i), n = !1;
    },
    d(i) {
      te(e, i);
    }
  };
}
function ob(t) {
  let e, n;
  return e = new hs({
    props: {
      numeric: (
        /*col*/
        t[28].numeric
      ),
      style: (
        /*col*/
        t[28].cellStyle
      ),
      $$slots: { default: [db] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      ie(e.$$.fragment);
    },
    m(i, r) {
      ee(e, i, r), n = !0;
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
      n || (y(e.$$.fragment, i), n = !0);
    },
    o(i) {
      O(e.$$.fragment, i), n = !1;
    },
    d(i) {
      te(e, i);
    }
  };
}
function ub(t) {
  let e, n;
  return e = new hs({
    props: {
      $$slots: { default: [Cb] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      ie(e.$$.fragment);
    },
    m(i, r) {
      ee(e, i, r), n = !0;
    },
    p(i, r) {
      const s = {};
      r[0] & /*rowActions, $filteredData*/
      264 | r[1] & /*$$scope*/
      32 && (s.$$scope = { dirty: r, ctx: i }), e.$set(s);
    },
    i(i) {
      n || (y(e.$$.fragment, i), n = !0);
    },
    o(i) {
      O(e.$$.fragment, i), n = !1;
    },
    d(i) {
      te(e, i);
    }
  };
}
function cb(t) {
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
      V(i, n, r);
    },
    p(i, r) {
      r[0] & /*$filteredData, columnDefs*/
      260 && e !== (e = /*row*/
      (i[25][
        /*col*/
        i[28].field
      ] ?? "") + "") && ht(n, e);
    },
    d(i) {
      i && B(n);
    }
  };
}
function fb(t) {
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
      V(i, n, r);
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
      ) + "") && ht(n, e);
    },
    d(i) {
      i && B(n);
    }
  };
}
function db(t) {
  let e;
  function n(s, a) {
    return (
      /*col*/
      s[28].valueFormatter ? fb : cb
    );
  }
  let i = n(t), r = i(t);
  return {
    c() {
      r.c(), e = Ze();
    },
    m(s, a) {
      r.m(s, a), V(s, e, a);
    },
    p(s, a) {
      i === (i = n(s)) && r ? r.p(s, a) : (r.d(1), r = i(s), r && (r.c(), r.m(e.parentNode, e)));
    },
    d(s) {
      s && B(e), r.d(s);
    }
  };
}
function hb(t) {
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
  return e = new Wi({
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
      $$slots: { default: [yb] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      ie(e.$$.fragment);
    },
    m(r, s) {
      ee(e, r, s), n = !0;
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
      n || (y(e.$$.fragment, r), n = !0);
    },
    o(r) {
      O(e.$$.fragment, r), n = !1;
    },
    d(r) {
      te(e, r);
    }
  };
}
function mb(t) {
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
  return e = new Wd({
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
      ie(e.$$.fragment);
    },
    m(r, s) {
      ee(e, r, s), n = !0;
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
      n || (y(e.$$.fragment, r), n = !0);
    },
    o(r) {
      O(e.$$.fragment, r), n = !1;
    },
    d(r) {
      te(e, r);
    }
  };
}
function pb(t) {
  let e, n;
  return e = new jg({ props: { svgStyles: "margin: unset" } }), {
    c() {
      ie(e.$$.fragment);
    },
    m(i, r) {
      ee(e, i, r), n = !0;
    },
    i(i) {
      n || (y(e.$$.fragment, i), n = !0);
    },
    o(i) {
      O(e.$$.fragment, i), n = !1;
    },
    d(i) {
      te(e, i);
    }
  };
}
function gb(t) {
  let e, n;
  return e = new r_({ props: { svgStyles: "margin: unset" } }), {
    c() {
      ie(e.$$.fragment);
    },
    m(i, r) {
      ee(e, i, r), n = !0;
    },
    i(i) {
      n || (y(e.$$.fragment, i), n = !0);
    },
    o(i) {
      O(e.$$.fragment, i), n = !1;
    },
    d(i) {
      te(e, i);
    }
  };
}
function _b(t) {
  let e, n;
  return e = new e_({ props: { svgStyles: "margin: unset" } }), {
    c() {
      ie(e.$$.fragment);
    },
    m(i, r) {
      ee(e, i, r), n = !0;
    },
    i(i) {
      n || (y(e.$$.fragment, i), n = !0);
    },
    o(i) {
      O(e.$$.fragment, i), n = !1;
    },
    d(i) {
      te(e, i);
    }
  };
}
function bb(t) {
  let e, n;
  return e = new Qg({ props: { svgStyles: "margin: unset" } }), {
    c() {
      ie(e.$$.fragment);
    },
    m(i, r) {
      ee(e, i, r), n = !0;
    },
    i(i) {
      n || (y(e.$$.fragment, i), n = !0);
    },
    o(i) {
      O(e.$$.fragment, i), n = !1;
    },
    d(i) {
      te(e, i);
    }
  };
}
function vb(t) {
  let e, n;
  return e = new Ug({ props: { svgStyles: "margin: unset" } }), {
    c() {
      ie(e.$$.fragment);
    },
    m(i, r) {
      ee(e, i, r), n = !0;
    },
    i(i) {
      n || (y(e.$$.fragment, i), n = !0);
    },
    o(i) {
      O(e.$$.fragment, i), n = !1;
    },
    d(i) {
      te(e, i);
    }
  };
}
function Ib(t) {
  let e, n;
  return e = new Ng({ props: { svgStyles: "margin: unset" } }), {
    c() {
      ie(e.$$.fragment);
    },
    m(i, r) {
      ee(e, i, r), n = !0;
    },
    i(i) {
      n || (y(e.$$.fragment, i), n = !0);
    },
    o(i) {
      O(e.$$.fragment, i), n = !1;
    },
    d(i) {
      te(e, i);
    }
  };
}
function Eb(t) {
  let e, n;
  return e = new ds({ props: { svgStyles: "margin: unset" } }), {
    c() {
      ie(e.$$.fragment);
    },
    m(i, r) {
      ee(e, i, r), n = !0;
    },
    i(i) {
      n || (y(e.$$.fragment, i), n = !0);
    },
    o(i) {
      O(e.$$.fragment, i), n = !1;
    },
    d(i) {
      te(e, i);
    }
  };
}
function Ab(t) {
  let e, n;
  return e = new Lg({ props: { svgStyles: "margin: unset" } }), {
    c() {
      ie(e.$$.fragment);
    },
    m(i, r) {
      ee(e, i, r), n = !0;
    },
    i(i) {
      n || (y(e.$$.fragment, i), n = !0);
    },
    o(i) {
      O(e.$$.fragment, i), n = !1;
    },
    d(i) {
      te(e, i);
    }
  };
}
function yb(t) {
  let e, n, i, r;
  const s = [
    Ab,
    Eb,
    Ib,
    vb,
    bb,
    _b,
    gb,
    pb
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
      a[e].m(o, u), V(o, i, u), r = !0;
    },
    p(o, u) {
      let c = e;
      e = l(o), e !== c && (Ue(), O(a[c], 1, 1, () => {
        a[c] = null;
      }), Be(), n = a[e], n || (n = a[e] = s[e](o), n.c()), y(n, 1), n.m(i.parentNode, i));
    },
    i(o) {
      r || (y(n), r = !0);
    },
    o(o) {
      O(n), r = !1;
    },
    d(o) {
      o && B(i), a[e].d(o);
    }
  };
}
function Ha(t) {
  let e, n, i, r;
  const s = [mb, hb], a = [];
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
      a[e].m(o, u), V(o, i, u), r = !0;
    },
    p(o, u) {
      let c = e;
      e = l(o), e === c ? a[e].p(o, u) : (Ue(), O(a[c], 1, 1, () => {
        a[c] = null;
      }), Be(), n = a[e], n ? n.p(o, u) : (n = a[e] = s[e](o), n.c()), y(n, 1), n.m(i.parentNode, i));
    },
    i(o) {
      r || (y(n), r = !0);
    },
    o(o) {
      O(n), r = !1;
    },
    d(o) {
      o && B(i), a[e].d(o);
    }
  };
}
function Cb(t) {
  let e, n, i = zt(
    /*rowActions*/
    t[3]
  ), r = [];
  for (let a = 0; a < i.length; a += 1)
    r[a] = Ha(La(t, i, a));
  const s = (a) => O(r[a], 1, 1, () => {
    r[a] = null;
  });
  return {
    c() {
      e = ne("div");
      for (let a = 0; a < r.length; a += 1)
        r[a].c();
      P(e, "class", "cell-actions svelte-29x22x");
    },
    m(a, l) {
      V(a, e, l);
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
          const u = La(a, i, o);
          r[o] ? (r[o].p(u, l), y(r[o], 1)) : (r[o] = Ha(u), r[o].c(), y(r[o], 1), r[o].m(e, null));
        }
        for (Ue(), o = i.length; o < r.length; o += 1)
          s(o);
        Be();
      }
    },
    i(a) {
      if (!n) {
        for (let l = 0; l < i.length; l += 1)
          y(r[l]);
        n = !0;
      }
    },
    o(a) {
      r = r.filter(Boolean);
      for (let l = 0; l < r.length; l += 1)
        O(r[l]);
      n = !1;
    },
    d(a) {
      a && B(e), ts(r, a);
    }
  };
}
function Pa(t, e) {
  let n, i, r, s, a;
  const l = [ub, ob], o = [];
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
      V(c, n, f), o[i].m(c, f), V(c, s, f), a = !0;
    },
    p(c, f) {
      e = c;
      let d = i;
      i = u(e), i === d ? o[i].p(e, f) : (Ue(), O(o[d], 1, 1, () => {
        o[d] = null;
      }), Be(), r = o[i], r ? r.p(e, f) : (r = o[i] = l[i](e), r.c()), y(r, 1), r.m(s.parentNode, s));
    },
    i(c) {
      a || (y(r), a = !0);
    },
    o(c) {
      O(r), a = !1;
    },
    d(c) {
      c && (B(n), B(s)), o[i].d(c);
    }
  };
}
function Sb(t) {
  let e = [], n = /* @__PURE__ */ new Map(), i, r, s = zt(
    /*columnDefs*/
    t[2]
  );
  const a = (l) => (
    /*col*/
    l[28].field
  );
  for (let l = 0; l < s.length; l += 1) {
    let o = Ta(t, s, l), u = a(o);
    n.set(u, e[l] = Pa(u, o));
  }
  return {
    c() {
      for (let l = 0; l < e.length; l += 1)
        e[l].c();
      i = ae();
    },
    m(l, o) {
      for (let u = 0; u < e.length; u += 1)
        e[u] && e[u].m(l, o);
      V(l, i, o), r = !0;
    },
    p(l, o) {
      o[0] & /*rowActions, $filteredData, columnDefs*/
      268 && (s = zt(
        /*columnDefs*/
        l[2]
      ), Ue(), e = rs(e, o, a, 1, l, s, n, i.parentNode, is, Pa, i, Ta), Be());
    },
    i(l) {
      if (!r) {
        for (let o = 0; o < s.length; o += 1)
          y(e[o]);
        r = !0;
      }
    },
    o(l) {
      for (let o = 0; o < e.length; o += 1)
        O(e[o]);
      r = !1;
    },
    d(l) {
      l && B(i);
      for (let o = 0; o < e.length; o += 1)
        e[o].d(l);
    }
  };
}
function wa(t, e) {
  let n, i, r;
  return i = new zo({
    props: {
      $$slots: { default: [Sb] },
      $$scope: { ctx: e }
    }
  }), {
    key: t,
    first: null,
    c() {
      n = Ze(), ie(i.$$.fragment), this.first = n;
    },
    m(s, a) {
      V(s, n, a), ee(i, s, a), r = !0;
    },
    p(s, a) {
      e = s;
      const l = {};
      a[0] & /*columnDefs, rowActions, $filteredData*/
      268 | a[1] & /*$$scope*/
      32 && (l.$$scope = { dirty: a, ctx: e }), i.$set(l);
    },
    i(s) {
      r || (y(i.$$.fragment, s), r = !0);
    },
    o(s) {
      O(i.$$.fragment, s), r = !1;
    },
    d(s) {
      s && B(n), te(i, s);
    }
  };
}
function Tb(t) {
  let e = [], n = /* @__PURE__ */ new Map(), i, r, s = zt(
    /*$filteredData*/
    t[8]
  );
  const a = (l) => (
    /*index*/
    l[27]
  );
  for (let l = 0; l < s.length; l += 1) {
    let o = Sa(t, s, l), u = a(o);
    n.set(u, e[l] = wa(u, o));
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
      V(l, i, o), r = !0;
    },
    p(l, o) {
      o[0] & /*columnDefs, rowActions, $filteredData*/
      268 && (s = zt(
        /*$filteredData*/
        l[8]
      ), Ue(), e = rs(e, o, a, 1, l, s, n, i.parentNode, is, wa, i, Sa), Be());
    },
    i(l) {
      if (!r) {
        for (let o = 0; o < s.length; o += 1)
          y(e[o]);
        r = !0;
      }
    },
    o(l) {
      for (let o = 0; o < e.length; o += 1)
        O(e[o]);
      r = !1;
    },
    d(l) {
      l && B(i);
      for (let o = 0; o < e.length; o += 1)
        e[o].d(l);
    }
  };
}
function Lb(t) {
  let e, n, i, r;
  return e = new V_({
    props: {
      $$slots: { default: [ab] },
      $$scope: { ctx: t }
    }
  }), i = new q_({
    props: {
      $$slots: { default: [Tb] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      ie(e.$$.fragment), n = ae(), ie(i.$$.fragment);
    },
    m(s, a) {
      ee(e, s, a), V(s, n, a), ee(i, s, a), r = !0;
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
      r || (y(e.$$.fragment, s), y(i.$$.fragment, s), r = !0);
    },
    o(s) {
      O(e.$$.fragment, s), O(i.$$.fragment, s), r = !1;
    },
    d(s) {
      s && B(n), te(e, s), te(i, s);
    }
  };
}
function Ob(t) {
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
    t[0]), e = new nb({ props: s }), le.push(() => vt(e, "closed", r)), {
      c() {
        ie(e.$$.fragment);
      },
      m(a, l) {
        ee(e, a, l), i = !0;
      },
      p(a, l) {
        const o = {};
        !n && l[0] & /*loadingDone*/
        1 && (n = !0, o.closed = /*loadingDone*/
        a[0], bt(() => n = !1)), e.$set(o);
      },
      i(a) {
        i || (y(e.$$.fragment, a), i = !0);
      },
      o(a) {
        O(e.$$.fragment, a), i = !1;
      },
      d(a) {
        te(e, a);
      }
    }
  );
}
function Rb(t) {
  let e, n;
  return e = new w_({
    props: {
      "table$aria-label": (
        /*label*/
        t[1]
      ),
      style: "max-width: 100%; width: 100%;",
      $$slots: {
        progress: [Ob],
        default: [Lb]
      },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      ie(e.$$.fragment);
    },
    m(i, r) {
      ee(e, i, r), n = !0;
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
      n || (y(e.$$.fragment, i), n = !0);
    },
    o(i) {
      O(e.$$.fragment, i), n = !1;
    },
    d(i) {
      te(e, i);
    }
  };
}
function Db(t, e, n) {
  let i, r, s, { loadingDone: a = !0 } = e, { label: l = Wo() } = e, { columnDefs: o = [] } = e, { rowData: u = [] } = e, { store: c } = e, { rowActions: f = [] } = e, { searchInputLabel: d = "Search" } = e, h = { name: "", color: "", number: "" }, p = At([]);
  st(t, p, (I) => n(8, s = I));
  let g = At(null);
  st(t, g, (I) => n(6, i = I));
  let m = At(null);
  st(t, m, (I) => n(7, r = I)), c.store.subscribe((I) => {
    n(14, u = [...I]), E();
  });
  function E() {
    let I = u.filter((T) => o.every((H) => {
      const q = h[H.field], j = T[H.field];
      return q ? H.filterType === "number" ? j == q : j.toString().toLowerCase().includes(q.toLowerCase()) : !0;
    }));
    I = v(I), p.set(I);
  }
  function v(I) {
    let T, H;
    return g.subscribe((q) => T = q), m.subscribe((q) => H = q), !T || !H ? I : I.sort((q, j) => {
      let K = q[T], N = j[T];
      return K == null && (K = ""), N == null && (N = ""), H === "asc" ? K.toString().localeCompare(N.toString()) : N.toString().localeCompare(K.toString());
    });
  }
  function S(I) {
    g.update((T) => {
      if (T === I)
        m.update((H) => H === "asc" ? "desc" : H === "desc" ? null : "asc");
      else
        return m.set("asc"), I;
      return I;
    }), E();
  }
  p.set(u);
  function C(I) {
    a = I, n(0, a);
  }
  function D(I) {
    h[I.field] = this.value, n(5, h);
  }
  const M = () => E();
  function _(I) {
    h[I.field] = Ja(this.value), n(5, h);
  }
  const L = () => E(), k = (I) => I.sortable && S(I.field), A = (I, T) => I.callback(T), b = (I, T) => I.callback(T);
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
    p,
    g,
    m,
    E,
    S,
    u,
    c,
    C,
    D,
    M,
    _,
    L,
    k,
    A,
    b
  ];
}
class Ko extends Me {
  constructor(e) {
    super(), De(
      this,
      e,
      Db,
      Rb,
      Ce,
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
function Mb(t) {
  let e, n, i, r, s, a;
  const l = (
    /*#slots*/
    t[9].default
  ), o = Ie(
    l,
    t,
    /*$$scope*/
    t[8],
    null
  );
  let u = [
    {
      class: n = se({
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
      e = ne("div"), o && o.c(), ce(e, c);
    },
    m(f, d) {
      V(f, e, d), o && o.m(e, null), t[10](e), r = !0, s || (a = [
        he(i = xe.call(
          null,
          e,
          /*use*/
          t[0]
        )),
        he(
          /*forwardEvents*/
          t[5].call(null, e)
        )
      ], s = !0);
    },
    p(f, [d]) {
      o && o.p && (!r || d & /*$$scope*/
      256) && Ae(
        o,
        l,
        f,
        /*$$scope*/
        f[8],
        r ? Ee(
          l,
          /*$$scope*/
          f[8],
          d,
          null
        ) : ye(
          /*$$scope*/
          f[8]
        ),
        null
      ), ce(e, c = me(u, [
        (!r || d & /*className, variant, padded*/
        14 && n !== (n = se({
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
      ])), i && pe(i.update) && d & /*use*/
      1 && i.update.call(
        null,
        /*use*/
        f[0]
      );
    },
    i(f) {
      r || (y(o, f), r = !0);
    },
    o(f) {
      O(o, f), r = !1;
    },
    d(f) {
      f && B(e), o && o.d(f), t[10](null), s = !1, Ye(a);
    }
  };
}
function kb(t, e, n) {
  const i = ["use", "class", "variant", "padded", "getElement"];
  let r = ge(e, i), { $$slots: s = {}, $$scope: a } = e;
  const l = rt(Je());
  let { use: o = [] } = e, { class: u = "" } = e, { variant: c = "raised" } = e, { padded: f = !1 } = e, d;
  function h() {
    return d;
  }
  function p(g) {
    le[g ? "unshift" : "push"](() => {
      d = g, n(4, d);
    });
  }
  return t.$$set = (g) => {
    e = X(X({}, e), nt(g)), n(6, r = ge(e, i)), "use" in g && n(0, o = g.use), "class" in g && n(1, u = g.class), "variant" in g && n(2, c = g.variant), "padded" in g && n(3, f = g.padded), "$$scope" in g && n(8, a = g.$$scope);
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
    p
  ];
}
class Fb extends Me {
  constructor(e) {
    super(), De(this, e, kb, Mb, Ce, {
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
Lt({
  class: "smui-card__content",
  tag: "div"
});
Lt({
  class: "mdc-card__media-content",
  tag: "div"
});
Lt({
  class: "mdc-card__action-buttons",
  tag: "div"
});
Lt({
  class: "mdc-card__action-icons",
  tag: "div"
});
function Tt(t) {
  return typeof t == "function";
}
function Nb(t) {
  return Tt(t == null ? void 0 : t.lift);
}
function tn(t) {
  return function(e) {
    if (Nb(e))
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
var Xo = function(t) {
  return t && typeof t.length == "number" && typeof t != "function";
};
function Yo(t) {
  return Tt(t == null ? void 0 : t.then);
}
function Zo(t) {
  var e = function(i) {
    Error.call(i), i.stack = new Error().stack;
  }, n = t(e);
  return n.prototype = Object.create(Error.prototype), n.prototype.constructor = n, n;
}
var Nr = Zo(function(t) {
  return function(n) {
    t(this), this.message = n ? n.length + ` errors occurred during unsubscription:
` + n.map(function(i, r) {
      return r + 1 + ") " + i.toString();
    }).join(`
  `) : "", this.name = "UnsubscriptionError", this.errors = n;
  };
});
function Ua(t, e) {
  if (t) {
    var n = t.indexOf(e);
    0 <= n && t.splice(n, 1);
  }
}
var ms = function() {
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
            for (var l = Rt(a), o = l.next(); !o.done; o = l.next()) {
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
      if (Tt(c))
        try {
          c();
        } catch (g) {
          s = g instanceof Nr ? g.errors : [g];
        }
      var f = this._finalizers;
      if (f) {
        this._finalizers = null;
        try {
          for (var d = Rt(f), h = d.next(); !h.done; h = d.next()) {
            var p = h.value;
            try {
              Ba(p);
            } catch (g) {
              s = s ?? [], g instanceof Nr ? s = bn(bn([], Yn(s)), Yn(g.errors)) : s.push(g);
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
        throw new Nr(s);
    }
  }, t.prototype.add = function(e) {
    var n;
    if (e && e !== this)
      if (this.closed)
        Ba(e);
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
    n === e ? this._parentage = null : Array.isArray(n) && Ua(n, e);
  }, t.prototype.remove = function(e) {
    var n = this._finalizers;
    n && Ua(n, e), e instanceof t && e._removeParent(this);
  }, t.EMPTY = function() {
    var e = new t();
    return e.closed = !0, e;
  }(), t;
}();
ms.EMPTY;
function Qo(t) {
  return t instanceof ms || t && "closed" in t && Tt(t.remove) && Tt(t.add) && Tt(t.unsubscribe);
}
function Ba(t) {
  Tt(t) ? t() : t.unsubscribe();
}
var Hb = {
  Promise: void 0
}, Pb = {
  setTimeout: function(t, e) {
    for (var n = [], i = 2; i < arguments.length; i++)
      n[i - 2] = arguments[i];
    return setTimeout.apply(void 0, bn([t, e], Yn(n)));
  },
  clearTimeout: function(t) {
    return clearTimeout(t);
  },
  delegate: void 0
};
function Jo(t) {
  Pb.setTimeout(function() {
    throw t;
  });
}
function Va() {
}
function wb(t) {
  t();
}
var ps = function(t) {
  at(e, t);
  function e(n) {
    var i = t.call(this) || this;
    return i.isStopped = !1, n ? (i.destination = n, Qo(n) && n.add(i)) : i.destination = Vb, i;
  }
  return e.create = function(n, i, r) {
    return new Jr(n, i, r);
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
}(ms), Ub = function() {
  function t(e) {
    this.partialObserver = e;
  }
  return t.prototype.next = function(e) {
    var n = this.partialObserver;
    if (n.next)
      try {
        n.next(e);
      } catch (i) {
        Oi(i);
      }
  }, t.prototype.error = function(e) {
    var n = this.partialObserver;
    if (n.error)
      try {
        n.error(e);
      } catch (i) {
        Oi(i);
      }
    else
      Oi(e);
  }, t.prototype.complete = function() {
    var e = this.partialObserver;
    if (e.complete)
      try {
        e.complete();
      } catch (n) {
        Oi(n);
      }
  }, t;
}(), Jr = function(t) {
  at(e, t);
  function e(n, i, r) {
    var s = t.call(this) || this, a;
    return Tt(n) || !n ? a = {
      next: n ?? void 0,
      error: i ?? void 0,
      complete: r ?? void 0
    } : a = n, s.destination = new Ub(a), s;
  }
  return e;
}(ps);
function Oi(t) {
  Jo(t);
}
function Bb(t) {
  throw t;
}
var Vb = {
  closed: !0,
  next: Va,
  error: Bb,
  complete: Va
}, gs = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}();
function xo(t) {
  return t;
}
function Gb(t) {
  return t.length === 0 ? xo : t.length === 1 ? t[0] : function(n) {
    return t.reduce(function(i, r) {
      return r(i);
    }, n);
  };
}
var Jt = function() {
  function t(e) {
    e && (this._subscribe = e);
  }
  return t.prototype.lift = function(e) {
    var n = new t();
    return n.source = this, n.operator = e, n;
  }, t.prototype.subscribe = function(e, n, i) {
    var r = this, s = qb(e) ? e : new Jr(e, n, i);
    return wb(function() {
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
    return n = Ga(n), new n(function(r, s) {
      var a = new Jr({
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
  }, t.prototype[gs] = function() {
    return this;
  }, t.prototype.pipe = function() {
    for (var e = [], n = 0; n < arguments.length; n++)
      e[n] = arguments[n];
    return Gb(e)(this);
  }, t.prototype.toPromise = function(e) {
    var n = this;
    return e = Ga(e), new e(function(i, r) {
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
function Ga(t) {
  var e;
  return (e = t ?? Hb.Promise) !== null && e !== void 0 ? e : Promise;
}
function jb(t) {
  return t && Tt(t.next) && Tt(t.error) && Tt(t.complete);
}
function qb(t) {
  return t && t instanceof ps || jb(t) && Qo(t);
}
function $o(t) {
  return Tt(t[gs]);
}
function eu(t) {
  return Symbol.asyncIterator && Tt(t == null ? void 0 : t[Symbol.asyncIterator]);
}
function tu(t) {
  return new TypeError("You provided " + (t !== null && typeof t == "object" ? "an invalid object" : "'" + t + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
}
function Wb() {
  return typeof Symbol != "function" || !Symbol.iterator ? "@@iterator" : Symbol.iterator;
}
var nu = Wb();
function iu(t) {
  return Tt(t == null ? void 0 : t[nu]);
}
function ru(t) {
  return Ac(this, arguments, function() {
    var n, i, r, s;
    return ss(this, function(a) {
      switch (a.label) {
        case 0:
          n = t.getReader(), a.label = 1;
        case 1:
          a.trys.push([1, , 9, 10]), a.label = 2;
        case 2:
          return [4, Wn(n.read())];
        case 3:
          return i = a.sent(), r = i.value, s = i.done, s ? [4, Wn(void 0)] : [3, 5];
        case 4:
          return [2, a.sent()];
        case 5:
          return [4, Wn(r)];
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
function su(t) {
  return Tt(t == null ? void 0 : t.getReader);
}
function Dn(t) {
  if (t instanceof Jt)
    return t;
  if (t != null) {
    if ($o(t))
      return zb(t);
    if (Xo(t))
      return Kb(t);
    if (Yo(t))
      return Xb(t);
    if (eu(t))
      return lu(t);
    if (iu(t))
      return Yb(t);
    if (su(t))
      return Zb(t);
  }
  throw tu(t);
}
function zb(t) {
  return new Jt(function(e) {
    var n = t[gs]();
    if (Tt(n.subscribe))
      return n.subscribe(e);
    throw new TypeError("Provided object does not correctly implement Symbol.observable");
  });
}
function Kb(t) {
  return new Jt(function(e) {
    for (var n = 0; n < t.length && !e.closed; n++)
      e.next(t[n]);
    e.complete();
  });
}
function Xb(t) {
  return new Jt(function(e) {
    t.then(function(n) {
      e.closed || (e.next(n), e.complete());
    }, function(n) {
      return e.error(n);
    }).then(null, Jo);
  });
}
function Yb(t) {
  return new Jt(function(e) {
    var n, i;
    try {
      for (var r = Rt(t), s = r.next(); !s.done; s = r.next()) {
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
function lu(t) {
  return new Jt(function(e) {
    Qb(t, e).catch(function(n) {
      return e.error(n);
    });
  });
}
function Zb(t) {
  return lu(ru(t));
}
function Qb(t, e) {
  var n, i, r, s;
  return ro(this, void 0, void 0, function() {
    var a, l;
    return ss(this, function(o) {
      switch (o.label) {
        case 0:
          o.trys.push([0, 5, 6, 11]), n = yc(t), o.label = 1;
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
function en(t, e, n, i, r) {
  return new Jb(t, e, n, i, r);
}
var Jb = function(t) {
  at(e, t);
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
}(ps);
function xb(t) {
  return t && Tt(t.schedule);
}
function $b(t) {
  return t[t.length - 1];
}
function e0(t) {
  return xb($b(t)) ? t.pop() : void 0;
}
function On(t, e, n, i, r) {
  i === void 0 && (i = 0), r === void 0 && (r = !1);
  var s = e.schedule(function() {
    n(), r ? t.add(this.schedule(null, i)) : this.unsubscribe();
  }, i);
  if (t.add(s), !r)
    return s;
}
function au(t) {
  return tn(function(e, n) {
    var i = null, r = !1, s;
    i = e.subscribe(en(n, void 0, void 0, function(a) {
      s = Dn(t(a, au(t)(e))), i ? (i.unsubscribe(), i = null, s.subscribe(n)) : r = !0;
    })), r && (i.unsubscribe(), i = null, s.subscribe(n));
  });
}
function ou(t, e) {
  return e === void 0 && (e = 0), tn(function(n, i) {
    n.subscribe(en(i, function(r) {
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
function uu(t, e) {
  return e === void 0 && (e = 0), tn(function(n, i) {
    i.add(t.schedule(function() {
      return n.subscribe(i);
    }, e));
  });
}
function t0(t, e) {
  return Dn(t).pipe(uu(e), ou(e));
}
function n0(t, e) {
  return Dn(t).pipe(uu(e), ou(e));
}
function i0(t, e) {
  return new Jt(function(n) {
    var i = 0;
    return e.schedule(function() {
      i === t.length ? n.complete() : (n.next(t[i++]), n.closed || this.schedule());
    });
  });
}
function r0(t, e) {
  return new Jt(function(n) {
    var i;
    return On(n, e, function() {
      i = t[nu](), On(n, e, function() {
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
      return Tt(i == null ? void 0 : i.return) && i.return();
    };
  });
}
function cu(t, e) {
  if (!t)
    throw new Error("Iterable cannot be null");
  return new Jt(function(n) {
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
function s0(t, e) {
  return cu(ru(t), e);
}
function l0(t, e) {
  if (t != null) {
    if ($o(t))
      return t0(t, e);
    if (Xo(t))
      return i0(t, e);
    if (Yo(t))
      return n0(t, e);
    if (eu(t))
      return cu(t, e);
    if (iu(t))
      return r0(t, e);
    if (su(t))
      return s0(t, e);
  }
  throw tu(t);
}
function fu(t, e) {
  return e ? l0(t, e) : Dn(t);
}
function cn(t, e) {
  return tn(function(n, i) {
    var r = 0;
    n.subscribe(en(i, function(s) {
      i.next(t.call(e, s, r++));
    }));
  });
}
function a0(t, e, n, i, r, s, a, l) {
  var o = [], u = 0, c = 0, f = !1, d = function() {
    f && !o.length && !u && e.complete();
  }, h = function(g) {
    return u < i ? p(g) : o.push(g);
  }, p = function(g) {
    u++;
    var m = !1;
    Dn(n(g, c++)).subscribe(en(e, function(E) {
      e.next(E);
    }, function() {
      m = !0;
    }, void 0, function() {
      if (m)
        try {
          u--;
          for (var E = function() {
            var v = o.shift();
            a || p(v);
          }; o.length && u < i; )
            E();
          d();
        } catch (v) {
          e.error(v);
        }
    }));
  };
  return t.subscribe(en(e, h, function() {
    f = !0, d();
  })), function() {
  };
}
function xr(t, e, n) {
  return n === void 0 && (n = 1 / 0), Tt(e) ? xr(function(i, r) {
    return cn(function(s, a) {
      return e(i, s, r, a);
    })(Dn(t(i, r)));
  }, n) : (typeof e == "number" && (n = e), tn(function(i, r) {
    return a0(i, r, t, n);
  }));
}
function o0(t, e) {
  return Tt(e) ? xr(t, e, 1) : xr(t, 1);
}
var u0 = new Jt(function(t) {
  return t.complete();
});
function oi(t) {
  return t <= 0 ? function() {
    return u0;
  } : tn(function(e, n) {
    var i = 0;
    e.subscribe(en(n, function(r) {
      ++i <= t && (n.next(r), t <= i && n.complete());
    }));
  });
}
function du() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  var n = e0(t);
  return fu(t, n);
}
function ja(t, e) {
  return tn(function(n, i) {
    var r = 0;
    n.subscribe(en(i, function(s) {
      return t.call(e, s, r++) && i.next(s);
    }));
  });
}
function qa(t) {
  return tn(function(e, n) {
    try {
      e.subscribe(n);
    } finally {
      n.add(t);
    }
  });
}
function c0(t, e) {
  return tn(function(n, i) {
    var r = null, s = 0, a = !1, l = function() {
      return a && !r && i.complete();
    };
    n.subscribe(en(i, function(o) {
      r == null || r.unsubscribe();
      var u = 0, c = s++;
      Dn(t(o, c)).subscribe(r = en(i, function(f) {
        return i.next(e ? e(o, f, c, u++) : f);
      }, function() {
        r = null, l();
      }));
    }, function() {
      a = !0, l();
    }));
  });
}
function ui(t, e, n) {
  var i = Tt(t) || e || n ? { next: t, error: e, complete: n } : t;
  return i ? tn(function(r, s) {
    var a;
    (a = i.subscribe) === null || a === void 0 || a.call(i);
    var l = !0;
    r.subscribe(en(s, function(o) {
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
  }) : xo;
}
class f0 {
  constructor(e, n, i, r, s, a, l, o, u) {
    this._uuid = e, this._filename = n, this._author = i, this._type = r, this._date = s, this._version = a, this._comment = l, this._archived = o, this._available = u;
  }
  get uuid() {
    return this._uuid;
  }
  get filename() {
    return this._filename;
  }
  get author() {
    return this._author;
  }
  get type() {
    return this._type;
  }
  get date() {
    return this._date;
  }
  get version() {
    return this._version;
  }
  get comment() {
    return this._comment;
  }
  get archived() {
    return this._archived;
  }
  get available() {
    return this._available;
  }
}
function hu(t) {
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
var d0 = /* @__PURE__ */ function() {
  function t(e, n, i, r) {
    r === void 0 && (r = "download_load"), this.originalEvent = e, this.xhr = n, this.request = i, this.type = r;
    var s = n.status, a = n.responseType;
    this.status = s ?? 0, this.responseType = a ?? "";
    var l = n.getAllResponseHeaders();
    this.responseHeaders = l ? l.split(`
`).reduce(function(c, f) {
      var d = f.indexOf(": ");
      return c[f.slice(0, d)] = f.slice(d + 2), c;
    }, {}) : {}, this.response = hu(n);
    var o = e.loaded, u = e.total;
    this.loaded = o, this.total = u;
  }
  return t;
}(), Bi = Zo(function(t) {
  return function(n, i, r) {
    this.message = n, this.name = "AjaxError", this.xhr = i, this.request = r, this.status = i.status, this.responseType = i.responseType;
    var s;
    try {
      s = hu(i);
    } catch {
      s = i.responseText;
    }
    this.response = s;
  };
}), h0 = function() {
  function t(e, n) {
    return Bi.call(this, "ajax timeout", e, n), this.name = "AjaxTimeoutError", this;
  }
  return t.prototype = Object.create(Bi.prototype), t;
}();
function m0(t, e) {
  return Mn({ method: "GET", url: t, headers: e });
}
function p0(t, e, n) {
  return Mn({ method: "POST", url: t, body: e, headers: n });
}
function g0(t, e) {
  return Mn({ method: "DELETE", url: t, headers: e });
}
function _0(t, e, n) {
  return Mn({ method: "PUT", url: t, body: e, headers: n });
}
function b0(t, e, n) {
  return Mn({ method: "PATCH", url: t, body: e, headers: n });
}
var v0 = cn(function(t) {
  return t.response;
});
function I0(t, e) {
  return v0(Mn({
    method: "GET",
    url: t,
    headers: e
  }));
}
var Mn = function() {
  var t = function(e) {
    var n = typeof e == "string" ? {
      url: e
    } : e;
    return A0(n);
  };
  return t.get = m0, t.post = p0, t.delete = g0, t.put = _0, t.patch = b0, t.getJSON = I0, t;
}(), E0 = "upload", Wa = "download", Hr = "loadstart", Pr = "progress", za = "load";
function A0(t) {
  return new Jt(function(e) {
    var n, i, r = fe({ async: !0, crossDomain: !1, withCredentials: !1, method: "GET", timeout: 0, responseType: "json" }, t), s = r.queryParams, a = r.body, l = r.headers, o = r.url;
    if (!o)
      throw new TypeError("url is required");
    if (s) {
      var u;
      if (o.includes("?")) {
        var c = o.split("?");
        if (2 < c.length)
          throw new TypeError("invalid url");
        u = new URLSearchParams(c[1]), new URLSearchParams(s).forEach(function(K, N) {
          return u.set(N, K);
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
    var p = r.withCredentials, g = r.xsrfCookieName, m = r.xsrfHeaderName;
    if ((p || !h) && g && m) {
      var E = (i = (n = document == null ? void 0 : document.cookie.match(new RegExp("(^|;\\s*)(" + g + ")=([^;]*)"))) === null || n === void 0 ? void 0 : n.pop()) !== null && i !== void 0 ? i : "";
      E && (f[m] = E);
    }
    var v = y0(a, f), S = fe(fe({}, r), {
      url: o,
      headers: f,
      body: v
    }), C;
    C = t.createXHR ? t.createXHR() : new XMLHttpRequest();
    {
      var D = t.progressSubscriber, M = t.includeDownloadProgress, _ = M === void 0 ? !1 : M, L = t.includeUploadProgress, k = L === void 0 ? !1 : L, A = function(K, N) {
        C.addEventListener(K, function() {
          var R, G = N();
          (R = D == null ? void 0 : D.error) === null || R === void 0 || R.call(D, G), e.error(G);
        });
      };
      A("timeout", function() {
        return new h0(C, S);
      }), A("abort", function() {
        return new Bi("aborted", C, S);
      });
      var b = function(K, N) {
        return new d0(N, C, S, K + "_" + N.type);
      }, I = function(K, N, R) {
        K.addEventListener(N, function(G) {
          e.next(b(R, G));
        });
      };
      k && [Hr, Pr, za].forEach(function(K) {
        return I(C.upload, K, E0);
      }), D && [Hr, Pr].forEach(function(K) {
        return C.upload.addEventListener(K, function(N) {
          var R;
          return (R = D == null ? void 0 : D.next) === null || R === void 0 ? void 0 : R.call(D, N);
        });
      }), _ && [Hr, Pr].forEach(function(K) {
        return I(C, K, Wa);
      });
      var T = function(K) {
        var N = "ajax error" + (K ? " " + K : "");
        e.error(new Bi(N, C, S));
      };
      C.addEventListener("error", function(K) {
        var N;
        (N = D == null ? void 0 : D.error) === null || N === void 0 || N.call(D, K), T();
      }), C.addEventListener(za, function(K) {
        var N, R, G = C.status;
        if (G < 400) {
          (N = D == null ? void 0 : D.complete) === null || N === void 0 || N.call(D);
          var oe = void 0;
          try {
            oe = b(Wa, K);
          } catch (Oe) {
            e.error(Oe);
            return;
          }
          e.next(oe), e.complete();
        } else
          (R = D == null ? void 0 : D.error) === null || R === void 0 || R.call(D, K), T(G);
      });
    }
    var H = S.user, q = S.method, j = S.async;
    H ? C.open(q, o, j, H, S.password) : C.open(q, o, j), j && (C.timeout = S.timeout, C.responseType = S.responseType), "withCredentials" in C && (C.withCredentials = S.withCredentials);
    for (var d in f)
      f.hasOwnProperty(d) && C.setRequestHeader(d, f[d]);
    return v ? C.send(v) : C.send(), function() {
      C && C.readyState !== 4 && C.abort();
    };
  });
}
function y0(t, e) {
  var n;
  if (!t || typeof t == "string" || R0(t) || D0(t) || S0(t) || T0(t) || L0(t) || M0(t))
    return t;
  if (O0(t))
    return t.buffer;
  if (typeof t == "object")
    return e["content-type"] = (n = e["content-type"]) !== null && n !== void 0 ? n : "application/json;charset=utf-8", JSON.stringify(t);
  throw new TypeError("Unknown body type");
}
var C0 = Object.prototype.toString;
function _s(t, e) {
  return C0.call(t) === "[object " + e + "]";
}
function S0(t) {
  return _s(t, "ArrayBuffer");
}
function T0(t) {
  return _s(t, "File");
}
function L0(t) {
  return _s(t, "Blob");
}
function O0(t) {
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView(t);
}
function R0(t) {
  return typeof FormData < "u" && t instanceof FormData;
}
function D0(t) {
  return typeof URLSearchParams < "u" && t instanceof URLSearchParams;
}
function M0(t) {
  return typeof ReadableStream < "u" && t instanceof ReadableStream;
}
class k0 {
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
const F0 = new k0("https://demo.compas.energy", {}, "DSOM Versatel Production URL"), N0 = [F0], H0 = N0[0].getUrl();
class mu {
  constructor(e = {}) {
    this.configuration = e;
  }
  get basePath() {
    return this.configuration.basePath ?? H0;
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
class P0 {
  constructor(e = new mu()) {
    this.configuration = e, this.middleware = [], this.withMiddleware = (n) => {
      const i = this.clone();
      return i.middleware = i.middleware.concat(n), i;
    }, this.withPreMiddleware = (n) => this.withMiddleware(n.map((i) => ({ pre: i }))), this.withPostMiddleware = (n) => this.withMiddleware(n.map((i) => ({ post: i }))), this.createRequestArgs = ({ url: n, query: i, method: r, headers: s, body: a, responseType: l }) => ({
      url: `${this.configuration.basePath}${n}${i && Object.keys(i).length ? `?${w0(i)}` : ""}`,
      method: r,
      headers: s,
      body: a instanceof FormData ? a : JSON.stringify(a),
      responseType: l ?? "json"
    }), this.rxjsRequest = (n) => du(n).pipe(
      cn((i) => (this.middleware.filter((r) => r.pre).forEach((r) => i = r.pre(i)), i)),
      o0(
        (i) => Mn(i).pipe(
          cn((r) => (this.middleware.filter((s) => s.post).forEach((s) => r = s.post(r)), r))
        )
      )
    ), this.clone = () => Object.assign(Object.create(Object.getPrototypeOf(this)), this), this.middleware = e.middleware;
  }
  request(e, n) {
    return this.rxjsRequest(this.createRequestArgs(e)).pipe(
      cn((i) => {
        const { status: r, response: s } = i;
        if (r >= 200 && r < 300)
          return (n == null ? void 0 : n.response) === "raw" ? i : s;
        throw i;
      })
    );
  }
}
const Tn = (t) => encodeURIComponent(`${t}`), w0 = (t) => Object.entries(t).map(
  ([e, n]) => n instanceof Array ? n.map((i) => `${Tn(e)}=${Tn(i)}`).join("&") : `${Tn(e)}=${Tn(n)}`
).join("&"), Ri = (t, e, n) => {
  if (t == null)
    throw new Error(`Parameter "${e}" was null or undefined when calling "${n}".`);
};
class U0 extends P0 {
  retrieveDataResourceByVersion({ id: e, version: n }, i) {
    Ri(e, "id", "retrieveDataResourceByVersion"), Ri(n, "version", "retrieveDataResourceByVersion");
    const r = {};
    return this.request({
      url: "/api/scl/{id}/version/{version}".replace("{id}", Tn(e)).replace("{version}", Tn(n)),
      method: "GET",
      headers: r,
      responseType: "blob"
    }, i == null ? void 0 : i.responseOpts);
  }
  retrieveDataResourceHistory({ id: e }, n) {
    Ri(e, "id", "retrieveDataResourceHistory");
    const i = {};
    return this.request({
      url: "/api/scl/{id}/versions".replace("{id}", Tn(e)),
      method: "GET",
      headers: i
    }, n == null ? void 0 : n.responseOpts);
  }
  searchForResources({ dataResourceSearch: e }, n) {
    Ri(e, "dataResourceSearch", "searchForResources");
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
class jn {
  constructor() {
    this.endpoint = "/compas-scl-data-service";
  }
  static getInstance() {
    return jn.instance || (jn.instance = new jn()), jn.instance;
  }
  searchFiles(e) {
    return this.generateApiClient(this.endpoint).searchForResources({
      dataResourceSearch: this.mapToDataResourceSearch(e)
    }).pipe(
      ja((i) => !!i || !!i.results),
      cn((i) => i.results),
      cn(
        (i) => i.map((r) => this.mapToFileSearchResult(r))
      )
    );
  }
  getHistoryFiles(e) {
    return this.generateApiClient(this.endpoint).retrieveDataResourceHistory({
      id: e
    }).pipe(
      ja((i) => !!i || !!i.versions),
      cn((i) => i.versions),
      cn(
        (i) => i.map((r) => this.mapToFileSearchResult(r))
      )
    );
  }
  downloadSclData(e, n, i) {
    return this.generateApiClient(this.endpoint).retrieveDataResourceByVersion({
      id: e,
      version: i
    });
  }
  mapToFileSearchResult(e) {
    return console.log("data", e), new f0(
      e.uuid,
      e.name,
      e.author,
      e.type,
      new Date(e.changedAt),
      e.version,
      e.comment,
      e.archived,
      e.available
    );
  }
  mapToDataResourceSearch(e) {
    return {
      uuid: e.uuid || null,
      type: e.type || null,
      name: e.filename || null,
      author: e.author || null,
      from: e.from || null,
      to: e.to || null
    };
  }
  generateApiClient(e) {
    const n = new mu({
      basePath: e
      // accessToken: authInfo.token,
    });
    return new U0(n);
  }
}
var gn;
class Ka {
  constructor() {
    bs(this, gn, At([]));
  }
  get store() {
    return Nn(this, gn);
  }
  updateData(e) {
    Nn(this, gn).set(e);
  }
  addData(e) {
    Nn(this, gn).update((n) => [...n, e]);
  }
  removeData(e) {
    Nn(this, gn).update((n) => n.filter((i) => i.uuid !== e));
  }
  getData(e) {
    return Iu(Nn(this, gn)).find((n) => n.uuid === e);
  }
}
gn = new WeakMap();
function B0(t) {
  let e, n, i, r, s, a, l, o, u, c, f;
  function d(m) {
    t[15](m);
  }
  let h = {
    $$slots: {
      actions: [z0],
      content: [j0],
      title: [G0]
    },
    $$scope: { ctx: t }
  };
  /*dialogOpen*/
  t[6] !== void 0 && (h.open = /*dialogOpen*/
  t[6]), n = new Kp({ props: h }), le.push(() => vt(n, "open", d)), n.$on("close", onCloseDialog);
  function p(m) {
    t[16](m);
  }
  let g = {
    filterTypes: (
      /*filterTypes*/
      t[12]
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
      "filter-controls": [Y0]
    },
    $$scope: { ctx: t }
  };
  return (
    /*filtersToSearch*/
    t[8] !== void 0 && (g.activeFilters = /*filtersToSearch*/
    t[8]), a = new C_({ props: g }), le.push(() => vt(a, "activeFilters", p)), c = new Fb({
      props: {
        style: "padding: 1rem; width: 100%; height: 100%;",
        $$slots: { default: [Z0] },
        $$scope: { ctx: t }
      }
    }), {
      c() {
        e = ne("div"), ie(n.$$.fragment), r = ae(), s = ne("div"), ie(a.$$.fragment), o = ae(), u = ne("div"), ie(c.$$.fragment), P(s, "class", "search-filter"), P(u, "class", "table-container"), P(e, "class", "version-editor-container");
      },
      m(m, E) {
        V(m, e, E), ee(n, e, null), J(e, r), J(e, s), ee(a, s, null), J(e, o), J(e, u), ee(c, u, null), f = !0;
      },
      p(m, E) {
        const v = {};
        E & /*$$scope, $_, modalColumnDef, historyStore, loadingDone, currentSelectFile*/
        16777786 && (v.$$scope = { dirty: E, ctx: m }), !i && E & /*dialogOpen*/
        64 && (i = !0, v.open = /*dialogOpen*/
        m[6], bt(() => i = !1)), n.$set(v);
        const S = {};
        E & /*$_*/
        8 && (S.addFilterLabel = /*$_*/
        m[3]("add_filter")), E & /*$_*/
        8 && (S.selectFilterLabel = /*$_*/
        m[3]("filter_types")), E & /*$$scope, $_*/
        16777224 && (S.$$scope = { dirty: E, ctx: m }), !l && E & /*filtersToSearch*/
        256 && (l = !0, S.activeFilters = /*filtersToSearch*/
        m[8], bt(() => l = !1)), a.$set(S);
        const C = {};
        E & /*$$scope, columnDefs, dataStore, loadingDone, $_*/
        16777261 && (C.$$scope = { dirty: E, ctx: m }), c.$set(C);
      },
      i(m) {
        f || (y(n.$$.fragment, m), y(a.$$.fragment, m), y(c.$$.fragment, m), f = !0);
      },
      o(m) {
        O(n.$$.fragment, m), O(a.$$.fragment, m), O(c.$$.fragment, m), f = !1;
      },
      d(m) {
        m && B(e), te(n), te(a), te(c);
      }
    }
  );
}
function V0(t) {
  let e, n;
  return e = new L_({
    props: { loadingDone: !/*loading*/
    t[7] }
  }), {
    c() {
      ie(e.$$.fragment);
    },
    m(i, r) {
      ee(e, i, r), n = !0;
    },
    p(i, r) {
      const s = {};
      r & /*loading*/
      128 && (s.loadingDone = !/*loading*/
      i[7]), e.$set(s);
    },
    i(i) {
      n || (y(e.$$.fragment, i), n = !0);
    },
    o(i) {
      O(e.$$.fragment, i), n = !1;
    },
    d(i) {
      te(e, i);
    }
  };
}
function G0(t) {
  var r;
  let e, n = (
    /*$_*/
    t[3]("versionHistory.title", {
      values: {
        filename: (
          /*currentSelectFile*/
          (r = t[4]) == null ? void 0 : r.filename
        )
      }
    }) + ""
  ), i;
  return {
    c() {
      e = ne("h3"), i = ct(n), P(e, "slot", "title");
    },
    m(s, a) {
      V(s, e, a), J(e, i);
    },
    p(s, a) {
      var l;
      a & /*$_, currentSelectFile*/
      24 && n !== (n = /*$_*/
      s[3]("versionHistory.title", {
        values: {
          filename: (
            /*currentSelectFile*/
            (l = s[4]) == null ? void 0 : l.filename
          )
        }
      }) + "") && ht(i, n);
    },
    d(s) {
      s && B(e);
    }
  };
}
function j0(t) {
  let e, n, i;
  return n = new Ko({
    props: {
      columnDefs: (
        /*modalColumnDef*/
        t[9]
      ),
      store: (
        /*historyStore*/
        t[1]
      ),
      loadingDone: (
        /*loadingDone*/
        t[5]
      ),
      rowActions: (
        /*historyRowActions*/
        t[11]
      ),
      searchInputLabel: (
        /*$_*/
        t[3]("search")
      )
    }
  }), {
    c() {
      e = ne("div"), ie(n.$$.fragment), P(e, "slot", "content");
    },
    m(r, s) {
      V(r, e, s), ee(n, e, null), i = !0;
    },
    p(r, s) {
      const a = {};
      s & /*modalColumnDef*/
      512 && (a.columnDefs = /*modalColumnDef*/
      r[9]), s & /*historyStore*/
      2 && (a.store = /*historyStore*/
      r[1]), s & /*loadingDone*/
      32 && (a.loadingDone = /*loadingDone*/
      r[5]), s & /*$_*/
      8 && (a.searchInputLabel = /*$_*/
      r[3]("search")), n.$set(a);
    },
    i(r) {
      i || (y(n.$$.fragment, r), i = !0);
    },
    o(r) {
      O(n.$$.fragment, r), i = !1;
    },
    d(r) {
      r && B(e), te(n);
    }
  };
}
function q0(t) {
  let e = (
    /*$_*/
    t[3]("done") + ""
  ), n;
  return {
    c() {
      n = ct(e);
    },
    m(i, r) {
      V(i, n, r);
    },
    p(i, r) {
      r & /*$_*/
      8 && e !== (e = /*$_*/
      i[3]("done") + "") && ht(n, e);
    },
    d(i) {
      i && B(n);
    }
  };
}
function W0(t) {
  let e, n, i, r;
  return e = new ds({}), i = new ko({
    props: {
      $$slots: { default: [q0] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      ie(e.$$.fragment), n = ae(), ie(i.$$.fragment);
    },
    m(s, a) {
      ee(e, s, a), V(s, n, a), ee(i, s, a), r = !0;
    },
    p(s, a) {
      const l = {};
      a & /*$$scope, $_*/
      16777224 && (l.$$scope = { dirty: a, ctx: s }), i.$set(l);
    },
    i(s) {
      r || (y(e.$$.fragment, s), y(i.$$.fragment, s), r = !0);
    },
    o(s) {
      O(e.$$.fragment, s), O(i.$$.fragment, s), r = !1;
    },
    d(s) {
      s && B(n), te(e, s), te(i, s);
    }
  };
}
function z0(t) {
  let e, n, i;
  return n = new Wi({
    props: {
      callback: (
        /*onDialogClose*/
        t[14]
      ),
      variant: "raised",
      $$slots: { default: [W0] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      e = ne("div"), ie(n.$$.fragment), P(e, "slot", "actions");
    },
    m(r, s) {
      V(r, e, s), ee(n, e, null), i = !0;
    },
    p(r, s) {
      const a = {};
      s & /*$$scope, $_*/
      16777224 && (a.$$scope = { dirty: s, ctx: r }), n.$set(a);
    },
    i(r) {
      i || (y(n.$$.fragment, r), i = !0);
    },
    o(r) {
      O(n.$$.fragment, r), i = !1;
    },
    d(r) {
      r && B(e), te(n);
    }
  };
}
function K0(t) {
  let e = (
    /*$_*/
    t[3]("search") + ""
  ), n;
  return {
    c() {
      n = ct(e);
    },
    m(i, r) {
      V(i, n, r);
    },
    p(i, r) {
      r & /*$_*/
      8 && e !== (e = /*$_*/
      i[3]("search") + "") && ht(n, e);
    },
    d(i) {
      i && B(n);
    }
  };
}
function X0(t) {
  let e, n, i, r;
  return e = new Kg({}), i = new ko({
    props: {
      $$slots: { default: [K0] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      ie(e.$$.fragment), n = ae(), ie(i.$$.fragment);
    },
    m(s, a) {
      ee(e, s, a), V(s, n, a), ee(i, s, a), r = !0;
    },
    p(s, a) {
      const l = {};
      a & /*$$scope, $_*/
      16777224 && (l.$$scope = { dirty: a, ctx: s }), i.$set(l);
    },
    i(s) {
      r || (y(e.$$.fragment, s), y(i.$$.fragment, s), r = !0);
    },
    o(s) {
      O(e.$$.fragment, s), O(i.$$.fragment, s), r = !1;
    },
    d(s) {
      s && B(n), te(e, s), te(i, s);
    }
  };
}
function Y0(t) {
  let e, n;
  return e = new Wi({
    props: {
      slot: "filter-controls",
      variant: "raised",
      callback: (
        /*search*/
        t[13]
      ),
      $$slots: { default: [X0] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      ie(e.$$.fragment);
    },
    m(i, r) {
      ee(e, i, r), n = !0;
    },
    p(i, r) {
      const s = {};
      r & /*$$scope, $_*/
      16777224 && (s.$$scope = { dirty: r, ctx: i }), e.$set(s);
    },
    i(i) {
      n || (y(e.$$.fragment, i), n = !0);
    },
    o(i) {
      O(e.$$.fragment, i), n = !1;
    },
    d(i) {
      te(e, i);
    }
  };
}
function Z0(t) {
  let e, n = (
    /*$_*/
    t[3]("versionTable.heading") + ""
  ), i, r, s, a;
  return s = new Ko({
    props: {
      columnDefs: (
        /*columnDefs*/
        t[2]
      ),
      store: (
        /*dataStore*/
        t[0]
      ),
      loadingDone: (
        /*loadingDone*/
        t[5]
      ),
      rowActions: (
        /*rowActions*/
        t[10]
      ),
      searchInputLabel: (
        /*$_*/
        t[3]("search")
      )
    }
  }), {
    c() {
      e = ne("h3"), i = ct(n), r = ae(), ie(s.$$.fragment), wr(e, "margin-bottom", "1rem");
    },
    m(l, o) {
      V(l, e, o), J(e, i), V(l, r, o), ee(s, l, o), a = !0;
    },
    p(l, o) {
      (!a || o & /*$_*/
      8) && n !== (n = /*$_*/
      l[3]("versionTable.heading") + "") && ht(i, n);
      const u = {};
      o & /*columnDefs*/
      4 && (u.columnDefs = /*columnDefs*/
      l[2]), o & /*dataStore*/
      1 && (u.store = /*dataStore*/
      l[0]), o & /*loadingDone*/
      32 && (u.loadingDone = /*loadingDone*/
      l[5]), o & /*$_*/
      8 && (u.searchInputLabel = /*$_*/
      l[3]("search")), s.$set(u);
    },
    i(l) {
      a || (y(s.$$.fragment, l), a = !0);
    },
    o(l) {
      O(s.$$.fragment, l), a = !1;
    },
    d(l) {
      l && (B(e), B(r)), te(s, l);
    }
  };
}
function Q0(t) {
  let e, n, i, r;
  const s = [V0, B0], a = [];
  function l(o, u) {
    return (
      /*loading*/
      o[7] ? 0 : 1
    );
  }
  return e = l(t), n = a[e] = s[e](t), {
    c() {
      n.c(), i = Ze();
    },
    m(o, u) {
      a[e].m(o, u), V(o, i, u), r = !0;
    },
    p(o, [u]) {
      let c = e;
      e = l(o), e === c ? a[e].p(o, u) : (Ue(), O(a[c], 1, 1, () => {
        a[c] = null;
      }), Be(), n = a[e], n ? n.p(o, u) : (n = a[e] = s[e](o), n.c()), y(n, 1), n.m(i.parentNode, i));
    },
    i(o) {
      r || (y(n), r = !0);
    },
    o(o) {
      O(n), r = !1;
    },
    d(o) {
      o && B(i), a[e].d(o);
    }
  };
}
$f({ en: zu, de: ic });
function J0(t) {
  return new Date(t).toLocaleDateString();
}
function x0(t) {
  const e = {
    uuid: null,
    filename: null,
    author: null,
    type: null,
    name: null,
    from: null,
    to: null
  };
  return console.log("Convert filter to search params: ", t), t.filter((n) => !n.disabled).forEach((n) => {
    console.log("KEY:", n.key), n.key === "from" || n.key === "to" ? e[n.key] = new Date(n.value).toISOString() : e[n.key] = n.value;
  }), e;
}
function $0(t, e, n) {
  let i, r, s;
  st(t, xf, (k) => n(3, s = k));
  const a = jn.getInstance();
  let l, { dataStore: o = new Ka() } = e, { historyStore: u = new Ka() } = e, c = !0, f = !1, d = !0;
  ft(() => {
    setTimeout(
      () => {
        n(7, d = !1);
      },
      1e3
    );
  });
  const h = {
    headerName: "",
    field: "actions",
    numeric: !1,
    filter: !1,
    filterType: "text",
    minWidth: "100px",
    sortable: !1
  }, p = [
    {
      icon: "edit",
      callback: (k) => M(k),
      disabled: (k) => !k.available
    },
    {
      icon: "find-in-page",
      callback: (k) => C(k),
      disabled: () => !1
    },
    {
      icon: "download",
      callback: (k) => v(k),
      disabled: (k) => !k.available
    }
  ], g = [
    {
      icon: "download",
      callback: (k) => v(k),
      disabled: (k) => !k.available
    }
  ], m = [
    {
      id: 1,
      label: "Filename",
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
    },
    {
      id: 4,
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
      id: 5,
      label: "From",
      inputType: {
        id: 3,
        type: "timepicker",
        validatorFn: () => !0,
        options: []
      },
      allowedOperations: ["="]
    },
    {
      id: 5,
      label: "To",
      inputType: {
        id: 3,
        type: "timepicker",
        validatorFn: () => !0,
        options: []
      },
      allowedOperations: ["="]
    }
  ];
  let E = [];
  function v(k) {
    console.log("Download file: ", k), a.downloadSclData(k.uuid, k.type, k.version).pipe(oi(1), ui((A) => {
      const b = window.URL.createObjectURL(A), I = document.createElement("a");
      I.href = b, I.download = k.filename, I.style.display = "none", document.body.appendChild(I), I.click(), document.body.removeChild(I), window.URL.revokeObjectURL(b);
    })).subscribe();
  }
  function S() {
    const k = x0(E);
    console.log("Search with params: ", k), n(5, c = !1), a.searchFiles(k).pipe(
      oi(1),
      ui((A) => {
        [...A], o.updateData(A);
      }),
      qa(() => {
        n(5, c = !0);
      })
    ).subscribe();
  }
  function C(k) {
    n(4, l = k), a.getHistoryFiles(k.uuid).pipe(oi(1), ui((A) => {
      n(6, f = !0), [...A], u.updateData(A);
    })).subscribe();
  }
  function D(k) {
    console.log("Dialog closed with result: ", k), n(6, f = !1);
  }
  function M(k) {
    if (!confirm(`Open the selected file?

 Please make sure you save all changes on your current project.`))
      return;
    let A = "";
    a.downloadSclData(k.uuid, k.type, k.version).pipe(
      oi(1),
      ui((b) => {
        A = window.URL.createObjectURL(b);
      }),
      c0(() => fu(fetch(A).then((b) => {
        if (b.status === 200)
          return b.text();
        throw new Error(`Failed to load ${k.filename}: ${b.status} ${b.statusText}`);
      }))),
      oi(1),
      au((b) => (alert(b), console.error(b), du(void 0))),
      ui((b) => {
        var I;
        if (!b)
          return;
        const T = k.filename, H = new DOMParser().parseFromString(b, "application/xml");
        (I = window.document.getElementsByTagName("open-scd")[0]) === null || I === void 0 || I.dispatchEvent(new CustomEvent(
          "open-doc",
          {
            bubbles: !0,
            composed: !0,
            detail: { localFile: !1, doc: H, docName: T }
          }
        ));
      }),
      qa(() => A && window.URL.revokeObjectURL(A))
    ).subscribe();
  }
  function _(k) {
    f = k, n(6, f);
  }
  function L(k) {
    E = k, n(8, E);
  }
  return t.$$set = (k) => {
    "dataStore" in k && n(0, o = k.dataStore), "historyStore" in k && n(1, u = k.historyStore);
  }, t.$$.update = () => {
    t.$$.dirty & /*$_*/
    8 && n(2, i = [
      {
        headerName: s("uuid"),
        field: "uuid",
        numeric: !1,
        filter: !0,
        filterType: "text",
        sortable: !1
      },
      {
        headerName: s("filename"),
        field: "filename",
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
        headerName: s("author"),
        field: "author",
        numeric: !1,
        filter: !0,
        filterType: "text",
        sortable: !0
      },
      {
        headerName: s("date"),
        field: "date",
        numeric: !1,
        filter: !0,
        filterType: "text",
        sortable: !0,
        valueFormatter: J0
      },
      {
        headerName: s("version"),
        field: "version",
        numeric: !1,
        filter: !0,
        filterType: "text",
        sortable: !0
      },
      h
    ]), t.$$.dirty & /*columnDefs*/
    4 && n(9, r = [
      ...i,
      {
        headerName: "Comment",
        field: "comment",
        numeric: !1,
        filter: !0,
        filterType: "text",
        sortable: !0
      }
    ]);
  }, [
    o,
    u,
    i,
    s,
    l,
    c,
    f,
    d,
    E,
    r,
    p,
    g,
    m,
    S,
    D,
    _,
    L
  ];
}
class e1 extends Me {
  constructor(e) {
    super(), De(this, e, $0, Q0, Ce, { dataStore: 0, historyStore: 1 });
  }
}
function Xa(t) {
  let e, n;
  return e = new e1({}), {
    c() {
      ie(e.$$.fragment);
    },
    m(i, r) {
      ee(e, i, r), n = !0;
    },
    i(i) {
      n || (y(e.$$.fragment, i), n = !0);
    },
    o(i) {
      O(e.$$.fragment, i), n = !1;
    },
    d(i) {
      te(e, i);
    }
  };
}
function t1(t) {
  let e, n, i, r, s, a = (
    /*doc*/
    (t[0] || /*dev*/
    t[1]) && Xa()
  );
  return {
    c() {
      a && a.c(), e = ae(), n = ne("input"), i = ae(), r = ne("input"), P(n, "type", "hidden"), P(n, "name", "package-name"), n.value = to, P(r, "type", "hidden"), P(r, "name", "package-version"), r.value = no;
    },
    m(l, o) {
      a && a.m(l, o), V(l, e, o), V(l, n, o), V(l, i, o), V(l, r, o), s = !0;
    },
    p(l, [o]) {
      /*doc*/
      l[0] || /*dev*/
      l[1] ? a ? o & /*doc, dev*/
      3 && y(a, 1) : (a = Xa(), a.c(), y(a, 1), a.m(e.parentNode, e)) : a && (Ue(), O(a, 1, 1, () => {
        a = null;
      }), Be());
    },
    i(l) {
      s || (y(a), s = !0);
    },
    o(l) {
      O(a), s = !1;
    },
    d(l) {
      l && (B(e), B(n), B(i), B(r)), a && a.d(l);
    }
  };
}
function n1(t, e, n) {
  let { doc: i } = e, { dev: r = !1 } = e;
  return t.$$set = (s) => {
    "doc" in s && n(0, i = s.doc), "dev" in s && n(1, r = s.dev);
  }, [i, r];
}
class i1 extends Me {
  constructor(e) {
    super(), De(this, e, n1, t1, Ce, { doc: 0, dev: 1 });
  }
}
class a1 extends HTMLElement {
  connectedCallback() {
    var n;
    this.attachShadow({ mode: "open" }), this.plugin = new i1({
      target: this.shadowRoot,
      props: {
        doc: this._doc,
        editCount: -1
      }
    });
    const e = r1();
    (n = this.shadowRoot) == null || n.appendChild(e);
  }
  set doc(e) {
    this._doc = e, this.plugin && this.plugin.$set({ doc: e });
  }
  set editCount(e) {
    this.plugin && this.plugin.$set({ editCount: e });
  }
}
function r1() {
  const t = `${to}-v${no}-style`, e = s1(), n = document.createElement("link");
  return n.rel = "stylesheet", n.type = "text/css", n.href = e, n.id = t, n;
}
function s1() {
  const t = new URL(import.meta.url), e = t.origin, n = t.pathname.split("/").slice(0, -1).filter(Boolean).join("/");
  return [e, n, "style.css"].filter(Boolean).join("/");
}
export {
  a1 as default
};
