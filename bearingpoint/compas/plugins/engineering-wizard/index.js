var mi = Object.defineProperty;
var gi = (n, e, t) => e in n ? mi(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var jt = (n, e, t) => (gi(n, typeof e != "symbol" ? e + "" : e, t), t);
function $() {
}
function j(n, e) {
  for (const t in e)
    n[t] = e[t];
  return (
    /** @type {T & S} */
    n
  );
}
function vl(n) {
  return n();
}
function sn() {
  return /* @__PURE__ */ Object.create(null);
}
function he(n) {
  n.forEach(vl);
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
    const i = Cl(n, e, t, l);
    return n[0](i);
  }
}
function Cl(n, e, t, l) {
  return n[1] && l ? j(t.ctx.slice(), n[1](l(e))) : t.ctx;
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
    const s = Cl(e, t, l, r);
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
function P(n, e) {
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
function je(n) {
  return document.createElementNS("http://www.w3.org/2000/svg", n);
}
function ye(n) {
  return document.createTextNode(n);
}
function V() {
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
function on(n, e) {
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
function un(n, e) {
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
const Jt = [], Il = /* @__PURE__ */ Promise.resolve();
let Qt = !1;
function Al() {
  Qt || (Qt = !0, Il.then(yl));
}
function ki() {
  return Al(), Il;
}
function xt(n) {
  ct.push(n);
}
function Xe(n) {
  Jt.push(n);
}
const Wt = /* @__PURE__ */ new Set();
let at = 0;
function yl() {
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
      Wt.has(t) || (Wt.add(t), t());
    }
    ct.length = 0;
  } while (ot.length);
  for (; Jt.length; )
    Jt.pop()();
  Qt = !1, Wt.clear(), bt(n);
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
function L(n, e) {
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
function We(n) {
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
function kl(n, e, t, l, i, r, s, a, o, u, c, f) {
  let d = n.length, g = r.length, _ = d;
  const k = {};
  for (; _--; )
    k[n[_].key] = _;
  const p = [], I = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ new Map(), b = [];
  for (_ = g; _--; ) {
    const h = f(i, r, _), w = t(h);
    let G = s.get(w);
    G ? b.push(() => G.p(h, e)) : (G = u(w, h), G.c()), I.set(w, p[_] = G), w in k && v.set(w, Math.abs(_ - k[w]));
  }
  const m = /* @__PURE__ */ new Set(), D = /* @__PURE__ */ new Set();
  function S(h) {
    L(h, 1), h.m(a, c), s.set(h.key, h), c = h.first, g--;
  }
  for (; d && g; ) {
    const h = p[g - 1], w = n[d - 1], G = h.key, M = w.key;
    h === w ? (c = h.first, d--, g--) : I.has(M) ? !s.has(G) || m.has(G) ? S(h) : D.has(M) ? d-- : v.get(G) > v.get(M) ? (D.add(G), S(h)) : (m.add(M), d--) : (o(w, s), d--);
  }
  for (; d--; ) {
    const h = n[d];
    I.has(h.key) || o(h, s);
  }
  for (; g; )
    S(p[g - 1]);
  return he(b), p;
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
function J(n) {
  n && n.c();
}
function Y(n, e, t) {
  const { fragment: l, after_update: i } = n.$$;
  l && l.m(e, t), xt(() => {
    const r = n.$$.on_mount.map(vl).filter(ve);
    n.$$.on_destroy ? n.$$.on_destroy.push(...r) : he(r), n.$$.on_mount = [];
  }), i.forEach(xt);
}
function K(n, e) {
  const t = n.$$;
  t.fragment !== null && (Li(t.after_update), he(t.on_destroy), t.fragment && t.fragment.d(e), t.on_destroy = t.fragment = null, t.ctx = []);
}
function Ei(n, e) {
  n.$$.dirty[0] === -1 && (ot.push(n), Al(), n.$$.dirty.fill(0)), n.$$.dirty[e / 31 | 0] |= 1 << e % 31;
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
    bound: sn(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (o ? o.$$.context : [])),
    // everything else
    callbacks: sn(),
    dirty: a,
    skip_bound: !1,
    root: e.target || o.$$.root
  };
  s && s(u.root);
  let c = !1;
  if (u.ctx = t ? t(n, e.props || {}, (f, d, ...g) => {
    const _ = g.length ? g[0] : d;
    return u.ctx && i(u.ctx[f], u.ctx[f] = _) && (!u.skip_bound && u.bound[f] && u.bound[f](_), c && Ei(n, f)), d;
  }) : [], u.update(), c = !0, he(u.before_update), u.fragment = l ? l(u.ctx) : !1, e.target) {
    if (e.hydrate) {
      const f = Ai(e.target);
      u.fragment && u.fragment.l(f), f.forEach(O);
    } else
      u.fragment && u.fragment.c();
    e.intro && L(n.$$.fragment), Y(n, e.target, e.anchor), yl();
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
    jt(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    jt(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    K(this, 1), this.$destroy = $;
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
const wl = "archive-explorer", Ll = "0.0.1";
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
const cn = /^[a-z]+(?::(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/, Mi = /^[^$]+(?:\$(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/;
function Be(n) {
  let e, t = [];
  n.$on = (i, r) => {
    let s = i, a = () => {
    };
    return e ? a = e(s, r) : t.push([s, r]), s.match(cn) && console && console.warn('Event modifiers in SMUI now use "$" instead of ":", so that all events can be bound with modifiers. Please update your event binding: ', s), () => {
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
      const d = u.match(cn), g = u.match(Mi), _ = d || g;
      if (u.match(/^SMUI:\w+:/)) {
        const I = u.split(":");
        let v = "";
        for (let b = 0; b < I.length; b++)
          v += b === I.length - 1 ? ":" + I[b] : I[b].split("-").map((m) => m.slice(0, 1).toUpperCase() + m.slice(1)).join("");
        console.warn(`The event ${u.split("$")[0]} has been renamed to ${v.split("$")[0]}.`), u = v;
      }
      if (_) {
        const I = u.split(d ? ":" : "$");
        u = I[0];
        const v = I.slice(1).reduce((b, m) => (b[m] = !0, b), {});
        v.passive && (f = f || {}, f.passive = !0), v.nonpassive && (f = f || {}, f.passive = !1), v.capture && (f = f || {}, f.capture = !0), v.once && (f = f || {}, f.once = !0), v.preventDefault && (c = Ti(c)), v.stopPropagation && (c = Oi(c)), v.stopImmediatePropagation && (c = Ui(c)), v.self && (c = Bi(i, c)), v.trusted && (c = Pi(c));
      }
      const k = fn(i, u, c, f), p = () => {
        k();
        const I = r.indexOf(p);
        I > -1 && r.splice(I, 1);
      };
      return r.push(p), u in s || (s[u] = fn(i, u, l)), p;
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
function fn(n, e, t, l) {
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
function Ni(n, e, t) {
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
function Gi(n) {
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
const Sl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  applyPassive: Gi
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
function ji(n, e) {
  if (n.closest)
    return n.closest(e);
  for (var t = n; t; ) {
    if (Rl(t, e))
      return t;
    t = t.parentElement;
  }
  return null;
}
function Rl(n, e) {
  var t = n.matches || n.webkitMatchesSelector || n.msMatchesSelector;
  return t.call(n, e);
}
function Wi(n) {
  var e = n;
  if (e.offsetParent !== null)
    return e.scrollWidth;
  var t = e.cloneNode(!0);
  t.style.setProperty("position", "absolute"), t.style.setProperty("transform", "translate(-9999px, -9999px)"), document.documentElement.appendChild(t);
  var l = t.scrollWidth;
  return document.documentElement.removeChild(t), l;
}
const El = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  closest: ji,
  estimateScrollWidth: Wi,
  matches: Rl
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
var Zi = {
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
}, dn = {
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
var hn = [
  "touchstart",
  "pointerdown",
  "mousedown",
  "keydown"
], mn = [
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
        return Zi;
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
        return dn;
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
          for (var r = Ke(hn), s = r.next(); !s.done; s = r.next()) {
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
          for (var r = Ke(mn), s = r.next(); !s.done; s = r.next()) {
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
        for (var i = Ke(hn), r = i.next(); !r.done; r = i.next()) {
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
        for (var i = Ke(mn), r = i.next(); !r.done; r = i.next()) {
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
        var d = this.getFgTranslationCoordinates(), g = d.startPoint, _ = d.endPoint;
        c = g.x + "px, " + g.y + "px", f = _.x + "px, " + _.y + "px";
      }
      this.adapter.updateCssVariable(i, c), this.adapter.updateCssVariable(r, f), clearTimeout(this.activationTimer), clearTimeout(this.fgDeactivationRemovalTimer), this.rmBoundedActivationClasses(), this.adapter.removeClass(a), this.adapter.computeBoundingRect(), this.adapter.addClass(o), this.activationTimer = setTimeout(function() {
        t.activationTimerCallback();
      }, u);
    }, e.prototype.getFgTranslationCoordinates = function() {
      var t = this.activationState, l = t.activationEvent, i = t.wasActivatedByPointer, r;
      i ? r = Ni(l, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect()) : r = {
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
      }, dn.FG_DEACTIVATION_MS));
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
const { applyPassive: Ht } = Sl, { matches: Xi } = El;
function vt(n, { ripple: e = !0, surface: t = !1, unbounded: l = !1, disabled: i = !1, color: r, active: s, rippleElement: a, eventTarget: o, activeTarget: u, addClass: c = (_) => n.classList.add(_), removeClass: f = (_) => n.classList.remove(_), addStyle: d = (_, k) => n.style.setProperty(_, k), initPromise: g = Promise.resolve() } = {}) {
  let _, k = Pe("SMUI:addLayoutListener"), p, I = s, v = o, b = u;
  function m() {
    t ? (c("mdc-ripple-surface"), r === "primary" ? (c("smui-ripple-surface--primary"), f("smui-ripple-surface--secondary")) : r === "secondary" ? (f("smui-ripple-surface--primary"), c("smui-ripple-surface--secondary")) : (f("smui-ripple-surface--primary"), f("smui-ripple-surface--secondary"))) : (f("mdc-ripple-surface"), f("smui-ripple-surface--primary"), f("smui-ripple-surface--secondary")), _ && I !== s && (I = s, s ? _.activate() : s === !1 && _.deactivate()), e && !_ ? (_ = new zi({
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
      _ && (_.init(), _.setUnbounded(l));
    })) : _ && !e && g.then(() => {
      _ && (_.destroy(), _ = void 0);
    }), _ && (v !== o || b !== u) && (v = o, b = u, _.destroy(), requestAnimationFrame(() => {
      _ && (_.init(), _.setUnbounded(l));
    })), !e && l && c("mdc-ripple-upgraded--unbounded");
  }
  m(), k && (p = k(D));
  function D() {
    _ && _.layout();
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
      } = Object.assign({ ripple: !0, surface: !1, unbounded: !1, disabled: !1, color: void 0, active: void 0, rippleElement: void 0, eventTarget: void 0, activeTarget: void 0, addClass: (h) => n.classList.add(h), removeClass: (h) => n.classList.remove(h), addStyle: (h, w) => n.style.setProperty(h, w), initPromise: Promise.resolve() }, S)), m();
    },
    destroy() {
      _ && (_.destroy(), _ = void 0, f("mdc-ripple-surface"), f("smui-ripple-surface--primary"), f("smui-ripple-surface--secondary")), p && p();
    }
  };
}
function Yi(n) {
  let e = (
    /*tag*/
    n[1]
  ), t, l, i = (
    /*tag*/
    n[1] && Zt(n)
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
      ) ? (i.d(1), i = Zt(r), e = /*tag*/
      r[1], i.c(), i.m(t.parentNode, t)) : i.p(r, s) : (i = Zt(r), e = /*tag*/
      r[1], i.c(), i.m(t.parentNode, t)) : e && (i.d(1), i = null, e = /*tag*/
      r[1]);
    },
    i(r) {
      l || (L(i, r), l = !0);
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
    u = j(u, o[c]);
  return {
    c() {
      e = je("svg"), a && a.c(), on(e, u);
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
      ), on(e, u = oe(o, [f & /*$$restProps*/
      32 && /*$$restProps*/
      c[5]])), t && ve(t.update) && f & /*use*/
      1 && t.update.call(
        null,
        /*use*/
        c[0]
      );
    },
    i(c) {
      l || (L(a, c), l = !0);
    },
    o(c) {
      E(a, c), l = !1;
    },
    d(c) {
      c && O(e), a && a.d(c), n[9](null), i = !1, he(r);
    }
  };
}
function Zt(n) {
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
    u = j(u, o[c]);
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
      l || (L(a, c), l = !0);
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
    s = j(s, r[a]);
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
      }), pe(), t = s[e], t ? t.p(o, u) : (t = s[e] = r[e](o), t.c()), L(t, 1), t.m(l.parentNode, l));
    },
    i(o) {
      i || (L(t), i = !0);
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
  function g(p) {
    ee[p ? "unshift" : "push"](() => {
      f = p, t(2, f);
    });
  }
  function _(p) {
    ee[p ? "unshift" : "push"](() => {
      f = p, t(2, f);
    });
  }
  function k(p) {
    ee[p ? "unshift" : "push"](() => {
      f = p, t(2, f);
    });
  }
  return n.$$set = (p) => {
    e = j(j({}, e), Oe(p)), t(5, r = ue(e, i)), "use" in p && t(0, o = p.use), "tag" in p && t(1, u = p.tag), "$$scope" in p && t(7, a = p.$$scope);
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
    _,
    k
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
      e || (L(l, i), e = !0);
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
function gn(n) {
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
    n[6] && gn()
  );
  return {
    c() {
      e = F("div"), t = V(), s && s.c(), a && a.c(), l = Se(), T(e, "class", "mdc-button__ripple");
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
      o[6] ? a || (a = gn(), a.c(), a.m(l.parentNode, l)) : a && (a.d(1), a = null);
    },
    i(o) {
      i || (L(s, o), i = !0);
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
      u = j(u, i[c]);
    return o !== void 0 && o[0] & /*tag, ripple, color, $$restProps, addClass, removeClass, addStyle, forwardEvents, use, className, variant, touch, context, secondary, internalClasses, internalStyles, style, actionProp, defaultProp, secondaryProp, href*/
    12580351 && (u = j(u, oe(i, [
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
      e && J(e.$$.fragment), t = Se();
    },
    m(a, o) {
      e && Y(e, a, o), U(a, t, o), l = !0;
    },
    p(a, o) {
      if (o[0] & /*component*/
      512 && r !== (r = /*component*/
      a[9])) {
        if (e) {
          ge();
          const u = e;
          E(u.$$.fragment, 1, 0, () => {
            K(u, 1);
          }), pe();
        }
        r ? (e = Ot(r, s(a, o)), a[29](e), e.$on(
          "click",
          /*handleClick*/
          a[22]
        ), J(e.$$.fragment), L(e.$$.fragment, 1), Y(e, t.parentNode, t)) : e = null;
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
      l || (e && L(e.$$.fragment, a), l = !0);
    },
    o(a) {
      e && E(e.$$.fragment, a), l = !1;
    },
    d(a) {
      a && O(t), n[29](null), e && K(e, a);
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
  let { use: f = [] } = e, { class: d = "" } = e, { style: g = "" } = e, { ripple: _ = !0 } = e, { color: k = "primary" } = e, { variant: p = "text" } = e, { touch: I = !1 } = e, { href: v = void 0 } = e, { action: b = "close" } = e, { defaultAction: m = !1 } = e, { secondary: D = !1 } = e, S, h = {}, w = {}, G = Pe("SMUI:button:context"), { component: M = Bt } = e, { tag: y = M === Bt ? v == null ? "button" : "a" : void 0 } = e, B = a.disabled;
  Me("SMUI:label:context", "button"), Me("SMUI:icon:context", "button");
  function R(C) {
    h[C] || t(12, h[C] = !0, h);
  }
  function W(C) {
    (!(C in h) || h[C]) && t(12, h[C] = !1, h);
  }
  function de(C, N) {
    w[C] != N && (N === "" || N == null ? (delete w[C], t(13, w)) : t(13, w[C] = N, w));
  }
  function _e() {
    G === "banner" && Ae(Ce(), D ? "SMUIBannerButton:secondaryActionClick" : "SMUIBannerButton:primaryActionClick");
  }
  function Ce() {
    return S.getElement();
  }
  function q(C) {
    ee[C ? "unshift" : "push"](() => {
      S = C, t(11, S);
    });
  }
  return n.$$set = (C) => {
    t(31, e = j(j({}, e), Oe(C))), t(23, a = ue(e, s)), "use" in C && t(0, f = C.use), "class" in C && t(1, d = C.class), "style" in C && t(2, g = C.style), "ripple" in C && t(3, _ = C.ripple), "color" in C && t(4, k = C.color), "variant" in C && t(5, p = C.variant), "touch" in C && t(6, I = C.touch), "href" in C && t(7, v = C.href), "action" in C && t(24, b = C.action), "defaultAction" in C && t(25, m = C.defaultAction), "secondary" in C && t(8, D = C.secondary), "component" in C && t(9, M = C.component), "tag" in C && t(10, y = C.tag), "$$scope" in C && t(30, u = C.$$scope);
  }, n.$$.update = () => {
    if (t(16, l = G === "dialog:action" && b != null ? { "data-mdc-dialog-action": b } : { action: e.action }), t(15, i = G === "dialog:action" && m ? { "data-mdc-dialog-button-default": "" } : { default: e.default }), t(14, r = G === "banner" ? {} : { secondary: e.secondary }), B !== a.disabled) {
      if (S) {
        const C = Ce();
        "blur" in C && C.blur();
      }
      t(27, B = a.disabled);
    }
  }, e = Oe(e), [
    f,
    d,
    g,
    _,
    k,
    p,
    I,
    v,
    D,
    M,
    y,
    S,
    h,
    w,
    r,
    i,
    l,
    c,
    G,
    R,
    W,
    de,
    _e,
    a,
    b,
    m,
    Ce,
    B,
    o,
    q,
    u
  ];
}
class pn extends fe {
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
}, _n = {
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
        return _n;
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
      t > 0 && (t += _n.NOTCH_ELEMENT_PADDING), this.adapter.setNotchWidthProperty(t), this.adapter.addClass(l);
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
}, bn = {
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
var vn = ["mousedown", "touchstart"], Cn = ["click", "keydown"], hr = (
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
        return bn;
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
        for (var s = Ke(vn), a = s.next(); !a.done; a = s.next()) {
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
        for (var u = Ke(Cn), c = u.next(); !c.done; c = u.next()) {
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
        for (var s = Ke(vn), a = s.next(); !a.done; a = s.next()) {
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
        for (var u = Ke(Cn), c = u.next(); !c.done; c = u.next()) {
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
          var l = this.adapter.getLabelWidth() * bn.LABEL_SCALE;
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
      ).map(An).concat([
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
    d = j(d, f[g]);
  return {
    c() {
      e = F("label"), c && c.c(), ne(e, d);
    },
    m(g, _) {
      U(g, e, _), c && c.m(e, null), n[24](e), s = !0, a || (o = [
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
    p(g, _) {
      c && c.p && (!s || _ & /*$$scope*/
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
          _,
          null
        ) : ae(
          /*$$scope*/
          g[21]
        ),
        null
      ), ne(e, d = oe(f, [
        (!s || _ & /*className, floatAbove, required, internalClasses*/
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
        (!s || _ & /*internalStyles, style*/
        528 && l !== (l = Object.entries(
          /*internalStyles*/
          g[9]
        ).map(An).concat([
          /*style*/
          g[4]
        ]).join(" "))) && { style: l },
        (!s || _ & /*forId*/
        32 && i !== (i = /*forId*/
        g[5] || /*inputProps*/
        (g[11] ? (
          /*inputProps*/
          g[11].id
        ) : void 0))) && { for: i },
        _ & /*$$restProps*/
        4096 && /*$$restProps*/
        g[12]
      ])), r && ve(r.update) && _ & /*use*/
      4 && r.update.call(
        null,
        /*use*/
        g[2]
      );
    },
    i(g) {
      s || (L(c, g), s = !0);
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
      ).map(In).concat([
        /*style*/
        n[4]
      ]).join(" ")
    },
    /*$$restProps*/
    n[12]
  ], f = {};
  for (let d = 0; d < c.length; d += 1)
    f = j(f, c[d]);
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
        ).map(In).concat([
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
      r || (L(u, d), r = !0);
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
      }), pe(), t = s[e], t ? t.p(o, u) : (t = s[e] = r[e](o), t.c()), L(t, 1), t.m(l.parentNode, l));
    },
    i(o) {
      i || (L(t), i = !0);
    },
    o(o) {
      E(t), i = !1;
    },
    d(o) {
      o && O(l), s[e].d(o);
    }
  };
}
const In = ([n, e]) => `${n}: ${e};`, An = ([n, e]) => `${n}: ${e};`;
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
  let { use: u = [] } = e, { class: c = "" } = e, { style: f = "" } = e, { for: d = void 0 } = e, { floatAbove: g = !1 } = e, { required: _ = !1 } = e, { wrapped: k = !1 } = e, p, I, v = {}, b = {}, m = (a = Pe("SMUI:generic:input:props")) !== null && a !== void 0 ? a : {}, D = g, S = _;
  Ne(() => {
    t(18, I = new rr({
      addClass: h,
      removeClass: w,
      getWidth: () => {
        var C, N;
        const me = de(), be = me.cloneNode(!0);
        (C = me.parentNode) === null || C === void 0 || C.appendChild(be), be.classList.add("smui-floating-label--remove-transition"), be.classList.add("smui-floating-label--force-size"), be.classList.remove("mdc-floating-label--float-above");
        const Ie = be.scrollWidth;
        return (N = me.parentNode) === null || N === void 0 || N.removeChild(be), Ie;
      },
      registerInteractionHandler: (C, N) => de().addEventListener(C, N),
      deregisterInteractionHandler: (C, N) => de().removeEventListener(C, N)
    }));
    const q = {
      get element() {
        return de();
      },
      addStyle: G,
      removeStyle: M
    };
    return Ae(p, "SMUIFloatingLabel:mount", q), I.init(), () => {
      Ae(p, "SMUIFloatingLabel:unmount", q), I.destroy();
    };
  });
  function h(q) {
    v[q] || t(8, v[q] = !0, v);
  }
  function w(q) {
    (!(q in v) || v[q]) && t(8, v[q] = !1, v);
  }
  function G(q, C) {
    b[q] != C && (C === "" || C == null ? (delete b[q], t(9, b)) : t(9, b[q] = C, b));
  }
  function M(q) {
    q in b && (delete b[q], t(9, b));
  }
  function y(q) {
    I.shake(q);
  }
  function B(q) {
    t(0, g = q);
  }
  function R(q) {
    t(1, _ = q);
  }
  function W() {
    return I.getWidth();
  }
  function de() {
    return p;
  }
  function _e(q) {
    ee[q ? "unshift" : "push"](() => {
      p = q, t(7, p);
    });
  }
  function Ce(q) {
    ee[q ? "unshift" : "push"](() => {
      p = q, t(7, p);
    });
  }
  return n.$$set = (q) => {
    e = j(j({}, e), Oe(q)), t(12, i = ue(e, l)), "use" in q && t(2, u = q.use), "class" in q && t(3, c = q.class), "style" in q && t(4, f = q.style), "for" in q && t(5, d = q.for), "floatAbove" in q && t(0, g = q.floatAbove), "required" in q && t(1, _ = q.required), "wrapped" in q && t(6, k = q.wrapped), "$$scope" in q && t(21, s = q.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty & /*instance, previousFloatAbove, floatAbove*/
    786433 && I && D !== g && (t(19, D = g), I.float(g)), n.$$.dirty & /*instance, previousRequired, required*/
    1310722 && I && S !== _ && (t(20, S = _), I.setRequired(_));
  }, [
    g,
    _,
    u,
    c,
    f,
    d,
    k,
    p,
    v,
    b,
    o,
    m,
    i,
    y,
    B,
    R,
    W,
    de,
    I,
    D,
    S,
    s,
    r,
    _e,
    Ce
  ];
}
class Hl extends fe {
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
      ).map(yn).concat([
        /*style*/
        n[2]
      ]).join(" ")
    },
    /*$$restProps*/
    n[8]
  ], o = {};
  for (let u = 0; u < a.length; u += 1)
    o = j(o, a[u]);
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
        ).map(yn).concat([
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
const yn = ([n, e]) => `${n}: ${e};`;
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
    addClass: k,
    removeClass: p,
    hasClass: _,
    setStyle: I,
    registerEventHandler: (h, w) => D().addEventListener(h, w),
    deregisterEventHandler: (h, w) => D().removeEventListener(h, w)
  }), f.init(), () => {
    f.destroy();
  }));
  function _(h) {
    return h in d ? d[h] : D().classList.contains(h);
  }
  function k(h) {
    d[h] || t(5, d[h] = !0, d);
  }
  function p(h) {
    (!(h in d) || d[h]) && t(5, d[h] = !1, d);
  }
  function I(h, w) {
    g[h] != w && (w === "" || w == null ? (delete g[h], t(6, g)) : t(6, g[h] = w, g));
  }
  function v() {
    f.activate();
  }
  function b() {
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
    e = j(j({}, e), Oe(h)), t(8, i = ue(e, l)), "use" in h && t(0, s = h.use), "class" in h && t(1, a = h.class), "style" in h && t(2, o = h.style), "active" in h && t(3, u = h.active);
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
    v,
    b,
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
function kn(n) {
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
      ).map(wn).join(" "));
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
      ).map(wn).join(" "))) && T(e, "style", t);
    },
    i(s) {
      l || (L(r, s), l = !0);
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
  n[3] && kn(n), d = [
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
  for (let _ = 0; _ < d.length; _ += 1)
    g = j(g, d[_]);
  return {
    c() {
      e = F("div"), t = F("div"), l = V(), f && f.c(), i = V(), r = F("div"), T(t, "class", "mdc-notched-outline__leading"), T(r, "class", "mdc-notched-outline__trailing"), ne(e, g);
    },
    m(_, k) {
      U(_, e, k), P(e, t), P(e, l), f && f.m(e, null), P(e, i), P(e, r), n[16](e), o = !0, u || (c = [
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
    p(_, [k]) {
      /*noLabel*/
      _[3] ? f && (ge(), E(f, 1, 1, () => {
        f = null;
      }), pe()) : f ? (f.p(_, k), k & /*noLabel*/
      8 && L(f, 1)) : (f = kn(_), f.c(), L(f, 1), f.m(e, i)), ne(e, g = oe(d, [
        (!o || k & /*className, notched, noLabel, internalClasses*/
        78 && s !== (s = x({
          [
            /*className*/
            _[1]
          ]: !0,
          "mdc-notched-outline": !0,
          "mdc-notched-outline--notched": (
            /*notched*/
            _[2]
          ),
          "mdc-notched-outline--no-label": (
            /*noLabel*/
            _[3]
          ),
          .../*internalClasses*/
          _[6]
        }))) && { class: s },
        k & /*$$restProps*/
        1024 && /*$$restProps*/
        _[10]
      ])), a && ve(a.update) && k & /*use*/
      1 && a.update.call(
        null,
        /*use*/
        _[0]
      );
    },
    i(_) {
      o || (L(f), o = !0);
    },
    o(_) {
      E(f), o = !1;
    },
    d(_) {
      _ && O(e), f && f.d(), n[16](null), u = !1, he(c);
    }
  };
}
const wn = ([n, e]) => `${n}: ${e};`;
function Ar(n, e, t) {
  const l = ["use", "class", "notched", "noLabel", "notch", "closeNotch", "getElement"];
  let i = ue(e, l), { $$slots: r = {}, $$scope: s } = e;
  const a = Be(Re());
  let { use: o = [] } = e, { class: u = "" } = e, { notched: c = !1 } = e, { noLabel: f = !1 } = e, d, g, _, k = {}, p = {};
  Ne(() => (g = new ur({
    addClass: v,
    removeClass: b,
    setNotchWidthProperty: (y) => m("width", y + "px"),
    removeNotchWidthProperty: () => D("width")
  }), g.init(), () => {
    g.destroy();
  }));
  function I(y) {
    t(4, _ = y.detail);
  }
  function v(y) {
    k[y] || t(6, k[y] = !0, k);
  }
  function b(y) {
    (!(y in k) || k[y]) && t(6, k[y] = !1, k);
  }
  function m(y, B) {
    p[y] != B && (B === "" || B == null ? (delete p[y], t(7, p)) : t(7, p[y] = B, p));
  }
  function D(y) {
    y in p && (delete p[y], t(7, p));
  }
  function S(y) {
    g.notch(y);
  }
  function h() {
    g.closeNotch();
  }
  function w() {
    return d;
  }
  function G(y) {
    ee[y ? "unshift" : "push"](() => {
      d = y, t(5, d);
    });
  }
  const M = () => t(4, _ = void 0);
  return n.$$set = (y) => {
    e = j(j({}, e), Oe(y)), t(10, i = ue(e, l)), "use" in y && t(0, o = y.use), "class" in y && t(1, u = y.class), "notched" in y && t(2, c = y.notched), "noLabel" in y && t(3, f = y.noLabel), "$$scope" in y && t(14, s = y.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty & /*floatingLabel*/
    16 && (_ ? (_.addStyle("transition-duration", "0s"), v("mdc-notched-outline--upgraded"), requestAnimationFrame(() => {
      _ && _.removeStyle("transition-duration");
    })) : b("mdc-notched-outline--upgraded"));
  }, [
    o,
    u,
    c,
    f,
    _,
    d,
    k,
    p,
    a,
    I,
    i,
    S,
    h,
    w,
    s,
    r,
    G,
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
      e || (L(l, i), e = !0);
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
      u = j(u, i[c]);
    return o !== void 0 && o & /*tag, forwardEvents, use, className, smuiClass, smuiClassMap, props, $$restProps*/
    1003 && (u = j(u, oe(i, [
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
      e && J(e.$$.fragment), t = Se();
    },
    m(a, o) {
      e && Y(e, a, o), U(a, t, o), l = !0;
    },
    p(a, [o]) {
      if (o & /*component*/
      4 && r !== (r = /*component*/
      a[2])) {
        if (e) {
          ge();
          const u = e;
          E(u.$$.fragment, 1, 0, () => {
            K(u, 1);
          }), pe();
        }
        r ? (e = Ot(r, s(a, o)), a[12](e), J(e.$$.fragment), L(e.$$.fragment, 1), Y(e, t.parentNode, t)) : e = null;
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
      l || (e && L(e.$$.fragment, a), l = !0);
    },
    o(a) {
      e && E(e.$$.fragment, a), l = !1;
    },
    d(a) {
      a && O(t), n[12](null), e && K(e, a);
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
  const c = Ve.class, f = {}, d = [], g = Ve.contexts, _ = Ve.props;
  let { component: k = Ve.component } = e, { tag: p = k === Bt ? Ve.tag : void 0 } = e;
  Object.entries(Ve.classMap).forEach(([m, D]) => {
    const S = Pe(D);
    S && "subscribe" in S && d.push(S.subscribe((h) => {
      t(5, f[m] = h, f);
    }));
  });
  const I = Be(Re());
  for (let m in g)
    g.hasOwnProperty(m) && Me(m, g[m]);
  At(() => {
    for (const m of d)
      m();
  });
  function v() {
    return u.getElement();
  }
  function b(m) {
    ee[m ? "unshift" : "push"](() => {
      u = m, t(4, u);
    });
  }
  return n.$$set = (m) => {
    e = j(j({}, e), Oe(m)), t(9, i = ue(e, l)), "use" in m && t(0, a = m.use), "class" in m && t(1, o = m.class), "component" in m && t(2, k = m.component), "tag" in m && t(3, p = m.tag), "$$scope" in m && t(13, s = m.$$scope);
  }, [
    a,
    o,
    k,
    p,
    u,
    f,
    c,
    _,
    I,
    i,
    v,
    r,
    b,
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
const Ln = Object.assign({}, Ve);
function Te(n) {
  return new Proxy(Sr, {
    construct: function(e, t) {
      return Object.assign(Ve, Ln, n), new e(...t);
    },
    get: function(e, t) {
      return Object.assign(Ve, Ln, n), e[t];
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
    a = j(a, s[o]);
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
  function a(C) {
    return C === s;
  }
  let { use: o = [] } = e, { class: u = "" } = e, { type: c = "text" } = e, { placeholder: f = " " } = e, { value: d = s } = e;
  const g = a(d);
  g && (d = "");
  let { files: _ = null } = e, { dirty: k = !1 } = e, { invalid: p = !1 } = e, { updateInvalid: I = !0 } = e, { emptyValueNull: v = d === null } = e;
  g && v && (d = null);
  let { emptyValueUndefined: b = d === void 0 } = e;
  g && b && (d = void 0);
  let m, D = {}, S = {};
  Ne(() => {
    I && t(14, p = m.matches(":invalid"));
  });
  function h(C) {
    if (c === "file") {
      t(12, _ = C.currentTarget.files);
      return;
    }
    if (C.currentTarget.value === "" && v) {
      t(11, d = null);
      return;
    }
    if (C.currentTarget.value === "" && b) {
      t(11, d = void 0);
      return;
    }
    switch (c) {
      case "number":
      case "range":
        t(11, d = Mr(C.currentTarget.value));
        break;
      default:
        t(11, d = C.currentTarget.value);
        break;
    }
  }
  function w(C) {
    (c === "file" || c === "range") && h(C), t(13, k = !0), I && t(14, p = m.matches(":invalid"));
  }
  function G(C) {
    var N;
    return C in D ? (N = D[C]) !== null && N !== void 0 ? N : null : W().getAttribute(C);
  }
  function M(C, N) {
    D[C] !== N && t(6, D[C] = N, D);
  }
  function y(C) {
    (!(C in D) || D[C] != null) && t(6, D[C] = void 0, D);
  }
  function B() {
    W().focus();
  }
  function R() {
    W().blur();
  }
  function W() {
    return m;
  }
  function de(C) {
    Ut.call(this, n, C);
  }
  function _e(C) {
    Ut.call(this, n, C);
  }
  function Ce(C) {
    ee[C ? "unshift" : "push"](() => {
      m = C, t(5, m);
    });
  }
  const q = (C) => c !== "file" && h(C);
  return n.$$set = (C) => {
    e = j(j({}, e), Oe(C)), t(10, i = ue(e, l)), "use" in C && t(0, o = C.use), "class" in C && t(1, u = C.class), "type" in C && t(2, c = C.type), "placeholder" in C && t(3, f = C.placeholder), "value" in C && t(11, d = C.value), "files" in C && t(12, _ = C.files), "dirty" in C && t(13, k = C.dirty), "invalid" in C && t(14, p = C.invalid), "updateInvalid" in C && t(15, I = C.updateInvalid), "emptyValueNull" in C && t(16, v = C.emptyValueNull), "emptyValueUndefined" in C && t(17, b = C.emptyValueUndefined);
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
    w,
    i,
    d,
    _,
    k,
    p,
    I,
    v,
    b,
    G,
    M,
    y,
    B,
    R,
    W,
    de,
    _e,
    Ce,
    q
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
    o = j(o, a[u]);
  return {
    c() {
      e = F("textarea"), ne(e, o);
    },
    m(u, c) {
      U(u, e, c), e.autofocus && e.focus(), n[21](e), un(
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
      1 && un(
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
  let { use: s = [] } = e, { class: a = "" } = e, { style: o = "" } = e, { value: u = "" } = e, { dirty: c = !1 } = e, { invalid: f = !1 } = e, { updateInvalid: d = !0 } = e, { resizable: g = !0 } = e, _, k = {};
  Ne(() => {
    d && t(11, f = _.matches(":invalid"));
  });
  function p() {
    t(10, c = !0), d && t(11, f = _.matches(":invalid"));
  }
  function I(y) {
    var B;
    return y in k ? (B = k[y]) !== null && B !== void 0 ? B : null : S().getAttribute(y);
  }
  function v(y, B) {
    k[y] !== B && t(6, k[y] = B, k);
  }
  function b(y) {
    (!(y in k) || k[y] != null) && t(6, k[y] = void 0, k);
  }
  function m() {
    S().focus();
  }
  function D() {
    S().blur();
  }
  function S() {
    return _;
  }
  function h(y) {
    Ut.call(this, n, y);
  }
  function w(y) {
    Ut.call(this, n, y);
  }
  function G(y) {
    ee[y ? "unshift" : "push"](() => {
      _ = y, t(5, _);
    });
  }
  function M() {
    u = this.value, t(0, u);
  }
  return n.$$set = (y) => {
    e = j(j({}, e), Oe(y)), t(9, i = ue(e, l)), "use" in y && t(1, s = y.use), "class" in y && t(2, a = y.class), "style" in y && t(3, o = y.style), "value" in y && t(0, u = y.value), "dirty" in y && t(10, c = y.dirty), "invalid" in y && t(11, f = y.invalid), "updateInvalid" in y && t(12, d = y.updateInvalid), "resizable" in y && t(4, g = y.resizable);
  }, [
    u,
    s,
    a,
    o,
    g,
    _,
    k,
    r,
    p,
    i,
    c,
    f,
    d,
    I,
    v,
    b,
    m,
    D,
    S,
    h,
    w,
    G,
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
const Fr = (n) => ({}), Sn = (n) => ({}), Nr = (n) => ({}), Rn = (n) => ({}), Gr = (n) => ({}), En = (n) => ({}), qr = (n) => ({}), Hn = (n) => ({}), jr = (n) => ({}), Dn = (n) => ({}), Wr = (n) => ({}), Mn = (n) => ({}), Zr = (n) => ({}), Tn = (n) => ({}), Vr = (n) => ({}), On = (n) => ({}), zr = (n) => ({}), Un = (n) => ({}), Xr = (n) => ({}), Bn = (n) => ({}), Yr = (n) => ({}), Pn = (n) => ({}), Kr = (n) => ({}), Fn = (n) => ({});
function Jr(n) {
  let e, t, l, i, r, s, a, o, u, c, f, d, g, _;
  const k = (
    /*#slots*/
    n[56].label
  ), p = le(
    k,
    n,
    /*$$scope*/
    n[87],
    Dn
  );
  l = new Pt({
    props: {
      key: "SMUI:textfield:icon:leading",
      value: !0,
      $$slots: { default: [xr] },
      $$scope: { ctx: n }
    }
  });
  const I = (
    /*#slots*/
    n[56].default
  ), v = le(
    I,
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
  const b = (
    /*#slots*/
    n[56].ripple
  ), m = le(
    b,
    n,
    /*$$scope*/
    n[87],
    Rn
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
      ).map(Kn).concat([
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
    S = j(S, D[h]);
  return {
    c() {
      e = F("div"), p && p.c(), t = V(), J(l.$$.fragment), i = V(), v && v.c(), r = V(), J(s.$$.fragment), a = V(), m && m.c(), ne(e, S);
    },
    m(h, w) {
      U(h, e, w), p && p.m(e, null), P(e, t), Y(l, e, null), P(e, i), v && v.m(e, null), P(e, r), Y(s, e, null), P(e, a), m && m.m(e, null), n[82](e), d = !0, g || (_ = [
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
    p(h, w) {
      p && p.p && (!d || w[2] & /*$$scope*/
      33554432) && re(
        p,
        k,
        h,
        /*$$scope*/
        h[87],
        d ? ie(
          k,
          /*$$scope*/
          h[87],
          w,
          jr
        ) : ae(
          /*$$scope*/
          h[87]
        ),
        Dn
      );
      const G = {};
      w[2] & /*$$scope*/
      33554432 && (G.$$scope = { dirty: w, ctx: h }), l.$set(G), v && v.p && (!d || w[2] & /*$$scope*/
      33554432) && re(
        v,
        I,
        h,
        /*$$scope*/
        h[87],
        d ? ie(
          I,
          /*$$scope*/
          h[87],
          w,
          null
        ) : ae(
          /*$$scope*/
          h[87]
        ),
        null
      );
      const M = {};
      w[2] & /*$$scope*/
      33554432 && (M.$$scope = { dirty: w, ctx: h }), s.$set(M), m && m.p && (!d || w[2] & /*$$scope*/
      33554432) && re(
        m,
        b,
        h,
        /*$$scope*/
        h[87],
        d ? ie(
          b,
          /*$$scope*/
          h[87],
          w,
          Nr
        ) : ae(
          /*$$scope*/
          h[87]
        ),
        Rn
      ), ne(e, S = oe(D, [
        (!d || w[0] & /*className, disabled, textarea, variant, noLabel, invalid, internalClasses*/
        33673730 | w[1] & /*$$slots*/
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
        (!d || w[0] & /*internalStyles, style*/
        67109888 && u !== (u = Object.entries(
          /*internalStyles*/
          h[26]
        ).map(Kn).concat([
          /*style*/
          h[10]
        ]).join(" "))) && { style: u },
        w[1] & /*$$restProps*/
        32768 && ft(
          /*$$restProps*/
          h[46],
          ["input$", "label$", "ripple$", "outline$", "helperLine$"]
        )
      ])), c && ve(c.update) && w[0] & /*ripple*/
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
      }), f && ve(f.update) && w[0] & /*use*/
      256 && f.update.call(
        null,
        /*use*/
        h[8]
      );
    },
    i(h) {
      d || (L(p, h), L(l.$$.fragment, h), L(v, h), L(s.$$.fragment, h), L(m, h), d = !0);
    },
    o(h) {
      E(p, h), E(l.$$.fragment, h), E(v, h), E(s.$$.fragment, h), E(m, h), d = !1;
    },
    d(h) {
      h && O(e), p && p.d(h), K(l), v && v.d(h), K(s), m && m.d(h), n[82](null), g = !1, he(_);
    }
  };
}
function Qr(n) {
  let e, t, l, i, r, s, a, o, u, c, f, d, g, _, k, p, I, v, b = !/*textarea*/
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
  ), h = [ra, ia], w = [];
  function G(R, W) {
    return (
      /*textarea*/
      R[14] && typeof /*value*/
      R[0] == "string" ? 0 : 1
    );
  }
  a = G(n), o = w[a] = h[a](n), c = new Pt({
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
  n[11] && zn(n), y = [
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
      ).map(Yn).concat([
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
  for (let R = 0; R < y.length; R += 1)
    B = j(B, y[R]);
  return {
    c() {
      e = F("label"), b && b.c(), t = V(), m && m.c(), l = V(), J(i.$$.fragment), r = V(), S && S.c(), s = V(), o.c(), u = V(), J(c.$$.fragment), f = V(), M && M.c(), ne(e, B);
    },
    m(R, W) {
      U(R, e, W), b && b.m(e, null), P(e, t), m && m.m(e, null), P(e, l), Y(i, e, null), P(e, r), S && S.m(e, null), P(e, s), w[a].m(e, null), P(e, u), Y(c, e, null), P(e, f), M && M.m(e, null), n[78](e), p = !0, I || (v = [
        Q(_ = vt.call(null, e, {
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
        Q(k = Le.call(
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
      ], I = !0);
    },
    p(R, W) {
      !/*textarea*/
      R[14] && /*variant*/
      R[15] !== "outlined" ? b ? (b.p(R, W), W[0] & /*textarea, variant*/
      49152 && L(b, 1)) : (b = Nn(R), b.c(), L(b, 1), b.m(e, t)) : b && (ge(), E(b, 1, 1, () => {
        b = null;
      }), pe()), /*textarea*/
      R[14] || /*variant*/
      R[15] === "outlined" ? m ? (m.p(R, W), W[0] & /*textarea, variant*/
      49152 && L(m, 1)) : (m = jn(R), m.c(), L(m, 1), m.m(e, l)) : m && (ge(), E(m, 1, 1, () => {
        m = null;
      }), pe());
      const de = {};
      W[2] & /*$$scope*/
      33554432 && (de.$$scope = { dirty: W, ctx: R }), i.$set(de), S && S.p && (!p || W[2] & /*$$scope*/
      33554432) && re(
        S,
        D,
        R,
        /*$$scope*/
        R[87],
        p ? ie(
          D,
          /*$$scope*/
          R[87],
          W,
          null
        ) : ae(
          /*$$scope*/
          R[87]
        ),
        null
      );
      let _e = a;
      a = G(R), a === _e ? w[a].p(R, W) : (ge(), E(w[_e], 1, 1, () => {
        w[_e] = null;
      }), pe(), o = w[a], o ? o.p(R, W) : (o = w[a] = h[a](R), o.c()), L(o, 1), o.m(e, u));
      const Ce = {};
      W[2] & /*$$scope*/
      33554432 && (Ce.$$scope = { dirty: W, ctx: R }), c.$set(Ce), !/*textarea*/
      R[14] && /*variant*/
      R[15] !== "outlined" && /*ripple*/
      R[11] ? M ? (M.p(R, W), W[0] & /*textarea, variant, ripple*/
      51200 && L(M, 1)) : (M = zn(R), M.c(), L(M, 1), M.m(e, null)) : M && (ge(), E(M, 1, 1, () => {
        M = null;
      }), pe()), ne(e, B = oe(y, [
        (!p || W[0] & /*className, disabled, textarea, variant, noLabel, label, focused, value, withLeadingIcon, withTrailingIcon, invalid, internalClasses*/
        314823171 | W[1] & /*$$slots*/
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
        (!p || W[0] & /*internalStyles, style*/
        67109888 && g !== (g = Object.entries(
          /*internalStyles*/
          R[26]
        ).map(Yn).concat([
          /*style*/
          R[10]
        ]).join(" "))) && { style: g },
        {
          for: (
            /* suppress a11y warning, since this is wrapped */
            void 0
          )
        },
        W[1] & /*$$restProps*/
        32768 && ft(
          /*$$restProps*/
          R[46],
          ["input$", "label$", "ripple$", "outline$", "helperLine$"]
        )
      ])), _ && ve(_.update) && W[0] & /*textarea, variant*/
      49152 | W[1] & /*inputElement*/
      4 && _.update.call(null, {
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
      }), k && ve(k.update) && W[0] & /*use*/
      256 && k.update.call(
        null,
        /*use*/
        R[8]
      );
    },
    i(R) {
      p || (L(b), L(m), L(i.$$.fragment, R), L(S, R), L(o), L(c.$$.fragment, R), L(M), p = !0);
    },
    o(R) {
      E(b), E(m), E(i.$$.fragment, R), E(S, R), E(o), E(c.$$.fragment, R), E(M), p = !1;
    },
    d(R) {
      R && O(e), b && b.d(), m && m.d(), K(i), S && S.d(R), w[a].d(), K(c), M && M.d(), n[78](null), I = !1, he(v);
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
          qr
        ) : ae(
          /*$$scope*/
          i[87]
        ),
        Hn
      );
    },
    i(i) {
      e || (L(l, i), e = !0);
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
    En
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
        En
      );
    },
    i(i) {
      e || (L(l, i), e = !0);
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
  n[47].label) && qn(n);
  return {
    c() {
      i && i.c(), e = V(), r && r.c(), t = Se();
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
      65536 && L(r, 1)) : (r = qn(s), r.c(), L(r, 1), r.m(t.parentNode, t)) : r && (ge(), E(r, 1, 1, () => {
        r = null;
      }), pe());
    },
    i(s) {
      l || (L(r), l = !0);
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
    i = j(i, l[r]);
  return e = new Hl({ props: i }), n[57](e), {
    c() {
      J(e.$$.fragment);
    },
    m(r, s) {
      Y(e, r, s), t = !0;
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
      t || (L(e.$$.fragment, r), t = !0);
    },
    o(r) {
      E(e.$$.fragment, r), t = !1;
    },
    d(r) {
      n[57](null), K(e, r);
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
          Kr
        ) : ae(
          /*$$scope*/
          s[87]
        ),
        Fn
      );
    },
    i(s) {
      l || (L(r, s), l = !0);
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
    i = j(i, l[r]);
  return e = new yr({ props: i }), n[59](e), {
    c() {
      J(e.$$.fragment);
    },
    m(r, s) {
      Y(e, r, s), t = !0;
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
      t || (L(e.$$.fragment, r), t = !0);
    },
    o(r) {
      E(e.$$.fragment, r), t = !1;
    },
    d(r) {
      n[59](null), K(e, r);
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
    i = j(i, l[r]);
  return e = new Hl({ props: i }), n[58](e), {
    c() {
      J(e.$$.fragment);
    },
    m(r, s) {
      Y(e, r, s), t = !0;
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
      t || (L(e.$$.fragment, r), t = !0);
    },
    o(r) {
      E(e.$$.fragment, r), t = !1;
    },
    d(r) {
      n[58](null), K(e, r);
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
    Pn
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
        Pn
      );
    },
    i(s) {
      l || (L(r, s), l = !0);
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
      65536 && L(l, 1)) : (l = Wn(i), l.c(), L(l, 1), l.m(e.parentNode, e)) : l && (ge(), E(l, 1, 1, () => {
        l = null;
      }), pe());
    },
    i(i) {
      t || (L(l), t = !0);
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
        Bn
      );
    },
    i(i) {
      e || (L(l, i), e = !0);
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
    On
  );
  let g = (
    /*prefix*/
    n[20] != null && Zn(n)
  );
  const _ = [
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
  function k(h) {
    n[69](h);
  }
  function p(h) {
    n[70](h);
  }
  function I(h) {
    n[71](h);
  }
  function v(h) {
    n[72](h);
  }
  let b = {};
  for (let h = 0; h < _.length; h += 1)
    b = j(b, _[h]);
  /*value*/
  n[0] !== void 0 && (b.value = /*value*/
  n[0]), /*files*/
  n[3] !== void 0 && (b.files = /*files*/
  n[3]), /*dirty*/
  n[4] !== void 0 && (b.dirty = /*dirty*/
  n[4]), /*invalid*/
  n[1] !== void 0 && (b.invalid = /*invalid*/
  n[1]), l = new Or({ props: b }), n[68](l), ee.push(() => Ye(l, "value", k)), ee.push(() => Ye(l, "files", p)), ee.push(() => Ye(l, "dirty", I)), ee.push(() => Ye(l, "invalid", v)), l.$on(
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
    n[21] != null && Vn(n)
  );
  const D = (
    /*#slots*/
    n[56].suffix
  ), S = le(
    D,
    n,
    /*$$scope*/
    n[87],
    Tn
  );
  return {
    c() {
      d && d.c(), e = V(), g && g.c(), t = V(), J(l.$$.fragment), o = V(), m && m.c(), u = V(), S && S.c();
    },
    m(h, w) {
      d && d.m(h, w), U(h, e, w), g && g.m(h, w), U(h, t, w), Y(l, h, w), U(h, o, w), m && m.m(h, w), U(h, u, w), S && S.m(h, w), c = !0;
    },
    p(h, w) {
      d && d.p && (!c || w[2] & /*$$scope*/
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
          w,
          Vr
        ) : ae(
          /*$$scope*/
          h[87]
        ),
        On
      ), /*prefix*/
      h[20] != null ? g ? (g.p(h, w), w[0] & /*prefix*/
      1048576 && L(g, 1)) : (g = Zn(h), g.c(), L(g, 1), g.m(t.parentNode, t)) : g && (ge(), E(g, 1, 1, () => {
        g = null;
      }), pe());
      const G = w[0] & /*type, disabled, required, updateInvalid, helperId, noLabel, label*/
      135213056 | w[1] & /*$$restProps*/
      32768 ? oe(_, [
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
        196608 && we(
          /*noLabel*/
          h[16] && /*label*/
          h[17] != null ? { placeholder: (
            /*label*/
            h[17]
          ) } : {}
        ),
        w[1] & /*$$restProps*/
        32768 && we(De(
          /*$$restProps*/
          h[46],
          "input$"
        ))
      ]) : {};
      !i && w[0] & /*value*/
      1 && (i = !0, G.value = /*value*/
      h[0], Xe(() => i = !1)), !r && w[0] & /*files*/
      8 && (r = !0, G.files = /*files*/
      h[3], Xe(() => r = !1)), !s && w[0] & /*dirty*/
      16 && (s = !0, G.dirty = /*dirty*/
      h[4], Xe(() => s = !1)), !a && w[0] & /*invalid*/
      2 && (a = !0, G.invalid = /*invalid*/
      h[1], Xe(() => a = !1)), l.$set(G), /*suffix*/
      h[21] != null ? m ? (m.p(h, w), w[0] & /*suffix*/
      2097152 && L(m, 1)) : (m = Vn(h), m.c(), L(m, 1), m.m(u.parentNode, u)) : m && (ge(), E(m, 1, 1, () => {
        m = null;
      }), pe()), S && S.p && (!c || w[2] & /*$$scope*/
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
          w,
          Zr
        ) : ae(
          /*$$scope*/
          h[87]
        ),
        Tn
      );
    },
    i(h) {
      c || (L(d, h), L(g), L(l.$$.fragment, h), L(m), L(S, h), c = !0);
    },
    o(h) {
      E(d, h), E(g), E(l.$$.fragment, h), E(m), E(S, h), c = !1;
    },
    d(h) {
      h && (O(e), O(t), O(o), O(u)), d && d.d(h), g && g.d(h), n[68](null), K(l, h), m && m.d(h), S && S.d(h);
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
    g = j(g, u[p]);
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
  const _ = (
    /*#slots*/
    n[56].internalCounter
  ), k = le(
    _,
    n,
    /*$$scope*/
    n[87],
    Un
  );
  return {
    c() {
      e = F("span"), J(t.$$.fragment), s = V(), k && k.c(), T(e, "class", a = x({
        "mdc-text-field__resizer": !("input$resizable" in /*$$restProps*/
        n[46]) || /*$$restProps*/
        n[46].input$resizable
      }));
    },
    m(p, I) {
      U(p, e, I), Y(t, e, null), P(e, s), k && k.m(e, null), o = !0;
    },
    p(p, I) {
      const v = I[0] & /*disabled, required, updateInvalid, helperId*/
      134754304 | I[1] & /*$$restProps*/
      32768 ? oe(u, [
        I[0] & /*disabled*/
        4096 && { disabled: (
          /*disabled*/
          p[12]
        ) },
        I[0] & /*required*/
        8192 && { required: (
          /*required*/
          p[13]
        ) },
        I[0] & /*updateInvalid*/
        524288 && { updateInvalid: (
          /*updateInvalid*/
          p[19]
        ) },
        I[0] & /*helperId*/
        134217728 && { "aria-controls": (
          /*helperId*/
          p[27]
        ) },
        I[0] & /*helperId*/
        134217728 && { "aria-describedby": (
          /*helperId*/
          p[27]
        ) },
        I[1] & /*$$restProps*/
        32768 && we(De(
          /*$$restProps*/
          p[46],
          "input$"
        ))
      ]) : {};
      !l && I[0] & /*value*/
      1 && (l = !0, v.value = /*value*/
      p[0], Xe(() => l = !1)), !i && I[0] & /*dirty*/
      16 && (i = !0, v.dirty = /*dirty*/
      p[4], Xe(() => i = !1)), !r && I[0] & /*invalid*/
      2 && (r = !0, v.invalid = /*invalid*/
      p[1], Xe(() => r = !1)), t.$set(v), k && k.p && (!o || I[2] & /*$$scope*/
      33554432) && re(
        k,
        _,
        p,
        /*$$scope*/
        p[87],
        o ? ie(
          _,
          /*$$scope*/
          p[87],
          I,
          zr
        ) : ae(
          /*$$scope*/
          p[87]
        ),
        Un
      ), (!o || I[1] & /*$$restProps*/
      32768 && a !== (a = x({
        "mdc-text-field__resizer": !("input$resizable" in /*$$restProps*/
        p[46]) || /*$$restProps*/
        p[46].input$resizable
      }))) && T(e, "class", a);
    },
    i(p) {
      o || (L(t.$$.fragment, p), L(k, p), o = !0);
    },
    o(p) {
      E(t.$$.fragment, p), E(k, p), o = !1;
    },
    d(p) {
      p && O(e), n[60](null), K(t), k && k.d(p);
    }
  };
}
function Zn(n) {
  let e, t;
  return e = new Er({
    props: {
      $$slots: { default: [aa] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      J(e.$$.fragment);
    },
    m(l, i) {
      Y(e, l, i), t = !0;
    },
    p(l, i) {
      const r = {};
      i[0] & /*prefix*/
      1048576 | i[2] & /*$$scope*/
      33554432 && (r.$$scope = { dirty: i, ctx: l }), e.$set(r);
    },
    i(l) {
      t || (L(e.$$.fragment, l), t = !0);
    },
    o(l) {
      E(e.$$.fragment, l), t = !1;
    },
    d(l) {
      K(e, l);
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
function Vn(n) {
  let e, t;
  return e = new Hr({
    props: {
      $$slots: { default: [sa] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      J(e.$$.fragment);
    },
    m(l, i) {
      Y(e, l, i), t = !0;
    },
    p(l, i) {
      const r = {};
      i[0] & /*suffix*/
      2097152 | i[2] & /*$$scope*/
      33554432 && (r.$$scope = { dirty: i, ctx: l }), e.$set(r);
    },
    i(l) {
      t || (L(e.$$.fragment, l), t = !0);
    },
    o(l) {
      E(e.$$.fragment, l), t = !1;
    },
    d(l) {
      K(e, l);
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
          Wr
        ) : ae(
          /*$$scope*/
          i[87]
        ),
        Mn
      );
    },
    i(i) {
      e || (L(l, i), e = !0);
    },
    o(i) {
      E(l, i), e = !1;
    },
    d(i) {
      l && l.d(i);
    }
  };
}
function zn(n) {
  let e, t;
  const l = [De(
    /*$$restProps*/
    n[46],
    "ripple$"
  )];
  let i = {};
  for (let r = 0; r < l.length; r += 1)
    i = j(i, l[r]);
  return e = new Cr({ props: i }), n[77](e), {
    c() {
      J(e.$$.fragment);
    },
    m(r, s) {
      Y(e, r, s), t = !0;
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
      t || (L(e.$$.fragment, r), t = !0);
    },
    o(r) {
      E(e.$$.fragment, r), t = !1;
    },
    d(r) {
      n[77](null), K(e, r);
    }
  };
}
function Xn(n) {
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
    i = j(i, l[r]);
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
      J(e.$$.fragment);
    },
    m(r, s) {
      Y(e, r, s), t = !0;
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
      t || (L(e.$$.fragment, r), t = !0);
    },
    o(r) {
      E(e.$$.fragment, r), t = !1;
    },
    d(r) {
      K(e, r);
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
    Sn
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
        Sn
      );
    },
    i(i) {
      e || (L(l, i), e = !0);
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
    n[47].helper && Xn(n)
  );
  return {
    c() {
      t.c(), l = V(), u && u.c(), i = Se();
    },
    m(c, f) {
      a[e].m(c, f), U(c, l, f), u && u.m(c, f), U(c, i, f), r = !0;
    },
    p(c, f) {
      t.p(c, f), /*$$slots*/
      c[47].helper ? u ? (u.p(c, f), f[1] & /*$$slots*/
      65536 && L(u, 1)) : (u = Xn(c), u.c(), L(u, 1), u.m(i.parentNode, i)) : u && (ge(), E(u, 1, 1, () => {
        u = null;
      }), pe());
    },
    i(c) {
      r || (L(t), L(u), r = !0);
    },
    o(c) {
      E(t), E(u), r = !1;
    },
    d(c) {
      c && (O(l), O(i)), a[e].d(c), u && u.d(c);
    }
  };
}
const Yn = ([n, e]) => `${n}: ${e};`, Kn = ([n, e]) => `${n}: ${e};`;
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
  const o = en(s), { applyPassive: u } = Sl, c = Be(Re());
  let f = () => {
  };
  function d(A) {
    return A === f;
  }
  let { use: g = [] } = e, { class: _ = "" } = e, { style: k = "" } = e, { ripple: p = !0 } = e, { disabled: I = !1 } = e, { required: v = !1 } = e, { textarea: b = !1 } = e, { variant: m = b ? "outlined" : "standard" } = e, { noLabel: D = !1 } = e, { label: S = void 0 } = e, { type: h = "text" } = e, { value: w = r.input$emptyValueUndefined ? void 0 : f } = e, { files: G = f } = e;
  const M = !d(w) || !d(G);
  d(w) && (w = void 0), d(G) && (G = null);
  let { invalid: y = f } = e, { updateInvalid: B = d(y) } = e;
  d(y) && (y = !1);
  let { dirty: R = !1 } = e, { prefix: W = void 0 } = e, { suffix: de = void 0 } = e, { validateOnValueChange: _e = B } = e, { useNativeValidation: Ce = B } = e, { withLeadingIcon: q = f } = e, { withTrailingIcon: C = f } = e, { input: N = void 0 } = e, { floatingLabel: me = void 0 } = e, { lineRipple: be = void 0 } = e, { notchedOutline: Ie = void 0 } = e, te, X, Ge = {}, ze = {}, Je, Qe = !1, yt = Pe("SMUI:addLayoutListener"), mt, gt, qe = new Promise((A) => gt = A), xe, $e, it, et, pt = w;
  yt && (mt = yt(rn)), Ne(() => {
    if (t(54, X = new hr(
      {
        // getRootAdapterMethods_
        addClass: wt,
        removeClass: Lt,
        hasClass: _t,
        registerTextFieldInteractionHandler: (A, ke) => St().addEventListener(A, ke),
        deregisterTextFieldInteractionHandler: (A, ke) => St().removeEventListener(A, ke),
        registerValidationAttributeChangeHandler: (A) => {
          const ke = (Gt) => Gt.map((qt) => qt.attributeName).filter((qt) => qt), an = new MutationObserver((Gt) => {
            Ce && A(ke(Gt));
          }), hi = { attributes: !0 };
          return N && an.observe(N.getElement(), hi), an;
        },
        deregisterValidationAttributeChangeHandler: (A) => {
          A.disconnect();
        },
        // getInputAdapterMethods_
        getNativeInput: () => {
          var A;
          return (A = N == null ? void 0 : N.getElement()) !== null && A !== void 0 ? A : null;
        },
        setInputAttr: (A, ke) => {
          N == null || N.addAttr(A, ke);
        },
        removeInputAttr: (A) => {
          N == null || N.removeAttr(A);
        },
        isFocused: () => document.activeElement === (N == null ? void 0 : N.getElement()),
        registerInputInteractionHandler: (A, ke) => {
          N == null || N.getElement().addEventListener(A, ke, u());
        },
        deregisterInputInteractionHandler: (A, ke) => {
          N == null || N.getElement().removeEventListener(A, ke, u());
        },
        // getLabelAdapterMethods_
        floatLabel: (A) => me && me.float(A),
        getLabelWidth: () => me ? me.getWidth() : 0,
        hasLabel: () => !!me,
        shakeLabel: (A) => me && me.shake(A),
        setLabelRequired: (A) => me && me.setRequired(A),
        // getLineRippleAdapterMethods_
        activateLineRipple: () => be && be.activate(),
        deactivateLineRipple: () => be && be.deactivate(),
        setLineRippleTransformOrigin: (A) => be && be.setRippleCenter(A),
        // getOutlineAdapterMethods_
        closeOutline: () => Ie && Ie.closeNotch(),
        hasOutline: () => !!Ie,
        notchOutline: (A) => Ie && Ie.notch(A)
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
      X.init();
    } else
      ki().then(() => {
        if (N == null)
          throw new Error("SMUI Textfield must be initialized with either a non-undefined initial value or an Input component.");
        X.init();
      });
    return gt(), () => {
      X.destroy();
    };
  }), At(() => {
    mt && mt();
  });
  function Nt(A) {
    t(29, xe = A.detail);
  }
  function H(A) {
    t(30, $e = A.detail);
  }
  function Z(A) {
    t(32, et = A.detail);
  }
  function Ee(A) {
    t(27, Je = A.detail);
  }
  function kt(A) {
    t(31, it = A.detail);
  }
  function _t(A) {
    var ke;
    return A in Ge ? (ke = Ge[A]) !== null && ke !== void 0 ? ke : null : St().classList.contains(A);
  }
  function wt(A) {
    Ge[A] || t(25, Ge[A] = !0, Ge);
  }
  function Lt(A) {
    (!(A in Ge) || Ge[A]) && t(25, Ge[A] = !1, Ge);
  }
  function Ol(A, ke) {
    ze[A] != ke && (ke === "" || ke == null ? (delete ze[A], t(26, ze)) : t(26, ze[A] = ke, ze));
  }
  function Ul() {
    N == null || N.focus();
  }
  function Bl() {
    N == null || N.blur();
  }
  function rn() {
    if (X) {
      const A = X.shouldFloat;
      X.notchOutline(A);
    }
  }
  function St() {
    return te;
  }
  function Pl(A) {
    ee[A ? "unshift" : "push"](() => {
      me = A, t(5, me);
    });
  }
  function Fl(A) {
    ee[A ? "unshift" : "push"](() => {
      me = A, t(5, me);
    });
  }
  function Nl(A) {
    ee[A ? "unshift" : "push"](() => {
      Ie = A, t(7, Ie);
    });
  }
  function Gl(A) {
    ee[A ? "unshift" : "push"](() => {
      N = A, t(2, N);
    });
  }
  function ql(A) {
    w = A, t(0, w);
  }
  function jl(A) {
    R = A, t(4, R);
  }
  function Wl(A) {
    y = A, t(1, y), t(54, X), t(19, B);
  }
  const Zl = () => t(28, Qe = !1), Vl = () => t(28, Qe = !0), zl = (A) => Ae(te, "blur", A), Xl = (A) => Ae(te, "focus", A);
  function Yl(A) {
    ee[A ? "unshift" : "push"](() => {
      N = A, t(2, N);
    });
  }
  function Kl(A) {
    w = A, t(0, w);
  }
  function Jl(A) {
    G = A, t(3, G);
  }
  function Ql(A) {
    R = A, t(4, R);
  }
  function xl(A) {
    y = A, t(1, y), t(54, X), t(19, B);
  }
  const $l = () => t(28, Qe = !1), ei = () => t(28, Qe = !0), ti = (A) => Ae(te, "blur", A), ni = (A) => Ae(te, "focus", A);
  function li(A) {
    ee[A ? "unshift" : "push"](() => {
      be = A, t(6, be);
    });
  }
  function ii(A) {
    ee[A ? "unshift" : "push"](() => {
      te = A, t(24, te);
    });
  }
  const ri = () => t(29, xe = void 0), ai = () => t(30, $e = void 0), si = () => t(32, et = void 0);
  function oi(A) {
    ee[A ? "unshift" : "push"](() => {
      te = A, t(24, te);
    });
  }
  const ui = () => t(29, xe = void 0), ci = () => t(30, $e = void 0), fi = () => {
    t(27, Je = void 0), t(31, it = void 0);
  }, di = () => t(32, et = void 0);
  return n.$$set = (A) => {
    e = j(j({}, e), Oe(A)), t(46, r = ue(e, i)), "use" in A && t(8, g = A.use), "class" in A && t(9, _ = A.class), "style" in A && t(10, k = A.style), "ripple" in A && t(11, p = A.ripple), "disabled" in A && t(12, I = A.disabled), "required" in A && t(13, v = A.required), "textarea" in A && t(14, b = A.textarea), "variant" in A && t(15, m = A.variant), "noLabel" in A && t(16, D = A.noLabel), "label" in A && t(17, S = A.label), "type" in A && t(18, h = A.type), "value" in A && t(0, w = A.value), "files" in A && t(3, G = A.files), "invalid" in A && t(1, y = A.invalid), "updateInvalid" in A && t(19, B = A.updateInvalid), "dirty" in A && t(4, R = A.dirty), "prefix" in A && t(20, W = A.prefix), "suffix" in A && t(21, de = A.suffix), "validateOnValueChange" in A && t(48, _e = A.validateOnValueChange), "useNativeValidation" in A && t(49, Ce = A.useNativeValidation), "withLeadingIcon" in A && t(22, q = A.withLeadingIcon), "withTrailingIcon" in A && t(23, C = A.withTrailingIcon), "input" in A && t(2, N = A.input), "floatingLabel" in A && t(5, me = A.floatingLabel), "lineRipple" in A && t(6, be = A.lineRipple), "notchedOutline" in A && t(7, Ie = A.notchedOutline), "$$scope" in A && t(87, a = A.$$scope);
  }, n.$$.update = () => {
    if (n.$$.dirty[0] & /*input*/
    4 && t(33, l = N && N.getElement()), n.$$.dirty[0] & /*invalid, updateInvalid*/
    524290 | n.$$.dirty[1] & /*instance*/
    8388608 && X && X.isValid() !== !y && (B ? t(1, y = !X.isValid()) : X.setValid(!y)), n.$$.dirty[1] & /*instance, validateOnValueChange*/
    8519680 && X && X.getValidateOnValueChange() !== _e && X.setValidateOnValueChange(d(_e) ? !1 : _e), n.$$.dirty[1] & /*instance, useNativeValidation*/
    8650752 && X && X.setUseNativeValidation(d(Ce) ? !0 : Ce), n.$$.dirty[0] & /*disabled*/
    4096 | n.$$.dirty[1] & /*instance*/
    8388608 && X && X.setDisabled(I), n.$$.dirty[0] & /*value*/
    1 | n.$$.dirty[1] & /*instance, previousValue*/
    25165824 && X && M && pt !== w) {
      t(55, pt = w);
      const A = `${w}`;
      X.getValue() !== A && X.setValue(A);
    }
  }, [
    w,
    y,
    N,
    G,
    R,
    me,
    be,
    Ie,
    g,
    _,
    k,
    p,
    I,
    v,
    b,
    m,
    D,
    S,
    h,
    B,
    W,
    de,
    q,
    C,
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
    qe,
    Nt,
    H,
    Z,
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
    rn,
    St,
    X,
    pt,
    s,
    Pl,
    Fl,
    Nl,
    Gl,
    ql,
    jl,
    Wl,
    Zl,
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
    c = j(c, u[f]);
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
      i || (L(o, f), i = !0);
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
  function g(_) {
    ee[_ ? "unshift" : "push"](() => {
      c = _, t(2, c);
    });
  }
  return n.$$set = (_) => {
    e = j(j({}, e), Oe(_)), t(5, i = ue(e, l)), "use" in _ && t(0, o = _.use), "class" in _ && t(1, u = _.class), "$$scope" in _ && t(7, s = _.$$scope);
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
      t || (L(i, r), t = !0);
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
class Dl extends fe {
  constructor(e) {
    super(), ce(this, e, _a, pa, se, {});
  }
}
function ba(n) {
  let e, t;
  return {
    c() {
      e = je("svg"), t = je("path"), T(t, "d", "M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z"), T(e, "xmlns", "http://www.w3.org/2000/svg"), T(e, "viewBox", "0 -960 960 960"), T(
        e,
        "style",
        /*svgStyles*/
        n[0]
      );
    },
    m(l, i) {
      U(l, e, i), P(e, t);
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
  return e = new Dl({
    props: {
      $$slots: { default: [ba] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      J(e.$$.fragment);
    },
    m(l, i) {
      Y(e, l, i), t = !0;
    },
    p(l, [i]) {
      const r = {};
      i & /*$$scope, svgStyles*/
      3 && (r.$$scope = { dirty: i, ctx: l }), e.$set(r);
    },
    i(l) {
      t || (L(e.$$.fragment, l), t = !0);
    },
    o(l) {
      E(e.$$.fragment, l), t = !1;
    },
    d(l) {
      K(e, l);
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
      e = je("svg"), t = je("path"), T(t, "d", "M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"), T(e, "xmlns", "http://www.w3.org/2000/svg"), T(e, "viewBox", "0 -960 960 960"), T(e, "width", "24"), T(e, "height", "24"), T(e, "fill", "#004552");
    },
    m(l, i) {
      U(l, e, i), P(e, t);
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
      e = je("svg"), t = je("path"), T(t, "d", "M480-280q17 0 28.5-11.5T520-320q0-17-11.5-28.5T480-360q-17 0-28.5 11.5T440-320q0 17 11.5 28.5T480-280Zm-40-160h80v-240h-80v240Zm40 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"), T(e, "xmlns", "http://www.w3.org/2000/svg"), T(e, "height", "24px"), T(e, "viewBox", "0 -960 960 960"), T(e, "width", "24px"), T(e, "fill", "#004552");
    },
    m(l, i) {
      U(l, e, i), P(e, t);
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
      e = je("svg"), t = je("path"), T(t, "d", "m40-120 440-760 440 760H40Zm138-80h604L480-720 178-200Zm302-40q17 0 28.5-11.5T520-280q0-17-11.5-28.5T480-320q-17 0-28.5 11.5T440-280q0 17 11.5 28.5T480-240Zm-40-120h80v-200h-80v200Zm40-100Z"), T(e, "xmlns", "http://www.w3.org/2000/svg"), T(e, "height", "24px"), T(e, "viewBox", "0 -960 960 960"), T(e, "width", "24px"), T(e, "fill", "#004552");
    },
    m(l, i) {
      U(l, e, i), P(e, t);
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
      e = je("svg"), t = je("path"), T(t, "d", "m380-300 280-180-280-180v360ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"), T(e, "xmlns", "http://www.w3.org/2000/svg"), T(e, "viewBox", "0 -960 960 960"), T(
        e,
        "style",
        /*svgStyles*/
        n[0]
      );
    },
    m(l, i) {
      U(l, e, i), P(e, t);
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
  return e = new Dl({
    props: {
      $$slots: { default: [Ra] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      J(e.$$.fragment);
    },
    m(l, i) {
      Y(e, l, i), t = !0;
    },
    p(l, [i]) {
      const r = {};
      i & /*$$scope, svgStyles*/
      3 && (r.$$scope = { dirty: i, ctx: l }), e.$set(r);
    },
    i(l) {
      t || (L(e.$$.fragment, l), t = !0);
    },
    o(l) {
      E(e.$$.fragment, l), t = !1;
    },
    d(l) {
      K(e, l);
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
      t || (L(s, a), t = !0);
    },
    o(a) {
      E(s, a), t = !1;
    },
    d(a) {
      a && O(e), s && s.d(a), n[8](null), l = !1, he(i);
    }
  };
}
function Ta(n, e, t) {
  let { $$slots: l = {}, $$scope: i } = e, { content: r = "" } = e, { hoverDelay: s = 300 } = e, { hideDelay: a = 500 } = e, o, u, c, f, d = { left: 0, top: 0, width: 0 };
  function g() {
    clearTimeout(u), d = c.getBoundingClientRect(), o = setTimeout(
      () => {
        k();
      },
      s
    );
  }
  function _() {
    clearTimeout(o), u = setTimeout(
      () => {
        p();
      },
      a
    );
  }
  function k() {
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
  At(() => {
    clearTimeout(o), clearTimeout(u), p();
  });
  function I(v) {
    ee[v ? "unshift" : "push"](() => {
      c = v, t(0, c);
    });
  }
  return n.$$set = (v) => {
    "content" in v && t(3, r = v.content), "hoverDelay" in v && t(4, s = v.hoverDelay), "hideDelay" in v && t(5, a = v.hideDelay), "$$scope" in v && t(6, i = v.$$scope);
  }, [
    c,
    g,
    _,
    r,
    s,
    a,
    i,
    l,
    I
  ];
}
class Oa extends fe {
  constructor(e) {
    super(), ce(this, e, Ta, Ma, se, { content: 3, hoverDelay: 4, hideDelay: 5 });
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
var Ze = {
  HEADER_CELL_SORTED: "mdc-data-table__header-cell--sorted",
  HEADER_CELL_SORTED_DESCENDING: "mdc-data-table__header-cell--sorted-descending",
  IN_PROGRESS: "mdc-data-table--in-progress",
  ROW_SELECTED: "mdc-data-table__row--selected"
}, Jn = {
  ARIA_SELECTED: "aria-selected",
  ARIA_SORT: "aria-sort"
}, nt = {
  ARIA_SELECTED: Jn.ARIA_SELECTED,
  ARIA_SORT: Jn.ARIA_SORT
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
var Ua = (
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
        s !== i && (this.adapter.removeClassNameByHeaderCellIndex(s, Ze.HEADER_CELL_SORTED), this.adapter.removeClassNameByHeaderCellIndex(s, Ze.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(s, nt.ARIA_SORT, Fe.NONE), this.adapter.setSortStatusLabelByHeaderCellIndex(s, Fe.NONE));
      this.adapter.setClassNameByHeaderCellIndex(i, Ze.HEADER_CELL_SORTED);
      var a = this.adapter.getAttributeByHeaderCellIndex(i, nt.ARIA_SORT), o = Fe.NONE;
      a === Fe.ASCENDING ? (this.adapter.setClassNameByHeaderCellIndex(i, Ze.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(i, nt.ARIA_SORT, Fe.DESCENDING), o = Fe.DESCENDING) : a === Fe.DESCENDING ? (this.adapter.removeClassNameByHeaderCellIndex(i, Ze.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(i, nt.ARIA_SORT, Fe.ASCENDING), o = Fe.ASCENDING) : (this.adapter.setAttributeByHeaderCellIndex(i, nt.ARIA_SORT, Fe.ASCENDING), o = Fe.ASCENDING), this.adapter.setSortStatusLabelByHeaderCellIndex(i, o), this.adapter.notifySortAction({
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
      }), this.adapter.addClass(Ze.IN_PROGRESS);
    }, e.prototype.hideProgress = function() {
      this.adapter.removeClass(Ze.IN_PROGRESS);
    }, e.prototype.setHeaderRowCheckboxState = function() {
      this.adapter.getSelectedRowCount() === 0 ? (this.adapter.setHeaderRowCheckboxChecked(!1), this.adapter.setHeaderRowCheckboxIndeterminate(!1)) : this.adapter.getSelectedRowCount() === this.adapter.getRowCount() ? (this.adapter.setHeaderRowCheckboxChecked(!0), this.adapter.setHeaderRowCheckboxIndeterminate(!1)) : (this.adapter.setHeaderRowCheckboxIndeterminate(!0), this.adapter.setHeaderRowCheckboxChecked(!1));
    }, e.prototype.selectRowAtIndex = function(t, l) {
      l ? (this.adapter.addClassAtRowIndex(t, Ze.ROW_SELECTED), this.adapter.setAttributeAtRowIndex(t, nt.ARIA_SELECTED, "true")) : (this.adapter.removeClassAtRowIndex(t, Ze.ROW_SELECTED), this.adapter.setAttributeAtRowIndex(t, nt.ARIA_SELECTED, "false"));
    }, e;
  }(ht)
);
const Ba = (n) => ({}), Qn = (n) => ({}), Pa = (n) => ({}), xn = (n) => ({});
function $n(n) {
  let e, t, l, i, r;
  const s = (
    /*#slots*/
    n[36].progress
  ), a = le(
    s,
    n,
    /*$$scope*/
    n[35],
    xn
  );
  return {
    c() {
      e = F("div"), t = F("div"), l = V(), a && a.c(), T(t, "class", "mdc-data-table__scrim"), T(e, "class", "mdc-data-table__progress-indicator"), T(e, "style", i = Object.entries(
        /*progressIndicatorStyles*/
        n[13]
      ).map(el).join(" "));
    },
    m(o, u) {
      U(o, e, u), P(e, t), P(e, l), a && a.m(e, null), r = !0;
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
          Pa
        ) : ae(
          /*$$scope*/
          o[35]
        ),
        xn
      ), (!r || u[0] & /*progressIndicatorStyles*/
      8192 && i !== (i = Object.entries(
        /*progressIndicatorStyles*/
        o[13]
      ).map(el).join(" "))) && T(e, "style", i);
    },
    i(o) {
      r || (L(a, o), r = !0);
    },
    o(o) {
      E(a, o), r = !1;
    },
    d(o) {
      o && O(e), a && a.d(o);
    }
  };
}
function Fa(n) {
  let e, t, l, i, r, s, a, o, u, c, f, d, g, _;
  const k = (
    /*#slots*/
    n[36].default
  ), p = le(
    k,
    n,
    /*$$scope*/
    n[35],
    null
  );
  let I = [
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
  ], v = {};
  for (let M = 0; M < I.length; M += 1)
    v = j(v, I[M]);
  let b = [
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
  for (let M = 0; M < b.length; M += 1)
    m = j(m, b[M]);
  let D = (
    /*$$slots*/
    n[24].progress && $n(n)
  );
  const S = (
    /*#slots*/
    n[36].paginate
  ), h = le(
    S,
    n,
    /*$$scope*/
    n[35],
    Qn
  );
  let w = [
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
  ], G = {};
  for (let M = 0; M < w.length; M += 1)
    G = j(G, w[M]);
  return {
    c() {
      e = F("div"), t = F("div"), l = F("table"), p && p.c(), o = V(), D && D.c(), u = V(), h && h.c(), ne(l, v), ne(t, m), ne(e, G);
    },
    m(M, y) {
      U(M, e, y), P(e, t), P(t, l), p && p.m(l, null), n[37](t), P(e, o), D && D.m(e, null), P(e, u), h && h.m(e, null), n[38](e), d = !0, g || (_ = [
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
    p(M, y) {
      p && p.p && (!d || y[1] & /*$$scope*/
      16) && re(
        p,
        k,
        M,
        /*$$scope*/
        M[35],
        d ? ie(
          k,
          /*$$scope*/
          M[35],
          y,
          null
        ) : ae(
          /*$$scope*/
          M[35]
        ),
        null
      ), ne(l, v = oe(I, [
        (!d || y[0] & /*table$class*/
        64 && i !== (i = x({
          [
            /*table$class*/
            M[6]
          ]: !0,
          "mdc-data-table__table": !0
        }))) && { class: i },
        y[0] & /*$$restProps*/
        33554432 && De(
          /*$$restProps*/
          M[25],
          "table$"
        )
      ])), r && ve(r.update) && y[0] & /*table$use*/
      32 && r.update.call(
        null,
        /*table$use*/
        M[5]
      ), ne(t, m = oe(b, [
        (!d || y[0] & /*container$class*/
        16 && s !== (s = x({
          [
            /*container$class*/
            M[4]
          ]: !0,
          "mdc-data-table__table-container": !0
        }))) && { class: s },
        y[0] & /*$$restProps*/
        33554432 && De(
          /*$$restProps*/
          M[25],
          "container$"
        )
      ])), a && ve(a.update) && y[0] & /*container$use*/
      8 && a.update.call(
        null,
        /*container$use*/
        M[3]
      ), /*$$slots*/
      M[24].progress ? D ? (D.p(M, y), y[0] & /*$$slots*/
      16777216 && L(D, 1)) : (D = $n(M), D.c(), L(D, 1), D.m(e, u)) : D && (ge(), E(D, 1, 1, () => {
        D = null;
      }), pe()), h && h.p && (!d || y[1] & /*$$scope*/
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
          y,
          Ba
        ) : ae(
          /*$$scope*/
          M[35]
        ),
        Qn
      ), ne(e, G = oe(w, [
        (!d || y[0] & /*className, stickyHeader, internalClasses*/
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
        y[0] & /*$$restProps*/
        33554432 && ft(
          /*$$restProps*/
          M[25],
          ["container$", "table$"]
        )
      ])), f && ve(f.update) && y[0] & /*use*/
      1 && f.update.call(
        null,
        /*use*/
        M[0]
      );
    },
    i(M) {
      d || (L(p, M), L(D), L(h, M), d = !0);
    },
    o(M) {
      E(p, M), E(D), E(h, M), d = !1;
    },
    d(M) {
      M && O(e), p && p.d(M), n[37](null), D && D.d(), h && h.d(M), n[38](null), g = !1, he(_);
    }
  };
}
const el = ([n, e]) => `${n}: ${e};`;
function Na(n, e, t) {
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
  const c = en(o), { closest: f } = El, d = Be(Re());
  let { use: g = [] } = e, { class: _ = "" } = e, { stickyHeader: k = !1 } = e, { sortable: p = !1 } = e, { sort: I = null } = e, { sortDirection: v = "ascending" } = e, { sortAscendingAriaLabel: b = "sorted, ascending" } = e, { sortDescendingAriaLabel: m = "sorted, descending" } = e, { container$use: D = [] } = e, { container$class: S = "" } = e, { table$use: h = [] } = e, { table$class: w = "" } = e, G, M, y, B, R, W = {}, de = { height: "auto", top: "initial" }, _e = Pe("SMUI:addLayoutListener"), Ce, q = !1, C = Tt(!1);
  ut(n, C, (H) => t(34, r = H));
  let N = Tt(I);
  ut(n, N, (H) => t(45, a = H));
  let me = Tt(v);
  ut(n, me, (H) => t(44, s = H)), Me("SMUI:checkbox:context", "data-table"), Me("SMUI:linear-progress:context", "data-table"), Me("SMUI:linear-progress:closed", C), Me("SMUI:data-table:sortable", p), Me("SMUI:data-table:sort", N), Me("SMUI:data-table:sortDirection", me), Me("SMUI:data-table:sortAscendingAriaLabel", b), Me("SMUI:data-table:sortDescendingAriaLabel", m), _e && (Ce = _e(gt));
  let be;
  Ne(() => (t(7, M = new Ua({
    addClass: Ge,
    removeClass: ze,
    getHeaderCellElements: () => {
      var H;
      return (H = B == null ? void 0 : B.cells.map((Z) => Z.element)) !== null && H !== void 0 ? H : [];
    },
    getHeaderCellCount: () => {
      var H;
      return (H = B == null ? void 0 : B.cells.length) !== null && H !== void 0 ? H : 0;
    },
    getAttributeByHeaderCellIndex: (H, Z) => {
      var Ee;
      return (Ee = B == null ? void 0 : B.orderedCells[H].getAttr(Z)) !== null && Ee !== void 0 ? Ee : null;
    },
    setAttributeByHeaderCellIndex: (H, Z, Ee) => {
      B == null || B.orderedCells[H].addAttr(Z, Ee);
    },
    setClassNameByHeaderCellIndex: (H, Z) => {
      B == null || B.orderedCells[H].addClass(Z);
    },
    removeClassNameByHeaderCellIndex: (H, Z) => {
      B == null || B.orderedCells[H].removeClass(Z);
    },
    notifySortAction: (H) => {
      t(26, I = H.columnId), t(27, v = H.sortValue), Ae(qe(), "SMUIDataTable:sorted", H, void 0, !0);
    },
    getTableContainerHeight: () => y.getBoundingClientRect().height,
    getTableHeaderHeight: () => {
      const H = qe().querySelector(".mdc-data-table__header-row");
      if (!H)
        throw new Error("MDCDataTable: Table header element not found.");
      return H.getBoundingClientRect().height;
    },
    setProgressIndicatorStyles: (H) => {
      t(13, de = H);
    },
    addClassAtRowIndex: (H, Z) => {
      R == null || R.orderedRows[H].addClass(Z);
    },
    getRowCount: () => {
      var H;
      return (H = R == null ? void 0 : R.rows.length) !== null && H !== void 0 ? H : 0;
    },
    getRowElements: () => {
      var H;
      return (H = R == null ? void 0 : R.rows.map((Z) => Z.element)) !== null && H !== void 0 ? H : [];
    },
    getRowIdAtIndex: (H) => {
      var Z;
      return (Z = R == null ? void 0 : R.orderedRows[H].rowId) !== null && Z !== void 0 ? Z : null;
    },
    getRowIndexByChildElement: (H) => {
      var Z;
      return (Z = R == null ? void 0 : R.orderedRows.map((Ee) => Ee.element).indexOf(f(H, ".mdc-data-table__row"))) !== null && Z !== void 0 ? Z : -1;
    },
    getSelectedRowCount: () => {
      var H;
      return (H = R == null ? void 0 : R.rows.filter((Z) => Z.selected).length) !== null && H !== void 0 ? H : 0;
    },
    isCheckboxAtRowIndexChecked: (H) => {
      const Z = R == null ? void 0 : R.orderedRows[H].checkbox;
      return Z ? Z.checked : !1;
    },
    isHeaderRowCheckboxChecked: () => {
      const H = B == null ? void 0 : B.checkbox;
      return H ? H.checked : !1;
    },
    isRowsSelectable: () => !!qe().querySelector(".mdc-data-table__row-checkbox") || !!qe().querySelector(".mdc-data-table__header-row-checkbox"),
    notifyRowSelectionChanged: (H) => {
      const Z = R == null ? void 0 : R.orderedRows[H.rowIndex];
      Z && Ae(
        qe(),
        "SMUIDataTable:rowSelectionChanged",
        {
          row: Z.element,
          rowId: Z.rowId,
          rowIndex: H.rowIndex,
          selected: H.selected
        },
        void 0,
        !0
      );
    },
    notifySelectedAll: () => {
      Je(!1), Ae(qe(), "SMUIDataTable:selectedAll", void 0, void 0, !0);
    },
    notifyUnselectedAll: () => {
      Je(!1), Ae(qe(), "SMUIDataTable:unselectedAll", void 0, void 0, !0);
    },
    notifyRowClick: (H) => {
      Ae(qe(), "SMUIDataTable:rowClick", H, void 0, !0);
    },
    registerHeaderRowCheckbox: () => {
    },
    // Handled automatically.
    registerRowCheckboxes: () => {
    },
    // Handled automatically.
    removeClassAtRowIndex: (H, Z) => {
      R == null || R.orderedRows[H].removeClass(Z);
    },
    setAttributeAtRowIndex: (H, Z, Ee) => {
      R == null || R.orderedRows[H].addAttr(Z, Ee);
    },
    setHeaderRowCheckboxChecked: (H) => {
      const Z = B == null ? void 0 : B.checkbox;
      Z && (Z.checked = H);
    },
    setHeaderRowCheckboxIndeterminate: Je,
    setRowCheckboxCheckedAtIndex: (H, Z) => {
      const Ee = R == null ? void 0 : R.orderedRows[H].checkbox;
      Ee && (Ee.checked = Z);
    },
    setSortStatusLabelByHeaderCellIndex: (H, Z) => {
    }
    // Handled automatically.
  })), M.init(), M.layout(), t(14, q = !0), () => {
    M.destroy();
  })), At(() => {
    Ce && Ce();
  });
  function Ie(H) {
    t(10, B = H.detail);
  }
  function te(H) {
    t(11, R = H.detail);
  }
  function X(H) {
    M && M.handleRowCheckboxChange(H);
  }
  function Ge(H) {
    W[H] || t(12, W[H] = !0, W);
  }
  function ze(H) {
    (!(H in W) || W[H]) && t(12, W[H] = !1, W);
  }
  function Je(H) {
    const Z = B == null ? void 0 : B.checkbox;
    Z && (Z.indeterminate = H);
  }
  function Qe(H) {
    if (!M || !H.detail.target)
      return;
    const Z = f(H.detail.target, ".mdc-data-table__header-cell--with-sort");
    Z && mt(Z);
  }
  function yt(H) {
    if (!M || !H.detail.target)
      return;
    const Z = f(H.detail.target, ".mdc-data-table__row");
    Z && M && M.handleRowClick({ rowId: H.detail.rowId, row: Z });
  }
  function mt(H) {
    var Z, Ee;
    const kt = (Z = B == null ? void 0 : B.orderedCells) !== null && Z !== void 0 ? Z : [], _t = kt.map((Lt) => Lt.element).indexOf(H);
    if (_t === -1)
      return;
    const wt = (Ee = kt[_t].columnId) !== null && Ee !== void 0 ? Ee : null;
    M.handleSortAction({ columnId: wt, columnIndex: _t, headerCell: H });
  }
  function gt() {
    return M.layout();
  }
  function qe() {
    return G;
  }
  function xe(H) {
    ee[H ? "unshift" : "push"](() => {
      y = H, t(9, y);
    });
  }
  function $e(H) {
    ee[H ? "unshift" : "push"](() => {
      G = H, t(8, G);
    });
  }
  const it = () => M && q && M.layout(), et = () => t(10, B = void 0), pt = () => t(11, R = void 0), Nt = () => M && M.handleHeaderRowCheckboxChange();
  return n.$$set = (H) => {
    e = j(j({}, e), Oe(H)), t(25, i = ue(e, l)), "use" in H && t(0, g = H.use), "class" in H && t(1, _ = H.class), "stickyHeader" in H && t(2, k = H.stickyHeader), "sortable" in H && t(28, p = H.sortable), "sort" in H && t(26, I = H.sort), "sortDirection" in H && t(27, v = H.sortDirection), "sortAscendingAriaLabel" in H && t(29, b = H.sortAscendingAriaLabel), "sortDescendingAriaLabel" in H && t(30, m = H.sortDescendingAriaLabel), "container$use" in H && t(3, D = H.container$use), "container$class" in H && t(4, S = H.container$class), "table$use" in H && t(5, h = H.table$use), "table$class" in H && t(6, w = H.table$class), "$$scope" in H && t(35, u = H.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty[0] & /*sort*/
    67108864 && Kt(N, a = I, a), n.$$.dirty[0] & /*sortDirection*/
    134217728 && Kt(me, s = v, s), n.$$.dirty[0] & /*instance*/
    128 | n.$$.dirty[1] & /*previousProgressClosed, $progressClosed*/
    12 && c.progress && M && be !== r && (t(33, be = r), r ? M.hideProgress() : M.showProgress());
  }, [
    g,
    _,
    k,
    D,
    S,
    h,
    w,
    M,
    G,
    y,
    B,
    R,
    W,
    de,
    q,
    d,
    C,
    N,
    me,
    Ie,
    te,
    X,
    Qe,
    yt,
    c,
    i,
    I,
    v,
    p,
    b,
    m,
    gt,
    qe,
    be,
    r,
    u,
    o,
    xe,
    $e,
    it,
    et,
    pt,
    Nt
  ];
}
class Ga extends fe {
  constructor(e) {
    super(), ce(
      this,
      e,
      Na,
      Fa,
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
function qa(n) {
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
    u = j(u, o[c]);
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
      l || (L(a, c), l = !0);
    },
    o(c) {
      E(a, c), l = !1;
    },
    d(c) {
      c && O(e), a && a.d(c), n[11](null), i = !1, he(r);
    }
  };
}
function ja(n, e, t) {
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
        return p();
      },
      get checkbox() {
        return c;
      }
    };
    return Ae(I(), "SMUIDataTableHeader:mount", m), () => {
      Ae(I(), "SMUIDataTableHeader:unmount", m);
    };
  });
  function g(m) {
    t(2, c = m.detail);
  }
  function _(m) {
    f.push(m.detail), d.set(m.detail.element, m.detail), m.stopPropagation();
  }
  function k(m) {
    const D = f.indexOf(m.detail);
    D !== -1 && (f.splice(D, 1), f = f), d.delete(m.detail.element), m.stopPropagation();
  }
  function p() {
    return [...I().querySelectorAll(".mdc-data-table__header-cell")].map((m) => d.get(m)).filter((m) => m && m._smui_data_table_header_cell_accessor);
  }
  function I() {
    return u;
  }
  function v(m) {
    ee[m ? "unshift" : "push"](() => {
      u = m, t(1, u);
    });
  }
  const b = () => t(2, c = void 0);
  return n.$$set = (m) => {
    e = j(j({}, e), Oe(m)), t(7, i = ue(e, l)), "use" in m && t(0, o = m.use), "$$scope" in m && t(9, s = m.$$scope);
  }, [
    o,
    u,
    c,
    a,
    g,
    _,
    k,
    i,
    I,
    s,
    r,
    v,
    b
  ];
}
class Wa extends fe {
  constructor(e) {
    super(), ce(this, e, ja, qa, se, { use: 0, getElement: 8 });
  }
  get getElement() {
    return this.$$.ctx[8];
  }
}
function Za(n) {
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
    c = j(c, u[f]);
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
      i || (L(o, f), i = !0);
    },
    o(f) {
      E(o, f), i = !1;
    },
    d(f) {
      f && O(e), o && o.d(f), n[10](null), r = !1, he(s);
    }
  };
}
function Va(n, e, t) {
  const l = ["use", "class", "getElement"];
  let i = ue(e, l), { $$slots: r = {}, $$scope: s } = e;
  const a = Be(Re());
  let { use: o = [] } = e, { class: u = "" } = e, c, f = [];
  const d = /* @__PURE__ */ new WeakMap();
  Me("SMUI:data-table:row:header", !1), Ne(() => {
    const v = {
      get rows() {
        return f;
      },
      get orderedRows() {
        return k();
      }
    };
    return Ae(p(), "SMUIDataTableBody:mount", v), () => {
      Ae(p(), "SMUIDataTableBody:unmount", v);
    };
  });
  function g(v) {
    f.push(v.detail), d.set(v.detail.element, v.detail), v.stopPropagation();
  }
  function _(v) {
    const b = f.indexOf(v.detail);
    b !== -1 && (f.splice(b, 1), f = f), d.delete(v.detail.element), v.stopPropagation();
  }
  function k() {
    return [...p().querySelectorAll(".mdc-data-table__row")].map((v) => d.get(v)).filter((v) => v && v._smui_data_table_row_accessor);
  }
  function p() {
    return c;
  }
  function I(v) {
    ee[v ? "unshift" : "push"](() => {
      c = v, t(2, c);
    });
  }
  return n.$$set = (v) => {
    e = j(j({}, e), Oe(v)), t(6, i = ue(e, l)), "use" in v && t(0, o = v.use), "class" in v && t(1, u = v.class), "$$scope" in v && t(8, s = v.$$scope);
  }, [
    o,
    u,
    c,
    a,
    g,
    _,
    i,
    p,
    s,
    r,
    I
  ];
}
class za extends fe {
  constructor(e) {
    super(), ce(this, e, Va, Za, se, { use: 0, class: 1, getElement: 7 });
  }
  get getElement() {
    return this.$$.ctx[7];
  }
}
function Xa(n) {
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
    f = j(f, c[d]);
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
      r || (L(u, d), r = !0);
    },
    o(d) {
      E(u, d), r = !1;
    },
    d(d) {
      d && O(e), u && u.d(d), n[16](null), s = !1, he(a);
    }
  };
}
let Ya = 0;
function Ka(n, e, t) {
  const l = ["use", "class", "rowId", "getElement"];
  let i = ue(e, l), { $$slots: r = {}, $$scope: s } = e;
  const a = Be(Re());
  let { use: o = [] } = e, { class: u = "" } = e, { rowId: c = "SMUI-data-table-row-" + Ya++ } = e, f, d, g = {}, _ = {}, k = Pe("SMUI:data-table:row:header");
  Ne(() => {
    const y = k ? {
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
      addClass: I,
      removeClass: v,
      getAttr: b,
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
      addClass: I,
      removeClass: v,
      getAttr: b,
      addAttr: m
    };
    return Ae(h(), "SMUIDataTableRow:mount", y), () => {
      Ae(h(), "SMUIDataTableRow:unmount", y);
    };
  });
  function p(y) {
    t(3, d = y.detail);
  }
  function I(y) {
    g[y] || t(4, g[y] = !0, g);
  }
  function v(y) {
    (!(y in g) || g[y]) && t(4, g[y] = !1, g);
  }
  function b(y) {
    var B;
    return y in _ ? (B = _[y]) !== null && B !== void 0 ? B : null : h().getAttribute(y);
  }
  function m(y, B) {
    _[y] !== B && t(5, _[y] = B, _);
  }
  function D(y) {
    Ae(h(), "SMUIDataTableHeader:click", y);
  }
  function S(y) {
    Ae(h(), "SMUIDataTableRow:click", { rowId: c, target: y.target });
  }
  function h() {
    return f;
  }
  function w(y) {
    ee[y ? "unshift" : "push"](() => {
      f = y, t(2, f);
    });
  }
  const G = (y) => k ? D(y) : S(y), M = () => t(3, d = void 0);
  return n.$$set = (y) => {
    e = j(j({}, e), Oe(y)), t(11, i = ue(e, l)), "use" in y && t(0, o = y.use), "class" in y && t(1, u = y.class), "rowId" in y && t(12, c = y.rowId), "$$scope" in y && t(14, s = y.$$scope);
  }, [
    o,
    u,
    f,
    d,
    g,
    _,
    a,
    k,
    p,
    D,
    S,
    i,
    c,
    h,
    s,
    r,
    w,
    G,
    M
  ];
}
class Ml extends fe {
  constructor(e) {
    super(), ce(this, e, Ka, Xa, se, {
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
function Ja(n) {
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
    c = j(c, u[f]);
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
      i || (L(o, f), i = !0);
    },
    o(f) {
      E(o, f), i = !1;
    },
    d(f) {
      f && O(e), o && o.d(f), n[25](null), r = !1, he(s);
    }
  };
}
function Qa(n) {
  let e, t, l, i, r, s, a, o, u;
  const c = [$a, xa], f = [];
  function d(k, p) {
    return (
      /*sortable*/
      k[5] ? 0 : 1
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
  ], _ = {};
  for (let k = 0; k < g.length; k += 1)
    _ = j(_, g[k]);
  return {
    c() {
      e = F("th"), l.c(), ne(e, _);
    },
    m(k, p) {
      U(k, e, p), f[t].m(e, null), n[23](e), a = !0, o || (u = [
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
    p(k, p) {
      let I = t;
      t = d(k), t === I ? f[t].p(k, p) : (ge(), E(f[I], 1, 1, () => {
        f[I] = null;
      }), pe(), l = f[t], l ? l.p(k, p) : (l = f[t] = c[t](k), l.c()), L(l, 1), l.m(e, null)), ne(e, _ = oe(g, [
        (!a || p & /*className, numeric, checkbox, sortable, $sort, columnId, internalClasses*/
        702 && i !== (i = x({
          [
            /*className*/
            k[1]
          ]: !0,
          "mdc-data-table__header-cell": !0,
          "mdc-data-table__header-cell--numeric": (
            /*numeric*/
            k[2]
          ),
          "mdc-data-table__header-cell--checkbox": (
            /*checkbox*/
            k[3]
          ),
          "mdc-data-table__header-cell--with-sort": (
            /*sortable*/
            k[5]
          ),
          "mdc-data-table__header-cell--sorted": (
            /*sortable*/
            k[5] && /*$sort*/
            k[9] === /*columnId*/
            k[4]
          ),
          .../*internalClasses*/
          k[7]
        }))) && { class: i },
        { role: "columnheader" },
        { scope: "col" },
        (!a || p & /*columnId*/
        16) && { "data-column-id": (
          /*columnId*/
          k[4]
        ) },
        (!a || p & /*sortable, $sort, columnId, $sortDirection*/
        1584 && r !== (r = /*sortable*/
        k[5] ? (
          /*$sort*/
          k[9] === /*columnId*/
          k[4] ? (
            /*$sortDirection*/
            k[10]
          ) : "none"
        ) : void 0)) && { "aria-sort": r },
        p & /*internalAttrs*/
        256 && /*internalAttrs*/
        k[8],
        p & /*$$restProps*/
        524288 && /*$$restProps*/
        k[19]
      ])), s && ve(s.update) && p & /*use*/
      1 && s.update.call(
        null,
        /*use*/
        k[0]
      );
    },
    i(k) {
      a || (L(l), a = !0);
    },
    o(k) {
      E(l), a = !1;
    },
    d(k) {
      k && O(e), f[t].d(), n[23](null), o = !1, he(u);
    }
  };
}
function xa(n) {
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
      e || (L(l, i), e = !0);
    },
    o(i) {
      E(l, i), e = !1;
    },
    d(i) {
      l && l.d(i);
    }
  };
}
function $a(n) {
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
      e = F("div"), u && u.c(), t = V(), l = F("div"), r = ye(i), T(l, "class", "mdc-data-table__sort-status-label"), T(l, "aria-hidden", "true"), T(l, "id", s = /*columnId*/
      n[4] + "-status-label"), T(e, "class", "mdc-data-table__header-cell-wrapper");
    },
    m(c, f) {
      U(c, e, f), u && u.m(e, null), P(e, t), P(e, l), P(l, r), a = !0;
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
      a || (L(u, c), a = !0);
    },
    o(c) {
      E(u, c), a = !1;
    },
    d(c) {
      c && O(e), u && u.d(c);
    }
  };
}
function es(n) {
  let e, t, l, i;
  const r = [Qa, Ja], s = [];
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
      i || (L(t), i = !0);
    },
    o(o) {
      E(t), i = !1;
    },
    d(o) {
      o && O(l), s[e].d(o);
    }
  };
}
let ts = 0;
function ns(n, e, t) {
  const l = ["use", "class", "numeric", "checkbox", "columnId", "sortable", "getElement"];
  let i = ue(e, l), r, s, { $$slots: a = {}, $$scope: o } = e;
  const u = Be(Re());
  let c = Pe("SMUI:data-table:row:header"), { use: f = [] } = e, { class: d = "" } = e, { numeric: g = !1 } = e, { checkbox: _ = !1 } = e, { columnId: k = c ? "SMUI-data-table-column-" + ts++ : "SMUI-data-table-unused" } = e, { sortable: p = Pe("SMUI:data-table:sortable") } = e, I, v = {}, b = {}, m = Pe("SMUI:data-table:sort");
  ut(n, m, (C) => t(9, r = C));
  let D = Pe("SMUI:data-table:sortDirection");
  ut(n, D, (C) => t(10, s = C));
  let S = Pe("SMUI:data-table:sortAscendingAriaLabel"), h = Pe("SMUI:data-table:sortDescendingAriaLabel");
  p && (Me("SMUI:label:context", "data-table:sortable-header-cell"), Me("SMUI:icon-button:context", "data-table:sortable-header-cell"), Me("SMUI:icon-button:aria-describedby", k + "-status-label")), Ne(() => {
    const C = c ? {
      _smui_data_table_header_cell_accessor: !0,
      get element() {
        return W();
      },
      get columnId() {
        return k;
      },
      addClass: w,
      removeClass: G,
      getAttr: M,
      addAttr: y
    } : {
      _smui_data_table_header_cell_accessor: !1,
      get element() {
        return W();
      },
      get columnId() {
      },
      addClass: w,
      removeClass: G,
      getAttr: M,
      addAttr: y
    };
    return Ae(W(), "SMUIDataTableCell:mount", C), () => {
      Ae(W(), "SMUIDataTableCell:unmount", C);
    };
  });
  function w(C) {
    v[C] || t(7, v[C] = !0, v);
  }
  function G(C) {
    (!(C in v) || v[C]) && t(7, v[C] = !1, v);
  }
  function M(C) {
    var N;
    return C in b ? (N = b[C]) !== null && N !== void 0 ? N : null : W().getAttribute(C);
  }
  function y(C, N) {
    b[C] !== N && t(8, b[C] = N, b);
  }
  function B(C) {
    Ae(W(), "SMUIDataTableHeaderCheckbox:change", C);
  }
  function R(C) {
    Ae(W(), "SMUIDataTableBodyCheckbox:change", C);
  }
  function W() {
    return I;
  }
  function de(C) {
    ee[C ? "unshift" : "push"](() => {
      I = C, t(6, I);
    });
  }
  const _e = (C) => _ && B(C);
  function Ce(C) {
    ee[C ? "unshift" : "push"](() => {
      I = C, t(6, I);
    });
  }
  const q = (C) => _ && R(C);
  return n.$$set = (C) => {
    e = j(j({}, e), Oe(C)), t(19, i = ue(e, l)), "use" in C && t(0, f = C.use), "class" in C && t(1, d = C.class), "numeric" in C && t(2, g = C.numeric), "checkbox" in C && t(3, _ = C.checkbox), "columnId" in C && t(4, k = C.columnId), "sortable" in C && t(5, p = C.sortable), "$$scope" in C && t(21, o = C.$$scope);
  }, [
    f,
    d,
    g,
    _,
    k,
    p,
    I,
    v,
    b,
    r,
    s,
    u,
    c,
    m,
    D,
    S,
    h,
    B,
    R,
    i,
    W,
    o,
    a,
    de,
    _e,
    Ce,
    q
  ];
}
class Ft extends fe {
  constructor(e) {
    super(), ce(this, e, ns, es, se, {
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
function tl(n, e, t) {
  const l = n.slice();
  return l[17] = e[t], l[19] = t, l;
}
const ls = (n) => ({ item: n & /*items*/
1 }), nl = (n) => ({ item: (
  /*item*/
  n[17]
) });
function ll(n, e, t) {
  const l = n.slice();
  return l[20] = e[t], l;
}
function il(n, e, t) {
  const l = n.slice();
  return l[20] = e[t], l;
}
function is(n) {
  let e, t;
  return e = new Ga({
    props: {
      style: "width: 100%;",
      $$slots: { default: [gs] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      J(e.$$.fragment);
    },
    m(l, i) {
      Y(e, l, i), t = !0;
    },
    p(l, i) {
      const r = {};
      i & /*$$scope, items, rowBg, hoveredRow, getRowId, slotHasActions, columns, headerBg*/
      17379 && (r.$$scope = { dirty: i, ctx: l }), e.$set(r);
    },
    i(l) {
      t || (L(e.$$.fragment, l), t = !0);
    },
    o(l) {
      E(e.$$.fragment, l), t = !1;
    },
    d(l) {
      K(e, l);
    }
  };
}
function rs(n) {
  let e, t;
  return {
    c() {
      e = F("p"), t = ye(
        /*emptyText*/
        n[4]
      ), T(e, "class", "status svelte-1v7zd15");
    },
    m(l, i) {
      U(l, e, i), P(e, t);
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
function as(n) {
  let e, t;
  return {
    c() {
      e = F("p"), t = ye(
        /*errorMsg*/
        n[3]
      ), T(e, "class", "status error svelte-1v7zd15");
    },
    m(l, i) {
      U(l, e, i), P(e, t);
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
function ss(n) {
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
function os(n) {
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
function rl(n) {
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
      $$slots: { default: [os] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      J(e.$$.fragment);
    },
    m(l, i) {
      Y(e, l, i), t = !0;
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
      t || (L(e.$$.fragment, l), t = !0);
    },
    o(l) {
      E(e.$$.fragment, l), t = !1;
    },
    d(l) {
      K(e, l);
    }
  };
}
function al(n) {
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
      J(e.$$.fragment);
    },
    m(l, i) {
      Y(e, l, i), t = !0;
    },
    p(l, i) {
      const r = {};
      i & /*headerBg*/
      64 && (r.style = /*headerBg*/
      l[6] ? `background-color:${/*headerBg*/
      l[6]}` : void 0), e.$set(r);
    },
    i(l) {
      t || (L(e.$$.fragment, l), t = !0);
    },
    o(l) {
      E(e.$$.fragment, l), t = !1;
    },
    d(l) {
      K(e, l);
    }
  };
}
function us(n) {
  let e, t, l, i = We(
    /*columns*/
    n[1]
  ), r = [];
  for (let o = 0; o < i.length; o += 1)
    r[o] = rl(il(n, i, o));
  const s = (o) => E(r[o], 1, 1, () => {
    r[o] = null;
  });
  let a = (
    /*slotHasActions*/
    n[9] && al(n)
  );
  return {
    c() {
      for (let o = 0; o < r.length; o += 1)
        r[o].c();
      e = V(), a && a.c(), t = Se();
    },
    m(o, u) {
      for (let c = 0; c < r.length; c += 1)
        r[c] && r[c].m(o, u);
      U(o, e, u), a && a.m(o, u), U(o, t, u), l = !0;
    },
    p(o, u) {
      if (u & /*columns, headerBg, Boolean*/
      66) {
        i = We(
          /*columns*/
          o[1]
        );
        let c;
        for (c = 0; c < i.length; c += 1) {
          const f = il(o, i, c);
          r[c] ? (r[c].p(f, u), L(r[c], 1)) : (r[c] = rl(f), r[c].c(), L(r[c], 1), r[c].m(e.parentNode, e));
        }
        for (ge(), c = i.length; c < r.length; c += 1)
          s(c);
        pe();
      }
      /*slotHasActions*/
      o[9] ? a ? (a.p(o, u), u & /*slotHasActions*/
      512 && L(a, 1)) : (a = al(o), a.c(), L(a, 1), a.m(t.parentNode, t)) : a && (ge(), E(a, 1, 1, () => {
        a = null;
      }), pe());
    },
    i(o) {
      if (!l) {
        for (let u = 0; u < i.length; u += 1)
          L(r[u]);
        L(a), l = !0;
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
function cs(n) {
  let e, t;
  return e = new Ml({
    props: {
      $$slots: { default: [us] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      J(e.$$.fragment);
    },
    m(l, i) {
      Y(e, l, i), t = !0;
    },
    p(l, i) {
      const r = {};
      i & /*$$scope, headerBg, slotHasActions, columns*/
      16962 && (r.$$scope = { dirty: i, ctx: l }), e.$set(r);
    },
    i(l) {
      t || (L(e.$$.fragment, l), t = !0);
    },
    o(l) {
      E(e.$$.fragment, l), t = !1;
    },
    d(l) {
      K(e, l);
    }
  };
}
function fs(n) {
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
function sl(n) {
  let e, t;
  return e = new Ft({
    props: {
      $$slots: { default: [fs] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      J(e.$$.fragment);
    },
    m(l, i) {
      Y(e, l, i), t = !0;
    },
    p(l, i) {
      const r = {};
      i & /*$$scope, items, columns*/
      16387 && (r.$$scope = { dirty: i, ctx: l }), e.$set(r);
    },
    i(l) {
      t || (L(e.$$.fragment, l), t = !0);
    },
    o(l) {
      E(e.$$.fragment, l), t = !1;
    },
    d(l) {
      K(e, l);
    }
  };
}
function ol(n) {
  let e, t;
  return e = new Ft({
    props: {
      numeric: !0,
      $$slots: { default: [ds] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      J(e.$$.fragment);
    },
    m(l, i) {
      Y(e, l, i), t = !0;
    },
    p(l, i) {
      const r = {};
      i & /*$$scope, items*/
      16385 && (r.$$scope = { dirty: i, ctx: l }), e.$set(r);
    },
    i(l) {
      t || (L(e.$$.fragment, l), t = !0);
    },
    o(l) {
      E(e.$$.fragment, l), t = !1;
    },
    d(l) {
      K(e, l);
    }
  };
}
function ds(n) {
  let e;
  const t = (
    /*#slots*/
    n[11].actions
  ), l = le(
    t,
    n,
    /*$$scope*/
    n[14],
    nl
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
          ls
        ) : ae(
          /*$$scope*/
          i[14]
        ),
        nl
      );
    },
    i(i) {
      e || (L(l, i), e = !0);
    },
    o(i) {
      E(l, i), e = !1;
    },
    d(i) {
      l && l.d(i);
    }
  };
}
function hs(n) {
  let e, t, l, i = We(
    /*columns*/
    n[1]
  ), r = [];
  for (let o = 0; o < i.length; o += 1)
    r[o] = sl(ll(n, i, o));
  const s = (o) => E(r[o], 1, 1, () => {
    r[o] = null;
  });
  let a = (
    /*slotHasActions*/
    n[9] && ol(n)
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
        i = We(
          /*columns*/
          o[1]
        );
        let c;
        for (c = 0; c < i.length; c += 1) {
          const f = ll(o, i, c);
          r[c] ? (r[c].p(f, u), L(r[c], 1)) : (r[c] = sl(f), r[c].c(), L(r[c], 1), r[c].m(e.parentNode, e));
        }
        for (ge(), c = i.length; c < r.length; c += 1)
          s(c);
        pe();
      }
      /*slotHasActions*/
      o[9] ? a ? (a.p(o, u), u & /*slotHasActions*/
      512 && L(a, 1)) : (a = ol(o), a.c(), L(a, 1), a.m(t.parentNode, t)) : a && (ge(), E(a, 1, 1, () => {
        a = null;
      }), pe());
    },
    i(o) {
      if (!l) {
        for (let u = 0; u < i.length; u += 1)
          L(r[u]);
        L(a), l = !0;
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
function ul(n, e) {
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
      $$slots: { default: [hs] },
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
      t = Se(), J(l.$$.fragment), this.first = t;
    },
    m(s, a) {
      U(s, t, a), Y(l, s, a), i = !0;
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
      i || (L(l.$$.fragment, s), i = !0);
    },
    o(s) {
      E(l.$$.fragment, s), i = !1;
    },
    d(s) {
      s && O(t), K(l, s);
    }
  };
}
function ms(n) {
  let e = [], t = /* @__PURE__ */ new Map(), l, i, r = We(
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
    let o = tl(n, r, a), u = s(o);
    t.set(u, e[a] = ul(u, o));
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
      17315 && (r = We(
        /*items*/
        a[0]
      ), ge(), e = kl(e, o, s, 1, a, r, t, l.parentNode, Ri, ul, l, tl), pe());
    },
    i(a) {
      if (!i) {
        for (let o = 0; o < r.length; o += 1)
          L(e[o]);
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
function gs(n) {
  let e, t, l, i;
  return e = new Wa({
    props: {
      style: (
        /*headerBg*/
        n[6] ? `background-color:${/*headerBg*/
        n[6]}` : void 0
      ),
      $$slots: { default: [cs] },
      $$scope: { ctx: n }
    }
  }), l = new za({
    props: {
      $$slots: { default: [ms] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      J(e.$$.fragment), t = V(), J(l.$$.fragment);
    },
    m(r, s) {
      Y(e, r, s), U(r, t, s), Y(l, r, s), i = !0;
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
      i || (L(e.$$.fragment, r), L(l.$$.fragment, r), i = !0);
    },
    o(r) {
      E(e.$$.fragment, r), E(l.$$.fragment, r), i = !1;
    },
    d(r) {
      r && O(t), K(e, r), K(l, r);
    }
  };
}
function ps(n) {
  let e, t, l, i;
  const r = [ss, as, rs, is], s = [];
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
      }), pe(), t = s[e], t ? t.p(o, u) : (t = s[e] = r[e](o), t.c()), L(t, 1), t.m(l.parentNode, l));
    },
    i(o) {
      i || (L(t), i = !0);
    },
    o(o) {
      E(t), i = !1;
    },
    d(o) {
      o && O(l), s[e].d(o);
    }
  };
}
function _s(n, e, t) {
  let l, { $$slots: i = {}, $$scope: r } = e;
  const s = en(i);
  let { items: a = [] } = e, { columns: o = [] } = e, { loading: u = !1 } = e, { errorMsg: c = "" } = e, { emptyText: f = "Nothing to show." } = e, { getRowId: d = (m, D) => {
    var S, h;
    return (h = m && ((S = m.id) !== null && S !== void 0 ? S : m.key)) !== null && h !== void 0 ? h : D;
  } } = e, { headerBg: g = null } = e, { rowBg: _ = null } = e, k = null;
  const p = s;
  let { hasActions: I = !1 } = e;
  const v = (m, D) => t(8, k = d(m, D)), b = () => t(8, k = null);
  return n.$$set = (m) => {
    "items" in m && t(0, a = m.items), "columns" in m && t(1, o = m.columns), "loading" in m && t(2, u = m.loading), "errorMsg" in m && t(3, c = m.errorMsg), "emptyText" in m && t(4, f = m.emptyText), "getRowId" in m && t(5, d = m.getRowId), "headerBg" in m && t(6, g = m.headerBg), "rowBg" in m && t(7, _ = m.rowBg), "hasActions" in m && t(10, I = m.hasActions), "$$scope" in m && t(14, r = m.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty & /*hasActions*/
    1024 && t(9, l = I || !!(p != null && p.actions));
  }, [
    a,
    o,
    u,
    c,
    f,
    d,
    g,
    _,
    k,
    l,
    I,
    i,
    v,
    b,
    r
  ];
}
class bs extends fe {
  constructor(e) {
    super(), ce(this, e, _s, ps, se, {
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
const vs = Object.freeze({
  // This flag exists as a workaround for issue 454 (basically a browser bug) - seems like these rect values take time to update when in grid layout. Setting it to true can cause strange behaviour in the REPL for non-grid zones, see issue 470
  USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT: "USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT"
});
vs.USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT + "";
function Cs(n) {
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
function Is(n) {
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
function As(n) {
  let e, t, l, i, r, s, a, o;
  t = new Ia({
    props: {
      svgStyles: "fill: #002B37; width: 100%; height: 100%;"
    }
  });
  function u() {
    return (
      /*click_handler_1*/
      n[14](
        /*item*/
        n[17]
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
      n[15](
        /*item*/
        n[17]
      )
    );
  }
  return {
    c() {
      e = F("button"), J(t.$$.fragment), l = V(), i = F("button"), J(r.$$.fragment), T(e, "class", "icon svelte-1sia866"), T(i, "class", "icon svelte-1sia866");
    },
    m(f, d) {
      U(f, e, d), Y(t, e, null), U(f, l, d), U(f, i, d), Y(r, i, null), s = !0, a || (o = [
        z(e, "click", u),
        z(i, "click", c)
      ], a = !0);
    },
    p(f, d) {
      n = f;
    },
    i(f) {
      s || (L(t.$$.fragment, f), L(r.$$.fragment, f), s = !0);
    },
    o(f) {
      E(t.$$.fragment, f), E(r.$$.fragment, f), s = !1;
    },
    d(f) {
      f && (O(e), O(l), O(i)), K(t), K(r), a = !1, he(o);
    }
  };
}
function ys(n) {
  let e, t, l, i, r, s, a, o, u, c, f, d, g, _;
  r = new pn({
    props: {
      variant: "raised",
      style: "--mdc-theme-primary: #ffffff; --mdc-theme-on-primary: #004552",
      $$slots: { default: [Cs] },
      $$scope: { ctx: n }
    }
  }), r.$on(
    "click",
    /*click_handler*/
    n[11]
  );
  function k(I) {
    n[12](I);
  }
  let p = {
    variant: "outlined",
    label: "Search Processes"
  };
  return (
    /*searchQuery*/
    n[2] !== void 0 && (p.value = /*searchQuery*/
    n[2]), o = new da({ props: p }), ee.push(() => Ye(o, "value", k)), o.$on(
      "keyup",
      /*keyup_handler*/
      n[13]
    ), f = new pn({
      props: {
        variant: "raised",
        style: "--mdc-theme-primary: #004552; --mdc-theme-on-primary: #ffffff",
        $$slots: { default: [Is] },
        $$scope: { ctx: n }
      }
    }), f.$on(
      "click",
      /*handleAddNew*/
      n[8]
    ), g = new bs({
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
            As,
            ({ item: I }) => ({ 17: I }),
            ({ item: I }) => I ? 131072 : 0
          ]
        },
        $$scope: { ctx: n }
      }
    }), {
      c() {
        e = F("div"), t = F("div"), l = F("span"), l.textContent = `A process “Process Name C” has already been started for the ---.scd.
      Would you like to continue where you left off?`, i = V(), J(r.$$.fragment), s = V(), a = F("div"), J(o.$$.fragment), c = V(), J(f.$$.fragment), d = V(), J(g.$$.fragment), T(l, "class", "svelte-1sia866"), T(t, "class", "process-banner svelte-1sia866"), T(a, "class", "process-toolbar svelte-1sia866"), T(e, "class", "processes svelte-1sia866");
      },
      m(I, v) {
        U(I, e, v), P(e, t), P(t, l), P(t, i), Y(r, t, null), P(e, s), P(e, a), Y(o, a, null), P(a, c), Y(f, a, null), P(e, d), Y(g, e, null), _ = !0;
      },
      p(I, [v]) {
        const b = {};
        v & /*$$scope*/
        262144 && (b.$$scope = { dirty: v, ctx: I }), r.$set(b);
        const m = {};
        !u && v & /*searchQuery*/
        4 && (u = !0, m.value = /*searchQuery*/
        I[2], Xe(() => u = !1)), o.$set(m);
        const D = {};
        v & /*$$scope*/
        262144 && (D.$$scope = { dirty: v, ctx: I }), f.$set(D);
        const S = {};
        v & /*filteredRows*/
        8 && (S.items = /*filteredRows*/
        I[3]), v & /*loading*/
        1 && (S.loading = /*loading*/
        I[0]), v & /*errorMsg*/
        2 && (S.errorMsg = /*errorMsg*/
        I[1]), v & /*$$scope, item*/
        393216 && (S.$$scope = { dirty: v, ctx: I }), g.$set(S);
      },
      i(I) {
        _ || (L(r.$$.fragment, I), L(o.$$.fragment, I), L(f.$$.fragment, I), L(g.$$.fragment, I), _ = !0);
      },
      o(I) {
        E(r.$$.fragment, I), E(o.$$.fragment, I), E(f.$$.fragment, I), E(g.$$.fragment, I), _ = !1;
      },
      d(I) {
        I && O(e), K(r), K(o), K(f), K(g);
      }
    }
  );
}
function ks(n, e, t) {
  let l, i, { processes: r = [] } = e, { loading: s = !1 } = e, { errorMsg: a = "" } = e;
  const o = nn(), u = (m) => o("start", m), c = (m) => o("view", m);
  let f = "";
  const d = [
    { key: "displayName", header: "Name" },
    {
      key: "description",
      header: "Description"
    }
  ], g = () => {
    console.log("Searching for:", f);
  }, _ = () => {
    console.log("Add new process clicked");
  }, k = () => console.log("Continue Process");
  function p(m) {
    f = m, t(2, f);
  }
  const I = (m) => m.key === "Enter" && g(), v = (m) => c(m), b = (m) => u(m);
  return n.$$set = (m) => {
    "processes" in m && t(9, r = m.processes), "loading" in m && t(0, s = m.loading), "errorMsg" in m && t(1, a = m.errorMsg);
  }, n.$$.update = () => {
    n.$$.dirty & /*searchQuery*/
    4 && t(10, l = f.trim().toLowerCase()), n.$$.dirty & /*processes, searchLower*/
    1536 && t(3, i = (r ?? []).filter((m) => {
      var D;
      return ((D = m.name) !== null && D !== void 0 ? D : "").toLowerCase().includes(l);
    }).map((m) => Object.assign(Object.assign({}, m), { displayName: m.name || m.id })));
  }, [
    s,
    a,
    f,
    i,
    u,
    c,
    d,
    g,
    _,
    r,
    l,
    k,
    p,
    I,
    v,
    b
  ];
}
class ws extends fe {
  constructor(e) {
    super(), ce(this, e, ks, ys, se, { processes: 9, loading: 0, errorMsg: 1 });
  }
}
function cl(n, e, t) {
  const l = n.slice();
  return l[5] = e[t], l[7] = t, l;
}
function Ls(n) {
  let e, t, l, i, r, s, a = (
    /*proc*/
    n[0].id + ""
  ), o, u, c, f, d, g = (
    /*proc*/
    n[0].name + ""
  ), _, k, p, I, v, b = (
    /*proc*/
    n[0].version + ""
  ), m, D, S, h, w, G = (
    /*proc*/
    n[0].description + ""
  ), M, y, B, R, W, de, _e, Ce, q, C, N;
  function me(te, X) {
    return !/*proc*/
    te[0].plugins || /*proc*/
    te[0].plugins.length === 0 ? Es : Rs;
  }
  let be = me(n), Ie = be(n);
  return {
    c() {
      e = F("h1"), e.textContent = "Process Details", t = V(), l = F("div"), i = F("div"), r = F("span"), r.textContent = "ID", s = F("span"), o = ye(a), u = V(), c = F("div"), f = F("span"), f.textContent = "Name", d = F("span"), _ = ye(g), k = V(), p = F("div"), I = F("span"), I.textContent = "Version", v = F("span"), m = ye(b), D = V(), S = F("div"), h = F("span"), h.textContent = "Description", w = F("span"), M = ye(G), y = V(), B = F("h2"), B.textContent = "Plugins", R = V(), Ie.c(), W = V(), de = F("div"), _e = F("button"), _e.textContent = "Back", Ce = V(), q = F("button"), q.textContent = "START PROCESS", T(e, "class", "title svelte-1qn566t"), T(r, "class", "label svelte-1qn566t"), T(s, "class", "value svelte-1qn566t"), T(i, "class", "row svelte-1qn566t"), T(f, "class", "label svelte-1qn566t"), T(d, "class", "value svelte-1qn566t"), T(c, "class", "row svelte-1qn566t"), T(I, "class", "label svelte-1qn566t"), T(v, "class", "value svelte-1qn566t"), T(p, "class", "row svelte-1qn566t"), T(h, "class", "label svelte-1qn566t"), T(w, "class", "value svelte-1qn566t"), T(S, "class", "row svelte-1qn566t"), T(l, "class", "card svelte-1qn566t"), T(B, "class", "subtitle svelte-1qn566t"), T(_e, "class", "btn svelte-1qn566t"), T(q, "class", "btn primary svelte-1qn566t"), T(de, "class", "actions svelte-1qn566t");
    },
    m(te, X) {
      U(te, e, X), U(te, t, X), U(te, l, X), P(l, i), P(i, r), P(i, s), P(s, o), P(l, u), P(l, c), P(c, f), P(c, d), P(d, _), P(l, k), P(l, p), P(p, I), P(p, v), P(v, m), P(l, D), P(l, S), P(S, h), P(S, w), P(w, M), U(te, y, X), U(te, B, X), U(te, R, X), Ie.m(te, X), U(te, W, X), U(te, de, X), P(de, _e), P(de, Ce), P(de, q), C || (N = [
        z(
          _e,
          "click",
          /*click_handler_1*/
          n[3]
        ),
        z(
          q,
          "click",
          /*click_handler_2*/
          n[4]
        )
      ], C = !0);
    },
    p(te, X) {
      X & /*proc*/
      1 && a !== (a = /*proc*/
      te[0].id + "") && He(o, a), X & /*proc*/
      1 && g !== (g = /*proc*/
      te[0].name + "") && He(_, g), X & /*proc*/
      1 && b !== (b = /*proc*/
      te[0].version + "") && He(m, b), X & /*proc*/
      1 && G !== (G = /*proc*/
      te[0].description + "") && He(M, G), be === (be = me(te)) && Ie ? Ie.p(te, X) : (Ie.d(1), Ie = be(te), Ie && (Ie.c(), Ie.m(W.parentNode, W)));
    },
    d(te) {
      te && (O(e), O(t), O(l), O(y), O(B), O(R), O(W), O(de)), Ie.d(te), C = !1, he(N);
    }
  };
}
function Ss(n) {
  let e, t, l, i, r, s;
  return {
    c() {
      e = F("div"), t = F("p"), t.textContent = "No process selected.", l = V(), i = F("button"), i.textContent = "Back to list", T(t, "class", "svelte-1qn566t"), T(i, "class", "btn svelte-1qn566t"), T(e, "class", "empty-state svelte-1qn566t");
    },
    m(a, o) {
      U(a, e, o), P(e, t), P(e, l), P(e, i), r || (s = z(
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
function Rs(n) {
  let e, t = [], l = /* @__PURE__ */ new Map(), i = We(
    /*proc*/
    n[0].plugins
  );
  const r = (s) => (
    /*pl*/
    s[5].id
  );
  for (let s = 0; s < i.length; s += 1) {
    let a = cl(n, i, s), o = r(a);
    l.set(o, t[s] = hl(o, a));
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
      1 && (i = We(
        /*proc*/
        s[0].plugins
      ), t = kl(t, a, r, 1, s, i, l, e, Si, hl, null, cl));
    },
    d(s) {
      s && O(e);
      for (let a = 0; a < t.length; a += 1)
        t[a].d();
    }
  };
}
function Es(n) {
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
function fl(n) {
  let e, t = (
    /*pl*/
    n[5].type + ""
  ), l;
  return {
    c() {
      e = F("p"), l = ye(t), T(e, "class", "plugin-type svelte-1qn566t");
    },
    m(i, r) {
      U(i, e, r), P(e, l);
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
function dl(n) {
  let e, t = (
    /*pl*/
    n[5].description + ""
  ), l;
  return {
    c() {
      e = F("p"), l = ye(t), T(e, "class", "description svelte-1qn566t");
    },
    m(i, r) {
      U(i, e, r), P(e, l);
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
function hl(n, e) {
  let t, l, i, r = (
    /*i*/
    e[7] + 1 + ""
  ), s, a, o, u, c, f = (
    /*pl*/
    (e[5].name || /*pl*/
    e[5].id) + ""
  ), d, g, _, k, p = (
    /*pl*/
    e[5].type && fl(e)
  ), I = (
    /*pl*/
    e[5].description && dl(e)
  );
  return {
    key: n,
    first: null,
    c() {
      t = F("li"), l = F("div"), i = F("span"), s = ye(r), a = ye("."), o = V(), u = F("div"), c = F("p"), d = ye(f), g = V(), p && p.c(), _ = V(), I && I.c(), k = V(), T(i, "class", "order svelte-1qn566t"), T(c, "class", "plugin-name svelte-1qn566t"), T(u, "class", "svelte-1qn566t"), T(l, "class", "plugin-header svelte-1qn566t"), T(t, "class", "plugin-card svelte-1qn566t"), this.first = t;
    },
    m(v, b) {
      U(v, t, b), P(t, l), P(l, i), P(i, s), P(i, a), P(l, o), P(l, u), P(u, c), P(c, d), P(u, g), p && p.m(u, null), P(t, _), I && I.m(t, null), P(t, k);
    },
    p(v, b) {
      e = v, b & /*proc*/
      1 && r !== (r = /*i*/
      e[7] + 1 + "") && He(s, r), b & /*proc*/
      1 && f !== (f = /*pl*/
      (e[5].name || /*pl*/
      e[5].id) + "") && He(d, f), /*pl*/
      e[5].type ? p ? p.p(e, b) : (p = fl(e), p.c(), p.m(u, null)) : p && (p.d(1), p = null), /*pl*/
      e[5].description ? I ? I.p(e, b) : (I = dl(e), I.c(), I.m(t, k)) : I && (I.d(1), I = null);
    },
    d(v) {
      v && O(t), p && p.d(), I && I.d();
    }
  };
}
function Hs(n) {
  let e;
  function t(r, s) {
    return (
      /*proc*/
      r[0] ? Ls : Ss
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
function Ds(n, e, t) {
  let { proc: l = null } = e;
  const i = nn(), r = () => i("back"), s = () => i("back"), a = () => i("start", l);
  return n.$$set = (o) => {
    "proc" in o && t(0, l = o.proc);
  }, [l, i, r, s, a];
}
class Ms extends fe {
  constructor(e) {
    super(), ce(this, e, Ds, Hs, se, { proc: 0 });
  }
}
function ml(n, e, t) {
  const l = n.slice();
  return l[18] = e[t], l[20] = t, l;
}
function Ts(n) {
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
function Os(n) {
  let e, t, l, i;
  const r = [Ps, Bs, Us], s = [];
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
      }), pe(), t = s[e], t || (t = s[e] = r[e](o), t.c()), L(t, 1), t.m(l.parentNode, l));
    },
    i(o) {
      i || (L(t), i = !0);
    },
    o(o) {
      E(t), i = !1;
    },
    d(o) {
      o && O(l), s[e].d(o);
    }
  };
}
function Us(n) {
  let e, t;
  return e = new Sa({}), {
    c() {
      J(e.$$.fragment);
    },
    m(l, i) {
      Y(e, l, i), t = !0;
    },
    i(l) {
      t || (L(e.$$.fragment, l), t = !0);
    },
    o(l) {
      E(e.$$.fragment, l), t = !1;
    },
    d(l) {
      K(e, l);
    }
  };
}
function Bs(n) {
  let e, t;
  return e = new wa({}), {
    c() {
      J(e.$$.fragment);
    },
    m(l, i) {
      Y(e, l, i), t = !0;
    },
    i(l) {
      t || (L(e.$$.fragment, l), t = !0);
    },
    o(l) {
      E(e.$$.fragment, l), t = !1;
    },
    d(l) {
      K(e, l);
    }
  };
}
function Ps(n) {
  let e, t;
  return e = new ya({}), {
    c() {
      J(e.$$.fragment);
    },
    m(l, i) {
      Y(e, l, i), t = !0;
    },
    i(l) {
      t || (L(e.$$.fragment, l), t = !0);
    },
    o(l) {
      E(e.$$.fragment, l), t = !1;
    },
    d(l) {
      K(e, l);
    }
  };
}
function Fs(n) {
  let e, t, l, i, r, s, a;
  const o = [Os, Ts], u = [];
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
      let _ = l;
      l = c(n, g), l === _ ? u[l].p(n, g) : (ge(), E(u[_], 1, 1, () => {
        u[_] = null;
      }), pe(), i = u[l], i ? i.p(n, g) : (i = u[l] = o[l](n), i.c()), L(i, 1), i.m(e, null)), (!r || g & /*visited, plugins*/
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
      r || (L(i), r = !0);
    },
    o(d) {
      E(i), r = !1;
    },
    d(d) {
      d && O(e), u[l].d(), s = !1, a();
    }
  };
}
function gl(n) {
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
function pl(n) {
  let e, t, l, i, r = (
    /*plugin*/
    n[18].name + ""
  ), s, a, o, u;
  t = new Oa({
    props: {
      text: (
        /*tooltipText*/
        n[6][
          /*plugin*/
          n[18].id
        ]
      ),
      position: "bottom",
      $$slots: { default: [Fs] },
      $$scope: { ctx: n }
    }
  });
  let c = (
    /*i*/
    n[20] < /*plugins*/
    n[2].length - 1 && gl()
  );
  return {
    c() {
      e = F("div"), J(t.$$.fragment), l = V(), i = F("p"), s = ye(r), a = V(), c && c.c(), o = Se(), T(i, "class", "svelte-1xq5awa"), T(e, "class", "plugin-step svelte-1xq5awa");
    },
    m(f, d) {
      U(f, e, d), Y(t, e, null), P(e, l), P(e, i), P(i, s), U(f, a, d), c && c.m(f, d), U(f, o, d), u = !0;
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
      f[2].length - 1 ? c || (c = gl(), c.c(), c.m(o.parentNode, o)) : c && (c.d(1), c = null);
    },
    i(f) {
      u || (L(t.$$.fragment, f), u = !0);
    },
    o(f) {
      E(t.$$.fragment, f), u = !1;
    },
    d(f) {
      f && (O(e), O(a), O(o)), K(t), c && c.d(f);
    }
  };
}
function _l(n) {
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
      U(r, e, s), l || (i = Q(t = qs.call(null, e, {
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
function Ns(n) {
  let e, t, l, i, r, s, a, o, u, c, f, d, g, _, k, p, I, v = We(
    /*plugins*/
    n[2]
  ), b = [];
  for (let S = 0; S < v.length; S += 1)
    b[S] = pl(ml(n, v, S));
  const m = (S) => E(b[S], 1, 1, () => {
    b[S] = null;
  });
  let D = (
    /*tagName*/
    n[4] && _l(n)
  );
  return {
    c() {
      e = F("div"), t = F("div"), l = F("button"), l.textContent = "exit", i = V(), r = F("p"), r.textContent = "Plugin Flow", s = V(), a = F("div");
      for (let S = 0; S < b.length; S += 1)
        b[S].c();
      o = V(), u = F("div"), c = F("button"), c.textContent = "Back", f = V(), d = F("button"), d.textContent = "Next", g = V(), D && D.c(), _ = Se(), T(l, "class", "back-button svelte-1xq5awa"), T(r, "class", "plugin-flow-title svelte-1xq5awa"), Dt(t, "display", "flex"), Dt(t, "align-items", "center"), Dt(t, "gap", "0.5rem"), T(t, "class", "svelte-1xq5awa"), T(a, "class", "plugin-steps svelte-1xq5awa"), T(c, "class", "back-button svelte-1xq5awa"), T(d, "class", "next-button svelte-1xq5awa"), T(u, "class", "stepper-navigation svelte-1xq5awa"), T(e, "class", "stepper svelte-1xq5awa");
    },
    m(S, h) {
      U(S, e, h), P(e, t), P(t, l), P(t, i), P(t, r), P(e, s), P(e, a);
      for (let w = 0; w < b.length; w += 1)
        b[w] && b[w].m(a, null);
      P(e, o), P(e, u), P(u, c), P(u, f), P(u, d), U(S, g, h), D && D.m(S, h), U(S, _, h), k = !0, p || (I = [
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
    p(S, [h]) {
      if (h & /*plugins, tooltipText, visited, tagName, loadPlugin, pluginStatus*/
      380) {
        v = We(
          /*plugins*/
          S[2]
        );
        let w;
        for (w = 0; w < v.length; w += 1) {
          const G = ml(S, v, w);
          b[w] ? (b[w].p(G, h), L(b[w], 1)) : (b[w] = pl(G), b[w].c(), L(b[w], 1), b[w].m(a, null));
        }
        for (ge(), w = v.length; w < b.length; w += 1)
          m(w);
        pe();
      }
      /*tagName*/
      S[4] ? D ? D.p(S, h) : (D = _l(S), D.c(), D.m(_.parentNode, _)) : D && (D.d(1), D = null);
    },
    i(S) {
      if (!k) {
        for (let h = 0; h < v.length; h += 1)
          L(b[h]);
        k = !0;
      }
    },
    o(S) {
      b = b.filter(Boolean);
      for (let h = 0; h < b.length; h += 1)
        E(b[h]);
      k = !1;
    },
    d(S) {
      S && (O(e), O(g), O(_)), tn(b, S), D && D.d(S), p = !1, he(I);
    }
  };
}
function Gs() {
  var n, e;
  const t = document.querySelector("open-scd");
  return (e = (n = t == null ? void 0 : t.shadowRoot) === null || n === void 0 ? void 0 : n.querySelector("compas-layout")) !== null && e !== void 0 ? e : null;
}
function qs(n, e) {
  return Object.assign(n, e), { update: (t) => Object.assign(n, t) };
}
function js(n, e, t) {
  let l, { doc: i } = e, { editCount: r = -1 } = e, { host: s } = e, { plugins: a = [] } = e, o = null, u = [];
  const c = ["check", "warning", "error"];
  let f = {};
  nn();
  function d(b) {
    var m;
    (m = Gs()) === null || m === void 0 || m.dispatchEvent(new CustomEvent(
      "toggle-editor-tabs",
      {
        detail: { visible: b },
        bubbles: !0,
        composed: !0
      }
    ));
  }
  function g(b) {
    return ln(this, void 0, void 0, function* () {
      const m = yield import(b.src);
      if (customElements.get(b.id) || customElements.define(b.id, m.default), t(4, o = b.id), !u.includes(b.id)) {
        t(5, u = [...u, b.id]);
        const D = a.findIndex((S) => S.id === b.id);
        t(3, f = Object.assign(Object.assign({}, f), {
          [b.id]: c[D % c.length]
        }));
      }
    });
  }
  function _() {
    p(1);
  }
  function k() {
    p(-1);
  }
  function p(b) {
    const m = a.findIndex((D) => D.id === o);
    g(a[(m + b + a.length) % a.length]);
  }
  Ne(() => {
    a.length && g(a[0]), d(!1);
  });
  const I = () => d(!0), v = (b) => g(b);
  return n.$$set = (b) => {
    "doc" in b && t(0, i = b.doc), "editCount" in b && t(1, r = b.editCount), "host" in b && t(11, s = b.host), "plugins" in b && t(2, a = b.plugins);
  }, n.$$.update = () => {
    n.$$.dirty & /*plugins, pluginStatus*/
    12 && t(6, l = a.reduce(
      (b, m) => {
        const D = f[m.id];
        return b[m.id] = D === "error" ? `Resolve errors in ${m.name}` : D === "warning" ? `Check warnings for ${m.name}` : `Load the ${m.name} editor`, b;
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
    _,
    k,
    s,
    I,
    v
  ];
}
class Ws extends fe {
  constructor(e) {
    super(), ce(this, e, js, Ns, se, {
      doc: 0,
      editCount: 1,
      host: 11,
      plugins: 2
    });
  }
}
function Zs(n) {
  let e, t;
  return e = new ws({
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
      J(e.$$.fragment);
    },
    m(l, i) {
      Y(e, l, i), t = !0;
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
      t || (L(e.$$.fragment, l), t = !0);
    },
    o(l) {
      E(e.$$.fragment, l), t = !1;
    },
    d(l) {
      K(e, l);
    }
  };
}
function Vs(n) {
  let e, t;
  return e = new Ms({ props: { proc: (
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
      J(e.$$.fragment);
    },
    m(l, i) {
      Y(e, l, i), t = !0;
    },
    p(l, i) {
      const r = {};
      i & /*selected*/
      16 && (r.proc = /*selected*/
      l[4]), e.$set(r);
    },
    i(l) {
      t || (L(e.$$.fragment, l), t = !0);
    },
    o(l) {
      E(e.$$.fragment, l), t = !1;
    },
    d(l) {
      K(e, l);
    }
  };
}
function zs(n) {
  let e, t;
  return e = new Ws({
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
      J(e.$$.fragment);
    },
    m(l, i) {
      Y(e, l, i), t = !0;
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
      t || (L(e.$$.fragment, l), t = !0);
    },
    o(l) {
      E(e.$$.fragment, l), t = !1;
    },
    d(l) {
      K(e, l);
    }
  };
}
function Xs(n) {
  let e, t, l, i;
  const r = [zs, Vs, Zs], s = [];
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
      }), pe(), t = s[e], t ? t.p(o, u) : (t = s[e] = r[e](o), t.c()), L(t, 1), t.m(l.parentNode, l));
    },
    i(o) {
      i || (L(t), i = !0);
    },
    o(o) {
      E(t), i = !1;
    },
    d(o) {
      o && O(l), s[e].d(o);
    }
  };
}
function Ys(n, e, t) {
  let { doc: l } = e, { editCount: i = -1 } = e, { host: r } = e, s = [], a = null, o = null, u = !0, c = "";
  const f = new URL("data:application/xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHByb2Nlc3Nlcz4KICA8cHJvY2Vzcz4KICAgIDxpZD5zdGFuZGFyZC1wcm9jZXNzLTE8L2lkPgogICAgPHZlcnNpb24+MC4wLjE8L3ZlcnNpb24+CiAgICA8bmFtZT5TdGFuZGFyZCBQcm9jZXNzIDE8L25hbWU+CiAgICA8ZGVzY3JpcHRpb24+CiAgICAgIFRoaXMgaXMgYSBzdGFuZGFyZGl6ZWQgcHJvY2VzcyB1c2VkIGZvciB0ZXN0aW5nIHB1cnBvc2VzIG9ubHkKICAgIDwvZGVzY3JpcHRpb24+CgogICAgPHBsdWdpbnMtc2VxdWVuY2U+CiAgICAgIDxwbHVnaW4+CiAgICAgICAgPGlkPmVuZ2luZWVyaW5nLXdpemFyZDwvaWQ+CiAgICAgICAgPG5hbWU+U3Vic3RhdGlvbjwvbmFtZT4KICAgICAgICA8c3JjPgogICAgICAgICAgaHR0cHM6Ly9waGlsaXBwaWxpZXZza2liZWFyaW5ncG9pbnRjb20uZ2l0aHViLmlvL29zY2Qtb2ZmaWNpYWwtcGx1Z2lucy10ZXN0L3BsdWdpbnMvZWRpdG9ycy9zdWJzdGF0aW9uLmpzCiAgICAgICAgPC9zcmM+CiAgICAgIDwvcGx1Z2luPgoKICAgICAgPHBsdWdpbj4KICAgICAgICA8aWQ+c3Vic3RhdGlvbi1leHBsb3JlcjwvaWQ+CiAgICAgICAgPG5hbWU+SUVEPC9uYW1lPgogICAgICAgIDxzcmM+CiAgICAgICAgICBodHRwczovL3BoaWxpcHBpbGlldnNraWJlYXJpbmdwb2ludGNvbS5naXRodWIuaW8vb3NjZC1vZmZpY2lhbC1wbHVnaW5zLXRlc3QvcGx1Z2lucy9lZGl0b3JzL2llZC5qcwogICAgICAgIDwvc3JjPgogICAgICA8L3BsdWdpbj4KCiAgICAgIDxwbHVnaW4+CiAgICAgICAgPGlkPmNvbW11bmljYXRpb24tZWRpdG9yPC9pZD4KICAgICAgICA8bmFtZT5Db21tdW5pY2F0aW9uIEV4cGxvcmVyPC9uYW1lPgogICAgICAgIDxzcmM+CiAgICAgICAgICBodHRwczovL3BoaWxpcHBpbGlldnNraWJlYXJpbmdwb2ludGNvbS5naXRodWIuaW8vb3NjZC1vZmZpY2lhbC1wbHVnaW5zLXRlc3QvcGx1Z2lucy9lZGl0b3JzL2NvbW11bmljYXRpb24uanMKICAgICAgICA8L3NyYz4KICAgICAgPC9wbHVnaW4+CiAgICA8L3BsdWdpbnMtc2VxdWVuY2U+CiAgPC9wcm9jZXNzPgoKICA8cHJvY2Vzcz4KICAgIDxpZD5zdGFuZGFyZC1wcm9jZXNzLTI8L2lkPgogICAgPHZlcnNpb24+MC4wLjE8L3ZlcnNpb24+CiAgICA8bmFtZT5TdGFuZGFyZCBQcm9jZXNzIDI8L25hbWU+CiAgICA8ZGVzY3JpcHRpb24+CiAgICAgIFRoaXMgaXMgYSBzdGFuZGFyZGl6ZWQgcHJvY2VzcyB1c2VkIGZvciB0ZXN0aW5nIHB1cnBvc2VzIG9ubHkKICAgIDwvZGVzY3JpcHRpb24+CgogICAgPHBsdWdpbnMtc2VxdWVuY2U+CiAgICAgIDxwbHVnaW4+CiAgICAgICAgPGlkPmVuZ2luZWVyaW5nLXdpemFyZDwvaWQ+CiAgICAgICAgPG5hbWU+U3Vic3RhdGlvbjwvbmFtZT4KICAgICAgICA8c3JjPgogICAgICAgICAgaHR0cHM6Ly9waGlsaXBwaWxpZXZza2liZWFyaW5ncG9pbnRjb20uZ2l0aHViLmlvL29zY2Qtb2ZmaWNpYWwtcGx1Z2lucy10ZXN0L3BsdWdpbnMvZWRpdG9ycy9zdWJzdGF0aW9uLmpzCiAgICAgICAgPC9zcmM+CiAgICAgIDwvcGx1Z2luPgoKICAgICAgPHBsdWdpbj4KICAgICAgICA8aWQ+eHl6LWVkaXRvcjwvaWQ+CiAgICAgICAgPG5hbWU+WFlaPC9uYW1lPgogICAgICAgIDxzcmM+CiAgICAgICAgICBodHRwczovL3BoaWxpcHBpbGlldnNraWJlYXJpbmdwb2ludGNvbS5naXRodWIuaW8vb3NjZC1vZmZpY2lhbC1wbHVnaW5zLXRlc3QvcGx1Z2lucy9lZGl0b3JzL3h5ei5qcwogICAgICAgIDwvc3JjPgogICAgICA8L3BsdWdpbj4KCiAgICAgIDxwbHVnaW4+CiAgICAgICAgPGlkPm5ldHdvcmstZXhwbG9yZXI8L2lkPgogICAgICAgIDxuYW1lPk5ldHdvcmsgRXhwbG9yZXI8L25hbWU+CiAgICAgICAgPHNyYz4KICAgICAgICAgIGh0dHBzOi8vcGhpbGlwcGlsaWV2c2tpYmVhcmluZ3BvaW50Y29tLmdpdGh1Yi5pby9vc2NkLW9mZmljaWFsLXBsdWdpbnMtdGVzdC9wbHVnaW5zL2VkaXRvcnMvbmV0d29yay5qcwogICAgICAgIDwvc3JjPgogICAgICA8L3BsdWdpbj4KICAgIDwvcGx1Z2lucy1zZXF1ZW5jZT4KICA8L3Byb2Nlc3M+CgogIDxwcm9jZXNzPgogICAgPGlkPnN0YW5kYXJkLXByb2Nlc3MtMzwvaWQ+CiAgICA8dmVyc2lvbj4wLjAuMTwvdmVyc2lvbj4KICAgIDxuYW1lPlN0YW5kYXJkIFByb2Nlc3MgMzwvbmFtZT4KICAgIDxkZXNjcmlwdGlvbj4KICAgICAgVGhpcyBpcyBhIHN0YW5kYXJkaXplZCBwcm9jZXNzIHVzZWQgZm9yIHRlc3RpbmcgcHVycG9zZXMgb25seQogICAgPC9kZXNjcmlwdGlvbj4KCiAgICA8cGx1Z2lucy1zZXF1ZW5jZT4KICAgICAgPHBsdWdpbj4KICAgICAgICA8aWQ+ZW5naW5lZXJpbmctd2l6YXJkPC9pZD4KICAgICAgICA8bmFtZT5TdWJzdGF0aW9uPC9uYW1lPgogICAgICAgIDxzcmM+CiAgICAgICAgICBodHRwczovL3BoaWxpcHBpbGlldnNraWJlYXJpbmdwb2ludGNvbS5naXRodWIuaW8vb3NjZC1vZmZpY2lhbC1wbHVnaW5zLXRlc3QvcGx1Z2lucy9lZGl0b3JzL3N1YnN0YXRpb24uanMKICAgICAgICA8L3NyYz4KICAgICAgPC9wbHVnaW4+CgogICAgICA8cGx1Z2luPgogICAgICAgIDxpZD5zaXRpcGUtZWRpdG9yPC9pZD4KICAgICAgICA8bmFtZT5TaXRpcGU8L25hbWU+CiAgICAgICAgPHNyYz4KICAgICAgICAgIGh0dHBzOi8vcGhpbGlwcGlsaWV2c2tpYmVhcmluZ3BvaW50Y29tLmdpdGh1Yi5pby9vc2NkLW9mZmljaWFsLXBsdWdpbnMtdGVzdC9wbHVnaW5zL2VkaXRvcnMvc2l0aXBlLmpzCiAgICAgICAgPC9zcmM+CiAgICAgIDwvcGx1Z2luPgoKICAgICAgPHBsdWdpbj4KICAgICAgICA8aWQ+c3Vic3RhdGlvbi1leHBsb3JlcjwvaWQ+CiAgICAgICAgPG5hbWU+SUVEPC9uYW1lPgogICAgICAgIDxzcmM+CiAgICAgICAgICBodHRwczovL3BoaWxpcHBpbGlldnNraWJlYXJpbmdwb2ludGNvbS5naXRodWIuaW8vb3NjZC1vZmZpY2lhbC1wbHVnaW5zLXRlc3QvcGx1Z2lucy9lZGl0b3JzL2llZC5qcwogICAgICAgIDwvc3JjPgogICAgICA8L3BsdWdpbj4KICAgIDwvcGx1Z2lucy1zZXF1ZW5jZT4KICA8L3Byb2Nlc3M+CjwvcHJvY2Vzc2VzPgo=", import.meta.url).href, d = (b) => {
    var m, D;
    return (D = (m = b == null ? void 0 : b.textContent) === null || m === void 0 ? void 0 : m.trim()) !== null && D !== void 0 ? D : "";
  }, g = (b) => Array.from(b.getElementsByTagName("process")).map((m) => {
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
  function _() {
    return ln(this, void 0, void 0, function* () {
      t(6, u = !0), t(7, c = "");
      try {
        const b = yield fetch(f, { cache: "no-cache" });
        if (!b.ok)
          throw new Error(`HTTP ${b.status}`);
        const m = new DOMParser().parseFromString(yield b.text(), "application/xml");
        if (m.querySelector("parsererror"))
          throw new Error("Invalid XML file format.");
        t(3, s = g(m));
      } catch (b) {
        t(3, s = []), t(7, c = b.message || "Failed to load processes.");
      } finally {
        t(6, u = !1);
      }
    });
  }
  Ne(_);
  function k(b) {
    t(5, o = b), t(4, a = null);
  }
  function p(b) {
    t(4, a = b.detail);
  }
  function I(b) {
    k(b.detail);
  }
  function v() {
    t(4, a = null);
  }
  return n.$$set = (b) => {
    "doc" in b && t(0, l = b.doc), "editCount" in b && t(1, i = b.editCount), "host" in b && t(2, r = b.host);
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
    I,
    v
  ];
}
class Ks extends fe {
  constructor(e) {
    super(), ce(this, e, Ys, Xs, se, { doc: 0, editCount: 1, host: 2 });
  }
}
function bl(n) {
  let e, t;
  return e = new Ks({
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
      J(e.$$.fragment);
    },
    m(l, i) {
      Y(e, l, i), t = !0;
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
      t || (L(e.$$.fragment, l), t = !0);
    },
    o(l) {
      E(e.$$.fragment, l), t = !1;
    },
    d(l) {
      K(e, l);
    }
  };
}
function Js(n) {
  let e, t, l, i, r, s = (
    /*doc*/
    (n[0] || /*dev*/
    n[1]) && bl(n)
  );
  return {
    c() {
      s && s.c(), e = V(), t = F("input"), l = V(), i = F("input"), T(t, "type", "hidden"), T(t, "name", "package-name"), t.value = wl, T(i, "type", "hidden"), T(i, "name", "package-version"), i.value = Ll;
    },
    m(a, o) {
      s && s.m(a, o), U(a, e, o), U(a, t, o), U(a, l, o), U(a, i, o), r = !0;
    },
    p(a, [o]) {
      /*doc*/
      a[0] || /*dev*/
      a[1] ? s ? (s.p(a, o), o & /*doc, dev*/
      3 && L(s, 1)) : (s = bl(a), s.c(), L(s, 1), s.m(e.parentNode, e)) : s && (ge(), E(s, 1, 1, () => {
        s = null;
      }), pe());
    },
    i(a) {
      r || (L(s), r = !0);
    },
    o(a) {
      E(s), r = !1;
    },
    d(a) {
      a && (O(e), O(t), O(l), O(i)), s && s.d(a);
    }
  };
}
function Qs(n, e, t) {
  let { doc: l } = e, { dev: i = !1 } = e, { editCount: r = 0 } = e;
  return console.log("editcount", r), n.$$set = (s) => {
    "doc" in s && t(0, l = s.doc), "dev" in s && t(1, i = s.dev), "editCount" in s && t(2, r = s.editCount);
  }, [l, i, r];
}
class xs extends fe {
  constructor(e) {
    super(), ce(this, e, Qs, Js, se, { doc: 0, dev: 1, editCount: 2 });
  }
}
class no extends HTMLElement {
  connectedCallback() {
    var t;
    this.attachShadow({ mode: "open" }), this.plugin = new xs({
      target: this.shadowRoot,
      props: {
        doc: this._doc,
        editCount: -1,
        host: this
      }
    });
    const e = $s();
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
function $s() {
  const n = `${wl}-v${Ll}-style`, e = eo(), t = document.createElement("link");
  return t.rel = "stylesheet", t.type = "text/css", t.href = e, t.id = n, t;
}
function eo() {
  const n = new URL(import.meta.url), e = n.origin, t = n.pathname.split("/").slice(0, -1).filter(Boolean).join("/");
  return [e, t, "style.css"].filter(Boolean).join("/");
}
export {
  no as default
};
