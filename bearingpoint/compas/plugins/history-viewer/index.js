var Pa = Object.defineProperty;
var Ha = (n, e, t) => e in n ? Pa(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var Gi = (n, e, t) => (Ha(n, typeof e != "symbol" ? e + "" : e, t), t), Ba = (n, e, t) => {
  if (!e.has(n))
    throw TypeError("Cannot " + t);
};
var Sn = (n, e, t) => (Ba(n, e, "read from private field"), t ? t.call(n) : e.get(n)), Or = (n, e, t) => {
  if (e.has(n))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(n) : e.set(n, t);
};
function nt() {
}
function z(n, e) {
  for (const t in e)
    n[t] = e[t];
  return (
    /** @type {T & S} */
    n
  );
}
function js(n) {
  return n();
}
function Rr() {
  return /* @__PURE__ */ Object.create(null);
}
function Ze(n) {
  n.forEach(js);
}
function he(n) {
  return typeof n == "function";
}
function ye(n, e) {
  return n != n ? e == e : n !== e || n && typeof n == "object" || typeof n == "function";
}
function Va(n) {
  return Object.keys(n).length === 0;
}
function Gs(n, ...e) {
  if (n == null) {
    for (const i of e)
      i(void 0);
    return nt;
  }
  const t = n.subscribe(...e);
  return t.unsubscribe ? () => t.unsubscribe() : t;
}
function ja(n) {
  let e;
  return Gs(n, (t) => e = t)(), e;
}
function it(n, e, t) {
  n.$$.on_destroy.push(Gs(e, t));
}
function ge(n, e, t, i) {
  if (n) {
    const r = Ks(n, e, t, i);
    return n[0](r);
  }
}
function Ks(n, e, t, i) {
  return n[1] && i ? z(t.ctx.slice(), n[1](i(e))) : t.ctx;
}
function _e(n, e, t, i) {
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
function be(n, e, t, i, r, l) {
  if (r) {
    const a = Ks(e, t, i, l);
    n.p(a, r);
  }
}
function Ie(n) {
  if (n.ctx.length > 32) {
    const e = [], t = n.ctx.length / 32;
    for (let i = 0; i < t; i++)
      e[i] = -1;
    return e;
  }
  return -1;
}
function et(n) {
  const e = {};
  for (const t in n)
    t[0] !== "$" && (e[t] = n[t]);
  return e;
}
function me(n, e) {
  const t = {};
  e = new Set(e);
  for (const i in n)
    !e.has(i) && i[0] !== "$" && (t[i] = n[i]);
  return t;
}
function fr(n) {
  const e = {};
  for (const t in n)
    e[t] = !0;
  return e;
}
function Ot(n, e, t) {
  return n.set(t), e;
}
function de(n) {
  return n && he(n.destroy) ? n.destroy : nt;
}
const Ga = ["", !0, 1, "true", "contenteditable"], qs = typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : (
  // @ts-ignore Node typings have this
  global
);
function ne(n, e) {
  n.appendChild(e);
}
function j(n, e, t) {
  n.insertBefore(e, t || null);
}
function V(n) {
  n.parentNode && n.parentNode.removeChild(n);
}
function hr(n, e) {
  for (let t = 0; t < n.length; t += 1)
    n[t] && n[t].d(e);
}
function le(n) {
  return document.createElement(n);
}
function st(n) {
  return document.createElementNS("http://www.w3.org/2000/svg", n);
}
function ot(n) {
  return document.createTextNode(n);
}
function ce() {
  return ot(" ");
}
function Xe() {
  return ot("");
}
function oe(n, e, t, i) {
  return n.addEventListener(e, t, i), () => n.removeEventListener(e, t, i);
}
function B(n, e, t) {
  t == null ? n.removeAttribute(e) : n.getAttribute(e) !== t && n.setAttribute(e, t);
}
const Ka = ["width", "height"];
function ae(n, e) {
  const t = Object.getOwnPropertyDescriptors(n.__proto__);
  for (const i in e)
    e[i] == null ? n.removeAttribute(i) : i === "style" ? n.style.cssText = e[i] : i === "__value" ? n.value = n[i] = e[i] : t[i] && t[i].set && Ka.indexOf(i) === -1 ? n[i] = e[i] : B(n, i, e[i]);
}
function kr(n, e) {
  for (const t in e)
    B(n, t, e[t]);
}
function qa(n, e) {
  Object.keys(e).forEach((t) => {
    Wa(n, t, e[t]);
  });
}
function Wa(n, e, t) {
  const i = e.toLowerCase();
  i in n ? n[i] = typeof n[i] == "boolean" && t === "" ? !0 : t : e in n ? n[e] = typeof n[e] == "boolean" && t === "" ? !0 : t : B(n, e, t);
}
function ci(n) {
  return /-/.test(n) ? qa : ae;
}
function Ws(n) {
  return n === "" ? null : +n;
}
function za(n) {
  return Array.from(n.childNodes);
}
function St(n, e) {
  e = "" + e, n.data !== e && (n.data = /** @type {string} */
  e);
}
function Ya(n, e) {
  e = "" + e, n.wholeText !== e && (n.data = /** @type {string} */
  e);
}
function Xa(n, e, t) {
  ~Ga.indexOf(t) ? Ya(n, e) : St(n, e);
}
function dn(n, e) {
  n.value = e ?? "";
}
function ir(n, e, t, i) {
  t == null ? n.style.removeProperty(e) : n.style.setProperty(e, t, "");
}
function kt(n, e) {
  return new n(e);
}
let Jn;
function Qn(n) {
  Jn = n;
}
function Je() {
  if (!Jn)
    throw new Error("Function called outside component initialization");
  return Jn;
}
function ut(n) {
  Je().$$.on_mount.push(n);
}
function Wt(n) {
  Je().$$.on_destroy.push(n);
}
function He(n, e) {
  return Je().$$.context.set(n, e), e;
}
function qe(n) {
  return Je().$$.context.get(n);
}
function Pn(n, e) {
  const t = n.$$.callbacks[e.type];
  t && t.slice().forEach((i) => i.call(this, e));
}
const kn = [], se = [];
let Nn = [];
const rr = [], zs = /* @__PURE__ */ Promise.resolve();
let lr = !1;
function Ys() {
  lr || (lr = !0, zs.then(Xs));
}
function mr() {
  return Ys(), zs;
}
function sr(n) {
  Nn.push(n);
}
function gt(n) {
  rr.push(n);
}
const Ki = /* @__PURE__ */ new Set();
let Tn = 0;
function Xs() {
  if (Tn !== 0)
    return;
  const n = Jn;
  do {
    try {
      for (; Tn < kn.length; ) {
        const e = kn[Tn];
        Tn++, Qn(e), Za(e.$$);
      }
    } catch (e) {
      throw kn.length = 0, Tn = 0, e;
    }
    for (Qn(null), kn.length = 0, Tn = 0; se.length; )
      se.pop()();
    for (let e = 0; e < Nn.length; e += 1) {
      const t = Nn[e];
      Ki.has(t) || (Ki.add(t), t());
    }
    Nn.length = 0;
  } while (kn.length);
  for (; rr.length; )
    rr.pop()();
  lr = !1, Ki.clear(), Qn(n);
}
function Za(n) {
  if (n.fragment !== null) {
    n.update(), Ze(n.before_update);
    const e = n.dirty;
    n.dirty = [-1], n.fragment && n.fragment.p(n.ctx, e), n.after_update.forEach(sr);
  }
}
function Qa(n) {
  const e = [], t = [];
  Nn.forEach((i) => n.indexOf(i) === -1 ? e.push(i) : t.push(i)), t.forEach((i) => i()), Nn = e;
}
const ui = /* @__PURE__ */ new Set();
let _n;
function Ve() {
  _n = {
    r: 0,
    c: [],
    p: _n
    // parent group
  };
}
function je() {
  _n.r || Ze(_n.c), _n = _n.p;
}
function A(n, e) {
  n && n.i && (ui.delete(n), n.i(e));
}
function S(n, e, t, i) {
  if (n && n.o) {
    if (ui.has(n))
      return;
    ui.add(n), _n.c.push(() => {
      ui.delete(n), i && (t && n.d(1), i());
    }), n.o(e);
  } else
    i && i();
}
function Vt(n) {
  return (n == null ? void 0 : n.length) !== void 0 ? n : Array.from(n);
}
function pr(n, e) {
  S(n, 1, 1, () => {
    e.delete(n.key);
  });
}
function gr(n, e, t, i, r, l, a, s, o, u, c, d) {
  let f = n.length, h = l.length, g = f;
  const _ = {};
  for (; g--; )
    _[n[g].key] = g;
  const m = [], C = /* @__PURE__ */ new Map(), I = /* @__PURE__ */ new Map(), O = [];
  for (g = h; g--; ) {
    const p = d(r, l, g), y = t(p);
    let M = a.get(y);
    M ? O.push(() => M.p(p, e)) : (M = u(y, p), M.c()), C.set(y, m[g] = M), y in _ && I.set(y, Math.abs(g - _[y]));
  }
  const E = /* @__PURE__ */ new Set(), L = /* @__PURE__ */ new Set();
  function k(p) {
    A(p, 1), p.m(s, c), a.set(p.key, p), c = p.first, h--;
  }
  for (; f && h; ) {
    const p = m[h - 1], y = n[f - 1], M = p.key, v = y.key;
    p === y ? (c = p.first, f--, h--) : C.has(v) ? !a.has(M) || E.has(M) ? k(p) : L.has(v) ? f-- : I.get(M) > I.get(v) ? (L.add(M), k(p)) : (E.add(v), f--) : (o(y, a), f--);
  }
  for (; f--; ) {
    const p = n[f];
    C.has(p.key) || o(p, a);
  }
  for (; h; )
    k(m[h - 1]);
  return Ze(O), m;
}
function fe(n, e) {
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
function Oe(n) {
  return typeof n == "object" && n !== null ? n : {};
}
function _t(n, e, t) {
  const i = n.$$.props[e];
  i !== void 0 && (n.$$.bound[i] = t, t(n.$$.ctx[i]));
}
function te(n) {
  n && n.c();
}
function $(n, e, t) {
  const { fragment: i, after_update: r } = n.$$;
  i && i.m(e, t), sr(() => {
    const l = n.$$.on_mount.map(js).filter(he);
    n.$$.on_destroy ? n.$$.on_destroy.push(...l) : Ze(l), n.$$.on_mount = [];
  }), r.forEach(sr);
}
function ee(n, e) {
  const t = n.$$;
  t.fragment !== null && (Qa(t.after_update), Ze(t.on_destroy), t.fragment && t.fragment.d(e), t.on_destroy = t.fragment = null, t.ctx = []);
}
function Ja(n, e) {
  n.$$.dirty[0] === -1 && (kn.push(n), Ys(), n.$$.dirty.fill(0)), n.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function De(n, e, t, i, r, l, a = null, s = [-1]) {
  const o = Jn;
  Qn(n);
  const u = n.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: l,
    update: nt,
    not_equal: r,
    bound: Rr(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (o ? o.$$.context : [])),
    // everything else
    callbacks: Rr(),
    dirty: s,
    skip_bound: !1,
    root: e.target || o.$$.root
  };
  a && a(u.root);
  let c = !1;
  if (u.ctx = t ? t(n, e.props || {}, (d, f, ...h) => {
    const g = h.length ? h[0] : f;
    return u.ctx && r(u.ctx[d], u.ctx[d] = g) && (!u.skip_bound && u.bound[d] && u.bound[d](g), c && Ja(n, d)), f;
  }) : [], u.update(), c = !0, Ze(u.before_update), u.fragment = i ? i(u.ctx) : !1, e.target) {
    if (e.hydrate) {
      const d = za(e.target);
      u.fragment && u.fragment.l(d), d.forEach(V);
    } else
      u.fragment && u.fragment.c();
    e.intro && A(n.$$.fragment), $(n, e.target, e.anchor), Xs();
  }
  Qn(o);
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
    Gi(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    Gi(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    ee(this, 1), this.$destroy = nt;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, t) {
    if (!he(t))
      return nt;
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
    this.$$set && !Va(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const xa = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(xa);
const Zs = "version-editor", Qs = "0.0.1";
function $a(n, e = {}) {
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
function re(n) {
  return Object.entries(n).filter(([e, t]) => e !== "" && t).map(([e]) => e).join(" ");
}
function pe(n, e, t, i = { bubbles: !0 }, r = !1) {
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
function jt(n, e) {
  let t = Object.getOwnPropertyNames(n);
  const i = {};
  for (let r = 0; r < t.length; r++) {
    const l = t[r], a = l.indexOf("$");
    a !== -1 && e.indexOf(l.substring(0, a + 1)) !== -1 || e.indexOf(l) === -1 && (i[l] = n[l]);
  }
  return i;
}
const Dr = /^[a-z]+(?::(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/, eo = /^[^$]+(?:\$(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/;
function tt(n) {
  let e, t = [];
  n.$on = (r, l) => {
    let a = r, s = () => {
    };
    return e ? s = e(a, l) : t.push([a, l]), a.match(Dr) && console && console.warn('Event modifiers in SMUI now use "$" instead of ":", so that all events can be bound with modifiers. Please update your event binding: ', a), () => {
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
      const f = u.match(Dr), h = u.match(eo), g = f || h;
      if (u.match(/^SMUI:\w+:/)) {
        const C = u.split(":");
        let I = "";
        for (let O = 0; O < C.length; O++)
          I += O === C.length - 1 ? ":" + C[O] : C[O].split("-").map((E) => E.slice(0, 1).toUpperCase() + E.slice(1)).join("");
        console.warn(`The event ${u.split("$")[0]} has been renamed to ${I.split("$")[0]}.`), u = I;
      }
      if (g) {
        const C = u.split(f ? ":" : "$");
        u = C[0];
        const I = C.slice(1).reduce((O, E) => (O[E] = !0, O), {});
        I.passive && (d = d || {}, d.passive = !0), I.nonpassive && (d = d || {}, d.passive = !1), I.capture && (d = d || {}, d.capture = !0), I.once && (d = d || {}, d.once = !0), I.preventDefault && (c = to(c)), I.stopPropagation && (c = no(c)), I.stopImmediatePropagation && (c = io(c)), I.self && (c = ro(r, c)), I.trusted && (c = lo(c));
      }
      const _ = Mr(r, u, c, d), m = () => {
        _();
        const C = l.indexOf(m);
        C > -1 && l.splice(C, 1);
      };
      return l.push(m), u in a || (a[u] = Mr(r, u, i)), m;
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
function Mr(n, e, t, i) {
  return n.addEventListener(e, t, i), () => n.removeEventListener(e, t, i);
}
function to(n) {
  return function(e) {
    return e.preventDefault(), n.call(this, e);
  };
}
function no(n) {
  return function(e) {
    return e.stopPropagation(), n.call(this, e);
  };
}
function io(n) {
  return function(e) {
    return e.stopImmediatePropagation(), n.call(this, e);
  };
}
function ro(n, e) {
  return function(t) {
    if (t.target === n)
      return e.call(this, t);
  };
}
function lo(n) {
  return function(e) {
    if (e.isTrusted)
      return n.call(this, e);
  };
}
function Pe(n, e) {
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
var ii;
function Js(n, e) {
  e === void 0 && (e = !1);
  var t = n.CSS, i = ii;
  if (typeof ii == "boolean" && !e)
    return ii;
  var r = t && typeof t.supports == "function";
  if (!r)
    return !1;
  var l = t.supports("--css-vars", "yes"), a = t.supports("(--css-vars: yes)") && t.supports("color", "#00000000");
  return i = l || a, e || (ii = i), i;
}
function so(n, e, t) {
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
var ar = function(n, e) {
  return ar = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, i) {
    t.__proto__ = i;
  } || function(t, i) {
    for (var r in i)
      Object.prototype.hasOwnProperty.call(i, r) && (t[r] = i[r]);
  }, ar(n, e);
};
function ct(n, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  ar(n, e);
  function t() {
    this.constructor = n;
  }
  n.prototype = e === null ? Object.create(e) : (t.prototype = e.prototype, new t());
}
var We = function() {
  return We = Object.assign || function(e) {
    for (var t, i = 1, r = arguments.length; i < r; i++) {
      t = arguments[i];
      for (var l in t)
        Object.prototype.hasOwnProperty.call(t, l) && (e[l] = t[l]);
    }
    return e;
  }, We.apply(this, arguments);
};
function xs(n, e, t, i) {
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
function _r(n, e) {
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
function yt(n) {
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
function Hn(n, e) {
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
function xn(n, e, t) {
  if (t || arguments.length === 2)
    for (var i = 0, r = e.length, l; i < r; i++)
      (l || !(i in e)) && (l || (l = Array.prototype.slice.call(e, 0, i)), l[i] = e[i]);
  return n.concat(l || Array.prototype.slice.call(e));
}
function Un(n) {
  return this instanceof Un ? (this.v = n, this) : new Un(n);
}
function ao(n, e, t) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var i = t.apply(n, e || []), r, l = [];
  return r = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype), s("next"), s("throw"), s("return", a), r[Symbol.asyncIterator] = function() {
    return this;
  }, r;
  function a(h) {
    return function(g) {
      return Promise.resolve(g).then(h, d);
    };
  }
  function s(h, g) {
    i[h] && (r[h] = function(_) {
      return new Promise(function(m, C) {
        l.push([h, _, m, C]) > 1 || o(h, _);
      });
    }, g && (r[h] = g(r[h])));
  }
  function o(h, g) {
    try {
      u(i[h](g));
    } catch (_) {
      f(l[0][3], _);
    }
  }
  function u(h) {
    h.value instanceof Un ? Promise.resolve(h.value.v).then(c, d) : f(l[0][2], h);
  }
  function c(h) {
    o("next", h);
  }
  function d(h) {
    o("throw", h);
  }
  function f(h, g) {
    h(g), l.shift(), l.length && o(l[0][0], l[0][1]);
  }
}
function oo(n) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var e = n[Symbol.asyncIterator], t;
  return e ? e.call(n) : (n = typeof yt == "function" ? yt(n) : n[Symbol.iterator](), t = {}, i("next"), i("throw"), i("return"), t[Symbol.asyncIterator] = function() {
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
var mi = (
  /** @class */
  function() {
    function n(e, t) {
      for (var i = [], r = 2; r < arguments.length; r++)
        i[r - 2] = arguments[r];
      this.root = e, this.initialize.apply(this, xn([], Hn(i))), this.foundation = t === void 0 ? this.getDefaultFoundation() : t, this.foundation.init(), this.initialSyncWithDOM();
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
function Xn(n) {
  return n === void 0 && (n = window), uo(n) ? { passive: !0 } : !1;
}
function uo(n) {
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
const $s = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  applyPassive: Xn
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
function co(n, e) {
  if (n.closest)
    return n.closest(e);
  for (var t = n; t; ) {
    if (br(t, e))
      return t;
    t = t.parentElement;
  }
  return null;
}
function br(n, e) {
  var t = n.matches || n.webkitMatchesSelector || n.msMatchesSelector;
  return t.call(n, e);
}
function fo(n) {
  var e = n;
  if (e.offsetParent !== null)
    return e.scrollWidth;
  var t = e.cloneNode(!0);
  t.style.setProperty("position", "absolute"), t.style.setProperty("transform", "translate(-9999px, -9999px)"), document.documentElement.appendChild(t);
  var i = t.scrollWidth;
  return document.documentElement.removeChild(t), i;
}
const $n = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  closest: co,
  estimateScrollWidth: fo,
  matches: br
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
var ho = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  BG_FOCUSED: "mdc-ripple-upgraded--background-focused",
  FG_ACTIVATION: "mdc-ripple-upgraded--foreground-activation",
  FG_DEACTIVATION: "mdc-ripple-upgraded--foreground-deactivation",
  ROOT: "mdc-ripple-upgraded",
  UNBOUNDED: "mdc-ripple-upgraded--unbounded"
}, mo = {
  VAR_FG_SCALE: "--mdc-ripple-fg-scale",
  VAR_FG_SIZE: "--mdc-ripple-fg-size",
  VAR_FG_TRANSLATE_END: "--mdc-ripple-fg-translate-end",
  VAR_FG_TRANSLATE_START: "--mdc-ripple-fg-translate-start",
  VAR_LEFT: "--mdc-ripple-left",
  VAR_TOP: "--mdc-ripple-top"
}, Fr = {
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
var Nr = [
  "touchstart",
  "pointerdown",
  "mousedown",
  "keydown"
], Ur = [
  "touchend",
  "pointerup",
  "mouseup",
  "contextmenu"
], ri = [], pi = (
  /** @class */
  function(n) {
    ct(e, n);
    function e(t) {
      var i = n.call(this, We(We({}, e.defaultAdapter), t)) || this;
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
        return ho;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return mo;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return Fr;
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
          for (var l = yt(Nr), a = l.next(); !a.done; a = l.next()) {
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
          for (var l = yt(Ur), a = l.next(); !a.done; a = l.next()) {
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
        for (var r = yt(Nr), l = r.next(); !l.done; l = r.next()) {
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
        for (var r = yt(Ur), l = r.next(); !l.done; l = r.next()) {
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
            var s = t !== void 0 && ri.length > 0 && ri.some(function(o) {
              return i.adapter.containsEventTarget(o);
            });
            if (s) {
              this.resetActivationState();
              return;
            }
            t !== void 0 && (ri.push(t.target), this.registerDeactivationHandlers(t)), r.wasElementMadeActive = this.checkElementMadeActive(t), r.wasElementMadeActive && this.animateActivation(), requestAnimationFrame(function() {
              ri = [], !r.wasElementMadeActive && t !== void 0 && (t.key === " " || t.keyCode === 32) && (r.wasElementMadeActive = i.checkElementMadeActive(t), r.wasElementMadeActive && i.animateActivation()), r.wasElementMadeActive || (i.activationState = i.defaultActivationState());
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
        var f = this.getFgTranslationCoordinates(), h = f.startPoint, g = f.endPoint;
        c = h.x + "px, " + h.y + "px", d = g.x + "px, " + g.y + "px";
      }
      this.adapter.updateCssVariable(r, c), this.adapter.updateCssVariable(l, d), clearTimeout(this.activationTimer), clearTimeout(this.fgDeactivationRemovalTimer), this.rmBoundedActivationClasses(), this.adapter.removeClass(s), this.adapter.computeBoundingRect(), this.adapter.addClass(o), this.activationTimer = setTimeout(function() {
        t.activationTimerCallback();
      }, u);
    }, e.prototype.getFgTranslationCoordinates = function() {
      var t = this.activationState, i = t.activationEvent, r = t.wasActivatedByPointer, l;
      r ? l = so(i, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect()) : l = {
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
      }, Fr.FG_DEACTIVATION_MS));
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
        var r = We({}, i);
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
var di = (
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
          return Js(window);
        },
        computeBoundingRect: function() {
          return t.root.getBoundingClientRect();
        },
        containsEventTarget: function(i) {
          return t.root.contains(i);
        },
        deregisterDocumentInteractionHandler: function(i, r) {
          return document.documentElement.removeEventListener(i, r, Xn());
        },
        deregisterInteractionHandler: function(i, r) {
          return t.root.removeEventListener(i, r, Xn());
        },
        deregisterResizeHandler: function(i) {
          return window.removeEventListener("resize", i);
        },
        getWindowPageOffset: function() {
          return { x: window.pageXOffset, y: window.pageYOffset };
        },
        isSurfaceActive: function() {
          return br(t.root, ":active");
        },
        isSurfaceDisabled: function() {
          return !!t.disabled;
        },
        isUnbounded: function() {
          return !!t.unbounded;
        },
        registerDocumentInteractionHandler: function(i, r) {
          return document.documentElement.addEventListener(i, r, Xn());
        },
        registerInteractionHandler: function(i, r) {
          return t.root.addEventListener(i, r, Xn());
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
      return new pi(e.createAdapter(this));
    }, e.prototype.initialSyncWithDOM = function() {
      var t = this.root;
      this.isUnbounded = "mdcRippleIsUnbounded" in t.dataset;
    }, e.prototype.setUnbounded = function() {
      this.foundation.setUnbounded(!!this.isUnbounded);
    }, e;
  }(mi)
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
var qi = "mdc-dom-focus-sentinel", po = (
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
      [].slice.call(this.root.querySelectorAll("." + qi)).forEach(function(e) {
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
        var r = i.getAttribute("aria-disabled") === "true" || i.getAttribute("disabled") != null || i.getAttribute("hidden") != null || i.getAttribute("aria-hidden") === "true", l = i.tabIndex >= 0 && i.getBoundingClientRect().width > 0 && !i.classList.contains(qi) && !r, a = !1;
        if (l) {
          var s = getComputedStyle(i);
          a = s.display === "none" || s.visibility === "hidden";
        }
        return l && !a;
      });
    }, n.prototype.createSentinel = function() {
      var e = document.createElement("div");
      return e.setAttribute("tabindex", "0"), e.setAttribute("aria-hidden", "true"), e.classList.add(qi), e;
    }, n;
  }()
);
const go = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  FocusTrap: po
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
}, Dt = /* @__PURE__ */ new Set();
Dt.add(we.BACKSPACE);
Dt.add(we.ENTER);
Dt.add(we.SPACEBAR);
Dt.add(we.PAGE_UP);
Dt.add(we.PAGE_DOWN);
Dt.add(we.END);
Dt.add(we.HOME);
Dt.add(we.ARROW_LEFT);
Dt.add(we.ARROW_UP);
Dt.add(we.ARROW_RIGHT);
Dt.add(we.ARROW_DOWN);
Dt.add(we.DELETE);
Dt.add(we.ESCAPE);
Dt.add(we.TAB);
var Nt = {
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
}, Mt = /* @__PURE__ */ new Map();
Mt.set(Nt.BACKSPACE, we.BACKSPACE);
Mt.set(Nt.ENTER, we.ENTER);
Mt.set(Nt.SPACEBAR, we.SPACEBAR);
Mt.set(Nt.PAGE_UP, we.PAGE_UP);
Mt.set(Nt.PAGE_DOWN, we.PAGE_DOWN);
Mt.set(Nt.END, we.END);
Mt.set(Nt.HOME, we.HOME);
Mt.set(Nt.ARROW_LEFT, we.ARROW_LEFT);
Mt.set(Nt.ARROW_UP, we.ARROW_UP);
Mt.set(Nt.ARROW_RIGHT, we.ARROW_RIGHT);
Mt.set(Nt.ARROW_DOWN, we.ARROW_DOWN);
Mt.set(Nt.DELETE, we.DELETE);
Mt.set(Nt.ESCAPE, we.ESCAPE);
Mt.set(Nt.TAB, we.TAB);
var ln = /* @__PURE__ */ new Set();
ln.add(we.PAGE_UP);
ln.add(we.PAGE_DOWN);
ln.add(we.END);
ln.add(we.HOME);
ln.add(we.ARROW_LEFT);
ln.add(we.ARROW_UP);
ln.add(we.ARROW_RIGHT);
ln.add(we.ARROW_DOWN);
function pt(n) {
  var e = n.key;
  if (Dt.has(e))
    return e;
  var t = Mt.get(n.keyCode);
  return t || we.UNKNOWN;
}
function _o(n) {
  return ln.has(pt(n));
}
const { applyPassive: li } = $s, { matches: bo } = $n;
function Rt(n, { ripple: e = !0, surface: t = !1, unbounded: i = !1, disabled: r = !1, color: l, active: a, rippleElement: s, eventTarget: o, activeTarget: u, addClass: c = (g) => n.classList.add(g), removeClass: d = (g) => n.classList.remove(g), addStyle: f = (g, _) => n.style.setProperty(g, _), initPromise: h = Promise.resolve() } = {}) {
  let g, _ = qe("SMUI:addLayoutListener"), m, C = a, I = o, O = u;
  function E() {
    t ? (c("mdc-ripple-surface"), l === "primary" ? (c("smui-ripple-surface--primary"), d("smui-ripple-surface--secondary")) : l === "secondary" ? (d("smui-ripple-surface--primary"), c("smui-ripple-surface--secondary")) : (d("smui-ripple-surface--primary"), d("smui-ripple-surface--secondary"))) : (d("mdc-ripple-surface"), d("smui-ripple-surface--primary"), d("smui-ripple-surface--secondary")), g && C !== a && (C = a, a ? g.activate() : a === !1 && g.deactivate()), e && !g ? (g = new pi({
      addClass: c,
      browserSupportsCssVars: () => Js(window),
      computeBoundingRect: () => (s || n).getBoundingClientRect(),
      containsEventTarget: (k) => n.contains(k),
      deregisterDocumentInteractionHandler: (k, p) => document.documentElement.removeEventListener(k, p, li()),
      deregisterInteractionHandler: (k, p) => (o || n).removeEventListener(k, p, li()),
      deregisterResizeHandler: (k) => window.removeEventListener("resize", k),
      getWindowPageOffset: () => ({
        x: window.pageXOffset,
        y: window.pageYOffset
      }),
      isSurfaceActive: () => a ?? bo(u || n, ":active"),
      isSurfaceDisabled: () => !!r,
      isUnbounded: () => !!i,
      registerDocumentInteractionHandler: (k, p) => document.documentElement.addEventListener(k, p, li()),
      registerInteractionHandler: (k, p) => (o || n).addEventListener(k, p, li()),
      registerResizeHandler: (k) => window.addEventListener("resize", k),
      removeClass: d,
      updateCssVariable: f
    }), h.then(() => {
      g && (g.init(), g.setUnbounded(i));
    })) : g && !e && h.then(() => {
      g && (g.destroy(), g = void 0);
    }), g && (I !== o || O !== u) && (I = o, O = u, g.destroy(), requestAnimationFrame(() => {
      g && (g.init(), g.setUnbounded(i));
    })), !e && i && c("mdc-ripple-upgraded--unbounded");
  }
  E(), _ && (m = _(L));
  function L() {
    g && g.layout();
  }
  return {
    update(k) {
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
      } = Object.assign({ ripple: !0, surface: !1, unbounded: !1, disabled: !1, color: void 0, active: void 0, rippleElement: void 0, eventTarget: void 0, activeTarget: void 0, addClass: (p) => n.classList.add(p), removeClass: (p) => n.classList.remove(p), addStyle: (p, y) => n.style.setProperty(p, y), initPromise: Promise.resolve() }, k)), E();
    },
    destroy() {
      g && (g.destroy(), g = void 0, d("mdc-ripple-surface"), d("smui-ripple-surface--primary"), d("smui-ripple-surface--secondary")), m && m();
    }
  };
}
function Io(n) {
  let e = (
    /*tag*/
    n[1]
  ), t, i, r = (
    /*tag*/
    n[1] && Wi(n)
  );
  return {
    c() {
      r && r.c(), t = Xe();
    },
    m(l, a) {
      r && r.m(l, a), j(l, t, a), i = !0;
    },
    p(l, a) {
      /*tag*/
      l[1] ? e ? ye(
        e,
        /*tag*/
        l[1]
      ) ? (r.d(1), r = Wi(l), e = /*tag*/
      l[1], r.c(), r.m(t.parentNode, t)) : r.p(l, a) : (r = Wi(l), e = /*tag*/
      l[1], r.c(), r.m(t.parentNode, t)) : e && (r.d(1), r = null, e = /*tag*/
      l[1]);
    },
    i(l) {
      i || (A(r, l), i = !0);
    },
    o(l) {
      S(r, l), i = !1;
    },
    d(l) {
      l && V(t), r && r.d(l);
    }
  };
}
function vo(n) {
  let e = (
    /*tag*/
    n[1]
  ), t, i = (
    /*tag*/
    n[1] && zi(n)
  );
  return {
    c() {
      i && i.c(), t = Xe();
    },
    m(r, l) {
      i && i.m(r, l), j(r, t, l);
    },
    p(r, l) {
      /*tag*/
      r[1] ? e ? ye(
        e,
        /*tag*/
        r[1]
      ) ? (i.d(1), i = zi(r), e = /*tag*/
      r[1], i.c(), i.m(t.parentNode, t)) : i.p(r, l) : (i = zi(r), e = /*tag*/
      r[1], i.c(), i.m(t.parentNode, t)) : e && (i.d(1), i = null, e = /*tag*/
      r[1]);
    },
    i: nt,
    o: nt,
    d(r) {
      r && V(t), i && i.d(r);
    }
  };
}
function Co(n) {
  let e, t, i, r, l;
  const a = (
    /*#slots*/
    n[8].default
  ), s = ge(
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
    u = z(u, o[c]);
  return {
    c() {
      e = st("svg"), s && s.c(), kr(e, u);
    },
    m(c, d) {
      j(c, e, d), s && s.m(e, null), n[9](e), i = !0, r || (l = [
        de(t = Qe.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        de(
          /*forwardEvents*/
          n[4].call(null, e)
        )
      ], r = !0);
    },
    p(c, d) {
      s && s.p && (!i || d & /*$$scope*/
      128) && be(
        s,
        a,
        c,
        /*$$scope*/
        c[7],
        i ? _e(
          a,
          /*$$scope*/
          c[7],
          d,
          null
        ) : Ie(
          /*$$scope*/
          c[7]
        ),
        null
      ), kr(e, u = fe(o, [d & /*$$restProps*/
      32 && /*$$restProps*/
      c[5]])), t && he(t.update) && d & /*use*/
      1 && t.update.call(
        null,
        /*use*/
        c[0]
      );
    },
    i(c) {
      i || (A(s, c), i = !0);
    },
    o(c) {
      S(s, c), i = !1;
    },
    d(c) {
      c && V(e), s && s.d(c), n[9](null), r = !1, Ze(l);
    }
  };
}
function Wi(n) {
  let e, t, i, r, l;
  const a = (
    /*#slots*/
    n[8].default
  ), s = ge(
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
    u = z(u, o[c]);
  return {
    c() {
      e = le(
        /*tag*/
        n[1]
      ), s && s.c(), ci(
        /*tag*/
        n[1]
      )(e, u);
    },
    m(c, d) {
      j(c, e, d), s && s.m(e, null), n[11](e), i = !0, r || (l = [
        de(t = Qe.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        de(
          /*forwardEvents*/
          n[4].call(null, e)
        )
      ], r = !0);
    },
    p(c, d) {
      s && s.p && (!i || d & /*$$scope*/
      128) && be(
        s,
        a,
        c,
        /*$$scope*/
        c[7],
        i ? _e(
          a,
          /*$$scope*/
          c[7],
          d,
          null
        ) : Ie(
          /*$$scope*/
          c[7]
        ),
        null
      ), ci(
        /*tag*/
        c[1]
      )(e, u = fe(o, [d & /*$$restProps*/
      32 && /*$$restProps*/
      c[5]])), t && he(t.update) && d & /*use*/
      1 && t.update.call(
        null,
        /*use*/
        c[0]
      );
    },
    i(c) {
      i || (A(s, c), i = !0);
    },
    o(c) {
      S(s, c), i = !1;
    },
    d(c) {
      c && V(e), s && s.d(c), n[11](null), r = !1, Ze(l);
    }
  };
}
function zi(n) {
  let e, t, i, r, l = [
    /*$$restProps*/
    n[5]
  ], a = {};
  for (let s = 0; s < l.length; s += 1)
    a = z(a, l[s]);
  return {
    c() {
      e = le(
        /*tag*/
        n[1]
      ), ci(
        /*tag*/
        n[1]
      )(e, a);
    },
    m(s, o) {
      j(s, e, o), n[10](e), i || (r = [
        de(t = Qe.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        de(
          /*forwardEvents*/
          n[4].call(null, e)
        )
      ], i = !0);
    },
    p(s, o) {
      ci(
        /*tag*/
        s[1]
      )(e, a = fe(l, [o & /*$$restProps*/
      32 && /*$$restProps*/
      s[5]])), t && he(t.update) && o & /*use*/
      1 && t.update.call(
        null,
        /*use*/
        s[0]
      );
    },
    d(s) {
      s && V(e), n[10](null), i = !1, Ze(r);
    }
  };
}
function Ao(n) {
  let e, t, i, r;
  const l = [Co, vo, Io], a = [];
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
      a[e].m(o, u), j(o, i, u), r = !0;
    },
    p(o, [u]) {
      let c = e;
      e = s(o), e === c ? a[e].p(o, u) : (Ve(), S(a[c], 1, 1, () => {
        a[c] = null;
      }), je(), t = a[e], t ? t.p(o, u) : (t = a[e] = l[e](o), t.c()), A(t, 1), t.m(i.parentNode, i));
    },
    i(o) {
      r || (A(t), r = !0);
    },
    o(o) {
      S(t), r = !1;
    },
    d(o) {
      o && V(i), a[e].d(o);
    }
  };
}
function Eo(n, e, t) {
  let i;
  const r = ["use", "tag", "getElement"];
  let l = me(e, r), { $$slots: a = {}, $$scope: s } = e, { use: o = [] } = e, { tag: u } = e;
  const c = tt(Je());
  let d;
  function f() {
    return d;
  }
  function h(m) {
    se[m ? "unshift" : "push"](() => {
      d = m, t(2, d);
    });
  }
  function g(m) {
    se[m ? "unshift" : "push"](() => {
      d = m, t(2, d);
    });
  }
  function _(m) {
    se[m ? "unshift" : "push"](() => {
      d = m, t(2, d);
    });
  }
  return n.$$set = (m) => {
    e = z(z({}, e), et(m)), t(5, l = me(e, r)), "use" in m && t(0, o = m.use), "tag" in m && t(1, u = m.tag), "$$scope" in m && t(7, s = m.$$scope);
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
    g,
    _
  ];
}
class Ft extends Me {
  constructor(e) {
    super(), De(this, e, Eo, Ao, ye, { use: 0, tag: 1, getElement: 6 });
  }
  get getElement() {
    return this.$$.ctx[6];
  }
}
const Ln = [];
function Lt(n, e = nt) {
  let t;
  const i = /* @__PURE__ */ new Set();
  function r(s) {
    if (ye(n, s) && (n = s, t)) {
      const o = !Ln.length;
      for (const u of i)
        u[1](), Ln.push(u, n);
      if (o) {
        for (let u = 0; u < Ln.length; u += 2)
          Ln[u][0](Ln[u + 1]);
        Ln.length = 0;
      }
    }
  }
  function l(s) {
    r(s(n));
  }
  function a(s, o = nt) {
    const u = [s, o];
    return i.add(u), i.size === 1 && (t = e(r, l) || nt), s(n), () => {
      i.delete(u), i.size === 0 && t && (t(), t = null);
    };
  }
  return { set: r, update: l, subscribe: a };
}
function yo(n) {
  let e;
  const t = (
    /*#slots*/
    n[4].default
  ), i = ge(
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
      8) && be(
        i,
        t,
        r,
        /*$$scope*/
        r[3],
        e ? _e(
          t,
          /*$$scope*/
          r[3],
          l,
          null
        ) : Ie(
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
      S(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function So(n, e, t) {
  let i, { $$slots: r = {}, $$scope: l } = e, { key: a } = e, { value: s } = e;
  const o = Lt(s);
  return it(n, o, (u) => t(5, i = u)), He(a, o), Wt(() => {
    o.set(void 0);
  }), n.$$set = (u) => {
    "key" in u && t(1, a = u.key), "value" in u && t(2, s = u.value), "$$scope" in u && t(3, l = u.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty & /*value*/
    4 && Ot(o, i = s, i);
  }, [o, a, s, l, r];
}
class Bn extends Me {
  constructor(e) {
    super(), De(this, e, So, yo, ye, { key: 1, value: 2 });
  }
}
function To(n) {
  let e;
  const t = (
    /*#slots*/
    n[10].default
  ), i = ge(
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
      4096) && be(
        i,
        t,
        r,
        /*$$scope*/
        r[12],
        e ? _e(
          t,
          /*$$scope*/
          r[12],
          l,
          null
        ) : Ie(
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
      S(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function Lo(n) {
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
      class: re({
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
      $$slots: { default: [To] },
      $$scope: { ctx: s }
    };
    for (let c = 0; c < r.length; c += 1)
      u = z(u, r[c]);
    return o !== void 0 && o & /*tag, forwardEvents, use, className, context, tabindex, $$restProps*/
    491 && (u = z(u, fe(r, [
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
        class: re({
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
      64 && Oe(
        /*context*/
        s[6] === "snackbar" ? { "aria-atomic": "false" } : {}
      ),
      o & /*tabindex*/
      128 && { tabindex: (
        /*tabindex*/
        s[7]
      ) },
      o & /*$$restProps*/
      256 && Oe(
        /*$$restProps*/
        s[8]
      )
    ]))), { props: u };
  }
  return l && (e = kt(l, a(n)), n[11](e)), {
    c() {
      e && te(e.$$.fragment), t = Xe();
    },
    m(s, o) {
      e && $(e, s, o), j(s, t, o), i = !0;
    },
    p(s, [o]) {
      if (o & /*component*/
      4 && l !== (l = /*component*/
      s[2])) {
        if (e) {
          Ve();
          const u = e;
          S(u.$$.fragment, 1, 0, () => {
            ee(u, 1);
          }), je();
        }
        l ? (e = kt(l, a(s, o)), s[11](e), te(e.$$.fragment), A(e.$$.fragment, 1), $(e, t.parentNode, t)) : e = null;
      } else if (l) {
        const u = o & /*tag, forwardEvents, use, className, context, tabindex, $$restProps*/
        491 ? fe(r, [
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
            class: re({
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
          64 && Oe(
            /*context*/
            s[6] === "snackbar" ? { "aria-atomic": "false" } : {}
          ),
          o & /*tabindex*/
          128 && { tabindex: (
            /*tabindex*/
            s[7]
          ) },
          o & /*$$restProps*/
          256 && Oe(
            /*$$restProps*/
            s[8]
          )
        ]) : {};
        o & /*$$scope*/
        4096 && (u.$$scope = { dirty: o, ctx: s }), e.$set(u);
      }
    },
    i(s) {
      i || (e && A(e.$$.fragment, s), i = !0);
    },
    o(s) {
      e && S(e.$$.fragment, s), i = !1;
    },
    d(s) {
      s && V(t), n[11](null), e && ee(e, s);
    }
  };
}
function Oo(n, e, t) {
  const i = ["use", "class", "component", "tag", "getElement"];
  let r = me(e, i), { $$slots: l = {}, $$scope: a } = e;
  const s = tt(Je());
  let { use: o = [] } = e, { class: u = "" } = e, c, { component: d = Ft } = e, { tag: f = d === Ft ? "span" : void 0 } = e;
  const h = qe("SMUI:label:context"), g = qe("SMUI:label:tabindex");
  function _() {
    return c.getElement();
  }
  function m(C) {
    se[C ? "unshift" : "push"](() => {
      c = C, t(4, c);
    });
  }
  return n.$$set = (C) => {
    e = z(z({}, e), et(C)), t(8, r = me(e, i)), "use" in C && t(0, o = C.use), "class" in C && t(1, u = C.class), "component" in C && t(2, d = C.component), "tag" in C && t(3, f = C.tag), "$$scope" in C && t(12, a = C.$$scope);
  }, [
    o,
    u,
    d,
    f,
    c,
    s,
    h,
    g,
    r,
    _,
    l,
    m,
    a
  ];
}
class ea extends Me {
  constructor(e) {
    super(), De(this, e, Oo, Lo, ye, {
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
function wr(n) {
  let e;
  return {
    c() {
      e = le("div"), B(e, "class", "mdc-button__touch");
    },
    m(t, i) {
      j(t, e, i);
    },
    d(t) {
      t && V(e);
    }
  };
}
function Ro(n) {
  let e, t, i, r;
  const l = (
    /*#slots*/
    n[28].default
  ), a = ge(
    l,
    n,
    /*$$scope*/
    n[30],
    null
  );
  let s = (
    /*touch*/
    n[6] && wr()
  );
  return {
    c() {
      e = le("div"), t = ce(), a && a.c(), s && s.c(), i = Xe(), B(e, "class", "mdc-button__ripple");
    },
    m(o, u) {
      j(o, e, u), j(o, t, u), a && a.m(o, u), s && s.m(o, u), j(o, i, u), r = !0;
    },
    p(o, u) {
      a && a.p && (!r || u[0] & /*$$scope*/
      1073741824) && be(
        a,
        l,
        o,
        /*$$scope*/
        o[30],
        r ? _e(
          l,
          /*$$scope*/
          o[30],
          u,
          null
        ) : Ie(
          /*$$scope*/
          o[30]
        ),
        null
      ), /*touch*/
      o[6] ? s || (s = wr(), s.c(), s.m(i.parentNode, i)) : s && (s.d(1), s = null);
    },
    i(o) {
      r || (A(a, o), r = !0);
    },
    o(o) {
      S(a, o), r = !1;
    },
    d(o) {
      o && (V(e), V(t), V(i)), a && a.d(o), s && s.d(o);
    }
  };
}
function ko(n) {
  let e, t, i;
  const r = [
    { tag: (
      /*tag*/
      n[10]
    ) },
    {
      use: [
        [
          Rt,
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
      class: re({
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
      ).map(Yi).concat([
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
      $$slots: { default: [Ro] },
      $$scope: { ctx: s }
    };
    for (let c = 0; c < r.length; c += 1)
      u = z(u, r[c]);
    return o !== void 0 && o[0] & /*tag, ripple, color, $$restProps, addClass, removeClass, addStyle, forwardEvents, use, className, variant, touch, context, secondary, internalClasses, internalStyles, style, actionProp, defaultProp, secondaryProp, href*/
    12580351 && (u = z(u, fe(r, [
      o[0] & /*tag*/
      1024 && { tag: (
        /*tag*/
        s[10]
      ) },
      o[0] & /*ripple, color, $$restProps, addClass, removeClass, addStyle, forwardEvents, use*/
      12189721 && {
        use: [
          [
            Rt,
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
        class: re({
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
        ).map(Yi).concat([
          /*style*/
          s[2]
        ]).join(" ")
      },
      o[0] & /*actionProp*/
      65536 && Oe(
        /*actionProp*/
        s[16]
      ),
      o[0] & /*defaultProp*/
      32768 && Oe(
        /*defaultProp*/
        s[15]
      ),
      o[0] & /*secondaryProp*/
      16384 && Oe(
        /*secondaryProp*/
        s[14]
      ),
      o[0] & /*href*/
      128 && { href: (
        /*href*/
        s[7]
      ) },
      o[0] & /*$$restProps*/
      8388608 && Oe(
        /*$$restProps*/
        s[23]
      )
    ]))), { props: u };
  }
  return l && (e = kt(l, a(n)), n[29](e), e.$on(
    "click",
    /*handleClick*/
    n[22]
  )), {
    c() {
      e && te(e.$$.fragment), t = Xe();
    },
    m(s, o) {
      e && $(e, s, o), j(s, t, o), i = !0;
    },
    p(s, o) {
      if (o[0] & /*component*/
      512 && l !== (l = /*component*/
      s[9])) {
        if (e) {
          Ve();
          const u = e;
          S(u.$$.fragment, 1, 0, () => {
            ee(u, 1);
          }), je();
        }
        l ? (e = kt(l, a(s, o)), s[29](e), e.$on(
          "click",
          /*handleClick*/
          s[22]
        ), te(e.$$.fragment), A(e.$$.fragment, 1), $(e, t.parentNode, t)) : e = null;
      } else if (l) {
        const u = o[0] & /*tag, ripple, color, $$restProps, addClass, removeClass, addStyle, forwardEvents, use, className, variant, touch, context, secondary, internalClasses, internalStyles, style, actionProp, defaultProp, secondaryProp, href*/
        12580351 ? fe(r, [
          o[0] & /*tag*/
          1024 && { tag: (
            /*tag*/
            s[10]
          ) },
          o[0] & /*ripple, color, $$restProps, addClass, removeClass, addStyle, forwardEvents, use*/
          12189721 && {
            use: [
              [
                Rt,
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
            class: re({
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
            ).map(Yi).concat([
              /*style*/
              s[2]
            ]).join(" ")
          },
          o[0] & /*actionProp*/
          65536 && Oe(
            /*actionProp*/
            s[16]
          ),
          o[0] & /*defaultProp*/
          32768 && Oe(
            /*defaultProp*/
            s[15]
          ),
          o[0] & /*secondaryProp*/
          16384 && Oe(
            /*secondaryProp*/
            s[14]
          ),
          o[0] & /*href*/
          128 && { href: (
            /*href*/
            s[7]
          ) },
          o[0] & /*$$restProps*/
          8388608 && Oe(
            /*$$restProps*/
            s[23]
          )
        ]) : {};
        o[0] & /*$$scope, touch*/
        1073741888 && (u.$$scope = { dirty: o, ctx: s }), e.$set(u);
      }
    },
    i(s) {
      i || (e && A(e.$$.fragment, s), i = !0);
    },
    o(s) {
      e && S(e.$$.fragment, s), i = !1;
    },
    d(s) {
      s && V(t), n[29](null), e && ee(e, s);
    }
  };
}
const Yi = ([n, e]) => `${n}: ${e};`;
function Do(n, e, t) {
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
  let s = me(e, a), { $$slots: o = {}, $$scope: u } = e;
  const c = tt(Je());
  let { use: d = [] } = e, { class: f = "" } = e, { style: h = "" } = e, { ripple: g = !0 } = e, { color: _ = "primary" } = e, { variant: m = "text" } = e, { touch: C = !1 } = e, { href: I = void 0 } = e, { action: O = "close" } = e, { defaultAction: E = !1 } = e, { secondary: L = !1 } = e, k, p = {}, y = {}, M = qe("SMUI:button:context"), { component: v = Ft } = e, { tag: b = v === Ft ? I == null ? "button" : "a" : void 0 } = e, D = s.disabled;
  He("SMUI:label:context", "button"), He("SMUI:icon:context", "button");
  function R(T) {
    p[T] || t(12, p[T] = !0, p);
  }
  function w(T) {
    (!(T in p) || p[T]) && t(12, p[T] = !1, p);
  }
  function q(T, Q) {
    y[T] != Q && (Q === "" || Q == null ? (delete y[T], t(13, y)) : t(13, y[T] = Q, y));
  }
  function U() {
    M === "banner" && pe(G(), L ? "SMUIBannerButton:secondaryActionClick" : "SMUIBannerButton:primaryActionClick");
  }
  function G() {
    return k.getElement();
  }
  function N(T) {
    se[T ? "unshift" : "push"](() => {
      k = T, t(11, k);
    });
  }
  return n.$$set = (T) => {
    t(31, e = z(z({}, e), et(T))), t(23, s = me(e, a)), "use" in T && t(0, d = T.use), "class" in T && t(1, f = T.class), "style" in T && t(2, h = T.style), "ripple" in T && t(3, g = T.ripple), "color" in T && t(4, _ = T.color), "variant" in T && t(5, m = T.variant), "touch" in T && t(6, C = T.touch), "href" in T && t(7, I = T.href), "action" in T && t(24, O = T.action), "defaultAction" in T && t(25, E = T.defaultAction), "secondary" in T && t(8, L = T.secondary), "component" in T && t(9, v = T.component), "tag" in T && t(10, b = T.tag), "$$scope" in T && t(30, u = T.$$scope);
  }, n.$$.update = () => {
    if (t(16, i = M === "dialog:action" && O != null ? { "data-mdc-dialog-action": O } : { action: e.action }), t(15, r = M === "dialog:action" && E ? { "data-mdc-dialog-button-default": "" } : { default: e.default }), t(14, l = M === "banner" ? {} : { secondary: e.secondary }), D !== s.disabled) {
      if (k) {
        const T = G();
        "blur" in T && T.blur();
      }
      t(27, D = s.disabled);
    }
  }, e = et(e), [
    d,
    f,
    h,
    g,
    _,
    m,
    C,
    I,
    L,
    v,
    b,
    k,
    p,
    y,
    l,
    r,
    i,
    c,
    M,
    R,
    w,
    q,
    U,
    s,
    O,
    E,
    G,
    D,
    o,
    N,
    u
  ];
}
class Mo extends Me {
  constructor(e) {
    super(), De(
      this,
      e,
      Do,
      ko,
      ye,
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
function Fo(n) {
  let e;
  const t = (
    /*#slots*/
    n[4].default
  ), i = ge(
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
      32) && be(
        i,
        t,
        r,
        /*$$scope*/
        r[5],
        e ? _e(
          t,
          /*$$scope*/
          r[5],
          l,
          null
        ) : Ie(
          /*$$scope*/
          r[5]
        ),
        null
      );
    },
    i(r) {
      e || (A(i, r), e = !0);
    },
    o(r) {
      S(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function No(n) {
  let e, t;
  return e = new Mo({
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
      $$slots: { default: [Fo] },
      $$scope: { ctx: n }
    }
  }), e.$on("click", function() {
    he(
      /*callback*/
      n[0]()
    ) && n[0]().apply(this, arguments);
  }), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      $(e, i, r), t = !0;
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
      t || (A(e.$$.fragment, i), t = !0);
    },
    o(i) {
      S(e.$$.fragment, i), t = !1;
    },
    d(i) {
      ee(e, i);
    }
  };
}
function Uo(n, e, t) {
  let { $$slots: i = {}, $$scope: r } = e, { callback: l = () => {
  } } = e, { disabled: a = !1 } = e, { variant: s = "default" } = e, { isAbortAction: o = !1 } = e;
  return n.$$set = (u) => {
    "callback" in u && t(0, l = u.callback), "disabled" in u && t(1, a = u.disabled), "variant" in u && t(2, s = u.variant), "isAbortAction" in u && t(3, o = u.isAbortAction), "$$scope" in u && t(5, r = u.$$scope);
  }, [l, a, s, o, i, r];
}
class gi extends Me {
  constructor(e) {
    super(), De(this, e, Uo, No, ye, {
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
var si = {
  ICON_BUTTON_ON: "mdc-icon-button--on",
  ROOT: "mdc-icon-button"
}, Jt = {
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
var wo = (
  /** @class */
  function(n) {
    ct(e, n);
    function e(t) {
      var i = n.call(this, We(We({}, e.defaultAdapter), t)) || this;
      return i.hasToggledAriaLabel = !1, i;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return si;
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
      var t = this.adapter.getAttr(Jt.DATA_ARIA_LABEL_ON), i = this.adapter.getAttr(Jt.DATA_ARIA_LABEL_OFF);
      if (t && i) {
        if (this.adapter.getAttr(Jt.ARIA_PRESSED) !== null)
          throw new Error("MDCIconButtonToggleFoundation: Button should not set `aria-pressed` if it has a toggled aria label.");
        this.hasToggledAriaLabel = !0;
      } else
        this.adapter.setAttr(Jt.ARIA_PRESSED, String(this.isOn()));
    }, e.prototype.handleClick = function() {
      this.toggle(), this.adapter.notifyChange({ isOn: this.isOn() });
    }, e.prototype.isOn = function() {
      return this.adapter.hasClass(si.ICON_BUTTON_ON);
    }, e.prototype.toggle = function(t) {
      if (t === void 0 && (t = !this.isOn()), t ? this.adapter.addClass(si.ICON_BUTTON_ON) : this.adapter.removeClass(si.ICON_BUTTON_ON), this.hasToggledAriaLabel) {
        var i = t ? this.adapter.getAttr(Jt.DATA_ARIA_LABEL_ON) : this.adapter.getAttr(Jt.DATA_ARIA_LABEL_OFF);
        this.adapter.setAttr(Jt.ARIA_LABEL, i || "");
      } else
        this.adapter.setAttr(Jt.ARIA_PRESSED, "" + t);
    }, e;
  }(Tt)
);
function Pr(n) {
  let e;
  return {
    c() {
      e = le("div"), B(e, "class", "mdc-icon-button__touch");
    },
    m(t, i) {
      j(t, e, i);
    },
    d(t) {
      t && V(e);
    }
  };
}
function Po(n) {
  let e, t, i, r;
  const l = (
    /*#slots*/
    n[33].default
  ), a = ge(
    l,
    n,
    /*$$scope*/
    n[37],
    null
  );
  let s = (
    /*touch*/
    n[8] && Pr()
  );
  return {
    c() {
      e = le("div"), t = ce(), a && a.c(), s && s.c(), i = Xe(), B(e, "class", "mdc-icon-button__ripple");
    },
    m(o, u) {
      j(o, e, u), j(o, t, u), a && a.m(o, u), s && s.m(o, u), j(o, i, u), r = !0;
    },
    p(o, u) {
      a && a.p && (!r || u[1] & /*$$scope*/
      64) && be(
        a,
        l,
        o,
        /*$$scope*/
        o[37],
        r ? _e(
          l,
          /*$$scope*/
          o[37],
          u,
          null
        ) : Ie(
          /*$$scope*/
          o[37]
        ),
        null
      ), /*touch*/
      o[8] ? s || (s = Pr(), s.c(), s.m(i.parentNode, i)) : s && (s.d(1), s = null);
    },
    i(o) {
      r || (A(a, o), r = !0);
    },
    o(o) {
      S(a, o), r = !1;
    },
    d(o) {
      o && (V(e), V(t), V(i)), a && a.d(o), s && s.d(o);
    }
  };
}
function Ho(n) {
  let e, t, i;
  const r = [
    { tag: (
      /*tag*/
      n[14]
    ) },
    {
      use: [
        [
          Rt,
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
      class: re({
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
      ).map(Xi).concat([
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
      $$slots: { default: [Po] },
      $$scope: { ctx: s }
    };
    for (let c = 0; c < r.length; c += 1)
      u = z(u, r[c]);
    return o !== void 0 && o[0] & /*tag, ripple, color, $$restProps, addClass, removeClass, addStyle, forwardEvents, use, className, isUninitializedValue, pressed, touch, displayFlex, size, context, action, internalClasses, internalStyles, style, ariaLabelOn, ariaLabelOff, ariaDescribedby, href, actionProp, internalAttrs*/
    1073504255 && (u = z(u, fe(r, [
      o[0] & /*tag*/
      16384 && { tag: (
        /*tag*/
        s[14]
      ) },
      o[0] & /*ripple, color, $$restProps, addClass, removeClass, addStyle, forwardEvents, use*/
      1010827314 && {
        use: [
          [
            Rt,
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
        class: re({
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
        ).map(Xi).concat([
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
      2097152 && Oe(
        /*actionProp*/
        s[21]
      ),
      o[0] & /*internalAttrs*/
      1048576 && Oe(
        /*internalAttrs*/
        s[20]
      ),
      o[0] & /*$$restProps*/
      536870912 && Oe(
        /*$$restProps*/
        s[29]
      )
    ]))), { props: u };
  }
  return l && (e = kt(l, a(n)), n[34](e), e.$on(
    "click",
    /*click_handler*/
    n[35]
  ), e.$on(
    "click",
    /*click_handler_1*/
    n[36]
  )), {
    c() {
      e && te(e.$$.fragment), t = Xe();
    },
    m(s, o) {
      e && $(e, s, o), j(s, t, o), i = !0;
    },
    p(s, o) {
      if (o[0] & /*component*/
      8192 && l !== (l = /*component*/
      s[13])) {
        if (e) {
          Ve();
          const u = e;
          S(u.$$.fragment, 1, 0, () => {
            ee(u, 1);
          }), je();
        }
        l ? (e = kt(l, a(s, o)), s[34](e), e.$on(
          "click",
          /*click_handler*/
          s[35]
        ), e.$on(
          "click",
          /*click_handler_1*/
          s[36]
        ), te(e.$$.fragment), A(e.$$.fragment, 1), $(e, t.parentNode, t)) : e = null;
      } else if (l) {
        const u = o[0] & /*tag, ripple, color, $$restProps, addClass, removeClass, addStyle, forwardEvents, use, className, isUninitializedValue, pressed, touch, displayFlex, size, context, action, internalClasses, internalStyles, style, ariaLabelOn, ariaLabelOff, ariaDescribedby, href, actionProp, internalAttrs*/
        1073504255 ? fe(r, [
          o[0] & /*tag*/
          16384 && { tag: (
            /*tag*/
            s[14]
          ) },
          o[0] & /*ripple, color, $$restProps, addClass, removeClass, addStyle, forwardEvents, use*/
          1010827314 && {
            use: [
              [
                Rt,
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
            class: re({
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
            ).map(Xi).concat([
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
          2097152 && Oe(
            /*actionProp*/
            s[21]
          ),
          o[0] & /*internalAttrs*/
          1048576 && Oe(
            /*internalAttrs*/
            s[20]
          ),
          o[0] & /*$$restProps*/
          536870912 && Oe(
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
      i || (e && A(e.$$.fragment, s), i = !0);
    },
    o(s) {
      e && S(e.$$.fragment, s), i = !1;
    },
    d(s) {
      s && V(t), n[34](null), e && ee(e, s);
    }
  };
}
const Xi = ([n, e]) => `${n}: ${e};`;
function Bo(n, e, t) {
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
  let l = me(e, r), { $$slots: a = {}, $$scope: s } = e;
  const o = tt(Je());
  let u = () => {
  };
  function c(W) {
    return W === u;
  }
  let { use: d = [] } = e, { class: f = "" } = e, { style: h = "" } = e, { ripple: g = !0 } = e, { color: _ = void 0 } = e, { toggle: m = !1 } = e, { pressed: C = u } = e, { ariaLabelOn: I = void 0 } = e, { ariaLabelOff: O = void 0 } = e, { touch: E = !1 } = e, { displayFlex: L = !0 } = e, { size: k = "normal" } = e, { href: p = void 0 } = e, { action: y = void 0 } = e, M, v, b = {}, D = {}, R = {}, w = qe("SMUI:icon-button:context"), q = qe("SMUI:icon-button:aria-describedby"), { component: U = Ft } = e, { tag: G = U === Ft ? p == null ? "button" : "a" : void 0 } = e, N = l.disabled;
  He("SMUI:icon:context", "icon-button");
  let T = null;
  Wt(() => {
    v && v.destroy();
  });
  function Q(W) {
    return W in b ? b[W] : Ce().classList.contains(W);
  }
  function Re(W) {
    b[W] || t(18, b[W] = !0, b);
  }
  function Fe(W) {
    (!(W in b) || b[W]) && t(18, b[W] = !1, b);
  }
  function ve(W, Ye) {
    D[W] != Ye && (Ye === "" || Ye == null ? (delete D[W], t(19, D)) : t(19, D[W] = Ye, D));
  }
  function ze(W) {
    var Ye;
    return W in R ? (Ye = R[W]) !== null && Ye !== void 0 ? Ye : null : Ce().getAttribute(W);
  }
  function K(W, Ye) {
    R[W] !== Ye && t(20, R[W] = Ye, R);
  }
  function J(W) {
    t(0, C = W.isOn);
  }
  function Ce() {
    return M.getElement();
  }
  function Te(W) {
    se[W ? "unshift" : "push"](() => {
      M = W, t(16, M);
    });
  }
  const Ne = () => v && v.handleClick(), ie = () => w === "top-app-bar:navigation" && pe(Ce(), "SMUITopAppBarIconButton:nav");
  return n.$$set = (W) => {
    e = z(z({}, e), et(W)), t(29, l = me(e, r)), "use" in W && t(1, d = W.use), "class" in W && t(2, f = W.class), "style" in W && t(3, h = W.style), "ripple" in W && t(4, g = W.ripple), "color" in W && t(5, _ = W.color), "toggle" in W && t(30, m = W.toggle), "pressed" in W && t(0, C = W.pressed), "ariaLabelOn" in W && t(6, I = W.ariaLabelOn), "ariaLabelOff" in W && t(7, O = W.ariaLabelOff), "touch" in W && t(8, E = W.touch), "displayFlex" in W && t(9, L = W.displayFlex), "size" in W && t(10, k = W.size), "href" in W && t(11, p = W.href), "action" in W && t(12, y = W.action), "component" in W && t(13, U = W.component), "tag" in W && t(14, G = W.tag), "$$scope" in W && t(37, s = W.$$scope);
  }, n.$$.update = () => {
    if (n.$$.dirty[0] & /*action*/
    4096 && t(21, i = (() => {
      if (w === "data-table:pagination")
        switch (y) {
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
        return w === "dialog:header" || w === "dialog:sheet" ? { "data-mdc-dialog-action": y } : { action: y };
    })()), N !== l.disabled) {
      if (M) {
        const W = Ce();
        "blur" in W && W.blur();
      }
      t(31, N = l.disabled);
    }
    n.$$.dirty[0] & /*element, toggle, instance*/
    1073938432 | n.$$.dirty[1] & /*oldToggle*/
    2 && M && Ce() && m !== T && (m && !v ? (t(17, v = new wo({
      addClass: Re,
      hasClass: Q,
      notifyChange: (W) => {
        J(W), pe(Ce(), "SMUIIconButtonToggle:change", W, void 0, !0);
      },
      removeClass: Fe,
      getAttr: ze,
      setAttr: K
    })), v.init()) : !m && v && (v.destroy(), t(17, v = void 0), t(18, b = {}), t(20, R = {})), t(32, T = m)), n.$$.dirty[0] & /*instance, pressed*/
    131073 && v && !c(C) && v.isOn() !== C && v.toggle(C);
  }, [
    C,
    d,
    f,
    h,
    g,
    _,
    I,
    O,
    E,
    L,
    k,
    p,
    y,
    U,
    G,
    Ce,
    M,
    v,
    b,
    D,
    R,
    i,
    o,
    c,
    w,
    q,
    Re,
    Fe,
    ve,
    l,
    m,
    N,
    T,
    a,
    Te,
    Ne,
    ie,
    s
  ];
}
class Vo extends Me {
  constructor(e) {
    super(), De(
      this,
      e,
      Bo,
      Ho,
      ye,
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
function jo(n) {
  let e;
  return {
    c() {
      e = ot(
        /*icon*/
        n[1]
      );
    },
    m(t, i) {
      j(t, e, i);
    },
    p(t, i) {
      i & /*icon*/
      2 && St(
        e,
        /*icon*/
        t[1]
      );
    },
    i: nt,
    o: nt,
    d(t) {
      t && V(e);
    }
  };
}
function Go(n) {
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
  return r && (e = kt(r, l(n))), {
    c() {
      e && te(e.$$.fragment), t = Xe();
    },
    m(a, s) {
      e && $(e, a, s), j(a, t, s), i = !0;
    },
    p(a, s) {
      if (s & /*iconComponent*/
      4 && r !== (r = /*iconComponent*/
      a[2])) {
        if (e) {
          Ve();
          const o = e;
          S(o.$$.fragment, 1, 0, () => {
            ee(o, 1);
          }), je();
        }
        r ? (e = kt(r, l(a)), te(e.$$.fragment), A(e.$$.fragment, 1), $(e, t.parentNode, t)) : e = null;
      } else if (r) {
        const o = {};
        s & /*iconStyles*/
        8 && (o.svgStyles = /*iconStyles*/
        a[3]), e.$set(o);
      }
    },
    i(a) {
      i || (e && A(e.$$.fragment, a), i = !0);
    },
    o(a) {
      e && S(e.$$.fragment, a), i = !1;
    },
    d(a) {
      a && V(t), e && ee(e, a);
    }
  };
}
function Ko(n) {
  let e, t, i, r;
  const l = [Go, jo], a = [];
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
      a[e].m(o, u), j(o, i, u), r = !0;
    },
    p(o, u) {
      let c = e;
      e = s(o), e === c ? a[e].p(o, u) : (Ve(), S(a[c], 1, 1, () => {
        a[c] = null;
      }), je(), t = a[e], t ? t.p(o, u) : (t = a[e] = l[e](o), t.c()), A(t, 1), t.m(i.parentNode, i));
    },
    i(o) {
      r || (A(t), r = !0);
    },
    o(o) {
      S(t), r = !1;
    },
    d(o) {
      o && V(i), a[e].d(o);
    }
  };
}
function qo(n) {
  let e, t;
  return e = new Vo({
    props: {
      class: "material-icons",
      disabled: (
        /*disabled*/
        n[4]
      ),
      style: "margin-bottom: 0;",
      $$slots: { default: [Ko] },
      $$scope: { ctx: n }
    }
  }), e.$on("click", function() {
    he(
      /*callback*/
      n[0]
    ) && n[0].apply(this, arguments);
  }), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      $(e, i, r), t = !0;
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
      t || (A(e.$$.fragment, i), t = !0);
    },
    o(i) {
      S(e.$$.fragment, i), t = !1;
    },
    d(i) {
      ee(e, i);
    }
  };
}
function Wo(n, e, t) {
  let { callback: i = () => {
  } } = e, { icon: r = "" } = e, { iconComponent: l = null } = e, { iconStyles: a = "" } = e, { disabled: s = !1 } = e;
  return n.$$set = (o) => {
    "callback" in o && t(0, i = o.callback), "icon" in o && t(1, r = o.icon), "iconComponent" in o && t(2, l = o.iconComponent), "iconStyles" in o && t(3, a = o.iconStyles), "disabled" in o && t(4, s = o.disabled);
  }, [i, r, l, a, s];
}
class zo extends Me {
  constructor(e) {
    super(), De(this, e, Wo, qo, ye, {
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
var Yo = {
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
var Xo = (
  /** @class */
  function(n) {
    ct(e, n);
    function e(t) {
      var i = n.call(this, We(We({}, e.defaultAdapter), t)) || this;
      return i.shakeAnimationEndHandler = function() {
        i.handleShakeAnimationEnd();
      }, i;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Yo;
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
var hn = {
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
var Zo = (
  /** @class */
  function(n) {
    ct(e, n);
    function e(t) {
      var i = n.call(this, We(We({}, e.defaultAdapter), t)) || this;
      return i.transitionEndHandler = function(r) {
        i.handleTransitionEnd(r);
      }, i;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return hn;
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
      this.adapter.removeClass(hn.LINE_RIPPLE_DEACTIVATING), this.adapter.addClass(hn.LINE_RIPPLE_ACTIVE);
    }, e.prototype.setRippleCenter = function(t) {
      this.adapter.setStyle("transform-origin", t + "px center");
    }, e.prototype.deactivate = function() {
      this.adapter.addClass(hn.LINE_RIPPLE_DEACTIVATING);
    }, e.prototype.handleTransitionEnd = function(t) {
      var i = this.adapter.hasClass(hn.LINE_RIPPLE_DEACTIVATING);
      t.propertyName === "opacity" && i && (this.adapter.removeClass(hn.LINE_RIPPLE_ACTIVE), this.adapter.removeClass(hn.LINE_RIPPLE_DEACTIVATING));
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
var Qo = {
  NOTCH_ELEMENT_SELECTOR: ".mdc-notched-outline__notch"
}, Hr = {
  // This should stay in sync with $mdc-notched-outline-padding * 2.
  NOTCH_ELEMENT_PADDING: 8
}, Jo = {
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
var xo = (
  /** @class */
  function(n) {
    ct(e, n);
    function e(t) {
      return n.call(this, We(We({}, e.defaultAdapter), t)) || this;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return Qo;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Jo;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return Hr;
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
      t > 0 && (t += Hr.NOTCH_ELEMENT_PADDING), this.adapter.setNotchWidthProperty(t), this.adapter.addClass(i);
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
var Zi = {
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
}, $o = {
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
}, Br = {
  LABEL_SCALE: 0.75
}, eu = [
  "pattern",
  "min",
  "max",
  "required",
  "step",
  "minlength",
  "maxlength"
], tu = [
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
var Vr = ["mousedown", "touchstart"], jr = ["click", "keydown"], nu = (
  /** @class */
  function(n) {
    ct(e, n);
    function e(t, i) {
      i === void 0 && (i = {});
      var r = n.call(this, We(We({}, e.defaultAdapter), t)) || this;
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
        return $o;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Zi;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return Br;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "shouldAlwaysFloat", {
      get: function() {
        var t = this.getNativeInput().type;
        return tu.indexOf(t) >= 0;
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
        for (var a = yt(Vr), s = a.next(); !s.done; s = a.next()) {
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
        for (var u = yt(jr), c = u.next(); !c.done; c = u.next()) {
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
        for (var a = yt(Vr), s = a.next(); !s.done; s = a.next()) {
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
        for (var u = yt(jr), c = u.next(); !c.done; c = u.next()) {
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
        return eu.indexOf(r) > -1 ? (i.styleValidity(!0), i.adapter.setLabelRequired(i.getNativeInput().required), !0) : !1;
      }), t.indexOf("maxlength") > -1 && this.setcharacterCounter(this.getValue().length);
    }, e.prototype.notchOutline = function(t) {
      if (!(!this.adapter.hasOutline() || !this.adapter.hasLabel()))
        if (t) {
          var i = this.adapter.getLabelWidth() * Br.LABEL_SCALE;
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
        l && a ? this.adapter.setInputAttr(Zi.ARIA_DESCRIBEDBY, a) : this.adapter.removeInputAttr(Zi.ARIA_DESCRIBEDBY);
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
var Gr = {
  ICON_EVENT: "MDCTextField:icon",
  ICON_ROLE: "button"
}, iu = {
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
var Kr = ["click", "keydown"], ru = (
  /** @class */
  function(n) {
    ct(e, n);
    function e(t) {
      var i = n.call(this, We(We({}, e.defaultAdapter), t)) || this;
      return i.savedTabIndex = null, i.interactionHandler = function(r) {
        i.handleInteraction(r);
      }, i;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return Gr;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return iu;
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
        for (var r = yt(Kr), l = r.next(); !l.done; l = r.next()) {
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
        for (var r = yt(Kr), l = r.next(); !l.done; l = r.next()) {
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
      this.savedTabIndex && (t ? (this.adapter.setAttr("tabindex", "-1"), this.adapter.removeAttr("role")) : (this.adapter.setAttr("tabindex", this.savedTabIndex), this.adapter.setAttr("role", Gr.ICON_ROLE)));
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
function lu(n) {
  let e, t, i, r, l, a, s, o;
  const u = (
    /*#slots*/
    n[22].default
  ), c = ge(
    u,
    n,
    /*$$scope*/
    n[21],
    null
  );
  let d = [
    {
      class: t = re({
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
      ).map(Wr).concat([
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
    f = z(f, d[h]);
  return {
    c() {
      e = le("label"), c && c.c(), ae(e, f);
    },
    m(h, g) {
      j(h, e, g), c && c.m(e, null), n[24](e), a = !0, s || (o = [
        de(l = Qe.call(
          null,
          e,
          /*use*/
          n[2]
        )),
        de(
          /*forwardEvents*/
          n[10].call(null, e)
        )
      ], s = !0);
    },
    p(h, g) {
      c && c.p && (!a || g & /*$$scope*/
      2097152) && be(
        c,
        u,
        h,
        /*$$scope*/
        h[21],
        a ? _e(
          u,
          /*$$scope*/
          h[21],
          g,
          null
        ) : Ie(
          /*$$scope*/
          h[21]
        ),
        null
      ), ae(e, f = fe(d, [
        (!a || g & /*className, floatAbove, required, internalClasses*/
        267 && t !== (t = re({
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
        (!a || g & /*internalStyles, style*/
        528 && i !== (i = Object.entries(
          /*internalStyles*/
          h[9]
        ).map(Wr).concat([
          /*style*/
          h[4]
        ]).join(" "))) && { style: i },
        (!a || g & /*forId*/
        32 && r !== (r = /*forId*/
        h[5] || /*inputProps*/
        (h[11] ? (
          /*inputProps*/
          h[11].id
        ) : void 0))) && { for: r },
        g & /*$$restProps*/
        4096 && /*$$restProps*/
        h[12]
      ])), l && he(l.update) && g & /*use*/
      4 && l.update.call(
        null,
        /*use*/
        h[2]
      );
    },
    i(h) {
      a || (A(c, h), a = !0);
    },
    o(h) {
      S(c, h), a = !1;
    },
    d(h) {
      h && V(e), c && c.d(h), n[24](null), s = !1, Ze(o);
    }
  };
}
function su(n) {
  let e, t, i, r, l, a, s;
  const o = (
    /*#slots*/
    n[22].default
  ), u = ge(
    o,
    n,
    /*$$scope*/
    n[21],
    null
  );
  let c = [
    {
      class: t = re({
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
      ).map(qr).concat([
        /*style*/
        n[4]
      ]).join(" ")
    },
    /*$$restProps*/
    n[12]
  ], d = {};
  for (let f = 0; f < c.length; f += 1)
    d = z(d, c[f]);
  return {
    c() {
      e = le("span"), u && u.c(), ae(e, d);
    },
    m(f, h) {
      j(f, e, h), u && u.m(e, null), n[23](e), l = !0, a || (s = [
        de(r = Qe.call(
          null,
          e,
          /*use*/
          n[2]
        )),
        de(
          /*forwardEvents*/
          n[10].call(null, e)
        )
      ], a = !0);
    },
    p(f, h) {
      u && u.p && (!l || h & /*$$scope*/
      2097152) && be(
        u,
        o,
        f,
        /*$$scope*/
        f[21],
        l ? _e(
          o,
          /*$$scope*/
          f[21],
          h,
          null
        ) : Ie(
          /*$$scope*/
          f[21]
        ),
        null
      ), ae(e, d = fe(c, [
        (!l || h & /*className, floatAbove, required, internalClasses*/
        267 && t !== (t = re({
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
        ).map(qr).concat([
          /*style*/
          f[4]
        ]).join(" "))) && { style: i },
        h & /*$$restProps*/
        4096 && /*$$restProps*/
        f[12]
      ])), r && he(r.update) && h & /*use*/
      4 && r.update.call(
        null,
        /*use*/
        f[2]
      );
    },
    i(f) {
      l || (A(u, f), l = !0);
    },
    o(f) {
      S(u, f), l = !1;
    },
    d(f) {
      f && V(e), u && u.d(f), n[23](null), a = !1, Ze(s);
    }
  };
}
function au(n) {
  let e, t, i, r;
  const l = [su, lu], a = [];
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
      a[e].m(o, u), j(o, i, u), r = !0;
    },
    p(o, [u]) {
      let c = e;
      e = s(o), e === c ? a[e].p(o, u) : (Ve(), S(a[c], 1, 1, () => {
        a[c] = null;
      }), je(), t = a[e], t ? t.p(o, u) : (t = a[e] = l[e](o), t.c()), A(t, 1), t.m(i.parentNode, i));
    },
    i(o) {
      r || (A(t), r = !0);
    },
    o(o) {
      S(t), r = !1;
    },
    d(o) {
      o && V(i), a[e].d(o);
    }
  };
}
const qr = ([n, e]) => `${n}: ${e};`, Wr = ([n, e]) => `${n}: ${e};`;
function ou(n, e, t) {
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
  let r = me(e, i), { $$slots: l = {}, $$scope: a } = e;
  var s;
  const o = tt(Je());
  let { use: u = [] } = e, { class: c = "" } = e, { style: d = "" } = e, { for: f = void 0 } = e, { floatAbove: h = !1 } = e, { required: g = !1 } = e, { wrapped: _ = !1 } = e, m, C, I = {}, O = {}, E = (s = qe("SMUI:generic:input:props")) !== null && s !== void 0 ? s : {}, L = h, k = g;
  ut(() => {
    t(18, C = new Xo({
      addClass: p,
      removeClass: y,
      getWidth: () => {
        var T, Q;
        const Re = q(), Fe = Re.cloneNode(!0);
        (T = Re.parentNode) === null || T === void 0 || T.appendChild(Fe), Fe.classList.add("smui-floating-label--remove-transition"), Fe.classList.add("smui-floating-label--force-size"), Fe.classList.remove("mdc-floating-label--float-above");
        const ve = Fe.scrollWidth;
        return (Q = Re.parentNode) === null || Q === void 0 || Q.removeChild(Fe), ve;
      },
      registerInteractionHandler: (T, Q) => q().addEventListener(T, Q),
      deregisterInteractionHandler: (T, Q) => q().removeEventListener(T, Q)
    }));
    const N = {
      get element() {
        return q();
      },
      addStyle: M,
      removeStyle: v
    };
    return pe(m, "SMUIFloatingLabel:mount", N), C.init(), () => {
      pe(m, "SMUIFloatingLabel:unmount", N), C.destroy();
    };
  });
  function p(N) {
    I[N] || t(8, I[N] = !0, I);
  }
  function y(N) {
    (!(N in I) || I[N]) && t(8, I[N] = !1, I);
  }
  function M(N, T) {
    O[N] != T && (T === "" || T == null ? (delete O[N], t(9, O)) : t(9, O[N] = T, O));
  }
  function v(N) {
    N in O && (delete O[N], t(9, O));
  }
  function b(N) {
    C.shake(N);
  }
  function D(N) {
    t(0, h = N);
  }
  function R(N) {
    t(1, g = N);
  }
  function w() {
    return C.getWidth();
  }
  function q() {
    return m;
  }
  function U(N) {
    se[N ? "unshift" : "push"](() => {
      m = N, t(7, m);
    });
  }
  function G(N) {
    se[N ? "unshift" : "push"](() => {
      m = N, t(7, m);
    });
  }
  return n.$$set = (N) => {
    e = z(z({}, e), et(N)), t(12, r = me(e, i)), "use" in N && t(2, u = N.use), "class" in N && t(3, c = N.class), "style" in N && t(4, d = N.style), "for" in N && t(5, f = N.for), "floatAbove" in N && t(0, h = N.floatAbove), "required" in N && t(1, g = N.required), "wrapped" in N && t(6, _ = N.wrapped), "$$scope" in N && t(21, a = N.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty & /*instance, previousFloatAbove, floatAbove*/
    786433 && C && L !== h && (t(19, L = h), C.float(h)), n.$$.dirty & /*instance, previousRequired, required*/
    1310722 && C && k !== g && (t(20, k = g), C.setRequired(g));
  }, [
    h,
    g,
    u,
    c,
    d,
    f,
    _,
    m,
    I,
    O,
    o,
    E,
    r,
    b,
    D,
    R,
    w,
    q,
    C,
    L,
    k,
    a,
    l,
    U,
    G
  ];
}
class _i extends Me {
  constructor(e) {
    super(), De(this, e, ou, au, ye, {
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
function uu(n) {
  let e, t, i, r, l, a, s = [
    {
      class: t = re({
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
      ).map(zr).concat([
        /*style*/
        n[2]
      ]).join(" ")
    },
    /*$$restProps*/
    n[8]
  ], o = {};
  for (let u = 0; u < s.length; u += 1)
    o = z(o, s[u]);
  return {
    c() {
      e = le("div"), ae(e, o);
    },
    m(u, c) {
      j(u, e, c), n[13](e), l || (a = [
        de(r = Qe.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        de(
          /*forwardEvents*/
          n[7].call(null, e)
        )
      ], l = !0);
    },
    p(u, [c]) {
      ae(e, o = fe(s, [
        c & /*className, active, internalClasses*/
        42 && t !== (t = re({
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
        ).map(zr).concat([
          /*style*/
          u[2]
        ]).join(" ")) && { style: i },
        c & /*$$restProps*/
        256 && /*$$restProps*/
        u[8]
      ])), r && he(r.update) && c & /*use*/
      1 && r.update.call(
        null,
        /*use*/
        u[0]
      );
    },
    i: nt,
    o: nt,
    d(u) {
      u && V(e), n[13](null), l = !1, Ze(a);
    }
  };
}
const zr = ([n, e]) => `${n}: ${e};`;
function cu(n, e, t) {
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
  let r = me(e, i);
  const l = tt(Je());
  let { use: a = [] } = e, { class: s = "" } = e, { style: o = "" } = e, { active: u = !1 } = e, c, d, f = {}, h = {};
  ut(() => (d = new Zo({
    addClass: _,
    removeClass: m,
    hasClass: g,
    setStyle: C,
    registerEventHandler: (p, y) => L().addEventListener(p, y),
    deregisterEventHandler: (p, y) => L().removeEventListener(p, y)
  }), d.init(), () => {
    d.destroy();
  }));
  function g(p) {
    return p in f ? f[p] : L().classList.contains(p);
  }
  function _(p) {
    f[p] || t(5, f[p] = !0, f);
  }
  function m(p) {
    (!(p in f) || f[p]) && t(5, f[p] = !1, f);
  }
  function C(p, y) {
    h[p] != y && (y === "" || y == null ? (delete h[p], t(6, h)) : t(6, h[p] = y, h));
  }
  function I() {
    d.activate();
  }
  function O() {
    d.deactivate();
  }
  function E(p) {
    d.setRippleCenter(p);
  }
  function L() {
    return c;
  }
  function k(p) {
    se[p ? "unshift" : "push"](() => {
      c = p, t(4, c);
    });
  }
  return n.$$set = (p) => {
    e = z(z({}, e), et(p)), t(8, r = me(e, i)), "use" in p && t(0, a = p.use), "class" in p && t(1, s = p.class), "style" in p && t(2, o = p.style), "active" in p && t(3, u = p.active);
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
    I,
    O,
    E,
    L,
    k
  ];
}
class ta extends Me {
  constructor(e) {
    super(), De(this, e, cu, uu, ye, {
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
function Yr(n) {
  let e, t, i;
  const r = (
    /*#slots*/
    n[15].default
  ), l = ge(
    r,
    n,
    /*$$scope*/
    n[14],
    null
  );
  return {
    c() {
      e = le("div"), l && l.c(), B(e, "class", "mdc-notched-outline__notch"), B(e, "style", t = Object.entries(
        /*notchStyles*/
        n[7]
      ).map(Xr).join(" "));
    },
    m(a, s) {
      j(a, e, s), l && l.m(e, null), i = !0;
    },
    p(a, s) {
      l && l.p && (!i || s & /*$$scope*/
      16384) && be(
        l,
        r,
        a,
        /*$$scope*/
        a[14],
        i ? _e(
          r,
          /*$$scope*/
          a[14],
          s,
          null
        ) : Ie(
          /*$$scope*/
          a[14]
        ),
        null
      ), (!i || s & /*notchStyles*/
      128 && t !== (t = Object.entries(
        /*notchStyles*/
        a[7]
      ).map(Xr).join(" "))) && B(e, "style", t);
    },
    i(a) {
      i || (A(l, a), i = !0);
    },
    o(a) {
      S(l, a), i = !1;
    },
    d(a) {
      a && V(e), l && l.d(a);
    }
  };
}
function du(n) {
  let e, t, i, r, l, a, s, o, u, c, d = !/*noLabel*/
  n[3] && Yr(n), f = [
    {
      class: a = re({
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
  for (let g = 0; g < f.length; g += 1)
    h = z(h, f[g]);
  return {
    c() {
      e = le("div"), t = le("div"), i = ce(), d && d.c(), r = ce(), l = le("div"), B(t, "class", "mdc-notched-outline__leading"), B(l, "class", "mdc-notched-outline__trailing"), ae(e, h);
    },
    m(g, _) {
      j(g, e, _), ne(e, t), ne(e, i), d && d.m(e, null), ne(e, r), ne(e, l), n[16](e), o = !0, u || (c = [
        de(s = Qe.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        de(
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
    p(g, [_]) {
      /*noLabel*/
      g[3] ? d && (Ve(), S(d, 1, 1, () => {
        d = null;
      }), je()) : d ? (d.p(g, _), _ & /*noLabel*/
      8 && A(d, 1)) : (d = Yr(g), d.c(), A(d, 1), d.m(e, r)), ae(e, h = fe(f, [
        (!o || _ & /*className, notched, noLabel, internalClasses*/
        78 && a !== (a = re({
          [
            /*className*/
            g[1]
          ]: !0,
          "mdc-notched-outline": !0,
          "mdc-notched-outline--notched": (
            /*notched*/
            g[2]
          ),
          "mdc-notched-outline--no-label": (
            /*noLabel*/
            g[3]
          ),
          .../*internalClasses*/
          g[6]
        }))) && { class: a },
        _ & /*$$restProps*/
        1024 && /*$$restProps*/
        g[10]
      ])), s && he(s.update) && _ & /*use*/
      1 && s.update.call(
        null,
        /*use*/
        g[0]
      );
    },
    i(g) {
      o || (A(d), o = !0);
    },
    o(g) {
      S(d), o = !1;
    },
    d(g) {
      g && V(e), d && d.d(), n[16](null), u = !1, Ze(c);
    }
  };
}
const Xr = ([n, e]) => `${n}: ${e};`;
function fu(n, e, t) {
  const i = ["use", "class", "notched", "noLabel", "notch", "closeNotch", "getElement"];
  let r = me(e, i), { $$slots: l = {}, $$scope: a } = e;
  const s = tt(Je());
  let { use: o = [] } = e, { class: u = "" } = e, { notched: c = !1 } = e, { noLabel: d = !1 } = e, f, h, g, _ = {}, m = {};
  ut(() => (h = new xo({
    addClass: I,
    removeClass: O,
    setNotchWidthProperty: (b) => E("width", b + "px"),
    removeNotchWidthProperty: () => L("width")
  }), h.init(), () => {
    h.destroy();
  }));
  function C(b) {
    t(4, g = b.detail);
  }
  function I(b) {
    _[b] || t(6, _[b] = !0, _);
  }
  function O(b) {
    (!(b in _) || _[b]) && t(6, _[b] = !1, _);
  }
  function E(b, D) {
    m[b] != D && (D === "" || D == null ? (delete m[b], t(7, m)) : t(7, m[b] = D, m));
  }
  function L(b) {
    b in m && (delete m[b], t(7, m));
  }
  function k(b) {
    h.notch(b);
  }
  function p() {
    h.closeNotch();
  }
  function y() {
    return f;
  }
  function M(b) {
    se[b ? "unshift" : "push"](() => {
      f = b, t(5, f);
    });
  }
  const v = () => t(4, g = void 0);
  return n.$$set = (b) => {
    e = z(z({}, e), et(b)), t(10, r = me(e, i)), "use" in b && t(0, o = b.use), "class" in b && t(1, u = b.class), "notched" in b && t(2, c = b.notched), "noLabel" in b && t(3, d = b.noLabel), "$$scope" in b && t(14, a = b.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty & /*floatingLabel*/
    16 && (g ? (g.addStyle("transition-duration", "0s"), I("mdc-notched-outline--upgraded"), requestAnimationFrame(() => {
      g && g.removeStyle("transition-duration");
    })) : O("mdc-notched-outline--upgraded"));
  }, [
    o,
    u,
    c,
    d,
    g,
    f,
    _,
    m,
    s,
    C,
    r,
    k,
    p,
    y,
    a,
    l,
    M,
    v
  ];
}
class na extends Me {
  constructor(e) {
    super(), De(this, e, fu, du, ye, {
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
function hu(n) {
  let e;
  const t = (
    /*#slots*/
    n[11].default
  ), i = ge(
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
      8192) && be(
        i,
        t,
        r,
        /*$$scope*/
        r[13],
        e ? _e(
          t,
          /*$$scope*/
          r[13],
          l,
          null
        ) : Ie(
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
      S(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function mu(n) {
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
      class: re({
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
      $$slots: { default: [hu] },
      $$scope: { ctx: s }
    };
    for (let c = 0; c < r.length; c += 1)
      u = z(u, r[c]);
    return o !== void 0 && o & /*tag, forwardEvents, use, className, smuiClass, smuiClassMap, props, $$restProps*/
    1003 && (u = z(u, fe(r, [
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
        class: re({
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
      128 && Oe(
        /*props*/
        s[7]
      ),
      o & /*$$restProps*/
      512 && Oe(
        /*$$restProps*/
        s[9]
      )
    ]))), { props: u };
  }
  return l && (e = kt(l, a(n)), n[12](e)), {
    c() {
      e && te(e.$$.fragment), t = Xe();
    },
    m(s, o) {
      e && $(e, s, o), j(s, t, o), i = !0;
    },
    p(s, [o]) {
      if (o & /*component*/
      4 && l !== (l = /*component*/
      s[2])) {
        if (e) {
          Ve();
          const u = e;
          S(u.$$.fragment, 1, 0, () => {
            ee(u, 1);
          }), je();
        }
        l ? (e = kt(l, a(s, o)), s[12](e), te(e.$$.fragment), A(e.$$.fragment, 1), $(e, t.parentNode, t)) : e = null;
      } else if (l) {
        const u = o & /*tag, forwardEvents, use, className, smuiClass, smuiClassMap, props, $$restProps*/
        1003 ? fe(r, [
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
            class: re({
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
          128 && Oe(
            /*props*/
            s[7]
          ),
          o & /*$$restProps*/
          512 && Oe(
            /*$$restProps*/
            s[9]
          )
        ]) : {};
        o & /*$$scope*/
        8192 && (u.$$scope = { dirty: o, ctx: s }), e.$set(u);
      }
    },
    i(s) {
      i || (e && A(e.$$.fragment, s), i = !0);
    },
    o(s) {
      e && S(e.$$.fragment, s), i = !1;
    },
    d(s) {
      s && V(t), n[12](null), e && ee(e, s);
    }
  };
}
const tn = {
  component: Ft,
  tag: "div",
  class: "",
  classMap: {},
  contexts: {},
  props: {}
};
function pu(n, e, t) {
  const i = ["use", "class", "component", "tag", "getElement"];
  let r = me(e, i), { $$slots: l = {}, $$scope: a } = e, { use: s = [] } = e, { class: o = "" } = e, u;
  const c = tn.class, d = {}, f = [], h = tn.contexts, g = tn.props;
  let { component: _ = tn.component } = e, { tag: m = _ === Ft ? tn.tag : void 0 } = e;
  Object.entries(tn.classMap).forEach(([E, L]) => {
    const k = qe(L);
    k && "subscribe" in k && f.push(k.subscribe((p) => {
      t(5, d[E] = p, d);
    }));
  });
  const C = tt(Je());
  for (let E in h)
    h.hasOwnProperty(E) && He(E, h[E]);
  Wt(() => {
    for (const E of f)
      E();
  });
  function I() {
    return u.getElement();
  }
  function O(E) {
    se[E ? "unshift" : "push"](() => {
      u = E, t(4, u);
    });
  }
  return n.$$set = (E) => {
    e = z(z({}, e), et(E)), t(9, r = me(e, i)), "use" in E && t(0, s = E.use), "class" in E && t(1, o = E.class), "component" in E && t(2, _ = E.component), "tag" in E && t(3, m = E.tag), "$$scope" in E && t(13, a = E.$$scope);
  }, [
    s,
    o,
    _,
    m,
    u,
    d,
    c,
    g,
    C,
    r,
    I,
    l,
    O,
    a
  ];
}
class gu extends Me {
  constructor(e) {
    super(), De(this, e, pu, mu, ye, {
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
const Zr = Object.assign({}, tn);
function At(n) {
  return new Proxy(gu, {
    construct: function(e, t) {
      return Object.assign(tn, Zr, n), new e(...t);
    },
    get: function(e, t) {
      return Object.assign(tn, Zr, n), e[t];
    }
  });
}
const _u = At({
  class: "mdc-text-field-helper-line",
  tag: "div"
}), bu = At({
  class: "mdc-text-field__affix mdc-text-field__affix--prefix",
  tag: "span"
}), Iu = At({
  class: "mdc-text-field__affix mdc-text-field__affix--suffix",
  tag: "span"
});
function vu(n) {
  let e, t, i, r, l, a = [
    {
      class: t = re({
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
    s = z(s, a[o]);
  return {
    c() {
      e = le("input"), ae(e, s);
    },
    m(o, u) {
      j(o, e, u), e.autofocus && e.focus(), n[26](e), r || (l = [
        de(i = Qe.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        de(
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
      ae(e, s = fe(a, [
        u & /*className*/
        2 && t !== (t = re({
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
      ])), i && he(i.update) && u & /*use*/
      1 && i.update.call(
        null,
        /*use*/
        o[0]
      );
    },
    i: nt,
    o: nt,
    d(o) {
      o && V(e), n[26](null), r = !1, Ze(l);
    }
  };
}
function Cu(n) {
  return n === "" ? Number.NaN : +n;
}
function Au(n, e, t) {
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
  let r = me(e, i);
  const l = tt(Je());
  let a = () => {
  };
  function s(T) {
    return T === a;
  }
  let { use: o = [] } = e, { class: u = "" } = e, { type: c = "text" } = e, { placeholder: d = " " } = e, { value: f = a } = e;
  const h = s(f);
  h && (f = "");
  let { files: g = null } = e, { dirty: _ = !1 } = e, { invalid: m = !1 } = e, { updateInvalid: C = !0 } = e, { emptyValueNull: I = f === null } = e;
  h && I && (f = null);
  let { emptyValueUndefined: O = f === void 0 } = e;
  h && O && (f = void 0);
  let E, L = {}, k = {};
  ut(() => {
    C && t(14, m = E.matches(":invalid"));
  });
  function p(T) {
    if (c === "file") {
      t(12, g = T.currentTarget.files);
      return;
    }
    if (T.currentTarget.value === "" && I) {
      t(11, f = null);
      return;
    }
    if (T.currentTarget.value === "" && O) {
      t(11, f = void 0);
      return;
    }
    switch (c) {
      case "number":
      case "range":
        t(11, f = Cu(T.currentTarget.value));
        break;
      default:
        t(11, f = T.currentTarget.value);
        break;
    }
  }
  function y(T) {
    (c === "file" || c === "range") && p(T), t(13, _ = !0), C && t(14, m = E.matches(":invalid"));
  }
  function M(T) {
    var Q;
    return T in L ? (Q = L[T]) !== null && Q !== void 0 ? Q : null : w().getAttribute(T);
  }
  function v(T, Q) {
    L[T] !== Q && t(6, L[T] = Q, L);
  }
  function b(T) {
    (!(T in L) || L[T] != null) && t(6, L[T] = void 0, L);
  }
  function D() {
    w().focus();
  }
  function R() {
    w().blur();
  }
  function w() {
    return E;
  }
  function q(T) {
    Pn.call(this, n, T);
  }
  function U(T) {
    Pn.call(this, n, T);
  }
  function G(T) {
    se[T ? "unshift" : "push"](() => {
      E = T, t(5, E);
    });
  }
  const N = (T) => c !== "file" && p(T);
  return n.$$set = (T) => {
    e = z(z({}, e), et(T)), t(10, r = me(e, i)), "use" in T && t(0, o = T.use), "class" in T && t(1, u = T.class), "type" in T && t(2, c = T.type), "placeholder" in T && t(3, d = T.placeholder), "value" in T && t(11, f = T.value), "files" in T && t(12, g = T.files), "dirty" in T && t(13, _ = T.dirty), "invalid" in T && t(14, m = T.invalid), "updateInvalid" in T && t(15, C = T.updateInvalid), "emptyValueNull" in T && t(16, I = T.emptyValueNull), "emptyValueUndefined" in T && t(17, O = T.emptyValueUndefined);
  }, n.$$.update = () => {
    n.$$.dirty & /*type, valueProp, value*/
    2068 && (c === "file" ? (delete k.value, t(4, k), t(2, c), t(11, f)) : t(4, k.value = f ?? "", k));
  }, [
    o,
    u,
    c,
    d,
    k,
    E,
    L,
    l,
    p,
    y,
    r,
    f,
    g,
    _,
    m,
    C,
    I,
    O,
    M,
    v,
    b,
    D,
    R,
    w,
    q,
    U,
    G,
    N
  ];
}
class Eu extends Me {
  constructor(e) {
    super(), De(this, e, Au, vu, ye, {
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
function yu(n) {
  let e, t, i, r, l, a, s = [
    {
      class: t = re({
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
    o = z(o, s[u]);
  return {
    c() {
      e = le("textarea"), ae(e, o);
    },
    m(u, c) {
      j(u, e, c), e.autofocus && e.focus(), n[21](e), dn(
        e,
        /*value*/
        n[0]
      ), l || (a = [
        de(r = Qe.call(
          null,
          e,
          /*use*/
          n[1]
        )),
        de(
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
      ae(e, o = fe(s, [
        c & /*className*/
        4 && t !== (t = re({
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
      ])), r && he(r.update) && c & /*use*/
      2 && r.update.call(
        null,
        /*use*/
        u[1]
      ), c & /*value*/
      1 && dn(
        e,
        /*value*/
        u[0]
      );
    },
    i: nt,
    o: nt,
    d(u) {
      u && V(e), n[21](null), l = !1, Ze(a);
    }
  };
}
function Su(n, e, t) {
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
  let r = me(e, i);
  const l = tt(Je());
  let { use: a = [] } = e, { class: s = "" } = e, { style: o = "" } = e, { value: u = "" } = e, { dirty: c = !1 } = e, { invalid: d = !1 } = e, { updateInvalid: f = !0 } = e, { resizable: h = !0 } = e, g, _ = {};
  ut(() => {
    f && t(11, d = g.matches(":invalid"));
  });
  function m() {
    t(10, c = !0), f && t(11, d = g.matches(":invalid"));
  }
  function C(b) {
    var D;
    return b in _ ? (D = _[b]) !== null && D !== void 0 ? D : null : k().getAttribute(b);
  }
  function I(b, D) {
    _[b] !== D && t(6, _[b] = D, _);
  }
  function O(b) {
    (!(b in _) || _[b] != null) && t(6, _[b] = void 0, _);
  }
  function E() {
    k().focus();
  }
  function L() {
    k().blur();
  }
  function k() {
    return g;
  }
  function p(b) {
    Pn.call(this, n, b);
  }
  function y(b) {
    Pn.call(this, n, b);
  }
  function M(b) {
    se[b ? "unshift" : "push"](() => {
      g = b, t(5, g);
    });
  }
  function v() {
    u = this.value, t(0, u);
  }
  return n.$$set = (b) => {
    e = z(z({}, e), et(b)), t(9, r = me(e, i)), "use" in b && t(1, a = b.use), "class" in b && t(2, s = b.class), "style" in b && t(3, o = b.style), "value" in b && t(0, u = b.value), "dirty" in b && t(10, c = b.dirty), "invalid" in b && t(11, d = b.invalid), "updateInvalid" in b && t(12, f = b.updateInvalid), "resizable" in b && t(4, h = b.resizable);
  }, [
    u,
    a,
    s,
    o,
    h,
    g,
    _,
    l,
    m,
    r,
    c,
    d,
    f,
    C,
    I,
    O,
    E,
    L,
    k,
    p,
    y,
    M,
    v
  ];
}
class Tu extends Me {
  constructor(e) {
    super(), De(this, e, Su, yu, ye, {
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
const Lu = (n) => ({}), Qr = (n) => ({}), Ou = (n) => ({}), Jr = (n) => ({}), Ru = (n) => ({}), xr = (n) => ({}), ku = (n) => ({}), $r = (n) => ({}), Du = (n) => ({}), el = (n) => ({}), Mu = (n) => ({}), tl = (n) => ({}), Fu = (n) => ({}), nl = (n) => ({}), Nu = (n) => ({}), il = (n) => ({}), Uu = (n) => ({}), rl = (n) => ({}), wu = (n) => ({}), ll = (n) => ({}), Pu = (n) => ({}), sl = (n) => ({}), Hu = (n) => ({}), al = (n) => ({});
function Bu(n) {
  let e, t, i, r, l, a, s, o, u, c, d, f, h, g;
  const _ = (
    /*#slots*/
    n[56].label
  ), m = ge(
    _,
    n,
    /*$$scope*/
    n[87],
    el
  );
  i = new Bn({
    props: {
      key: "SMUI:textfield:icon:leading",
      value: !0,
      $$slots: { default: [ju] },
      $$scope: { ctx: n }
    }
  });
  const C = (
    /*#slots*/
    n[56].default
  ), I = ge(
    C,
    n,
    /*$$scope*/
    n[87],
    null
  );
  a = new Bn({
    props: {
      key: "SMUI:textfield:icon:leading",
      value: !1,
      $$slots: { default: [Gu] },
      $$scope: { ctx: n }
    }
  });
  const O = (
    /*#slots*/
    n[56].ripple
  ), E = ge(
    O,
    n,
    /*$$scope*/
    n[87],
    Jr
  );
  let L = [
    {
      class: o = re({
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
      ).map(bl).concat([
        /*style*/
        n[10]
      ]).join(" ")
    },
    jt(
      /*$$restProps*/
      n[46],
      ["input$", "label$", "ripple$", "outline$", "helperLine$"]
    )
  ], k = {};
  for (let p = 0; p < L.length; p += 1)
    k = z(k, L[p]);
  return {
    c() {
      e = le("div"), m && m.c(), t = ce(), te(i.$$.fragment), r = ce(), I && I.c(), l = ce(), te(a.$$.fragment), s = ce(), E && E.c(), ae(e, k);
    },
    m(p, y) {
      j(p, e, y), m && m.m(e, null), ne(e, t), $(i, e, null), ne(e, r), I && I.m(e, null), ne(e, l), $(a, e, null), ne(e, s), E && E.m(e, null), n[82](e), f = !0, h || (g = [
        de(c = Rt.call(null, e, {
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
        de(d = Qe.call(
          null,
          e,
          /*use*/
          n[8]
        )),
        de(
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
    p(p, y) {
      m && m.p && (!f || y[2] & /*$$scope*/
      33554432) && be(
        m,
        _,
        p,
        /*$$scope*/
        p[87],
        f ? _e(
          _,
          /*$$scope*/
          p[87],
          y,
          Du
        ) : Ie(
          /*$$scope*/
          p[87]
        ),
        el
      );
      const M = {};
      y[2] & /*$$scope*/
      33554432 && (M.$$scope = { dirty: y, ctx: p }), i.$set(M), I && I.p && (!f || y[2] & /*$$scope*/
      33554432) && be(
        I,
        C,
        p,
        /*$$scope*/
        p[87],
        f ? _e(
          C,
          /*$$scope*/
          p[87],
          y,
          null
        ) : Ie(
          /*$$scope*/
          p[87]
        ),
        null
      );
      const v = {};
      y[2] & /*$$scope*/
      33554432 && (v.$$scope = { dirty: y, ctx: p }), a.$set(v), E && E.p && (!f || y[2] & /*$$scope*/
      33554432) && be(
        E,
        O,
        p,
        /*$$scope*/
        p[87],
        f ? _e(
          O,
          /*$$scope*/
          p[87],
          y,
          Ou
        ) : Ie(
          /*$$scope*/
          p[87]
        ),
        Jr
      ), ae(e, k = fe(L, [
        (!f || y[0] & /*className, disabled, textarea, variant, noLabel, invalid, internalClasses*/
        33673730 | y[1] & /*$$slots*/
        65536 && o !== (o = re({
          [
            /*className*/
            p[9]
          ]: !0,
          "mdc-text-field": !0,
          "mdc-text-field--disabled": (
            /*disabled*/
            p[12]
          ),
          "mdc-text-field--textarea": (
            /*textarea*/
            p[14]
          ),
          "mdc-text-field--filled": (
            /*variant*/
            p[15] === "filled"
          ),
          "mdc-text-field--outlined": (
            /*variant*/
            p[15] === "outlined"
          ),
          "smui-text-field--standard": (
            /*variant*/
            p[15] === "standard" && !/*textarea*/
            p[14]
          ),
          "mdc-text-field--no-label": (
            /*noLabel*/
            p[16] || !/*$$slots*/
            p[47].label
          ),
          "mdc-text-field--with-leading-icon": (
            /*$$slots*/
            p[47].leadingIcon
          ),
          "mdc-text-field--with-trailing-icon": (
            /*$$slots*/
            p[47].trailingIcon
          ),
          "mdc-text-field--invalid": (
            /*invalid*/
            p[1]
          ),
          .../*internalClasses*/
          p[25]
        }))) && { class: o },
        (!f || y[0] & /*internalStyles, style*/
        67109888 && u !== (u = Object.entries(
          /*internalStyles*/
          p[26]
        ).map(bl).concat([
          /*style*/
          p[10]
        ]).join(" "))) && { style: u },
        y[1] & /*$$restProps*/
        32768 && jt(
          /*$$restProps*/
          p[46],
          ["input$", "label$", "ripple$", "outline$", "helperLine$"]
        )
      ])), c && he(c.update) && y[0] & /*ripple*/
      2048 && c.update.call(null, {
        ripple: (
          /*ripple*/
          p[11]
        ),
        unbounded: !1,
        addClass: (
          /*addClass*/
          p[43]
        ),
        removeClass: (
          /*removeClass*/
          p[44]
        ),
        addStyle: (
          /*addStyle*/
          p[45]
        )
      }), d && he(d.update) && y[0] & /*use*/
      256 && d.update.call(
        null,
        /*use*/
        p[8]
      );
    },
    i(p) {
      f || (A(m, p), A(i.$$.fragment, p), A(I, p), A(a.$$.fragment, p), A(E, p), f = !0);
    },
    o(p) {
      S(m, p), S(i.$$.fragment, p), S(I, p), S(a.$$.fragment, p), S(E, p), f = !1;
    },
    d(p) {
      p && V(e), m && m.d(p), ee(i), I && I.d(p), ee(a), E && E.d(p), n[82](null), h = !1, Ze(g);
    }
  };
}
function Vu(n) {
  let e, t, i, r, l, a, s, o, u, c, d, f, h, g, _, m, C, I, O = !/*textarea*/
  n[14] && /*variant*/
  n[15] !== "outlined" && ol(n), E = (
    /*textarea*/
    (n[14] || /*variant*/
    n[15] === "outlined") && dl(n)
  );
  r = new Bn({
    props: {
      key: "SMUI:textfield:icon:leading",
      value: !0,
      $$slots: { default: [zu] },
      $$scope: { ctx: n }
    }
  });
  const L = (
    /*#slots*/
    n[56].default
  ), k = ge(
    L,
    n,
    /*$$scope*/
    n[87],
    null
  ), p = [Xu, Yu], y = [];
  function M(R, w) {
    return (
      /*textarea*/
      R[14] && typeof /*value*/
      R[0] == "string" ? 0 : 1
    );
  }
  s = M(n), o = y[s] = p[s](n), c = new Bn({
    props: {
      key: "SMUI:textfield:icon:leading",
      value: !1,
      $$slots: { default: [Ju] },
      $$scope: { ctx: n }
    }
  });
  let v = !/*textarea*/
  n[14] && /*variant*/
  n[15] !== "outlined" && /*ripple*/
  n[11] && pl(n), b = [
    {
      class: f = re({
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
      ).map(_l).concat([
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
    jt(
      /*$$restProps*/
      n[46],
      ["input$", "label$", "ripple$", "outline$", "helperLine$"]
    )
  ], D = {};
  for (let R = 0; R < b.length; R += 1)
    D = z(D, b[R]);
  return {
    c() {
      e = le("label"), O && O.c(), t = ce(), E && E.c(), i = ce(), te(r.$$.fragment), l = ce(), k && k.c(), a = ce(), o.c(), u = ce(), te(c.$$.fragment), d = ce(), v && v.c(), ae(e, D);
    },
    m(R, w) {
      j(R, e, w), O && O.m(e, null), ne(e, t), E && E.m(e, null), ne(e, i), $(r, e, null), ne(e, l), k && k.m(e, null), ne(e, a), y[s].m(e, null), ne(e, u), $(c, e, null), ne(e, d), v && v.m(e, null), n[78](e), m = !0, C || (I = [
        de(g = Rt.call(null, e, {
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
        de(_ = Qe.call(
          null,
          e,
          /*use*/
          n[8]
        )),
        de(
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
    p(R, w) {
      !/*textarea*/
      R[14] && /*variant*/
      R[15] !== "outlined" ? O ? (O.p(R, w), w[0] & /*textarea, variant*/
      49152 && A(O, 1)) : (O = ol(R), O.c(), A(O, 1), O.m(e, t)) : O && (Ve(), S(O, 1, 1, () => {
        O = null;
      }), je()), /*textarea*/
      R[14] || /*variant*/
      R[15] === "outlined" ? E ? (E.p(R, w), w[0] & /*textarea, variant*/
      49152 && A(E, 1)) : (E = dl(R), E.c(), A(E, 1), E.m(e, i)) : E && (Ve(), S(E, 1, 1, () => {
        E = null;
      }), je());
      const q = {};
      w[2] & /*$$scope*/
      33554432 && (q.$$scope = { dirty: w, ctx: R }), r.$set(q), k && k.p && (!m || w[2] & /*$$scope*/
      33554432) && be(
        k,
        L,
        R,
        /*$$scope*/
        R[87],
        m ? _e(
          L,
          /*$$scope*/
          R[87],
          w,
          null
        ) : Ie(
          /*$$scope*/
          R[87]
        ),
        null
      );
      let U = s;
      s = M(R), s === U ? y[s].p(R, w) : (Ve(), S(y[U], 1, 1, () => {
        y[U] = null;
      }), je(), o = y[s], o ? o.p(R, w) : (o = y[s] = p[s](R), o.c()), A(o, 1), o.m(e, u));
      const G = {};
      w[2] & /*$$scope*/
      33554432 && (G.$$scope = { dirty: w, ctx: R }), c.$set(G), !/*textarea*/
      R[14] && /*variant*/
      R[15] !== "outlined" && /*ripple*/
      R[11] ? v ? (v.p(R, w), w[0] & /*textarea, variant, ripple*/
      51200 && A(v, 1)) : (v = pl(R), v.c(), A(v, 1), v.m(e, null)) : v && (Ve(), S(v, 1, 1, () => {
        v = null;
      }), je()), ae(e, D = fe(b, [
        (!m || w[0] & /*className, disabled, textarea, variant, noLabel, label, focused, value, withLeadingIcon, withTrailingIcon, invalid, internalClasses*/
        314823171 | w[1] & /*$$slots*/
        65536 && f !== (f = re({
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
        }))) && { class: f },
        (!m || w[0] & /*internalStyles, style*/
        67109888 && h !== (h = Object.entries(
          /*internalStyles*/
          R[26]
        ).map(_l).concat([
          /*style*/
          R[10]
        ]).join(" "))) && { style: h },
        {
          for: (
            /* suppress a11y warning, since this is wrapped */
            void 0
          )
        },
        w[1] & /*$$restProps*/
        32768 && jt(
          /*$$restProps*/
          R[46],
          ["input$", "label$", "ripple$", "outline$", "helperLine$"]
        )
      ])), g && he(g.update) && w[0] & /*textarea, variant*/
      49152 | w[1] & /*inputElement*/
      4 && g.update.call(null, {
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
      }), _ && he(_.update) && w[0] & /*use*/
      256 && _.update.call(
        null,
        /*use*/
        R[8]
      );
    },
    i(R) {
      m || (A(O), A(E), A(r.$$.fragment, R), A(k, R), A(o), A(c.$$.fragment, R), A(v), m = !0);
    },
    o(R) {
      S(O), S(E), S(r.$$.fragment, R), S(k, R), S(o), S(c.$$.fragment, R), S(v), m = !1;
    },
    d(R) {
      R && V(e), O && O.d(), E && E.d(), ee(r), k && k.d(R), y[s].d(), ee(c), v && v.d(), n[78](null), C = !1, Ze(I);
    }
  };
}
function ju(n) {
  let e;
  const t = (
    /*#slots*/
    n[56].leadingIcon
  ), i = ge(
    t,
    n,
    /*$$scope*/
    n[87],
    $r
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
      33554432) && be(
        i,
        t,
        r,
        /*$$scope*/
        r[87],
        e ? _e(
          t,
          /*$$scope*/
          r[87],
          l,
          ku
        ) : Ie(
          /*$$scope*/
          r[87]
        ),
        $r
      );
    },
    i(r) {
      e || (A(i, r), e = !0);
    },
    o(r) {
      S(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function Gu(n) {
  let e;
  const t = (
    /*#slots*/
    n[56].trailingIcon
  ), i = ge(
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
      33554432) && be(
        i,
        t,
        r,
        /*$$scope*/
        r[87],
        e ? _e(
          t,
          /*$$scope*/
          r[87],
          l,
          Ru
        ) : Ie(
          /*$$scope*/
          r[87]
        ),
        xr
      );
    },
    i(r) {
      e || (A(i, r), e = !0);
    },
    o(r) {
      S(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function ol(n) {
  let e, t, i, r = (
    /*variant*/
    n[15] === "filled" && ul()
  ), l = !/*noLabel*/
  n[16] && /*label*/
  (n[17] != null || /*$$slots*/
  n[47].label) && cl(n);
  return {
    c() {
      r && r.c(), e = ce(), l && l.c(), t = Xe();
    },
    m(a, s) {
      r && r.m(a, s), j(a, e, s), l && l.m(a, s), j(a, t, s), i = !0;
    },
    p(a, s) {
      /*variant*/
      a[15] === "filled" ? r || (r = ul(), r.c(), r.m(e.parentNode, e)) : r && (r.d(1), r = null), !/*noLabel*/
      a[16] && /*label*/
      (a[17] != null || /*$$slots*/
      a[47].label) ? l ? (l.p(a, s), s[0] & /*noLabel, label*/
      196608 | s[1] & /*$$slots*/
      65536 && A(l, 1)) : (l = cl(a), l.c(), A(l, 1), l.m(t.parentNode, t)) : l && (Ve(), S(l, 1, 1, () => {
        l = null;
      }), je());
    },
    i(a) {
      i || (A(l), i = !0);
    },
    o(a) {
      S(l), i = !1;
    },
    d(a) {
      a && (V(e), V(t)), r && r.d(a), l && l.d(a);
    }
  };
}
function ul(n) {
  let e;
  return {
    c() {
      e = le("span"), B(e, "class", "mdc-text-field__ripple");
    },
    m(t, i) {
      j(t, e, i);
    },
    d(t) {
      t && V(e);
    }
  };
}
function cl(n) {
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
    Pe(
      /*$$restProps*/
      n[46],
      "label$"
    )
  ];
  let r = {
    $$slots: { default: [Ku] },
    $$scope: { ctx: n }
  };
  for (let l = 0; l < i.length; l += 1)
    r = z(r, i[l]);
  return e = new _i({ props: r }), n[57](e), {
    c() {
      te(e.$$.fragment);
    },
    m(l, a) {
      $(e, l, a), t = !0;
    },
    p(l, a) {
      const s = a[0] & /*focused, value, required*/
      268443649 | a[1] & /*$$restProps*/
      32768 ? fe(i, [
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
        32768 && Oe(Pe(
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
      t || (A(e.$$.fragment, l), t = !0);
    },
    o(l) {
      S(e.$$.fragment, l), t = !1;
    },
    d(l) {
      n[57](null), ee(e, l);
    }
  };
}
function Ku(n) {
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
  ), l = ge(
    r,
    n,
    /*$$scope*/
    n[87],
    al
  );
  return {
    c() {
      t = ot(e), l && l.c();
    },
    m(a, s) {
      j(a, t, s), l && l.m(a, s), i = !0;
    },
    p(a, s) {
      (!i || s[0] & /*label*/
      131072) && e !== (e = /*label*/
      (a[17] == null ? "" : (
        /*label*/
        a[17]
      )) + "") && St(t, e), l && l.p && (!i || s[2] & /*$$scope*/
      33554432) && be(
        l,
        r,
        a,
        /*$$scope*/
        a[87],
        i ? _e(
          r,
          /*$$scope*/
          a[87],
          s,
          Hu
        ) : Ie(
          /*$$scope*/
          a[87]
        ),
        al
      );
    },
    i(a) {
      i || (A(l, a), i = !0);
    },
    o(a) {
      S(l, a), i = !1;
    },
    d(a) {
      a && V(t), l && l.d(a);
    }
  };
}
function dl(n) {
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
    Pe(
      /*$$restProps*/
      n[46],
      "outline$"
    )
  ];
  let r = {
    $$slots: { default: [Wu] },
    $$scope: { ctx: n }
  };
  for (let l = 0; l < i.length; l += 1)
    r = z(r, i[l]);
  return e = new na({ props: r }), n[59](e), {
    c() {
      te(e.$$.fragment);
    },
    m(l, a) {
      $(e, l, a), t = !0;
    },
    p(l, a) {
      const s = a[0] & /*noLabel, label*/
      196608 | a[1] & /*$$slots, $$restProps*/
      98304 ? fe(i, [
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
        32768 && Oe(Pe(
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
      t || (A(e.$$.fragment, l), t = !0);
    },
    o(l) {
      S(e.$$.fragment, l), t = !1;
    },
    d(l) {
      n[59](null), ee(e, l);
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
    Pe(
      /*$$restProps*/
      n[46],
      "label$"
    )
  ];
  let r = {
    $$slots: { default: [qu] },
    $$scope: { ctx: n }
  };
  for (let l = 0; l < i.length; l += 1)
    r = z(r, i[l]);
  return e = new _i({ props: r }), n[58](e), {
    c() {
      te(e.$$.fragment);
    },
    m(l, a) {
      $(e, l, a), t = !0;
    },
    p(l, a) {
      const s = a[0] & /*focused, value, required*/
      268443649 | a[1] & /*$$restProps*/
      32768 ? fe(i, [
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
        32768 && Oe(Pe(
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
      t || (A(e.$$.fragment, l), t = !0);
    },
    o(l) {
      S(e.$$.fragment, l), t = !1;
    },
    d(l) {
      n[58](null), ee(e, l);
    }
  };
}
function qu(n) {
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
  ), l = ge(
    r,
    n,
    /*$$scope*/
    n[87],
    sl
  );
  return {
    c() {
      t = ot(e), l && l.c();
    },
    m(a, s) {
      j(a, t, s), l && l.m(a, s), i = !0;
    },
    p(a, s) {
      (!i || s[0] & /*label*/
      131072) && e !== (e = /*label*/
      (a[17] == null ? "" : (
        /*label*/
        a[17]
      )) + "") && St(t, e), l && l.p && (!i || s[2] & /*$$scope*/
      33554432) && be(
        l,
        r,
        a,
        /*$$scope*/
        a[87],
        i ? _e(
          r,
          /*$$scope*/
          a[87],
          s,
          Pu
        ) : Ie(
          /*$$scope*/
          a[87]
        ),
        sl
      );
    },
    i(a) {
      i || (A(l, a), i = !0);
    },
    o(a) {
      S(l, a), i = !1;
    },
    d(a) {
      a && V(t), l && l.d(a);
    }
  };
}
function Wu(n) {
  let e, t, i = !/*noLabel*/
  n[16] && /*label*/
  (n[17] != null || /*$$slots*/
  n[47].label) && fl(n);
  return {
    c() {
      i && i.c(), e = Xe();
    },
    m(r, l) {
      i && i.m(r, l), j(r, e, l), t = !0;
    },
    p(r, l) {
      !/*noLabel*/
      r[16] && /*label*/
      (r[17] != null || /*$$slots*/
      r[47].label) ? i ? (i.p(r, l), l[0] & /*noLabel, label*/
      196608 | l[1] & /*$$slots*/
      65536 && A(i, 1)) : (i = fl(r), i.c(), A(i, 1), i.m(e.parentNode, e)) : i && (Ve(), S(i, 1, 1, () => {
        i = null;
      }), je());
    },
    i(r) {
      t || (A(i), t = !0);
    },
    o(r) {
      S(i), t = !1;
    },
    d(r) {
      r && V(e), i && i.d(r);
    }
  };
}
function zu(n) {
  let e;
  const t = (
    /*#slots*/
    n[56].leadingIcon
  ), i = ge(
    t,
    n,
    /*$$scope*/
    n[87],
    ll
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
      33554432) && be(
        i,
        t,
        r,
        /*$$scope*/
        r[87],
        e ? _e(
          t,
          /*$$scope*/
          r[87],
          l,
          wu
        ) : Ie(
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
      S(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function Yu(n) {
  let e, t, i, r, l, a, s, o, u, c;
  const d = (
    /*#slots*/
    n[56].prefix
  ), f = ge(
    d,
    n,
    /*$$scope*/
    n[87],
    il
  );
  let h = (
    /*prefix*/
    n[20] != null && hl(n)
  );
  const g = [
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
    Pe(
      /*$$restProps*/
      n[46],
      "input$"
    )
  ];
  function _(p) {
    n[69](p);
  }
  function m(p) {
    n[70](p);
  }
  function C(p) {
    n[71](p);
  }
  function I(p) {
    n[72](p);
  }
  let O = {};
  for (let p = 0; p < g.length; p += 1)
    O = z(O, g[p]);
  /*value*/
  n[0] !== void 0 && (O.value = /*value*/
  n[0]), /*files*/
  n[3] !== void 0 && (O.files = /*files*/
  n[3]), /*dirty*/
  n[4] !== void 0 && (O.dirty = /*dirty*/
  n[4]), /*invalid*/
  n[1] !== void 0 && (O.invalid = /*invalid*/
  n[1]), i = new Eu({ props: O }), n[68](i), se.push(() => _t(i, "value", _)), se.push(() => _t(i, "files", m)), se.push(() => _t(i, "dirty", C)), se.push(() => _t(i, "invalid", I)), i.$on(
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
  let E = (
    /*suffix*/
    n[21] != null && ml(n)
  );
  const L = (
    /*#slots*/
    n[56].suffix
  ), k = ge(
    L,
    n,
    /*$$scope*/
    n[87],
    nl
  );
  return {
    c() {
      f && f.c(), e = ce(), h && h.c(), t = ce(), te(i.$$.fragment), o = ce(), E && E.c(), u = ce(), k && k.c();
    },
    m(p, y) {
      f && f.m(p, y), j(p, e, y), h && h.m(p, y), j(p, t, y), $(i, p, y), j(p, o, y), E && E.m(p, y), j(p, u, y), k && k.m(p, y), c = !0;
    },
    p(p, y) {
      f && f.p && (!c || y[2] & /*$$scope*/
      33554432) && be(
        f,
        d,
        p,
        /*$$scope*/
        p[87],
        c ? _e(
          d,
          /*$$scope*/
          p[87],
          y,
          Nu
        ) : Ie(
          /*$$scope*/
          p[87]
        ),
        il
      ), /*prefix*/
      p[20] != null ? h ? (h.p(p, y), y[0] & /*prefix*/
      1048576 && A(h, 1)) : (h = hl(p), h.c(), A(h, 1), h.m(t.parentNode, t)) : h && (Ve(), S(h, 1, 1, () => {
        h = null;
      }), je());
      const M = y[0] & /*type, disabled, required, updateInvalid, helperId, noLabel, label*/
      135213056 | y[1] & /*$$restProps*/
      32768 ? fe(g, [
        y[0] & /*type*/
        262144 && { type: (
          /*type*/
          p[18]
        ) },
        y[0] & /*disabled*/
        4096 && { disabled: (
          /*disabled*/
          p[12]
        ) },
        y[0] & /*required*/
        8192 && { required: (
          /*required*/
          p[13]
        ) },
        y[0] & /*updateInvalid*/
        524288 && { updateInvalid: (
          /*updateInvalid*/
          p[19]
        ) },
        y[0] & /*helperId*/
        134217728 && { "aria-controls": (
          /*helperId*/
          p[27]
        ) },
        y[0] & /*helperId*/
        134217728 && { "aria-describedby": (
          /*helperId*/
          p[27]
        ) },
        y[0] & /*noLabel, label*/
        196608 && Oe(
          /*noLabel*/
          p[16] && /*label*/
          p[17] != null ? { placeholder: (
            /*label*/
            p[17]
          ) } : {}
        ),
        y[1] & /*$$restProps*/
        32768 && Oe(Pe(
          /*$$restProps*/
          p[46],
          "input$"
        ))
      ]) : {};
      !r && y[0] & /*value*/
      1 && (r = !0, M.value = /*value*/
      p[0], gt(() => r = !1)), !l && y[0] & /*files*/
      8 && (l = !0, M.files = /*files*/
      p[3], gt(() => l = !1)), !a && y[0] & /*dirty*/
      16 && (a = !0, M.dirty = /*dirty*/
      p[4], gt(() => a = !1)), !s && y[0] & /*invalid*/
      2 && (s = !0, M.invalid = /*invalid*/
      p[1], gt(() => s = !1)), i.$set(M), /*suffix*/
      p[21] != null ? E ? (E.p(p, y), y[0] & /*suffix*/
      2097152 && A(E, 1)) : (E = ml(p), E.c(), A(E, 1), E.m(u.parentNode, u)) : E && (Ve(), S(E, 1, 1, () => {
        E = null;
      }), je()), k && k.p && (!c || y[2] & /*$$scope*/
      33554432) && be(
        k,
        L,
        p,
        /*$$scope*/
        p[87],
        c ? _e(
          L,
          /*$$scope*/
          p[87],
          y,
          Fu
        ) : Ie(
          /*$$scope*/
          p[87]
        ),
        nl
      );
    },
    i(p) {
      c || (A(f, p), A(h), A(i.$$.fragment, p), A(E), A(k, p), c = !0);
    },
    o(p) {
      S(f, p), S(h), S(i.$$.fragment, p), S(E), S(k, p), c = !1;
    },
    d(p) {
      p && (V(e), V(t), V(o), V(u)), f && f.d(p), h && h.d(p), n[68](null), ee(i, p), E && E.d(p), k && k.d(p);
    }
  };
}
function Xu(n) {
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
    Pe(
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
    h = z(h, u[m]);
  /*value*/
  n[0] !== void 0 && (h.value = /*value*/
  n[0]), /*dirty*/
  n[4] !== void 0 && (h.dirty = /*dirty*/
  n[4]), /*invalid*/
  n[1] !== void 0 && (h.invalid = /*invalid*/
  n[1]), t = new Tu({ props: h }), n[60](t), se.push(() => _t(t, "value", c)), se.push(() => _t(t, "dirty", d)), se.push(() => _t(t, "invalid", f)), t.$on(
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
  const g = (
    /*#slots*/
    n[56].internalCounter
  ), _ = ge(
    g,
    n,
    /*$$scope*/
    n[87],
    rl
  );
  return {
    c() {
      e = le("span"), te(t.$$.fragment), a = ce(), _ && _.c(), B(e, "class", s = re({
        "mdc-text-field__resizer": !("input$resizable" in /*$$restProps*/
        n[46]) || /*$$restProps*/
        n[46].input$resizable
      }));
    },
    m(m, C) {
      j(m, e, C), $(t, e, null), ne(e, a), _ && _.m(e, null), o = !0;
    },
    p(m, C) {
      const I = C[0] & /*disabled, required, updateInvalid, helperId*/
      134754304 | C[1] & /*$$restProps*/
      32768 ? fe(u, [
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
        32768 && Oe(Pe(
          /*$$restProps*/
          m[46],
          "input$"
        ))
      ]) : {};
      !i && C[0] & /*value*/
      1 && (i = !0, I.value = /*value*/
      m[0], gt(() => i = !1)), !r && C[0] & /*dirty*/
      16 && (r = !0, I.dirty = /*dirty*/
      m[4], gt(() => r = !1)), !l && C[0] & /*invalid*/
      2 && (l = !0, I.invalid = /*invalid*/
      m[1], gt(() => l = !1)), t.$set(I), _ && _.p && (!o || C[2] & /*$$scope*/
      33554432) && be(
        _,
        g,
        m,
        /*$$scope*/
        m[87],
        o ? _e(
          g,
          /*$$scope*/
          m[87],
          C,
          Uu
        ) : Ie(
          /*$$scope*/
          m[87]
        ),
        rl
      ), (!o || C[1] & /*$$restProps*/
      32768 && s !== (s = re({
        "mdc-text-field__resizer": !("input$resizable" in /*$$restProps*/
        m[46]) || /*$$restProps*/
        m[46].input$resizable
      }))) && B(e, "class", s);
    },
    i(m) {
      o || (A(t.$$.fragment, m), A(_, m), o = !0);
    },
    o(m) {
      S(t.$$.fragment, m), S(_, m), o = !1;
    },
    d(m) {
      m && V(e), n[60](null), ee(t), _ && _.d(m);
    }
  };
}
function hl(n) {
  let e, t;
  return e = new bu({
    props: {
      $$slots: { default: [Zu] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      $(e, i, r), t = !0;
    },
    p(i, r) {
      const l = {};
      r[0] & /*prefix*/
      1048576 | r[2] & /*$$scope*/
      33554432 && (l.$$scope = { dirty: r, ctx: i }), e.$set(l);
    },
    i(i) {
      t || (A(e.$$.fragment, i), t = !0);
    },
    o(i) {
      S(e.$$.fragment, i), t = !1;
    },
    d(i) {
      ee(e, i);
    }
  };
}
function Zu(n) {
  let e;
  return {
    c() {
      e = ot(
        /*prefix*/
        n[20]
      );
    },
    m(t, i) {
      j(t, e, i);
    },
    p(t, i) {
      i[0] & /*prefix*/
      1048576 && St(
        e,
        /*prefix*/
        t[20]
      );
    },
    d(t) {
      t && V(e);
    }
  };
}
function ml(n) {
  let e, t;
  return e = new Iu({
    props: {
      $$slots: { default: [Qu] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      $(e, i, r), t = !0;
    },
    p(i, r) {
      const l = {};
      r[0] & /*suffix*/
      2097152 | r[2] & /*$$scope*/
      33554432 && (l.$$scope = { dirty: r, ctx: i }), e.$set(l);
    },
    i(i) {
      t || (A(e.$$.fragment, i), t = !0);
    },
    o(i) {
      S(e.$$.fragment, i), t = !1;
    },
    d(i) {
      ee(e, i);
    }
  };
}
function Qu(n) {
  let e;
  return {
    c() {
      e = ot(
        /*suffix*/
        n[21]
      );
    },
    m(t, i) {
      j(t, e, i);
    },
    p(t, i) {
      i[0] & /*suffix*/
      2097152 && St(
        e,
        /*suffix*/
        t[21]
      );
    },
    d(t) {
      t && V(e);
    }
  };
}
function Ju(n) {
  let e;
  const t = (
    /*#slots*/
    n[56].trailingIcon
  ), i = ge(
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
      33554432) && be(
        i,
        t,
        r,
        /*$$scope*/
        r[87],
        e ? _e(
          t,
          /*$$scope*/
          r[87],
          l,
          Mu
        ) : Ie(
          /*$$scope*/
          r[87]
        ),
        tl
      );
    },
    i(r) {
      e || (A(i, r), e = !0);
    },
    o(r) {
      S(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function pl(n) {
  let e, t;
  const i = [Pe(
    /*$$restProps*/
    n[46],
    "ripple$"
  )];
  let r = {};
  for (let l = 0; l < i.length; l += 1)
    r = z(r, i[l]);
  return e = new ta({ props: r }), n[77](e), {
    c() {
      te(e.$$.fragment);
    },
    m(l, a) {
      $(e, l, a), t = !0;
    },
    p(l, a) {
      const s = a[1] & /*$$restProps*/
      32768 ? fe(i, [Oe(Pe(
        /*$$restProps*/
        l[46],
        "ripple$"
      ))]) : {};
      e.$set(s);
    },
    i(l) {
      t || (A(e.$$.fragment, l), t = !0);
    },
    o(l) {
      S(e.$$.fragment, l), t = !1;
    },
    d(l) {
      n[77](null), ee(e, l);
    }
  };
}
function gl(n) {
  let e, t;
  const i = [Pe(
    /*$$restProps*/
    n[46],
    "helperLine$"
  )];
  let r = {
    $$slots: { default: [xu] },
    $$scope: { ctx: n }
  };
  for (let l = 0; l < i.length; l += 1)
    r = z(r, i[l]);
  return e = new _u({ props: r }), e.$on(
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
      te(e.$$.fragment);
    },
    m(l, a) {
      $(e, l, a), t = !0;
    },
    p(l, a) {
      const s = a[1] & /*$$restProps*/
      32768 ? fe(i, [Oe(Pe(
        /*$$restProps*/
        l[46],
        "helperLine$"
      ))]) : {};
      a[2] & /*$$scope*/
      33554432 && (s.$$scope = { dirty: a, ctx: l }), e.$set(s);
    },
    i(l) {
      t || (A(e.$$.fragment, l), t = !0);
    },
    o(l) {
      S(e.$$.fragment, l), t = !1;
    },
    d(l) {
      ee(e, l);
    }
  };
}
function xu(n) {
  let e;
  const t = (
    /*#slots*/
    n[56].helper
  ), i = ge(
    t,
    n,
    /*$$scope*/
    n[87],
    Qr
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
      33554432) && be(
        i,
        t,
        r,
        /*$$scope*/
        r[87],
        e ? _e(
          t,
          /*$$scope*/
          r[87],
          l,
          Lu
        ) : Ie(
          /*$$scope*/
          r[87]
        ),
        Qr
      );
    },
    i(r) {
      e || (A(i, r), e = !0);
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
  let e, t, i, r, l;
  const a = [Vu, Bu], s = [];
  function o(c, d) {
    return (
      /*valued*/
      c[36] ? 0 : 1
    );
  }
  e = o(n), t = s[e] = a[e](n);
  let u = (
    /*$$slots*/
    n[47].helper && gl(n)
  );
  return {
    c() {
      t.c(), i = ce(), u && u.c(), r = Xe();
    },
    m(c, d) {
      s[e].m(c, d), j(c, i, d), u && u.m(c, d), j(c, r, d), l = !0;
    },
    p(c, d) {
      t.p(c, d), /*$$slots*/
      c[47].helper ? u ? (u.p(c, d), d[1] & /*$$slots*/
      65536 && A(u, 1)) : (u = gl(c), u.c(), A(u, 1), u.m(r.parentNode, r)) : u && (Ve(), S(u, 1, 1, () => {
        u = null;
      }), je());
    },
    i(c) {
      l || (A(t), A(u), l = !0);
    },
    o(c) {
      S(t), S(u), l = !1;
    },
    d(c) {
      c && (V(i), V(r)), s[e].d(c), u && u.d(c);
    }
  };
}
const _l = ([n, e]) => `${n}: ${e};`, bl = ([n, e]) => `${n}: ${e};`;
function ec(n, e, t) {
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
  let l = me(e, r), { $$slots: a = {}, $$scope: s } = e;
  const o = fr(a), { applyPassive: u } = $s, c = tt(Je());
  let d = () => {
  };
  function f(P) {
    return P === d;
  }
  let { use: h = [] } = e, { class: g = "" } = e, { style: _ = "" } = e, { ripple: m = !0 } = e, { disabled: C = !1 } = e, { required: I = !1 } = e, { textarea: O = !1 } = e, { variant: E = O ? "outlined" : "standard" } = e, { noLabel: L = !1 } = e, { label: k = void 0 } = e, { type: p = "text" } = e, { value: y = l.input$emptyValueUndefined ? void 0 : d } = e, { files: M = d } = e;
  const v = !f(y) || !f(M);
  f(y) && (y = void 0), f(M) && (M = null);
  let { invalid: b = d } = e, { updateInvalid: D = f(b) } = e;
  f(b) && (b = !1);
  let { dirty: R = !1 } = e, { prefix: w = void 0 } = e, { suffix: q = void 0 } = e, { validateOnValueChange: U = D } = e, { useNativeValidation: G = D } = e, { withLeadingIcon: N = d } = e, { withTrailingIcon: T = d } = e, { input: Q = void 0 } = e, { floatingLabel: Re = void 0 } = e, { lineRipple: Fe = void 0 } = e, { notchedOutline: ve = void 0 } = e, ze, K, J = {}, Ce = {}, Te, Ne = !1, ie = qe("SMUI:addLayoutListener"), W, Ye, Ge = new Promise((P) => Ye = P), ft, Y, Ee, Ke, Ue = y;
  ie && (W = ie(X)), ut(() => {
    if (t(54, K = new nu(
      {
        // getRootAdapterMethods_
        addClass: at,
        removeClass: $e,
        hasClass: dt,
        registerTextFieldInteractionHandler: (P, mt) => Ae().addEventListener(P, mt),
        deregisterTextFieldInteractionHandler: (P, mt) => Ae().removeEventListener(P, mt),
        registerValidationAttributeChangeHandler: (P) => {
          const mt = (jn) => jn.map((Gn) => Gn.attributeName).filter((Gn) => Gn), ni = new MutationObserver((jn) => {
            G && P(mt(jn));
          }), ji = { attributes: !0 };
          return Q && ni.observe(Q.getElement(), ji), ni;
        },
        deregisterValidationAttributeChangeHandler: (P) => {
          P.disconnect();
        },
        // getInputAdapterMethods_
        getNativeInput: () => {
          var P;
          return (P = Q == null ? void 0 : Q.getElement()) !== null && P !== void 0 ? P : null;
        },
        setInputAttr: (P, mt) => {
          Q == null || Q.addAttr(P, mt);
        },
        removeInputAttr: (P) => {
          Q == null || Q.removeAttr(P);
        },
        isFocused: () => document.activeElement === (Q == null ? void 0 : Q.getElement()),
        registerInputInteractionHandler: (P, mt) => {
          Q == null || Q.getElement().addEventListener(P, mt, u());
        },
        deregisterInputInteractionHandler: (P, mt) => {
          Q == null || Q.getElement().removeEventListener(P, mt, u());
        },
        // getLabelAdapterMethods_
        floatLabel: (P) => Re && Re.float(P),
        getLabelWidth: () => Re ? Re.getWidth() : 0,
        hasLabel: () => !!Re,
        shakeLabel: (P) => Re && Re.shake(P),
        setLabelRequired: (P) => Re && Re.setRequired(P),
        // getLineRippleAdapterMethods_
        activateLineRipple: () => Fe && Fe.activate(),
        deactivateLineRipple: () => Fe && Fe.deactivate(),
        setLineRippleTransformOrigin: (P) => Fe && Fe.setRippleCenter(P),
        // getOutlineAdapterMethods_
        closeOutline: () => ve && ve.closeNotch(),
        hasOutline: () => !!ve,
        notchOutline: (P) => ve && ve.notch(P)
      },
      {
        get helperText() {
          return Ee;
        },
        get characterCounter() {
          return Ke;
        },
        get leadingIcon() {
          return ft;
        },
        get trailingIcon() {
          return Y;
        }
      }
    )), v) {
      if (Q == null)
        throw new Error("SMUI Textfield must be initialized with either a non-undefined initial value or an Input component.");
      K.init();
    } else
      mr().then(() => {
        if (Q == null)
          throw new Error("SMUI Textfield must be initialized with either a non-undefined initial value or an Input component.");
        K.init();
      });
    return Ye(), () => {
      K.destroy();
    };
  }), Wt(() => {
    W && W();
  });
  function Et(P) {
    t(29, ft = P.detail);
  }
  function F(P) {
    t(30, Y = P.detail);
  }
  function x(P) {
    t(32, Ke = P.detail);
  }
  function Z(P) {
    t(27, Te = P.detail);
  }
  function Be(P) {
    t(31, Ee = P.detail);
  }
  function dt(P) {
    var mt;
    return P in J ? (mt = J[P]) !== null && mt !== void 0 ? mt : null : Ae().classList.contains(P);
  }
  function at(P) {
    J[P] || t(25, J[P] = !0, J);
  }
  function $e(P) {
    (!(P in J) || J[P]) && t(25, J[P] = !1, J);
  }
  function Le(P, mt) {
    Ce[P] != mt && (mt === "" || mt == null ? (delete Ce[P], t(26, Ce)) : t(26, Ce[P] = mt, Ce));
  }
  function ue() {
    Q == null || Q.focus();
  }
  function Ht() {
    Q == null || Q.blur();
  }
  function X() {
    if (K) {
      const P = K.shouldFloat;
      K.notchOutline(P);
    }
  }
  function Ae() {
    return ze;
  }
  function Se(P) {
    se[P ? "unshift" : "push"](() => {
      Re = P, t(5, Re);
    });
  }
  function rt(P) {
    se[P ? "unshift" : "push"](() => {
      Re = P, t(5, Re);
    });
  }
  function Qt(P) {
    se[P ? "unshift" : "push"](() => {
      ve = P, t(7, ve);
    });
  }
  function Vn(P) {
    se[P ? "unshift" : "push"](() => {
      Q = P, t(2, Q);
    });
  }
  function Ii(P) {
    y = P, t(0, y);
  }
  function vi(P) {
    R = P, t(4, R);
  }
  function Ci(P) {
    b = P, t(1, b), t(54, K), t(19, D);
  }
  const Ai = () => t(28, Ne = !1), Ei = () => t(28, Ne = !0), En = (P) => pe(ze, "blur", P), yi = (P) => pe(ze, "focus", P);
  function ei(P) {
    se[P ? "unshift" : "push"](() => {
      Q = P, t(2, Q);
    });
  }
  function Si(P) {
    y = P, t(0, y);
  }
  function ti(P) {
    M = P, t(3, M);
  }
  function yn(P) {
    R = P, t(4, R);
  }
  function Ti(P) {
    b = P, t(1, b), t(54, K), t(19, D);
  }
  const Li = () => t(28, Ne = !1), Oi = () => t(28, Ne = !0), Ri = (P) => pe(ze, "blur", P), ki = (P) => pe(ze, "focus", P);
  function Di(P) {
    se[P ? "unshift" : "push"](() => {
      Fe = P, t(6, Fe);
    });
  }
  function Mi(P) {
    se[P ? "unshift" : "push"](() => {
      ze = P, t(24, ze);
    });
  }
  const Fi = () => t(29, ft = void 0), Ni = () => t(30, Y = void 0), Ui = () => t(32, Ke = void 0);
  function wi(P) {
    se[P ? "unshift" : "push"](() => {
      ze = P, t(24, ze);
    });
  }
  const Pi = () => t(29, ft = void 0), Hi = () => t(30, Y = void 0), Bi = () => {
    t(27, Te = void 0), t(31, Ee = void 0);
  }, Vi = () => t(32, Ke = void 0);
  return n.$$set = (P) => {
    e = z(z({}, e), et(P)), t(46, l = me(e, r)), "use" in P && t(8, h = P.use), "class" in P && t(9, g = P.class), "style" in P && t(10, _ = P.style), "ripple" in P && t(11, m = P.ripple), "disabled" in P && t(12, C = P.disabled), "required" in P && t(13, I = P.required), "textarea" in P && t(14, O = P.textarea), "variant" in P && t(15, E = P.variant), "noLabel" in P && t(16, L = P.noLabel), "label" in P && t(17, k = P.label), "type" in P && t(18, p = P.type), "value" in P && t(0, y = P.value), "files" in P && t(3, M = P.files), "invalid" in P && t(1, b = P.invalid), "updateInvalid" in P && t(19, D = P.updateInvalid), "dirty" in P && t(4, R = P.dirty), "prefix" in P && t(20, w = P.prefix), "suffix" in P && t(21, q = P.suffix), "validateOnValueChange" in P && t(48, U = P.validateOnValueChange), "useNativeValidation" in P && t(49, G = P.useNativeValidation), "withLeadingIcon" in P && t(22, N = P.withLeadingIcon), "withTrailingIcon" in P && t(23, T = P.withTrailingIcon), "input" in P && t(2, Q = P.input), "floatingLabel" in P && t(5, Re = P.floatingLabel), "lineRipple" in P && t(6, Fe = P.lineRipple), "notchedOutline" in P && t(7, ve = P.notchedOutline), "$$scope" in P && t(87, s = P.$$scope);
  }, n.$$.update = () => {
    if (n.$$.dirty[0] & /*input*/
    4 && t(33, i = Q && Q.getElement()), n.$$.dirty[0] & /*invalid, updateInvalid*/
    524290 | n.$$.dirty[1] & /*instance*/
    8388608 && K && K.isValid() !== !b && (D ? t(1, b = !K.isValid()) : K.setValid(!b)), n.$$.dirty[1] & /*instance, validateOnValueChange*/
    8519680 && K && K.getValidateOnValueChange() !== U && K.setValidateOnValueChange(f(U) ? !1 : U), n.$$.dirty[1] & /*instance, useNativeValidation*/
    8650752 && K && K.setUseNativeValidation(f(G) ? !0 : G), n.$$.dirty[0] & /*disabled*/
    4096 | n.$$.dirty[1] & /*instance*/
    8388608 && K && K.setDisabled(C), n.$$.dirty[0] & /*value*/
    1 | n.$$.dirty[1] & /*instance, previousValue*/
    25165824 && K && v && Ue !== y) {
      t(55, Ue = y);
      const P = `${y}`;
      K.getValue() !== P && K.setValue(P);
    }
  }, [
    y,
    b,
    Q,
    M,
    R,
    Re,
    Fe,
    ve,
    h,
    g,
    _,
    m,
    C,
    I,
    O,
    E,
    L,
    k,
    p,
    D,
    w,
    q,
    N,
    T,
    ze,
    J,
    Ce,
    Te,
    Ne,
    ft,
    Y,
    Ee,
    Ke,
    i,
    c,
    f,
    v,
    Ge,
    Et,
    F,
    x,
    Z,
    Be,
    at,
    $e,
    Le,
    l,
    o,
    U,
    G,
    ue,
    Ht,
    X,
    Ae,
    K,
    Ue,
    a,
    Se,
    rt,
    Qt,
    Vn,
    Ii,
    vi,
    Ci,
    Ai,
    Ei,
    En,
    yi,
    ei,
    Si,
    ti,
    yn,
    Ti,
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
    s
  ];
}
class ia extends Me {
  constructor(e) {
    super(), De(
      this,
      e,
      ec,
      $u,
      ye,
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
function tc(n) {
  let e;
  return {
    c() {
      e = ot(
        /*content*/
        n[7]
      );
    },
    m(t, i) {
      j(t, e, i);
    },
    p(t, i) {
      i & /*content*/
      128 && St(
        e,
        /*content*/
        t[7]
      );
    },
    i: nt,
    o: nt,
    d(t) {
      t && V(e);
    }
  };
}
function nc(n) {
  let e;
  const t = (
    /*#slots*/
    n[15].default
  ), i = ge(
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
      16384) && be(
        i,
        t,
        r,
        /*$$scope*/
        r[14],
        e ? _e(
          t,
          /*$$scope*/
          r[14],
          l,
          null
        ) : Ie(
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
      S(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function ic(n) {
  let e, t, i, r, l, a, s, o, u, c;
  const d = [nc, tc], f = [];
  function h(m, C) {
    return (
      /*content*/
      m[7] == null ? 0 : 1
    );
  }
  t = h(n), i = f[t] = d[t](n);
  let g = [
    {
      class: r = re({
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
  ], _ = {};
  for (let m = 0; m < g.length; m += 1)
    _ = z(_, g[m]);
  return {
    c() {
      e = le("i"), i.c(), ae(e, _);
    },
    m(m, C) {
      j(m, e, C), f[t].m(e, null), n[16](e), o = !0, u || (c = [
        de(s = Qe.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        de(
          /*forwardEvents*/
          n[9].call(null, e)
        )
      ], u = !0);
    },
    p(m, [C]) {
      let I = t;
      t = h(m), t === I ? f[t].p(m, C) : (Ve(), S(f[I], 1, 1, () => {
        f[I] = null;
      }), je(), i = f[t], i ? i.p(m, C) : (i = f[t] = d[t](m), i.c()), A(i, 1), i.m(e, null)), ae(e, _ = fe(g, [
        (!o || C & /*className*/
        2 && r !== (r = re({
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
      ])), s && he(s.update) && C & /*use*/
      1 && s.update.call(
        null,
        /*use*/
        m[0]
      );
    },
    i(m) {
      o || (A(i), o = !0);
    },
    o(m) {
      S(i), o = !1;
    },
    d(m) {
      m && V(e), f[t].d(), n[16](null), u = !1, Ze(c);
    }
  };
}
function rc(n, e, t) {
  let i;
  const r = ["use", "class", "role", "tabindex", "disabled", "getElement"];
  let l = me(e, r), a, { $$slots: s = {}, $$scope: o } = e;
  const u = tt(Je());
  let { use: c = [] } = e, { class: d = "" } = e, { role: f = void 0 } = e, { tabindex: h = f === "button" ? 0 : -1 } = e, { disabled: g = !1 } = e, _, m, C = {};
  const I = qe("SMUI:textfield:icon:leading");
  it(n, I, (v) => t(18, a = v));
  const O = a;
  let E;
  ut(() => (m = new ru({
    getAttr: L,
    setAttr: k,
    removeAttr: p,
    setContent: (v) => {
      t(7, E = v);
    },
    registerInteractionHandler: (v, b) => y().addEventListener(v, b),
    deregisterInteractionHandler: (v, b) => y().removeEventListener(v, b),
    notifyIconAction: () => pe(y(), "SMUITextField:icon", void 0, void 0, !0)
  }), pe(
    y(),
    O ? "SMUITextfieldLeadingIcon:mount" : "SMUITextfieldTrailingIcon:mount",
    m
  ), m.init(), () => {
    pe(
      y(),
      O ? "SMUITextfieldLeadingIcon:unmount" : "SMUITextfieldTrailingIcon:unmount",
      m
    ), m.destroy();
  }));
  function L(v) {
    var b;
    return v in C ? (b = C[v]) !== null && b !== void 0 ? b : null : y().getAttribute(v);
  }
  function k(v, b) {
    C[v] !== b && t(6, C[v] = b, C);
  }
  function p(v) {
    (!(v in C) || C[v] != null) && t(6, C[v] = void 0, C);
  }
  function y() {
    return _;
  }
  function M(v) {
    se[v ? "unshift" : "push"](() => {
      _ = v, t(5, _);
    });
  }
  return n.$$set = (v) => {
    e = z(z({}, e), et(v)), t(12, l = me(e, r)), "use" in v && t(0, c = v.use), "class" in v && t(1, d = v.class), "role" in v && t(2, f = v.role), "tabindex" in v && t(3, h = v.tabindex), "disabled" in v && t(4, g = v.disabled), "$$scope" in v && t(14, o = v.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty & /*role, tabindex*/
    12 && t(8, i = { role: f, tabindex: h });
  }, [
    c,
    d,
    f,
    h,
    g,
    _,
    C,
    E,
    i,
    u,
    I,
    O,
    l,
    y,
    o,
    s,
    M
  ];
}
class lc extends Me {
  constructor(e) {
    super(), De(this, e, rc, ic, ye, {
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
function sc(n) {
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
    n[0]), e = new ia({ props: l }), se.push(() => _t(e, "value", r)), {
      c() {
        te(e.$$.fragment);
      },
      m(a, s) {
        $(e, a, s), i = !0;
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
        a[0], gt(() => t = !1)), e.$set(o);
      },
      i(a) {
        i || (A(e.$$.fragment, a), i = !0);
      },
      o(a) {
        S(e.$$.fragment, a), i = !1;
      },
      d(a) {
        ee(e, a);
      }
    }
  );
}
function ac(n) {
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
    $$slots: { leadingIcon: [uc] },
    $$scope: { ctx: n }
  };
  return (
    /*value*/
    n[0] !== void 0 && (l.value = /*value*/
    n[0]), e = new ia({ props: l }), se.push(() => _t(e, "value", r)), {
      c() {
        te(e.$$.fragment);
      },
      m(a, s) {
        $(e, a, s), i = !0;
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
        a[0], gt(() => t = !1)), e.$set(o);
      },
      i(a) {
        i || (A(e.$$.fragment, a), i = !0);
      },
      o(a) {
        S(e.$$.fragment, a), i = !1;
      },
      d(a) {
        ee(e, a);
      }
    }
  );
}
function oc(n) {
  let e;
  return {
    c() {
      e = ot(
        /*icon*/
        n[3]
      );
    },
    m(t, i) {
      j(t, e, i);
    },
    p(t, i) {
      i & /*icon*/
      8 && St(
        e,
        /*icon*/
        t[3]
      );
    },
    d(t) {
      t && V(e);
    }
  };
}
function uc(n) {
  let e, t;
  return e = new lc({
    props: {
      class: "material-icons",
      slot: "leadingIcon",
      $$slots: { default: [oc] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      $(e, i, r), t = !0;
    },
    p(i, r) {
      const l = {};
      r & /*$$scope, icon*/
      136 && (l.$$scope = { dirty: r, ctx: i }), e.$set(l);
    },
    i(i) {
      t || (A(e.$$.fragment, i), t = !0);
    },
    o(i) {
      S(e.$$.fragment, i), t = !1;
    },
    d(i) {
      ee(e, i);
    }
  };
}
function cc(n) {
  let e, t, i, r;
  const l = [ac, sc], a = [];
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
      a[e].m(o, u), j(o, i, u), r = !0;
    },
    p(o, [u]) {
      let c = e;
      e = s(o), e === c ? a[e].p(o, u) : (Ve(), S(a[c], 1, 1, () => {
        a[c] = null;
      }), je(), t = a[e], t ? t.p(o, u) : (t = a[e] = l[e](o), t.c()), A(t, 1), t.m(i.parentNode, i));
    },
    i(o) {
      r || (A(t), r = !0);
    },
    o(o) {
      S(t), r = !1;
    },
    d(o) {
      o && V(i), a[e].d(o);
    }
  };
}
function dc(n, e, t) {
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
class fc extends Me {
  constructor(e) {
    super(), De(this, e, dc, cc, ye, {
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
var hc = {
  ANCHOR: "mdc-menu-surface--anchor",
  ANIMATING_CLOSED: "mdc-menu-surface--animating-closed",
  ANIMATING_OPEN: "mdc-menu-surface--animating-open",
  FIXED: "mdc-menu-surface--fixed",
  IS_OPEN_BELOW: "mdc-menu-surface--is-open-below",
  OPEN: "mdc-menu-surface--open",
  ROOT: "mdc-menu-surface"
}, mc = {
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
var In;
(function(n) {
  n[n.TOP_LEFT = 0] = "TOP_LEFT", n[n.TOP_RIGHT = 4] = "TOP_RIGHT", n[n.BOTTOM_LEFT = 1] = "BOTTOM_LEFT", n[n.BOTTOM_RIGHT = 5] = "BOTTOM_RIGHT", n[n.TOP_START = 8] = "TOP_START", n[n.TOP_END = 12] = "TOP_END", n[n.BOTTOM_START = 9] = "BOTTOM_START", n[n.BOTTOM_END = 13] = "BOTTOM_END";
})(In || (In = {}));
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
var an, xt, xe = {
  LIST_ITEM_ACTIVATED_CLASS: "mdc-list-item--activated",
  LIST_ITEM_CLASS: "mdc-list-item",
  LIST_ITEM_DISABLED_CLASS: "mdc-list-item--disabled",
  LIST_ITEM_SELECTED_CLASS: "mdc-list-item--selected",
  LIST_ITEM_TEXT_CLASS: "mdc-list-item__text",
  LIST_ITEM_PRIMARY_TEXT_CLASS: "mdc-list-item__primary-text",
  ROOT: "mdc-list"
};
an = {}, an["" + xe.LIST_ITEM_ACTIVATED_CLASS] = "mdc-list-item--activated", an["" + xe.LIST_ITEM_CLASS] = "mdc-list-item", an["" + xe.LIST_ITEM_DISABLED_CLASS] = "mdc-list-item--disabled", an["" + xe.LIST_ITEM_SELECTED_CLASS] = "mdc-list-item--selected", an["" + xe.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-list-item__primary-text", an["" + xe.ROOT] = "mdc-list";
var On = (xt = {}, xt["" + xe.LIST_ITEM_ACTIVATED_CLASS] = "mdc-deprecated-list-item--activated", xt["" + xe.LIST_ITEM_CLASS] = "mdc-deprecated-list-item", xt["" + xe.LIST_ITEM_DISABLED_CLASS] = "mdc-deprecated-list-item--disabled", xt["" + xe.LIST_ITEM_SELECTED_CLASS] = "mdc-deprecated-list-item--selected", xt["" + xe.LIST_ITEM_TEXT_CLASS] = "mdc-deprecated-list-item__text", xt["" + xe.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-deprecated-list-item__primary-text", xt["" + xe.ROOT] = "mdc-deprecated-list", xt), on = {
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
    .` + On[xe.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + On[xe.LIST_ITEM_CLASS] + ` a
  `,
  DEPRECATED_SELECTOR: ".mdc-deprecated-list",
  FOCUSABLE_CHILD_ELEMENTS: `
    .` + xe.LIST_ITEM_CLASS + ` button:not(:disabled),
    .` + xe.LIST_ITEM_CLASS + ` a,
    .` + xe.LIST_ITEM_CLASS + ` input[type="radio"]:not(:disabled),
    .` + xe.LIST_ITEM_CLASS + ` input[type="checkbox"]:not(:disabled),
    .` + On[xe.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + On[xe.LIST_ITEM_CLASS] + ` a,
    .` + On[xe.LIST_ITEM_CLASS] + ` input[type="radio"]:not(:disabled),
    .` + On[xe.LIST_ITEM_CLASS] + ` input[type="checkbox"]:not(:disabled)
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
var pc = ["input", "button", "textarea", "select"], Bt = function(n) {
  var e = n.target;
  if (e) {
    var t = ("" + e.tagName).toLowerCase();
    pc.indexOf(t) === -1 && n.preventDefault();
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
function gc() {
  var n = {
    bufferClearTimeout: 0,
    currentFirstChar: "",
    sortedIndexCursor: 0,
    typeaheadBuffer: ""
  };
  return n;
}
function _c(n, e) {
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
function or(n, e) {
  var t = n.nextChar, i = n.focusItemAtIndex, r = n.sortedIndexByFirstChar, l = n.focusedItemIndex, a = n.skipFocus, s = n.isItemAtIndexDisabled;
  clearTimeout(e.bufferClearTimeout), e.bufferClearTimeout = setTimeout(function() {
    la(e);
  }, bt.TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS), e.typeaheadBuffer = e.typeaheadBuffer + t;
  var o;
  return e.typeaheadBuffer.length === 1 ? o = bc(r, l, s, e) : o = Ic(r, s, e), o !== -1 && !a && i(o), o;
}
function bc(n, e, t, i) {
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
function Ic(n, e, t) {
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
function ra(n) {
  return n.typeaheadBuffer.length > 0;
}
function la(n) {
  n.typeaheadBuffer = "";
}
function Il(n, e) {
  var t = n.event, i = n.isTargetListItem, r = n.focusedItemIndex, l = n.focusItemAtIndex, a = n.sortedIndexByFirstChar, s = n.isItemAtIndexDisabled, o = pt(t) === "ArrowLeft", u = pt(t) === "ArrowUp", c = pt(t) === "ArrowRight", d = pt(t) === "ArrowDown", f = pt(t) === "Home", h = pt(t) === "End", g = pt(t) === "Enter", _ = pt(t) === "Spacebar";
  if (t.altKey || t.ctrlKey || t.metaKey || o || u || c || d || f || h || g)
    return -1;
  var m = !_ && t.key.length === 1;
  if (m) {
    Bt(t);
    var C = {
      focusItemAtIndex: l,
      focusedItemIndex: r,
      nextChar: t.key.toLowerCase(),
      sortedIndexByFirstChar: a,
      skipFocus: !1,
      isItemAtIndexDisabled: s
    };
    return or(C, e);
  }
  if (!_)
    return -1;
  i && Bt(t);
  var I = i && ra(e);
  if (I) {
    var C = {
      focusItemAtIndex: l,
      focusedItemIndex: r,
      nextChar: " ",
      sortedIndexByFirstChar: a,
      skipFocus: !1,
      isItemAtIndexDisabled: s
    };
    return or(C, e);
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
function vc(n) {
  return n instanceof Array;
}
var Cc = ["Alt", "Control", "Meta", "Shift"];
function vl(n) {
  var e = new Set(n ? Cc.filter(function(t) {
    return n.getModifierState(t);
  }) : []);
  return function(t) {
    return t.every(function(i) {
      return e.has(i);
    }) && t.length === e.size;
  };
}
var Ac = (
  /** @class */
  function(n) {
    ct(e, n);
    function e(t) {
      var i = n.call(this, We(We({}, e.defaultAdapter), t)) || this;
      return i.wrapFocus = !1, i.isVertical = !0, i.isSingleSelectionList = !1, i.areDisabledItemsFocusable = !0, i.selectedIndex = bt.UNSET_INDEX, i.focusedItemIndex = bt.UNSET_INDEX, i.useActivatedClass = !1, i.useSelectedAttr = !1, i.ariaCurrentAttrValue = null, i.isCheckboxList = !1, i.isRadioList = !1, i.lastSelectedIndex = null, i.hasTypeahead = !1, i.typeaheadState = gc(), i.sortedIndexByFirstChar = /* @__PURE__ */ new Map(), i;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return on;
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
      return this.hasTypeahead && ra(this.typeaheadState);
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
      var l = this, a, s = pt(t) === "ArrowLeft", o = pt(t) === "ArrowUp", u = pt(t) === "ArrowRight", c = pt(t) === "ArrowDown", d = pt(t) === "Home", f = pt(t) === "End", h = pt(t) === "Enter", g = pt(t) === "Spacebar", _ = this.isVertical && c || !this.isVertical && u, m = this.isVertical && o || !this.isVertical && s, C = t.key === "A" || t.key === "a", I = vl(t);
      if (this.adapter.isRootFocused()) {
        if ((m || f) && I([]))
          t.preventDefault(), this.focusLastElement();
        else if ((_ || d) && I([]))
          t.preventDefault(), this.focusFirstElement();
        else if (m && I(["Shift"]) && this.isCheckboxList) {
          t.preventDefault();
          var O = this.focusLastElement();
          O !== -1 && this.setSelectedIndexOnAction(O, !1);
        } else if (_ && I(["Shift"]) && this.isCheckboxList) {
          t.preventDefault();
          var O = this.focusFirstElement();
          O !== -1 && this.setSelectedIndexOnAction(O, !1);
        }
        if (this.hasTypeahead) {
          var E = {
            event: t,
            focusItemAtIndex: function(p) {
              l.focusItemAtIndex(p);
            },
            focusedItemIndex: -1,
            isTargetListItem: i,
            sortedIndexByFirstChar: this.sortedIndexByFirstChar,
            isItemAtIndexDisabled: function(p) {
              return l.isIndexDisabled(p);
            }
          };
          Il(E, this.typeaheadState);
        }
        return;
      }
      var L = this.adapter.getFocusedElementIndex();
      if (!(L === -1 && (L = r, L < 0))) {
        if (_ && I([]))
          Bt(t), this.focusNextElement(L);
        else if (m && I([]))
          Bt(t), this.focusPrevElement(L);
        else if (_ && I(["Shift"]) && this.isCheckboxList) {
          Bt(t);
          var O = this.focusNextElement(L);
          O !== -1 && this.setSelectedIndexOnAction(O, !1);
        } else if (m && I(["Shift"]) && this.isCheckboxList) {
          Bt(t);
          var O = this.focusPrevElement(L);
          O !== -1 && this.setSelectedIndexOnAction(O, !1);
        } else if (d && I([]))
          Bt(t), this.focusFirstElement();
        else if (f && I([]))
          Bt(t), this.focusLastElement();
        else if (d && I(["Control", "Shift"]) && this.isCheckboxList) {
          if (Bt(t), this.isIndexDisabled(L))
            return;
          this.focusFirstElement(), this.toggleCheckboxRange(0, L, L);
        } else if (f && I(["Control", "Shift"]) && this.isCheckboxList) {
          if (Bt(t), this.isIndexDisabled(L))
            return;
          this.focusLastElement(), this.toggleCheckboxRange(L, this.adapter.getListItemCount() - 1, L);
        } else if (C && I(["Control"]) && this.isCheckboxList)
          t.preventDefault(), this.checkboxListToggleAll(this.selectedIndex === bt.UNSET_INDEX ? [] : this.selectedIndex, !0);
        else if ((h || g) && I([])) {
          if (i) {
            var k = t.target;
            if (k && k.tagName === "A" && h || (Bt(t), this.isIndexDisabled(L)))
              return;
            this.isTypeaheadInProgress() || (this.isSelectableList() && this.setSelectedIndexOnAction(L, !1), this.adapter.notifyAction(L));
          }
        } else if ((h || g) && I(["Shift"]) && this.isCheckboxList) {
          var k = t.target;
          if (k && k.tagName === "A" && h || (Bt(t), this.isIndexDisabled(L)))
            return;
          this.isTypeaheadInProgress() || (this.toggleCheckboxRange((a = this.lastSelectedIndex) !== null && a !== void 0 ? a : L, L, L), this.adapter.notifyAction(L));
        }
        if (this.hasTypeahead) {
          var E = {
            event: t,
            focusItemAtIndex: function(y) {
              l.focusItemAtIndex(y);
            },
            focusedItemIndex: this.focusedItemIndex,
            isTargetListItem: i,
            sortedIndexByFirstChar: this.sortedIndexByFirstChar,
            isItemAtIndexDisabled: function(y) {
              return l.isIndexDisabled(y);
            }
          };
          Il(E, this.typeaheadState);
        }
      }
    }, e.prototype.handleClick = function(t, i, r) {
      var l, a = vl(r);
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
      this.isIndexValid(t, !1) && (i ? (this.adapter.removeClassForElementIndex(t, xe.LIST_ITEM_DISABLED_CLASS), this.adapter.setAttributeForElementIndex(t, on.ARIA_DISABLED, "false")) : (this.adapter.addClassForElementIndex(t, xe.LIST_ITEM_DISABLED_CLASS), this.adapter.setAttributeForElementIndex(t, on.ARIA_DISABLED, "true")));
    }, e.prototype.setSingleSelectionAtIndex = function(t, i) {
      if (i === void 0 && (i = {}), !(this.selectedIndex === t && !i.forceUpdate)) {
        var r = xe.LIST_ITEM_SELECTED_CLASS;
        this.useActivatedClass && (r = xe.LIST_ITEM_ACTIVATED_CLASS), this.selectedIndex !== bt.UNSET_INDEX && this.adapter.removeClassForElementIndex(this.selectedIndex, r), this.setAriaForSingleSelectionAtIndex(t), this.setTabindexAtIndex(t), t !== bt.UNSET_INDEX && this.adapter.addClassForElementIndex(t, r), this.selectedIndex = t, i.isUserInteraction && !i.forceUpdate && this.adapter.notifySelectionChange([t]);
      }
    }, e.prototype.setAriaForSingleSelectionAtIndex = function(t) {
      this.selectedIndex === bt.UNSET_INDEX && (this.ariaCurrentAttrValue = this.adapter.getAttributeForElementIndex(t, on.ARIA_CURRENT));
      var i = this.ariaCurrentAttrValue !== null, r = i ? on.ARIA_CURRENT : on.ARIA_SELECTED;
      if (this.selectedIndex !== bt.UNSET_INDEX && this.adapter.setAttributeForElementIndex(this.selectedIndex, r, "false"), t !== bt.UNSET_INDEX) {
        var l = i ? this.ariaCurrentAttrValue : "true";
        this.adapter.setAttributeForElementIndex(t, r, l);
      }
    }, e.prototype.getSelectionAttribute = function() {
      return this.useSelectedAttr ? on.ARIA_SELECTED : on.ARIA_CHECKED;
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
      for (var l = new Set(this.selectedIndex === bt.UNSET_INDEX ? [] : this.selectedIndex), a = !(l != null && l.has(r)), s = Hn([t, i].sort(), 2), o = s[0], u = s[1], c = this.getSelectionAttribute(), d = [], f = o; f <= u; f++)
        if (!this.isIndexDisabled(f)) {
          var h = l.has(f);
          a !== h && (d.push(f), this.adapter.setCheckedCheckboxOrRadioAtIndex(f, a), this.adapter.setAttributeForElementIndex(f, c, "" + a), a ? l.add(f) : l.delete(f));
        }
      d.length && (this.selectedIndex = xn([], Hn(l)), this.adapter.notifySelectionChange(d));
    }, e.prototype.setTabindexAtIndex = function(t) {
      this.focusedItemIndex === bt.UNSET_INDEX && t !== 0 ? this.adapter.setAttributeForElementIndex(0, "tabindex", "-1") : this.focusedItemIndex >= 0 && this.focusedItemIndex !== t && this.adapter.setAttributeForElementIndex(this.focusedItemIndex, "tabindex", "-1"), !(this.selectedIndex instanceof Array) && this.selectedIndex !== t && this.adapter.setAttributeForElementIndex(this.selectedIndex, "tabindex", "-1"), t !== bt.UNSET_INDEX && this.adapter.setAttributeForElementIndex(t, "tabindex", "0");
    }, e.prototype.isSelectableList = function() {
      return this.isSingleSelectionList || this.isCheckboxList || this.isRadioList;
    }, e.prototype.setTabindexToFirstSelectedOrFocusedItem = function() {
      var t = this.getFirstSelectedOrFocusedItemIndex();
      this.setTabindexAtIndex(t);
    }, e.prototype.getFirstSelectedOrFocusedItemIndex = function() {
      return this.isSelectableList() ? typeof this.selectedIndex == "number" && this.selectedIndex !== bt.UNSET_INDEX ? this.selectedIndex : vc(this.selectedIndex) && this.selectedIndex.length > 0 ? this.selectedIndex.reduce(function(t, i) {
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
      return or(a, this.typeaheadState);
    }, e.prototype.typeaheadInitSortedIndex = function() {
      return _c(this.adapter.getListItemCount(), this.adapter.getPrimaryTextAtIndex);
    }, e.prototype.clearTypeaheadBuffer = function() {
      la(this.typeaheadState);
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
var sa = (
  /** @class */
  function(n) {
    ct(e, n);
    function e(t) {
      var i = n.call(this, We(We({}, e.defaultAdapter), t)) || this;
      return i.isSurfaceOpen = !1, i.isQuickOpen = !1, i.isHoistedElement = !1, i.isFixedPosition = !1, i.isHorizontallyCenteredOnViewport = !1, i.maxHeight = 0, i.openBottomBias = 0, i.openAnimationEndTimerId = 0, i.closeAnimationEndTimerId = 0, i.animationRequestId = 0, i.anchorCorner = In.TOP_START, i.originCorner = In.TOP_START, i.anchorMargin = { top: 0, right: 0, bottom: 0, left: 0 }, i.position = { x: 0, y: 0 }, i;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return hc;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return mc;
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
        return In;
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
      var f = this.adapter.isRtl(), h = this.hasBit(this.anchorCorner, vt.FLIP_RTL), g = this.hasBit(this.anchorCorner, vt.RIGHT) || this.hasBit(t, vt.RIGHT), _ = !1;
      f && h ? _ = !g : _ = g;
      var m, C;
      _ ? (m = r.left + l.width + this.anchorMargin.right, C = r.right - this.anchorMargin.right) : (m = r.left + this.anchorMargin.left, C = r.right + l.width - this.anchorMargin.left);
      var I = m - a.width > 0, O = C - a.width > 0, E = this.hasBit(t, vt.FLIP_RTL) && this.hasBit(t, vt.RIGHT);
      return O && E && f || !I && E ? t = this.unsetBit(t, vt.RIGHT) : (I && _ && f || I && !_ && g || !O && m >= C) && (t = this.setBit(t, vt.RIGHT)), t;
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
        for (var d = yt(c), f = d.next(); !f.done; f = d.next()) {
          var h = f.value, g = t[h] || 0;
          if (this.isHorizontallyCenteredOnViewport && (h === "left" || h === "right")) {
            t[h] = (u.width - o.width) / 2;
            continue;
          }
          g += s[h], this.isFixedPosition || (h === "top" ? g += a.y : h === "bottom" ? g -= a.y : h === "left" ? g += a.x : g -= a.x), t[h] = g;
        }
      } catch (_) {
        i = { error: _ };
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
var Cl = {
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
function Ec(n) {
  return !!n.document && typeof n.document.createElement == "function";
}
function yc(n, e) {
  if (Ec(n) && e in Cl) {
    var t = n.document.createElement("div"), i = Cl[e], r = i.standard, l = i.prefixed, a = r in t.style;
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
var wn = {
  MENU_SELECTED_LIST_ITEM: "mdc-menu-item--selected",
  MENU_SELECTION_GROUP: "mdc-menu__selection-group",
  ROOT: "mdc-menu"
}, Rn = {
  ARIA_CHECKED_ATTR: "aria-checked",
  ARIA_DISABLED_ATTR: "aria-disabled",
  CHECKBOX_SELECTOR: 'input[type="checkbox"]',
  LIST_SELECTOR: ".mdc-list,.mdc-deprecated-list",
  SELECTED_EVENT: "MDCMenu:selected",
  SKIP_RESTORE_FOCUS: "data-menu-item-skip-restore-focus"
}, Sc = {
  FOCUS_ROOT_INDEX: -1
}, Dn;
(function(n) {
  n[n.NONE = 0] = "NONE", n[n.LIST_ROOT = 1] = "LIST_ROOT", n[n.FIRST_ITEM = 2] = "FIRST_ITEM", n[n.LAST_ITEM = 3] = "LAST_ITEM";
})(Dn || (Dn = {}));
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
var Tc = (
  /** @class */
  function(n) {
    ct(e, n);
    function e(t) {
      var i = n.call(this, We(We({}, e.defaultAdapter), t)) || this;
      return i.closeAnimationEndTimerId = 0, i.defaultFocusState = Dn.LIST_ROOT, i.selectedIndex = -1, i;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return wn;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Rn;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return Sc;
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
        var l = this.adapter.getAttributeFromElementAtIndex(r, Rn.SKIP_RESTORE_FOCUS) === "true";
        this.adapter.closeSurface(l), this.closeAnimationEndTimerId = setTimeout(function() {
          var a = i.adapter.getElementIndex(t);
          a >= 0 && i.adapter.isSelectableItemAtIndex(a) && i.setSelectedIndex(a);
        }, sa.numbers.TRANSITION_CLOSE_DURATION);
      }
    }, e.prototype.handleMenuSurfaceOpened = function() {
      switch (this.defaultFocusState) {
        case Dn.FIRST_ITEM:
          this.adapter.focusItemAtIndex(0);
          break;
        case Dn.LAST_ITEM:
          this.adapter.focusItemAtIndex(this.adapter.getMenuItemCount() - 1);
          break;
        case Dn.NONE:
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
      i >= 0 && (this.adapter.removeAttributeFromElementAtIndex(i, Rn.ARIA_CHECKED_ATTR), this.adapter.removeClassFromElementAtIndex(i, wn.MENU_SELECTED_LIST_ITEM)), this.adapter.addClassToElementAtIndex(t, wn.MENU_SELECTED_LIST_ITEM), this.adapter.addAttributeToElementAtIndex(t, Rn.ARIA_CHECKED_ATTR, "true"), this.selectedIndex = t;
    }, e.prototype.setEnabled = function(t, i) {
      this.validatedIndex(t), i ? (this.adapter.removeClassFromElementAtIndex(t, xe.LIST_ITEM_DISABLED_CLASS), this.adapter.addAttributeToElementAtIndex(t, Rn.ARIA_DISABLED_ATTR, "false")) : (this.adapter.addClassToElementAtIndex(t, xe.LIST_ITEM_DISABLED_CLASS), this.adapter.addAttributeToElementAtIndex(t, Rn.ARIA_DISABLED_ATTR, "true"));
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
}, Qi = {
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
}, mn = {
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
var Lc = (
  /** @class */
  function(n) {
    ct(e, n);
    function e(t, i) {
      i === void 0 && (i = {});
      var r = n.call(this, We(We({}, e.defaultAdapter), t)) || this;
      return r.disabled = !1, r.isMenuOpen = !1, r.useDefaultValidation = !0, r.customValidity = !0, r.lastSelectedIndex = mn.UNSET_INDEX, r.clickDebounceTimeout = 0, r.recentlyClicked = !1, r.leadingIcon = i.leadingIcon, r.helperText = i.helperText, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return ht;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return mn;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Qi;
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
      i === void 0 && (i = !1), r === void 0 && (r = !1), !(t >= this.adapter.getMenuItemCount()) && (t === mn.UNSET_INDEX ? this.adapter.setSelectedText("") : this.adapter.setSelectedText(this.adapter.getMenuItemTextAtIndex(t).trim()), this.adapter.setSelectedIndex(t), i && this.adapter.closeMenu(), !r && this.lastSelectedIndex !== t && this.handleChange(), this.lastSelectedIndex = t);
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
      return t !== mn.UNSET_INDEX ? i[t] : "";
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
        var i = pt(t) === we.ENTER, r = pt(t) === we.SPACEBAR, l = pt(t) === we.ARROW_UP, a = pt(t) === we.ARROW_DOWN, s = t.ctrlKey || t.metaKey;
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
          var r = mn.LABEL_SCALE, l = this.adapter.getLabelWidth() * r;
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
      return this.useDefaultValidation && this.adapter.hasClass(ht.REQUIRED) && !this.adapter.hasClass(ht.DISABLED) ? this.getSelectedIndex() !== mn.UNSET_INDEX && (this.getSelectedIndex() !== 0 || !!this.getValue()) : this.customValidity;
    }, e.prototype.setRequired = function(t) {
      t ? this.adapter.addClass(ht.REQUIRED) : this.adapter.removeClass(ht.REQUIRED), this.adapter.setSelectAnchorAttr("aria-required", t.toString()), this.adapter.setLabelRequired(t);
    }, e.prototype.getRequired = function() {
      return this.adapter.getSelectAnchorAttr("aria-required") === "true";
    }, e.prototype.init = function() {
      var t = this.adapter.getAnchorElement();
      t && (this.adapter.setMenuAnchorElement(t), this.adapter.setMenuAnchorCorner(In.BOTTOM_START)), this.adapter.setMenuWrapFocus(!1), this.setDisabled(this.adapter.hasClass(ht.DISABLED)), this.syncHelperTextValidity(!this.adapter.hasClass(ht.INVALID)), this.layout(), this.layoutOptions();
    }, e.prototype.blur = function() {
      this.adapter.removeClass(ht.FOCUSED), this.layout(), this.adapter.deactivateBottomLine();
      var t = this.adapter.hasClass(ht.REQUIRED);
      t && this.useDefaultValidation && this.setValid(this.isValid());
    }, e.prototype.syncHelperTextValidity = function(t) {
      if (this.helperText) {
        this.helperText.setValidity(t);
        var i = this.helperText.isVisible(), r = this.helperText.getId();
        i && r ? this.adapter.setSelectAnchorAttr(Qi.ARIA_DESCRIBEDBY, r) : this.adapter.removeSelectAnchorAttr(Qi.ARIA_DESCRIBEDBY);
      }
    }, e.prototype.setClickDebounceTimeout = function() {
      var t = this;
      clearTimeout(this.clickDebounceTimeout), this.clickDebounceTimeout = setTimeout(function() {
        t.recentlyClicked = !1;
      }, mn.CLICK_DEBOUNCE_TIMEOUT_MS), this.recentlyClicked = !0;
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
var pn = {
  ARIA_HIDDEN: "aria-hidden",
  ROLE: "role"
}, $t = {
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
var Oc = (
  /** @class */
  function(n) {
    ct(e, n);
    function e(t) {
      return n.call(this, We(We({}, e.defaultAdapter), t)) || this;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return $t;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return pn;
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
      return this.adapter.getAttr(pn.ARIA_HIDDEN) !== "true";
    }, e.prototype.setContent = function(t) {
      this.adapter.setContent(t);
    }, e.prototype.setValidation = function(t) {
      t ? this.adapter.addClass($t.HELPER_TEXT_VALIDATION_MSG) : this.adapter.removeClass($t.HELPER_TEXT_VALIDATION_MSG);
    }, e.prototype.setValidationMsgPersistent = function(t) {
      t ? this.adapter.addClass($t.HELPER_TEXT_VALIDATION_MSG_PERSISTENT) : this.adapter.removeClass($t.HELPER_TEXT_VALIDATION_MSG_PERSISTENT);
    }, e.prototype.getIsValidation = function() {
      return this.adapter.hasClass($t.HELPER_TEXT_VALIDATION_MSG);
    }, e.prototype.getIsValidationMsgPersistent = function() {
      return this.adapter.hasClass($t.HELPER_TEXT_VALIDATION_MSG_PERSISTENT);
    }, e.prototype.setValidity = function(t) {
      var i = this.adapter.hasClass($t.HELPER_TEXT_VALIDATION_MSG);
      if (i) {
        var r = this.adapter.hasClass($t.HELPER_TEXT_VALIDATION_MSG_PERSISTENT), l = !t || r;
        if (l) {
          this.showToScreenReader(), t ? this.adapter.removeAttr(pn.ROLE) : this.adapter.setAttr(pn.ROLE, "alert");
          return;
        }
        this.adapter.removeAttr(pn.ROLE), this.hide();
      }
    }, e.prototype.showToScreenReader = function() {
      this.adapter.removeAttr(pn.ARIA_HIDDEN);
    }, e.prototype.hide = function() {
      this.adapter.setAttr(pn.ARIA_HIDDEN, "true");
    }, e;
  }(Tt)
);
const { document: Rc } = qs;
function kc(n) {
  let e, t, i, r, l, a, s, o;
  const u = (
    /*#slots*/
    n[34].default
  ), c = ge(
    u,
    n,
    /*$$scope*/
    n[33],
    null
  );
  let d = [
    {
      class: i = re({
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
      ).map(Al).concat([
        /*style*/
        n[2]
      ]).join(" ")
    },
    { role: "dialog" },
    /*$$restProps*/
    n[12]
  ], f = {};
  for (let h = 0; h < d.length; h += 1)
    f = z(f, d[h]);
  return {
    c() {
      e = ce(), t = le("div"), c && c.c(), ae(t, f);
    },
    m(h, g) {
      j(h, e, g), j(h, t, g), c && c.m(t, null), n[35](t), a = !0, s || (o = [
        oe(
          Rc.body,
          "click",
          /*handleBodyClick*/
          n[11],
          !0
        ),
        de(l = Qe.call(
          null,
          t,
          /*use*/
          n[0]
        )),
        de(
          /*forwardEvents*/
          n[10].call(null, t)
        ),
        oe(t, "keydown", function() {
          he(
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
    p(h, g) {
      n = h, c && c.p && (!a || g[1] & /*$$scope*/
      4) && be(
        c,
        u,
        n,
        /*$$scope*/
        n[33],
        a ? _e(
          u,
          /*$$scope*/
          n[33],
          g,
          null
        ) : Ie(
          /*$$scope*/
          n[33]
        ),
        null
      ), ae(t, f = fe(d, [
        (!a || g[0] & /*className, fixed, isStatic, fullWidth, internalClasses*/
        314 && i !== (i = re({
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
        (!a || g[0] & /*internalStyles, style*/
        516 && r !== (r = Object.entries(
          /*internalStyles*/
          n[9]
        ).map(Al).concat([
          /*style*/
          n[2]
        ]).join(" "))) && { style: r },
        { role: "dialog" },
        g[0] & /*$$restProps*/
        4096 && /*$$restProps*/
        n[12]
      ])), l && he(l.update) && g[0] & /*use*/
      1 && l.update.call(
        null,
        /*use*/
        n[0]
      );
    },
    i(h) {
      a || (A(c, h), a = !0);
    },
    o(h) {
      S(c, h), a = !1;
    },
    d(h) {
      h && (V(e), V(t)), c && c.d(h), n[35](null), s = !1, Ze(o);
    }
  };
}
const Al = ([n, e]) => `${n}: ${e};`;
function Dc(n, e, t) {
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
  let r = me(e, i), { $$slots: l = {}, $$scope: a } = e;
  var s, o, u;
  const c = tt(Je());
  let { use: d = [] } = e, { class: f = "" } = e, { style: h = "" } = e, { static: g = !1 } = e, { anchor: _ = !0 } = e, { fixed: m = !1 } = e, { open: C = g } = e, { managed: I = !1 } = e, { fullWidth: O = !1 } = e, { quickOpen: E = !1 } = e, { anchorElement: L = void 0 } = e, { anchorCorner: k = void 0 } = e, { anchorMargin: p = { top: 0, right: 0, bottom: 0, left: 0 } } = e, { maxHeight: y = 0 } = e, { horizontallyCenteredOnViewport: M = !1 } = e, { openBottomBias: v = 0 } = e, { neverRestoreFocus: b = !1 } = e, D, R, w = {}, q = {}, U;
  He("SMUI:list:role", "menu"), He("SMUI:list:item:role", "menuitem");
  const G = In;
  ut(() => (t(7, R = new sa({
    addClass: T,
    removeClass: Q,
    hasClass: N,
    hasAnchor: () => !!L,
    notifyClose: () => {
      I || t(13, C = g), C || pe(D, "SMUIMenuSurface:closed", void 0, void 0, !0);
    },
    notifyClosing: () => {
      I || t(13, C = g), C || pe(D, "SMUIMenuSurface:closing", void 0, void 0, !0);
    },
    notifyOpen: () => {
      I || t(13, C = !0), C && pe(D, "SMUIMenuSurface:opened", void 0, void 0, !0);
    },
    notifyOpening: () => {
      C || pe(D, "SMUIMenuSurface:opening", void 0, void 0, !0);
    },
    isElementInContainer: (W) => D.contains(W),
    isRtl: () => getComputedStyle(D).getPropertyValue("direction") === "rtl",
    setTransformOrigin: (W) => {
      t(9, q["transform-origin"] = W, q);
    },
    isFocused: () => document.activeElement === D,
    saveFocus: () => {
      var W;
      U = (W = document.activeElement) !== null && W !== void 0 ? W : void 0;
    },
    restoreFocus: () => {
      !b && (!D || D.contains(document.activeElement)) && U && document.contains(U) && "focus" in U && U.focus();
    },
    getInnerDimensions: () => ({
      width: D.offsetWidth,
      height: D.offsetHeight
    }),
    getAnchorDimensions: () => L ? L.getBoundingClientRect() : null,
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
      t(9, q.left = "left" in W ? `${W.left}px` : "", q), t(9, q.right = "right" in W ? `${W.right}px` : "", q), t(9, q.top = "top" in W ? `${W.top}px` : "", q), t(9, q.bottom = "bottom" in W ? `${W.bottom}px` : "", q);
    },
    setMaxHeight: (W) => {
      t(9, q["max-height"] = W, q);
    }
  })), pe(D, "SMUIMenuSurface:mount", {
    get open() {
      return C;
    },
    set open(W) {
      t(13, C = W);
    },
    closeProgrammatic: Re
  }), R.init(), () => {
    var W;
    const Ye = R.isHoistedElement;
    R.destroy(), Ye && ((W = D.parentNode) === null || W === void 0 || W.removeChild(D));
  })), Wt(() => {
    var ie;
    _ && D && ((ie = D.parentElement) === null || ie === void 0 || ie.classList.remove("mdc-menu-surface--anchor"));
  });
  function N(ie) {
    return ie in w ? w[ie] : Te().classList.contains(ie);
  }
  function T(ie) {
    w[ie] || t(8, w[ie] = !0, w);
  }
  function Q(ie) {
    (!(ie in w) || w[ie]) && t(8, w[ie] = !1, w);
  }
  function Re(ie) {
    R.close(ie), t(13, C = !1);
  }
  function Fe(ie) {
    R && C && !I && R.handleBodyClick(ie);
  }
  function ve() {
    return C;
  }
  function ze(ie) {
    t(13, C = ie);
  }
  function K(ie, W) {
    return R.setAbsolutePosition(ie, W);
  }
  function J(ie) {
    return R.setIsHoisted(ie);
  }
  function Ce() {
    return R.isFixed();
  }
  function Te() {
    return D;
  }
  function Ne(ie) {
    se[ie ? "unshift" : "push"](() => {
      D = ie, t(6, D);
    });
  }
  return n.$$set = (ie) => {
    e = z(z({}, e), et(ie)), t(12, r = me(e, i)), "use" in ie && t(0, d = ie.use), "class" in ie && t(1, f = ie.class), "style" in ie && t(2, h = ie.style), "static" in ie && t(3, g = ie.static), "anchor" in ie && t(15, _ = ie.anchor), "fixed" in ie && t(4, m = ie.fixed), "open" in ie && t(13, C = ie.open), "managed" in ie && t(16, I = ie.managed), "fullWidth" in ie && t(5, O = ie.fullWidth), "quickOpen" in ie && t(17, E = ie.quickOpen), "anchorElement" in ie && t(14, L = ie.anchorElement), "anchorCorner" in ie && t(18, k = ie.anchorCorner), "anchorMargin" in ie && t(19, p = ie.anchorMargin), "maxHeight" in ie && t(20, y = ie.maxHeight), "horizontallyCenteredOnViewport" in ie && t(21, M = ie.horizontallyCenteredOnViewport), "openBottomBias" in ie && t(22, v = ie.openBottomBias), "neverRestoreFocus" in ie && t(23, b = ie.neverRestoreFocus), "$$scope" in ie && t(33, a = ie.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty[0] & /*element, anchor, _a*/
    1073774656 | n.$$.dirty[1] & /*_b, _c*/
    3 && D && _ && !(!(t(30, s = D.parentElement) === null || s === void 0) && s.classList.contains("mdc-menu-surface--anchor")) && (t(31, o = D.parentElement) === null || o === void 0 || o.classList.add("mdc-menu-surface--anchor"), t(14, L = t(32, u = D.parentElement) !== null && u !== void 0 ? u : void 0)), n.$$.dirty[0] & /*instance, open*/
    8320 && R && R.isOpen() !== C && (C ? R.open() : R.close()), n.$$.dirty[0] & /*instance, quickOpen*/
    131200 && R && R.setQuickOpen(E), n.$$.dirty[0] & /*instance, fixed*/
    144 && R && R.setFixedPosition(m), n.$$.dirty[0] & /*instance, maxHeight*/
    1048704 && R && R.setMaxHeight(y), n.$$.dirty[0] & /*instance, horizontallyCenteredOnViewport*/
    2097280 && R && R.setIsHorizontallyCenteredOnViewport(M), n.$$.dirty[0] & /*instance, anchorCorner*/
    262272 && R && k != null && (typeof k == "string" ? R.setAnchorCorner(G[k]) : R.setAnchorCorner(k)), n.$$.dirty[0] & /*instance, anchorMargin*/
    524416 && R && R.setAnchorMargin(p), n.$$.dirty[0] & /*instance, openBottomBias*/
    4194432 && R && R.setOpenBottomBias(v);
  }, [
    d,
    f,
    h,
    g,
    m,
    O,
    D,
    R,
    w,
    q,
    c,
    Fe,
    r,
    C,
    L,
    _,
    I,
    E,
    k,
    p,
    y,
    M,
    v,
    b,
    ve,
    ze,
    K,
    J,
    Ce,
    Te,
    s,
    o,
    u,
    a,
    l,
    Ne
  ];
}
class Mc extends Me {
  constructor(e) {
    super(), De(
      this,
      e,
      Dc,
      kc,
      ye,
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
function Fc(n, { addClass: e = (i) => n.classList.add(i), removeClass: t = (i) => n.classList.remove(i) } = {}) {
  return e("mdc-menu-surface--anchor"), {
    destroy() {
      t("mdc-menu-surface--anchor");
    }
  };
}
function Nc(n) {
  let e;
  const t = (
    /*#slots*/
    n[17].default
  ), i = ge(
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
      4194304) && be(
        i,
        t,
        r,
        /*$$scope*/
        r[22],
        e ? _e(
          t,
          /*$$scope*/
          r[22],
          l,
          null
        ) : Ie(
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
      S(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function Uc(n) {
  let e, t, i;
  const r = [
    { use: (
      /*usePass*/
      n[5]
    ) },
    {
      class: re({
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
    $$slots: { default: [Nc] },
    $$scope: { ctx: n }
  };
  for (let s = 0; s < r.length; s += 1)
    a = z(a, r[s]);
  return (
    /*open*/
    n[0] !== void 0 && (a.open = /*open*/
    n[0]), e = new Mc({ props: a }), n[18](e), se.push(() => _t(e, "open", l)), e.$on(
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
        te(e.$$.fragment);
      },
      m(s, o) {
        $(e, s, o), i = !0;
      },
      p(s, [o]) {
        const u = o & /*usePass, className, $$restProps*/
        546 ? fe(r, [
          o & /*usePass*/
          32 && { use: (
            /*usePass*/
            s[5]
          ) },
          o & /*className*/
          2 && {
            class: re({
              [
                /*className*/
                s[1]
              ]: !0,
              "mdc-menu": !0
            })
          },
          o & /*$$restProps*/
          512 && Oe(
            /*$$restProps*/
            s[9]
          )
        ]) : {};
        o & /*$$scope*/
        4194304 && (u.$$scope = { dirty: o, ctx: s }), !t && o & /*open*/
        1 && (t = !0, u.open = /*open*/
        s[0], gt(() => t = !1)), e.$set(u);
      },
      i(s) {
        i || (A(e.$$.fragment, s), i = !0);
      },
      o(s) {
        S(e.$$.fragment, s), i = !1;
      },
      d(s) {
        n[18](null), ee(e, s);
      }
    }
  );
}
function wc(n, e, t) {
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
  let l = me(e, r), { $$slots: a = {}, $$scope: s } = e;
  const { closest: o } = $n, u = tt(Je());
  let { use: c = [] } = e, { class: d = "" } = e, { open: f = !1 } = e, h, g, _, m;
  ut(() => (t(3, g = new Tc({
    addClassToElementAtIndex: (w, q) => {
      m.addClassForElementIndex(w, q);
    },
    removeClassFromElementAtIndex: (w, q) => {
      m.removeClassForElementIndex(w, q);
    },
    addAttributeToElementAtIndex: (w, q, U) => {
      m.setAttributeForElementIndex(w, q, U);
    },
    removeAttributeFromElementAtIndex: (w, q) => {
      m.removeAttributeForElementIndex(w, q);
    },
    getAttributeFromElementAtIndex: (w, q) => m.getAttributeFromElementIndex(w, q),
    elementContainsClass: (w, q) => w.classList.contains(q),
    closeSurface: (w) => {
      _.closeProgrammatic(w), pe(M(), "SMUIMenu:closedProgrammatically");
    },
    getElementIndex: (w) => m.getOrderedList().map((q) => q.element).indexOf(w),
    notifySelected: (w) => pe(
      M(),
      "SMUIMenu:selected",
      {
        index: w.index,
        item: m.getOrderedList()[w.index].element
      },
      void 0,
      !0
    ),
    getMenuItemCount: () => m.items.length,
    focusItemAtIndex: (w) => m.focusItemAtIndex(w),
    focusListRoot: () => "focus" in m.element && m.element.focus(),
    isSelectableItemAtIndex: (w) => !!o(m.getOrderedList()[w].element, `.${wn.MENU_SELECTION_GROUP}`),
    getSelectedSiblingOfItemAtIndex: (w) => {
      const q = m.getOrderedList(), U = o(q[w].element, `.${wn.MENU_SELECTION_GROUP}`), G = U == null ? void 0 : U.querySelector(`.${wn.MENU_SELECTED_LIST_ITEM}`);
      return G ? q.map((N) => N.element).indexOf(G) : -1;
    }
  })), pe(M(), "SMUIMenu:mount", g), g.init(), () => {
    g.destroy();
  }));
  function C(w) {
    g && g.handleKeydown(w);
  }
  function I(w) {
    _ || (_ = w.detail);
  }
  function O(w) {
    m || t(4, m = w.detail);
  }
  function E() {
    return f;
  }
  function L(w) {
    t(0, f = w);
  }
  function k(w) {
    g.setDefaultFocusState(w);
  }
  function p() {
    return g.getSelectedIndex();
  }
  function y() {
    return h;
  }
  function M() {
    return h.getElement();
  }
  function v(w) {
    se[w ? "unshift" : "push"](() => {
      h = w, t(2, h);
    });
  }
  function b(w) {
    f = w, t(0, f);
  }
  const D = () => g && g.handleMenuSurfaceOpened(), R = (w) => g && g.handleItemAction(m.getOrderedList()[w.detail.index].element);
  return n.$$set = (w) => {
    e = z(z({}, e), et(w)), t(9, l = me(e, r)), "use" in w && t(10, c = w.use), "class" in w && t(1, d = w.class), "open" in w && t(0, f = w.open), "$$scope" in w && t(22, s = w.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty & /*use*/
    1024 && t(5, i = [u, ...c]);
  }, [
    f,
    d,
    h,
    g,
    m,
    i,
    C,
    I,
    O,
    l,
    c,
    E,
    L,
    k,
    p,
    y,
    M,
    a,
    v,
    b,
    D,
    R,
    s
  ];
}
class Pc extends Me {
  constructor(e) {
    super(), De(this, e, wc, Uc, ye, {
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
function Hc(n) {
  let e;
  const t = (
    /*#slots*/
    n[42].default
  ), i = ge(
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
      8192) && be(
        i,
        t,
        r,
        /*$$scope*/
        r[44],
        e ? _e(
          t,
          /*$$scope*/
          r[44],
          l,
          null
        ) : Ie(
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
      S(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function Bc(n) {
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
      class: re({
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
      $$slots: { default: [Hc] },
      $$scope: { ctx: s }
    };
    for (let c = 0; c < r.length; c += 1)
      u = z(u, r[c]);
    return o !== void 0 && o[0] & /*tag, forwardEvents, use, className, nonInteractive, dense, textualList, avatarList, selectionDialog, iconList, imageList, thumbnailList, videoList, twoLine, threeLine, role, $$restProps*/
    33796095 && (u = z(u, fe(r, [
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
        class: re({
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
      33554432 && Oe(
        /*$$restProps*/
        s[25]
      )
    ]))), { props: u };
  }
  return l && (e = kt(l, a(n)), n[43](e), e.$on(
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
      e && te(e.$$.fragment), t = Xe();
    },
    m(s, o) {
      e && $(e, s, o), j(s, t, o), i = !0;
    },
    p(s, o) {
      if (o[0] & /*component*/
      4096 && l !== (l = /*component*/
      s[12])) {
        if (e) {
          Ve();
          const u = e;
          S(u.$$.fragment, 1, 0, () => {
            ee(u, 1);
          }), je();
        }
        l ? (e = kt(l, a(s, o)), s[43](e), e.$on(
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
        ), te(e.$$.fragment), A(e.$$.fragment, 1), $(e, t.parentNode, t)) : e = null;
      } else if (l) {
        const u = o[0] & /*tag, forwardEvents, use, className, nonInteractive, dense, textualList, avatarList, selectionDialog, iconList, imageList, thumbnailList, videoList, twoLine, threeLine, role, $$restProps*/
        33796095 ? fe(r, [
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
            class: re({
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
          33554432 && Oe(
            /*$$restProps*/
            s[25]
          )
        ]) : {};
        o[1] & /*$$scope*/
        8192 && (u.$$scope = { dirty: o, ctx: s }), e.$set(u);
      }
    },
    i(s) {
      i || (e && A(e.$$.fragment, s), i = !0);
    },
    o(s) {
      e && S(e.$$.fragment, s), i = !1;
    },
    d(s) {
      s && V(t), n[43](null), e && ee(e, s);
    }
  };
}
function Vc(n, e, t) {
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
  let r = me(e, i), { $$slots: l = {}, $$scope: a } = e;
  var s;
  const { closest: o, matches: u } = $n, c = tt(Je());
  let { use: d = [] } = e, { class: f = "" } = e, { nonInteractive: h = !1 } = e, { dense: g = !1 } = e, { textualList: _ = !1 } = e, { avatarList: m = !1 } = e, { iconList: C = !1 } = e, { imageList: I = !1 } = e, { thumbnailList: O = !1 } = e, { videoList: E = !1 } = e, { twoLine: L = !1 } = e, { threeLine: k = !1 } = e, { vertical: p = !0 } = e, { wrapFocus: y = (s = qe("SMUI:list:wrapFocus")) !== null && s !== void 0 ? s : !1 } = e, { singleSelection: M = !1 } = e, { disabledItemsFocusable: v = !1 } = e, { selectedIndex: b = -1 } = e, { radioList: D = !1 } = e, { checkList: R = !1 } = e, { hasTypeahead: w = !1 } = e, q, U, G = [], N = qe("SMUI:list:role"), T = qe("SMUI:list:nav");
  const Q = /* @__PURE__ */ new WeakMap();
  let Re = qe("SMUI:dialog:selection"), Fe = qe("SMUI:addLayoutListener"), ve, { component: ze = Ft } = e, { tag: K = ze === Ft ? T ? "nav" : "ul" : void 0 } = e;
  He("SMUI:list:nonInteractive", h), He("SMUI:separator:context", "list"), N || (M ? (N = "listbox", He("SMUI:list:item:role", "option")) : D ? (N = "radiogroup", He("SMUI:list:item:role", "radio")) : R ? (N = "group", He("SMUI:list:item:role", "checkbox")) : (N = "list", He("SMUI:list:item:role", void 0))), Fe && (ve = Fe(Z)), ut(() => {
    t(41, U = new Ac({
      addClassForElementIndex: Y,
      focusItemAtIndex: Le,
      getAttributeForElementIndex: (Ae, Se) => {
        var rt, Qt;
        return (Qt = (rt = Ge()[Ae]) === null || rt === void 0 ? void 0 : rt.getAttr(Se)) !== null && Qt !== void 0 ? Qt : null;
      },
      getFocusedElementIndex: () => document.activeElement ? Ge().map((Ae) => Ae.element).indexOf(document.activeElement) : -1,
      getListItemCount: () => G.length,
      getPrimaryTextAtIndex: F,
      hasCheckboxAtIndex: (Ae) => {
        var Se, rt;
        return (rt = (Se = Ge()[Ae]) === null || Se === void 0 ? void 0 : Se.hasCheckbox) !== null && rt !== void 0 ? rt : !1;
      },
      hasRadioAtIndex: (Ae) => {
        var Se, rt;
        return (rt = (Se = Ge()[Ae]) === null || Se === void 0 ? void 0 : Se.hasRadio) !== null && rt !== void 0 ? rt : !1;
      },
      isCheckboxCheckedAtIndex: (Ae) => {
        var Se;
        const rt = Ge()[Ae];
        return (Se = (rt == null ? void 0 : rt.hasCheckbox) && rt.checked) !== null && Se !== void 0 ? Se : !1;
      },
      isFocusInsideList: () => q != null && ue() !== document.activeElement && ue().contains(document.activeElement),
      isRootFocused: () => q != null && document.activeElement === ue(),
      listItemAtIndexHasClass: ft,
      notifyAction: (Ae) => {
        t(26, b = Ae), q != null && pe(ue(), "SMUIList:action", { index: Ae }, void 0, !0);
      },
      notifySelectionChange: (Ae) => {
        q != null && pe(ue(), "SMUIList:selectionChange", { changedIndices: Ae });
      },
      removeClassForElementIndex: Ee,
      setAttributeForElementIndex: Ke,
      setCheckedCheckboxOrRadioAtIndex: (Ae, Se) => {
        Ge()[Ae].checked = Se;
      },
      setTabIndexForListItemChildren: (Ae, Se) => {
        const rt = Ge()[Ae];
        Array.prototype.forEach.call(rt.element.querySelectorAll("button:not(:disabled), a"), (Vn) => {
          Vn.setAttribute("tabindex", Se);
        });
      }
    }));
    const X = {
      get element() {
        return ue();
      },
      get items() {
        return G;
      },
      get typeaheadInProgress() {
        return U.isTypeaheadInProgress();
      },
      typeaheadMatchItem(Ae, Se) {
        return U.typeaheadMatchItem(
          Ae,
          Se,
          /** skipFocus */
          !0
        );
      },
      getOrderedList: Ge,
      focusItemAtIndex: Le,
      addClassForElementIndex: Y,
      removeClassForElementIndex: Ee,
      setAttributeForElementIndex: Ke,
      removeAttributeForElementIndex: Ue,
      getAttributeFromElementIndex: Et,
      getPrimaryTextAtIndex: F
    };
    return pe(ue(), "SMUIList:mount", X), U.init(), U.layout(), () => {
      U.destroy();
    };
  }), Wt(() => {
    ve && ve();
  });
  function J(X) {
    G.push(X.detail), Q.set(X.detail.element, X.detail), M && X.detail.selected && t(26, b = x(X.detail.element)), X.stopPropagation();
  }
  function Ce(X) {
    var Ae;
    const Se = (Ae = X.detail && G.indexOf(X.detail)) !== null && Ae !== void 0 ? Ae : -1;
    Se !== -1 && (G.splice(Se, 1), G = G, Q.delete(X.detail.element)), X.stopPropagation();
  }
  function Te(X) {
    U && X.target && U.handleKeydown(X, X.target.classList.contains("mdc-deprecated-list-item"), x(X.target));
  }
  function Ne(X) {
    U && X.target && U.handleFocusIn(x(X.target));
  }
  function ie(X) {
    U && X.target && U.handleFocusOut(x(X.target));
  }
  function W(X) {
    U && X.target && U.handleClick(x(X.target), !u(X.target, 'input[type="checkbox"], input[type="radio"]'), X);
  }
  function Ye(X) {
    if (D || R) {
      const Ae = x(X.target);
      if (Ae !== -1) {
        const Se = Ge()[Ae];
        Se && (D && !Se.checked || R) && (u(X.detail.target, 'input[type="checkbox"], input[type="radio"]') || (Se.checked = !Se.checked), Se.activateRipple(), window.requestAnimationFrame(() => {
          Se.deactivateRipple();
        }));
      }
    }
  }
  function Ge() {
    return q == null ? [] : [...ue().children].map((X) => Q.get(X)).filter((X) => X && X._smui_list_item_accessor);
  }
  function ft(X, Ae) {
    var Se;
    const rt = Ge()[X];
    return (Se = rt && rt.hasClass(Ae)) !== null && Se !== void 0 ? Se : !1;
  }
  function Y(X, Ae) {
    const Se = Ge()[X];
    Se && Se.addClass(Ae);
  }
  function Ee(X, Ae) {
    const Se = Ge()[X];
    Se && Se.removeClass(Ae);
  }
  function Ke(X, Ae, Se) {
    const rt = Ge()[X];
    rt && rt.addAttr(Ae, Se);
  }
  function Ue(X, Ae) {
    const Se = Ge()[X];
    Se && Se.removeAttr(Ae);
  }
  function Et(X, Ae) {
    const Se = Ge()[X];
    return Se ? Se.getAttr(Ae) : null;
  }
  function F(X) {
    var Ae;
    const Se = Ge()[X];
    return (Ae = Se && Se.getPrimaryText()) !== null && Ae !== void 0 ? Ae : "";
  }
  function x(X) {
    const Ae = o(X, ".mdc-deprecated-list-item, .mdc-deprecated-list");
    return Ae && u(Ae, ".mdc-deprecated-list-item") ? Ge().map((Se) => Se == null ? void 0 : Se.element).indexOf(Ae) : -1;
  }
  function Z() {
    return U.layout();
  }
  function Be(X, Ae) {
    return U.setEnabled(X, Ae);
  }
  function dt() {
    return U.isTypeaheadInProgress();
  }
  function at() {
    return U.getSelectedIndex();
  }
  function $e() {
    return U.getFocusedItemIndex();
  }
  function Le(X) {
    const Ae = Ge()[X];
    Ae && "focus" in Ae.element && Ae.element.focus();
  }
  function ue() {
    return q.getElement();
  }
  function Ht(X) {
    se[X ? "unshift" : "push"](() => {
      q = X, t(14, q);
    });
  }
  return n.$$set = (X) => {
    e = z(z({}, e), et(X)), t(25, r = me(e, i)), "use" in X && t(0, d = X.use), "class" in X && t(1, f = X.class), "nonInteractive" in X && t(2, h = X.nonInteractive), "dense" in X && t(3, g = X.dense), "textualList" in X && t(4, _ = X.textualList), "avatarList" in X && t(5, m = X.avatarList), "iconList" in X && t(6, C = X.iconList), "imageList" in X && t(7, I = X.imageList), "thumbnailList" in X && t(8, O = X.thumbnailList), "videoList" in X && t(9, E = X.videoList), "twoLine" in X && t(10, L = X.twoLine), "threeLine" in X && t(11, k = X.threeLine), "vertical" in X && t(27, p = X.vertical), "wrapFocus" in X && t(28, y = X.wrapFocus), "singleSelection" in X && t(29, M = X.singleSelection), "disabledItemsFocusable" in X && t(30, v = X.disabledItemsFocusable), "selectedIndex" in X && t(26, b = X.selectedIndex), "radioList" in X && t(31, D = X.radioList), "checkList" in X && t(32, R = X.checkList), "hasTypeahead" in X && t(33, w = X.hasTypeahead), "component" in X && t(12, ze = X.component), "tag" in X && t(13, K = X.tag), "$$scope" in X && t(44, a = X.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty[0] & /*vertical*/
    134217728 | n.$$.dirty[1] & /*instance*/
    1024 && U && U.setVerticalOrientation(p), n.$$.dirty[0] & /*wrapFocus*/
    268435456 | n.$$.dirty[1] & /*instance*/
    1024 && U && U.setWrapFocus(y), n.$$.dirty[1] & /*instance, hasTypeahead*/
    1028 && U && U.setHasTypeahead(w), n.$$.dirty[0] & /*singleSelection*/
    536870912 | n.$$.dirty[1] & /*instance*/
    1024 && U && U.setSingleSelection(M), n.$$.dirty[0] & /*disabledItemsFocusable*/
    1073741824 | n.$$.dirty[1] & /*instance*/
    1024 && U && U.setDisabledItemsFocusable(v), n.$$.dirty[0] & /*singleSelection, selectedIndex*/
    603979776 | n.$$.dirty[1] & /*instance*/
    1024 && U && M && at() !== b && U.setSelectedIndex(b);
  }, [
    d,
    f,
    h,
    g,
    _,
    m,
    C,
    I,
    O,
    E,
    L,
    k,
    ze,
    K,
    q,
    N,
    c,
    Re,
    J,
    Ce,
    Te,
    Ne,
    ie,
    W,
    Ye,
    r,
    b,
    p,
    y,
    M,
    v,
    D,
    R,
    w,
    Z,
    Be,
    dt,
    at,
    $e,
    Le,
    ue,
    U,
    l,
    Ht,
    a
  ];
}
class jc extends Me {
  constructor(e) {
    super(), De(
      this,
      e,
      Vc,
      Bc,
      ye,
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
function El(n) {
  let e;
  return {
    c() {
      e = le("span"), B(e, "class", "mdc-deprecated-list-item__ripple");
    },
    m(t, i) {
      j(t, e, i);
    },
    d(t) {
      t && V(e);
    }
  };
}
function Gc(n) {
  let e, t, i = (
    /*ripple*/
    n[7] && El()
  );
  const r = (
    /*#slots*/
    n[34].default
  ), l = ge(
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
      i && i.m(a, s), j(a, e, s), l && l.m(a, s), t = !0;
    },
    p(a, s) {
      /*ripple*/
      a[7] ? i || (i = El(), i.c(), i.m(e.parentNode, e)) : i && (i.d(1), i = null), l && l.p && (!t || s[1] & /*$$scope*/
      64) && be(
        l,
        r,
        a,
        /*$$scope*/
        a[37],
        t ? _e(
          r,
          /*$$scope*/
          a[37],
          s,
          null
        ) : Ie(
          /*$$scope*/
          a[37]
        ),
        null
      );
    },
    i(a) {
      t || (A(l, a), t = !0);
    },
    o(a) {
      S(l, a), t = !1;
    },
    d(a) {
      a && V(e), i && i.d(a), l && l.d(a);
    }
  };
}
function Kc(n) {
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
            Rt,
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
      class: re({
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
      ).map(Ji).concat([
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
      $$slots: { default: [Gc] },
      $$scope: { ctx: s }
    };
    for (let c = 0; c < r.length; c += 1)
      u = z(u, r[c]);
    return o !== void 0 && o[0] & /*tag, nonInteractive, input, activated, selected, color, disabled, addClass, removeClass, addStyle, forwardEvents, use, className, wrapper, nav, role, internalClasses, internalStyles, style, skipRestoreFocus, tabindex, href, internalAttrs, $$restProps*/
    670916479 && (u = z(u, fe(r, [
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
              Rt,
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
        class: re({
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
        ).map(Ji).concat([
          /*style*/
          s[4]
        ]).join(" ")
      },
      o[0] & /*nav, activated*/
      8388610 && Oe(
        /*nav*/
        s[23] && /*activated*/
        s[1] ? { "aria-current": "page" } : {}
      ),
      o[0] & /*nav, wrapper, role*/
      8389376 && Oe(!/*nav*/
      s[23] || /*wrapper*/
      s[8] ? { role: (
        /*role*/
        s[9]
      ) } : {}),
      o[0] & /*nav, role, selected*/
      8389121 && Oe(!/*nav*/
      s[23] && /*role*/
      s[9] === "option" ? {
        "aria-selected": (
          /*selected*/
          s[0] ? "true" : "false"
        )
      } : {}),
      o[0] & /*nav, role, input*/
      8454656 && Oe(!/*nav*/
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
      8389632 && Oe(/*nav*/
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
      1048576 && Oe(
        /*internalAttrs*/
        s[20]
      ),
      o[0] & /*$$restProps*/
      536870912 && Oe(
        /*$$restProps*/
        s[29]
      )
    ]))), { props: u };
  }
  return l && (e = kt(l, a(n)), n[35](e), e.$on(
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
      e && te(e.$$.fragment), t = Xe();
    },
    m(s, o) {
      e && $(e, s, o), j(s, t, o), i = !0;
    },
    p(s, o) {
      if (o[0] & /*component*/
      8192 && l !== (l = /*component*/
      s[13])) {
        if (e) {
          Ve();
          const u = e;
          S(u.$$.fragment, 1, 0, () => {
            ee(u, 1);
          }), je();
        }
        l ? (e = kt(l, a(s, o)), s[35](e), e.$on(
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
        ), te(e.$$.fragment), A(e.$$.fragment, 1), $(e, t.parentNode, t)) : e = null;
      } else if (l) {
        const u = o[0] & /*tag, nonInteractive, input, activated, selected, color, disabled, addClass, removeClass, addStyle, forwardEvents, use, className, wrapper, nav, role, internalClasses, internalStyles, style, skipRestoreFocus, tabindex, href, internalAttrs, $$restProps*/
        670916479 ? fe(r, [
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
                  Rt,
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
            class: re({
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
            ).map(Ji).concat([
              /*style*/
              s[4]
            ]).join(" ")
          },
          o[0] & /*nav, activated*/
          8388610 && Oe(
            /*nav*/
            s[23] && /*activated*/
            s[1] ? { "aria-current": "page" } : {}
          ),
          o[0] & /*nav, wrapper, role*/
          8389376 && Oe(!/*nav*/
          s[23] || /*wrapper*/
          s[8] ? { role: (
            /*role*/
            s[9]
          ) } : {}),
          o[0] & /*nav, role, selected*/
          8389121 && Oe(!/*nav*/
          s[23] && /*role*/
          s[9] === "option" ? {
            "aria-selected": (
              /*selected*/
              s[0] ? "true" : "false"
            )
          } : {}),
          o[0] & /*nav, role, input*/
          8454656 && Oe(!/*nav*/
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
          8389632 && Oe(/*nav*/
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
          1048576 && Oe(
            /*internalAttrs*/
            s[20]
          ),
          o[0] & /*$$restProps*/
          536870912 && Oe(
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
      i || (e && A(e.$$.fragment, s), i = !0);
    },
    o(s) {
      e && S(e.$$.fragment, s), i = !1;
    },
    d(s) {
      s && V(t), n[35](null), e && ee(e, s);
    }
  };
}
let qc = 0;
const Ji = ([n, e]) => `${n}: ${e};`;
function Wc(n, e, t) {
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
  let l = me(e, r), { $$slots: a = {}, $$scope: s } = e;
  var o;
  const u = tt(Je());
  let c = () => {
  };
  function d(Y) {
    return Y === c;
  }
  let { use: f = [] } = e, { class: h = "" } = e, { style: g = "" } = e, { color: _ = void 0 } = e, { nonInteractive: m = (o = qe("SMUI:list:nonInteractive")) !== null && o !== void 0 ? o : !1 } = e;
  He("SMUI:list:nonInteractive", void 0);
  let { ripple: C = !m } = e, { wrapper: I = !1 } = e, { activated: O = !1 } = e, { role: E = I ? "presentation" : qe("SMUI:list:item:role") } = e;
  He("SMUI:list:item:role", void 0);
  let { selected: L = !1 } = e, { disabled: k = !1 } = e, { skipRestoreFocus: p = !1 } = e, { tabindex: y = c } = e, { inputId: M = "SMUI-form-field-list-" + qc++ } = e, { href: v = void 0 } = e, b, D = {}, R = {}, w = {}, q, U, G = qe("SMUI:list:item:nav"), { component: N = Ft } = e, { tag: T = N === Ft ? G ? v ? "a" : "span" : "li" : void 0 } = e;
  He("SMUI:generic:input:props", { id: M }), He("SMUI:separator:context", void 0), ut(() => {
    if (!L && !m) {
      let Ee = !0, Ke = b.getElement();
      for (; Ke.previousSibling; )
        if (Ke = Ke.previousSibling, Ke.nodeType === 1 && Ke.classList.contains("mdc-deprecated-list-item") && !Ke.classList.contains("mdc-deprecated-list-item--disabled")) {
          Ee = !1;
          break;
        }
      Ee && (U = window.requestAnimationFrame(() => Ce(Ke)));
    }
    const Y = {
      _smui_list_item_accessor: !0,
      get element() {
        return Ye();
      },
      get selected() {
        return L;
      },
      set selected(Ee) {
        t(0, L = Ee);
      },
      hasClass: Q,
      addClass: Re,
      removeClass: Fe,
      getAttr: ze,
      addAttr: K,
      removeAttr: J,
      getPrimaryText: W,
      // For inputs within item.
      get checked() {
        var Ee;
        return (Ee = q && q.checked) !== null && Ee !== void 0 ? Ee : !1;
      },
      set checked(Ee) {
        q && t(16, q.checked = !!Ee, q);
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
        return l.value;
      },
      // For autocomplete
      action: ie,
      get tabindex() {
        return i;
      },
      set tabindex(Ee) {
        t(30, y = Ee);
      },
      get disabled() {
        return k;
      },
      get activated() {
        return O;
      },
      set activated(Ee) {
        t(1, O = Ee);
      }
    };
    return pe(Ye(), "SMUIListItem:mount", Y), () => {
      pe(Ye(), "SMUIListItem:unmount", Y);
    };
  }), Wt(() => {
    U && window.cancelAnimationFrame(U);
  });
  function Q(Y) {
    return Y in D ? D[Y] : Ye().classList.contains(Y);
  }
  function Re(Y) {
    D[Y] || t(18, D[Y] = !0, D);
  }
  function Fe(Y) {
    (!(Y in D) || D[Y]) && t(18, D[Y] = !1, D);
  }
  function ve(Y, Ee) {
    R[Y] != Ee && (Ee === "" || Ee == null ? (delete R[Y], t(19, R)) : t(19, R[Y] = Ee, R));
  }
  function ze(Y) {
    var Ee;
    return Y in w ? (Ee = w[Y]) !== null && Ee !== void 0 ? Ee : null : Ye().getAttribute(Y);
  }
  function K(Y, Ee) {
    w[Y] !== Ee && t(20, w[Y] = Ee, w);
  }
  function J(Y) {
    (!(Y in w) || w[Y] != null) && t(20, w[Y] = void 0, w);
  }
  function Ce(Y) {
    let Ee = !0;
    for (; Y.nextElementSibling; )
      if (Y = Y.nextElementSibling, Y.nodeType === 1 && Y.classList.contains("mdc-deprecated-list-item")) {
        const Ke = Y.attributes.getNamedItem("tabindex");
        if (Ke && Ke.value === "0") {
          Ee = !1;
          break;
        }
      }
    Ee && t(21, i = 0);
  }
  function Te(Y) {
    const Ee = Y.key === "Enter", Ke = Y.key === "Space";
    (Ee || Ke) && ie(Y);
  }
  function Ne(Y) {
    ("_smui_checkbox_accessor" in Y.detail || "_smui_radio_accessor" in Y.detail) && t(16, q = Y.detail);
  }
  function ie(Y) {
    k || pe(Ye(), "SMUI:action", Y);
  }
  function W() {
    var Y, Ee, Ke;
    const Ue = Ye(), Et = Ue.querySelector(".mdc-deprecated-list-item__primary-text");
    if (Et)
      return (Y = Et.textContent) !== null && Y !== void 0 ? Y : "";
    const F = Ue.querySelector(".mdc-deprecated-list-item__text");
    return F ? (Ee = F.textContent) !== null && Ee !== void 0 ? Ee : "" : (Ke = Ue.textContent) !== null && Ke !== void 0 ? Ke : "";
  }
  function Ye() {
    return b.getElement();
  }
  function Ge(Y) {
    se[Y ? "unshift" : "push"](() => {
      b = Y, t(17, b);
    });
  }
  const ft = () => t(16, q = void 0);
  return n.$$set = (Y) => {
    e = z(z({}, e), et(Y)), t(29, l = me(e, r)), "use" in Y && t(2, f = Y.use), "class" in Y && t(3, h = Y.class), "style" in Y && t(4, g = Y.style), "color" in Y && t(5, _ = Y.color), "nonInteractive" in Y && t(6, m = Y.nonInteractive), "ripple" in Y && t(7, C = Y.ripple), "wrapper" in Y && t(8, I = Y.wrapper), "activated" in Y && t(1, O = Y.activated), "role" in Y && t(9, E = Y.role), "selected" in Y && t(0, L = Y.selected), "disabled" in Y && t(10, k = Y.disabled), "skipRestoreFocus" in Y && t(11, p = Y.skipRestoreFocus), "tabindex" in Y && t(30, y = Y.tabindex), "inputId" in Y && t(31, M = Y.inputId), "href" in Y && t(12, v = Y.href), "component" in Y && t(13, N = Y.component), "tag" in Y && t(14, T = Y.tag), "$$scope" in Y && t(37, s = Y.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty[0] & /*tabindexProp, nonInteractive, disabled, selected, input*/
    1073808449 && t(21, i = d(y) ? !m && !k && (L || q && q.checked) ? 0 : -1 : y);
  }, [
    L,
    O,
    f,
    h,
    g,
    _,
    m,
    C,
    I,
    E,
    k,
    p,
    v,
    N,
    T,
    ie,
    q,
    b,
    D,
    R,
    w,
    i,
    u,
    G,
    Re,
    Fe,
    ve,
    Te,
    Ne,
    l,
    y,
    M,
    W,
    Ye,
    a,
    Ge,
    ft,
    s
  ];
}
class zc extends Me {
  constructor(e) {
    super(), De(
      this,
      e,
      Wc,
      Kc,
      ye,
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
At({
  class: "mdc-deprecated-list-item__text",
  tag: "span"
});
At({
  class: "mdc-deprecated-list-item__primary-text",
  tag: "span"
});
At({
  class: "mdc-deprecated-list-item__secondary-text",
  tag: "span"
});
function Yc(n) {
  let e, t, i, r, l, a;
  const s = (
    /*#slots*/
    n[8].default
  ), o = ge(
    s,
    n,
    /*$$scope*/
    n[7],
    null
  );
  let u = [
    {
      class: t = re({
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
    c = z(c, u[d]);
  return {
    c() {
      e = le("span"), o && o.c(), ae(e, c);
    },
    m(d, f) {
      j(d, e, f), o && o.m(e, null), n[9](e), r = !0, l || (a = [
        de(i = Qe.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        de(
          /*forwardEvents*/
          n[3].call(null, e)
        )
      ], l = !0);
    },
    p(d, [f]) {
      o && o.p && (!r || f & /*$$scope*/
      128) && be(
        o,
        s,
        d,
        /*$$scope*/
        d[7],
        r ? _e(
          s,
          /*$$scope*/
          d[7],
          f,
          null
        ) : Ie(
          /*$$scope*/
          d[7]
        ),
        null
      ), ae(e, c = fe(u, [
        (!r || f & /*className*/
        2 && t !== (t = re({
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
      ])), i && he(i.update) && f & /*use*/
      1 && i.update.call(
        null,
        /*use*/
        d[0]
      );
    },
    i(d) {
      r || (A(o, d), r = !0);
    },
    o(d) {
      S(o, d), r = !1;
    },
    d(d) {
      d && V(e), o && o.d(d), n[9](null), l = !1, Ze(a);
    }
  };
}
function Xc(n, e, t) {
  const i = ["use", "class", "getElement"];
  let r = me(e, i), { $$slots: l = {}, $$scope: a } = e;
  const s = tt(Je());
  let { use: o = [] } = e, { class: u = "" } = e, c, d = qe("SMUI:list:graphic:menu-selection-group");
  function f() {
    return c;
  }
  function h(g) {
    se[g ? "unshift" : "push"](() => {
      c = g, t(2, c);
    });
  }
  return n.$$set = (g) => {
    e = z(z({}, e), et(g)), t(5, r = me(e, i)), "use" in g && t(0, o = g.use), "class" in g && t(1, u = g.class), "$$scope" in g && t(7, a = g.$$scope);
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
class Zc extends Me {
  constructor(e) {
    super(), De(this, e, Xc, Yc, ye, { use: 0, class: 1, getElement: 6 });
  }
  get getElement() {
    return this.$$.ctx[6];
  }
}
At({
  class: "mdc-deprecated-list-item__meta",
  tag: "span"
});
At({
  class: "mdc-deprecated-list-group",
  tag: "div"
});
At({
  class: "mdc-deprecated-list-group__subheader",
  tag: "h3"
});
At({
  class: "mdc-menu__selection-group-icon",
  component: Zc
});
function Qc(n) {
  let e;
  return {
    c() {
      e = ot(
        /*content*/
        n[8]
      );
    },
    m(t, i) {
      j(t, e, i);
    },
    p(t, i) {
      i & /*content*/
      256 && St(
        e,
        /*content*/
        t[8]
      );
    },
    i: nt,
    o: nt,
    d(t) {
      t && V(e);
    }
  };
}
function Jc(n) {
  let e;
  const t = (
    /*#slots*/
    n[13].default
  ), i = ge(
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
      4096) && be(
        i,
        t,
        r,
        /*$$scope*/
        r[12],
        e ? _e(
          t,
          /*$$scope*/
          r[12],
          l,
          null
        ) : Ie(
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
      S(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function xc(n) {
  let e, t, i, r, l, a, s, o, u;
  const c = [Jc, Qc], d = [];
  function f(_, m) {
    return (
      /*content*/
      _[8] == null ? 0 : 1
    );
  }
  t = f(n), i = d[t] = c[t](n);
  let h = [
    {
      class: r = re({
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
  ], g = {};
  for (let _ = 0; _ < h.length; _ += 1)
    g = z(g, h[_]);
  return {
    c() {
      e = le("div"), i.c(), ae(e, g);
    },
    m(_, m) {
      j(_, e, m), d[t].m(e, null), n[14](e), s = !0, o || (u = [
        de(a = Qe.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        de(
          /*forwardEvents*/
          n[9].call(null, e)
        )
      ], o = !0);
    },
    p(_, [m]) {
      let C = t;
      t = f(_), t === C ? d[t].p(_, m) : (Ve(), S(d[C], 1, 1, () => {
        d[C] = null;
      }), je(), i = d[t], i ? i.p(_, m) : (i = d[t] = c[t](_), i.c()), A(i, 1), i.m(e, null)), ae(e, g = fe(h, [
        (!s || m & /*className, validationMsg, persistent, internalClasses*/
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
        (!s || m & /*persistent*/
        8 && l !== (l = /*persistent*/
        _[3] ? void 0 : "true")) && { "aria-hidden": l },
        (!s || m & /*id*/
        4) && { id: (
          /*id*/
          _[2]
        ) },
        m & /*internalAttrs*/
        128 && /*internalAttrs*/
        _[7],
        m & /*$$restProps*/
        1024 && /*$$restProps*/
        _[10]
      ])), a && he(a.update) && m & /*use*/
      1 && a.update.call(
        null,
        /*use*/
        _[0]
      );
    },
    i(_) {
      s || (A(i), s = !0);
    },
    o(_) {
      S(i), s = !1;
    },
    d(_) {
      _ && V(e), d[t].d(), n[14](null), o = !1, Ze(u);
    }
  };
}
let $c = 0;
function ed(n, e, t) {
  const i = ["use", "class", "id", "persistent", "validationMsg", "getElement"];
  let r = me(e, i), { $$slots: l = {}, $$scope: a } = e;
  const s = tt(Je());
  let { use: o = [] } = e, { class: u = "" } = e, { id: c = "SMUI-select-helper-text-" + $c++ } = e, { persistent: d = !1 } = e, { validationMsg: f = !1 } = e, h, g, _ = {}, m = {}, C;
  ut(() => (g = new Oc({
    addClass: O,
    removeClass: E,
    hasClass: I,
    getAttr: L,
    setAttr: k,
    removeAttr: p,
    setContent: (v) => {
      t(8, C = v);
    }
  }), c.startsWith("SMUI-select-helper-text-") && pe(y(), "SMUISelectHelperText:id", c), pe(y(), "SMUISelectHelperText:mount", g), g.init(), () => {
    pe(y(), "SMUISelectHelperText:unmount", g), g.destroy();
  }));
  function I(v) {
    return v in _ ? _[v] : y().classList.contains(v);
  }
  function O(v) {
    _[v] || t(6, _[v] = !0, _);
  }
  function E(v) {
    (!(v in _) || _[v]) && t(6, _[v] = !1, _);
  }
  function L(v) {
    var b;
    return v in m ? (b = m[v]) !== null && b !== void 0 ? b : null : y().getAttribute(v);
  }
  function k(v, b) {
    m[v] !== b && t(7, m[v] = b, m);
  }
  function p(v) {
    (!(v in m) || m[v] != null) && t(7, m[v] = void 0, m);
  }
  function y() {
    return h;
  }
  function M(v) {
    se[v ? "unshift" : "push"](() => {
      h = v, t(5, h);
    });
  }
  return n.$$set = (v) => {
    e = z(z({}, e), et(v)), t(10, r = me(e, i)), "use" in v && t(0, o = v.use), "class" in v && t(1, u = v.class), "id" in v && t(2, c = v.id), "persistent" in v && t(3, d = v.persistent), "validationMsg" in v && t(4, f = v.validationMsg), "$$scope" in v && t(12, a = v.$$scope);
  }, [
    o,
    u,
    c,
    d,
    f,
    h,
    _,
    m,
    C,
    s,
    r,
    y,
    a,
    l,
    M
  ];
}
class td extends Me {
  constructor(e) {
    super(), De(this, e, ed, xc, ye, {
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
const nd = (n) => ({}), yl = (n) => ({}), id = (n) => ({}), Sl = (n) => ({}), rd = (n) => ({}), Tl = (n) => ({}), ld = (n) => ({}), Ll = (n) => ({});
function Ol(n) {
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
    Pe(
      /*$$restProps*/
      n[53],
      "input$"
    )
  ], i = {};
  for (let r = 0; r < t.length; r += 1)
    i = z(i, t[r]);
  return {
    c() {
      e = le("input"), ae(e, i);
    },
    m(r, l) {
      j(r, e, l), e.autofocus && e.focus();
    },
    p(r, l) {
      ae(e, i = fe(t, [
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
        4194304 && Pe(
          /*$$restProps*/
          r[53],
          "input$"
        )
      ]));
    },
    d(r) {
      r && V(e);
    }
  };
}
function Rl(n) {
  let e;
  return {
    c() {
      e = le("span"), B(e, "class", "mdc-select__ripple");
    },
    m(t, i) {
      j(t, e, i);
    },
    d(t) {
      t && V(e);
    }
  };
}
function kl(n) {
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
    Pe(
      /*$$restProps*/
      n[53],
      "label$"
    )
  ];
  let r = {
    $$slots: { default: [sd] },
    $$scope: { ctx: n }
  };
  for (let l = 0; l < i.length; l += 1)
    r = z(r, i[l]);
  return e = new _i({ props: r }), n[67](e), {
    c() {
      te(e.$$.fragment);
    },
    m(l, a) {
      $(e, l, a), t = !0;
    },
    p(l, a) {
      const s = a[0] & /*inputId, required*/
      3072 | a[1] & /*$selectedTextStore, $$restProps*/
      4196352 ? fe(i, [
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
        4194304 && Oe(Pe(
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
      t || (A(e.$$.fragment, l), t = !0);
    },
    o(l) {
      S(e.$$.fragment, l), t = !1;
    },
    d(l) {
      n[67](null), ee(e, l);
    }
  };
}
function sd(n) {
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
  ), l = ge(
    r,
    n,
    /*$$scope*/
    n[87],
    Ll
  );
  return {
    c() {
      t = ot(e), l && l.c();
    },
    m(a, s) {
      j(a, t, s), l && l.m(a, s), i = !0;
    },
    p(a, s) {
      (!i || s[0] & /*label*/
      512) && e !== (e = /*label*/
      (a[9] == null ? "" : (
        /*label*/
        a[9]
      )) + "") && St(t, e), l && l.p && (!i || s[2] & /*$$scope*/
      33554432) && be(
        l,
        r,
        a,
        /*$$scope*/
        a[87],
        i ? _e(
          r,
          /*$$scope*/
          a[87],
          s,
          ld
        ) : Ie(
          /*$$scope*/
          a[87]
        ),
        Ll
      );
    },
    i(a) {
      i || (A(l, a), i = !0);
    },
    o(a) {
      S(l, a), i = !1;
    },
    d(a) {
      a && V(t), l && l.d(a);
    }
  };
}
function Dl(n) {
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
    Pe(
      /*$$restProps*/
      n[53],
      "outline$"
    )
  ];
  let r = {
    $$slots: { default: [od] },
    $$scope: { ctx: n }
  };
  for (let l = 0; l < i.length; l += 1)
    r = z(r, i[l]);
  return e = new na({ props: r }), n[69](e), {
    c() {
      te(e.$$.fragment);
    },
    m(l, a) {
      $(e, l, a), t = !0;
    },
    p(l, a) {
      const s = a[0] & /*noLabel, label*/
      768 | a[1] & /*$$slots, $$restProps*/
      12582912 ? fe(i, [
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
        4194304 && Oe(Pe(
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
      t || (A(e.$$.fragment, l), t = !0);
    },
    o(l) {
      S(e.$$.fragment, l), t = !1;
    },
    d(l) {
      n[69](null), ee(e, l);
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
    Pe(
      /*$$restProps*/
      n[53],
      "label$"
    )
  ];
  let r = {
    $$slots: { default: [ad] },
    $$scope: { ctx: n }
  };
  for (let l = 0; l < i.length; l += 1)
    r = z(r, i[l]);
  return e = new _i({ props: r }), n[68](e), {
    c() {
      te(e.$$.fragment);
    },
    m(l, a) {
      $(e, l, a), t = !0;
    },
    p(l, a) {
      const s = a[0] & /*inputId, required*/
      3072 | a[1] & /*$selectedTextStore, $$restProps*/
      4196352 ? fe(i, [
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
        4194304 && Oe(Pe(
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
      t || (A(e.$$.fragment, l), t = !0);
    },
    o(l) {
      S(e.$$.fragment, l), t = !1;
    },
    d(l) {
      n[68](null), ee(e, l);
    }
  };
}
function ad(n) {
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
  ), l = ge(
    r,
    n,
    /*$$scope*/
    n[87],
    Tl
  );
  return {
    c() {
      t = ot(e), l && l.c();
    },
    m(a, s) {
      j(a, t, s), l && l.m(a, s), i = !0;
    },
    p(a, s) {
      (!i || s[0] & /*label*/
      512) && e !== (e = /*label*/
      (a[9] == null ? "" : (
        /*label*/
        a[9]
      )) + "") && St(t, e), l && l.p && (!i || s[2] & /*$$scope*/
      33554432) && be(
        l,
        r,
        a,
        /*$$scope*/
        a[87],
        i ? _e(
          r,
          /*$$scope*/
          a[87],
          s,
          rd
        ) : Ie(
          /*$$scope*/
          a[87]
        ),
        Tl
      );
    },
    i(a) {
      i || (A(l, a), i = !0);
    },
    o(a) {
      S(l, a), i = !1;
    },
    d(a) {
      a && V(t), l && l.d(a);
    }
  };
}
function od(n) {
  let e, t, i = !/*noLabel*/
  n[8] && /*label*/
  (n[9] != null || /*$$slots*/
  n[54].label) && Ml(n);
  return {
    c() {
      i && i.c(), e = Xe();
    },
    m(r, l) {
      i && i.m(r, l), j(r, e, l), t = !0;
    },
    p(r, l) {
      !/*noLabel*/
      r[8] && /*label*/
      (r[9] != null || /*$$slots*/
      r[54].label) ? i ? (i.p(r, l), l[0] & /*noLabel, label*/
      768 | l[1] & /*$$slots*/
      8388608 && A(i, 1)) : (i = Ml(r), i.c(), A(i, 1), i.m(e.parentNode, e)) : i && (Ve(), S(i, 1, 1, () => {
        i = null;
      }), je());
    },
    i(r) {
      t || (A(i), t = !0);
    },
    o(r) {
      S(i), t = !1;
    },
    d(r) {
      r && V(e), i && i.d(r);
    }
  };
}
function Fl(n) {
  let e, t;
  const i = [Pe(
    /*$$restProps*/
    n[53],
    "ripple$"
  )];
  let r = {};
  for (let l = 0; l < i.length; l += 1)
    r = z(r, i[l]);
  return e = new ta({ props: r }), n[70](e), {
    c() {
      te(e.$$.fragment);
    },
    m(l, a) {
      $(e, l, a), t = !0;
    },
    p(l, a) {
      const s = a[1] & /*$$restProps*/
      4194304 ? fe(i, [Oe(Pe(
        /*$$restProps*/
        l[53],
        "ripple$"
      ))]) : {};
      e.$set(s);
    },
    i(l) {
      t || (A(e.$$.fragment, l), t = !0);
    },
    o(l) {
      S(e.$$.fragment, l), t = !1;
    },
    d(l) {
      n[70](null), ee(e, l);
    }
  };
}
function ud(n) {
  let e;
  const t = (
    /*#slots*/
    n[64].default
  ), i = ge(
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
      33554432) && be(
        i,
        t,
        r,
        /*$$scope*/
        r[87],
        e ? _e(
          t,
          /*$$scope*/
          r[87],
          l,
          null
        ) : Ie(
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
      S(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function cd(n) {
  let e, t, i;
  const r = [
    { role: "listbox" },
    { wrapFocus: (
      /*wrapFocus*/
      n[35]
    ) },
    Pe(
      /*$$restProps*/
      n[53],
      "list$"
    )
  ];
  function l(s) {
    n[75](s);
  }
  let a = {
    $$slots: { default: [ud] },
    $$scope: { ctx: n }
  };
  for (let s = 0; s < r.length; s += 1)
    a = z(a, r[s]);
  return (
    /*selectedIndex*/
    n[24] !== void 0 && (a.selectedIndex = /*selectedIndex*/
    n[24]), e = new jc({ props: a }), se.push(() => _t(e, "selectedIndex", l)), e.$on(
      "SMUIList:mount",
      /*SMUIList_mount_handler*/
      n[76]
    ), {
      c() {
        te(e.$$.fragment);
      },
      m(s, o) {
        $(e, s, o), i = !0;
      },
      p(s, o) {
        const u = o[1] & /*wrapFocus, $$restProps*/
        4194320 ? fe(r, [
          r[0],
          o[1] & /*wrapFocus*/
          16 && { wrapFocus: (
            /*wrapFocus*/
            s[35]
          ) },
          o[1] & /*$$restProps*/
          4194304 && Oe(Pe(
            /*$$restProps*/
            s[53],
            "list$"
          ))
        ]) : {};
        o[2] & /*$$scope*/
        33554432 && (u.$$scope = { dirty: o, ctx: s }), !t && o[0] & /*selectedIndex*/
        16777216 && (t = !0, u.selectedIndex = /*selectedIndex*/
        s[24], gt(() => t = !1)), e.$set(u);
      },
      i(s) {
        i || (A(e.$$.fragment, s), i = !0);
      },
      o(s) {
        S(e.$$.fragment, s), i = !1;
      },
      d(s) {
        ee(e, s);
      }
    }
  );
}
function Nl(n) {
  let e, t;
  const i = [Pe(
    /*$$restProps*/
    n[53],
    "helperText$"
  )];
  let r = {
    $$slots: { default: [dd] },
    $$scope: { ctx: n }
  };
  for (let l = 0; l < i.length; l += 1)
    r = z(r, i[l]);
  return e = new td({ props: r }), e.$on(
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
      te(e.$$.fragment);
    },
    m(l, a) {
      $(e, l, a), t = !0;
    },
    p(l, a) {
      const s = a[1] & /*$$restProps*/
      4194304 ? fe(i, [Oe(Pe(
        /*$$restProps*/
        l[53],
        "helperText$"
      ))]) : {};
      a[2] & /*$$scope*/
      33554432 && (s.$$scope = { dirty: a, ctx: l }), e.$set(s);
    },
    i(l) {
      t || (A(e.$$.fragment, l), t = !0);
    },
    o(l) {
      S(e.$$.fragment, l), t = !1;
    },
    d(l) {
      ee(e, l);
    }
  };
}
function dd(n) {
  let e;
  const t = (
    /*#slots*/
    n[64].helperText
  ), i = ge(
    t,
    n,
    /*$$scope*/
    n[87],
    yl
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
      33554432) && be(
        i,
        t,
        r,
        /*$$scope*/
        r[87],
        e ? _e(
          t,
          /*$$scope*/
          r[87],
          l,
          nd
        ) : Ie(
          /*$$scope*/
          r[87]
        ),
        yl
      );
    },
    i(r) {
      e || (A(i, r), e = !0);
    },
    o(r) {
      S(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function fd(n) {
  let e, t, i, r, l, a, s, o, u, c, d, f, h, g, _, m, C, I, O, E, L, k, p, y, M, v, b, D, R, w, q, U, G, N, T, Q, Re, Fe, ve, ze, K, J = (
    /*hiddenInput*/
    n[12] && Ol(n)
  ), Ce = (
    /*variant*/
    n[7] === "filled" && Rl()
  ), Te = (
    /*variant*/
    n[7] !== "outlined" && !/*noLabel*/
    n[8] && /*label*/
    (n[9] != null || /*$$slots*/
    n[54].label) && kl(n)
  ), Ne = (
    /*variant*/
    n[7] === "outlined" && Dl(n)
  );
  const ie = (
    /*#slots*/
    n[64].leadingIcon
  ), W = ge(
    ie,
    n,
    /*$$scope*/
    n[87],
    Sl
  );
  let Ye = [
    {
      id: d = /*inputId*/
      n[11] + "-smui-selected-text"
    },
    {
      class: f = re({
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
    Pe(
      /*$$restProps*/
      n[53],
      "selectedText$"
    )
  ], Ge = {};
  for (let Le = 0; Le < Ye.length; Le += 1)
    Ge = z(Ge, Ye[Le]);
  let ft = [
    {
      class: _ = re({
        [
          /*selectedTextContainer$class*/
          n[17]
        ]: !0,
        "mdc-select__selected-text-container": !0
      })
    },
    Pe(
      /*$$restProps*/
      n[53],
      "selectedTextContainer$"
    )
  ], Y = {};
  for (let Le = 0; Le < ft.length; Le += 1)
    Y = z(Y, ft[Le]);
  let Ee = [
    {
      class: k = re({
        [
          /*dropdownIcon$class*/
          n[21]
        ]: !0,
        "mdc-select__dropdown-icon": !0
      })
    },
    Pe(
      /*$$restProps*/
      n[53],
      "dropdownIcon$"
    )
  ], Ke = {};
  for (let Le = 0; Le < Ee.length; Le += 1)
    Ke = z(Ke, Ee[Le]);
  let Ue = (
    /*variant*/
    n[7] !== "outlined" && /*ripple*/
    n[5] && Fl(n)
  ), Et = [
    {
      class: M = re({
        [
          /*anchor$class*/
          n[15]
        ]: !0,
        "mdc-select__anchor": !0
      })
    },
    {
      "aria-required": v = /*required*/
      n[10] ? "true" : void 0
    },
    {
      "aria-disabled": b = /*disabled*/
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
    Pe(
      /*$$restProps*/
      n[53],
      "anchor$"
    )
  ], F = {};
  for (let Le = 0; Le < Et.length; Le += 1)
    F = z(F, Et[Le]);
  const x = [
    {
      class: re({
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
    Pe(
      /*$$restProps*/
      n[53],
      "menu$"
    )
  ];
  function Z(Le) {
    n[77](Le);
  }
  let Be = {
    $$slots: { default: [cd] },
    $$scope: { ctx: n }
  };
  for (let Le = 0; Le < x.length; Le += 1)
    Be = z(Be, x[Le]);
  /*menuOpen*/
  n[31] !== void 0 && (Be.open = /*menuOpen*/
  n[31]), q = new Pc({ props: Be }), se.push(() => _t(q, "open", Z)), q.$on(
    "SMUIMenu:selected",
    /*SMUIMenu_selected_handler*/
    n[78]
  ), q.$on(
    "SMUIMenuSurface:closing",
    /*SMUIMenuSurface_closing_handler*/
    n[79]
  ), q.$on(
    "SMUIMenuSurface:closed",
    /*SMUIMenuSurface_closed_handler*/
    n[80]
  ), q.$on(
    "SMUIMenuSurface:opened",
    /*SMUIMenuSurface_opened_handler*/
    n[81]
  );
  let dt = [
    {
      class: G = re({
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
      style: N = Object.entries(
        /*internalStyles*/
        n[27]
      ).map(Ul).concat([
        /*style*/
        n[4]
      ]).join(" ")
    },
    jt(
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
  ], at = {};
  for (let Le = 0; Le < dt.length; Le += 1)
    at = z(at, dt[Le]);
  let $e = (
    /*$$slots*/
    n[54].helperText && Nl(n)
  );
  return {
    c() {
      e = le("div"), J && J.c(), t = ce(), i = le("div"), Ce && Ce.c(), r = ce(), Te && Te.c(), l = ce(), Ne && Ne.c(), a = ce(), W && W.c(), s = ce(), o = le("span"), u = le("span"), c = ot(
        /*$selectedTextStore*/
        n[42]
      ), C = ce(), I = le("span"), O = st("svg"), E = st("polygon"), L = st("polygon"), y = ce(), Ue && Ue.c(), w = ce(), te(q.$$.fragment), Re = ce(), $e && $e.c(), Fe = Xe(), ae(u, Ge), ae(o, Y), B(E, "class", "mdc-select__dropdown-icon-inactive"), B(E, "stroke", "none"), B(E, "fill-rule", "evenodd"), B(E, "points", "7 10 12 15 17 10"), B(L, "class", "mdc-select__dropdown-icon-active"), B(L, "stroke", "none"), B(L, "fill-rule", "evenodd"), B(L, "points", "7 15 12 10 17 15"), B(O, "class", "mdc-select__dropdown-icon-graphic"), B(O, "viewBox", "7 10 10 5"), B(O, "focusable", "false"), ae(I, Ke), ae(i, F), ae(e, at);
    },
    m(Le, ue) {
      j(Le, e, ue), J && J.m(e, null), ne(e, t), ne(e, i), Ce && Ce.m(i, null), ne(i, r), Te && Te.m(i, null), ne(i, l), Ne && Ne.m(i, null), ne(i, a), W && W.m(i, null), ne(i, s), ne(i, o), ne(o, u), ne(u, c), ne(i, C), ne(i, I), ne(I, O), ne(O, E), ne(O, L), ne(i, y), Ue && Ue.m(i, null), n[71](i), ne(e, w), $(q, e, null), n[82](e), j(Le, Re, ue), $e && $e.m(Le, ue), j(Le, Fe, ue), ve = !0, ze || (K = [
        de(g = Qe.call(
          null,
          u,
          /*selectedText$use*/
          n[18]
        )),
        de(m = Qe.call(
          null,
          o,
          /*selectedTextContainer$use*/
          n[16]
        )),
        de(p = Qe.call(
          null,
          I,
          /*dropdownIcon$use*/
          n[20]
        )),
        de(R = Qe.call(
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
          he(
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
        de(T = Rt.call(null, e, {
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
        de(Fc.call(null, e, {
          addClass: (
            /*addClass*/
            n[50]
          ),
          removeClass: (
            /*removeClass*/
            n[51]
          )
        })),
        de(Q = Qe.call(
          null,
          e,
          /*use*/
          n[2]
        )),
        de(
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
      ], ze = !0);
    },
    p(Le, ue) {
      n = Le, /*hiddenInput*/
      n[12] ? J ? J.p(n, ue) : (J = Ol(n), J.c(), J.m(e, t)) : J && (J.d(1), J = null), /*variant*/
      n[7] === "filled" ? Ce || (Ce = Rl(), Ce.c(), Ce.m(i, r)) : Ce && (Ce.d(1), Ce = null), /*variant*/
      n[7] !== "outlined" && !/*noLabel*/
      n[8] && /*label*/
      (n[9] != null || /*$$slots*/
      n[54].label) ? Te ? (Te.p(n, ue), ue[0] & /*variant, noLabel, label*/
      896 | ue[1] & /*$$slots*/
      8388608 && A(Te, 1)) : (Te = kl(n), Te.c(), A(Te, 1), Te.m(i, l)) : Te && (Ve(), S(Te, 1, 1, () => {
        Te = null;
      }), je()), /*variant*/
      n[7] === "outlined" ? Ne ? (Ne.p(n, ue), ue[0] & /*variant*/
      128 && A(Ne, 1)) : (Ne = Dl(n), Ne.c(), A(Ne, 1), Ne.m(i, a)) : Ne && (Ve(), S(Ne, 1, 1, () => {
        Ne = null;
      }), je()), W && W.p && (!ve || ue[2] & /*$$scope*/
      33554432) && be(
        W,
        ie,
        n,
        /*$$scope*/
        n[87],
        ve ? _e(
          ie,
          /*$$scope*/
          n[87],
          ue,
          id
        ) : Ie(
          /*$$scope*/
          n[87]
        ),
        Sl
      ), (!ve || ue[1] & /*$selectedTextStore*/
      2048) && Xa(
        c,
        /*$selectedTextStore*/
        n[42],
        Ge.contenteditable
      ), ae(u, Ge = fe(Ye, [
        (!ve || ue[0] & /*inputId*/
        2048 && d !== (d = /*inputId*/
        n[11] + "-smui-selected-text")) && { id: d },
        (!ve || ue[0] & /*selectedText$class*/
        524288 && f !== (f = re({
          [
            /*selectedText$class*/
            n[19]
          ]: !0,
          "mdc-select__selected-text": !0
        }))) && { class: f },
        { role: "button" },
        { "aria-haspopup": "listbox" },
        (!ve || ue[0] & /*inputId*/
        2048 && h !== (h = /*inputId*/
        n[11] + "-smui-label")) && {
          "aria-labelledby": h
        },
        ue[1] & /*$$restProps*/
        4194304 && Pe(
          /*$$restProps*/
          n[53],
          "selectedText$"
        )
      ])), g && he(g.update) && ue[0] & /*selectedText$use*/
      262144 && g.update.call(
        null,
        /*selectedText$use*/
        n[18]
      ), ae(o, Y = fe(ft, [
        (!ve || ue[0] & /*selectedTextContainer$class*/
        131072 && _ !== (_ = re({
          [
            /*selectedTextContainer$class*/
            n[17]
          ]: !0,
          "mdc-select__selected-text-container": !0
        }))) && { class: _ },
        ue[1] & /*$$restProps*/
        4194304 && Pe(
          /*$$restProps*/
          n[53],
          "selectedTextContainer$"
        )
      ])), m && he(m.update) && ue[0] & /*selectedTextContainer$use*/
      65536 && m.update.call(
        null,
        /*selectedTextContainer$use*/
        n[16]
      ), ae(I, Ke = fe(Ee, [
        (!ve || ue[0] & /*dropdownIcon$class*/
        2097152 && k !== (k = re({
          [
            /*dropdownIcon$class*/
            n[21]
          ]: !0,
          "mdc-select__dropdown-icon": !0
        }))) && { class: k },
        ue[1] & /*$$restProps*/
        4194304 && Pe(
          /*$$restProps*/
          n[53],
          "dropdownIcon$"
        )
      ])), p && he(p.update) && ue[0] & /*dropdownIcon$use*/
      1048576 && p.update.call(
        null,
        /*dropdownIcon$use*/
        n[20]
      ), /*variant*/
      n[7] !== "outlined" && /*ripple*/
      n[5] ? Ue ? (Ue.p(n, ue), ue[0] & /*variant, ripple*/
      160 && A(Ue, 1)) : (Ue = Fl(n), Ue.c(), A(Ue, 1), Ue.m(i, null)) : Ue && (Ve(), S(Ue, 1, 1, () => {
        Ue = null;
      }), je()), ae(i, F = fe(Et, [
        (!ve || ue[0] & /*anchor$class*/
        32768 && M !== (M = re({
          [
            /*anchor$class*/
            n[15]
          ]: !0,
          "mdc-select__anchor": !0
        }))) && { class: M },
        (!ve || ue[0] & /*required*/
        1024 && v !== (v = /*required*/
        n[10] ? "true" : void 0)) && {
          "aria-required": v
        },
        (!ve || ue[0] & /*disabled*/
        64 && b !== (b = /*disabled*/
        n[6] ? "true" : void 0)) && {
          "aria-disabled": b
        },
        { "aria-controls": (
          /*menuId*/
          n[45]
        ) },
        (!ve || ue[1] & /*menuOpen*/
        1 && D !== (D = /*menuOpen*/
        n[31] ? "true" : "false")) && {
          "aria-expanded": D
        },
        (!ve || ue[0] & /*helperId*/
        1073741824) && { "aria-describedby": (
          /*helperId*/
          n[30]
        ) },
        { role: "combobox" },
        { tabindex: "0" },
        ue[0] & /*selectAnchorAttrs*/
        536870912 && /*selectAnchorAttrs*/
        n[29],
        ue[1] & /*$$restProps*/
        4194304 && Pe(
          /*$$restProps*/
          n[53],
          "anchor$"
        )
      ])), R && he(R.update) && ue[0] & /*anchor$use*/
      16384 && R.update.call(
        null,
        /*anchor$use*/
        n[14]
      );
      const Ht = ue[0] & /*menu$class*/
      4194304 | ue[1] & /*menuClasses, menuId, anchorElement, anchorCorner, $$restProps*/
      4210702 ? fe(x, [
        ue[0] & /*menu$class*/
        4194304 | ue[1] & /*menuClasses*/
        2 && {
          class: re({
            [
              /*menu$class*/
              n[22]
            ]: !0,
            "mdc-select__menu": !0,
            .../*menuClasses*/
            n[32]
          })
        },
        ue[1] & /*menuId*/
        16384 && { id: (
          /*menuId*/
          n[45]
        ) },
        x[2],
        x[3],
        ue[1] & /*anchorElement*/
        4 && { anchorElement: (
          /*anchorElement*/
          n[33]
        ) },
        ue[1] & /*anchorCorner*/
        8 && { anchorCorner: (
          /*anchorCorner*/
          n[34]
        ) },
        ue[1] & /*$$restProps*/
        4194304 && Oe(Pe(
          /*$$restProps*/
          n[53],
          "menu$"
        ))
      ]) : {};
      ue[0] & /*selectedIndex*/
      16777216 | ue[1] & /*wrapFocus, $$restProps, list*/
      4194352 | ue[2] & /*$$scope*/
      33554432 && (Ht.$$scope = { dirty: ue, ctx: n }), !U && ue[1] & /*menuOpen*/
      1 && (U = !0, Ht.open = /*menuOpen*/
      n[31], gt(() => U = !1)), q.$set(Ht), ae(e, at = fe(dt, [
        (!ve || ue[0] & /*className, required, disabled, variant, withLeadingIcon, noLabel, label, invalid, internalClasses*/
        67119050 | ue[1] & /*$$slots, menuOpen*/
        8388609 && G !== (G = re({
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
        }))) && { class: G },
        (!ve || ue[0] & /*internalStyles, style*/
        134217744 && N !== (N = Object.entries(
          /*internalStyles*/
          n[27]
        ).map(Ul).concat([
          /*style*/
          n[4]
        ]).join(" "))) && { style: N },
        ue[1] & /*$$restProps*/
        4194304 && jt(
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
      ])), T && he(T.update) && ue[0] & /*variant*/
      128 && T.update.call(null, {
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
      }), Q && he(Q.update) && ue[0] & /*use*/
      4 && Q.update.call(
        null,
        /*use*/
        n[2]
      ), /*$$slots*/
      n[54].helperText ? $e ? ($e.p(n, ue), ue[1] & /*$$slots*/
      8388608 && A($e, 1)) : ($e = Nl(n), $e.c(), A($e, 1), $e.m(Fe.parentNode, Fe)) : $e && (Ve(), S($e, 1, 1, () => {
        $e = null;
      }), je());
    },
    i(Le) {
      ve || (A(Te), A(Ne), A(W, Le), A(Ue), A(q.$$.fragment, Le), A($e), ve = !0);
    },
    o(Le) {
      S(Te), S(Ne), S(W, Le), S(Ue), S(q.$$.fragment, Le), S($e), ve = !1;
    },
    d(Le) {
      Le && (V(e), V(Re), V(Fe)), J && J.d(), Ce && Ce.d(), Te && Te.d(), Ne && Ne.d(), W && W.d(Le), Ue && Ue.d(), n[71](null), ee(q), n[82](null), $e && $e.d(Le), ze = !1, Ze(K);
    }
  };
}
let hd = 0;
function md(n) {
  const e = n.currentTarget.getBoundingClientRect();
  return (pd(n) ? n.touches[0].clientX : n.clientX) - e.left;
}
function pd(n) {
  return "touches" in n;
}
const Ul = ([n, e]) => `${n}: ${e};`;
function gd(n, e, t) {
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
  let r = me(e, i), l, a, { $$slots: s = {}, $$scope: o } = e;
  const u = fr(s);
  var c;
  const d = tt(Je());
  let f = () => {
  };
  function h(H) {
    return H === f;
  }
  let { use: g = [] } = e, { class: _ = "" } = e, { style: m = "" } = e, { ripple: C = !0 } = e, { disabled: I = !1 } = e, { variant: O = "standard" } = e, { noLabel: E = !1 } = e, { label: L = void 0 } = e, { value: k = "" } = e, { key: p = (H) => H } = e, { dirty: y = !1 } = e, { invalid: M = f } = e, { updateInvalid: v = h(M) } = e;
  const b = h(M);
  h(M) && (M = !1);
  let { required: D = !1 } = e, { inputId: R = "SMUI-select-" + hd++ } = e, { hiddenInput: w = !1 } = e, { withLeadingIcon: q = f } = e, { anchor$use: U = [] } = e, { anchor$class: G = "" } = e, { selectedTextContainer$use: N = [] } = e, { selectedTextContainer$class: T = "" } = e, { selectedText$use: Q = [] } = e, { selectedText$class: Re = "" } = e, { dropdownIcon$use: Fe = [] } = e, { dropdownIcon$class: ve = "" } = e, { menu$class: ze = "" } = e, K, J, Ce = {}, Te = {}, Ne, ie = {}, W = -1, Ye = (c = r.menu$id) !== null && c !== void 0 ? c : R + "-menu", Ge, ft = qe("SMUI:addLayoutListener"), Y, Ee = !1, Ke = {}, Ue, Et, F = !1, x, Z = qe("SMUI:select:context"), Be, dt, at, $e, Le;
  He("SMUI:list:role", ""), He("SMUI:list:nav", !1);
  const ue = Lt("");
  it(n, ue, (H) => t(42, l = H)), He("SMUI:select:selectedText", ue);
  const Ht = Lt(k);
  it(n, Ht, (H) => t(90, a = H)), He("SMUI:select:value", Ht);
  let X = W;
  ft && (Y = ft(ti)), ut(() => (t(23, J = new Lc(
    {
      // getSelectAdapterMethods
      // getMenuItemAttr: (menuItem: Element, attr: string) =>
      //   menuItem.getAttribute(attr),
      setSelectedText: (H) => {
        Ot(ue, l = H, l);
      },
      isSelectAnchorFocused: () => document.activeElement === Ne,
      getSelectAnchorAttr: Ci,
      setSelectAnchorAttr: Ai,
      removeSelectAnchorAttr: Ei,
      addMenuClass: Ii,
      removeMenuClass: vi,
      openMenu: () => {
        t(31, Ee = !0);
      },
      closeMenu: () => {
        t(31, Ee = !1);
      },
      getAnchorElement: () => Ne,
      setMenuAnchorElement: (H) => {
        t(33, Ue = H);
      },
      setMenuAnchorCorner: (H) => {
        t(34, Et = H);
      },
      setMenuWrapFocus: (H) => {
        t(35, F = H);
      },
      getSelectedIndex: () => W,
      setSelectedIndex: (H) => {
        t(63, X = H), t(24, W = H), t(0, k = En()[W]);
      },
      focusMenuItemAtIndex: (H) => {
        x.focusItemAtIndex(H);
      },
      getMenuItemCount: () => x.items.length,
      getMenuItemValues: () => En().map(p),
      getMenuItemTextAtIndex: (H) => x.getPrimaryTextAtIndex(H),
      isTypeaheadInProgress: () => x.typeaheadInProgress,
      typeaheadMatchItem: (H, Ut) => x.typeaheadMatchItem(H, Ut),
      // getCommonAdapterMethods
      addClass: rt,
      removeClass: Qt,
      hasClass: Se,
      setRippleCenter: (H) => $e && $e.setRippleCenter(H),
      activateBottomLine: () => $e && $e.activate(),
      deactivateBottomLine: () => $e && $e.deactivate(),
      notifyChange: (H) => {
        t(55, y = !0), v && t(1, M = !J.isValid()), pe(yn(), "SMUISelect:change", { value: k, index: W }, void 0, !0);
      },
      // getOutlineAdapterMethods
      hasOutline: () => !!Le,
      notchOutline: (H) => Le && Le.notch(H),
      closeOutline: () => Le && Le.closeNotch(),
      // getLabelAdapterMethods
      hasLabel: () => !!at,
      floatLabel: (H) => at && at.float(H),
      getLabelWidth: () => at ? at.getWidth() : 0,
      setLabelRequired: (H) => at && at.setRequired(H)
    },
    {
      get helperText() {
        return dt;
      },
      get leadingIcon() {
        return Be;
      }
    }
  )), t(24, W = En().indexOf(k)), J.init(), ei(b), () => {
    J.destroy();
  })), Wt(() => {
    Y && Y();
  });
  function Ae(H) {
    t(37, Be = H.detail);
  }
  function Se(H) {
    return H in Ce ? Ce[H] : yn().classList.contains(H);
  }
  function rt(H) {
    Ce[H] || t(26, Ce[H] = !0, Ce);
  }
  function Qt(H) {
    (!(H in Ce) || Ce[H]) && t(26, Ce[H] = !1, Ce);
  }
  function Vn(H, Ut) {
    Te[H] != Ut && (Ut === "" || Ut == null ? (delete Te[H], t(27, Te)) : t(27, Te[H] = Ut, Te));
  }
  function Ii(H) {
    Ke[H] || t(32, Ke[H] = !0, Ke);
  }
  function vi(H) {
    (!(H in Ke) || Ke[H]) && t(32, Ke[H] = !1, Ke);
  }
  function Ci(H) {
    var Ut;
    return H in ie ? (Ut = ie[H]) !== null && Ut !== void 0 ? Ut : null : yn().getAttribute(H);
  }
  function Ai(H, Ut) {
    ie[H] !== Ut && t(29, ie[H] = Ut, ie);
  }
  function Ei(H) {
    (!(H in ie) || ie[H] != null) && t(29, ie[H] = void 0, ie);
  }
  function En() {
    return x.getOrderedList().map((H) => H.getValue());
  }
  function yi() {
    return J.getUseDefaultValidation();
  }
  function ei(H) {
    J.setUseDefaultValidation(H);
  }
  function Si() {
    Ne.focus();
  }
  function ti() {
    J.layout();
  }
  function yn() {
    return K;
  }
  function Ti(H) {
    Pn.call(this, n, H);
  }
  function Li(H) {
    Pn.call(this, n, H);
  }
  function Oi(H) {
    se[H ? "unshift" : "push"](() => {
      at = H, t(39, at);
    });
  }
  function Ri(H) {
    se[H ? "unshift" : "push"](() => {
      at = H, t(39, at);
    });
  }
  function ki(H) {
    se[H ? "unshift" : "push"](() => {
      Le = H, t(41, Le);
    });
  }
  function Di(H) {
    se[H ? "unshift" : "push"](() => {
      $e = H, t(40, $e);
    });
  }
  function Mi(H) {
    se[H ? "unshift" : "push"](() => {
      Ne = H, t(28, Ne);
    });
  }
  const Fi = () => J && J.handleFocus(), Ni = () => J && J.handleBlur(), Ui = (H) => {
    Ne.focus(), J && J.handleClick(md(H));
  };
  function wi(H) {
    W = H, t(24, W);
  }
  const Pi = (H) => t(36, x = H.detail);
  function Hi(H) {
    Ee = H, t(31, Ee);
  }
  const Bi = (H) => J && J.handleMenuItemAction(H.detail.index), Vi = () => J && J.handleMenuClosing(), P = () => J && J.handleMenuClosed(), mt = () => J && J.handleMenuOpened();
  function ni(H) {
    se[H ? "unshift" : "push"](() => {
      K = H, t(25, K);
    });
  }
  const ji = () => t(37, Be = void 0), jn = (H) => t(30, Ge = H.detail), Gn = (H) => t(38, dt = H.detail), wa = () => {
    t(30, Ge = void 0), t(38, dt = void 0);
  };
  return n.$$set = (H) => {
    e = z(z({}, e), et(H)), t(53, r = me(e, i)), "use" in H && t(2, g = H.use), "class" in H && t(3, _ = H.class), "style" in H && t(4, m = H.style), "ripple" in H && t(5, C = H.ripple), "disabled" in H && t(6, I = H.disabled), "variant" in H && t(7, O = H.variant), "noLabel" in H && t(8, E = H.noLabel), "label" in H && t(9, L = H.label), "value" in H && t(0, k = H.value), "key" in H && t(56, p = H.key), "dirty" in H && t(55, y = H.dirty), "invalid" in H && t(1, M = H.invalid), "updateInvalid" in H && t(57, v = H.updateInvalid), "required" in H && t(10, D = H.required), "inputId" in H && t(11, R = H.inputId), "hiddenInput" in H && t(12, w = H.hiddenInput), "withLeadingIcon" in H && t(13, q = H.withLeadingIcon), "anchor$use" in H && t(14, U = H.anchor$use), "anchor$class" in H && t(15, G = H.anchor$class), "selectedTextContainer$use" in H && t(16, N = H.selectedTextContainer$use), "selectedTextContainer$class" in H && t(17, T = H.selectedTextContainer$class), "selectedText$use" in H && t(18, Q = H.selectedText$use), "selectedText$class" in H && t(19, Re = H.selectedText$class), "dropdownIcon$use" in H && t(20, Fe = H.dropdownIcon$use), "dropdownIcon$class" in H && t(21, ve = H.dropdownIcon$class), "menu$class" in H && t(22, ze = H.menu$class), "$$scope" in H && t(87, o = H.$$scope);
  }, n.$$.update = () => {
    if (n.$$.dirty[0] & /*selectedIndex, instance, value*/
    25165825 | n.$$.dirty[2] & /*previousSelectedIndex*/
    2 && X !== W)
      if (t(63, X = W), J)
        J.setSelectedIndex(
          W,
          /* closeMenu */
          !1,
          /* skipNotify */
          !0
        );
      else {
        const H = En();
        k !== H[W] && t(0, k = H[W]);
      }
    n.$$.dirty[0] & /*value*/
    1 && Ot(Ht, a = k, a), n.$$.dirty[0] & /*instance, value*/
    8388609 | n.$$.dirty[1] & /*key*/
    33554432 && J && J.getValue() !== p(k) && J.setValue(p(k)), n.$$.dirty[0] & /*instance, disabled*/
    8388672 && J && J.getDisabled() !== I && J.setDisabled(I), n.$$.dirty[0] & /*instance, invalid*/
    8388610 | n.$$.dirty[1] & /*dirty, updateInvalid*/
    83886080 && J && y && J.isValid() !== !M && (v ? t(1, M = !J.isValid()) : J.setValid(!M)), n.$$.dirty[0] & /*instance, required*/
    8389632 && J && J.getRequired() !== D && J.setRequired(D);
  }, [
    k,
    M,
    g,
    _,
    m,
    C,
    I,
    O,
    E,
    L,
    D,
    R,
    w,
    q,
    U,
    G,
    N,
    T,
    Q,
    Re,
    Fe,
    ve,
    ze,
    J,
    W,
    K,
    Ce,
    Te,
    Ne,
    ie,
    Ge,
    Ee,
    Ke,
    Ue,
    Et,
    F,
    x,
    Be,
    dt,
    at,
    $e,
    Le,
    l,
    d,
    h,
    Ye,
    Z,
    ue,
    Ht,
    Ae,
    rt,
    Qt,
    Vn,
    r,
    u,
    y,
    p,
    v,
    yi,
    ei,
    Si,
    ti,
    yn,
    X,
    s,
    Ti,
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
    P,
    mt,
    ni,
    ji,
    jn,
    Gn,
    wa,
    o
  ];
}
class _d extends Me {
  constructor(e) {
    super(), De(
      this,
      e,
      gd,
      fd,
      ye,
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
function bd(n) {
  let e;
  const t = (
    /*#slots*/
    n[11].default
  ), i = ge(
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
      8192) && be(
        i,
        t,
        r,
        /*$$scope*/
        r[13],
        e ? _e(
          t,
          /*$$scope*/
          r[13],
          l,
          null
        ) : Ie(
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
      S(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function Id(n) {
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
    $$slots: { default: [bd] },
    $$scope: { ctx: n }
  };
  for (let l = 0; l < i.length; l += 1)
    r = z(r, i[l]);
  return e = new zc({ props: r }), n[12](e), {
    c() {
      te(e.$$.fragment);
    },
    m(l, a) {
      $(e, l, a), t = !0;
    },
    p(l, [a]) {
      const s = a & /*usePass, value, selected, $$restProps*/
      77 ? fe(i, [
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
        64 && Oe(
          /*$$restProps*/
          l[6]
        )
      ]) : {};
      a & /*$$scope*/
      8192 && (s.$$scope = { dirty: a, ctx: l }), e.$set(s);
    },
    i(l) {
      t || (A(e.$$.fragment, l), t = !0);
    },
    o(l) {
      S(e.$$.fragment, l), t = !1;
    },
    d(l) {
      n[12](null), ee(e, l);
    }
  };
}
function vd(n, e, t) {
  let i, r;
  const l = ["use", "class", "value", "getElement"];
  let a = me(e, l), s, o, { $$slots: u = {}, $$scope: c } = e;
  const d = tt(Je());
  let { use: f = [] } = e;
  const h = "";
  let { value: g = "" } = e, _;
  const m = qe("SMUI:select:selectedText");
  it(n, m, (L) => t(14, s = L));
  const C = qe("SMUI:select:value");
  it(n, C, (L) => t(10, o = L)), He("SMUI:list:item:role", "option"), ut(I), Wt(I);
  function I() {
    r && _ && Ot(m, s = _.getPrimaryText(), s);
  }
  function O() {
    return _.getElement();
  }
  function E(L) {
    se[L ? "unshift" : "push"](() => {
      _ = L, t(1, _);
    });
  }
  return n.$$set = (L) => {
    e = z(z({}, e), et(L)), t(6, a = me(e, l)), "use" in L && t(7, f = L.use), "value" in L && t(0, g = L.value), "$$scope" in L && t(13, c = L.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty & /*use*/
    128 && t(3, i = [d, ...f]), n.$$.dirty & /*value, $selectedValue*/
    1025 && t(2, r = g != null && g !== "" && o === g);
  }, [
    g,
    _,
    r,
    i,
    m,
    C,
    a,
    f,
    h,
    O,
    o,
    u,
    E,
    c
  ];
}
class Cd extends Me {
  constructor(e) {
    super(), De(this, e, vd, Id, ye, {
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
function wl(n, e, t) {
  const i = n.slice();
  return i[11] = e[t], i[13] = t, i;
}
function Ad(n) {
  let e = (
    /*d*/
    n[11].label + ""
  ), t;
  return {
    c() {
      t = ot(e);
    },
    m(i, r) {
      j(i, t, r);
    },
    p(i, r) {
      r & /*data*/
      2 && e !== (e = /*d*/
      i[11].label + "") && St(t, e);
    },
    d(i) {
      i && V(t);
    }
  };
}
function Pl(n) {
  let e, t;
  return e = new Cd({
    props: {
      value: (
        /*d*/
        n[11].value
      ),
      $$slots: { default: [Ad] },
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
      te(e.$$.fragment);
    },
    m(i, r) {
      $(e, i, r), t = !0;
    },
    p(i, r) {
      const l = {};
      r & /*data*/
      2 && (l.value = /*d*/
      i[11].value), r & /*$$scope, data*/
      16386 && (l.$$scope = { dirty: r, ctx: i }), e.$set(l);
    },
    i(i) {
      t || (A(e.$$.fragment, i), t = !0);
    },
    o(i) {
      S(e.$$.fragment, i), t = !1;
    },
    d(i) {
      ee(e, i);
    }
  };
}
function Ed(n) {
  let e, t, i = Vt(
    /*data*/
    n[1]
  ), r = [];
  for (let a = 0; a < i.length; a += 1)
    r[a] = Pl(wl(n, i, a));
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
      j(a, e, s), t = !0;
    },
    p(a, s) {
      if (s & /*data, setSelectedIndex*/
      34) {
        i = Vt(
          /*data*/
          a[1]
        );
        let o;
        for (o = 0; o < i.length; o += 1) {
          const u = wl(a, i, o);
          r[o] ? (r[o].p(u, s), A(r[o], 1)) : (r[o] = Pl(u), r[o].c(), A(r[o], 1), r[o].m(e.parentNode, e));
        }
        for (Ve(), o = i.length; o < r.length; o += 1)
          l(o);
        je();
      }
    },
    i(a) {
      if (!t) {
        for (let s = 0; s < i.length; s += 1)
          A(r[s]);
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
      a && V(e), hr(r, a);
    }
  };
}
function yd(n) {
  let e, t, i;
  function r(a) {
    n[10](a);
  }
  let l = {
    disabled: (
      /*disabled*/
      n[4]
    ),
    key: Sd,
    label: (
      /*label*/
      n[2]
    ),
    style: "width: 100%;",
    required: (
      /*required*/
      n[3]
    ),
    $$slots: { default: [Ed] },
    $$scope: { ctx: n }
  };
  return (
    /*value*/
    n[0] !== void 0 && (l.value = /*value*/
    n[0]), e = new _d({ props: l }), se.push(() => _t(e, "value", r)), {
      c() {
        te(e.$$.fragment);
      },
      m(a, s) {
        $(e, a, s), i = !0;
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
        a[0], gt(() => t = !1)), e.$set(o);
      },
      i(a) {
        i || (A(e.$$.fragment, a), i = !0);
      },
      o(a) {
        S(e.$$.fragment, a), i = !1;
      },
      d(a) {
        ee(e, a);
      }
    }
  );
}
const Sd = (n) => `${n ?? ""}`;
function Td(n, e, t) {
  let { data: i = [] } = e, { placeholder: r = "" } = e, { label: l = "" } = e, { description: a = "" } = e, { value: s = "" } = e, { required: o = !1 } = e, { size: u = "sm" } = e, { selectedOptionIndex: c = -1 } = e, { disabled: d = !1 } = e;
  function f(g) {
    return () => t(6, c = g);
  }
  function h(g) {
    s = g, t(0, s);
  }
  return n.$$set = (g) => {
    "data" in g && t(1, i = g.data), "placeholder" in g && t(7, r = g.placeholder), "label" in g && t(2, l = g.label), "description" in g && t(8, a = g.description), "value" in g && t(0, s = g.value), "required" in g && t(3, o = g.required), "size" in g && t(9, u = g.size), "selectedOptionIndex" in g && t(6, c = g.selectedOptionIndex), "disabled" in g && t(4, d = g.disabled);
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
class aa extends Me {
  constructor(e) {
    super(), De(this, e, Td, yd, ye, {
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
function Ld(n) {
  return n ? n.scrollHeight > n.offsetHeight : !1;
}
function Od(n) {
  return n ? n.scrollTop === 0 : !1;
}
function Rd(n) {
  return n ? Math.ceil(n.scrollHeight - n.scrollTop) === n.clientHeight : !1;
}
function kd(n) {
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
var Dd = (
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
}, qn = {
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
}, xi = {
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
var fi;
(function(n) {
  n.POLL_SCROLL_POS = "poll_scroll_position", n.POLL_LAYOUT_CHANGE = "poll_layout_change";
})(fi || (fi = {}));
var Md = (
  /** @class */
  function(n) {
    ct(e, n);
    function e(t) {
      var i = n.call(this, We(We({}, e.defaultAdapter), t)) || this;
      return i.dialogOpen = !1, i.isFullscreen = !1, i.animationFrame = 0, i.animationTimer = 0, i.escapeKeyAction = qn.CLOSE_ACTION, i.scrimClickAction = qn.CLOSE_ACTION, i.autoStackButtons = !0, i.areButtonsStacked = !1, i.suppressDefaultPressSelector = qn.SUPPRESS_DEFAULT_PRESS_SELECTOR, i.animFrame = new Dd(), i.contentScrollHandler = function() {
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
        return qn;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return xi;
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
        }, xi.DIALOG_ANIMATION_OPEN_TIME_MS);
      });
    }, e.prototype.close = function(t) {
      var i = this;
      t === void 0 && (t = ""), this.dialogOpen && (this.dialogOpen = !1, this.adapter.notifyClosing(t), this.adapter.addClass(lt.CLOSING), this.adapter.removeClass(lt.OPEN), this.adapter.removeBodyClass(lt.SCROLL_LOCK), this.isFullscreen && this.adapter.deregisterContentEventHandler("scroll", this.contentScrollHandler), this.adapter.deregisterWindowEventHandler("resize", this.windowResizeHandler), this.adapter.deregisterWindowEventHandler("orientationchange", this.windowOrientationChangeHandler), cancelAnimationFrame(this.animationFrame), this.animationFrame = 0, clearTimeout(this.animationTimer), this.animationTimer = setTimeout(function() {
        i.adapter.releaseFocus(), i.handleAnimationTimerEnd(), i.adapter.notifyClosed(t);
      }, xi.DIALOG_ANIMATION_CLOSE_TIME_MS));
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
      this.animFrame.request(fi.POLL_LAYOUT_CHANGE, function() {
        t.layoutInternal();
      });
    }, e.prototype.handleClick = function(t) {
      var i = this.adapter.eventTargetMatches(t.target, qn.SCRIM_SELECTOR);
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
      this.animFrame.request(fi.POLL_SCROLL_POS, function() {
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
const { document: Fd, window: Hl } = qs, Nd = (n) => ({}), Bl = (n) => ({});
function Vl(n) {
  let e, t, i;
  return {
    c() {
      e = le("div"), B(e, "class", "mdc-dialog__surface-scrim");
    },
    m(r, l) {
      j(r, e, l), t || (i = oe(
        e,
        "transitionend",
        /*transitionend_handler*/
        n[32]
      ), t = !0);
    },
    p: nt,
    d(r) {
      r && V(e), t = !1, i();
    }
  };
}
function Ud(n) {
  let e, t, i, r, l, a, s, o, u, c, d, f, h, g, _;
  const m = (
    /*#slots*/
    n[29].default
  ), C = ge(
    m,
    n,
    /*$$scope*/
    n[28],
    null
  );
  let I = (
    /*fullscreen*/
    n[5] && Vl(n)
  ), O = [
    {
      class: a = re({
        [
          /*surface$class*/
          n[9]
        ]: !0,
        "mdc-dialog__surface": !0
      })
    },
    { role: "alertdialog" },
    { "aria-modal": "true" },
    Pe(
      /*$$restProps*/
      n[19],
      "surface$"
    )
  ], E = {};
  for (let b = 0; b < O.length; b += 1)
    E = z(E, O[b]);
  let L = [
    {
      class: s = re({
        [
          /*container$class*/
          n[8]
        ]: !0,
        "mdc-dialog__container": !0
      })
    },
    Pe(
      /*$$restProps*/
      n[19],
      "container$"
    )
  ], k = {};
  for (let b = 0; b < L.length; b += 1)
    k = z(k, L[b]);
  let p = [
    {
      class: c = re({
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
    jt(
      /*$$restProps*/
      n[19],
      ["container$", "surface$"]
    )
  ], y = {};
  for (let b = 0; b < p.length; b += 1)
    y = z(y, p[b]);
  const M = (
    /*#slots*/
    n[29].over
  ), v = ge(
    M,
    n,
    /*$$scope*/
    n[28],
    Bl
  );
  return {
    c() {
      e = ce(), t = le("div"), i = le("div"), r = le("div"), C && C.c(), l = ce(), I && I.c(), o = ce(), u = le("div"), f = ce(), v && v.c(), ae(r, E), ae(i, k), B(u, "class", "mdc-dialog__scrim"), ae(t, y);
    },
    m(b, D) {
      j(b, e, D), j(b, t, D), ne(t, i), ne(i, r), C && C.m(r, null), ne(r, l), I && I.m(r, null), ne(t, o), ne(t, u), n[33](t), j(b, f, D), v && v.m(b, D), h = !0, g || (_ = [
        oe(
          Hl,
          "resize",
          /*resize_handler*/
          n[30]
        ),
        oe(
          Hl,
          "orientationchange",
          /*orientationchange_handler*/
          n[31]
        ),
        oe(Fd.body, "keydown", function() {
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
        de(d = Qe.call(
          null,
          t,
          /*use*/
          n[1]
        )),
        de(
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
        oe(t, "keydown", function() {
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
      ], g = !0);
    },
    p(b, D) {
      n = b, C && C.p && (!h || D[0] & /*$$scope*/
      268435456) && be(
        C,
        m,
        n,
        /*$$scope*/
        n[28],
        h ? _e(
          m,
          /*$$scope*/
          n[28],
          D,
          null
        ) : Ie(
          /*$$scope*/
          n[28]
        ),
        null
      ), /*fullscreen*/
      n[5] ? I ? I.p(n, D) : (I = Vl(n), I.c(), I.m(r, null)) : I && (I.d(1), I = null), ae(r, E = fe(O, [
        (!h || D[0] & /*surface$class*/
        512 && a !== (a = re({
          [
            /*surface$class*/
            n[9]
          ]: !0,
          "mdc-dialog__surface": !0
        }))) && { class: a },
        { role: "alertdialog" },
        { "aria-modal": "true" },
        D[0] & /*$$restProps*/
        524288 && Pe(
          /*$$restProps*/
          n[19],
          "surface$"
        )
      ])), ae(i, k = fe(L, [
        (!h || D[0] & /*container$class*/
        256 && s !== (s = re({
          [
            /*container$class*/
            n[8]
          ]: !0,
          "mdc-dialog__container": !0
        }))) && { class: s },
        D[0] & /*$$restProps*/
        524288 && Pe(
          /*$$restProps*/
          n[19],
          "container$"
        )
      ])), ae(t, y = fe(p, [
        (!h || D[0] & /*className, autoStackButtons, fullscreen, sheet, noContentPadding, selection, internalClasses*/
        4348 && c !== (c = re({
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
        524288 && jt(
          /*$$restProps*/
          n[19],
          ["container$", "surface$"]
        )
      ])), d && he(d.update) && D[0] & /*use*/
      2 && d.update.call(
        null,
        /*use*/
        n[1]
      ), v && v.p && (!h || D[0] & /*$$scope*/
      268435456) && be(
        v,
        M,
        n,
        /*$$scope*/
        n[28],
        h ? _e(
          M,
          /*$$scope*/
          n[28],
          D,
          Nd
        ) : Ie(
          /*$$scope*/
          n[28]
        ),
        Bl
      );
    },
    i(b) {
      h || (A(C, b), A(v, b), h = !0);
    },
    o(b) {
      S(C, b), S(v, b), h = !1;
    },
    d(b) {
      b && (V(e), V(t), V(f)), C && C.d(b), I && I.d(), n[33](null), v && v.d(b), g = !1, Ze(_);
    }
  };
}
function wd(n, e, t) {
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
  let r = me(e, i), l, a, { $$slots: s = {}, $$scope: o } = e;
  var u;
  const { FocusTrap: c } = go, { closest: d, matches: f } = $n, h = tt(Je());
  let { use: g = [] } = e, { class: _ = "" } = e, { open: m = !1 } = e, { selection: C = !1 } = e, { escapeKeyAction: I = "close" } = e, { scrimClickAction: O = "close" } = e, { autoStackButtons: E = !0 } = e, { fullscreen: L = !1 } = e, { sheet: k = !1 } = e, { noContentPadding: p = !1 } = e, { container$class: y = "" } = e, { surface$class: M = "" } = e, v, b, D = {}, R, w = Lt(!1);
  it(n, w, (F) => t(37, a = F));
  let q = qe("SMUI:dialog:aboveFullscreen"), U = (u = qe("SMUI:dialog:aboveFullscreenShown")) !== null && u !== void 0 ? u : Lt(!1);
  it(n, U, (F) => t(27, l = F));
  let G = qe("SMUI:addLayoutListener"), N, T = [], Q = (F) => (T.push(F), () => {
    const x = T.indexOf(F);
    x >= 0 && T.splice(x, 1);
  });
  He("SMUI:dialog:actions:reversed", w), He("SMUI:addLayoutListener", Q), He("SMUI:dialog:selection", C), He("SMUI:dialog:aboveFullscreen", q || L), He("SMUI:dialog:aboveFullscreenShown", U), k && He("SMUI:icon-button:context", "dialog:sheet"), G && (N = G(ft));
  let Re = l;
  ut(() => {
    var F;
    return R = new c(
      v,
      {
        initialFocusEl: (F = Te()) !== null && F !== void 0 ? F : void 0
      }
    ), t(10, b = new Md({
      addBodyClass: (x) => document.body.classList.add(x),
      addClass: ve,
      areButtonsStacked: () => kd(K()),
      clickDefaultButton: () => {
        const x = J();
        x && x.click();
      },
      eventTargetMatches: (x, Z) => x ? f(x, Z) : !1,
      getActionFromEvent: (x) => {
        if (!x.target)
          return "";
        const Z = d(x.target, "[data-mdc-dialog-action]");
        return Z && Z.getAttribute("data-mdc-dialog-action");
      },
      getInitialFocusEl: Te,
      hasClass: Fe,
      isContentScrollable: () => Ld(Ce()),
      notifyClosed: (x) => {
        t(0, m = !1), pe(Y(), "SMUIDialog:closed", x ? { action: x } : {}, void 0, !0);
      },
      notifyClosing: (x) => pe(Y(), "SMUIDialog:closing", x ? { action: x } : {}, void 0, !0),
      notifyOpened: () => pe(Y(), "SMUIDialog:opened", {}, void 0, !0),
      notifyOpening: () => pe(Y(), "SMUIDialog:opening", {}, void 0, !0),
      releaseFocus: () => R.releaseFocus(),
      removeBodyClass: (x) => document.body.classList.remove(x),
      removeClass: ze,
      reverseButtons: () => {
        Ot(w, a = !0, a);
      },
      trapFocus: () => R.trapFocus(),
      registerContentEventHandler: (x, Z) => {
        const Be = Ce();
        Be instanceof HTMLElement && Be.addEventListener(x, Z);
      },
      deregisterContentEventHandler: (x, Z) => {
        const Be = Ce();
        Be instanceof HTMLElement && Be.removeEventListener(x, Z);
      },
      isScrollableContentAtTop: () => Od(Ce()),
      isScrollableContentAtBottom: () => Rd(Ce()),
      registerWindowEventHandler: (x, Z) => {
        window.addEventListener(x, Z);
      },
      deregisterWindowEventHandler: (x, Z) => {
        window.removeEventListener(x, Z);
      }
    })), b.init(), () => {
      b.destroy();
    };
  }), Wt(() => {
    N && N();
  });
  function Fe(F) {
    return F in D ? D[F] : Y().classList.contains(F);
  }
  function ve(F) {
    D[F] || t(12, D[F] = !0, D);
  }
  function ze(F) {
    (!(F in D) || D[F]) && t(12, D[F] = !1, D);
  }
  function K() {
    return [].slice.call(v.querySelectorAll(".mdc-dialog__button"));
  }
  function J() {
    return v.querySelector("[data-mdc-dialog-button-default]");
  }
  function Ce() {
    return v.querySelector(".mdc-dialog__content");
  }
  function Te() {
    return v.querySelector("[data-mdc-dialog-initial-focus]");
  }
  function Ne() {
    q && Ot(U, l = !0, l), requestAnimationFrame(() => {
      T.forEach((F) => F());
    });
  }
  function ie() {
    T.forEach((F) => F());
  }
  function W() {
    q && Ot(U, l = !1, l);
  }
  function Ye() {
    return m;
  }
  function Ge(F) {
    t(0, m = F);
  }
  function ft() {
    return b.layout();
  }
  function Y() {
    return v;
  }
  const Ee = () => m && b && b.layout(), Ke = () => m && b && b.layout(), Ue = () => b && b.handleSurfaceScrimTransitionEnd();
  function Et(F) {
    se[F ? "unshift" : "push"](() => {
      v = F, t(11, v);
    });
  }
  return n.$$set = (F) => {
    e = z(z({}, e), et(F)), t(19, r = me(e, i)), "use" in F && t(1, g = F.use), "class" in F && t(2, _ = F.class), "open" in F && t(0, m = F.open), "selection" in F && t(3, C = F.selection), "escapeKeyAction" in F && t(20, I = F.escapeKeyAction), "scrimClickAction" in F && t(21, O = F.scrimClickAction), "autoStackButtons" in F && t(4, E = F.autoStackButtons), "fullscreen" in F && t(5, L = F.fullscreen), "sheet" in F && t(6, k = F.sheet), "noContentPadding" in F && t(7, p = F.noContentPadding), "container$class" in F && t(8, y = F.container$class), "surface$class" in F && t(9, M = F.surface$class), "$$scope" in F && t(28, o = F.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty[0] & /*instance, escapeKeyAction*/
    1049600 && b && b.getEscapeKeyAction() !== I && b.setEscapeKeyAction(I), n.$$.dirty[0] & /*instance, scrimClickAction*/
    2098176 && b && b.getScrimClickAction() !== O && b.setScrimClickAction(O), n.$$.dirty[0] & /*instance, autoStackButtons*/
    1040 && b && b.getAutoStackButtons() !== E && b.setAutoStackButtons(E), n.$$.dirty[0] & /*autoStackButtons*/
    16 && (E || Ot(w, a = !0, a)), n.$$.dirty[0] & /*instance, open*/
    1025 && b && b.isOpen() !== m && (m ? b.open({
      isAboveFullscreenDialog: !!q
    }) : b.close()), n.$$.dirty[0] & /*fullscreen, instance, previousAboveFullscreenShown, $aboveFullscreenShown*/
    201327648 && L && b && Re !== l && (t(26, Re = l), l ? b.showSurfaceScrim() : b.hideSurfaceScrim());
  }, [
    m,
    g,
    _,
    C,
    E,
    L,
    k,
    p,
    y,
    M,
    b,
    v,
    D,
    h,
    w,
    U,
    Ne,
    ie,
    W,
    r,
    I,
    O,
    Ye,
    Ge,
    ft,
    Y,
    Re,
    l,
    o,
    s,
    Ee,
    Ke,
    Ue,
    Et
  ];
}
class Pd extends Me {
  constructor(e) {
    super(), De(
      this,
      e,
      wd,
      Ud,
      ye,
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
At({
  class: "mdc-dialog__header",
  tag: "div",
  contexts: {
    "SMUI:icon-button:context": "dialog:header"
  }
});
At({
  class: "mdc-dialog__title",
  tag: "h2"
});
const Hd = At({
  class: "mdc-dialog__content",
  tag: "div"
}), Bd = At({
  class: "mdc-dialog__actions",
  tag: "div",
  classMap: {
    "smui-dialog__actions--reversed": "SMUI:dialog:actions:reversed"
  },
  contexts: {
    "SMUI:button:context": "dialog:action"
  }
}), Vd = (n) => ({}), jl = (n) => ({}), jd = (n) => ({}), Gl = (n) => ({}), Gd = (n) => ({}), Kl = (n) => ({});
function Kd(n) {
  let e;
  const t = (
    /*#slots*/
    n[1].content
  ), i = ge(
    t,
    n,
    /*$$scope*/
    n[4],
    Gl
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
      16) && be(
        i,
        t,
        r,
        /*$$scope*/
        r[4],
        e ? _e(
          t,
          /*$$scope*/
          r[4],
          l,
          jd
        ) : Ie(
          /*$$scope*/
          r[4]
        ),
        Gl
      );
    },
    i(r) {
      e || (A(i, r), e = !0);
    },
    o(r) {
      S(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function qd(n) {
  let e;
  const t = (
    /*#slots*/
    n[1].actions
  ), i = ge(
    t,
    n,
    /*$$scope*/
    n[4],
    jl
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
      16) && be(
        i,
        t,
        r,
        /*$$scope*/
        r[4],
        e ? _e(
          t,
          /*$$scope*/
          r[4],
          l,
          Vd
        ) : Ie(
          /*$$scope*/
          r[4]
        ),
        jl
      );
    },
    i(r) {
      e || (A(i, r), e = !0);
    },
    o(r) {
      S(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function Wd(n) {
  let e, t, i, r, l, a;
  const s = (
    /*#slots*/
    n[1].title
  ), o = ge(
    s,
    n,
    /*$$scope*/
    n[4],
    Kl
  );
  return i = new Hd({
    props: {
      id: "large-scroll-content",
      $$slots: { default: [Kd] },
      $$scope: { ctx: n }
    }
  }), l = new Bd({
    props: {
      $$slots: { default: [qd] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      e = le("div"), o && o.c(), t = ce(), te(i.$$.fragment), r = ce(), te(l.$$.fragment), B(e, "class", "dialog-title svelte-4sevka");
    },
    m(u, c) {
      j(u, e, c), o && o.m(e, null), j(u, t, c), $(i, u, c), j(u, r, c), $(l, u, c), a = !0;
    },
    p(u, c) {
      o && o.p && (!a || c & /*$$scope*/
      16) && be(
        o,
        s,
        u,
        /*$$scope*/
        u[4],
        a ? _e(
          s,
          /*$$scope*/
          u[4],
          c,
          Gd
        ) : Ie(
          /*$$scope*/
          u[4]
        ),
        Kl
      );
      const d = {};
      c & /*$$scope*/
      16 && (d.$$scope = { dirty: c, ctx: u }), i.$set(d);
      const f = {};
      c & /*$$scope*/
      16 && (f.$$scope = { dirty: c, ctx: u }), l.$set(f);
    },
    i(u) {
      a || (A(o, u), A(i.$$.fragment, u), A(l.$$.fragment, u), a = !0);
    },
    o(u) {
      S(o, u), S(i.$$.fragment, u), S(l.$$.fragment, u), a = !1;
    },
    d(u) {
      u && (V(e), V(t), V(r)), o && o.d(u), ee(i, u), ee(l, u);
    }
  };
}
function zd(n) {
  let e, t, i;
  function r(a) {
    n[2](a);
  }
  let l = {
    "aria-labelledby": "large-scroll-title",
    "aria-describedby": "large-scroll-content",
    surface$style: "width: 1080px; max-width: calc(100vw - 32px);",
    $$slots: { default: [Wd] },
    $$scope: { ctx: n }
  };
  return (
    /*open*/
    n[0] !== void 0 && (l.open = /*open*/
    n[0]), e = new Pd({ props: l }), se.push(() => _t(e, "open", r)), e.$on(
      "SMUIDialog:closed",
      /*SMUIDialog_closed_handler*/
      n[3]
    ), {
      c() {
        te(e.$$.fragment);
      },
      m(a, s) {
        $(e, a, s), i = !0;
      },
      p(a, [s]) {
        const o = {};
        s & /*$$scope*/
        16 && (o.$$scope = { dirty: s, ctx: a }), !t && s & /*open*/
        1 && (t = !0, o.open = /*open*/
        a[0], gt(() => t = !1)), e.$set(o);
      },
      i(a) {
        i || (A(e.$$.fragment, a), i = !0);
      },
      o(a) {
        S(e.$$.fragment, a), i = !1;
      },
      d(a) {
        ee(e, a);
      }
    }
  );
}
function Yd(n, e, t) {
  let { $$slots: i = {}, $$scope: r } = e, { open: l = !1 } = e;
  function a(o) {
    l = o, t(0, l);
  }
  const s = (o) => t(0, l = !1);
  return n.$$set = (o) => {
    "open" in o && t(0, l = o.open), "$$scope" in o && t(4, r = o.$$scope);
  }, [l, i, a, s, r];
}
class Xd extends Me {
  constructor(e) {
    super(), De(this, e, Yd, zd, ye, { open: 0 });
  }
}
function Zd(n) {
  let e, t, i, r, l, a, s, o, u;
  return {
    c() {
      e = le("div"), t = le("input"), i = ce(), r = le("label"), l = ot(
        /*label*/
        n[1]
      ), a = ce(), s = le("span"), B(t, "type", "datetime-local"), B(t, "id", "datetime-picker"), B(t, "class", "custom-text-field__input svelte-ar6zwk"), B(t, "placeholder", ""), B(r, "for", "datetime-picker"), B(r, "class", "custom-floating-label svelte-ar6zwk"), B(s, "class", "custom-line svelte-ar6zwk"), B(e, "class", "custom-text-field svelte-ar6zwk");
    },
    m(c, d) {
      j(c, e, d), ne(e, t), dn(
        t,
        /*value*/
        n[0]
      ), ne(e, i), ne(e, r), ne(r, l), ne(e, a), ne(e, s), o || (u = [
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
      1 && dn(
        t,
        /*value*/
        c[0]
      ), d & /*label*/
      2 && St(
        l,
        /*label*/
        c[1]
      );
    },
    i: nt,
    o: nt,
    d(c) {
      c && V(e), o = !1, Ze(u);
    }
  };
}
function Qd(n, e, t) {
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
class Jd extends Me {
  constructor(e) {
    super(), De(this, e, Qd, Zd, ye, { label: 1, value: 0 });
  }
}
function xd(n) {
  let e, t, i, r, l, a;
  const s = (
    /*#slots*/
    n[12].default
  ), o = ge(
    s,
    n,
    /*$$scope*/
    n[11],
    null
  );
  let u = [
    {
      class: t = re({
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
    c = z(c, u[d]);
  return {
    c() {
      e = le("div"), o && o.c(), ae(e, c);
    },
    m(d, f) {
      j(d, e, f), o && o.m(e, null), n[13](e), r = !0, l || (a = [
        de(i = Qe.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        de(
          /*forwardEvents*/
          n[8].call(null, e)
        )
      ], l = !0);
    },
    p(d, [f]) {
      o && o.p && (!r || f & /*$$scope*/
      2048) && be(
        o,
        s,
        d,
        /*$$scope*/
        d[11],
        r ? _e(
          s,
          /*$$scope*/
          d[11],
          f,
          null
        ) : Ie(
          /*$$scope*/
          d[11]
        ),
        null
      ), ae(e, c = fe(u, [
        (!r || f & /*className, variant, elevation, square, color, transition*/
        126 && t !== (t = re({
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
      ])), i && he(i.update) && f & /*use*/
      1 && i.update.call(
        null,
        /*use*/
        d[0]
      );
    },
    i(d) {
      r || (A(o, d), r = !0);
    },
    o(d) {
      S(o, d), r = !1;
    },
    d(d) {
      d && V(e), o && o.d(d), n[13](null), l = !1, Ze(a);
    }
  };
}
function $d(n, e, t) {
  const i = ["use", "class", "variant", "square", "color", "elevation", "transition", "getElement"];
  let r = me(e, i), { $$slots: l = {}, $$scope: a } = e;
  const s = tt(Je());
  let { use: o = [] } = e, { class: u = "" } = e, { variant: c = "raised" } = e, { square: d = !1 } = e, { color: f = "default" } = e, { elevation: h = 1 } = e, { transition: g = !1 } = e, _;
  function m() {
    return _;
  }
  function C(I) {
    se[I ? "unshift" : "push"](() => {
      _ = I, t(7, _);
    });
  }
  return n.$$set = (I) => {
    e = z(z({}, e), et(I)), t(9, r = me(e, i)), "use" in I && t(0, o = I.use), "class" in I && t(1, u = I.class), "variant" in I && t(2, c = I.variant), "square" in I && t(3, d = I.square), "color" in I && t(4, f = I.color), "elevation" in I && t(5, h = I.elevation), "transition" in I && t(6, g = I.transition), "$$scope" in I && t(11, a = I.$$scope);
  }, [
    o,
    u,
    c,
    d,
    f,
    h,
    g,
    _,
    s,
    r,
    m,
    a,
    l,
    C
  ];
}
class ef extends Me {
  constructor(e) {
    super(), De(this, e, $d, xd, ye, {
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
At({
  class: "smui-paper__content",
  tag: "div"
});
At({
  class: "smui-paper__title",
  tag: "h5"
});
At({
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
var wt = {
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
}, Wn = {
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
var tf = (
  /** @class */
  function(n) {
    ct(e, n);
    function e(t) {
      var i = n.call(this, We(We({}, e.defaultAdapter), t)) || this;
      return i.observer = null, i;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return wt;
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
      this.determinate = !this.adapter.hasClass(wt.INDETERMINATE_CLASS), this.adapter.addClass(wt.ANIMATION_READY_CLASS), this.progress = 0, this.buffer = 1, this.observer = this.adapter.attachResizeObserver(function(i) {
        var r, l;
        if (!t.determinate)
          try {
            for (var a = yt(i), s = a.next(); !s.done; s = a.next()) {
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
        this.adapter.removeClass(wt.INDETERMINATE_CLASS), this.adapter.setAttribute(Kt.ARIA_VALUENOW, this.progress.toString()), this.adapter.setAttribute(Kt.ARIA_VALUEMAX, "1"), this.adapter.setAttribute(Kt.ARIA_VALUEMIN, "0"), this.setPrimaryBarProgress(this.progress), this.setBufferBarProgress(this.buffer);
        return;
      }
      this.observer && this.calculateAndSetDimensions(this.adapter.getWidth()), this.adapter.addClass(wt.INDETERMINATE_CLASS), this.adapter.removeAttribute(Kt.ARIA_VALUENOW), this.adapter.removeAttribute(Kt.ARIA_VALUEMAX), this.adapter.removeAttribute(Kt.ARIA_VALUEMIN), this.setPrimaryBarProgress(1), this.setBufferBarProgress(1);
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
      this.adapter.removeClass(wt.CLOSED_CLASS), this.adapter.removeClass(wt.CLOSED_ANIMATION_OFF_CLASS), this.adapter.removeAttribute(Kt.ARIA_HIDDEN);
    }, e.prototype.close = function() {
      this.adapter.addClass(wt.CLOSED_CLASS), this.adapter.setAttribute(Kt.ARIA_HIDDEN, "true");
    }, e.prototype.isClosed = function() {
      return this.adapter.hasClass(wt.CLOSED_CLASS);
    }, e.prototype.handleTransitionEnd = function() {
      this.adapter.hasClass(wt.CLOSED_CLASS) && this.adapter.addClass(wt.CLOSED_ANIMATION_OFF_CLASS);
    }, e.prototype.destroy = function() {
      n.prototype.destroy.call(this), this.observer && this.observer.disconnect();
    }, e.prototype.restartAnimation = function() {
      this.adapter.removeClass(wt.ANIMATION_READY_CLASS), this.adapter.forceLayout(), this.adapter.addClass(wt.ANIMATION_READY_CLASS);
    }, e.prototype.setPrimaryBarProgress = function(t) {
      var i = "scaleX(" + t + ")", r = typeof window < "u" ? yc(window, "transform") : "transform";
      this.adapter.setPrimaryBarStyle(r, i);
    }, e.prototype.setBufferBarProgress = function(t) {
      var i = t * 100 + "%";
      this.adapter.setBufferBarStyle(Kt.FLEX_BASIS, i);
    }, e.prototype.calculateAndSetDimensions = function(t) {
      var i = t * Wn.PRIMARY_HALF, r = t * Wn.PRIMARY_FULL, l = t * Wn.SECONDARY_QUARTER, a = t * Wn.SECONDARY_HALF, s = t * Wn.SECONDARY_FULL;
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
var en = {
  HEADER_CELL_SORTED: "mdc-data-table__header-cell--sorted",
  HEADER_CELL_SORTED_DESCENDING: "mdc-data-table__header-cell--sorted-descending",
  IN_PROGRESS: "mdc-data-table--in-progress",
  ROW_SELECTED: "mdc-data-table__row--selected"
}, ql = {
  ARIA_SELECTED: "aria-selected",
  ARIA_SORT: "aria-sort"
}, gn = {
  ARIA_SELECTED: ql.ARIA_SELECTED,
  ARIA_SORT: ql.ARIA_SORT
}, Pt;
(function(n) {
  n.ASCENDING = "ascending", n.DESCENDING = "descending", n.NONE = "none", n.OTHER = "other";
})(Pt || (Pt = {}));
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
var nf = (
  /** @class */
  function(n) {
    ct(e, n);
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
      return xs(this, void 0, void 0, function() {
        return _r(this, function(t) {
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
        a !== r && (this.adapter.removeClassNameByHeaderCellIndex(a, en.HEADER_CELL_SORTED), this.adapter.removeClassNameByHeaderCellIndex(a, en.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(a, gn.ARIA_SORT, Pt.NONE), this.adapter.setSortStatusLabelByHeaderCellIndex(a, Pt.NONE));
      this.adapter.setClassNameByHeaderCellIndex(r, en.HEADER_CELL_SORTED);
      var s = this.adapter.getAttributeByHeaderCellIndex(r, gn.ARIA_SORT), o = Pt.NONE;
      s === Pt.ASCENDING ? (this.adapter.setClassNameByHeaderCellIndex(r, en.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(r, gn.ARIA_SORT, Pt.DESCENDING), o = Pt.DESCENDING) : s === Pt.DESCENDING ? (this.adapter.removeClassNameByHeaderCellIndex(r, en.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(r, gn.ARIA_SORT, Pt.ASCENDING), o = Pt.ASCENDING) : (this.adapter.setAttributeByHeaderCellIndex(r, gn.ARIA_SORT, Pt.ASCENDING), o = Pt.ASCENDING), this.adapter.setSortStatusLabelByHeaderCellIndex(r, o), this.adapter.notifySortAction({
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
      }), this.adapter.addClass(en.IN_PROGRESS);
    }, e.prototype.hideProgress = function() {
      this.adapter.removeClass(en.IN_PROGRESS);
    }, e.prototype.setHeaderRowCheckboxState = function() {
      this.adapter.getSelectedRowCount() === 0 ? (this.adapter.setHeaderRowCheckboxChecked(!1), this.adapter.setHeaderRowCheckboxIndeterminate(!1)) : this.adapter.getSelectedRowCount() === this.adapter.getRowCount() ? (this.adapter.setHeaderRowCheckboxChecked(!0), this.adapter.setHeaderRowCheckboxIndeterminate(!1)) : (this.adapter.setHeaderRowCheckboxIndeterminate(!0), this.adapter.setHeaderRowCheckboxChecked(!1));
    }, e.prototype.selectRowAtIndex = function(t, i) {
      i ? (this.adapter.addClassAtRowIndex(t, en.ROW_SELECTED), this.adapter.setAttributeAtRowIndex(t, gn.ARIA_SELECTED, "true")) : (this.adapter.removeClassAtRowIndex(t, en.ROW_SELECTED), this.adapter.setAttributeAtRowIndex(t, gn.ARIA_SELECTED, "false"));
    }, e;
  }(Tt)
);
const rf = (n) => ({}), Wl = (n) => ({}), lf = (n) => ({}), zl = (n) => ({});
function Yl(n) {
  let e, t, i, r, l;
  const a = (
    /*#slots*/
    n[36].progress
  ), s = ge(
    a,
    n,
    /*$$scope*/
    n[35],
    zl
  );
  return {
    c() {
      e = le("div"), t = le("div"), i = ce(), s && s.c(), B(t, "class", "mdc-data-table__scrim"), B(e, "class", "mdc-data-table__progress-indicator"), B(e, "style", r = Object.entries(
        /*progressIndicatorStyles*/
        n[13]
      ).map(Xl).join(" "));
    },
    m(o, u) {
      j(o, e, u), ne(e, t), ne(e, i), s && s.m(e, null), l = !0;
    },
    p(o, u) {
      s && s.p && (!l || u[1] & /*$$scope*/
      16) && be(
        s,
        a,
        o,
        /*$$scope*/
        o[35],
        l ? _e(
          a,
          /*$$scope*/
          o[35],
          u,
          lf
        ) : Ie(
          /*$$scope*/
          o[35]
        ),
        zl
      ), (!l || u[0] & /*progressIndicatorStyles*/
      8192 && r !== (r = Object.entries(
        /*progressIndicatorStyles*/
        o[13]
      ).map(Xl).join(" "))) && B(e, "style", r);
    },
    i(o) {
      l || (A(s, o), l = !0);
    },
    o(o) {
      S(s, o), l = !1;
    },
    d(o) {
      o && V(e), s && s.d(o);
    }
  };
}
function sf(n) {
  let e, t, i, r, l, a, s, o, u, c, d, f, h, g;
  const _ = (
    /*#slots*/
    n[36].default
  ), m = ge(
    _,
    n,
    /*$$scope*/
    n[35],
    null
  );
  let C = [
    {
      class: r = re({
        [
          /*table$class*/
          n[6]
        ]: !0,
        "mdc-data-table__table": !0
      })
    },
    Pe(
      /*$$restProps*/
      n[25],
      "table$"
    )
  ], I = {};
  for (let v = 0; v < C.length; v += 1)
    I = z(I, C[v]);
  let O = [
    {
      class: a = re({
        [
          /*container$class*/
          n[4]
        ]: !0,
        "mdc-data-table__table-container": !0
      })
    },
    Pe(
      /*$$restProps*/
      n[25],
      "container$"
    )
  ], E = {};
  for (let v = 0; v < O.length; v += 1)
    E = z(E, O[v]);
  let L = (
    /*$$slots*/
    n[24].progress && Yl(n)
  );
  const k = (
    /*#slots*/
    n[36].paginate
  ), p = ge(
    k,
    n,
    /*$$scope*/
    n[35],
    Wl
  );
  let y = [
    {
      class: c = re({
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
    jt(
      /*$$restProps*/
      n[25],
      ["container$", "table$"]
    )
  ], M = {};
  for (let v = 0; v < y.length; v += 1)
    M = z(M, y[v]);
  return {
    c() {
      e = le("div"), t = le("div"), i = le("table"), m && m.c(), o = ce(), L && L.c(), u = ce(), p && p.c(), ae(i, I), ae(t, E), ae(e, M);
    },
    m(v, b) {
      j(v, e, b), ne(e, t), ne(t, i), m && m.m(i, null), n[37](t), ne(e, o), L && L.m(e, null), ne(e, u), p && p.m(e, null), n[38](e), f = !0, h || (g = [
        de(l = Qe.call(
          null,
          i,
          /*table$use*/
          n[5]
        )),
        de(s = Qe.call(
          null,
          t,
          /*container$use*/
          n[3]
        )),
        de(d = Qe.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        de(
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
    p(v, b) {
      m && m.p && (!f || b[1] & /*$$scope*/
      16) && be(
        m,
        _,
        v,
        /*$$scope*/
        v[35],
        f ? _e(
          _,
          /*$$scope*/
          v[35],
          b,
          null
        ) : Ie(
          /*$$scope*/
          v[35]
        ),
        null
      ), ae(i, I = fe(C, [
        (!f || b[0] & /*table$class*/
        64 && r !== (r = re({
          [
            /*table$class*/
            v[6]
          ]: !0,
          "mdc-data-table__table": !0
        }))) && { class: r },
        b[0] & /*$$restProps*/
        33554432 && Pe(
          /*$$restProps*/
          v[25],
          "table$"
        )
      ])), l && he(l.update) && b[0] & /*table$use*/
      32 && l.update.call(
        null,
        /*table$use*/
        v[5]
      ), ae(t, E = fe(O, [
        (!f || b[0] & /*container$class*/
        16 && a !== (a = re({
          [
            /*container$class*/
            v[4]
          ]: !0,
          "mdc-data-table__table-container": !0
        }))) && { class: a },
        b[0] & /*$$restProps*/
        33554432 && Pe(
          /*$$restProps*/
          v[25],
          "container$"
        )
      ])), s && he(s.update) && b[0] & /*container$use*/
      8 && s.update.call(
        null,
        /*container$use*/
        v[3]
      ), /*$$slots*/
      v[24].progress ? L ? (L.p(v, b), b[0] & /*$$slots*/
      16777216 && A(L, 1)) : (L = Yl(v), L.c(), A(L, 1), L.m(e, u)) : L && (Ve(), S(L, 1, 1, () => {
        L = null;
      }), je()), p && p.p && (!f || b[1] & /*$$scope*/
      16) && be(
        p,
        k,
        v,
        /*$$scope*/
        v[35],
        f ? _e(
          k,
          /*$$scope*/
          v[35],
          b,
          rf
        ) : Ie(
          /*$$scope*/
          v[35]
        ),
        Wl
      ), ae(e, M = fe(y, [
        (!f || b[0] & /*className, stickyHeader, internalClasses*/
        4102 && c !== (c = re({
          [
            /*className*/
            v[1]
          ]: !0,
          "mdc-data-table": !0,
          "mdc-data-table--sticky-header": (
            /*stickyHeader*/
            v[2]
          ),
          .../*internalClasses*/
          v[12]
        }))) && { class: c },
        b[0] & /*$$restProps*/
        33554432 && jt(
          /*$$restProps*/
          v[25],
          ["container$", "table$"]
        )
      ])), d && he(d.update) && b[0] & /*use*/
      1 && d.update.call(
        null,
        /*use*/
        v[0]
      );
    },
    i(v) {
      f || (A(m, v), A(L), A(p, v), f = !0);
    },
    o(v) {
      S(m, v), S(L), S(p, v), f = !1;
    },
    d(v) {
      v && V(e), m && m.d(v), n[37](null), L && L.d(), p && p.d(v), n[38](null), h = !1, Ze(g);
    }
  };
}
const Xl = ([n, e]) => `${n}: ${e};`;
function af(n, e, t) {
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
  let r = me(e, i), l, a, s, { $$slots: o = {}, $$scope: u } = e;
  const c = fr(o), { closest: d } = $n, f = tt(Je());
  let { use: h = [] } = e, { class: g = "" } = e, { stickyHeader: _ = !1 } = e, { sortable: m = !1 } = e, { sort: C = null } = e, { sortDirection: I = "ascending" } = e, { sortAscendingAriaLabel: O = "sorted, ascending" } = e, { sortDescendingAriaLabel: E = "sorted, descending" } = e, { container$use: L = [] } = e, { container$class: k = "" } = e, { table$use: p = [] } = e, { table$class: y = "" } = e, M, v, b, D, R, w = {}, q = { height: "auto", top: "initial" }, U = qe("SMUI:addLayoutListener"), G, N = !1, T = Lt(!1);
  it(n, T, (F) => t(34, l = F));
  let Q = Lt(C);
  it(n, Q, (F) => t(45, s = F));
  let Re = Lt(I);
  it(n, Re, (F) => t(44, a = F)), He("SMUI:checkbox:context", "data-table"), He("SMUI:linear-progress:context", "data-table"), He("SMUI:linear-progress:closed", T), He("SMUI:data-table:sortable", m), He("SMUI:data-table:sort", Q), He("SMUI:data-table:sortDirection", Re), He("SMUI:data-table:sortAscendingAriaLabel", O), He("SMUI:data-table:sortDescendingAriaLabel", E), U && (G = U(Ye));
  let Fe;
  ut(() => (t(7, v = new nf({
    addClass: J,
    removeClass: Ce,
    getHeaderCellElements: () => {
      var F;
      return (F = D == null ? void 0 : D.cells.map((x) => x.element)) !== null && F !== void 0 ? F : [];
    },
    getHeaderCellCount: () => {
      var F;
      return (F = D == null ? void 0 : D.cells.length) !== null && F !== void 0 ? F : 0;
    },
    getAttributeByHeaderCellIndex: (F, x) => {
      var Z;
      return (Z = D == null ? void 0 : D.orderedCells[F].getAttr(x)) !== null && Z !== void 0 ? Z : null;
    },
    setAttributeByHeaderCellIndex: (F, x, Z) => {
      D == null || D.orderedCells[F].addAttr(x, Z);
    },
    setClassNameByHeaderCellIndex: (F, x) => {
      D == null || D.orderedCells[F].addClass(x);
    },
    removeClassNameByHeaderCellIndex: (F, x) => {
      D == null || D.orderedCells[F].removeClass(x);
    },
    notifySortAction: (F) => {
      t(26, C = F.columnId), t(27, I = F.sortValue), pe(Ge(), "SMUIDataTable:sorted", F, void 0, !0);
    },
    getTableContainerHeight: () => b.getBoundingClientRect().height,
    getTableHeaderHeight: () => {
      const F = Ge().querySelector(".mdc-data-table__header-row");
      if (!F)
        throw new Error("MDCDataTable: Table header element not found.");
      return F.getBoundingClientRect().height;
    },
    setProgressIndicatorStyles: (F) => {
      t(13, q = F);
    },
    addClassAtRowIndex: (F, x) => {
      R == null || R.orderedRows[F].addClass(x);
    },
    getRowCount: () => {
      var F;
      return (F = R == null ? void 0 : R.rows.length) !== null && F !== void 0 ? F : 0;
    },
    getRowElements: () => {
      var F;
      return (F = R == null ? void 0 : R.rows.map((x) => x.element)) !== null && F !== void 0 ? F : [];
    },
    getRowIdAtIndex: (F) => {
      var x;
      return (x = R == null ? void 0 : R.orderedRows[F].rowId) !== null && x !== void 0 ? x : null;
    },
    getRowIndexByChildElement: (F) => {
      var x;
      return (x = R == null ? void 0 : R.orderedRows.map((Z) => Z.element).indexOf(d(F, ".mdc-data-table__row"))) !== null && x !== void 0 ? x : -1;
    },
    getSelectedRowCount: () => {
      var F;
      return (F = R == null ? void 0 : R.rows.filter((x) => x.selected).length) !== null && F !== void 0 ? F : 0;
    },
    isCheckboxAtRowIndexChecked: (F) => {
      const x = R == null ? void 0 : R.orderedRows[F].checkbox;
      return x ? x.checked : !1;
    },
    isHeaderRowCheckboxChecked: () => {
      const F = D == null ? void 0 : D.checkbox;
      return F ? F.checked : !1;
    },
    isRowsSelectable: () => !!Ge().querySelector(".mdc-data-table__row-checkbox") || !!Ge().querySelector(".mdc-data-table__header-row-checkbox"),
    notifyRowSelectionChanged: (F) => {
      const x = R == null ? void 0 : R.orderedRows[F.rowIndex];
      x && pe(
        Ge(),
        "SMUIDataTable:rowSelectionChanged",
        {
          row: x.element,
          rowId: x.rowId,
          rowIndex: F.rowIndex,
          selected: F.selected
        },
        void 0,
        !0
      );
    },
    notifySelectedAll: () => {
      Te(!1), pe(Ge(), "SMUIDataTable:selectedAll", void 0, void 0, !0);
    },
    notifyUnselectedAll: () => {
      Te(!1), pe(Ge(), "SMUIDataTable:unselectedAll", void 0, void 0, !0);
    },
    notifyRowClick: (F) => {
      pe(Ge(), "SMUIDataTable:rowClick", F, void 0, !0);
    },
    registerHeaderRowCheckbox: () => {
    },
    // Handled automatically.
    registerRowCheckboxes: () => {
    },
    // Handled automatically.
    removeClassAtRowIndex: (F, x) => {
      R == null || R.orderedRows[F].removeClass(x);
    },
    setAttributeAtRowIndex: (F, x, Z) => {
      R == null || R.orderedRows[F].addAttr(x, Z);
    },
    setHeaderRowCheckboxChecked: (F) => {
      const x = D == null ? void 0 : D.checkbox;
      x && (x.checked = F);
    },
    setHeaderRowCheckboxIndeterminate: Te,
    setRowCheckboxCheckedAtIndex: (F, x) => {
      const Z = R == null ? void 0 : R.orderedRows[F].checkbox;
      Z && (Z.checked = x);
    },
    setSortStatusLabelByHeaderCellIndex: (F, x) => {
    }
    // Handled automatically.
  })), v.init(), v.layout(), t(14, N = !0), () => {
    v.destroy();
  })), Wt(() => {
    G && G();
  });
  function ve(F) {
    t(10, D = F.detail);
  }
  function ze(F) {
    t(11, R = F.detail);
  }
  function K(F) {
    v && v.handleRowCheckboxChange(F);
  }
  function J(F) {
    w[F] || t(12, w[F] = !0, w);
  }
  function Ce(F) {
    (!(F in w) || w[F]) && t(12, w[F] = !1, w);
  }
  function Te(F) {
    const x = D == null ? void 0 : D.checkbox;
    x && (x.indeterminate = F);
  }
  function Ne(F) {
    if (!v || !F.detail.target)
      return;
    const x = d(F.detail.target, ".mdc-data-table__header-cell--with-sort");
    x && W(x);
  }
  function ie(F) {
    if (!v || !F.detail.target)
      return;
    const x = d(F.detail.target, ".mdc-data-table__row");
    x && v && v.handleRowClick({ rowId: F.detail.rowId, row: x });
  }
  function W(F) {
    var x, Z;
    const Be = (x = D == null ? void 0 : D.orderedCells) !== null && x !== void 0 ? x : [], dt = Be.map(($e) => $e.element).indexOf(F);
    if (dt === -1)
      return;
    const at = (Z = Be[dt].columnId) !== null && Z !== void 0 ? Z : null;
    v.handleSortAction({ columnId: at, columnIndex: dt, headerCell: F });
  }
  function Ye() {
    return v.layout();
  }
  function Ge() {
    return M;
  }
  function ft(F) {
    se[F ? "unshift" : "push"](() => {
      b = F, t(9, b);
    });
  }
  function Y(F) {
    se[F ? "unshift" : "push"](() => {
      M = F, t(8, M);
    });
  }
  const Ee = () => v && N && v.layout(), Ke = () => t(10, D = void 0), Ue = () => t(11, R = void 0), Et = () => v && v.handleHeaderRowCheckboxChange();
  return n.$$set = (F) => {
    e = z(z({}, e), et(F)), t(25, r = me(e, i)), "use" in F && t(0, h = F.use), "class" in F && t(1, g = F.class), "stickyHeader" in F && t(2, _ = F.stickyHeader), "sortable" in F && t(28, m = F.sortable), "sort" in F && t(26, C = F.sort), "sortDirection" in F && t(27, I = F.sortDirection), "sortAscendingAriaLabel" in F && t(29, O = F.sortAscendingAriaLabel), "sortDescendingAriaLabel" in F && t(30, E = F.sortDescendingAriaLabel), "container$use" in F && t(3, L = F.container$use), "container$class" in F && t(4, k = F.container$class), "table$use" in F && t(5, p = F.table$use), "table$class" in F && t(6, y = F.table$class), "$$scope" in F && t(35, u = F.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty[0] & /*sort*/
    67108864 && Ot(Q, s = C, s), n.$$.dirty[0] & /*sortDirection*/
    134217728 && Ot(Re, a = I, a), n.$$.dirty[0] & /*instance*/
    128 | n.$$.dirty[1] & /*previousProgressClosed, $progressClosed*/
    12 && c.progress && v && Fe !== l && (t(33, Fe = l), l ? v.hideProgress() : v.showProgress());
  }, [
    h,
    g,
    _,
    L,
    k,
    p,
    y,
    v,
    M,
    b,
    D,
    R,
    w,
    q,
    N,
    f,
    T,
    Q,
    Re,
    ve,
    ze,
    K,
    Ne,
    ie,
    c,
    r,
    C,
    I,
    m,
    O,
    E,
    Ye,
    Ge,
    Fe,
    l,
    u,
    o,
    ft,
    Y,
    Ee,
    Ke,
    Ue,
    Et
  ];
}
class of extends Me {
  constructor(e) {
    super(), De(
      this,
      e,
      af,
      sf,
      ye,
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
function uf(n) {
  let e, t, i, r, l;
  const a = (
    /*#slots*/
    n[10].default
  ), s = ge(
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
    u = z(u, o[c]);
  return {
    c() {
      e = le("thead"), s && s.c(), ae(e, u);
    },
    m(c, d) {
      j(c, e, d), s && s.m(e, null), n[11](e), i = !0, r || (l = [
        de(t = Qe.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        de(
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
      512) && be(
        s,
        a,
        c,
        /*$$scope*/
        c[9],
        i ? _e(
          a,
          /*$$scope*/
          c[9],
          d,
          null
        ) : Ie(
          /*$$scope*/
          c[9]
        ),
        null
      ), ae(e, u = fe(o, [d & /*$$restProps*/
      128 && /*$$restProps*/
      c[7]])), t && he(t.update) && d & /*use*/
      1 && t.update.call(
        null,
        /*use*/
        c[0]
      );
    },
    i(c) {
      i || (A(s, c), i = !0);
    },
    o(c) {
      S(s, c), i = !1;
    },
    d(c) {
      c && V(e), s && s.d(c), n[11](null), r = !1, Ze(l);
    }
  };
}
function cf(n, e, t) {
  const i = ["use", "getElement"];
  let r = me(e, i), { $$slots: l = {}, $$scope: a } = e;
  const s = tt(Je());
  let { use: o = [] } = e, u, c, d = [];
  const f = /* @__PURE__ */ new WeakMap();
  He("SMUI:data-table:row:header", !0), ut(() => {
    const E = {
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
    return pe(C(), "SMUIDataTableHeader:mount", E), () => {
      pe(C(), "SMUIDataTableHeader:unmount", E);
    };
  });
  function h(E) {
    t(2, c = E.detail);
  }
  function g(E) {
    d.push(E.detail), f.set(E.detail.element, E.detail), E.stopPropagation();
  }
  function _(E) {
    const L = d.indexOf(E.detail);
    L !== -1 && (d.splice(L, 1), d = d), f.delete(E.detail.element), E.stopPropagation();
  }
  function m() {
    return [...C().querySelectorAll(".mdc-data-table__header-cell")].map((E) => f.get(E)).filter((E) => E && E._smui_data_table_header_cell_accessor);
  }
  function C() {
    return u;
  }
  function I(E) {
    se[E ? "unshift" : "push"](() => {
      u = E, t(1, u);
    });
  }
  const O = () => t(2, c = void 0);
  return n.$$set = (E) => {
    e = z(z({}, e), et(E)), t(7, r = me(e, i)), "use" in E && t(0, o = E.use), "$$scope" in E && t(9, a = E.$$scope);
  }, [
    o,
    u,
    c,
    s,
    h,
    g,
    _,
    r,
    C,
    a,
    l,
    I,
    O
  ];
}
class df extends Me {
  constructor(e) {
    super(), De(this, e, cf, uf, ye, { use: 0, getElement: 8 });
  }
  get getElement() {
    return this.$$.ctx[8];
  }
}
function ff(n) {
  let e, t, i, r, l, a;
  const s = (
    /*#slots*/
    n[9].default
  ), o = ge(
    s,
    n,
    /*$$scope*/
    n[8],
    null
  );
  let u = [
    {
      class: t = re({
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
    c = z(c, u[d]);
  return {
    c() {
      e = le("tbody"), o && o.c(), ae(e, c);
    },
    m(d, f) {
      j(d, e, f), o && o.m(e, null), n[10](e), r = !0, l || (a = [
        de(i = Qe.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        de(
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
      256) && be(
        o,
        s,
        d,
        /*$$scope*/
        d[8],
        r ? _e(
          s,
          /*$$scope*/
          d[8],
          f,
          null
        ) : Ie(
          /*$$scope*/
          d[8]
        ),
        null
      ), ae(e, c = fe(u, [
        (!r || f & /*className*/
        2 && t !== (t = re({
          [
            /*className*/
            d[1]
          ]: !0,
          "mdc-data-table__content": !0
        }))) && { class: t },
        f & /*$$restProps*/
        64 && /*$$restProps*/
        d[6]
      ])), i && he(i.update) && f & /*use*/
      1 && i.update.call(
        null,
        /*use*/
        d[0]
      );
    },
    i(d) {
      r || (A(o, d), r = !0);
    },
    o(d) {
      S(o, d), r = !1;
    },
    d(d) {
      d && V(e), o && o.d(d), n[10](null), l = !1, Ze(a);
    }
  };
}
function hf(n, e, t) {
  const i = ["use", "class", "getElement"];
  let r = me(e, i), { $$slots: l = {}, $$scope: a } = e;
  const s = tt(Je());
  let { use: o = [] } = e, { class: u = "" } = e, c, d = [];
  const f = /* @__PURE__ */ new WeakMap();
  He("SMUI:data-table:row:header", !1), ut(() => {
    const I = {
      get rows() {
        return d;
      },
      get orderedRows() {
        return _();
      }
    };
    return pe(m(), "SMUIDataTableBody:mount", I), () => {
      pe(m(), "SMUIDataTableBody:unmount", I);
    };
  });
  function h(I) {
    d.push(I.detail), f.set(I.detail.element, I.detail), I.stopPropagation();
  }
  function g(I) {
    const O = d.indexOf(I.detail);
    O !== -1 && (d.splice(O, 1), d = d), f.delete(I.detail.element), I.stopPropagation();
  }
  function _() {
    return [...m().querySelectorAll(".mdc-data-table__row")].map((I) => f.get(I)).filter((I) => I && I._smui_data_table_row_accessor);
  }
  function m() {
    return c;
  }
  function C(I) {
    se[I ? "unshift" : "push"](() => {
      c = I, t(2, c);
    });
  }
  return n.$$set = (I) => {
    e = z(z({}, e), et(I)), t(6, r = me(e, i)), "use" in I && t(0, o = I.use), "class" in I && t(1, u = I.class), "$$scope" in I && t(8, a = I.$$scope);
  }, [
    o,
    u,
    c,
    s,
    h,
    g,
    r,
    m,
    a,
    l,
    C
  ];
}
class mf extends Me {
  constructor(e) {
    super(), De(this, e, hf, ff, ye, { use: 0, class: 1, getElement: 7 });
  }
  get getElement() {
    return this.$$.ctx[7];
  }
}
function pf(n) {
  let e, t, i, r, l, a, s;
  const o = (
    /*#slots*/
    n[15].default
  ), u = ge(
    o,
    n,
    /*$$scope*/
    n[14],
    null
  );
  let c = [
    {
      class: t = re({
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
    d = z(d, c[f]);
  return {
    c() {
      e = le("tr"), u && u.c(), ae(e, d);
    },
    m(f, h) {
      j(f, e, h), u && u.m(e, null), n[16](e), l = !0, a || (s = [
        de(r = Qe.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        de(
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
      16384) && be(
        u,
        o,
        f,
        /*$$scope*/
        f[14],
        l ? _e(
          o,
          /*$$scope*/
          f[14],
          h,
          null
        ) : Ie(
          /*$$scope*/
          f[14]
        ),
        null
      ), ae(e, d = fe(c, [
        (!l || h & /*className, checkbox, internalClasses*/
        26 && t !== (t = re({
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
      ])), r && he(r.update) && h & /*use*/
      1 && r.update.call(
        null,
        /*use*/
        f[0]
      );
    },
    i(f) {
      l || (A(u, f), l = !0);
    },
    o(f) {
      S(u, f), l = !1;
    },
    d(f) {
      f && V(e), u && u.d(f), n[16](null), a = !1, Ze(s);
    }
  };
}
let gf = 0;
function _f(n, e, t) {
  const i = ["use", "class", "rowId", "getElement"];
  let r = me(e, i), { $$slots: l = {}, $$scope: a } = e;
  const s = tt(Je());
  let { use: o = [] } = e, { class: u = "" } = e, { rowId: c = "SMUI-data-table-row-" + gf++ } = e, d, f, h = {}, g = {}, _ = qe("SMUI:data-table:row:header");
  ut(() => {
    const b = _ ? {
      _smui_data_table_row_accessor: !1,
      get element() {
        return p();
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
      removeClass: I,
      getAttr: O,
      addAttr: E
    } : {
      _smui_data_table_row_accessor: !0,
      get element() {
        return p();
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
      removeClass: I,
      getAttr: O,
      addAttr: E
    };
    return pe(p(), "SMUIDataTableRow:mount", b), () => {
      pe(p(), "SMUIDataTableRow:unmount", b);
    };
  });
  function m(b) {
    t(3, f = b.detail);
  }
  function C(b) {
    h[b] || t(4, h[b] = !0, h);
  }
  function I(b) {
    (!(b in h) || h[b]) && t(4, h[b] = !1, h);
  }
  function O(b) {
    var D;
    return b in g ? (D = g[b]) !== null && D !== void 0 ? D : null : p().getAttribute(b);
  }
  function E(b, D) {
    g[b] !== D && t(5, g[b] = D, g);
  }
  function L(b) {
    pe(p(), "SMUIDataTableHeader:click", b);
  }
  function k(b) {
    pe(p(), "SMUIDataTableRow:click", { rowId: c, target: b.target });
  }
  function p() {
    return d;
  }
  function y(b) {
    se[b ? "unshift" : "push"](() => {
      d = b, t(2, d);
    });
  }
  const M = (b) => _ ? L(b) : k(b), v = () => t(3, f = void 0);
  return n.$$set = (b) => {
    e = z(z({}, e), et(b)), t(11, r = me(e, i)), "use" in b && t(0, o = b.use), "class" in b && t(1, u = b.class), "rowId" in b && t(12, c = b.rowId), "$$scope" in b && t(14, a = b.$$scope);
  }, [
    o,
    u,
    d,
    f,
    h,
    g,
    s,
    _,
    m,
    L,
    k,
    r,
    c,
    p,
    a,
    l,
    y,
    M,
    v
  ];
}
class oa extends Me {
  constructor(e) {
    super(), De(this, e, _f, pf, ye, {
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
function bf(n) {
  let e, t, i, r, l, a;
  const s = (
    /*#slots*/
    n[22].default
  ), o = ge(
    s,
    n,
    /*$$scope*/
    n[21],
    null
  );
  let u = [
    {
      class: t = re({
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
    c = z(c, u[d]);
  return {
    c() {
      e = le("td"), o && o.c(), ae(e, c);
    },
    m(d, f) {
      j(d, e, f), o && o.m(e, null), n[25](e), r = !0, l || (a = [
        de(i = Qe.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        de(
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
      2097152) && be(
        o,
        s,
        d,
        /*$$scope*/
        d[21],
        r ? _e(
          s,
          /*$$scope*/
          d[21],
          f,
          null
        ) : Ie(
          /*$$scope*/
          d[21]
        ),
        null
      ), ae(e, c = fe(u, [
        (!r || f & /*className, numeric, checkbox, internalClasses*/
        142 && t !== (t = re({
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
      ])), i && he(i.update) && f & /*use*/
      1 && i.update.call(
        null,
        /*use*/
        d[0]
      );
    },
    i(d) {
      r || (A(o, d), r = !0);
    },
    o(d) {
      S(o, d), r = !1;
    },
    d(d) {
      d && V(e), o && o.d(d), n[25](null), l = !1, Ze(a);
    }
  };
}
function If(n) {
  let e, t, i, r, l, a, s, o, u;
  const c = [Cf, vf], d = [];
  function f(_, m) {
    return (
      /*sortable*/
      _[5] ? 0 : 1
    );
  }
  t = f(n), i = d[t] = c[t](n);
  let h = [
    {
      class: r = re({
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
  ], g = {};
  for (let _ = 0; _ < h.length; _ += 1)
    g = z(g, h[_]);
  return {
    c() {
      e = le("th"), i.c(), ae(e, g);
    },
    m(_, m) {
      j(_, e, m), d[t].m(e, null), n[23](e), s = !0, o || (u = [
        de(a = Qe.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        de(
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
    p(_, m) {
      let C = t;
      t = f(_), t === C ? d[t].p(_, m) : (Ve(), S(d[C], 1, 1, () => {
        d[C] = null;
      }), je(), i = d[t], i ? i.p(_, m) : (i = d[t] = c[t](_), i.c()), A(i, 1), i.m(e, null)), ae(e, g = fe(h, [
        (!s || m & /*className, numeric, checkbox, sortable, $sort, columnId, internalClasses*/
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
        (!s || m & /*columnId*/
        16) && { "data-column-id": (
          /*columnId*/
          _[4]
        ) },
        (!s || m & /*sortable, $sort, columnId, $sortDirection*/
        1584 && l !== (l = /*sortable*/
        _[5] ? (
          /*$sort*/
          _[9] === /*columnId*/
          _[4] ? (
            /*$sortDirection*/
            _[10]
          ) : "none"
        ) : void 0)) && { "aria-sort": l },
        m & /*internalAttrs*/
        256 && /*internalAttrs*/
        _[8],
        m & /*$$restProps*/
        524288 && /*$$restProps*/
        _[19]
      ])), a && he(a.update) && m & /*use*/
      1 && a.update.call(
        null,
        /*use*/
        _[0]
      );
    },
    i(_) {
      s || (A(i), s = !0);
    },
    o(_) {
      S(i), s = !1;
    },
    d(_) {
      _ && V(e), d[t].d(), n[23](null), o = !1, Ze(u);
    }
  };
}
function vf(n) {
  let e;
  const t = (
    /*#slots*/
    n[22].default
  ), i = ge(
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
      2097152) && be(
        i,
        t,
        r,
        /*$$scope*/
        r[21],
        e ? _e(
          t,
          /*$$scope*/
          r[21],
          l,
          null
        ) : Ie(
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
      S(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function Cf(n) {
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
  ), u = ge(
    o,
    n,
    /*$$scope*/
    n[21],
    null
  );
  return {
    c() {
      e = le("div"), u && u.c(), t = ce(), i = le("div"), l = ot(r), B(i, "class", "mdc-data-table__sort-status-label"), B(i, "aria-hidden", "true"), B(i, "id", a = /*columnId*/
      n[4] + "-status-label"), B(e, "class", "mdc-data-table__header-cell-wrapper");
    },
    m(c, d) {
      j(c, e, d), u && u.m(e, null), ne(e, t), ne(e, i), ne(i, l), s = !0;
    },
    p(c, d) {
      u && u.p && (!s || d & /*$$scope*/
      2097152) && be(
        u,
        o,
        c,
        /*$$scope*/
        c[21],
        s ? _e(
          o,
          /*$$scope*/
          c[21],
          d,
          null
        ) : Ie(
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
      ) : "") + "") && St(l, r), (!s || d & /*columnId*/
      16 && a !== (a = /*columnId*/
      c[4] + "-status-label")) && B(i, "id", a);
    },
    i(c) {
      s || (A(u, c), s = !0);
    },
    o(c) {
      S(u, c), s = !1;
    },
    d(c) {
      c && V(e), u && u.d(c);
    }
  };
}
function Af(n) {
  let e, t, i, r;
  const l = [If, bf], a = [];
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
      a[e].m(o, u), j(o, i, u), r = !0;
    },
    p(o, [u]) {
      t.p(o, u);
    },
    i(o) {
      r || (A(t), r = !0);
    },
    o(o) {
      S(t), r = !1;
    },
    d(o) {
      o && V(i), a[e].d(o);
    }
  };
}
let Ef = 0;
function yf(n, e, t) {
  const i = ["use", "class", "numeric", "checkbox", "columnId", "sortable", "getElement"];
  let r = me(e, i), l, a, { $$slots: s = {}, $$scope: o } = e;
  const u = tt(Je());
  let c = qe("SMUI:data-table:row:header"), { use: d = [] } = e, { class: f = "" } = e, { numeric: h = !1 } = e, { checkbox: g = !1 } = e, { columnId: _ = c ? "SMUI-data-table-column-" + Ef++ : "SMUI-data-table-unused" } = e, { sortable: m = qe("SMUI:data-table:sortable") } = e, C, I = {}, O = {}, E = qe("SMUI:data-table:sort");
  it(n, E, (T) => t(9, l = T));
  let L = qe("SMUI:data-table:sortDirection");
  it(n, L, (T) => t(10, a = T));
  let k = qe("SMUI:data-table:sortAscendingAriaLabel"), p = qe("SMUI:data-table:sortDescendingAriaLabel");
  m && (He("SMUI:label:context", "data-table:sortable-header-cell"), He("SMUI:icon-button:context", "data-table:sortable-header-cell"), He("SMUI:icon-button:aria-describedby", _ + "-status-label")), ut(() => {
    const T = c ? {
      _smui_data_table_header_cell_accessor: !0,
      get element() {
        return w();
      },
      get columnId() {
        return _;
      },
      addClass: y,
      removeClass: M,
      getAttr: v,
      addAttr: b
    } : {
      _smui_data_table_header_cell_accessor: !1,
      get element() {
        return w();
      },
      get columnId() {
      },
      addClass: y,
      removeClass: M,
      getAttr: v,
      addAttr: b
    };
    return pe(w(), "SMUIDataTableCell:mount", T), () => {
      pe(w(), "SMUIDataTableCell:unmount", T);
    };
  });
  function y(T) {
    I[T] || t(7, I[T] = !0, I);
  }
  function M(T) {
    (!(T in I) || I[T]) && t(7, I[T] = !1, I);
  }
  function v(T) {
    var Q;
    return T in O ? (Q = O[T]) !== null && Q !== void 0 ? Q : null : w().getAttribute(T);
  }
  function b(T, Q) {
    O[T] !== Q && t(8, O[T] = Q, O);
  }
  function D(T) {
    pe(w(), "SMUIDataTableHeaderCheckbox:change", T);
  }
  function R(T) {
    pe(w(), "SMUIDataTableBodyCheckbox:change", T);
  }
  function w() {
    return C;
  }
  function q(T) {
    se[T ? "unshift" : "push"](() => {
      C = T, t(6, C);
    });
  }
  const U = (T) => g && D(T);
  function G(T) {
    se[T ? "unshift" : "push"](() => {
      C = T, t(6, C);
    });
  }
  const N = (T) => g && R(T);
  return n.$$set = (T) => {
    e = z(z({}, e), et(T)), t(19, r = me(e, i)), "use" in T && t(0, d = T.use), "class" in T && t(1, f = T.class), "numeric" in T && t(2, h = T.numeric), "checkbox" in T && t(3, g = T.checkbox), "columnId" in T && t(4, _ = T.columnId), "sortable" in T && t(5, m = T.sortable), "$$scope" in T && t(21, o = T.$$scope);
  }, [
    d,
    f,
    h,
    g,
    _,
    m,
    C,
    I,
    O,
    l,
    a,
    u,
    c,
    E,
    L,
    k,
    p,
    D,
    R,
    r,
    w,
    o,
    s,
    q,
    U,
    G,
    N
  ];
}
class Ir extends Me {
  constructor(e) {
    super(), De(this, e, yf, Af, ye, {
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
function Sf(n) {
  let e, t, i, r, l, a, s, o, u, c, d, f, h, g, _, m, C, I, O, E, L = [
    {
      class: h = re({
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
      style: g = Object.entries(
        /*internalStyles*/
        n[10]
      ).map(Jl).concat([
        /*style*/
        n[2]
      ]).join(" ")
    },
    { role: "progressbar" },
    {
      "aria-valuemin": _ = 0
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
  ], k = {};
  for (let p = 0; p < L.length; p += 1)
    k = z(k, L[p]);
  return {
    c() {
      e = le("div"), t = le("div"), i = le("div"), l = ce(), a = le("div"), s = ce(), o = le("div"), u = le("span"), d = ce(), f = le("div"), f.innerHTML = '<span class="mdc-linear-progress__bar-inner"></span>', B(i, "class", "mdc-linear-progress__buffer-bar"), B(i, "style", r = Object.entries(
        /*bufferBarStyles*/
        n[11]
      ).map(Zl).join(" ")), B(a, "class", "mdc-linear-progress__buffer-dots"), B(t, "class", "mdc-linear-progress__buffer"), B(u, "class", "mdc-linear-progress__bar-inner"), B(o, "class", "mdc-linear-progress__bar mdc-linear-progress__primary-bar"), B(o, "style", c = Object.entries(
        /*primaryBarStyles*/
        n[12]
      ).map(Ql).join(" ")), B(f, "class", "mdc-linear-progress__bar mdc-linear-progress__secondary-bar"), ae(e, k);
    },
    m(p, y) {
      j(p, e, y), ne(e, t), ne(t, i), ne(t, l), ne(t, a), ne(e, s), ne(e, o), ne(o, u), ne(e, d), ne(e, f), n[19](e), O || (E = [
        de(I = Qe.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        de(
          /*forwardEvents*/
          n[13].call(null, e)
        ),
        oe(
          e,
          "transitionend",
          /*transitionend_handler*/
          n[20]
        )
      ], O = !0);
    },
    p(p, [y]) {
      y & /*bufferBarStyles*/
      2048 && r !== (r = Object.entries(
        /*bufferBarStyles*/
        p[11]
      ).map(Zl).join(" ")) && B(i, "style", r), y & /*primaryBarStyles*/
      4096 && c !== (c = Object.entries(
        /*primaryBarStyles*/
        p[12]
      ).map(Ql).join(" ")) && B(o, "style", c), ae(e, k = fe(L, [
        y & /*className, indeterminate, closed, internalClasses*/
        282 && h !== (h = re({
          [
            /*className*/
            p[1]
          ]: !0,
          "mdc-linear-progress": !0,
          "mdc-linear-progress--indeterminate": (
            /*indeterminate*/
            p[3]
          ),
          "mdc-linear-progress--closed": (
            /*closed*/
            p[4]
          ),
          "mdc-data-table__linear-progress": (
            /*context*/
            p[14] === "data-table"
          ),
          .../*internalClasses*/
          p[8]
        })) && { class: h },
        y & /*internalStyles, style*/
        1028 && g !== (g = Object.entries(
          /*internalStyles*/
          p[10]
        ).map(Jl).concat([
          /*style*/
          p[2]
        ]).join(" ")) && { style: g },
        { role: "progressbar" },
        {
          "aria-valuemin": _
        },
        {
          "aria-valuemax": m
        },
        y & /*indeterminate, progress*/
        40 && C !== (C = /*indeterminate*/
        p[3] ? void 0 : (
          /*progress*/
          p[5]
        )) && {
          "aria-valuenow": C
        },
        y & /*internalAttrs*/
        512 && /*internalAttrs*/
        p[9],
        y & /*$$restProps*/
        65536 && /*$$restProps*/
        p[16]
      ])), I && he(I.update) && y & /*use*/
      1 && I.update.call(
        null,
        /*use*/
        p[0]
      );
    },
    i: nt,
    o: nt,
    d(p) {
      p && V(e), n[19](null), O = !1, Ze(E);
    }
  };
}
const Zl = ([n, e]) => `${n}: ${e};`, Ql = ([n, e]) => `${n}: ${e};`, Jl = ([n, e]) => `${n}: ${e};`;
function Tf(n, e, t) {
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
  let r = me(e, i), l;
  const a = tt(Je());
  let { use: s = [] } = e, { class: o = "" } = e, { style: u = "" } = e, { indeterminate: c = !1 } = e, { closed: d = !1 } = e, { progress: f = 0 } = e, { buffer: h = void 0 } = e, g, _, m = {}, C = {}, I = {}, O = {}, E = {}, L = qe("SMUI:linear-progress:context"), k = qe("SMUI:linear-progress:closed");
  it(n, k, (N) => t(21, l = N)), ut(() => (t(6, _ = new tf({
    addClass: y,
    forceLayout: () => {
      q().getBoundingClientRect();
    },
    setBufferBarStyle: R,
    setPrimaryBarStyle: w,
    hasClass: p,
    removeAttribute: b,
    removeClass: M,
    setAttribute: v,
    setStyle: D,
    attachResizeObserver: (N) => {
      const T = window.ResizeObserver;
      if (T) {
        const Q = new T(N);
        return Q.observe(q()), Q;
      }
      return null;
    },
    getWidth: () => q().offsetWidth
  })), _.init(), () => {
    _.destroy();
  }));
  function p(N) {
    return N in m ? m[N] : q().classList.contains(N);
  }
  function y(N) {
    m[N] || t(8, m[N] = !0, m);
  }
  function M(N) {
    (!(N in m) || m[N]) && t(8, m[N] = !1, m);
  }
  function v(N, T) {
    C[N] !== T && t(9, C[N] = T, C);
  }
  function b(N) {
    (!(N in C) || C[N] != null) && t(9, C[N] = void 0, C);
  }
  function D(N, T) {
    I[N] != T && (T === "" || T == null ? (delete I[N], t(10, I)) : t(10, I[N] = T, I));
  }
  function R(N, T) {
    O[N] != T && (T === "" || T == null ? (delete O[N], t(11, O)) : t(11, O[N] = T, O));
  }
  function w(N, T) {
    E[N] != T && (T === "" || T == null ? (delete E[N], t(12, E)) : t(12, E[N] = T, E));
  }
  function q() {
    return g;
  }
  function U(N) {
    se[N ? "unshift" : "push"](() => {
      g = N, t(7, g);
    });
  }
  const G = () => _ && _.handleTransitionEnd();
  return n.$$set = (N) => {
    e = z(z({}, e), et(N)), t(16, r = me(e, i)), "use" in N && t(0, s = N.use), "class" in N && t(1, o = N.class), "style" in N && t(2, u = N.style), "indeterminate" in N && t(3, c = N.indeterminate), "closed" in N && t(4, d = N.closed), "progress" in N && t(5, f = N.progress), "buffer" in N && t(17, h = N.buffer);
  }, n.$$.update = () => {
    n.$$.dirty & /*closed*/
    16 && k && Ot(k, l = d, l), n.$$.dirty & /*instance, indeterminate*/
    72 && _ && _.isDeterminate() !== !c && _.setDeterminate(!c), n.$$.dirty & /*instance, progress*/
    96 && _ && _.getProgress() !== f && _.setProgress(f), n.$$.dirty & /*instance, buffer*/
    131136 && _ && (h == null ? _.setBuffer(1) : _.setBuffer(h)), n.$$.dirty & /*instance, closed*/
    80 && _ && (d ? _.close() : _.open());
  }, [
    s,
    o,
    u,
    c,
    d,
    f,
    _,
    g,
    m,
    C,
    I,
    O,
    E,
    a,
    L,
    k,
    r,
    h,
    q,
    U,
    G
  ];
}
class Lf extends Me {
  constructor(e) {
    super(), De(this, e, Tf, Sf, ye, {
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
function Of(n) {
  let e, t;
  const i = (
    /*#slots*/
    n[1].default
  ), r = ge(
    i,
    n,
    /*$$scope*/
    n[0],
    null
  );
  return {
    c() {
      e = le("span"), r && r.c(), B(e, "class", "oscd-icon");
    },
    m(l, a) {
      j(l, e, a), r && r.m(e, null), t = !0;
    },
    p(l, [a]) {
      r && r.p && (!t || a & /*$$scope*/
      1) && be(
        r,
        i,
        l,
        /*$$scope*/
        l[0],
        t ? _e(
          i,
          /*$$scope*/
          l[0],
          a,
          null
        ) : Ie(
          /*$$scope*/
          l[0]
        ),
        null
      );
    },
    i(l) {
      t || (A(r, l), t = !0);
    },
    o(l) {
      S(r, l), t = !1;
    },
    d(l) {
      l && V(e), r && r.d(l);
    }
  };
}
function Rf(n, e, t) {
  let { $$slots: i = {}, $$scope: r } = e;
  return n.$$set = (l) => {
    "$$scope" in l && t(0, r = l.$$scope);
  }, [r, i];
}
class sn extends Me {
  constructor(e) {
    super(), De(this, e, Rf, Of, ye, {});
  }
}
function kf(n) {
  let e, t;
  return {
    c() {
      e = st("svg"), t = st("path"), B(t, "d", "M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"), B(
        e,
        "style",
        /*svgStyles*/
        n[0]
      ), B(e, "xmlns", "http://www.w3.org/2000/svg"), B(e, "height", "24px"), B(e, "viewBox", "0 -960 960 960"), B(e, "width", "24px"), B(e, "fill", "#e8eaed");
    },
    m(i, r) {
      j(i, e, r), ne(e, t);
    },
    p(i, r) {
      r & /*svgStyles*/
      1 && B(
        e,
        "style",
        /*svgStyles*/
        i[0]
      );
    },
    d(i) {
      i && V(e);
    }
  };
}
function Df(n) {
  let e, t;
  return e = new sn({
    props: {
      $$slots: { default: [kf] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      $(e, i, r), t = !0;
    },
    p(i, [r]) {
      const l = {};
      r & /*$$scope, svgStyles*/
      3 && (l.$$scope = { dirty: r, ctx: i }), e.$set(l);
    },
    i(i) {
      t || (A(e.$$.fragment, i), t = !0);
    },
    o(i) {
      S(e.$$.fragment, i), t = !1;
    },
    d(i) {
      ee(e, i);
    }
  };
}
function Mf(n, e, t) {
  let { svgStyles: i = "" } = e;
  return n.$$set = (r) => {
    "svgStyles" in r && t(0, i = r.svgStyles);
  }, [i];
}
class Ff extends Me {
  constructor(e) {
    super(), De(this, e, Mf, Df, ye, { svgStyles: 0 });
  }
}
function Nf(n) {
  let e, t;
  return {
    c() {
      e = st("svg"), t = st("path"), B(t, "d", "m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"), B(
        e,
        "style",
        /*svgStyles*/
        n[0]
      ), B(e, "xmlns", "http://www.w3.org/2000/svg"), B(e, "viewBox", "0 -960 960 960"), B(e, "width", "24px");
    },
    m(i, r) {
      j(i, e, r), ne(e, t);
    },
    p(i, r) {
      r & /*svgStyles*/
      1 && B(
        e,
        "style",
        /*svgStyles*/
        i[0]
      );
    },
    d(i) {
      i && V(e);
    }
  };
}
function Uf(n) {
  let e, t;
  return e = new sn({
    props: {
      $$slots: { default: [Nf] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      $(e, i, r), t = !0;
    },
    p(i, [r]) {
      const l = {};
      r & /*$$scope, svgStyles*/
      3 && (l.$$scope = { dirty: r, ctx: i }), e.$set(l);
    },
    i(i) {
      t || (A(e.$$.fragment, i), t = !0);
    },
    o(i) {
      S(e.$$.fragment, i), t = !1;
    },
    d(i) {
      ee(e, i);
    }
  };
}
function wf(n, e, t) {
  let { svgStyles: i = "" } = e;
  return n.$$set = (r) => {
    "svgStyles" in r && t(0, i = r.svgStyles);
  }, [i];
}
class vr extends Me {
  constructor(e) {
    super(), De(this, e, wf, Uf, ye, { svgStyles: 0 });
  }
}
function Pf(n) {
  let e, t;
  return {
    c() {
      e = st("svg"), t = st("path"), B(t, "d", "M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z"), B(
        e,
        "style",
        /*svgStyles*/
        n[0]
      ), B(e, "xmlns", "http://www.w3.org/2000/svg"), B(e, "viewBox", "0 -960 960 960");
    },
    m(i, r) {
      j(i, e, r), ne(e, t);
    },
    p(i, r) {
      r & /*svgStyles*/
      1 && B(
        e,
        "style",
        /*svgStyles*/
        i[0]
      );
    },
    d(i) {
      i && V(e);
    }
  };
}
function Hf(n) {
  let e, t;
  return e = new sn({
    props: {
      $$slots: { default: [Pf] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      $(e, i, r), t = !0;
    },
    p(i, [r]) {
      const l = {};
      r & /*$$scope, svgStyles*/
      3 && (l.$$scope = { dirty: r, ctx: i }), e.$set(l);
    },
    i(i) {
      t || (A(e.$$.fragment, i), t = !0);
    },
    o(i) {
      S(e.$$.fragment, i), t = !1;
    },
    d(i) {
      ee(e, i);
    }
  };
}
function Bf(n, e, t) {
  let { svgStyles: i = "" } = e;
  return n.$$set = (r) => {
    "svgStyles" in r && t(0, i = r.svgStyles);
  }, [i];
}
class Vf extends Me {
  constructor(e) {
    super(), De(this, e, Bf, Hf, ye, { svgStyles: 0 });
  }
}
function jf(n) {
  let e, t;
  return {
    c() {
      e = st("svg"), t = st("path"), B(t, "d", "m590-160 80 80H240q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h360l200 240v480q0 20-8.5 36.5T768-96L560-302q-17 11-37 16.5t-43 5.5q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 23-5.5 43T618-360l102 104v-356L562-800H240v640h350ZM480-360q33 0 56.5-23.5T560-440q0-33-23.5-56.5T480-520q-33 0-56.5 23.5T400-440q0 33 23.5 56.5T480-360Zm0-80Zm0 0Z"), B(
        e,
        "style",
        /*svgStyles*/
        n[0]
      ), B(e, "xmlns", "http://www.w3.org/2000/svg"), B(e, "viewBox", "0 -960 960 960");
    },
    m(i, r) {
      j(i, e, r), ne(e, t);
    },
    p(i, r) {
      r & /*svgStyles*/
      1 && B(
        e,
        "style",
        /*svgStyles*/
        i[0]
      );
    },
    d(i) {
      i && V(e);
    }
  };
}
function Gf(n) {
  let e, t;
  return e = new sn({
    props: {
      $$slots: { default: [jf] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      $(e, i, r), t = !0;
    },
    p(i, [r]) {
      const l = {};
      r & /*$$scope, svgStyles*/
      3 && (l.$$scope = { dirty: r, ctx: i }), e.$set(l);
    },
    i(i) {
      t || (A(e.$$.fragment, i), t = !0);
    },
    o(i) {
      S(e.$$.fragment, i), t = !1;
    },
    d(i) {
      ee(e, i);
    }
  };
}
function Kf(n, e, t) {
  let { svgStyles: i = "" } = e;
  return n.$$set = (r) => {
    "svgStyles" in r && t(0, i = r.svgStyles);
  }, [i];
}
class qf extends Me {
  constructor(e) {
    super(), De(this, e, Kf, Gf, ye, { svgStyles: 0 });
  }
}
function Wf(n) {
  let e, t;
  return {
    c() {
      e = st("svg"), t = st("path"), B(t, "d", "M480-160q-134 0-227-93t-93-227q0-134 93-227t227-93q69 0 132 28.5T720-690v-110h80v280H520v-80h168q-32-56-87.5-88T480-720q-100 0-170 70t-70 170q0 100 70 170t170 70q77 0 139-44t87-116h84q-28 106-114 173t-196 67Z"), B(e, "xmlns", "http://www.w3.org/2000/svg"), B(e, "height", "24px"), B(e, "viewBox", "0 -960 960 960"), B(e, "width", "24px"), B(e, "fill", "#e8eaed");
    },
    m(i, r) {
      j(i, e, r), ne(e, t);
    },
    p: nt,
    d(i) {
      i && V(e);
    }
  };
}
function zf(n) {
  let e, t;
  return e = new sn({
    props: {
      $$slots: { default: [Wf] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      $(e, i, r), t = !0;
    },
    p(i, [r]) {
      const l = {};
      r & /*$$scope*/
      2 && (l.$$scope = { dirty: r, ctx: i }), e.$set(l);
    },
    i(i) {
      t || (A(e.$$.fragment, i), t = !0);
    },
    o(i) {
      S(e.$$.fragment, i), t = !1;
    },
    d(i) {
      ee(e, i);
    }
  };
}
function Yf(n, e, t) {
  let { svgStyles: i = "" } = e;
  return n.$$set = (r) => {
    "svgStyles" in r && t(0, i = r.svgStyles);
  }, [i];
}
class Xf extends Me {
  constructor(e) {
    super(), De(this, e, Yf, zf, ye, { svgStyles: 0 });
  }
}
function Zf(n) {
  let e, t;
  return {
    c() {
      e = st("svg"), t = st("path"), B(t, "d", "M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"), B(
        e,
        "style",
        /*svgStyles*/
        n[0]
      ), B(e, "xmlns", "http://www.w3.org/2000/svg"), B(e, "viewBox", "0 -960 960 960");
    },
    m(i, r) {
      j(i, e, r), ne(e, t);
    },
    p(i, r) {
      r & /*svgStyles*/
      1 && B(
        e,
        "style",
        /*svgStyles*/
        i[0]
      );
    },
    d(i) {
      i && V(e);
    }
  };
}
function Qf(n) {
  let e, t;
  return e = new sn({
    props: {
      $$slots: { default: [Zf] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      $(e, i, r), t = !0;
    },
    p(i, [r]) {
      const l = {};
      r & /*$$scope, svgStyles*/
      3 && (l.$$scope = { dirty: r, ctx: i }), e.$set(l);
    },
    i(i) {
      t || (A(e.$$.fragment, i), t = !0);
    },
    o(i) {
      S(e.$$.fragment, i), t = !1;
    },
    d(i) {
      ee(e, i);
    }
  };
}
function Jf(n, e, t) {
  let { svgStyles: i = "" } = e;
  return n.$$set = (r) => {
    "svgStyles" in r && t(0, i = r.svgStyles);
  }, [i];
}
class xf extends Me {
  constructor(e) {
    super(), De(this, e, Jf, Qf, ye, { svgStyles: 0 });
  }
}
function $f(n) {
  let e, t;
  return {
    c() {
      e = st("svg"), t = st("path"), B(t, "d", "M200-440v-80h560v80H200Z"), B(e, "xmlns", "http://www.w3.org/2000/svg"), B(e, "height", "24px"), B(e, "viewBox", "0 -960 960 960"), B(e, "width", "24px"), B(e, "fill", "#e8eaed");
    },
    m(i, r) {
      j(i, e, r), ne(e, t);
    },
    p: nt,
    d(i) {
      i && V(e);
    }
  };
}
function eh(n) {
  let e, t;
  return e = new sn({
    props: {
      $$slots: { default: [$f] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      $(e, i, r), t = !0;
    },
    p(i, [r]) {
      const l = {};
      r & /*$$scope*/
      2 && (l.$$scope = { dirty: r, ctx: i }), e.$set(l);
    },
    i(i) {
      t || (A(e.$$.fragment, i), t = !0);
    },
    o(i) {
      S(e.$$.fragment, i), t = !1;
    },
    d(i) {
      ee(e, i);
    }
  };
}
function th(n, e, t) {
  let { svgStyles: i = "" } = e;
  return n.$$set = (r) => {
    "svgStyles" in r && t(0, i = r.svgStyles);
  }, [i];
}
class nh extends Me {
  constructor(e) {
    super(), De(this, e, th, eh, ye, { svgStyles: 0 });
  }
}
function ih(n) {
  let e, t;
  return {
    c() {
      e = st("svg"), t = st("path"), B(t, "d", "M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"), B(
        e,
        "style",
        /*svgStyles*/
        n[0]
      ), B(e, "xmlns", "http://www.w3.org/2000/svg"), B(e, "viewBox", "0 -960 960 960");
    },
    m(i, r) {
      j(i, e, r), ne(e, t);
    },
    p(i, r) {
      r & /*svgStyles*/
      1 && B(
        e,
        "style",
        /*svgStyles*/
        i[0]
      );
    },
    d(i) {
      i && V(e);
    }
  };
}
function rh(n) {
  let e, t;
  return e = new sn({
    props: {
      $$slots: { default: [ih] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      $(e, i, r), t = !0;
    },
    p(i, [r]) {
      const l = {};
      r & /*$$scope, svgStyles*/
      3 && (l.$$scope = { dirty: r, ctx: i }), e.$set(l);
    },
    i(i) {
      t || (A(e.$$.fragment, i), t = !0);
    },
    o(i) {
      S(e.$$.fragment, i), t = !1;
    },
    d(i) {
      ee(e, i);
    }
  };
}
function lh(n, e, t) {
  let { svgStyles: i = "" } = e;
  return n.$$set = (r) => {
    "svgStyles" in r && t(0, i = r.svgStyles);
  }, [i];
}
class sh extends Me {
  constructor(e) {
    super(), De(this, e, lh, rh, ye, { svgStyles: 0 });
  }
}
function ah(n) {
  let e, t;
  return {
    c() {
      e = st("svg"), t = st("path"), B(t, "d", "M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"), B(
        e,
        "style",
        /*svgStyles*/
        n[0]
      ), B(e, "xmlns", "http://www.w3.org/2000/svg"), B(e, "viewBox", "0 -960 960 960");
    },
    m(i, r) {
      j(i, e, r), ne(e, t);
    },
    p(i, r) {
      r & /*svgStyles*/
      1 && B(
        e,
        "style",
        /*svgStyles*/
        i[0]
      );
    },
    d(i) {
      i && V(e);
    }
  };
}
function oh(n) {
  let e, t;
  return e = new sn({
    props: {
      $$slots: { default: [ah] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      $(e, i, r), t = !0;
    },
    p(i, [r]) {
      const l = {};
      r & /*$$scope, svgStyles*/
      3 && (l.$$scope = { dirty: r, ctx: i }), e.$set(l);
    },
    i(i) {
      t || (A(e.$$.fragment, i), t = !0);
    },
    o(i) {
      S(e.$$.fragment, i), t = !1;
    },
    d(i) {
      ee(e, i);
    }
  };
}
function uh(n, e, t) {
  let { svgStyles: i = "" } = e;
  return n.$$set = (r) => {
    "svgStyles" in r && t(0, i = r.svgStyles);
  }, [i];
}
class ch extends Me {
  constructor(e) {
    super(), De(this, e, uh, oh, ye, { svgStyles: 0 });
  }
}
function xl(n, e, t) {
  const i = n.slice();
  return i[24] = e[t], i[26] = t, i;
}
function $l(n, e, t) {
  const i = n.slice();
  return i[27] = e[t], i;
}
function es(n, e, t) {
  const i = n.slice();
  return i[30] = e[t], i;
}
function ts(n, e, t) {
  const i = n.slice();
  return i[27] = e[t], i[33] = e, i[34] = t, i;
}
function ns(n) {
  let e, t = (
    /*$sortColumn*/
    n[5] === /*col*/
    n[27].field && /*$sortDirection*/
    n[6] !== null && is(n)
  );
  return {
    c() {
      t && t.c(), e = Xe();
    },
    m(i, r) {
      t && t.m(i, r), j(i, e, r);
    },
    p(i, r) {
      /*$sortColumn*/
      i[5] === /*col*/
      i[27].field && /*$sortDirection*/
      i[6] !== null ? t ? t.p(i, r) : (t = is(i), t.c(), t.m(e.parentNode, e)) : t && (t.d(1), t = null);
    },
    d(i) {
      i && V(e), t && t.d(i);
    }
  };
}
function is(n) {
  let e;
  function t(l, a) {
    if (
      /*$sortDirection*/
      l[6] === "asc"
    )
      return fh;
    if (
      /*$sortDirection*/
      l[6] === "desc"
    )
      return dh;
  }
  let i = t(n), r = i && i(n);
  return {
    c() {
      r && r.c(), e = Xe();
    },
    m(l, a) {
      r && r.m(l, a), j(l, e, a);
    },
    p(l, a) {
      i !== (i = t(l)) && (r && r.d(1), r = i && i(l), r && (r.c(), r.m(e.parentNode, e)));
    },
    d(l) {
      l && V(e), r && r.d(l);
    }
  };
}
function dh(n) {
  let e, t;
  return {
    c() {
      e = st("svg"), t = st("path"), B(t, "d", "M12 20l8-8H4l8 8z"), B(e, "xmlns", "http://www.w3.org/2000/svg"), B(e, "viewBox", "0 0 24 24"), B(e, "width", "16"), B(e, "height", "16"), B(e, "fill", "currentColor"), B(e, "class", "svelte-29x22x");
    },
    m(i, r) {
      j(i, e, r), ne(e, t);
    },
    d(i) {
      i && V(e);
    }
  };
}
function fh(n) {
  let e, t;
  return {
    c() {
      e = st("svg"), t = st("path"), B(t, "d", "M12 4l-8 8h16l-8-8z"), B(e, "xmlns", "http://www.w3.org/2000/svg"), B(e, "viewBox", "0 0 24 24"), B(e, "width", "16"), B(e, "height", "16"), B(e, "fill", "currentColor"), B(e, "class", "svelte-29x22x");
    },
    m(i, r) {
      j(i, e, r), ne(e, t);
    },
    d(i) {
      i && V(e);
    }
  };
}
function rs(n) {
  let e, t, i = (
    /*col*/
    n[27].filterType === "text" && ls(n)
  ), r = (
    /*col*/
    n[27].filterType === "number" && ss(n)
  );
  return {
    c() {
      i && i.c(), e = ce(), r && r.c(), t = Xe();
    },
    m(l, a) {
      i && i.m(l, a), j(l, e, a), r && r.m(l, a), j(l, t, a);
    },
    p(l, a) {
      /*col*/
      l[27].filterType === "text" ? i ? i.p(l, a) : (i = ls(l), i.c(), i.m(e.parentNode, e)) : i && (i.d(1), i = null), /*col*/
      l[27].filterType === "number" ? r ? r.p(l, a) : (r = ss(l), r.c(), r.m(t.parentNode, t)) : r && (r.d(1), r = null);
    },
    d(l) {
      l && (V(e), V(t)), i && i.d(l), r && r.d(l);
    }
  };
}
function ls(n) {
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
      e = le("input"), B(e, "type", "text"), B(e, "placeholder", t = `Search ${/*col*/
      n[27].headerName}`), B(e, "class", "svelte-29x22x");
    },
    m(a, s) {
      j(a, e, s), dn(
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
      n[27].headerName}`) && B(e, "placeholder", t), s[0] & /*filters, columnDefs*/
      20 && e.value !== /*filters*/
      n[4][
        /*col*/
        n[27].field
      ] && dn(
        e,
        /*filters*/
        n[4][
          /*col*/
          n[27].field
        ]
      );
    },
    d(a) {
      a && V(e), i = !1, Ze(r);
    }
  };
}
function ss(n) {
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
      e = le("input"), B(e, "type", "number"), B(e, "placeholder", t = `Search ${/*col*/
      n[27].headerName}`), B(e, "class", "svelte-29x22x");
    },
    m(a, s) {
      j(a, e, s), dn(
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
      n[27].headerName}`) && B(e, "placeholder", t), s[0] & /*filters, columnDefs*/
      20 && Ws(e.value) !== /*filters*/
      n[4][
        /*col*/
        n[27].field
      ] && dn(
        e,
        /*filters*/
        n[4][
          /*col*/
          n[27].field
        ]
      );
    },
    d(a) {
      a && V(e), i = !1, Ze(r);
    }
  };
}
function hh(n) {
  let e, t, i, r = (
    /*col*/
    n[27].headerName + ""
  ), l, a, s, o, u = (
    /*col*/
    n[27].sortable && ns(n)
  ), c = (
    /*col*/
    n[27].filter && rs(n)
  );
  return {
    c() {
      e = le("div"), t = le("div"), i = le("span"), l = ot(r), a = ce(), u && u.c(), s = ce(), c && c.c(), o = ce(), B(i, "class", "header-title svelte-29x22x"), B(t, "class", "cell-header svelte-29x22x"), B(e, "class", "custom-cell-container svelte-29x22x"), ir(
        e,
        "min-width",
        /*col*/
        n[27].minWidth ?? 0
      );
    },
    m(d, f) {
      j(d, e, f), ne(e, t), ne(t, i), ne(i, l), ne(t, a), u && u.m(t, null), ne(e, s), c && c.m(e, null), j(d, o, f);
    },
    p(d, f) {
      f[0] & /*columnDefs*/
      4 && r !== (r = /*col*/
      d[27].headerName + "") && St(l, r), /*col*/
      d[27].sortable ? u ? u.p(d, f) : (u = ns(d), u.c(), u.m(t, null)) : u && (u.d(1), u = null), /*col*/
      d[27].filter ? c ? c.p(d, f) : (c = rs(d), c.c(), c.m(e, null)) : c && (c.d(1), c = null), f[0] & /*columnDefs*/
      4 && ir(
        e,
        "min-width",
        /*col*/
        d[27].minWidth ?? 0
      );
    },
    d(d) {
      d && (V(e), V(o)), u && u.d(), c && c.d();
    }
  };
}
function as(n) {
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
  return e = new Ir({
    props: {
      style: (
        /*col*/
        n[27].headerStyle
      ),
      $$slots: { default: [hh] },
      $$scope: { ctx: n }
    }
  }), e.$on("click", i), {
    c() {
      te(e.$$.fragment);
    },
    m(r, l) {
      $(e, r, l), t = !0;
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
      t || (A(e.$$.fragment, r), t = !0);
    },
    o(r) {
      S(e.$$.fragment, r), t = !1;
    },
    d(r) {
      ee(e, r);
    }
  };
}
function mh(n) {
  let e, t, i = Vt(
    /*columnDefs*/
    n[2]
  ), r = [];
  for (let a = 0; a < i.length; a += 1)
    r[a] = as(ts(n, i, a));
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
      j(a, e, s), t = !0;
    },
    p(a, s) {
      if (s[0] & /*columnDefs, sortColumnBy, filters, filterAndSortTable, $sortDirection, $sortColumn*/
      6260) {
        i = Vt(
          /*columnDefs*/
          a[2]
        );
        let o;
        for (o = 0; o < i.length; o += 1) {
          const u = ts(a, i, o);
          r[o] ? (r[o].p(u, s), A(r[o], 1)) : (r[o] = as(u), r[o].c(), A(r[o], 1), r[o].m(e.parentNode, e));
        }
        for (Ve(), o = i.length; o < r.length; o += 1)
          l(o);
        je();
      }
    },
    i(a) {
      if (!t) {
        for (let s = 0; s < i.length; s += 1)
          A(r[s]);
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
      a && V(e), hr(r, a);
    }
  };
}
function ph(n) {
  let e, t;
  return e = new oa({
    props: {
      class: "header-row",
      $$slots: { default: [mh] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      $(e, i, r), t = !0;
    },
    p(i, r) {
      const l = {};
      r[0] & /*columnDefs, filters, $sortDirection, $sortColumn*/
      116 | r[1] & /*$$scope*/
      16 && (l.$$scope = { dirty: r, ctx: i }), e.$set(l);
    },
    i(i) {
      t || (A(e.$$.fragment, i), t = !0);
    },
    o(i) {
      S(e.$$.fragment, i), t = !1;
    },
    d(i) {
      ee(e, i);
    }
  };
}
function gh(n) {
  let e, t;
  return e = new Ir({
    props: {
      numeric: (
        /*col*/
        n[27].numeric
      ),
      style: (
        /*col*/
        n[27].cellStyle
      ),
      $$slots: { default: [vh] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      $(e, i, r), t = !0;
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
      t || (A(e.$$.fragment, i), t = !0);
    },
    o(i) {
      S(e.$$.fragment, i), t = !1;
    },
    d(i) {
      ee(e, i);
    }
  };
}
function _h(n) {
  let e, t;
  return e = new Ir({
    props: {
      $$slots: { default: [Mh] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      $(e, i, r), t = !0;
    },
    p(i, r) {
      const l = {};
      r[0] & /*rowActions, $filteredData*/
      136 | r[1] & /*$$scope*/
      16 && (l.$$scope = { dirty: r, ctx: i }), e.$set(l);
    },
    i(i) {
      t || (A(e.$$.fragment, i), t = !0);
    },
    o(i) {
      S(e.$$.fragment, i), t = !1;
    },
    d(i) {
      ee(e, i);
    }
  };
}
function bh(n) {
  let e = (
    /*row*/
    (n[24][
      /*col*/
      n[27].field
    ] ?? "") + ""
  ), t;
  return {
    c() {
      t = ot(e);
    },
    m(i, r) {
      j(i, t, r);
    },
    p(i, r) {
      r[0] & /*$filteredData, columnDefs*/
      132 && e !== (e = /*row*/
      (i[24][
        /*col*/
        i[27].field
      ] ?? "") + "") && St(t, e);
    },
    d(i) {
      i && V(t);
    }
  };
}
function Ih(n) {
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
      t = ot(e);
    },
    m(i, r) {
      j(i, t, r);
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
      ) + "") && St(t, e);
    },
    d(i) {
      i && V(t);
    }
  };
}
function vh(n) {
  let e;
  function t(l, a) {
    return (
      /*col*/
      l[27].valueFormatter ? Ih : bh
    );
  }
  let i = t(n), r = i(n);
  return {
    c() {
      r.c(), e = Xe();
    },
    m(l, a) {
      r.m(l, a), j(l, e, a);
    },
    p(l, a) {
      i === (i = t(l)) && r ? r.p(l, a) : (r.d(1), r = i(l), r && (r.c(), r.m(e.parentNode, e)));
    },
    d(l) {
      l && V(e), r.d(l);
    }
  };
}
function Ch(n) {
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
  return e = new gi({
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
      $$slots: { default: [Dh] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      te(e.$$.fragment);
    },
    m(r, l) {
      $(e, r, l), t = !0;
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
      t || (A(e.$$.fragment, r), t = !0);
    },
    o(r) {
      S(e.$$.fragment, r), t = !1;
    },
    d(r) {
      ee(e, r);
    }
  };
}
function Ah(n) {
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
  return e = new zo({
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
      te(e.$$.fragment);
    },
    m(r, l) {
      $(e, r, l), t = !0;
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
      t || (A(e.$$.fragment, r), t = !0);
    },
    o(r) {
      S(e.$$.fragment, r), t = !1;
    },
    d(r) {
      ee(e, r);
    }
  };
}
function Eh(n) {
  let e, t;
  return e = new Xf({ props: { svgStyles: "margin: unset" } }), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      $(e, i, r), t = !0;
    },
    i(i) {
      t || (A(e.$$.fragment, i), t = !0);
    },
    o(i) {
      S(e.$$.fragment, i), t = !1;
    },
    d(i) {
      ee(e, i);
    }
  };
}
function yh(n) {
  let e, t;
  return e = new ch({ props: { svgStyles: "margin: unset" } }), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      $(e, i, r), t = !0;
    },
    i(i) {
      t || (A(e.$$.fragment, i), t = !0);
    },
    o(i) {
      S(e.$$.fragment, i), t = !1;
    },
    d(i) {
      ee(e, i);
    }
  };
}
function Sh(n) {
  let e, t;
  return e = new sh({ props: { svgStyles: "margin: unset" } }), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      $(e, i, r), t = !0;
    },
    i(i) {
      t || (A(e.$$.fragment, i), t = !0);
    },
    o(i) {
      S(e.$$.fragment, i), t = !1;
    },
    d(i) {
      ee(e, i);
    }
  };
}
function Th(n) {
  let e, t;
  return e = new nh({ props: { svgStyles: "margin: unset" } }), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      $(e, i, r), t = !0;
    },
    i(i) {
      t || (A(e.$$.fragment, i), t = !0);
    },
    o(i) {
      S(e.$$.fragment, i), t = !1;
    },
    d(i) {
      ee(e, i);
    }
  };
}
function Lh(n) {
  let e, t;
  return e = new qf({ props: { svgStyles: "margin: unset" } }), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      $(e, i, r), t = !0;
    },
    i(i) {
      t || (A(e.$$.fragment, i), t = !0);
    },
    o(i) {
      S(e.$$.fragment, i), t = !1;
    },
    d(i) {
      ee(e, i);
    }
  };
}
function Oh(n) {
  let e, t;
  return e = new Vf({ props: { svgStyles: "margin: unset" } }), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      $(e, i, r), t = !0;
    },
    i(i) {
      t || (A(e.$$.fragment, i), t = !0);
    },
    o(i) {
      S(e.$$.fragment, i), t = !1;
    },
    d(i) {
      ee(e, i);
    }
  };
}
function Rh(n) {
  let e, t;
  return e = new vr({ props: { svgStyles: "margin: unset" } }), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      $(e, i, r), t = !0;
    },
    i(i) {
      t || (A(e.$$.fragment, i), t = !0);
    },
    o(i) {
      S(e.$$.fragment, i), t = !1;
    },
    d(i) {
      ee(e, i);
    }
  };
}
function kh(n) {
  let e, t;
  return e = new Ff({ props: { svgStyles: "margin: unset" } }), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      $(e, i, r), t = !0;
    },
    i(i) {
      t || (A(e.$$.fragment, i), t = !0);
    },
    o(i) {
      S(e.$$.fragment, i), t = !1;
    },
    d(i) {
      ee(e, i);
    }
  };
}
function Dh(n) {
  let e, t, i, r;
  const l = [
    kh,
    Rh,
    Oh,
    Lh,
    Th,
    Sh,
    yh,
    Eh
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
      a[e].m(o, u), j(o, i, u), r = !0;
    },
    p(o, u) {
      let c = e;
      e = s(o), e !== c && (Ve(), S(a[c], 1, 1, () => {
        a[c] = null;
      }), je(), t = a[e], t || (t = a[e] = l[e](o), t.c()), A(t, 1), t.m(i.parentNode, i));
    },
    i(o) {
      r || (A(t), r = !0);
    },
    o(o) {
      S(t), r = !1;
    },
    d(o) {
      o && V(i), a[e].d(o);
    }
  };
}
function os(n) {
  let e, t, i, r;
  const l = [Ah, Ch], a = [];
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
      a[e].m(o, u), j(o, i, u), r = !0;
    },
    p(o, u) {
      let c = e;
      e = s(o), e === c ? a[e].p(o, u) : (Ve(), S(a[c], 1, 1, () => {
        a[c] = null;
      }), je(), t = a[e], t ? t.p(o, u) : (t = a[e] = l[e](o), t.c()), A(t, 1), t.m(i.parentNode, i));
    },
    i(o) {
      r || (A(t), r = !0);
    },
    o(o) {
      S(t), r = !1;
    },
    d(o) {
      o && V(i), a[e].d(o);
    }
  };
}
function Mh(n) {
  let e, t, i = Vt(
    /*rowActions*/
    n[3]
  ), r = [];
  for (let a = 0; a < i.length; a += 1)
    r[a] = os(es(n, i, a));
  const l = (a) => S(r[a], 1, 1, () => {
    r[a] = null;
  });
  return {
    c() {
      e = le("div");
      for (let a = 0; a < r.length; a += 1)
        r[a].c();
      B(e, "class", "cell-actions svelte-29x22x");
    },
    m(a, s) {
      j(a, e, s);
      for (let o = 0; o < r.length; o += 1)
        r[o] && r[o].m(e, null);
      t = !0;
    },
    p(a, s) {
      if (s[0] & /*rowActions, $filteredData*/
      136) {
        i = Vt(
          /*rowActions*/
          a[3]
        );
        let o;
        for (o = 0; o < i.length; o += 1) {
          const u = es(a, i, o);
          r[o] ? (r[o].p(u, s), A(r[o], 1)) : (r[o] = os(u), r[o].c(), A(r[o], 1), r[o].m(e, null));
        }
        for (Ve(), o = i.length; o < r.length; o += 1)
          l(o);
        je();
      }
    },
    i(a) {
      if (!t) {
        for (let s = 0; s < i.length; s += 1)
          A(r[s]);
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
      a && V(e), hr(r, a);
    }
  };
}
function us(n, e) {
  let t, i, r, l, a;
  const s = [_h, gh], o = [];
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
      j(c, t, d), o[i].m(c, d), j(c, l, d), a = !0;
    },
    p(c, d) {
      e = c;
      let f = i;
      i = u(e), i === f ? o[i].p(e, d) : (Ve(), S(o[f], 1, 1, () => {
        o[f] = null;
      }), je(), r = o[i], r ? r.p(e, d) : (r = o[i] = s[i](e), r.c()), A(r, 1), r.m(l.parentNode, l));
    },
    i(c) {
      a || (A(r), a = !0);
    },
    o(c) {
      S(r), a = !1;
    },
    d(c) {
      c && (V(t), V(l)), o[i].d(c);
    }
  };
}
function Fh(n) {
  let e = [], t = /* @__PURE__ */ new Map(), i, r, l = Vt(
    /*columnDefs*/
    n[2]
  );
  const a = (s) => (
    /*col*/
    s[27].field
  );
  for (let s = 0; s < l.length; s += 1) {
    let o = $l(n, l, s), u = a(o);
    t.set(u, e[s] = us(u, o));
  }
  return {
    c() {
      for (let s = 0; s < e.length; s += 1)
        e[s].c();
      i = ce();
    },
    m(s, o) {
      for (let u = 0; u < e.length; u += 1)
        e[u] && e[u].m(s, o);
      j(s, i, o), r = !0;
    },
    p(s, o) {
      o[0] & /*rowActions, $filteredData, columnDefs*/
      140 && (l = Vt(
        /*columnDefs*/
        s[2]
      ), Ve(), e = gr(e, o, a, 1, s, l, t, i.parentNode, pr, us, i, $l), je());
    },
    i(s) {
      if (!r) {
        for (let o = 0; o < l.length; o += 1)
          A(e[o]);
        r = !0;
      }
    },
    o(s) {
      for (let o = 0; o < e.length; o += 1)
        S(e[o]);
      r = !1;
    },
    d(s) {
      s && V(i);
      for (let o = 0; o < e.length; o += 1)
        e[o].d(s);
    }
  };
}
function cs(n, e) {
  let t, i, r;
  return i = new oa({
    props: {
      $$slots: { default: [Fh] },
      $$scope: { ctx: e }
    }
  }), {
    key: n,
    first: null,
    c() {
      t = Xe(), te(i.$$.fragment), this.first = t;
    },
    m(l, a) {
      j(l, t, a), $(i, l, a), r = !0;
    },
    p(l, a) {
      e = l;
      const s = {};
      a[0] & /*columnDefs, rowActions, $filteredData*/
      140 | a[1] & /*$$scope*/
      16 && (s.$$scope = { dirty: a, ctx: e }), i.$set(s);
    },
    i(l) {
      r || (A(i.$$.fragment, l), r = !0);
    },
    o(l) {
      S(i.$$.fragment, l), r = !1;
    },
    d(l) {
      l && V(t), ee(i, l);
    }
  };
}
function Nh(n) {
  let e = [], t = /* @__PURE__ */ new Map(), i, r, l = Vt(
    /*$filteredData*/
    n[7]
  );
  const a = (s) => (
    /*index*/
    s[26]
  );
  for (let s = 0; s < l.length; s += 1) {
    let o = xl(n, l, s), u = a(o);
    t.set(u, e[s] = cs(u, o));
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
      j(s, i, o), r = !0;
    },
    p(s, o) {
      o[0] & /*columnDefs, rowActions, $filteredData*/
      140 && (l = Vt(
        /*$filteredData*/
        s[7]
      ), Ve(), e = gr(e, o, a, 1, s, l, t, i.parentNode, pr, cs, i, xl), je());
    },
    i(s) {
      if (!r) {
        for (let o = 0; o < l.length; o += 1)
          A(e[o]);
        r = !0;
      }
    },
    o(s) {
      for (let o = 0; o < e.length; o += 1)
        S(e[o]);
      r = !1;
    },
    d(s) {
      s && V(i);
      for (let o = 0; o < e.length; o += 1)
        e[o].d(s);
    }
  };
}
function Uh(n) {
  let e, t, i, r;
  return e = new df({
    props: {
      $$slots: { default: [ph] },
      $$scope: { ctx: n }
    }
  }), i = new mf({
    props: {
      $$slots: { default: [Nh] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      te(e.$$.fragment), t = ce(), te(i.$$.fragment);
    },
    m(l, a) {
      $(e, l, a), j(l, t, a), $(i, l, a), r = !0;
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
      r || (A(e.$$.fragment, l), A(i.$$.fragment, l), r = !0);
    },
    o(l) {
      S(e.$$.fragment, l), S(i.$$.fragment, l), r = !1;
    },
    d(l) {
      l && V(t), ee(e, l), ee(i, l);
    }
  };
}
function wh(n) {
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
    n[0]), e = new Lf({ props: l }), se.push(() => _t(e, "closed", r)), {
      c() {
        te(e.$$.fragment);
      },
      m(a, s) {
        $(e, a, s), i = !0;
      },
      p(a, s) {
        const o = {};
        !t && s[0] & /*loadingDone*/
        1 && (t = !0, o.closed = /*loadingDone*/
        a[0], gt(() => t = !1)), e.$set(o);
      },
      i(a) {
        i || (A(e.$$.fragment, a), i = !0);
      },
      o(a) {
        S(e.$$.fragment, a), i = !1;
      },
      d(a) {
        ee(e, a);
      }
    }
  );
}
function Ph(n) {
  let e, t;
  return e = new of({
    props: {
      "table$aria-label": (
        /*label*/
        n[1]
      ),
      style: "max-width: 100%; width: 100%;",
      $$slots: {
        progress: [wh],
        default: [Uh]
      },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      $(e, i, r), t = !0;
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
      t || (A(e.$$.fragment, i), t = !0);
    },
    o(i) {
      S(e.$$.fragment, i), t = !1;
    },
    d(i) {
      ee(e, i);
    }
  };
}
function Hh(n, e, t) {
  let i, r, l, { loadingDone: a = !0 } = e, { label: s = "crypto.randomUUID()" } = e, { columnDefs: o = [] } = e, { rowData: u = [] } = e, { store: c } = e, { rowActions: d = [] } = e, f = { name: "", color: "", number: "" }, h = Lt([]);
  it(n, h, (b) => t(7, l = b));
  let g = Lt(null);
  it(n, g, (b) => t(5, i = b));
  let _ = Lt(null);
  it(n, _, (b) => t(6, r = b)), c.store.subscribe((b) => {
    t(13, u = [...b]), m();
  });
  function m() {
    let b = u.filter((D) => o.every((R) => {
      const w = f[R.field], q = D[R.field];
      return w ? R.filterType === "number" ? q == w : q.toString().toLowerCase().includes(w.toLowerCase()) : !0;
    }));
    b = C(b), h.set(b);
  }
  function C(b) {
    let D, R;
    return g.subscribe((w) => D = w), _.subscribe((w) => R = w), !D || !R ? b : b.sort((w, q) => {
      let U = w[D], G = q[D];
      return U == null && (U = ""), G == null && (G = ""), R === "asc" ? U.toString().localeCompare(G.toString()) : G.toString().localeCompare(U.toString());
    });
  }
  function I(b) {
    g.update((D) => {
      if (D === b)
        _.update((R) => R === "asc" ? "desc" : R === "desc" ? null : "asc");
      else
        return _.set("asc"), b;
      return b;
    }), m();
  }
  h.set(u);
  function O(b) {
    a = b, t(0, a);
  }
  function E(b) {
    f[b.field] = this.value, t(4, f);
  }
  const L = () => m();
  function k(b) {
    f[b.field] = Ws(this.value), t(4, f);
  }
  const p = () => m(), y = (b) => b.sortable && I(b.field), M = (b, D) => b.callback(D), v = (b, D) => b.callback(D);
  return n.$$set = (b) => {
    "loadingDone" in b && t(0, a = b.loadingDone), "label" in b && t(1, s = b.label), "columnDefs" in b && t(2, o = b.columnDefs), "rowData" in b && t(13, u = b.rowData), "store" in b && t(14, c = b.store), "rowActions" in b && t(3, d = b.rowActions);
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
    g,
    _,
    m,
    I,
    u,
    c,
    O,
    E,
    L,
    k,
    p,
    y,
    M,
    v
  ];
}
class ua extends Me {
  constructor(e) {
    super(), De(
      this,
      e,
      Hh,
      Ph,
      ye,
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
var ur;
(function(n) {
  n.POLITE = "polite", n.ASSERTIVE = "assertive";
})(ur || (ur = {}));
var Bh = "data-mdc-dom-announce";
function Vh(n, e) {
  jh.getInstance().say(n, e);
}
var jh = (
  /** @class */
  function() {
    function n() {
      this.liveRegions = /* @__PURE__ */ new Map();
    }
    return n.getInstance = function() {
      return n.instance || (n.instance = new n()), n.instance;
    }, n.prototype.say = function(e, t) {
      var i, r, l = (i = t == null ? void 0 : t.priority) !== null && i !== void 0 ? i : ur.POLITE, a = (r = t == null ? void 0 : t.ownerDocument) !== null && r !== void 0 ? r : document, s = this.getLiveRegion(l, a);
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
      return i.style.position = "absolute", i.style.top = "-9999px", i.style.left = "-9999px", i.style.height = "1px", i.style.overflow = "hidden", i.setAttribute("aria-atomic", "true"), i.setAttribute("aria-live", e), i.setAttribute(Bh, "true"), t.body.appendChild(i), i;
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
var un;
(function(n) {
  n[n.UNSPECIFIED = 0] = "UNSPECIFIED", n[n.CLICK = 1] = "CLICK", n[n.BACKSPACE_KEY = 2] = "BACKSPACE_KEY", n[n.DELETE_KEY = 3] = "DELETE_KEY", n[n.SPACEBAR_KEY = 4] = "SPACEBAR_KEY", n[n.ENTER_KEY = 5] = "ENTER_KEY";
})(un || (un = {}));
var qt = {
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
var ca = (
  /** @class */
  function(n) {
    ct(e, n);
    function e(t) {
      return n.call(this, We(We({}, e.defaultAdapter), t)) || this;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return qt;
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
      t.stopPropagation(), this.adapter.notifyInteraction(un.CLICK);
    }, e.prototype.handleKeydown = function(t) {
      t.stopPropagation();
      var i = pt(t);
      if (this.shouldNotifyInteractionFromKey(i)) {
        var r = this.getTriggerFromKey(i);
        this.adapter.notifyInteraction(r);
        return;
      }
      if (_o(t)) {
        this.adapter.notifyNavigation(i);
        return;
      }
    }, e.prototype.removeFocus = function() {
      this.adapter.setAttribute(qt.TAB_INDEX, "-1");
    }, e.prototype.focus = function() {
      this.adapter.setAttribute(qt.TAB_INDEX, "0"), this.adapter.focus();
    }, e.prototype.isNavigable = function() {
      return this.adapter.getAttribute(qt.ARIA_HIDDEN) !== "true";
    }, e.prototype.shouldNotifyInteractionFromKey = function(t) {
      var i = t === we.ENTER || t === we.SPACEBAR, r = t === we.BACKSPACE || t === we.DELETE;
      return i || r;
    }, e.prototype.getTriggerFromKey = function(t) {
      return t === we.SPACEBAR ? un.SPACEBAR_KEY : t === we.ENTER ? un.ENTER_KEY : t === we.DELETE ? un.DELETE_KEY : t === we.BACKSPACE ? un.BACKSPACE_KEY : un.UNSPECIFIED;
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
var da = (
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
        return new di(r, l);
      });
      var i = di.createAdapter(this);
      this.rippleSurface = t(this.root, new pi(i));
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
            qt.INTERACTION_EVENT,
            { trigger: r },
            !0
            /* shouldBubble */
          );
        },
        notifyNavigation: function(r) {
          t.emit(
            qt.NAVIGATION_EVENT,
            { key: r },
            !0
            /* shouldBubble */
          );
        },
        setAttribute: function(r, l) {
          t.root.setAttribute(r, l);
        }
      };
      return new ca(i);
    }, e.prototype.isNavigable = function() {
      return this.foundation.isNavigable();
    }, e.prototype.focus = function() {
      this.foundation.focus();
    }, e.prototype.removeFocus = function() {
      this.foundation.removeFocus();
    }, e;
  }(mi)
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
var Yt;
(function(n) {
  n.LEFT = "left", n.RIGHT = "right";
})(Yt || (Yt = {}));
var nn;
(function(n) {
  n.PRIMARY = "primary", n.TRAILING = "trailing", n.NONE = "none";
})(nn || (nn = {}));
var ke = {
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
}, Gt = /* @__PURE__ */ new Set();
Gt.add(ke.ARROW_LEFT_KEY);
Gt.add(ke.ARROW_RIGHT_KEY);
Gt.add(ke.ARROW_DOWN_KEY);
Gt.add(ke.ARROW_UP_KEY);
Gt.add(ke.END_KEY);
Gt.add(ke.HOME_KEY);
Gt.add(ke.IE_ARROW_LEFT_KEY);
Gt.add(ke.IE_ARROW_RIGHT_KEY);
Gt.add(ke.IE_ARROW_DOWN_KEY);
Gt.add(ke.IE_ARROW_UP_KEY);
var fn = /* @__PURE__ */ new Set();
fn.add(ke.ARROW_UP_KEY);
fn.add(ke.ARROW_DOWN_KEY);
fn.add(ke.HOME_KEY);
fn.add(ke.END_KEY);
fn.add(ke.IE_ARROW_UP_KEY);
fn.add(ke.IE_ARROW_DOWN_KEY);
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
var ds = {
  bottom: 0,
  height: 0,
  left: 0,
  right: 0,
  top: 0,
  width: 0
}, Mn;
(function(n) {
  n[n.SHOULD_FOCUS = 0] = "SHOULD_FOCUS", n[n.SHOULD_NOT_FOCUS = 1] = "SHOULD_NOT_FOCUS";
})(Mn || (Mn = {}));
var Cr = (
  /** @class */
  function(n) {
    ct(e, n);
    function e(t) {
      var i = n.call(this, We(We({}, e.defaultAdapter), t)) || this;
      return i.shouldRemoveOnTrailingIconClick = !0, i.shouldFocusPrimaryActionOnClick = !0, i;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return ke;
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
            return ds;
          },
          getComputedStyleValue: function() {
            return "";
          },
          getRootBoundingClientRect: function() {
            return ds;
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
        var o = this.adapter.getAttribute(ke.REMOVED_ANNOUNCEMENT_ATTRIBUTE);
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
      Gt.has(t.key) && (t.preventDefault(), this.focusNextAction(t.key, nn.PRIMARY));
    }, e.prototype.handleTrailingActionNavigation = function(t) {
      this.focusNextAction(t.detail.key, nn.TRAILING);
    }, e.prototype.removeFocus = function() {
      this.adapter.setPrimaryActionAttr(ke.TAB_INDEX, "-1"), this.adapter.removeTrailingActionFocus();
    }, e.prototype.focusPrimaryAction = function() {
      this.setPrimaryActionFocusable(Mn.SHOULD_FOCUS);
    }, e.prototype.focusTrailingAction = function() {
      var t = this.adapter.isTrailingActionNavigable();
      if (t) {
        this.adapter.setPrimaryActionAttr(ke.TAB_INDEX, "-1"), this.adapter.focusTrailingAction();
        return;
      }
      this.focusPrimaryAction();
    }, e.prototype.setPrimaryActionFocusable = function(t) {
      this.adapter.setPrimaryActionAttr(ke.TAB_INDEX, "0"), t === Mn.SHOULD_FOCUS && this.adapter.focusPrimaryAction(), this.adapter.removeTrailingActionFocus();
    }, e.prototype.getFocusBehavior = function() {
      return this.shouldFocusPrimaryActionOnClick ? Mn.SHOULD_FOCUS : Mn.SHOULD_NOT_FOCUS;
    }, e.prototype.focusNextAction = function(t, i) {
      var r = this.adapter.isTrailingActionNavigable(), l = this.getDirection(t);
      if (fn.has(t) || !r) {
        this.adapter.notifyNavigation(t, i);
        return;
      }
      if (i === nn.PRIMARY && l === Yt.RIGHT) {
        this.focusTrailingAction();
        return;
      }
      if (i === nn.TRAILING && l === Yt.LEFT) {
        this.focusPrimaryAction();
        return;
      }
      this.adapter.notifyNavigation(t, nn.NONE);
    }, e.prototype.getDirection = function(t) {
      var i = this.adapter.isRTL(), r = t === ke.ARROW_LEFT_KEY || t === ke.IE_ARROW_LEFT_KEY, l = t === ke.ARROW_RIGHT_KEY || t === ke.IE_ARROW_RIGHT_KEY;
      return !i && r || i && l ? Yt.LEFT : Yt.RIGHT;
    }, e.prototype.removeChip = function() {
      this.shouldRemoveOnTrailingIconClick && this.beginExit();
    }, e.prototype.shouldStartEditing = function(t) {
      return this.eventFromPrimaryAction(t) && t.key === ke.ENTER_KEY;
    }, e.prototype.shouldFinishEditing = function(t) {
      return t.key === ke.ENTER_KEY;
    }, e.prototype.shouldNotifyInteraction = function(t) {
      return t.key === ke.ENTER_KEY || t.key === ke.SPACEBAR_KEY;
    }, e.prototype.isDeleteAction = function(t) {
      var i = this.adapter.hasClass(It.DELETABLE);
      return i && (t.key === ke.BACKSPACE_KEY || t.key === ke.DELETE_KEY || t.key === ke.IE_DELETE_KEY);
    }, e.prototype.setSelectedImpl = function(t) {
      t ? (this.adapter.addClass(It.SELECTED), this.adapter.setPrimaryActionAttr(ke.ARIA_CHECKED, "true")) : (this.adapter.removeClass(It.SELECTED), this.adapter.setPrimaryActionAttr(ke.ARIA_CHECKED, "false"));
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
var fa = (
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
        return new di(s, o);
      }), i === void 0 && (i = function(s) {
        return new da(s);
      }), this.leadingIcon = this.root.querySelector(ke.LEADING_ICON_SELECTOR), this.checkmark = this.root.querySelector(ke.CHECKMARK_SELECTOR), this.primaryAction = this.root.querySelector(ke.PRIMARY_ACTION_SELECTOR);
      var l = this.root.querySelector(ke.TRAILING_ACTION_SELECTOR);
      l && (this.trailingAction = i(l));
      var a = We(We({}, di.createAdapter(this)), { computeBoundingRect: function() {
        return r.foundation.getDimensions();
      } });
      this.rippleSurface = t(this.root, new pi(a));
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
      }, this.listen("transitionend", this.handleTransitionEnd), this.listen("click", this.handleClick), this.listen("keydown", this.handleKeydown), this.listen("focusin", this.handleFocusIn), this.listen("focusout", this.handleFocusOut), this.trailingAction && (this.listen(qt.INTERACTION_EVENT, this.handleTrailingActionInteraction), this.listen(qt.NAVIGATION_EVENT, this.handleTrailingActionNavigation));
    }, e.prototype.destroy = function() {
      this.rippleSurface.destroy(), this.unlisten("transitionend", this.handleTransitionEnd), this.unlisten("keydown", this.handleKeydown), this.unlisten("click", this.handleClick), this.unlisten("focusin", this.handleFocusIn), this.unlisten("focusout", this.handleFocusOut), this.trailingAction && (this.unlisten(qt.INTERACTION_EVENT, this.handleTrailingActionInteraction), this.unlisten(qt.NAVIGATION_EVENT, this.handleTrailingActionNavigation)), n.prototype.destroy.call(this);
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
            ke.INTERACTION_EVENT,
            { chipId: t.id },
            !0
            /* shouldBubble */
          );
        },
        notifyNavigation: function(r, l) {
          return t.emit(
            ke.NAVIGATION_EVENT,
            { chipId: t.id, key: r, source: l },
            !0
            /* shouldBubble */
          );
        },
        notifyRemoval: function(r) {
          t.emit(
            ke.REMOVAL_EVENT,
            { chipId: t.id, removedAnnouncement: r },
            !0
            /* shouldBubble */
          );
        },
        notifySelection: function(r, l) {
          return t.emit(
            ke.SELECTION_EVENT,
            { chipId: t.id, selected: r, shouldIgnore: l },
            !0
            /* shouldBubble */
          );
        },
        notifyTrailingIconInteraction: function() {
          return t.emit(
            ke.TRAILING_ICON_INTERACTION_EVENT,
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
  }(mi)
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
var ha = {
  CHIP_SELECTOR: ".mdc-chip"
}, Zn = {
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
      var i = n.call(this, We(We({}, e.defaultAdapter), t)) || this;
      return i.selectedChipIds = [], i;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return ha;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Zn;
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
      this.removeFocusFromChipsExcept(r), (this.adapter.hasClass(Zn.CHOICE) || this.adapter.hasClass(Zn.FILTER)) && this.toggleSelect(i);
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
      if (!(s === -1 || !Gt.has(r))) {
        var o = this.adapter.isRTL(), u = r === ke.ARROW_LEFT_KEY || r === ke.IE_ARROW_LEFT_KEY, c = r === ke.ARROW_RIGHT_KEY || r === ke.IE_ARROW_RIGHT_KEY, d = r === ke.ARROW_DOWN_KEY || r === ke.IE_ARROW_DOWN_KEY, f = !o && c || o && u || d, h = r === ke.HOME_KEY, g = r === ke.END_KEY;
        f ? s++ : h ? s = 0 : g ? s = a : s--, !(s < 0 || s > a) && (this.removeFocusFromChipsExcept(s), this.focusChipAction(s, r, l));
      }
    }, e.prototype.focusChipAction = function(t, i, r) {
      var l = fn.has(i);
      if (l && r === nn.PRIMARY)
        return this.adapter.focusChipPrimaryActionAtIndex(t);
      if (l && r === nn.TRAILING)
        return this.adapter.focusChipTrailingActionAtIndex(t);
      var a = this.getDirection(i);
      if (a === Yt.LEFT)
        return this.adapter.focusChipTrailingActionAtIndex(t);
      if (a === Yt.RIGHT)
        return this.adapter.focusChipPrimaryActionAtIndex(t);
    }, e.prototype.getDirection = function(t) {
      var i = this.adapter.isRTL(), r = t === ke.ARROW_LEFT_KEY || t === ke.IE_ARROW_LEFT_KEY, l = t === ke.ARROW_RIGHT_KEY || t === ke.IE_ARROW_RIGHT_KEY;
      return !i && r || i && l ? Yt.LEFT : Yt.RIGHT;
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
        if (this.adapter.hasClass(Zn.CHOICE) && this.selectedChipIds.length > 0) {
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
var bi = Cr.strings, fs = bi.INTERACTION_EVENT, hs = bi.SELECTION_EVENT, ms = bi.REMOVAL_EVENT, ps = bi.NAVIGATION_EVENT, Gh = Ar.strings.CHIP_SELECTOR, gs = 0, Kh = (
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
        return new fa(i);
      }), this.chipFactory = t, this.chipsList = this.instantiateChips(this.chipFactory);
    }, e.prototype.initialSyncWithDOM = function() {
      var t, i, r = this;
      try {
        for (var l = yt(this.chipsList), a = l.next(); !a.done; a = l.next()) {
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
      }, this.listen(fs, this.handleChipInteraction), this.listen(hs, this.handleChipSelection), this.listen(ms, this.handleChipRemoval), this.listen(ps, this.handleChipNavigation);
    }, e.prototype.destroy = function() {
      var t, i;
      try {
        for (var r = yt(this.chipsList), l = r.next(); !l.done; l = r.next()) {
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
      this.unlisten(fs, this.handleChipInteraction), this.unlisten(hs, this.handleChipSelection), this.unlisten(ms, this.handleChipRemoval), this.unlisten(ps, this.handleChipNavigation), n.prototype.destroy.call(this);
    }, e.prototype.addChip = function(t) {
      t.id = t.id || "mdc-chip-" + ++gs, this.chipsList.push(this.chipFactory(t));
    }, e.prototype.getDefaultFoundation = function() {
      var t = this, i = {
        announceMessage: function(r) {
          Vh(r);
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
      var i = [].slice.call(this.root.querySelectorAll(Gh));
      return i.map(function(r) {
        return r.id = r.id || "mdc-chip-" + ++gs, t(r);
      });
    }, e.prototype.findChipIndex = function(t) {
      for (var i = 0; i < this.chips.length; i++)
        if (this.chipsList[i].id === t)
          return i;
      return -1;
    }, e;
  }(mi)
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
  MDCChip: fa,
  MDCChipFoundation: Cr,
  MDCChipSet: Kh,
  MDCChipSetFoundation: Ar,
  MDCChipTrailingAction: da,
  MDCChipTrailingActionFoundation: ca,
  chipCssClasses: It,
  chipSetCssClasses: Zn,
  chipSetStrings: ha,
  chipStrings: ke,
  trailingActionStrings: qt
}, Symbol.toStringTag, { value: "Module" }));
function _s(n) {
  let e;
  return {
    c() {
      e = le("div"), B(e, "class", "mdc-chip__ripple");
    },
    m(t, i) {
      j(t, e, i);
    },
    d(t) {
      t && V(e);
    }
  };
}
function bs(n) {
  let e;
  return {
    c() {
      e = le("div"), B(e, "class", "mdc-chip__touch");
    },
    m(t, i) {
      j(t, e, i);
    },
    d(t) {
      t && V(e);
    }
  };
}
function qh(n) {
  let e, t, i, r, l = (
    /*ripple*/
    n[3] && !/*$nonInteractive*/
    n[14] && _s()
  );
  const a = (
    /*#slots*/
    n[34].default
  ), s = ge(
    a,
    n,
    /*$$scope*/
    n[38],
    null
  );
  let o = (
    /*touch*/
    n[4] && bs()
  );
  return {
    c() {
      l && l.c(), e = ce(), s && s.c(), t = ce(), o && o.c(), i = Xe();
    },
    m(u, c) {
      l && l.m(u, c), j(u, e, c), s && s.m(u, c), j(u, t, c), o && o.m(u, c), j(u, i, c), r = !0;
    },
    p(u, c) {
      /*ripple*/
      u[3] && !/*$nonInteractive*/
      u[14] ? l || (l = _s(), l.c(), l.m(e.parentNode, e)) : l && (l.d(1), l = null), s && s.p && (!r || c[1] & /*$$scope*/
      128) && be(
        s,
        a,
        u,
        /*$$scope*/
        u[38],
        r ? _e(
          a,
          /*$$scope*/
          u[38],
          c,
          null
        ) : Ie(
          /*$$scope*/
          u[38]
        ),
        null
      ), /*touch*/
      u[4] ? o || (o = bs(), o.c(), o.m(i.parentNode, i)) : o && (o.d(1), o = null);
    },
    i(u) {
      r || (A(s, u), r = !0);
    },
    o(u) {
      S(s, u), r = !1;
    },
    d(u) {
      u && (V(e), V(t), V(i)), l && l.d(u), s && s.d(u), o && o.d(u);
    }
  };
}
function Wh(n) {
  let e, t, i;
  const r = [
    { tag: (
      /*tag*/
      n[6]
    ) },
    {
      use: [
        [
          Rt,
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
      class: re({
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
      ).map($i).concat([
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
      $$slots: { default: [qh] },
      $$scope: { ctx: s }
    };
    for (let c = 0; c < r.length; c += 1)
      u = z(u, r[c]);
    return o !== void 0 && o[0] & /*tag, ripple, $nonInteractive, addClass, removeClass, addStyle, forwardEvents, use, className, selected, touch, internalClasses, internalStyles, style, $$restProps*/
    503369055 && (u = z(u, fe(r, [
      o[0] & /*tag*/
      64 && { tag: (
        /*tag*/
        s[6]
      ) },
      o[0] & /*ripple, $nonInteractive, addClass, removeClass, addStyle, forwardEvents, use*/
      234930185 && {
        use: [
          [
            Rt,
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
        class: re({
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
        ).map($i).concat([
          /*style*/
          s[2]
        ]).join(" ")
      },
      r[4],
      o[0] & /*$$restProps*/
      268435456 && Oe(
        /*$$restProps*/
        s[28]
      )
    ]))), { props: u };
  }
  return l && (e = kt(l, a(n)), n[35](e), e.$on("transitionend", function() {
    he(
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
    he(
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
    he(
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
    he(
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
    he(
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
    he(
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
    he(
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
      e && te(e.$$.fragment), t = Xe();
    },
    m(s, o) {
      e && $(e, s, o), j(s, t, o), i = !0;
    },
    p(s, o) {
      if (n = s, o[0] & /*component*/
      32 && l !== (l = /*component*/
      n[5])) {
        if (e) {
          Ve();
          const u = e;
          S(u.$$.fragment, 1, 0, () => {
            ee(u, 1);
          }), je();
        }
        l ? (e = kt(l, a(n, o)), n[35](e), e.$on("transitionend", function() {
          he(
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
          he(
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
          he(
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
          he(
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
          he(
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
          he(
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
          he(
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
        ), te(e.$$.fragment), A(e.$$.fragment, 1), $(e, t.parentNode, t)) : e = null;
      } else if (l) {
        const u = o[0] & /*tag, ripple, $nonInteractive, addClass, removeClass, addStyle, forwardEvents, use, className, selected, touch, internalClasses, internalStyles, style, $$restProps*/
        503369055 ? fe(r, [
          o[0] & /*tag*/
          64 && { tag: (
            /*tag*/
            n[6]
          ) },
          o[0] & /*ripple, $nonInteractive, addClass, removeClass, addStyle, forwardEvents, use*/
          234930185 && {
            use: [
              [
                Rt,
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
            class: re({
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
            ).map($i).concat([
              /*style*/
              n[2]
            ]).join(" ")
          },
          r[4],
          o[0] & /*$$restProps*/
          268435456 && Oe(
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
      i || (e && A(e.$$.fragment, s), i = !0);
    },
    o(s) {
      e && S(e.$$.fragment, s), i = !1;
    },
    d(s) {
      s && V(t), n[35](null), e && ee(e, s);
    }
  };
}
const $i = ([n, e]) => `${n}: ${e};`;
function zh(n, e, t) {
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
  let r = me(e, i), l, a, s, o, u, c, d, { $$slots: f = {}, $$scope: h } = e;
  const { MDCChipFoundation: g } = Er, _ = tt(Je());
  let { use: m = [] } = e, { class: C = "" } = e, { style: I = "" } = e, { chip: O } = e, { ripple: E = !0 } = e, { touch: L = !1 } = e, { shouldRemoveOnTrailingIconClick: k = !0 } = e, { shouldFocusPrimaryActionOnClick: p = !0 } = e, y, M, v = {}, b = {}, D = {};
  const R = qe("SMUI:chips:chip:initialSelected");
  it(n, R, (Z) => t(44, c = Z));
  let w = c, q, U;
  const G = qe("SMUI:chips:nonInteractive");
  it(n, G, (Z) => t(14, d = Z));
  const N = qe("SMUI:chips:choice");
  it(n, N, (Z) => t(40, a = Z));
  const T = qe("SMUI:chips:chip:index");
  it(n, T, (Z) => t(39, l = Z));
  let { component: Q = Ft } = e, { tag: Re = Q === Ft ? "div" : void 0 } = e;
  const Fe = Lt(k);
  it(n, Fe, (Z) => t(43, u = Z)), He("SMUI:chips:chip:shouldRemoveOnTrailingIconClick", Fe);
  const ve = Lt(w);
  it(n, ve, (Z) => t(42, o = Z)), He("SMUI:chips:chip:isSelected", ve);
  const ze = Lt(b);
  if (it(n, ze, (Z) => t(41, s = Z)), He("SMUI:chips:chip:leadingIconClasses", ze), He("SMUI:chips:chip:focusable", a && w || l === 0), !O)
    throw new Error("The chip property is required! It should be passed down from the Set to the Chip.");
  ut(() => {
    t(7, M = new g({
      addClass: Te,
      addClassToLeadingIcon: ie,
      eventTargetHasClass: (Be, dt) => Be && "classList" in Be ? Be.classList.contains(dt) : !1,
      focusPrimaryAction: () => {
        q && q.focus();
      },
      focusTrailingAction: () => {
        U && U.focus();
      },
      getAttribute: (Be) => Ue().getAttribute(Be),
      getCheckmarkBoundingClientRect: () => {
        const Be = Ue().querySelector(".mdc-chip__checkmark");
        return Be ? Be.getBoundingClientRect() : null;
      },
      getComputedStyleValue: Ge,
      getRootBoundingClientRect: () => Ue().getBoundingClientRect(),
      hasClass: Ce,
      hasLeadingIcon: () => !!Ue().querySelector(".mdc-chip__icon--leading"),
      isRTL: () => getComputedStyle(Ue()).getPropertyValue("direction") === "rtl",
      isTrailingActionNavigable: () => U ? U.isNavigable() : !1,
      notifyInteraction: () => pe(Ue(), "SMUIChip:interaction", { chipId: O }, void 0, !0),
      notifyNavigation: (Be, dt) => pe(Ue(), "SMUIChip:navigation", { chipId: O, key: Be, source: dt }, void 0, !0),
      notifyRemoval: (Be) => {
        pe(Ue(), "SMUIChip:removal", { chipId: O, removedAnnouncement: Be }, void 0, !0);
      },
      notifySelection: (Be, dt) => pe(Ue(), "SMUIChip:selection", { chipId: O, selected: Be, shouldIgnore: dt }, void 0, !0),
      notifyTrailingIconInteraction: () => pe(Ue(), "SMUIChip:trailingIconInteraction", { chipId: O }, void 0, !0),
      notifyEditStart: () => {
      },
      /* Not Implemented. */
      notifyEditFinish: () => {
      },
      /* Not Implemented. */
      removeClass: Ne,
      removeClassFromLeadingIcon: W,
      removeTrailingActionFocus: () => {
        U && U.removeFocus();
      },
      setPrimaryActionAttr: (Be, dt) => {
        q && q.addAttr(Be, dt);
      },
      setStyleProperty: Ye
    }));
    const Z = {
      chipId: O,
      get selected() {
        return w;
      },
      focusPrimaryAction: Y,
      focusTrailingAction: Ee,
      removeFocus: Ke,
      setSelectedFromChipSet: ft
    };
    return pe(Ue(), "SMUIChipsChip:mount", Z), M.init(), () => {
      pe(Ue(), "SMUIChipsChip:unmount", Z), M.destroy();
    };
  });
  function K(Z) {
    t(12, q = Z.detail);
  }
  function J(Z) {
    t(13, U = Z.detail);
  }
  function Ce(Z) {
    return Z in v ? v[Z] : Ue().classList.contains(Z);
  }
  function Te(Z) {
    v[Z] || t(10, v[Z] = !0, v);
  }
  function Ne(Z) {
    (!(Z in v) || v[Z]) && t(10, v[Z] = !1, v);
  }
  function ie(Z) {
    b[Z] || t(33, b[Z] = !0, b);
  }
  function W(Z) {
    (!(Z in b) || b[Z]) && t(33, b[Z] = !1, b);
  }
  function Ye(Z, Be) {
    D[Z] != Be && (Be === "" || Be == null ? (delete D[Z], t(11, D)) : t(11, D[Z] = Be, D));
  }
  function Ge(Z) {
    return Z in D ? D[Z] : getComputedStyle(Ue()).getPropertyValue(Z);
  }
  function ft(Z, Be) {
    t(8, w = Z), M.setSelectedFromChipSet(w, Be);
  }
  function Y() {
    M.focusPrimaryAction();
  }
  function Ee() {
    M.focusTrailingAction();
  }
  function Ke() {
    M.removeFocus();
  }
  function Ue() {
    return y.getElement();
  }
  function Et(Z) {
    se[Z ? "unshift" : "push"](() => {
      y = Z, t(9, y);
    });
  }
  const F = () => t(12, q = void 0), x = () => t(13, U = void 0);
  return n.$$set = (Z) => {
    e = z(z({}, e), et(Z)), t(28, r = me(e, i)), "use" in Z && t(0, m = Z.use), "class" in Z && t(1, C = Z.class), "style" in Z && t(2, I = Z.style), "chip" in Z && t(29, O = Z.chip), "ripple" in Z && t(3, E = Z.ripple), "touch" in Z && t(4, L = Z.touch), "shouldRemoveOnTrailingIconClick" in Z && t(30, k = Z.shouldRemoveOnTrailingIconClick), "shouldFocusPrimaryActionOnClick" in Z && t(31, p = Z.shouldFocusPrimaryActionOnClick), "component" in Z && t(5, Q = Z.component), "tag" in Z && t(6, Re = Z.tag), "$$scope" in Z && t(38, h = Z.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty[0] & /*shouldRemoveOnTrailingIconClick*/
    1073741824 && Ot(Fe, u = k, u), n.$$.dirty[0] & /*selected*/
    256 && Ot(ve, o = w, o), n.$$.dirty[1] & /*leadingIconClasses*/
    4 && Ot(ze, s = b, s), n.$$.dirty[0] & /*instance, shouldRemoveOnTrailingIconClick*/
    1073741952 && M && M.getShouldRemoveOnTrailingIconClick() !== k && M.setShouldRemoveOnTrailingIconClick(k), n.$$.dirty[0] & /*instance*/
    128 | n.$$.dirty[1] & /*shouldFocusPrimaryActionOnClick*/
    1 && M && M.setShouldFocusPrimaryActionOnClick(p);
  }, [
    m,
    C,
    I,
    E,
    L,
    Q,
    Re,
    M,
    w,
    y,
    v,
    D,
    q,
    U,
    d,
    _,
    R,
    G,
    N,
    T,
    Fe,
    ve,
    ze,
    K,
    J,
    Te,
    Ne,
    Ye,
    r,
    O,
    k,
    p,
    Ue,
    b,
    f,
    Et,
    F,
    x,
    h
  ];
}
class Yh extends Me {
  constructor(e) {
    super(), De(
      this,
      e,
      zh,
      Wh,
      ye,
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
function Is(n, e, t) {
  const i = n.slice();
  return i[37] = e[t], i[39] = t, i;
}
const Xh = (n) => ({ chip: n[0] & /*chips*/
1 }), vs = (n) => ({ chip: (
  /*chip*/
  n[37]
) });
function Zh(n) {
  let e;
  const t = (
    /*#slots*/
    n[25].default
  ), i = ge(
    t,
    n,
    /*$$scope*/
    n[27],
    vs
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
      134217729) && be(
        i,
        t,
        r,
        /*$$scope*/
        r[27],
        e ? _e(
          t,
          /*$$scope*/
          r[27],
          l,
          Xh
        ) : Ie(
          /*$$scope*/
          r[27]
        ),
        vs
      );
    },
    i(r) {
      e || (A(i, r), e = !0);
    },
    o(r) {
      S(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function Qh(n) {
  let e, t, i;
  return e = new Bn({
    props: {
      key: "SMUI:chips:chip:initialSelected",
      value: (
        /*initialSelected*/
        n[10][
          /*i*/
          n[39]
        ]
      ),
      $$slots: { default: [Zh] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      te(e.$$.fragment), t = ce();
    },
    m(r, l) {
      $(e, r, l), j(r, t, l), i = !0;
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
      i || (A(e.$$.fragment, r), i = !0);
    },
    o(r) {
      S(e.$$.fragment, r), i = !1;
    },
    d(r) {
      r && V(t), ee(e, r);
    }
  };
}
function Cs(n, e) {
  let t, i, r;
  return i = new Bn({
    props: {
      key: "SMUI:chips:chip:index",
      value: (
        /*i*/
        e[39]
      ),
      $$slots: { default: [Qh] },
      $$scope: { ctx: e }
    }
  }), {
    key: n,
    first: null,
    c() {
      t = Xe(), te(i.$$.fragment), this.first = t;
    },
    m(l, a) {
      j(l, t, a), $(i, l, a), r = !0;
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
      r || (A(i.$$.fragment, l), r = !0);
    },
    o(l) {
      S(i.$$.fragment, l), r = !1;
    },
    d(l) {
      l && V(t), ee(i, l);
    }
  };
}
function Jh(n) {
  let e, t = [], i = /* @__PURE__ */ new Map(), r, l, a, s, o, u = Vt(
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
    let g = Is(n, u, h), _ = c(g);
    i.set(_, t[h] = Cs(_, g));
  }
  let d = [
    {
      class: r = re({
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
    f = z(f, d[h]);
  return {
    c() {
      e = le("div");
      for (let h = 0; h < t.length; h += 1)
        t[h].c();
      ae(e, f);
    },
    m(h, g) {
      j(h, e, g);
      for (let _ = 0; _ < t.length; _ += 1)
        t[_] && t[_].m(e, null);
      n[26](e), a = !0, s || (o = [
        de(l = Qe.call(
          null,
          e,
          /*use*/
          n[1]
        )),
        de(
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
    p(h, g) {
      g[0] & /*chips, initialSelected, $$scope, key*/
      134218761 && (u = Vt(
        /*chips*/
        h[0]
      ), Ve(), t = gr(t, g, c, 1, h, u, i, e, pr, Cs, null, Is), je()), ae(e, f = fe(d, [
        (!a || g[0] & /*className, nonInteractive, choice, filter, input*/
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
        g[0] & /*$$restProps*/
        1048576 && /*$$restProps*/
        h[20]
      ])), l && he(l.update) && g[0] & /*use*/
      2 && l.update.call(
        null,
        /*use*/
        h[1]
      );
    },
    i(h) {
      if (!a) {
        for (let g = 0; g < u.length; g += 1)
          A(t[g]);
        a = !0;
      }
    },
    o(h) {
      for (let g = 0; g < t.length; g += 1)
        S(t[g]);
      a = !1;
    },
    d(h) {
      h && V(e);
      for (let g = 0; g < t.length; g += 1)
        t[g].d();
      n[26](null), s = !1, Ze(o);
    }
  };
}
function As(n, e) {
  let t = new Set(n);
  for (let i of e)
    t.delete(i);
  return t;
}
function xh(n, e, t) {
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
  let r = me(e, i), l, a, s, { $$slots: o = {}, $$scope: u } = e;
  const { MDCChipSetFoundation: c } = Er, d = tt(Je());
  let { use: f = [] } = e, { class: h = "" } = e, { chips: g = [] } = e, { key: _ = (K) => K } = e, { selected: m = void 0 } = e, { nonInteractive: C = !1 } = e, { choice: I = !1 } = e, { filter: O = !1 } = e, { input: E = !1 } = e, L, k, p = {}, y = /* @__PURE__ */ new WeakMap(), M = g.map((K) => I && m === K || O && m.indexOf(K) !== -1);
  const v = Lt(C);
  it(n, v, (K) => t(31, s = K)), He("SMUI:chips:nonInteractive", v);
  const b = Lt(I);
  it(n, b, (K) => t(30, a = K)), He("SMUI:chips:choice", b);
  const D = Lt(O);
  it(n, D, (K) => t(29, l = K)), He("SMUI:chips:filter", D);
  let R = O ? new Set(m) : m;
  ut(() => {
    if (t(23, k = new c({
      announceMessage: $a,
      focusChipPrimaryActionAtIndex: (K) => {
        var J;
        (J = Q(g[K])) === null || J === void 0 || J.focusPrimaryAction();
      },
      focusChipTrailingActionAtIndex: (K) => {
        var J;
        (J = Q(g[K])) === null || J === void 0 || J.focusTrailingAction();
      },
      getChipListCount: () => g.length,
      getIndexOfChipById: (K) => g.indexOf(K),
      hasClass: (K) => ve().classList.contains(K),
      isRTL: () => getComputedStyle(ve()).getPropertyValue("direction") === "rtl",
      removeChipAtIndex: (K) => {
        K >= 0 && K < g.length && (I && m === g[K] ? t(21, m = null) : O && m.indexOf(g[K]) !== -1 && (m.splice(m.indexOf(g[K]), 1), t(21, m)), g.splice(K, 1), t(0, g));
      },
      removeFocusFromChipAtIndex: (K) => {
        var J;
        (J = Q(g[K])) === null || J === void 0 || J.removeFocus();
      },
      selectChipAtIndex: (K, J, Ce) => {
        var Te;
        if (K >= 0 && K < g.length) {
          if (O) {
            const Ne = m.indexOf(g[K]);
            J && Ne === -1 ? (m.push(g[K]), t(21, m)) : !J && Ne !== -1 && (m.splice(Ne, 1), t(21, m));
          } else
            I && (J || m === g[K]) && t(21, m = J ? g[K] : null);
          (Te = Q(g[K])) === null || Te === void 0 || Te.setSelectedFromChipSet(J, Ce);
        }
      }
    })), k.init(), I && m != null)
      k.select(m);
    else if (O && m.length)
      for (const K of m)
        k.select(K);
    return () => {
      k.destroy();
    };
  });
  function w(K) {
    const J = K.detail;
    Re(J.chipId, J);
  }
  function q(K) {
    const J = K.detail;
    Fe(J.chipId);
  }
  function U(K) {
    k && k.handleChipInteraction(K.detail);
  }
  function G(K) {
    k && k.handleChipSelection(K.detail);
  }
  function N(K) {
    k && k.handleChipRemoval(K.detail);
  }
  function T(K) {
    k && k.handleChipNavigation(K.detail);
  }
  function Q(K) {
    return K instanceof Object ? y.get(K) : p[K];
  }
  function Re(K, J) {
    K instanceof Object ? y.set(K, J) : p[K] = J;
  }
  function Fe(K) {
    K instanceof Object ? y.delete(K) : delete p[K];
  }
  function ve() {
    return L;
  }
  function ze(K) {
    se[K ? "unshift" : "push"](() => {
      L = K, t(8, L);
    });
  }
  return n.$$set = (K) => {
    e = z(z({}, e), et(K)), t(20, r = me(e, i)), "use" in K && t(1, f = K.use), "class" in K && t(2, h = K.class), "chips" in K && t(0, g = K.chips), "key" in K && t(3, _ = K.key), "selected" in K && t(21, m = K.selected), "nonInteractive" in K && t(4, C = K.nonInteractive), "choice" in K && t(5, I = K.choice), "filter" in K && t(6, O = K.filter), "input" in K && t(7, E = K.input), "$$scope" in K && t(27, u = K.$$scope);
  }, n.$$.update = () => {
    if (n.$$.dirty[0] & /*nonInteractive*/
    16 && Ot(v, s = C, s), n.$$.dirty[0] & /*choice*/
    32 && Ot(b, a = I, a), n.$$.dirty[0] & /*filter*/
    64 && Ot(D, l = O, l), n.$$.dirty[0] & /*instance, choice, previousSelected, selected*/
    27263008 && k && I && R !== m && (t(24, R = m), k.select(m)), n.$$.dirty[0] & /*instance, filter, selected, previousSelected, chips*/
    27263041 && k && O) {
      const K = new Set(m), J = As(R, K), Ce = As(K, R);
      if (J.size || Ce.size) {
        t(24, R = K);
        for (let Te of J)
          g.indexOf(Te) !== -1 && k.handleChipSelection({ chipId: Te, selected: !1 });
        for (let Te of Ce)
          k.handleChipSelection({ chipId: Te, selected: !0 });
      }
    }
  }, [
    g,
    f,
    h,
    _,
    C,
    I,
    O,
    E,
    L,
    d,
    M,
    v,
    b,
    D,
    w,
    q,
    U,
    G,
    N,
    T,
    r,
    m,
    ve,
    k,
    R,
    o,
    ze,
    u
  ];
}
class $h extends Me {
  constructor(e) {
    super(), De(
      this,
      e,
      xh,
      Jh,
      ye,
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
function em(n) {
  let e, t, i, r, l, a, s, o = [
    {
      class: r = re({
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
    u = z(u, o[c]);
  return {
    c() {
      e = le("span"), t = st("svg"), i = st("path"), B(i, "class", "mdc-chip__checkmark-path"), B(i, "fill", "none"), B(i, "stroke", "black"), B(i, "d", "M1.73,12.91 8.1,19.28 22.79,4.59"), B(t, "class", "mdc-chip__checkmark-svg"), B(t, "viewBox", "-2 -3 30 30"), ae(e, u);
    },
    m(c, d) {
      j(c, e, d), ne(e, t), ne(t, i), n[5](e), a || (s = de(l = Qe.call(
        null,
        e,
        /*use*/
        n[0]
      )), a = !0);
    },
    p(c, [d]) {
      ae(e, u = fe(o, [
        d & /*className*/
        2 && r !== (r = re({
          [
            /*className*/
            c[1]
          ]: !0,
          "mdc-chip__checkmark": !0
        })) && { class: r },
        d & /*$$restProps*/
        8 && /*$$restProps*/
        c[3]
      ])), l && he(l.update) && d & /*use*/
      1 && l.update.call(
        null,
        /*use*/
        c[0]
      );
    },
    i: nt,
    o: nt,
    d(c) {
      c && V(e), n[5](null), a = !1, s();
    }
  };
}
function tm(n, e, t) {
  const i = ["use", "class", "getElement"];
  let r = me(e, i), { use: l = [] } = e, { class: a = "" } = e, s;
  function o() {
    return s;
  }
  function u(c) {
    se[c ? "unshift" : "push"](() => {
      s = c, t(2, s);
    });
  }
  return n.$$set = (c) => {
    e = z(z({}, e), et(c)), t(3, r = me(e, i)), "use" in c && t(0, l = c.use), "class" in c && t(1, a = c.class);
  }, [l, a, s, r, o, u];
}
class nm extends Me {
  constructor(e) {
    super(), De(this, e, tm, em, ye, { use: 0, class: 1, getElement: 4 });
  }
  get getElement() {
    return this.$$.ctx[4];
  }
}
function Es(n) {
  let e, t, i = {};
  return e = new nm({ props: i }), n[23](e), {
    c() {
      te(e.$$.fragment);
    },
    m(r, l) {
      $(e, r, l), t = !0;
    },
    p(r, l) {
      const a = {};
      e.$set(a);
    },
    i(r) {
      t || (A(e.$$.fragment, r), t = !0);
    },
    o(r) {
      S(e.$$.fragment, r), t = !1;
    },
    d(r) {
      n[23](null), ee(e, r);
    }
  };
}
function im(n) {
  let e, t, i, r;
  const l = (
    /*#slots*/
    n[22].default
  ), a = ge(
    l,
    n,
    /*$$scope*/
    n[21],
    null
  );
  let s = [
    {
      class: i = re({
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
    o = z(o, s[u]);
  return {
    c() {
      e = le("span"), t = le("span"), a && a.c(), B(t, "class", "mdc-chip__text"), ae(e, o);
    },
    m(u, c) {
      j(u, e, c), ne(e, t), a && a.m(t, null), n[24](e), r = !0;
    },
    p(u, c) {
      a && a.p && (!r || c & /*$$scope*/
      2097152) && be(
        a,
        l,
        u,
        /*$$scope*/
        u[21],
        r ? _e(
          l,
          /*$$scope*/
          u[21],
          c,
          null
        ) : Ie(
          /*$$scope*/
          u[21]
        ),
        null
      ), ae(e, o = fe(s, [
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
      S(a, u), r = !1;
    },
    d(u) {
      u && V(e), a && a.d(u), n[24](null);
    }
  };
}
function rm(n) {
  let e, t;
  const i = (
    /*#slots*/
    n[22].default
  ), r = ge(
    i,
    n,
    /*$$scope*/
    n[21],
    null
  );
  return {
    c() {
      e = le("span"), r && r.c(), B(e, "class", "mdc-chip__text");
    },
    m(l, a) {
      j(l, e, a), r && r.m(e, null), t = !0;
    },
    p(l, a) {
      r && r.p && (!t || a & /*$$scope*/
      2097152) && be(
        r,
        i,
        l,
        /*$$scope*/
        l[21],
        t ? _e(
          i,
          /*$$scope*/
          l[21],
          a,
          null
        ) : Ie(
          /*$$scope*/
          l[21]
        ),
        null
      );
    },
    i(l) {
      t || (A(r, l), t = !0);
    },
    o(l) {
      S(r, l), t = !1;
    },
    d(l) {
      l && V(e), r && r.d(l);
    }
  };
}
function lm(n) {
  let e, t, i, r, l, a, s, o, u = (
    /*$filter*/
    n[3] && Es(n)
  );
  const c = [rm, im], d = [];
  function f(h, g) {
    return (
      /*$nonInteractive*/
      h[9] ? 0 : 1
    );
  }
  return i = f(n), r = d[i] = c[i](n), {
    c() {
      u && u.c(), e = ce(), t = le("span"), r.c(), B(t, "role", "gridcell");
    },
    m(h, g) {
      u && u.m(h, g), j(h, e, g), j(h, t, g), d[i].m(t, null), n[25](t), a = !0, s || (o = [
        de(l = Qe.call(
          null,
          t,
          /*use*/
          n[0]
        )),
        de(
          /*forwardEvents*/
          n[11].call(null, t)
        )
      ], s = !0);
    },
    p(h, [g]) {
      /*$filter*/
      h[3] ? u ? (u.p(h, g), g & /*$filter*/
      8 && A(u, 1)) : (u = Es(h), u.c(), A(u, 1), u.m(e.parentNode, e)) : u && (Ve(), S(u, 1, 1, () => {
        u = null;
      }), je());
      let _ = i;
      i = f(h), i === _ ? d[i].p(h, g) : (Ve(), S(d[_], 1, 1, () => {
        d[_] = null;
      }), je(), r = d[i], r ? r.p(h, g) : (r = d[i] = c[i](h), r.c()), A(r, 1), r.m(t, null)), l && he(l.update) && g & /*use*/
      1 && l.update.call(
        null,
        /*use*/
        h[0]
      );
    },
    i(h) {
      a || (A(u), A(r), a = !0);
    },
    o(h) {
      S(u), S(r), a = !1;
    },
    d(h) {
      h && (V(e), V(t)), u && u.d(h), d[i].d(), n[25](null), s = !1, Ze(o);
    }
  };
}
function sm(n, e, t) {
  let i;
  const r = ["use", "class", "tabindex", "focus", "getInput", "getElement"];
  let l = me(e, r), a, s, o, u, { $$slots: c = {}, $$scope: d } = e;
  const f = tt(Je());
  let { use: h = [] } = e, { class: g = "" } = e, { tabindex: _ = qe("SMUI:chips:chip:focusable") ? 0 : -1 } = e, m, C, I, O = {};
  const E = qe("SMUI:chips:nonInteractive");
  it(n, E, (U) => t(9, o = U));
  const L = qe("SMUI:chips:choice");
  it(n, L, (U) => t(2, a = U));
  const k = qe("SMUI:chips:filter");
  it(n, k, (U) => t(3, s = U));
  const p = qe("SMUI:chips:chip:isSelected");
  it(n, p, (U) => t(10, u = U)), ut(() => {
    let U = { focus: v, addAttr: y };
    return pe(D(), "SMUIChipsChipPrimaryAction:mount", U), () => {
      pe(D(), "SMUIChipsChipPrimaryAction:unmount", U);
    };
  });
  function y(U, G) {
    O[U] !== G && t(7, O[U] = G, O);
  }
  function M(U) {
    O.tabindex !== m.getAttribute("tabindex") ? mr().then(U) : U();
  }
  function v() {
    M(() => {
      I && I.focus();
    });
  }
  function b() {
    return C && C.getElement();
  }
  function D() {
    return m;
  }
  function R(U) {
    se[U ? "unshift" : "push"](() => {
      C = U, t(5, C);
    });
  }
  function w(U) {
    se[U ? "unshift" : "push"](() => {
      I = U, t(6, I);
    });
  }
  function q(U) {
    se[U ? "unshift" : "push"](() => {
      m = U, t(4, m);
    });
  }
  return n.$$set = (U) => {
    e = z(z({}, e), et(U)), t(16, l = me(e, r)), "use" in U && t(0, h = U.use), "class" in U && t(1, g = U.class), "tabindex" in U && t(17, _ = U.tabindex), "$$scope" in U && t(21, d = U.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty & /*$filter, $choice, tabindex*/
    131084 && t(8, i = {
      role: s ? "checkbox" : a ? "radio" : "button",
      tabindex: _
    });
  }, [
    h,
    g,
    a,
    s,
    m,
    C,
    I,
    O,
    i,
    o,
    u,
    f,
    E,
    L,
    k,
    p,
    l,
    _,
    v,
    b,
    D,
    d,
    c,
    R,
    w,
    q
  ];
}
class am extends Me {
  constructor(e) {
    super(), De(this, e, sm, lm, ye, {
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
function ys(n) {
  let e;
  return {
    c() {
      e = le("span"), B(e, "class", "mdc-deprecated-chip-trailing-action__touch");
    },
    m(t, i) {
      j(t, e, i);
    },
    d(t) {
      t && V(e);
    }
  };
}
function om(n) {
  let e, t, i, r, l, a, s, o, u, c, d, f, h, g, _, m = (
    /*touch*/
    n[4] && ys()
  );
  const C = (
    /*#slots*/
    n[23].default
  ), I = ge(
    C,
    n,
    /*$$scope*/
    n[22],
    null
  );
  let O = [
    {
      class: a = re({
        [
          /*icon$class*/
          n[7]
        ]: !0,
        "mdc-deprecated-chip-trailing-action__icon": !0
      })
    },
    Pe(
      /*$$restProps*/
      n[17],
      "icon$"
    )
  ], E = {};
  for (let p = 0; p < O.length; p += 1)
    E = z(E, O[p]);
  let L = [
    { type: "button" },
    {
      class: o = re({
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
      ).map(Ss).concat([
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
    jt(
      /*$$restProps*/
      n[17],
      ["icon$"]
    )
  ], k = {};
  for (let p = 0; p < L.length; p += 1)
    k = z(k, L[p]);
  return {
    c() {
      e = le("button"), t = le("span"), i = ce(), m && m.c(), r = ce(), l = le("span"), I && I.c(), B(t, "class", "mdc-deprecated-chip-trailing-action__ripple"), ae(l, E), ae(e, k);
    },
    m(p, y) {
      j(p, e, y), ne(e, t), ne(e, i), m && m.m(e, null), ne(e, r), ne(e, l), I && I.m(l, null), e.autofocus && e.focus(), n[24](e), h = !0, g || (_ = [
        de(s = Qe.call(
          null,
          l,
          /*icon$use*/
          n[6]
        )),
        de(d = Rt.call(null, e, {
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
        de(f = Qe.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        de(
          /*forwardEvents*/
          n[13].call(null, e)
        ),
        oe(e, "click", function() {
          he(
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
          he(
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
      ], g = !0);
    },
    p(p, [y]) {
      n = p, /*touch*/
      n[4] ? m || (m = ys(), m.c(), m.m(e, r)) : m && (m.d(1), m = null), I && I.p && (!h || y & /*$$scope*/
      4194304) && be(
        I,
        C,
        n,
        /*$$scope*/
        n[22],
        h ? _e(
          C,
          /*$$scope*/
          n[22],
          y,
          null
        ) : Ie(
          /*$$scope*/
          n[22]
        ),
        null
      ), ae(l, E = fe(O, [
        (!h || y & /*icon$class*/
        128 && a !== (a = re({
          [
            /*icon$class*/
            n[7]
          ]: !0,
          "mdc-deprecated-chip-trailing-action__icon": !0
        }))) && { class: a },
        y & /*$$restProps*/
        131072 && Pe(
          /*$$restProps*/
          n[17],
          "icon$"
        )
      ])), s && he(s.update) && y & /*icon$use*/
      64 && s.update.call(
        null,
        /*icon$use*/
        n[6]
      ), ae(e, k = fe(L, [
        { type: "button" },
        (!h || y & /*className, internalClasses*/
        1026 && o !== (o = re({
          [
            /*className*/
            n[1]
          ]: !0,
          "mdc-deprecated-chip-trailing-action": !0,
          .../*internalClasses*/
          n[10]
        }))) && { class: o },
        (!h || y & /*internalStyles, style*/
        2052 && u !== (u = Object.entries(
          /*internalStyles*/
          n[11]
        ).map(Ss).concat([
          /*style*/
          n[2]
        ]).join(" "))) && { style: u },
        (!h || y & /*nonNavigable*/
        32 && c !== (c = /*nonNavigable*/
        n[5] ? "true" : void 0)) && { "aria-hidden": c },
        { tabindex: "-1" },
        y & /*internalAttrs*/
        4096 && /*internalAttrs*/
        n[12],
        y & /*$$restProps*/
        131072 && jt(
          /*$$restProps*/
          n[17],
          ["icon$"]
        )
      ])), d && he(d.update) && y & /*ripple*/
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
      }), f && he(f.update) && y & /*use*/
      1 && f.update.call(
        null,
        /*use*/
        n[0]
      );
    },
    i(p) {
      h || (A(I, p), h = !0);
    },
    o(p) {
      S(I, p), h = !1;
    },
    d(p) {
      p && V(e), m && m.d(), I && I.d(p), n[24](null), g = !1, Ze(_);
    }
  };
}
const Ss = ([n, e]) => `${n}: ${e};`;
function um(n, e, t) {
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
  let r = me(e, i), { $$slots: l = {}, $$scope: a } = e;
  const { MDCChipTrailingActionFoundation: s } = Er, o = tt(Je());
  let { use: u = [] } = e, { class: c = "" } = e, { style: d = "" } = e, { ripple: f = !0 } = e, { touch: h = !1 } = e, { nonNavigable: g = !1 } = e, { icon$use: _ = [] } = e, { icon$class: m = "" } = e, C, I, O = {}, E = {}, L = {};
  ut(() => {
    t(9, I = new s({
      focus: () => {
        const N = q();
        b(() => {
          N.focus();
        });
      },
      getAttribute: M,
      notifyInteraction: (N) => pe(q(), "SMUIChipTrailingAction:interaction", { trigger: N }, void 0, !0),
      notifyNavigation: (N) => {
        pe(q(), "SMUIChipTrailingAction:navigation", { key: N }, void 0, !0);
      },
      setAttribute: v
    }));
    const G = { isNavigable: D, focus: R, removeFocus: w };
    return pe(q(), "SMUIChipsChipTrailingAction:mount", G), I.init(), () => {
      pe(q(), "SMUIChipsChipTrailingAction:unmount", G), I.destroy();
    };
  });
  function k(G) {
    O[G] || t(10, O[G] = !0, O);
  }
  function p(G) {
    (!(G in O) || O[G]) && t(10, O[G] = !1, O);
  }
  function y(G, N) {
    E[G] != N && (N === "" || N == null ? (delete E[G], t(11, E)) : t(11, E[G] = N, E));
  }
  function M(G) {
    var N;
    return G in L ? (N = L[G]) !== null && N !== void 0 ? N : null : q().getAttribute(G);
  }
  function v(G, N) {
    L[G] !== N && t(12, L[G] = N, L);
  }
  function b(G) {
    L.tabindex !== C.getAttribute("tabindex") ? mr().then(G) : G();
  }
  function D() {
    return I.isNavigable();
  }
  function R() {
    I.focus();
  }
  function w() {
    I.removeFocus();
  }
  function q() {
    return C;
  }
  function U(G) {
    se[G ? "unshift" : "push"](() => {
      C = G, t(8, C);
    });
  }
  return n.$$set = (G) => {
    e = z(z({}, e), et(G)), t(17, r = me(e, i)), "use" in G && t(0, u = G.use), "class" in G && t(1, c = G.class), "style" in G && t(2, d = G.style), "ripple" in G && t(3, f = G.ripple), "touch" in G && t(4, h = G.touch), "nonNavigable" in G && t(5, g = G.nonNavigable), "icon$use" in G && t(6, _ = G.icon$use), "icon$class" in G && t(7, m = G.icon$class), "$$scope" in G && t(22, a = G.$$scope);
  }, [
    u,
    c,
    d,
    f,
    h,
    g,
    _,
    m,
    C,
    I,
    O,
    E,
    L,
    o,
    k,
    p,
    y,
    r,
    D,
    R,
    w,
    q,
    a,
    l,
    U
  ];
}
class cm extends Me {
  constructor(e) {
    super(), De(this, e, um, om, ye, {
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
function dm(n) {
  let e;
  return {
    c() {
      e = ot(
        /*title*/
        n[0]
      );
    },
    m(t, i) {
      j(t, e, i);
    },
    p(t, i) {
      i & /*title*/
      1 && St(
        e,
        /*title*/
        t[0]
      );
    },
    d(t) {
      t && V(e);
    }
  };
}
function Ts(n) {
  let e, t;
  return e = new cm({
    props: {
      $$slots: { default: [fm] },
      $$scope: { ctx: n }
    }
  }), e.$on("click", function() {
    he(
      /*callback*/
      n[2]
    ) && n[2].apply(this, arguments);
  }), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      $(e, i, r), t = !0;
    },
    p(i, r) {
      n = i;
      const l = {};
      r & /*$$scope*/
      16 && (l.$$scope = { dirty: r, ctx: n }), e.$set(l);
    },
    i(i) {
      t || (A(e.$$.fragment, i), t = !0);
    },
    o(i) {
      S(e.$$.fragment, i), t = !1;
    },
    d(i) {
      ee(e, i);
    }
  };
}
function fm(n) {
  let e, t;
  return e = new vr({
    props: {
      svgStyles: "margin-left: 0; fill: unset;"
    }
  }), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      $(e, i, r), t = !0;
    },
    p: nt,
    i(i) {
      t || (A(e.$$.fragment, i), t = !0);
    },
    o(i) {
      S(e.$$.fragment, i), t = !1;
    },
    d(i) {
      ee(e, i);
    }
  };
}
function hm(n) {
  let e, t, i, r;
  e = new am({
    props: {
      $$slots: { default: [dm] },
      $$scope: { ctx: n }
    }
  });
  let l = (
    /*closeable*/
    n[1] && !/*disabled*/
    n[3] && Ts(n)
  );
  return {
    c() {
      te(e.$$.fragment), t = ce(), l && l.c(), i = Xe();
    },
    m(a, s) {
      $(e, a, s), j(a, t, s), l && l.m(a, s), j(a, i, s), r = !0;
    },
    p(a, s) {
      const o = {};
      s & /*$$scope, title*/
      17 && (o.$$scope = { dirty: s, ctx: a }), e.$set(o), /*closeable*/
      a[1] && !/*disabled*/
      a[3] ? l ? (l.p(a, s), s & /*closeable, disabled*/
      10 && A(l, 1)) : (l = Ts(a), l.c(), A(l, 1), l.m(i.parentNode, i)) : l && (Ve(), S(l, 1, 1, () => {
        l = null;
      }), je());
    },
    i(a) {
      r || (A(e.$$.fragment, a), A(l), r = !0);
    },
    o(a) {
      S(e.$$.fragment, a), S(l), r = !1;
    },
    d(a) {
      a && (V(t), V(i)), ee(e, a), l && l.d(a);
    }
  };
}
function mm(n) {
  let e, t;
  return e = new Yh({
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
      $$slots: { default: [hm] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      $(e, i, r), t = !0;
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
      t || (A(e.$$.fragment, i), t = !0);
    },
    o(i) {
      S(e.$$.fragment, i), t = !1;
    },
    d(i) {
      ee(e, i);
    }
  };
}
function pm(n, e, t) {
  let { title: i = "" } = e, { closeable: r = !0 } = e, { callback: l } = e, { disabled: a = !1 } = e;
  return n.$$set = (s) => {
    "title" in s && t(0, i = s.title), "closeable" in s && t(1, r = s.closeable), "callback" in s && t(2, l = s.callback), "disabled" in s && t(3, a = s.disabled);
  }, [i, r, l, a];
}
class gm extends Me {
  constructor(e) {
    super(), De(this, e, pm, mm, ye, {
      title: 0,
      closeable: 1,
      callback: 2,
      disabled: 3
    });
  }
}
const _m = (n) => ({}), Ls = (n) => ({});
function Os(n) {
  let e, t, i;
  function r(a) {
    n[14](a);
  }
  let l = { label: "Input" };
  return (
    /*inputValue*/
    n[3] !== void 0 && (l.value = /*inputValue*/
    n[3]), e = new fc({ props: l }), se.push(() => _t(e, "value", r)), {
      c() {
        te(e.$$.fragment);
      },
      m(a, s) {
        $(e, a, s), i = !0;
      },
      p(a, s) {
        const o = {};
        !t && s & /*inputValue*/
        8 && (t = !0, o.value = /*inputValue*/
        a[3], gt(() => t = !1)), e.$set(o);
      },
      i(a) {
        i || (A(e.$$.fragment, a), i = !0);
      },
      o(a) {
        S(e.$$.fragment, a), i = !1;
      },
      d(a) {
        ee(e, a);
      }
    }
  );
}
function Rs(n) {
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
    n[1]), e = new aa({ props: s }), se.push(() => _t(e, "value", l)), se.push(() => _t(e, "selectedOptionIndex", a)), {
      c() {
        te(e.$$.fragment);
      },
      m(u, c) {
        $(e, u, c), r = !0;
      },
      p(u, c) {
        var f;
        const d = {};
        c & /*getSelectedFilterType*/
        32 && (d.data = /*getSelectedFilterType*/
        (f = u[5].inputType) == null ? void 0 : f.options), !t && c & /*inputValue*/
        8 && (t = !0, d.value = /*inputValue*/
        u[3], gt(() => t = !1)), !i && c & /*selectedOptionIndex*/
        2 && (i = !0, d.selectedOptionIndex = /*selectedOptionIndex*/
        u[1], gt(() => i = !1)), e.$set(d);
      },
      i(u) {
        r || (A(e.$$.fragment, u), r = !0);
      },
      o(u) {
        S(e.$$.fragment, u), r = !1;
      },
      d(u) {
        ee(e, u);
      }
    }
  );
}
function ks(n) {
  let e, t, i;
  function r(a) {
    n[17](a);
  }
  let l = {};
  return (
    /*inputValue*/
    n[3] !== void 0 && (l.value = /*inputValue*/
    n[3]), e = new Jd({ props: l }), se.push(() => _t(e, "value", r)), {
      c() {
        te(e.$$.fragment);
      },
      m(a, s) {
        $(e, a, s), i = !0;
      },
      p(a, s) {
        const o = {};
        !t && s & /*inputValue*/
        8 && (t = !0, o.value = /*inputValue*/
        a[3], gt(() => t = !1)), e.$set(o);
      },
      i(a) {
        i || (A(e.$$.fragment, a), i = !0);
      },
      o(a) {
        S(e.$$.fragment, a), i = !1;
      },
      d(a) {
        ee(e, a);
      }
    }
  );
}
function bm(n) {
  let e;
  return {
    c() {
      e = ot("Add Filter");
    },
    m(t, i) {
      j(t, e, i);
    },
    d(t) {
      t && V(e);
    }
  };
}
function Im(n) {
  let e, t;
  function i() {
    return (
      /*func*/
      n[18](
        /*chip*/
        n[22]
      )
    );
  }
  return e = new gm({
    props: {
      title: (
        /*chip*/
        n[22].text
      ),
      callback: i,
      disabled: (
        /*chip*/
        n[22].disabled
      )
    }
  }), {
    c() {
      te(e.$$.fragment);
    },
    m(r, l) {
      $(e, r, l), t = !0;
    },
    p(r, l) {
      n = r;
      const a = {};
      l & /*chip*/
      4194304 && (a.title = /*chip*/
      n[22].text), l & /*chip*/
      4194304 && (a.callback = i), l & /*chip*/
      4194304 && (a.disabled = /*chip*/
      n[22].disabled), e.$set(a);
    },
    i(r) {
      t || (A(e.$$.fragment, r), t = !0);
    },
    o(r) {
      S(e.$$.fragment, r), t = !1;
    },
    d(r) {
      ee(e, r);
    }
  };
}
function vm(n) {
  var v, b, D, R, w, q;
  let e, t, i, r, l, a, s, o, u, c, d, f, h, g, _, m, C, I;
  function O(U) {
    n[13](U);
  }
  let E = {
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
  n[4] !== void 0 && (E.value = /*selectedFilterType*/
  n[4]), r = new aa({ props: E }), se.push(() => _t(r, "value", O));
  let L = (
    /*getSelectedFilterType*/
    ((b = (v = n[5]) == null ? void 0 : v.inputType) == null ? void 0 : b.type) === "string" && Os(n)
  ), k = (
    /*getSelectedFilterType*/
    ((R = (D = n[5]) == null ? void 0 : D.inputType) == null ? void 0 : R.type) === "select" && Rs(n)
  ), p = (
    /*getSelectedFilterType*/
    ((q = (w = n[5]) == null ? void 0 : w.inputType) == null ? void 0 : q.type) === "timepicker" && ks(n)
  );
  d = new gi({
    props: {
      callback: (
        /*addFilter*/
        n[8]
      ),
      disabled: (
        /*addFilterDisabled*/
        n[6]
      ),
      $$slots: { default: [bm] },
      $$scope: { ctx: n }
    }
  });
  const y = (
    /*#slots*/
    n[12]["filter-controls"]
  ), M = ge(
    y,
    n,
    /*$$scope*/
    n[19],
    Ls
  );
  return C = new $h({
    props: {
      chips: (
        /*activeFilters*/
        n[0]
      ),
      $$slots: {
        default: [
          Im,
          ({ chip: U }) => ({ 22: U }),
          ({ chip: U }) => U ? 4194304 : 0
        ]
      },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      e = le("div"), t = le("div"), i = le("div"), te(r.$$.fragment), a = ce(), L && L.c(), s = ce(), k && k.c(), o = ce(), p && p.c(), u = ce(), c = le("div"), te(d.$$.fragment), f = ce(), M && M.c(), h = ce(), g = le("div"), _ = ce(), m = le("div"), te(C.$$.fragment), B(i, "class", "filter-input-controls svelte-1tmo1p6"), B(c, "class", "filter-button-controls svelte-1tmo1p6"), B(t, "class", "input-section svelte-1tmo1p6"), B(g, "class", "separator svelte-1tmo1p6"), B(m, "class", "chip-section svelte-1tmo1p6"), B(e, "class", "filter-box-container svelte-1tmo1p6");
    },
    m(U, G) {
      j(U, e, G), ne(e, t), ne(t, i), $(r, i, null), ne(i, a), L && L.m(i, null), ne(i, s), k && k.m(i, null), ne(i, o), p && p.m(i, null), ne(t, u), ne(t, c), $(d, c, null), ne(c, f), M && M.m(c, null), ne(e, h), ne(e, g), ne(e, _), ne(e, m), $(C, m, null), I = !0;
    },
    p(U, G) {
      var Re, Fe, ve, ze, K, J;
      const N = {};
      G & /*disabled*/
      4 && (N.disabled = /*disabled*/
      U[2]), G & /*convertTypeToSelection*/
      128 && (N.data = /*convertTypeToSelection*/
      U[7]), !l && G & /*selectedFilterType*/
      16 && (l = !0, N.value = /*selectedFilterType*/
      U[4], gt(() => l = !1)), r.$set(N), /*getSelectedFilterType*/
      ((Fe = (Re = U[5]) == null ? void 0 : Re.inputType) == null ? void 0 : Fe.type) === "string" ? L ? (L.p(U, G), G & /*getSelectedFilterType*/
      32 && A(L, 1)) : (L = Os(U), L.c(), A(L, 1), L.m(i, s)) : L && (Ve(), S(L, 1, 1, () => {
        L = null;
      }), je()), /*getSelectedFilterType*/
      ((ze = (ve = U[5]) == null ? void 0 : ve.inputType) == null ? void 0 : ze.type) === "select" ? k ? (k.p(U, G), G & /*getSelectedFilterType*/
      32 && A(k, 1)) : (k = Rs(U), k.c(), A(k, 1), k.m(i, o)) : k && (Ve(), S(k, 1, 1, () => {
        k = null;
      }), je()), /*getSelectedFilterType*/
      ((J = (K = U[5]) == null ? void 0 : K.inputType) == null ? void 0 : J.type) === "timepicker" ? p ? (p.p(U, G), G & /*getSelectedFilterType*/
      32 && A(p, 1)) : (p = ks(U), p.c(), A(p, 1), p.m(i, null)) : p && (Ve(), S(p, 1, 1, () => {
        p = null;
      }), je());
      const T = {};
      G & /*addFilterDisabled*/
      64 && (T.disabled = /*addFilterDisabled*/
      U[6]), G & /*$$scope*/
      524288 && (T.$$scope = { dirty: G, ctx: U }), d.$set(T), M && M.p && (!I || G & /*$$scope*/
      524288) && be(
        M,
        y,
        U,
        /*$$scope*/
        U[19],
        I ? _e(
          y,
          /*$$scope*/
          U[19],
          G,
          _m
        ) : Ie(
          /*$$scope*/
          U[19]
        ),
        Ls
      );
      const Q = {};
      G & /*activeFilters*/
      1 && (Q.chips = /*activeFilters*/
      U[0]), G & /*$$scope, chip*/
      4718592 && (Q.$$scope = { dirty: G, ctx: U }), C.$set(Q);
    },
    i(U) {
      I || (A(r.$$.fragment, U), A(L), A(k), A(p), A(d.$$.fragment, U), A(M, U), A(C.$$.fragment, U), I = !0);
    },
    o(U) {
      S(r.$$.fragment, U), S(L), S(k), S(p), S(d.$$.fragment, U), S(M, U), S(C.$$.fragment, U), I = !1;
    },
    d(U) {
      U && V(e), ee(r), L && L.d(), k && k.d(), p && p.d(), ee(d), M && M.d(U), ee(C);
    }
  };
}
function Cm(n) {
  let e, t;
  return e = new ef({
    props: {
      $$slots: { default: [vm] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      $(e, i, r), t = !0;
    },
    p(i, [r]) {
      const l = {};
      r & /*$$scope, activeFilters, addFilterDisabled, inputValue, getSelectedFilterType, selectedOptionIndex, disabled, convertTypeToSelection, selectedFilterType*/
      524543 && (l.$$scope = { dirty: r, ctx: i }), e.$set(l);
    },
    i(i) {
      t || (A(e.$$.fragment, i), t = !0);
    },
    o(i) {
      S(e.$$.fragment, i), t = !1;
    },
    d(i) {
      ee(e, i);
    }
  };
}
function Am(n, e, t) {
  let i, r, l, { $$slots: a = {}, $$scope: s } = e, { filterTypes: o = [] } = e, { activeFilters: u = [] } = e, { useOptionLabelInChipText: c = !1 } = e, { selectedOptionIndex: d = -1 } = e, { disabled: f = !1 } = e, h = "", g = "";
  function _() {
    var M;
    if (!g || !h) {
      console.warn("Filter type or input value is empty");
      return;
    }
    if (!l) {
      console.warn("Filter type not found");
      return;
    }
    let v = [
      ...u,
      {
        id: "crypto.randomUUID()",
        key: l.label.toLowerCase(),
        value: h,
        operation: "=",
        text: `${g}: ${c && (!((M = l.inputType.options) === null || M === void 0) && M.length) ? l.inputType.options[d].label : h}`,
        disabled: !1
      }
    ];
    t(0, u = v), I(), C();
  }
  function m(M) {
    setTimeout(
      () => {
        t(0, u = u.filter((v) => v.id !== M)), I();
      },
      0
    );
  }
  function C() {
    t(3, h = ""), t(4, g = void 0);
  }
  function I() {
    const M = [...u];
    M.find((v) => v.key === "uuid") ? M.filter((v) => v.key !== "uuid").forEach((v) => {
      v.disabled = !0;
    }) : M.forEach((v) => {
      v.disabled = !1;
    }), t(0, u = M);
  }
  function O(M) {
    g = M, t(4, g);
  }
  function E(M) {
    h = M, t(3, h);
  }
  function L(M) {
    h = M, t(3, h);
  }
  function k(M) {
    d = M, t(1, d);
  }
  function p(M) {
    h = M, t(3, h);
  }
  const y = (M) => m(M.id);
  return n.$$set = (M) => {
    "filterTypes" in M && t(10, o = M.filterTypes), "activeFilters" in M && t(0, u = M.activeFilters), "useOptionLabelInChipText" in M && t(11, c = M.useOptionLabelInChipText), "selectedOptionIndex" in M && t(1, d = M.selectedOptionIndex), "disabled" in M && t(2, f = M.disabled), "$$scope" in M && t(19, s = M.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty & /*filterTypes*/
    1024 && t(7, i = o.map((M) => ({ value: M.label, label: M.label }))), n.$$.dirty & /*selectedFilterType, inputValue*/
    24 && t(6, r = !g || !h), n.$$.dirty & /*filterTypes, selectedFilterType*/
    1040 && t(5, l = o.find((M) => M.label === g));
  }, [
    u,
    d,
    f,
    h,
    g,
    l,
    r,
    i,
    _,
    m,
    o,
    c,
    a,
    O,
    E,
    L,
    k,
    p,
    y,
    s
  ];
}
class Em extends Me {
  constructor(e) {
    super(), De(this, e, Am, Cm, ye, {
      filterTypes: 10,
      activeFilters: 0,
      useOptionLabelInChipText: 11,
      selectedOptionIndex: 1,
      disabled: 2
    });
  }
}
function ym(n) {
  let e, t, i, r, l, a;
  const s = (
    /*#slots*/
    n[9].default
  ), o = ge(
    s,
    n,
    /*$$scope*/
    n[8],
    null
  );
  let u = [
    {
      class: t = re({
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
    c = z(c, u[d]);
  return {
    c() {
      e = le("div"), o && o.c(), ae(e, c);
    },
    m(d, f) {
      j(d, e, f), o && o.m(e, null), n[10](e), r = !0, l || (a = [
        de(i = Qe.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        de(
          /*forwardEvents*/
          n[5].call(null, e)
        )
      ], l = !0);
    },
    p(d, [f]) {
      o && o.p && (!r || f & /*$$scope*/
      256) && be(
        o,
        s,
        d,
        /*$$scope*/
        d[8],
        r ? _e(
          s,
          /*$$scope*/
          d[8],
          f,
          null
        ) : Ie(
          /*$$scope*/
          d[8]
        ),
        null
      ), ae(e, c = fe(u, [
        (!r || f & /*className, variant, padded*/
        14 && t !== (t = re({
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
      ])), i && he(i.update) && f & /*use*/
      1 && i.update.call(
        null,
        /*use*/
        d[0]
      );
    },
    i(d) {
      r || (A(o, d), r = !0);
    },
    o(d) {
      S(o, d), r = !1;
    },
    d(d) {
      d && V(e), o && o.d(d), n[10](null), l = !1, Ze(a);
    }
  };
}
function Sm(n, e, t) {
  const i = ["use", "class", "variant", "padded", "getElement"];
  let r = me(e, i), { $$slots: l = {}, $$scope: a } = e;
  const s = tt(Je());
  let { use: o = [] } = e, { class: u = "" } = e, { variant: c = "raised" } = e, { padded: d = !1 } = e, f;
  function h() {
    return f;
  }
  function g(_) {
    se[_ ? "unshift" : "push"](() => {
      f = _, t(4, f);
    });
  }
  return n.$$set = (_) => {
    e = z(z({}, e), et(_)), t(6, r = me(e, i)), "use" in _ && t(0, o = _.use), "class" in _ && t(1, u = _.class), "variant" in _ && t(2, c = _.variant), "padded" in _ && t(3, d = _.padded), "$$scope" in _ && t(8, a = _.$$scope);
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
    g
  ];
}
class Tm extends Me {
  constructor(e) {
    super(), De(this, e, Sm, ym, ye, {
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
At({
  class: "smui-card__content",
  tag: "div"
});
At({
  class: "mdc-card__media-content",
  tag: "div"
});
At({
  class: "mdc-card__action-buttons",
  tag: "div"
});
At({
  class: "mdc-card__action-icons",
  tag: "div"
});
function Ct(n) {
  return typeof n == "function";
}
function Lm(n) {
  return Ct(n == null ? void 0 : n.lift);
}
function Zt(n) {
  return function(e) {
    if (Lm(e))
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
var ma = function(n) {
  return n && typeof n.length == "number" && typeof n != "function";
};
function pa(n) {
  return Ct(n == null ? void 0 : n.then);
}
function ga(n) {
  var e = function(i) {
    Error.call(i), i.stack = new Error().stack;
  }, t = n(e);
  return t.prototype = Object.create(Error.prototype), t.prototype.constructor = t, t;
}
var er = ga(function(n) {
  return function(t) {
    n(this), this.message = t ? t.length + ` errors occurred during unsubscription:
` + t.map(function(i, r) {
      return r + 1 + ") " + i.toString();
    }).join(`
  `) : "", this.name = "UnsubscriptionError", this.errors = t;
  };
});
function Ds(n, e) {
  if (n) {
    var t = n.indexOf(e);
    0 <= t && n.splice(t, 1);
  }
}
var yr = function() {
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
            for (var s = yt(a), o = s.next(); !o.done; o = s.next()) {
              var u = o.value;
              u.remove(this);
            }
          } catch (_) {
            e = { error: _ };
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
        } catch (_) {
          l = _ instanceof er ? _.errors : [_];
        }
      var d = this._finalizers;
      if (d) {
        this._finalizers = null;
        try {
          for (var f = yt(d), h = f.next(); !h.done; h = f.next()) {
            var g = h.value;
            try {
              Ms(g);
            } catch (_) {
              l = l ?? [], _ instanceof er ? l = xn(xn([], Hn(l)), Hn(_.errors)) : l.push(_);
            }
          }
        } catch (_) {
          i = { error: _ };
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
        throw new er(l);
    }
  }, n.prototype.add = function(e) {
    var t;
    if (e && e !== this)
      if (this.closed)
        Ms(e);
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
    t === e ? this._parentage = null : Array.isArray(t) && Ds(t, e);
  }, n.prototype.remove = function(e) {
    var t = this._finalizers;
    t && Ds(t, e), e instanceof n && e._removeParent(this);
  }, n.EMPTY = function() {
    var e = new n();
    return e.closed = !0, e;
  }(), n;
}();
yr.EMPTY;
function _a(n) {
  return n instanceof yr || n && "closed" in n && Ct(n.remove) && Ct(n.add) && Ct(n.unsubscribe);
}
function Ms(n) {
  Ct(n) ? n() : n.unsubscribe();
}
var Om = {
  Promise: void 0
}, Rm = {
  setTimeout: function(n, e) {
    for (var t = [], i = 2; i < arguments.length; i++)
      t[i - 2] = arguments[i];
    return setTimeout.apply(void 0, xn([n, e], Hn(t)));
  },
  clearTimeout: function(n) {
    return clearTimeout(n);
  },
  delegate: void 0
};
function ba(n) {
  Rm.setTimeout(function() {
    throw n;
  });
}
function Fs() {
}
function km(n) {
  n();
}
var Sr = function(n) {
  ct(e, n);
  function e(t) {
    var i = n.call(this) || this;
    return i.isStopped = !1, t ? (i.destination = t, _a(t) && t.add(i)) : i.destination = Fm, i;
  }
  return e.create = function(t, i, r) {
    return new cr(t, i, r);
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
}(yr), Dm = function() {
  function n(e) {
    this.partialObserver = e;
  }
  return n.prototype.next = function(e) {
    var t = this.partialObserver;
    if (t.next)
      try {
        t.next(e);
      } catch (i) {
        ai(i);
      }
  }, n.prototype.error = function(e) {
    var t = this.partialObserver;
    if (t.error)
      try {
        t.error(e);
      } catch (i) {
        ai(i);
      }
    else
      ai(e);
  }, n.prototype.complete = function() {
    var e = this.partialObserver;
    if (e.complete)
      try {
        e.complete();
      } catch (t) {
        ai(t);
      }
  }, n;
}(), cr = function(n) {
  ct(e, n);
  function e(t, i, r) {
    var l = n.call(this) || this, a;
    return Ct(t) || !t ? a = {
      next: t ?? void 0,
      error: i ?? void 0,
      complete: r ?? void 0
    } : a = t, l.destination = new Dm(a), l;
  }
  return e;
}(Sr);
function ai(n) {
  ba(n);
}
function Mm(n) {
  throw n;
}
var Fm = {
  closed: !0,
  next: Fs,
  error: Mm,
  complete: Fs
}, Tr = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}();
function Ia(n) {
  return n;
}
function Nm(n) {
  return n.length === 0 ? Ia : n.length === 1 ? n[0] : function(t) {
    return n.reduce(function(i, r) {
      return r(i);
    }, t);
  };
}
var zt = function() {
  function n(e) {
    e && (this._subscribe = e);
  }
  return n.prototype.lift = function(e) {
    var t = new n();
    return t.source = this, t.operator = e, t;
  }, n.prototype.subscribe = function(e, t, i) {
    var r = this, l = wm(e) ? e : new cr(e, t, i);
    return km(function() {
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
    return t = Ns(t), new t(function(r, l) {
      var a = new cr({
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
  }, n.prototype[Tr] = function() {
    return this;
  }, n.prototype.pipe = function() {
    for (var e = [], t = 0; t < arguments.length; t++)
      e[t] = arguments[t];
    return Nm(e)(this);
  }, n.prototype.toPromise = function(e) {
    var t = this;
    return e = Ns(e), new e(function(i, r) {
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
function Ns(n) {
  var e;
  return (e = n ?? Om.Promise) !== null && e !== void 0 ? e : Promise;
}
function Um(n) {
  return n && Ct(n.next) && Ct(n.error) && Ct(n.complete);
}
function wm(n) {
  return n && n instanceof Sr || Um(n) && _a(n);
}
function va(n) {
  return Ct(n[Tr]);
}
function Ca(n) {
  return Symbol.asyncIterator && Ct(n == null ? void 0 : n[Symbol.asyncIterator]);
}
function Aa(n) {
  return new TypeError("You provided " + (n !== null && typeof n == "object" ? "an invalid object" : "'" + n + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
}
function Pm() {
  return typeof Symbol != "function" || !Symbol.iterator ? "@@iterator" : Symbol.iterator;
}
var Ea = Pm();
function ya(n) {
  return Ct(n == null ? void 0 : n[Ea]);
}
function Sa(n) {
  return ao(this, arguments, function() {
    var t, i, r, l;
    return _r(this, function(a) {
      switch (a.label) {
        case 0:
          t = n.getReader(), a.label = 1;
        case 1:
          a.trys.push([1, , 9, 10]), a.label = 2;
        case 2:
          return [4, Un(t.read())];
        case 3:
          return i = a.sent(), r = i.value, l = i.done, l ? [4, Un(void 0)] : [3, 5];
        case 4:
          return [2, a.sent()];
        case 5:
          return [4, Un(r)];
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
function Ta(n) {
  return Ct(n == null ? void 0 : n.getReader);
}
function Cn(n) {
  if (n instanceof zt)
    return n;
  if (n != null) {
    if (va(n))
      return Hm(n);
    if (ma(n))
      return Bm(n);
    if (pa(n))
      return Vm(n);
    if (Ca(n))
      return La(n);
    if (ya(n))
      return jm(n);
    if (Ta(n))
      return Gm(n);
  }
  throw Aa(n);
}
function Hm(n) {
  return new zt(function(e) {
    var t = n[Tr]();
    if (Ct(t.subscribe))
      return t.subscribe(e);
    throw new TypeError("Provided object does not correctly implement Symbol.observable");
  });
}
function Bm(n) {
  return new zt(function(e) {
    for (var t = 0; t < n.length && !e.closed; t++)
      e.next(n[t]);
    e.complete();
  });
}
function Vm(n) {
  return new zt(function(e) {
    n.then(function(t) {
      e.closed || (e.next(t), e.complete());
    }, function(t) {
      return e.error(t);
    }).then(null, ba);
  });
}
function jm(n) {
  return new zt(function(e) {
    var t, i;
    try {
      for (var r = yt(n), l = r.next(); !l.done; l = r.next()) {
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
function La(n) {
  return new zt(function(e) {
    Km(n, e).catch(function(t) {
      return e.error(t);
    });
  });
}
function Gm(n) {
  return La(Sa(n));
}
function Km(n, e) {
  var t, i, r, l;
  return xs(this, void 0, void 0, function() {
    var a, s;
    return _r(this, function(o) {
      switch (o.label) {
        case 0:
          o.trys.push([0, 5, 6, 11]), t = oo(n), o.label = 1;
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
function Xt(n, e, t, i, r) {
  return new qm(n, e, t, i, r);
}
var qm = function(n) {
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
}(Sr);
function Wm(n) {
  return n && Ct(n.schedule);
}
function zm(n) {
  return n[n.length - 1];
}
function Ym(n) {
  return Wm(zm(n)) ? n.pop() : void 0;
}
function vn(n, e, t, i, r) {
  i === void 0 && (i = 0), r === void 0 && (r = !1);
  var l = e.schedule(function() {
    t(), r ? n.add(this.schedule(null, i)) : this.unsubscribe();
  }, i);
  if (n.add(l), !r)
    return l;
}
function Oa(n) {
  return Zt(function(e, t) {
    var i = null, r = !1, l;
    i = e.subscribe(Xt(t, void 0, void 0, function(a) {
      l = Cn(n(a, Oa(n)(e))), i ? (i.unsubscribe(), i = null, l.subscribe(t)) : r = !0;
    })), r && (i.unsubscribe(), i = null, l.subscribe(t));
  });
}
function Ra(n, e) {
  return e === void 0 && (e = 0), Zt(function(t, i) {
    t.subscribe(Xt(i, function(r) {
      return vn(i, n, function() {
        return i.next(r);
      }, e);
    }, function() {
      return vn(i, n, function() {
        return i.complete();
      }, e);
    }, function(r) {
      return vn(i, n, function() {
        return i.error(r);
      }, e);
    }));
  });
}
function ka(n, e) {
  return e === void 0 && (e = 0), Zt(function(t, i) {
    i.add(n.schedule(function() {
      return t.subscribe(i);
    }, e));
  });
}
function Xm(n, e) {
  return Cn(n).pipe(ka(e), Ra(e));
}
function Zm(n, e) {
  return Cn(n).pipe(ka(e), Ra(e));
}
function Qm(n, e) {
  return new zt(function(t) {
    var i = 0;
    return e.schedule(function() {
      i === n.length ? t.complete() : (t.next(n[i++]), t.closed || this.schedule());
    });
  });
}
function Jm(n, e) {
  return new zt(function(t) {
    var i;
    return vn(t, e, function() {
      i = n[Ea](), vn(t, e, function() {
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
function Da(n, e) {
  if (!n)
    throw new Error("Iterable cannot be null");
  return new zt(function(t) {
    vn(t, e, function() {
      var i = n[Symbol.asyncIterator]();
      vn(t, e, function() {
        i.next().then(function(r) {
          r.done ? t.complete() : t.next(r.value);
        });
      }, 0, !0);
    });
  });
}
function xm(n, e) {
  return Da(Sa(n), e);
}
function $m(n, e) {
  if (n != null) {
    if (va(n))
      return Xm(n, e);
    if (ma(n))
      return Qm(n, e);
    if (pa(n))
      return Zm(n, e);
    if (Ca(n))
      return Da(n, e);
    if (ya(n))
      return Jm(n, e);
    if (Ta(n))
      return xm(n, e);
  }
  throw Aa(n);
}
function Ma(n, e) {
  return e ? $m(n, e) : Cn(n);
}
function rn(n, e) {
  return Zt(function(t, i) {
    var r = 0;
    t.subscribe(Xt(i, function(l) {
      i.next(n.call(e, l, r++));
    }));
  });
}
function ep(n, e, t, i, r, l, a, s) {
  var o = [], u = 0, c = 0, d = !1, f = function() {
    d && !o.length && !u && e.complete();
  }, h = function(_) {
    return u < i ? g(_) : o.push(_);
  }, g = function(_) {
    u++;
    var m = !1;
    Cn(t(_, c++)).subscribe(Xt(e, function(C) {
      e.next(C);
    }, function() {
      m = !0;
    }, void 0, function() {
      if (m)
        try {
          u--;
          for (var C = function() {
            var I = o.shift();
            a || g(I);
          }; o.length && u < i; )
            C();
          f();
        } catch (I) {
          e.error(I);
        }
    }));
  };
  return n.subscribe(Xt(e, h, function() {
    d = !0, f();
  })), function() {
  };
}
function dr(n, e, t) {
  return t === void 0 && (t = 1 / 0), Ct(e) ? dr(function(i, r) {
    return rn(function(l, a) {
      return e(i, l, r, a);
    })(Cn(n(i, r)));
  }, t) : (typeof e == "number" && (t = e), Zt(function(i, r) {
    return ep(i, r, n, t);
  }));
}
function tp(n, e) {
  return Ct(e) ? dr(n, e, 1) : dr(n, 1);
}
var np = new zt(function(n) {
  return n.complete();
});
function zn(n) {
  return n <= 0 ? function() {
    return np;
  } : Zt(function(e, t) {
    var i = 0;
    e.subscribe(Xt(t, function(r) {
      ++i <= n && (t.next(r), n <= i && t.complete());
    }));
  });
}
function Fa() {
  for (var n = [], e = 0; e < arguments.length; e++)
    n[e] = arguments[e];
  var t = Ym(n);
  return Ma(n, t);
}
function Us(n, e) {
  return Zt(function(t, i) {
    var r = 0;
    t.subscribe(Xt(i, function(l) {
      return n.call(e, l, r++) && i.next(l);
    }));
  });
}
function ws(n) {
  return Zt(function(e, t) {
    try {
      e.subscribe(t);
    } finally {
      t.add(n);
    }
  });
}
function ip(n, e) {
  return Zt(function(t, i) {
    var r = null, l = 0, a = !1, s = function() {
      return a && !r && i.complete();
    };
    t.subscribe(Xt(i, function(o) {
      r == null || r.unsubscribe();
      var u = 0, c = l++;
      Cn(n(o, c)).subscribe(r = Xt(i, function(d) {
        return i.next(e ? e(o, d, c, u++) : d);
      }, function() {
        r = null, s();
      }));
    }, function() {
      a = !0, s();
    }));
  });
}
function Yn(n, e, t) {
  var i = Ct(n) || e || t ? { next: n, error: e, complete: t } : n;
  return i ? Zt(function(r, l) {
    var a;
    (a = i.subscribe) === null || a === void 0 || a.call(i);
    var s = !0;
    r.subscribe(Xt(l, function(o) {
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
  }) : Ia;
}
class rp {
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
function Na(n) {
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
var lp = /* @__PURE__ */ function() {
  function n(e, t, i, r) {
    r === void 0 && (r = "download_load"), this.originalEvent = e, this.xhr = t, this.request = i, this.type = r;
    var l = t.status, a = t.responseType;
    this.status = l ?? 0, this.responseType = a ?? "";
    var s = t.getAllResponseHeaders();
    this.responseHeaders = s ? s.split(`
`).reduce(function(c, d) {
      var f = d.indexOf(": ");
      return c[d.slice(0, f)] = d.slice(f + 2), c;
    }, {}) : {}, this.response = Na(t);
    var o = e.loaded, u = e.total;
    this.loaded = o, this.total = u;
  }
  return n;
}(), hi = ga(function(n) {
  return function(t, i, r) {
    this.message = t, this.name = "AjaxError", this.xhr = i, this.request = r, this.status = i.status, this.responseType = i.responseType;
    var l;
    try {
      l = Na(i);
    } catch {
      l = i.responseText;
    }
    this.response = l;
  };
}), sp = function() {
  function n(e, t) {
    return hi.call(this, "ajax timeout", e, t), this.name = "AjaxTimeoutError", this;
  }
  return n.prototype = Object.create(hi.prototype), n;
}();
function ap(n, e) {
  return An({ method: "GET", url: n, headers: e });
}
function op(n, e, t) {
  return An({ method: "POST", url: n, body: e, headers: t });
}
function up(n, e) {
  return An({ method: "DELETE", url: n, headers: e });
}
function cp(n, e, t) {
  return An({ method: "PUT", url: n, body: e, headers: t });
}
function dp(n, e, t) {
  return An({ method: "PATCH", url: n, body: e, headers: t });
}
var fp = rn(function(n) {
  return n.response;
});
function hp(n, e) {
  return fp(An({
    method: "GET",
    url: n,
    headers: e
  }));
}
var An = function() {
  var n = function(e) {
    var t = typeof e == "string" ? {
      url: e
    } : e;
    return pp(t);
  };
  return n.get = ap, n.post = op, n.delete = up, n.put = cp, n.patch = dp, n.getJSON = hp, n;
}(), mp = "upload", Ps = "download", tr = "loadstart", nr = "progress", Hs = "load";
function pp(n) {
  return new zt(function(e) {
    var t, i, r = We({ async: !0, crossDomain: !1, withCredentials: !1, method: "GET", timeout: 0, responseType: "json" }, n), l = r.queryParams, a = r.body, s = r.headers, o = r.url;
    if (!o)
      throw new TypeError("url is required");
    if (l) {
      var u;
      if (o.includes("?")) {
        var c = o.split("?");
        if (2 < c.length)
          throw new TypeError("invalid url");
        u = new URLSearchParams(c[1]), new URLSearchParams(l).forEach(function(G, N) {
          return u.set(N, G);
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
    var g = r.withCredentials, _ = r.xsrfCookieName, m = r.xsrfHeaderName;
    if ((g || !h) && _ && m) {
      var C = (i = (t = document == null ? void 0 : document.cookie.match(new RegExp("(^|;\\s*)(" + _ + ")=([^;]*)"))) === null || t === void 0 ? void 0 : t.pop()) !== null && i !== void 0 ? i : "";
      C && (d[m] = C);
    }
    var I = gp(a, d), O = We(We({}, r), {
      url: o,
      headers: d,
      body: I
    }), E;
    E = n.createXHR ? n.createXHR() : new XMLHttpRequest();
    {
      var L = n.progressSubscriber, k = n.includeDownloadProgress, p = k === void 0 ? !1 : k, y = n.includeUploadProgress, M = y === void 0 ? !1 : y, v = function(G, N) {
        E.addEventListener(G, function() {
          var T, Q = N();
          (T = L == null ? void 0 : L.error) === null || T === void 0 || T.call(L, Q), e.error(Q);
        });
      };
      v("timeout", function() {
        return new sp(E, O);
      }), v("abort", function() {
        return new hi("aborted", E, O);
      });
      var b = function(G, N) {
        return new lp(N, E, O, G + "_" + N.type);
      }, D = function(G, N, T) {
        G.addEventListener(N, function(Q) {
          e.next(b(T, Q));
        });
      };
      M && [tr, nr, Hs].forEach(function(G) {
        return D(E.upload, G, mp);
      }), L && [tr, nr].forEach(function(G) {
        return E.upload.addEventListener(G, function(N) {
          var T;
          return (T = L == null ? void 0 : L.next) === null || T === void 0 ? void 0 : T.call(L, N);
        });
      }), p && [tr, nr].forEach(function(G) {
        return D(E, G, Ps);
      });
      var R = function(G) {
        var N = "ajax error" + (G ? " " + G : "");
        e.error(new hi(N, E, O));
      };
      E.addEventListener("error", function(G) {
        var N;
        (N = L == null ? void 0 : L.error) === null || N === void 0 || N.call(L, G), R();
      }), E.addEventListener(Hs, function(G) {
        var N, T, Q = E.status;
        if (Q < 400) {
          (N = L == null ? void 0 : L.complete) === null || N === void 0 || N.call(L);
          var Re = void 0;
          try {
            Re = b(Ps, G);
          } catch (Fe) {
            e.error(Fe);
            return;
          }
          e.next(Re), e.complete();
        } else
          (T = L == null ? void 0 : L.error) === null || T === void 0 || T.call(L, G), R(Q);
      });
    }
    var w = O.user, q = O.method, U = O.async;
    w ? E.open(q, o, U, w, O.password) : E.open(q, o, U), U && (E.timeout = O.timeout, E.responseType = O.responseType), "withCredentials" in E && (E.withCredentials = O.withCredentials);
    for (var f in d)
      d.hasOwnProperty(f) && E.setRequestHeader(f, d[f]);
    return I ? E.send(I) : E.send(), function() {
      E && E.readyState !== 4 && E.abort();
    };
  });
}
function gp(n, e) {
  var t;
  if (!n || typeof n == "string" || Ap(n) || Ep(n) || bp(n) || Ip(n) || vp(n) || yp(n))
    return n;
  if (Cp(n))
    return n.buffer;
  if (typeof n == "object")
    return e["content-type"] = (t = e["content-type"]) !== null && t !== void 0 ? t : "application/json;charset=utf-8", JSON.stringify(n);
  throw new TypeError("Unknown body type");
}
var _p = Object.prototype.toString;
function Lr(n, e) {
  return _p.call(n) === "[object " + e + "]";
}
function bp(n) {
  return Lr(n, "ArrayBuffer");
}
function Ip(n) {
  return Lr(n, "File");
}
function vp(n) {
  return Lr(n, "Blob");
}
function Cp(n) {
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView(n);
}
function Ap(n) {
  return typeof FormData < "u" && n instanceof FormData;
}
function Ep(n) {
  return typeof URLSearchParams < "u" && n instanceof URLSearchParams;
}
function yp(n) {
  return typeof ReadableStream < "u" && n instanceof ReadableStream;
}
class Sp {
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
const Tp = new Sp("https://demo.compas.energy", {}, "DSOM Versatel Production URL"), Lp = [Tp], Op = Lp[0].getUrl();
class Ua {
  constructor(e = {}) {
    this.configuration = e;
  }
  get basePath() {
    return this.configuration.basePath ?? Op;
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
class Rp {
  constructor(e = new Ua()) {
    this.configuration = e, this.middleware = [], this.withMiddleware = (t) => {
      const i = this.clone();
      return i.middleware = i.middleware.concat(t), i;
    }, this.withPreMiddleware = (t) => this.withMiddleware(t.map((i) => ({ pre: i }))), this.withPostMiddleware = (t) => this.withMiddleware(t.map((i) => ({ post: i }))), this.createRequestArgs = ({ url: t, query: i, method: r, headers: l, body: a, responseType: s }) => ({
      url: `${this.configuration.basePath}${t}${i && Object.keys(i).length ? `?${kp(i)}` : ""}`,
      method: r,
      headers: l,
      body: a instanceof FormData ? a : JSON.stringify(a),
      responseType: s ?? "json"
    }), this.rxjsRequest = (t) => Fa(t).pipe(
      rn((i) => (this.middleware.filter((r) => r.pre).forEach((r) => i = r.pre(i)), i)),
      tp(
        (i) => An(i).pipe(
          rn((r) => (this.middleware.filter((l) => l.post).forEach((l) => r = l.post(r)), r))
        )
      )
    ), this.clone = () => Object.assign(Object.create(Object.getPrototypeOf(this)), this), this.middleware = e.middleware;
  }
  request(e, t) {
    return this.rxjsRequest(this.createRequestArgs(e)).pipe(
      rn((i) => {
        const { status: r, response: l } = i;
        if (r >= 200 && r < 300)
          return (t == null ? void 0 : t.response) === "raw" ? i : l;
        throw i;
      })
    );
  }
}
const bn = (n) => encodeURIComponent(`${n}`), kp = (n) => Object.entries(n).map(
  ([e, t]) => t instanceof Array ? t.map((i) => `${bn(e)}=${bn(i)}`).join("&") : `${bn(e)}=${bn(t)}`
).join("&"), oi = (n, e, t) => {
  if (n == null)
    throw new Error(`Parameter "${e}" was null or undefined when calling "${t}".`);
};
class Dp extends Rp {
  retrieveDataResourceByVersion({ id: e, version: t }, i) {
    oi(e, "id", "retrieveDataResourceByVersion"), oi(t, "version", "retrieveDataResourceByVersion");
    const r = {};
    return this.request({
      url: "/api/scl/{id}/version/{version}".replace("{id}", bn(e)).replace("{version}", bn(t)),
      method: "GET",
      headers: r,
      responseType: "blob"
    }, i == null ? void 0 : i.responseOpts);
  }
  retrieveDataResourceHistory({ id: e }, t) {
    oi(e, "id", "retrieveDataResourceHistory");
    const i = {};
    return this.request({
      url: "/api/scl/{id}/versions".replace("{id}", bn(e)),
      method: "GET",
      headers: i
    }, t == null ? void 0 : t.responseOpts);
  }
  searchForResources({ dataResourceSearch: e }, t) {
    oi(e, "dataResourceSearch", "searchForResources");
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
class Fn {
  constructor() {
    this.endpoint = "http://localhost:9090/compas-scl-data-service";
  }
  static getInstance() {
    return Fn.instance || (Fn.instance = new Fn()), Fn.instance;
  }
  searchFiles(e) {
    return this.generateApiClient(this.endpoint).searchForResources({
      dataResourceSearch: this.mapToDataResourceSearch(e)
    }).pipe(
      Us((i) => !!i || !!i.results),
      rn((i) => i.results),
      rn(
        (i) => i.map((r) => this.mapToFileSearchResult(r))
      )
    );
  }
  getHistoryFiles(e) {
    return this.generateApiClient(this.endpoint).retrieveDataResourceHistory({
      id: e
    }).pipe(
      Us((i) => !!i || !!i.versions),
      rn((i) => i.versions),
      rn(
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
    return console.log("data", e), new rp(
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
    const t = new Ua({
      basePath: e
      // accessToken: authInfo.token,
    });
    return new Dp(t);
  }
}
var cn;
class Bs {
  constructor() {
    Or(this, cn, Lt([]));
  }
  get store() {
    return Sn(this, cn);
  }
  updateData(e) {
    Sn(this, cn).set(e);
  }
  addData(e) {
    Sn(this, cn).update((t) => [...t, e]);
  }
  removeData(e) {
    Sn(this, cn).update((t) => t.filter((i) => i.uuid !== e));
  }
  getData(e) {
    return ja(Sn(this, cn)).find((t) => t.uuid === e);
  }
}
cn = new WeakMap();
function Mp(n) {
  var l;
  let e, t, i = (
    /*currentSelectFile*/
    ((l = n[2]) == null ? void 0 : l.filename) + ""
  ), r;
  return {
    c() {
      e = le("h3"), t = ot("Version History of file "), r = ot(i), B(e, "slot", "title");
    },
    m(a, s) {
      j(a, e, s), ne(e, t), ne(e, r);
    },
    p(a, s) {
      var o;
      s & /*currentSelectFile*/
      4 && i !== (i = /*currentSelectFile*/
      ((o = a[2]) == null ? void 0 : o.filename) + "") && St(r, i);
    },
    d(a) {
      a && V(e);
    }
  };
}
function Fp(n) {
  let e, t, i;
  return t = new ua({
    props: {
      columnDefs: (
        /*modalColumnDef*/
        n[7]
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
        n[9]
      )
    }
  }), {
    c() {
      e = le("div"), te(t.$$.fragment), B(e, "slot", "content");
    },
    m(r, l) {
      j(r, e, l), $(t, e, null), i = !0;
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
      i || (A(t.$$.fragment, r), i = !0);
    },
    o(r) {
      S(t.$$.fragment, r), i = !1;
    },
    d(r) {
      r && V(e), ee(t);
    }
  };
}
function Np(n) {
  let e;
  return {
    c() {
      e = ot("Done");
    },
    m(t, i) {
      j(t, e, i);
    },
    d(t) {
      t && V(e);
    }
  };
}
function Up(n) {
  let e, t, i, r;
  return e = new vr({}), i = new ea({
    props: {
      $$slots: { default: [Np] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      te(e.$$.fragment), t = ce(), te(i.$$.fragment);
    },
    m(l, a) {
      $(e, l, a), j(l, t, a), $(i, l, a), r = !0;
    },
    p(l, a) {
      const s = {};
      a & /*$$scope*/
      4194304 && (s.$$scope = { dirty: a, ctx: l }), i.$set(s);
    },
    i(l) {
      r || (A(e.$$.fragment, l), A(i.$$.fragment, l), r = !0);
    },
    o(l) {
      S(e.$$.fragment, l), S(i.$$.fragment, l), r = !1;
    },
    d(l) {
      l && V(t), ee(e, l), ee(i, l);
    }
  };
}
function wp(n) {
  let e, t, i;
  return t = new gi({
    props: {
      callback: (
        /*onDialogClose*/
        n[12]
      ),
      variant: "raised",
      $$slots: { default: [Up] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      e = le("div"), te(t.$$.fragment), B(e, "slot", "actions");
    },
    m(r, l) {
      j(r, e, l), $(t, e, null), i = !0;
    },
    p(r, l) {
      const a = {};
      l & /*$$scope*/
      4194304 && (a.$$scope = { dirty: l, ctx: r }), t.$set(a);
    },
    i(r) {
      i || (A(t.$$.fragment, r), i = !0);
    },
    o(r) {
      S(t.$$.fragment, r), i = !1;
    },
    d(r) {
      r && V(e), ee(t);
    }
  };
}
function Pp(n) {
  let e;
  return {
    c() {
      e = ot("Search");
    },
    m(t, i) {
      j(t, e, i);
    },
    d(t) {
      t && V(e);
    }
  };
}
function Hp(n) {
  let e, t, i, r;
  return e = new xf({}), i = new ea({
    props: {
      $$slots: { default: [Pp] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      te(e.$$.fragment), t = ce(), te(i.$$.fragment);
    },
    m(l, a) {
      $(e, l, a), j(l, t, a), $(i, l, a), r = !0;
    },
    p(l, a) {
      const s = {};
      a & /*$$scope*/
      4194304 && (s.$$scope = { dirty: a, ctx: l }), i.$set(s);
    },
    i(l) {
      r || (A(e.$$.fragment, l), A(i.$$.fragment, l), r = !0);
    },
    o(l) {
      S(e.$$.fragment, l), S(i.$$.fragment, l), r = !1;
    },
    d(l) {
      l && V(t), ee(e, l), ee(i, l);
    }
  };
}
function Bp(n) {
  let e, t;
  return e = new gi({
    props: {
      slot: "filter-controls",
      variant: "raised",
      callback: (
        /*search*/
        n[11]
      ),
      $$slots: { default: [Hp] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      $(e, i, r), t = !0;
    },
    p(i, r) {
      const l = {};
      r & /*$$scope*/
      4194304 && (l.$$scope = { dirty: r, ctx: i }), e.$set(l);
    },
    i(i) {
      t || (A(e.$$.fragment, i), t = !0);
    },
    o(i) {
      S(e.$$.fragment, i), t = !1;
    },
    d(i) {
      ee(e, i);
    }
  };
}
function Vp(n) {
  let e, t, i, r;
  return i = new ua({
    props: {
      columnDefs: (
        /*columnDefs*/
        n[6]
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
        n[8]
      )
    }
  }), {
    c() {
      e = le("h3"), e.textContent = "Version Table", t = ce(), te(i.$$.fragment), ir(e, "margin-bottom", "1rem");
    },
    m(l, a) {
      j(l, e, a), j(l, t, a), $(i, l, a), r = !0;
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
      r || (A(i.$$.fragment, l), r = !0);
    },
    o(l) {
      S(i.$$.fragment, l), r = !1;
    },
    d(l) {
      l && (V(e), V(t)), ee(i, l);
    }
  };
}
function jp(n) {
  let e, t, i, r, l, a, s, o, u, c, d;
  function f(m) {
    n[13](m);
  }
  let h = {
    $$slots: {
      actions: [wp],
      content: [Fp],
      title: [Mp]
    },
    $$scope: { ctx: n }
  };
  /*dialogOpen*/
  n[4] !== void 0 && (h.open = /*dialogOpen*/
  n[4]), t = new Xd({ props: h }), se.push(() => _t(t, "open", f));
  function g(m) {
    n[14](m);
  }
  let _ = {
    filterTypes: (
      /*filterTypes*/
      n[10]
    ),
    $$slots: {
      "filter-controls": [Bp]
    },
    $$scope: { ctx: n }
  };
  return (
    /*filtersToSearch*/
    n[5] !== void 0 && (_.activeFilters = /*filtersToSearch*/
    n[5]), a = new Em({ props: _ }), se.push(() => _t(a, "activeFilters", g)), c = new Tm({
      props: {
        style: "padding: 1rem; width: 100%; height: 100%;",
        $$slots: { default: [Vp] },
        $$scope: { ctx: n }
      }
    }), {
      c() {
        e = le("div"), te(t.$$.fragment), r = ce(), l = le("div"), te(a.$$.fragment), o = ce(), u = le("div"), te(c.$$.fragment), B(l, "class", "search-filter"), B(u, "class", "table-container"), B(e, "class", "version-editor-container");
      },
      m(m, C) {
        j(m, e, C), $(t, e, null), ne(e, r), ne(e, l), $(a, l, null), ne(e, o), ne(e, u), $(c, u, null), d = !0;
      },
      p(m, [C]) {
        const I = {};
        C & /*$$scope, historyStore, loadingDone, currentSelectFile*/
        4194318 && (I.$$scope = { dirty: C, ctx: m }), !i && C & /*dialogOpen*/
        16 && (i = !0, I.open = /*dialogOpen*/
        m[4], gt(() => i = !1)), t.$set(I);
        const O = {};
        C & /*$$scope*/
        4194304 && (O.$$scope = { dirty: C, ctx: m }), !s && C & /*filtersToSearch*/
        32 && (s = !0, O.activeFilters = /*filtersToSearch*/
        m[5], gt(() => s = !1)), a.$set(O);
        const E = {};
        C & /*$$scope, dataStore, loadingDone*/
        4194313 && (E.$$scope = { dirty: C, ctx: m }), c.$set(E);
      },
      i(m) {
        d || (A(t.$$.fragment, m), A(a.$$.fragment, m), A(c.$$.fragment, m), d = !0);
      },
      o(m) {
        S(t.$$.fragment, m), S(a.$$.fragment, m), S(c.$$.fragment, m), d = !1;
      },
      d(m) {
        m && V(e), ee(t), ee(a), ee(c);
      }
    }
  );
}
function Gp(n) {
  return new Date(n).toLocaleDateString();
}
function Kp(n) {
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
function qp(n, e, t) {
  const i = Fn.getInstance();
  let r, { dataStore: l = new Bs() } = e, { historyStore: a = new Bs() } = e, s = !0, o = !1;
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
      valueFormatter: Gp
    },
    {
      headerName: "Version",
      field: "version",
      numeric: !1,
      filter: !0,
      filterType: "text",
      sortable: !0
    }
  ], c = {
    headerName: "",
    field: "actions",
    numeric: !1,
    filter: !1,
    filterType: "text",
    minWidth: "100px",
    sortable: !1
  }, d = [
    ...u,
    {
      headerName: "Comment",
      field: "comment",
      numeric: !1,
      filter: !0,
      filterType: "text",
      sortable: !0
    },
    c
  ];
  u.push(c);
  const f = [
    {
      icon: "edit",
      callback: (p) => E(p),
      disabled: (p) => !p.available
    },
    {
      icon: "find-in-page",
      callback: (p) => I(p),
      disabled: () => !1
    },
    {
      icon: "download",
      callback: (p) => m(p),
      disabled: (p) => !p.available
    }
  ], h = [
    {
      icon: "download",
      callback: (p) => m(p),
      disabled: (p) => !p.available
    }
  ], g = [
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
  let _ = [];
  function m(p) {
    console.log("Download file: ", p), i.downloadSclData(p.uuid, p.type, p.version).pipe(zn(1), Yn((y) => {
      const M = window.URL.createObjectURL(y), v = document.createElement("a");
      v.href = M, v.download = p.filename, v.style.display = "none", document.body.appendChild(v), v.click(), document.body.removeChild(v), window.URL.revokeObjectURL(M);
    })).subscribe();
  }
  function C() {
    const p = Kp(_);
    console.log("Search with params: ", p), t(3, s = !1), i.searchFiles(p).pipe(
      zn(1),
      Yn((y) => {
        [...y], l.updateData(y);
      }),
      ws(() => {
        t(3, s = !0);
      })
    ).subscribe();
  }
  function I(p) {
    t(2, r = p), i.getHistoryFiles(p.uuid).pipe(zn(1), Yn((y) => {
      t(4, o = !0), [...y], a.updateData(y);
    })).subscribe();
  }
  function O(p) {
    console.log("Dialog closed with result: ", p), t(4, o = !1);
  }
  function E(p) {
    if (!confirm(`Open the selected file?

 Please make sure you save all changes on your current project.`))
      return;
    let y = "";
    i.downloadSclData(p.uuid, p.type, p.version).pipe(
      zn(1),
      Yn((M) => {
        y = window.URL.createObjectURL(M);
      }),
      ip(() => Ma(fetch(y).then((M) => {
        if (M.status === 200)
          return M.text();
        throw new Error(`Failed to load ${p.filename}: ${M.status} ${M.statusText}`);
      }))),
      zn(1),
      Oa((M) => (alert(M), console.error(M), Fa(void 0))),
      Yn((M) => {
        var v;
        if (!M)
          return;
        const b = p.filename, D = new DOMParser().parseFromString(M, "application/xml");
        (v = window.document.getElementsByTagName("open-scd")[0]) === null || v === void 0 || v.dispatchEvent(new CustomEvent(
          "open-doc",
          {
            bubbles: !0,
            composed: !0,
            detail: { localFile: !1, doc: D, docName: b }
          }
        ));
      }),
      ws(() => y && window.URL.revokeObjectURL(y))
    ).subscribe();
  }
  function L(p) {
    o = p, t(4, o);
  }
  function k(p) {
    _ = p, t(5, _);
  }
  return n.$$set = (p) => {
    "dataStore" in p && t(0, l = p.dataStore), "historyStore" in p && t(1, a = p.historyStore);
  }, [
    l,
    a,
    r,
    s,
    o,
    _,
    u,
    d,
    f,
    h,
    g,
    C,
    O,
    L,
    k
  ];
}
class Wp extends Me {
  constructor(e) {
    super(), De(this, e, qp, jp, ye, { dataStore: 0, historyStore: 1 });
  }
}
function Vs(n) {
  let e, t;
  return e = new Wp({}), {
    c() {
      te(e.$$.fragment);
    },
    m(i, r) {
      $(e, i, r), t = !0;
    },
    i(i) {
      t || (A(e.$$.fragment, i), t = !0);
    },
    o(i) {
      S(e.$$.fragment, i), t = !1;
    },
    d(i) {
      ee(e, i);
    }
  };
}
function zp(n) {
  let e, t, i, r, l, a = (
    /*doc*/
    (n[0] || /*dev*/
    n[1]) && Vs()
  );
  return {
    c() {
      a && a.c(), e = ce(), t = le("input"), i = ce(), r = le("input"), B(t, "type", "hidden"), B(t, "name", "package-name"), t.value = Zs, B(r, "type", "hidden"), B(r, "name", "package-version"), r.value = Qs;
    },
    m(s, o) {
      a && a.m(s, o), j(s, e, o), j(s, t, o), j(s, i, o), j(s, r, o), l = !0;
    },
    p(s, [o]) {
      /*doc*/
      s[0] || /*dev*/
      s[1] ? a ? o & /*doc, dev*/
      3 && A(a, 1) : (a = Vs(), a.c(), A(a, 1), a.m(e.parentNode, e)) : a && (Ve(), S(a, 1, 1, () => {
        a = null;
      }), je());
    },
    i(s) {
      l || (A(a), l = !0);
    },
    o(s) {
      S(a), l = !1;
    },
    d(s) {
      s && (V(e), V(t), V(i), V(r)), a && a.d(s);
    }
  };
}
function Yp(n, e, t) {
  let { doc: i } = e, { dev: r = !1 } = e;
  return n.$$set = (l) => {
    "doc" in l && t(0, i = l.doc), "dev" in l && t(1, r = l.dev);
  }, [i, r];
}
class Xp extends Me {
  constructor(e) {
    super(), De(this, e, Yp, zp, ye, { doc: 0, dev: 1 });
  }
}
class xp extends HTMLElement {
  connectedCallback() {
    var t;
    this.attachShadow({ mode: "open" }), this.plugin = new Xp({
      target: this.shadowRoot,
      props: {
        doc: this._doc,
        editCount: -1
      }
    });
    const e = Zp();
    (t = this.shadowRoot) == null || t.appendChild(e);
  }
  set doc(e) {
    this._doc = e, this.plugin && this.plugin.$set({ doc: e });
  }
  set editCount(e) {
    this.plugin && this.plugin.$set({ editCount: e });
  }
}
function Zp() {
  const n = `${Zs}-v${Qs}-style`, e = Qp(), t = document.createElement("link");
  return t.rel = "stylesheet", t.type = "text/css", t.href = e, t.id = n, t;
}
function Qp() {
  const n = new URL(import.meta.url), e = n.origin, t = n.pathname.split("/").slice(0, -1).filter(Boolean).join("/");
  return [e, t, "style.css"].filter(Boolean).join("/");
}
export {
  xp as default
};
