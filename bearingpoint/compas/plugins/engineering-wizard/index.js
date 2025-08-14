var mi = Object.defineProperty;
var gi = (n, e, t) => e in n ? mi(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var Zt = (n, e, t) => (gi(n, typeof e != "symbol" ? e + "" : e, t), t);
function $() {
}
function Z(n, e) {
  for (const t in e)
    n[t] = e[t];
  return (
    /** @type {T & S} */
    n
  );
}
function Cl(n) {
  return n();
}
function on() {
  return /* @__PURE__ */ Object.create(null);
}
function he(n) {
  n.forEach(Cl);
}
function ve(n) {
  return typeof n == "function";
}
function se(n, e) {
  return n != n ? e == e : n !== e || n && typeof n == "object" || typeof n == "function";
}
function pi(n) {
  return Object.keys(n).length === 0;
}
function _i(n, ...e) {
  if (n == null) {
    for (const l of e)
      l(void 0);
    return $;
  }
  const t = n.subscribe(...e);
  return t.unsubscribe ? () => t.unsubscribe() : t;
}
function ut(n, e, t) {
  n.$$.on_destroy.push(_i(e, t));
}
function le(n, e, t, l) {
  if (n) {
    const i = Il(n, e, t, l);
    return n[0](i);
  }
}
function Il(n, e, t, l) {
  return n[1] && l ? Z(t.ctx.slice(), n[1](l(e))) : t.ctx;
}
function ie(n, e, t, l) {
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
function re(n, e, t, l, i, r) {
  if (i) {
    const s = Il(e, t, l, r);
    n.p(s, i);
  }
}
function ae(n) {
  if (n.ctx.length > 32) {
    const e = [], t = n.ctx.length / 32;
    for (let l = 0; l < t; l++)
      e[l] = -1;
    return e;
  }
  return -1;
}
function Oe(n) {
  const e = {};
  for (const t in n)
    t[0] !== "$" && (e[t] = n[t]);
  return e;
}
function ue(n, e) {
  const t = {};
  e = new Set(e);
  for (const l in n)
    !e.has(l) && l[0] !== "$" && (t[l] = n[l]);
  return t;
}
function en(n) {
  const e = {};
  for (const t in n)
    e[t] = !0;
  return e;
}
function Kt(n, e, t) {
  return n.set(t), e;
}
function Q(n) {
  return n && ve(n.destroy) ? n.destroy : $;
}
const bi = typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : (
  // @ts-ignore Node typings have this
  global
);
function B(n, e) {
  n.appendChild(e);
}
function U(n, e, t) {
  n.insertBefore(e, t || null);
}
function O(n) {
  n.parentNode && n.parentNode.removeChild(n);
}
function tn(n, e) {
  for (let t = 0; t < n.length; t += 1)
    n[t] && n[t].d(e);
}
function F(n) {
  return document.createElement(n);
}
function qe(n) {
  return document.createElementNS("http://www.w3.org/2000/svg", n);
}
function ye(n) {
  return document.createTextNode(n);
}
function W() {
  return ye(" ");
}
function Se() {
  return ye("");
}
function z(n, e, t, l) {
  return n.addEventListener(e, t, l), () => n.removeEventListener(e, t, l);
}
function T(n, e, t) {
  t == null ? n.removeAttribute(e) : n.getAttribute(e) !== t && n.setAttribute(e, t);
}
const vi = ["width", "height"];
function ne(n, e) {
  const t = Object.getOwnPropertyDescriptors(n.__proto__);
  for (const l in e)
    e[l] == null ? n.removeAttribute(l) : l === "style" ? n.style.cssText = e[l] : l === "__value" ? n.value = n[l] = e[l] : t[l] && t[l].set && vi.indexOf(l) === -1 ? n[l] = e[l] : T(n, l, e[l]);
}
function un(n, e) {
  for (const t in e)
    T(n, t, e[t]);
}
function Ci(n, e) {
  Object.keys(e).forEach((t) => {
    Ii(n, t, e[t]);
  });
}
function Ii(n, e, t) {
  const l = e.toLowerCase();
  l in n ? n[l] = typeof n[l] == "boolean" && t === "" ? !0 : t : e in n ? n[e] = typeof n[e] == "boolean" && t === "" ? !0 : t : T(n, e, t);
}
function Ct(n) {
  return /-/.test(n) ? Ci : ne;
}
function Ai(n) {
  return Array.from(n.childNodes);
}
function He(n, e) {
  e = "" + e, n.data !== e && (n.data = /** @type {string} */
  e);
}
function cn(n, e) {
  n.value = e ?? "";
}
function Dt(n, e, t, l) {
  t == null ? n.style.removeProperty(e) : n.style.setProperty(e, t, "");
}
function rt(n, e, t) {
  n.classList.toggle(e, !!t);
}
function yi(n, e, { bubbles: t = !1, cancelable: l = !1 } = {}) {
  return new CustomEvent(n, { detail: e, bubbles: t, cancelable: l });
}
function Ot(n, e) {
  return new n(e);
}
let It;
function bt(n) {
  It = n;
}
function Re() {
  if (!It)
    throw new Error("Function called outside component initialization");
  return It;
}
function Ne(n) {
  Re().$$.on_mount.push(n);
}
function At(n) {
  Re().$$.on_destroy.push(n);
}
function nn() {
  const n = Re();
  return (e, t, { cancelable: l = !1 } = {}) => {
    const i = n.$$.callbacks[e];
    if (i) {
      const r = yi(
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
  return Re().$$.context.set(n, e), e;
}
function Pe(n) {
  return Re().$$.context.get(n);
}
function Ut(n, e) {
  const t = n.$$.callbacks[e.type];
  t && t.slice().forEach((l) => l.call(this, e));
}
const ot = [], ee = [];
let ct = [];
const Jt = [], Al = /* @__PURE__ */ Promise.resolve();
let Qt = !1;
function yl() {
  Qt || (Qt = !0, Al.then(kl));
}
function ki() {
  return yl(), Al;
}
function xt(n) {
  ct.push(n);
}
function Xe(n) {
  Jt.push(n);
}
const jt = /* @__PURE__ */ new Set();
let at = 0;
function kl() {
  if (at !== 0)
    return;
  const n = It;
  do {
    try {
      for (; at < ot.length; ) {
        const e = ot[at];
        at++, bt(e), wi(e.$$);
      }
    } catch (e) {
      throw ot.length = 0, at = 0, e;
    }
    for (bt(null), ot.length = 0, at = 0; ee.length; )
      ee.pop()();
    for (let e = 0; e < ct.length; e += 1) {
      const t = ct[e];
      jt.has(t) || (jt.add(t), t());
    }
    ct.length = 0;
  } while (ot.length);
  for (; Jt.length; )
    Jt.pop()();
  Qt = !1, jt.clear(), bt(n);
}
function wi(n) {
  if (n.fragment !== null) {
    n.update(), he(n.before_update);
    const e = n.dirty;
    n.dirty = [-1], n.fragment && n.fragment.p(n.ctx, e), n.after_update.forEach(xt);
  }
}
function Li(n) {
  const e = [], t = [];
  ct.forEach((l) => n.indexOf(l) === -1 ? e.push(l) : t.push(l)), t.forEach((l) => l()), ct = e;
}
const Mt = /* @__PURE__ */ new Set();
let lt;
function ge() {
  lt = {
    r: 0,
    c: [],
    p: lt
    // parent group
  };
}
function pe() {
  lt.r || he(lt.c), lt = lt.p;
}
function w(n, e) {
  n && n.i && (Mt.delete(n), n.i(e));
}
function E(n, e, t, l) {
  if (n && n.o) {
    if (Mt.has(n))
      return;
    Mt.add(n), lt.c.push(() => {
      Mt.delete(n), l && (t && n.d(1), l());
    }), n.o(e);
  } else
    l && l();
}
function je(n) {
  return (n == null ? void 0 : n.length) !== void 0 ? n : Array.from(n);
}
function Si(n, e) {
  n.d(1), e.delete(n.key);
}
function Ri(n, e) {
  E(n, 1, 1, () => {
    e.delete(n.key);
  });
}
function wl(n, e, t, l, i, r, s, a, o, u, c, f) {
  let d = n.length, g = r.length, b = d;
  const y = {};
  for (; b--; )
    y[n[b].key] = b;
  const _ = [], L = /* @__PURE__ */ new Map(), C = /* @__PURE__ */ new Map(), p = [];
  for (b = g; b--; ) {
    const h = f(i, r, b), k = t(h);
    let q = s.get(k);
    q ? p.push(() => q.p(h, e)) : (q = u(k, h), q.c()), L.set(k, _[b] = q), k in y && C.set(k, Math.abs(b - y[k]));
  }
  const m = /* @__PURE__ */ new Set(), D = /* @__PURE__ */ new Set();
  function S(h) {
    w(h, 1), h.m(a, c), s.set(h.key, h), c = h.first, g--;
  }
  for (; d && g; ) {
    const h = _[g - 1], k = n[d - 1], q = h.key, M = k.key;
    h === k ? (c = h.first, d--, g--) : L.has(M) ? !s.has(q) || m.has(q) ? S(h) : D.has(M) ? d-- : C.get(q) > C.get(M) ? (D.add(q), S(h)) : (m.add(M), d--) : (o(k, s), d--);
  }
  for (; d--; ) {
    const h = n[d];
    L.has(h.key) || o(h, s);
  }
  for (; g; )
    S(_[g - 1]);
  return he(p), _;
}
function oe(n, e) {
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
function we(n) {
  return typeof n == "object" && n !== null ? n : {};
}
function Ye(n, e, t) {
  const l = n.$$.props[e];
  l !== void 0 && (n.$$.bound[l] = t, t(n.$$.ctx[l]));
}
function K(n) {
  n && n.c();
}
function X(n, e, t) {
  const { fragment: l, after_update: i } = n.$$;
  l && l.m(e, t), xt(() => {
    const r = n.$$.on_mount.map(Cl).filter(ve);
    n.$$.on_destroy ? n.$$.on_destroy.push(...r) : he(r), n.$$.on_mount = [];
  }), i.forEach(xt);
}
function Y(n, e) {
  const t = n.$$;
  t.fragment !== null && (Li(t.after_update), he(t.on_destroy), t.fragment && t.fragment.d(e), t.on_destroy = t.fragment = null, t.ctx = []);
}
function Ei(n, e) {
  n.$$.dirty[0] === -1 && (ot.push(n), yl(), n.$$.dirty.fill(0)), n.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function ce(n, e, t, l, i, r, s = null, a = [-1]) {
  const o = It;
  bt(n);
  const u = n.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: r,
    update: $,
    not_equal: i,
    bound: on(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (o ? o.$$.context : [])),
    // everything else
    callbacks: on(),
    dirty: a,
    skip_bound: !1,
    root: e.target || o.$$.root
  };
  s && s(u.root);
  let c = !1;
  if (u.ctx = t ? t(n, e.props || {}, (f, d, ...g) => {
    const b = g.length ? g[0] : d;
    return u.ctx && i(u.ctx[f], u.ctx[f] = b) && (!u.skip_bound && u.bound[f] && u.bound[f](b), c && Ei(n, f)), d;
  }) : [], u.update(), c = !0, he(u.before_update), u.fragment = l ? l(u.ctx) : !1, e.target) {
    if (e.hydrate) {
      const f = Ai(e.target);
      u.fragment && u.fragment.l(f), f.forEach(O);
    } else
      u.fragment && u.fragment.c();
    e.intro && w(n.$$.fragment), X(n, e.target, e.anchor), kl();
  }
  bt(o);
}
class fe {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    Zt(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    Zt(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    Y(this, 1), this.$destroy = $;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, t) {
    if (!ve(t))
      return $;
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
    this.$$set && !pi(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const Hi = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(Hi);
const Ll = "archive-explorer", Sl = "0.0.1";
var $t = function(n, e) {
  return $t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, l) {
    t.__proto__ = l;
  } || function(t, l) {
    for (var i in l)
      Object.prototype.hasOwnProperty.call(l, i) && (t[i] = l[i]);
  }, $t(n, e);
};
function dt(n, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  $t(n, e);
  function t() {
    this.constructor = n;
  }
  n.prototype = e === null ? Object.create(e) : (t.prototype = e.prototype, new t());
}
var Ue = function() {
  return Ue = Object.assign || function(e) {
    for (var t, l = 1, i = arguments.length; l < i; l++) {
      t = arguments[l];
      for (var r in t)
        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
    }
    return e;
  }, Ue.apply(this, arguments);
};
function ln(n, e, t, l) {
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
function Di(n, e) {
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
function Ke(n) {
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
function x(n) {
  return Object.entries(n).filter(([e, t]) => e !== "" && t).map(([e]) => e).join(" ");
}
function Ae(n, e, t, l = { bubbles: !0 }, i = !1) {
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
function ft(n, e) {
  let t = Object.getOwnPropertyNames(n);
  const l = {};
  for (let i = 0; i < t.length; i++) {
    const r = t[i], s = r.indexOf("$");
    s !== -1 && e.indexOf(r.substring(0, s + 1)) !== -1 || e.indexOf(r) === -1 && (l[r] = n[r]);
  }
  return l;
}
const fn = /^[a-z]+(?::(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/, Mi = /^[^$]+(?:\$(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/;
function Be(n) {
  let e, t = [];
  n.$on = (i, r) => {
    let s = i, a = () => {
    };
    return e ? a = e(s, r) : t.push([s, r]), s.match(fn) && console && console.warn('Event modifiers in SMUI now use "$" instead of ":", so that all events can be bound with modifiers. Please update your event binding: ', s), () => {
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
      const d = u.match(fn), g = u.match(Mi), b = d || g;
      if (u.match(/^SMUI:\w+:/)) {
        const L = u.split(":");
        let C = "";
        for (let p = 0; p < L.length; p++)
          C += p === L.length - 1 ? ":" + L[p] : L[p].split("-").map((m) => m.slice(0, 1).toUpperCase() + m.slice(1)).join("");
        console.warn(`The event ${u.split("$")[0]} has been renamed to ${C.split("$")[0]}.`), u = C;
      }
      if (b) {
        const L = u.split(d ? ":" : "$");
        u = L[0];
        const C = L.slice(1).reduce((p, m) => (p[m] = !0, p), {});
        C.passive && (f = f || {}, f.passive = !0), C.nonpassive && (f = f || {}, f.passive = !1), C.capture && (f = f || {}, f.capture = !0), C.once && (f = f || {}, f.once = !0), C.preventDefault && (c = Ti(c)), C.stopPropagation && (c = Oi(c)), C.stopImmediatePropagation && (c = Ui(c)), C.self && (c = Bi(i, c)), C.trusted && (c = Pi(c));
      }
      const y = dn(i, u, c, f), _ = () => {
        y();
        const L = r.indexOf(_);
        L > -1 && r.splice(L, 1);
      };
      return r.push(_), u in s || (s[u] = dn(i, u, l)), _;
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
function dn(n, e, t, l) {
  return n.addEventListener(e, t, l), () => n.removeEventListener(e, t, l);
}
function Ti(n) {
  return function(e) {
    return e.preventDefault(), n.call(this, e);
  };
}
function Oi(n) {
  return function(e) {
    return e.stopPropagation(), n.call(this, e);
  };
}
function Ui(n) {
  return function(e) {
    return e.stopImmediatePropagation(), n.call(this, e);
  };
}
function Bi(n, e) {
  return function(t) {
    if (t.target === n)
      return e.call(this, t);
  };
}
function Pi(n) {
  return function(e) {
    if (e.isTrusted)
      return n.call(this, e);
  };
}
function De(n, e) {
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
var Rt;
function Fi(n, e) {
  e === void 0 && (e = !1);
  var t = n.CSS, l = Rt;
  if (typeof Rt == "boolean" && !e)
    return Rt;
  var i = t && typeof t.supports == "function";
  if (!i)
    return !1;
  var r = t.supports("--css-vars", "yes"), s = t.supports("(--css-vars: yes)") && t.supports("color", "#00000000");
  return l = r || s, e || (Rt = l), l;
}
function qi(n, e, t) {
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
var ht = (
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
function Ni(n) {
  return n === void 0 && (n = window), Gi(n) ? { passive: !0 } : !1;
}
function Gi(n) {
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
const Rl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  applyPassive: Ni
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
function Zi(n, e) {
  if (n.closest)
    return n.closest(e);
  for (var t = n; t; ) {
    if (El(t, e))
      return t;
    t = t.parentElement;
  }
  return null;
}
function El(n, e) {
  var t = n.matches || n.webkitMatchesSelector || n.msMatchesSelector;
  return t.call(n, e);
}
function ji(n) {
  var e = n;
  if (e.offsetParent !== null)
    return e.scrollWidth;
  var t = e.cloneNode(!0);
  t.style.setProperty("position", "absolute"), t.style.setProperty("transform", "translate(-9999px, -9999px)"), document.documentElement.appendChild(t);
  var l = t.scrollWidth;
  return document.documentElement.removeChild(t), l;
}
const Hl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  closest: Zi,
  estimateScrollWidth: ji,
  matches: El
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
var Wi = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  BG_FOCUSED: "mdc-ripple-upgraded--background-focused",
  FG_ACTIVATION: "mdc-ripple-upgraded--foreground-activation",
  FG_DEACTIVATION: "mdc-ripple-upgraded--foreground-deactivation",
  ROOT: "mdc-ripple-upgraded",
  UNBOUNDED: "mdc-ripple-upgraded--unbounded"
}, Vi = {
  VAR_FG_SCALE: "--mdc-ripple-fg-scale",
  VAR_FG_SIZE: "--mdc-ripple-fg-size",
  VAR_FG_TRANSLATE_END: "--mdc-ripple-fg-translate-end",
  VAR_FG_TRANSLATE_START: "--mdc-ripple-fg-translate-start",
  VAR_LEFT: "--mdc-ripple-left",
  VAR_TOP: "--mdc-ripple-top"
}, hn = {
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
var mn = [
  "touchstart",
  "pointerdown",
  "mousedown",
  "keydown"
], gn = [
  "touchend",
  "pointerup",
  "mouseup",
  "contextmenu"
], Et = [], zi = (
  /** @class */
  function(n) {
    dt(e, n);
    function e(t) {
      var l = n.call(this, Ue(Ue({}, e.defaultAdapter), t)) || this;
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
        return Wi;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Vi;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return hn;
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
          for (var r = Ke(mn), s = r.next(); !s.done; s = r.next()) {
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
          for (var r = Ke(gn), s = r.next(); !s.done; s = r.next()) {
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
        for (var i = Ke(mn), r = i.next(); !r.done; r = i.next()) {
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
        for (var i = Ke(gn), r = i.next(); !r.done; r = i.next()) {
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
            var a = t !== void 0 && Et.length > 0 && Et.some(function(o) {
              return l.adapter.containsEventTarget(o);
            });
            if (a) {
              this.resetActivationState();
              return;
            }
            t !== void 0 && (Et.push(t.target), this.registerDeactivationHandlers(t)), i.wasElementMadeActive = this.checkElementMadeActive(t), i.wasElementMadeActive && this.animateActivation(), requestAnimationFrame(function() {
              Et = [], !i.wasElementMadeActive && t !== void 0 && (t.key === " " || t.keyCode === 32) && (i.wasElementMadeActive = l.checkElementMadeActive(t), i.wasElementMadeActive && l.animateActivation()), i.wasElementMadeActive || (l.activationState = l.defaultActivationState());
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
        var d = this.getFgTranslationCoordinates(), g = d.startPoint, b = d.endPoint;
        c = g.x + "px, " + g.y + "px", f = b.x + "px, " + b.y + "px";
      }
      this.adapter.updateCssVariable(i, c), this.adapter.updateCssVariable(r, f), clearTimeout(this.activationTimer), clearTimeout(this.fgDeactivationRemovalTimer), this.rmBoundedActivationClasses(), this.adapter.removeClass(a), this.adapter.computeBoundingRect(), this.adapter.addClass(o), this.activationTimer = setTimeout(function() {
        t.activationTimerCallback();
      }, u);
    }, e.prototype.getFgTranslationCoordinates = function() {
      var t = this.activationState, l = t.activationEvent, i = t.wasActivatedByPointer, r;
      i ? r = qi(l, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect()) : r = {
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
      }, hn.FG_DEACTIVATION_MS));
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
        var i = Ue({}, l);
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
  }(ht)
);
const { applyPassive: Ht } = Rl, { matches: Xi } = Hl;
function vt(n, { ripple: e = !0, surface: t = !1, unbounded: l = !1, disabled: i = !1, color: r, active: s, rippleElement: a, eventTarget: o, activeTarget: u, addClass: c = (b) => n.classList.add(b), removeClass: f = (b) => n.classList.remove(b), addStyle: d = (b, y) => n.style.setProperty(b, y), initPromise: g = Promise.resolve() } = {}) {
  let b, y = Pe("SMUI:addLayoutListener"), _, L = s, C = o, p = u;
  function m() {
    t ? (c("mdc-ripple-surface"), r === "primary" ? (c("smui-ripple-surface--primary"), f("smui-ripple-surface--secondary")) : r === "secondary" ? (f("smui-ripple-surface--primary"), c("smui-ripple-surface--secondary")) : (f("smui-ripple-surface--primary"), f("smui-ripple-surface--secondary"))) : (f("mdc-ripple-surface"), f("smui-ripple-surface--primary"), f("smui-ripple-surface--secondary")), b && L !== s && (L = s, s ? b.activate() : s === !1 && b.deactivate()), e && !b ? (b = new zi({
      addClass: c,
      browserSupportsCssVars: () => Fi(window),
      computeBoundingRect: () => (a || n).getBoundingClientRect(),
      containsEventTarget: (S) => n.contains(S),
      deregisterDocumentInteractionHandler: (S, h) => document.documentElement.removeEventListener(S, h, Ht()),
      deregisterInteractionHandler: (S, h) => (o || n).removeEventListener(S, h, Ht()),
      deregisterResizeHandler: (S) => window.removeEventListener("resize", S),
      getWindowPageOffset: () => ({
        x: window.pageXOffset,
        y: window.pageYOffset
      }),
      isSurfaceActive: () => s ?? Xi(u || n, ":active"),
      isSurfaceDisabled: () => !!i,
      isUnbounded: () => !!l,
      registerDocumentInteractionHandler: (S, h) => document.documentElement.addEventListener(S, h, Ht()),
      registerInteractionHandler: (S, h) => (o || n).addEventListener(S, h, Ht()),
      registerResizeHandler: (S) => window.addEventListener("resize", S),
      removeClass: f,
      updateCssVariable: d
    }), g.then(() => {
      b && (b.init(), b.setUnbounded(l));
    })) : b && !e && g.then(() => {
      b && (b.destroy(), b = void 0);
    }), b && (C !== o || p !== u) && (C = o, p = u, b.destroy(), requestAnimationFrame(() => {
      b && (b.init(), b.setUnbounded(l));
    })), !e && l && c("mdc-ripple-upgraded--unbounded");
  }
  m(), y && (_ = y(D));
  function D() {
    b && b.layout();
  }
  return {
    update(S) {
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
      } = Object.assign({ ripple: !0, surface: !1, unbounded: !1, disabled: !1, color: void 0, active: void 0, rippleElement: void 0, eventTarget: void 0, activeTarget: void 0, addClass: (h) => n.classList.add(h), removeClass: (h) => n.classList.remove(h), addStyle: (h, k) => n.style.setProperty(h, k), initPromise: Promise.resolve() }, S)), m();
    },
    destroy() {
      b && (b.destroy(), b = void 0, f("mdc-ripple-surface"), f("smui-ripple-surface--primary"), f("smui-ripple-surface--secondary")), _ && _();
    }
  };
}
function Yi(n) {
  let e = (
    /*tag*/
    n[1]
  ), t, l, i = (
    /*tag*/
    n[1] && Wt(n)
  );
  return {
    c() {
      i && i.c(), t = Se();
    },
    m(r, s) {
      i && i.m(r, s), U(r, t, s), l = !0;
    },
    p(r, s) {
      /*tag*/
      r[1] ? e ? se(
        e,
        /*tag*/
        r[1]
      ) ? (i.d(1), i = Wt(r), e = /*tag*/
      r[1], i.c(), i.m(t.parentNode, t)) : i.p(r, s) : (i = Wt(r), e = /*tag*/
      r[1], i.c(), i.m(t.parentNode, t)) : e && (i.d(1), i = null, e = /*tag*/
      r[1]);
    },
    i(r) {
      l || (w(i, r), l = !0);
    },
    o(r) {
      E(i, r), l = !1;
    },
    d(r) {
      r && O(t), i && i.d(r);
    }
  };
}
function Ki(n) {
  let e = (
    /*tag*/
    n[1]
  ), t, l = (
    /*tag*/
    n[1] && Vt(n)
  );
  return {
    c() {
      l && l.c(), t = Se();
    },
    m(i, r) {
      l && l.m(i, r), U(i, t, r);
    },
    p(i, r) {
      /*tag*/
      i[1] ? e ? se(
        e,
        /*tag*/
        i[1]
      ) ? (l.d(1), l = Vt(i), e = /*tag*/
      i[1], l.c(), l.m(t.parentNode, t)) : l.p(i, r) : (l = Vt(i), e = /*tag*/
      i[1], l.c(), l.m(t.parentNode, t)) : e && (l.d(1), l = null, e = /*tag*/
      i[1]);
    },
    i: $,
    o: $,
    d(i) {
      i && O(t), l && l.d(i);
    }
  };
}
function Ji(n) {
  let e, t, l, i, r;
  const s = (
    /*#slots*/
    n[8].default
  ), a = le(
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
    u = Z(u, o[c]);
  return {
    c() {
      e = qe("svg"), a && a.c(), un(e, u);
    },
    m(c, f) {
      U(c, e, f), a && a.m(e, null), n[9](e), l = !0, i || (r = [
        Q(t = Le.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        Q(
          /*forwardEvents*/
          n[4].call(null, e)
        )
      ], i = !0);
    },
    p(c, f) {
      a && a.p && (!l || f & /*$$scope*/
      128) && re(
        a,
        s,
        c,
        /*$$scope*/
        c[7],
        l ? ie(
          s,
          /*$$scope*/
          c[7],
          f,
          null
        ) : ae(
          /*$$scope*/
          c[7]
        ),
        null
      ), un(e, u = oe(o, [f & /*$$restProps*/
      32 && /*$$restProps*/
      c[5]])), t && ve(t.update) && f & /*use*/
      1 && t.update.call(
        null,
        /*use*/
        c[0]
      );
    },
    i(c) {
      l || (w(a, c), l = !0);
    },
    o(c) {
      E(a, c), l = !1;
    },
    d(c) {
      c && O(e), a && a.d(c), n[9](null), i = !1, he(r);
    }
  };
}
function Wt(n) {
  let e, t, l, i, r;
  const s = (
    /*#slots*/
    n[8].default
  ), a = le(
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
    u = Z(u, o[c]);
  return {
    c() {
      e = F(
        /*tag*/
        n[1]
      ), a && a.c(), Ct(
        /*tag*/
        n[1]
      )(e, u);
    },
    m(c, f) {
      U(c, e, f), a && a.m(e, null), n[11](e), l = !0, i || (r = [
        Q(t = Le.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        Q(
          /*forwardEvents*/
          n[4].call(null, e)
        )
      ], i = !0);
    },
    p(c, f) {
      a && a.p && (!l || f & /*$$scope*/
      128) && re(
        a,
        s,
        c,
        /*$$scope*/
        c[7],
        l ? ie(
          s,
          /*$$scope*/
          c[7],
          f,
          null
        ) : ae(
          /*$$scope*/
          c[7]
        ),
        null
      ), Ct(
        /*tag*/
        c[1]
      )(e, u = oe(o, [f & /*$$restProps*/
      32 && /*$$restProps*/
      c[5]])), t && ve(t.update) && f & /*use*/
      1 && t.update.call(
        null,
        /*use*/
        c[0]
      );
    },
    i(c) {
      l || (w(a, c), l = !0);
    },
    o(c) {
      E(a, c), l = !1;
    },
    d(c) {
      c && O(e), a && a.d(c), n[11](null), i = !1, he(r);
    }
  };
}
function Vt(n) {
  let e, t, l, i, r = [
    /*$$restProps*/
    n[5]
  ], s = {};
  for (let a = 0; a < r.length; a += 1)
    s = Z(s, r[a]);
  return {
    c() {
      e = F(
        /*tag*/
        n[1]
      ), Ct(
        /*tag*/
        n[1]
      )(e, s);
    },
    m(a, o) {
      U(a, e, o), n[10](e), l || (i = [
        Q(t = Le.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        Q(
          /*forwardEvents*/
          n[4].call(null, e)
        )
      ], l = !0);
    },
    p(a, o) {
      Ct(
        /*tag*/
        a[1]
      )(e, s = oe(r, [o & /*$$restProps*/
      32 && /*$$restProps*/
      a[5]])), t && ve(t.update) && o & /*use*/
      1 && t.update.call(
        null,
        /*use*/
        a[0]
      );
    },
    d(a) {
      a && O(e), n[10](null), l = !1, he(i);
    }
  };
}
function Qi(n) {
  let e, t, l, i;
  const r = [Ji, Ki, Yi], s = [];
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
      t.c(), l = Se();
    },
    m(o, u) {
      s[e].m(o, u), U(o, l, u), i = !0;
    },
    p(o, [u]) {
      let c = e;
      e = a(o), e === c ? s[e].p(o, u) : (ge(), E(s[c], 1, 1, () => {
        s[c] = null;
      }), pe(), t = s[e], t ? t.p(o, u) : (t = s[e] = r[e](o), t.c()), w(t, 1), t.m(l.parentNode, l));
    },
    i(o) {
      i || (w(t), i = !0);
    },
    o(o) {
      E(t), i = !1;
    },
    d(o) {
      o && O(l), s[e].d(o);
    }
  };
}
function xi(n, e, t) {
  let l;
  const i = ["use", "tag", "getElement"];
  let r = ue(e, i), { $$slots: s = {}, $$scope: a } = e, { use: o = [] } = e, { tag: u } = e;
  const c = Be(Re());
  let f;
  function d() {
    return f;
  }
  function g(_) {
    ee[_ ? "unshift" : "push"](() => {
      f = _, t(2, f);
    });
  }
  function b(_) {
    ee[_ ? "unshift" : "push"](() => {
      f = _, t(2, f);
    });
  }
  function y(_) {
    ee[_ ? "unshift" : "push"](() => {
      f = _, t(2, f);
    });
  }
  return n.$$set = (_) => {
    e = Z(Z({}, e), Oe(_)), t(5, r = ue(e, i)), "use" in _ && t(0, o = _.use), "tag" in _ && t(1, u = _.tag), "$$scope" in _ && t(7, a = _.$$scope);
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
    b,
    y
  ];
}
class Bt extends fe {
  constructor(e) {
    super(), ce(this, e, xi, Qi, se, { use: 0, tag: 1, getElement: 6 });
  }
  get getElement() {
    return this.$$.ctx[6];
  }
}
const st = [];
function Tt(n, e = $) {
  let t;
  const l = /* @__PURE__ */ new Set();
  function i(a) {
    if (se(n, a) && (n = a, t)) {
      const o = !st.length;
      for (const u of l)
        u[1](), st.push(u, n);
      if (o) {
        for (let u = 0; u < st.length; u += 2)
          st[u][0](st[u + 1]);
        st.length = 0;
      }
    }
  }
  function r(a) {
    i(a(n));
  }
  function s(a, o = $) {
    const u = [a, o];
    return l.add(u), l.size === 1 && (t = e(i, r) || $), a(n), () => {
      l.delete(u), l.size === 0 && t && (t(), t = null);
    };
  }
  return { set: i, update: r, subscribe: s };
}
function $i(n) {
  let e;
  const t = (
    /*#slots*/
    n[4].default
  ), l = le(
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
      8) && re(
        l,
        t,
        i,
        /*$$scope*/
        i[3],
        e ? ie(
          t,
          /*$$scope*/
          i[3],
          r,
          null
        ) : ae(
          /*$$scope*/
          i[3]
        ),
        null
      );
    },
    i(i) {
      e || (w(l, i), e = !0);
    },
    o(i) {
      E(l, i), e = !1;
    },
    d(i) {
      l && l.d(i);
    }
  };
}
function er(n, e, t) {
  let l, { $$slots: i = {}, $$scope: r } = e, { key: s } = e, { value: a } = e;
  const o = Tt(a);
  return ut(n, o, (u) => t(5, l = u)), Me(s, o), At(() => {
    o.set(void 0);
  }), n.$$set = (u) => {
    "key" in u && t(1, s = u.key), "value" in u && t(2, a = u.value), "$$scope" in u && t(3, r = u.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty & /*value*/
    4 && Kt(o, l = a, l);
  }, [o, s, a, r, i];
}
class Pt extends fe {
  constructor(e) {
    super(), ce(this, e, er, $i, se, { key: 1, value: 2 });
  }
}
function pn(n) {
  let e;
  return {
    c() {
      e = F("div"), T(e, "class", "mdc-button__touch");
    },
    m(t, l) {
      U(t, e, l);
    },
    d(t) {
      t && O(e);
    }
  };
}
function tr(n) {
  let e, t, l, i;
  const r = (
    /*#slots*/
    n[28].default
  ), s = le(
    r,
    n,
    /*$$scope*/
    n[30],
    null
  );
  let a = (
    /*touch*/
    n[6] && pn()
  );
  return {
    c() {
      e = F("div"), t = W(), s && s.c(), a && a.c(), l = Se(), T(e, "class", "mdc-button__ripple");
    },
    m(o, u) {
      U(o, e, u), U(o, t, u), s && s.m(o, u), a && a.m(o, u), U(o, l, u), i = !0;
    },
    p(o, u) {
      s && s.p && (!i || u[0] & /*$$scope*/
      1073741824) && re(
        s,
        r,
        o,
        /*$$scope*/
        o[30],
        i ? ie(
          r,
          /*$$scope*/
          o[30],
          u,
          null
        ) : ae(
          /*$$scope*/
          o[30]
        ),
        null
      ), /*touch*/
      o[6] ? a || (a = pn(), a.c(), a.m(l.parentNode, l)) : a && (a.d(1), a = null);
    },
    i(o) {
      i || (w(s, o), i = !0);
    },
    o(o) {
      E(s, o), i = !1;
    },
    d(o) {
      o && (O(e), O(t), O(l)), s && s.d(o), a && a.d(o);
    }
  };
}
function nr(n) {
  let e, t, l;
  const i = [
    { tag: (
      /*tag*/
      n[10]
    ) },
    {
      use: [
        [
          vt,
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
      class: x({
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
      ).map(zt).concat([
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
      $$slots: { default: [tr] },
      $$scope: { ctx: a }
    };
    for (let c = 0; c < i.length; c += 1)
      u = Z(u, i[c]);
    return o !== void 0 && o[0] & /*tag, ripple, color, $$restProps, addClass, removeClass, addStyle, forwardEvents, use, className, variant, touch, context, secondary, internalClasses, internalStyles, style, actionProp, defaultProp, secondaryProp, href*/
    12580351 && (u = Z(u, oe(i, [
      o[0] & /*tag*/
      1024 && { tag: (
        /*tag*/
        a[10]
      ) },
      o[0] & /*ripple, color, $$restProps, addClass, removeClass, addStyle, forwardEvents, use*/
      12189721 && {
        use: [
          [
            vt,
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
        class: x({
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
        ).map(zt).concat([
          /*style*/
          a[2]
        ]).join(" ")
      },
      o[0] & /*actionProp*/
      65536 && we(
        /*actionProp*/
        a[16]
      ),
      o[0] & /*defaultProp*/
      32768 && we(
        /*defaultProp*/
        a[15]
      ),
      o[0] & /*secondaryProp*/
      16384 && we(
        /*secondaryProp*/
        a[14]
      ),
      o[0] & /*href*/
      128 && { href: (
        /*href*/
        a[7]
      ) },
      o[0] & /*$$restProps*/
      8388608 && we(
        /*$$restProps*/
        a[23]
      )
    ]))), { props: u };
  }
  return r && (e = Ot(r, s(n)), n[29](e), e.$on(
    "click",
    /*handleClick*/
    n[22]
  )), {
    c() {
      e && K(e.$$.fragment), t = Se();
    },
    m(a, o) {
      e && X(e, a, o), U(a, t, o), l = !0;
    },
    p(a, o) {
      if (o[0] & /*component*/
      512 && r !== (r = /*component*/
      a[9])) {
        if (e) {
          ge();
          const u = e;
          E(u.$$.fragment, 1, 0, () => {
            Y(u, 1);
          }), pe();
        }
        r ? (e = Ot(r, s(a, o)), a[29](e), e.$on(
          "click",
          /*handleClick*/
          a[22]
        ), K(e.$$.fragment), w(e.$$.fragment, 1), X(e, t.parentNode, t)) : e = null;
      } else if (r) {
        const u = o[0] & /*tag, ripple, color, $$restProps, addClass, removeClass, addStyle, forwardEvents, use, className, variant, touch, context, secondary, internalClasses, internalStyles, style, actionProp, defaultProp, secondaryProp, href*/
        12580351 ? oe(i, [
          o[0] & /*tag*/
          1024 && { tag: (
            /*tag*/
            a[10]
          ) },
          o[0] & /*ripple, color, $$restProps, addClass, removeClass, addStyle, forwardEvents, use*/
          12189721 && {
            use: [
              [
                vt,
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
            class: x({
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
            ).map(zt).concat([
              /*style*/
              a[2]
            ]).join(" ")
          },
          o[0] & /*actionProp*/
          65536 && we(
            /*actionProp*/
            a[16]
          ),
          o[0] & /*defaultProp*/
          32768 && we(
            /*defaultProp*/
            a[15]
          ),
          o[0] & /*secondaryProp*/
          16384 && we(
            /*secondaryProp*/
            a[14]
          ),
          o[0] & /*href*/
          128 && { href: (
            /*href*/
            a[7]
          ) },
          o[0] & /*$$restProps*/
          8388608 && we(
            /*$$restProps*/
            a[23]
          )
        ]) : {};
        o[0] & /*$$scope, touch*/
        1073741888 && (u.$$scope = { dirty: o, ctx: a }), e.$set(u);
      }
    },
    i(a) {
      l || (e && w(e.$$.fragment, a), l = !0);
    },
    o(a) {
      e && E(e.$$.fragment, a), l = !1;
    },
    d(a) {
      a && O(t), n[29](null), e && Y(e, a);
    }
  };
}
const zt = ([n, e]) => `${n}: ${e};`;
function lr(n, e, t) {
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
  let a = ue(e, s), { $$slots: o = {}, $$scope: u } = e;
  const c = Be(Re());
  let { use: f = [] } = e, { class: d = "" } = e, { style: g = "" } = e, { ripple: b = !0 } = e, { color: y = "primary" } = e, { variant: _ = "text" } = e, { touch: L = !1 } = e, { href: C = void 0 } = e, { action: p = "close" } = e, { defaultAction: m = !1 } = e, { secondary: D = !1 } = e, S, h = {}, k = {}, q = Pe("SMUI:button:context"), { component: M = Bt } = e, { tag: A = M === Bt ? C == null ? "button" : "a" : void 0 } = e, P = a.disabled;
  Me("SMUI:label:context", "button"), Me("SMUI:icon:context", "button");
  function R(v) {
    h[v] || t(12, h[v] = !0, h);
  }
  function j(v) {
    (!(v in h) || h[v]) && t(12, h[v] = !1, h);
  }
  function de(v, N) {
    k[v] != N && (N === "" || N == null ? (delete k[v], t(13, k)) : t(13, k[v] = N, k));
  }
  function _e() {
    q === "banner" && Ae(Ce(), D ? "SMUIBannerButton:secondaryActionClick" : "SMUIBannerButton:primaryActionClick");
  }
  function Ce() {
    return S.getElement();
  }
  function G(v) {
    ee[v ? "unshift" : "push"](() => {
      S = v, t(11, S);
    });
  }
  return n.$$set = (v) => {
    t(31, e = Z(Z({}, e), Oe(v))), t(23, a = ue(e, s)), "use" in v && t(0, f = v.use), "class" in v && t(1, d = v.class), "style" in v && t(2, g = v.style), "ripple" in v && t(3, b = v.ripple), "color" in v && t(4, y = v.color), "variant" in v && t(5, _ = v.variant), "touch" in v && t(6, L = v.touch), "href" in v && t(7, C = v.href), "action" in v && t(24, p = v.action), "defaultAction" in v && t(25, m = v.defaultAction), "secondary" in v && t(8, D = v.secondary), "component" in v && t(9, M = v.component), "tag" in v && t(10, A = v.tag), "$$scope" in v && t(30, u = v.$$scope);
  }, n.$$.update = () => {
    if (t(16, l = q === "dialog:action" && p != null ? { "data-mdc-dialog-action": p } : { action: e.action }), t(15, i = q === "dialog:action" && m ? { "data-mdc-dialog-button-default": "" } : { default: e.default }), t(14, r = q === "banner" ? {} : { secondary: e.secondary }), P !== a.disabled) {
      if (S) {
        const v = Ce();
        "blur" in v && v.blur();
      }
      t(27, P = a.disabled);
    }
  }, e = Oe(e), [
    f,
    d,
    g,
    b,
    y,
    _,
    L,
    C,
    D,
    M,
    A,
    S,
    h,
    k,
    r,
    i,
    l,
    c,
    q,
    R,
    j,
    de,
    _e,
    a,
    p,
    m,
    Ce,
    P,
    o,
    G,
    u
  ];
}
class _n extends fe {
  constructor(e) {
    super(), ce(
      this,
      e,
      lr,
      nr,
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
var ir = {
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
var rr = (
  /** @class */
  function(n) {
    dt(e, n);
    function e(t) {
      var l = n.call(this, Ue(Ue({}, e.defaultAdapter), t)) || this;
      return l.shakeAnimationEndHandler = function() {
        l.handleShakeAnimationEnd();
      }, l;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return ir;
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
  }(ht)
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
var tt = {
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
var ar = (
  /** @class */
  function(n) {
    dt(e, n);
    function e(t) {
      var l = n.call(this, Ue(Ue({}, e.defaultAdapter), t)) || this;
      return l.transitionEndHandler = function(i) {
        l.handleTransitionEnd(i);
      }, l;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return tt;
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
      this.adapter.removeClass(tt.LINE_RIPPLE_DEACTIVATING), this.adapter.addClass(tt.LINE_RIPPLE_ACTIVE);
    }, e.prototype.setRippleCenter = function(t) {
      this.adapter.setStyle("transform-origin", t + "px center");
    }, e.prototype.deactivate = function() {
      this.adapter.addClass(tt.LINE_RIPPLE_DEACTIVATING);
    }, e.prototype.handleTransitionEnd = function(t) {
      var l = this.adapter.hasClass(tt.LINE_RIPPLE_DEACTIVATING);
      t.propertyName === "opacity" && l && (this.adapter.removeClass(tt.LINE_RIPPLE_ACTIVE), this.adapter.removeClass(tt.LINE_RIPPLE_DEACTIVATING));
    }, e;
  }(ht)
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
var sr = {
  NOTCH_ELEMENT_SELECTOR: ".mdc-notched-outline__notch"
}, bn = {
  // This should stay in sync with $mdc-notched-outline-padding * 2.
  NOTCH_ELEMENT_PADDING: 8
}, or = {
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
var ur = (
  /** @class */
  function(n) {
    dt(e, n);
    function e(t) {
      return n.call(this, Ue(Ue({}, e.defaultAdapter), t)) || this;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return sr;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return or;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return bn;
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
      t > 0 && (t += bn.NOTCH_ELEMENT_PADDING), this.adapter.setNotchWidthProperty(t), this.adapter.addClass(l);
    }, e.prototype.closeNotch = function() {
      var t = e.cssClasses.OUTLINE_NOTCHED;
      this.adapter.removeClass(t), this.adapter.removeNotchWidthProperty();
    }, e;
  }(ht)
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
var Xt = {
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
}, cr = {
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
}, vn = {
  LABEL_SCALE: 0.75
}, fr = [
  "pattern",
  "min",
  "max",
  "required",
  "step",
  "minlength",
  "maxlength"
], dr = [
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
var Cn = ["mousedown", "touchstart"], In = ["click", "keydown"], hr = (
  /** @class */
  function(n) {
    dt(e, n);
    function e(t, l) {
      l === void 0 && (l = {});
      var i = n.call(this, Ue(Ue({}, e.defaultAdapter), t)) || this;
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
        return cr;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Xt;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return vn;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "shouldAlwaysFloat", {
      get: function() {
        var t = this.getNativeInput().type;
        return dr.indexOf(t) >= 0;
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
        for (var s = Ke(Cn), a = s.next(); !a.done; a = s.next()) {
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
        for (var u = Ke(In), c = u.next(); !c.done; c = u.next()) {
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
        for (var s = Ke(Cn), a = s.next(); !a.done; a = s.next()) {
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
        for (var u = Ke(In), c = u.next(); !c.done; c = u.next()) {
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
        return fr.indexOf(i) > -1 ? (l.styleValidity(!0), l.adapter.setLabelRequired(l.getNativeInput().required), !0) : !1;
      }), t.indexOf("maxlength") > -1 && this.setcharacterCounter(this.getValue().length);
    }, e.prototype.notchOutline = function(t) {
      if (!(!this.adapter.hasOutline() || !this.adapter.hasLabel()))
        if (t) {
          var l = this.adapter.getLabelWidth() * vn.LABEL_SCALE;
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
        r && s ? this.adapter.setInputAttr(Xt.ARIA_DESCRIBEDBY, s) : this.adapter.removeInputAttr(Xt.ARIA_DESCRIBEDBY);
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
  }(ht)
);
function mr(n) {
  let e, t, l, i, r, s, a, o;
  const u = (
    /*#slots*/
    n[22].default
  ), c = le(
    u,
    n,
    /*$$scope*/
    n[21],
    null
  );
  let f = [
    {
      class: t = x({
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
      ).map(yn).concat([
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
    d = Z(d, f[g]);
  return {
    c() {
      e = F("label"), c && c.c(), ne(e, d);
    },
    m(g, b) {
      U(g, e, b), c && c.m(e, null), n[24](e), s = !0, a || (o = [
        Q(r = Le.call(
          null,
          e,
          /*use*/
          n[2]
        )),
        Q(
          /*forwardEvents*/
          n[10].call(null, e)
        )
      ], a = !0);
    },
    p(g, b) {
      c && c.p && (!s || b & /*$$scope*/
      2097152) && re(
        c,
        u,
        g,
        /*$$scope*/
        g[21],
        s ? ie(
          u,
          /*$$scope*/
          g[21],
          b,
          null
        ) : ae(
          /*$$scope*/
          g[21]
        ),
        null
      ), ne(e, d = oe(f, [
        (!s || b & /*className, floatAbove, required, internalClasses*/
        267 && t !== (t = x({
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
        (!s || b & /*internalStyles, style*/
        528 && l !== (l = Object.entries(
          /*internalStyles*/
          g[9]
        ).map(yn).concat([
          /*style*/
          g[4]
        ]).join(" "))) && { style: l },
        (!s || b & /*forId*/
        32 && i !== (i = /*forId*/
        g[5] || /*inputProps*/
        (g[11] ? (
          /*inputProps*/
          g[11].id
        ) : void 0))) && { for: i },
        b & /*$$restProps*/
        4096 && /*$$restProps*/
        g[12]
      ])), r && ve(r.update) && b & /*use*/
      4 && r.update.call(
        null,
        /*use*/
        g[2]
      );
    },
    i(g) {
      s || (w(c, g), s = !0);
    },
    o(g) {
      E(c, g), s = !1;
    },
    d(g) {
      g && O(e), c && c.d(g), n[24](null), a = !1, he(o);
    }
  };
}
function gr(n) {
  let e, t, l, i, r, s, a;
  const o = (
    /*#slots*/
    n[22].default
  ), u = le(
    o,
    n,
    /*$$scope*/
    n[21],
    null
  );
  let c = [
    {
      class: t = x({
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
      ).map(An).concat([
        /*style*/
        n[4]
      ]).join(" ")
    },
    /*$$restProps*/
    n[12]
  ], f = {};
  for (let d = 0; d < c.length; d += 1)
    f = Z(f, c[d]);
  return {
    c() {
      e = F("span"), u && u.c(), ne(e, f);
    },
    m(d, g) {
      U(d, e, g), u && u.m(e, null), n[23](e), r = !0, s || (a = [
        Q(i = Le.call(
          null,
          e,
          /*use*/
          n[2]
        )),
        Q(
          /*forwardEvents*/
          n[10].call(null, e)
        )
      ], s = !0);
    },
    p(d, g) {
      u && u.p && (!r || g & /*$$scope*/
      2097152) && re(
        u,
        o,
        d,
        /*$$scope*/
        d[21],
        r ? ie(
          o,
          /*$$scope*/
          d[21],
          g,
          null
        ) : ae(
          /*$$scope*/
          d[21]
        ),
        null
      ), ne(e, f = oe(c, [
        (!r || g & /*className, floatAbove, required, internalClasses*/
        267 && t !== (t = x({
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
        ).map(An).concat([
          /*style*/
          d[4]
        ]).join(" "))) && { style: l },
        g & /*$$restProps*/
        4096 && /*$$restProps*/
        d[12]
      ])), i && ve(i.update) && g & /*use*/
      4 && i.update.call(
        null,
        /*use*/
        d[2]
      );
    },
    i(d) {
      r || (w(u, d), r = !0);
    },
    o(d) {
      E(u, d), r = !1;
    },
    d(d) {
      d && O(e), u && u.d(d), n[23](null), s = !1, he(a);
    }
  };
}
function pr(n) {
  let e, t, l, i;
  const r = [gr, mr], s = [];
  function a(o, u) {
    return (
      /*wrapped*/
      o[6] ? 0 : 1
    );
  }
  return e = a(n), t = s[e] = r[e](n), {
    c() {
      t.c(), l = Se();
    },
    m(o, u) {
      s[e].m(o, u), U(o, l, u), i = !0;
    },
    p(o, [u]) {
      let c = e;
      e = a(o), e === c ? s[e].p(o, u) : (ge(), E(s[c], 1, 1, () => {
        s[c] = null;
      }), pe(), t = s[e], t ? t.p(o, u) : (t = s[e] = r[e](o), t.c()), w(t, 1), t.m(l.parentNode, l));
    },
    i(o) {
      i || (w(t), i = !0);
    },
    o(o) {
      E(t), i = !1;
    },
    d(o) {
      o && O(l), s[e].d(o);
    }
  };
}
const An = ([n, e]) => `${n}: ${e};`, yn = ([n, e]) => `${n}: ${e};`;
function _r(n, e, t) {
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
  let i = ue(e, l), { $$slots: r = {}, $$scope: s } = e;
  var a;
  const o = Be(Re());
  let { use: u = [] } = e, { class: c = "" } = e, { style: f = "" } = e, { for: d = void 0 } = e, { floatAbove: g = !1 } = e, { required: b = !1 } = e, { wrapped: y = !1 } = e, _, L, C = {}, p = {}, m = (a = Pe("SMUI:generic:input:props")) !== null && a !== void 0 ? a : {}, D = g, S = b;
  Ne(() => {
    t(18, L = new rr({
      addClass: h,
      removeClass: k,
      getWidth: () => {
        var v, N;
        const me = de(), be = me.cloneNode(!0);
        (v = me.parentNode) === null || v === void 0 || v.appendChild(be), be.classList.add("smui-floating-label--remove-transition"), be.classList.add("smui-floating-label--force-size"), be.classList.remove("mdc-floating-label--float-above");
        const Ie = be.scrollWidth;
        return (N = me.parentNode) === null || N === void 0 || N.removeChild(be), Ie;
      },
      registerInteractionHandler: (v, N) => de().addEventListener(v, N),
      deregisterInteractionHandler: (v, N) => de().removeEventListener(v, N)
    }));
    const G = {
      get element() {
        return de();
      },
      addStyle: q,
      removeStyle: M
    };
    return Ae(_, "SMUIFloatingLabel:mount", G), L.init(), () => {
      Ae(_, "SMUIFloatingLabel:unmount", G), L.destroy();
    };
  });
  function h(G) {
    C[G] || t(8, C[G] = !0, C);
  }
  function k(G) {
    (!(G in C) || C[G]) && t(8, C[G] = !1, C);
  }
  function q(G, v) {
    p[G] != v && (v === "" || v == null ? (delete p[G], t(9, p)) : t(9, p[G] = v, p));
  }
  function M(G) {
    G in p && (delete p[G], t(9, p));
  }
  function A(G) {
    L.shake(G);
  }
  function P(G) {
    t(0, g = G);
  }
  function R(G) {
    t(1, b = G);
  }
  function j() {
    return L.getWidth();
  }
  function de() {
    return _;
  }
  function _e(G) {
    ee[G ? "unshift" : "push"](() => {
      _ = G, t(7, _);
    });
  }
  function Ce(G) {
    ee[G ? "unshift" : "push"](() => {
      _ = G, t(7, _);
    });
  }
  return n.$$set = (G) => {
    e = Z(Z({}, e), Oe(G)), t(12, i = ue(e, l)), "use" in G && t(2, u = G.use), "class" in G && t(3, c = G.class), "style" in G && t(4, f = G.style), "for" in G && t(5, d = G.for), "floatAbove" in G && t(0, g = G.floatAbove), "required" in G && t(1, b = G.required), "wrapped" in G && t(6, y = G.wrapped), "$$scope" in G && t(21, s = G.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty & /*instance, previousFloatAbove, floatAbove*/
    786433 && L && D !== g && (t(19, D = g), L.float(g)), n.$$.dirty & /*instance, previousRequired, required*/
    1310722 && L && S !== b && (t(20, S = b), L.setRequired(b));
  }, [
    g,
    b,
    u,
    c,
    f,
    d,
    y,
    _,
    C,
    p,
    o,
    m,
    i,
    A,
    P,
    R,
    j,
    de,
    L,
    D,
    S,
    s,
    r,
    _e,
    Ce
  ];
}
class Dl extends fe {
  constructor(e) {
    super(), ce(this, e, _r, pr, se, {
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
function br(n) {
  let e, t, l, i, r, s, a = [
    {
      class: t = x({
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
      ).map(kn).concat([
        /*style*/
        n[2]
      ]).join(" ")
    },
    /*$$restProps*/
    n[8]
  ], o = {};
  for (let u = 0; u < a.length; u += 1)
    o = Z(o, a[u]);
  return {
    c() {
      e = F("div"), ne(e, o);
    },
    m(u, c) {
      U(u, e, c), n[13](e), r || (s = [
        Q(i = Le.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        Q(
          /*forwardEvents*/
          n[7].call(null, e)
        )
      ], r = !0);
    },
    p(u, [c]) {
      ne(e, o = oe(a, [
        c & /*className, active, internalClasses*/
        42 && t !== (t = x({
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
        ).map(kn).concat([
          /*style*/
          u[2]
        ]).join(" ")) && { style: l },
        c & /*$$restProps*/
        256 && /*$$restProps*/
        u[8]
      ])), i && ve(i.update) && c & /*use*/
      1 && i.update.call(
        null,
        /*use*/
        u[0]
      );
    },
    i: $,
    o: $,
    d(u) {
      u && O(e), n[13](null), r = !1, he(s);
    }
  };
}
const kn = ([n, e]) => `${n}: ${e};`;
function vr(n, e, t) {
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
  let i = ue(e, l);
  const r = Be(Re());
  let { use: s = [] } = e, { class: a = "" } = e, { style: o = "" } = e, { active: u = !1 } = e, c, f, d = {}, g = {};
  Ne(() => (f = new ar({
    addClass: y,
    removeClass: _,
    hasClass: b,
    setStyle: L,
    registerEventHandler: (h, k) => D().addEventListener(h, k),
    deregisterEventHandler: (h, k) => D().removeEventListener(h, k)
  }), f.init(), () => {
    f.destroy();
  }));
  function b(h) {
    return h in d ? d[h] : D().classList.contains(h);
  }
  function y(h) {
    d[h] || t(5, d[h] = !0, d);
  }
  function _(h) {
    (!(h in d) || d[h]) && t(5, d[h] = !1, d);
  }
  function L(h, k) {
    g[h] != k && (k === "" || k == null ? (delete g[h], t(6, g)) : t(6, g[h] = k, g));
  }
  function C() {
    f.activate();
  }
  function p() {
    f.deactivate();
  }
  function m(h) {
    f.setRippleCenter(h);
  }
  function D() {
    return c;
  }
  function S(h) {
    ee[h ? "unshift" : "push"](() => {
      c = h, t(4, c);
    });
  }
  return n.$$set = (h) => {
    e = Z(Z({}, e), Oe(h)), t(8, i = ue(e, l)), "use" in h && t(0, s = h.use), "class" in h && t(1, a = h.class), "style" in h && t(2, o = h.style), "active" in h && t(3, u = h.active);
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
    C,
    p,
    m,
    D,
    S
  ];
}
class Cr extends fe {
  constructor(e) {
    super(), ce(this, e, vr, br, se, {
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
function wn(n) {
  let e, t, l;
  const i = (
    /*#slots*/
    n[15].default
  ), r = le(
    i,
    n,
    /*$$scope*/
    n[14],
    null
  );
  return {
    c() {
      e = F("div"), r && r.c(), T(e, "class", "mdc-notched-outline__notch"), T(e, "style", t = Object.entries(
        /*notchStyles*/
        n[7]
      ).map(Ln).join(" "));
    },
    m(s, a) {
      U(s, e, a), r && r.m(e, null), l = !0;
    },
    p(s, a) {
      r && r.p && (!l || a & /*$$scope*/
      16384) && re(
        r,
        i,
        s,
        /*$$scope*/
        s[14],
        l ? ie(
          i,
          /*$$scope*/
          s[14],
          a,
          null
        ) : ae(
          /*$$scope*/
          s[14]
        ),
        null
      ), (!l || a & /*notchStyles*/
      128 && t !== (t = Object.entries(
        /*notchStyles*/
        s[7]
      ).map(Ln).join(" "))) && T(e, "style", t);
    },
    i(s) {
      l || (w(r, s), l = !0);
    },
    o(s) {
      E(r, s), l = !1;
    },
    d(s) {
      s && O(e), r && r.d(s);
    }
  };
}
function Ir(n) {
  let e, t, l, i, r, s, a, o, u, c, f = !/*noLabel*/
  n[3] && wn(n), d = [
    {
      class: s = x({
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
  for (let b = 0; b < d.length; b += 1)
    g = Z(g, d[b]);
  return {
    c() {
      e = F("div"), t = F("div"), l = W(), f && f.c(), i = W(), r = F("div"), T(t, "class", "mdc-notched-outline__leading"), T(r, "class", "mdc-notched-outline__trailing"), ne(e, g);
    },
    m(b, y) {
      U(b, e, y), B(e, t), B(e, l), f && f.m(e, null), B(e, i), B(e, r), n[16](e), o = !0, u || (c = [
        Q(a = Le.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        Q(
          /*forwardEvents*/
          n[8].call(null, e)
        ),
        z(
          e,
          "SMUIFloatingLabel:mount",
          /*handleFloatingLabelMount*/
          n[9]
        ),
        z(
          e,
          "SMUIFloatingLabel:unmount",
          /*SMUIFloatingLabel_unmount_handler*/
          n[17]
        )
      ], u = !0);
    },
    p(b, [y]) {
      /*noLabel*/
      b[3] ? f && (ge(), E(f, 1, 1, () => {
        f = null;
      }), pe()) : f ? (f.p(b, y), y & /*noLabel*/
      8 && w(f, 1)) : (f = wn(b), f.c(), w(f, 1), f.m(e, i)), ne(e, g = oe(d, [
        (!o || y & /*className, notched, noLabel, internalClasses*/
        78 && s !== (s = x({
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
        }))) && { class: s },
        y & /*$$restProps*/
        1024 && /*$$restProps*/
        b[10]
      ])), a && ve(a.update) && y & /*use*/
      1 && a.update.call(
        null,
        /*use*/
        b[0]
      );
    },
    i(b) {
      o || (w(f), o = !0);
    },
    o(b) {
      E(f), o = !1;
    },
    d(b) {
      b && O(e), f && f.d(), n[16](null), u = !1, he(c);
    }
  };
}
const Ln = ([n, e]) => `${n}: ${e};`;
function Ar(n, e, t) {
  const l = ["use", "class", "notched", "noLabel", "notch", "closeNotch", "getElement"];
  let i = ue(e, l), { $$slots: r = {}, $$scope: s } = e;
  const a = Be(Re());
  let { use: o = [] } = e, { class: u = "" } = e, { notched: c = !1 } = e, { noLabel: f = !1 } = e, d, g, b, y = {}, _ = {};
  Ne(() => (g = new ur({
    addClass: C,
    removeClass: p,
    setNotchWidthProperty: (A) => m("width", A + "px"),
    removeNotchWidthProperty: () => D("width")
  }), g.init(), () => {
    g.destroy();
  }));
  function L(A) {
    t(4, b = A.detail);
  }
  function C(A) {
    y[A] || t(6, y[A] = !0, y);
  }
  function p(A) {
    (!(A in y) || y[A]) && t(6, y[A] = !1, y);
  }
  function m(A, P) {
    _[A] != P && (P === "" || P == null ? (delete _[A], t(7, _)) : t(7, _[A] = P, _));
  }
  function D(A) {
    A in _ && (delete _[A], t(7, _));
  }
  function S(A) {
    g.notch(A);
  }
  function h() {
    g.closeNotch();
  }
  function k() {
    return d;
  }
  function q(A) {
    ee[A ? "unshift" : "push"](() => {
      d = A, t(5, d);
    });
  }
  const M = () => t(4, b = void 0);
  return n.$$set = (A) => {
    e = Z(Z({}, e), Oe(A)), t(10, i = ue(e, l)), "use" in A && t(0, o = A.use), "class" in A && t(1, u = A.class), "notched" in A && t(2, c = A.notched), "noLabel" in A && t(3, f = A.noLabel), "$$scope" in A && t(14, s = A.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty & /*floatingLabel*/
    16 && (b ? (b.addStyle("transition-duration", "0s"), C("mdc-notched-outline--upgraded"), requestAnimationFrame(() => {
      b && b.removeStyle("transition-duration");
    })) : p("mdc-notched-outline--upgraded"));
  }, [
    o,
    u,
    c,
    f,
    b,
    d,
    y,
    _,
    a,
    L,
    i,
    S,
    h,
    k,
    s,
    r,
    q,
    M
  ];
}
class yr extends fe {
  constructor(e) {
    super(), ce(this, e, Ar, Ir, se, {
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
function kr(n) {
  let e;
  const t = (
    /*#slots*/
    n[11].default
  ), l = le(
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
      8192) && re(
        l,
        t,
        i,
        /*$$scope*/
        i[13],
        e ? ie(
          t,
          /*$$scope*/
          i[13],
          r,
          null
        ) : ae(
          /*$$scope*/
          i[13]
        ),
        null
      );
    },
    i(i) {
      e || (w(l, i), e = !0);
    },
    o(i) {
      E(l, i), e = !1;
    },
    d(i) {
      l && l.d(i);
    }
  };
}
function wr(n) {
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
      class: x({
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
      $$slots: { default: [kr] },
      $$scope: { ctx: a }
    };
    for (let c = 0; c < i.length; c += 1)
      u = Z(u, i[c]);
    return o !== void 0 && o & /*tag, forwardEvents, use, className, smuiClass, smuiClassMap, props, $$restProps*/
    1003 && (u = Z(u, oe(i, [
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
        class: x({
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
      128 && we(
        /*props*/
        a[7]
      ),
      o & /*$$restProps*/
      512 && we(
        /*$$restProps*/
        a[9]
      )
    ]))), { props: u };
  }
  return r && (e = Ot(r, s(n)), n[12](e)), {
    c() {
      e && K(e.$$.fragment), t = Se();
    },
    m(a, o) {
      e && X(e, a, o), U(a, t, o), l = !0;
    },
    p(a, [o]) {
      if (o & /*component*/
      4 && r !== (r = /*component*/
      a[2])) {
        if (e) {
          ge();
          const u = e;
          E(u.$$.fragment, 1, 0, () => {
            Y(u, 1);
          }), pe();
        }
        r ? (e = Ot(r, s(a, o)), a[12](e), K(e.$$.fragment), w(e.$$.fragment, 1), X(e, t.parentNode, t)) : e = null;
      } else if (r) {
        const u = o & /*tag, forwardEvents, use, className, smuiClass, smuiClassMap, props, $$restProps*/
        1003 ? oe(i, [
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
            class: x({
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
          128 && we(
            /*props*/
            a[7]
          ),
          o & /*$$restProps*/
          512 && we(
            /*$$restProps*/
            a[9]
          )
        ]) : {};
        o & /*$$scope*/
        8192 && (u.$$scope = { dirty: o, ctx: a }), e.$set(u);
      }
    },
    i(a) {
      l || (e && w(e.$$.fragment, a), l = !0);
    },
    o(a) {
      e && E(e.$$.fragment, a), l = !1;
    },
    d(a) {
      a && O(t), n[12](null), e && Y(e, a);
    }
  };
}
const Ve = {
  component: Bt,
  tag: "div",
  class: "",
  classMap: {},
  contexts: {},
  props: {}
};
function Lr(n, e, t) {
  const l = ["use", "class", "component", "tag", "getElement"];
  let i = ue(e, l), { $$slots: r = {}, $$scope: s } = e, { use: a = [] } = e, { class: o = "" } = e, u;
  const c = Ve.class, f = {}, d = [], g = Ve.contexts, b = Ve.props;
  let { component: y = Ve.component } = e, { tag: _ = y === Bt ? Ve.tag : void 0 } = e;
  Object.entries(Ve.classMap).forEach(([m, D]) => {
    const S = Pe(D);
    S && "subscribe" in S && d.push(S.subscribe((h) => {
      t(5, f[m] = h, f);
    }));
  });
  const L = Be(Re());
  for (let m in g)
    g.hasOwnProperty(m) && Me(m, g[m]);
  At(() => {
    for (const m of d)
      m();
  });
  function C() {
    return u.getElement();
  }
  function p(m) {
    ee[m ? "unshift" : "push"](() => {
      u = m, t(4, u);
    });
  }
  return n.$$set = (m) => {
    e = Z(Z({}, e), Oe(m)), t(9, i = ue(e, l)), "use" in m && t(0, a = m.use), "class" in m && t(1, o = m.class), "component" in m && t(2, y = m.component), "tag" in m && t(3, _ = m.tag), "$$scope" in m && t(13, s = m.$$scope);
  }, [
    a,
    o,
    y,
    _,
    u,
    f,
    c,
    b,
    L,
    i,
    C,
    r,
    p,
    s
  ];
}
class Sr extends fe {
  constructor(e) {
    super(), ce(this, e, Lr, wr, se, {
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
const Sn = Object.assign({}, Ve);
function Te(n) {
  return new Proxy(Sr, {
    construct: function(e, t) {
      return Object.assign(Ve, Sn, n), new e(...t);
    },
    get: function(e, t) {
      return Object.assign(Ve, Sn, n), e[t];
    }
  });
}
const Rr = Te({
  class: "mdc-text-field-helper-line",
  tag: "div"
}), Er = Te({
  class: "mdc-text-field__affix mdc-text-field__affix--prefix",
  tag: "span"
}), Hr = Te({
  class: "mdc-text-field__affix mdc-text-field__affix--suffix",
  tag: "span"
});
function Dr(n) {
  let e, t, l, i, r, s = [
    {
      class: t = x({
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
    a = Z(a, s[o]);
  return {
    c() {
      e = F("input"), ne(e, a);
    },
    m(o, u) {
      U(o, e, u), e.autofocus && e.focus(), n[26](e), i || (r = [
        Q(l = Le.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        Q(
          /*forwardEvents*/
          n[7].call(null, e)
        ),
        z(
          e,
          "input",
          /*input_handler*/
          n[27]
        ),
        z(
          e,
          "change",
          /*changeHandler*/
          n[9]
        ),
        z(
          e,
          "blur",
          /*blur_handler*/
          n[24]
        ),
        z(
          e,
          "focus",
          /*focus_handler*/
          n[25]
        )
      ], i = !0);
    },
    p(o, [u]) {
      ne(e, a = oe(s, [
        u & /*className*/
        2 && t !== (t = x({
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
      ])), l && ve(l.update) && u & /*use*/
      1 && l.update.call(
        null,
        /*use*/
        o[0]
      );
    },
    i: $,
    o: $,
    d(o) {
      o && O(e), n[26](null), i = !1, he(r);
    }
  };
}
function Mr(n) {
  return n === "" ? Number.NaN : +n;
}
function Tr(n, e, t) {
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
  let i = ue(e, l);
  const r = Be(Re());
  let s = () => {
  };
  function a(v) {
    return v === s;
  }
  let { use: o = [] } = e, { class: u = "" } = e, { type: c = "text" } = e, { placeholder: f = " " } = e, { value: d = s } = e;
  const g = a(d);
  g && (d = "");
  let { files: b = null } = e, { dirty: y = !1 } = e, { invalid: _ = !1 } = e, { updateInvalid: L = !0 } = e, { emptyValueNull: C = d === null } = e;
  g && C && (d = null);
  let { emptyValueUndefined: p = d === void 0 } = e;
  g && p && (d = void 0);
  let m, D = {}, S = {};
  Ne(() => {
    L && t(14, _ = m.matches(":invalid"));
  });
  function h(v) {
    if (c === "file") {
      t(12, b = v.currentTarget.files);
      return;
    }
    if (v.currentTarget.value === "" && C) {
      t(11, d = null);
      return;
    }
    if (v.currentTarget.value === "" && p) {
      t(11, d = void 0);
      return;
    }
    switch (c) {
      case "number":
      case "range":
        t(11, d = Mr(v.currentTarget.value));
        break;
      default:
        t(11, d = v.currentTarget.value);
        break;
    }
  }
  function k(v) {
    (c === "file" || c === "range") && h(v), t(13, y = !0), L && t(14, _ = m.matches(":invalid"));
  }
  function q(v) {
    var N;
    return v in D ? (N = D[v]) !== null && N !== void 0 ? N : null : j().getAttribute(v);
  }
  function M(v, N) {
    D[v] !== N && t(6, D[v] = N, D);
  }
  function A(v) {
    (!(v in D) || D[v] != null) && t(6, D[v] = void 0, D);
  }
  function P() {
    j().focus();
  }
  function R() {
    j().blur();
  }
  function j() {
    return m;
  }
  function de(v) {
    Ut.call(this, n, v);
  }
  function _e(v) {
    Ut.call(this, n, v);
  }
  function Ce(v) {
    ee[v ? "unshift" : "push"](() => {
      m = v, t(5, m);
    });
  }
  const G = (v) => c !== "file" && h(v);
  return n.$$set = (v) => {
    e = Z(Z({}, e), Oe(v)), t(10, i = ue(e, l)), "use" in v && t(0, o = v.use), "class" in v && t(1, u = v.class), "type" in v && t(2, c = v.type), "placeholder" in v && t(3, f = v.placeholder), "value" in v && t(11, d = v.value), "files" in v && t(12, b = v.files), "dirty" in v && t(13, y = v.dirty), "invalid" in v && t(14, _ = v.invalid), "updateInvalid" in v && t(15, L = v.updateInvalid), "emptyValueNull" in v && t(16, C = v.emptyValueNull), "emptyValueUndefined" in v && t(17, p = v.emptyValueUndefined);
  }, n.$$.update = () => {
    n.$$.dirty & /*type, valueProp, value*/
    2068 && (c === "file" ? (delete S.value, t(4, S), t(2, c), t(11, d)) : t(4, S.value = d ?? "", S));
  }, [
    o,
    u,
    c,
    f,
    S,
    m,
    D,
    r,
    h,
    k,
    i,
    d,
    b,
    y,
    _,
    L,
    C,
    p,
    q,
    M,
    A,
    P,
    R,
    j,
    de,
    _e,
    Ce,
    G
  ];
}
class Or extends fe {
  constructor(e) {
    super(), ce(this, e, Tr, Dr, se, {
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
function Ur(n) {
  let e, t, l, i, r, s, a = [
    {
      class: t = x({
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
    o = Z(o, a[u]);
  return {
    c() {
      e = F("textarea"), ne(e, o);
    },
    m(u, c) {
      U(u, e, c), e.autofocus && e.focus(), n[21](e), cn(
        e,
        /*value*/
        n[0]
      ), r || (s = [
        Q(i = Le.call(
          null,
          e,
          /*use*/
          n[1]
        )),
        Q(
          /*forwardEvents*/
          n[7].call(null, e)
        ),
        z(
          e,
          "change",
          /*changeHandler*/
          n[8]
        ),
        z(
          e,
          "blur",
          /*blur_handler*/
          n[19]
        ),
        z(
          e,
          "focus",
          /*focus_handler*/
          n[20]
        ),
        z(
          e,
          "input",
          /*textarea_input_handler*/
          n[22]
        )
      ], r = !0);
    },
    p(u, [c]) {
      ne(e, o = oe(a, [
        c & /*className*/
        4 && t !== (t = x({
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
      ])), i && ve(i.update) && c & /*use*/
      2 && i.update.call(
        null,
        /*use*/
        u[1]
      ), c & /*value*/
      1 && cn(
        e,
        /*value*/
        u[0]
      );
    },
    i: $,
    o: $,
    d(u) {
      u && O(e), n[21](null), r = !1, he(s);
    }
  };
}
function Br(n, e, t) {
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
  let i = ue(e, l);
  const r = Be(Re());
  let { use: s = [] } = e, { class: a = "" } = e, { style: o = "" } = e, { value: u = "" } = e, { dirty: c = !1 } = e, { invalid: f = !1 } = e, { updateInvalid: d = !0 } = e, { resizable: g = !0 } = e, b, y = {};
  Ne(() => {
    d && t(11, f = b.matches(":invalid"));
  });
  function _() {
    t(10, c = !0), d && t(11, f = b.matches(":invalid"));
  }
  function L(A) {
    var P;
    return A in y ? (P = y[A]) !== null && P !== void 0 ? P : null : S().getAttribute(A);
  }
  function C(A, P) {
    y[A] !== P && t(6, y[A] = P, y);
  }
  function p(A) {
    (!(A in y) || y[A] != null) && t(6, y[A] = void 0, y);
  }
  function m() {
    S().focus();
  }
  function D() {
    S().blur();
  }
  function S() {
    return b;
  }
  function h(A) {
    Ut.call(this, n, A);
  }
  function k(A) {
    Ut.call(this, n, A);
  }
  function q(A) {
    ee[A ? "unshift" : "push"](() => {
      b = A, t(5, b);
    });
  }
  function M() {
    u = this.value, t(0, u);
  }
  return n.$$set = (A) => {
    e = Z(Z({}, e), Oe(A)), t(9, i = ue(e, l)), "use" in A && t(1, s = A.use), "class" in A && t(2, a = A.class), "style" in A && t(3, o = A.style), "value" in A && t(0, u = A.value), "dirty" in A && t(10, c = A.dirty), "invalid" in A && t(11, f = A.invalid), "updateInvalid" in A && t(12, d = A.updateInvalid), "resizable" in A && t(4, g = A.resizable);
  }, [
    u,
    s,
    a,
    o,
    g,
    b,
    y,
    r,
    _,
    i,
    c,
    f,
    d,
    L,
    C,
    p,
    m,
    D,
    S,
    h,
    k,
    q,
    M
  ];
}
class Pr extends fe {
  constructor(e) {
    super(), ce(this, e, Br, Ur, se, {
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
const Fr = (n) => ({}), Rn = (n) => ({}), qr = (n) => ({}), En = (n) => ({}), Nr = (n) => ({}), Hn = (n) => ({}), Gr = (n) => ({}), Dn = (n) => ({}), Zr = (n) => ({}), Mn = (n) => ({}), jr = (n) => ({}), Tn = (n) => ({}), Wr = (n) => ({}), On = (n) => ({}), Vr = (n) => ({}), Un = (n) => ({}), zr = (n) => ({}), Bn = (n) => ({}), Xr = (n) => ({}), Pn = (n) => ({}), Yr = (n) => ({}), Fn = (n) => ({}), Kr = (n) => ({}), qn = (n) => ({});
function Jr(n) {
  let e, t, l, i, r, s, a, o, u, c, f, d, g, b;
  const y = (
    /*#slots*/
    n[56].label
  ), _ = le(
    y,
    n,
    /*$$scope*/
    n[87],
    Mn
  );
  l = new Pt({
    props: {
      key: "SMUI:textfield:icon:leading",
      value: !0,
      $$slots: { default: [xr] },
      $$scope: { ctx: n }
    }
  });
  const L = (
    /*#slots*/
    n[56].default
  ), C = le(
    L,
    n,
    /*$$scope*/
    n[87],
    null
  );
  s = new Pt({
    props: {
      key: "SMUI:textfield:icon:leading",
      value: !1,
      $$slots: { default: [$r] },
      $$scope: { ctx: n }
    }
  });
  const p = (
    /*#slots*/
    n[56].ripple
  ), m = le(
    p,
    n,
    /*$$scope*/
    n[87],
    En
  );
  let D = [
    {
      class: o = x({
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
      ).map(Jn).concat([
        /*style*/
        n[10]
      ]).join(" ")
    },
    ft(
      /*$$restProps*/
      n[46],
      ["input$", "label$", "ripple$", "outline$", "helperLine$"]
    )
  ], S = {};
  for (let h = 0; h < D.length; h += 1)
    S = Z(S, D[h]);
  return {
    c() {
      e = F("div"), _ && _.c(), t = W(), K(l.$$.fragment), i = W(), C && C.c(), r = W(), K(s.$$.fragment), a = W(), m && m.c(), ne(e, S);
    },
    m(h, k) {
      U(h, e, k), _ && _.m(e, null), B(e, t), X(l, e, null), B(e, i), C && C.m(e, null), B(e, r), X(s, e, null), B(e, a), m && m.m(e, null), n[82](e), d = !0, g || (b = [
        Q(c = vt.call(null, e, {
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
        Q(f = Le.call(
          null,
          e,
          /*use*/
          n[8]
        )),
        Q(
          /*forwardEvents*/
          n[34].call(null, e)
        ),
        z(
          e,
          "SMUITextfieldLeadingIcon:mount",
          /*handleLeadingIconMount*/
          n[38]
        ),
        z(
          e,
          "SMUITextfieldLeadingIcon:unmount",
          /*SMUITextfieldLeadingIcon_unmount_handler_1*/
          n[83]
        ),
        z(
          e,
          "SMUITextfieldTrailingIcon:mount",
          /*handleTrailingIconMount*/
          n[39]
        ),
        z(
          e,
          "SMUITextfieldTrailingIcon:unmount",
          /*SMUITextfieldTrailingIcon_unmount_handler_1*/
          n[84]
        )
      ], g = !0);
    },
    p(h, k) {
      _ && _.p && (!d || k[2] & /*$$scope*/
      33554432) && re(
        _,
        y,
        h,
        /*$$scope*/
        h[87],
        d ? ie(
          y,
          /*$$scope*/
          h[87],
          k,
          Zr
        ) : ae(
          /*$$scope*/
          h[87]
        ),
        Mn
      );
      const q = {};
      k[2] & /*$$scope*/
      33554432 && (q.$$scope = { dirty: k, ctx: h }), l.$set(q), C && C.p && (!d || k[2] & /*$$scope*/
      33554432) && re(
        C,
        L,
        h,
        /*$$scope*/
        h[87],
        d ? ie(
          L,
          /*$$scope*/
          h[87],
          k,
          null
        ) : ae(
          /*$$scope*/
          h[87]
        ),
        null
      );
      const M = {};
      k[2] & /*$$scope*/
      33554432 && (M.$$scope = { dirty: k, ctx: h }), s.$set(M), m && m.p && (!d || k[2] & /*$$scope*/
      33554432) && re(
        m,
        p,
        h,
        /*$$scope*/
        h[87],
        d ? ie(
          p,
          /*$$scope*/
          h[87],
          k,
          qr
        ) : ae(
          /*$$scope*/
          h[87]
        ),
        En
      ), ne(e, S = oe(D, [
        (!d || k[0] & /*className, disabled, textarea, variant, noLabel, invalid, internalClasses*/
        33673730 | k[1] & /*$$slots*/
        65536 && o !== (o = x({
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
        }))) && { class: o },
        (!d || k[0] & /*internalStyles, style*/
        67109888 && u !== (u = Object.entries(
          /*internalStyles*/
          h[26]
        ).map(Jn).concat([
          /*style*/
          h[10]
        ]).join(" "))) && { style: u },
        k[1] & /*$$restProps*/
        32768 && ft(
          /*$$restProps*/
          h[46],
          ["input$", "label$", "ripple$", "outline$", "helperLine$"]
        )
      ])), c && ve(c.update) && k[0] & /*ripple*/
      2048 && c.update.call(null, {
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
      }), f && ve(f.update) && k[0] & /*use*/
      256 && f.update.call(
        null,
        /*use*/
        h[8]
      );
    },
    i(h) {
      d || (w(_, h), w(l.$$.fragment, h), w(C, h), w(s.$$.fragment, h), w(m, h), d = !0);
    },
    o(h) {
      E(_, h), E(l.$$.fragment, h), E(C, h), E(s.$$.fragment, h), E(m, h), d = !1;
    },
    d(h) {
      h && O(e), _ && _.d(h), Y(l), C && C.d(h), Y(s), m && m.d(h), n[82](null), g = !1, he(b);
    }
  };
}
function Qr(n) {
  let e, t, l, i, r, s, a, o, u, c, f, d, g, b, y, _, L, C, p = !/*textarea*/
  n[14] && /*variant*/
  n[15] !== "outlined" && Nn(n), m = (
    /*textarea*/
    (n[14] || /*variant*/
    n[15] === "outlined") && jn(n)
  );
  i = new Pt({
    props: {
      key: "SMUI:textfield:icon:leading",
      value: !0,
      $$slots: { default: [la] },
      $$scope: { ctx: n }
    }
  });
  const D = (
    /*#slots*/
    n[56].default
  ), S = le(
    D,
    n,
    /*$$scope*/
    n[87],
    null
  ), h = [ra, ia], k = [];
  function q(R, j) {
    return (
      /*textarea*/
      R[14] && typeof /*value*/
      R[0] == "string" ? 0 : 1
    );
  }
  a = q(n), o = k[a] = h[a](n), c = new Pt({
    props: {
      key: "SMUI:textfield:icon:leading",
      value: !1,
      $$slots: { default: [oa] },
      $$scope: { ctx: n }
    }
  });
  let M = !/*textarea*/
  n[14] && /*variant*/
  n[15] !== "outlined" && /*ripple*/
  n[11] && Xn(n), A = [
    {
      class: d = x({
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
    ft(
      /*$$restProps*/
      n[46],
      ["input$", "label$", "ripple$", "outline$", "helperLine$"]
    )
  ], P = {};
  for (let R = 0; R < A.length; R += 1)
    P = Z(P, A[R]);
  return {
    c() {
      e = F("label"), p && p.c(), t = W(), m && m.c(), l = W(), K(i.$$.fragment), r = W(), S && S.c(), s = W(), o.c(), u = W(), K(c.$$.fragment), f = W(), M && M.c(), ne(e, P);
    },
    m(R, j) {
      U(R, e, j), p && p.m(e, null), B(e, t), m && m.m(e, null), B(e, l), X(i, e, null), B(e, r), S && S.m(e, null), B(e, s), k[a].m(e, null), B(e, u), X(c, e, null), B(e, f), M && M.m(e, null), n[78](e), _ = !0, L || (C = [
        Q(b = vt.call(null, e, {
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
        Q(y = Le.call(
          null,
          e,
          /*use*/
          n[8]
        )),
        Q(
          /*forwardEvents*/
          n[34].call(null, e)
        ),
        z(
          e,
          "SMUITextfieldLeadingIcon:mount",
          /*handleLeadingIconMount*/
          n[38]
        ),
        z(
          e,
          "SMUITextfieldLeadingIcon:unmount",
          /*SMUITextfieldLeadingIcon_unmount_handler*/
          n[79]
        ),
        z(
          e,
          "SMUITextfieldTrailingIcon:mount",
          /*handleTrailingIconMount*/
          n[39]
        ),
        z(
          e,
          "SMUITextfieldTrailingIcon:unmount",
          /*SMUITextfieldTrailingIcon_unmount_handler*/
          n[80]
        ),
        z(
          e,
          "SMUITextfieldCharacterCounter:mount",
          /*handleCharacterCounterMount*/
          n[40]
        ),
        z(
          e,
          "SMUITextfieldCharacterCounter:unmount",
          /*SMUITextfieldCharacterCounter_unmount_handler*/
          n[81]
        )
      ], L = !0);
    },
    p(R, j) {
      !/*textarea*/
      R[14] && /*variant*/
      R[15] !== "outlined" ? p ? (p.p(R, j), j[0] & /*textarea, variant*/
      49152 && w(p, 1)) : (p = Nn(R), p.c(), w(p, 1), p.m(e, t)) : p && (ge(), E(p, 1, 1, () => {
        p = null;
      }), pe()), /*textarea*/
      R[14] || /*variant*/
      R[15] === "outlined" ? m ? (m.p(R, j), j[0] & /*textarea, variant*/
      49152 && w(m, 1)) : (m = jn(R), m.c(), w(m, 1), m.m(e, l)) : m && (ge(), E(m, 1, 1, () => {
        m = null;
      }), pe());
      const de = {};
      j[2] & /*$$scope*/
      33554432 && (de.$$scope = { dirty: j, ctx: R }), i.$set(de), S && S.p && (!_ || j[2] & /*$$scope*/
      33554432) && re(
        S,
        D,
        R,
        /*$$scope*/
        R[87],
        _ ? ie(
          D,
          /*$$scope*/
          R[87],
          j,
          null
        ) : ae(
          /*$$scope*/
          R[87]
        ),
        null
      );
      let _e = a;
      a = q(R), a === _e ? k[a].p(R, j) : (ge(), E(k[_e], 1, 1, () => {
        k[_e] = null;
      }), pe(), o = k[a], o ? o.p(R, j) : (o = k[a] = h[a](R), o.c()), w(o, 1), o.m(e, u));
      const Ce = {};
      j[2] & /*$$scope*/
      33554432 && (Ce.$$scope = { dirty: j, ctx: R }), c.$set(Ce), !/*textarea*/
      R[14] && /*variant*/
      R[15] !== "outlined" && /*ripple*/
      R[11] ? M ? (M.p(R, j), j[0] & /*textarea, variant, ripple*/
      51200 && w(M, 1)) : (M = Xn(R), M.c(), w(M, 1), M.m(e, null)) : M && (ge(), E(M, 1, 1, () => {
        M = null;
      }), pe()), ne(e, P = oe(A, [
        (!_ || j[0] & /*className, disabled, textarea, variant, noLabel, label, focused, value, withLeadingIcon, withTrailingIcon, invalid, internalClasses*/
        314823171 | j[1] & /*$$slots*/
        65536 && d !== (d = x({
          [
            /*className*/
            R[9]
          ]: !0,
          "mdc-text-field": !0,
          "mdc-text-field--disabled": (
            /*disabled*/
            R[12]
          ),
          "mdc-text-field--textarea": (
            /*textarea*/
            R[14]
          ),
          "mdc-text-field--filled": (
            /*variant*/
            R[15] === "filled"
          ),
          "mdc-text-field--outlined": (
            /*variant*/
            R[15] === "outlined"
          ),
          "smui-text-field--standard": (
            /*variant*/
            R[15] === "standard" && !/*textarea*/
            R[14]
          ),
          "mdc-text-field--no-label": (
            /*noLabel*/
            R[16] || /*label*/
            R[17] == null && !/*$$slots*/
            R[47].label
          ),
          "mdc-text-field--label-floating": (
            /*focused*/
            R[28] || /*value*/
            R[0] != null && /*value*/
            R[0] !== ""
          ),
          "mdc-text-field--with-leading-icon": (
            /*isUninitializedValue*/
            R[35](
              /*withLeadingIcon*/
              R[22]
            ) ? (
              /*$$slots*/
              R[47].leadingIcon
            ) : (
              /*withLeadingIcon*/
              R[22]
            )
          ),
          "mdc-text-field--with-trailing-icon": (
            /*isUninitializedValue*/
            R[35](
              /*withTrailingIcon*/
              R[23]
            ) ? (
              /*$$slots*/
              R[47].trailingIcon
            ) : (
              /*withTrailingIcon*/
              R[23]
            )
          ),
          "mdc-text-field--with-internal-counter": (
            /*textarea*/
            R[14] && /*$$slots*/
            R[47].internalCounter
          ),
          "mdc-text-field--invalid": (
            /*invalid*/
            R[1]
          ),
          .../*internalClasses*/
          R[25]
        }))) && { class: d },
        (!_ || j[0] & /*internalStyles, style*/
        67109888 && g !== (g = Object.entries(
          /*internalStyles*/
          R[26]
        ).map(Kn).concat([
          /*style*/
          R[10]
        ]).join(" "))) && { style: g },
        {
          for: (
            /* suppress a11y warning, since this is wrapped */
            void 0
          )
        },
        j[1] & /*$$restProps*/
        32768 && ft(
          /*$$restProps*/
          R[46],
          ["input$", "label$", "ripple$", "outline$", "helperLine$"]
        )
      ])), b && ve(b.update) && j[0] & /*textarea, variant*/
      49152 | j[1] & /*inputElement*/
      4 && b.update.call(null, {
        ripple: !/*textarea*/
        R[14] && /*variant*/
        R[15] === "filled",
        unbounded: !1,
        addClass: (
          /*addClass*/
          R[43]
        ),
        removeClass: (
          /*removeClass*/
          R[44]
        ),
        addStyle: (
          /*addStyle*/
          R[45]
        ),
        eventTarget: (
          /*inputElement*/
          R[33]
        ),
        activeTarget: (
          /*inputElement*/
          R[33]
        ),
        initPromise: (
          /*initPromise*/
          R[37]
        )
      }), y && ve(y.update) && j[0] & /*use*/
      256 && y.update.call(
        null,
        /*use*/
        R[8]
      );
    },
    i(R) {
      _ || (w(p), w(m), w(i.$$.fragment, R), w(S, R), w(o), w(c.$$.fragment, R), w(M), _ = !0);
    },
    o(R) {
      E(p), E(m), E(i.$$.fragment, R), E(S, R), E(o), E(c.$$.fragment, R), E(M), _ = !1;
    },
    d(R) {
      R && O(e), p && p.d(), m && m.d(), Y(i), S && S.d(R), k[a].d(), Y(c), M && M.d(), n[78](null), L = !1, he(C);
    }
  };
}
function xr(n) {
  let e;
  const t = (
    /*#slots*/
    n[56].leadingIcon
  ), l = le(
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
      33554432) && re(
        l,
        t,
        i,
        /*$$scope*/
        i[87],
        e ? ie(
          t,
          /*$$scope*/
          i[87],
          r,
          Gr
        ) : ae(
          /*$$scope*/
          i[87]
        ),
        Dn
      );
    },
    i(i) {
      e || (w(l, i), e = !0);
    },
    o(i) {
      E(l, i), e = !1;
    },
    d(i) {
      l && l.d(i);
    }
  };
}
function $r(n) {
  let e;
  const t = (
    /*#slots*/
    n[56].trailingIcon
  ), l = le(
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
      33554432) && re(
        l,
        t,
        i,
        /*$$scope*/
        i[87],
        e ? ie(
          t,
          /*$$scope*/
          i[87],
          r,
          Nr
        ) : ae(
          /*$$scope*/
          i[87]
        ),
        Hn
      );
    },
    i(i) {
      e || (w(l, i), e = !0);
    },
    o(i) {
      E(l, i), e = !1;
    },
    d(i) {
      l && l.d(i);
    }
  };
}
function Nn(n) {
  let e, t, l, i = (
    /*variant*/
    n[15] === "filled" && Gn()
  ), r = !/*noLabel*/
  n[16] && /*label*/
  (n[17] != null || /*$$slots*/
  n[47].label) && Zn(n);
  return {
    c() {
      i && i.c(), e = W(), r && r.c(), t = Se();
    },
    m(s, a) {
      i && i.m(s, a), U(s, e, a), r && r.m(s, a), U(s, t, a), l = !0;
    },
    p(s, a) {
      /*variant*/
      s[15] === "filled" ? i || (i = Gn(), i.c(), i.m(e.parentNode, e)) : i && (i.d(1), i = null), !/*noLabel*/
      s[16] && /*label*/
      (s[17] != null || /*$$slots*/
      s[47].label) ? r ? (r.p(s, a), a[0] & /*noLabel, label*/
      196608 | a[1] & /*$$slots*/
      65536 && w(r, 1)) : (r = Zn(s), r.c(), w(r, 1), r.m(t.parentNode, t)) : r && (ge(), E(r, 1, 1, () => {
        r = null;
      }), pe());
    },
    i(s) {
      l || (w(r), l = !0);
    },
    o(s) {
      E(r), l = !1;
    },
    d(s) {
      s && (O(e), O(t)), i && i.d(s), r && r.d(s);
    }
  };
}
function Gn(n) {
  let e;
  return {
    c() {
      e = F("span"), T(e, "class", "mdc-text-field__ripple");
    },
    m(t, l) {
      U(t, e, l);
    },
    d(t) {
      t && O(e);
    }
  };
}
function Zn(n) {
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
    De(
      /*$$restProps*/
      n[46],
      "label$"
    )
  ];
  let i = {
    $$slots: { default: [ea] },
    $$scope: { ctx: n }
  };
  for (let r = 0; r < l.length; r += 1)
    i = Z(i, l[r]);
  return e = new Dl({ props: i }), n[57](e), {
    c() {
      K(e.$$.fragment);
    },
    m(r, s) {
      X(e, r, s), t = !0;
    },
    p(r, s) {
      const a = s[0] & /*focused, value, required*/
      268443649 | s[1] & /*$$restProps*/
      32768 ? oe(l, [
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
        32768 && we(De(
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
      t || (w(e.$$.fragment, r), t = !0);
    },
    o(r) {
      E(e.$$.fragment, r), t = !1;
    },
    d(r) {
      n[57](null), Y(e, r);
    }
  };
}
function ea(n) {
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
  ), r = le(
    i,
    n,
    /*$$scope*/
    n[87],
    qn
  );
  return {
    c() {
      t = ye(e), r && r.c();
    },
    m(s, a) {
      U(s, t, a), r && r.m(s, a), l = !0;
    },
    p(s, a) {
      (!l || a[0] & /*label*/
      131072) && e !== (e = /*label*/
      (s[17] == null ? "" : (
        /*label*/
        s[17]
      )) + "") && He(t, e), r && r.p && (!l || a[2] & /*$$scope*/
      33554432) && re(
        r,
        i,
        s,
        /*$$scope*/
        s[87],
        l ? ie(
          i,
          /*$$scope*/
          s[87],
          a,
          Kr
        ) : ae(
          /*$$scope*/
          s[87]
        ),
        qn
      );
    },
    i(s) {
      l || (w(r, s), l = !0);
    },
    o(s) {
      E(r, s), l = !1;
    },
    d(s) {
      s && O(t), r && r.d(s);
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
    De(
      /*$$restProps*/
      n[46],
      "outline$"
    )
  ];
  let i = {
    $$slots: { default: [na] },
    $$scope: { ctx: n }
  };
  for (let r = 0; r < l.length; r += 1)
    i = Z(i, l[r]);
  return e = new yr({ props: i }), n[59](e), {
    c() {
      K(e.$$.fragment);
    },
    m(r, s) {
      X(e, r, s), t = !0;
    },
    p(r, s) {
      const a = s[0] & /*noLabel, label*/
      196608 | s[1] & /*$$slots, $$restProps*/
      98304 ? oe(l, [
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
        32768 && we(De(
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
      t || (w(e.$$.fragment, r), t = !0);
    },
    o(r) {
      E(e.$$.fragment, r), t = !1;
    },
    d(r) {
      n[59](null), Y(e, r);
    }
  };
}
function Wn(n) {
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
    De(
      /*$$restProps*/
      n[46],
      "label$"
    )
  ];
  let i = {
    $$slots: { default: [ta] },
    $$scope: { ctx: n }
  };
  for (let r = 0; r < l.length; r += 1)
    i = Z(i, l[r]);
  return e = new Dl({ props: i }), n[58](e), {
    c() {
      K(e.$$.fragment);
    },
    m(r, s) {
      X(e, r, s), t = !0;
    },
    p(r, s) {
      const a = s[0] & /*focused, value, required*/
      268443649 | s[1] & /*$$restProps*/
      32768 ? oe(l, [
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
        32768 && we(De(
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
      t || (w(e.$$.fragment, r), t = !0);
    },
    o(r) {
      E(e.$$.fragment, r), t = !1;
    },
    d(r) {
      n[58](null), Y(e, r);
    }
  };
}
function ta(n) {
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
  ), r = le(
    i,
    n,
    /*$$scope*/
    n[87],
    Fn
  );
  return {
    c() {
      t = ye(e), r && r.c();
    },
    m(s, a) {
      U(s, t, a), r && r.m(s, a), l = !0;
    },
    p(s, a) {
      (!l || a[0] & /*label*/
      131072) && e !== (e = /*label*/
      (s[17] == null ? "" : (
        /*label*/
        s[17]
      )) + "") && He(t, e), r && r.p && (!l || a[2] & /*$$scope*/
      33554432) && re(
        r,
        i,
        s,
        /*$$scope*/
        s[87],
        l ? ie(
          i,
          /*$$scope*/
          s[87],
          a,
          Yr
        ) : ae(
          /*$$scope*/
          s[87]
        ),
        Fn
      );
    },
    i(s) {
      l || (w(r, s), l = !0);
    },
    o(s) {
      E(r, s), l = !1;
    },
    d(s) {
      s && O(t), r && r.d(s);
    }
  };
}
function na(n) {
  let e, t, l = !/*noLabel*/
  n[16] && /*label*/
  (n[17] != null || /*$$slots*/
  n[47].label) && Wn(n);
  return {
    c() {
      l && l.c(), e = Se();
    },
    m(i, r) {
      l && l.m(i, r), U(i, e, r), t = !0;
    },
    p(i, r) {
      !/*noLabel*/
      i[16] && /*label*/
      (i[17] != null || /*$$slots*/
      i[47].label) ? l ? (l.p(i, r), r[0] & /*noLabel, label*/
      196608 | r[1] & /*$$slots*/
      65536 && w(l, 1)) : (l = Wn(i), l.c(), w(l, 1), l.m(e.parentNode, e)) : l && (ge(), E(l, 1, 1, () => {
        l = null;
      }), pe());
    },
    i(i) {
      t || (w(l), t = !0);
    },
    o(i) {
      E(l), t = !1;
    },
    d(i) {
      i && O(e), l && l.d(i);
    }
  };
}
function la(n) {
  let e;
  const t = (
    /*#slots*/
    n[56].leadingIcon
  ), l = le(
    t,
    n,
    /*$$scope*/
    n[87],
    Pn
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
      33554432) && re(
        l,
        t,
        i,
        /*$$scope*/
        i[87],
        e ? ie(
          t,
          /*$$scope*/
          i[87],
          r,
          Xr
        ) : ae(
          /*$$scope*/
          i[87]
        ),
        Pn
      );
    },
    i(i) {
      e || (w(l, i), e = !0);
    },
    o(i) {
      E(l, i), e = !1;
    },
    d(i) {
      l && l.d(i);
    }
  };
}
function ia(n) {
  let e, t, l, i, r, s, a, o, u, c;
  const f = (
    /*#slots*/
    n[56].prefix
  ), d = le(
    f,
    n,
    /*$$scope*/
    n[87],
    Un
  );
  let g = (
    /*prefix*/
    n[20] != null && Vn(n)
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
    De(
      /*$$restProps*/
      n[46],
      "input$"
    )
  ];
  function y(h) {
    n[69](h);
  }
  function _(h) {
    n[70](h);
  }
  function L(h) {
    n[71](h);
  }
  function C(h) {
    n[72](h);
  }
  let p = {};
  for (let h = 0; h < b.length; h += 1)
    p = Z(p, b[h]);
  /*value*/
  n[0] !== void 0 && (p.value = /*value*/
  n[0]), /*files*/
  n[3] !== void 0 && (p.files = /*files*/
  n[3]), /*dirty*/
  n[4] !== void 0 && (p.dirty = /*dirty*/
  n[4]), /*invalid*/
  n[1] !== void 0 && (p.invalid = /*invalid*/
  n[1]), l = new Or({ props: p }), n[68](l), ee.push(() => Ye(l, "value", y)), ee.push(() => Ye(l, "files", _)), ee.push(() => Ye(l, "dirty", L)), ee.push(() => Ye(l, "invalid", C)), l.$on(
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
  let m = (
    /*suffix*/
    n[21] != null && zn(n)
  );
  const D = (
    /*#slots*/
    n[56].suffix
  ), S = le(
    D,
    n,
    /*$$scope*/
    n[87],
    On
  );
  return {
    c() {
      d && d.c(), e = W(), g && g.c(), t = W(), K(l.$$.fragment), o = W(), m && m.c(), u = W(), S && S.c();
    },
    m(h, k) {
      d && d.m(h, k), U(h, e, k), g && g.m(h, k), U(h, t, k), X(l, h, k), U(h, o, k), m && m.m(h, k), U(h, u, k), S && S.m(h, k), c = !0;
    },
    p(h, k) {
      d && d.p && (!c || k[2] & /*$$scope*/
      33554432) && re(
        d,
        f,
        h,
        /*$$scope*/
        h[87],
        c ? ie(
          f,
          /*$$scope*/
          h[87],
          k,
          Vr
        ) : ae(
          /*$$scope*/
          h[87]
        ),
        Un
      ), /*prefix*/
      h[20] != null ? g ? (g.p(h, k), k[0] & /*prefix*/
      1048576 && w(g, 1)) : (g = Vn(h), g.c(), w(g, 1), g.m(t.parentNode, t)) : g && (ge(), E(g, 1, 1, () => {
        g = null;
      }), pe());
      const q = k[0] & /*type, disabled, required, updateInvalid, helperId, noLabel, label*/
      135213056 | k[1] & /*$$restProps*/
      32768 ? oe(b, [
        k[0] & /*type*/
        262144 && { type: (
          /*type*/
          h[18]
        ) },
        k[0] & /*disabled*/
        4096 && { disabled: (
          /*disabled*/
          h[12]
        ) },
        k[0] & /*required*/
        8192 && { required: (
          /*required*/
          h[13]
        ) },
        k[0] & /*updateInvalid*/
        524288 && { updateInvalid: (
          /*updateInvalid*/
          h[19]
        ) },
        k[0] & /*helperId*/
        134217728 && { "aria-controls": (
          /*helperId*/
          h[27]
        ) },
        k[0] & /*helperId*/
        134217728 && { "aria-describedby": (
          /*helperId*/
          h[27]
        ) },
        k[0] & /*noLabel, label*/
        196608 && we(
          /*noLabel*/
          h[16] && /*label*/
          h[17] != null ? { placeholder: (
            /*label*/
            h[17]
          ) } : {}
        ),
        k[1] & /*$$restProps*/
        32768 && we(De(
          /*$$restProps*/
          h[46],
          "input$"
        ))
      ]) : {};
      !i && k[0] & /*value*/
      1 && (i = !0, q.value = /*value*/
      h[0], Xe(() => i = !1)), !r && k[0] & /*files*/
      8 && (r = !0, q.files = /*files*/
      h[3], Xe(() => r = !1)), !s && k[0] & /*dirty*/
      16 && (s = !0, q.dirty = /*dirty*/
      h[4], Xe(() => s = !1)), !a && k[0] & /*invalid*/
      2 && (a = !0, q.invalid = /*invalid*/
      h[1], Xe(() => a = !1)), l.$set(q), /*suffix*/
      h[21] != null ? m ? (m.p(h, k), k[0] & /*suffix*/
      2097152 && w(m, 1)) : (m = zn(h), m.c(), w(m, 1), m.m(u.parentNode, u)) : m && (ge(), E(m, 1, 1, () => {
        m = null;
      }), pe()), S && S.p && (!c || k[2] & /*$$scope*/
      33554432) && re(
        S,
        D,
        h,
        /*$$scope*/
        h[87],
        c ? ie(
          D,
          /*$$scope*/
          h[87],
          k,
          Wr
        ) : ae(
          /*$$scope*/
          h[87]
        ),
        On
      );
    },
    i(h) {
      c || (w(d, h), w(g), w(l.$$.fragment, h), w(m), w(S, h), c = !0);
    },
    o(h) {
      E(d, h), E(g), E(l.$$.fragment, h), E(m), E(S, h), c = !1;
    },
    d(h) {
      h && (O(e), O(t), O(o), O(u)), d && d.d(h), g && g.d(h), n[68](null), Y(l, h), m && m.d(h), S && S.d(h);
    }
  };
}
function ra(n) {
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
    De(
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
    g = Z(g, u[_]);
  /*value*/
  n[0] !== void 0 && (g.value = /*value*/
  n[0]), /*dirty*/
  n[4] !== void 0 && (g.dirty = /*dirty*/
  n[4]), /*invalid*/
  n[1] !== void 0 && (g.invalid = /*invalid*/
  n[1]), t = new Pr({ props: g }), n[60](t), ee.push(() => Ye(t, "value", c)), ee.push(() => Ye(t, "dirty", f)), ee.push(() => Ye(t, "invalid", d)), t.$on(
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
  ), y = le(
    b,
    n,
    /*$$scope*/
    n[87],
    Bn
  );
  return {
    c() {
      e = F("span"), K(t.$$.fragment), s = W(), y && y.c(), T(e, "class", a = x({
        "mdc-text-field__resizer": !("input$resizable" in /*$$restProps*/
        n[46]) || /*$$restProps*/
        n[46].input$resizable
      }));
    },
    m(_, L) {
      U(_, e, L), X(t, e, null), B(e, s), y && y.m(e, null), o = !0;
    },
    p(_, L) {
      const C = L[0] & /*disabled, required, updateInvalid, helperId*/
      134754304 | L[1] & /*$$restProps*/
      32768 ? oe(u, [
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
        L[1] & /*$$restProps*/
        32768 && we(De(
          /*$$restProps*/
          _[46],
          "input$"
        ))
      ]) : {};
      !l && L[0] & /*value*/
      1 && (l = !0, C.value = /*value*/
      _[0], Xe(() => l = !1)), !i && L[0] & /*dirty*/
      16 && (i = !0, C.dirty = /*dirty*/
      _[4], Xe(() => i = !1)), !r && L[0] & /*invalid*/
      2 && (r = !0, C.invalid = /*invalid*/
      _[1], Xe(() => r = !1)), t.$set(C), y && y.p && (!o || L[2] & /*$$scope*/
      33554432) && re(
        y,
        b,
        _,
        /*$$scope*/
        _[87],
        o ? ie(
          b,
          /*$$scope*/
          _[87],
          L,
          zr
        ) : ae(
          /*$$scope*/
          _[87]
        ),
        Bn
      ), (!o || L[1] & /*$$restProps*/
      32768 && a !== (a = x({
        "mdc-text-field__resizer": !("input$resizable" in /*$$restProps*/
        _[46]) || /*$$restProps*/
        _[46].input$resizable
      }))) && T(e, "class", a);
    },
    i(_) {
      o || (w(t.$$.fragment, _), w(y, _), o = !0);
    },
    o(_) {
      E(t.$$.fragment, _), E(y, _), o = !1;
    },
    d(_) {
      _ && O(e), n[60](null), Y(t), y && y.d(_);
    }
  };
}
function Vn(n) {
  let e, t;
  return e = new Er({
    props: {
      $$slots: { default: [aa] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      K(e.$$.fragment);
    },
    m(l, i) {
      X(e, l, i), t = !0;
    },
    p(l, i) {
      const r = {};
      i[0] & /*prefix*/
      1048576 | i[2] & /*$$scope*/
      33554432 && (r.$$scope = { dirty: i, ctx: l }), e.$set(r);
    },
    i(l) {
      t || (w(e.$$.fragment, l), t = !0);
    },
    o(l) {
      E(e.$$.fragment, l), t = !1;
    },
    d(l) {
      Y(e, l);
    }
  };
}
function aa(n) {
  let e;
  return {
    c() {
      e = ye(
        /*prefix*/
        n[20]
      );
    },
    m(t, l) {
      U(t, e, l);
    },
    p(t, l) {
      l[0] & /*prefix*/
      1048576 && He(
        e,
        /*prefix*/
        t[20]
      );
    },
    d(t) {
      t && O(e);
    }
  };
}
function zn(n) {
  let e, t;
  return e = new Hr({
    props: {
      $$slots: { default: [sa] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      K(e.$$.fragment);
    },
    m(l, i) {
      X(e, l, i), t = !0;
    },
    p(l, i) {
      const r = {};
      i[0] & /*suffix*/
      2097152 | i[2] & /*$$scope*/
      33554432 && (r.$$scope = { dirty: i, ctx: l }), e.$set(r);
    },
    i(l) {
      t || (w(e.$$.fragment, l), t = !0);
    },
    o(l) {
      E(e.$$.fragment, l), t = !1;
    },
    d(l) {
      Y(e, l);
    }
  };
}
function sa(n) {
  let e;
  return {
    c() {
      e = ye(
        /*suffix*/
        n[21]
      );
    },
    m(t, l) {
      U(t, e, l);
    },
    p(t, l) {
      l[0] & /*suffix*/
      2097152 && He(
        e,
        /*suffix*/
        t[21]
      );
    },
    d(t) {
      t && O(e);
    }
  };
}
function oa(n) {
  let e;
  const t = (
    /*#slots*/
    n[56].trailingIcon
  ), l = le(
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
      33554432) && re(
        l,
        t,
        i,
        /*$$scope*/
        i[87],
        e ? ie(
          t,
          /*$$scope*/
          i[87],
          r,
          jr
        ) : ae(
          /*$$scope*/
          i[87]
        ),
        Tn
      );
    },
    i(i) {
      e || (w(l, i), e = !0);
    },
    o(i) {
      E(l, i), e = !1;
    },
    d(i) {
      l && l.d(i);
    }
  };
}
function Xn(n) {
  let e, t;
  const l = [De(
    /*$$restProps*/
    n[46],
    "ripple$"
  )];
  let i = {};
  for (let r = 0; r < l.length; r += 1)
    i = Z(i, l[r]);
  return e = new Cr({ props: i }), n[77](e), {
    c() {
      K(e.$$.fragment);
    },
    m(r, s) {
      X(e, r, s), t = !0;
    },
    p(r, s) {
      const a = s[1] & /*$$restProps*/
      32768 ? oe(l, [we(De(
        /*$$restProps*/
        r[46],
        "ripple$"
      ))]) : {};
      e.$set(a);
    },
    i(r) {
      t || (w(e.$$.fragment, r), t = !0);
    },
    o(r) {
      E(e.$$.fragment, r), t = !1;
    },
    d(r) {
      n[77](null), Y(e, r);
    }
  };
}
function Yn(n) {
  let e, t;
  const l = [De(
    /*$$restProps*/
    n[46],
    "helperLine$"
  )];
  let i = {
    $$slots: { default: [ua] },
    $$scope: { ctx: n }
  };
  for (let r = 0; r < l.length; r += 1)
    i = Z(i, l[r]);
  return e = new Rr({ props: i }), e.$on(
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
      K(e.$$.fragment);
    },
    m(r, s) {
      X(e, r, s), t = !0;
    },
    p(r, s) {
      const a = s[1] & /*$$restProps*/
      32768 ? oe(l, [we(De(
        /*$$restProps*/
        r[46],
        "helperLine$"
      ))]) : {};
      s[2] & /*$$scope*/
      33554432 && (a.$$scope = { dirty: s, ctx: r }), e.$set(a);
    },
    i(r) {
      t || (w(e.$$.fragment, r), t = !0);
    },
    o(r) {
      E(e.$$.fragment, r), t = !1;
    },
    d(r) {
      Y(e, r);
    }
  };
}
function ua(n) {
  let e;
  const t = (
    /*#slots*/
    n[56].helper
  ), l = le(
    t,
    n,
    /*$$scope*/
    n[87],
    Rn
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
      33554432) && re(
        l,
        t,
        i,
        /*$$scope*/
        i[87],
        e ? ie(
          t,
          /*$$scope*/
          i[87],
          r,
          Fr
        ) : ae(
          /*$$scope*/
          i[87]
        ),
        Rn
      );
    },
    i(i) {
      e || (w(l, i), e = !0);
    },
    o(i) {
      E(l, i), e = !1;
    },
    d(i) {
      l && l.d(i);
    }
  };
}
function ca(n) {
  let e, t, l, i, r;
  const s = [Qr, Jr], a = [];
  function o(c, f) {
    return (
      /*valued*/
      c[36] ? 0 : 1
    );
  }
  e = o(n), t = a[e] = s[e](n);
  let u = (
    /*$$slots*/
    n[47].helper && Yn(n)
  );
  return {
    c() {
      t.c(), l = W(), u && u.c(), i = Se();
    },
    m(c, f) {
      a[e].m(c, f), U(c, l, f), u && u.m(c, f), U(c, i, f), r = !0;
    },
    p(c, f) {
      t.p(c, f), /*$$slots*/
      c[47].helper ? u ? (u.p(c, f), f[1] & /*$$slots*/
      65536 && w(u, 1)) : (u = Yn(c), u.c(), w(u, 1), u.m(i.parentNode, i)) : u && (ge(), E(u, 1, 1, () => {
        u = null;
      }), pe());
    },
    i(c) {
      r || (w(t), w(u), r = !0);
    },
    o(c) {
      E(t), E(u), r = !1;
    },
    d(c) {
      c && (O(l), O(i)), a[e].d(c), u && u.d(c);
    }
  };
}
const Kn = ([n, e]) => `${n}: ${e};`, Jn = ([n, e]) => `${n}: ${e};`;
function fa(n, e, t) {
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
  let r = ue(e, i), { $$slots: s = {}, $$scope: a } = e;
  const o = en(s), { applyPassive: u } = Rl, c = Be(Re());
  let f = () => {
  };
  function d(I) {
    return I === f;
  }
  let { use: g = [] } = e, { class: b = "" } = e, { style: y = "" } = e, { ripple: _ = !0 } = e, { disabled: L = !1 } = e, { required: C = !1 } = e, { textarea: p = !1 } = e, { variant: m = p ? "outlined" : "standard" } = e, { noLabel: D = !1 } = e, { label: S = void 0 } = e, { type: h = "text" } = e, { value: k = r.input$emptyValueUndefined ? void 0 : f } = e, { files: q = f } = e;
  const M = !d(k) || !d(q);
  d(k) && (k = void 0), d(q) && (q = null);
  let { invalid: A = f } = e, { updateInvalid: P = d(A) } = e;
  d(A) && (A = !1);
  let { dirty: R = !1 } = e, { prefix: j = void 0 } = e, { suffix: de = void 0 } = e, { validateOnValueChange: _e = P } = e, { useNativeValidation: Ce = P } = e, { withLeadingIcon: G = f } = e, { withTrailingIcon: v = f } = e, { input: N = void 0 } = e, { floatingLabel: me = void 0 } = e, { lineRipple: be = void 0 } = e, { notchedOutline: Ie = void 0 } = e, te, J, Ge = {}, ze = {}, Je, Qe = !1, yt = Pe("SMUI:addLayoutListener"), mt, gt, Ze = new Promise((I) => gt = I), xe, $e, it, et, pt = k;
  yt && (mt = yt(an)), Ne(() => {
    if (t(54, J = new hr(
      {
        // getRootAdapterMethods_
        addClass: wt,
        removeClass: Lt,
        hasClass: _t,
        registerTextFieldInteractionHandler: (I, ke) => St().addEventListener(I, ke),
        deregisterTextFieldInteractionHandler: (I, ke) => St().removeEventListener(I, ke),
        registerValidationAttributeChangeHandler: (I) => {
          const ke = (Nt) => Nt.map((Gt) => Gt.attributeName).filter((Gt) => Gt), sn = new MutationObserver((Nt) => {
            Ce && I(ke(Nt));
          }), hi = { attributes: !0 };
          return N && sn.observe(N.getElement(), hi), sn;
        },
        deregisterValidationAttributeChangeHandler: (I) => {
          I.disconnect();
        },
        // getInputAdapterMethods_
        getNativeInput: () => {
          var I;
          return (I = N == null ? void 0 : N.getElement()) !== null && I !== void 0 ? I : null;
        },
        setInputAttr: (I, ke) => {
          N == null || N.addAttr(I, ke);
        },
        removeInputAttr: (I) => {
          N == null || N.removeAttr(I);
        },
        isFocused: () => document.activeElement === (N == null ? void 0 : N.getElement()),
        registerInputInteractionHandler: (I, ke) => {
          N == null || N.getElement().addEventListener(I, ke, u());
        },
        deregisterInputInteractionHandler: (I, ke) => {
          N == null || N.getElement().removeEventListener(I, ke, u());
        },
        // getLabelAdapterMethods_
        floatLabel: (I) => me && me.float(I),
        getLabelWidth: () => me ? me.getWidth() : 0,
        hasLabel: () => !!me,
        shakeLabel: (I) => me && me.shake(I),
        setLabelRequired: (I) => me && me.setRequired(I),
        // getLineRippleAdapterMethods_
        activateLineRipple: () => be && be.activate(),
        deactivateLineRipple: () => be && be.deactivate(),
        setLineRippleTransformOrigin: (I) => be && be.setRippleCenter(I),
        // getOutlineAdapterMethods_
        closeOutline: () => Ie && Ie.closeNotch(),
        hasOutline: () => !!Ie,
        notchOutline: (I) => Ie && Ie.notch(I)
      },
      {
        get helperText() {
          return it;
        },
        get characterCounter() {
          return et;
        },
        get leadingIcon() {
          return xe;
        },
        get trailingIcon() {
          return $e;
        }
      }
    )), M) {
      if (N == null)
        throw new Error("SMUI Textfield must be initialized with either a non-undefined initial value or an Input component.");
      J.init();
    } else
      ki().then(() => {
        if (N == null)
          throw new Error("SMUI Textfield must be initialized with either a non-undefined initial value or an Input component.");
        J.init();
      });
    return gt(), () => {
      J.destroy();
    };
  }), At(() => {
    mt && mt();
  });
  function qt(I) {
    t(29, xe = I.detail);
  }
  function H(I) {
    t(30, $e = I.detail);
  }
  function V(I) {
    t(32, et = I.detail);
  }
  function Ee(I) {
    t(27, Je = I.detail);
  }
  function kt(I) {
    t(31, it = I.detail);
  }
  function _t(I) {
    var ke;
    return I in Ge ? (ke = Ge[I]) !== null && ke !== void 0 ? ke : null : St().classList.contains(I);
  }
  function wt(I) {
    Ge[I] || t(25, Ge[I] = !0, Ge);
  }
  function Lt(I) {
    (!(I in Ge) || Ge[I]) && t(25, Ge[I] = !1, Ge);
  }
  function Ol(I, ke) {
    ze[I] != ke && (ke === "" || ke == null ? (delete ze[I], t(26, ze)) : t(26, ze[I] = ke, ze));
  }
  function Ul() {
    N == null || N.focus();
  }
  function Bl() {
    N == null || N.blur();
  }
  function an() {
    if (J) {
      const I = J.shouldFloat;
      J.notchOutline(I);
    }
  }
  function St() {
    return te;
  }
  function Pl(I) {
    ee[I ? "unshift" : "push"](() => {
      me = I, t(5, me);
    });
  }
  function Fl(I) {
    ee[I ? "unshift" : "push"](() => {
      me = I, t(5, me);
    });
  }
  function ql(I) {
    ee[I ? "unshift" : "push"](() => {
      Ie = I, t(7, Ie);
    });
  }
  function Nl(I) {
    ee[I ? "unshift" : "push"](() => {
      N = I, t(2, N);
    });
  }
  function Gl(I) {
    k = I, t(0, k);
  }
  function Zl(I) {
    R = I, t(4, R);
  }
  function jl(I) {
    A = I, t(1, A), t(54, J), t(19, P);
  }
  const Wl = () => t(28, Qe = !1), Vl = () => t(28, Qe = !0), zl = (I) => Ae(te, "blur", I), Xl = (I) => Ae(te, "focus", I);
  function Yl(I) {
    ee[I ? "unshift" : "push"](() => {
      N = I, t(2, N);
    });
  }
  function Kl(I) {
    k = I, t(0, k);
  }
  function Jl(I) {
    q = I, t(3, q);
  }
  function Ql(I) {
    R = I, t(4, R);
  }
  function xl(I) {
    A = I, t(1, A), t(54, J), t(19, P);
  }
  const $l = () => t(28, Qe = !1), ei = () => t(28, Qe = !0), ti = (I) => Ae(te, "blur", I), ni = (I) => Ae(te, "focus", I);
  function li(I) {
    ee[I ? "unshift" : "push"](() => {
      be = I, t(6, be);
    });
  }
  function ii(I) {
    ee[I ? "unshift" : "push"](() => {
      te = I, t(24, te);
    });
  }
  const ri = () => t(29, xe = void 0), ai = () => t(30, $e = void 0), si = () => t(32, et = void 0);
  function oi(I) {
    ee[I ? "unshift" : "push"](() => {
      te = I, t(24, te);
    });
  }
  const ui = () => t(29, xe = void 0), ci = () => t(30, $e = void 0), fi = () => {
    t(27, Je = void 0), t(31, it = void 0);
  }, di = () => t(32, et = void 0);
  return n.$$set = (I) => {
    e = Z(Z({}, e), Oe(I)), t(46, r = ue(e, i)), "use" in I && t(8, g = I.use), "class" in I && t(9, b = I.class), "style" in I && t(10, y = I.style), "ripple" in I && t(11, _ = I.ripple), "disabled" in I && t(12, L = I.disabled), "required" in I && t(13, C = I.required), "textarea" in I && t(14, p = I.textarea), "variant" in I && t(15, m = I.variant), "noLabel" in I && t(16, D = I.noLabel), "label" in I && t(17, S = I.label), "type" in I && t(18, h = I.type), "value" in I && t(0, k = I.value), "files" in I && t(3, q = I.files), "invalid" in I && t(1, A = I.invalid), "updateInvalid" in I && t(19, P = I.updateInvalid), "dirty" in I && t(4, R = I.dirty), "prefix" in I && t(20, j = I.prefix), "suffix" in I && t(21, de = I.suffix), "validateOnValueChange" in I && t(48, _e = I.validateOnValueChange), "useNativeValidation" in I && t(49, Ce = I.useNativeValidation), "withLeadingIcon" in I && t(22, G = I.withLeadingIcon), "withTrailingIcon" in I && t(23, v = I.withTrailingIcon), "input" in I && t(2, N = I.input), "floatingLabel" in I && t(5, me = I.floatingLabel), "lineRipple" in I && t(6, be = I.lineRipple), "notchedOutline" in I && t(7, Ie = I.notchedOutline), "$$scope" in I && t(87, a = I.$$scope);
  }, n.$$.update = () => {
    if (n.$$.dirty[0] & /*input*/
    4 && t(33, l = N && N.getElement()), n.$$.dirty[0] & /*invalid, updateInvalid*/
    524290 | n.$$.dirty[1] & /*instance*/
    8388608 && J && J.isValid() !== !A && (P ? t(1, A = !J.isValid()) : J.setValid(!A)), n.$$.dirty[1] & /*instance, validateOnValueChange*/
    8519680 && J && J.getValidateOnValueChange() !== _e && J.setValidateOnValueChange(d(_e) ? !1 : _e), n.$$.dirty[1] & /*instance, useNativeValidation*/
    8650752 && J && J.setUseNativeValidation(d(Ce) ? !0 : Ce), n.$$.dirty[0] & /*disabled*/
    4096 | n.$$.dirty[1] & /*instance*/
    8388608 && J && J.setDisabled(L), n.$$.dirty[0] & /*value*/
    1 | n.$$.dirty[1] & /*instance, previousValue*/
    25165824 && J && M && pt !== k) {
      t(55, pt = k);
      const I = `${k}`;
      J.getValue() !== I && J.setValue(I);
    }
  }, [
    k,
    A,
    N,
    q,
    R,
    me,
    be,
    Ie,
    g,
    b,
    y,
    _,
    L,
    C,
    p,
    m,
    D,
    S,
    h,
    P,
    j,
    de,
    G,
    v,
    te,
    Ge,
    ze,
    Je,
    Qe,
    xe,
    $e,
    it,
    et,
    l,
    c,
    d,
    M,
    Ze,
    qt,
    H,
    V,
    Ee,
    kt,
    wt,
    Lt,
    Ol,
    r,
    o,
    _e,
    Ce,
    Ul,
    Bl,
    an,
    St,
    J,
    pt,
    s,
    Pl,
    Fl,
    ql,
    Nl,
    Gl,
    Zl,
    jl,
    Wl,
    Vl,
    zl,
    Xl,
    Yl,
    Kl,
    Jl,
    Ql,
    xl,
    $l,
    ei,
    ti,
    ni,
    li,
    ii,
    ri,
    ai,
    si,
    oi,
    ui,
    ci,
    fi,
    di,
    a
  ];
}
class da extends fe {
  constructor(e) {
    super(), ce(
      this,
      e,
      fa,
      ca,
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
Te({
  class: "mdc-deprecated-list-item__text",
  tag: "span"
});
Te({
  class: "mdc-deprecated-list-item__primary-text",
  tag: "span"
});
Te({
  class: "mdc-deprecated-list-item__secondary-text",
  tag: "span"
});
function ha(n) {
  let e, t, l, i, r, s;
  const a = (
    /*#slots*/
    n[8].default
  ), o = le(
    a,
    n,
    /*$$scope*/
    n[7],
    null
  );
  let u = [
    {
      class: t = x({
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
    c = Z(c, u[f]);
  return {
    c() {
      e = F("span"), o && o.c(), ne(e, c);
    },
    m(f, d) {
      U(f, e, d), o && o.m(e, null), n[9](e), i = !0, r || (s = [
        Q(l = Le.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        Q(
          /*forwardEvents*/
          n[3].call(null, e)
        )
      ], r = !0);
    },
    p(f, [d]) {
      o && o.p && (!i || d & /*$$scope*/
      128) && re(
        o,
        a,
        f,
        /*$$scope*/
        f[7],
        i ? ie(
          a,
          /*$$scope*/
          f[7],
          d,
          null
        ) : ae(
          /*$$scope*/
          f[7]
        ),
        null
      ), ne(e, c = oe(u, [
        (!i || d & /*className*/
        2 && t !== (t = x({
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
      ])), l && ve(l.update) && d & /*use*/
      1 && l.update.call(
        null,
        /*use*/
        f[0]
      );
    },
    i(f) {
      i || (w(o, f), i = !0);
    },
    o(f) {
      E(o, f), i = !1;
    },
    d(f) {
      f && O(e), o && o.d(f), n[9](null), r = !1, he(s);
    }
  };
}
function ma(n, e, t) {
  const l = ["use", "class", "getElement"];
  let i = ue(e, l), { $$slots: r = {}, $$scope: s } = e;
  const a = Be(Re());
  let { use: o = [] } = e, { class: u = "" } = e, c, f = Pe("SMUI:list:graphic:menu-selection-group");
  function d() {
    return c;
  }
  function g(b) {
    ee[b ? "unshift" : "push"](() => {
      c = b, t(2, c);
    });
  }
  return n.$$set = (b) => {
    e = Z(Z({}, e), Oe(b)), t(5, i = ue(e, l)), "use" in b && t(0, o = b.use), "class" in b && t(1, u = b.class), "$$scope" in b && t(7, s = b.$$scope);
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
class ga extends fe {
  constructor(e) {
    super(), ce(this, e, ma, ha, se, { use: 0, class: 1, getElement: 6 });
  }
  get getElement() {
    return this.$$.ctx[6];
  }
}
Te({
  class: "mdc-deprecated-list-item__meta",
  tag: "span"
});
Te({
  class: "mdc-deprecated-list-group",
  tag: "div"
});
Te({
  class: "mdc-deprecated-list-group__subheader",
  tag: "h3"
});
Te({
  class: "mdc-menu__selection-group-icon",
  component: ga
});
Te({
  class: "mdc-dialog__header",
  tag: "div",
  contexts: {
    "SMUI:icon-button:context": "dialog:header"
  }
});
Te({
  class: "mdc-dialog__title",
  tag: "h2"
});
Te({
  class: "mdc-dialog__content",
  tag: "div"
});
Te({
  class: "mdc-dialog__actions",
  tag: "div",
  classMap: {
    "smui-dialog__actions--reversed": "SMUI:dialog:actions:reversed"
  },
  contexts: {
    "SMUI:button:context": "dialog:action"
  }
});
Te({
  class: "smui-paper__content",
  tag: "div"
});
Te({
  class: "smui-paper__title",
  tag: "h5"
});
Te({
  class: "smui-paper__subtitle",
  tag: "h6"
});
function pa(n) {
  let e, t;
  const l = (
    /*#slots*/
    n[1].default
  ), i = le(
    l,
    n,
    /*$$scope*/
    n[0],
    null
  );
  return {
    c() {
      e = F("span"), i && i.c(), T(e, "class", "oscd-icon");
    },
    m(r, s) {
      U(r, e, s), i && i.m(e, null), t = !0;
    },
    p(r, [s]) {
      i && i.p && (!t || s & /*$$scope*/
      1) && re(
        i,
        l,
        r,
        /*$$scope*/
        r[0],
        t ? ie(
          l,
          /*$$scope*/
          r[0],
          s,
          null
        ) : ae(
          /*$$scope*/
          r[0]
        ),
        null
      );
    },
    i(r) {
      t || (w(i, r), t = !0);
    },
    o(r) {
      E(i, r), t = !1;
    },
    d(r) {
      r && O(e), i && i.d(r);
    }
  };
}
function _a(n, e, t) {
  let { $$slots: l = {}, $$scope: i } = e;
  return n.$$set = (r) => {
    "$$scope" in r && t(0, i = r.$$scope);
  }, [i, l];
}
class rn extends fe {
  constructor(e) {
    super(), ce(this, e, _a, pa, se, {});
  }
}
function ba(n) {
  let e, t;
  return {
    c() {
      e = qe("svg"), t = qe("path"), T(t, "d", "M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z"), T(e, "xmlns", "http://www.w3.org/2000/svg"), T(e, "viewBox", "0 -960 960 960"), T(
        e,
        "style",
        /*svgStyles*/
        n[0]
      );
    },
    m(l, i) {
      U(l, e, i), B(e, t);
    },
    p(l, i) {
      i & /*svgStyles*/
      1 && T(
        e,
        "style",
        /*svgStyles*/
        l[0]
      );
    },
    d(l) {
      l && O(e);
    }
  };
}
function va(n) {
  let e, t;
  return e = new rn({
    props: {
      $$slots: { default: [ba] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      K(e.$$.fragment);
    },
    m(l, i) {
      X(e, l, i), t = !0;
    },
    p(l, [i]) {
      const r = {};
      i & /*$$scope, svgStyles*/
      3 && (r.$$scope = { dirty: i, ctx: l }), e.$set(r);
    },
    i(l) {
      t || (w(e.$$.fragment, l), t = !0);
    },
    o(l) {
      E(e.$$.fragment, l), t = !1;
    },
    d(l) {
      Y(e, l);
    }
  };
}
function Ca(n, e, t) {
  let { svgStyles: l = "" } = e;
  return n.$$set = (i) => {
    "svgStyles" in i && t(0, l = i.svgStyles);
  }, [l];
}
class Ia extends fe {
  constructor(e) {
    super(), ce(this, e, Ca, va, se, { svgStyles: 0 });
  }
}
function Aa(n) {
  let e, t;
  return {
    c() {
      e = qe("svg"), t = qe("path"), T(t, "d", "M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"), T(e, "xmlns", "http://www.w3.org/2000/svg"), T(e, "viewBox", "0 -960 960 960"), T(e, "width", "24"), T(e, "height", "24"), T(e, "fill", "#004552");
    },
    m(l, i) {
      U(l, e, i), B(e, t);
    },
    p: $,
    i: $,
    o: $,
    d(l) {
      l && O(e);
    }
  };
}
class ya extends fe {
  constructor(e) {
    super(), ce(this, e, null, Aa, se, {});
  }
}
function ka(n) {
  let e, t;
  return {
    c() {
      e = qe("svg"), t = qe("path"), T(t, "d", "M480-280q17 0 28.5-11.5T520-320q0-17-11.5-28.5T480-360q-17 0-28.5 11.5T440-320q0 17 11.5 28.5T480-280Zm-40-160h80v-240h-80v240Zm40 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"), T(e, "xmlns", "http://www.w3.org/2000/svg"), T(e, "height", "24px"), T(e, "viewBox", "0 -960 960 960"), T(e, "width", "24px"), T(e, "fill", "#004552");
    },
    m(l, i) {
      U(l, e, i), B(e, t);
    },
    p: $,
    i: $,
    o: $,
    d(l) {
      l && O(e);
    }
  };
}
class wa extends fe {
  constructor(e) {
    super(), ce(this, e, null, ka, se, {});
  }
}
function La(n) {
  let e, t;
  return {
    c() {
      e = qe("svg"), t = qe("path"), T(t, "d", "m40-120 440-760 440 760H40Zm138-80h604L480-720 178-200Zm302-40q17 0 28.5-11.5T520-280q0-17-11.5-28.5T480-320q-17 0-28.5 11.5T440-280q0 17 11.5 28.5T480-240Zm-40-120h80v-200h-80v200Zm40-100Z"), T(e, "xmlns", "http://www.w3.org/2000/svg"), T(e, "height", "24px"), T(e, "viewBox", "0 -960 960 960"), T(e, "width", "24px"), T(e, "fill", "#004552");
    },
    m(l, i) {
      U(l, e, i), B(e, t);
    },
    p: $,
    i: $,
    o: $,
    d(l) {
      l && O(e);
    }
  };
}
class Sa extends fe {
  constructor(e) {
    super(), ce(this, e, null, La, se, {});
  }
}
function Ra(n) {
  let e, t;
  return {
    c() {
      e = qe("svg"), t = qe("path"), T(t, "d", "m380-300 280-180-280-180v360ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"), T(e, "xmlns", "http://www.w3.org/2000/svg"), T(e, "viewBox", "0 -960 960 960"), T(
        e,
        "style",
        /*svgStyles*/
        n[0]
      );
    },
    m(l, i) {
      U(l, e, i), B(e, t);
    },
    p(l, i) {
      i & /*svgStyles*/
      1 && T(
        e,
        "style",
        /*svgStyles*/
        l[0]
      );
    },
    d(l) {
      l && O(e);
    }
  };
}
function Ea(n) {
  let e, t;
  return e = new rn({
    props: {
      $$slots: { default: [Ra] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      K(e.$$.fragment);
    },
    m(l, i) {
      X(e, l, i), t = !0;
    },
    p(l, [i]) {
      const r = {};
      i & /*$$scope, svgStyles*/
      3 && (r.$$scope = { dirty: i, ctx: l }), e.$set(r);
    },
    i(l) {
      t || (w(e.$$.fragment, l), t = !0);
    },
    o(l) {
      E(e.$$.fragment, l), t = !1;
    },
    d(l) {
      Y(e, l);
    }
  };
}
function Ha(n, e, t) {
  let { svgStyles: l = "" } = e;
  return n.$$set = (i) => {
    "svgStyles" in i && t(0, l = i.svgStyles);
  }, [l];
}
class Da extends fe {
  constructor(e) {
    super(), ce(this, e, Ha, Ea, se, { svgStyles: 0 });
  }
}
function Ma(n) {
  let e, t;
  return {
    c() {
      e = qe("svg"), t = qe("path"), T(t, "d", "M440-280h80v-240h-80v240Zm40-320q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0 520q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"), T(e, "xmlns", "http://www.w3.org/2000/svg"), T(e, "viewBox", "0 -960 960 960"), T(
        e,
        "style",
        /*svgStyles*/
        n[0]
      );
    },
    m(l, i) {
      U(l, e, i), B(e, t);
    },
    p(l, i) {
      i & /*svgStyles*/
      1 && T(
        e,
        "style",
        /*svgStyles*/
        l[0]
      );
    },
    d(l) {
      l && O(e);
    }
  };
}
function Ta(n) {
  let e, t;
  return e = new rn({
    props: {
      $$slots: { default: [Ma] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      K(e.$$.fragment);
    },
    m(l, i) {
      X(e, l, i), t = !0;
    },
    p(l, [i]) {
      const r = {};
      i & /*$$scope, svgStyles*/
      3 && (r.$$scope = { dirty: i, ctx: l }), e.$set(r);
    },
    i(l) {
      t || (w(e.$$.fragment, l), t = !0);
    },
    o(l) {
      E(e.$$.fragment, l), t = !1;
    },
    d(l) {
      Y(e, l);
    }
  };
}
function Oa(n, e, t) {
  let { svgStyles: l = "" } = e;
  return n.$$set = (i) => {
    "svgStyles" in i && t(0, l = i.svgStyles);
  }, [l];
}
class Ua extends fe {
  constructor(e) {
    super(), ce(this, e, Oa, Ta, se, { svgStyles: 0 });
  }
}
function Ba(n) {
  let e, t, l, i;
  const r = (
    /*#slots*/
    n[7].default
  ), s = le(
    r,
    n,
    /*$$scope*/
    n[6],
    null
  );
  return {
    c() {
      e = F("span"), s && s.c(), Dt(e, "display", "inline-block");
    },
    m(a, o) {
      U(a, e, o), s && s.m(e, null), n[8](e), t = !0, l || (i = [
        z(
          e,
          "mouseenter",
          /*handleMouseEnter*/
          n[1]
        ),
        z(
          e,
          "mouseleave",
          /*handleMouseLeave*/
          n[2]
        )
      ], l = !0);
    },
    p(a, [o]) {
      s && s.p && (!t || o & /*$$scope*/
      64) && re(
        s,
        r,
        a,
        /*$$scope*/
        a[6],
        t ? ie(
          r,
          /*$$scope*/
          a[6],
          o,
          null
        ) : ae(
          /*$$scope*/
          a[6]
        ),
        null
      );
    },
    i(a) {
      t || (w(s, a), t = !0);
    },
    o(a) {
      E(s, a), t = !1;
    },
    d(a) {
      a && O(e), s && s.d(a), n[8](null), l = !1, he(i);
    }
  };
}
function Pa(n, e, t) {
  let { $$slots: l = {}, $$scope: i } = e, { content: r = "" } = e, { hoverDelay: s = 300 } = e, { hideDelay: a = 500 } = e, o, u, c, f, d = { left: 0, top: 0, width: 0 };
  function g() {
    clearTimeout(u), d = c.getBoundingClientRect(), o = setTimeout(
      () => {
        y();
      },
      s
    );
  }
  function b() {
    clearTimeout(o), u = setTimeout(
      () => {
        _();
      },
      a
    );
  }
  function y() {
    _(), f = document.createElement("div"), f.setAttribute("role", "tooltip"), f.textContent = r, Object.assign(f.style, {
      position: "fixed",
      left: `${d.left + d.width / 2}px`,
      top: `${d.top - 8}px`,
      transform: "translate(-50%, -100%)",
      zIndex: "9999",
      background: "#222",
      opacity: "0.9",
      color: "#fff",
      padding: "4px 12px",
      borderRadius: "4px",
      fontSize: "0.8rem",
      fontFamily: "Roboto, Arial, sans-serif",
      boxShadow: "0px 3px 6px rgba(0,0,0,0.16), 0px 1.5px 3px rgba(0,0,0,0.23)",
      pointerEvents: "none",
      whiteSpace: "nowrap",
      letterSpacing: "0.01em",
      lineHeight: "1.4",
      userSelect: "none"
    }), document.body.appendChild(f);
  }
  function _() {
    f && f.parentNode && (f.parentNode.removeChild(f), f = null);
  }
  At(() => {
    clearTimeout(o), clearTimeout(u), _();
  });
  function L(C) {
    ee[C ? "unshift" : "push"](() => {
      c = C, t(0, c);
    });
  }
  return n.$$set = (C) => {
    "content" in C && t(3, r = C.content), "hoverDelay" in C && t(4, s = C.hoverDelay), "hideDelay" in C && t(5, a = C.hideDelay), "$$scope" in C && t(6, i = C.$$scope);
  }, [
    c,
    g,
    b,
    r,
    s,
    a,
    i,
    l,
    L
  ];
}
class Fa extends fe {
  constructor(e) {
    super(), ce(this, e, Pa, Ba, se, { content: 3, hoverDelay: 4, hideDelay: 5 });
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
var We = {
  HEADER_CELL_SORTED: "mdc-data-table__header-cell--sorted",
  HEADER_CELL_SORTED_DESCENDING: "mdc-data-table__header-cell--sorted-descending",
  IN_PROGRESS: "mdc-data-table--in-progress",
  ROW_SELECTED: "mdc-data-table__row--selected"
}, Qn = {
  ARIA_SELECTED: "aria-selected",
  ARIA_SORT: "aria-sort"
}, nt = {
  ARIA_SELECTED: Qn.ARIA_SELECTED,
  ARIA_SORT: Qn.ARIA_SORT
}, Fe;
(function(n) {
  n.ASCENDING = "ascending", n.DESCENDING = "descending", n.NONE = "none", n.OTHER = "other";
})(Fe || (Fe = {}));
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
var qa = (
  /** @class */
  function(n) {
    dt(e, n);
    function e(t) {
      return n.call(this, Ue(Ue({}, e.defaultAdapter), t)) || this;
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
      return ln(this, void 0, void 0, function() {
        return Di(this, function(t) {
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
        s !== i && (this.adapter.removeClassNameByHeaderCellIndex(s, We.HEADER_CELL_SORTED), this.adapter.removeClassNameByHeaderCellIndex(s, We.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(s, nt.ARIA_SORT, Fe.NONE), this.adapter.setSortStatusLabelByHeaderCellIndex(s, Fe.NONE));
      this.adapter.setClassNameByHeaderCellIndex(i, We.HEADER_CELL_SORTED);
      var a = this.adapter.getAttributeByHeaderCellIndex(i, nt.ARIA_SORT), o = Fe.NONE;
      a === Fe.ASCENDING ? (this.adapter.setClassNameByHeaderCellIndex(i, We.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(i, nt.ARIA_SORT, Fe.DESCENDING), o = Fe.DESCENDING) : a === Fe.DESCENDING ? (this.adapter.removeClassNameByHeaderCellIndex(i, We.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(i, nt.ARIA_SORT, Fe.ASCENDING), o = Fe.ASCENDING) : (this.adapter.setAttributeByHeaderCellIndex(i, nt.ARIA_SORT, Fe.ASCENDING), o = Fe.ASCENDING), this.adapter.setSortStatusLabelByHeaderCellIndex(i, o), this.adapter.notifySortAction({
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
      }), this.adapter.addClass(We.IN_PROGRESS);
    }, e.prototype.hideProgress = function() {
      this.adapter.removeClass(We.IN_PROGRESS);
    }, e.prototype.setHeaderRowCheckboxState = function() {
      this.adapter.getSelectedRowCount() === 0 ? (this.adapter.setHeaderRowCheckboxChecked(!1), this.adapter.setHeaderRowCheckboxIndeterminate(!1)) : this.adapter.getSelectedRowCount() === this.adapter.getRowCount() ? (this.adapter.setHeaderRowCheckboxChecked(!0), this.adapter.setHeaderRowCheckboxIndeterminate(!1)) : (this.adapter.setHeaderRowCheckboxIndeterminate(!0), this.adapter.setHeaderRowCheckboxChecked(!1));
    }, e.prototype.selectRowAtIndex = function(t, l) {
      l ? (this.adapter.addClassAtRowIndex(t, We.ROW_SELECTED), this.adapter.setAttributeAtRowIndex(t, nt.ARIA_SELECTED, "true")) : (this.adapter.removeClassAtRowIndex(t, We.ROW_SELECTED), this.adapter.setAttributeAtRowIndex(t, nt.ARIA_SELECTED, "false"));
    }, e;
  }(ht)
);
const Na = (n) => ({}), xn = (n) => ({}), Ga = (n) => ({}), $n = (n) => ({});
function el(n) {
  let e, t, l, i, r;
  const s = (
    /*#slots*/
    n[36].progress
  ), a = le(
    s,
    n,
    /*$$scope*/
    n[35],
    $n
  );
  return {
    c() {
      e = F("div"), t = F("div"), l = W(), a && a.c(), T(t, "class", "mdc-data-table__scrim"), T(e, "class", "mdc-data-table__progress-indicator"), T(e, "style", i = Object.entries(
        /*progressIndicatorStyles*/
        n[13]
      ).map(tl).join(" "));
    },
    m(o, u) {
      U(o, e, u), B(e, t), B(e, l), a && a.m(e, null), r = !0;
    },
    p(o, u) {
      a && a.p && (!r || u[1] & /*$$scope*/
      16) && re(
        a,
        s,
        o,
        /*$$scope*/
        o[35],
        r ? ie(
          s,
          /*$$scope*/
          o[35],
          u,
          Ga
        ) : ae(
          /*$$scope*/
          o[35]
        ),
        $n
      ), (!r || u[0] & /*progressIndicatorStyles*/
      8192 && i !== (i = Object.entries(
        /*progressIndicatorStyles*/
        o[13]
      ).map(tl).join(" "))) && T(e, "style", i);
    },
    i(o) {
      r || (w(a, o), r = !0);
    },
    o(o) {
      E(a, o), r = !1;
    },
    d(o) {
      o && O(e), a && a.d(o);
    }
  };
}
function Za(n) {
  let e, t, l, i, r, s, a, o, u, c, f, d, g, b;
  const y = (
    /*#slots*/
    n[36].default
  ), _ = le(
    y,
    n,
    /*$$scope*/
    n[35],
    null
  );
  let L = [
    {
      class: i = x({
        [
          /*table$class*/
          n[6]
        ]: !0,
        "mdc-data-table__table": !0
      })
    },
    De(
      /*$$restProps*/
      n[25],
      "table$"
    )
  ], C = {};
  for (let M = 0; M < L.length; M += 1)
    C = Z(C, L[M]);
  let p = [
    {
      class: s = x({
        [
          /*container$class*/
          n[4]
        ]: !0,
        "mdc-data-table__table-container": !0
      })
    },
    De(
      /*$$restProps*/
      n[25],
      "container$"
    )
  ], m = {};
  for (let M = 0; M < p.length; M += 1)
    m = Z(m, p[M]);
  let D = (
    /*$$slots*/
    n[24].progress && el(n)
  );
  const S = (
    /*#slots*/
    n[36].paginate
  ), h = le(
    S,
    n,
    /*$$scope*/
    n[35],
    xn
  );
  let k = [
    {
      class: c = x({
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
    ft(
      /*$$restProps*/
      n[25],
      ["container$", "table$"]
    )
  ], q = {};
  for (let M = 0; M < k.length; M += 1)
    q = Z(q, k[M]);
  return {
    c() {
      e = F("div"), t = F("div"), l = F("table"), _ && _.c(), o = W(), D && D.c(), u = W(), h && h.c(), ne(l, C), ne(t, m), ne(e, q);
    },
    m(M, A) {
      U(M, e, A), B(e, t), B(t, l), _ && _.m(l, null), n[37](t), B(e, o), D && D.m(e, null), B(e, u), h && h.m(e, null), n[38](e), d = !0, g || (b = [
        Q(r = Le.call(
          null,
          l,
          /*table$use*/
          n[5]
        )),
        Q(a = Le.call(
          null,
          t,
          /*container$use*/
          n[3]
        )),
        Q(f = Le.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        Q(
          /*forwardEvents*/
          n[15].call(null, e)
        ),
        z(
          e,
          "SMUICheckbox:mount",
          /*SMUICheckbox_mount_handler*/
          n[39]
        ),
        z(
          e,
          "SMUIDataTableHeader:mount",
          /*handleHeaderMount*/
          n[19]
        ),
        z(
          e,
          "SMUIDataTableHeader:unmount",
          /*SMUIDataTableHeader_unmount_handler*/
          n[40]
        ),
        z(
          e,
          "SMUIDataTableBody:mount",
          /*handleBodyMount*/
          n[20]
        ),
        z(
          e,
          "SMUIDataTableBody:unmount",
          /*SMUIDataTableBody_unmount_handler*/
          n[41]
        ),
        z(
          e,
          "SMUIDataTableHeaderCheckbox:change",
          /*SMUIDataTableHeaderCheckbox_change_handler*/
          n[42]
        ),
        z(
          e,
          "SMUIDataTableHeader:click",
          /*handleHeaderRowClick*/
          n[22]
        ),
        z(
          e,
          "SMUIDataTableRow:click",
          /*handleRowClick*/
          n[23]
        ),
        z(
          e,
          "SMUIDataTableBodyCheckbox:change",
          /*handleBodyCheckboxChange*/
          n[21]
        )
      ], g = !0);
    },
    p(M, A) {
      _ && _.p && (!d || A[1] & /*$$scope*/
      16) && re(
        _,
        y,
        M,
        /*$$scope*/
        M[35],
        d ? ie(
          y,
          /*$$scope*/
          M[35],
          A,
          null
        ) : ae(
          /*$$scope*/
          M[35]
        ),
        null
      ), ne(l, C = oe(L, [
        (!d || A[0] & /*table$class*/
        64 && i !== (i = x({
          [
            /*table$class*/
            M[6]
          ]: !0,
          "mdc-data-table__table": !0
        }))) && { class: i },
        A[0] & /*$$restProps*/
        33554432 && De(
          /*$$restProps*/
          M[25],
          "table$"
        )
      ])), r && ve(r.update) && A[0] & /*table$use*/
      32 && r.update.call(
        null,
        /*table$use*/
        M[5]
      ), ne(t, m = oe(p, [
        (!d || A[0] & /*container$class*/
        16 && s !== (s = x({
          [
            /*container$class*/
            M[4]
          ]: !0,
          "mdc-data-table__table-container": !0
        }))) && { class: s },
        A[0] & /*$$restProps*/
        33554432 && De(
          /*$$restProps*/
          M[25],
          "container$"
        )
      ])), a && ve(a.update) && A[0] & /*container$use*/
      8 && a.update.call(
        null,
        /*container$use*/
        M[3]
      ), /*$$slots*/
      M[24].progress ? D ? (D.p(M, A), A[0] & /*$$slots*/
      16777216 && w(D, 1)) : (D = el(M), D.c(), w(D, 1), D.m(e, u)) : D && (ge(), E(D, 1, 1, () => {
        D = null;
      }), pe()), h && h.p && (!d || A[1] & /*$$scope*/
      16) && re(
        h,
        S,
        M,
        /*$$scope*/
        M[35],
        d ? ie(
          S,
          /*$$scope*/
          M[35],
          A,
          Na
        ) : ae(
          /*$$scope*/
          M[35]
        ),
        xn
      ), ne(e, q = oe(k, [
        (!d || A[0] & /*className, stickyHeader, internalClasses*/
        4102 && c !== (c = x({
          [
            /*className*/
            M[1]
          ]: !0,
          "mdc-data-table": !0,
          "mdc-data-table--sticky-header": (
            /*stickyHeader*/
            M[2]
          ),
          .../*internalClasses*/
          M[12]
        }))) && { class: c },
        A[0] & /*$$restProps*/
        33554432 && ft(
          /*$$restProps*/
          M[25],
          ["container$", "table$"]
        )
      ])), f && ve(f.update) && A[0] & /*use*/
      1 && f.update.call(
        null,
        /*use*/
        M[0]
      );
    },
    i(M) {
      d || (w(_, M), w(D), w(h, M), d = !0);
    },
    o(M) {
      E(_, M), E(D), E(h, M), d = !1;
    },
    d(M) {
      M && O(e), _ && _.d(M), n[37](null), D && D.d(), h && h.d(M), n[38](null), g = !1, he(b);
    }
  };
}
const tl = ([n, e]) => `${n}: ${e};`;
function ja(n, e, t) {
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
  let i = ue(e, l), r, s, a, { $$slots: o = {}, $$scope: u } = e;
  const c = en(o), { closest: f } = Hl, d = Be(Re());
  let { use: g = [] } = e, { class: b = "" } = e, { stickyHeader: y = !1 } = e, { sortable: _ = !1 } = e, { sort: L = null } = e, { sortDirection: C = "ascending" } = e, { sortAscendingAriaLabel: p = "sorted, ascending" } = e, { sortDescendingAriaLabel: m = "sorted, descending" } = e, { container$use: D = [] } = e, { container$class: S = "" } = e, { table$use: h = [] } = e, { table$class: k = "" } = e, q, M, A, P, R, j = {}, de = { height: "auto", top: "initial" }, _e = Pe("SMUI:addLayoutListener"), Ce, G = !1, v = Tt(!1);
  ut(n, v, (H) => t(34, r = H));
  let N = Tt(L);
  ut(n, N, (H) => t(45, a = H));
  let me = Tt(C);
  ut(n, me, (H) => t(44, s = H)), Me("SMUI:checkbox:context", "data-table"), Me("SMUI:linear-progress:context", "data-table"), Me("SMUI:linear-progress:closed", v), Me("SMUI:data-table:sortable", _), Me("SMUI:data-table:sort", N), Me("SMUI:data-table:sortDirection", me), Me("SMUI:data-table:sortAscendingAriaLabel", p), Me("SMUI:data-table:sortDescendingAriaLabel", m), _e && (Ce = _e(gt));
  let be;
  Ne(() => (t(7, M = new qa({
    addClass: Ge,
    removeClass: ze,
    getHeaderCellElements: () => {
      var H;
      return (H = P == null ? void 0 : P.cells.map((V) => V.element)) !== null && H !== void 0 ? H : [];
    },
    getHeaderCellCount: () => {
      var H;
      return (H = P == null ? void 0 : P.cells.length) !== null && H !== void 0 ? H : 0;
    },
    getAttributeByHeaderCellIndex: (H, V) => {
      var Ee;
      return (Ee = P == null ? void 0 : P.orderedCells[H].getAttr(V)) !== null && Ee !== void 0 ? Ee : null;
    },
    setAttributeByHeaderCellIndex: (H, V, Ee) => {
      P == null || P.orderedCells[H].addAttr(V, Ee);
    },
    setClassNameByHeaderCellIndex: (H, V) => {
      P == null || P.orderedCells[H].addClass(V);
    },
    removeClassNameByHeaderCellIndex: (H, V) => {
      P == null || P.orderedCells[H].removeClass(V);
    },
    notifySortAction: (H) => {
      t(26, L = H.columnId), t(27, C = H.sortValue), Ae(Ze(), "SMUIDataTable:sorted", H, void 0, !0);
    },
    getTableContainerHeight: () => A.getBoundingClientRect().height,
    getTableHeaderHeight: () => {
      const H = Ze().querySelector(".mdc-data-table__header-row");
      if (!H)
        throw new Error("MDCDataTable: Table header element not found.");
      return H.getBoundingClientRect().height;
    },
    setProgressIndicatorStyles: (H) => {
      t(13, de = H);
    },
    addClassAtRowIndex: (H, V) => {
      R == null || R.orderedRows[H].addClass(V);
    },
    getRowCount: () => {
      var H;
      return (H = R == null ? void 0 : R.rows.length) !== null && H !== void 0 ? H : 0;
    },
    getRowElements: () => {
      var H;
      return (H = R == null ? void 0 : R.rows.map((V) => V.element)) !== null && H !== void 0 ? H : [];
    },
    getRowIdAtIndex: (H) => {
      var V;
      return (V = R == null ? void 0 : R.orderedRows[H].rowId) !== null && V !== void 0 ? V : null;
    },
    getRowIndexByChildElement: (H) => {
      var V;
      return (V = R == null ? void 0 : R.orderedRows.map((Ee) => Ee.element).indexOf(f(H, ".mdc-data-table__row"))) !== null && V !== void 0 ? V : -1;
    },
    getSelectedRowCount: () => {
      var H;
      return (H = R == null ? void 0 : R.rows.filter((V) => V.selected).length) !== null && H !== void 0 ? H : 0;
    },
    isCheckboxAtRowIndexChecked: (H) => {
      const V = R == null ? void 0 : R.orderedRows[H].checkbox;
      return V ? V.checked : !1;
    },
    isHeaderRowCheckboxChecked: () => {
      const H = P == null ? void 0 : P.checkbox;
      return H ? H.checked : !1;
    },
    isRowsSelectable: () => !!Ze().querySelector(".mdc-data-table__row-checkbox") || !!Ze().querySelector(".mdc-data-table__header-row-checkbox"),
    notifyRowSelectionChanged: (H) => {
      const V = R == null ? void 0 : R.orderedRows[H.rowIndex];
      V && Ae(
        Ze(),
        "SMUIDataTable:rowSelectionChanged",
        {
          row: V.element,
          rowId: V.rowId,
          rowIndex: H.rowIndex,
          selected: H.selected
        },
        void 0,
        !0
      );
    },
    notifySelectedAll: () => {
      Je(!1), Ae(Ze(), "SMUIDataTable:selectedAll", void 0, void 0, !0);
    },
    notifyUnselectedAll: () => {
      Je(!1), Ae(Ze(), "SMUIDataTable:unselectedAll", void 0, void 0, !0);
    },
    notifyRowClick: (H) => {
      Ae(Ze(), "SMUIDataTable:rowClick", H, void 0, !0);
    },
    registerHeaderRowCheckbox: () => {
    },
    // Handled automatically.
    registerRowCheckboxes: () => {
    },
    // Handled automatically.
    removeClassAtRowIndex: (H, V) => {
      R == null || R.orderedRows[H].removeClass(V);
    },
    setAttributeAtRowIndex: (H, V, Ee) => {
      R == null || R.orderedRows[H].addAttr(V, Ee);
    },
    setHeaderRowCheckboxChecked: (H) => {
      const V = P == null ? void 0 : P.checkbox;
      V && (V.checked = H);
    },
    setHeaderRowCheckboxIndeterminate: Je,
    setRowCheckboxCheckedAtIndex: (H, V) => {
      const Ee = R == null ? void 0 : R.orderedRows[H].checkbox;
      Ee && (Ee.checked = V);
    },
    setSortStatusLabelByHeaderCellIndex: (H, V) => {
    }
    // Handled automatically.
  })), M.init(), M.layout(), t(14, G = !0), () => {
    M.destroy();
  })), At(() => {
    Ce && Ce();
  });
  function Ie(H) {
    t(10, P = H.detail);
  }
  function te(H) {
    t(11, R = H.detail);
  }
  function J(H) {
    M && M.handleRowCheckboxChange(H);
  }
  function Ge(H) {
    j[H] || t(12, j[H] = !0, j);
  }
  function ze(H) {
    (!(H in j) || j[H]) && t(12, j[H] = !1, j);
  }
  function Je(H) {
    const V = P == null ? void 0 : P.checkbox;
    V && (V.indeterminate = H);
  }
  function Qe(H) {
    if (!M || !H.detail.target)
      return;
    const V = f(H.detail.target, ".mdc-data-table__header-cell--with-sort");
    V && mt(V);
  }
  function yt(H) {
    if (!M || !H.detail.target)
      return;
    const V = f(H.detail.target, ".mdc-data-table__row");
    V && M && M.handleRowClick({ rowId: H.detail.rowId, row: V });
  }
  function mt(H) {
    var V, Ee;
    const kt = (V = P == null ? void 0 : P.orderedCells) !== null && V !== void 0 ? V : [], _t = kt.map((Lt) => Lt.element).indexOf(H);
    if (_t === -1)
      return;
    const wt = (Ee = kt[_t].columnId) !== null && Ee !== void 0 ? Ee : null;
    M.handleSortAction({ columnId: wt, columnIndex: _t, headerCell: H });
  }
  function gt() {
    return M.layout();
  }
  function Ze() {
    return q;
  }
  function xe(H) {
    ee[H ? "unshift" : "push"](() => {
      A = H, t(9, A);
    });
  }
  function $e(H) {
    ee[H ? "unshift" : "push"](() => {
      q = H, t(8, q);
    });
  }
  const it = () => M && G && M.layout(), et = () => t(10, P = void 0), pt = () => t(11, R = void 0), qt = () => M && M.handleHeaderRowCheckboxChange();
  return n.$$set = (H) => {
    e = Z(Z({}, e), Oe(H)), t(25, i = ue(e, l)), "use" in H && t(0, g = H.use), "class" in H && t(1, b = H.class), "stickyHeader" in H && t(2, y = H.stickyHeader), "sortable" in H && t(28, _ = H.sortable), "sort" in H && t(26, L = H.sort), "sortDirection" in H && t(27, C = H.sortDirection), "sortAscendingAriaLabel" in H && t(29, p = H.sortAscendingAriaLabel), "sortDescendingAriaLabel" in H && t(30, m = H.sortDescendingAriaLabel), "container$use" in H && t(3, D = H.container$use), "container$class" in H && t(4, S = H.container$class), "table$use" in H && t(5, h = H.table$use), "table$class" in H && t(6, k = H.table$class), "$$scope" in H && t(35, u = H.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty[0] & /*sort*/
    67108864 && Kt(N, a = L, a), n.$$.dirty[0] & /*sortDirection*/
    134217728 && Kt(me, s = C, s), n.$$.dirty[0] & /*instance*/
    128 | n.$$.dirty[1] & /*previousProgressClosed, $progressClosed*/
    12 && c.progress && M && be !== r && (t(33, be = r), r ? M.hideProgress() : M.showProgress());
  }, [
    g,
    b,
    y,
    D,
    S,
    h,
    k,
    M,
    q,
    A,
    P,
    R,
    j,
    de,
    G,
    d,
    v,
    N,
    me,
    Ie,
    te,
    J,
    Qe,
    yt,
    c,
    i,
    L,
    C,
    _,
    p,
    m,
    gt,
    Ze,
    be,
    r,
    u,
    o,
    xe,
    $e,
    it,
    et,
    pt,
    qt
  ];
}
class Wa extends fe {
  constructor(e) {
    super(), ce(
      this,
      e,
      ja,
      Za,
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
function Va(n) {
  let e, t, l, i, r;
  const s = (
    /*#slots*/
    n[10].default
  ), a = le(
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
    u = Z(u, o[c]);
  return {
    c() {
      e = F("thead"), a && a.c(), ne(e, u);
    },
    m(c, f) {
      U(c, e, f), a && a.m(e, null), n[11](e), l = !0, i || (r = [
        Q(t = Le.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        Q(
          /*forwardEvents*/
          n[3].call(null, e)
        ),
        z(
          e,
          "SMUICheckbox:mount",
          /*handleCheckboxMount*/
          n[4]
        ),
        z(
          e,
          "SMUICheckbox:unmount",
          /*SMUICheckbox_unmount_handler*/
          n[12]
        ),
        z(
          e,
          "SMUIDataTableCell:mount",
          /*handleCellMount*/
          n[5]
        ),
        z(
          e,
          "SMUIDataTableCell:unmount",
          /*handleCellUnmount*/
          n[6]
        )
      ], i = !0);
    },
    p(c, [f]) {
      a && a.p && (!l || f & /*$$scope*/
      512) && re(
        a,
        s,
        c,
        /*$$scope*/
        c[9],
        l ? ie(
          s,
          /*$$scope*/
          c[9],
          f,
          null
        ) : ae(
          /*$$scope*/
          c[9]
        ),
        null
      ), ne(e, u = oe(o, [f & /*$$restProps*/
      128 && /*$$restProps*/
      c[7]])), t && ve(t.update) && f & /*use*/
      1 && t.update.call(
        null,
        /*use*/
        c[0]
      );
    },
    i(c) {
      l || (w(a, c), l = !0);
    },
    o(c) {
      E(a, c), l = !1;
    },
    d(c) {
      c && O(e), a && a.d(c), n[11](null), i = !1, he(r);
    }
  };
}
function za(n, e, t) {
  const l = ["use", "getElement"];
  let i = ue(e, l), { $$slots: r = {}, $$scope: s } = e;
  const a = Be(Re());
  let { use: o = [] } = e, u, c, f = [];
  const d = /* @__PURE__ */ new WeakMap();
  Me("SMUI:data-table:row:header", !0), Ne(() => {
    const m = {
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
    return Ae(L(), "SMUIDataTableHeader:mount", m), () => {
      Ae(L(), "SMUIDataTableHeader:unmount", m);
    };
  });
  function g(m) {
    t(2, c = m.detail);
  }
  function b(m) {
    f.push(m.detail), d.set(m.detail.element, m.detail), m.stopPropagation();
  }
  function y(m) {
    const D = f.indexOf(m.detail);
    D !== -1 && (f.splice(D, 1), f = f), d.delete(m.detail.element), m.stopPropagation();
  }
  function _() {
    return [...L().querySelectorAll(".mdc-data-table__header-cell")].map((m) => d.get(m)).filter((m) => m && m._smui_data_table_header_cell_accessor);
  }
  function L() {
    return u;
  }
  function C(m) {
    ee[m ? "unshift" : "push"](() => {
      u = m, t(1, u);
    });
  }
  const p = () => t(2, c = void 0);
  return n.$$set = (m) => {
    e = Z(Z({}, e), Oe(m)), t(7, i = ue(e, l)), "use" in m && t(0, o = m.use), "$$scope" in m && t(9, s = m.$$scope);
  }, [
    o,
    u,
    c,
    a,
    g,
    b,
    y,
    i,
    L,
    s,
    r,
    C,
    p
  ];
}
class Xa extends fe {
  constructor(e) {
    super(), ce(this, e, za, Va, se, { use: 0, getElement: 8 });
  }
  get getElement() {
    return this.$$.ctx[8];
  }
}
function Ya(n) {
  let e, t, l, i, r, s;
  const a = (
    /*#slots*/
    n[9].default
  ), o = le(
    a,
    n,
    /*$$scope*/
    n[8],
    null
  );
  let u = [
    {
      class: t = x({
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
    c = Z(c, u[f]);
  return {
    c() {
      e = F("tbody"), o && o.c(), ne(e, c);
    },
    m(f, d) {
      U(f, e, d), o && o.m(e, null), n[10](e), i = !0, r || (s = [
        Q(l = Le.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        Q(
          /*forwardEvents*/
          n[3].call(null, e)
        ),
        z(
          e,
          "SMUIDataTableRow:mount",
          /*handleRowMount*/
          n[4]
        ),
        z(
          e,
          "SMUIDataTableRow:unmount",
          /*handleRowUnmount*/
          n[5]
        )
      ], r = !0);
    },
    p(f, [d]) {
      o && o.p && (!i || d & /*$$scope*/
      256) && re(
        o,
        a,
        f,
        /*$$scope*/
        f[8],
        i ? ie(
          a,
          /*$$scope*/
          f[8],
          d,
          null
        ) : ae(
          /*$$scope*/
          f[8]
        ),
        null
      ), ne(e, c = oe(u, [
        (!i || d & /*className*/
        2 && t !== (t = x({
          [
            /*className*/
            f[1]
          ]: !0,
          "mdc-data-table__content": !0
        }))) && { class: t },
        d & /*$$restProps*/
        64 && /*$$restProps*/
        f[6]
      ])), l && ve(l.update) && d & /*use*/
      1 && l.update.call(
        null,
        /*use*/
        f[0]
      );
    },
    i(f) {
      i || (w(o, f), i = !0);
    },
    o(f) {
      E(o, f), i = !1;
    },
    d(f) {
      f && O(e), o && o.d(f), n[10](null), r = !1, he(s);
    }
  };
}
function Ka(n, e, t) {
  const l = ["use", "class", "getElement"];
  let i = ue(e, l), { $$slots: r = {}, $$scope: s } = e;
  const a = Be(Re());
  let { use: o = [] } = e, { class: u = "" } = e, c, f = [];
  const d = /* @__PURE__ */ new WeakMap();
  Me("SMUI:data-table:row:header", !1), Ne(() => {
    const C = {
      get rows() {
        return f;
      },
      get orderedRows() {
        return y();
      }
    };
    return Ae(_(), "SMUIDataTableBody:mount", C), () => {
      Ae(_(), "SMUIDataTableBody:unmount", C);
    };
  });
  function g(C) {
    f.push(C.detail), d.set(C.detail.element, C.detail), C.stopPropagation();
  }
  function b(C) {
    const p = f.indexOf(C.detail);
    p !== -1 && (f.splice(p, 1), f = f), d.delete(C.detail.element), C.stopPropagation();
  }
  function y() {
    return [..._().querySelectorAll(".mdc-data-table__row")].map((C) => d.get(C)).filter((C) => C && C._smui_data_table_row_accessor);
  }
  function _() {
    return c;
  }
  function L(C) {
    ee[C ? "unshift" : "push"](() => {
      c = C, t(2, c);
    });
  }
  return n.$$set = (C) => {
    e = Z(Z({}, e), Oe(C)), t(6, i = ue(e, l)), "use" in C && t(0, o = C.use), "class" in C && t(1, u = C.class), "$$scope" in C && t(8, s = C.$$scope);
  }, [
    o,
    u,
    c,
    a,
    g,
    b,
    i,
    _,
    s,
    r,
    L
  ];
}
class Ja extends fe {
  constructor(e) {
    super(), ce(this, e, Ka, Ya, se, { use: 0, class: 1, getElement: 7 });
  }
  get getElement() {
    return this.$$.ctx[7];
  }
}
function Qa(n) {
  let e, t, l, i, r, s, a;
  const o = (
    /*#slots*/
    n[15].default
  ), u = le(
    o,
    n,
    /*$$scope*/
    n[14],
    null
  );
  let c = [
    {
      class: t = x({
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
    f = Z(f, c[d]);
  return {
    c() {
      e = F("tr"), u && u.c(), ne(e, f);
    },
    m(d, g) {
      U(d, e, g), u && u.m(e, null), n[16](e), r = !0, s || (a = [
        Q(i = Le.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        Q(
          /*forwardEvents*/
          n[6].call(null, e)
        ),
        z(
          e,
          "click",
          /*click_handler*/
          n[17]
        ),
        z(
          e,
          "SMUICheckbox:mount",
          /*handleCheckboxMount*/
          n[8]
        ),
        z(
          e,
          "SMUICheckbox:unmount",
          /*SMUICheckbox_unmount_handler*/
          n[18]
        )
      ], s = !0);
    },
    p(d, [g]) {
      u && u.p && (!r || g & /*$$scope*/
      16384) && re(
        u,
        o,
        d,
        /*$$scope*/
        d[14],
        r ? ie(
          o,
          /*$$scope*/
          d[14],
          g,
          null
        ) : ae(
          /*$$scope*/
          d[14]
        ),
        null
      ), ne(e, f = oe(c, [
        (!r || g & /*className, checkbox, internalClasses*/
        26 && t !== (t = x({
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
      ])), i && ve(i.update) && g & /*use*/
      1 && i.update.call(
        null,
        /*use*/
        d[0]
      );
    },
    i(d) {
      r || (w(u, d), r = !0);
    },
    o(d) {
      E(u, d), r = !1;
    },
    d(d) {
      d && O(e), u && u.d(d), n[16](null), s = !1, he(a);
    }
  };
}
let xa = 0;
function $a(n, e, t) {
  const l = ["use", "class", "rowId", "getElement"];
  let i = ue(e, l), { $$slots: r = {}, $$scope: s } = e;
  const a = Be(Re());
  let { use: o = [] } = e, { class: u = "" } = e, { rowId: c = "SMUI-data-table-row-" + xa++ } = e, f, d, g = {}, b = {}, y = Pe("SMUI:data-table:row:header");
  Ne(() => {
    const A = y ? {
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
        var P;
        return (P = d && d.checked) !== null && P !== void 0 ? P : !1;
      },
      addClass: L,
      removeClass: C,
      getAttr: p,
      addAttr: m
    } : {
      _smui_data_table_row_accessor: !0,
      get element() {
        return h();
      },
      get checkbox() {
        return d;
      },
      get rowId() {
        return c;
      },
      get selected() {
        var P;
        return (P = d && d.checked) !== null && P !== void 0 ? P : !1;
      },
      addClass: L,
      removeClass: C,
      getAttr: p,
      addAttr: m
    };
    return Ae(h(), "SMUIDataTableRow:mount", A), () => {
      Ae(h(), "SMUIDataTableRow:unmount", A);
    };
  });
  function _(A) {
    t(3, d = A.detail);
  }
  function L(A) {
    g[A] || t(4, g[A] = !0, g);
  }
  function C(A) {
    (!(A in g) || g[A]) && t(4, g[A] = !1, g);
  }
  function p(A) {
    var P;
    return A in b ? (P = b[A]) !== null && P !== void 0 ? P : null : h().getAttribute(A);
  }
  function m(A, P) {
    b[A] !== P && t(5, b[A] = P, b);
  }
  function D(A) {
    Ae(h(), "SMUIDataTableHeader:click", A);
  }
  function S(A) {
    Ae(h(), "SMUIDataTableRow:click", { rowId: c, target: A.target });
  }
  function h() {
    return f;
  }
  function k(A) {
    ee[A ? "unshift" : "push"](() => {
      f = A, t(2, f);
    });
  }
  const q = (A) => y ? D(A) : S(A), M = () => t(3, d = void 0);
  return n.$$set = (A) => {
    e = Z(Z({}, e), Oe(A)), t(11, i = ue(e, l)), "use" in A && t(0, o = A.use), "class" in A && t(1, u = A.class), "rowId" in A && t(12, c = A.rowId), "$$scope" in A && t(14, s = A.$$scope);
  }, [
    o,
    u,
    f,
    d,
    g,
    b,
    a,
    y,
    _,
    D,
    S,
    i,
    c,
    h,
    s,
    r,
    k,
    q,
    M
  ];
}
class Ml extends fe {
  constructor(e) {
    super(), ce(this, e, $a, Qa, se, {
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
function es(n) {
  let e, t, l, i, r, s;
  const a = (
    /*#slots*/
    n[22].default
  ), o = le(
    a,
    n,
    /*$$scope*/
    n[21],
    null
  );
  let u = [
    {
      class: t = x({
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
    c = Z(c, u[f]);
  return {
    c() {
      e = F("td"), o && o.c(), ne(e, c);
    },
    m(f, d) {
      U(f, e, d), o && o.m(e, null), n[25](e), i = !0, r || (s = [
        Q(l = Le.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        Q(
          /*forwardEvents*/
          n[11].call(null, e)
        ),
        z(
          e,
          "change",
          /*change_handler_1*/
          n[26]
        )
      ], r = !0);
    },
    p(f, d) {
      o && o.p && (!i || d & /*$$scope*/
      2097152) && re(
        o,
        a,
        f,
        /*$$scope*/
        f[21],
        i ? ie(
          a,
          /*$$scope*/
          f[21],
          d,
          null
        ) : ae(
          /*$$scope*/
          f[21]
        ),
        null
      ), ne(e, c = oe(u, [
        (!i || d & /*className, numeric, checkbox, internalClasses*/
        142 && t !== (t = x({
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
      ])), l && ve(l.update) && d & /*use*/
      1 && l.update.call(
        null,
        /*use*/
        f[0]
      );
    },
    i(f) {
      i || (w(o, f), i = !0);
    },
    o(f) {
      E(o, f), i = !1;
    },
    d(f) {
      f && O(e), o && o.d(f), n[25](null), r = !1, he(s);
    }
  };
}
function ts(n) {
  let e, t, l, i, r, s, a, o, u;
  const c = [ls, ns], f = [];
  function d(y, _) {
    return (
      /*sortable*/
      y[5] ? 0 : 1
    );
  }
  t = d(n), l = f[t] = c[t](n);
  let g = [
    {
      class: i = x({
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
  ], b = {};
  for (let y = 0; y < g.length; y += 1)
    b = Z(b, g[y]);
  return {
    c() {
      e = F("th"), l.c(), ne(e, b);
    },
    m(y, _) {
      U(y, e, _), f[t].m(e, null), n[23](e), a = !0, o || (u = [
        Q(s = Le.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        Q(
          /*forwardEvents*/
          n[11].call(null, e)
        ),
        z(
          e,
          "change",
          /*change_handler*/
          n[24]
        )
      ], o = !0);
    },
    p(y, _) {
      let L = t;
      t = d(y), t === L ? f[t].p(y, _) : (ge(), E(f[L], 1, 1, () => {
        f[L] = null;
      }), pe(), l = f[t], l ? l.p(y, _) : (l = f[t] = c[t](y), l.c()), w(l, 1), l.m(e, null)), ne(e, b = oe(g, [
        (!a || _ & /*className, numeric, checkbox, sortable, $sort, columnId, internalClasses*/
        702 && i !== (i = x({
          [
            /*className*/
            y[1]
          ]: !0,
          "mdc-data-table__header-cell": !0,
          "mdc-data-table__header-cell--numeric": (
            /*numeric*/
            y[2]
          ),
          "mdc-data-table__header-cell--checkbox": (
            /*checkbox*/
            y[3]
          ),
          "mdc-data-table__header-cell--with-sort": (
            /*sortable*/
            y[5]
          ),
          "mdc-data-table__header-cell--sorted": (
            /*sortable*/
            y[5] && /*$sort*/
            y[9] === /*columnId*/
            y[4]
          ),
          .../*internalClasses*/
          y[7]
        }))) && { class: i },
        { role: "columnheader" },
        { scope: "col" },
        (!a || _ & /*columnId*/
        16) && { "data-column-id": (
          /*columnId*/
          y[4]
        ) },
        (!a || _ & /*sortable, $sort, columnId, $sortDirection*/
        1584 && r !== (r = /*sortable*/
        y[5] ? (
          /*$sort*/
          y[9] === /*columnId*/
          y[4] ? (
            /*$sortDirection*/
            y[10]
          ) : "none"
        ) : void 0)) && { "aria-sort": r },
        _ & /*internalAttrs*/
        256 && /*internalAttrs*/
        y[8],
        _ & /*$$restProps*/
        524288 && /*$$restProps*/
        y[19]
      ])), s && ve(s.update) && _ & /*use*/
      1 && s.update.call(
        null,
        /*use*/
        y[0]
      );
    },
    i(y) {
      a || (w(l), a = !0);
    },
    o(y) {
      E(l), a = !1;
    },
    d(y) {
      y && O(e), f[t].d(), n[23](null), o = !1, he(u);
    }
  };
}
function ns(n) {
  let e;
  const t = (
    /*#slots*/
    n[22].default
  ), l = le(
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
      2097152) && re(
        l,
        t,
        i,
        /*$$scope*/
        i[21],
        e ? ie(
          t,
          /*$$scope*/
          i[21],
          r,
          null
        ) : ae(
          /*$$scope*/
          i[21]
        ),
        null
      );
    },
    i(i) {
      e || (w(l, i), e = !0);
    },
    o(i) {
      E(l, i), e = !1;
    },
    d(i) {
      l && l.d(i);
    }
  };
}
function ls(n) {
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
  ), u = le(
    o,
    n,
    /*$$scope*/
    n[21],
    null
  );
  return {
    c() {
      e = F("div"), u && u.c(), t = W(), l = F("div"), r = ye(i), T(l, "class", "mdc-data-table__sort-status-label"), T(l, "aria-hidden", "true"), T(l, "id", s = /*columnId*/
      n[4] + "-status-label"), T(e, "class", "mdc-data-table__header-cell-wrapper");
    },
    m(c, f) {
      U(c, e, f), u && u.m(e, null), B(e, t), B(e, l), B(l, r), a = !0;
    },
    p(c, f) {
      u && u.p && (!a || f & /*$$scope*/
      2097152) && re(
        u,
        o,
        c,
        /*$$scope*/
        c[21],
        a ? ie(
          o,
          /*$$scope*/
          c[21],
          f,
          null
        ) : ae(
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
      ) : "") + "") && He(r, i), (!a || f & /*columnId*/
      16 && s !== (s = /*columnId*/
      c[4] + "-status-label")) && T(l, "id", s);
    },
    i(c) {
      a || (w(u, c), a = !0);
    },
    o(c) {
      E(u, c), a = !1;
    },
    d(c) {
      c && O(e), u && u.d(c);
    }
  };
}
function is(n) {
  let e, t, l, i;
  const r = [ts, es], s = [];
  function a(o, u) {
    return (
      /*header*/
      o[12] ? 0 : 1
    );
  }
  return e = a(n), t = s[e] = r[e](n), {
    c() {
      t.c(), l = Se();
    },
    m(o, u) {
      s[e].m(o, u), U(o, l, u), i = !0;
    },
    p(o, [u]) {
      t.p(o, u);
    },
    i(o) {
      i || (w(t), i = !0);
    },
    o(o) {
      E(t), i = !1;
    },
    d(o) {
      o && O(l), s[e].d(o);
    }
  };
}
let rs = 0;
function as(n, e, t) {
  const l = ["use", "class", "numeric", "checkbox", "columnId", "sortable", "getElement"];
  let i = ue(e, l), r, s, { $$slots: a = {}, $$scope: o } = e;
  const u = Be(Re());
  let c = Pe("SMUI:data-table:row:header"), { use: f = [] } = e, { class: d = "" } = e, { numeric: g = !1 } = e, { checkbox: b = !1 } = e, { columnId: y = c ? "SMUI-data-table-column-" + rs++ : "SMUI-data-table-unused" } = e, { sortable: _ = Pe("SMUI:data-table:sortable") } = e, L, C = {}, p = {}, m = Pe("SMUI:data-table:sort");
  ut(n, m, (v) => t(9, r = v));
  let D = Pe("SMUI:data-table:sortDirection");
  ut(n, D, (v) => t(10, s = v));
  let S = Pe("SMUI:data-table:sortAscendingAriaLabel"), h = Pe("SMUI:data-table:sortDescendingAriaLabel");
  _ && (Me("SMUI:label:context", "data-table:sortable-header-cell"), Me("SMUI:icon-button:context", "data-table:sortable-header-cell"), Me("SMUI:icon-button:aria-describedby", y + "-status-label")), Ne(() => {
    const v = c ? {
      _smui_data_table_header_cell_accessor: !0,
      get element() {
        return j();
      },
      get columnId() {
        return y;
      },
      addClass: k,
      removeClass: q,
      getAttr: M,
      addAttr: A
    } : {
      _smui_data_table_header_cell_accessor: !1,
      get element() {
        return j();
      },
      get columnId() {
      },
      addClass: k,
      removeClass: q,
      getAttr: M,
      addAttr: A
    };
    return Ae(j(), "SMUIDataTableCell:mount", v), () => {
      Ae(j(), "SMUIDataTableCell:unmount", v);
    };
  });
  function k(v) {
    C[v] || t(7, C[v] = !0, C);
  }
  function q(v) {
    (!(v in C) || C[v]) && t(7, C[v] = !1, C);
  }
  function M(v) {
    var N;
    return v in p ? (N = p[v]) !== null && N !== void 0 ? N : null : j().getAttribute(v);
  }
  function A(v, N) {
    p[v] !== N && t(8, p[v] = N, p);
  }
  function P(v) {
    Ae(j(), "SMUIDataTableHeaderCheckbox:change", v);
  }
  function R(v) {
    Ae(j(), "SMUIDataTableBodyCheckbox:change", v);
  }
  function j() {
    return L;
  }
  function de(v) {
    ee[v ? "unshift" : "push"](() => {
      L = v, t(6, L);
    });
  }
  const _e = (v) => b && P(v);
  function Ce(v) {
    ee[v ? "unshift" : "push"](() => {
      L = v, t(6, L);
    });
  }
  const G = (v) => b && R(v);
  return n.$$set = (v) => {
    e = Z(Z({}, e), Oe(v)), t(19, i = ue(e, l)), "use" in v && t(0, f = v.use), "class" in v && t(1, d = v.class), "numeric" in v && t(2, g = v.numeric), "checkbox" in v && t(3, b = v.checkbox), "columnId" in v && t(4, y = v.columnId), "sortable" in v && t(5, _ = v.sortable), "$$scope" in v && t(21, o = v.$$scope);
  }, [
    f,
    d,
    g,
    b,
    y,
    _,
    L,
    C,
    p,
    r,
    s,
    u,
    c,
    m,
    D,
    S,
    h,
    P,
    R,
    i,
    j,
    o,
    a,
    de,
    _e,
    Ce,
    G
  ];
}
class Ft extends fe {
  constructor(e) {
    super(), ce(this, e, as, is, se, {
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
const { Boolean: Tl } = bi;
function nl(n, e, t) {
  const l = n.slice();
  return l[17] = e[t], l[19] = t, l;
}
const ss = (n) => ({ item: n & /*items*/
1 }), ll = (n) => ({ item: (
  /*item*/
  n[17]
) });
function il(n, e, t) {
  const l = n.slice();
  return l[20] = e[t], l;
}
function rl(n, e, t) {
  const l = n.slice();
  return l[20] = e[t], l;
}
function os(n) {
  let e, t;
  return e = new Wa({
    props: {
      style: "width: 100%;",
      $$slots: { default: [vs] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      K(e.$$.fragment);
    },
    m(l, i) {
      X(e, l, i), t = !0;
    },
    p(l, i) {
      const r = {};
      i & /*$$scope, items, rowBg, hoveredRow, getRowId, slotHasActions, columns, headerBg*/
      17379 && (r.$$scope = { dirty: i, ctx: l }), e.$set(r);
    },
    i(l) {
      t || (w(e.$$.fragment, l), t = !0);
    },
    o(l) {
      E(e.$$.fragment, l), t = !1;
    },
    d(l) {
      Y(e, l);
    }
  };
}
function us(n) {
  let e, t;
  return {
    c() {
      e = F("p"), t = ye(
        /*emptyText*/
        n[4]
      ), T(e, "class", "status svelte-1v7zd15");
    },
    m(l, i) {
      U(l, e, i), B(e, t);
    },
    p(l, i) {
      i & /*emptyText*/
      16 && He(
        t,
        /*emptyText*/
        l[4]
      );
    },
    i: $,
    o: $,
    d(l) {
      l && O(e);
    }
  };
}
function cs(n) {
  let e, t;
  return {
    c() {
      e = F("p"), t = ye(
        /*errorMsg*/
        n[3]
      ), T(e, "class", "status error svelte-1v7zd15");
    },
    m(l, i) {
      U(l, e, i), B(e, t);
    },
    p(l, i) {
      i & /*errorMsg*/
      8 && He(
        t,
        /*errorMsg*/
        l[3]
      );
    },
    i: $,
    o: $,
    d(l) {
      l && O(e);
    }
  };
}
function fs(n) {
  let e;
  return {
    c() {
      e = F("p"), e.textContent = "Loading…", T(e, "class", "status svelte-1v7zd15");
    },
    m(t, l) {
      U(t, e, l);
    },
    p: $,
    i: $,
    o: $,
    d(t) {
      t && O(e);
    }
  };
}
function ds(n) {
  let e = (
    /*col*/
    n[20].header + ""
  ), t;
  return {
    c() {
      t = ye(e);
    },
    m(l, i) {
      U(l, t, i);
    },
    p(l, i) {
      i & /*columns*/
      2 && e !== (e = /*col*/
      l[20].header + "") && He(t, e);
    },
    d(l) {
      l && O(t);
    }
  };
}
function al(n) {
  let e, t;
  return e = new Ft({
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
      $$slots: { default: [ds] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      K(e.$$.fragment);
    },
    m(l, i) {
      X(e, l, i), t = !0;
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
      t || (w(e.$$.fragment, l), t = !0);
    },
    o(l) {
      E(e.$$.fragment, l), t = !1;
    },
    d(l) {
      Y(e, l);
    }
  };
}
function sl(n) {
  let e, t;
  return e = new Ft({
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
      K(e.$$.fragment);
    },
    m(l, i) {
      X(e, l, i), t = !0;
    },
    p(l, i) {
      const r = {};
      i & /*headerBg*/
      64 && (r.style = /*headerBg*/
      l[6] ? `background-color:${/*headerBg*/
      l[6]}` : void 0), e.$set(r);
    },
    i(l) {
      t || (w(e.$$.fragment, l), t = !0);
    },
    o(l) {
      E(e.$$.fragment, l), t = !1;
    },
    d(l) {
      Y(e, l);
    }
  };
}
function hs(n) {
  let e, t, l, i = je(
    /*columns*/
    n[1]
  ), r = [];
  for (let o = 0; o < i.length; o += 1)
    r[o] = al(rl(n, i, o));
  const s = (o) => E(r[o], 1, 1, () => {
    r[o] = null;
  });
  let a = (
    /*slotHasActions*/
    n[9] && sl(n)
  );
  return {
    c() {
      for (let o = 0; o < r.length; o += 1)
        r[o].c();
      e = W(), a && a.c(), t = Se();
    },
    m(o, u) {
      for (let c = 0; c < r.length; c += 1)
        r[c] && r[c].m(o, u);
      U(o, e, u), a && a.m(o, u), U(o, t, u), l = !0;
    },
    p(o, u) {
      if (u & /*columns, headerBg, Boolean*/
      66) {
        i = je(
          /*columns*/
          o[1]
        );
        let c;
        for (c = 0; c < i.length; c += 1) {
          const f = rl(o, i, c);
          r[c] ? (r[c].p(f, u), w(r[c], 1)) : (r[c] = al(f), r[c].c(), w(r[c], 1), r[c].m(e.parentNode, e));
        }
        for (ge(), c = i.length; c < r.length; c += 1)
          s(c);
        pe();
      }
      /*slotHasActions*/
      o[9] ? a ? (a.p(o, u), u & /*slotHasActions*/
      512 && w(a, 1)) : (a = sl(o), a.c(), w(a, 1), a.m(t.parentNode, t)) : a && (ge(), E(a, 1, 1, () => {
        a = null;
      }), pe());
    },
    i(o) {
      if (!l) {
        for (let u = 0; u < i.length; u += 1)
          w(r[u]);
        w(a), l = !0;
      }
    },
    o(o) {
      r = r.filter(Tl);
      for (let u = 0; u < r.length; u += 1)
        E(r[u]);
      E(a), l = !1;
    },
    d(o) {
      o && (O(e), O(t)), tn(r, o), a && a.d(o);
    }
  };
}
function ms(n) {
  let e, t;
  return e = new Ml({
    props: {
      $$slots: { default: [hs] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      K(e.$$.fragment);
    },
    m(l, i) {
      X(e, l, i), t = !0;
    },
    p(l, i) {
      const r = {};
      i & /*$$scope, headerBg, slotHasActions, columns*/
      16962 && (r.$$scope = { dirty: i, ctx: l }), e.$set(r);
    },
    i(l) {
      t || (w(e.$$.fragment, l), t = !0);
    },
    o(l) {
      E(e.$$.fragment, l), t = !1;
    },
    d(l) {
      Y(e, l);
    }
  };
}
function gs(n) {
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
      t = ye(e);
    },
    m(i, r) {
      U(i, t, r);
    },
    p(i, r) {
      var s;
      r & /*items, columns*/
      3 && e !== (e = /*item*/
      (((s = i[17]) == null ? void 0 : s[
        /*col*/
        i[20].key
      ]) ?? "") + "") && He(t, e);
    },
    d(i) {
      i && O(t);
    }
  };
}
function ol(n) {
  let e, t;
  return e = new Ft({
    props: {
      $$slots: { default: [gs] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      K(e.$$.fragment);
    },
    m(l, i) {
      X(e, l, i), t = !0;
    },
    p(l, i) {
      const r = {};
      i & /*$$scope, items, columns*/
      16387 && (r.$$scope = { dirty: i, ctx: l }), e.$set(r);
    },
    i(l) {
      t || (w(e.$$.fragment, l), t = !0);
    },
    o(l) {
      E(e.$$.fragment, l), t = !1;
    },
    d(l) {
      Y(e, l);
    }
  };
}
function ul(n) {
  let e, t;
  return e = new Ft({
    props: {
      numeric: !0,
      $$slots: { default: [ps] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      K(e.$$.fragment);
    },
    m(l, i) {
      X(e, l, i), t = !0;
    },
    p(l, i) {
      const r = {};
      i & /*$$scope, items*/
      16385 && (r.$$scope = { dirty: i, ctx: l }), e.$set(r);
    },
    i(l) {
      t || (w(e.$$.fragment, l), t = !0);
    },
    o(l) {
      E(e.$$.fragment, l), t = !1;
    },
    d(l) {
      Y(e, l);
    }
  };
}
function ps(n) {
  let e;
  const t = (
    /*#slots*/
    n[11].actions
  ), l = le(
    t,
    n,
    /*$$scope*/
    n[14],
    ll
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
      16385) && re(
        l,
        t,
        i,
        /*$$scope*/
        i[14],
        e ? ie(
          t,
          /*$$scope*/
          i[14],
          r,
          ss
        ) : ae(
          /*$$scope*/
          i[14]
        ),
        ll
      );
    },
    i(i) {
      e || (w(l, i), e = !0);
    },
    o(i) {
      E(l, i), e = !1;
    },
    d(i) {
      l && l.d(i);
    }
  };
}
function _s(n) {
  let e, t, l, i = je(
    /*columns*/
    n[1]
  ), r = [];
  for (let o = 0; o < i.length; o += 1)
    r[o] = ol(il(n, i, o));
  const s = (o) => E(r[o], 1, 1, () => {
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
      e = W(), a && a.c(), t = W();
    },
    m(o, u) {
      for (let c = 0; c < r.length; c += 1)
        r[c] && r[c].m(o, u);
      U(o, e, u), a && a.m(o, u), U(o, t, u), l = !0;
    },
    p(o, u) {
      if (u & /*items, columns*/
      3) {
        i = je(
          /*columns*/
          o[1]
        );
        let c;
        for (c = 0; c < i.length; c += 1) {
          const f = il(o, i, c);
          r[c] ? (r[c].p(f, u), w(r[c], 1)) : (r[c] = ol(f), r[c].c(), w(r[c], 1), r[c].m(e.parentNode, e));
        }
        for (ge(), c = i.length; c < r.length; c += 1)
          s(c);
        pe();
      }
      /*slotHasActions*/
      o[9] ? a ? (a.p(o, u), u & /*slotHasActions*/
      512 && w(a, 1)) : (a = ul(o), a.c(), w(a, 1), a.m(t.parentNode, t)) : a && (ge(), E(a, 1, 1, () => {
        a = null;
      }), pe());
    },
    i(o) {
      if (!l) {
        for (let u = 0; u < i.length; u += 1)
          w(r[u]);
        w(a), l = !0;
      }
    },
    o(o) {
      r = r.filter(Tl);
      for (let u = 0; u < r.length; u += 1)
        E(r[u]);
      E(a), l = !1;
    },
    d(o) {
      o && (O(e), O(t)), tn(r, o), a && a.d(o);
    }
  };
}
function cl(n, e) {
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
  return l = new Ml({
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
      $$slots: { default: [_s] },
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
      t = Se(), K(l.$$.fragment), this.first = t;
    },
    m(s, a) {
      U(s, t, a), X(l, s, a), i = !0;
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
      i || (w(l.$$.fragment, s), i = !0);
    },
    o(s) {
      E(l.$$.fragment, s), i = !1;
    },
    d(s) {
      s && O(t), Y(l, s);
    }
  };
}
function bs(n) {
  let e = [], t = /* @__PURE__ */ new Map(), l, i, r = je(
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
    let o = nl(n, r, a), u = s(o);
    t.set(u, e[a] = cl(u, o));
  }
  return {
    c() {
      for (let a = 0; a < e.length; a += 1)
        e[a].c();
      l = Se();
    },
    m(a, o) {
      for (let u = 0; u < e.length; u += 1)
        e[u] && e[u].m(a, o);
      U(a, l, o), i = !0;
    },
    p(a, o) {
      o & /*rowBg, hoveredRow, getRowId, items, Boolean, $$scope, slotHasActions, columns*/
      17315 && (r = je(
        /*items*/
        a[0]
      ), ge(), e = wl(e, o, s, 1, a, r, t, l.parentNode, Ri, cl, l, nl), pe());
    },
    i(a) {
      if (!i) {
        for (let o = 0; o < r.length; o += 1)
          w(e[o]);
        i = !0;
      }
    },
    o(a) {
      for (let o = 0; o < e.length; o += 1)
        E(e[o]);
      i = !1;
    },
    d(a) {
      a && O(l);
      for (let o = 0; o < e.length; o += 1)
        e[o].d(a);
    }
  };
}
function vs(n) {
  let e, t, l, i;
  return e = new Xa({
    props: {
      style: (
        /*headerBg*/
        n[6] ? `background-color:${/*headerBg*/
        n[6]}` : void 0
      ),
      $$slots: { default: [ms] },
      $$scope: { ctx: n }
    }
  }), l = new Ja({
    props: {
      $$slots: { default: [bs] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      K(e.$$.fragment), t = W(), K(l.$$.fragment);
    },
    m(r, s) {
      X(e, r, s), U(r, t, s), X(l, r, s), i = !0;
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
      i || (w(e.$$.fragment, r), w(l.$$.fragment, r), i = !0);
    },
    o(r) {
      E(e.$$.fragment, r), E(l.$$.fragment, r), i = !1;
    },
    d(r) {
      r && O(t), Y(e, r), Y(l, r);
    }
  };
}
function Cs(n) {
  let e, t, l, i;
  const r = [fs, cs, us, os], s = [];
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
      t.c(), l = Se();
    },
    m(o, u) {
      s[e].m(o, u), U(o, l, u), i = !0;
    },
    p(o, [u]) {
      let c = e;
      e = a(o), e === c ? s[e].p(o, u) : (ge(), E(s[c], 1, 1, () => {
        s[c] = null;
      }), pe(), t = s[e], t ? t.p(o, u) : (t = s[e] = r[e](o), t.c()), w(t, 1), t.m(l.parentNode, l));
    },
    i(o) {
      i || (w(t), i = !0);
    },
    o(o) {
      E(t), i = !1;
    },
    d(o) {
      o && O(l), s[e].d(o);
    }
  };
}
function Is(n, e, t) {
  let l, { $$slots: i = {}, $$scope: r } = e;
  const s = en(i);
  let { items: a = [] } = e, { columns: o = [] } = e, { loading: u = !1 } = e, { errorMsg: c = "" } = e, { emptyText: f = "Nothing to show." } = e, { getRowId: d = (m, D) => {
    var S, h;
    return (h = m && ((S = m.id) !== null && S !== void 0 ? S : m.key)) !== null && h !== void 0 ? h : D;
  } } = e, { headerBg: g = null } = e, { rowBg: b = null } = e, y = null;
  const _ = s;
  let { hasActions: L = !1 } = e;
  const C = (m, D) => t(8, y = d(m, D)), p = () => t(8, y = null);
  return n.$$set = (m) => {
    "items" in m && t(0, a = m.items), "columns" in m && t(1, o = m.columns), "loading" in m && t(2, u = m.loading), "errorMsg" in m && t(3, c = m.errorMsg), "emptyText" in m && t(4, f = m.emptyText), "getRowId" in m && t(5, d = m.getRowId), "headerBg" in m && t(6, g = m.headerBg), "rowBg" in m && t(7, b = m.rowBg), "hasActions" in m && t(10, L = m.hasActions), "$$scope" in m && t(14, r = m.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty & /*hasActions*/
    1024 && t(9, l = L || !!(_ != null && _.actions));
  }, [
    a,
    o,
    u,
    c,
    f,
    d,
    g,
    b,
    y,
    l,
    L,
    i,
    C,
    p,
    r
  ];
}
class As extends fe {
  constructor(e) {
    super(), ce(this, e, Is, Cs, se, {
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
const ys = Object.freeze({
  // This flag exists as a workaround for issue 454 (basically a browser bug) - seems like these rect values take time to update when in grid layout. Setting it to true can cause strange behaviour in the REPL for non-grid zones, see issue 470
  USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT: "USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT"
});
ys.USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT + "";
function ks(n) {
  let e;
  return {
    c() {
      e = ye("CONTINUE");
    },
    m(t, l) {
      U(t, e, l);
    },
    d(t) {
      t && O(e);
    }
  };
}
function ws(n) {
  let e;
  return {
    c() {
      e = ye("ADD NEW PROCESS");
    },
    m(t, l) {
      U(t, e, l);
    },
    d(t) {
      t && O(e);
    }
  };
}
function Ls(n) {
  let e, t, l, i, r, s, a, o;
  t = new Ia({
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
  r = new Da({
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
      e = F("button"), K(t.$$.fragment), l = W(), i = F("button"), K(r.$$.fragment), T(e, "type", "button"), T(e, "class", "icon svelte-wxofq2"), T(e, "aria-label", "View process"), T(i, "type", "button"), T(i, "class", "icon svelte-wxofq2"), T(i, "aria-label", "Start process");
    },
    m(f, d) {
      U(f, e, d), X(t, e, null), U(f, l, d), U(f, i, d), X(r, i, null), s = !0, a || (o = [
        z(e, "click", u),
        z(i, "click", c)
      ], a = !0);
    },
    p(f, d) {
      n = f;
    },
    i(f) {
      s || (w(t.$$.fragment, f), w(r.$$.fragment, f), s = !0);
    },
    o(f) {
      E(t.$$.fragment, f), E(r.$$.fragment, f), s = !1;
    },
    d(f) {
      f && (O(e), O(l), O(i)), Y(t), Y(r), a = !1, he(o);
    }
  };
}
function Ss(n) {
  let e, t, l, i, r, s, a, o, u, c, f, d, g, b, y, _, L;
  i = new Ua({}), o = new _n({
    props: {
      variant: "raised",
      style: "--mdc-theme-primary: #ffffff; --mdc-theme-on-primary: #004552",
      $$slots: { default: [ks] },
      $$scope: { ctx: n }
    }
  }), o.$on(
    "click",
    /*click_handler*/
    n[11]
  );
  function C(m) {
    n[12](m);
  }
  let p = {
    variant: "outlined",
    label: "Search Processes"
  };
  return (
    /*searchQuery*/
    n[2] !== void 0 && (p.value = /*searchQuery*/
    n[2]), f = new da({ props: p }), ee.push(() => Ye(f, "value", C)), b = new _n({
      props: {
        variant: "raised",
        style: "--mdc-theme-primary: #004552; --mdc-theme-on-primary: #ffffff",
        $$slots: { default: [ws] },
        $$scope: { ctx: n }
      }
    }), b.$on(
      "click",
      /*handleAddNew*/
      n[7]
    ), _ = new As({
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
            Ls,
            ({ item: m }) => ({ 16: m }),
            ({ item: m }) => m ? 65536 : 0
          ]
        },
        $$scope: { ctx: n }
      }
    }), {
      c() {
        e = F("div"), t = F("div"), l = F("div"), K(i.$$.fragment), r = W(), s = F("span"), s.textContent = `A process “Process Name C” has already been started for the ---.scd.
        Would you like to continue where you left off?`, a = W(), K(o.$$.fragment), u = W(), c = F("div"), K(f.$$.fragment), g = W(), K(b.$$.fragment), y = W(), K(_.$$.fragment), T(s, "class", "svelte-wxofq2"), T(l, "class", "process-banner__info svelte-wxofq2"), T(t, "class", "process-banner svelte-wxofq2"), T(c, "class", "process-toolbar svelte-wxofq2"), T(e, "class", "processes svelte-wxofq2");
      },
      m(m, D) {
        U(m, e, D), B(e, t), B(t, l), X(i, l, null), B(l, r), B(l, s), B(t, a), X(o, t, null), B(e, u), B(e, c), X(f, c, null), B(c, g), X(b, c, null), B(e, y), X(_, e, null), L = !0;
      },
      p(m, [D]) {
        const S = {};
        D & /*$$scope*/
        131072 && (S.$$scope = { dirty: D, ctx: m }), o.$set(S);
        const h = {};
        !d && D & /*searchQuery*/
        4 && (d = !0, h.value = /*searchQuery*/
        m[2], Xe(() => d = !1)), f.$set(h);
        const k = {};
        D & /*$$scope*/
        131072 && (k.$$scope = { dirty: D, ctx: m }), b.$set(k);
        const q = {};
        D & /*filteredRows*/
        8 && (q.items = /*filteredRows*/
        m[3]), D & /*loading*/
        1 && (q.loading = /*loading*/
        m[0]), D & /*errorMsg*/
        2 && (q.errorMsg = /*errorMsg*/
        m[1]), D & /*$$scope, item*/
        196608 && (q.$$scope = { dirty: D, ctx: m }), _.$set(q);
      },
      i(m) {
        L || (w(i.$$.fragment, m), w(o.$$.fragment, m), w(f.$$.fragment, m), w(b.$$.fragment, m), w(_.$$.fragment, m), L = !0);
      },
      o(m) {
        E(i.$$.fragment, m), E(o.$$.fragment, m), E(f.$$.fragment, m), E(b.$$.fragment, m), E(_.$$.fragment, m), L = !1;
      },
      d(m) {
        m && O(e), Y(i), Y(o), Y(f), Y(b), Y(_);
      }
    }
  );
}
function Rs(n, e, t) {
  let l, i, r, { processes: s = [] } = e, { loading: a = !1 } = e, { errorMsg: o = "" } = e;
  const u = nn(), c = (p) => u("start", p), f = (p) => u("view", p);
  let d = "";
  const g = [
    { key: "displayName", header: "Name" },
    {
      key: "description",
      header: "Description"
    }
  ], b = () => {
    console.log("Add new process clicked");
  }, y = () => console.log("Continue Process");
  function _(p) {
    d = p, t(2, d);
  }
  const L = (p) => f(p), C = (p) => c(p);
  return n.$$set = (p) => {
    "processes" in p && t(8, s = p.processes), "loading" in p && t(0, a = p.loading), "errorMsg" in p && t(1, o = p.errorMsg);
  }, n.$$.update = () => {
    n.$$.dirty & /*searchQuery*/
    4 && t(10, l = d.trim().toLowerCase()), n.$$.dirty & /*processes*/
    256 && t(9, i = (s ?? []).map((p) => Object.assign(Object.assign({}, p), { displayName: p.name || p.id }))), n.$$.dirty & /*searchLower, rows*/
    1536 && t(3, r = l ? i.filter((p) => {
      var m;
      return ((m = p.displayName) !== null && m !== void 0 ? m : "").toLowerCase().includes(l);
    }) : i);
  }, [
    a,
    o,
    d,
    r,
    c,
    f,
    g,
    b,
    s,
    i,
    l,
    y,
    _,
    L,
    C
  ];
}
class Es extends fe {
  constructor(e) {
    super(), ce(this, e, Rs, Ss, se, { processes: 8, loading: 0, errorMsg: 1 });
  }
}
function fl(n, e, t) {
  const l = n.slice();
  return l[5] = e[t], l[7] = t, l;
}
function Hs(n) {
  let e, t, l, i, r, s, a = (
    /*proc*/
    n[0].id + ""
  ), o, u, c, f, d, g = (
    /*proc*/
    n[0].name + ""
  ), b, y, _, L, C, p = (
    /*proc*/
    n[0].version + ""
  ), m, D, S, h, k, q = (
    /*proc*/
    n[0].description + ""
  ), M, A, P, R, j, de, _e, Ce, G, v, N;
  function me(te, J) {
    return !/*proc*/
    te[0].plugins || /*proc*/
    te[0].plugins.length === 0 ? Ts : Ms;
  }
  let be = me(n), Ie = be(n);
  return {
    c() {
      e = F("h1"), e.textContent = "Process Details", t = W(), l = F("div"), i = F("div"), r = F("span"), r.textContent = "ID", s = F("span"), o = ye(a), u = W(), c = F("div"), f = F("span"), f.textContent = "Name", d = F("span"), b = ye(g), y = W(), _ = F("div"), L = F("span"), L.textContent = "Version", C = F("span"), m = ye(p), D = W(), S = F("div"), h = F("span"), h.textContent = "Description", k = F("span"), M = ye(q), A = W(), P = F("h2"), P.textContent = "Plugins", R = W(), Ie.c(), j = W(), de = F("div"), _e = F("button"), _e.textContent = "Back", Ce = W(), G = F("button"), G.textContent = "START PROCESS", T(e, "class", "title svelte-1qn566t"), T(r, "class", "label svelte-1qn566t"), T(s, "class", "value svelte-1qn566t"), T(i, "class", "row svelte-1qn566t"), T(f, "class", "label svelte-1qn566t"), T(d, "class", "value svelte-1qn566t"), T(c, "class", "row svelte-1qn566t"), T(L, "class", "label svelte-1qn566t"), T(C, "class", "value svelte-1qn566t"), T(_, "class", "row svelte-1qn566t"), T(h, "class", "label svelte-1qn566t"), T(k, "class", "value svelte-1qn566t"), T(S, "class", "row svelte-1qn566t"), T(l, "class", "card svelte-1qn566t"), T(P, "class", "subtitle svelte-1qn566t"), T(_e, "class", "btn svelte-1qn566t"), T(G, "class", "btn primary svelte-1qn566t"), T(de, "class", "actions svelte-1qn566t");
    },
    m(te, J) {
      U(te, e, J), U(te, t, J), U(te, l, J), B(l, i), B(i, r), B(i, s), B(s, o), B(l, u), B(l, c), B(c, f), B(c, d), B(d, b), B(l, y), B(l, _), B(_, L), B(_, C), B(C, m), B(l, D), B(l, S), B(S, h), B(S, k), B(k, M), U(te, A, J), U(te, P, J), U(te, R, J), Ie.m(te, J), U(te, j, J), U(te, de, J), B(de, _e), B(de, Ce), B(de, G), v || (N = [
        z(
          _e,
          "click",
          /*click_handler_1*/
          n[3]
        ),
        z(
          G,
          "click",
          /*click_handler_2*/
          n[4]
        )
      ], v = !0);
    },
    p(te, J) {
      J & /*proc*/
      1 && a !== (a = /*proc*/
      te[0].id + "") && He(o, a), J & /*proc*/
      1 && g !== (g = /*proc*/
      te[0].name + "") && He(b, g), J & /*proc*/
      1 && p !== (p = /*proc*/
      te[0].version + "") && He(m, p), J & /*proc*/
      1 && q !== (q = /*proc*/
      te[0].description + "") && He(M, q), be === (be = me(te)) && Ie ? Ie.p(te, J) : (Ie.d(1), Ie = be(te), Ie && (Ie.c(), Ie.m(j.parentNode, j)));
    },
    d(te) {
      te && (O(e), O(t), O(l), O(A), O(P), O(R), O(j), O(de)), Ie.d(te), v = !1, he(N);
    }
  };
}
function Ds(n) {
  let e, t, l, i, r, s;
  return {
    c() {
      e = F("div"), t = F("p"), t.textContent = "No process selected.", l = W(), i = F("button"), i.textContent = "Back to list", T(t, "class", "svelte-1qn566t"), T(i, "class", "btn svelte-1qn566t"), T(e, "class", "empty-state svelte-1qn566t");
    },
    m(a, o) {
      U(a, e, o), B(e, t), B(e, l), B(e, i), r || (s = z(
        i,
        "click",
        /*click_handler*/
        n[2]
      ), r = !0);
    },
    p: $,
    d(a) {
      a && O(e), r = !1, s();
    }
  };
}
function Ms(n) {
  let e, t = [], l = /* @__PURE__ */ new Map(), i = je(
    /*proc*/
    n[0].plugins
  );
  const r = (s) => (
    /*pl*/
    s[5].id
  );
  for (let s = 0; s < i.length; s += 1) {
    let a = fl(n, i, s), o = r(a);
    l.set(o, t[s] = ml(o, a));
  }
  return {
    c() {
      e = F("ol");
      for (let s = 0; s < t.length; s += 1)
        t[s].c();
      T(e, "class", "plugins-list svelte-1qn566t");
    },
    m(s, a) {
      U(s, e, a);
      for (let o = 0; o < t.length; o += 1)
        t[o] && t[o].m(e, null);
    },
    p(s, a) {
      a & /*proc*/
      1 && (i = je(
        /*proc*/
        s[0].plugins
      ), t = wl(t, a, r, 1, s, i, l, e, Si, ml, null, fl));
    },
    d(s) {
      s && O(e);
      for (let a = 0; a < t.length; a += 1)
        t[a].d();
    }
  };
}
function Ts(n) {
  let e;
  return {
    c() {
      e = F("p"), e.textContent = "No plugins defined for this process.", T(e, "class", "muted svelte-1qn566t");
    },
    m(t, l) {
      U(t, e, l);
    },
    p: $,
    d(t) {
      t && O(e);
    }
  };
}
function dl(n) {
  let e, t = (
    /*pl*/
    n[5].type + ""
  ), l;
  return {
    c() {
      e = F("p"), l = ye(t), T(e, "class", "plugin-type svelte-1qn566t");
    },
    m(i, r) {
      U(i, e, r), B(e, l);
    },
    p(i, r) {
      r & /*proc*/
      1 && t !== (t = /*pl*/
      i[5].type + "") && He(l, t);
    },
    d(i) {
      i && O(e);
    }
  };
}
function hl(n) {
  let e, t = (
    /*pl*/
    n[5].description + ""
  ), l;
  return {
    c() {
      e = F("p"), l = ye(t), T(e, "class", "description svelte-1qn566t");
    },
    m(i, r) {
      U(i, e, r), B(e, l);
    },
    p(i, r) {
      r & /*proc*/
      1 && t !== (t = /*pl*/
      i[5].description + "") && He(l, t);
    },
    d(i) {
      i && O(e);
    }
  };
}
function ml(n, e) {
  let t, l, i, r = (
    /*i*/
    e[7] + 1 + ""
  ), s, a, o, u, c, f = (
    /*pl*/
    (e[5].name || /*pl*/
    e[5].id) + ""
  ), d, g, b, y, _ = (
    /*pl*/
    e[5].type && dl(e)
  ), L = (
    /*pl*/
    e[5].description && hl(e)
  );
  return {
    key: n,
    first: null,
    c() {
      t = F("li"), l = F("div"), i = F("span"), s = ye(r), a = ye("."), o = W(), u = F("div"), c = F("p"), d = ye(f), g = W(), _ && _.c(), b = W(), L && L.c(), y = W(), T(i, "class", "order svelte-1qn566t"), T(c, "class", "plugin-name svelte-1qn566t"), T(u, "class", "svelte-1qn566t"), T(l, "class", "plugin-header svelte-1qn566t"), T(t, "class", "plugin-card svelte-1qn566t"), this.first = t;
    },
    m(C, p) {
      U(C, t, p), B(t, l), B(l, i), B(i, s), B(i, a), B(l, o), B(l, u), B(u, c), B(c, d), B(u, g), _ && _.m(u, null), B(t, b), L && L.m(t, null), B(t, y);
    },
    p(C, p) {
      e = C, p & /*proc*/
      1 && r !== (r = /*i*/
      e[7] + 1 + "") && He(s, r), p & /*proc*/
      1 && f !== (f = /*pl*/
      (e[5].name || /*pl*/
      e[5].id) + "") && He(d, f), /*pl*/
      e[5].type ? _ ? _.p(e, p) : (_ = dl(e), _.c(), _.m(u, null)) : _ && (_.d(1), _ = null), /*pl*/
      e[5].description ? L ? L.p(e, p) : (L = hl(e), L.c(), L.m(t, y)) : L && (L.d(1), L = null);
    },
    d(C) {
      C && O(t), _ && _.d(), L && L.d();
    }
  };
}
function Os(n) {
  let e;
  function t(r, s) {
    return (
      /*proc*/
      r[0] ? Hs : Ds
    );
  }
  let l = t(n), i = l(n);
  return {
    c() {
      e = F("div"), i.c(), T(e, "class", "container svelte-1qn566t");
    },
    m(r, s) {
      U(r, e, s), i.m(e, null);
    },
    p(r, [s]) {
      l === (l = t(r)) && i ? i.p(r, s) : (i.d(1), i = l(r), i && (i.c(), i.m(e, null)));
    },
    i: $,
    o: $,
    d(r) {
      r && O(e), i.d();
    }
  };
}
function Us(n, e, t) {
  let { proc: l = null } = e;
  const i = nn(), r = () => i("back"), s = () => i("back"), a = () => i("start", l);
  return n.$$set = (o) => {
    "proc" in o && t(0, l = o.proc);
  }, [l, i, r, s, a];
}
class Bs extends fe {
  constructor(e) {
    super(), ce(this, e, Us, Os, se, { proc: 0 });
  }
}
function gl(n, e, t) {
  const l = n.slice();
  return l[18] = e[t], l[20] = t, l;
}
function Ps(n) {
  let e = (
    /*i*/
    n[20] + 1 + ""
  ), t;
  return {
    c() {
      t = ye(e);
    },
    m(l, i) {
      U(l, t, i);
    },
    p: $,
    i: $,
    o: $,
    d(l) {
      l && O(t);
    }
  };
}
function Fs(n) {
  let e, t, l, i;
  const r = [Gs, Ns, qs], s = [];
  function a(o, u) {
    return (
      /*pluginStatus*/
      o[3][
        /*plugin*/
        o[18].id
      ] === "check" ? 0 : (
        /*pluginStatus*/
        o[3][
          /*plugin*/
          o[18].id
        ] === "error" ? 1 : 2
      )
    );
  }
  return e = a(n), t = s[e] = r[e](n), {
    c() {
      t.c(), l = Se();
    },
    m(o, u) {
      s[e].m(o, u), U(o, l, u), i = !0;
    },
    p(o, u) {
      let c = e;
      e = a(o), e !== c && (ge(), E(s[c], 1, 1, () => {
        s[c] = null;
      }), pe(), t = s[e], t || (t = s[e] = r[e](o), t.c()), w(t, 1), t.m(l.parentNode, l));
    },
    i(o) {
      i || (w(t), i = !0);
    },
    o(o) {
      E(t), i = !1;
    },
    d(o) {
      o && O(l), s[e].d(o);
    }
  };
}
function qs(n) {
  let e, t;
  return e = new Sa({}), {
    c() {
      K(e.$$.fragment);
    },
    m(l, i) {
      X(e, l, i), t = !0;
    },
    i(l) {
      t || (w(e.$$.fragment, l), t = !0);
    },
    o(l) {
      E(e.$$.fragment, l), t = !1;
    },
    d(l) {
      Y(e, l);
    }
  };
}
function Ns(n) {
  let e, t;
  return e = new wa({}), {
    c() {
      K(e.$$.fragment);
    },
    m(l, i) {
      X(e, l, i), t = !0;
    },
    i(l) {
      t || (w(e.$$.fragment, l), t = !0);
    },
    o(l) {
      E(e.$$.fragment, l), t = !1;
    },
    d(l) {
      Y(e, l);
    }
  };
}
function Gs(n) {
  let e, t;
  return e = new ya({}), {
    c() {
      K(e.$$.fragment);
    },
    m(l, i) {
      X(e, l, i), t = !0;
    },
    i(l) {
      t || (w(e.$$.fragment, l), t = !0);
    },
    o(l) {
      E(e.$$.fragment, l), t = !1;
    },
    d(l) {
      Y(e, l);
    }
  };
}
function Zs(n) {
  let e, t, l, i, r, s, a;
  const o = [Fs, Ps], u = [];
  function c(d, g) {
    return g & /*visited, plugins, tagName*/
    52 && (t = null), t == null && (t = !!/*visited*/
    (d[5].includes(
      /*plugin*/
      d[18].id
    ) && /*plugin*/
    d[18].id !== /*tagName*/
    d[4])), t ? 0 : 1;
  }
  l = c(n, -1), i = u[l] = o[l](n);
  function f() {
    return (
      /*click_handler_1*/
      n[13](
        /*plugin*/
        n[18]
      )
    );
  }
  return {
    c() {
      e = F("button"), i.c(), T(e, "class", "svelte-1xq5awa"), rt(e, "not-visited", !/*visited*/
      n[5].includes(
        /*plugin*/
        n[18].id
      )), rt(
        e,
        "current",
        /*plugin*/
        n[18].id === /*tagName*/
        n[4]
      ), rt(
        e,
        "visited",
        /*visited*/
        n[5].includes(
          /*plugin*/
          n[18].id
        ) && /*plugin*/
        n[18].id !== /*tagName*/
        n[4]
      );
    },
    m(d, g) {
      U(d, e, g), u[l].m(e, null), r = !0, s || (a = z(e, "click", f), s = !0);
    },
    p(d, g) {
      n = d;
      let b = l;
      l = c(n, g), l === b ? u[l].p(n, g) : (ge(), E(u[b], 1, 1, () => {
        u[b] = null;
      }), pe(), i = u[l], i ? i.p(n, g) : (i = u[l] = o[l](n), i.c()), w(i, 1), i.m(e, null)), (!r || g & /*visited, plugins*/
      36) && rt(e, "not-visited", !/*visited*/
      n[5].includes(
        /*plugin*/
        n[18].id
      )), (!r || g & /*plugins, tagName*/
      20) && rt(
        e,
        "current",
        /*plugin*/
        n[18].id === /*tagName*/
        n[4]
      ), (!r || g & /*visited, plugins, tagName*/
      52) && rt(
        e,
        "visited",
        /*visited*/
        n[5].includes(
          /*plugin*/
          n[18].id
        ) && /*plugin*/
        n[18].id !== /*tagName*/
        n[4]
      );
    },
    i(d) {
      r || (w(i), r = !0);
    },
    o(d) {
      E(i), r = !1;
    },
    d(d) {
      d && O(e), u[l].d(), s = !1, a();
    }
  };
}
function pl(n) {
  let e;
  return {
    c() {
      e = F("div"), T(e, "class", "plugin-step-line svelte-1xq5awa");
    },
    m(t, l) {
      U(t, e, l);
    },
    d(t) {
      t && O(e);
    }
  };
}
function _l(n) {
  let e, t, l, i, r = (
    /*plugin*/
    n[18].name + ""
  ), s, a, o, u;
  t = new Fa({
    props: {
      text: (
        /*tooltipText*/
        n[6][
          /*plugin*/
          n[18].id
        ]
      ),
      position: "bottom",
      $$slots: { default: [Zs] },
      $$scope: { ctx: n }
    }
  });
  let c = (
    /*i*/
    n[20] < /*plugins*/
    n[2].length - 1 && pl()
  );
  return {
    c() {
      e = F("div"), K(t.$$.fragment), l = W(), i = F("p"), s = ye(r), a = W(), c && c.c(), o = Se(), T(i, "class", "svelte-1xq5awa"), T(e, "class", "plugin-step svelte-1xq5awa");
    },
    m(f, d) {
      U(f, e, d), X(t, e, null), B(e, l), B(e, i), B(i, s), U(f, a, d), c && c.m(f, d), U(f, o, d), u = !0;
    },
    p(f, d) {
      const g = {};
      d & /*tooltipText, plugins*/
      68 && (g.text = /*tooltipText*/
      f[6][
        /*plugin*/
        f[18].id
      ]), d & /*$$scope, visited, plugins, tagName, pluginStatus*/
      2097212 && (g.$$scope = { dirty: d, ctx: f }), t.$set(g), (!u || d & /*plugins*/
      4) && r !== (r = /*plugin*/
      f[18].name + "") && He(s, r), /*i*/
      f[20] < /*plugins*/
      f[2].length - 1 ? c || (c = pl(), c.c(), c.m(o.parentNode, o)) : c && (c.d(1), c = null);
    },
    i(f) {
      u || (w(t.$$.fragment, f), u = !0);
    },
    o(f) {
      E(t.$$.fragment, f), u = !1;
    },
    d(f) {
      f && (O(e), O(a), O(o)), Y(t), c && c.d(f);
    }
  };
}
function bl(n) {
  let e = (
    /*tagName*/
    n[4]
  ), t, l = (
    /*tagName*/
    n[4] && Yt(n)
  );
  return {
    c() {
      l && l.c(), t = Se();
    },
    m(i, r) {
      l && l.m(i, r), U(i, t, r);
    },
    p(i, r) {
      /*tagName*/
      i[4] ? e ? se(
        e,
        /*tagName*/
        i[4]
      ) ? (l.d(1), l = Yt(i), e = /*tagName*/
      i[4], l.c(), l.m(t.parentNode, t)) : l.p(i, r) : (l = Yt(i), e = /*tagName*/
      i[4], l.c(), l.m(t.parentNode, t)) : e && (l.d(1), l = null, e = /*tagName*/
      i[4]);
    },
    d(i) {
      i && O(t), l && l.d(i);
    }
  };
}
function Yt(n) {
  let e, t, l, i;
  return {
    c() {
      e = F(
        /*tagName*/
        n[4]
      ), Ct(
        /*tagName*/
        n[4]
      )(e, { class: "svelte-1xq5awa" });
    },
    m(r, s) {
      U(r, e, s), l || (i = Q(t = Vs.call(null, e, {
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
      t && ve(t.update) && s & /*doc, editCount*/
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
      r && O(e), l = !1, i();
    }
  };
}
function js(n) {
  let e, t, l, i, r, s, a, o, u, c, f, d, g, b, y, _, L, C = je(
    /*plugins*/
    n[2]
  ), p = [];
  for (let S = 0; S < C.length; S += 1)
    p[S] = _l(gl(n, C, S));
  const m = (S) => E(p[S], 1, 1, () => {
    p[S] = null;
  });
  let D = (
    /*tagName*/
    n[4] && bl(n)
  );
  return {
    c() {
      e = F("div"), t = F("div"), l = F("button"), l.textContent = "exit", i = W(), r = F("p"), r.textContent = "Plugin Flow", s = W(), a = F("div");
      for (let S = 0; S < p.length; S += 1)
        p[S].c();
      o = W(), u = F("div"), c = F("button"), c.textContent = "Back", f = W(), d = F("button"), d.textContent = "Next", g = W(), D && D.c(), b = Se(), T(l, "class", "back-button svelte-1xq5awa"), T(r, "class", "plugin-flow-title svelte-1xq5awa"), Dt(t, "display", "flex"), Dt(t, "align-items", "center"), Dt(t, "gap", "0.5rem"), T(t, "class", "svelte-1xq5awa"), T(a, "class", "plugin-steps svelte-1xq5awa"), T(c, "class", "back-button svelte-1xq5awa"), T(d, "class", "next-button svelte-1xq5awa"), T(u, "class", "stepper-navigation svelte-1xq5awa"), T(e, "class", "stepper svelte-1xq5awa");
    },
    m(S, h) {
      U(S, e, h), B(e, t), B(t, l), B(t, i), B(t, r), B(e, s), B(e, a);
      for (let k = 0; k < p.length; k += 1)
        p[k] && p[k].m(a, null);
      B(e, o), B(e, u), B(u, c), B(u, f), B(u, d), U(S, g, h), D && D.m(S, h), U(S, b, h), y = !0, _ || (L = [
        z(
          l,
          "click",
          /*click_handler*/
          n[12]
        ),
        z(
          c,
          "click",
          /*previousPlugin*/
          n[10]
        ),
        z(
          d,
          "click",
          /*nextPlugin*/
          n[9]
        )
      ], _ = !0);
    },
    p(S, [h]) {
      if (h & /*plugins, tooltipText, visited, tagName, loadPlugin, pluginStatus*/
      380) {
        C = je(
          /*plugins*/
          S[2]
        );
        let k;
        for (k = 0; k < C.length; k += 1) {
          const q = gl(S, C, k);
          p[k] ? (p[k].p(q, h), w(p[k], 1)) : (p[k] = _l(q), p[k].c(), w(p[k], 1), p[k].m(a, null));
        }
        for (ge(), k = C.length; k < p.length; k += 1)
          m(k);
        pe();
      }
      /*tagName*/
      S[4] ? D ? D.p(S, h) : (D = bl(S), D.c(), D.m(b.parentNode, b)) : D && (D.d(1), D = null);
    },
    i(S) {
      if (!y) {
        for (let h = 0; h < C.length; h += 1)
          w(p[h]);
        y = !0;
      }
    },
    o(S) {
      p = p.filter(Boolean);
      for (let h = 0; h < p.length; h += 1)
        E(p[h]);
      y = !1;
    },
    d(S) {
      S && (O(e), O(g), O(b)), tn(p, S), D && D.d(S), _ = !1, he(L);
    }
  };
}
function Ws() {
  var n, e;
  const t = document.querySelector("open-scd");
  return (e = (n = t == null ? void 0 : t.shadowRoot) === null || n === void 0 ? void 0 : n.querySelector("compas-layout")) !== null && e !== void 0 ? e : null;
}
function Vs(n, e) {
  return Object.assign(n, e), { update: (t) => Object.assign(n, t) };
}
function zs(n, e, t) {
  let l, { doc: i } = e, { editCount: r = -1 } = e, { host: s } = e, { plugins: a = [] } = e, o = null, u = [];
  const c = ["check", "warning", "error"];
  let f = {};
  nn();
  function d(p) {
    var m;
    (m = Ws()) === null || m === void 0 || m.dispatchEvent(new CustomEvent(
      "toggle-editor-tabs",
      {
        detail: { visible: p },
        bubbles: !0,
        composed: !0
      }
    ));
  }
  function g(p) {
    return ln(this, void 0, void 0, function* () {
      const m = yield import(p.src);
      if (customElements.get(p.id) || customElements.define(p.id, m.default), t(4, o = p.id), !u.includes(p.id)) {
        t(5, u = [...u, p.id]);
        const D = a.findIndex((S) => S.id === p.id);
        t(3, f = Object.assign(Object.assign({}, f), {
          [p.id]: c[D % c.length]
        }));
      }
    });
  }
  function b() {
    _(1);
  }
  function y() {
    _(-1);
  }
  function _(p) {
    const m = a.findIndex((D) => D.id === o);
    g(a[(m + p + a.length) % a.length]);
  }
  Ne(() => {
    a.length && g(a[0]), d(!1);
  });
  const L = () => d(!0), C = (p) => g(p);
  return n.$$set = (p) => {
    "doc" in p && t(0, i = p.doc), "editCount" in p && t(1, r = p.editCount), "host" in p && t(11, s = p.host), "plugins" in p && t(2, a = p.plugins);
  }, n.$$.update = () => {
    n.$$.dirty & /*plugins, pluginStatus*/
    12 && t(6, l = a.reduce(
      (p, m) => {
        const D = f[m.id];
        return p[m.id] = D === "error" ? `Resolve errors in ${m.name}` : D === "warning" ? `Check warnings for ${m.name}` : `Load the ${m.name} editor`, p;
      },
      {}
    ));
  }, [
    i,
    r,
    a,
    f,
    o,
    u,
    l,
    d,
    g,
    b,
    y,
    s,
    L,
    C
  ];
}
class Xs extends fe {
  constructor(e) {
    super(), ce(this, e, zs, js, se, {
      doc: 0,
      editCount: 1,
      host: 11,
      plugins: 2
    });
  }
}
function Ys(n) {
  let e, t;
  return e = new Es({
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
    /*onView*/
    n[8]
  ), e.$on(
    "start",
    /*onStart*/
    n[9]
  ), {
    c() {
      K(e.$$.fragment);
    },
    m(l, i) {
      X(e, l, i), t = !0;
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
      t || (w(e.$$.fragment, l), t = !0);
    },
    o(l) {
      E(e.$$.fragment, l), t = !1;
    },
    d(l) {
      Y(e, l);
    }
  };
}
function Ks(n) {
  let e, t;
  return e = new Bs({ props: { proc: (
    /*selected*/
    n[4]
  ) } }), e.$on(
    "back",
    /*goBack*/
    n[10]
  ), e.$on(
    "start",
    /*onStart*/
    n[9]
  ), {
    c() {
      K(e.$$.fragment);
    },
    m(l, i) {
      X(e, l, i), t = !0;
    },
    p(l, i) {
      const r = {};
      i & /*selected*/
      16 && (r.proc = /*selected*/
      l[4]), e.$set(r);
    },
    i(l) {
      t || (w(e.$$.fragment, l), t = !0);
    },
    o(l) {
      E(e.$$.fragment, l), t = !1;
    },
    d(l) {
      Y(e, l);
    }
  };
}
function Js(n) {
  let e, t;
  return e = new Xs({
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
  }), {
    c() {
      K(e.$$.fragment);
    },
    m(l, i) {
      X(e, l, i), t = !0;
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
      t || (w(e.$$.fragment, l), t = !0);
    },
    o(l) {
      E(e.$$.fragment, l), t = !1;
    },
    d(l) {
      Y(e, l);
    }
  };
}
function Qs(n) {
  let e, t, l, i;
  const r = [Js, Ks, Ys], s = [];
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
      t.c(), l = Se();
    },
    m(o, u) {
      s[e].m(o, u), U(o, l, u), i = !0;
    },
    p(o, [u]) {
      let c = e;
      e = a(o), e === c ? s[e].p(o, u) : (ge(), E(s[c], 1, 1, () => {
        s[c] = null;
      }), pe(), t = s[e], t ? t.p(o, u) : (t = s[e] = r[e](o), t.c()), w(t, 1), t.m(l.parentNode, l));
    },
    i(o) {
      i || (w(t), i = !0);
    },
    o(o) {
      E(t), i = !1;
    },
    d(o) {
      o && O(l), s[e].d(o);
    }
  };
}
function xs(n, e, t) {
  let { doc: l } = e, { editCount: i = -1 } = e, { host: r } = e, s = [], a = null, o = null, u = !0, c = "";
  const f = new URL("data:application/xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHByb2Nlc3Nlcz4KICA8cHJvY2Vzcz4KICAgIDxpZD5zdGFuZGFyZC1wcm9jZXNzLTE8L2lkPgogICAgPHZlcnNpb24+MC4wLjE8L3ZlcnNpb24+CiAgICA8bmFtZT5TdGFuZGFyZCBQcm9jZXNzIDE8L25hbWU+CiAgICA8ZGVzY3JpcHRpb24+CiAgICAgIFRoaXMgaXMgYSBzdGFuZGFyZGl6ZWQgcHJvY2VzcyB1c2VkIGZvciB0ZXN0aW5nIHB1cnBvc2VzIG9ubHkKICAgIDwvZGVzY3JpcHRpb24+CgogICAgPHBsdWdpbnMtc2VxdWVuY2U+CiAgICAgIDxwbHVnaW4+CiAgICAgICAgPGlkPmVuZ2luZWVyaW5nLXdpemFyZDwvaWQ+CiAgICAgICAgPG5hbWU+U3Vic3RhdGlvbjwvbmFtZT4KICAgICAgICA8c3JjPgogICAgICAgICAgaHR0cHM6Ly9waGlsaXBwaWxpZXZza2liZWFyaW5ncG9pbnRjb20uZ2l0aHViLmlvL29zY2Qtb2ZmaWNpYWwtcGx1Z2lucy10ZXN0L3BsdWdpbnMvZWRpdG9ycy9zdWJzdGF0aW9uLmpzCiAgICAgICAgPC9zcmM+CiAgICAgIDwvcGx1Z2luPgoKICAgICAgPHBsdWdpbj4KICAgICAgICA8aWQ+c3Vic3RhdGlvbi1leHBsb3JlcjwvaWQ+CiAgICAgICAgPG5hbWU+SUVEPC9uYW1lPgogICAgICAgIDxzcmM+CiAgICAgICAgICBodHRwczovL3BoaWxpcHBpbGlldnNraWJlYXJpbmdwb2ludGNvbS5naXRodWIuaW8vb3NjZC1vZmZpY2lhbC1wbHVnaW5zLXRlc3QvcGx1Z2lucy9lZGl0b3JzL2llZC5qcwogICAgICAgIDwvc3JjPgogICAgICA8L3BsdWdpbj4KCiAgICAgIDxwbHVnaW4+CiAgICAgICAgPGlkPmNvbW11bmljYXRpb24tZWRpdG9yPC9pZD4KICAgICAgICA8bmFtZT5Db21tdW5pY2F0aW9uIEV4cGxvcmVyPC9uYW1lPgogICAgICAgIDxzcmM+CiAgICAgICAgICBodHRwczovL3BoaWxpcHBpbGlldnNraWJlYXJpbmdwb2ludGNvbS5naXRodWIuaW8vb3NjZC1vZmZpY2lhbC1wbHVnaW5zLXRlc3QvcGx1Z2lucy9lZGl0b3JzL2NvbW11bmljYXRpb24uanMKICAgICAgICA8L3NyYz4KICAgICAgPC9wbHVnaW4+CiAgICA8L3BsdWdpbnMtc2VxdWVuY2U+CiAgPC9wcm9jZXNzPgoKICA8cHJvY2Vzcz4KICAgIDxpZD5zdGFuZGFyZC1wcm9jZXNzLTI8L2lkPgogICAgPHZlcnNpb24+MC4wLjE8L3ZlcnNpb24+CiAgICA8bmFtZT5TdGFuZGFyZCBQcm9jZXNzIDI8L25hbWU+CiAgICA8ZGVzY3JpcHRpb24+CiAgICAgIFRoaXMgaXMgYSBzdGFuZGFyZGl6ZWQgcHJvY2VzcyB1c2VkIGZvciB0ZXN0aW5nIHB1cnBvc2VzIG9ubHkKICAgIDwvZGVzY3JpcHRpb24+CgogICAgPHBsdWdpbnMtc2VxdWVuY2U+CiAgICAgIDxwbHVnaW4+CiAgICAgICAgPGlkPmVuZ2luZWVyaW5nLXdpemFyZDwvaWQ+CiAgICAgICAgPG5hbWU+U3Vic3RhdGlvbjwvbmFtZT4KICAgICAgICA8c3JjPgogICAgICAgICAgaHR0cHM6Ly9waGlsaXBwaWxpZXZza2liZWFyaW5ncG9pbnRjb20uZ2l0aHViLmlvL29zY2Qtb2ZmaWNpYWwtcGx1Z2lucy10ZXN0L3BsdWdpbnMvZWRpdG9ycy9zdWJzdGF0aW9uLmpzCiAgICAgICAgPC9zcmM+CiAgICAgIDwvcGx1Z2luPgoKICAgICAgPHBsdWdpbj4KICAgICAgICA8aWQ+eHl6LWVkaXRvcjwvaWQ+CiAgICAgICAgPG5hbWU+WFlaPC9uYW1lPgogICAgICAgIDxzcmM+CiAgICAgICAgICBodHRwczovL3BoaWxpcHBpbGlldnNraWJlYXJpbmdwb2ludGNvbS5naXRodWIuaW8vb3NjZC1vZmZpY2lhbC1wbHVnaW5zLXRlc3QvcGx1Z2lucy9lZGl0b3JzL3h5ei5qcwogICAgICAgIDwvc3JjPgogICAgICA8L3BsdWdpbj4KCiAgICAgIDxwbHVnaW4+CiAgICAgICAgPGlkPm5ldHdvcmstZXhwbG9yZXI8L2lkPgogICAgICAgIDxuYW1lPk5ldHdvcmsgRXhwbG9yZXI8L25hbWU+CiAgICAgICAgPHNyYz4KICAgICAgICAgIGh0dHBzOi8vcGhpbGlwcGlsaWV2c2tpYmVhcmluZ3BvaW50Y29tLmdpdGh1Yi5pby9vc2NkLW9mZmljaWFsLXBsdWdpbnMtdGVzdC9wbHVnaW5zL2VkaXRvcnMvbmV0d29yay5qcwogICAgICAgIDwvc3JjPgogICAgICA8L3BsdWdpbj4KICAgIDwvcGx1Z2lucy1zZXF1ZW5jZT4KICA8L3Byb2Nlc3M+CgogIDxwcm9jZXNzPgogICAgPGlkPnN0YW5kYXJkLXByb2Nlc3MtMzwvaWQ+CiAgICA8dmVyc2lvbj4wLjAuMTwvdmVyc2lvbj4KICAgIDxuYW1lPlN0YW5kYXJkIFByb2Nlc3MgMzwvbmFtZT4KICAgIDxkZXNjcmlwdGlvbj4KICAgICAgVGhpcyBpcyBhIHN0YW5kYXJkaXplZCBwcm9jZXNzIHVzZWQgZm9yIHRlc3RpbmcgcHVycG9zZXMgb25seQogICAgPC9kZXNjcmlwdGlvbj4KCiAgICA8cGx1Z2lucy1zZXF1ZW5jZT4KICAgICAgPHBsdWdpbj4KICAgICAgICA8aWQ+ZW5naW5lZXJpbmctd2l6YXJkPC9pZD4KICAgICAgICA8bmFtZT5TdWJzdGF0aW9uPC9uYW1lPgogICAgICAgIDxzcmM+CiAgICAgICAgICBodHRwczovL3BoaWxpcHBpbGlldnNraWJlYXJpbmdwb2ludGNvbS5naXRodWIuaW8vb3NjZC1vZmZpY2lhbC1wbHVnaW5zLXRlc3QvcGx1Z2lucy9lZGl0b3JzL3N1YnN0YXRpb24uanMKICAgICAgICA8L3NyYz4KICAgICAgPC9wbHVnaW4+CgogICAgICA8cGx1Z2luPgogICAgICAgIDxpZD5zaXRpcGUtZWRpdG9yPC9pZD4KICAgICAgICA8bmFtZT5TaXRpcGU8L25hbWU+CiAgICAgICAgPHNyYz4KICAgICAgICAgIGh0dHBzOi8vcGhpbGlwcGlsaWV2c2tpYmVhcmluZ3BvaW50Y29tLmdpdGh1Yi5pby9vc2NkLW9mZmljaWFsLXBsdWdpbnMtdGVzdC9wbHVnaW5zL2VkaXRvcnMvc2l0aXBlLmpzCiAgICAgICAgPC9zcmM+CiAgICAgIDwvcGx1Z2luPgoKICAgICAgPHBsdWdpbj4KICAgICAgICA8aWQ+c3Vic3RhdGlvbi1leHBsb3JlcjwvaWQ+CiAgICAgICAgPG5hbWU+SUVEPC9uYW1lPgogICAgICAgIDxzcmM+CiAgICAgICAgICBodHRwczovL3BoaWxpcHBpbGlldnNraWJlYXJpbmdwb2ludGNvbS5naXRodWIuaW8vb3NjZC1vZmZpY2lhbC1wbHVnaW5zLXRlc3QvcGx1Z2lucy9lZGl0b3JzL2llZC5qcwogICAgICAgIDwvc3JjPgogICAgICA8L3BsdWdpbj4KICAgIDwvcGx1Z2lucy1zZXF1ZW5jZT4KICA8L3Byb2Nlc3M+CjwvcHJvY2Vzc2VzPgo=", import.meta.url).href, d = (p) => {
    var m, D;
    return (D = (m = p == null ? void 0 : p.textContent) === null || m === void 0 ? void 0 : m.trim()) !== null && D !== void 0 ? D : "";
  }, g = (p) => Array.from(p.getElementsByTagName("process")).map((m) => {
    const D = Array.from(m.querySelectorAll("plugins-sequence > plugin")).map((S) => ({
      id: d(S.querySelector("id")),
      name: d(S.querySelector("name")),
      src: d(S.querySelector("src"))
    }));
    return {
      id: d(m.querySelector(":scope > id")),
      version: d(m.querySelector(":scope > version")),
      name: d(m.querySelector(":scope > name")),
      description: d(m.querySelector(":scope > description")),
      plugins: D
    };
  });
  function b() {
    return ln(this, void 0, void 0, function* () {
      t(6, u = !0), t(7, c = "");
      try {
        const p = yield fetch(f, { cache: "no-cache" });
        if (!p.ok)
          throw new Error(`HTTP ${p.status}`);
        const m = new DOMParser().parseFromString(yield p.text(), "application/xml");
        if (m.querySelector("parsererror"))
          throw new Error("Invalid XML file format.");
        t(3, s = g(m));
      } catch (p) {
        t(3, s = []), t(7, c = p.message || "Failed to load processes.");
      } finally {
        t(6, u = !1);
      }
    });
  }
  Ne(b);
  function y(p) {
    t(5, o = p), t(4, a = null);
  }
  function _(p) {
    t(4, a = p.detail);
  }
  function L(p) {
    y(p.detail);
  }
  function C() {
    t(4, a = null);
  }
  return n.$$set = (p) => {
    "doc" in p && t(0, l = p.doc), "editCount" in p && t(1, i = p.editCount), "host" in p && t(2, r = p.host);
  }, [
    l,
    i,
    r,
    s,
    a,
    o,
    u,
    c,
    _,
    L,
    C
  ];
}
class $s extends fe {
  constructor(e) {
    super(), ce(this, e, xs, Qs, se, { doc: 0, editCount: 1, host: 2 });
  }
}
function vl(n) {
  let e, t;
  return e = new $s({
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
      K(e.$$.fragment);
    },
    m(l, i) {
      X(e, l, i), t = !0;
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
      t || (w(e.$$.fragment, l), t = !0);
    },
    o(l) {
      E(e.$$.fragment, l), t = !1;
    },
    d(l) {
      Y(e, l);
    }
  };
}
function eo(n) {
  let e, t, l, i, r, s = (
    /*doc*/
    (n[0] || /*dev*/
    n[1]) && vl(n)
  );
  return {
    c() {
      s && s.c(), e = W(), t = F("input"), l = W(), i = F("input"), T(t, "type", "hidden"), T(t, "name", "package-name"), t.value = Ll, T(i, "type", "hidden"), T(i, "name", "package-version"), i.value = Sl;
    },
    m(a, o) {
      s && s.m(a, o), U(a, e, o), U(a, t, o), U(a, l, o), U(a, i, o), r = !0;
    },
    p(a, [o]) {
      /*doc*/
      a[0] || /*dev*/
      a[1] ? s ? (s.p(a, o), o & /*doc, dev*/
      3 && w(s, 1)) : (s = vl(a), s.c(), w(s, 1), s.m(e.parentNode, e)) : s && (ge(), E(s, 1, 1, () => {
        s = null;
      }), pe());
    },
    i(a) {
      r || (w(s), r = !0);
    },
    o(a) {
      E(s), r = !1;
    },
    d(a) {
      a && (O(e), O(t), O(l), O(i)), s && s.d(a);
    }
  };
}
function to(n, e, t) {
  let { doc: l } = e, { dev: i = !1 } = e, { editCount: r = 0 } = e;
  return console.log("editcount", r), n.$$set = (s) => {
    "doc" in s && t(0, l = s.doc), "dev" in s && t(1, i = s.dev), "editCount" in s && t(2, r = s.editCount);
  }, [l, i, r];
}
class no extends fe {
  constructor(e) {
    super(), ce(this, e, to, eo, se, { doc: 0, dev: 1, editCount: 2 });
  }
}
class ao extends HTMLElement {
  connectedCallback() {
    var t;
    this.attachShadow({ mode: "open" }), this.plugin = new no({
      target: this.shadowRoot,
      props: {
        doc: this._doc,
        editCount: -1,
        host: this
      }
    });
    const e = lo();
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
function lo() {
  const n = `${Ll}-v${Sl}-style`, e = io(), t = document.createElement("link");
  return t.rel = "stylesheet", t.type = "text/css", t.href = e, t.id = n, t;
}
function io() {
  const n = new URL(import.meta.url), e = n.origin, t = n.pathname.split("/").slice(0, -1).filter(Boolean).join("/");
  return [e, t, "style.css"].filter(Boolean).join("/");
}
export {
  ao as default
};
