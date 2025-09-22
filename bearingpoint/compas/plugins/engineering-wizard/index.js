var Fi = Object.defineProperty;
var Wi = (n, e, t) => e in n ? Fi(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var Xt = (n, e, t) => (Wi(n, typeof e != "symbol" ? e + "" : e, t), t);
function K() {
}
function q(n, e) {
  for (const t in e)
    n[t] = e[t];
  return (
    /** @type {T & S} */
    n
  );
}
function Nl(n) {
  return n();
}
function fn() {
  return /* @__PURE__ */ Object.create(null);
}
function he(n) {
  n.forEach(Nl);
}
function pe(n) {
  return typeof n == "function";
}
function Q(n, e) {
  return n != n ? e == e : n !== e || n && typeof n == "object" || typeof n == "function";
}
function Bi(n) {
  return Object.keys(n).length === 0;
}
function Ui(n, ...e) {
  if (n == null) {
    for (const l of e)
      l(void 0);
    return K;
  }
  const t = n.subscribe(...e);
  return t.unsubscribe ? () => t.unsubscribe() : t;
}
function dt(n, e, t) {
  n.$$.on_destroy.push(Ui(e, t));
}
function ae(n, e, t, l) {
  if (n) {
    const i = Vl(n, e, t, l);
    return n[0](i);
  }
}
function Vl(n, e, t, l) {
  return n[1] && l ? q(t.ctx.slice(), n[1](l(e))) : t.ctx;
}
function oe(n, e, t, l) {
  if (n[2] && l) {
    const i = n[2](l(t));
    if (e.dirty === void 0)
      return i;
    if (typeof i == "object") {
      const r = [], s = Math.max(e.dirty.length, i.length);
      for (let a = 0; a < s; a += 1)
        r[a] = e.dirty[a] | i[a];
      return r;
    }
    return e.dirty | i;
  }
  return e.dirty;
}
function ue(n, e, t, l, i, r) {
  if (i) {
    const s = Vl(e, t, l, r);
    n.p(s, i);
  }
}
function ce(n) {
  if (n.ctx.length > 32) {
    const e = [], t = n.ctx.length / 32;
    for (let l = 0; l < t; l++)
      e[l] = -1;
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
function ge(n, e) {
  const t = {};
  e = new Set(e);
  for (const l in n)
    !e.has(l) && l[0] !== "$" && (t[l] = n[l]);
  return t;
}
function an(n) {
  const e = {};
  for (const t in n)
    e[t] = !0;
  return e;
}
function tn(n, e, t) {
  return n.set(t), e;
}
function ee(n) {
  return n && pe(n.destroy) ? n.destroy : K;
}
const Oi = typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : (
  // @ts-ignore Node typings have this
  global
);
function G(n, e) {
  n.appendChild(e);
}
function M(n, e, t) {
  n.insertBefore(e, t || null);
}
function D(n) {
  n.parentNode && n.parentNode.removeChild(n);
}
function ze(n, e) {
  for (let t = 0; t < n.length; t += 1)
    n[t] && n[t].d(e);
}
function F(n) {
  return document.createElement(n);
}
function ye(n) {
  return document.createElementNS("http://www.w3.org/2000/svg", n);
}
function le(n) {
  return document.createTextNode(n);
}
function U() {
  return le(" ");
}
function Ae() {
  return le("");
}
function Y(n, e, t, l) {
  return n.addEventListener(e, t, l), () => n.removeEventListener(e, t, l);
}
function v(n, e, t) {
  t == null ? n.removeAttribute(e) : n.getAttribute(e) !== t && n.setAttribute(e, t);
}
const Ni = ["width", "height"];
function ie(n, e) {
  const t = Object.getOwnPropertyDescriptors(n.__proto__);
  for (const l in e)
    e[l] == null ? n.removeAttribute(l) : l === "style" ? n.style.cssText = e[l] : l === "__value" ? n.value = n[l] = e[l] : t[l] && t[l].set && Ni.indexOf(l) === -1 ? n[l] = e[l] : v(n, l, e[l]);
}
function dn(n, e) {
  for (const t in e)
    v(n, t, e[t]);
}
function Vi(n, e) {
  Object.keys(e).forEach((t) => {
    zi(n, t, e[t]);
  });
}
function zi(n, e, t) {
  const l = e.toLowerCase();
  l in n ? n[l] = typeof n[l] == "boolean" && t === "" ? !0 : t : e in n ? n[e] = typeof n[e] == "boolean" && t === "" ? !0 : t : v(n, e, t);
}
function St(n) {
  return /-/.test(n) ? Vi : ie;
}
function ji(n) {
  return Array.from(n.childNodes);
}
function _e(n, e) {
  e = "" + e, n.data !== e && (n.data = /** @type {string} */
  e);
}
function gn(n, e) {
  n.value = e ?? "";
}
function Yt(n, e, t, l) {
  t == null ? n.style.removeProperty(e) : n.style.setProperty(e, t, "");
}
function qe(n, e, t) {
  n.classList.toggle(e, !!t);
}
function qi(n, e, { bubbles: t = !1, cancelable: l = !1 } = {}) {
  return new CustomEvent(n, { detail: e, bubbles: t, cancelable: l });
}
function Wt(n, e) {
  return new n(e);
}
let Rt;
function kt(n) {
  Rt = n;
}
function Ee() {
  if (!Rt)
    throw new Error("Function called outside component initialization");
  return Rt;
}
function Ne(n) {
  Ee().$$.on_mount.push(n);
}
function Lt(n) {
  Ee().$$.on_destroy.push(n);
}
function Xe() {
  const n = Ee();
  return (e, t, { cancelable: l = !1 } = {}) => {
    const i = n.$$.callbacks[e];
    if (i) {
      const r = qi(
        /** @type {string} */
        e,
        t,
        { cancelable: l }
      );
      return i.slice().forEach((s) => {
        s.call(n, r);
      }), !r.defaultPrevented;
    }
    return !0;
  };
}
function Me(n, e) {
  return Ee().$$.context.set(n, e), e;
}
function Ue(n) {
  return Ee().$$.context.get(n);
}
function Bt(n, e) {
  const t = n.$$.callbacks[e.type];
  t && t.slice().forEach((l) => l.call(this, e));
}
const ft = [], ne = [];
let gt = [];
const nn = [], zl = /* @__PURE__ */ Promise.resolve();
let ln = !1;
function jl() {
  ln || (ln = !0, zl.then(ql));
}
function Xi() {
  return jl(), zl;
}
function rn(n) {
  gt.push(n);
}
function xe(n) {
  nn.push(n);
}
const Jt = /* @__PURE__ */ new Set();
let ut = 0;
function ql() {
  if (ut !== 0)
    return;
  const n = Rt;
  do {
    try {
      for (; ut < ft.length; ) {
        const e = ft[ut];
        ut++, kt(e), Yi(e.$$);
      }
    } catch (e) {
      throw ft.length = 0, ut = 0, e;
    }
    for (kt(null), ft.length = 0, ut = 0; ne.length; )
      ne.pop()();
    for (let e = 0; e < gt.length; e += 1) {
      const t = gt[e];
      Jt.has(t) || (Jt.add(t), t());
    }
    gt.length = 0;
  } while (ft.length);
  for (; nn.length; )
    nn.pop()();
  ln = !1, Jt.clear(), kt(n);
}
function Yi(n) {
  if (n.fragment !== null) {
    n.update(), he(n.before_update);
    const e = n.dirty;
    n.dirty = [-1], n.fragment && n.fragment.p(n.ctx, e), n.after_update.forEach(rn);
  }
}
function Ji(n) {
  const e = [], t = [];
  gt.forEach((l) => n.indexOf(l) === -1 ? e.push(l) : t.push(l)), t.forEach((l) => l()), gt = e;
}
const Ft = /* @__PURE__ */ new Set();
let at;
function re() {
  at = {
    r: 0,
    c: [],
    p: at
    // parent group
  };
}
function se() {
  at.r || he(at.c), at = at.p;
}
function C(n, e) {
  n && n.i && (Ft.delete(n), n.i(e));
}
function w(n, e, t, l) {
  if (n && n.o) {
    if (Ft.has(n))
      return;
    Ft.add(n), at.c.push(() => {
      Ft.delete(n), l && (t && n.d(1), l());
    }), n.o(e);
  } else
    l && l();
}
function Ie(n) {
  return (n == null ? void 0 : n.length) !== void 0 ? n : Array.from(n);
}
function Qi(n, e) {
  w(n, 1, 1, () => {
    e.delete(n.key);
  });
}
function Ki(n, e, t, l, i, r, s, a, o, u, c, f) {
  let d = n.length, g = r.length, h = d;
  const p = {};
  for (; h--; )
    p[n[h].key] = h;
  const _ = [], I = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Map(), E = [];
  for (h = g; h--; ) {
    const m = f(i, r, h), R = t(m);
    let B = s.get(R);
    B ? E.push(() => B.p(m, e)) : (B = u(R, m), B.c()), I.set(R, _[h] = B), R in p && y.set(R, Math.abs(h - p[R]));
  }
  const b = /* @__PURE__ */ new Set(), Z = /* @__PURE__ */ new Set();
  function k(m) {
    C(m, 1), m.m(a, c), s.set(m.key, m), c = m.first, g--;
  }
  for (; d && g; ) {
    const m = _[g - 1], R = n[d - 1], B = m.key, H = R.key;
    m === R ? (c = m.first, d--, g--) : I.has(H) ? !s.has(B) || b.has(B) ? k(m) : Z.has(H) ? d-- : y.get(B) > y.get(H) ? (Z.add(B), k(m)) : (b.add(H), d--) : (o(R, s), d--);
  }
  for (; d--; ) {
    const m = n[d];
    I.has(m.key) || o(m, s);
  }
  for (; g; )
    k(_[g - 1]);
  return he(E), _;
}
function fe(n, e) {
  const t = {}, l = {}, i = { $$scope: 1 };
  let r = n.length;
  for (; r--; ) {
    const s = n[r], a = e[r];
    if (a) {
      for (const o in s)
        o in a || (l[o] = 1);
      for (const o in a)
        i[o] || (t[o] = a[o], i[o] = 1);
      n[r] = a;
    } else
      for (const o in s)
        i[o] = 1;
  }
  for (const s in l)
    s in t || (t[s] = void 0);
  return t;
}
function Re(n) {
  return typeof n == "object" && n !== null ? n : {};
}
function $e(n, e, t) {
  const l = n.$$.props[e];
  l !== void 0 && (n.$$.bound[l] = t, t(n.$$.ctx[l]));
}
function z(n) {
  n && n.c();
}
function N(n, e, t) {
  const { fragment: l, after_update: i } = n.$$;
  l && l.m(e, t), rn(() => {
    const r = n.$$.on_mount.map(Nl).filter(pe);
    n.$$.on_destroy ? n.$$.on_destroy.push(...r) : he(r), n.$$.on_mount = [];
  }), i.forEach(rn);
}
function V(n, e) {
  const t = n.$$;
  t.fragment !== null && (Ji(t.after_update), he(t.on_destroy), t.fragment && t.fragment.d(e), t.on_destroy = t.fragment = null, t.ctx = []);
}
function xi(n, e) {
  n.$$.dirty[0] === -1 && (ft.push(n), jl(), n.$$.dirty.fill(0)), n.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function x(n, e, t, l, i, r, s = null, a = [-1]) {
  const o = Rt;
  kt(n);
  const u = n.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: r,
    update: K,
    not_equal: i,
    bound: fn(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (o ? o.$$.context : [])),
    // everything else
    callbacks: fn(),
    dirty: a,
    skip_bound: !1,
    root: e.target || o.$$.root
  };
  s && s(u.root);
  let c = !1;
  if (u.ctx = t ? t(n, e.props || {}, (f, d, ...g) => {
    const h = g.length ? g[0] : d;
    return u.ctx && i(u.ctx[f], u.ctx[f] = h) && (!u.skip_bound && u.bound[f] && u.bound[f](h), c && xi(n, f)), d;
  }) : [], u.update(), c = !0, he(u.before_update), u.fragment = l ? l(u.ctx) : !1, e.target) {
    if (e.hydrate) {
      const f = ji(e.target);
      u.fragment && u.fragment.l(f), f.forEach(D);
    } else
      u.fragment && u.fragment.c();
    e.intro && C(n.$$.fragment), N(n, e.target, e.anchor), ql();
  }
  kt(o);
}
class $ {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    Xt(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    Xt(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    V(this, 1), this.$destroy = K;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, t) {
    if (!pe(t))
      return K;
    const l = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return l.push(t), () => {
      const i = l.indexOf(t);
      i !== -1 && l.splice(i, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(e) {
    this.$$set && !Bi(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const $i = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add($i);
const Xl = "archive-explorer", Yl = "0.0.1";
var sn = function(n, e) {
  return sn = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, l) {
    t.__proto__ = l;
  } || function(t, l) {
    for (var i in l)
      Object.prototype.hasOwnProperty.call(l, i) && (t[i] = l[i]);
  }, sn(n, e);
};
function _t(n, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  sn(n, e);
  function t() {
    this.constructor = n;
  }
  n.prototype = e === null ? Object.create(e) : (t.prototype = e.prototype, new t());
}
var We = function() {
  return We = Object.assign || function(e) {
    for (var t, l = 1, i = arguments.length; l < i; l++) {
      t = arguments[l];
      for (var r in t)
        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
    }
    return e;
  }, We.apply(this, arguments);
};
function Nt(n, e, t, l) {
  function i(r) {
    return r instanceof t ? r : new t(function(s) {
      s(r);
    });
  }
  return new (t || (t = Promise))(function(r, s) {
    function a(c) {
      try {
        u(l.next(c));
      } catch (f) {
        s(f);
      }
    }
    function o(c) {
      try {
        u(l.throw(c));
      } catch (f) {
        s(f);
      }
    }
    function u(c) {
      c.done ? r(c.value) : i(c.value).then(a, o);
    }
    u((l = l.apply(n, e || [])).next());
  });
}
function er(n, e) {
  var t = { label: 0, sent: function() {
    if (r[0] & 1)
      throw r[1];
    return r[1];
  }, trys: [], ops: [] }, l, i, r, s = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
  return s.next = a(0), s.throw = a(1), s.return = a(2), typeof Symbol == "function" && (s[Symbol.iterator] = function() {
    return this;
  }), s;
  function a(u) {
    return function(c) {
      return o([u, c]);
    };
  }
  function o(u) {
    if (l)
      throw new TypeError("Generator is already executing.");
    for (; s && (s = 0, u[0] && (t = 0)), t; )
      try {
        if (l = 1, i && (r = u[0] & 2 ? i.return : u[0] ? i.throw || ((r = i.return) && r.call(i), 0) : i.next) && !(r = r.call(i, u[1])).done)
          return r;
        switch (i = 0, r && (u = [u[0] & 2, r.value]), u[0]) {
          case 0:
          case 1:
            r = u;
            break;
          case 4:
            return t.label++, { value: u[1], done: !1 };
          case 5:
            t.label++, i = u[1], u = [0];
            continue;
          case 7:
            u = t.ops.pop(), t.trys.pop();
            continue;
          default:
            if (r = t.trys, !(r = r.length > 0 && r[r.length - 1]) && (u[0] === 6 || u[0] === 2)) {
              t = 0;
              continue;
            }
            if (u[0] === 3 && (!r || u[1] > r[0] && u[1] < r[3])) {
              t.label = u[1];
              break;
            }
            if (u[0] === 6 && t.label < r[1]) {
              t.label = r[1], r = u;
              break;
            }
            if (r && t.label < r[2]) {
              t.label = r[2], t.ops.push(u);
              break;
            }
            r[2] && t.ops.pop(), t.trys.pop();
            continue;
        }
        u = e.call(n, t);
      } catch (c) {
        u = [6, c], i = 0;
      } finally {
        l = r = 0;
      }
    if (u[0] & 5)
      throw u[1];
    return { value: u[0] ? u[1] : void 0, done: !0 };
  }
}
function et(n) {
  var e = typeof Symbol == "function" && Symbol.iterator, t = e && n[e], l = 0;
  if (t)
    return t.call(n);
  if (n && typeof n.length == "number")
    return {
      next: function() {
        return n && l >= n.length && (n = void 0), { value: n && n[l++], done: !n };
      }
    };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function te(n) {
  return Object.entries(n).filter(([e, t]) => e !== "" && t).map(([e]) => e).join(" ");
}
function Ce(n, e, t, l = { bubbles: !0 }, i = !1) {
  if (typeof Event > "u")
    throw new Error("Event not defined.");
  if (!n)
    throw new Error("Tried to dipatch event without element.");
  const r = new CustomEvent(e, Object.assign(Object.assign({}, l), { detail: t }));
  if (n == null || n.dispatchEvent(r), i && e.startsWith("SMUI")) {
    const s = new CustomEvent(e.replace(/^SMUI/g, () => "MDC"), Object.assign(Object.assign({}, l), { detail: t }));
    n == null || n.dispatchEvent(s), s.defaultPrevented && r.preventDefault();
  }
  return r;
}
function pt(n, e) {
  let t = Object.getOwnPropertyNames(n);
  const l = {};
  for (let i = 0; i < t.length; i++) {
    const r = t[i], s = r.indexOf("$");
    s !== -1 && e.indexOf(r.substring(0, s + 1)) !== -1 || e.indexOf(r) === -1 && (l[r] = n[r]);
  }
  return l;
}
const mn = /^[a-z]+(?::(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/, tr = /^[^$]+(?:\$(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/;
function Be(n) {
  let e, t = [];
  n.$on = (i, r) => {
    let s = i, a = () => {
    };
    return e ? a = e(s, r) : t.push([s, r]), s.match(mn) && console && console.warn('Event modifiers in SMUI now use "$" instead of ":", so that all events can be bound with modifiers. Please update your event binding: ', s), () => {
      a();
    };
  };
  function l(i) {
    const r = n.$$.callbacks[i.type];
    r && r.slice().forEach((s) => s.call(this, i));
  }
  return (i) => {
    const r = [], s = {};
    e = (a, o) => {
      let u = a, c = o, f = !1;
      const d = u.match(mn), g = u.match(tr), h = d || g;
      if (u.match(/^SMUI:\w+:/)) {
        const I = u.split(":");
        let y = "";
        for (let E = 0; E < I.length; E++)
          y += E === I.length - 1 ? ":" + I[E] : I[E].split("-").map((b) => b.slice(0, 1).toUpperCase() + b.slice(1)).join("");
        console.warn(`The event ${u.split("$")[0]} has been renamed to ${y.split("$")[0]}.`), u = y;
      }
      if (h) {
        const I = u.split(d ? ":" : "$");
        u = I[0];
        const y = I.slice(1).reduce((E, b) => (E[b] = !0, E), {});
        y.passive && (f = f || {}, f.passive = !0), y.nonpassive && (f = f || {}, f.passive = !1), y.capture && (f = f || {}, f.capture = !0), y.once && (f = f || {}, f.once = !0), y.preventDefault && (c = nr(c)), y.stopPropagation && (c = lr(c)), y.stopImmediatePropagation && (c = ir(c)), y.self && (c = rr(i, c)), y.trusted && (c = sr(c));
      }
      const p = hn(i, u, c, f), _ = () => {
        p();
        const I = r.indexOf(_);
        I > -1 && r.splice(I, 1);
      };
      return r.push(_), u in s || (s[u] = hn(i, u, l)), _;
    };
    for (let a = 0; a < t.length; a++)
      e(t[a][0], t[a][1]);
    return {
      destroy: () => {
        for (let a = 0; a < r.length; a++)
          r[a]();
        for (let a of Object.entries(s))
          a[1]();
      }
    };
  };
}
function hn(n, e, t, l) {
  return n.addEventListener(e, t, l), () => n.removeEventListener(e, t, l);
}
function nr(n) {
  return function(e) {
    return e.preventDefault(), n.call(this, e);
  };
}
function lr(n) {
  return function(e) {
    return e.stopPropagation(), n.call(this, e);
  };
}
function ir(n) {
  return function(e) {
    return e.stopImmediatePropagation(), n.call(this, e);
  };
}
function rr(n, e) {
  return function(t) {
    if (t.target === n)
      return e.call(this, t);
  };
}
function sr(n) {
  return function(e) {
    if (e.isTrusted)
      return n.call(this, e);
  };
}
function Ge(n, e) {
  let t = Object.getOwnPropertyNames(n);
  const l = {};
  for (let i = 0; i < t.length; i++) {
    const r = t[i];
    r.substring(0, e.length) === e && (l[r.substring(e.length)] = n[r]);
  }
  return l;
}
function Le(n, e) {
  let t = [];
  if (e)
    for (let l = 0; l < e.length; l++) {
      const i = e[l], r = Array.isArray(i) ? i[0] : i;
      Array.isArray(i) && i.length > 1 ? t.push(r(n, i[1])) : t.push(r(n));
    }
  return {
    update(l) {
      if ((l && l.length || 0) != t.length)
        throw new Error("You must not change the length of an actions array.");
      if (l)
        for (let i = 0; i < l.length; i++) {
          const r = t[i];
          if (r && r.update) {
            const s = l[i];
            Array.isArray(s) && s.length > 1 ? r.update(s[1]) : r.update();
          }
        }
    },
    destroy() {
      for (let l = 0; l < t.length; l++) {
        const i = t[l];
        i && i.destroy && i.destroy();
      }
    }
  };
}
var Pt;
function ar(n, e) {
  e === void 0 && (e = !1);
  var t = n.CSS, l = Pt;
  if (typeof Pt == "boolean" && !e)
    return Pt;
  var i = t && typeof t.supports == "function";
  if (!i)
    return !1;
  var r = t.supports("--css-vars", "yes"), s = t.supports("(--css-vars: yes)") && t.supports("color", "#00000000");
  return l = r || s, e || (Pt = l), l;
}
function or(n, e, t) {
  if (!n)
    return { x: 0, y: 0 };
  var l = e.x, i = e.y, r = l + t.left, s = i + t.top, a, o;
  if (n.type === "touchstart") {
    var u = n;
    a = u.changedTouches[0].pageX - r, o = u.changedTouches[0].pageY - s;
  } else {
    var c = n;
    a = c.pageX - r, o = c.pageY - s;
  }
  return { x: a, y: o };
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
var vt = (
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
function ur(n) {
  return n === void 0 && (n = window), cr(n) ? { passive: !0 } : !1;
}
function cr(n) {
  n === void 0 && (n = window);
  var e = !1;
  try {
    var t = {
      // This function will be called when the browser
      // attempts to access the passive property.
      get passive() {
        return e = !0, !1;
      }
    }, l = function() {
    };
    n.document.addEventListener("test", l, t), n.document.removeEventListener("test", l, t);
  } catch {
    e = !1;
  }
  return e;
}
const Jl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  applyPassive: ur
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
function fr(n, e) {
  if (n.closest)
    return n.closest(e);
  for (var t = n; t; ) {
    if (Ql(t, e))
      return t;
    t = t.parentElement;
  }
  return null;
}
function Ql(n, e) {
  var t = n.matches || n.webkitMatchesSelector || n.msMatchesSelector;
  return t.call(n, e);
}
function dr(n) {
  var e = n;
  if (e.offsetParent !== null)
    return e.scrollWidth;
  var t = e.cloneNode(!0);
  t.style.setProperty("position", "absolute"), t.style.setProperty("transform", "translate(-9999px, -9999px)"), document.documentElement.appendChild(t);
  var l = t.scrollWidth;
  return document.documentElement.removeChild(t), l;
}
const Kl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  closest: fr,
  estimateScrollWidth: dr,
  matches: Ql
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
var gr = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  BG_FOCUSED: "mdc-ripple-upgraded--background-focused",
  FG_ACTIVATION: "mdc-ripple-upgraded--foreground-activation",
  FG_DEACTIVATION: "mdc-ripple-upgraded--foreground-deactivation",
  ROOT: "mdc-ripple-upgraded",
  UNBOUNDED: "mdc-ripple-upgraded--unbounded"
}, mr = {
  VAR_FG_SCALE: "--mdc-ripple-fg-scale",
  VAR_FG_SIZE: "--mdc-ripple-fg-size",
  VAR_FG_TRANSLATE_END: "--mdc-ripple-fg-translate-end",
  VAR_FG_TRANSLATE_START: "--mdc-ripple-fg-translate-start",
  VAR_LEFT: "--mdc-ripple-left",
  VAR_TOP: "--mdc-ripple-top"
}, pn = {
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
var bn = [
  "touchstart",
  "pointerdown",
  "mousedown",
  "keydown"
], _n = [
  "touchend",
  "pointerup",
  "mouseup",
  "contextmenu"
], Tt = [], hr = (
  /** @class */
  function(n) {
    _t(e, n);
    function e(t) {
      var l = n.call(this, We(We({}, e.defaultAdapter), t)) || this;
      return l.activationAnimationHasEnded = !1, l.activationTimer = 0, l.fgDeactivationRemovalTimer = 0, l.fgScale = "0", l.frame = { width: 0, height: 0 }, l.initialSize = 0, l.layoutFrame = 0, l.maxRadius = 0, l.unboundedCoords = { left: 0, top: 0 }, l.activationState = l.defaultActivationState(), l.activationTimerCallback = function() {
        l.activationAnimationHasEnded = !0, l.runDeactivationUXLogicIfReady();
      }, l.activateHandler = function(i) {
        l.activateImpl(i);
      }, l.deactivateHandler = function() {
        l.deactivateImpl();
      }, l.focusHandler = function() {
        l.handleFocus();
      }, l.blurHandler = function() {
        l.handleBlur();
      }, l.resizeHandler = function() {
        l.layout();
      }, l;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return gr;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return mr;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return pn;
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
      var t = this, l = this.supportsPressRipple();
      if (this.registerRootHandlers(l), l) {
        var i = e.cssClasses, r = i.ROOT, s = i.UNBOUNDED;
        requestAnimationFrame(function() {
          t.adapter.addClass(r), t.adapter.isUnbounded() && (t.adapter.addClass(s), t.layoutInternal());
        });
      }
    }, e.prototype.destroy = function() {
      var t = this;
      if (this.supportsPressRipple()) {
        this.activationTimer && (clearTimeout(this.activationTimer), this.activationTimer = 0, this.adapter.removeClass(e.cssClasses.FG_ACTIVATION)), this.fgDeactivationRemovalTimer && (clearTimeout(this.fgDeactivationRemovalTimer), this.fgDeactivationRemovalTimer = 0, this.adapter.removeClass(e.cssClasses.FG_DEACTIVATION));
        var l = e.cssClasses, i = l.ROOT, r = l.UNBOUNDED;
        requestAnimationFrame(function() {
          t.adapter.removeClass(i), t.adapter.removeClass(r), t.removeCssVars();
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
      var l = e.cssClasses.UNBOUNDED;
      t ? this.adapter.addClass(l) : this.adapter.removeClass(l);
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
      var l, i;
      if (t) {
        try {
          for (var r = et(bn), s = r.next(); !s.done; s = r.next()) {
            var a = s.value;
            this.adapter.registerInteractionHandler(a, this.activateHandler);
          }
        } catch (o) {
          l = { error: o };
        } finally {
          try {
            s && !s.done && (i = r.return) && i.call(r);
          } finally {
            if (l)
              throw l.error;
          }
        }
        this.adapter.isUnbounded() && this.adapter.registerResizeHandler(this.resizeHandler);
      }
      this.adapter.registerInteractionHandler("focus", this.focusHandler), this.adapter.registerInteractionHandler("blur", this.blurHandler);
    }, e.prototype.registerDeactivationHandlers = function(t) {
      var l, i;
      if (t.type === "keydown")
        this.adapter.registerInteractionHandler("keyup", this.deactivateHandler);
      else
        try {
          for (var r = et(_n), s = r.next(); !s.done; s = r.next()) {
            var a = s.value;
            this.adapter.registerDocumentInteractionHandler(a, this.deactivateHandler);
          }
        } catch (o) {
          l = { error: o };
        } finally {
          try {
            s && !s.done && (i = r.return) && i.call(r);
          } finally {
            if (l)
              throw l.error;
          }
        }
    }, e.prototype.deregisterRootHandlers = function() {
      var t, l;
      try {
        for (var i = et(bn), r = i.next(); !r.done; r = i.next()) {
          var s = r.value;
          this.adapter.deregisterInteractionHandler(s, this.activateHandler);
        }
      } catch (a) {
        t = { error: a };
      } finally {
        try {
          r && !r.done && (l = i.return) && l.call(i);
        } finally {
          if (t)
            throw t.error;
        }
      }
      this.adapter.deregisterInteractionHandler("focus", this.focusHandler), this.adapter.deregisterInteractionHandler("blur", this.blurHandler), this.adapter.isUnbounded() && this.adapter.deregisterResizeHandler(this.resizeHandler);
    }, e.prototype.deregisterDeactivationHandlers = function() {
      var t, l;
      this.adapter.deregisterInteractionHandler("keyup", this.deactivateHandler);
      try {
        for (var i = et(_n), r = i.next(); !r.done; r = i.next()) {
          var s = r.value;
          this.adapter.deregisterDocumentInteractionHandler(s, this.deactivateHandler);
        }
      } catch (a) {
        t = { error: a };
      } finally {
        try {
          r && !r.done && (l = i.return) && l.call(i);
        } finally {
          if (t)
            throw t.error;
        }
      }
    }, e.prototype.removeCssVars = function() {
      var t = this, l = e.strings, i = Object.keys(l);
      i.forEach(function(r) {
        r.indexOf("VAR_") === 0 && t.adapter.updateCssVariable(l[r], null);
      });
    }, e.prototype.activateImpl = function(t) {
      var l = this;
      if (!this.adapter.isSurfaceDisabled()) {
        var i = this.activationState;
        if (!i.isActivated) {
          var r = this.previousActivationEvent, s = r && t !== void 0 && r.type !== t.type;
          if (!s) {
            i.isActivated = !0, i.isProgrammatic = t === void 0, i.activationEvent = t, i.wasActivatedByPointer = i.isProgrammatic ? !1 : t !== void 0 && (t.type === "mousedown" || t.type === "touchstart" || t.type === "pointerdown");
            var a = t !== void 0 && Tt.length > 0 && Tt.some(function(o) {
              return l.adapter.containsEventTarget(o);
            });
            if (a) {
              this.resetActivationState();
              return;
            }
            t !== void 0 && (Tt.push(t.target), this.registerDeactivationHandlers(t)), i.wasElementMadeActive = this.checkElementMadeActive(t), i.wasElementMadeActive && this.animateActivation(), requestAnimationFrame(function() {
              Tt = [], !i.wasElementMadeActive && t !== void 0 && (t.key === " " || t.keyCode === 32) && (i.wasElementMadeActive = l.checkElementMadeActive(t), i.wasElementMadeActive && l.animateActivation()), i.wasElementMadeActive || (l.activationState = l.defaultActivationState());
            });
          }
        }
      }
    }, e.prototype.checkElementMadeActive = function(t) {
      return t !== void 0 && t.type === "keydown" ? this.adapter.isSurfaceActive() : !0;
    }, e.prototype.animateActivation = function() {
      var t = this, l = e.strings, i = l.VAR_FG_TRANSLATE_START, r = l.VAR_FG_TRANSLATE_END, s = e.cssClasses, a = s.FG_DEACTIVATION, o = s.FG_ACTIVATION, u = e.numbers.DEACTIVATION_TIMEOUT_MS;
      this.layoutInternal();
      var c = "", f = "";
      if (!this.adapter.isUnbounded()) {
        var d = this.getFgTranslationCoordinates(), g = d.startPoint, h = d.endPoint;
        c = g.x + "px, " + g.y + "px", f = h.x + "px, " + h.y + "px";
      }
      this.adapter.updateCssVariable(i, c), this.adapter.updateCssVariable(r, f), clearTimeout(this.activationTimer), clearTimeout(this.fgDeactivationRemovalTimer), this.rmBoundedActivationClasses(), this.adapter.removeClass(a), this.adapter.computeBoundingRect(), this.adapter.addClass(o), this.activationTimer = setTimeout(function() {
        t.activationTimerCallback();
      }, u);
    }, e.prototype.getFgTranslationCoordinates = function() {
      var t = this.activationState, l = t.activationEvent, i = t.wasActivatedByPointer, r;
      i ? r = or(l, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect()) : r = {
        x: this.frame.width / 2,
        y: this.frame.height / 2
      }, r = {
        x: r.x - this.initialSize / 2,
        y: r.y - this.initialSize / 2
      };
      var s = {
        x: this.frame.width / 2 - this.initialSize / 2,
        y: this.frame.height / 2 - this.initialSize / 2
      };
      return { startPoint: r, endPoint: s };
    }, e.prototype.runDeactivationUXLogicIfReady = function() {
      var t = this, l = e.cssClasses.FG_DEACTIVATION, i = this.activationState, r = i.hasDeactivationUXRun, s = i.isActivated, a = r || !s;
      a && this.activationAnimationHasEnded && (this.rmBoundedActivationClasses(), this.adapter.addClass(l), this.fgDeactivationRemovalTimer = setTimeout(function() {
        t.adapter.removeClass(l);
      }, pn.FG_DEACTIVATION_MS));
    }, e.prototype.rmBoundedActivationClasses = function() {
      var t = e.cssClasses.FG_ACTIVATION;
      this.adapter.removeClass(t), this.activationAnimationHasEnded = !1, this.adapter.computeBoundingRect();
    }, e.prototype.resetActivationState = function() {
      var t = this;
      this.previousActivationEvent = this.activationState.activationEvent, this.activationState = this.defaultActivationState(), setTimeout(function() {
        return t.previousActivationEvent = void 0;
      }, e.numbers.TAP_DELAY_MS);
    }, e.prototype.deactivateImpl = function() {
      var t = this, l = this.activationState;
      if (l.isActivated) {
        var i = We({}, l);
        l.isProgrammatic ? (requestAnimationFrame(function() {
          t.animateDeactivation(i);
        }), this.resetActivationState()) : (this.deregisterDeactivationHandlers(), requestAnimationFrame(function() {
          t.activationState.hasDeactivationUXRun = !0, t.animateDeactivation(i), t.resetActivationState();
        }));
      }
    }, e.prototype.animateDeactivation = function(t) {
      var l = t.wasActivatedByPointer, i = t.wasElementMadeActive;
      (l || i) && this.runDeactivationUXLogicIfReady();
    }, e.prototype.layoutInternal = function() {
      var t = this;
      this.frame = this.adapter.computeBoundingRect();
      var l = Math.max(this.frame.height, this.frame.width), i = function() {
        var s = Math.sqrt(Math.pow(t.frame.width, 2) + Math.pow(t.frame.height, 2));
        return s + e.numbers.PADDING;
      };
      this.maxRadius = this.adapter.isUnbounded() ? l : i();
      var r = Math.floor(l * e.numbers.INITIAL_ORIGIN_SCALE);
      this.adapter.isUnbounded() && r % 2 !== 0 ? this.initialSize = r - 1 : this.initialSize = r, this.fgScale = "" + this.maxRadius / this.initialSize, this.updateLayoutCssVars();
    }, e.prototype.updateLayoutCssVars = function() {
      var t = e.strings, l = t.VAR_FG_SIZE, i = t.VAR_LEFT, r = t.VAR_TOP, s = t.VAR_FG_SCALE;
      this.adapter.updateCssVariable(l, this.initialSize + "px"), this.adapter.updateCssVariable(s, this.fgScale), this.adapter.isUnbounded() && (this.unboundedCoords = {
        left: Math.round(this.frame.width / 2 - this.initialSize / 2),
        top: Math.round(this.frame.height / 2 - this.initialSize / 2)
      }, this.adapter.updateCssVariable(i, this.unboundedCoords.left + "px"), this.adapter.updateCssVariable(r, this.unboundedCoords.top + "px"));
    }, e;
  }(vt)
);
const { applyPassive: Zt } = Jl, { matches: pr } = Kl;
function wt(n, { ripple: e = !0, surface: t = !1, unbounded: l = !1, disabled: i = !1, color: r, active: s, rippleElement: a, eventTarget: o, activeTarget: u, addClass: c = (h) => n.classList.add(h), removeClass: f = (h) => n.classList.remove(h), addStyle: d = (h, p) => n.style.setProperty(h, p), initPromise: g = Promise.resolve() } = {}) {
  let h, p = Ue("SMUI:addLayoutListener"), _, I = s, y = o, E = u;
  function b() {
    t ? (c("mdc-ripple-surface"), r === "primary" ? (c("smui-ripple-surface--primary"), f("smui-ripple-surface--secondary")) : r === "secondary" ? (f("smui-ripple-surface--primary"), c("smui-ripple-surface--secondary")) : (f("smui-ripple-surface--primary"), f("smui-ripple-surface--secondary"))) : (f("mdc-ripple-surface"), f("smui-ripple-surface--primary"), f("smui-ripple-surface--secondary")), h && I !== s && (I = s, s ? h.activate() : s === !1 && h.deactivate()), e && !h ? (h = new hr({
      addClass: c,
      browserSupportsCssVars: () => ar(window),
      computeBoundingRect: () => (a || n).getBoundingClientRect(),
      containsEventTarget: (k) => n.contains(k),
      deregisterDocumentInteractionHandler: (k, m) => document.documentElement.removeEventListener(k, m, Zt()),
      deregisterInteractionHandler: (k, m) => (o || n).removeEventListener(k, m, Zt()),
      deregisterResizeHandler: (k) => window.removeEventListener("resize", k),
      getWindowPageOffset: () => ({
        x: window.pageXOffset,
        y: window.pageYOffset
      }),
      isSurfaceActive: () => s ?? pr(u || n, ":active"),
      isSurfaceDisabled: () => !!i,
      isUnbounded: () => !!l,
      registerDocumentInteractionHandler: (k, m) => document.documentElement.addEventListener(k, m, Zt()),
      registerInteractionHandler: (k, m) => (o || n).addEventListener(k, m, Zt()),
      registerResizeHandler: (k) => window.addEventListener("resize", k),
      removeClass: f,
      updateCssVariable: d
    }), g.then(() => {
      h && (h.init(), h.setUnbounded(l));
    })) : h && !e && g.then(() => {
      h && (h.destroy(), h = void 0);
    }), h && (y !== o || E !== u) && (y = o, E = u, h.destroy(), requestAnimationFrame(() => {
      h && (h.init(), h.setUnbounded(l));
    })), !e && l && c("mdc-ripple-upgraded--unbounded");
  }
  b(), p && (_ = p(Z));
  function Z() {
    h && h.layout();
  }
  return {
    update(k) {
      ({
        ripple: e,
        surface: t,
        unbounded: l,
        disabled: i,
        color: r,
        active: s,
        rippleElement: a,
        eventTarget: o,
        activeTarget: u,
        addClass: c,
        removeClass: f,
        addStyle: d,
        initPromise: g
      } = Object.assign({ ripple: !0, surface: !1, unbounded: !1, disabled: !1, color: void 0, active: void 0, rippleElement: void 0, eventTarget: void 0, activeTarget: void 0, addClass: (m) => n.classList.add(m), removeClass: (m) => n.classList.remove(m), addStyle: (m, R) => n.style.setProperty(m, R), initPromise: Promise.resolve() }, k)), b();
    },
    destroy() {
      h && (h.destroy(), h = void 0, f("mdc-ripple-surface"), f("smui-ripple-surface--primary"), f("smui-ripple-surface--secondary")), _ && _();
    }
  };
}
function br(n) {
  let e = (
    /*tag*/
    n[1]
  ), t, l, i = (
    /*tag*/
    n[1] && Qt(n)
  );
  return {
    c() {
      i && i.c(), t = Ae();
    },
    m(r, s) {
      i && i.m(r, s), M(r, t, s), l = !0;
    },
    p(r, s) {
      /*tag*/
      r[1] ? e ? Q(
        e,
        /*tag*/
        r[1]
      ) ? (i.d(1), i = Qt(r), e = /*tag*/
      r[1], i.c(), i.m(t.parentNode, t)) : i.p(r, s) : (i = Qt(r), e = /*tag*/
      r[1], i.c(), i.m(t.parentNode, t)) : e && (i.d(1), i = null, e = /*tag*/
      r[1]);
    },
    i(r) {
      l || (C(i, r), l = !0);
    },
    o(r) {
      w(i, r), l = !1;
    },
    d(r) {
      r && D(t), i && i.d(r);
    }
  };
}
function _r(n) {
  let e = (
    /*tag*/
    n[1]
  ), t, l = (
    /*tag*/
    n[1] && Kt(n)
  );
  return {
    c() {
      l && l.c(), t = Ae();
    },
    m(i, r) {
      l && l.m(i, r), M(i, t, r);
    },
    p(i, r) {
      /*tag*/
      i[1] ? e ? Q(
        e,
        /*tag*/
        i[1]
      ) ? (l.d(1), l = Kt(i), e = /*tag*/
      i[1], l.c(), l.m(t.parentNode, t)) : l.p(i, r) : (l = Kt(i), e = /*tag*/
      i[1], l.c(), l.m(t.parentNode, t)) : e && (l.d(1), l = null, e = /*tag*/
      i[1]);
    },
    i: K,
    o: K,
    d(i) {
      i && D(t), l && l.d(i);
    }
  };
}
function vr(n) {
  let e, t, l, i, r;
  const s = (
    /*#slots*/
    n[8].default
  ), a = ae(
    s,
    n,
    /*$$scope*/
    n[7],
    null
  );
  let o = [
    /*$$restProps*/
    n[5]
  ], u = {};
  for (let c = 0; c < o.length; c += 1)
    u = q(u, o[c]);
  return {
    c() {
      e = ye("svg"), a && a.c(), dn(e, u);
    },
    m(c, f) {
      M(c, e, f), a && a.m(e, null), n[9](e), l = !0, i || (r = [
        ee(t = Le.call(
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
    p(c, f) {
      a && a.p && (!l || f & /*$$scope*/
      128) && ue(
        a,
        s,
        c,
        /*$$scope*/
        c[7],
        l ? oe(
          s,
          /*$$scope*/
          c[7],
          f,
          null
        ) : ce(
          /*$$scope*/
          c[7]
        ),
        null
      ), dn(e, u = fe(o, [f & /*$$restProps*/
      32 && /*$$restProps*/
      c[5]])), t && pe(t.update) && f & /*use*/
      1 && t.update.call(
        null,
        /*use*/
        c[0]
      );
    },
    i(c) {
      l || (C(a, c), l = !0);
    },
    o(c) {
      w(a, c), l = !1;
    },
    d(c) {
      c && D(e), a && a.d(c), n[9](null), i = !1, he(r);
    }
  };
}
function Qt(n) {
  let e, t, l, i, r;
  const s = (
    /*#slots*/
    n[8].default
  ), a = ae(
    s,
    n,
    /*$$scope*/
    n[7],
    null
  );
  let o = [
    /*$$restProps*/
    n[5]
  ], u = {};
  for (let c = 0; c < o.length; c += 1)
    u = q(u, o[c]);
  return {
    c() {
      e = F(
        /*tag*/
        n[1]
      ), a && a.c(), St(
        /*tag*/
        n[1]
      )(e, u);
    },
    m(c, f) {
      M(c, e, f), a && a.m(e, null), n[11](e), l = !0, i || (r = [
        ee(t = Le.call(
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
    p(c, f) {
      a && a.p && (!l || f & /*$$scope*/
      128) && ue(
        a,
        s,
        c,
        /*$$scope*/
        c[7],
        l ? oe(
          s,
          /*$$scope*/
          c[7],
          f,
          null
        ) : ce(
          /*$$scope*/
          c[7]
        ),
        null
      ), St(
        /*tag*/
        c[1]
      )(e, u = fe(o, [f & /*$$restProps*/
      32 && /*$$restProps*/
      c[5]])), t && pe(t.update) && f & /*use*/
      1 && t.update.call(
        null,
        /*use*/
        c[0]
      );
    },
    i(c) {
      l || (C(a, c), l = !0);
    },
    o(c) {
      w(a, c), l = !1;
    },
    d(c) {
      c && D(e), a && a.d(c), n[11](null), i = !1, he(r);
    }
  };
}
function Kt(n) {
  let e, t, l, i, r = [
    /*$$restProps*/
    n[5]
  ], s = {};
  for (let a = 0; a < r.length; a += 1)
    s = q(s, r[a]);
  return {
    c() {
      e = F(
        /*tag*/
        n[1]
      ), St(
        /*tag*/
        n[1]
      )(e, s);
    },
    m(a, o) {
      M(a, e, o), n[10](e), l || (i = [
        ee(t = Le.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        ee(
          /*forwardEvents*/
          n[4].call(null, e)
        )
      ], l = !0);
    },
    p(a, o) {
      St(
        /*tag*/
        a[1]
      )(e, s = fe(r, [o & /*$$restProps*/
      32 && /*$$restProps*/
      a[5]])), t && pe(t.update) && o & /*use*/
      1 && t.update.call(
        null,
        /*use*/
        a[0]
      );
    },
    d(a) {
      a && D(e), n[10](null), l = !1, he(i);
    }
  };
}
function Cr(n) {
  let e, t, l, i;
  const r = [vr, _r, br], s = [];
  function a(o, u) {
    return (
      /*tag*/
      o[1] === "svg" ? 0 : (
        /*selfClosing*/
        o[3] ? 1 : 2
      )
    );
  }
  return e = a(n), t = s[e] = r[e](n), {
    c() {
      t.c(), l = Ae();
    },
    m(o, u) {
      s[e].m(o, u), M(o, l, u), i = !0;
    },
    p(o, [u]) {
      let c = e;
      e = a(o), e === c ? s[e].p(o, u) : (re(), w(s[c], 1, 1, () => {
        s[c] = null;
      }), se(), t = s[e], t ? t.p(o, u) : (t = s[e] = r[e](o), t.c()), C(t, 1), t.m(l.parentNode, l));
    },
    i(o) {
      i || (C(t), i = !0);
    },
    o(o) {
      w(t), i = !1;
    },
    d(o) {
      o && D(l), s[e].d(o);
    }
  };
}
function Ir(n, e, t) {
  let l;
  const i = ["use", "tag", "getElement"];
  let r = ge(e, i), { $$slots: s = {}, $$scope: a } = e, { use: o = [] } = e, { tag: u } = e;
  const c = Be(Ee());
  let f;
  function d() {
    return f;
  }
  function g(_) {
    ne[_ ? "unshift" : "push"](() => {
      f = _, t(2, f);
    });
  }
  function h(_) {
    ne[_ ? "unshift" : "push"](() => {
      f = _, t(2, f);
    });
  }
  function p(_) {
    ne[_ ? "unshift" : "push"](() => {
      f = _, t(2, f);
    });
  }
  return n.$$set = (_) => {
    e = q(q({}, e), Fe(_)), t(5, r = ge(e, i)), "use" in _ && t(0, o = _.use), "tag" in _ && t(1, u = _.tag), "$$scope" in _ && t(7, a = _.$$scope);
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
    ].indexOf(u) > -1);
  }, [
    o,
    u,
    f,
    l,
    c,
    r,
    d,
    a,
    s,
    g,
    h,
    p
  ];
}
class Ut extends $ {
  constructor(e) {
    super(), x(this, e, Ir, Cr, Q, { use: 0, tag: 1, getElement: 6 });
  }
  get getElement() {
    return this.$$.ctx[6];
  }
}
const ct = [];
function mt(n, e = K) {
  let t;
  const l = /* @__PURE__ */ new Set();
  function i(a) {
    if (Q(n, a) && (n = a, t)) {
      const o = !ct.length;
      for (const u of l)
        u[1](), ct.push(u, n);
      if (o) {
        for (let u = 0; u < ct.length; u += 2)
          ct[u][0](ct[u + 1]);
        ct.length = 0;
      }
    }
  }
  function r(a) {
    i(a(n));
  }
  function s(a, o = K) {
    const u = [a, o];
    return l.add(u), l.size === 1 && (t = e(i, r) || K), a(n), () => {
      l.delete(u), l.size === 0 && t && (t(), t = null);
    };
  }
  return { set: i, update: r, subscribe: s };
}
function yr(n) {
  let e;
  const t = (
    /*#slots*/
    n[4].default
  ), l = ae(
    t,
    n,
    /*$$scope*/
    n[3],
    null
  );
  return {
    c() {
      l && l.c();
    },
    m(i, r) {
      l && l.m(i, r), e = !0;
    },
    p(i, [r]) {
      l && l.p && (!e || r & /*$$scope*/
      8) && ue(
        l,
        t,
        i,
        /*$$scope*/
        i[3],
        e ? oe(
          t,
          /*$$scope*/
          i[3],
          r,
          null
        ) : ce(
          /*$$scope*/
          i[3]
        ),
        null
      );
    },
    i(i) {
      e || (C(l, i), e = !0);
    },
    o(i) {
      w(l, i), e = !1;
    },
    d(i) {
      l && l.d(i);
    }
  };
}
function Ar(n, e, t) {
  let l, { $$slots: i = {}, $$scope: r } = e, { key: s } = e, { value: a } = e;
  const o = mt(a);
  return dt(n, o, (u) => t(5, l = u)), Me(s, o), Lt(() => {
    o.set(void 0);
  }), n.$$set = (u) => {
    "key" in u && t(1, s = u.key), "value" in u && t(2, a = u.value), "$$scope" in u && t(3, r = u.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty & /*value*/
    4 && tn(o, l = a, l);
  }, [o, s, a, r, i];
}
class Ot extends $ {
  constructor(e) {
    super(), x(this, e, Ar, yr, Q, { key: 1, value: 2 });
  }
}
function vn(n) {
  let e;
  return {
    c() {
      e = F("div"), v(e, "class", "mdc-button__touch");
    },
    m(t, l) {
      M(t, e, l);
    },
    d(t) {
      t && D(e);
    }
  };
}
function kr(n) {
  let e, t, l, i;
  const r = (
    /*#slots*/
    n[28].default
  ), s = ae(
    r,
    n,
    /*$$scope*/
    n[30],
    null
  );
  let a = (
    /*touch*/
    n[6] && vn()
  );
  return {
    c() {
      e = F("div"), t = U(), s && s.c(), a && a.c(), l = Ae(), v(e, "class", "mdc-button__ripple");
    },
    m(o, u) {
      M(o, e, u), M(o, t, u), s && s.m(o, u), a && a.m(o, u), M(o, l, u), i = !0;
    },
    p(o, u) {
      s && s.p && (!i || u[0] & /*$$scope*/
      1073741824) && ue(
        s,
        r,
        o,
        /*$$scope*/
        o[30],
        i ? oe(
          r,
          /*$$scope*/
          o[30],
          u,
          null
        ) : ce(
          /*$$scope*/
          o[30]
        ),
        null
      ), /*touch*/
      o[6] ? a || (a = vn(), a.c(), a.m(l.parentNode, l)) : a && (a.d(1), a = null);
    },
    i(o) {
      i || (C(s, o), i = !0);
    },
    o(o) {
      w(s, o), i = !1;
    },
    d(o) {
      o && (D(e), D(t), D(l)), s && s.d(o), a && a.d(o);
    }
  };
}
function wr(n) {
  let e, t, l;
  const i = [
    { tag: (
      /*tag*/
      n[10]
    ) },
    {
      use: [
        [
          wt,
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
      class: te({
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
      ).map(xt).concat([
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
  var r = (
    /*component*/
    n[9]
  );
  function s(a, o) {
    let u = {
      $$slots: { default: [kr] },
      $$scope: { ctx: a }
    };
    for (let c = 0; c < i.length; c += 1)
      u = q(u, i[c]);
    return o !== void 0 && o[0] & /*tag, ripple, color, $$restProps, addClass, removeClass, addStyle, forwardEvents, use, className, variant, touch, context, secondary, internalClasses, internalStyles, style, actionProp, defaultProp, secondaryProp, href*/
    12580351 && (u = q(u, fe(i, [
      o[0] & /*tag*/
      1024 && { tag: (
        /*tag*/
        a[10]
      ) },
      o[0] & /*ripple, color, $$restProps, addClass, removeClass, addStyle, forwardEvents, use*/
      12189721 && {
        use: [
          [
            wt,
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
      o[0] & /*className, variant, color, touch, context, secondary, internalClasses*/
      266610 && {
        class: te({
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
      o[0] & /*internalStyles, style*/
      8196 && {
        style: Object.entries(
          /*internalStyles*/
          a[13]
        ).map(xt).concat([
          /*style*/
          a[2]
        ]).join(" ")
      },
      o[0] & /*actionProp*/
      65536 && Re(
        /*actionProp*/
        a[16]
      ),
      o[0] & /*defaultProp*/
      32768 && Re(
        /*defaultProp*/
        a[15]
      ),
      o[0] & /*secondaryProp*/
      16384 && Re(
        /*secondaryProp*/
        a[14]
      ),
      o[0] & /*href*/
      128 && { href: (
        /*href*/
        a[7]
      ) },
      o[0] & /*$$restProps*/
      8388608 && Re(
        /*$$restProps*/
        a[23]
      )
    ]))), { props: u };
  }
  return r && (e = Wt(r, s(n)), n[29](e), e.$on(
    "click",
    /*handleClick*/
    n[22]
  )), {
    c() {
      e && z(e.$$.fragment), t = Ae();
    },
    m(a, o) {
      e && N(e, a, o), M(a, t, o), l = !0;
    },
    p(a, o) {
      if (o[0] & /*component*/
      512 && r !== (r = /*component*/
      a[9])) {
        if (e) {
          re();
          const u = e;
          w(u.$$.fragment, 1, 0, () => {
            V(u, 1);
          }), se();
        }
        r ? (e = Wt(r, s(a, o)), a[29](e), e.$on(
          "click",
          /*handleClick*/
          a[22]
        ), z(e.$$.fragment), C(e.$$.fragment, 1), N(e, t.parentNode, t)) : e = null;
      } else if (r) {
        const u = o[0] & /*tag, ripple, color, $$restProps, addClass, removeClass, addStyle, forwardEvents, use, className, variant, touch, context, secondary, internalClasses, internalStyles, style, actionProp, defaultProp, secondaryProp, href*/
        12580351 ? fe(i, [
          o[0] & /*tag*/
          1024 && { tag: (
            /*tag*/
            a[10]
          ) },
          o[0] & /*ripple, color, $$restProps, addClass, removeClass, addStyle, forwardEvents, use*/
          12189721 && {
            use: [
              [
                wt,
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
          o[0] & /*className, variant, color, touch, context, secondary, internalClasses*/
          266610 && {
            class: te({
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
          o[0] & /*internalStyles, style*/
          8196 && {
            style: Object.entries(
              /*internalStyles*/
              a[13]
            ).map(xt).concat([
              /*style*/
              a[2]
            ]).join(" ")
          },
          o[0] & /*actionProp*/
          65536 && Re(
            /*actionProp*/
            a[16]
          ),
          o[0] & /*defaultProp*/
          32768 && Re(
            /*defaultProp*/
            a[15]
          ),
          o[0] & /*secondaryProp*/
          16384 && Re(
            /*secondaryProp*/
            a[14]
          ),
          o[0] & /*href*/
          128 && { href: (
            /*href*/
            a[7]
          ) },
          o[0] & /*$$restProps*/
          8388608 && Re(
            /*$$restProps*/
            a[23]
          )
        ]) : {};
        o[0] & /*$$scope, touch*/
        1073741888 && (u.$$scope = { dirty: o, ctx: a }), e.$set(u);
      }
    },
    i(a) {
      l || (e && C(e.$$.fragment, a), l = !0);
    },
    o(a) {
      e && w(e.$$.fragment, a), l = !1;
    },
    d(a) {
      a && D(t), n[29](null), e && V(e, a);
    }
  };
}
const xt = ([n, e]) => `${n}: ${e};`;
function Sr(n, e, t) {
  let l, i, r;
  const s = [
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
  let a = ge(e, s), { $$slots: o = {}, $$scope: u } = e;
  const c = Be(Ee());
  let { use: f = [] } = e, { class: d = "" } = e, { style: g = "" } = e, { ripple: h = !0 } = e, { color: p = "primary" } = e, { variant: _ = "text" } = e, { touch: I = !1 } = e, { href: y = void 0 } = e, { action: E = "close" } = e, { defaultAction: b = !1 } = e, { secondary: Z = !1 } = e, k, m = {}, R = {}, B = Ue("SMUI:button:context"), { component: H = Ut } = e, { tag: A = H === Ut ? y == null ? "button" : "a" : void 0 } = e, W = a.disabled;
  Me("SMUI:label:context", "button"), Me("SMUI:icon:context", "button");
  function P(S) {
    m[S] || t(12, m[S] = !0, m);
  }
  function X(S) {
    (!(S in m) || m[S]) && t(12, m[S] = !1, m);
  }
  function we(S, O) {
    R[S] != O && (O === "" || O == null ? (delete R[S], t(13, R)) : t(13, R[S] = O, R));
  }
  function ke() {
    B === "banner" && Ce(ve(), Z ? "SMUIBannerButton:secondaryActionClick" : "SMUIBannerButton:primaryActionClick");
  }
  function ve() {
    return k.getElement();
  }
  function j(S) {
    ne[S ? "unshift" : "push"](() => {
      k = S, t(11, k);
    });
  }
  return n.$$set = (S) => {
    t(31, e = q(q({}, e), Fe(S))), t(23, a = ge(e, s)), "use" in S && t(0, f = S.use), "class" in S && t(1, d = S.class), "style" in S && t(2, g = S.style), "ripple" in S && t(3, h = S.ripple), "color" in S && t(4, p = S.color), "variant" in S && t(5, _ = S.variant), "touch" in S && t(6, I = S.touch), "href" in S && t(7, y = S.href), "action" in S && t(24, E = S.action), "defaultAction" in S && t(25, b = S.defaultAction), "secondary" in S && t(8, Z = S.secondary), "component" in S && t(9, H = S.component), "tag" in S && t(10, A = S.tag), "$$scope" in S && t(30, u = S.$$scope);
  }, n.$$.update = () => {
    if (t(16, l = B === "dialog:action" && E != null ? { "data-mdc-dialog-action": E } : { action: e.action }), t(15, i = B === "dialog:action" && b ? { "data-mdc-dialog-button-default": "" } : { default: e.default }), t(14, r = B === "banner" ? {} : { secondary: e.secondary }), W !== a.disabled) {
      if (k) {
        const S = ve();
        "blur" in S && S.blur();
      }
      t(27, W = a.disabled);
    }
  }, e = Fe(e), [
    f,
    d,
    g,
    h,
    p,
    _,
    I,
    y,
    Z,
    H,
    A,
    k,
    m,
    R,
    r,
    i,
    l,
    c,
    B,
    P,
    X,
    we,
    ke,
    a,
    E,
    b,
    ve,
    W,
    o,
    j,
    u
  ];
}
class bt extends $ {
  constructor(e) {
    super(), x(
      this,
      e,
      Sr,
      wr,
      Q,
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
var Rr = {
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
var Lr = (
  /** @class */
  function(n) {
    _t(e, n);
    function e(t) {
      var l = n.call(this, We(We({}, e.defaultAdapter), t)) || this;
      return l.shakeAnimationEndHandler = function() {
        l.handleShakeAnimationEnd();
      }, l;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Rr;
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
      var l = e.cssClasses.LABEL_SHAKE;
      t ? this.adapter.addClass(l) : this.adapter.removeClass(l);
    }, e.prototype.float = function(t) {
      var l = e.cssClasses, i = l.LABEL_FLOAT_ABOVE, r = l.LABEL_SHAKE;
      t ? this.adapter.addClass(i) : (this.adapter.removeClass(i), this.adapter.removeClass(r));
    }, e.prototype.setRequired = function(t) {
      var l = e.cssClasses.LABEL_REQUIRED;
      t ? this.adapter.addClass(l) : this.adapter.removeClass(l);
    }, e.prototype.handleShakeAnimationEnd = function() {
      var t = e.cssClasses.LABEL_SHAKE;
      this.adapter.removeClass(t);
    }, e;
  }(vt)
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
var rt = {
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
var Er = (
  /** @class */
  function(n) {
    _t(e, n);
    function e(t) {
      var l = n.call(this, We(We({}, e.defaultAdapter), t)) || this;
      return l.transitionEndHandler = function(i) {
        l.handleTransitionEnd(i);
      }, l;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return rt;
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
      this.adapter.removeClass(rt.LINE_RIPPLE_DEACTIVATING), this.adapter.addClass(rt.LINE_RIPPLE_ACTIVE);
    }, e.prototype.setRippleCenter = function(t) {
      this.adapter.setStyle("transform-origin", t + "px center");
    }, e.prototype.deactivate = function() {
      this.adapter.addClass(rt.LINE_RIPPLE_DEACTIVATING);
    }, e.prototype.handleTransitionEnd = function(t) {
      var l = this.adapter.hasClass(rt.LINE_RIPPLE_DEACTIVATING);
      t.propertyName === "opacity" && l && (this.adapter.removeClass(rt.LINE_RIPPLE_ACTIVE), this.adapter.removeClass(rt.LINE_RIPPLE_DEACTIVATING));
    }, e;
  }(vt)
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
var Hr = {
  NOTCH_ELEMENT_SELECTOR: ".mdc-notched-outline__notch"
}, Cn = {
  // This should stay in sync with $mdc-notched-outline-padding * 2.
  NOTCH_ELEMENT_PADDING: 8
}, Gr = {
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
var Dr = (
  /** @class */
  function(n) {
    _t(e, n);
    function e(t) {
      return n.call(this, We(We({}, e.defaultAdapter), t)) || this;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return Hr;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Gr;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return Cn;
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
      var l = e.cssClasses.OUTLINE_NOTCHED;
      t > 0 && (t += Cn.NOTCH_ELEMENT_PADDING), this.adapter.setNotchWidthProperty(t), this.adapter.addClass(l);
    }, e.prototype.closeNotch = function() {
      var t = e.cssClasses.OUTLINE_NOTCHED;
      this.adapter.removeClass(t), this.adapter.removeNotchWidthProperty();
    }, e;
  }(vt)
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
var $t = {
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
}, Mr = {
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
}, In = {
  LABEL_SCALE: 0.75
}, Pr = [
  "pattern",
  "min",
  "max",
  "required",
  "step",
  "minlength",
  "maxlength"
], Tr = [
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
var yn = ["mousedown", "touchstart"], An = ["click", "keydown"], Zr = (
  /** @class */
  function(n) {
    _t(e, n);
    function e(t, l) {
      l === void 0 && (l = {});
      var i = n.call(this, We(We({}, e.defaultAdapter), t)) || this;
      return i.isFocused = !1, i.receivedUserInput = !1, i.valid = !0, i.useNativeValidation = !0, i.validateOnValueChange = !0, i.helperText = l.helperText, i.characterCounter = l.characterCounter, i.leadingIcon = l.leadingIcon, i.trailingIcon = l.trailingIcon, i.inputFocusHandler = function() {
        i.activateFocus();
      }, i.inputBlurHandler = function() {
        i.deactivateFocus();
      }, i.inputInputHandler = function() {
        i.handleInput();
      }, i.setPointerXOffset = function(r) {
        i.setTransformOrigin(r);
      }, i.textFieldInteractionHandler = function() {
        i.handleTextFieldInteraction();
      }, i.validationAttributeChangeHandler = function(r) {
        i.handleValidationAttributeChange(r);
      }, i;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Mr;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return $t;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return In;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "shouldAlwaysFloat", {
      get: function() {
        var t = this.getNativeInput().type;
        return Tr.indexOf(t) >= 0;
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
      var t, l, i, r;
      this.adapter.hasLabel() && this.getNativeInput().required && this.adapter.setLabelRequired(!0), this.adapter.isFocused() ? this.inputFocusHandler() : this.adapter.hasLabel() && this.shouldFloat && (this.notchOutline(!0), this.adapter.floatLabel(!0), this.styleFloating(!0)), this.adapter.registerInputInteractionHandler("focus", this.inputFocusHandler), this.adapter.registerInputInteractionHandler("blur", this.inputBlurHandler), this.adapter.registerInputInteractionHandler("input", this.inputInputHandler);
      try {
        for (var s = et(yn), a = s.next(); !a.done; a = s.next()) {
          var o = a.value;
          this.adapter.registerInputInteractionHandler(o, this.setPointerXOffset);
        }
      } catch (f) {
        t = { error: f };
      } finally {
        try {
          a && !a.done && (l = s.return) && l.call(s);
        } finally {
          if (t)
            throw t.error;
        }
      }
      try {
        for (var u = et(An), c = u.next(); !c.done; c = u.next()) {
          var o = c.value;
          this.adapter.registerTextFieldInteractionHandler(o, this.textFieldInteractionHandler);
        }
      } catch (f) {
        i = { error: f };
      } finally {
        try {
          c && !c.done && (r = u.return) && r.call(u);
        } finally {
          if (i)
            throw i.error;
        }
      }
      this.validationObserver = this.adapter.registerValidationAttributeChangeHandler(this.validationAttributeChangeHandler), this.setcharacterCounter(this.getValue().length);
    }, e.prototype.destroy = function() {
      var t, l, i, r;
      this.adapter.deregisterInputInteractionHandler("focus", this.inputFocusHandler), this.adapter.deregisterInputInteractionHandler("blur", this.inputBlurHandler), this.adapter.deregisterInputInteractionHandler("input", this.inputInputHandler);
      try {
        for (var s = et(yn), a = s.next(); !a.done; a = s.next()) {
          var o = a.value;
          this.adapter.deregisterInputInteractionHandler(o, this.setPointerXOffset);
        }
      } catch (f) {
        t = { error: f };
      } finally {
        try {
          a && !a.done && (l = s.return) && l.call(s);
        } finally {
          if (t)
            throw t.error;
        }
      }
      try {
        for (var u = et(An), c = u.next(); !c.done; c = u.next()) {
          var o = c.value;
          this.adapter.deregisterTextFieldInteractionHandler(o, this.textFieldInteractionHandler);
        }
      } catch (f) {
        i = { error: f };
      } finally {
        try {
          c && !c.done && (r = u.return) && r.call(u);
        } finally {
          if (i)
            throw i.error;
        }
      }
      this.adapter.deregisterValidationAttributeChangeHandler(this.validationObserver);
    }, e.prototype.handleTextFieldInteraction = function() {
      var t = this.adapter.getNativeInput();
      t && t.disabled || (this.receivedUserInput = !0);
    }, e.prototype.handleValidationAttributeChange = function(t) {
      var l = this;
      t.some(function(i) {
        return Pr.indexOf(i) > -1 ? (l.styleValidity(!0), l.adapter.setLabelRequired(l.getNativeInput().required), !0) : !1;
      }), t.indexOf("maxlength") > -1 && this.setcharacterCounter(this.getValue().length);
    }, e.prototype.notchOutline = function(t) {
      if (!(!this.adapter.hasOutline() || !this.adapter.hasLabel()))
        if (t) {
          var l = this.adapter.getLabelWidth() * In.LABEL_SCALE;
          this.adapter.notchOutline(l);
        } else
          this.adapter.closeOutline();
    }, e.prototype.activateFocus = function() {
      this.isFocused = !0, this.styleFocused(this.isFocused), this.adapter.activateLineRipple(), this.adapter.hasLabel() && (this.notchOutline(this.shouldFloat), this.adapter.floatLabel(this.shouldFloat), this.styleFloating(this.shouldFloat), this.adapter.shakeLabel(this.shouldShake)), this.helperText && (this.helperText.isPersistent() || !this.helperText.isValidation() || !this.valid) && this.helperText.showToScreenReader();
    }, e.prototype.setTransformOrigin = function(t) {
      if (!(this.isDisabled() || this.adapter.hasOutline())) {
        var l = t.touches, i = l ? l[0] : t, r = i.target.getBoundingClientRect(), s = i.clientX - r.left;
        this.adapter.setLineRippleTransformOrigin(s);
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
        var l = this.isValid();
        this.styleValidity(l);
      }
      this.adapter.hasLabel() && (this.notchOutline(this.shouldFloat), this.adapter.floatLabel(this.shouldFloat), this.styleFloating(this.shouldFloat), this.validateOnValueChange && this.adapter.shakeLabel(this.shouldShake));
    }, e.prototype.isValid = function() {
      return this.useNativeValidation ? this.isNativeInputValid() : this.valid;
    }, e.prototype.setValid = function(t) {
      this.valid = t, this.styleValidity(t);
      var l = !t && !this.isFocused && !!this.getValue();
      this.adapter.hasLabel() && this.adapter.shakeLabel(l);
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
        var l = this.getNativeInput().maxLength;
        if (l === -1)
          throw new Error("MDCTextFieldFoundation: Expected maxlength html property on text input or textarea.");
        this.characterCounter.setCounterValue(t, l);
      }
    }, e.prototype.isBadInput = function() {
      return this.getNativeInput().validity.badInput || !1;
    }, e.prototype.isNativeInputValid = function() {
      return this.getNativeInput().validity.valid;
    }, e.prototype.styleValidity = function(t) {
      var l = e.cssClasses.INVALID;
      if (t ? this.adapter.removeClass(l) : this.adapter.addClass(l), this.helperText) {
        this.helperText.setValidity(t);
        var i = this.helperText.isValidation();
        if (!i)
          return;
        var r = this.helperText.isVisible(), s = this.helperText.getId();
        r && s ? this.adapter.setInputAttr($t.ARIA_DESCRIBEDBY, s) : this.adapter.removeInputAttr($t.ARIA_DESCRIBEDBY);
      }
    }, e.prototype.styleFocused = function(t) {
      var l = e.cssClasses.FOCUSED;
      t ? this.adapter.addClass(l) : this.adapter.removeClass(l);
    }, e.prototype.styleDisabled = function(t) {
      var l = e.cssClasses, i = l.DISABLED, r = l.INVALID;
      t ? (this.adapter.addClass(i), this.adapter.removeClass(r)) : this.adapter.removeClass(i), this.leadingIcon && this.leadingIcon.setDisabled(t), this.trailingIcon && this.trailingIcon.setDisabled(t);
    }, e.prototype.styleFloating = function(t) {
      var l = e.cssClasses.LABEL_FLOATING;
      t ? this.adapter.addClass(l) : this.adapter.removeClass(l);
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
  }(vt)
);
function Fr(n) {
  let e, t, l, i, r, s, a, o;
  const u = (
    /*#slots*/
    n[22].default
  ), c = ae(
    u,
    n,
    /*$$scope*/
    n[21],
    null
  );
  let f = [
    {
      class: t = te({
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
      style: l = Object.entries(
        /*internalStyles*/
        n[9]
      ).map(wn).concat([
        /*style*/
        n[4]
      ]).join(" ")
    },
    {
      for: i = /*forId*/
      n[5] || /*inputProps*/
      (n[11] ? (
        /*inputProps*/
        n[11].id
      ) : void 0)
    },
    /*$$restProps*/
    n[12]
  ], d = {};
  for (let g = 0; g < f.length; g += 1)
    d = q(d, f[g]);
  return {
    c() {
      e = F("label"), c && c.c(), ie(e, d);
    },
    m(g, h) {
      M(g, e, h), c && c.m(e, null), n[24](e), s = !0, a || (o = [
        ee(r = Le.call(
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
    p(g, h) {
      c && c.p && (!s || h & /*$$scope*/
      2097152) && ue(
        c,
        u,
        g,
        /*$$scope*/
        g[21],
        s ? oe(
          u,
          /*$$scope*/
          g[21],
          h,
          null
        ) : ce(
          /*$$scope*/
          g[21]
        ),
        null
      ), ie(e, d = fe(f, [
        (!s || h & /*className, floatAbove, required, internalClasses*/
        267 && t !== (t = te({
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
        }))) && { class: t },
        (!s || h & /*internalStyles, style*/
        528 && l !== (l = Object.entries(
          /*internalStyles*/
          g[9]
        ).map(wn).concat([
          /*style*/
          g[4]
        ]).join(" "))) && { style: l },
        (!s || h & /*forId*/
        32 && i !== (i = /*forId*/
        g[5] || /*inputProps*/
        (g[11] ? (
          /*inputProps*/
          g[11].id
        ) : void 0))) && { for: i },
        h & /*$$restProps*/
        4096 && /*$$restProps*/
        g[12]
      ])), r && pe(r.update) && h & /*use*/
      4 && r.update.call(
        null,
        /*use*/
        g[2]
      );
    },
    i(g) {
      s || (C(c, g), s = !0);
    },
    o(g) {
      w(c, g), s = !1;
    },
    d(g) {
      g && D(e), c && c.d(g), n[24](null), a = !1, he(o);
    }
  };
}
function Wr(n) {
  let e, t, l, i, r, s, a;
  const o = (
    /*#slots*/
    n[22].default
  ), u = ae(
    o,
    n,
    /*$$scope*/
    n[21],
    null
  );
  let c = [
    {
      class: t = te({
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
      style: l = Object.entries(
        /*internalStyles*/
        n[9]
      ).map(kn).concat([
        /*style*/
        n[4]
      ]).join(" ")
    },
    /*$$restProps*/
    n[12]
  ], f = {};
  for (let d = 0; d < c.length; d += 1)
    f = q(f, c[d]);
  return {
    c() {
      e = F("span"), u && u.c(), ie(e, f);
    },
    m(d, g) {
      M(d, e, g), u && u.m(e, null), n[23](e), r = !0, s || (a = [
        ee(i = Le.call(
          null,
          e,
          /*use*/
          n[2]
        )),
        ee(
          /*forwardEvents*/
          n[10].call(null, e)
        )
      ], s = !0);
    },
    p(d, g) {
      u && u.p && (!r || g & /*$$scope*/
      2097152) && ue(
        u,
        o,
        d,
        /*$$scope*/
        d[21],
        r ? oe(
          o,
          /*$$scope*/
          d[21],
          g,
          null
        ) : ce(
          /*$$scope*/
          d[21]
        ),
        null
      ), ie(e, f = fe(c, [
        (!r || g & /*className, floatAbove, required, internalClasses*/
        267 && t !== (t = te({
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
        (!r || g & /*internalStyles, style*/
        528 && l !== (l = Object.entries(
          /*internalStyles*/
          d[9]
        ).map(kn).concat([
          /*style*/
          d[4]
        ]).join(" "))) && { style: l },
        g & /*$$restProps*/
        4096 && /*$$restProps*/
        d[12]
      ])), i && pe(i.update) && g & /*use*/
      4 && i.update.call(
        null,
        /*use*/
        d[2]
      );
    },
    i(d) {
      r || (C(u, d), r = !0);
    },
    o(d) {
      w(u, d), r = !1;
    },
    d(d) {
      d && D(e), u && u.d(d), n[23](null), s = !1, he(a);
    }
  };
}
function Br(n) {
  let e, t, l, i;
  const r = [Wr, Fr], s = [];
  function a(o, u) {
    return (
      /*wrapped*/
      o[6] ? 0 : 1
    );
  }
  return e = a(n), t = s[e] = r[e](n), {
    c() {
      t.c(), l = Ae();
    },
    m(o, u) {
      s[e].m(o, u), M(o, l, u), i = !0;
    },
    p(o, [u]) {
      let c = e;
      e = a(o), e === c ? s[e].p(o, u) : (re(), w(s[c], 1, 1, () => {
        s[c] = null;
      }), se(), t = s[e], t ? t.p(o, u) : (t = s[e] = r[e](o), t.c()), C(t, 1), t.m(l.parentNode, l));
    },
    i(o) {
      i || (C(t), i = !0);
    },
    o(o) {
      w(t), i = !1;
    },
    d(o) {
      o && D(l), s[e].d(o);
    }
  };
}
const kn = ([n, e]) => `${n}: ${e};`, wn = ([n, e]) => `${n}: ${e};`;
function Ur(n, e, t) {
  const l = [
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
  let i = ge(e, l), { $$slots: r = {}, $$scope: s } = e;
  var a;
  const o = Be(Ee());
  let { use: u = [] } = e, { class: c = "" } = e, { style: f = "" } = e, { for: d = void 0 } = e, { floatAbove: g = !1 } = e, { required: h = !1 } = e, { wrapped: p = !1 } = e, _, I, y = {}, E = {}, b = (a = Ue("SMUI:generic:input:props")) !== null && a !== void 0 ? a : {}, Z = g, k = h;
  Ne(() => {
    t(18, I = new Lr({
      addClass: m,
      removeClass: R,
      getWidth: () => {
        var S, O;
        const me = we(), be = me.cloneNode(!0);
        (S = me.parentNode) === null || S === void 0 || S.appendChild(be), be.classList.add("smui-floating-label--remove-transition"), be.classList.add("smui-floating-label--force-size"), be.classList.remove("mdc-floating-label--float-above");
        const De = be.scrollWidth;
        return (O = me.parentNode) === null || O === void 0 || O.removeChild(be), De;
      },
      registerInteractionHandler: (S, O) => we().addEventListener(S, O),
      deregisterInteractionHandler: (S, O) => we().removeEventListener(S, O)
    }));
    const j = {
      get element() {
        return we();
      },
      addStyle: B,
      removeStyle: H
    };
    return Ce(_, "SMUIFloatingLabel:mount", j), I.init(), () => {
      Ce(_, "SMUIFloatingLabel:unmount", j), I.destroy();
    };
  });
  function m(j) {
    y[j] || t(8, y[j] = !0, y);
  }
  function R(j) {
    (!(j in y) || y[j]) && t(8, y[j] = !1, y);
  }
  function B(j, S) {
    E[j] != S && (S === "" || S == null ? (delete E[j], t(9, E)) : t(9, E[j] = S, E));
  }
  function H(j) {
    j in E && (delete E[j], t(9, E));
  }
  function A(j) {
    I.shake(j);
  }
  function W(j) {
    t(0, g = j);
  }
  function P(j) {
    t(1, h = j);
  }
  function X() {
    return I.getWidth();
  }
  function we() {
    return _;
  }
  function ke(j) {
    ne[j ? "unshift" : "push"](() => {
      _ = j, t(7, _);
    });
  }
  function ve(j) {
    ne[j ? "unshift" : "push"](() => {
      _ = j, t(7, _);
    });
  }
  return n.$$set = (j) => {
    e = q(q({}, e), Fe(j)), t(12, i = ge(e, l)), "use" in j && t(2, u = j.use), "class" in j && t(3, c = j.class), "style" in j && t(4, f = j.style), "for" in j && t(5, d = j.for), "floatAbove" in j && t(0, g = j.floatAbove), "required" in j && t(1, h = j.required), "wrapped" in j && t(6, p = j.wrapped), "$$scope" in j && t(21, s = j.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty & /*instance, previousFloatAbove, floatAbove*/
    786433 && I && Z !== g && (t(19, Z = g), I.float(g)), n.$$.dirty & /*instance, previousRequired, required*/
    1310722 && I && k !== h && (t(20, k = h), I.setRequired(h));
  }, [
    g,
    h,
    u,
    c,
    f,
    d,
    p,
    _,
    y,
    E,
    o,
    b,
    i,
    A,
    W,
    P,
    X,
    we,
    I,
    Z,
    k,
    s,
    r,
    ke,
    ve
  ];
}
class xl extends $ {
  constructor(e) {
    super(), x(this, e, Ur, Br, Q, {
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
function Or(n) {
  let e, t, l, i, r, s, a = [
    {
      class: t = te({
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
      style: l = Object.entries(
        /*internalStyles*/
        n[6]
      ).map(Sn).concat([
        /*style*/
        n[2]
      ]).join(" ")
    },
    /*$$restProps*/
    n[8]
  ], o = {};
  for (let u = 0; u < a.length; u += 1)
    o = q(o, a[u]);
  return {
    c() {
      e = F("div"), ie(e, o);
    },
    m(u, c) {
      M(u, e, c), n[13](e), r || (s = [
        ee(i = Le.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        ee(
          /*forwardEvents*/
          n[7].call(null, e)
        )
      ], r = !0);
    },
    p(u, [c]) {
      ie(e, o = fe(a, [
        c & /*className, active, internalClasses*/
        42 && t !== (t = te({
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
        c & /*internalStyles, style*/
        68 && l !== (l = Object.entries(
          /*internalStyles*/
          u[6]
        ).map(Sn).concat([
          /*style*/
          u[2]
        ]).join(" ")) && { style: l },
        c & /*$$restProps*/
        256 && /*$$restProps*/
        u[8]
      ])), i && pe(i.update) && c & /*use*/
      1 && i.update.call(
        null,
        /*use*/
        u[0]
      );
    },
    i: K,
    o: K,
    d(u) {
      u && D(e), n[13](null), r = !1, he(s);
    }
  };
}
const Sn = ([n, e]) => `${n}: ${e};`;
function Nr(n, e, t) {
  const l = [
    "use",
    "class",
    "style",
    "active",
    "activate",
    "deactivate",
    "setRippleCenter",
    "getElement"
  ];
  let i = ge(e, l);
  const r = Be(Ee());
  let { use: s = [] } = e, { class: a = "" } = e, { style: o = "" } = e, { active: u = !1 } = e, c, f, d = {}, g = {};
  Ne(() => (f = new Er({
    addClass: p,
    removeClass: _,
    hasClass: h,
    setStyle: I,
    registerEventHandler: (m, R) => Z().addEventListener(m, R),
    deregisterEventHandler: (m, R) => Z().removeEventListener(m, R)
  }), f.init(), () => {
    f.destroy();
  }));
  function h(m) {
    return m in d ? d[m] : Z().classList.contains(m);
  }
  function p(m) {
    d[m] || t(5, d[m] = !0, d);
  }
  function _(m) {
    (!(m in d) || d[m]) && t(5, d[m] = !1, d);
  }
  function I(m, R) {
    g[m] != R && (R === "" || R == null ? (delete g[m], t(6, g)) : t(6, g[m] = R, g));
  }
  function y() {
    f.activate();
  }
  function E() {
    f.deactivate();
  }
  function b(m) {
    f.setRippleCenter(m);
  }
  function Z() {
    return c;
  }
  function k(m) {
    ne[m ? "unshift" : "push"](() => {
      c = m, t(4, c);
    });
  }
  return n.$$set = (m) => {
    e = q(q({}, e), Fe(m)), t(8, i = ge(e, l)), "use" in m && t(0, s = m.use), "class" in m && t(1, a = m.class), "style" in m && t(2, o = m.style), "active" in m && t(3, u = m.active);
  }, [
    s,
    a,
    o,
    u,
    c,
    d,
    g,
    r,
    i,
    y,
    E,
    b,
    Z,
    k
  ];
}
class Vr extends $ {
  constructor(e) {
    super(), x(this, e, Nr, Or, Q, {
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
function Rn(n) {
  let e, t, l;
  const i = (
    /*#slots*/
    n[15].default
  ), r = ae(
    i,
    n,
    /*$$scope*/
    n[14],
    null
  );
  return {
    c() {
      e = F("div"), r && r.c(), v(e, "class", "mdc-notched-outline__notch"), v(e, "style", t = Object.entries(
        /*notchStyles*/
        n[7]
      ).map(Ln).join(" "));
    },
    m(s, a) {
      M(s, e, a), r && r.m(e, null), l = !0;
    },
    p(s, a) {
      r && r.p && (!l || a & /*$$scope*/
      16384) && ue(
        r,
        i,
        s,
        /*$$scope*/
        s[14],
        l ? oe(
          i,
          /*$$scope*/
          s[14],
          a,
          null
        ) : ce(
          /*$$scope*/
          s[14]
        ),
        null
      ), (!l || a & /*notchStyles*/
      128 && t !== (t = Object.entries(
        /*notchStyles*/
        s[7]
      ).map(Ln).join(" "))) && v(e, "style", t);
    },
    i(s) {
      l || (C(r, s), l = !0);
    },
    o(s) {
      w(r, s), l = !1;
    },
    d(s) {
      s && D(e), r && r.d(s);
    }
  };
}
function zr(n) {
  let e, t, l, i, r, s, a, o, u, c, f = !/*noLabel*/
  n[3] && Rn(n), d = [
    {
      class: s = te({
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
  ], g = {};
  for (let h = 0; h < d.length; h += 1)
    g = q(g, d[h]);
  return {
    c() {
      e = F("div"), t = F("div"), l = U(), f && f.c(), i = U(), r = F("div"), v(t, "class", "mdc-notched-outline__leading"), v(r, "class", "mdc-notched-outline__trailing"), ie(e, g);
    },
    m(h, p) {
      M(h, e, p), G(e, t), G(e, l), f && f.m(e, null), G(e, i), G(e, r), n[16](e), o = !0, u || (c = [
        ee(a = Le.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        ee(
          /*forwardEvents*/
          n[8].call(null, e)
        ),
        Y(
          e,
          "SMUIFloatingLabel:mount",
          /*handleFloatingLabelMount*/
          n[9]
        ),
        Y(
          e,
          "SMUIFloatingLabel:unmount",
          /*SMUIFloatingLabel_unmount_handler*/
          n[17]
        )
      ], u = !0);
    },
    p(h, [p]) {
      /*noLabel*/
      h[3] ? f && (re(), w(f, 1, 1, () => {
        f = null;
      }), se()) : f ? (f.p(h, p), p & /*noLabel*/
      8 && C(f, 1)) : (f = Rn(h), f.c(), C(f, 1), f.m(e, i)), ie(e, g = fe(d, [
        (!o || p & /*className, notched, noLabel, internalClasses*/
        78 && s !== (s = te({
          [
            /*className*/
            h[1]
          ]: !0,
          "mdc-notched-outline": !0,
          "mdc-notched-outline--notched": (
            /*notched*/
            h[2]
          ),
          "mdc-notched-outline--no-label": (
            /*noLabel*/
            h[3]
          ),
          .../*internalClasses*/
          h[6]
        }))) && { class: s },
        p & /*$$restProps*/
        1024 && /*$$restProps*/
        h[10]
      ])), a && pe(a.update) && p & /*use*/
      1 && a.update.call(
        null,
        /*use*/
        h[0]
      );
    },
    i(h) {
      o || (C(f), o = !0);
    },
    o(h) {
      w(f), o = !1;
    },
    d(h) {
      h && D(e), f && f.d(), n[16](null), u = !1, he(c);
    }
  };
}
const Ln = ([n, e]) => `${n}: ${e};`;
function jr(n, e, t) {
  const l = ["use", "class", "notched", "noLabel", "notch", "closeNotch", "getElement"];
  let i = ge(e, l), { $$slots: r = {}, $$scope: s } = e;
  const a = Be(Ee());
  let { use: o = [] } = e, { class: u = "" } = e, { notched: c = !1 } = e, { noLabel: f = !1 } = e, d, g, h, p = {}, _ = {};
  Ne(() => (g = new Dr({
    addClass: y,
    removeClass: E,
    setNotchWidthProperty: (A) => b("width", A + "px"),
    removeNotchWidthProperty: () => Z("width")
  }), g.init(), () => {
    g.destroy();
  }));
  function I(A) {
    t(4, h = A.detail);
  }
  function y(A) {
    p[A] || t(6, p[A] = !0, p);
  }
  function E(A) {
    (!(A in p) || p[A]) && t(6, p[A] = !1, p);
  }
  function b(A, W) {
    _[A] != W && (W === "" || W == null ? (delete _[A], t(7, _)) : t(7, _[A] = W, _));
  }
  function Z(A) {
    A in _ && (delete _[A], t(7, _));
  }
  function k(A) {
    g.notch(A);
  }
  function m() {
    g.closeNotch();
  }
  function R() {
    return d;
  }
  function B(A) {
    ne[A ? "unshift" : "push"](() => {
      d = A, t(5, d);
    });
  }
  const H = () => t(4, h = void 0);
  return n.$$set = (A) => {
    e = q(q({}, e), Fe(A)), t(10, i = ge(e, l)), "use" in A && t(0, o = A.use), "class" in A && t(1, u = A.class), "notched" in A && t(2, c = A.notched), "noLabel" in A && t(3, f = A.noLabel), "$$scope" in A && t(14, s = A.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty & /*floatingLabel*/
    16 && (h ? (h.addStyle("transition-duration", "0s"), y("mdc-notched-outline--upgraded"), requestAnimationFrame(() => {
      h && h.removeStyle("transition-duration");
    })) : E("mdc-notched-outline--upgraded"));
  }, [
    o,
    u,
    c,
    f,
    h,
    d,
    p,
    _,
    a,
    I,
    i,
    k,
    m,
    R,
    s,
    r,
    B,
    H
  ];
}
class qr extends $ {
  constructor(e) {
    super(), x(this, e, jr, zr, Q, {
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
function Xr(n) {
  let e;
  const t = (
    /*#slots*/
    n[11].default
  ), l = ae(
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
    m(i, r) {
      l && l.m(i, r), e = !0;
    },
    p(i, r) {
      l && l.p && (!e || r & /*$$scope*/
      8192) && ue(
        l,
        t,
        i,
        /*$$scope*/
        i[13],
        e ? oe(
          t,
          /*$$scope*/
          i[13],
          r,
          null
        ) : ce(
          /*$$scope*/
          i[13]
        ),
        null
      );
    },
    i(i) {
      e || (C(l, i), e = !0);
    },
    o(i) {
      w(l, i), e = !1;
    },
    d(i) {
      l && l.d(i);
    }
  };
}
function Yr(n) {
  let e, t, l;
  const i = [
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
      class: te({
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
  var r = (
    /*component*/
    n[2]
  );
  function s(a, o) {
    let u = {
      $$slots: { default: [Xr] },
      $$scope: { ctx: a }
    };
    for (let c = 0; c < i.length; c += 1)
      u = q(u, i[c]);
    return o !== void 0 && o & /*tag, forwardEvents, use, className, smuiClass, smuiClassMap, props, $$restProps*/
    1003 && (u = q(u, fe(i, [
      o & /*tag*/
      8 && { tag: (
        /*tag*/
        a[3]
      ) },
      o & /*forwardEvents, use*/
      257 && {
        use: [
          /*forwardEvents*/
          a[8],
          .../*use*/
          a[0]
        ]
      },
      o & /*className, smuiClass, smuiClassMap*/
      98 && {
        class: te({
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
      o & /*props*/
      128 && Re(
        /*props*/
        a[7]
      ),
      o & /*$$restProps*/
      512 && Re(
        /*$$restProps*/
        a[9]
      )
    ]))), { props: u };
  }
  return r && (e = Wt(r, s(n)), n[12](e)), {
    c() {
      e && z(e.$$.fragment), t = Ae();
    },
    m(a, o) {
      e && N(e, a, o), M(a, t, o), l = !0;
    },
    p(a, [o]) {
      if (o & /*component*/
      4 && r !== (r = /*component*/
      a[2])) {
        if (e) {
          re();
          const u = e;
          w(u.$$.fragment, 1, 0, () => {
            V(u, 1);
          }), se();
        }
        r ? (e = Wt(r, s(a, o)), a[12](e), z(e.$$.fragment), C(e.$$.fragment, 1), N(e, t.parentNode, t)) : e = null;
      } else if (r) {
        const u = o & /*tag, forwardEvents, use, className, smuiClass, smuiClassMap, props, $$restProps*/
        1003 ? fe(i, [
          o & /*tag*/
          8 && { tag: (
            /*tag*/
            a[3]
          ) },
          o & /*forwardEvents, use*/
          257 && {
            use: [
              /*forwardEvents*/
              a[8],
              .../*use*/
              a[0]
            ]
          },
          o & /*className, smuiClass, smuiClassMap*/
          98 && {
            class: te({
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
          o & /*props*/
          128 && Re(
            /*props*/
            a[7]
          ),
          o & /*$$restProps*/
          512 && Re(
            /*$$restProps*/
            a[9]
          )
        ]) : {};
        o & /*$$scope*/
        8192 && (u.$$scope = { dirty: o, ctx: a }), e.$set(u);
      }
    },
    i(a) {
      l || (e && C(e.$$.fragment, a), l = !0);
    },
    o(a) {
      e && w(e.$$.fragment, a), l = !1;
    },
    d(a) {
      a && D(t), n[12](null), e && V(e, a);
    }
  };
}
const Ke = {
  component: Ut,
  tag: "div",
  class: "",
  classMap: {},
  contexts: {},
  props: {}
};
function Jr(n, e, t) {
  const l = ["use", "class", "component", "tag", "getElement"];
  let i = ge(e, l), { $$slots: r = {}, $$scope: s } = e, { use: a = [] } = e, { class: o = "" } = e, u;
  const c = Ke.class, f = {}, d = [], g = Ke.contexts, h = Ke.props;
  let { component: p = Ke.component } = e, { tag: _ = p === Ut ? Ke.tag : void 0 } = e;
  Object.entries(Ke.classMap).forEach(([b, Z]) => {
    const k = Ue(Z);
    k && "subscribe" in k && d.push(k.subscribe((m) => {
      t(5, f[b] = m, f);
    }));
  });
  const I = Be(Ee());
  for (let b in g)
    g.hasOwnProperty(b) && Me(b, g[b]);
  Lt(() => {
    for (const b of d)
      b();
  });
  function y() {
    return u.getElement();
  }
  function E(b) {
    ne[b ? "unshift" : "push"](() => {
      u = b, t(4, u);
    });
  }
  return n.$$set = (b) => {
    e = q(q({}, e), Fe(b)), t(9, i = ge(e, l)), "use" in b && t(0, a = b.use), "class" in b && t(1, o = b.class), "component" in b && t(2, p = b.component), "tag" in b && t(3, _ = b.tag), "$$scope" in b && t(13, s = b.$$scope);
  }, [
    a,
    o,
    p,
    _,
    u,
    f,
    c,
    h,
    I,
    i,
    y,
    r,
    E,
    s
  ];
}
class Qr extends $ {
  constructor(e) {
    super(), x(this, e, Jr, Yr, Q, {
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
const En = Object.assign({}, Ke);
function Pe(n) {
  return new Proxy(Qr, {
    construct: function(e, t) {
      return Object.assign(Ke, En, n), new e(...t);
    },
    get: function(e, t) {
      return Object.assign(Ke, En, n), e[t];
    }
  });
}
const Kr = Pe({
  class: "mdc-text-field-helper-line",
  tag: "div"
}), xr = Pe({
  class: "mdc-text-field__affix mdc-text-field__affix--prefix",
  tag: "span"
}), $r = Pe({
  class: "mdc-text-field__affix mdc-text-field__affix--suffix",
  tag: "span"
});
function es(n) {
  let e, t, l, i, r, s = [
    {
      class: t = te({
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
  for (let o = 0; o < s.length; o += 1)
    a = q(a, s[o]);
  return {
    c() {
      e = F("input"), ie(e, a);
    },
    m(o, u) {
      M(o, e, u), e.autofocus && e.focus(), n[26](e), i || (r = [
        ee(l = Le.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        ee(
          /*forwardEvents*/
          n[7].call(null, e)
        ),
        Y(
          e,
          "input",
          /*input_handler*/
          n[27]
        ),
        Y(
          e,
          "change",
          /*changeHandler*/
          n[9]
        ),
        Y(
          e,
          "blur",
          /*blur_handler*/
          n[24]
        ),
        Y(
          e,
          "focus",
          /*focus_handler*/
          n[25]
        )
      ], i = !0);
    },
    p(o, [u]) {
      ie(e, a = fe(s, [
        u & /*className*/
        2 && t !== (t = te({
          [
            /*className*/
            o[1]
          ]: !0,
          "mdc-text-field__input": !0
        })) && { class: t },
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
      ])), l && pe(l.update) && u & /*use*/
      1 && l.update.call(
        null,
        /*use*/
        o[0]
      );
    },
    i: K,
    o: K,
    d(o) {
      o && D(e), n[26](null), i = !1, he(r);
    }
  };
}
function ts(n) {
  return n === "" ? Number.NaN : +n;
}
function ns(n, e, t) {
  const l = [
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
  let i = ge(e, l);
  const r = Be(Ee());
  let s = () => {
  };
  function a(S) {
    return S === s;
  }
  let { use: o = [] } = e, { class: u = "" } = e, { type: c = "text" } = e, { placeholder: f = " " } = e, { value: d = s } = e;
  const g = a(d);
  g && (d = "");
  let { files: h = null } = e, { dirty: p = !1 } = e, { invalid: _ = !1 } = e, { updateInvalid: I = !0 } = e, { emptyValueNull: y = d === null } = e;
  g && y && (d = null);
  let { emptyValueUndefined: E = d === void 0 } = e;
  g && E && (d = void 0);
  let b, Z = {}, k = {};
  Ne(() => {
    I && t(14, _ = b.matches(":invalid"));
  });
  function m(S) {
    if (c === "file") {
      t(12, h = S.currentTarget.files);
      return;
    }
    if (S.currentTarget.value === "" && y) {
      t(11, d = null);
      return;
    }
    if (S.currentTarget.value === "" && E) {
      t(11, d = void 0);
      return;
    }
    switch (c) {
      case "number":
      case "range":
        t(11, d = ts(S.currentTarget.value));
        break;
      default:
        t(11, d = S.currentTarget.value);
        break;
    }
  }
  function R(S) {
    (c === "file" || c === "range") && m(S), t(13, p = !0), I && t(14, _ = b.matches(":invalid"));
  }
  function B(S) {
    var O;
    return S in Z ? (O = Z[S]) !== null && O !== void 0 ? O : null : X().getAttribute(S);
  }
  function H(S, O) {
    Z[S] !== O && t(6, Z[S] = O, Z);
  }
  function A(S) {
    (!(S in Z) || Z[S] != null) && t(6, Z[S] = void 0, Z);
  }
  function W() {
    X().focus();
  }
  function P() {
    X().blur();
  }
  function X() {
    return b;
  }
  function we(S) {
    Bt.call(this, n, S);
  }
  function ke(S) {
    Bt.call(this, n, S);
  }
  function ve(S) {
    ne[S ? "unshift" : "push"](() => {
      b = S, t(5, b);
    });
  }
  const j = (S) => c !== "file" && m(S);
  return n.$$set = (S) => {
    e = q(q({}, e), Fe(S)), t(10, i = ge(e, l)), "use" in S && t(0, o = S.use), "class" in S && t(1, u = S.class), "type" in S && t(2, c = S.type), "placeholder" in S && t(3, f = S.placeholder), "value" in S && t(11, d = S.value), "files" in S && t(12, h = S.files), "dirty" in S && t(13, p = S.dirty), "invalid" in S && t(14, _ = S.invalid), "updateInvalid" in S && t(15, I = S.updateInvalid), "emptyValueNull" in S && t(16, y = S.emptyValueNull), "emptyValueUndefined" in S && t(17, E = S.emptyValueUndefined);
  }, n.$$.update = () => {
    n.$$.dirty & /*type, valueProp, value*/
    2068 && (c === "file" ? (delete k.value, t(4, k), t(2, c), t(11, d)) : t(4, k.value = d ?? "", k));
  }, [
    o,
    u,
    c,
    f,
    k,
    b,
    Z,
    r,
    m,
    R,
    i,
    d,
    h,
    p,
    _,
    I,
    y,
    E,
    B,
    H,
    A,
    W,
    P,
    X,
    we,
    ke,
    ve,
    j
  ];
}
class ls extends $ {
  constructor(e) {
    super(), x(this, e, ns, es, Q, {
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
function is(n) {
  let e, t, l, i, r, s, a = [
    {
      class: t = te({
        [
          /*className*/
          n[2]
        ]: !0,
        "mdc-text-field__input": !0
      })
    },
    {
      style: l = `${/*resizable*/
      n[4] ? "" : "resize: none; "}${/*style*/
      n[3]}`
    },
    /*internalAttrs*/
    n[6],
    /*$$restProps*/
    n[9]
  ], o = {};
  for (let u = 0; u < a.length; u += 1)
    o = q(o, a[u]);
  return {
    c() {
      e = F("textarea"), ie(e, o);
    },
    m(u, c) {
      M(u, e, c), e.autofocus && e.focus(), n[21](e), gn(
        e,
        /*value*/
        n[0]
      ), r || (s = [
        ee(i = Le.call(
          null,
          e,
          /*use*/
          n[1]
        )),
        ee(
          /*forwardEvents*/
          n[7].call(null, e)
        ),
        Y(
          e,
          "change",
          /*changeHandler*/
          n[8]
        ),
        Y(
          e,
          "blur",
          /*blur_handler*/
          n[19]
        ),
        Y(
          e,
          "focus",
          /*focus_handler*/
          n[20]
        ),
        Y(
          e,
          "input",
          /*textarea_input_handler*/
          n[22]
        )
      ], r = !0);
    },
    p(u, [c]) {
      ie(e, o = fe(a, [
        c & /*className*/
        4 && t !== (t = te({
          [
            /*className*/
            u[2]
          ]: !0,
          "mdc-text-field__input": !0
        })) && { class: t },
        c & /*resizable, style*/
        24 && l !== (l = `${/*resizable*/
        u[4] ? "" : "resize: none; "}${/*style*/
        u[3]}`) && { style: l },
        c & /*internalAttrs*/
        64 && /*internalAttrs*/
        u[6],
        c & /*$$restProps*/
        512 && /*$$restProps*/
        u[9]
      ])), i && pe(i.update) && c & /*use*/
      2 && i.update.call(
        null,
        /*use*/
        u[1]
      ), c & /*value*/
      1 && gn(
        e,
        /*value*/
        u[0]
      );
    },
    i: K,
    o: K,
    d(u) {
      u && D(e), n[21](null), r = !1, he(s);
    }
  };
}
function rs(n, e, t) {
  const l = [
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
  let i = ge(e, l);
  const r = Be(Ee());
  let { use: s = [] } = e, { class: a = "" } = e, { style: o = "" } = e, { value: u = "" } = e, { dirty: c = !1 } = e, { invalid: f = !1 } = e, { updateInvalid: d = !0 } = e, { resizable: g = !0 } = e, h, p = {};
  Ne(() => {
    d && t(11, f = h.matches(":invalid"));
  });
  function _() {
    t(10, c = !0), d && t(11, f = h.matches(":invalid"));
  }
  function I(A) {
    var W;
    return A in p ? (W = p[A]) !== null && W !== void 0 ? W : null : k().getAttribute(A);
  }
  function y(A, W) {
    p[A] !== W && t(6, p[A] = W, p);
  }
  function E(A) {
    (!(A in p) || p[A] != null) && t(6, p[A] = void 0, p);
  }
  function b() {
    k().focus();
  }
  function Z() {
    k().blur();
  }
  function k() {
    return h;
  }
  function m(A) {
    Bt.call(this, n, A);
  }
  function R(A) {
    Bt.call(this, n, A);
  }
  function B(A) {
    ne[A ? "unshift" : "push"](() => {
      h = A, t(5, h);
    });
  }
  function H() {
    u = this.value, t(0, u);
  }
  return n.$$set = (A) => {
    e = q(q({}, e), Fe(A)), t(9, i = ge(e, l)), "use" in A && t(1, s = A.use), "class" in A && t(2, a = A.class), "style" in A && t(3, o = A.style), "value" in A && t(0, u = A.value), "dirty" in A && t(10, c = A.dirty), "invalid" in A && t(11, f = A.invalid), "updateInvalid" in A && t(12, d = A.updateInvalid), "resizable" in A && t(4, g = A.resizable);
  }, [
    u,
    s,
    a,
    o,
    g,
    h,
    p,
    r,
    _,
    i,
    c,
    f,
    d,
    I,
    y,
    E,
    b,
    Z,
    k,
    m,
    R,
    B,
    H
  ];
}
class ss extends $ {
  constructor(e) {
    super(), x(this, e, rs, is, Q, {
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
const as = (n) => ({}), Hn = (n) => ({}), os = (n) => ({}), Gn = (n) => ({}), us = (n) => ({}), Dn = (n) => ({}), cs = (n) => ({}), Mn = (n) => ({}), fs = (n) => ({}), Pn = (n) => ({}), ds = (n) => ({}), Tn = (n) => ({}), gs = (n) => ({}), Zn = (n) => ({}), ms = (n) => ({}), Fn = (n) => ({}), hs = (n) => ({}), Wn = (n) => ({}), ps = (n) => ({}), Bn = (n) => ({}), bs = (n) => ({}), Un = (n) => ({}), _s = (n) => ({}), On = (n) => ({});
function vs(n) {
  let e, t, l, i, r, s, a, o, u, c, f, d, g, h;
  const p = (
    /*#slots*/
    n[56].label
  ), _ = ae(
    p,
    n,
    /*$$scope*/
    n[87],
    Pn
  );
  l = new Ot({
    props: {
      key: "SMUI:textfield:icon:leading",
      value: !0,
      $$slots: { default: [Is] },
      $$scope: { ctx: n }
    }
  });
  const I = (
    /*#slots*/
    n[56].default
  ), y = ae(
    I,
    n,
    /*$$scope*/
    n[87],
    null
  );
  s = new Ot({
    props: {
      key: "SMUI:textfield:icon:leading",
      value: !1,
      $$slots: { default: [ys] },
      $$scope: { ctx: n }
    }
  });
  const E = (
    /*#slots*/
    n[56].ripple
  ), b = ae(
    E,
    n,
    /*$$scope*/
    n[87],
    Gn
  );
  let Z = [
    {
      class: o = te({
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
      ).map(xn).concat([
        /*style*/
        n[10]
      ]).join(" ")
    },
    pt(
      /*$$restProps*/
      n[46],
      ["input$", "label$", "ripple$", "outline$", "helperLine$"]
    )
  ], k = {};
  for (let m = 0; m < Z.length; m += 1)
    k = q(k, Z[m]);
  return {
    c() {
      e = F("div"), _ && _.c(), t = U(), z(l.$$.fragment), i = U(), y && y.c(), r = U(), z(s.$$.fragment), a = U(), b && b.c(), ie(e, k);
    },
    m(m, R) {
      M(m, e, R), _ && _.m(e, null), G(e, t), N(l, e, null), G(e, i), y && y.m(e, null), G(e, r), N(s, e, null), G(e, a), b && b.m(e, null), n[82](e), d = !0, g || (h = [
        ee(c = wt.call(null, e, {
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
        ee(f = Le.call(
          null,
          e,
          /*use*/
          n[8]
        )),
        ee(
          /*forwardEvents*/
          n[34].call(null, e)
        ),
        Y(
          e,
          "SMUITextfieldLeadingIcon:mount",
          /*handleLeadingIconMount*/
          n[38]
        ),
        Y(
          e,
          "SMUITextfieldLeadingIcon:unmount",
          /*SMUITextfieldLeadingIcon_unmount_handler_1*/
          n[83]
        ),
        Y(
          e,
          "SMUITextfieldTrailingIcon:mount",
          /*handleTrailingIconMount*/
          n[39]
        ),
        Y(
          e,
          "SMUITextfieldTrailingIcon:unmount",
          /*SMUITextfieldTrailingIcon_unmount_handler_1*/
          n[84]
        )
      ], g = !0);
    },
    p(m, R) {
      _ && _.p && (!d || R[2] & /*$$scope*/
      33554432) && ue(
        _,
        p,
        m,
        /*$$scope*/
        m[87],
        d ? oe(
          p,
          /*$$scope*/
          m[87],
          R,
          fs
        ) : ce(
          /*$$scope*/
          m[87]
        ),
        Pn
      );
      const B = {};
      R[2] & /*$$scope*/
      33554432 && (B.$$scope = { dirty: R, ctx: m }), l.$set(B), y && y.p && (!d || R[2] & /*$$scope*/
      33554432) && ue(
        y,
        I,
        m,
        /*$$scope*/
        m[87],
        d ? oe(
          I,
          /*$$scope*/
          m[87],
          R,
          null
        ) : ce(
          /*$$scope*/
          m[87]
        ),
        null
      );
      const H = {};
      R[2] & /*$$scope*/
      33554432 && (H.$$scope = { dirty: R, ctx: m }), s.$set(H), b && b.p && (!d || R[2] & /*$$scope*/
      33554432) && ue(
        b,
        E,
        m,
        /*$$scope*/
        m[87],
        d ? oe(
          E,
          /*$$scope*/
          m[87],
          R,
          os
        ) : ce(
          /*$$scope*/
          m[87]
        ),
        Gn
      ), ie(e, k = fe(Z, [
        (!d || R[0] & /*className, disabled, textarea, variant, noLabel, invalid, internalClasses*/
        33673730 | R[1] & /*$$slots*/
        65536 && o !== (o = te({
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
        }))) && { class: o },
        (!d || R[0] & /*internalStyles, style*/
        67109888 && u !== (u = Object.entries(
          /*internalStyles*/
          m[26]
        ).map(xn).concat([
          /*style*/
          m[10]
        ]).join(" "))) && { style: u },
        R[1] & /*$$restProps*/
        32768 && pt(
          /*$$restProps*/
          m[46],
          ["input$", "label$", "ripple$", "outline$", "helperLine$"]
        )
      ])), c && pe(c.update) && R[0] & /*ripple*/
      2048 && c.update.call(null, {
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
      }), f && pe(f.update) && R[0] & /*use*/
      256 && f.update.call(
        null,
        /*use*/
        m[8]
      );
    },
    i(m) {
      d || (C(_, m), C(l.$$.fragment, m), C(y, m), C(s.$$.fragment, m), C(b, m), d = !0);
    },
    o(m) {
      w(_, m), w(l.$$.fragment, m), w(y, m), w(s.$$.fragment, m), w(b, m), d = !1;
    },
    d(m) {
      m && D(e), _ && _.d(m), V(l), y && y.d(m), V(s), b && b.d(m), n[82](null), g = !1, he(h);
    }
  };
}
function Cs(n) {
  let e, t, l, i, r, s, a, o, u, c, f, d, g, h, p, _, I, y, E = !/*textarea*/
  n[14] && /*variant*/
  n[15] !== "outlined" && Nn(n), b = (
    /*textarea*/
    (n[14] || /*variant*/
    n[15] === "outlined") && jn(n)
  );
  i = new Ot({
    props: {
      key: "SMUI:textfield:icon:leading",
      value: !0,
      $$slots: { default: [Ss] },
      $$scope: { ctx: n }
    }
  });
  const Z = (
    /*#slots*/
    n[56].default
  ), k = ae(
    Z,
    n,
    /*$$scope*/
    n[87],
    null
  ), m = [Ls, Rs], R = [];
  function B(P, X) {
    return (
      /*textarea*/
      P[14] && typeof /*value*/
      P[0] == "string" ? 0 : 1
    );
  }
  a = B(n), o = R[a] = m[a](n), c = new Ot({
    props: {
      key: "SMUI:textfield:icon:leading",
      value: !1,
      $$slots: { default: [Gs] },
      $$scope: { ctx: n }
    }
  });
  let H = !/*textarea*/
  n[14] && /*variant*/
  n[15] !== "outlined" && /*ripple*/
  n[11] && Jn(n), A = [
    {
      class: d = te({
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
      style: g = Object.entries(
        /*internalStyles*/
        n[26]
      ).map(Kn).concat([
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
    pt(
      /*$$restProps*/
      n[46],
      ["input$", "label$", "ripple$", "outline$", "helperLine$"]
    )
  ], W = {};
  for (let P = 0; P < A.length; P += 1)
    W = q(W, A[P]);
  return {
    c() {
      e = F("label"), E && E.c(), t = U(), b && b.c(), l = U(), z(i.$$.fragment), r = U(), k && k.c(), s = U(), o.c(), u = U(), z(c.$$.fragment), f = U(), H && H.c(), ie(e, W);
    },
    m(P, X) {
      M(P, e, X), E && E.m(e, null), G(e, t), b && b.m(e, null), G(e, l), N(i, e, null), G(e, r), k && k.m(e, null), G(e, s), R[a].m(e, null), G(e, u), N(c, e, null), G(e, f), H && H.m(e, null), n[78](e), _ = !0, I || (y = [
        ee(h = wt.call(null, e, {
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
        ee(p = Le.call(
          null,
          e,
          /*use*/
          n[8]
        )),
        ee(
          /*forwardEvents*/
          n[34].call(null, e)
        ),
        Y(
          e,
          "SMUITextfieldLeadingIcon:mount",
          /*handleLeadingIconMount*/
          n[38]
        ),
        Y(
          e,
          "SMUITextfieldLeadingIcon:unmount",
          /*SMUITextfieldLeadingIcon_unmount_handler*/
          n[79]
        ),
        Y(
          e,
          "SMUITextfieldTrailingIcon:mount",
          /*handleTrailingIconMount*/
          n[39]
        ),
        Y(
          e,
          "SMUITextfieldTrailingIcon:unmount",
          /*SMUITextfieldTrailingIcon_unmount_handler*/
          n[80]
        ),
        Y(
          e,
          "SMUITextfieldCharacterCounter:mount",
          /*handleCharacterCounterMount*/
          n[40]
        ),
        Y(
          e,
          "SMUITextfieldCharacterCounter:unmount",
          /*SMUITextfieldCharacterCounter_unmount_handler*/
          n[81]
        )
      ], I = !0);
    },
    p(P, X) {
      !/*textarea*/
      P[14] && /*variant*/
      P[15] !== "outlined" ? E ? (E.p(P, X), X[0] & /*textarea, variant*/
      49152 && C(E, 1)) : (E = Nn(P), E.c(), C(E, 1), E.m(e, t)) : E && (re(), w(E, 1, 1, () => {
        E = null;
      }), se()), /*textarea*/
      P[14] || /*variant*/
      P[15] === "outlined" ? b ? (b.p(P, X), X[0] & /*textarea, variant*/
      49152 && C(b, 1)) : (b = jn(P), b.c(), C(b, 1), b.m(e, l)) : b && (re(), w(b, 1, 1, () => {
        b = null;
      }), se());
      const we = {};
      X[2] & /*$$scope*/
      33554432 && (we.$$scope = { dirty: X, ctx: P }), i.$set(we), k && k.p && (!_ || X[2] & /*$$scope*/
      33554432) && ue(
        k,
        Z,
        P,
        /*$$scope*/
        P[87],
        _ ? oe(
          Z,
          /*$$scope*/
          P[87],
          X,
          null
        ) : ce(
          /*$$scope*/
          P[87]
        ),
        null
      );
      let ke = a;
      a = B(P), a === ke ? R[a].p(P, X) : (re(), w(R[ke], 1, 1, () => {
        R[ke] = null;
      }), se(), o = R[a], o ? o.p(P, X) : (o = R[a] = m[a](P), o.c()), C(o, 1), o.m(e, u));
      const ve = {};
      X[2] & /*$$scope*/
      33554432 && (ve.$$scope = { dirty: X, ctx: P }), c.$set(ve), !/*textarea*/
      P[14] && /*variant*/
      P[15] !== "outlined" && /*ripple*/
      P[11] ? H ? (H.p(P, X), X[0] & /*textarea, variant, ripple*/
      51200 && C(H, 1)) : (H = Jn(P), H.c(), C(H, 1), H.m(e, null)) : H && (re(), w(H, 1, 1, () => {
        H = null;
      }), se()), ie(e, W = fe(A, [
        (!_ || X[0] & /*className, disabled, textarea, variant, noLabel, label, focused, value, withLeadingIcon, withTrailingIcon, invalid, internalClasses*/
        314823171 | X[1] & /*$$slots*/
        65536 && d !== (d = te({
          [
            /*className*/
            P[9]
          ]: !0,
          "mdc-text-field": !0,
          "mdc-text-field--disabled": (
            /*disabled*/
            P[12]
          ),
          "mdc-text-field--textarea": (
            /*textarea*/
            P[14]
          ),
          "mdc-text-field--filled": (
            /*variant*/
            P[15] === "filled"
          ),
          "mdc-text-field--outlined": (
            /*variant*/
            P[15] === "outlined"
          ),
          "smui-text-field--standard": (
            /*variant*/
            P[15] === "standard" && !/*textarea*/
            P[14]
          ),
          "mdc-text-field--no-label": (
            /*noLabel*/
            P[16] || /*label*/
            P[17] == null && !/*$$slots*/
            P[47].label
          ),
          "mdc-text-field--label-floating": (
            /*focused*/
            P[28] || /*value*/
            P[0] != null && /*value*/
            P[0] !== ""
          ),
          "mdc-text-field--with-leading-icon": (
            /*isUninitializedValue*/
            P[35](
              /*withLeadingIcon*/
              P[22]
            ) ? (
              /*$$slots*/
              P[47].leadingIcon
            ) : (
              /*withLeadingIcon*/
              P[22]
            )
          ),
          "mdc-text-field--with-trailing-icon": (
            /*isUninitializedValue*/
            P[35](
              /*withTrailingIcon*/
              P[23]
            ) ? (
              /*$$slots*/
              P[47].trailingIcon
            ) : (
              /*withTrailingIcon*/
              P[23]
            )
          ),
          "mdc-text-field--with-internal-counter": (
            /*textarea*/
            P[14] && /*$$slots*/
            P[47].internalCounter
          ),
          "mdc-text-field--invalid": (
            /*invalid*/
            P[1]
          ),
          .../*internalClasses*/
          P[25]
        }))) && { class: d },
        (!_ || X[0] & /*internalStyles, style*/
        67109888 && g !== (g = Object.entries(
          /*internalStyles*/
          P[26]
        ).map(Kn).concat([
          /*style*/
          P[10]
        ]).join(" "))) && { style: g },
        {
          for: (
            /* suppress a11y warning, since this is wrapped */
            void 0
          )
        },
        X[1] & /*$$restProps*/
        32768 && pt(
          /*$$restProps*/
          P[46],
          ["input$", "label$", "ripple$", "outline$", "helperLine$"]
        )
      ])), h && pe(h.update) && X[0] & /*textarea, variant*/
      49152 | X[1] & /*inputElement*/
      4 && h.update.call(null, {
        ripple: !/*textarea*/
        P[14] && /*variant*/
        P[15] === "filled",
        unbounded: !1,
        addClass: (
          /*addClass*/
          P[43]
        ),
        removeClass: (
          /*removeClass*/
          P[44]
        ),
        addStyle: (
          /*addStyle*/
          P[45]
        ),
        eventTarget: (
          /*inputElement*/
          P[33]
        ),
        activeTarget: (
          /*inputElement*/
          P[33]
        ),
        initPromise: (
          /*initPromise*/
          P[37]
        )
      }), p && pe(p.update) && X[0] & /*use*/
      256 && p.update.call(
        null,
        /*use*/
        P[8]
      );
    },
    i(P) {
      _ || (C(E), C(b), C(i.$$.fragment, P), C(k, P), C(o), C(c.$$.fragment, P), C(H), _ = !0);
    },
    o(P) {
      w(E), w(b), w(i.$$.fragment, P), w(k, P), w(o), w(c.$$.fragment, P), w(H), _ = !1;
    },
    d(P) {
      P && D(e), E && E.d(), b && b.d(), V(i), k && k.d(P), R[a].d(), V(c), H && H.d(), n[78](null), I = !1, he(y);
    }
  };
}
function Is(n) {
  let e;
  const t = (
    /*#slots*/
    n[56].leadingIcon
  ), l = ae(
    t,
    n,
    /*$$scope*/
    n[87],
    Mn
  );
  return {
    c() {
      l && l.c();
    },
    m(i, r) {
      l && l.m(i, r), e = !0;
    },
    p(i, r) {
      l && l.p && (!e || r[2] & /*$$scope*/
      33554432) && ue(
        l,
        t,
        i,
        /*$$scope*/
        i[87],
        e ? oe(
          t,
          /*$$scope*/
          i[87],
          r,
          cs
        ) : ce(
          /*$$scope*/
          i[87]
        ),
        Mn
      );
    },
    i(i) {
      e || (C(l, i), e = !0);
    },
    o(i) {
      w(l, i), e = !1;
    },
    d(i) {
      l && l.d(i);
    }
  };
}
function ys(n) {
  let e;
  const t = (
    /*#slots*/
    n[56].trailingIcon
  ), l = ae(
    t,
    n,
    /*$$scope*/
    n[87],
    Dn
  );
  return {
    c() {
      l && l.c();
    },
    m(i, r) {
      l && l.m(i, r), e = !0;
    },
    p(i, r) {
      l && l.p && (!e || r[2] & /*$$scope*/
      33554432) && ue(
        l,
        t,
        i,
        /*$$scope*/
        i[87],
        e ? oe(
          t,
          /*$$scope*/
          i[87],
          r,
          us
        ) : ce(
          /*$$scope*/
          i[87]
        ),
        Dn
      );
    },
    i(i) {
      e || (C(l, i), e = !0);
    },
    o(i) {
      w(l, i), e = !1;
    },
    d(i) {
      l && l.d(i);
    }
  };
}
function Nn(n) {
  let e, t, l, i = (
    /*variant*/
    n[15] === "filled" && Vn()
  ), r = !/*noLabel*/
  n[16] && /*label*/
  (n[17] != null || /*$$slots*/
  n[47].label) && zn(n);
  return {
    c() {
      i && i.c(), e = U(), r && r.c(), t = Ae();
    },
    m(s, a) {
      i && i.m(s, a), M(s, e, a), r && r.m(s, a), M(s, t, a), l = !0;
    },
    p(s, a) {
      /*variant*/
      s[15] === "filled" ? i || (i = Vn(), i.c(), i.m(e.parentNode, e)) : i && (i.d(1), i = null), !/*noLabel*/
      s[16] && /*label*/
      (s[17] != null || /*$$slots*/
      s[47].label) ? r ? (r.p(s, a), a[0] & /*noLabel, label*/
      196608 | a[1] & /*$$slots*/
      65536 && C(r, 1)) : (r = zn(s), r.c(), C(r, 1), r.m(t.parentNode, t)) : r && (re(), w(r, 1, 1, () => {
        r = null;
      }), se());
    },
    i(s) {
      l || (C(r), l = !0);
    },
    o(s) {
      w(r), l = !1;
    },
    d(s) {
      s && (D(e), D(t)), i && i.d(s), r && r.d(s);
    }
  };
}
function Vn(n) {
  let e;
  return {
    c() {
      e = F("span"), v(e, "class", "mdc-text-field__ripple");
    },
    m(t, l) {
      M(t, e, l);
    },
    d(t) {
      t && D(e);
    }
  };
}
function zn(n) {
  let e, t;
  const l = [
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
    Ge(
      /*$$restProps*/
      n[46],
      "label$"
    )
  ];
  let i = {
    $$slots: { default: [As] },
    $$scope: { ctx: n }
  };
  for (let r = 0; r < l.length; r += 1)
    i = q(i, l[r]);
  return e = new xl({ props: i }), n[57](e), {
    c() {
      z(e.$$.fragment);
    },
    m(r, s) {
      N(e, r, s), t = !0;
    },
    p(r, s) {
      const a = s[0] & /*focused, value, required*/
      268443649 | s[1] & /*$$restProps*/
      32768 ? fe(l, [
        s[0] & /*focused, value*/
        268435457 && {
          floatAbove: (
            /*focused*/
            r[28] || /*value*/
            r[0] != null && /*value*/
            r[0] !== "" && (typeof /*value*/
            r[0] != "number" || !isNaN(
              /*value*/
              r[0]
            ))
          )
        },
        s[0] & /*required*/
        8192 && { required: (
          /*required*/
          r[13]
        ) },
        l[2],
        s[1] & /*$$restProps*/
        32768 && Re(Ge(
          /*$$restProps*/
          r[46],
          "label$"
        ))
      ]) : {};
      s[0] & /*label*/
      131072 | s[2] & /*$$scope*/
      33554432 && (a.$$scope = { dirty: s, ctx: r }), e.$set(a);
    },
    i(r) {
      t || (C(e.$$.fragment, r), t = !0);
    },
    o(r) {
      w(e.$$.fragment, r), t = !1;
    },
    d(r) {
      n[57](null), V(e, r);
    }
  };
}
function As(n) {
  let e = (
    /*label*/
    (n[17] == null ? "" : (
      /*label*/
      n[17]
    )) + ""
  ), t, l;
  const i = (
    /*#slots*/
    n[56].label
  ), r = ae(
    i,
    n,
    /*$$scope*/
    n[87],
    On
  );
  return {
    c() {
      t = le(e), r && r.c();
    },
    m(s, a) {
      M(s, t, a), r && r.m(s, a), l = !0;
    },
    p(s, a) {
      (!l || a[0] & /*label*/
      131072) && e !== (e = /*label*/
      (s[17] == null ? "" : (
        /*label*/
        s[17]
      )) + "") && _e(t, e), r && r.p && (!l || a[2] & /*$$scope*/
      33554432) && ue(
        r,
        i,
        s,
        /*$$scope*/
        s[87],
        l ? oe(
          i,
          /*$$scope*/
          s[87],
          a,
          _s
        ) : ce(
          /*$$scope*/
          s[87]
        ),
        On
      );
    },
    i(s) {
      l || (C(r, s), l = !0);
    },
    o(s) {
      w(r, s), l = !1;
    },
    d(s) {
      s && D(t), r && r.d(s);
    }
  };
}
function jn(n) {
  let e, t;
  const l = [
    {
      noLabel: (
        /*noLabel*/
        n[16] || /*label*/
        n[17] == null && !/*$$slots*/
        n[47].label
      )
    },
    Ge(
      /*$$restProps*/
      n[46],
      "outline$"
    )
  ];
  let i = {
    $$slots: { default: [ws] },
    $$scope: { ctx: n }
  };
  for (let r = 0; r < l.length; r += 1)
    i = q(i, l[r]);
  return e = new qr({ props: i }), n[59](e), {
    c() {
      z(e.$$.fragment);
    },
    m(r, s) {
      N(e, r, s), t = !0;
    },
    p(r, s) {
      const a = s[0] & /*noLabel, label*/
      196608 | s[1] & /*$$slots, $$restProps*/
      98304 ? fe(l, [
        s[0] & /*noLabel, label*/
        196608 | s[1] & /*$$slots*/
        65536 && {
          noLabel: (
            /*noLabel*/
            r[16] || /*label*/
            r[17] == null && !/*$$slots*/
            r[47].label
          )
        },
        s[1] & /*$$restProps*/
        32768 && Re(Ge(
          /*$$restProps*/
          r[46],
          "outline$"
        ))
      ]) : {};
      s[0] & /*focused, value, required, floatingLabel, label, noLabel*/
      268640289 | s[1] & /*$$restProps, $$slots*/
      98304 | s[2] & /*$$scope*/
      33554432 && (a.$$scope = { dirty: s, ctx: r }), e.$set(a);
    },
    i(r) {
      t || (C(e.$$.fragment, r), t = !0);
    },
    o(r) {
      w(e.$$.fragment, r), t = !1;
    },
    d(r) {
      n[59](null), V(e, r);
    }
  };
}
function qn(n) {
  let e, t;
  const l = [
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
    Ge(
      /*$$restProps*/
      n[46],
      "label$"
    )
  ];
  let i = {
    $$slots: { default: [ks] },
    $$scope: { ctx: n }
  };
  for (let r = 0; r < l.length; r += 1)
    i = q(i, l[r]);
  return e = new xl({ props: i }), n[58](e), {
    c() {
      z(e.$$.fragment);
    },
    m(r, s) {
      N(e, r, s), t = !0;
    },
    p(r, s) {
      const a = s[0] & /*focused, value, required*/
      268443649 | s[1] & /*$$restProps*/
      32768 ? fe(l, [
        s[0] & /*focused, value*/
        268435457 && {
          floatAbove: (
            /*focused*/
            r[28] || /*value*/
            r[0] != null && /*value*/
            r[0] !== "" && (typeof /*value*/
            r[0] != "number" || !isNaN(
              /*value*/
              r[0]
            ))
          )
        },
        s[0] & /*required*/
        8192 && { required: (
          /*required*/
          r[13]
        ) },
        l[2],
        s[1] & /*$$restProps*/
        32768 && Re(Ge(
          /*$$restProps*/
          r[46],
          "label$"
        ))
      ]) : {};
      s[0] & /*label*/
      131072 | s[2] & /*$$scope*/
      33554432 && (a.$$scope = { dirty: s, ctx: r }), e.$set(a);
    },
    i(r) {
      t || (C(e.$$.fragment, r), t = !0);
    },
    o(r) {
      w(e.$$.fragment, r), t = !1;
    },
    d(r) {
      n[58](null), V(e, r);
    }
  };
}
function ks(n) {
  let e = (
    /*label*/
    (n[17] == null ? "" : (
      /*label*/
      n[17]
    )) + ""
  ), t, l;
  const i = (
    /*#slots*/
    n[56].label
  ), r = ae(
    i,
    n,
    /*$$scope*/
    n[87],
    Un
  );
  return {
    c() {
      t = le(e), r && r.c();
    },
    m(s, a) {
      M(s, t, a), r && r.m(s, a), l = !0;
    },
    p(s, a) {
      (!l || a[0] & /*label*/
      131072) && e !== (e = /*label*/
      (s[17] == null ? "" : (
        /*label*/
        s[17]
      )) + "") && _e(t, e), r && r.p && (!l || a[2] & /*$$scope*/
      33554432) && ue(
        r,
        i,
        s,
        /*$$scope*/
        s[87],
        l ? oe(
          i,
          /*$$scope*/
          s[87],
          a,
          bs
        ) : ce(
          /*$$scope*/
          s[87]
        ),
        Un
      );
    },
    i(s) {
      l || (C(r, s), l = !0);
    },
    o(s) {
      w(r, s), l = !1;
    },
    d(s) {
      s && D(t), r && r.d(s);
    }
  };
}
function ws(n) {
  let e, t, l = !/*noLabel*/
  n[16] && /*label*/
  (n[17] != null || /*$$slots*/
  n[47].label) && qn(n);
  return {
    c() {
      l && l.c(), e = Ae();
    },
    m(i, r) {
      l && l.m(i, r), M(i, e, r), t = !0;
    },
    p(i, r) {
      !/*noLabel*/
      i[16] && /*label*/
      (i[17] != null || /*$$slots*/
      i[47].label) ? l ? (l.p(i, r), r[0] & /*noLabel, label*/
      196608 | r[1] & /*$$slots*/
      65536 && C(l, 1)) : (l = qn(i), l.c(), C(l, 1), l.m(e.parentNode, e)) : l && (re(), w(l, 1, 1, () => {
        l = null;
      }), se());
    },
    i(i) {
      t || (C(l), t = !0);
    },
    o(i) {
      w(l), t = !1;
    },
    d(i) {
      i && D(e), l && l.d(i);
    }
  };
}
function Ss(n) {
  let e;
  const t = (
    /*#slots*/
    n[56].leadingIcon
  ), l = ae(
    t,
    n,
    /*$$scope*/
    n[87],
    Bn
  );
  return {
    c() {
      l && l.c();
    },
    m(i, r) {
      l && l.m(i, r), e = !0;
    },
    p(i, r) {
      l && l.p && (!e || r[2] & /*$$scope*/
      33554432) && ue(
        l,
        t,
        i,
        /*$$scope*/
        i[87],
        e ? oe(
          t,
          /*$$scope*/
          i[87],
          r,
          ps
        ) : ce(
          /*$$scope*/
          i[87]
        ),
        Bn
      );
    },
    i(i) {
      e || (C(l, i), e = !0);
    },
    o(i) {
      w(l, i), e = !1;
    },
    d(i) {
      l && l.d(i);
    }
  };
}
function Rs(n) {
  let e, t, l, i, r, s, a, o, u, c;
  const f = (
    /*#slots*/
    n[56].prefix
  ), d = ae(
    f,
    n,
    /*$$scope*/
    n[87],
    Fn
  );
  let g = (
    /*prefix*/
    n[20] != null && Xn(n)
  );
  const h = [
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
    Ge(
      /*$$restProps*/
      n[46],
      "input$"
    )
  ];
  function p(m) {
    n[69](m);
  }
  function _(m) {
    n[70](m);
  }
  function I(m) {
    n[71](m);
  }
  function y(m) {
    n[72](m);
  }
  let E = {};
  for (let m = 0; m < h.length; m += 1)
    E = q(E, h[m]);
  /*value*/
  n[0] !== void 0 && (E.value = /*value*/
  n[0]), /*files*/
  n[3] !== void 0 && (E.files = /*files*/
  n[3]), /*dirty*/
  n[4] !== void 0 && (E.dirty = /*dirty*/
  n[4]), /*invalid*/
  n[1] !== void 0 && (E.invalid = /*invalid*/
  n[1]), l = new ls({ props: E }), n[68](l), ne.push(() => $e(l, "value", p)), ne.push(() => $e(l, "files", _)), ne.push(() => $e(l, "dirty", I)), ne.push(() => $e(l, "invalid", y)), l.$on(
    "blur",
    /*blur_handler_2*/
    n[73]
  ), l.$on(
    "focus",
    /*focus_handler_2*/
    n[74]
  ), l.$on(
    "blur",
    /*blur_handler_3*/
    n[75]
  ), l.$on(
    "focus",
    /*focus_handler_3*/
    n[76]
  );
  let b = (
    /*suffix*/
    n[21] != null && Yn(n)
  );
  const Z = (
    /*#slots*/
    n[56].suffix
  ), k = ae(
    Z,
    n,
    /*$$scope*/
    n[87],
    Zn
  );
  return {
    c() {
      d && d.c(), e = U(), g && g.c(), t = U(), z(l.$$.fragment), o = U(), b && b.c(), u = U(), k && k.c();
    },
    m(m, R) {
      d && d.m(m, R), M(m, e, R), g && g.m(m, R), M(m, t, R), N(l, m, R), M(m, o, R), b && b.m(m, R), M(m, u, R), k && k.m(m, R), c = !0;
    },
    p(m, R) {
      d && d.p && (!c || R[2] & /*$$scope*/
      33554432) && ue(
        d,
        f,
        m,
        /*$$scope*/
        m[87],
        c ? oe(
          f,
          /*$$scope*/
          m[87],
          R,
          ms
        ) : ce(
          /*$$scope*/
          m[87]
        ),
        Fn
      ), /*prefix*/
      m[20] != null ? g ? (g.p(m, R), R[0] & /*prefix*/
      1048576 && C(g, 1)) : (g = Xn(m), g.c(), C(g, 1), g.m(t.parentNode, t)) : g && (re(), w(g, 1, 1, () => {
        g = null;
      }), se());
      const B = R[0] & /*type, disabled, required, updateInvalid, helperId, noLabel, label*/
      135213056 | R[1] & /*$$restProps*/
      32768 ? fe(h, [
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
        196608 && Re(
          /*noLabel*/
          m[16] && /*label*/
          m[17] != null ? { placeholder: (
            /*label*/
            m[17]
          ) } : {}
        ),
        R[1] & /*$$restProps*/
        32768 && Re(Ge(
          /*$$restProps*/
          m[46],
          "input$"
        ))
      ]) : {};
      !i && R[0] & /*value*/
      1 && (i = !0, B.value = /*value*/
      m[0], xe(() => i = !1)), !r && R[0] & /*files*/
      8 && (r = !0, B.files = /*files*/
      m[3], xe(() => r = !1)), !s && R[0] & /*dirty*/
      16 && (s = !0, B.dirty = /*dirty*/
      m[4], xe(() => s = !1)), !a && R[0] & /*invalid*/
      2 && (a = !0, B.invalid = /*invalid*/
      m[1], xe(() => a = !1)), l.$set(B), /*suffix*/
      m[21] != null ? b ? (b.p(m, R), R[0] & /*suffix*/
      2097152 && C(b, 1)) : (b = Yn(m), b.c(), C(b, 1), b.m(u.parentNode, u)) : b && (re(), w(b, 1, 1, () => {
        b = null;
      }), se()), k && k.p && (!c || R[2] & /*$$scope*/
      33554432) && ue(
        k,
        Z,
        m,
        /*$$scope*/
        m[87],
        c ? oe(
          Z,
          /*$$scope*/
          m[87],
          R,
          gs
        ) : ce(
          /*$$scope*/
          m[87]
        ),
        Zn
      );
    },
    i(m) {
      c || (C(d, m), C(g), C(l.$$.fragment, m), C(b), C(k, m), c = !0);
    },
    o(m) {
      w(d, m), w(g), w(l.$$.fragment, m), w(b), w(k, m), c = !1;
    },
    d(m) {
      m && (D(e), D(t), D(o), D(u)), d && d.d(m), g && g.d(m), n[68](null), V(l, m), b && b.d(m), k && k.d(m);
    }
  };
}
function Ls(n) {
  let e, t, l, i, r, s, a, o;
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
    Ge(
      /*$$restProps*/
      n[46],
      "input$"
    )
  ];
  function c(_) {
    n[61](_);
  }
  function f(_) {
    n[62](_);
  }
  function d(_) {
    n[63](_);
  }
  let g = {};
  for (let _ = 0; _ < u.length; _ += 1)
    g = q(g, u[_]);
  /*value*/
  n[0] !== void 0 && (g.value = /*value*/
  n[0]), /*dirty*/
  n[4] !== void 0 && (g.dirty = /*dirty*/
  n[4]), /*invalid*/
  n[1] !== void 0 && (g.invalid = /*invalid*/
  n[1]), t = new ss({ props: g }), n[60](t), ne.push(() => $e(t, "value", c)), ne.push(() => $e(t, "dirty", f)), ne.push(() => $e(t, "invalid", d)), t.$on(
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
  const h = (
    /*#slots*/
    n[56].internalCounter
  ), p = ae(
    h,
    n,
    /*$$scope*/
    n[87],
    Wn
  );
  return {
    c() {
      e = F("span"), z(t.$$.fragment), s = U(), p && p.c(), v(e, "class", a = te({
        "mdc-text-field__resizer": !("input$resizable" in /*$$restProps*/
        n[46]) || /*$$restProps*/
        n[46].input$resizable
      }));
    },
    m(_, I) {
      M(_, e, I), N(t, e, null), G(e, s), p && p.m(e, null), o = !0;
    },
    p(_, I) {
      const y = I[0] & /*disabled, required, updateInvalid, helperId*/
      134754304 | I[1] & /*$$restProps*/
      32768 ? fe(u, [
        I[0] & /*disabled*/
        4096 && { disabled: (
          /*disabled*/
          _[12]
        ) },
        I[0] & /*required*/
        8192 && { required: (
          /*required*/
          _[13]
        ) },
        I[0] & /*updateInvalid*/
        524288 && { updateInvalid: (
          /*updateInvalid*/
          _[19]
        ) },
        I[0] & /*helperId*/
        134217728 && { "aria-controls": (
          /*helperId*/
          _[27]
        ) },
        I[0] & /*helperId*/
        134217728 && { "aria-describedby": (
          /*helperId*/
          _[27]
        ) },
        I[1] & /*$$restProps*/
        32768 && Re(Ge(
          /*$$restProps*/
          _[46],
          "input$"
        ))
      ]) : {};
      !l && I[0] & /*value*/
      1 && (l = !0, y.value = /*value*/
      _[0], xe(() => l = !1)), !i && I[0] & /*dirty*/
      16 && (i = !0, y.dirty = /*dirty*/
      _[4], xe(() => i = !1)), !r && I[0] & /*invalid*/
      2 && (r = !0, y.invalid = /*invalid*/
      _[1], xe(() => r = !1)), t.$set(y), p && p.p && (!o || I[2] & /*$$scope*/
      33554432) && ue(
        p,
        h,
        _,
        /*$$scope*/
        _[87],
        o ? oe(
          h,
          /*$$scope*/
          _[87],
          I,
          hs
        ) : ce(
          /*$$scope*/
          _[87]
        ),
        Wn
      ), (!o || I[1] & /*$$restProps*/
      32768 && a !== (a = te({
        "mdc-text-field__resizer": !("input$resizable" in /*$$restProps*/
        _[46]) || /*$$restProps*/
        _[46].input$resizable
      }))) && v(e, "class", a);
    },
    i(_) {
      o || (C(t.$$.fragment, _), C(p, _), o = !0);
    },
    o(_) {
      w(t.$$.fragment, _), w(p, _), o = !1;
    },
    d(_) {
      _ && D(e), n[60](null), V(t), p && p.d(_);
    }
  };
}
function Xn(n) {
  let e, t;
  return e = new xr({
    props: {
      $$slots: { default: [Es] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      z(e.$$.fragment);
    },
    m(l, i) {
      N(e, l, i), t = !0;
    },
    p(l, i) {
      const r = {};
      i[0] & /*prefix*/
      1048576 | i[2] & /*$$scope*/
      33554432 && (r.$$scope = { dirty: i, ctx: l }), e.$set(r);
    },
    i(l) {
      t || (C(e.$$.fragment, l), t = !0);
    },
    o(l) {
      w(e.$$.fragment, l), t = !1;
    },
    d(l) {
      V(e, l);
    }
  };
}
function Es(n) {
  let e;
  return {
    c() {
      e = le(
        /*prefix*/
        n[20]
      );
    },
    m(t, l) {
      M(t, e, l);
    },
    p(t, l) {
      l[0] & /*prefix*/
      1048576 && _e(
        e,
        /*prefix*/
        t[20]
      );
    },
    d(t) {
      t && D(e);
    }
  };
}
function Yn(n) {
  let e, t;
  return e = new $r({
    props: {
      $$slots: { default: [Hs] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      z(e.$$.fragment);
    },
    m(l, i) {
      N(e, l, i), t = !0;
    },
    p(l, i) {
      const r = {};
      i[0] & /*suffix*/
      2097152 | i[2] & /*$$scope*/
      33554432 && (r.$$scope = { dirty: i, ctx: l }), e.$set(r);
    },
    i(l) {
      t || (C(e.$$.fragment, l), t = !0);
    },
    o(l) {
      w(e.$$.fragment, l), t = !1;
    },
    d(l) {
      V(e, l);
    }
  };
}
function Hs(n) {
  let e;
  return {
    c() {
      e = le(
        /*suffix*/
        n[21]
      );
    },
    m(t, l) {
      M(t, e, l);
    },
    p(t, l) {
      l[0] & /*suffix*/
      2097152 && _e(
        e,
        /*suffix*/
        t[21]
      );
    },
    d(t) {
      t && D(e);
    }
  };
}
function Gs(n) {
  let e;
  const t = (
    /*#slots*/
    n[56].trailingIcon
  ), l = ae(
    t,
    n,
    /*$$scope*/
    n[87],
    Tn
  );
  return {
    c() {
      l && l.c();
    },
    m(i, r) {
      l && l.m(i, r), e = !0;
    },
    p(i, r) {
      l && l.p && (!e || r[2] & /*$$scope*/
      33554432) && ue(
        l,
        t,
        i,
        /*$$scope*/
        i[87],
        e ? oe(
          t,
          /*$$scope*/
          i[87],
          r,
          ds
        ) : ce(
          /*$$scope*/
          i[87]
        ),
        Tn
      );
    },
    i(i) {
      e || (C(l, i), e = !0);
    },
    o(i) {
      w(l, i), e = !1;
    },
    d(i) {
      l && l.d(i);
    }
  };
}
function Jn(n) {
  let e, t;
  const l = [Ge(
    /*$$restProps*/
    n[46],
    "ripple$"
  )];
  let i = {};
  for (let r = 0; r < l.length; r += 1)
    i = q(i, l[r]);
  return e = new Vr({ props: i }), n[77](e), {
    c() {
      z(e.$$.fragment);
    },
    m(r, s) {
      N(e, r, s), t = !0;
    },
    p(r, s) {
      const a = s[1] & /*$$restProps*/
      32768 ? fe(l, [Re(Ge(
        /*$$restProps*/
        r[46],
        "ripple$"
      ))]) : {};
      e.$set(a);
    },
    i(r) {
      t || (C(e.$$.fragment, r), t = !0);
    },
    o(r) {
      w(e.$$.fragment, r), t = !1;
    },
    d(r) {
      n[77](null), V(e, r);
    }
  };
}
function Qn(n) {
  let e, t;
  const l = [Ge(
    /*$$restProps*/
    n[46],
    "helperLine$"
  )];
  let i = {
    $$slots: { default: [Ds] },
    $$scope: { ctx: n }
  };
  for (let r = 0; r < l.length; r += 1)
    i = q(i, l[r]);
  return e = new Kr({ props: i }), e.$on(
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
      z(e.$$.fragment);
    },
    m(r, s) {
      N(e, r, s), t = !0;
    },
    p(r, s) {
      const a = s[1] & /*$$restProps*/
      32768 ? fe(l, [Re(Ge(
        /*$$restProps*/
        r[46],
        "helperLine$"
      ))]) : {};
      s[2] & /*$$scope*/
      33554432 && (a.$$scope = { dirty: s, ctx: r }), e.$set(a);
    },
    i(r) {
      t || (C(e.$$.fragment, r), t = !0);
    },
    o(r) {
      w(e.$$.fragment, r), t = !1;
    },
    d(r) {
      V(e, r);
    }
  };
}
function Ds(n) {
  let e;
  const t = (
    /*#slots*/
    n[56].helper
  ), l = ae(
    t,
    n,
    /*$$scope*/
    n[87],
    Hn
  );
  return {
    c() {
      l && l.c();
    },
    m(i, r) {
      l && l.m(i, r), e = !0;
    },
    p(i, r) {
      l && l.p && (!e || r[2] & /*$$scope*/
      33554432) && ue(
        l,
        t,
        i,
        /*$$scope*/
        i[87],
        e ? oe(
          t,
          /*$$scope*/
          i[87],
          r,
          as
        ) : ce(
          /*$$scope*/
          i[87]
        ),
        Hn
      );
    },
    i(i) {
      e || (C(l, i), e = !0);
    },
    o(i) {
      w(l, i), e = !1;
    },
    d(i) {
      l && l.d(i);
    }
  };
}
function Ms(n) {
  let e, t, l, i, r;
  const s = [Cs, vs], a = [];
  function o(c, f) {
    return (
      /*valued*/
      c[36] ? 0 : 1
    );
  }
  e = o(n), t = a[e] = s[e](n);
  let u = (
    /*$$slots*/
    n[47].helper && Qn(n)
  );
  return {
    c() {
      t.c(), l = U(), u && u.c(), i = Ae();
    },
    m(c, f) {
      a[e].m(c, f), M(c, l, f), u && u.m(c, f), M(c, i, f), r = !0;
    },
    p(c, f) {
      t.p(c, f), /*$$slots*/
      c[47].helper ? u ? (u.p(c, f), f[1] & /*$$slots*/
      65536 && C(u, 1)) : (u = Qn(c), u.c(), C(u, 1), u.m(i.parentNode, i)) : u && (re(), w(u, 1, 1, () => {
        u = null;
      }), se());
    },
    i(c) {
      r || (C(t), C(u), r = !0);
    },
    o(c) {
      w(t), w(u), r = !1;
    },
    d(c) {
      c && (D(l), D(i)), a[e].d(c), u && u.d(c);
    }
  };
}
const Kn = ([n, e]) => `${n}: ${e};`, xn = ([n, e]) => `${n}: ${e};`;
function Ps(n, e, t) {
  let l;
  const i = [
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
  let r = ge(e, i), { $$slots: s = {}, $$scope: a } = e;
  const o = an(s), { applyPassive: u } = Jl, c = Be(Ee());
  let f = () => {
  };
  function d(L) {
    return L === f;
  }
  let { use: g = [] } = e, { class: h = "" } = e, { style: p = "" } = e, { ripple: _ = !0 } = e, { disabled: I = !1 } = e, { required: y = !1 } = e, { textarea: E = !1 } = e, { variant: b = E ? "outlined" : "standard" } = e, { noLabel: Z = !1 } = e, { label: k = void 0 } = e, { type: m = "text" } = e, { value: R = r.input$emptyValueUndefined ? void 0 : f } = e, { files: B = f } = e;
  const H = !d(R) || !d(B);
  d(R) && (R = void 0), d(B) && (B = null);
  let { invalid: A = f } = e, { updateInvalid: W = d(A) } = e;
  d(A) && (A = !1);
  let { dirty: P = !1 } = e, { prefix: X = void 0 } = e, { suffix: we = void 0 } = e, { validateOnValueChange: ke = W } = e, { useNativeValidation: ve = W } = e, { withLeadingIcon: j = f } = e, { withTrailingIcon: S = f } = e, { input: O = void 0 } = e, { floatingLabel: me = void 0 } = e, { lineRipple: be = void 0 } = e, { notchedOutline: De = void 0 } = e, Te, de, Ze = {}, je = {}, Ye, Je = !1, Et = Ue("SMUI:addLayoutListener"), Ct, It, Ve = new Promise((L) => It = L), nt, lt, ot, it, yt = R;
  Et && (Ct = Et(un)), Ne(() => {
    if (t(54, de = new Zr(
      {
        // getRootAdapterMethods_
        addClass: Gt,
        removeClass: Dt,
        hasClass: At,
        registerTextFieldInteractionHandler: (L, Se) => Mt().addEventListener(L, Se),
        deregisterTextFieldInteractionHandler: (L, Se) => Mt().removeEventListener(L, Se),
        registerValidationAttributeChangeHandler: (L) => {
          const Se = (jt) => jt.map((qt) => qt.attributeName).filter((qt) => qt), cn = new MutationObserver((jt) => {
            ve && L(Se(jt));
          }), Zi = { attributes: !0 };
          return O && cn.observe(O.getElement(), Zi), cn;
        },
        deregisterValidationAttributeChangeHandler: (L) => {
          L.disconnect();
        },
        // getInputAdapterMethods_
        getNativeInput: () => {
          var L;
          return (L = O == null ? void 0 : O.getElement()) !== null && L !== void 0 ? L : null;
        },
        setInputAttr: (L, Se) => {
          O == null || O.addAttr(L, Se);
        },
        removeInputAttr: (L) => {
          O == null || O.removeAttr(L);
        },
        isFocused: () => document.activeElement === (O == null ? void 0 : O.getElement()),
        registerInputInteractionHandler: (L, Se) => {
          O == null || O.getElement().addEventListener(L, Se, u());
        },
        deregisterInputInteractionHandler: (L, Se) => {
          O == null || O.getElement().removeEventListener(L, Se, u());
        },
        // getLabelAdapterMethods_
        floatLabel: (L) => me && me.float(L),
        getLabelWidth: () => me ? me.getWidth() : 0,
        hasLabel: () => !!me,
        shakeLabel: (L) => me && me.shake(L),
        setLabelRequired: (L) => me && me.setRequired(L),
        // getLineRippleAdapterMethods_
        activateLineRipple: () => be && be.activate(),
        deactivateLineRipple: () => be && be.deactivate(),
        setLineRippleTransformOrigin: (L) => be && be.setRippleCenter(L),
        // getOutlineAdapterMethods_
        closeOutline: () => De && De.closeNotch(),
        hasOutline: () => !!De,
        notchOutline: (L) => De && De.notch(L)
      },
      {
        get helperText() {
          return ot;
        },
        get characterCounter() {
          return it;
        },
        get leadingIcon() {
          return nt;
        },
        get trailingIcon() {
          return lt;
        }
      }
    )), H) {
      if (O == null)
        throw new Error("SMUI Textfield must be initialized with either a non-undefined initial value or an Input component.");
      de.init();
    } else
      Xi().then(() => {
        if (O == null)
          throw new Error("SMUI Textfield must be initialized with either a non-undefined initial value or an Input component.");
        de.init();
      });
    return It(), () => {
      de.destroy();
    };
  }), Lt(() => {
    Ct && Ct();
  });
  function zt(L) {
    t(29, nt = L.detail);
  }
  function T(L) {
    t(30, lt = L.detail);
  }
  function J(L) {
    t(32, it = L.detail);
  }
  function He(L) {
    t(27, Ye = L.detail);
  }
  function Ht(L) {
    t(31, ot = L.detail);
  }
  function At(L) {
    var Se;
    return L in Ze ? (Se = Ze[L]) !== null && Se !== void 0 ? Se : null : Mt().classList.contains(L);
  }
  function Gt(L) {
    Ze[L] || t(25, Ze[L] = !0, Ze);
  }
  function Dt(L) {
    (!(L in Ze) || Ze[L]) && t(25, Ze[L] = !1, Ze);
  }
  function li(L, Se) {
    je[L] != Se && (Se === "" || Se == null ? (delete je[L], t(26, je)) : t(26, je[L] = Se, je));
  }
  function ii() {
    O == null || O.focus();
  }
  function ri() {
    O == null || O.blur();
  }
  function un() {
    if (de) {
      const L = de.shouldFloat;
      de.notchOutline(L);
    }
  }
  function Mt() {
    return Te;
  }
  function si(L) {
    ne[L ? "unshift" : "push"](() => {
      me = L, t(5, me);
    });
  }
  function ai(L) {
    ne[L ? "unshift" : "push"](() => {
      me = L, t(5, me);
    });
  }
  function oi(L) {
    ne[L ? "unshift" : "push"](() => {
      De = L, t(7, De);
    });
  }
  function ui(L) {
    ne[L ? "unshift" : "push"](() => {
      O = L, t(2, O);
    });
  }
  function ci(L) {
    R = L, t(0, R);
  }
  function fi(L) {
    P = L, t(4, P);
  }
  function di(L) {
    A = L, t(1, A), t(54, de), t(19, W);
  }
  const gi = () => t(28, Je = !1), mi = () => t(28, Je = !0), hi = (L) => Ce(Te, "blur", L), pi = (L) => Ce(Te, "focus", L);
  function bi(L) {
    ne[L ? "unshift" : "push"](() => {
      O = L, t(2, O);
    });
  }
  function _i(L) {
    R = L, t(0, R);
  }
  function vi(L) {
    B = L, t(3, B);
  }
  function Ci(L) {
    P = L, t(4, P);
  }
  function Ii(L) {
    A = L, t(1, A), t(54, de), t(19, W);
  }
  const yi = () => t(28, Je = !1), Ai = () => t(28, Je = !0), ki = (L) => Ce(Te, "blur", L), wi = (L) => Ce(Te, "focus", L);
  function Si(L) {
    ne[L ? "unshift" : "push"](() => {
      be = L, t(6, be);
    });
  }
  function Ri(L) {
    ne[L ? "unshift" : "push"](() => {
      Te = L, t(24, Te);
    });
  }
  const Li = () => t(29, nt = void 0), Ei = () => t(30, lt = void 0), Hi = () => t(32, it = void 0);
  function Gi(L) {
    ne[L ? "unshift" : "push"](() => {
      Te = L, t(24, Te);
    });
  }
  const Di = () => t(29, nt = void 0), Mi = () => t(30, lt = void 0), Pi = () => {
    t(27, Ye = void 0), t(31, ot = void 0);
  }, Ti = () => t(32, it = void 0);
  return n.$$set = (L) => {
    e = q(q({}, e), Fe(L)), t(46, r = ge(e, i)), "use" in L && t(8, g = L.use), "class" in L && t(9, h = L.class), "style" in L && t(10, p = L.style), "ripple" in L && t(11, _ = L.ripple), "disabled" in L && t(12, I = L.disabled), "required" in L && t(13, y = L.required), "textarea" in L && t(14, E = L.textarea), "variant" in L && t(15, b = L.variant), "noLabel" in L && t(16, Z = L.noLabel), "label" in L && t(17, k = L.label), "type" in L && t(18, m = L.type), "value" in L && t(0, R = L.value), "files" in L && t(3, B = L.files), "invalid" in L && t(1, A = L.invalid), "updateInvalid" in L && t(19, W = L.updateInvalid), "dirty" in L && t(4, P = L.dirty), "prefix" in L && t(20, X = L.prefix), "suffix" in L && t(21, we = L.suffix), "validateOnValueChange" in L && t(48, ke = L.validateOnValueChange), "useNativeValidation" in L && t(49, ve = L.useNativeValidation), "withLeadingIcon" in L && t(22, j = L.withLeadingIcon), "withTrailingIcon" in L && t(23, S = L.withTrailingIcon), "input" in L && t(2, O = L.input), "floatingLabel" in L && t(5, me = L.floatingLabel), "lineRipple" in L && t(6, be = L.lineRipple), "notchedOutline" in L && t(7, De = L.notchedOutline), "$$scope" in L && t(87, a = L.$$scope);
  }, n.$$.update = () => {
    if (n.$$.dirty[0] & /*input*/
    4 && t(33, l = O && O.getElement()), n.$$.dirty[0] & /*invalid, updateInvalid*/
    524290 | n.$$.dirty[1] & /*instance*/
    8388608 && de && de.isValid() !== !A && (W ? t(1, A = !de.isValid()) : de.setValid(!A)), n.$$.dirty[1] & /*instance, validateOnValueChange*/
    8519680 && de && de.getValidateOnValueChange() !== ke && de.setValidateOnValueChange(d(ke) ? !1 : ke), n.$$.dirty[1] & /*instance, useNativeValidation*/
    8650752 && de && de.setUseNativeValidation(d(ve) ? !0 : ve), n.$$.dirty[0] & /*disabled*/
    4096 | n.$$.dirty[1] & /*instance*/
    8388608 && de && de.setDisabled(I), n.$$.dirty[0] & /*value*/
    1 | n.$$.dirty[1] & /*instance, previousValue*/
    25165824 && de && H && yt !== R) {
      t(55, yt = R);
      const L = `${R}`;
      de.getValue() !== L && de.setValue(L);
    }
  }, [
    R,
    A,
    O,
    B,
    P,
    me,
    be,
    De,
    g,
    h,
    p,
    _,
    I,
    y,
    E,
    b,
    Z,
    k,
    m,
    W,
    X,
    we,
    j,
    S,
    Te,
    Ze,
    je,
    Ye,
    Je,
    nt,
    lt,
    ot,
    it,
    l,
    c,
    d,
    H,
    Ve,
    zt,
    T,
    J,
    He,
    Ht,
    Gt,
    Dt,
    li,
    r,
    o,
    ke,
    ve,
    ii,
    ri,
    un,
    Mt,
    de,
    yt,
    s,
    si,
    ai,
    oi,
    ui,
    ci,
    fi,
    di,
    gi,
    mi,
    hi,
    pi,
    bi,
    _i,
    vi,
    Ci,
    Ii,
    yi,
    Ai,
    ki,
    wi,
    Si,
    Ri,
    Li,
    Ei,
    Hi,
    Gi,
    Di,
    Mi,
    Pi,
    Ti,
    a
  ];
}
class Ts extends $ {
  constructor(e) {
    super(), x(
      this,
      e,
      Ps,
      Ms,
      Q,
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
Pe({
  class: "mdc-deprecated-list-item__text",
  tag: "span"
});
Pe({
  class: "mdc-deprecated-list-item__primary-text",
  tag: "span"
});
Pe({
  class: "mdc-deprecated-list-item__secondary-text",
  tag: "span"
});
function Zs(n) {
  let e, t, l, i, r, s;
  const a = (
    /*#slots*/
    n[8].default
  ), o = ae(
    a,
    n,
    /*$$scope*/
    n[7],
    null
  );
  let u = [
    {
      class: t = te({
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
  ], c = {};
  for (let f = 0; f < u.length; f += 1)
    c = q(c, u[f]);
  return {
    c() {
      e = F("span"), o && o.c(), ie(e, c);
    },
    m(f, d) {
      M(f, e, d), o && o.m(e, null), n[9](e), i = !0, r || (s = [
        ee(l = Le.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        ee(
          /*forwardEvents*/
          n[3].call(null, e)
        )
      ], r = !0);
    },
    p(f, [d]) {
      o && o.p && (!i || d & /*$$scope*/
      128) && ue(
        o,
        a,
        f,
        /*$$scope*/
        f[7],
        i ? oe(
          a,
          /*$$scope*/
          f[7],
          d,
          null
        ) : ce(
          /*$$scope*/
          f[7]
        ),
        null
      ), ie(e, c = fe(u, [
        (!i || d & /*className*/
        2 && t !== (t = te({
          [
            /*className*/
            f[1]
          ]: !0,
          "mdc-deprecated-list-item__graphic": !0,
          "mdc-menu__selection-group-icon": (
            /*menuSelectionGroup*/
            f[4]
          )
        }))) && { class: t },
        d & /*$$restProps*/
        32 && /*$$restProps*/
        f[5]
      ])), l && pe(l.update) && d & /*use*/
      1 && l.update.call(
        null,
        /*use*/
        f[0]
      );
    },
    i(f) {
      i || (C(o, f), i = !0);
    },
    o(f) {
      w(o, f), i = !1;
    },
    d(f) {
      f && D(e), o && o.d(f), n[9](null), r = !1, he(s);
    }
  };
}
function Fs(n, e, t) {
  const l = ["use", "class", "getElement"];
  let i = ge(e, l), { $$slots: r = {}, $$scope: s } = e;
  const a = Be(Ee());
  let { use: o = [] } = e, { class: u = "" } = e, c, f = Ue("SMUI:list:graphic:menu-selection-group");
  function d() {
    return c;
  }
  function g(h) {
    ne[h ? "unshift" : "push"](() => {
      c = h, t(2, c);
    });
  }
  return n.$$set = (h) => {
    e = q(q({}, e), Fe(h)), t(5, i = ge(e, l)), "use" in h && t(0, o = h.use), "class" in h && t(1, u = h.class), "$$scope" in h && t(7, s = h.$$scope);
  }, [
    o,
    u,
    c,
    a,
    f,
    i,
    d,
    s,
    r,
    g
  ];
}
class Ws extends $ {
  constructor(e) {
    super(), x(this, e, Fs, Zs, Q, { use: 0, class: 1, getElement: 6 });
  }
  get getElement() {
    return this.$$.ctx[6];
  }
}
Pe({
  class: "mdc-deprecated-list-item__meta",
  tag: "span"
});
Pe({
  class: "mdc-deprecated-list-group",
  tag: "div"
});
Pe({
  class: "mdc-deprecated-list-group__subheader",
  tag: "h3"
});
Pe({
  class: "mdc-menu__selection-group-icon",
  component: Ws
});
Pe({
  class: "mdc-dialog__header",
  tag: "div",
  contexts: {
    "SMUI:icon-button:context": "dialog:header"
  }
});
Pe({
  class: "mdc-dialog__title",
  tag: "h2"
});
Pe({
  class: "mdc-dialog__content",
  tag: "div"
});
Pe({
  class: "mdc-dialog__actions",
  tag: "div",
  classMap: {
    "smui-dialog__actions--reversed": "SMUI:dialog:actions:reversed"
  },
  contexts: {
    "SMUI:button:context": "dialog:action"
  }
});
Pe({
  class: "smui-paper__content",
  tag: "div"
});
Pe({
  class: "smui-paper__title",
  tag: "h5"
});
Pe({
  class: "smui-paper__subtitle",
  tag: "h6"
});
function Bs(n) {
  let e, t;
  const l = (
    /*#slots*/
    n[1].default
  ), i = ae(
    l,
    n,
    /*$$scope*/
    n[0],
    null
  );
  return {
    c() {
      e = F("span"), i && i.c(), v(e, "class", "oscd-icon");
    },
    m(r, s) {
      M(r, e, s), i && i.m(e, null), t = !0;
    },
    p(r, [s]) {
      i && i.p && (!t || s & /*$$scope*/
      1) && ue(
        i,
        l,
        r,
        /*$$scope*/
        r[0],
        t ? oe(
          l,
          /*$$scope*/
          r[0],
          s,
          null
        ) : ce(
          /*$$scope*/
          r[0]
        ),
        null
      );
    },
    i(r) {
      t || (C(i, r), t = !0);
    },
    o(r) {
      w(i, r), t = !1;
    },
    d(r) {
      r && D(e), i && i.d(r);
    }
  };
}
function Us(n, e, t) {
  let { $$slots: l = {}, $$scope: i } = e;
  return n.$$set = (r) => {
    "$$scope" in r && t(0, i = r.$$scope);
  }, [i, l];
}
class tt extends $ {
  constructor(e) {
    super(), x(this, e, Us, Bs, Q, {});
  }
}
function Os(n) {
  let e, t;
  return {
    c() {
      e = ye("svg"), t = ye("path"), v(t, "d", "M200-440v-80h560v80H200Z"), v(
        e,
        "style",
        /*svgStyles*/
        n[0]
      ), v(e, "xmlns", "http://www.w3.org/2000/svg"), v(e, "height", "24px"), v(e, "viewBox", "0 -960 960 960"), v(e, "width", "24px"), v(e, "fill", "#e3e3e3");
    },
    m(l, i) {
      M(l, e, i), G(e, t);
    },
    p(l, i) {
      i & /*svgStyles*/
      1 && v(
        e,
        "style",
        /*svgStyles*/
        l[0]
      );
    },
    d(l) {
      l && D(e);
    }
  };
}
function Ns(n) {
  let e, t;
  return e = new tt({
    props: {
      $$slots: { default: [Os] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      z(e.$$.fragment);
    },
    m(l, i) {
      N(e, l, i), t = !0;
    },
    p(l, [i]) {
      const r = {};
      i & /*$$scope, svgStyles*/
      3 && (r.$$scope = { dirty: i, ctx: l }), e.$set(r);
    },
    i(l) {
      t || (C(e.$$.fragment, l), t = !0);
    },
    o(l) {
      w(e.$$.fragment, l), t = !1;
    },
    d(l) {
      V(e, l);
    }
  };
}
function Vs(n, e, t) {
  let { svgStyles: l = "" } = e;
  return n.$$set = (i) => {
    "svgStyles" in i && t(0, l = i.svgStyles);
  }, [l];
}
class zs extends $ {
  constructor(e) {
    super(), x(this, e, Vs, Ns, Q, { svgStyles: 0 });
  }
}
function js(n) {
  let e, t;
  return {
    c() {
      e = ye("svg"), t = ye("path"), v(t, "d", "M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"), v(
        e,
        "style",
        /*svgStyles*/
        n[0]
      ), v(e, "xmlns", "http://www.w3.org/2000/svg"), v(e, "viewBox", "0 -960 960 960");
    },
    m(l, i) {
      M(l, e, i), G(e, t);
    },
    p(l, i) {
      i & /*svgStyles*/
      1 && v(
        e,
        "style",
        /*svgStyles*/
        l[0]
      );
    },
    d(l) {
      l && D(e);
    }
  };
}
function qs(n) {
  let e, t;
  return e = new tt({
    props: {
      $$slots: { default: [js] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      z(e.$$.fragment);
    },
    m(l, i) {
      N(e, l, i), t = !0;
    },
    p(l, [i]) {
      const r = {};
      i & /*$$scope, svgStyles*/
      3 && (r.$$scope = { dirty: i, ctx: l }), e.$set(r);
    },
    i(l) {
      t || (C(e.$$.fragment, l), t = !0);
    },
    o(l) {
      w(e.$$.fragment, l), t = !1;
    },
    d(l) {
      V(e, l);
    }
  };
}
function Xs(n, e, t) {
  let { svgStyles: l = "" } = e;
  return n.$$set = (i) => {
    "svgStyles" in i && t(0, l = i.svgStyles);
  }, [l];
}
class Ys extends $ {
  constructor(e) {
    super(), x(this, e, Xs, qs, Q, { svgStyles: 0 });
  }
}
function Js(n) {
  let e, t;
  return {
    c() {
      e = ye("svg"), t = ye("path"), v(t, "d", "M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z"), v(e, "xmlns", "http://www.w3.org/2000/svg"), v(e, "viewBox", "0 -960 960 960"), v(
        e,
        "style",
        /*svgStyles*/
        n[0]
      );
    },
    m(l, i) {
      M(l, e, i), G(e, t);
    },
    p(l, i) {
      i & /*svgStyles*/
      1 && v(
        e,
        "style",
        /*svgStyles*/
        l[0]
      );
    },
    d(l) {
      l && D(e);
    }
  };
}
function Qs(n) {
  let e, t;
  return e = new tt({
    props: {
      $$slots: { default: [Js] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      z(e.$$.fragment);
    },
    m(l, i) {
      N(e, l, i), t = !0;
    },
    p(l, [i]) {
      const r = {};
      i & /*$$scope, svgStyles*/
      3 && (r.$$scope = { dirty: i, ctx: l }), e.$set(r);
    },
    i(l) {
      t || (C(e.$$.fragment, l), t = !0);
    },
    o(l) {
      w(e.$$.fragment, l), t = !1;
    },
    d(l) {
      V(e, l);
    }
  };
}
function Ks(n, e, t) {
  let { svgStyles: l = "" } = e;
  return n.$$set = (i) => {
    "svgStyles" in i && t(0, l = i.svgStyles);
  }, [l];
}
class xs extends $ {
  constructor(e) {
    super(), x(this, e, Ks, Qs, Q, { svgStyles: 0 });
  }
}
function $s(n) {
  let e, t;
  return {
    c() {
      e = ye("svg"), t = ye("path"), v(t, "d", "M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"), v(e, "xmlns", "http://www.w3.org/2000/svg"), v(e, "viewBox", "0 -960 960 960"), v(e, "width", "24"), v(e, "height", "24"), v(e, "fill", "#004552");
    },
    m(l, i) {
      M(l, e, i), G(e, t);
    },
    p: K,
    i: K,
    o: K,
    d(l) {
      l && D(e);
    }
  };
}
class ea extends $ {
  constructor(e) {
    super(), x(this, e, null, $s, Q, {});
  }
}
function ta(n) {
  let e, t;
  return {
    c() {
      e = ye("svg"), t = ye("path"), v(t, "d", "M480-280q17 0 28.5-11.5T520-320q0-17-11.5-28.5T480-360q-17 0-28.5 11.5T440-320q0 17 11.5 28.5T480-280Zm-40-160h80v-240h-80v240Zm40 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"), v(e, "xmlns", "http://www.w3.org/2000/svg"), v(e, "height", "24px"), v(e, "viewBox", "0 -960 960 960"), v(e, "width", "24px"), v(e, "fill", "#004552");
    },
    m(l, i) {
      M(l, e, i), G(e, t);
    },
    p: K,
    i: K,
    o: K,
    d(l) {
      l && D(e);
    }
  };
}
class na extends $ {
  constructor(e) {
    super(), x(this, e, null, ta, Q, {});
  }
}
function la(n) {
  let e, t;
  return {
    c() {
      e = ye("svg"), t = ye("path"), v(t, "d", "m40-120 440-760 440 760H40Zm138-80h604L480-720 178-200Zm302-40q17 0 28.5-11.5T520-280q0-17-11.5-28.5T480-320q-17 0-28.5 11.5T440-280q0 17 11.5 28.5T480-240Zm-40-120h80v-200h-80v200Zm40-100Z"), v(e, "xmlns", "http://www.w3.org/2000/svg"), v(
        e,
        "height",
        /*size*/
        n[0]
      ), v(e, "viewBox", "0 -960 960 960"), v(
        e,
        "width",
        /*size*/
        n[0]
      ), v(
        e,
        "fill",
        /*fill*/
        n[1]
      );
    },
    m(l, i) {
      M(l, e, i), G(e, t);
    },
    p(l, [i]) {
      i & /*size*/
      1 && v(
        e,
        "height",
        /*size*/
        l[0]
      ), i & /*size*/
      1 && v(
        e,
        "width",
        /*size*/
        l[0]
      ), i & /*fill*/
      2 && v(
        e,
        "fill",
        /*fill*/
        l[1]
      );
    },
    i: K,
    o: K,
    d(l) {
      l && D(e);
    }
  };
}
function ia(n, e, t) {
  let { size: l = "24px" } = e, { fill: i = "#004552" } = e;
  return n.$$set = (r) => {
    "size" in r && t(0, l = r.size), "fill" in r && t(1, i = r.fill);
  }, [l, i];
}
class ra extends $ {
  constructor(e) {
    super(), x(this, e, ia, la, Q, { size: 0, fill: 1 });
  }
}
function sa(n) {
  let e, t;
  return {
    c() {
      e = ye("svg"), t = ye("path"), v(t, "d", "m380-300 280-180-280-180v360ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"), v(e, "xmlns", "http://www.w3.org/2000/svg"), v(e, "viewBox", "0 -960 960 960"), v(
        e,
        "style",
        /*svgStyles*/
        n[0]
      );
    },
    m(l, i) {
      M(l, e, i), G(e, t);
    },
    p(l, i) {
      i & /*svgStyles*/
      1 && v(
        e,
        "style",
        /*svgStyles*/
        l[0]
      );
    },
    d(l) {
      l && D(e);
    }
  };
}
function aa(n) {
  let e, t;
  return e = new tt({
    props: {
      $$slots: { default: [sa] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      z(e.$$.fragment);
    },
    m(l, i) {
      N(e, l, i), t = !0;
    },
    p(l, [i]) {
      const r = {};
      i & /*$$scope, svgStyles*/
      3 && (r.$$scope = { dirty: i, ctx: l }), e.$set(r);
    },
    i(l) {
      t || (C(e.$$.fragment, l), t = !0);
    },
    o(l) {
      w(e.$$.fragment, l), t = !1;
    },
    d(l) {
      V(e, l);
    }
  };
}
function oa(n, e, t) {
  let { svgStyles: l = "" } = e;
  return n.$$set = (i) => {
    "svgStyles" in i && t(0, l = i.svgStyles);
  }, [l];
}
class ua extends $ {
  constructor(e) {
    super(), x(this, e, oa, aa, Q, { svgStyles: 0 });
  }
}
function ca(n) {
  let e, t;
  return {
    c() {
      e = ye("svg"), t = ye("path"), v(t, "d", "M440-280h80v-240h-80v240Zm40-320q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0 520q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"), v(e, "xmlns", "http://www.w3.org/2000/svg"), v(e, "viewBox", "0 -960 960 960"), v(
        e,
        "style",
        /*svgStyles*/
        n[0]
      );
    },
    m(l, i) {
      M(l, e, i), G(e, t);
    },
    p(l, i) {
      i & /*svgStyles*/
      1 && v(
        e,
        "style",
        /*svgStyles*/
        l[0]
      );
    },
    d(l) {
      l && D(e);
    }
  };
}
function fa(n) {
  let e, t;
  return e = new tt({
    props: {
      $$slots: { default: [ca] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      z(e.$$.fragment);
    },
    m(l, i) {
      N(e, l, i), t = !0;
    },
    p(l, [i]) {
      const r = {};
      i & /*$$scope, svgStyles*/
      3 && (r.$$scope = { dirty: i, ctx: l }), e.$set(r);
    },
    i(l) {
      t || (C(e.$$.fragment, l), t = !0);
    },
    o(l) {
      w(e.$$.fragment, l), t = !1;
    },
    d(l) {
      V(e, l);
    }
  };
}
function da(n, e, t) {
  let { svgStyles: l = "" } = e;
  return n.$$set = (i) => {
    "svgStyles" in i && t(0, l = i.svgStyles);
  }, [l];
}
class ga extends $ {
  constructor(e) {
    super(), x(this, e, da, fa, Q, { svgStyles: 0 });
  }
}
function ma(n) {
  let e, t;
  return {
    c() {
      e = ye("svg"), t = ye("path"), v(t, "d", "M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z"), v(e, "xmlns", "http://www.w3.org/2000/svg"), v(e, "height", "24px"), v(e, "viewBox", "0 -960 960 960"), v(e, "width", "24px"), v(e, "fill", "#e3e3e3");
    },
    m(l, i) {
      M(l, e, i), G(e, t);
    },
    p: K,
    d(l) {
      l && D(e);
    }
  };
}
function ha(n) {
  let e, t;
  return e = new tt({
    props: {
      $$slots: { default: [ma] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      z(e.$$.fragment);
    },
    m(l, i) {
      N(e, l, i), t = !0;
    },
    p(l, [i]) {
      const r = {};
      i & /*$$scope*/
      2 && (r.$$scope = { dirty: i, ctx: l }), e.$set(r);
    },
    i(l) {
      t || (C(e.$$.fragment, l), t = !0);
    },
    o(l) {
      w(e.$$.fragment, l), t = !1;
    },
    d(l) {
      V(e, l);
    }
  };
}
function pa(n, e, t) {
  let { svgStyles: l = "" } = e;
  return n.$$set = (i) => {
    "svgStyles" in i && t(0, l = i.svgStyles);
  }, [l];
}
class ba extends $ {
  constructor(e) {
    super(), x(this, e, pa, ha, Q, { svgStyles: 0 });
  }
}
function _a(n) {
  let e, t;
  return {
    c() {
      e = ye("svg"), t = ye("path"), v(t, "d", "M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z"), v(
        e,
        "style",
        /*svgStyles*/
        n[0]
      ), v(e, "xmlns", "http://www.w3.org/2000/svg"), v(e, "viewBox", "0 -960 960 960");
    },
    m(l, i) {
      M(l, e, i), G(e, t);
    },
    p(l, i) {
      i & /*svgStyles*/
      1 && v(
        e,
        "style",
        /*svgStyles*/
        l[0]
      );
    },
    d(l) {
      l && D(e);
    }
  };
}
function va(n) {
  let e, t;
  return e = new tt({
    props: {
      $$slots: { default: [_a] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      z(e.$$.fragment);
    },
    m(l, i) {
      N(e, l, i), t = !0;
    },
    p(l, [i]) {
      const r = {};
      i & /*$$scope, svgStyles*/
      3 && (r.$$scope = { dirty: i, ctx: l }), e.$set(r);
    },
    i(l) {
      t || (C(e.$$.fragment, l), t = !0);
    },
    o(l) {
      w(e.$$.fragment, l), t = !1;
    },
    d(l) {
      V(e, l);
    }
  };
}
function Ca(n, e, t) {
  let { svgStyles: l = "" } = e;
  return n.$$set = (i) => {
    "svgStyles" in i && t(0, l = i.svgStyles);
  }, [l];
}
class Ia extends $ {
  constructor(e) {
    super(), x(this, e, Ca, va, Q, { svgStyles: 0 });
  }
}
function ya(n) {
  let e, t;
  return {
    c() {
      e = ye("svg"), t = ye("path"), v(t, "d", "M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"), v(
        e,
        "style",
        /*svgStyles*/
        n[0]
      ), v(e, "xmlns", "http://www.w3.org/2000/svg"), v(e, "viewBox", "0 -960 960 960");
    },
    m(l, i) {
      M(l, e, i), G(e, t);
    },
    p(l, i) {
      i & /*svgStyles*/
      1 && v(
        e,
        "style",
        /*svgStyles*/
        l[0]
      );
    },
    d(l) {
      l && D(e);
    }
  };
}
function Aa(n) {
  let e, t;
  return e = new tt({
    props: {
      $$slots: { default: [ya] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      z(e.$$.fragment);
    },
    m(l, i) {
      N(e, l, i), t = !0;
    },
    p(l, [i]) {
      const r = {};
      i & /*$$scope, svgStyles*/
      3 && (r.$$scope = { dirty: i, ctx: l }), e.$set(r);
    },
    i(l) {
      t || (C(e.$$.fragment, l), t = !0);
    },
    o(l) {
      w(e.$$.fragment, l), t = !1;
    },
    d(l) {
      V(e, l);
    }
  };
}
function ka(n, e, t) {
  let { svgStyles: l = "" } = e;
  return n.$$set = (i) => {
    "svgStyles" in i && t(0, l = i.svgStyles);
  }, [l];
}
class wa extends $ {
  constructor(e) {
    super(), x(this, e, ka, Aa, Q, { svgStyles: 0 });
  }
}
function Sa(n) {
  let e, t, l, i, r;
  const s = (
    /*#slots*/
    n[14].default
  ), a = ae(
    s,
    n,
    /*$$scope*/
    n[13],
    null
  );
  return {
    c() {
      e = F("span"), a && a.c(), v(e, "tabindex", "0"), v(e, "aria-describedby", t = /*content*/
      n[0] ? (
        /*id*/
        n[2]
      ) : void 0);
    },
    m(o, u) {
      M(o, e, u), a && a.m(e, null), n[15](e), l = !0, i || (r = [
        Y(
          e,
          "mouseenter",
          /*handleMouseEnter*/
          n[3]
        ),
        Y(
          e,
          "mouseleave",
          /*handleMouseLeave*/
          n[4]
        )
      ], i = !0);
    },
    p(o, [u]) {
      a && a.p && (!l || u & /*$$scope*/
      8192) && ue(
        a,
        s,
        o,
        /*$$scope*/
        o[13],
        l ? oe(
          s,
          /*$$scope*/
          o[13],
          u,
          null
        ) : ce(
          /*$$scope*/
          o[13]
        ),
        null
      ), (!l || u & /*content*/
      1 && t !== (t = /*content*/
      o[0] ? (
        /*id*/
        o[2]
      ) : void 0)) && v(e, "aria-describedby", t);
    },
    i(o) {
      l || (C(a, o), l = !0);
    },
    o(o) {
      w(a, o), l = !1;
    },
    d(o) {
      o && D(e), a && a.d(o), n[15](null), i = !1, he(r);
    }
  };
}
function Ra(n, e, t) {
  let { $$slots: l = {}, $$scope: i } = e, { content: r = "" } = e, { side: s = "top" } = e, { hoverDelay: a = 0 } = e, { transitionDuration: o = 80 } = e;
  const u = `tt-${Math.random().toString(36).slice(2)}`;
  let c = null, f = null, d = null, g = null, h = !1, p = null;
  function _() {
    r && (a > 0 ? t(12, p = setTimeout(() => t(11, h = !0), a)) : t(11, h = !0));
  }
  function I() {
    p && clearTimeout(p), t(11, h = !1);
  }
  function y() {
    if (!f || !g || !c)
      return;
    const b = c.getBoundingClientRect(), Z = g.getBoundingClientRect();
    let k = 0, m = 0;
    const R = 8;
    switch (s) {
      case "top":
        k = b.top - Z.height - R, m = b.left + b.width / 2 - Z.width / 2;
        break;
      case "bottom":
        k = b.bottom + R, m = b.left + b.width / 2 - Z.width / 2;
        break;
      case "left":
        k = b.top + b.height / 2 - Z.height / 2, m = b.left - Z.width - R;
        break;
      case "right":
        k = b.top + b.height / 2 - Z.height / 2, m = b.right + R;
        break;
    }
    t(8, f.style.top = `${k + window.scrollY}px`, f), t(8, f.style.left = `${m + window.scrollX}px`, f);
  }
  function E(b) {
    ne[b ? "unshift" : "push"](() => {
      c = b, t(1, c);
    });
  }
  return n.$$set = (b) => {
    "content" in b && t(0, r = b.content), "side" in b && t(5, s = b.side), "hoverDelay" in b && t(6, a = b.hoverDelay), "transitionDuration" in b && t(7, o = b.transitionDuration), "$$scope" in b && t(13, i = b.$$scope);
  }, n.$$.update = () => {
    if (n.$$.dirty & /*show, content, tooltipEl, transitionDuration, shadow, side, bubbleEl, hoverTimeout*/
    8097 && h && r) {
      if (!f) {
        t(8, f = document.createElement("div")), t(8, f.style.position = "absolute", f), t(8, f.style.zIndex = "9999", f), t(8, f.style.pointerEvents = "none", f), t(8, f.style.opacity = "0", f), t(8, f.style.transition = `opacity ${o}ms ease`, f), t(8, f.id = u, f), f.setAttribute("role", "tooltip"), document.body.appendChild(f), t(9, d = f.attachShadow({ mode: "open" }));
        const b = document.createElement("style");
        b.textContent = `
        .bubble {
          --pad-y: 6px;
          --pad-x: 10px;
          --radius: 4px;
          background: #000;
          color: #fff;
          font-size: 0.85rem;
          line-height: 1.2;
          padding: var(--pad-y) var(--pad-x);
          border-radius: var(--radius);
          white-space: nowrap;
          box-shadow: 0 4px 14px rgba(0,0,0,.25);
          pointer-events: none;
          position: relative;
          transition: none;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
          Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
        }
        .bubble::after {
          content: "";
          position: absolute;
          background: #000;
          width: 8px;
          height: 8px;
          transform: rotate(45deg);
        }
        .bubble.top::after {
          left: 50%;
          bottom: -4px;
          transform: translateX(-50%) rotate(45deg);
        }
        .bubble.bottom::after {
          left: 50%;
          top: -4px;
          transform: translateX(-50%) rotate(45deg);
        }
        .bubble.left::after {
          top: 50%;
          right: -4px;
          transform: translateY(-50%) rotate(45deg);
        }
        .bubble.right::after {
          top: 50%;
          left: -4px;
          transform: translateY(-50%) rotate(45deg);
        }
      `, d.appendChild(b), t(10, g = document.createElement("div")), t(10, g.className = `bubble ${s}`, g), t(10, g.innerHTML = r, g), d.appendChild(g);
        const Z = new MutationObserver(() => {
          h && y();
        });
        Z.observe(document.body, { childList: !0, subtree: !0 }), Lt(() => {
          Z.disconnect(), f && f.parentNode && f.parentNode.removeChild(f), t(8, f = null), t(10, g = null), t(9, d = null), p && clearTimeout(p);
        });
      }
      t(8, f.style.opacity = "1", f), y();
    }
    n.$$.dirty & /*show, tooltipEl, transitionDuration*/
    2432 && !h && f && (t(8, f.style.opacity = "0", f), setTimeout(
      () => {
        f && f.parentNode && f.parentNode.removeChild(f), t(8, f = null), t(10, g = null), t(9, d = null);
      },
      o
    )), n.$$.dirty & /*bubbleEl, side, content*/
    1057 && g && (t(10, g.className = `bubble ${s}`, g), t(10, g.innerHTML = r, g));
  }, [
    r,
    c,
    u,
    _,
    I,
    s,
    a,
    o,
    f,
    d,
    g,
    h,
    p,
    i,
    l,
    E
  ];
}
class La extends $ {
  constructor(e) {
    super(), x(this, e, Ra, Sa, Q, {
      content: 0,
      side: 5,
      hoverDelay: 6,
      transitionDuration: 7
    });
  }
}
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
var Qe = {
  HEADER_CELL_SORTED: "mdc-data-table__header-cell--sorted",
  HEADER_CELL_SORTED_DESCENDING: "mdc-data-table__header-cell--sorted-descending",
  IN_PROGRESS: "mdc-data-table--in-progress",
  ROW_SELECTED: "mdc-data-table__row--selected"
}, $n = {
  ARIA_SELECTED: "aria-selected",
  ARIA_SORT: "aria-sort"
}, st = {
  ARIA_SELECTED: $n.ARIA_SELECTED,
  ARIA_SORT: $n.ARIA_SORT
}, Oe;
(function(n) {
  n.ASCENDING = "ascending", n.DESCENDING = "descending", n.NONE = "none", n.OTHER = "other";
})(Oe || (Oe = {}));
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
var Ea = (
  /** @class */
  function(n) {
    _t(e, n);
    function e(t) {
      return n.call(this, We(We({}, e.defaultAdapter), t)) || this;
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
      return Nt(this, void 0, void 0, function() {
        return er(this, function(t) {
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
        var i = this.adapter.getRowIdAtIndex(l), r = !1;
        i && t.indexOf(i) >= 0 && (r = !0), this.adapter.setRowCheckboxCheckedAtIndex(l, r), this.selectRowAtIndex(l, r);
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
        var i = this.adapter.isCheckboxAtRowIndexChecked(l);
        this.selectRowAtIndex(l, i), this.setHeaderRowCheckboxState();
        var r = this.adapter.getRowIdAtIndex(l);
        this.adapter.notifyRowSelectionChanged({ rowId: r, rowIndex: l, selected: i });
      }
    }, e.prototype.handleSortAction = function(t) {
      for (var l = t.columnId, i = t.columnIndex, r = t.headerCell, s = 0; s < this.adapter.getHeaderCellCount(); s++)
        s !== i && (this.adapter.removeClassNameByHeaderCellIndex(s, Qe.HEADER_CELL_SORTED), this.adapter.removeClassNameByHeaderCellIndex(s, Qe.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(s, st.ARIA_SORT, Oe.NONE), this.adapter.setSortStatusLabelByHeaderCellIndex(s, Oe.NONE));
      this.adapter.setClassNameByHeaderCellIndex(i, Qe.HEADER_CELL_SORTED);
      var a = this.adapter.getAttributeByHeaderCellIndex(i, st.ARIA_SORT), o = Oe.NONE;
      a === Oe.ASCENDING ? (this.adapter.setClassNameByHeaderCellIndex(i, Qe.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(i, st.ARIA_SORT, Oe.DESCENDING), o = Oe.DESCENDING) : a === Oe.DESCENDING ? (this.adapter.removeClassNameByHeaderCellIndex(i, Qe.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(i, st.ARIA_SORT, Oe.ASCENDING), o = Oe.ASCENDING) : (this.adapter.setAttributeByHeaderCellIndex(i, st.ARIA_SORT, Oe.ASCENDING), o = Oe.ASCENDING), this.adapter.setSortStatusLabelByHeaderCellIndex(i, o), this.adapter.notifySortAction({
        columnId: l,
        columnIndex: i,
        headerCell: r,
        sortValue: o
      });
    }, e.prototype.handleRowClick = function(t) {
      var l = t.rowId, i = t.row;
      this.adapter.notifyRowClick({
        rowId: l,
        row: i
      });
    }, e.prototype.showProgress = function() {
      var t = this.adapter.getTableHeaderHeight(), l = this.adapter.getTableContainerHeight() - t, i = t;
      this.adapter.setProgressIndicatorStyles({
        height: l + "px",
        top: i + "px"
      }), this.adapter.addClass(Qe.IN_PROGRESS);
    }, e.prototype.hideProgress = function() {
      this.adapter.removeClass(Qe.IN_PROGRESS);
    }, e.prototype.setHeaderRowCheckboxState = function() {
      this.adapter.getSelectedRowCount() === 0 ? (this.adapter.setHeaderRowCheckboxChecked(!1), this.adapter.setHeaderRowCheckboxIndeterminate(!1)) : this.adapter.getSelectedRowCount() === this.adapter.getRowCount() ? (this.adapter.setHeaderRowCheckboxChecked(!0), this.adapter.setHeaderRowCheckboxIndeterminate(!1)) : (this.adapter.setHeaderRowCheckboxIndeterminate(!0), this.adapter.setHeaderRowCheckboxChecked(!1));
    }, e.prototype.selectRowAtIndex = function(t, l) {
      l ? (this.adapter.addClassAtRowIndex(t, Qe.ROW_SELECTED), this.adapter.setAttributeAtRowIndex(t, st.ARIA_SELECTED, "true")) : (this.adapter.removeClassAtRowIndex(t, Qe.ROW_SELECTED), this.adapter.setAttributeAtRowIndex(t, st.ARIA_SELECTED, "false"));
    }, e;
  }(vt)
);
const Ha = (n) => ({}), el = (n) => ({}), Ga = (n) => ({}), tl = (n) => ({});
function nl(n) {
  let e, t, l, i, r;
  const s = (
    /*#slots*/
    n[36].progress
  ), a = ae(
    s,
    n,
    /*$$scope*/
    n[35],
    tl
  );
  return {
    c() {
      e = F("div"), t = F("div"), l = U(), a && a.c(), v(t, "class", "mdc-data-table__scrim"), v(e, "class", "mdc-data-table__progress-indicator"), v(e, "style", i = Object.entries(
        /*progressIndicatorStyles*/
        n[13]
      ).map(ll).join(" "));
    },
    m(o, u) {
      M(o, e, u), G(e, t), G(e, l), a && a.m(e, null), r = !0;
    },
    p(o, u) {
      a && a.p && (!r || u[1] & /*$$scope*/
      16) && ue(
        a,
        s,
        o,
        /*$$scope*/
        o[35],
        r ? oe(
          s,
          /*$$scope*/
          o[35],
          u,
          Ga
        ) : ce(
          /*$$scope*/
          o[35]
        ),
        tl
      ), (!r || u[0] & /*progressIndicatorStyles*/
      8192 && i !== (i = Object.entries(
        /*progressIndicatorStyles*/
        o[13]
      ).map(ll).join(" "))) && v(e, "style", i);
    },
    i(o) {
      r || (C(a, o), r = !0);
    },
    o(o) {
      w(a, o), r = !1;
    },
    d(o) {
      o && D(e), a && a.d(o);
    }
  };
}
function Da(n) {
  let e, t, l, i, r, s, a, o, u, c, f, d, g, h;
  const p = (
    /*#slots*/
    n[36].default
  ), _ = ae(
    p,
    n,
    /*$$scope*/
    n[35],
    null
  );
  let I = [
    {
      class: i = te({
        [
          /*table$class*/
          n[6]
        ]: !0,
        "mdc-data-table__table": !0
      })
    },
    Ge(
      /*$$restProps*/
      n[25],
      "table$"
    )
  ], y = {};
  for (let H = 0; H < I.length; H += 1)
    y = q(y, I[H]);
  let E = [
    {
      class: s = te({
        [
          /*container$class*/
          n[4]
        ]: !0,
        "mdc-data-table__table-container": !0
      })
    },
    Ge(
      /*$$restProps*/
      n[25],
      "container$"
    )
  ], b = {};
  for (let H = 0; H < E.length; H += 1)
    b = q(b, E[H]);
  let Z = (
    /*$$slots*/
    n[24].progress && nl(n)
  );
  const k = (
    /*#slots*/
    n[36].paginate
  ), m = ae(
    k,
    n,
    /*$$scope*/
    n[35],
    el
  );
  let R = [
    {
      class: c = te({
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
    pt(
      /*$$restProps*/
      n[25],
      ["container$", "table$"]
    )
  ], B = {};
  for (let H = 0; H < R.length; H += 1)
    B = q(B, R[H]);
  return {
    c() {
      e = F("div"), t = F("div"), l = F("table"), _ && _.c(), o = U(), Z && Z.c(), u = U(), m && m.c(), ie(l, y), ie(t, b), ie(e, B);
    },
    m(H, A) {
      M(H, e, A), G(e, t), G(t, l), _ && _.m(l, null), n[37](t), G(e, o), Z && Z.m(e, null), G(e, u), m && m.m(e, null), n[38](e), d = !0, g || (h = [
        ee(r = Le.call(
          null,
          l,
          /*table$use*/
          n[5]
        )),
        ee(a = Le.call(
          null,
          t,
          /*container$use*/
          n[3]
        )),
        ee(f = Le.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        ee(
          /*forwardEvents*/
          n[15].call(null, e)
        ),
        Y(
          e,
          "SMUICheckbox:mount",
          /*SMUICheckbox_mount_handler*/
          n[39]
        ),
        Y(
          e,
          "SMUIDataTableHeader:mount",
          /*handleHeaderMount*/
          n[19]
        ),
        Y(
          e,
          "SMUIDataTableHeader:unmount",
          /*SMUIDataTableHeader_unmount_handler*/
          n[40]
        ),
        Y(
          e,
          "SMUIDataTableBody:mount",
          /*handleBodyMount*/
          n[20]
        ),
        Y(
          e,
          "SMUIDataTableBody:unmount",
          /*SMUIDataTableBody_unmount_handler*/
          n[41]
        ),
        Y(
          e,
          "SMUIDataTableHeaderCheckbox:change",
          /*SMUIDataTableHeaderCheckbox_change_handler*/
          n[42]
        ),
        Y(
          e,
          "SMUIDataTableHeader:click",
          /*handleHeaderRowClick*/
          n[22]
        ),
        Y(
          e,
          "SMUIDataTableRow:click",
          /*handleRowClick*/
          n[23]
        ),
        Y(
          e,
          "SMUIDataTableBodyCheckbox:change",
          /*handleBodyCheckboxChange*/
          n[21]
        )
      ], g = !0);
    },
    p(H, A) {
      _ && _.p && (!d || A[1] & /*$$scope*/
      16) && ue(
        _,
        p,
        H,
        /*$$scope*/
        H[35],
        d ? oe(
          p,
          /*$$scope*/
          H[35],
          A,
          null
        ) : ce(
          /*$$scope*/
          H[35]
        ),
        null
      ), ie(l, y = fe(I, [
        (!d || A[0] & /*table$class*/
        64 && i !== (i = te({
          [
            /*table$class*/
            H[6]
          ]: !0,
          "mdc-data-table__table": !0
        }))) && { class: i },
        A[0] & /*$$restProps*/
        33554432 && Ge(
          /*$$restProps*/
          H[25],
          "table$"
        )
      ])), r && pe(r.update) && A[0] & /*table$use*/
      32 && r.update.call(
        null,
        /*table$use*/
        H[5]
      ), ie(t, b = fe(E, [
        (!d || A[0] & /*container$class*/
        16 && s !== (s = te({
          [
            /*container$class*/
            H[4]
          ]: !0,
          "mdc-data-table__table-container": !0
        }))) && { class: s },
        A[0] & /*$$restProps*/
        33554432 && Ge(
          /*$$restProps*/
          H[25],
          "container$"
        )
      ])), a && pe(a.update) && A[0] & /*container$use*/
      8 && a.update.call(
        null,
        /*container$use*/
        H[3]
      ), /*$$slots*/
      H[24].progress ? Z ? (Z.p(H, A), A[0] & /*$$slots*/
      16777216 && C(Z, 1)) : (Z = nl(H), Z.c(), C(Z, 1), Z.m(e, u)) : Z && (re(), w(Z, 1, 1, () => {
        Z = null;
      }), se()), m && m.p && (!d || A[1] & /*$$scope*/
      16) && ue(
        m,
        k,
        H,
        /*$$scope*/
        H[35],
        d ? oe(
          k,
          /*$$scope*/
          H[35],
          A,
          Ha
        ) : ce(
          /*$$scope*/
          H[35]
        ),
        el
      ), ie(e, B = fe(R, [
        (!d || A[0] & /*className, stickyHeader, internalClasses*/
        4102 && c !== (c = te({
          [
            /*className*/
            H[1]
          ]: !0,
          "mdc-data-table": !0,
          "mdc-data-table--sticky-header": (
            /*stickyHeader*/
            H[2]
          ),
          .../*internalClasses*/
          H[12]
        }))) && { class: c },
        A[0] & /*$$restProps*/
        33554432 && pt(
          /*$$restProps*/
          H[25],
          ["container$", "table$"]
        )
      ])), f && pe(f.update) && A[0] & /*use*/
      1 && f.update.call(
        null,
        /*use*/
        H[0]
      );
    },
    i(H) {
      d || (C(_, H), C(Z), C(m, H), d = !0);
    },
    o(H) {
      w(_, H), w(Z), w(m, H), d = !1;
    },
    d(H) {
      H && D(e), _ && _.d(H), n[37](null), Z && Z.d(), m && m.d(H), n[38](null), g = !1, he(h);
    }
  };
}
const ll = ([n, e]) => `${n}: ${e};`;
function Ma(n, e, t) {
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
  let i = ge(e, l), r, s, a, { $$slots: o = {}, $$scope: u } = e;
  const c = an(o), { closest: f } = Kl, d = Be(Ee());
  let { use: g = [] } = e, { class: h = "" } = e, { stickyHeader: p = !1 } = e, { sortable: _ = !1 } = e, { sort: I = null } = e, { sortDirection: y = "ascending" } = e, { sortAscendingAriaLabel: E = "sorted, ascending" } = e, { sortDescendingAriaLabel: b = "sorted, descending" } = e, { container$use: Z = [] } = e, { container$class: k = "" } = e, { table$use: m = [] } = e, { table$class: R = "" } = e, B, H, A, W, P, X = {}, we = { height: "auto", top: "initial" }, ke = Ue("SMUI:addLayoutListener"), ve, j = !1, S = mt(!1);
  dt(n, S, (T) => t(34, r = T));
  let O = mt(I);
  dt(n, O, (T) => t(45, a = T));
  let me = mt(y);
  dt(n, me, (T) => t(44, s = T)), Me("SMUI:checkbox:context", "data-table"), Me("SMUI:linear-progress:context", "data-table"), Me("SMUI:linear-progress:closed", S), Me("SMUI:data-table:sortable", _), Me("SMUI:data-table:sort", O), Me("SMUI:data-table:sortDirection", me), Me("SMUI:data-table:sortAscendingAriaLabel", E), Me("SMUI:data-table:sortDescendingAriaLabel", b), ke && (ve = ke(It));
  let be;
  Ne(() => (t(7, H = new Ea({
    addClass: Ze,
    removeClass: je,
    getHeaderCellElements: () => {
      var T;
      return (T = W == null ? void 0 : W.cells.map((J) => J.element)) !== null && T !== void 0 ? T : [];
    },
    getHeaderCellCount: () => {
      var T;
      return (T = W == null ? void 0 : W.cells.length) !== null && T !== void 0 ? T : 0;
    },
    getAttributeByHeaderCellIndex: (T, J) => {
      var He;
      return (He = W == null ? void 0 : W.orderedCells[T].getAttr(J)) !== null && He !== void 0 ? He : null;
    },
    setAttributeByHeaderCellIndex: (T, J, He) => {
      W == null || W.orderedCells[T].addAttr(J, He);
    },
    setClassNameByHeaderCellIndex: (T, J) => {
      W == null || W.orderedCells[T].addClass(J);
    },
    removeClassNameByHeaderCellIndex: (T, J) => {
      W == null || W.orderedCells[T].removeClass(J);
    },
    notifySortAction: (T) => {
      t(26, I = T.columnId), t(27, y = T.sortValue), Ce(Ve(), "SMUIDataTable:sorted", T, void 0, !0);
    },
    getTableContainerHeight: () => A.getBoundingClientRect().height,
    getTableHeaderHeight: () => {
      const T = Ve().querySelector(".mdc-data-table__header-row");
      if (!T)
        throw new Error("MDCDataTable: Table header element not found.");
      return T.getBoundingClientRect().height;
    },
    setProgressIndicatorStyles: (T) => {
      t(13, we = T);
    },
    addClassAtRowIndex: (T, J) => {
      P == null || P.orderedRows[T].addClass(J);
    },
    getRowCount: () => {
      var T;
      return (T = P == null ? void 0 : P.rows.length) !== null && T !== void 0 ? T : 0;
    },
    getRowElements: () => {
      var T;
      return (T = P == null ? void 0 : P.rows.map((J) => J.element)) !== null && T !== void 0 ? T : [];
    },
    getRowIdAtIndex: (T) => {
      var J;
      return (J = P == null ? void 0 : P.orderedRows[T].rowId) !== null && J !== void 0 ? J : null;
    },
    getRowIndexByChildElement: (T) => {
      var J;
      return (J = P == null ? void 0 : P.orderedRows.map((He) => He.element).indexOf(f(T, ".mdc-data-table__row"))) !== null && J !== void 0 ? J : -1;
    },
    getSelectedRowCount: () => {
      var T;
      return (T = P == null ? void 0 : P.rows.filter((J) => J.selected).length) !== null && T !== void 0 ? T : 0;
    },
    isCheckboxAtRowIndexChecked: (T) => {
      const J = P == null ? void 0 : P.orderedRows[T].checkbox;
      return J ? J.checked : !1;
    },
    isHeaderRowCheckboxChecked: () => {
      const T = W == null ? void 0 : W.checkbox;
      return T ? T.checked : !1;
    },
    isRowsSelectable: () => !!Ve().querySelector(".mdc-data-table__row-checkbox") || !!Ve().querySelector(".mdc-data-table__header-row-checkbox"),
    notifyRowSelectionChanged: (T) => {
      const J = P == null ? void 0 : P.orderedRows[T.rowIndex];
      J && Ce(
        Ve(),
        "SMUIDataTable:rowSelectionChanged",
        {
          row: J.element,
          rowId: J.rowId,
          rowIndex: T.rowIndex,
          selected: T.selected
        },
        void 0,
        !0
      );
    },
    notifySelectedAll: () => {
      Ye(!1), Ce(Ve(), "SMUIDataTable:selectedAll", void 0, void 0, !0);
    },
    notifyUnselectedAll: () => {
      Ye(!1), Ce(Ve(), "SMUIDataTable:unselectedAll", void 0, void 0, !0);
    },
    notifyRowClick: (T) => {
      Ce(Ve(), "SMUIDataTable:rowClick", T, void 0, !0);
    },
    registerHeaderRowCheckbox: () => {
    },
    // Handled automatically.
    registerRowCheckboxes: () => {
    },
    // Handled automatically.
    removeClassAtRowIndex: (T, J) => {
      P == null || P.orderedRows[T].removeClass(J);
    },
    setAttributeAtRowIndex: (T, J, He) => {
      P == null || P.orderedRows[T].addAttr(J, He);
    },
    setHeaderRowCheckboxChecked: (T) => {
      const J = W == null ? void 0 : W.checkbox;
      J && (J.checked = T);
    },
    setHeaderRowCheckboxIndeterminate: Ye,
    setRowCheckboxCheckedAtIndex: (T, J) => {
      const He = P == null ? void 0 : P.orderedRows[T].checkbox;
      He && (He.checked = J);
    },
    setSortStatusLabelByHeaderCellIndex: (T, J) => {
    }
    // Handled automatically.
  })), H.init(), H.layout(), t(14, j = !0), () => {
    H.destroy();
  })), Lt(() => {
    ve && ve();
  });
  function De(T) {
    t(10, W = T.detail);
  }
  function Te(T) {
    t(11, P = T.detail);
  }
  function de(T) {
    H && H.handleRowCheckboxChange(T);
  }
  function Ze(T) {
    X[T] || t(12, X[T] = !0, X);
  }
  function je(T) {
    (!(T in X) || X[T]) && t(12, X[T] = !1, X);
  }
  function Ye(T) {
    const J = W == null ? void 0 : W.checkbox;
    J && (J.indeterminate = T);
  }
  function Je(T) {
    if (!H || !T.detail.target)
      return;
    const J = f(T.detail.target, ".mdc-data-table__header-cell--with-sort");
    J && Ct(J);
  }
  function Et(T) {
    if (!H || !T.detail.target)
      return;
    const J = f(T.detail.target, ".mdc-data-table__row");
    J && H && H.handleRowClick({ rowId: T.detail.rowId, row: J });
  }
  function Ct(T) {
    var J, He;
    const Ht = (J = W == null ? void 0 : W.orderedCells) !== null && J !== void 0 ? J : [], At = Ht.map((Dt) => Dt.element).indexOf(T);
    if (At === -1)
      return;
    const Gt = (He = Ht[At].columnId) !== null && He !== void 0 ? He : null;
    H.handleSortAction({ columnId: Gt, columnIndex: At, headerCell: T });
  }
  function It() {
    return H.layout();
  }
  function Ve() {
    return B;
  }
  function nt(T) {
    ne[T ? "unshift" : "push"](() => {
      A = T, t(9, A);
    });
  }
  function lt(T) {
    ne[T ? "unshift" : "push"](() => {
      B = T, t(8, B);
    });
  }
  const ot = () => H && j && H.layout(), it = () => t(10, W = void 0), yt = () => t(11, P = void 0), zt = () => H && H.handleHeaderRowCheckboxChange();
  return n.$$set = (T) => {
    e = q(q({}, e), Fe(T)), t(25, i = ge(e, l)), "use" in T && t(0, g = T.use), "class" in T && t(1, h = T.class), "stickyHeader" in T && t(2, p = T.stickyHeader), "sortable" in T && t(28, _ = T.sortable), "sort" in T && t(26, I = T.sort), "sortDirection" in T && t(27, y = T.sortDirection), "sortAscendingAriaLabel" in T && t(29, E = T.sortAscendingAriaLabel), "sortDescendingAriaLabel" in T && t(30, b = T.sortDescendingAriaLabel), "container$use" in T && t(3, Z = T.container$use), "container$class" in T && t(4, k = T.container$class), "table$use" in T && t(5, m = T.table$use), "table$class" in T && t(6, R = T.table$class), "$$scope" in T && t(35, u = T.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty[0] & /*sort*/
    67108864 && tn(O, a = I, a), n.$$.dirty[0] & /*sortDirection*/
    134217728 && tn(me, s = y, s), n.$$.dirty[0] & /*instance*/
    128 | n.$$.dirty[1] & /*previousProgressClosed, $progressClosed*/
    12 && c.progress && H && be !== r && (t(33, be = r), r ? H.hideProgress() : H.showProgress());
  }, [
    g,
    h,
    p,
    Z,
    k,
    m,
    R,
    H,
    B,
    A,
    W,
    P,
    X,
    we,
    j,
    d,
    S,
    O,
    me,
    De,
    Te,
    de,
    Je,
    Et,
    c,
    i,
    I,
    y,
    _,
    E,
    b,
    It,
    Ve,
    be,
    r,
    u,
    o,
    nt,
    lt,
    ot,
    it,
    yt,
    zt
  ];
}
class Pa extends $ {
  constructor(e) {
    super(), x(
      this,
      e,
      Ma,
      Da,
      Q,
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
function Ta(n) {
  let e, t, l, i, r;
  const s = (
    /*#slots*/
    n[10].default
  ), a = ae(
    s,
    n,
    /*$$scope*/
    n[9],
    null
  );
  let o = [
    /*$$restProps*/
    n[7]
  ], u = {};
  for (let c = 0; c < o.length; c += 1)
    u = q(u, o[c]);
  return {
    c() {
      e = F("thead"), a && a.c(), ie(e, u);
    },
    m(c, f) {
      M(c, e, f), a && a.m(e, null), n[11](e), l = !0, i || (r = [
        ee(t = Le.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        ee(
          /*forwardEvents*/
          n[3].call(null, e)
        ),
        Y(
          e,
          "SMUICheckbox:mount",
          /*handleCheckboxMount*/
          n[4]
        ),
        Y(
          e,
          "SMUICheckbox:unmount",
          /*SMUICheckbox_unmount_handler*/
          n[12]
        ),
        Y(
          e,
          "SMUIDataTableCell:mount",
          /*handleCellMount*/
          n[5]
        ),
        Y(
          e,
          "SMUIDataTableCell:unmount",
          /*handleCellUnmount*/
          n[6]
        )
      ], i = !0);
    },
    p(c, [f]) {
      a && a.p && (!l || f & /*$$scope*/
      512) && ue(
        a,
        s,
        c,
        /*$$scope*/
        c[9],
        l ? oe(
          s,
          /*$$scope*/
          c[9],
          f,
          null
        ) : ce(
          /*$$scope*/
          c[9]
        ),
        null
      ), ie(e, u = fe(o, [f & /*$$restProps*/
      128 && /*$$restProps*/
      c[7]])), t && pe(t.update) && f & /*use*/
      1 && t.update.call(
        null,
        /*use*/
        c[0]
      );
    },
    i(c) {
      l || (C(a, c), l = !0);
    },
    o(c) {
      w(a, c), l = !1;
    },
    d(c) {
      c && D(e), a && a.d(c), n[11](null), i = !1, he(r);
    }
  };
}
function Za(n, e, t) {
  const l = ["use", "getElement"];
  let i = ge(e, l), { $$slots: r = {}, $$scope: s } = e;
  const a = Be(Ee());
  let { use: o = [] } = e, u, c, f = [];
  const d = /* @__PURE__ */ new WeakMap();
  Me("SMUI:data-table:row:header", !0), Ne(() => {
    const b = {
      get cells() {
        return f;
      },
      get orderedCells() {
        return _();
      },
      get checkbox() {
        return c;
      }
    };
    return Ce(I(), "SMUIDataTableHeader:mount", b), () => {
      Ce(I(), "SMUIDataTableHeader:unmount", b);
    };
  });
  function g(b) {
    t(2, c = b.detail);
  }
  function h(b) {
    f.push(b.detail), d.set(b.detail.element, b.detail), b.stopPropagation();
  }
  function p(b) {
    const Z = f.indexOf(b.detail);
    Z !== -1 && (f.splice(Z, 1), f = f), d.delete(b.detail.element), b.stopPropagation();
  }
  function _() {
    return [...I().querySelectorAll(".mdc-data-table__header-cell")].map((b) => d.get(b)).filter((b) => b && b._smui_data_table_header_cell_accessor);
  }
  function I() {
    return u;
  }
  function y(b) {
    ne[b ? "unshift" : "push"](() => {
      u = b, t(1, u);
    });
  }
  const E = () => t(2, c = void 0);
  return n.$$set = (b) => {
    e = q(q({}, e), Fe(b)), t(7, i = ge(e, l)), "use" in b && t(0, o = b.use), "$$scope" in b && t(9, s = b.$$scope);
  }, [
    o,
    u,
    c,
    a,
    g,
    h,
    p,
    i,
    I,
    s,
    r,
    y,
    E
  ];
}
class Fa extends $ {
  constructor(e) {
    super(), x(this, e, Za, Ta, Q, { use: 0, getElement: 8 });
  }
  get getElement() {
    return this.$$.ctx[8];
  }
}
function Wa(n) {
  let e, t, l, i, r, s;
  const a = (
    /*#slots*/
    n[9].default
  ), o = ae(
    a,
    n,
    /*$$scope*/
    n[8],
    null
  );
  let u = [
    {
      class: t = te({
        [
          /*className*/
          n[1]
        ]: !0,
        "mdc-data-table__content": !0
      })
    },
    /*$$restProps*/
    n[6]
  ], c = {};
  for (let f = 0; f < u.length; f += 1)
    c = q(c, u[f]);
  return {
    c() {
      e = F("tbody"), o && o.c(), ie(e, c);
    },
    m(f, d) {
      M(f, e, d), o && o.m(e, null), n[10](e), i = !0, r || (s = [
        ee(l = Le.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        ee(
          /*forwardEvents*/
          n[3].call(null, e)
        ),
        Y(
          e,
          "SMUIDataTableRow:mount",
          /*handleRowMount*/
          n[4]
        ),
        Y(
          e,
          "SMUIDataTableRow:unmount",
          /*handleRowUnmount*/
          n[5]
        )
      ], r = !0);
    },
    p(f, [d]) {
      o && o.p && (!i || d & /*$$scope*/
      256) && ue(
        o,
        a,
        f,
        /*$$scope*/
        f[8],
        i ? oe(
          a,
          /*$$scope*/
          f[8],
          d,
          null
        ) : ce(
          /*$$scope*/
          f[8]
        ),
        null
      ), ie(e, c = fe(u, [
        (!i || d & /*className*/
        2 && t !== (t = te({
          [
            /*className*/
            f[1]
          ]: !0,
          "mdc-data-table__content": !0
        }))) && { class: t },
        d & /*$$restProps*/
        64 && /*$$restProps*/
        f[6]
      ])), l && pe(l.update) && d & /*use*/
      1 && l.update.call(
        null,
        /*use*/
        f[0]
      );
    },
    i(f) {
      i || (C(o, f), i = !0);
    },
    o(f) {
      w(o, f), i = !1;
    },
    d(f) {
      f && D(e), o && o.d(f), n[10](null), r = !1, he(s);
    }
  };
}
function Ba(n, e, t) {
  const l = ["use", "class", "getElement"];
  let i = ge(e, l), { $$slots: r = {}, $$scope: s } = e;
  const a = Be(Ee());
  let { use: o = [] } = e, { class: u = "" } = e, c, f = [];
  const d = /* @__PURE__ */ new WeakMap();
  Me("SMUI:data-table:row:header", !1), Ne(() => {
    const y = {
      get rows() {
        return f;
      },
      get orderedRows() {
        return p();
      }
    };
    return Ce(_(), "SMUIDataTableBody:mount", y), () => {
      Ce(_(), "SMUIDataTableBody:unmount", y);
    };
  });
  function g(y) {
    f.push(y.detail), d.set(y.detail.element, y.detail), y.stopPropagation();
  }
  function h(y) {
    const E = f.indexOf(y.detail);
    E !== -1 && (f.splice(E, 1), f = f), d.delete(y.detail.element), y.stopPropagation();
  }
  function p() {
    return [..._().querySelectorAll(".mdc-data-table__row")].map((y) => d.get(y)).filter((y) => y && y._smui_data_table_row_accessor);
  }
  function _() {
    return c;
  }
  function I(y) {
    ne[y ? "unshift" : "push"](() => {
      c = y, t(2, c);
    });
  }
  return n.$$set = (y) => {
    e = q(q({}, e), Fe(y)), t(6, i = ge(e, l)), "use" in y && t(0, o = y.use), "class" in y && t(1, u = y.class), "$$scope" in y && t(8, s = y.$$scope);
  }, [
    o,
    u,
    c,
    a,
    g,
    h,
    i,
    _,
    s,
    r,
    I
  ];
}
class Ua extends $ {
  constructor(e) {
    super(), x(this, e, Ba, Wa, Q, { use: 0, class: 1, getElement: 7 });
  }
  get getElement() {
    return this.$$.ctx[7];
  }
}
function Oa(n) {
  let e, t, l, i, r, s, a;
  const o = (
    /*#slots*/
    n[15].default
  ), u = ae(
    o,
    n,
    /*$$scope*/
    n[14],
    null
  );
  let c = [
    {
      class: t = te({
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
      "aria-selected": l = /*checkbox*/
      n[3] ? (
        /*checkbox*/
        n[3].checked ? "true" : "false"
      ) : void 0
    },
    /*internalAttrs*/
    n[5],
    /*$$restProps*/
    n[11]
  ], f = {};
  for (let d = 0; d < c.length; d += 1)
    f = q(f, c[d]);
  return {
    c() {
      e = F("tr"), u && u.c(), ie(e, f);
    },
    m(d, g) {
      M(d, e, g), u && u.m(e, null), n[16](e), r = !0, s || (a = [
        ee(i = Le.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        ee(
          /*forwardEvents*/
          n[6].call(null, e)
        ),
        Y(
          e,
          "click",
          /*click_handler*/
          n[17]
        ),
        Y(
          e,
          "SMUICheckbox:mount",
          /*handleCheckboxMount*/
          n[8]
        ),
        Y(
          e,
          "SMUICheckbox:unmount",
          /*SMUICheckbox_unmount_handler*/
          n[18]
        )
      ], s = !0);
    },
    p(d, [g]) {
      u && u.p && (!r || g & /*$$scope*/
      16384) && ue(
        u,
        o,
        d,
        /*$$scope*/
        d[14],
        r ? oe(
          o,
          /*$$scope*/
          d[14],
          g,
          null
        ) : ce(
          /*$$scope*/
          d[14]
        ),
        null
      ), ie(e, f = fe(c, [
        (!r || g & /*className, checkbox, internalClasses*/
        26 && t !== (t = te({
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
        (!r || g & /*checkbox*/
        8 && l !== (l = /*checkbox*/
        d[3] ? (
          /*checkbox*/
          d[3].checked ? "true" : "false"
        ) : void 0)) && { "aria-selected": l },
        g & /*internalAttrs*/
        32 && /*internalAttrs*/
        d[5],
        g & /*$$restProps*/
        2048 && /*$$restProps*/
        d[11]
      ])), i && pe(i.update) && g & /*use*/
      1 && i.update.call(
        null,
        /*use*/
        d[0]
      );
    },
    i(d) {
      r || (C(u, d), r = !0);
    },
    o(d) {
      w(u, d), r = !1;
    },
    d(d) {
      d && D(e), u && u.d(d), n[16](null), s = !1, he(a);
    }
  };
}
let Na = 0;
function Va(n, e, t) {
  const l = ["use", "class", "rowId", "getElement"];
  let i = ge(e, l), { $$slots: r = {}, $$scope: s } = e;
  const a = Be(Ee());
  let { use: o = [] } = e, { class: u = "" } = e, { rowId: c = "SMUI-data-table-row-" + Na++ } = e, f, d, g = {}, h = {}, p = Ue("SMUI:data-table:row:header");
  Ne(() => {
    const A = p ? {
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
        var W;
        return (W = d && d.checked) !== null && W !== void 0 ? W : !1;
      },
      addClass: I,
      removeClass: y,
      getAttr: E,
      addAttr: b
    } : {
      _smui_data_table_row_accessor: !0,
      get element() {
        return m();
      },
      get checkbox() {
        return d;
      },
      get rowId() {
        return c;
      },
      get selected() {
        var W;
        return (W = d && d.checked) !== null && W !== void 0 ? W : !1;
      },
      addClass: I,
      removeClass: y,
      getAttr: E,
      addAttr: b
    };
    return Ce(m(), "SMUIDataTableRow:mount", A), () => {
      Ce(m(), "SMUIDataTableRow:unmount", A);
    };
  });
  function _(A) {
    t(3, d = A.detail);
  }
  function I(A) {
    g[A] || t(4, g[A] = !0, g);
  }
  function y(A) {
    (!(A in g) || g[A]) && t(4, g[A] = !1, g);
  }
  function E(A) {
    var W;
    return A in h ? (W = h[A]) !== null && W !== void 0 ? W : null : m().getAttribute(A);
  }
  function b(A, W) {
    h[A] !== W && t(5, h[A] = W, h);
  }
  function Z(A) {
    Ce(m(), "SMUIDataTableHeader:click", A);
  }
  function k(A) {
    Ce(m(), "SMUIDataTableRow:click", { rowId: c, target: A.target });
  }
  function m() {
    return f;
  }
  function R(A) {
    ne[A ? "unshift" : "push"](() => {
      f = A, t(2, f);
    });
  }
  const B = (A) => p ? Z(A) : k(A), H = () => t(3, d = void 0);
  return n.$$set = (A) => {
    e = q(q({}, e), Fe(A)), t(11, i = ge(e, l)), "use" in A && t(0, o = A.use), "class" in A && t(1, u = A.class), "rowId" in A && t(12, c = A.rowId), "$$scope" in A && t(14, s = A.$$scope);
  }, [
    o,
    u,
    f,
    d,
    g,
    h,
    a,
    p,
    _,
    Z,
    k,
    i,
    c,
    m,
    s,
    r,
    R,
    B,
    H
  ];
}
class $l extends $ {
  constructor(e) {
    super(), x(this, e, Va, Oa, Q, {
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
function za(n) {
  let e, t, l, i, r, s;
  const a = (
    /*#slots*/
    n[22].default
  ), o = ae(
    a,
    n,
    /*$$scope*/
    n[21],
    null
  );
  let u = [
    {
      class: t = te({
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
  ], c = {};
  for (let f = 0; f < u.length; f += 1)
    c = q(c, u[f]);
  return {
    c() {
      e = F("td"), o && o.c(), ie(e, c);
    },
    m(f, d) {
      M(f, e, d), o && o.m(e, null), n[25](e), i = !0, r || (s = [
        ee(l = Le.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        ee(
          /*forwardEvents*/
          n[11].call(null, e)
        ),
        Y(
          e,
          "change",
          /*change_handler_1*/
          n[26]
        )
      ], r = !0);
    },
    p(f, d) {
      o && o.p && (!i || d & /*$$scope*/
      2097152) && ue(
        o,
        a,
        f,
        /*$$scope*/
        f[21],
        i ? oe(
          a,
          /*$$scope*/
          f[21],
          d,
          null
        ) : ce(
          /*$$scope*/
          f[21]
        ),
        null
      ), ie(e, c = fe(u, [
        (!i || d & /*className, numeric, checkbox, internalClasses*/
        142 && t !== (t = te({
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
        }))) && { class: t },
        d & /*internalAttrs*/
        256 && /*internalAttrs*/
        f[8],
        d & /*$$restProps*/
        524288 && /*$$restProps*/
        f[19]
      ])), l && pe(l.update) && d & /*use*/
      1 && l.update.call(
        null,
        /*use*/
        f[0]
      );
    },
    i(f) {
      i || (C(o, f), i = !0);
    },
    o(f) {
      w(o, f), i = !1;
    },
    d(f) {
      f && D(e), o && o.d(f), n[25](null), r = !1, he(s);
    }
  };
}
function ja(n) {
  let e, t, l, i, r, s, a, o, u;
  const c = [Xa, qa], f = [];
  function d(p, _) {
    return (
      /*sortable*/
      p[5] ? 0 : 1
    );
  }
  t = d(n), l = f[t] = c[t](n);
  let g = [
    {
      class: i = te({
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
      "aria-sort": r = /*sortable*/
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
  ], h = {};
  for (let p = 0; p < g.length; p += 1)
    h = q(h, g[p]);
  return {
    c() {
      e = F("th"), l.c(), ie(e, h);
    },
    m(p, _) {
      M(p, e, _), f[t].m(e, null), n[23](e), a = !0, o || (u = [
        ee(s = Le.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        ee(
          /*forwardEvents*/
          n[11].call(null, e)
        ),
        Y(
          e,
          "change",
          /*change_handler*/
          n[24]
        )
      ], o = !0);
    },
    p(p, _) {
      let I = t;
      t = d(p), t === I ? f[t].p(p, _) : (re(), w(f[I], 1, 1, () => {
        f[I] = null;
      }), se(), l = f[t], l ? l.p(p, _) : (l = f[t] = c[t](p), l.c()), C(l, 1), l.m(e, null)), ie(e, h = fe(g, [
        (!a || _ & /*className, numeric, checkbox, sortable, $sort, columnId, internalClasses*/
        702 && i !== (i = te({
          [
            /*className*/
            p[1]
          ]: !0,
          "mdc-data-table__header-cell": !0,
          "mdc-data-table__header-cell--numeric": (
            /*numeric*/
            p[2]
          ),
          "mdc-data-table__header-cell--checkbox": (
            /*checkbox*/
            p[3]
          ),
          "mdc-data-table__header-cell--with-sort": (
            /*sortable*/
            p[5]
          ),
          "mdc-data-table__header-cell--sorted": (
            /*sortable*/
            p[5] && /*$sort*/
            p[9] === /*columnId*/
            p[4]
          ),
          .../*internalClasses*/
          p[7]
        }))) && { class: i },
        { role: "columnheader" },
        { scope: "col" },
        (!a || _ & /*columnId*/
        16) && { "data-column-id": (
          /*columnId*/
          p[4]
        ) },
        (!a || _ & /*sortable, $sort, columnId, $sortDirection*/
        1584 && r !== (r = /*sortable*/
        p[5] ? (
          /*$sort*/
          p[9] === /*columnId*/
          p[4] ? (
            /*$sortDirection*/
            p[10]
          ) : "none"
        ) : void 0)) && { "aria-sort": r },
        _ & /*internalAttrs*/
        256 && /*internalAttrs*/
        p[8],
        _ & /*$$restProps*/
        524288 && /*$$restProps*/
        p[19]
      ])), s && pe(s.update) && _ & /*use*/
      1 && s.update.call(
        null,
        /*use*/
        p[0]
      );
    },
    i(p) {
      a || (C(l), a = !0);
    },
    o(p) {
      w(l), a = !1;
    },
    d(p) {
      p && D(e), f[t].d(), n[23](null), o = !1, he(u);
    }
  };
}
function qa(n) {
  let e;
  const t = (
    /*#slots*/
    n[22].default
  ), l = ae(
    t,
    n,
    /*$$scope*/
    n[21],
    null
  );
  return {
    c() {
      l && l.c();
    },
    m(i, r) {
      l && l.m(i, r), e = !0;
    },
    p(i, r) {
      l && l.p && (!e || r & /*$$scope*/
      2097152) && ue(
        l,
        t,
        i,
        /*$$scope*/
        i[21],
        e ? oe(
          t,
          /*$$scope*/
          i[21],
          r,
          null
        ) : ce(
          /*$$scope*/
          i[21]
        ),
        null
      );
    },
    i(i) {
      e || (C(l, i), e = !0);
    },
    o(i) {
      w(l, i), e = !1;
    },
    d(i) {
      l && l.d(i);
    }
  };
}
function Xa(n) {
  let e, t, l, i = (
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
  ), r, s, a;
  const o = (
    /*#slots*/
    n[22].default
  ), u = ae(
    o,
    n,
    /*$$scope*/
    n[21],
    null
  );
  return {
    c() {
      e = F("div"), u && u.c(), t = U(), l = F("div"), r = le(i), v(l, "class", "mdc-data-table__sort-status-label"), v(l, "aria-hidden", "true"), v(l, "id", s = /*columnId*/
      n[4] + "-status-label"), v(e, "class", "mdc-data-table__header-cell-wrapper");
    },
    m(c, f) {
      M(c, e, f), u && u.m(e, null), G(e, t), G(e, l), G(l, r), a = !0;
    },
    p(c, f) {
      u && u.p && (!a || f & /*$$scope*/
      2097152) && ue(
        u,
        o,
        c,
        /*$$scope*/
        c[21],
        a ? oe(
          o,
          /*$$scope*/
          c[21],
          f,
          null
        ) : ce(
          /*$$scope*/
          c[21]
        ),
        null
      ), (!a || f & /*$sort, columnId, $sortDirection*/
      1552) && i !== (i = /*$sort*/
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
      ) : "") + "") && _e(r, i), (!a || f & /*columnId*/
      16 && s !== (s = /*columnId*/
      c[4] + "-status-label")) && v(l, "id", s);
    },
    i(c) {
      a || (C(u, c), a = !0);
    },
    o(c) {
      w(u, c), a = !1;
    },
    d(c) {
      c && D(e), u && u.d(c);
    }
  };
}
function Ya(n) {
  let e, t, l, i;
  const r = [ja, za], s = [];
  function a(o, u) {
    return (
      /*header*/
      o[12] ? 0 : 1
    );
  }
  return e = a(n), t = s[e] = r[e](n), {
    c() {
      t.c(), l = Ae();
    },
    m(o, u) {
      s[e].m(o, u), M(o, l, u), i = !0;
    },
    p(o, [u]) {
      t.p(o, u);
    },
    i(o) {
      i || (C(t), i = !0);
    },
    o(o) {
      w(t), i = !1;
    },
    d(o) {
      o && D(l), s[e].d(o);
    }
  };
}
let Ja = 0;
function Qa(n, e, t) {
  const l = ["use", "class", "numeric", "checkbox", "columnId", "sortable", "getElement"];
  let i = ge(e, l), r, s, { $$slots: a = {}, $$scope: o } = e;
  const u = Be(Ee());
  let c = Ue("SMUI:data-table:row:header"), { use: f = [] } = e, { class: d = "" } = e, { numeric: g = !1 } = e, { checkbox: h = !1 } = e, { columnId: p = c ? "SMUI-data-table-column-" + Ja++ : "SMUI-data-table-unused" } = e, { sortable: _ = Ue("SMUI:data-table:sortable") } = e, I, y = {}, E = {}, b = Ue("SMUI:data-table:sort");
  dt(n, b, (S) => t(9, r = S));
  let Z = Ue("SMUI:data-table:sortDirection");
  dt(n, Z, (S) => t(10, s = S));
  let k = Ue("SMUI:data-table:sortAscendingAriaLabel"), m = Ue("SMUI:data-table:sortDescendingAriaLabel");
  _ && (Me("SMUI:label:context", "data-table:sortable-header-cell"), Me("SMUI:icon-button:context", "data-table:sortable-header-cell"), Me("SMUI:icon-button:aria-describedby", p + "-status-label")), Ne(() => {
    const S = c ? {
      _smui_data_table_header_cell_accessor: !0,
      get element() {
        return X();
      },
      get columnId() {
        return p;
      },
      addClass: R,
      removeClass: B,
      getAttr: H,
      addAttr: A
    } : {
      _smui_data_table_header_cell_accessor: !1,
      get element() {
        return X();
      },
      get columnId() {
      },
      addClass: R,
      removeClass: B,
      getAttr: H,
      addAttr: A
    };
    return Ce(X(), "SMUIDataTableCell:mount", S), () => {
      Ce(X(), "SMUIDataTableCell:unmount", S);
    };
  });
  function R(S) {
    y[S] || t(7, y[S] = !0, y);
  }
  function B(S) {
    (!(S in y) || y[S]) && t(7, y[S] = !1, y);
  }
  function H(S) {
    var O;
    return S in E ? (O = E[S]) !== null && O !== void 0 ? O : null : X().getAttribute(S);
  }
  function A(S, O) {
    E[S] !== O && t(8, E[S] = O, E);
  }
  function W(S) {
    Ce(X(), "SMUIDataTableHeaderCheckbox:change", S);
  }
  function P(S) {
    Ce(X(), "SMUIDataTableBodyCheckbox:change", S);
  }
  function X() {
    return I;
  }
  function we(S) {
    ne[S ? "unshift" : "push"](() => {
      I = S, t(6, I);
    });
  }
  const ke = (S) => h && W(S);
  function ve(S) {
    ne[S ? "unshift" : "push"](() => {
      I = S, t(6, I);
    });
  }
  const j = (S) => h && P(S);
  return n.$$set = (S) => {
    e = q(q({}, e), Fe(S)), t(19, i = ge(e, l)), "use" in S && t(0, f = S.use), "class" in S && t(1, d = S.class), "numeric" in S && t(2, g = S.numeric), "checkbox" in S && t(3, h = S.checkbox), "columnId" in S && t(4, p = S.columnId), "sortable" in S && t(5, _ = S.sortable), "$$scope" in S && t(21, o = S.$$scope);
  }, [
    f,
    d,
    g,
    h,
    p,
    _,
    I,
    y,
    E,
    r,
    s,
    u,
    c,
    b,
    Z,
    k,
    m,
    W,
    P,
    i,
    X,
    o,
    a,
    we,
    ke,
    ve,
    j
  ];
}
class Vt extends $ {
  constructor(e) {
    super(), x(this, e, Qa, Ya, Q, {
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
const { Boolean: ei } = Oi;
function il(n, e, t) {
  const l = n.slice();
  return l[17] = e[t], l[19] = t, l;
}
const Ka = (n) => ({ item: n & /*items*/
1 }), rl = (n) => ({ item: (
  /*item*/
  n[17]
) });
function sl(n, e, t) {
  const l = n.slice();
  return l[20] = e[t], l;
}
function al(n, e, t) {
  const l = n.slice();
  return l[20] = e[t], l;
}
function xa(n) {
  let e, t;
  return e = new Pa({
    props: {
      style: "width: 100%;",
      $$slots: { default: [uo] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      z(e.$$.fragment);
    },
    m(l, i) {
      N(e, l, i), t = !0;
    },
    p(l, i) {
      const r = {};
      i & /*$$scope, items, rowBg, hoveredRow, getRowId, slotHasActions, columns, headerBg*/
      17379 && (r.$$scope = { dirty: i, ctx: l }), e.$set(r);
    },
    i(l) {
      t || (C(e.$$.fragment, l), t = !0);
    },
    o(l) {
      w(e.$$.fragment, l), t = !1;
    },
    d(l) {
      V(e, l);
    }
  };
}
function $a(n) {
  let e, t;
  return {
    c() {
      e = F("p"), t = le(
        /*emptyText*/
        n[4]
      ), v(e, "class", "status svelte-1v7zd15");
    },
    m(l, i) {
      M(l, e, i), G(e, t);
    },
    p(l, i) {
      i & /*emptyText*/
      16 && _e(
        t,
        /*emptyText*/
        l[4]
      );
    },
    i: K,
    o: K,
    d(l) {
      l && D(e);
    }
  };
}
function eo(n) {
  let e, t;
  return {
    c() {
      e = F("p"), t = le(
        /*errorMsg*/
        n[3]
      ), v(e, "class", "status error svelte-1v7zd15");
    },
    m(l, i) {
      M(l, e, i), G(e, t);
    },
    p(l, i) {
      i & /*errorMsg*/
      8 && _e(
        t,
        /*errorMsg*/
        l[3]
      );
    },
    i: K,
    o: K,
    d(l) {
      l && D(e);
    }
  };
}
function to(n) {
  let e;
  return {
    c() {
      e = F("p"), e.textContent = "Loading…", v(e, "class", "status svelte-1v7zd15");
    },
    m(t, l) {
      M(t, e, l);
    },
    p: K,
    i: K,
    o: K,
    d(t) {
      t && D(e);
    }
  };
}
function no(n) {
  let e = (
    /*col*/
    n[20].header + ""
  ), t;
  return {
    c() {
      t = le(e);
    },
    m(l, i) {
      M(l, t, i);
    },
    p(l, i) {
      i & /*columns*/
      2 && e !== (e = /*col*/
      l[20].header + "") && _e(t, e);
    },
    d(l) {
      l && D(t);
    }
  };
}
function ol(n) {
  let e, t;
  return e = new Vt({
    props: {
      header: !0,
      style: [
        /*col*/
        n[20].width ? `width:${/*col*/
        n[20].width}` : "",
        /*headerBg*/
        n[6] ? `background-color:${/*headerBg*/
        n[6]}` : ""
      ].filter(Boolean).join(";"),
      $$slots: { default: [no] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      z(e.$$.fragment);
    },
    m(l, i) {
      N(e, l, i), t = !0;
    },
    p(l, i) {
      const r = {};
      i & /*columns, headerBg*/
      66 && (r.style = [
        /*col*/
        l[20].width ? `width:${/*col*/
        l[20].width}` : "",
        /*headerBg*/
        l[6] ? `background-color:${/*headerBg*/
        l[6]}` : ""
      ].filter(Boolean).join(";")), i & /*$$scope, columns*/
      16386 && (r.$$scope = { dirty: i, ctx: l }), e.$set(r);
    },
    i(l) {
      t || (C(e.$$.fragment, l), t = !0);
    },
    o(l) {
      w(e.$$.fragment, l), t = !1;
    },
    d(l) {
      V(e, l);
    }
  };
}
function ul(n) {
  let e, t;
  return e = new Vt({
    props: {
      header: !0,
      style: (
        /*headerBg*/
        n[6] ? `background-color:${/*headerBg*/
        n[6]}` : void 0
      )
    }
  }), {
    c() {
      z(e.$$.fragment);
    },
    m(l, i) {
      N(e, l, i), t = !0;
    },
    p(l, i) {
      const r = {};
      i & /*headerBg*/
      64 && (r.style = /*headerBg*/
      l[6] ? `background-color:${/*headerBg*/
      l[6]}` : void 0), e.$set(r);
    },
    i(l) {
      t || (C(e.$$.fragment, l), t = !0);
    },
    o(l) {
      w(e.$$.fragment, l), t = !1;
    },
    d(l) {
      V(e, l);
    }
  };
}
function lo(n) {
  let e, t, l, i = Ie(
    /*columns*/
    n[1]
  ), r = [];
  for (let o = 0; o < i.length; o += 1)
    r[o] = ol(al(n, i, o));
  const s = (o) => w(r[o], 1, 1, () => {
    r[o] = null;
  });
  let a = (
    /*slotHasActions*/
    n[9] && ul(n)
  );
  return {
    c() {
      for (let o = 0; o < r.length; o += 1)
        r[o].c();
      e = U(), a && a.c(), t = Ae();
    },
    m(o, u) {
      for (let c = 0; c < r.length; c += 1)
        r[c] && r[c].m(o, u);
      M(o, e, u), a && a.m(o, u), M(o, t, u), l = !0;
    },
    p(o, u) {
      if (u & /*columns, headerBg, Boolean*/
      66) {
        i = Ie(
          /*columns*/
          o[1]
        );
        let c;
        for (c = 0; c < i.length; c += 1) {
          const f = al(o, i, c);
          r[c] ? (r[c].p(f, u), C(r[c], 1)) : (r[c] = ol(f), r[c].c(), C(r[c], 1), r[c].m(e.parentNode, e));
        }
        for (re(), c = i.length; c < r.length; c += 1)
          s(c);
        se();
      }
      /*slotHasActions*/
      o[9] ? a ? (a.p(o, u), u & /*slotHasActions*/
      512 && C(a, 1)) : (a = ul(o), a.c(), C(a, 1), a.m(t.parentNode, t)) : a && (re(), w(a, 1, 1, () => {
        a = null;
      }), se());
    },
    i(o) {
      if (!l) {
        for (let u = 0; u < i.length; u += 1)
          C(r[u]);
        C(a), l = !0;
      }
    },
    o(o) {
      r = r.filter(ei);
      for (let u = 0; u < r.length; u += 1)
        w(r[u]);
      w(a), l = !1;
    },
    d(o) {
      o && (D(e), D(t)), ze(r, o), a && a.d(o);
    }
  };
}
function io(n) {
  let e, t;
  return e = new $l({
    props: {
      $$slots: { default: [lo] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      z(e.$$.fragment);
    },
    m(l, i) {
      N(e, l, i), t = !0;
    },
    p(l, i) {
      const r = {};
      i & /*$$scope, headerBg, slotHasActions, columns*/
      16962 && (r.$$scope = { dirty: i, ctx: l }), e.$set(r);
    },
    i(l) {
      t || (C(e.$$.fragment, l), t = !0);
    },
    o(l) {
      w(e.$$.fragment, l), t = !1;
    },
    d(l) {
      V(e, l);
    }
  };
}
function ro(n) {
  var l;
  let e = (
    /*item*/
    (((l = n[17]) == null ? void 0 : l[
      /*col*/
      n[20].key
    ]) ?? "") + ""
  ), t;
  return {
    c() {
      t = le(e);
    },
    m(i, r) {
      M(i, t, r);
    },
    p(i, r) {
      var s;
      r & /*items, columns*/
      3 && e !== (e = /*item*/
      (((s = i[17]) == null ? void 0 : s[
        /*col*/
        i[20].key
      ]) ?? "") + "") && _e(t, e);
    },
    d(i) {
      i && D(t);
    }
  };
}
function cl(n) {
  let e, t;
  return e = new Vt({
    props: {
      $$slots: { default: [ro] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      z(e.$$.fragment);
    },
    m(l, i) {
      N(e, l, i), t = !0;
    },
    p(l, i) {
      const r = {};
      i & /*$$scope, items, columns*/
      16387 && (r.$$scope = { dirty: i, ctx: l }), e.$set(r);
    },
    i(l) {
      t || (C(e.$$.fragment, l), t = !0);
    },
    o(l) {
      w(e.$$.fragment, l), t = !1;
    },
    d(l) {
      V(e, l);
    }
  };
}
function fl(n) {
  let e, t;
  return e = new Vt({
    props: {
      numeric: !0,
      $$slots: { default: [so] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      z(e.$$.fragment);
    },
    m(l, i) {
      N(e, l, i), t = !0;
    },
    p(l, i) {
      const r = {};
      i & /*$$scope, items*/
      16385 && (r.$$scope = { dirty: i, ctx: l }), e.$set(r);
    },
    i(l) {
      t || (C(e.$$.fragment, l), t = !0);
    },
    o(l) {
      w(e.$$.fragment, l), t = !1;
    },
    d(l) {
      V(e, l);
    }
  };
}
function so(n) {
  let e;
  const t = (
    /*#slots*/
    n[11].actions
  ), l = ae(
    t,
    n,
    /*$$scope*/
    n[14],
    rl
  );
  return {
    c() {
      l && l.c();
    },
    m(i, r) {
      l && l.m(i, r), e = !0;
    },
    p(i, r) {
      l && l.p && (!e || r & /*$$scope, items*/
      16385) && ue(
        l,
        t,
        i,
        /*$$scope*/
        i[14],
        e ? oe(
          t,
          /*$$scope*/
          i[14],
          r,
          Ka
        ) : ce(
          /*$$scope*/
          i[14]
        ),
        rl
      );
    },
    i(i) {
      e || (C(l, i), e = !0);
    },
    o(i) {
      w(l, i), e = !1;
    },
    d(i) {
      l && l.d(i);
    }
  };
}
function ao(n) {
  let e, t, l, i = Ie(
    /*columns*/
    n[1]
  ), r = [];
  for (let o = 0; o < i.length; o += 1)
    r[o] = cl(sl(n, i, o));
  const s = (o) => w(r[o], 1, 1, () => {
    r[o] = null;
  });
  let a = (
    /*slotHasActions*/
    n[9] && fl(n)
  );
  return {
    c() {
      for (let o = 0; o < r.length; o += 1)
        r[o].c();
      e = U(), a && a.c(), t = U();
    },
    m(o, u) {
      for (let c = 0; c < r.length; c += 1)
        r[c] && r[c].m(o, u);
      M(o, e, u), a && a.m(o, u), M(o, t, u), l = !0;
    },
    p(o, u) {
      if (u & /*items, columns*/
      3) {
        i = Ie(
          /*columns*/
          o[1]
        );
        let c;
        for (c = 0; c < i.length; c += 1) {
          const f = sl(o, i, c);
          r[c] ? (r[c].p(f, u), C(r[c], 1)) : (r[c] = cl(f), r[c].c(), C(r[c], 1), r[c].m(e.parentNode, e));
        }
        for (re(), c = i.length; c < r.length; c += 1)
          s(c);
        se();
      }
      /*slotHasActions*/
      o[9] ? a ? (a.p(o, u), u & /*slotHasActions*/
      512 && C(a, 1)) : (a = fl(o), a.c(), C(a, 1), a.m(t.parentNode, t)) : a && (re(), w(a, 1, 1, () => {
        a = null;
      }), se());
    },
    i(o) {
      if (!l) {
        for (let u = 0; u < i.length; u += 1)
          C(r[u]);
        C(a), l = !0;
      }
    },
    o(o) {
      r = r.filter(ei);
      for (let u = 0; u < r.length; u += 1)
        w(r[u]);
      w(a), l = !1;
    },
    d(o) {
      o && (D(e), D(t)), ze(r, o), a && a.d(o);
    }
  };
}
function dl(n, e) {
  let t, l, i;
  function r() {
    return (
      /*mouseenter_handler*/
      e[12](
        /*item*/
        e[17],
        /*i*/
        e[19]
      )
    );
  }
  return l = new $l({
    props: {
      style: [
        /*rowBg*/
        e[7] ? `background-color:${/*rowBg*/
        e[7]}` : "",
        /*hoveredRow*/
        e[8] === /*getRowId*/
        e[5](
          /*item*/
          e[17],
          /*i*/
          e[19]
        ) ? "background-color:#D9D800" : ""
      ].filter(Boolean).join(";"),
      $$slots: { default: [ao] },
      $$scope: { ctx: e }
    }
  }), l.$on("mouseenter", r), l.$on(
    "mouseleave",
    /*mouseleave_handler*/
    e[13]
  ), {
    key: n,
    first: null,
    c() {
      t = Ae(), z(l.$$.fragment), this.first = t;
    },
    m(s, a) {
      M(s, t, a), N(l, s, a), i = !0;
    },
    p(s, a) {
      e = s;
      const o = {};
      a & /*rowBg, hoveredRow, getRowId, items*/
      417 && (o.style = [
        /*rowBg*/
        e[7] ? `background-color:${/*rowBg*/
        e[7]}` : "",
        /*hoveredRow*/
        e[8] === /*getRowId*/
        e[5](
          /*item*/
          e[17],
          /*i*/
          e[19]
        ) ? "background-color:#D9D800" : ""
      ].filter(Boolean).join(";")), a & /*$$scope, items, slotHasActions, columns*/
      16899 && (o.$$scope = { dirty: a, ctx: e }), l.$set(o);
    },
    i(s) {
      i || (C(l.$$.fragment, s), i = !0);
    },
    o(s) {
      w(l.$$.fragment, s), i = !1;
    },
    d(s) {
      s && D(t), V(l, s);
    }
  };
}
function oo(n) {
  let e = [], t = /* @__PURE__ */ new Map(), l, i, r = Ie(
    /*items*/
    n[0]
  );
  const s = (a) => (
    /*getRowId*/
    a[5](
      /*item*/
      a[17],
      /*i*/
      a[19]
    )
  );
  for (let a = 0; a < r.length; a += 1) {
    let o = il(n, r, a), u = s(o);
    t.set(u, e[a] = dl(u, o));
  }
  return {
    c() {
      for (let a = 0; a < e.length; a += 1)
        e[a].c();
      l = Ae();
    },
    m(a, o) {
      for (let u = 0; u < e.length; u += 1)
        e[u] && e[u].m(a, o);
      M(a, l, o), i = !0;
    },
    p(a, o) {
      o & /*rowBg, hoveredRow, getRowId, items, Boolean, $$scope, slotHasActions, columns*/
      17315 && (r = Ie(
        /*items*/
        a[0]
      ), re(), e = Ki(e, o, s, 1, a, r, t, l.parentNode, Qi, dl, l, il), se());
    },
    i(a) {
      if (!i) {
        for (let o = 0; o < r.length; o += 1)
          C(e[o]);
        i = !0;
      }
    },
    o(a) {
      for (let o = 0; o < e.length; o += 1)
        w(e[o]);
      i = !1;
    },
    d(a) {
      a && D(l);
      for (let o = 0; o < e.length; o += 1)
        e[o].d(a);
    }
  };
}
function uo(n) {
  let e, t, l, i;
  return e = new Fa({
    props: {
      style: (
        /*headerBg*/
        n[6] ? `background-color:${/*headerBg*/
        n[6]}` : void 0
      ),
      $$slots: { default: [io] },
      $$scope: { ctx: n }
    }
  }), l = new Ua({
    props: {
      $$slots: { default: [oo] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      z(e.$$.fragment), t = U(), z(l.$$.fragment);
    },
    m(r, s) {
      N(e, r, s), M(r, t, s), N(l, r, s), i = !0;
    },
    p(r, s) {
      const a = {};
      s & /*headerBg*/
      64 && (a.style = /*headerBg*/
      r[6] ? `background-color:${/*headerBg*/
      r[6]}` : void 0), s & /*$$scope, headerBg, slotHasActions, columns*/
      16962 && (a.$$scope = { dirty: s, ctx: r }), e.$set(a);
      const o = {};
      s & /*$$scope, items, rowBg, hoveredRow, getRowId, slotHasActions, columns*/
      17315 && (o.$$scope = { dirty: s, ctx: r }), l.$set(o);
    },
    i(r) {
      i || (C(e.$$.fragment, r), C(l.$$.fragment, r), i = !0);
    },
    o(r) {
      w(e.$$.fragment, r), w(l.$$.fragment, r), i = !1;
    },
    d(r) {
      r && D(t), V(e, r), V(l, r);
    }
  };
}
function co(n) {
  let e, t, l, i;
  const r = [to, eo, $a, xa], s = [];
  function a(o, u) {
    return (
      /*loading*/
      o[2] ? 0 : (
        /*errorMsg*/
        o[3] ? 1 : !/*items*/
        o[0] || /*items*/
        o[0].length === 0 ? 2 : 3
      )
    );
  }
  return e = a(n), t = s[e] = r[e](n), {
    c() {
      t.c(), l = Ae();
    },
    m(o, u) {
      s[e].m(o, u), M(o, l, u), i = !0;
    },
    p(o, [u]) {
      let c = e;
      e = a(o), e === c ? s[e].p(o, u) : (re(), w(s[c], 1, 1, () => {
        s[c] = null;
      }), se(), t = s[e], t ? t.p(o, u) : (t = s[e] = r[e](o), t.c()), C(t, 1), t.m(l.parentNode, l));
    },
    i(o) {
      i || (C(t), i = !0);
    },
    o(o) {
      w(t), i = !1;
    },
    d(o) {
      o && D(l), s[e].d(o);
    }
  };
}
function fo(n, e, t) {
  let l, { $$slots: i = {}, $$scope: r } = e;
  const s = an(i);
  let { items: a = [] } = e, { columns: o = [] } = e, { loading: u = !1 } = e, { errorMsg: c = "" } = e, { emptyText: f = "Nothing to show." } = e, { getRowId: d = (b, Z) => {
    var k, m;
    return (m = b && ((k = b.id) !== null && k !== void 0 ? k : b.key)) !== null && m !== void 0 ? m : Z;
  } } = e, { headerBg: g = null } = e, { rowBg: h = null } = e, p = null;
  const _ = s;
  let { hasActions: I = !1 } = e;
  const y = (b, Z) => t(8, p = d(b, Z)), E = () => t(8, p = null);
  return n.$$set = (b) => {
    "items" in b && t(0, a = b.items), "columns" in b && t(1, o = b.columns), "loading" in b && t(2, u = b.loading), "errorMsg" in b && t(3, c = b.errorMsg), "emptyText" in b && t(4, f = b.emptyText), "getRowId" in b && t(5, d = b.getRowId), "headerBg" in b && t(6, g = b.headerBg), "rowBg" in b && t(7, h = b.rowBg), "hasActions" in b && t(10, I = b.hasActions), "$$scope" in b && t(14, r = b.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty & /*hasActions*/
    1024 && t(9, l = I || !!(_ != null && _.actions));
  }, [
    a,
    o,
    u,
    c,
    f,
    d,
    g,
    h,
    p,
    l,
    I,
    i,
    y,
    E,
    r
  ];
}
class go extends $ {
  constructor(e) {
    super(), x(this, e, fo, co, Q, {
      items: 0,
      columns: 1,
      loading: 2,
      errorMsg: 3,
      emptyText: 4,
      getRowId: 5,
      headerBg: 6,
      rowBg: 7,
      hasActions: 10
    });
  }
}
function gl(n, e, t) {
  const l = n.slice();
  return l[5] = e[t], l[7] = t, l;
}
function ml(n) {
  let e, t = (
    /*crumb*/
    n[5].secondaryLabel + ""
  ), l;
  return {
    c() {
      e = F("span"), l = le(t), v(e, "class", "secondary-label svelte-1ngm2be");
    },
    m(i, r) {
      M(i, e, r), G(e, l);
    },
    p(i, r) {
      r & /*breadcrumbs*/
      1 && t !== (t = /*crumb*/
      i[5].secondaryLabel + "") && _e(l, t);
    },
    d(i) {
      i && D(e);
    }
  };
}
function hl(n) {
  let e;
  return {
    c() {
      e = F("span"), e.textContent = "chevron_right", v(e, "class", "material-icons separator svelte-1ngm2be");
    },
    m(t, l) {
      M(t, e, l);
    },
    d(t) {
      t && D(e);
    }
  };
}
function pl(n) {
  let e, t, l, i = (
    /*crumb*/
    n[5].label + ""
  ), r, s, a, o, u, c, f, d, g = (
    /*crumb*/
    n[5].secondaryLabel && ml(n)
  );
  function h() {
    return (
      /*click_handler*/
      n[3](
        /*i*/
        n[7]
      )
    );
  }
  let p = (
    /*i*/
    n[7] < /*breadcrumbs*/
    n[0].length - 1 && hl()
  );
  return {
    c() {
      e = F("div"), t = F("span"), l = F("span"), r = le(i), s = U(), g && g.c(), u = U(), p && p.c(), c = U(), v(l, "class", "label svelte-1ngm2be"), v(t, "class", a = "breadcrumb " + /*crumb*/
      (n[5].enabled ? "" : "br-disabled") + " " + /*i*/
      (n[7] === /*activeIndex*/
      n[1] ? "br-active" : "") + " svelte-1ngm2be"), v(t, "aria-current", o = /*i*/
      n[7] === /*activeIndex*/
      n[1] ? "page" : void 0), v(e, "class", "breadcrumb-wrapper svelte-1ngm2be");
    },
    m(_, I) {
      M(_, e, I), G(e, t), G(t, l), G(l, r), G(t, s), g && g.m(t, null), G(e, u), p && p.m(e, null), G(e, c), f || (d = Y(t, "click", h), f = !0);
    },
    p(_, I) {
      n = _, I & /*breadcrumbs*/
      1 && i !== (i = /*crumb*/
      n[5].label + "") && _e(r, i), /*crumb*/
      n[5].secondaryLabel ? g ? g.p(n, I) : (g = ml(n), g.c(), g.m(t, null)) : g && (g.d(1), g = null), I & /*breadcrumbs, activeIndex*/
      3 && a !== (a = "breadcrumb " + /*crumb*/
      (n[5].enabled ? "" : "br-disabled") + " " + /*i*/
      (n[7] === /*activeIndex*/
      n[1] ? "br-active" : "") + " svelte-1ngm2be") && v(t, "class", a), I & /*activeIndex*/
      2 && o !== (o = /*i*/
      n[7] === /*activeIndex*/
      n[1] ? "page" : void 0) && v(t, "aria-current", o), /*i*/
      n[7] < /*breadcrumbs*/
      n[0].length - 1 ? p || (p = hl(), p.c(), p.m(e, c)) : p && (p.d(1), p = null);
    },
    d(_) {
      _ && D(e), g && g.d(), p && p.d(), f = !1, d();
    }
  };
}
function mo(n) {
  let e, t = Ie(
    /*breadcrumbs*/
    n[0]
  ), l = [];
  for (let i = 0; i < t.length; i += 1)
    l[i] = pl(gl(n, t, i));
  return {
    c() {
      e = F("div");
      for (let i = 0; i < l.length; i += 1)
        l[i].c();
      v(e, "class", "oscd-breadcrumbs svelte-1ngm2be");
    },
    m(i, r) {
      M(i, e, r);
      for (let s = 0; s < l.length; s += 1)
        l[s] && l[s].m(e, null);
    },
    p(i, [r]) {
      if (r & /*breadcrumbs, activeIndex, undefined, handleClick*/
      7) {
        t = Ie(
          /*breadcrumbs*/
          i[0]
        );
        let s;
        for (s = 0; s < t.length; s += 1) {
          const a = gl(i, t, s);
          l[s] ? l[s].p(a, r) : (l[s] = pl(a), l[s].c(), l[s].m(e, null));
        }
        for (; s < l.length; s += 1)
          l[s].d(1);
        l.length = t.length;
      }
    },
    i: K,
    o: K,
    d(i) {
      i && D(e), ze(l, i);
    }
  };
}
function ho(n, e, t) {
  let { breadcrumbs: l = [] } = e, { activeIndex: i = 0 } = e;
  const r = Xe(), s = (o) => {
    l[o].enabled && o !== i && r("click", { index: o });
  }, a = (o) => s(o);
  return n.$$set = (o) => {
    "breadcrumbs" in o && t(0, l = o.breadcrumbs), "activeIndex" in o && t(1, i = o.activeIndex);
  }, [l, i, s, a];
}
class on extends $ {
  constructor(e) {
    super(), x(this, e, ho, mo, Q, { breadcrumbs: 0, activeIndex: 1 });
  }
}
const po = Object.freeze({
  // This flag exists as a workaround for issue 454 (basically a browser bug) - seems like these rect values take time to update when in grid layout. Setting it to true can cause strange behaviour in the REPL for non-grid zones, see issue 470
  USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT: "USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT"
});
po.USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT + "";
const bo = mt([]);
bo.subscribe;
function _o(n) {
  let e;
  return {
    c() {
      e = le("CONTINUE");
    },
    m(t, l) {
      M(t, e, l);
    },
    d(t) {
      t && D(e);
    }
  };
}
function vo(n) {
  let e;
  return {
    c() {
      e = le("ADD NEW PROCESS");
    },
    m(t, l) {
      M(t, e, l);
    },
    d(t) {
      t && D(e);
    }
  };
}
function Co(n) {
  let e, t, l, i, r, s, a, o;
  t = new xs({
    props: {
      svgStyles: "fill: #002B37; width: 100%; height: 100%;"
    }
  });
  function u() {
    return (
      /*click_handler_1*/
      n[13](
        /*item*/
        n[16]
      )
    );
  }
  r = new ua({
    props: {
      svgStyles: "fill: #002B37; width: 100%; height: 100%;"
    }
  });
  function c() {
    return (
      /*click_handler_2*/
      n[14](
        /*item*/
        n[16]
      )
    );
  }
  return {
    c() {
      e = F("button"), z(t.$$.fragment), l = U(), i = F("button"), z(r.$$.fragment), v(e, "type", "button"), v(e, "class", "icon svelte-wxofq2"), v(e, "aria-label", "View process"), v(i, "type", "button"), v(i, "class", "icon svelte-wxofq2"), v(i, "aria-label", "Start process");
    },
    m(f, d) {
      M(f, e, d), N(t, e, null), M(f, l, d), M(f, i, d), N(r, i, null), s = !0, a || (o = [
        Y(e, "click", u),
        Y(i, "click", c)
      ], a = !0);
    },
    p(f, d) {
      n = f;
    },
    i(f) {
      s || (C(t.$$.fragment, f), C(r.$$.fragment, f), s = !0);
    },
    o(f) {
      w(t.$$.fragment, f), w(r.$$.fragment, f), s = !1;
    },
    d(f) {
      f && (D(e), D(l), D(i)), V(t), V(r), a = !1, he(o);
    }
  };
}
function Io(n) {
  let e, t, l, i, r, s, a, o, u, c, f, d, g, h, p, _, I;
  i = new ga({}), o = new bt({
    props: {
      variant: "raised",
      style: "--mdc-theme-primary: #ffffff; --mdc-theme-on-primary: #004552",
      $$slots: { default: [_o] },
      $$scope: { ctx: n }
    }
  }), o.$on(
    "click",
    /*click_handler*/
    n[11]
  );
  function y(b) {
    n[12](b);
  }
  let E = {
    variant: "outlined",
    label: "Search Processes"
  };
  return (
    /*searchQuery*/
    n[2] !== void 0 && (E.value = /*searchQuery*/
    n[2]), f = new Ts({ props: E }), ne.push(() => $e(f, "value", y)), h = new bt({
      props: {
        variant: "raised",
        style: "--mdc-theme-primary: #004552; --mdc-theme-on-primary: #ffffff",
        $$slots: { default: [vo] },
        $$scope: { ctx: n }
      }
    }), h.$on(
      "click",
      /*handleAddNew*/
      n[7]
    ), _ = new go({
      props: {
        items: (
          /*filteredRows*/
          n[3]
        ),
        columns: (
          /*columns*/
          n[6]
        ),
        loading: (
          /*loading*/
          n[0]
        ),
        errorMsg: (
          /*errorMsg*/
          n[1]
        ),
        emptyText: "No processes available.",
        hasActions: !0,
        headerBg: "#DAE3E6",
        rowBg: "#ffffff",
        $$slots: {
          actions: [
            Co,
            ({ item: b }) => ({ 16: b }),
            ({ item: b }) => b ? 65536 : 0
          ]
        },
        $$scope: { ctx: n }
      }
    }), {
      c() {
        e = F("div"), t = F("div"), l = F("div"), z(i.$$.fragment), r = U(), s = F("span"), s.textContent = `A process “Process Name C” has already been started for the ---.scd.
        Would you like to continue where you left off?`, a = U(), z(o.$$.fragment), u = U(), c = F("div"), z(f.$$.fragment), g = U(), z(h.$$.fragment), p = U(), z(_.$$.fragment), v(s, "class", "svelte-wxofq2"), v(l, "class", "process-banner__info svelte-wxofq2"), v(t, "class", "process-banner svelte-wxofq2"), v(c, "class", "process-toolbar svelte-wxofq2"), v(e, "class", "processes svelte-wxofq2");
      },
      m(b, Z) {
        M(b, e, Z), G(e, t), G(t, l), N(i, l, null), G(l, r), G(l, s), G(t, a), N(o, t, null), G(e, u), G(e, c), N(f, c, null), G(c, g), N(h, c, null), G(e, p), N(_, e, null), I = !0;
      },
      p(b, [Z]) {
        const k = {};
        Z & /*$$scope*/
        131072 && (k.$$scope = { dirty: Z, ctx: b }), o.$set(k);
        const m = {};
        !d && Z & /*searchQuery*/
        4 && (d = !0, m.value = /*searchQuery*/
        b[2], xe(() => d = !1)), f.$set(m);
        const R = {};
        Z & /*$$scope*/
        131072 && (R.$$scope = { dirty: Z, ctx: b }), h.$set(R);
        const B = {};
        Z & /*filteredRows*/
        8 && (B.items = /*filteredRows*/
        b[3]), Z & /*loading*/
        1 && (B.loading = /*loading*/
        b[0]), Z & /*errorMsg*/
        2 && (B.errorMsg = /*errorMsg*/
        b[1]), Z & /*$$scope, item*/
        196608 && (B.$$scope = { dirty: Z, ctx: b }), _.$set(B);
      },
      i(b) {
        I || (C(i.$$.fragment, b), C(o.$$.fragment, b), C(f.$$.fragment, b), C(h.$$.fragment, b), C(_.$$.fragment, b), I = !0);
      },
      o(b) {
        w(i.$$.fragment, b), w(o.$$.fragment, b), w(f.$$.fragment, b), w(h.$$.fragment, b), w(_.$$.fragment, b), I = !1;
      },
      d(b) {
        b && D(e), V(i), V(o), V(f), V(h), V(_);
      }
    }
  );
}
function yo(n, e, t) {
  let l, i, r, { processes: s = [] } = e, { loading: a = !1 } = e, { errorMsg: o = "" } = e;
  const u = Xe(), c = (E) => u("start", E), f = (E) => u("view", E);
  let d = "";
  const g = [
    { key: "displayName", header: "Name" },
    {
      key: "description",
      header: "Description"
    }
  ], h = () => {
    console.log("Add new process clicked");
  }, p = () => console.log("Continue Process");
  function _(E) {
    d = E, t(2, d);
  }
  const I = (E) => f(E), y = (E) => c(E);
  return n.$$set = (E) => {
    "processes" in E && t(8, s = E.processes), "loading" in E && t(0, a = E.loading), "errorMsg" in E && t(1, o = E.errorMsg);
  }, n.$$.update = () => {
    n.$$.dirty & /*searchQuery*/
    4 && t(10, l = d.trim().toLowerCase()), n.$$.dirty & /*processes*/
    256 && t(9, i = (s ?? []).map((E) => Object.assign(Object.assign({}, E), { displayName: E.name || E.id }))), n.$$.dirty & /*searchLower, rows*/
    1536 && t(3, r = l ? i.filter((E) => {
      var b;
      return ((b = E.displayName) !== null && b !== void 0 ? b : "").toLowerCase().includes(l);
    }) : i);
  }, [
    a,
    o,
    d,
    r,
    c,
    f,
    g,
    h,
    s,
    i,
    l,
    p,
    _,
    I,
    y
  ];
}
class Ao extends $ {
  constructor(e) {
    super(), x(this, e, yo, Io, Q, { processes: 8, loading: 0, errorMsg: 1 });
  }
}
function bl(n, e, t) {
  const l = n.slice();
  return l[7] = e[t], l[9] = t, l;
}
function ko(n) {
  let e = (
    /*i*/
    n[9] + 1 + ""
  ), t;
  return {
    c() {
      t = le(e);
    },
    m(l, i) {
      M(l, t, i);
    },
    p: K,
    i: K,
    o: K,
    d(l) {
      l && D(t);
    }
  };
}
function wo(n) {
  let e, t, l, i;
  const r = [Eo, Lo, Ro, So], s = [];
  function a(o, u) {
    return (
      /*status*/
      o[3][
        /*item*/
        o[7].id
      ] === "check" ? 0 : (
        /*status*/
        o[3][
          /*item*/
          o[7].id
        ] === "error" ? 1 : (
          /*status*/
          o[3][
            /*item*/
            o[7].id
          ] === "warning" ? 2 : 3
        )
      )
    );
  }
  return e = a(n), t = s[e] = r[e](n), {
    c() {
      t.c(), l = Ae();
    },
    m(o, u) {
      s[e].m(o, u), M(o, l, u), i = !0;
    },
    p(o, u) {
      let c = e;
      e = a(o), e !== c && (re(), w(s[c], 1, 1, () => {
        s[c] = null;
      }), se(), t = s[e], t || (t = s[e] = r[e](o), t.c()), C(t, 1), t.m(l.parentNode, l));
    },
    i(o) {
      i || (C(t), i = !0);
    },
    o(o) {
      w(t), i = !1;
    },
    d(o) {
      o && D(l), s[e].d(o);
    }
  };
}
function So(n) {
  let e = (
    /*i*/
    n[9] + 1 + ""
  ), t;
  return {
    c() {
      t = le(e);
    },
    m(l, i) {
      M(l, t, i);
    },
    i: K,
    o: K,
    d(l) {
      l && D(t);
    }
  };
}
function Ro(n) {
  let e, t;
  return e = new ra({}), {
    c() {
      z(e.$$.fragment);
    },
    m(l, i) {
      N(e, l, i), t = !0;
    },
    i(l) {
      t || (C(e.$$.fragment, l), t = !0);
    },
    o(l) {
      w(e.$$.fragment, l), t = !1;
    },
    d(l) {
      V(e, l);
    }
  };
}
function Lo(n) {
  let e, t;
  return e = new na({}), {
    c() {
      z(e.$$.fragment);
    },
    m(l, i) {
      N(e, l, i), t = !0;
    },
    i(l) {
      t || (C(e.$$.fragment, l), t = !0);
    },
    o(l) {
      w(e.$$.fragment, l), t = !1;
    },
    d(l) {
      V(e, l);
    }
  };
}
function Eo(n) {
  let e, t;
  return e = new ea({}), {
    c() {
      z(e.$$.fragment);
    },
    m(l, i) {
      N(e, l, i), t = !0;
    },
    i(l) {
      t || (C(e.$$.fragment, l), t = !0);
    },
    o(l) {
      w(e.$$.fragment, l), t = !1;
    },
    d(l) {
      V(e, l);
    }
  };
}
function Ho(n) {
  let e, t, l, i, r, s, a, o;
  const u = [wo, ko], c = [];
  function f(g, h) {
    return h & /*visited, items, currentId*/
    7 && (t = null), t == null && (t = !!/*visited*/
    (g[1].includes(
      /*item*/
      g[7].id
    ) && /*item*/
    g[7].id !== /*currentId*/
    g[2])), t ? 0 : 1;
  }
  l = f(n, -1), i = c[l] = u[l](n);
  function d() {
    return (
      /*click_handler*/
      n[6](
        /*item*/
        n[7]
      )
    );
  }
  return {
    c() {
      e = F("button"), i.c(), v(e, "aria-current", r = /*item*/
      n[7].id === /*currentId*/
      n[2] ? "step" : void 0), qe(e, "not-visited", !/*visited*/
      n[1].includes(
        /*item*/
        n[7].id
      )), qe(
        e,
        "current",
        /*item*/
        n[7].id === /*currentId*/
        n[2]
      ), qe(
        e,
        "visited",
        /*visited*/
        n[1].includes(
          /*item*/
          n[7].id
        ) && /*item*/
        n[7].id !== /*currentId*/
        n[2]
      );
    },
    m(g, h) {
      M(g, e, h), c[l].m(e, null), s = !0, a || (o = Y(e, "click", d), a = !0);
    },
    p(g, h) {
      n = g;
      let p = l;
      l = f(n, h), l === p ? c[l].p(n, h) : (re(), w(c[p], 1, 1, () => {
        c[p] = null;
      }), se(), i = c[l], i ? i.p(n, h) : (i = c[l] = u[l](n), i.c()), C(i, 1), i.m(e, null)), (!s || h & /*items, currentId*/
      5 && r !== (r = /*item*/
      n[7].id === /*currentId*/
      n[2] ? "step" : void 0)) && v(e, "aria-current", r), (!s || h & /*visited, items*/
      3) && qe(e, "not-visited", !/*visited*/
      n[1].includes(
        /*item*/
        n[7].id
      )), (!s || h & /*items, currentId*/
      5) && qe(
        e,
        "current",
        /*item*/
        n[7].id === /*currentId*/
        n[2]
      ), (!s || h & /*visited, items, currentId*/
      7) && qe(
        e,
        "visited",
        /*visited*/
        n[1].includes(
          /*item*/
          n[7].id
        ) && /*item*/
        n[7].id !== /*currentId*/
        n[2]
      );
    },
    i(g) {
      s || (C(i), s = !0);
    },
    o(g) {
      w(i), s = !1;
    },
    d(g) {
      g && D(e), c[l].d(), a = !1, o();
    }
  };
}
function _l(n) {
  let e;
  return {
    c() {
      e = F("div"), v(e, "class", "step-line svelte-swalin"), v(e, "aria-hidden", "true");
    },
    m(t, l) {
      M(t, e, l);
    },
    d(t) {
      t && D(e);
    }
  };
}
function vl(n) {
  let e, t, l, i, r = (
    /*item*/
    n[7].label + ""
  ), s, a, o, u;
  t = new La({
    props: {
      content: (
        /*tooltipMap*/
        n[4][
          /*item*/
          n[7].id
        ] ?? ""
      ),
      side: "bottom",
      $$slots: { default: [Ho] },
      $$scope: { ctx: n }
    }
  });
  let c = (
    /*i*/
    n[9] < /*items*/
    n[0].length - 1 && _l()
  );
  return {
    c() {
      e = F("div"), z(t.$$.fragment), l = U(), i = F("p"), s = le(r), a = U(), c && c.c(), o = Ae(), v(e, "class", "step svelte-swalin");
    },
    m(f, d) {
      M(f, e, d), N(t, e, null), G(e, l), G(e, i), G(i, s), M(f, a, d), c && c.m(f, d), M(f, o, d), u = !0;
    },
    p(f, d) {
      const g = {};
      d & /*tooltipMap, items*/
      17 && (g.content = /*tooltipMap*/
      f[4][
        /*item*/
        f[7].id
      ] ?? ""), d & /*$$scope, items, currentId, visited, status*/
      1039 && (g.$$scope = { dirty: d, ctx: f }), t.$set(g), (!u || d & /*items*/
      1) && r !== (r = /*item*/
      f[7].label + "") && _e(s, r), /*i*/
      f[9] < /*items*/
      f[0].length - 1 ? c || (c = _l(), c.c(), c.m(o.parentNode, o)) : c && (c.d(1), c = null);
    },
    i(f) {
      u || (C(t.$$.fragment, f), u = !0);
    },
    o(f) {
      w(t.$$.fragment, f), u = !1;
    },
    d(f) {
      f && (D(e), D(a), D(o)), V(t), c && c.d(f);
    }
  };
}
function Go(n) {
  let e, t, l = Ie(
    /*items*/
    n[0]
  ), i = [];
  for (let s = 0; s < l.length; s += 1)
    i[s] = vl(bl(n, l, s));
  const r = (s) => w(i[s], 1, 1, () => {
    i[s] = null;
  });
  return {
    c() {
      e = F("div");
      for (let s = 0; s < i.length; s += 1)
        i[s].c();
      v(e, "class", "steps svelte-swalin");
    },
    m(s, a) {
      M(s, e, a);
      for (let o = 0; o < i.length; o += 1)
        i[o] && i[o].m(e, null);
      t = !0;
    },
    p(s, [a]) {
      if (a & /*items, tooltipMap, currentId, undefined, visited, dispatch, status*/
      63) {
        l = Ie(
          /*items*/
          s[0]
        );
        let o;
        for (o = 0; o < l.length; o += 1) {
          const u = bl(s, l, o);
          i[o] ? (i[o].p(u, a), C(i[o], 1)) : (i[o] = vl(u), i[o].c(), C(i[o], 1), i[o].m(e, null));
        }
        for (re(), o = l.length; o < i.length; o += 1)
          r(o);
        se();
      }
    },
    i(s) {
      if (!t) {
        for (let a = 0; a < l.length; a += 1)
          C(i[a]);
        t = !0;
      }
    },
    o(s) {
      i = i.filter(Boolean);
      for (let a = 0; a < i.length; a += 1)
        w(i[a]);
      t = !1;
    },
    d(s) {
      s && D(e), ze(i, s);
    }
  };
}
function Do(n, e, t) {
  let { items: l = [] } = e, { visited: i = [] } = e, { currentId: r = null } = e, { status: s = {} } = e, { tooltipMap: a = {} } = e;
  const o = Xe(), u = (c) => o("select", c.id);
  return n.$$set = (c) => {
    "items" in c && t(0, l = c.items), "visited" in c && t(1, i = c.visited), "currentId" in c && t(2, r = c.currentId), "status" in c && t(3, s = c.status), "tooltipMap" in c && t(4, a = c.tooltipMap);
  }, [l, i, r, s, a, o, u];
}
class ti extends $ {
  constructor(e) {
    super(), x(this, e, Do, Go, Q, {
      items: 0,
      visited: 1,
      currentId: 2,
      status: 3,
      tooltipMap: 4
    });
  }
}
function Mo(n) {
  let e, t;
  return e = new ti({
    props: {
      items: (
        /*items*/
        n[2]
      ),
      visited: (
        /*visited*/
        n[1]
      ),
      currentId: (
        /*currentId*/
        n[0]
      ),
      status: {},
      tooltipMap: {}
    }
  }), e.$on(
    "select",
    /*onSelect*/
    n[3]
  ), {
    c() {
      z(e.$$.fragment);
    },
    m(l, i) {
      N(e, l, i), t = !0;
    },
    p(l, [i]) {
      const r = {};
      i & /*visited*/
      2 && (r.visited = /*visited*/
      l[1]), i & /*currentId*/
      1 && (r.currentId = /*currentId*/
      l[0]), e.$set(r);
    },
    i(l) {
      t || (C(e.$$.fragment, l), t = !0);
    },
    o(l) {
      w(e.$$.fragment, l), t = !1;
    },
    d(l) {
      V(e, l);
    }
  };
}
function Po(n, e, t) {
  const l = Xe(), i = [
    {
      id: "process-definition",
      label: "Process Definition"
    },
    {
      id: "validator-configuration",
      label: "Validator Configuration"
    }
  ];
  let { currentId: r = null } = e, { visited: s = [] } = e;
  const a = (o) => l("select", o.detail);
  return n.$$set = (o) => {
    "currentId" in o && t(0, r = o.currentId), "visited" in o && t(1, s = o.visited);
  }, [r, s, i, a];
}
class To extends $ {
  constructor(e) {
    super(), x(this, e, Po, Mo, Q, { currentId: 0, visited: 1 });
  }
}
function Zo(n) {
  let e, t, l, i, r, s, a, o, u, c, f;
  return l = new ba({}), {
    c() {
      e = F("div"), t = F("button"), z(l.$$.fragment), i = U(), r = F("span"), r.textContent = "Back to Overview", s = U(), a = F("span"), o = le(
        /*title*/
        n[0]
      ), v(a, "class", "back-container__title svelte-1p6ln66"), v(t, "type", "button"), v(t, "class", "back-container svelte-1p6ln66"), Yt(e, "display", "flex"), Yt(e, "align-items", "center"), Yt(e, "gap", "0.5rem");
    },
    m(d, g) {
      M(d, e, g), G(e, t), N(l, t, null), G(t, i), G(t, r), G(t, s), G(t, a), G(a, o), u = !0, c || (f = Y(
        t,
        "click",
        /*onBack*/
        n[1]
      ), c = !0);
    },
    p(d, [g]) {
      (!u || g & /*title*/
      1) && _e(
        o,
        /*title*/
        d[0]
      );
    },
    i(d) {
      u || (C(l.$$.fragment, d), u = !0);
    },
    o(d) {
      w(l.$$.fragment, d), u = !1;
    },
    d(d) {
      d && D(e), V(l), c = !1, f();
    }
  };
}
function Fo(n, e, t) {
  let { title: l = "Engineering Wizard" } = e;
  const i = Xe();
  function r() {
    i("back");
  }
  return n.$$set = (s) => {
    "title" in s && t(0, l = s.title);
  }, [l, r];
}
class ni extends $ {
  constructor(e) {
    super(), x(this, e, Fo, Zo, Q, { title: 0 });
  }
}
function Cl(n, e, t) {
  const l = n.slice();
  return l[3] = e[t], l[5] = t, l;
}
function Il(n, e, t) {
  const l = n.slice();
  return l[6] = e[t], l;
}
function Wo(n) {
  let e;
  return {
    c() {
      e = le("EDIT");
    },
    m(t, l) {
      M(t, e, l);
    },
    d(t) {
      t && D(e);
    }
  };
}
function yl(n) {
  let e, t, l = (
    /*plugin*/
    n[6].name + ""
  ), i, r;
  return {
    c() {
      e = F("div"), t = F("span"), i = le(l), r = U(), v(t, "class", "plugin-item__name svelte-siq5x1"), v(e, "class", "plugin-item svelte-siq5x1");
    },
    m(s, a) {
      M(s, e, a), G(e, t), G(t, i), G(e, r);
    },
    p(s, a) {
      a & /*pluginGroups*/
      1 && l !== (l = /*plugin*/
      s[6].name + "") && _e(i, l);
    },
    d(s) {
      s && D(e);
    }
  };
}
function Al(n) {
  let e, t, l, i, r, s = (
    /*group*/
    n[3].title + ""
  ), a, o, u, c, f = Ie(
    /*group*/
    n[3].plugins
  ), d = [];
  for (let g = 0; g < f.length; g += 1)
    d[g] = yl(Il(n, f, g));
  return {
    c() {
      e = F("div"), t = F("div"), l = F("span"), l.textContent = `${/*i*/
      n[5] + 1}.`, i = U(), r = F("span"), a = le(s), o = U(), u = F("div");
      for (let g = 0; g < d.length; g += 1)
        d[g].c();
      c = U(), v(l, "class", "plugin__index svelte-siq5x1"), v(r, "class", "plugin__title svelte-siq5x1"), v(t, "class", "plugin__group-title svelte-siq5x1"), v(u, "class", "plugin__items svelte-siq5x1"), v(e, "class", "plugin svelte-siq5x1");
    },
    m(g, h) {
      M(g, e, h), G(e, t), G(t, l), G(t, i), G(t, r), G(r, a), G(e, o), G(e, u);
      for (let p = 0; p < d.length; p += 1)
        d[p] && d[p].m(u, null);
      G(e, c);
    },
    p(g, h) {
      if (h & /*pluginGroups*/
      1 && s !== (s = /*group*/
      g[3].title + "") && _e(a, s), h & /*pluginGroups*/
      1) {
        f = Ie(
          /*group*/
          g[3].plugins
        );
        let p;
        for (p = 0; p < f.length; p += 1) {
          const _ = Il(g, f, p);
          d[p] ? d[p].p(_, h) : (d[p] = yl(_), d[p].c(), d[p].m(u, null));
        }
        for (; p < d.length; p += 1)
          d[p].d(1);
        d.length = f.length;
      }
    },
    d(g) {
      g && D(e), ze(d, g);
    }
  };
}
function Bo(n) {
  let e, t, l, i, r, s, a;
  r = new bt({
    props: {
      variant: "raised",
      style: "--mdc-theme-primary: var(--on-brand); --mdc-theme-on-primary: var(--brand)",
      "aria-label": "Edit process",
      $$slots: { default: [Wo] },
      $$scope: { ctx: n }
    }
  }), r.$on(
    "click",
    /*requestEdit*/
    n[1]
  );
  let o = Ie(
    /*pluginGroups*/
    n[0]
  ), u = [];
  for (let c = 0; c < o.length; c += 1)
    u[c] = Al(Cl(n, o, c));
  return {
    c() {
      e = F("div"), t = F("div"), l = F("p"), l.textContent = "Process", i = U(), z(r.$$.fragment), s = U();
      for (let c = 0; c < u.length; c += 1)
        u[c].c();
      v(l, "class", "svelte-siq5x1"), v(t, "class", "plugins-list__header svelte-siq5x1"), v(e, "class", "plugins-list svelte-siq5x1");
    },
    m(c, f) {
      M(c, e, f), G(e, t), G(t, l), G(t, i), N(r, t, null), G(e, s);
      for (let d = 0; d < u.length; d += 1)
        u[d] && u[d].m(e, null);
      a = !0;
    },
    p(c, [f]) {
      const d = {};
      if (f & /*$$scope*/
      512 && (d.$$scope = { dirty: f, ctx: c }), r.$set(d), f & /*pluginGroups*/
      1) {
        o = Ie(
          /*pluginGroups*/
          c[0]
        );
        let g;
        for (g = 0; g < o.length; g += 1) {
          const h = Cl(c, o, g);
          u[g] ? u[g].p(h, f) : (u[g] = Al(h), u[g].c(), u[g].m(e, null));
        }
        for (; g < u.length; g += 1)
          u[g].d(1);
        u.length = o.length;
      }
    },
    i(c) {
      a || (C(r.$$.fragment, c), a = !0);
    },
    o(c) {
      w(r.$$.fragment, c), a = !1;
    },
    d(c) {
      c && D(e), V(r), ze(u, c);
    }
  };
}
function Uo(n, e, t) {
  let { pluginGroups: l = [] } = e;
  const i = Xe(), r = () => i("editRequested");
  return n.$$set = (s) => {
    "pluginGroups" in s && t(0, l = s.pluginGroups);
  }, [l, r];
}
class Oo extends $ {
  constructor(e) {
    super(), x(this, e, Uo, Bo, Q, { pluginGroups: 0 });
  }
}
function No(n, e) {
  const t = (n == null ? void 0 : n.name) ?? "—";
  return [
    { label: "Engineering-Wizard", enabled: !0 },
    { label: e != null && e.edit ? `Edit ${t}` : t, enabled: !1 }
  ];
}
function Vo(n) {
  var e;
  return (e = n == null ? void 0 : n.pluginGroups) != null && e.length ? n.pluginGroups : [{ title: "Process", plugins: (n == null ? void 0 : n.plugins) ?? [] }];
}
function zo() {
  var e;
  const n = document.querySelector("open-scd");
  return ((e = n == null ? void 0 : n.shadowRoot) == null ? void 0 : e.querySelector("compas-layout")) ?? null;
}
function jo(n) {
  var e;
  (e = zo()) == null || e.dispatchEvent(
    new CustomEvent("toggle-editor-tabs", {
      detail: { visible: n },
      bubbles: !0,
      composed: !0
    })
  );
}
async function qo(n) {
  if (!customElements.get(n.id)) {
    const e = await import(
      /* @vite-ignore */
      n.src
    );
    customElements.define(n.id, e.default);
  }
}
async function Xo(n) {
  await Promise.all(
    n.map(async (e) => {
      try {
        if (!customElements.get(e.id)) {
          const t = await import(
            /* @vite-ignore */
            e.src
          );
          customElements.define(e.id, t.default);
        }
      } catch (t) {
        console.error("Failed to preload plugin", e.id, t);
      }
    })
  );
}
const ht = mt(!0);
ht.subscribe((n) => {
  jo(n);
});
function kl(n, e, t) {
  const l = n.slice();
  return l[5] = e[t], l[7] = t, l;
}
function wl(n, e, t) {
  const l = n.slice();
  return l[8] = e[t], l[10] = t, l;
}
function Yo(n) {
  let e;
  return {
    c() {
      e = le("REMOVE ALL");
    },
    m(t, l) {
      M(t, e, l);
    },
    d(t) {
      t && D(e);
    }
  };
}
function Sl(n) {
  let e, t, l = (
    /*plugin*/
    n[8].name + ""
  ), i, r, s, a, o, u, c, f;
  a = new zs({ props: { svgStyles: "fill: #FF203A" } });
  function d() {
    return (
      /*click_handler*/
      n[3](
        /*i*/
        n[7],
        /*j*/
        n[10]
      )
    );
  }
  return {
    c() {
      e = F("div"), t = F("span"), i = le(l), r = U(), s = F("button"), z(a.$$.fragment), o = U(), v(t, "class", "plugin-item__name svelte-12ozoaz"), v(s, "type", "button"), v(s, "class", "plugin-item__remove svelte-12ozoaz"), v(e, "class", "plugin-item svelte-12ozoaz");
    },
    m(g, h) {
      M(g, e, h), G(e, t), G(t, i), G(e, r), G(e, s), N(a, s, null), G(e, o), u = !0, c || (f = Y(s, "click", d), c = !0);
    },
    p(g, h) {
      n = g, (!u || h & /*pluginGroups*/
      1) && l !== (l = /*plugin*/
      n[8].name + "") && _e(i, l);
    },
    i(g) {
      u || (C(a.$$.fragment, g), u = !0);
    },
    o(g) {
      w(a.$$.fragment, g), u = !1;
    },
    d(g) {
      g && D(e), V(a), c = !1, f();
    }
  };
}
function Rl(n) {
  let e, t, l, i, r, s = (
    /*group*/
    n[5].title + ""
  ), a, o, u, c, f, d = Ie(
    /*group*/
    n[5].plugins
  ), g = [];
  for (let p = 0; p < d.length; p += 1)
    g[p] = Sl(wl(n, d, p));
  const h = (p) => w(g[p], 1, 1, () => {
    g[p] = null;
  });
  return {
    c() {
      e = F("div"), t = F("div"), l = F("span"), l.textContent = `${/*i*/
      n[7] + 1}.`, i = U(), r = F("span"), a = le(s), o = U(), u = F("div");
      for (let p = 0; p < g.length; p += 1)
        g[p].c();
      c = U(), v(l, "class", "plugin__index svelte-12ozoaz"), v(r, "class", "plugin__title svelte-12ozoaz"), v(t, "class", "plugin__group-title svelte-12ozoaz"), v(u, "class", "plugin__items svelte-12ozoaz"), v(e, "class", "plugin svelte-12ozoaz");
    },
    m(p, _) {
      M(p, e, _), G(e, t), G(t, l), G(t, i), G(t, r), G(r, a), G(e, o), G(e, u);
      for (let I = 0; I < g.length; I += 1)
        g[I] && g[I].m(u, null);
      G(e, c), f = !0;
    },
    p(p, _) {
      if ((!f || _ & /*pluginGroups*/
      1) && s !== (s = /*group*/
      p[5].title + "") && _e(a, s), _ & /*removeOne, pluginGroups*/
      5) {
        d = Ie(
          /*group*/
          p[5].plugins
        );
        let I;
        for (I = 0; I < d.length; I += 1) {
          const y = wl(p, d, I);
          g[I] ? (g[I].p(y, _), C(g[I], 1)) : (g[I] = Sl(y), g[I].c(), C(g[I], 1), g[I].m(u, null));
        }
        for (re(), I = d.length; I < g.length; I += 1)
          h(I);
        se();
      }
    },
    i(p) {
      if (!f) {
        for (let _ = 0; _ < d.length; _ += 1)
          C(g[_]);
        f = !0;
      }
    },
    o(p) {
      g = g.filter(Boolean);
      for (let _ = 0; _ < g.length; _ += 1)
        w(g[_]);
      f = !1;
    },
    d(p) {
      p && D(e), ze(g, p);
    }
  };
}
function Jo(n) {
  let e, t, l, i, r, s, a;
  r = new bt({
    props: {
      variant: "raised",
      style: "--mdc-theme-primary: #FF203A; --mdc-theme-on-primary: var(--on-brand)",
      "aria-label": "Remove all plugins",
      $$slots: { default: [Yo] },
      $$scope: { ctx: n }
    }
  }), r.$on(
    "click",
    /*removeAllPlugins*/
    n[1]
  );
  let o = Ie(
    /*pluginGroups*/
    n[0]
  ), u = [];
  for (let f = 0; f < o.length; f += 1)
    u[f] = Rl(kl(n, o, f));
  const c = (f) => w(u[f], 1, 1, () => {
    u[f] = null;
  });
  return {
    c() {
      e = F("div"), t = F("div"), l = F("p"), l.textContent = "Process", i = U(), z(r.$$.fragment), s = U();
      for (let f = 0; f < u.length; f += 1)
        u[f].c();
      v(l, "class", "svelte-12ozoaz"), v(t, "class", "plugins-list__header svelte-12ozoaz"), v(e, "class", "plugins-list svelte-12ozoaz");
    },
    m(f, d) {
      M(f, e, d), G(e, t), G(t, l), G(t, i), N(r, t, null), G(e, s);
      for (let g = 0; g < u.length; g += 1)
        u[g] && u[g].m(e, null);
      a = !0;
    },
    p(f, [d]) {
      const g = {};
      if (d & /*$$scope*/
      2048 && (g.$$scope = { dirty: d, ctx: f }), r.$set(g), d & /*pluginGroups, removeOne*/
      5) {
        o = Ie(
          /*pluginGroups*/
          f[0]
        );
        let h;
        for (h = 0; h < o.length; h += 1) {
          const p = kl(f, o, h);
          u[h] ? (u[h].p(p, d), C(u[h], 1)) : (u[h] = Rl(p), u[h].c(), C(u[h], 1), u[h].m(e, null));
        }
        for (re(), h = o.length; h < u.length; h += 1)
          c(h);
        se();
      }
    },
    i(f) {
      if (!a) {
        C(r.$$.fragment, f);
        for (let d = 0; d < o.length; d += 1)
          C(u[d]);
        a = !0;
      }
    },
    o(f) {
      w(r.$$.fragment, f), u = u.filter(Boolean);
      for (let d = 0; d < u.length; d += 1)
        w(u[d]);
      a = !1;
    },
    d(f) {
      f && D(e), V(r), ze(u, f);
    }
  };
}
function Qo(n, e, t) {
  let { pluginGroups: l = [] } = e;
  const i = Xe(), r = () => i("removeAllPlugins"), s = (o, u) => {
    const c = l[o], f = c.plugins[u];
    i("removePlugin", { groupIndex: o, pluginIndex: u, group: c, plugin: f });
  }, a = (o, u) => s(o, u);
  return n.$$set = (o) => {
    "pluginGroups" in o && t(0, l = o.pluginGroups);
  }, [l, r, s, a];
}
class Ko extends $ {
  constructor(e) {
    super(), x(this, e, Qo, Jo, Q, { pluginGroups: 0 });
  }
}
function xo(n) {
  let e, t;
  return e = new Ko({
    props: { pluginGroups: (
      /*pluginGroups*/
      n[0]
    ) }
  }), e.$on(
    "removeAllPlugins",
    /*removeAllPlugins_handler*/
    n[2]
  ), e.$on(
    "removePlugin",
    /*removePlugin_handler*/
    n[3]
  ), {
    c() {
      z(e.$$.fragment);
    },
    m(l, i) {
      N(e, l, i), t = !0;
    },
    p(l, [i]) {
      const r = {};
      i & /*pluginGroups*/
      1 && (r.pluginGroups = /*pluginGroups*/
      l[0]), e.$set(r);
    },
    i(l) {
      t || (C(e.$$.fragment, l), t = !0);
    },
    o(l) {
      w(e.$$.fragment, l), t = !1;
    },
    d(l) {
      V(e, l);
    }
  };
}
function $o(n, e, t) {
  let { pluginGroups: l = [] } = e, { proc: i = null } = e;
  const r = (a) => console.log("remove all plugins", a), s = (a) => console.log("remove one", a.detail);
  return n.$$set = (a) => {
    "pluginGroups" in a && t(0, l = a.pluginGroups), "proc" in a && t(1, i = a.proc);
  }, [l, i, r, s];
}
class eu extends $ {
  constructor(e) {
    super(), x(this, e, $o, xo, Q, { pluginGroups: 0, proc: 1 });
  }
}
const tu = "data:application/xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHZhbGlkYXRpb25zPgogIDx2YWxpZGF0aW9uPgogICAgPGlkPmNvbW0tc3VibmV0LTAwMTwvaWQ+CiAgICA8bmFtZT5TdWJuZXQgQWRkcmVzcyBWYWxpZGl0eTwvbmFtZT4KICAgIDxkZXNjcmlwdGlvbj5WYWxpZGF0ZXMgSVAgc3VibmV0IGFkZHJlc3NlcyBhbmQgQ0lEUi9uZXRtYXNrIGFyZSBwcm9wZXJseSBmb3JtYXR0ZWQgYW5kIG1lZXQgcHJvamVjdCBjb25zdHJhaW50cy48L2Rlc2NyaXB0aW9uPgogICAgPHZhbGlkYXRvcj5jaGVjay1zdWJuZXQtYWRkcmVzczwvdmFsaWRhdG9yPgogIDwvdmFsaWRhdGlvbj4KICA8dmFsaWRhdGlvbj4KICAgIDxpZD5nc2UtY29uZmlnLTAwMjwvaWQ+CiAgICA8bmFtZT5HU0UgQ29udHJvbCBCbG9ja3MgQ29uZmlndXJhdGlvbjwvbmFtZT4KICAgIDxkZXNjcmlwdGlvbj5FbnN1cmVzIEdTRSBjb250cm9sIGJsb2NrcyByZWZlcmVuY2UgdmFsaWQgZGF0YXNldHMgYW5kIGhhdmUgY29ycmVjdCBNQUMvVkxBTi9uZXR3b3JrIHBhcmFtZXRlcnMuPC9kZXNjcmlwdGlvbj4KICAgIDx2YWxpZGF0b3I+Y2hlY2stZ3NlLWNvbmZpZzwvdmFsaWRhdG9yPgogIDwvdmFsaWRhdGlvbj4KICA8dmFsaWRhdGlvbj4KICAgIDxpZD5zbXYtY29uZmlnLTAwMzwvaWQ+CiAgICA8bmFtZT5TTVYgQ29udHJvbCBCbG9ja3MgQ29uZmlndXJhdGlvbjwvbmFtZT4KICAgIDxkZXNjcmlwdGlvbj5DaGVja3MgU01WIGNvbnRyb2wgYmxvY2tzIGZvciB2YWxpZCBkYXRhc2V0cywgc2FtcGxlIHJhdGVzLCBhbmQgY29tcGxpYW50IG5ldHdvcmsgc2V0dGluZ3MuPC9kZXNjcmlwdGlvbj4KICAgIDx2YWxpZGF0b3I+Y2hlY2stc212LWNvbmZpZzwvdmFsaWRhdG9yPgogIDwvdmFsaWRhdGlvbj4KPC92YWxpZGF0aW9ucz4K", nu = "data:application/xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHZhbGlkYXRpb25zPgogIDx2YWxpZGF0aW9uPgogICAgPGlkPmllZC1uYW1lLTAwMTwvaWQ+CiAgICA8bmFtZT5JRUQgTmFtZSBGb3JtYXQ8L25hbWU+CiAgICA8ZGVzY3JpcHRpb24+RW5zdXJlcyBJRUQgbmFtZXMgZm9sbG93IHRoZSBuYW1pbmcgY29udmVudGlvbiwgYWxsb3dlZCBjaGFyYWN0ZXJzLCBhbmQgdW5pcXVlbmVzcyB3aXRoaW4gdGhlIHByb2plY3QuPC9kZXNjcmlwdGlvbj4KICAgIDx2YWxpZGF0b3I+Y2hlY2staWVkLW5hbWUtZm9ybWF0PC92YWxpZGF0b3I+CiAgPC92YWxpZGF0aW9uPgogIDx2YWxpZGF0aW9uPgogICAgPGlkPmFwLWNvbmZpZy0wMDI8L2lkPgogICAgPG5hbWU+QWNjZXNzIFBvaW50IENvbmZpZ3VyYXRpb248L25hbWU+CiAgICA8ZGVzY3JpcHRpb24+VmVyaWZpZXMgQWNjZXNzUG9pbnQgZWxlbWVudHMgaGF2ZSByZXF1aXJlZCBhdHRyaWJ1dGVzIGFuZCB2YWxpZCByZWZlcmVuY2VzIHRvIHNlcnZlci9zZXJ2aWNlcy48L2Rlc2NyaXB0aW9uPgogICAgPHZhbGlkYXRvcj5jaGVjay1hY2Nlc3MtcG9pbnQtY29uZmlnPC92YWxpZGF0b3I+CiAgPC92YWxpZGF0aW9uPgogIDx2YWxpZGF0aW9uPgogICAgPGlkPmxuLWFzc2lnbi0wMDM8L2lkPgogICAgPG5hbWU+TG9naWNhbCBOb2RlIEFzc2lnbm1lbnRzPC9uYW1lPgogICAgPGRlc2NyaXB0aW9uPlZhbGlkYXRlcyBsb2dpY2FsIG5vZGVzIGFyZSBjb3JyZWN0bHkgYXNzaWduZWQgd2l0aCB2YWxpZCBsbkNsYXNzL2xuSW5zdCBjb21iaW5hdGlvbnMgYW5kIHJlcXVpcmVkIExOcyBhcmUgcHJlc2VudC48L2Rlc2NyaXB0aW9uPgogICAgPHZhbGlkYXRvcj5jaGVjay1sbi1hc3NpZ25tZW50czwvdmFsaWRhdG9yPgogIDwvdmFsaWRhdGlvbj4KPC92YWxpZGF0aW9ucz4KCg==", lu = "data:application/xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHZhbGlkYXRpb25zPgogIDx2YWxpZGF0aW9uPgogICAgPGlkPnN1YnN0YXRpb24tc3RydWN0dXJlLTAwMTwvaWQ+CiAgICA8bmFtZT5TdWJzdGF0aW9uIFN0cnVjdHVyZSBJbnRlZ3JpdHk8L25hbWU+CiAgICA8ZGVzY3JpcHRpb24+U3RydWN0dXJlIEludGVncml0eSBEZXNjcmlwdGlvbjwvZGVzY3JpcHRpb24+CiAgICA8dmFsaWRhdG9yPmNoZWNrLXN1YnN0YXRpb24tc3RydWN0dXJlPC92YWxpZGF0b3I+CiAgPC92YWxpZGF0aW9uPgogIDx2YWxpZGF0aW9uPgogICAgPGlkPnZvbHRhZ2UtbGV2ZWwtdW5pcXVlbmVzcy0wMDI8L2lkPgogICAgPG5hbWU+Vm9sdGFnZSBMZXZlbCBOYW1lIFVuaXF1ZW5lc3M8L25hbWU+CiAgICA8ZGVzY3JpcHRpb24+RW5zdXJlcyB2b2x0YWdlIGxldmVsIG5hbWVzIGFyZSB1bmlxdWUgd2l0aGluIHRoZSBzdWJzdGF0aW9uLjwvZGVzY3JpcHRpb24+CiAgICA8dmFsaWRhdG9yPmNoZWNrLXZsLW5hbWUtdW5pcXVlbmVzczwvdmFsaWRhdG9yPgogIDwvdmFsaWRhdGlvbj4KICA8dmFsaWRhdGlvbj4KICAgIDxpZD5iYXktbmFtaW5nLTAwMzwvaWQ+CiAgICA8bmFtZT5CYXkgTmFtaW5nIENvbnZlbnRpb248L25hbWU+CiAgICA8ZGVzY3JpcHRpb24+VmFsaWRhdGVzIGJheSBuYW1lcyBmb2xsb3cgdGhlIG5hbWluZyBjb252ZW50aW9uIGFuZCBhcmUgdW5pcXVlIHdpdGhpbiB0aGVpciB2b2x0YWdlIGxldmVsLjwvZGVzY3JpcHRpb24+CiAgICA8dmFsaWRhdG9yPmNoZWNrLWJheS1uYW1pbmc8L3ZhbGlkYXRvcj4KICA8L3ZhbGlkYXRpb24+CjwvdmFsaWRhdGlvbnM+Cg==", iu = "data:application/xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHZhbGlkYXRpb25zPgogIDx2YWxpZGF0aW9uPgogICAgPGlkPnRlbXBsYXRlLWlucHV0cy0wMDE8L2lkPgogICAgPG5hbWU+UmVxdWlyZWQgSW5wdXRzIFByZXNlbnQ8L25hbWU+CiAgICA8ZGVzY3JpcHRpb24+VmVyaWZpZXMgYWxsIHJlcXVpcmVkIHRlbXBsYXRlIGlucHV0IGZpZWxkcyBhcmUgcHJvdmlkZWQgYW5kIG5vbi1lbXB0eS48L2Rlc2NyaXB0aW9uPgogICAgPHZhbGlkYXRvcj5jaGVjay1yZXF1aXJlZC1pbnB1dHM8L3ZhbGlkYXRvcj4KICA8L3ZhbGlkYXRpb24+CiAgPHZhbGlkYXRpb24+CiAgICA8aWQ+dGctbmFtaW5nLTAwMjwvaWQ+CiAgICA8bmFtZT5UZW1wbGF0ZSBOYW1pbmcgQ29udmVudGlvbjwvbmFtZT4KICAgIDxkZXNjcmlwdGlvbj5FbnN1cmVzIHRlbXBsYXRlIG5hbWVzIGZvbGxvdyB0aGUgZGVmaW5lZCBuYW1pbmcgY29udmVudGlvbiBhbmQgYWxsb3dlZCBjaGFyYWN0ZXJzLjwvZGVzY3JpcHRpb24+CiAgICA8dmFsaWRhdG9yPmNoZWNrLXRlbXBsYXRlLW5hbWluZzwvdmFsaWRhdG9yPgogIDwvdmFsaWRhdGlvbj4KICA8dmFsaWRhdGlvbj4KICAgIDxpZD50Zy1jb21wYXQtMDAzPC9pZD4KICAgIDxuYW1lPlRlbXBsYXRlIENvbXBhdGliaWxpdHk8L25hbWU+CiAgICA8ZGVzY3JpcHRpb24+Q2hlY2tzIHRoZSBnZW5lcmF0ZWQgdGVtcGxhdGUgaXMgY29tcGF0aWJsZSB3aXRoIHRoZSBzZWxlY3RlZCBwcm9maWxlcyBvciB2ZXJzaW9ucy48L2Rlc2NyaXB0aW9uPgogICAgPHZhbGlkYXRvcj5jaGVjay10ZW1wbGF0ZS1jb21wYXRpYmlsaXR5PC92YWxpZGF0b3I+CiAgPC92YWxpZGF0aW9uPgo8L3ZhbGlkYXRpb25zPgoK";
function Ll(n, e, t) {
  const l = n.slice();
  return l[23] = e[t], l[25] = t, l;
}
function El(n, e, t) {
  const l = n.slice();
  return l[26] = e[t], l[28] = t, l;
}
function Hl(n, e, t) {
  const l = n.slice();
  return l[29] = e[t], l[25] = t, l;
}
function Gl(n) {
  let e, t = Ie(
    /*group*/
    n[26].plugins
  ), l = [];
  for (let i = 0; i < t.length; i += 1)
    l[i] = Dl(Hl(n, t, i));
  return {
    c() {
      for (let i = 0; i < l.length; i += 1)
        l[i].c();
      e = Ae();
    },
    m(i, r) {
      for (let s = 0; s < l.length; s += 1)
        l[s] && l[s].m(i, r);
      M(i, e, r);
    },
    p(i, r) {
      if (r & /*selectedIdx, activePluginIdx, selectPlugin, pluginGroups*/
      1031) {
        t = Ie(
          /*group*/
          i[26].plugins
        );
        let s;
        for (s = 0; s < t.length; s += 1) {
          const a = Hl(i, t, s);
          l[s] ? l[s].p(a, r) : (l[s] = Dl(a), l[s].c(), l[s].m(e.parentNode, e));
        }
        for (; s < l.length; s += 1)
          l[s].d(1);
        l.length = t.length;
      }
    },
    d(i) {
      i && D(e), ze(l, i);
    }
  };
}
function Dl(n) {
  let e, t, l = (
    /*plugin*/
    n[29].name + ""
  ), i, r, s, a;
  function o() {
    return (
      /*click_handler_1*/
      n[18](
        /*gIdx*/
        n[28],
        /*idx*/
        n[25]
      )
    );
  }
  return {
    c() {
      e = F("button"), t = F("span"), i = le(l), r = U(), v(e, "type", "button"), v(e, "class", "validation-groups__plugin svelte-1t9loaq"), qe(
        e,
        "active",
        /*gIdx*/
        n[28] === /*selectedIdx*/
        n[1] && /*idx*/
        n[25] === /*activePluginIdx*/
        n[2]
      );
    },
    m(u, c) {
      M(u, e, c), G(e, t), G(t, i), G(e, r), s || (a = Y(e, "click", o), s = !0);
    },
    p(u, c) {
      n = u, c & /*pluginGroups*/
      1 && l !== (l = /*plugin*/
      n[29].name + "") && _e(i, l), c & /*selectedIdx, activePluginIdx*/
      6 && qe(
        e,
        "active",
        /*gIdx*/
        n[28] === /*selectedIdx*/
        n[1] && /*idx*/
        n[25] === /*activePluginIdx*/
        n[2]
      );
    },
    d(u) {
      u && D(e), s = !1, a();
    }
  };
}
function Ml(n) {
  let e, t, l = (
    /*group*/
    n[26].title + ""
  ), i, r, s, a, o, u;
  function c() {
    return (
      /*click_handler*/
      n[17](
        /*gIdx*/
        n[28]
      )
    );
  }
  let f = (
    /*gIdx*/
    n[28] === /*selectedIdx*/
    n[1] && Gl(n)
  );
  return {
    c() {
      e = F("div"), t = F("button"), i = le(l), s = U(), f && f.c(), a = U(), v(t, "type", "button"), v(t, "class", "validation-groups__group-title svelte-1t9loaq"), v(t, "aria-pressed", r = /*gIdx*/
      n[28] === /*selectedIdx*/
      n[1]), v(e, "class", "validation-groups__group svelte-1t9loaq"), qe(
        e,
        "expanded",
        /*gIdx*/
        n[28] === /*selectedIdx*/
        n[1]
      );
    },
    m(d, g) {
      M(d, e, g), G(e, t), G(t, i), G(e, s), f && f.m(e, null), G(e, a), o || (u = Y(t, "click", c), o = !0);
    },
    p(d, g) {
      n = d, g & /*pluginGroups*/
      1 && l !== (l = /*group*/
      n[26].title + "") && _e(i, l), g & /*selectedIdx*/
      2 && r !== (r = /*gIdx*/
      n[28] === /*selectedIdx*/
      n[1]) && v(t, "aria-pressed", r), /*gIdx*/
      n[28] === /*selectedIdx*/
      n[1] ? f ? f.p(n, g) : (f = Gl(n), f.c(), f.m(e, a)) : f && (f.d(1), f = null), g & /*selectedIdx*/
      2 && qe(
        e,
        "expanded",
        /*gIdx*/
        n[28] === /*selectedIdx*/
        n[1]
      );
    },
    d(d) {
      d && D(e), f && f.d(), o = !1, u();
    }
  };
}
function Pl(n) {
  let e, t, l, i;
  const r = [ou, au, su, ru], s = [];
  function a(o, u) {
    return (
      /*loadingXml*/
      o[5] ? 0 : (
        /*xmlError*/
        o[6] ? 1 : (
          /*validationEntries*/
          o[7].length === 0 ? 2 : 3
        )
      )
    );
  }
  return e = a(n), t = s[e] = r[e](n), {
    c() {
      t.c(), l = Ae();
    },
    m(o, u) {
      s[e].m(o, u), M(o, l, u), i = !0;
    },
    p(o, u) {
      let c = e;
      e = a(o), e === c ? s[e].p(o, u) : (re(), w(s[c], 1, 1, () => {
        s[c] = null;
      }), se(), t = s[e], t ? t.p(o, u) : (t = s[e] = r[e](o), t.c()), C(t, 1), t.m(l.parentNode, l));
    },
    i(o) {
      i || (C(t), i = !0);
    },
    o(o) {
      w(t), i = !1;
    },
    d(o) {
      o && D(l), s[e].d(o);
    }
  };
}
function ru(n) {
  let e, t, l = Ie(
    /*validationEntries*/
    n[7]
  ), i = [];
  for (let s = 0; s < l.length; s += 1)
    i[s] = Fl(Ll(n, l, s));
  const r = (s) => w(i[s], 1, 1, () => {
    i[s] = null;
  });
  return {
    c() {
      e = F("div");
      for (let s = 0; s < i.length; s += 1)
        i[s].c();
      v(e, "class", "validation-xml-list svelte-1t9loaq");
    },
    m(s, a) {
      M(s, e, a);
      for (let o = 0; o < i.length; o += 1)
        i[o] && i[o].m(e, null);
      t = !0;
    },
    p(s, a) {
      if (a & /*validationEntries, openSet, toggleEntry*/
      2432) {
        l = Ie(
          /*validationEntries*/
          s[7]
        );
        let o;
        for (o = 0; o < l.length; o += 1) {
          const u = Ll(s, l, o);
          i[o] ? (i[o].p(u, a), C(i[o], 1)) : (i[o] = Fl(u), i[o].c(), C(i[o], 1), i[o].m(e, null));
        }
        for (re(), o = l.length; o < i.length; o += 1)
          r(o);
        se();
      }
    },
    i(s) {
      if (!t) {
        for (let a = 0; a < l.length; a += 1)
          C(i[a]);
        t = !0;
      }
    },
    o(s) {
      i = i.filter(Boolean);
      for (let a = 0; a < i.length; a += 1)
        w(i[a]);
      t = !1;
    },
    d(s) {
      s && D(e), ze(i, s);
    }
  };
}
function su(n) {
  let e, t, l, i = (
    /*currentPlugin*/
    n[3].name + ""
  ), r, s, a, o, u;
  return {
    c() {
      e = F("div"), t = F("h4"), l = le("XML for: "), r = le(i), s = U(), a = F("div"), o = F("pre"), u = le(
        /*xmlText*/
        n[4]
      ), v(t, "class", "xml-viewer__title svelte-1t9loaq"), v(o, "class", "svelte-1t9loaq"), v(a, "class", "xml-viewer__box svelte-1t9loaq"), v(e, "class", "xml-viewer svelte-1t9loaq");
    },
    m(c, f) {
      M(c, e, f), G(e, t), G(t, l), G(t, r), G(e, s), G(e, a), G(a, o), G(o, u);
    },
    p(c, f) {
      f & /*currentPlugin*/
      8 && i !== (i = /*currentPlugin*/
      c[3].name + "") && _e(r, i), f & /*xmlText*/
      16 && _e(
        u,
        /*xmlText*/
        c[4]
      );
    },
    i: K,
    o: K,
    d(c) {
      c && D(e);
    }
  };
}
function au(n) {
  let e, t;
  return {
    c() {
      e = F("p"), t = le(
        /*xmlError*/
        n[6]
      ), v(e, "class", "error svelte-1t9loaq");
    },
    m(l, i) {
      M(l, e, i), G(e, t);
    },
    p(l, i) {
      i & /*xmlError*/
      64 && _e(
        t,
        /*xmlError*/
        l[6]
      );
    },
    i: K,
    o: K,
    d(l) {
      l && D(e);
    }
  };
}
function ou(n) {
  let e;
  return {
    c() {
      e = F("p"), e.textContent = "Loading…";
    },
    m(t, l) {
      M(t, e, l);
    },
    p: K,
    i: K,
    o: K,
    d(t) {
      t && D(e);
    }
  };
}
function Tl(n) {
  let e, t = (
    /*validationEntry*/
    n[23].description + ""
  ), l;
  return {
    c() {
      e = F("span"), l = le(t), v(e, "class", "validation-xml-container__description svelte-1t9loaq");
    },
    m(i, r) {
      M(i, e, r), G(e, l);
    },
    p(i, r) {
      r & /*validationEntries*/
      128 && t !== (t = /*validationEntry*/
      i[23].description + "") && _e(l, t);
    },
    d(i) {
      i && D(e);
    }
  };
}
function uu(n) {
  let e, t, l, i, r;
  t = new wa({ props: { svgStyles: "fill: #004552" } });
  function s() {
    return (
      /*click_handler_3*/
      n[20](
        /*idx*/
        n[25]
      )
    );
  }
  return {
    c() {
      e = F("button"), z(t.$$.fragment), v(e, "type", "button"), v(e, "class", "toggle-btn svelte-1t9loaq"), v(e, "aria-expanded", "false"), v(e, "title", "Expand");
    },
    m(a, o) {
      M(a, e, o), N(t, e, null), l = !0, i || (r = Y(e, "click", s), i = !0);
    },
    p(a, o) {
      n = a;
    },
    i(a) {
      l || (C(t.$$.fragment, a), l = !0);
    },
    o(a) {
      w(t.$$.fragment, a), l = !1;
    },
    d(a) {
      a && D(e), V(t), i = !1, r();
    }
  };
}
function cu(n) {
  let e, t, l, i, r;
  t = new Ia({ props: { svgStyles: "fill: #004552" } });
  function s() {
    return (
      /*click_handler_2*/
      n[19](
        /*idx*/
        n[25]
      )
    );
  }
  return {
    c() {
      e = F("button"), z(t.$$.fragment), v(e, "type", "button"), v(e, "class", "toggle-btn svelte-1t9loaq"), v(e, "aria-expanded", "true"), v(e, "title", "Collapse");
    },
    m(a, o) {
      M(a, e, o), N(t, e, null), l = !0, i || (r = Y(e, "click", s), i = !0);
    },
    p(a, o) {
      n = a;
    },
    i(a) {
      l || (C(t.$$.fragment, a), l = !0);
    },
    o(a) {
      w(t.$$.fragment, a), l = !1;
    },
    d(a) {
      a && D(e), V(t), i = !1, r();
    }
  };
}
function Zl(n) {
  let e, t, l, i = (
    /*validationEntry*/
    n[23].xml + ""
  ), r;
  return {
    c() {
      e = F("div"), t = F("div"), l = F("pre"), r = le(i), v(l, "class", "svelte-1t9loaq"), v(t, "class", "xml-viewer__box svelte-1t9loaq"), v(e, "class", "xml-viewer svelte-1t9loaq");
    },
    m(s, a) {
      M(s, e, a), G(e, t), G(t, l), G(l, r);
    },
    p(s, a) {
      a & /*validationEntries*/
      128 && i !== (i = /*validationEntry*/
      s[23].xml + "") && _e(r, i);
    },
    d(s) {
      s && D(e);
    }
  };
}
function Fl(n) {
  let e, t, l, i = (
    /*validationEntry*/
    n[23].name + ""
  ), r, s, a, o, u, c, f, d, g, h, p, _ = (
    /*openSet*/
    n[8].has(
      /*idx*/
      n[25]
    )
  ), I, y, E = (
    /*validationEntry*/
    n[23].description && Tl(n)
  );
  c = new Ys({ props: { svgStyles: "fill: #FF203A" } });
  const b = [cu, uu], Z = [];
  function k(R, B) {
    return B & /*openSet*/
    256 && (d = null), d == null && (d = !!/*openSet*/
    R[8].has(
      /*idx*/
      R[25]
    )), d ? 0 : 1;
  }
  g = k(n, -1), h = Z[g] = b[g](n);
  let m = _ && Zl(n);
  return {
    c() {
      e = F("div"), t = F("div"), l = F("span"), r = le(i), s = U(), E && E.c(), a = U(), o = F("div"), u = F("button"), z(c.$$.fragment), f = U(), h.c(), p = U(), m && m.c(), I = U(), v(l, "class", "validation-xml-container__name svelte-1t9loaq"), v(u, "type", "button"), v(u, "class", "delete-btn svelte-1t9loaq"), v(u, "title", "Remove"), v(o, "class", "validaton-xml-container__actions svelte-1t9loaq"), v(t, "class", "validation-xml-container__meta svelte-1t9loaq"), v(e, "class", "validation-xml-container svelte-1t9loaq");
    },
    m(R, B) {
      M(R, e, B), G(e, t), G(t, l), G(l, r), G(t, s), E && E.m(t, null), G(t, a), G(t, o), G(o, u), N(c, u, null), G(o, f), Z[g].m(o, null), G(e, p), m && m.m(e, null), G(e, I), y = !0;
    },
    p(R, B) {
      (!y || B & /*validationEntries*/
      128) && i !== (i = /*validationEntry*/
      R[23].name + "") && _e(r, i), /*validationEntry*/
      R[23].description ? E ? E.p(R, B) : (E = Tl(R), E.c(), E.m(t, a)) : E && (E.d(1), E = null);
      let H = g;
      g = k(R, B), g === H ? Z[g].p(R, B) : (re(), w(Z[H], 1, 1, () => {
        Z[H] = null;
      }), se(), h = Z[g], h ? h.p(R, B) : (h = Z[g] = b[g](R), h.c()), C(h, 1), h.m(o, null)), B & /*openSet*/
      256 && (_ = /*openSet*/
      R[8].has(
        /*idx*/
        R[25]
      )), _ ? m ? m.p(R, B) : (m = Zl(R), m.c(), m.m(e, I)) : m && (m.d(1), m = null);
    },
    i(R) {
      y || (C(c.$$.fragment, R), C(h), y = !0);
    },
    o(R) {
      w(c.$$.fragment, R), w(h), y = !1;
    },
    d(R) {
      R && D(e), E && E.d(), V(c), Z[g].d(), m && m.d();
    }
  };
}
function fu(n) {
  let e, t, l, i, r = Ie(
    /*pluginGroups*/
    n[0]
  ), s = [];
  for (let o = 0; o < r.length; o += 1)
    s[o] = Ml(El(n, r, o));
  let a = (
    /*currentPlugin*/
    n[3] && Pl(n)
  );
  return {
    c() {
      e = F("div");
      for (let o = 0; o < s.length; o += 1)
        s[o].c();
      t = U(), a && a.c(), l = Ae(), v(e, "class", "validation-groups svelte-1t9loaq");
    },
    m(o, u) {
      M(o, e, u);
      for (let c = 0; c < s.length; c += 1)
        s[c] && s[c].m(e, null);
      M(o, t, u), a && a.m(o, u), M(o, l, u), i = !0;
    },
    p(o, [u]) {
      if (u & /*selectedIdx, pluginGroups, activePluginIdx, selectPlugin, selectGroup*/
      1543) {
        r = Ie(
          /*pluginGroups*/
          o[0]
        );
        let c;
        for (c = 0; c < r.length; c += 1) {
          const f = El(o, r, c);
          s[c] ? s[c].p(f, u) : (s[c] = Ml(f), s[c].c(), s[c].m(e, null));
        }
        for (; c < s.length; c += 1)
          s[c].d(1);
        s.length = r.length;
      }
      /*currentPlugin*/
      o[3] ? a ? (a.p(o, u), u & /*currentPlugin*/
      8 && C(a, 1)) : (a = Pl(o), a.c(), C(a, 1), a.m(l.parentNode, l)) : a && (re(), w(a, 1, 1, () => {
        a = null;
      }), se());
    },
    i(o) {
      i || (C(a), i = !0);
    },
    o(o) {
      w(a), i = !1;
    },
    d(o) {
      o && (D(e), D(t), D(l)), ze(s, o), a && a.d(o);
    }
  };
}
function du(n, e, t) {
  let l, i, r;
  var s, a, o;
  let { pluginGroups: u = [] } = e, c = null, f = null, d = "", g = !1, h = "", p = null, _ = [], I = /* @__PURE__ */ new Set();
  function y(H) {
    return Nt(this, void 0, void 0, function* () {
      t(5, g = !0), t(6, h = ""), t(4, d = ""), t(7, _ = []), t(8, I = /* @__PURE__ */ new Set()), p == null || p.abort(), p = new AbortController();
      try {
        const A = new URL((/* @__PURE__ */ Object.assign({ "../../assets/validations/communication-explorer.xml": tu, "../../assets/validations/ied-editor.xml": nu, "../../assets/validations/substation-explorer.xml": lu, "../../assets/validations/template-generator.xml": iu }))[`../../assets/validations/${H}.xml`], import.meta.url).href, W = yield fetch(A, {
          cache: "no-cache",
          signal: p.signal
        });
        if (!W.ok) {
          if (W.status === 404) {
            t(4, d = "(No XML found for this plugin.)");
            return;
          }
          throw new Error(`HTTP ${W.status}`);
        }
        t(4, d = yield W.text());
        const X = new DOMParser().parseFromString(d, "application/xml");
        if (X.querySelector("parsererror"))
          throw new Error("Invalid XML format.");
        const ke = new XMLSerializer(), ve = Array.from(X.getElementsByTagName("validation"));
        t(7, _ = ve.map((j, S) => {
          var O, me, be, De, Te, de, Ze;
          const je = ((O = j.getAttribute("name")) === null || O === void 0 ? void 0 : O.trim()) || ((me = j.getAttribute("id")) === null || me === void 0 ? void 0 : me.trim()) || ((De = (be = j.querySelector("name")) === null || be === void 0 ? void 0 : be.textContent) === null || De === void 0 ? void 0 : De.trim()) || `Validation ${S + 1}`, Ye = ((Te = j.getAttribute("description")) === null || Te === void 0 ? void 0 : Te.trim()) || ((Ze = (de = j.querySelector("description")) === null || de === void 0 ? void 0 : de.textContent) === null || Ze === void 0 ? void 0 : Ze.trim()) || void 0, Je = ke.serializeToString(j);
          return { name: je, description: Ye, xml: Je };
        })), t(8, I = /* @__PURE__ */ new Set());
      } catch (A) {
        if ((A == null ? void 0 : A.name) === "AbortError")
          return;
        t(6, h = (A == null ? void 0 : A.message) || "Failed to load XML.");
      } finally {
        t(5, g = !1);
      }
    });
  }
  function E(H) {
    var A;
    const W = u[H];
    t(1, c = H), t(2, f = !((A = W == null ? void 0 : W.plugins) === null || A === void 0) && A.length ? 0 : null);
  }
  function b(H, A) {
    t(1, c = H), t(2, f = A);
  }
  function Z(H) {
    I.has(H) ? I.delete(H) : I.add(H), t(8, I = new Set(I));
  }
  const k = (H) => E(H), m = (H, A) => b(H, A), R = (H) => Z(H), B = (H) => Z(H);
  return n.$$set = (H) => {
    "pluginGroups" in H && t(0, u = H.pluginGroups);
  }, n.$$.update = () => {
    n.$$.dirty & /*pluginGroups, selectedIdx, _a, _b*/
    12291 && u != null && u.length && (c == null || c >= u.length) && (t(1, c = 0), t(2, f = !(t(13, a = t(12, s = u[0]) === null || s === void 0 ? void 0 : s.plugins) === null || a === void 0) && a.length ? 0 : null)), n.$$.dirty & /*selectedIdx, pluginGroups*/
    3 && t(16, l = c != null ? u[c] : null), n.$$.dirty & /*currentGroup, activePluginIdx*/
    65540 && t(3, i = l && f != null ? l.plugins[f] : null), n.$$.dirty & /*currentPlugin, _c*/
    16392 && t(15, r = t(14, o = i == null ? void 0 : i.id) !== null && o !== void 0 ? o : null), n.$$.dirty & /*currentPluginId*/
    32768 && r && y(r);
  }, [
    u,
    c,
    f,
    i,
    d,
    g,
    h,
    _,
    I,
    E,
    b,
    Z,
    s,
    a,
    o,
    r,
    l,
    k,
    m,
    R,
    B
  ];
}
class gu extends $ {
  constructor(e) {
    super(), x(this, e, du, fu, Q, { pluginGroups: 0 });
  }
}
function mu(n) {
  let e, t, l, i, r, s, a, o;
  return l = new on({
    props: {
      breadcrumbs: (
        /*breadcrumbs*/
        n[7]
      ),
      activeIndex: 1
    }
  }), l.$on(
    "click",
    /*handleBreadcrumbClick*/
    n[8]
  ), r = new bt({
    props: {
      variant: "raised",
      style: "--mdc-theme-primary: var(--brand); --mdc-theme-on-primary: var(--on-brand)",
      disabled: !/*currentProcess*/
      n[0],
      "aria-label": "Start process",
      $$slots: { default: [pu] },
      $$scope: { ctx: n }
    }
  }), r.$on(
    "click",
    /*startProcess*/
    n[9]
  ), a = new Oo({
    props: { pluginGroups: (
      /*pluginGroups*/
      n[3]
    ) }
  }), a.$on(
    "editRequested",
    /*startEditing*/
    n[10]
  ), {
    c() {
      e = F("div"), t = F("div"), z(l.$$.fragment), i = U(), z(r.$$.fragment), s = U(), z(a.$$.fragment), v(t, "class", "header svelte-evkqad"), v(e, "class", "step-content svelte-evkqad");
    },
    m(u, c) {
      M(u, e, c), G(e, t), N(l, t, null), G(t, i), N(r, t, null), G(e, s), N(a, e, null), o = !0;
    },
    p(u, c) {
      const f = {};
      c & /*breadcrumbs*/
      128 && (f.breadcrumbs = /*breadcrumbs*/
      u[7]), l.$set(f);
      const d = {};
      c & /*currentProcess*/
      1 && (d.disabled = !/*currentProcess*/
      u[0]), c & /*$$scope*/
      524288 && (d.$$scope = { dirty: c, ctx: u }), r.$set(d);
      const g = {};
      c & /*pluginGroups*/
      8 && (g.pluginGroups = /*pluginGroups*/
      u[3]), a.$set(g);
    },
    i(u) {
      o || (C(l.$$.fragment, u), C(r.$$.fragment, u), C(a.$$.fragment, u), o = !0);
    },
    o(u) {
      w(l.$$.fragment, u), w(r.$$.fragment, u), w(a.$$.fragment, u), o = !1;
    },
    d(u) {
      u && D(e), V(l), V(r), V(a);
    }
  };
}
function hu(n) {
  let e, t, l, i, r, s, a, o, u, c, f, d, g, h, p, _, I, y;
  t = new ni({}), t.$on(
    "back",
    /*exitEditing*/
    n[11]
  ), i = new To({
    props: {
      currentId: (
        /*currentStepId*/
        n[2]
      ),
      visited: (
        /*visitedSteps*/
        n[4]
      )
    }
  }), i.$on(
    "select",
    /*handleStepSelect*/
    n[12]
  );
  const E = [_u, bu], b = [];
  function Z(k, m) {
    return (
      /*currentStepId*/
      k[2] === "process-definition" ? 0 : (
        /*currentStepId*/
        k[2] === "validator-configuration" ? 1 : -1
      )
    );
  }
  return ~(h = Z(n)) && (p = b[h] = E[h](n)), {
    c() {
      e = F("div"), z(t.$$.fragment), l = U(), z(i.$$.fragment), r = U(), s = F("div"), a = F("button"), o = le("Back"), u = U(), c = F("button"), f = le("Next"), d = U(), g = F("div"), p && p.c(), v(a, "type", "button"), v(a, "class", "btn btn--back svelte-evkqad"), a.disabled = /*isAtFirstStep*/
      n[5], v(a, "aria-label", "Previous step"), v(c, "type", "button"), v(c, "class", "btn btn--next svelte-evkqad"), c.disabled = /*isAtLastStep*/
      n[6], v(c, "aria-label", "Next step"), v(s, "class", "stepper-navigation svelte-evkqad"), v(e, "class", "stepper svelte-evkqad"), v(g, "class", "step-content svelte-evkqad");
    },
    m(k, m) {
      M(k, e, m), N(t, e, null), G(e, l), N(i, e, null), G(e, r), G(e, s), G(s, a), G(a, o), G(s, u), G(s, c), G(c, f), M(k, d, m), M(k, g, m), ~h && b[h].m(g, null), _ = !0, I || (y = [
        Y(
          a,
          "click",
          /*goToPreviousStep*/
          n[14]
        ),
        Y(
          c,
          "click",
          /*goToNextStep*/
          n[13]
        )
      ], I = !0);
    },
    p(k, m) {
      const R = {};
      m & /*currentStepId*/
      4 && (R.currentId = /*currentStepId*/
      k[2]), m & /*visitedSteps*/
      16 && (R.visited = /*visitedSteps*/
      k[4]), i.$set(R), (!_ || m & /*isAtFirstStep*/
      32) && (a.disabled = /*isAtFirstStep*/
      k[5]), (!_ || m & /*isAtLastStep*/
      64) && (c.disabled = /*isAtLastStep*/
      k[6]);
      let B = h;
      h = Z(k), h === B ? ~h && b[h].p(k, m) : (p && (re(), w(b[B], 1, 1, () => {
        b[B] = null;
      }), se()), ~h ? (p = b[h], p ? p.p(k, m) : (p = b[h] = E[h](k), p.c()), C(p, 1), p.m(g, null)) : p = null);
    },
    i(k) {
      _ || (C(t.$$.fragment, k), C(i.$$.fragment, k), C(p), _ = !0);
    },
    o(k) {
      w(t.$$.fragment, k), w(i.$$.fragment, k), w(p), _ = !1;
    },
    d(k) {
      k && (D(e), D(d), D(g)), V(t), V(i), ~h && b[h].d(), I = !1, he(y);
    }
  };
}
function pu(n) {
  let e;
  return {
    c() {
      e = le("START PROCESS");
    },
    m(t, l) {
      M(t, e, l);
    },
    d(t) {
      t && D(e);
    }
  };
}
function bu(n) {
  let e, t, l, i, r, s, a;
  return t = new on({
    props: {
      breadcrumbs: (
        /*breadcrumbs*/
        n[7]
      ),
      activeIndex: 1
    }
  }), t.$on(
    "click",
    /*handleBreadcrumbClick*/
    n[8]
  ), i = new bt({
    props: {
      variant: "raised",
      style: "--mdc-theme-primary: var(--brand); --mdc-theme-on-primary: var(--on-brand)",
      disabled: !/*currentProcess*/
      n[0],
      "aria-label": "Add validation",
      $$slots: { default: [vu] },
      $$scope: { ctx: n }
    }
  }), i.$on("click", Wl), s = new gu({
    props: {
      pluginGroups: (
        /*pluginGroups*/
        n[3]
      ),
      currentProcess: (
        /*currentProcess*/
        n[0]
      ),
      breadcrumbs: (
        /*breadcrumbs*/
        n[7]
      ),
      activeBreadcrumbIndex: 2
    }
  }), s.$on("addValidation", Wl), s.$on(
    "breadcrumbClick",
    /*handleBreadcrumbClick*/
    n[8]
  ), {
    c() {
      e = F("div"), z(t.$$.fragment), l = U(), z(i.$$.fragment), r = U(), z(s.$$.fragment), v(e, "class", "header svelte-evkqad");
    },
    m(o, u) {
      M(o, e, u), N(t, e, null), G(e, l), N(i, e, null), M(o, r, u), N(s, o, u), a = !0;
    },
    p(o, u) {
      const c = {};
      u & /*breadcrumbs*/
      128 && (c.breadcrumbs = /*breadcrumbs*/
      o[7]), t.$set(c);
      const f = {};
      u & /*currentProcess*/
      1 && (f.disabled = !/*currentProcess*/
      o[0]), u & /*$$scope*/
      524288 && (f.$$scope = { dirty: u, ctx: o }), i.$set(f);
      const d = {};
      u & /*pluginGroups*/
      8 && (d.pluginGroups = /*pluginGroups*/
      o[3]), u & /*currentProcess*/
      1 && (d.currentProcess = /*currentProcess*/
      o[0]), u & /*breadcrumbs*/
      128 && (d.breadcrumbs = /*breadcrumbs*/
      o[7]), s.$set(d);
    },
    i(o) {
      a || (C(t.$$.fragment, o), C(i.$$.fragment, o), C(s.$$.fragment, o), a = !0);
    },
    o(o) {
      w(t.$$.fragment, o), w(i.$$.fragment, o), w(s.$$.fragment, o), a = !1;
    },
    d(o) {
      o && (D(e), D(r)), V(t), V(i), V(s, o);
    }
  };
}
function _u(n) {
  let e, t, l, i, r;
  return t = new on({
    props: {
      breadcrumbs: (
        /*breadcrumbs*/
        n[7]
      ),
      activeIndex: 1
    }
  }), t.$on(
    "click",
    /*handleBreadcrumbClick*/
    n[8]
  ), i = new eu({
    props: { pluginGroups: (
      /*pluginGroups*/
      n[3]
    ) }
  }), {
    c() {
      e = F("div"), z(t.$$.fragment), l = U(), z(i.$$.fragment), v(e, "class", "header svelte-evkqad");
    },
    m(s, a) {
      M(s, e, a), N(t, e, null), M(s, l, a), N(i, s, a), r = !0;
    },
    p(s, a) {
      const o = {};
      a & /*breadcrumbs*/
      128 && (o.breadcrumbs = /*breadcrumbs*/
      s[7]), t.$set(o);
      const u = {};
      a & /*pluginGroups*/
      8 && (u.pluginGroups = /*pluginGroups*/
      s[3]), i.$set(u);
    },
    i(s) {
      r || (C(t.$$.fragment, s), C(i.$$.fragment, s), r = !0);
    },
    o(s) {
      w(t.$$.fragment, s), w(i.$$.fragment, s), r = !1;
    },
    d(s) {
      s && (D(e), D(l)), V(t), V(i, s);
    }
  };
}
function vu(n) {
  let e;
  return {
    c() {
      e = le("ADD NEW VALIDATION");
    },
    m(t, l) {
      M(t, e, l);
    },
    d(t) {
      t && D(e);
    }
  };
}
function Cu(n) {
  let e, t, l, i;
  const r = [hu, mu], s = [];
  function a(o, u) {
    return (
      /*isEditing*/
      o[1] ? 0 : 1
    );
  }
  return t = a(n), l = s[t] = r[t](n), {
    c() {
      e = F("div"), l.c(), v(e, "class", "page-content svelte-evkqad");
    },
    m(o, u) {
      M(o, e, u), s[t].m(e, null), i = !0;
    },
    p(o, [u]) {
      let c = t;
      t = a(o), t === c ? s[t].p(o, u) : (re(), w(s[c], 1, 1, () => {
        s[c] = null;
      }), se(), l = s[t], l ? l.p(o, u) : (l = s[t] = r[t](o), l.c()), C(l, 1), l.m(e, null));
    },
    i(o) {
      i || (C(l), i = !0);
    },
    o(o) {
      w(l), i = !1;
    },
    d(o) {
      o && D(e), s[t].d();
    }
  };
}
function Wl() {
  alert("Add New Validation clicked!");
}
function Iu(n, e, t) {
  let l, i, r, { currentProcess: s = null } = e;
  const a = ["process-definition", "validator-configuration"], o = Xe();
  let u = !1, c = 0, f = a[0], d = [], g = [];
  function h(k) {
    k.detail.index === 0 && (ht.set(!0), o("back"));
  }
  function p() {
    s && o("start", s);
  }
  function _() {
    t(1, u = !0), ht.set(!1), t(15, c = 0), t(4, g = []);
  }
  function I() {
    t(1, u = !1), ht.set(!0), o("back");
  }
  function y(k) {
    const m = a.indexOf(k.detail);
    m !== -1 && t(15, c = m);
  }
  function E(k) {
    g.includes(k) || t(4, g = [...g, k]);
  }
  function b() {
    i || (E(f), t(15, c += 1), o("next"));
  }
  function Z() {
    l || (t(15, c -= 1), o("previous"));
  }
  return n.$$set = (k) => {
    "currentProcess" in k && t(0, s = k.currentProcess);
  }, n.$$.update = () => {
    n.$$.dirty & /*currentStepIndex*/
    32768 && t(2, f = a[c]), n.$$.dirty & /*currentStepIndex*/
    32768 && t(5, l = c === 0), n.$$.dirty & /*currentStepIndex*/
    32768 && t(6, i = c === a.length - 1), n.$$.dirty & /*currentProcess, isEditing*/
    3 && t(7, r = No(s, { edit: u })), n.$$.dirty & /*currentProcess*/
    1 && t(3, d = Vo(s));
  }, [
    s,
    u,
    f,
    d,
    g,
    l,
    i,
    r,
    h,
    p,
    _,
    I,
    y,
    b,
    Z,
    c
  ];
}
class yu extends $ {
  constructor(e) {
    super(), x(this, e, Iu, Cu, Q, { currentProcess: 0 });
  }
}
function Au(n) {
  let e, t;
  return e = new ti({
    props: {
      items: (
        /*plugins*/
        n[0].map(Bl)
      ),
      visited: (
        /*visited*/
        n[1]
      ),
      currentId: (
        /*currentId*/
        n[2]
      ),
      status: (
        /*pluginStatus*/
        n[3]
      ),
      tooltipMap: (
        /*tooltipText*/
        n[4]
      )
    }
  }), e.$on(
    "select",
    /*onSelect*/
    n[5]
  ), {
    c() {
      z(e.$$.fragment);
    },
    m(l, i) {
      N(e, l, i), t = !0;
    },
    p(l, [i]) {
      const r = {};
      i & /*plugins*/
      1 && (r.items = /*plugins*/
      l[0].map(Bl)), i & /*visited*/
      2 && (r.visited = /*visited*/
      l[1]), i & /*currentId*/
      4 && (r.currentId = /*currentId*/
      l[2]), i & /*pluginStatus*/
      8 && (r.status = /*pluginStatus*/
      l[3]), i & /*tooltipText*/
      16 && (r.tooltipMap = /*tooltipText*/
      l[4]), e.$set(r);
    },
    i(l) {
      t || (C(e.$$.fragment, l), t = !0);
    },
    o(l) {
      w(e.$$.fragment, l), t = !1;
    },
    d(l) {
      V(e, l);
    }
  };
}
const Bl = (n) => ({ id: n.id, label: n.name });
function ku(n, e, t) {
  let l, { plugins: i = [] } = e, { visited: r = [] } = e, { currentId: s = null } = e, { pluginStatus: a = {} } = e;
  const o = Xe(), u = (c) => {
    const f = i.find((d) => d.id === c.detail);
    f && o("select", f);
  };
  return n.$$set = (c) => {
    "plugins" in c && t(0, i = c.plugins), "visited" in c && t(1, r = c.visited), "currentId" in c && t(2, s = c.currentId), "pluginStatus" in c && t(3, a = c.pluginStatus);
  }, n.$$.update = () => {
    n.$$.dirty & /*plugins, pluginStatus*/
    9 && t(4, l = i.reduce(
      (c, f) => {
        const d = a[f.id];
        return c[f.id] = d ?? "", c;
      },
      {}
    ));
  }, [i, r, s, a, l, u];
}
class wu extends $ {
  constructor(e) {
    super(), x(this, e, ku, Au, Q, {
      plugins: 0,
      visited: 1,
      currentId: 2,
      pluginStatus: 3
    });
  }
}
function Ul(n) {
  let e = (
    /*tagName*/
    n[4]
  ), t, l = (
    /*tagName*/
    n[4] && en(n)
  );
  return {
    c() {
      l && l.c(), t = Ae();
    },
    m(i, r) {
      l && l.m(i, r), M(i, t, r);
    },
    p(i, r) {
      /*tagName*/
      i[4] ? e ? Q(
        e,
        /*tagName*/
        i[4]
      ) ? (l.d(1), l = en(i), e = /*tagName*/
      i[4], l.c(), l.m(t.parentNode, t)) : l.p(i, r) : (l = en(i), e = /*tagName*/
      i[4], l.c(), l.m(t.parentNode, t)) : e && (l.d(1), l = null, e = /*tagName*/
      i[4]);
    },
    d(i) {
      i && D(t), l && l.d(i);
    }
  };
}
function en(n) {
  let e, t, l, i;
  return {
    c() {
      e = F(
        /*tagName*/
        n[4]
      ), St(
        /*tagName*/
        n[4]
      )(e, { class: "svelte-uyxnge" });
    },
    m(r, s) {
      M(r, e, s), l || (i = ee(t = Ru.call(null, e, {
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
    p(r, s) {
      t && pe(t.update) && s & /*doc, editCount*/
      3 && t.update.call(null, {
        doc: (
          /*doc*/
          r[0]
        ),
        editCount: (
          /*editCount*/
          r[1]
        )
      });
    },
    d(r) {
      r && D(e), l = !1, i();
    }
  };
}
function Su(n) {
  let e, t, l, i, r, s, a, o, u, c, f, d, g, h;
  t = new ni({}), t.$on(
    "back",
    /*exitWorkflow*/
    n[9]
  ), i = new wu({
    props: {
      plugins: (
        /*plugins*/
        n[2]
      ),
      visited: (
        /*visited*/
        n[5]
      ),
      currentId: (
        /*tagName*/
        n[4]
      ),
      pluginStatus: (
        /*pluginStatus*/
        n[3]
      )
    }
  }), i.$on(
    "select",
    /*select_handler*/
    n[11]
  );
  let p = (
    /*tagName*/
    n[4] && Ul(n)
  );
  return {
    c() {
      e = F("div"), z(t.$$.fragment), l = U(), z(i.$$.fragment), r = U(), s = F("div"), a = F("button"), a.textContent = "Back", o = U(), u = F("button"), u.textContent = "Next", c = U(), p && p.c(), f = Ae(), v(a, "class", "back-button svelte-uyxnge"), v(u, "class", "next-button svelte-uyxnge"), v(s, "class", "stepper-navigation svelte-uyxnge"), v(e, "class", "stepper svelte-uyxnge");
    },
    m(_, I) {
      M(_, e, I), N(t, e, null), G(e, l), N(i, e, null), G(e, r), G(e, s), G(s, a), G(s, o), G(s, u), M(_, c, I), p && p.m(_, I), M(_, f, I), d = !0, g || (h = [
        Y(
          a,
          "click",
          /*previousPlugin*/
          n[8]
        ),
        Y(
          u,
          "click",
          /*nextPlugin*/
          n[7]
        )
      ], g = !0);
    },
    p(_, [I]) {
      const y = {};
      I & /*plugins*/
      4 && (y.plugins = /*plugins*/
      _[2]), I & /*visited*/
      32 && (y.visited = /*visited*/
      _[5]), I & /*tagName*/
      16 && (y.currentId = /*tagName*/
      _[4]), I & /*pluginStatus*/
      8 && (y.pluginStatus = /*pluginStatus*/
      _[3]), i.$set(y), /*tagName*/
      _[4] ? p ? p.p(_, I) : (p = Ul(_), p.c(), p.m(f.parentNode, f)) : p && (p.d(1), p = null);
    },
    i(_) {
      d || (C(t.$$.fragment, _), C(i.$$.fragment, _), d = !0);
    },
    o(_) {
      w(t.$$.fragment, _), w(i.$$.fragment, _), d = !1;
    },
    d(_) {
      _ && (D(e), D(c), D(f)), V(t), V(i), p && p.d(_), g = !1, he(h);
    }
  };
}
function Ru(n, e) {
  return Object.assign(n, e), { update: (t) => Object.assign(n, t) };
}
function Lu(n, e, t) {
  let { doc: l } = e, { editCount: i = -1 } = e, { host: r } = e, { plugins: s = [] } = e, a = null, o = [];
  const u = ["check", "warning", "error"];
  let c = {};
  const f = Xe();
  function d(y) {
    return Nt(this, void 0, void 0, function* () {
      if (yield qo(y), t(4, a = y.id), !o.includes(y.id)) {
        t(5, o = [...o, y.id]);
        const E = s.findIndex((b) => b.id === y.id);
        t(3, c = Object.assign(Object.assign({}, c), {
          [y.id]: u[E % u.length]
        }));
      }
    });
  }
  function g() {
    p(1);
  }
  function h() {
    p(-1);
  }
  function p(y) {
    const E = s.findIndex((b) => b.id === a);
    d(s[(E + y + s.length) % s.length]);
  }
  Ne(() => {
    s.length && (Xo(s).catch(console.error), d(s[0])), ht.set(!1);
  });
  function _() {
    ht.set(!0), f("exit");
  }
  const I = (y) => d(y.detail);
  return n.$$set = (y) => {
    "doc" in y && t(0, l = y.doc), "editCount" in y && t(1, i = y.editCount), "host" in y && t(10, r = y.host), "plugins" in y && t(2, s = y.plugins);
  }, n.$$.update = () => {
    n.$$.dirty & /*plugins, pluginStatus*/
    12 && s.reduce(
      (y, E) => {
        const b = c[E.id];
        return y[E.id] = b ?? "", y;
      },
      {}
    );
  }, [
    l,
    i,
    s,
    c,
    a,
    o,
    d,
    g,
    h,
    _,
    r,
    I
  ];
}
class Eu extends $ {
  constructor(e) {
    super(), x(this, e, Lu, Su, Q, {
      doc: 0,
      editCount: 1,
      host: 10,
      plugins: 2
    });
  }
}
function Hu(n) {
  let e, t;
  return e = new Ao({
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
    /*handleView*/
    n[8]
  ), e.$on(
    "start",
    /*handleStart*/
    n[9]
  ), {
    c() {
      z(e.$$.fragment);
    },
    m(l, i) {
      N(e, l, i), t = !0;
    },
    p(l, i) {
      const r = {};
      i & /*processes*/
      8 && (r.processes = /*processes*/
      l[3]), i & /*loading*/
      64 && (r.loading = /*loading*/
      l[6]), i & /*errorMsg*/
      128 && (r.errorMsg = /*errorMsg*/
      l[7]), e.$set(r);
    },
    i(l) {
      t || (C(e.$$.fragment, l), t = !0);
    },
    o(l) {
      w(e.$$.fragment, l), t = !1;
    },
    d(l) {
      V(e, l);
    }
  };
}
function Gu(n) {
  let e, t;
  return e = new yu({
    props: { currentProcess: (
      /*selected*/
      n[4]
    ) }
  }), e.$on(
    "back",
    /*goBack*/
    n[10]
  ), e.$on(
    "start",
    /*handleStart*/
    n[9]
  ), {
    c() {
      z(e.$$.fragment);
    },
    m(l, i) {
      N(e, l, i), t = !0;
    },
    p(l, i) {
      const r = {};
      i & /*selected*/
      16 && (r.currentProcess = /*selected*/
      l[4]), e.$set(r);
    },
    i(l) {
      t || (C(e.$$.fragment, l), t = !0);
    },
    o(l) {
      w(e.$$.fragment, l), t = !1;
    },
    d(l) {
      V(e, l);
    }
  };
}
function Du(n) {
  let e, t;
  return e = new Eu({
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
  }), e.$on(
    "exit",
    /*exitWorkflow*/
    n[11]
  ), {
    c() {
      z(e.$$.fragment);
    },
    m(l, i) {
      N(e, l, i), t = !0;
    },
    p(l, i) {
      const r = {};
      i & /*doc*/
      1 && (r.doc = /*doc*/
      l[0]), i & /*editCount*/
      2 && (r.editCount = /*editCount*/
      l[1]), i & /*host*/
      4 && (r.host = /*host*/
      l[2]), i & /*running*/
      32 && (r.plugins = /*running*/
      l[5].plugins), e.$set(r);
    },
    i(l) {
      t || (C(e.$$.fragment, l), t = !0);
    },
    o(l) {
      w(e.$$.fragment, l), t = !1;
    },
    d(l) {
      V(e, l);
    }
  };
}
function Mu(n) {
  let e, t, l, i;
  const r = [Du, Gu, Hu], s = [];
  function a(o, u) {
    return (
      /*running*/
      o[5] ? 0 : (
        /*selected*/
        o[4] ? 1 : 2
      )
    );
  }
  return e = a(n), t = s[e] = r[e](n), {
    c() {
      t.c(), l = Ae();
    },
    m(o, u) {
      s[e].m(o, u), M(o, l, u), i = !0;
    },
    p(o, [u]) {
      let c = e;
      e = a(o), e === c ? s[e].p(o, u) : (re(), w(s[c], 1, 1, () => {
        s[c] = null;
      }), se(), t = s[e], t ? t.p(o, u) : (t = s[e] = r[e](o), t.c()), C(t, 1), t.m(l.parentNode, l));
    },
    i(o) {
      i || (C(t), i = !0);
    },
    o(o) {
      w(t), i = !1;
    },
    d(o) {
      o && D(l), s[e].d(o);
    }
  };
}
function Pu(n, e, t) {
  let { doc: l } = e, { editCount: i = -1 } = e, { host: r } = e, s = [], a = null, o = null, u = !0, c = "";
  const f = new URL("data:application/xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHByb2Nlc3Nlcz4KICA8cHJvY2Vzcz4KICAgIDxpZD5zdGFuZGFyZC1wcm9jZXNzLTE8L2lkPgogICAgPHZlcnNpb24+MC4wLjE8L3ZlcnNpb24+CiAgICA8bmFtZT5TdGFuZGFyZCBQcm9jZXNzIDE8L25hbWU+CiAgICA8ZGVzY3JpcHRpb24+CiAgICAgIFRoaXMgaXMgYSBzdGFuZGFyZGl6ZWQgcHJvY2VzcyB1c2VkIGZvciB0ZXN0aW5nIHB1cnBvc2VzIG9ubHkKICAgIDwvZGVzY3JpcHRpb24+CgogICAgPHBsdWdpbnMtc2VxdWVuY2U+CiAgICAgIDxncm91cD4KICAgICAgICA8dGl0bGU+RGF0YTwvdGl0bGU+CiAgICAgICAgPHBsdWdpbj4KICAgICAgICAgIDxpZD5zdWJzdGF0aW9uLWV4cGxvcmVyPC9pZD4KICAgICAgICAgIDxuYW1lPlN1YnN0YXRpb248L25hbWU+CiAgICAgICAgICA8c3JjPgogICAgICAgICAgICBodHRwczovL3BoaWxpcHBpbGlldnNraWJlYXJpbmdwb2ludGNvbS5naXRodWIuaW8vb3NjZC1vZmZpY2lhbC1wbHVnaW5zLXRlc3QvcGx1Z2lucy9lZGl0b3JzL3N1YnN0YXRpb24uanMKICAgICAgICAgIDwvc3JjPgogICAgICAgIDwvcGx1Z2luPgogICAgICA8L2dyb3VwPgoKICAgICAgPGdyb3VwPgogICAgICAgIDx0aXRsZT5Db25uZWN0aW9uPC90aXRsZT4KICAgICAgICA8cGx1Z2luPgogICAgICAgICAgPGlkPmllZC1lZGl0b3I8L2lkPgogICAgICAgICAgPG5hbWU+SUVEPC9uYW1lPgogICAgICAgICAgPHNyYz4KICAgICAgICAgICAgaHR0cHM6Ly9waGlsaXBwaWxpZXZza2liZWFyaW5ncG9pbnRjb20uZ2l0aHViLmlvL29zY2Qtb2ZmaWNpYWwtcGx1Z2lucy10ZXN0L3BsdWdpbnMvZWRpdG9ycy9pZWQuanMKICAgICAgICAgIDwvc3JjPgogICAgICAgIDwvcGx1Z2luPgoKICAgICAgICA8cGx1Z2luPgogICAgICAgICAgPGlkPnRlbXBsYXRlLWdlbmVyYXRvcjwvaWQ+CiAgICAgICAgICA8bmFtZT5UZW1wbGF0ZSBHZW5lcmF0b3I8L25hbWU+CiAgICAgICAgICA8c3JjPgogICAgICAgICAgICBodHRwczovL2FzZS1jb21wYXMuZ2l0aHViLmlvL2NvbXBhcy10cmFuc25ldGJ3LXBsdWdpbnMvYmVhcmluZ3BvaW50L2NvbXBhcy9wbHVnaW5zL3RlbXBsYXRlLWdlbmVyYXRvci9pbmRleC5qcwogICAgICAgICAgPC9zcmM+CiAgICAgICAgPC9wbHVnaW4+CgogICAgICA8L2dyb3VwPgogICAgICA8Z3JvdXA+CiAgICAgICAgPHRpdGxlPkNvbW11bmljYXRpb248L3RpdGxlPgogICAgICAgIDxwbHVnaW4+CiAgICAgICAgICA8aWQ+Y29tbXVuaWNhdGlvbi1leHBsb3JlcjwvaWQ+CiAgICAgICAgICA8bmFtZT5Db21tdW5pY2F0aW9uIEV4cGxvcmVyPC9uYW1lPgogICAgICAgICAgPHNyYz4KICAgICAgICAgICAgaHR0cHM6Ly9waGlsaXBwaWxpZXZza2liZWFyaW5ncG9pbnRjb20uZ2l0aHViLmlvL29zY2Qtb2ZmaWNpYWwtcGx1Z2lucy10ZXN0L3BsdWdpbnMvZWRpdG9ycy9jb21tdW5pY2F0aW9uLmpzCiAgICAgICAgICA8L3NyYz4KICAgICAgICA8L3BsdWdpbj4KICAgICAgPC9ncm91cD4KICAgIDwvcGx1Z2lucy1zZXF1ZW5jZT4KICA8L3Byb2Nlc3M+CjwvcHJvY2Vzc2VzPgo=", import.meta.url).href, d = (k) => {
    var m, R;
    return (R = (m = k == null ? void 0 : k.textContent) === null || m === void 0 ? void 0 : m.trim()) !== null && R !== void 0 ? R : "";
  }, g = (k) => ({
    id: d(k.querySelector("id")),
    name: d(k.querySelector("name")),
    src: d(k.querySelector("src"))
  }), h = (k) => Array.from(k.querySelectorAll("process")).map((m) => {
    const R = Array.from(m.querySelectorAll("plugins-sequence > group")), B = R.length ? R.map((A) => ({
      title: d(A.querySelector(":scope > title")),
      plugins: Array.from(A.querySelectorAll(":scope > plugin")).map(g)
    })) : void 0, H = B ? B.flatMap((A) => A.plugins) : Array.from(m.querySelectorAll("plugins-sequence > plugin")).map(g);
    return {
      id: d(m.querySelector(":scope > id")),
      version: d(m.querySelector(":scope > version")),
      name: d(m.querySelector(":scope > name")),
      description: d(m.querySelector(":scope > description")),
      plugins: H,
      pluginGroups: B
    };
  });
  let p = null;
  function _() {
    return Nt(this, void 0, void 0, function* () {
      t(6, u = !0), t(7, c = ""), p == null || p.abort(), p = new AbortController();
      try {
        const k = yield fetch(f, {
          cache: "no-cache",
          signal: p.signal
        });
        if (!k.ok)
          throw new Error(`HTTP ${k.status}`);
        const m = yield k.text(), R = new DOMParser().parseFromString(m, "application/xml");
        if (R.querySelector("parsererror"))
          throw new Error("Invalid XML file format.");
        t(3, s = h(R));
      } catch (k) {
        if ((k == null ? void 0 : k.name) === "AbortError")
          return;
        t(3, s = []), t(7, c = k.message || "Failed to load processes.");
      } finally {
        t(6, u = !1);
      }
    });
  }
  Ne(() => (_(), () => p == null ? void 0 : p.abort()));
  function I(k) {
    t(5, o = k), t(4, a = null);
  }
  function y(k) {
    t(4, a = k.detail);
  }
  function E(k) {
    I(k.detail);
  }
  function b() {
    t(4, a = null);
  }
  function Z() {
    t(5, o = null), t(4, a = null);
  }
  return n.$$set = (k) => {
    "doc" in k && t(0, l = k.doc), "editCount" in k && t(1, i = k.editCount), "host" in k && t(2, r = k.host);
  }, [
    l,
    i,
    r,
    s,
    a,
    o,
    u,
    c,
    y,
    E,
    b,
    Z
  ];
}
class Tu extends $ {
  constructor(e) {
    super(), x(this, e, Pu, Mu, Q, { doc: 0, editCount: 1, host: 2 });
  }
}
function Ol(n) {
  let e, t;
  return e = new Tu({
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
      z(e.$$.fragment);
    },
    m(l, i) {
      N(e, l, i), t = !0;
    },
    p(l, i) {
      const r = {};
      i & /*doc*/
      1 && (r.doc = /*doc*/
      l[0]), i & /*editCount*/
      4 && (r.editCount = /*editCount*/
      l[2]), e.$set(r);
    },
    i(l) {
      t || (C(e.$$.fragment, l), t = !0);
    },
    o(l) {
      w(e.$$.fragment, l), t = !1;
    },
    d(l) {
      V(e, l);
    }
  };
}
function Zu(n) {
  let e, t, l, i, r, s = (
    /*doc*/
    (n[0] || /*dev*/
    n[1]) && Ol(n)
  );
  return {
    c() {
      s && s.c(), e = U(), t = F("input"), l = U(), i = F("input"), v(t, "type", "hidden"), v(t, "name", "package-name"), t.value = Xl, v(i, "type", "hidden"), v(i, "name", "package-version"), i.value = Yl;
    },
    m(a, o) {
      s && s.m(a, o), M(a, e, o), M(a, t, o), M(a, l, o), M(a, i, o), r = !0;
    },
    p(a, [o]) {
      /*doc*/
      a[0] || /*dev*/
      a[1] ? s ? (s.p(a, o), o & /*doc, dev*/
      3 && C(s, 1)) : (s = Ol(a), s.c(), C(s, 1), s.m(e.parentNode, e)) : s && (re(), w(s, 1, 1, () => {
        s = null;
      }), se());
    },
    i(a) {
      r || (C(s), r = !0);
    },
    o(a) {
      w(s), r = !1;
    },
    d(a) {
      a && (D(e), D(t), D(l), D(i)), s && s.d(a);
    }
  };
}
function Fu(n, e, t) {
  let { doc: l } = e, { dev: i = !1 } = e, { editCount: r = 0 } = e;
  return console.log("editcount", r), n.$$set = (s) => {
    "doc" in s && t(0, l = s.doc), "dev" in s && t(1, i = s.dev), "editCount" in s && t(2, r = s.editCount);
  }, [l, i, r];
}
class Wu extends $ {
  constructor(e) {
    super(), x(this, e, Fu, Zu, Q, { doc: 0, dev: 1, editCount: 2 });
  }
}
class Nu extends HTMLElement {
  connectedCallback() {
    var t;
    this.attachShadow({ mode: "open" }), this.plugin = new Wu({
      target: this.shadowRoot,
      props: {
        doc: this._doc,
        editCount: -1,
        host: this
      }
    });
    const e = Bu();
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
function Bu() {
  const n = `${Xl}-v${Yl}-style`, e = Uu(), t = document.createElement("link");
  return t.rel = "stylesheet", t.type = "text/css", t.href = e, t.id = n, t;
}
function Uu() {
  const n = new URL(import.meta.url), e = n.origin, t = n.pathname.split("/").slice(0, -1).filter(Boolean).join("/");
  return [e, t, "style.css"].filter(Boolean).join("/");
}
export {
  Nu as default
};
