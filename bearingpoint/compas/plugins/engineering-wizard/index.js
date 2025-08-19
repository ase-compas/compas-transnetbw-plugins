var gi = Object.defineProperty;
var pi = (n, e, t) => e in n ? gi(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var Vt = (n, e, t) => (pi(n, typeof e != "symbol" ? e + "" : e, t), t);
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
function Al(n) {
  return n();
}
function un() {
  return /* @__PURE__ */ Object.create(null);
}
function de(n) {
  n.forEach(Al);
}
function me(n) {
  return typeof n == "function";
}
function re(n, e) {
  return n != n ? e == e : n !== e || n && typeof n == "object" || typeof n == "function";
}
function _i(n) {
  return Object.keys(n).length === 0;
}
function bi(n, ...e) {
  if (n == null) {
    for (const l of e)
      l(void 0);
    return $;
  }
  const t = n.subscribe(...e);
  return t.unsubscribe ? () => t.unsubscribe() : t;
}
function ut(n, e, t) {
  n.$$.on_destroy.push(bi(e, t));
}
function te(n, e, t, l) {
  if (n) {
    const i = yl(n, e, t, l);
    return n[0](i);
  }
}
function yl(n, e, t, l) {
  return n[1] && l ? Z(t.ctx.slice(), n[1](l(e))) : t.ctx;
}
function ne(n, e, t, l) {
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
function le(n, e, t, l, i, r) {
  if (i) {
    const s = yl(e, t, l, r);
    n.p(s, i);
  }
}
function ie(n) {
  if (n.ctx.length > 32) {
    const e = [], t = n.ctx.length / 32;
    for (let l = 0; l < t; l++)
      e[l] = -1;
    return e;
  }
  return -1;
}
function De(n) {
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
function ln(n) {
  const e = {};
  for (const t in n)
    e[t] = !0;
  return e;
}
function xt(n, e, t) {
  return n.set(t), e;
}
function J(n) {
  return n && me(n.destroy) ? n.destroy : $;
}
const vi = typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : (
  // @ts-ignore Node typings have this
  global
);
function F(n, e) {
  n.appendChild(e);
}
function U(n, e, t) {
  n.insertBefore(e, t || null);
}
function O(n) {
  n.parentNode && n.parentNode.removeChild(n);
}
function At(n, e) {
  for (let t = 0; t < n.length; t += 1)
    n[t] && n[t].d(e);
}
function P(n) {
  return document.createElement(n);
}
function Fe(n) {
  return document.createElementNS("http://www.w3.org/2000/svg", n);
}
function ke(n) {
  return document.createTextNode(n);
}
function V() {
  return ke(" ");
}
function we() {
  return ke("");
}
function z(n, e, t, l) {
  return n.addEventListener(e, t, l), () => n.removeEventListener(e, t, l);
}
function T(n, e, t) {
  t == null ? n.removeAttribute(e) : n.getAttribute(e) !== t && n.setAttribute(e, t);
}
const Ci = ["width", "height"];
function ee(n, e) {
  const t = Object.getOwnPropertyDescriptors(n.__proto__);
  for (const l in e)
    e[l] == null ? n.removeAttribute(l) : l === "style" ? n.style.cssText = e[l] : l === "__value" ? n.value = n[l] = e[l] : t[l] && t[l].set && Ci.indexOf(l) === -1 ? n[l] = e[l] : T(n, l, e[l]);
}
function cn(n, e) {
  for (const t in e)
    T(n, t, e[t]);
}
function Ii(n, e) {
  Object.keys(e).forEach((t) => {
    Ai(n, t, e[t]);
  });
}
function Ai(n, e, t) {
  const l = e.toLowerCase();
  l in n ? n[l] = typeof n[l] == "boolean" && t === "" ? !0 : t : e in n ? n[e] = typeof n[e] == "boolean" && t === "" ? !0 : t : T(n, e, t);
}
function Ct(n) {
  return /-/.test(n) ? Ii : ee;
}
function yi(n) {
  return Array.from(n.childNodes);
}
function Pe(n, e) {
  e = "" + e, n.data !== e && (n.data = /** @type {string} */
  e);
}
function fn(n, e) {
  n.value = e ?? "";
}
function Mt(n, e, t, l) {
  t == null ? n.style.removeProperty(e) : n.style.setProperty(e, t, "");
}
function rt(n, e, t) {
  n.classList.toggle(e, !!t);
}
function ki(n, e, { bubbles: t = !1, cancelable: l = !1 } = {}) {
  return new CustomEvent(n, { detail: e, bubbles: t, cancelable: l });
}
function Ut(n, e) {
  return new n(e);
}
let It;
function bt(n) {
  It = n;
}
function Le() {
  if (!It)
    throw new Error("Function called outside component initialization");
  return It;
}
function Ne(n) {
  Le().$$.on_mount.push(n);
}
function yt(n) {
  Le().$$.on_destroy.push(n);
}
function Gt() {
  const n = Le();
  return (e, t, { cancelable: l = !1 } = {}) => {
    const i = n.$$.callbacks[e];
    if (i) {
      const r = ki(
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
function Ee(n, e) {
  return Le().$$.context.set(n, e), e;
}
function Oe(n) {
  return Le().$$.context.get(n);
}
function Bt(n, e) {
  const t = n.$$.callbacks[e.type];
  t && t.slice().forEach((l) => l.call(this, e));
}
const ot = [], x = [];
let ct = [];
const $t = [], kl = /* @__PURE__ */ Promise.resolve();
let en = !1;
function wl() {
  en || (en = !0, kl.then(Ll));
}
function wi() {
  return wl(), kl;
}
function tn(n) {
  ct.push(n);
}
function Xe(n) {
  $t.push(n);
}
const zt = /* @__PURE__ */ new Set();
let at = 0;
function Ll() {
  if (at !== 0)
    return;
  const n = It;
  do {
    try {
      for (; at < ot.length; ) {
        const e = ot[at];
        at++, bt(e), Li(e.$$);
      }
    } catch (e) {
      throw ot.length = 0, at = 0, e;
    }
    for (bt(null), ot.length = 0, at = 0; x.length; )
      x.pop()();
    for (let e = 0; e < ct.length; e += 1) {
      const t = ct[e];
      zt.has(t) || (zt.add(t), t());
    }
    ct.length = 0;
  } while (ot.length);
  for (; $t.length; )
    $t.pop()();
  en = !1, zt.clear(), bt(n);
}
function Li(n) {
  if (n.fragment !== null) {
    n.update(), de(n.before_update);
    const e = n.dirty;
    n.dirty = [-1], n.fragment && n.fragment.p(n.ctx, e), n.after_update.forEach(tn);
  }
}
function Si(n) {
  const e = [], t = [];
  ct.forEach((l) => n.indexOf(l) === -1 ? e.push(l) : t.push(l)), t.forEach((l) => l()), ct = e;
}
const Tt = /* @__PURE__ */ new Set();
let lt;
function ce() {
  lt = {
    r: 0,
    c: [],
    p: lt
    // parent group
  };
}
function fe() {
  lt.r || de(lt.c), lt = lt.p;
}
function k(n, e) {
  n && n.i && (Tt.delete(n), n.i(e));
}
function E(n, e, t, l) {
  if (n && n.o) {
    if (Tt.has(n))
      return;
    Tt.add(n), lt.c.push(() => {
      Tt.delete(n), l && (t && n.d(1), l());
    }), n.o(e);
  } else
    l && l();
}
function qe(n) {
  return (n == null ? void 0 : n.length) !== void 0 ? n : Array.from(n);
}
function Ri(n, e) {
  E(n, 1, 1, () => {
    e.delete(n.key);
  });
}
function Ei(n, e, t, l, i, r, s, a, o, u, c, f) {
  let d = n.length, g = r.length, b = d;
  const v = {};
  for (; b--; )
    v[n[b].key] = b;
  const p = [], L = /* @__PURE__ */ new Map(), A = /* @__PURE__ */ new Map(), _ = [];
  for (b = g; b--; ) {
    const h = f(i, r, b), w = t(h);
    let N = s.get(w);
    N ? _.push(() => N.p(h, e)) : (N = u(w, h), N.c()), L.set(w, p[b] = N), w in v && A.set(w, Math.abs(b - v[w]));
  }
  const m = /* @__PURE__ */ new Set(), S = /* @__PURE__ */ new Set();
  function R(h) {
    k(h, 1), h.m(a, c), s.set(h.key, h), c = h.first, g--;
  }
  for (; d && g; ) {
    const h = p[g - 1], w = n[d - 1], N = h.key, M = w.key;
    h === w ? (c = h.first, d--, g--) : L.has(M) ? !s.has(N) || m.has(N) ? R(h) : S.has(M) ? d-- : A.get(N) > A.get(M) ? (S.add(N), R(h)) : (m.add(M), d--) : (o(w, s), d--);
  }
  for (; d--; ) {
    const h = n[d];
    L.has(h.key) || o(h, s);
  }
  for (; g; )
    R(p[g - 1]);
  return de(_), p;
}
function ae(n, e) {
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
function Ae(n) {
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
  l && l.m(e, t), tn(() => {
    const r = n.$$.on_mount.map(Al).filter(me);
    n.$$.on_destroy ? n.$$.on_destroy.push(...r) : de(r), n.$$.on_mount = [];
  }), i.forEach(tn);
}
function Y(n, e) {
  const t = n.$$;
  t.fragment !== null && (Si(t.after_update), de(t.on_destroy), t.fragment && t.fragment.d(e), t.on_destroy = t.fragment = null, t.ctx = []);
}
function Hi(n, e) {
  n.$$.dirty[0] === -1 && (ot.push(n), wl(), n.$$.dirty.fill(0)), n.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function se(n, e, t, l, i, r, s = null, a = [-1]) {
  const o = It;
  bt(n);
  const u = n.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: r,
    update: $,
    not_equal: i,
    bound: un(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (o ? o.$$.context : [])),
    // everything else
    callbacks: un(),
    dirty: a,
    skip_bound: !1,
    root: e.target || o.$$.root
  };
  s && s(u.root);
  let c = !1;
  if (u.ctx = t ? t(n, e.props || {}, (f, d, ...g) => {
    const b = g.length ? g[0] : d;
    return u.ctx && i(u.ctx[f], u.ctx[f] = b) && (!u.skip_bound && u.bound[f] && u.bound[f](b), c && Hi(n, f)), d;
  }) : [], u.update(), c = !0, de(u.before_update), u.fragment = l ? l(u.ctx) : !1, e.target) {
    if (e.hydrate) {
      const f = yi(e.target);
      u.fragment && u.fragment.l(f), f.forEach(O);
    } else
      u.fragment && u.fragment.c();
    e.intro && k(n.$$.fragment), X(n, e.target, e.anchor), Ll();
  }
  bt(o);
}
class oe {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    Vt(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    Vt(this, "$$set");
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
    if (!me(t))
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
    this.$$set && !_i(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const Di = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(Di);
const Sl = "archive-explorer", Rl = "0.0.1";
var nn = function(n, e) {
  return nn = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, l) {
    t.__proto__ = l;
  } || function(t, l) {
    for (var i in l)
      Object.prototype.hasOwnProperty.call(l, i) && (t[i] = l[i]);
  }, nn(n, e);
};
function dt(n, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  nn(n, e);
  function t() {
    this.constructor = n;
  }
  n.prototype = e === null ? Object.create(e) : (t.prototype = e.prototype, new t());
}
var Me = function() {
  return Me = Object.assign || function(e) {
    for (var t, l = 1, i = arguments.length; l < i; l++) {
      t = arguments[l];
      for (var r in t)
        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
    }
    return e;
  }, Me.apply(this, arguments);
};
function rn(n, e, t, l) {
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
function Mi(n, e) {
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
function Q(n) {
  return Object.entries(n).filter(([e, t]) => e !== "" && t).map(([e]) => e).join(" ");
}
function pe(n, e, t, l = { bubbles: !0 }, i = !1) {
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
const dn = /^[a-z]+(?::(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/, Ti = /^[^$]+(?:\$(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/;
function Te(n) {
  let e, t = [];
  n.$on = (i, r) => {
    let s = i, a = () => {
    };
    return e ? a = e(s, r) : t.push([s, r]), s.match(dn) && console && console.warn('Event modifiers in SMUI now use "$" instead of ":", so that all events can be bound with modifiers. Please update your event binding: ', s), () => {
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
      const d = u.match(dn), g = u.match(Ti), b = d || g;
      if (u.match(/^SMUI:\w+:/)) {
        const L = u.split(":");
        let A = "";
        for (let _ = 0; _ < L.length; _++)
          A += _ === L.length - 1 ? ":" + L[_] : L[_].split("-").map((m) => m.slice(0, 1).toUpperCase() + m.slice(1)).join("");
        console.warn(`The event ${u.split("$")[0]} has been renamed to ${A.split("$")[0]}.`), u = A;
      }
      if (b) {
        const L = u.split(d ? ":" : "$");
        u = L[0];
        const A = L.slice(1).reduce((_, m) => (_[m] = !0, _), {});
        A.passive && (f = f || {}, f.passive = !0), A.nonpassive && (f = f || {}, f.passive = !1), A.capture && (f = f || {}, f.capture = !0), A.once && (f = f || {}, f.once = !0), A.preventDefault && (c = Oi(c)), A.stopPropagation && (c = Ui(c)), A.stopImmediatePropagation && (c = Bi(c)), A.self && (c = Fi(i, c)), A.trusted && (c = Pi(c));
      }
      const v = hn(i, u, c, f), p = () => {
        v();
        const L = r.indexOf(p);
        L > -1 && r.splice(L, 1);
      };
      return r.push(p), u in s || (s[u] = hn(i, u, l)), p;
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
function Oi(n) {
  return function(e) {
    return e.preventDefault(), n.call(this, e);
  };
}
function Ui(n) {
  return function(e) {
    return e.stopPropagation(), n.call(this, e);
  };
}
function Bi(n) {
  return function(e) {
    return e.stopImmediatePropagation(), n.call(this, e);
  };
}
function Fi(n, e) {
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
function Re(n, e) {
  let t = Object.getOwnPropertyNames(n);
  const l = {};
  for (let i = 0; i < t.length; i++) {
    const r = t[i];
    r.substring(0, e.length) === e && (l[r.substring(e.length)] = n[r]);
  }
  return l;
}
function ye(n, e) {
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
var Et;
function Ni(n, e) {
  e === void 0 && (e = !1);
  var t = n.CSS, l = Et;
  if (typeof Et == "boolean" && !e)
    return Et;
  var i = t && typeof t.supports == "function";
  if (!i)
    return !1;
  var r = t.supports("--css-vars", "yes"), s = t.supports("(--css-vars: yes)") && t.supports("color", "#00000000");
  return l = r || s, e || (Et = l), l;
}
function Gi(n, e, t) {
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
function Zi(n) {
  return n === void 0 && (n = window), qi(n) ? { passive: !0 } : !1;
}
function qi(n) {
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
const El = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  applyPassive: Zi
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
function Wi(n, e) {
  if (n.closest)
    return n.closest(e);
  for (var t = n; t; ) {
    if (Hl(t, e))
      return t;
    t = t.parentElement;
  }
  return null;
}
function Hl(n, e) {
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
const Dl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  closest: Wi,
  estimateScrollWidth: ji,
  matches: Hl
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
var Vi = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  BG_FOCUSED: "mdc-ripple-upgraded--background-focused",
  FG_ACTIVATION: "mdc-ripple-upgraded--foreground-activation",
  FG_DEACTIVATION: "mdc-ripple-upgraded--foreground-deactivation",
  ROOT: "mdc-ripple-upgraded",
  UNBOUNDED: "mdc-ripple-upgraded--unbounded"
}, zi = {
  VAR_FG_SCALE: "--mdc-ripple-fg-scale",
  VAR_FG_SIZE: "--mdc-ripple-fg-size",
  VAR_FG_TRANSLATE_END: "--mdc-ripple-fg-translate-end",
  VAR_FG_TRANSLATE_START: "--mdc-ripple-fg-translate-start",
  VAR_LEFT: "--mdc-ripple-left",
  VAR_TOP: "--mdc-ripple-top"
}, mn = {
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
var gn = [
  "touchstart",
  "pointerdown",
  "mousedown",
  "keydown"
], pn = [
  "touchend",
  "pointerup",
  "mouseup",
  "contextmenu"
], Ht = [], Xi = (
  /** @class */
  function(n) {
    dt(e, n);
    function e(t) {
      var l = n.call(this, Me(Me({}, e.defaultAdapter), t)) || this;
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
        return Vi;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return zi;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return mn;
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
          for (var r = Ke(gn), s = r.next(); !s.done; s = r.next()) {
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
          for (var r = Ke(pn), s = r.next(); !s.done; s = r.next()) {
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
        for (var i = Ke(gn), r = i.next(); !r.done; r = i.next()) {
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
        for (var i = Ke(pn), r = i.next(); !r.done; r = i.next()) {
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
            var a = t !== void 0 && Ht.length > 0 && Ht.some(function(o) {
              return l.adapter.containsEventTarget(o);
            });
            if (a) {
              this.resetActivationState();
              return;
            }
            t !== void 0 && (Ht.push(t.target), this.registerDeactivationHandlers(t)), i.wasElementMadeActive = this.checkElementMadeActive(t), i.wasElementMadeActive && this.animateActivation(), requestAnimationFrame(function() {
              Ht = [], !i.wasElementMadeActive && t !== void 0 && (t.key === " " || t.keyCode === 32) && (i.wasElementMadeActive = l.checkElementMadeActive(t), i.wasElementMadeActive && l.animateActivation()), i.wasElementMadeActive || (l.activationState = l.defaultActivationState());
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
      i ? r = Gi(l, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect()) : r = {
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
      }, mn.FG_DEACTIVATION_MS));
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
        var i = Me({}, l);
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
const { applyPassive: Dt } = El, { matches: Yi } = Dl;
function vt(n, { ripple: e = !0, surface: t = !1, unbounded: l = !1, disabled: i = !1, color: r, active: s, rippleElement: a, eventTarget: o, activeTarget: u, addClass: c = (b) => n.classList.add(b), removeClass: f = (b) => n.classList.remove(b), addStyle: d = (b, v) => n.style.setProperty(b, v), initPromise: g = Promise.resolve() } = {}) {
  let b, v = Oe("SMUI:addLayoutListener"), p, L = s, A = o, _ = u;
  function m() {
    t ? (c("mdc-ripple-surface"), r === "primary" ? (c("smui-ripple-surface--primary"), f("smui-ripple-surface--secondary")) : r === "secondary" ? (f("smui-ripple-surface--primary"), c("smui-ripple-surface--secondary")) : (f("smui-ripple-surface--primary"), f("smui-ripple-surface--secondary"))) : (f("mdc-ripple-surface"), f("smui-ripple-surface--primary"), f("smui-ripple-surface--secondary")), b && L !== s && (L = s, s ? b.activate() : s === !1 && b.deactivate()), e && !b ? (b = new Xi({
      addClass: c,
      browserSupportsCssVars: () => Ni(window),
      computeBoundingRect: () => (a || n).getBoundingClientRect(),
      containsEventTarget: (R) => n.contains(R),
      deregisterDocumentInteractionHandler: (R, h) => document.documentElement.removeEventListener(R, h, Dt()),
      deregisterInteractionHandler: (R, h) => (o || n).removeEventListener(R, h, Dt()),
      deregisterResizeHandler: (R) => window.removeEventListener("resize", R),
      getWindowPageOffset: () => ({
        x: window.pageXOffset,
        y: window.pageYOffset
      }),
      isSurfaceActive: () => s ?? Yi(u || n, ":active"),
      isSurfaceDisabled: () => !!i,
      isUnbounded: () => !!l,
      registerDocumentInteractionHandler: (R, h) => document.documentElement.addEventListener(R, h, Dt()),
      registerInteractionHandler: (R, h) => (o || n).addEventListener(R, h, Dt()),
      registerResizeHandler: (R) => window.addEventListener("resize", R),
      removeClass: f,
      updateCssVariable: d
    }), g.then(() => {
      b && (b.init(), b.setUnbounded(l));
    })) : b && !e && g.then(() => {
      b && (b.destroy(), b = void 0);
    }), b && (A !== o || _ !== u) && (A = o, _ = u, b.destroy(), requestAnimationFrame(() => {
      b && (b.init(), b.setUnbounded(l));
    })), !e && l && c("mdc-ripple-upgraded--unbounded");
  }
  m(), v && (p = v(S));
  function S() {
    b && b.layout();
  }
  return {
    update(R) {
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
      } = Object.assign({ ripple: !0, surface: !1, unbounded: !1, disabled: !1, color: void 0, active: void 0, rippleElement: void 0, eventTarget: void 0, activeTarget: void 0, addClass: (h) => n.classList.add(h), removeClass: (h) => n.classList.remove(h), addStyle: (h, w) => n.style.setProperty(h, w), initPromise: Promise.resolve() }, R)), m();
    },
    destroy() {
      b && (b.destroy(), b = void 0, f("mdc-ripple-surface"), f("smui-ripple-surface--primary"), f("smui-ripple-surface--secondary")), p && p();
    }
  };
}
function Ki(n) {
  let e = (
    /*tag*/
    n[1]
  ), t, l, i = (
    /*tag*/
    n[1] && Xt(n)
  );
  return {
    c() {
      i && i.c(), t = we();
    },
    m(r, s) {
      i && i.m(r, s), U(r, t, s), l = !0;
    },
    p(r, s) {
      /*tag*/
      r[1] ? e ? re(
        e,
        /*tag*/
        r[1]
      ) ? (i.d(1), i = Xt(r), e = /*tag*/
      r[1], i.c(), i.m(t.parentNode, t)) : i.p(r, s) : (i = Xt(r), e = /*tag*/
      r[1], i.c(), i.m(t.parentNode, t)) : e && (i.d(1), i = null, e = /*tag*/
      r[1]);
    },
    i(r) {
      l || (k(i, r), l = !0);
    },
    o(r) {
      E(i, r), l = !1;
    },
    d(r) {
      r && O(t), i && i.d(r);
    }
  };
}
function Ji(n) {
  let e = (
    /*tag*/
    n[1]
  ), t, l = (
    /*tag*/
    n[1] && Yt(n)
  );
  return {
    c() {
      l && l.c(), t = we();
    },
    m(i, r) {
      l && l.m(i, r), U(i, t, r);
    },
    p(i, r) {
      /*tag*/
      i[1] ? e ? re(
        e,
        /*tag*/
        i[1]
      ) ? (l.d(1), l = Yt(i), e = /*tag*/
      i[1], l.c(), l.m(t.parentNode, t)) : l.p(i, r) : (l = Yt(i), e = /*tag*/
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
function Qi(n) {
  let e, t, l, i, r;
  const s = (
    /*#slots*/
    n[8].default
  ), a = te(
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
      e = Fe("svg"), a && a.c(), cn(e, u);
    },
    m(c, f) {
      U(c, e, f), a && a.m(e, null), n[9](e), l = !0, i || (r = [
        J(t = ye.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        J(
          /*forwardEvents*/
          n[4].call(null, e)
        )
      ], i = !0);
    },
    p(c, f) {
      a && a.p && (!l || f & /*$$scope*/
      128) && le(
        a,
        s,
        c,
        /*$$scope*/
        c[7],
        l ? ne(
          s,
          /*$$scope*/
          c[7],
          f,
          null
        ) : ie(
          /*$$scope*/
          c[7]
        ),
        null
      ), cn(e, u = ae(o, [f & /*$$restProps*/
      32 && /*$$restProps*/
      c[5]])), t && me(t.update) && f & /*use*/
      1 && t.update.call(
        null,
        /*use*/
        c[0]
      );
    },
    i(c) {
      l || (k(a, c), l = !0);
    },
    o(c) {
      E(a, c), l = !1;
    },
    d(c) {
      c && O(e), a && a.d(c), n[9](null), i = !1, de(r);
    }
  };
}
function Xt(n) {
  let e, t, l, i, r;
  const s = (
    /*#slots*/
    n[8].default
  ), a = te(
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
      e = P(
        /*tag*/
        n[1]
      ), a && a.c(), Ct(
        /*tag*/
        n[1]
      )(e, u);
    },
    m(c, f) {
      U(c, e, f), a && a.m(e, null), n[11](e), l = !0, i || (r = [
        J(t = ye.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        J(
          /*forwardEvents*/
          n[4].call(null, e)
        )
      ], i = !0);
    },
    p(c, f) {
      a && a.p && (!l || f & /*$$scope*/
      128) && le(
        a,
        s,
        c,
        /*$$scope*/
        c[7],
        l ? ne(
          s,
          /*$$scope*/
          c[7],
          f,
          null
        ) : ie(
          /*$$scope*/
          c[7]
        ),
        null
      ), Ct(
        /*tag*/
        c[1]
      )(e, u = ae(o, [f & /*$$restProps*/
      32 && /*$$restProps*/
      c[5]])), t && me(t.update) && f & /*use*/
      1 && t.update.call(
        null,
        /*use*/
        c[0]
      );
    },
    i(c) {
      l || (k(a, c), l = !0);
    },
    o(c) {
      E(a, c), l = !1;
    },
    d(c) {
      c && O(e), a && a.d(c), n[11](null), i = !1, de(r);
    }
  };
}
function Yt(n) {
  let e, t, l, i, r = [
    /*$$restProps*/
    n[5]
  ], s = {};
  for (let a = 0; a < r.length; a += 1)
    s = Z(s, r[a]);
  return {
    c() {
      e = P(
        /*tag*/
        n[1]
      ), Ct(
        /*tag*/
        n[1]
      )(e, s);
    },
    m(a, o) {
      U(a, e, o), n[10](e), l || (i = [
        J(t = ye.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        J(
          /*forwardEvents*/
          n[4].call(null, e)
        )
      ], l = !0);
    },
    p(a, o) {
      Ct(
        /*tag*/
        a[1]
      )(e, s = ae(r, [o & /*$$restProps*/
      32 && /*$$restProps*/
      a[5]])), t && me(t.update) && o & /*use*/
      1 && t.update.call(
        null,
        /*use*/
        a[0]
      );
    },
    d(a) {
      a && O(e), n[10](null), l = !1, de(i);
    }
  };
}
function xi(n) {
  let e, t, l, i;
  const r = [Qi, Ji, Ki], s = [];
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
      t.c(), l = we();
    },
    m(o, u) {
      s[e].m(o, u), U(o, l, u), i = !0;
    },
    p(o, [u]) {
      let c = e;
      e = a(o), e === c ? s[e].p(o, u) : (ce(), E(s[c], 1, 1, () => {
        s[c] = null;
      }), fe(), t = s[e], t ? t.p(o, u) : (t = s[e] = r[e](o), t.c()), k(t, 1), t.m(l.parentNode, l));
    },
    i(o) {
      i || (k(t), i = !0);
    },
    o(o) {
      E(t), i = !1;
    },
    d(o) {
      o && O(l), s[e].d(o);
    }
  };
}
function $i(n, e, t) {
  let l;
  const i = ["use", "tag", "getElement"];
  let r = ue(e, i), { $$slots: s = {}, $$scope: a } = e, { use: o = [] } = e, { tag: u } = e;
  const c = Te(Le());
  let f;
  function d() {
    return f;
  }
  function g(p) {
    x[p ? "unshift" : "push"](() => {
      f = p, t(2, f);
    });
  }
  function b(p) {
    x[p ? "unshift" : "push"](() => {
      f = p, t(2, f);
    });
  }
  function v(p) {
    x[p ? "unshift" : "push"](() => {
      f = p, t(2, f);
    });
  }
  return n.$$set = (p) => {
    e = Z(Z({}, e), De(p)), t(5, r = ue(e, i)), "use" in p && t(0, o = p.use), "tag" in p && t(1, u = p.tag), "$$scope" in p && t(7, a = p.$$scope);
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
    v
  ];
}
class Ft extends oe {
  constructor(e) {
    super(), se(this, e, $i, xi, re, { use: 0, tag: 1, getElement: 6 });
  }
  get getElement() {
    return this.$$.ctx[6];
  }
}
const st = [];
function Ot(n, e = $) {
  let t;
  const l = /* @__PURE__ */ new Set();
  function i(a) {
    if (re(n, a) && (n = a, t)) {
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
function er(n) {
  let e;
  const t = (
    /*#slots*/
    n[4].default
  ), l = te(
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
      8) && le(
        l,
        t,
        i,
        /*$$scope*/
        i[3],
        e ? ne(
          t,
          /*$$scope*/
          i[3],
          r,
          null
        ) : ie(
          /*$$scope*/
          i[3]
        ),
        null
      );
    },
    i(i) {
      e || (k(l, i), e = !0);
    },
    o(i) {
      E(l, i), e = !1;
    },
    d(i) {
      l && l.d(i);
    }
  };
}
function tr(n, e, t) {
  let l, { $$slots: i = {}, $$scope: r } = e, { key: s } = e, { value: a } = e;
  const o = Ot(a);
  return ut(n, o, (u) => t(5, l = u)), Ee(s, o), yt(() => {
    o.set(void 0);
  }), n.$$set = (u) => {
    "key" in u && t(1, s = u.key), "value" in u && t(2, a = u.value), "$$scope" in u && t(3, r = u.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty & /*value*/
    4 && xt(o, l = a, l);
  }, [o, s, a, r, i];
}
class Pt extends oe {
  constructor(e) {
    super(), se(this, e, tr, er, re, { key: 1, value: 2 });
  }
}
function _n(n) {
  let e;
  return {
    c() {
      e = P("div"), T(e, "class", "mdc-button__touch");
    },
    m(t, l) {
      U(t, e, l);
    },
    d(t) {
      t && O(e);
    }
  };
}
function nr(n) {
  let e, t, l, i;
  const r = (
    /*#slots*/
    n[28].default
  ), s = te(
    r,
    n,
    /*$$scope*/
    n[30],
    null
  );
  let a = (
    /*touch*/
    n[6] && _n()
  );
  return {
    c() {
      e = P("div"), t = V(), s && s.c(), a && a.c(), l = we(), T(e, "class", "mdc-button__ripple");
    },
    m(o, u) {
      U(o, e, u), U(o, t, u), s && s.m(o, u), a && a.m(o, u), U(o, l, u), i = !0;
    },
    p(o, u) {
      s && s.p && (!i || u[0] & /*$$scope*/
      1073741824) && le(
        s,
        r,
        o,
        /*$$scope*/
        o[30],
        i ? ne(
          r,
          /*$$scope*/
          o[30],
          u,
          null
        ) : ie(
          /*$$scope*/
          o[30]
        ),
        null
      ), /*touch*/
      o[6] ? a || (a = _n(), a.c(), a.m(l.parentNode, l)) : a && (a.d(1), a = null);
    },
    i(o) {
      i || (k(s, o), i = !0);
    },
    o(o) {
      E(s, o), i = !1;
    },
    d(o) {
      o && (O(e), O(t), O(l)), s && s.d(o), a && a.d(o);
    }
  };
}
function lr(n) {
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
      ).map(Kt).concat([
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
      $$slots: { default: [nr] },
      $$scope: { ctx: a }
    };
    for (let c = 0; c < i.length; c += 1)
      u = Z(u, i[c]);
    return o !== void 0 && o[0] & /*tag, ripple, color, $$restProps, addClass, removeClass, addStyle, forwardEvents, use, className, variant, touch, context, secondary, internalClasses, internalStyles, style, actionProp, defaultProp, secondaryProp, href*/
    12580351 && (u = Z(u, ae(i, [
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
      o[0] & /*internalStyles, style*/
      8196 && {
        style: Object.entries(
          /*internalStyles*/
          a[13]
        ).map(Kt).concat([
          /*style*/
          a[2]
        ]).join(" ")
      },
      o[0] & /*actionProp*/
      65536 && Ae(
        /*actionProp*/
        a[16]
      ),
      o[0] & /*defaultProp*/
      32768 && Ae(
        /*defaultProp*/
        a[15]
      ),
      o[0] & /*secondaryProp*/
      16384 && Ae(
        /*secondaryProp*/
        a[14]
      ),
      o[0] & /*href*/
      128 && { href: (
        /*href*/
        a[7]
      ) },
      o[0] & /*$$restProps*/
      8388608 && Ae(
        /*$$restProps*/
        a[23]
      )
    ]))), { props: u };
  }
  return r && (e = Ut(r, s(n)), n[29](e), e.$on(
    "click",
    /*handleClick*/
    n[22]
  )), {
    c() {
      e && K(e.$$.fragment), t = we();
    },
    m(a, o) {
      e && X(e, a, o), U(a, t, o), l = !0;
    },
    p(a, o) {
      if (o[0] & /*component*/
      512 && r !== (r = /*component*/
      a[9])) {
        if (e) {
          ce();
          const u = e;
          E(u.$$.fragment, 1, 0, () => {
            Y(u, 1);
          }), fe();
        }
        r ? (e = Ut(r, s(a, o)), a[29](e), e.$on(
          "click",
          /*handleClick*/
          a[22]
        ), K(e.$$.fragment), k(e.$$.fragment, 1), X(e, t.parentNode, t)) : e = null;
      } else if (r) {
        const u = o[0] & /*tag, ripple, color, $$restProps, addClass, removeClass, addStyle, forwardEvents, use, className, variant, touch, context, secondary, internalClasses, internalStyles, style, actionProp, defaultProp, secondaryProp, href*/
        12580351 ? ae(i, [
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
          o[0] & /*internalStyles, style*/
          8196 && {
            style: Object.entries(
              /*internalStyles*/
              a[13]
            ).map(Kt).concat([
              /*style*/
              a[2]
            ]).join(" ")
          },
          o[0] & /*actionProp*/
          65536 && Ae(
            /*actionProp*/
            a[16]
          ),
          o[0] & /*defaultProp*/
          32768 && Ae(
            /*defaultProp*/
            a[15]
          ),
          o[0] & /*secondaryProp*/
          16384 && Ae(
            /*secondaryProp*/
            a[14]
          ),
          o[0] & /*href*/
          128 && { href: (
            /*href*/
            a[7]
          ) },
          o[0] & /*$$restProps*/
          8388608 && Ae(
            /*$$restProps*/
            a[23]
          )
        ]) : {};
        o[0] & /*$$scope, touch*/
        1073741888 && (u.$$scope = { dirty: o, ctx: a }), e.$set(u);
      }
    },
    i(a) {
      l || (e && k(e.$$.fragment, a), l = !0);
    },
    o(a) {
      e && E(e.$$.fragment, a), l = !1;
    },
    d(a) {
      a && O(t), n[29](null), e && Y(e, a);
    }
  };
}
const Kt = ([n, e]) => `${n}: ${e};`;
function ir(n, e, t) {
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
  const c = Te(Le());
  let { use: f = [] } = e, { class: d = "" } = e, { style: g = "" } = e, { ripple: b = !0 } = e, { color: v = "primary" } = e, { variant: p = "text" } = e, { touch: L = !1 } = e, { href: A = void 0 } = e, { action: _ = "close" } = e, { defaultAction: m = !1 } = e, { secondary: S = !1 } = e, R, h = {}, w = {}, N = Oe("SMUI:button:context"), { component: M = Ft } = e, { tag: y = M === Ft ? A == null ? "button" : "a" : void 0 } = e, B = a.disabled;
  Ee("SMUI:label:context", "button"), Ee("SMUI:icon:context", "button");
  function H(C) {
    h[C] || t(12, h[C] = !0, h);
  }
  function j(C) {
    (!(C in h) || h[C]) && t(12, h[C] = !1, h);
  }
  function ve(C, G) {
    w[C] != G && (G === "" || G == null ? (delete w[C], t(13, w)) : t(13, w[C] = G, w));
  }
  function Ce() {
    N === "banner" && pe(_e(), S ? "SMUIBannerButton:secondaryActionClick" : "SMUIBannerButton:primaryActionClick");
  }
  function _e() {
    return R.getElement();
  }
  function q(C) {
    x[C ? "unshift" : "push"](() => {
      R = C, t(11, R);
    });
  }
  return n.$$set = (C) => {
    t(31, e = Z(Z({}, e), De(C))), t(23, a = ue(e, s)), "use" in C && t(0, f = C.use), "class" in C && t(1, d = C.class), "style" in C && t(2, g = C.style), "ripple" in C && t(3, b = C.ripple), "color" in C && t(4, v = C.color), "variant" in C && t(5, p = C.variant), "touch" in C && t(6, L = C.touch), "href" in C && t(7, A = C.href), "action" in C && t(24, _ = C.action), "defaultAction" in C && t(25, m = C.defaultAction), "secondary" in C && t(8, S = C.secondary), "component" in C && t(9, M = C.component), "tag" in C && t(10, y = C.tag), "$$scope" in C && t(30, u = C.$$scope);
  }, n.$$.update = () => {
    if (t(16, l = N === "dialog:action" && _ != null ? { "data-mdc-dialog-action": _ } : { action: e.action }), t(15, i = N === "dialog:action" && m ? { "data-mdc-dialog-button-default": "" } : { default: e.default }), t(14, r = N === "banner" ? {} : { secondary: e.secondary }), B !== a.disabled) {
      if (R) {
        const C = _e();
        "blur" in C && C.blur();
      }
      t(27, B = a.disabled);
    }
  }, e = De(e), [
    f,
    d,
    g,
    b,
    v,
    p,
    L,
    A,
    S,
    M,
    y,
    R,
    h,
    w,
    r,
    i,
    l,
    c,
    N,
    H,
    j,
    ve,
    Ce,
    a,
    _,
    m,
    _e,
    B,
    o,
    q,
    u
  ];
}
class Nt extends oe {
  constructor(e) {
    super(), se(
      this,
      e,
      ir,
      lr,
      re,
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
var rr = {
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
var ar = (
  /** @class */
  function(n) {
    dt(e, n);
    function e(t) {
      var l = n.call(this, Me(Me({}, e.defaultAdapter), t)) || this;
      return l.shakeAnimationEndHandler = function() {
        l.handleShakeAnimationEnd();
      }, l;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return rr;
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
var sr = (
  /** @class */
  function(n) {
    dt(e, n);
    function e(t) {
      var l = n.call(this, Me(Me({}, e.defaultAdapter), t)) || this;
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
var or = {
  NOTCH_ELEMENT_SELECTOR: ".mdc-notched-outline__notch"
}, bn = {
  // This should stay in sync with $mdc-notched-outline-padding * 2.
  NOTCH_ELEMENT_PADDING: 8
}, ur = {
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
var cr = (
  /** @class */
  function(n) {
    dt(e, n);
    function e(t) {
      return n.call(this, Me(Me({}, e.defaultAdapter), t)) || this;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return or;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return ur;
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
var Jt = {
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
}, fr = {
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
}, dr = [
  "pattern",
  "min",
  "max",
  "required",
  "step",
  "minlength",
  "maxlength"
], hr = [
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
var Cn = ["mousedown", "touchstart"], In = ["click", "keydown"], mr = (
  /** @class */
  function(n) {
    dt(e, n);
    function e(t, l) {
      l === void 0 && (l = {});
      var i = n.call(this, Me(Me({}, e.defaultAdapter), t)) || this;
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
        return fr;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Jt;
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
        return hr.indexOf(t) >= 0;
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
        return dr.indexOf(i) > -1 ? (l.styleValidity(!0), l.adapter.setLabelRequired(l.getNativeInput().required), !0) : !1;
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
        r && s ? this.adapter.setInputAttr(Jt.ARIA_DESCRIBEDBY, s) : this.adapter.removeInputAttr(Jt.ARIA_DESCRIBEDBY);
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
function gr(n) {
  let e, t, l, i, r, s, a, o;
  const u = (
    /*#slots*/
    n[22].default
  ), c = te(
    u,
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
      e = P("label"), c && c.c(), ee(e, d);
    },
    m(g, b) {
      U(g, e, b), c && c.m(e, null), n[24](e), s = !0, a || (o = [
        J(r = ye.call(
          null,
          e,
          /*use*/
          n[2]
        )),
        J(
          /*forwardEvents*/
          n[10].call(null, e)
        )
      ], a = !0);
    },
    p(g, b) {
      c && c.p && (!s || b & /*$$scope*/
      2097152) && le(
        c,
        u,
        g,
        /*$$scope*/
        g[21],
        s ? ne(
          u,
          /*$$scope*/
          g[21],
          b,
          null
        ) : ie(
          /*$$scope*/
          g[21]
        ),
        null
      ), ee(e, d = ae(f, [
        (!s || b & /*className, floatAbove, required, internalClasses*/
        267 && t !== (t = Q({
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
      ])), r && me(r.update) && b & /*use*/
      4 && r.update.call(
        null,
        /*use*/
        g[2]
      );
    },
    i(g) {
      s || (k(c, g), s = !0);
    },
    o(g) {
      E(c, g), s = !1;
    },
    d(g) {
      g && O(e), c && c.d(g), n[24](null), a = !1, de(o);
    }
  };
}
function pr(n) {
  let e, t, l, i, r, s, a;
  const o = (
    /*#slots*/
    n[22].default
  ), u = te(
    o,
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
      e = P("span"), u && u.c(), ee(e, f);
    },
    m(d, g) {
      U(d, e, g), u && u.m(e, null), n[23](e), r = !0, s || (a = [
        J(i = ye.call(
          null,
          e,
          /*use*/
          n[2]
        )),
        J(
          /*forwardEvents*/
          n[10].call(null, e)
        )
      ], s = !0);
    },
    p(d, g) {
      u && u.p && (!r || g & /*$$scope*/
      2097152) && le(
        u,
        o,
        d,
        /*$$scope*/
        d[21],
        r ? ne(
          o,
          /*$$scope*/
          d[21],
          g,
          null
        ) : ie(
          /*$$scope*/
          d[21]
        ),
        null
      ), ee(e, f = ae(c, [
        (!r || g & /*className, floatAbove, required, internalClasses*/
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
      ])), i && me(i.update) && g & /*use*/
      4 && i.update.call(
        null,
        /*use*/
        d[2]
      );
    },
    i(d) {
      r || (k(u, d), r = !0);
    },
    o(d) {
      E(u, d), r = !1;
    },
    d(d) {
      d && O(e), u && u.d(d), n[23](null), s = !1, de(a);
    }
  };
}
function _r(n) {
  let e, t, l, i;
  const r = [pr, gr], s = [];
  function a(o, u) {
    return (
      /*wrapped*/
      o[6] ? 0 : 1
    );
  }
  return e = a(n), t = s[e] = r[e](n), {
    c() {
      t.c(), l = we();
    },
    m(o, u) {
      s[e].m(o, u), U(o, l, u), i = !0;
    },
    p(o, [u]) {
      let c = e;
      e = a(o), e === c ? s[e].p(o, u) : (ce(), E(s[c], 1, 1, () => {
        s[c] = null;
      }), fe(), t = s[e], t ? t.p(o, u) : (t = s[e] = r[e](o), t.c()), k(t, 1), t.m(l.parentNode, l));
    },
    i(o) {
      i || (k(t), i = !0);
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
function br(n, e, t) {
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
  const o = Te(Le());
  let { use: u = [] } = e, { class: c = "" } = e, { style: f = "" } = e, { for: d = void 0 } = e, { floatAbove: g = !1 } = e, { required: b = !1 } = e, { wrapped: v = !1 } = e, p, L, A = {}, _ = {}, m = (a = Oe("SMUI:generic:input:props")) !== null && a !== void 0 ? a : {}, S = g, R = b;
  Ne(() => {
    t(18, L = new ar({
      addClass: h,
      removeClass: w,
      getWidth: () => {
        var C, G;
        const ge = ve(), be = ge.cloneNode(!0);
        (C = ge.parentNode) === null || C === void 0 || C.appendChild(be), be.classList.add("smui-floating-label--remove-transition"), be.classList.add("smui-floating-label--force-size"), be.classList.remove("mdc-floating-label--float-above");
        const Ue = be.scrollWidth;
        return (G = ge.parentNode) === null || G === void 0 || G.removeChild(be), Ue;
      },
      registerInteractionHandler: (C, G) => ve().addEventListener(C, G),
      deregisterInteractionHandler: (C, G) => ve().removeEventListener(C, G)
    }));
    const q = {
      get element() {
        return ve();
      },
      addStyle: N,
      removeStyle: M
    };
    return pe(p, "SMUIFloatingLabel:mount", q), L.init(), () => {
      pe(p, "SMUIFloatingLabel:unmount", q), L.destroy();
    };
  });
  function h(q) {
    A[q] || t(8, A[q] = !0, A);
  }
  function w(q) {
    (!(q in A) || A[q]) && t(8, A[q] = !1, A);
  }
  function N(q, C) {
    _[q] != C && (C === "" || C == null ? (delete _[q], t(9, _)) : t(9, _[q] = C, _));
  }
  function M(q) {
    q in _ && (delete _[q], t(9, _));
  }
  function y(q) {
    L.shake(q);
  }
  function B(q) {
    t(0, g = q);
  }
  function H(q) {
    t(1, b = q);
  }
  function j() {
    return L.getWidth();
  }
  function ve() {
    return p;
  }
  function Ce(q) {
    x[q ? "unshift" : "push"](() => {
      p = q, t(7, p);
    });
  }
  function _e(q) {
    x[q ? "unshift" : "push"](() => {
      p = q, t(7, p);
    });
  }
  return n.$$set = (q) => {
    e = Z(Z({}, e), De(q)), t(12, i = ue(e, l)), "use" in q && t(2, u = q.use), "class" in q && t(3, c = q.class), "style" in q && t(4, f = q.style), "for" in q && t(5, d = q.for), "floatAbove" in q && t(0, g = q.floatAbove), "required" in q && t(1, b = q.required), "wrapped" in q && t(6, v = q.wrapped), "$$scope" in q && t(21, s = q.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty & /*instance, previousFloatAbove, floatAbove*/
    786433 && L && S !== g && (t(19, S = g), L.float(g)), n.$$.dirty & /*instance, previousRequired, required*/
    1310722 && L && R !== b && (t(20, R = b), L.setRequired(b));
  }, [
    g,
    b,
    u,
    c,
    f,
    d,
    v,
    p,
    A,
    _,
    o,
    m,
    i,
    y,
    B,
    H,
    j,
    ve,
    L,
    S,
    R,
    s,
    r,
    Ce,
    _e
  ];
}
class Ml extends oe {
  constructor(e) {
    super(), se(this, e, br, _r, re, {
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
function vr(n) {
  let e, t, l, i, r, s, a = [
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
      e = P("div"), ee(e, o);
    },
    m(u, c) {
      U(u, e, c), n[13](e), r || (s = [
        J(i = ye.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        J(
          /*forwardEvents*/
          n[7].call(null, e)
        )
      ], r = !0);
    },
    p(u, [c]) {
      ee(e, o = ae(a, [
        c & /*className, active, internalClasses*/
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
      ])), i && me(i.update) && c & /*use*/
      1 && i.update.call(
        null,
        /*use*/
        u[0]
      );
    },
    i: $,
    o: $,
    d(u) {
      u && O(e), n[13](null), r = !1, de(s);
    }
  };
}
const kn = ([n, e]) => `${n}: ${e};`;
function Cr(n, e, t) {
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
  const r = Te(Le());
  let { use: s = [] } = e, { class: a = "" } = e, { style: o = "" } = e, { active: u = !1 } = e, c, f, d = {}, g = {};
  Ne(() => (f = new sr({
    addClass: v,
    removeClass: p,
    hasClass: b,
    setStyle: L,
    registerEventHandler: (h, w) => S().addEventListener(h, w),
    deregisterEventHandler: (h, w) => S().removeEventListener(h, w)
  }), f.init(), () => {
    f.destroy();
  }));
  function b(h) {
    return h in d ? d[h] : S().classList.contains(h);
  }
  function v(h) {
    d[h] || t(5, d[h] = !0, d);
  }
  function p(h) {
    (!(h in d) || d[h]) && t(5, d[h] = !1, d);
  }
  function L(h, w) {
    g[h] != w && (w === "" || w == null ? (delete g[h], t(6, g)) : t(6, g[h] = w, g));
  }
  function A() {
    f.activate();
  }
  function _() {
    f.deactivate();
  }
  function m(h) {
    f.setRippleCenter(h);
  }
  function S() {
    return c;
  }
  function R(h) {
    x[h ? "unshift" : "push"](() => {
      c = h, t(4, c);
    });
  }
  return n.$$set = (h) => {
    e = Z(Z({}, e), De(h)), t(8, i = ue(e, l)), "use" in h && t(0, s = h.use), "class" in h && t(1, a = h.class), "style" in h && t(2, o = h.style), "active" in h && t(3, u = h.active);
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
    A,
    _,
    m,
    S,
    R
  ];
}
class Ir extends oe {
  constructor(e) {
    super(), se(this, e, Cr, vr, re, {
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
  ), r = te(
    i,
    n,
    /*$$scope*/
    n[14],
    null
  );
  return {
    c() {
      e = P("div"), r && r.c(), T(e, "class", "mdc-notched-outline__notch"), T(e, "style", t = Object.entries(
        /*notchStyles*/
        n[7]
      ).map(Ln).join(" "));
    },
    m(s, a) {
      U(s, e, a), r && r.m(e, null), l = !0;
    },
    p(s, a) {
      r && r.p && (!l || a & /*$$scope*/
      16384) && le(
        r,
        i,
        s,
        /*$$scope*/
        s[14],
        l ? ne(
          i,
          /*$$scope*/
          s[14],
          a,
          null
        ) : ie(
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
      l || (k(r, s), l = !0);
    },
    o(s) {
      E(r, s), l = !1;
    },
    d(s) {
      s && O(e), r && r.d(s);
    }
  };
}
function Ar(n) {
  let e, t, l, i, r, s, a, o, u, c, f = !/*noLabel*/
  n[3] && wn(n), d = [
    {
      class: s = Q({
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
      e = P("div"), t = P("div"), l = V(), f && f.c(), i = V(), r = P("div"), T(t, "class", "mdc-notched-outline__leading"), T(r, "class", "mdc-notched-outline__trailing"), ee(e, g);
    },
    m(b, v) {
      U(b, e, v), F(e, t), F(e, l), f && f.m(e, null), F(e, i), F(e, r), n[16](e), o = !0, u || (c = [
        J(a = ye.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        J(
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
    p(b, [v]) {
      /*noLabel*/
      b[3] ? f && (ce(), E(f, 1, 1, () => {
        f = null;
      }), fe()) : f ? (f.p(b, v), v & /*noLabel*/
      8 && k(f, 1)) : (f = wn(b), f.c(), k(f, 1), f.m(e, i)), ee(e, g = ae(d, [
        (!o || v & /*className, notched, noLabel, internalClasses*/
        78 && s !== (s = Q({
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
        v & /*$$restProps*/
        1024 && /*$$restProps*/
        b[10]
      ])), a && me(a.update) && v & /*use*/
      1 && a.update.call(
        null,
        /*use*/
        b[0]
      );
    },
    i(b) {
      o || (k(f), o = !0);
    },
    o(b) {
      E(f), o = !1;
    },
    d(b) {
      b && O(e), f && f.d(), n[16](null), u = !1, de(c);
    }
  };
}
const Ln = ([n, e]) => `${n}: ${e};`;
function yr(n, e, t) {
  const l = ["use", "class", "notched", "noLabel", "notch", "closeNotch", "getElement"];
  let i = ue(e, l), { $$slots: r = {}, $$scope: s } = e;
  const a = Te(Le());
  let { use: o = [] } = e, { class: u = "" } = e, { notched: c = !1 } = e, { noLabel: f = !1 } = e, d, g, b, v = {}, p = {};
  Ne(() => (g = new cr({
    addClass: A,
    removeClass: _,
    setNotchWidthProperty: (y) => m("width", y + "px"),
    removeNotchWidthProperty: () => S("width")
  }), g.init(), () => {
    g.destroy();
  }));
  function L(y) {
    t(4, b = y.detail);
  }
  function A(y) {
    v[y] || t(6, v[y] = !0, v);
  }
  function _(y) {
    (!(y in v) || v[y]) && t(6, v[y] = !1, v);
  }
  function m(y, B) {
    p[y] != B && (B === "" || B == null ? (delete p[y], t(7, p)) : t(7, p[y] = B, p));
  }
  function S(y) {
    y in p && (delete p[y], t(7, p));
  }
  function R(y) {
    g.notch(y);
  }
  function h() {
    g.closeNotch();
  }
  function w() {
    return d;
  }
  function N(y) {
    x[y ? "unshift" : "push"](() => {
      d = y, t(5, d);
    });
  }
  const M = () => t(4, b = void 0);
  return n.$$set = (y) => {
    e = Z(Z({}, e), De(y)), t(10, i = ue(e, l)), "use" in y && t(0, o = y.use), "class" in y && t(1, u = y.class), "notched" in y && t(2, c = y.notched), "noLabel" in y && t(3, f = y.noLabel), "$$scope" in y && t(14, s = y.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty & /*floatingLabel*/
    16 && (b ? (b.addStyle("transition-duration", "0s"), A("mdc-notched-outline--upgraded"), requestAnimationFrame(() => {
      b && b.removeStyle("transition-duration");
    })) : _("mdc-notched-outline--upgraded"));
  }, [
    o,
    u,
    c,
    f,
    b,
    d,
    v,
    p,
    a,
    L,
    i,
    R,
    h,
    w,
    s,
    r,
    N,
    M
  ];
}
class kr extends oe {
  constructor(e) {
    super(), se(this, e, yr, Ar, re, {
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
function wr(n) {
  let e;
  const t = (
    /*#slots*/
    n[11].default
  ), l = te(
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
      8192) && le(
        l,
        t,
        i,
        /*$$scope*/
        i[13],
        e ? ne(
          t,
          /*$$scope*/
          i[13],
          r,
          null
        ) : ie(
          /*$$scope*/
          i[13]
        ),
        null
      );
    },
    i(i) {
      e || (k(l, i), e = !0);
    },
    o(i) {
      E(l, i), e = !1;
    },
    d(i) {
      l && l.d(i);
    }
  };
}
function Lr(n) {
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
  var r = (
    /*component*/
    n[2]
  );
  function s(a, o) {
    let u = {
      $$slots: { default: [wr] },
      $$scope: { ctx: a }
    };
    for (let c = 0; c < i.length; c += 1)
      u = Z(u, i[c]);
    return o !== void 0 && o & /*tag, forwardEvents, use, className, smuiClass, smuiClassMap, props, $$restProps*/
    1003 && (u = Z(u, ae(i, [
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
      o & /*props*/
      128 && Ae(
        /*props*/
        a[7]
      ),
      o & /*$$restProps*/
      512 && Ae(
        /*$$restProps*/
        a[9]
      )
    ]))), { props: u };
  }
  return r && (e = Ut(r, s(n)), n[12](e)), {
    c() {
      e && K(e.$$.fragment), t = we();
    },
    m(a, o) {
      e && X(e, a, o), U(a, t, o), l = !0;
    },
    p(a, [o]) {
      if (o & /*component*/
      4 && r !== (r = /*component*/
      a[2])) {
        if (e) {
          ce();
          const u = e;
          E(u.$$.fragment, 1, 0, () => {
            Y(u, 1);
          }), fe();
        }
        r ? (e = Ut(r, s(a, o)), a[12](e), K(e.$$.fragment), k(e.$$.fragment, 1), X(e, t.parentNode, t)) : e = null;
      } else if (r) {
        const u = o & /*tag, forwardEvents, use, className, smuiClass, smuiClassMap, props, $$restProps*/
        1003 ? ae(i, [
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
          o & /*props*/
          128 && Ae(
            /*props*/
            a[7]
          ),
          o & /*$$restProps*/
          512 && Ae(
            /*$$restProps*/
            a[9]
          )
        ]) : {};
        o & /*$$scope*/
        8192 && (u.$$scope = { dirty: o, ctx: a }), e.$set(u);
      }
    },
    i(a) {
      l || (e && k(e.$$.fragment, a), l = !0);
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
  component: Ft,
  tag: "div",
  class: "",
  classMap: {},
  contexts: {},
  props: {}
};
function Sr(n, e, t) {
  const l = ["use", "class", "component", "tag", "getElement"];
  let i = ue(e, l), { $$slots: r = {}, $$scope: s } = e, { use: a = [] } = e, { class: o = "" } = e, u;
  const c = Ve.class, f = {}, d = [], g = Ve.contexts, b = Ve.props;
  let { component: v = Ve.component } = e, { tag: p = v === Ft ? Ve.tag : void 0 } = e;
  Object.entries(Ve.classMap).forEach(([m, S]) => {
    const R = Oe(S);
    R && "subscribe" in R && d.push(R.subscribe((h) => {
      t(5, f[m] = h, f);
    }));
  });
  const L = Te(Le());
  for (let m in g)
    g.hasOwnProperty(m) && Ee(m, g[m]);
  yt(() => {
    for (const m of d)
      m();
  });
  function A() {
    return u.getElement();
  }
  function _(m) {
    x[m ? "unshift" : "push"](() => {
      u = m, t(4, u);
    });
  }
  return n.$$set = (m) => {
    e = Z(Z({}, e), De(m)), t(9, i = ue(e, l)), "use" in m && t(0, a = m.use), "class" in m && t(1, o = m.class), "component" in m && t(2, v = m.component), "tag" in m && t(3, p = m.tag), "$$scope" in m && t(13, s = m.$$scope);
  }, [
    a,
    o,
    v,
    p,
    u,
    f,
    c,
    b,
    L,
    i,
    A,
    r,
    _,
    s
  ];
}
class Rr extends oe {
  constructor(e) {
    super(), se(this, e, Sr, Lr, re, {
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
function He(n) {
  return new Proxy(Rr, {
    construct: function(e, t) {
      return Object.assign(Ve, Sn, n), new e(...t);
    },
    get: function(e, t) {
      return Object.assign(Ve, Sn, n), e[t];
    }
  });
}
const Er = He({
  class: "mdc-text-field-helper-line",
  tag: "div"
}), Hr = He({
  class: "mdc-text-field__affix mdc-text-field__affix--prefix",
  tag: "span"
}), Dr = He({
  class: "mdc-text-field__affix mdc-text-field__affix--suffix",
  tag: "span"
});
function Mr(n) {
  let e, t, l, i, r, s = [
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
  for (let o = 0; o < s.length; o += 1)
    a = Z(a, s[o]);
  return {
    c() {
      e = P("input"), ee(e, a);
    },
    m(o, u) {
      U(o, e, u), e.autofocus && e.focus(), n[26](e), i || (r = [
        J(l = ye.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        J(
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
      ee(e, a = ae(s, [
        u & /*className*/
        2 && t !== (t = Q({
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
      ])), l && me(l.update) && u & /*use*/
      1 && l.update.call(
        null,
        /*use*/
        o[0]
      );
    },
    i: $,
    o: $,
    d(o) {
      o && O(e), n[26](null), i = !1, de(r);
    }
  };
}
function Tr(n) {
  return n === "" ? Number.NaN : +n;
}
function Or(n, e, t) {
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
  const r = Te(Le());
  let s = () => {
  };
  function a(C) {
    return C === s;
  }
  let { use: o = [] } = e, { class: u = "" } = e, { type: c = "text" } = e, { placeholder: f = " " } = e, { value: d = s } = e;
  const g = a(d);
  g && (d = "");
  let { files: b = null } = e, { dirty: v = !1 } = e, { invalid: p = !1 } = e, { updateInvalid: L = !0 } = e, { emptyValueNull: A = d === null } = e;
  g && A && (d = null);
  let { emptyValueUndefined: _ = d === void 0 } = e;
  g && _ && (d = void 0);
  let m, S = {}, R = {};
  Ne(() => {
    L && t(14, p = m.matches(":invalid"));
  });
  function h(C) {
    if (c === "file") {
      t(12, b = C.currentTarget.files);
      return;
    }
    if (C.currentTarget.value === "" && A) {
      t(11, d = null);
      return;
    }
    if (C.currentTarget.value === "" && _) {
      t(11, d = void 0);
      return;
    }
    switch (c) {
      case "number":
      case "range":
        t(11, d = Tr(C.currentTarget.value));
        break;
      default:
        t(11, d = C.currentTarget.value);
        break;
    }
  }
  function w(C) {
    (c === "file" || c === "range") && h(C), t(13, v = !0), L && t(14, p = m.matches(":invalid"));
  }
  function N(C) {
    var G;
    return C in S ? (G = S[C]) !== null && G !== void 0 ? G : null : j().getAttribute(C);
  }
  function M(C, G) {
    S[C] !== G && t(6, S[C] = G, S);
  }
  function y(C) {
    (!(C in S) || S[C] != null) && t(6, S[C] = void 0, S);
  }
  function B() {
    j().focus();
  }
  function H() {
    j().blur();
  }
  function j() {
    return m;
  }
  function ve(C) {
    Bt.call(this, n, C);
  }
  function Ce(C) {
    Bt.call(this, n, C);
  }
  function _e(C) {
    x[C ? "unshift" : "push"](() => {
      m = C, t(5, m);
    });
  }
  const q = (C) => c !== "file" && h(C);
  return n.$$set = (C) => {
    e = Z(Z({}, e), De(C)), t(10, i = ue(e, l)), "use" in C && t(0, o = C.use), "class" in C && t(1, u = C.class), "type" in C && t(2, c = C.type), "placeholder" in C && t(3, f = C.placeholder), "value" in C && t(11, d = C.value), "files" in C && t(12, b = C.files), "dirty" in C && t(13, v = C.dirty), "invalid" in C && t(14, p = C.invalid), "updateInvalid" in C && t(15, L = C.updateInvalid), "emptyValueNull" in C && t(16, A = C.emptyValueNull), "emptyValueUndefined" in C && t(17, _ = C.emptyValueUndefined);
  }, n.$$.update = () => {
    n.$$.dirty & /*type, valueProp, value*/
    2068 && (c === "file" ? (delete R.value, t(4, R), t(2, c), t(11, d)) : t(4, R.value = d ?? "", R));
  }, [
    o,
    u,
    c,
    f,
    R,
    m,
    S,
    r,
    h,
    w,
    i,
    d,
    b,
    v,
    p,
    L,
    A,
    _,
    N,
    M,
    y,
    B,
    H,
    j,
    ve,
    Ce,
    _e,
    q
  ];
}
class Ur extends oe {
  constructor(e) {
    super(), se(this, e, Or, Mr, re, {
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
function Br(n) {
  let e, t, l, i, r, s, a = [
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
      e = P("textarea"), ee(e, o);
    },
    m(u, c) {
      U(u, e, c), e.autofocus && e.focus(), n[21](e), fn(
        e,
        /*value*/
        n[0]
      ), r || (s = [
        J(i = ye.call(
          null,
          e,
          /*use*/
          n[1]
        )),
        J(
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
      ee(e, o = ae(a, [
        c & /*className*/
        4 && t !== (t = Q({
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
      ])), i && me(i.update) && c & /*use*/
      2 && i.update.call(
        null,
        /*use*/
        u[1]
      ), c & /*value*/
      1 && fn(
        e,
        /*value*/
        u[0]
      );
    },
    i: $,
    o: $,
    d(u) {
      u && O(e), n[21](null), r = !1, de(s);
    }
  };
}
function Fr(n, e, t) {
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
  const r = Te(Le());
  let { use: s = [] } = e, { class: a = "" } = e, { style: o = "" } = e, { value: u = "" } = e, { dirty: c = !1 } = e, { invalid: f = !1 } = e, { updateInvalid: d = !0 } = e, { resizable: g = !0 } = e, b, v = {};
  Ne(() => {
    d && t(11, f = b.matches(":invalid"));
  });
  function p() {
    t(10, c = !0), d && t(11, f = b.matches(":invalid"));
  }
  function L(y) {
    var B;
    return y in v ? (B = v[y]) !== null && B !== void 0 ? B : null : R().getAttribute(y);
  }
  function A(y, B) {
    v[y] !== B && t(6, v[y] = B, v);
  }
  function _(y) {
    (!(y in v) || v[y] != null) && t(6, v[y] = void 0, v);
  }
  function m() {
    R().focus();
  }
  function S() {
    R().blur();
  }
  function R() {
    return b;
  }
  function h(y) {
    Bt.call(this, n, y);
  }
  function w(y) {
    Bt.call(this, n, y);
  }
  function N(y) {
    x[y ? "unshift" : "push"](() => {
      b = y, t(5, b);
    });
  }
  function M() {
    u = this.value, t(0, u);
  }
  return n.$$set = (y) => {
    e = Z(Z({}, e), De(y)), t(9, i = ue(e, l)), "use" in y && t(1, s = y.use), "class" in y && t(2, a = y.class), "style" in y && t(3, o = y.style), "value" in y && t(0, u = y.value), "dirty" in y && t(10, c = y.dirty), "invalid" in y && t(11, f = y.invalid), "updateInvalid" in y && t(12, d = y.updateInvalid), "resizable" in y && t(4, g = y.resizable);
  }, [
    u,
    s,
    a,
    o,
    g,
    b,
    v,
    r,
    p,
    i,
    c,
    f,
    d,
    L,
    A,
    _,
    m,
    S,
    R,
    h,
    w,
    N,
    M
  ];
}
class Pr extends oe {
  constructor(e) {
    super(), se(this, e, Fr, Br, re, {
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
const Nr = (n) => ({}), Rn = (n) => ({}), Gr = (n) => ({}), En = (n) => ({}), Zr = (n) => ({}), Hn = (n) => ({}), qr = (n) => ({}), Dn = (n) => ({}), Wr = (n) => ({}), Mn = (n) => ({}), jr = (n) => ({}), Tn = (n) => ({}), Vr = (n) => ({}), On = (n) => ({}), zr = (n) => ({}), Un = (n) => ({}), Xr = (n) => ({}), Bn = (n) => ({}), Yr = (n) => ({}), Fn = (n) => ({}), Kr = (n) => ({}), Pn = (n) => ({}), Jr = (n) => ({}), Nn = (n) => ({});
function Qr(n) {
  let e, t, l, i, r, s, a, o, u, c, f, d, g, b;
  const v = (
    /*#slots*/
    n[56].label
  ), p = te(
    v,
    n,
    /*$$scope*/
    n[87],
    Mn
  );
  l = new Pt({
    props: {
      key: "SMUI:textfield:icon:leading",
      value: !0,
      $$slots: { default: [$r] },
      $$scope: { ctx: n }
    }
  });
  const L = (
    /*#slots*/
    n[56].default
  ), A = te(
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
      $$slots: { default: [ea] },
      $$scope: { ctx: n }
    }
  });
  const _ = (
    /*#slots*/
    n[56].ripple
  ), m = te(
    _,
    n,
    /*$$scope*/
    n[87],
    En
  );
  let S = [
    {
      class: o = Q({
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
  ], R = {};
  for (let h = 0; h < S.length; h += 1)
    R = Z(R, S[h]);
  return {
    c() {
      e = P("div"), p && p.c(), t = V(), K(l.$$.fragment), i = V(), A && A.c(), r = V(), K(s.$$.fragment), a = V(), m && m.c(), ee(e, R);
    },
    m(h, w) {
      U(h, e, w), p && p.m(e, null), F(e, t), X(l, e, null), F(e, i), A && A.m(e, null), F(e, r), X(s, e, null), F(e, a), m && m.m(e, null), n[82](e), d = !0, g || (b = [
        J(c = vt.call(null, e, {
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
        J(f = ye.call(
          null,
          e,
          /*use*/
          n[8]
        )),
        J(
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
    p(h, w) {
      p && p.p && (!d || w[2] & /*$$scope*/
      33554432) && le(
        p,
        v,
        h,
        /*$$scope*/
        h[87],
        d ? ne(
          v,
          /*$$scope*/
          h[87],
          w,
          Wr
        ) : ie(
          /*$$scope*/
          h[87]
        ),
        Mn
      );
      const N = {};
      w[2] & /*$$scope*/
      33554432 && (N.$$scope = { dirty: w, ctx: h }), l.$set(N), A && A.p && (!d || w[2] & /*$$scope*/
      33554432) && le(
        A,
        L,
        h,
        /*$$scope*/
        h[87],
        d ? ne(
          L,
          /*$$scope*/
          h[87],
          w,
          null
        ) : ie(
          /*$$scope*/
          h[87]
        ),
        null
      );
      const M = {};
      w[2] & /*$$scope*/
      33554432 && (M.$$scope = { dirty: w, ctx: h }), s.$set(M), m && m.p && (!d || w[2] & /*$$scope*/
      33554432) && le(
        m,
        _,
        h,
        /*$$scope*/
        h[87],
        d ? ne(
          _,
          /*$$scope*/
          h[87],
          w,
          Gr
        ) : ie(
          /*$$scope*/
          h[87]
        ),
        En
      ), ee(e, R = ae(S, [
        (!d || w[0] & /*className, disabled, textarea, variant, noLabel, invalid, internalClasses*/
        33673730 | w[1] & /*$$slots*/
        65536 && o !== (o = Q({
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
        (!d || w[0] & /*internalStyles, style*/
        67109888 && u !== (u = Object.entries(
          /*internalStyles*/
          h[26]
        ).map(Jn).concat([
          /*style*/
          h[10]
        ]).join(" "))) && { style: u },
        w[1] & /*$$restProps*/
        32768 && ft(
          /*$$restProps*/
          h[46],
          ["input$", "label$", "ripple$", "outline$", "helperLine$"]
        )
      ])), c && me(c.update) && w[0] & /*ripple*/
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
      }), f && me(f.update) && w[0] & /*use*/
      256 && f.update.call(
        null,
        /*use*/
        h[8]
      );
    },
    i(h) {
      d || (k(p, h), k(l.$$.fragment, h), k(A, h), k(s.$$.fragment, h), k(m, h), d = !0);
    },
    o(h) {
      E(p, h), E(l.$$.fragment, h), E(A, h), E(s.$$.fragment, h), E(m, h), d = !1;
    },
    d(h) {
      h && O(e), p && p.d(h), Y(l), A && A.d(h), Y(s), m && m.d(h), n[82](null), g = !1, de(b);
    }
  };
}
function xr(n) {
  let e, t, l, i, r, s, a, o, u, c, f, d, g, b, v, p, L, A, _ = !/*textarea*/
  n[14] && /*variant*/
  n[15] !== "outlined" && Gn(n), m = (
    /*textarea*/
    (n[14] || /*variant*/
    n[15] === "outlined") && Wn(n)
  );
  i = new Pt({
    props: {
      key: "SMUI:textfield:icon:leading",
      value: !0,
      $$slots: { default: [ia] },
      $$scope: { ctx: n }
    }
  });
  const S = (
    /*#slots*/
    n[56].default
  ), R = te(
    S,
    n,
    /*$$scope*/
    n[87],
    null
  ), h = [aa, ra], w = [];
  function N(H, j) {
    return (
      /*textarea*/
      H[14] && typeof /*value*/
      H[0] == "string" ? 0 : 1
    );
  }
  a = N(n), o = w[a] = h[a](n), c = new Pt({
    props: {
      key: "SMUI:textfield:icon:leading",
      value: !1,
      $$slots: { default: [ua] },
      $$scope: { ctx: n }
    }
  });
  let M = !/*textarea*/
  n[14] && /*variant*/
  n[15] !== "outlined" && /*ripple*/
  n[11] && Xn(n), y = [
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
  ], B = {};
  for (let H = 0; H < y.length; H += 1)
    B = Z(B, y[H]);
  return {
    c() {
      e = P("label"), _ && _.c(), t = V(), m && m.c(), l = V(), K(i.$$.fragment), r = V(), R && R.c(), s = V(), o.c(), u = V(), K(c.$$.fragment), f = V(), M && M.c(), ee(e, B);
    },
    m(H, j) {
      U(H, e, j), _ && _.m(e, null), F(e, t), m && m.m(e, null), F(e, l), X(i, e, null), F(e, r), R && R.m(e, null), F(e, s), w[a].m(e, null), F(e, u), X(c, e, null), F(e, f), M && M.m(e, null), n[78](e), p = !0, L || (A = [
        J(b = vt.call(null, e, {
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
        J(v = ye.call(
          null,
          e,
          /*use*/
          n[8]
        )),
        J(
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
    p(H, j) {
      !/*textarea*/
      H[14] && /*variant*/
      H[15] !== "outlined" ? _ ? (_.p(H, j), j[0] & /*textarea, variant*/
      49152 && k(_, 1)) : (_ = Gn(H), _.c(), k(_, 1), _.m(e, t)) : _ && (ce(), E(_, 1, 1, () => {
        _ = null;
      }), fe()), /*textarea*/
      H[14] || /*variant*/
      H[15] === "outlined" ? m ? (m.p(H, j), j[0] & /*textarea, variant*/
      49152 && k(m, 1)) : (m = Wn(H), m.c(), k(m, 1), m.m(e, l)) : m && (ce(), E(m, 1, 1, () => {
        m = null;
      }), fe());
      const ve = {};
      j[2] & /*$$scope*/
      33554432 && (ve.$$scope = { dirty: j, ctx: H }), i.$set(ve), R && R.p && (!p || j[2] & /*$$scope*/
      33554432) && le(
        R,
        S,
        H,
        /*$$scope*/
        H[87],
        p ? ne(
          S,
          /*$$scope*/
          H[87],
          j,
          null
        ) : ie(
          /*$$scope*/
          H[87]
        ),
        null
      );
      let Ce = a;
      a = N(H), a === Ce ? w[a].p(H, j) : (ce(), E(w[Ce], 1, 1, () => {
        w[Ce] = null;
      }), fe(), o = w[a], o ? o.p(H, j) : (o = w[a] = h[a](H), o.c()), k(o, 1), o.m(e, u));
      const _e = {};
      j[2] & /*$$scope*/
      33554432 && (_e.$$scope = { dirty: j, ctx: H }), c.$set(_e), !/*textarea*/
      H[14] && /*variant*/
      H[15] !== "outlined" && /*ripple*/
      H[11] ? M ? (M.p(H, j), j[0] & /*textarea, variant, ripple*/
      51200 && k(M, 1)) : (M = Xn(H), M.c(), k(M, 1), M.m(e, null)) : M && (ce(), E(M, 1, 1, () => {
        M = null;
      }), fe()), ee(e, B = ae(y, [
        (!p || j[0] & /*className, disabled, textarea, variant, noLabel, label, focused, value, withLeadingIcon, withTrailingIcon, invalid, internalClasses*/
        314823171 | j[1] & /*$$slots*/
        65536 && d !== (d = Q({
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
        (!p || j[0] & /*internalStyles, style*/
        67109888 && g !== (g = Object.entries(
          /*internalStyles*/
          H[26]
        ).map(Kn).concat([
          /*style*/
          H[10]
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
          H[46],
          ["input$", "label$", "ripple$", "outline$", "helperLine$"]
        )
      ])), b && me(b.update) && j[0] & /*textarea, variant*/
      49152 | j[1] & /*inputElement*/
      4 && b.update.call(null, {
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
      }), v && me(v.update) && j[0] & /*use*/
      256 && v.update.call(
        null,
        /*use*/
        H[8]
      );
    },
    i(H) {
      p || (k(_), k(m), k(i.$$.fragment, H), k(R, H), k(o), k(c.$$.fragment, H), k(M), p = !0);
    },
    o(H) {
      E(_), E(m), E(i.$$.fragment, H), E(R, H), E(o), E(c.$$.fragment, H), E(M), p = !1;
    },
    d(H) {
      H && O(e), _ && _.d(), m && m.d(), Y(i), R && R.d(H), w[a].d(), Y(c), M && M.d(), n[78](null), L = !1, de(A);
    }
  };
}
function $r(n) {
  let e;
  const t = (
    /*#slots*/
    n[56].leadingIcon
  ), l = te(
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
      33554432) && le(
        l,
        t,
        i,
        /*$$scope*/
        i[87],
        e ? ne(
          t,
          /*$$scope*/
          i[87],
          r,
          qr
        ) : ie(
          /*$$scope*/
          i[87]
        ),
        Dn
      );
    },
    i(i) {
      e || (k(l, i), e = !0);
    },
    o(i) {
      E(l, i), e = !1;
    },
    d(i) {
      l && l.d(i);
    }
  };
}
function ea(n) {
  let e;
  const t = (
    /*#slots*/
    n[56].trailingIcon
  ), l = te(
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
      33554432) && le(
        l,
        t,
        i,
        /*$$scope*/
        i[87],
        e ? ne(
          t,
          /*$$scope*/
          i[87],
          r,
          Zr
        ) : ie(
          /*$$scope*/
          i[87]
        ),
        Hn
      );
    },
    i(i) {
      e || (k(l, i), e = !0);
    },
    o(i) {
      E(l, i), e = !1;
    },
    d(i) {
      l && l.d(i);
    }
  };
}
function Gn(n) {
  let e, t, l, i = (
    /*variant*/
    n[15] === "filled" && Zn()
  ), r = !/*noLabel*/
  n[16] && /*label*/
  (n[17] != null || /*$$slots*/
  n[47].label) && qn(n);
  return {
    c() {
      i && i.c(), e = V(), r && r.c(), t = we();
    },
    m(s, a) {
      i && i.m(s, a), U(s, e, a), r && r.m(s, a), U(s, t, a), l = !0;
    },
    p(s, a) {
      /*variant*/
      s[15] === "filled" ? i || (i = Zn(), i.c(), i.m(e.parentNode, e)) : i && (i.d(1), i = null), !/*noLabel*/
      s[16] && /*label*/
      (s[17] != null || /*$$slots*/
      s[47].label) ? r ? (r.p(s, a), a[0] & /*noLabel, label*/
      196608 | a[1] & /*$$slots*/
      65536 && k(r, 1)) : (r = qn(s), r.c(), k(r, 1), r.m(t.parentNode, t)) : r && (ce(), E(r, 1, 1, () => {
        r = null;
      }), fe());
    },
    i(s) {
      l || (k(r), l = !0);
    },
    o(s) {
      E(r), l = !1;
    },
    d(s) {
      s && (O(e), O(t)), i && i.d(s), r && r.d(s);
    }
  };
}
function Zn(n) {
  let e;
  return {
    c() {
      e = P("span"), T(e, "class", "mdc-text-field__ripple");
    },
    m(t, l) {
      U(t, e, l);
    },
    d(t) {
      t && O(e);
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
    Re(
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
  return e = new Ml({ props: i }), n[57](e), {
    c() {
      K(e.$$.fragment);
    },
    m(r, s) {
      X(e, r, s), t = !0;
    },
    p(r, s) {
      const a = s[0] & /*focused, value, required*/
      268443649 | s[1] & /*$$restProps*/
      32768 ? ae(l, [
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
        32768 && Ae(Re(
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
      t || (k(e.$$.fragment, r), t = !0);
    },
    o(r) {
      E(e.$$.fragment, r), t = !1;
    },
    d(r) {
      n[57](null), Y(e, r);
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
  ), r = te(
    i,
    n,
    /*$$scope*/
    n[87],
    Nn
  );
  return {
    c() {
      t = ke(e), r && r.c();
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
      )) + "") && Pe(t, e), r && r.p && (!l || a[2] & /*$$scope*/
      33554432) && le(
        r,
        i,
        s,
        /*$$scope*/
        s[87],
        l ? ne(
          i,
          /*$$scope*/
          s[87],
          a,
          Jr
        ) : ie(
          /*$$scope*/
          s[87]
        ),
        Nn
      );
    },
    i(s) {
      l || (k(r, s), l = !0);
    },
    o(s) {
      E(r, s), l = !1;
    },
    d(s) {
      s && O(t), r && r.d(s);
    }
  };
}
function Wn(n) {
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
    Re(
      /*$$restProps*/
      n[46],
      "outline$"
    )
  ];
  let i = {
    $$slots: { default: [la] },
    $$scope: { ctx: n }
  };
  for (let r = 0; r < l.length; r += 1)
    i = Z(i, l[r]);
  return e = new kr({ props: i }), n[59](e), {
    c() {
      K(e.$$.fragment);
    },
    m(r, s) {
      X(e, r, s), t = !0;
    },
    p(r, s) {
      const a = s[0] & /*noLabel, label*/
      196608 | s[1] & /*$$slots, $$restProps*/
      98304 ? ae(l, [
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
        32768 && Ae(Re(
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
      t || (k(e.$$.fragment, r), t = !0);
    },
    o(r) {
      E(e.$$.fragment, r), t = !1;
    },
    d(r) {
      n[59](null), Y(e, r);
    }
  };
}
function jn(n) {
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
    Re(
      /*$$restProps*/
      n[46],
      "label$"
    )
  ];
  let i = {
    $$slots: { default: [na] },
    $$scope: { ctx: n }
  };
  for (let r = 0; r < l.length; r += 1)
    i = Z(i, l[r]);
  return e = new Ml({ props: i }), n[58](e), {
    c() {
      K(e.$$.fragment);
    },
    m(r, s) {
      X(e, r, s), t = !0;
    },
    p(r, s) {
      const a = s[0] & /*focused, value, required*/
      268443649 | s[1] & /*$$restProps*/
      32768 ? ae(l, [
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
        32768 && Ae(Re(
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
      t || (k(e.$$.fragment, r), t = !0);
    },
    o(r) {
      E(e.$$.fragment, r), t = !1;
    },
    d(r) {
      n[58](null), Y(e, r);
    }
  };
}
function na(n) {
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
  ), r = te(
    i,
    n,
    /*$$scope*/
    n[87],
    Pn
  );
  return {
    c() {
      t = ke(e), r && r.c();
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
      )) + "") && Pe(t, e), r && r.p && (!l || a[2] & /*$$scope*/
      33554432) && le(
        r,
        i,
        s,
        /*$$scope*/
        s[87],
        l ? ne(
          i,
          /*$$scope*/
          s[87],
          a,
          Kr
        ) : ie(
          /*$$scope*/
          s[87]
        ),
        Pn
      );
    },
    i(s) {
      l || (k(r, s), l = !0);
    },
    o(s) {
      E(r, s), l = !1;
    },
    d(s) {
      s && O(t), r && r.d(s);
    }
  };
}
function la(n) {
  let e, t, l = !/*noLabel*/
  n[16] && /*label*/
  (n[17] != null || /*$$slots*/
  n[47].label) && jn(n);
  return {
    c() {
      l && l.c(), e = we();
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
      65536 && k(l, 1)) : (l = jn(i), l.c(), k(l, 1), l.m(e.parentNode, e)) : l && (ce(), E(l, 1, 1, () => {
        l = null;
      }), fe());
    },
    i(i) {
      t || (k(l), t = !0);
    },
    o(i) {
      E(l), t = !1;
    },
    d(i) {
      i && O(e), l && l.d(i);
    }
  };
}
function ia(n) {
  let e;
  const t = (
    /*#slots*/
    n[56].leadingIcon
  ), l = te(
    t,
    n,
    /*$$scope*/
    n[87],
    Fn
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
      33554432) && le(
        l,
        t,
        i,
        /*$$scope*/
        i[87],
        e ? ne(
          t,
          /*$$scope*/
          i[87],
          r,
          Yr
        ) : ie(
          /*$$scope*/
          i[87]
        ),
        Fn
      );
    },
    i(i) {
      e || (k(l, i), e = !0);
    },
    o(i) {
      E(l, i), e = !1;
    },
    d(i) {
      l && l.d(i);
    }
  };
}
function ra(n) {
  let e, t, l, i, r, s, a, o, u, c;
  const f = (
    /*#slots*/
    n[56].prefix
  ), d = te(
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
    Re(
      /*$$restProps*/
      n[46],
      "input$"
    )
  ];
  function v(h) {
    n[69](h);
  }
  function p(h) {
    n[70](h);
  }
  function L(h) {
    n[71](h);
  }
  function A(h) {
    n[72](h);
  }
  let _ = {};
  for (let h = 0; h < b.length; h += 1)
    _ = Z(_, b[h]);
  /*value*/
  n[0] !== void 0 && (_.value = /*value*/
  n[0]), /*files*/
  n[3] !== void 0 && (_.files = /*files*/
  n[3]), /*dirty*/
  n[4] !== void 0 && (_.dirty = /*dirty*/
  n[4]), /*invalid*/
  n[1] !== void 0 && (_.invalid = /*invalid*/
  n[1]), l = new Ur({ props: _ }), n[68](l), x.push(() => Ye(l, "value", v)), x.push(() => Ye(l, "files", p)), x.push(() => Ye(l, "dirty", L)), x.push(() => Ye(l, "invalid", A)), l.$on(
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
  const S = (
    /*#slots*/
    n[56].suffix
  ), R = te(
    S,
    n,
    /*$$scope*/
    n[87],
    On
  );
  return {
    c() {
      d && d.c(), e = V(), g && g.c(), t = V(), K(l.$$.fragment), o = V(), m && m.c(), u = V(), R && R.c();
    },
    m(h, w) {
      d && d.m(h, w), U(h, e, w), g && g.m(h, w), U(h, t, w), X(l, h, w), U(h, o, w), m && m.m(h, w), U(h, u, w), R && R.m(h, w), c = !0;
    },
    p(h, w) {
      d && d.p && (!c || w[2] & /*$$scope*/
      33554432) && le(
        d,
        f,
        h,
        /*$$scope*/
        h[87],
        c ? ne(
          f,
          /*$$scope*/
          h[87],
          w,
          zr
        ) : ie(
          /*$$scope*/
          h[87]
        ),
        Un
      ), /*prefix*/
      h[20] != null ? g ? (g.p(h, w), w[0] & /*prefix*/
      1048576 && k(g, 1)) : (g = Vn(h), g.c(), k(g, 1), g.m(t.parentNode, t)) : g && (ce(), E(g, 1, 1, () => {
        g = null;
      }), fe());
      const N = w[0] & /*type, disabled, required, updateInvalid, helperId, noLabel, label*/
      135213056 | w[1] & /*$$restProps*/
      32768 ? ae(b, [
        w[0] & /*type*/
        262144 && { type: (
          /*type*/
          h[18]
        ) },
        w[0] & /*disabled*/
        4096 && { disabled: (
          /*disabled*/
          h[12]
        ) },
        w[0] & /*required*/
        8192 && { required: (
          /*required*/
          h[13]
        ) },
        w[0] & /*updateInvalid*/
        524288 && { updateInvalid: (
          /*updateInvalid*/
          h[19]
        ) },
        w[0] & /*helperId*/
        134217728 && { "aria-controls": (
          /*helperId*/
          h[27]
        ) },
        w[0] & /*helperId*/
        134217728 && { "aria-describedby": (
          /*helperId*/
          h[27]
        ) },
        w[0] & /*noLabel, label*/
        196608 && Ae(
          /*noLabel*/
          h[16] && /*label*/
          h[17] != null ? { placeholder: (
            /*label*/
            h[17]
          ) } : {}
        ),
        w[1] & /*$$restProps*/
        32768 && Ae(Re(
          /*$$restProps*/
          h[46],
          "input$"
        ))
      ]) : {};
      !i && w[0] & /*value*/
      1 && (i = !0, N.value = /*value*/
      h[0], Xe(() => i = !1)), !r && w[0] & /*files*/
      8 && (r = !0, N.files = /*files*/
      h[3], Xe(() => r = !1)), !s && w[0] & /*dirty*/
      16 && (s = !0, N.dirty = /*dirty*/
      h[4], Xe(() => s = !1)), !a && w[0] & /*invalid*/
      2 && (a = !0, N.invalid = /*invalid*/
      h[1], Xe(() => a = !1)), l.$set(N), /*suffix*/
      h[21] != null ? m ? (m.p(h, w), w[0] & /*suffix*/
      2097152 && k(m, 1)) : (m = zn(h), m.c(), k(m, 1), m.m(u.parentNode, u)) : m && (ce(), E(m, 1, 1, () => {
        m = null;
      }), fe()), R && R.p && (!c || w[2] & /*$$scope*/
      33554432) && le(
        R,
        S,
        h,
        /*$$scope*/
        h[87],
        c ? ne(
          S,
          /*$$scope*/
          h[87],
          w,
          Vr
        ) : ie(
          /*$$scope*/
          h[87]
        ),
        On
      );
    },
    i(h) {
      c || (k(d, h), k(g), k(l.$$.fragment, h), k(m), k(R, h), c = !0);
    },
    o(h) {
      E(d, h), E(g), E(l.$$.fragment, h), E(m), E(R, h), c = !1;
    },
    d(h) {
      h && (O(e), O(t), O(o), O(u)), d && d.d(h), g && g.d(h), n[68](null), Y(l, h), m && m.d(h), R && R.d(h);
    }
  };
}
function aa(n) {
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
    Re(
      /*$$restProps*/
      n[46],
      "input$"
    )
  ];
  function c(p) {
    n[61](p);
  }
  function f(p) {
    n[62](p);
  }
  function d(p) {
    n[63](p);
  }
  let g = {};
  for (let p = 0; p < u.length; p += 1)
    g = Z(g, u[p]);
  /*value*/
  n[0] !== void 0 && (g.value = /*value*/
  n[0]), /*dirty*/
  n[4] !== void 0 && (g.dirty = /*dirty*/
  n[4]), /*invalid*/
  n[1] !== void 0 && (g.invalid = /*invalid*/
  n[1]), t = new Pr({ props: g }), n[60](t), x.push(() => Ye(t, "value", c)), x.push(() => Ye(t, "dirty", f)), x.push(() => Ye(t, "invalid", d)), t.$on(
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
  ), v = te(
    b,
    n,
    /*$$scope*/
    n[87],
    Bn
  );
  return {
    c() {
      e = P("span"), K(t.$$.fragment), s = V(), v && v.c(), T(e, "class", a = Q({
        "mdc-text-field__resizer": !("input$resizable" in /*$$restProps*/
        n[46]) || /*$$restProps*/
        n[46].input$resizable
      }));
    },
    m(p, L) {
      U(p, e, L), X(t, e, null), F(e, s), v && v.m(e, null), o = !0;
    },
    p(p, L) {
      const A = L[0] & /*disabled, required, updateInvalid, helperId*/
      134754304 | L[1] & /*$$restProps*/
      32768 ? ae(u, [
        L[0] & /*disabled*/
        4096 && { disabled: (
          /*disabled*/
          p[12]
        ) },
        L[0] & /*required*/
        8192 && { required: (
          /*required*/
          p[13]
        ) },
        L[0] & /*updateInvalid*/
        524288 && { updateInvalid: (
          /*updateInvalid*/
          p[19]
        ) },
        L[0] & /*helperId*/
        134217728 && { "aria-controls": (
          /*helperId*/
          p[27]
        ) },
        L[0] & /*helperId*/
        134217728 && { "aria-describedby": (
          /*helperId*/
          p[27]
        ) },
        L[1] & /*$$restProps*/
        32768 && Ae(Re(
          /*$$restProps*/
          p[46],
          "input$"
        ))
      ]) : {};
      !l && L[0] & /*value*/
      1 && (l = !0, A.value = /*value*/
      p[0], Xe(() => l = !1)), !i && L[0] & /*dirty*/
      16 && (i = !0, A.dirty = /*dirty*/
      p[4], Xe(() => i = !1)), !r && L[0] & /*invalid*/
      2 && (r = !0, A.invalid = /*invalid*/
      p[1], Xe(() => r = !1)), t.$set(A), v && v.p && (!o || L[2] & /*$$scope*/
      33554432) && le(
        v,
        b,
        p,
        /*$$scope*/
        p[87],
        o ? ne(
          b,
          /*$$scope*/
          p[87],
          L,
          Xr
        ) : ie(
          /*$$scope*/
          p[87]
        ),
        Bn
      ), (!o || L[1] & /*$$restProps*/
      32768 && a !== (a = Q({
        "mdc-text-field__resizer": !("input$resizable" in /*$$restProps*/
        p[46]) || /*$$restProps*/
        p[46].input$resizable
      }))) && T(e, "class", a);
    },
    i(p) {
      o || (k(t.$$.fragment, p), k(v, p), o = !0);
    },
    o(p) {
      E(t.$$.fragment, p), E(v, p), o = !1;
    },
    d(p) {
      p && O(e), n[60](null), Y(t), v && v.d(p);
    }
  };
}
function Vn(n) {
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
      i[0] & /*prefix*/
      1048576 | i[2] & /*$$scope*/
      33554432 && (r.$$scope = { dirty: i, ctx: l }), e.$set(r);
    },
    i(l) {
      t || (k(e.$$.fragment, l), t = !0);
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
      e = ke(
        /*prefix*/
        n[20]
      );
    },
    m(t, l) {
      U(t, e, l);
    },
    p(t, l) {
      l[0] & /*prefix*/
      1048576 && Pe(
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
  return e = new Dr({
    props: {
      $$slots: { default: [oa] },
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
      t || (k(e.$$.fragment, l), t = !0);
    },
    o(l) {
      E(e.$$.fragment, l), t = !1;
    },
    d(l) {
      Y(e, l);
    }
  };
}
function oa(n) {
  let e;
  return {
    c() {
      e = ke(
        /*suffix*/
        n[21]
      );
    },
    m(t, l) {
      U(t, e, l);
    },
    p(t, l) {
      l[0] & /*suffix*/
      2097152 && Pe(
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
function ua(n) {
  let e;
  const t = (
    /*#slots*/
    n[56].trailingIcon
  ), l = te(
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
      33554432) && le(
        l,
        t,
        i,
        /*$$scope*/
        i[87],
        e ? ne(
          t,
          /*$$scope*/
          i[87],
          r,
          jr
        ) : ie(
          /*$$scope*/
          i[87]
        ),
        Tn
      );
    },
    i(i) {
      e || (k(l, i), e = !0);
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
  const l = [Re(
    /*$$restProps*/
    n[46],
    "ripple$"
  )];
  let i = {};
  for (let r = 0; r < l.length; r += 1)
    i = Z(i, l[r]);
  return e = new Ir({ props: i }), n[77](e), {
    c() {
      K(e.$$.fragment);
    },
    m(r, s) {
      X(e, r, s), t = !0;
    },
    p(r, s) {
      const a = s[1] & /*$$restProps*/
      32768 ? ae(l, [Ae(Re(
        /*$$restProps*/
        r[46],
        "ripple$"
      ))]) : {};
      e.$set(a);
    },
    i(r) {
      t || (k(e.$$.fragment, r), t = !0);
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
  const l = [Re(
    /*$$restProps*/
    n[46],
    "helperLine$"
  )];
  let i = {
    $$slots: { default: [ca] },
    $$scope: { ctx: n }
  };
  for (let r = 0; r < l.length; r += 1)
    i = Z(i, l[r]);
  return e = new Er({ props: i }), e.$on(
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
      32768 ? ae(l, [Ae(Re(
        /*$$restProps*/
        r[46],
        "helperLine$"
      ))]) : {};
      s[2] & /*$$scope*/
      33554432 && (a.$$scope = { dirty: s, ctx: r }), e.$set(a);
    },
    i(r) {
      t || (k(e.$$.fragment, r), t = !0);
    },
    o(r) {
      E(e.$$.fragment, r), t = !1;
    },
    d(r) {
      Y(e, r);
    }
  };
}
function ca(n) {
  let e;
  const t = (
    /*#slots*/
    n[56].helper
  ), l = te(
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
      33554432) && le(
        l,
        t,
        i,
        /*$$scope*/
        i[87],
        e ? ne(
          t,
          /*$$scope*/
          i[87],
          r,
          Nr
        ) : ie(
          /*$$scope*/
          i[87]
        ),
        Rn
      );
    },
    i(i) {
      e || (k(l, i), e = !0);
    },
    o(i) {
      E(l, i), e = !1;
    },
    d(i) {
      l && l.d(i);
    }
  };
}
function fa(n) {
  let e, t, l, i, r;
  const s = [xr, Qr], a = [];
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
      t.c(), l = V(), u && u.c(), i = we();
    },
    m(c, f) {
      a[e].m(c, f), U(c, l, f), u && u.m(c, f), U(c, i, f), r = !0;
    },
    p(c, f) {
      t.p(c, f), /*$$slots*/
      c[47].helper ? u ? (u.p(c, f), f[1] & /*$$slots*/
      65536 && k(u, 1)) : (u = Yn(c), u.c(), k(u, 1), u.m(i.parentNode, i)) : u && (ce(), E(u, 1, 1, () => {
        u = null;
      }), fe());
    },
    i(c) {
      r || (k(t), k(u), r = !0);
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
function da(n, e, t) {
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
  const o = ln(s), { applyPassive: u } = El, c = Te(Le());
  let f = () => {
  };
  function d(I) {
    return I === f;
  }
  let { use: g = [] } = e, { class: b = "" } = e, { style: v = "" } = e, { ripple: p = !0 } = e, { disabled: L = !1 } = e, { required: A = !1 } = e, { textarea: _ = !1 } = e, { variant: m = _ ? "outlined" : "standard" } = e, { noLabel: S = !1 } = e, { label: R = void 0 } = e, { type: h = "text" } = e, { value: w = r.input$emptyValueUndefined ? void 0 : f } = e, { files: N = f } = e;
  const M = !d(w) || !d(N);
  d(w) && (w = void 0), d(N) && (N = null);
  let { invalid: y = f } = e, { updateInvalid: B = d(y) } = e;
  d(y) && (y = !1);
  let { dirty: H = !1 } = e, { prefix: j = void 0 } = e, { suffix: ve = void 0 } = e, { validateOnValueChange: Ce = B } = e, { useNativeValidation: _e = B } = e, { withLeadingIcon: q = f } = e, { withTrailingIcon: C = f } = e, { input: G = void 0 } = e, { floatingLabel: ge = void 0 } = e, { lineRipple: be = void 0 } = e, { notchedOutline: Ue = void 0 } = e, Ge, he, Ze = {}, ze = {}, Je, Qe = !1, kt = Oe("SMUI:addLayoutListener"), mt, gt, We = new Promise((I) => gt = I), xe, $e, it, et, pt = w;
  kt && (mt = kt(sn)), Ne(() => {
    if (t(54, he = new mr(
      {
        // getRootAdapterMethods_
        addClass: Lt,
        removeClass: St,
        hasClass: _t,
        registerTextFieldInteractionHandler: (I, Ie) => Rt().addEventListener(I, Ie),
        deregisterTextFieldInteractionHandler: (I, Ie) => Rt().removeEventListener(I, Ie),
        registerValidationAttributeChangeHandler: (I) => {
          const Ie = (Wt) => Wt.map((jt) => jt.attributeName).filter((jt) => jt), on = new MutationObserver((Wt) => {
            _e && I(Ie(Wt));
          }), mi = { attributes: !0 };
          return G && on.observe(G.getElement(), mi), on;
        },
        deregisterValidationAttributeChangeHandler: (I) => {
          I.disconnect();
        },
        // getInputAdapterMethods_
        getNativeInput: () => {
          var I;
          return (I = G == null ? void 0 : G.getElement()) !== null && I !== void 0 ? I : null;
        },
        setInputAttr: (I, Ie) => {
          G == null || G.addAttr(I, Ie);
        },
        removeInputAttr: (I) => {
          G == null || G.removeAttr(I);
        },
        isFocused: () => document.activeElement === (G == null ? void 0 : G.getElement()),
        registerInputInteractionHandler: (I, Ie) => {
          G == null || G.getElement().addEventListener(I, Ie, u());
        },
        deregisterInputInteractionHandler: (I, Ie) => {
          G == null || G.getElement().removeEventListener(I, Ie, u());
        },
        // getLabelAdapterMethods_
        floatLabel: (I) => ge && ge.float(I),
        getLabelWidth: () => ge ? ge.getWidth() : 0,
        hasLabel: () => !!ge,
        shakeLabel: (I) => ge && ge.shake(I),
        setLabelRequired: (I) => ge && ge.setRequired(I),
        // getLineRippleAdapterMethods_
        activateLineRipple: () => be && be.activate(),
        deactivateLineRipple: () => be && be.deactivate(),
        setLineRippleTransformOrigin: (I) => be && be.setRippleCenter(I),
        // getOutlineAdapterMethods_
        closeOutline: () => Ue && Ue.closeNotch(),
        hasOutline: () => !!Ue,
        notchOutline: (I) => Ue && Ue.notch(I)
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
      if (G == null)
        throw new Error("SMUI Textfield must be initialized with either a non-undefined initial value or an Input component.");
      he.init();
    } else
      wi().then(() => {
        if (G == null)
          throw new Error("SMUI Textfield must be initialized with either a non-undefined initial value or an Input component.");
        he.init();
      });
    return gt(), () => {
      he.destroy();
    };
  }), yt(() => {
    mt && mt();
  });
  function qt(I) {
    t(29, xe = I.detail);
  }
  function D(I) {
    t(30, $e = I.detail);
  }
  function W(I) {
    t(32, et = I.detail);
  }
  function Se(I) {
    t(27, Je = I.detail);
  }
  function wt(I) {
    t(31, it = I.detail);
  }
  function _t(I) {
    var Ie;
    return I in Ze ? (Ie = Ze[I]) !== null && Ie !== void 0 ? Ie : null : Rt().classList.contains(I);
  }
  function Lt(I) {
    Ze[I] || t(25, Ze[I] = !0, Ze);
  }
  function St(I) {
    (!(I in Ze) || Ze[I]) && t(25, Ze[I] = !1, Ze);
  }
  function Ul(I, Ie) {
    ze[I] != Ie && (Ie === "" || Ie == null ? (delete ze[I], t(26, ze)) : t(26, ze[I] = Ie, ze));
  }
  function Bl() {
    G == null || G.focus();
  }
  function Fl() {
    G == null || G.blur();
  }
  function sn() {
    if (he) {
      const I = he.shouldFloat;
      he.notchOutline(I);
    }
  }
  function Rt() {
    return Ge;
  }
  function Pl(I) {
    x[I ? "unshift" : "push"](() => {
      ge = I, t(5, ge);
    });
  }
  function Nl(I) {
    x[I ? "unshift" : "push"](() => {
      ge = I, t(5, ge);
    });
  }
  function Gl(I) {
    x[I ? "unshift" : "push"](() => {
      Ue = I, t(7, Ue);
    });
  }
  function Zl(I) {
    x[I ? "unshift" : "push"](() => {
      G = I, t(2, G);
    });
  }
  function ql(I) {
    w = I, t(0, w);
  }
  function Wl(I) {
    H = I, t(4, H);
  }
  function jl(I) {
    y = I, t(1, y), t(54, he), t(19, B);
  }
  const Vl = () => t(28, Qe = !1), zl = () => t(28, Qe = !0), Xl = (I) => pe(Ge, "blur", I), Yl = (I) => pe(Ge, "focus", I);
  function Kl(I) {
    x[I ? "unshift" : "push"](() => {
      G = I, t(2, G);
    });
  }
  function Jl(I) {
    w = I, t(0, w);
  }
  function Ql(I) {
    N = I, t(3, N);
  }
  function xl(I) {
    H = I, t(4, H);
  }
  function $l(I) {
    y = I, t(1, y), t(54, he), t(19, B);
  }
  const ei = () => t(28, Qe = !1), ti = () => t(28, Qe = !0), ni = (I) => pe(Ge, "blur", I), li = (I) => pe(Ge, "focus", I);
  function ii(I) {
    x[I ? "unshift" : "push"](() => {
      be = I, t(6, be);
    });
  }
  function ri(I) {
    x[I ? "unshift" : "push"](() => {
      Ge = I, t(24, Ge);
    });
  }
  const ai = () => t(29, xe = void 0), si = () => t(30, $e = void 0), oi = () => t(32, et = void 0);
  function ui(I) {
    x[I ? "unshift" : "push"](() => {
      Ge = I, t(24, Ge);
    });
  }
  const ci = () => t(29, xe = void 0), fi = () => t(30, $e = void 0), di = () => {
    t(27, Je = void 0), t(31, it = void 0);
  }, hi = () => t(32, et = void 0);
  return n.$$set = (I) => {
    e = Z(Z({}, e), De(I)), t(46, r = ue(e, i)), "use" in I && t(8, g = I.use), "class" in I && t(9, b = I.class), "style" in I && t(10, v = I.style), "ripple" in I && t(11, p = I.ripple), "disabled" in I && t(12, L = I.disabled), "required" in I && t(13, A = I.required), "textarea" in I && t(14, _ = I.textarea), "variant" in I && t(15, m = I.variant), "noLabel" in I && t(16, S = I.noLabel), "label" in I && t(17, R = I.label), "type" in I && t(18, h = I.type), "value" in I && t(0, w = I.value), "files" in I && t(3, N = I.files), "invalid" in I && t(1, y = I.invalid), "updateInvalid" in I && t(19, B = I.updateInvalid), "dirty" in I && t(4, H = I.dirty), "prefix" in I && t(20, j = I.prefix), "suffix" in I && t(21, ve = I.suffix), "validateOnValueChange" in I && t(48, Ce = I.validateOnValueChange), "useNativeValidation" in I && t(49, _e = I.useNativeValidation), "withLeadingIcon" in I && t(22, q = I.withLeadingIcon), "withTrailingIcon" in I && t(23, C = I.withTrailingIcon), "input" in I && t(2, G = I.input), "floatingLabel" in I && t(5, ge = I.floatingLabel), "lineRipple" in I && t(6, be = I.lineRipple), "notchedOutline" in I && t(7, Ue = I.notchedOutline), "$$scope" in I && t(87, a = I.$$scope);
  }, n.$$.update = () => {
    if (n.$$.dirty[0] & /*input*/
    4 && t(33, l = G && G.getElement()), n.$$.dirty[0] & /*invalid, updateInvalid*/
    524290 | n.$$.dirty[1] & /*instance*/
    8388608 && he && he.isValid() !== !y && (B ? t(1, y = !he.isValid()) : he.setValid(!y)), n.$$.dirty[1] & /*instance, validateOnValueChange*/
    8519680 && he && he.getValidateOnValueChange() !== Ce && he.setValidateOnValueChange(d(Ce) ? !1 : Ce), n.$$.dirty[1] & /*instance, useNativeValidation*/
    8650752 && he && he.setUseNativeValidation(d(_e) ? !0 : _e), n.$$.dirty[0] & /*disabled*/
    4096 | n.$$.dirty[1] & /*instance*/
    8388608 && he && he.setDisabled(L), n.$$.dirty[0] & /*value*/
    1 | n.$$.dirty[1] & /*instance, previousValue*/
    25165824 && he && M && pt !== w) {
      t(55, pt = w);
      const I = `${w}`;
      he.getValue() !== I && he.setValue(I);
    }
  }, [
    w,
    y,
    G,
    N,
    H,
    ge,
    be,
    Ue,
    g,
    b,
    v,
    p,
    L,
    A,
    _,
    m,
    S,
    R,
    h,
    B,
    j,
    ve,
    q,
    C,
    Ge,
    Ze,
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
    We,
    qt,
    D,
    W,
    Se,
    wt,
    Lt,
    St,
    Ul,
    r,
    o,
    Ce,
    _e,
    Bl,
    Fl,
    sn,
    Rt,
    he,
    pt,
    s,
    Pl,
    Nl,
    Gl,
    Zl,
    ql,
    Wl,
    jl,
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
    hi,
    a
  ];
}
class ha extends oe {
  constructor(e) {
    super(), se(
      this,
      e,
      da,
      fa,
      re,
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
He({
  class: "mdc-deprecated-list-item__text",
  tag: "span"
});
He({
  class: "mdc-deprecated-list-item__primary-text",
  tag: "span"
});
He({
  class: "mdc-deprecated-list-item__secondary-text",
  tag: "span"
});
function ma(n) {
  let e, t, l, i, r, s;
  const a = (
    /*#slots*/
    n[8].default
  ), o = te(
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
  ], c = {};
  for (let f = 0; f < u.length; f += 1)
    c = Z(c, u[f]);
  return {
    c() {
      e = P("span"), o && o.c(), ee(e, c);
    },
    m(f, d) {
      U(f, e, d), o && o.m(e, null), n[9](e), i = !0, r || (s = [
        J(l = ye.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        J(
          /*forwardEvents*/
          n[3].call(null, e)
        )
      ], r = !0);
    },
    p(f, [d]) {
      o && o.p && (!i || d & /*$$scope*/
      128) && le(
        o,
        a,
        f,
        /*$$scope*/
        f[7],
        i ? ne(
          a,
          /*$$scope*/
          f[7],
          d,
          null
        ) : ie(
          /*$$scope*/
          f[7]
        ),
        null
      ), ee(e, c = ae(u, [
        (!i || d & /*className*/
        2 && t !== (t = Q({
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
      ])), l && me(l.update) && d & /*use*/
      1 && l.update.call(
        null,
        /*use*/
        f[0]
      );
    },
    i(f) {
      i || (k(o, f), i = !0);
    },
    o(f) {
      E(o, f), i = !1;
    },
    d(f) {
      f && O(e), o && o.d(f), n[9](null), r = !1, de(s);
    }
  };
}
function ga(n, e, t) {
  const l = ["use", "class", "getElement"];
  let i = ue(e, l), { $$slots: r = {}, $$scope: s } = e;
  const a = Te(Le());
  let { use: o = [] } = e, { class: u = "" } = e, c, f = Oe("SMUI:list:graphic:menu-selection-group");
  function d() {
    return c;
  }
  function g(b) {
    x[b ? "unshift" : "push"](() => {
      c = b, t(2, c);
    });
  }
  return n.$$set = (b) => {
    e = Z(Z({}, e), De(b)), t(5, i = ue(e, l)), "use" in b && t(0, o = b.use), "class" in b && t(1, u = b.class), "$$scope" in b && t(7, s = b.$$scope);
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
class pa extends oe {
  constructor(e) {
    super(), se(this, e, ga, ma, re, { use: 0, class: 1, getElement: 6 });
  }
  get getElement() {
    return this.$$.ctx[6];
  }
}
He({
  class: "mdc-deprecated-list-item__meta",
  tag: "span"
});
He({
  class: "mdc-deprecated-list-group",
  tag: "div"
});
He({
  class: "mdc-deprecated-list-group__subheader",
  tag: "h3"
});
He({
  class: "mdc-menu__selection-group-icon",
  component: pa
});
He({
  class: "mdc-dialog__header",
  tag: "div",
  contexts: {
    "SMUI:icon-button:context": "dialog:header"
  }
});
He({
  class: "mdc-dialog__title",
  tag: "h2"
});
He({
  class: "mdc-dialog__content",
  tag: "div"
});
He({
  class: "mdc-dialog__actions",
  tag: "div",
  classMap: {
    "smui-dialog__actions--reversed": "SMUI:dialog:actions:reversed"
  },
  contexts: {
    "SMUI:button:context": "dialog:action"
  }
});
He({
  class: "smui-paper__content",
  tag: "div"
});
He({
  class: "smui-paper__title",
  tag: "h5"
});
He({
  class: "smui-paper__subtitle",
  tag: "h6"
});
function _a(n) {
  let e, t;
  const l = (
    /*#slots*/
    n[1].default
  ), i = te(
    l,
    n,
    /*$$scope*/
    n[0],
    null
  );
  return {
    c() {
      e = P("span"), i && i.c(), T(e, "class", "oscd-icon");
    },
    m(r, s) {
      U(r, e, s), i && i.m(e, null), t = !0;
    },
    p(r, [s]) {
      i && i.p && (!t || s & /*$$scope*/
      1) && le(
        i,
        l,
        r,
        /*$$scope*/
        r[0],
        t ? ne(
          l,
          /*$$scope*/
          r[0],
          s,
          null
        ) : ie(
          /*$$scope*/
          r[0]
        ),
        null
      );
    },
    i(r) {
      t || (k(i, r), t = !0);
    },
    o(r) {
      E(i, r), t = !1;
    },
    d(r) {
      r && O(e), i && i.d(r);
    }
  };
}
function ba(n, e, t) {
  let { $$slots: l = {}, $$scope: i } = e;
  return n.$$set = (r) => {
    "$$scope" in r && t(0, i = r.$$scope);
  }, [i, l];
}
class an extends oe {
  constructor(e) {
    super(), se(this, e, ba, _a, re, {});
  }
}
function va(n) {
  let e, t;
  return {
    c() {
      e = Fe("svg"), t = Fe("path"), T(t, "d", "M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z"), T(e, "xmlns", "http://www.w3.org/2000/svg"), T(e, "viewBox", "0 -960 960 960"), T(
        e,
        "style",
        /*svgStyles*/
        n[0]
      );
    },
    m(l, i) {
      U(l, e, i), F(e, t);
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
function Ca(n) {
  let e, t;
  return e = new an({
    props: {
      $$slots: { default: [va] },
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
      t || (k(e.$$.fragment, l), t = !0);
    },
    o(l) {
      E(e.$$.fragment, l), t = !1;
    },
    d(l) {
      Y(e, l);
    }
  };
}
function Ia(n, e, t) {
  let { svgStyles: l = "" } = e;
  return n.$$set = (i) => {
    "svgStyles" in i && t(0, l = i.svgStyles);
  }, [l];
}
class Aa extends oe {
  constructor(e) {
    super(), se(this, e, Ia, Ca, re, { svgStyles: 0 });
  }
}
function ya(n) {
  let e, t;
  return {
    c() {
      e = Fe("svg"), t = Fe("path"), T(t, "d", "M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"), T(e, "xmlns", "http://www.w3.org/2000/svg"), T(e, "viewBox", "0 -960 960 960"), T(e, "width", "24"), T(e, "height", "24"), T(e, "fill", "#004552");
    },
    m(l, i) {
      U(l, e, i), F(e, t);
    },
    p: $,
    i: $,
    o: $,
    d(l) {
      l && O(e);
    }
  };
}
class ka extends oe {
  constructor(e) {
    super(), se(this, e, null, ya, re, {});
  }
}
function wa(n) {
  let e, t;
  return {
    c() {
      e = Fe("svg"), t = Fe("path"), T(t, "d", "M480-280q17 0 28.5-11.5T520-320q0-17-11.5-28.5T480-360q-17 0-28.5 11.5T440-320q0 17 11.5 28.5T480-280Zm-40-160h80v-240h-80v240Zm40 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"), T(e, "xmlns", "http://www.w3.org/2000/svg"), T(e, "height", "24px"), T(e, "viewBox", "0 -960 960 960"), T(e, "width", "24px"), T(e, "fill", "#004552");
    },
    m(l, i) {
      U(l, e, i), F(e, t);
    },
    p: $,
    i: $,
    o: $,
    d(l) {
      l && O(e);
    }
  };
}
class La extends oe {
  constructor(e) {
    super(), se(this, e, null, wa, re, {});
  }
}
function Sa(n) {
  let e, t;
  return {
    c() {
      e = Fe("svg"), t = Fe("path"), T(t, "d", "m40-120 440-760 440 760H40Zm138-80h604L480-720 178-200Zm302-40q17 0 28.5-11.5T520-280q0-17-11.5-28.5T480-320q-17 0-28.5 11.5T440-280q0 17 11.5 28.5T480-240Zm-40-120h80v-200h-80v200Zm40-100Z"), T(e, "xmlns", "http://www.w3.org/2000/svg"), T(e, "height", "24px"), T(e, "viewBox", "0 -960 960 960"), T(e, "width", "24px"), T(e, "fill", "#004552");
    },
    m(l, i) {
      U(l, e, i), F(e, t);
    },
    p: $,
    i: $,
    o: $,
    d(l) {
      l && O(e);
    }
  };
}
class Ra extends oe {
  constructor(e) {
    super(), se(this, e, null, Sa, re, {});
  }
}
function Ea(n) {
  let e, t;
  return {
    c() {
      e = Fe("svg"), t = Fe("path"), T(t, "d", "m380-300 280-180-280-180v360ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"), T(e, "xmlns", "http://www.w3.org/2000/svg"), T(e, "viewBox", "0 -960 960 960"), T(
        e,
        "style",
        /*svgStyles*/
        n[0]
      );
    },
    m(l, i) {
      U(l, e, i), F(e, t);
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
function Ha(n) {
  let e, t;
  return e = new an({
    props: {
      $$slots: { default: [Ea] },
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
      t || (k(e.$$.fragment, l), t = !0);
    },
    o(l) {
      E(e.$$.fragment, l), t = !1;
    },
    d(l) {
      Y(e, l);
    }
  };
}
function Da(n, e, t) {
  let { svgStyles: l = "" } = e;
  return n.$$set = (i) => {
    "svgStyles" in i && t(0, l = i.svgStyles);
  }, [l];
}
class Ma extends oe {
  constructor(e) {
    super(), se(this, e, Da, Ha, re, { svgStyles: 0 });
  }
}
function Ta(n) {
  let e, t;
  return {
    c() {
      e = Fe("svg"), t = Fe("path"), T(t, "d", "M440-280h80v-240h-80v240Zm40-320q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0 520q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"), T(e, "xmlns", "http://www.w3.org/2000/svg"), T(e, "viewBox", "0 -960 960 960"), T(
        e,
        "style",
        /*svgStyles*/
        n[0]
      );
    },
    m(l, i) {
      U(l, e, i), F(e, t);
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
function Oa(n) {
  let e, t;
  return e = new an({
    props: {
      $$slots: { default: [Ta] },
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
      t || (k(e.$$.fragment, l), t = !0);
    },
    o(l) {
      E(e.$$.fragment, l), t = !1;
    },
    d(l) {
      Y(e, l);
    }
  };
}
function Ua(n, e, t) {
  let { svgStyles: l = "" } = e;
  return n.$$set = (i) => {
    "svgStyles" in i && t(0, l = i.svgStyles);
  }, [l];
}
class Ba extends oe {
  constructor(e) {
    super(), se(this, e, Ua, Oa, re, { svgStyles: 0 });
  }
}
function Fa(n) {
  let e, t, l, i;
  const r = (
    /*#slots*/
    n[7].default
  ), s = te(
    r,
    n,
    /*$$scope*/
    n[6],
    null
  );
  return {
    c() {
      e = P("span"), s && s.c(), Mt(e, "display", "inline-block");
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
      64) && le(
        s,
        r,
        a,
        /*$$scope*/
        a[6],
        t ? ne(
          r,
          /*$$scope*/
          a[6],
          o,
          null
        ) : ie(
          /*$$scope*/
          a[6]
        ),
        null
      );
    },
    i(a) {
      t || (k(s, a), t = !0);
    },
    o(a) {
      E(s, a), t = !1;
    },
    d(a) {
      a && O(e), s && s.d(a), n[8](null), l = !1, de(i);
    }
  };
}
function Pa(n, e, t) {
  let { $$slots: l = {}, $$scope: i } = e, { content: r = "" } = e, { hoverDelay: s = 300 } = e, { hideDelay: a = 500 } = e, o, u, c, f, d = { left: 0, top: 0, width: 0 };
  function g() {
    clearTimeout(u), d = c.getBoundingClientRect(), o = setTimeout(
      () => {
        v();
      },
      s
    );
  }
  function b() {
    clearTimeout(o), u = setTimeout(
      () => {
        p();
      },
      a
    );
  }
  function v() {
    p(), f = document.createElement("div"), f.setAttribute("role", "tooltip"), f.textContent = r, Object.assign(f.style, {
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
  function p() {
    f && f.parentNode && (f.parentNode.removeChild(f), f = null);
  }
  yt(() => {
    clearTimeout(o), clearTimeout(u), p();
  });
  function L(A) {
    x[A ? "unshift" : "push"](() => {
      c = A, t(0, c);
    });
  }
  return n.$$set = (A) => {
    "content" in A && t(3, r = A.content), "hoverDelay" in A && t(4, s = A.hoverDelay), "hideDelay" in A && t(5, a = A.hideDelay), "$$scope" in A && t(6, i = A.$$scope);
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
class Na extends oe {
  constructor(e) {
    super(), se(this, e, Pa, Fa, re, { content: 3, hoverDelay: 4, hideDelay: 5 });
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
var je = {
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
}, Be;
(function(n) {
  n.ASCENDING = "ascending", n.DESCENDING = "descending", n.NONE = "none", n.OTHER = "other";
})(Be || (Be = {}));
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
var Ga = (
  /** @class */
  function(n) {
    dt(e, n);
    function e(t) {
      return n.call(this, Me(Me({}, e.defaultAdapter), t)) || this;
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
      return rn(this, void 0, void 0, function() {
        return Mi(this, function(t) {
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
        s !== i && (this.adapter.removeClassNameByHeaderCellIndex(s, je.HEADER_CELL_SORTED), this.adapter.removeClassNameByHeaderCellIndex(s, je.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(s, nt.ARIA_SORT, Be.NONE), this.adapter.setSortStatusLabelByHeaderCellIndex(s, Be.NONE));
      this.adapter.setClassNameByHeaderCellIndex(i, je.HEADER_CELL_SORTED);
      var a = this.adapter.getAttributeByHeaderCellIndex(i, nt.ARIA_SORT), o = Be.NONE;
      a === Be.ASCENDING ? (this.adapter.setClassNameByHeaderCellIndex(i, je.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(i, nt.ARIA_SORT, Be.DESCENDING), o = Be.DESCENDING) : a === Be.DESCENDING ? (this.adapter.removeClassNameByHeaderCellIndex(i, je.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(i, nt.ARIA_SORT, Be.ASCENDING), o = Be.ASCENDING) : (this.adapter.setAttributeByHeaderCellIndex(i, nt.ARIA_SORT, Be.ASCENDING), o = Be.ASCENDING), this.adapter.setSortStatusLabelByHeaderCellIndex(i, o), this.adapter.notifySortAction({
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
      }), this.adapter.addClass(je.IN_PROGRESS);
    }, e.prototype.hideProgress = function() {
      this.adapter.removeClass(je.IN_PROGRESS);
    }, e.prototype.setHeaderRowCheckboxState = function() {
      this.adapter.getSelectedRowCount() === 0 ? (this.adapter.setHeaderRowCheckboxChecked(!1), this.adapter.setHeaderRowCheckboxIndeterminate(!1)) : this.adapter.getSelectedRowCount() === this.adapter.getRowCount() ? (this.adapter.setHeaderRowCheckboxChecked(!0), this.adapter.setHeaderRowCheckboxIndeterminate(!1)) : (this.adapter.setHeaderRowCheckboxIndeterminate(!0), this.adapter.setHeaderRowCheckboxChecked(!1));
    }, e.prototype.selectRowAtIndex = function(t, l) {
      l ? (this.adapter.addClassAtRowIndex(t, je.ROW_SELECTED), this.adapter.setAttributeAtRowIndex(t, nt.ARIA_SELECTED, "true")) : (this.adapter.removeClassAtRowIndex(t, je.ROW_SELECTED), this.adapter.setAttributeAtRowIndex(t, nt.ARIA_SELECTED, "false"));
    }, e;
  }(ht)
);
const Za = (n) => ({}), xn = (n) => ({}), qa = (n) => ({}), $n = (n) => ({});
function el(n) {
  let e, t, l, i, r;
  const s = (
    /*#slots*/
    n[36].progress
  ), a = te(
    s,
    n,
    /*$$scope*/
    n[35],
    $n
  );
  return {
    c() {
      e = P("div"), t = P("div"), l = V(), a && a.c(), T(t, "class", "mdc-data-table__scrim"), T(e, "class", "mdc-data-table__progress-indicator"), T(e, "style", i = Object.entries(
        /*progressIndicatorStyles*/
        n[13]
      ).map(tl).join(" "));
    },
    m(o, u) {
      U(o, e, u), F(e, t), F(e, l), a && a.m(e, null), r = !0;
    },
    p(o, u) {
      a && a.p && (!r || u[1] & /*$$scope*/
      16) && le(
        a,
        s,
        o,
        /*$$scope*/
        o[35],
        r ? ne(
          s,
          /*$$scope*/
          o[35],
          u,
          qa
        ) : ie(
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
      r || (k(a, o), r = !0);
    },
    o(o) {
      E(a, o), r = !1;
    },
    d(o) {
      o && O(e), a && a.d(o);
    }
  };
}
function Wa(n) {
  let e, t, l, i, r, s, a, o, u, c, f, d, g, b;
  const v = (
    /*#slots*/
    n[36].default
  ), p = te(
    v,
    n,
    /*$$scope*/
    n[35],
    null
  );
  let L = [
    {
      class: i = Q({
        [
          /*table$class*/
          n[6]
        ]: !0,
        "mdc-data-table__table": !0
      })
    },
    Re(
      /*$$restProps*/
      n[25],
      "table$"
    )
  ], A = {};
  for (let M = 0; M < L.length; M += 1)
    A = Z(A, L[M]);
  let _ = [
    {
      class: s = Q({
        [
          /*container$class*/
          n[4]
        ]: !0,
        "mdc-data-table__table-container": !0
      })
    },
    Re(
      /*$$restProps*/
      n[25],
      "container$"
    )
  ], m = {};
  for (let M = 0; M < _.length; M += 1)
    m = Z(m, _[M]);
  let S = (
    /*$$slots*/
    n[24].progress && el(n)
  );
  const R = (
    /*#slots*/
    n[36].paginate
  ), h = te(
    R,
    n,
    /*$$scope*/
    n[35],
    xn
  );
  let w = [
    {
      class: c = Q({
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
  ], N = {};
  for (let M = 0; M < w.length; M += 1)
    N = Z(N, w[M]);
  return {
    c() {
      e = P("div"), t = P("div"), l = P("table"), p && p.c(), o = V(), S && S.c(), u = V(), h && h.c(), ee(l, A), ee(t, m), ee(e, N);
    },
    m(M, y) {
      U(M, e, y), F(e, t), F(t, l), p && p.m(l, null), n[37](t), F(e, o), S && S.m(e, null), F(e, u), h && h.m(e, null), n[38](e), d = !0, g || (b = [
        J(r = ye.call(
          null,
          l,
          /*table$use*/
          n[5]
        )),
        J(a = ye.call(
          null,
          t,
          /*container$use*/
          n[3]
        )),
        J(f = ye.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        J(
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
    p(M, y) {
      p && p.p && (!d || y[1] & /*$$scope*/
      16) && le(
        p,
        v,
        M,
        /*$$scope*/
        M[35],
        d ? ne(
          v,
          /*$$scope*/
          M[35],
          y,
          null
        ) : ie(
          /*$$scope*/
          M[35]
        ),
        null
      ), ee(l, A = ae(L, [
        (!d || y[0] & /*table$class*/
        64 && i !== (i = Q({
          [
            /*table$class*/
            M[6]
          ]: !0,
          "mdc-data-table__table": !0
        }))) && { class: i },
        y[0] & /*$$restProps*/
        33554432 && Re(
          /*$$restProps*/
          M[25],
          "table$"
        )
      ])), r && me(r.update) && y[0] & /*table$use*/
      32 && r.update.call(
        null,
        /*table$use*/
        M[5]
      ), ee(t, m = ae(_, [
        (!d || y[0] & /*container$class*/
        16 && s !== (s = Q({
          [
            /*container$class*/
            M[4]
          ]: !0,
          "mdc-data-table__table-container": !0
        }))) && { class: s },
        y[0] & /*$$restProps*/
        33554432 && Re(
          /*$$restProps*/
          M[25],
          "container$"
        )
      ])), a && me(a.update) && y[0] & /*container$use*/
      8 && a.update.call(
        null,
        /*container$use*/
        M[3]
      ), /*$$slots*/
      M[24].progress ? S ? (S.p(M, y), y[0] & /*$$slots*/
      16777216 && k(S, 1)) : (S = el(M), S.c(), k(S, 1), S.m(e, u)) : S && (ce(), E(S, 1, 1, () => {
        S = null;
      }), fe()), h && h.p && (!d || y[1] & /*$$scope*/
      16) && le(
        h,
        R,
        M,
        /*$$scope*/
        M[35],
        d ? ne(
          R,
          /*$$scope*/
          M[35],
          y,
          Za
        ) : ie(
          /*$$scope*/
          M[35]
        ),
        xn
      ), ee(e, N = ae(w, [
        (!d || y[0] & /*className, stickyHeader, internalClasses*/
        4102 && c !== (c = Q({
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
        y[0] & /*$$restProps*/
        33554432 && ft(
          /*$$restProps*/
          M[25],
          ["container$", "table$"]
        )
      ])), f && me(f.update) && y[0] & /*use*/
      1 && f.update.call(
        null,
        /*use*/
        M[0]
      );
    },
    i(M) {
      d || (k(p, M), k(S), k(h, M), d = !0);
    },
    o(M) {
      E(p, M), E(S), E(h, M), d = !1;
    },
    d(M) {
      M && O(e), p && p.d(M), n[37](null), S && S.d(), h && h.d(M), n[38](null), g = !1, de(b);
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
  const c = ln(o), { closest: f } = Dl, d = Te(Le());
  let { use: g = [] } = e, { class: b = "" } = e, { stickyHeader: v = !1 } = e, { sortable: p = !1 } = e, { sort: L = null } = e, { sortDirection: A = "ascending" } = e, { sortAscendingAriaLabel: _ = "sorted, ascending" } = e, { sortDescendingAriaLabel: m = "sorted, descending" } = e, { container$use: S = [] } = e, { container$class: R = "" } = e, { table$use: h = [] } = e, { table$class: w = "" } = e, N, M, y, B, H, j = {}, ve = { height: "auto", top: "initial" }, Ce = Oe("SMUI:addLayoutListener"), _e, q = !1, C = Ot(!1);
  ut(n, C, (D) => t(34, r = D));
  let G = Ot(L);
  ut(n, G, (D) => t(45, a = D));
  let ge = Ot(A);
  ut(n, ge, (D) => t(44, s = D)), Ee("SMUI:checkbox:context", "data-table"), Ee("SMUI:linear-progress:context", "data-table"), Ee("SMUI:linear-progress:closed", C), Ee("SMUI:data-table:sortable", p), Ee("SMUI:data-table:sort", G), Ee("SMUI:data-table:sortDirection", ge), Ee("SMUI:data-table:sortAscendingAriaLabel", _), Ee("SMUI:data-table:sortDescendingAriaLabel", m), Ce && (_e = Ce(gt));
  let be;
  Ne(() => (t(7, M = new Ga({
    addClass: Ze,
    removeClass: ze,
    getHeaderCellElements: () => {
      var D;
      return (D = B == null ? void 0 : B.cells.map((W) => W.element)) !== null && D !== void 0 ? D : [];
    },
    getHeaderCellCount: () => {
      var D;
      return (D = B == null ? void 0 : B.cells.length) !== null && D !== void 0 ? D : 0;
    },
    getAttributeByHeaderCellIndex: (D, W) => {
      var Se;
      return (Se = B == null ? void 0 : B.orderedCells[D].getAttr(W)) !== null && Se !== void 0 ? Se : null;
    },
    setAttributeByHeaderCellIndex: (D, W, Se) => {
      B == null || B.orderedCells[D].addAttr(W, Se);
    },
    setClassNameByHeaderCellIndex: (D, W) => {
      B == null || B.orderedCells[D].addClass(W);
    },
    removeClassNameByHeaderCellIndex: (D, W) => {
      B == null || B.orderedCells[D].removeClass(W);
    },
    notifySortAction: (D) => {
      t(26, L = D.columnId), t(27, A = D.sortValue), pe(We(), "SMUIDataTable:sorted", D, void 0, !0);
    },
    getTableContainerHeight: () => y.getBoundingClientRect().height,
    getTableHeaderHeight: () => {
      const D = We().querySelector(".mdc-data-table__header-row");
      if (!D)
        throw new Error("MDCDataTable: Table header element not found.");
      return D.getBoundingClientRect().height;
    },
    setProgressIndicatorStyles: (D) => {
      t(13, ve = D);
    },
    addClassAtRowIndex: (D, W) => {
      H == null || H.orderedRows[D].addClass(W);
    },
    getRowCount: () => {
      var D;
      return (D = H == null ? void 0 : H.rows.length) !== null && D !== void 0 ? D : 0;
    },
    getRowElements: () => {
      var D;
      return (D = H == null ? void 0 : H.rows.map((W) => W.element)) !== null && D !== void 0 ? D : [];
    },
    getRowIdAtIndex: (D) => {
      var W;
      return (W = H == null ? void 0 : H.orderedRows[D].rowId) !== null && W !== void 0 ? W : null;
    },
    getRowIndexByChildElement: (D) => {
      var W;
      return (W = H == null ? void 0 : H.orderedRows.map((Se) => Se.element).indexOf(f(D, ".mdc-data-table__row"))) !== null && W !== void 0 ? W : -1;
    },
    getSelectedRowCount: () => {
      var D;
      return (D = H == null ? void 0 : H.rows.filter((W) => W.selected).length) !== null && D !== void 0 ? D : 0;
    },
    isCheckboxAtRowIndexChecked: (D) => {
      const W = H == null ? void 0 : H.orderedRows[D].checkbox;
      return W ? W.checked : !1;
    },
    isHeaderRowCheckboxChecked: () => {
      const D = B == null ? void 0 : B.checkbox;
      return D ? D.checked : !1;
    },
    isRowsSelectable: () => !!We().querySelector(".mdc-data-table__row-checkbox") || !!We().querySelector(".mdc-data-table__header-row-checkbox"),
    notifyRowSelectionChanged: (D) => {
      const W = H == null ? void 0 : H.orderedRows[D.rowIndex];
      W && pe(
        We(),
        "SMUIDataTable:rowSelectionChanged",
        {
          row: W.element,
          rowId: W.rowId,
          rowIndex: D.rowIndex,
          selected: D.selected
        },
        void 0,
        !0
      );
    },
    notifySelectedAll: () => {
      Je(!1), pe(We(), "SMUIDataTable:selectedAll", void 0, void 0, !0);
    },
    notifyUnselectedAll: () => {
      Je(!1), pe(We(), "SMUIDataTable:unselectedAll", void 0, void 0, !0);
    },
    notifyRowClick: (D) => {
      pe(We(), "SMUIDataTable:rowClick", D, void 0, !0);
    },
    registerHeaderRowCheckbox: () => {
    },
    // Handled automatically.
    registerRowCheckboxes: () => {
    },
    // Handled automatically.
    removeClassAtRowIndex: (D, W) => {
      H == null || H.orderedRows[D].removeClass(W);
    },
    setAttributeAtRowIndex: (D, W, Se) => {
      H == null || H.orderedRows[D].addAttr(W, Se);
    },
    setHeaderRowCheckboxChecked: (D) => {
      const W = B == null ? void 0 : B.checkbox;
      W && (W.checked = D);
    },
    setHeaderRowCheckboxIndeterminate: Je,
    setRowCheckboxCheckedAtIndex: (D, W) => {
      const Se = H == null ? void 0 : H.orderedRows[D].checkbox;
      Se && (Se.checked = W);
    },
    setSortStatusLabelByHeaderCellIndex: (D, W) => {
    }
    // Handled automatically.
  })), M.init(), M.layout(), t(14, q = !0), () => {
    M.destroy();
  })), yt(() => {
    _e && _e();
  });
  function Ue(D) {
    t(10, B = D.detail);
  }
  function Ge(D) {
    t(11, H = D.detail);
  }
  function he(D) {
    M && M.handleRowCheckboxChange(D);
  }
  function Ze(D) {
    j[D] || t(12, j[D] = !0, j);
  }
  function ze(D) {
    (!(D in j) || j[D]) && t(12, j[D] = !1, j);
  }
  function Je(D) {
    const W = B == null ? void 0 : B.checkbox;
    W && (W.indeterminate = D);
  }
  function Qe(D) {
    if (!M || !D.detail.target)
      return;
    const W = f(D.detail.target, ".mdc-data-table__header-cell--with-sort");
    W && mt(W);
  }
  function kt(D) {
    if (!M || !D.detail.target)
      return;
    const W = f(D.detail.target, ".mdc-data-table__row");
    W && M && M.handleRowClick({ rowId: D.detail.rowId, row: W });
  }
  function mt(D) {
    var W, Se;
    const wt = (W = B == null ? void 0 : B.orderedCells) !== null && W !== void 0 ? W : [], _t = wt.map((St) => St.element).indexOf(D);
    if (_t === -1)
      return;
    const Lt = (Se = wt[_t].columnId) !== null && Se !== void 0 ? Se : null;
    M.handleSortAction({ columnId: Lt, columnIndex: _t, headerCell: D });
  }
  function gt() {
    return M.layout();
  }
  function We() {
    return N;
  }
  function xe(D) {
    x[D ? "unshift" : "push"](() => {
      y = D, t(9, y);
    });
  }
  function $e(D) {
    x[D ? "unshift" : "push"](() => {
      N = D, t(8, N);
    });
  }
  const it = () => M && q && M.layout(), et = () => t(10, B = void 0), pt = () => t(11, H = void 0), qt = () => M && M.handleHeaderRowCheckboxChange();
  return n.$$set = (D) => {
    e = Z(Z({}, e), De(D)), t(25, i = ue(e, l)), "use" in D && t(0, g = D.use), "class" in D && t(1, b = D.class), "stickyHeader" in D && t(2, v = D.stickyHeader), "sortable" in D && t(28, p = D.sortable), "sort" in D && t(26, L = D.sort), "sortDirection" in D && t(27, A = D.sortDirection), "sortAscendingAriaLabel" in D && t(29, _ = D.sortAscendingAriaLabel), "sortDescendingAriaLabel" in D && t(30, m = D.sortDescendingAriaLabel), "container$use" in D && t(3, S = D.container$use), "container$class" in D && t(4, R = D.container$class), "table$use" in D && t(5, h = D.table$use), "table$class" in D && t(6, w = D.table$class), "$$scope" in D && t(35, u = D.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty[0] & /*sort*/
    67108864 && xt(G, a = L, a), n.$$.dirty[0] & /*sortDirection*/
    134217728 && xt(ge, s = A, s), n.$$.dirty[0] & /*instance*/
    128 | n.$$.dirty[1] & /*previousProgressClosed, $progressClosed*/
    12 && c.progress && M && be !== r && (t(33, be = r), r ? M.hideProgress() : M.showProgress());
  }, [
    g,
    b,
    v,
    S,
    R,
    h,
    w,
    M,
    N,
    y,
    B,
    H,
    j,
    ve,
    q,
    d,
    C,
    G,
    ge,
    Ue,
    Ge,
    he,
    Qe,
    kt,
    c,
    i,
    L,
    A,
    p,
    _,
    m,
    gt,
    We,
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
class Va extends oe {
  constructor(e) {
    super(), se(
      this,
      e,
      ja,
      Wa,
      re,
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
function za(n) {
  let e, t, l, i, r;
  const s = (
    /*#slots*/
    n[10].default
  ), a = te(
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
      e = P("thead"), a && a.c(), ee(e, u);
    },
    m(c, f) {
      U(c, e, f), a && a.m(e, null), n[11](e), l = !0, i || (r = [
        J(t = ye.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        J(
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
      512) && le(
        a,
        s,
        c,
        /*$$scope*/
        c[9],
        l ? ne(
          s,
          /*$$scope*/
          c[9],
          f,
          null
        ) : ie(
          /*$$scope*/
          c[9]
        ),
        null
      ), ee(e, u = ae(o, [f & /*$$restProps*/
      128 && /*$$restProps*/
      c[7]])), t && me(t.update) && f & /*use*/
      1 && t.update.call(
        null,
        /*use*/
        c[0]
      );
    },
    i(c) {
      l || (k(a, c), l = !0);
    },
    o(c) {
      E(a, c), l = !1;
    },
    d(c) {
      c && O(e), a && a.d(c), n[11](null), i = !1, de(r);
    }
  };
}
function Xa(n, e, t) {
  const l = ["use", "getElement"];
  let i = ue(e, l), { $$slots: r = {}, $$scope: s } = e;
  const a = Te(Le());
  let { use: o = [] } = e, u, c, f = [];
  const d = /* @__PURE__ */ new WeakMap();
  Ee("SMUI:data-table:row:header", !0), Ne(() => {
    const m = {
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
    return pe(L(), "SMUIDataTableHeader:mount", m), () => {
      pe(L(), "SMUIDataTableHeader:unmount", m);
    };
  });
  function g(m) {
    t(2, c = m.detail);
  }
  function b(m) {
    f.push(m.detail), d.set(m.detail.element, m.detail), m.stopPropagation();
  }
  function v(m) {
    const S = f.indexOf(m.detail);
    S !== -1 && (f.splice(S, 1), f = f), d.delete(m.detail.element), m.stopPropagation();
  }
  function p() {
    return [...L().querySelectorAll(".mdc-data-table__header-cell")].map((m) => d.get(m)).filter((m) => m && m._smui_data_table_header_cell_accessor);
  }
  function L() {
    return u;
  }
  function A(m) {
    x[m ? "unshift" : "push"](() => {
      u = m, t(1, u);
    });
  }
  const _ = () => t(2, c = void 0);
  return n.$$set = (m) => {
    e = Z(Z({}, e), De(m)), t(7, i = ue(e, l)), "use" in m && t(0, o = m.use), "$$scope" in m && t(9, s = m.$$scope);
  }, [
    o,
    u,
    c,
    a,
    g,
    b,
    v,
    i,
    L,
    s,
    r,
    A,
    _
  ];
}
class Ya extends oe {
  constructor(e) {
    super(), se(this, e, Xa, za, re, { use: 0, getElement: 8 });
  }
  get getElement() {
    return this.$$.ctx[8];
  }
}
function Ka(n) {
  let e, t, l, i, r, s;
  const a = (
    /*#slots*/
    n[9].default
  ), o = te(
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
  ], c = {};
  for (let f = 0; f < u.length; f += 1)
    c = Z(c, u[f]);
  return {
    c() {
      e = P("tbody"), o && o.c(), ee(e, c);
    },
    m(f, d) {
      U(f, e, d), o && o.m(e, null), n[10](e), i = !0, r || (s = [
        J(l = ye.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        J(
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
      256) && le(
        o,
        a,
        f,
        /*$$scope*/
        f[8],
        i ? ne(
          a,
          /*$$scope*/
          f[8],
          d,
          null
        ) : ie(
          /*$$scope*/
          f[8]
        ),
        null
      ), ee(e, c = ae(u, [
        (!i || d & /*className*/
        2 && t !== (t = Q({
          [
            /*className*/
            f[1]
          ]: !0,
          "mdc-data-table__content": !0
        }))) && { class: t },
        d & /*$$restProps*/
        64 && /*$$restProps*/
        f[6]
      ])), l && me(l.update) && d & /*use*/
      1 && l.update.call(
        null,
        /*use*/
        f[0]
      );
    },
    i(f) {
      i || (k(o, f), i = !0);
    },
    o(f) {
      E(o, f), i = !1;
    },
    d(f) {
      f && O(e), o && o.d(f), n[10](null), r = !1, de(s);
    }
  };
}
function Ja(n, e, t) {
  const l = ["use", "class", "getElement"];
  let i = ue(e, l), { $$slots: r = {}, $$scope: s } = e;
  const a = Te(Le());
  let { use: o = [] } = e, { class: u = "" } = e, c, f = [];
  const d = /* @__PURE__ */ new WeakMap();
  Ee("SMUI:data-table:row:header", !1), Ne(() => {
    const A = {
      get rows() {
        return f;
      },
      get orderedRows() {
        return v();
      }
    };
    return pe(p(), "SMUIDataTableBody:mount", A), () => {
      pe(p(), "SMUIDataTableBody:unmount", A);
    };
  });
  function g(A) {
    f.push(A.detail), d.set(A.detail.element, A.detail), A.stopPropagation();
  }
  function b(A) {
    const _ = f.indexOf(A.detail);
    _ !== -1 && (f.splice(_, 1), f = f), d.delete(A.detail.element), A.stopPropagation();
  }
  function v() {
    return [...p().querySelectorAll(".mdc-data-table__row")].map((A) => d.get(A)).filter((A) => A && A._smui_data_table_row_accessor);
  }
  function p() {
    return c;
  }
  function L(A) {
    x[A ? "unshift" : "push"](() => {
      c = A, t(2, c);
    });
  }
  return n.$$set = (A) => {
    e = Z(Z({}, e), De(A)), t(6, i = ue(e, l)), "use" in A && t(0, o = A.use), "class" in A && t(1, u = A.class), "$$scope" in A && t(8, s = A.$$scope);
  }, [
    o,
    u,
    c,
    a,
    g,
    b,
    i,
    p,
    s,
    r,
    L
  ];
}
class Qa extends oe {
  constructor(e) {
    super(), se(this, e, Ja, Ka, re, { use: 0, class: 1, getElement: 7 });
  }
  get getElement() {
    return this.$$.ctx[7];
  }
}
function xa(n) {
  let e, t, l, i, r, s, a;
  const o = (
    /*#slots*/
    n[15].default
  ), u = te(
    o,
    n,
    /*$$scope*/
    n[14],
    null
  );
  let c = [
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
      e = P("tr"), u && u.c(), ee(e, f);
    },
    m(d, g) {
      U(d, e, g), u && u.m(e, null), n[16](e), r = !0, s || (a = [
        J(i = ye.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        J(
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
      16384) && le(
        u,
        o,
        d,
        /*$$scope*/
        d[14],
        r ? ne(
          o,
          /*$$scope*/
          d[14],
          g,
          null
        ) : ie(
          /*$$scope*/
          d[14]
        ),
        null
      ), ee(e, f = ae(c, [
        (!r || g & /*className, checkbox, internalClasses*/
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
      ])), i && me(i.update) && g & /*use*/
      1 && i.update.call(
        null,
        /*use*/
        d[0]
      );
    },
    i(d) {
      r || (k(u, d), r = !0);
    },
    o(d) {
      E(u, d), r = !1;
    },
    d(d) {
      d && O(e), u && u.d(d), n[16](null), s = !1, de(a);
    }
  };
}
let $a = 0;
function es(n, e, t) {
  const l = ["use", "class", "rowId", "getElement"];
  let i = ue(e, l), { $$slots: r = {}, $$scope: s } = e;
  const a = Te(Le());
  let { use: o = [] } = e, { class: u = "" } = e, { rowId: c = "SMUI-data-table-row-" + $a++ } = e, f, d, g = {}, b = {}, v = Oe("SMUI:data-table:row:header");
  Ne(() => {
    const y = v ? {
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
        var B;
        return (B = d && d.checked) !== null && B !== void 0 ? B : !1;
      },
      addClass: L,
      removeClass: A,
      getAttr: _,
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
        var B;
        return (B = d && d.checked) !== null && B !== void 0 ? B : !1;
      },
      addClass: L,
      removeClass: A,
      getAttr: _,
      addAttr: m
    };
    return pe(h(), "SMUIDataTableRow:mount", y), () => {
      pe(h(), "SMUIDataTableRow:unmount", y);
    };
  });
  function p(y) {
    t(3, d = y.detail);
  }
  function L(y) {
    g[y] || t(4, g[y] = !0, g);
  }
  function A(y) {
    (!(y in g) || g[y]) && t(4, g[y] = !1, g);
  }
  function _(y) {
    var B;
    return y in b ? (B = b[y]) !== null && B !== void 0 ? B : null : h().getAttribute(y);
  }
  function m(y, B) {
    b[y] !== B && t(5, b[y] = B, b);
  }
  function S(y) {
    pe(h(), "SMUIDataTableHeader:click", y);
  }
  function R(y) {
    pe(h(), "SMUIDataTableRow:click", { rowId: c, target: y.target });
  }
  function h() {
    return f;
  }
  function w(y) {
    x[y ? "unshift" : "push"](() => {
      f = y, t(2, f);
    });
  }
  const N = (y) => v ? S(y) : R(y), M = () => t(3, d = void 0);
  return n.$$set = (y) => {
    e = Z(Z({}, e), De(y)), t(11, i = ue(e, l)), "use" in y && t(0, o = y.use), "class" in y && t(1, u = y.class), "rowId" in y && t(12, c = y.rowId), "$$scope" in y && t(14, s = y.$$scope);
  }, [
    o,
    u,
    f,
    d,
    g,
    b,
    a,
    v,
    p,
    S,
    R,
    i,
    c,
    h,
    s,
    r,
    w,
    N,
    M
  ];
}
class Tl extends oe {
  constructor(e) {
    super(), se(this, e, es, xa, re, {
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
function ts(n) {
  let e, t, l, i, r, s;
  const a = (
    /*#slots*/
    n[22].default
  ), o = te(
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
  ], c = {};
  for (let f = 0; f < u.length; f += 1)
    c = Z(c, u[f]);
  return {
    c() {
      e = P("td"), o && o.c(), ee(e, c);
    },
    m(f, d) {
      U(f, e, d), o && o.m(e, null), n[25](e), i = !0, r || (s = [
        J(l = ye.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        J(
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
      2097152) && le(
        o,
        a,
        f,
        /*$$scope*/
        f[21],
        i ? ne(
          a,
          /*$$scope*/
          f[21],
          d,
          null
        ) : ie(
          /*$$scope*/
          f[21]
        ),
        null
      ), ee(e, c = ae(u, [
        (!i || d & /*className, numeric, checkbox, internalClasses*/
        142 && t !== (t = Q({
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
      ])), l && me(l.update) && d & /*use*/
      1 && l.update.call(
        null,
        /*use*/
        f[0]
      );
    },
    i(f) {
      i || (k(o, f), i = !0);
    },
    o(f) {
      E(o, f), i = !1;
    },
    d(f) {
      f && O(e), o && o.d(f), n[25](null), r = !1, de(s);
    }
  };
}
function ns(n) {
  let e, t, l, i, r, s, a, o, u;
  const c = [is, ls], f = [];
  function d(v, p) {
    return (
      /*sortable*/
      v[5] ? 0 : 1
    );
  }
  t = d(n), l = f[t] = c[t](n);
  let g = [
    {
      class: i = Q({
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
  for (let v = 0; v < g.length; v += 1)
    b = Z(b, g[v]);
  return {
    c() {
      e = P("th"), l.c(), ee(e, b);
    },
    m(v, p) {
      U(v, e, p), f[t].m(e, null), n[23](e), a = !0, o || (u = [
        J(s = ye.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        J(
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
    p(v, p) {
      let L = t;
      t = d(v), t === L ? f[t].p(v, p) : (ce(), E(f[L], 1, 1, () => {
        f[L] = null;
      }), fe(), l = f[t], l ? l.p(v, p) : (l = f[t] = c[t](v), l.c()), k(l, 1), l.m(e, null)), ee(e, b = ae(g, [
        (!a || p & /*className, numeric, checkbox, sortable, $sort, columnId, internalClasses*/
        702 && i !== (i = Q({
          [
            /*className*/
            v[1]
          ]: !0,
          "mdc-data-table__header-cell": !0,
          "mdc-data-table__header-cell--numeric": (
            /*numeric*/
            v[2]
          ),
          "mdc-data-table__header-cell--checkbox": (
            /*checkbox*/
            v[3]
          ),
          "mdc-data-table__header-cell--with-sort": (
            /*sortable*/
            v[5]
          ),
          "mdc-data-table__header-cell--sorted": (
            /*sortable*/
            v[5] && /*$sort*/
            v[9] === /*columnId*/
            v[4]
          ),
          .../*internalClasses*/
          v[7]
        }))) && { class: i },
        { role: "columnheader" },
        { scope: "col" },
        (!a || p & /*columnId*/
        16) && { "data-column-id": (
          /*columnId*/
          v[4]
        ) },
        (!a || p & /*sortable, $sort, columnId, $sortDirection*/
        1584 && r !== (r = /*sortable*/
        v[5] ? (
          /*$sort*/
          v[9] === /*columnId*/
          v[4] ? (
            /*$sortDirection*/
            v[10]
          ) : "none"
        ) : void 0)) && { "aria-sort": r },
        p & /*internalAttrs*/
        256 && /*internalAttrs*/
        v[8],
        p & /*$$restProps*/
        524288 && /*$$restProps*/
        v[19]
      ])), s && me(s.update) && p & /*use*/
      1 && s.update.call(
        null,
        /*use*/
        v[0]
      );
    },
    i(v) {
      a || (k(l), a = !0);
    },
    o(v) {
      E(l), a = !1;
    },
    d(v) {
      v && O(e), f[t].d(), n[23](null), o = !1, de(u);
    }
  };
}
function ls(n) {
  let e;
  const t = (
    /*#slots*/
    n[22].default
  ), l = te(
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
      2097152) && le(
        l,
        t,
        i,
        /*$$scope*/
        i[21],
        e ? ne(
          t,
          /*$$scope*/
          i[21],
          r,
          null
        ) : ie(
          /*$$scope*/
          i[21]
        ),
        null
      );
    },
    i(i) {
      e || (k(l, i), e = !0);
    },
    o(i) {
      E(l, i), e = !1;
    },
    d(i) {
      l && l.d(i);
    }
  };
}
function is(n) {
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
  ), u = te(
    o,
    n,
    /*$$scope*/
    n[21],
    null
  );
  return {
    c() {
      e = P("div"), u && u.c(), t = V(), l = P("div"), r = ke(i), T(l, "class", "mdc-data-table__sort-status-label"), T(l, "aria-hidden", "true"), T(l, "id", s = /*columnId*/
      n[4] + "-status-label"), T(e, "class", "mdc-data-table__header-cell-wrapper");
    },
    m(c, f) {
      U(c, e, f), u && u.m(e, null), F(e, t), F(e, l), F(l, r), a = !0;
    },
    p(c, f) {
      u && u.p && (!a || f & /*$$scope*/
      2097152) && le(
        u,
        o,
        c,
        /*$$scope*/
        c[21],
        a ? ne(
          o,
          /*$$scope*/
          c[21],
          f,
          null
        ) : ie(
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
      ) : "") + "") && Pe(r, i), (!a || f & /*columnId*/
      16 && s !== (s = /*columnId*/
      c[4] + "-status-label")) && T(l, "id", s);
    },
    i(c) {
      a || (k(u, c), a = !0);
    },
    o(c) {
      E(u, c), a = !1;
    },
    d(c) {
      c && O(e), u && u.d(c);
    }
  };
}
function rs(n) {
  let e, t, l, i;
  const r = [ns, ts], s = [];
  function a(o, u) {
    return (
      /*header*/
      o[12] ? 0 : 1
    );
  }
  return e = a(n), t = s[e] = r[e](n), {
    c() {
      t.c(), l = we();
    },
    m(o, u) {
      s[e].m(o, u), U(o, l, u), i = !0;
    },
    p(o, [u]) {
      t.p(o, u);
    },
    i(o) {
      i || (k(t), i = !0);
    },
    o(o) {
      E(t), i = !1;
    },
    d(o) {
      o && O(l), s[e].d(o);
    }
  };
}
let as = 0;
function ss(n, e, t) {
  const l = ["use", "class", "numeric", "checkbox", "columnId", "sortable", "getElement"];
  let i = ue(e, l), r, s, { $$slots: a = {}, $$scope: o } = e;
  const u = Te(Le());
  let c = Oe("SMUI:data-table:row:header"), { use: f = [] } = e, { class: d = "" } = e, { numeric: g = !1 } = e, { checkbox: b = !1 } = e, { columnId: v = c ? "SMUI-data-table-column-" + as++ : "SMUI-data-table-unused" } = e, { sortable: p = Oe("SMUI:data-table:sortable") } = e, L, A = {}, _ = {}, m = Oe("SMUI:data-table:sort");
  ut(n, m, (C) => t(9, r = C));
  let S = Oe("SMUI:data-table:sortDirection");
  ut(n, S, (C) => t(10, s = C));
  let R = Oe("SMUI:data-table:sortAscendingAriaLabel"), h = Oe("SMUI:data-table:sortDescendingAriaLabel");
  p && (Ee("SMUI:label:context", "data-table:sortable-header-cell"), Ee("SMUI:icon-button:context", "data-table:sortable-header-cell"), Ee("SMUI:icon-button:aria-describedby", v + "-status-label")), Ne(() => {
    const C = c ? {
      _smui_data_table_header_cell_accessor: !0,
      get element() {
        return j();
      },
      get columnId() {
        return v;
      },
      addClass: w,
      removeClass: N,
      getAttr: M,
      addAttr: y
    } : {
      _smui_data_table_header_cell_accessor: !1,
      get element() {
        return j();
      },
      get columnId() {
      },
      addClass: w,
      removeClass: N,
      getAttr: M,
      addAttr: y
    };
    return pe(j(), "SMUIDataTableCell:mount", C), () => {
      pe(j(), "SMUIDataTableCell:unmount", C);
    };
  });
  function w(C) {
    A[C] || t(7, A[C] = !0, A);
  }
  function N(C) {
    (!(C in A) || A[C]) && t(7, A[C] = !1, A);
  }
  function M(C) {
    var G;
    return C in _ ? (G = _[C]) !== null && G !== void 0 ? G : null : j().getAttribute(C);
  }
  function y(C, G) {
    _[C] !== G && t(8, _[C] = G, _);
  }
  function B(C) {
    pe(j(), "SMUIDataTableHeaderCheckbox:change", C);
  }
  function H(C) {
    pe(j(), "SMUIDataTableBodyCheckbox:change", C);
  }
  function j() {
    return L;
  }
  function ve(C) {
    x[C ? "unshift" : "push"](() => {
      L = C, t(6, L);
    });
  }
  const Ce = (C) => b && B(C);
  function _e(C) {
    x[C ? "unshift" : "push"](() => {
      L = C, t(6, L);
    });
  }
  const q = (C) => b && H(C);
  return n.$$set = (C) => {
    e = Z(Z({}, e), De(C)), t(19, i = ue(e, l)), "use" in C && t(0, f = C.use), "class" in C && t(1, d = C.class), "numeric" in C && t(2, g = C.numeric), "checkbox" in C && t(3, b = C.checkbox), "columnId" in C && t(4, v = C.columnId), "sortable" in C && t(5, p = C.sortable), "$$scope" in C && t(21, o = C.$$scope);
  }, [
    f,
    d,
    g,
    b,
    v,
    p,
    L,
    A,
    _,
    r,
    s,
    u,
    c,
    m,
    S,
    R,
    h,
    B,
    H,
    i,
    j,
    o,
    a,
    ve,
    Ce,
    _e,
    q
  ];
}
class Zt extends oe {
  constructor(e) {
    super(), se(this, e, ss, rs, re, {
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
const { Boolean: Ol } = vi;
function nl(n, e, t) {
  const l = n.slice();
  return l[17] = e[t], l[19] = t, l;
}
const os = (n) => ({ item: n & /*items*/
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
function us(n) {
  let e, t;
  return e = new Va({
    props: {
      style: "width: 100%;",
      $$slots: { default: [Cs] },
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
      t || (k(e.$$.fragment, l), t = !0);
    },
    o(l) {
      E(e.$$.fragment, l), t = !1;
    },
    d(l) {
      Y(e, l);
    }
  };
}
function cs(n) {
  let e, t;
  return {
    c() {
      e = P("p"), t = ke(
        /*emptyText*/
        n[4]
      ), T(e, "class", "status svelte-1v7zd15");
    },
    m(l, i) {
      U(l, e, i), F(e, t);
    },
    p(l, i) {
      i & /*emptyText*/
      16 && Pe(
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
function fs(n) {
  let e, t;
  return {
    c() {
      e = P("p"), t = ke(
        /*errorMsg*/
        n[3]
      ), T(e, "class", "status error svelte-1v7zd15");
    },
    m(l, i) {
      U(l, e, i), F(e, t);
    },
    p(l, i) {
      i & /*errorMsg*/
      8 && Pe(
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
function ds(n) {
  let e;
  return {
    c() {
      e = P("p"), e.textContent = "Loading…", T(e, "class", "status svelte-1v7zd15");
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
function hs(n) {
  let e = (
    /*col*/
    n[20].header + ""
  ), t;
  return {
    c() {
      t = ke(e);
    },
    m(l, i) {
      U(l, t, i);
    },
    p(l, i) {
      i & /*columns*/
      2 && e !== (e = /*col*/
      l[20].header + "") && Pe(t, e);
    },
    d(l) {
      l && O(t);
    }
  };
}
function al(n) {
  let e, t;
  return e = new Zt({
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
      t || (k(e.$$.fragment, l), t = !0);
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
  return e = new Zt({
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
      t || (k(e.$$.fragment, l), t = !0);
    },
    o(l) {
      E(e.$$.fragment, l), t = !1;
    },
    d(l) {
      Y(e, l);
    }
  };
}
function ms(n) {
  let e, t, l, i = qe(
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
      e = V(), a && a.c(), t = we();
    },
    m(o, u) {
      for (let c = 0; c < r.length; c += 1)
        r[c] && r[c].m(o, u);
      U(o, e, u), a && a.m(o, u), U(o, t, u), l = !0;
    },
    p(o, u) {
      if (u & /*columns, headerBg, Boolean*/
      66) {
        i = qe(
          /*columns*/
          o[1]
        );
        let c;
        for (c = 0; c < i.length; c += 1) {
          const f = rl(o, i, c);
          r[c] ? (r[c].p(f, u), k(r[c], 1)) : (r[c] = al(f), r[c].c(), k(r[c], 1), r[c].m(e.parentNode, e));
        }
        for (ce(), c = i.length; c < r.length; c += 1)
          s(c);
        fe();
      }
      /*slotHasActions*/
      o[9] ? a ? (a.p(o, u), u & /*slotHasActions*/
      512 && k(a, 1)) : (a = sl(o), a.c(), k(a, 1), a.m(t.parentNode, t)) : a && (ce(), E(a, 1, 1, () => {
        a = null;
      }), fe());
    },
    i(o) {
      if (!l) {
        for (let u = 0; u < i.length; u += 1)
          k(r[u]);
        k(a), l = !0;
      }
    },
    o(o) {
      r = r.filter(Ol);
      for (let u = 0; u < r.length; u += 1)
        E(r[u]);
      E(a), l = !1;
    },
    d(o) {
      o && (O(e), O(t)), At(r, o), a && a.d(o);
    }
  };
}
function gs(n) {
  let e, t;
  return e = new Tl({
    props: {
      $$slots: { default: [ms] },
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
      t || (k(e.$$.fragment, l), t = !0);
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
      t = ke(e);
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
      ]) ?? "") + "") && Pe(t, e);
    },
    d(i) {
      i && O(t);
    }
  };
}
function ol(n) {
  let e, t;
  return e = new Zt({
    props: {
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
      i & /*$$scope, items, columns*/
      16387 && (r.$$scope = { dirty: i, ctx: l }), e.$set(r);
    },
    i(l) {
      t || (k(e.$$.fragment, l), t = !0);
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
  return e = new Zt({
    props: {
      numeric: !0,
      $$slots: { default: [_s] },
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
      t || (k(e.$$.fragment, l), t = !0);
    },
    o(l) {
      E(e.$$.fragment, l), t = !1;
    },
    d(l) {
      Y(e, l);
    }
  };
}
function _s(n) {
  let e;
  const t = (
    /*#slots*/
    n[11].actions
  ), l = te(
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
      16385) && le(
        l,
        t,
        i,
        /*$$scope*/
        i[14],
        e ? ne(
          t,
          /*$$scope*/
          i[14],
          r,
          os
        ) : ie(
          /*$$scope*/
          i[14]
        ),
        ll
      );
    },
    i(i) {
      e || (k(l, i), e = !0);
    },
    o(i) {
      E(l, i), e = !1;
    },
    d(i) {
      l && l.d(i);
    }
  };
}
function bs(n) {
  let e, t, l, i = qe(
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
      e = V(), a && a.c(), t = V();
    },
    m(o, u) {
      for (let c = 0; c < r.length; c += 1)
        r[c] && r[c].m(o, u);
      U(o, e, u), a && a.m(o, u), U(o, t, u), l = !0;
    },
    p(o, u) {
      if (u & /*items, columns*/
      3) {
        i = qe(
          /*columns*/
          o[1]
        );
        let c;
        for (c = 0; c < i.length; c += 1) {
          const f = il(o, i, c);
          r[c] ? (r[c].p(f, u), k(r[c], 1)) : (r[c] = ol(f), r[c].c(), k(r[c], 1), r[c].m(e.parentNode, e));
        }
        for (ce(), c = i.length; c < r.length; c += 1)
          s(c);
        fe();
      }
      /*slotHasActions*/
      o[9] ? a ? (a.p(o, u), u & /*slotHasActions*/
      512 && k(a, 1)) : (a = ul(o), a.c(), k(a, 1), a.m(t.parentNode, t)) : a && (ce(), E(a, 1, 1, () => {
        a = null;
      }), fe());
    },
    i(o) {
      if (!l) {
        for (let u = 0; u < i.length; u += 1)
          k(r[u]);
        k(a), l = !0;
      }
    },
    o(o) {
      r = r.filter(Ol);
      for (let u = 0; u < r.length; u += 1)
        E(r[u]);
      E(a), l = !1;
    },
    d(o) {
      o && (O(e), O(t)), At(r, o), a && a.d(o);
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
  return l = new Tl({
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
      $$slots: { default: [bs] },
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
      t = we(), K(l.$$.fragment), this.first = t;
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
      i || (k(l.$$.fragment, s), i = !0);
    },
    o(s) {
      E(l.$$.fragment, s), i = !1;
    },
    d(s) {
      s && O(t), Y(l, s);
    }
  };
}
function vs(n) {
  let e = [], t = /* @__PURE__ */ new Map(), l, i, r = qe(
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
      l = we();
    },
    m(a, o) {
      for (let u = 0; u < e.length; u += 1)
        e[u] && e[u].m(a, o);
      U(a, l, o), i = !0;
    },
    p(a, o) {
      o & /*rowBg, hoveredRow, getRowId, items, Boolean, $$scope, slotHasActions, columns*/
      17315 && (r = qe(
        /*items*/
        a[0]
      ), ce(), e = Ei(e, o, s, 1, a, r, t, l.parentNode, Ri, cl, l, nl), fe());
    },
    i(a) {
      if (!i) {
        for (let o = 0; o < r.length; o += 1)
          k(e[o]);
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
function Cs(n) {
  let e, t, l, i;
  return e = new Ya({
    props: {
      style: (
        /*headerBg*/
        n[6] ? `background-color:${/*headerBg*/
        n[6]}` : void 0
      ),
      $$slots: { default: [gs] },
      $$scope: { ctx: n }
    }
  }), l = new Qa({
    props: {
      $$slots: { default: [vs] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      K(e.$$.fragment), t = V(), K(l.$$.fragment);
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
      i || (k(e.$$.fragment, r), k(l.$$.fragment, r), i = !0);
    },
    o(r) {
      E(e.$$.fragment, r), E(l.$$.fragment, r), i = !1;
    },
    d(r) {
      r && O(t), Y(e, r), Y(l, r);
    }
  };
}
function Is(n) {
  let e, t, l, i;
  const r = [ds, fs, cs, us], s = [];
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
      t.c(), l = we();
    },
    m(o, u) {
      s[e].m(o, u), U(o, l, u), i = !0;
    },
    p(o, [u]) {
      let c = e;
      e = a(o), e === c ? s[e].p(o, u) : (ce(), E(s[c], 1, 1, () => {
        s[c] = null;
      }), fe(), t = s[e], t ? t.p(o, u) : (t = s[e] = r[e](o), t.c()), k(t, 1), t.m(l.parentNode, l));
    },
    i(o) {
      i || (k(t), i = !0);
    },
    o(o) {
      E(t), i = !1;
    },
    d(o) {
      o && O(l), s[e].d(o);
    }
  };
}
function As(n, e, t) {
  let l, { $$slots: i = {}, $$scope: r } = e;
  const s = ln(i);
  let { items: a = [] } = e, { columns: o = [] } = e, { loading: u = !1 } = e, { errorMsg: c = "" } = e, { emptyText: f = "Nothing to show." } = e, { getRowId: d = (m, S) => {
    var R, h;
    return (h = m && ((R = m.id) !== null && R !== void 0 ? R : m.key)) !== null && h !== void 0 ? h : S;
  } } = e, { headerBg: g = null } = e, { rowBg: b = null } = e, v = null;
  const p = s;
  let { hasActions: L = !1 } = e;
  const A = (m, S) => t(8, v = d(m, S)), _ = () => t(8, v = null);
  return n.$$set = (m) => {
    "items" in m && t(0, a = m.items), "columns" in m && t(1, o = m.columns), "loading" in m && t(2, u = m.loading), "errorMsg" in m && t(3, c = m.errorMsg), "emptyText" in m && t(4, f = m.emptyText), "getRowId" in m && t(5, d = m.getRowId), "headerBg" in m && t(6, g = m.headerBg), "rowBg" in m && t(7, b = m.rowBg), "hasActions" in m && t(10, L = m.hasActions), "$$scope" in m && t(14, r = m.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty & /*hasActions*/
    1024 && t(9, l = L || !!(p != null && p.actions));
  }, [
    a,
    o,
    u,
    c,
    f,
    d,
    g,
    b,
    v,
    l,
    L,
    i,
    A,
    _,
    r
  ];
}
class ys extends oe {
  constructor(e) {
    super(), se(this, e, As, Is, re, {
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
function fl(n, e, t) {
  const l = n.slice();
  return l[5] = e[t], l[7] = t, l;
}
function dl(n) {
  let e, t = (
    /*crumb*/
    n[5].secondaryLabel + ""
  ), l;
  return {
    c() {
      e = P("span"), l = ke(t), T(e, "class", "secondary-label svelte-1ngm2be");
    },
    m(i, r) {
      U(i, e, r), F(e, l);
    },
    p(i, r) {
      r & /*breadcrumbs*/
      1 && t !== (t = /*crumb*/
      i[5].secondaryLabel + "") && Pe(l, t);
    },
    d(i) {
      i && O(e);
    }
  };
}
function hl(n) {
  let e;
  return {
    c() {
      e = P("span"), e.textContent = "chevron_right", T(e, "class", "material-icons separator svelte-1ngm2be");
    },
    m(t, l) {
      U(t, e, l);
    },
    d(t) {
      t && O(e);
    }
  };
}
function ml(n) {
  let e, t, l, i = (
    /*crumb*/
    n[5].label + ""
  ), r, s, a, o, u, c, f, d, g = (
    /*crumb*/
    n[5].secondaryLabel && dl(n)
  );
  function b() {
    return (
      /*click_handler*/
      n[3](
        /*i*/
        n[7]
      )
    );
  }
  let v = (
    /*i*/
    n[7] < /*breadcrumbs*/
    n[0].length - 1 && hl()
  );
  return {
    c() {
      e = P("div"), t = P("span"), l = P("span"), r = ke(i), s = V(), g && g.c(), u = V(), v && v.c(), c = V(), T(l, "class", "label svelte-1ngm2be"), T(t, "class", a = "breadcrumb " + /*crumb*/
      (n[5].enabled ? "" : "br-disabled") + " " + /*i*/
      (n[7] === /*activeIndex*/
      n[1] ? "br-active" : "") + " svelte-1ngm2be"), T(t, "aria-current", o = /*i*/
      n[7] === /*activeIndex*/
      n[1] ? "page" : void 0), T(e, "class", "breadcrumb-wrapper svelte-1ngm2be");
    },
    m(p, L) {
      U(p, e, L), F(e, t), F(t, l), F(l, r), F(t, s), g && g.m(t, null), F(e, u), v && v.m(e, null), F(e, c), f || (d = z(t, "click", b), f = !0);
    },
    p(p, L) {
      n = p, L & /*breadcrumbs*/
      1 && i !== (i = /*crumb*/
      n[5].label + "") && Pe(r, i), /*crumb*/
      n[5].secondaryLabel ? g ? g.p(n, L) : (g = dl(n), g.c(), g.m(t, null)) : g && (g.d(1), g = null), L & /*breadcrumbs, activeIndex*/
      3 && a !== (a = "breadcrumb " + /*crumb*/
      (n[5].enabled ? "" : "br-disabled") + " " + /*i*/
      (n[7] === /*activeIndex*/
      n[1] ? "br-active" : "") + " svelte-1ngm2be") && T(t, "class", a), L & /*activeIndex*/
      2 && o !== (o = /*i*/
      n[7] === /*activeIndex*/
      n[1] ? "page" : void 0) && T(t, "aria-current", o), /*i*/
      n[7] < /*breadcrumbs*/
      n[0].length - 1 ? v || (v = hl(), v.c(), v.m(e, c)) : v && (v.d(1), v = null);
    },
    d(p) {
      p && O(e), g && g.d(), v && v.d(), f = !1, d();
    }
  };
}
function ks(n) {
  let e, t = qe(
    /*breadcrumbs*/
    n[0]
  ), l = [];
  for (let i = 0; i < t.length; i += 1)
    l[i] = ml(fl(n, t, i));
  return {
    c() {
      e = P("div");
      for (let i = 0; i < l.length; i += 1)
        l[i].c();
      T(e, "class", "oscd-breadcrumbs svelte-1ngm2be");
    },
    m(i, r) {
      U(i, e, r);
      for (let s = 0; s < l.length; s += 1)
        l[s] && l[s].m(e, null);
    },
    p(i, [r]) {
      if (r & /*breadcrumbs, activeIndex, undefined, handleClick*/
      7) {
        t = qe(
          /*breadcrumbs*/
          i[0]
        );
        let s;
        for (s = 0; s < t.length; s += 1) {
          const a = fl(i, t, s);
          l[s] ? l[s].p(a, r) : (l[s] = ml(a), l[s].c(), l[s].m(e, null));
        }
        for (; s < l.length; s += 1)
          l[s].d(1);
        l.length = t.length;
      }
    },
    i: $,
    o: $,
    d(i) {
      i && O(e), At(l, i);
    }
  };
}
function ws(n, e, t) {
  let { breadcrumbs: l = [] } = e, { activeIndex: i = 0 } = e;
  const r = Gt(), s = (o) => {
    l[o].enabled && o !== i && r("click", { index: o });
  }, a = (o) => s(o);
  return n.$$set = (o) => {
    "breadcrumbs" in o && t(0, l = o.breadcrumbs), "activeIndex" in o && t(1, i = o.activeIndex);
  }, [l, i, s, a];
}
class Ls extends oe {
  constructor(e) {
    super(), se(this, e, ws, ks, re, { breadcrumbs: 0, activeIndex: 1 });
  }
}
const Ss = Object.freeze({
  // This flag exists as a workaround for issue 454 (basically a browser bug) - seems like these rect values take time to update when in grid layout. Setting it to true can cause strange behaviour in the REPL for non-grid zones, see issue 470
  USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT: "USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT"
});
Ss.USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT + "";
function Rs(n) {
  let e;
  return {
    c() {
      e = ke("CONTINUE");
    },
    m(t, l) {
      U(t, e, l);
    },
    d(t) {
      t && O(e);
    }
  };
}
function Es(n) {
  let e;
  return {
    c() {
      e = ke("ADD NEW PROCESS");
    },
    m(t, l) {
      U(t, e, l);
    },
    d(t) {
      t && O(e);
    }
  };
}
function Hs(n) {
  let e, t, l, i, r, s, a, o;
  t = new Aa({
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
  r = new Ma({
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
      e = P("button"), K(t.$$.fragment), l = V(), i = P("button"), K(r.$$.fragment), T(e, "type", "button"), T(e, "class", "icon svelte-wxofq2"), T(e, "aria-label", "View process"), T(i, "type", "button"), T(i, "class", "icon svelte-wxofq2"), T(i, "aria-label", "Start process");
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
      s || (k(t.$$.fragment, f), k(r.$$.fragment, f), s = !0);
    },
    o(f) {
      E(t.$$.fragment, f), E(r.$$.fragment, f), s = !1;
    },
    d(f) {
      f && (O(e), O(l), O(i)), Y(t), Y(r), a = !1, de(o);
    }
  };
}
function Ds(n) {
  let e, t, l, i, r, s, a, o, u, c, f, d, g, b, v, p, L;
  i = new Ba({}), o = new Nt({
    props: {
      variant: "raised",
      style: "--mdc-theme-primary: #ffffff; --mdc-theme-on-primary: #004552",
      $$slots: { default: [Rs] },
      $$scope: { ctx: n }
    }
  }), o.$on(
    "click",
    /*click_handler*/
    n[11]
  );
  function A(m) {
    n[12](m);
  }
  let _ = {
    variant: "outlined",
    label: "Search Processes"
  };
  return (
    /*searchQuery*/
    n[2] !== void 0 && (_.value = /*searchQuery*/
    n[2]), f = new ha({ props: _ }), x.push(() => Ye(f, "value", A)), b = new Nt({
      props: {
        variant: "raised",
        style: "--mdc-theme-primary: #004552; --mdc-theme-on-primary: #ffffff",
        $$slots: { default: [Es] },
        $$scope: { ctx: n }
      }
    }), b.$on(
      "click",
      /*handleAddNew*/
      n[7]
    ), p = new ys({
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
            Hs,
            ({ item: m }) => ({ 16: m }),
            ({ item: m }) => m ? 65536 : 0
          ]
        },
        $$scope: { ctx: n }
      }
    }), {
      c() {
        e = P("div"), t = P("div"), l = P("div"), K(i.$$.fragment), r = V(), s = P("span"), s.textContent = `A process “Process Name C” has already been started for the ---.scd.
        Would you like to continue where you left off?`, a = V(), K(o.$$.fragment), u = V(), c = P("div"), K(f.$$.fragment), g = V(), K(b.$$.fragment), v = V(), K(p.$$.fragment), T(s, "class", "svelte-wxofq2"), T(l, "class", "process-banner__info svelte-wxofq2"), T(t, "class", "process-banner svelte-wxofq2"), T(c, "class", "process-toolbar svelte-wxofq2"), T(e, "class", "processes svelte-wxofq2");
      },
      m(m, S) {
        U(m, e, S), F(e, t), F(t, l), X(i, l, null), F(l, r), F(l, s), F(t, a), X(o, t, null), F(e, u), F(e, c), X(f, c, null), F(c, g), X(b, c, null), F(e, v), X(p, e, null), L = !0;
      },
      p(m, [S]) {
        const R = {};
        S & /*$$scope*/
        131072 && (R.$$scope = { dirty: S, ctx: m }), o.$set(R);
        const h = {};
        !d && S & /*searchQuery*/
        4 && (d = !0, h.value = /*searchQuery*/
        m[2], Xe(() => d = !1)), f.$set(h);
        const w = {};
        S & /*$$scope*/
        131072 && (w.$$scope = { dirty: S, ctx: m }), b.$set(w);
        const N = {};
        S & /*filteredRows*/
        8 && (N.items = /*filteredRows*/
        m[3]), S & /*loading*/
        1 && (N.loading = /*loading*/
        m[0]), S & /*errorMsg*/
        2 && (N.errorMsg = /*errorMsg*/
        m[1]), S & /*$$scope, item*/
        196608 && (N.$$scope = { dirty: S, ctx: m }), p.$set(N);
      },
      i(m) {
        L || (k(i.$$.fragment, m), k(o.$$.fragment, m), k(f.$$.fragment, m), k(b.$$.fragment, m), k(p.$$.fragment, m), L = !0);
      },
      o(m) {
        E(i.$$.fragment, m), E(o.$$.fragment, m), E(f.$$.fragment, m), E(b.$$.fragment, m), E(p.$$.fragment, m), L = !1;
      },
      d(m) {
        m && O(e), Y(i), Y(o), Y(f), Y(b), Y(p);
      }
    }
  );
}
function Ms(n, e, t) {
  let l, i, r, { processes: s = [] } = e, { loading: a = !1 } = e, { errorMsg: o = "" } = e;
  const u = Gt(), c = (_) => u("start", _), f = (_) => u("view", _);
  let d = "";
  const g = [
    { key: "displayName", header: "Name" },
    {
      key: "description",
      header: "Description"
    }
  ], b = () => {
    console.log("Add new process clicked");
  }, v = () => console.log("Continue Process");
  function p(_) {
    d = _, t(2, d);
  }
  const L = (_) => f(_), A = (_) => c(_);
  return n.$$set = (_) => {
    "processes" in _ && t(8, s = _.processes), "loading" in _ && t(0, a = _.loading), "errorMsg" in _ && t(1, o = _.errorMsg);
  }, n.$$.update = () => {
    n.$$.dirty & /*searchQuery*/
    4 && t(10, l = d.trim().toLowerCase()), n.$$.dirty & /*processes*/
    256 && t(9, i = (s ?? []).map((_) => Object.assign(Object.assign({}, _), { displayName: _.name || _.id }))), n.$$.dirty & /*searchLower, rows*/
    1536 && t(3, r = l ? i.filter((_) => {
      var m;
      return ((m = _.displayName) !== null && m !== void 0 ? m : "").toLowerCase().includes(l);
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
    v,
    p,
    L,
    A
  ];
}
class Ts extends oe {
  constructor(e) {
    super(), se(this, e, Ms, Ds, re, { processes: 8, loading: 0, errorMsg: 1 });
  }
}
function gl(n, e, t) {
  const l = n.slice();
  return l[8] = e[t], l[10] = t, l;
}
function Os(n) {
  let e;
  return {
    c() {
      e = ke("START PROCESS");
    },
    m(t, l) {
      U(t, e, l);
    },
    d(t) {
      t && O(e);
    }
  };
}
function Us(n) {
  let e;
  return {
    c() {
      e = ke("EDIT");
    },
    m(t, l) {
      U(t, e, l);
    },
    d(t) {
      t && O(e);
    }
  };
}
function pl(n) {
  let e, t, l, i, r, s = (
    /*plugin*/
    n[8].name + ""
  ), a, o;
  return {
    c() {
      e = P("div"), t = P("span"), t.textContent = `${/*i*/
      n[10] + 1}.`, l = V(), i = P("div"), r = P("span"), a = ke(s), o = V(), T(t, "class", "plugin__index svelte-1476d65"), T(r, "class", "plugin-item__name svelte-1476d65"), T(i, "class", "plugin-item svelte-1476d65"), T(e, "class", "plugin svelte-1476d65");
    },
    m(u, c) {
      U(u, e, c), F(e, t), F(e, l), F(e, i), F(i, r), F(r, a), F(e, o);
    },
    p(u, c) {
      c & /*plugins*/
      2 && s !== (s = /*plugin*/
      u[8].name + "") && Pe(a, s);
    },
    d(u) {
      u && O(e);
    }
  };
}
function Bs(n) {
  let e, t, l, i, r, s, a, o, u, c, f, d, g;
  l = new Ls({
    props: {
      breadcrumbs: (
        /*breadcrumbs*/
        n[2]
      ),
      activeIndex: 1
    }
  }), l.$on(
    "click",
    /*onCrumbClick*/
    n[3]
  ), r = new Nt({
    props: {
      variant: "raised",
      style: "--mdc-theme-primary: #004552; --mdc-theme-on-primary: #ffffff",
      disabled: !/*proc*/
      n[0],
      "aria-label": "Start process",
      $$slots: { default: [Os] },
      $$scope: { ctx: n }
    }
  }), r.$on(
    "click",
    /*start*/
    n[4]
  ), f = new Nt({
    props: {
      variant: "raised",
      style: "--mdc-theme-primary: #ffffff; --mdc-theme-on-primary: #004552",
      "aria-label": "Edit process",
      $$slots: { default: [Us] },
      $$scope: { ctx: n }
    }
  });
  let b = qe(
    /*plugins*/
    n[1]
  ), v = [];
  for (let p = 0; p < b.length; p += 1)
    v[p] = pl(gl(n, b, p));
  return {
    c() {
      e = P("div"), t = P("div"), K(l.$$.fragment), i = V(), K(r.$$.fragment), s = V(), a = P("div"), o = P("div"), u = P("p"), u.textContent = "Process", c = V(), K(f.$$.fragment), d = V();
      for (let p = 0; p < v.length; p += 1)
        v[p].c();
      T(t, "class", "header svelte-1476d65"), T(u, "class", "svelte-1476d65"), T(o, "class", "plugins-list__header svelte-1476d65"), T(a, "class", "plugins-list svelte-1476d65"), T(e, "class", "page-content svelte-1476d65");
    },
    m(p, L) {
      U(p, e, L), F(e, t), X(l, t, null), F(t, i), X(r, t, null), F(e, s), F(e, a), F(a, o), F(o, u), F(o, c), X(f, o, null), F(a, d);
      for (let A = 0; A < v.length; A += 1)
        v[A] && v[A].m(a, null);
      g = !0;
    },
    p(p, [L]) {
      const A = {};
      L & /*breadcrumbs*/
      4 && (A.breadcrumbs = /*breadcrumbs*/
      p[2]), l.$set(A);
      const _ = {};
      L & /*proc*/
      1 && (_.disabled = !/*proc*/
      p[0]), L & /*$$scope*/
      2048 && (_.$$scope = { dirty: L, ctx: p }), r.$set(_);
      const m = {};
      if (L & /*$$scope*/
      2048 && (m.$$scope = { dirty: L, ctx: p }), f.$set(m), L & /*plugins*/
      2) {
        b = qe(
          /*plugins*/
          p[1]
        );
        let S;
        for (S = 0; S < b.length; S += 1) {
          const R = gl(p, b, S);
          v[S] ? v[S].p(R, L) : (v[S] = pl(R), v[S].c(), v[S].m(a, null));
        }
        for (; S < v.length; S += 1)
          v[S].d(1);
        v.length = b.length;
      }
    },
    i(p) {
      g || (k(l.$$.fragment, p), k(r.$$.fragment, p), k(f.$$.fragment, p), g = !0);
    },
    o(p) {
      E(l.$$.fragment, p), E(r.$$.fragment, p), E(f.$$.fragment, p), g = !1;
    },
    d(p) {
      p && O(e), Y(l), Y(r), Y(f), At(v, p);
    }
  };
}
function Fs(n, e, t) {
  let l, i;
  var r, s;
  let { proc: a = null } = e;
  const o = Gt(), u = (f) => {
    f.detail.index === 0 && o("back");
  }, c = () => {
    a && o("start", a);
  };
  return n.$$set = (f) => {
    "proc" in f && t(0, a = f.proc);
  }, n.$$.update = () => {
    n.$$.dirty & /*proc, _a*/
    33 && t(2, l = [
      {
        label: "Engineering-Wizard",
        enabled: !0
      },
      {
        label: t(5, r = a == null ? void 0 : a.name) !== null && r !== void 0 ? r : "—",
        enabled: !1
      }
    ]), n.$$.dirty & /*proc, _b*/
    65 && t(1, i = t(6, s = a == null ? void 0 : a.plugins) !== null && s !== void 0 ? s : []);
  }, [a, i, l, u, c, r, s];
}
class Ps extends oe {
  constructor(e) {
    super(), se(this, e, Fs, Bs, re, { proc: 0 });
  }
}
function _l(n, e, t) {
  const l = n.slice();
  return l[18] = e[t], l[20] = t, l;
}
function Ns(n) {
  let e = (
    /*i*/
    n[20] + 1 + ""
  ), t;
  return {
    c() {
      t = ke(e);
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
function Gs(n) {
  let e, t, l, i;
  const r = [Ws, qs, Zs], s = [];
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
      t.c(), l = we();
    },
    m(o, u) {
      s[e].m(o, u), U(o, l, u), i = !0;
    },
    p(o, u) {
      let c = e;
      e = a(o), e !== c && (ce(), E(s[c], 1, 1, () => {
        s[c] = null;
      }), fe(), t = s[e], t || (t = s[e] = r[e](o), t.c()), k(t, 1), t.m(l.parentNode, l));
    },
    i(o) {
      i || (k(t), i = !0);
    },
    o(o) {
      E(t), i = !1;
    },
    d(o) {
      o && O(l), s[e].d(o);
    }
  };
}
function Zs(n) {
  let e, t;
  return e = new Ra({}), {
    c() {
      K(e.$$.fragment);
    },
    m(l, i) {
      X(e, l, i), t = !0;
    },
    i(l) {
      t || (k(e.$$.fragment, l), t = !0);
    },
    o(l) {
      E(e.$$.fragment, l), t = !1;
    },
    d(l) {
      Y(e, l);
    }
  };
}
function qs(n) {
  let e, t;
  return e = new La({}), {
    c() {
      K(e.$$.fragment);
    },
    m(l, i) {
      X(e, l, i), t = !0;
    },
    i(l) {
      t || (k(e.$$.fragment, l), t = !0);
    },
    o(l) {
      E(e.$$.fragment, l), t = !1;
    },
    d(l) {
      Y(e, l);
    }
  };
}
function Ws(n) {
  let e, t;
  return e = new ka({}), {
    c() {
      K(e.$$.fragment);
    },
    m(l, i) {
      X(e, l, i), t = !0;
    },
    i(l) {
      t || (k(e.$$.fragment, l), t = !0);
    },
    o(l) {
      E(e.$$.fragment, l), t = !1;
    },
    d(l) {
      Y(e, l);
    }
  };
}
function js(n) {
  let e, t, l, i, r, s, a;
  const o = [Gs, Ns], u = [];
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
      e = P("button"), i.c(), T(e, "class", "svelte-1xq5awa"), rt(e, "not-visited", !/*visited*/
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
      l = c(n, g), l === b ? u[l].p(n, g) : (ce(), E(u[b], 1, 1, () => {
        u[b] = null;
      }), fe(), i = u[l], i ? i.p(n, g) : (i = u[l] = o[l](n), i.c()), k(i, 1), i.m(e, null)), (!r || g & /*visited, plugins*/
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
      r || (k(i), r = !0);
    },
    o(d) {
      E(i), r = !1;
    },
    d(d) {
      d && O(e), u[l].d(), s = !1, a();
    }
  };
}
function bl(n) {
  let e;
  return {
    c() {
      e = P("div"), T(e, "class", "plugin-step-line svelte-1xq5awa");
    },
    m(t, l) {
      U(t, e, l);
    },
    d(t) {
      t && O(e);
    }
  };
}
function vl(n) {
  let e, t, l, i, r = (
    /*plugin*/
    n[18].name + ""
  ), s, a, o, u;
  t = new Na({
    props: {
      text: (
        /*tooltipText*/
        n[6][
          /*plugin*/
          n[18].id
        ]
      ),
      position: "bottom",
      $$slots: { default: [js] },
      $$scope: { ctx: n }
    }
  });
  let c = (
    /*i*/
    n[20] < /*plugins*/
    n[2].length - 1 && bl()
  );
  return {
    c() {
      e = P("div"), K(t.$$.fragment), l = V(), i = P("p"), s = ke(r), a = V(), c && c.c(), o = we(), T(i, "class", "svelte-1xq5awa"), T(e, "class", "plugin-step svelte-1xq5awa");
    },
    m(f, d) {
      U(f, e, d), X(t, e, null), F(e, l), F(e, i), F(i, s), U(f, a, d), c && c.m(f, d), U(f, o, d), u = !0;
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
      f[18].name + "") && Pe(s, r), /*i*/
      f[20] < /*plugins*/
      f[2].length - 1 ? c || (c = bl(), c.c(), c.m(o.parentNode, o)) : c && (c.d(1), c = null);
    },
    i(f) {
      u || (k(t.$$.fragment, f), u = !0);
    },
    o(f) {
      E(t.$$.fragment, f), u = !1;
    },
    d(f) {
      f && (O(e), O(a), O(o)), Y(t), c && c.d(f);
    }
  };
}
function Cl(n) {
  let e = (
    /*tagName*/
    n[4]
  ), t, l = (
    /*tagName*/
    n[4] && Qt(n)
  );
  return {
    c() {
      l && l.c(), t = we();
    },
    m(i, r) {
      l && l.m(i, r), U(i, t, r);
    },
    p(i, r) {
      /*tagName*/
      i[4] ? e ? re(
        e,
        /*tagName*/
        i[4]
      ) ? (l.d(1), l = Qt(i), e = /*tagName*/
      i[4], l.c(), l.m(t.parentNode, t)) : l.p(i, r) : (l = Qt(i), e = /*tagName*/
      i[4], l.c(), l.m(t.parentNode, t)) : e && (l.d(1), l = null, e = /*tagName*/
      i[4]);
    },
    d(i) {
      i && O(t), l && l.d(i);
    }
  };
}
function Qt(n) {
  let e, t, l, i;
  return {
    c() {
      e = P(
        /*tagName*/
        n[4]
      ), Ct(
        /*tagName*/
        n[4]
      )(e, { class: "svelte-1xq5awa" });
    },
    m(r, s) {
      U(r, e, s), l || (i = J(t = Xs.call(null, e, {
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
      t && me(t.update) && s & /*doc, editCount*/
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
function Vs(n) {
  let e, t, l, i, r, s, a, o, u, c, f, d, g, b, v, p, L, A = qe(
    /*plugins*/
    n[2]
  ), _ = [];
  for (let R = 0; R < A.length; R += 1)
    _[R] = vl(_l(n, A, R));
  const m = (R) => E(_[R], 1, 1, () => {
    _[R] = null;
  });
  let S = (
    /*tagName*/
    n[4] && Cl(n)
  );
  return {
    c() {
      e = P("div"), t = P("div"), l = P("button"), l.textContent = "exit", i = V(), r = P("p"), r.textContent = "Plugin Flow", s = V(), a = P("div");
      for (let R = 0; R < _.length; R += 1)
        _[R].c();
      o = V(), u = P("div"), c = P("button"), c.textContent = "Back", f = V(), d = P("button"), d.textContent = "Next", g = V(), S && S.c(), b = we(), T(l, "class", "back-button svelte-1xq5awa"), T(r, "class", "plugin-flow-title svelte-1xq5awa"), Mt(t, "display", "flex"), Mt(t, "align-items", "center"), Mt(t, "gap", "0.5rem"), T(t, "class", "svelte-1xq5awa"), T(a, "class", "plugin-steps svelte-1xq5awa"), T(c, "class", "back-button svelte-1xq5awa"), T(d, "class", "next-button svelte-1xq5awa"), T(u, "class", "stepper-navigation svelte-1xq5awa"), T(e, "class", "stepper svelte-1xq5awa");
    },
    m(R, h) {
      U(R, e, h), F(e, t), F(t, l), F(t, i), F(t, r), F(e, s), F(e, a);
      for (let w = 0; w < _.length; w += 1)
        _[w] && _[w].m(a, null);
      F(e, o), F(e, u), F(u, c), F(u, f), F(u, d), U(R, g, h), S && S.m(R, h), U(R, b, h), v = !0, p || (L = [
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
      ], p = !0);
    },
    p(R, [h]) {
      if (h & /*plugins, tooltipText, visited, tagName, loadPlugin, pluginStatus*/
      380) {
        A = qe(
          /*plugins*/
          R[2]
        );
        let w;
        for (w = 0; w < A.length; w += 1) {
          const N = _l(R, A, w);
          _[w] ? (_[w].p(N, h), k(_[w], 1)) : (_[w] = vl(N), _[w].c(), k(_[w], 1), _[w].m(a, null));
        }
        for (ce(), w = A.length; w < _.length; w += 1)
          m(w);
        fe();
      }
      /*tagName*/
      R[4] ? S ? S.p(R, h) : (S = Cl(R), S.c(), S.m(b.parentNode, b)) : S && (S.d(1), S = null);
    },
    i(R) {
      if (!v) {
        for (let h = 0; h < A.length; h += 1)
          k(_[h]);
        v = !0;
      }
    },
    o(R) {
      _ = _.filter(Boolean);
      for (let h = 0; h < _.length; h += 1)
        E(_[h]);
      v = !1;
    },
    d(R) {
      R && (O(e), O(g), O(b)), At(_, R), S && S.d(R), p = !1, de(L);
    }
  };
}
function zs() {
  var n, e;
  const t = document.querySelector("open-scd");
  return (e = (n = t == null ? void 0 : t.shadowRoot) === null || n === void 0 ? void 0 : n.querySelector("compas-layout")) !== null && e !== void 0 ? e : null;
}
function Xs(n, e) {
  return Object.assign(n, e), { update: (t) => Object.assign(n, t) };
}
function Ys(n, e, t) {
  let l, { doc: i } = e, { editCount: r = -1 } = e, { host: s } = e, { plugins: a = [] } = e, o = null, u = [];
  const c = ["check", "warning", "error"];
  let f = {};
  Gt();
  function d(_) {
    var m;
    (m = zs()) === null || m === void 0 || m.dispatchEvent(new CustomEvent(
      "toggle-editor-tabs",
      {
        detail: { visible: _ },
        bubbles: !0,
        composed: !0
      }
    ));
  }
  function g(_) {
    return rn(this, void 0, void 0, function* () {
      const m = yield import(_.src);
      if (customElements.get(_.id) || customElements.define(_.id, m.default), t(4, o = _.id), !u.includes(_.id)) {
        t(5, u = [...u, _.id]);
        const S = a.findIndex((R) => R.id === _.id);
        t(3, f = Object.assign(Object.assign({}, f), {
          [_.id]: c[S % c.length]
        }));
      }
    });
  }
  function b() {
    p(1);
  }
  function v() {
    p(-1);
  }
  function p(_) {
    const m = a.findIndex((S) => S.id === o);
    g(a[(m + _ + a.length) % a.length]);
  }
  Ne(() => {
    a.length && g(a[0]), d(!1);
  });
  const L = () => d(!0), A = (_) => g(_);
  return n.$$set = (_) => {
    "doc" in _ && t(0, i = _.doc), "editCount" in _ && t(1, r = _.editCount), "host" in _ && t(11, s = _.host), "plugins" in _ && t(2, a = _.plugins);
  }, n.$$.update = () => {
    n.$$.dirty & /*plugins, pluginStatus*/
    12 && t(6, l = a.reduce(
      (_, m) => {
        const S = f[m.id];
        return _[m.id] = S === "error" ? `Resolve errors in ${m.name}` : S === "warning" ? `Check warnings for ${m.name}` : `Load the ${m.name} editor`, _;
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
    v,
    s,
    L,
    A
  ];
}
class Ks extends oe {
  constructor(e) {
    super(), se(this, e, Ys, Vs, re, {
      doc: 0,
      editCount: 1,
      host: 11,
      plugins: 2
    });
  }
}
function Js(n) {
  let e, t;
  return e = new Ts({
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
      t || (k(e.$$.fragment, l), t = !0);
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
  let e, t;
  return e = new Ps({ props: { proc: (
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
      t || (k(e.$$.fragment, l), t = !0);
    },
    o(l) {
      E(e.$$.fragment, l), t = !1;
    },
    d(l) {
      Y(e, l);
    }
  };
}
function xs(n) {
  let e, t;
  return e = new Ks({
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
      t || (k(e.$$.fragment, l), t = !0);
    },
    o(l) {
      E(e.$$.fragment, l), t = !1;
    },
    d(l) {
      Y(e, l);
    }
  };
}
function $s(n) {
  let e, t, l, i;
  const r = [xs, Qs, Js], s = [];
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
      t.c(), l = we();
    },
    m(o, u) {
      s[e].m(o, u), U(o, l, u), i = !0;
    },
    p(o, [u]) {
      let c = e;
      e = a(o), e === c ? s[e].p(o, u) : (ce(), E(s[c], 1, 1, () => {
        s[c] = null;
      }), fe(), t = s[e], t ? t.p(o, u) : (t = s[e] = r[e](o), t.c()), k(t, 1), t.m(l.parentNode, l));
    },
    i(o) {
      i || (k(t), i = !0);
    },
    o(o) {
      E(t), i = !1;
    },
    d(o) {
      o && O(l), s[e].d(o);
    }
  };
}
function eo(n, e, t) {
  let { doc: l } = e, { editCount: i = -1 } = e, { host: r } = e, s = [], a = null, o = null, u = !0, c = "";
  const f = new URL("data:application/xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHByb2Nlc3Nlcz4KICA8cHJvY2Vzcz4KICAgIDxpZD5zdGFuZGFyZC1wcm9jZXNzLTE8L2lkPgogICAgPHZlcnNpb24+MC4wLjE8L3ZlcnNpb24+CiAgICA8bmFtZT5TdGFuZGFyZCBQcm9jZXNzIDE8L25hbWU+CiAgICA8ZGVzY3JpcHRpb24+CiAgICAgIFRoaXMgaXMgYSBzdGFuZGFyZGl6ZWQgcHJvY2VzcyB1c2VkIGZvciB0ZXN0aW5nIHB1cnBvc2VzIG9ubHkKICAgIDwvZGVzY3JpcHRpb24+CgogICAgPHBsdWdpbnMtc2VxdWVuY2U+CiAgICAgIDxwbHVnaW4+CiAgICAgICAgPGlkPmVuZ2luZWVyaW5nLXdpemFyZDwvaWQ+CiAgICAgICAgPG5hbWU+U3Vic3RhdGlvbjwvbmFtZT4KICAgICAgICA8c3JjPgogICAgICAgICAgaHR0cHM6Ly9waGlsaXBwaWxpZXZza2liZWFyaW5ncG9pbnRjb20uZ2l0aHViLmlvL29zY2Qtb2ZmaWNpYWwtcGx1Z2lucy10ZXN0L3BsdWdpbnMvZWRpdG9ycy9zdWJzdGF0aW9uLmpzCiAgICAgICAgPC9zcmM+CiAgICAgIDwvcGx1Z2luPgoKICAgICAgPHBsdWdpbj4KICAgICAgICA8aWQ+c3Vic3RhdGlvbi1leHBsb3JlcjwvaWQ+CiAgICAgICAgPG5hbWU+SUVEPC9uYW1lPgogICAgICAgIDxzcmM+CiAgICAgICAgICBodHRwczovL3BoaWxpcHBpbGlldnNraWJlYXJpbmdwb2ludGNvbS5naXRodWIuaW8vb3NjZC1vZmZpY2lhbC1wbHVnaW5zLXRlc3QvcGx1Z2lucy9lZGl0b3JzL2llZC5qcwogICAgICAgIDwvc3JjPgogICAgICA8L3BsdWdpbj4KCiAgICAgIDxwbHVnaW4+CiAgICAgICAgPGlkPmNvbW11bmljYXRpb24tZWRpdG9yPC9pZD4KICAgICAgICA8bmFtZT5Db21tdW5pY2F0aW9uIEV4cGxvcmVyPC9uYW1lPgogICAgICAgIDxzcmM+CiAgICAgICAgICBodHRwczovL3BoaWxpcHBpbGlldnNraWJlYXJpbmdwb2ludGNvbS5naXRodWIuaW8vb3NjZC1vZmZpY2lhbC1wbHVnaW5zLXRlc3QvcGx1Z2lucy9lZGl0b3JzL2NvbW11bmljYXRpb24uanMKICAgICAgICA8L3NyYz4KICAgICAgPC9wbHVnaW4+CiAgICA8L3BsdWdpbnMtc2VxdWVuY2U+CiAgPC9wcm9jZXNzPgoKICA8cHJvY2Vzcz4KICAgIDxpZD5zdGFuZGFyZC1wcm9jZXNzLTI8L2lkPgogICAgPHZlcnNpb24+MC4wLjE8L3ZlcnNpb24+CiAgICA8bmFtZT5TdGFuZGFyZCBQcm9jZXNzIDI8L25hbWU+CiAgICA8ZGVzY3JpcHRpb24+CiAgICAgIFRoaXMgaXMgYSBzdGFuZGFyZGl6ZWQgcHJvY2VzcyB1c2VkIGZvciB0ZXN0aW5nIHB1cnBvc2VzIG9ubHkKICAgIDwvZGVzY3JpcHRpb24+CgogICAgPHBsdWdpbnMtc2VxdWVuY2U+CiAgICAgIDxwbHVnaW4+CiAgICAgICAgPGlkPmVuZ2luZWVyaW5nLXdpemFyZDwvaWQ+CiAgICAgICAgPG5hbWU+U3Vic3RhdGlvbjwvbmFtZT4KICAgICAgICA8c3JjPgogICAgICAgICAgaHR0cHM6Ly9waGlsaXBwaWxpZXZza2liZWFyaW5ncG9pbnRjb20uZ2l0aHViLmlvL29zY2Qtb2ZmaWNpYWwtcGx1Z2lucy10ZXN0L3BsdWdpbnMvZWRpdG9ycy9zdWJzdGF0aW9uLmpzCiAgICAgICAgPC9zcmM+CiAgICAgIDwvcGx1Z2luPgoKICAgICAgPHBsdWdpbj4KICAgICAgICA8aWQ+eHl6LWVkaXRvcjwvaWQ+CiAgICAgICAgPG5hbWU+WFlaPC9uYW1lPgogICAgICAgIDxzcmM+CiAgICAgICAgICBodHRwczovL3BoaWxpcHBpbGlldnNraWJlYXJpbmdwb2ludGNvbS5naXRodWIuaW8vb3NjZC1vZmZpY2lhbC1wbHVnaW5zLXRlc3QvcGx1Z2lucy9lZGl0b3JzL3h5ei5qcwogICAgICAgIDwvc3JjPgogICAgICA8L3BsdWdpbj4KCiAgICAgIDxwbHVnaW4+CiAgICAgICAgPGlkPm5ldHdvcmstZXhwbG9yZXI8L2lkPgogICAgICAgIDxuYW1lPk5ldHdvcmsgRXhwbG9yZXI8L25hbWU+CiAgICAgICAgPHNyYz4KICAgICAgICAgIGh0dHBzOi8vcGhpbGlwcGlsaWV2c2tpYmVhcmluZ3BvaW50Y29tLmdpdGh1Yi5pby9vc2NkLW9mZmljaWFsLXBsdWdpbnMtdGVzdC9wbHVnaW5zL2VkaXRvcnMvbmV0d29yay5qcwogICAgICAgIDwvc3JjPgogICAgICA8L3BsdWdpbj4KICAgIDwvcGx1Z2lucy1zZXF1ZW5jZT4KICA8L3Byb2Nlc3M+CgogIDxwcm9jZXNzPgogICAgPGlkPnN0YW5kYXJkLXByb2Nlc3MtMzwvaWQ+CiAgICA8dmVyc2lvbj4wLjAuMTwvdmVyc2lvbj4KICAgIDxuYW1lPlN0YW5kYXJkIFByb2Nlc3MgMzwvbmFtZT4KICAgIDxkZXNjcmlwdGlvbj4KICAgICAgVGhpcyBpcyBhIHN0YW5kYXJkaXplZCBwcm9jZXNzIHVzZWQgZm9yIHRlc3RpbmcgcHVycG9zZXMgb25seQogICAgPC9kZXNjcmlwdGlvbj4KCiAgICA8cGx1Z2lucy1zZXF1ZW5jZT4KICAgICAgPHBsdWdpbj4KICAgICAgICA8aWQ+ZW5naW5lZXJpbmctd2l6YXJkPC9pZD4KICAgICAgICA8bmFtZT5TdWJzdGF0aW9uPC9uYW1lPgogICAgICAgIDxzcmM+CiAgICAgICAgICBodHRwczovL3BoaWxpcHBpbGlldnNraWJlYXJpbmdwb2ludGNvbS5naXRodWIuaW8vb3NjZC1vZmZpY2lhbC1wbHVnaW5zLXRlc3QvcGx1Z2lucy9lZGl0b3JzL3N1YnN0YXRpb24uanMKICAgICAgICA8L3NyYz4KICAgICAgPC9wbHVnaW4+CgogICAgICA8cGx1Z2luPgogICAgICAgIDxpZD5zaXRpcGUtZWRpdG9yPC9pZD4KICAgICAgICA8bmFtZT5TaXRpcGU8L25hbWU+CiAgICAgICAgPHNyYz4KICAgICAgICAgIGh0dHBzOi8vcGhpbGlwcGlsaWV2c2tpYmVhcmluZ3BvaW50Y29tLmdpdGh1Yi5pby9vc2NkLW9mZmljaWFsLXBsdWdpbnMtdGVzdC9wbHVnaW5zL2VkaXRvcnMvc2l0aXBlLmpzCiAgICAgICAgPC9zcmM+CiAgICAgIDwvcGx1Z2luPgoKICAgICAgPHBsdWdpbj4KICAgICAgICA8aWQ+c3Vic3RhdGlvbi1leHBsb3JlcjwvaWQ+CiAgICAgICAgPG5hbWU+SUVEPC9uYW1lPgogICAgICAgIDxzcmM+CiAgICAgICAgICBodHRwczovL3BoaWxpcHBpbGlldnNraWJlYXJpbmdwb2ludGNvbS5naXRodWIuaW8vb3NjZC1vZmZpY2lhbC1wbHVnaW5zLXRlc3QvcGx1Z2lucy9lZGl0b3JzL2llZC5qcwogICAgICAgIDwvc3JjPgogICAgICA8L3BsdWdpbj4KICAgIDwvcGx1Z2lucy1zZXF1ZW5jZT4KICA8L3Byb2Nlc3M+CjwvcHJvY2Vzc2VzPgo=", import.meta.url).href, d = (_) => {
    var m, S;
    return (S = (m = _ == null ? void 0 : _.textContent) === null || m === void 0 ? void 0 : m.trim()) !== null && S !== void 0 ? S : "";
  }, g = (_) => Array.from(_.getElementsByTagName("process")).map((m) => {
    const S = Array.from(m.querySelectorAll("plugins-sequence > plugin")).map((R) => ({
      id: d(R.querySelector("id")),
      name: d(R.querySelector("name")),
      src: d(R.querySelector("src"))
    }));
    return {
      id: d(m.querySelector(":scope > id")),
      version: d(m.querySelector(":scope > version")),
      name: d(m.querySelector(":scope > name")),
      description: d(m.querySelector(":scope > description")),
      plugins: S
    };
  });
  function b() {
    return rn(this, void 0, void 0, function* () {
      t(6, u = !0), t(7, c = "");
      try {
        const _ = yield fetch(f, { cache: "no-cache" });
        if (!_.ok)
          throw new Error(`HTTP ${_.status}`);
        const m = new DOMParser().parseFromString(yield _.text(), "application/xml");
        if (m.querySelector("parsererror"))
          throw new Error("Invalid XML file format.");
        t(3, s = g(m));
      } catch (_) {
        t(3, s = []), t(7, c = _.message || "Failed to load processes.");
      } finally {
        t(6, u = !1);
      }
    });
  }
  Ne(b);
  function v(_) {
    t(5, o = _), t(4, a = null);
  }
  function p(_) {
    t(4, a = _.detail);
  }
  function L(_) {
    v(_.detail);
  }
  function A() {
    t(4, a = null);
  }
  return n.$$set = (_) => {
    "doc" in _ && t(0, l = _.doc), "editCount" in _ && t(1, i = _.editCount), "host" in _ && t(2, r = _.host);
  }, [
    l,
    i,
    r,
    s,
    a,
    o,
    u,
    c,
    p,
    L,
    A
  ];
}
class to extends oe {
  constructor(e) {
    super(), se(this, e, eo, $s, re, { doc: 0, editCount: 1, host: 2 });
  }
}
function Il(n) {
  let e, t;
  return e = new to({
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
      t || (k(e.$$.fragment, l), t = !0);
    },
    o(l) {
      E(e.$$.fragment, l), t = !1;
    },
    d(l) {
      Y(e, l);
    }
  };
}
function no(n) {
  let e, t, l, i, r, s = (
    /*doc*/
    (n[0] || /*dev*/
    n[1]) && Il(n)
  );
  return {
    c() {
      s && s.c(), e = V(), t = P("input"), l = V(), i = P("input"), T(t, "type", "hidden"), T(t, "name", "package-name"), t.value = Sl, T(i, "type", "hidden"), T(i, "name", "package-version"), i.value = Rl;
    },
    m(a, o) {
      s && s.m(a, o), U(a, e, o), U(a, t, o), U(a, l, o), U(a, i, o), r = !0;
    },
    p(a, [o]) {
      /*doc*/
      a[0] || /*dev*/
      a[1] ? s ? (s.p(a, o), o & /*doc, dev*/
      3 && k(s, 1)) : (s = Il(a), s.c(), k(s, 1), s.m(e.parentNode, e)) : s && (ce(), E(s, 1, 1, () => {
        s = null;
      }), fe());
    },
    i(a) {
      r || (k(s), r = !0);
    },
    o(a) {
      E(s), r = !1;
    },
    d(a) {
      a && (O(e), O(t), O(l), O(i)), s && s.d(a);
    }
  };
}
function lo(n, e, t) {
  let { doc: l } = e, { dev: i = !1 } = e, { editCount: r = 0 } = e;
  return console.log("editcount", r), n.$$set = (s) => {
    "doc" in s && t(0, l = s.doc), "dev" in s && t(1, i = s.dev), "editCount" in s && t(2, r = s.editCount);
  }, [l, i, r];
}
class io extends oe {
  constructor(e) {
    super(), se(this, e, lo, no, re, { doc: 0, dev: 1, editCount: 2 });
  }
}
class oo extends HTMLElement {
  connectedCallback() {
    var t;
    this.attachShadow({ mode: "open" }), this.plugin = new io({
      target: this.shadowRoot,
      props: {
        doc: this._doc,
        editCount: -1,
        host: this
      }
    });
    const e = ro();
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
function ro() {
  const n = `${Sl}-v${Rl}-style`, e = ao(), t = document.createElement("link");
  return t.rel = "stylesheet", t.type = "text/css", t.href = e, t.id = n, t;
}
function ao() {
  const n = new URL(import.meta.url), e = n.origin, t = n.pathname.split("/").slice(0, -1).filter(Boolean).join("/");
  return [e, t, "style.css"].filter(Boolean).join("/");
}
export {
  oo as default
};
