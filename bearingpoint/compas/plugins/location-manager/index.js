var Zl = Object.defineProperty;
var Yl = (n, e, t) => e in n ? Zl(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var _n = (n, e, t) => (Yl(n, typeof e != "symbol" ? e + "" : e, t), t), Ql = (n, e, t) => {
  if (!e.has(n))
    throw TypeError("Cannot " + t);
};
var kt = (n, e, t) => (Ql(n, e, "read from private field"), t ? t.call(n) : e.get(n)), Zn = (n, e, t) => {
  if (e.has(n))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(n) : e.set(n, t);
};
function Ie() {
}
function V(n, e) {
  for (const t in e)
    n[t] = e[t];
  return (
    /** @type {T & S} */
    n
  );
}
function kr(n) {
  return n();
}
function Yn() {
  return /* @__PURE__ */ Object.create(null);
}
function Ce(n) {
  n.forEach(kr);
}
function he(n) {
  return typeof n == "function";
}
function ae(n, e) {
  return n != n ? e == e : n !== e || n && typeof n == "object" || typeof n == "function";
}
function Jl(n) {
  return Object.keys(n).length === 0;
}
function Rr(n, ...e) {
  if (n == null) {
    for (const i of e)
      i(void 0);
    return Ie;
  }
  const t = n.subscribe(...e);
  return t.unsubscribe ? () => t.unsubscribe() : t;
}
function $l(n) {
  let e;
  return Rr(n, (t) => e = t)(), e;
}
function xe(n, e, t) {
  n.$$.on_destroy.push(Rr(e, t));
}
function ne(n, e, t, i) {
  if (n) {
    const r = wr(n, e, t, i);
    return n[0](r);
  }
}
function wr(n, e, t, i) {
  return n[1] && i ? V(t.ctx.slice(), n[1](i(e))) : t.ctx;
}
function ie(n, e, t, i) {
  if (n[2] && i) {
    const r = n[2](i(t));
    if (e.dirty === void 0)
      return r;
    if (typeof r == "object") {
      const l = [], o = Math.max(e.dirty.length, r.length);
      for (let a = 0; a < o; a += 1)
        l[a] = e.dirty[a] | r[a];
      return l;
    }
    return e.dirty | r;
  }
  return e.dirty;
}
function re(n, e, t, i, r, l) {
  if (r) {
    const o = wr(e, t, i, l);
    n.p(o, r);
  }
}
function le(n) {
  if (n.ctx.length > 32) {
    const e = [], t = n.ctx.length / 32;
    for (let i = 0; i < t; i++)
      e[i] = -1;
    return e;
  }
  return -1;
}
function Fe(n) {
  const e = {};
  for (const t in n)
    t[0] !== "$" && (e[t] = n[t]);
  return e;
}
function oe(n, e) {
  const t = {};
  e = new Set(e);
  for (const i in n)
    !e.has(i) && i[0] !== "$" && (t[i] = n[i]);
  return t;
}
function Or(n) {
  const e = {};
  for (const t in n)
    e[t] = !0;
  return e;
}
function Ct(n, e, t) {
  return n.set(t), e;
}
function ee(n) {
  return n && he(n.destroy) ? n.destroy : Ie;
}
const xl = typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : (
  // @ts-ignore Node typings have this
  global
);
function X(n, e) {
  n.appendChild(e);
}
function F(n, e, t) {
  n.insertBefore(e, t || null);
}
function M(n) {
  n.parentNode && n.parentNode.removeChild(n);
}
function Dr(n, e) {
  for (let t = 0; t < n.length; t += 1)
    n[t] && n[t].d(e);
}
function Z(n) {
  return document.createElement(n);
}
function Te(n) {
  return document.createElementNS("http://www.w3.org/2000/svg", n);
}
function ke(n) {
  return document.createTextNode(n);
}
function Y() {
  return ke(" ");
}
function Ee() {
  return ke("");
}
function $(n, e, t, i) {
  return n.addEventListener(e, t, i), () => n.removeEventListener(e, t, i);
}
function U(n, e, t) {
  t == null ? n.removeAttribute(e) : n.getAttribute(e) !== t && n.setAttribute(e, t);
}
const ea = ["width", "height"];
function te(n, e) {
  const t = Object.getOwnPropertyDescriptors(n.__proto__);
  for (const i in e)
    e[i] == null ? n.removeAttribute(i) : i === "style" ? n.style.cssText = e[i] : i === "__value" ? n.value = n[i] = e[i] : t[i] && t[i].set && ea.indexOf(i) === -1 ? n[i] = e[i] : U(n, i, e[i]);
}
function Qn(n, e) {
  for (const t in e)
    U(n, t, e[t]);
}
function ta(n, e) {
  Object.keys(e).forEach((t) => {
    na(n, t, e[t]);
  });
}
function na(n, e, t) {
  const i = e.toLowerCase();
  i in n ? n[i] = typeof n[i] == "boolean" && t === "" ? !0 : t : e in n ? n[e] = typeof n[e] == "boolean" && t === "" ? !0 : t : U(n, e, t);
}
function fn(n) {
  return /-/.test(n) ? ta : te;
}
function Tr(n) {
  return n === "" ? null : +n;
}
function ia(n) {
  return Array.from(n.childNodes);
}
function We(n, e) {
  e = "" + e, n.data !== e && (n.data = /** @type {string} */
  e);
}
function Gt(n, e) {
  n.value = e ?? "";
}
function Jt(n, e, t, i) {
  t == null ? n.style.removeProperty(e) : n.style.setProperty(e, t, "");
}
function ft(n, e) {
  return new n(e);
}
let $t;
function Qt(n) {
  $t = n;
}
function Re() {
  if (!$t)
    throw new Error("Function called outside component initialization");
  return $t;
}
function Ke(n) {
  Re().$$.on_mount.push(n);
}
function Wt(n) {
  Re().$$.on_destroy.push(n);
}
function we(n, e) {
  return Re().$$.context.set(n, e), e;
}
function Oe(n) {
  return Re().$$.context.get(n);
}
function cn(n, e) {
  const t = n.$$.callbacks[e.type];
  t && t.slice().forEach((i) => i.call(this, e));
}
const Bt = [], x = [];
let jt = [];
const On = [], Hr = /* @__PURE__ */ Promise.resolve();
let Dn = !1;
function Mr() {
  Dn || (Dn = !0, Hr.then(Fr));
}
function ra() {
  return Mr(), Hr;
}
function Tn(n) {
  jt.push(n);
}
function Ze(n) {
  On.push(n);
}
const bn = /* @__PURE__ */ new Set();
let Ut = 0;
function Fr() {
  if (Ut !== 0)
    return;
  const n = $t;
  do {
    try {
      for (; Ut < Bt.length; ) {
        const e = Bt[Ut];
        Ut++, Qt(e), la(e.$$);
      }
    } catch (e) {
      throw Bt.length = 0, Ut = 0, e;
    }
    for (Qt(null), Bt.length = 0, Ut = 0; x.length; )
      x.pop()();
    for (let e = 0; e < jt.length; e += 1) {
      const t = jt[e];
      bn.has(t) || (bn.add(t), t());
    }
    jt.length = 0;
  } while (Bt.length);
  for (; On.length; )
    On.pop()();
  Dn = !1, bn.clear(), Qt(n);
}
function la(n) {
  if (n.fragment !== null) {
    n.update(), Ce(n.before_update);
    const e = n.dirty;
    n.dirty = [-1], n.fragment && n.fragment.p(n.ctx, e), n.after_update.forEach(Tn);
  }
}
function aa(n) {
  const e = [], t = [];
  jt.forEach((i) => n.indexOf(i) === -1 ? e.push(i) : t.push(i)), t.forEach((i) => i()), jt = e;
}
const un = /* @__PURE__ */ new Set();
let Ot;
function pe() {
  Ot = {
    r: 0,
    c: [],
    p: Ot
    // parent group
  };
}
function _e() {
  Ot.r || Ce(Ot.c), Ot = Ot.p;
}
function S(n, e) {
  n && n.i && (un.delete(n), n.i(e));
}
function L(n, e, t, i) {
  if (n && n.o) {
    if (un.has(n))
      return;
    un.add(n), Ot.c.push(() => {
      un.delete(n), i && (t && n.d(1), i());
    }), n.o(e);
  } else
    i && i();
}
function St(n) {
  return (n == null ? void 0 : n.length) !== void 0 ? n : Array.from(n);
}
function Ur(n, e) {
  L(n, 1, 1, () => {
    e.delete(n.key);
  });
}
function Pr(n, e, t, i, r, l, o, a, s, u, f, c) {
  let d = n.length, p = l.length, b = d;
  const _ = {};
  for (; b--; )
    _[n[b].key] = b;
  const g = [], C = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ new Map(), w = [];
  for (b = p; b--; ) {
    const m = c(r, l, b), R = t(m);
    let z = o.get(R);
    z ? w.push(() => z.p(m, e)) : (z = u(R, m), z.c()), C.set(R, g[b] = z), R in _ && v.set(R, Math.abs(b - _[R]));
  }
  const A = /* @__PURE__ */ new Set(), O = /* @__PURE__ */ new Set();
  function P(m) {
    S(m, 1), m.m(a, f), o.set(m.key, m), f = m.first, p--;
  }
  for (; d && p; ) {
    const m = g[p - 1], R = n[d - 1], z = m.key, I = R.key;
    m === R ? (f = m.first, d--, p--) : C.has(I) ? !o.has(z) || A.has(z) ? P(m) : O.has(I) ? d-- : v.get(z) > v.get(I) ? (O.add(z), P(m)) : (A.add(I), d--) : (s(R, o), d--);
  }
  for (; d--; ) {
    const m = n[d];
    C.has(m.key) || s(m, o);
  }
  for (; p; )
    P(g[p - 1]);
  return Ce(w), g;
}
function fe(n, e) {
  const t = {}, i = {}, r = { $$scope: 1 };
  let l = n.length;
  for (; l--; ) {
    const o = n[l], a = e[l];
    if (a) {
      for (const s in o)
        s in a || (i[s] = 1);
      for (const s in a)
        r[s] || (t[s] = a[s], r[s] = 1);
      n[l] = a;
    } else
      for (const s in o)
        r[s] = 1;
  }
  for (const o in i)
    o in t || (t[o] = void 0);
  return t;
}
function ye(n) {
  return typeof n == "object" && n !== null ? n : {};
}
function Ye(n, e, t) {
  const i = n.$$.props[e];
  i !== void 0 && (n.$$.bound[i] = t, t(n.$$.ctx[i]));
}
function j(n) {
  n && n.c();
}
function B(n, e, t) {
  const { fragment: i, after_update: r } = n.$$;
  i && i.m(e, t), Tn(() => {
    const l = n.$$.on_mount.map(kr).filter(he);
    n.$$.on_destroy ? n.$$.on_destroy.push(...l) : Ce(l), n.$$.on_mount = [];
  }), r.forEach(Tn);
}
function N(n, e) {
  const t = n.$$;
  t.fragment !== null && (aa(t.after_update), Ce(t.on_destroy), t.fragment && t.fragment.d(e), t.on_destroy = t.fragment = null, t.ctx = []);
}
function oa(n, e) {
  n.$$.dirty[0] === -1 && (Bt.push(n), Mr(), n.$$.dirty.fill(0)), n.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function ce(n, e, t, i, r, l, o = null, a = [-1]) {
  const s = $t;
  Qt(n);
  const u = n.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: l,
    update: Ie,
    not_equal: r,
    bound: Yn(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (s ? s.$$.context : [])),
    // everything else
    callbacks: Yn(),
    dirty: a,
    skip_bound: !1,
    root: e.target || s.$$.root
  };
  o && o(u.root);
  let f = !1;
  if (u.ctx = t ? t(n, e.props || {}, (c, d, ...p) => {
    const b = p.length ? p[0] : d;
    return u.ctx && r(u.ctx[c], u.ctx[c] = b) && (!u.skip_bound && u.bound[c] && u.bound[c](b), f && oa(n, c)), d;
  }) : [], u.update(), f = !0, Ce(u.before_update), u.fragment = i ? i(u.ctx) : !1, e.target) {
    if (e.hydrate) {
      const c = ia(e.target);
      u.fragment && u.fragment.l(c), c.forEach(M);
    } else
      u.fragment && u.fragment.c();
    e.intro && S(n.$$.fragment), B(n, e.target, e.anchor), Fr();
  }
  Qt(s);
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
    _n(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    _n(this, "$$set");
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
  $on(e, t) {
    if (!he(t))
      return Ie;
    const i = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return i.push(t), () => {
      const r = i.indexOf(t);
      r !== -1 && i.splice(r, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(e) {
    this.$$set && !Jl(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const sa = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(sa);
const Br = "location-manager", Nr = "0.0.1";
function Q(n) {
  return Object.entries(n).filter(([e, t]) => e !== "" && t).map(([e]) => e).join(" ");
}
function ge(n, e, t, i = { bubbles: !0 }, r = !1) {
  if (typeof Event > "u")
    throw new Error("Event not defined.");
  if (!n)
    throw new Error("Tried to dipatch event without element.");
  const l = new CustomEvent(e, Object.assign(Object.assign({}, i), { detail: t }));
  if (n == null || n.dispatchEvent(l), r && e.startsWith("SMUI")) {
    const o = new CustomEvent(e.replace(/^SMUI/g, () => "MDC"), Object.assign(Object.assign({}, i), { detail: t }));
    n == null || n.dispatchEvent(o), o.defaultPrevented && l.preventDefault();
  }
  return l;
}
function It(n, e) {
  let t = Object.getOwnPropertyNames(n);
  const i = {};
  for (let r = 0; r < t.length; r++) {
    const l = t[r], o = l.indexOf("$");
    o !== -1 && e.indexOf(l.substring(0, o + 1)) !== -1 || e.indexOf(l) === -1 && (i[l] = n[l]);
  }
  return i;
}
const Jn = /^[a-z]+(?::(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/, ua = /^[^$]+(?:\$(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/;
function Pe(n) {
  let e, t = [];
  n.$on = (r, l) => {
    let o = r, a = () => {
    };
    return e ? a = e(o, l) : t.push([o, l]), o.match(Jn) && console && console.warn('Event modifiers in SMUI now use "$" instead of ":", so that all events can be bound with modifiers. Please update your event binding: ', o), () => {
      a();
    };
  };
  function i(r) {
    const l = n.$$.callbacks[r.type];
    l && l.slice().forEach((o) => o.call(this, r));
  }
  return (r) => {
    const l = [], o = {};
    e = (a, s) => {
      let u = a, f = s, c = !1;
      const d = u.match(Jn), p = u.match(ua), b = d || p;
      if (u.match(/^SMUI:\w+:/)) {
        const C = u.split(":");
        let v = "";
        for (let w = 0; w < C.length; w++)
          v += w === C.length - 1 ? ":" + C[w] : C[w].split("-").map((A) => A.slice(0, 1).toUpperCase() + A.slice(1)).join("");
        console.warn(`The event ${u.split("$")[0]} has been renamed to ${v.split("$")[0]}.`), u = v;
      }
      if (b) {
        const C = u.split(d ? ":" : "$");
        u = C[0];
        const v = C.slice(1).reduce((w, A) => (w[A] = !0, w), {});
        v.passive && (c = c || {}, c.passive = !0), v.nonpassive && (c = c || {}, c.passive = !1), v.capture && (c = c || {}, c.capture = !0), v.once && (c = c || {}, c.once = !0), v.preventDefault && (f = fa(f)), v.stopPropagation && (f = ca(f)), v.stopImmediatePropagation && (f = da(f)), v.self && (f = ma(r, f)), v.trusted && (f = ha(f));
      }
      const _ = $n(r, u, f, c), g = () => {
        _();
        const C = l.indexOf(g);
        C > -1 && l.splice(C, 1);
      };
      return l.push(g), u in o || (o[u] = $n(r, u, i)), g;
    };
    for (let a = 0; a < t.length; a++)
      e(t[a][0], t[a][1]);
    return {
      destroy: () => {
        for (let a = 0; a < l.length; a++)
          l[a]();
        for (let a of Object.entries(o))
          a[1]();
      }
    };
  };
}
function $n(n, e, t, i) {
  return n.addEventListener(e, t, i), () => n.removeEventListener(e, t, i);
}
function fa(n) {
  return function(e) {
    return e.preventDefault(), n.call(this, e);
  };
}
function ca(n) {
  return function(e) {
    return e.stopPropagation(), n.call(this, e);
  };
}
function da(n) {
  return function(e) {
    return e.stopImmediatePropagation(), n.call(this, e);
  };
}
function ma(n, e) {
  return function(t) {
    if (t.target === n)
      return e.call(this, t);
  };
}
function ha(n) {
  return function(e) {
    if (e.isTrusted)
      return n.call(this, e);
  };
}
function Me(n, e) {
  let t = Object.getOwnPropertyNames(n);
  const i = {};
  for (let r = 0; r < t.length; r++) {
    const l = t[r];
    l.substring(0, e.length) === e && (i[l.substring(e.length)] = n[l]);
  }
  return i;
}
function De(n, e) {
  let t = [];
  if (e)
    for (let i = 0; i < e.length; i++) {
      const r = e[i], l = Array.isArray(r) ? r[0] : r;
      Array.isArray(r) && r.length > 1 ? t.push(l(n, r[1])) : t.push(l(n));
    }
  return {
    update(i) {
      if ((i && i.length || 0) != t.length)
        throw new Error("You must not change the length of an actions array.");
      if (i)
        for (let r = 0; r < i.length; r++) {
          const l = t[r];
          if (l && l.update) {
            const o = i[r];
            Array.isArray(o) && o.length > 1 ? l.update(o[1]) : l.update();
          }
        }
    },
    destroy() {
      for (let i = 0; i < t.length; i++) {
        const r = t[i];
        r && r.destroy && r.destroy();
      }
    }
  };
}
var rn;
function ga(n, e) {
  e === void 0 && (e = !1);
  var t = n.CSS, i = rn;
  if (typeof rn == "boolean" && !e)
    return rn;
  var r = t && typeof t.supports == "function";
  if (!r)
    return !1;
  var l = t.supports("--css-vars", "yes"), o = t.supports("(--css-vars: yes)") && t.supports("color", "#00000000");
  return i = l || o, e || (rn = i), i;
}
function pa(n, e, t) {
  if (!n)
    return { x: 0, y: 0 };
  var i = e.x, r = e.y, l = i + t.left, o = r + t.top, a, s;
  if (n.type === "touchstart") {
    var u = n;
    a = u.changedTouches[0].pageX - l, s = u.changedTouches[0].pageY - o;
  } else {
    var f = n;
    a = f.pageX - l, s = f.pageY - o;
  }
  return { x: a, y: s };
}
var Hn = function(n, e) {
  return Hn = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, i) {
    t.__proto__ = i;
  } || function(t, i) {
    for (var r in i)
      Object.prototype.hasOwnProperty.call(i, r) && (t[r] = i[r]);
  }, Hn(n, e);
};
function et(n, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  Hn(n, e);
  function t() {
    this.constructor = n;
  }
  n.prototype = e === null ? Object.create(e) : (t.prototype = e.prototype, new t());
}
var Le = function() {
  return Le = Object.assign || function(e) {
    for (var t, i = 1, r = arguments.length; i < r; i++) {
      t = arguments[i];
      for (var l in t)
        Object.prototype.hasOwnProperty.call(t, l) && (e[l] = t[l]);
    }
    return e;
  }, Le.apply(this, arguments);
};
function jr(n, e, t, i) {
  function r(l) {
    return l instanceof t ? l : new t(function(o) {
      o(l);
    });
  }
  return new (t || (t = Promise))(function(l, o) {
    function a(f) {
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
      f.done ? l(f.value) : r(f.value).then(a, s);
    }
    u((i = i.apply(n, e || [])).next());
  });
}
function Bn(n, e) {
  var t = { label: 0, sent: function() {
    if (l[0] & 1)
      throw l[1];
    return l[1];
  }, trys: [], ops: [] }, i, r, l, o = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
  return o.next = a(0), o.throw = a(1), o.return = a(2), typeof Symbol == "function" && (o[Symbol.iterator] = function() {
    return this;
  }), o;
  function a(u) {
    return function(f) {
      return s([u, f]);
    };
  }
  function s(u) {
    if (i)
      throw new TypeError("Generator is already executing.");
    for (; o && (o = 0, u[0] && (t = 0)), t; )
      try {
        if (i = 1, r && (l = u[0] & 2 ? r.return : u[0] ? r.throw || ((l = r.return) && l.call(r), 0) : r.next) && !(l = l.call(r, u[1])).done)
          return l;
        switch (r = 0, l && (u = [u[0] & 2, l.value]), u[0]) {
          case 0:
          case 1:
            l = u;
            break;
          case 4:
            return t.label++, { value: u[1], done: !1 };
          case 5:
            t.label++, r = u[1], u = [0];
            continue;
          case 7:
            u = t.ops.pop(), t.trys.pop();
            continue;
          default:
            if (l = t.trys, !(l = l.length > 0 && l[l.length - 1]) && (u[0] === 6 || u[0] === 2)) {
              t = 0;
              continue;
            }
            if (u[0] === 3 && (!l || u[1] > l[0] && u[1] < l[3])) {
              t.label = u[1];
              break;
            }
            if (u[0] === 6 && t.label < l[1]) {
              t.label = l[1], l = u;
              break;
            }
            if (l && t.label < l[2]) {
              t.label = l[2], t.ops.push(u);
              break;
            }
            l[2] && t.ops.pop(), t.trys.pop();
            continue;
        }
        u = e.call(n, t);
      } catch (f) {
        u = [6, f], r = 0;
      } finally {
        i = l = 0;
      }
    if (u[0] & 5)
      throw u[1];
    return { value: u[0] ? u[1] : void 0, done: !0 };
  }
}
function ze(n) {
  var e = typeof Symbol == "function" && Symbol.iterator, t = e && n[e], i = 0;
  if (t)
    return t.call(n);
  if (n && typeof n.length == "number")
    return {
      next: function() {
        return n && i >= n.length && (n = void 0), { value: n && n[i++], done: !n };
      }
    };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function Mn(n, e) {
  var t = typeof Symbol == "function" && n[Symbol.iterator];
  if (!t)
    return n;
  var i = t.call(n), r, l = [], o;
  try {
    for (; (e === void 0 || e-- > 0) && !(r = i.next()).done; )
      l.push(r.value);
  } catch (a) {
    o = { error: a };
  } finally {
    try {
      r && !r.done && (t = i.return) && t.call(i);
    } finally {
      if (o)
        throw o.error;
    }
  }
  return l;
}
function Fn(n, e, t) {
  if (t || arguments.length === 2)
    for (var i = 0, r = e.length, l; i < r; i++)
      (l || !(i in e)) && (l || (l = Array.prototype.slice.call(e, 0, i)), l[i] = e[i]);
  return n.concat(l || Array.prototype.slice.call(e));
}
function qt(n) {
  return this instanceof qt ? (this.v = n, this) : new qt(n);
}
function _a(n, e, t) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var i = t.apply(n, e || []), r, l = [];
  return r = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype), a("next"), a("throw"), a("return", o), r[Symbol.asyncIterator] = function() {
    return this;
  }, r;
  function o(p) {
    return function(b) {
      return Promise.resolve(b).then(p, c);
    };
  }
  function a(p, b) {
    i[p] && (r[p] = function(_) {
      return new Promise(function(g, C) {
        l.push([p, _, g, C]) > 1 || s(p, _);
      });
    }, b && (r[p] = b(r[p])));
  }
  function s(p, b) {
    try {
      u(i[p](b));
    } catch (_) {
      d(l[0][3], _);
    }
  }
  function u(p) {
    p.value instanceof qt ? Promise.resolve(p.value.v).then(f, c) : d(l[0][2], p);
  }
  function f(p) {
    s("next", p);
  }
  function c(p) {
    s("throw", p);
  }
  function d(p, b) {
    p(b), l.shift(), l.length && s(l[0][0], l[0][1]);
  }
}
function ba(n) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var e = n[Symbol.asyncIterator], t;
  return e ? e.call(n) : (n = typeof ze == "function" ? ze(n) : n[Symbol.iterator](), t = {}, i("next"), i("throw"), i("return"), t[Symbol.asyncIterator] = function() {
    return this;
  }, t);
  function i(l) {
    t[l] = n[l] && function(o) {
      return new Promise(function(a, s) {
        o = n[l](o), r(a, s, o.done, o.value);
      });
    };
  }
  function r(l, o, a, s) {
    Promise.resolve(s).then(function(u) {
      l({ value: u, done: a });
    }, o);
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
var ct = (
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
function va(n) {
  return n === void 0 && (n = window), ya(n) ? { passive: !0 } : !1;
}
function ya(n) {
  n === void 0 && (n = window);
  var e = !1;
  try {
    var t = {
      // This function will be called when the browser
      // attempts to access the passive property.
      get passive() {
        return e = !0, !1;
      }
    }, i = function() {
    };
    n.document.addEventListener("test", i, t), n.document.removeEventListener("test", i, t);
  } catch {
    e = !1;
  }
  return e;
}
const qr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  applyPassive: va
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
function Ca(n, e) {
  if (n.closest)
    return n.closest(e);
  for (var t = n; t; ) {
    if (Vr(t, e))
      return t;
    t = t.parentElement;
  }
  return null;
}
function Vr(n, e) {
  var t = n.matches || n.webkitMatchesSelector || n.msMatchesSelector;
  return t.call(n, e);
}
function Aa(n) {
  var e = n;
  if (e.offsetParent !== null)
    return e.scrollWidth;
  var t = e.cloneNode(!0);
  t.style.setProperty("position", "absolute"), t.style.setProperty("transform", "translate(-9999px, -9999px)"), document.documentElement.appendChild(t);
  var i = t.scrollWidth;
  return document.documentElement.removeChild(t), i;
}
const Nn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  closest: Ca,
  estimateScrollWidth: Aa,
  matches: Vr
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
var Sa = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  BG_FOCUSED: "mdc-ripple-upgraded--background-focused",
  FG_ACTIVATION: "mdc-ripple-upgraded--foreground-activation",
  FG_DEACTIVATION: "mdc-ripple-upgraded--foreground-deactivation",
  ROOT: "mdc-ripple-upgraded",
  UNBOUNDED: "mdc-ripple-upgraded--unbounded"
}, Ia = {
  VAR_FG_SCALE: "--mdc-ripple-fg-scale",
  VAR_FG_SIZE: "--mdc-ripple-fg-size",
  VAR_FG_TRANSLATE_END: "--mdc-ripple-fg-translate-end",
  VAR_FG_TRANSLATE_START: "--mdc-ripple-fg-translate-start",
  VAR_LEFT: "--mdc-ripple-left",
  VAR_TOP: "--mdc-ripple-top"
}, xn = {
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
var ei = [
  "touchstart",
  "pointerdown",
  "mousedown",
  "keydown"
], ti = [
  "touchend",
  "pointerup",
  "mouseup",
  "contextmenu"
], ln = [], Ea = (
  /** @class */
  function(n) {
    et(e, n);
    function e(t) {
      var i = n.call(this, Le(Le({}, e.defaultAdapter), t)) || this;
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
        return Sa;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Ia;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return xn;
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
      var t = this, i = this.supportsPressRipple();
      if (this.registerRootHandlers(i), i) {
        var r = e.cssClasses, l = r.ROOT, o = r.UNBOUNDED;
        requestAnimationFrame(function() {
          t.adapter.addClass(l), t.adapter.isUnbounded() && (t.adapter.addClass(o), t.layoutInternal());
        });
      }
    }, e.prototype.destroy = function() {
      var t = this;
      if (this.supportsPressRipple()) {
        this.activationTimer && (clearTimeout(this.activationTimer), this.activationTimer = 0, this.adapter.removeClass(e.cssClasses.FG_ACTIVATION)), this.fgDeactivationRemovalTimer && (clearTimeout(this.fgDeactivationRemovalTimer), this.fgDeactivationRemovalTimer = 0, this.adapter.removeClass(e.cssClasses.FG_DEACTIVATION));
        var i = e.cssClasses, r = i.ROOT, l = i.UNBOUNDED;
        requestAnimationFrame(function() {
          t.adapter.removeClass(r), t.adapter.removeClass(l), t.removeCssVars();
        });
      }
      this.deregisterRootHandlers(), this.deregisterDeactivationHandlers();
    }, e.prototype.activate = function(t) {
      this.activateImpl(t);
    }, e.prototype.deactivate = function() {
      this.deactivateImpl();
    }, e.prototype.layout = function() {
      var t = this;
      this.layoutFrame && cancelAnimationFrame(this.layoutFrame), this.layoutFrame = requestAnimationFrame(function() {
        t.layoutInternal(), t.layoutFrame = 0;
      });
    }, e.prototype.setUnbounded = function(t) {
      var i = e.cssClasses.UNBOUNDED;
      t ? this.adapter.addClass(i) : this.adapter.removeClass(i);
    }, e.prototype.handleFocus = function() {
      var t = this;
      requestAnimationFrame(function() {
        return t.adapter.addClass(e.cssClasses.BG_FOCUSED);
      });
    }, e.prototype.handleBlur = function() {
      var t = this;
      requestAnimationFrame(function() {
        return t.adapter.removeClass(e.cssClasses.BG_FOCUSED);
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
    }, e.prototype.registerRootHandlers = function(t) {
      var i, r;
      if (t) {
        try {
          for (var l = ze(ei), o = l.next(); !o.done; o = l.next()) {
            var a = o.value;
            this.adapter.registerInteractionHandler(a, this.activateHandler);
          }
        } catch (s) {
          i = { error: s };
        } finally {
          try {
            o && !o.done && (r = l.return) && r.call(l);
          } finally {
            if (i)
              throw i.error;
          }
        }
        this.adapter.isUnbounded() && this.adapter.registerResizeHandler(this.resizeHandler);
      }
      this.adapter.registerInteractionHandler("focus", this.focusHandler), this.adapter.registerInteractionHandler("blur", this.blurHandler);
    }, e.prototype.registerDeactivationHandlers = function(t) {
      var i, r;
      if (t.type === "keydown")
        this.adapter.registerInteractionHandler("keyup", this.deactivateHandler);
      else
        try {
          for (var l = ze(ti), o = l.next(); !o.done; o = l.next()) {
            var a = o.value;
            this.adapter.registerDocumentInteractionHandler(a, this.deactivateHandler);
          }
        } catch (s) {
          i = { error: s };
        } finally {
          try {
            o && !o.done && (r = l.return) && r.call(l);
          } finally {
            if (i)
              throw i.error;
          }
        }
    }, e.prototype.deregisterRootHandlers = function() {
      var t, i;
      try {
        for (var r = ze(ei), l = r.next(); !l.done; l = r.next()) {
          var o = l.value;
          this.adapter.deregisterInteractionHandler(o, this.activateHandler);
        }
      } catch (a) {
        t = { error: a };
      } finally {
        try {
          l && !l.done && (i = r.return) && i.call(r);
        } finally {
          if (t)
            throw t.error;
        }
      }
      this.adapter.deregisterInteractionHandler("focus", this.focusHandler), this.adapter.deregisterInteractionHandler("blur", this.blurHandler), this.adapter.isUnbounded() && this.adapter.deregisterResizeHandler(this.resizeHandler);
    }, e.prototype.deregisterDeactivationHandlers = function() {
      var t, i;
      this.adapter.deregisterInteractionHandler("keyup", this.deactivateHandler);
      try {
        for (var r = ze(ti), l = r.next(); !l.done; l = r.next()) {
          var o = l.value;
          this.adapter.deregisterDocumentInteractionHandler(o, this.deactivateHandler);
        }
      } catch (a) {
        t = { error: a };
      } finally {
        try {
          l && !l.done && (i = r.return) && i.call(r);
        } finally {
          if (t)
            throw t.error;
        }
      }
    }, e.prototype.removeCssVars = function() {
      var t = this, i = e.strings, r = Object.keys(i);
      r.forEach(function(l) {
        l.indexOf("VAR_") === 0 && t.adapter.updateCssVariable(i[l], null);
      });
    }, e.prototype.activateImpl = function(t) {
      var i = this;
      if (!this.adapter.isSurfaceDisabled()) {
        var r = this.activationState;
        if (!r.isActivated) {
          var l = this.previousActivationEvent, o = l && t !== void 0 && l.type !== t.type;
          if (!o) {
            r.isActivated = !0, r.isProgrammatic = t === void 0, r.activationEvent = t, r.wasActivatedByPointer = r.isProgrammatic ? !1 : t !== void 0 && (t.type === "mousedown" || t.type === "touchstart" || t.type === "pointerdown");
            var a = t !== void 0 && ln.length > 0 && ln.some(function(s) {
              return i.adapter.containsEventTarget(s);
            });
            if (a) {
              this.resetActivationState();
              return;
            }
            t !== void 0 && (ln.push(t.target), this.registerDeactivationHandlers(t)), r.wasElementMadeActive = this.checkElementMadeActive(t), r.wasElementMadeActive && this.animateActivation(), requestAnimationFrame(function() {
              ln = [], !r.wasElementMadeActive && t !== void 0 && (t.key === " " || t.keyCode === 32) && (r.wasElementMadeActive = i.checkElementMadeActive(t), r.wasElementMadeActive && i.animateActivation()), r.wasElementMadeActive || (i.activationState = i.defaultActivationState());
            });
          }
        }
      }
    }, e.prototype.checkElementMadeActive = function(t) {
      return t !== void 0 && t.type === "keydown" ? this.adapter.isSurfaceActive() : !0;
    }, e.prototype.animateActivation = function() {
      var t = this, i = e.strings, r = i.VAR_FG_TRANSLATE_START, l = i.VAR_FG_TRANSLATE_END, o = e.cssClasses, a = o.FG_DEACTIVATION, s = o.FG_ACTIVATION, u = e.numbers.DEACTIVATION_TIMEOUT_MS;
      this.layoutInternal();
      var f = "", c = "";
      if (!this.adapter.isUnbounded()) {
        var d = this.getFgTranslationCoordinates(), p = d.startPoint, b = d.endPoint;
        f = p.x + "px, " + p.y + "px", c = b.x + "px, " + b.y + "px";
      }
      this.adapter.updateCssVariable(r, f), this.adapter.updateCssVariable(l, c), clearTimeout(this.activationTimer), clearTimeout(this.fgDeactivationRemovalTimer), this.rmBoundedActivationClasses(), this.adapter.removeClass(a), this.adapter.computeBoundingRect(), this.adapter.addClass(s), this.activationTimer = setTimeout(function() {
        t.activationTimerCallback();
      }, u);
    }, e.prototype.getFgTranslationCoordinates = function() {
      var t = this.activationState, i = t.activationEvent, r = t.wasActivatedByPointer, l;
      r ? l = pa(i, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect()) : l = {
        x: this.frame.width / 2,
        y: this.frame.height / 2
      }, l = {
        x: l.x - this.initialSize / 2,
        y: l.y - this.initialSize / 2
      };
      var o = {
        x: this.frame.width / 2 - this.initialSize / 2,
        y: this.frame.height / 2 - this.initialSize / 2
      };
      return { startPoint: l, endPoint: o };
    }, e.prototype.runDeactivationUXLogicIfReady = function() {
      var t = this, i = e.cssClasses.FG_DEACTIVATION, r = this.activationState, l = r.hasDeactivationUXRun, o = r.isActivated, a = l || !o;
      a && this.activationAnimationHasEnded && (this.rmBoundedActivationClasses(), this.adapter.addClass(i), this.fgDeactivationRemovalTimer = setTimeout(function() {
        t.adapter.removeClass(i);
      }, xn.FG_DEACTIVATION_MS));
    }, e.prototype.rmBoundedActivationClasses = function() {
      var t = e.cssClasses.FG_ACTIVATION;
      this.adapter.removeClass(t), this.activationAnimationHasEnded = !1, this.adapter.computeBoundingRect();
    }, e.prototype.resetActivationState = function() {
      var t = this;
      this.previousActivationEvent = this.activationState.activationEvent, this.activationState = this.defaultActivationState(), setTimeout(function() {
        return t.previousActivationEvent = void 0;
      }, e.numbers.TAP_DELAY_MS);
    }, e.prototype.deactivateImpl = function() {
      var t = this, i = this.activationState;
      if (i.isActivated) {
        var r = Le({}, i);
        i.isProgrammatic ? (requestAnimationFrame(function() {
          t.animateDeactivation(r);
        }), this.resetActivationState()) : (this.deregisterDeactivationHandlers(), requestAnimationFrame(function() {
          t.activationState.hasDeactivationUXRun = !0, t.animateDeactivation(r), t.resetActivationState();
        }));
      }
    }, e.prototype.animateDeactivation = function(t) {
      var i = t.wasActivatedByPointer, r = t.wasElementMadeActive;
      (i || r) && this.runDeactivationUXLogicIfReady();
    }, e.prototype.layoutInternal = function() {
      var t = this;
      this.frame = this.adapter.computeBoundingRect();
      var i = Math.max(this.frame.height, this.frame.width), r = function() {
        var o = Math.sqrt(Math.pow(t.frame.width, 2) + Math.pow(t.frame.height, 2));
        return o + e.numbers.PADDING;
      };
      this.maxRadius = this.adapter.isUnbounded() ? i : r();
      var l = Math.floor(i * e.numbers.INITIAL_ORIGIN_SCALE);
      this.adapter.isUnbounded() && l % 2 !== 0 ? this.initialSize = l - 1 : this.initialSize = l, this.fgScale = "" + this.maxRadius / this.initialSize, this.updateLayoutCssVars();
    }, e.prototype.updateLayoutCssVars = function() {
      var t = e.strings, i = t.VAR_FG_SIZE, r = t.VAR_LEFT, l = t.VAR_TOP, o = t.VAR_FG_SCALE;
      this.adapter.updateCssVariable(i, this.initialSize + "px"), this.adapter.updateCssVariable(o, this.fgScale), this.adapter.isUnbounded() && (this.unboundedCoords = {
        left: Math.round(this.frame.width / 2 - this.initialSize / 2),
        top: Math.round(this.frame.height / 2 - this.initialSize / 2)
      }, this.adapter.updateCssVariable(r, this.unboundedCoords.left + "px"), this.adapter.updateCssVariable(l, this.unboundedCoords.top + "px"));
    }, e;
  }(ct)
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
var vn = "mdc-dom-focus-sentinel", La = (
  /** @class */
  function() {
    function n(e, t) {
      t === void 0 && (t = {}), this.root = e, this.options = t, this.elFocusedBeforeTrapFocus = null;
    }
    return n.prototype.trapFocus = function() {
      var e = this.getFocusableElements(this.root);
      if (e.length === 0)
        throw new Error("FocusTrap: Element must have at least one focusable child.");
      this.elFocusedBeforeTrapFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null, this.wrapTabFocus(this.root), this.options.skipInitialFocus || this.focusInitialElement(e, this.options.initialFocusEl);
    }, n.prototype.releaseFocus = function() {
      [].slice.call(this.root.querySelectorAll("." + vn)).forEach(function(e) {
        e.parentElement.removeChild(e);
      }), !this.options.skipRestoreFocus && this.elFocusedBeforeTrapFocus && this.elFocusedBeforeTrapFocus.focus();
    }, n.prototype.wrapTabFocus = function(e) {
      var t = this, i = this.createSentinel(), r = this.createSentinel();
      i.addEventListener("focus", function() {
        var l = t.getFocusableElements(e);
        l.length > 0 && l[l.length - 1].focus();
      }), r.addEventListener("focus", function() {
        var l = t.getFocusableElements(e);
        l.length > 0 && l[0].focus();
      }), e.insertBefore(i, e.children[0]), e.appendChild(r);
    }, n.prototype.focusInitialElement = function(e, t) {
      var i = 0;
      t && (i = Math.max(e.indexOf(t), 0)), e[i].focus();
    }, n.prototype.getFocusableElements = function(e) {
      var t = [].slice.call(e.querySelectorAll("[autofocus], [tabindex], a, input, textarea, select, button"));
      return t.filter(function(i) {
        var r = i.getAttribute("aria-disabled") === "true" || i.getAttribute("disabled") != null || i.getAttribute("hidden") != null || i.getAttribute("aria-hidden") === "true", l = i.tabIndex >= 0 && i.getBoundingClientRect().width > 0 && !i.classList.contains(vn) && !r, o = !1;
        if (l) {
          var a = getComputedStyle(i);
          o = a.display === "none" || a.visibility === "hidden";
        }
        return l && !o;
      });
    }, n.prototype.createSentinel = function() {
      var e = document.createElement("div");
      return e.setAttribute("tabindex", "0"), e.setAttribute("aria-hidden", "true"), e.classList.add(vn), e;
    }, n;
  }()
);
const ka = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  FocusTrap: La
}, Symbol.toStringTag, { value: "Module" })), { applyPassive: an } = qr, { matches: Ra } = Nn;
function At(n, { ripple: e = !0, surface: t = !1, unbounded: i = !1, disabled: r = !1, color: l, active: o, rippleElement: a, eventTarget: s, activeTarget: u, addClass: f = (b) => n.classList.add(b), removeClass: c = (b) => n.classList.remove(b), addStyle: d = (b, _) => n.style.setProperty(b, _), initPromise: p = Promise.resolve() } = {}) {
  let b, _ = Oe("SMUI:addLayoutListener"), g, C = o, v = s, w = u;
  function A() {
    t ? (f("mdc-ripple-surface"), l === "primary" ? (f("smui-ripple-surface--primary"), c("smui-ripple-surface--secondary")) : l === "secondary" ? (c("smui-ripple-surface--primary"), f("smui-ripple-surface--secondary")) : (c("smui-ripple-surface--primary"), c("smui-ripple-surface--secondary"))) : (c("mdc-ripple-surface"), c("smui-ripple-surface--primary"), c("smui-ripple-surface--secondary")), b && C !== o && (C = o, o ? b.activate() : o === !1 && b.deactivate()), e && !b ? (b = new Ea({
      addClass: f,
      browserSupportsCssVars: () => ga(window),
      computeBoundingRect: () => (a || n).getBoundingClientRect(),
      containsEventTarget: (P) => n.contains(P),
      deregisterDocumentInteractionHandler: (P, m) => document.documentElement.removeEventListener(P, m, an()),
      deregisterInteractionHandler: (P, m) => (s || n).removeEventListener(P, m, an()),
      deregisterResizeHandler: (P) => window.removeEventListener("resize", P),
      getWindowPageOffset: () => ({
        x: window.pageXOffset,
        y: window.pageYOffset
      }),
      isSurfaceActive: () => o ?? Ra(u || n, ":active"),
      isSurfaceDisabled: () => !!r,
      isUnbounded: () => !!i,
      registerDocumentInteractionHandler: (P, m) => document.documentElement.addEventListener(P, m, an()),
      registerInteractionHandler: (P, m) => (s || n).addEventListener(P, m, an()),
      registerResizeHandler: (P) => window.addEventListener("resize", P),
      removeClass: c,
      updateCssVariable: d
    }), p.then(() => {
      b && (b.init(), b.setUnbounded(i));
    })) : b && !e && p.then(() => {
      b && (b.destroy(), b = void 0);
    }), b && (v !== s || w !== u) && (v = s, w = u, b.destroy(), requestAnimationFrame(() => {
      b && (b.init(), b.setUnbounded(i));
    })), !e && i && f("mdc-ripple-upgraded--unbounded");
  }
  A(), _ && (g = _(O));
  function O() {
    b && b.layout();
  }
  return {
    update(P) {
      ({
        ripple: e,
        surface: t,
        unbounded: i,
        disabled: r,
        color: l,
        active: o,
        rippleElement: a,
        eventTarget: s,
        activeTarget: u,
        addClass: f,
        removeClass: c,
        addStyle: d,
        initPromise: p
      } = Object.assign({ ripple: !0, surface: !1, unbounded: !1, disabled: !1, color: void 0, active: void 0, rippleElement: void 0, eventTarget: void 0, activeTarget: void 0, addClass: (m) => n.classList.add(m), removeClass: (m) => n.classList.remove(m), addStyle: (m, R) => n.style.setProperty(m, R), initPromise: Promise.resolve() }, P)), A();
    },
    destroy() {
      b && (b.destroy(), b = void 0, c("mdc-ripple-surface"), c("smui-ripple-surface--primary"), c("smui-ripple-surface--secondary")), g && g();
    }
  };
}
function wa(n) {
  let e = (
    /*tag*/
    n[1]
  ), t, i, r = (
    /*tag*/
    n[1] && yn(n)
  );
  return {
    c() {
      r && r.c(), t = Ee();
    },
    m(l, o) {
      r && r.m(l, o), F(l, t, o), i = !0;
    },
    p(l, o) {
      /*tag*/
      l[1] ? e ? ae(
        e,
        /*tag*/
        l[1]
      ) ? (r.d(1), r = yn(l), e = /*tag*/
      l[1], r.c(), r.m(t.parentNode, t)) : r.p(l, o) : (r = yn(l), e = /*tag*/
      l[1], r.c(), r.m(t.parentNode, t)) : e && (r.d(1), r = null, e = /*tag*/
      l[1]);
    },
    i(l) {
      i || (S(r, l), i = !0);
    },
    o(l) {
      L(r, l), i = !1;
    },
    d(l) {
      l && M(t), r && r.d(l);
    }
  };
}
function Oa(n) {
  let e = (
    /*tag*/
    n[1]
  ), t, i = (
    /*tag*/
    n[1] && Cn(n)
  );
  return {
    c() {
      i && i.c(), t = Ee();
    },
    m(r, l) {
      i && i.m(r, l), F(r, t, l);
    },
    p(r, l) {
      /*tag*/
      r[1] ? e ? ae(
        e,
        /*tag*/
        r[1]
      ) ? (i.d(1), i = Cn(r), e = /*tag*/
      r[1], i.c(), i.m(t.parentNode, t)) : i.p(r, l) : (i = Cn(r), e = /*tag*/
      r[1], i.c(), i.m(t.parentNode, t)) : e && (i.d(1), i = null, e = /*tag*/
      r[1]);
    },
    i: Ie,
    o: Ie,
    d(r) {
      r && M(t), i && i.d(r);
    }
  };
}
function Da(n) {
  let e, t, i, r, l;
  const o = (
    /*#slots*/
    n[8].default
  ), a = ne(
    o,
    n,
    /*$$scope*/
    n[7],
    null
  );
  let s = [
    /*$$restProps*/
    n[5]
  ], u = {};
  for (let f = 0; f < s.length; f += 1)
    u = V(u, s[f]);
  return {
    c() {
      e = Te("svg"), a && a.c(), Qn(e, u);
    },
    m(f, c) {
      F(f, e, c), a && a.m(e, null), n[9](e), i = !0, r || (l = [
        ee(t = De.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        ee(
          /*forwardEvents*/
          n[4].call(null, e)
        )
      ], r = !0);
    },
    p(f, c) {
      a && a.p && (!i || c & /*$$scope*/
      128) && re(
        a,
        o,
        f,
        /*$$scope*/
        f[7],
        i ? ie(
          o,
          /*$$scope*/
          f[7],
          c,
          null
        ) : le(
          /*$$scope*/
          f[7]
        ),
        null
      ), Qn(e, u = fe(s, [c & /*$$restProps*/
      32 && /*$$restProps*/
      f[5]])), t && he(t.update) && c & /*use*/
      1 && t.update.call(
        null,
        /*use*/
        f[0]
      );
    },
    i(f) {
      i || (S(a, f), i = !0);
    },
    o(f) {
      L(a, f), i = !1;
    },
    d(f) {
      f && M(e), a && a.d(f), n[9](null), r = !1, Ce(l);
    }
  };
}
function yn(n) {
  let e, t, i, r, l;
  const o = (
    /*#slots*/
    n[8].default
  ), a = ne(
    o,
    n,
    /*$$scope*/
    n[7],
    null
  );
  let s = [
    /*$$restProps*/
    n[5]
  ], u = {};
  for (let f = 0; f < s.length; f += 1)
    u = V(u, s[f]);
  return {
    c() {
      e = Z(
        /*tag*/
        n[1]
      ), a && a.c(), fn(
        /*tag*/
        n[1]
      )(e, u);
    },
    m(f, c) {
      F(f, e, c), a && a.m(e, null), n[11](e), i = !0, r || (l = [
        ee(t = De.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        ee(
          /*forwardEvents*/
          n[4].call(null, e)
        )
      ], r = !0);
    },
    p(f, c) {
      a && a.p && (!i || c & /*$$scope*/
      128) && re(
        a,
        o,
        f,
        /*$$scope*/
        f[7],
        i ? ie(
          o,
          /*$$scope*/
          f[7],
          c,
          null
        ) : le(
          /*$$scope*/
          f[7]
        ),
        null
      ), fn(
        /*tag*/
        f[1]
      )(e, u = fe(s, [c & /*$$restProps*/
      32 && /*$$restProps*/
      f[5]])), t && he(t.update) && c & /*use*/
      1 && t.update.call(
        null,
        /*use*/
        f[0]
      );
    },
    i(f) {
      i || (S(a, f), i = !0);
    },
    o(f) {
      L(a, f), i = !1;
    },
    d(f) {
      f && M(e), a && a.d(f), n[11](null), r = !1, Ce(l);
    }
  };
}
function Cn(n) {
  let e, t, i, r, l = [
    /*$$restProps*/
    n[5]
  ], o = {};
  for (let a = 0; a < l.length; a += 1)
    o = V(o, l[a]);
  return {
    c() {
      e = Z(
        /*tag*/
        n[1]
      ), fn(
        /*tag*/
        n[1]
      )(e, o);
    },
    m(a, s) {
      F(a, e, s), n[10](e), i || (r = [
        ee(t = De.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        ee(
          /*forwardEvents*/
          n[4].call(null, e)
        )
      ], i = !0);
    },
    p(a, s) {
      fn(
        /*tag*/
        a[1]
      )(e, o = fe(l, [s & /*$$restProps*/
      32 && /*$$restProps*/
      a[5]])), t && he(t.update) && s & /*use*/
      1 && t.update.call(
        null,
        /*use*/
        a[0]
      );
    },
    d(a) {
      a && M(e), n[10](null), i = !1, Ce(r);
    }
  };
}
function Ta(n) {
  let e, t, i, r;
  const l = [Da, Oa, wa], o = [];
  function a(s, u) {
    return (
      /*tag*/
      s[1] === "svg" ? 0 : (
        /*selfClosing*/
        s[3] ? 1 : 2
      )
    );
  }
  return e = a(n), t = o[e] = l[e](n), {
    c() {
      t.c(), i = Ee();
    },
    m(s, u) {
      o[e].m(s, u), F(s, i, u), r = !0;
    },
    p(s, [u]) {
      let f = e;
      e = a(s), e === f ? o[e].p(s, u) : (pe(), L(o[f], 1, 1, () => {
        o[f] = null;
      }), _e(), t = o[e], t ? t.p(s, u) : (t = o[e] = l[e](s), t.c()), S(t, 1), t.m(i.parentNode, i));
    },
    i(s) {
      r || (S(t), r = !0);
    },
    o(s) {
      L(t), r = !1;
    },
    d(s) {
      s && M(i), o[e].d(s);
    }
  };
}
function Ha(n, e, t) {
  let i;
  const r = ["use", "tag", "getElement"];
  let l = oe(e, r), { $$slots: o = {}, $$scope: a } = e, { use: s = [] } = e, { tag: u } = e;
  const f = Pe(Re());
  let c;
  function d() {
    return c;
  }
  function p(g) {
    x[g ? "unshift" : "push"](() => {
      c = g, t(2, c);
    });
  }
  function b(g) {
    x[g ? "unshift" : "push"](() => {
      c = g, t(2, c);
    });
  }
  function _(g) {
    x[g ? "unshift" : "push"](() => {
      c = g, t(2, c);
    });
  }
  return n.$$set = (g) => {
    e = V(V({}, e), Fe(g)), t(5, l = oe(e, r)), "use" in g && t(0, s = g.use), "tag" in g && t(1, u = g.tag), "$$scope" in g && t(7, a = g.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty & /*tag*/
    2 && t(3, i = [
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
    l,
    d,
    a,
    o,
    p,
    b,
    _
  ];
}
class Et extends de {
  constructor(e) {
    super(), ce(this, e, Ha, Ta, ae, { use: 0, tag: 1, getElement: 6 });
  }
  get getElement() {
    return this.$$.ctx[6];
  }
}
const Pt = [];
function ut(n, e = Ie) {
  let t;
  const i = /* @__PURE__ */ new Set();
  function r(a) {
    if (ae(n, a) && (n = a, t)) {
      const s = !Pt.length;
      for (const u of i)
        u[1](), Pt.push(u, n);
      if (s) {
        for (let u = 0; u < Pt.length; u += 2)
          Pt[u][0](Pt[u + 1]);
        Pt.length = 0;
      }
    }
  }
  function l(a) {
    r(a(n));
  }
  function o(a, s = Ie) {
    const u = [a, s];
    return i.add(u), i.size === 1 && (t = e(r, l) || Ie), a(n), () => {
      i.delete(u), i.size === 0 && t && (t(), t = null);
    };
  }
  return { set: r, update: l, subscribe: o };
}
function Ma(n) {
  let e;
  const t = (
    /*#slots*/
    n[4].default
  ), i = ne(
    t,
    n,
    /*$$scope*/
    n[3],
    null
  );
  return {
    c() {
      i && i.c();
    },
    m(r, l) {
      i && i.m(r, l), e = !0;
    },
    p(r, [l]) {
      i && i.p && (!e || l & /*$$scope*/
      8) && re(
        i,
        t,
        r,
        /*$$scope*/
        r[3],
        e ? ie(
          t,
          /*$$scope*/
          r[3],
          l,
          null
        ) : le(
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
      L(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function Fa(n, e, t) {
  let i, { $$slots: r = {}, $$scope: l } = e, { key: o } = e, { value: a } = e;
  const s = ut(a);
  return xe(n, s, (u) => t(5, i = u)), we(o, s), Wt(() => {
    s.set(void 0);
  }), n.$$set = (u) => {
    "key" in u && t(1, o = u.key), "value" in u && t(2, a = u.value), "$$scope" in u && t(3, l = u.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty & /*value*/
    4 && Ct(s, i = a, i);
  }, [s, o, a, l, r];
}
class dn extends de {
  constructor(e) {
    super(), ce(this, e, Fa, Ma, ae, { key: 1, value: 2 });
  }
}
function Ua(n) {
  let e;
  const t = (
    /*#slots*/
    n[10].default
  ), i = ne(
    t,
    n,
    /*$$scope*/
    n[12],
    null
  );
  return {
    c() {
      i && i.c();
    },
    m(r, l) {
      i && i.m(r, l), e = !0;
    },
    p(r, l) {
      i && i.p && (!e || l & /*$$scope*/
      4096) && re(
        i,
        t,
        r,
        /*$$scope*/
        r[12],
        e ? ie(
          t,
          /*$$scope*/
          r[12],
          l,
          null
        ) : le(
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
      L(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function Pa(n) {
  let e, t, i;
  const r = [
    { tag: (
      /*tag*/
      n[3]
    ) },
    {
      use: [
        /*forwardEvents*/
        n[5],
        .../*use*/
        n[0]
      ]
    },
    {
      class: Q({
        [
          /*className*/
          n[1]
        ]: !0,
        "mdc-button__label": (
          /*context*/
          n[6] === "button"
        ),
        "mdc-fab__label": (
          /*context*/
          n[6] === "fab"
        ),
        "mdc-tab__text-label": (
          /*context*/
          n[6] === "tab"
        ),
        "mdc-image-list__label": (
          /*context*/
          n[6] === "image-list"
        ),
        "mdc-snackbar__label": (
          /*context*/
          n[6] === "snackbar"
        ),
        "mdc-banner__text": (
          /*context*/
          n[6] === "banner"
        ),
        "mdc-segmented-button__label": (
          /*context*/
          n[6] === "segmented-button"
        ),
        "mdc-data-table__pagination-rows-per-page-label": (
          /*context*/
          n[6] === "data-table:pagination"
        ),
        "mdc-data-table__header-cell-label": (
          /*context*/
          n[6] === "data-table:sortable-header-cell"
        )
      })
    },
    /*context*/
    n[6] === "snackbar" ? { "aria-atomic": "false" } : {},
    { tabindex: (
      /*tabindex*/
      n[7]
    ) },
    /*$$restProps*/
    n[8]
  ];
  var l = (
    /*component*/
    n[2]
  );
  function o(a, s) {
    let u = {
      $$slots: { default: [Ua] },
      $$scope: { ctx: a }
    };
    for (let f = 0; f < r.length; f += 1)
      u = V(u, r[f]);
    return s !== void 0 && s & /*tag, forwardEvents, use, className, context, tabindex, $$restProps*/
    491 && (u = V(u, fe(r, [
      s & /*tag*/
      8 && { tag: (
        /*tag*/
        a[3]
      ) },
      s & /*forwardEvents, use*/
      33 && {
        use: [
          /*forwardEvents*/
          a[5],
          .../*use*/
          a[0]
        ]
      },
      s & /*className, context*/
      66 && {
        class: Q({
          [
            /*className*/
            a[1]
          ]: !0,
          "mdc-button__label": (
            /*context*/
            a[6] === "button"
          ),
          "mdc-fab__label": (
            /*context*/
            a[6] === "fab"
          ),
          "mdc-tab__text-label": (
            /*context*/
            a[6] === "tab"
          ),
          "mdc-image-list__label": (
            /*context*/
            a[6] === "image-list"
          ),
          "mdc-snackbar__label": (
            /*context*/
            a[6] === "snackbar"
          ),
          "mdc-banner__text": (
            /*context*/
            a[6] === "banner"
          ),
          "mdc-segmented-button__label": (
            /*context*/
            a[6] === "segmented-button"
          ),
          "mdc-data-table__pagination-rows-per-page-label": (
            /*context*/
            a[6] === "data-table:pagination"
          ),
          "mdc-data-table__header-cell-label": (
            /*context*/
            a[6] === "data-table:sortable-header-cell"
          )
        })
      },
      s & /*context*/
      64 && ye(
        /*context*/
        a[6] === "snackbar" ? { "aria-atomic": "false" } : {}
      ),
      s & /*tabindex*/
      128 && { tabindex: (
        /*tabindex*/
        a[7]
      ) },
      s & /*$$restProps*/
      256 && ye(
        /*$$restProps*/
        a[8]
      )
    ]))), { props: u };
  }
  return l && (e = ft(l, o(n)), n[11](e)), {
    c() {
      e && j(e.$$.fragment), t = Ee();
    },
    m(a, s) {
      e && B(e, a, s), F(a, t, s), i = !0;
    },
    p(a, [s]) {
      if (s & /*component*/
      4 && l !== (l = /*component*/
      a[2])) {
        if (e) {
          pe();
          const u = e;
          L(u.$$.fragment, 1, 0, () => {
            N(u, 1);
          }), _e();
        }
        l ? (e = ft(l, o(a, s)), a[11](e), j(e.$$.fragment), S(e.$$.fragment, 1), B(e, t.parentNode, t)) : e = null;
      } else if (l) {
        const u = s & /*tag, forwardEvents, use, className, context, tabindex, $$restProps*/
        491 ? fe(r, [
          s & /*tag*/
          8 && { tag: (
            /*tag*/
            a[3]
          ) },
          s & /*forwardEvents, use*/
          33 && {
            use: [
              /*forwardEvents*/
              a[5],
              .../*use*/
              a[0]
            ]
          },
          s & /*className, context*/
          66 && {
            class: Q({
              [
                /*className*/
                a[1]
              ]: !0,
              "mdc-button__label": (
                /*context*/
                a[6] === "button"
              ),
              "mdc-fab__label": (
                /*context*/
                a[6] === "fab"
              ),
              "mdc-tab__text-label": (
                /*context*/
                a[6] === "tab"
              ),
              "mdc-image-list__label": (
                /*context*/
                a[6] === "image-list"
              ),
              "mdc-snackbar__label": (
                /*context*/
                a[6] === "snackbar"
              ),
              "mdc-banner__text": (
                /*context*/
                a[6] === "banner"
              ),
              "mdc-segmented-button__label": (
                /*context*/
                a[6] === "segmented-button"
              ),
              "mdc-data-table__pagination-rows-per-page-label": (
                /*context*/
                a[6] === "data-table:pagination"
              ),
              "mdc-data-table__header-cell-label": (
                /*context*/
                a[6] === "data-table:sortable-header-cell"
              )
            })
          },
          s & /*context*/
          64 && ye(
            /*context*/
            a[6] === "snackbar" ? { "aria-atomic": "false" } : {}
          ),
          s & /*tabindex*/
          128 && { tabindex: (
            /*tabindex*/
            a[7]
          ) },
          s & /*$$restProps*/
          256 && ye(
            /*$$restProps*/
            a[8]
          )
        ]) : {};
        s & /*$$scope*/
        4096 && (u.$$scope = { dirty: s, ctx: a }), e.$set(u);
      }
    },
    i(a) {
      i || (e && S(e.$$.fragment, a), i = !0);
    },
    o(a) {
      e && L(e.$$.fragment, a), i = !1;
    },
    d(a) {
      a && M(t), n[11](null), e && N(e, a);
    }
  };
}
function Ba(n, e, t) {
  const i = ["use", "class", "component", "tag", "getElement"];
  let r = oe(e, i), { $$slots: l = {}, $$scope: o } = e;
  const a = Pe(Re());
  let { use: s = [] } = e, { class: u = "" } = e, f, { component: c = Et } = e, { tag: d = c === Et ? "span" : void 0 } = e;
  const p = Oe("SMUI:label:context"), b = Oe("SMUI:label:tabindex");
  function _() {
    return f.getElement();
  }
  function g(C) {
    x[C ? "unshift" : "push"](() => {
      f = C, t(4, f);
    });
  }
  return n.$$set = (C) => {
    e = V(V({}, e), Fe(C)), t(8, r = oe(e, i)), "use" in C && t(0, s = C.use), "class" in C && t(1, u = C.class), "component" in C && t(2, c = C.component), "tag" in C && t(3, d = C.tag), "$$scope" in C && t(12, o = C.$$scope);
  }, [
    s,
    u,
    c,
    d,
    f,
    a,
    p,
    b,
    r,
    _,
    l,
    g,
    o
  ];
}
class Ht extends de {
  constructor(e) {
    super(), ce(this, e, Ba, Pa, ae, {
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
function ni(n) {
  let e;
  return {
    c() {
      e = Z("div"), U(e, "class", "mdc-button__touch");
    },
    m(t, i) {
      F(t, e, i);
    },
    d(t) {
      t && M(e);
    }
  };
}
function Na(n) {
  let e, t, i, r;
  const l = (
    /*#slots*/
    n[28].default
  ), o = ne(
    l,
    n,
    /*$$scope*/
    n[30],
    null
  );
  let a = (
    /*touch*/
    n[6] && ni()
  );
  return {
    c() {
      e = Z("div"), t = Y(), o && o.c(), a && a.c(), i = Ee(), U(e, "class", "mdc-button__ripple");
    },
    m(s, u) {
      F(s, e, u), F(s, t, u), o && o.m(s, u), a && a.m(s, u), F(s, i, u), r = !0;
    },
    p(s, u) {
      o && o.p && (!r || u[0] & /*$$scope*/
      1073741824) && re(
        o,
        l,
        s,
        /*$$scope*/
        s[30],
        r ? ie(
          l,
          /*$$scope*/
          s[30],
          u,
          null
        ) : le(
          /*$$scope*/
          s[30]
        ),
        null
      ), /*touch*/
      s[6] ? a || (a = ni(), a.c(), a.m(i.parentNode, i)) : a && (a.d(1), a = null);
    },
    i(s) {
      r || (S(o, s), r = !0);
    },
    o(s) {
      L(o, s), r = !1;
    },
    d(s) {
      s && (M(e), M(t), M(i)), o && o.d(s), a && a.d(s);
    }
  };
}
function ja(n) {
  let e, t, i;
  const r = [
    { tag: (
      /*tag*/
      n[10]
    ) },
    {
      use: [
        [
          At,
          {
            ripple: (
              /*ripple*/
              n[3]
            ),
            unbounded: !1,
            color: (
              /*color*/
              n[4]
            ),
            disabled: !!/*$$restProps*/
            n[23].disabled,
            addClass: (
              /*addClass*/
              n[19]
            ),
            removeClass: (
              /*removeClass*/
              n[20]
            ),
            addStyle: (
              /*addStyle*/
              n[21]
            )
          }
        ],
        /*forwardEvents*/
        n[17],
        .../*use*/
        n[0]
      ]
    },
    {
      class: Q({
        [
          /*className*/
          n[1]
        ]: !0,
        "mdc-button": !0,
        "mdc-button--raised": (
          /*variant*/
          n[5] === "raised"
        ),
        "mdc-button--unelevated": (
          /*variant*/
          n[5] === "unelevated"
        ),
        "mdc-button--outlined": (
          /*variant*/
          n[5] === "outlined"
        ),
        "smui-button--color-secondary": (
          /*color*/
          n[4] === "secondary"
        ),
        "mdc-button--touch": (
          /*touch*/
          n[6]
        ),
        "mdc-card__action": (
          /*context*/
          n[18] === "card:action"
        ),
        "mdc-card__action--button": (
          /*context*/
          n[18] === "card:action"
        ),
        "mdc-dialog__button": (
          /*context*/
          n[18] === "dialog:action"
        ),
        "mdc-top-app-bar__navigation-icon": (
          /*context*/
          n[18] === "top-app-bar:navigation"
        ),
        "mdc-top-app-bar__action-item": (
          /*context*/
          n[18] === "top-app-bar:action"
        ),
        "mdc-snackbar__action": (
          /*context*/
          n[18] === "snackbar:actions"
        ),
        "mdc-banner__secondary-action": (
          /*context*/
          n[18] === "banner" && /*secondary*/
          n[8]
        ),
        "mdc-banner__primary-action": (
          /*context*/
          n[18] === "banner" && !/*secondary*/
          n[8]
        ),
        "mdc-tooltip__action": (
          /*context*/
          n[18] === "tooltip:rich-actions"
        ),
        .../*internalClasses*/
        n[12]
      })
    },
    {
      style: Object.entries(
        /*internalStyles*/
        n[13]
      ).map(An).concat([
        /*style*/
        n[2]
      ]).join(" ")
    },
    /*actionProp*/
    n[16],
    /*defaultProp*/
    n[15],
    /*secondaryProp*/
    n[14],
    { href: (
      /*href*/
      n[7]
    ) },
    /*$$restProps*/
    n[23]
  ];
  var l = (
    /*component*/
    n[9]
  );
  function o(a, s) {
    let u = {
      $$slots: { default: [Na] },
      $$scope: { ctx: a }
    };
    for (let f = 0; f < r.length; f += 1)
      u = V(u, r[f]);
    return s !== void 0 && s[0] & /*tag, ripple, color, $$restProps, addClass, removeClass, addStyle, forwardEvents, use, className, variant, touch, context, secondary, internalClasses, internalStyles, style, actionProp, defaultProp, secondaryProp, href*/
    12580351 && (u = V(u, fe(r, [
      s[0] & /*tag*/
      1024 && { tag: (
        /*tag*/
        a[10]
      ) },
      s[0] & /*ripple, color, $$restProps, addClass, removeClass, addStyle, forwardEvents, use*/
      12189721 && {
        use: [
          [
            At,
            {
              ripple: (
                /*ripple*/
                a[3]
              ),
              unbounded: !1,
              color: (
                /*color*/
                a[4]
              ),
              disabled: !!/*$$restProps*/
              a[23].disabled,
              addClass: (
                /*addClass*/
                a[19]
              ),
              removeClass: (
                /*removeClass*/
                a[20]
              ),
              addStyle: (
                /*addStyle*/
                a[21]
              )
            }
          ],
          /*forwardEvents*/
          a[17],
          .../*use*/
          a[0]
        ]
      },
      s[0] & /*className, variant, color, touch, context, secondary, internalClasses*/
      266610 && {
        class: Q({
          [
            /*className*/
            a[1]
          ]: !0,
          "mdc-button": !0,
          "mdc-button--raised": (
            /*variant*/
            a[5] === "raised"
          ),
          "mdc-button--unelevated": (
            /*variant*/
            a[5] === "unelevated"
          ),
          "mdc-button--outlined": (
            /*variant*/
            a[5] === "outlined"
          ),
          "smui-button--color-secondary": (
            /*color*/
            a[4] === "secondary"
          ),
          "mdc-button--touch": (
            /*touch*/
            a[6]
          ),
          "mdc-card__action": (
            /*context*/
            a[18] === "card:action"
          ),
          "mdc-card__action--button": (
            /*context*/
            a[18] === "card:action"
          ),
          "mdc-dialog__button": (
            /*context*/
            a[18] === "dialog:action"
          ),
          "mdc-top-app-bar__navigation-icon": (
            /*context*/
            a[18] === "top-app-bar:navigation"
          ),
          "mdc-top-app-bar__action-item": (
            /*context*/
            a[18] === "top-app-bar:action"
          ),
          "mdc-snackbar__action": (
            /*context*/
            a[18] === "snackbar:actions"
          ),
          "mdc-banner__secondary-action": (
            /*context*/
            a[18] === "banner" && /*secondary*/
            a[8]
          ),
          "mdc-banner__primary-action": (
            /*context*/
            a[18] === "banner" && !/*secondary*/
            a[8]
          ),
          "mdc-tooltip__action": (
            /*context*/
            a[18] === "tooltip:rich-actions"
          ),
          .../*internalClasses*/
          a[12]
        })
      },
      s[0] & /*internalStyles, style*/
      8196 && {
        style: Object.entries(
          /*internalStyles*/
          a[13]
        ).map(An).concat([
          /*style*/
          a[2]
        ]).join(" ")
      },
      s[0] & /*actionProp*/
      65536 && ye(
        /*actionProp*/
        a[16]
      ),
      s[0] & /*defaultProp*/
      32768 && ye(
        /*defaultProp*/
        a[15]
      ),
      s[0] & /*secondaryProp*/
      16384 && ye(
        /*secondaryProp*/
        a[14]
      ),
      s[0] & /*href*/
      128 && { href: (
        /*href*/
        a[7]
      ) },
      s[0] & /*$$restProps*/
      8388608 && ye(
        /*$$restProps*/
        a[23]
      )
    ]))), { props: u };
  }
  return l && (e = ft(l, o(n)), n[29](e), e.$on(
    "click",
    /*handleClick*/
    n[22]
  )), {
    c() {
      e && j(e.$$.fragment), t = Ee();
    },
    m(a, s) {
      e && B(e, a, s), F(a, t, s), i = !0;
    },
    p(a, s) {
      if (s[0] & /*component*/
      512 && l !== (l = /*component*/
      a[9])) {
        if (e) {
          pe();
          const u = e;
          L(u.$$.fragment, 1, 0, () => {
            N(u, 1);
          }), _e();
        }
        l ? (e = ft(l, o(a, s)), a[29](e), e.$on(
          "click",
          /*handleClick*/
          a[22]
        ), j(e.$$.fragment), S(e.$$.fragment, 1), B(e, t.parentNode, t)) : e = null;
      } else if (l) {
        const u = s[0] & /*tag, ripple, color, $$restProps, addClass, removeClass, addStyle, forwardEvents, use, className, variant, touch, context, secondary, internalClasses, internalStyles, style, actionProp, defaultProp, secondaryProp, href*/
        12580351 ? fe(r, [
          s[0] & /*tag*/
          1024 && { tag: (
            /*tag*/
            a[10]
          ) },
          s[0] & /*ripple, color, $$restProps, addClass, removeClass, addStyle, forwardEvents, use*/
          12189721 && {
            use: [
              [
                At,
                {
                  ripple: (
                    /*ripple*/
                    a[3]
                  ),
                  unbounded: !1,
                  color: (
                    /*color*/
                    a[4]
                  ),
                  disabled: !!/*$$restProps*/
                  a[23].disabled,
                  addClass: (
                    /*addClass*/
                    a[19]
                  ),
                  removeClass: (
                    /*removeClass*/
                    a[20]
                  ),
                  addStyle: (
                    /*addStyle*/
                    a[21]
                  )
                }
              ],
              /*forwardEvents*/
              a[17],
              .../*use*/
              a[0]
            ]
          },
          s[0] & /*className, variant, color, touch, context, secondary, internalClasses*/
          266610 && {
            class: Q({
              [
                /*className*/
                a[1]
              ]: !0,
              "mdc-button": !0,
              "mdc-button--raised": (
                /*variant*/
                a[5] === "raised"
              ),
              "mdc-button--unelevated": (
                /*variant*/
                a[5] === "unelevated"
              ),
              "mdc-button--outlined": (
                /*variant*/
                a[5] === "outlined"
              ),
              "smui-button--color-secondary": (
                /*color*/
                a[4] === "secondary"
              ),
              "mdc-button--touch": (
                /*touch*/
                a[6]
              ),
              "mdc-card__action": (
                /*context*/
                a[18] === "card:action"
              ),
              "mdc-card__action--button": (
                /*context*/
                a[18] === "card:action"
              ),
              "mdc-dialog__button": (
                /*context*/
                a[18] === "dialog:action"
              ),
              "mdc-top-app-bar__navigation-icon": (
                /*context*/
                a[18] === "top-app-bar:navigation"
              ),
              "mdc-top-app-bar__action-item": (
                /*context*/
                a[18] === "top-app-bar:action"
              ),
              "mdc-snackbar__action": (
                /*context*/
                a[18] === "snackbar:actions"
              ),
              "mdc-banner__secondary-action": (
                /*context*/
                a[18] === "banner" && /*secondary*/
                a[8]
              ),
              "mdc-banner__primary-action": (
                /*context*/
                a[18] === "banner" && !/*secondary*/
                a[8]
              ),
              "mdc-tooltip__action": (
                /*context*/
                a[18] === "tooltip:rich-actions"
              ),
              .../*internalClasses*/
              a[12]
            })
          },
          s[0] & /*internalStyles, style*/
          8196 && {
            style: Object.entries(
              /*internalStyles*/
              a[13]
            ).map(An).concat([
              /*style*/
              a[2]
            ]).join(" ")
          },
          s[0] & /*actionProp*/
          65536 && ye(
            /*actionProp*/
            a[16]
          ),
          s[0] & /*defaultProp*/
          32768 && ye(
            /*defaultProp*/
            a[15]
          ),
          s[0] & /*secondaryProp*/
          16384 && ye(
            /*secondaryProp*/
            a[14]
          ),
          s[0] & /*href*/
          128 && { href: (
            /*href*/
            a[7]
          ) },
          s[0] & /*$$restProps*/
          8388608 && ye(
            /*$$restProps*/
            a[23]
          )
        ]) : {};
        s[0] & /*$$scope, touch*/
        1073741888 && (u.$$scope = { dirty: s, ctx: a }), e.$set(u);
      }
    },
    i(a) {
      i || (e && S(e.$$.fragment, a), i = !0);
    },
    o(a) {
      e && L(e.$$.fragment, a), i = !1;
    },
    d(a) {
      a && M(t), n[29](null), e && N(e, a);
    }
  };
}
const An = ([n, e]) => `${n}: ${e};`;
function qa(n, e, t) {
  let i, r, l;
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
  let a = oe(e, o), { $$slots: s = {}, $$scope: u } = e;
  const f = Pe(Re());
  let { use: c = [] } = e, { class: d = "" } = e, { style: p = "" } = e, { ripple: b = !0 } = e, { color: _ = "primary" } = e, { variant: g = "text" } = e, { touch: C = !1 } = e, { href: v = void 0 } = e, { action: w = "close" } = e, { defaultAction: A = !1 } = e, { secondary: O = !1 } = e, P, m = {}, R = {}, z = Oe("SMUI:button:context"), { component: I = Et } = e, { tag: h = I === Et ? v == null ? "button" : "a" : void 0 } = e, H = a.disabled;
  we("SMUI:label:context", "button"), we("SMUI:icon:context", "button");
  function D(y) {
    m[y] || t(12, m[y] = !0, m);
  }
  function W(y) {
    (!(y in m) || m[y]) && t(12, m[y] = !1, m);
  }
  function se(y, G) {
    R[y] != G && (G === "" || G == null ? (delete R[y], t(13, R)) : t(13, R[y] = G, R));
  }
  function ue() {
    z === "banner" && ge(J(), O ? "SMUIBannerButton:secondaryActionClick" : "SMUIBannerButton:primaryActionClick");
  }
  function J() {
    return P.getElement();
  }
  function T(y) {
    x[y ? "unshift" : "push"](() => {
      P = y, t(11, P);
    });
  }
  return n.$$set = (y) => {
    t(31, e = V(V({}, e), Fe(y))), t(23, a = oe(e, o)), "use" in y && t(0, c = y.use), "class" in y && t(1, d = y.class), "style" in y && t(2, p = y.style), "ripple" in y && t(3, b = y.ripple), "color" in y && t(4, _ = y.color), "variant" in y && t(5, g = y.variant), "touch" in y && t(6, C = y.touch), "href" in y && t(7, v = y.href), "action" in y && t(24, w = y.action), "defaultAction" in y && t(25, A = y.defaultAction), "secondary" in y && t(8, O = y.secondary), "component" in y && t(9, I = y.component), "tag" in y && t(10, h = y.tag), "$$scope" in y && t(30, u = y.$$scope);
  }, n.$$.update = () => {
    if (t(16, i = z === "dialog:action" && w != null ? { "data-mdc-dialog-action": w } : { action: e.action }), t(15, r = z === "dialog:action" && A ? { "data-mdc-dialog-button-default": "" } : { default: e.default }), t(14, l = z === "banner" ? {} : { secondary: e.secondary }), H !== a.disabled) {
      if (P) {
        const y = J();
        "blur" in y && y.blur();
      }
      t(27, H = a.disabled);
    }
  }, e = Fe(e), [
    c,
    d,
    p,
    b,
    _,
    g,
    C,
    v,
    O,
    I,
    h,
    P,
    m,
    R,
    l,
    r,
    i,
    f,
    z,
    D,
    W,
    se,
    ue,
    a,
    w,
    A,
    J,
    H,
    s,
    T,
    u
  ];
}
class Va extends de {
  constructor(e) {
    super(), ce(
      this,
      e,
      qa,
      ja,
      ae,
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
function Ga(n) {
  let e;
  const t = (
    /*#slots*/
    n[4].default
  ), i = ne(
    t,
    n,
    /*$$scope*/
    n[5],
    null
  );
  return {
    c() {
      i && i.c();
    },
    m(r, l) {
      i && i.m(r, l), e = !0;
    },
    p(r, l) {
      i && i.p && (!e || l & /*$$scope*/
      32) && re(
        i,
        t,
        r,
        /*$$scope*/
        r[5],
        e ? ie(
          t,
          /*$$scope*/
          r[5],
          l,
          null
        ) : le(
          /*$$scope*/
          r[5]
        ),
        null
      );
    },
    i(r) {
      e || (S(i, r), e = !0);
    },
    o(r) {
      L(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function za(n) {
  let e, t;
  return e = new Va({
    props: {
      variant: (
        /*variant*/
        n[2]
      ),
      disabled: (
        /*disabled*/
        n[1]
      ),
      style: (
        /*isAbortAction*/
        n[3] ? "background-color: #ff3e00;" : void 0
      ),
      $$slots: { default: [Ga] },
      $$scope: { ctx: n }
    }
  }), e.$on("click", function() {
    he(
      /*callback*/
      n[0]()
    ) && n[0]().apply(this, arguments);
  }), {
    c() {
      j(e.$$.fragment);
    },
    m(i, r) {
      B(e, i, r), t = !0;
    },
    p(i, [r]) {
      n = i;
      const l = {};
      r & /*variant*/
      4 && (l.variant = /*variant*/
      n[2]), r & /*disabled*/
      2 && (l.disabled = /*disabled*/
      n[1]), r & /*isAbortAction*/
      8 && (l.style = /*isAbortAction*/
      n[3] ? "background-color: #ff3e00;" : void 0), r & /*$$scope*/
      32 && (l.$$scope = { dirty: r, ctx: n }), e.$set(l);
    },
    i(i) {
      t || (S(e.$$.fragment, i), t = !0);
    },
    o(i) {
      L(e.$$.fragment, i), t = !1;
    },
    d(i) {
      N(e, i);
    }
  };
}
function Wa(n, e, t) {
  let { $$slots: i = {}, $$scope: r } = e, { callback: l = () => {
  } } = e, { disabled: o = !1 } = e, { variant: a = "default" } = e, { isAbortAction: s = !1 } = e;
  return n.$$set = (u) => {
    "callback" in u && t(0, l = u.callback), "disabled" in u && t(1, o = u.disabled), "variant" in u && t(2, a = u.variant), "isAbortAction" in u && t(3, s = u.isAbortAction), "$$scope" in u && t(5, r = u.$$scope);
  }, [l, o, a, s, i, r];
}
class Tt extends de {
  constructor(e) {
    super(), ce(this, e, Wa, za, ae, {
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
var on = {
  ICON_BUTTON_ON: "mdc-icon-button--on",
  ROOT: "mdc-icon-button"
}, mt = {
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
var Ka = (
  /** @class */
  function(n) {
    et(e, n);
    function e(t) {
      var i = n.call(this, Le(Le({}, e.defaultAdapter), t)) || this;
      return i.hasToggledAriaLabel = !1, i;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return on;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return mt;
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
      var t = this.adapter.getAttr(mt.DATA_ARIA_LABEL_ON), i = this.adapter.getAttr(mt.DATA_ARIA_LABEL_OFF);
      if (t && i) {
        if (this.adapter.getAttr(mt.ARIA_PRESSED) !== null)
          throw new Error("MDCIconButtonToggleFoundation: Button should not set `aria-pressed` if it has a toggled aria label.");
        this.hasToggledAriaLabel = !0;
      } else
        this.adapter.setAttr(mt.ARIA_PRESSED, String(this.isOn()));
    }, e.prototype.handleClick = function() {
      this.toggle(), this.adapter.notifyChange({ isOn: this.isOn() });
    }, e.prototype.isOn = function() {
      return this.adapter.hasClass(on.ICON_BUTTON_ON);
    }, e.prototype.toggle = function(t) {
      if (t === void 0 && (t = !this.isOn()), t ? this.adapter.addClass(on.ICON_BUTTON_ON) : this.adapter.removeClass(on.ICON_BUTTON_ON), this.hasToggledAriaLabel) {
        var i = t ? this.adapter.getAttr(mt.DATA_ARIA_LABEL_ON) : this.adapter.getAttr(mt.DATA_ARIA_LABEL_OFF);
        this.adapter.setAttr(mt.ARIA_LABEL, i || "");
      } else
        this.adapter.setAttr(mt.ARIA_PRESSED, "" + t);
    }, e;
  }(ct)
);
function ii(n) {
  let e;
  return {
    c() {
      e = Z("div"), U(e, "class", "mdc-icon-button__touch");
    },
    m(t, i) {
      F(t, e, i);
    },
    d(t) {
      t && M(e);
    }
  };
}
function Xa(n) {
  let e, t, i, r;
  const l = (
    /*#slots*/
    n[33].default
  ), o = ne(
    l,
    n,
    /*$$scope*/
    n[37],
    null
  );
  let a = (
    /*touch*/
    n[8] && ii()
  );
  return {
    c() {
      e = Z("div"), t = Y(), o && o.c(), a && a.c(), i = Ee(), U(e, "class", "mdc-icon-button__ripple");
    },
    m(s, u) {
      F(s, e, u), F(s, t, u), o && o.m(s, u), a && a.m(s, u), F(s, i, u), r = !0;
    },
    p(s, u) {
      o && o.p && (!r || u[1] & /*$$scope*/
      64) && re(
        o,
        l,
        s,
        /*$$scope*/
        s[37],
        r ? ie(
          l,
          /*$$scope*/
          s[37],
          u,
          null
        ) : le(
          /*$$scope*/
          s[37]
        ),
        null
      ), /*touch*/
      s[8] ? a || (a = ii(), a.c(), a.m(i.parentNode, i)) : a && (a.d(1), a = null);
    },
    i(s) {
      r || (S(o, s), r = !0);
    },
    o(s) {
      L(o, s), r = !1;
    },
    d(s) {
      s && (M(e), M(t), M(i)), o && o.d(s), a && a.d(s);
    }
  };
}
function Za(n) {
  let e, t, i;
  const r = [
    { tag: (
      /*tag*/
      n[14]
    ) },
    {
      use: [
        [
          At,
          {
            ripple: (
              /*ripple*/
              n[4]
            ),
            unbounded: !0,
            color: (
              /*color*/
              n[5]
            ),
            disabled: !!/*$$restProps*/
            n[29].disabled,
            addClass: (
              /*addClass*/
              n[26]
            ),
            removeClass: (
              /*removeClass*/
              n[27]
            ),
            addStyle: (
              /*addStyle*/
              n[28]
            )
          }
        ],
        /*forwardEvents*/
        n[22],
        .../*use*/
        n[1]
      ]
    },
    {
      class: Q({
        [
          /*className*/
          n[2]
        ]: !0,
        "mdc-icon-button": !0,
        "mdc-icon-button--on": !/*isUninitializedValue*/
        n[23](
          /*pressed*/
          n[0]
        ) && /*pressed*/
        n[0],
        "mdc-icon-button--touch": (
          /*touch*/
          n[8]
        ),
        "mdc-icon-button--display-flex": (
          /*displayFlex*/
          n[9]
        ),
        "smui-icon-button--size-button": (
          /*size*/
          n[10] === "button"
        ),
        "smui-icon-button--size-mini": (
          /*size*/
          n[10] === "mini"
        ),
        "mdc-icon-button--reduced-size": (
          /*size*/
          n[10] === "mini" || /*size*/
          n[10] === "button"
        ),
        "mdc-card__action": (
          /*context*/
          n[24] === "card:action"
        ),
        "mdc-card__action--icon": (
          /*context*/
          n[24] === "card:action"
        ),
        "mdc-top-app-bar__navigation-icon": (
          /*context*/
          n[24] === "top-app-bar:navigation"
        ),
        "mdc-top-app-bar__action-item": (
          /*context*/
          n[24] === "top-app-bar:action"
        ),
        "mdc-snackbar__dismiss": (
          /*context*/
          n[24] === "snackbar:actions"
        ),
        "mdc-data-table__pagination-button": (
          /*context*/
          n[24] === "data-table:pagination"
        ),
        "mdc-data-table__sort-icon-button": (
          /*context*/
          n[24] === "data-table:sortable-header-cell"
        ),
        "mdc-dialog__close": (
          /*context*/
          (n[24] === "dialog:header" || /*context*/
          n[24] === "dialog:sheet") && /*action*/
          n[12] === "close"
        ),
        .../*internalClasses*/
        n[18]
      })
    },
    {
      style: Object.entries(
        /*internalStyles*/
        n[19]
      ).map(Sn).concat([
        /*style*/
        n[3]
      ]).join(" ")
    },
    {
      "aria-pressed": /*isUninitializedValue*/ n[23](
        /*pressed*/
        n[0]
      ) ? null : (
        /*pressed*/
        n[0] ? "true" : "false"
      )
    },
    {
      "aria-label": (
        /*pressed*/
        n[0] ? (
          /*ariaLabelOn*/
          n[6]
        ) : (
          /*ariaLabelOff*/
          n[7]
        )
      )
    },
    {
      "data-aria-label-on": (
        /*ariaLabelOn*/
        n[6]
      )
    },
    {
      "data-aria-label-off": (
        /*ariaLabelOff*/
        n[7]
      )
    },
    {
      "aria-describedby": (
        /*ariaDescribedby*/
        n[25]
      )
    },
    { href: (
      /*href*/
      n[11]
    ) },
    /*actionProp*/
    n[21],
    /*internalAttrs*/
    n[20],
    /*$$restProps*/
    n[29]
  ];
  var l = (
    /*component*/
    n[13]
  );
  function o(a, s) {
    let u = {
      $$slots: { default: [Xa] },
      $$scope: { ctx: a }
    };
    for (let f = 0; f < r.length; f += 1)
      u = V(u, r[f]);
    return s !== void 0 && s[0] & /*tag, ripple, color, $$restProps, addClass, removeClass, addStyle, forwardEvents, use, className, isUninitializedValue, pressed, touch, displayFlex, size, context, action, internalClasses, internalStyles, style, ariaLabelOn, ariaLabelOff, ariaDescribedby, href, actionProp, internalAttrs*/
    1073504255 && (u = V(u, fe(r, [
      s[0] & /*tag*/
      16384 && { tag: (
        /*tag*/
        a[14]
      ) },
      s[0] & /*ripple, color, $$restProps, addClass, removeClass, addStyle, forwardEvents, use*/
      1010827314 && {
        use: [
          [
            At,
            {
              ripple: (
                /*ripple*/
                a[4]
              ),
              unbounded: !0,
              color: (
                /*color*/
                a[5]
              ),
              disabled: !!/*$$restProps*/
              a[29].disabled,
              addClass: (
                /*addClass*/
                a[26]
              ),
              removeClass: (
                /*removeClass*/
                a[27]
              ),
              addStyle: (
                /*addStyle*/
                a[28]
              )
            }
          ],
          /*forwardEvents*/
          a[22],
          .../*use*/
          a[1]
        ]
      },
      s[0] & /*className, isUninitializedValue, pressed, touch, displayFlex, size, context, action, internalClasses*/
      25433861 && {
        class: Q({
          [
            /*className*/
            a[2]
          ]: !0,
          "mdc-icon-button": !0,
          "mdc-icon-button--on": !/*isUninitializedValue*/
          a[23](
            /*pressed*/
            a[0]
          ) && /*pressed*/
          a[0],
          "mdc-icon-button--touch": (
            /*touch*/
            a[8]
          ),
          "mdc-icon-button--display-flex": (
            /*displayFlex*/
            a[9]
          ),
          "smui-icon-button--size-button": (
            /*size*/
            a[10] === "button"
          ),
          "smui-icon-button--size-mini": (
            /*size*/
            a[10] === "mini"
          ),
          "mdc-icon-button--reduced-size": (
            /*size*/
            a[10] === "mini" || /*size*/
            a[10] === "button"
          ),
          "mdc-card__action": (
            /*context*/
            a[24] === "card:action"
          ),
          "mdc-card__action--icon": (
            /*context*/
            a[24] === "card:action"
          ),
          "mdc-top-app-bar__navigation-icon": (
            /*context*/
            a[24] === "top-app-bar:navigation"
          ),
          "mdc-top-app-bar__action-item": (
            /*context*/
            a[24] === "top-app-bar:action"
          ),
          "mdc-snackbar__dismiss": (
            /*context*/
            a[24] === "snackbar:actions"
          ),
          "mdc-data-table__pagination-button": (
            /*context*/
            a[24] === "data-table:pagination"
          ),
          "mdc-data-table__sort-icon-button": (
            /*context*/
            a[24] === "data-table:sortable-header-cell"
          ),
          "mdc-dialog__close": (
            /*context*/
            (a[24] === "dialog:header" || /*context*/
            a[24] === "dialog:sheet") && /*action*/
            a[12] === "close"
          ),
          .../*internalClasses*/
          a[18]
        })
      },
      s[0] & /*internalStyles, style*/
      524296 && {
        style: Object.entries(
          /*internalStyles*/
          a[19]
        ).map(Sn).concat([
          /*style*/
          a[3]
        ]).join(" ")
      },
      s[0] & /*isUninitializedValue, pressed*/
      8388609 && {
        "aria-pressed": /*isUninitializedValue*/ a[23](
          /*pressed*/
          a[0]
        ) ? null : (
          /*pressed*/
          a[0] ? "true" : "false"
        )
      },
      s[0] & /*pressed, ariaLabelOn, ariaLabelOff*/
      193 && {
        "aria-label": (
          /*pressed*/
          a[0] ? (
            /*ariaLabelOn*/
            a[6]
          ) : (
            /*ariaLabelOff*/
            a[7]
          )
        )
      },
      s[0] & /*ariaLabelOn*/
      64 && {
        "data-aria-label-on": (
          /*ariaLabelOn*/
          a[6]
        )
      },
      s[0] & /*ariaLabelOff*/
      128 && {
        "data-aria-label-off": (
          /*ariaLabelOff*/
          a[7]
        )
      },
      s[0] & /*ariaDescribedby*/
      33554432 && {
        "aria-describedby": (
          /*ariaDescribedby*/
          a[25]
        )
      },
      s[0] & /*href*/
      2048 && { href: (
        /*href*/
        a[11]
      ) },
      s[0] & /*actionProp*/
      2097152 && ye(
        /*actionProp*/
        a[21]
      ),
      s[0] & /*internalAttrs*/
      1048576 && ye(
        /*internalAttrs*/
        a[20]
      ),
      s[0] & /*$$restProps*/
      536870912 && ye(
        /*$$restProps*/
        a[29]
      )
    ]))), { props: u };
  }
  return l && (e = ft(l, o(n)), n[34](e), e.$on(
    "click",
    /*click_handler*/
    n[35]
  ), e.$on(
    "click",
    /*click_handler_1*/
    n[36]
  )), {
    c() {
      e && j(e.$$.fragment), t = Ee();
    },
    m(a, s) {
      e && B(e, a, s), F(a, t, s), i = !0;
    },
    p(a, s) {
      if (s[0] & /*component*/
      8192 && l !== (l = /*component*/
      a[13])) {
        if (e) {
          pe();
          const u = e;
          L(u.$$.fragment, 1, 0, () => {
            N(u, 1);
          }), _e();
        }
        l ? (e = ft(l, o(a, s)), a[34](e), e.$on(
          "click",
          /*click_handler*/
          a[35]
        ), e.$on(
          "click",
          /*click_handler_1*/
          a[36]
        ), j(e.$$.fragment), S(e.$$.fragment, 1), B(e, t.parentNode, t)) : e = null;
      } else if (l) {
        const u = s[0] & /*tag, ripple, color, $$restProps, addClass, removeClass, addStyle, forwardEvents, use, className, isUninitializedValue, pressed, touch, displayFlex, size, context, action, internalClasses, internalStyles, style, ariaLabelOn, ariaLabelOff, ariaDescribedby, href, actionProp, internalAttrs*/
        1073504255 ? fe(r, [
          s[0] & /*tag*/
          16384 && { tag: (
            /*tag*/
            a[14]
          ) },
          s[0] & /*ripple, color, $$restProps, addClass, removeClass, addStyle, forwardEvents, use*/
          1010827314 && {
            use: [
              [
                At,
                {
                  ripple: (
                    /*ripple*/
                    a[4]
                  ),
                  unbounded: !0,
                  color: (
                    /*color*/
                    a[5]
                  ),
                  disabled: !!/*$$restProps*/
                  a[29].disabled,
                  addClass: (
                    /*addClass*/
                    a[26]
                  ),
                  removeClass: (
                    /*removeClass*/
                    a[27]
                  ),
                  addStyle: (
                    /*addStyle*/
                    a[28]
                  )
                }
              ],
              /*forwardEvents*/
              a[22],
              .../*use*/
              a[1]
            ]
          },
          s[0] & /*className, isUninitializedValue, pressed, touch, displayFlex, size, context, action, internalClasses*/
          25433861 && {
            class: Q({
              [
                /*className*/
                a[2]
              ]: !0,
              "mdc-icon-button": !0,
              "mdc-icon-button--on": !/*isUninitializedValue*/
              a[23](
                /*pressed*/
                a[0]
              ) && /*pressed*/
              a[0],
              "mdc-icon-button--touch": (
                /*touch*/
                a[8]
              ),
              "mdc-icon-button--display-flex": (
                /*displayFlex*/
                a[9]
              ),
              "smui-icon-button--size-button": (
                /*size*/
                a[10] === "button"
              ),
              "smui-icon-button--size-mini": (
                /*size*/
                a[10] === "mini"
              ),
              "mdc-icon-button--reduced-size": (
                /*size*/
                a[10] === "mini" || /*size*/
                a[10] === "button"
              ),
              "mdc-card__action": (
                /*context*/
                a[24] === "card:action"
              ),
              "mdc-card__action--icon": (
                /*context*/
                a[24] === "card:action"
              ),
              "mdc-top-app-bar__navigation-icon": (
                /*context*/
                a[24] === "top-app-bar:navigation"
              ),
              "mdc-top-app-bar__action-item": (
                /*context*/
                a[24] === "top-app-bar:action"
              ),
              "mdc-snackbar__dismiss": (
                /*context*/
                a[24] === "snackbar:actions"
              ),
              "mdc-data-table__pagination-button": (
                /*context*/
                a[24] === "data-table:pagination"
              ),
              "mdc-data-table__sort-icon-button": (
                /*context*/
                a[24] === "data-table:sortable-header-cell"
              ),
              "mdc-dialog__close": (
                /*context*/
                (a[24] === "dialog:header" || /*context*/
                a[24] === "dialog:sheet") && /*action*/
                a[12] === "close"
              ),
              .../*internalClasses*/
              a[18]
            })
          },
          s[0] & /*internalStyles, style*/
          524296 && {
            style: Object.entries(
              /*internalStyles*/
              a[19]
            ).map(Sn).concat([
              /*style*/
              a[3]
            ]).join(" ")
          },
          s[0] & /*isUninitializedValue, pressed*/
          8388609 && {
            "aria-pressed": /*isUninitializedValue*/ a[23](
              /*pressed*/
              a[0]
            ) ? null : (
              /*pressed*/
              a[0] ? "true" : "false"
            )
          },
          s[0] & /*pressed, ariaLabelOn, ariaLabelOff*/
          193 && {
            "aria-label": (
              /*pressed*/
              a[0] ? (
                /*ariaLabelOn*/
                a[6]
              ) : (
                /*ariaLabelOff*/
                a[7]
              )
            )
          },
          s[0] & /*ariaLabelOn*/
          64 && {
            "data-aria-label-on": (
              /*ariaLabelOn*/
              a[6]
            )
          },
          s[0] & /*ariaLabelOff*/
          128 && {
            "data-aria-label-off": (
              /*ariaLabelOff*/
              a[7]
            )
          },
          s[0] & /*ariaDescribedby*/
          33554432 && {
            "aria-describedby": (
              /*ariaDescribedby*/
              a[25]
            )
          },
          s[0] & /*href*/
          2048 && { href: (
            /*href*/
            a[11]
          ) },
          s[0] & /*actionProp*/
          2097152 && ye(
            /*actionProp*/
            a[21]
          ),
          s[0] & /*internalAttrs*/
          1048576 && ye(
            /*internalAttrs*/
            a[20]
          ),
          s[0] & /*$$restProps*/
          536870912 && ye(
            /*$$restProps*/
            a[29]
          )
        ]) : {};
        s[0] & /*touch*/
        256 | s[1] & /*$$scope*/
        64 && (u.$$scope = { dirty: s, ctx: a }), e.$set(u);
      }
    },
    i(a) {
      i || (e && S(e.$$.fragment, a), i = !0);
    },
    o(a) {
      e && L(e.$$.fragment, a), i = !1;
    },
    d(a) {
      a && M(t), n[34](null), e && N(e, a);
    }
  };
}
const Sn = ([n, e]) => `${n}: ${e};`;
function Ya(n, e, t) {
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
  let l = oe(e, r), { $$slots: o = {}, $$scope: a } = e;
  const s = Pe(Re());
  let u = () => {
  };
  function f(K) {
    return K === u;
  }
  let { use: c = [] } = e, { class: d = "" } = e, { style: p = "" } = e, { ripple: b = !0 } = e, { color: _ = void 0 } = e, { toggle: g = !1 } = e, { pressed: C = u } = e, { ariaLabelOn: v = void 0 } = e, { ariaLabelOff: w = void 0 } = e, { touch: A = !1 } = e, { displayFlex: O = !0 } = e, { size: P = "normal" } = e, { href: m = void 0 } = e, { action: R = void 0 } = e, z, I, h = {}, H = {}, D = {}, W = Oe("SMUI:icon-button:context"), se = Oe("SMUI:icon-button:aria-describedby"), { component: ue = Et } = e, { tag: J = ue === Et ? m == null ? "button" : "a" : void 0 } = e, T = l.disabled;
  we("SMUI:icon:context", "icon-button");
  let y = null;
  Wt(() => {
    I && I.destroy();
  });
  function G(K) {
    return K in h ? h[K] : He().classList.contains(K);
  }
  function me(K) {
    h[K] || t(18, h[K] = !0, h);
  }
  function Ae(K) {
    (!(K in h) || h[K]) && t(18, h[K] = !1, h);
  }
  function qe(K, je) {
    H[K] != je && (je === "" || je == null ? (delete H[K], t(19, H)) : t(19, H[K] = je, H));
  }
  function Ve(K) {
    var je;
    return K in D ? (je = D[K]) !== null && je !== void 0 ? je : null : He().getAttribute(K);
  }
  function ve(K, je) {
    D[K] !== je && t(20, D[K] = je, D);
  }
  function Ge(K) {
    t(0, C = K.isOn);
  }
  function He() {
    return z.getElement();
  }
  function tt(K) {
    x[K ? "unshift" : "push"](() => {
      z = K, t(16, z);
    });
  }
  const nt = () => I && I.handleClick(), vt = () => W === "top-app-bar:navigation" && ge(He(), "SMUITopAppBarIconButton:nav");
  return n.$$set = (K) => {
    e = V(V({}, e), Fe(K)), t(29, l = oe(e, r)), "use" in K && t(1, c = K.use), "class" in K && t(2, d = K.class), "style" in K && t(3, p = K.style), "ripple" in K && t(4, b = K.ripple), "color" in K && t(5, _ = K.color), "toggle" in K && t(30, g = K.toggle), "pressed" in K && t(0, C = K.pressed), "ariaLabelOn" in K && t(6, v = K.ariaLabelOn), "ariaLabelOff" in K && t(7, w = K.ariaLabelOff), "touch" in K && t(8, A = K.touch), "displayFlex" in K && t(9, O = K.displayFlex), "size" in K && t(10, P = K.size), "href" in K && t(11, m = K.href), "action" in K && t(12, R = K.action), "component" in K && t(13, ue = K.component), "tag" in K && t(14, J = K.tag), "$$scope" in K && t(37, a = K.$$scope);
  }, n.$$.update = () => {
    if (n.$$.dirty[0] & /*action*/
    4096 && t(21, i = (() => {
      if (W === "data-table:pagination")
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
        return W === "dialog:header" || W === "dialog:sheet" ? { "data-mdc-dialog-action": R } : { action: R };
    })()), T !== l.disabled) {
      if (z) {
        const K = He();
        "blur" in K && K.blur();
      }
      t(31, T = l.disabled);
    }
    n.$$.dirty[0] & /*element, toggle, instance*/
    1073938432 | n.$$.dirty[1] & /*oldToggle*/
    2 && z && He() && g !== y && (g && !I ? (t(17, I = new Ka({
      addClass: me,
      hasClass: G,
      notifyChange: (K) => {
        Ge(K), ge(He(), "SMUIIconButtonToggle:change", K, void 0, !0);
      },
      removeClass: Ae,
      getAttr: Ve,
      setAttr: ve
    })), I.init()) : !g && I && (I.destroy(), t(17, I = void 0), t(18, h = {}), t(20, D = {})), t(32, y = g)), n.$$.dirty[0] & /*instance, pressed*/
    131073 && I && !f(C) && I.isOn() !== C && I.toggle(C);
  }, [
    C,
    c,
    d,
    p,
    b,
    _,
    v,
    w,
    A,
    O,
    P,
    m,
    R,
    ue,
    J,
    He,
    z,
    I,
    h,
    H,
    D,
    i,
    s,
    f,
    W,
    se,
    me,
    Ae,
    qe,
    l,
    g,
    T,
    y,
    o,
    tt,
    nt,
    vt,
    a
  ];
}
class Qa extends de {
  constructor(e) {
    super(), ce(
      this,
      e,
      Ya,
      Za,
      ae,
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
function Ja(n) {
  let e;
  return {
    c() {
      e = ke(
        /*icon*/
        n[1]
      );
    },
    m(t, i) {
      F(t, e, i);
    },
    p(t, i) {
      i & /*icon*/
      2 && We(
        e,
        /*icon*/
        t[1]
      );
    },
    i: Ie,
    o: Ie,
    d(t) {
      t && M(e);
    }
  };
}
function $a(n) {
  let e, t, i;
  var r = (
    /*iconComponent*/
    n[2]
  );
  function l(o, a) {
    return {
      props: { svgStyles: (
        /*iconStyles*/
        o[3]
      ) }
    };
  }
  return r && (e = ft(r, l(n))), {
    c() {
      e && j(e.$$.fragment), t = Ee();
    },
    m(o, a) {
      e && B(e, o, a), F(o, t, a), i = !0;
    },
    p(o, a) {
      if (a & /*iconComponent*/
      4 && r !== (r = /*iconComponent*/
      o[2])) {
        if (e) {
          pe();
          const s = e;
          L(s.$$.fragment, 1, 0, () => {
            N(s, 1);
          }), _e();
        }
        r ? (e = ft(r, l(o)), j(e.$$.fragment), S(e.$$.fragment, 1), B(e, t.parentNode, t)) : e = null;
      } else if (r) {
        const s = {};
        a & /*iconStyles*/
        8 && (s.svgStyles = /*iconStyles*/
        o[3]), e.$set(s);
      }
    },
    i(o) {
      i || (e && S(e.$$.fragment, o), i = !0);
    },
    o(o) {
      e && L(e.$$.fragment, o), i = !1;
    },
    d(o) {
      o && M(t), e && N(e, o);
    }
  };
}
function xa(n) {
  let e, t, i, r;
  const l = [$a, Ja], o = [];
  function a(s, u) {
    return (
      /*iconComponent*/
      s[2] ? 0 : 1
    );
  }
  return e = a(n), t = o[e] = l[e](n), {
    c() {
      t.c(), i = Ee();
    },
    m(s, u) {
      o[e].m(s, u), F(s, i, u), r = !0;
    },
    p(s, u) {
      let f = e;
      e = a(s), e === f ? o[e].p(s, u) : (pe(), L(o[f], 1, 1, () => {
        o[f] = null;
      }), _e(), t = o[e], t ? t.p(s, u) : (t = o[e] = l[e](s), t.c()), S(t, 1), t.m(i.parentNode, i));
    },
    i(s) {
      r || (S(t), r = !0);
    },
    o(s) {
      L(t), r = !1;
    },
    d(s) {
      s && M(i), o[e].d(s);
    }
  };
}
function eo(n) {
  let e, t;
  return e = new Qa({
    props: {
      class: "material-icons",
      disabled: (
        /*disabled*/
        n[4]
      ),
      style: "margin-bottom: 0;",
      $$slots: { default: [xa] },
      $$scope: { ctx: n }
    }
  }), e.$on("click", function() {
    he(
      /*callback*/
      n[0]
    ) && n[0].apply(this, arguments);
  }), {
    c() {
      j(e.$$.fragment);
    },
    m(i, r) {
      B(e, i, r), t = !0;
    },
    p(i, [r]) {
      n = i;
      const l = {};
      r & /*disabled*/
      16 && (l.disabled = /*disabled*/
      n[4]), r & /*$$scope, iconComponent, iconStyles, icon*/
      46 && (l.$$scope = { dirty: r, ctx: n }), e.$set(l);
    },
    i(i) {
      t || (S(e.$$.fragment, i), t = !0);
    },
    o(i) {
      L(e.$$.fragment, i), t = !1;
    },
    d(i) {
      N(e, i);
    }
  };
}
function to(n, e, t) {
  let { callback: i = () => {
  } } = e, { icon: r = "" } = e, { iconComponent: l = null } = e, { iconStyles: o = "" } = e, { disabled: a = !1 } = e;
  return n.$$set = (s) => {
    "callback" in s && t(0, i = s.callback), "icon" in s && t(1, r = s.icon), "iconComponent" in s && t(2, l = s.iconComponent), "iconStyles" in s && t(3, o = s.iconStyles), "disabled" in s && t(4, a = s.disabled);
  }, [i, r, l, o, a];
}
class no extends de {
  constructor(e) {
    super(), ce(this, e, to, eo, ae, {
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
var io = {
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
var ro = (
  /** @class */
  function(n) {
    et(e, n);
    function e(t) {
      var i = n.call(this, Le(Le({}, e.defaultAdapter), t)) || this;
      return i.shakeAnimationEndHandler = function() {
        i.handleShakeAnimationEnd();
      }, i;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return io;
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
    }, e.prototype.shake = function(t) {
      var i = e.cssClasses.LABEL_SHAKE;
      t ? this.adapter.addClass(i) : this.adapter.removeClass(i);
    }, e.prototype.float = function(t) {
      var i = e.cssClasses, r = i.LABEL_FLOAT_ABOVE, l = i.LABEL_SHAKE;
      t ? this.adapter.addClass(r) : (this.adapter.removeClass(r), this.adapter.removeClass(l));
    }, e.prototype.setRequired = function(t) {
      var i = e.cssClasses.LABEL_REQUIRED;
      t ? this.adapter.addClass(i) : this.adapter.removeClass(i);
    }, e.prototype.handleShakeAnimationEnd = function() {
      var t = e.cssClasses.LABEL_SHAKE;
      this.adapter.removeClass(t);
    }, e;
  }(ct)
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
var Rt = {
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
var lo = (
  /** @class */
  function(n) {
    et(e, n);
    function e(t) {
      var i = n.call(this, Le(Le({}, e.defaultAdapter), t)) || this;
      return i.transitionEndHandler = function(r) {
        i.handleTransitionEnd(r);
      }, i;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Rt;
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
      this.adapter.removeClass(Rt.LINE_RIPPLE_DEACTIVATING), this.adapter.addClass(Rt.LINE_RIPPLE_ACTIVE);
    }, e.prototype.setRippleCenter = function(t) {
      this.adapter.setStyle("transform-origin", t + "px center");
    }, e.prototype.deactivate = function() {
      this.adapter.addClass(Rt.LINE_RIPPLE_DEACTIVATING);
    }, e.prototype.handleTransitionEnd = function(t) {
      var i = this.adapter.hasClass(Rt.LINE_RIPPLE_DEACTIVATING);
      t.propertyName === "opacity" && i && (this.adapter.removeClass(Rt.LINE_RIPPLE_ACTIVE), this.adapter.removeClass(Rt.LINE_RIPPLE_DEACTIVATING));
    }, e;
  }(ct)
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
var ao = {
  NOTCH_ELEMENT_SELECTOR: ".mdc-notched-outline__notch"
}, ri = {
  // This should stay in sync with $mdc-notched-outline-padding * 2.
  NOTCH_ELEMENT_PADDING: 8
}, oo = {
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
var so = (
  /** @class */
  function(n) {
    et(e, n);
    function e(t) {
      return n.call(this, Le(Le({}, e.defaultAdapter), t)) || this;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return ao;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return oo;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return ri;
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
    }), e.prototype.notch = function(t) {
      var i = e.cssClasses.OUTLINE_NOTCHED;
      t > 0 && (t += ri.NOTCH_ELEMENT_PADDING), this.adapter.setNotchWidthProperty(t), this.adapter.addClass(i);
    }, e.prototype.closeNotch = function() {
      var t = e.cssClasses.OUTLINE_NOTCHED;
      this.adapter.removeClass(t), this.adapter.removeNotchWidthProperty();
    }, e;
  }(ct)
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
var In = {
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
}, uo = {
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
}, li = {
  LABEL_SCALE: 0.75
}, fo = [
  "pattern",
  "min",
  "max",
  "required",
  "step",
  "minlength",
  "maxlength"
], co = [
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
var ai = ["mousedown", "touchstart"], oi = ["click", "keydown"], mo = (
  /** @class */
  function(n) {
    et(e, n);
    function e(t, i) {
      i === void 0 && (i = {});
      var r = n.call(this, Le(Le({}, e.defaultAdapter), t)) || this;
      return r.isFocused = !1, r.receivedUserInput = !1, r.valid = !0, r.useNativeValidation = !0, r.validateOnValueChange = !0, r.helperText = i.helperText, r.characterCounter = i.characterCounter, r.leadingIcon = i.leadingIcon, r.trailingIcon = i.trailingIcon, r.inputFocusHandler = function() {
        r.activateFocus();
      }, r.inputBlurHandler = function() {
        r.deactivateFocus();
      }, r.inputInputHandler = function() {
        r.handleInput();
      }, r.setPointerXOffset = function(l) {
        r.setTransformOrigin(l);
      }, r.textFieldInteractionHandler = function() {
        r.handleTextFieldInteraction();
      }, r.validationAttributeChangeHandler = function(l) {
        r.handleValidationAttributeChange(l);
      }, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return uo;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return In;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return li;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "shouldAlwaysFloat", {
      get: function() {
        var t = this.getNativeInput().type;
        return co.indexOf(t) >= 0;
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
      var t, i, r, l;
      this.adapter.hasLabel() && this.getNativeInput().required && this.adapter.setLabelRequired(!0), this.adapter.isFocused() ? this.inputFocusHandler() : this.adapter.hasLabel() && this.shouldFloat && (this.notchOutline(!0), this.adapter.floatLabel(!0), this.styleFloating(!0)), this.adapter.registerInputInteractionHandler("focus", this.inputFocusHandler), this.adapter.registerInputInteractionHandler("blur", this.inputBlurHandler), this.adapter.registerInputInteractionHandler("input", this.inputInputHandler);
      try {
        for (var o = ze(ai), a = o.next(); !a.done; a = o.next()) {
          var s = a.value;
          this.adapter.registerInputInteractionHandler(s, this.setPointerXOffset);
        }
      } catch (c) {
        t = { error: c };
      } finally {
        try {
          a && !a.done && (i = o.return) && i.call(o);
        } finally {
          if (t)
            throw t.error;
        }
      }
      try {
        for (var u = ze(oi), f = u.next(); !f.done; f = u.next()) {
          var s = f.value;
          this.adapter.registerTextFieldInteractionHandler(s, this.textFieldInteractionHandler);
        }
      } catch (c) {
        r = { error: c };
      } finally {
        try {
          f && !f.done && (l = u.return) && l.call(u);
        } finally {
          if (r)
            throw r.error;
        }
      }
      this.validationObserver = this.adapter.registerValidationAttributeChangeHandler(this.validationAttributeChangeHandler), this.setcharacterCounter(this.getValue().length);
    }, e.prototype.destroy = function() {
      var t, i, r, l;
      this.adapter.deregisterInputInteractionHandler("focus", this.inputFocusHandler), this.adapter.deregisterInputInteractionHandler("blur", this.inputBlurHandler), this.adapter.deregisterInputInteractionHandler("input", this.inputInputHandler);
      try {
        for (var o = ze(ai), a = o.next(); !a.done; a = o.next()) {
          var s = a.value;
          this.adapter.deregisterInputInteractionHandler(s, this.setPointerXOffset);
        }
      } catch (c) {
        t = { error: c };
      } finally {
        try {
          a && !a.done && (i = o.return) && i.call(o);
        } finally {
          if (t)
            throw t.error;
        }
      }
      try {
        for (var u = ze(oi), f = u.next(); !f.done; f = u.next()) {
          var s = f.value;
          this.adapter.deregisterTextFieldInteractionHandler(s, this.textFieldInteractionHandler);
        }
      } catch (c) {
        r = { error: c };
      } finally {
        try {
          f && !f.done && (l = u.return) && l.call(u);
        } finally {
          if (r)
            throw r.error;
        }
      }
      this.adapter.deregisterValidationAttributeChangeHandler(this.validationObserver);
    }, e.prototype.handleTextFieldInteraction = function() {
      var t = this.adapter.getNativeInput();
      t && t.disabled || (this.receivedUserInput = !0);
    }, e.prototype.handleValidationAttributeChange = function(t) {
      var i = this;
      t.some(function(r) {
        return fo.indexOf(r) > -1 ? (i.styleValidity(!0), i.adapter.setLabelRequired(i.getNativeInput().required), !0) : !1;
      }), t.indexOf("maxlength") > -1 && this.setcharacterCounter(this.getValue().length);
    }, e.prototype.notchOutline = function(t) {
      if (!(!this.adapter.hasOutline() || !this.adapter.hasLabel()))
        if (t) {
          var i = this.adapter.getLabelWidth() * li.LABEL_SCALE;
          this.adapter.notchOutline(i);
        } else
          this.adapter.closeOutline();
    }, e.prototype.activateFocus = function() {
      this.isFocused = !0, this.styleFocused(this.isFocused), this.adapter.activateLineRipple(), this.adapter.hasLabel() && (this.notchOutline(this.shouldFloat), this.adapter.floatLabel(this.shouldFloat), this.styleFloating(this.shouldFloat), this.adapter.shakeLabel(this.shouldShake)), this.helperText && (this.helperText.isPersistent() || !this.helperText.isValidation() || !this.valid) && this.helperText.showToScreenReader();
    }, e.prototype.setTransformOrigin = function(t) {
      if (!(this.isDisabled() || this.adapter.hasOutline())) {
        var i = t.touches, r = i ? i[0] : t, l = r.target.getBoundingClientRect(), o = r.clientX - l.left;
        this.adapter.setLineRippleTransformOrigin(o);
      }
    }, e.prototype.handleInput = function() {
      this.autoCompleteFocus(), this.setcharacterCounter(this.getValue().length);
    }, e.prototype.autoCompleteFocus = function() {
      this.receivedUserInput || this.activateFocus();
    }, e.prototype.deactivateFocus = function() {
      this.isFocused = !1, this.adapter.deactivateLineRipple();
      var t = this.isValid();
      this.styleValidity(t), this.styleFocused(this.isFocused), this.adapter.hasLabel() && (this.notchOutline(this.shouldFloat), this.adapter.floatLabel(this.shouldFloat), this.styleFloating(this.shouldFloat), this.adapter.shakeLabel(this.shouldShake)), this.shouldFloat || (this.receivedUserInput = !1);
    }, e.prototype.getValue = function() {
      return this.getNativeInput().value;
    }, e.prototype.setValue = function(t) {
      if (this.getValue() !== t && (this.getNativeInput().value = t), this.setcharacterCounter(t.length), this.validateOnValueChange) {
        var i = this.isValid();
        this.styleValidity(i);
      }
      this.adapter.hasLabel() && (this.notchOutline(this.shouldFloat), this.adapter.floatLabel(this.shouldFloat), this.styleFloating(this.shouldFloat), this.validateOnValueChange && this.adapter.shakeLabel(this.shouldShake));
    }, e.prototype.isValid = function() {
      return this.useNativeValidation ? this.isNativeInputValid() : this.valid;
    }, e.prototype.setValid = function(t) {
      this.valid = t, this.styleValidity(t);
      var i = !t && !this.isFocused && !!this.getValue();
      this.adapter.hasLabel() && this.adapter.shakeLabel(i);
    }, e.prototype.setValidateOnValueChange = function(t) {
      this.validateOnValueChange = t;
    }, e.prototype.getValidateOnValueChange = function() {
      return this.validateOnValueChange;
    }, e.prototype.setUseNativeValidation = function(t) {
      this.useNativeValidation = t;
    }, e.prototype.isDisabled = function() {
      return this.getNativeInput().disabled;
    }, e.prototype.setDisabled = function(t) {
      this.getNativeInput().disabled = t, this.styleDisabled(t);
    }, e.prototype.setHelperTextContent = function(t) {
      this.helperText && this.helperText.setContent(t);
    }, e.prototype.setLeadingIconAriaLabel = function(t) {
      this.leadingIcon && this.leadingIcon.setAriaLabel(t);
    }, e.prototype.setLeadingIconContent = function(t) {
      this.leadingIcon && this.leadingIcon.setContent(t);
    }, e.prototype.setTrailingIconAriaLabel = function(t) {
      this.trailingIcon && this.trailingIcon.setAriaLabel(t);
    }, e.prototype.setTrailingIconContent = function(t) {
      this.trailingIcon && this.trailingIcon.setContent(t);
    }, e.prototype.setcharacterCounter = function(t) {
      if (this.characterCounter) {
        var i = this.getNativeInput().maxLength;
        if (i === -1)
          throw new Error("MDCTextFieldFoundation: Expected maxlength html property on text input or textarea.");
        this.characterCounter.setCounterValue(t, i);
      }
    }, e.prototype.isBadInput = function() {
      return this.getNativeInput().validity.badInput || !1;
    }, e.prototype.isNativeInputValid = function() {
      return this.getNativeInput().validity.valid;
    }, e.prototype.styleValidity = function(t) {
      var i = e.cssClasses.INVALID;
      if (t ? this.adapter.removeClass(i) : this.adapter.addClass(i), this.helperText) {
        this.helperText.setValidity(t);
        var r = this.helperText.isValidation();
        if (!r)
          return;
        var l = this.helperText.isVisible(), o = this.helperText.getId();
        l && o ? this.adapter.setInputAttr(In.ARIA_DESCRIBEDBY, o) : this.adapter.removeInputAttr(In.ARIA_DESCRIBEDBY);
      }
    }, e.prototype.styleFocused = function(t) {
      var i = e.cssClasses.FOCUSED;
      t ? this.adapter.addClass(i) : this.adapter.removeClass(i);
    }, e.prototype.styleDisabled = function(t) {
      var i = e.cssClasses, r = i.DISABLED, l = i.INVALID;
      t ? (this.adapter.addClass(r), this.adapter.removeClass(l)) : this.adapter.removeClass(r), this.leadingIcon && this.leadingIcon.setDisabled(t), this.trailingIcon && this.trailingIcon.setDisabled(t);
    }, e.prototype.styleFloating = function(t) {
      var i = e.cssClasses.LABEL_FLOATING;
      t ? this.adapter.addClass(i) : this.adapter.removeClass(i);
    }, e.prototype.getNativeInput = function() {
      var t = this.adapter ? this.adapter.getNativeInput() : null;
      return t || {
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
  }(ct)
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
var si = {
  ICON_EVENT: "MDCTextField:icon",
  ICON_ROLE: "button"
}, ho = {
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
var ui = ["click", "keydown"], go = (
  /** @class */
  function(n) {
    et(e, n);
    function e(t) {
      var i = n.call(this, Le(Le({}, e.defaultAdapter), t)) || this;
      return i.savedTabIndex = null, i.interactionHandler = function(r) {
        i.handleInteraction(r);
      }, i;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return si;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return ho;
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
      var t, i;
      this.savedTabIndex = this.adapter.getAttr("tabindex");
      try {
        for (var r = ze(ui), l = r.next(); !l.done; l = r.next()) {
          var o = l.value;
          this.adapter.registerInteractionHandler(o, this.interactionHandler);
        }
      } catch (a) {
        t = { error: a };
      } finally {
        try {
          l && !l.done && (i = r.return) && i.call(r);
        } finally {
          if (t)
            throw t.error;
        }
      }
    }, e.prototype.destroy = function() {
      var t, i;
      try {
        for (var r = ze(ui), l = r.next(); !l.done; l = r.next()) {
          var o = l.value;
          this.adapter.deregisterInteractionHandler(o, this.interactionHandler);
        }
      } catch (a) {
        t = { error: a };
      } finally {
        try {
          l && !l.done && (i = r.return) && i.call(r);
        } finally {
          if (t)
            throw t.error;
        }
      }
    }, e.prototype.setDisabled = function(t) {
      this.savedTabIndex && (t ? (this.adapter.setAttr("tabindex", "-1"), this.adapter.removeAttr("role")) : (this.adapter.setAttr("tabindex", this.savedTabIndex), this.adapter.setAttr("role", si.ICON_ROLE)));
    }, e.prototype.setAriaLabel = function(t) {
      this.adapter.setAttr("aria-label", t);
    }, e.prototype.setContent = function(t) {
      this.adapter.setContent(t);
    }, e.prototype.handleInteraction = function(t) {
      var i = t.key === "Enter" || t.keyCode === 13;
      (t.type === "click" || i) && (t.preventDefault(), this.adapter.notifyIconAction());
    }, e;
  }(ct)
);
function po(n) {
  let e, t, i, r, l, o, a, s;
  const u = (
    /*#slots*/
    n[22].default
  ), f = ne(
    u,
    n,
    /*$$scope*/
    n[21],
    null
  );
  let c = [
    {
      class: t = Q({
        [
          /*className*/
          n[3]
        ]: !0,
        "mdc-floating-label": !0,
        "mdc-floating-label--float-above": (
          /*floatAbove*/
          n[0]
        ),
        "mdc-floating-label--required": (
          /*required*/
          n[1]
        ),
        .../*internalClasses*/
        n[8]
      })
    },
    {
      style: i = Object.entries(
        /*internalStyles*/
        n[9]
      ).map(ci).concat([
        /*style*/
        n[4]
      ]).join(" ")
    },
    {
      for: r = /*forId*/
      n[5] || /*inputProps*/
      (n[11] ? (
        /*inputProps*/
        n[11].id
      ) : void 0)
    },
    /*$$restProps*/
    n[12]
  ], d = {};
  for (let p = 0; p < c.length; p += 1)
    d = V(d, c[p]);
  return {
    c() {
      e = Z("label"), f && f.c(), te(e, d);
    },
    m(p, b) {
      F(p, e, b), f && f.m(e, null), n[24](e), o = !0, a || (s = [
        ee(l = De.call(
          null,
          e,
          /*use*/
          n[2]
        )),
        ee(
          /*forwardEvents*/
          n[10].call(null, e)
        )
      ], a = !0);
    },
    p(p, b) {
      f && f.p && (!o || b & /*$$scope*/
      2097152) && re(
        f,
        u,
        p,
        /*$$scope*/
        p[21],
        o ? ie(
          u,
          /*$$scope*/
          p[21],
          b,
          null
        ) : le(
          /*$$scope*/
          p[21]
        ),
        null
      ), te(e, d = fe(c, [
        (!o || b & /*className, floatAbove, required, internalClasses*/
        267 && t !== (t = Q({
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
        }))) && { class: t },
        (!o || b & /*internalStyles, style*/
        528 && i !== (i = Object.entries(
          /*internalStyles*/
          p[9]
        ).map(ci).concat([
          /*style*/
          p[4]
        ]).join(" "))) && { style: i },
        (!o || b & /*forId*/
        32 && r !== (r = /*forId*/
        p[5] || /*inputProps*/
        (p[11] ? (
          /*inputProps*/
          p[11].id
        ) : void 0))) && { for: r },
        b & /*$$restProps*/
        4096 && /*$$restProps*/
        p[12]
      ])), l && he(l.update) && b & /*use*/
      4 && l.update.call(
        null,
        /*use*/
        p[2]
      );
    },
    i(p) {
      o || (S(f, p), o = !0);
    },
    o(p) {
      L(f, p), o = !1;
    },
    d(p) {
      p && M(e), f && f.d(p), n[24](null), a = !1, Ce(s);
    }
  };
}
function _o(n) {
  let e, t, i, r, l, o, a;
  const s = (
    /*#slots*/
    n[22].default
  ), u = ne(
    s,
    n,
    /*$$scope*/
    n[21],
    null
  );
  let f = [
    {
      class: t = Q({
        [
          /*className*/
          n[3]
        ]: !0,
        "mdc-floating-label": !0,
        "mdc-floating-label--float-above": (
          /*floatAbove*/
          n[0]
        ),
        "mdc-floating-label--required": (
          /*required*/
          n[1]
        ),
        .../*internalClasses*/
        n[8]
      })
    },
    {
      style: i = Object.entries(
        /*internalStyles*/
        n[9]
      ).map(fi).concat([
        /*style*/
        n[4]
      ]).join(" ")
    },
    /*$$restProps*/
    n[12]
  ], c = {};
  for (let d = 0; d < f.length; d += 1)
    c = V(c, f[d]);
  return {
    c() {
      e = Z("span"), u && u.c(), te(e, c);
    },
    m(d, p) {
      F(d, e, p), u && u.m(e, null), n[23](e), l = !0, o || (a = [
        ee(r = De.call(
          null,
          e,
          /*use*/
          n[2]
        )),
        ee(
          /*forwardEvents*/
          n[10].call(null, e)
        )
      ], o = !0);
    },
    p(d, p) {
      u && u.p && (!l || p & /*$$scope*/
      2097152) && re(
        u,
        s,
        d,
        /*$$scope*/
        d[21],
        l ? ie(
          s,
          /*$$scope*/
          d[21],
          p,
          null
        ) : le(
          /*$$scope*/
          d[21]
        ),
        null
      ), te(e, c = fe(f, [
        (!l || p & /*className, floatAbove, required, internalClasses*/
        267 && t !== (t = Q({
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
        }))) && { class: t },
        (!l || p & /*internalStyles, style*/
        528 && i !== (i = Object.entries(
          /*internalStyles*/
          d[9]
        ).map(fi).concat([
          /*style*/
          d[4]
        ]).join(" "))) && { style: i },
        p & /*$$restProps*/
        4096 && /*$$restProps*/
        d[12]
      ])), r && he(r.update) && p & /*use*/
      4 && r.update.call(
        null,
        /*use*/
        d[2]
      );
    },
    i(d) {
      l || (S(u, d), l = !0);
    },
    o(d) {
      L(u, d), l = !1;
    },
    d(d) {
      d && M(e), u && u.d(d), n[23](null), o = !1, Ce(a);
    }
  };
}
function bo(n) {
  let e, t, i, r;
  const l = [_o, po], o = [];
  function a(s, u) {
    return (
      /*wrapped*/
      s[6] ? 0 : 1
    );
  }
  return e = a(n), t = o[e] = l[e](n), {
    c() {
      t.c(), i = Ee();
    },
    m(s, u) {
      o[e].m(s, u), F(s, i, u), r = !0;
    },
    p(s, [u]) {
      let f = e;
      e = a(s), e === f ? o[e].p(s, u) : (pe(), L(o[f], 1, 1, () => {
        o[f] = null;
      }), _e(), t = o[e], t ? t.p(s, u) : (t = o[e] = l[e](s), t.c()), S(t, 1), t.m(i.parentNode, i));
    },
    i(s) {
      r || (S(t), r = !0);
    },
    o(s) {
      L(t), r = !1;
    },
    d(s) {
      s && M(i), o[e].d(s);
    }
  };
}
const fi = ([n, e]) => `${n}: ${e};`, ci = ([n, e]) => `${n}: ${e};`;
function vo(n, e, t) {
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
  let r = oe(e, i), { $$slots: l = {}, $$scope: o } = e;
  var a;
  const s = Pe(Re());
  let { use: u = [] } = e, { class: f = "" } = e, { style: c = "" } = e, { for: d = void 0 } = e, { floatAbove: p = !1 } = e, { required: b = !1 } = e, { wrapped: _ = !1 } = e, g, C, v = {}, w = {}, A = (a = Oe("SMUI:generic:input:props")) !== null && a !== void 0 ? a : {}, O = p, P = b;
  Ke(() => {
    t(18, C = new ro({
      addClass: m,
      removeClass: R,
      getWidth: () => {
        var y, G;
        const me = se(), Ae = me.cloneNode(!0);
        (y = me.parentNode) === null || y === void 0 || y.appendChild(Ae), Ae.classList.add("smui-floating-label--remove-transition"), Ae.classList.add("smui-floating-label--force-size"), Ae.classList.remove("mdc-floating-label--float-above");
        const qe = Ae.scrollWidth;
        return (G = me.parentNode) === null || G === void 0 || G.removeChild(Ae), qe;
      },
      registerInteractionHandler: (y, G) => se().addEventListener(y, G),
      deregisterInteractionHandler: (y, G) => se().removeEventListener(y, G)
    }));
    const T = {
      get element() {
        return se();
      },
      addStyle: z,
      removeStyle: I
    };
    return ge(g, "SMUIFloatingLabel:mount", T), C.init(), () => {
      ge(g, "SMUIFloatingLabel:unmount", T), C.destroy();
    };
  });
  function m(T) {
    v[T] || t(8, v[T] = !0, v);
  }
  function R(T) {
    (!(T in v) || v[T]) && t(8, v[T] = !1, v);
  }
  function z(T, y) {
    w[T] != y && (y === "" || y == null ? (delete w[T], t(9, w)) : t(9, w[T] = y, w));
  }
  function I(T) {
    T in w && (delete w[T], t(9, w));
  }
  function h(T) {
    C.shake(T);
  }
  function H(T) {
    t(0, p = T);
  }
  function D(T) {
    t(1, b = T);
  }
  function W() {
    return C.getWidth();
  }
  function se() {
    return g;
  }
  function ue(T) {
    x[T ? "unshift" : "push"](() => {
      g = T, t(7, g);
    });
  }
  function J(T) {
    x[T ? "unshift" : "push"](() => {
      g = T, t(7, g);
    });
  }
  return n.$$set = (T) => {
    e = V(V({}, e), Fe(T)), t(12, r = oe(e, i)), "use" in T && t(2, u = T.use), "class" in T && t(3, f = T.class), "style" in T && t(4, c = T.style), "for" in T && t(5, d = T.for), "floatAbove" in T && t(0, p = T.floatAbove), "required" in T && t(1, b = T.required), "wrapped" in T && t(6, _ = T.wrapped), "$$scope" in T && t(21, o = T.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty & /*instance, previousFloatAbove, floatAbove*/
    786433 && C && O !== p && (t(19, O = p), C.float(p)), n.$$.dirty & /*instance, previousRequired, required*/
    1310722 && C && P !== b && (t(20, P = b), C.setRequired(b));
  }, [
    p,
    b,
    u,
    f,
    c,
    d,
    _,
    g,
    v,
    w,
    s,
    A,
    r,
    h,
    H,
    D,
    W,
    se,
    C,
    O,
    P,
    o,
    l,
    ue,
    J
  ];
}
class Gr extends de {
  constructor(e) {
    super(), ce(this, e, vo, bo, ae, {
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
function yo(n) {
  let e, t, i, r, l, o, a = [
    {
      class: t = Q({
        [
          /*className*/
          n[1]
        ]: !0,
        "mdc-line-ripple": !0,
        "mdc-line-ripple--active": (
          /*active*/
          n[3]
        ),
        .../*internalClasses*/
        n[5]
      })
    },
    {
      style: i = Object.entries(
        /*internalStyles*/
        n[6]
      ).map(di).concat([
        /*style*/
        n[2]
      ]).join(" ")
    },
    /*$$restProps*/
    n[8]
  ], s = {};
  for (let u = 0; u < a.length; u += 1)
    s = V(s, a[u]);
  return {
    c() {
      e = Z("div"), te(e, s);
    },
    m(u, f) {
      F(u, e, f), n[13](e), l || (o = [
        ee(r = De.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        ee(
          /*forwardEvents*/
          n[7].call(null, e)
        )
      ], l = !0);
    },
    p(u, [f]) {
      te(e, s = fe(a, [
        f & /*className, active, internalClasses*/
        42 && t !== (t = Q({
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
        })) && { class: t },
        f & /*internalStyles, style*/
        68 && i !== (i = Object.entries(
          /*internalStyles*/
          u[6]
        ).map(di).concat([
          /*style*/
          u[2]
        ]).join(" ")) && { style: i },
        f & /*$$restProps*/
        256 && /*$$restProps*/
        u[8]
      ])), r && he(r.update) && f & /*use*/
      1 && r.update.call(
        null,
        /*use*/
        u[0]
      );
    },
    i: Ie,
    o: Ie,
    d(u) {
      u && M(e), n[13](null), l = !1, Ce(o);
    }
  };
}
const di = ([n, e]) => `${n}: ${e};`;
function Co(n, e, t) {
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
  let r = oe(e, i);
  const l = Pe(Re());
  let { use: o = [] } = e, { class: a = "" } = e, { style: s = "" } = e, { active: u = !1 } = e, f, c, d = {}, p = {};
  Ke(() => (c = new lo({
    addClass: _,
    removeClass: g,
    hasClass: b,
    setStyle: C,
    registerEventHandler: (m, R) => O().addEventListener(m, R),
    deregisterEventHandler: (m, R) => O().removeEventListener(m, R)
  }), c.init(), () => {
    c.destroy();
  }));
  function b(m) {
    return m in d ? d[m] : O().classList.contains(m);
  }
  function _(m) {
    d[m] || t(5, d[m] = !0, d);
  }
  function g(m) {
    (!(m in d) || d[m]) && t(5, d[m] = !1, d);
  }
  function C(m, R) {
    p[m] != R && (R === "" || R == null ? (delete p[m], t(6, p)) : t(6, p[m] = R, p));
  }
  function v() {
    c.activate();
  }
  function w() {
    c.deactivate();
  }
  function A(m) {
    c.setRippleCenter(m);
  }
  function O() {
    return f;
  }
  function P(m) {
    x[m ? "unshift" : "push"](() => {
      f = m, t(4, f);
    });
  }
  return n.$$set = (m) => {
    e = V(V({}, e), Fe(m)), t(8, r = oe(e, i)), "use" in m && t(0, o = m.use), "class" in m && t(1, a = m.class), "style" in m && t(2, s = m.style), "active" in m && t(3, u = m.active);
  }, [
    o,
    a,
    s,
    u,
    f,
    d,
    p,
    l,
    r,
    v,
    w,
    A,
    O,
    P
  ];
}
class Ao extends de {
  constructor(e) {
    super(), ce(this, e, Co, yo, ae, {
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
function mi(n) {
  let e, t, i;
  const r = (
    /*#slots*/
    n[15].default
  ), l = ne(
    r,
    n,
    /*$$scope*/
    n[14],
    null
  );
  return {
    c() {
      e = Z("div"), l && l.c(), U(e, "class", "mdc-notched-outline__notch"), U(e, "style", t = Object.entries(
        /*notchStyles*/
        n[7]
      ).map(hi).join(" "));
    },
    m(o, a) {
      F(o, e, a), l && l.m(e, null), i = !0;
    },
    p(o, a) {
      l && l.p && (!i || a & /*$$scope*/
      16384) && re(
        l,
        r,
        o,
        /*$$scope*/
        o[14],
        i ? ie(
          r,
          /*$$scope*/
          o[14],
          a,
          null
        ) : le(
          /*$$scope*/
          o[14]
        ),
        null
      ), (!i || a & /*notchStyles*/
      128 && t !== (t = Object.entries(
        /*notchStyles*/
        o[7]
      ).map(hi).join(" "))) && U(e, "style", t);
    },
    i(o) {
      i || (S(l, o), i = !0);
    },
    o(o) {
      L(l, o), i = !1;
    },
    d(o) {
      o && M(e), l && l.d(o);
    }
  };
}
function So(n) {
  let e, t, i, r, l, o, a, s, u, f, c = !/*noLabel*/
  n[3] && mi(n), d = [
    {
      class: o = Q({
        [
          /*className*/
          n[1]
        ]: !0,
        "mdc-notched-outline": !0,
        "mdc-notched-outline--notched": (
          /*notched*/
          n[2]
        ),
        "mdc-notched-outline--no-label": (
          /*noLabel*/
          n[3]
        ),
        .../*internalClasses*/
        n[6]
      })
    },
    /*$$restProps*/
    n[10]
  ], p = {};
  for (let b = 0; b < d.length; b += 1)
    p = V(p, d[b]);
  return {
    c() {
      e = Z("div"), t = Z("div"), i = Y(), c && c.c(), r = Y(), l = Z("div"), U(t, "class", "mdc-notched-outline__leading"), U(l, "class", "mdc-notched-outline__trailing"), te(e, p);
    },
    m(b, _) {
      F(b, e, _), X(e, t), X(e, i), c && c.m(e, null), X(e, r), X(e, l), n[16](e), s = !0, u || (f = [
        ee(a = De.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        ee(
          /*forwardEvents*/
          n[8].call(null, e)
        ),
        $(
          e,
          "SMUIFloatingLabel:mount",
          /*handleFloatingLabelMount*/
          n[9]
        ),
        $(
          e,
          "SMUIFloatingLabel:unmount",
          /*SMUIFloatingLabel_unmount_handler*/
          n[17]
        )
      ], u = !0);
    },
    p(b, [_]) {
      /*noLabel*/
      b[3] ? c && (pe(), L(c, 1, 1, () => {
        c = null;
      }), _e()) : c ? (c.p(b, _), _ & /*noLabel*/
      8 && S(c, 1)) : (c = mi(b), c.c(), S(c, 1), c.m(e, r)), te(e, p = fe(d, [
        (!s || _ & /*className, notched, noLabel, internalClasses*/
        78 && o !== (o = Q({
          [
            /*className*/
            b[1]
          ]: !0,
          "mdc-notched-outline": !0,
          "mdc-notched-outline--notched": (
            /*notched*/
            b[2]
          ),
          "mdc-notched-outline--no-label": (
            /*noLabel*/
            b[3]
          ),
          .../*internalClasses*/
          b[6]
        }))) && { class: o },
        _ & /*$$restProps*/
        1024 && /*$$restProps*/
        b[10]
      ])), a && he(a.update) && _ & /*use*/
      1 && a.update.call(
        null,
        /*use*/
        b[0]
      );
    },
    i(b) {
      s || (S(c), s = !0);
    },
    o(b) {
      L(c), s = !1;
    },
    d(b) {
      b && M(e), c && c.d(), n[16](null), u = !1, Ce(f);
    }
  };
}
const hi = ([n, e]) => `${n}: ${e};`;
function Io(n, e, t) {
  const i = ["use", "class", "notched", "noLabel", "notch", "closeNotch", "getElement"];
  let r = oe(e, i), { $$slots: l = {}, $$scope: o } = e;
  const a = Pe(Re());
  let { use: s = [] } = e, { class: u = "" } = e, { notched: f = !1 } = e, { noLabel: c = !1 } = e, d, p, b, _ = {}, g = {};
  Ke(() => (p = new so({
    addClass: v,
    removeClass: w,
    setNotchWidthProperty: (h) => A("width", h + "px"),
    removeNotchWidthProperty: () => O("width")
  }), p.init(), () => {
    p.destroy();
  }));
  function C(h) {
    t(4, b = h.detail);
  }
  function v(h) {
    _[h] || t(6, _[h] = !0, _);
  }
  function w(h) {
    (!(h in _) || _[h]) && t(6, _[h] = !1, _);
  }
  function A(h, H) {
    g[h] != H && (H === "" || H == null ? (delete g[h], t(7, g)) : t(7, g[h] = H, g));
  }
  function O(h) {
    h in g && (delete g[h], t(7, g));
  }
  function P(h) {
    p.notch(h);
  }
  function m() {
    p.closeNotch();
  }
  function R() {
    return d;
  }
  function z(h) {
    x[h ? "unshift" : "push"](() => {
      d = h, t(5, d);
    });
  }
  const I = () => t(4, b = void 0);
  return n.$$set = (h) => {
    e = V(V({}, e), Fe(h)), t(10, r = oe(e, i)), "use" in h && t(0, s = h.use), "class" in h && t(1, u = h.class), "notched" in h && t(2, f = h.notched), "noLabel" in h && t(3, c = h.noLabel), "$$scope" in h && t(14, o = h.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty & /*floatingLabel*/
    16 && (b ? (b.addStyle("transition-duration", "0s"), v("mdc-notched-outline--upgraded"), requestAnimationFrame(() => {
      b && b.removeStyle("transition-duration");
    })) : w("mdc-notched-outline--upgraded"));
  }, [
    s,
    u,
    f,
    c,
    b,
    d,
    _,
    g,
    a,
    C,
    r,
    P,
    m,
    R,
    o,
    l,
    z,
    I
  ];
}
class Eo extends de {
  constructor(e) {
    super(), ce(this, e, Io, So, ae, {
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
function Lo(n) {
  let e;
  const t = (
    /*#slots*/
    n[11].default
  ), i = ne(
    t,
    n,
    /*$$scope*/
    n[13],
    null
  );
  return {
    c() {
      i && i.c();
    },
    m(r, l) {
      i && i.m(r, l), e = !0;
    },
    p(r, l) {
      i && i.p && (!e || l & /*$$scope*/
      8192) && re(
        i,
        t,
        r,
        /*$$scope*/
        r[13],
        e ? ie(
          t,
          /*$$scope*/
          r[13],
          l,
          null
        ) : le(
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
      L(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function ko(n) {
  let e, t, i;
  const r = [
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
      class: Q({
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
  var l = (
    /*component*/
    n[2]
  );
  function o(a, s) {
    let u = {
      $$slots: { default: [Lo] },
      $$scope: { ctx: a }
    };
    for (let f = 0; f < r.length; f += 1)
      u = V(u, r[f]);
    return s !== void 0 && s & /*tag, forwardEvents, use, className, smuiClass, smuiClassMap, props, $$restProps*/
    1003 && (u = V(u, fe(r, [
      s & /*tag*/
      8 && { tag: (
        /*tag*/
        a[3]
      ) },
      s & /*forwardEvents, use*/
      257 && {
        use: [
          /*forwardEvents*/
          a[8],
          .../*use*/
          a[0]
        ]
      },
      s & /*className, smuiClass, smuiClassMap*/
      98 && {
        class: Q({
          [
            /*className*/
            a[1]
          ]: !0,
          [
            /*smuiClass*/
            a[6]
          ]: !0,
          .../*smuiClassMap*/
          a[5]
        })
      },
      s & /*props*/
      128 && ye(
        /*props*/
        a[7]
      ),
      s & /*$$restProps*/
      512 && ye(
        /*$$restProps*/
        a[9]
      )
    ]))), { props: u };
  }
  return l && (e = ft(l, o(n)), n[12](e)), {
    c() {
      e && j(e.$$.fragment), t = Ee();
    },
    m(a, s) {
      e && B(e, a, s), F(a, t, s), i = !0;
    },
    p(a, [s]) {
      if (s & /*component*/
      4 && l !== (l = /*component*/
      a[2])) {
        if (e) {
          pe();
          const u = e;
          L(u.$$.fragment, 1, 0, () => {
            N(u, 1);
          }), _e();
        }
        l ? (e = ft(l, o(a, s)), a[12](e), j(e.$$.fragment), S(e.$$.fragment, 1), B(e, t.parentNode, t)) : e = null;
      } else if (l) {
        const u = s & /*tag, forwardEvents, use, className, smuiClass, smuiClassMap, props, $$restProps*/
        1003 ? fe(r, [
          s & /*tag*/
          8 && { tag: (
            /*tag*/
            a[3]
          ) },
          s & /*forwardEvents, use*/
          257 && {
            use: [
              /*forwardEvents*/
              a[8],
              .../*use*/
              a[0]
            ]
          },
          s & /*className, smuiClass, smuiClassMap*/
          98 && {
            class: Q({
              [
                /*className*/
                a[1]
              ]: !0,
              [
                /*smuiClass*/
                a[6]
              ]: !0,
              .../*smuiClassMap*/
              a[5]
            })
          },
          s & /*props*/
          128 && ye(
            /*props*/
            a[7]
          ),
          s & /*$$restProps*/
          512 && ye(
            /*$$restProps*/
            a[9]
          )
        ]) : {};
        s & /*$$scope*/
        8192 && (u.$$scope = { dirty: s, ctx: a }), e.$set(u);
      }
    },
    i(a) {
      i || (e && S(e.$$.fragment, a), i = !0);
    },
    o(a) {
      e && L(e.$$.fragment, a), i = !1;
    },
    d(a) {
      a && M(t), n[12](null), e && N(e, a);
    }
  };
}
const pt = {
  component: Et,
  tag: "div",
  class: "",
  classMap: {},
  contexts: {},
  props: {}
};
function Ro(n, e, t) {
  const i = ["use", "class", "component", "tag", "getElement"];
  let r = oe(e, i), { $$slots: l = {}, $$scope: o } = e, { use: a = [] } = e, { class: s = "" } = e, u;
  const f = pt.class, c = {}, d = [], p = pt.contexts, b = pt.props;
  let { component: _ = pt.component } = e, { tag: g = _ === Et ? pt.tag : void 0 } = e;
  Object.entries(pt.classMap).forEach(([A, O]) => {
    const P = Oe(O);
    P && "subscribe" in P && d.push(P.subscribe((m) => {
      t(5, c[A] = m, c);
    }));
  });
  const C = Pe(Re());
  for (let A in p)
    p.hasOwnProperty(A) && we(A, p[A]);
  Wt(() => {
    for (const A of d)
      A();
  });
  function v() {
    return u.getElement();
  }
  function w(A) {
    x[A ? "unshift" : "push"](() => {
      u = A, t(4, u);
    });
  }
  return n.$$set = (A) => {
    e = V(V({}, e), Fe(A)), t(9, r = oe(e, i)), "use" in A && t(0, a = A.use), "class" in A && t(1, s = A.class), "component" in A && t(2, _ = A.component), "tag" in A && t(3, g = A.tag), "$$scope" in A && t(13, o = A.$$scope);
  }, [
    a,
    s,
    _,
    g,
    u,
    c,
    f,
    b,
    C,
    r,
    v,
    l,
    w,
    o
  ];
}
class wo extends de {
  constructor(e) {
    super(), ce(this, e, Ro, ko, ae, {
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
const gi = Object.assign({}, pt);
function Be(n) {
  return new Proxy(wo, {
    construct: function(e, t) {
      return Object.assign(pt, gi, n), new e(...t);
    },
    get: function(e, t) {
      return Object.assign(pt, gi, n), e[t];
    }
  });
}
const Oo = Be({
  class: "mdc-text-field-helper-line",
  tag: "div"
}), Do = Be({
  class: "mdc-text-field__affix mdc-text-field__affix--prefix",
  tag: "span"
}), To = Be({
  class: "mdc-text-field__affix mdc-text-field__affix--suffix",
  tag: "span"
});
function Ho(n) {
  let e, t, i, r, l, o = [
    {
      class: t = Q({
        [
          /*className*/
          n[1]
        ]: !0,
        "mdc-text-field__input": !0
      })
    },
    { type: (
      /*type*/
      n[2]
    ) },
    { placeholder: (
      /*placeholder*/
      n[3]
    ) },
    /*valueProp*/
    n[4],
    /*internalAttrs*/
    n[6],
    /*$$restProps*/
    n[10]
  ], a = {};
  for (let s = 0; s < o.length; s += 1)
    a = V(a, o[s]);
  return {
    c() {
      e = Z("input"), te(e, a);
    },
    m(s, u) {
      F(s, e, u), e.autofocus && e.focus(), n[26](e), r || (l = [
        ee(i = De.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        ee(
          /*forwardEvents*/
          n[7].call(null, e)
        ),
        $(
          e,
          "input",
          /*input_handler*/
          n[27]
        ),
        $(
          e,
          "change",
          /*changeHandler*/
          n[9]
        ),
        $(
          e,
          "blur",
          /*blur_handler*/
          n[24]
        ),
        $(
          e,
          "focus",
          /*focus_handler*/
          n[25]
        )
      ], r = !0);
    },
    p(s, [u]) {
      te(e, a = fe(o, [
        u & /*className*/
        2 && t !== (t = Q({
          [
            /*className*/
            s[1]
          ]: !0,
          "mdc-text-field__input": !0
        })) && { class: t },
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
      ])), i && he(i.update) && u & /*use*/
      1 && i.update.call(
        null,
        /*use*/
        s[0]
      );
    },
    i: Ie,
    o: Ie,
    d(s) {
      s && M(e), n[26](null), r = !1, Ce(l);
    }
  };
}
function Mo(n) {
  return n === "" ? Number.NaN : +n;
}
function Fo(n, e, t) {
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
  let r = oe(e, i);
  const l = Pe(Re());
  let o = () => {
  };
  function a(y) {
    return y === o;
  }
  let { use: s = [] } = e, { class: u = "" } = e, { type: f = "text" } = e, { placeholder: c = " " } = e, { value: d = o } = e;
  const p = a(d);
  p && (d = "");
  let { files: b = null } = e, { dirty: _ = !1 } = e, { invalid: g = !1 } = e, { updateInvalid: C = !0 } = e, { emptyValueNull: v = d === null } = e;
  p && v && (d = null);
  let { emptyValueUndefined: w = d === void 0 } = e;
  p && w && (d = void 0);
  let A, O = {}, P = {};
  Ke(() => {
    C && t(14, g = A.matches(":invalid"));
  });
  function m(y) {
    if (f === "file") {
      t(12, b = y.currentTarget.files);
      return;
    }
    if (y.currentTarget.value === "" && v) {
      t(11, d = null);
      return;
    }
    if (y.currentTarget.value === "" && w) {
      t(11, d = void 0);
      return;
    }
    switch (f) {
      case "number":
      case "range":
        t(11, d = Mo(y.currentTarget.value));
        break;
      default:
        t(11, d = y.currentTarget.value);
        break;
    }
  }
  function R(y) {
    (f === "file" || f === "range") && m(y), t(13, _ = !0), C && t(14, g = A.matches(":invalid"));
  }
  function z(y) {
    var G;
    return y in O ? (G = O[y]) !== null && G !== void 0 ? G : null : W().getAttribute(y);
  }
  function I(y, G) {
    O[y] !== G && t(6, O[y] = G, O);
  }
  function h(y) {
    (!(y in O) || O[y] != null) && t(6, O[y] = void 0, O);
  }
  function H() {
    W().focus();
  }
  function D() {
    W().blur();
  }
  function W() {
    return A;
  }
  function se(y) {
    cn.call(this, n, y);
  }
  function ue(y) {
    cn.call(this, n, y);
  }
  function J(y) {
    x[y ? "unshift" : "push"](() => {
      A = y, t(5, A);
    });
  }
  const T = (y) => f !== "file" && m(y);
  return n.$$set = (y) => {
    e = V(V({}, e), Fe(y)), t(10, r = oe(e, i)), "use" in y && t(0, s = y.use), "class" in y && t(1, u = y.class), "type" in y && t(2, f = y.type), "placeholder" in y && t(3, c = y.placeholder), "value" in y && t(11, d = y.value), "files" in y && t(12, b = y.files), "dirty" in y && t(13, _ = y.dirty), "invalid" in y && t(14, g = y.invalid), "updateInvalid" in y && t(15, C = y.updateInvalid), "emptyValueNull" in y && t(16, v = y.emptyValueNull), "emptyValueUndefined" in y && t(17, w = y.emptyValueUndefined);
  }, n.$$.update = () => {
    n.$$.dirty & /*type, valueProp, value*/
    2068 && (f === "file" ? (delete P.value, t(4, P), t(2, f), t(11, d)) : t(4, P.value = d ?? "", P));
  }, [
    s,
    u,
    f,
    c,
    P,
    A,
    O,
    l,
    m,
    R,
    r,
    d,
    b,
    _,
    g,
    C,
    v,
    w,
    z,
    I,
    h,
    H,
    D,
    W,
    se,
    ue,
    J,
    T
  ];
}
class Uo extends de {
  constructor(e) {
    super(), ce(this, e, Fo, Ho, ae, {
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
function Po(n) {
  let e, t, i, r, l, o, a = [
    {
      class: t = Q({
        [
          /*className*/
          n[2]
        ]: !0,
        "mdc-text-field__input": !0
      })
    },
    {
      style: i = `${/*resizable*/
      n[4] ? "" : "resize: none; "}${/*style*/
      n[3]}`
    },
    /*internalAttrs*/
    n[6],
    /*$$restProps*/
    n[9]
  ], s = {};
  for (let u = 0; u < a.length; u += 1)
    s = V(s, a[u]);
  return {
    c() {
      e = Z("textarea"), te(e, s);
    },
    m(u, f) {
      F(u, e, f), e.autofocus && e.focus(), n[21](e), Gt(
        e,
        /*value*/
        n[0]
      ), l || (o = [
        ee(r = De.call(
          null,
          e,
          /*use*/
          n[1]
        )),
        ee(
          /*forwardEvents*/
          n[7].call(null, e)
        ),
        $(
          e,
          "change",
          /*changeHandler*/
          n[8]
        ),
        $(
          e,
          "blur",
          /*blur_handler*/
          n[19]
        ),
        $(
          e,
          "focus",
          /*focus_handler*/
          n[20]
        ),
        $(
          e,
          "input",
          /*textarea_input_handler*/
          n[22]
        )
      ], l = !0);
    },
    p(u, [f]) {
      te(e, s = fe(a, [
        f & /*className*/
        4 && t !== (t = Q({
          [
            /*className*/
            u[2]
          ]: !0,
          "mdc-text-field__input": !0
        })) && { class: t },
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
      ])), r && he(r.update) && f & /*use*/
      2 && r.update.call(
        null,
        /*use*/
        u[1]
      ), f & /*value*/
      1 && Gt(
        e,
        /*value*/
        u[0]
      );
    },
    i: Ie,
    o: Ie,
    d(u) {
      u && M(e), n[21](null), l = !1, Ce(o);
    }
  };
}
function Bo(n, e, t) {
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
  let r = oe(e, i);
  const l = Pe(Re());
  let { use: o = [] } = e, { class: a = "" } = e, { style: s = "" } = e, { value: u = "" } = e, { dirty: f = !1 } = e, { invalid: c = !1 } = e, { updateInvalid: d = !0 } = e, { resizable: p = !0 } = e, b, _ = {};
  Ke(() => {
    d && t(11, c = b.matches(":invalid"));
  });
  function g() {
    t(10, f = !0), d && t(11, c = b.matches(":invalid"));
  }
  function C(h) {
    var H;
    return h in _ ? (H = _[h]) !== null && H !== void 0 ? H : null : P().getAttribute(h);
  }
  function v(h, H) {
    _[h] !== H && t(6, _[h] = H, _);
  }
  function w(h) {
    (!(h in _) || _[h] != null) && t(6, _[h] = void 0, _);
  }
  function A() {
    P().focus();
  }
  function O() {
    P().blur();
  }
  function P() {
    return b;
  }
  function m(h) {
    cn.call(this, n, h);
  }
  function R(h) {
    cn.call(this, n, h);
  }
  function z(h) {
    x[h ? "unshift" : "push"](() => {
      b = h, t(5, b);
    });
  }
  function I() {
    u = this.value, t(0, u);
  }
  return n.$$set = (h) => {
    e = V(V({}, e), Fe(h)), t(9, r = oe(e, i)), "use" in h && t(1, o = h.use), "class" in h && t(2, a = h.class), "style" in h && t(3, s = h.style), "value" in h && t(0, u = h.value), "dirty" in h && t(10, f = h.dirty), "invalid" in h && t(11, c = h.invalid), "updateInvalid" in h && t(12, d = h.updateInvalid), "resizable" in h && t(4, p = h.resizable);
  }, [
    u,
    o,
    a,
    s,
    p,
    b,
    _,
    l,
    g,
    r,
    f,
    c,
    d,
    C,
    v,
    w,
    A,
    O,
    P,
    m,
    R,
    z,
    I
  ];
}
class No extends de {
  constructor(e) {
    super(), ce(this, e, Bo, Po, ae, {
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
const jo = (n) => ({}), pi = (n) => ({}), qo = (n) => ({}), _i = (n) => ({}), Vo = (n) => ({}), bi = (n) => ({}), Go = (n) => ({}), vi = (n) => ({}), zo = (n) => ({}), yi = (n) => ({}), Wo = (n) => ({}), Ci = (n) => ({}), Ko = (n) => ({}), Ai = (n) => ({}), Xo = (n) => ({}), Si = (n) => ({}), Zo = (n) => ({}), Ii = (n) => ({}), Yo = (n) => ({}), Ei = (n) => ({}), Qo = (n) => ({}), Li = (n) => ({}), Jo = (n) => ({}), ki = (n) => ({});
function $o(n) {
  let e, t, i, r, l, o, a, s, u, f, c, d, p, b;
  const _ = (
    /*#slots*/
    n[56].label
  ), g = ne(
    _,
    n,
    /*$$scope*/
    n[87],
    yi
  );
  i = new dn({
    props: {
      key: "SMUI:textfield:icon:leading",
      value: !0,
      $$slots: { default: [es] },
      $$scope: { ctx: n }
    }
  });
  const C = (
    /*#slots*/
    n[56].default
  ), v = ne(
    C,
    n,
    /*$$scope*/
    n[87],
    null
  );
  o = new dn({
    props: {
      key: "SMUI:textfield:icon:leading",
      value: !1,
      $$slots: { default: [ts] },
      $$scope: { ctx: n }
    }
  });
  const w = (
    /*#slots*/
    n[56].ripple
  ), A = ne(
    w,
    n,
    /*$$scope*/
    n[87],
    _i
  );
  let O = [
    {
      class: s = Q({
        [
          /*className*/
          n[9]
        ]: !0,
        "mdc-text-field": !0,
        "mdc-text-field--disabled": (
          /*disabled*/
          n[12]
        ),
        "mdc-text-field--textarea": (
          /*textarea*/
          n[14]
        ),
        "mdc-text-field--filled": (
          /*variant*/
          n[15] === "filled"
        ),
        "mdc-text-field--outlined": (
          /*variant*/
          n[15] === "outlined"
        ),
        "smui-text-field--standard": (
          /*variant*/
          n[15] === "standard" && !/*textarea*/
          n[14]
        ),
        "mdc-text-field--no-label": (
          /*noLabel*/
          n[16] || !/*$$slots*/
          n[47].label
        ),
        "mdc-text-field--with-leading-icon": (
          /*$$slots*/
          n[47].leadingIcon
        ),
        "mdc-text-field--with-trailing-icon": (
          /*$$slots*/
          n[47].trailingIcon
        ),
        "mdc-text-field--invalid": (
          /*invalid*/
          n[1]
        ),
        .../*internalClasses*/
        n[25]
      })
    },
    {
      style: u = Object.entries(
        /*internalStyles*/
        n[26]
      ).map(Bi).concat([
        /*style*/
        n[10]
      ]).join(" ")
    },
    It(
      /*$$restProps*/
      n[46],
      ["input$", "label$", "ripple$", "outline$", "helperLine$"]
    )
  ], P = {};
  for (let m = 0; m < O.length; m += 1)
    P = V(P, O[m]);
  return {
    c() {
      e = Z("div"), g && g.c(), t = Y(), j(i.$$.fragment), r = Y(), v && v.c(), l = Y(), j(o.$$.fragment), a = Y(), A && A.c(), te(e, P);
    },
    m(m, R) {
      F(m, e, R), g && g.m(e, null), X(e, t), B(i, e, null), X(e, r), v && v.m(e, null), X(e, l), B(o, e, null), X(e, a), A && A.m(e, null), n[82](e), d = !0, p || (b = [
        ee(f = At.call(null, e, {
          ripple: (
            /*ripple*/
            n[11]
          ),
          unbounded: !1,
          addClass: (
            /*addClass*/
            n[43]
          ),
          removeClass: (
            /*removeClass*/
            n[44]
          ),
          addStyle: (
            /*addStyle*/
            n[45]
          )
        })),
        ee(c = De.call(
          null,
          e,
          /*use*/
          n[8]
        )),
        ee(
          /*forwardEvents*/
          n[34].call(null, e)
        ),
        $(
          e,
          "SMUITextfieldLeadingIcon:mount",
          /*handleLeadingIconMount*/
          n[38]
        ),
        $(
          e,
          "SMUITextfieldLeadingIcon:unmount",
          /*SMUITextfieldLeadingIcon_unmount_handler_1*/
          n[83]
        ),
        $(
          e,
          "SMUITextfieldTrailingIcon:mount",
          /*handleTrailingIconMount*/
          n[39]
        ),
        $(
          e,
          "SMUITextfieldTrailingIcon:unmount",
          /*SMUITextfieldTrailingIcon_unmount_handler_1*/
          n[84]
        )
      ], p = !0);
    },
    p(m, R) {
      g && g.p && (!d || R[2] & /*$$scope*/
      33554432) && re(
        g,
        _,
        m,
        /*$$scope*/
        m[87],
        d ? ie(
          _,
          /*$$scope*/
          m[87],
          R,
          zo
        ) : le(
          /*$$scope*/
          m[87]
        ),
        yi
      );
      const z = {};
      R[2] & /*$$scope*/
      33554432 && (z.$$scope = { dirty: R, ctx: m }), i.$set(z), v && v.p && (!d || R[2] & /*$$scope*/
      33554432) && re(
        v,
        C,
        m,
        /*$$scope*/
        m[87],
        d ? ie(
          C,
          /*$$scope*/
          m[87],
          R,
          null
        ) : le(
          /*$$scope*/
          m[87]
        ),
        null
      );
      const I = {};
      R[2] & /*$$scope*/
      33554432 && (I.$$scope = { dirty: R, ctx: m }), o.$set(I), A && A.p && (!d || R[2] & /*$$scope*/
      33554432) && re(
        A,
        w,
        m,
        /*$$scope*/
        m[87],
        d ? ie(
          w,
          /*$$scope*/
          m[87],
          R,
          qo
        ) : le(
          /*$$scope*/
          m[87]
        ),
        _i
      ), te(e, P = fe(O, [
        (!d || R[0] & /*className, disabled, textarea, variant, noLabel, invalid, internalClasses*/
        33673730 | R[1] & /*$$slots*/
        65536 && s !== (s = Q({
          [
            /*className*/
            m[9]
          ]: !0,
          "mdc-text-field": !0,
          "mdc-text-field--disabled": (
            /*disabled*/
            m[12]
          ),
          "mdc-text-field--textarea": (
            /*textarea*/
            m[14]
          ),
          "mdc-text-field--filled": (
            /*variant*/
            m[15] === "filled"
          ),
          "mdc-text-field--outlined": (
            /*variant*/
            m[15] === "outlined"
          ),
          "smui-text-field--standard": (
            /*variant*/
            m[15] === "standard" && !/*textarea*/
            m[14]
          ),
          "mdc-text-field--no-label": (
            /*noLabel*/
            m[16] || !/*$$slots*/
            m[47].label
          ),
          "mdc-text-field--with-leading-icon": (
            /*$$slots*/
            m[47].leadingIcon
          ),
          "mdc-text-field--with-trailing-icon": (
            /*$$slots*/
            m[47].trailingIcon
          ),
          "mdc-text-field--invalid": (
            /*invalid*/
            m[1]
          ),
          .../*internalClasses*/
          m[25]
        }))) && { class: s },
        (!d || R[0] & /*internalStyles, style*/
        67109888 && u !== (u = Object.entries(
          /*internalStyles*/
          m[26]
        ).map(Bi).concat([
          /*style*/
          m[10]
        ]).join(" "))) && { style: u },
        R[1] & /*$$restProps*/
        32768 && It(
          /*$$restProps*/
          m[46],
          ["input$", "label$", "ripple$", "outline$", "helperLine$"]
        )
      ])), f && he(f.update) && R[0] & /*ripple*/
      2048 && f.update.call(null, {
        ripple: (
          /*ripple*/
          m[11]
        ),
        unbounded: !1,
        addClass: (
          /*addClass*/
          m[43]
        ),
        removeClass: (
          /*removeClass*/
          m[44]
        ),
        addStyle: (
          /*addStyle*/
          m[45]
        )
      }), c && he(c.update) && R[0] & /*use*/
      256 && c.update.call(
        null,
        /*use*/
        m[8]
      );
    },
    i(m) {
      d || (S(g, m), S(i.$$.fragment, m), S(v, m), S(o.$$.fragment, m), S(A, m), d = !0);
    },
    o(m) {
      L(g, m), L(i.$$.fragment, m), L(v, m), L(o.$$.fragment, m), L(A, m), d = !1;
    },
    d(m) {
      m && M(e), g && g.d(m), N(i), v && v.d(m), N(o), A && A.d(m), n[82](null), p = !1, Ce(b);
    }
  };
}
function xo(n) {
  let e, t, i, r, l, o, a, s, u, f, c, d, p, b, _, g, C, v, w = !/*textarea*/
  n[14] && /*variant*/
  n[15] !== "outlined" && Ri(n), A = (
    /*textarea*/
    (n[14] || /*variant*/
    n[15] === "outlined") && Di(n)
  );
  r = new dn({
    props: {
      key: "SMUI:textfield:icon:leading",
      value: !0,
      $$slots: { default: [ls] },
      $$scope: { ctx: n }
    }
  });
  const O = (
    /*#slots*/
    n[56].default
  ), P = ne(
    O,
    n,
    /*$$scope*/
    n[87],
    null
  ), m = [os, as], R = [];
  function z(D, W) {
    return (
      /*textarea*/
      D[14] && typeof /*value*/
      D[0] == "string" ? 0 : 1
    );
  }
  a = z(n), s = R[a] = m[a](n), f = new dn({
    props: {
      key: "SMUI:textfield:icon:leading",
      value: !1,
      $$slots: { default: [fs] },
      $$scope: { ctx: n }
    }
  });
  let I = !/*textarea*/
  n[14] && /*variant*/
  n[15] !== "outlined" && /*ripple*/
  n[11] && Fi(n), h = [
    {
      class: d = Q({
        [
          /*className*/
          n[9]
        ]: !0,
        "mdc-text-field": !0,
        "mdc-text-field--disabled": (
          /*disabled*/
          n[12]
        ),
        "mdc-text-field--textarea": (
          /*textarea*/
          n[14]
        ),
        "mdc-text-field--filled": (
          /*variant*/
          n[15] === "filled"
        ),
        "mdc-text-field--outlined": (
          /*variant*/
          n[15] === "outlined"
        ),
        "smui-text-field--standard": (
          /*variant*/
          n[15] === "standard" && !/*textarea*/
          n[14]
        ),
        "mdc-text-field--no-label": (
          /*noLabel*/
          n[16] || /*label*/
          n[17] == null && !/*$$slots*/
          n[47].label
        ),
        "mdc-text-field--label-floating": (
          /*focused*/
          n[28] || /*value*/
          n[0] != null && /*value*/
          n[0] !== ""
        ),
        "mdc-text-field--with-leading-icon": (
          /*isUninitializedValue*/
          n[35](
            /*withLeadingIcon*/
            n[22]
          ) ? (
            /*$$slots*/
            n[47].leadingIcon
          ) : (
            /*withLeadingIcon*/
            n[22]
          )
        ),
        "mdc-text-field--with-trailing-icon": (
          /*isUninitializedValue*/
          n[35](
            /*withTrailingIcon*/
            n[23]
          ) ? (
            /*$$slots*/
            n[47].trailingIcon
          ) : (
            /*withTrailingIcon*/
            n[23]
          )
        ),
        "mdc-text-field--with-internal-counter": (
          /*textarea*/
          n[14] && /*$$slots*/
          n[47].internalCounter
        ),
        "mdc-text-field--invalid": (
          /*invalid*/
          n[1]
        ),
        .../*internalClasses*/
        n[25]
      })
    },
    {
      style: p = Object.entries(
        /*internalStyles*/
        n[26]
      ).map(Pi).concat([
        /*style*/
        n[10]
      ]).join(" ")
    },
    {
      for: (
        /* suppress a11y warning, since this is wrapped */
        void 0
      )
    },
    It(
      /*$$restProps*/
      n[46],
      ["input$", "label$", "ripple$", "outline$", "helperLine$"]
    )
  ], H = {};
  for (let D = 0; D < h.length; D += 1)
    H = V(H, h[D]);
  return {
    c() {
      e = Z("label"), w && w.c(), t = Y(), A && A.c(), i = Y(), j(r.$$.fragment), l = Y(), P && P.c(), o = Y(), s.c(), u = Y(), j(f.$$.fragment), c = Y(), I && I.c(), te(e, H);
    },
    m(D, W) {
      F(D, e, W), w && w.m(e, null), X(e, t), A && A.m(e, null), X(e, i), B(r, e, null), X(e, l), P && P.m(e, null), X(e, o), R[a].m(e, null), X(e, u), B(f, e, null), X(e, c), I && I.m(e, null), n[78](e), g = !0, C || (v = [
        ee(b = At.call(null, e, {
          ripple: !/*textarea*/
          n[14] && /*variant*/
          n[15] === "filled",
          unbounded: !1,
          addClass: (
            /*addClass*/
            n[43]
          ),
          removeClass: (
            /*removeClass*/
            n[44]
          ),
          addStyle: (
            /*addStyle*/
            n[45]
          ),
          eventTarget: (
            /*inputElement*/
            n[33]
          ),
          activeTarget: (
            /*inputElement*/
            n[33]
          ),
          initPromise: (
            /*initPromise*/
            n[37]
          )
        })),
        ee(_ = De.call(
          null,
          e,
          /*use*/
          n[8]
        )),
        ee(
          /*forwardEvents*/
          n[34].call(null, e)
        ),
        $(
          e,
          "SMUITextfieldLeadingIcon:mount",
          /*handleLeadingIconMount*/
          n[38]
        ),
        $(
          e,
          "SMUITextfieldLeadingIcon:unmount",
          /*SMUITextfieldLeadingIcon_unmount_handler*/
          n[79]
        ),
        $(
          e,
          "SMUITextfieldTrailingIcon:mount",
          /*handleTrailingIconMount*/
          n[39]
        ),
        $(
          e,
          "SMUITextfieldTrailingIcon:unmount",
          /*SMUITextfieldTrailingIcon_unmount_handler*/
          n[80]
        ),
        $(
          e,
          "SMUITextfieldCharacterCounter:mount",
          /*handleCharacterCounterMount*/
          n[40]
        ),
        $(
          e,
          "SMUITextfieldCharacterCounter:unmount",
          /*SMUITextfieldCharacterCounter_unmount_handler*/
          n[81]
        )
      ], C = !0);
    },
    p(D, W) {
      !/*textarea*/
      D[14] && /*variant*/
      D[15] !== "outlined" ? w ? (w.p(D, W), W[0] & /*textarea, variant*/
      49152 && S(w, 1)) : (w = Ri(D), w.c(), S(w, 1), w.m(e, t)) : w && (pe(), L(w, 1, 1, () => {
        w = null;
      }), _e()), /*textarea*/
      D[14] || /*variant*/
      D[15] === "outlined" ? A ? (A.p(D, W), W[0] & /*textarea, variant*/
      49152 && S(A, 1)) : (A = Di(D), A.c(), S(A, 1), A.m(e, i)) : A && (pe(), L(A, 1, 1, () => {
        A = null;
      }), _e());
      const se = {};
      W[2] & /*$$scope*/
      33554432 && (se.$$scope = { dirty: W, ctx: D }), r.$set(se), P && P.p && (!g || W[2] & /*$$scope*/
      33554432) && re(
        P,
        O,
        D,
        /*$$scope*/
        D[87],
        g ? ie(
          O,
          /*$$scope*/
          D[87],
          W,
          null
        ) : le(
          /*$$scope*/
          D[87]
        ),
        null
      );
      let ue = a;
      a = z(D), a === ue ? R[a].p(D, W) : (pe(), L(R[ue], 1, 1, () => {
        R[ue] = null;
      }), _e(), s = R[a], s ? s.p(D, W) : (s = R[a] = m[a](D), s.c()), S(s, 1), s.m(e, u));
      const J = {};
      W[2] & /*$$scope*/
      33554432 && (J.$$scope = { dirty: W, ctx: D }), f.$set(J), !/*textarea*/
      D[14] && /*variant*/
      D[15] !== "outlined" && /*ripple*/
      D[11] ? I ? (I.p(D, W), W[0] & /*textarea, variant, ripple*/
      51200 && S(I, 1)) : (I = Fi(D), I.c(), S(I, 1), I.m(e, null)) : I && (pe(), L(I, 1, 1, () => {
        I = null;
      }), _e()), te(e, H = fe(h, [
        (!g || W[0] & /*className, disabled, textarea, variant, noLabel, label, focused, value, withLeadingIcon, withTrailingIcon, invalid, internalClasses*/
        314823171 | W[1] & /*$$slots*/
        65536 && d !== (d = Q({
          [
            /*className*/
            D[9]
          ]: !0,
          "mdc-text-field": !0,
          "mdc-text-field--disabled": (
            /*disabled*/
            D[12]
          ),
          "mdc-text-field--textarea": (
            /*textarea*/
            D[14]
          ),
          "mdc-text-field--filled": (
            /*variant*/
            D[15] === "filled"
          ),
          "mdc-text-field--outlined": (
            /*variant*/
            D[15] === "outlined"
          ),
          "smui-text-field--standard": (
            /*variant*/
            D[15] === "standard" && !/*textarea*/
            D[14]
          ),
          "mdc-text-field--no-label": (
            /*noLabel*/
            D[16] || /*label*/
            D[17] == null && !/*$$slots*/
            D[47].label
          ),
          "mdc-text-field--label-floating": (
            /*focused*/
            D[28] || /*value*/
            D[0] != null && /*value*/
            D[0] !== ""
          ),
          "mdc-text-field--with-leading-icon": (
            /*isUninitializedValue*/
            D[35](
              /*withLeadingIcon*/
              D[22]
            ) ? (
              /*$$slots*/
              D[47].leadingIcon
            ) : (
              /*withLeadingIcon*/
              D[22]
            )
          ),
          "mdc-text-field--with-trailing-icon": (
            /*isUninitializedValue*/
            D[35](
              /*withTrailingIcon*/
              D[23]
            ) ? (
              /*$$slots*/
              D[47].trailingIcon
            ) : (
              /*withTrailingIcon*/
              D[23]
            )
          ),
          "mdc-text-field--with-internal-counter": (
            /*textarea*/
            D[14] && /*$$slots*/
            D[47].internalCounter
          ),
          "mdc-text-field--invalid": (
            /*invalid*/
            D[1]
          ),
          .../*internalClasses*/
          D[25]
        }))) && { class: d },
        (!g || W[0] & /*internalStyles, style*/
        67109888 && p !== (p = Object.entries(
          /*internalStyles*/
          D[26]
        ).map(Pi).concat([
          /*style*/
          D[10]
        ]).join(" "))) && { style: p },
        {
          for: (
            /* suppress a11y warning, since this is wrapped */
            void 0
          )
        },
        W[1] & /*$$restProps*/
        32768 && It(
          /*$$restProps*/
          D[46],
          ["input$", "label$", "ripple$", "outline$", "helperLine$"]
        )
      ])), b && he(b.update) && W[0] & /*textarea, variant*/
      49152 | W[1] & /*inputElement*/
      4 && b.update.call(null, {
        ripple: !/*textarea*/
        D[14] && /*variant*/
        D[15] === "filled",
        unbounded: !1,
        addClass: (
          /*addClass*/
          D[43]
        ),
        removeClass: (
          /*removeClass*/
          D[44]
        ),
        addStyle: (
          /*addStyle*/
          D[45]
        ),
        eventTarget: (
          /*inputElement*/
          D[33]
        ),
        activeTarget: (
          /*inputElement*/
          D[33]
        ),
        initPromise: (
          /*initPromise*/
          D[37]
        )
      }), _ && he(_.update) && W[0] & /*use*/
      256 && _.update.call(
        null,
        /*use*/
        D[8]
      );
    },
    i(D) {
      g || (S(w), S(A), S(r.$$.fragment, D), S(P, D), S(s), S(f.$$.fragment, D), S(I), g = !0);
    },
    o(D) {
      L(w), L(A), L(r.$$.fragment, D), L(P, D), L(s), L(f.$$.fragment, D), L(I), g = !1;
    },
    d(D) {
      D && M(e), w && w.d(), A && A.d(), N(r), P && P.d(D), R[a].d(), N(f), I && I.d(), n[78](null), C = !1, Ce(v);
    }
  };
}
function es(n) {
  let e;
  const t = (
    /*#slots*/
    n[56].leadingIcon
  ), i = ne(
    t,
    n,
    /*$$scope*/
    n[87],
    vi
  );
  return {
    c() {
      i && i.c();
    },
    m(r, l) {
      i && i.m(r, l), e = !0;
    },
    p(r, l) {
      i && i.p && (!e || l[2] & /*$$scope*/
      33554432) && re(
        i,
        t,
        r,
        /*$$scope*/
        r[87],
        e ? ie(
          t,
          /*$$scope*/
          r[87],
          l,
          Go
        ) : le(
          /*$$scope*/
          r[87]
        ),
        vi
      );
    },
    i(r) {
      e || (S(i, r), e = !0);
    },
    o(r) {
      L(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function ts(n) {
  let e;
  const t = (
    /*#slots*/
    n[56].trailingIcon
  ), i = ne(
    t,
    n,
    /*$$scope*/
    n[87],
    bi
  );
  return {
    c() {
      i && i.c();
    },
    m(r, l) {
      i && i.m(r, l), e = !0;
    },
    p(r, l) {
      i && i.p && (!e || l[2] & /*$$scope*/
      33554432) && re(
        i,
        t,
        r,
        /*$$scope*/
        r[87],
        e ? ie(
          t,
          /*$$scope*/
          r[87],
          l,
          Vo
        ) : le(
          /*$$scope*/
          r[87]
        ),
        bi
      );
    },
    i(r) {
      e || (S(i, r), e = !0);
    },
    o(r) {
      L(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function Ri(n) {
  let e, t, i, r = (
    /*variant*/
    n[15] === "filled" && wi()
  ), l = !/*noLabel*/
  n[16] && /*label*/
  (n[17] != null || /*$$slots*/
  n[47].label) && Oi(n);
  return {
    c() {
      r && r.c(), e = Y(), l && l.c(), t = Ee();
    },
    m(o, a) {
      r && r.m(o, a), F(o, e, a), l && l.m(o, a), F(o, t, a), i = !0;
    },
    p(o, a) {
      /*variant*/
      o[15] === "filled" ? r || (r = wi(), r.c(), r.m(e.parentNode, e)) : r && (r.d(1), r = null), !/*noLabel*/
      o[16] && /*label*/
      (o[17] != null || /*$$slots*/
      o[47].label) ? l ? (l.p(o, a), a[0] & /*noLabel, label*/
      196608 | a[1] & /*$$slots*/
      65536 && S(l, 1)) : (l = Oi(o), l.c(), S(l, 1), l.m(t.parentNode, t)) : l && (pe(), L(l, 1, 1, () => {
        l = null;
      }), _e());
    },
    i(o) {
      i || (S(l), i = !0);
    },
    o(o) {
      L(l), i = !1;
    },
    d(o) {
      o && (M(e), M(t)), r && r.d(o), l && l.d(o);
    }
  };
}
function wi(n) {
  let e;
  return {
    c() {
      e = Z("span"), U(e, "class", "mdc-text-field__ripple");
    },
    m(t, i) {
      F(t, e, i);
    },
    d(t) {
      t && M(e);
    }
  };
}
function Oi(n) {
  let e, t;
  const i = [
    {
      floatAbove: (
        /*focused*/
        n[28] || /*value*/
        n[0] != null && /*value*/
        n[0] !== "" && (typeof /*value*/
        n[0] != "number" || !isNaN(
          /*value*/
          n[0]
        ))
      )
    },
    { required: (
      /*required*/
      n[13]
    ) },
    { wrapped: !0 },
    Me(
      /*$$restProps*/
      n[46],
      "label$"
    )
  ];
  let r = {
    $$slots: { default: [ns] },
    $$scope: { ctx: n }
  };
  for (let l = 0; l < i.length; l += 1)
    r = V(r, i[l]);
  return e = new Gr({ props: r }), n[57](e), {
    c() {
      j(e.$$.fragment);
    },
    m(l, o) {
      B(e, l, o), t = !0;
    },
    p(l, o) {
      const a = o[0] & /*focused, value, required*/
      268443649 | o[1] & /*$$restProps*/
      32768 ? fe(i, [
        o[0] & /*focused, value*/
        268435457 && {
          floatAbove: (
            /*focused*/
            l[28] || /*value*/
            l[0] != null && /*value*/
            l[0] !== "" && (typeof /*value*/
            l[0] != "number" || !isNaN(
              /*value*/
              l[0]
            ))
          )
        },
        o[0] & /*required*/
        8192 && { required: (
          /*required*/
          l[13]
        ) },
        i[2],
        o[1] & /*$$restProps*/
        32768 && ye(Me(
          /*$$restProps*/
          l[46],
          "label$"
        ))
      ]) : {};
      o[0] & /*label*/
      131072 | o[2] & /*$$scope*/
      33554432 && (a.$$scope = { dirty: o, ctx: l }), e.$set(a);
    },
    i(l) {
      t || (S(e.$$.fragment, l), t = !0);
    },
    o(l) {
      L(e.$$.fragment, l), t = !1;
    },
    d(l) {
      n[57](null), N(e, l);
    }
  };
}
function ns(n) {
  let e = (
    /*label*/
    (n[17] == null ? "" : (
      /*label*/
      n[17]
    )) + ""
  ), t, i;
  const r = (
    /*#slots*/
    n[56].label
  ), l = ne(
    r,
    n,
    /*$$scope*/
    n[87],
    ki
  );
  return {
    c() {
      t = ke(e), l && l.c();
    },
    m(o, a) {
      F(o, t, a), l && l.m(o, a), i = !0;
    },
    p(o, a) {
      (!i || a[0] & /*label*/
      131072) && e !== (e = /*label*/
      (o[17] == null ? "" : (
        /*label*/
        o[17]
      )) + "") && We(t, e), l && l.p && (!i || a[2] & /*$$scope*/
      33554432) && re(
        l,
        r,
        o,
        /*$$scope*/
        o[87],
        i ? ie(
          r,
          /*$$scope*/
          o[87],
          a,
          Jo
        ) : le(
          /*$$scope*/
          o[87]
        ),
        ki
      );
    },
    i(o) {
      i || (S(l, o), i = !0);
    },
    o(o) {
      L(l, o), i = !1;
    },
    d(o) {
      o && M(t), l && l.d(o);
    }
  };
}
function Di(n) {
  let e, t;
  const i = [
    {
      noLabel: (
        /*noLabel*/
        n[16] || /*label*/
        n[17] == null && !/*$$slots*/
        n[47].label
      )
    },
    Me(
      /*$$restProps*/
      n[46],
      "outline$"
    )
  ];
  let r = {
    $$slots: { default: [rs] },
    $$scope: { ctx: n }
  };
  for (let l = 0; l < i.length; l += 1)
    r = V(r, i[l]);
  return e = new Eo({ props: r }), n[59](e), {
    c() {
      j(e.$$.fragment);
    },
    m(l, o) {
      B(e, l, o), t = !0;
    },
    p(l, o) {
      const a = o[0] & /*noLabel, label*/
      196608 | o[1] & /*$$slots, $$restProps*/
      98304 ? fe(i, [
        o[0] & /*noLabel, label*/
        196608 | o[1] & /*$$slots*/
        65536 && {
          noLabel: (
            /*noLabel*/
            l[16] || /*label*/
            l[17] == null && !/*$$slots*/
            l[47].label
          )
        },
        o[1] & /*$$restProps*/
        32768 && ye(Me(
          /*$$restProps*/
          l[46],
          "outline$"
        ))
      ]) : {};
      o[0] & /*focused, value, required, floatingLabel, label, noLabel*/
      268640289 | o[1] & /*$$restProps, $$slots*/
      98304 | o[2] & /*$$scope*/
      33554432 && (a.$$scope = { dirty: o, ctx: l }), e.$set(a);
    },
    i(l) {
      t || (S(e.$$.fragment, l), t = !0);
    },
    o(l) {
      L(e.$$.fragment, l), t = !1;
    },
    d(l) {
      n[59](null), N(e, l);
    }
  };
}
function Ti(n) {
  let e, t;
  const i = [
    {
      floatAbove: (
        /*focused*/
        n[28] || /*value*/
        n[0] != null && /*value*/
        n[0] !== "" && (typeof /*value*/
        n[0] != "number" || !isNaN(
          /*value*/
          n[0]
        ))
      )
    },
    { required: (
      /*required*/
      n[13]
    ) },
    { wrapped: !0 },
    Me(
      /*$$restProps*/
      n[46],
      "label$"
    )
  ];
  let r = {
    $$slots: { default: [is] },
    $$scope: { ctx: n }
  };
  for (let l = 0; l < i.length; l += 1)
    r = V(r, i[l]);
  return e = new Gr({ props: r }), n[58](e), {
    c() {
      j(e.$$.fragment);
    },
    m(l, o) {
      B(e, l, o), t = !0;
    },
    p(l, o) {
      const a = o[0] & /*focused, value, required*/
      268443649 | o[1] & /*$$restProps*/
      32768 ? fe(i, [
        o[0] & /*focused, value*/
        268435457 && {
          floatAbove: (
            /*focused*/
            l[28] || /*value*/
            l[0] != null && /*value*/
            l[0] !== "" && (typeof /*value*/
            l[0] != "number" || !isNaN(
              /*value*/
              l[0]
            ))
          )
        },
        o[0] & /*required*/
        8192 && { required: (
          /*required*/
          l[13]
        ) },
        i[2],
        o[1] & /*$$restProps*/
        32768 && ye(Me(
          /*$$restProps*/
          l[46],
          "label$"
        ))
      ]) : {};
      o[0] & /*label*/
      131072 | o[2] & /*$$scope*/
      33554432 && (a.$$scope = { dirty: o, ctx: l }), e.$set(a);
    },
    i(l) {
      t || (S(e.$$.fragment, l), t = !0);
    },
    o(l) {
      L(e.$$.fragment, l), t = !1;
    },
    d(l) {
      n[58](null), N(e, l);
    }
  };
}
function is(n) {
  let e = (
    /*label*/
    (n[17] == null ? "" : (
      /*label*/
      n[17]
    )) + ""
  ), t, i;
  const r = (
    /*#slots*/
    n[56].label
  ), l = ne(
    r,
    n,
    /*$$scope*/
    n[87],
    Li
  );
  return {
    c() {
      t = ke(e), l && l.c();
    },
    m(o, a) {
      F(o, t, a), l && l.m(o, a), i = !0;
    },
    p(o, a) {
      (!i || a[0] & /*label*/
      131072) && e !== (e = /*label*/
      (o[17] == null ? "" : (
        /*label*/
        o[17]
      )) + "") && We(t, e), l && l.p && (!i || a[2] & /*$$scope*/
      33554432) && re(
        l,
        r,
        o,
        /*$$scope*/
        o[87],
        i ? ie(
          r,
          /*$$scope*/
          o[87],
          a,
          Qo
        ) : le(
          /*$$scope*/
          o[87]
        ),
        Li
      );
    },
    i(o) {
      i || (S(l, o), i = !0);
    },
    o(o) {
      L(l, o), i = !1;
    },
    d(o) {
      o && M(t), l && l.d(o);
    }
  };
}
function rs(n) {
  let e, t, i = !/*noLabel*/
  n[16] && /*label*/
  (n[17] != null || /*$$slots*/
  n[47].label) && Ti(n);
  return {
    c() {
      i && i.c(), e = Ee();
    },
    m(r, l) {
      i && i.m(r, l), F(r, e, l), t = !0;
    },
    p(r, l) {
      !/*noLabel*/
      r[16] && /*label*/
      (r[17] != null || /*$$slots*/
      r[47].label) ? i ? (i.p(r, l), l[0] & /*noLabel, label*/
      196608 | l[1] & /*$$slots*/
      65536 && S(i, 1)) : (i = Ti(r), i.c(), S(i, 1), i.m(e.parentNode, e)) : i && (pe(), L(i, 1, 1, () => {
        i = null;
      }), _e());
    },
    i(r) {
      t || (S(i), t = !0);
    },
    o(r) {
      L(i), t = !1;
    },
    d(r) {
      r && M(e), i && i.d(r);
    }
  };
}
function ls(n) {
  let e;
  const t = (
    /*#slots*/
    n[56].leadingIcon
  ), i = ne(
    t,
    n,
    /*$$scope*/
    n[87],
    Ei
  );
  return {
    c() {
      i && i.c();
    },
    m(r, l) {
      i && i.m(r, l), e = !0;
    },
    p(r, l) {
      i && i.p && (!e || l[2] & /*$$scope*/
      33554432) && re(
        i,
        t,
        r,
        /*$$scope*/
        r[87],
        e ? ie(
          t,
          /*$$scope*/
          r[87],
          l,
          Yo
        ) : le(
          /*$$scope*/
          r[87]
        ),
        Ei
      );
    },
    i(r) {
      e || (S(i, r), e = !0);
    },
    o(r) {
      L(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function as(n) {
  let e, t, i, r, l, o, a, s, u, f;
  const c = (
    /*#slots*/
    n[56].prefix
  ), d = ne(
    c,
    n,
    /*$$scope*/
    n[87],
    Si
  );
  let p = (
    /*prefix*/
    n[20] != null && Hi(n)
  );
  const b = [
    { type: (
      /*type*/
      n[18]
    ) },
    { disabled: (
      /*disabled*/
      n[12]
    ) },
    { required: (
      /*required*/
      n[13]
    ) },
    { updateInvalid: (
      /*updateInvalid*/
      n[19]
    ) },
    { "aria-controls": (
      /*helperId*/
      n[27]
    ) },
    { "aria-describedby": (
      /*helperId*/
      n[27]
    ) },
    /*noLabel*/
    n[16] && /*label*/
    n[17] != null ? { placeholder: (
      /*label*/
      n[17]
    ) } : {},
    Me(
      /*$$restProps*/
      n[46],
      "input$"
    )
  ];
  function _(m) {
    n[69](m);
  }
  function g(m) {
    n[70](m);
  }
  function C(m) {
    n[71](m);
  }
  function v(m) {
    n[72](m);
  }
  let w = {};
  for (let m = 0; m < b.length; m += 1)
    w = V(w, b[m]);
  /*value*/
  n[0] !== void 0 && (w.value = /*value*/
  n[0]), /*files*/
  n[3] !== void 0 && (w.files = /*files*/
  n[3]), /*dirty*/
  n[4] !== void 0 && (w.dirty = /*dirty*/
  n[4]), /*invalid*/
  n[1] !== void 0 && (w.invalid = /*invalid*/
  n[1]), i = new Uo({ props: w }), n[68](i), x.push(() => Ye(i, "value", _)), x.push(() => Ye(i, "files", g)), x.push(() => Ye(i, "dirty", C)), x.push(() => Ye(i, "invalid", v)), i.$on(
    "blur",
    /*blur_handler_2*/
    n[73]
  ), i.$on(
    "focus",
    /*focus_handler_2*/
    n[74]
  ), i.$on(
    "blur",
    /*blur_handler_3*/
    n[75]
  ), i.$on(
    "focus",
    /*focus_handler_3*/
    n[76]
  );
  let A = (
    /*suffix*/
    n[21] != null && Mi(n)
  );
  const O = (
    /*#slots*/
    n[56].suffix
  ), P = ne(
    O,
    n,
    /*$$scope*/
    n[87],
    Ai
  );
  return {
    c() {
      d && d.c(), e = Y(), p && p.c(), t = Y(), j(i.$$.fragment), s = Y(), A && A.c(), u = Y(), P && P.c();
    },
    m(m, R) {
      d && d.m(m, R), F(m, e, R), p && p.m(m, R), F(m, t, R), B(i, m, R), F(m, s, R), A && A.m(m, R), F(m, u, R), P && P.m(m, R), f = !0;
    },
    p(m, R) {
      d && d.p && (!f || R[2] & /*$$scope*/
      33554432) && re(
        d,
        c,
        m,
        /*$$scope*/
        m[87],
        f ? ie(
          c,
          /*$$scope*/
          m[87],
          R,
          Xo
        ) : le(
          /*$$scope*/
          m[87]
        ),
        Si
      ), /*prefix*/
      m[20] != null ? p ? (p.p(m, R), R[0] & /*prefix*/
      1048576 && S(p, 1)) : (p = Hi(m), p.c(), S(p, 1), p.m(t.parentNode, t)) : p && (pe(), L(p, 1, 1, () => {
        p = null;
      }), _e());
      const z = R[0] & /*type, disabled, required, updateInvalid, helperId, noLabel, label*/
      135213056 | R[1] & /*$$restProps*/
      32768 ? fe(b, [
        R[0] & /*type*/
        262144 && { type: (
          /*type*/
          m[18]
        ) },
        R[0] & /*disabled*/
        4096 && { disabled: (
          /*disabled*/
          m[12]
        ) },
        R[0] & /*required*/
        8192 && { required: (
          /*required*/
          m[13]
        ) },
        R[0] & /*updateInvalid*/
        524288 && { updateInvalid: (
          /*updateInvalid*/
          m[19]
        ) },
        R[0] & /*helperId*/
        134217728 && { "aria-controls": (
          /*helperId*/
          m[27]
        ) },
        R[0] & /*helperId*/
        134217728 && { "aria-describedby": (
          /*helperId*/
          m[27]
        ) },
        R[0] & /*noLabel, label*/
        196608 && ye(
          /*noLabel*/
          m[16] && /*label*/
          m[17] != null ? { placeholder: (
            /*label*/
            m[17]
          ) } : {}
        ),
        R[1] & /*$$restProps*/
        32768 && ye(Me(
          /*$$restProps*/
          m[46],
          "input$"
        ))
      ]) : {};
      !r && R[0] & /*value*/
      1 && (r = !0, z.value = /*value*/
      m[0], Ze(() => r = !1)), !l && R[0] & /*files*/
      8 && (l = !0, z.files = /*files*/
      m[3], Ze(() => l = !1)), !o && R[0] & /*dirty*/
      16 && (o = !0, z.dirty = /*dirty*/
      m[4], Ze(() => o = !1)), !a && R[0] & /*invalid*/
      2 && (a = !0, z.invalid = /*invalid*/
      m[1], Ze(() => a = !1)), i.$set(z), /*suffix*/
      m[21] != null ? A ? (A.p(m, R), R[0] & /*suffix*/
      2097152 && S(A, 1)) : (A = Mi(m), A.c(), S(A, 1), A.m(u.parentNode, u)) : A && (pe(), L(A, 1, 1, () => {
        A = null;
      }), _e()), P && P.p && (!f || R[2] & /*$$scope*/
      33554432) && re(
        P,
        O,
        m,
        /*$$scope*/
        m[87],
        f ? ie(
          O,
          /*$$scope*/
          m[87],
          R,
          Ko
        ) : le(
          /*$$scope*/
          m[87]
        ),
        Ai
      );
    },
    i(m) {
      f || (S(d, m), S(p), S(i.$$.fragment, m), S(A), S(P, m), f = !0);
    },
    o(m) {
      L(d, m), L(p), L(i.$$.fragment, m), L(A), L(P, m), f = !1;
    },
    d(m) {
      m && (M(e), M(t), M(s), M(u)), d && d.d(m), p && p.d(m), n[68](null), N(i, m), A && A.d(m), P && P.d(m);
    }
  };
}
function os(n) {
  let e, t, i, r, l, o, a, s;
  const u = [
    { disabled: (
      /*disabled*/
      n[12]
    ) },
    { required: (
      /*required*/
      n[13]
    ) },
    { updateInvalid: (
      /*updateInvalid*/
      n[19]
    ) },
    { "aria-controls": (
      /*helperId*/
      n[27]
    ) },
    { "aria-describedby": (
      /*helperId*/
      n[27]
    ) },
    Me(
      /*$$restProps*/
      n[46],
      "input$"
    )
  ];
  function f(g) {
    n[61](g);
  }
  function c(g) {
    n[62](g);
  }
  function d(g) {
    n[63](g);
  }
  let p = {};
  for (let g = 0; g < u.length; g += 1)
    p = V(p, u[g]);
  /*value*/
  n[0] !== void 0 && (p.value = /*value*/
  n[0]), /*dirty*/
  n[4] !== void 0 && (p.dirty = /*dirty*/
  n[4]), /*invalid*/
  n[1] !== void 0 && (p.invalid = /*invalid*/
  n[1]), t = new No({ props: p }), n[60](t), x.push(() => Ye(t, "value", f)), x.push(() => Ye(t, "dirty", c)), x.push(() => Ye(t, "invalid", d)), t.$on(
    "blur",
    /*blur_handler*/
    n[64]
  ), t.$on(
    "focus",
    /*focus_handler*/
    n[65]
  ), t.$on(
    "blur",
    /*blur_handler_1*/
    n[66]
  ), t.$on(
    "focus",
    /*focus_handler_1*/
    n[67]
  );
  const b = (
    /*#slots*/
    n[56].internalCounter
  ), _ = ne(
    b,
    n,
    /*$$scope*/
    n[87],
    Ii
  );
  return {
    c() {
      e = Z("span"), j(t.$$.fragment), o = Y(), _ && _.c(), U(e, "class", a = Q({
        "mdc-text-field__resizer": !("input$resizable" in /*$$restProps*/
        n[46]) || /*$$restProps*/
        n[46].input$resizable
      }));
    },
    m(g, C) {
      F(g, e, C), B(t, e, null), X(e, o), _ && _.m(e, null), s = !0;
    },
    p(g, C) {
      const v = C[0] & /*disabled, required, updateInvalid, helperId*/
      134754304 | C[1] & /*$$restProps*/
      32768 ? fe(u, [
        C[0] & /*disabled*/
        4096 && { disabled: (
          /*disabled*/
          g[12]
        ) },
        C[0] & /*required*/
        8192 && { required: (
          /*required*/
          g[13]
        ) },
        C[0] & /*updateInvalid*/
        524288 && { updateInvalid: (
          /*updateInvalid*/
          g[19]
        ) },
        C[0] & /*helperId*/
        134217728 && { "aria-controls": (
          /*helperId*/
          g[27]
        ) },
        C[0] & /*helperId*/
        134217728 && { "aria-describedby": (
          /*helperId*/
          g[27]
        ) },
        C[1] & /*$$restProps*/
        32768 && ye(Me(
          /*$$restProps*/
          g[46],
          "input$"
        ))
      ]) : {};
      !i && C[0] & /*value*/
      1 && (i = !0, v.value = /*value*/
      g[0], Ze(() => i = !1)), !r && C[0] & /*dirty*/
      16 && (r = !0, v.dirty = /*dirty*/
      g[4], Ze(() => r = !1)), !l && C[0] & /*invalid*/
      2 && (l = !0, v.invalid = /*invalid*/
      g[1], Ze(() => l = !1)), t.$set(v), _ && _.p && (!s || C[2] & /*$$scope*/
      33554432) && re(
        _,
        b,
        g,
        /*$$scope*/
        g[87],
        s ? ie(
          b,
          /*$$scope*/
          g[87],
          C,
          Zo
        ) : le(
          /*$$scope*/
          g[87]
        ),
        Ii
      ), (!s || C[1] & /*$$restProps*/
      32768 && a !== (a = Q({
        "mdc-text-field__resizer": !("input$resizable" in /*$$restProps*/
        g[46]) || /*$$restProps*/
        g[46].input$resizable
      }))) && U(e, "class", a);
    },
    i(g) {
      s || (S(t.$$.fragment, g), S(_, g), s = !0);
    },
    o(g) {
      L(t.$$.fragment, g), L(_, g), s = !1;
    },
    d(g) {
      g && M(e), n[60](null), N(t), _ && _.d(g);
    }
  };
}
function Hi(n) {
  let e, t;
  return e = new Do({
    props: {
      $$slots: { default: [ss] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      j(e.$$.fragment);
    },
    m(i, r) {
      B(e, i, r), t = !0;
    },
    p(i, r) {
      const l = {};
      r[0] & /*prefix*/
      1048576 | r[2] & /*$$scope*/
      33554432 && (l.$$scope = { dirty: r, ctx: i }), e.$set(l);
    },
    i(i) {
      t || (S(e.$$.fragment, i), t = !0);
    },
    o(i) {
      L(e.$$.fragment, i), t = !1;
    },
    d(i) {
      N(e, i);
    }
  };
}
function ss(n) {
  let e;
  return {
    c() {
      e = ke(
        /*prefix*/
        n[20]
      );
    },
    m(t, i) {
      F(t, e, i);
    },
    p(t, i) {
      i[0] & /*prefix*/
      1048576 && We(
        e,
        /*prefix*/
        t[20]
      );
    },
    d(t) {
      t && M(e);
    }
  };
}
function Mi(n) {
  let e, t;
  return e = new To({
    props: {
      $$slots: { default: [us] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      j(e.$$.fragment);
    },
    m(i, r) {
      B(e, i, r), t = !0;
    },
    p(i, r) {
      const l = {};
      r[0] & /*suffix*/
      2097152 | r[2] & /*$$scope*/
      33554432 && (l.$$scope = { dirty: r, ctx: i }), e.$set(l);
    },
    i(i) {
      t || (S(e.$$.fragment, i), t = !0);
    },
    o(i) {
      L(e.$$.fragment, i), t = !1;
    },
    d(i) {
      N(e, i);
    }
  };
}
function us(n) {
  let e;
  return {
    c() {
      e = ke(
        /*suffix*/
        n[21]
      );
    },
    m(t, i) {
      F(t, e, i);
    },
    p(t, i) {
      i[0] & /*suffix*/
      2097152 && We(
        e,
        /*suffix*/
        t[21]
      );
    },
    d(t) {
      t && M(e);
    }
  };
}
function fs(n) {
  let e;
  const t = (
    /*#slots*/
    n[56].trailingIcon
  ), i = ne(
    t,
    n,
    /*$$scope*/
    n[87],
    Ci
  );
  return {
    c() {
      i && i.c();
    },
    m(r, l) {
      i && i.m(r, l), e = !0;
    },
    p(r, l) {
      i && i.p && (!e || l[2] & /*$$scope*/
      33554432) && re(
        i,
        t,
        r,
        /*$$scope*/
        r[87],
        e ? ie(
          t,
          /*$$scope*/
          r[87],
          l,
          Wo
        ) : le(
          /*$$scope*/
          r[87]
        ),
        Ci
      );
    },
    i(r) {
      e || (S(i, r), e = !0);
    },
    o(r) {
      L(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function Fi(n) {
  let e, t;
  const i = [Me(
    /*$$restProps*/
    n[46],
    "ripple$"
  )];
  let r = {};
  for (let l = 0; l < i.length; l += 1)
    r = V(r, i[l]);
  return e = new Ao({ props: r }), n[77](e), {
    c() {
      j(e.$$.fragment);
    },
    m(l, o) {
      B(e, l, o), t = !0;
    },
    p(l, o) {
      const a = o[1] & /*$$restProps*/
      32768 ? fe(i, [ye(Me(
        /*$$restProps*/
        l[46],
        "ripple$"
      ))]) : {};
      e.$set(a);
    },
    i(l) {
      t || (S(e.$$.fragment, l), t = !0);
    },
    o(l) {
      L(e.$$.fragment, l), t = !1;
    },
    d(l) {
      n[77](null), N(e, l);
    }
  };
}
function Ui(n) {
  let e, t;
  const i = [Me(
    /*$$restProps*/
    n[46],
    "helperLine$"
  )];
  let r = {
    $$slots: { default: [cs] },
    $$scope: { ctx: n }
  };
  for (let l = 0; l < i.length; l += 1)
    r = V(r, i[l]);
  return e = new Oo({ props: r }), e.$on(
    "SMUITextfieldHelperText:id",
    /*handleHelperTextId*/
    n[41]
  ), e.$on(
    "SMUITextfieldHelperText:mount",
    /*handleHelperTextMount*/
    n[42]
  ), e.$on(
    "SMUITextfieldHelperText:unmount",
    /*SMUITextfieldHelperText_unmount_handler*/
    n[85]
  ), e.$on(
    "SMUITextfieldCharacterCounter:mount",
    /*handleCharacterCounterMount*/
    n[40]
  ), e.$on(
    "SMUITextfieldCharacterCounter:unmount",
    /*SMUITextfieldCharacterCounter_unmount_handler_1*/
    n[86]
  ), {
    c() {
      j(e.$$.fragment);
    },
    m(l, o) {
      B(e, l, o), t = !0;
    },
    p(l, o) {
      const a = o[1] & /*$$restProps*/
      32768 ? fe(i, [ye(Me(
        /*$$restProps*/
        l[46],
        "helperLine$"
      ))]) : {};
      o[2] & /*$$scope*/
      33554432 && (a.$$scope = { dirty: o, ctx: l }), e.$set(a);
    },
    i(l) {
      t || (S(e.$$.fragment, l), t = !0);
    },
    o(l) {
      L(e.$$.fragment, l), t = !1;
    },
    d(l) {
      N(e, l);
    }
  };
}
function cs(n) {
  let e;
  const t = (
    /*#slots*/
    n[56].helper
  ), i = ne(
    t,
    n,
    /*$$scope*/
    n[87],
    pi
  );
  return {
    c() {
      i && i.c();
    },
    m(r, l) {
      i && i.m(r, l), e = !0;
    },
    p(r, l) {
      i && i.p && (!e || l[2] & /*$$scope*/
      33554432) && re(
        i,
        t,
        r,
        /*$$scope*/
        r[87],
        e ? ie(
          t,
          /*$$scope*/
          r[87],
          l,
          jo
        ) : le(
          /*$$scope*/
          r[87]
        ),
        pi
      );
    },
    i(r) {
      e || (S(i, r), e = !0);
    },
    o(r) {
      L(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function ds(n) {
  let e, t, i, r, l;
  const o = [xo, $o], a = [];
  function s(f, c) {
    return (
      /*valued*/
      f[36] ? 0 : 1
    );
  }
  e = s(n), t = a[e] = o[e](n);
  let u = (
    /*$$slots*/
    n[47].helper && Ui(n)
  );
  return {
    c() {
      t.c(), i = Y(), u && u.c(), r = Ee();
    },
    m(f, c) {
      a[e].m(f, c), F(f, i, c), u && u.m(f, c), F(f, r, c), l = !0;
    },
    p(f, c) {
      t.p(f, c), /*$$slots*/
      f[47].helper ? u ? (u.p(f, c), c[1] & /*$$slots*/
      65536 && S(u, 1)) : (u = Ui(f), u.c(), S(u, 1), u.m(r.parentNode, r)) : u && (pe(), L(u, 1, 1, () => {
        u = null;
      }), _e());
    },
    i(f) {
      l || (S(t), S(u), l = !0);
    },
    o(f) {
      L(t), L(u), l = !1;
    },
    d(f) {
      f && (M(i), M(r)), a[e].d(f), u && u.d(f);
    }
  };
}
const Pi = ([n, e]) => `${n}: ${e};`, Bi = ([n, e]) => `${n}: ${e};`;
function ms(n, e, t) {
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
  let l = oe(e, r), { $$slots: o = {}, $$scope: a } = e;
  const s = Or(o), { applyPassive: u } = qr, f = Pe(Re());
  let c = () => {
  };
  function d(k) {
    return k === c;
  }
  let { use: p = [] } = e, { class: b = "" } = e, { style: _ = "" } = e, { ripple: g = !0 } = e, { disabled: C = !1 } = e, { required: v = !1 } = e, { textarea: w = !1 } = e, { variant: A = w ? "outlined" : "standard" } = e, { noLabel: O = !1 } = e, { label: P = void 0 } = e, { type: m = "text" } = e, { value: R = l.input$emptyValueUndefined ? void 0 : c } = e, { files: z = c } = e;
  const I = !d(R) || !d(z);
  d(R) && (R = void 0), d(z) && (z = null);
  let { invalid: h = c } = e, { updateInvalid: H = d(h) } = e;
  d(h) && (h = !1);
  let { dirty: D = !1 } = e, { prefix: W = void 0 } = e, { suffix: se = void 0 } = e, { validateOnValueChange: ue = H } = e, { useNativeValidation: J = H } = e, { withLeadingIcon: T = c } = e, { withTrailingIcon: y = c } = e, { input: G = void 0 } = e, { floatingLabel: me = void 0 } = e, { lineRipple: Ae = void 0 } = e, { notchedOutline: qe = void 0 } = e, Ve, ve, Ge = {}, He = {}, tt, nt = !1, vt = Oe("SMUI:addLayoutListener"), K, je, Qe = new Promise((k) => je = k), at, Xe, yt, dt, Lt = R;
  vt && (K = vt(Kn)), Ke(() => {
    if (t(54, ve = new mo(
      {
        // getRootAdapterMethods_
        addClass: en,
        removeClass: tn,
        hasClass: Xt,
        registerTextFieldInteractionHandler: (k, Ne) => nn().addEventListener(k, Ne),
        deregisterTextFieldInteractionHandler: (k, Ne) => nn().removeEventListener(k, Ne),
        registerValidationAttributeChangeHandler: (k) => {
          const Ne = (gn) => gn.map((pn) => pn.attributeName).filter((pn) => pn), Xn = new MutationObserver((gn) => {
            J && k(Ne(gn));
          }), Xl = { attributes: !0 };
          return G && Xn.observe(G.getElement(), Xl), Xn;
        },
        deregisterValidationAttributeChangeHandler: (k) => {
          k.disconnect();
        },
        // getInputAdapterMethods_
        getNativeInput: () => {
          var k;
          return (k = G == null ? void 0 : G.getElement()) !== null && k !== void 0 ? k : null;
        },
        setInputAttr: (k, Ne) => {
          G == null || G.addAttr(k, Ne);
        },
        removeInputAttr: (k) => {
          G == null || G.removeAttr(k);
        },
        isFocused: () => document.activeElement === (G == null ? void 0 : G.getElement()),
        registerInputInteractionHandler: (k, Ne) => {
          G == null || G.getElement().addEventListener(k, Ne, u());
        },
        deregisterInputInteractionHandler: (k, Ne) => {
          G == null || G.getElement().removeEventListener(k, Ne, u());
        },
        // getLabelAdapterMethods_
        floatLabel: (k) => me && me.float(k),
        getLabelWidth: () => me ? me.getWidth() : 0,
        hasLabel: () => !!me,
        shakeLabel: (k) => me && me.shake(k),
        setLabelRequired: (k) => me && me.setRequired(k),
        // getLineRippleAdapterMethods_
        activateLineRipple: () => Ae && Ae.activate(),
        deactivateLineRipple: () => Ae && Ae.deactivate(),
        setLineRippleTransformOrigin: (k) => Ae && Ae.setRippleCenter(k),
        // getOutlineAdapterMethods_
        closeOutline: () => qe && qe.closeNotch(),
        hasOutline: () => !!qe,
        notchOutline: (k) => qe && qe.notch(k)
      },
      {
        get helperText() {
          return yt;
        },
        get characterCounter() {
          return dt;
        },
        get leadingIcon() {
          return at;
        },
        get trailingIcon() {
          return Xe;
        }
      }
    )), I) {
      if (G == null)
        throw new Error("SMUI Textfield must be initialized with either a non-undefined initial value or an Input component.");
      ve.init();
    } else
      ra().then(() => {
        if (G == null)
          throw new Error("SMUI Textfield must be initialized with either a non-undefined initial value or an Input component.");
        ve.init();
      });
    return je(), () => {
      ve.destroy();
    };
  }), Wt(() => {
    K && K();
  });
  function Kt(k) {
    t(29, at = k.detail);
  }
  function E(k) {
    t(30, Xe = k.detail);
  }
  function q(k) {
    t(32, dt = k.detail);
  }
  function be(k) {
    t(27, tt = k.detail);
  }
  function ot(k) {
    t(31, yt = k.detail);
  }
  function Xt(k) {
    var Ne;
    return k in Ge ? (Ne = Ge[k]) !== null && Ne !== void 0 ? Ne : null : nn().classList.contains(k);
  }
  function en(k) {
    Ge[k] || t(25, Ge[k] = !0, Ge);
  }
  function tn(k) {
    (!(k in Ge) || Ge[k]) && t(25, Ge[k] = !1, Ge);
  }
  function hl(k, Ne) {
    He[k] != Ne && (Ne === "" || Ne == null ? (delete He[k], t(26, He)) : t(26, He[k] = Ne, He));
  }
  function gl() {
    G == null || G.focus();
  }
  function pl() {
    G == null || G.blur();
  }
  function Kn() {
    if (ve) {
      const k = ve.shouldFloat;
      ve.notchOutline(k);
    }
  }
  function nn() {
    return Ve;
  }
  function _l(k) {
    x[k ? "unshift" : "push"](() => {
      me = k, t(5, me);
    });
  }
  function bl(k) {
    x[k ? "unshift" : "push"](() => {
      me = k, t(5, me);
    });
  }
  function vl(k) {
    x[k ? "unshift" : "push"](() => {
      qe = k, t(7, qe);
    });
  }
  function yl(k) {
    x[k ? "unshift" : "push"](() => {
      G = k, t(2, G);
    });
  }
  function Cl(k) {
    R = k, t(0, R);
  }
  function Al(k) {
    D = k, t(4, D);
  }
  function Sl(k) {
    h = k, t(1, h), t(54, ve), t(19, H);
  }
  const Il = () => t(28, nt = !1), El = () => t(28, nt = !0), Ll = (k) => ge(Ve, "blur", k), kl = (k) => ge(Ve, "focus", k);
  function Rl(k) {
    x[k ? "unshift" : "push"](() => {
      G = k, t(2, G);
    });
  }
  function wl(k) {
    R = k, t(0, R);
  }
  function Ol(k) {
    z = k, t(3, z);
  }
  function Dl(k) {
    D = k, t(4, D);
  }
  function Tl(k) {
    h = k, t(1, h), t(54, ve), t(19, H);
  }
  const Hl = () => t(28, nt = !1), Ml = () => t(28, nt = !0), Fl = (k) => ge(Ve, "blur", k), Ul = (k) => ge(Ve, "focus", k);
  function Pl(k) {
    x[k ? "unshift" : "push"](() => {
      Ae = k, t(6, Ae);
    });
  }
  function Bl(k) {
    x[k ? "unshift" : "push"](() => {
      Ve = k, t(24, Ve);
    });
  }
  const Nl = () => t(29, at = void 0), jl = () => t(30, Xe = void 0), ql = () => t(32, dt = void 0);
  function Vl(k) {
    x[k ? "unshift" : "push"](() => {
      Ve = k, t(24, Ve);
    });
  }
  const Gl = () => t(29, at = void 0), zl = () => t(30, Xe = void 0), Wl = () => {
    t(27, tt = void 0), t(31, yt = void 0);
  }, Kl = () => t(32, dt = void 0);
  return n.$$set = (k) => {
    e = V(V({}, e), Fe(k)), t(46, l = oe(e, r)), "use" in k && t(8, p = k.use), "class" in k && t(9, b = k.class), "style" in k && t(10, _ = k.style), "ripple" in k && t(11, g = k.ripple), "disabled" in k && t(12, C = k.disabled), "required" in k && t(13, v = k.required), "textarea" in k && t(14, w = k.textarea), "variant" in k && t(15, A = k.variant), "noLabel" in k && t(16, O = k.noLabel), "label" in k && t(17, P = k.label), "type" in k && t(18, m = k.type), "value" in k && t(0, R = k.value), "files" in k && t(3, z = k.files), "invalid" in k && t(1, h = k.invalid), "updateInvalid" in k && t(19, H = k.updateInvalid), "dirty" in k && t(4, D = k.dirty), "prefix" in k && t(20, W = k.prefix), "suffix" in k && t(21, se = k.suffix), "validateOnValueChange" in k && t(48, ue = k.validateOnValueChange), "useNativeValidation" in k && t(49, J = k.useNativeValidation), "withLeadingIcon" in k && t(22, T = k.withLeadingIcon), "withTrailingIcon" in k && t(23, y = k.withTrailingIcon), "input" in k && t(2, G = k.input), "floatingLabel" in k && t(5, me = k.floatingLabel), "lineRipple" in k && t(6, Ae = k.lineRipple), "notchedOutline" in k && t(7, qe = k.notchedOutline), "$$scope" in k && t(87, a = k.$$scope);
  }, n.$$.update = () => {
    if (n.$$.dirty[0] & /*input*/
    4 && t(33, i = G && G.getElement()), n.$$.dirty[0] & /*invalid, updateInvalid*/
    524290 | n.$$.dirty[1] & /*instance*/
    8388608 && ve && ve.isValid() !== !h && (H ? t(1, h = !ve.isValid()) : ve.setValid(!h)), n.$$.dirty[1] & /*instance, validateOnValueChange*/
    8519680 && ve && ve.getValidateOnValueChange() !== ue && ve.setValidateOnValueChange(d(ue) ? !1 : ue), n.$$.dirty[1] & /*instance, useNativeValidation*/
    8650752 && ve && ve.setUseNativeValidation(d(J) ? !0 : J), n.$$.dirty[0] & /*disabled*/
    4096 | n.$$.dirty[1] & /*instance*/
    8388608 && ve && ve.setDisabled(C), n.$$.dirty[0] & /*value*/
    1 | n.$$.dirty[1] & /*instance, previousValue*/
    25165824 && ve && I && Lt !== R) {
      t(55, Lt = R);
      const k = `${R}`;
      ve.getValue() !== k && ve.setValue(k);
    }
  }, [
    R,
    h,
    G,
    z,
    D,
    me,
    Ae,
    qe,
    p,
    b,
    _,
    g,
    C,
    v,
    w,
    A,
    O,
    P,
    m,
    H,
    W,
    se,
    T,
    y,
    Ve,
    Ge,
    He,
    tt,
    nt,
    at,
    Xe,
    yt,
    dt,
    i,
    f,
    d,
    I,
    Qe,
    Kt,
    E,
    q,
    be,
    ot,
    en,
    tn,
    hl,
    l,
    s,
    ue,
    J,
    gl,
    pl,
    Kn,
    nn,
    ve,
    Lt,
    o,
    _l,
    bl,
    vl,
    yl,
    Cl,
    Al,
    Sl,
    Il,
    El,
    Ll,
    kl,
    Rl,
    wl,
    Ol,
    Dl,
    Tl,
    Hl,
    Ml,
    Fl,
    Ul,
    Pl,
    Bl,
    Nl,
    jl,
    ql,
    Vl,
    Gl,
    zl,
    Wl,
    Kl,
    a
  ];
}
class zr extends de {
  constructor(e) {
    super(), ce(
      this,
      e,
      ms,
      ds,
      ae,
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
function hs(n) {
  let e;
  return {
    c() {
      e = ke(
        /*content*/
        n[7]
      );
    },
    m(t, i) {
      F(t, e, i);
    },
    p(t, i) {
      i & /*content*/
      128 && We(
        e,
        /*content*/
        t[7]
      );
    },
    i: Ie,
    o: Ie,
    d(t) {
      t && M(e);
    }
  };
}
function gs(n) {
  let e;
  const t = (
    /*#slots*/
    n[15].default
  ), i = ne(
    t,
    n,
    /*$$scope*/
    n[14],
    null
  );
  return {
    c() {
      i && i.c();
    },
    m(r, l) {
      i && i.m(r, l), e = !0;
    },
    p(r, l) {
      i && i.p && (!e || l & /*$$scope*/
      16384) && re(
        i,
        t,
        r,
        /*$$scope*/
        r[14],
        e ? ie(
          t,
          /*$$scope*/
          r[14],
          l,
          null
        ) : le(
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
      L(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function ps(n) {
  let e, t, i, r, l, o, a, s, u, f;
  const c = [gs, hs], d = [];
  function p(g, C) {
    return (
      /*content*/
      g[7] == null ? 0 : 1
    );
  }
  t = p(n), i = d[t] = c[t](n);
  let b = [
    {
      class: r = Q({
        [
          /*className*/
          n[1]
        ]: !0,
        "mdc-text-field__icon": !0,
        "mdc-text-field__icon--leading": (
          /*leading*/
          n[11]
        ),
        "mdc-text-field__icon--trailing": !/*leading*/
        n[11]
      })
    },
    {
      "aria-hidden": l = /*tabindex*/
      n[3] === -1 ? "true" : "false"
    },
    {
      "aria-disabled": o = /*role*/
      n[2] === "button" ? (
        /*disabled*/
        n[4] ? "true" : "false"
      ) : void 0
    },
    /*roleProps*/
    n[8],
    /*internalAttrs*/
    n[6],
    /*$$restProps*/
    n[12]
  ], _ = {};
  for (let g = 0; g < b.length; g += 1)
    _ = V(_, b[g]);
  return {
    c() {
      e = Z("i"), i.c(), te(e, _);
    },
    m(g, C) {
      F(g, e, C), d[t].m(e, null), n[16](e), s = !0, u || (f = [
        ee(a = De.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        ee(
          /*forwardEvents*/
          n[9].call(null, e)
        )
      ], u = !0);
    },
    p(g, [C]) {
      let v = t;
      t = p(g), t === v ? d[t].p(g, C) : (pe(), L(d[v], 1, 1, () => {
        d[v] = null;
      }), _e(), i = d[t], i ? i.p(g, C) : (i = d[t] = c[t](g), i.c()), S(i, 1), i.m(e, null)), te(e, _ = fe(b, [
        (!s || C & /*className*/
        2 && r !== (r = Q({
          [
            /*className*/
            g[1]
          ]: !0,
          "mdc-text-field__icon": !0,
          "mdc-text-field__icon--leading": (
            /*leading*/
            g[11]
          ),
          "mdc-text-field__icon--trailing": !/*leading*/
          g[11]
        }))) && { class: r },
        (!s || C & /*tabindex*/
        8 && l !== (l = /*tabindex*/
        g[3] === -1 ? "true" : "false")) && { "aria-hidden": l },
        (!s || C & /*role, disabled*/
        20 && o !== (o = /*role*/
        g[2] === "button" ? (
          /*disabled*/
          g[4] ? "true" : "false"
        ) : void 0)) && { "aria-disabled": o },
        C & /*roleProps*/
        256 && /*roleProps*/
        g[8],
        C & /*internalAttrs*/
        64 && /*internalAttrs*/
        g[6],
        C & /*$$restProps*/
        4096 && /*$$restProps*/
        g[12]
      ])), a && he(a.update) && C & /*use*/
      1 && a.update.call(
        null,
        /*use*/
        g[0]
      );
    },
    i(g) {
      s || (S(i), s = !0);
    },
    o(g) {
      L(i), s = !1;
    },
    d(g) {
      g && M(e), d[t].d(), n[16](null), u = !1, Ce(f);
    }
  };
}
function _s(n, e, t) {
  let i;
  const r = ["use", "class", "role", "tabindex", "disabled", "getElement"];
  let l = oe(e, r), o, { $$slots: a = {}, $$scope: s } = e;
  const u = Pe(Re());
  let { use: f = [] } = e, { class: c = "" } = e, { role: d = void 0 } = e, { tabindex: p = d === "button" ? 0 : -1 } = e, { disabled: b = !1 } = e, _, g, C = {};
  const v = Oe("SMUI:textfield:icon:leading");
  xe(n, v, (I) => t(18, o = I));
  const w = o;
  let A;
  Ke(() => (g = new go({
    getAttr: O,
    setAttr: P,
    removeAttr: m,
    setContent: (I) => {
      t(7, A = I);
    },
    registerInteractionHandler: (I, h) => R().addEventListener(I, h),
    deregisterInteractionHandler: (I, h) => R().removeEventListener(I, h),
    notifyIconAction: () => ge(R(), "SMUITextField:icon", void 0, void 0, !0)
  }), ge(
    R(),
    w ? "SMUITextfieldLeadingIcon:mount" : "SMUITextfieldTrailingIcon:mount",
    g
  ), g.init(), () => {
    ge(
      R(),
      w ? "SMUITextfieldLeadingIcon:unmount" : "SMUITextfieldTrailingIcon:unmount",
      g
    ), g.destroy();
  }));
  function O(I) {
    var h;
    return I in C ? (h = C[I]) !== null && h !== void 0 ? h : null : R().getAttribute(I);
  }
  function P(I, h) {
    C[I] !== h && t(6, C[I] = h, C);
  }
  function m(I) {
    (!(I in C) || C[I] != null) && t(6, C[I] = void 0, C);
  }
  function R() {
    return _;
  }
  function z(I) {
    x[I ? "unshift" : "push"](() => {
      _ = I, t(5, _);
    });
  }
  return n.$$set = (I) => {
    e = V(V({}, e), Fe(I)), t(12, l = oe(e, r)), "use" in I && t(0, f = I.use), "class" in I && t(1, c = I.class), "role" in I && t(2, d = I.role), "tabindex" in I && t(3, p = I.tabindex), "disabled" in I && t(4, b = I.disabled), "$$scope" in I && t(14, s = I.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty & /*role, tabindex*/
    12 && t(8, i = { role: d, tabindex: p });
  }, [
    f,
    c,
    d,
    p,
    b,
    _,
    C,
    A,
    i,
    u,
    v,
    w,
    l,
    R,
    s,
    a,
    z
  ];
}
class bs extends de {
  constructor(e) {
    super(), ce(this, e, _s, ps, ae, {
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
function vs(n) {
  let e, t, i;
  function r(o) {
    n[6](o);
  }
  let l = {
    label: (
      /*label*/
      n[2]
    ),
    placeholder: (
      /*placeholder*/
      n[1]
    ),
    style: "width: 100%",
    variant: (
      /*variant*/
      n[4]
    )
  };
  return (
    /*value*/
    n[0] !== void 0 && (l.value = /*value*/
    n[0]), e = new zr({ props: l }), x.push(() => Ye(e, "value", r)), {
      c() {
        j(e.$$.fragment);
      },
      m(o, a) {
        B(e, o, a), i = !0;
      },
      p(o, a) {
        const s = {};
        a & /*label*/
        4 && (s.label = /*label*/
        o[2]), a & /*placeholder*/
        2 && (s.placeholder = /*placeholder*/
        o[1]), a & /*variant*/
        16 && (s.variant = /*variant*/
        o[4]), !t && a & /*value*/
        1 && (t = !0, s.value = /*value*/
        o[0], Ze(() => t = !1)), e.$set(s);
      },
      i(o) {
        i || (S(e.$$.fragment, o), i = !0);
      },
      o(o) {
        L(e.$$.fragment, o), i = !1;
      },
      d(o) {
        N(e, o);
      }
    }
  );
}
function ys(n) {
  let e, t, i;
  function r(o) {
    n[5](o);
  }
  let l = {
    label: (
      /*label*/
      n[2]
    ),
    placeholder: (
      /*placeholder*/
      n[1]
    ),
    style: "width: 100%",
    variant: (
      /*variant*/
      n[4]
    ),
    $$slots: { leadingIcon: [As] },
    $$scope: { ctx: n }
  };
  return (
    /*value*/
    n[0] !== void 0 && (l.value = /*value*/
    n[0]), e = new zr({ props: l }), x.push(() => Ye(e, "value", r)), {
      c() {
        j(e.$$.fragment);
      },
      m(o, a) {
        B(e, o, a), i = !0;
      },
      p(o, a) {
        const s = {};
        a & /*label*/
        4 && (s.label = /*label*/
        o[2]), a & /*placeholder*/
        2 && (s.placeholder = /*placeholder*/
        o[1]), a & /*variant*/
        16 && (s.variant = /*variant*/
        o[4]), a & /*$$scope, icon*/
        136 && (s.$$scope = { dirty: a, ctx: o }), !t && a & /*value*/
        1 && (t = !0, s.value = /*value*/
        o[0], Ze(() => t = !1)), e.$set(s);
      },
      i(o) {
        i || (S(e.$$.fragment, o), i = !0);
      },
      o(o) {
        L(e.$$.fragment, o), i = !1;
      },
      d(o) {
        N(e, o);
      }
    }
  );
}
function Cs(n) {
  let e;
  return {
    c() {
      e = ke(
        /*icon*/
        n[3]
      );
    },
    m(t, i) {
      F(t, e, i);
    },
    p(t, i) {
      i & /*icon*/
      8 && We(
        e,
        /*icon*/
        t[3]
      );
    },
    d(t) {
      t && M(e);
    }
  };
}
function As(n) {
  let e, t;
  return e = new bs({
    props: {
      class: "material-icons",
      slot: "leadingIcon",
      $$slots: { default: [Cs] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      j(e.$$.fragment);
    },
    m(i, r) {
      B(e, i, r), t = !0;
    },
    p(i, r) {
      const l = {};
      r & /*$$scope, icon*/
      136 && (l.$$scope = { dirty: r, ctx: i }), e.$set(l);
    },
    i(i) {
      t || (S(e.$$.fragment, i), t = !0);
    },
    o(i) {
      L(e.$$.fragment, i), t = !1;
    },
    d(i) {
      N(e, i);
    }
  };
}
function Ss(n) {
  let e, t, i, r;
  const l = [ys, vs], o = [];
  function a(s, u) {
    return (
      /*icon*/
      s[3] ? 0 : 1
    );
  }
  return e = a(n), t = o[e] = l[e](n), {
    c() {
      t.c(), i = Ee();
    },
    m(s, u) {
      o[e].m(s, u), F(s, i, u), r = !0;
    },
    p(s, [u]) {
      let f = e;
      e = a(s), e === f ? o[e].p(s, u) : (pe(), L(o[f], 1, 1, () => {
        o[f] = null;
      }), _e(), t = o[e], t ? t.p(s, u) : (t = o[e] = l[e](s), t.c()), S(t, 1), t.m(i.parentNode, i));
    },
    i(s) {
      r || (S(t), r = !0);
    },
    o(s) {
      L(t), r = !1;
    },
    d(s) {
      s && M(i), o[e].d(s);
    }
  };
}
function Is(n, e, t) {
  let { placeholder: i = "" } = e, { label: r = "" } = e, { icon: l = "" } = e, { value: o = "" } = e, { variant: a = "standard" } = e;
  function s(f) {
    o = f, t(0, o);
  }
  function u(f) {
    o = f, t(0, o);
  }
  return n.$$set = (f) => {
    "placeholder" in f && t(1, i = f.placeholder), "label" in f && t(2, r = f.label), "icon" in f && t(3, l = f.icon), "value" in f && t(0, o = f.value), "variant" in f && t(4, a = f.variant);
  }, [
    o,
    i,
    r,
    l,
    a,
    s,
    u
  ];
}
class En extends de {
  constructor(e) {
    super(), ce(this, e, Is, Ss, ae, {
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
var Ni = {
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
function Es(n) {
  return !!n.document && typeof n.document.createElement == "function";
}
function Ls(n, e) {
  if (Es(n) && e in Ni) {
    var t = n.document.createElement("div"), i = Ni[e], r = i.standard, l = i.prefixed, o = r in t.style;
    return o ? r : l;
  }
  return e;
}
Be({
  class: "mdc-deprecated-list-item__text",
  tag: "span"
});
Be({
  class: "mdc-deprecated-list-item__primary-text",
  tag: "span"
});
Be({
  class: "mdc-deprecated-list-item__secondary-text",
  tag: "span"
});
function ks(n) {
  let e, t, i, r, l, o;
  const a = (
    /*#slots*/
    n[8].default
  ), s = ne(
    a,
    n,
    /*$$scope*/
    n[7],
    null
  );
  let u = [
    {
      class: t = Q({
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
  ], f = {};
  for (let c = 0; c < u.length; c += 1)
    f = V(f, u[c]);
  return {
    c() {
      e = Z("span"), s && s.c(), te(e, f);
    },
    m(c, d) {
      F(c, e, d), s && s.m(e, null), n[9](e), r = !0, l || (o = [
        ee(i = De.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        ee(
          /*forwardEvents*/
          n[3].call(null, e)
        )
      ], l = !0);
    },
    p(c, [d]) {
      s && s.p && (!r || d & /*$$scope*/
      128) && re(
        s,
        a,
        c,
        /*$$scope*/
        c[7],
        r ? ie(
          a,
          /*$$scope*/
          c[7],
          d,
          null
        ) : le(
          /*$$scope*/
          c[7]
        ),
        null
      ), te(e, f = fe(u, [
        (!r || d & /*className*/
        2 && t !== (t = Q({
          [
            /*className*/
            c[1]
          ]: !0,
          "mdc-deprecated-list-item__graphic": !0,
          "mdc-menu__selection-group-icon": (
            /*menuSelectionGroup*/
            c[4]
          )
        }))) && { class: t },
        d & /*$$restProps*/
        32 && /*$$restProps*/
        c[5]
      ])), i && he(i.update) && d & /*use*/
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
      L(s, c), r = !1;
    },
    d(c) {
      c && M(e), s && s.d(c), n[9](null), l = !1, Ce(o);
    }
  };
}
function Rs(n, e, t) {
  const i = ["use", "class", "getElement"];
  let r = oe(e, i), { $$slots: l = {}, $$scope: o } = e;
  const a = Pe(Re());
  let { use: s = [] } = e, { class: u = "" } = e, f, c = Oe("SMUI:list:graphic:menu-selection-group");
  function d() {
    return f;
  }
  function p(b) {
    x[b ? "unshift" : "push"](() => {
      f = b, t(2, f);
    });
  }
  return n.$$set = (b) => {
    e = V(V({}, e), Fe(b)), t(5, r = oe(e, i)), "use" in b && t(0, s = b.use), "class" in b && t(1, u = b.class), "$$scope" in b && t(7, o = b.$$scope);
  }, [
    s,
    u,
    f,
    a,
    c,
    r,
    d,
    o,
    l,
    p
  ];
}
class ws extends de {
  constructor(e) {
    super(), ce(this, e, Rs, ks, ae, { use: 0, class: 1, getElement: 6 });
  }
  get getElement() {
    return this.$$.ctx[6];
  }
}
Be({
  class: "mdc-deprecated-list-item__meta",
  tag: "span"
});
Be({
  class: "mdc-deprecated-list-group",
  tag: "div"
});
Be({
  class: "mdc-deprecated-list-group__subheader",
  tag: "h3"
});
Be({
  class: "mdc-menu__selection-group-icon",
  component: ws
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
function Os(n) {
  return n ? n.scrollHeight > n.offsetHeight : !1;
}
function Ds(n) {
  return n ? n.scrollTop === 0 : !1;
}
function Ts(n) {
  return n ? Math.ceil(n.scrollHeight - n.scrollTop) === n.clientHeight : !1;
}
function Hs(n) {
  var e = /* @__PURE__ */ new Set();
  return [].forEach.call(n, function(t) {
    return e.add(t.offsetTop);
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
var Ms = (
  /** @class */
  function() {
    function n() {
      this.rafIDs = /* @__PURE__ */ new Map();
    }
    return n.prototype.request = function(e, t) {
      var i = this;
      this.cancel(e);
      var r = requestAnimationFrame(function(l) {
        i.rafIDs.delete(e), t(l);
      });
      this.rafIDs.set(e, r);
    }, n.prototype.cancel = function(e) {
      var t = this.rafIDs.get(e);
      t && (cancelAnimationFrame(t), this.rafIDs.delete(e));
    }, n.prototype.cancelAll = function() {
      var e = this;
      this.rafIDs.forEach(function(t, i) {
        e.cancel(i);
      });
    }, n.prototype.getQueue = function() {
      var e = [];
      return this.rafIDs.forEach(function(t, i) {
        e.push(i);
      }), e;
    }, n;
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
var Se = {
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
}, Zt = {
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
}, Ln = {
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
var mn;
(function(n) {
  n.POLL_SCROLL_POS = "poll_scroll_position", n.POLL_LAYOUT_CHANGE = "poll_layout_change";
})(mn || (mn = {}));
var Fs = (
  /** @class */
  function(n) {
    et(e, n);
    function e(t) {
      var i = n.call(this, Le(Le({}, e.defaultAdapter), t)) || this;
      return i.dialogOpen = !1, i.isFullscreen = !1, i.animationFrame = 0, i.animationTimer = 0, i.escapeKeyAction = Zt.CLOSE_ACTION, i.scrimClickAction = Zt.CLOSE_ACTION, i.autoStackButtons = !0, i.areButtonsStacked = !1, i.suppressDefaultPressSelector = Zt.SUPPRESS_DEFAULT_PRESS_SELECTOR, i.animFrame = new Ms(), i.contentScrollHandler = function() {
        i.handleScrollEvent();
      }, i.windowResizeHandler = function() {
        i.layout();
      }, i.windowOrientationChangeHandler = function() {
        i.layout();
      }, i;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Se;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Zt;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return Ln;
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
      this.adapter.hasClass(Se.STACKED) && this.setAutoStackButtons(!1), this.isFullscreen = this.adapter.hasClass(Se.FULLSCREEN);
    }, e.prototype.destroy = function() {
      this.animationTimer && (clearTimeout(this.animationTimer), this.handleAnimationTimerEnd()), this.isFullscreen && this.adapter.deregisterContentEventHandler("scroll", this.contentScrollHandler), this.animFrame.cancelAll(), this.adapter.deregisterWindowEventHandler("resize", this.windowResizeHandler), this.adapter.deregisterWindowEventHandler("orientationchange", this.windowOrientationChangeHandler);
    }, e.prototype.open = function(t) {
      var i = this;
      this.dialogOpen = !0, this.adapter.notifyOpening(), this.adapter.addClass(Se.OPENING), this.isFullscreen && this.adapter.registerContentEventHandler("scroll", this.contentScrollHandler), t && t.isAboveFullscreenDialog && this.adapter.addClass(Se.SCRIM_HIDDEN), this.adapter.registerWindowEventHandler("resize", this.windowResizeHandler), this.adapter.registerWindowEventHandler("orientationchange", this.windowOrientationChangeHandler), this.runNextAnimationFrame(function() {
        i.adapter.addClass(Se.OPEN), i.adapter.addBodyClass(Se.SCROLL_LOCK), i.layout(), i.animationTimer = setTimeout(function() {
          i.handleAnimationTimerEnd(), i.adapter.trapFocus(i.adapter.getInitialFocusEl()), i.adapter.notifyOpened();
        }, Ln.DIALOG_ANIMATION_OPEN_TIME_MS);
      });
    }, e.prototype.close = function(t) {
      var i = this;
      t === void 0 && (t = ""), this.dialogOpen && (this.dialogOpen = !1, this.adapter.notifyClosing(t), this.adapter.addClass(Se.CLOSING), this.adapter.removeClass(Se.OPEN), this.adapter.removeBodyClass(Se.SCROLL_LOCK), this.isFullscreen && this.adapter.deregisterContentEventHandler("scroll", this.contentScrollHandler), this.adapter.deregisterWindowEventHandler("resize", this.windowResizeHandler), this.adapter.deregisterWindowEventHandler("orientationchange", this.windowOrientationChangeHandler), cancelAnimationFrame(this.animationFrame), this.animationFrame = 0, clearTimeout(this.animationTimer), this.animationTimer = setTimeout(function() {
        i.adapter.releaseFocus(), i.handleAnimationTimerEnd(), i.adapter.notifyClosed(t);
      }, Ln.DIALOG_ANIMATION_CLOSE_TIME_MS));
    }, e.prototype.showSurfaceScrim = function() {
      var t = this;
      this.adapter.addClass(Se.SURFACE_SCRIM_SHOWING), this.runNextAnimationFrame(function() {
        t.adapter.addClass(Se.SURFACE_SCRIM_SHOWN);
      });
    }, e.prototype.hideSurfaceScrim = function() {
      this.adapter.removeClass(Se.SURFACE_SCRIM_SHOWN), this.adapter.addClass(Se.SURFACE_SCRIM_HIDING);
    }, e.prototype.handleSurfaceScrimTransitionEnd = function() {
      this.adapter.removeClass(Se.SURFACE_SCRIM_HIDING), this.adapter.removeClass(Se.SURFACE_SCRIM_SHOWING);
    }, e.prototype.isOpen = function() {
      return this.dialogOpen;
    }, e.prototype.getEscapeKeyAction = function() {
      return this.escapeKeyAction;
    }, e.prototype.setEscapeKeyAction = function(t) {
      this.escapeKeyAction = t;
    }, e.prototype.getScrimClickAction = function() {
      return this.scrimClickAction;
    }, e.prototype.setScrimClickAction = function(t) {
      this.scrimClickAction = t;
    }, e.prototype.getAutoStackButtons = function() {
      return this.autoStackButtons;
    }, e.prototype.setAutoStackButtons = function(t) {
      this.autoStackButtons = t;
    }, e.prototype.getSuppressDefaultPressSelector = function() {
      return this.suppressDefaultPressSelector;
    }, e.prototype.setSuppressDefaultPressSelector = function(t) {
      this.suppressDefaultPressSelector = t;
    }, e.prototype.layout = function() {
      var t = this;
      this.animFrame.request(mn.POLL_LAYOUT_CHANGE, function() {
        t.layoutInternal();
      });
    }, e.prototype.handleClick = function(t) {
      var i = this.adapter.eventTargetMatches(t.target, Zt.SCRIM_SELECTOR);
      if (i && this.scrimClickAction !== "")
        this.close(this.scrimClickAction);
      else {
        var r = this.adapter.getActionFromEvent(t);
        r && this.close(r);
      }
    }, e.prototype.handleKeydown = function(t) {
      var i = t.key === "Enter" || t.keyCode === 13;
      if (i) {
        var r = this.adapter.getActionFromEvent(t);
        if (!r) {
          var l = t.composedPath ? t.composedPath()[0] : t.target, o = this.suppressDefaultPressSelector ? !this.adapter.eventTargetMatches(l, this.suppressDefaultPressSelector) : !0;
          i && o && this.adapter.clickDefaultButton();
        }
      }
    }, e.prototype.handleDocumentKeydown = function(t) {
      var i = t.key === "Escape" || t.keyCode === 27;
      i && this.escapeKeyAction !== "" && this.close(this.escapeKeyAction);
    }, e.prototype.handleScrollEvent = function() {
      var t = this;
      this.animFrame.request(mn.POLL_SCROLL_POS, function() {
        t.toggleScrollDividerHeader(), t.toggleScrollDividerFooter();
      });
    }, e.prototype.layoutInternal = function() {
      this.autoStackButtons && this.detectStackedButtons(), this.toggleScrollableClasses();
    }, e.prototype.handleAnimationTimerEnd = function() {
      this.animationTimer = 0, this.adapter.removeClass(Se.OPENING), this.adapter.removeClass(Se.CLOSING);
    }, e.prototype.runNextAnimationFrame = function(t) {
      var i = this;
      cancelAnimationFrame(this.animationFrame), this.animationFrame = requestAnimationFrame(function() {
        i.animationFrame = 0, clearTimeout(i.animationTimer), i.animationTimer = setTimeout(t, 0);
      });
    }, e.prototype.detectStackedButtons = function() {
      this.adapter.removeClass(Se.STACKED);
      var t = this.adapter.areButtonsStacked();
      t && this.adapter.addClass(Se.STACKED), t !== this.areButtonsStacked && (this.adapter.reverseButtons(), this.areButtonsStacked = t);
    }, e.prototype.toggleScrollableClasses = function() {
      this.adapter.removeClass(Se.SCROLLABLE), this.adapter.isContentScrollable() && (this.adapter.addClass(Se.SCROLLABLE), this.isFullscreen && (this.toggleScrollDividerHeader(), this.toggleScrollDividerFooter()));
    }, e.prototype.toggleScrollDividerHeader = function() {
      this.adapter.isScrollableContentAtTop() ? this.adapter.hasClass(Se.SCROLL_DIVIDER_HEADER) && this.adapter.removeClass(Se.SCROLL_DIVIDER_HEADER) : this.adapter.addClass(Se.SCROLL_DIVIDER_HEADER);
    }, e.prototype.toggleScrollDividerFooter = function() {
      this.adapter.isScrollableContentAtBottom() ? this.adapter.hasClass(Se.SCROLL_DIVIDER_FOOTER) && this.adapter.removeClass(Se.SCROLL_DIVIDER_FOOTER) : this.adapter.addClass(Se.SCROLL_DIVIDER_FOOTER);
    }, e;
  }(ct)
);
const { document: Us, window: ji } = xl, Ps = (n) => ({}), qi = (n) => ({});
function Vi(n) {
  let e, t, i;
  return {
    c() {
      e = Z("div"), U(e, "class", "mdc-dialog__surface-scrim");
    },
    m(r, l) {
      F(r, e, l), t || (i = $(
        e,
        "transitionend",
        /*transitionend_handler*/
        n[32]
      ), t = !0);
    },
    p: Ie,
    d(r) {
      r && M(e), t = !1, i();
    }
  };
}
function Bs(n) {
  let e, t, i, r, l, o, a, s, u, f, c, d, p, b, _;
  const g = (
    /*#slots*/
    n[29].default
  ), C = ne(
    g,
    n,
    /*$$scope*/
    n[28],
    null
  );
  let v = (
    /*fullscreen*/
    n[5] && Vi(n)
  ), w = [
    {
      class: o = Q({
        [
          /*surface$class*/
          n[9]
        ]: !0,
        "mdc-dialog__surface": !0
      })
    },
    { role: "alertdialog" },
    { "aria-modal": "true" },
    Me(
      /*$$restProps*/
      n[19],
      "surface$"
    )
  ], A = {};
  for (let h = 0; h < w.length; h += 1)
    A = V(A, w[h]);
  let O = [
    {
      class: a = Q({
        [
          /*container$class*/
          n[8]
        ]: !0,
        "mdc-dialog__container": !0
      })
    },
    Me(
      /*$$restProps*/
      n[19],
      "container$"
    )
  ], P = {};
  for (let h = 0; h < O.length; h += 1)
    P = V(P, O[h]);
  let m = [
    {
      class: f = Q({
        [
          /*className*/
          n[2]
        ]: !0,
        "mdc-dialog": !0,
        "mdc-dialog--stacked": !/*autoStackButtons*/
        n[4],
        "mdc-dialog--fullscreen": (
          /*fullscreen*/
          n[5]
        ),
        "mdc-dialog--sheet": (
          /*sheet*/
          n[6]
        ),
        "mdc-dialog--no-content-padding": (
          /*noContentPadding*/
          n[7]
        ),
        "smui-dialog--selection": (
          /*selection*/
          n[3]
        ),
        .../*internalClasses*/
        n[12]
      })
    },
    { role: "alertdialog" },
    { "aria-modal": "true" },
    It(
      /*$$restProps*/
      n[19],
      ["container$", "surface$"]
    )
  ], R = {};
  for (let h = 0; h < m.length; h += 1)
    R = V(R, m[h]);
  const z = (
    /*#slots*/
    n[29].over
  ), I = ne(
    z,
    n,
    /*$$scope*/
    n[28],
    qi
  );
  return {
    c() {
      e = Y(), t = Z("div"), i = Z("div"), r = Z("div"), C && C.c(), l = Y(), v && v.c(), s = Y(), u = Z("div"), d = Y(), I && I.c(), te(r, A), te(i, P), U(u, "class", "mdc-dialog__scrim"), te(t, R);
    },
    m(h, H) {
      F(h, e, H), F(h, t, H), X(t, i), X(i, r), C && C.m(r, null), X(r, l), v && v.m(r, null), X(t, s), X(t, u), n[33](t), F(h, d, H), I && I.m(h, H), p = !0, b || (_ = [
        $(
          ji,
          "resize",
          /*resize_handler*/
          n[30]
        ),
        $(
          ji,
          "orientationchange",
          /*orientationchange_handler*/
          n[31]
        ),
        $(Us.body, "keydown", function() {
          he(
            /*instance*/
            n[10] && /*instance*/
            n[10].handleDocumentKeydown.bind(
              /*instance*/
              n[10]
            )
          ) && /*instance*/
          (n[10] && /*instance*/
          n[10].handleDocumentKeydown.bind(
            /*instance*/
            n[10]
          )).apply(this, arguments);
        }),
        ee(c = De.call(
          null,
          t,
          /*use*/
          n[1]
        )),
        ee(
          /*forwardEvents*/
          n[13].call(null, t)
        ),
        $(
          t,
          "SMUIDialog:opening",
          /*handleDialogOpening*/
          n[16]
        ),
        $(
          t,
          "SMUIDialog:opened",
          /*handleDialogOpened*/
          n[17]
        ),
        $(
          t,
          "SMUIDialog:closed",
          /*handleDialogClosed*/
          n[18]
        ),
        $(t, "click", function() {
          he(
            /*instance*/
            n[10] && /*instance*/
            n[10].handleClick.bind(
              /*instance*/
              n[10]
            )
          ) && /*instance*/
          (n[10] && /*instance*/
          n[10].handleClick.bind(
            /*instance*/
            n[10]
          )).apply(this, arguments);
        }),
        $(t, "keydown", function() {
          he(
            /*instance*/
            n[10] && /*instance*/
            n[10].handleKeydown.bind(
              /*instance*/
              n[10]
            )
          ) && /*instance*/
          (n[10] && /*instance*/
          n[10].handleKeydown.bind(
            /*instance*/
            n[10]
          )).apply(this, arguments);
        })
      ], b = !0);
    },
    p(h, H) {
      n = h, C && C.p && (!p || H[0] & /*$$scope*/
      268435456) && re(
        C,
        g,
        n,
        /*$$scope*/
        n[28],
        p ? ie(
          g,
          /*$$scope*/
          n[28],
          H,
          null
        ) : le(
          /*$$scope*/
          n[28]
        ),
        null
      ), /*fullscreen*/
      n[5] ? v ? v.p(n, H) : (v = Vi(n), v.c(), v.m(r, null)) : v && (v.d(1), v = null), te(r, A = fe(w, [
        (!p || H[0] & /*surface$class*/
        512 && o !== (o = Q({
          [
            /*surface$class*/
            n[9]
          ]: !0,
          "mdc-dialog__surface": !0
        }))) && { class: o },
        { role: "alertdialog" },
        { "aria-modal": "true" },
        H[0] & /*$$restProps*/
        524288 && Me(
          /*$$restProps*/
          n[19],
          "surface$"
        )
      ])), te(i, P = fe(O, [
        (!p || H[0] & /*container$class*/
        256 && a !== (a = Q({
          [
            /*container$class*/
            n[8]
          ]: !0,
          "mdc-dialog__container": !0
        }))) && { class: a },
        H[0] & /*$$restProps*/
        524288 && Me(
          /*$$restProps*/
          n[19],
          "container$"
        )
      ])), te(t, R = fe(m, [
        (!p || H[0] & /*className, autoStackButtons, fullscreen, sheet, noContentPadding, selection, internalClasses*/
        4348 && f !== (f = Q({
          [
            /*className*/
            n[2]
          ]: !0,
          "mdc-dialog": !0,
          "mdc-dialog--stacked": !/*autoStackButtons*/
          n[4],
          "mdc-dialog--fullscreen": (
            /*fullscreen*/
            n[5]
          ),
          "mdc-dialog--sheet": (
            /*sheet*/
            n[6]
          ),
          "mdc-dialog--no-content-padding": (
            /*noContentPadding*/
            n[7]
          ),
          "smui-dialog--selection": (
            /*selection*/
            n[3]
          ),
          .../*internalClasses*/
          n[12]
        }))) && { class: f },
        { role: "alertdialog" },
        { "aria-modal": "true" },
        H[0] & /*$$restProps*/
        524288 && It(
          /*$$restProps*/
          n[19],
          ["container$", "surface$"]
        )
      ])), c && he(c.update) && H[0] & /*use*/
      2 && c.update.call(
        null,
        /*use*/
        n[1]
      ), I && I.p && (!p || H[0] & /*$$scope*/
      268435456) && re(
        I,
        z,
        n,
        /*$$scope*/
        n[28],
        p ? ie(
          z,
          /*$$scope*/
          n[28],
          H,
          Ps
        ) : le(
          /*$$scope*/
          n[28]
        ),
        qi
      );
    },
    i(h) {
      p || (S(C, h), S(I, h), p = !0);
    },
    o(h) {
      L(C, h), L(I, h), p = !1;
    },
    d(h) {
      h && (M(e), M(t), M(d)), C && C.d(h), v && v.d(), n[33](null), I && I.d(h), b = !1, Ce(_);
    }
  };
}
function Ns(n, e, t) {
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
  let r = oe(e, i), l, o, { $$slots: a = {}, $$scope: s } = e;
  var u;
  const { FocusTrap: f } = ka, { closest: c, matches: d } = Nn, p = Pe(Re());
  let { use: b = [] } = e, { class: _ = "" } = e, { open: g = !1 } = e, { selection: C = !1 } = e, { escapeKeyAction: v = "close" } = e, { scrimClickAction: w = "close" } = e, { autoStackButtons: A = !0 } = e, { fullscreen: O = !1 } = e, { sheet: P = !1 } = e, { noContentPadding: m = !1 } = e, { container$class: R = "" } = e, { surface$class: z = "" } = e, I, h, H = {}, D, W = ut(!1);
  xe(n, W, (E) => t(37, o = E));
  let se = Oe("SMUI:dialog:aboveFullscreen"), ue = (u = Oe("SMUI:dialog:aboveFullscreenShown")) !== null && u !== void 0 ? u : ut(!1);
  xe(n, ue, (E) => t(27, l = E));
  let J = Oe("SMUI:addLayoutListener"), T, y = [], G = (E) => (y.push(E), () => {
    const q = y.indexOf(E);
    q >= 0 && y.splice(q, 1);
  });
  we("SMUI:dialog:actions:reversed", W), we("SMUI:addLayoutListener", G), we("SMUI:dialog:selection", C), we("SMUI:dialog:aboveFullscreen", se || O), we("SMUI:dialog:aboveFullscreenShown", ue), P && we("SMUI:icon-button:context", "dialog:sheet"), J && (T = J(at));
  let me = l;
  Ke(() => {
    var E;
    return D = new f(
      I,
      {
        initialFocusEl: (E = tt()) !== null && E !== void 0 ? E : void 0
      }
    ), t(10, h = new Fs({
      addBodyClass: (q) => document.body.classList.add(q),
      addClass: qe,
      areButtonsStacked: () => Hs(ve()),
      clickDefaultButton: () => {
        const q = Ge();
        q && q.click();
      },
      eventTargetMatches: (q, be) => q ? d(q, be) : !1,
      getActionFromEvent: (q) => {
        if (!q.target)
          return "";
        const be = c(q.target, "[data-mdc-dialog-action]");
        return be && be.getAttribute("data-mdc-dialog-action");
      },
      getInitialFocusEl: tt,
      hasClass: Ae,
      isContentScrollable: () => Os(He()),
      notifyClosed: (q) => {
        t(0, g = !1), ge(Xe(), "SMUIDialog:closed", q ? { action: q } : {}, void 0, !0);
      },
      notifyClosing: (q) => ge(Xe(), "SMUIDialog:closing", q ? { action: q } : {}, void 0, !0),
      notifyOpened: () => ge(Xe(), "SMUIDialog:opened", {}, void 0, !0),
      notifyOpening: () => ge(Xe(), "SMUIDialog:opening", {}, void 0, !0),
      releaseFocus: () => D.releaseFocus(),
      removeBodyClass: (q) => document.body.classList.remove(q),
      removeClass: Ve,
      reverseButtons: () => {
        Ct(W, o = !0, o);
      },
      trapFocus: () => D.trapFocus(),
      registerContentEventHandler: (q, be) => {
        const ot = He();
        ot instanceof HTMLElement && ot.addEventListener(q, be);
      },
      deregisterContentEventHandler: (q, be) => {
        const ot = He();
        ot instanceof HTMLElement && ot.removeEventListener(q, be);
      },
      isScrollableContentAtTop: () => Ds(He()),
      isScrollableContentAtBottom: () => Ts(He()),
      registerWindowEventHandler: (q, be) => {
        window.addEventListener(q, be);
      },
      deregisterWindowEventHandler: (q, be) => {
        window.removeEventListener(q, be);
      }
    })), h.init(), () => {
      h.destroy();
    };
  }), Wt(() => {
    T && T();
  });
  function Ae(E) {
    return E in H ? H[E] : Xe().classList.contains(E);
  }
  function qe(E) {
    H[E] || t(12, H[E] = !0, H);
  }
  function Ve(E) {
    (!(E in H) || H[E]) && t(12, H[E] = !1, H);
  }
  function ve() {
    return [].slice.call(I.querySelectorAll(".mdc-dialog__button"));
  }
  function Ge() {
    return I.querySelector("[data-mdc-dialog-button-default]");
  }
  function He() {
    return I.querySelector(".mdc-dialog__content");
  }
  function tt() {
    return I.querySelector("[data-mdc-dialog-initial-focus]");
  }
  function nt() {
    se && Ct(ue, l = !0, l), requestAnimationFrame(() => {
      y.forEach((E) => E());
    });
  }
  function vt() {
    y.forEach((E) => E());
  }
  function K() {
    se && Ct(ue, l = !1, l);
  }
  function je() {
    return g;
  }
  function Qe(E) {
    t(0, g = E);
  }
  function at() {
    return h.layout();
  }
  function Xe() {
    return I;
  }
  const yt = () => g && h && h.layout(), dt = () => g && h && h.layout(), Lt = () => h && h.handleSurfaceScrimTransitionEnd();
  function Kt(E) {
    x[E ? "unshift" : "push"](() => {
      I = E, t(11, I);
    });
  }
  return n.$$set = (E) => {
    e = V(V({}, e), Fe(E)), t(19, r = oe(e, i)), "use" in E && t(1, b = E.use), "class" in E && t(2, _ = E.class), "open" in E && t(0, g = E.open), "selection" in E && t(3, C = E.selection), "escapeKeyAction" in E && t(20, v = E.escapeKeyAction), "scrimClickAction" in E && t(21, w = E.scrimClickAction), "autoStackButtons" in E && t(4, A = E.autoStackButtons), "fullscreen" in E && t(5, O = E.fullscreen), "sheet" in E && t(6, P = E.sheet), "noContentPadding" in E && t(7, m = E.noContentPadding), "container$class" in E && t(8, R = E.container$class), "surface$class" in E && t(9, z = E.surface$class), "$$scope" in E && t(28, s = E.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty[0] & /*instance, escapeKeyAction*/
    1049600 && h && h.getEscapeKeyAction() !== v && h.setEscapeKeyAction(v), n.$$.dirty[0] & /*instance, scrimClickAction*/
    2098176 && h && h.getScrimClickAction() !== w && h.setScrimClickAction(w), n.$$.dirty[0] & /*instance, autoStackButtons*/
    1040 && h && h.getAutoStackButtons() !== A && h.setAutoStackButtons(A), n.$$.dirty[0] & /*autoStackButtons*/
    16 && (A || Ct(W, o = !0, o)), n.$$.dirty[0] & /*instance, open*/
    1025 && h && h.isOpen() !== g && (g ? h.open({
      isAboveFullscreenDialog: !!se
    }) : h.close()), n.$$.dirty[0] & /*fullscreen, instance, previousAboveFullscreenShown, $aboveFullscreenShown*/
    201327648 && O && h && me !== l && (t(26, me = l), l ? h.showSurfaceScrim() : h.hideSurfaceScrim());
  }, [
    g,
    b,
    _,
    C,
    A,
    O,
    P,
    m,
    R,
    z,
    h,
    I,
    H,
    p,
    W,
    ue,
    nt,
    vt,
    K,
    r,
    v,
    w,
    je,
    Qe,
    at,
    Xe,
    me,
    l,
    s,
    a,
    yt,
    dt,
    Lt,
    Kt
  ];
}
class js extends de {
  constructor(e) {
    super(), ce(
      this,
      e,
      Ns,
      Bs,
      ae,
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
Be({
  class: "mdc-dialog__header",
  tag: "div",
  contexts: {
    "SMUI:icon-button:context": "dialog:header"
  }
});
Be({
  class: "mdc-dialog__title",
  tag: "h2"
});
const qs = Be({
  class: "mdc-dialog__content",
  tag: "div"
}), Vs = Be({
  class: "mdc-dialog__actions",
  tag: "div",
  classMap: {
    "smui-dialog__actions--reversed": "SMUI:dialog:actions:reversed"
  },
  contexts: {
    "SMUI:button:context": "dialog:action"
  }
}), Gs = (n) => ({}), Gi = (n) => ({}), zs = (n) => ({}), zi = (n) => ({}), Ws = (n) => ({}), Wi = (n) => ({});
function Ks(n) {
  let e;
  const t = (
    /*#slots*/
    n[1].content
  ), i = ne(
    t,
    n,
    /*$$scope*/
    n[4],
    zi
  );
  return {
    c() {
      i && i.c();
    },
    m(r, l) {
      i && i.m(r, l), e = !0;
    },
    p(r, l) {
      i && i.p && (!e || l & /*$$scope*/
      16) && re(
        i,
        t,
        r,
        /*$$scope*/
        r[4],
        e ? ie(
          t,
          /*$$scope*/
          r[4],
          l,
          zs
        ) : le(
          /*$$scope*/
          r[4]
        ),
        zi
      );
    },
    i(r) {
      e || (S(i, r), e = !0);
    },
    o(r) {
      L(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function Xs(n) {
  let e;
  const t = (
    /*#slots*/
    n[1].actions
  ), i = ne(
    t,
    n,
    /*$$scope*/
    n[4],
    Gi
  );
  return {
    c() {
      i && i.c();
    },
    m(r, l) {
      i && i.m(r, l), e = !0;
    },
    p(r, l) {
      i && i.p && (!e || l & /*$$scope*/
      16) && re(
        i,
        t,
        r,
        /*$$scope*/
        r[4],
        e ? ie(
          t,
          /*$$scope*/
          r[4],
          l,
          Gs
        ) : le(
          /*$$scope*/
          r[4]
        ),
        Gi
      );
    },
    i(r) {
      e || (S(i, r), e = !0);
    },
    o(r) {
      L(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function Zs(n) {
  let e, t, i, r, l, o;
  const a = (
    /*#slots*/
    n[1].title
  ), s = ne(
    a,
    n,
    /*$$scope*/
    n[4],
    Wi
  );
  return i = new qs({
    props: {
      id: "large-scroll-content",
      $$slots: { default: [Ks] },
      $$scope: { ctx: n }
    }
  }), l = new Vs({
    props: {
      $$slots: { default: [Xs] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      e = Z("div"), s && s.c(), t = Y(), j(i.$$.fragment), r = Y(), j(l.$$.fragment), U(e, "class", "dialog-title svelte-4sevka");
    },
    m(u, f) {
      F(u, e, f), s && s.m(e, null), F(u, t, f), B(i, u, f), F(u, r, f), B(l, u, f), o = !0;
    },
    p(u, f) {
      s && s.p && (!o || f & /*$$scope*/
      16) && re(
        s,
        a,
        u,
        /*$$scope*/
        u[4],
        o ? ie(
          a,
          /*$$scope*/
          u[4],
          f,
          Ws
        ) : le(
          /*$$scope*/
          u[4]
        ),
        Wi
      );
      const c = {};
      f & /*$$scope*/
      16 && (c.$$scope = { dirty: f, ctx: u }), i.$set(c);
      const d = {};
      f & /*$$scope*/
      16 && (d.$$scope = { dirty: f, ctx: u }), l.$set(d);
    },
    i(u) {
      o || (S(s, u), S(i.$$.fragment, u), S(l.$$.fragment, u), o = !0);
    },
    o(u) {
      L(s, u), L(i.$$.fragment, u), L(l.$$.fragment, u), o = !1;
    },
    d(u) {
      u && (M(e), M(t), M(r)), s && s.d(u), N(i, u), N(l, u);
    }
  };
}
function Ys(n) {
  let e, t, i;
  function r(o) {
    n[2](o);
  }
  let l = {
    "aria-labelledby": "large-scroll-title",
    "aria-describedby": "large-scroll-content",
    surface$style: "width: 1080px; max-width: calc(100vw - 32px);",
    $$slots: { default: [Zs] },
    $$scope: { ctx: n }
  };
  return (
    /*open*/
    n[0] !== void 0 && (l.open = /*open*/
    n[0]), e = new js({ props: l }), x.push(() => Ye(e, "open", r)), e.$on(
      "SMUIDialog:closed",
      /*SMUIDialog_closed_handler*/
      n[3]
    ), {
      c() {
        j(e.$$.fragment);
      },
      m(o, a) {
        B(e, o, a), i = !0;
      },
      p(o, [a]) {
        const s = {};
        a & /*$$scope*/
        16 && (s.$$scope = { dirty: a, ctx: o }), !t && a & /*open*/
        1 && (t = !0, s.open = /*open*/
        o[0], Ze(() => t = !1)), e.$set(s);
      },
      i(o) {
        i || (S(e.$$.fragment, o), i = !0);
      },
      o(o) {
        L(e.$$.fragment, o), i = !1;
      },
      d(o) {
        N(e, o);
      }
    }
  );
}
function Qs(n, e, t) {
  let { $$slots: i = {}, $$scope: r } = e, { open: l = !1 } = e;
  function o(s) {
    l = s, t(0, l);
  }
  const a = (s) => t(0, l = !1);
  return n.$$set = (s) => {
    "open" in s && t(0, l = s.open), "$$scope" in s && t(4, r = s.$$scope);
  }, [l, i, o, a, r];
}
class Ki extends de {
  constructor(e) {
    super(), ce(this, e, Qs, Ys, ae, { open: 0 });
  }
}
function Xi(n) {
  let e, t, i, r, l, o;
  return {
    c() {
      e = Z("div"), t = Z("div"), i = Z("div"), r = Y(), l = Z("span"), o = ke(
        /*message*/
        n[1]
      ), U(i, "class", "loading-spinner svelte-quxj5m"), U(l, "class", "loading-message svelte-quxj5m"), U(t, "class", "loading-spinner-container svelte-quxj5m"), U(e, "class", "overlay svelte-quxj5m");
    },
    m(a, s) {
      F(a, e, s), X(e, t), X(t, i), X(t, r), X(t, l), X(l, o);
    },
    p(a, s) {
      s & /*message*/
      2 && We(
        o,
        /*message*/
        a[1]
      );
    },
    d(a) {
      a && M(e);
    }
  };
}
function Js(n) {
  let e, t = !/*loadingDone*/
  n[0] && Xi(n);
  return {
    c() {
      e = Z("div"), t && t.c();
    },
    m(i, r) {
      F(i, e, r), t && t.m(e, null);
    },
    p(i, [r]) {
      /*loadingDone*/
      i[0] ? t && (t.d(1), t = null) : t ? t.p(i, r) : (t = Xi(i), t.c(), t.m(e, null));
    },
    i: Ie,
    o: Ie,
    d(i) {
      i && M(e), t && t.d();
    }
  };
}
function $s(n, e, t) {
  let { loadingDone: i = !0 } = e, { message: r = "Loading..." } = e;
  return n.$$set = (l) => {
    "loadingDone" in l && t(0, i = l.loadingDone), "message" in l && t(1, r = l.message);
  }, [i, r];
}
class xs extends de {
  constructor(e) {
    super(), ce(this, e, $s, Js, ae, { loadingDone: 0, message: 1 });
  }
}
Be({
  class: "smui-paper__content",
  tag: "div"
});
Be({
  class: "smui-paper__title",
  tag: "h5"
});
Be({
  class: "smui-paper__subtitle",
  tag: "h6"
});
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
var Je = {
  CLOSED_CLASS: "mdc-linear-progress--closed",
  CLOSED_ANIMATION_OFF_CLASS: "mdc-linear-progress--closed-animation-off",
  INDETERMINATE_CLASS: "mdc-linear-progress--indeterminate",
  REVERSED_CLASS: "mdc-linear-progress--reversed",
  ANIMATION_READY_CLASS: "mdc-linear-progress--animation-ready"
}, it = {
  ARIA_HIDDEN: "aria-hidden",
  ARIA_VALUEMAX: "aria-valuemax",
  ARIA_VALUEMIN: "aria-valuemin",
  ARIA_VALUENOW: "aria-valuenow",
  BUFFER_BAR_SELECTOR: ".mdc-linear-progress__buffer-bar",
  FLEX_BASIS: "flex-basis",
  PRIMARY_BAR_SELECTOR: ".mdc-linear-progress__primary-bar"
}, Yt = {
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
var eu = (
  /** @class */
  function(n) {
    et(e, n);
    function e(t) {
      var i = n.call(this, Le(Le({}, e.defaultAdapter), t)) || this;
      return i.observer = null, i;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Je;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return it;
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
      var t = this;
      this.determinate = !this.adapter.hasClass(Je.INDETERMINATE_CLASS), this.adapter.addClass(Je.ANIMATION_READY_CLASS), this.progress = 0, this.buffer = 1, this.observer = this.adapter.attachResizeObserver(function(i) {
        var r, l;
        if (!t.determinate)
          try {
            for (var o = ze(i), a = o.next(); !a.done; a = o.next()) {
              var s = a.value;
              s.contentRect && t.calculateAndSetDimensions(s.contentRect.width);
            }
          } catch (u) {
            r = { error: u };
          } finally {
            try {
              a && !a.done && (l = o.return) && l.call(o);
            } finally {
              if (r)
                throw r.error;
            }
          }
      }), !this.determinate && this.observer && this.calculateAndSetDimensions(this.adapter.getWidth());
    }, e.prototype.setDeterminate = function(t) {
      if (this.determinate = t, this.determinate) {
        this.adapter.removeClass(Je.INDETERMINATE_CLASS), this.adapter.setAttribute(it.ARIA_VALUENOW, this.progress.toString()), this.adapter.setAttribute(it.ARIA_VALUEMAX, "1"), this.adapter.setAttribute(it.ARIA_VALUEMIN, "0"), this.setPrimaryBarProgress(this.progress), this.setBufferBarProgress(this.buffer);
        return;
      }
      this.observer && this.calculateAndSetDimensions(this.adapter.getWidth()), this.adapter.addClass(Je.INDETERMINATE_CLASS), this.adapter.removeAttribute(it.ARIA_VALUENOW), this.adapter.removeAttribute(it.ARIA_VALUEMAX), this.adapter.removeAttribute(it.ARIA_VALUEMIN), this.setPrimaryBarProgress(1), this.setBufferBarProgress(1);
    }, e.prototype.isDeterminate = function() {
      return this.determinate;
    }, e.prototype.setProgress = function(t) {
      this.progress = t, this.determinate && (this.setPrimaryBarProgress(t), this.adapter.setAttribute(it.ARIA_VALUENOW, t.toString()));
    }, e.prototype.getProgress = function() {
      return this.progress;
    }, e.prototype.setBuffer = function(t) {
      this.buffer = t, this.determinate && this.setBufferBarProgress(t);
    }, e.prototype.getBuffer = function() {
      return this.buffer;
    }, e.prototype.open = function() {
      this.adapter.removeClass(Je.CLOSED_CLASS), this.adapter.removeClass(Je.CLOSED_ANIMATION_OFF_CLASS), this.adapter.removeAttribute(it.ARIA_HIDDEN);
    }, e.prototype.close = function() {
      this.adapter.addClass(Je.CLOSED_CLASS), this.adapter.setAttribute(it.ARIA_HIDDEN, "true");
    }, e.prototype.isClosed = function() {
      return this.adapter.hasClass(Je.CLOSED_CLASS);
    }, e.prototype.handleTransitionEnd = function() {
      this.adapter.hasClass(Je.CLOSED_CLASS) && this.adapter.addClass(Je.CLOSED_ANIMATION_OFF_CLASS);
    }, e.prototype.destroy = function() {
      n.prototype.destroy.call(this), this.observer && this.observer.disconnect();
    }, e.prototype.restartAnimation = function() {
      this.adapter.removeClass(Je.ANIMATION_READY_CLASS), this.adapter.forceLayout(), this.adapter.addClass(Je.ANIMATION_READY_CLASS);
    }, e.prototype.setPrimaryBarProgress = function(t) {
      var i = "scaleX(" + t + ")", r = typeof window < "u" ? Ls(window, "transform") : "transform";
      this.adapter.setPrimaryBarStyle(r, i);
    }, e.prototype.setBufferBarProgress = function(t) {
      var i = t * 100 + "%";
      this.adapter.setBufferBarStyle(it.FLEX_BASIS, i);
    }, e.prototype.calculateAndSetDimensions = function(t) {
      var i = t * Yt.PRIMARY_HALF, r = t * Yt.PRIMARY_FULL, l = t * Yt.SECONDARY_QUARTER, o = t * Yt.SECONDARY_HALF, a = t * Yt.SECONDARY_FULL;
      this.adapter.setStyle("--mdc-linear-progress-primary-half", i + "px"), this.adapter.setStyle("--mdc-linear-progress-primary-half-neg", -i + "px"), this.adapter.setStyle("--mdc-linear-progress-primary-full", r + "px"), this.adapter.setStyle("--mdc-linear-progress-primary-full-neg", -r + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-quarter", l + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-quarter-neg", -l + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-half", o + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-half-neg", -o + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-full", a + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-full-neg", -a + "px"), this.restartAnimation();
    }, e;
  }(ct)
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
var ht = {
  HEADER_CELL_SORTED: "mdc-data-table__header-cell--sorted",
  HEADER_CELL_SORTED_DESCENDING: "mdc-data-table__header-cell--sorted-descending",
  IN_PROGRESS: "mdc-data-table--in-progress",
  ROW_SELECTED: "mdc-data-table__row--selected"
}, Zi = {
  ARIA_SELECTED: "aria-selected",
  ARIA_SORT: "aria-sort"
}, wt = {
  ARIA_SELECTED: Zi.ARIA_SELECTED,
  ARIA_SORT: Zi.ARIA_SORT
}, $e;
(function(n) {
  n.ASCENDING = "ascending", n.DESCENDING = "descending", n.NONE = "none", n.OTHER = "other";
})($e || ($e = {}));
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
var tu = (
  /** @class */
  function(n) {
    et(e, n);
    function e(t) {
      return n.call(this, Le(Le({}, e.defaultAdapter), t)) || this;
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
      return jr(this, void 0, void 0, function() {
        return Bn(this, function(t) {
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
      for (var i = 0; i < this.adapter.getRowCount(); i++) {
        var r = this.adapter.getRowIdAtIndex(i), l = !1;
        r && t.indexOf(r) >= 0 && (l = !0), this.adapter.setRowCheckboxCheckedAtIndex(i, l), this.selectRowAtIndex(i, l);
      }
      this.setHeaderRowCheckboxState();
    }, e.prototype.getRowIds = function() {
      for (var t = [], i = 0; i < this.adapter.getRowCount(); i++)
        t.push(this.adapter.getRowIdAtIndex(i));
      return t;
    }, e.prototype.getSelectedRowIds = function() {
      for (var t = [], i = 0; i < this.adapter.getRowCount(); i++)
        this.adapter.isCheckboxAtRowIndexChecked(i) && t.push(this.adapter.getRowIdAtIndex(i));
      return t;
    }, e.prototype.handleHeaderRowCheckboxChange = function() {
      for (var t = this.adapter.isHeaderRowCheckboxChecked(), i = 0; i < this.adapter.getRowCount(); i++)
        this.adapter.setRowCheckboxCheckedAtIndex(i, t), this.selectRowAtIndex(i, t);
      t ? this.adapter.notifySelectedAll() : this.adapter.notifyUnselectedAll();
    }, e.prototype.handleRowCheckboxChange = function(t) {
      var i = this.adapter.getRowIndexByChildElement(t.target);
      if (i !== -1) {
        var r = this.adapter.isCheckboxAtRowIndexChecked(i);
        this.selectRowAtIndex(i, r), this.setHeaderRowCheckboxState();
        var l = this.adapter.getRowIdAtIndex(i);
        this.adapter.notifyRowSelectionChanged({ rowId: l, rowIndex: i, selected: r });
      }
    }, e.prototype.handleSortAction = function(t) {
      for (var i = t.columnId, r = t.columnIndex, l = t.headerCell, o = 0; o < this.adapter.getHeaderCellCount(); o++)
        o !== r && (this.adapter.removeClassNameByHeaderCellIndex(o, ht.HEADER_CELL_SORTED), this.adapter.removeClassNameByHeaderCellIndex(o, ht.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(o, wt.ARIA_SORT, $e.NONE), this.adapter.setSortStatusLabelByHeaderCellIndex(o, $e.NONE));
      this.adapter.setClassNameByHeaderCellIndex(r, ht.HEADER_CELL_SORTED);
      var a = this.adapter.getAttributeByHeaderCellIndex(r, wt.ARIA_SORT), s = $e.NONE;
      a === $e.ASCENDING ? (this.adapter.setClassNameByHeaderCellIndex(r, ht.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(r, wt.ARIA_SORT, $e.DESCENDING), s = $e.DESCENDING) : a === $e.DESCENDING ? (this.adapter.removeClassNameByHeaderCellIndex(r, ht.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(r, wt.ARIA_SORT, $e.ASCENDING), s = $e.ASCENDING) : (this.adapter.setAttributeByHeaderCellIndex(r, wt.ARIA_SORT, $e.ASCENDING), s = $e.ASCENDING), this.adapter.setSortStatusLabelByHeaderCellIndex(r, s), this.adapter.notifySortAction({
        columnId: i,
        columnIndex: r,
        headerCell: l,
        sortValue: s
      });
    }, e.prototype.handleRowClick = function(t) {
      var i = t.rowId, r = t.row;
      this.adapter.notifyRowClick({
        rowId: i,
        row: r
      });
    }, e.prototype.showProgress = function() {
      var t = this.adapter.getTableHeaderHeight(), i = this.adapter.getTableContainerHeight() - t, r = t;
      this.adapter.setProgressIndicatorStyles({
        height: i + "px",
        top: r + "px"
      }), this.adapter.addClass(ht.IN_PROGRESS);
    }, e.prototype.hideProgress = function() {
      this.adapter.removeClass(ht.IN_PROGRESS);
    }, e.prototype.setHeaderRowCheckboxState = function() {
      this.adapter.getSelectedRowCount() === 0 ? (this.adapter.setHeaderRowCheckboxChecked(!1), this.adapter.setHeaderRowCheckboxIndeterminate(!1)) : this.adapter.getSelectedRowCount() === this.adapter.getRowCount() ? (this.adapter.setHeaderRowCheckboxChecked(!0), this.adapter.setHeaderRowCheckboxIndeterminate(!1)) : (this.adapter.setHeaderRowCheckboxIndeterminate(!0), this.adapter.setHeaderRowCheckboxChecked(!1));
    }, e.prototype.selectRowAtIndex = function(t, i) {
      i ? (this.adapter.addClassAtRowIndex(t, ht.ROW_SELECTED), this.adapter.setAttributeAtRowIndex(t, wt.ARIA_SELECTED, "true")) : (this.adapter.removeClassAtRowIndex(t, ht.ROW_SELECTED), this.adapter.setAttributeAtRowIndex(t, wt.ARIA_SELECTED, "false"));
    }, e;
  }(ct)
);
const nu = (n) => ({}), Yi = (n) => ({}), iu = (n) => ({}), Qi = (n) => ({});
function Ji(n) {
  let e, t, i, r, l;
  const o = (
    /*#slots*/
    n[36].progress
  ), a = ne(
    o,
    n,
    /*$$scope*/
    n[35],
    Qi
  );
  return {
    c() {
      e = Z("div"), t = Z("div"), i = Y(), a && a.c(), U(t, "class", "mdc-data-table__scrim"), U(e, "class", "mdc-data-table__progress-indicator"), U(e, "style", r = Object.entries(
        /*progressIndicatorStyles*/
        n[13]
      ).map($i).join(" "));
    },
    m(s, u) {
      F(s, e, u), X(e, t), X(e, i), a && a.m(e, null), l = !0;
    },
    p(s, u) {
      a && a.p && (!l || u[1] & /*$$scope*/
      16) && re(
        a,
        o,
        s,
        /*$$scope*/
        s[35],
        l ? ie(
          o,
          /*$$scope*/
          s[35],
          u,
          iu
        ) : le(
          /*$$scope*/
          s[35]
        ),
        Qi
      ), (!l || u[0] & /*progressIndicatorStyles*/
      8192 && r !== (r = Object.entries(
        /*progressIndicatorStyles*/
        s[13]
      ).map($i).join(" "))) && U(e, "style", r);
    },
    i(s) {
      l || (S(a, s), l = !0);
    },
    o(s) {
      L(a, s), l = !1;
    },
    d(s) {
      s && M(e), a && a.d(s);
    }
  };
}
function ru(n) {
  let e, t, i, r, l, o, a, s, u, f, c, d, p, b;
  const _ = (
    /*#slots*/
    n[36].default
  ), g = ne(
    _,
    n,
    /*$$scope*/
    n[35],
    null
  );
  let C = [
    {
      class: r = Q({
        [
          /*table$class*/
          n[6]
        ]: !0,
        "mdc-data-table__table": !0
      })
    },
    Me(
      /*$$restProps*/
      n[25],
      "table$"
    )
  ], v = {};
  for (let I = 0; I < C.length; I += 1)
    v = V(v, C[I]);
  let w = [
    {
      class: o = Q({
        [
          /*container$class*/
          n[4]
        ]: !0,
        "mdc-data-table__table-container": !0
      })
    },
    Me(
      /*$$restProps*/
      n[25],
      "container$"
    )
  ], A = {};
  for (let I = 0; I < w.length; I += 1)
    A = V(A, w[I]);
  let O = (
    /*$$slots*/
    n[24].progress && Ji(n)
  );
  const P = (
    /*#slots*/
    n[36].paginate
  ), m = ne(
    P,
    n,
    /*$$scope*/
    n[35],
    Yi
  );
  let R = [
    {
      class: f = Q({
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
    It(
      /*$$restProps*/
      n[25],
      ["container$", "table$"]
    )
  ], z = {};
  for (let I = 0; I < R.length; I += 1)
    z = V(z, R[I]);
  return {
    c() {
      e = Z("div"), t = Z("div"), i = Z("table"), g && g.c(), s = Y(), O && O.c(), u = Y(), m && m.c(), te(i, v), te(t, A), te(e, z);
    },
    m(I, h) {
      F(I, e, h), X(e, t), X(t, i), g && g.m(i, null), n[37](t), X(e, s), O && O.m(e, null), X(e, u), m && m.m(e, null), n[38](e), d = !0, p || (b = [
        ee(l = De.call(
          null,
          i,
          /*table$use*/
          n[5]
        )),
        ee(a = De.call(
          null,
          t,
          /*container$use*/
          n[3]
        )),
        ee(c = De.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        ee(
          /*forwardEvents*/
          n[15].call(null, e)
        ),
        $(
          e,
          "SMUICheckbox:mount",
          /*SMUICheckbox_mount_handler*/
          n[39]
        ),
        $(
          e,
          "SMUIDataTableHeader:mount",
          /*handleHeaderMount*/
          n[19]
        ),
        $(
          e,
          "SMUIDataTableHeader:unmount",
          /*SMUIDataTableHeader_unmount_handler*/
          n[40]
        ),
        $(
          e,
          "SMUIDataTableBody:mount",
          /*handleBodyMount*/
          n[20]
        ),
        $(
          e,
          "SMUIDataTableBody:unmount",
          /*SMUIDataTableBody_unmount_handler*/
          n[41]
        ),
        $(
          e,
          "SMUIDataTableHeaderCheckbox:change",
          /*SMUIDataTableHeaderCheckbox_change_handler*/
          n[42]
        ),
        $(
          e,
          "SMUIDataTableHeader:click",
          /*handleHeaderRowClick*/
          n[22]
        ),
        $(
          e,
          "SMUIDataTableRow:click",
          /*handleRowClick*/
          n[23]
        ),
        $(
          e,
          "SMUIDataTableBodyCheckbox:change",
          /*handleBodyCheckboxChange*/
          n[21]
        )
      ], p = !0);
    },
    p(I, h) {
      g && g.p && (!d || h[1] & /*$$scope*/
      16) && re(
        g,
        _,
        I,
        /*$$scope*/
        I[35],
        d ? ie(
          _,
          /*$$scope*/
          I[35],
          h,
          null
        ) : le(
          /*$$scope*/
          I[35]
        ),
        null
      ), te(i, v = fe(C, [
        (!d || h[0] & /*table$class*/
        64 && r !== (r = Q({
          [
            /*table$class*/
            I[6]
          ]: !0,
          "mdc-data-table__table": !0
        }))) && { class: r },
        h[0] & /*$$restProps*/
        33554432 && Me(
          /*$$restProps*/
          I[25],
          "table$"
        )
      ])), l && he(l.update) && h[0] & /*table$use*/
      32 && l.update.call(
        null,
        /*table$use*/
        I[5]
      ), te(t, A = fe(w, [
        (!d || h[0] & /*container$class*/
        16 && o !== (o = Q({
          [
            /*container$class*/
            I[4]
          ]: !0,
          "mdc-data-table__table-container": !0
        }))) && { class: o },
        h[0] & /*$$restProps*/
        33554432 && Me(
          /*$$restProps*/
          I[25],
          "container$"
        )
      ])), a && he(a.update) && h[0] & /*container$use*/
      8 && a.update.call(
        null,
        /*container$use*/
        I[3]
      ), /*$$slots*/
      I[24].progress ? O ? (O.p(I, h), h[0] & /*$$slots*/
      16777216 && S(O, 1)) : (O = Ji(I), O.c(), S(O, 1), O.m(e, u)) : O && (pe(), L(O, 1, 1, () => {
        O = null;
      }), _e()), m && m.p && (!d || h[1] & /*$$scope*/
      16) && re(
        m,
        P,
        I,
        /*$$scope*/
        I[35],
        d ? ie(
          P,
          /*$$scope*/
          I[35],
          h,
          nu
        ) : le(
          /*$$scope*/
          I[35]
        ),
        Yi
      ), te(e, z = fe(R, [
        (!d || h[0] & /*className, stickyHeader, internalClasses*/
        4102 && f !== (f = Q({
          [
            /*className*/
            I[1]
          ]: !0,
          "mdc-data-table": !0,
          "mdc-data-table--sticky-header": (
            /*stickyHeader*/
            I[2]
          ),
          .../*internalClasses*/
          I[12]
        }))) && { class: f },
        h[0] & /*$$restProps*/
        33554432 && It(
          /*$$restProps*/
          I[25],
          ["container$", "table$"]
        )
      ])), c && he(c.update) && h[0] & /*use*/
      1 && c.update.call(
        null,
        /*use*/
        I[0]
      );
    },
    i(I) {
      d || (S(g, I), S(O), S(m, I), d = !0);
    },
    o(I) {
      L(g, I), L(O), L(m, I), d = !1;
    },
    d(I) {
      I && M(e), g && g.d(I), n[37](null), O && O.d(), m && m.d(I), n[38](null), p = !1, Ce(b);
    }
  };
}
const $i = ([n, e]) => `${n}: ${e};`;
function lu(n, e, t) {
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
  let r = oe(e, i), l, o, a, { $$slots: s = {}, $$scope: u } = e;
  const f = Or(s), { closest: c } = Nn, d = Pe(Re());
  let { use: p = [] } = e, { class: b = "" } = e, { stickyHeader: _ = !1 } = e, { sortable: g = !1 } = e, { sort: C = null } = e, { sortDirection: v = "ascending" } = e, { sortAscendingAriaLabel: w = "sorted, ascending" } = e, { sortDescendingAriaLabel: A = "sorted, descending" } = e, { container$use: O = [] } = e, { container$class: P = "" } = e, { table$use: m = [] } = e, { table$class: R = "" } = e, z, I, h, H, D, W = {}, se = { height: "auto", top: "initial" }, ue = Oe("SMUI:addLayoutListener"), J, T = !1, y = ut(!1);
  xe(n, y, (E) => t(34, l = E));
  let G = ut(C);
  xe(n, G, (E) => t(45, a = E));
  let me = ut(v);
  xe(n, me, (E) => t(44, o = E)), we("SMUI:checkbox:context", "data-table"), we("SMUI:linear-progress:context", "data-table"), we("SMUI:linear-progress:closed", y), we("SMUI:data-table:sortable", g), we("SMUI:data-table:sort", G), we("SMUI:data-table:sortDirection", me), we("SMUI:data-table:sortAscendingAriaLabel", w), we("SMUI:data-table:sortDescendingAriaLabel", A), ue && (J = ue(je));
  let Ae;
  Ke(() => (t(7, I = new tu({
    addClass: Ge,
    removeClass: He,
    getHeaderCellElements: () => {
      var E;
      return (E = H == null ? void 0 : H.cells.map((q) => q.element)) !== null && E !== void 0 ? E : [];
    },
    getHeaderCellCount: () => {
      var E;
      return (E = H == null ? void 0 : H.cells.length) !== null && E !== void 0 ? E : 0;
    },
    getAttributeByHeaderCellIndex: (E, q) => {
      var be;
      return (be = H == null ? void 0 : H.orderedCells[E].getAttr(q)) !== null && be !== void 0 ? be : null;
    },
    setAttributeByHeaderCellIndex: (E, q, be) => {
      H == null || H.orderedCells[E].addAttr(q, be);
    },
    setClassNameByHeaderCellIndex: (E, q) => {
      H == null || H.orderedCells[E].addClass(q);
    },
    removeClassNameByHeaderCellIndex: (E, q) => {
      H == null || H.orderedCells[E].removeClass(q);
    },
    notifySortAction: (E) => {
      t(26, C = E.columnId), t(27, v = E.sortValue), ge(Qe(), "SMUIDataTable:sorted", E, void 0, !0);
    },
    getTableContainerHeight: () => h.getBoundingClientRect().height,
    getTableHeaderHeight: () => {
      const E = Qe().querySelector(".mdc-data-table__header-row");
      if (!E)
        throw new Error("MDCDataTable: Table header element not found.");
      return E.getBoundingClientRect().height;
    },
    setProgressIndicatorStyles: (E) => {
      t(13, se = E);
    },
    addClassAtRowIndex: (E, q) => {
      D == null || D.orderedRows[E].addClass(q);
    },
    getRowCount: () => {
      var E;
      return (E = D == null ? void 0 : D.rows.length) !== null && E !== void 0 ? E : 0;
    },
    getRowElements: () => {
      var E;
      return (E = D == null ? void 0 : D.rows.map((q) => q.element)) !== null && E !== void 0 ? E : [];
    },
    getRowIdAtIndex: (E) => {
      var q;
      return (q = D == null ? void 0 : D.orderedRows[E].rowId) !== null && q !== void 0 ? q : null;
    },
    getRowIndexByChildElement: (E) => {
      var q;
      return (q = D == null ? void 0 : D.orderedRows.map((be) => be.element).indexOf(c(E, ".mdc-data-table__row"))) !== null && q !== void 0 ? q : -1;
    },
    getSelectedRowCount: () => {
      var E;
      return (E = D == null ? void 0 : D.rows.filter((q) => q.selected).length) !== null && E !== void 0 ? E : 0;
    },
    isCheckboxAtRowIndexChecked: (E) => {
      const q = D == null ? void 0 : D.orderedRows[E].checkbox;
      return q ? q.checked : !1;
    },
    isHeaderRowCheckboxChecked: () => {
      const E = H == null ? void 0 : H.checkbox;
      return E ? E.checked : !1;
    },
    isRowsSelectable: () => !!Qe().querySelector(".mdc-data-table__row-checkbox") || !!Qe().querySelector(".mdc-data-table__header-row-checkbox"),
    notifyRowSelectionChanged: (E) => {
      const q = D == null ? void 0 : D.orderedRows[E.rowIndex];
      q && ge(
        Qe(),
        "SMUIDataTable:rowSelectionChanged",
        {
          row: q.element,
          rowId: q.rowId,
          rowIndex: E.rowIndex,
          selected: E.selected
        },
        void 0,
        !0
      );
    },
    notifySelectedAll: () => {
      tt(!1), ge(Qe(), "SMUIDataTable:selectedAll", void 0, void 0, !0);
    },
    notifyUnselectedAll: () => {
      tt(!1), ge(Qe(), "SMUIDataTable:unselectedAll", void 0, void 0, !0);
    },
    notifyRowClick: (E) => {
      ge(Qe(), "SMUIDataTable:rowClick", E, void 0, !0);
    },
    registerHeaderRowCheckbox: () => {
    },
    // Handled automatically.
    registerRowCheckboxes: () => {
    },
    // Handled automatically.
    removeClassAtRowIndex: (E, q) => {
      D == null || D.orderedRows[E].removeClass(q);
    },
    setAttributeAtRowIndex: (E, q, be) => {
      D == null || D.orderedRows[E].addAttr(q, be);
    },
    setHeaderRowCheckboxChecked: (E) => {
      const q = H == null ? void 0 : H.checkbox;
      q && (q.checked = E);
    },
    setHeaderRowCheckboxIndeterminate: tt,
    setRowCheckboxCheckedAtIndex: (E, q) => {
      const be = D == null ? void 0 : D.orderedRows[E].checkbox;
      be && (be.checked = q);
    },
    setSortStatusLabelByHeaderCellIndex: (E, q) => {
    }
    // Handled automatically.
  })), I.init(), I.layout(), t(14, T = !0), () => {
    I.destroy();
  })), Wt(() => {
    J && J();
  });
  function qe(E) {
    t(10, H = E.detail);
  }
  function Ve(E) {
    t(11, D = E.detail);
  }
  function ve(E) {
    I && I.handleRowCheckboxChange(E);
  }
  function Ge(E) {
    W[E] || t(12, W[E] = !0, W);
  }
  function He(E) {
    (!(E in W) || W[E]) && t(12, W[E] = !1, W);
  }
  function tt(E) {
    const q = H == null ? void 0 : H.checkbox;
    q && (q.indeterminate = E);
  }
  function nt(E) {
    if (!I || !E.detail.target)
      return;
    const q = c(E.detail.target, ".mdc-data-table__header-cell--with-sort");
    q && K(q);
  }
  function vt(E) {
    if (!I || !E.detail.target)
      return;
    const q = c(E.detail.target, ".mdc-data-table__row");
    q && I && I.handleRowClick({ rowId: E.detail.rowId, row: q });
  }
  function K(E) {
    var q, be;
    const ot = (q = H == null ? void 0 : H.orderedCells) !== null && q !== void 0 ? q : [], Xt = ot.map((tn) => tn.element).indexOf(E);
    if (Xt === -1)
      return;
    const en = (be = ot[Xt].columnId) !== null && be !== void 0 ? be : null;
    I.handleSortAction({ columnId: en, columnIndex: Xt, headerCell: E });
  }
  function je() {
    return I.layout();
  }
  function Qe() {
    return z;
  }
  function at(E) {
    x[E ? "unshift" : "push"](() => {
      h = E, t(9, h);
    });
  }
  function Xe(E) {
    x[E ? "unshift" : "push"](() => {
      z = E, t(8, z);
    });
  }
  const yt = () => I && T && I.layout(), dt = () => t(10, H = void 0), Lt = () => t(11, D = void 0), Kt = () => I && I.handleHeaderRowCheckboxChange();
  return n.$$set = (E) => {
    e = V(V({}, e), Fe(E)), t(25, r = oe(e, i)), "use" in E && t(0, p = E.use), "class" in E && t(1, b = E.class), "stickyHeader" in E && t(2, _ = E.stickyHeader), "sortable" in E && t(28, g = E.sortable), "sort" in E && t(26, C = E.sort), "sortDirection" in E && t(27, v = E.sortDirection), "sortAscendingAriaLabel" in E && t(29, w = E.sortAscendingAriaLabel), "sortDescendingAriaLabel" in E && t(30, A = E.sortDescendingAriaLabel), "container$use" in E && t(3, O = E.container$use), "container$class" in E && t(4, P = E.container$class), "table$use" in E && t(5, m = E.table$use), "table$class" in E && t(6, R = E.table$class), "$$scope" in E && t(35, u = E.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty[0] & /*sort*/
    67108864 && Ct(G, a = C, a), n.$$.dirty[0] & /*sortDirection*/
    134217728 && Ct(me, o = v, o), n.$$.dirty[0] & /*instance*/
    128 | n.$$.dirty[1] & /*previousProgressClosed, $progressClosed*/
    12 && f.progress && I && Ae !== l && (t(33, Ae = l), l ? I.hideProgress() : I.showProgress());
  }, [
    p,
    b,
    _,
    O,
    P,
    m,
    R,
    I,
    z,
    h,
    H,
    D,
    W,
    se,
    T,
    d,
    y,
    G,
    me,
    qe,
    Ve,
    ve,
    nt,
    vt,
    f,
    r,
    C,
    v,
    g,
    w,
    A,
    je,
    Qe,
    Ae,
    l,
    u,
    s,
    at,
    Xe,
    yt,
    dt,
    Lt,
    Kt
  ];
}
class au extends de {
  constructor(e) {
    super(), ce(
      this,
      e,
      lu,
      ru,
      ae,
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
function ou(n) {
  let e, t, i, r, l;
  const o = (
    /*#slots*/
    n[10].default
  ), a = ne(
    o,
    n,
    /*$$scope*/
    n[9],
    null
  );
  let s = [
    /*$$restProps*/
    n[7]
  ], u = {};
  for (let f = 0; f < s.length; f += 1)
    u = V(u, s[f]);
  return {
    c() {
      e = Z("thead"), a && a.c(), te(e, u);
    },
    m(f, c) {
      F(f, e, c), a && a.m(e, null), n[11](e), i = !0, r || (l = [
        ee(t = De.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        ee(
          /*forwardEvents*/
          n[3].call(null, e)
        ),
        $(
          e,
          "SMUICheckbox:mount",
          /*handleCheckboxMount*/
          n[4]
        ),
        $(
          e,
          "SMUICheckbox:unmount",
          /*SMUICheckbox_unmount_handler*/
          n[12]
        ),
        $(
          e,
          "SMUIDataTableCell:mount",
          /*handleCellMount*/
          n[5]
        ),
        $(
          e,
          "SMUIDataTableCell:unmount",
          /*handleCellUnmount*/
          n[6]
        )
      ], r = !0);
    },
    p(f, [c]) {
      a && a.p && (!i || c & /*$$scope*/
      512) && re(
        a,
        o,
        f,
        /*$$scope*/
        f[9],
        i ? ie(
          o,
          /*$$scope*/
          f[9],
          c,
          null
        ) : le(
          /*$$scope*/
          f[9]
        ),
        null
      ), te(e, u = fe(s, [c & /*$$restProps*/
      128 && /*$$restProps*/
      f[7]])), t && he(t.update) && c & /*use*/
      1 && t.update.call(
        null,
        /*use*/
        f[0]
      );
    },
    i(f) {
      i || (S(a, f), i = !0);
    },
    o(f) {
      L(a, f), i = !1;
    },
    d(f) {
      f && M(e), a && a.d(f), n[11](null), r = !1, Ce(l);
    }
  };
}
function su(n, e, t) {
  const i = ["use", "getElement"];
  let r = oe(e, i), { $$slots: l = {}, $$scope: o } = e;
  const a = Pe(Re());
  let { use: s = [] } = e, u, f, c = [];
  const d = /* @__PURE__ */ new WeakMap();
  we("SMUI:data-table:row:header", !0), Ke(() => {
    const A = {
      get cells() {
        return c;
      },
      get orderedCells() {
        return g();
      },
      get checkbox() {
        return f;
      }
    };
    return ge(C(), "SMUIDataTableHeader:mount", A), () => {
      ge(C(), "SMUIDataTableHeader:unmount", A);
    };
  });
  function p(A) {
    t(2, f = A.detail);
  }
  function b(A) {
    c.push(A.detail), d.set(A.detail.element, A.detail), A.stopPropagation();
  }
  function _(A) {
    const O = c.indexOf(A.detail);
    O !== -1 && (c.splice(O, 1), c = c), d.delete(A.detail.element), A.stopPropagation();
  }
  function g() {
    return [...C().querySelectorAll(".mdc-data-table__header-cell")].map((A) => d.get(A)).filter((A) => A && A._smui_data_table_header_cell_accessor);
  }
  function C() {
    return u;
  }
  function v(A) {
    x[A ? "unshift" : "push"](() => {
      u = A, t(1, u);
    });
  }
  const w = () => t(2, f = void 0);
  return n.$$set = (A) => {
    e = V(V({}, e), Fe(A)), t(7, r = oe(e, i)), "use" in A && t(0, s = A.use), "$$scope" in A && t(9, o = A.$$scope);
  }, [
    s,
    u,
    f,
    a,
    p,
    b,
    _,
    r,
    C,
    o,
    l,
    v,
    w
  ];
}
class uu extends de {
  constructor(e) {
    super(), ce(this, e, su, ou, ae, { use: 0, getElement: 8 });
  }
  get getElement() {
    return this.$$.ctx[8];
  }
}
function fu(n) {
  let e, t, i, r, l, o;
  const a = (
    /*#slots*/
    n[9].default
  ), s = ne(
    a,
    n,
    /*$$scope*/
    n[8],
    null
  );
  let u = [
    {
      class: t = Q({
        [
          /*className*/
          n[1]
        ]: !0,
        "mdc-data-table__content": !0
      })
    },
    /*$$restProps*/
    n[6]
  ], f = {};
  for (let c = 0; c < u.length; c += 1)
    f = V(f, u[c]);
  return {
    c() {
      e = Z("tbody"), s && s.c(), te(e, f);
    },
    m(c, d) {
      F(c, e, d), s && s.m(e, null), n[10](e), r = !0, l || (o = [
        ee(i = De.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        ee(
          /*forwardEvents*/
          n[3].call(null, e)
        ),
        $(
          e,
          "SMUIDataTableRow:mount",
          /*handleRowMount*/
          n[4]
        ),
        $(
          e,
          "SMUIDataTableRow:unmount",
          /*handleRowUnmount*/
          n[5]
        )
      ], l = !0);
    },
    p(c, [d]) {
      s && s.p && (!r || d & /*$$scope*/
      256) && re(
        s,
        a,
        c,
        /*$$scope*/
        c[8],
        r ? ie(
          a,
          /*$$scope*/
          c[8],
          d,
          null
        ) : le(
          /*$$scope*/
          c[8]
        ),
        null
      ), te(e, f = fe(u, [
        (!r || d & /*className*/
        2 && t !== (t = Q({
          [
            /*className*/
            c[1]
          ]: !0,
          "mdc-data-table__content": !0
        }))) && { class: t },
        d & /*$$restProps*/
        64 && /*$$restProps*/
        c[6]
      ])), i && he(i.update) && d & /*use*/
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
      L(s, c), r = !1;
    },
    d(c) {
      c && M(e), s && s.d(c), n[10](null), l = !1, Ce(o);
    }
  };
}
function cu(n, e, t) {
  const i = ["use", "class", "getElement"];
  let r = oe(e, i), { $$slots: l = {}, $$scope: o } = e;
  const a = Pe(Re());
  let { use: s = [] } = e, { class: u = "" } = e, f, c = [];
  const d = /* @__PURE__ */ new WeakMap();
  we("SMUI:data-table:row:header", !1), Ke(() => {
    const v = {
      get rows() {
        return c;
      },
      get orderedRows() {
        return _();
      }
    };
    return ge(g(), "SMUIDataTableBody:mount", v), () => {
      ge(g(), "SMUIDataTableBody:unmount", v);
    };
  });
  function p(v) {
    c.push(v.detail), d.set(v.detail.element, v.detail), v.stopPropagation();
  }
  function b(v) {
    const w = c.indexOf(v.detail);
    w !== -1 && (c.splice(w, 1), c = c), d.delete(v.detail.element), v.stopPropagation();
  }
  function _() {
    return [...g().querySelectorAll(".mdc-data-table__row")].map((v) => d.get(v)).filter((v) => v && v._smui_data_table_row_accessor);
  }
  function g() {
    return f;
  }
  function C(v) {
    x[v ? "unshift" : "push"](() => {
      f = v, t(2, f);
    });
  }
  return n.$$set = (v) => {
    e = V(V({}, e), Fe(v)), t(6, r = oe(e, i)), "use" in v && t(0, s = v.use), "class" in v && t(1, u = v.class), "$$scope" in v && t(8, o = v.$$scope);
  }, [
    s,
    u,
    f,
    a,
    p,
    b,
    r,
    g,
    o,
    l,
    C
  ];
}
class du extends de {
  constructor(e) {
    super(), ce(this, e, cu, fu, ae, { use: 0, class: 1, getElement: 7 });
  }
  get getElement() {
    return this.$$.ctx[7];
  }
}
function mu(n) {
  let e, t, i, r, l, o, a;
  const s = (
    /*#slots*/
    n[15].default
  ), u = ne(
    s,
    n,
    /*$$scope*/
    n[14],
    null
  );
  let f = [
    {
      class: t = Q({
        [
          /*className*/
          n[1]
        ]: !0,
        "mdc-data-table__header-row": (
          /*header*/
          n[7]
        ),
        "mdc-data-table__row": !/*header*/
        n[7],
        "mdc-data-table__row--selected": !/*header*/
        n[7] && /*checkbox*/
        n[3] && /*checkbox*/
        n[3].checked,
        .../*internalClasses*/
        n[4]
      })
    },
    {
      "aria-selected": i = /*checkbox*/
      n[3] ? (
        /*checkbox*/
        n[3].checked ? "true" : "false"
      ) : void 0
    },
    /*internalAttrs*/
    n[5],
    /*$$restProps*/
    n[11]
  ], c = {};
  for (let d = 0; d < f.length; d += 1)
    c = V(c, f[d]);
  return {
    c() {
      e = Z("tr"), u && u.c(), te(e, c);
    },
    m(d, p) {
      F(d, e, p), u && u.m(e, null), n[16](e), l = !0, o || (a = [
        ee(r = De.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        ee(
          /*forwardEvents*/
          n[6].call(null, e)
        ),
        $(
          e,
          "click",
          /*click_handler*/
          n[17]
        ),
        $(
          e,
          "SMUICheckbox:mount",
          /*handleCheckboxMount*/
          n[8]
        ),
        $(
          e,
          "SMUICheckbox:unmount",
          /*SMUICheckbox_unmount_handler*/
          n[18]
        )
      ], o = !0);
    },
    p(d, [p]) {
      u && u.p && (!l || p & /*$$scope*/
      16384) && re(
        u,
        s,
        d,
        /*$$scope*/
        d[14],
        l ? ie(
          s,
          /*$$scope*/
          d[14],
          p,
          null
        ) : le(
          /*$$scope*/
          d[14]
        ),
        null
      ), te(e, c = fe(f, [
        (!l || p & /*className, checkbox, internalClasses*/
        26 && t !== (t = Q({
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
        }))) && { class: t },
        (!l || p & /*checkbox*/
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
      ])), r && he(r.update) && p & /*use*/
      1 && r.update.call(
        null,
        /*use*/
        d[0]
      );
    },
    i(d) {
      l || (S(u, d), l = !0);
    },
    o(d) {
      L(u, d), l = !1;
    },
    d(d) {
      d && M(e), u && u.d(d), n[16](null), o = !1, Ce(a);
    }
  };
}
let hu = 0;
function gu(n, e, t) {
  const i = ["use", "class", "rowId", "getElement"];
  let r = oe(e, i), { $$slots: l = {}, $$scope: o } = e;
  const a = Pe(Re());
  let { use: s = [] } = e, { class: u = "" } = e, { rowId: f = "SMUI-data-table-row-" + hu++ } = e, c, d, p = {}, b = {}, _ = Oe("SMUI:data-table:row:header");
  Ke(() => {
    const h = _ ? {
      _smui_data_table_row_accessor: !1,
      get element() {
        return m();
      },
      get checkbox() {
        return d;
      },
      get rowId() {
      },
      get selected() {
        var H;
        return (H = d && d.checked) !== null && H !== void 0 ? H : !1;
      },
      addClass: C,
      removeClass: v,
      getAttr: w,
      addAttr: A
    } : {
      _smui_data_table_row_accessor: !0,
      get element() {
        return m();
      },
      get checkbox() {
        return d;
      },
      get rowId() {
        return f;
      },
      get selected() {
        var H;
        return (H = d && d.checked) !== null && H !== void 0 ? H : !1;
      },
      addClass: C,
      removeClass: v,
      getAttr: w,
      addAttr: A
    };
    return ge(m(), "SMUIDataTableRow:mount", h), () => {
      ge(m(), "SMUIDataTableRow:unmount", h);
    };
  });
  function g(h) {
    t(3, d = h.detail);
  }
  function C(h) {
    p[h] || t(4, p[h] = !0, p);
  }
  function v(h) {
    (!(h in p) || p[h]) && t(4, p[h] = !1, p);
  }
  function w(h) {
    var H;
    return h in b ? (H = b[h]) !== null && H !== void 0 ? H : null : m().getAttribute(h);
  }
  function A(h, H) {
    b[h] !== H && t(5, b[h] = H, b);
  }
  function O(h) {
    ge(m(), "SMUIDataTableHeader:click", h);
  }
  function P(h) {
    ge(m(), "SMUIDataTableRow:click", { rowId: f, target: h.target });
  }
  function m() {
    return c;
  }
  function R(h) {
    x[h ? "unshift" : "push"](() => {
      c = h, t(2, c);
    });
  }
  const z = (h) => _ ? O(h) : P(h), I = () => t(3, d = void 0);
  return n.$$set = (h) => {
    e = V(V({}, e), Fe(h)), t(11, r = oe(e, i)), "use" in h && t(0, s = h.use), "class" in h && t(1, u = h.class), "rowId" in h && t(12, f = h.rowId), "$$scope" in h && t(14, o = h.$$scope);
  }, [
    s,
    u,
    c,
    d,
    p,
    b,
    a,
    _,
    g,
    O,
    P,
    r,
    f,
    m,
    o,
    l,
    R,
    z,
    I
  ];
}
class Wr extends de {
  constructor(e) {
    super(), ce(this, e, gu, mu, ae, {
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
function pu(n) {
  let e, t, i, r, l, o;
  const a = (
    /*#slots*/
    n[22].default
  ), s = ne(
    a,
    n,
    /*$$scope*/
    n[21],
    null
  );
  let u = [
    {
      class: t = Q({
        [
          /*className*/
          n[1]
        ]: !0,
        "mdc-data-table__cell": !0,
        "mdc-data-table__cell--numeric": (
          /*numeric*/
          n[2]
        ),
        "mdc-data-table__cell--checkbox": (
          /*checkbox*/
          n[3]
        ),
        .../*internalClasses*/
        n[7]
      })
    },
    /*internalAttrs*/
    n[8],
    /*$$restProps*/
    n[19]
  ], f = {};
  for (let c = 0; c < u.length; c += 1)
    f = V(f, u[c]);
  return {
    c() {
      e = Z("td"), s && s.c(), te(e, f);
    },
    m(c, d) {
      F(c, e, d), s && s.m(e, null), n[25](e), r = !0, l || (o = [
        ee(i = De.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        ee(
          /*forwardEvents*/
          n[11].call(null, e)
        ),
        $(
          e,
          "change",
          /*change_handler_1*/
          n[26]
        )
      ], l = !0);
    },
    p(c, d) {
      s && s.p && (!r || d & /*$$scope*/
      2097152) && re(
        s,
        a,
        c,
        /*$$scope*/
        c[21],
        r ? ie(
          a,
          /*$$scope*/
          c[21],
          d,
          null
        ) : le(
          /*$$scope*/
          c[21]
        ),
        null
      ), te(e, f = fe(u, [
        (!r || d & /*className, numeric, checkbox, internalClasses*/
        142 && t !== (t = Q({
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
        }))) && { class: t },
        d & /*internalAttrs*/
        256 && /*internalAttrs*/
        c[8],
        d & /*$$restProps*/
        524288 && /*$$restProps*/
        c[19]
      ])), i && he(i.update) && d & /*use*/
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
      L(s, c), r = !1;
    },
    d(c) {
      c && M(e), s && s.d(c), n[25](null), l = !1, Ce(o);
    }
  };
}
function _u(n) {
  let e, t, i, r, l, o, a, s, u;
  const f = [vu, bu], c = [];
  function d(_, g) {
    return (
      /*sortable*/
      _[5] ? 0 : 1
    );
  }
  t = d(n), i = c[t] = f[t](n);
  let p = [
    {
      class: r = Q({
        [
          /*className*/
          n[1]
        ]: !0,
        "mdc-data-table__header-cell": !0,
        "mdc-data-table__header-cell--numeric": (
          /*numeric*/
          n[2]
        ),
        "mdc-data-table__header-cell--checkbox": (
          /*checkbox*/
          n[3]
        ),
        "mdc-data-table__header-cell--with-sort": (
          /*sortable*/
          n[5]
        ),
        "mdc-data-table__header-cell--sorted": (
          /*sortable*/
          n[5] && /*$sort*/
          n[9] === /*columnId*/
          n[4]
        ),
        .../*internalClasses*/
        n[7]
      })
    },
    { role: "columnheader" },
    { scope: "col" },
    { "data-column-id": (
      /*columnId*/
      n[4]
    ) },
    {
      "aria-sort": l = /*sortable*/
      n[5] ? (
        /*$sort*/
        n[9] === /*columnId*/
        n[4] ? (
          /*$sortDirection*/
          n[10]
        ) : "none"
      ) : void 0
    },
    /*internalAttrs*/
    n[8],
    /*$$restProps*/
    n[19]
  ], b = {};
  for (let _ = 0; _ < p.length; _ += 1)
    b = V(b, p[_]);
  return {
    c() {
      e = Z("th"), i.c(), te(e, b);
    },
    m(_, g) {
      F(_, e, g), c[t].m(e, null), n[23](e), a = !0, s || (u = [
        ee(o = De.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        ee(
          /*forwardEvents*/
          n[11].call(null, e)
        ),
        $(
          e,
          "change",
          /*change_handler*/
          n[24]
        )
      ], s = !0);
    },
    p(_, g) {
      let C = t;
      t = d(_), t === C ? c[t].p(_, g) : (pe(), L(c[C], 1, 1, () => {
        c[C] = null;
      }), _e(), i = c[t], i ? i.p(_, g) : (i = c[t] = f[t](_), i.c()), S(i, 1), i.m(e, null)), te(e, b = fe(p, [
        (!a || g & /*className, numeric, checkbox, sortable, $sort, columnId, internalClasses*/
        702 && r !== (r = Q({
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
        (!a || g & /*columnId*/
        16) && { "data-column-id": (
          /*columnId*/
          _[4]
        ) },
        (!a || g & /*sortable, $sort, columnId, $sortDirection*/
        1584 && l !== (l = /*sortable*/
        _[5] ? (
          /*$sort*/
          _[9] === /*columnId*/
          _[4] ? (
            /*$sortDirection*/
            _[10]
          ) : "none"
        ) : void 0)) && { "aria-sort": l },
        g & /*internalAttrs*/
        256 && /*internalAttrs*/
        _[8],
        g & /*$$restProps*/
        524288 && /*$$restProps*/
        _[19]
      ])), o && he(o.update) && g & /*use*/
      1 && o.update.call(
        null,
        /*use*/
        _[0]
      );
    },
    i(_) {
      a || (S(i), a = !0);
    },
    o(_) {
      L(i), a = !1;
    },
    d(_) {
      _ && M(e), c[t].d(), n[23](null), s = !1, Ce(u);
    }
  };
}
function bu(n) {
  let e;
  const t = (
    /*#slots*/
    n[22].default
  ), i = ne(
    t,
    n,
    /*$$scope*/
    n[21],
    null
  );
  return {
    c() {
      i && i.c();
    },
    m(r, l) {
      i && i.m(r, l), e = !0;
    },
    p(r, l) {
      i && i.p && (!e || l & /*$$scope*/
      2097152) && re(
        i,
        t,
        r,
        /*$$scope*/
        r[21],
        e ? ie(
          t,
          /*$$scope*/
          r[21],
          l,
          null
        ) : le(
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
      L(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function vu(n) {
  let e, t, i, r = (
    /*$sort*/
    (n[9] === /*columnId*/
    n[4] ? (
      /*$sortDirection*/
      n[10] === "ascending" ? (
        /*sortAscendingAriaLabel*/
        n[15]
      ) : (
        /*sortDescendingAriaLabel*/
        n[16]
      )
    ) : "") + ""
  ), l, o, a;
  const s = (
    /*#slots*/
    n[22].default
  ), u = ne(
    s,
    n,
    /*$$scope*/
    n[21],
    null
  );
  return {
    c() {
      e = Z("div"), u && u.c(), t = Y(), i = Z("div"), l = ke(r), U(i, "class", "mdc-data-table__sort-status-label"), U(i, "aria-hidden", "true"), U(i, "id", o = /*columnId*/
      n[4] + "-status-label"), U(e, "class", "mdc-data-table__header-cell-wrapper");
    },
    m(f, c) {
      F(f, e, c), u && u.m(e, null), X(e, t), X(e, i), X(i, l), a = !0;
    },
    p(f, c) {
      u && u.p && (!a || c & /*$$scope*/
      2097152) && re(
        u,
        s,
        f,
        /*$$scope*/
        f[21],
        a ? ie(
          s,
          /*$$scope*/
          f[21],
          c,
          null
        ) : le(
          /*$$scope*/
          f[21]
        ),
        null
      ), (!a || c & /*$sort, columnId, $sortDirection*/
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
      ) : "") + "") && We(l, r), (!a || c & /*columnId*/
      16 && o !== (o = /*columnId*/
      f[4] + "-status-label")) && U(i, "id", o);
    },
    i(f) {
      a || (S(u, f), a = !0);
    },
    o(f) {
      L(u, f), a = !1;
    },
    d(f) {
      f && M(e), u && u.d(f);
    }
  };
}
function yu(n) {
  let e, t, i, r;
  const l = [_u, pu], o = [];
  function a(s, u) {
    return (
      /*header*/
      s[12] ? 0 : 1
    );
  }
  return e = a(n), t = o[e] = l[e](n), {
    c() {
      t.c(), i = Ee();
    },
    m(s, u) {
      o[e].m(s, u), F(s, i, u), r = !0;
    },
    p(s, [u]) {
      t.p(s, u);
    },
    i(s) {
      r || (S(t), r = !0);
    },
    o(s) {
      L(t), r = !1;
    },
    d(s) {
      s && M(i), o[e].d(s);
    }
  };
}
let Cu = 0;
function Au(n, e, t) {
  const i = ["use", "class", "numeric", "checkbox", "columnId", "sortable", "getElement"];
  let r = oe(e, i), l, o, { $$slots: a = {}, $$scope: s } = e;
  const u = Pe(Re());
  let f = Oe("SMUI:data-table:row:header"), { use: c = [] } = e, { class: d = "" } = e, { numeric: p = !1 } = e, { checkbox: b = !1 } = e, { columnId: _ = f ? "SMUI-data-table-column-" + Cu++ : "SMUI-data-table-unused" } = e, { sortable: g = Oe("SMUI:data-table:sortable") } = e, C, v = {}, w = {}, A = Oe("SMUI:data-table:sort");
  xe(n, A, (y) => t(9, l = y));
  let O = Oe("SMUI:data-table:sortDirection");
  xe(n, O, (y) => t(10, o = y));
  let P = Oe("SMUI:data-table:sortAscendingAriaLabel"), m = Oe("SMUI:data-table:sortDescendingAriaLabel");
  g && (we("SMUI:label:context", "data-table:sortable-header-cell"), we("SMUI:icon-button:context", "data-table:sortable-header-cell"), we("SMUI:icon-button:aria-describedby", _ + "-status-label")), Ke(() => {
    const y = f ? {
      _smui_data_table_header_cell_accessor: !0,
      get element() {
        return W();
      },
      get columnId() {
        return _;
      },
      addClass: R,
      removeClass: z,
      getAttr: I,
      addAttr: h
    } : {
      _smui_data_table_header_cell_accessor: !1,
      get element() {
        return W();
      },
      get columnId() {
      },
      addClass: R,
      removeClass: z,
      getAttr: I,
      addAttr: h
    };
    return ge(W(), "SMUIDataTableCell:mount", y), () => {
      ge(W(), "SMUIDataTableCell:unmount", y);
    };
  });
  function R(y) {
    v[y] || t(7, v[y] = !0, v);
  }
  function z(y) {
    (!(y in v) || v[y]) && t(7, v[y] = !1, v);
  }
  function I(y) {
    var G;
    return y in w ? (G = w[y]) !== null && G !== void 0 ? G : null : W().getAttribute(y);
  }
  function h(y, G) {
    w[y] !== G && t(8, w[y] = G, w);
  }
  function H(y) {
    ge(W(), "SMUIDataTableHeaderCheckbox:change", y);
  }
  function D(y) {
    ge(W(), "SMUIDataTableBodyCheckbox:change", y);
  }
  function W() {
    return C;
  }
  function se(y) {
    x[y ? "unshift" : "push"](() => {
      C = y, t(6, C);
    });
  }
  const ue = (y) => b && H(y);
  function J(y) {
    x[y ? "unshift" : "push"](() => {
      C = y, t(6, C);
    });
  }
  const T = (y) => b && D(y);
  return n.$$set = (y) => {
    e = V(V({}, e), Fe(y)), t(19, r = oe(e, i)), "use" in y && t(0, c = y.use), "class" in y && t(1, d = y.class), "numeric" in y && t(2, p = y.numeric), "checkbox" in y && t(3, b = y.checkbox), "columnId" in y && t(4, _ = y.columnId), "sortable" in y && t(5, g = y.sortable), "$$scope" in y && t(21, s = y.$$scope);
  }, [
    c,
    d,
    p,
    b,
    _,
    g,
    C,
    v,
    w,
    l,
    o,
    u,
    f,
    A,
    O,
    P,
    m,
    H,
    D,
    r,
    W,
    s,
    a,
    se,
    ue,
    J,
    T
  ];
}
class jn extends de {
  constructor(e) {
    super(), ce(this, e, Au, yu, ae, {
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
function Su(n) {
  let e, t, i, r, l, o, a, s, u, f, c, d, p, b, _, g, C, v, w, A, O = [
    {
      class: p = Q({
        [
          /*className*/
          n[1]
        ]: !0,
        "mdc-linear-progress": !0,
        "mdc-linear-progress--indeterminate": (
          /*indeterminate*/
          n[3]
        ),
        "mdc-linear-progress--closed": (
          /*closed*/
          n[4]
        ),
        "mdc-data-table__linear-progress": (
          /*context*/
          n[14] === "data-table"
        ),
        .../*internalClasses*/
        n[8]
      })
    },
    {
      style: b = Object.entries(
        /*internalStyles*/
        n[10]
      ).map(tr).concat([
        /*style*/
        n[2]
      ]).join(" ")
    },
    { role: "progressbar" },
    {
      "aria-valuemin": _ = 0
    },
    {
      "aria-valuemax": g = 1
    },
    {
      "aria-valuenow": C = /*indeterminate*/
      n[3] ? void 0 : (
        /*progress*/
        n[5]
      )
    },
    /*internalAttrs*/
    n[9],
    /*$$restProps*/
    n[16]
  ], P = {};
  for (let m = 0; m < O.length; m += 1)
    P = V(P, O[m]);
  return {
    c() {
      e = Z("div"), t = Z("div"), i = Z("div"), l = Y(), o = Z("div"), a = Y(), s = Z("div"), u = Z("span"), c = Y(), d = Z("div"), d.innerHTML = '<span class="mdc-linear-progress__bar-inner"></span>', U(i, "class", "mdc-linear-progress__buffer-bar"), U(i, "style", r = Object.entries(
        /*bufferBarStyles*/
        n[11]
      ).map(xi).join(" ")), U(o, "class", "mdc-linear-progress__buffer-dots"), U(t, "class", "mdc-linear-progress__buffer"), U(u, "class", "mdc-linear-progress__bar-inner"), U(s, "class", "mdc-linear-progress__bar mdc-linear-progress__primary-bar"), U(s, "style", f = Object.entries(
        /*primaryBarStyles*/
        n[12]
      ).map(er).join(" ")), U(d, "class", "mdc-linear-progress__bar mdc-linear-progress__secondary-bar"), te(e, P);
    },
    m(m, R) {
      F(m, e, R), X(e, t), X(t, i), X(t, l), X(t, o), X(e, a), X(e, s), X(s, u), X(e, c), X(e, d), n[19](e), w || (A = [
        ee(v = De.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        ee(
          /*forwardEvents*/
          n[13].call(null, e)
        ),
        $(
          e,
          "transitionend",
          /*transitionend_handler*/
          n[20]
        )
      ], w = !0);
    },
    p(m, [R]) {
      R & /*bufferBarStyles*/
      2048 && r !== (r = Object.entries(
        /*bufferBarStyles*/
        m[11]
      ).map(xi).join(" ")) && U(i, "style", r), R & /*primaryBarStyles*/
      4096 && f !== (f = Object.entries(
        /*primaryBarStyles*/
        m[12]
      ).map(er).join(" ")) && U(s, "style", f), te(e, P = fe(O, [
        R & /*className, indeterminate, closed, internalClasses*/
        282 && p !== (p = Q({
          [
            /*className*/
            m[1]
          ]: !0,
          "mdc-linear-progress": !0,
          "mdc-linear-progress--indeterminate": (
            /*indeterminate*/
            m[3]
          ),
          "mdc-linear-progress--closed": (
            /*closed*/
            m[4]
          ),
          "mdc-data-table__linear-progress": (
            /*context*/
            m[14] === "data-table"
          ),
          .../*internalClasses*/
          m[8]
        })) && { class: p },
        R & /*internalStyles, style*/
        1028 && b !== (b = Object.entries(
          /*internalStyles*/
          m[10]
        ).map(tr).concat([
          /*style*/
          m[2]
        ]).join(" ")) && { style: b },
        { role: "progressbar" },
        {
          "aria-valuemin": _
        },
        {
          "aria-valuemax": g
        },
        R & /*indeterminate, progress*/
        40 && C !== (C = /*indeterminate*/
        m[3] ? void 0 : (
          /*progress*/
          m[5]
        )) && {
          "aria-valuenow": C
        },
        R & /*internalAttrs*/
        512 && /*internalAttrs*/
        m[9],
        R & /*$$restProps*/
        65536 && /*$$restProps*/
        m[16]
      ])), v && he(v.update) && R & /*use*/
      1 && v.update.call(
        null,
        /*use*/
        m[0]
      );
    },
    i: Ie,
    o: Ie,
    d(m) {
      m && M(e), n[19](null), w = !1, Ce(A);
    }
  };
}
const xi = ([n, e]) => `${n}: ${e};`, er = ([n, e]) => `${n}: ${e};`, tr = ([n, e]) => `${n}: ${e};`;
function Iu(n, e, t) {
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
  let r = oe(e, i), l;
  const o = Pe(Re());
  let { use: a = [] } = e, { class: s = "" } = e, { style: u = "" } = e, { indeterminate: f = !1 } = e, { closed: c = !1 } = e, { progress: d = 0 } = e, { buffer: p = void 0 } = e, b, _, g = {}, C = {}, v = {}, w = {}, A = {}, O = Oe("SMUI:linear-progress:context"), P = Oe("SMUI:linear-progress:closed");
  xe(n, P, (T) => t(21, l = T)), Ke(() => (t(6, _ = new eu({
    addClass: R,
    forceLayout: () => {
      se().getBoundingClientRect();
    },
    setBufferBarStyle: D,
    setPrimaryBarStyle: W,
    hasClass: m,
    removeAttribute: h,
    removeClass: z,
    setAttribute: I,
    setStyle: H,
    attachResizeObserver: (T) => {
      const y = window.ResizeObserver;
      if (y) {
        const G = new y(T);
        return G.observe(se()), G;
      }
      return null;
    },
    getWidth: () => se().offsetWidth
  })), _.init(), () => {
    _.destroy();
  }));
  function m(T) {
    return T in g ? g[T] : se().classList.contains(T);
  }
  function R(T) {
    g[T] || t(8, g[T] = !0, g);
  }
  function z(T) {
    (!(T in g) || g[T]) && t(8, g[T] = !1, g);
  }
  function I(T, y) {
    C[T] !== y && t(9, C[T] = y, C);
  }
  function h(T) {
    (!(T in C) || C[T] != null) && t(9, C[T] = void 0, C);
  }
  function H(T, y) {
    v[T] != y && (y === "" || y == null ? (delete v[T], t(10, v)) : t(10, v[T] = y, v));
  }
  function D(T, y) {
    w[T] != y && (y === "" || y == null ? (delete w[T], t(11, w)) : t(11, w[T] = y, w));
  }
  function W(T, y) {
    A[T] != y && (y === "" || y == null ? (delete A[T], t(12, A)) : t(12, A[T] = y, A));
  }
  function se() {
    return b;
  }
  function ue(T) {
    x[T ? "unshift" : "push"](() => {
      b = T, t(7, b);
    });
  }
  const J = () => _ && _.handleTransitionEnd();
  return n.$$set = (T) => {
    e = V(V({}, e), Fe(T)), t(16, r = oe(e, i)), "use" in T && t(0, a = T.use), "class" in T && t(1, s = T.class), "style" in T && t(2, u = T.style), "indeterminate" in T && t(3, f = T.indeterminate), "closed" in T && t(4, c = T.closed), "progress" in T && t(5, d = T.progress), "buffer" in T && t(17, p = T.buffer);
  }, n.$$.update = () => {
    n.$$.dirty & /*closed*/
    16 && P && Ct(P, l = c, l), n.$$.dirty & /*instance, indeterminate*/
    72 && _ && _.isDeterminate() !== !f && _.setDeterminate(!f), n.$$.dirty & /*instance, progress*/
    96 && _ && _.getProgress() !== d && _.setProgress(d), n.$$.dirty & /*instance, buffer*/
    131136 && _ && (p == null ? _.setBuffer(1) : _.setBuffer(p)), n.$$.dirty & /*instance, closed*/
    80 && _ && (c ? _.close() : _.open());
  }, [
    a,
    s,
    u,
    f,
    c,
    d,
    _,
    b,
    g,
    C,
    v,
    w,
    A,
    o,
    O,
    P,
    r,
    p,
    se,
    ue,
    J
  ];
}
class Eu extends de {
  constructor(e) {
    super(), ce(this, e, Iu, Su, ae, {
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
function Lu(n) {
  let e, t;
  const i = (
    /*#slots*/
    n[1].default
  ), r = ne(
    i,
    n,
    /*$$scope*/
    n[0],
    null
  );
  return {
    c() {
      e = Z("span"), r && r.c(), U(e, "class", "oscd-icon");
    },
    m(l, o) {
      F(l, e, o), r && r.m(e, null), t = !0;
    },
    p(l, [o]) {
      r && r.p && (!t || o & /*$$scope*/
      1) && re(
        r,
        i,
        l,
        /*$$scope*/
        l[0],
        t ? ie(
          i,
          /*$$scope*/
          l[0],
          o,
          null
        ) : le(
          /*$$scope*/
          l[0]
        ),
        null
      );
    },
    i(l) {
      t || (S(r, l), t = !0);
    },
    o(l) {
      L(r, l), t = !1;
    },
    d(l) {
      l && M(e), r && r.d(l);
    }
  };
}
function ku(n, e, t) {
  let { $$slots: i = {}, $$scope: r } = e;
  return n.$$set = (l) => {
    "$$scope" in l && t(0, r = l.$$scope);
  }, [r, i];
}
class bt extends de {
  constructor(e) {
    super(), ce(this, e, ku, Lu, ae, {});
  }
}
function Ru(n) {
  let e, t;
  return {
    c() {
      e = Te("svg"), t = Te("path"), U(t, "d", "M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"), U(
        e,
        "style",
        /*svgStyles*/
        n[0]
      ), U(e, "xmlns", "http://www.w3.org/2000/svg"), U(e, "height", "24px"), U(e, "viewBox", "0 -960 960 960"), U(e, "width", "24px"), U(e, "fill", "#e8eaed");
    },
    m(i, r) {
      F(i, e, r), X(e, t);
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
      i && M(e);
    }
  };
}
function wu(n) {
  let e, t;
  return e = new bt({
    props: {
      $$slots: { default: [Ru] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      j(e.$$.fragment);
    },
    m(i, r) {
      B(e, i, r), t = !0;
    },
    p(i, [r]) {
      const l = {};
      r & /*$$scope, svgStyles*/
      3 && (l.$$scope = { dirty: r, ctx: i }), e.$set(l);
    },
    i(i) {
      t || (S(e.$$.fragment, i), t = !0);
    },
    o(i) {
      L(e.$$.fragment, i), t = !1;
    },
    d(i) {
      N(e, i);
    }
  };
}
function Ou(n, e, t) {
  let { svgStyles: i = "" } = e;
  return n.$$set = (r) => {
    "svgStyles" in r && t(0, i = r.svgStyles);
  }, [i];
}
class Kr extends de {
  constructor(e) {
    super(), ce(this, e, Ou, wu, ae, { svgStyles: 0 });
  }
}
function Du(n) {
  let e, t;
  return {
    c() {
      e = Te("svg"), t = Te("path"), U(t, "d", "m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"), U(
        e,
        "style",
        /*svgStyles*/
        n[0]
      ), U(e, "xmlns", "http://www.w3.org/2000/svg"), U(e, "viewBox", "0 -960 960 960"), U(e, "width", "24px");
    },
    m(i, r) {
      F(i, e, r), X(e, t);
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
      i && M(e);
    }
  };
}
function Tu(n) {
  let e, t;
  return e = new bt({
    props: {
      $$slots: { default: [Du] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      j(e.$$.fragment);
    },
    m(i, r) {
      B(e, i, r), t = !0;
    },
    p(i, [r]) {
      const l = {};
      r & /*$$scope, svgStyles*/
      3 && (l.$$scope = { dirty: r, ctx: i }), e.$set(l);
    },
    i(i) {
      t || (S(e.$$.fragment, i), t = !0);
    },
    o(i) {
      L(e.$$.fragment, i), t = !1;
    },
    d(i) {
      N(e, i);
    }
  };
}
function Hu(n, e, t) {
  let { svgStyles: i = "" } = e;
  return n.$$set = (r) => {
    "svgStyles" in r && t(0, i = r.svgStyles);
  }, [i];
}
class qn extends de {
  constructor(e) {
    super(), ce(this, e, Hu, Tu, ae, { svgStyles: 0 });
  }
}
function Mu(n) {
  let e, t;
  return {
    c() {
      e = Te("svg"), t = Te("path"), U(t, "d", "M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z"), U(
        e,
        "style",
        /*svgStyles*/
        n[0]
      ), U(e, "xmlns", "http://www.w3.org/2000/svg"), U(e, "viewBox", "0 -960 960 960");
    },
    m(i, r) {
      F(i, e, r), X(e, t);
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
      i && M(e);
    }
  };
}
function Fu(n) {
  let e, t;
  return e = new bt({
    props: {
      $$slots: { default: [Mu] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      j(e.$$.fragment);
    },
    m(i, r) {
      B(e, i, r), t = !0;
    },
    p(i, [r]) {
      const l = {};
      r & /*$$scope, svgStyles*/
      3 && (l.$$scope = { dirty: r, ctx: i }), e.$set(l);
    },
    i(i) {
      t || (S(e.$$.fragment, i), t = !0);
    },
    o(i) {
      L(e.$$.fragment, i), t = !1;
    },
    d(i) {
      N(e, i);
    }
  };
}
function Uu(n, e, t) {
  let { svgStyles: i = "" } = e;
  return n.$$set = (r) => {
    "svgStyles" in r && t(0, i = r.svgStyles);
  }, [i];
}
class Pu extends de {
  constructor(e) {
    super(), ce(this, e, Uu, Fu, ae, { svgStyles: 0 });
  }
}
function Bu(n) {
  let e, t;
  return {
    c() {
      e = Te("svg"), t = Te("path"), U(t, "d", "m590-160 80 80H240q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h360l200 240v480q0 20-8.5 36.5T768-96L560-302q-17 11-37 16.5t-43 5.5q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 23-5.5 43T618-360l102 104v-356L562-800H240v640h350ZM480-360q33 0 56.5-23.5T560-440q0-33-23.5-56.5T480-520q-33 0-56.5 23.5T400-440q0 33 23.5 56.5T480-360Zm0-80Zm0 0Z"), U(
        e,
        "style",
        /*svgStyles*/
        n[0]
      ), U(e, "xmlns", "http://www.w3.org/2000/svg"), U(e, "viewBox", "0 -960 960 960");
    },
    m(i, r) {
      F(i, e, r), X(e, t);
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
      i && M(e);
    }
  };
}
function Nu(n) {
  let e, t;
  return e = new bt({
    props: {
      $$slots: { default: [Bu] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      j(e.$$.fragment);
    },
    m(i, r) {
      B(e, i, r), t = !0;
    },
    p(i, [r]) {
      const l = {};
      r & /*$$scope, svgStyles*/
      3 && (l.$$scope = { dirty: r, ctx: i }), e.$set(l);
    },
    i(i) {
      t || (S(e.$$.fragment, i), t = !0);
    },
    o(i) {
      L(e.$$.fragment, i), t = !1;
    },
    d(i) {
      N(e, i);
    }
  };
}
function ju(n, e, t) {
  let { svgStyles: i = "" } = e;
  return n.$$set = (r) => {
    "svgStyles" in r && t(0, i = r.svgStyles);
  }, [i];
}
class qu extends de {
  constructor(e) {
    super(), ce(this, e, ju, Nu, ae, { svgStyles: 0 });
  }
}
function Vu(n) {
  let e, t;
  return {
    c() {
      e = Te("svg"), t = Te("path"), U(t, "d", "M480-160q-134 0-227-93t-93-227q0-134 93-227t227-93q69 0 132 28.5T720-690v-110h80v280H520v-80h168q-32-56-87.5-88T480-720q-100 0-170 70t-70 170q0 100 70 170t170 70q77 0 139-44t87-116h84q-28 106-114 173t-196 67Z"), U(e, "xmlns", "http://www.w3.org/2000/svg"), U(e, "height", "24px"), U(e, "viewBox", "0 -960 960 960"), U(e, "width", "24px"), U(e, "fill", "#e8eaed");
    },
    m(i, r) {
      F(i, e, r), X(e, t);
    },
    p: Ie,
    d(i) {
      i && M(e);
    }
  };
}
function Gu(n) {
  let e, t;
  return e = new bt({
    props: {
      $$slots: { default: [Vu] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      j(e.$$.fragment);
    },
    m(i, r) {
      B(e, i, r), t = !0;
    },
    p(i, [r]) {
      const l = {};
      r & /*$$scope*/
      2 && (l.$$scope = { dirty: r, ctx: i }), e.$set(l);
    },
    i(i) {
      t || (S(e.$$.fragment, i), t = !0);
    },
    o(i) {
      L(e.$$.fragment, i), t = !1;
    },
    d(i) {
      N(e, i);
    }
  };
}
function zu(n, e, t) {
  let { svgStyles: i = "" } = e;
  return n.$$set = (r) => {
    "svgStyles" in r && t(0, i = r.svgStyles);
  }, [i];
}
class Xr extends de {
  constructor(e) {
    super(), ce(this, e, zu, Gu, ae, { svgStyles: 0 });
  }
}
function Wu(n) {
  let e, t;
  return {
    c() {
      e = Te("svg"), t = Te("path"), U(t, "d", "M840-680v480q0 33-23.5 56.5T760-120H200q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h480l160 160Zm-80 34L646-760H200v560h560v-446ZM480-240q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35ZM240-560h360v-160H240v160Zm-40-86v446-560 114Z"), U(e, "xmlns", "http://www.w3.org/2000/svg"), U(e, "height", "24px"), U(e, "viewBox", "0 -960 960 960"), U(e, "width", "24px"), U(e, "fill", "#e8eaed");
    },
    m(i, r) {
      F(i, e, r), X(e, t);
    },
    p: Ie,
    d(i) {
      i && M(e);
    }
  };
}
function Ku(n) {
  let e, t;
  return e = new bt({
    props: {
      $$slots: { default: [Wu] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      j(e.$$.fragment);
    },
    m(i, r) {
      B(e, i, r), t = !0;
    },
    p(i, [r]) {
      const l = {};
      r & /*$$scope*/
      2 && (l.$$scope = { dirty: r, ctx: i }), e.$set(l);
    },
    i(i) {
      t || (S(e.$$.fragment, i), t = !0);
    },
    o(i) {
      L(e.$$.fragment, i), t = !1;
    },
    d(i) {
      N(e, i);
    }
  };
}
function Xu(n, e, t) {
  let { svgStyles: i = "" } = e;
  return n.$$set = (r) => {
    "svgStyles" in r && t(0, i = r.svgStyles);
  }, [i];
}
class Zr extends de {
  constructor(e) {
    super(), ce(this, e, Xu, Ku, ae, { svgStyles: 0 });
  }
}
function Zu(n) {
  let e, t;
  return {
    c() {
      e = Te("svg"), t = Te("path"), U(t, "d", "M200-440v-80h560v80H200Z"), U(e, "xmlns", "http://www.w3.org/2000/svg"), U(e, "height", "24px"), U(e, "viewBox", "0 -960 960 960"), U(e, "width", "24px"), U(e, "fill", "#e8eaed");
    },
    m(i, r) {
      F(i, e, r), X(e, t);
    },
    p: Ie,
    d(i) {
      i && M(e);
    }
  };
}
function Yu(n) {
  let e, t;
  return e = new bt({
    props: {
      $$slots: { default: [Zu] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      j(e.$$.fragment);
    },
    m(i, r) {
      B(e, i, r), t = !0;
    },
    p(i, [r]) {
      const l = {};
      r & /*$$scope*/
      2 && (l.$$scope = { dirty: r, ctx: i }), e.$set(l);
    },
    i(i) {
      t || (S(e.$$.fragment, i), t = !0);
    },
    o(i) {
      L(e.$$.fragment, i), t = !1;
    },
    d(i) {
      N(e, i);
    }
  };
}
function Qu(n, e, t) {
  let { svgStyles: i = "" } = e;
  return n.$$set = (r) => {
    "svgStyles" in r && t(0, i = r.svgStyles);
  }, [i];
}
class Ju extends de {
  constructor(e) {
    super(), ce(this, e, Qu, Yu, ae, { svgStyles: 0 });
  }
}
function $u(n) {
  let e, t;
  return {
    c() {
      e = Te("svg"), t = Te("path"), U(t, "d", "M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"), U(
        e,
        "style",
        /*svgStyles*/
        n[0]
      ), U(e, "xmlns", "http://www.w3.org/2000/svg"), U(e, "viewBox", "0 -960 960 960");
    },
    m(i, r) {
      F(i, e, r), X(e, t);
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
      i && M(e);
    }
  };
}
function xu(n) {
  let e, t;
  return e = new bt({
    props: {
      $$slots: { default: [$u] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      j(e.$$.fragment);
    },
    m(i, r) {
      B(e, i, r), t = !0;
    },
    p(i, [r]) {
      const l = {};
      r & /*$$scope, svgStyles*/
      3 && (l.$$scope = { dirty: r, ctx: i }), e.$set(l);
    },
    i(i) {
      t || (S(e.$$.fragment, i), t = !0);
    },
    o(i) {
      L(e.$$.fragment, i), t = !1;
    },
    d(i) {
      N(e, i);
    }
  };
}
function ef(n, e, t) {
  let { svgStyles: i = "" } = e;
  return n.$$set = (r) => {
    "svgStyles" in r && t(0, i = r.svgStyles);
  }, [i];
}
class tf extends de {
  constructor(e) {
    super(), ce(this, e, ef, xu, ae, { svgStyles: 0 });
  }
}
function nf(n) {
  let e, t;
  return {
    c() {
      e = Te("svg"), t = Te("path"), U(t, "d", "M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"), U(
        e,
        "style",
        /*svgStyles*/
        n[0]
      ), U(e, "xmlns", "http://www.w3.org/2000/svg"), U(e, "viewBox", "0 -960 960 960");
    },
    m(i, r) {
      F(i, e, r), X(e, t);
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
      i && M(e);
    }
  };
}
function rf(n) {
  let e, t;
  return e = new bt({
    props: {
      $$slots: { default: [nf] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      j(e.$$.fragment);
    },
    m(i, r) {
      B(e, i, r), t = !0;
    },
    p(i, [r]) {
      const l = {};
      r & /*$$scope, svgStyles*/
      3 && (l.$$scope = { dirty: r, ctx: i }), e.$set(l);
    },
    i(i) {
      t || (S(e.$$.fragment, i), t = !0);
    },
    o(i) {
      L(e.$$.fragment, i), t = !1;
    },
    d(i) {
      N(e, i);
    }
  };
}
function lf(n, e, t) {
  let { svgStyles: i = "" } = e;
  return n.$$set = (r) => {
    "svgStyles" in r && t(0, i = r.svgStyles);
  }, [i];
}
class af extends de {
  constructor(e) {
    super(), ce(this, e, lf, rf, ae, { svgStyles: 0 });
  }
}
function nr(n, e, t) {
  const i = n.slice();
  return i[24] = e[t], i[26] = t, i;
}
function ir(n, e, t) {
  const i = n.slice();
  return i[27] = e[t], i;
}
function rr(n, e, t) {
  const i = n.slice();
  return i[30] = e[t], i;
}
function lr(n, e, t) {
  const i = n.slice();
  return i[27] = e[t], i[33] = e, i[34] = t, i;
}
function ar(n) {
  let e, t = (
    /*$sortColumn*/
    n[5] === /*col*/
    n[27].field && /*$sortDirection*/
    n[6] !== null && or(n)
  );
  return {
    c() {
      t && t.c(), e = Ee();
    },
    m(i, r) {
      t && t.m(i, r), F(i, e, r);
    },
    p(i, r) {
      /*$sortColumn*/
      i[5] === /*col*/
      i[27].field && /*$sortDirection*/
      i[6] !== null ? t ? t.p(i, r) : (t = or(i), t.c(), t.m(e.parentNode, e)) : t && (t.d(1), t = null);
    },
    d(i) {
      i && M(e), t && t.d(i);
    }
  };
}
function or(n) {
  let e;
  function t(l, o) {
    if (
      /*$sortDirection*/
      l[6] === "asc"
    )
      return sf;
    if (
      /*$sortDirection*/
      l[6] === "desc"
    )
      return of;
  }
  let i = t(n), r = i && i(n);
  return {
    c() {
      r && r.c(), e = Ee();
    },
    m(l, o) {
      r && r.m(l, o), F(l, e, o);
    },
    p(l, o) {
      i !== (i = t(l)) && (r && r.d(1), r = i && i(l), r && (r.c(), r.m(e.parentNode, e)));
    },
    d(l) {
      l && M(e), r && r.d(l);
    }
  };
}
function of(n) {
  let e, t;
  return {
    c() {
      e = Te("svg"), t = Te("path"), U(t, "d", "M12 20l8-8H4l8 8z"), U(e, "xmlns", "http://www.w3.org/2000/svg"), U(e, "viewBox", "0 0 24 24"), U(e, "width", "16"), U(e, "height", "16"), U(e, "fill", "currentColor"), U(e, "class", "svelte-29x22x");
    },
    m(i, r) {
      F(i, e, r), X(e, t);
    },
    d(i) {
      i && M(e);
    }
  };
}
function sf(n) {
  let e, t;
  return {
    c() {
      e = Te("svg"), t = Te("path"), U(t, "d", "M12 4l-8 8h16l-8-8z"), U(e, "xmlns", "http://www.w3.org/2000/svg"), U(e, "viewBox", "0 0 24 24"), U(e, "width", "16"), U(e, "height", "16"), U(e, "fill", "currentColor"), U(e, "class", "svelte-29x22x");
    },
    m(i, r) {
      F(i, e, r), X(e, t);
    },
    d(i) {
      i && M(e);
    }
  };
}
function sr(n) {
  let e, t, i = (
    /*col*/
    n[27].filterType === "text" && ur(n)
  ), r = (
    /*col*/
    n[27].filterType === "number" && fr(n)
  );
  return {
    c() {
      i && i.c(), e = Y(), r && r.c(), t = Ee();
    },
    m(l, o) {
      i && i.m(l, o), F(l, e, o), r && r.m(l, o), F(l, t, o);
    },
    p(l, o) {
      /*col*/
      l[27].filterType === "text" ? i ? i.p(l, o) : (i = ur(l), i.c(), i.m(e.parentNode, e)) : i && (i.d(1), i = null), /*col*/
      l[27].filterType === "number" ? r ? r.p(l, o) : (r = fr(l), r.c(), r.m(t.parentNode, t)) : r && (r.d(1), r = null);
    },
    d(l) {
      l && (M(e), M(t)), i && i.d(l), r && r.d(l);
    }
  };
}
function ur(n) {
  let e, t, i, r;
  function l() {
    n[16].call(
      e,
      /*col*/
      n[27]
    );
  }
  return {
    c() {
      e = Z("input"), U(e, "type", "text"), U(e, "placeholder", t = `Search ${/*col*/
      n[27].headerName}`), U(e, "class", "svelte-29x22x");
    },
    m(o, a) {
      F(o, e, a), Gt(
        e,
        /*filters*/
        n[4][
          /*col*/
          n[27].field
        ]
      ), i || (r = [
        $(e, "input", l),
        $(
          e,
          "input",
          /*input_handler*/
          n[17]
        )
      ], i = !0);
    },
    p(o, a) {
      n = o, a[0] & /*columnDefs*/
      4 && t !== (t = `Search ${/*col*/
      n[27].headerName}`) && U(e, "placeholder", t), a[0] & /*filters, columnDefs*/
      20 && e.value !== /*filters*/
      n[4][
        /*col*/
        n[27].field
      ] && Gt(
        e,
        /*filters*/
        n[4][
          /*col*/
          n[27].field
        ]
      );
    },
    d(o) {
      o && M(e), i = !1, Ce(r);
    }
  };
}
function fr(n) {
  let e, t, i, r;
  function l() {
    n[18].call(
      e,
      /*col*/
      n[27]
    );
  }
  return {
    c() {
      e = Z("input"), U(e, "type", "number"), U(e, "placeholder", t = `Search ${/*col*/
      n[27].headerName}`), U(e, "class", "svelte-29x22x");
    },
    m(o, a) {
      F(o, e, a), Gt(
        e,
        /*filters*/
        n[4][
          /*col*/
          n[27].field
        ]
      ), i || (r = [
        $(e, "input", l),
        $(
          e,
          "input",
          /*input_handler_1*/
          n[19]
        )
      ], i = !0);
    },
    p(o, a) {
      n = o, a[0] & /*columnDefs*/
      4 && t !== (t = `Search ${/*col*/
      n[27].headerName}`) && U(e, "placeholder", t), a[0] & /*filters, columnDefs*/
      20 && Tr(e.value) !== /*filters*/
      n[4][
        /*col*/
        n[27].field
      ] && Gt(
        e,
        /*filters*/
        n[4][
          /*col*/
          n[27].field
        ]
      );
    },
    d(o) {
      o && M(e), i = !1, Ce(r);
    }
  };
}
function uf(n) {
  let e, t, i, r = (
    /*col*/
    n[27].headerName + ""
  ), l, o, a, s, u = (
    /*col*/
    n[27].sortable && ar(n)
  ), f = (
    /*col*/
    n[27].filter && sr(n)
  );
  return {
    c() {
      e = Z("div"), t = Z("div"), i = Z("span"), l = ke(r), o = Y(), u && u.c(), a = Y(), f && f.c(), s = Y(), U(i, "class", "header-title svelte-29x22x"), U(t, "class", "cell-header svelte-29x22x"), U(e, "class", "custom-cell-container svelte-29x22x"), Jt(
        e,
        "min-width",
        /*col*/
        n[27].minWidth ?? 0
      );
    },
    m(c, d) {
      F(c, e, d), X(e, t), X(t, i), X(i, l), X(t, o), u && u.m(t, null), X(e, a), f && f.m(e, null), F(c, s, d);
    },
    p(c, d) {
      d[0] & /*columnDefs*/
      4 && r !== (r = /*col*/
      c[27].headerName + "") && We(l, r), /*col*/
      c[27].sortable ? u ? u.p(c, d) : (u = ar(c), u.c(), u.m(t, null)) : u && (u.d(1), u = null), /*col*/
      c[27].filter ? f ? f.p(c, d) : (f = sr(c), f.c(), f.m(e, null)) : f && (f.d(1), f = null), d[0] & /*columnDefs*/
      4 && Jt(
        e,
        "min-width",
        /*col*/
        c[27].minWidth ?? 0
      );
    },
    d(c) {
      c && (M(e), M(s)), u && u.d(), f && f.d();
    }
  };
}
function cr(n) {
  let e, t;
  function i() {
    return (
      /*click_handler*/
      n[20](
        /*col*/
        n[27]
      )
    );
  }
  return e = new jn({
    props: {
      style: (
        /*col*/
        n[27].headerStyle
      ),
      $$slots: { default: [uf] },
      $$scope: { ctx: n }
    }
  }), e.$on("click", i), {
    c() {
      j(e.$$.fragment);
    },
    m(r, l) {
      B(e, r, l), t = !0;
    },
    p(r, l) {
      n = r;
      const o = {};
      l[0] & /*columnDefs*/
      4 && (o.style = /*col*/
      n[27].headerStyle), l[0] & /*columnDefs, filters, $sortDirection, $sortColumn*/
      116 | l[1] & /*$$scope*/
      16 && (o.$$scope = { dirty: l, ctx: n }), e.$set(o);
    },
    i(r) {
      t || (S(e.$$.fragment, r), t = !0);
    },
    o(r) {
      L(e.$$.fragment, r), t = !1;
    },
    d(r) {
      N(e, r);
    }
  };
}
function ff(n) {
  let e, t, i = St(
    /*columnDefs*/
    n[2]
  ), r = [];
  for (let o = 0; o < i.length; o += 1)
    r[o] = cr(lr(n, i, o));
  const l = (o) => L(r[o], 1, 1, () => {
    r[o] = null;
  });
  return {
    c() {
      for (let o = 0; o < r.length; o += 1)
        r[o].c();
      e = Ee();
    },
    m(o, a) {
      for (let s = 0; s < r.length; s += 1)
        r[s] && r[s].m(o, a);
      F(o, e, a), t = !0;
    },
    p(o, a) {
      if (a[0] & /*columnDefs, sortColumnBy, filters, filterAndSortTable, $sortDirection, $sortColumn*/
      6260) {
        i = St(
          /*columnDefs*/
          o[2]
        );
        let s;
        for (s = 0; s < i.length; s += 1) {
          const u = lr(o, i, s);
          r[s] ? (r[s].p(u, a), S(r[s], 1)) : (r[s] = cr(u), r[s].c(), S(r[s], 1), r[s].m(e.parentNode, e));
        }
        for (pe(), s = i.length; s < r.length; s += 1)
          l(s);
        _e();
      }
    },
    i(o) {
      if (!t) {
        for (let a = 0; a < i.length; a += 1)
          S(r[a]);
        t = !0;
      }
    },
    o(o) {
      r = r.filter(Boolean);
      for (let a = 0; a < r.length; a += 1)
        L(r[a]);
      t = !1;
    },
    d(o) {
      o && M(e), Dr(r, o);
    }
  };
}
function cf(n) {
  let e, t;
  return e = new Wr({
    props: {
      class: "header-row",
      $$slots: { default: [ff] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      j(e.$$.fragment);
    },
    m(i, r) {
      B(e, i, r), t = !0;
    },
    p(i, r) {
      const l = {};
      r[0] & /*columnDefs, filters, $sortDirection, $sortColumn*/
      116 | r[1] & /*$$scope*/
      16 && (l.$$scope = { dirty: r, ctx: i }), e.$set(l);
    },
    i(i) {
      t || (S(e.$$.fragment, i), t = !0);
    },
    o(i) {
      L(e.$$.fragment, i), t = !1;
    },
    d(i) {
      N(e, i);
    }
  };
}
function df(n) {
  let e, t;
  return e = new jn({
    props: {
      numeric: (
        /*col*/
        n[27].numeric
      ),
      style: (
        /*col*/
        n[27].cellStyle
      ),
      $$slots: { default: [pf] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      j(e.$$.fragment);
    },
    m(i, r) {
      B(e, i, r), t = !0;
    },
    p(i, r) {
      const l = {};
      r[0] & /*columnDefs*/
      4 && (l.numeric = /*col*/
      i[27].numeric), r[0] & /*columnDefs*/
      4 && (l.style = /*col*/
      i[27].cellStyle), r[0] & /*columnDefs, $filteredData*/
      132 | r[1] & /*$$scope*/
      16 && (l.$$scope = { dirty: r, ctx: i }), e.$set(l);
    },
    i(i) {
      t || (S(e.$$.fragment, i), t = !0);
    },
    o(i) {
      L(e.$$.fragment, i), t = !1;
    },
    d(i) {
      N(e, i);
    }
  };
}
function mf(n) {
  let e, t;
  return e = new jn({
    props: {
      $$slots: { default: [Rf] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      j(e.$$.fragment);
    },
    m(i, r) {
      B(e, i, r), t = !0;
    },
    p(i, r) {
      const l = {};
      r[0] & /*rowActions, $filteredData*/
      136 | r[1] & /*$$scope*/
      16 && (l.$$scope = { dirty: r, ctx: i }), e.$set(l);
    },
    i(i) {
      t || (S(e.$$.fragment, i), t = !0);
    },
    o(i) {
      L(e.$$.fragment, i), t = !1;
    },
    d(i) {
      N(e, i);
    }
  };
}
function hf(n) {
  let e = (
    /*row*/
    (n[24][
      /*col*/
      n[27].field
    ] ?? "") + ""
  ), t;
  return {
    c() {
      t = ke(e);
    },
    m(i, r) {
      F(i, t, r);
    },
    p(i, r) {
      r[0] & /*$filteredData, columnDefs*/
      132 && e !== (e = /*row*/
      (i[24][
        /*col*/
        i[27].field
      ] ?? "") + "") && We(t, e);
    },
    d(i) {
      i && M(t);
    }
  };
}
function gf(n) {
  let e = (
    /*col*/
    n[27].valueFormatter(
      /*row*/
      n[24][
        /*col*/
        n[27].field
      ]
    ) + ""
  ), t;
  return {
    c() {
      t = ke(e);
    },
    m(i, r) {
      F(i, t, r);
    },
    p(i, r) {
      r[0] & /*columnDefs, $filteredData*/
      132 && e !== (e = /*col*/
      i[27].valueFormatter(
        /*row*/
        i[24][
          /*col*/
          i[27].field
        ]
      ) + "") && We(t, e);
    },
    d(i) {
      i && M(t);
    }
  };
}
function pf(n) {
  let e;
  function t(l, o) {
    return (
      /*col*/
      l[27].valueFormatter ? gf : hf
    );
  }
  let i = t(n), r = i(n);
  return {
    c() {
      r.c(), e = Ee();
    },
    m(l, o) {
      r.m(l, o), F(l, e, o);
    },
    p(l, o) {
      i === (i = t(l)) && r ? r.p(l, o) : (r.d(1), r = i(l), r && (r.c(), r.m(e.parentNode, e)));
    },
    d(l) {
      l && M(e), r.d(l);
    }
  };
}
function _f(n) {
  let e, t;
  function i() {
    return (
      /*func_1*/
      n[22](
        /*action*/
        n[30],
        /*row*/
        n[24]
      )
    );
  }
  return e = new Tt({
    props: {
      class: "button",
      variant: "raised",
      callback: i,
      disabled: (
        /*action*/
        n[30].disabled(
          /*row*/
          n[24]
        )
      ),
      $$slots: { default: [kf] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      j(e.$$.fragment);
    },
    m(r, l) {
      B(e, r, l), t = !0;
    },
    p(r, l) {
      n = r;
      const o = {};
      l[0] & /*rowActions, $filteredData*/
      136 && (o.callback = i), l[0] & /*rowActions, $filteredData*/
      136 && (o.disabled = /*action*/
      n[30].disabled(
        /*row*/
        n[24]
      )), l[0] & /*rowActions*/
      8 | l[1] & /*$$scope*/
      16 && (o.$$scope = { dirty: l, ctx: n }), e.$set(o);
    },
    i(r) {
      t || (S(e.$$.fragment, r), t = !0);
    },
    o(r) {
      L(e.$$.fragment, r), t = !1;
    },
    d(r) {
      N(e, r);
    }
  };
}
function bf(n) {
  let e, t;
  function i() {
    return (
      /*func*/
      n[21](
        /*action*/
        n[30],
        /*row*/
        n[24]
      )
    );
  }
  return e = new no({
    props: {
      iconComponent: (
        /*action*/
        n[30].iconComponent
      ),
      iconStyles: (
        /*action*/
        n[30].iconStyles
      ),
      callback: i,
      disabled: (
        /*action*/
        n[30].disabled(
          /*row*/
          n[24]
        )
      )
    }
  }), {
    c() {
      j(e.$$.fragment);
    },
    m(r, l) {
      B(e, r, l), t = !0;
    },
    p(r, l) {
      n = r;
      const o = {};
      l[0] & /*rowActions*/
      8 && (o.iconComponent = /*action*/
      n[30].iconComponent), l[0] & /*rowActions*/
      8 && (o.iconStyles = /*action*/
      n[30].iconStyles), l[0] & /*rowActions, $filteredData*/
      136 && (o.callback = i), l[0] & /*rowActions, $filteredData*/
      136 && (o.disabled = /*action*/
      n[30].disabled(
        /*row*/
        n[24]
      )), e.$set(o);
    },
    i(r) {
      t || (S(e.$$.fragment, r), t = !0);
    },
    o(r) {
      L(e.$$.fragment, r), t = !1;
    },
    d(r) {
      N(e, r);
    }
  };
}
function vf(n) {
  let e, t;
  return e = new Xr({ props: { svgStyles: "margin: unset" } }), {
    c() {
      j(e.$$.fragment);
    },
    m(i, r) {
      B(e, i, r), t = !0;
    },
    i(i) {
      t || (S(e.$$.fragment, i), t = !0);
    },
    o(i) {
      L(e.$$.fragment, i), t = !1;
    },
    d(i) {
      N(e, i);
    }
  };
}
function yf(n) {
  let e, t;
  return e = new af({ props: { svgStyles: "margin: unset" } }), {
    c() {
      j(e.$$.fragment);
    },
    m(i, r) {
      B(e, i, r), t = !0;
    },
    i(i) {
      t || (S(e.$$.fragment, i), t = !0);
    },
    o(i) {
      L(e.$$.fragment, i), t = !1;
    },
    d(i) {
      N(e, i);
    }
  };
}
function Cf(n) {
  let e, t;
  return e = new tf({ props: { svgStyles: "margin: unset" } }), {
    c() {
      j(e.$$.fragment);
    },
    m(i, r) {
      B(e, i, r), t = !0;
    },
    i(i) {
      t || (S(e.$$.fragment, i), t = !0);
    },
    o(i) {
      L(e.$$.fragment, i), t = !1;
    },
    d(i) {
      N(e, i);
    }
  };
}
function Af(n) {
  let e, t;
  return e = new Ju({ props: { svgStyles: "margin: unset" } }), {
    c() {
      j(e.$$.fragment);
    },
    m(i, r) {
      B(e, i, r), t = !0;
    },
    i(i) {
      t || (S(e.$$.fragment, i), t = !0);
    },
    o(i) {
      L(e.$$.fragment, i), t = !1;
    },
    d(i) {
      N(e, i);
    }
  };
}
function Sf(n) {
  let e, t;
  return e = new qu({ props: { svgStyles: "margin: unset" } }), {
    c() {
      j(e.$$.fragment);
    },
    m(i, r) {
      B(e, i, r), t = !0;
    },
    i(i) {
      t || (S(e.$$.fragment, i), t = !0);
    },
    o(i) {
      L(e.$$.fragment, i), t = !1;
    },
    d(i) {
      N(e, i);
    }
  };
}
function If(n) {
  let e, t;
  return e = new Pu({ props: { svgStyles: "margin: unset" } }), {
    c() {
      j(e.$$.fragment);
    },
    m(i, r) {
      B(e, i, r), t = !0;
    },
    i(i) {
      t || (S(e.$$.fragment, i), t = !0);
    },
    o(i) {
      L(e.$$.fragment, i), t = !1;
    },
    d(i) {
      N(e, i);
    }
  };
}
function Ef(n) {
  let e, t;
  return e = new qn({ props: { svgStyles: "margin: unset" } }), {
    c() {
      j(e.$$.fragment);
    },
    m(i, r) {
      B(e, i, r), t = !0;
    },
    i(i) {
      t || (S(e.$$.fragment, i), t = !0);
    },
    o(i) {
      L(e.$$.fragment, i), t = !1;
    },
    d(i) {
      N(e, i);
    }
  };
}
function Lf(n) {
  let e, t;
  return e = new Kr({ props: { svgStyles: "margin: unset" } }), {
    c() {
      j(e.$$.fragment);
    },
    m(i, r) {
      B(e, i, r), t = !0;
    },
    i(i) {
      t || (S(e.$$.fragment, i), t = !0);
    },
    o(i) {
      L(e.$$.fragment, i), t = !1;
    },
    d(i) {
      N(e, i);
    }
  };
}
function kf(n) {
  let e, t, i, r;
  const l = [
    Lf,
    Ef,
    If,
    Sf,
    Af,
    Cf,
    yf,
    vf
  ], o = [];
  function a(s, u) {
    return (
      /*action*/
      s[30].icon === "add" ? 0 : (
        /*action*/
        s[30].icon === "cancel" ? 1 : (
          /*action*/
          s[30].icon === "download" ? 2 : (
            /*action*/
            s[30].icon === "find-in-page" ? 3 : (
              /*action*/
              s[30].icon === "remove" ? 4 : (
                /*action*/
                s[30].icon === "edit" ? 5 : (
                  /*action*/
                  s[30].icon === "delete" ? 6 : 7
                )
              )
            )
          )
        )
      )
    );
  }
  return e = a(n), t = o[e] = l[e](n), {
    c() {
      t.c(), i = Ee();
    },
    m(s, u) {
      o[e].m(s, u), F(s, i, u), r = !0;
    },
    p(s, u) {
      let f = e;
      e = a(s), e !== f && (pe(), L(o[f], 1, 1, () => {
        o[f] = null;
      }), _e(), t = o[e], t || (t = o[e] = l[e](s), t.c()), S(t, 1), t.m(i.parentNode, i));
    },
    i(s) {
      r || (S(t), r = !0);
    },
    o(s) {
      L(t), r = !1;
    },
    d(s) {
      s && M(i), o[e].d(s);
    }
  };
}
function dr(n) {
  let e, t, i, r;
  const l = [bf, _f], o = [];
  function a(s, u) {
    return (
      /*action*/
      s[30].iconComponent ? 0 : 1
    );
  }
  return e = a(n), t = o[e] = l[e](n), {
    c() {
      t.c(), i = Ee();
    },
    m(s, u) {
      o[e].m(s, u), F(s, i, u), r = !0;
    },
    p(s, u) {
      let f = e;
      e = a(s), e === f ? o[e].p(s, u) : (pe(), L(o[f], 1, 1, () => {
        o[f] = null;
      }), _e(), t = o[e], t ? t.p(s, u) : (t = o[e] = l[e](s), t.c()), S(t, 1), t.m(i.parentNode, i));
    },
    i(s) {
      r || (S(t), r = !0);
    },
    o(s) {
      L(t), r = !1;
    },
    d(s) {
      s && M(i), o[e].d(s);
    }
  };
}
function Rf(n) {
  let e, t, i = St(
    /*rowActions*/
    n[3]
  ), r = [];
  for (let o = 0; o < i.length; o += 1)
    r[o] = dr(rr(n, i, o));
  const l = (o) => L(r[o], 1, 1, () => {
    r[o] = null;
  });
  return {
    c() {
      e = Z("div");
      for (let o = 0; o < r.length; o += 1)
        r[o].c();
      U(e, "class", "cell-actions svelte-29x22x");
    },
    m(o, a) {
      F(o, e, a);
      for (let s = 0; s < r.length; s += 1)
        r[s] && r[s].m(e, null);
      t = !0;
    },
    p(o, a) {
      if (a[0] & /*rowActions, $filteredData*/
      136) {
        i = St(
          /*rowActions*/
          o[3]
        );
        let s;
        for (s = 0; s < i.length; s += 1) {
          const u = rr(o, i, s);
          r[s] ? (r[s].p(u, a), S(r[s], 1)) : (r[s] = dr(u), r[s].c(), S(r[s], 1), r[s].m(e, null));
        }
        for (pe(), s = i.length; s < r.length; s += 1)
          l(s);
        _e();
      }
    },
    i(o) {
      if (!t) {
        for (let a = 0; a < i.length; a += 1)
          S(r[a]);
        t = !0;
      }
    },
    o(o) {
      r = r.filter(Boolean);
      for (let a = 0; a < r.length; a += 1)
        L(r[a]);
      t = !1;
    },
    d(o) {
      o && M(e), Dr(r, o);
    }
  };
}
function mr(n, e) {
  let t, i, r, l, o;
  const a = [mf, df], s = [];
  function u(f, c) {
    return (
      /*col*/
      f[27].field === "actions" ? 0 : 1
    );
  }
  return i = u(e), r = s[i] = a[i](e), {
    key: n,
    first: null,
    c() {
      t = Ee(), r.c(), l = Ee(), this.first = t;
    },
    m(f, c) {
      F(f, t, c), s[i].m(f, c), F(f, l, c), o = !0;
    },
    p(f, c) {
      e = f;
      let d = i;
      i = u(e), i === d ? s[i].p(e, c) : (pe(), L(s[d], 1, 1, () => {
        s[d] = null;
      }), _e(), r = s[i], r ? r.p(e, c) : (r = s[i] = a[i](e), r.c()), S(r, 1), r.m(l.parentNode, l));
    },
    i(f) {
      o || (S(r), o = !0);
    },
    o(f) {
      L(r), o = !1;
    },
    d(f) {
      f && (M(t), M(l)), s[i].d(f);
    }
  };
}
function wf(n) {
  let e = [], t = /* @__PURE__ */ new Map(), i, r, l = St(
    /*columnDefs*/
    n[2]
  );
  const o = (a) => (
    /*col*/
    a[27].field
  );
  for (let a = 0; a < l.length; a += 1) {
    let s = ir(n, l, a), u = o(s);
    t.set(u, e[a] = mr(u, s));
  }
  return {
    c() {
      for (let a = 0; a < e.length; a += 1)
        e[a].c();
      i = Y();
    },
    m(a, s) {
      for (let u = 0; u < e.length; u += 1)
        e[u] && e[u].m(a, s);
      F(a, i, s), r = !0;
    },
    p(a, s) {
      s[0] & /*rowActions, $filteredData, columnDefs*/
      140 && (l = St(
        /*columnDefs*/
        a[2]
      ), pe(), e = Pr(e, s, o, 1, a, l, t, i.parentNode, Ur, mr, i, ir), _e());
    },
    i(a) {
      if (!r) {
        for (let s = 0; s < l.length; s += 1)
          S(e[s]);
        r = !0;
      }
    },
    o(a) {
      for (let s = 0; s < e.length; s += 1)
        L(e[s]);
      r = !1;
    },
    d(a) {
      a && M(i);
      for (let s = 0; s < e.length; s += 1)
        e[s].d(a);
    }
  };
}
function hr(n, e) {
  let t, i, r;
  return i = new Wr({
    props: {
      $$slots: { default: [wf] },
      $$scope: { ctx: e }
    }
  }), {
    key: n,
    first: null,
    c() {
      t = Ee(), j(i.$$.fragment), this.first = t;
    },
    m(l, o) {
      F(l, t, o), B(i, l, o), r = !0;
    },
    p(l, o) {
      e = l;
      const a = {};
      o[0] & /*columnDefs, rowActions, $filteredData*/
      140 | o[1] & /*$$scope*/
      16 && (a.$$scope = { dirty: o, ctx: e }), i.$set(a);
    },
    i(l) {
      r || (S(i.$$.fragment, l), r = !0);
    },
    o(l) {
      L(i.$$.fragment, l), r = !1;
    },
    d(l) {
      l && M(t), N(i, l);
    }
  };
}
function Of(n) {
  let e = [], t = /* @__PURE__ */ new Map(), i, r, l = St(
    /*$filteredData*/
    n[7]
  );
  const o = (a) => (
    /*index*/
    a[26]
  );
  for (let a = 0; a < l.length; a += 1) {
    let s = nr(n, l, a), u = o(s);
    t.set(u, e[a] = hr(u, s));
  }
  return {
    c() {
      for (let a = 0; a < e.length; a += 1)
        e[a].c();
      i = Ee();
    },
    m(a, s) {
      for (let u = 0; u < e.length; u += 1)
        e[u] && e[u].m(a, s);
      F(a, i, s), r = !0;
    },
    p(a, s) {
      s[0] & /*columnDefs, rowActions, $filteredData*/
      140 && (l = St(
        /*$filteredData*/
        a[7]
      ), pe(), e = Pr(e, s, o, 1, a, l, t, i.parentNode, Ur, hr, i, nr), _e());
    },
    i(a) {
      if (!r) {
        for (let s = 0; s < l.length; s += 1)
          S(e[s]);
        r = !0;
      }
    },
    o(a) {
      for (let s = 0; s < e.length; s += 1)
        L(e[s]);
      r = !1;
    },
    d(a) {
      a && M(i);
      for (let s = 0; s < e.length; s += 1)
        e[s].d(a);
    }
  };
}
function Df(n) {
  let e, t, i, r;
  return e = new uu({
    props: {
      $$slots: { default: [cf] },
      $$scope: { ctx: n }
    }
  }), i = new du({
    props: {
      $$slots: { default: [Of] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      j(e.$$.fragment), t = Y(), j(i.$$.fragment);
    },
    m(l, o) {
      B(e, l, o), F(l, t, o), B(i, l, o), r = !0;
    },
    p(l, o) {
      const a = {};
      o[0] & /*columnDefs, filters, $sortDirection, $sortColumn*/
      116 | o[1] & /*$$scope*/
      16 && (a.$$scope = { dirty: o, ctx: l }), e.$set(a);
      const s = {};
      o[0] & /*$filteredData, columnDefs, rowActions*/
      140 | o[1] & /*$$scope*/
      16 && (s.$$scope = { dirty: o, ctx: l }), i.$set(s);
    },
    i(l) {
      r || (S(e.$$.fragment, l), S(i.$$.fragment, l), r = !0);
    },
    o(l) {
      L(e.$$.fragment, l), L(i.$$.fragment, l), r = !1;
    },
    d(l) {
      l && M(t), N(e, l), N(i, l);
    }
  };
}
function Tf(n) {
  let e, t, i;
  function r(o) {
    n[15](o);
  }
  let l = {
    indeterminate: !0,
    "aria-label": "Data is being loaded...",
    slot: "progress"
  };
  return (
    /*loadingDone*/
    n[0] !== void 0 && (l.closed = /*loadingDone*/
    n[0]), e = new Eu({ props: l }), x.push(() => Ye(e, "closed", r)), {
      c() {
        j(e.$$.fragment);
      },
      m(o, a) {
        B(e, o, a), i = !0;
      },
      p(o, a) {
        const s = {};
        !t && a[0] & /*loadingDone*/
        1 && (t = !0, s.closed = /*loadingDone*/
        o[0], Ze(() => t = !1)), e.$set(s);
      },
      i(o) {
        i || (S(e.$$.fragment, o), i = !0);
      },
      o(o) {
        L(e.$$.fragment, o), i = !1;
      },
      d(o) {
        N(e, o);
      }
    }
  );
}
function Hf(n) {
  let e, t;
  return e = new au({
    props: {
      "table$aria-label": (
        /*label*/
        n[1]
      ),
      style: "max-width: 100%; width: 100%;",
      $$slots: {
        progress: [Tf],
        default: [Df]
      },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      j(e.$$.fragment);
    },
    m(i, r) {
      B(e, i, r), t = !0;
    },
    p(i, r) {
      const l = {};
      r[0] & /*label*/
      2 && (l["table$aria-label"] = /*label*/
      i[1]), r[0] & /*loadingDone, $filteredData, columnDefs, rowActions, filters, $sortDirection, $sortColumn*/
      253 | r[1] & /*$$scope*/
      16 && (l.$$scope = { dirty: r, ctx: i }), e.$set(l);
    },
    i(i) {
      t || (S(e.$$.fragment, i), t = !0);
    },
    o(i) {
      L(e.$$.fragment, i), t = !1;
    },
    d(i) {
      N(e, i);
    }
  };
}
function Mf(n, e, t) {
  let i, r, l, { loadingDone: o = !0 } = e, { label: a = "crypto.randomUUID()" } = e, { columnDefs: s = [] } = e, { rowData: u = [] } = e, { store: f } = e, { rowActions: c = [] } = e, d = { name: "", color: "", number: "" }, p = ut([]);
  xe(n, p, (h) => t(7, l = h));
  let b = ut(null);
  xe(n, b, (h) => t(5, i = h));
  let _ = ut(null);
  xe(n, _, (h) => t(6, r = h)), f.store.subscribe((h) => {
    t(13, u = [...h]), g();
  });
  function g() {
    let h = u.filter((H) => s.every((D) => {
      const W = d[D.field], se = H[D.field];
      return W ? D.filterType === "number" ? se == W : se.toString().toLowerCase().includes(W.toLowerCase()) : !0;
    }));
    h = C(h), p.set(h);
  }
  function C(h) {
    let H, D;
    return b.subscribe((W) => H = W), _.subscribe((W) => D = W), !H || !D ? h : h.sort((W, se) => {
      let ue = W[H], J = se[H];
      return ue == null && (ue = ""), J == null && (J = ""), D === "asc" ? ue.toString().localeCompare(J.toString()) : J.toString().localeCompare(ue.toString());
    });
  }
  function v(h) {
    b.update((H) => {
      if (H === h)
        _.update((D) => D === "asc" ? "desc" : D === "desc" ? null : "asc");
      else
        return _.set("asc"), h;
      return h;
    }), g();
  }
  p.set(u);
  function w(h) {
    o = h, t(0, o);
  }
  function A(h) {
    d[h.field] = this.value, t(4, d);
  }
  const O = () => g();
  function P(h) {
    d[h.field] = Tr(this.value), t(4, d);
  }
  const m = () => g(), R = (h) => h.sortable && v(h.field), z = (h, H) => h.callback(H), I = (h, H) => h.callback(H);
  return n.$$set = (h) => {
    "loadingDone" in h && t(0, o = h.loadingDone), "label" in h && t(1, a = h.label), "columnDefs" in h && t(2, s = h.columnDefs), "rowData" in h && t(13, u = h.rowData), "store" in h && t(14, f = h.store), "rowActions" in h && t(3, c = h.rowActions);
  }, [
    o,
    a,
    s,
    c,
    d,
    i,
    r,
    l,
    p,
    b,
    _,
    g,
    v,
    u,
    f,
    w,
    A,
    O,
    P,
    m,
    R,
    z,
    I
  ];
}
class Ff extends de {
  constructor(e) {
    super(), ce(
      this,
      e,
      Mf,
      Hf,
      ae,
      {
        loadingDone: 0,
        label: 1,
        columnDefs: 2,
        rowData: 13,
        store: 14,
        rowActions: 3
      },
      null,
      [-1, -1]
    );
  }
}
function Uf(n) {
  let e, t, i, r, l, o;
  const a = (
    /*#slots*/
    n[9].default
  ), s = ne(
    a,
    n,
    /*$$scope*/
    n[8],
    null
  );
  let u = [
    {
      class: t = Q({
        [
          /*className*/
          n[1]
        ]: !0,
        "mdc-card": !0,
        "mdc-card--outlined": (
          /*variant*/
          n[2] === "outlined"
        ),
        "smui-card--padded": (
          /*padded*/
          n[3]
        )
      })
    },
    /*$$restProps*/
    n[6]
  ], f = {};
  for (let c = 0; c < u.length; c += 1)
    f = V(f, u[c]);
  return {
    c() {
      e = Z("div"), s && s.c(), te(e, f);
    },
    m(c, d) {
      F(c, e, d), s && s.m(e, null), n[10](e), r = !0, l || (o = [
        ee(i = De.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        ee(
          /*forwardEvents*/
          n[5].call(null, e)
        )
      ], l = !0);
    },
    p(c, [d]) {
      s && s.p && (!r || d & /*$$scope*/
      256) && re(
        s,
        a,
        c,
        /*$$scope*/
        c[8],
        r ? ie(
          a,
          /*$$scope*/
          c[8],
          d,
          null
        ) : le(
          /*$$scope*/
          c[8]
        ),
        null
      ), te(e, f = fe(u, [
        (!r || d & /*className, variant, padded*/
        14 && t !== (t = Q({
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
        }))) && { class: t },
        d & /*$$restProps*/
        64 && /*$$restProps*/
        c[6]
      ])), i && he(i.update) && d & /*use*/
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
      L(s, c), r = !1;
    },
    d(c) {
      c && M(e), s && s.d(c), n[10](null), l = !1, Ce(o);
    }
  };
}
function Pf(n, e, t) {
  const i = ["use", "class", "variant", "padded", "getElement"];
  let r = oe(e, i), { $$slots: l = {}, $$scope: o } = e;
  const a = Pe(Re());
  let { use: s = [] } = e, { class: u = "" } = e, { variant: f = "raised" } = e, { padded: c = !1 } = e, d;
  function p() {
    return d;
  }
  function b(_) {
    x[_ ? "unshift" : "push"](() => {
      d = _, t(4, d);
    });
  }
  return n.$$set = (_) => {
    e = V(V({}, e), Fe(_)), t(6, r = oe(e, i)), "use" in _ && t(0, s = _.use), "class" in _ && t(1, u = _.class), "variant" in _ && t(2, f = _.variant), "padded" in _ && t(3, c = _.padded), "$$scope" in _ && t(8, o = _.$$scope);
  }, [
    s,
    u,
    f,
    c,
    d,
    a,
    r,
    p,
    o,
    l,
    b
  ];
}
class Bf extends de {
  constructor(e) {
    super(), ce(this, e, Pf, Uf, ae, {
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
Be({
  class: "smui-card__content",
  tag: "div"
});
Be({
  class: "mdc-card__media-content",
  tag: "div"
});
Be({
  class: "mdc-card__action-buttons",
  tag: "div"
});
Be({
  class: "mdc-card__action-icons",
  tag: "div"
});
function Ue(n) {
  return typeof n == "function";
}
function Yr(n) {
  var e = function(i) {
    Error.call(i), i.stack = new Error().stack;
  }, t = n(e);
  return t.prototype = Object.create(Error.prototype), t.prototype.constructor = t, t;
}
var kn = Yr(function(n) {
  return function(t) {
    n(this), this.message = t ? t.length + ` errors occurred during unsubscription:
` + t.map(function(i, r) {
      return r + 1 + ") " + i.toString();
    }).join(`
  `) : "", this.name = "UnsubscriptionError", this.errors = t;
  };
});
function gr(n, e) {
  if (n) {
    var t = n.indexOf(e);
    0 <= t && n.splice(t, 1);
  }
}
var Vn = function() {
  function n(e) {
    this.initialTeardown = e, this.closed = !1, this._parentage = null, this._finalizers = null;
  }
  return n.prototype.unsubscribe = function() {
    var e, t, i, r, l;
    if (!this.closed) {
      this.closed = !0;
      var o = this._parentage;
      if (o)
        if (this._parentage = null, Array.isArray(o))
          try {
            for (var a = ze(o), s = a.next(); !s.done; s = a.next()) {
              var u = s.value;
              u.remove(this);
            }
          } catch (_) {
            e = { error: _ };
          } finally {
            try {
              s && !s.done && (t = a.return) && t.call(a);
            } finally {
              if (e)
                throw e.error;
            }
          }
        else
          o.remove(this);
      var f = this.initialTeardown;
      if (Ue(f))
        try {
          f();
        } catch (_) {
          l = _ instanceof kn ? _.errors : [_];
        }
      var c = this._finalizers;
      if (c) {
        this._finalizers = null;
        try {
          for (var d = ze(c), p = d.next(); !p.done; p = d.next()) {
            var b = p.value;
            try {
              pr(b);
            } catch (_) {
              l = l ?? [], _ instanceof kn ? l = Fn(Fn([], Mn(l)), Mn(_.errors)) : l.push(_);
            }
          }
        } catch (_) {
          i = { error: _ };
        } finally {
          try {
            p && !p.done && (r = d.return) && r.call(d);
          } finally {
            if (i)
              throw i.error;
          }
        }
      }
      if (l)
        throw new kn(l);
    }
  }, n.prototype.add = function(e) {
    var t;
    if (e && e !== this)
      if (this.closed)
        pr(e);
      else {
        if (e instanceof n) {
          if (e.closed || e._hasParent(this))
            return;
          e._addParent(this);
        }
        (this._finalizers = (t = this._finalizers) !== null && t !== void 0 ? t : []).push(e);
      }
  }, n.prototype._hasParent = function(e) {
    var t = this._parentage;
    return t === e || Array.isArray(t) && t.includes(e);
  }, n.prototype._addParent = function(e) {
    var t = this._parentage;
    this._parentage = Array.isArray(t) ? (t.push(e), t) : t ? [t, e] : e;
  }, n.prototype._removeParent = function(e) {
    var t = this._parentage;
    t === e ? this._parentage = null : Array.isArray(t) && gr(t, e);
  }, n.prototype.remove = function(e) {
    var t = this._finalizers;
    t && gr(t, e), e instanceof n && e._removeParent(this);
  }, n.EMPTY = function() {
    var e = new n();
    return e.closed = !0, e;
  }(), n;
}();
Vn.EMPTY;
function Qr(n) {
  return n instanceof Vn || n && "closed" in n && Ue(n.remove) && Ue(n.add) && Ue(n.unsubscribe);
}
function pr(n) {
  Ue(n) ? n() : n.unsubscribe();
}
var Nf = {
  Promise: void 0
}, jf = {
  setTimeout: function(n, e) {
    for (var t = [], i = 2; i < arguments.length; i++)
      t[i - 2] = arguments[i];
    return setTimeout.apply(void 0, Fn([n, e], Mn(t)));
  },
  clearTimeout: function(n) {
    return clearTimeout(n);
  },
  delegate: void 0
};
function Jr(n) {
  jf.setTimeout(function() {
    throw n;
  });
}
function _r() {
}
function qf(n) {
  n();
}
var Gn = function(n) {
  et(e, n);
  function e(t) {
    var i = n.call(this) || this;
    return i.isStopped = !1, t ? (i.destination = t, Qr(t) && t.add(i)) : i.destination = zf, i;
  }
  return e.create = function(t, i, r) {
    return new Un(t, i, r);
  }, e.prototype.next = function(t) {
    this.isStopped || this._next(t);
  }, e.prototype.error = function(t) {
    this.isStopped || (this.isStopped = !0, this._error(t));
  }, e.prototype.complete = function() {
    this.isStopped || (this.isStopped = !0, this._complete());
  }, e.prototype.unsubscribe = function() {
    this.closed || (this.isStopped = !0, n.prototype.unsubscribe.call(this), this.destination = null);
  }, e.prototype._next = function(t) {
    this.destination.next(t);
  }, e.prototype._error = function(t) {
    try {
      this.destination.error(t);
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
}(Vn), Vf = function() {
  function n(e) {
    this.partialObserver = e;
  }
  return n.prototype.next = function(e) {
    var t = this.partialObserver;
    if (t.next)
      try {
        t.next(e);
      } catch (i) {
        sn(i);
      }
  }, n.prototype.error = function(e) {
    var t = this.partialObserver;
    if (t.error)
      try {
        t.error(e);
      } catch (i) {
        sn(i);
      }
    else
      sn(e);
  }, n.prototype.complete = function() {
    var e = this.partialObserver;
    if (e.complete)
      try {
        e.complete();
      } catch (t) {
        sn(t);
      }
  }, n;
}(), Un = function(n) {
  et(e, n);
  function e(t, i, r) {
    var l = n.call(this) || this, o;
    return Ue(t) || !t ? o = {
      next: t ?? void 0,
      error: i ?? void 0,
      complete: r ?? void 0
    } : o = t, l.destination = new Vf(o), l;
  }
  return e;
}(Gn);
function sn(n) {
  Jr(n);
}
function Gf(n) {
  throw n;
}
var zf = {
  closed: !0,
  next: _r,
  error: Gf,
  complete: _r
}, zn = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}();
function $r(n) {
  return n;
}
function Wf(n) {
  return n.length === 0 ? $r : n.length === 1 ? n[0] : function(t) {
    return n.reduce(function(i, r) {
      return r(i);
    }, t);
  };
}
var lt = function() {
  function n(e) {
    e && (this._subscribe = e);
  }
  return n.prototype.lift = function(e) {
    var t = new n();
    return t.source = this, t.operator = e, t;
  }, n.prototype.subscribe = function(e, t, i) {
    var r = this, l = Xf(e) ? e : new Un(e, t, i);
    return qf(function() {
      var o = r, a = o.operator, s = o.source;
      l.add(a ? a.call(l, s) : s ? r._subscribe(l) : r._trySubscribe(l));
    }), l;
  }, n.prototype._trySubscribe = function(e) {
    try {
      return this._subscribe(e);
    } catch (t) {
      e.error(t);
    }
  }, n.prototype.forEach = function(e, t) {
    var i = this;
    return t = br(t), new t(function(r, l) {
      var o = new Un({
        next: function(a) {
          try {
            e(a);
          } catch (s) {
            l(s), o.unsubscribe();
          }
        },
        error: l,
        complete: r
      });
      i.subscribe(o);
    });
  }, n.prototype._subscribe = function(e) {
    var t;
    return (t = this.source) === null || t === void 0 ? void 0 : t.subscribe(e);
  }, n.prototype[zn] = function() {
    return this;
  }, n.prototype.pipe = function() {
    for (var e = [], t = 0; t < arguments.length; t++)
      e[t] = arguments[t];
    return Wf(e)(this);
  }, n.prototype.toPromise = function(e) {
    var t = this;
    return e = br(e), new e(function(i, r) {
      var l;
      t.subscribe(function(o) {
        return l = o;
      }, function(o) {
        return r(o);
      }, function() {
        return i(l);
      });
    });
  }, n.create = function(e) {
    return new n(e);
  }, n;
}();
function br(n) {
  var e;
  return (e = n ?? Nf.Promise) !== null && e !== void 0 ? e : Promise;
}
function Kf(n) {
  return n && Ue(n.next) && Ue(n.error) && Ue(n.complete);
}
function Xf(n) {
  return n && n instanceof Gn || Kf(n) && Qr(n);
}
function Zf(n) {
  return Ue(n == null ? void 0 : n.lift);
}
function Mt(n) {
  return function(e) {
    if (Zf(e))
      return e.lift(function(t) {
        try {
          return n(t, this);
        } catch (i) {
          this.error(i);
        }
      });
    throw new TypeError("Unable to lift unknown Observable type");
  };
}
function zt(n, e, t, i, r) {
  return new Yf(n, e, t, i, r);
}
var Yf = function(n) {
  et(e, n);
  function e(t, i, r, l, o, a) {
    var s = n.call(this, t) || this;
    return s.onFinalize = o, s.shouldUnsubscribe = a, s._next = i ? function(u) {
      try {
        i(u);
      } catch (f) {
        t.error(f);
      }
    } : n.prototype._next, s._error = l ? function(u) {
      try {
        l(u);
      } catch (f) {
        t.error(f);
      } finally {
        this.unsubscribe();
      }
    } : n.prototype._error, s._complete = r ? function() {
      try {
        r();
      } catch (u) {
        t.error(u);
      } finally {
        this.unsubscribe();
      }
    } : n.prototype._complete, s;
  }
  return e.prototype.unsubscribe = function() {
    var t;
    if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
      var i = this.closed;
      n.prototype.unsubscribe.call(this), !i && ((t = this.onFinalize) === null || t === void 0 || t.call(this));
    }
  }, e;
}(Gn), Qf = new lt(function(n) {
  return n.complete();
});
function Jf(n) {
  return n && Ue(n.schedule);
}
function $f(n) {
  return n[n.length - 1];
}
function xf(n) {
  return Jf($f(n)) ? n.pop() : void 0;
}
var xr = function(n) {
  return n && typeof n.length == "number" && typeof n != "function";
};
function el(n) {
  return Ue(n == null ? void 0 : n.then);
}
function tl(n) {
  return Ue(n[zn]);
}
function nl(n) {
  return Symbol.asyncIterator && Ue(n == null ? void 0 : n[Symbol.asyncIterator]);
}
function il(n) {
  return new TypeError("You provided " + (n !== null && typeof n == "object" ? "an invalid object" : "'" + n + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
}
function ec() {
  return typeof Symbol != "function" || !Symbol.iterator ? "@@iterator" : Symbol.iterator;
}
var rl = ec();
function ll(n) {
  return Ue(n == null ? void 0 : n[rl]);
}
function al(n) {
  return _a(this, arguments, function() {
    var t, i, r, l;
    return Bn(this, function(o) {
      switch (o.label) {
        case 0:
          t = n.getReader(), o.label = 1;
        case 1:
          o.trys.push([1, , 9, 10]), o.label = 2;
        case 2:
          return [4, qt(t.read())];
        case 3:
          return i = o.sent(), r = i.value, l = i.done, l ? [4, qt(void 0)] : [3, 5];
        case 4:
          return [2, o.sent()];
        case 5:
          return [4, qt(r)];
        case 6:
          return [4, o.sent()];
        case 7:
          return o.sent(), [3, 2];
        case 8:
          return [3, 10];
        case 9:
          return t.releaseLock(), [7];
        case 10:
          return [2];
      }
    });
  });
}
function ol(n) {
  return Ue(n == null ? void 0 : n.getReader);
}
function xt(n) {
  if (n instanceof lt)
    return n;
  if (n != null) {
    if (tl(n))
      return tc(n);
    if (xr(n))
      return nc(n);
    if (el(n))
      return ic(n);
    if (nl(n))
      return sl(n);
    if (ll(n))
      return rc(n);
    if (ol(n))
      return lc(n);
  }
  throw il(n);
}
function tc(n) {
  return new lt(function(e) {
    var t = n[zn]();
    if (Ue(t.subscribe))
      return t.subscribe(e);
    throw new TypeError("Provided object does not correctly implement Symbol.observable");
  });
}
function nc(n) {
  return new lt(function(e) {
    for (var t = 0; t < n.length && !e.closed; t++)
      e.next(n[t]);
    e.complete();
  });
}
function ic(n) {
  return new lt(function(e) {
    n.then(function(t) {
      e.closed || (e.next(t), e.complete());
    }, function(t) {
      return e.error(t);
    }).then(null, Jr);
  });
}
function rc(n) {
  return new lt(function(e) {
    var t, i;
    try {
      for (var r = ze(n), l = r.next(); !l.done; l = r.next()) {
        var o = l.value;
        if (e.next(o), e.closed)
          return;
      }
    } catch (a) {
      t = { error: a };
    } finally {
      try {
        l && !l.done && (i = r.return) && i.call(r);
      } finally {
        if (t)
          throw t.error;
      }
    }
    e.complete();
  });
}
function sl(n) {
  return new lt(function(e) {
    ac(n, e).catch(function(t) {
      return e.error(t);
    });
  });
}
function lc(n) {
  return sl(al(n));
}
function ac(n, e) {
  var t, i, r, l;
  return jr(this, void 0, void 0, function() {
    var o, a;
    return Bn(this, function(s) {
      switch (s.label) {
        case 0:
          s.trys.push([0, 5, 6, 11]), t = ba(n), s.label = 1;
        case 1:
          return [4, t.next()];
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
          return a = s.sent(), r = { error: a }, [3, 11];
        case 6:
          return s.trys.push([6, , 9, 10]), i && !i.done && (l = t.return) ? [4, l.call(t)] : [3, 8];
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
function Dt(n, e, t, i, r) {
  i === void 0 && (i = 0), r === void 0 && (r = !1);
  var l = e.schedule(function() {
    t(), r ? n.add(this.schedule(null, i)) : this.unsubscribe();
  }, i);
  if (n.add(l), !r)
    return l;
}
function ul(n, e) {
  return e === void 0 && (e = 0), Mt(function(t, i) {
    t.subscribe(zt(i, function(r) {
      return Dt(i, n, function() {
        return i.next(r);
      }, e);
    }, function() {
      return Dt(i, n, function() {
        return i.complete();
      }, e);
    }, function(r) {
      return Dt(i, n, function() {
        return i.error(r);
      }, e);
    }));
  });
}
function fl(n, e) {
  return e === void 0 && (e = 0), Mt(function(t, i) {
    i.add(n.schedule(function() {
      return t.subscribe(i);
    }, e));
  });
}
function oc(n, e) {
  return xt(n).pipe(fl(e), ul(e));
}
function sc(n, e) {
  return xt(n).pipe(fl(e), ul(e));
}
function uc(n, e) {
  return new lt(function(t) {
    var i = 0;
    return e.schedule(function() {
      i === n.length ? t.complete() : (t.next(n[i++]), t.closed || this.schedule());
    });
  });
}
function fc(n, e) {
  return new lt(function(t) {
    var i;
    return Dt(t, e, function() {
      i = n[rl](), Dt(t, e, function() {
        var r, l, o;
        try {
          r = i.next(), l = r.value, o = r.done;
        } catch (a) {
          t.error(a);
          return;
        }
        o ? t.complete() : t.next(l);
      }, 0, !0);
    }), function() {
      return Ue(i == null ? void 0 : i.return) && i.return();
    };
  });
}
function cl(n, e) {
  if (!n)
    throw new Error("Iterable cannot be null");
  return new lt(function(t) {
    Dt(t, e, function() {
      var i = n[Symbol.asyncIterator]();
      Dt(t, e, function() {
        i.next().then(function(r) {
          r.done ? t.complete() : t.next(r.value);
        });
      }, 0, !0);
    });
  });
}
function cc(n, e) {
  return cl(al(n), e);
}
function dc(n, e) {
  if (n != null) {
    if (tl(n))
      return oc(n, e);
    if (xr(n))
      return uc(n, e);
    if (el(n))
      return sc(n, e);
    if (nl(n))
      return cl(n, e);
    if (ll(n))
      return fc(n, e);
    if (ol(n))
      return cc(n, e);
  }
  throw il(n);
}
function mc(n, e) {
  return e ? dc(n, e) : xt(n);
}
function hc() {
  for (var n = [], e = 0; e < arguments.length; e++)
    n[e] = arguments[e];
  var t = xf(n);
  return mc(n, t);
}
function st(n, e) {
  return Mt(function(t, i) {
    var r = 0;
    t.subscribe(zt(i, function(l) {
      i.next(n.call(e, l, r++));
    }));
  });
}
function gc(n, e, t, i, r, l, o, a) {
  var s = [], u = 0, f = 0, c = !1, d = function() {
    c && !s.length && !u && e.complete();
  }, p = function(_) {
    return u < i ? b(_) : s.push(_);
  }, b = function(_) {
    u++;
    var g = !1;
    xt(t(_, f++)).subscribe(zt(e, function(C) {
      e.next(C);
    }, function() {
      g = !0;
    }, void 0, function() {
      if (g)
        try {
          u--;
          for (var C = function() {
            var v = s.shift();
            o || b(v);
          }; s.length && u < i; )
            C();
          d();
        } catch (v) {
          e.error(v);
        }
    }));
  };
  return n.subscribe(zt(e, p, function() {
    c = !0, d();
  })), function() {
  };
}
function Pn(n, e, t) {
  return t === void 0 && (t = 1 / 0), Ue(e) ? Pn(function(i, r) {
    return st(function(l, o) {
      return e(i, l, r, o);
    })(xt(n(i, r)));
  }, t) : (typeof e == "number" && (t = e), Mt(function(i, r) {
    return gc(i, r, n, t);
  }));
}
function pc(n, e) {
  return Ue(e) ? Pn(n, e, 1) : Pn(n, 1);
}
function vr(n) {
  return n <= 0 ? function() {
    return Qf;
  } : Mt(function(e, t) {
    var i = 0;
    e.subscribe(zt(t, function(r) {
      ++i <= n && (t.next(r), n <= i && t.complete());
    }));
  });
}
function yr(n) {
  return Mt(function(e, t) {
    try {
      e.subscribe(t);
    } finally {
      t.add(n);
    }
  });
}
function Cr(n, e, t) {
  var i = Ue(n) || e || t ? { next: n, error: e, complete: t } : n;
  return i ? Mt(function(r, l) {
    var o;
    (o = i.subscribe) === null || o === void 0 || o.call(i);
    var a = !0;
    r.subscribe(zt(l, function(s) {
      var u;
      (u = i.next) === null || u === void 0 || u.call(i, s), l.next(s);
    }, function() {
      var s;
      a = !1, (s = i.complete) === null || s === void 0 || s.call(i), l.complete();
    }, function(s) {
      var u;
      a = !1, (u = i.error) === null || u === void 0 || u.call(i, s), l.error(s);
    }, function() {
      var s, u;
      a && ((s = i.unsubscribe) === null || s === void 0 || s.call(i)), (u = i.finalize) === null || u === void 0 || u.call(i);
    }));
  }) : $r;
}
function dl(n) {
  switch (n.responseType) {
    case "json": {
      if ("response" in n)
        return n.response;
      var e = n;
      return JSON.parse(e.responseText);
    }
    case "document":
      return n.responseXML;
    case "text":
    default: {
      if ("response" in n)
        return n.response;
      var e = n;
      return e.responseText;
    }
  }
}
var _c = /* @__PURE__ */ function() {
  function n(e, t, i, r) {
    r === void 0 && (r = "download_load"), this.originalEvent = e, this.xhr = t, this.request = i, this.type = r;
    var l = t.status, o = t.responseType;
    this.status = l ?? 0, this.responseType = o ?? "";
    var a = t.getAllResponseHeaders();
    this.responseHeaders = a ? a.split(`
`).reduce(function(f, c) {
      var d = c.indexOf(": ");
      return f[c.slice(0, d)] = c.slice(d + 2), f;
    }, {}) : {}, this.response = dl(t);
    var s = e.loaded, u = e.total;
    this.loaded = s, this.total = u;
  }
  return n;
}(), hn = Yr(function(n) {
  return function(t, i, r) {
    this.message = t, this.name = "AjaxError", this.xhr = i, this.request = r, this.status = i.status, this.responseType = i.responseType;
    var l;
    try {
      l = dl(i);
    } catch {
      l = i.responseText;
    }
    this.response = l;
  };
}), bc = function() {
  function n(e, t) {
    return hn.call(this, "ajax timeout", e, t), this.name = "AjaxTimeoutError", this;
  }
  return n.prototype = Object.create(hn.prototype), n;
}();
function vc(n, e) {
  return Ft({ method: "GET", url: n, headers: e });
}
function yc(n, e, t) {
  return Ft({ method: "POST", url: n, body: e, headers: t });
}
function Cc(n, e) {
  return Ft({ method: "DELETE", url: n, headers: e });
}
function Ac(n, e, t) {
  return Ft({ method: "PUT", url: n, body: e, headers: t });
}
function Sc(n, e, t) {
  return Ft({ method: "PATCH", url: n, body: e, headers: t });
}
var Ic = st(function(n) {
  return n.response;
});
function Ec(n, e) {
  return Ic(Ft({
    method: "GET",
    url: n,
    headers: e
  }));
}
var Ft = function() {
  var n = function(e) {
    var t = typeof e == "string" ? {
      url: e
    } : e;
    return kc(t);
  };
  return n.get = vc, n.post = yc, n.delete = Cc, n.put = Ac, n.patch = Sc, n.getJSON = Ec, n;
}(), Lc = "upload", Ar = "download", Rn = "loadstart", wn = "progress", Sr = "load";
function kc(n) {
  return new lt(function(e) {
    var t, i, r = Le({ async: !0, crossDomain: !1, withCredentials: !1, method: "GET", timeout: 0, responseType: "json" }, n), l = r.queryParams, o = r.body, a = r.headers, s = r.url;
    if (!s)
      throw new TypeError("url is required");
    if (l) {
      var u;
      if (s.includes("?")) {
        var f = s.split("?");
        if (2 < f.length)
          throw new TypeError("invalid url");
        u = new URLSearchParams(f[1]), new URLSearchParams(l).forEach(function(J, T) {
          return u.set(T, J);
        }), s = f[0] + "?" + u;
      } else
        u = new URLSearchParams(l), s = s + "?" + u;
    }
    var c = {};
    if (a)
      for (var d in a)
        a.hasOwnProperty(d) && (c[d.toLowerCase()] = a[d]);
    var p = r.crossDomain;
    !p && !("x-requested-with" in c) && (c["x-requested-with"] = "XMLHttpRequest");
    var b = r.withCredentials, _ = r.xsrfCookieName, g = r.xsrfHeaderName;
    if ((b || !p) && _ && g) {
      var C = (i = (t = document == null ? void 0 : document.cookie.match(new RegExp("(^|;\\s*)(" + _ + ")=([^;]*)"))) === null || t === void 0 ? void 0 : t.pop()) !== null && i !== void 0 ? i : "";
      C && (c[g] = C);
    }
    var v = Rc(o, c), w = Le(Le({}, r), {
      url: s,
      headers: c,
      body: v
    }), A;
    A = n.createXHR ? n.createXHR() : new XMLHttpRequest();
    {
      var O = n.progressSubscriber, P = n.includeDownloadProgress, m = P === void 0 ? !1 : P, R = n.includeUploadProgress, z = R === void 0 ? !1 : R, I = function(J, T) {
        A.addEventListener(J, function() {
          var y, G = T();
          (y = O == null ? void 0 : O.error) === null || y === void 0 || y.call(O, G), e.error(G);
        });
      };
      I("timeout", function() {
        return new bc(A, w);
      }), I("abort", function() {
        return new hn("aborted", A, w);
      });
      var h = function(J, T) {
        return new _c(T, A, w, J + "_" + T.type);
      }, H = function(J, T, y) {
        J.addEventListener(T, function(G) {
          e.next(h(y, G));
        });
      };
      z && [Rn, wn, Sr].forEach(function(J) {
        return H(A.upload, J, Lc);
      }), O && [Rn, wn].forEach(function(J) {
        return A.upload.addEventListener(J, function(T) {
          var y;
          return (y = O == null ? void 0 : O.next) === null || y === void 0 ? void 0 : y.call(O, T);
        });
      }), m && [Rn, wn].forEach(function(J) {
        return H(A, J, Ar);
      });
      var D = function(J) {
        var T = "ajax error" + (J ? " " + J : "");
        e.error(new hn(T, A, w));
      };
      A.addEventListener("error", function(J) {
        var T;
        (T = O == null ? void 0 : O.error) === null || T === void 0 || T.call(O, J), D();
      }), A.addEventListener(Sr, function(J) {
        var T, y, G = A.status;
        if (G < 400) {
          (T = O == null ? void 0 : O.complete) === null || T === void 0 || T.call(O);
          var me = void 0;
          try {
            me = h(Ar, J);
          } catch (Ae) {
            e.error(Ae);
            return;
          }
          e.next(me), e.complete();
        } else
          (y = O == null ? void 0 : O.error) === null || y === void 0 || y.call(O, J), D(G);
      });
    }
    var W = w.user, se = w.method, ue = w.async;
    W ? A.open(se, s, ue, W, w.password) : A.open(se, s, ue), ue && (A.timeout = w.timeout, A.responseType = w.responseType), "withCredentials" in A && (A.withCredentials = w.withCredentials);
    for (var d in c)
      c.hasOwnProperty(d) && A.setRequestHeader(d, c[d]);
    return v ? A.send(v) : A.send(), function() {
      A && A.readyState !== 4 && A.abort();
    };
  });
}
function Rc(n, e) {
  var t;
  if (!n || typeof n == "string" || Mc(n) || Fc(n) || Oc(n) || Dc(n) || Tc(n) || Uc(n))
    return n;
  if (Hc(n))
    return n.buffer;
  if (typeof n == "object")
    return e["content-type"] = (t = e["content-type"]) !== null && t !== void 0 ? t : "application/json;charset=utf-8", JSON.stringify(n);
  throw new TypeError("Unknown body type");
}
var wc = Object.prototype.toString;
function Wn(n, e) {
  return wc.call(n) === "[object " + e + "]";
}
function Oc(n) {
  return Wn(n, "ArrayBuffer");
}
function Dc(n) {
  return Wn(n, "File");
}
function Tc(n) {
  return Wn(n, "Blob");
}
function Hc(n) {
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView(n);
}
function Mc(n) {
  return typeof FormData < "u" && n instanceof FormData;
}
function Fc(n) {
  return typeof URLSearchParams < "u" && n instanceof URLSearchParams;
}
function Uc(n) {
  return typeof ReadableStream < "u" && n instanceof ReadableStream;
}
class Pc {
  constructor(e, t, i) {
    this.url = e, this.variableConfiguration = t, this.description = i;
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
    for (const t in this.variableConfiguration)
      if (this.variableConfiguration.hasOwnProperty(t)) {
        const i = new RegExp("{" + t + "}", "g");
        e = e.replace(i, this.variableConfiguration[t]);
      }
    return e;
  }
}
const Bc = new Pc("https://demo.compas.energy", {}, "DSOM Versatel Production URL"), Nc = [Bc], jc = Nc[0].getUrl();
class ml {
  constructor(e = {}) {
    this.configuration = e;
  }
  get basePath() {
    return this.configuration.basePath ?? jc;
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
class qc {
  constructor(e = new ml()) {
    this.configuration = e, this.middleware = [], this.withMiddleware = (t) => {
      const i = this.clone();
      return i.middleware = i.middleware.concat(t), i;
    }, this.withPreMiddleware = (t) => this.withMiddleware(t.map((i) => ({ pre: i }))), this.withPostMiddleware = (t) => this.withMiddleware(t.map((i) => ({ post: i }))), this.createRequestArgs = ({ url: t, query: i, method: r, headers: l, body: o, responseType: a }) => ({
      url: `${this.configuration.basePath}${t}${i && Object.keys(i).length ? `?${Vc(i)}` : ""}`,
      method: r,
      headers: l,
      body: o instanceof FormData ? o : JSON.stringify(o),
      responseType: a ?? "json"
    }), this.rxjsRequest = (t) => hc(t).pipe(
      st((i) => (this.middleware.filter((r) => r.pre).forEach((r) => i = r.pre(i)), i)),
      pc(
        (i) => Ft(i).pipe(
          st((r) => (this.middleware.filter((l) => l.post).forEach((l) => r = l.post(r)), r))
        )
      )
    ), this.clone = () => Object.assign(Object.create(Object.getPrototypeOf(this)), this), this.middleware = e.middleware;
  }
  request(e, t) {
    return this.rxjsRequest(this.createRequestArgs(e)).pipe(
      st((i) => {
        const { status: r, response: l } = i;
        if (r >= 200 && r < 300)
          return (t == null ? void 0 : t.response) === "raw" ? i : l;
        throw i;
      })
    );
  }
}
const rt = (n) => encodeURIComponent(`${n}`), Vc = (n) => Object.entries(n).map(
  ([e, t]) => t instanceof Array ? t.map((i) => `${rt(e)}=${rt(i)}`).join("&") : `${rt(e)}=${rt(t)}`
).join("&"), gt = (n, e, t) => {
  if (n == null)
    throw new Error(`Parameter "${e}" was null or undefined when calling "${t}".`);
};
class Gc extends qc {
  assignResourceToLocation({ locationId: e, uuid: t }, i) {
    gt(e, "locationId", "assignResourceToLocation"), gt(t, "uuid", "assignResourceToLocation");
    const r = {};
    return this.request({
      url: "/api/locations/{locationId}/resources/{uuid}/assign".replace("{locationId}", rt(e)).replace("{uuid}", rt(t)),
      method: "POST",
      headers: r
    }, i == null ? void 0 : i.responseOpts);
  }
  createLocation({ location: e }, t) {
    gt(e, "location", "createLocation");
    const i = {
      "Content-Type": "application/json"
    };
    return this.request({
      url: "/api/locations",
      method: "POST",
      headers: i,
      body: e
    }, t == null ? void 0 : t.responseOpts);
  }
  deleteLocation({ locationId: e }, t) {
    gt(e, "locationId", "deleteLocation");
    const i = {};
    return this.request({
      url: "/api/locations/{locationId}".replace("{locationId}", rt(e)),
      method: "DELETE",
      headers: i
    }, t == null ? void 0 : t.responseOpts);
  }
  getLocation({ locationId: e }, t) {
    gt(e, "locationId", "getLocation");
    const i = {};
    return this.request({
      url: "/api/locations/{locationId}".replace("{locationId}", rt(e)),
      method: "GET",
      headers: i
    }, t == null ? void 0 : t.responseOpts);
  }
  getLocations({ page: e, pageSize: t }, i) {
    const r = {}, l = {};
    return e != null && (l.page = e), t != null && (l.pageSize = t), this.request({
      url: "/api/locations",
      method: "GET",
      headers: r,
      query: l
    }, i == null ? void 0 : i.responseOpts);
  }
  unassignResourceFromLocation({ locationId: e, uuid: t }, i) {
    gt(e, "locationId", "unassignResourceFromLocation"), gt(t, "uuid", "unassignResourceFromLocation");
    const r = {};
    return this.request({
      url: "/api/locations/{locationId}/resources/{uuid}/unassign".replace("{locationId}", rt(e)).replace("{uuid}", rt(t)),
      method: "POST",
      headers: r
    }, i == null ? void 0 : i.responseOpts);
  }
  updateLocation({ locationId: e, location: t }, i) {
    gt(e, "locationId", "updateLocation"), gt(t, "location", "updateLocation");
    const r = {
      "Content-Type": "application/json"
    };
    return this.request({
      url: "/api/locations/{locationId}".replace("{locationId}", rt(e)),
      method: "PUT",
      headers: r,
      body: t
    }, i == null ? void 0 : i.responseOpts);
  }
}
class Vt {
  constructor(e, t, i, r, l) {
    this.uuid = l, this.key = e, this.name = t, this.description = i, this.assignedResources = r;
  }
  static from(e) {
    return new Vt(e.key, e.name, e.description, e.assignedResources, e.uuid);
  }
}
class Nt {
  constructor() {
    this.endpoint = "http://localhost:9090/compas-scl-data-service", this.locationsApiClient = this.createApiClient(this.endpoint);
  }
  static getInstance() {
    return Nt.instance || (Nt.instance = new Nt()), Nt.instance;
  }
  getLocations(e) {
    return this.locationsApiClient.getLocations({
      page: e == null ? void 0 : e.page,
      pageSize: e == null ? void 0 : e.pageSize
    }).pipe(
      st((t) => t || []),
      st((t) => t.map((i) => Vt.from(i)))
    );
  }
  createLocation(e) {
    return this.locationsApiClient.createLocation({ location: e }).pipe(
      st((t) => Vt.from(t))
    );
  }
  deleteLocation(e) {
    return this.locationsApiClient.deleteLocation({ locationId: e }).pipe(st(() => {
    }));
  }
  updateLocation(e) {
    return this.locationsApiClient.updateLocation({ locationId: e.locationId, location: e.location }).pipe(
      st((t) => Vt.from(t))
    );
  }
  createApiClient(e) {
    const t = new ml({
      basePath: e
      // accessToken: authInfo.token,
    });
    return new Gc(t);
  }
}
var _t;
class zc {
  constructor() {
    Zn(this, _t, ut([]));
  }
  get store() {
    return kt(this, _t);
  }
  set(e) {
    kt(this, _t).set(e);
  }
  update(e) {
    kt(this, _t).update((t) => t.map((i) => i.uuid === e.uuid ? e : i));
  }
  add(e) {
    kt(this, _t).update((t) => [...t, e]);
  }
  remove(e) {
    kt(this, _t).update((t) => t.filter((i) => i.uuid !== e));
  }
  findById(e) {
    return $l(kt(this, _t)).find((t) => t.uuid === e);
  }
}
_t = new WeakMap();
function Wc(n) {
  var o;
  let e, t, i = (
    /*currentSelectLocation*/
    ((o = n[4]) == null ? void 0 : o.name) + ""
  ), r, l;
  return {
    c() {
      e = Z("h3"), t = ke("Delete location "), r = ke(i), l = ke("?"), U(e, "slot", "title");
    },
    m(a, s) {
      F(a, e, s), X(e, t), X(e, r), X(e, l);
    },
    p(a, s) {
      var u;
      s & /*currentSelectLocation*/
      16 && i !== (i = /*currentSelectLocation*/
      ((u = a[4]) == null ? void 0 : u.name) + "") && We(r, i);
    },
    d(a) {
      a && M(e);
    }
  };
}
function Kc(n) {
  let e;
  return {
    c() {
      e = ke("Confirm");
    },
    m(t, i) {
      F(t, e, i);
    },
    d(t) {
      t && M(e);
    }
  };
}
function Xc(n) {
  let e, t, i, r;
  return e = new Zr({}), i = new Ht({
    props: {
      $$slots: { default: [Kc] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      j(e.$$.fragment), t = Y(), j(i.$$.fragment);
    },
    m(l, o) {
      B(e, l, o), F(l, t, o), B(i, l, o), r = !0;
    },
    p(l, o) {
      const a = {};
      o & /*$$scope*/
      262144 && (a.$$scope = { dirty: o, ctx: l }), i.$set(a);
    },
    i(l) {
      r || (S(e.$$.fragment, l), S(i.$$.fragment, l), r = !0);
    },
    o(l) {
      L(e.$$.fragment, l), L(i.$$.fragment, l), r = !1;
    },
    d(l) {
      l && M(t), N(e, l), N(i, l);
    }
  };
}
function Zc(n) {
  let e;
  return {
    c() {
      e = ke("Cancel");
    },
    m(t, i) {
      F(t, e, i);
    },
    d(t) {
      t && M(e);
    }
  };
}
function Yc(n) {
  let e, t, i, r;
  return e = new qn({}), i = new Ht({
    props: {
      $$slots: { default: [Zc] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      j(e.$$.fragment), t = Y(), j(i.$$.fragment);
    },
    m(l, o) {
      B(e, l, o), F(l, t, o), B(i, l, o), r = !0;
    },
    p(l, o) {
      const a = {};
      o & /*$$scope*/
      262144 && (a.$$scope = { dirty: o, ctx: l }), i.$set(a);
    },
    i(l) {
      r || (S(e.$$.fragment, l), S(i.$$.fragment, l), r = !0);
    },
    o(l) {
      L(e.$$.fragment, l), L(i.$$.fragment, l), r = !1;
    },
    d(l) {
      l && M(t), N(e, l), N(i, l);
    }
  };
}
function Qc(n) {
  let e, t, i, r, l;
  return t = new Tt({
    props: {
      callback: (
        /*onRemoveConfirm*/
        n[9]
      ),
      variant: "raised",
      $$slots: { default: [Xc] },
      $$scope: { ctx: n }
    }
  }), r = new Tt({
    props: {
      callback: (
        /*onCloseDialog*/
        n[10]
      ),
      variant: "raised",
      isAbortAction: !0,
      $$slots: { default: [Yc] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      e = Z("div"), j(t.$$.fragment), i = Y(), j(r.$$.fragment), U(e, "slot", "actions");
    },
    m(o, a) {
      F(o, e, a), B(t, e, null), X(e, i), B(r, e, null), l = !0;
    },
    p(o, a) {
      const s = {};
      a & /*$$scope*/
      262144 && (s.$$scope = { dirty: a, ctx: o }), t.$set(s);
      const u = {};
      a & /*$$scope*/
      262144 && (u.$$scope = { dirty: a, ctx: o }), r.$set(u);
    },
    i(o) {
      l || (S(t.$$.fragment, o), S(r.$$.fragment, o), l = !0);
    },
    o(o) {
      L(t.$$.fragment, o), L(r.$$.fragment, o), l = !1;
    },
    d(o) {
      o && M(e), N(t), N(r);
    }
  };
}
function Jc(n) {
  var r;
  let e, t = (
    /*dialogState*/
    n[3] === /*DialogState*/
    n[1].Update ? `Location: ${/*currentSelectLocation*/
    (r = n[4]) == null ? void 0 : r.name}` : "New Location"
  ), i;
  return {
    c() {
      e = Z("h3"), i = ke(t), U(e, "slot", "title");
    },
    m(l, o) {
      F(l, e, o), X(e, i);
    },
    p(l, o) {
      var a;
      o & /*dialogState, DialogState, currentSelectLocation*/
      26 && t !== (t = /*dialogState*/
      l[3] === /*DialogState*/
      l[1].Update ? `Location: ${/*currentSelectLocation*/
      (a = l[4]) == null ? void 0 : a.name}` : "New Location") && We(i, t);
    },
    d(l) {
      l && M(e);
    }
  };
}
function Ir(n) {
  let e, t, i, r, l, o, a, s, u, f, c = (
    /*dialogState*/
    n[3] === /*DialogState*/
    n[1].Update && Er(n)
  );
  function d(v) {
    n[12](v);
  }
  let p = { label: "Name" };
  /*currentSelectLocation*/
  n[4].name !== void 0 && (p.value = /*currentSelectLocation*/
  n[4].name), t = new En({ props: p }), x.push(() => Ye(t, "value", d));
  function b(v) {
    n[13](v);
  }
  let _ = { label: "Key" };
  /*currentSelectLocation*/
  n[4].key !== void 0 && (_.value = /*currentSelectLocation*/
  n[4].key), l = new En({ props: _ }), x.push(() => Ye(l, "value", b));
  function g(v) {
    n[14](v);
  }
  let C = { label: "Description" };
  return (
    /*currentSelectLocation*/
    n[4].description !== void 0 && (C.value = /*currentSelectLocation*/
    n[4].description), s = new En({ props: C }), x.push(() => Ye(s, "value", g)), {
      c() {
        c && c.c(), e = Y(), j(t.$$.fragment), r = Y(), j(l.$$.fragment), a = Y(), j(s.$$.fragment);
      },
      m(v, w) {
        c && c.m(v, w), F(v, e, w), B(t, v, w), F(v, r, w), B(l, v, w), F(v, a, w), B(s, v, w), f = !0;
      },
      p(v, w) {
        /*dialogState*/
        v[3] === /*DialogState*/
        v[1].Update ? c ? (c.p(v, w), w & /*dialogState, DialogState*/
        10 && S(c, 1)) : (c = Er(v), c.c(), S(c, 1), c.m(e.parentNode, e)) : c && (pe(), L(c, 1, 1, () => {
          c = null;
        }), _e());
        const A = {};
        !i && w & /*currentSelectLocation*/
        16 && (i = !0, A.value = /*currentSelectLocation*/
        v[4].name, Ze(() => i = !1)), t.$set(A);
        const O = {};
        !o && w & /*currentSelectLocation*/
        16 && (o = !0, O.value = /*currentSelectLocation*/
        v[4].key, Ze(() => o = !1)), l.$set(O);
        const P = {};
        !u && w & /*currentSelectLocation*/
        16 && (u = !0, P.value = /*currentSelectLocation*/
        v[4].description, Ze(() => u = !1)), s.$set(P);
      },
      i(v) {
        f || (S(c), S(t.$$.fragment, v), S(l.$$.fragment, v), S(s.$$.fragment, v), f = !0);
      },
      o(v) {
        L(c), L(t.$$.fragment, v), L(l.$$.fragment, v), L(s.$$.fragment, v), f = !1;
      },
      d(v) {
        v && (M(e), M(r), M(a)), c && c.d(v), N(t, v), N(l, v), N(s, v);
      }
    }
  );
}
function Er(n) {
  let e, t;
  return e = new Ht({
    props: {
      $$slots: { default: [$c] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      j(e.$$.fragment);
    },
    m(i, r) {
      B(e, i, r), t = !0;
    },
    p(i, r) {
      const l = {};
      r & /*$$scope, currentSelectLocation*/
      262160 && (l.$$scope = { dirty: r, ctx: i }), e.$set(l);
    },
    i(i) {
      t || (S(e.$$.fragment, i), t = !0);
    },
    o(i) {
      L(e.$$.fragment, i), t = !1;
    },
    d(i) {
      N(e, i);
    }
  };
}
function $c(n) {
  let e = (
    /*currentSelectLocation*/
    n[4].uuid + ""
  ), t;
  return {
    c() {
      t = ke(e);
    },
    m(i, r) {
      F(i, t, r);
    },
    p(i, r) {
      r & /*currentSelectLocation*/
      16 && e !== (e = /*currentSelectLocation*/
      i[4].uuid + "") && We(t, e);
    },
    d(i) {
      i && M(t);
    }
  };
}
function xc(n) {
  let e, t, i = (
    /*currentSelectLocation*/
    n[4] && Ir(n)
  );
  return {
    c() {
      e = Z("div"), i && i.c(), U(e, "slot", "content");
    },
    m(r, l) {
      F(r, e, l), i && i.m(e, null), t = !0;
    },
    p(r, l) {
      /*currentSelectLocation*/
      r[4] ? i ? (i.p(r, l), l & /*currentSelectLocation*/
      16 && S(i, 1)) : (i = Ir(r), i.c(), S(i, 1), i.m(e, null)) : i && (pe(), L(i, 1, 1, () => {
        i = null;
      }), _e());
    },
    i(r) {
      t || (S(i), t = !0);
    },
    o(r) {
      L(i), t = !1;
    },
    d(r) {
      r && M(e), i && i.d();
    }
  };
}
function ed(n) {
  let e;
  return {
    c() {
      e = ke("Save");
    },
    m(t, i) {
      F(t, e, i);
    },
    d(t) {
      t && M(e);
    }
  };
}
function td(n) {
  let e, t, i, r;
  return e = new Zr({}), i = new Ht({
    props: {
      $$slots: { default: [ed] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      j(e.$$.fragment), t = Y(), j(i.$$.fragment);
    },
    m(l, o) {
      B(e, l, o), F(l, t, o), B(i, l, o), r = !0;
    },
    p(l, o) {
      const a = {};
      o & /*$$scope*/
      262144 && (a.$$scope = { dirty: o, ctx: l }), i.$set(a);
    },
    i(l) {
      r || (S(e.$$.fragment, l), S(i.$$.fragment, l), r = !0);
    },
    o(l) {
      L(e.$$.fragment, l), L(i.$$.fragment, l), r = !1;
    },
    d(l) {
      l && M(t), N(e, l), N(i, l);
    }
  };
}
function nd(n) {
  let e;
  return {
    c() {
      e = ke("Cancel");
    },
    m(t, i) {
      F(t, e, i);
    },
    d(t) {
      t && M(e);
    }
  };
}
function id(n) {
  let e, t, i, r;
  return e = new qn({}), i = new Ht({
    props: {
      $$slots: { default: [nd] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      j(e.$$.fragment), t = Y(), j(i.$$.fragment);
    },
    m(l, o) {
      B(e, l, o), F(l, t, o), B(i, l, o), r = !0;
    },
    p(l, o) {
      const a = {};
      o & /*$$scope*/
      262144 && (a.$$scope = { dirty: o, ctx: l }), i.$set(a);
    },
    i(l) {
      r || (S(e.$$.fragment, l), S(i.$$.fragment, l), r = !0);
    },
    o(l) {
      L(e.$$.fragment, l), L(i.$$.fragment, l), r = !1;
    },
    d(l) {
      l && M(t), N(e, l), N(i, l);
    }
  };
}
function rd(n) {
  let e, t, i, r, l;
  return t = new Tt({
    props: {
      callback: (
        /*onUpdateOrCreateSave*/
        n[8]
      ),
      variant: "raised",
      $$slots: { default: [td] },
      $$scope: { ctx: n }
    }
  }), r = new Tt({
    props: {
      callback: (
        /*onCloseDialog*/
        n[10]
      ),
      variant: "raised",
      isAbortAction: !0,
      $$slots: { default: [id] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      e = Z("div"), j(t.$$.fragment), i = Y(), j(r.$$.fragment), U(e, "slot", "actions");
    },
    m(o, a) {
      F(o, e, a), B(t, e, null), X(e, i), B(r, e, null), l = !0;
    },
    p(o, a) {
      const s = {};
      a & /*$$scope*/
      262144 && (s.$$scope = { dirty: a, ctx: o }), t.$set(s);
      const u = {};
      a & /*$$scope*/
      262144 && (u.$$scope = { dirty: a, ctx: o }), r.$set(u);
    },
    i(o) {
      l || (S(t.$$.fragment, o), S(r.$$.fragment, o), l = !0);
    },
    o(o) {
      L(t.$$.fragment, o), L(r.$$.fragment, o), l = !1;
    },
    d(o) {
      o && M(e), N(t), N(r);
    }
  };
}
function ld(n) {
  let e;
  return {
    c() {
      e = ke("Add Location");
    },
    m(t, i) {
      F(t, e, i);
    },
    d(t) {
      t && M(e);
    }
  };
}
function ad(n) {
  let e, t, i, r;
  return e = new Kr({}), i = new Ht({
    props: {
      $$slots: { default: [ld] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      j(e.$$.fragment), t = Y(), j(i.$$.fragment);
    },
    m(l, o) {
      B(e, l, o), F(l, t, o), B(i, l, o), r = !0;
    },
    p(l, o) {
      const a = {};
      o & /*$$scope*/
      262144 && (a.$$scope = { dirty: o, ctx: l }), i.$set(a);
    },
    i(l) {
      r || (S(e.$$.fragment, l), S(i.$$.fragment, l), r = !0);
    },
    o(l) {
      L(e.$$.fragment, l), L(i.$$.fragment, l), r = !1;
    },
    d(l) {
      l && M(t), N(e, l), N(i, l);
    }
  };
}
function od(n) {
  let e;
  return {
    c() {
      e = ke("Refresh");
    },
    m(t, i) {
      F(t, e, i);
    },
    d(t) {
      t && M(e);
    }
  };
}
function sd(n) {
  let e, t, i, r;
  return e = new Xr({}), i = new Ht({
    props: {
      $$slots: { default: [od] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      j(e.$$.fragment), t = Y(), j(i.$$.fragment);
    },
    m(l, o) {
      B(e, l, o), F(l, t, o), B(i, l, o), r = !0;
    },
    p(l, o) {
      const a = {};
      o & /*$$scope*/
      262144 && (a.$$scope = { dirty: o, ctx: l }), i.$set(a);
    },
    i(l) {
      r || (S(e.$$.fragment, l), S(i.$$.fragment, l), r = !0);
    },
    o(l) {
      L(e.$$.fragment, l), L(i.$$.fragment, l), r = !1;
    },
    d(l) {
      l && M(t), N(e, l), N(i, l);
    }
  };
}
function ud(n) {
  let e, t, i, r;
  return i = new Ff({
    props: {
      columnDefs: (
        /*columnDefs*/
        n[5]
      ),
      store: (
        /*locationStore*/
        n[0]
      ),
      loadingDone: (
        /*loadingDone*/
        n[2]
      ),
      rowActions: (
        /*rowActions*/
        n[6]
      )
    }
  }), {
    c() {
      e = Z("h3"), e.textContent = "Location Table", t = Y(), j(i.$$.fragment), Jt(e, "margin-bottom", "1rem");
    },
    m(l, o) {
      F(l, e, o), F(l, t, o), B(i, l, o), r = !0;
    },
    p(l, o) {
      const a = {};
      o & /*locationStore*/
      1 && (a.store = /*locationStore*/
      l[0]), o & /*loadingDone*/
      4 && (a.loadingDone = /*loadingDone*/
      l[2]), i.$set(a);
    },
    i(l) {
      r || (S(i.$$.fragment, l), r = !0);
    },
    o(l) {
      L(i.$$.fragment, l), r = !1;
    },
    d(l) {
      l && (M(e), M(t)), N(i, l);
    }
  };
}
function fd(n) {
  let e, t, i, r, l, o, a, s, u, f, c, d, p, b, _;
  return t = new xs({
    props: { loadingDone: (
      /*loadingDone*/
      n[2]
    ) }
  }), r = new Ki({
    props: {
      open: (
        /*dialogState*/
        n[3] === /*DialogState*/
        n[1].Remove
      ),
      $$slots: {
        actions: [Qc],
        title: [Wc]
      },
      $$scope: { ctx: n }
    }
  }), o = new Ki({
    props: {
      open: (
        /*dialogState*/
        n[3] === /*DialogState*/
        n[1].Update || /*dialogState*/
        n[3] === /*DialogState*/
        n[1].Create
      ),
      $$slots: {
        actions: [rd],
        content: [xc],
        title: [Jc]
      },
      $$scope: { ctx: n }
    }
  }), u = new Tt({
    props: {
      class: "button",
      callback: (
        /*create*/
        n[7]
      ),
      variant: "raised",
      $$slots: { default: [ad] },
      $$scope: { ctx: n }
    }
  }), c = new Tt({
    props: {
      class: "button",
      callback: (
        /*load*/
        n[11]
      ),
      variant: "raised",
      $$slots: { default: [sd] },
      $$scope: { ctx: n }
    }
  }), b = new Bf({
    props: {
      style: "padding: 1rem; width: 100%; height: 100%;",
      $$slots: { default: [ud] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      e = Z("div"), j(t.$$.fragment), i = Y(), j(r.$$.fragment), l = Y(), j(o.$$.fragment), a = Y(), s = Z("div"), j(u.$$.fragment), f = Y(), j(c.$$.fragment), d = Y(), p = Z("div"), j(b.$$.fragment), Jt(s, "margin-top", "10px"), Jt(s, "margin-bottom", "10px"), U(p, "class", "table-container"), U(e, "class", "location-manager-container");
    },
    m(g, C) {
      F(g, e, C), B(t, e, null), X(e, i), B(r, e, null), X(e, l), B(o, e, null), X(e, a), X(e, s), B(u, s, null), X(s, f), B(c, s, null), X(e, d), X(e, p), B(b, p, null), _ = !0;
    },
    p(g, [C]) {
      const v = {};
      C & /*loadingDone*/
      4 && (v.loadingDone = /*loadingDone*/
      g[2]), t.$set(v);
      const w = {};
      C & /*dialogState, DialogState*/
      10 && (w.open = /*dialogState*/
      g[3] === /*DialogState*/
      g[1].Remove), C & /*$$scope, currentSelectLocation*/
      262160 && (w.$$scope = { dirty: C, ctx: g }), r.$set(w);
      const A = {};
      C & /*dialogState, DialogState*/
      10 && (A.open = /*dialogState*/
      g[3] === /*DialogState*/
      g[1].Update || /*dialogState*/
      g[3] === /*DialogState*/
      g[1].Create), C & /*$$scope, currentSelectLocation, dialogState, DialogState*/
      262170 && (A.$$scope = { dirty: C, ctx: g }), o.$set(A);
      const O = {};
      C & /*$$scope*/
      262144 && (O.$$scope = { dirty: C, ctx: g }), u.$set(O);
      const P = {};
      C & /*$$scope*/
      262144 && (P.$$scope = { dirty: C, ctx: g }), c.$set(P);
      const m = {};
      C & /*$$scope, locationStore, loadingDone*/
      262149 && (m.$$scope = { dirty: C, ctx: g }), b.$set(m);
    },
    i(g) {
      _ || (S(t.$$.fragment, g), S(r.$$.fragment, g), S(o.$$.fragment, g), S(u.$$.fragment, g), S(c.$$.fragment, g), S(b.$$.fragment, g), _ = !0);
    },
    o(g) {
      L(t.$$.fragment, g), L(r.$$.fragment, g), L(o.$$.fragment, g), L(u.$$.fragment, g), L(c.$$.fragment, g), L(b.$$.fragment, g), _ = !1;
    },
    d(g) {
      g && M(e), N(t), N(r), N(o), N(u), N(c), N(b);
    }
  };
}
function cd(n, e, t) {
  const i = Nt.getInstance();
  let { locationStore: r = new zc() } = e;
  var l;
  (function(O) {
    O.Closed = "closed", O.Update = "update", O.Create = "create", O.Remove = "remove";
  })(l || (l = {}));
  let o = !1, a = l.Closed, s = null;
  const u = [
    {
      headerName: "UUID",
      field: "uuid",
      numeric: !1,
      filter: !0,
      filterType: "text",
      sortable: !1
    },
    {
      headerName: "Key",
      field: "key",
      numeric: !1,
      filter: !0,
      filterType: "text",
      sortable: !0
    },
    {
      headerName: "Name",
      field: "name",
      numeric: !1,
      filter: !0,
      filterType: "text",
      sortable: !0
    },
    {
      headerName: "Description",
      field: "description",
      numeric: !1,
      filter: !0,
      filterType: "text",
      sortable: !0
    },
    {
      headerName: "Assigned Resources",
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
  ], f = [
    {
      icon: "edit",
      callback: (O) => c(O),
      disabled: () => !1
    },
    {
      icon: "delete",
      callback: (O) => p(O),
      disabled: () => !1
    }
  ];
  function c(O) {
    t(4, s = O), t(3, a = l.Update);
  }
  function d() {
    t(4, s = new Vt("", "")), t(3, a = l.Create);
  }
  function p(O) {
    t(4, s = O), t(3, a = l.Remove);
  }
  function b() {
    try {
      const O = (s == null ? void 0 : s.uuid) !== void 0;
      (O ? i.updateLocation({
        locationId: s.uuid,
        location: s
      }) : i.createLocation(s)).pipe(
        vr(1),
        Cr((m) => {
          O ? r.update(m) : r.add(m);
        }),
        yr(g)
      ).subscribe();
    } catch (O) {
      console.error("Error saving location", O);
    }
  }
  function _() {
    i.deleteLocation(s.uuid).subscribe({
      next: () => {
        r.remove(s.uuid), g();
      }
    });
  }
  function g() {
    t(3, a = l.Closed), t(4, s = null);
  }
  function C() {
    t(2, o = !1), i.getLocations().pipe(
      vr(1),
      Cr((O) => {
        r.set(O);
      }),
      yr(() => {
        t(2, o = !0);
      })
    ).subscribe();
  }
  Ke(() => {
    C();
  });
  function v(O) {
    n.$$.not_equal(s.name, O) && (s.name = O, t(4, s));
  }
  function w(O) {
    n.$$.not_equal(s.key, O) && (s.key = O, t(4, s));
  }
  function A(O) {
    n.$$.not_equal(s.description, O) && (s.description = O, t(4, s));
  }
  return n.$$set = (O) => {
    "locationStore" in O && t(0, r = O.locationStore);
  }, [
    r,
    l,
    o,
    a,
    s,
    u,
    f,
    d,
    b,
    _,
    g,
    C,
    v,
    w,
    A
  ];
}
class dd extends de {
  constructor(e) {
    super(), ce(this, e, cd, fd, ae, { locationStore: 0 });
  }
}
function Lr(n) {
  let e, t;
  return e = new dd({}), {
    c() {
      j(e.$$.fragment);
    },
    m(i, r) {
      B(e, i, r), t = !0;
    },
    i(i) {
      t || (S(e.$$.fragment, i), t = !0);
    },
    o(i) {
      L(e.$$.fragment, i), t = !1;
    },
    d(i) {
      N(e, i);
    }
  };
}
function md(n) {
  let e, t, i, r, l, o = (
    /*doc*/
    (n[0] || /*dev*/
    n[1]) && Lr()
  );
  return {
    c() {
      o && o.c(), e = Y(), t = Z("input"), i = Y(), r = Z("input"), U(t, "type", "hidden"), U(t, "name", "package-name"), t.value = Br, U(r, "type", "hidden"), U(r, "name", "package-version"), r.value = Nr;
    },
    m(a, s) {
      o && o.m(a, s), F(a, e, s), F(a, t, s), F(a, i, s), F(a, r, s), l = !0;
    },
    p(a, [s]) {
      /*doc*/
      a[0] || /*dev*/
      a[1] ? o ? s & /*doc, dev*/
      3 && S(o, 1) : (o = Lr(), o.c(), S(o, 1), o.m(e.parentNode, e)) : o && (pe(), L(o, 1, 1, () => {
        o = null;
      }), _e());
    },
    i(a) {
      l || (S(o), l = !0);
    },
    o(a) {
      L(o), l = !1;
    },
    d(a) {
      a && (M(e), M(t), M(i), M(r)), o && o.d(a);
    }
  };
}
function hd(n, e, t) {
  let { doc: i } = e, { dev: r = !1 } = e;
  return n.$$set = (l) => {
    "doc" in l && t(0, i = l.doc), "dev" in l && t(1, r = l.dev);
  }, [i, r];
}
class gd extends de {
  constructor(e) {
    super(), ce(this, e, hd, md, ae, { doc: 0, dev: 1 });
  }
}
class vd extends HTMLElement {
  connectedCallback() {
    var t;
    this.attachShadow({ mode: "open" }), this.plugin = new gd({
      target: this.shadowRoot,
      props: {
        doc: this._doc,
        editCount: -1
      }
    });
    const e = pd();
    (t = this.shadowRoot) == null || t.appendChild(e);
  }
  set doc(e) {
    this._doc = e, this.plugin && this.plugin.$set({ doc: e });
  }
  set editCount(e) {
    this.plugin && this.plugin.$set({ editCount: e });
  }
}
function pd() {
  const n = `${Br}-v${Nr}-style`, e = _d(), t = document.createElement("link");
  return t.rel = "stylesheet", t.type = "text/css", t.href = e, t.id = n, t;
}
function _d() {
  const n = new URL(import.meta.url), e = n.origin, t = n.pathname.split("/").slice(0, -1).filter(Boolean).join("/");
  return [e, t, "style.css"].filter(Boolean).join("/");
}
export {
  vd as default
};
