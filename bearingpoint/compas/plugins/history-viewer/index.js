var qa = Object.defineProperty;
var Ka = (n, e, t) => e in n ? qa(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var qi = (n, e, t) => (Ka(n, typeof e != "symbol" ? e + "" : e, t), t), Wa = (n, e, t) => {
  if (!e.has(n))
    throw TypeError("Cannot " + t);
};
var Tn = (n, e, t) => (Wa(n, e, "read from private field"), t ? t.call(n) : e.get(n)), kr = (n, e, t) => {
  if (e.has(n))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(n) : e.set(n, t);
};
function $e() {
}
function Y(n, e) {
  for (const t in e)
    n[t] = e[t];
  return (
    /** @type {T & S} */
    n
  );
}
function zs(n) {
  return n();
}
function Dr() {
  return /* @__PURE__ */ Object.create(null);
}
function Ze(n) {
  n.forEach(zs);
}
function me(n) {
  return typeof n == "function";
}
function Ee(n, e) {
  return n != n ? e == e : n !== e || n && typeof n == "object" || typeof n == "function";
}
function za(n) {
  return Object.keys(n).length === 0;
}
function Ys(n, ...e) {
  if (n == null) {
    for (const i of e)
      i(void 0);
    return $e;
  }
  const t = n.subscribe(...e);
  return t.unsubscribe ? () => t.unsubscribe() : t;
}
function Ya(n) {
  let e;
  return Ys(n, (t) => e = t)(), e;
}
function it(n, e, t) {
  n.$$.on_destroy.push(Ys(e, t));
}
function Ie(n, e, t, i) {
  if (n) {
    const r = Xs(n, e, t, i);
    return n[0](r);
  }
}
function Xs(n, e, t, i) {
  return n[1] && i ? Y(t.ctx.slice(), n[1](i(e))) : t.ctx;
}
function ve(n, e, t, i) {
  if (n[2] && i) {
    const r = n[2](i(t));
    if (e.dirty === void 0)
      return r;
    if (typeof r == "object") {
      const l = [], a = Math.max(e.dirty.length, r.length);
      for (let s = 0; s < a; s += 1)
        l[s] = e.dirty[s] | r[s];
      return l;
    }
    return e.dirty | r;
  }
  return e.dirty;
}
function Ce(n, e, t, i, r, l) {
  if (r) {
    const a = Xs(e, t, i, l);
    n.p(a, r);
  }
}
function Ae(n) {
  if (n.ctx.length > 32) {
    const e = [], t = n.ctx.length / 32;
    for (let i = 0; i < t; i++)
      e[i] = -1;
    return e;
  }
  return -1;
}
function tt(n) {
  const e = {};
  for (const t in n)
    t[0] !== "$" && (e[t] = n[t]);
  return e;
}
function pe(n, e) {
  const t = {};
  e = new Set(e);
  for (const i in n)
    !e.has(i) && i[0] !== "$" && (t[i] = n[i]);
  return t;
}
function mr(n) {
  const e = {};
  for (const t in n)
    e[t] = !0;
  return e;
}
function Rt(n, e, t) {
  return n.set(t), e;
}
function fe(n) {
  return n && me(n.destroy) ? n.destroy : $e;
}
const Xa = ["", !0, 1, "true", "contenteditable"], Zs = typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : (
  // @ts-ignore Node typings have this
  global
);
function J(n, e) {
  n.appendChild(e);
}
function V(n, e, t) {
  n.insertBefore(e, t || null);
}
function B(n) {
  n.parentNode && n.parentNode.removeChild(n);
}
function pr(n, e) {
  for (let t = 0; t < n.length; t += 1)
    n[t] && n[t].d(e);
}
function ne(n) {
  return document.createElement(n);
}
function st(n) {
  return document.createElementNS("http://www.w3.org/2000/svg", n);
}
function at(n) {
  return document.createTextNode(n);
}
function ae() {
  return at(" ");
}
function Xe() {
  return at("");
}
function oe(n, e, t, i) {
  return n.addEventListener(e, t, i), () => n.removeEventListener(e, t, i);
}
function U(n, e, t) {
  t == null ? n.removeAttribute(e) : n.getAttribute(e) !== t && n.setAttribute(e, t);
}
const Za = ["width", "height"];
function ce(n, e) {
  const t = Object.getOwnPropertyDescriptors(n.__proto__);
  for (const i in e)
    e[i] == null ? n.removeAttribute(i) : i === "style" ? n.style.cssText = e[i] : i === "__value" ? n.value = n[i] = e[i] : t[i] && t[i].set && Za.indexOf(i) === -1 ? n[i] = e[i] : U(n, i, e[i]);
}
function Mr(n, e) {
  for (const t in e)
    U(n, t, e[t]);
}
function Qa(n, e) {
  Object.keys(e).forEach((t) => {
    Ja(n, t, e[t]);
  });
}
function Ja(n, e, t) {
  const i = e.toLowerCase();
  i in n ? n[i] = typeof n[i] == "boolean" && t === "" ? !0 : t : e in n ? n[e] = typeof n[e] == "boolean" && t === "" ? !0 : t : U(n, e, t);
}
function di(n) {
  return /-/.test(n) ? Qa : ce;
}
function Qs(n) {
  return n === "" ? null : +n;
}
function xa(n) {
  return Array.from(n.childNodes);
}
function At(n, e) {
  e = "" + e, n.data !== e && (n.data = /** @type {string} */
  e);
}
function $a(n, e) {
  e = "" + e, n.wholeText !== e && (n.data = /** @type {string} */
  e);
}
function eo(n, e, t) {
  ~Xa.indexOf(t) ? $a(n, e) : At(n, e);
}
function Zt(n, e) {
  n.value = e ?? "";
}
function lr(n, e, t, i) {
  t == null ? n.style.removeProperty(e) : n.style.setProperty(e, t, "");
}
function Dt(n, e) {
  return new n(e);
}
let xn;
function Jn(n) {
  xn = n;
}
function Je() {
  if (!xn)
    throw new Error("Function called outside component initialization");
  return xn;
}
function ot(n) {
  Je().$$.on_mount.push(n);
}
function zt(n) {
  Je().$$.on_destroy.push(n);
}
function Ve(n, e) {
  return Je().$$.context.set(n, e), e;
}
function Ke(n) {
  return Je().$$.context.get(n);
}
function Hn(n, e) {
  const t = n.$$.callbacks[e.type];
  t && t.slice().forEach((i) => i.call(this, e));
}
const Dn = [], se = [];
let Un = [];
const sr = [], Js = /* @__PURE__ */ Promise.resolve();
let ar = !1;
function xs() {
  ar || (ar = !0, Js.then($s));
}
function gr() {
  return xs(), Js;
}
function or(n) {
  Un.push(n);
}
function mt(n) {
  sr.push(n);
}
const Ki = /* @__PURE__ */ new Set();
let Ln = 0;
function $s() {
  if (Ln !== 0)
    return;
  const n = xn;
  do {
    try {
      for (; Ln < Dn.length; ) {
        const e = Dn[Ln];
        Ln++, Jn(e), to(e.$$);
      }
    } catch (e) {
      throw Dn.length = 0, Ln = 0, e;
    }
    for (Jn(null), Dn.length = 0, Ln = 0; se.length; )
      se.pop()();
    for (let e = 0; e < Un.length; e += 1) {
      const t = Un[e];
      Ki.has(t) || (Ki.add(t), t());
    }
    Un.length = 0;
  } while (Dn.length);
  for (; sr.length; )
    sr.pop()();
  ar = !1, Ki.clear(), Jn(n);
}
function to(n) {
  if (n.fragment !== null) {
    n.update(), Ze(n.before_update);
    const e = n.dirty;
    n.dirty = [-1], n.fragment && n.fragment.p(n.ctx, e), n.after_update.forEach(or);
  }
}
function no(n) {
  const e = [], t = [];
  Un.forEach((i) => n.indexOf(i) === -1 ? e.push(i) : t.push(i)), t.forEach((i) => i()), Un = e;
}
const ci = /* @__PURE__ */ new Set();
let bn;
function Pe() {
  bn = {
    r: 0,
    c: [],
    p: bn
    // parent group
  };
}
function He() {
  bn.r || Ze(bn.c), bn = bn.p;
}
function E(n, e) {
  n && n.i && (ci.delete(n), n.i(e));
}
function S(n, e, t, i) {
  if (n && n.o) {
    if (ci.has(n))
      return;
    ci.add(n), bn.c.push(() => {
      ci.delete(n), i && (t && n.d(1), i());
    }), n.o(e);
  } else
    i && i();
}
function jt(n) {
  return (n == null ? void 0 : n.length) !== void 0 ? n : Array.from(n);
}
function _r(n, e) {
  S(n, 1, 1, () => {
    e.delete(n.key);
  });
}
function br(n, e, t, i, r, l, a, s, o, u, c, d) {
  let f = n.length, h = l.length, p = f;
  const b = {};
  for (; p--; )
    b[n[p].key] = p;
  const m = [], C = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ new Map(), T = [];
  for (p = h; p--; ) {
    const _ = d(r, l, p), A = t(_);
    let w = a.get(A);
    w ? T.push(() => w.p(_, e)) : (w = u(A, _), w.c()), C.set(A, m[p] = w), A in b && v.set(A, Math.abs(p - b[A]));
  }
  const y = /* @__PURE__ */ new Set(), k = /* @__PURE__ */ new Set();
  function R(_) {
    E(_, 1), _.m(s, c), a.set(_.key, _), c = _.first, h--;
  }
  for (; f && h; ) {
    const _ = m[h - 1], A = n[f - 1], w = _.key, I = A.key;
    _ === A ? (c = _.first, f--, h--) : C.has(I) ? !a.has(w) || y.has(w) ? R(_) : k.has(I) ? f-- : v.get(w) > v.get(I) ? (k.add(w), R(_)) : (y.add(I), f--) : (o(A, a), f--);
  }
  for (; f--; ) {
    const _ = n[f];
    C.has(_.key) || o(_, a);
  }
  for (; h; )
    R(m[h - 1]);
  return Ze(T), m;
}
function he(n, e) {
  const t = {}, i = {}, r = { $$scope: 1 };
  let l = n.length;
  for (; l--; ) {
    const a = n[l], s = e[l];
    if (s) {
      for (const o in a)
        o in s || (i[o] = 1);
      for (const o in s)
        r[o] || (t[o] = s[o], r[o] = 1);
      n[l] = s;
    } else
      for (const o in a)
        r[o] = 1;
  }
  for (const a in i)
    a in t || (t[a] = void 0);
  return t;
}
function Me(n) {
  return typeof n == "object" && n !== null ? n : {};
}
function pt(n, e, t) {
  const i = n.$$.props[e];
  i !== void 0 && (n.$$.bound[i] = t, t(n.$$.ctx[i]));
}
function ie(n) {
  n && n.c();
}
function ee(n, e, t) {
  const { fragment: i, after_update: r } = n.$$;
  i && i.m(e, t), or(() => {
    const l = n.$$.on_mount.map(zs).filter(me);
    n.$$.on_destroy ? n.$$.on_destroy.push(...l) : Ze(l), n.$$.on_mount = [];
  }), r.forEach(or);
}
function te(n, e) {
  const t = n.$$;
  t.fragment !== null && (no(t.after_update), Ze(t.on_destroy), t.fragment && t.fragment.d(e), t.on_destroy = t.fragment = null, t.ctx = []);
}
function io(n, e) {
  n.$$.dirty[0] === -1 && (Dn.push(n), xs(), n.$$.dirty.fill(0)), n.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function Oe(n, e, t, i, r, l, a = null, s = [-1]) {
  const o = xn;
  Jn(n);
  const u = n.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: l,
    update: $e,
    not_equal: r,
    bound: Dr(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (o ? o.$$.context : [])),
    // everything else
    callbacks: Dr(),
    dirty: s,
    skip_bound: !1,
    root: e.target || o.$$.root
  };
  a && a(u.root);
  let c = !1;
  if (u.ctx = t ? t(n, e.props || {}, (d, f, ...h) => {
    const p = h.length ? h[0] : f;
    return u.ctx && r(u.ctx[d], u.ctx[d] = p) && (!u.skip_bound && u.bound[d] && u.bound[d](p), c && io(n, d)), f;
  }) : [], u.update(), c = !0, Ze(u.before_update), u.fragment = i ? i(u.ctx) : !1, e.target) {
    if (e.hydrate) {
      const d = xa(e.target);
      u.fragment && u.fragment.l(d), d.forEach(B);
    } else
      u.fragment && u.fragment.c();
    e.intro && E(n.$$.fragment), ee(n, e.target, e.anchor), $s();
  }
  Jn(o);
}
class Re {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    qi(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    qi(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    te(this, 1), this.$destroy = $e;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, t) {
    if (!me(t))
      return $e;
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
    this.$$set && !za(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const ro = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(ro);
const ea = "version-editor", ta = "0.0.1";
function lo(n, e = {}) {
  const t = e.priority || "polite", i = e.ownerDocument || document, r = i.querySelectorAll("[data-smui-dom-announce]");
  r.length && r.forEach((a) => {
    var s;
    (s = a.parentNode) === null || s === void 0 || s.removeChild(a);
  });
  const l = i.createElement("div");
  l.style.position = "absolute", l.style.top = "-9999px", l.style.left = "-9999px", l.style.height = "1px", l.style.overflow = "hidden", l.setAttribute("aria-atomic", "true"), l.setAttribute("aria-live", t), l.setAttribute("data-mdc-dom-announce", "true"), l.setAttribute("data-smui-dom-announce", "true"), i.body.appendChild(l), window.setTimeout(() => {
    l.textContent = n;
    const a = () => {
      l.textContent = "", l.removeEventListener("click", a);
    };
    l.addEventListener("click", a, { once: !0 });
  }, 100);
}
function le(n) {
  return Object.entries(n).filter(([e, t]) => e !== "" && t).map(([e]) => e).join(" ");
}
function ge(n, e, t, i = { bubbles: !0 }, r = !1) {
  if (typeof Event > "u")
    throw new Error("Event not defined.");
  if (!n)
    throw new Error("Tried to dipatch event without element.");
  const l = new CustomEvent(e, Object.assign(Object.assign({}, i), { detail: t }));
  if (n == null || n.dispatchEvent(l), r && e.startsWith("SMUI")) {
    const a = new CustomEvent(e.replace(/^SMUI/g, () => "MDC"), Object.assign(Object.assign({}, i), { detail: t }));
    n == null || n.dispatchEvent(a), a.defaultPrevented && l.preventDefault();
  }
  return l;
}
function Gt(n, e) {
  let t = Object.getOwnPropertyNames(n);
  const i = {};
  for (let r = 0; r < t.length; r++) {
    const l = t[r], a = l.indexOf("$");
    a !== -1 && e.indexOf(l.substring(0, a + 1)) !== -1 || e.indexOf(l) === -1 && (i[l] = n[l]);
  }
  return i;
}
const Fr = /^[a-z]+(?::(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/, so = /^[^$]+(?:\$(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/;
function nt(n) {
  let e, t = [];
  n.$on = (r, l) => {
    let a = r, s = () => {
    };
    return e ? s = e(a, l) : t.push([a, l]), a.match(Fr) && console && console.warn('Event modifiers in SMUI now use "$" instead of ":", so that all events can be bound with modifiers. Please update your event binding: ', a), () => {
      s();
    };
  };
  function i(r) {
    const l = n.$$.callbacks[r.type];
    l && l.slice().forEach((a) => a.call(this, r));
  }
  return (r) => {
    const l = [], a = {};
    e = (s, o) => {
      let u = s, c = o, d = !1;
      const f = u.match(Fr), h = u.match(so), p = f || h;
      if (u.match(/^SMUI:\w+:/)) {
        const C = u.split(":");
        let v = "";
        for (let T = 0; T < C.length; T++)
          v += T === C.length - 1 ? ":" + C[T] : C[T].split("-").map((y) => y.slice(0, 1).toUpperCase() + y.slice(1)).join("");
        console.warn(`The event ${u.split("$")[0]} has been renamed to ${v.split("$")[0]}.`), u = v;
      }
      if (p) {
        const C = u.split(f ? ":" : "$");
        u = C[0];
        const v = C.slice(1).reduce((T, y) => (T[y] = !0, T), {});
        v.passive && (d = d || {}, d.passive = !0), v.nonpassive && (d = d || {}, d.passive = !1), v.capture && (d = d || {}, d.capture = !0), v.once && (d = d || {}, d.once = !0), v.preventDefault && (c = ao(c)), v.stopPropagation && (c = oo(c)), v.stopImmediatePropagation && (c = uo(c)), v.self && (c = co(r, c)), v.trusted && (c = fo(c));
      }
      const b = Nr(r, u, c, d), m = () => {
        b();
        const C = l.indexOf(m);
        C > -1 && l.splice(C, 1);
      };
      return l.push(m), u in a || (a[u] = Nr(r, u, i)), m;
    };
    for (let s = 0; s < t.length; s++)
      e(t[s][0], t[s][1]);
    return {
      destroy: () => {
        for (let s = 0; s < l.length; s++)
          l[s]();
        for (let s of Object.entries(a))
          s[1]();
      }
    };
  };
}
function Nr(n, e, t, i) {
  return n.addEventListener(e, t, i), () => n.removeEventListener(e, t, i);
}
function ao(n) {
  return function(e) {
    return e.preventDefault(), n.call(this, e);
  };
}
function oo(n) {
  return function(e) {
    return e.stopPropagation(), n.call(this, e);
  };
}
function uo(n) {
  return function(e) {
    return e.stopImmediatePropagation(), n.call(this, e);
  };
}
function co(n, e) {
  return function(t) {
    if (t.target === n)
      return e.call(this, t);
  };
}
function fo(n) {
  return function(e) {
    if (e.isTrusted)
      return n.call(this, e);
  };
}
function Be(n, e) {
  let t = Object.getOwnPropertyNames(n);
  const i = {};
  for (let r = 0; r < t.length; r++) {
    const l = t[r];
    l.substring(0, e.length) === e && (i[l.substring(e.length)] = n[l]);
  }
  return i;
}
function Qe(n, e) {
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
            const a = i[r];
            Array.isArray(a) && a.length > 1 ? l.update(a[1]) : l.update();
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
var ri;
function na(n, e) {
  e === void 0 && (e = !1);
  var t = n.CSS, i = ri;
  if (typeof ri == "boolean" && !e)
    return ri;
  var r = t && typeof t.supports == "function";
  if (!r)
    return !1;
  var l = t.supports("--css-vars", "yes"), a = t.supports("(--css-vars: yes)") && t.supports("color", "#00000000");
  return i = l || a, e || (ri = i), i;
}
function ho(n, e, t) {
  if (!n)
    return { x: 0, y: 0 };
  var i = e.x, r = e.y, l = i + t.left, a = r + t.top, s, o;
  if (n.type === "touchstart") {
    var u = n;
    s = u.changedTouches[0].pageX - l, o = u.changedTouches[0].pageY - a;
  } else {
    var c = n;
    s = c.pageX - l, o = c.pageY - a;
  }
  return { x: s, y: o };
}
var ur = function(n, e) {
  return ur = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, i) {
    t.__proto__ = i;
  } || function(t, i) {
    for (var r in i)
      Object.prototype.hasOwnProperty.call(i, r) && (t[r] = i[r]);
  }, ur(n, e);
};
function ct(n, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  ur(n, e);
  function t() {
    this.constructor = n;
  }
  n.prototype = e === null ? Object.create(e) : (t.prototype = e.prototype, new t());
}
var ze = function() {
  return ze = Object.assign || function(e) {
    for (var t, i = 1, r = arguments.length; i < r; i++) {
      t = arguments[i];
      for (var l in t)
        Object.prototype.hasOwnProperty.call(t, l) && (e[l] = t[l]);
    }
    return e;
  }, ze.apply(this, arguments);
};
function ia(n, e, t, i) {
  function r(l) {
    return l instanceof t ? l : new t(function(a) {
      a(l);
    });
  }
  return new (t || (t = Promise))(function(l, a) {
    function s(c) {
      try {
        u(i.next(c));
      } catch (d) {
        a(d);
      }
    }
    function o(c) {
      try {
        u(i.throw(c));
      } catch (d) {
        a(d);
      }
    }
    function u(c) {
      c.done ? l(c.value) : r(c.value).then(s, o);
    }
    u((i = i.apply(n, e || [])).next());
  });
}
function Ir(n, e) {
  var t = { label: 0, sent: function() {
    if (l[0] & 1)
      throw l[1];
    return l[1];
  }, trys: [], ops: [] }, i, r, l, a = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
  return a.next = s(0), a.throw = s(1), a.return = s(2), typeof Symbol == "function" && (a[Symbol.iterator] = function() {
    return this;
  }), a;
  function s(u) {
    return function(c) {
      return o([u, c]);
    };
  }
  function o(u) {
    if (i)
      throw new TypeError("Generator is already executing.");
    for (; a && (a = 0, u[0] && (t = 0)), t; )
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
      } catch (c) {
        u = [6, c], r = 0;
      } finally {
        i = l = 0;
      }
    if (u[0] & 5)
      throw u[1];
    return { value: u[0] ? u[1] : void 0, done: !0 };
  }
}
function St(n) {
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
function Bn(n, e) {
  var t = typeof Symbol == "function" && n[Symbol.iterator];
  if (!t)
    return n;
  var i = t.call(n), r, l = [], a;
  try {
    for (; (e === void 0 || e-- > 0) && !(r = i.next()).done; )
      l.push(r.value);
  } catch (s) {
    a = { error: s };
  } finally {
    try {
      r && !r.done && (t = i.return) && t.call(i);
    } finally {
      if (a)
        throw a.error;
    }
  }
  return l;
}
function $n(n, e, t) {
  if (t || arguments.length === 2)
    for (var i = 0, r = e.length, l; i < r; i++)
      (l || !(i in e)) && (l || (l = Array.prototype.slice.call(e, 0, i)), l[i] = e[i]);
  return n.concat(l || Array.prototype.slice.call(e));
}
function wn(n) {
  return this instanceof wn ? (this.v = n, this) : new wn(n);
}
function mo(n, e, t) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var i = t.apply(n, e || []), r, l = [];
  return r = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype), s("next"), s("throw"), s("return", a), r[Symbol.asyncIterator] = function() {
    return this;
  }, r;
  function a(h) {
    return function(p) {
      return Promise.resolve(p).then(h, d);
    };
  }
  function s(h, p) {
    i[h] && (r[h] = function(b) {
      return new Promise(function(m, C) {
        l.push([h, b, m, C]) > 1 || o(h, b);
      });
    }, p && (r[h] = p(r[h])));
  }
  function o(h, p) {
    try {
      u(i[h](p));
    } catch (b) {
      f(l[0][3], b);
    }
  }
  function u(h) {
    h.value instanceof wn ? Promise.resolve(h.value.v).then(c, d) : f(l[0][2], h);
  }
  function c(h) {
    o("next", h);
  }
  function d(h) {
    o("throw", h);
  }
  function f(h, p) {
    h(p), l.shift(), l.length && o(l[0][0], l[0][1]);
  }
}
function po(n) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var e = n[Symbol.asyncIterator], t;
  return e ? e.call(n) : (n = typeof St == "function" ? St(n) : n[Symbol.iterator](), t = {}, i("next"), i("throw"), i("return"), t[Symbol.asyncIterator] = function() {
    return this;
  }, t);
  function i(l) {
    t[l] = n[l] && function(a) {
      return new Promise(function(s, o) {
        a = n[l](a), r(s, o, a.done, a.value);
      });
    };
  }
  function r(l, a, s, o) {
    Promise.resolve(o).then(function(u) {
      l({ value: u, done: s });
    }, a);
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
var Tt = (
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
var pi = (
  /** @class */
  function() {
    function n(e, t) {
      for (var i = [], r = 2; r < arguments.length; r++)
        i[r - 2] = arguments[r];
      this.root = e, this.initialize.apply(this, $n([], Bn(i))), this.foundation = t === void 0 ? this.getDefaultFoundation() : t, this.foundation.init(), this.initialSyncWithDOM();
    }
    return n.attachTo = function(e) {
      return new n(e, new Tt({}));
    }, n.prototype.initialize = function() {
    }, n.prototype.getDefaultFoundation = function() {
      throw new Error("Subclasses must override getDefaultFoundation to return a properly configured foundation class");
    }, n.prototype.initialSyncWithDOM = function() {
    }, n.prototype.destroy = function() {
      this.foundation.destroy();
    }, n.prototype.listen = function(e, t, i) {
      this.root.addEventListener(e, t, i);
    }, n.prototype.unlisten = function(e, t, i) {
      this.root.removeEventListener(e, t, i);
    }, n.prototype.emit = function(e, t, i) {
      i === void 0 && (i = !1);
      var r;
      typeof CustomEvent == "function" ? r = new CustomEvent(e, {
        bubbles: i,
        detail: t
      }) : (r = document.createEvent("CustomEvent"), r.initCustomEvent(e, i, !1, t)), this.root.dispatchEvent(r);
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
function Zn(n) {
  return n === void 0 && (n = window), go(n) ? { passive: !0 } : !1;
}
function go(n) {
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
const ra = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  applyPassive: Zn
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
function _o(n, e) {
  if (n.closest)
    return n.closest(e);
  for (var t = n; t; ) {
    if (vr(t, e))
      return t;
    t = t.parentElement;
  }
  return null;
}
function vr(n, e) {
  var t = n.matches || n.webkitMatchesSelector || n.msMatchesSelector;
  return t.call(n, e);
}
function bo(n) {
  var e = n;
  if (e.offsetParent !== null)
    return e.scrollWidth;
  var t = e.cloneNode(!0);
  t.style.setProperty("position", "absolute"), t.style.setProperty("transform", "translate(-9999px, -9999px)"), document.documentElement.appendChild(t);
  var i = t.scrollWidth;
  return document.documentElement.removeChild(t), i;
}
const ei = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  closest: _o,
  estimateScrollWidth: bo,
  matches: vr
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
var Io = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  BG_FOCUSED: "mdc-ripple-upgraded--background-focused",
  FG_ACTIVATION: "mdc-ripple-upgraded--foreground-activation",
  FG_DEACTIVATION: "mdc-ripple-upgraded--foreground-deactivation",
  ROOT: "mdc-ripple-upgraded",
  UNBOUNDED: "mdc-ripple-upgraded--unbounded"
}, vo = {
  VAR_FG_SCALE: "--mdc-ripple-fg-scale",
  VAR_FG_SIZE: "--mdc-ripple-fg-size",
  VAR_FG_TRANSLATE_END: "--mdc-ripple-fg-translate-end",
  VAR_FG_TRANSLATE_START: "--mdc-ripple-fg-translate-start",
  VAR_LEFT: "--mdc-ripple-left",
  VAR_TOP: "--mdc-ripple-top"
}, Ur = {
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
var wr = [
  "touchstart",
  "pointerdown",
  "mousedown",
  "keydown"
], Pr = [
  "touchend",
  "pointerup",
  "mouseup",
  "contextmenu"
], li = [], gi = (
  /** @class */
  function(n) {
    ct(e, n);
    function e(t) {
      var i = n.call(this, ze(ze({}, e.defaultAdapter), t)) || this;
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
        return Io;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return vo;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return Ur;
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
        var r = e.cssClasses, l = r.ROOT, a = r.UNBOUNDED;
        requestAnimationFrame(function() {
          t.adapter.addClass(l), t.adapter.isUnbounded() && (t.adapter.addClass(a), t.layoutInternal());
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
          for (var l = St(wr), a = l.next(); !a.done; a = l.next()) {
            var s = a.value;
            this.adapter.registerInteractionHandler(s, this.activateHandler);
          }
        } catch (o) {
          i = { error: o };
        } finally {
          try {
            a && !a.done && (r = l.return) && r.call(l);
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
          for (var l = St(Pr), a = l.next(); !a.done; a = l.next()) {
            var s = a.value;
            this.adapter.registerDocumentInteractionHandler(s, this.deactivateHandler);
          }
        } catch (o) {
          i = { error: o };
        } finally {
          try {
            a && !a.done && (r = l.return) && r.call(l);
          } finally {
            if (i)
              throw i.error;
          }
        }
    }, e.prototype.deregisterRootHandlers = function() {
      var t, i;
      try {
        for (var r = St(wr), l = r.next(); !l.done; l = r.next()) {
          var a = l.value;
          this.adapter.deregisterInteractionHandler(a, this.activateHandler);
        }
      } catch (s) {
        t = { error: s };
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
        for (var r = St(Pr), l = r.next(); !l.done; l = r.next()) {
          var a = l.value;
          this.adapter.deregisterDocumentInteractionHandler(a, this.deactivateHandler);
        }
      } catch (s) {
        t = { error: s };
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
          var l = this.previousActivationEvent, a = l && t !== void 0 && l.type !== t.type;
          if (!a) {
            r.isActivated = !0, r.isProgrammatic = t === void 0, r.activationEvent = t, r.wasActivatedByPointer = r.isProgrammatic ? !1 : t !== void 0 && (t.type === "mousedown" || t.type === "touchstart" || t.type === "pointerdown");
            var s = t !== void 0 && li.length > 0 && li.some(function(o) {
              return i.adapter.containsEventTarget(o);
            });
            if (s) {
              this.resetActivationState();
              return;
            }
            t !== void 0 && (li.push(t.target), this.registerDeactivationHandlers(t)), r.wasElementMadeActive = this.checkElementMadeActive(t), r.wasElementMadeActive && this.animateActivation(), requestAnimationFrame(function() {
              li = [], !r.wasElementMadeActive && t !== void 0 && (t.key === " " || t.keyCode === 32) && (r.wasElementMadeActive = i.checkElementMadeActive(t), r.wasElementMadeActive && i.animateActivation()), r.wasElementMadeActive || (i.activationState = i.defaultActivationState());
            });
          }
        }
      }
    }, e.prototype.checkElementMadeActive = function(t) {
      return t !== void 0 && t.type === "keydown" ? this.adapter.isSurfaceActive() : !0;
    }, e.prototype.animateActivation = function() {
      var t = this, i = e.strings, r = i.VAR_FG_TRANSLATE_START, l = i.VAR_FG_TRANSLATE_END, a = e.cssClasses, s = a.FG_DEACTIVATION, o = a.FG_ACTIVATION, u = e.numbers.DEACTIVATION_TIMEOUT_MS;
      this.layoutInternal();
      var c = "", d = "";
      if (!this.adapter.isUnbounded()) {
        var f = this.getFgTranslationCoordinates(), h = f.startPoint, p = f.endPoint;
        c = h.x + "px, " + h.y + "px", d = p.x + "px, " + p.y + "px";
      }
      this.adapter.updateCssVariable(r, c), this.adapter.updateCssVariable(l, d), clearTimeout(this.activationTimer), clearTimeout(this.fgDeactivationRemovalTimer), this.rmBoundedActivationClasses(), this.adapter.removeClass(s), this.adapter.computeBoundingRect(), this.adapter.addClass(o), this.activationTimer = setTimeout(function() {
        t.activationTimerCallback();
      }, u);
    }, e.prototype.getFgTranslationCoordinates = function() {
      var t = this.activationState, i = t.activationEvent, r = t.wasActivatedByPointer, l;
      r ? l = ho(i, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect()) : l = {
        x: this.frame.width / 2,
        y: this.frame.height / 2
      }, l = {
        x: l.x - this.initialSize / 2,
        y: l.y - this.initialSize / 2
      };
      var a = {
        x: this.frame.width / 2 - this.initialSize / 2,
        y: this.frame.height / 2 - this.initialSize / 2
      };
      return { startPoint: l, endPoint: a };
    }, e.prototype.runDeactivationUXLogicIfReady = function() {
      var t = this, i = e.cssClasses.FG_DEACTIVATION, r = this.activationState, l = r.hasDeactivationUXRun, a = r.isActivated, s = l || !a;
      s && this.activationAnimationHasEnded && (this.rmBoundedActivationClasses(), this.adapter.addClass(i), this.fgDeactivationRemovalTimer = setTimeout(function() {
        t.adapter.removeClass(i);
      }, Ur.FG_DEACTIVATION_MS));
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
        var r = ze({}, i);
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
        var a = Math.sqrt(Math.pow(t.frame.width, 2) + Math.pow(t.frame.height, 2));
        return a + e.numbers.PADDING;
      };
      this.maxRadius = this.adapter.isUnbounded() ? i : r();
      var l = Math.floor(i * e.numbers.INITIAL_ORIGIN_SCALE);
      this.adapter.isUnbounded() && l % 2 !== 0 ? this.initialSize = l - 1 : this.initialSize = l, this.fgScale = "" + this.maxRadius / this.initialSize, this.updateLayoutCssVars();
    }, e.prototype.updateLayoutCssVars = function() {
      var t = e.strings, i = t.VAR_FG_SIZE, r = t.VAR_LEFT, l = t.VAR_TOP, a = t.VAR_FG_SCALE;
      this.adapter.updateCssVariable(i, this.initialSize + "px"), this.adapter.updateCssVariable(a, this.fgScale), this.adapter.isUnbounded() && (this.unboundedCoords = {
        left: Math.round(this.frame.width / 2 - this.initialSize / 2),
        top: Math.round(this.frame.height / 2 - this.initialSize / 2)
      }, this.adapter.updateCssVariable(r, this.unboundedCoords.left + "px"), this.adapter.updateCssVariable(l, this.unboundedCoords.top + "px"));
    }, e;
  }(Tt)
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
var fi = (
  /** @class */
  function(n) {
    ct(e, n);
    function e() {
      var t = n !== null && n.apply(this, arguments) || this;
      return t.disabled = !1, t;
    }
    return e.attachTo = function(t, i) {
      i === void 0 && (i = {
        isUnbounded: void 0
      });
      var r = new e(t);
      return i.isUnbounded !== void 0 && (r.unbounded = i.isUnbounded), r;
    }, e.createAdapter = function(t) {
      return {
        addClass: function(i) {
          return t.root.classList.add(i);
        },
        browserSupportsCssVars: function() {
          return na(window);
        },
        computeBoundingRect: function() {
          return t.root.getBoundingClientRect();
        },
        containsEventTarget: function(i) {
          return t.root.contains(i);
        },
        deregisterDocumentInteractionHandler: function(i, r) {
          return document.documentElement.removeEventListener(i, r, Zn());
        },
        deregisterInteractionHandler: function(i, r) {
          return t.root.removeEventListener(i, r, Zn());
        },
        deregisterResizeHandler: function(i) {
          return window.removeEventListener("resize", i);
        },
        getWindowPageOffset: function() {
          return { x: window.pageXOffset, y: window.pageYOffset };
        },
        isSurfaceActive: function() {
          return vr(t.root, ":active");
        },
        isSurfaceDisabled: function() {
          return !!t.disabled;
        },
        isUnbounded: function() {
          return !!t.unbounded;
        },
        registerDocumentInteractionHandler: function(i, r) {
          return document.documentElement.addEventListener(i, r, Zn());
        },
        registerInteractionHandler: function(i, r) {
          return t.root.addEventListener(i, r, Zn());
        },
        registerResizeHandler: function(i) {
          return window.addEventListener("resize", i);
        },
        removeClass: function(i) {
          return t.root.classList.remove(i);
        },
        updateCssVariable: function(i, r) {
          return t.root.style.setProperty(i, r);
        }
      };
    }, Object.defineProperty(e.prototype, "unbounded", {
      get: function() {
        return !!this.isUnbounded;
      },
      set: function(t) {
        this.isUnbounded = !!t, this.setUnbounded();
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
      return new gi(e.createAdapter(this));
    }, e.prototype.initialSyncWithDOM = function() {
      var t = this.root;
      this.isUnbounded = "mdcRippleIsUnbounded" in t.dataset;
    }, e.prototype.setUnbounded = function() {
      this.foundation.setUnbounded(!!this.isUnbounded);
    }, e;
  }(pi)
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
var Wi = "mdc-dom-focus-sentinel", Co = (
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
      [].slice.call(this.root.querySelectorAll("." + Wi)).forEach(function(e) {
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
        var r = i.getAttribute("aria-disabled") === "true" || i.getAttribute("disabled") != null || i.getAttribute("hidden") != null || i.getAttribute("aria-hidden") === "true", l = i.tabIndex >= 0 && i.getBoundingClientRect().width > 0 && !i.classList.contains(Wi) && !r, a = !1;
        if (l) {
          var s = getComputedStyle(i);
          a = s.display === "none" || s.visibility === "hidden";
        }
        return l && !a;
      });
    }, n.prototype.createSentinel = function() {
      var e = document.createElement("div");
      return e.setAttribute("tabindex", "0"), e.setAttribute("aria-hidden", "true"), e.classList.add(Wi), e;
    }, n;
  }()
);
const Ao = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  FocusTrap: Co
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
}, Mt = /* @__PURE__ */ new Set();
Mt.add(we.BACKSPACE);
Mt.add(we.ENTER);
Mt.add(we.SPACEBAR);
Mt.add(we.PAGE_UP);
Mt.add(we.PAGE_DOWN);
Mt.add(we.END);
Mt.add(we.HOME);
Mt.add(we.ARROW_LEFT);
Mt.add(we.ARROW_UP);
Mt.add(we.ARROW_RIGHT);
Mt.add(we.ARROW_DOWN);
Mt.add(we.DELETE);
Mt.add(we.ESCAPE);
Mt.add(we.TAB);
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
var an = /* @__PURE__ */ new Set();
an.add(we.PAGE_UP);
an.add(we.PAGE_DOWN);
an.add(we.END);
an.add(we.HOME);
an.add(we.ARROW_LEFT);
an.add(we.ARROW_UP);
an.add(we.ARROW_RIGHT);
an.add(we.ARROW_DOWN);
function _t(n) {
  var e = n.key;
  if (Mt.has(e))
    return e;
  var t = Ft.get(n.keyCode);
  return t || we.UNKNOWN;
}
function Eo(n) {
  return an.has(_t(n));
}
const { applyPassive: si } = ra, { matches: yo } = ei;
function kt(n, { ripple: e = !0, surface: t = !1, unbounded: i = !1, disabled: r = !1, color: l, active: a, rippleElement: s, eventTarget: o, activeTarget: u, addClass: c = (p) => n.classList.add(p), removeClass: d = (p) => n.classList.remove(p), addStyle: f = (p, b) => n.style.setProperty(p, b), initPromise: h = Promise.resolve() } = {}) {
  let p, b = Ke("SMUI:addLayoutListener"), m, C = a, v = o, T = u;
  function y() {
    t ? (c("mdc-ripple-surface"), l === "primary" ? (c("smui-ripple-surface--primary"), d("smui-ripple-surface--secondary")) : l === "secondary" ? (d("smui-ripple-surface--primary"), c("smui-ripple-surface--secondary")) : (d("smui-ripple-surface--primary"), d("smui-ripple-surface--secondary"))) : (d("mdc-ripple-surface"), d("smui-ripple-surface--primary"), d("smui-ripple-surface--secondary")), p && C !== a && (C = a, a ? p.activate() : a === !1 && p.deactivate()), e && !p ? (p = new gi({
      addClass: c,
      browserSupportsCssVars: () => na(window),
      computeBoundingRect: () => (s || n).getBoundingClientRect(),
      containsEventTarget: (R) => n.contains(R),
      deregisterDocumentInteractionHandler: (R, _) => document.documentElement.removeEventListener(R, _, si()),
      deregisterInteractionHandler: (R, _) => (o || n).removeEventListener(R, _, si()),
      deregisterResizeHandler: (R) => window.removeEventListener("resize", R),
      getWindowPageOffset: () => ({
        x: window.pageXOffset,
        y: window.pageYOffset
      }),
      isSurfaceActive: () => a ?? yo(u || n, ":active"),
      isSurfaceDisabled: () => !!r,
      isUnbounded: () => !!i,
      registerDocumentInteractionHandler: (R, _) => document.documentElement.addEventListener(R, _, si()),
      registerInteractionHandler: (R, _) => (o || n).addEventListener(R, _, si()),
      registerResizeHandler: (R) => window.addEventListener("resize", R),
      removeClass: d,
      updateCssVariable: f
    }), h.then(() => {
      p && (p.init(), p.setUnbounded(i));
    })) : p && !e && h.then(() => {
      p && (p.destroy(), p = void 0);
    }), p && (v !== o || T !== u) && (v = o, T = u, p.destroy(), requestAnimationFrame(() => {
      p && (p.init(), p.setUnbounded(i));
    })), !e && i && c("mdc-ripple-upgraded--unbounded");
  }
  y(), b && (m = b(k));
  function k() {
    p && p.layout();
  }
  return {
    update(R) {
      ({
        ripple: e,
        surface: t,
        unbounded: i,
        disabled: r,
        color: l,
        active: a,
        rippleElement: s,
        eventTarget: o,
        activeTarget: u,
        addClass: c,
        removeClass: d,
        addStyle: f,
        initPromise: h
      } = Object.assign({ ripple: !0, surface: !1, unbounded: !1, disabled: !1, color: void 0, active: void 0, rippleElement: void 0, eventTarget: void 0, activeTarget: void 0, addClass: (_) => n.classList.add(_), removeClass: (_) => n.classList.remove(_), addStyle: (_, A) => n.style.setProperty(_, A), initPromise: Promise.resolve() }, R)), y();
    },
    destroy() {
      p && (p.destroy(), p = void 0, d("mdc-ripple-surface"), d("smui-ripple-surface--primary"), d("smui-ripple-surface--secondary")), m && m();
    }
  };
}
function So(n) {
  let e;
  const t = (
    /*#slots*/
    n[10].default
  ), i = Ie(
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
      4096) && Ce(
        i,
        t,
        r,
        /*$$scope*/
        r[12],
        e ? ve(
          t,
          /*$$scope*/
          r[12],
          l,
          null
        ) : Ae(
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
      S(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function To(n) {
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
      class: le({
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
  function a(s, o) {
    let u = {
      $$slots: { default: [So] },
      $$scope: { ctx: s }
    };
    for (let c = 0; c < r.length; c += 1)
      u = Y(u, r[c]);
    return o !== void 0 && o & /*tag, forwardEvents, use, className, context, tabindex, $$restProps*/
    491 && (u = Y(u, he(r, [
      o & /*tag*/
      8 && { tag: (
        /*tag*/
        s[3]
      ) },
      o & /*forwardEvents, use*/
      33 && {
        use: [
          /*forwardEvents*/
          s[5],
          .../*use*/
          s[0]
        ]
      },
      o & /*className, context*/
      66 && {
        class: le({
          [
            /*className*/
            s[1]
          ]: !0,
          "mdc-button__label": (
            /*context*/
            s[6] === "button"
          ),
          "mdc-fab__label": (
            /*context*/
            s[6] === "fab"
          ),
          "mdc-tab__text-label": (
            /*context*/
            s[6] === "tab"
          ),
          "mdc-image-list__label": (
            /*context*/
            s[6] === "image-list"
          ),
          "mdc-snackbar__label": (
            /*context*/
            s[6] === "snackbar"
          ),
          "mdc-banner__text": (
            /*context*/
            s[6] === "banner"
          ),
          "mdc-segmented-button__label": (
            /*context*/
            s[6] === "segmented-button"
          ),
          "mdc-data-table__pagination-rows-per-page-label": (
            /*context*/
            s[6] === "data-table:pagination"
          ),
          "mdc-data-table__header-cell-label": (
            /*context*/
            s[6] === "data-table:sortable-header-cell"
          )
        })
      },
      o & /*context*/
      64 && Me(
        /*context*/
        s[6] === "snackbar" ? { "aria-atomic": "false" } : {}
      ),
      o & /*tabindex*/
      128 && { tabindex: (
        /*tabindex*/
        s[7]
      ) },
      o & /*$$restProps*/
      256 && Me(
        /*$$restProps*/
        s[8]
      )
    ]))), { props: u };
  }
  return l && (e = Dt(l, a(n)), n[11](e)), {
    c() {
      e && ie(e.$$.fragment), t = Xe();
    },
    m(s, o) {
      e && ee(e, s, o), V(s, t, o), i = !0;
    },
    p(s, [o]) {
      if (o & /*component*/
      4 && l !== (l = /*component*/
      s[2])) {
        if (e) {
          Pe();
          const u = e;
          S(u.$$.fragment, 1, 0, () => {
            te(u, 1);
          }), He();
        }
        l ? (e = Dt(l, a(s, o)), s[11](e), ie(e.$$.fragment), E(e.$$.fragment, 1), ee(e, t.parentNode, t)) : e = null;
      } else if (l) {
        const u = o & /*tag, forwardEvents, use, className, context, tabindex, $$restProps*/
        491 ? he(r, [
          o & /*tag*/
          8 && { tag: (
            /*tag*/
            s[3]
          ) },
          o & /*forwardEvents, use*/
          33 && {
            use: [
              /*forwardEvents*/
              s[5],
              .../*use*/
              s[0]
            ]
          },
          o & /*className, context*/
          66 && {
            class: le({
              [
                /*className*/
                s[1]
              ]: !0,
              "mdc-button__label": (
                /*context*/
                s[6] === "button"
              ),
              "mdc-fab__label": (
                /*context*/
                s[6] === "fab"
              ),
              "mdc-tab__text-label": (
                /*context*/
                s[6] === "tab"
              ),
              "mdc-image-list__label": (
                /*context*/
                s[6] === "image-list"
              ),
              "mdc-snackbar__label": (
                /*context*/
                s[6] === "snackbar"
              ),
              "mdc-banner__text": (
                /*context*/
                s[6] === "banner"
              ),
              "mdc-segmented-button__label": (
                /*context*/
                s[6] === "segmented-button"
              ),
              "mdc-data-table__pagination-rows-per-page-label": (
                /*context*/
                s[6] === "data-table:pagination"
              ),
              "mdc-data-table__header-cell-label": (
                /*context*/
                s[6] === "data-table:sortable-header-cell"
              )
            })
          },
          o & /*context*/
          64 && Me(
            /*context*/
            s[6] === "snackbar" ? { "aria-atomic": "false" } : {}
          ),
          o & /*tabindex*/
          128 && { tabindex: (
            /*tabindex*/
            s[7]
          ) },
          o & /*$$restProps*/
          256 && Me(
            /*$$restProps*/
            s[8]
          )
        ]) : {};
        o & /*$$scope*/
        4096 && (u.$$scope = { dirty: o, ctx: s }), e.$set(u);
      }
    },
    i(s) {
      i || (e && E(e.$$.fragment, s), i = !0);
    },
    o(s) {
      e && S(e.$$.fragment, s), i = !1;
    },
    d(s) {
      s && B(t), n[11](null), e && te(e, s);
    }
  };
}
function Lo(n, e, t) {
  const i = ["use", "class", "component", "tag", "getElement"];
  let r = pe(e, i), { $$slots: l = {}, $$scope: a } = e;
  const s = nt(Je());
  let { use: o = [] } = e, { class: u = "" } = e, c, { component: d = Nt } = e, { tag: f = d === Nt ? "span" : void 0 } = e;
  const h = Ke("SMUI:label:context"), p = Ke("SMUI:label:tabindex");
  function b() {
    return c.getElement();
  }
  function m(C) {
    se[C ? "unshift" : "push"](() => {
      c = C, t(4, c);
    });
  }
  return n.$$set = (C) => {
    e = Y(Y({}, e), tt(C)), t(8, r = pe(e, i)), "use" in C && t(0, o = C.use), "class" in C && t(1, u = C.class), "component" in C && t(2, d = C.component), "tag" in C && t(3, f = C.tag), "$$scope" in C && t(12, a = C.$$scope);
  }, [
    o,
    u,
    d,
    f,
    c,
    s,
    h,
    p,
    r,
    b,
    l,
    m,
    a
  ];
}
class la extends Re {
  constructor(e) {
    super(), Oe(this, e, Lo, To, Ee, {
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
function Oo(n) {
  let e = (
    /*tag*/
    n[1]
  ), t, i, r = (
    /*tag*/
    n[1] && zi(n)
  );
  return {
    c() {
      r && r.c(), t = Xe();
    },
    m(l, a) {
      r && r.m(l, a), V(l, t, a), i = !0;
    },
    p(l, a) {
      /*tag*/
      l[1] ? e ? Ee(
        e,
        /*tag*/
        l[1]
      ) ? (r.d(1), r = zi(l), e = /*tag*/
      l[1], r.c(), r.m(t.parentNode, t)) : r.p(l, a) : (r = zi(l), e = /*tag*/
      l[1], r.c(), r.m(t.parentNode, t)) : e && (r.d(1), r = null, e = /*tag*/
      l[1]);
    },
    i(l) {
      i || (E(r, l), i = !0);
    },
    o(l) {
      S(r, l), i = !1;
    },
    d(l) {
      l && B(t), r && r.d(l);
    }
  };
}
function Ro(n) {
  let e = (
    /*tag*/
    n[1]
  ), t, i = (
    /*tag*/
    n[1] && Yi(n)
  );
  return {
    c() {
      i && i.c(), t = Xe();
    },
    m(r, l) {
      i && i.m(r, l), V(r, t, l);
    },
    p(r, l) {
      /*tag*/
      r[1] ? e ? Ee(
        e,
        /*tag*/
        r[1]
      ) ? (i.d(1), i = Yi(r), e = /*tag*/
      r[1], i.c(), i.m(t.parentNode, t)) : i.p(r, l) : (i = Yi(r), e = /*tag*/
      r[1], i.c(), i.m(t.parentNode, t)) : e && (i.d(1), i = null, e = /*tag*/
      r[1]);
    },
    i: $e,
    o: $e,
    d(r) {
      r && B(t), i && i.d(r);
    }
  };
}
function ko(n) {
  let e, t, i, r, l;
  const a = (
    /*#slots*/
    n[8].default
  ), s = Ie(
    a,
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
    u = Y(u, o[c]);
  return {
    c() {
      e = st("svg"), s && s.c(), Mr(e, u);
    },
    m(c, d) {
      V(c, e, d), s && s.m(e, null), n[9](e), i = !0, r || (l = [
        fe(t = Qe.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        fe(
          /*forwardEvents*/
          n[4].call(null, e)
        )
      ], r = !0);
    },
    p(c, d) {
      s && s.p && (!i || d & /*$$scope*/
      128) && Ce(
        s,
        a,
        c,
        /*$$scope*/
        c[7],
        i ? ve(
          a,
          /*$$scope*/
          c[7],
          d,
          null
        ) : Ae(
          /*$$scope*/
          c[7]
        ),
        null
      ), Mr(e, u = he(o, [d & /*$$restProps*/
      32 && /*$$restProps*/
      c[5]])), t && me(t.update) && d & /*use*/
      1 && t.update.call(
        null,
        /*use*/
        c[0]
      );
    },
    i(c) {
      i || (E(s, c), i = !0);
    },
    o(c) {
      S(s, c), i = !1;
    },
    d(c) {
      c && B(e), s && s.d(c), n[9](null), r = !1, Ze(l);
    }
  };
}
function zi(n) {
  let e, t, i, r, l;
  const a = (
    /*#slots*/
    n[8].default
  ), s = Ie(
    a,
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
    u = Y(u, o[c]);
  return {
    c() {
      e = ne(
        /*tag*/
        n[1]
      ), s && s.c(), di(
        /*tag*/
        n[1]
      )(e, u);
    },
    m(c, d) {
      V(c, e, d), s && s.m(e, null), n[11](e), i = !0, r || (l = [
        fe(t = Qe.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        fe(
          /*forwardEvents*/
          n[4].call(null, e)
        )
      ], r = !0);
    },
    p(c, d) {
      s && s.p && (!i || d & /*$$scope*/
      128) && Ce(
        s,
        a,
        c,
        /*$$scope*/
        c[7],
        i ? ve(
          a,
          /*$$scope*/
          c[7],
          d,
          null
        ) : Ae(
          /*$$scope*/
          c[7]
        ),
        null
      ), di(
        /*tag*/
        c[1]
      )(e, u = he(o, [d & /*$$restProps*/
      32 && /*$$restProps*/
      c[5]])), t && me(t.update) && d & /*use*/
      1 && t.update.call(
        null,
        /*use*/
        c[0]
      );
    },
    i(c) {
      i || (E(s, c), i = !0);
    },
    o(c) {
      S(s, c), i = !1;
    },
    d(c) {
      c && B(e), s && s.d(c), n[11](null), r = !1, Ze(l);
    }
  };
}
function Yi(n) {
  let e, t, i, r, l = [
    /*$$restProps*/
    n[5]
  ], a = {};
  for (let s = 0; s < l.length; s += 1)
    a = Y(a, l[s]);
  return {
    c() {
      e = ne(
        /*tag*/
        n[1]
      ), di(
        /*tag*/
        n[1]
      )(e, a);
    },
    m(s, o) {
      V(s, e, o), n[10](e), i || (r = [
        fe(t = Qe.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        fe(
          /*forwardEvents*/
          n[4].call(null, e)
        )
      ], i = !0);
    },
    p(s, o) {
      di(
        /*tag*/
        s[1]
      )(e, a = he(l, [o & /*$$restProps*/
      32 && /*$$restProps*/
      s[5]])), t && me(t.update) && o & /*use*/
      1 && t.update.call(
        null,
        /*use*/
        s[0]
      );
    },
    d(s) {
      s && B(e), n[10](null), i = !1, Ze(r);
    }
  };
}
function Do(n) {
  let e, t, i, r;
  const l = [ko, Ro, Oo], a = [];
  function s(o, u) {
    return (
      /*tag*/
      o[1] === "svg" ? 0 : (
        /*selfClosing*/
        o[3] ? 1 : 2
      )
    );
  }
  return e = s(n), t = a[e] = l[e](n), {
    c() {
      t.c(), i = Xe();
    },
    m(o, u) {
      a[e].m(o, u), V(o, i, u), r = !0;
    },
    p(o, [u]) {
      let c = e;
      e = s(o), e === c ? a[e].p(o, u) : (Pe(), S(a[c], 1, 1, () => {
        a[c] = null;
      }), He(), t = a[e], t ? t.p(o, u) : (t = a[e] = l[e](o), t.c()), E(t, 1), t.m(i.parentNode, i));
    },
    i(o) {
      r || (E(t), r = !0);
    },
    o(o) {
      S(t), r = !1;
    },
    d(o) {
      o && B(i), a[e].d(o);
    }
  };
}
function Mo(n, e, t) {
  let i;
  const r = ["use", "tag", "getElement"];
  let l = pe(e, r), { $$slots: a = {}, $$scope: s } = e, { use: o = [] } = e, { tag: u } = e;
  const c = nt(Je());
  let d;
  function f() {
    return d;
  }
  function h(m) {
    se[m ? "unshift" : "push"](() => {
      d = m, t(2, d);
    });
  }
  function p(m) {
    se[m ? "unshift" : "push"](() => {
      d = m, t(2, d);
    });
  }
  function b(m) {
    se[m ? "unshift" : "push"](() => {
      d = m, t(2, d);
    });
  }
  return n.$$set = (m) => {
    e = Y(Y({}, e), tt(m)), t(5, l = pe(e, r)), "use" in m && t(0, o = m.use), "tag" in m && t(1, u = m.tag), "$$scope" in m && t(7, s = m.$$scope);
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
    o,
    u,
    d,
    i,
    c,
    l,
    f,
    s,
    a,
    h,
    p,
    b
  ];
}
class Nt extends Re {
  constructor(e) {
    super(), Oe(this, e, Mo, Do, Ee, { use: 0, tag: 1, getElement: 6 });
  }
  get getElement() {
    return this.$$.ctx[6];
  }
}
const On = [];
function Lt(n, e = $e) {
  let t;
  const i = /* @__PURE__ */ new Set();
  function r(s) {
    if (Ee(n, s) && (n = s, t)) {
      const o = !On.length;
      for (const u of i)
        u[1](), On.push(u, n);
      if (o) {
        for (let u = 0; u < On.length; u += 2)
          On[u][0](On[u + 1]);
        On.length = 0;
      }
    }
  }
  function l(s) {
    r(s(n));
  }
  function a(s, o = $e) {
    const u = [s, o];
    return i.add(u), i.size === 1 && (t = e(r, l) || $e), s(n), () => {
      i.delete(u), i.size === 0 && t && (t(), t = null);
    };
  }
  return { set: r, update: l, subscribe: a };
}
function Fo(n) {
  let e;
  const t = (
    /*#slots*/
    n[4].default
  ), i = Ie(
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
      8) && Ce(
        i,
        t,
        r,
        /*$$scope*/
        r[3],
        e ? ve(
          t,
          /*$$scope*/
          r[3],
          l,
          null
        ) : Ae(
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
      S(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function No(n, e, t) {
  let i, { $$slots: r = {}, $$scope: l } = e, { key: a } = e, { value: s } = e;
  const o = Lt(s);
  return it(n, o, (u) => t(5, i = u)), Ve(a, o), zt(() => {
    o.set(void 0);
  }), n.$$set = (u) => {
    "key" in u && t(1, a = u.key), "value" in u && t(2, s = u.value), "$$scope" in u && t(3, l = u.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty & /*value*/
    4 && Rt(o, i = s, i);
  }, [o, a, s, l, r];
}
class Vn extends Re {
  constructor(e) {
    super(), Oe(this, e, No, Fo, Ee, { key: 1, value: 2 });
  }
}
function Hr(n) {
  let e;
  return {
    c() {
      e = ne("div"), U(e, "class", "mdc-button__touch");
    },
    m(t, i) {
      V(t, e, i);
    },
    d(t) {
      t && B(e);
    }
  };
}
function Uo(n) {
  let e, t, i, r;
  const l = (
    /*#slots*/
    n[28].default
  ), a = Ie(
    l,
    n,
    /*$$scope*/
    n[30],
    null
  );
  let s = (
    /*touch*/
    n[6] && Hr()
  );
  return {
    c() {
      e = ne("div"), t = ae(), a && a.c(), s && s.c(), i = Xe(), U(e, "class", "mdc-button__ripple");
    },
    m(o, u) {
      V(o, e, u), V(o, t, u), a && a.m(o, u), s && s.m(o, u), V(o, i, u), r = !0;
    },
    p(o, u) {
      a && a.p && (!r || u[0] & /*$$scope*/
      1073741824) && Ce(
        a,
        l,
        o,
        /*$$scope*/
        o[30],
        r ? ve(
          l,
          /*$$scope*/
          o[30],
          u,
          null
        ) : Ae(
          /*$$scope*/
          o[30]
        ),
        null
      ), /*touch*/
      o[6] ? s || (s = Hr(), s.c(), s.m(i.parentNode, i)) : s && (s.d(1), s = null);
    },
    i(o) {
      r || (E(a, o), r = !0);
    },
    o(o) {
      S(a, o), r = !1;
    },
    d(o) {
      o && (B(e), B(t), B(i)), a && a.d(o), s && s.d(o);
    }
  };
}
function wo(n) {
  let e, t, i;
  const r = [
    { tag: (
      /*tag*/
      n[10]
    ) },
    {
      use: [
        [
          kt,
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
      class: le({
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
      ).map(Xi).concat([
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
  function a(s, o) {
    let u = {
      $$slots: { default: [Uo] },
      $$scope: { ctx: s }
    };
    for (let c = 0; c < r.length; c += 1)
      u = Y(u, r[c]);
    return o !== void 0 && o[0] & /*tag, ripple, color, $$restProps, addClass, removeClass, addStyle, forwardEvents, use, className, variant, touch, context, secondary, internalClasses, internalStyles, style, actionProp, defaultProp, secondaryProp, href*/
    12580351 && (u = Y(u, he(r, [
      o[0] & /*tag*/
      1024 && { tag: (
        /*tag*/
        s[10]
      ) },
      o[0] & /*ripple, color, $$restProps, addClass, removeClass, addStyle, forwardEvents, use*/
      12189721 && {
        use: [
          [
            kt,
            {
              ripple: (
                /*ripple*/
                s[3]
              ),
              unbounded: !1,
              color: (
                /*color*/
                s[4]
              ),
              disabled: !!/*$$restProps*/
              s[23].disabled,
              addClass: (
                /*addClass*/
                s[19]
              ),
              removeClass: (
                /*removeClass*/
                s[20]
              ),
              addStyle: (
                /*addStyle*/
                s[21]
              )
            }
          ],
          /*forwardEvents*/
          s[17],
          .../*use*/
          s[0]
        ]
      },
      o[0] & /*className, variant, color, touch, context, secondary, internalClasses*/
      266610 && {
        class: le({
          [
            /*className*/
            s[1]
          ]: !0,
          "mdc-button": !0,
          "mdc-button--raised": (
            /*variant*/
            s[5] === "raised"
          ),
          "mdc-button--unelevated": (
            /*variant*/
            s[5] === "unelevated"
          ),
          "mdc-button--outlined": (
            /*variant*/
            s[5] === "outlined"
          ),
          "smui-button--color-secondary": (
            /*color*/
            s[4] === "secondary"
          ),
          "mdc-button--touch": (
            /*touch*/
            s[6]
          ),
          "mdc-card__action": (
            /*context*/
            s[18] === "card:action"
          ),
          "mdc-card__action--button": (
            /*context*/
            s[18] === "card:action"
          ),
          "mdc-dialog__button": (
            /*context*/
            s[18] === "dialog:action"
          ),
          "mdc-top-app-bar__navigation-icon": (
            /*context*/
            s[18] === "top-app-bar:navigation"
          ),
          "mdc-top-app-bar__action-item": (
            /*context*/
            s[18] === "top-app-bar:action"
          ),
          "mdc-snackbar__action": (
            /*context*/
            s[18] === "snackbar:actions"
          ),
          "mdc-banner__secondary-action": (
            /*context*/
            s[18] === "banner" && /*secondary*/
            s[8]
          ),
          "mdc-banner__primary-action": (
            /*context*/
            s[18] === "banner" && !/*secondary*/
            s[8]
          ),
          "mdc-tooltip__action": (
            /*context*/
            s[18] === "tooltip:rich-actions"
          ),
          .../*internalClasses*/
          s[12]
        })
      },
      o[0] & /*internalStyles, style*/
      8196 && {
        style: Object.entries(
          /*internalStyles*/
          s[13]
        ).map(Xi).concat([
          /*style*/
          s[2]
        ]).join(" ")
      },
      o[0] & /*actionProp*/
      65536 && Me(
        /*actionProp*/
        s[16]
      ),
      o[0] & /*defaultProp*/
      32768 && Me(
        /*defaultProp*/
        s[15]
      ),
      o[0] & /*secondaryProp*/
      16384 && Me(
        /*secondaryProp*/
        s[14]
      ),
      o[0] & /*href*/
      128 && { href: (
        /*href*/
        s[7]
      ) },
      o[0] & /*$$restProps*/
      8388608 && Me(
        /*$$restProps*/
        s[23]
      )
    ]))), { props: u };
  }
  return l && (e = Dt(l, a(n)), n[29](e), e.$on(
    "click",
    /*handleClick*/
    n[22]
  )), {
    c() {
      e && ie(e.$$.fragment), t = Xe();
    },
    m(s, o) {
      e && ee(e, s, o), V(s, t, o), i = !0;
    },
    p(s, o) {
      if (o[0] & /*component*/
      512 && l !== (l = /*component*/
      s[9])) {
        if (e) {
          Pe();
          const u = e;
          S(u.$$.fragment, 1, 0, () => {
            te(u, 1);
          }), He();
        }
        l ? (e = Dt(l, a(s, o)), s[29](e), e.$on(
          "click",
          /*handleClick*/
          s[22]
        ), ie(e.$$.fragment), E(e.$$.fragment, 1), ee(e, t.parentNode, t)) : e = null;
      } else if (l) {
        const u = o[0] & /*tag, ripple, color, $$restProps, addClass, removeClass, addStyle, forwardEvents, use, className, variant, touch, context, secondary, internalClasses, internalStyles, style, actionProp, defaultProp, secondaryProp, href*/
        12580351 ? he(r, [
          o[0] & /*tag*/
          1024 && { tag: (
            /*tag*/
            s[10]
          ) },
          o[0] & /*ripple, color, $$restProps, addClass, removeClass, addStyle, forwardEvents, use*/
          12189721 && {
            use: [
              [
                kt,
                {
                  ripple: (
                    /*ripple*/
                    s[3]
                  ),
                  unbounded: !1,
                  color: (
                    /*color*/
                    s[4]
                  ),
                  disabled: !!/*$$restProps*/
                  s[23].disabled,
                  addClass: (
                    /*addClass*/
                    s[19]
                  ),
                  removeClass: (
                    /*removeClass*/
                    s[20]
                  ),
                  addStyle: (
                    /*addStyle*/
                    s[21]
                  )
                }
              ],
              /*forwardEvents*/
              s[17],
              .../*use*/
              s[0]
            ]
          },
          o[0] & /*className, variant, color, touch, context, secondary, internalClasses*/
          266610 && {
            class: le({
              [
                /*className*/
                s[1]
              ]: !0,
              "mdc-button": !0,
              "mdc-button--raised": (
                /*variant*/
                s[5] === "raised"
              ),
              "mdc-button--unelevated": (
                /*variant*/
                s[5] === "unelevated"
              ),
              "mdc-button--outlined": (
                /*variant*/
                s[5] === "outlined"
              ),
              "smui-button--color-secondary": (
                /*color*/
                s[4] === "secondary"
              ),
              "mdc-button--touch": (
                /*touch*/
                s[6]
              ),
              "mdc-card__action": (
                /*context*/
                s[18] === "card:action"
              ),
              "mdc-card__action--button": (
                /*context*/
                s[18] === "card:action"
              ),
              "mdc-dialog__button": (
                /*context*/
                s[18] === "dialog:action"
              ),
              "mdc-top-app-bar__navigation-icon": (
                /*context*/
                s[18] === "top-app-bar:navigation"
              ),
              "mdc-top-app-bar__action-item": (
                /*context*/
                s[18] === "top-app-bar:action"
              ),
              "mdc-snackbar__action": (
                /*context*/
                s[18] === "snackbar:actions"
              ),
              "mdc-banner__secondary-action": (
                /*context*/
                s[18] === "banner" && /*secondary*/
                s[8]
              ),
              "mdc-banner__primary-action": (
                /*context*/
                s[18] === "banner" && !/*secondary*/
                s[8]
              ),
              "mdc-tooltip__action": (
                /*context*/
                s[18] === "tooltip:rich-actions"
              ),
              .../*internalClasses*/
              s[12]
            })
          },
          o[0] & /*internalStyles, style*/
          8196 && {
            style: Object.entries(
              /*internalStyles*/
              s[13]
            ).map(Xi).concat([
              /*style*/
              s[2]
            ]).join(" ")
          },
          o[0] & /*actionProp*/
          65536 && Me(
            /*actionProp*/
            s[16]
          ),
          o[0] & /*defaultProp*/
          32768 && Me(
            /*defaultProp*/
            s[15]
          ),
          o[0] & /*secondaryProp*/
          16384 && Me(
            /*secondaryProp*/
            s[14]
          ),
          o[0] & /*href*/
          128 && { href: (
            /*href*/
            s[7]
          ) },
          o[0] & /*$$restProps*/
          8388608 && Me(
            /*$$restProps*/
            s[23]
          )
        ]) : {};
        o[0] & /*$$scope, touch*/
        1073741888 && (u.$$scope = { dirty: o, ctx: s }), e.$set(u);
      }
    },
    i(s) {
      i || (e && E(e.$$.fragment, s), i = !0);
    },
    o(s) {
      e && S(e.$$.fragment, s), i = !1;
    },
    d(s) {
      s && B(t), n[29](null), e && te(e, s);
    }
  };
}
const Xi = ([n, e]) => `${n}: ${e};`;
function Po(n, e, t) {
  let i, r, l;
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
  let s = pe(e, a), { $$slots: o = {}, $$scope: u } = e;
  const c = nt(Je());
  let { use: d = [] } = e, { class: f = "" } = e, { style: h = "" } = e, { ripple: p = !0 } = e, { color: b = "primary" } = e, { variant: m = "text" } = e, { touch: C = !1 } = e, { href: v = void 0 } = e, { action: T = "close" } = e, { defaultAction: y = !1 } = e, { secondary: k = !1 } = e, R, _ = {}, A = {}, w = Ke("SMUI:button:context"), { component: I = Nt } = e, { tag: g = I === Nt ? v == null ? "button" : "a" : void 0 } = e, D = s.disabled;
  Ve("SMUI:label:context", "button"), Ve("SMUI:icon:context", "button");
  function O(L) {
    _[L] || t(12, _[L] = !0, _);
  }
  function N(L) {
    (!(L in _) || _[L]) && t(12, _[L] = !1, _);
  }
  function W(L, j) {
    A[L] != j && (j === "" || j == null ? (delete A[L], t(13, A)) : t(13, A[L] = j, A));
  }
  function G() {
    w === "banner" && ge(z(), k ? "SMUIBannerButton:secondaryActionClick" : "SMUIBannerButton:primaryActionClick");
  }
  function z() {
    return R.getElement();
  }
  function F(L) {
    se[L ? "unshift" : "push"](() => {
      R = L, t(11, R);
    });
  }
  return n.$$set = (L) => {
    t(31, e = Y(Y({}, e), tt(L))), t(23, s = pe(e, a)), "use" in L && t(0, d = L.use), "class" in L && t(1, f = L.class), "style" in L && t(2, h = L.style), "ripple" in L && t(3, p = L.ripple), "color" in L && t(4, b = L.color), "variant" in L && t(5, m = L.variant), "touch" in L && t(6, C = L.touch), "href" in L && t(7, v = L.href), "action" in L && t(24, T = L.action), "defaultAction" in L && t(25, y = L.defaultAction), "secondary" in L && t(8, k = L.secondary), "component" in L && t(9, I = L.component), "tag" in L && t(10, g = L.tag), "$$scope" in L && t(30, u = L.$$scope);
  }, n.$$.update = () => {
    if (t(16, i = w === "dialog:action" && T != null ? { "data-mdc-dialog-action": T } : { action: e.action }), t(15, r = w === "dialog:action" && y ? { "data-mdc-dialog-button-default": "" } : { default: e.default }), t(14, l = w === "banner" ? {} : { secondary: e.secondary }), D !== s.disabled) {
      if (R) {
        const L = z();
        "blur" in L && L.blur();
      }
      t(27, D = s.disabled);
    }
  }, e = tt(e), [
    d,
    f,
    h,
    p,
    b,
    m,
    C,
    v,
    k,
    I,
    g,
    R,
    _,
    A,
    l,
    r,
    i,
    c,
    w,
    O,
    N,
    W,
    G,
    s,
    T,
    y,
    z,
    D,
    o,
    F,
    u
  ];
}
class Ho extends Re {
  constructor(e) {
    super(), Oe(
      this,
      e,
      Po,
      wo,
      Ee,
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
function Bo(n) {
  let e;
  const t = (
    /*#slots*/
    n[4].default
  ), i = Ie(
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
      32) && Ce(
        i,
        t,
        r,
        /*$$scope*/
        r[5],
        e ? ve(
          t,
          /*$$scope*/
          r[5],
          l,
          null
        ) : Ae(
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
      S(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function Vo(n) {
  let e, t;
  return e = new Ho({
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
      $$slots: { default: [Bo] },
      $$scope: { ctx: n }
    }
  }), e.$on("click", function() {
    me(
      /*callback*/
      n[0]()
    ) && n[0]().apply(this, arguments);
  }), {
    c() {
      ie(e.$$.fragment);
    },
    m(i, r) {
      ee(e, i, r), t = !0;
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
      t || (E(e.$$.fragment, i), t = !0);
    },
    o(i) {
      S(e.$$.fragment, i), t = !1;
    },
    d(i) {
      te(e, i);
    }
  };
}
function jo(n, e, t) {
  let { $$slots: i = {}, $$scope: r } = e, { callback: l = () => {
  } } = e, { disabled: a = !1 } = e, { variant: s = "default" } = e, { isAbortAction: o = !1 } = e;
  return n.$$set = (u) => {
    "callback" in u && t(0, l = u.callback), "disabled" in u && t(1, a = u.disabled), "variant" in u && t(2, s = u.variant), "isAbortAction" in u && t(3, o = u.isAbortAction), "$$scope" in u && t(5, r = u.$$scope);
  }, [l, a, s, o, i, r];
}
class _i extends Re {
  constructor(e) {
    super(), Oe(this, e, jo, Vo, Ee, {
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
var ai = {
  ICON_BUTTON_ON: "mdc-icon-button--on",
  ROOT: "mdc-icon-button"
}, $t = {
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
var Go = (
  /** @class */
  function(n) {
    ct(e, n);
    function e(t) {
      var i = n.call(this, ze(ze({}, e.defaultAdapter), t)) || this;
      return i.hasToggledAriaLabel = !1, i;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return ai;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return $t;
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
      var t = this.adapter.getAttr($t.DATA_ARIA_LABEL_ON), i = this.adapter.getAttr($t.DATA_ARIA_LABEL_OFF);
      if (t && i) {
        if (this.adapter.getAttr($t.ARIA_PRESSED) !== null)
          throw new Error("MDCIconButtonToggleFoundation: Button should not set `aria-pressed` if it has a toggled aria label.");
        this.hasToggledAriaLabel = !0;
      } else
        this.adapter.setAttr($t.ARIA_PRESSED, String(this.isOn()));
    }, e.prototype.handleClick = function() {
      this.toggle(), this.adapter.notifyChange({ isOn: this.isOn() });
    }, e.prototype.isOn = function() {
      return this.adapter.hasClass(ai.ICON_BUTTON_ON);
    }, e.prototype.toggle = function(t) {
      if (t === void 0 && (t = !this.isOn()), t ? this.adapter.addClass(ai.ICON_BUTTON_ON) : this.adapter.removeClass(ai.ICON_BUTTON_ON), this.hasToggledAriaLabel) {
        var i = t ? this.adapter.getAttr($t.DATA_ARIA_LABEL_ON) : this.adapter.getAttr($t.DATA_ARIA_LABEL_OFF);
        this.adapter.setAttr($t.ARIA_LABEL, i || "");
      } else
        this.adapter.setAttr($t.ARIA_PRESSED, "" + t);
    }, e;
  }(Tt)
);
function Br(n) {
  let e;
  return {
    c() {
      e = ne("div"), U(e, "class", "mdc-icon-button__touch");
    },
    m(t, i) {
      V(t, e, i);
    },
    d(t) {
      t && B(e);
    }
  };
}
function qo(n) {
  let e, t, i, r;
  const l = (
    /*#slots*/
    n[33].default
  ), a = Ie(
    l,
    n,
    /*$$scope*/
    n[37],
    null
  );
  let s = (
    /*touch*/
    n[8] && Br()
  );
  return {
    c() {
      e = ne("div"), t = ae(), a && a.c(), s && s.c(), i = Xe(), U(e, "class", "mdc-icon-button__ripple");
    },
    m(o, u) {
      V(o, e, u), V(o, t, u), a && a.m(o, u), s && s.m(o, u), V(o, i, u), r = !0;
    },
    p(o, u) {
      a && a.p && (!r || u[1] & /*$$scope*/
      64) && Ce(
        a,
        l,
        o,
        /*$$scope*/
        o[37],
        r ? ve(
          l,
          /*$$scope*/
          o[37],
          u,
          null
        ) : Ae(
          /*$$scope*/
          o[37]
        ),
        null
      ), /*touch*/
      o[8] ? s || (s = Br(), s.c(), s.m(i.parentNode, i)) : s && (s.d(1), s = null);
    },
    i(o) {
      r || (E(a, o), r = !0);
    },
    o(o) {
      S(a, o), r = !1;
    },
    d(o) {
      o && (B(e), B(t), B(i)), a && a.d(o), s && s.d(o);
    }
  };
}
function Ko(n) {
  let e, t, i;
  const r = [
    { tag: (
      /*tag*/
      n[14]
    ) },
    {
      use: [
        [
          kt,
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
      class: le({
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
      ).map(Zi).concat([
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
  function a(s, o) {
    let u = {
      $$slots: { default: [qo] },
      $$scope: { ctx: s }
    };
    for (let c = 0; c < r.length; c += 1)
      u = Y(u, r[c]);
    return o !== void 0 && o[0] & /*tag, ripple, color, $$restProps, addClass, removeClass, addStyle, forwardEvents, use, className, isUninitializedValue, pressed, touch, displayFlex, size, context, action, internalClasses, internalStyles, style, ariaLabelOn, ariaLabelOff, ariaDescribedby, href, actionProp, internalAttrs*/
    1073504255 && (u = Y(u, he(r, [
      o[0] & /*tag*/
      16384 && { tag: (
        /*tag*/
        s[14]
      ) },
      o[0] & /*ripple, color, $$restProps, addClass, removeClass, addStyle, forwardEvents, use*/
      1010827314 && {
        use: [
          [
            kt,
            {
              ripple: (
                /*ripple*/
                s[4]
              ),
              unbounded: !0,
              color: (
                /*color*/
                s[5]
              ),
              disabled: !!/*$$restProps*/
              s[29].disabled,
              addClass: (
                /*addClass*/
                s[26]
              ),
              removeClass: (
                /*removeClass*/
                s[27]
              ),
              addStyle: (
                /*addStyle*/
                s[28]
              )
            }
          ],
          /*forwardEvents*/
          s[22],
          .../*use*/
          s[1]
        ]
      },
      o[0] & /*className, isUninitializedValue, pressed, touch, displayFlex, size, context, action, internalClasses*/
      25433861 && {
        class: le({
          [
            /*className*/
            s[2]
          ]: !0,
          "mdc-icon-button": !0,
          "mdc-icon-button--on": !/*isUninitializedValue*/
          s[23](
            /*pressed*/
            s[0]
          ) && /*pressed*/
          s[0],
          "mdc-icon-button--touch": (
            /*touch*/
            s[8]
          ),
          "mdc-icon-button--display-flex": (
            /*displayFlex*/
            s[9]
          ),
          "smui-icon-button--size-button": (
            /*size*/
            s[10] === "button"
          ),
          "smui-icon-button--size-mini": (
            /*size*/
            s[10] === "mini"
          ),
          "mdc-icon-button--reduced-size": (
            /*size*/
            s[10] === "mini" || /*size*/
            s[10] === "button"
          ),
          "mdc-card__action": (
            /*context*/
            s[24] === "card:action"
          ),
          "mdc-card__action--icon": (
            /*context*/
            s[24] === "card:action"
          ),
          "mdc-top-app-bar__navigation-icon": (
            /*context*/
            s[24] === "top-app-bar:navigation"
          ),
          "mdc-top-app-bar__action-item": (
            /*context*/
            s[24] === "top-app-bar:action"
          ),
          "mdc-snackbar__dismiss": (
            /*context*/
            s[24] === "snackbar:actions"
          ),
          "mdc-data-table__pagination-button": (
            /*context*/
            s[24] === "data-table:pagination"
          ),
          "mdc-data-table__sort-icon-button": (
            /*context*/
            s[24] === "data-table:sortable-header-cell"
          ),
          "mdc-dialog__close": (
            /*context*/
            (s[24] === "dialog:header" || /*context*/
            s[24] === "dialog:sheet") && /*action*/
            s[12] === "close"
          ),
          .../*internalClasses*/
          s[18]
        })
      },
      o[0] & /*internalStyles, style*/
      524296 && {
        style: Object.entries(
          /*internalStyles*/
          s[19]
        ).map(Zi).concat([
          /*style*/
          s[3]
        ]).join(" ")
      },
      o[0] & /*isUninitializedValue, pressed*/
      8388609 && {
        "aria-pressed": /*isUninitializedValue*/ s[23](
          /*pressed*/
          s[0]
        ) ? null : (
          /*pressed*/
          s[0] ? "true" : "false"
        )
      },
      o[0] & /*pressed, ariaLabelOn, ariaLabelOff*/
      193 && {
        "aria-label": (
          /*pressed*/
          s[0] ? (
            /*ariaLabelOn*/
            s[6]
          ) : (
            /*ariaLabelOff*/
            s[7]
          )
        )
      },
      o[0] & /*ariaLabelOn*/
      64 && {
        "data-aria-label-on": (
          /*ariaLabelOn*/
          s[6]
        )
      },
      o[0] & /*ariaLabelOff*/
      128 && {
        "data-aria-label-off": (
          /*ariaLabelOff*/
          s[7]
        )
      },
      o[0] & /*ariaDescribedby*/
      33554432 && {
        "aria-describedby": (
          /*ariaDescribedby*/
          s[25]
        )
      },
      o[0] & /*href*/
      2048 && { href: (
        /*href*/
        s[11]
      ) },
      o[0] & /*actionProp*/
      2097152 && Me(
        /*actionProp*/
        s[21]
      ),
      o[0] & /*internalAttrs*/
      1048576 && Me(
        /*internalAttrs*/
        s[20]
      ),
      o[0] & /*$$restProps*/
      536870912 && Me(
        /*$$restProps*/
        s[29]
      )
    ]))), { props: u };
  }
  return l && (e = Dt(l, a(n)), n[34](e), e.$on(
    "click",
    /*click_handler*/
    n[35]
  ), e.$on(
    "click",
    /*click_handler_1*/
    n[36]
  )), {
    c() {
      e && ie(e.$$.fragment), t = Xe();
    },
    m(s, o) {
      e && ee(e, s, o), V(s, t, o), i = !0;
    },
    p(s, o) {
      if (o[0] & /*component*/
      8192 && l !== (l = /*component*/
      s[13])) {
        if (e) {
          Pe();
          const u = e;
          S(u.$$.fragment, 1, 0, () => {
            te(u, 1);
          }), He();
        }
        l ? (e = Dt(l, a(s, o)), s[34](e), e.$on(
          "click",
          /*click_handler*/
          s[35]
        ), e.$on(
          "click",
          /*click_handler_1*/
          s[36]
        ), ie(e.$$.fragment), E(e.$$.fragment, 1), ee(e, t.parentNode, t)) : e = null;
      } else if (l) {
        const u = o[0] & /*tag, ripple, color, $$restProps, addClass, removeClass, addStyle, forwardEvents, use, className, isUninitializedValue, pressed, touch, displayFlex, size, context, action, internalClasses, internalStyles, style, ariaLabelOn, ariaLabelOff, ariaDescribedby, href, actionProp, internalAttrs*/
        1073504255 ? he(r, [
          o[0] & /*tag*/
          16384 && { tag: (
            /*tag*/
            s[14]
          ) },
          o[0] & /*ripple, color, $$restProps, addClass, removeClass, addStyle, forwardEvents, use*/
          1010827314 && {
            use: [
              [
                kt,
                {
                  ripple: (
                    /*ripple*/
                    s[4]
                  ),
                  unbounded: !0,
                  color: (
                    /*color*/
                    s[5]
                  ),
                  disabled: !!/*$$restProps*/
                  s[29].disabled,
                  addClass: (
                    /*addClass*/
                    s[26]
                  ),
                  removeClass: (
                    /*removeClass*/
                    s[27]
                  ),
                  addStyle: (
                    /*addStyle*/
                    s[28]
                  )
                }
              ],
              /*forwardEvents*/
              s[22],
              .../*use*/
              s[1]
            ]
          },
          o[0] & /*className, isUninitializedValue, pressed, touch, displayFlex, size, context, action, internalClasses*/
          25433861 && {
            class: le({
              [
                /*className*/
                s[2]
              ]: !0,
              "mdc-icon-button": !0,
              "mdc-icon-button--on": !/*isUninitializedValue*/
              s[23](
                /*pressed*/
                s[0]
              ) && /*pressed*/
              s[0],
              "mdc-icon-button--touch": (
                /*touch*/
                s[8]
              ),
              "mdc-icon-button--display-flex": (
                /*displayFlex*/
                s[9]
              ),
              "smui-icon-button--size-button": (
                /*size*/
                s[10] === "button"
              ),
              "smui-icon-button--size-mini": (
                /*size*/
                s[10] === "mini"
              ),
              "mdc-icon-button--reduced-size": (
                /*size*/
                s[10] === "mini" || /*size*/
                s[10] === "button"
              ),
              "mdc-card__action": (
                /*context*/
                s[24] === "card:action"
              ),
              "mdc-card__action--icon": (
                /*context*/
                s[24] === "card:action"
              ),
              "mdc-top-app-bar__navigation-icon": (
                /*context*/
                s[24] === "top-app-bar:navigation"
              ),
              "mdc-top-app-bar__action-item": (
                /*context*/
                s[24] === "top-app-bar:action"
              ),
              "mdc-snackbar__dismiss": (
                /*context*/
                s[24] === "snackbar:actions"
              ),
              "mdc-data-table__pagination-button": (
                /*context*/
                s[24] === "data-table:pagination"
              ),
              "mdc-data-table__sort-icon-button": (
                /*context*/
                s[24] === "data-table:sortable-header-cell"
              ),
              "mdc-dialog__close": (
                /*context*/
                (s[24] === "dialog:header" || /*context*/
                s[24] === "dialog:sheet") && /*action*/
                s[12] === "close"
              ),
              .../*internalClasses*/
              s[18]
            })
          },
          o[0] & /*internalStyles, style*/
          524296 && {
            style: Object.entries(
              /*internalStyles*/
              s[19]
            ).map(Zi).concat([
              /*style*/
              s[3]
            ]).join(" ")
          },
          o[0] & /*isUninitializedValue, pressed*/
          8388609 && {
            "aria-pressed": /*isUninitializedValue*/ s[23](
              /*pressed*/
              s[0]
            ) ? null : (
              /*pressed*/
              s[0] ? "true" : "false"
            )
          },
          o[0] & /*pressed, ariaLabelOn, ariaLabelOff*/
          193 && {
            "aria-label": (
              /*pressed*/
              s[0] ? (
                /*ariaLabelOn*/
                s[6]
              ) : (
                /*ariaLabelOff*/
                s[7]
              )
            )
          },
          o[0] & /*ariaLabelOn*/
          64 && {
            "data-aria-label-on": (
              /*ariaLabelOn*/
              s[6]
            )
          },
          o[0] & /*ariaLabelOff*/
          128 && {
            "data-aria-label-off": (
              /*ariaLabelOff*/
              s[7]
            )
          },
          o[0] & /*ariaDescribedby*/
          33554432 && {
            "aria-describedby": (
              /*ariaDescribedby*/
              s[25]
            )
          },
          o[0] & /*href*/
          2048 && { href: (
            /*href*/
            s[11]
          ) },
          o[0] & /*actionProp*/
          2097152 && Me(
            /*actionProp*/
            s[21]
          ),
          o[0] & /*internalAttrs*/
          1048576 && Me(
            /*internalAttrs*/
            s[20]
          ),
          o[0] & /*$$restProps*/
          536870912 && Me(
            /*$$restProps*/
            s[29]
          )
        ]) : {};
        o[0] & /*touch*/
        256 | o[1] & /*$$scope*/
        64 && (u.$$scope = { dirty: o, ctx: s }), e.$set(u);
      }
    },
    i(s) {
      i || (e && E(e.$$.fragment, s), i = !0);
    },
    o(s) {
      e && S(e.$$.fragment, s), i = !1;
    },
    d(s) {
      s && B(t), n[34](null), e && te(e, s);
    }
  };
}
const Zi = ([n, e]) => `${n}: ${e};`;
function Wo(n, e, t) {
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
  let l = pe(e, r), { $$slots: a = {}, $$scope: s } = e;
  const o = nt(Je());
  let u = () => {
  };
  function c(q) {
    return q === u;
  }
  let { use: d = [] } = e, { class: f = "" } = e, { style: h = "" } = e, { ripple: p = !0 } = e, { color: b = void 0 } = e, { toggle: m = !1 } = e, { pressed: C = u } = e, { ariaLabelOn: v = void 0 } = e, { ariaLabelOff: T = void 0 } = e, { touch: y = !1 } = e, { displayFlex: k = !0 } = e, { size: R = "normal" } = e, { href: _ = void 0 } = e, { action: A = void 0 } = e, w, I, g = {}, D = {}, O = {}, N = Ke("SMUI:icon-button:context"), W = Ke("SMUI:icon-button:aria-describedby"), { component: G = Nt } = e, { tag: z = G === Nt ? _ == null ? "button" : "a" : void 0 } = e, F = l.disabled;
  Ve("SMUI:icon:context", "icon-button");
  let L = null;
  zt(() => {
    I && I.destroy();
  });
  function j(q) {
    return q in g ? g[q] : _e().classList.contains(q);
  }
  function ue(q) {
    g[q] || t(18, g[q] = !0, g);
  }
  function ke(q) {
    (!(q in g) || g[q]) && t(18, g[q] = !1, g);
  }
  function be(q, We) {
    D[q] != We && (We === "" || We == null ? (delete D[q], t(19, D)) : t(19, D[q] = We, D));
  }
  function Ye(q) {
    var We;
    return q in O ? (We = O[q]) !== null && We !== void 0 ? We : null : _e().getAttribute(q);
  }
  function K(q, We) {
    O[q] !== We && t(20, O[q] = We, O);
  }
  function x(q) {
    t(0, C = q.isOn);
  }
  function _e() {
    return w.getElement();
  }
  function ye(q) {
    se[q ? "unshift" : "push"](() => {
      w = q, t(16, w);
    });
  }
  const Ne = () => I && I.handleClick(), re = () => N === "top-app-bar:navigation" && ge(_e(), "SMUITopAppBarIconButton:nav");
  return n.$$set = (q) => {
    e = Y(Y({}, e), tt(q)), t(29, l = pe(e, r)), "use" in q && t(1, d = q.use), "class" in q && t(2, f = q.class), "style" in q && t(3, h = q.style), "ripple" in q && t(4, p = q.ripple), "color" in q && t(5, b = q.color), "toggle" in q && t(30, m = q.toggle), "pressed" in q && t(0, C = q.pressed), "ariaLabelOn" in q && t(6, v = q.ariaLabelOn), "ariaLabelOff" in q && t(7, T = q.ariaLabelOff), "touch" in q && t(8, y = q.touch), "displayFlex" in q && t(9, k = q.displayFlex), "size" in q && t(10, R = q.size), "href" in q && t(11, _ = q.href), "action" in q && t(12, A = q.action), "component" in q && t(13, G = q.component), "tag" in q && t(14, z = q.tag), "$$scope" in q && t(37, s = q.$$scope);
  }, n.$$.update = () => {
    if (n.$$.dirty[0] & /*action*/
    4096 && t(21, i = (() => {
      if (N === "data-table:pagination")
        switch (A) {
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
        return N === "dialog:header" || N === "dialog:sheet" ? { "data-mdc-dialog-action": A } : { action: A };
    })()), F !== l.disabled) {
      if (w) {
        const q = _e();
        "blur" in q && q.blur();
      }
      t(31, F = l.disabled);
    }
    n.$$.dirty[0] & /*element, toggle, instance*/
    1073938432 | n.$$.dirty[1] & /*oldToggle*/
    2 && w && _e() && m !== L && (m && !I ? (t(17, I = new Go({
      addClass: ue,
      hasClass: j,
      notifyChange: (q) => {
        x(q), ge(_e(), "SMUIIconButtonToggle:change", q, void 0, !0);
      },
      removeClass: ke,
      getAttr: Ye,
      setAttr: K
    })), I.init()) : !m && I && (I.destroy(), t(17, I = void 0), t(18, g = {}), t(20, O = {})), t(32, L = m)), n.$$.dirty[0] & /*instance, pressed*/
    131073 && I && !c(C) && I.isOn() !== C && I.toggle(C);
  }, [
    C,
    d,
    f,
    h,
    p,
    b,
    v,
    T,
    y,
    k,
    R,
    _,
    A,
    G,
    z,
    _e,
    w,
    I,
    g,
    D,
    O,
    i,
    o,
    c,
    N,
    W,
    ue,
    ke,
    be,
    l,
    m,
    F,
    L,
    a,
    ye,
    Ne,
    re,
    s
  ];
}
class zo extends Re {
  constructor(e) {
    super(), Oe(
      this,
      e,
      Wo,
      Ko,
      Ee,
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
function Yo(n) {
  let e;
  return {
    c() {
      e = at(
        /*icon*/
        n[1]
      );
    },
    m(t, i) {
      V(t, e, i);
    },
    p(t, i) {
      i & /*icon*/
      2 && At(
        e,
        /*icon*/
        t[1]
      );
    },
    i: $e,
    o: $e,
    d(t) {
      t && B(e);
    }
  };
}
function Xo(n) {
  let e, t, i;
  var r = (
    /*iconComponent*/
    n[2]
  );
  function l(a, s) {
    return {
      props: { svgStyles: (
        /*iconStyles*/
        a[3]
      ) }
    };
  }
  return r && (e = Dt(r, l(n))), {
    c() {
      e && ie(e.$$.fragment), t = Xe();
    },
    m(a, s) {
      e && ee(e, a, s), V(a, t, s), i = !0;
    },
    p(a, s) {
      if (s & /*iconComponent*/
      4 && r !== (r = /*iconComponent*/
      a[2])) {
        if (e) {
          Pe();
          const o = e;
          S(o.$$.fragment, 1, 0, () => {
            te(o, 1);
          }), He();
        }
        r ? (e = Dt(r, l(a)), ie(e.$$.fragment), E(e.$$.fragment, 1), ee(e, t.parentNode, t)) : e = null;
      } else if (r) {
        const o = {};
        s & /*iconStyles*/
        8 && (o.svgStyles = /*iconStyles*/
        a[3]), e.$set(o);
      }
    },
    i(a) {
      i || (e && E(e.$$.fragment, a), i = !0);
    },
    o(a) {
      e && S(e.$$.fragment, a), i = !1;
    },
    d(a) {
      a && B(t), e && te(e, a);
    }
  };
}
function Zo(n) {
  let e, t, i, r;
  const l = [Xo, Yo], a = [];
  function s(o, u) {
    return (
      /*iconComponent*/
      o[2] ? 0 : 1
    );
  }
  return e = s(n), t = a[e] = l[e](n), {
    c() {
      t.c(), i = Xe();
    },
    m(o, u) {
      a[e].m(o, u), V(o, i, u), r = !0;
    },
    p(o, u) {
      let c = e;
      e = s(o), e === c ? a[e].p(o, u) : (Pe(), S(a[c], 1, 1, () => {
        a[c] = null;
      }), He(), t = a[e], t ? t.p(o, u) : (t = a[e] = l[e](o), t.c()), E(t, 1), t.m(i.parentNode, i));
    },
    i(o) {
      r || (E(t), r = !0);
    },
    o(o) {
      S(t), r = !1;
    },
    d(o) {
      o && B(i), a[e].d(o);
    }
  };
}
function Qo(n) {
  let e, t;
  return e = new zo({
    props: {
      class: "material-icons",
      disabled: (
        /*disabled*/
        n[4]
      ),
      style: "margin-bottom: 0;",
      $$slots: { default: [Zo] },
      $$scope: { ctx: n }
    }
  }), e.$on("click", function() {
    me(
      /*callback*/
      n[0]
    ) && n[0].apply(this, arguments);
  }), {
    c() {
      ie(e.$$.fragment);
    },
    m(i, r) {
      ee(e, i, r), t = !0;
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
      t || (E(e.$$.fragment, i), t = !0);
    },
    o(i) {
      S(e.$$.fragment, i), t = !1;
    },
    d(i) {
      te(e, i);
    }
  };
}
function Jo(n, e, t) {
  let { callback: i = () => {
  } } = e, { icon: r = "" } = e, { iconComponent: l = null } = e, { iconStyles: a = "" } = e, { disabled: s = !1 } = e;
  return n.$$set = (o) => {
    "callback" in o && t(0, i = o.callback), "icon" in o && t(1, r = o.icon), "iconComponent" in o && t(2, l = o.iconComponent), "iconStyles" in o && t(3, a = o.iconStyles), "disabled" in o && t(4, s = o.disabled);
  }, [i, r, l, a, s];
}
class xo extends Re {
  constructor(e) {
    super(), Oe(this, e, Jo, Qo, Ee, {
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
var $o = {
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
var eu = (
  /** @class */
  function(n) {
    ct(e, n);
    function e(t) {
      var i = n.call(this, ze(ze({}, e.defaultAdapter), t)) || this;
      return i.shakeAnimationEndHandler = function() {
        i.handleShakeAnimationEnd();
      }, i;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return $o;
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
  }(Tt)
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
var mn = {
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
var tu = (
  /** @class */
  function(n) {
    ct(e, n);
    function e(t) {
      var i = n.call(this, ze(ze({}, e.defaultAdapter), t)) || this;
      return i.transitionEndHandler = function(r) {
        i.handleTransitionEnd(r);
      }, i;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return mn;
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
      this.adapter.removeClass(mn.LINE_RIPPLE_DEACTIVATING), this.adapter.addClass(mn.LINE_RIPPLE_ACTIVE);
    }, e.prototype.setRippleCenter = function(t) {
      this.adapter.setStyle("transform-origin", t + "px center");
    }, e.prototype.deactivate = function() {
      this.adapter.addClass(mn.LINE_RIPPLE_DEACTIVATING);
    }, e.prototype.handleTransitionEnd = function(t) {
      var i = this.adapter.hasClass(mn.LINE_RIPPLE_DEACTIVATING);
      t.propertyName === "opacity" && i && (this.adapter.removeClass(mn.LINE_RIPPLE_ACTIVE), this.adapter.removeClass(mn.LINE_RIPPLE_DEACTIVATING));
    }, e;
  }(Tt)
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
var nu = {
  NOTCH_ELEMENT_SELECTOR: ".mdc-notched-outline__notch"
}, Vr = {
  // This should stay in sync with $mdc-notched-outline-padding * 2.
  NOTCH_ELEMENT_PADDING: 8
}, iu = {
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
var ru = (
  /** @class */
  function(n) {
    ct(e, n);
    function e(t) {
      return n.call(this, ze(ze({}, e.defaultAdapter), t)) || this;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return nu;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return iu;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return Vr;
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
      t > 0 && (t += Vr.NOTCH_ELEMENT_PADDING), this.adapter.setNotchWidthProperty(t), this.adapter.addClass(i);
    }, e.prototype.closeNotch = function() {
      var t = e.cssClasses.OUTLINE_NOTCHED;
      this.adapter.removeClass(t), this.adapter.removeNotchWidthProperty();
    }, e;
  }(Tt)
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
var Qi = {
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
}, lu = {
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
}, jr = {
  LABEL_SCALE: 0.75
}, su = [
  "pattern",
  "min",
  "max",
  "required",
  "step",
  "minlength",
  "maxlength"
], au = [
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
var Gr = ["mousedown", "touchstart"], qr = ["click", "keydown"], ou = (
  /** @class */
  function(n) {
    ct(e, n);
    function e(t, i) {
      i === void 0 && (i = {});
      var r = n.call(this, ze(ze({}, e.defaultAdapter), t)) || this;
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
        return lu;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Qi;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return jr;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "shouldAlwaysFloat", {
      get: function() {
        var t = this.getNativeInput().type;
        return au.indexOf(t) >= 0;
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
        for (var a = St(Gr), s = a.next(); !s.done; s = a.next()) {
          var o = s.value;
          this.adapter.registerInputInteractionHandler(o, this.setPointerXOffset);
        }
      } catch (d) {
        t = { error: d };
      } finally {
        try {
          s && !s.done && (i = a.return) && i.call(a);
        } finally {
          if (t)
            throw t.error;
        }
      }
      try {
        for (var u = St(qr), c = u.next(); !c.done; c = u.next()) {
          var o = c.value;
          this.adapter.registerTextFieldInteractionHandler(o, this.textFieldInteractionHandler);
        }
      } catch (d) {
        r = { error: d };
      } finally {
        try {
          c && !c.done && (l = u.return) && l.call(u);
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
        for (var a = St(Gr), s = a.next(); !s.done; s = a.next()) {
          var o = s.value;
          this.adapter.deregisterInputInteractionHandler(o, this.setPointerXOffset);
        }
      } catch (d) {
        t = { error: d };
      } finally {
        try {
          s && !s.done && (i = a.return) && i.call(a);
        } finally {
          if (t)
            throw t.error;
        }
      }
      try {
        for (var u = St(qr), c = u.next(); !c.done; c = u.next()) {
          var o = c.value;
          this.adapter.deregisterTextFieldInteractionHandler(o, this.textFieldInteractionHandler);
        }
      } catch (d) {
        r = { error: d };
      } finally {
        try {
          c && !c.done && (l = u.return) && l.call(u);
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
        return su.indexOf(r) > -1 ? (i.styleValidity(!0), i.adapter.setLabelRequired(i.getNativeInput().required), !0) : !1;
      }), t.indexOf("maxlength") > -1 && this.setcharacterCounter(this.getValue().length);
    }, e.prototype.notchOutline = function(t) {
      if (!(!this.adapter.hasOutline() || !this.adapter.hasLabel()))
        if (t) {
          var i = this.adapter.getLabelWidth() * jr.LABEL_SCALE;
          this.adapter.notchOutline(i);
        } else
          this.adapter.closeOutline();
    }, e.prototype.activateFocus = function() {
      this.isFocused = !0, this.styleFocused(this.isFocused), this.adapter.activateLineRipple(), this.adapter.hasLabel() && (this.notchOutline(this.shouldFloat), this.adapter.floatLabel(this.shouldFloat), this.styleFloating(this.shouldFloat), this.adapter.shakeLabel(this.shouldShake)), this.helperText && (this.helperText.isPersistent() || !this.helperText.isValidation() || !this.valid) && this.helperText.showToScreenReader();
    }, e.prototype.setTransformOrigin = function(t) {
      if (!(this.isDisabled() || this.adapter.hasOutline())) {
        var i = t.touches, r = i ? i[0] : t, l = r.target.getBoundingClientRect(), a = r.clientX - l.left;
        this.adapter.setLineRippleTransformOrigin(a);
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
        var l = this.helperText.isVisible(), a = this.helperText.getId();
        l && a ? this.adapter.setInputAttr(Qi.ARIA_DESCRIBEDBY, a) : this.adapter.removeInputAttr(Qi.ARIA_DESCRIBEDBY);
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
  }(Tt)
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
var Kr = {
  ICON_EVENT: "MDCTextField:icon",
  ICON_ROLE: "button"
}, uu = {
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
var Wr = ["click", "keydown"], cu = (
  /** @class */
  function(n) {
    ct(e, n);
    function e(t) {
      var i = n.call(this, ze(ze({}, e.defaultAdapter), t)) || this;
      return i.savedTabIndex = null, i.interactionHandler = function(r) {
        i.handleInteraction(r);
      }, i;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return Kr;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return uu;
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
        for (var r = St(Wr), l = r.next(); !l.done; l = r.next()) {
          var a = l.value;
          this.adapter.registerInteractionHandler(a, this.interactionHandler);
        }
      } catch (s) {
        t = { error: s };
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
        for (var r = St(Wr), l = r.next(); !l.done; l = r.next()) {
          var a = l.value;
          this.adapter.deregisterInteractionHandler(a, this.interactionHandler);
        }
      } catch (s) {
        t = { error: s };
      } finally {
        try {
          l && !l.done && (i = r.return) && i.call(r);
        } finally {
          if (t)
            throw t.error;
        }
      }
    }, e.prototype.setDisabled = function(t) {
      this.savedTabIndex && (t ? (this.adapter.setAttr("tabindex", "-1"), this.adapter.removeAttr("role")) : (this.adapter.setAttr("tabindex", this.savedTabIndex), this.adapter.setAttr("role", Kr.ICON_ROLE)));
    }, e.prototype.setAriaLabel = function(t) {
      this.adapter.setAttr("aria-label", t);
    }, e.prototype.setContent = function(t) {
      this.adapter.setContent(t);
    }, e.prototype.handleInteraction = function(t) {
      var i = t.key === "Enter" || t.keyCode === 13;
      (t.type === "click" || i) && (t.preventDefault(), this.adapter.notifyIconAction());
    }, e;
  }(Tt)
);
function du(n) {
  let e, t, i, r, l, a, s, o;
  const u = (
    /*#slots*/
    n[22].default
  ), c = Ie(
    u,
    n,
    /*$$scope*/
    n[21],
    null
  );
  let d = [
    {
      class: t = le({
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
      ).map(Yr).concat([
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
  ], f = {};
  for (let h = 0; h < d.length; h += 1)
    f = Y(f, d[h]);
  return {
    c() {
      e = ne("label"), c && c.c(), ce(e, f);
    },
    m(h, p) {
      V(h, e, p), c && c.m(e, null), n[24](e), a = !0, s || (o = [
        fe(l = Qe.call(
          null,
          e,
          /*use*/
          n[2]
        )),
        fe(
          /*forwardEvents*/
          n[10].call(null, e)
        )
      ], s = !0);
    },
    p(h, p) {
      c && c.p && (!a || p & /*$$scope*/
      2097152) && Ce(
        c,
        u,
        h,
        /*$$scope*/
        h[21],
        a ? ve(
          u,
          /*$$scope*/
          h[21],
          p,
          null
        ) : Ae(
          /*$$scope*/
          h[21]
        ),
        null
      ), ce(e, f = he(d, [
        (!a || p & /*className, floatAbove, required, internalClasses*/
        267 && t !== (t = le({
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
        }))) && { class: t },
        (!a || p & /*internalStyles, style*/
        528 && i !== (i = Object.entries(
          /*internalStyles*/
          h[9]
        ).map(Yr).concat([
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
      ])), l && me(l.update) && p & /*use*/
      4 && l.update.call(
        null,
        /*use*/
        h[2]
      );
    },
    i(h) {
      a || (E(c, h), a = !0);
    },
    o(h) {
      S(c, h), a = !1;
    },
    d(h) {
      h && B(e), c && c.d(h), n[24](null), s = !1, Ze(o);
    }
  };
}
function fu(n) {
  let e, t, i, r, l, a, s;
  const o = (
    /*#slots*/
    n[22].default
  ), u = Ie(
    o,
    n,
    /*$$scope*/
    n[21],
    null
  );
  let c = [
    {
      class: t = le({
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
      ).map(zr).concat([
        /*style*/
        n[4]
      ]).join(" ")
    },
    /*$$restProps*/
    n[12]
  ], d = {};
  for (let f = 0; f < c.length; f += 1)
    d = Y(d, c[f]);
  return {
    c() {
      e = ne("span"), u && u.c(), ce(e, d);
    },
    m(f, h) {
      V(f, e, h), u && u.m(e, null), n[23](e), l = !0, a || (s = [
        fe(r = Qe.call(
          null,
          e,
          /*use*/
          n[2]
        )),
        fe(
          /*forwardEvents*/
          n[10].call(null, e)
        )
      ], a = !0);
    },
    p(f, h) {
      u && u.p && (!l || h & /*$$scope*/
      2097152) && Ce(
        u,
        o,
        f,
        /*$$scope*/
        f[21],
        l ? ve(
          o,
          /*$$scope*/
          f[21],
          h,
          null
        ) : Ae(
          /*$$scope*/
          f[21]
        ),
        null
      ), ce(e, d = he(c, [
        (!l || h & /*className, floatAbove, required, internalClasses*/
        267 && t !== (t = le({
          [
            /*className*/
            f[3]
          ]: !0,
          "mdc-floating-label": !0,
          "mdc-floating-label--float-above": (
            /*floatAbove*/
            f[0]
          ),
          "mdc-floating-label--required": (
            /*required*/
            f[1]
          ),
          .../*internalClasses*/
          f[8]
        }))) && { class: t },
        (!l || h & /*internalStyles, style*/
        528 && i !== (i = Object.entries(
          /*internalStyles*/
          f[9]
        ).map(zr).concat([
          /*style*/
          f[4]
        ]).join(" "))) && { style: i },
        h & /*$$restProps*/
        4096 && /*$$restProps*/
        f[12]
      ])), r && me(r.update) && h & /*use*/
      4 && r.update.call(
        null,
        /*use*/
        f[2]
      );
    },
    i(f) {
      l || (E(u, f), l = !0);
    },
    o(f) {
      S(u, f), l = !1;
    },
    d(f) {
      f && B(e), u && u.d(f), n[23](null), a = !1, Ze(s);
    }
  };
}
function hu(n) {
  let e, t, i, r;
  const l = [fu, du], a = [];
  function s(o, u) {
    return (
      /*wrapped*/
      o[6] ? 0 : 1
    );
  }
  return e = s(n), t = a[e] = l[e](n), {
    c() {
      t.c(), i = Xe();
    },
    m(o, u) {
      a[e].m(o, u), V(o, i, u), r = !0;
    },
    p(o, [u]) {
      let c = e;
      e = s(o), e === c ? a[e].p(o, u) : (Pe(), S(a[c], 1, 1, () => {
        a[c] = null;
      }), He(), t = a[e], t ? t.p(o, u) : (t = a[e] = l[e](o), t.c()), E(t, 1), t.m(i.parentNode, i));
    },
    i(o) {
      r || (E(t), r = !0);
    },
    o(o) {
      S(t), r = !1;
    },
    d(o) {
      o && B(i), a[e].d(o);
    }
  };
}
const zr = ([n, e]) => `${n}: ${e};`, Yr = ([n, e]) => `${n}: ${e};`;
function mu(n, e, t) {
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
  let r = pe(e, i), { $$slots: l = {}, $$scope: a } = e;
  var s;
  const o = nt(Je());
  let { use: u = [] } = e, { class: c = "" } = e, { style: d = "" } = e, { for: f = void 0 } = e, { floatAbove: h = !1 } = e, { required: p = !1 } = e, { wrapped: b = !1 } = e, m, C, v = {}, T = {}, y = (s = Ke("SMUI:generic:input:props")) !== null && s !== void 0 ? s : {}, k = h, R = p;
  ot(() => {
    t(18, C = new eu({
      addClass: _,
      removeClass: A,
      getWidth: () => {
        var L, j;
        const ue = W(), ke = ue.cloneNode(!0);
        (L = ue.parentNode) === null || L === void 0 || L.appendChild(ke), ke.classList.add("smui-floating-label--remove-transition"), ke.classList.add("smui-floating-label--force-size"), ke.classList.remove("mdc-floating-label--float-above");
        const be = ke.scrollWidth;
        return (j = ue.parentNode) === null || j === void 0 || j.removeChild(ke), be;
      },
      registerInteractionHandler: (L, j) => W().addEventListener(L, j),
      deregisterInteractionHandler: (L, j) => W().removeEventListener(L, j)
    }));
    const F = {
      get element() {
        return W();
      },
      addStyle: w,
      removeStyle: I
    };
    return ge(m, "SMUIFloatingLabel:mount", F), C.init(), () => {
      ge(m, "SMUIFloatingLabel:unmount", F), C.destroy();
    };
  });
  function _(F) {
    v[F] || t(8, v[F] = !0, v);
  }
  function A(F) {
    (!(F in v) || v[F]) && t(8, v[F] = !1, v);
  }
  function w(F, L) {
    T[F] != L && (L === "" || L == null ? (delete T[F], t(9, T)) : t(9, T[F] = L, T));
  }
  function I(F) {
    F in T && (delete T[F], t(9, T));
  }
  function g(F) {
    C.shake(F);
  }
  function D(F) {
    t(0, h = F);
  }
  function O(F) {
    t(1, p = F);
  }
  function N() {
    return C.getWidth();
  }
  function W() {
    return m;
  }
  function G(F) {
    se[F ? "unshift" : "push"](() => {
      m = F, t(7, m);
    });
  }
  function z(F) {
    se[F ? "unshift" : "push"](() => {
      m = F, t(7, m);
    });
  }
  return n.$$set = (F) => {
    e = Y(Y({}, e), tt(F)), t(12, r = pe(e, i)), "use" in F && t(2, u = F.use), "class" in F && t(3, c = F.class), "style" in F && t(4, d = F.style), "for" in F && t(5, f = F.for), "floatAbove" in F && t(0, h = F.floatAbove), "required" in F && t(1, p = F.required), "wrapped" in F && t(6, b = F.wrapped), "$$scope" in F && t(21, a = F.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty & /*instance, previousFloatAbove, floatAbove*/
    786433 && C && k !== h && (t(19, k = h), C.float(h)), n.$$.dirty & /*instance, previousRequired, required*/
    1310722 && C && R !== p && (t(20, R = p), C.setRequired(p));
  }, [
    h,
    p,
    u,
    c,
    d,
    f,
    b,
    m,
    v,
    T,
    o,
    y,
    r,
    g,
    D,
    O,
    N,
    W,
    C,
    k,
    R,
    a,
    l,
    G,
    z
  ];
}
class bi extends Re {
  constructor(e) {
    super(), Oe(this, e, mu, hu, Ee, {
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
function pu(n) {
  let e, t, i, r, l, a, s = [
    {
      class: t = le({
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
      ).map(Xr).concat([
        /*style*/
        n[2]
      ]).join(" ")
    },
    /*$$restProps*/
    n[8]
  ], o = {};
  for (let u = 0; u < s.length; u += 1)
    o = Y(o, s[u]);
  return {
    c() {
      e = ne("div"), ce(e, o);
    },
    m(u, c) {
      V(u, e, c), n[13](e), l || (a = [
        fe(r = Qe.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        fe(
          /*forwardEvents*/
          n[7].call(null, e)
        )
      ], l = !0);
    },
    p(u, [c]) {
      ce(e, o = he(s, [
        c & /*className, active, internalClasses*/
        42 && t !== (t = le({
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
        68 && i !== (i = Object.entries(
          /*internalStyles*/
          u[6]
        ).map(Xr).concat([
          /*style*/
          u[2]
        ]).join(" ")) && { style: i },
        c & /*$$restProps*/
        256 && /*$$restProps*/
        u[8]
      ])), r && me(r.update) && c & /*use*/
      1 && r.update.call(
        null,
        /*use*/
        u[0]
      );
    },
    i: $e,
    o: $e,
    d(u) {
      u && B(e), n[13](null), l = !1, Ze(a);
    }
  };
}
const Xr = ([n, e]) => `${n}: ${e};`;
function gu(n, e, t) {
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
  const l = nt(Je());
  let { use: a = [] } = e, { class: s = "" } = e, { style: o = "" } = e, { active: u = !1 } = e, c, d, f = {}, h = {};
  ot(() => (d = new tu({
    addClass: b,
    removeClass: m,
    hasClass: p,
    setStyle: C,
    registerEventHandler: (_, A) => k().addEventListener(_, A),
    deregisterEventHandler: (_, A) => k().removeEventListener(_, A)
  }), d.init(), () => {
    d.destroy();
  }));
  function p(_) {
    return _ in f ? f[_] : k().classList.contains(_);
  }
  function b(_) {
    f[_] || t(5, f[_] = !0, f);
  }
  function m(_) {
    (!(_ in f) || f[_]) && t(5, f[_] = !1, f);
  }
  function C(_, A) {
    h[_] != A && (A === "" || A == null ? (delete h[_], t(6, h)) : t(6, h[_] = A, h));
  }
  function v() {
    d.activate();
  }
  function T() {
    d.deactivate();
  }
  function y(_) {
    d.setRippleCenter(_);
  }
  function k() {
    return c;
  }
  function R(_) {
    se[_ ? "unshift" : "push"](() => {
      c = _, t(4, c);
    });
  }
  return n.$$set = (_) => {
    e = Y(Y({}, e), tt(_)), t(8, r = pe(e, i)), "use" in _ && t(0, a = _.use), "class" in _ && t(1, s = _.class), "style" in _ && t(2, o = _.style), "active" in _ && t(3, u = _.active);
  }, [
    a,
    s,
    o,
    u,
    c,
    f,
    h,
    l,
    r,
    v,
    T,
    y,
    k,
    R
  ];
}
class sa extends Re {
  constructor(e) {
    super(), Oe(this, e, gu, pu, Ee, {
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
function Zr(n) {
  let e, t, i;
  const r = (
    /*#slots*/
    n[15].default
  ), l = Ie(
    r,
    n,
    /*$$scope*/
    n[14],
    null
  );
  return {
    c() {
      e = ne("div"), l && l.c(), U(e, "class", "mdc-notched-outline__notch"), U(e, "style", t = Object.entries(
        /*notchStyles*/
        n[7]
      ).map(Qr).join(" "));
    },
    m(a, s) {
      V(a, e, s), l && l.m(e, null), i = !0;
    },
    p(a, s) {
      l && l.p && (!i || s & /*$$scope*/
      16384) && Ce(
        l,
        r,
        a,
        /*$$scope*/
        a[14],
        i ? ve(
          r,
          /*$$scope*/
          a[14],
          s,
          null
        ) : Ae(
          /*$$scope*/
          a[14]
        ),
        null
      ), (!i || s & /*notchStyles*/
      128 && t !== (t = Object.entries(
        /*notchStyles*/
        a[7]
      ).map(Qr).join(" "))) && U(e, "style", t);
    },
    i(a) {
      i || (E(l, a), i = !0);
    },
    o(a) {
      S(l, a), i = !1;
    },
    d(a) {
      a && B(e), l && l.d(a);
    }
  };
}
function _u(n) {
  let e, t, i, r, l, a, s, o, u, c, d = !/*noLabel*/
  n[3] && Zr(n), f = [
    {
      class: a = le({
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
  ], h = {};
  for (let p = 0; p < f.length; p += 1)
    h = Y(h, f[p]);
  return {
    c() {
      e = ne("div"), t = ne("div"), i = ae(), d && d.c(), r = ae(), l = ne("div"), U(t, "class", "mdc-notched-outline__leading"), U(l, "class", "mdc-notched-outline__trailing"), ce(e, h);
    },
    m(p, b) {
      V(p, e, b), J(e, t), J(e, i), d && d.m(e, null), J(e, r), J(e, l), n[16](e), o = !0, u || (c = [
        fe(s = Qe.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        fe(
          /*forwardEvents*/
          n[8].call(null, e)
        ),
        oe(
          e,
          "SMUIFloatingLabel:mount",
          /*handleFloatingLabelMount*/
          n[9]
        ),
        oe(
          e,
          "SMUIFloatingLabel:unmount",
          /*SMUIFloatingLabel_unmount_handler*/
          n[17]
        )
      ], u = !0);
    },
    p(p, [b]) {
      /*noLabel*/
      p[3] ? d && (Pe(), S(d, 1, 1, () => {
        d = null;
      }), He()) : d ? (d.p(p, b), b & /*noLabel*/
      8 && E(d, 1)) : (d = Zr(p), d.c(), E(d, 1), d.m(e, r)), ce(e, h = he(f, [
        (!o || b & /*className, notched, noLabel, internalClasses*/
        78 && a !== (a = le({
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
        b & /*$$restProps*/
        1024 && /*$$restProps*/
        p[10]
      ])), s && me(s.update) && b & /*use*/
      1 && s.update.call(
        null,
        /*use*/
        p[0]
      );
    },
    i(p) {
      o || (E(d), o = !0);
    },
    o(p) {
      S(d), o = !1;
    },
    d(p) {
      p && B(e), d && d.d(), n[16](null), u = !1, Ze(c);
    }
  };
}
const Qr = ([n, e]) => `${n}: ${e};`;
function bu(n, e, t) {
  const i = ["use", "class", "notched", "noLabel", "notch", "closeNotch", "getElement"];
  let r = pe(e, i), { $$slots: l = {}, $$scope: a } = e;
  const s = nt(Je());
  let { use: o = [] } = e, { class: u = "" } = e, { notched: c = !1 } = e, { noLabel: d = !1 } = e, f, h, p, b = {}, m = {};
  ot(() => (h = new ru({
    addClass: v,
    removeClass: T,
    setNotchWidthProperty: (g) => y("width", g + "px"),
    removeNotchWidthProperty: () => k("width")
  }), h.init(), () => {
    h.destroy();
  }));
  function C(g) {
    t(4, p = g.detail);
  }
  function v(g) {
    b[g] || t(6, b[g] = !0, b);
  }
  function T(g) {
    (!(g in b) || b[g]) && t(6, b[g] = !1, b);
  }
  function y(g, D) {
    m[g] != D && (D === "" || D == null ? (delete m[g], t(7, m)) : t(7, m[g] = D, m));
  }
  function k(g) {
    g in m && (delete m[g], t(7, m));
  }
  function R(g) {
    h.notch(g);
  }
  function _() {
    h.closeNotch();
  }
  function A() {
    return f;
  }
  function w(g) {
    se[g ? "unshift" : "push"](() => {
      f = g, t(5, f);
    });
  }
  const I = () => t(4, p = void 0);
  return n.$$set = (g) => {
    e = Y(Y({}, e), tt(g)), t(10, r = pe(e, i)), "use" in g && t(0, o = g.use), "class" in g && t(1, u = g.class), "notched" in g && t(2, c = g.notched), "noLabel" in g && t(3, d = g.noLabel), "$$scope" in g && t(14, a = g.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty & /*floatingLabel*/
    16 && (p ? (p.addStyle("transition-duration", "0s"), v("mdc-notched-outline--upgraded"), requestAnimationFrame(() => {
      p && p.removeStyle("transition-duration");
    })) : T("mdc-notched-outline--upgraded"));
  }, [
    o,
    u,
    c,
    d,
    p,
    f,
    b,
    m,
    s,
    C,
    r,
    R,
    _,
    A,
    a,
    l,
    w,
    I
  ];
}
class aa extends Re {
  constructor(e) {
    super(), Oe(this, e, bu, _u, Ee, {
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
function Iu(n) {
  let e;
  const t = (
    /*#slots*/
    n[11].default
  ), i = Ie(
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
      8192) && Ce(
        i,
        t,
        r,
        /*$$scope*/
        r[13],
        e ? ve(
          t,
          /*$$scope*/
          r[13],
          l,
          null
        ) : Ae(
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
      S(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function vu(n) {
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
      class: le({
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
  function a(s, o) {
    let u = {
      $$slots: { default: [Iu] },
      $$scope: { ctx: s }
    };
    for (let c = 0; c < r.length; c += 1)
      u = Y(u, r[c]);
    return o !== void 0 && o & /*tag, forwardEvents, use, className, smuiClass, smuiClassMap, props, $$restProps*/
    1003 && (u = Y(u, he(r, [
      o & /*tag*/
      8 && { tag: (
        /*tag*/
        s[3]
      ) },
      o & /*forwardEvents, use*/
      257 && {
        use: [
          /*forwardEvents*/
          s[8],
          .../*use*/
          s[0]
        ]
      },
      o & /*className, smuiClass, smuiClassMap*/
      98 && {
        class: le({
          [
            /*className*/
            s[1]
          ]: !0,
          [
            /*smuiClass*/
            s[6]
          ]: !0,
          .../*smuiClassMap*/
          s[5]
        })
      },
      o & /*props*/
      128 && Me(
        /*props*/
        s[7]
      ),
      o & /*$$restProps*/
      512 && Me(
        /*$$restProps*/
        s[9]
      )
    ]))), { props: u };
  }
  return l && (e = Dt(l, a(n)), n[12](e)), {
    c() {
      e && ie(e.$$.fragment), t = Xe();
    },
    m(s, o) {
      e && ee(e, s, o), V(s, t, o), i = !0;
    },
    p(s, [o]) {
      if (o & /*component*/
      4 && l !== (l = /*component*/
      s[2])) {
        if (e) {
          Pe();
          const u = e;
          S(u.$$.fragment, 1, 0, () => {
            te(u, 1);
          }), He();
        }
        l ? (e = Dt(l, a(s, o)), s[12](e), ie(e.$$.fragment), E(e.$$.fragment, 1), ee(e, t.parentNode, t)) : e = null;
      } else if (l) {
        const u = o & /*tag, forwardEvents, use, className, smuiClass, smuiClassMap, props, $$restProps*/
        1003 ? he(r, [
          o & /*tag*/
          8 && { tag: (
            /*tag*/
            s[3]
          ) },
          o & /*forwardEvents, use*/
          257 && {
            use: [
              /*forwardEvents*/
              s[8],
              .../*use*/
              s[0]
            ]
          },
          o & /*className, smuiClass, smuiClassMap*/
          98 && {
            class: le({
              [
                /*className*/
                s[1]
              ]: !0,
              [
                /*smuiClass*/
                s[6]
              ]: !0,
              .../*smuiClassMap*/
              s[5]
            })
          },
          o & /*props*/
          128 && Me(
            /*props*/
            s[7]
          ),
          o & /*$$restProps*/
          512 && Me(
            /*$$restProps*/
            s[9]
          )
        ]) : {};
        o & /*$$scope*/
        8192 && (u.$$scope = { dirty: o, ctx: s }), e.$set(u);
      }
    },
    i(s) {
      i || (e && E(e.$$.fragment, s), i = !0);
    },
    o(s) {
      e && S(e.$$.fragment, s), i = !1;
    },
    d(s) {
      s && B(t), n[12](null), e && te(e, s);
    }
  };
}
const rn = {
  component: Nt,
  tag: "div",
  class: "",
  classMap: {},
  contexts: {},
  props: {}
};
function Cu(n, e, t) {
  const i = ["use", "class", "component", "tag", "getElement"];
  let r = pe(e, i), { $$slots: l = {}, $$scope: a } = e, { use: s = [] } = e, { class: o = "" } = e, u;
  const c = rn.class, d = {}, f = [], h = rn.contexts, p = rn.props;
  let { component: b = rn.component } = e, { tag: m = b === Nt ? rn.tag : void 0 } = e;
  Object.entries(rn.classMap).forEach(([y, k]) => {
    const R = Ke(k);
    R && "subscribe" in R && f.push(R.subscribe((_) => {
      t(5, d[y] = _, d);
    }));
  });
  const C = nt(Je());
  for (let y in h)
    h.hasOwnProperty(y) && Ve(y, h[y]);
  zt(() => {
    for (const y of f)
      y();
  });
  function v() {
    return u.getElement();
  }
  function T(y) {
    se[y ? "unshift" : "push"](() => {
      u = y, t(4, u);
    });
  }
  return n.$$set = (y) => {
    e = Y(Y({}, e), tt(y)), t(9, r = pe(e, i)), "use" in y && t(0, s = y.use), "class" in y && t(1, o = y.class), "component" in y && t(2, b = y.component), "tag" in y && t(3, m = y.tag), "$$scope" in y && t(13, a = y.$$scope);
  }, [
    s,
    o,
    b,
    m,
    u,
    d,
    c,
    p,
    C,
    r,
    v,
    l,
    T,
    a
  ];
}
class Au extends Re {
  constructor(e) {
    super(), Oe(this, e, Cu, vu, Ee, {
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
const Jr = Object.assign({}, rn);
function Et(n) {
  return new Proxy(Au, {
    construct: function(e, t) {
      return Object.assign(rn, Jr, n), new e(...t);
    },
    get: function(e, t) {
      return Object.assign(rn, Jr, n), e[t];
    }
  });
}
const Eu = Et({
  class: "mdc-text-field-helper-line",
  tag: "div"
}), yu = Et({
  class: "mdc-text-field__affix mdc-text-field__affix--prefix",
  tag: "span"
}), Su = Et({
  class: "mdc-text-field__affix mdc-text-field__affix--suffix",
  tag: "span"
});
function Tu(n) {
  let e, t, i, r, l, a = [
    {
      class: t = le({
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
  ], s = {};
  for (let o = 0; o < a.length; o += 1)
    s = Y(s, a[o]);
  return {
    c() {
      e = ne("input"), ce(e, s);
    },
    m(o, u) {
      V(o, e, u), e.autofocus && e.focus(), n[26](e), r || (l = [
        fe(i = Qe.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        fe(
          /*forwardEvents*/
          n[7].call(null, e)
        ),
        oe(
          e,
          "input",
          /*input_handler*/
          n[27]
        ),
        oe(
          e,
          "change",
          /*changeHandler*/
          n[9]
        ),
        oe(
          e,
          "blur",
          /*blur_handler*/
          n[24]
        ),
        oe(
          e,
          "focus",
          /*focus_handler*/
          n[25]
        )
      ], r = !0);
    },
    p(o, [u]) {
      ce(e, s = he(a, [
        u & /*className*/
        2 && t !== (t = le({
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
      ])), i && me(i.update) && u & /*use*/
      1 && i.update.call(
        null,
        /*use*/
        o[0]
      );
    },
    i: $e,
    o: $e,
    d(o) {
      o && B(e), n[26](null), r = !1, Ze(l);
    }
  };
}
function Lu(n) {
  return n === "" ? Number.NaN : +n;
}
function Ou(n, e, t) {
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
  const l = nt(Je());
  let a = () => {
  };
  function s(L) {
    return L === a;
  }
  let { use: o = [] } = e, { class: u = "" } = e, { type: c = "text" } = e, { placeholder: d = " " } = e, { value: f = a } = e;
  const h = s(f);
  h && (f = "");
  let { files: p = null } = e, { dirty: b = !1 } = e, { invalid: m = !1 } = e, { updateInvalid: C = !0 } = e, { emptyValueNull: v = f === null } = e;
  h && v && (f = null);
  let { emptyValueUndefined: T = f === void 0 } = e;
  h && T && (f = void 0);
  let y, k = {}, R = {};
  ot(() => {
    C && t(14, m = y.matches(":invalid"));
  });
  function _(L) {
    if (c === "file") {
      t(12, p = L.currentTarget.files);
      return;
    }
    if (L.currentTarget.value === "" && v) {
      t(11, f = null);
      return;
    }
    if (L.currentTarget.value === "" && T) {
      t(11, f = void 0);
      return;
    }
    switch (c) {
      case "number":
      case "range":
        t(11, f = Lu(L.currentTarget.value));
        break;
      default:
        t(11, f = L.currentTarget.value);
        break;
    }
  }
  function A(L) {
    (c === "file" || c === "range") && _(L), t(13, b = !0), C && t(14, m = y.matches(":invalid"));
  }
  function w(L) {
    var j;
    return L in k ? (j = k[L]) !== null && j !== void 0 ? j : null : N().getAttribute(L);
  }
  function I(L, j) {
    k[L] !== j && t(6, k[L] = j, k);
  }
  function g(L) {
    (!(L in k) || k[L] != null) && t(6, k[L] = void 0, k);
  }
  function D() {
    N().focus();
  }
  function O() {
    N().blur();
  }
  function N() {
    return y;
  }
  function W(L) {
    Hn.call(this, n, L);
  }
  function G(L) {
    Hn.call(this, n, L);
  }
  function z(L) {
    se[L ? "unshift" : "push"](() => {
      y = L, t(5, y);
    });
  }
  const F = (L) => c !== "file" && _(L);
  return n.$$set = (L) => {
    e = Y(Y({}, e), tt(L)), t(10, r = pe(e, i)), "use" in L && t(0, o = L.use), "class" in L && t(1, u = L.class), "type" in L && t(2, c = L.type), "placeholder" in L && t(3, d = L.placeholder), "value" in L && t(11, f = L.value), "files" in L && t(12, p = L.files), "dirty" in L && t(13, b = L.dirty), "invalid" in L && t(14, m = L.invalid), "updateInvalid" in L && t(15, C = L.updateInvalid), "emptyValueNull" in L && t(16, v = L.emptyValueNull), "emptyValueUndefined" in L && t(17, T = L.emptyValueUndefined);
  }, n.$$.update = () => {
    n.$$.dirty & /*type, valueProp, value*/
    2068 && (c === "file" ? (delete R.value, t(4, R), t(2, c), t(11, f)) : t(4, R.value = f ?? "", R));
  }, [
    o,
    u,
    c,
    d,
    R,
    y,
    k,
    l,
    _,
    A,
    r,
    f,
    p,
    b,
    m,
    C,
    v,
    T,
    w,
    I,
    g,
    D,
    O,
    N,
    W,
    G,
    z,
    F
  ];
}
class Ru extends Re {
  constructor(e) {
    super(), Oe(this, e, Ou, Tu, Ee, {
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
function ku(n) {
  let e, t, i, r, l, a, s = [
    {
      class: t = le({
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
  ], o = {};
  for (let u = 0; u < s.length; u += 1)
    o = Y(o, s[u]);
  return {
    c() {
      e = ne("textarea"), ce(e, o);
    },
    m(u, c) {
      V(u, e, c), e.autofocus && e.focus(), n[21](e), Zt(
        e,
        /*value*/
        n[0]
      ), l || (a = [
        fe(r = Qe.call(
          null,
          e,
          /*use*/
          n[1]
        )),
        fe(
          /*forwardEvents*/
          n[7].call(null, e)
        ),
        oe(
          e,
          "change",
          /*changeHandler*/
          n[8]
        ),
        oe(
          e,
          "blur",
          /*blur_handler*/
          n[19]
        ),
        oe(
          e,
          "focus",
          /*focus_handler*/
          n[20]
        ),
        oe(
          e,
          "input",
          /*textarea_input_handler*/
          n[22]
        )
      ], l = !0);
    },
    p(u, [c]) {
      ce(e, o = he(s, [
        c & /*className*/
        4 && t !== (t = le({
          [
            /*className*/
            u[2]
          ]: !0,
          "mdc-text-field__input": !0
        })) && { class: t },
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
      ])), r && me(r.update) && c & /*use*/
      2 && r.update.call(
        null,
        /*use*/
        u[1]
      ), c & /*value*/
      1 && Zt(
        e,
        /*value*/
        u[0]
      );
    },
    i: $e,
    o: $e,
    d(u) {
      u && B(e), n[21](null), l = !1, Ze(a);
    }
  };
}
function Du(n, e, t) {
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
  const l = nt(Je());
  let { use: a = [] } = e, { class: s = "" } = e, { style: o = "" } = e, { value: u = "" } = e, { dirty: c = !1 } = e, { invalid: d = !1 } = e, { updateInvalid: f = !0 } = e, { resizable: h = !0 } = e, p, b = {};
  ot(() => {
    f && t(11, d = p.matches(":invalid"));
  });
  function m() {
    t(10, c = !0), f && t(11, d = p.matches(":invalid"));
  }
  function C(g) {
    var D;
    return g in b ? (D = b[g]) !== null && D !== void 0 ? D : null : R().getAttribute(g);
  }
  function v(g, D) {
    b[g] !== D && t(6, b[g] = D, b);
  }
  function T(g) {
    (!(g in b) || b[g] != null) && t(6, b[g] = void 0, b);
  }
  function y() {
    R().focus();
  }
  function k() {
    R().blur();
  }
  function R() {
    return p;
  }
  function _(g) {
    Hn.call(this, n, g);
  }
  function A(g) {
    Hn.call(this, n, g);
  }
  function w(g) {
    se[g ? "unshift" : "push"](() => {
      p = g, t(5, p);
    });
  }
  function I() {
    u = this.value, t(0, u);
  }
  return n.$$set = (g) => {
    e = Y(Y({}, e), tt(g)), t(9, r = pe(e, i)), "use" in g && t(1, a = g.use), "class" in g && t(2, s = g.class), "style" in g && t(3, o = g.style), "value" in g && t(0, u = g.value), "dirty" in g && t(10, c = g.dirty), "invalid" in g && t(11, d = g.invalid), "updateInvalid" in g && t(12, f = g.updateInvalid), "resizable" in g && t(4, h = g.resizable);
  }, [
    u,
    a,
    s,
    o,
    h,
    p,
    b,
    l,
    m,
    r,
    c,
    d,
    f,
    C,
    v,
    T,
    y,
    k,
    R,
    _,
    A,
    w,
    I
  ];
}
class Mu extends Re {
  constructor(e) {
    super(), Oe(this, e, Du, ku, Ee, {
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
const Fu = (n) => ({}), xr = (n) => ({}), Nu = (n) => ({}), $r = (n) => ({}), Uu = (n) => ({}), el = (n) => ({}), wu = (n) => ({}), tl = (n) => ({}), Pu = (n) => ({}), nl = (n) => ({}), Hu = (n) => ({}), il = (n) => ({}), Bu = (n) => ({}), rl = (n) => ({}), Vu = (n) => ({}), ll = (n) => ({}), ju = (n) => ({}), sl = (n) => ({}), Gu = (n) => ({}), al = (n) => ({}), qu = (n) => ({}), ol = (n) => ({}), Ku = (n) => ({}), ul = (n) => ({});
function Wu(n) {
  let e, t, i, r, l, a, s, o, u, c, d, f, h, p;
  const b = (
    /*#slots*/
    n[56].label
  ), m = Ie(
    b,
    n,
    /*$$scope*/
    n[87],
    nl
  );
  i = new Vn({
    props: {
      key: "SMUI:textfield:icon:leading",
      value: !0,
      $$slots: { default: [Yu] },
      $$scope: { ctx: n }
    }
  });
  const C = (
    /*#slots*/
    n[56].default
  ), v = Ie(
    C,
    n,
    /*$$scope*/
    n[87],
    null
  );
  a = new Vn({
    props: {
      key: "SMUI:textfield:icon:leading",
      value: !1,
      $$slots: { default: [Xu] },
      $$scope: { ctx: n }
    }
  });
  const T = (
    /*#slots*/
    n[56].ripple
  ), y = Ie(
    T,
    n,
    /*$$scope*/
    n[87],
    $r
  );
  let k = [
    {
      class: o = le({
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
      ).map(vl).concat([
        /*style*/
        n[10]
      ]).join(" ")
    },
    Gt(
      /*$$restProps*/
      n[46],
      ["input$", "label$", "ripple$", "outline$", "helperLine$"]
    )
  ], R = {};
  for (let _ = 0; _ < k.length; _ += 1)
    R = Y(R, k[_]);
  return {
    c() {
      e = ne("div"), m && m.c(), t = ae(), ie(i.$$.fragment), r = ae(), v && v.c(), l = ae(), ie(a.$$.fragment), s = ae(), y && y.c(), ce(e, R);
    },
    m(_, A) {
      V(_, e, A), m && m.m(e, null), J(e, t), ee(i, e, null), J(e, r), v && v.m(e, null), J(e, l), ee(a, e, null), J(e, s), y && y.m(e, null), n[82](e), f = !0, h || (p = [
        fe(c = kt.call(null, e, {
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
        fe(d = Qe.call(
          null,
          e,
          /*use*/
          n[8]
        )),
        fe(
          /*forwardEvents*/
          n[34].call(null, e)
        ),
        oe(
          e,
          "SMUITextfieldLeadingIcon:mount",
          /*handleLeadingIconMount*/
          n[38]
        ),
        oe(
          e,
          "SMUITextfieldLeadingIcon:unmount",
          /*SMUITextfieldLeadingIcon_unmount_handler_1*/
          n[83]
        ),
        oe(
          e,
          "SMUITextfieldTrailingIcon:mount",
          /*handleTrailingIconMount*/
          n[39]
        ),
        oe(
          e,
          "SMUITextfieldTrailingIcon:unmount",
          /*SMUITextfieldTrailingIcon_unmount_handler_1*/
          n[84]
        )
      ], h = !0);
    },
    p(_, A) {
      m && m.p && (!f || A[2] & /*$$scope*/
      33554432) && Ce(
        m,
        b,
        _,
        /*$$scope*/
        _[87],
        f ? ve(
          b,
          /*$$scope*/
          _[87],
          A,
          Pu
        ) : Ae(
          /*$$scope*/
          _[87]
        ),
        nl
      );
      const w = {};
      A[2] & /*$$scope*/
      33554432 && (w.$$scope = { dirty: A, ctx: _ }), i.$set(w), v && v.p && (!f || A[2] & /*$$scope*/
      33554432) && Ce(
        v,
        C,
        _,
        /*$$scope*/
        _[87],
        f ? ve(
          C,
          /*$$scope*/
          _[87],
          A,
          null
        ) : Ae(
          /*$$scope*/
          _[87]
        ),
        null
      );
      const I = {};
      A[2] & /*$$scope*/
      33554432 && (I.$$scope = { dirty: A, ctx: _ }), a.$set(I), y && y.p && (!f || A[2] & /*$$scope*/
      33554432) && Ce(
        y,
        T,
        _,
        /*$$scope*/
        _[87],
        f ? ve(
          T,
          /*$$scope*/
          _[87],
          A,
          Nu
        ) : Ae(
          /*$$scope*/
          _[87]
        ),
        $r
      ), ce(e, R = he(k, [
        (!f || A[0] & /*className, disabled, textarea, variant, noLabel, invalid, internalClasses*/
        33673730 | A[1] & /*$$slots*/
        65536 && o !== (o = le({
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
        (!f || A[0] & /*internalStyles, style*/
        67109888 && u !== (u = Object.entries(
          /*internalStyles*/
          _[26]
        ).map(vl).concat([
          /*style*/
          _[10]
        ]).join(" "))) && { style: u },
        A[1] & /*$$restProps*/
        32768 && Gt(
          /*$$restProps*/
          _[46],
          ["input$", "label$", "ripple$", "outline$", "helperLine$"]
        )
      ])), c && me(c.update) && A[0] & /*ripple*/
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
      }), d && me(d.update) && A[0] & /*use*/
      256 && d.update.call(
        null,
        /*use*/
        _[8]
      );
    },
    i(_) {
      f || (E(m, _), E(i.$$.fragment, _), E(v, _), E(a.$$.fragment, _), E(y, _), f = !0);
    },
    o(_) {
      S(m, _), S(i.$$.fragment, _), S(v, _), S(a.$$.fragment, _), S(y, _), f = !1;
    },
    d(_) {
      _ && B(e), m && m.d(_), te(i), v && v.d(_), te(a), y && y.d(_), n[82](null), h = !1, Ze(p);
    }
  };
}
function zu(n) {
  let e, t, i, r, l, a, s, o, u, c, d, f, h, p, b, m, C, v, T = !/*textarea*/
  n[14] && /*variant*/
  n[15] !== "outlined" && cl(n), y = (
    /*textarea*/
    (n[14] || /*variant*/
    n[15] === "outlined") && hl(n)
  );
  r = new Vn({
    props: {
      key: "SMUI:textfield:icon:leading",
      value: !0,
      $$slots: { default: [xu] },
      $$scope: { ctx: n }
    }
  });
  const k = (
    /*#slots*/
    n[56].default
  ), R = Ie(
    k,
    n,
    /*$$scope*/
    n[87],
    null
  ), _ = [ec, $u], A = [];
  function w(O, N) {
    return (
      /*textarea*/
      O[14] && typeof /*value*/
      O[0] == "string" ? 0 : 1
    );
  }
  s = w(n), o = A[s] = _[s](n), c = new Vn({
    props: {
      key: "SMUI:textfield:icon:leading",
      value: !1,
      $$slots: { default: [ic] },
      $$scope: { ctx: n }
    }
  });
  let I = !/*textarea*/
  n[14] && /*variant*/
  n[15] !== "outlined" && /*ripple*/
  n[11] && _l(n), g = [
    {
      class: f = le({
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
      style: h = Object.entries(
        /*internalStyles*/
        n[26]
      ).map(Il).concat([
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
    Gt(
      /*$$restProps*/
      n[46],
      ["input$", "label$", "ripple$", "outline$", "helperLine$"]
    )
  ], D = {};
  for (let O = 0; O < g.length; O += 1)
    D = Y(D, g[O]);
  return {
    c() {
      e = ne("label"), T && T.c(), t = ae(), y && y.c(), i = ae(), ie(r.$$.fragment), l = ae(), R && R.c(), a = ae(), o.c(), u = ae(), ie(c.$$.fragment), d = ae(), I && I.c(), ce(e, D);
    },
    m(O, N) {
      V(O, e, N), T && T.m(e, null), J(e, t), y && y.m(e, null), J(e, i), ee(r, e, null), J(e, l), R && R.m(e, null), J(e, a), A[s].m(e, null), J(e, u), ee(c, e, null), J(e, d), I && I.m(e, null), n[78](e), m = !0, C || (v = [
        fe(p = kt.call(null, e, {
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
        fe(b = Qe.call(
          null,
          e,
          /*use*/
          n[8]
        )),
        fe(
          /*forwardEvents*/
          n[34].call(null, e)
        ),
        oe(
          e,
          "SMUITextfieldLeadingIcon:mount",
          /*handleLeadingIconMount*/
          n[38]
        ),
        oe(
          e,
          "SMUITextfieldLeadingIcon:unmount",
          /*SMUITextfieldLeadingIcon_unmount_handler*/
          n[79]
        ),
        oe(
          e,
          "SMUITextfieldTrailingIcon:mount",
          /*handleTrailingIconMount*/
          n[39]
        ),
        oe(
          e,
          "SMUITextfieldTrailingIcon:unmount",
          /*SMUITextfieldTrailingIcon_unmount_handler*/
          n[80]
        ),
        oe(
          e,
          "SMUITextfieldCharacterCounter:mount",
          /*handleCharacterCounterMount*/
          n[40]
        ),
        oe(
          e,
          "SMUITextfieldCharacterCounter:unmount",
          /*SMUITextfieldCharacterCounter_unmount_handler*/
          n[81]
        )
      ], C = !0);
    },
    p(O, N) {
      !/*textarea*/
      O[14] && /*variant*/
      O[15] !== "outlined" ? T ? (T.p(O, N), N[0] & /*textarea, variant*/
      49152 && E(T, 1)) : (T = cl(O), T.c(), E(T, 1), T.m(e, t)) : T && (Pe(), S(T, 1, 1, () => {
        T = null;
      }), He()), /*textarea*/
      O[14] || /*variant*/
      O[15] === "outlined" ? y ? (y.p(O, N), N[0] & /*textarea, variant*/
      49152 && E(y, 1)) : (y = hl(O), y.c(), E(y, 1), y.m(e, i)) : y && (Pe(), S(y, 1, 1, () => {
        y = null;
      }), He());
      const W = {};
      N[2] & /*$$scope*/
      33554432 && (W.$$scope = { dirty: N, ctx: O }), r.$set(W), R && R.p && (!m || N[2] & /*$$scope*/
      33554432) && Ce(
        R,
        k,
        O,
        /*$$scope*/
        O[87],
        m ? ve(
          k,
          /*$$scope*/
          O[87],
          N,
          null
        ) : Ae(
          /*$$scope*/
          O[87]
        ),
        null
      );
      let G = s;
      s = w(O), s === G ? A[s].p(O, N) : (Pe(), S(A[G], 1, 1, () => {
        A[G] = null;
      }), He(), o = A[s], o ? o.p(O, N) : (o = A[s] = _[s](O), o.c()), E(o, 1), o.m(e, u));
      const z = {};
      N[2] & /*$$scope*/
      33554432 && (z.$$scope = { dirty: N, ctx: O }), c.$set(z), !/*textarea*/
      O[14] && /*variant*/
      O[15] !== "outlined" && /*ripple*/
      O[11] ? I ? (I.p(O, N), N[0] & /*textarea, variant, ripple*/
      51200 && E(I, 1)) : (I = _l(O), I.c(), E(I, 1), I.m(e, null)) : I && (Pe(), S(I, 1, 1, () => {
        I = null;
      }), He()), ce(e, D = he(g, [
        (!m || N[0] & /*className, disabled, textarea, variant, noLabel, label, focused, value, withLeadingIcon, withTrailingIcon, invalid, internalClasses*/
        314823171 | N[1] & /*$$slots*/
        65536 && f !== (f = le({
          [
            /*className*/
            O[9]
          ]: !0,
          "mdc-text-field": !0,
          "mdc-text-field--disabled": (
            /*disabled*/
            O[12]
          ),
          "mdc-text-field--textarea": (
            /*textarea*/
            O[14]
          ),
          "mdc-text-field--filled": (
            /*variant*/
            O[15] === "filled"
          ),
          "mdc-text-field--outlined": (
            /*variant*/
            O[15] === "outlined"
          ),
          "smui-text-field--standard": (
            /*variant*/
            O[15] === "standard" && !/*textarea*/
            O[14]
          ),
          "mdc-text-field--no-label": (
            /*noLabel*/
            O[16] || /*label*/
            O[17] == null && !/*$$slots*/
            O[47].label
          ),
          "mdc-text-field--label-floating": (
            /*focused*/
            O[28] || /*value*/
            O[0] != null && /*value*/
            O[0] !== ""
          ),
          "mdc-text-field--with-leading-icon": (
            /*isUninitializedValue*/
            O[35](
              /*withLeadingIcon*/
              O[22]
            ) ? (
              /*$$slots*/
              O[47].leadingIcon
            ) : (
              /*withLeadingIcon*/
              O[22]
            )
          ),
          "mdc-text-field--with-trailing-icon": (
            /*isUninitializedValue*/
            O[35](
              /*withTrailingIcon*/
              O[23]
            ) ? (
              /*$$slots*/
              O[47].trailingIcon
            ) : (
              /*withTrailingIcon*/
              O[23]
            )
          ),
          "mdc-text-field--with-internal-counter": (
            /*textarea*/
            O[14] && /*$$slots*/
            O[47].internalCounter
          ),
          "mdc-text-field--invalid": (
            /*invalid*/
            O[1]
          ),
          .../*internalClasses*/
          O[25]
        }))) && { class: f },
        (!m || N[0] & /*internalStyles, style*/
        67109888 && h !== (h = Object.entries(
          /*internalStyles*/
          O[26]
        ).map(Il).concat([
          /*style*/
          O[10]
        ]).join(" "))) && { style: h },
        {
          for: (
            /* suppress a11y warning, since this is wrapped */
            void 0
          )
        },
        N[1] & /*$$restProps*/
        32768 && Gt(
          /*$$restProps*/
          O[46],
          ["input$", "label$", "ripple$", "outline$", "helperLine$"]
        )
      ])), p && me(p.update) && N[0] & /*textarea, variant*/
      49152 | N[1] & /*inputElement*/
      4 && p.update.call(null, {
        ripple: !/*textarea*/
        O[14] && /*variant*/
        O[15] === "filled",
        unbounded: !1,
        addClass: (
          /*addClass*/
          O[43]
        ),
        removeClass: (
          /*removeClass*/
          O[44]
        ),
        addStyle: (
          /*addStyle*/
          O[45]
        ),
        eventTarget: (
          /*inputElement*/
          O[33]
        ),
        activeTarget: (
          /*inputElement*/
          O[33]
        ),
        initPromise: (
          /*initPromise*/
          O[37]
        )
      }), b && me(b.update) && N[0] & /*use*/
      256 && b.update.call(
        null,
        /*use*/
        O[8]
      );
    },
    i(O) {
      m || (E(T), E(y), E(r.$$.fragment, O), E(R, O), E(o), E(c.$$.fragment, O), E(I), m = !0);
    },
    o(O) {
      S(T), S(y), S(r.$$.fragment, O), S(R, O), S(o), S(c.$$.fragment, O), S(I), m = !1;
    },
    d(O) {
      O && B(e), T && T.d(), y && y.d(), te(r), R && R.d(O), A[s].d(), te(c), I && I.d(), n[78](null), C = !1, Ze(v);
    }
  };
}
function Yu(n) {
  let e;
  const t = (
    /*#slots*/
    n[56].leadingIcon
  ), i = Ie(
    t,
    n,
    /*$$scope*/
    n[87],
    tl
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
      33554432) && Ce(
        i,
        t,
        r,
        /*$$scope*/
        r[87],
        e ? ve(
          t,
          /*$$scope*/
          r[87],
          l,
          wu
        ) : Ae(
          /*$$scope*/
          r[87]
        ),
        tl
      );
    },
    i(r) {
      e || (E(i, r), e = !0);
    },
    o(r) {
      S(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function Xu(n) {
  let e;
  const t = (
    /*#slots*/
    n[56].trailingIcon
  ), i = Ie(
    t,
    n,
    /*$$scope*/
    n[87],
    el
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
      33554432) && Ce(
        i,
        t,
        r,
        /*$$scope*/
        r[87],
        e ? ve(
          t,
          /*$$scope*/
          r[87],
          l,
          Uu
        ) : Ae(
          /*$$scope*/
          r[87]
        ),
        el
      );
    },
    i(r) {
      e || (E(i, r), e = !0);
    },
    o(r) {
      S(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function cl(n) {
  let e, t, i, r = (
    /*variant*/
    n[15] === "filled" && dl()
  ), l = !/*noLabel*/
  n[16] && /*label*/
  (n[17] != null || /*$$slots*/
  n[47].label) && fl(n);
  return {
    c() {
      r && r.c(), e = ae(), l && l.c(), t = Xe();
    },
    m(a, s) {
      r && r.m(a, s), V(a, e, s), l && l.m(a, s), V(a, t, s), i = !0;
    },
    p(a, s) {
      /*variant*/
      a[15] === "filled" ? r || (r = dl(), r.c(), r.m(e.parentNode, e)) : r && (r.d(1), r = null), !/*noLabel*/
      a[16] && /*label*/
      (a[17] != null || /*$$slots*/
      a[47].label) ? l ? (l.p(a, s), s[0] & /*noLabel, label*/
      196608 | s[1] & /*$$slots*/
      65536 && E(l, 1)) : (l = fl(a), l.c(), E(l, 1), l.m(t.parentNode, t)) : l && (Pe(), S(l, 1, 1, () => {
        l = null;
      }), He());
    },
    i(a) {
      i || (E(l), i = !0);
    },
    o(a) {
      S(l), i = !1;
    },
    d(a) {
      a && (B(e), B(t)), r && r.d(a), l && l.d(a);
    }
  };
}
function dl(n) {
  let e;
  return {
    c() {
      e = ne("span"), U(e, "class", "mdc-text-field__ripple");
    },
    m(t, i) {
      V(t, e, i);
    },
    d(t) {
      t && B(e);
    }
  };
}
function fl(n) {
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
    Be(
      /*$$restProps*/
      n[46],
      "label$"
    )
  ];
  let r = {
    $$slots: { default: [Zu] },
    $$scope: { ctx: n }
  };
  for (let l = 0; l < i.length; l += 1)
    r = Y(r, i[l]);
  return e = new bi({ props: r }), n[57](e), {
    c() {
      ie(e.$$.fragment);
    },
    m(l, a) {
      ee(e, l, a), t = !0;
    },
    p(l, a) {
      const s = a[0] & /*focused, value, required*/
      268443649 | a[1] & /*$$restProps*/
      32768 ? he(i, [
        a[0] & /*focused, value*/
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
        a[0] & /*required*/
        8192 && { required: (
          /*required*/
          l[13]
        ) },
        i[2],
        a[1] & /*$$restProps*/
        32768 && Me(Be(
          /*$$restProps*/
          l[46],
          "label$"
        ))
      ]) : {};
      a[0] & /*label*/
      131072 | a[2] & /*$$scope*/
      33554432 && (s.$$scope = { dirty: a, ctx: l }), e.$set(s);
    },
    i(l) {
      t || (E(e.$$.fragment, l), t = !0);
    },
    o(l) {
      S(e.$$.fragment, l), t = !1;
    },
    d(l) {
      n[57](null), te(e, l);
    }
  };
}
function Zu(n) {
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
  ), l = Ie(
    r,
    n,
    /*$$scope*/
    n[87],
    ul
  );
  return {
    c() {
      t = at(e), l && l.c();
    },
    m(a, s) {
      V(a, t, s), l && l.m(a, s), i = !0;
    },
    p(a, s) {
      (!i || s[0] & /*label*/
      131072) && e !== (e = /*label*/
      (a[17] == null ? "" : (
        /*label*/
        a[17]
      )) + "") && At(t, e), l && l.p && (!i || s[2] & /*$$scope*/
      33554432) && Ce(
        l,
        r,
        a,
        /*$$scope*/
        a[87],
        i ? ve(
          r,
          /*$$scope*/
          a[87],
          s,
          Ku
        ) : Ae(
          /*$$scope*/
          a[87]
        ),
        ul
      );
    },
    i(a) {
      i || (E(l, a), i = !0);
    },
    o(a) {
      S(l, a), i = !1;
    },
    d(a) {
      a && B(t), l && l.d(a);
    }
  };
}
function hl(n) {
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
    Be(
      /*$$restProps*/
      n[46],
      "outline$"
    )
  ];
  let r = {
    $$slots: { default: [Ju] },
    $$scope: { ctx: n }
  };
  for (let l = 0; l < i.length; l += 1)
    r = Y(r, i[l]);
  return e = new aa({ props: r }), n[59](e), {
    c() {
      ie(e.$$.fragment);
    },
    m(l, a) {
      ee(e, l, a), t = !0;
    },
    p(l, a) {
      const s = a[0] & /*noLabel, label*/
      196608 | a[1] & /*$$slots, $$restProps*/
      98304 ? he(i, [
        a[0] & /*noLabel, label*/
        196608 | a[1] & /*$$slots*/
        65536 && {
          noLabel: (
            /*noLabel*/
            l[16] || /*label*/
            l[17] == null && !/*$$slots*/
            l[47].label
          )
        },
        a[1] & /*$$restProps*/
        32768 && Me(Be(
          /*$$restProps*/
          l[46],
          "outline$"
        ))
      ]) : {};
      a[0] & /*focused, value, required, floatingLabel, label, noLabel*/
      268640289 | a[1] & /*$$restProps, $$slots*/
      98304 | a[2] & /*$$scope*/
      33554432 && (s.$$scope = { dirty: a, ctx: l }), e.$set(s);
    },
    i(l) {
      t || (E(e.$$.fragment, l), t = !0);
    },
    o(l) {
      S(e.$$.fragment, l), t = !1;
    },
    d(l) {
      n[59](null), te(e, l);
    }
  };
}
function ml(n) {
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
    Be(
      /*$$restProps*/
      n[46],
      "label$"
    )
  ];
  let r = {
    $$slots: { default: [Qu] },
    $$scope: { ctx: n }
  };
  for (let l = 0; l < i.length; l += 1)
    r = Y(r, i[l]);
  return e = new bi({ props: r }), n[58](e), {
    c() {
      ie(e.$$.fragment);
    },
    m(l, a) {
      ee(e, l, a), t = !0;
    },
    p(l, a) {
      const s = a[0] & /*focused, value, required*/
      268443649 | a[1] & /*$$restProps*/
      32768 ? he(i, [
        a[0] & /*focused, value*/
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
        a[0] & /*required*/
        8192 && { required: (
          /*required*/
          l[13]
        ) },
        i[2],
        a[1] & /*$$restProps*/
        32768 && Me(Be(
          /*$$restProps*/
          l[46],
          "label$"
        ))
      ]) : {};
      a[0] & /*label*/
      131072 | a[2] & /*$$scope*/
      33554432 && (s.$$scope = { dirty: a, ctx: l }), e.$set(s);
    },
    i(l) {
      t || (E(e.$$.fragment, l), t = !0);
    },
    o(l) {
      S(e.$$.fragment, l), t = !1;
    },
    d(l) {
      n[58](null), te(e, l);
    }
  };
}
function Qu(n) {
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
  ), l = Ie(
    r,
    n,
    /*$$scope*/
    n[87],
    ol
  );
  return {
    c() {
      t = at(e), l && l.c();
    },
    m(a, s) {
      V(a, t, s), l && l.m(a, s), i = !0;
    },
    p(a, s) {
      (!i || s[0] & /*label*/
      131072) && e !== (e = /*label*/
      (a[17] == null ? "" : (
        /*label*/
        a[17]
      )) + "") && At(t, e), l && l.p && (!i || s[2] & /*$$scope*/
      33554432) && Ce(
        l,
        r,
        a,
        /*$$scope*/
        a[87],
        i ? ve(
          r,
          /*$$scope*/
          a[87],
          s,
          qu
        ) : Ae(
          /*$$scope*/
          a[87]
        ),
        ol
      );
    },
    i(a) {
      i || (E(l, a), i = !0);
    },
    o(a) {
      S(l, a), i = !1;
    },
    d(a) {
      a && B(t), l && l.d(a);
    }
  };
}
function Ju(n) {
  let e, t, i = !/*noLabel*/
  n[16] && /*label*/
  (n[17] != null || /*$$slots*/
  n[47].label) && ml(n);
  return {
    c() {
      i && i.c(), e = Xe();
    },
    m(r, l) {
      i && i.m(r, l), V(r, e, l), t = !0;
    },
    p(r, l) {
      !/*noLabel*/
      r[16] && /*label*/
      (r[17] != null || /*$$slots*/
      r[47].label) ? i ? (i.p(r, l), l[0] & /*noLabel, label*/
      196608 | l[1] & /*$$slots*/
      65536 && E(i, 1)) : (i = ml(r), i.c(), E(i, 1), i.m(e.parentNode, e)) : i && (Pe(), S(i, 1, 1, () => {
        i = null;
      }), He());
    },
    i(r) {
      t || (E(i), t = !0);
    },
    o(r) {
      S(i), t = !1;
    },
    d(r) {
      r && B(e), i && i.d(r);
    }
  };
}
function xu(n) {
  let e;
  const t = (
    /*#slots*/
    n[56].leadingIcon
  ), i = Ie(
    t,
    n,
    /*$$scope*/
    n[87],
    al
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
      33554432) && Ce(
        i,
        t,
        r,
        /*$$scope*/
        r[87],
        e ? ve(
          t,
          /*$$scope*/
          r[87],
          l,
          Gu
        ) : Ae(
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
      S(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function $u(n) {
  let e, t, i, r, l, a, s, o, u, c;
  const d = (
    /*#slots*/
    n[56].prefix
  ), f = Ie(
    d,
    n,
    /*$$scope*/
    n[87],
    ll
  );
  let h = (
    /*prefix*/
    n[20] != null && pl(n)
  );
  const p = [
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
    Be(
      /*$$restProps*/
      n[46],
      "input$"
    )
  ];
  function b(_) {
    n[69](_);
  }
  function m(_) {
    n[70](_);
  }
  function C(_) {
    n[71](_);
  }
  function v(_) {
    n[72](_);
  }
  let T = {};
  for (let _ = 0; _ < p.length; _ += 1)
    T = Y(T, p[_]);
  /*value*/
  n[0] !== void 0 && (T.value = /*value*/
  n[0]), /*files*/
  n[3] !== void 0 && (T.files = /*files*/
  n[3]), /*dirty*/
  n[4] !== void 0 && (T.dirty = /*dirty*/
  n[4]), /*invalid*/
  n[1] !== void 0 && (T.invalid = /*invalid*/
  n[1]), i = new Ru({ props: T }), n[68](i), se.push(() => pt(i, "value", b)), se.push(() => pt(i, "files", m)), se.push(() => pt(i, "dirty", C)), se.push(() => pt(i, "invalid", v)), i.$on(
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
  let y = (
    /*suffix*/
    n[21] != null && gl(n)
  );
  const k = (
    /*#slots*/
    n[56].suffix
  ), R = Ie(
    k,
    n,
    /*$$scope*/
    n[87],
    rl
  );
  return {
    c() {
      f && f.c(), e = ae(), h && h.c(), t = ae(), ie(i.$$.fragment), o = ae(), y && y.c(), u = ae(), R && R.c();
    },
    m(_, A) {
      f && f.m(_, A), V(_, e, A), h && h.m(_, A), V(_, t, A), ee(i, _, A), V(_, o, A), y && y.m(_, A), V(_, u, A), R && R.m(_, A), c = !0;
    },
    p(_, A) {
      f && f.p && (!c || A[2] & /*$$scope*/
      33554432) && Ce(
        f,
        d,
        _,
        /*$$scope*/
        _[87],
        c ? ve(
          d,
          /*$$scope*/
          _[87],
          A,
          Vu
        ) : Ae(
          /*$$scope*/
          _[87]
        ),
        ll
      ), /*prefix*/
      _[20] != null ? h ? (h.p(_, A), A[0] & /*prefix*/
      1048576 && E(h, 1)) : (h = pl(_), h.c(), E(h, 1), h.m(t.parentNode, t)) : h && (Pe(), S(h, 1, 1, () => {
        h = null;
      }), He());
      const w = A[0] & /*type, disabled, required, updateInvalid, helperId, noLabel, label*/
      135213056 | A[1] & /*$$restProps*/
      32768 ? he(p, [
        A[0] & /*type*/
        262144 && { type: (
          /*type*/
          _[18]
        ) },
        A[0] & /*disabled*/
        4096 && { disabled: (
          /*disabled*/
          _[12]
        ) },
        A[0] & /*required*/
        8192 && { required: (
          /*required*/
          _[13]
        ) },
        A[0] & /*updateInvalid*/
        524288 && { updateInvalid: (
          /*updateInvalid*/
          _[19]
        ) },
        A[0] & /*helperId*/
        134217728 && { "aria-controls": (
          /*helperId*/
          _[27]
        ) },
        A[0] & /*helperId*/
        134217728 && { "aria-describedby": (
          /*helperId*/
          _[27]
        ) },
        A[0] & /*noLabel, label*/
        196608 && Me(
          /*noLabel*/
          _[16] && /*label*/
          _[17] != null ? { placeholder: (
            /*label*/
            _[17]
          ) } : {}
        ),
        A[1] & /*$$restProps*/
        32768 && Me(Be(
          /*$$restProps*/
          _[46],
          "input$"
        ))
      ]) : {};
      !r && A[0] & /*value*/
      1 && (r = !0, w.value = /*value*/
      _[0], mt(() => r = !1)), !l && A[0] & /*files*/
      8 && (l = !0, w.files = /*files*/
      _[3], mt(() => l = !1)), !a && A[0] & /*dirty*/
      16 && (a = !0, w.dirty = /*dirty*/
      _[4], mt(() => a = !1)), !s && A[0] & /*invalid*/
      2 && (s = !0, w.invalid = /*invalid*/
      _[1], mt(() => s = !1)), i.$set(w), /*suffix*/
      _[21] != null ? y ? (y.p(_, A), A[0] & /*suffix*/
      2097152 && E(y, 1)) : (y = gl(_), y.c(), E(y, 1), y.m(u.parentNode, u)) : y && (Pe(), S(y, 1, 1, () => {
        y = null;
      }), He()), R && R.p && (!c || A[2] & /*$$scope*/
      33554432) && Ce(
        R,
        k,
        _,
        /*$$scope*/
        _[87],
        c ? ve(
          k,
          /*$$scope*/
          _[87],
          A,
          Bu
        ) : Ae(
          /*$$scope*/
          _[87]
        ),
        rl
      );
    },
    i(_) {
      c || (E(f, _), E(h), E(i.$$.fragment, _), E(y), E(R, _), c = !0);
    },
    o(_) {
      S(f, _), S(h), S(i.$$.fragment, _), S(y), S(R, _), c = !1;
    },
    d(_) {
      _ && (B(e), B(t), B(o), B(u)), f && f.d(_), h && h.d(_), n[68](null), te(i, _), y && y.d(_), R && R.d(_);
    }
  };
}
function ec(n) {
  let e, t, i, r, l, a, s, o;
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
    Be(
      /*$$restProps*/
      n[46],
      "input$"
    )
  ];
  function c(m) {
    n[61](m);
  }
  function d(m) {
    n[62](m);
  }
  function f(m) {
    n[63](m);
  }
  let h = {};
  for (let m = 0; m < u.length; m += 1)
    h = Y(h, u[m]);
  /*value*/
  n[0] !== void 0 && (h.value = /*value*/
  n[0]), /*dirty*/
  n[4] !== void 0 && (h.dirty = /*dirty*/
  n[4]), /*invalid*/
  n[1] !== void 0 && (h.invalid = /*invalid*/
  n[1]), t = new Mu({ props: h }), n[60](t), se.push(() => pt(t, "value", c)), se.push(() => pt(t, "dirty", d)), se.push(() => pt(t, "invalid", f)), t.$on(
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
  const p = (
    /*#slots*/
    n[56].internalCounter
  ), b = Ie(
    p,
    n,
    /*$$scope*/
    n[87],
    sl
  );
  return {
    c() {
      e = ne("span"), ie(t.$$.fragment), a = ae(), b && b.c(), U(e, "class", s = le({
        "mdc-text-field__resizer": !("input$resizable" in /*$$restProps*/
        n[46]) || /*$$restProps*/
        n[46].input$resizable
      }));
    },
    m(m, C) {
      V(m, e, C), ee(t, e, null), J(e, a), b && b.m(e, null), o = !0;
    },
    p(m, C) {
      const v = C[0] & /*disabled, required, updateInvalid, helperId*/
      134754304 | C[1] & /*$$restProps*/
      32768 ? he(u, [
        C[0] & /*disabled*/
        4096 && { disabled: (
          /*disabled*/
          m[12]
        ) },
        C[0] & /*required*/
        8192 && { required: (
          /*required*/
          m[13]
        ) },
        C[0] & /*updateInvalid*/
        524288 && { updateInvalid: (
          /*updateInvalid*/
          m[19]
        ) },
        C[0] & /*helperId*/
        134217728 && { "aria-controls": (
          /*helperId*/
          m[27]
        ) },
        C[0] & /*helperId*/
        134217728 && { "aria-describedby": (
          /*helperId*/
          m[27]
        ) },
        C[1] & /*$$restProps*/
        32768 && Me(Be(
          /*$$restProps*/
          m[46],
          "input$"
        ))
      ]) : {};
      !i && C[0] & /*value*/
      1 && (i = !0, v.value = /*value*/
      m[0], mt(() => i = !1)), !r && C[0] & /*dirty*/
      16 && (r = !0, v.dirty = /*dirty*/
      m[4], mt(() => r = !1)), !l && C[0] & /*invalid*/
      2 && (l = !0, v.invalid = /*invalid*/
      m[1], mt(() => l = !1)), t.$set(v), b && b.p && (!o || C[2] & /*$$scope*/
      33554432) && Ce(
        b,
        p,
        m,
        /*$$scope*/
        m[87],
        o ? ve(
          p,
          /*$$scope*/
          m[87],
          C,
          ju
        ) : Ae(
          /*$$scope*/
          m[87]
        ),
        sl
      ), (!o || C[1] & /*$$restProps*/
      32768 && s !== (s = le({
        "mdc-text-field__resizer": !("input$resizable" in /*$$restProps*/
        m[46]) || /*$$restProps*/
        m[46].input$resizable
      }))) && U(e, "class", s);
    },
    i(m) {
      o || (E(t.$$.fragment, m), E(b, m), o = !0);
    },
    o(m) {
      S(t.$$.fragment, m), S(b, m), o = !1;
    },
    d(m) {
      m && B(e), n[60](null), te(t), b && b.d(m);
    }
  };
}
function pl(n) {
  let e, t;
  return e = new yu({
    props: {
      $$slots: { default: [tc] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      ie(e.$$.fragment);
    },
    m(i, r) {
      ee(e, i, r), t = !0;
    },
    p(i, r) {
      const l = {};
      r[0] & /*prefix*/
      1048576 | r[2] & /*$$scope*/
      33554432 && (l.$$scope = { dirty: r, ctx: i }), e.$set(l);
    },
    i(i) {
      t || (E(e.$$.fragment, i), t = !0);
    },
    o(i) {
      S(e.$$.fragment, i), t = !1;
    },
    d(i) {
      te(e, i);
    }
  };
}
function tc(n) {
  let e;
  return {
    c() {
      e = at(
        /*prefix*/
        n[20]
      );
    },
    m(t, i) {
      V(t, e, i);
    },
    p(t, i) {
      i[0] & /*prefix*/
      1048576 && At(
        e,
        /*prefix*/
        t[20]
      );
    },
    d(t) {
      t && B(e);
    }
  };
}
function gl(n) {
  let e, t;
  return e = new Su({
    props: {
      $$slots: { default: [nc] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      ie(e.$$.fragment);
    },
    m(i, r) {
      ee(e, i, r), t = !0;
    },
    p(i, r) {
      const l = {};
      r[0] & /*suffix*/
      2097152 | r[2] & /*$$scope*/
      33554432 && (l.$$scope = { dirty: r, ctx: i }), e.$set(l);
    },
    i(i) {
      t || (E(e.$$.fragment, i), t = !0);
    },
    o(i) {
      S(e.$$.fragment, i), t = !1;
    },
    d(i) {
      te(e, i);
    }
  };
}
function nc(n) {
  let e;
  return {
    c() {
      e = at(
        /*suffix*/
        n[21]
      );
    },
    m(t, i) {
      V(t, e, i);
    },
    p(t, i) {
      i[0] & /*suffix*/
      2097152 && At(
        e,
        /*suffix*/
        t[21]
      );
    },
    d(t) {
      t && B(e);
    }
  };
}
function ic(n) {
  let e;
  const t = (
    /*#slots*/
    n[56].trailingIcon
  ), i = Ie(
    t,
    n,
    /*$$scope*/
    n[87],
    il
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
      33554432) && Ce(
        i,
        t,
        r,
        /*$$scope*/
        r[87],
        e ? ve(
          t,
          /*$$scope*/
          r[87],
          l,
          Hu
        ) : Ae(
          /*$$scope*/
          r[87]
        ),
        il
      );
    },
    i(r) {
      e || (E(i, r), e = !0);
    },
    o(r) {
      S(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function _l(n) {
  let e, t;
  const i = [Be(
    /*$$restProps*/
    n[46],
    "ripple$"
  )];
  let r = {};
  for (let l = 0; l < i.length; l += 1)
    r = Y(r, i[l]);
  return e = new sa({ props: r }), n[77](e), {
    c() {
      ie(e.$$.fragment);
    },
    m(l, a) {
      ee(e, l, a), t = !0;
    },
    p(l, a) {
      const s = a[1] & /*$$restProps*/
      32768 ? he(i, [Me(Be(
        /*$$restProps*/
        l[46],
        "ripple$"
      ))]) : {};
      e.$set(s);
    },
    i(l) {
      t || (E(e.$$.fragment, l), t = !0);
    },
    o(l) {
      S(e.$$.fragment, l), t = !1;
    },
    d(l) {
      n[77](null), te(e, l);
    }
  };
}
function bl(n) {
  let e, t;
  const i = [Be(
    /*$$restProps*/
    n[46],
    "helperLine$"
  )];
  let r = {
    $$slots: { default: [rc] },
    $$scope: { ctx: n }
  };
  for (let l = 0; l < i.length; l += 1)
    r = Y(r, i[l]);
  return e = new Eu({ props: r }), e.$on(
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
      ie(e.$$.fragment);
    },
    m(l, a) {
      ee(e, l, a), t = !0;
    },
    p(l, a) {
      const s = a[1] & /*$$restProps*/
      32768 ? he(i, [Me(Be(
        /*$$restProps*/
        l[46],
        "helperLine$"
      ))]) : {};
      a[2] & /*$$scope*/
      33554432 && (s.$$scope = { dirty: a, ctx: l }), e.$set(s);
    },
    i(l) {
      t || (E(e.$$.fragment, l), t = !0);
    },
    o(l) {
      S(e.$$.fragment, l), t = !1;
    },
    d(l) {
      te(e, l);
    }
  };
}
function rc(n) {
  let e;
  const t = (
    /*#slots*/
    n[56].helper
  ), i = Ie(
    t,
    n,
    /*$$scope*/
    n[87],
    xr
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
      33554432) && Ce(
        i,
        t,
        r,
        /*$$scope*/
        r[87],
        e ? ve(
          t,
          /*$$scope*/
          r[87],
          l,
          Fu
        ) : Ae(
          /*$$scope*/
          r[87]
        ),
        xr
      );
    },
    i(r) {
      e || (E(i, r), e = !0);
    },
    o(r) {
      S(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function lc(n) {
  let e, t, i, r, l;
  const a = [zu, Wu], s = [];
  function o(c, d) {
    return (
      /*valued*/
      c[36] ? 0 : 1
    );
  }
  e = o(n), t = s[e] = a[e](n);
  let u = (
    /*$$slots*/
    n[47].helper && bl(n)
  );
  return {
    c() {
      t.c(), i = ae(), u && u.c(), r = Xe();
    },
    m(c, d) {
      s[e].m(c, d), V(c, i, d), u && u.m(c, d), V(c, r, d), l = !0;
    },
    p(c, d) {
      t.p(c, d), /*$$slots*/
      c[47].helper ? u ? (u.p(c, d), d[1] & /*$$slots*/
      65536 && E(u, 1)) : (u = bl(c), u.c(), E(u, 1), u.m(r.parentNode, r)) : u && (Pe(), S(u, 1, 1, () => {
        u = null;
      }), He());
    },
    i(c) {
      l || (E(t), E(u), l = !0);
    },
    o(c) {
      S(t), S(u), l = !1;
    },
    d(c) {
      c && (B(i), B(r)), s[e].d(c), u && u.d(c);
    }
  };
}
const Il = ([n, e]) => `${n}: ${e};`, vl = ([n, e]) => `${n}: ${e};`;
function sc(n, e, t) {
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
  let l = pe(e, r), { $$slots: a = {}, $$scope: s } = e;
  const o = mr(a), { applyPassive: u } = ra, c = nt(Je());
  let d = () => {
  };
  function f(P) {
    return P === d;
  }
  let { use: h = [] } = e, { class: p = "" } = e, { style: b = "" } = e, { ripple: m = !0 } = e, { disabled: C = !1 } = e, { required: v = !1 } = e, { textarea: T = !1 } = e, { variant: y = T ? "outlined" : "standard" } = e, { noLabel: k = !1 } = e, { label: R = void 0 } = e, { type: _ = "text" } = e, { value: A = l.input$emptyValueUndefined ? void 0 : d } = e, { files: w = d } = e;
  const I = !f(A) || !f(w);
  f(A) && (A = void 0), f(w) && (w = null);
  let { invalid: g = d } = e, { updateInvalid: D = f(g) } = e;
  f(g) && (g = !1);
  let { dirty: O = !1 } = e, { prefix: N = void 0 } = e, { suffix: W = void 0 } = e, { validateOnValueChange: G = D } = e, { useNativeValidation: z = D } = e, { withLeadingIcon: F = d } = e, { withTrailingIcon: L = d } = e, { input: j = void 0 } = e, { floatingLabel: ue = void 0 } = e, { lineRipple: ke = void 0 } = e, { notchedOutline: be = void 0 } = e, Ye, K, x = {}, _e = {}, ye, Ne = !1, re = Ke("SMUI:addLayoutListener"), q, We, Ge = new Promise((P) => We = P), ft, X, Te, qe, Ue = A;
  re && (q = re(Z)), ot(() => {
    if (t(54, K = new ou(
      {
        // getRootAdapterMethods_
        addClass: ut,
        removeClass: et,
        hasClass: dt,
        registerTextFieldInteractionHandler: (P, gt) => Se().addEventListener(P, gt),
        deregisterTextFieldInteractionHandler: (P, gt) => Se().removeEventListener(P, gt),
        registerValidationAttributeChangeHandler: (P) => {
          const gt = (Gn) => Gn.map((qn) => qn.attributeName).filter((qn) => qn), ii = new MutationObserver((Gn) => {
            z && P(gt(Gn));
          }), Gi = { attributes: !0 };
          return j && ii.observe(j.getElement(), Gi), ii;
        },
        deregisterValidationAttributeChangeHandler: (P) => {
          P.disconnect();
        },
        // getInputAdapterMethods_
        getNativeInput: () => {
          var P;
          return (P = j == null ? void 0 : j.getElement()) !== null && P !== void 0 ? P : null;
        },
        setInputAttr: (P, gt) => {
          j == null || j.addAttr(P, gt);
        },
        removeInputAttr: (P) => {
          j == null || j.removeAttr(P);
        },
        isFocused: () => document.activeElement === (j == null ? void 0 : j.getElement()),
        registerInputInteractionHandler: (P, gt) => {
          j == null || j.getElement().addEventListener(P, gt, u());
        },
        deregisterInputInteractionHandler: (P, gt) => {
          j == null || j.getElement().removeEventListener(P, gt, u());
        },
        // getLabelAdapterMethods_
        floatLabel: (P) => ue && ue.float(P),
        getLabelWidth: () => ue ? ue.getWidth() : 0,
        hasLabel: () => !!ue,
        shakeLabel: (P) => ue && ue.shake(P),
        setLabelRequired: (P) => ue && ue.setRequired(P),
        // getLineRippleAdapterMethods_
        activateLineRipple: () => ke && ke.activate(),
        deactivateLineRipple: () => ke && ke.deactivate(),
        setLineRippleTransformOrigin: (P) => ke && ke.setRippleCenter(P),
        // getOutlineAdapterMethods_
        closeOutline: () => be && be.closeNotch(),
        hasOutline: () => !!be,
        notchOutline: (P) => be && be.notch(P)
      },
      {
        get helperText() {
          return Te;
        },
        get characterCounter() {
          return qe;
        },
        get leadingIcon() {
          return ft;
        },
        get trailingIcon() {
          return X;
        }
      }
    )), I) {
      if (j == null)
        throw new Error("SMUI Textfield must be initialized with either a non-undefined initial value or an Input component.");
      K.init();
    } else
      gr().then(() => {
        if (j == null)
          throw new Error("SMUI Textfield must be initialized with either a non-undefined initial value or an Input component.");
        K.init();
      });
    return We(), () => {
      K.destroy();
    };
  }), zt(() => {
    q && q();
  });
  function yt(P) {
    t(29, ft = P.detail);
  }
  function M(P) {
    t(30, X = P.detail);
  }
  function $(P) {
    t(32, qe = P.detail);
  }
  function Q(P) {
    t(27, ye = P.detail);
  }
  function je(P) {
    t(31, Te = P.detail);
  }
  function dt(P) {
    var gt;
    return P in x ? (gt = x[P]) !== null && gt !== void 0 ? gt : null : Se().classList.contains(P);
  }
  function ut(P) {
    x[P] || t(25, x[P] = !0, x);
  }
  function et(P) {
    (!(P in x) || x[P]) && t(25, x[P] = !1, x);
  }
  function De(P, gt) {
    _e[P] != gt && (gt === "" || gt == null ? (delete _e[P], t(26, _e)) : t(26, _e[P] = gt, _e));
  }
  function de() {
    j == null || j.focus();
  }
  function Bt() {
    j == null || j.blur();
  }
  function Z() {
    if (K) {
      const P = K.shouldFloat;
      K.notchOutline(P);
    }
  }
  function Se() {
    return Ye;
  }
  function Le(P) {
    se[P ? "unshift" : "push"](() => {
      ue = P, t(5, ue);
    });
  }
  function rt(P) {
    se[P ? "unshift" : "push"](() => {
      ue = P, t(5, ue);
    });
  }
  function xt(P) {
    se[P ? "unshift" : "push"](() => {
      be = P, t(7, be);
    });
  }
  function jn(P) {
    se[P ? "unshift" : "push"](() => {
      j = P, t(2, j);
    });
  }
  function vi(P) {
    A = P, t(0, A);
  }
  function Ci(P) {
    O = P, t(4, O);
  }
  function Ai(P) {
    g = P, t(1, g), t(54, K), t(19, D);
  }
  const Ei = () => t(28, Ne = !1), yi = () => t(28, Ne = !0), yn = (P) => ge(Ye, "blur", P), Si = (P) => ge(Ye, "focus", P);
  function ti(P) {
    se[P ? "unshift" : "push"](() => {
      j = P, t(2, j);
    });
  }
  function Ti(P) {
    A = P, t(0, A);
  }
  function ni(P) {
    w = P, t(3, w);
  }
  function Sn(P) {
    O = P, t(4, O);
  }
  function Li(P) {
    g = P, t(1, g), t(54, K), t(19, D);
  }
  const Oi = () => t(28, Ne = !1), Ri = () => t(28, Ne = !0), ki = (P) => ge(Ye, "blur", P), Di = (P) => ge(Ye, "focus", P);
  function Mi(P) {
    se[P ? "unshift" : "push"](() => {
      ke = P, t(6, ke);
    });
  }
  function Fi(P) {
    se[P ? "unshift" : "push"](() => {
      Ye = P, t(24, Ye);
    });
  }
  const Ni = () => t(29, ft = void 0), Ui = () => t(30, X = void 0), wi = () => t(32, qe = void 0);
  function Pi(P) {
    se[P ? "unshift" : "push"](() => {
      Ye = P, t(24, Ye);
    });
  }
  const Hi = () => t(29, ft = void 0), Bi = () => t(30, X = void 0), Vi = () => {
    t(27, ye = void 0), t(31, Te = void 0);
  }, ji = () => t(32, qe = void 0);
  return n.$$set = (P) => {
    e = Y(Y({}, e), tt(P)), t(46, l = pe(e, r)), "use" in P && t(8, h = P.use), "class" in P && t(9, p = P.class), "style" in P && t(10, b = P.style), "ripple" in P && t(11, m = P.ripple), "disabled" in P && t(12, C = P.disabled), "required" in P && t(13, v = P.required), "textarea" in P && t(14, T = P.textarea), "variant" in P && t(15, y = P.variant), "noLabel" in P && t(16, k = P.noLabel), "label" in P && t(17, R = P.label), "type" in P && t(18, _ = P.type), "value" in P && t(0, A = P.value), "files" in P && t(3, w = P.files), "invalid" in P && t(1, g = P.invalid), "updateInvalid" in P && t(19, D = P.updateInvalid), "dirty" in P && t(4, O = P.dirty), "prefix" in P && t(20, N = P.prefix), "suffix" in P && t(21, W = P.suffix), "validateOnValueChange" in P && t(48, G = P.validateOnValueChange), "useNativeValidation" in P && t(49, z = P.useNativeValidation), "withLeadingIcon" in P && t(22, F = P.withLeadingIcon), "withTrailingIcon" in P && t(23, L = P.withTrailingIcon), "input" in P && t(2, j = P.input), "floatingLabel" in P && t(5, ue = P.floatingLabel), "lineRipple" in P && t(6, ke = P.lineRipple), "notchedOutline" in P && t(7, be = P.notchedOutline), "$$scope" in P && t(87, s = P.$$scope);
  }, n.$$.update = () => {
    if (n.$$.dirty[0] & /*input*/
    4 && t(33, i = j && j.getElement()), n.$$.dirty[0] & /*invalid, updateInvalid*/
    524290 | n.$$.dirty[1] & /*instance*/
    8388608 && K && K.isValid() !== !g && (D ? t(1, g = !K.isValid()) : K.setValid(!g)), n.$$.dirty[1] & /*instance, validateOnValueChange*/
    8519680 && K && K.getValidateOnValueChange() !== G && K.setValidateOnValueChange(f(G) ? !1 : G), n.$$.dirty[1] & /*instance, useNativeValidation*/
    8650752 && K && K.setUseNativeValidation(f(z) ? !0 : z), n.$$.dirty[0] & /*disabled*/
    4096 | n.$$.dirty[1] & /*instance*/
    8388608 && K && K.setDisabled(C), n.$$.dirty[0] & /*value*/
    1 | n.$$.dirty[1] & /*instance, previousValue*/
    25165824 && K && I && Ue !== A) {
      t(55, Ue = A);
      const P = `${A}`;
      K.getValue() !== P && K.setValue(P);
    }
  }, [
    A,
    g,
    j,
    w,
    O,
    ue,
    ke,
    be,
    h,
    p,
    b,
    m,
    C,
    v,
    T,
    y,
    k,
    R,
    _,
    D,
    N,
    W,
    F,
    L,
    Ye,
    x,
    _e,
    ye,
    Ne,
    ft,
    X,
    Te,
    qe,
    i,
    c,
    f,
    I,
    Ge,
    yt,
    M,
    $,
    Q,
    je,
    ut,
    et,
    De,
    l,
    o,
    G,
    z,
    de,
    Bt,
    Z,
    Se,
    K,
    Ue,
    a,
    Le,
    rt,
    xt,
    jn,
    vi,
    Ci,
    Ai,
    Ei,
    yi,
    yn,
    Si,
    ti,
    Ti,
    ni,
    Sn,
    Li,
    Oi,
    Ri,
    ki,
    Di,
    Mi,
    Fi,
    Ni,
    Ui,
    wi,
    Pi,
    Hi,
    Bi,
    Vi,
    ji,
    s
  ];
}
class oa extends Re {
  constructor(e) {
    super(), Oe(
      this,
      e,
      sc,
      lc,
      Ee,
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
function ac(n) {
  let e;
  return {
    c() {
      e = at(
        /*content*/
        n[7]
      );
    },
    m(t, i) {
      V(t, e, i);
    },
    p(t, i) {
      i & /*content*/
      128 && At(
        e,
        /*content*/
        t[7]
      );
    },
    i: $e,
    o: $e,
    d(t) {
      t && B(e);
    }
  };
}
function oc(n) {
  let e;
  const t = (
    /*#slots*/
    n[15].default
  ), i = Ie(
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
      16384) && Ce(
        i,
        t,
        r,
        /*$$scope*/
        r[14],
        e ? ve(
          t,
          /*$$scope*/
          r[14],
          l,
          null
        ) : Ae(
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
      S(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function uc(n) {
  let e, t, i, r, l, a, s, o, u, c;
  const d = [oc, ac], f = [];
  function h(m, C) {
    return (
      /*content*/
      m[7] == null ? 0 : 1
    );
  }
  t = h(n), i = f[t] = d[t](n);
  let p = [
    {
      class: r = le({
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
      "aria-disabled": a = /*role*/
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
  ], b = {};
  for (let m = 0; m < p.length; m += 1)
    b = Y(b, p[m]);
  return {
    c() {
      e = ne("i"), i.c(), ce(e, b);
    },
    m(m, C) {
      V(m, e, C), f[t].m(e, null), n[16](e), o = !0, u || (c = [
        fe(s = Qe.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        fe(
          /*forwardEvents*/
          n[9].call(null, e)
        )
      ], u = !0);
    },
    p(m, [C]) {
      let v = t;
      t = h(m), t === v ? f[t].p(m, C) : (Pe(), S(f[v], 1, 1, () => {
        f[v] = null;
      }), He(), i = f[t], i ? i.p(m, C) : (i = f[t] = d[t](m), i.c()), E(i, 1), i.m(e, null)), ce(e, b = he(p, [
        (!o || C & /*className*/
        2 && r !== (r = le({
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
        (!o || C & /*tabindex*/
        8 && l !== (l = /*tabindex*/
        m[3] === -1 ? "true" : "false")) && { "aria-hidden": l },
        (!o || C & /*role, disabled*/
        20 && a !== (a = /*role*/
        m[2] === "button" ? (
          /*disabled*/
          m[4] ? "true" : "false"
        ) : void 0)) && { "aria-disabled": a },
        C & /*roleProps*/
        256 && /*roleProps*/
        m[8],
        C & /*internalAttrs*/
        64 && /*internalAttrs*/
        m[6],
        C & /*$$restProps*/
        4096 && /*$$restProps*/
        m[12]
      ])), s && me(s.update) && C & /*use*/
      1 && s.update.call(
        null,
        /*use*/
        m[0]
      );
    },
    i(m) {
      o || (E(i), o = !0);
    },
    o(m) {
      S(i), o = !1;
    },
    d(m) {
      m && B(e), f[t].d(), n[16](null), u = !1, Ze(c);
    }
  };
}
function cc(n, e, t) {
  let i;
  const r = ["use", "class", "role", "tabindex", "disabled", "getElement"];
  let l = pe(e, r), a, { $$slots: s = {}, $$scope: o } = e;
  const u = nt(Je());
  let { use: c = [] } = e, { class: d = "" } = e, { role: f = void 0 } = e, { tabindex: h = f === "button" ? 0 : -1 } = e, { disabled: p = !1 } = e, b, m, C = {};
  const v = Ke("SMUI:textfield:icon:leading");
  it(n, v, (I) => t(18, a = I));
  const T = a;
  let y;
  ot(() => (m = new cu({
    getAttr: k,
    setAttr: R,
    removeAttr: _,
    setContent: (I) => {
      t(7, y = I);
    },
    registerInteractionHandler: (I, g) => A().addEventListener(I, g),
    deregisterInteractionHandler: (I, g) => A().removeEventListener(I, g),
    notifyIconAction: () => ge(A(), "SMUITextField:icon", void 0, void 0, !0)
  }), ge(
    A(),
    T ? "SMUITextfieldLeadingIcon:mount" : "SMUITextfieldTrailingIcon:mount",
    m
  ), m.init(), () => {
    ge(
      A(),
      T ? "SMUITextfieldLeadingIcon:unmount" : "SMUITextfieldTrailingIcon:unmount",
      m
    ), m.destroy();
  }));
  function k(I) {
    var g;
    return I in C ? (g = C[I]) !== null && g !== void 0 ? g : null : A().getAttribute(I);
  }
  function R(I, g) {
    C[I] !== g && t(6, C[I] = g, C);
  }
  function _(I) {
    (!(I in C) || C[I] != null) && t(6, C[I] = void 0, C);
  }
  function A() {
    return b;
  }
  function w(I) {
    se[I ? "unshift" : "push"](() => {
      b = I, t(5, b);
    });
  }
  return n.$$set = (I) => {
    e = Y(Y({}, e), tt(I)), t(12, l = pe(e, r)), "use" in I && t(0, c = I.use), "class" in I && t(1, d = I.class), "role" in I && t(2, f = I.role), "tabindex" in I && t(3, h = I.tabindex), "disabled" in I && t(4, p = I.disabled), "$$scope" in I && t(14, o = I.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty & /*role, tabindex*/
    12 && t(8, i = { role: f, tabindex: h });
  }, [
    c,
    d,
    f,
    h,
    p,
    b,
    C,
    y,
    i,
    u,
    v,
    T,
    l,
    A,
    o,
    s,
    w
  ];
}
class dc extends Re {
  constructor(e) {
    super(), Oe(this, e, cc, uc, Ee, {
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
function fc(n) {
  let e, t, i;
  function r(a) {
    n[6](a);
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
    n[0]), e = new oa({ props: l }), se.push(() => pt(e, "value", r)), {
      c() {
        ie(e.$$.fragment);
      },
      m(a, s) {
        ee(e, a, s), i = !0;
      },
      p(a, s) {
        const o = {};
        s & /*label*/
        4 && (o.label = /*label*/
        a[2]), s & /*placeholder*/
        2 && (o.placeholder = /*placeholder*/
        a[1]), s & /*variant*/
        16 && (o.variant = /*variant*/
        a[4]), !t && s & /*value*/
        1 && (t = !0, o.value = /*value*/
        a[0], mt(() => t = !1)), e.$set(o);
      },
      i(a) {
        i || (E(e.$$.fragment, a), i = !0);
      },
      o(a) {
        S(e.$$.fragment, a), i = !1;
      },
      d(a) {
        te(e, a);
      }
    }
  );
}
function hc(n) {
  let e, t, i;
  function r(a) {
    n[5](a);
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
    $$slots: { leadingIcon: [pc] },
    $$scope: { ctx: n }
  };
  return (
    /*value*/
    n[0] !== void 0 && (l.value = /*value*/
    n[0]), e = new oa({ props: l }), se.push(() => pt(e, "value", r)), {
      c() {
        ie(e.$$.fragment);
      },
      m(a, s) {
        ee(e, a, s), i = !0;
      },
      p(a, s) {
        const o = {};
        s & /*label*/
        4 && (o.label = /*label*/
        a[2]), s & /*placeholder*/
        2 && (o.placeholder = /*placeholder*/
        a[1]), s & /*variant*/
        16 && (o.variant = /*variant*/
        a[4]), s & /*$$scope, icon*/
        136 && (o.$$scope = { dirty: s, ctx: a }), !t && s & /*value*/
        1 && (t = !0, o.value = /*value*/
        a[0], mt(() => t = !1)), e.$set(o);
      },
      i(a) {
        i || (E(e.$$.fragment, a), i = !0);
      },
      o(a) {
        S(e.$$.fragment, a), i = !1;
      },
      d(a) {
        te(e, a);
      }
    }
  );
}
function mc(n) {
  let e;
  return {
    c() {
      e = at(
        /*icon*/
        n[3]
      );
    },
    m(t, i) {
      V(t, e, i);
    },
    p(t, i) {
      i & /*icon*/
      8 && At(
        e,
        /*icon*/
        t[3]
      );
    },
    d(t) {
      t && B(e);
    }
  };
}
function pc(n) {
  let e, t;
  return e = new dc({
    props: {
      class: "material-icons",
      slot: "leadingIcon",
      $$slots: { default: [mc] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      ie(e.$$.fragment);
    },
    m(i, r) {
      ee(e, i, r), t = !0;
    },
    p(i, r) {
      const l = {};
      r & /*$$scope, icon*/
      136 && (l.$$scope = { dirty: r, ctx: i }), e.$set(l);
    },
    i(i) {
      t || (E(e.$$.fragment, i), t = !0);
    },
    o(i) {
      S(e.$$.fragment, i), t = !1;
    },
    d(i) {
      te(e, i);
    }
  };
}
function gc(n) {
  let e, t, i, r;
  const l = [hc, fc], a = [];
  function s(o, u) {
    return (
      /*icon*/
      o[3] ? 0 : 1
    );
  }
  return e = s(n), t = a[e] = l[e](n), {
    c() {
      t.c(), i = Xe();
    },
    m(o, u) {
      a[e].m(o, u), V(o, i, u), r = !0;
    },
    p(o, [u]) {
      let c = e;
      e = s(o), e === c ? a[e].p(o, u) : (Pe(), S(a[c], 1, 1, () => {
        a[c] = null;
      }), He(), t = a[e], t ? t.p(o, u) : (t = a[e] = l[e](o), t.c()), E(t, 1), t.m(i.parentNode, i));
    },
    i(o) {
      r || (E(t), r = !0);
    },
    o(o) {
      S(t), r = !1;
    },
    d(o) {
      o && B(i), a[e].d(o);
    }
  };
}
function _c(n, e, t) {
  let { placeholder: i = "" } = e, { label: r = "" } = e, { icon: l = "" } = e, { value: a = "" } = e, { variant: s = "standard" } = e;
  function o(c) {
    a = c, t(0, a);
  }
  function u(c) {
    a = c, t(0, a);
  }
  return n.$$set = (c) => {
    "placeholder" in c && t(1, i = c.placeholder), "label" in c && t(2, r = c.label), "icon" in c && t(3, l = c.icon), "value" in c && t(0, a = c.value), "variant" in c && t(4, s = c.variant);
  }, [
    a,
    i,
    r,
    l,
    s,
    o,
    u
  ];
}
class bc extends Re {
  constructor(e) {
    super(), Oe(this, e, _c, gc, Ee, {
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
var Ic = {
  ANCHOR: "mdc-menu-surface--anchor",
  ANIMATING_CLOSED: "mdc-menu-surface--animating-closed",
  ANIMATING_OPEN: "mdc-menu-surface--animating-open",
  FIXED: "mdc-menu-surface--fixed",
  IS_OPEN_BELOW: "mdc-menu-surface--is-open-below",
  OPEN: "mdc-menu-surface--open",
  ROOT: "mdc-menu-surface"
}, vc = {
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
}, Kn = {
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
}, vt;
(function(n) {
  n[n.BOTTOM = 1] = "BOTTOM", n[n.CENTER = 2] = "CENTER", n[n.RIGHT = 4] = "RIGHT", n[n.FLIP_RTL = 8] = "FLIP_RTL";
})(vt || (vt = {}));
var vn;
(function(n) {
  n[n.TOP_LEFT = 0] = "TOP_LEFT", n[n.TOP_RIGHT = 4] = "TOP_RIGHT", n[n.BOTTOM_LEFT = 1] = "BOTTOM_LEFT", n[n.BOTTOM_RIGHT = 5] = "BOTTOM_RIGHT", n[n.TOP_START = 8] = "TOP_START", n[n.TOP_END = 12] = "TOP_END", n[n.BOTTOM_START = 9] = "BOTTOM_START", n[n.BOTTOM_END = 13] = "BOTTOM_END";
})(vn || (vn = {}));
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
var un, en, xe = {
  LIST_ITEM_ACTIVATED_CLASS: "mdc-list-item--activated",
  LIST_ITEM_CLASS: "mdc-list-item",
  LIST_ITEM_DISABLED_CLASS: "mdc-list-item--disabled",
  LIST_ITEM_SELECTED_CLASS: "mdc-list-item--selected",
  LIST_ITEM_TEXT_CLASS: "mdc-list-item__text",
  LIST_ITEM_PRIMARY_TEXT_CLASS: "mdc-list-item__primary-text",
  ROOT: "mdc-list"
};
un = {}, un["" + xe.LIST_ITEM_ACTIVATED_CLASS] = "mdc-list-item--activated", un["" + xe.LIST_ITEM_CLASS] = "mdc-list-item", un["" + xe.LIST_ITEM_DISABLED_CLASS] = "mdc-list-item--disabled", un["" + xe.LIST_ITEM_SELECTED_CLASS] = "mdc-list-item--selected", un["" + xe.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-list-item__primary-text", un["" + xe.ROOT] = "mdc-list";
var Rn = (en = {}, en["" + xe.LIST_ITEM_ACTIVATED_CLASS] = "mdc-deprecated-list-item--activated", en["" + xe.LIST_ITEM_CLASS] = "mdc-deprecated-list-item", en["" + xe.LIST_ITEM_DISABLED_CLASS] = "mdc-deprecated-list-item--disabled", en["" + xe.LIST_ITEM_SELECTED_CLASS] = "mdc-deprecated-list-item--selected", en["" + xe.LIST_ITEM_TEXT_CLASS] = "mdc-deprecated-list-item__text", en["" + xe.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-deprecated-list-item__primary-text", en["" + xe.ROOT] = "mdc-deprecated-list", en), cn = {
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
    .` + Rn[xe.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + Rn[xe.LIST_ITEM_CLASS] + ` a
  `,
  DEPRECATED_SELECTOR: ".mdc-deprecated-list",
  FOCUSABLE_CHILD_ELEMENTS: `
    .` + xe.LIST_ITEM_CLASS + ` button:not(:disabled),
    .` + xe.LIST_ITEM_CLASS + ` a,
    .` + xe.LIST_ITEM_CLASS + ` input[type="radio"]:not(:disabled),
    .` + xe.LIST_ITEM_CLASS + ` input[type="checkbox"]:not(:disabled),
    .` + Rn[xe.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + Rn[xe.LIST_ITEM_CLASS] + ` a,
    .` + Rn[xe.LIST_ITEM_CLASS] + ` input[type="radio"]:not(:disabled),
    .` + Rn[xe.LIST_ITEM_CLASS] + ` input[type="checkbox"]:not(:disabled)
  `,
  RADIO_SELECTOR: 'input[type="radio"]',
  SELECTED_ITEM_SELECTOR: '[aria-selected="true"], [aria-current="true"]'
}, bt = {
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
var Cc = ["input", "button", "textarea", "select"], Vt = function(n) {
  var e = n.target;
  if (e) {
    var t = ("" + e.tagName).toLowerCase();
    Cc.indexOf(t) === -1 && n.preventDefault();
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
function Ac() {
  var n = {
    bufferClearTimeout: 0,
    currentFirstChar: "",
    sortedIndexCursor: 0,
    typeaheadBuffer: ""
  };
  return n;
}
function Ec(n, e) {
  for (var t = /* @__PURE__ */ new Map(), i = 0; i < n; i++) {
    var r = e(i).trim();
    if (r) {
      var l = r[0].toLowerCase();
      t.has(l) || t.set(l, []), t.get(l).push({ text: r.toLowerCase(), index: i });
    }
  }
  return t.forEach(function(a) {
    a.sort(function(s, o) {
      return s.index - o.index;
    });
  }), t;
}
function cr(n, e) {
  var t = n.nextChar, i = n.focusItemAtIndex, r = n.sortedIndexByFirstChar, l = n.focusedItemIndex, a = n.skipFocus, s = n.isItemAtIndexDisabled;
  clearTimeout(e.bufferClearTimeout), e.bufferClearTimeout = setTimeout(function() {
    ca(e);
  }, bt.TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS), e.typeaheadBuffer = e.typeaheadBuffer + t;
  var o;
  return e.typeaheadBuffer.length === 1 ? o = yc(r, l, s, e) : o = Sc(r, s, e), o !== -1 && !a && i(o), o;
}
function yc(n, e, t, i) {
  var r = i.typeaheadBuffer[0], l = n.get(r);
  if (!l)
    return -1;
  if (r === i.currentFirstChar && l[i.sortedIndexCursor].index === e) {
    i.sortedIndexCursor = (i.sortedIndexCursor + 1) % l.length;
    var a = l[i.sortedIndexCursor].index;
    if (!t(a))
      return a;
  }
  i.currentFirstChar = r;
  var s = -1, o;
  for (o = 0; o < l.length; o++)
    if (!t(l[o].index)) {
      s = o;
      break;
    }
  for (; o < l.length; o++)
    if (l[o].index > e && !t(l[o].index)) {
      s = o;
      break;
    }
  return s !== -1 ? (i.sortedIndexCursor = s, l[i.sortedIndexCursor].index) : -1;
}
function Sc(n, e, t) {
  var i = t.typeaheadBuffer[0], r = n.get(i);
  if (!r)
    return -1;
  var l = r[t.sortedIndexCursor];
  if (l.text.lastIndexOf(t.typeaheadBuffer, 0) === 0 && !e(l.index))
    return l.index;
  for (var a = (t.sortedIndexCursor + 1) % r.length, s = -1; a !== t.sortedIndexCursor; ) {
    var o = r[a], u = o.text.lastIndexOf(t.typeaheadBuffer, 0) === 0, c = !e(o.index);
    if (u && c) {
      s = a;
      break;
    }
    a = (a + 1) % r.length;
  }
  return s !== -1 ? (t.sortedIndexCursor = s, r[t.sortedIndexCursor].index) : -1;
}
function ua(n) {
  return n.typeaheadBuffer.length > 0;
}
function ca(n) {
  n.typeaheadBuffer = "";
}
function Cl(n, e) {
  var t = n.event, i = n.isTargetListItem, r = n.focusedItemIndex, l = n.focusItemAtIndex, a = n.sortedIndexByFirstChar, s = n.isItemAtIndexDisabled, o = _t(t) === "ArrowLeft", u = _t(t) === "ArrowUp", c = _t(t) === "ArrowRight", d = _t(t) === "ArrowDown", f = _t(t) === "Home", h = _t(t) === "End", p = _t(t) === "Enter", b = _t(t) === "Spacebar";
  if (t.altKey || t.ctrlKey || t.metaKey || o || u || c || d || f || h || p)
    return -1;
  var m = !b && t.key.length === 1;
  if (m) {
    Vt(t);
    var C = {
      focusItemAtIndex: l,
      focusedItemIndex: r,
      nextChar: t.key.toLowerCase(),
      sortedIndexByFirstChar: a,
      skipFocus: !1,
      isItemAtIndexDisabled: s
    };
    return cr(C, e);
  }
  if (!b)
    return -1;
  i && Vt(t);
  var v = i && ua(e);
  if (v) {
    var C = {
      focusItemAtIndex: l,
      focusedItemIndex: r,
      nextChar: " ",
      sortedIndexByFirstChar: a,
      skipFocus: !1,
      isItemAtIndexDisabled: s
    };
    return cr(C, e);
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
function Tc(n) {
  return n instanceof Array;
}
var Lc = ["Alt", "Control", "Meta", "Shift"];
function Al(n) {
  var e = new Set(n ? Lc.filter(function(t) {
    return n.getModifierState(t);
  }) : []);
  return function(t) {
    return t.every(function(i) {
      return e.has(i);
    }) && t.length === e.size;
  };
}
var Oc = (
  /** @class */
  function(n) {
    ct(e, n);
    function e(t) {
      var i = n.call(this, ze(ze({}, e.defaultAdapter), t)) || this;
      return i.wrapFocus = !1, i.isVertical = !0, i.isSingleSelectionList = !1, i.areDisabledItemsFocusable = !0, i.selectedIndex = bt.UNSET_INDEX, i.focusedItemIndex = bt.UNSET_INDEX, i.useActivatedClass = !1, i.useSelectedAttr = !1, i.ariaCurrentAttrValue = null, i.isCheckboxList = !1, i.isRadioList = !1, i.lastSelectedIndex = null, i.hasTypeahead = !1, i.typeaheadState = Ac(), i.sortedIndexByFirstChar = /* @__PURE__ */ new Map(), i;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return cn;
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
        return bt;
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
    }, e.prototype.setWrapFocus = function(t) {
      this.wrapFocus = t;
    }, e.prototype.setVerticalOrientation = function(t) {
      this.isVertical = t;
    }, e.prototype.setSingleSelection = function(t) {
      this.isSingleSelectionList = t, t && (this.maybeInitializeSingleSelection(), this.selectedIndex = this.getSelectedIndexFromDOM());
    }, e.prototype.setDisabledItemsFocusable = function(t) {
      this.areDisabledItemsFocusable = t;
    }, e.prototype.maybeInitializeSingleSelection = function() {
      var t = this.getSelectedIndexFromDOM();
      if (t !== bt.UNSET_INDEX) {
        var i = this.adapter.listItemAtIndexHasClass(t, xe.LIST_ITEM_ACTIVATED_CLASS);
        i && this.setUseActivatedClass(!0), this.isSingleSelectionList = !0, this.selectedIndex = t;
      }
    }, e.prototype.getSelectedIndexFromDOM = function() {
      for (var t = bt.UNSET_INDEX, i = this.adapter.getListItemCount(), r = 0; r < i; r++) {
        var l = this.adapter.listItemAtIndexHasClass(r, xe.LIST_ITEM_SELECTED_CLASS), a = this.adapter.listItemAtIndexHasClass(r, xe.LIST_ITEM_ACTIVATED_CLASS);
        if (l || a) {
          t = r;
          break;
        }
      }
      return t;
    }, e.prototype.setHasTypeahead = function(t) {
      this.hasTypeahead = t, t && (this.sortedIndexByFirstChar = this.typeaheadInitSortedIndex());
    }, e.prototype.isTypeaheadInProgress = function() {
      return this.hasTypeahead && ua(this.typeaheadState);
    }, e.prototype.setUseActivatedClass = function(t) {
      this.useActivatedClass = t;
    }, e.prototype.setUseSelectedAttribute = function(t) {
      this.useSelectedAttr = t;
    }, e.prototype.getSelectedIndex = function() {
      return this.selectedIndex;
    }, e.prototype.setSelectedIndex = function(t, i) {
      i === void 0 && (i = {}), this.isIndexValid(t) && (this.isCheckboxList ? this.setCheckboxAtIndex(t, i) : this.isRadioList ? this.setRadioAtIndex(t, i) : this.setSingleSelectionAtIndex(t, i));
    }, e.prototype.handleFocusIn = function(t) {
      t >= 0 && (this.focusedItemIndex = t, this.adapter.setAttributeForElementIndex(t, "tabindex", "0"), this.adapter.setTabIndexForListItemChildren(t, "0"));
    }, e.prototype.handleFocusOut = function(t) {
      var i = this;
      t >= 0 && (this.adapter.setAttributeForElementIndex(t, "tabindex", "-1"), this.adapter.setTabIndexForListItemChildren(t, "-1")), setTimeout(function() {
        i.adapter.isFocusInsideList() || i.setTabindexToFirstSelectedOrFocusedItem();
      }, 0);
    }, e.prototype.isIndexDisabled = function(t) {
      return this.adapter.listItemAtIndexHasClass(t, xe.LIST_ITEM_DISABLED_CLASS);
    }, e.prototype.handleKeydown = function(t, i, r) {
      var l = this, a, s = _t(t) === "ArrowLeft", o = _t(t) === "ArrowUp", u = _t(t) === "ArrowRight", c = _t(t) === "ArrowDown", d = _t(t) === "Home", f = _t(t) === "End", h = _t(t) === "Enter", p = _t(t) === "Spacebar", b = this.isVertical && c || !this.isVertical && u, m = this.isVertical && o || !this.isVertical && s, C = t.key === "A" || t.key === "a", v = Al(t);
      if (this.adapter.isRootFocused()) {
        if ((m || f) && v([]))
          t.preventDefault(), this.focusLastElement();
        else if ((b || d) && v([]))
          t.preventDefault(), this.focusFirstElement();
        else if (m && v(["Shift"]) && this.isCheckboxList) {
          t.preventDefault();
          var T = this.focusLastElement();
          T !== -1 && this.setSelectedIndexOnAction(T, !1);
        } else if (b && v(["Shift"]) && this.isCheckboxList) {
          t.preventDefault();
          var T = this.focusFirstElement();
          T !== -1 && this.setSelectedIndexOnAction(T, !1);
        }
        if (this.hasTypeahead) {
          var y = {
            event: t,
            focusItemAtIndex: function(_) {
              l.focusItemAtIndex(_);
            },
            focusedItemIndex: -1,
            isTargetListItem: i,
            sortedIndexByFirstChar: this.sortedIndexByFirstChar,
            isItemAtIndexDisabled: function(_) {
              return l.isIndexDisabled(_);
            }
          };
          Cl(y, this.typeaheadState);
        }
        return;
      }
      var k = this.adapter.getFocusedElementIndex();
      if (!(k === -1 && (k = r, k < 0))) {
        if (b && v([]))
          Vt(t), this.focusNextElement(k);
        else if (m && v([]))
          Vt(t), this.focusPrevElement(k);
        else if (b && v(["Shift"]) && this.isCheckboxList) {
          Vt(t);
          var T = this.focusNextElement(k);
          T !== -1 && this.setSelectedIndexOnAction(T, !1);
        } else if (m && v(["Shift"]) && this.isCheckboxList) {
          Vt(t);
          var T = this.focusPrevElement(k);
          T !== -1 && this.setSelectedIndexOnAction(T, !1);
        } else if (d && v([]))
          Vt(t), this.focusFirstElement();
        else if (f && v([]))
          Vt(t), this.focusLastElement();
        else if (d && v(["Control", "Shift"]) && this.isCheckboxList) {
          if (Vt(t), this.isIndexDisabled(k))
            return;
          this.focusFirstElement(), this.toggleCheckboxRange(0, k, k);
        } else if (f && v(["Control", "Shift"]) && this.isCheckboxList) {
          if (Vt(t), this.isIndexDisabled(k))
            return;
          this.focusLastElement(), this.toggleCheckboxRange(k, this.adapter.getListItemCount() - 1, k);
        } else if (C && v(["Control"]) && this.isCheckboxList)
          t.preventDefault(), this.checkboxListToggleAll(this.selectedIndex === bt.UNSET_INDEX ? [] : this.selectedIndex, !0);
        else if ((h || p) && v([])) {
          if (i) {
            var R = t.target;
            if (R && R.tagName === "A" && h || (Vt(t), this.isIndexDisabled(k)))
              return;
            this.isTypeaheadInProgress() || (this.isSelectableList() && this.setSelectedIndexOnAction(k, !1), this.adapter.notifyAction(k));
          }
        } else if ((h || p) && v(["Shift"]) && this.isCheckboxList) {
          var R = t.target;
          if (R && R.tagName === "A" && h || (Vt(t), this.isIndexDisabled(k)))
            return;
          this.isTypeaheadInProgress() || (this.toggleCheckboxRange((a = this.lastSelectedIndex) !== null && a !== void 0 ? a : k, k, k), this.adapter.notifyAction(k));
        }
        if (this.hasTypeahead) {
          var y = {
            event: t,
            focusItemAtIndex: function(A) {
              l.focusItemAtIndex(A);
            },
            focusedItemIndex: this.focusedItemIndex,
            isTargetListItem: i,
            sortedIndexByFirstChar: this.sortedIndexByFirstChar,
            isItemAtIndexDisabled: function(A) {
              return l.isIndexDisabled(A);
            }
          };
          Cl(y, this.typeaheadState);
        }
      }
    }, e.prototype.handleClick = function(t, i, r) {
      var l, a = Al(r);
      t !== bt.UNSET_INDEX && (this.isIndexDisabled(t) || (a([]) ? (this.isSelectableList() && this.setSelectedIndexOnAction(t, i), this.adapter.notifyAction(t)) : this.isCheckboxList && a(["Shift"]) && (this.toggleCheckboxRange((l = this.lastSelectedIndex) !== null && l !== void 0 ? l : t, t, t), this.adapter.notifyAction(t))));
    }, e.prototype.focusNextElement = function(t) {
      var i = this.adapter.getListItemCount(), r = t, l = null;
      do {
        if (r++, r >= i)
          if (this.wrapFocus)
            r = 0;
          else
            return t;
        if (r === l)
          return -1;
        l = l ?? r;
      } while (!this.areDisabledItemsFocusable && this.isIndexDisabled(r));
      return this.focusItemAtIndex(r), r;
    }, e.prototype.focusPrevElement = function(t) {
      var i = this.adapter.getListItemCount(), r = t, l = null;
      do {
        if (r--, r < 0)
          if (this.wrapFocus)
            r = i - 1;
          else
            return t;
        if (r === l)
          return -1;
        l = l ?? r;
      } while (!this.areDisabledItemsFocusable && this.isIndexDisabled(r));
      return this.focusItemAtIndex(r), r;
    }, e.prototype.focusFirstElement = function() {
      return this.focusNextElement(-1);
    }, e.prototype.focusLastElement = function() {
      return this.focusPrevElement(this.adapter.getListItemCount());
    }, e.prototype.focusInitialElement = function() {
      var t = this.getFirstSelectedOrFocusedItemIndex();
      return this.focusItemAtIndex(t), t;
    }, e.prototype.setEnabled = function(t, i) {
      this.isIndexValid(t, !1) && (i ? (this.adapter.removeClassForElementIndex(t, xe.LIST_ITEM_DISABLED_CLASS), this.adapter.setAttributeForElementIndex(t, cn.ARIA_DISABLED, "false")) : (this.adapter.addClassForElementIndex(t, xe.LIST_ITEM_DISABLED_CLASS), this.adapter.setAttributeForElementIndex(t, cn.ARIA_DISABLED, "true")));
    }, e.prototype.setSingleSelectionAtIndex = function(t, i) {
      if (i === void 0 && (i = {}), !(this.selectedIndex === t && !i.forceUpdate)) {
        var r = xe.LIST_ITEM_SELECTED_CLASS;
        this.useActivatedClass && (r = xe.LIST_ITEM_ACTIVATED_CLASS), this.selectedIndex !== bt.UNSET_INDEX && this.adapter.removeClassForElementIndex(this.selectedIndex, r), this.setAriaForSingleSelectionAtIndex(t), this.setTabindexAtIndex(t), t !== bt.UNSET_INDEX && this.adapter.addClassForElementIndex(t, r), this.selectedIndex = t, i.isUserInteraction && !i.forceUpdate && this.adapter.notifySelectionChange([t]);
      }
    }, e.prototype.setAriaForSingleSelectionAtIndex = function(t) {
      this.selectedIndex === bt.UNSET_INDEX && (this.ariaCurrentAttrValue = this.adapter.getAttributeForElementIndex(t, cn.ARIA_CURRENT));
      var i = this.ariaCurrentAttrValue !== null, r = i ? cn.ARIA_CURRENT : cn.ARIA_SELECTED;
      if (this.selectedIndex !== bt.UNSET_INDEX && this.adapter.setAttributeForElementIndex(this.selectedIndex, r, "false"), t !== bt.UNSET_INDEX) {
        var l = i ? this.ariaCurrentAttrValue : "true";
        this.adapter.setAttributeForElementIndex(t, r, l);
      }
    }, e.prototype.getSelectionAttribute = function() {
      return this.useSelectedAttr ? cn.ARIA_SELECTED : cn.ARIA_CHECKED;
    }, e.prototype.setRadioAtIndex = function(t, i) {
      i === void 0 && (i = {});
      var r = this.getSelectionAttribute();
      this.adapter.setCheckedCheckboxOrRadioAtIndex(t, !0), !(this.selectedIndex === t && !i.forceUpdate) && (this.selectedIndex !== bt.UNSET_INDEX && this.adapter.setAttributeForElementIndex(this.selectedIndex, r, "false"), this.adapter.setAttributeForElementIndex(t, r, "true"), this.selectedIndex = t, i.isUserInteraction && !i.forceUpdate && this.adapter.notifySelectionChange([t]));
    }, e.prototype.setCheckboxAtIndex = function(t, i) {
      i === void 0 && (i = {});
      for (var r = this.selectedIndex, l = i.isUserInteraction ? new Set(r === bt.UNSET_INDEX ? [] : r) : null, a = this.getSelectionAttribute(), s = [], o = 0; o < this.adapter.getListItemCount(); o++) {
        var u = l == null ? void 0 : l.has(o), c = t.indexOf(o) >= 0;
        c !== u && s.push(o), this.adapter.setCheckedCheckboxOrRadioAtIndex(o, c), this.adapter.setAttributeForElementIndex(o, a, c ? "true" : "false");
      }
      this.selectedIndex = t, i.isUserInteraction && s.length && this.adapter.notifySelectionChange(s);
    }, e.prototype.toggleCheckboxRange = function(t, i, r) {
      this.lastSelectedIndex = r;
      for (var l = new Set(this.selectedIndex === bt.UNSET_INDEX ? [] : this.selectedIndex), a = !(l != null && l.has(r)), s = Bn([t, i].sort(), 2), o = s[0], u = s[1], c = this.getSelectionAttribute(), d = [], f = o; f <= u; f++)
        if (!this.isIndexDisabled(f)) {
          var h = l.has(f);
          a !== h && (d.push(f), this.adapter.setCheckedCheckboxOrRadioAtIndex(f, a), this.adapter.setAttributeForElementIndex(f, c, "" + a), a ? l.add(f) : l.delete(f));
        }
      d.length && (this.selectedIndex = $n([], Bn(l)), this.adapter.notifySelectionChange(d));
    }, e.prototype.setTabindexAtIndex = function(t) {
      this.focusedItemIndex === bt.UNSET_INDEX && t !== 0 ? this.adapter.setAttributeForElementIndex(0, "tabindex", "-1") : this.focusedItemIndex >= 0 && this.focusedItemIndex !== t && this.adapter.setAttributeForElementIndex(this.focusedItemIndex, "tabindex", "-1"), !(this.selectedIndex instanceof Array) && this.selectedIndex !== t && this.adapter.setAttributeForElementIndex(this.selectedIndex, "tabindex", "-1"), t !== bt.UNSET_INDEX && this.adapter.setAttributeForElementIndex(t, "tabindex", "0");
    }, e.prototype.isSelectableList = function() {
      return this.isSingleSelectionList || this.isCheckboxList || this.isRadioList;
    }, e.prototype.setTabindexToFirstSelectedOrFocusedItem = function() {
      var t = this.getFirstSelectedOrFocusedItemIndex();
      this.setTabindexAtIndex(t);
    }, e.prototype.getFirstSelectedOrFocusedItemIndex = function() {
      return this.isSelectableList() ? typeof this.selectedIndex == "number" && this.selectedIndex !== bt.UNSET_INDEX ? this.selectedIndex : Tc(this.selectedIndex) && this.selectedIndex.length > 0 ? this.selectedIndex.reduce(function(t, i) {
        return Math.min(t, i);
      }) : 0 : Math.max(this.focusedItemIndex, 0);
    }, e.prototype.isIndexValid = function(t, i) {
      var r = this;
      if (i === void 0 && (i = !0), t instanceof Array) {
        if (!this.isCheckboxList && i)
          throw new Error("MDCListFoundation: Array of index is only supported for checkbox based list");
        return t.length === 0 ? !0 : t.some(function(l) {
          return r.isIndexInRange(l);
        });
      } else if (typeof t == "number") {
        if (this.isCheckboxList && i)
          throw new Error("MDCListFoundation: Expected array of index for checkbox based list but got number: " + t);
        return this.isIndexInRange(t) || this.isSingleSelectionList && t === bt.UNSET_INDEX;
      } else
        return !1;
    }, e.prototype.isIndexInRange = function(t) {
      var i = this.adapter.getListItemCount();
      return t >= 0 && t < i;
    }, e.prototype.setSelectedIndexOnAction = function(t, i) {
      this.lastSelectedIndex = t, this.isCheckboxList ? (this.toggleCheckboxAtIndex(t, i), this.adapter.notifySelectionChange([t])) : this.setSelectedIndex(t, { isUserInteraction: !0 });
    }, e.prototype.toggleCheckboxAtIndex = function(t, i) {
      var r = this.getSelectionAttribute(), l = this.adapter.isCheckboxCheckedAtIndex(t), a;
      i ? a = l : (a = !l, this.adapter.setCheckedCheckboxOrRadioAtIndex(t, a)), this.adapter.setAttributeForElementIndex(t, r, a ? "true" : "false");
      var s = this.selectedIndex === bt.UNSET_INDEX ? [] : this.selectedIndex.slice();
      a ? s.push(t) : s = s.filter(function(o) {
        return o !== t;
      }), this.selectedIndex = s;
    }, e.prototype.focusItemAtIndex = function(t) {
      this.adapter.focusItemAtIndex(t), this.focusedItemIndex = t;
    }, e.prototype.checkboxListToggleAll = function(t, i) {
      var r = this.adapter.getListItemCount();
      if (t.length === r)
        this.setCheckboxAtIndex([], { isUserInteraction: i });
      else {
        for (var l = [], a = 0; a < r; a++)
          (!this.isIndexDisabled(a) || t.indexOf(a) > -1) && l.push(a);
        this.setCheckboxAtIndex(l, { isUserInteraction: i });
      }
    }, e.prototype.typeaheadMatchItem = function(t, i, r) {
      var l = this;
      r === void 0 && (r = !1);
      var a = {
        focusItemAtIndex: function(s) {
          l.focusItemAtIndex(s);
        },
        focusedItemIndex: i || this.focusedItemIndex,
        nextChar: t,
        sortedIndexByFirstChar: this.sortedIndexByFirstChar,
        skipFocus: r,
        isItemAtIndexDisabled: function(s) {
          return l.isIndexDisabled(s);
        }
      };
      return cr(a, this.typeaheadState);
    }, e.prototype.typeaheadInitSortedIndex = function() {
      return Ec(this.adapter.getListItemCount(), this.adapter.getPrimaryTextAtIndex);
    }, e.prototype.clearTypeaheadBuffer = function() {
      ca(this.typeaheadState);
    }, e;
  }(Tt)
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
var da = (
  /** @class */
  function(n) {
    ct(e, n);
    function e(t) {
      var i = n.call(this, ze(ze({}, e.defaultAdapter), t)) || this;
      return i.isSurfaceOpen = !1, i.isQuickOpen = !1, i.isHoistedElement = !1, i.isFixedPosition = !1, i.isHorizontallyCenteredOnViewport = !1, i.maxHeight = 0, i.openBottomBias = 0, i.openAnimationEndTimerId = 0, i.closeAnimationEndTimerId = 0, i.animationRequestId = 0, i.anchorCorner = vn.TOP_START, i.originCorner = vn.TOP_START, i.anchorMargin = { top: 0, right: 0, bottom: 0, left: 0 }, i.position = { x: 0, y: 0 }, i;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Ic;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return vc;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return Kn;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "Corner", {
      get: function() {
        return vn;
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
      var t = e.cssClasses, i = t.ROOT, r = t.OPEN;
      if (!this.adapter.hasClass(i))
        throw new Error(i + " class required in root element.");
      this.adapter.hasClass(r) && (this.isSurfaceOpen = !0);
    }, e.prototype.destroy = function() {
      clearTimeout(this.openAnimationEndTimerId), clearTimeout(this.closeAnimationEndTimerId), cancelAnimationFrame(this.animationRequestId);
    }, e.prototype.setAnchorCorner = function(t) {
      this.anchorCorner = t;
    }, e.prototype.flipCornerHorizontally = function() {
      this.originCorner = this.originCorner ^ vt.RIGHT;
    }, e.prototype.setAnchorMargin = function(t) {
      this.anchorMargin.top = t.top || 0, this.anchorMargin.right = t.right || 0, this.anchorMargin.bottom = t.bottom || 0, this.anchorMargin.left = t.left || 0;
    }, e.prototype.setIsHoisted = function(t) {
      this.isHoistedElement = t;
    }, e.prototype.setFixedPosition = function(t) {
      this.isFixedPosition = t;
    }, e.prototype.isFixed = function() {
      return this.isFixedPosition;
    }, e.prototype.setAbsolutePosition = function(t, i) {
      this.position.x = this.isFinite(t) ? t : 0, this.position.y = this.isFinite(i) ? i : 0;
    }, e.prototype.setIsHorizontallyCenteredOnViewport = function(t) {
      this.isHorizontallyCenteredOnViewport = t;
    }, e.prototype.setQuickOpen = function(t) {
      this.isQuickOpen = t;
    }, e.prototype.setMaxHeight = function(t) {
      this.maxHeight = t;
    }, e.prototype.setOpenBottomBias = function(t) {
      this.openBottomBias = t;
    }, e.prototype.isOpen = function() {
      return this.isSurfaceOpen;
    }, e.prototype.open = function() {
      var t = this;
      this.isSurfaceOpen || (this.adapter.notifyOpening(), this.adapter.saveFocus(), this.isQuickOpen ? (this.isSurfaceOpen = !0, this.adapter.addClass(e.cssClasses.OPEN), this.dimensions = this.adapter.getInnerDimensions(), this.autoposition(), this.adapter.notifyOpen()) : (this.adapter.addClass(e.cssClasses.ANIMATING_OPEN), this.animationRequestId = requestAnimationFrame(function() {
        t.dimensions = t.adapter.getInnerDimensions(), t.autoposition(), t.adapter.addClass(e.cssClasses.OPEN), t.openAnimationEndTimerId = setTimeout(function() {
          t.openAnimationEndTimerId = 0, t.adapter.removeClass(e.cssClasses.ANIMATING_OPEN), t.adapter.notifyOpen();
        }, Kn.TRANSITION_OPEN_DURATION);
      }), this.isSurfaceOpen = !0));
    }, e.prototype.close = function(t) {
      var i = this;
      if (t === void 0 && (t = !1), !!this.isSurfaceOpen) {
        if (this.adapter.notifyClosing(), this.isQuickOpen) {
          this.isSurfaceOpen = !1, t || this.maybeRestoreFocus(), this.adapter.removeClass(e.cssClasses.OPEN), this.adapter.removeClass(e.cssClasses.IS_OPEN_BELOW), this.adapter.notifyClose();
          return;
        }
        this.adapter.addClass(e.cssClasses.ANIMATING_CLOSED), requestAnimationFrame(function() {
          i.adapter.removeClass(e.cssClasses.OPEN), i.adapter.removeClass(e.cssClasses.IS_OPEN_BELOW), i.closeAnimationEndTimerId = setTimeout(function() {
            i.closeAnimationEndTimerId = 0, i.adapter.removeClass(e.cssClasses.ANIMATING_CLOSED), i.adapter.notifyClose();
          }, Kn.TRANSITION_CLOSE_DURATION);
        }), this.isSurfaceOpen = !1, t || this.maybeRestoreFocus();
      }
    }, e.prototype.handleBodyClick = function(t) {
      var i = t.target;
      this.adapter.isElementInContainer(i) || this.close();
    }, e.prototype.handleKeydown = function(t) {
      var i = t.keyCode, r = t.key, l = r === "Escape" || i === 27;
      l && this.close();
    }, e.prototype.autoposition = function() {
      var t;
      this.measurements = this.getAutoLayoutmeasurements();
      var i = this.getoriginCorner(), r = this.getMenuSurfaceMaxHeight(i), l = this.hasBit(i, vt.BOTTOM) ? "bottom" : "top", a = this.hasBit(i, vt.RIGHT) ? "right" : "left", s = this.getHorizontalOriginOffset(i), o = this.getVerticalOriginOffset(i), u = this.measurements, c = u.anchorSize, d = u.surfaceSize, f = (t = {}, t[a] = s, t[l] = o, t);
      c.width / d.width > Kn.ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO && (a = "center"), (this.isHoistedElement || this.isFixedPosition) && this.adjustPositionForHoistedElement(f), this.adapter.setTransformOrigin(a + " " + l), this.adapter.setPosition(f), this.adapter.setMaxHeight(r ? r + "px" : ""), this.hasBit(i, vt.BOTTOM) || this.adapter.addClass(e.cssClasses.IS_OPEN_BELOW);
    }, e.prototype.getAutoLayoutmeasurements = function() {
      var t = this.adapter.getAnchorDimensions(), i = this.adapter.getBodyDimensions(), r = this.adapter.getWindowDimensions(), l = this.adapter.getWindowScroll();
      return t || (t = {
        top: this.position.y,
        right: this.position.x,
        bottom: this.position.y,
        left: this.position.x,
        width: 0,
        height: 0
      }), {
        anchorSize: t,
        bodySize: i,
        surfaceSize: this.dimensions,
        viewportDistance: {
          // tslint:disable:object-literal-sort-keys Positional properties are more readable when they're grouped together
          top: t.top,
          right: r.width - t.right,
          bottom: r.height - t.bottom,
          left: t.left
          // tslint:enable:object-literal-sort-keys
        },
        viewportSize: r,
        windowScroll: l
      };
    }, e.prototype.getoriginCorner = function() {
      var t = this.originCorner, i = this.measurements, r = i.viewportDistance, l = i.anchorSize, a = i.surfaceSize, s = e.numbers.MARGIN_TO_EDGE, o = this.hasBit(this.anchorCorner, vt.BOTTOM), u, c;
      o ? (u = r.top - s + this.anchorMargin.bottom, c = r.bottom - s - this.anchorMargin.bottom) : (u = r.top - s + this.anchorMargin.top, c = r.bottom - s + l.height - this.anchorMargin.top);
      var d = c - a.height > 0;
      !d && u > c + this.openBottomBias && (t = this.setBit(t, vt.BOTTOM));
      var f = this.adapter.isRtl(), h = this.hasBit(this.anchorCorner, vt.FLIP_RTL), p = this.hasBit(this.anchorCorner, vt.RIGHT) || this.hasBit(t, vt.RIGHT), b = !1;
      f && h ? b = !p : b = p;
      var m, C;
      b ? (m = r.left + l.width + this.anchorMargin.right, C = r.right - this.anchorMargin.right) : (m = r.left + this.anchorMargin.left, C = r.right + l.width - this.anchorMargin.left);
      var v = m - a.width > 0, T = C - a.width > 0, y = this.hasBit(t, vt.FLIP_RTL) && this.hasBit(t, vt.RIGHT);
      return T && y && f || !v && y ? t = this.unsetBit(t, vt.RIGHT) : (v && b && f || v && !b && p || !T && m >= C) && (t = this.setBit(t, vt.RIGHT)), t;
    }, e.prototype.getMenuSurfaceMaxHeight = function(t) {
      if (this.maxHeight > 0)
        return this.maxHeight;
      var i = this.measurements.viewportDistance, r = 0, l = this.hasBit(t, vt.BOTTOM), a = this.hasBit(this.anchorCorner, vt.BOTTOM), s = e.numbers.MARGIN_TO_EDGE;
      return l ? (r = i.top + this.anchorMargin.top - s, a || (r += this.measurements.anchorSize.height)) : (r = i.bottom - this.anchorMargin.bottom + this.measurements.anchorSize.height - s, a && (r -= this.measurements.anchorSize.height)), r;
    }, e.prototype.getHorizontalOriginOffset = function(t) {
      var i = this.measurements.anchorSize, r = this.hasBit(t, vt.RIGHT), l = this.hasBit(this.anchorCorner, vt.RIGHT);
      if (r) {
        var a = l ? i.width - this.anchorMargin.left : this.anchorMargin.right;
        return this.isHoistedElement || this.isFixedPosition ? a - (this.measurements.viewportSize.width - this.measurements.bodySize.width) : a;
      }
      return l ? i.width - this.anchorMargin.right : this.anchorMargin.left;
    }, e.prototype.getVerticalOriginOffset = function(t) {
      var i = this.measurements.anchorSize, r = this.hasBit(t, vt.BOTTOM), l = this.hasBit(this.anchorCorner, vt.BOTTOM), a = 0;
      return r ? a = l ? i.height - this.anchorMargin.top : -this.anchorMargin.bottom : a = l ? i.height + this.anchorMargin.bottom : this.anchorMargin.top, a;
    }, e.prototype.adjustPositionForHoistedElement = function(t) {
      var i, r, l = this.measurements, a = l.windowScroll, s = l.viewportDistance, o = l.surfaceSize, u = l.viewportSize, c = Object.keys(t);
      try {
        for (var d = St(c), f = d.next(); !f.done; f = d.next()) {
          var h = f.value, p = t[h] || 0;
          if (this.isHorizontallyCenteredOnViewport && (h === "left" || h === "right")) {
            t[h] = (u.width - o.width) / 2;
            continue;
          }
          p += s[h], this.isFixedPosition || (h === "top" ? p += a.y : h === "bottom" ? p -= a.y : h === "left" ? p += a.x : p -= a.x), t[h] = p;
        }
      } catch (b) {
        i = { error: b };
      } finally {
        try {
          f && !f.done && (r = d.return) && r.call(d);
        } finally {
          if (i)
            throw i.error;
        }
      }
    }, e.prototype.maybeRestoreFocus = function() {
      var t = this, i = this.adapter.isFocused(), r = this.adapter.getOwnerDocument ? this.adapter.getOwnerDocument() : document, l = r.activeElement && this.adapter.isElementInContainer(r.activeElement);
      (i || l) && setTimeout(function() {
        t.adapter.restoreFocus();
      }, Kn.TOUCH_EVENT_WAIT_MS);
    }, e.prototype.hasBit = function(t, i) {
      return !!(t & i);
    }, e.prototype.setBit = function(t, i) {
      return t | i;
    }, e.prototype.unsetBit = function(t, i) {
      return t ^ i;
    }, e.prototype.isFinite = function(t) {
      return typeof t == "number" && isFinite(t);
    }, e;
  }(Tt)
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
var El = {
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
function Rc(n) {
  return !!n.document && typeof n.document.createElement == "function";
}
function kc(n, e) {
  if (Rc(n) && e in El) {
    var t = n.document.createElement("div"), i = El[e], r = i.standard, l = i.prefixed, a = r in t.style;
    return a ? r : l;
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
var Pn = {
  MENU_SELECTED_LIST_ITEM: "mdc-menu-item--selected",
  MENU_SELECTION_GROUP: "mdc-menu__selection-group",
  ROOT: "mdc-menu"
}, kn = {
  ARIA_CHECKED_ATTR: "aria-checked",
  ARIA_DISABLED_ATTR: "aria-disabled",
  CHECKBOX_SELECTOR: 'input[type="checkbox"]',
  LIST_SELECTOR: ".mdc-list,.mdc-deprecated-list",
  SELECTED_EVENT: "MDCMenu:selected",
  SKIP_RESTORE_FOCUS: "data-menu-item-skip-restore-focus"
}, Dc = {
  FOCUS_ROOT_INDEX: -1
}, Mn;
(function(n) {
  n[n.NONE = 0] = "NONE", n[n.LIST_ROOT = 1] = "LIST_ROOT", n[n.FIRST_ITEM = 2] = "FIRST_ITEM", n[n.LAST_ITEM = 3] = "LAST_ITEM";
})(Mn || (Mn = {}));
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
var Mc = (
  /** @class */
  function(n) {
    ct(e, n);
    function e(t) {
      var i = n.call(this, ze(ze({}, e.defaultAdapter), t)) || this;
      return i.closeAnimationEndTimerId = 0, i.defaultFocusState = Mn.LIST_ROOT, i.selectedIndex = -1, i;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Pn;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return kn;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return Dc;
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
    }, e.prototype.handleKeydown = function(t) {
      var i = t.key, r = t.keyCode, l = i === "Tab" || r === 9;
      l && this.adapter.closeSurface(
        /** skipRestoreFocus */
        !0
      );
    }, e.prototype.handleItemAction = function(t) {
      var i = this, r = this.adapter.getElementIndex(t);
      if (!(r < 0)) {
        this.adapter.notifySelected({ index: r });
        var l = this.adapter.getAttributeFromElementAtIndex(r, kn.SKIP_RESTORE_FOCUS) === "true";
        this.adapter.closeSurface(l), this.closeAnimationEndTimerId = setTimeout(function() {
          var a = i.adapter.getElementIndex(t);
          a >= 0 && i.adapter.isSelectableItemAtIndex(a) && i.setSelectedIndex(a);
        }, da.numbers.TRANSITION_CLOSE_DURATION);
      }
    }, e.prototype.handleMenuSurfaceOpened = function() {
      switch (this.defaultFocusState) {
        case Mn.FIRST_ITEM:
          this.adapter.focusItemAtIndex(0);
          break;
        case Mn.LAST_ITEM:
          this.adapter.focusItemAtIndex(this.adapter.getMenuItemCount() - 1);
          break;
        case Mn.NONE:
          break;
        default:
          this.adapter.focusListRoot();
          break;
      }
    }, e.prototype.setDefaultFocusState = function(t) {
      this.defaultFocusState = t;
    }, e.prototype.getSelectedIndex = function() {
      return this.selectedIndex;
    }, e.prototype.setSelectedIndex = function(t) {
      if (this.validatedIndex(t), !this.adapter.isSelectableItemAtIndex(t))
        throw new Error("MDCMenuFoundation: No selection group at specified index.");
      var i = this.adapter.getSelectedSiblingOfItemAtIndex(t);
      i >= 0 && (this.adapter.removeAttributeFromElementAtIndex(i, kn.ARIA_CHECKED_ATTR), this.adapter.removeClassFromElementAtIndex(i, Pn.MENU_SELECTED_LIST_ITEM)), this.adapter.addClassToElementAtIndex(t, Pn.MENU_SELECTED_LIST_ITEM), this.adapter.addAttributeToElementAtIndex(t, kn.ARIA_CHECKED_ATTR, "true"), this.selectedIndex = t;
    }, e.prototype.setEnabled = function(t, i) {
      this.validatedIndex(t), i ? (this.adapter.removeClassFromElementAtIndex(t, xe.LIST_ITEM_DISABLED_CLASS), this.adapter.addAttributeToElementAtIndex(t, kn.ARIA_DISABLED_ATTR, "false")) : (this.adapter.addClassToElementAtIndex(t, xe.LIST_ITEM_DISABLED_CLASS), this.adapter.addAttributeToElementAtIndex(t, kn.ARIA_DISABLED_ATTR, "true"));
    }, e.prototype.validatedIndex = function(t) {
      var i = this.adapter.getMenuItemCount(), r = t >= 0 && t < i;
      if (!r)
        throw new Error("MDCMenuFoundation: No list item at specified index.");
    }, e;
  }(Tt)
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
var ht = {
  ACTIVATED: "mdc-select--activated",
  DISABLED: "mdc-select--disabled",
  FOCUSED: "mdc-select--focused",
  INVALID: "mdc-select--invalid",
  MENU_INVALID: "mdc-select__menu--invalid",
  OUTLINED: "mdc-select--outlined",
  REQUIRED: "mdc-select--required",
  ROOT: "mdc-select",
  WITH_LEADING_ICON: "mdc-select--with-leading-icon"
}, Ji = {
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
}, pn = {
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
var Fc = (
  /** @class */
  function(n) {
    ct(e, n);
    function e(t, i) {
      i === void 0 && (i = {});
      var r = n.call(this, ze(ze({}, e.defaultAdapter), t)) || this;
      return r.disabled = !1, r.isMenuOpen = !1, r.useDefaultValidation = !0, r.customValidity = !0, r.lastSelectedIndex = pn.UNSET_INDEX, r.clickDebounceTimeout = 0, r.recentlyClicked = !1, r.leadingIcon = i.leadingIcon, r.helperText = i.helperText, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return ht;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return pn;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Ji;
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
    }, e.prototype.setSelectedIndex = function(t, i, r) {
      i === void 0 && (i = !1), r === void 0 && (r = !1), !(t >= this.adapter.getMenuItemCount()) && (t === pn.UNSET_INDEX ? this.adapter.setSelectedText("") : this.adapter.setSelectedText(this.adapter.getMenuItemTextAtIndex(t).trim()), this.adapter.setSelectedIndex(t), i && this.adapter.closeMenu(), !r && this.lastSelectedIndex !== t && this.handleChange(), this.lastSelectedIndex = t);
    }, e.prototype.setValue = function(t, i) {
      i === void 0 && (i = !1);
      var r = this.adapter.getMenuItemValues().indexOf(t);
      this.setSelectedIndex(
        r,
        /** closeMenu */
        !1,
        i
      );
    }, e.prototype.getValue = function() {
      var t = this.adapter.getSelectedIndex(), i = this.adapter.getMenuItemValues();
      return t !== pn.UNSET_INDEX ? i[t] : "";
    }, e.prototype.getDisabled = function() {
      return this.disabled;
    }, e.prototype.setDisabled = function(t) {
      this.disabled = t, this.disabled ? (this.adapter.addClass(ht.DISABLED), this.adapter.closeMenu()) : this.adapter.removeClass(ht.DISABLED), this.leadingIcon && this.leadingIcon.setDisabled(this.disabled), this.disabled ? this.adapter.removeSelectAnchorAttr("tabindex") : this.adapter.setSelectAnchorAttr("tabindex", "0"), this.adapter.setSelectAnchorAttr("aria-disabled", this.disabled.toString());
    }, e.prototype.openMenu = function() {
      this.adapter.addClass(ht.ACTIVATED), this.adapter.openMenu(), this.isMenuOpen = !0, this.adapter.setSelectAnchorAttr("aria-expanded", "true");
    }, e.prototype.setHelperTextContent = function(t) {
      this.helperText && this.helperText.setContent(t);
    }, e.prototype.layout = function() {
      if (this.adapter.hasLabel()) {
        var t = this.getValue().length > 0, i = this.adapter.hasClass(ht.FOCUSED), r = t || i, l = this.adapter.hasClass(ht.REQUIRED);
        this.notchOutline(r), this.adapter.floatLabel(r), this.adapter.setLabelRequired(l);
      }
    }, e.prototype.layoutOptions = function() {
      var t = this.adapter.getMenuItemValues(), i = t.indexOf(this.getValue());
      this.setSelectedIndex(
        i,
        /** closeMenu */
        !1,
        /** skipNotify */
        !0
      );
    }, e.prototype.handleMenuOpened = function() {
      if (this.adapter.getMenuItemValues().length !== 0) {
        var t = this.getSelectedIndex(), i = t >= 0 ? t : 0;
        this.adapter.focusMenuItemAtIndex(i);
      }
    }, e.prototype.handleMenuClosing = function() {
      this.adapter.setSelectAnchorAttr("aria-expanded", "false");
    }, e.prototype.handleMenuClosed = function() {
      this.adapter.removeClass(ht.ACTIVATED), this.isMenuOpen = !1, this.adapter.isSelectAnchorFocused() || this.blur();
    }, e.prototype.handleChange = function() {
      this.layout(), this.adapter.notifyChange(this.getValue());
      var t = this.adapter.hasClass(ht.REQUIRED);
      t && this.useDefaultValidation && this.setValid(this.isValid());
    }, e.prototype.handleMenuItemAction = function(t) {
      this.setSelectedIndex(
        t,
        /** closeMenu */
        !0
      );
    }, e.prototype.handleFocus = function() {
      this.adapter.addClass(ht.FOCUSED), this.layout(), this.adapter.activateBottomLine();
    }, e.prototype.handleBlur = function() {
      this.isMenuOpen || this.blur();
    }, e.prototype.handleClick = function(t) {
      if (!(this.disabled || this.recentlyClicked)) {
        if (this.setClickDebounceTimeout(), this.isMenuOpen) {
          this.adapter.closeMenu();
          return;
        }
        this.adapter.setRippleCenter(t), this.openMenu();
      }
    }, e.prototype.handleKeydown = function(t) {
      if (!(this.isMenuOpen || !this.adapter.hasClass(ht.FOCUSED))) {
        var i = _t(t) === we.ENTER, r = _t(t) === we.SPACEBAR, l = _t(t) === we.ARROW_UP, a = _t(t) === we.ARROW_DOWN, s = t.ctrlKey || t.metaKey;
        if (!s && (!r && t.key && t.key.length === 1 || r && this.adapter.isTypeaheadInProgress())) {
          var o = r ? " " : t.key, u = this.adapter.typeaheadMatchItem(o, this.getSelectedIndex());
          u >= 0 && this.setSelectedIndex(u), t.preventDefault();
          return;
        }
        !i && !r && !l && !a || (this.openMenu(), t.preventDefault());
      }
    }, e.prototype.notchOutline = function(t) {
      if (this.adapter.hasOutline()) {
        var i = this.adapter.hasClass(ht.FOCUSED);
        if (t) {
          var r = pn.LABEL_SCALE, l = this.adapter.getLabelWidth() * r;
          this.adapter.notchOutline(l);
        } else
          i || this.adapter.closeOutline();
      }
    }, e.prototype.setLeadingIconAriaLabel = function(t) {
      this.leadingIcon && this.leadingIcon.setAriaLabel(t);
    }, e.prototype.setLeadingIconContent = function(t) {
      this.leadingIcon && this.leadingIcon.setContent(t);
    }, e.prototype.getUseDefaultValidation = function() {
      return this.useDefaultValidation;
    }, e.prototype.setUseDefaultValidation = function(t) {
      this.useDefaultValidation = t;
    }, e.prototype.setValid = function(t) {
      this.useDefaultValidation || (this.customValidity = t), this.adapter.setSelectAnchorAttr("aria-invalid", (!t).toString()), t ? (this.adapter.removeClass(ht.INVALID), this.adapter.removeMenuClass(ht.MENU_INVALID)) : (this.adapter.addClass(ht.INVALID), this.adapter.addMenuClass(ht.MENU_INVALID)), this.syncHelperTextValidity(t);
    }, e.prototype.isValid = function() {
      return this.useDefaultValidation && this.adapter.hasClass(ht.REQUIRED) && !this.adapter.hasClass(ht.DISABLED) ? this.getSelectedIndex() !== pn.UNSET_INDEX && (this.getSelectedIndex() !== 0 || !!this.getValue()) : this.customValidity;
    }, e.prototype.setRequired = function(t) {
      t ? this.adapter.addClass(ht.REQUIRED) : this.adapter.removeClass(ht.REQUIRED), this.adapter.setSelectAnchorAttr("aria-required", t.toString()), this.adapter.setLabelRequired(t);
    }, e.prototype.getRequired = function() {
      return this.adapter.getSelectAnchorAttr("aria-required") === "true";
    }, e.prototype.init = function() {
      var t = this.adapter.getAnchorElement();
      t && (this.adapter.setMenuAnchorElement(t), this.adapter.setMenuAnchorCorner(vn.BOTTOM_START)), this.adapter.setMenuWrapFocus(!1), this.setDisabled(this.adapter.hasClass(ht.DISABLED)), this.syncHelperTextValidity(!this.adapter.hasClass(ht.INVALID)), this.layout(), this.layoutOptions();
    }, e.prototype.blur = function() {
      this.adapter.removeClass(ht.FOCUSED), this.layout(), this.adapter.deactivateBottomLine();
      var t = this.adapter.hasClass(ht.REQUIRED);
      t && this.useDefaultValidation && this.setValid(this.isValid());
    }, e.prototype.syncHelperTextValidity = function(t) {
      if (this.helperText) {
        this.helperText.setValidity(t);
        var i = this.helperText.isVisible(), r = this.helperText.getId();
        i && r ? this.adapter.setSelectAnchorAttr(Ji.ARIA_DESCRIBEDBY, r) : this.adapter.removeSelectAnchorAttr(Ji.ARIA_DESCRIBEDBY);
      }
    }, e.prototype.setClickDebounceTimeout = function() {
      var t = this;
      clearTimeout(this.clickDebounceTimeout), this.clickDebounceTimeout = setTimeout(function() {
        t.recentlyClicked = !1;
      }, pn.CLICK_DEBOUNCE_TIMEOUT_MS), this.recentlyClicked = !0;
    }, e;
  }(Tt)
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
var gn = {
  ARIA_HIDDEN: "aria-hidden",
  ROLE: "role"
}, tn = {
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
var Nc = (
  /** @class */
  function(n) {
    ct(e, n);
    function e(t) {
      return n.call(this, ze(ze({}, e.defaultAdapter), t)) || this;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return tn;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return gn;
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
      return this.adapter.getAttr(gn.ARIA_HIDDEN) !== "true";
    }, e.prototype.setContent = function(t) {
      this.adapter.setContent(t);
    }, e.prototype.setValidation = function(t) {
      t ? this.adapter.addClass(tn.HELPER_TEXT_VALIDATION_MSG) : this.adapter.removeClass(tn.HELPER_TEXT_VALIDATION_MSG);
    }, e.prototype.setValidationMsgPersistent = function(t) {
      t ? this.adapter.addClass(tn.HELPER_TEXT_VALIDATION_MSG_PERSISTENT) : this.adapter.removeClass(tn.HELPER_TEXT_VALIDATION_MSG_PERSISTENT);
    }, e.prototype.getIsValidation = function() {
      return this.adapter.hasClass(tn.HELPER_TEXT_VALIDATION_MSG);
    }, e.prototype.getIsValidationMsgPersistent = function() {
      return this.adapter.hasClass(tn.HELPER_TEXT_VALIDATION_MSG_PERSISTENT);
    }, e.prototype.setValidity = function(t) {
      var i = this.adapter.hasClass(tn.HELPER_TEXT_VALIDATION_MSG);
      if (i) {
        var r = this.adapter.hasClass(tn.HELPER_TEXT_VALIDATION_MSG_PERSISTENT), l = !t || r;
        if (l) {
          this.showToScreenReader(), t ? this.adapter.removeAttr(gn.ROLE) : this.adapter.setAttr(gn.ROLE, "alert");
          return;
        }
        this.adapter.removeAttr(gn.ROLE), this.hide();
      }
    }, e.prototype.showToScreenReader = function() {
      this.adapter.removeAttr(gn.ARIA_HIDDEN);
    }, e.prototype.hide = function() {
      this.adapter.setAttr(gn.ARIA_HIDDEN, "true");
    }, e;
  }(Tt)
);
const { document: Uc } = Zs;
function wc(n) {
  let e, t, i, r, l, a, s, o;
  const u = (
    /*#slots*/
    n[34].default
  ), c = Ie(
    u,
    n,
    /*$$scope*/
    n[33],
    null
  );
  let d = [
    {
      class: i = le({
        [
          /*className*/
          n[1]
        ]: !0,
        "mdc-menu-surface": !0,
        "mdc-menu-surface--fixed": (
          /*fixed*/
          n[4]
        ),
        "mdc-menu-surface--open": (
          /*isStatic*/
          n[3]
        ),
        "smui-menu-surface--static": (
          /*isStatic*/
          n[3]
        ),
        "mdc-menu-surface--fullwidth": (
          /*fullWidth*/
          n[5]
        ),
        .../*internalClasses*/
        n[8]
      })
    },
    {
      style: r = Object.entries(
        /*internalStyles*/
        n[9]
      ).map(yl).concat([
        /*style*/
        n[2]
      ]).join(" ")
    },
    { role: "dialog" },
    /*$$restProps*/
    n[12]
  ], f = {};
  for (let h = 0; h < d.length; h += 1)
    f = Y(f, d[h]);
  return {
    c() {
      e = ae(), t = ne("div"), c && c.c(), ce(t, f);
    },
    m(h, p) {
      V(h, e, p), V(h, t, p), c && c.m(t, null), n[35](t), a = !0, s || (o = [
        oe(
          Uc.body,
          "click",
          /*handleBodyClick*/
          n[11],
          !0
        ),
        fe(l = Qe.call(
          null,
          t,
          /*use*/
          n[0]
        )),
        fe(
          /*forwardEvents*/
          n[10].call(null, t)
        ),
        oe(t, "keydown", function() {
          me(
            /*instance*/
            n[7] && /*instance*/
            n[7].handleKeydown.bind(
              /*instance*/
              n[7]
            )
          ) && /*instance*/
          (n[7] && /*instance*/
          n[7].handleKeydown.bind(
            /*instance*/
            n[7]
          )).apply(this, arguments);
        })
      ], s = !0);
    },
    p(h, p) {
      n = h, c && c.p && (!a || p[1] & /*$$scope*/
      4) && Ce(
        c,
        u,
        n,
        /*$$scope*/
        n[33],
        a ? ve(
          u,
          /*$$scope*/
          n[33],
          p,
          null
        ) : Ae(
          /*$$scope*/
          n[33]
        ),
        null
      ), ce(t, f = he(d, [
        (!a || p[0] & /*className, fixed, isStatic, fullWidth, internalClasses*/
        314 && i !== (i = le({
          [
            /*className*/
            n[1]
          ]: !0,
          "mdc-menu-surface": !0,
          "mdc-menu-surface--fixed": (
            /*fixed*/
            n[4]
          ),
          "mdc-menu-surface--open": (
            /*isStatic*/
            n[3]
          ),
          "smui-menu-surface--static": (
            /*isStatic*/
            n[3]
          ),
          "mdc-menu-surface--fullwidth": (
            /*fullWidth*/
            n[5]
          ),
          .../*internalClasses*/
          n[8]
        }))) && { class: i },
        (!a || p[0] & /*internalStyles, style*/
        516 && r !== (r = Object.entries(
          /*internalStyles*/
          n[9]
        ).map(yl).concat([
          /*style*/
          n[2]
        ]).join(" "))) && { style: r },
        { role: "dialog" },
        p[0] & /*$$restProps*/
        4096 && /*$$restProps*/
        n[12]
      ])), l && me(l.update) && p[0] & /*use*/
      1 && l.update.call(
        null,
        /*use*/
        n[0]
      );
    },
    i(h) {
      a || (E(c, h), a = !0);
    },
    o(h) {
      S(c, h), a = !1;
    },
    d(h) {
      h && (B(e), B(t)), c && c.d(h), n[35](null), s = !1, Ze(o);
    }
  };
}
const yl = ([n, e]) => `${n}: ${e};`;
function Pc(n, e, t) {
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
  let r = pe(e, i), { $$slots: l = {}, $$scope: a } = e;
  var s, o, u;
  const c = nt(Je());
  let { use: d = [] } = e, { class: f = "" } = e, { style: h = "" } = e, { static: p = !1 } = e, { anchor: b = !0 } = e, { fixed: m = !1 } = e, { open: C = p } = e, { managed: v = !1 } = e, { fullWidth: T = !1 } = e, { quickOpen: y = !1 } = e, { anchorElement: k = void 0 } = e, { anchorCorner: R = void 0 } = e, { anchorMargin: _ = { top: 0, right: 0, bottom: 0, left: 0 } } = e, { maxHeight: A = 0 } = e, { horizontallyCenteredOnViewport: w = !1 } = e, { openBottomBias: I = 0 } = e, { neverRestoreFocus: g = !1 } = e, D, O, N = {}, W = {}, G;
  Ve("SMUI:list:role", "menu"), Ve("SMUI:list:item:role", "menuitem");
  const z = vn;
  ot(() => (t(7, O = new da({
    addClass: L,
    removeClass: j,
    hasClass: F,
    hasAnchor: () => !!k,
    notifyClose: () => {
      v || t(13, C = p), C || ge(D, "SMUIMenuSurface:closed", void 0, void 0, !0);
    },
    notifyClosing: () => {
      v || t(13, C = p), C || ge(D, "SMUIMenuSurface:closing", void 0, void 0, !0);
    },
    notifyOpen: () => {
      v || t(13, C = !0), C && ge(D, "SMUIMenuSurface:opened", void 0, void 0, !0);
    },
    notifyOpening: () => {
      C || ge(D, "SMUIMenuSurface:opening", void 0, void 0, !0);
    },
    isElementInContainer: (q) => D.contains(q),
    isRtl: () => getComputedStyle(D).getPropertyValue("direction") === "rtl",
    setTransformOrigin: (q) => {
      t(9, W["transform-origin"] = q, W);
    },
    isFocused: () => document.activeElement === D,
    saveFocus: () => {
      var q;
      G = (q = document.activeElement) !== null && q !== void 0 ? q : void 0;
    },
    restoreFocus: () => {
      !g && (!D || D.contains(document.activeElement)) && G && document.contains(G) && "focus" in G && G.focus();
    },
    getInnerDimensions: () => ({
      width: D.offsetWidth,
      height: D.offsetHeight
    }),
    getAnchorDimensions: () => k ? k.getBoundingClientRect() : null,
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
    setPosition: (q) => {
      t(9, W.left = "left" in q ? `${q.left}px` : "", W), t(9, W.right = "right" in q ? `${q.right}px` : "", W), t(9, W.top = "top" in q ? `${q.top}px` : "", W), t(9, W.bottom = "bottom" in q ? `${q.bottom}px` : "", W);
    },
    setMaxHeight: (q) => {
      t(9, W["max-height"] = q, W);
    }
  })), ge(D, "SMUIMenuSurface:mount", {
    get open() {
      return C;
    },
    set open(q) {
      t(13, C = q);
    },
    closeProgrammatic: ue
  }), O.init(), () => {
    var q;
    const We = O.isHoistedElement;
    O.destroy(), We && ((q = D.parentNode) === null || q === void 0 || q.removeChild(D));
  })), zt(() => {
    var re;
    b && D && ((re = D.parentElement) === null || re === void 0 || re.classList.remove("mdc-menu-surface--anchor"));
  });
  function F(re) {
    return re in N ? N[re] : ye().classList.contains(re);
  }
  function L(re) {
    N[re] || t(8, N[re] = !0, N);
  }
  function j(re) {
    (!(re in N) || N[re]) && t(8, N[re] = !1, N);
  }
  function ue(re) {
    O.close(re), t(13, C = !1);
  }
  function ke(re) {
    O && C && !v && O.handleBodyClick(re);
  }
  function be() {
    return C;
  }
  function Ye(re) {
    t(13, C = re);
  }
  function K(re, q) {
    return O.setAbsolutePosition(re, q);
  }
  function x(re) {
    return O.setIsHoisted(re);
  }
  function _e() {
    return O.isFixed();
  }
  function ye() {
    return D;
  }
  function Ne(re) {
    se[re ? "unshift" : "push"](() => {
      D = re, t(6, D);
    });
  }
  return n.$$set = (re) => {
    e = Y(Y({}, e), tt(re)), t(12, r = pe(e, i)), "use" in re && t(0, d = re.use), "class" in re && t(1, f = re.class), "style" in re && t(2, h = re.style), "static" in re && t(3, p = re.static), "anchor" in re && t(15, b = re.anchor), "fixed" in re && t(4, m = re.fixed), "open" in re && t(13, C = re.open), "managed" in re && t(16, v = re.managed), "fullWidth" in re && t(5, T = re.fullWidth), "quickOpen" in re && t(17, y = re.quickOpen), "anchorElement" in re && t(14, k = re.anchorElement), "anchorCorner" in re && t(18, R = re.anchorCorner), "anchorMargin" in re && t(19, _ = re.anchorMargin), "maxHeight" in re && t(20, A = re.maxHeight), "horizontallyCenteredOnViewport" in re && t(21, w = re.horizontallyCenteredOnViewport), "openBottomBias" in re && t(22, I = re.openBottomBias), "neverRestoreFocus" in re && t(23, g = re.neverRestoreFocus), "$$scope" in re && t(33, a = re.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty[0] & /*element, anchor, _a*/
    1073774656 | n.$$.dirty[1] & /*_b, _c*/
    3 && D && b && !(!(t(30, s = D.parentElement) === null || s === void 0) && s.classList.contains("mdc-menu-surface--anchor")) && (t(31, o = D.parentElement) === null || o === void 0 || o.classList.add("mdc-menu-surface--anchor"), t(14, k = t(32, u = D.parentElement) !== null && u !== void 0 ? u : void 0)), n.$$.dirty[0] & /*instance, open*/
    8320 && O && O.isOpen() !== C && (C ? O.open() : O.close()), n.$$.dirty[0] & /*instance, quickOpen*/
    131200 && O && O.setQuickOpen(y), n.$$.dirty[0] & /*instance, fixed*/
    144 && O && O.setFixedPosition(m), n.$$.dirty[0] & /*instance, maxHeight*/
    1048704 && O && O.setMaxHeight(A), n.$$.dirty[0] & /*instance, horizontallyCenteredOnViewport*/
    2097280 && O && O.setIsHorizontallyCenteredOnViewport(w), n.$$.dirty[0] & /*instance, anchorCorner*/
    262272 && O && R != null && (typeof R == "string" ? O.setAnchorCorner(z[R]) : O.setAnchorCorner(R)), n.$$.dirty[0] & /*instance, anchorMargin*/
    524416 && O && O.setAnchorMargin(_), n.$$.dirty[0] & /*instance, openBottomBias*/
    4194432 && O && O.setOpenBottomBias(I);
  }, [
    d,
    f,
    h,
    p,
    m,
    T,
    D,
    O,
    N,
    W,
    c,
    ke,
    r,
    C,
    k,
    b,
    v,
    y,
    R,
    _,
    A,
    w,
    I,
    g,
    be,
    Ye,
    K,
    x,
    _e,
    ye,
    s,
    o,
    u,
    a,
    l,
    Ne
  ];
}
class Hc extends Re {
  constructor(e) {
    super(), Oe(
      this,
      e,
      Pc,
      wc,
      Ee,
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
function Bc(n, { addClass: e = (i) => n.classList.add(i), removeClass: t = (i) => n.classList.remove(i) } = {}) {
  return e("mdc-menu-surface--anchor"), {
    destroy() {
      t("mdc-menu-surface--anchor");
    }
  };
}
function Vc(n) {
  let e;
  const t = (
    /*#slots*/
    n[17].default
  ), i = Ie(
    t,
    n,
    /*$$scope*/
    n[22],
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
      4194304) && Ce(
        i,
        t,
        r,
        /*$$scope*/
        r[22],
        e ? ve(
          t,
          /*$$scope*/
          r[22],
          l,
          null
        ) : Ae(
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
      S(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function jc(n) {
  let e, t, i;
  const r = [
    { use: (
      /*usePass*/
      n[5]
    ) },
    {
      class: le({
        [
          /*className*/
          n[1]
        ]: !0,
        "mdc-menu": !0
      })
    },
    /*$$restProps*/
    n[9]
  ];
  function l(s) {
    n[19](s);
  }
  let a = {
    $$slots: { default: [Vc] },
    $$scope: { ctx: n }
  };
  for (let s = 0; s < r.length; s += 1)
    a = Y(a, r[s]);
  return (
    /*open*/
    n[0] !== void 0 && (a.open = /*open*/
    n[0]), e = new Hc({ props: a }), n[18](e), se.push(() => pt(e, "open", l)), e.$on(
      "SMUIMenuSurface:mount",
      /*handleMenuSurfaceAccessor*/
      n[7]
    ), e.$on(
      "SMUIList:mount",
      /*handleListAccessor*/
      n[8]
    ), e.$on(
      "SMUIMenuSurface:opened",
      /*SMUIMenuSurface_opened_handler*/
      n[20]
    ), e.$on(
      "keydown",
      /*handleKeydown*/
      n[6]
    ), e.$on(
      "SMUIList:action",
      /*SMUIList_action_handler*/
      n[21]
    ), {
      c() {
        ie(e.$$.fragment);
      },
      m(s, o) {
        ee(e, s, o), i = !0;
      },
      p(s, [o]) {
        const u = o & /*usePass, className, $$restProps*/
        546 ? he(r, [
          o & /*usePass*/
          32 && { use: (
            /*usePass*/
            s[5]
          ) },
          o & /*className*/
          2 && {
            class: le({
              [
                /*className*/
                s[1]
              ]: !0,
              "mdc-menu": !0
            })
          },
          o & /*$$restProps*/
          512 && Me(
            /*$$restProps*/
            s[9]
          )
        ]) : {};
        o & /*$$scope*/
        4194304 && (u.$$scope = { dirty: o, ctx: s }), !t && o & /*open*/
        1 && (t = !0, u.open = /*open*/
        s[0], mt(() => t = !1)), e.$set(u);
      },
      i(s) {
        i || (E(e.$$.fragment, s), i = !0);
      },
      o(s) {
        S(e.$$.fragment, s), i = !1;
      },
      d(s) {
        n[18](null), te(e, s);
      }
    }
  );
}
function Gc(n, e, t) {
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
  let l = pe(e, r), { $$slots: a = {}, $$scope: s } = e;
  const { closest: o } = ei, u = nt(Je());
  let { use: c = [] } = e, { class: d = "" } = e, { open: f = !1 } = e, h, p, b, m;
  ot(() => (t(3, p = new Mc({
    addClassToElementAtIndex: (N, W) => {
      m.addClassForElementIndex(N, W);
    },
    removeClassFromElementAtIndex: (N, W) => {
      m.removeClassForElementIndex(N, W);
    },
    addAttributeToElementAtIndex: (N, W, G) => {
      m.setAttributeForElementIndex(N, W, G);
    },
    removeAttributeFromElementAtIndex: (N, W) => {
      m.removeAttributeForElementIndex(N, W);
    },
    getAttributeFromElementAtIndex: (N, W) => m.getAttributeFromElementIndex(N, W),
    elementContainsClass: (N, W) => N.classList.contains(W),
    closeSurface: (N) => {
      b.closeProgrammatic(N), ge(w(), "SMUIMenu:closedProgrammatically");
    },
    getElementIndex: (N) => m.getOrderedList().map((W) => W.element).indexOf(N),
    notifySelected: (N) => ge(
      w(),
      "SMUIMenu:selected",
      {
        index: N.index,
        item: m.getOrderedList()[N.index].element
      },
      void 0,
      !0
    ),
    getMenuItemCount: () => m.items.length,
    focusItemAtIndex: (N) => m.focusItemAtIndex(N),
    focusListRoot: () => "focus" in m.element && m.element.focus(),
    isSelectableItemAtIndex: (N) => !!o(m.getOrderedList()[N].element, `.${Pn.MENU_SELECTION_GROUP}`),
    getSelectedSiblingOfItemAtIndex: (N) => {
      const W = m.getOrderedList(), G = o(W[N].element, `.${Pn.MENU_SELECTION_GROUP}`), z = G == null ? void 0 : G.querySelector(`.${Pn.MENU_SELECTED_LIST_ITEM}`);
      return z ? W.map((F) => F.element).indexOf(z) : -1;
    }
  })), ge(w(), "SMUIMenu:mount", p), p.init(), () => {
    p.destroy();
  }));
  function C(N) {
    p && p.handleKeydown(N);
  }
  function v(N) {
    b || (b = N.detail);
  }
  function T(N) {
    m || t(4, m = N.detail);
  }
  function y() {
    return f;
  }
  function k(N) {
    t(0, f = N);
  }
  function R(N) {
    p.setDefaultFocusState(N);
  }
  function _() {
    return p.getSelectedIndex();
  }
  function A() {
    return h;
  }
  function w() {
    return h.getElement();
  }
  function I(N) {
    se[N ? "unshift" : "push"](() => {
      h = N, t(2, h);
    });
  }
  function g(N) {
    f = N, t(0, f);
  }
  const D = () => p && p.handleMenuSurfaceOpened(), O = (N) => p && p.handleItemAction(m.getOrderedList()[N.detail.index].element);
  return n.$$set = (N) => {
    e = Y(Y({}, e), tt(N)), t(9, l = pe(e, r)), "use" in N && t(10, c = N.use), "class" in N && t(1, d = N.class), "open" in N && t(0, f = N.open), "$$scope" in N && t(22, s = N.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty & /*use*/
    1024 && t(5, i = [u, ...c]);
  }, [
    f,
    d,
    h,
    p,
    m,
    i,
    C,
    v,
    T,
    l,
    c,
    y,
    k,
    R,
    _,
    A,
    w,
    a,
    I,
    g,
    D,
    O,
    s
  ];
}
class qc extends Re {
  constructor(e) {
    super(), Oe(this, e, Gc, jc, Ee, {
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
function Kc(n) {
  let e;
  const t = (
    /*#slots*/
    n[42].default
  ), i = Ie(
    t,
    n,
    /*$$scope*/
    n[44],
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
      i && i.p && (!e || l[1] & /*$$scope*/
      8192) && Ce(
        i,
        t,
        r,
        /*$$scope*/
        r[44],
        e ? ve(
          t,
          /*$$scope*/
          r[44],
          l,
          null
        ) : Ae(
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
      S(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function Wc(n) {
  let e, t, i;
  const r = [
    { tag: (
      /*tag*/
      n[13]
    ) },
    {
      use: [
        /*forwardEvents*/
        n[16],
        .../*use*/
        n[0]
      ]
    },
    {
      class: le({
        [
          /*className*/
          n[1]
        ]: !0,
        "mdc-deprecated-list": !0,
        "mdc-deprecated-list--non-interactive": (
          /*nonInteractive*/
          n[2]
        ),
        "mdc-deprecated-list--dense": (
          /*dense*/
          n[3]
        ),
        "mdc-deprecated-list--textual-list": (
          /*textualList*/
          n[4]
        ),
        "mdc-deprecated-list--avatar-list": (
          /*avatarList*/
          n[5] || /*selectionDialog*/
          n[17]
        ),
        "mdc-deprecated-list--icon-list": (
          /*iconList*/
          n[6]
        ),
        "mdc-deprecated-list--image-list": (
          /*imageList*/
          n[7]
        ),
        "mdc-deprecated-list--thumbnail-list": (
          /*thumbnailList*/
          n[8]
        ),
        "mdc-deprecated-list--video-list": (
          /*videoList*/
          n[9]
        ),
        "mdc-deprecated-list--two-line": (
          /*twoLine*/
          n[10]
        ),
        "smui-list--three-line": (
          /*threeLine*/
          n[11] && !/*twoLine*/
          n[10]
        )
      })
    },
    { role: (
      /*role*/
      n[15]
    ) },
    /*$$restProps*/
    n[25]
  ];
  var l = (
    /*component*/
    n[12]
  );
  function a(s, o) {
    let u = {
      $$slots: { default: [Kc] },
      $$scope: { ctx: s }
    };
    for (let c = 0; c < r.length; c += 1)
      u = Y(u, r[c]);
    return o !== void 0 && o[0] & /*tag, forwardEvents, use, className, nonInteractive, dense, textualList, avatarList, selectionDialog, iconList, imageList, thumbnailList, videoList, twoLine, threeLine, role, $$restProps*/
    33796095 && (u = Y(u, he(r, [
      o[0] & /*tag*/
      8192 && { tag: (
        /*tag*/
        s[13]
      ) },
      o[0] & /*forwardEvents, use*/
      65537 && {
        use: [
          /*forwardEvents*/
          s[16],
          .../*use*/
          s[0]
        ]
      },
      o[0] & /*className, nonInteractive, dense, textualList, avatarList, selectionDialog, iconList, imageList, thumbnailList, videoList, twoLine, threeLine*/
      135166 && {
        class: le({
          [
            /*className*/
            s[1]
          ]: !0,
          "mdc-deprecated-list": !0,
          "mdc-deprecated-list--non-interactive": (
            /*nonInteractive*/
            s[2]
          ),
          "mdc-deprecated-list--dense": (
            /*dense*/
            s[3]
          ),
          "mdc-deprecated-list--textual-list": (
            /*textualList*/
            s[4]
          ),
          "mdc-deprecated-list--avatar-list": (
            /*avatarList*/
            s[5] || /*selectionDialog*/
            s[17]
          ),
          "mdc-deprecated-list--icon-list": (
            /*iconList*/
            s[6]
          ),
          "mdc-deprecated-list--image-list": (
            /*imageList*/
            s[7]
          ),
          "mdc-deprecated-list--thumbnail-list": (
            /*thumbnailList*/
            s[8]
          ),
          "mdc-deprecated-list--video-list": (
            /*videoList*/
            s[9]
          ),
          "mdc-deprecated-list--two-line": (
            /*twoLine*/
            s[10]
          ),
          "smui-list--three-line": (
            /*threeLine*/
            s[11] && !/*twoLine*/
            s[10]
          )
        })
      },
      o[0] & /*role*/
      32768 && { role: (
        /*role*/
        s[15]
      ) },
      o[0] & /*$$restProps*/
      33554432 && Me(
        /*$$restProps*/
        s[25]
      )
    ]))), { props: u };
  }
  return l && (e = Dt(l, a(n)), n[43](e), e.$on(
    "keydown",
    /*handleKeydown*/
    n[20]
  ), e.$on(
    "focusin",
    /*handleFocusin*/
    n[21]
  ), e.$on(
    "focusout",
    /*handleFocusout*/
    n[22]
  ), e.$on(
    "click",
    /*handleClick*/
    n[23]
  ), e.$on(
    "SMUIListItem:mount",
    /*handleItemMount*/
    n[18]
  ), e.$on(
    "SMUIListItem:unmount",
    /*handleItemUnmount*/
    n[19]
  ), e.$on(
    "SMUI:action",
    /*handleAction*/
    n[24]
  )), {
    c() {
      e && ie(e.$$.fragment), t = Xe();
    },
    m(s, o) {
      e && ee(e, s, o), V(s, t, o), i = !0;
    },
    p(s, o) {
      if (o[0] & /*component*/
      4096 && l !== (l = /*component*/
      s[12])) {
        if (e) {
          Pe();
          const u = e;
          S(u.$$.fragment, 1, 0, () => {
            te(u, 1);
          }), He();
        }
        l ? (e = Dt(l, a(s, o)), s[43](e), e.$on(
          "keydown",
          /*handleKeydown*/
          s[20]
        ), e.$on(
          "focusin",
          /*handleFocusin*/
          s[21]
        ), e.$on(
          "focusout",
          /*handleFocusout*/
          s[22]
        ), e.$on(
          "click",
          /*handleClick*/
          s[23]
        ), e.$on(
          "SMUIListItem:mount",
          /*handleItemMount*/
          s[18]
        ), e.$on(
          "SMUIListItem:unmount",
          /*handleItemUnmount*/
          s[19]
        ), e.$on(
          "SMUI:action",
          /*handleAction*/
          s[24]
        ), ie(e.$$.fragment), E(e.$$.fragment, 1), ee(e, t.parentNode, t)) : e = null;
      } else if (l) {
        const u = o[0] & /*tag, forwardEvents, use, className, nonInteractive, dense, textualList, avatarList, selectionDialog, iconList, imageList, thumbnailList, videoList, twoLine, threeLine, role, $$restProps*/
        33796095 ? he(r, [
          o[0] & /*tag*/
          8192 && { tag: (
            /*tag*/
            s[13]
          ) },
          o[0] & /*forwardEvents, use*/
          65537 && {
            use: [
              /*forwardEvents*/
              s[16],
              .../*use*/
              s[0]
            ]
          },
          o[0] & /*className, nonInteractive, dense, textualList, avatarList, selectionDialog, iconList, imageList, thumbnailList, videoList, twoLine, threeLine*/
          135166 && {
            class: le({
              [
                /*className*/
                s[1]
              ]: !0,
              "mdc-deprecated-list": !0,
              "mdc-deprecated-list--non-interactive": (
                /*nonInteractive*/
                s[2]
              ),
              "mdc-deprecated-list--dense": (
                /*dense*/
                s[3]
              ),
              "mdc-deprecated-list--textual-list": (
                /*textualList*/
                s[4]
              ),
              "mdc-deprecated-list--avatar-list": (
                /*avatarList*/
                s[5] || /*selectionDialog*/
                s[17]
              ),
              "mdc-deprecated-list--icon-list": (
                /*iconList*/
                s[6]
              ),
              "mdc-deprecated-list--image-list": (
                /*imageList*/
                s[7]
              ),
              "mdc-deprecated-list--thumbnail-list": (
                /*thumbnailList*/
                s[8]
              ),
              "mdc-deprecated-list--video-list": (
                /*videoList*/
                s[9]
              ),
              "mdc-deprecated-list--two-line": (
                /*twoLine*/
                s[10]
              ),
              "smui-list--three-line": (
                /*threeLine*/
                s[11] && !/*twoLine*/
                s[10]
              )
            })
          },
          o[0] & /*role*/
          32768 && { role: (
            /*role*/
            s[15]
          ) },
          o[0] & /*$$restProps*/
          33554432 && Me(
            /*$$restProps*/
            s[25]
          )
        ]) : {};
        o[1] & /*$$scope*/
        8192 && (u.$$scope = { dirty: o, ctx: s }), e.$set(u);
      }
    },
    i(s) {
      i || (e && E(e.$$.fragment, s), i = !0);
    },
    o(s) {
      e && S(e.$$.fragment, s), i = !1;
    },
    d(s) {
      s && B(t), n[43](null), e && te(e, s);
    }
  };
}
function zc(n, e, t) {
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
  let r = pe(e, i), { $$slots: l = {}, $$scope: a } = e;
  var s;
  const { closest: o, matches: u } = ei, c = nt(Je());
  let { use: d = [] } = e, { class: f = "" } = e, { nonInteractive: h = !1 } = e, { dense: p = !1 } = e, { textualList: b = !1 } = e, { avatarList: m = !1 } = e, { iconList: C = !1 } = e, { imageList: v = !1 } = e, { thumbnailList: T = !1 } = e, { videoList: y = !1 } = e, { twoLine: k = !1 } = e, { threeLine: R = !1 } = e, { vertical: _ = !0 } = e, { wrapFocus: A = (s = Ke("SMUI:list:wrapFocus")) !== null && s !== void 0 ? s : !1 } = e, { singleSelection: w = !1 } = e, { disabledItemsFocusable: I = !1 } = e, { selectedIndex: g = -1 } = e, { radioList: D = !1 } = e, { checkList: O = !1 } = e, { hasTypeahead: N = !1 } = e, W, G, z = [], F = Ke("SMUI:list:role"), L = Ke("SMUI:list:nav");
  const j = /* @__PURE__ */ new WeakMap();
  let ue = Ke("SMUI:dialog:selection"), ke = Ke("SMUI:addLayoutListener"), be, { component: Ye = Nt } = e, { tag: K = Ye === Nt ? L ? "nav" : "ul" : void 0 } = e;
  Ve("SMUI:list:nonInteractive", h), Ve("SMUI:separator:context", "list"), F || (w ? (F = "listbox", Ve("SMUI:list:item:role", "option")) : D ? (F = "radiogroup", Ve("SMUI:list:item:role", "radio")) : O ? (F = "group", Ve("SMUI:list:item:role", "checkbox")) : (F = "list", Ve("SMUI:list:item:role", void 0))), ke && (be = ke(Q)), ot(() => {
    t(41, G = new Oc({
      addClassForElementIndex: X,
      focusItemAtIndex: De,
      getAttributeForElementIndex: (Se, Le) => {
        var rt, xt;
        return (xt = (rt = Ge()[Se]) === null || rt === void 0 ? void 0 : rt.getAttr(Le)) !== null && xt !== void 0 ? xt : null;
      },
      getFocusedElementIndex: () => document.activeElement ? Ge().map((Se) => Se.element).indexOf(document.activeElement) : -1,
      getListItemCount: () => z.length,
      getPrimaryTextAtIndex: M,
      hasCheckboxAtIndex: (Se) => {
        var Le, rt;
        return (rt = (Le = Ge()[Se]) === null || Le === void 0 ? void 0 : Le.hasCheckbox) !== null && rt !== void 0 ? rt : !1;
      },
      hasRadioAtIndex: (Se) => {
        var Le, rt;
        return (rt = (Le = Ge()[Se]) === null || Le === void 0 ? void 0 : Le.hasRadio) !== null && rt !== void 0 ? rt : !1;
      },
      isCheckboxCheckedAtIndex: (Se) => {
        var Le;
        const rt = Ge()[Se];
        return (Le = (rt == null ? void 0 : rt.hasCheckbox) && rt.checked) !== null && Le !== void 0 ? Le : !1;
      },
      isFocusInsideList: () => W != null && de() !== document.activeElement && de().contains(document.activeElement),
      isRootFocused: () => W != null && document.activeElement === de(),
      listItemAtIndexHasClass: ft,
      notifyAction: (Se) => {
        t(26, g = Se), W != null && ge(de(), "SMUIList:action", { index: Se }, void 0, !0);
      },
      notifySelectionChange: (Se) => {
        W != null && ge(de(), "SMUIList:selectionChange", { changedIndices: Se });
      },
      removeClassForElementIndex: Te,
      setAttributeForElementIndex: qe,
      setCheckedCheckboxOrRadioAtIndex: (Se, Le) => {
        Ge()[Se].checked = Le;
      },
      setTabIndexForListItemChildren: (Se, Le) => {
        const rt = Ge()[Se];
        Array.prototype.forEach.call(rt.element.querySelectorAll("button:not(:disabled), a"), (jn) => {
          jn.setAttribute("tabindex", Le);
        });
      }
    }));
    const Z = {
      get element() {
        return de();
      },
      get items() {
        return z;
      },
      get typeaheadInProgress() {
        return G.isTypeaheadInProgress();
      },
      typeaheadMatchItem(Se, Le) {
        return G.typeaheadMatchItem(
          Se,
          Le,
          /** skipFocus */
          !0
        );
      },
      getOrderedList: Ge,
      focusItemAtIndex: De,
      addClassForElementIndex: X,
      removeClassForElementIndex: Te,
      setAttributeForElementIndex: qe,
      removeAttributeForElementIndex: Ue,
      getAttributeFromElementIndex: yt,
      getPrimaryTextAtIndex: M
    };
    return ge(de(), "SMUIList:mount", Z), G.init(), G.layout(), () => {
      G.destroy();
    };
  }), zt(() => {
    be && be();
  });
  function x(Z) {
    z.push(Z.detail), j.set(Z.detail.element, Z.detail), w && Z.detail.selected && t(26, g = $(Z.detail.element)), Z.stopPropagation();
  }
  function _e(Z) {
    var Se;
    const Le = (Se = Z.detail && z.indexOf(Z.detail)) !== null && Se !== void 0 ? Se : -1;
    Le !== -1 && (z.splice(Le, 1), z = z, j.delete(Z.detail.element)), Z.stopPropagation();
  }
  function ye(Z) {
    G && Z.target && G.handleKeydown(Z, Z.target.classList.contains("mdc-deprecated-list-item"), $(Z.target));
  }
  function Ne(Z) {
    G && Z.target && G.handleFocusIn($(Z.target));
  }
  function re(Z) {
    G && Z.target && G.handleFocusOut($(Z.target));
  }
  function q(Z) {
    G && Z.target && G.handleClick($(Z.target), !u(Z.target, 'input[type="checkbox"], input[type="radio"]'), Z);
  }
  function We(Z) {
    if (D || O) {
      const Se = $(Z.target);
      if (Se !== -1) {
        const Le = Ge()[Se];
        Le && (D && !Le.checked || O) && (u(Z.detail.target, 'input[type="checkbox"], input[type="radio"]') || (Le.checked = !Le.checked), Le.activateRipple(), window.requestAnimationFrame(() => {
          Le.deactivateRipple();
        }));
      }
    }
  }
  function Ge() {
    return W == null ? [] : [...de().children].map((Z) => j.get(Z)).filter((Z) => Z && Z._smui_list_item_accessor);
  }
  function ft(Z, Se) {
    var Le;
    const rt = Ge()[Z];
    return (Le = rt && rt.hasClass(Se)) !== null && Le !== void 0 ? Le : !1;
  }
  function X(Z, Se) {
    const Le = Ge()[Z];
    Le && Le.addClass(Se);
  }
  function Te(Z, Se) {
    const Le = Ge()[Z];
    Le && Le.removeClass(Se);
  }
  function qe(Z, Se, Le) {
    const rt = Ge()[Z];
    rt && rt.addAttr(Se, Le);
  }
  function Ue(Z, Se) {
    const Le = Ge()[Z];
    Le && Le.removeAttr(Se);
  }
  function yt(Z, Se) {
    const Le = Ge()[Z];
    return Le ? Le.getAttr(Se) : null;
  }
  function M(Z) {
    var Se;
    const Le = Ge()[Z];
    return (Se = Le && Le.getPrimaryText()) !== null && Se !== void 0 ? Se : "";
  }
  function $(Z) {
    const Se = o(Z, ".mdc-deprecated-list-item, .mdc-deprecated-list");
    return Se && u(Se, ".mdc-deprecated-list-item") ? Ge().map((Le) => Le == null ? void 0 : Le.element).indexOf(Se) : -1;
  }
  function Q() {
    return G.layout();
  }
  function je(Z, Se) {
    return G.setEnabled(Z, Se);
  }
  function dt() {
    return G.isTypeaheadInProgress();
  }
  function ut() {
    return G.getSelectedIndex();
  }
  function et() {
    return G.getFocusedItemIndex();
  }
  function De(Z) {
    const Se = Ge()[Z];
    Se && "focus" in Se.element && Se.element.focus();
  }
  function de() {
    return W.getElement();
  }
  function Bt(Z) {
    se[Z ? "unshift" : "push"](() => {
      W = Z, t(14, W);
    });
  }
  return n.$$set = (Z) => {
    e = Y(Y({}, e), tt(Z)), t(25, r = pe(e, i)), "use" in Z && t(0, d = Z.use), "class" in Z && t(1, f = Z.class), "nonInteractive" in Z && t(2, h = Z.nonInteractive), "dense" in Z && t(3, p = Z.dense), "textualList" in Z && t(4, b = Z.textualList), "avatarList" in Z && t(5, m = Z.avatarList), "iconList" in Z && t(6, C = Z.iconList), "imageList" in Z && t(7, v = Z.imageList), "thumbnailList" in Z && t(8, T = Z.thumbnailList), "videoList" in Z && t(9, y = Z.videoList), "twoLine" in Z && t(10, k = Z.twoLine), "threeLine" in Z && t(11, R = Z.threeLine), "vertical" in Z && t(27, _ = Z.vertical), "wrapFocus" in Z && t(28, A = Z.wrapFocus), "singleSelection" in Z && t(29, w = Z.singleSelection), "disabledItemsFocusable" in Z && t(30, I = Z.disabledItemsFocusable), "selectedIndex" in Z && t(26, g = Z.selectedIndex), "radioList" in Z && t(31, D = Z.radioList), "checkList" in Z && t(32, O = Z.checkList), "hasTypeahead" in Z && t(33, N = Z.hasTypeahead), "component" in Z && t(12, Ye = Z.component), "tag" in Z && t(13, K = Z.tag), "$$scope" in Z && t(44, a = Z.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty[0] & /*vertical*/
    134217728 | n.$$.dirty[1] & /*instance*/
    1024 && G && G.setVerticalOrientation(_), n.$$.dirty[0] & /*wrapFocus*/
    268435456 | n.$$.dirty[1] & /*instance*/
    1024 && G && G.setWrapFocus(A), n.$$.dirty[1] & /*instance, hasTypeahead*/
    1028 && G && G.setHasTypeahead(N), n.$$.dirty[0] & /*singleSelection*/
    536870912 | n.$$.dirty[1] & /*instance*/
    1024 && G && G.setSingleSelection(w), n.$$.dirty[0] & /*disabledItemsFocusable*/
    1073741824 | n.$$.dirty[1] & /*instance*/
    1024 && G && G.setDisabledItemsFocusable(I), n.$$.dirty[0] & /*singleSelection, selectedIndex*/
    603979776 | n.$$.dirty[1] & /*instance*/
    1024 && G && w && ut() !== g && G.setSelectedIndex(g);
  }, [
    d,
    f,
    h,
    p,
    b,
    m,
    C,
    v,
    T,
    y,
    k,
    R,
    Ye,
    K,
    W,
    F,
    c,
    ue,
    x,
    _e,
    ye,
    Ne,
    re,
    q,
    We,
    r,
    g,
    _,
    A,
    w,
    I,
    D,
    O,
    N,
    Q,
    je,
    dt,
    ut,
    et,
    De,
    de,
    G,
    l,
    Bt,
    a
  ];
}
class Yc extends Re {
  constructor(e) {
    super(), Oe(
      this,
      e,
      zc,
      Wc,
      Ee,
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
function Sl(n) {
  let e;
  return {
    c() {
      e = ne("span"), U(e, "class", "mdc-deprecated-list-item__ripple");
    },
    m(t, i) {
      V(t, e, i);
    },
    d(t) {
      t && B(e);
    }
  };
}
function Xc(n) {
  let e, t, i = (
    /*ripple*/
    n[7] && Sl()
  );
  const r = (
    /*#slots*/
    n[34].default
  ), l = Ie(
    r,
    n,
    /*$$scope*/
    n[37],
    null
  );
  return {
    c() {
      i && i.c(), e = Xe(), l && l.c();
    },
    m(a, s) {
      i && i.m(a, s), V(a, e, s), l && l.m(a, s), t = !0;
    },
    p(a, s) {
      /*ripple*/
      a[7] ? i || (i = Sl(), i.c(), i.m(e.parentNode, e)) : i && (i.d(1), i = null), l && l.p && (!t || s[1] & /*$$scope*/
      64) && Ce(
        l,
        r,
        a,
        /*$$scope*/
        a[37],
        t ? ve(
          r,
          /*$$scope*/
          a[37],
          s,
          null
        ) : Ae(
          /*$$scope*/
          a[37]
        ),
        null
      );
    },
    i(a) {
      t || (E(l, a), t = !0);
    },
    o(a) {
      S(l, a), t = !1;
    },
    d(a) {
      a && B(e), i && i.d(a), l && l.d(a);
    }
  };
}
function Zc(n) {
  let e, t, i;
  const r = [
    { tag: (
      /*tag*/
      n[14]
    ) },
    {
      use: [
        .../*nonInteractive*/
        n[6] ? [] : [
          [
            kt,
            {
              ripple: !/*input*/
              n[16],
              unbounded: !1,
              color: (
                /*activated*/
                (n[1] || /*selected*/
                n[0]) && /*color*/
                n[5] == null ? "primary" : (
                  /*color*/
                  n[5]
                )
              ),
              disabled: (
                /*disabled*/
                n[10]
              ),
              addClass: (
                /*addClass*/
                n[24]
              ),
              removeClass: (
                /*removeClass*/
                n[25]
              ),
              addStyle: (
                /*addStyle*/
                n[26]
              )
            }
          ]
        ],
        /*forwardEvents*/
        n[22],
        .../*use*/
        n[2]
      ]
    },
    {
      class: le({
        [
          /*className*/
          n[3]
        ]: !0,
        "mdc-deprecated-list-item": !/*wrapper*/
        n[8],
        "mdc-deprecated-list-item__wrapper": (
          /*wrapper*/
          n[8]
        ),
        "mdc-deprecated-list-item--activated": (
          /*activated*/
          n[1]
        ),
        "mdc-deprecated-list-item--selected": (
          /*selected*/
          n[0]
        ),
        "mdc-deprecated-list-item--disabled": (
          /*disabled*/
          n[10]
        ),
        "mdc-menu-item--selected": !/*nav*/
        n[23] && /*role*/
        n[9] === "menuitem" && /*selected*/
        n[0],
        "smui-menu-item--non-interactive": (
          /*nonInteractive*/
          n[6]
        ),
        .../*internalClasses*/
        n[18]
      })
    },
    {
      style: Object.entries(
        /*internalStyles*/
        n[19]
      ).map(xi).concat([
        /*style*/
        n[4]
      ]).join(" ")
    },
    /*nav*/
    n[23] && /*activated*/
    n[1] ? { "aria-current": "page" } : {},
    !/*nav*/
    n[23] || /*wrapper*/
    n[8] ? { role: (
      /*role*/
      n[9]
    ) } : {},
    !/*nav*/
    n[23] && /*role*/
    n[9] === "option" ? {
      "aria-selected": (
        /*selected*/
        n[0] ? "true" : "false"
      )
    } : {},
    !/*nav*/
    n[23] && /*role*/
    (n[9] === "radio" || /*role*/
    n[9] === "checkbox") ? {
      "aria-checked": (
        /*input*/
        n[16] && /*input*/
        n[16].checked ? "true" : "false"
      )
    } : {},
    /*nav*/
    n[23] ? {} : {
      "aria-disabled": (
        /*disabled*/
        n[10] ? "true" : "false"
      )
    },
    {
      "data-menu-item-skip-restore-focus": (
        /*skipRestoreFocus*/
        n[11] || void 0
      )
    },
    { tabindex: (
      /*tabindex*/
      n[21]
    ) },
    { href: (
      /*href*/
      n[12]
    ) },
    /*internalAttrs*/
    n[20],
    /*$$restProps*/
    n[29]
  ];
  var l = (
    /*component*/
    n[13]
  );
  function a(s, o) {
    let u = {
      $$slots: { default: [Xc] },
      $$scope: { ctx: s }
    };
    for (let c = 0; c < r.length; c += 1)
      u = Y(u, r[c]);
    return o !== void 0 && o[0] & /*tag, nonInteractive, input, activated, selected, color, disabled, addClass, removeClass, addStyle, forwardEvents, use, className, wrapper, nav, role, internalClasses, internalStyles, style, skipRestoreFocus, tabindex, href, internalAttrs, $$restProps*/
    670916479 && (u = Y(u, he(r, [
      o[0] & /*tag*/
      16384 && { tag: (
        /*tag*/
        s[14]
      ) },
      o[0] & /*nonInteractive, input, activated, selected, color, disabled, addClass, removeClass, addStyle, forwardEvents, use*/
      121701479 && {
        use: [
          .../*nonInteractive*/
          s[6] ? [] : [
            [
              kt,
              {
                ripple: !/*input*/
                s[16],
                unbounded: !1,
                color: (
                  /*activated*/
                  (s[1] || /*selected*/
                  s[0]) && /*color*/
                  s[5] == null ? "primary" : (
                    /*color*/
                    s[5]
                  )
                ),
                disabled: (
                  /*disabled*/
                  s[10]
                ),
                addClass: (
                  /*addClass*/
                  s[24]
                ),
                removeClass: (
                  /*removeClass*/
                  s[25]
                ),
                addStyle: (
                  /*addStyle*/
                  s[26]
                )
              }
            ]
          ],
          /*forwardEvents*/
          s[22],
          .../*use*/
          s[2]
        ]
      },
      o[0] & /*className, wrapper, activated, selected, disabled, nav, role, nonInteractive, internalClasses*/
      8652619 && {
        class: le({
          [
            /*className*/
            s[3]
          ]: !0,
          "mdc-deprecated-list-item": !/*wrapper*/
          s[8],
          "mdc-deprecated-list-item__wrapper": (
            /*wrapper*/
            s[8]
          ),
          "mdc-deprecated-list-item--activated": (
            /*activated*/
            s[1]
          ),
          "mdc-deprecated-list-item--selected": (
            /*selected*/
            s[0]
          ),
          "mdc-deprecated-list-item--disabled": (
            /*disabled*/
            s[10]
          ),
          "mdc-menu-item--selected": !/*nav*/
          s[23] && /*role*/
          s[9] === "menuitem" && /*selected*/
          s[0],
          "smui-menu-item--non-interactive": (
            /*nonInteractive*/
            s[6]
          ),
          .../*internalClasses*/
          s[18]
        })
      },
      o[0] & /*internalStyles, style*/
      524304 && {
        style: Object.entries(
          /*internalStyles*/
          s[19]
        ).map(xi).concat([
          /*style*/
          s[4]
        ]).join(" ")
      },
      o[0] & /*nav, activated*/
      8388610 && Me(
        /*nav*/
        s[23] && /*activated*/
        s[1] ? { "aria-current": "page" } : {}
      ),
      o[0] & /*nav, wrapper, role*/
      8389376 && Me(!/*nav*/
      s[23] || /*wrapper*/
      s[8] ? { role: (
        /*role*/
        s[9]
      ) } : {}),
      o[0] & /*nav, role, selected*/
      8389121 && Me(!/*nav*/
      s[23] && /*role*/
      s[9] === "option" ? {
        "aria-selected": (
          /*selected*/
          s[0] ? "true" : "false"
        )
      } : {}),
      o[0] & /*nav, role, input*/
      8454656 && Me(!/*nav*/
      s[23] && /*role*/
      (s[9] === "radio" || /*role*/
      s[9] === "checkbox") ? {
        "aria-checked": (
          /*input*/
          s[16] && /*input*/
          s[16].checked ? "true" : "false"
        )
      } : {}),
      o[0] & /*nav, disabled*/
      8389632 && Me(/*nav*/
      s[23] ? {} : {
        "aria-disabled": (
          /*disabled*/
          s[10] ? "true" : "false"
        )
      }),
      o[0] & /*skipRestoreFocus*/
      2048 && {
        "data-menu-item-skip-restore-focus": (
          /*skipRestoreFocus*/
          s[11] || void 0
        )
      },
      o[0] & /*tabindex*/
      2097152 && { tabindex: (
        /*tabindex*/
        s[21]
      ) },
      o[0] & /*href*/
      4096 && { href: (
        /*href*/
        s[12]
      ) },
      o[0] & /*internalAttrs*/
      1048576 && Me(
        /*internalAttrs*/
        s[20]
      ),
      o[0] & /*$$restProps*/
      536870912 && Me(
        /*$$restProps*/
        s[29]
      )
    ]))), { props: u };
  }
  return l && (e = Dt(l, a(n)), n[35](e), e.$on(
    "click",
    /*action*/
    n[15]
  ), e.$on(
    "keydown",
    /*handleKeydown*/
    n[27]
  ), e.$on(
    "SMUIGenericInput:mount",
    /*handleInputMount*/
    n[28]
  ), e.$on(
    "SMUIGenericInput:unmount",
    /*SMUIGenericInput_unmount_handler*/
    n[36]
  )), {
    c() {
      e && ie(e.$$.fragment), t = Xe();
    },
    m(s, o) {
      e && ee(e, s, o), V(s, t, o), i = !0;
    },
    p(s, o) {
      if (o[0] & /*component*/
      8192 && l !== (l = /*component*/
      s[13])) {
        if (e) {
          Pe();
          const u = e;
          S(u.$$.fragment, 1, 0, () => {
            te(u, 1);
          }), He();
        }
        l ? (e = Dt(l, a(s, o)), s[35](e), e.$on(
          "click",
          /*action*/
          s[15]
        ), e.$on(
          "keydown",
          /*handleKeydown*/
          s[27]
        ), e.$on(
          "SMUIGenericInput:mount",
          /*handleInputMount*/
          s[28]
        ), e.$on(
          "SMUIGenericInput:unmount",
          /*SMUIGenericInput_unmount_handler*/
          s[36]
        ), ie(e.$$.fragment), E(e.$$.fragment, 1), ee(e, t.parentNode, t)) : e = null;
      } else if (l) {
        const u = o[0] & /*tag, nonInteractive, input, activated, selected, color, disabled, addClass, removeClass, addStyle, forwardEvents, use, className, wrapper, nav, role, internalClasses, internalStyles, style, skipRestoreFocus, tabindex, href, internalAttrs, $$restProps*/
        670916479 ? he(r, [
          o[0] & /*tag*/
          16384 && { tag: (
            /*tag*/
            s[14]
          ) },
          o[0] & /*nonInteractive, input, activated, selected, color, disabled, addClass, removeClass, addStyle, forwardEvents, use*/
          121701479 && {
            use: [
              .../*nonInteractive*/
              s[6] ? [] : [
                [
                  kt,
                  {
                    ripple: !/*input*/
                    s[16],
                    unbounded: !1,
                    color: (
                      /*activated*/
                      (s[1] || /*selected*/
                      s[0]) && /*color*/
                      s[5] == null ? "primary" : (
                        /*color*/
                        s[5]
                      )
                    ),
                    disabled: (
                      /*disabled*/
                      s[10]
                    ),
                    addClass: (
                      /*addClass*/
                      s[24]
                    ),
                    removeClass: (
                      /*removeClass*/
                      s[25]
                    ),
                    addStyle: (
                      /*addStyle*/
                      s[26]
                    )
                  }
                ]
              ],
              /*forwardEvents*/
              s[22],
              .../*use*/
              s[2]
            ]
          },
          o[0] & /*className, wrapper, activated, selected, disabled, nav, role, nonInteractive, internalClasses*/
          8652619 && {
            class: le({
              [
                /*className*/
                s[3]
              ]: !0,
              "mdc-deprecated-list-item": !/*wrapper*/
              s[8],
              "mdc-deprecated-list-item__wrapper": (
                /*wrapper*/
                s[8]
              ),
              "mdc-deprecated-list-item--activated": (
                /*activated*/
                s[1]
              ),
              "mdc-deprecated-list-item--selected": (
                /*selected*/
                s[0]
              ),
              "mdc-deprecated-list-item--disabled": (
                /*disabled*/
                s[10]
              ),
              "mdc-menu-item--selected": !/*nav*/
              s[23] && /*role*/
              s[9] === "menuitem" && /*selected*/
              s[0],
              "smui-menu-item--non-interactive": (
                /*nonInteractive*/
                s[6]
              ),
              .../*internalClasses*/
              s[18]
            })
          },
          o[0] & /*internalStyles, style*/
          524304 && {
            style: Object.entries(
              /*internalStyles*/
              s[19]
            ).map(xi).concat([
              /*style*/
              s[4]
            ]).join(" ")
          },
          o[0] & /*nav, activated*/
          8388610 && Me(
            /*nav*/
            s[23] && /*activated*/
            s[1] ? { "aria-current": "page" } : {}
          ),
          o[0] & /*nav, wrapper, role*/
          8389376 && Me(!/*nav*/
          s[23] || /*wrapper*/
          s[8] ? { role: (
            /*role*/
            s[9]
          ) } : {}),
          o[0] & /*nav, role, selected*/
          8389121 && Me(!/*nav*/
          s[23] && /*role*/
          s[9] === "option" ? {
            "aria-selected": (
              /*selected*/
              s[0] ? "true" : "false"
            )
          } : {}),
          o[0] & /*nav, role, input*/
          8454656 && Me(!/*nav*/
          s[23] && /*role*/
          (s[9] === "radio" || /*role*/
          s[9] === "checkbox") ? {
            "aria-checked": (
              /*input*/
              s[16] && /*input*/
              s[16].checked ? "true" : "false"
            )
          } : {}),
          o[0] & /*nav, disabled*/
          8389632 && Me(/*nav*/
          s[23] ? {} : {
            "aria-disabled": (
              /*disabled*/
              s[10] ? "true" : "false"
            )
          }),
          o[0] & /*skipRestoreFocus*/
          2048 && {
            "data-menu-item-skip-restore-focus": (
              /*skipRestoreFocus*/
              s[11] || void 0
            )
          },
          o[0] & /*tabindex*/
          2097152 && { tabindex: (
            /*tabindex*/
            s[21]
          ) },
          o[0] & /*href*/
          4096 && { href: (
            /*href*/
            s[12]
          ) },
          o[0] & /*internalAttrs*/
          1048576 && Me(
            /*internalAttrs*/
            s[20]
          ),
          o[0] & /*$$restProps*/
          536870912 && Me(
            /*$$restProps*/
            s[29]
          )
        ]) : {};
        o[0] & /*ripple*/
        128 | o[1] & /*$$scope*/
        64 && (u.$$scope = { dirty: o, ctx: s }), e.$set(u);
      }
    },
    i(s) {
      i || (e && E(e.$$.fragment, s), i = !0);
    },
    o(s) {
      e && S(e.$$.fragment, s), i = !1;
    },
    d(s) {
      s && B(t), n[35](null), e && te(e, s);
    }
  };
}
let Qc = 0;
const xi = ([n, e]) => `${n}: ${e};`;
function Jc(n, e, t) {
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
  let l = pe(e, r), { $$slots: a = {}, $$scope: s } = e;
  var o;
  const u = nt(Je());
  let c = () => {
  };
  function d(X) {
    return X === c;
  }
  let { use: f = [] } = e, { class: h = "" } = e, { style: p = "" } = e, { color: b = void 0 } = e, { nonInteractive: m = (o = Ke("SMUI:list:nonInteractive")) !== null && o !== void 0 ? o : !1 } = e;
  Ve("SMUI:list:nonInteractive", void 0);
  let { ripple: C = !m } = e, { wrapper: v = !1 } = e, { activated: T = !1 } = e, { role: y = v ? "presentation" : Ke("SMUI:list:item:role") } = e;
  Ve("SMUI:list:item:role", void 0);
  let { selected: k = !1 } = e, { disabled: R = !1 } = e, { skipRestoreFocus: _ = !1 } = e, { tabindex: A = c } = e, { inputId: w = "SMUI-form-field-list-" + Qc++ } = e, { href: I = void 0 } = e, g, D = {}, O = {}, N = {}, W, G, z = Ke("SMUI:list:item:nav"), { component: F = Nt } = e, { tag: L = F === Nt ? z ? I ? "a" : "span" : "li" : void 0 } = e;
  Ve("SMUI:generic:input:props", { id: w }), Ve("SMUI:separator:context", void 0), ot(() => {
    if (!k && !m) {
      let Te = !0, qe = g.getElement();
      for (; qe.previousSibling; )
        if (qe = qe.previousSibling, qe.nodeType === 1 && qe.classList.contains("mdc-deprecated-list-item") && !qe.classList.contains("mdc-deprecated-list-item--disabled")) {
          Te = !1;
          break;
        }
      Te && (G = window.requestAnimationFrame(() => _e(qe)));
    }
    const X = {
      _smui_list_item_accessor: !0,
      get element() {
        return We();
      },
      get selected() {
        return k;
      },
      set selected(Te) {
        t(0, k = Te);
      },
      hasClass: j,
      addClass: ue,
      removeClass: ke,
      getAttr: Ye,
      addAttr: K,
      removeAttr: x,
      getPrimaryText: q,
      // For inputs within item.
      get checked() {
        var Te;
        return (Te = W && W.checked) !== null && Te !== void 0 ? Te : !1;
      },
      set checked(Te) {
        W && t(16, W.checked = !!Te, W);
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
        return l.value;
      },
      // For autocomplete
      action: re,
      get tabindex() {
        return i;
      },
      set tabindex(Te) {
        t(30, A = Te);
      },
      get disabled() {
        return R;
      },
      get activated() {
        return T;
      },
      set activated(Te) {
        t(1, T = Te);
      }
    };
    return ge(We(), "SMUIListItem:mount", X), () => {
      ge(We(), "SMUIListItem:unmount", X);
    };
  }), zt(() => {
    G && window.cancelAnimationFrame(G);
  });
  function j(X) {
    return X in D ? D[X] : We().classList.contains(X);
  }
  function ue(X) {
    D[X] || t(18, D[X] = !0, D);
  }
  function ke(X) {
    (!(X in D) || D[X]) && t(18, D[X] = !1, D);
  }
  function be(X, Te) {
    O[X] != Te && (Te === "" || Te == null ? (delete O[X], t(19, O)) : t(19, O[X] = Te, O));
  }
  function Ye(X) {
    var Te;
    return X in N ? (Te = N[X]) !== null && Te !== void 0 ? Te : null : We().getAttribute(X);
  }
  function K(X, Te) {
    N[X] !== Te && t(20, N[X] = Te, N);
  }
  function x(X) {
    (!(X in N) || N[X] != null) && t(20, N[X] = void 0, N);
  }
  function _e(X) {
    let Te = !0;
    for (; X.nextElementSibling; )
      if (X = X.nextElementSibling, X.nodeType === 1 && X.classList.contains("mdc-deprecated-list-item")) {
        const qe = X.attributes.getNamedItem("tabindex");
        if (qe && qe.value === "0") {
          Te = !1;
          break;
        }
      }
    Te && t(21, i = 0);
  }
  function ye(X) {
    const Te = X.key === "Enter", qe = X.key === "Space";
    (Te || qe) && re(X);
  }
  function Ne(X) {
    ("_smui_checkbox_accessor" in X.detail || "_smui_radio_accessor" in X.detail) && t(16, W = X.detail);
  }
  function re(X) {
    R || ge(We(), "SMUI:action", X);
  }
  function q() {
    var X, Te, qe;
    const Ue = We(), yt = Ue.querySelector(".mdc-deprecated-list-item__primary-text");
    if (yt)
      return (X = yt.textContent) !== null && X !== void 0 ? X : "";
    const M = Ue.querySelector(".mdc-deprecated-list-item__text");
    return M ? (Te = M.textContent) !== null && Te !== void 0 ? Te : "" : (qe = Ue.textContent) !== null && qe !== void 0 ? qe : "";
  }
  function We() {
    return g.getElement();
  }
  function Ge(X) {
    se[X ? "unshift" : "push"](() => {
      g = X, t(17, g);
    });
  }
  const ft = () => t(16, W = void 0);
  return n.$$set = (X) => {
    e = Y(Y({}, e), tt(X)), t(29, l = pe(e, r)), "use" in X && t(2, f = X.use), "class" in X && t(3, h = X.class), "style" in X && t(4, p = X.style), "color" in X && t(5, b = X.color), "nonInteractive" in X && t(6, m = X.nonInteractive), "ripple" in X && t(7, C = X.ripple), "wrapper" in X && t(8, v = X.wrapper), "activated" in X && t(1, T = X.activated), "role" in X && t(9, y = X.role), "selected" in X && t(0, k = X.selected), "disabled" in X && t(10, R = X.disabled), "skipRestoreFocus" in X && t(11, _ = X.skipRestoreFocus), "tabindex" in X && t(30, A = X.tabindex), "inputId" in X && t(31, w = X.inputId), "href" in X && t(12, I = X.href), "component" in X && t(13, F = X.component), "tag" in X && t(14, L = X.tag), "$$scope" in X && t(37, s = X.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty[0] & /*tabindexProp, nonInteractive, disabled, selected, input*/
    1073808449 && t(21, i = d(A) ? !m && !R && (k || W && W.checked) ? 0 : -1 : A);
  }, [
    k,
    T,
    f,
    h,
    p,
    b,
    m,
    C,
    v,
    y,
    R,
    _,
    I,
    F,
    L,
    re,
    W,
    g,
    D,
    O,
    N,
    i,
    u,
    z,
    ue,
    ke,
    be,
    ye,
    Ne,
    l,
    A,
    w,
    q,
    We,
    a,
    Ge,
    ft,
    s
  ];
}
class xc extends Re {
  constructor(e) {
    super(), Oe(
      this,
      e,
      Jc,
      Zc,
      Ee,
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
Et({
  class: "mdc-deprecated-list-item__text",
  tag: "span"
});
Et({
  class: "mdc-deprecated-list-item__primary-text",
  tag: "span"
});
Et({
  class: "mdc-deprecated-list-item__secondary-text",
  tag: "span"
});
function $c(n) {
  let e, t, i, r, l, a;
  const s = (
    /*#slots*/
    n[8].default
  ), o = Ie(
    s,
    n,
    /*$$scope*/
    n[7],
    null
  );
  let u = [
    {
      class: t = le({
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
  for (let d = 0; d < u.length; d += 1)
    c = Y(c, u[d]);
  return {
    c() {
      e = ne("span"), o && o.c(), ce(e, c);
    },
    m(d, f) {
      V(d, e, f), o && o.m(e, null), n[9](e), r = !0, l || (a = [
        fe(i = Qe.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        fe(
          /*forwardEvents*/
          n[3].call(null, e)
        )
      ], l = !0);
    },
    p(d, [f]) {
      o && o.p && (!r || f & /*$$scope*/
      128) && Ce(
        o,
        s,
        d,
        /*$$scope*/
        d[7],
        r ? ve(
          s,
          /*$$scope*/
          d[7],
          f,
          null
        ) : Ae(
          /*$$scope*/
          d[7]
        ),
        null
      ), ce(e, c = he(u, [
        (!r || f & /*className*/
        2 && t !== (t = le({
          [
            /*className*/
            d[1]
          ]: !0,
          "mdc-deprecated-list-item__graphic": !0,
          "mdc-menu__selection-group-icon": (
            /*menuSelectionGroup*/
            d[4]
          )
        }))) && { class: t },
        f & /*$$restProps*/
        32 && /*$$restProps*/
        d[5]
      ])), i && me(i.update) && f & /*use*/
      1 && i.update.call(
        null,
        /*use*/
        d[0]
      );
    },
    i(d) {
      r || (E(o, d), r = !0);
    },
    o(d) {
      S(o, d), r = !1;
    },
    d(d) {
      d && B(e), o && o.d(d), n[9](null), l = !1, Ze(a);
    }
  };
}
function ed(n, e, t) {
  const i = ["use", "class", "getElement"];
  let r = pe(e, i), { $$slots: l = {}, $$scope: a } = e;
  const s = nt(Je());
  let { use: o = [] } = e, { class: u = "" } = e, c, d = Ke("SMUI:list:graphic:menu-selection-group");
  function f() {
    return c;
  }
  function h(p) {
    se[p ? "unshift" : "push"](() => {
      c = p, t(2, c);
    });
  }
  return n.$$set = (p) => {
    e = Y(Y({}, e), tt(p)), t(5, r = pe(e, i)), "use" in p && t(0, o = p.use), "class" in p && t(1, u = p.class), "$$scope" in p && t(7, a = p.$$scope);
  }, [
    o,
    u,
    c,
    s,
    d,
    r,
    f,
    a,
    l,
    h
  ];
}
class td extends Re {
  constructor(e) {
    super(), Oe(this, e, ed, $c, Ee, { use: 0, class: 1, getElement: 6 });
  }
  get getElement() {
    return this.$$.ctx[6];
  }
}
Et({
  class: "mdc-deprecated-list-item__meta",
  tag: "span"
});
Et({
  class: "mdc-deprecated-list-group",
  tag: "div"
});
Et({
  class: "mdc-deprecated-list-group__subheader",
  tag: "h3"
});
Et({
  class: "mdc-menu__selection-group-icon",
  component: td
});
function nd(n) {
  let e;
  return {
    c() {
      e = at(
        /*content*/
        n[8]
      );
    },
    m(t, i) {
      V(t, e, i);
    },
    p(t, i) {
      i & /*content*/
      256 && At(
        e,
        /*content*/
        t[8]
      );
    },
    i: $e,
    o: $e,
    d(t) {
      t && B(e);
    }
  };
}
function id(n) {
  let e;
  const t = (
    /*#slots*/
    n[13].default
  ), i = Ie(
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
      4096) && Ce(
        i,
        t,
        r,
        /*$$scope*/
        r[12],
        e ? ve(
          t,
          /*$$scope*/
          r[12],
          l,
          null
        ) : Ae(
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
      S(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function rd(n) {
  let e, t, i, r, l, a, s, o, u;
  const c = [id, nd], d = [];
  function f(b, m) {
    return (
      /*content*/
      b[8] == null ? 0 : 1
    );
  }
  t = f(n), i = d[t] = c[t](n);
  let h = [
    {
      class: r = le({
        [
          /*className*/
          n[1]
        ]: !0,
        "mdc-select-helper-text": !0,
        "mdc-select-helper-text--validation-msg": (
          /*validationMsg*/
          n[4]
        ),
        "mdc-select-helper-text--validation-msg-persistent": (
          /*persistent*/
          n[3]
        ),
        .../*internalClasses*/
        n[6]
      })
    },
    {
      "aria-hidden": l = /*persistent*/
      n[3] ? void 0 : "true"
    },
    { id: (
      /*id*/
      n[2]
    ) },
    /*internalAttrs*/
    n[7],
    /*$$restProps*/
    n[10]
  ], p = {};
  for (let b = 0; b < h.length; b += 1)
    p = Y(p, h[b]);
  return {
    c() {
      e = ne("div"), i.c(), ce(e, p);
    },
    m(b, m) {
      V(b, e, m), d[t].m(e, null), n[14](e), s = !0, o || (u = [
        fe(a = Qe.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        fe(
          /*forwardEvents*/
          n[9].call(null, e)
        )
      ], o = !0);
    },
    p(b, [m]) {
      let C = t;
      t = f(b), t === C ? d[t].p(b, m) : (Pe(), S(d[C], 1, 1, () => {
        d[C] = null;
      }), He(), i = d[t], i ? i.p(b, m) : (i = d[t] = c[t](b), i.c()), E(i, 1), i.m(e, null)), ce(e, p = he(h, [
        (!s || m & /*className, validationMsg, persistent, internalClasses*/
        90 && r !== (r = le({
          [
            /*className*/
            b[1]
          ]: !0,
          "mdc-select-helper-text": !0,
          "mdc-select-helper-text--validation-msg": (
            /*validationMsg*/
            b[4]
          ),
          "mdc-select-helper-text--validation-msg-persistent": (
            /*persistent*/
            b[3]
          ),
          .../*internalClasses*/
          b[6]
        }))) && { class: r },
        (!s || m & /*persistent*/
        8 && l !== (l = /*persistent*/
        b[3] ? void 0 : "true")) && { "aria-hidden": l },
        (!s || m & /*id*/
        4) && { id: (
          /*id*/
          b[2]
        ) },
        m & /*internalAttrs*/
        128 && /*internalAttrs*/
        b[7],
        m & /*$$restProps*/
        1024 && /*$$restProps*/
        b[10]
      ])), a && me(a.update) && m & /*use*/
      1 && a.update.call(
        null,
        /*use*/
        b[0]
      );
    },
    i(b) {
      s || (E(i), s = !0);
    },
    o(b) {
      S(i), s = !1;
    },
    d(b) {
      b && B(e), d[t].d(), n[14](null), o = !1, Ze(u);
    }
  };
}
let ld = 0;
function sd(n, e, t) {
  const i = ["use", "class", "id", "persistent", "validationMsg", "getElement"];
  let r = pe(e, i), { $$slots: l = {}, $$scope: a } = e;
  const s = nt(Je());
  let { use: o = [] } = e, { class: u = "" } = e, { id: c = "SMUI-select-helper-text-" + ld++ } = e, { persistent: d = !1 } = e, { validationMsg: f = !1 } = e, h, p, b = {}, m = {}, C;
  ot(() => (p = new Nc({
    addClass: T,
    removeClass: y,
    hasClass: v,
    getAttr: k,
    setAttr: R,
    removeAttr: _,
    setContent: (I) => {
      t(8, C = I);
    }
  }), c.startsWith("SMUI-select-helper-text-") && ge(A(), "SMUISelectHelperText:id", c), ge(A(), "SMUISelectHelperText:mount", p), p.init(), () => {
    ge(A(), "SMUISelectHelperText:unmount", p), p.destroy();
  }));
  function v(I) {
    return I in b ? b[I] : A().classList.contains(I);
  }
  function T(I) {
    b[I] || t(6, b[I] = !0, b);
  }
  function y(I) {
    (!(I in b) || b[I]) && t(6, b[I] = !1, b);
  }
  function k(I) {
    var g;
    return I in m ? (g = m[I]) !== null && g !== void 0 ? g : null : A().getAttribute(I);
  }
  function R(I, g) {
    m[I] !== g && t(7, m[I] = g, m);
  }
  function _(I) {
    (!(I in m) || m[I] != null) && t(7, m[I] = void 0, m);
  }
  function A() {
    return h;
  }
  function w(I) {
    se[I ? "unshift" : "push"](() => {
      h = I, t(5, h);
    });
  }
  return n.$$set = (I) => {
    e = Y(Y({}, e), tt(I)), t(10, r = pe(e, i)), "use" in I && t(0, o = I.use), "class" in I && t(1, u = I.class), "id" in I && t(2, c = I.id), "persistent" in I && t(3, d = I.persistent), "validationMsg" in I && t(4, f = I.validationMsg), "$$scope" in I && t(12, a = I.$$scope);
  }, [
    o,
    u,
    c,
    d,
    f,
    h,
    b,
    m,
    C,
    s,
    r,
    A,
    a,
    l,
    w
  ];
}
class ad extends Re {
  constructor(e) {
    super(), Oe(this, e, sd, rd, Ee, {
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
const od = (n) => ({}), Tl = (n) => ({}), ud = (n) => ({}), Ll = (n) => ({}), cd = (n) => ({}), Ol = (n) => ({}), dd = (n) => ({}), Rl = (n) => ({});
function kl(n) {
  let e, t = [
    { type: "hidden" },
    { required: (
      /*required*/
      n[10]
    ) },
    { disabled: (
      /*disabled*/
      n[6]
    ) },
    { value: (
      /*value*/
      n[0]
    ) },
    Be(
      /*$$restProps*/
      n[53],
      "input$"
    )
  ], i = {};
  for (let r = 0; r < t.length; r += 1)
    i = Y(i, t[r]);
  return {
    c() {
      e = ne("input"), ce(e, i);
    },
    m(r, l) {
      V(r, e, l), e.autofocus && e.focus();
    },
    p(r, l) {
      ce(e, i = he(t, [
        { type: "hidden" },
        l[0] & /*required*/
        1024 && { required: (
          /*required*/
          r[10]
        ) },
        l[0] & /*disabled*/
        64 && { disabled: (
          /*disabled*/
          r[6]
        ) },
        l[0] & /*value*/
        1 && { value: (
          /*value*/
          r[0]
        ) },
        l[1] & /*$$restProps*/
        4194304 && Be(
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
function Dl(n) {
  let e;
  return {
    c() {
      e = ne("span"), U(e, "class", "mdc-select__ripple");
    },
    m(t, i) {
      V(t, e, i);
    },
    d(t) {
      t && B(e);
    }
  };
}
function Ml(n) {
  let e, t;
  const i = [
    { id: (
      /*inputId*/
      n[11] + "-smui-label"
    ) },
    {
      floatAbove: (
        /*$selectedTextStore*/
        n[42] !== ""
      )
    },
    { required: (
      /*required*/
      n[10]
    ) },
    Be(
      /*$$restProps*/
      n[53],
      "label$"
    )
  ];
  let r = {
    $$slots: { default: [fd] },
    $$scope: { ctx: n }
  };
  for (let l = 0; l < i.length; l += 1)
    r = Y(r, i[l]);
  return e = new bi({ props: r }), n[67](e), {
    c() {
      ie(e.$$.fragment);
    },
    m(l, a) {
      ee(e, l, a), t = !0;
    },
    p(l, a) {
      const s = a[0] & /*inputId, required*/
      3072 | a[1] & /*$selectedTextStore, $$restProps*/
      4196352 ? he(i, [
        a[0] & /*inputId*/
        2048 && { id: (
          /*inputId*/
          l[11] + "-smui-label"
        ) },
        a[1] & /*$selectedTextStore*/
        2048 && {
          floatAbove: (
            /*$selectedTextStore*/
            l[42] !== ""
          )
        },
        a[0] & /*required*/
        1024 && { required: (
          /*required*/
          l[10]
        ) },
        a[1] & /*$$restProps*/
        4194304 && Me(Be(
          /*$$restProps*/
          l[53],
          "label$"
        ))
      ]) : {};
      a[0] & /*label*/
      512 | a[2] & /*$$scope*/
      33554432 && (s.$$scope = { dirty: a, ctx: l }), e.$set(s);
    },
    i(l) {
      t || (E(e.$$.fragment, l), t = !0);
    },
    o(l) {
      S(e.$$.fragment, l), t = !1;
    },
    d(l) {
      n[67](null), te(e, l);
    }
  };
}
function fd(n) {
  let e = (
    /*label*/
    (n[9] == null ? "" : (
      /*label*/
      n[9]
    )) + ""
  ), t, i;
  const r = (
    /*#slots*/
    n[64].label
  ), l = Ie(
    r,
    n,
    /*$$scope*/
    n[87],
    Rl
  );
  return {
    c() {
      t = at(e), l && l.c();
    },
    m(a, s) {
      V(a, t, s), l && l.m(a, s), i = !0;
    },
    p(a, s) {
      (!i || s[0] & /*label*/
      512) && e !== (e = /*label*/
      (a[9] == null ? "" : (
        /*label*/
        a[9]
      )) + "") && At(t, e), l && l.p && (!i || s[2] & /*$$scope*/
      33554432) && Ce(
        l,
        r,
        a,
        /*$$scope*/
        a[87],
        i ? ve(
          r,
          /*$$scope*/
          a[87],
          s,
          dd
        ) : Ae(
          /*$$scope*/
          a[87]
        ),
        Rl
      );
    },
    i(a) {
      i || (E(l, a), i = !0);
    },
    o(a) {
      S(l, a), i = !1;
    },
    d(a) {
      a && B(t), l && l.d(a);
    }
  };
}
function Fl(n) {
  let e, t;
  const i = [
    {
      noLabel: (
        /*noLabel*/
        n[8] || /*label*/
        n[9] == null && !/*$$slots*/
        n[54].label
      )
    },
    Be(
      /*$$restProps*/
      n[53],
      "outline$"
    )
  ];
  let r = {
    $$slots: { default: [md] },
    $$scope: { ctx: n }
  };
  for (let l = 0; l < i.length; l += 1)
    r = Y(r, i[l]);
  return e = new aa({ props: r }), n[69](e), {
    c() {
      ie(e.$$.fragment);
    },
    m(l, a) {
      ee(e, l, a), t = !0;
    },
    p(l, a) {
      const s = a[0] & /*noLabel, label*/
      768 | a[1] & /*$$slots, $$restProps*/
      12582912 ? he(i, [
        a[0] & /*noLabel, label*/
        768 | a[1] & /*$$slots*/
        8388608 && {
          noLabel: (
            /*noLabel*/
            l[8] || /*label*/
            l[9] == null && !/*$$slots*/
            l[54].label
          )
        },
        a[1] & /*$$restProps*/
        4194304 && Me(Be(
          /*$$restProps*/
          l[53],
          "outline$"
        ))
      ]) : {};
      a[0] & /*inputId, required, label, noLabel*/
      3840 | a[1] & /*$selectedTextStore, $$restProps, floatingLabel, $$slots*/
      12585216 | a[2] & /*$$scope*/
      33554432 && (s.$$scope = { dirty: a, ctx: l }), e.$set(s);
    },
    i(l) {
      t || (E(e.$$.fragment, l), t = !0);
    },
    o(l) {
      S(e.$$.fragment, l), t = !1;
    },
    d(l) {
      n[69](null), te(e, l);
    }
  };
}
function Nl(n) {
  let e, t;
  const i = [
    { id: (
      /*inputId*/
      n[11] + "-smui-label"
    ) },
    {
      floatAbove: (
        /*$selectedTextStore*/
        n[42] !== ""
      )
    },
    { required: (
      /*required*/
      n[10]
    ) },
    Be(
      /*$$restProps*/
      n[53],
      "label$"
    )
  ];
  let r = {
    $$slots: { default: [hd] },
    $$scope: { ctx: n }
  };
  for (let l = 0; l < i.length; l += 1)
    r = Y(r, i[l]);
  return e = new bi({ props: r }), n[68](e), {
    c() {
      ie(e.$$.fragment);
    },
    m(l, a) {
      ee(e, l, a), t = !0;
    },
    p(l, a) {
      const s = a[0] & /*inputId, required*/
      3072 | a[1] & /*$selectedTextStore, $$restProps*/
      4196352 ? he(i, [
        a[0] & /*inputId*/
        2048 && { id: (
          /*inputId*/
          l[11] + "-smui-label"
        ) },
        a[1] & /*$selectedTextStore*/
        2048 && {
          floatAbove: (
            /*$selectedTextStore*/
            l[42] !== ""
          )
        },
        a[0] & /*required*/
        1024 && { required: (
          /*required*/
          l[10]
        ) },
        a[1] & /*$$restProps*/
        4194304 && Me(Be(
          /*$$restProps*/
          l[53],
          "label$"
        ))
      ]) : {};
      a[0] & /*label*/
      512 | a[2] & /*$$scope*/
      33554432 && (s.$$scope = { dirty: a, ctx: l }), e.$set(s);
    },
    i(l) {
      t || (E(e.$$.fragment, l), t = !0);
    },
    o(l) {
      S(e.$$.fragment, l), t = !1;
    },
    d(l) {
      n[68](null), te(e, l);
    }
  };
}
function hd(n) {
  let e = (
    /*label*/
    (n[9] == null ? "" : (
      /*label*/
      n[9]
    )) + ""
  ), t, i;
  const r = (
    /*#slots*/
    n[64].label
  ), l = Ie(
    r,
    n,
    /*$$scope*/
    n[87],
    Ol
  );
  return {
    c() {
      t = at(e), l && l.c();
    },
    m(a, s) {
      V(a, t, s), l && l.m(a, s), i = !0;
    },
    p(a, s) {
      (!i || s[0] & /*label*/
      512) && e !== (e = /*label*/
      (a[9] == null ? "" : (
        /*label*/
        a[9]
      )) + "") && At(t, e), l && l.p && (!i || s[2] & /*$$scope*/
      33554432) && Ce(
        l,
        r,
        a,
        /*$$scope*/
        a[87],
        i ? ve(
          r,
          /*$$scope*/
          a[87],
          s,
          cd
        ) : Ae(
          /*$$scope*/
          a[87]
        ),
        Ol
      );
    },
    i(a) {
      i || (E(l, a), i = !0);
    },
    o(a) {
      S(l, a), i = !1;
    },
    d(a) {
      a && B(t), l && l.d(a);
    }
  };
}
function md(n) {
  let e, t, i = !/*noLabel*/
  n[8] && /*label*/
  (n[9] != null || /*$$slots*/
  n[54].label) && Nl(n);
  return {
    c() {
      i && i.c(), e = Xe();
    },
    m(r, l) {
      i && i.m(r, l), V(r, e, l), t = !0;
    },
    p(r, l) {
      !/*noLabel*/
      r[8] && /*label*/
      (r[9] != null || /*$$slots*/
      r[54].label) ? i ? (i.p(r, l), l[0] & /*noLabel, label*/
      768 | l[1] & /*$$slots*/
      8388608 && E(i, 1)) : (i = Nl(r), i.c(), E(i, 1), i.m(e.parentNode, e)) : i && (Pe(), S(i, 1, 1, () => {
        i = null;
      }), He());
    },
    i(r) {
      t || (E(i), t = !0);
    },
    o(r) {
      S(i), t = !1;
    },
    d(r) {
      r && B(e), i && i.d(r);
    }
  };
}
function Ul(n) {
  let e, t;
  const i = [Be(
    /*$$restProps*/
    n[53],
    "ripple$"
  )];
  let r = {};
  for (let l = 0; l < i.length; l += 1)
    r = Y(r, i[l]);
  return e = new sa({ props: r }), n[70](e), {
    c() {
      ie(e.$$.fragment);
    },
    m(l, a) {
      ee(e, l, a), t = !0;
    },
    p(l, a) {
      const s = a[1] & /*$$restProps*/
      4194304 ? he(i, [Me(Be(
        /*$$restProps*/
        l[53],
        "ripple$"
      ))]) : {};
      e.$set(s);
    },
    i(l) {
      t || (E(e.$$.fragment, l), t = !0);
    },
    o(l) {
      S(e.$$.fragment, l), t = !1;
    },
    d(l) {
      n[70](null), te(e, l);
    }
  };
}
function pd(n) {
  let e;
  const t = (
    /*#slots*/
    n[64].default
  ), i = Ie(
    t,
    n,
    /*$$scope*/
    n[87],
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
      i && i.p && (!e || l[2] & /*$$scope*/
      33554432) && Ce(
        i,
        t,
        r,
        /*$$scope*/
        r[87],
        e ? ve(
          t,
          /*$$scope*/
          r[87],
          l,
          null
        ) : Ae(
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
      S(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function gd(n) {
  let e, t, i;
  const r = [
    { role: "listbox" },
    { wrapFocus: (
      /*wrapFocus*/
      n[35]
    ) },
    Be(
      /*$$restProps*/
      n[53],
      "list$"
    )
  ];
  function l(s) {
    n[75](s);
  }
  let a = {
    $$slots: { default: [pd] },
    $$scope: { ctx: n }
  };
  for (let s = 0; s < r.length; s += 1)
    a = Y(a, r[s]);
  return (
    /*selectedIndex*/
    n[24] !== void 0 && (a.selectedIndex = /*selectedIndex*/
    n[24]), e = new Yc({ props: a }), se.push(() => pt(e, "selectedIndex", l)), e.$on(
      "SMUIList:mount",
      /*SMUIList_mount_handler*/
      n[76]
    ), {
      c() {
        ie(e.$$.fragment);
      },
      m(s, o) {
        ee(e, s, o), i = !0;
      },
      p(s, o) {
        const u = o[1] & /*wrapFocus, $$restProps*/
        4194320 ? he(r, [
          r[0],
          o[1] & /*wrapFocus*/
          16 && { wrapFocus: (
            /*wrapFocus*/
            s[35]
          ) },
          o[1] & /*$$restProps*/
          4194304 && Me(Be(
            /*$$restProps*/
            s[53],
            "list$"
          ))
        ]) : {};
        o[2] & /*$$scope*/
        33554432 && (u.$$scope = { dirty: o, ctx: s }), !t && o[0] & /*selectedIndex*/
        16777216 && (t = !0, u.selectedIndex = /*selectedIndex*/
        s[24], mt(() => t = !1)), e.$set(u);
      },
      i(s) {
        i || (E(e.$$.fragment, s), i = !0);
      },
      o(s) {
        S(e.$$.fragment, s), i = !1;
      },
      d(s) {
        te(e, s);
      }
    }
  );
}
function wl(n) {
  let e, t;
  const i = [Be(
    /*$$restProps*/
    n[53],
    "helperText$"
  )];
  let r = {
    $$slots: { default: [_d] },
    $$scope: { ctx: n }
  };
  for (let l = 0; l < i.length; l += 1)
    r = Y(r, i[l]);
  return e = new ad({ props: r }), e.$on(
    "SMUISelectHelperText:id",
    /*SMUISelectHelperText_id_handler*/
    n[84]
  ), e.$on(
    "SMUISelectHelperText:mount",
    /*SMUISelectHelperText_mount_handler*/
    n[85]
  ), e.$on(
    "SMUISelectHelperText:unmount",
    /*SMUISelectHelperText_unmount_handler*/
    n[86]
  ), {
    c() {
      ie(e.$$.fragment);
    },
    m(l, a) {
      ee(e, l, a), t = !0;
    },
    p(l, a) {
      const s = a[1] & /*$$restProps*/
      4194304 ? he(i, [Me(Be(
        /*$$restProps*/
        l[53],
        "helperText$"
      ))]) : {};
      a[2] & /*$$scope*/
      33554432 && (s.$$scope = { dirty: a, ctx: l }), e.$set(s);
    },
    i(l) {
      t || (E(e.$$.fragment, l), t = !0);
    },
    o(l) {
      S(e.$$.fragment, l), t = !1;
    },
    d(l) {
      te(e, l);
    }
  };
}
function _d(n) {
  let e;
  const t = (
    /*#slots*/
    n[64].helperText
  ), i = Ie(
    t,
    n,
    /*$$scope*/
    n[87],
    Tl
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
      33554432) && Ce(
        i,
        t,
        r,
        /*$$scope*/
        r[87],
        e ? ve(
          t,
          /*$$scope*/
          r[87],
          l,
          od
        ) : Ae(
          /*$$scope*/
          r[87]
        ),
        Tl
      );
    },
    i(r) {
      e || (E(i, r), e = !0);
    },
    o(r) {
      S(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function bd(n) {
  let e, t, i, r, l, a, s, o, u, c, d, f, h, p, b, m, C, v, T, y, k, R, _, A, w, I, g, D, O, N, W, G, z, F, L, j, ue, ke, be, Ye, K, x = (
    /*hiddenInput*/
    n[12] && kl(n)
  ), _e = (
    /*variant*/
    n[7] === "filled" && Dl()
  ), ye = (
    /*variant*/
    n[7] !== "outlined" && !/*noLabel*/
    n[8] && /*label*/
    (n[9] != null || /*$$slots*/
    n[54].label) && Ml(n)
  ), Ne = (
    /*variant*/
    n[7] === "outlined" && Fl(n)
  );
  const re = (
    /*#slots*/
    n[64].leadingIcon
  ), q = Ie(
    re,
    n,
    /*$$scope*/
    n[87],
    Ll
  );
  let We = [
    {
      id: d = /*inputId*/
      n[11] + "-smui-selected-text"
    },
    {
      class: f = le({
        [
          /*selectedText$class*/
          n[19]
        ]: !0,
        "mdc-select__selected-text": !0
      })
    },
    { role: "button" },
    { "aria-haspopup": "listbox" },
    {
      "aria-labelledby": h = /*inputId*/
      n[11] + "-smui-label"
    },
    Be(
      /*$$restProps*/
      n[53],
      "selectedText$"
    )
  ], Ge = {};
  for (let De = 0; De < We.length; De += 1)
    Ge = Y(Ge, We[De]);
  let ft = [
    {
      class: b = le({
        [
          /*selectedTextContainer$class*/
          n[17]
        ]: !0,
        "mdc-select__selected-text-container": !0
      })
    },
    Be(
      /*$$restProps*/
      n[53],
      "selectedTextContainer$"
    )
  ], X = {};
  for (let De = 0; De < ft.length; De += 1)
    X = Y(X, ft[De]);
  let Te = [
    {
      class: R = le({
        [
          /*dropdownIcon$class*/
          n[21]
        ]: !0,
        "mdc-select__dropdown-icon": !0
      })
    },
    Be(
      /*$$restProps*/
      n[53],
      "dropdownIcon$"
    )
  ], qe = {};
  for (let De = 0; De < Te.length; De += 1)
    qe = Y(qe, Te[De]);
  let Ue = (
    /*variant*/
    n[7] !== "outlined" && /*ripple*/
    n[5] && Ul(n)
  ), yt = [
    {
      class: w = le({
        [
          /*anchor$class*/
          n[15]
        ]: !0,
        "mdc-select__anchor": !0
      })
    },
    {
      "aria-required": I = /*required*/
      n[10] ? "true" : void 0
    },
    {
      "aria-disabled": g = /*disabled*/
      n[6] ? "true" : void 0
    },
    { "aria-controls": (
      /*menuId*/
      n[45]
    ) },
    {
      "aria-expanded": D = /*menuOpen*/
      n[31] ? "true" : "false"
    },
    { "aria-describedby": (
      /*helperId*/
      n[30]
    ) },
    { role: "combobox" },
    { tabindex: "0" },
    /*selectAnchorAttrs*/
    n[29],
    Be(
      /*$$restProps*/
      n[53],
      "anchor$"
    )
  ], M = {};
  for (let De = 0; De < yt.length; De += 1)
    M = Y(M, yt[De]);
  const $ = [
    {
      class: le({
        [
          /*menu$class*/
          n[22]
        ]: !0,
        "mdc-select__menu": !0,
        .../*menuClasses*/
        n[32]
      })
    },
    { id: (
      /*menuId*/
      n[45]
    ) },
    { fullWidth: !0 },
    { anchor: !1 },
    { anchorElement: (
      /*anchorElement*/
      n[33]
    ) },
    { anchorCorner: (
      /*anchorCorner*/
      n[34]
    ) },
    Be(
      /*$$restProps*/
      n[53],
      "menu$"
    )
  ];
  function Q(De) {
    n[77](De);
  }
  let je = {
    $$slots: { default: [gd] },
    $$scope: { ctx: n }
  };
  for (let De = 0; De < $.length; De += 1)
    je = Y(je, $[De]);
  /*menuOpen*/
  n[31] !== void 0 && (je.open = /*menuOpen*/
  n[31]), W = new qc({ props: je }), se.push(() => pt(W, "open", Q)), W.$on(
    "SMUIMenu:selected",
    /*SMUIMenu_selected_handler*/
    n[78]
  ), W.$on(
    "SMUIMenuSurface:closing",
    /*SMUIMenuSurface_closing_handler*/
    n[79]
  ), W.$on(
    "SMUIMenuSurface:closed",
    /*SMUIMenuSurface_closed_handler*/
    n[80]
  ), W.$on(
    "SMUIMenuSurface:opened",
    /*SMUIMenuSurface_opened_handler*/
    n[81]
  );
  let dt = [
    {
      class: z = le({
        [
          /*className*/
          n[3]
        ]: !0,
        "mdc-select": !0,
        "mdc-select--required": (
          /*required*/
          n[10]
        ),
        "mdc-select--disabled": (
          /*disabled*/
          n[6]
        ),
        "mdc-select--filled": (
          /*variant*/
          n[7] === "filled"
        ),
        "mdc-select--outlined": (
          /*variant*/
          n[7] === "outlined"
        ),
        "smui-select--standard": (
          /*variant*/
          n[7] === "standard"
        ),
        "mdc-select--with-leading-icon": (
          /*isUninitializedValue*/
          n[44](
            /*withLeadingIcon*/
            n[13]
          ) ? (
            /*$$slots*/
            n[54].leadingIcon
          ) : (
            /*withLeadingIcon*/
            n[13]
          )
        ),
        "mdc-select--no-label": (
          /*noLabel*/
          n[8] || /*label*/
          n[9] == null && !/*$$slots*/
          n[54].label
        ),
        "mdc-select--invalid": (
          /*invalid*/
          n[1]
        ),
        "mdc-select--activated": (
          /*menuOpen*/
          n[31]
        ),
        "mdc-data-table__pagination-rows-per-page-select": (
          /*context*/
          n[46] === "data-table:pagination"
        ),
        .../*internalClasses*/
        n[26]
      })
    },
    {
      style: F = Object.entries(
        /*internalStyles*/
        n[27]
      ).map(Pl).concat([
        /*style*/
        n[4]
      ]).join(" ")
    },
    Gt(
      /*$$restProps*/
      n[53],
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
  ], ut = {};
  for (let De = 0; De < dt.length; De += 1)
    ut = Y(ut, dt[De]);
  let et = (
    /*$$slots*/
    n[54].helperText && wl(n)
  );
  return {
    c() {
      e = ne("div"), x && x.c(), t = ae(), i = ne("div"), _e && _e.c(), r = ae(), ye && ye.c(), l = ae(), Ne && Ne.c(), a = ae(), q && q.c(), s = ae(), o = ne("span"), u = ne("span"), c = at(
        /*$selectedTextStore*/
        n[42]
      ), C = ae(), v = ne("span"), T = st("svg"), y = st("polygon"), k = st("polygon"), A = ae(), Ue && Ue.c(), N = ae(), ie(W.$$.fragment), ue = ae(), et && et.c(), ke = Xe(), ce(u, Ge), ce(o, X), U(y, "class", "mdc-select__dropdown-icon-inactive"), U(y, "stroke", "none"), U(y, "fill-rule", "evenodd"), U(y, "points", "7 10 12 15 17 10"), U(k, "class", "mdc-select__dropdown-icon-active"), U(k, "stroke", "none"), U(k, "fill-rule", "evenodd"), U(k, "points", "7 15 12 10 17 15"), U(T, "class", "mdc-select__dropdown-icon-graphic"), U(T, "viewBox", "7 10 10 5"), U(T, "focusable", "false"), ce(v, qe), ce(i, M), ce(e, ut);
    },
    m(De, de) {
      V(De, e, de), x && x.m(e, null), J(e, t), J(e, i), _e && _e.m(i, null), J(i, r), ye && ye.m(i, null), J(i, l), Ne && Ne.m(i, null), J(i, a), q && q.m(i, null), J(i, s), J(i, o), J(o, u), J(u, c), J(i, C), J(i, v), J(v, T), J(T, y), J(T, k), J(i, A), Ue && Ue.m(i, null), n[71](i), J(e, N), ee(W, e, null), n[82](e), V(De, ue, de), et && et.m(De, de), V(De, ke, de), be = !0, Ye || (K = [
        fe(p = Qe.call(
          null,
          u,
          /*selectedText$use*/
          n[18]
        )),
        fe(m = Qe.call(
          null,
          o,
          /*selectedTextContainer$use*/
          n[16]
        )),
        fe(_ = Qe.call(
          null,
          v,
          /*dropdownIcon$use*/
          n[20]
        )),
        fe(O = Qe.call(
          null,
          i,
          /*anchor$use*/
          n[14]
        )),
        oe(
          i,
          "focus",
          /*focus_handler_1*/
          n[72]
        ),
        oe(
          i,
          "blur",
          /*blur_handler_1*/
          n[73]
        ),
        oe(
          i,
          "click",
          /*click_handler*/
          n[74]
        ),
        oe(i, "keydown", function() {
          me(
            /*instance*/
            n[23] && /*instance*/
            n[23].handleKeydown.bind(
              /*instance*/
              n[23]
            )
          ) && /*instance*/
          (n[23] && /*instance*/
          n[23].handleKeydown.bind(
            /*instance*/
            n[23]
          )).apply(this, arguments);
        }),
        oe(
          i,
          "focus",
          /*focus_handler*/
          n[65]
        ),
        oe(
          i,
          "blur",
          /*blur_handler*/
          n[66]
        ),
        fe(L = kt.call(null, e, {
          ripple: (
            /*variant*/
            n[7] === "filled"
          ),
          unbounded: !1,
          addClass: (
            /*addClass*/
            n[50]
          ),
          removeClass: (
            /*removeClass*/
            n[51]
          ),
          addStyle: (
            /*addStyle*/
            n[52]
          )
        })),
        fe(Bc.call(null, e, {
          addClass: (
            /*addClass*/
            n[50]
          ),
          removeClass: (
            /*removeClass*/
            n[51]
          )
        })),
        fe(j = Qe.call(
          null,
          e,
          /*use*/
          n[2]
        )),
        fe(
          /*forwardEvents*/
          n[43].call(null, e)
        ),
        oe(
          e,
          "SMUISelectLeadingIcon:mount",
          /*handleLeadingIconMount*/
          n[49]
        ),
        oe(
          e,
          "SMUISelectLeadingIcon:unmount",
          /*SMUISelectLeadingIcon_unmount_handler*/
          n[83]
        )
      ], Ye = !0);
    },
    p(De, de) {
      n = De, /*hiddenInput*/
      n[12] ? x ? x.p(n, de) : (x = kl(n), x.c(), x.m(e, t)) : x && (x.d(1), x = null), /*variant*/
      n[7] === "filled" ? _e || (_e = Dl(), _e.c(), _e.m(i, r)) : _e && (_e.d(1), _e = null), /*variant*/
      n[7] !== "outlined" && !/*noLabel*/
      n[8] && /*label*/
      (n[9] != null || /*$$slots*/
      n[54].label) ? ye ? (ye.p(n, de), de[0] & /*variant, noLabel, label*/
      896 | de[1] & /*$$slots*/
      8388608 && E(ye, 1)) : (ye = Ml(n), ye.c(), E(ye, 1), ye.m(i, l)) : ye && (Pe(), S(ye, 1, 1, () => {
        ye = null;
      }), He()), /*variant*/
      n[7] === "outlined" ? Ne ? (Ne.p(n, de), de[0] & /*variant*/
      128 && E(Ne, 1)) : (Ne = Fl(n), Ne.c(), E(Ne, 1), Ne.m(i, a)) : Ne && (Pe(), S(Ne, 1, 1, () => {
        Ne = null;
      }), He()), q && q.p && (!be || de[2] & /*$$scope*/
      33554432) && Ce(
        q,
        re,
        n,
        /*$$scope*/
        n[87],
        be ? ve(
          re,
          /*$$scope*/
          n[87],
          de,
          ud
        ) : Ae(
          /*$$scope*/
          n[87]
        ),
        Ll
      ), (!be || de[1] & /*$selectedTextStore*/
      2048) && eo(
        c,
        /*$selectedTextStore*/
        n[42],
        Ge.contenteditable
      ), ce(u, Ge = he(We, [
        (!be || de[0] & /*inputId*/
        2048 && d !== (d = /*inputId*/
        n[11] + "-smui-selected-text")) && { id: d },
        (!be || de[0] & /*selectedText$class*/
        524288 && f !== (f = le({
          [
            /*selectedText$class*/
            n[19]
          ]: !0,
          "mdc-select__selected-text": !0
        }))) && { class: f },
        { role: "button" },
        { "aria-haspopup": "listbox" },
        (!be || de[0] & /*inputId*/
        2048 && h !== (h = /*inputId*/
        n[11] + "-smui-label")) && {
          "aria-labelledby": h
        },
        de[1] & /*$$restProps*/
        4194304 && Be(
          /*$$restProps*/
          n[53],
          "selectedText$"
        )
      ])), p && me(p.update) && de[0] & /*selectedText$use*/
      262144 && p.update.call(
        null,
        /*selectedText$use*/
        n[18]
      ), ce(o, X = he(ft, [
        (!be || de[0] & /*selectedTextContainer$class*/
        131072 && b !== (b = le({
          [
            /*selectedTextContainer$class*/
            n[17]
          ]: !0,
          "mdc-select__selected-text-container": !0
        }))) && { class: b },
        de[1] & /*$$restProps*/
        4194304 && Be(
          /*$$restProps*/
          n[53],
          "selectedTextContainer$"
        )
      ])), m && me(m.update) && de[0] & /*selectedTextContainer$use*/
      65536 && m.update.call(
        null,
        /*selectedTextContainer$use*/
        n[16]
      ), ce(v, qe = he(Te, [
        (!be || de[0] & /*dropdownIcon$class*/
        2097152 && R !== (R = le({
          [
            /*dropdownIcon$class*/
            n[21]
          ]: !0,
          "mdc-select__dropdown-icon": !0
        }))) && { class: R },
        de[1] & /*$$restProps*/
        4194304 && Be(
          /*$$restProps*/
          n[53],
          "dropdownIcon$"
        )
      ])), _ && me(_.update) && de[0] & /*dropdownIcon$use*/
      1048576 && _.update.call(
        null,
        /*dropdownIcon$use*/
        n[20]
      ), /*variant*/
      n[7] !== "outlined" && /*ripple*/
      n[5] ? Ue ? (Ue.p(n, de), de[0] & /*variant, ripple*/
      160 && E(Ue, 1)) : (Ue = Ul(n), Ue.c(), E(Ue, 1), Ue.m(i, null)) : Ue && (Pe(), S(Ue, 1, 1, () => {
        Ue = null;
      }), He()), ce(i, M = he(yt, [
        (!be || de[0] & /*anchor$class*/
        32768 && w !== (w = le({
          [
            /*anchor$class*/
            n[15]
          ]: !0,
          "mdc-select__anchor": !0
        }))) && { class: w },
        (!be || de[0] & /*required*/
        1024 && I !== (I = /*required*/
        n[10] ? "true" : void 0)) && {
          "aria-required": I
        },
        (!be || de[0] & /*disabled*/
        64 && g !== (g = /*disabled*/
        n[6] ? "true" : void 0)) && {
          "aria-disabled": g
        },
        { "aria-controls": (
          /*menuId*/
          n[45]
        ) },
        (!be || de[1] & /*menuOpen*/
        1 && D !== (D = /*menuOpen*/
        n[31] ? "true" : "false")) && {
          "aria-expanded": D
        },
        (!be || de[0] & /*helperId*/
        1073741824) && { "aria-describedby": (
          /*helperId*/
          n[30]
        ) },
        { role: "combobox" },
        { tabindex: "0" },
        de[0] & /*selectAnchorAttrs*/
        536870912 && /*selectAnchorAttrs*/
        n[29],
        de[1] & /*$$restProps*/
        4194304 && Be(
          /*$$restProps*/
          n[53],
          "anchor$"
        )
      ])), O && me(O.update) && de[0] & /*anchor$use*/
      16384 && O.update.call(
        null,
        /*anchor$use*/
        n[14]
      );
      const Bt = de[0] & /*menu$class*/
      4194304 | de[1] & /*menuClasses, menuId, anchorElement, anchorCorner, $$restProps*/
      4210702 ? he($, [
        de[0] & /*menu$class*/
        4194304 | de[1] & /*menuClasses*/
        2 && {
          class: le({
            [
              /*menu$class*/
              n[22]
            ]: !0,
            "mdc-select__menu": !0,
            .../*menuClasses*/
            n[32]
          })
        },
        de[1] & /*menuId*/
        16384 && { id: (
          /*menuId*/
          n[45]
        ) },
        $[2],
        $[3],
        de[1] & /*anchorElement*/
        4 && { anchorElement: (
          /*anchorElement*/
          n[33]
        ) },
        de[1] & /*anchorCorner*/
        8 && { anchorCorner: (
          /*anchorCorner*/
          n[34]
        ) },
        de[1] & /*$$restProps*/
        4194304 && Me(Be(
          /*$$restProps*/
          n[53],
          "menu$"
        ))
      ]) : {};
      de[0] & /*selectedIndex*/
      16777216 | de[1] & /*wrapFocus, $$restProps, list*/
      4194352 | de[2] & /*$$scope*/
      33554432 && (Bt.$$scope = { dirty: de, ctx: n }), !G && de[1] & /*menuOpen*/
      1 && (G = !0, Bt.open = /*menuOpen*/
      n[31], mt(() => G = !1)), W.$set(Bt), ce(e, ut = he(dt, [
        (!be || de[0] & /*className, required, disabled, variant, withLeadingIcon, noLabel, label, invalid, internalClasses*/
        67119050 | de[1] & /*$$slots, menuOpen*/
        8388609 && z !== (z = le({
          [
            /*className*/
            n[3]
          ]: !0,
          "mdc-select": !0,
          "mdc-select--required": (
            /*required*/
            n[10]
          ),
          "mdc-select--disabled": (
            /*disabled*/
            n[6]
          ),
          "mdc-select--filled": (
            /*variant*/
            n[7] === "filled"
          ),
          "mdc-select--outlined": (
            /*variant*/
            n[7] === "outlined"
          ),
          "smui-select--standard": (
            /*variant*/
            n[7] === "standard"
          ),
          "mdc-select--with-leading-icon": (
            /*isUninitializedValue*/
            n[44](
              /*withLeadingIcon*/
              n[13]
            ) ? (
              /*$$slots*/
              n[54].leadingIcon
            ) : (
              /*withLeadingIcon*/
              n[13]
            )
          ),
          "mdc-select--no-label": (
            /*noLabel*/
            n[8] || /*label*/
            n[9] == null && !/*$$slots*/
            n[54].label
          ),
          "mdc-select--invalid": (
            /*invalid*/
            n[1]
          ),
          "mdc-select--activated": (
            /*menuOpen*/
            n[31]
          ),
          "mdc-data-table__pagination-rows-per-page-select": (
            /*context*/
            n[46] === "data-table:pagination"
          ),
          .../*internalClasses*/
          n[26]
        }))) && { class: z },
        (!be || de[0] & /*internalStyles, style*/
        134217744 && F !== (F = Object.entries(
          /*internalStyles*/
          n[27]
        ).map(Pl).concat([
          /*style*/
          n[4]
        ]).join(" "))) && { style: F },
        de[1] & /*$$restProps*/
        4194304 && Gt(
          /*$$restProps*/
          n[53],
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
      ])), L && me(L.update) && de[0] & /*variant*/
      128 && L.update.call(null, {
        ripple: (
          /*variant*/
          n[7] === "filled"
        ),
        unbounded: !1,
        addClass: (
          /*addClass*/
          n[50]
        ),
        removeClass: (
          /*removeClass*/
          n[51]
        ),
        addStyle: (
          /*addStyle*/
          n[52]
        )
      }), j && me(j.update) && de[0] & /*use*/
      4 && j.update.call(
        null,
        /*use*/
        n[2]
      ), /*$$slots*/
      n[54].helperText ? et ? (et.p(n, de), de[1] & /*$$slots*/
      8388608 && E(et, 1)) : (et = wl(n), et.c(), E(et, 1), et.m(ke.parentNode, ke)) : et && (Pe(), S(et, 1, 1, () => {
        et = null;
      }), He());
    },
    i(De) {
      be || (E(ye), E(Ne), E(q, De), E(Ue), E(W.$$.fragment, De), E(et), be = !0);
    },
    o(De) {
      S(ye), S(Ne), S(q, De), S(Ue), S(W.$$.fragment, De), S(et), be = !1;
    },
    d(De) {
      De && (B(e), B(ue), B(ke)), x && x.d(), _e && _e.d(), ye && ye.d(), Ne && Ne.d(), q && q.d(De), Ue && Ue.d(), n[71](null), te(W), n[82](null), et && et.d(De), Ye = !1, Ze(K);
    }
  };
}
let Id = 0;
function vd(n) {
  const e = n.currentTarget.getBoundingClientRect();
  return (Cd(n) ? n.touches[0].clientX : n.clientX) - e.left;
}
function Cd(n) {
  return "touches" in n;
}
const Pl = ([n, e]) => `${n}: ${e};`;
function Ad(n, e, t) {
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
  let r = pe(e, i), l, a, { $$slots: s = {}, $$scope: o } = e;
  const u = mr(s);
  var c;
  const d = nt(Je());
  let f = () => {
  };
  function h(H) {
    return H === f;
  }
  let { use: p = [] } = e, { class: b = "" } = e, { style: m = "" } = e, { ripple: C = !0 } = e, { disabled: v = !1 } = e, { variant: T = "standard" } = e, { noLabel: y = !1 } = e, { label: k = void 0 } = e, { value: R = "" } = e, { key: _ = (H) => H } = e, { dirty: A = !1 } = e, { invalid: w = f } = e, { updateInvalid: I = h(w) } = e;
  const g = h(w);
  h(w) && (w = !1);
  let { required: D = !1 } = e, { inputId: O = "SMUI-select-" + Id++ } = e, { hiddenInput: N = !1 } = e, { withLeadingIcon: W = f } = e, { anchor$use: G = [] } = e, { anchor$class: z = "" } = e, { selectedTextContainer$use: F = [] } = e, { selectedTextContainer$class: L = "" } = e, { selectedText$use: j = [] } = e, { selectedText$class: ue = "" } = e, { dropdownIcon$use: ke = [] } = e, { dropdownIcon$class: be = "" } = e, { menu$class: Ye = "" } = e, K, x, _e = {}, ye = {}, Ne, re = {}, q = -1, We = (c = r.menu$id) !== null && c !== void 0 ? c : O + "-menu", Ge, ft = Ke("SMUI:addLayoutListener"), X, Te = !1, qe = {}, Ue, yt, M = !1, $, Q = Ke("SMUI:select:context"), je, dt, ut, et, De;
  Ve("SMUI:list:role", ""), Ve("SMUI:list:nav", !1);
  const de = Lt("");
  it(n, de, (H) => t(42, l = H)), Ve("SMUI:select:selectedText", de);
  const Bt = Lt(R);
  it(n, Bt, (H) => t(90, a = H)), Ve("SMUI:select:value", Bt);
  let Z = q;
  ft && (X = ft(ni)), ot(() => (t(23, x = new Fc(
    {
      // getSelectAdapterMethods
      // getMenuItemAttr: (menuItem: Element, attr: string) =>
      //   menuItem.getAttribute(attr),
      setSelectedText: (H) => {
        Rt(de, l = H, l);
      },
      isSelectAnchorFocused: () => document.activeElement === Ne,
      getSelectAnchorAttr: Ai,
      setSelectAnchorAttr: Ei,
      removeSelectAnchorAttr: yi,
      addMenuClass: vi,
      removeMenuClass: Ci,
      openMenu: () => {
        t(31, Te = !0);
      },
      closeMenu: () => {
        t(31, Te = !1);
      },
      getAnchorElement: () => Ne,
      setMenuAnchorElement: (H) => {
        t(33, Ue = H);
      },
      setMenuAnchorCorner: (H) => {
        t(34, yt = H);
      },
      setMenuWrapFocus: (H) => {
        t(35, M = H);
      },
      getSelectedIndex: () => q,
      setSelectedIndex: (H) => {
        t(63, Z = H), t(24, q = H), t(0, R = yn()[q]);
      },
      focusMenuItemAtIndex: (H) => {
        $.focusItemAtIndex(H);
      },
      getMenuItemCount: () => $.items.length,
      getMenuItemValues: () => yn().map(_),
      getMenuItemTextAtIndex: (H) => $.getPrimaryTextAtIndex(H),
      isTypeaheadInProgress: () => $.typeaheadInProgress,
      typeaheadMatchItem: (H, wt) => $.typeaheadMatchItem(H, wt),
      // getCommonAdapterMethods
      addClass: rt,
      removeClass: xt,
      hasClass: Le,
      setRippleCenter: (H) => et && et.setRippleCenter(H),
      activateBottomLine: () => et && et.activate(),
      deactivateBottomLine: () => et && et.deactivate(),
      notifyChange: (H) => {
        t(55, A = !0), I && t(1, w = !x.isValid()), ge(Sn(), "SMUISelect:change", { value: R, index: q }, void 0, !0);
      },
      // getOutlineAdapterMethods
      hasOutline: () => !!De,
      notchOutline: (H) => De && De.notch(H),
      closeOutline: () => De && De.closeNotch(),
      // getLabelAdapterMethods
      hasLabel: () => !!ut,
      floatLabel: (H) => ut && ut.float(H),
      getLabelWidth: () => ut ? ut.getWidth() : 0,
      setLabelRequired: (H) => ut && ut.setRequired(H)
    },
    {
      get helperText() {
        return dt;
      },
      get leadingIcon() {
        return je;
      }
    }
  )), t(24, q = yn().indexOf(R)), x.init(), ti(g), () => {
    x.destroy();
  })), zt(() => {
    X && X();
  });
  function Se(H) {
    t(37, je = H.detail);
  }
  function Le(H) {
    return H in _e ? _e[H] : Sn().classList.contains(H);
  }
  function rt(H) {
    _e[H] || t(26, _e[H] = !0, _e);
  }
  function xt(H) {
    (!(H in _e) || _e[H]) && t(26, _e[H] = !1, _e);
  }
  function jn(H, wt) {
    ye[H] != wt && (wt === "" || wt == null ? (delete ye[H], t(27, ye)) : t(27, ye[H] = wt, ye));
  }
  function vi(H) {
    qe[H] || t(32, qe[H] = !0, qe);
  }
  function Ci(H) {
    (!(H in qe) || qe[H]) && t(32, qe[H] = !1, qe);
  }
  function Ai(H) {
    var wt;
    return H in re ? (wt = re[H]) !== null && wt !== void 0 ? wt : null : Sn().getAttribute(H);
  }
  function Ei(H, wt) {
    re[H] !== wt && t(29, re[H] = wt, re);
  }
  function yi(H) {
    (!(H in re) || re[H] != null) && t(29, re[H] = void 0, re);
  }
  function yn() {
    return $.getOrderedList().map((H) => H.getValue());
  }
  function Si() {
    return x.getUseDefaultValidation();
  }
  function ti(H) {
    x.setUseDefaultValidation(H);
  }
  function Ti() {
    Ne.focus();
  }
  function ni() {
    x.layout();
  }
  function Sn() {
    return K;
  }
  function Li(H) {
    Hn.call(this, n, H);
  }
  function Oi(H) {
    Hn.call(this, n, H);
  }
  function Ri(H) {
    se[H ? "unshift" : "push"](() => {
      ut = H, t(39, ut);
    });
  }
  function ki(H) {
    se[H ? "unshift" : "push"](() => {
      ut = H, t(39, ut);
    });
  }
  function Di(H) {
    se[H ? "unshift" : "push"](() => {
      De = H, t(41, De);
    });
  }
  function Mi(H) {
    se[H ? "unshift" : "push"](() => {
      et = H, t(40, et);
    });
  }
  function Fi(H) {
    se[H ? "unshift" : "push"](() => {
      Ne = H, t(28, Ne);
    });
  }
  const Ni = () => x && x.handleFocus(), Ui = () => x && x.handleBlur(), wi = (H) => {
    Ne.focus(), x && x.handleClick(vd(H));
  };
  function Pi(H) {
    q = H, t(24, q);
  }
  const Hi = (H) => t(36, $ = H.detail);
  function Bi(H) {
    Te = H, t(31, Te);
  }
  const Vi = (H) => x && x.handleMenuItemAction(H.detail.index), ji = () => x && x.handleMenuClosing(), P = () => x && x.handleMenuClosed(), gt = () => x && x.handleMenuOpened();
  function ii(H) {
    se[H ? "unshift" : "push"](() => {
      K = H, t(25, K);
    });
  }
  const Gi = () => t(37, je = void 0), Gn = (H) => t(30, Ge = H.detail), qn = (H) => t(38, dt = H.detail), Ga = () => {
    t(30, Ge = void 0), t(38, dt = void 0);
  };
  return n.$$set = (H) => {
    e = Y(Y({}, e), tt(H)), t(53, r = pe(e, i)), "use" in H && t(2, p = H.use), "class" in H && t(3, b = H.class), "style" in H && t(4, m = H.style), "ripple" in H && t(5, C = H.ripple), "disabled" in H && t(6, v = H.disabled), "variant" in H && t(7, T = H.variant), "noLabel" in H && t(8, y = H.noLabel), "label" in H && t(9, k = H.label), "value" in H && t(0, R = H.value), "key" in H && t(56, _ = H.key), "dirty" in H && t(55, A = H.dirty), "invalid" in H && t(1, w = H.invalid), "updateInvalid" in H && t(57, I = H.updateInvalid), "required" in H && t(10, D = H.required), "inputId" in H && t(11, O = H.inputId), "hiddenInput" in H && t(12, N = H.hiddenInput), "withLeadingIcon" in H && t(13, W = H.withLeadingIcon), "anchor$use" in H && t(14, G = H.anchor$use), "anchor$class" in H && t(15, z = H.anchor$class), "selectedTextContainer$use" in H && t(16, F = H.selectedTextContainer$use), "selectedTextContainer$class" in H && t(17, L = H.selectedTextContainer$class), "selectedText$use" in H && t(18, j = H.selectedText$use), "selectedText$class" in H && t(19, ue = H.selectedText$class), "dropdownIcon$use" in H && t(20, ke = H.dropdownIcon$use), "dropdownIcon$class" in H && t(21, be = H.dropdownIcon$class), "menu$class" in H && t(22, Ye = H.menu$class), "$$scope" in H && t(87, o = H.$$scope);
  }, n.$$.update = () => {
    if (n.$$.dirty[0] & /*selectedIndex, instance, value*/
    25165825 | n.$$.dirty[2] & /*previousSelectedIndex*/
    2 && Z !== q)
      if (t(63, Z = q), x)
        x.setSelectedIndex(
          q,
          /* closeMenu */
          !1,
          /* skipNotify */
          !0
        );
      else {
        const H = yn();
        R !== H[q] && t(0, R = H[q]);
      }
    n.$$.dirty[0] & /*value*/
    1 && Rt(Bt, a = R, a), n.$$.dirty[0] & /*instance, value*/
    8388609 | n.$$.dirty[1] & /*key*/
    33554432 && x && x.getValue() !== _(R) && x.setValue(_(R)), n.$$.dirty[0] & /*instance, disabled*/
    8388672 && x && x.getDisabled() !== v && x.setDisabled(v), n.$$.dirty[0] & /*instance, invalid*/
    8388610 | n.$$.dirty[1] & /*dirty, updateInvalid*/
    83886080 && x && A && x.isValid() !== !w && (I ? t(1, w = !x.isValid()) : x.setValid(!w)), n.$$.dirty[0] & /*instance, required*/
    8389632 && x && x.getRequired() !== D && x.setRequired(D);
  }, [
    R,
    w,
    p,
    b,
    m,
    C,
    v,
    T,
    y,
    k,
    D,
    O,
    N,
    W,
    G,
    z,
    F,
    L,
    j,
    ue,
    ke,
    be,
    Ye,
    x,
    q,
    K,
    _e,
    ye,
    Ne,
    re,
    Ge,
    Te,
    qe,
    Ue,
    yt,
    M,
    $,
    je,
    dt,
    ut,
    et,
    De,
    l,
    d,
    h,
    We,
    Q,
    de,
    Bt,
    Se,
    rt,
    xt,
    jn,
    r,
    u,
    A,
    _,
    I,
    Si,
    ti,
    Ti,
    ni,
    Sn,
    Z,
    s,
    Li,
    Oi,
    Ri,
    ki,
    Di,
    Mi,
    Fi,
    Ni,
    Ui,
    wi,
    Pi,
    Hi,
    Bi,
    Vi,
    ji,
    P,
    gt,
    ii,
    Gi,
    Gn,
    qn,
    Ga,
    o
  ];
}
class Ed extends Re {
  constructor(e) {
    super(), Oe(
      this,
      e,
      Ad,
      bd,
      Ee,
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
function yd(n) {
  let e;
  const t = (
    /*#slots*/
    n[11].default
  ), i = Ie(
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
      8192) && Ce(
        i,
        t,
        r,
        /*$$scope*/
        r[13],
        e ? ve(
          t,
          /*$$scope*/
          r[13],
          l,
          null
        ) : Ae(
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
      S(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function Sd(n) {
  let e, t;
  const i = [
    { use: (
      /*usePass*/
      n[3]
    ) },
    { "data-value": (
      /*value*/
      n[0]
    ) },
    { value: (
      /*value*/
      n[0]
    ) },
    { selected: (
      /*selected*/
      n[2]
    ) },
    /*$$restProps*/
    n[6]
  ];
  let r = {
    $$slots: { default: [yd] },
    $$scope: { ctx: n }
  };
  for (let l = 0; l < i.length; l += 1)
    r = Y(r, i[l]);
  return e = new xc({ props: r }), n[12](e), {
    c() {
      ie(e.$$.fragment);
    },
    m(l, a) {
      ee(e, l, a), t = !0;
    },
    p(l, [a]) {
      const s = a & /*usePass, value, selected, $$restProps*/
      77 ? he(i, [
        a & /*usePass*/
        8 && { use: (
          /*usePass*/
          l[3]
        ) },
        a & /*value*/
        1 && { "data-value": (
          /*value*/
          l[0]
        ) },
        a & /*value*/
        1 && { value: (
          /*value*/
          l[0]
        ) },
        a & /*selected*/
        4 && { selected: (
          /*selected*/
          l[2]
        ) },
        a & /*$$restProps*/
        64 && Me(
          /*$$restProps*/
          l[6]
        )
      ]) : {};
      a & /*$$scope*/
      8192 && (s.$$scope = { dirty: a, ctx: l }), e.$set(s);
    },
    i(l) {
      t || (E(e.$$.fragment, l), t = !0);
    },
    o(l) {
      S(e.$$.fragment, l), t = !1;
    },
    d(l) {
      n[12](null), te(e, l);
    }
  };
}
function Td(n, e, t) {
  let i, r;
  const l = ["use", "class", "value", "getElement"];
  let a = pe(e, l), s, o, { $$slots: u = {}, $$scope: c } = e;
  const d = nt(Je());
  let { use: f = [] } = e;
  const h = "";
  let { value: p = "" } = e, b;
  const m = Ke("SMUI:select:selectedText");
  it(n, m, (k) => t(14, s = k));
  const C = Ke("SMUI:select:value");
  it(n, C, (k) => t(10, o = k)), Ve("SMUI:list:item:role", "option"), ot(v), zt(v);
  function v() {
    r && b && Rt(m, s = b.getPrimaryText(), s);
  }
  function T() {
    return b.getElement();
  }
  function y(k) {
    se[k ? "unshift" : "push"](() => {
      b = k, t(1, b);
    });
  }
  return n.$$set = (k) => {
    e = Y(Y({}, e), tt(k)), t(6, a = pe(e, l)), "use" in k && t(7, f = k.use), "value" in k && t(0, p = k.value), "$$scope" in k && t(13, c = k.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty & /*use*/
    128 && t(3, i = [d, ...f]), n.$$.dirty & /*value, $selectedValue*/
    1025 && t(2, r = p != null && p !== "" && o === p);
  }, [
    p,
    b,
    r,
    i,
    m,
    C,
    a,
    f,
    h,
    T,
    o,
    u,
    y,
    c
  ];
}
class Ld extends Re {
  constructor(e) {
    super(), Oe(this, e, Td, Sd, Ee, {
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
function Hl(n, e, t) {
  const i = n.slice();
  return i[11] = e[t], i[13] = t, i;
}
function Od(n) {
  let e = (
    /*d*/
    n[11].label + ""
  ), t;
  return {
    c() {
      t = at(e);
    },
    m(i, r) {
      V(i, t, r);
    },
    p(i, r) {
      r & /*data*/
      2 && e !== (e = /*d*/
      i[11].label + "") && At(t, e);
    },
    d(i) {
      i && B(t);
    }
  };
}
function Bl(n) {
  let e, t;
  return e = new Ld({
    props: {
      value: (
        /*d*/
        n[11].value
      ),
      $$slots: { default: [Od] },
      $$scope: { ctx: n }
    }
  }), e.$on(
    "click",
    /*setSelectedIndex*/
    n[5](
      /*index*/
      n[13]
    )
  ), {
    c() {
      ie(e.$$.fragment);
    },
    m(i, r) {
      ee(e, i, r), t = !0;
    },
    p(i, r) {
      const l = {};
      r & /*data*/
      2 && (l.value = /*d*/
      i[11].value), r & /*$$scope, data*/
      16386 && (l.$$scope = { dirty: r, ctx: i }), e.$set(l);
    },
    i(i) {
      t || (E(e.$$.fragment, i), t = !0);
    },
    o(i) {
      S(e.$$.fragment, i), t = !1;
    },
    d(i) {
      te(e, i);
    }
  };
}
function Rd(n) {
  let e, t, i = jt(
    /*data*/
    n[1]
  ), r = [];
  for (let a = 0; a < i.length; a += 1)
    r[a] = Bl(Hl(n, i, a));
  const l = (a) => S(r[a], 1, 1, () => {
    r[a] = null;
  });
  return {
    c() {
      for (let a = 0; a < r.length; a += 1)
        r[a].c();
      e = Xe();
    },
    m(a, s) {
      for (let o = 0; o < r.length; o += 1)
        r[o] && r[o].m(a, s);
      V(a, e, s), t = !0;
    },
    p(a, s) {
      if (s & /*data, setSelectedIndex*/
      34) {
        i = jt(
          /*data*/
          a[1]
        );
        let o;
        for (o = 0; o < i.length; o += 1) {
          const u = Hl(a, i, o);
          r[o] ? (r[o].p(u, s), E(r[o], 1)) : (r[o] = Bl(u), r[o].c(), E(r[o], 1), r[o].m(e.parentNode, e));
        }
        for (Pe(), o = i.length; o < r.length; o += 1)
          l(o);
        He();
      }
    },
    i(a) {
      if (!t) {
        for (let s = 0; s < i.length; s += 1)
          E(r[s]);
        t = !0;
      }
    },
    o(a) {
      r = r.filter(Boolean);
      for (let s = 0; s < r.length; s += 1)
        S(r[s]);
      t = !1;
    },
    d(a) {
      a && B(e), pr(r, a);
    }
  };
}
function kd(n) {
  let e, t, i;
  function r(a) {
    n[10](a);
  }
  let l = {
    disabled: (
      /*disabled*/
      n[4]
    ),
    key: Dd,
    label: (
      /*label*/
      n[2]
    ),
    style: "width: 100%;",
    required: (
      /*required*/
      n[3]
    ),
    $$slots: { default: [Rd] },
    $$scope: { ctx: n }
  };
  return (
    /*value*/
    n[0] !== void 0 && (l.value = /*value*/
    n[0]), e = new Ed({ props: l }), se.push(() => pt(e, "value", r)), {
      c() {
        ie(e.$$.fragment);
      },
      m(a, s) {
        ee(e, a, s), i = !0;
      },
      p(a, [s]) {
        const o = {};
        s & /*disabled*/
        16 && (o.disabled = /*disabled*/
        a[4]), s & /*label*/
        4 && (o.label = /*label*/
        a[2]), s & /*required*/
        8 && (o.required = /*required*/
        a[3]), s & /*$$scope, data*/
        16386 && (o.$$scope = { dirty: s, ctx: a }), !t && s & /*value*/
        1 && (t = !0, o.value = /*value*/
        a[0], mt(() => t = !1)), e.$set(o);
      },
      i(a) {
        i || (E(e.$$.fragment, a), i = !0);
      },
      o(a) {
        S(e.$$.fragment, a), i = !1;
      },
      d(a) {
        te(e, a);
      }
    }
  );
}
const Dd = (n) => `${n ?? ""}`;
function Md(n, e, t) {
  let { data: i = [] } = e, { placeholder: r = "" } = e, { label: l = "" } = e, { description: a = "" } = e, { value: s = "" } = e, { required: o = !1 } = e, { size: u = "sm" } = e, { selectedOptionIndex: c = -1 } = e, { disabled: d = !1 } = e;
  function f(p) {
    return () => t(6, c = p);
  }
  function h(p) {
    s = p, t(0, s);
  }
  return n.$$set = (p) => {
    "data" in p && t(1, i = p.data), "placeholder" in p && t(7, r = p.placeholder), "label" in p && t(2, l = p.label), "description" in p && t(8, a = p.description), "value" in p && t(0, s = p.value), "required" in p && t(3, o = p.required), "size" in p && t(9, u = p.size), "selectedOptionIndex" in p && t(6, c = p.selectedOptionIndex), "disabled" in p && t(4, d = p.disabled);
  }, [
    s,
    i,
    l,
    o,
    d,
    f,
    c,
    r,
    a,
    u,
    h
  ];
}
class fa extends Re {
  constructor(e) {
    super(), Oe(this, e, Md, kd, Ee, {
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
function Fd(n) {
  return n ? n.scrollHeight > n.offsetHeight : !1;
}
function Nd(n) {
  return n ? n.scrollTop === 0 : !1;
}
function Ud(n) {
  return n ? Math.ceil(n.scrollHeight - n.scrollTop) === n.clientHeight : !1;
}
function wd(n) {
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
var Pd = (
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
var lt = {
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
}, Wn = {
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
}, $i = {
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
var hi;
(function(n) {
  n.POLL_SCROLL_POS = "poll_scroll_position", n.POLL_LAYOUT_CHANGE = "poll_layout_change";
})(hi || (hi = {}));
var Hd = (
  /** @class */
  function(n) {
    ct(e, n);
    function e(t) {
      var i = n.call(this, ze(ze({}, e.defaultAdapter), t)) || this;
      return i.dialogOpen = !1, i.isFullscreen = !1, i.animationFrame = 0, i.animationTimer = 0, i.escapeKeyAction = Wn.CLOSE_ACTION, i.scrimClickAction = Wn.CLOSE_ACTION, i.autoStackButtons = !0, i.areButtonsStacked = !1, i.suppressDefaultPressSelector = Wn.SUPPRESS_DEFAULT_PRESS_SELECTOR, i.animFrame = new Pd(), i.contentScrollHandler = function() {
        i.handleScrollEvent();
      }, i.windowResizeHandler = function() {
        i.layout();
      }, i.windowOrientationChangeHandler = function() {
        i.layout();
      }, i;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return lt;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Wn;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return $i;
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
      this.adapter.hasClass(lt.STACKED) && this.setAutoStackButtons(!1), this.isFullscreen = this.adapter.hasClass(lt.FULLSCREEN);
    }, e.prototype.destroy = function() {
      this.animationTimer && (clearTimeout(this.animationTimer), this.handleAnimationTimerEnd()), this.isFullscreen && this.adapter.deregisterContentEventHandler("scroll", this.contentScrollHandler), this.animFrame.cancelAll(), this.adapter.deregisterWindowEventHandler("resize", this.windowResizeHandler), this.adapter.deregisterWindowEventHandler("orientationchange", this.windowOrientationChangeHandler);
    }, e.prototype.open = function(t) {
      var i = this;
      this.dialogOpen = !0, this.adapter.notifyOpening(), this.adapter.addClass(lt.OPENING), this.isFullscreen && this.adapter.registerContentEventHandler("scroll", this.contentScrollHandler), t && t.isAboveFullscreenDialog && this.adapter.addClass(lt.SCRIM_HIDDEN), this.adapter.registerWindowEventHandler("resize", this.windowResizeHandler), this.adapter.registerWindowEventHandler("orientationchange", this.windowOrientationChangeHandler), this.runNextAnimationFrame(function() {
        i.adapter.addClass(lt.OPEN), i.adapter.addBodyClass(lt.SCROLL_LOCK), i.layout(), i.animationTimer = setTimeout(function() {
          i.handleAnimationTimerEnd(), i.adapter.trapFocus(i.adapter.getInitialFocusEl()), i.adapter.notifyOpened();
        }, $i.DIALOG_ANIMATION_OPEN_TIME_MS);
      });
    }, e.prototype.close = function(t) {
      var i = this;
      t === void 0 && (t = ""), this.dialogOpen && (this.dialogOpen = !1, this.adapter.notifyClosing(t), this.adapter.addClass(lt.CLOSING), this.adapter.removeClass(lt.OPEN), this.adapter.removeBodyClass(lt.SCROLL_LOCK), this.isFullscreen && this.adapter.deregisterContentEventHandler("scroll", this.contentScrollHandler), this.adapter.deregisterWindowEventHandler("resize", this.windowResizeHandler), this.adapter.deregisterWindowEventHandler("orientationchange", this.windowOrientationChangeHandler), cancelAnimationFrame(this.animationFrame), this.animationFrame = 0, clearTimeout(this.animationTimer), this.animationTimer = setTimeout(function() {
        i.adapter.releaseFocus(), i.handleAnimationTimerEnd(), i.adapter.notifyClosed(t);
      }, $i.DIALOG_ANIMATION_CLOSE_TIME_MS));
    }, e.prototype.showSurfaceScrim = function() {
      var t = this;
      this.adapter.addClass(lt.SURFACE_SCRIM_SHOWING), this.runNextAnimationFrame(function() {
        t.adapter.addClass(lt.SURFACE_SCRIM_SHOWN);
      });
    }, e.prototype.hideSurfaceScrim = function() {
      this.adapter.removeClass(lt.SURFACE_SCRIM_SHOWN), this.adapter.addClass(lt.SURFACE_SCRIM_HIDING);
    }, e.prototype.handleSurfaceScrimTransitionEnd = function() {
      this.adapter.removeClass(lt.SURFACE_SCRIM_HIDING), this.adapter.removeClass(lt.SURFACE_SCRIM_SHOWING);
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
      this.animFrame.request(hi.POLL_LAYOUT_CHANGE, function() {
        t.layoutInternal();
      });
    }, e.prototype.handleClick = function(t) {
      var i = this.adapter.eventTargetMatches(t.target, Wn.SCRIM_SELECTOR);
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
          var l = t.composedPath ? t.composedPath()[0] : t.target, a = this.suppressDefaultPressSelector ? !this.adapter.eventTargetMatches(l, this.suppressDefaultPressSelector) : !0;
          i && a && this.adapter.clickDefaultButton();
        }
      }
    }, e.prototype.handleDocumentKeydown = function(t) {
      var i = t.key === "Escape" || t.keyCode === 27;
      i && this.escapeKeyAction !== "" && this.close(this.escapeKeyAction);
    }, e.prototype.handleScrollEvent = function() {
      var t = this;
      this.animFrame.request(hi.POLL_SCROLL_POS, function() {
        t.toggleScrollDividerHeader(), t.toggleScrollDividerFooter();
      });
    }, e.prototype.layoutInternal = function() {
      this.autoStackButtons && this.detectStackedButtons(), this.toggleScrollableClasses();
    }, e.prototype.handleAnimationTimerEnd = function() {
      this.animationTimer = 0, this.adapter.removeClass(lt.OPENING), this.adapter.removeClass(lt.CLOSING);
    }, e.prototype.runNextAnimationFrame = function(t) {
      var i = this;
      cancelAnimationFrame(this.animationFrame), this.animationFrame = requestAnimationFrame(function() {
        i.animationFrame = 0, clearTimeout(i.animationTimer), i.animationTimer = setTimeout(t, 0);
      });
    }, e.prototype.detectStackedButtons = function() {
      this.adapter.removeClass(lt.STACKED);
      var t = this.adapter.areButtonsStacked();
      t && this.adapter.addClass(lt.STACKED), t !== this.areButtonsStacked && (this.adapter.reverseButtons(), this.areButtonsStacked = t);
    }, e.prototype.toggleScrollableClasses = function() {
      this.adapter.removeClass(lt.SCROLLABLE), this.adapter.isContentScrollable() && (this.adapter.addClass(lt.SCROLLABLE), this.isFullscreen && (this.toggleScrollDividerHeader(), this.toggleScrollDividerFooter()));
    }, e.prototype.toggleScrollDividerHeader = function() {
      this.adapter.isScrollableContentAtTop() ? this.adapter.hasClass(lt.SCROLL_DIVIDER_HEADER) && this.adapter.removeClass(lt.SCROLL_DIVIDER_HEADER) : this.adapter.addClass(lt.SCROLL_DIVIDER_HEADER);
    }, e.prototype.toggleScrollDividerFooter = function() {
      this.adapter.isScrollableContentAtBottom() ? this.adapter.hasClass(lt.SCROLL_DIVIDER_FOOTER) && this.adapter.removeClass(lt.SCROLL_DIVIDER_FOOTER) : this.adapter.addClass(lt.SCROLL_DIVIDER_FOOTER);
    }, e;
  }(Tt)
);
const { document: Bd, window: Vl } = Zs, Vd = (n) => ({}), jl = (n) => ({});
function Gl(n) {
  let e, t, i;
  return {
    c() {
      e = ne("div"), U(e, "class", "mdc-dialog__surface-scrim");
    },
    m(r, l) {
      V(r, e, l), t || (i = oe(
        e,
        "transitionend",
        /*transitionend_handler*/
        n[32]
      ), t = !0);
    },
    p: $e,
    d(r) {
      r && B(e), t = !1, i();
    }
  };
}
function jd(n) {
  let e, t, i, r, l, a, s, o, u, c, d, f, h, p, b;
  const m = (
    /*#slots*/
    n[29].default
  ), C = Ie(
    m,
    n,
    /*$$scope*/
    n[28],
    null
  );
  let v = (
    /*fullscreen*/
    n[5] && Gl(n)
  ), T = [
    {
      class: a = le({
        [
          /*surface$class*/
          n[9]
        ]: !0,
        "mdc-dialog__surface": !0
      })
    },
    { role: "alertdialog" },
    { "aria-modal": "true" },
    Be(
      /*$$restProps*/
      n[19],
      "surface$"
    )
  ], y = {};
  for (let g = 0; g < T.length; g += 1)
    y = Y(y, T[g]);
  let k = [
    {
      class: s = le({
        [
          /*container$class*/
          n[8]
        ]: !0,
        "mdc-dialog__container": !0
      })
    },
    Be(
      /*$$restProps*/
      n[19],
      "container$"
    )
  ], R = {};
  for (let g = 0; g < k.length; g += 1)
    R = Y(R, k[g]);
  let _ = [
    {
      class: c = le({
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
    Gt(
      /*$$restProps*/
      n[19],
      ["container$", "surface$"]
    )
  ], A = {};
  for (let g = 0; g < _.length; g += 1)
    A = Y(A, _[g]);
  const w = (
    /*#slots*/
    n[29].over
  ), I = Ie(
    w,
    n,
    /*$$scope*/
    n[28],
    jl
  );
  return {
    c() {
      e = ae(), t = ne("div"), i = ne("div"), r = ne("div"), C && C.c(), l = ae(), v && v.c(), o = ae(), u = ne("div"), f = ae(), I && I.c(), ce(r, y), ce(i, R), U(u, "class", "mdc-dialog__scrim"), ce(t, A);
    },
    m(g, D) {
      V(g, e, D), V(g, t, D), J(t, i), J(i, r), C && C.m(r, null), J(r, l), v && v.m(r, null), J(t, o), J(t, u), n[33](t), V(g, f, D), I && I.m(g, D), h = !0, p || (b = [
        oe(
          Vl,
          "resize",
          /*resize_handler*/
          n[30]
        ),
        oe(
          Vl,
          "orientationchange",
          /*orientationchange_handler*/
          n[31]
        ),
        oe(Bd.body, "keydown", function() {
          me(
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
        fe(d = Qe.call(
          null,
          t,
          /*use*/
          n[1]
        )),
        fe(
          /*forwardEvents*/
          n[13].call(null, t)
        ),
        oe(
          t,
          "SMUIDialog:opening",
          /*handleDialogOpening*/
          n[16]
        ),
        oe(
          t,
          "SMUIDialog:opened",
          /*handleDialogOpened*/
          n[17]
        ),
        oe(
          t,
          "SMUIDialog:closed",
          /*handleDialogClosed*/
          n[18]
        ),
        oe(t, "click", function() {
          me(
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
        oe(t, "keydown", function() {
          me(
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
      ], p = !0);
    },
    p(g, D) {
      n = g, C && C.p && (!h || D[0] & /*$$scope*/
      268435456) && Ce(
        C,
        m,
        n,
        /*$$scope*/
        n[28],
        h ? ve(
          m,
          /*$$scope*/
          n[28],
          D,
          null
        ) : Ae(
          /*$$scope*/
          n[28]
        ),
        null
      ), /*fullscreen*/
      n[5] ? v ? v.p(n, D) : (v = Gl(n), v.c(), v.m(r, null)) : v && (v.d(1), v = null), ce(r, y = he(T, [
        (!h || D[0] & /*surface$class*/
        512 && a !== (a = le({
          [
            /*surface$class*/
            n[9]
          ]: !0,
          "mdc-dialog__surface": !0
        }))) && { class: a },
        { role: "alertdialog" },
        { "aria-modal": "true" },
        D[0] & /*$$restProps*/
        524288 && Be(
          /*$$restProps*/
          n[19],
          "surface$"
        )
      ])), ce(i, R = he(k, [
        (!h || D[0] & /*container$class*/
        256 && s !== (s = le({
          [
            /*container$class*/
            n[8]
          ]: !0,
          "mdc-dialog__container": !0
        }))) && { class: s },
        D[0] & /*$$restProps*/
        524288 && Be(
          /*$$restProps*/
          n[19],
          "container$"
        )
      ])), ce(t, A = he(_, [
        (!h || D[0] & /*className, autoStackButtons, fullscreen, sheet, noContentPadding, selection, internalClasses*/
        4348 && c !== (c = le({
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
        }))) && { class: c },
        { role: "alertdialog" },
        { "aria-modal": "true" },
        D[0] & /*$$restProps*/
        524288 && Gt(
          /*$$restProps*/
          n[19],
          ["container$", "surface$"]
        )
      ])), d && me(d.update) && D[0] & /*use*/
      2 && d.update.call(
        null,
        /*use*/
        n[1]
      ), I && I.p && (!h || D[0] & /*$$scope*/
      268435456) && Ce(
        I,
        w,
        n,
        /*$$scope*/
        n[28],
        h ? ve(
          w,
          /*$$scope*/
          n[28],
          D,
          Vd
        ) : Ae(
          /*$$scope*/
          n[28]
        ),
        jl
      );
    },
    i(g) {
      h || (E(C, g), E(I, g), h = !0);
    },
    o(g) {
      S(C, g), S(I, g), h = !1;
    },
    d(g) {
      g && (B(e), B(t), B(f)), C && C.d(g), v && v.d(), n[33](null), I && I.d(g), p = !1, Ze(b);
    }
  };
}
function Gd(n, e, t) {
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
  let r = pe(e, i), l, a, { $$slots: s = {}, $$scope: o } = e;
  var u;
  const { FocusTrap: c } = Ao, { closest: d, matches: f } = ei, h = nt(Je());
  let { use: p = [] } = e, { class: b = "" } = e, { open: m = !1 } = e, { selection: C = !1 } = e, { escapeKeyAction: v = "close" } = e, { scrimClickAction: T = "close" } = e, { autoStackButtons: y = !0 } = e, { fullscreen: k = !1 } = e, { sheet: R = !1 } = e, { noContentPadding: _ = !1 } = e, { container$class: A = "" } = e, { surface$class: w = "" } = e, I, g, D = {}, O, N = Lt(!1);
  it(n, N, (M) => t(37, a = M));
  let W = Ke("SMUI:dialog:aboveFullscreen"), G = (u = Ke("SMUI:dialog:aboveFullscreenShown")) !== null && u !== void 0 ? u : Lt(!1);
  it(n, G, (M) => t(27, l = M));
  let z = Ke("SMUI:addLayoutListener"), F, L = [], j = (M) => (L.push(M), () => {
    const $ = L.indexOf(M);
    $ >= 0 && L.splice($, 1);
  });
  Ve("SMUI:dialog:actions:reversed", N), Ve("SMUI:addLayoutListener", j), Ve("SMUI:dialog:selection", C), Ve("SMUI:dialog:aboveFullscreen", W || k), Ve("SMUI:dialog:aboveFullscreenShown", G), R && Ve("SMUI:icon-button:context", "dialog:sheet"), z && (F = z(ft));
  let ue = l;
  ot(() => {
    var M;
    return O = new c(
      I,
      {
        initialFocusEl: (M = ye()) !== null && M !== void 0 ? M : void 0
      }
    ), t(10, g = new Hd({
      addBodyClass: ($) => document.body.classList.add($),
      addClass: be,
      areButtonsStacked: () => wd(K()),
      clickDefaultButton: () => {
        const $ = x();
        $ && $.click();
      },
      eventTargetMatches: ($, Q) => $ ? f($, Q) : !1,
      getActionFromEvent: ($) => {
        if (!$.target)
          return "";
        const Q = d($.target, "[data-mdc-dialog-action]");
        return Q && Q.getAttribute("data-mdc-dialog-action");
      },
      getInitialFocusEl: ye,
      hasClass: ke,
      isContentScrollable: () => Fd(_e()),
      notifyClosed: ($) => {
        t(0, m = !1), ge(X(), "SMUIDialog:closed", $ ? { action: $ } : {}, void 0, !0);
      },
      notifyClosing: ($) => ge(X(), "SMUIDialog:closing", $ ? { action: $ } : {}, void 0, !0),
      notifyOpened: () => ge(X(), "SMUIDialog:opened", {}, void 0, !0),
      notifyOpening: () => ge(X(), "SMUIDialog:opening", {}, void 0, !0),
      releaseFocus: () => O.releaseFocus(),
      removeBodyClass: ($) => document.body.classList.remove($),
      removeClass: Ye,
      reverseButtons: () => {
        Rt(N, a = !0, a);
      },
      trapFocus: () => O.trapFocus(),
      registerContentEventHandler: ($, Q) => {
        const je = _e();
        je instanceof HTMLElement && je.addEventListener($, Q);
      },
      deregisterContentEventHandler: ($, Q) => {
        const je = _e();
        je instanceof HTMLElement && je.removeEventListener($, Q);
      },
      isScrollableContentAtTop: () => Nd(_e()),
      isScrollableContentAtBottom: () => Ud(_e()),
      registerWindowEventHandler: ($, Q) => {
        window.addEventListener($, Q);
      },
      deregisterWindowEventHandler: ($, Q) => {
        window.removeEventListener($, Q);
      }
    })), g.init(), () => {
      g.destroy();
    };
  }), zt(() => {
    F && F();
  });
  function ke(M) {
    return M in D ? D[M] : X().classList.contains(M);
  }
  function be(M) {
    D[M] || t(12, D[M] = !0, D);
  }
  function Ye(M) {
    (!(M in D) || D[M]) && t(12, D[M] = !1, D);
  }
  function K() {
    return [].slice.call(I.querySelectorAll(".mdc-dialog__button"));
  }
  function x() {
    return I.querySelector("[data-mdc-dialog-button-default]");
  }
  function _e() {
    return I.querySelector(".mdc-dialog__content");
  }
  function ye() {
    return I.querySelector("[data-mdc-dialog-initial-focus]");
  }
  function Ne() {
    W && Rt(G, l = !0, l), requestAnimationFrame(() => {
      L.forEach((M) => M());
    });
  }
  function re() {
    L.forEach((M) => M());
  }
  function q() {
    W && Rt(G, l = !1, l);
  }
  function We() {
    return m;
  }
  function Ge(M) {
    t(0, m = M);
  }
  function ft() {
    return g.layout();
  }
  function X() {
    return I;
  }
  const Te = () => m && g && g.layout(), qe = () => m && g && g.layout(), Ue = () => g && g.handleSurfaceScrimTransitionEnd();
  function yt(M) {
    se[M ? "unshift" : "push"](() => {
      I = M, t(11, I);
    });
  }
  return n.$$set = (M) => {
    e = Y(Y({}, e), tt(M)), t(19, r = pe(e, i)), "use" in M && t(1, p = M.use), "class" in M && t(2, b = M.class), "open" in M && t(0, m = M.open), "selection" in M && t(3, C = M.selection), "escapeKeyAction" in M && t(20, v = M.escapeKeyAction), "scrimClickAction" in M && t(21, T = M.scrimClickAction), "autoStackButtons" in M && t(4, y = M.autoStackButtons), "fullscreen" in M && t(5, k = M.fullscreen), "sheet" in M && t(6, R = M.sheet), "noContentPadding" in M && t(7, _ = M.noContentPadding), "container$class" in M && t(8, A = M.container$class), "surface$class" in M && t(9, w = M.surface$class), "$$scope" in M && t(28, o = M.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty[0] & /*instance, escapeKeyAction*/
    1049600 && g && g.getEscapeKeyAction() !== v && g.setEscapeKeyAction(v), n.$$.dirty[0] & /*instance, scrimClickAction*/
    2098176 && g && g.getScrimClickAction() !== T && g.setScrimClickAction(T), n.$$.dirty[0] & /*instance, autoStackButtons*/
    1040 && g && g.getAutoStackButtons() !== y && g.setAutoStackButtons(y), n.$$.dirty[0] & /*autoStackButtons*/
    16 && (y || Rt(N, a = !0, a)), n.$$.dirty[0] & /*instance, open*/
    1025 && g && g.isOpen() !== m && (m ? g.open({
      isAboveFullscreenDialog: !!W
    }) : g.close()), n.$$.dirty[0] & /*fullscreen, instance, previousAboveFullscreenShown, $aboveFullscreenShown*/
    201327648 && k && g && ue !== l && (t(26, ue = l), l ? g.showSurfaceScrim() : g.hideSurfaceScrim());
  }, [
    m,
    p,
    b,
    C,
    y,
    k,
    R,
    _,
    A,
    w,
    g,
    I,
    D,
    h,
    N,
    G,
    Ne,
    re,
    q,
    r,
    v,
    T,
    We,
    Ge,
    ft,
    X,
    ue,
    l,
    o,
    s,
    Te,
    qe,
    Ue,
    yt
  ];
}
class qd extends Re {
  constructor(e) {
    super(), Oe(
      this,
      e,
      Gd,
      jd,
      Ee,
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
Et({
  class: "mdc-dialog__header",
  tag: "div",
  contexts: {
    "SMUI:icon-button:context": "dialog:header"
  }
});
Et({
  class: "mdc-dialog__title",
  tag: "h2"
});
const Kd = Et({
  class: "mdc-dialog__content",
  tag: "div"
}), Wd = Et({
  class: "mdc-dialog__actions",
  tag: "div",
  classMap: {
    "smui-dialog__actions--reversed": "SMUI:dialog:actions:reversed"
  },
  contexts: {
    "SMUI:button:context": "dialog:action"
  }
}), zd = (n) => ({}), ql = (n) => ({}), Yd = (n) => ({}), Kl = (n) => ({}), Xd = (n) => ({}), Wl = (n) => ({});
function Zd(n) {
  let e;
  const t = (
    /*#slots*/
    n[1].content
  ), i = Ie(
    t,
    n,
    /*$$scope*/
    n[4],
    Kl
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
      16) && Ce(
        i,
        t,
        r,
        /*$$scope*/
        r[4],
        e ? ve(
          t,
          /*$$scope*/
          r[4],
          l,
          Yd
        ) : Ae(
          /*$$scope*/
          r[4]
        ),
        Kl
      );
    },
    i(r) {
      e || (E(i, r), e = !0);
    },
    o(r) {
      S(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function Qd(n) {
  let e;
  const t = (
    /*#slots*/
    n[1].actions
  ), i = Ie(
    t,
    n,
    /*$$scope*/
    n[4],
    ql
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
      16) && Ce(
        i,
        t,
        r,
        /*$$scope*/
        r[4],
        e ? ve(
          t,
          /*$$scope*/
          r[4],
          l,
          zd
        ) : Ae(
          /*$$scope*/
          r[4]
        ),
        ql
      );
    },
    i(r) {
      e || (E(i, r), e = !0);
    },
    o(r) {
      S(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function Jd(n) {
  let e, t, i, r, l, a;
  const s = (
    /*#slots*/
    n[1].title
  ), o = Ie(
    s,
    n,
    /*$$scope*/
    n[4],
    Wl
  );
  return i = new Kd({
    props: {
      id: "large-scroll-content",
      $$slots: { default: [Zd] },
      $$scope: { ctx: n }
    }
  }), l = new Wd({
    props: {
      $$slots: { default: [Qd] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      e = ne("div"), o && o.c(), t = ae(), ie(i.$$.fragment), r = ae(), ie(l.$$.fragment), U(e, "class", "dialog-title svelte-4sevka");
    },
    m(u, c) {
      V(u, e, c), o && o.m(e, null), V(u, t, c), ee(i, u, c), V(u, r, c), ee(l, u, c), a = !0;
    },
    p(u, c) {
      o && o.p && (!a || c & /*$$scope*/
      16) && Ce(
        o,
        s,
        u,
        /*$$scope*/
        u[4],
        a ? ve(
          s,
          /*$$scope*/
          u[4],
          c,
          Xd
        ) : Ae(
          /*$$scope*/
          u[4]
        ),
        Wl
      );
      const d = {};
      c & /*$$scope*/
      16 && (d.$$scope = { dirty: c, ctx: u }), i.$set(d);
      const f = {};
      c & /*$$scope*/
      16 && (f.$$scope = { dirty: c, ctx: u }), l.$set(f);
    },
    i(u) {
      a || (E(o, u), E(i.$$.fragment, u), E(l.$$.fragment, u), a = !0);
    },
    o(u) {
      S(o, u), S(i.$$.fragment, u), S(l.$$.fragment, u), a = !1;
    },
    d(u) {
      u && (B(e), B(t), B(r)), o && o.d(u), te(i, u), te(l, u);
    }
  };
}
function xd(n) {
  let e, t, i;
  function r(a) {
    n[2](a);
  }
  let l = {
    "aria-labelledby": "large-scroll-title",
    "aria-describedby": "large-scroll-content",
    surface$style: "width: 1080px; max-width: calc(100vw - 32px);",
    $$slots: { default: [Jd] },
    $$scope: { ctx: n }
  };
  return (
    /*open*/
    n[0] !== void 0 && (l.open = /*open*/
    n[0]), e = new qd({ props: l }), se.push(() => pt(e, "open", r)), e.$on(
      "SMUIDialog:closed",
      /*SMUIDialog_closed_handler*/
      n[3]
    ), {
      c() {
        ie(e.$$.fragment);
      },
      m(a, s) {
        ee(e, a, s), i = !0;
      },
      p(a, [s]) {
        const o = {};
        s & /*$$scope*/
        16 && (o.$$scope = { dirty: s, ctx: a }), !t && s & /*open*/
        1 && (t = !0, o.open = /*open*/
        a[0], mt(() => t = !1)), e.$set(o);
      },
      i(a) {
        i || (E(e.$$.fragment, a), i = !0);
      },
      o(a) {
        S(e.$$.fragment, a), i = !1;
      },
      d(a) {
        te(e, a);
      }
    }
  );
}
function $d(n, e, t) {
  let { $$slots: i = {}, $$scope: r } = e, { open: l = !1 } = e;
  function a(o) {
    l = o, t(0, l);
  }
  const s = (o) => t(0, l = !1);
  return n.$$set = (o) => {
    "open" in o && t(0, l = o.open), "$$scope" in o && t(4, r = o.$$scope);
  }, [l, i, a, s, r];
}
class ef extends Re {
  constructor(e) {
    super(), Oe(this, e, $d, xd, Ee, { open: 0 });
  }
}
function tf(n) {
  let e, t, i, r, l, a;
  const s = (
    /*#slots*/
    n[12].default
  ), o = Ie(
    s,
    n,
    /*$$scope*/
    n[11],
    null
  );
  let u = [
    {
      class: t = le({
        [
          /*className*/
          n[1]
        ]: !0,
        "smui-paper": !0,
        "smui-paper--raised": (
          /*variant*/
          n[2] === "raised"
        ),
        "smui-paper--unelevated": (
          /*variant*/
          n[2] === "unelevated"
        ),
        "smui-paper--outlined": (
          /*variant*/
          n[2] === "outlined"
        ),
        ["smui-paper--elevation-z" + /*elevation*/
        n[5]]: (
          /*elevation*/
          n[5] !== 0 && /*variant*/
          n[2] === "raised"
        ),
        "smui-paper--rounded": !/*square*/
        n[3],
        ["smui-paper--color-" + /*color*/
        n[4]]: (
          /*color*/
          n[4] !== "default"
        ),
        "smui-paper-transition": (
          /*transition*/
          n[6]
        )
      })
    },
    /*$$restProps*/
    n[9]
  ], c = {};
  for (let d = 0; d < u.length; d += 1)
    c = Y(c, u[d]);
  return {
    c() {
      e = ne("div"), o && o.c(), ce(e, c);
    },
    m(d, f) {
      V(d, e, f), o && o.m(e, null), n[13](e), r = !0, l || (a = [
        fe(i = Qe.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        fe(
          /*forwardEvents*/
          n[8].call(null, e)
        )
      ], l = !0);
    },
    p(d, [f]) {
      o && o.p && (!r || f & /*$$scope*/
      2048) && Ce(
        o,
        s,
        d,
        /*$$scope*/
        d[11],
        r ? ve(
          s,
          /*$$scope*/
          d[11],
          f,
          null
        ) : Ae(
          /*$$scope*/
          d[11]
        ),
        null
      ), ce(e, c = he(u, [
        (!r || f & /*className, variant, elevation, square, color, transition*/
        126 && t !== (t = le({
          [
            /*className*/
            d[1]
          ]: !0,
          "smui-paper": !0,
          "smui-paper--raised": (
            /*variant*/
            d[2] === "raised"
          ),
          "smui-paper--unelevated": (
            /*variant*/
            d[2] === "unelevated"
          ),
          "smui-paper--outlined": (
            /*variant*/
            d[2] === "outlined"
          ),
          ["smui-paper--elevation-z" + /*elevation*/
          d[5]]: (
            /*elevation*/
            d[5] !== 0 && /*variant*/
            d[2] === "raised"
          ),
          "smui-paper--rounded": !/*square*/
          d[3],
          ["smui-paper--color-" + /*color*/
          d[4]]: (
            /*color*/
            d[4] !== "default"
          ),
          "smui-paper-transition": (
            /*transition*/
            d[6]
          )
        }))) && { class: t },
        f & /*$$restProps*/
        512 && /*$$restProps*/
        d[9]
      ])), i && me(i.update) && f & /*use*/
      1 && i.update.call(
        null,
        /*use*/
        d[0]
      );
    },
    i(d) {
      r || (E(o, d), r = !0);
    },
    o(d) {
      S(o, d), r = !1;
    },
    d(d) {
      d && B(e), o && o.d(d), n[13](null), l = !1, Ze(a);
    }
  };
}
function nf(n, e, t) {
  const i = ["use", "class", "variant", "square", "color", "elevation", "transition", "getElement"];
  let r = pe(e, i), { $$slots: l = {}, $$scope: a } = e;
  const s = nt(Je());
  let { use: o = [] } = e, { class: u = "" } = e, { variant: c = "raised" } = e, { square: d = !1 } = e, { color: f = "default" } = e, { elevation: h = 1 } = e, { transition: p = !1 } = e, b;
  function m() {
    return b;
  }
  function C(v) {
    se[v ? "unshift" : "push"](() => {
      b = v, t(7, b);
    });
  }
  return n.$$set = (v) => {
    e = Y(Y({}, e), tt(v)), t(9, r = pe(e, i)), "use" in v && t(0, o = v.use), "class" in v && t(1, u = v.class), "variant" in v && t(2, c = v.variant), "square" in v && t(3, d = v.square), "color" in v && t(4, f = v.color), "elevation" in v && t(5, h = v.elevation), "transition" in v && t(6, p = v.transition), "$$scope" in v && t(11, a = v.$$scope);
  }, [
    o,
    u,
    c,
    d,
    f,
    h,
    p,
    b,
    s,
    r,
    m,
    a,
    l,
    C
  ];
}
class rf extends Re {
  constructor(e) {
    super(), Oe(this, e, nf, tf, Ee, {
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
Et({
  class: "smui-paper__content",
  tag: "div"
});
Et({
  class: "smui-paper__title",
  tag: "h5"
});
Et({
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
var dr;
(function(n) {
  n.POLITE = "polite", n.ASSERTIVE = "assertive";
})(dr || (dr = {}));
var lf = "data-mdc-dom-announce";
function sf(n, e) {
  af.getInstance().say(n, e);
}
var af = (
  /** @class */
  function() {
    function n() {
      this.liveRegions = /* @__PURE__ */ new Map();
    }
    return n.getInstance = function() {
      return n.instance || (n.instance = new n()), n.instance;
    }, n.prototype.say = function(e, t) {
      var i, r, l = (i = t == null ? void 0 : t.priority) !== null && i !== void 0 ? i : dr.POLITE, a = (r = t == null ? void 0 : t.ownerDocument) !== null && r !== void 0 ? r : document, s = this.getLiveRegion(l, a);
      s.textContent = "", setTimeout(function() {
        s.textContent = e, a.addEventListener("click", o);
      }, 1);
      function o() {
        s.textContent = "", a.removeEventListener("click", o);
      }
    }, n.prototype.getLiveRegion = function(e, t) {
      var i = this.liveRegions.get(t);
      i || (i = /* @__PURE__ */ new Map(), this.liveRegions.set(t, i));
      var r = i.get(e);
      if (r && t.body.contains(r))
        return r;
      var l = this.createLiveRegion(e, t);
      return i.set(e, l), l;
    }, n.prototype.createLiveRegion = function(e, t) {
      var i = t.createElement("div");
      return i.style.position = "absolute", i.style.top = "-9999px", i.style.left = "-9999px", i.style.height = "1px", i.style.overflow = "hidden", i.setAttribute("aria-atomic", "true"), i.setAttribute("aria-live", e), i.setAttribute(lf, "true"), t.body.appendChild(i), i;
    }, n;
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
var dn;
(function(n) {
  n[n.UNSPECIFIED = 0] = "UNSPECIFIED", n[n.CLICK = 1] = "CLICK", n[n.BACKSPACE_KEY = 2] = "BACKSPACE_KEY", n[n.DELETE_KEY = 3] = "DELETE_KEY", n[n.SPACEBAR_KEY = 4] = "SPACEBAR_KEY", n[n.ENTER_KEY = 5] = "ENTER_KEY";
})(dn || (dn = {}));
var Wt = {
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
var ha = (
  /** @class */
  function(n) {
    ct(e, n);
    function e(t) {
      return n.call(this, ze(ze({}, e.defaultAdapter), t)) || this;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return Wt;
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
    }), e.prototype.handleClick = function(t) {
      t.stopPropagation(), this.adapter.notifyInteraction(dn.CLICK);
    }, e.prototype.handleKeydown = function(t) {
      t.stopPropagation();
      var i = _t(t);
      if (this.shouldNotifyInteractionFromKey(i)) {
        var r = this.getTriggerFromKey(i);
        this.adapter.notifyInteraction(r);
        return;
      }
      if (Eo(t)) {
        this.adapter.notifyNavigation(i);
        return;
      }
    }, e.prototype.removeFocus = function() {
      this.adapter.setAttribute(Wt.TAB_INDEX, "-1");
    }, e.prototype.focus = function() {
      this.adapter.setAttribute(Wt.TAB_INDEX, "0"), this.adapter.focus();
    }, e.prototype.isNavigable = function() {
      return this.adapter.getAttribute(Wt.ARIA_HIDDEN) !== "true";
    }, e.prototype.shouldNotifyInteractionFromKey = function(t) {
      var i = t === we.ENTER || t === we.SPACEBAR, r = t === we.BACKSPACE || t === we.DELETE;
      return i || r;
    }, e.prototype.getTriggerFromKey = function(t) {
      return t === we.SPACEBAR ? dn.SPACEBAR_KEY : t === we.ENTER ? dn.ENTER_KEY : t === we.DELETE ? dn.DELETE_KEY : t === we.BACKSPACE ? dn.BACKSPACE_KEY : dn.UNSPECIFIED;
    }, e;
  }(Tt)
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
var ma = (
  /** @class */
  function(n) {
    ct(e, n);
    function e() {
      return n !== null && n.apply(this, arguments) || this;
    }
    return Object.defineProperty(e.prototype, "ripple", {
      get: function() {
        return this.rippleSurface;
      },
      enumerable: !1,
      configurable: !0
    }), e.attachTo = function(t) {
      return new e(t);
    }, e.prototype.initialize = function(t) {
      t === void 0 && (t = function(r, l) {
        return new fi(r, l);
      });
      var i = fi.createAdapter(this);
      this.rippleSurface = t(this.root, new gi(i));
    }, e.prototype.initialSyncWithDOM = function() {
      var t = this;
      this.handleClick = function(i) {
        t.foundation.handleClick(i);
      }, this.handleKeydown = function(i) {
        t.foundation.handleKeydown(i);
      }, this.listen("click", this.handleClick), this.listen("keydown", this.handleKeydown);
    }, e.prototype.destroy = function() {
      this.rippleSurface.destroy(), this.unlisten("click", this.handleClick), this.unlisten("keydown", this.handleKeydown), n.prototype.destroy.call(this);
    }, e.prototype.getDefaultFoundation = function() {
      var t = this, i = {
        focus: function() {
          t.root.focus();
        },
        getAttribute: function(r) {
          return t.root.getAttribute(r);
        },
        notifyInteraction: function(r) {
          return t.emit(
            Wt.INTERACTION_EVENT,
            { trigger: r },
            !0
            /* shouldBubble */
          );
        },
        notifyNavigation: function(r) {
          t.emit(
            Wt.NAVIGATION_EVENT,
            { key: r },
            !0
            /* shouldBubble */
          );
        },
        setAttribute: function(r, l) {
          t.root.setAttribute(r, l);
        }
      };
      return new ha(i);
    }, e.prototype.isNavigable = function() {
      return this.foundation.isNavigable();
    }, e.prototype.focus = function() {
      this.foundation.focus();
    }, e.prototype.removeFocus = function() {
      this.foundation.removeFocus();
    }, e;
  }(pi)
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
var Xt;
(function(n) {
  n.LEFT = "left", n.RIGHT = "right";
})(Xt || (Xt = {}));
var ln;
(function(n) {
  n.PRIMARY = "primary", n.TRAILING = "trailing", n.NONE = "none";
})(ln || (ln = {}));
var Fe = {
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
}, It = {
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
}, qt = /* @__PURE__ */ new Set();
qt.add(Fe.ARROW_LEFT_KEY);
qt.add(Fe.ARROW_RIGHT_KEY);
qt.add(Fe.ARROW_DOWN_KEY);
qt.add(Fe.ARROW_UP_KEY);
qt.add(Fe.END_KEY);
qt.add(Fe.HOME_KEY);
qt.add(Fe.IE_ARROW_LEFT_KEY);
qt.add(Fe.IE_ARROW_RIGHT_KEY);
qt.add(Fe.IE_ARROW_DOWN_KEY);
qt.add(Fe.IE_ARROW_UP_KEY);
var hn = /* @__PURE__ */ new Set();
hn.add(Fe.ARROW_UP_KEY);
hn.add(Fe.ARROW_DOWN_KEY);
hn.add(Fe.HOME_KEY);
hn.add(Fe.END_KEY);
hn.add(Fe.IE_ARROW_UP_KEY);
hn.add(Fe.IE_ARROW_DOWN_KEY);
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
var zl = {
  bottom: 0,
  height: 0,
  left: 0,
  right: 0,
  top: 0,
  width: 0
}, Fn;
(function(n) {
  n[n.SHOULD_FOCUS = 0] = "SHOULD_FOCUS", n[n.SHOULD_NOT_FOCUS = 1] = "SHOULD_NOT_FOCUS";
})(Fn || (Fn = {}));
var Cr = (
  /** @class */
  function(n) {
    ct(e, n);
    function e(t) {
      var i = n.call(this, ze(ze({}, e.defaultAdapter), t)) || this;
      return i.shouldRemoveOnTrailingIconClick = !0, i.shouldFocusPrimaryActionOnClick = !0, i;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return Fe;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return It;
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
            return zl;
          },
          getComputedStyleValue: function() {
            return "";
          },
          getRootBoundingClientRect: function() {
            return zl;
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
      return this.adapter.hasClass(It.SELECTED);
    }, e.prototype.isEditable = function() {
      return this.adapter.hasClass(It.EDITABLE);
    }, e.prototype.isEditing = function() {
      return this.adapter.hasClass(It.EDITING);
    }, e.prototype.setSelected = function(t) {
      this.setSelectedImpl(t), this.notifySelection(t);
    }, e.prototype.setSelectedFromChipSet = function(t, i) {
      this.setSelectedImpl(t), i && this.notifyIgnoredSelection(t);
    }, e.prototype.getShouldRemoveOnTrailingIconClick = function() {
      return this.shouldRemoveOnTrailingIconClick;
    }, e.prototype.setShouldRemoveOnTrailingIconClick = function(t) {
      this.shouldRemoveOnTrailingIconClick = t;
    }, e.prototype.setShouldFocusPrimaryActionOnClick = function(t) {
      this.shouldFocusPrimaryActionOnClick = t;
    }, e.prototype.getDimensions = function() {
      var t = this, i = function() {
        return t.adapter.getRootBoundingClientRect();
      }, r = function() {
        return t.adapter.getCheckmarkBoundingClientRect();
      };
      if (!this.adapter.hasLeadingIcon()) {
        var l = r();
        if (l) {
          var a = i();
          return {
            bottom: a.bottom,
            height: a.height,
            left: a.left,
            right: a.right,
            top: a.top,
            width: a.width + l.height
          };
        }
      }
      return i();
    }, e.prototype.beginExit = function() {
      this.adapter.addClass(It.CHIP_EXIT);
    }, e.prototype.handleClick = function() {
      this.adapter.notifyInteraction(), this.setPrimaryActionFocusable(this.getFocusBehavior());
    }, e.prototype.handleDoubleClick = function() {
      this.isEditable() && this.startEditing();
    }, e.prototype.handleTransitionEnd = function(t) {
      var i = this, r = this.adapter.eventTargetHasClass(t.target, It.CHIP_EXIT), l = t.propertyName === "width", a = t.propertyName === "opacity";
      if (r && a) {
        var s = this.adapter.getComputedStyleValue("width");
        requestAnimationFrame(function() {
          i.adapter.setStyleProperty("width", s), i.adapter.setStyleProperty("padding", "0"), i.adapter.setStyleProperty("margin", "0"), requestAnimationFrame(function() {
            i.adapter.setStyleProperty("width", "0");
          });
        });
        return;
      }
      if (r && l) {
        this.removeFocus();
        var o = this.adapter.getAttribute(Fe.REMOVED_ANNOUNCEMENT_ATTRIBUTE);
        this.adapter.notifyRemoval(o);
      }
      if (a) {
        var u = this.adapter.eventTargetHasClass(t.target, It.LEADING_ICON) && this.adapter.hasClass(It.SELECTED), c = this.adapter.eventTargetHasClass(t.target, It.CHECKMARK) && !this.adapter.hasClass(It.SELECTED);
        if (u) {
          this.adapter.addClassToLeadingIcon(It.HIDDEN_LEADING_ICON);
          return;
        }
        if (c) {
          this.adapter.removeClassFromLeadingIcon(It.HIDDEN_LEADING_ICON);
          return;
        }
      }
    }, e.prototype.handleFocusIn = function(t) {
      this.eventFromPrimaryAction(t) && this.adapter.addClass(It.PRIMARY_ACTION_FOCUSED);
    }, e.prototype.handleFocusOut = function(t) {
      this.eventFromPrimaryAction(t) && (this.isEditing() && this.finishEditing(), this.adapter.removeClass(It.PRIMARY_ACTION_FOCUSED));
    }, e.prototype.handleTrailingActionInteraction = function() {
      this.adapter.notifyTrailingIconInteraction(), this.removeChip();
    }, e.prototype.handleKeydown = function(t) {
      if (this.isEditing()) {
        this.shouldFinishEditing(t) && (t.preventDefault(), this.finishEditing());
        return;
      }
      if (this.isEditable() && this.shouldStartEditing(t) && (t.preventDefault(), this.startEditing()), this.shouldNotifyInteraction(t)) {
        this.adapter.notifyInteraction(), this.setPrimaryActionFocusable(this.getFocusBehavior());
        return;
      }
      if (this.isDeleteAction(t)) {
        t.preventDefault(), this.removeChip();
        return;
      }
      qt.has(t.key) && (t.preventDefault(), this.focusNextAction(t.key, ln.PRIMARY));
    }, e.prototype.handleTrailingActionNavigation = function(t) {
      this.focusNextAction(t.detail.key, ln.TRAILING);
    }, e.prototype.removeFocus = function() {
      this.adapter.setPrimaryActionAttr(Fe.TAB_INDEX, "-1"), this.adapter.removeTrailingActionFocus();
    }, e.prototype.focusPrimaryAction = function() {
      this.setPrimaryActionFocusable(Fn.SHOULD_FOCUS);
    }, e.prototype.focusTrailingAction = function() {
      var t = this.adapter.isTrailingActionNavigable();
      if (t) {
        this.adapter.setPrimaryActionAttr(Fe.TAB_INDEX, "-1"), this.adapter.focusTrailingAction();
        return;
      }
      this.focusPrimaryAction();
    }, e.prototype.setPrimaryActionFocusable = function(t) {
      this.adapter.setPrimaryActionAttr(Fe.TAB_INDEX, "0"), t === Fn.SHOULD_FOCUS && this.adapter.focusPrimaryAction(), this.adapter.removeTrailingActionFocus();
    }, e.prototype.getFocusBehavior = function() {
      return this.shouldFocusPrimaryActionOnClick ? Fn.SHOULD_FOCUS : Fn.SHOULD_NOT_FOCUS;
    }, e.prototype.focusNextAction = function(t, i) {
      var r = this.adapter.isTrailingActionNavigable(), l = this.getDirection(t);
      if (hn.has(t) || !r) {
        this.adapter.notifyNavigation(t, i);
        return;
      }
      if (i === ln.PRIMARY && l === Xt.RIGHT) {
        this.focusTrailingAction();
        return;
      }
      if (i === ln.TRAILING && l === Xt.LEFT) {
        this.focusPrimaryAction();
        return;
      }
      this.adapter.notifyNavigation(t, ln.NONE);
    }, e.prototype.getDirection = function(t) {
      var i = this.adapter.isRTL(), r = t === Fe.ARROW_LEFT_KEY || t === Fe.IE_ARROW_LEFT_KEY, l = t === Fe.ARROW_RIGHT_KEY || t === Fe.IE_ARROW_RIGHT_KEY;
      return !i && r || i && l ? Xt.LEFT : Xt.RIGHT;
    }, e.prototype.removeChip = function() {
      this.shouldRemoveOnTrailingIconClick && this.beginExit();
    }, e.prototype.shouldStartEditing = function(t) {
      return this.eventFromPrimaryAction(t) && t.key === Fe.ENTER_KEY;
    }, e.prototype.shouldFinishEditing = function(t) {
      return t.key === Fe.ENTER_KEY;
    }, e.prototype.shouldNotifyInteraction = function(t) {
      return t.key === Fe.ENTER_KEY || t.key === Fe.SPACEBAR_KEY;
    }, e.prototype.isDeleteAction = function(t) {
      var i = this.adapter.hasClass(It.DELETABLE);
      return i && (t.key === Fe.BACKSPACE_KEY || t.key === Fe.DELETE_KEY || t.key === Fe.IE_DELETE_KEY);
    }, e.prototype.setSelectedImpl = function(t) {
      t ? (this.adapter.addClass(It.SELECTED), this.adapter.setPrimaryActionAttr(Fe.ARIA_CHECKED, "true")) : (this.adapter.removeClass(It.SELECTED), this.adapter.setPrimaryActionAttr(Fe.ARIA_CHECKED, "false"));
    }, e.prototype.notifySelection = function(t) {
      this.adapter.notifySelection(t, !1);
    }, e.prototype.notifyIgnoredSelection = function(t) {
      this.adapter.notifySelection(t, !0);
    }, e.prototype.eventFromPrimaryAction = function(t) {
      return this.adapter.eventTargetHasClass(t.target, It.PRIMARY_ACTION);
    }, e.prototype.startEditing = function() {
      this.adapter.addClass(It.EDITING), this.adapter.notifyEditStart();
    }, e.prototype.finishEditing = function() {
      this.adapter.removeClass(It.EDITING), this.adapter.notifyEditFinish();
    }, e;
  }(Tt)
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
var pa = (
  /** @class */
  function(n) {
    ct(e, n);
    function e() {
      return n !== null && n.apply(this, arguments) || this;
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
      set: function(t) {
        this.foundation.setSelected(t);
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
      set: function(t) {
        this.foundation.setShouldRemoveOnTrailingIconClick(t);
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "setShouldFocusPrimaryActionOnClick", {
      /**
       * Sets whether a clicking on the chip should focus the primary action.
       */
      set: function(t) {
        this.foundation.setShouldFocusPrimaryActionOnClick(t);
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
    }), e.attachTo = function(t) {
      return new e(t);
    }, e.prototype.initialize = function(t, i) {
      var r = this;
      t === void 0 && (t = function(s, o) {
        return new fi(s, o);
      }), i === void 0 && (i = function(s) {
        return new ma(s);
      }), this.leadingIcon = this.root.querySelector(Fe.LEADING_ICON_SELECTOR), this.checkmark = this.root.querySelector(Fe.CHECKMARK_SELECTOR), this.primaryAction = this.root.querySelector(Fe.PRIMARY_ACTION_SELECTOR);
      var l = this.root.querySelector(Fe.TRAILING_ACTION_SELECTOR);
      l && (this.trailingAction = i(l));
      var a = ze(ze({}, fi.createAdapter(this)), { computeBoundingRect: function() {
        return r.foundation.getDimensions();
      } });
      this.rippleSurface = t(this.root, new gi(a));
    }, e.prototype.initialSyncWithDOM = function() {
      var t = this;
      this.handleTrailingActionInteraction = function() {
        t.foundation.handleTrailingActionInteraction();
      }, this.handleTrailingActionNavigation = function(i) {
        t.foundation.handleTrailingActionNavigation(i);
      }, this.handleClick = function() {
        t.foundation.handleClick();
      }, this.handleKeydown = function(i) {
        t.foundation.handleKeydown(i);
      }, this.handleTransitionEnd = function(i) {
        t.foundation.handleTransitionEnd(i);
      }, this.handleFocusIn = function(i) {
        t.foundation.handleFocusIn(i);
      }, this.handleFocusOut = function(i) {
        t.foundation.handleFocusOut(i);
      }, this.listen("transitionend", this.handleTransitionEnd), this.listen("click", this.handleClick), this.listen("keydown", this.handleKeydown), this.listen("focusin", this.handleFocusIn), this.listen("focusout", this.handleFocusOut), this.trailingAction && (this.listen(Wt.INTERACTION_EVENT, this.handleTrailingActionInteraction), this.listen(Wt.NAVIGATION_EVENT, this.handleTrailingActionNavigation));
    }, e.prototype.destroy = function() {
      this.rippleSurface.destroy(), this.unlisten("transitionend", this.handleTransitionEnd), this.unlisten("keydown", this.handleKeydown), this.unlisten("click", this.handleClick), this.unlisten("focusin", this.handleFocusIn), this.unlisten("focusout", this.handleFocusOut), this.trailingAction && (this.unlisten(Wt.INTERACTION_EVENT, this.handleTrailingActionInteraction), this.unlisten(Wt.NAVIGATION_EVENT, this.handleTrailingActionNavigation)), n.prototype.destroy.call(this);
    }, e.prototype.beginExit = function() {
      this.foundation.beginExit();
    }, e.prototype.getDefaultFoundation = function() {
      var t = this, i = {
        addClass: function(r) {
          return t.root.classList.add(r);
        },
        addClassToLeadingIcon: function(r) {
          t.leadingIcon && t.leadingIcon.classList.add(r);
        },
        eventTargetHasClass: function(r, l) {
          return r ? r.classList.contains(l) : !1;
        },
        focusPrimaryAction: function() {
          t.primaryAction && t.primaryAction.focus();
        },
        focusTrailingAction: function() {
          t.trailingAction && t.trailingAction.focus();
        },
        getAttribute: function(r) {
          return t.root.getAttribute(r);
        },
        getCheckmarkBoundingClientRect: function() {
          return t.checkmark ? t.checkmark.getBoundingClientRect() : null;
        },
        getComputedStyleValue: function(r) {
          return window.getComputedStyle(t.root).getPropertyValue(r);
        },
        getRootBoundingClientRect: function() {
          return t.root.getBoundingClientRect();
        },
        hasClass: function(r) {
          return t.root.classList.contains(r);
        },
        hasLeadingIcon: function() {
          return !!t.leadingIcon;
        },
        isRTL: function() {
          return window.getComputedStyle(t.root).getPropertyValue("direction") === "rtl";
        },
        isTrailingActionNavigable: function() {
          return t.trailingAction ? t.trailingAction.isNavigable() : !1;
        },
        notifyInteraction: function() {
          return t.emit(
            Fe.INTERACTION_EVENT,
            { chipId: t.id },
            !0
            /* shouldBubble */
          );
        },
        notifyNavigation: function(r, l) {
          return t.emit(
            Fe.NAVIGATION_EVENT,
            { chipId: t.id, key: r, source: l },
            !0
            /* shouldBubble */
          );
        },
        notifyRemoval: function(r) {
          t.emit(
            Fe.REMOVAL_EVENT,
            { chipId: t.id, removedAnnouncement: r },
            !0
            /* shouldBubble */
          );
        },
        notifySelection: function(r, l) {
          return t.emit(
            Fe.SELECTION_EVENT,
            { chipId: t.id, selected: r, shouldIgnore: l },
            !0
            /* shouldBubble */
          );
        },
        notifyTrailingIconInteraction: function() {
          return t.emit(
            Fe.TRAILING_ICON_INTERACTION_EVENT,
            { chipId: t.id },
            !0
            /* shouldBubble */
          );
        },
        notifyEditStart: function() {
        },
        notifyEditFinish: function() {
        },
        removeClass: function(r) {
          return t.root.classList.remove(r);
        },
        removeClassFromLeadingIcon: function(r) {
          t.leadingIcon && t.leadingIcon.classList.remove(r);
        },
        removeTrailingActionFocus: function() {
          t.trailingAction && t.trailingAction.removeFocus();
        },
        setPrimaryActionAttr: function(r, l) {
          t.primaryAction && t.primaryAction.setAttribute(r, l);
        },
        setStyleProperty: function(r, l) {
          return t.root.style.setProperty(r, l);
        }
      };
      return new Cr(i);
    }, e.prototype.setSelectedFromChipSet = function(t, i) {
      this.foundation.setSelectedFromChipSet(t, i);
    }, e.prototype.focusPrimaryAction = function() {
      this.foundation.focusPrimaryAction();
    }, e.prototype.focusTrailingAction = function() {
      this.foundation.focusTrailingAction();
    }, e.prototype.removeFocus = function() {
      this.foundation.removeFocus();
    }, e.prototype.remove = function() {
      var t = this.root.parentNode;
      t !== null && t.removeChild(this.root);
    }, e;
  }(pi)
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
var ga = {
  CHIP_SELECTOR: ".mdc-chip"
}, Qn = {
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
var Ar = (
  /** @class */
  function(n) {
    ct(e, n);
    function e(t) {
      var i = n.call(this, ze(ze({}, e.defaultAdapter), t)) || this;
      return i.selectedChipIds = [], i;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return ga;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Qn;
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
    }, e.prototype.select = function(t) {
      this.selectImpl(t, !1);
    }, e.prototype.handleChipInteraction = function(t) {
      var i = t.chipId, r = this.adapter.getIndexOfChipById(i);
      this.removeFocusFromChipsExcept(r), (this.adapter.hasClass(Qn.CHOICE) || this.adapter.hasClass(Qn.FILTER)) && this.toggleSelect(i);
    }, e.prototype.handleChipSelection = function(t) {
      var i = t.chipId, r = t.selected, l = t.shouldIgnore;
      if (!l) {
        var a = this.selectedChipIds.indexOf(i) >= 0;
        r && !a ? this.select(i) : !r && a && this.deselectImpl(i);
      }
    }, e.prototype.handleChipRemoval = function(t) {
      var i = t.chipId, r = t.removedAnnouncement;
      r && this.adapter.announceMessage(r);
      var l = this.adapter.getIndexOfChipById(i);
      this.deselectAndNotifyClients(i), this.adapter.removeChipAtIndex(l);
      var a = this.adapter.getChipListCount() - 1;
      if (!(a < 0)) {
        var s = Math.min(l, a);
        this.removeFocusFromChipsExcept(s), this.adapter.focusChipTrailingActionAtIndex(s);
      }
    }, e.prototype.handleChipNavigation = function(t) {
      var i = t.chipId, r = t.key, l = t.source, a = this.adapter.getChipListCount() - 1, s = this.adapter.getIndexOfChipById(i);
      if (!(s === -1 || !qt.has(r))) {
        var o = this.adapter.isRTL(), u = r === Fe.ARROW_LEFT_KEY || r === Fe.IE_ARROW_LEFT_KEY, c = r === Fe.ARROW_RIGHT_KEY || r === Fe.IE_ARROW_RIGHT_KEY, d = r === Fe.ARROW_DOWN_KEY || r === Fe.IE_ARROW_DOWN_KEY, f = !o && c || o && u || d, h = r === Fe.HOME_KEY, p = r === Fe.END_KEY;
        f ? s++ : h ? s = 0 : p ? s = a : s--, !(s < 0 || s > a) && (this.removeFocusFromChipsExcept(s), this.focusChipAction(s, r, l));
      }
    }, e.prototype.focusChipAction = function(t, i, r) {
      var l = hn.has(i);
      if (l && r === ln.PRIMARY)
        return this.adapter.focusChipPrimaryActionAtIndex(t);
      if (l && r === ln.TRAILING)
        return this.adapter.focusChipTrailingActionAtIndex(t);
      var a = this.getDirection(i);
      if (a === Xt.LEFT)
        return this.adapter.focusChipTrailingActionAtIndex(t);
      if (a === Xt.RIGHT)
        return this.adapter.focusChipPrimaryActionAtIndex(t);
    }, e.prototype.getDirection = function(t) {
      var i = this.adapter.isRTL(), r = t === Fe.ARROW_LEFT_KEY || t === Fe.IE_ARROW_LEFT_KEY, l = t === Fe.ARROW_RIGHT_KEY || t === Fe.IE_ARROW_RIGHT_KEY;
      return !i && r || i && l ? Xt.LEFT : Xt.RIGHT;
    }, e.prototype.deselectImpl = function(t, i) {
      i === void 0 && (i = !1);
      var r = this.selectedChipIds.indexOf(t);
      if (r >= 0) {
        this.selectedChipIds.splice(r, 1);
        var l = this.adapter.getIndexOfChipById(t);
        this.adapter.selectChipAtIndex(
          l,
          /** isSelected */
          !1,
          i
        );
      }
    }, e.prototype.deselectAndNotifyClients = function(t) {
      this.deselectImpl(t, !0);
    }, e.prototype.toggleSelect = function(t) {
      this.selectedChipIds.indexOf(t) >= 0 ? this.deselectAndNotifyClients(t) : this.selectAndNotifyClients(t);
    }, e.prototype.removeFocusFromChipsExcept = function(t) {
      for (var i = this.adapter.getChipListCount(), r = 0; r < i; r++)
        r !== t && this.adapter.removeFocusFromChipAtIndex(r);
    }, e.prototype.selectAndNotifyClients = function(t) {
      this.selectImpl(t, !0);
    }, e.prototype.selectImpl = function(t, i) {
      if (!(this.selectedChipIds.indexOf(t) >= 0)) {
        if (this.adapter.hasClass(Qn.CHOICE) && this.selectedChipIds.length > 0) {
          var r = this.selectedChipIds[0], l = this.adapter.getIndexOfChipById(r);
          this.selectedChipIds = [], this.adapter.selectChipAtIndex(
            l,
            /** isSelected */
            !1,
            i
          );
        }
        this.selectedChipIds.push(t);
        var a = this.adapter.getIndexOfChipById(t);
        this.adapter.selectChipAtIndex(
          a,
          /** isSelected */
          !0,
          i
        );
      }
    }, e;
  }(Tt)
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
var Ii = Cr.strings, Yl = Ii.INTERACTION_EVENT, Xl = Ii.SELECTION_EVENT, Zl = Ii.REMOVAL_EVENT, Ql = Ii.NAVIGATION_EVENT, of = Ar.strings.CHIP_SELECTOR, Jl = 0, uf = (
  /** @class */
  function(n) {
    ct(e, n);
    function e() {
      return n !== null && n.apply(this, arguments) || this;
    }
    return e.attachTo = function(t) {
      return new e(t);
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
    }), e.prototype.initialize = function(t) {
      t === void 0 && (t = function(i) {
        return new pa(i);
      }), this.chipFactory = t, this.chipsList = this.instantiateChips(this.chipFactory);
    }, e.prototype.initialSyncWithDOM = function() {
      var t, i, r = this;
      try {
        for (var l = St(this.chipsList), a = l.next(); !a.done; a = l.next()) {
          var s = a.value;
          s.id && s.selected && this.foundation.select(s.id);
        }
      } catch (o) {
        t = { error: o };
      } finally {
        try {
          a && !a.done && (i = l.return) && i.call(l);
        } finally {
          if (t)
            throw t.error;
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
      }, this.listen(Yl, this.handleChipInteraction), this.listen(Xl, this.handleChipSelection), this.listen(Zl, this.handleChipRemoval), this.listen(Ql, this.handleChipNavigation);
    }, e.prototype.destroy = function() {
      var t, i;
      try {
        for (var r = St(this.chipsList), l = r.next(); !l.done; l = r.next()) {
          var a = l.value;
          a.destroy();
        }
      } catch (s) {
        t = { error: s };
      } finally {
        try {
          l && !l.done && (i = r.return) && i.call(r);
        } finally {
          if (t)
            throw t.error;
        }
      }
      this.unlisten(Yl, this.handleChipInteraction), this.unlisten(Xl, this.handleChipSelection), this.unlisten(Zl, this.handleChipRemoval), this.unlisten(Ql, this.handleChipNavigation), n.prototype.destroy.call(this);
    }, e.prototype.addChip = function(t) {
      t.id = t.id || "mdc-chip-" + ++Jl, this.chipsList.push(this.chipFactory(t));
    }, e.prototype.getDefaultFoundation = function() {
      var t = this, i = {
        announceMessage: function(r) {
          sf(r);
        },
        focusChipPrimaryActionAtIndex: function(r) {
          t.chipsList[r].focusPrimaryAction();
        },
        focusChipTrailingActionAtIndex: function(r) {
          t.chipsList[r].focusTrailingAction();
        },
        getChipListCount: function() {
          return t.chips.length;
        },
        getIndexOfChipById: function(r) {
          return t.findChipIndex(r);
        },
        hasClass: function(r) {
          return t.root.classList.contains(r);
        },
        isRTL: function() {
          return window.getComputedStyle(t.root).getPropertyValue("direction") === "rtl";
        },
        removeChipAtIndex: function(r) {
          r >= 0 && r < t.chips.length && (t.chipsList[r].destroy(), t.chipsList[r].remove(), t.chipsList.splice(r, 1));
        },
        removeFocusFromChipAtIndex: function(r) {
          t.chipsList[r].removeFocus();
        },
        selectChipAtIndex: function(r, l, a) {
          r >= 0 && r < t.chips.length && t.chipsList[r].setSelectedFromChipSet(l, a);
        }
      };
      return new Ar(i);
    }, e.prototype.instantiateChips = function(t) {
      var i = [].slice.call(this.root.querySelectorAll(of));
      return i.map(function(r) {
        return r.id = r.id || "mdc-chip-" + ++Jl, t(r);
      });
    }, e.prototype.findChipIndex = function(t) {
      for (var i = 0; i < this.chips.length; i++)
        if (this.chipsList[i].id === t)
          return i;
      return -1;
    }, e;
  }(pi)
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
const Er = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  MDCChip: pa,
  MDCChipFoundation: Cr,
  MDCChipSet: uf,
  MDCChipSetFoundation: Ar,
  MDCChipTrailingAction: ma,
  MDCChipTrailingActionFoundation: ha,
  chipCssClasses: It,
  chipSetCssClasses: Qn,
  chipSetStrings: ga,
  chipStrings: Fe,
  trailingActionStrings: Wt
}, Symbol.toStringTag, { value: "Module" }));
function xl(n) {
  let e;
  return {
    c() {
      e = ne("div"), U(e, "class", "mdc-chip__ripple");
    },
    m(t, i) {
      V(t, e, i);
    },
    d(t) {
      t && B(e);
    }
  };
}
function $l(n) {
  let e;
  return {
    c() {
      e = ne("div"), U(e, "class", "mdc-chip__touch");
    },
    m(t, i) {
      V(t, e, i);
    },
    d(t) {
      t && B(e);
    }
  };
}
function cf(n) {
  let e, t, i, r, l = (
    /*ripple*/
    n[3] && !/*$nonInteractive*/
    n[14] && xl()
  );
  const a = (
    /*#slots*/
    n[34].default
  ), s = Ie(
    a,
    n,
    /*$$scope*/
    n[38],
    null
  );
  let o = (
    /*touch*/
    n[4] && $l()
  );
  return {
    c() {
      l && l.c(), e = ae(), s && s.c(), t = ae(), o && o.c(), i = Xe();
    },
    m(u, c) {
      l && l.m(u, c), V(u, e, c), s && s.m(u, c), V(u, t, c), o && o.m(u, c), V(u, i, c), r = !0;
    },
    p(u, c) {
      /*ripple*/
      u[3] && !/*$nonInteractive*/
      u[14] ? l || (l = xl(), l.c(), l.m(e.parentNode, e)) : l && (l.d(1), l = null), s && s.p && (!r || c[1] & /*$$scope*/
      128) && Ce(
        s,
        a,
        u,
        /*$$scope*/
        u[38],
        r ? ve(
          a,
          /*$$scope*/
          u[38],
          c,
          null
        ) : Ae(
          /*$$scope*/
          u[38]
        ),
        null
      ), /*touch*/
      u[4] ? o || (o = $l(), o.c(), o.m(i.parentNode, i)) : o && (o.d(1), o = null);
    },
    i(u) {
      r || (E(s, u), r = !0);
    },
    o(u) {
      S(s, u), r = !1;
    },
    d(u) {
      u && (B(e), B(t), B(i)), l && l.d(u), s && s.d(u), o && o.d(u);
    }
  };
}
function df(n) {
  let e, t, i;
  const r = [
    { tag: (
      /*tag*/
      n[6]
    ) },
    {
      use: [
        [
          kt,
          {
            ripple: (
              /*ripple*/
              n[3] && !/*$nonInteractive*/
              n[14]
            ),
            unbounded: !1,
            addClass: (
              /*addClass*/
              n[25]
            ),
            removeClass: (
              /*removeClass*/
              n[26]
            ),
            addStyle: (
              /*addStyle*/
              n[27]
            )
          }
        ],
        /*forwardEvents*/
        n[15],
        .../*use*/
        n[0]
      ]
    },
    {
      class: le({
        [
          /*className*/
          n[1]
        ]: !0,
        "mdc-chip": !0,
        "mdc-chip--selected": (
          /*selected*/
          n[8]
        ),
        "mdc-chip--touch": (
          /*touch*/
          n[4]
        ),
        .../*internalClasses*/
        n[10]
      })
    },
    {
      style: Object.entries(
        /*internalStyles*/
        n[11]
      ).map(er).concat([
        /*style*/
        n[2]
      ]).join(" ")
    },
    { role: "row" },
    /*$$restProps*/
    n[28]
  ];
  var l = (
    /*component*/
    n[5]
  );
  function a(s, o) {
    let u = {
      $$slots: { default: [cf] },
      $$scope: { ctx: s }
    };
    for (let c = 0; c < r.length; c += 1)
      u = Y(u, r[c]);
    return o !== void 0 && o[0] & /*tag, ripple, $nonInteractive, addClass, removeClass, addStyle, forwardEvents, use, className, selected, touch, internalClasses, internalStyles, style, $$restProps*/
    503369055 && (u = Y(u, he(r, [
      o[0] & /*tag*/
      64 && { tag: (
        /*tag*/
        s[6]
      ) },
      o[0] & /*ripple, $nonInteractive, addClass, removeClass, addStyle, forwardEvents, use*/
      234930185 && {
        use: [
          [
            kt,
            {
              ripple: (
                /*ripple*/
                s[3] && !/*$nonInteractive*/
                s[14]
              ),
              unbounded: !1,
              addClass: (
                /*addClass*/
                s[25]
              ),
              removeClass: (
                /*removeClass*/
                s[26]
              ),
              addStyle: (
                /*addStyle*/
                s[27]
              )
            }
          ],
          /*forwardEvents*/
          s[15],
          .../*use*/
          s[0]
        ]
      },
      o[0] & /*className, selected, touch, internalClasses*/
      1298 && {
        class: le({
          [
            /*className*/
            s[1]
          ]: !0,
          "mdc-chip": !0,
          "mdc-chip--selected": (
            /*selected*/
            s[8]
          ),
          "mdc-chip--touch": (
            /*touch*/
            s[4]
          ),
          .../*internalClasses*/
          s[10]
        })
      },
      o[0] & /*internalStyles, style*/
      2052 && {
        style: Object.entries(
          /*internalStyles*/
          s[11]
        ).map(er).concat([
          /*style*/
          s[2]
        ]).join(" ")
      },
      r[4],
      o[0] & /*$$restProps*/
      268435456 && Me(
        /*$$restProps*/
        s[28]
      )
    ]))), { props: u };
  }
  return l && (e = Dt(l, a(n)), n[35](e), e.$on("transitionend", function() {
    me(
      /*instance*/
      n[7] && /*instance*/
      n[7].handleTransitionEnd.bind(
        /*instance*/
        n[7]
      )
    ) && /*instance*/
    (n[7] && /*instance*/
    n[7].handleTransitionEnd.bind(
      /*instance*/
      n[7]
    )).apply(this, arguments);
  }), e.$on("click", function() {
    me(
      /*instance*/
      n[7] && /*instance*/
      n[7].handleClick.bind(
        /*instance*/
        n[7]
      )
    ) && /*instance*/
    (n[7] && /*instance*/
    n[7].handleClick.bind(
      /*instance*/
      n[7]
    )).apply(this, arguments);
  }), e.$on("keydown", function() {
    me(
      /*instance*/
      n[7] && /*instance*/
      n[7].handleKeydown.bind(
        /*instance*/
        n[7]
      )
    ) && /*instance*/
    (n[7] && /*instance*/
    n[7].handleKeydown.bind(
      /*instance*/
      n[7]
    )).apply(this, arguments);
  }), e.$on("focusin", function() {
    me(
      /*instance*/
      n[7] && /*instance*/
      n[7].handleFocusIn.bind(
        /*instance*/
        n[7]
      )
    ) && /*instance*/
    (n[7] && /*instance*/
    n[7].handleFocusIn.bind(
      /*instance*/
      n[7]
    )).apply(this, arguments);
  }), e.$on("focusout", function() {
    me(
      /*instance*/
      n[7] && /*instance*/
      n[7].handleFocusOut.bind(
        /*instance*/
        n[7]
      )
    ) && /*instance*/
    (n[7] && /*instance*/
    n[7].handleFocusOut.bind(
      /*instance*/
      n[7]
    )).apply(this, arguments);
  }), e.$on("SMUIChipTrailingAction:interaction", function() {
    me(
      /*instance*/
      n[7] && /*instance*/
      n[7].handleTrailingActionInteraction.bind(
        /*instance*/
        n[7]
      )
    ) && /*instance*/
    (n[7] && /*instance*/
    n[7].handleTrailingActionInteraction.bind(
      /*instance*/
      n[7]
    )).apply(this, arguments);
  }), e.$on("SMUIChipTrailingAction:navigation", function() {
    me(
      /*instance*/
      n[7] && /*instance*/
      n[7].handleTrailingActionNavigation.bind(
        /*instance*/
        n[7]
      )
    ) && /*instance*/
    (n[7] && /*instance*/
    n[7].handleTrailingActionNavigation.bind(
      /*instance*/
      n[7]
    )).apply(this, arguments);
  }), e.$on(
    "SMUIChipsChipPrimaryAction:mount",
    /*handleSMUIChipsChipPrimaryAction*/
    n[23]
  ), e.$on(
    "SMUIChipsChipPrimaryAction:unmount",
    /*SMUIChipsChipPrimaryAction_unmount_handler*/
    n[36]
  ), e.$on(
    "SMUIChipsChipTrailingAction:mount",
    /*handleSMUIChipsChipTrailingAction*/
    n[24]
  ), e.$on(
    "SMUIChipsChipTrailingAction:unmount",
    /*SMUIChipsChipTrailingAction_unmount_handler*/
    n[37]
  )), {
    c() {
      e && ie(e.$$.fragment), t = Xe();
    },
    m(s, o) {
      e && ee(e, s, o), V(s, t, o), i = !0;
    },
    p(s, o) {
      if (n = s, o[0] & /*component*/
      32 && l !== (l = /*component*/
      n[5])) {
        if (e) {
          Pe();
          const u = e;
          S(u.$$.fragment, 1, 0, () => {
            te(u, 1);
          }), He();
        }
        l ? (e = Dt(l, a(n, o)), n[35](e), e.$on("transitionend", function() {
          me(
            /*instance*/
            n[7] && /*instance*/
            n[7].handleTransitionEnd.bind(
              /*instance*/
              n[7]
            )
          ) && /*instance*/
          (n[7] && /*instance*/
          n[7].handleTransitionEnd.bind(
            /*instance*/
            n[7]
          )).apply(this, arguments);
        }), e.$on("click", function() {
          me(
            /*instance*/
            n[7] && /*instance*/
            n[7].handleClick.bind(
              /*instance*/
              n[7]
            )
          ) && /*instance*/
          (n[7] && /*instance*/
          n[7].handleClick.bind(
            /*instance*/
            n[7]
          )).apply(this, arguments);
        }), e.$on("keydown", function() {
          me(
            /*instance*/
            n[7] && /*instance*/
            n[7].handleKeydown.bind(
              /*instance*/
              n[7]
            )
          ) && /*instance*/
          (n[7] && /*instance*/
          n[7].handleKeydown.bind(
            /*instance*/
            n[7]
          )).apply(this, arguments);
        }), e.$on("focusin", function() {
          me(
            /*instance*/
            n[7] && /*instance*/
            n[7].handleFocusIn.bind(
              /*instance*/
              n[7]
            )
          ) && /*instance*/
          (n[7] && /*instance*/
          n[7].handleFocusIn.bind(
            /*instance*/
            n[7]
          )).apply(this, arguments);
        }), e.$on("focusout", function() {
          me(
            /*instance*/
            n[7] && /*instance*/
            n[7].handleFocusOut.bind(
              /*instance*/
              n[7]
            )
          ) && /*instance*/
          (n[7] && /*instance*/
          n[7].handleFocusOut.bind(
            /*instance*/
            n[7]
          )).apply(this, arguments);
        }), e.$on("SMUIChipTrailingAction:interaction", function() {
          me(
            /*instance*/
            n[7] && /*instance*/
            n[7].handleTrailingActionInteraction.bind(
              /*instance*/
              n[7]
            )
          ) && /*instance*/
          (n[7] && /*instance*/
          n[7].handleTrailingActionInteraction.bind(
            /*instance*/
            n[7]
          )).apply(this, arguments);
        }), e.$on("SMUIChipTrailingAction:navigation", function() {
          me(
            /*instance*/
            n[7] && /*instance*/
            n[7].handleTrailingActionNavigation.bind(
              /*instance*/
              n[7]
            )
          ) && /*instance*/
          (n[7] && /*instance*/
          n[7].handleTrailingActionNavigation.bind(
            /*instance*/
            n[7]
          )).apply(this, arguments);
        }), e.$on(
          "SMUIChipsChipPrimaryAction:mount",
          /*handleSMUIChipsChipPrimaryAction*/
          n[23]
        ), e.$on(
          "SMUIChipsChipPrimaryAction:unmount",
          /*SMUIChipsChipPrimaryAction_unmount_handler*/
          n[36]
        ), e.$on(
          "SMUIChipsChipTrailingAction:mount",
          /*handleSMUIChipsChipTrailingAction*/
          n[24]
        ), e.$on(
          "SMUIChipsChipTrailingAction:unmount",
          /*SMUIChipsChipTrailingAction_unmount_handler*/
          n[37]
        ), ie(e.$$.fragment), E(e.$$.fragment, 1), ee(e, t.parentNode, t)) : e = null;
      } else if (l) {
        const u = o[0] & /*tag, ripple, $nonInteractive, addClass, removeClass, addStyle, forwardEvents, use, className, selected, touch, internalClasses, internalStyles, style, $$restProps*/
        503369055 ? he(r, [
          o[0] & /*tag*/
          64 && { tag: (
            /*tag*/
            n[6]
          ) },
          o[0] & /*ripple, $nonInteractive, addClass, removeClass, addStyle, forwardEvents, use*/
          234930185 && {
            use: [
              [
                kt,
                {
                  ripple: (
                    /*ripple*/
                    n[3] && !/*$nonInteractive*/
                    n[14]
                  ),
                  unbounded: !1,
                  addClass: (
                    /*addClass*/
                    n[25]
                  ),
                  removeClass: (
                    /*removeClass*/
                    n[26]
                  ),
                  addStyle: (
                    /*addStyle*/
                    n[27]
                  )
                }
              ],
              /*forwardEvents*/
              n[15],
              .../*use*/
              n[0]
            ]
          },
          o[0] & /*className, selected, touch, internalClasses*/
          1298 && {
            class: le({
              [
                /*className*/
                n[1]
              ]: !0,
              "mdc-chip": !0,
              "mdc-chip--selected": (
                /*selected*/
                n[8]
              ),
              "mdc-chip--touch": (
                /*touch*/
                n[4]
              ),
              .../*internalClasses*/
              n[10]
            })
          },
          o[0] & /*internalStyles, style*/
          2052 && {
            style: Object.entries(
              /*internalStyles*/
              n[11]
            ).map(er).concat([
              /*style*/
              n[2]
            ]).join(" ")
          },
          r[4],
          o[0] & /*$$restProps*/
          268435456 && Me(
            /*$$restProps*/
            n[28]
          )
        ]) : {};
        o[0] & /*touch, ripple, $nonInteractive*/
        16408 | o[1] & /*$$scope*/
        128 && (u.$$scope = { dirty: o, ctx: n }), e.$set(u);
      }
    },
    i(s) {
      i || (e && E(e.$$.fragment, s), i = !0);
    },
    o(s) {
      e && S(e.$$.fragment, s), i = !1;
    },
    d(s) {
      s && B(t), n[35](null), e && te(e, s);
    }
  };
}
const er = ([n, e]) => `${n}: ${e};`;
function ff(n, e, t) {
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
  let r = pe(e, i), l, a, s, o, u, c, d, { $$slots: f = {}, $$scope: h } = e;
  const { MDCChipFoundation: p } = Er, b = nt(Je());
  let { use: m = [] } = e, { class: C = "" } = e, { style: v = "" } = e, { chip: T } = e, { ripple: y = !0 } = e, { touch: k = !1 } = e, { shouldRemoveOnTrailingIconClick: R = !0 } = e, { shouldFocusPrimaryActionOnClick: _ = !0 } = e, A, w, I = {}, g = {}, D = {};
  const O = Ke("SMUI:chips:chip:initialSelected");
  it(n, O, (Q) => t(44, c = Q));
  let N = c, W, G;
  const z = Ke("SMUI:chips:nonInteractive");
  it(n, z, (Q) => t(14, d = Q));
  const F = Ke("SMUI:chips:choice");
  it(n, F, (Q) => t(40, a = Q));
  const L = Ke("SMUI:chips:chip:index");
  it(n, L, (Q) => t(39, l = Q));
  let { component: j = Nt } = e, { tag: ue = j === Nt ? "div" : void 0 } = e;
  const ke = Lt(R);
  it(n, ke, (Q) => t(43, u = Q)), Ve("SMUI:chips:chip:shouldRemoveOnTrailingIconClick", ke);
  const be = Lt(N);
  it(n, be, (Q) => t(42, o = Q)), Ve("SMUI:chips:chip:isSelected", be);
  const Ye = Lt(g);
  if (it(n, Ye, (Q) => t(41, s = Q)), Ve("SMUI:chips:chip:leadingIconClasses", Ye), Ve("SMUI:chips:chip:focusable", a && N || l === 0), !T)
    throw new Error("The chip property is required! It should be passed down from the Set to the Chip.");
  ot(() => {
    t(7, w = new p({
      addClass: ye,
      addClassToLeadingIcon: re,
      eventTargetHasClass: (je, dt) => je && "classList" in je ? je.classList.contains(dt) : !1,
      focusPrimaryAction: () => {
        W && W.focus();
      },
      focusTrailingAction: () => {
        G && G.focus();
      },
      getAttribute: (je) => Ue().getAttribute(je),
      getCheckmarkBoundingClientRect: () => {
        const je = Ue().querySelector(".mdc-chip__checkmark");
        return je ? je.getBoundingClientRect() : null;
      },
      getComputedStyleValue: Ge,
      getRootBoundingClientRect: () => Ue().getBoundingClientRect(),
      hasClass: _e,
      hasLeadingIcon: () => !!Ue().querySelector(".mdc-chip__icon--leading"),
      isRTL: () => getComputedStyle(Ue()).getPropertyValue("direction") === "rtl",
      isTrailingActionNavigable: () => G ? G.isNavigable() : !1,
      notifyInteraction: () => ge(Ue(), "SMUIChip:interaction", { chipId: T }, void 0, !0),
      notifyNavigation: (je, dt) => ge(Ue(), "SMUIChip:navigation", { chipId: T, key: je, source: dt }, void 0, !0),
      notifyRemoval: (je) => {
        ge(Ue(), "SMUIChip:removal", { chipId: T, removedAnnouncement: je }, void 0, !0);
      },
      notifySelection: (je, dt) => ge(Ue(), "SMUIChip:selection", { chipId: T, selected: je, shouldIgnore: dt }, void 0, !0),
      notifyTrailingIconInteraction: () => ge(Ue(), "SMUIChip:trailingIconInteraction", { chipId: T }, void 0, !0),
      notifyEditStart: () => {
      },
      /* Not Implemented. */
      notifyEditFinish: () => {
      },
      /* Not Implemented. */
      removeClass: Ne,
      removeClassFromLeadingIcon: q,
      removeTrailingActionFocus: () => {
        G && G.removeFocus();
      },
      setPrimaryActionAttr: (je, dt) => {
        W && W.addAttr(je, dt);
      },
      setStyleProperty: We
    }));
    const Q = {
      chipId: T,
      get selected() {
        return N;
      },
      focusPrimaryAction: X,
      focusTrailingAction: Te,
      removeFocus: qe,
      setSelectedFromChipSet: ft
    };
    return ge(Ue(), "SMUIChipsChip:mount", Q), w.init(), () => {
      ge(Ue(), "SMUIChipsChip:unmount", Q), w.destroy();
    };
  });
  function K(Q) {
    t(12, W = Q.detail);
  }
  function x(Q) {
    t(13, G = Q.detail);
  }
  function _e(Q) {
    return Q in I ? I[Q] : Ue().classList.contains(Q);
  }
  function ye(Q) {
    I[Q] || t(10, I[Q] = !0, I);
  }
  function Ne(Q) {
    (!(Q in I) || I[Q]) && t(10, I[Q] = !1, I);
  }
  function re(Q) {
    g[Q] || t(33, g[Q] = !0, g);
  }
  function q(Q) {
    (!(Q in g) || g[Q]) && t(33, g[Q] = !1, g);
  }
  function We(Q, je) {
    D[Q] != je && (je === "" || je == null ? (delete D[Q], t(11, D)) : t(11, D[Q] = je, D));
  }
  function Ge(Q) {
    return Q in D ? D[Q] : getComputedStyle(Ue()).getPropertyValue(Q);
  }
  function ft(Q, je) {
    t(8, N = Q), w.setSelectedFromChipSet(N, je);
  }
  function X() {
    w.focusPrimaryAction();
  }
  function Te() {
    w.focusTrailingAction();
  }
  function qe() {
    w.removeFocus();
  }
  function Ue() {
    return A.getElement();
  }
  function yt(Q) {
    se[Q ? "unshift" : "push"](() => {
      A = Q, t(9, A);
    });
  }
  const M = () => t(12, W = void 0), $ = () => t(13, G = void 0);
  return n.$$set = (Q) => {
    e = Y(Y({}, e), tt(Q)), t(28, r = pe(e, i)), "use" in Q && t(0, m = Q.use), "class" in Q && t(1, C = Q.class), "style" in Q && t(2, v = Q.style), "chip" in Q && t(29, T = Q.chip), "ripple" in Q && t(3, y = Q.ripple), "touch" in Q && t(4, k = Q.touch), "shouldRemoveOnTrailingIconClick" in Q && t(30, R = Q.shouldRemoveOnTrailingIconClick), "shouldFocusPrimaryActionOnClick" in Q && t(31, _ = Q.shouldFocusPrimaryActionOnClick), "component" in Q && t(5, j = Q.component), "tag" in Q && t(6, ue = Q.tag), "$$scope" in Q && t(38, h = Q.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty[0] & /*shouldRemoveOnTrailingIconClick*/
    1073741824 && Rt(ke, u = R, u), n.$$.dirty[0] & /*selected*/
    256 && Rt(be, o = N, o), n.$$.dirty[1] & /*leadingIconClasses*/
    4 && Rt(Ye, s = g, s), n.$$.dirty[0] & /*instance, shouldRemoveOnTrailingIconClick*/
    1073741952 && w && w.getShouldRemoveOnTrailingIconClick() !== R && w.setShouldRemoveOnTrailingIconClick(R), n.$$.dirty[0] & /*instance*/
    128 | n.$$.dirty[1] & /*shouldFocusPrimaryActionOnClick*/
    1 && w && w.setShouldFocusPrimaryActionOnClick(_);
  }, [
    m,
    C,
    v,
    y,
    k,
    j,
    ue,
    w,
    N,
    A,
    I,
    D,
    W,
    G,
    d,
    b,
    O,
    z,
    F,
    L,
    ke,
    be,
    Ye,
    K,
    x,
    ye,
    Ne,
    We,
    r,
    T,
    R,
    _,
    Ue,
    g,
    f,
    yt,
    M,
    $,
    h
  ];
}
class hf extends Re {
  constructor(e) {
    super(), Oe(
      this,
      e,
      ff,
      df,
      Ee,
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
function es(n, e, t) {
  const i = n.slice();
  return i[37] = e[t], i[39] = t, i;
}
const mf = (n) => ({ chip: n[0] & /*chips*/
1 }), ts = (n) => ({ chip: (
  /*chip*/
  n[37]
) });
function pf(n) {
  let e;
  const t = (
    /*#slots*/
    n[25].default
  ), i = Ie(
    t,
    n,
    /*$$scope*/
    n[27],
    ts
  );
  return {
    c() {
      i && i.c();
    },
    m(r, l) {
      i && i.m(r, l), e = !0;
    },
    p(r, l) {
      i && i.p && (!e || l[0] & /*$$scope, chips*/
      134217729) && Ce(
        i,
        t,
        r,
        /*$$scope*/
        r[27],
        e ? ve(
          t,
          /*$$scope*/
          r[27],
          l,
          mf
        ) : Ae(
          /*$$scope*/
          r[27]
        ),
        ts
      );
    },
    i(r) {
      e || (E(i, r), e = !0);
    },
    o(r) {
      S(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function gf(n) {
  let e, t, i;
  return e = new Vn({
    props: {
      key: "SMUI:chips:chip:initialSelected",
      value: (
        /*initialSelected*/
        n[10][
          /*i*/
          n[39]
        ]
      ),
      $$slots: { default: [pf] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      ie(e.$$.fragment), t = ae();
    },
    m(r, l) {
      ee(e, r, l), V(r, t, l), i = !0;
    },
    p(r, l) {
      const a = {};
      l[0] & /*chips*/
      1 && (a.value = /*initialSelected*/
      r[10][
        /*i*/
        r[39]
      ]), l[0] & /*$$scope, chips*/
      134217729 && (a.$$scope = { dirty: l, ctx: r }), e.$set(a);
    },
    i(r) {
      i || (E(e.$$.fragment, r), i = !0);
    },
    o(r) {
      S(e.$$.fragment, r), i = !1;
    },
    d(r) {
      r && B(t), te(e, r);
    }
  };
}
function ns(n, e) {
  let t, i, r;
  return i = new Vn({
    props: {
      key: "SMUI:chips:chip:index",
      value: (
        /*i*/
        e[39]
      ),
      $$slots: { default: [gf] },
      $$scope: { ctx: e }
    }
  }), {
    key: n,
    first: null,
    c() {
      t = Xe(), ie(i.$$.fragment), this.first = t;
    },
    m(l, a) {
      V(l, t, a), ee(i, l, a), r = !0;
    },
    p(l, a) {
      e = l;
      const s = {};
      a[0] & /*chips*/
      1 && (s.value = /*i*/
      e[39]), a[0] & /*$$scope, chips*/
      134217729 && (s.$$scope = { dirty: a, ctx: e }), i.$set(s);
    },
    i(l) {
      r || (E(i.$$.fragment, l), r = !0);
    },
    o(l) {
      S(i.$$.fragment, l), r = !1;
    },
    d(l) {
      l && B(t), te(i, l);
    }
  };
}
function _f(n) {
  let e, t = [], i = /* @__PURE__ */ new Map(), r, l, a, s, o, u = jt(
    /*chips*/
    n[0]
  );
  const c = (h) => (
    /*key*/
    h[3](
      /*chip*/
      h[37]
    )
  );
  for (let h = 0; h < u.length; h += 1) {
    let p = es(n, u, h), b = c(p);
    i.set(b, t[h] = ns(b, p));
  }
  let d = [
    {
      class: r = le({
        [
          /*className*/
          n[2]
        ]: !0,
        "mdc-chip-set": !0,
        "smui-chip-set--non-interactive": (
          /*nonInteractive*/
          n[4]
        ),
        "mdc-chip-set--choice": (
          /*choice*/
          n[5]
        ),
        "mdc-chip-set--filter": (
          /*filter*/
          n[6]
        ),
        "mdc-chip-set--input": (
          /*input*/
          n[7]
        )
      })
    },
    { role: "grid" },
    /*$$restProps*/
    n[20]
  ], f = {};
  for (let h = 0; h < d.length; h += 1)
    f = Y(f, d[h]);
  return {
    c() {
      e = ne("div");
      for (let h = 0; h < t.length; h += 1)
        t[h].c();
      ce(e, f);
    },
    m(h, p) {
      V(h, e, p);
      for (let b = 0; b < t.length; b += 1)
        t[b] && t[b].m(e, null);
      n[26](e), a = !0, s || (o = [
        fe(l = Qe.call(
          null,
          e,
          /*use*/
          n[1]
        )),
        fe(
          /*forwardEvents*/
          n[9].call(null, e)
        ),
        oe(
          e,
          "SMUIChipsChip:mount",
          /*handleChipMount*/
          n[14]
        ),
        oe(
          e,
          "SMUIChipsChip:unmount",
          /*handleChipUnmount*/
          n[15]
        ),
        oe(
          e,
          "SMUIChip:interaction",
          /*handleChipInteraction*/
          n[16]
        ),
        oe(
          e,
          "SMUIChip:selection",
          /*handleChipSelection*/
          n[17]
        ),
        oe(
          e,
          "SMUIChip:removal",
          /*handleChipRemoval*/
          n[18]
        ),
        oe(
          e,
          "SMUIChip:navigation",
          /*handleChipNavigation*/
          n[19]
        )
      ], s = !0);
    },
    p(h, p) {
      p[0] & /*chips, initialSelected, $$scope, key*/
      134218761 && (u = jt(
        /*chips*/
        h[0]
      ), Pe(), t = br(t, p, c, 1, h, u, i, e, _r, ns, null, es), He()), ce(e, f = he(d, [
        (!a || p[0] & /*className, nonInteractive, choice, filter, input*/
        244 && r !== (r = le({
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
      ])), l && me(l.update) && p[0] & /*use*/
      2 && l.update.call(
        null,
        /*use*/
        h[1]
      );
    },
    i(h) {
      if (!a) {
        for (let p = 0; p < u.length; p += 1)
          E(t[p]);
        a = !0;
      }
    },
    o(h) {
      for (let p = 0; p < t.length; p += 1)
        S(t[p]);
      a = !1;
    },
    d(h) {
      h && B(e);
      for (let p = 0; p < t.length; p += 1)
        t[p].d();
      n[26](null), s = !1, Ze(o);
    }
  };
}
function is(n, e) {
  let t = new Set(n);
  for (let i of e)
    t.delete(i);
  return t;
}
function bf(n, e, t) {
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
  let r = pe(e, i), l, a, s, { $$slots: o = {}, $$scope: u } = e;
  const { MDCChipSetFoundation: c } = Er, d = nt(Je());
  let { use: f = [] } = e, { class: h = "" } = e, { chips: p = [] } = e, { key: b = (K) => K } = e, { selected: m = void 0 } = e, { nonInteractive: C = !1 } = e, { choice: v = !1 } = e, { filter: T = !1 } = e, { input: y = !1 } = e, k, R, _ = {}, A = /* @__PURE__ */ new WeakMap(), w = p.map((K) => v && m === K || T && m.indexOf(K) !== -1);
  const I = Lt(C);
  it(n, I, (K) => t(31, s = K)), Ve("SMUI:chips:nonInteractive", I);
  const g = Lt(v);
  it(n, g, (K) => t(30, a = K)), Ve("SMUI:chips:choice", g);
  const D = Lt(T);
  it(n, D, (K) => t(29, l = K)), Ve("SMUI:chips:filter", D);
  let O = T ? new Set(m) : m;
  ot(() => {
    if (t(23, R = new c({
      announceMessage: lo,
      focusChipPrimaryActionAtIndex: (K) => {
        var x;
        (x = j(p[K])) === null || x === void 0 || x.focusPrimaryAction();
      },
      focusChipTrailingActionAtIndex: (K) => {
        var x;
        (x = j(p[K])) === null || x === void 0 || x.focusTrailingAction();
      },
      getChipListCount: () => p.length,
      getIndexOfChipById: (K) => p.indexOf(K),
      hasClass: (K) => be().classList.contains(K),
      isRTL: () => getComputedStyle(be()).getPropertyValue("direction") === "rtl",
      removeChipAtIndex: (K) => {
        K >= 0 && K < p.length && (v && m === p[K] ? t(21, m = null) : T && m.indexOf(p[K]) !== -1 && (m.splice(m.indexOf(p[K]), 1), t(21, m)), p.splice(K, 1), t(0, p));
      },
      removeFocusFromChipAtIndex: (K) => {
        var x;
        (x = j(p[K])) === null || x === void 0 || x.removeFocus();
      },
      selectChipAtIndex: (K, x, _e) => {
        var ye;
        if (K >= 0 && K < p.length) {
          if (T) {
            const Ne = m.indexOf(p[K]);
            x && Ne === -1 ? (m.push(p[K]), t(21, m)) : !x && Ne !== -1 && (m.splice(Ne, 1), t(21, m));
          } else
            v && (x || m === p[K]) && t(21, m = x ? p[K] : null);
          (ye = j(p[K])) === null || ye === void 0 || ye.setSelectedFromChipSet(x, _e);
        }
      }
    })), R.init(), v && m != null)
      R.select(m);
    else if (T && m.length)
      for (const K of m)
        R.select(K);
    return () => {
      R.destroy();
    };
  });
  function N(K) {
    const x = K.detail;
    ue(x.chipId, x);
  }
  function W(K) {
    const x = K.detail;
    ke(x.chipId);
  }
  function G(K) {
    R && R.handleChipInteraction(K.detail);
  }
  function z(K) {
    R && R.handleChipSelection(K.detail);
  }
  function F(K) {
    R && R.handleChipRemoval(K.detail);
  }
  function L(K) {
    R && R.handleChipNavigation(K.detail);
  }
  function j(K) {
    return K instanceof Object ? A.get(K) : _[K];
  }
  function ue(K, x) {
    K instanceof Object ? A.set(K, x) : _[K] = x;
  }
  function ke(K) {
    K instanceof Object ? A.delete(K) : delete _[K];
  }
  function be() {
    return k;
  }
  function Ye(K) {
    se[K ? "unshift" : "push"](() => {
      k = K, t(8, k);
    });
  }
  return n.$$set = (K) => {
    e = Y(Y({}, e), tt(K)), t(20, r = pe(e, i)), "use" in K && t(1, f = K.use), "class" in K && t(2, h = K.class), "chips" in K && t(0, p = K.chips), "key" in K && t(3, b = K.key), "selected" in K && t(21, m = K.selected), "nonInteractive" in K && t(4, C = K.nonInteractive), "choice" in K && t(5, v = K.choice), "filter" in K && t(6, T = K.filter), "input" in K && t(7, y = K.input), "$$scope" in K && t(27, u = K.$$scope);
  }, n.$$.update = () => {
    if (n.$$.dirty[0] & /*nonInteractive*/
    16 && Rt(I, s = C, s), n.$$.dirty[0] & /*choice*/
    32 && Rt(g, a = v, a), n.$$.dirty[0] & /*filter*/
    64 && Rt(D, l = T, l), n.$$.dirty[0] & /*instance, choice, previousSelected, selected*/
    27263008 && R && v && O !== m && (t(24, O = m), R.select(m)), n.$$.dirty[0] & /*instance, filter, selected, previousSelected, chips*/
    27263041 && R && T) {
      const K = new Set(m), x = is(O, K), _e = is(K, O);
      if (x.size || _e.size) {
        t(24, O = K);
        for (let ye of x)
          p.indexOf(ye) !== -1 && R.handleChipSelection({ chipId: ye, selected: !1 });
        for (let ye of _e)
          R.handleChipSelection({ chipId: ye, selected: !0 });
      }
    }
  }, [
    p,
    f,
    h,
    b,
    C,
    v,
    T,
    y,
    k,
    d,
    w,
    I,
    g,
    D,
    N,
    W,
    G,
    z,
    F,
    L,
    r,
    m,
    be,
    R,
    O,
    o,
    Ye,
    u
  ];
}
class If extends Re {
  constructor(e) {
    super(), Oe(
      this,
      e,
      bf,
      _f,
      Ee,
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
function vf(n) {
  let e, t, i, r, l, a, s, o = [
    {
      class: r = le({
        [
          /*className*/
          n[1]
        ]: !0,
        "mdc-chip__checkmark": !0
      })
    },
    /*$$restProps*/
    n[3]
  ], u = {};
  for (let c = 0; c < o.length; c += 1)
    u = Y(u, o[c]);
  return {
    c() {
      e = ne("span"), t = st("svg"), i = st("path"), U(i, "class", "mdc-chip__checkmark-path"), U(i, "fill", "none"), U(i, "stroke", "black"), U(i, "d", "M1.73,12.91 8.1,19.28 22.79,4.59"), U(t, "class", "mdc-chip__checkmark-svg"), U(t, "viewBox", "-2 -3 30 30"), ce(e, u);
    },
    m(c, d) {
      V(c, e, d), J(e, t), J(t, i), n[5](e), a || (s = fe(l = Qe.call(
        null,
        e,
        /*use*/
        n[0]
      )), a = !0);
    },
    p(c, [d]) {
      ce(e, u = he(o, [
        d & /*className*/
        2 && r !== (r = le({
          [
            /*className*/
            c[1]
          ]: !0,
          "mdc-chip__checkmark": !0
        })) && { class: r },
        d & /*$$restProps*/
        8 && /*$$restProps*/
        c[3]
      ])), l && me(l.update) && d & /*use*/
      1 && l.update.call(
        null,
        /*use*/
        c[0]
      );
    },
    i: $e,
    o: $e,
    d(c) {
      c && B(e), n[5](null), a = !1, s();
    }
  };
}
function Cf(n, e, t) {
  const i = ["use", "class", "getElement"];
  let r = pe(e, i), { use: l = [] } = e, { class: a = "" } = e, s;
  function o() {
    return s;
  }
  function u(c) {
    se[c ? "unshift" : "push"](() => {
      s = c, t(2, s);
    });
  }
  return n.$$set = (c) => {
    e = Y(Y({}, e), tt(c)), t(3, r = pe(e, i)), "use" in c && t(0, l = c.use), "class" in c && t(1, a = c.class);
  }, [l, a, s, r, o, u];
}
class Af extends Re {
  constructor(e) {
    super(), Oe(this, e, Cf, vf, Ee, { use: 0, class: 1, getElement: 4 });
  }
  get getElement() {
    return this.$$.ctx[4];
  }
}
function rs(n) {
  let e, t, i = {};
  return e = new Af({ props: i }), n[23](e), {
    c() {
      ie(e.$$.fragment);
    },
    m(r, l) {
      ee(e, r, l), t = !0;
    },
    p(r, l) {
      const a = {};
      e.$set(a);
    },
    i(r) {
      t || (E(e.$$.fragment, r), t = !0);
    },
    o(r) {
      S(e.$$.fragment, r), t = !1;
    },
    d(r) {
      n[23](null), te(e, r);
    }
  };
}
function Ef(n) {
  let e, t, i, r;
  const l = (
    /*#slots*/
    n[22].default
  ), a = Ie(
    l,
    n,
    /*$$scope*/
    n[21],
    null
  );
  let s = [
    {
      class: i = le({
        [
          /*className*/
          n[1]
        ]: !0,
        "mdc-chip__primary-action": !0
      })
    },
    /*$filter*/
    n[3] || /*$choice*/
    n[2] ? {
      "aria-selected": (
        /*$isSelected*/
        n[10] ? "true" : "false"
      )
    } : {},
    /*roleProps*/
    n[8],
    /*internalAttrs*/
    n[7],
    /*$$restProps*/
    n[16]
  ], o = {};
  for (let u = 0; u < s.length; u += 1)
    o = Y(o, s[u]);
  return {
    c() {
      e = ne("span"), t = ne("span"), a && a.c(), U(t, "class", "mdc-chip__text"), ce(e, o);
    },
    m(u, c) {
      V(u, e, c), J(e, t), a && a.m(t, null), n[24](e), r = !0;
    },
    p(u, c) {
      a && a.p && (!r || c & /*$$scope*/
      2097152) && Ce(
        a,
        l,
        u,
        /*$$scope*/
        u[21],
        r ? ve(
          l,
          /*$$scope*/
          u[21],
          c,
          null
        ) : Ae(
          /*$$scope*/
          u[21]
        ),
        null
      ), ce(e, o = he(s, [
        (!r || c & /*className*/
        2 && i !== (i = le({
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
      S(a, u), r = !1;
    },
    d(u) {
      u && B(e), a && a.d(u), n[24](null);
    }
  };
}
function yf(n) {
  let e, t;
  const i = (
    /*#slots*/
    n[22].default
  ), r = Ie(
    i,
    n,
    /*$$scope*/
    n[21],
    null
  );
  return {
    c() {
      e = ne("span"), r && r.c(), U(e, "class", "mdc-chip__text");
    },
    m(l, a) {
      V(l, e, a), r && r.m(e, null), t = !0;
    },
    p(l, a) {
      r && r.p && (!t || a & /*$$scope*/
      2097152) && Ce(
        r,
        i,
        l,
        /*$$scope*/
        l[21],
        t ? ve(
          i,
          /*$$scope*/
          l[21],
          a,
          null
        ) : Ae(
          /*$$scope*/
          l[21]
        ),
        null
      );
    },
    i(l) {
      t || (E(r, l), t = !0);
    },
    o(l) {
      S(r, l), t = !1;
    },
    d(l) {
      l && B(e), r && r.d(l);
    }
  };
}
function Sf(n) {
  let e, t, i, r, l, a, s, o, u = (
    /*$filter*/
    n[3] && rs(n)
  );
  const c = [yf, Ef], d = [];
  function f(h, p) {
    return (
      /*$nonInteractive*/
      h[9] ? 0 : 1
    );
  }
  return i = f(n), r = d[i] = c[i](n), {
    c() {
      u && u.c(), e = ae(), t = ne("span"), r.c(), U(t, "role", "gridcell");
    },
    m(h, p) {
      u && u.m(h, p), V(h, e, p), V(h, t, p), d[i].m(t, null), n[25](t), a = !0, s || (o = [
        fe(l = Qe.call(
          null,
          t,
          /*use*/
          n[0]
        )),
        fe(
          /*forwardEvents*/
          n[11].call(null, t)
        )
      ], s = !0);
    },
    p(h, [p]) {
      /*$filter*/
      h[3] ? u ? (u.p(h, p), p & /*$filter*/
      8 && E(u, 1)) : (u = rs(h), u.c(), E(u, 1), u.m(e.parentNode, e)) : u && (Pe(), S(u, 1, 1, () => {
        u = null;
      }), He());
      let b = i;
      i = f(h), i === b ? d[i].p(h, p) : (Pe(), S(d[b], 1, 1, () => {
        d[b] = null;
      }), He(), r = d[i], r ? r.p(h, p) : (r = d[i] = c[i](h), r.c()), E(r, 1), r.m(t, null)), l && me(l.update) && p & /*use*/
      1 && l.update.call(
        null,
        /*use*/
        h[0]
      );
    },
    i(h) {
      a || (E(u), E(r), a = !0);
    },
    o(h) {
      S(u), S(r), a = !1;
    },
    d(h) {
      h && (B(e), B(t)), u && u.d(h), d[i].d(), n[25](null), s = !1, Ze(o);
    }
  };
}
function Tf(n, e, t) {
  let i;
  const r = ["use", "class", "tabindex", "focus", "getInput", "getElement"];
  let l = pe(e, r), a, s, o, u, { $$slots: c = {}, $$scope: d } = e;
  const f = nt(Je());
  let { use: h = [] } = e, { class: p = "" } = e, { tabindex: b = Ke("SMUI:chips:chip:focusable") ? 0 : -1 } = e, m, C, v, T = {};
  const y = Ke("SMUI:chips:nonInteractive");
  it(n, y, (G) => t(9, o = G));
  const k = Ke("SMUI:chips:choice");
  it(n, k, (G) => t(2, a = G));
  const R = Ke("SMUI:chips:filter");
  it(n, R, (G) => t(3, s = G));
  const _ = Ke("SMUI:chips:chip:isSelected");
  it(n, _, (G) => t(10, u = G)), ot(() => {
    let G = { focus: I, addAttr: A };
    return ge(D(), "SMUIChipsChipPrimaryAction:mount", G), () => {
      ge(D(), "SMUIChipsChipPrimaryAction:unmount", G);
    };
  });
  function A(G, z) {
    T[G] !== z && t(7, T[G] = z, T);
  }
  function w(G) {
    T.tabindex !== m.getAttribute("tabindex") ? gr().then(G) : G();
  }
  function I() {
    w(() => {
      v && v.focus();
    });
  }
  function g() {
    return C && C.getElement();
  }
  function D() {
    return m;
  }
  function O(G) {
    se[G ? "unshift" : "push"](() => {
      C = G, t(5, C);
    });
  }
  function N(G) {
    se[G ? "unshift" : "push"](() => {
      v = G, t(6, v);
    });
  }
  function W(G) {
    se[G ? "unshift" : "push"](() => {
      m = G, t(4, m);
    });
  }
  return n.$$set = (G) => {
    e = Y(Y({}, e), tt(G)), t(16, l = pe(e, r)), "use" in G && t(0, h = G.use), "class" in G && t(1, p = G.class), "tabindex" in G && t(17, b = G.tabindex), "$$scope" in G && t(21, d = G.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty & /*$filter, $choice, tabindex*/
    131084 && t(8, i = {
      role: s ? "checkbox" : a ? "radio" : "button",
      tabindex: b
    });
  }, [
    h,
    p,
    a,
    s,
    m,
    C,
    v,
    T,
    i,
    o,
    u,
    f,
    y,
    k,
    R,
    _,
    l,
    b,
    I,
    g,
    D,
    d,
    c,
    O,
    N,
    W
  ];
}
class Lf extends Re {
  constructor(e) {
    super(), Oe(this, e, Tf, Sf, Ee, {
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
function ls(n) {
  let e;
  return {
    c() {
      e = ne("span"), U(e, "class", "mdc-deprecated-chip-trailing-action__touch");
    },
    m(t, i) {
      V(t, e, i);
    },
    d(t) {
      t && B(e);
    }
  };
}
function Of(n) {
  let e, t, i, r, l, a, s, o, u, c, d, f, h, p, b, m = (
    /*touch*/
    n[4] && ls()
  );
  const C = (
    /*#slots*/
    n[23].default
  ), v = Ie(
    C,
    n,
    /*$$scope*/
    n[22],
    null
  );
  let T = [
    {
      class: a = le({
        [
          /*icon$class*/
          n[7]
        ]: !0,
        "mdc-deprecated-chip-trailing-action__icon": !0
      })
    },
    Be(
      /*$$restProps*/
      n[17],
      "icon$"
    )
  ], y = {};
  for (let _ = 0; _ < T.length; _ += 1)
    y = Y(y, T[_]);
  let k = [
    { type: "button" },
    {
      class: o = le({
        [
          /*className*/
          n[1]
        ]: !0,
        "mdc-deprecated-chip-trailing-action": !0,
        .../*internalClasses*/
        n[10]
      })
    },
    {
      style: u = Object.entries(
        /*internalStyles*/
        n[11]
      ).map(ss).concat([
        /*style*/
        n[2]
      ]).join(" ")
    },
    {
      "aria-hidden": c = /*nonNavigable*/
      n[5] ? "true" : void 0
    },
    { tabindex: "-1" },
    /*internalAttrs*/
    n[12],
    Gt(
      /*$$restProps*/
      n[17],
      ["icon$"]
    )
  ], R = {};
  for (let _ = 0; _ < k.length; _ += 1)
    R = Y(R, k[_]);
  return {
    c() {
      e = ne("button"), t = ne("span"), i = ae(), m && m.c(), r = ae(), l = ne("span"), v && v.c(), U(t, "class", "mdc-deprecated-chip-trailing-action__ripple"), ce(l, y), ce(e, R);
    },
    m(_, A) {
      V(_, e, A), J(e, t), J(e, i), m && m.m(e, null), J(e, r), J(e, l), v && v.m(l, null), e.autofocus && e.focus(), n[24](e), h = !0, p || (b = [
        fe(s = Qe.call(
          null,
          l,
          /*icon$use*/
          n[6]
        )),
        fe(d = kt.call(null, e, {
          ripple: (
            /*ripple*/
            n[3]
          ),
          unbounded: !1,
          addClass: (
            /*addClass*/
            n[14]
          ),
          removeClass: (
            /*removeClass*/
            n[15]
          ),
          addStyle: (
            /*addStyle*/
            n[16]
          )
        })),
        fe(f = Qe.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        fe(
          /*forwardEvents*/
          n[13].call(null, e)
        ),
        oe(e, "click", function() {
          me(
            /*instance*/
            n[9] && /*instance*/
            n[9].handleClick.bind(
              /*instance*/
              n[9]
            )
          ) && /*instance*/
          (n[9] && /*instance*/
          n[9].handleClick.bind(
            /*instance*/
            n[9]
          )).apply(this, arguments);
        }),
        oe(e, "keydown", function() {
          me(
            /*instance*/
            n[9] && /*instance*/
            n[9].handleKeydown.bind(
              /*instance*/
              n[9]
            )
          ) && /*instance*/
          (n[9] && /*instance*/
          n[9].handleKeydown.bind(
            /*instance*/
            n[9]
          )).apply(this, arguments);
        })
      ], p = !0);
    },
    p(_, [A]) {
      n = _, /*touch*/
      n[4] ? m || (m = ls(), m.c(), m.m(e, r)) : m && (m.d(1), m = null), v && v.p && (!h || A & /*$$scope*/
      4194304) && Ce(
        v,
        C,
        n,
        /*$$scope*/
        n[22],
        h ? ve(
          C,
          /*$$scope*/
          n[22],
          A,
          null
        ) : Ae(
          /*$$scope*/
          n[22]
        ),
        null
      ), ce(l, y = he(T, [
        (!h || A & /*icon$class*/
        128 && a !== (a = le({
          [
            /*icon$class*/
            n[7]
          ]: !0,
          "mdc-deprecated-chip-trailing-action__icon": !0
        }))) && { class: a },
        A & /*$$restProps*/
        131072 && Be(
          /*$$restProps*/
          n[17],
          "icon$"
        )
      ])), s && me(s.update) && A & /*icon$use*/
      64 && s.update.call(
        null,
        /*icon$use*/
        n[6]
      ), ce(e, R = he(k, [
        { type: "button" },
        (!h || A & /*className, internalClasses*/
        1026 && o !== (o = le({
          [
            /*className*/
            n[1]
          ]: !0,
          "mdc-deprecated-chip-trailing-action": !0,
          .../*internalClasses*/
          n[10]
        }))) && { class: o },
        (!h || A & /*internalStyles, style*/
        2052 && u !== (u = Object.entries(
          /*internalStyles*/
          n[11]
        ).map(ss).concat([
          /*style*/
          n[2]
        ]).join(" "))) && { style: u },
        (!h || A & /*nonNavigable*/
        32 && c !== (c = /*nonNavigable*/
        n[5] ? "true" : void 0)) && { "aria-hidden": c },
        { tabindex: "-1" },
        A & /*internalAttrs*/
        4096 && /*internalAttrs*/
        n[12],
        A & /*$$restProps*/
        131072 && Gt(
          /*$$restProps*/
          n[17],
          ["icon$"]
        )
      ])), d && me(d.update) && A & /*ripple*/
      8 && d.update.call(null, {
        ripple: (
          /*ripple*/
          n[3]
        ),
        unbounded: !1,
        addClass: (
          /*addClass*/
          n[14]
        ),
        removeClass: (
          /*removeClass*/
          n[15]
        ),
        addStyle: (
          /*addStyle*/
          n[16]
        )
      }), f && me(f.update) && A & /*use*/
      1 && f.update.call(
        null,
        /*use*/
        n[0]
      );
    },
    i(_) {
      h || (E(v, _), h = !0);
    },
    o(_) {
      S(v, _), h = !1;
    },
    d(_) {
      _ && B(e), m && m.d(), v && v.d(_), n[24](null), p = !1, Ze(b);
    }
  };
}
const ss = ([n, e]) => `${n}: ${e};`;
function Rf(n, e, t) {
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
  let r = pe(e, i), { $$slots: l = {}, $$scope: a } = e;
  const { MDCChipTrailingActionFoundation: s } = Er, o = nt(Je());
  let { use: u = [] } = e, { class: c = "" } = e, { style: d = "" } = e, { ripple: f = !0 } = e, { touch: h = !1 } = e, { nonNavigable: p = !1 } = e, { icon$use: b = [] } = e, { icon$class: m = "" } = e, C, v, T = {}, y = {}, k = {};
  ot(() => {
    t(9, v = new s({
      focus: () => {
        const F = W();
        g(() => {
          F.focus();
        });
      },
      getAttribute: w,
      notifyInteraction: (F) => ge(W(), "SMUIChipTrailingAction:interaction", { trigger: F }, void 0, !0),
      notifyNavigation: (F) => {
        ge(W(), "SMUIChipTrailingAction:navigation", { key: F }, void 0, !0);
      },
      setAttribute: I
    }));
    const z = { isNavigable: D, focus: O, removeFocus: N };
    return ge(W(), "SMUIChipsChipTrailingAction:mount", z), v.init(), () => {
      ge(W(), "SMUIChipsChipTrailingAction:unmount", z), v.destroy();
    };
  });
  function R(z) {
    T[z] || t(10, T[z] = !0, T);
  }
  function _(z) {
    (!(z in T) || T[z]) && t(10, T[z] = !1, T);
  }
  function A(z, F) {
    y[z] != F && (F === "" || F == null ? (delete y[z], t(11, y)) : t(11, y[z] = F, y));
  }
  function w(z) {
    var F;
    return z in k ? (F = k[z]) !== null && F !== void 0 ? F : null : W().getAttribute(z);
  }
  function I(z, F) {
    k[z] !== F && t(12, k[z] = F, k);
  }
  function g(z) {
    k.tabindex !== C.getAttribute("tabindex") ? gr().then(z) : z();
  }
  function D() {
    return v.isNavigable();
  }
  function O() {
    v.focus();
  }
  function N() {
    v.removeFocus();
  }
  function W() {
    return C;
  }
  function G(z) {
    se[z ? "unshift" : "push"](() => {
      C = z, t(8, C);
    });
  }
  return n.$$set = (z) => {
    e = Y(Y({}, e), tt(z)), t(17, r = pe(e, i)), "use" in z && t(0, u = z.use), "class" in z && t(1, c = z.class), "style" in z && t(2, d = z.style), "ripple" in z && t(3, f = z.ripple), "touch" in z && t(4, h = z.touch), "nonNavigable" in z && t(5, p = z.nonNavigable), "icon$use" in z && t(6, b = z.icon$use), "icon$class" in z && t(7, m = z.icon$class), "$$scope" in z && t(22, a = z.$$scope);
  }, [
    u,
    c,
    d,
    f,
    h,
    p,
    b,
    m,
    C,
    v,
    T,
    y,
    k,
    o,
    R,
    _,
    A,
    r,
    D,
    O,
    N,
    W,
    a,
    l,
    G
  ];
}
class kf extends Re {
  constructor(e) {
    super(), Oe(this, e, Rf, Of, Ee, {
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
function Df(n) {
  let e, t;
  const i = (
    /*#slots*/
    n[1].default
  ), r = Ie(
    i,
    n,
    /*$$scope*/
    n[0],
    null
  );
  return {
    c() {
      e = ne("span"), r && r.c(), U(e, "class", "oscd-icon");
    },
    m(l, a) {
      V(l, e, a), r && r.m(e, null), t = !0;
    },
    p(l, [a]) {
      r && r.p && (!t || a & /*$$scope*/
      1) && Ce(
        r,
        i,
        l,
        /*$$scope*/
        l[0],
        t ? ve(
          i,
          /*$$scope*/
          l[0],
          a,
          null
        ) : Ae(
          /*$$scope*/
          l[0]
        ),
        null
      );
    },
    i(l) {
      t || (E(r, l), t = !0);
    },
    o(l) {
      S(r, l), t = !1;
    },
    d(l) {
      l && B(e), r && r.d(l);
    }
  };
}
function Mf(n, e, t) {
  let { $$slots: i = {}, $$scope: r } = e;
  return n.$$set = (l) => {
    "$$scope" in l && t(0, r = l.$$scope);
  }, [r, i];
}
class on extends Re {
  constructor(e) {
    super(), Oe(this, e, Mf, Df, Ee, {});
  }
}
function Ff(n) {
  let e, t;
  return {
    c() {
      e = st("svg"), t = st("path"), U(t, "d", "M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"), U(
        e,
        "style",
        /*svgStyles*/
        n[0]
      ), U(e, "xmlns", "http://www.w3.org/2000/svg"), U(e, "height", "24px"), U(e, "viewBox", "0 -960 960 960"), U(e, "width", "24px"), U(e, "fill", "#e8eaed");
    },
    m(i, r) {
      V(i, e, r), J(e, t);
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
function Nf(n) {
  let e, t;
  return e = new on({
    props: {
      $$slots: { default: [Ff] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      ie(e.$$.fragment);
    },
    m(i, r) {
      ee(e, i, r), t = !0;
    },
    p(i, [r]) {
      const l = {};
      r & /*$$scope, svgStyles*/
      3 && (l.$$scope = { dirty: r, ctx: i }), e.$set(l);
    },
    i(i) {
      t || (E(e.$$.fragment, i), t = !0);
    },
    o(i) {
      S(e.$$.fragment, i), t = !1;
    },
    d(i) {
      te(e, i);
    }
  };
}
function Uf(n, e, t) {
  let { svgStyles: i = "" } = e;
  return n.$$set = (r) => {
    "svgStyles" in r && t(0, i = r.svgStyles);
  }, [i];
}
class wf extends Re {
  constructor(e) {
    super(), Oe(this, e, Uf, Nf, Ee, { svgStyles: 0 });
  }
}
function Pf(n) {
  let e, t;
  return {
    c() {
      e = st("svg"), t = st("path"), U(t, "d", "m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"), U(
        e,
        "style",
        /*svgStyles*/
        n[0]
      ), U(e, "xmlns", "http://www.w3.org/2000/svg"), U(e, "viewBox", "0 -960 960 960"), U(e, "width", "24px");
    },
    m(i, r) {
      V(i, e, r), J(e, t);
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
function Hf(n) {
  let e, t;
  return e = new on({
    props: {
      $$slots: { default: [Pf] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      ie(e.$$.fragment);
    },
    m(i, r) {
      ee(e, i, r), t = !0;
    },
    p(i, [r]) {
      const l = {};
      r & /*$$scope, svgStyles*/
      3 && (l.$$scope = { dirty: r, ctx: i }), e.$set(l);
    },
    i(i) {
      t || (E(e.$$.fragment, i), t = !0);
    },
    o(i) {
      S(e.$$.fragment, i), t = !1;
    },
    d(i) {
      te(e, i);
    }
  };
}
function Bf(n, e, t) {
  let { svgStyles: i = "" } = e;
  return n.$$set = (r) => {
    "svgStyles" in r && t(0, i = r.svgStyles);
  }, [i];
}
class yr extends Re {
  constructor(e) {
    super(), Oe(this, e, Bf, Hf, Ee, { svgStyles: 0 });
  }
}
function Vf(n) {
  let e, t;
  return {
    c() {
      e = st("svg"), t = st("path"), U(t, "d", "M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z"), U(
        e,
        "style",
        /*svgStyles*/
        n[0]
      ), U(e, "xmlns", "http://www.w3.org/2000/svg"), U(e, "viewBox", "0 -960 960 960");
    },
    m(i, r) {
      V(i, e, r), J(e, t);
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
function jf(n) {
  let e, t;
  return e = new on({
    props: {
      $$slots: { default: [Vf] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      ie(e.$$.fragment);
    },
    m(i, r) {
      ee(e, i, r), t = !0;
    },
    p(i, [r]) {
      const l = {};
      r & /*$$scope, svgStyles*/
      3 && (l.$$scope = { dirty: r, ctx: i }), e.$set(l);
    },
    i(i) {
      t || (E(e.$$.fragment, i), t = !0);
    },
    o(i) {
      S(e.$$.fragment, i), t = !1;
    },
    d(i) {
      te(e, i);
    }
  };
}
function Gf(n, e, t) {
  let { svgStyles: i = "" } = e;
  return n.$$set = (r) => {
    "svgStyles" in r && t(0, i = r.svgStyles);
  }, [i];
}
class qf extends Re {
  constructor(e) {
    super(), Oe(this, e, Gf, jf, Ee, { svgStyles: 0 });
  }
}
function Kf(n) {
  let e, t;
  return {
    c() {
      e = st("svg"), t = st("path"), U(t, "d", "m590-160 80 80H240q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h360l200 240v480q0 20-8.5 36.5T768-96L560-302q-17 11-37 16.5t-43 5.5q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 23-5.5 43T618-360l102 104v-356L562-800H240v640h350ZM480-360q33 0 56.5-23.5T560-440q0-33-23.5-56.5T480-520q-33 0-56.5 23.5T400-440q0 33 23.5 56.5T480-360Zm0-80Zm0 0Z"), U(
        e,
        "style",
        /*svgStyles*/
        n[0]
      ), U(e, "xmlns", "http://www.w3.org/2000/svg"), U(e, "viewBox", "0 -960 960 960");
    },
    m(i, r) {
      V(i, e, r), J(e, t);
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
function Wf(n) {
  let e, t;
  return e = new on({
    props: {
      $$slots: { default: [Kf] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      ie(e.$$.fragment);
    },
    m(i, r) {
      ee(e, i, r), t = !0;
    },
    p(i, [r]) {
      const l = {};
      r & /*$$scope, svgStyles*/
      3 && (l.$$scope = { dirty: r, ctx: i }), e.$set(l);
    },
    i(i) {
      t || (E(e.$$.fragment, i), t = !0);
    },
    o(i) {
      S(e.$$.fragment, i), t = !1;
    },
    d(i) {
      te(e, i);
    }
  };
}
function zf(n, e, t) {
  let { svgStyles: i = "" } = e;
  return n.$$set = (r) => {
    "svgStyles" in r && t(0, i = r.svgStyles);
  }, [i];
}
class Yf extends Re {
  constructor(e) {
    super(), Oe(this, e, zf, Wf, Ee, { svgStyles: 0 });
  }
}
function Xf(n) {
  let e, t;
  return {
    c() {
      e = st("svg"), t = st("path"), U(t, "d", "M480-160q-134 0-227-93t-93-227q0-134 93-227t227-93q69 0 132 28.5T720-690v-110h80v280H520v-80h168q-32-56-87.5-88T480-720q-100 0-170 70t-70 170q0 100 70 170t170 70q77 0 139-44t87-116h84q-28 106-114 173t-196 67Z"), U(e, "xmlns", "http://www.w3.org/2000/svg"), U(e, "height", "24px"), U(e, "viewBox", "0 -960 960 960"), U(e, "width", "24px"), U(e, "fill", "#e8eaed");
    },
    m(i, r) {
      V(i, e, r), J(e, t);
    },
    p: $e,
    d(i) {
      i && B(e);
    }
  };
}
function Zf(n) {
  let e, t;
  return e = new on({
    props: {
      $$slots: { default: [Xf] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      ie(e.$$.fragment);
    },
    m(i, r) {
      ee(e, i, r), t = !0;
    },
    p(i, [r]) {
      const l = {};
      r & /*$$scope*/
      2 && (l.$$scope = { dirty: r, ctx: i }), e.$set(l);
    },
    i(i) {
      t || (E(e.$$.fragment, i), t = !0);
    },
    o(i) {
      S(e.$$.fragment, i), t = !1;
    },
    d(i) {
      te(e, i);
    }
  };
}
function Qf(n, e, t) {
  let { svgStyles: i = "" } = e;
  return n.$$set = (r) => {
    "svgStyles" in r && t(0, i = r.svgStyles);
  }, [i];
}
class Jf extends Re {
  constructor(e) {
    super(), Oe(this, e, Qf, Zf, Ee, { svgStyles: 0 });
  }
}
function xf(n) {
  let e, t;
  return {
    c() {
      e = st("svg"), t = st("path"), U(t, "d", "M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"), U(
        e,
        "style",
        /*svgStyles*/
        n[0]
      ), U(e, "xmlns", "http://www.w3.org/2000/svg"), U(e, "viewBox", "0 -960 960 960");
    },
    m(i, r) {
      V(i, e, r), J(e, t);
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
function $f(n) {
  let e, t;
  return e = new on({
    props: {
      $$slots: { default: [xf] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      ie(e.$$.fragment);
    },
    m(i, r) {
      ee(e, i, r), t = !0;
    },
    p(i, [r]) {
      const l = {};
      r & /*$$scope, svgStyles*/
      3 && (l.$$scope = { dirty: r, ctx: i }), e.$set(l);
    },
    i(i) {
      t || (E(e.$$.fragment, i), t = !0);
    },
    o(i) {
      S(e.$$.fragment, i), t = !1;
    },
    d(i) {
      te(e, i);
    }
  };
}
function eh(n, e, t) {
  let { svgStyles: i = "" } = e;
  return n.$$set = (r) => {
    "svgStyles" in r && t(0, i = r.svgStyles);
  }, [i];
}
class th extends Re {
  constructor(e) {
    super(), Oe(this, e, eh, $f, Ee, { svgStyles: 0 });
  }
}
function nh(n) {
  let e, t;
  return {
    c() {
      e = st("svg"), t = st("path"), U(t, "d", "M200-440v-80h560v80H200Z"), U(e, "xmlns", "http://www.w3.org/2000/svg"), U(e, "height", "24px"), U(e, "viewBox", "0 -960 960 960"), U(e, "width", "24px"), U(e, "fill", "#e8eaed");
    },
    m(i, r) {
      V(i, e, r), J(e, t);
    },
    p: $e,
    d(i) {
      i && B(e);
    }
  };
}
function ih(n) {
  let e, t;
  return e = new on({
    props: {
      $$slots: { default: [nh] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      ie(e.$$.fragment);
    },
    m(i, r) {
      ee(e, i, r), t = !0;
    },
    p(i, [r]) {
      const l = {};
      r & /*$$scope*/
      2 && (l.$$scope = { dirty: r, ctx: i }), e.$set(l);
    },
    i(i) {
      t || (E(e.$$.fragment, i), t = !0);
    },
    o(i) {
      S(e.$$.fragment, i), t = !1;
    },
    d(i) {
      te(e, i);
    }
  };
}
function rh(n, e, t) {
  let { svgStyles: i = "" } = e;
  return n.$$set = (r) => {
    "svgStyles" in r && t(0, i = r.svgStyles);
  }, [i];
}
class lh extends Re {
  constructor(e) {
    super(), Oe(this, e, rh, ih, Ee, { svgStyles: 0 });
  }
}
function sh(n) {
  let e, t;
  return {
    c() {
      e = st("svg"), t = st("path"), U(t, "d", "M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"), U(
        e,
        "style",
        /*svgStyles*/
        n[0]
      ), U(e, "xmlns", "http://www.w3.org/2000/svg"), U(e, "viewBox", "0 -960 960 960");
    },
    m(i, r) {
      V(i, e, r), J(e, t);
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
function ah(n) {
  let e, t;
  return e = new on({
    props: {
      $$slots: { default: [sh] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      ie(e.$$.fragment);
    },
    m(i, r) {
      ee(e, i, r), t = !0;
    },
    p(i, [r]) {
      const l = {};
      r & /*$$scope, svgStyles*/
      3 && (l.$$scope = { dirty: r, ctx: i }), e.$set(l);
    },
    i(i) {
      t || (E(e.$$.fragment, i), t = !0);
    },
    o(i) {
      S(e.$$.fragment, i), t = !1;
    },
    d(i) {
      te(e, i);
    }
  };
}
function oh(n, e, t) {
  let { svgStyles: i = "" } = e;
  return n.$$set = (r) => {
    "svgStyles" in r && t(0, i = r.svgStyles);
  }, [i];
}
class uh extends Re {
  constructor(e) {
    super(), Oe(this, e, oh, ah, Ee, { svgStyles: 0 });
  }
}
function ch(n) {
  let e, t;
  return {
    c() {
      e = st("svg"), t = st("path"), U(t, "d", "M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"), U(
        e,
        "style",
        /*svgStyles*/
        n[0]
      ), U(e, "xmlns", "http://www.w3.org/2000/svg"), U(e, "viewBox", "0 -960 960 960");
    },
    m(i, r) {
      V(i, e, r), J(e, t);
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
function dh(n) {
  let e, t;
  return e = new on({
    props: {
      $$slots: { default: [ch] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      ie(e.$$.fragment);
    },
    m(i, r) {
      ee(e, i, r), t = !0;
    },
    p(i, [r]) {
      const l = {};
      r & /*$$scope, svgStyles*/
      3 && (l.$$scope = { dirty: r, ctx: i }), e.$set(l);
    },
    i(i) {
      t || (E(e.$$.fragment, i), t = !0);
    },
    o(i) {
      S(e.$$.fragment, i), t = !1;
    },
    d(i) {
      te(e, i);
    }
  };
}
function fh(n, e, t) {
  let { svgStyles: i = "" } = e;
  return n.$$set = (r) => {
    "svgStyles" in r && t(0, i = r.svgStyles);
  }, [i];
}
class hh extends Re {
  constructor(e) {
    super(), Oe(this, e, fh, dh, Ee, { svgStyles: 0 });
  }
}
function mh(n) {
  let e;
  return {
    c() {
      e = at(
        /*title*/
        n[0]
      );
    },
    m(t, i) {
      V(t, e, i);
    },
    p(t, i) {
      i & /*title*/
      1 && At(
        e,
        /*title*/
        t[0]
      );
    },
    d(t) {
      t && B(e);
    }
  };
}
function as(n) {
  let e, t;
  return e = new kf({
    props: {
      $$slots: { default: [ph] },
      $$scope: { ctx: n }
    }
  }), e.$on("click", function() {
    me(
      /*callback*/
      n[2]
    ) && n[2].apply(this, arguments);
  }), {
    c() {
      ie(e.$$.fragment);
    },
    m(i, r) {
      ee(e, i, r), t = !0;
    },
    p(i, r) {
      n = i;
      const l = {};
      r & /*$$scope*/
      16 && (l.$$scope = { dirty: r, ctx: n }), e.$set(l);
    },
    i(i) {
      t || (E(e.$$.fragment, i), t = !0);
    },
    o(i) {
      S(e.$$.fragment, i), t = !1;
    },
    d(i) {
      te(e, i);
    }
  };
}
function ph(n) {
  let e, t;
  return e = new yr({
    props: {
      svgStyles: "margin-left: 0; fill: unset;"
    }
  }), {
    c() {
      ie(e.$$.fragment);
    },
    m(i, r) {
      ee(e, i, r), t = !0;
    },
    p: $e,
    i(i) {
      t || (E(e.$$.fragment, i), t = !0);
    },
    o(i) {
      S(e.$$.fragment, i), t = !1;
    },
    d(i) {
      te(e, i);
    }
  };
}
function gh(n) {
  let e, t, i, r;
  e = new Lf({
    props: {
      $$slots: { default: [mh] },
      $$scope: { ctx: n }
    }
  });
  let l = (
    /*closeable*/
    n[1] && !/*disabled*/
    n[3] && as(n)
  );
  return {
    c() {
      ie(e.$$.fragment), t = ae(), l && l.c(), i = Xe();
    },
    m(a, s) {
      ee(e, a, s), V(a, t, s), l && l.m(a, s), V(a, i, s), r = !0;
    },
    p(a, s) {
      const o = {};
      s & /*$$scope, title*/
      17 && (o.$$scope = { dirty: s, ctx: a }), e.$set(o), /*closeable*/
      a[1] && !/*disabled*/
      a[3] ? l ? (l.p(a, s), s & /*closeable, disabled*/
      10 && E(l, 1)) : (l = as(a), l.c(), E(l, 1), l.m(i.parentNode, i)) : l && (Pe(), S(l, 1, 1, () => {
        l = null;
      }), He());
    },
    i(a) {
      r || (E(e.$$.fragment, a), E(l), r = !0);
    },
    o(a) {
      S(e.$$.fragment, a), S(l), r = !1;
    },
    d(a) {
      a && (B(t), B(i)), te(e, a), l && l.d(a);
    }
  };
}
function _h(n) {
  let e, t;
  return e = new hf({
    props: {
      chip: (
        /*title*/
        n[0]
      ),
      nonInteractive: !0,
      disabled: !0,
      class: (
        /*disabled*/
        n[3] ? "disabled" : ""
      ),
      $$slots: { default: [gh] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      ie(e.$$.fragment);
    },
    m(i, r) {
      ee(e, i, r), t = !0;
    },
    p(i, [r]) {
      const l = {};
      r & /*title*/
      1 && (l.chip = /*title*/
      i[0]), r & /*disabled*/
      8 && (l.class = /*disabled*/
      i[3] ? "disabled" : ""), r & /*$$scope, callback, closeable, disabled, title*/
      31 && (l.$$scope = { dirty: r, ctx: i }), e.$set(l);
    },
    i(i) {
      t || (E(e.$$.fragment, i), t = !0);
    },
    o(i) {
      S(e.$$.fragment, i), t = !1;
    },
    d(i) {
      te(e, i);
    }
  };
}
function bh(n, e, t) {
  let { title: i = "" } = e, { closeable: r = !0 } = e, { callback: l } = e, { disabled: a = !1 } = e;
  return n.$$set = (s) => {
    "title" in s && t(0, i = s.title), "closeable" in s && t(1, r = s.closeable), "callback" in s && t(2, l = s.callback), "disabled" in s && t(3, a = s.disabled);
  }, [i, r, l, a];
}
class Ih extends Re {
  constructor(e) {
    super(), Oe(this, e, bh, _h, Ee, {
      title: 0,
      closeable: 1,
      callback: 2,
      disabled: 3
    });
  }
}
function vh(n) {
  let e, t, i, r, l, a, s, o, u;
  return {
    c() {
      e = ne("div"), t = ne("input"), i = ae(), r = ne("label"), l = at(
        /*label*/
        n[1]
      ), a = ae(), s = ne("span"), U(t, "type", "date"), U(t, "id", "datetime-picker"), U(t, "class", "custom-text-field__input svelte-ar6zwk"), U(t, "placeholder", ""), U(r, "for", "datetime-picker"), U(r, "class", "custom-floating-label svelte-ar6zwk"), U(s, "class", "custom-line svelte-ar6zwk"), U(e, "class", "custom-text-field svelte-ar6zwk");
    },
    m(c, d) {
      V(c, e, d), J(e, t), Zt(
        t,
        /*value*/
        n[0]
      ), J(e, i), J(e, r), J(r, l), J(e, a), J(e, s), o || (u = [
        oe(
          t,
          "input",
          /*input_input_handler*/
          n[3]
        ),
        oe(
          t,
          "change",
          /*handleDateTimeChange*/
          n[2]
        )
      ], o = !0);
    },
    p(c, [d]) {
      d & /*value*/
      1 && Zt(
        t,
        /*value*/
        c[0]
      ), d & /*label*/
      2 && At(
        l,
        /*label*/
        c[1]
      );
    },
    i: $e,
    o: $e,
    d(c) {
      c && B(e), o = !1, Ze(u);
    }
  };
}
function Ch(n, e, t) {
  let { label: i = "" } = e, { value: r = "" } = e;
  function l(s) {
    t(0, r = s.target.value);
  }
  function a() {
    r = this.value, t(0, r);
  }
  return n.$$set = (s) => {
    "label" in s && t(1, i = s.label), "value" in s && t(0, r = s.value);
  }, [r, i, l, a];
}
class Ah extends Re {
  constructor(e) {
    super(), Oe(this, e, Ch, vh, Ee, { label: 1, value: 0 });
  }
}
const Ot = [];
for (let n = 0; n < 256; ++n)
  Ot.push((n + 256).toString(16).slice(1));
function Eh(n, e = 0) {
  return (Ot[n[e + 0]] + Ot[n[e + 1]] + Ot[n[e + 2]] + Ot[n[e + 3]] + "-" + Ot[n[e + 4]] + Ot[n[e + 5]] + "-" + Ot[n[e + 6]] + Ot[n[e + 7]] + "-" + Ot[n[e + 8]] + Ot[n[e + 9]] + "-" + Ot[n[e + 10]] + Ot[n[e + 11]] + Ot[n[e + 12]] + Ot[n[e + 13]] + Ot[n[e + 14]] + Ot[n[e + 15]]).toLowerCase();
}
let tr;
const yh = new Uint8Array(16);
function Sh() {
  if (!tr) {
    if (typeof crypto > "u" || !crypto.getRandomValues)
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    tr = crypto.getRandomValues.bind(crypto);
  }
  return tr(yh);
}
const Th = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), os = { randomUUID: Th };
function _a(n, e, t) {
  var r;
  if (os.randomUUID && !n)
    return os.randomUUID();
  n = n || {};
  const i = n.random ?? ((r = n.rng) == null ? void 0 : r.call(n)) ?? Sh();
  if (i.length < 16)
    throw new Error("Random bytes length must be >= 16");
  return i[6] = i[6] & 15 | 64, i[8] = i[8] & 63 | 128, Eh(i);
}
const Lh = (n) => ({}), us = (n) => ({});
function cs(n) {
  let e, t, i;
  function r(a) {
    n[14](a);
  }
  let l = { label: "Input" };
  return (
    /*inputValue*/
    n[3] !== void 0 && (l.value = /*inputValue*/
    n[3]), e = new bc({ props: l }), se.push(() => pt(e, "value", r)), {
      c() {
        ie(e.$$.fragment);
      },
      m(a, s) {
        ee(e, a, s), i = !0;
      },
      p(a, s) {
        const o = {};
        !t && s & /*inputValue*/
        8 && (t = !0, o.value = /*inputValue*/
        a[3], mt(() => t = !1)), e.$set(o);
      },
      i(a) {
        i || (E(e.$$.fragment, a), i = !0);
      },
      o(a) {
        S(e.$$.fragment, a), i = !1;
      },
      d(a) {
        te(e, a);
      }
    }
  );
}
function ds(n) {
  var o;
  let e, t, i, r;
  function l(u) {
    n[15](u);
  }
  function a(u) {
    n[16](u);
  }
  let s = {
    label: "Input",
    data: (
      /*getSelectedFilterType*/
      (o = n[5].inputType) == null ? void 0 : o.options
    )
  };
  return (
    /*inputValue*/
    n[3] !== void 0 && (s.value = /*inputValue*/
    n[3]), /*selectedOptionIndex*/
    n[1] !== void 0 && (s.selectedOptionIndex = /*selectedOptionIndex*/
    n[1]), e = new fa({ props: s }), se.push(() => pt(e, "value", l)), se.push(() => pt(e, "selectedOptionIndex", a)), {
      c() {
        ie(e.$$.fragment);
      },
      m(u, c) {
        ee(e, u, c), r = !0;
      },
      p(u, c) {
        var f;
        const d = {};
        c & /*getSelectedFilterType*/
        32 && (d.data = /*getSelectedFilterType*/
        (f = u[5].inputType) == null ? void 0 : f.options), !t && c & /*inputValue*/
        8 && (t = !0, d.value = /*inputValue*/
        u[3], mt(() => t = !1)), !i && c & /*selectedOptionIndex*/
        2 && (i = !0, d.selectedOptionIndex = /*selectedOptionIndex*/
        u[1], mt(() => i = !1)), e.$set(d);
      },
      i(u) {
        r || (E(e.$$.fragment, u), r = !0);
      },
      o(u) {
        S(e.$$.fragment, u), r = !1;
      },
      d(u) {
        te(e, u);
      }
    }
  );
}
function fs(n) {
  let e, t, i;
  function r(a) {
    n[17](a);
  }
  let l = {};
  return (
    /*inputValue*/
    n[3] !== void 0 && (l.value = /*inputValue*/
    n[3]), e = new Ah({ props: l }), se.push(() => pt(e, "value", r)), {
      c() {
        ie(e.$$.fragment);
      },
      m(a, s) {
        ee(e, a, s), i = !0;
      },
      p(a, s) {
        const o = {};
        !t && s & /*inputValue*/
        8 && (t = !0, o.value = /*inputValue*/
        a[3], mt(() => t = !1)), e.$set(o);
      },
      i(a) {
        i || (E(e.$$.fragment, a), i = !0);
      },
      o(a) {
        S(e.$$.fragment, a), i = !1;
      },
      d(a) {
        te(e, a);
      }
    }
  );
}
function hs(n) {
  let e, t, i;
  function r(a) {
    n[18](a);
  }
  let l = {};
  return (
    /*inputValue*/
    n[3] !== void 0 && (l.value = /*inputValue*/
    n[3]), e = new Bh({ props: l }), se.push(() => pt(e, "value", r)), {
      c() {
        ie(e.$$.fragment);
      },
      m(a, s) {
        ee(e, a, s), i = !0;
      },
      p(a, s) {
        const o = {};
        !t && s & /*inputValue*/
        8 && (t = !0, o.value = /*inputValue*/
        a[3], mt(() => t = !1)), e.$set(o);
      },
      i(a) {
        i || (E(e.$$.fragment, a), i = !0);
      },
      o(a) {
        S(e.$$.fragment, a), i = !1;
      },
      d(a) {
        te(e, a);
      }
    }
  );
}
function Oh(n) {
  let e;
  return {
    c() {
      e = at("Add Filter");
    },
    m(t, i) {
      V(t, e, i);
    },
    d(t) {
      t && B(e);
    }
  };
}
function Rh(n) {
  let e, t;
  function i() {
    return (
      /*func*/
      n[19](
        /*chip*/
        n[23]
      )
    );
  }
  return e = new Ih({
    props: {
      title: (
        /*chip*/
        n[23].text
      ),
      callback: i,
      disabled: (
        /*chip*/
        n[23].disabled
      )
    }
  }), {
    c() {
      ie(e.$$.fragment);
    },
    m(r, l) {
      ee(e, r, l), t = !0;
    },
    p(r, l) {
      n = r;
      const a = {};
      l & /*chip*/
      8388608 && (a.title = /*chip*/
      n[23].text), l & /*chip*/
      8388608 && (a.callback = i), l & /*chip*/
      8388608 && (a.disabled = /*chip*/
      n[23].disabled), e.$set(a);
    },
    i(r) {
      t || (E(e.$$.fragment, r), t = !0);
    },
    o(r) {
      S(e.$$.fragment, r), t = !1;
    },
    d(r) {
      te(e, r);
    }
  };
}
function kh(n) {
  var D, O, N, W, G, z, F, L;
  let e, t, i, r, l, a, s, o, u, c, d, f, h, p, b, m, C, v, T;
  function y(j) {
    n[13](j);
  }
  let k = {
    disabled: (
      /*disabled*/
      n[2]
    ),
    label: "Filter types",
    data: (
      /*convertTypeToSelection*/
      n[7]
    )
  };
  /*selectedFilterType*/
  n[4] !== void 0 && (k.value = /*selectedFilterType*/
  n[4]), r = new fa({ props: k }), se.push(() => pt(r, "value", y));
  let R = (
    /*getSelectedFilterType*/
    ((O = (D = n[5]) == null ? void 0 : D.inputType) == null ? void 0 : O.type) === "string" && cs(n)
  ), _ = (
    /*getSelectedFilterType*/
    ((W = (N = n[5]) == null ? void 0 : N.inputType) == null ? void 0 : W.type) === "select" && ds(n)
  ), A = (
    /*getSelectedFilterType*/
    ((z = (G = n[5]) == null ? void 0 : G.inputType) == null ? void 0 : z.type) === "datepicker" && fs(n)
  ), w = (
    /*getSelectedFilterType*/
    ((L = (F = n[5]) == null ? void 0 : F.inputType) == null ? void 0 : L.type) === "timepicker" && hs(n)
  );
  f = new _i({
    props: {
      callback: (
        /*addFilter*/
        n[8]
      ),
      disabled: (
        /*addFilterDisabled*/
        n[6]
      ),
      $$slots: { default: [Oh] },
      $$scope: { ctx: n }
    }
  });
  const I = (
    /*#slots*/
    n[12]["filter-controls"]
  ), g = Ie(
    I,
    n,
    /*$$scope*/
    n[20],
    us
  );
  return v = new If({
    props: {
      chips: (
        /*activeFilters*/
        n[0]
      ),
      $$slots: {
        default: [
          Rh,
          ({ chip: j }) => ({ 23: j }),
          ({ chip: j }) => j ? 8388608 : 0
        ]
      },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      e = ne("div"), t = ne("div"), i = ne("div"), ie(r.$$.fragment), a = ae(), R && R.c(), s = ae(), _ && _.c(), o = ae(), A && A.c(), u = ae(), w && w.c(), c = ae(), d = ne("div"), ie(f.$$.fragment), h = ae(), g && g.c(), p = ae(), b = ne("div"), m = ae(), C = ne("div"), ie(v.$$.fragment), U(i, "class", "filter-input-controls svelte-1tmo1p6"), U(d, "class", "filter-button-controls svelte-1tmo1p6"), U(t, "class", "input-section svelte-1tmo1p6"), U(b, "class", "separator svelte-1tmo1p6"), U(C, "class", "chip-section svelte-1tmo1p6"), U(e, "class", "filter-box-container svelte-1tmo1p6");
    },
    m(j, ue) {
      V(j, e, ue), J(e, t), J(t, i), ee(r, i, null), J(i, a), R && R.m(i, null), J(i, s), _ && _.m(i, null), J(i, o), A && A.m(i, null), J(i, u), w && w.m(i, null), J(t, c), J(t, d), ee(f, d, null), J(d, h), g && g.m(d, null), J(e, p), J(e, b), J(e, m), J(e, C), ee(v, C, null), T = !0;
    },
    p(j, ue) {
      var K, x, _e, ye, Ne, re, q, We;
      const ke = {};
      ue & /*disabled*/
      4 && (ke.disabled = /*disabled*/
      j[2]), ue & /*convertTypeToSelection*/
      128 && (ke.data = /*convertTypeToSelection*/
      j[7]), !l && ue & /*selectedFilterType*/
      16 && (l = !0, ke.value = /*selectedFilterType*/
      j[4], mt(() => l = !1)), r.$set(ke), /*getSelectedFilterType*/
      ((x = (K = j[5]) == null ? void 0 : K.inputType) == null ? void 0 : x.type) === "string" ? R ? (R.p(j, ue), ue & /*getSelectedFilterType*/
      32 && E(R, 1)) : (R = cs(j), R.c(), E(R, 1), R.m(i, s)) : R && (Pe(), S(R, 1, 1, () => {
        R = null;
      }), He()), /*getSelectedFilterType*/
      ((ye = (_e = j[5]) == null ? void 0 : _e.inputType) == null ? void 0 : ye.type) === "select" ? _ ? (_.p(j, ue), ue & /*getSelectedFilterType*/
      32 && E(_, 1)) : (_ = ds(j), _.c(), E(_, 1), _.m(i, o)) : _ && (Pe(), S(_, 1, 1, () => {
        _ = null;
      }), He()), /*getSelectedFilterType*/
      ((re = (Ne = j[5]) == null ? void 0 : Ne.inputType) == null ? void 0 : re.type) === "datepicker" ? A ? (A.p(j, ue), ue & /*getSelectedFilterType*/
      32 && E(A, 1)) : (A = fs(j), A.c(), E(A, 1), A.m(i, u)) : A && (Pe(), S(A, 1, 1, () => {
        A = null;
      }), He()), /*getSelectedFilterType*/
      ((We = (q = j[5]) == null ? void 0 : q.inputType) == null ? void 0 : We.type) === "timepicker" ? w ? (w.p(j, ue), ue & /*getSelectedFilterType*/
      32 && E(w, 1)) : (w = hs(j), w.c(), E(w, 1), w.m(i, null)) : w && (Pe(), S(w, 1, 1, () => {
        w = null;
      }), He());
      const be = {};
      ue & /*addFilterDisabled*/
      64 && (be.disabled = /*addFilterDisabled*/
      j[6]), ue & /*$$scope*/
      1048576 && (be.$$scope = { dirty: ue, ctx: j }), f.$set(be), g && g.p && (!T || ue & /*$$scope*/
      1048576) && Ce(
        g,
        I,
        j,
        /*$$scope*/
        j[20],
        T ? ve(
          I,
          /*$$scope*/
          j[20],
          ue,
          Lh
        ) : Ae(
          /*$$scope*/
          j[20]
        ),
        us
      );
      const Ye = {};
      ue & /*activeFilters*/
      1 && (Ye.chips = /*activeFilters*/
      j[0]), ue & /*$$scope, chip*/
      9437184 && (Ye.$$scope = { dirty: ue, ctx: j }), v.$set(Ye);
    },
    i(j) {
      T || (E(r.$$.fragment, j), E(R), E(_), E(A), E(w), E(f.$$.fragment, j), E(g, j), E(v.$$.fragment, j), T = !0);
    },
    o(j) {
      S(r.$$.fragment, j), S(R), S(_), S(A), S(w), S(f.$$.fragment, j), S(g, j), S(v.$$.fragment, j), T = !1;
    },
    d(j) {
      j && B(e), te(r), R && R.d(), _ && _.d(), A && A.d(), w && w.d(), te(f), g && g.d(j), te(v);
    }
  };
}
function Dh(n) {
  let e, t;
  return e = new rf({
    props: {
      $$slots: { default: [kh] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      ie(e.$$.fragment);
    },
    m(i, r) {
      ee(e, i, r), t = !0;
    },
    p(i, [r]) {
      const l = {};
      r & /*$$scope, activeFilters, addFilterDisabled, inputValue, getSelectedFilterType, selectedOptionIndex, disabled, convertTypeToSelection, selectedFilterType*/
      1048831 && (l.$$scope = { dirty: r, ctx: i }), e.$set(l);
    },
    i(i) {
      t || (E(e.$$.fragment, i), t = !0);
    },
    o(i) {
      S(e.$$.fragment, i), t = !1;
    },
    d(i) {
      te(e, i);
    }
  };
}
function Mh(n, e, t) {
  let i, r, l, { $$slots: a = {}, $$scope: s } = e, { filterTypes: o = [] } = e, { activeFilters: u = [] } = e, { useOptionLabelInChipText: c = !1 } = e, { selectedOptionIndex: d = -1 } = e, { disabled: f = !1 } = e, h = "", p = "";
  function b() {
    var I;
    if (!p || !h) {
      console.warn("Filter type or input value is empty");
      return;
    }
    if (!l) {
      console.warn("Filter type not found");
      return;
    }
    let g = [
      ...u,
      {
        id: _a(),
        key: l.label.toLowerCase(),
        value: h,
        operation: "=",
        text: `${p}: ${c && (!((I = l.inputType.options) === null || I === void 0) && I.length) ? l.inputType.options[d].label : h}`,
        disabled: !1
      }
    ];
    t(0, u = g), v(), C();
  }
  function m(I) {
    setTimeout(
      () => {
        t(0, u = u.filter((g) => g.id !== I)), v();
      },
      0
    );
  }
  function C() {
    t(3, h = ""), t(4, p = void 0);
  }
  function v() {
    const I = [...u];
    I.find((g) => g.key === "uuid") ? I.filter((g) => g.key !== "uuid").forEach((g) => {
      g.disabled = !0;
    }) : I.forEach((g) => {
      g.disabled = !1;
    }), t(0, u = I);
  }
  function T(I) {
    p = I, t(4, p);
  }
  function y(I) {
    h = I, t(3, h);
  }
  function k(I) {
    h = I, t(3, h);
  }
  function R(I) {
    d = I, t(1, d);
  }
  function _(I) {
    h = I, t(3, h);
  }
  function A(I) {
    h = I, t(3, h);
  }
  const w = (I) => m(I.id);
  return n.$$set = (I) => {
    "filterTypes" in I && t(10, o = I.filterTypes), "activeFilters" in I && t(0, u = I.activeFilters), "useOptionLabelInChipText" in I && t(11, c = I.useOptionLabelInChipText), "selectedOptionIndex" in I && t(1, d = I.selectedOptionIndex), "disabled" in I && t(2, f = I.disabled), "$$scope" in I && t(20, s = I.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty & /*filterTypes*/
    1024 && t(7, i = o.map((I) => ({ value: I.label, label: I.label }))), n.$$.dirty & /*selectedFilterType, inputValue*/
    24 && t(6, r = !p || !h), n.$$.dirty & /*filterTypes, selectedFilterType*/
    1040 && t(5, l = o.find((I) => I.label === p));
  }, [
    u,
    d,
    f,
    h,
    p,
    l,
    r,
    i,
    b,
    m,
    o,
    c,
    a,
    T,
    y,
    k,
    R,
    _,
    A,
    w,
    s
  ];
}
class Fh extends Re {
  constructor(e) {
    super(), Oe(this, e, Mh, Dh, Ee, {
      filterTypes: 10,
      activeFilters: 0,
      useOptionLabelInChipText: 11,
      selectedOptionIndex: 1,
      disabled: 2
    });
  }
}
function ms(n) {
  let e, t, i, r, l, a;
  return {
    c() {
      e = ne("div"), t = ne("div"), i = ne("div"), r = ae(), l = ne("span"), a = at(
        /*message*/
        n[1]
      ), U(i, "class", "loading-spinner svelte-quxj5m"), U(l, "class", "loading-message svelte-quxj5m"), U(t, "class", "loading-spinner-container svelte-quxj5m"), U(e, "class", "overlay svelte-quxj5m");
    },
    m(s, o) {
      V(s, e, o), J(e, t), J(t, i), J(t, r), J(t, l), J(l, a);
    },
    p(s, o) {
      o & /*message*/
      2 && At(
        a,
        /*message*/
        s[1]
      );
    },
    d(s) {
      s && B(e);
    }
  };
}
function Nh(n) {
  let e, t = !/*loadingDone*/
  n[0] && ms(n);
  return {
    c() {
      e = ne("div"), t && t.c();
    },
    m(i, r) {
      V(i, e, r), t && t.m(e, null);
    },
    p(i, [r]) {
      /*loadingDone*/
      i[0] ? t && (t.d(1), t = null) : t ? t.p(i, r) : (t = ms(i), t.c(), t.m(e, null));
    },
    i: $e,
    o: $e,
    d(i) {
      i && B(e), t && t.d();
    }
  };
}
function Uh(n, e, t) {
  let { loadingDone: i = !0 } = e, { message: r = "Loading..." } = e;
  return n.$$set = (l) => {
    "loadingDone" in l && t(0, i = l.loadingDone), "message" in l && t(1, r = l.message);
  }, [i, r];
}
class wh extends Re {
  constructor(e) {
    super(), Oe(this, e, Uh, Nh, Ee, { loadingDone: 0, message: 1 });
  }
}
function Ph(n) {
  let e, t, i, r, l, a, s, o, u;
  return {
    c() {
      e = ne("div"), t = ne("input"), i = ae(), r = ne("label"), l = at(
        /*label*/
        n[1]
      ), a = ae(), s = ne("span"), U(t, "type", "datetime-local"), U(t, "id", "datetime-picker"), U(t, "class", "custom-text-field__input svelte-ar6zwk"), U(t, "placeholder", ""), U(r, "for", "datetime-picker"), U(r, "class", "custom-floating-label svelte-ar6zwk"), U(s, "class", "custom-line svelte-ar6zwk"), U(e, "class", "custom-text-field svelte-ar6zwk");
    },
    m(c, d) {
      V(c, e, d), J(e, t), Zt(
        t,
        /*value*/
        n[0]
      ), J(e, i), J(e, r), J(r, l), J(e, a), J(e, s), o || (u = [
        oe(
          t,
          "input",
          /*input_input_handler*/
          n[3]
        ),
        oe(
          t,
          "change",
          /*handleDateTimeChange*/
          n[2]
        )
      ], o = !0);
    },
    p(c, [d]) {
      d & /*value*/
      1 && Zt(
        t,
        /*value*/
        c[0]
      ), d & /*label*/
      2 && At(
        l,
        /*label*/
        c[1]
      );
    },
    i: $e,
    o: $e,
    d(c) {
      c && B(e), o = !1, Ze(u);
    }
  };
}
function Hh(n, e, t) {
  let { label: i = "" } = e, { value: r = "" } = e;
  function l(s) {
    t(0, r = s.target.value);
  }
  function a() {
    r = this.value, t(0, r);
  }
  return n.$$set = (s) => {
    "label" in s && t(1, i = s.label), "value" in s && t(0, r = s.value);
  }, [r, i, l, a];
}
class Bh extends Re {
  constructor(e) {
    super(), Oe(this, e, Hh, Ph, Ee, { label: 1, value: 0 });
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
var Pt = {
  CLOSED_CLASS: "mdc-linear-progress--closed",
  CLOSED_ANIMATION_OFF_CLASS: "mdc-linear-progress--closed-animation-off",
  INDETERMINATE_CLASS: "mdc-linear-progress--indeterminate",
  REVERSED_CLASS: "mdc-linear-progress--reversed",
  ANIMATION_READY_CLASS: "mdc-linear-progress--animation-ready"
}, Kt = {
  ARIA_HIDDEN: "aria-hidden",
  ARIA_VALUEMAX: "aria-valuemax",
  ARIA_VALUEMIN: "aria-valuemin",
  ARIA_VALUENOW: "aria-valuenow",
  BUFFER_BAR_SELECTOR: ".mdc-linear-progress__buffer-bar",
  FLEX_BASIS: "flex-basis",
  PRIMARY_BAR_SELECTOR: ".mdc-linear-progress__primary-bar"
}, zn = {
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
var Vh = (
  /** @class */
  function(n) {
    ct(e, n);
    function e(t) {
      var i = n.call(this, ze(ze({}, e.defaultAdapter), t)) || this;
      return i.observer = null, i;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Pt;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Kt;
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
      this.determinate = !this.adapter.hasClass(Pt.INDETERMINATE_CLASS), this.adapter.addClass(Pt.ANIMATION_READY_CLASS), this.progress = 0, this.buffer = 1, this.observer = this.adapter.attachResizeObserver(function(i) {
        var r, l;
        if (!t.determinate)
          try {
            for (var a = St(i), s = a.next(); !s.done; s = a.next()) {
              var o = s.value;
              o.contentRect && t.calculateAndSetDimensions(o.contentRect.width);
            }
          } catch (u) {
            r = { error: u };
          } finally {
            try {
              s && !s.done && (l = a.return) && l.call(a);
            } finally {
              if (r)
                throw r.error;
            }
          }
      }), !this.determinate && this.observer && this.calculateAndSetDimensions(this.adapter.getWidth());
    }, e.prototype.setDeterminate = function(t) {
      if (this.determinate = t, this.determinate) {
        this.adapter.removeClass(Pt.INDETERMINATE_CLASS), this.adapter.setAttribute(Kt.ARIA_VALUENOW, this.progress.toString()), this.adapter.setAttribute(Kt.ARIA_VALUEMAX, "1"), this.adapter.setAttribute(Kt.ARIA_VALUEMIN, "0"), this.setPrimaryBarProgress(this.progress), this.setBufferBarProgress(this.buffer);
        return;
      }
      this.observer && this.calculateAndSetDimensions(this.adapter.getWidth()), this.adapter.addClass(Pt.INDETERMINATE_CLASS), this.adapter.removeAttribute(Kt.ARIA_VALUENOW), this.adapter.removeAttribute(Kt.ARIA_VALUEMAX), this.adapter.removeAttribute(Kt.ARIA_VALUEMIN), this.setPrimaryBarProgress(1), this.setBufferBarProgress(1);
    }, e.prototype.isDeterminate = function() {
      return this.determinate;
    }, e.prototype.setProgress = function(t) {
      this.progress = t, this.determinate && (this.setPrimaryBarProgress(t), this.adapter.setAttribute(Kt.ARIA_VALUENOW, t.toString()));
    }, e.prototype.getProgress = function() {
      return this.progress;
    }, e.prototype.setBuffer = function(t) {
      this.buffer = t, this.determinate && this.setBufferBarProgress(t);
    }, e.prototype.getBuffer = function() {
      return this.buffer;
    }, e.prototype.open = function() {
      this.adapter.removeClass(Pt.CLOSED_CLASS), this.adapter.removeClass(Pt.CLOSED_ANIMATION_OFF_CLASS), this.adapter.removeAttribute(Kt.ARIA_HIDDEN);
    }, e.prototype.close = function() {
      this.adapter.addClass(Pt.CLOSED_CLASS), this.adapter.setAttribute(Kt.ARIA_HIDDEN, "true");
    }, e.prototype.isClosed = function() {
      return this.adapter.hasClass(Pt.CLOSED_CLASS);
    }, e.prototype.handleTransitionEnd = function() {
      this.adapter.hasClass(Pt.CLOSED_CLASS) && this.adapter.addClass(Pt.CLOSED_ANIMATION_OFF_CLASS);
    }, e.prototype.destroy = function() {
      n.prototype.destroy.call(this), this.observer && this.observer.disconnect();
    }, e.prototype.restartAnimation = function() {
      this.adapter.removeClass(Pt.ANIMATION_READY_CLASS), this.adapter.forceLayout(), this.adapter.addClass(Pt.ANIMATION_READY_CLASS);
    }, e.prototype.setPrimaryBarProgress = function(t) {
      var i = "scaleX(" + t + ")", r = typeof window < "u" ? kc(window, "transform") : "transform";
      this.adapter.setPrimaryBarStyle(r, i);
    }, e.prototype.setBufferBarProgress = function(t) {
      var i = t * 100 + "%";
      this.adapter.setBufferBarStyle(Kt.FLEX_BASIS, i);
    }, e.prototype.calculateAndSetDimensions = function(t) {
      var i = t * zn.PRIMARY_HALF, r = t * zn.PRIMARY_FULL, l = t * zn.SECONDARY_QUARTER, a = t * zn.SECONDARY_HALF, s = t * zn.SECONDARY_FULL;
      this.adapter.setStyle("--mdc-linear-progress-primary-half", i + "px"), this.adapter.setStyle("--mdc-linear-progress-primary-half-neg", -i + "px"), this.adapter.setStyle("--mdc-linear-progress-primary-full", r + "px"), this.adapter.setStyle("--mdc-linear-progress-primary-full-neg", -r + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-quarter", l + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-quarter-neg", -l + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-half", a + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-half-neg", -a + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-full", s + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-full-neg", -s + "px"), this.restartAnimation();
    }, e;
  }(Tt)
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
var nn = {
  HEADER_CELL_SORTED: "mdc-data-table__header-cell--sorted",
  HEADER_CELL_SORTED_DESCENDING: "mdc-data-table__header-cell--sorted-descending",
  IN_PROGRESS: "mdc-data-table--in-progress",
  ROW_SELECTED: "mdc-data-table__row--selected"
}, ps = {
  ARIA_SELECTED: "aria-selected",
  ARIA_SORT: "aria-sort"
}, _n = {
  ARIA_SELECTED: ps.ARIA_SELECTED,
  ARIA_SORT: ps.ARIA_SORT
}, Ht;
(function(n) {
  n.ASCENDING = "ascending", n.DESCENDING = "descending", n.NONE = "none", n.OTHER = "other";
})(Ht || (Ht = {}));
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
var jh = (
  /** @class */
  function(n) {
    ct(e, n);
    function e(t) {
      return n.call(this, ze(ze({}, e.defaultAdapter), t)) || this;
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
      return ia(this, void 0, void 0, function() {
        return Ir(this, function(t) {
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
      for (var i = t.columnId, r = t.columnIndex, l = t.headerCell, a = 0; a < this.adapter.getHeaderCellCount(); a++)
        a !== r && (this.adapter.removeClassNameByHeaderCellIndex(a, nn.HEADER_CELL_SORTED), this.adapter.removeClassNameByHeaderCellIndex(a, nn.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(a, _n.ARIA_SORT, Ht.NONE), this.adapter.setSortStatusLabelByHeaderCellIndex(a, Ht.NONE));
      this.adapter.setClassNameByHeaderCellIndex(r, nn.HEADER_CELL_SORTED);
      var s = this.adapter.getAttributeByHeaderCellIndex(r, _n.ARIA_SORT), o = Ht.NONE;
      s === Ht.ASCENDING ? (this.adapter.setClassNameByHeaderCellIndex(r, nn.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(r, _n.ARIA_SORT, Ht.DESCENDING), o = Ht.DESCENDING) : s === Ht.DESCENDING ? (this.adapter.removeClassNameByHeaderCellIndex(r, nn.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(r, _n.ARIA_SORT, Ht.ASCENDING), o = Ht.ASCENDING) : (this.adapter.setAttributeByHeaderCellIndex(r, _n.ARIA_SORT, Ht.ASCENDING), o = Ht.ASCENDING), this.adapter.setSortStatusLabelByHeaderCellIndex(r, o), this.adapter.notifySortAction({
        columnId: i,
        columnIndex: r,
        headerCell: l,
        sortValue: o
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
      }), this.adapter.addClass(nn.IN_PROGRESS);
    }, e.prototype.hideProgress = function() {
      this.adapter.removeClass(nn.IN_PROGRESS);
    }, e.prototype.setHeaderRowCheckboxState = function() {
      this.adapter.getSelectedRowCount() === 0 ? (this.adapter.setHeaderRowCheckboxChecked(!1), this.adapter.setHeaderRowCheckboxIndeterminate(!1)) : this.adapter.getSelectedRowCount() === this.adapter.getRowCount() ? (this.adapter.setHeaderRowCheckboxChecked(!0), this.adapter.setHeaderRowCheckboxIndeterminate(!1)) : (this.adapter.setHeaderRowCheckboxIndeterminate(!0), this.adapter.setHeaderRowCheckboxChecked(!1));
    }, e.prototype.selectRowAtIndex = function(t, i) {
      i ? (this.adapter.addClassAtRowIndex(t, nn.ROW_SELECTED), this.adapter.setAttributeAtRowIndex(t, _n.ARIA_SELECTED, "true")) : (this.adapter.removeClassAtRowIndex(t, nn.ROW_SELECTED), this.adapter.setAttributeAtRowIndex(t, _n.ARIA_SELECTED, "false"));
    }, e;
  }(Tt)
);
const Gh = (n) => ({}), gs = (n) => ({}), qh = (n) => ({}), _s = (n) => ({});
function bs(n) {
  let e, t, i, r, l;
  const a = (
    /*#slots*/
    n[36].progress
  ), s = Ie(
    a,
    n,
    /*$$scope*/
    n[35],
    _s
  );
  return {
    c() {
      e = ne("div"), t = ne("div"), i = ae(), s && s.c(), U(t, "class", "mdc-data-table__scrim"), U(e, "class", "mdc-data-table__progress-indicator"), U(e, "style", r = Object.entries(
        /*progressIndicatorStyles*/
        n[13]
      ).map(Is).join(" "));
    },
    m(o, u) {
      V(o, e, u), J(e, t), J(e, i), s && s.m(e, null), l = !0;
    },
    p(o, u) {
      s && s.p && (!l || u[1] & /*$$scope*/
      16) && Ce(
        s,
        a,
        o,
        /*$$scope*/
        o[35],
        l ? ve(
          a,
          /*$$scope*/
          o[35],
          u,
          qh
        ) : Ae(
          /*$$scope*/
          o[35]
        ),
        _s
      ), (!l || u[0] & /*progressIndicatorStyles*/
      8192 && r !== (r = Object.entries(
        /*progressIndicatorStyles*/
        o[13]
      ).map(Is).join(" "))) && U(e, "style", r);
    },
    i(o) {
      l || (E(s, o), l = !0);
    },
    o(o) {
      S(s, o), l = !1;
    },
    d(o) {
      o && B(e), s && s.d(o);
    }
  };
}
function Kh(n) {
  let e, t, i, r, l, a, s, o, u, c, d, f, h, p;
  const b = (
    /*#slots*/
    n[36].default
  ), m = Ie(
    b,
    n,
    /*$$scope*/
    n[35],
    null
  );
  let C = [
    {
      class: r = le({
        [
          /*table$class*/
          n[6]
        ]: !0,
        "mdc-data-table__table": !0
      })
    },
    Be(
      /*$$restProps*/
      n[25],
      "table$"
    )
  ], v = {};
  for (let I = 0; I < C.length; I += 1)
    v = Y(v, C[I]);
  let T = [
    {
      class: a = le({
        [
          /*container$class*/
          n[4]
        ]: !0,
        "mdc-data-table__table-container": !0
      })
    },
    Be(
      /*$$restProps*/
      n[25],
      "container$"
    )
  ], y = {};
  for (let I = 0; I < T.length; I += 1)
    y = Y(y, T[I]);
  let k = (
    /*$$slots*/
    n[24].progress && bs(n)
  );
  const R = (
    /*#slots*/
    n[36].paginate
  ), _ = Ie(
    R,
    n,
    /*$$scope*/
    n[35],
    gs
  );
  let A = [
    {
      class: c = le({
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
    Gt(
      /*$$restProps*/
      n[25],
      ["container$", "table$"]
    )
  ], w = {};
  for (let I = 0; I < A.length; I += 1)
    w = Y(w, A[I]);
  return {
    c() {
      e = ne("div"), t = ne("div"), i = ne("table"), m && m.c(), o = ae(), k && k.c(), u = ae(), _ && _.c(), ce(i, v), ce(t, y), ce(e, w);
    },
    m(I, g) {
      V(I, e, g), J(e, t), J(t, i), m && m.m(i, null), n[37](t), J(e, o), k && k.m(e, null), J(e, u), _ && _.m(e, null), n[38](e), f = !0, h || (p = [
        fe(l = Qe.call(
          null,
          i,
          /*table$use*/
          n[5]
        )),
        fe(s = Qe.call(
          null,
          t,
          /*container$use*/
          n[3]
        )),
        fe(d = Qe.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        fe(
          /*forwardEvents*/
          n[15].call(null, e)
        ),
        oe(
          e,
          "SMUICheckbox:mount",
          /*SMUICheckbox_mount_handler*/
          n[39]
        ),
        oe(
          e,
          "SMUIDataTableHeader:mount",
          /*handleHeaderMount*/
          n[19]
        ),
        oe(
          e,
          "SMUIDataTableHeader:unmount",
          /*SMUIDataTableHeader_unmount_handler*/
          n[40]
        ),
        oe(
          e,
          "SMUIDataTableBody:mount",
          /*handleBodyMount*/
          n[20]
        ),
        oe(
          e,
          "SMUIDataTableBody:unmount",
          /*SMUIDataTableBody_unmount_handler*/
          n[41]
        ),
        oe(
          e,
          "SMUIDataTableHeaderCheckbox:change",
          /*SMUIDataTableHeaderCheckbox_change_handler*/
          n[42]
        ),
        oe(
          e,
          "SMUIDataTableHeader:click",
          /*handleHeaderRowClick*/
          n[22]
        ),
        oe(
          e,
          "SMUIDataTableRow:click",
          /*handleRowClick*/
          n[23]
        ),
        oe(
          e,
          "SMUIDataTableBodyCheckbox:change",
          /*handleBodyCheckboxChange*/
          n[21]
        )
      ], h = !0);
    },
    p(I, g) {
      m && m.p && (!f || g[1] & /*$$scope*/
      16) && Ce(
        m,
        b,
        I,
        /*$$scope*/
        I[35],
        f ? ve(
          b,
          /*$$scope*/
          I[35],
          g,
          null
        ) : Ae(
          /*$$scope*/
          I[35]
        ),
        null
      ), ce(i, v = he(C, [
        (!f || g[0] & /*table$class*/
        64 && r !== (r = le({
          [
            /*table$class*/
            I[6]
          ]: !0,
          "mdc-data-table__table": !0
        }))) && { class: r },
        g[0] & /*$$restProps*/
        33554432 && Be(
          /*$$restProps*/
          I[25],
          "table$"
        )
      ])), l && me(l.update) && g[0] & /*table$use*/
      32 && l.update.call(
        null,
        /*table$use*/
        I[5]
      ), ce(t, y = he(T, [
        (!f || g[0] & /*container$class*/
        16 && a !== (a = le({
          [
            /*container$class*/
            I[4]
          ]: !0,
          "mdc-data-table__table-container": !0
        }))) && { class: a },
        g[0] & /*$$restProps*/
        33554432 && Be(
          /*$$restProps*/
          I[25],
          "container$"
        )
      ])), s && me(s.update) && g[0] & /*container$use*/
      8 && s.update.call(
        null,
        /*container$use*/
        I[3]
      ), /*$$slots*/
      I[24].progress ? k ? (k.p(I, g), g[0] & /*$$slots*/
      16777216 && E(k, 1)) : (k = bs(I), k.c(), E(k, 1), k.m(e, u)) : k && (Pe(), S(k, 1, 1, () => {
        k = null;
      }), He()), _ && _.p && (!f || g[1] & /*$$scope*/
      16) && Ce(
        _,
        R,
        I,
        /*$$scope*/
        I[35],
        f ? ve(
          R,
          /*$$scope*/
          I[35],
          g,
          Gh
        ) : Ae(
          /*$$scope*/
          I[35]
        ),
        gs
      ), ce(e, w = he(A, [
        (!f || g[0] & /*className, stickyHeader, internalClasses*/
        4102 && c !== (c = le({
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
        }))) && { class: c },
        g[0] & /*$$restProps*/
        33554432 && Gt(
          /*$$restProps*/
          I[25],
          ["container$", "table$"]
        )
      ])), d && me(d.update) && g[0] & /*use*/
      1 && d.update.call(
        null,
        /*use*/
        I[0]
      );
    },
    i(I) {
      f || (E(m, I), E(k), E(_, I), f = !0);
    },
    o(I) {
      S(m, I), S(k), S(_, I), f = !1;
    },
    d(I) {
      I && B(e), m && m.d(I), n[37](null), k && k.d(), _ && _.d(I), n[38](null), h = !1, Ze(p);
    }
  };
}
const Is = ([n, e]) => `${n}: ${e};`;
function Wh(n, e, t) {
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
  let r = pe(e, i), l, a, s, { $$slots: o = {}, $$scope: u } = e;
  const c = mr(o), { closest: d } = ei, f = nt(Je());
  let { use: h = [] } = e, { class: p = "" } = e, { stickyHeader: b = !1 } = e, { sortable: m = !1 } = e, { sort: C = null } = e, { sortDirection: v = "ascending" } = e, { sortAscendingAriaLabel: T = "sorted, ascending" } = e, { sortDescendingAriaLabel: y = "sorted, descending" } = e, { container$use: k = [] } = e, { container$class: R = "" } = e, { table$use: _ = [] } = e, { table$class: A = "" } = e, w, I, g, D, O, N = {}, W = { height: "auto", top: "initial" }, G = Ke("SMUI:addLayoutListener"), z, F = !1, L = Lt(!1);
  it(n, L, (M) => t(34, l = M));
  let j = Lt(C);
  it(n, j, (M) => t(45, s = M));
  let ue = Lt(v);
  it(n, ue, (M) => t(44, a = M)), Ve("SMUI:checkbox:context", "data-table"), Ve("SMUI:linear-progress:context", "data-table"), Ve("SMUI:linear-progress:closed", L), Ve("SMUI:data-table:sortable", m), Ve("SMUI:data-table:sort", j), Ve("SMUI:data-table:sortDirection", ue), Ve("SMUI:data-table:sortAscendingAriaLabel", T), Ve("SMUI:data-table:sortDescendingAriaLabel", y), G && (z = G(We));
  let ke;
  ot(() => (t(7, I = new jh({
    addClass: x,
    removeClass: _e,
    getHeaderCellElements: () => {
      var M;
      return (M = D == null ? void 0 : D.cells.map(($) => $.element)) !== null && M !== void 0 ? M : [];
    },
    getHeaderCellCount: () => {
      var M;
      return (M = D == null ? void 0 : D.cells.length) !== null && M !== void 0 ? M : 0;
    },
    getAttributeByHeaderCellIndex: (M, $) => {
      var Q;
      return (Q = D == null ? void 0 : D.orderedCells[M].getAttr($)) !== null && Q !== void 0 ? Q : null;
    },
    setAttributeByHeaderCellIndex: (M, $, Q) => {
      D == null || D.orderedCells[M].addAttr($, Q);
    },
    setClassNameByHeaderCellIndex: (M, $) => {
      D == null || D.orderedCells[M].addClass($);
    },
    removeClassNameByHeaderCellIndex: (M, $) => {
      D == null || D.orderedCells[M].removeClass($);
    },
    notifySortAction: (M) => {
      t(26, C = M.columnId), t(27, v = M.sortValue), ge(Ge(), "SMUIDataTable:sorted", M, void 0, !0);
    },
    getTableContainerHeight: () => g.getBoundingClientRect().height,
    getTableHeaderHeight: () => {
      const M = Ge().querySelector(".mdc-data-table__header-row");
      if (!M)
        throw new Error("MDCDataTable: Table header element not found.");
      return M.getBoundingClientRect().height;
    },
    setProgressIndicatorStyles: (M) => {
      t(13, W = M);
    },
    addClassAtRowIndex: (M, $) => {
      O == null || O.orderedRows[M].addClass($);
    },
    getRowCount: () => {
      var M;
      return (M = O == null ? void 0 : O.rows.length) !== null && M !== void 0 ? M : 0;
    },
    getRowElements: () => {
      var M;
      return (M = O == null ? void 0 : O.rows.map(($) => $.element)) !== null && M !== void 0 ? M : [];
    },
    getRowIdAtIndex: (M) => {
      var $;
      return ($ = O == null ? void 0 : O.orderedRows[M].rowId) !== null && $ !== void 0 ? $ : null;
    },
    getRowIndexByChildElement: (M) => {
      var $;
      return ($ = O == null ? void 0 : O.orderedRows.map((Q) => Q.element).indexOf(d(M, ".mdc-data-table__row"))) !== null && $ !== void 0 ? $ : -1;
    },
    getSelectedRowCount: () => {
      var M;
      return (M = O == null ? void 0 : O.rows.filter(($) => $.selected).length) !== null && M !== void 0 ? M : 0;
    },
    isCheckboxAtRowIndexChecked: (M) => {
      const $ = O == null ? void 0 : O.orderedRows[M].checkbox;
      return $ ? $.checked : !1;
    },
    isHeaderRowCheckboxChecked: () => {
      const M = D == null ? void 0 : D.checkbox;
      return M ? M.checked : !1;
    },
    isRowsSelectable: () => !!Ge().querySelector(".mdc-data-table__row-checkbox") || !!Ge().querySelector(".mdc-data-table__header-row-checkbox"),
    notifyRowSelectionChanged: (M) => {
      const $ = O == null ? void 0 : O.orderedRows[M.rowIndex];
      $ && ge(
        Ge(),
        "SMUIDataTable:rowSelectionChanged",
        {
          row: $.element,
          rowId: $.rowId,
          rowIndex: M.rowIndex,
          selected: M.selected
        },
        void 0,
        !0
      );
    },
    notifySelectedAll: () => {
      ye(!1), ge(Ge(), "SMUIDataTable:selectedAll", void 0, void 0, !0);
    },
    notifyUnselectedAll: () => {
      ye(!1), ge(Ge(), "SMUIDataTable:unselectedAll", void 0, void 0, !0);
    },
    notifyRowClick: (M) => {
      ge(Ge(), "SMUIDataTable:rowClick", M, void 0, !0);
    },
    registerHeaderRowCheckbox: () => {
    },
    // Handled automatically.
    registerRowCheckboxes: () => {
    },
    // Handled automatically.
    removeClassAtRowIndex: (M, $) => {
      O == null || O.orderedRows[M].removeClass($);
    },
    setAttributeAtRowIndex: (M, $, Q) => {
      O == null || O.orderedRows[M].addAttr($, Q);
    },
    setHeaderRowCheckboxChecked: (M) => {
      const $ = D == null ? void 0 : D.checkbox;
      $ && ($.checked = M);
    },
    setHeaderRowCheckboxIndeterminate: ye,
    setRowCheckboxCheckedAtIndex: (M, $) => {
      const Q = O == null ? void 0 : O.orderedRows[M].checkbox;
      Q && (Q.checked = $);
    },
    setSortStatusLabelByHeaderCellIndex: (M, $) => {
    }
    // Handled automatically.
  })), I.init(), I.layout(), t(14, F = !0), () => {
    I.destroy();
  })), zt(() => {
    z && z();
  });
  function be(M) {
    t(10, D = M.detail);
  }
  function Ye(M) {
    t(11, O = M.detail);
  }
  function K(M) {
    I && I.handleRowCheckboxChange(M);
  }
  function x(M) {
    N[M] || t(12, N[M] = !0, N);
  }
  function _e(M) {
    (!(M in N) || N[M]) && t(12, N[M] = !1, N);
  }
  function ye(M) {
    const $ = D == null ? void 0 : D.checkbox;
    $ && ($.indeterminate = M);
  }
  function Ne(M) {
    if (!I || !M.detail.target)
      return;
    const $ = d(M.detail.target, ".mdc-data-table__header-cell--with-sort");
    $ && q($);
  }
  function re(M) {
    if (!I || !M.detail.target)
      return;
    const $ = d(M.detail.target, ".mdc-data-table__row");
    $ && I && I.handleRowClick({ rowId: M.detail.rowId, row: $ });
  }
  function q(M) {
    var $, Q;
    const je = ($ = D == null ? void 0 : D.orderedCells) !== null && $ !== void 0 ? $ : [], dt = je.map((et) => et.element).indexOf(M);
    if (dt === -1)
      return;
    const ut = (Q = je[dt].columnId) !== null && Q !== void 0 ? Q : null;
    I.handleSortAction({ columnId: ut, columnIndex: dt, headerCell: M });
  }
  function We() {
    return I.layout();
  }
  function Ge() {
    return w;
  }
  function ft(M) {
    se[M ? "unshift" : "push"](() => {
      g = M, t(9, g);
    });
  }
  function X(M) {
    se[M ? "unshift" : "push"](() => {
      w = M, t(8, w);
    });
  }
  const Te = () => I && F && I.layout(), qe = () => t(10, D = void 0), Ue = () => t(11, O = void 0), yt = () => I && I.handleHeaderRowCheckboxChange();
  return n.$$set = (M) => {
    e = Y(Y({}, e), tt(M)), t(25, r = pe(e, i)), "use" in M && t(0, h = M.use), "class" in M && t(1, p = M.class), "stickyHeader" in M && t(2, b = M.stickyHeader), "sortable" in M && t(28, m = M.sortable), "sort" in M && t(26, C = M.sort), "sortDirection" in M && t(27, v = M.sortDirection), "sortAscendingAriaLabel" in M && t(29, T = M.sortAscendingAriaLabel), "sortDescendingAriaLabel" in M && t(30, y = M.sortDescendingAriaLabel), "container$use" in M && t(3, k = M.container$use), "container$class" in M && t(4, R = M.container$class), "table$use" in M && t(5, _ = M.table$use), "table$class" in M && t(6, A = M.table$class), "$$scope" in M && t(35, u = M.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty[0] & /*sort*/
    67108864 && Rt(j, s = C, s), n.$$.dirty[0] & /*sortDirection*/
    134217728 && Rt(ue, a = v, a), n.$$.dirty[0] & /*instance*/
    128 | n.$$.dirty[1] & /*previousProgressClosed, $progressClosed*/
    12 && c.progress && I && ke !== l && (t(33, ke = l), l ? I.hideProgress() : I.showProgress());
  }, [
    h,
    p,
    b,
    k,
    R,
    _,
    A,
    I,
    w,
    g,
    D,
    O,
    N,
    W,
    F,
    f,
    L,
    j,
    ue,
    be,
    Ye,
    K,
    Ne,
    re,
    c,
    r,
    C,
    v,
    m,
    T,
    y,
    We,
    Ge,
    ke,
    l,
    u,
    o,
    ft,
    X,
    Te,
    qe,
    Ue,
    yt
  ];
}
class zh extends Re {
  constructor(e) {
    super(), Oe(
      this,
      e,
      Wh,
      Kh,
      Ee,
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
function Yh(n) {
  let e, t, i, r, l;
  const a = (
    /*#slots*/
    n[10].default
  ), s = Ie(
    a,
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
    u = Y(u, o[c]);
  return {
    c() {
      e = ne("thead"), s && s.c(), ce(e, u);
    },
    m(c, d) {
      V(c, e, d), s && s.m(e, null), n[11](e), i = !0, r || (l = [
        fe(t = Qe.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        fe(
          /*forwardEvents*/
          n[3].call(null, e)
        ),
        oe(
          e,
          "SMUICheckbox:mount",
          /*handleCheckboxMount*/
          n[4]
        ),
        oe(
          e,
          "SMUICheckbox:unmount",
          /*SMUICheckbox_unmount_handler*/
          n[12]
        ),
        oe(
          e,
          "SMUIDataTableCell:mount",
          /*handleCellMount*/
          n[5]
        ),
        oe(
          e,
          "SMUIDataTableCell:unmount",
          /*handleCellUnmount*/
          n[6]
        )
      ], r = !0);
    },
    p(c, [d]) {
      s && s.p && (!i || d & /*$$scope*/
      512) && Ce(
        s,
        a,
        c,
        /*$$scope*/
        c[9],
        i ? ve(
          a,
          /*$$scope*/
          c[9],
          d,
          null
        ) : Ae(
          /*$$scope*/
          c[9]
        ),
        null
      ), ce(e, u = he(o, [d & /*$$restProps*/
      128 && /*$$restProps*/
      c[7]])), t && me(t.update) && d & /*use*/
      1 && t.update.call(
        null,
        /*use*/
        c[0]
      );
    },
    i(c) {
      i || (E(s, c), i = !0);
    },
    o(c) {
      S(s, c), i = !1;
    },
    d(c) {
      c && B(e), s && s.d(c), n[11](null), r = !1, Ze(l);
    }
  };
}
function Xh(n, e, t) {
  const i = ["use", "getElement"];
  let r = pe(e, i), { $$slots: l = {}, $$scope: a } = e;
  const s = nt(Je());
  let { use: o = [] } = e, u, c, d = [];
  const f = /* @__PURE__ */ new WeakMap();
  Ve("SMUI:data-table:row:header", !0), ot(() => {
    const y = {
      get cells() {
        return d;
      },
      get orderedCells() {
        return m();
      },
      get checkbox() {
        return c;
      }
    };
    return ge(C(), "SMUIDataTableHeader:mount", y), () => {
      ge(C(), "SMUIDataTableHeader:unmount", y);
    };
  });
  function h(y) {
    t(2, c = y.detail);
  }
  function p(y) {
    d.push(y.detail), f.set(y.detail.element, y.detail), y.stopPropagation();
  }
  function b(y) {
    const k = d.indexOf(y.detail);
    k !== -1 && (d.splice(k, 1), d = d), f.delete(y.detail.element), y.stopPropagation();
  }
  function m() {
    return [...C().querySelectorAll(".mdc-data-table__header-cell")].map((y) => f.get(y)).filter((y) => y && y._smui_data_table_header_cell_accessor);
  }
  function C() {
    return u;
  }
  function v(y) {
    se[y ? "unshift" : "push"](() => {
      u = y, t(1, u);
    });
  }
  const T = () => t(2, c = void 0);
  return n.$$set = (y) => {
    e = Y(Y({}, e), tt(y)), t(7, r = pe(e, i)), "use" in y && t(0, o = y.use), "$$scope" in y && t(9, a = y.$$scope);
  }, [
    o,
    u,
    c,
    s,
    h,
    p,
    b,
    r,
    C,
    a,
    l,
    v,
    T
  ];
}
class Zh extends Re {
  constructor(e) {
    super(), Oe(this, e, Xh, Yh, Ee, { use: 0, getElement: 8 });
  }
  get getElement() {
    return this.$$.ctx[8];
  }
}
function Qh(n) {
  let e, t, i, r, l, a;
  const s = (
    /*#slots*/
    n[9].default
  ), o = Ie(
    s,
    n,
    /*$$scope*/
    n[8],
    null
  );
  let u = [
    {
      class: t = le({
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
  for (let d = 0; d < u.length; d += 1)
    c = Y(c, u[d]);
  return {
    c() {
      e = ne("tbody"), o && o.c(), ce(e, c);
    },
    m(d, f) {
      V(d, e, f), o && o.m(e, null), n[10](e), r = !0, l || (a = [
        fe(i = Qe.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        fe(
          /*forwardEvents*/
          n[3].call(null, e)
        ),
        oe(
          e,
          "SMUIDataTableRow:mount",
          /*handleRowMount*/
          n[4]
        ),
        oe(
          e,
          "SMUIDataTableRow:unmount",
          /*handleRowUnmount*/
          n[5]
        )
      ], l = !0);
    },
    p(d, [f]) {
      o && o.p && (!r || f & /*$$scope*/
      256) && Ce(
        o,
        s,
        d,
        /*$$scope*/
        d[8],
        r ? ve(
          s,
          /*$$scope*/
          d[8],
          f,
          null
        ) : Ae(
          /*$$scope*/
          d[8]
        ),
        null
      ), ce(e, c = he(u, [
        (!r || f & /*className*/
        2 && t !== (t = le({
          [
            /*className*/
            d[1]
          ]: !0,
          "mdc-data-table__content": !0
        }))) && { class: t },
        f & /*$$restProps*/
        64 && /*$$restProps*/
        d[6]
      ])), i && me(i.update) && f & /*use*/
      1 && i.update.call(
        null,
        /*use*/
        d[0]
      );
    },
    i(d) {
      r || (E(o, d), r = !0);
    },
    o(d) {
      S(o, d), r = !1;
    },
    d(d) {
      d && B(e), o && o.d(d), n[10](null), l = !1, Ze(a);
    }
  };
}
function Jh(n, e, t) {
  const i = ["use", "class", "getElement"];
  let r = pe(e, i), { $$slots: l = {}, $$scope: a } = e;
  const s = nt(Je());
  let { use: o = [] } = e, { class: u = "" } = e, c, d = [];
  const f = /* @__PURE__ */ new WeakMap();
  Ve("SMUI:data-table:row:header", !1), ot(() => {
    const v = {
      get rows() {
        return d;
      },
      get orderedRows() {
        return b();
      }
    };
    return ge(m(), "SMUIDataTableBody:mount", v), () => {
      ge(m(), "SMUIDataTableBody:unmount", v);
    };
  });
  function h(v) {
    d.push(v.detail), f.set(v.detail.element, v.detail), v.stopPropagation();
  }
  function p(v) {
    const T = d.indexOf(v.detail);
    T !== -1 && (d.splice(T, 1), d = d), f.delete(v.detail.element), v.stopPropagation();
  }
  function b() {
    return [...m().querySelectorAll(".mdc-data-table__row")].map((v) => f.get(v)).filter((v) => v && v._smui_data_table_row_accessor);
  }
  function m() {
    return c;
  }
  function C(v) {
    se[v ? "unshift" : "push"](() => {
      c = v, t(2, c);
    });
  }
  return n.$$set = (v) => {
    e = Y(Y({}, e), tt(v)), t(6, r = pe(e, i)), "use" in v && t(0, o = v.use), "class" in v && t(1, u = v.class), "$$scope" in v && t(8, a = v.$$scope);
  }, [
    o,
    u,
    c,
    s,
    h,
    p,
    r,
    m,
    a,
    l,
    C
  ];
}
class xh extends Re {
  constructor(e) {
    super(), Oe(this, e, Jh, Qh, Ee, { use: 0, class: 1, getElement: 7 });
  }
  get getElement() {
    return this.$$.ctx[7];
  }
}
function $h(n) {
  let e, t, i, r, l, a, s;
  const o = (
    /*#slots*/
    n[15].default
  ), u = Ie(
    o,
    n,
    /*$$scope*/
    n[14],
    null
  );
  let c = [
    {
      class: t = le({
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
  ], d = {};
  for (let f = 0; f < c.length; f += 1)
    d = Y(d, c[f]);
  return {
    c() {
      e = ne("tr"), u && u.c(), ce(e, d);
    },
    m(f, h) {
      V(f, e, h), u && u.m(e, null), n[16](e), l = !0, a || (s = [
        fe(r = Qe.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        fe(
          /*forwardEvents*/
          n[6].call(null, e)
        ),
        oe(
          e,
          "click",
          /*click_handler*/
          n[17]
        ),
        oe(
          e,
          "SMUICheckbox:mount",
          /*handleCheckboxMount*/
          n[8]
        ),
        oe(
          e,
          "SMUICheckbox:unmount",
          /*SMUICheckbox_unmount_handler*/
          n[18]
        )
      ], a = !0);
    },
    p(f, [h]) {
      u && u.p && (!l || h & /*$$scope*/
      16384) && Ce(
        u,
        o,
        f,
        /*$$scope*/
        f[14],
        l ? ve(
          o,
          /*$$scope*/
          f[14],
          h,
          null
        ) : Ae(
          /*$$scope*/
          f[14]
        ),
        null
      ), ce(e, d = he(c, [
        (!l || h & /*className, checkbox, internalClasses*/
        26 && t !== (t = le({
          [
            /*className*/
            f[1]
          ]: !0,
          "mdc-data-table__header-row": (
            /*header*/
            f[7]
          ),
          "mdc-data-table__row": !/*header*/
          f[7],
          "mdc-data-table__row--selected": !/*header*/
          f[7] && /*checkbox*/
          f[3] && /*checkbox*/
          f[3].checked,
          .../*internalClasses*/
          f[4]
        }))) && { class: t },
        (!l || h & /*checkbox*/
        8 && i !== (i = /*checkbox*/
        f[3] ? (
          /*checkbox*/
          f[3].checked ? "true" : "false"
        ) : void 0)) && { "aria-selected": i },
        h & /*internalAttrs*/
        32 && /*internalAttrs*/
        f[5],
        h & /*$$restProps*/
        2048 && /*$$restProps*/
        f[11]
      ])), r && me(r.update) && h & /*use*/
      1 && r.update.call(
        null,
        /*use*/
        f[0]
      );
    },
    i(f) {
      l || (E(u, f), l = !0);
    },
    o(f) {
      S(u, f), l = !1;
    },
    d(f) {
      f && B(e), u && u.d(f), n[16](null), a = !1, Ze(s);
    }
  };
}
let em = 0;
function tm(n, e, t) {
  const i = ["use", "class", "rowId", "getElement"];
  let r = pe(e, i), { $$slots: l = {}, $$scope: a } = e;
  const s = nt(Je());
  let { use: o = [] } = e, { class: u = "" } = e, { rowId: c = "SMUI-data-table-row-" + em++ } = e, d, f, h = {}, p = {}, b = Ke("SMUI:data-table:row:header");
  ot(() => {
    const g = b ? {
      _smui_data_table_row_accessor: !1,
      get element() {
        return _();
      },
      get checkbox() {
        return f;
      },
      get rowId() {
      },
      get selected() {
        var D;
        return (D = f && f.checked) !== null && D !== void 0 ? D : !1;
      },
      addClass: C,
      removeClass: v,
      getAttr: T,
      addAttr: y
    } : {
      _smui_data_table_row_accessor: !0,
      get element() {
        return _();
      },
      get checkbox() {
        return f;
      },
      get rowId() {
        return c;
      },
      get selected() {
        var D;
        return (D = f && f.checked) !== null && D !== void 0 ? D : !1;
      },
      addClass: C,
      removeClass: v,
      getAttr: T,
      addAttr: y
    };
    return ge(_(), "SMUIDataTableRow:mount", g), () => {
      ge(_(), "SMUIDataTableRow:unmount", g);
    };
  });
  function m(g) {
    t(3, f = g.detail);
  }
  function C(g) {
    h[g] || t(4, h[g] = !0, h);
  }
  function v(g) {
    (!(g in h) || h[g]) && t(4, h[g] = !1, h);
  }
  function T(g) {
    var D;
    return g in p ? (D = p[g]) !== null && D !== void 0 ? D : null : _().getAttribute(g);
  }
  function y(g, D) {
    p[g] !== D && t(5, p[g] = D, p);
  }
  function k(g) {
    ge(_(), "SMUIDataTableHeader:click", g);
  }
  function R(g) {
    ge(_(), "SMUIDataTableRow:click", { rowId: c, target: g.target });
  }
  function _() {
    return d;
  }
  function A(g) {
    se[g ? "unshift" : "push"](() => {
      d = g, t(2, d);
    });
  }
  const w = (g) => b ? k(g) : R(g), I = () => t(3, f = void 0);
  return n.$$set = (g) => {
    e = Y(Y({}, e), tt(g)), t(11, r = pe(e, i)), "use" in g && t(0, o = g.use), "class" in g && t(1, u = g.class), "rowId" in g && t(12, c = g.rowId), "$$scope" in g && t(14, a = g.$$scope);
  }, [
    o,
    u,
    d,
    f,
    h,
    p,
    s,
    b,
    m,
    k,
    R,
    r,
    c,
    _,
    a,
    l,
    A,
    w,
    I
  ];
}
class ba extends Re {
  constructor(e) {
    super(), Oe(this, e, tm, $h, Ee, {
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
function nm(n) {
  let e, t, i, r, l, a;
  const s = (
    /*#slots*/
    n[22].default
  ), o = Ie(
    s,
    n,
    /*$$scope*/
    n[21],
    null
  );
  let u = [
    {
      class: t = le({
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
  for (let d = 0; d < u.length; d += 1)
    c = Y(c, u[d]);
  return {
    c() {
      e = ne("td"), o && o.c(), ce(e, c);
    },
    m(d, f) {
      V(d, e, f), o && o.m(e, null), n[25](e), r = !0, l || (a = [
        fe(i = Qe.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        fe(
          /*forwardEvents*/
          n[11].call(null, e)
        ),
        oe(
          e,
          "change",
          /*change_handler_1*/
          n[26]
        )
      ], l = !0);
    },
    p(d, f) {
      o && o.p && (!r || f & /*$$scope*/
      2097152) && Ce(
        o,
        s,
        d,
        /*$$scope*/
        d[21],
        r ? ve(
          s,
          /*$$scope*/
          d[21],
          f,
          null
        ) : Ae(
          /*$$scope*/
          d[21]
        ),
        null
      ), ce(e, c = he(u, [
        (!r || f & /*className, numeric, checkbox, internalClasses*/
        142 && t !== (t = le({
          [
            /*className*/
            d[1]
          ]: !0,
          "mdc-data-table__cell": !0,
          "mdc-data-table__cell--numeric": (
            /*numeric*/
            d[2]
          ),
          "mdc-data-table__cell--checkbox": (
            /*checkbox*/
            d[3]
          ),
          .../*internalClasses*/
          d[7]
        }))) && { class: t },
        f & /*internalAttrs*/
        256 && /*internalAttrs*/
        d[8],
        f & /*$$restProps*/
        524288 && /*$$restProps*/
        d[19]
      ])), i && me(i.update) && f & /*use*/
      1 && i.update.call(
        null,
        /*use*/
        d[0]
      );
    },
    i(d) {
      r || (E(o, d), r = !0);
    },
    o(d) {
      S(o, d), r = !1;
    },
    d(d) {
      d && B(e), o && o.d(d), n[25](null), l = !1, Ze(a);
    }
  };
}
function im(n) {
  let e, t, i, r, l, a, s, o, u;
  const c = [lm, rm], d = [];
  function f(b, m) {
    return (
      /*sortable*/
      b[5] ? 0 : 1
    );
  }
  t = f(n), i = d[t] = c[t](n);
  let h = [
    {
      class: r = le({
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
  ], p = {};
  for (let b = 0; b < h.length; b += 1)
    p = Y(p, h[b]);
  return {
    c() {
      e = ne("th"), i.c(), ce(e, p);
    },
    m(b, m) {
      V(b, e, m), d[t].m(e, null), n[23](e), s = !0, o || (u = [
        fe(a = Qe.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        fe(
          /*forwardEvents*/
          n[11].call(null, e)
        ),
        oe(
          e,
          "change",
          /*change_handler*/
          n[24]
        )
      ], o = !0);
    },
    p(b, m) {
      let C = t;
      t = f(b), t === C ? d[t].p(b, m) : (Pe(), S(d[C], 1, 1, () => {
        d[C] = null;
      }), He(), i = d[t], i ? i.p(b, m) : (i = d[t] = c[t](b), i.c()), E(i, 1), i.m(e, null)), ce(e, p = he(h, [
        (!s || m & /*className, numeric, checkbox, sortable, $sort, columnId, internalClasses*/
        702 && r !== (r = le({
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
        (!s || m & /*columnId*/
        16) && { "data-column-id": (
          /*columnId*/
          b[4]
        ) },
        (!s || m & /*sortable, $sort, columnId, $sortDirection*/
        1584 && l !== (l = /*sortable*/
        b[5] ? (
          /*$sort*/
          b[9] === /*columnId*/
          b[4] ? (
            /*$sortDirection*/
            b[10]
          ) : "none"
        ) : void 0)) && { "aria-sort": l },
        m & /*internalAttrs*/
        256 && /*internalAttrs*/
        b[8],
        m & /*$$restProps*/
        524288 && /*$$restProps*/
        b[19]
      ])), a && me(a.update) && m & /*use*/
      1 && a.update.call(
        null,
        /*use*/
        b[0]
      );
    },
    i(b) {
      s || (E(i), s = !0);
    },
    o(b) {
      S(i), s = !1;
    },
    d(b) {
      b && B(e), d[t].d(), n[23](null), o = !1, Ze(u);
    }
  };
}
function rm(n) {
  let e;
  const t = (
    /*#slots*/
    n[22].default
  ), i = Ie(
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
      2097152) && Ce(
        i,
        t,
        r,
        /*$$scope*/
        r[21],
        e ? ve(
          t,
          /*$$scope*/
          r[21],
          l,
          null
        ) : Ae(
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
      S(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function lm(n) {
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
  ), l, a, s;
  const o = (
    /*#slots*/
    n[22].default
  ), u = Ie(
    o,
    n,
    /*$$scope*/
    n[21],
    null
  );
  return {
    c() {
      e = ne("div"), u && u.c(), t = ae(), i = ne("div"), l = at(r), U(i, "class", "mdc-data-table__sort-status-label"), U(i, "aria-hidden", "true"), U(i, "id", a = /*columnId*/
      n[4] + "-status-label"), U(e, "class", "mdc-data-table__header-cell-wrapper");
    },
    m(c, d) {
      V(c, e, d), u && u.m(e, null), J(e, t), J(e, i), J(i, l), s = !0;
    },
    p(c, d) {
      u && u.p && (!s || d & /*$$scope*/
      2097152) && Ce(
        u,
        o,
        c,
        /*$$scope*/
        c[21],
        s ? ve(
          o,
          /*$$scope*/
          c[21],
          d,
          null
        ) : Ae(
          /*$$scope*/
          c[21]
        ),
        null
      ), (!s || d & /*$sort, columnId, $sortDirection*/
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
      ) : "") + "") && At(l, r), (!s || d & /*columnId*/
      16 && a !== (a = /*columnId*/
      c[4] + "-status-label")) && U(i, "id", a);
    },
    i(c) {
      s || (E(u, c), s = !0);
    },
    o(c) {
      S(u, c), s = !1;
    },
    d(c) {
      c && B(e), u && u.d(c);
    }
  };
}
function sm(n) {
  let e, t, i, r;
  const l = [im, nm], a = [];
  function s(o, u) {
    return (
      /*header*/
      o[12] ? 0 : 1
    );
  }
  return e = s(n), t = a[e] = l[e](n), {
    c() {
      t.c(), i = Xe();
    },
    m(o, u) {
      a[e].m(o, u), V(o, i, u), r = !0;
    },
    p(o, [u]) {
      t.p(o, u);
    },
    i(o) {
      r || (E(t), r = !0);
    },
    o(o) {
      S(t), r = !1;
    },
    d(o) {
      o && B(i), a[e].d(o);
    }
  };
}
let am = 0;
function om(n, e, t) {
  const i = ["use", "class", "numeric", "checkbox", "columnId", "sortable", "getElement"];
  let r = pe(e, i), l, a, { $$slots: s = {}, $$scope: o } = e;
  const u = nt(Je());
  let c = Ke("SMUI:data-table:row:header"), { use: d = [] } = e, { class: f = "" } = e, { numeric: h = !1 } = e, { checkbox: p = !1 } = e, { columnId: b = c ? "SMUI-data-table-column-" + am++ : "SMUI-data-table-unused" } = e, { sortable: m = Ke("SMUI:data-table:sortable") } = e, C, v = {}, T = {}, y = Ke("SMUI:data-table:sort");
  it(n, y, (L) => t(9, l = L));
  let k = Ke("SMUI:data-table:sortDirection");
  it(n, k, (L) => t(10, a = L));
  let R = Ke("SMUI:data-table:sortAscendingAriaLabel"), _ = Ke("SMUI:data-table:sortDescendingAriaLabel");
  m && (Ve("SMUI:label:context", "data-table:sortable-header-cell"), Ve("SMUI:icon-button:context", "data-table:sortable-header-cell"), Ve("SMUI:icon-button:aria-describedby", b + "-status-label")), ot(() => {
    const L = c ? {
      _smui_data_table_header_cell_accessor: !0,
      get element() {
        return N();
      },
      get columnId() {
        return b;
      },
      addClass: A,
      removeClass: w,
      getAttr: I,
      addAttr: g
    } : {
      _smui_data_table_header_cell_accessor: !1,
      get element() {
        return N();
      },
      get columnId() {
      },
      addClass: A,
      removeClass: w,
      getAttr: I,
      addAttr: g
    };
    return ge(N(), "SMUIDataTableCell:mount", L), () => {
      ge(N(), "SMUIDataTableCell:unmount", L);
    };
  });
  function A(L) {
    v[L] || t(7, v[L] = !0, v);
  }
  function w(L) {
    (!(L in v) || v[L]) && t(7, v[L] = !1, v);
  }
  function I(L) {
    var j;
    return L in T ? (j = T[L]) !== null && j !== void 0 ? j : null : N().getAttribute(L);
  }
  function g(L, j) {
    T[L] !== j && t(8, T[L] = j, T);
  }
  function D(L) {
    ge(N(), "SMUIDataTableHeaderCheckbox:change", L);
  }
  function O(L) {
    ge(N(), "SMUIDataTableBodyCheckbox:change", L);
  }
  function N() {
    return C;
  }
  function W(L) {
    se[L ? "unshift" : "push"](() => {
      C = L, t(6, C);
    });
  }
  const G = (L) => p && D(L);
  function z(L) {
    se[L ? "unshift" : "push"](() => {
      C = L, t(6, C);
    });
  }
  const F = (L) => p && O(L);
  return n.$$set = (L) => {
    e = Y(Y({}, e), tt(L)), t(19, r = pe(e, i)), "use" in L && t(0, d = L.use), "class" in L && t(1, f = L.class), "numeric" in L && t(2, h = L.numeric), "checkbox" in L && t(3, p = L.checkbox), "columnId" in L && t(4, b = L.columnId), "sortable" in L && t(5, m = L.sortable), "$$scope" in L && t(21, o = L.$$scope);
  }, [
    d,
    f,
    h,
    p,
    b,
    m,
    C,
    v,
    T,
    l,
    a,
    u,
    c,
    y,
    k,
    R,
    _,
    D,
    O,
    r,
    N,
    o,
    s,
    W,
    G,
    z,
    F
  ];
}
class Sr extends Re {
  constructor(e) {
    super(), Oe(this, e, om, sm, Ee, {
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
function um(n) {
  let e, t, i, r, l, a, s, o, u, c, d, f, h, p, b, m, C, v, T, y, k = [
    {
      class: h = le({
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
      style: p = Object.entries(
        /*internalStyles*/
        n[10]
      ).map(As).concat([
        /*style*/
        n[2]
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
  ], R = {};
  for (let _ = 0; _ < k.length; _ += 1)
    R = Y(R, k[_]);
  return {
    c() {
      e = ne("div"), t = ne("div"), i = ne("div"), l = ae(), a = ne("div"), s = ae(), o = ne("div"), u = ne("span"), d = ae(), f = ne("div"), f.innerHTML = '<span class="mdc-linear-progress__bar-inner"></span>', U(i, "class", "mdc-linear-progress__buffer-bar"), U(i, "style", r = Object.entries(
        /*bufferBarStyles*/
        n[11]
      ).map(vs).join(" ")), U(a, "class", "mdc-linear-progress__buffer-dots"), U(t, "class", "mdc-linear-progress__buffer"), U(u, "class", "mdc-linear-progress__bar-inner"), U(o, "class", "mdc-linear-progress__bar mdc-linear-progress__primary-bar"), U(o, "style", c = Object.entries(
        /*primaryBarStyles*/
        n[12]
      ).map(Cs).join(" ")), U(f, "class", "mdc-linear-progress__bar mdc-linear-progress__secondary-bar"), ce(e, R);
    },
    m(_, A) {
      V(_, e, A), J(e, t), J(t, i), J(t, l), J(t, a), J(e, s), J(e, o), J(o, u), J(e, d), J(e, f), n[19](e), T || (y = [
        fe(v = Qe.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        fe(
          /*forwardEvents*/
          n[13].call(null, e)
        ),
        oe(
          e,
          "transitionend",
          /*transitionend_handler*/
          n[20]
        )
      ], T = !0);
    },
    p(_, [A]) {
      A & /*bufferBarStyles*/
      2048 && r !== (r = Object.entries(
        /*bufferBarStyles*/
        _[11]
      ).map(vs).join(" ")) && U(i, "style", r), A & /*primaryBarStyles*/
      4096 && c !== (c = Object.entries(
        /*primaryBarStyles*/
        _[12]
      ).map(Cs).join(" ")) && U(o, "style", c), ce(e, R = he(k, [
        A & /*className, indeterminate, closed, internalClasses*/
        282 && h !== (h = le({
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
        A & /*internalStyles, style*/
        1028 && p !== (p = Object.entries(
          /*internalStyles*/
          _[10]
        ).map(As).concat([
          /*style*/
          _[2]
        ]).join(" ")) && { style: p },
        { role: "progressbar" },
        {
          "aria-valuemin": b
        },
        {
          "aria-valuemax": m
        },
        A & /*indeterminate, progress*/
        40 && C !== (C = /*indeterminate*/
        _[3] ? void 0 : (
          /*progress*/
          _[5]
        )) && {
          "aria-valuenow": C
        },
        A & /*internalAttrs*/
        512 && /*internalAttrs*/
        _[9],
        A & /*$$restProps*/
        65536 && /*$$restProps*/
        _[16]
      ])), v && me(v.update) && A & /*use*/
      1 && v.update.call(
        null,
        /*use*/
        _[0]
      );
    },
    i: $e,
    o: $e,
    d(_) {
      _ && B(e), n[19](null), T = !1, Ze(y);
    }
  };
}
const vs = ([n, e]) => `${n}: ${e};`, Cs = ([n, e]) => `${n}: ${e};`, As = ([n, e]) => `${n}: ${e};`;
function cm(n, e, t) {
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
  let r = pe(e, i), l;
  const a = nt(Je());
  let { use: s = [] } = e, { class: o = "" } = e, { style: u = "" } = e, { indeterminate: c = !1 } = e, { closed: d = !1 } = e, { progress: f = 0 } = e, { buffer: h = void 0 } = e, p, b, m = {}, C = {}, v = {}, T = {}, y = {}, k = Ke("SMUI:linear-progress:context"), R = Ke("SMUI:linear-progress:closed");
  it(n, R, (F) => t(21, l = F)), ot(() => (t(6, b = new Vh({
    addClass: A,
    forceLayout: () => {
      W().getBoundingClientRect();
    },
    setBufferBarStyle: O,
    setPrimaryBarStyle: N,
    hasClass: _,
    removeAttribute: g,
    removeClass: w,
    setAttribute: I,
    setStyle: D,
    attachResizeObserver: (F) => {
      const L = window.ResizeObserver;
      if (L) {
        const j = new L(F);
        return j.observe(W()), j;
      }
      return null;
    },
    getWidth: () => W().offsetWidth
  })), b.init(), () => {
    b.destroy();
  }));
  function _(F) {
    return F in m ? m[F] : W().classList.contains(F);
  }
  function A(F) {
    m[F] || t(8, m[F] = !0, m);
  }
  function w(F) {
    (!(F in m) || m[F]) && t(8, m[F] = !1, m);
  }
  function I(F, L) {
    C[F] !== L && t(9, C[F] = L, C);
  }
  function g(F) {
    (!(F in C) || C[F] != null) && t(9, C[F] = void 0, C);
  }
  function D(F, L) {
    v[F] != L && (L === "" || L == null ? (delete v[F], t(10, v)) : t(10, v[F] = L, v));
  }
  function O(F, L) {
    T[F] != L && (L === "" || L == null ? (delete T[F], t(11, T)) : t(11, T[F] = L, T));
  }
  function N(F, L) {
    y[F] != L && (L === "" || L == null ? (delete y[F], t(12, y)) : t(12, y[F] = L, y));
  }
  function W() {
    return p;
  }
  function G(F) {
    se[F ? "unshift" : "push"](() => {
      p = F, t(7, p);
    });
  }
  const z = () => b && b.handleTransitionEnd();
  return n.$$set = (F) => {
    e = Y(Y({}, e), tt(F)), t(16, r = pe(e, i)), "use" in F && t(0, s = F.use), "class" in F && t(1, o = F.class), "style" in F && t(2, u = F.style), "indeterminate" in F && t(3, c = F.indeterminate), "closed" in F && t(4, d = F.closed), "progress" in F && t(5, f = F.progress), "buffer" in F && t(17, h = F.buffer);
  }, n.$$.update = () => {
    n.$$.dirty & /*closed*/
    16 && R && Rt(R, l = d, l), n.$$.dirty & /*instance, indeterminate*/
    72 && b && b.isDeterminate() !== !c && b.setDeterminate(!c), n.$$.dirty & /*instance, progress*/
    96 && b && b.getProgress() !== f && b.setProgress(f), n.$$.dirty & /*instance, buffer*/
    131136 && b && (h == null ? b.setBuffer(1) : b.setBuffer(h)), n.$$.dirty & /*instance, closed*/
    80 && b && (d ? b.close() : b.open());
  }, [
    s,
    o,
    u,
    c,
    d,
    f,
    b,
    p,
    m,
    C,
    v,
    T,
    y,
    a,
    k,
    R,
    r,
    h,
    W,
    G,
    z
  ];
}
class dm extends Re {
  constructor(e) {
    super(), Oe(this, e, cm, um, Ee, {
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
function Es(n, e, t) {
  const i = n.slice();
  return i[24] = e[t], i[26] = t, i;
}
function ys(n, e, t) {
  const i = n.slice();
  return i[27] = e[t], i;
}
function Ss(n, e, t) {
  const i = n.slice();
  return i[30] = e[t], i;
}
function Ts(n, e, t) {
  const i = n.slice();
  return i[27] = e[t], i[33] = e, i[34] = t, i;
}
function Ls(n) {
  let e, t = (
    /*$sortColumn*/
    n[5] === /*col*/
    n[27].field && /*$sortDirection*/
    n[6] !== null && Os(n)
  );
  return {
    c() {
      t && t.c(), e = Xe();
    },
    m(i, r) {
      t && t.m(i, r), V(i, e, r);
    },
    p(i, r) {
      /*$sortColumn*/
      i[5] === /*col*/
      i[27].field && /*$sortDirection*/
      i[6] !== null ? t ? t.p(i, r) : (t = Os(i), t.c(), t.m(e.parentNode, e)) : t && (t.d(1), t = null);
    },
    d(i) {
      i && B(e), t && t.d(i);
    }
  };
}
function Os(n) {
  let e;
  function t(l, a) {
    if (
      /*$sortDirection*/
      l[6] === "asc"
    )
      return hm;
    if (
      /*$sortDirection*/
      l[6] === "desc"
    )
      return fm;
  }
  let i = t(n), r = i && i(n);
  return {
    c() {
      r && r.c(), e = Xe();
    },
    m(l, a) {
      r && r.m(l, a), V(l, e, a);
    },
    p(l, a) {
      i !== (i = t(l)) && (r && r.d(1), r = i && i(l), r && (r.c(), r.m(e.parentNode, e)));
    },
    d(l) {
      l && B(e), r && r.d(l);
    }
  };
}
function fm(n) {
  let e, t;
  return {
    c() {
      e = st("svg"), t = st("path"), U(t, "d", "M12 20l8-8H4l8 8z"), U(e, "xmlns", "http://www.w3.org/2000/svg"), U(e, "viewBox", "0 0 24 24"), U(e, "width", "16"), U(e, "height", "16"), U(e, "fill", "currentColor"), U(e, "class", "svelte-29x22x");
    },
    m(i, r) {
      V(i, e, r), J(e, t);
    },
    d(i) {
      i && B(e);
    }
  };
}
function hm(n) {
  let e, t;
  return {
    c() {
      e = st("svg"), t = st("path"), U(t, "d", "M12 4l-8 8h16l-8-8z"), U(e, "xmlns", "http://www.w3.org/2000/svg"), U(e, "viewBox", "0 0 24 24"), U(e, "width", "16"), U(e, "height", "16"), U(e, "fill", "currentColor"), U(e, "class", "svelte-29x22x");
    },
    m(i, r) {
      V(i, e, r), J(e, t);
    },
    d(i) {
      i && B(e);
    }
  };
}
function Rs(n) {
  let e, t, i = (
    /*col*/
    n[27].filterType === "text" && ks(n)
  ), r = (
    /*col*/
    n[27].filterType === "number" && Ds(n)
  );
  return {
    c() {
      i && i.c(), e = ae(), r && r.c(), t = Xe();
    },
    m(l, a) {
      i && i.m(l, a), V(l, e, a), r && r.m(l, a), V(l, t, a);
    },
    p(l, a) {
      /*col*/
      l[27].filterType === "text" ? i ? i.p(l, a) : (i = ks(l), i.c(), i.m(e.parentNode, e)) : i && (i.d(1), i = null), /*col*/
      l[27].filterType === "number" ? r ? r.p(l, a) : (r = Ds(l), r.c(), r.m(t.parentNode, t)) : r && (r.d(1), r = null);
    },
    d(l) {
      l && (B(e), B(t)), i && i.d(l), r && r.d(l);
    }
  };
}
function ks(n) {
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
      e = ne("input"), U(e, "type", "text"), U(e, "placeholder", t = `Search ${/*col*/
      n[27].headerName}`), U(e, "class", "svelte-29x22x");
    },
    m(a, s) {
      V(a, e, s), Zt(
        e,
        /*filters*/
        n[4][
          /*col*/
          n[27].field
        ]
      ), i || (r = [
        oe(e, "input", l),
        oe(
          e,
          "input",
          /*input_handler*/
          n[17]
        )
      ], i = !0);
    },
    p(a, s) {
      n = a, s[0] & /*columnDefs*/
      4 && t !== (t = `Search ${/*col*/
      n[27].headerName}`) && U(e, "placeholder", t), s[0] & /*filters, columnDefs*/
      20 && e.value !== /*filters*/
      n[4][
        /*col*/
        n[27].field
      ] && Zt(
        e,
        /*filters*/
        n[4][
          /*col*/
          n[27].field
        ]
      );
    },
    d(a) {
      a && B(e), i = !1, Ze(r);
    }
  };
}
function Ds(n) {
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
      e = ne("input"), U(e, "type", "number"), U(e, "placeholder", t = `Search ${/*col*/
      n[27].headerName}`), U(e, "class", "svelte-29x22x");
    },
    m(a, s) {
      V(a, e, s), Zt(
        e,
        /*filters*/
        n[4][
          /*col*/
          n[27].field
        ]
      ), i || (r = [
        oe(e, "input", l),
        oe(
          e,
          "input",
          /*input_handler_1*/
          n[19]
        )
      ], i = !0);
    },
    p(a, s) {
      n = a, s[0] & /*columnDefs*/
      4 && t !== (t = `Search ${/*col*/
      n[27].headerName}`) && U(e, "placeholder", t), s[0] & /*filters, columnDefs*/
      20 && Qs(e.value) !== /*filters*/
      n[4][
        /*col*/
        n[27].field
      ] && Zt(
        e,
        /*filters*/
        n[4][
          /*col*/
          n[27].field
        ]
      );
    },
    d(a) {
      a && B(e), i = !1, Ze(r);
    }
  };
}
function mm(n) {
  let e, t, i, r = (
    /*col*/
    n[27].headerName + ""
  ), l, a, s, o, u = (
    /*col*/
    n[27].sortable && Ls(n)
  ), c = (
    /*col*/
    n[27].filter && Rs(n)
  );
  return {
    c() {
      e = ne("div"), t = ne("div"), i = ne("span"), l = at(r), a = ae(), u && u.c(), s = ae(), c && c.c(), o = ae(), U(i, "class", "header-title svelte-29x22x"), U(t, "class", "cell-header svelte-29x22x"), U(e, "class", "custom-cell-container svelte-29x22x"), lr(
        e,
        "min-width",
        /*col*/
        n[27].minWidth ?? 0
      );
    },
    m(d, f) {
      V(d, e, f), J(e, t), J(t, i), J(i, l), J(t, a), u && u.m(t, null), J(e, s), c && c.m(e, null), V(d, o, f);
    },
    p(d, f) {
      f[0] & /*columnDefs*/
      4 && r !== (r = /*col*/
      d[27].headerName + "") && At(l, r), /*col*/
      d[27].sortable ? u ? u.p(d, f) : (u = Ls(d), u.c(), u.m(t, null)) : u && (u.d(1), u = null), /*col*/
      d[27].filter ? c ? c.p(d, f) : (c = Rs(d), c.c(), c.m(e, null)) : c && (c.d(1), c = null), f[0] & /*columnDefs*/
      4 && lr(
        e,
        "min-width",
        /*col*/
        d[27].minWidth ?? 0
      );
    },
    d(d) {
      d && (B(e), B(o)), u && u.d(), c && c.d();
    }
  };
}
function Ms(n) {
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
  return e = new Sr({
    props: {
      style: (
        /*col*/
        n[27].headerStyle
      ),
      $$slots: { default: [mm] },
      $$scope: { ctx: n }
    }
  }), e.$on("click", i), {
    c() {
      ie(e.$$.fragment);
    },
    m(r, l) {
      ee(e, r, l), t = !0;
    },
    p(r, l) {
      n = r;
      const a = {};
      l[0] & /*columnDefs*/
      4 && (a.style = /*col*/
      n[27].headerStyle), l[0] & /*columnDefs, filters, $sortDirection, $sortColumn*/
      116 | l[1] & /*$$scope*/
      16 && (a.$$scope = { dirty: l, ctx: n }), e.$set(a);
    },
    i(r) {
      t || (E(e.$$.fragment, r), t = !0);
    },
    o(r) {
      S(e.$$.fragment, r), t = !1;
    },
    d(r) {
      te(e, r);
    }
  };
}
function pm(n) {
  let e, t, i = jt(
    /*columnDefs*/
    n[2]
  ), r = [];
  for (let a = 0; a < i.length; a += 1)
    r[a] = Ms(Ts(n, i, a));
  const l = (a) => S(r[a], 1, 1, () => {
    r[a] = null;
  });
  return {
    c() {
      for (let a = 0; a < r.length; a += 1)
        r[a].c();
      e = Xe();
    },
    m(a, s) {
      for (let o = 0; o < r.length; o += 1)
        r[o] && r[o].m(a, s);
      V(a, e, s), t = !0;
    },
    p(a, s) {
      if (s[0] & /*columnDefs, sortColumnBy, filters, filterAndSortTable, $sortDirection, $sortColumn*/
      6260) {
        i = jt(
          /*columnDefs*/
          a[2]
        );
        let o;
        for (o = 0; o < i.length; o += 1) {
          const u = Ts(a, i, o);
          r[o] ? (r[o].p(u, s), E(r[o], 1)) : (r[o] = Ms(u), r[o].c(), E(r[o], 1), r[o].m(e.parentNode, e));
        }
        for (Pe(), o = i.length; o < r.length; o += 1)
          l(o);
        He();
      }
    },
    i(a) {
      if (!t) {
        for (let s = 0; s < i.length; s += 1)
          E(r[s]);
        t = !0;
      }
    },
    o(a) {
      r = r.filter(Boolean);
      for (let s = 0; s < r.length; s += 1)
        S(r[s]);
      t = !1;
    },
    d(a) {
      a && B(e), pr(r, a);
    }
  };
}
function gm(n) {
  let e, t;
  return e = new ba({
    props: {
      class: "header-row",
      $$slots: { default: [pm] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      ie(e.$$.fragment);
    },
    m(i, r) {
      ee(e, i, r), t = !0;
    },
    p(i, r) {
      const l = {};
      r[0] & /*columnDefs, filters, $sortDirection, $sortColumn*/
      116 | r[1] & /*$$scope*/
      16 && (l.$$scope = { dirty: r, ctx: i }), e.$set(l);
    },
    i(i) {
      t || (E(e.$$.fragment, i), t = !0);
    },
    o(i) {
      S(e.$$.fragment, i), t = !1;
    },
    d(i) {
      te(e, i);
    }
  };
}
function _m(n) {
  let e, t;
  return e = new Sr({
    props: {
      numeric: (
        /*col*/
        n[27].numeric
      ),
      style: (
        /*col*/
        n[27].cellStyle
      ),
      $$slots: { default: [Cm] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      ie(e.$$.fragment);
    },
    m(i, r) {
      ee(e, i, r), t = !0;
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
      t || (E(e.$$.fragment, i), t = !0);
    },
    o(i) {
      S(e.$$.fragment, i), t = !1;
    },
    d(i) {
      te(e, i);
    }
  };
}
function bm(n) {
  let e, t;
  return e = new Sr({
    props: {
      $$slots: { default: [Fm] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      ie(e.$$.fragment);
    },
    m(i, r) {
      ee(e, i, r), t = !0;
    },
    p(i, r) {
      const l = {};
      r[0] & /*rowActions, $filteredData*/
      136 | r[1] & /*$$scope*/
      16 && (l.$$scope = { dirty: r, ctx: i }), e.$set(l);
    },
    i(i) {
      t || (E(e.$$.fragment, i), t = !0);
    },
    o(i) {
      S(e.$$.fragment, i), t = !1;
    },
    d(i) {
      te(e, i);
    }
  };
}
function Im(n) {
  let e = (
    /*row*/
    (n[24][
      /*col*/
      n[27].field
    ] ?? "") + ""
  ), t;
  return {
    c() {
      t = at(e);
    },
    m(i, r) {
      V(i, t, r);
    },
    p(i, r) {
      r[0] & /*$filteredData, columnDefs*/
      132 && e !== (e = /*row*/
      (i[24][
        /*col*/
        i[27].field
      ] ?? "") + "") && At(t, e);
    },
    d(i) {
      i && B(t);
    }
  };
}
function vm(n) {
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
      t = at(e);
    },
    m(i, r) {
      V(i, t, r);
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
      ) + "") && At(t, e);
    },
    d(i) {
      i && B(t);
    }
  };
}
function Cm(n) {
  let e;
  function t(l, a) {
    return (
      /*col*/
      l[27].valueFormatter ? vm : Im
    );
  }
  let i = t(n), r = i(n);
  return {
    c() {
      r.c(), e = Xe();
    },
    m(l, a) {
      r.m(l, a), V(l, e, a);
    },
    p(l, a) {
      i === (i = t(l)) && r ? r.p(l, a) : (r.d(1), r = i(l), r && (r.c(), r.m(e.parentNode, e)));
    },
    d(l) {
      l && B(e), r.d(l);
    }
  };
}
function Am(n) {
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
  return e = new _i({
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
      $$slots: { default: [Mm] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      ie(e.$$.fragment);
    },
    m(r, l) {
      ee(e, r, l), t = !0;
    },
    p(r, l) {
      n = r;
      const a = {};
      l[0] & /*rowActions, $filteredData*/
      136 && (a.callback = i), l[0] & /*rowActions, $filteredData*/
      136 && (a.disabled = /*action*/
      n[30].disabled(
        /*row*/
        n[24]
      )), l[0] & /*rowActions*/
      8 | l[1] & /*$$scope*/
      16 && (a.$$scope = { dirty: l, ctx: n }), e.$set(a);
    },
    i(r) {
      t || (E(e.$$.fragment, r), t = !0);
    },
    o(r) {
      S(e.$$.fragment, r), t = !1;
    },
    d(r) {
      te(e, r);
    }
  };
}
function Em(n) {
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
  return e = new xo({
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
      ie(e.$$.fragment);
    },
    m(r, l) {
      ee(e, r, l), t = !0;
    },
    p(r, l) {
      n = r;
      const a = {};
      l[0] & /*rowActions*/
      8 && (a.iconComponent = /*action*/
      n[30].iconComponent), l[0] & /*rowActions*/
      8 && (a.iconStyles = /*action*/
      n[30].iconStyles), l[0] & /*rowActions, $filteredData*/
      136 && (a.callback = i), l[0] & /*rowActions, $filteredData*/
      136 && (a.disabled = /*action*/
      n[30].disabled(
        /*row*/
        n[24]
      )), e.$set(a);
    },
    i(r) {
      t || (E(e.$$.fragment, r), t = !0);
    },
    o(r) {
      S(e.$$.fragment, r), t = !1;
    },
    d(r) {
      te(e, r);
    }
  };
}
function ym(n) {
  let e, t;
  return e = new Jf({ props: { svgStyles: "margin: unset" } }), {
    c() {
      ie(e.$$.fragment);
    },
    m(i, r) {
      ee(e, i, r), t = !0;
    },
    i(i) {
      t || (E(e.$$.fragment, i), t = !0);
    },
    o(i) {
      S(e.$$.fragment, i), t = !1;
    },
    d(i) {
      te(e, i);
    }
  };
}
function Sm(n) {
  let e, t;
  return e = new hh({ props: { svgStyles: "margin: unset" } }), {
    c() {
      ie(e.$$.fragment);
    },
    m(i, r) {
      ee(e, i, r), t = !0;
    },
    i(i) {
      t || (E(e.$$.fragment, i), t = !0);
    },
    o(i) {
      S(e.$$.fragment, i), t = !1;
    },
    d(i) {
      te(e, i);
    }
  };
}
function Tm(n) {
  let e, t;
  return e = new uh({ props: { svgStyles: "margin: unset" } }), {
    c() {
      ie(e.$$.fragment);
    },
    m(i, r) {
      ee(e, i, r), t = !0;
    },
    i(i) {
      t || (E(e.$$.fragment, i), t = !0);
    },
    o(i) {
      S(e.$$.fragment, i), t = !1;
    },
    d(i) {
      te(e, i);
    }
  };
}
function Lm(n) {
  let e, t;
  return e = new lh({ props: { svgStyles: "margin: unset" } }), {
    c() {
      ie(e.$$.fragment);
    },
    m(i, r) {
      ee(e, i, r), t = !0;
    },
    i(i) {
      t || (E(e.$$.fragment, i), t = !0);
    },
    o(i) {
      S(e.$$.fragment, i), t = !1;
    },
    d(i) {
      te(e, i);
    }
  };
}
function Om(n) {
  let e, t;
  return e = new Yf({ props: { svgStyles: "margin: unset" } }), {
    c() {
      ie(e.$$.fragment);
    },
    m(i, r) {
      ee(e, i, r), t = !0;
    },
    i(i) {
      t || (E(e.$$.fragment, i), t = !0);
    },
    o(i) {
      S(e.$$.fragment, i), t = !1;
    },
    d(i) {
      te(e, i);
    }
  };
}
function Rm(n) {
  let e, t;
  return e = new qf({ props: { svgStyles: "margin: unset" } }), {
    c() {
      ie(e.$$.fragment);
    },
    m(i, r) {
      ee(e, i, r), t = !0;
    },
    i(i) {
      t || (E(e.$$.fragment, i), t = !0);
    },
    o(i) {
      S(e.$$.fragment, i), t = !1;
    },
    d(i) {
      te(e, i);
    }
  };
}
function km(n) {
  let e, t;
  return e = new yr({ props: { svgStyles: "margin: unset" } }), {
    c() {
      ie(e.$$.fragment);
    },
    m(i, r) {
      ee(e, i, r), t = !0;
    },
    i(i) {
      t || (E(e.$$.fragment, i), t = !0);
    },
    o(i) {
      S(e.$$.fragment, i), t = !1;
    },
    d(i) {
      te(e, i);
    }
  };
}
function Dm(n) {
  let e, t;
  return e = new wf({ props: { svgStyles: "margin: unset" } }), {
    c() {
      ie(e.$$.fragment);
    },
    m(i, r) {
      ee(e, i, r), t = !0;
    },
    i(i) {
      t || (E(e.$$.fragment, i), t = !0);
    },
    o(i) {
      S(e.$$.fragment, i), t = !1;
    },
    d(i) {
      te(e, i);
    }
  };
}
function Mm(n) {
  let e, t, i, r;
  const l = [
    Dm,
    km,
    Rm,
    Om,
    Lm,
    Tm,
    Sm,
    ym
  ], a = [];
  function s(o, u) {
    return (
      /*action*/
      o[30].icon === "add" ? 0 : (
        /*action*/
        o[30].icon === "cancel" ? 1 : (
          /*action*/
          o[30].icon === "download" ? 2 : (
            /*action*/
            o[30].icon === "find-in-page" ? 3 : (
              /*action*/
              o[30].icon === "remove" ? 4 : (
                /*action*/
                o[30].icon === "edit" ? 5 : (
                  /*action*/
                  o[30].icon === "delete" ? 6 : 7
                )
              )
            )
          )
        )
      )
    );
  }
  return e = s(n), t = a[e] = l[e](n), {
    c() {
      t.c(), i = Xe();
    },
    m(o, u) {
      a[e].m(o, u), V(o, i, u), r = !0;
    },
    p(o, u) {
      let c = e;
      e = s(o), e !== c && (Pe(), S(a[c], 1, 1, () => {
        a[c] = null;
      }), He(), t = a[e], t || (t = a[e] = l[e](o), t.c()), E(t, 1), t.m(i.parentNode, i));
    },
    i(o) {
      r || (E(t), r = !0);
    },
    o(o) {
      S(t), r = !1;
    },
    d(o) {
      o && B(i), a[e].d(o);
    }
  };
}
function Fs(n) {
  let e, t, i, r;
  const l = [Em, Am], a = [];
  function s(o, u) {
    return (
      /*action*/
      o[30].iconComponent ? 0 : 1
    );
  }
  return e = s(n), t = a[e] = l[e](n), {
    c() {
      t.c(), i = Xe();
    },
    m(o, u) {
      a[e].m(o, u), V(o, i, u), r = !0;
    },
    p(o, u) {
      let c = e;
      e = s(o), e === c ? a[e].p(o, u) : (Pe(), S(a[c], 1, 1, () => {
        a[c] = null;
      }), He(), t = a[e], t ? t.p(o, u) : (t = a[e] = l[e](o), t.c()), E(t, 1), t.m(i.parentNode, i));
    },
    i(o) {
      r || (E(t), r = !0);
    },
    o(o) {
      S(t), r = !1;
    },
    d(o) {
      o && B(i), a[e].d(o);
    }
  };
}
function Fm(n) {
  let e, t, i = jt(
    /*rowActions*/
    n[3]
  ), r = [];
  for (let a = 0; a < i.length; a += 1)
    r[a] = Fs(Ss(n, i, a));
  const l = (a) => S(r[a], 1, 1, () => {
    r[a] = null;
  });
  return {
    c() {
      e = ne("div");
      for (let a = 0; a < r.length; a += 1)
        r[a].c();
      U(e, "class", "cell-actions svelte-29x22x");
    },
    m(a, s) {
      V(a, e, s);
      for (let o = 0; o < r.length; o += 1)
        r[o] && r[o].m(e, null);
      t = !0;
    },
    p(a, s) {
      if (s[0] & /*rowActions, $filteredData*/
      136) {
        i = jt(
          /*rowActions*/
          a[3]
        );
        let o;
        for (o = 0; o < i.length; o += 1) {
          const u = Ss(a, i, o);
          r[o] ? (r[o].p(u, s), E(r[o], 1)) : (r[o] = Fs(u), r[o].c(), E(r[o], 1), r[o].m(e, null));
        }
        for (Pe(), o = i.length; o < r.length; o += 1)
          l(o);
        He();
      }
    },
    i(a) {
      if (!t) {
        for (let s = 0; s < i.length; s += 1)
          E(r[s]);
        t = !0;
      }
    },
    o(a) {
      r = r.filter(Boolean);
      for (let s = 0; s < r.length; s += 1)
        S(r[s]);
      t = !1;
    },
    d(a) {
      a && B(e), pr(r, a);
    }
  };
}
function Ns(n, e) {
  let t, i, r, l, a;
  const s = [bm, _m], o = [];
  function u(c, d) {
    return (
      /*col*/
      c[27].field === "actions" ? 0 : 1
    );
  }
  return i = u(e), r = o[i] = s[i](e), {
    key: n,
    first: null,
    c() {
      t = Xe(), r.c(), l = Xe(), this.first = t;
    },
    m(c, d) {
      V(c, t, d), o[i].m(c, d), V(c, l, d), a = !0;
    },
    p(c, d) {
      e = c;
      let f = i;
      i = u(e), i === f ? o[i].p(e, d) : (Pe(), S(o[f], 1, 1, () => {
        o[f] = null;
      }), He(), r = o[i], r ? r.p(e, d) : (r = o[i] = s[i](e), r.c()), E(r, 1), r.m(l.parentNode, l));
    },
    i(c) {
      a || (E(r), a = !0);
    },
    o(c) {
      S(r), a = !1;
    },
    d(c) {
      c && (B(t), B(l)), o[i].d(c);
    }
  };
}
function Nm(n) {
  let e = [], t = /* @__PURE__ */ new Map(), i, r, l = jt(
    /*columnDefs*/
    n[2]
  );
  const a = (s) => (
    /*col*/
    s[27].field
  );
  for (let s = 0; s < l.length; s += 1) {
    let o = ys(n, l, s), u = a(o);
    t.set(u, e[s] = Ns(u, o));
  }
  return {
    c() {
      for (let s = 0; s < e.length; s += 1)
        e[s].c();
      i = ae();
    },
    m(s, o) {
      for (let u = 0; u < e.length; u += 1)
        e[u] && e[u].m(s, o);
      V(s, i, o), r = !0;
    },
    p(s, o) {
      o[0] & /*rowActions, $filteredData, columnDefs*/
      140 && (l = jt(
        /*columnDefs*/
        s[2]
      ), Pe(), e = br(e, o, a, 1, s, l, t, i.parentNode, _r, Ns, i, ys), He());
    },
    i(s) {
      if (!r) {
        for (let o = 0; o < l.length; o += 1)
          E(e[o]);
        r = !0;
      }
    },
    o(s) {
      for (let o = 0; o < e.length; o += 1)
        S(e[o]);
      r = !1;
    },
    d(s) {
      s && B(i);
      for (let o = 0; o < e.length; o += 1)
        e[o].d(s);
    }
  };
}
function Us(n, e) {
  let t, i, r;
  return i = new ba({
    props: {
      $$slots: { default: [Nm] },
      $$scope: { ctx: e }
    }
  }), {
    key: n,
    first: null,
    c() {
      t = Xe(), ie(i.$$.fragment), this.first = t;
    },
    m(l, a) {
      V(l, t, a), ee(i, l, a), r = !0;
    },
    p(l, a) {
      e = l;
      const s = {};
      a[0] & /*columnDefs, rowActions, $filteredData*/
      140 | a[1] & /*$$scope*/
      16 && (s.$$scope = { dirty: a, ctx: e }), i.$set(s);
    },
    i(l) {
      r || (E(i.$$.fragment, l), r = !0);
    },
    o(l) {
      S(i.$$.fragment, l), r = !1;
    },
    d(l) {
      l && B(t), te(i, l);
    }
  };
}
function Um(n) {
  let e = [], t = /* @__PURE__ */ new Map(), i, r, l = jt(
    /*$filteredData*/
    n[7]
  );
  const a = (s) => (
    /*index*/
    s[26]
  );
  for (let s = 0; s < l.length; s += 1) {
    let o = Es(n, l, s), u = a(o);
    t.set(u, e[s] = Us(u, o));
  }
  return {
    c() {
      for (let s = 0; s < e.length; s += 1)
        e[s].c();
      i = Xe();
    },
    m(s, o) {
      for (let u = 0; u < e.length; u += 1)
        e[u] && e[u].m(s, o);
      V(s, i, o), r = !0;
    },
    p(s, o) {
      o[0] & /*columnDefs, rowActions, $filteredData*/
      140 && (l = jt(
        /*$filteredData*/
        s[7]
      ), Pe(), e = br(e, o, a, 1, s, l, t, i.parentNode, _r, Us, i, Es), He());
    },
    i(s) {
      if (!r) {
        for (let o = 0; o < l.length; o += 1)
          E(e[o]);
        r = !0;
      }
    },
    o(s) {
      for (let o = 0; o < e.length; o += 1)
        S(e[o]);
      r = !1;
    },
    d(s) {
      s && B(i);
      for (let o = 0; o < e.length; o += 1)
        e[o].d(s);
    }
  };
}
function wm(n) {
  let e, t, i, r;
  return e = new Zh({
    props: {
      $$slots: { default: [gm] },
      $$scope: { ctx: n }
    }
  }), i = new xh({
    props: {
      $$slots: { default: [Um] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      ie(e.$$.fragment), t = ae(), ie(i.$$.fragment);
    },
    m(l, a) {
      ee(e, l, a), V(l, t, a), ee(i, l, a), r = !0;
    },
    p(l, a) {
      const s = {};
      a[0] & /*columnDefs, filters, $sortDirection, $sortColumn*/
      116 | a[1] & /*$$scope*/
      16 && (s.$$scope = { dirty: a, ctx: l }), e.$set(s);
      const o = {};
      a[0] & /*$filteredData, columnDefs, rowActions*/
      140 | a[1] & /*$$scope*/
      16 && (o.$$scope = { dirty: a, ctx: l }), i.$set(o);
    },
    i(l) {
      r || (E(e.$$.fragment, l), E(i.$$.fragment, l), r = !0);
    },
    o(l) {
      S(e.$$.fragment, l), S(i.$$.fragment, l), r = !1;
    },
    d(l) {
      l && B(t), te(e, l), te(i, l);
    }
  };
}
function Pm(n) {
  let e, t, i;
  function r(a) {
    n[15](a);
  }
  let l = {
    indeterminate: !0,
    "aria-label": "Data is being loaded...",
    slot: "progress"
  };
  return (
    /*loadingDone*/
    n[0] !== void 0 && (l.closed = /*loadingDone*/
    n[0]), e = new dm({ props: l }), se.push(() => pt(e, "closed", r)), {
      c() {
        ie(e.$$.fragment);
      },
      m(a, s) {
        ee(e, a, s), i = !0;
      },
      p(a, s) {
        const o = {};
        !t && s[0] & /*loadingDone*/
        1 && (t = !0, o.closed = /*loadingDone*/
        a[0], mt(() => t = !1)), e.$set(o);
      },
      i(a) {
        i || (E(e.$$.fragment, a), i = !0);
      },
      o(a) {
        S(e.$$.fragment, a), i = !1;
      },
      d(a) {
        te(e, a);
      }
    }
  );
}
function Hm(n) {
  let e, t;
  return e = new zh({
    props: {
      "table$aria-label": (
        /*label*/
        n[1]
      ),
      style: "max-width: 100%; width: 100%;",
      $$slots: {
        progress: [Pm],
        default: [wm]
      },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      ie(e.$$.fragment);
    },
    m(i, r) {
      ee(e, i, r), t = !0;
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
      t || (E(e.$$.fragment, i), t = !0);
    },
    o(i) {
      S(e.$$.fragment, i), t = !1;
    },
    d(i) {
      te(e, i);
    }
  };
}
function Bm(n, e, t) {
  let i, r, l, { loadingDone: a = !0 } = e, { label: s = _a() } = e, { columnDefs: o = [] } = e, { rowData: u = [] } = e, { store: c } = e, { rowActions: d = [] } = e, f = { name: "", color: "", number: "" }, h = Lt([]);
  it(n, h, (g) => t(7, l = g));
  let p = Lt(null);
  it(n, p, (g) => t(5, i = g));
  let b = Lt(null);
  it(n, b, (g) => t(6, r = g)), c.store.subscribe((g) => {
    t(13, u = [...g]), m();
  });
  function m() {
    let g = u.filter((D) => o.every((O) => {
      const N = f[O.field], W = D[O.field];
      return N ? O.filterType === "number" ? W == N : W.toString().toLowerCase().includes(N.toLowerCase()) : !0;
    }));
    g = C(g), h.set(g);
  }
  function C(g) {
    let D, O;
    return p.subscribe((N) => D = N), b.subscribe((N) => O = N), !D || !O ? g : g.sort((N, W) => {
      let G = N[D], z = W[D];
      return G == null && (G = ""), z == null && (z = ""), O === "asc" ? G.toString().localeCompare(z.toString()) : z.toString().localeCompare(G.toString());
    });
  }
  function v(g) {
    p.update((D) => {
      if (D === g)
        b.update((O) => O === "asc" ? "desc" : O === "desc" ? null : "asc");
      else
        return b.set("asc"), g;
      return g;
    }), m();
  }
  h.set(u);
  function T(g) {
    a = g, t(0, a);
  }
  function y(g) {
    f[g.field] = this.value, t(4, f);
  }
  const k = () => m();
  function R(g) {
    f[g.field] = Qs(this.value), t(4, f);
  }
  const _ = () => m(), A = (g) => g.sortable && v(g.field), w = (g, D) => g.callback(D), I = (g, D) => g.callback(D);
  return n.$$set = (g) => {
    "loadingDone" in g && t(0, a = g.loadingDone), "label" in g && t(1, s = g.label), "columnDefs" in g && t(2, o = g.columnDefs), "rowData" in g && t(13, u = g.rowData), "store" in g && t(14, c = g.store), "rowActions" in g && t(3, d = g.rowActions);
  }, [
    a,
    s,
    o,
    d,
    f,
    i,
    r,
    l,
    h,
    p,
    b,
    m,
    v,
    u,
    c,
    T,
    y,
    k,
    R,
    _,
    A,
    w,
    I
  ];
}
class Ia extends Re {
  constructor(e) {
    super(), Oe(
      this,
      e,
      Bm,
      Hm,
      Ee,
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
function Vm(n) {
  let e, t, i, r, l, a;
  const s = (
    /*#slots*/
    n[9].default
  ), o = Ie(
    s,
    n,
    /*$$scope*/
    n[8],
    null
  );
  let u = [
    {
      class: t = le({
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
  ], c = {};
  for (let d = 0; d < u.length; d += 1)
    c = Y(c, u[d]);
  return {
    c() {
      e = ne("div"), o && o.c(), ce(e, c);
    },
    m(d, f) {
      V(d, e, f), o && o.m(e, null), n[10](e), r = !0, l || (a = [
        fe(i = Qe.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        fe(
          /*forwardEvents*/
          n[5].call(null, e)
        )
      ], l = !0);
    },
    p(d, [f]) {
      o && o.p && (!r || f & /*$$scope*/
      256) && Ce(
        o,
        s,
        d,
        /*$$scope*/
        d[8],
        r ? ve(
          s,
          /*$$scope*/
          d[8],
          f,
          null
        ) : Ae(
          /*$$scope*/
          d[8]
        ),
        null
      ), ce(e, c = he(u, [
        (!r || f & /*className, variant, padded*/
        14 && t !== (t = le({
          [
            /*className*/
            d[1]
          ]: !0,
          "mdc-card": !0,
          "mdc-card--outlined": (
            /*variant*/
            d[2] === "outlined"
          ),
          "smui-card--padded": (
            /*padded*/
            d[3]
          )
        }))) && { class: t },
        f & /*$$restProps*/
        64 && /*$$restProps*/
        d[6]
      ])), i && me(i.update) && f & /*use*/
      1 && i.update.call(
        null,
        /*use*/
        d[0]
      );
    },
    i(d) {
      r || (E(o, d), r = !0);
    },
    o(d) {
      S(o, d), r = !1;
    },
    d(d) {
      d && B(e), o && o.d(d), n[10](null), l = !1, Ze(a);
    }
  };
}
function jm(n, e, t) {
  const i = ["use", "class", "variant", "padded", "getElement"];
  let r = pe(e, i), { $$slots: l = {}, $$scope: a } = e;
  const s = nt(Je());
  let { use: o = [] } = e, { class: u = "" } = e, { variant: c = "raised" } = e, { padded: d = !1 } = e, f;
  function h() {
    return f;
  }
  function p(b) {
    se[b ? "unshift" : "push"](() => {
      f = b, t(4, f);
    });
  }
  return n.$$set = (b) => {
    e = Y(Y({}, e), tt(b)), t(6, r = pe(e, i)), "use" in b && t(0, o = b.use), "class" in b && t(1, u = b.class), "variant" in b && t(2, c = b.variant), "padded" in b && t(3, d = b.padded), "$$scope" in b && t(8, a = b.$$scope);
  }, [
    o,
    u,
    c,
    d,
    f,
    s,
    r,
    h,
    a,
    l,
    p
  ];
}
class Gm extends Re {
  constructor(e) {
    super(), Oe(this, e, jm, Vm, Ee, {
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
Et({
  class: "smui-card__content",
  tag: "div"
});
Et({
  class: "mdc-card__media-content",
  tag: "div"
});
Et({
  class: "mdc-card__action-buttons",
  tag: "div"
});
Et({
  class: "mdc-card__action-icons",
  tag: "div"
});
function Ct(n) {
  return typeof n == "function";
}
function qm(n) {
  return Ct(n == null ? void 0 : n.lift);
}
function Jt(n) {
  return function(e) {
    if (qm(e))
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
var va = function(n) {
  return n && typeof n.length == "number" && typeof n != "function";
};
function Ca(n) {
  return Ct(n == null ? void 0 : n.then);
}
function Aa(n) {
  var e = function(i) {
    Error.call(i), i.stack = new Error().stack;
  }, t = n(e);
  return t.prototype = Object.create(Error.prototype), t.prototype.constructor = t, t;
}
var nr = Aa(function(n) {
  return function(t) {
    n(this), this.message = t ? t.length + ` errors occurred during unsubscription:
` + t.map(function(i, r) {
      return r + 1 + ") " + i.toString();
    }).join(`
  `) : "", this.name = "UnsubscriptionError", this.errors = t;
  };
});
function ws(n, e) {
  if (n) {
    var t = n.indexOf(e);
    0 <= t && n.splice(t, 1);
  }
}
var Tr = function() {
  function n(e) {
    this.initialTeardown = e, this.closed = !1, this._parentage = null, this._finalizers = null;
  }
  return n.prototype.unsubscribe = function() {
    var e, t, i, r, l;
    if (!this.closed) {
      this.closed = !0;
      var a = this._parentage;
      if (a)
        if (this._parentage = null, Array.isArray(a))
          try {
            for (var s = St(a), o = s.next(); !o.done; o = s.next()) {
              var u = o.value;
              u.remove(this);
            }
          } catch (b) {
            e = { error: b };
          } finally {
            try {
              o && !o.done && (t = s.return) && t.call(s);
            } finally {
              if (e)
                throw e.error;
            }
          }
        else
          a.remove(this);
      var c = this.initialTeardown;
      if (Ct(c))
        try {
          c();
        } catch (b) {
          l = b instanceof nr ? b.errors : [b];
        }
      var d = this._finalizers;
      if (d) {
        this._finalizers = null;
        try {
          for (var f = St(d), h = f.next(); !h.done; h = f.next()) {
            var p = h.value;
            try {
              Ps(p);
            } catch (b) {
              l = l ?? [], b instanceof nr ? l = $n($n([], Bn(l)), Bn(b.errors)) : l.push(b);
            }
          }
        } catch (b) {
          i = { error: b };
        } finally {
          try {
            h && !h.done && (r = f.return) && r.call(f);
          } finally {
            if (i)
              throw i.error;
          }
        }
      }
      if (l)
        throw new nr(l);
    }
  }, n.prototype.add = function(e) {
    var t;
    if (e && e !== this)
      if (this.closed)
        Ps(e);
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
    t === e ? this._parentage = null : Array.isArray(t) && ws(t, e);
  }, n.prototype.remove = function(e) {
    var t = this._finalizers;
    t && ws(t, e), e instanceof n && e._removeParent(this);
  }, n.EMPTY = function() {
    var e = new n();
    return e.closed = !0, e;
  }(), n;
}();
Tr.EMPTY;
function Ea(n) {
  return n instanceof Tr || n && "closed" in n && Ct(n.remove) && Ct(n.add) && Ct(n.unsubscribe);
}
function Ps(n) {
  Ct(n) ? n() : n.unsubscribe();
}
var Km = {
  Promise: void 0
}, Wm = {
  setTimeout: function(n, e) {
    for (var t = [], i = 2; i < arguments.length; i++)
      t[i - 2] = arguments[i];
    return setTimeout.apply(void 0, $n([n, e], Bn(t)));
  },
  clearTimeout: function(n) {
    return clearTimeout(n);
  },
  delegate: void 0
};
function ya(n) {
  Wm.setTimeout(function() {
    throw n;
  });
}
function Hs() {
}
function zm(n) {
  n();
}
var Lr = function(n) {
  ct(e, n);
  function e(t) {
    var i = n.call(this) || this;
    return i.isStopped = !1, t ? (i.destination = t, Ea(t) && t.add(i)) : i.destination = Zm, i;
  }
  return e.create = function(t, i, r) {
    return new fr(t, i, r);
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
}(Tr), Ym = function() {
  function n(e) {
    this.partialObserver = e;
  }
  return n.prototype.next = function(e) {
    var t = this.partialObserver;
    if (t.next)
      try {
        t.next(e);
      } catch (i) {
        oi(i);
      }
  }, n.prototype.error = function(e) {
    var t = this.partialObserver;
    if (t.error)
      try {
        t.error(e);
      } catch (i) {
        oi(i);
      }
    else
      oi(e);
  }, n.prototype.complete = function() {
    var e = this.partialObserver;
    if (e.complete)
      try {
        e.complete();
      } catch (t) {
        oi(t);
      }
  }, n;
}(), fr = function(n) {
  ct(e, n);
  function e(t, i, r) {
    var l = n.call(this) || this, a;
    return Ct(t) || !t ? a = {
      next: t ?? void 0,
      error: i ?? void 0,
      complete: r ?? void 0
    } : a = t, l.destination = new Ym(a), l;
  }
  return e;
}(Lr);
function oi(n) {
  ya(n);
}
function Xm(n) {
  throw n;
}
var Zm = {
  closed: !0,
  next: Hs,
  error: Xm,
  complete: Hs
}, Or = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}();
function Sa(n) {
  return n;
}
function Qm(n) {
  return n.length === 0 ? Sa : n.length === 1 ? n[0] : function(t) {
    return n.reduce(function(i, r) {
      return r(i);
    }, t);
  };
}
var Yt = function() {
  function n(e) {
    e && (this._subscribe = e);
  }
  return n.prototype.lift = function(e) {
    var t = new n();
    return t.source = this, t.operator = e, t;
  }, n.prototype.subscribe = function(e, t, i) {
    var r = this, l = xm(e) ? e : new fr(e, t, i);
    return zm(function() {
      var a = r, s = a.operator, o = a.source;
      l.add(s ? s.call(l, o) : o ? r._subscribe(l) : r._trySubscribe(l));
    }), l;
  }, n.prototype._trySubscribe = function(e) {
    try {
      return this._subscribe(e);
    } catch (t) {
      e.error(t);
    }
  }, n.prototype.forEach = function(e, t) {
    var i = this;
    return t = Bs(t), new t(function(r, l) {
      var a = new fr({
        next: function(s) {
          try {
            e(s);
          } catch (o) {
            l(o), a.unsubscribe();
          }
        },
        error: l,
        complete: r
      });
      i.subscribe(a);
    });
  }, n.prototype._subscribe = function(e) {
    var t;
    return (t = this.source) === null || t === void 0 ? void 0 : t.subscribe(e);
  }, n.prototype[Or] = function() {
    return this;
  }, n.prototype.pipe = function() {
    for (var e = [], t = 0; t < arguments.length; t++)
      e[t] = arguments[t];
    return Qm(e)(this);
  }, n.prototype.toPromise = function(e) {
    var t = this;
    return e = Bs(e), new e(function(i, r) {
      var l;
      t.subscribe(function(a) {
        return l = a;
      }, function(a) {
        return r(a);
      }, function() {
        return i(l);
      });
    });
  }, n.create = function(e) {
    return new n(e);
  }, n;
}();
function Bs(n) {
  var e;
  return (e = n ?? Km.Promise) !== null && e !== void 0 ? e : Promise;
}
function Jm(n) {
  return n && Ct(n.next) && Ct(n.error) && Ct(n.complete);
}
function xm(n) {
  return n && n instanceof Lr || Jm(n) && Ea(n);
}
function Ta(n) {
  return Ct(n[Or]);
}
function La(n) {
  return Symbol.asyncIterator && Ct(n == null ? void 0 : n[Symbol.asyncIterator]);
}
function Oa(n) {
  return new TypeError("You provided " + (n !== null && typeof n == "object" ? "an invalid object" : "'" + n + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
}
function $m() {
  return typeof Symbol != "function" || !Symbol.iterator ? "@@iterator" : Symbol.iterator;
}
var Ra = $m();
function ka(n) {
  return Ct(n == null ? void 0 : n[Ra]);
}
function Da(n) {
  return mo(this, arguments, function() {
    var t, i, r, l;
    return Ir(this, function(a) {
      switch (a.label) {
        case 0:
          t = n.getReader(), a.label = 1;
        case 1:
          a.trys.push([1, , 9, 10]), a.label = 2;
        case 2:
          return [4, wn(t.read())];
        case 3:
          return i = a.sent(), r = i.value, l = i.done, l ? [4, wn(void 0)] : [3, 5];
        case 4:
          return [2, a.sent()];
        case 5:
          return [4, wn(r)];
        case 6:
          return [4, a.sent()];
        case 7:
          return a.sent(), [3, 2];
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
function Ma(n) {
  return Ct(n == null ? void 0 : n.getReader);
}
function An(n) {
  if (n instanceof Yt)
    return n;
  if (n != null) {
    if (Ta(n))
      return ep(n);
    if (va(n))
      return tp(n);
    if (Ca(n))
      return np(n);
    if (La(n))
      return Fa(n);
    if (ka(n))
      return ip(n);
    if (Ma(n))
      return rp(n);
  }
  throw Oa(n);
}
function ep(n) {
  return new Yt(function(e) {
    var t = n[Or]();
    if (Ct(t.subscribe))
      return t.subscribe(e);
    throw new TypeError("Provided object does not correctly implement Symbol.observable");
  });
}
function tp(n) {
  return new Yt(function(e) {
    for (var t = 0; t < n.length && !e.closed; t++)
      e.next(n[t]);
    e.complete();
  });
}
function np(n) {
  return new Yt(function(e) {
    n.then(function(t) {
      e.closed || (e.next(t), e.complete());
    }, function(t) {
      return e.error(t);
    }).then(null, ya);
  });
}
function ip(n) {
  return new Yt(function(e) {
    var t, i;
    try {
      for (var r = St(n), l = r.next(); !l.done; l = r.next()) {
        var a = l.value;
        if (e.next(a), e.closed)
          return;
      }
    } catch (s) {
      t = { error: s };
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
function Fa(n) {
  return new Yt(function(e) {
    lp(n, e).catch(function(t) {
      return e.error(t);
    });
  });
}
function rp(n) {
  return Fa(Da(n));
}
function lp(n, e) {
  var t, i, r, l;
  return ia(this, void 0, void 0, function() {
    var a, s;
    return Ir(this, function(o) {
      switch (o.label) {
        case 0:
          o.trys.push([0, 5, 6, 11]), t = po(n), o.label = 1;
        case 1:
          return [4, t.next()];
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
          return s = o.sent(), r = { error: s }, [3, 11];
        case 6:
          return o.trys.push([6, , 9, 10]), i && !i.done && (l = t.return) ? [4, l.call(t)] : [3, 8];
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
function Qt(n, e, t, i, r) {
  return new sp(n, e, t, i, r);
}
var sp = function(n) {
  ct(e, n);
  function e(t, i, r, l, a, s) {
    var o = n.call(this, t) || this;
    return o.onFinalize = a, o.shouldUnsubscribe = s, o._next = i ? function(u) {
      try {
        i(u);
      } catch (c) {
        t.error(c);
      }
    } : n.prototype._next, o._error = l ? function(u) {
      try {
        l(u);
      } catch (c) {
        t.error(c);
      } finally {
        this.unsubscribe();
      }
    } : n.prototype._error, o._complete = r ? function() {
      try {
        r();
      } catch (u) {
        t.error(u);
      } finally {
        this.unsubscribe();
      }
    } : n.prototype._complete, o;
  }
  return e.prototype.unsubscribe = function() {
    var t;
    if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
      var i = this.closed;
      n.prototype.unsubscribe.call(this), !i && ((t = this.onFinalize) === null || t === void 0 || t.call(this));
    }
  }, e;
}(Lr);
function ap(n) {
  return n && Ct(n.schedule);
}
function op(n) {
  return n[n.length - 1];
}
function up(n) {
  return ap(op(n)) ? n.pop() : void 0;
}
function Cn(n, e, t, i, r) {
  i === void 0 && (i = 0), r === void 0 && (r = !1);
  var l = e.schedule(function() {
    t(), r ? n.add(this.schedule(null, i)) : this.unsubscribe();
  }, i);
  if (n.add(l), !r)
    return l;
}
function Na(n) {
  return Jt(function(e, t) {
    var i = null, r = !1, l;
    i = e.subscribe(Qt(t, void 0, void 0, function(a) {
      l = An(n(a, Na(n)(e))), i ? (i.unsubscribe(), i = null, l.subscribe(t)) : r = !0;
    })), r && (i.unsubscribe(), i = null, l.subscribe(t));
  });
}
function Ua(n, e) {
  return e === void 0 && (e = 0), Jt(function(t, i) {
    t.subscribe(Qt(i, function(r) {
      return Cn(i, n, function() {
        return i.next(r);
      }, e);
    }, function() {
      return Cn(i, n, function() {
        return i.complete();
      }, e);
    }, function(r) {
      return Cn(i, n, function() {
        return i.error(r);
      }, e);
    }));
  });
}
function wa(n, e) {
  return e === void 0 && (e = 0), Jt(function(t, i) {
    i.add(n.schedule(function() {
      return t.subscribe(i);
    }, e));
  });
}
function cp(n, e) {
  return An(n).pipe(wa(e), Ua(e));
}
function dp(n, e) {
  return An(n).pipe(wa(e), Ua(e));
}
function fp(n, e) {
  return new Yt(function(t) {
    var i = 0;
    return e.schedule(function() {
      i === n.length ? t.complete() : (t.next(n[i++]), t.closed || this.schedule());
    });
  });
}
function hp(n, e) {
  return new Yt(function(t) {
    var i;
    return Cn(t, e, function() {
      i = n[Ra](), Cn(t, e, function() {
        var r, l, a;
        try {
          r = i.next(), l = r.value, a = r.done;
        } catch (s) {
          t.error(s);
          return;
        }
        a ? t.complete() : t.next(l);
      }, 0, !0);
    }), function() {
      return Ct(i == null ? void 0 : i.return) && i.return();
    };
  });
}
function Pa(n, e) {
  if (!n)
    throw new Error("Iterable cannot be null");
  return new Yt(function(t) {
    Cn(t, e, function() {
      var i = n[Symbol.asyncIterator]();
      Cn(t, e, function() {
        i.next().then(function(r) {
          r.done ? t.complete() : t.next(r.value);
        });
      }, 0, !0);
    });
  });
}
function mp(n, e) {
  return Pa(Da(n), e);
}
function pp(n, e) {
  if (n != null) {
    if (Ta(n))
      return cp(n, e);
    if (va(n))
      return fp(n, e);
    if (Ca(n))
      return dp(n, e);
    if (La(n))
      return Pa(n, e);
    if (ka(n))
      return hp(n, e);
    if (Ma(n))
      return mp(n, e);
  }
  throw Oa(n);
}
function Ha(n, e) {
  return e ? pp(n, e) : An(n);
}
function sn(n, e) {
  return Jt(function(t, i) {
    var r = 0;
    t.subscribe(Qt(i, function(l) {
      i.next(n.call(e, l, r++));
    }));
  });
}
function gp(n, e, t, i, r, l, a, s) {
  var o = [], u = 0, c = 0, d = !1, f = function() {
    d && !o.length && !u && e.complete();
  }, h = function(b) {
    return u < i ? p(b) : o.push(b);
  }, p = function(b) {
    u++;
    var m = !1;
    An(t(b, c++)).subscribe(Qt(e, function(C) {
      e.next(C);
    }, function() {
      m = !0;
    }, void 0, function() {
      if (m)
        try {
          u--;
          for (var C = function() {
            var v = o.shift();
            a || p(v);
          }; o.length && u < i; )
            C();
          f();
        } catch (v) {
          e.error(v);
        }
    }));
  };
  return n.subscribe(Qt(e, h, function() {
    d = !0, f();
  })), function() {
  };
}
function hr(n, e, t) {
  return t === void 0 && (t = 1 / 0), Ct(e) ? hr(function(i, r) {
    return sn(function(l, a) {
      return e(i, l, r, a);
    })(An(n(i, r)));
  }, t) : (typeof e == "number" && (t = e), Jt(function(i, r) {
    return gp(i, r, n, t);
  }));
}
function _p(n, e) {
  return Ct(e) ? hr(n, e, 1) : hr(n, 1);
}
var bp = new Yt(function(n) {
  return n.complete();
});
function Yn(n) {
  return n <= 0 ? function() {
    return bp;
  } : Jt(function(e, t) {
    var i = 0;
    e.subscribe(Qt(t, function(r) {
      ++i <= n && (t.next(r), n <= i && t.complete());
    }));
  });
}
function Ba() {
  for (var n = [], e = 0; e < arguments.length; e++)
    n[e] = arguments[e];
  var t = up(n);
  return Ha(n, t);
}
function Vs(n, e) {
  return Jt(function(t, i) {
    var r = 0;
    t.subscribe(Qt(i, function(l) {
      return n.call(e, l, r++) && i.next(l);
    }));
  });
}
function js(n) {
  return Jt(function(e, t) {
    try {
      e.subscribe(t);
    } finally {
      t.add(n);
    }
  });
}
function Ip(n, e) {
  return Jt(function(t, i) {
    var r = null, l = 0, a = !1, s = function() {
      return a && !r && i.complete();
    };
    t.subscribe(Qt(i, function(o) {
      r == null || r.unsubscribe();
      var u = 0, c = l++;
      An(n(o, c)).subscribe(r = Qt(i, function(d) {
        return i.next(e ? e(o, d, c, u++) : d);
      }, function() {
        r = null, s();
      }));
    }, function() {
      a = !0, s();
    }));
  });
}
function Xn(n, e, t) {
  var i = Ct(n) || e || t ? { next: n, error: e, complete: t } : n;
  return i ? Jt(function(r, l) {
    var a;
    (a = i.subscribe) === null || a === void 0 || a.call(i);
    var s = !0;
    r.subscribe(Qt(l, function(o) {
      var u;
      (u = i.next) === null || u === void 0 || u.call(i, o), l.next(o);
    }, function() {
      var o;
      s = !1, (o = i.complete) === null || o === void 0 || o.call(i), l.complete();
    }, function(o) {
      var u;
      s = !1, (u = i.error) === null || u === void 0 || u.call(i, o), l.error(o);
    }, function() {
      var o, u;
      s && ((o = i.unsubscribe) === null || o === void 0 || o.call(i)), (u = i.finalize) === null || u === void 0 || u.call(i);
    }));
  }) : Sa;
}
class vp {
  constructor(e, t, i, r, l, a, s, o, u) {
    this._uuid = e, this._filename = t, this._author = i, this._type = r, this._date = l, this._version = a, this._comment = s, this._archived = o, this._available = u;
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
function Va(n) {
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
var Cp = /* @__PURE__ */ function() {
  function n(e, t, i, r) {
    r === void 0 && (r = "download_load"), this.originalEvent = e, this.xhr = t, this.request = i, this.type = r;
    var l = t.status, a = t.responseType;
    this.status = l ?? 0, this.responseType = a ?? "";
    var s = t.getAllResponseHeaders();
    this.responseHeaders = s ? s.split(`
`).reduce(function(c, d) {
      var f = d.indexOf(": ");
      return c[d.slice(0, f)] = d.slice(f + 2), c;
    }, {}) : {}, this.response = Va(t);
    var o = e.loaded, u = e.total;
    this.loaded = o, this.total = u;
  }
  return n;
}(), mi = Aa(function(n) {
  return function(t, i, r) {
    this.message = t, this.name = "AjaxError", this.xhr = i, this.request = r, this.status = i.status, this.responseType = i.responseType;
    var l;
    try {
      l = Va(i);
    } catch {
      l = i.responseText;
    }
    this.response = l;
  };
}), Ap = function() {
  function n(e, t) {
    return mi.call(this, "ajax timeout", e, t), this.name = "AjaxTimeoutError", this;
  }
  return n.prototype = Object.create(mi.prototype), n;
}();
function Ep(n, e) {
  return En({ method: "GET", url: n, headers: e });
}
function yp(n, e, t) {
  return En({ method: "POST", url: n, body: e, headers: t });
}
function Sp(n, e) {
  return En({ method: "DELETE", url: n, headers: e });
}
function Tp(n, e, t) {
  return En({ method: "PUT", url: n, body: e, headers: t });
}
function Lp(n, e, t) {
  return En({ method: "PATCH", url: n, body: e, headers: t });
}
var Op = sn(function(n) {
  return n.response;
});
function Rp(n, e) {
  return Op(En({
    method: "GET",
    url: n,
    headers: e
  }));
}
var En = function() {
  var n = function(e) {
    var t = typeof e == "string" ? {
      url: e
    } : e;
    return Dp(t);
  };
  return n.get = Ep, n.post = yp, n.delete = Sp, n.put = Tp, n.patch = Lp, n.getJSON = Rp, n;
}(), kp = "upload", Gs = "download", ir = "loadstart", rr = "progress", qs = "load";
function Dp(n) {
  return new Yt(function(e) {
    var t, i, r = ze({ async: !0, crossDomain: !1, withCredentials: !1, method: "GET", timeout: 0, responseType: "json" }, n), l = r.queryParams, a = r.body, s = r.headers, o = r.url;
    if (!o)
      throw new TypeError("url is required");
    if (l) {
      var u;
      if (o.includes("?")) {
        var c = o.split("?");
        if (2 < c.length)
          throw new TypeError("invalid url");
        u = new URLSearchParams(c[1]), new URLSearchParams(l).forEach(function(z, F) {
          return u.set(F, z);
        }), o = c[0] + "?" + u;
      } else
        u = new URLSearchParams(l), o = o + "?" + u;
    }
    var d = {};
    if (s)
      for (var f in s)
        s.hasOwnProperty(f) && (d[f.toLowerCase()] = s[f]);
    var h = r.crossDomain;
    !h && !("x-requested-with" in d) && (d["x-requested-with"] = "XMLHttpRequest");
    var p = r.withCredentials, b = r.xsrfCookieName, m = r.xsrfHeaderName;
    if ((p || !h) && b && m) {
      var C = (i = (t = document == null ? void 0 : document.cookie.match(new RegExp("(^|;\\s*)(" + b + ")=([^;]*)"))) === null || t === void 0 ? void 0 : t.pop()) !== null && i !== void 0 ? i : "";
      C && (d[m] = C);
    }
    var v = Mp(a, d), T = ze(ze({}, r), {
      url: o,
      headers: d,
      body: v
    }), y;
    y = n.createXHR ? n.createXHR() : new XMLHttpRequest();
    {
      var k = n.progressSubscriber, R = n.includeDownloadProgress, _ = R === void 0 ? !1 : R, A = n.includeUploadProgress, w = A === void 0 ? !1 : A, I = function(z, F) {
        y.addEventListener(z, function() {
          var L, j = F();
          (L = k == null ? void 0 : k.error) === null || L === void 0 || L.call(k, j), e.error(j);
        });
      };
      I("timeout", function() {
        return new Ap(y, T);
      }), I("abort", function() {
        return new mi("aborted", y, T);
      });
      var g = function(z, F) {
        return new Cp(F, y, T, z + "_" + F.type);
      }, D = function(z, F, L) {
        z.addEventListener(F, function(j) {
          e.next(g(L, j));
        });
      };
      w && [ir, rr, qs].forEach(function(z) {
        return D(y.upload, z, kp);
      }), k && [ir, rr].forEach(function(z) {
        return y.upload.addEventListener(z, function(F) {
          var L;
          return (L = k == null ? void 0 : k.next) === null || L === void 0 ? void 0 : L.call(k, F);
        });
      }), _ && [ir, rr].forEach(function(z) {
        return D(y, z, Gs);
      });
      var O = function(z) {
        var F = "ajax error" + (z ? " " + z : "");
        e.error(new mi(F, y, T));
      };
      y.addEventListener("error", function(z) {
        var F;
        (F = k == null ? void 0 : k.error) === null || F === void 0 || F.call(k, z), O();
      }), y.addEventListener(qs, function(z) {
        var F, L, j = y.status;
        if (j < 400) {
          (F = k == null ? void 0 : k.complete) === null || F === void 0 || F.call(k);
          var ue = void 0;
          try {
            ue = g(Gs, z);
          } catch (ke) {
            e.error(ke);
            return;
          }
          e.next(ue), e.complete();
        } else
          (L = k == null ? void 0 : k.error) === null || L === void 0 || L.call(k, z), O(j);
      });
    }
    var N = T.user, W = T.method, G = T.async;
    N ? y.open(W, o, G, N, T.password) : y.open(W, o, G), G && (y.timeout = T.timeout, y.responseType = T.responseType), "withCredentials" in y && (y.withCredentials = T.withCredentials);
    for (var f in d)
      d.hasOwnProperty(f) && y.setRequestHeader(f, d[f]);
    return v ? y.send(v) : y.send(), function() {
      y && y.readyState !== 4 && y.abort();
    };
  });
}
function Mp(n, e) {
  var t;
  if (!n || typeof n == "string" || Hp(n) || Bp(n) || Np(n) || Up(n) || wp(n) || Vp(n))
    return n;
  if (Pp(n))
    return n.buffer;
  if (typeof n == "object")
    return e["content-type"] = (t = e["content-type"]) !== null && t !== void 0 ? t : "application/json;charset=utf-8", JSON.stringify(n);
  throw new TypeError("Unknown body type");
}
var Fp = Object.prototype.toString;
function Rr(n, e) {
  return Fp.call(n) === "[object " + e + "]";
}
function Np(n) {
  return Rr(n, "ArrayBuffer");
}
function Up(n) {
  return Rr(n, "File");
}
function wp(n) {
  return Rr(n, "Blob");
}
function Pp(n) {
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView(n);
}
function Hp(n) {
  return typeof FormData < "u" && n instanceof FormData;
}
function Bp(n) {
  return typeof URLSearchParams < "u" && n instanceof URLSearchParams;
}
function Vp(n) {
  return typeof ReadableStream < "u" && n instanceof ReadableStream;
}
class jp {
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
const Gp = new jp("https://demo.compas.energy", {}, "DSOM Versatel Production URL"), qp = [Gp], Kp = qp[0].getUrl();
class ja {
  constructor(e = {}) {
    this.configuration = e;
  }
  get basePath() {
    return this.configuration.basePath ?? Kp;
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
  constructor(e = new ja()) {
    this.configuration = e, this.middleware = [], this.withMiddleware = (t) => {
      const i = this.clone();
      return i.middleware = i.middleware.concat(t), i;
    }, this.withPreMiddleware = (t) => this.withMiddleware(t.map((i) => ({ pre: i }))), this.withPostMiddleware = (t) => this.withMiddleware(t.map((i) => ({ post: i }))), this.createRequestArgs = ({ url: t, query: i, method: r, headers: l, body: a, responseType: s }) => ({
      url: `${this.configuration.basePath}${t}${i && Object.keys(i).length ? `?${zp(i)}` : ""}`,
      method: r,
      headers: l,
      body: a instanceof FormData ? a : JSON.stringify(a),
      responseType: s ?? "json"
    }), this.rxjsRequest = (t) => Ba(t).pipe(
      sn((i) => (this.middleware.filter((r) => r.pre).forEach((r) => i = r.pre(i)), i)),
      _p(
        (i) => En(i).pipe(
          sn((r) => (this.middleware.filter((l) => l.post).forEach((l) => r = l.post(r)), r))
        )
      )
    ), this.clone = () => Object.assign(Object.create(Object.getPrototypeOf(this)), this), this.middleware = e.middleware;
  }
  request(e, t) {
    return this.rxjsRequest(this.createRequestArgs(e)).pipe(
      sn((i) => {
        const { status: r, response: l } = i;
        if (r >= 200 && r < 300)
          return (t == null ? void 0 : t.response) === "raw" ? i : l;
        throw i;
      })
    );
  }
}
const In = (n) => encodeURIComponent(`${n}`), zp = (n) => Object.entries(n).map(
  ([e, t]) => t instanceof Array ? t.map((i) => `${In(e)}=${In(i)}`).join("&") : `${In(e)}=${In(t)}`
).join("&"), ui = (n, e, t) => {
  if (n == null)
    throw new Error(`Parameter "${e}" was null or undefined when calling "${t}".`);
};
class Yp extends Wp {
  retrieveDataResourceByVersion({ id: e, version: t }, i) {
    ui(e, "id", "retrieveDataResourceByVersion"), ui(t, "version", "retrieveDataResourceByVersion");
    const r = {};
    return this.request({
      url: "/api/scl/{id}/version/{version}".replace("{id}", In(e)).replace("{version}", In(t)),
      method: "GET",
      headers: r,
      responseType: "blob"
    }, i == null ? void 0 : i.responseOpts);
  }
  retrieveDataResourceHistory({ id: e }, t) {
    ui(e, "id", "retrieveDataResourceHistory");
    const i = {};
    return this.request({
      url: "/api/scl/{id}/versions".replace("{id}", In(e)),
      method: "GET",
      headers: i
    }, t == null ? void 0 : t.responseOpts);
  }
  searchForResources({ dataResourceSearch: e }, t) {
    ui(e, "dataResourceSearch", "searchForResources");
    const i = {
      "Content-Type": "application/json"
    };
    return this.request({
      url: "/api/scl/search",
      method: "POST",
      headers: i,
      body: e
    }, t == null ? void 0 : t.responseOpts);
  }
}
class Nn {
  constructor() {
    this.endpoint = "http://localhost:9090/compas-scl-data-service";
  }
  static getInstance() {
    return Nn.instance || (Nn.instance = new Nn()), Nn.instance;
  }
  searchFiles(e) {
    return this.generateApiClient(this.endpoint).searchForResources({
      dataResourceSearch: this.mapToDataResourceSearch(e)
    }).pipe(
      Vs((i) => !!i || !!i.results),
      sn((i) => i.results),
      sn(
        (i) => i.map((r) => this.mapToFileSearchResult(r))
      )
    );
  }
  getHistoryFiles(e) {
    return this.generateApiClient(this.endpoint).retrieveDataResourceHistory({
      id: e
    }).pipe(
      Vs((i) => !!i || !!i.versions),
      sn((i) => i.versions),
      sn(
        (i) => i.map((r) => this.mapToFileSearchResult(r))
      )
    );
  }
  downloadSclData(e, t, i) {
    return this.generateApiClient(this.endpoint).retrieveDataResourceByVersion({
      id: e,
      version: i
    });
  }
  mapToFileSearchResult(e) {
    return console.log("data", e), new vp(
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
    const t = new ja({
      basePath: e
      // accessToken: authInfo.token,
    });
    return new Yp(t);
  }
}
var fn;
class Ks {
  constructor() {
    kr(this, fn, Lt([]));
  }
  get store() {
    return Tn(this, fn);
  }
  updateData(e) {
    Tn(this, fn).set(e);
  }
  addData(e) {
    Tn(this, fn).update((t) => [...t, e]);
  }
  removeData(e) {
    Tn(this, fn).update((t) => t.filter((i) => i.uuid !== e));
  }
  getData(e) {
    return Ya(Tn(this, fn)).find((t) => t.uuid === e);
  }
}
fn = new WeakMap();
function Xp(n) {
  let e, t, i, r, l, a, s, o, u, c, d;
  function f(m) {
    n[14](m);
  }
  let h = {
    $$slots: {
      actions: [eg],
      content: [Jp],
      title: [Qp]
    },
    $$scope: { ctx: n }
  };
  /*dialogOpen*/
  n[4] !== void 0 && (h.open = /*dialogOpen*/
  n[4]), t = new ef({ props: h }), se.push(() => pt(t, "open", f));
  function p(m) {
    n[15](m);
  }
  let b = {
    filterTypes: (
      /*filterTypes*/
      n[11]
    ),
    $$slots: {
      "filter-controls": [ig]
    },
    $$scope: { ctx: n }
  };
  return (
    /*filtersToSearch*/
    n[6] !== void 0 && (b.activeFilters = /*filtersToSearch*/
    n[6]), a = new Fh({ props: b }), se.push(() => pt(a, "activeFilters", p)), c = new Gm({
      props: {
        style: "padding: 1rem; width: 100%; height: 100%;",
        $$slots: { default: [rg] },
        $$scope: { ctx: n }
      }
    }), {
      c() {
        e = ne("div"), ie(t.$$.fragment), r = ae(), l = ne("div"), ie(a.$$.fragment), o = ae(), u = ne("div"), ie(c.$$.fragment), U(l, "class", "search-filter"), U(u, "class", "table-container"), U(e, "class", "version-editor-container");
      },
      m(m, C) {
        V(m, e, C), ee(t, e, null), J(e, r), J(e, l), ee(a, l, null), J(e, o), J(e, u), ee(c, u, null), d = !0;
      },
      p(m, C) {
        const v = {};
        C & /*$$scope, historyStore, loadingDone, currentSelectFile*/
        8388622 && (v.$$scope = { dirty: C, ctx: m }), !i && C & /*dialogOpen*/
        16 && (i = !0, v.open = /*dialogOpen*/
        m[4], mt(() => i = !1)), t.$set(v);
        const T = {};
        C & /*$$scope*/
        8388608 && (T.$$scope = { dirty: C, ctx: m }), !s && C & /*filtersToSearch*/
        64 && (s = !0, T.activeFilters = /*filtersToSearch*/
        m[6], mt(() => s = !1)), a.$set(T);
        const y = {};
        C & /*$$scope, dataStore, loadingDone*/
        8388617 && (y.$$scope = { dirty: C, ctx: m }), c.$set(y);
      },
      i(m) {
        d || (E(t.$$.fragment, m), E(a.$$.fragment, m), E(c.$$.fragment, m), d = !0);
      },
      o(m) {
        S(t.$$.fragment, m), S(a.$$.fragment, m), S(c.$$.fragment, m), d = !1;
      },
      d(m) {
        m && B(e), te(t), te(a), te(c);
      }
    }
  );
}
function Zp(n) {
  let e, t;
  return e = new wh({
    props: { loadingDone: !/*loading*/
    n[5] }
  }), {
    c() {
      ie(e.$$.fragment);
    },
    m(i, r) {
      ee(e, i, r), t = !0;
    },
    p(i, r) {
      const l = {};
      r & /*loading*/
      32 && (l.loadingDone = !/*loading*/
      i[5]), e.$set(l);
    },
    i(i) {
      t || (E(e.$$.fragment, i), t = !0);
    },
    o(i) {
      S(e.$$.fragment, i), t = !1;
    },
    d(i) {
      te(e, i);
    }
  };
}
function Qp(n) {
  var l;
  let e, t, i = (
    /*currentSelectFile*/
    ((l = n[2]) == null ? void 0 : l.filename) + ""
  ), r;
  return {
    c() {
      e = ne("h3"), t = at("Version History of file "), r = at(i), U(e, "slot", "title");
    },
    m(a, s) {
      V(a, e, s), J(e, t), J(e, r);
    },
    p(a, s) {
      var o;
      s & /*currentSelectFile*/
      4 && i !== (i = /*currentSelectFile*/
      ((o = a[2]) == null ? void 0 : o.filename) + "") && At(r, i);
    },
    d(a) {
      a && B(e);
    }
  };
}
function Jp(n) {
  let e, t, i;
  return t = new Ia({
    props: {
      columnDefs: (
        /*modalColumnDef*/
        n[8]
      ),
      store: (
        /*historyStore*/
        n[1]
      ),
      loadingDone: (
        /*loadingDone*/
        n[3]
      ),
      rowActions: (
        /*historyRowActions*/
        n[10]
      )
    }
  }), {
    c() {
      e = ne("div"), ie(t.$$.fragment), U(e, "slot", "content");
    },
    m(r, l) {
      V(r, e, l), ee(t, e, null), i = !0;
    },
    p(r, l) {
      const a = {};
      l & /*historyStore*/
      2 && (a.store = /*historyStore*/
      r[1]), l & /*loadingDone*/
      8 && (a.loadingDone = /*loadingDone*/
      r[3]), t.$set(a);
    },
    i(r) {
      i || (E(t.$$.fragment, r), i = !0);
    },
    o(r) {
      S(t.$$.fragment, r), i = !1;
    },
    d(r) {
      r && B(e), te(t);
    }
  };
}
function xp(n) {
  let e;
  return {
    c() {
      e = at("Done");
    },
    m(t, i) {
      V(t, e, i);
    },
    d(t) {
      t && B(e);
    }
  };
}
function $p(n) {
  let e, t, i, r;
  return e = new yr({}), i = new la({
    props: {
      $$slots: { default: [xp] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      ie(e.$$.fragment), t = ae(), ie(i.$$.fragment);
    },
    m(l, a) {
      ee(e, l, a), V(l, t, a), ee(i, l, a), r = !0;
    },
    p(l, a) {
      const s = {};
      a & /*$$scope*/
      8388608 && (s.$$scope = { dirty: a, ctx: l }), i.$set(s);
    },
    i(l) {
      r || (E(e.$$.fragment, l), E(i.$$.fragment, l), r = !0);
    },
    o(l) {
      S(e.$$.fragment, l), S(i.$$.fragment, l), r = !1;
    },
    d(l) {
      l && B(t), te(e, l), te(i, l);
    }
  };
}
function eg(n) {
  let e, t, i;
  return t = new _i({
    props: {
      callback: (
        /*onDialogClose*/
        n[13]
      ),
      variant: "raised",
      $$slots: { default: [$p] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      e = ne("div"), ie(t.$$.fragment), U(e, "slot", "actions");
    },
    m(r, l) {
      V(r, e, l), ee(t, e, null), i = !0;
    },
    p(r, l) {
      const a = {};
      l & /*$$scope*/
      8388608 && (a.$$scope = { dirty: l, ctx: r }), t.$set(a);
    },
    i(r) {
      i || (E(t.$$.fragment, r), i = !0);
    },
    o(r) {
      S(t.$$.fragment, r), i = !1;
    },
    d(r) {
      r && B(e), te(t);
    }
  };
}
function tg(n) {
  let e;
  return {
    c() {
      e = at("Search");
    },
    m(t, i) {
      V(t, e, i);
    },
    d(t) {
      t && B(e);
    }
  };
}
function ng(n) {
  let e, t, i, r;
  return e = new th({}), i = new la({
    props: {
      $$slots: { default: [tg] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      ie(e.$$.fragment), t = ae(), ie(i.$$.fragment);
    },
    m(l, a) {
      ee(e, l, a), V(l, t, a), ee(i, l, a), r = !0;
    },
    p(l, a) {
      const s = {};
      a & /*$$scope*/
      8388608 && (s.$$scope = { dirty: a, ctx: l }), i.$set(s);
    },
    i(l) {
      r || (E(e.$$.fragment, l), E(i.$$.fragment, l), r = !0);
    },
    o(l) {
      S(e.$$.fragment, l), S(i.$$.fragment, l), r = !1;
    },
    d(l) {
      l && B(t), te(e, l), te(i, l);
    }
  };
}
function ig(n) {
  let e, t;
  return e = new _i({
    props: {
      slot: "filter-controls",
      variant: "raised",
      callback: (
        /*search*/
        n[12]
      ),
      $$slots: { default: [ng] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      ie(e.$$.fragment);
    },
    m(i, r) {
      ee(e, i, r), t = !0;
    },
    p(i, r) {
      const l = {};
      r & /*$$scope*/
      8388608 && (l.$$scope = { dirty: r, ctx: i }), e.$set(l);
    },
    i(i) {
      t || (E(e.$$.fragment, i), t = !0);
    },
    o(i) {
      S(e.$$.fragment, i), t = !1;
    },
    d(i) {
      te(e, i);
    }
  };
}
function rg(n) {
  let e, t, i, r;
  return i = new Ia({
    props: {
      columnDefs: (
        /*columnDefs*/
        n[7]
      ),
      store: (
        /*dataStore*/
        n[0]
      ),
      loadingDone: (
        /*loadingDone*/
        n[3]
      ),
      rowActions: (
        /*rowActions*/
        n[9]
      )
    }
  }), {
    c() {
      e = ne("h3"), e.textContent = "Version Table", t = ae(), ie(i.$$.fragment), lr(e, "margin-bottom", "1rem");
    },
    m(l, a) {
      V(l, e, a), V(l, t, a), ee(i, l, a), r = !0;
    },
    p(l, a) {
      const s = {};
      a & /*dataStore*/
      1 && (s.store = /*dataStore*/
      l[0]), a & /*loadingDone*/
      8 && (s.loadingDone = /*loadingDone*/
      l[3]), i.$set(s);
    },
    i(l) {
      r || (E(i.$$.fragment, l), r = !0);
    },
    o(l) {
      S(i.$$.fragment, l), r = !1;
    },
    d(l) {
      l && (B(e), B(t)), te(i, l);
    }
  };
}
function lg(n) {
  let e, t, i, r;
  const l = [Zp, Xp], a = [];
  function s(o, u) {
    return (
      /*loading*/
      o[5] ? 0 : 1
    );
  }
  return e = s(n), t = a[e] = l[e](n), {
    c() {
      t.c(), i = Xe();
    },
    m(o, u) {
      a[e].m(o, u), V(o, i, u), r = !0;
    },
    p(o, [u]) {
      let c = e;
      e = s(o), e === c ? a[e].p(o, u) : (Pe(), S(a[c], 1, 1, () => {
        a[c] = null;
      }), He(), t = a[e], t ? t.p(o, u) : (t = a[e] = l[e](o), t.c()), E(t, 1), t.m(i.parentNode, i));
    },
    i(o) {
      r || (E(t), r = !0);
    },
    o(o) {
      S(t), r = !1;
    },
    d(o) {
      o && B(i), a[e].d(o);
    }
  };
}
function sg(n) {
  return new Date(n).toLocaleDateString();
}
function ag(n) {
  const e = {
    uuid: null,
    filename: null,
    author: null,
    type: null,
    name: null,
    from: null,
    to: null
  };
  return console.log("Convert filter to search params: ", n), n.filter((t) => !t.disabled).forEach((t) => {
    console.log("KEY:", t.key), t.key === "from" || t.key === "to" ? e[t.key] = new Date(t.value).toISOString() : e[t.key] = t.value;
  }), e;
}
function og(n, e, t) {
  const i = Nn.getInstance();
  let r, { dataStore: l = new Ks() } = e, { historyStore: a = new Ks() } = e, s = !0, o = !1, u = !0;
  ot(() => {
    setTimeout(
      () => {
        t(5, u = !1);
      },
      1e3
    );
  });
  const c = [
    {
      headerName: "UUID",
      field: "uuid",
      numeric: !1,
      filter: !0,
      filterType: "text",
      sortable: !1
    },
    {
      headerName: "Filename",
      field: "filename",
      numeric: !1,
      filter: !0,
      filterType: "text",
      sortable: !0
    },
    {
      headerName: "Type",
      field: "type",
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
      headerName: "Date",
      field: "date",
      numeric: !1,
      filter: !0,
      filterType: "text",
      sortable: !0,
      valueFormatter: sg
    },
    {
      headerName: "Version",
      field: "version",
      numeric: !1,
      filter: !0,
      filterType: "text",
      sortable: !0
    }
  ], d = {
    headerName: "",
    field: "actions",
    numeric: !1,
    filter: !1,
    filterType: "text",
    minWidth: "100px",
    sortable: !1
  }, f = [
    ...c,
    {
      headerName: "Comment",
      field: "comment",
      numeric: !1,
      filter: !0,
      filterType: "text",
      sortable: !0
    },
    d
  ];
  c.push(d);
  const h = [
    {
      icon: "edit",
      callback: (A) => k(A),
      disabled: (A) => !A.available
    },
    {
      icon: "find-in-page",
      callback: (A) => T(A),
      disabled: () => !1
    },
    {
      icon: "download",
      callback: (A) => C(A),
      disabled: (A) => !A.available
    }
  ], p = [
    {
      icon: "download",
      callback: (A) => C(A),
      disabled: (A) => !A.available
    }
  ], b = [
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
  let m = [];
  function C(A) {
    console.log("Download file: ", A), i.downloadSclData(A.uuid, A.type, A.version).pipe(Yn(1), Xn((w) => {
      const I = window.URL.createObjectURL(w), g = document.createElement("a");
      g.href = I, g.download = A.filename, g.style.display = "none", document.body.appendChild(g), g.click(), document.body.removeChild(g), window.URL.revokeObjectURL(I);
    })).subscribe();
  }
  function v() {
    const A = ag(m);
    console.log("Search with params: ", A), t(3, s = !1), i.searchFiles(A).pipe(
      Yn(1),
      Xn((w) => {
        [...w], l.updateData(w);
      }),
      js(() => {
        t(3, s = !0);
      })
    ).subscribe();
  }
  function T(A) {
    t(2, r = A), i.getHistoryFiles(A.uuid).pipe(Yn(1), Xn((w) => {
      t(4, o = !0), [...w], a.updateData(w);
    })).subscribe();
  }
  function y(A) {
    console.log("Dialog closed with result: ", A), t(4, o = !1);
  }
  function k(A) {
    if (!confirm(`Open the selected file?

 Please make sure you save all changes on your current project.`))
      return;
    let w = "";
    i.downloadSclData(A.uuid, A.type, A.version).pipe(
      Yn(1),
      Xn((I) => {
        w = window.URL.createObjectURL(I);
      }),
      Ip(() => Ha(fetch(w).then((I) => {
        if (I.status === 200)
          return I.text();
        throw new Error(`Failed to load ${A.filename}: ${I.status} ${I.statusText}`);
      }))),
      Yn(1),
      Na((I) => (alert(I), console.error(I), Ba(void 0))),
      Xn((I) => {
        var g;
        if (!I)
          return;
        const D = A.filename, O = new DOMParser().parseFromString(I, "application/xml");
        (g = window.document.getElementsByTagName("open-scd")[0]) === null || g === void 0 || g.dispatchEvent(new CustomEvent(
          "open-doc",
          {
            bubbles: !0,
            composed: !0,
            detail: { localFile: !1, doc: O, docName: D }
          }
        ));
      }),
      js(() => w && window.URL.revokeObjectURL(w))
    ).subscribe();
  }
  function R(A) {
    o = A, t(4, o);
  }
  function _(A) {
    m = A, t(6, m);
  }
  return n.$$set = (A) => {
    "dataStore" in A && t(0, l = A.dataStore), "historyStore" in A && t(1, a = A.historyStore);
  }, [
    l,
    a,
    r,
    s,
    o,
    u,
    m,
    c,
    f,
    h,
    p,
    b,
    v,
    y,
    R,
    _
  ];
}
class ug extends Re {
  constructor(e) {
    super(), Oe(this, e, og, lg, Ee, { dataStore: 0, historyStore: 1 });
  }
}
function Ws(n) {
  let e, t;
  return e = new ug({}), {
    c() {
      ie(e.$$.fragment);
    },
    m(i, r) {
      ee(e, i, r), t = !0;
    },
    i(i) {
      t || (E(e.$$.fragment, i), t = !0);
    },
    o(i) {
      S(e.$$.fragment, i), t = !1;
    },
    d(i) {
      te(e, i);
    }
  };
}
function cg(n) {
  let e, t, i, r, l, a = (
    /*doc*/
    (n[0] || /*dev*/
    n[1]) && Ws()
  );
  return {
    c() {
      a && a.c(), e = ae(), t = ne("input"), i = ae(), r = ne("input"), U(t, "type", "hidden"), U(t, "name", "package-name"), t.value = ea, U(r, "type", "hidden"), U(r, "name", "package-version"), r.value = ta;
    },
    m(s, o) {
      a && a.m(s, o), V(s, e, o), V(s, t, o), V(s, i, o), V(s, r, o), l = !0;
    },
    p(s, [o]) {
      /*doc*/
      s[0] || /*dev*/
      s[1] ? a ? o & /*doc, dev*/
      3 && E(a, 1) : (a = Ws(), a.c(), E(a, 1), a.m(e.parentNode, e)) : a && (Pe(), S(a, 1, 1, () => {
        a = null;
      }), He());
    },
    i(s) {
      l || (E(a), l = !0);
    },
    o(s) {
      S(a), l = !1;
    },
    d(s) {
      s && (B(e), B(t), B(i), B(r)), a && a.d(s);
    }
  };
}
function dg(n, e, t) {
  let { doc: i } = e, { dev: r = !1 } = e;
  return n.$$set = (l) => {
    "doc" in l && t(0, i = l.doc), "dev" in l && t(1, r = l.dev);
  }, [i, r];
}
class fg extends Re {
  constructor(e) {
    super(), Oe(this, e, dg, cg, Ee, { doc: 0, dev: 1 });
  }
}
class gg extends HTMLElement {
  connectedCallback() {
    var t;
    this.attachShadow({ mode: "open" }), this.plugin = new fg({
      target: this.shadowRoot,
      props: {
        doc: this._doc,
        editCount: -1
      }
    });
    const e = hg();
    (t = this.shadowRoot) == null || t.appendChild(e);
  }
  set doc(e) {
    this._doc = e, this.plugin && this.plugin.$set({ doc: e });
  }
  set editCount(e) {
    this.plugin && this.plugin.$set({ editCount: e });
  }
}
function hg() {
  const n = `${ea}-v${ta}-style`, e = mg(), t = document.createElement("link");
  return t.rel = "stylesheet", t.type = "text/css", t.href = e, t.id = n, t;
}
function mg() {
  const n = new URL(import.meta.url), e = n.origin, t = n.pathname.split("/").slice(0, -1).filter(Boolean).join("/");
  return [e, t, "style.css"].filter(Boolean).join("/");
}
export {
  gg as default
};
