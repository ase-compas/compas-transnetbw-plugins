var Ti = Object.defineProperty;
var Fi = (n, e, t) => e in n ? Ti(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var Xt = (n, e, t) => (Fi(n, typeof e != "symbol" ? e + "" : e, t), t);
function J() {
}
function j(n, e) {
  for (const t in e)
    n[t] = e[t];
  return (
    /** @type {T & S} */
    n
  );
}
function Wl(n) {
  return n();
}
function fn() {
  return /* @__PURE__ */ Object.create(null);
}
function ge(n) {
  n.forEach(Wl);
}
function he(n) {
  return typeof n == "function";
}
function Q(n, e) {
  return n != n ? e == e : n !== e || n && typeof n == "object" || typeof n == "function";
}
function Gi(n) {
  return Object.keys(n).length === 0;
}
function Ui(n, ...e) {
  if (n == null) {
    for (const l of e)
      l(void 0);
    return J;
  }
  const t = n.subscribe(...e);
  return t.unsubscribe ? () => t.unsubscribe() : t;
}
function ft(n, e, t) {
  n.$$.on_destroy.push(Ui(e, t));
}
function re(n, e, t, l) {
  if (n) {
    const i = Bl(n, e, t, l);
    return n[0](i);
  }
}
function Bl(n, e, t, l) {
  return n[1] && l ? j(t.ctx.slice(), n[1](l(e))) : t.ctx;
}
function se(n, e, t, l) {
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
function ae(n, e, t, l, i, r) {
  if (i) {
    const s = Bl(e, t, l, r);
    n.p(s, i);
  }
}
function oe(n) {
  if (n.ctx.length > 32) {
    const e = [], t = n.ctx.length / 32;
    for (let l = 0; l < t; l++)
      e[l] = -1;
    return e;
  }
  return -1;
}
function Me(n) {
  const e = {};
  for (const t in n)
    t[0] !== "$" && (e[t] = n[t]);
  return e;
}
function ce(n, e) {
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
function $(n) {
  return n && he(n.destroy) ? n.destroy : J;
}
const Oi = typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : (
  // @ts-ignore Node typings have this
  global
);
function T(n, e) {
  n.appendChild(e);
}
function M(n, e, t) {
  n.insertBefore(e, t || null);
}
function D(n) {
  n.parentNode && n.parentNode.removeChild(n);
}
function je(n, e) {
  for (let t = 0; t < n.length; t += 1)
    n[t] && n[t].d(e);
}
function U(n) {
  return document.createElement(n);
}
function Fe(n) {
  return document.createElementNS("http://www.w3.org/2000/svg", n);
}
function le(n) {
  return document.createTextNode(n);
}
function W() {
  return le(" ");
}
function Ie() {
  return le("");
}
function K(n, e, t, l) {
  return n.addEventListener(e, t, l), () => n.removeEventListener(e, t, l);
}
function w(n, e, t) {
  t == null ? n.removeAttribute(e) : n.getAttribute(e) !== t && n.setAttribute(e, t);
}
const Wi = ["width", "height"];
function ie(n, e) {
  const t = Object.getOwnPropertyDescriptors(n.__proto__);
  for (const l in e)
    e[l] == null ? n.removeAttribute(l) : l === "style" ? n.style.cssText = e[l] : l === "__value" ? n.value = n[l] = e[l] : t[l] && t[l].set && Wi.indexOf(l) === -1 ? n[l] = e[l] : w(n, l, e[l]);
}
function dn(n, e) {
  for (const t in e)
    w(n, t, e[t]);
}
function Bi(n, e) {
  Object.keys(e).forEach((t) => {
    Ni(n, t, e[t]);
  });
}
function Ni(n, e, t) {
  const l = e.toLowerCase();
  l in n ? n[l] = typeof n[l] == "boolean" && t === "" ? !0 : t : e in n ? n[e] = typeof n[e] == "boolean" && t === "" ? !0 : t : w(n, e, t);
}
function wt(n) {
  return /-/.test(n) ? Bi : ie;
}
function Zi(n) {
  return Array.from(n.childNodes);
}
function be(n, e) {
  e = "" + e, n.data !== e && (n.data = /** @type {string} */
  e);
}
function gn(n, e) {
  n.value = e ?? "";
}
function Yt(n, e, t, l) {
  t == null ? n.style.removeProperty(e) : n.style.setProperty(e, t, "");
}
function Ve(n, e, t) {
  n.classList.toggle(e, !!t);
}
function qi(n, e, { bubbles: t = !1, cancelable: l = !1 } = {}) {
  return new CustomEvent(n, { detail: e, bubbles: t, cancelable: l });
}
function Gt(n, e) {
  return new n(e);
}
let Lt;
function At(n) {
  Lt = n;
}
function Re() {
  if (!Lt)
    throw new Error("Function called outside component initialization");
  return Lt;
}
function Be(n) {
  Re().$$.on_mount.push(n);
}
function Bt(n) {
  Re().$$.on_destroy.push(n);
}
function ze() {
  const n = Re();
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
function De(n, e) {
  return Re().$$.context.set(n, e), e;
}
function Ue(n) {
  return Re().$$.context.get(n);
}
function Ut(n, e) {
  const t = n.$$.callbacks[e.type];
  t && t.slice().forEach((l) => l.call(this, e));
}
const ct = [], ne = [];
let dt = [];
const nn = [], Nl = /* @__PURE__ */ Promise.resolve();
let ln = !1;
function Zl() {
  ln || (ln = !0, Nl.then(ql));
}
function Vi() {
  return Zl(), Nl;
}
function rn(n) {
  dt.push(n);
}
function Qe(n) {
  nn.push(n);
}
const Kt = /* @__PURE__ */ new Set();
let ot = 0;
function ql() {
  if (ot !== 0)
    return;
  const n = Lt;
  do {
    try {
      for (; ot < ct.length; ) {
        const e = ct[ot];
        ot++, At(e), ji(e.$$);
      }
    } catch (e) {
      throw ct.length = 0, ot = 0, e;
    }
    for (At(null), ct.length = 0, ot = 0; ne.length; )
      ne.pop()();
    for (let e = 0; e < dt.length; e += 1) {
      const t = dt[e];
      Kt.has(t) || (Kt.add(t), t());
    }
    dt.length = 0;
  } while (ct.length);
  for (; nn.length; )
    nn.pop()();
  ln = !1, Kt.clear(), At(n);
}
function ji(n) {
  if (n.fragment !== null) {
    n.update(), ge(n.before_update);
    const e = n.dirty;
    n.dirty = [-1], n.fragment && n.fragment.p(n.ctx, e), n.after_update.forEach(rn);
  }
}
function zi(n) {
  const e = [], t = [];
  dt.forEach((l) => n.indexOf(l) === -1 ? e.push(l) : t.push(l)), t.forEach((l) => l()), dt = e;
}
const Ft = /* @__PURE__ */ new Set();
let st;
function fe() {
  st = {
    r: 0,
    c: [],
    p: st
    // parent group
  };
}
function de() {
  st.r || ge(st.c), st = st.p;
}
function C(n, e) {
  n && n.i && (Ft.delete(n), n.i(e));
}
function L(n, e, t, l) {
  if (n && n.o) {
    if (Ft.has(n))
      return;
    Ft.add(n), st.c.push(() => {
      Ft.delete(n), l && (t && n.d(1), l());
    }), n.o(e);
  } else
    l && l();
}
function Ce(n) {
  return (n == null ? void 0 : n.length) !== void 0 ? n : Array.from(n);
}
function Xi(n, e) {
  L(n, 1, 1, () => {
    e.delete(n.key);
  });
}
function Yi(n, e, t, l, i, r, s, a, o, u, c, f) {
  let d = n.length, g = r.length, p = d;
  const h = {};
  for (; p--; )
    h[n[p].key] = p;
  const b = [], S = /* @__PURE__ */ new Map(), A = /* @__PURE__ */ new Map(), R = [];
  for (p = g; p--; ) {
    const m = f(i, r, p), E = t(m);
    let B = s.get(E);
    B ? R.push(() => B.p(m, e)) : (B = u(E, m), B.c()), S.set(E, b[p] = B), E in h && A.set(E, Math.abs(p - h[E]));
  }
  const _ = /* @__PURE__ */ new Set(), F = /* @__PURE__ */ new Set();
  function v(m) {
    C(m, 1), m.m(a, c), s.set(m.key, m), c = m.first, g--;
  }
  for (; d && g; ) {
    const m = b[g - 1], E = n[d - 1], B = m.key, G = E.key;
    m === E ? (c = m.first, d--, g--) : S.has(G) ? !s.has(B) || _.has(B) ? v(m) : F.has(G) ? d-- : A.get(B) > A.get(G) ? (F.add(B), v(m)) : (_.add(G), d--) : (o(E, s), d--);
  }
  for (; d--; ) {
    const m = n[d];
    S.has(m.key) || o(m, s);
  }
  for (; g; )
    v(b[g - 1]);
  return ge(R), b;
}
function ue(n, e) {
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
function Le(n) {
  return typeof n == "object" && n !== null ? n : {};
}
function Je(n, e, t) {
  const l = n.$$.props[e];
  l !== void 0 && (n.$$.bound[l] = t, t(n.$$.ctx[l]));
}
function V(n) {
  n && n.c();
}
function Z(n, e, t) {
  const { fragment: l, after_update: i } = n.$$;
  l && l.m(e, t), rn(() => {
    const r = n.$$.on_mount.map(Wl).filter(he);
    n.$$.on_destroy ? n.$$.on_destroy.push(...r) : ge(r), n.$$.on_mount = [];
  }), i.forEach(rn);
}
function q(n, e) {
  const t = n.$$;
  t.fragment !== null && (zi(t.after_update), ge(t.on_destroy), t.fragment && t.fragment.d(e), t.on_destroy = t.fragment = null, t.ctx = []);
}
function Ki(n, e) {
  n.$$.dirty[0] === -1 && (ct.push(n), Zl(), n.$$.dirty.fill(0)), n.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function ee(n, e, t, l, i, r, s = null, a = [-1]) {
  const o = Lt;
  At(n);
  const u = n.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: r,
    update: J,
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
    const p = g.length ? g[0] : d;
    return u.ctx && i(u.ctx[f], u.ctx[f] = p) && (!u.skip_bound && u.bound[f] && u.bound[f](p), c && Ki(n, f)), d;
  }) : [], u.update(), c = !0, ge(u.before_update), u.fragment = l ? l(u.ctx) : !1, e.target) {
    if (e.hydrate) {
      const f = Zi(e.target);
      u.fragment && u.fragment.l(f), f.forEach(D);
    } else
      u.fragment && u.fragment.c();
    e.intro && C(n.$$.fragment), Z(n, e.target, e.anchor), ql();
  }
  At(o);
}
class te {
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
    q(this, 1), this.$destroy = J;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, t) {
    if (!he(t))
      return J;
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
    this.$$set && !Gi(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const Qi = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(Qi);
const Vl = "archive-explorer", jl = "0.0.1";
var sn = function(n, e) {
  return sn = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, l) {
    t.__proto__ = l;
  } || function(t, l) {
    for (var i in l)
      Object.prototype.hasOwnProperty.call(l, i) && (t[i] = l[i]);
  }, sn(n, e);
};
function pt(n, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  sn(n, e);
  function t() {
    this.constructor = n;
  }
  n.prototype = e === null ? Object.create(e) : (t.prototype = e.prototype, new t());
}
var Te = function() {
  return Te = Object.assign || function(e) {
    for (var t, l = 1, i = arguments.length; l < i; l++) {
      t = arguments[l];
      for (var r in t)
        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
    }
    return e;
  }, Te.apply(this, arguments);
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
function Ji(n, e) {
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
function $e(n) {
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
function _e(n, e, t, l = { bubbles: !0 }, i = !1) {
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
function mt(n, e) {
  let t = Object.getOwnPropertyNames(n);
  const l = {};
  for (let i = 0; i < t.length; i++) {
    const r = t[i], s = r.indexOf("$");
    s !== -1 && e.indexOf(r.substring(0, s + 1)) !== -1 || e.indexOf(r) === -1 && (l[r] = n[r]);
  }
  return l;
}
const mn = /^[a-z]+(?::(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/, $i = /^[^$]+(?:\$(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/;
function Ge(n) {
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
      const d = u.match(mn), g = u.match($i), p = d || g;
      if (u.match(/^SMUI:\w+:/)) {
        const S = u.split(":");
        let A = "";
        for (let R = 0; R < S.length; R++)
          A += R === S.length - 1 ? ":" + S[R] : S[R].split("-").map((_) => _.slice(0, 1).toUpperCase() + _.slice(1)).join("");
        console.warn(`The event ${u.split("$")[0]} has been renamed to ${A.split("$")[0]}.`), u = A;
      }
      if (p) {
        const S = u.split(d ? ":" : "$");
        u = S[0];
        const A = S.slice(1).reduce((R, _) => (R[_] = !0, R), {});
        A.passive && (f = f || {}, f.passive = !0), A.nonpassive && (f = f || {}, f.passive = !1), A.capture && (f = f || {}, f.capture = !0), A.once && (f = f || {}, f.once = !0), A.preventDefault && (c = xi(c)), A.stopPropagation && (c = er(c)), A.stopImmediatePropagation && (c = tr(c)), A.self && (c = nr(i, c)), A.trusted && (c = lr(c));
      }
      const h = hn(i, u, c, f), b = () => {
        h();
        const S = r.indexOf(b);
        S > -1 && r.splice(S, 1);
      };
      return r.push(b), u in s || (s[u] = hn(i, u, l)), b;
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
function xi(n) {
  return function(e) {
    return e.preventDefault(), n.call(this, e);
  };
}
function er(n) {
  return function(e) {
    return e.stopPropagation(), n.call(this, e);
  };
}
function tr(n) {
  return function(e) {
    return e.stopImmediatePropagation(), n.call(this, e);
  };
}
function nr(n, e) {
  return function(t) {
    if (t.target === n)
      return e.call(this, t);
  };
}
function lr(n) {
  return function(e) {
    if (e.isTrusted)
      return n.call(this, e);
  };
}
function Pe(n, e) {
  let t = Object.getOwnPropertyNames(n);
  const l = {};
  for (let i = 0; i < t.length; i++) {
    const r = t[i];
    r.substring(0, e.length) === e && (l[r.substring(e.length)] = n[r]);
  }
  return l;
}
function Se(n, e) {
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
var Ht;
function ir(n, e) {
  e === void 0 && (e = !1);
  var t = n.CSS, l = Ht;
  if (typeof Ht == "boolean" && !e)
    return Ht;
  var i = t && typeof t.supports == "function";
  if (!i)
    return !1;
  var r = t.supports("--css-vars", "yes"), s = t.supports("(--css-vars: yes)") && t.supports("color", "#00000000");
  return l = r || s, e || (Ht = l), l;
}
function rr(n, e, t) {
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
var _t = (
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
function sr(n) {
  return n === void 0 && (n = window), ar(n) ? { passive: !0 } : !1;
}
function ar(n) {
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
const zl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  applyPassive: sr
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
function or(n, e) {
  if (n.closest)
    return n.closest(e);
  for (var t = n; t; ) {
    if (Xl(t, e))
      return t;
    t = t.parentElement;
  }
  return null;
}
function Xl(n, e) {
  var t = n.matches || n.webkitMatchesSelector || n.msMatchesSelector;
  return t.call(n, e);
}
function ur(n) {
  var e = n;
  if (e.offsetParent !== null)
    return e.scrollWidth;
  var t = e.cloneNode(!0);
  t.style.setProperty("position", "absolute"), t.style.setProperty("transform", "translate(-9999px, -9999px)"), document.documentElement.appendChild(t);
  var l = t.scrollWidth;
  return document.documentElement.removeChild(t), l;
}
const Yl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  closest: or,
  estimateScrollWidth: ur,
  matches: Xl
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
var cr = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  BG_FOCUSED: "mdc-ripple-upgraded--background-focused",
  FG_ACTIVATION: "mdc-ripple-upgraded--foreground-activation",
  FG_DEACTIVATION: "mdc-ripple-upgraded--foreground-deactivation",
  ROOT: "mdc-ripple-upgraded",
  UNBOUNDED: "mdc-ripple-upgraded--unbounded"
}, fr = {
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
var _n = [
  "touchstart",
  "pointerdown",
  "mousedown",
  "keydown"
], bn = [
  "touchend",
  "pointerup",
  "mouseup",
  "contextmenu"
], Mt = [], dr = (
  /** @class */
  function(n) {
    pt(e, n);
    function e(t) {
      var l = n.call(this, Te(Te({}, e.defaultAdapter), t)) || this;
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
        return cr;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return fr;
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
          for (var r = $e(_n), s = r.next(); !s.done; s = r.next()) {
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
          for (var r = $e(bn), s = r.next(); !s.done; s = r.next()) {
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
        for (var i = $e(_n), r = i.next(); !r.done; r = i.next()) {
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
        for (var i = $e(bn), r = i.next(); !r.done; r = i.next()) {
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
            var a = t !== void 0 && Mt.length > 0 && Mt.some(function(o) {
              return l.adapter.containsEventTarget(o);
            });
            if (a) {
              this.resetActivationState();
              return;
            }
            t !== void 0 && (Mt.push(t.target), this.registerDeactivationHandlers(t)), i.wasElementMadeActive = this.checkElementMadeActive(t), i.wasElementMadeActive && this.animateActivation(), requestAnimationFrame(function() {
              Mt = [], !i.wasElementMadeActive && t !== void 0 && (t.key === " " || t.keyCode === 32) && (i.wasElementMadeActive = l.checkElementMadeActive(t), i.wasElementMadeActive && l.animateActivation()), i.wasElementMadeActive || (l.activationState = l.defaultActivationState());
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
        var d = this.getFgTranslationCoordinates(), g = d.startPoint, p = d.endPoint;
        c = g.x + "px, " + g.y + "px", f = p.x + "px, " + p.y + "px";
      }
      this.adapter.updateCssVariable(i, c), this.adapter.updateCssVariable(r, f), clearTimeout(this.activationTimer), clearTimeout(this.fgDeactivationRemovalTimer), this.rmBoundedActivationClasses(), this.adapter.removeClass(a), this.adapter.computeBoundingRect(), this.adapter.addClass(o), this.activationTimer = setTimeout(function() {
        t.activationTimerCallback();
      }, u);
    }, e.prototype.getFgTranslationCoordinates = function() {
      var t = this.activationState, l = t.activationEvent, i = t.wasActivatedByPointer, r;
      i ? r = rr(l, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect()) : r = {
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
        var i = Te({}, l);
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
  }(_t)
);
const { applyPassive: Tt } = zl, { matches: gr } = Yl;
function yt(n, { ripple: e = !0, surface: t = !1, unbounded: l = !1, disabled: i = !1, color: r, active: s, rippleElement: a, eventTarget: o, activeTarget: u, addClass: c = (p) => n.classList.add(p), removeClass: f = (p) => n.classList.remove(p), addStyle: d = (p, h) => n.style.setProperty(p, h), initPromise: g = Promise.resolve() } = {}) {
  let p, h = Ue("SMUI:addLayoutListener"), b, S = s, A = o, R = u;
  function _() {
    t ? (c("mdc-ripple-surface"), r === "primary" ? (c("smui-ripple-surface--primary"), f("smui-ripple-surface--secondary")) : r === "secondary" ? (f("smui-ripple-surface--primary"), c("smui-ripple-surface--secondary")) : (f("smui-ripple-surface--primary"), f("smui-ripple-surface--secondary"))) : (f("mdc-ripple-surface"), f("smui-ripple-surface--primary"), f("smui-ripple-surface--secondary")), p && S !== s && (S = s, s ? p.activate() : s === !1 && p.deactivate()), e && !p ? (p = new dr({
      addClass: c,
      browserSupportsCssVars: () => ir(window),
      computeBoundingRect: () => (a || n).getBoundingClientRect(),
      containsEventTarget: (v) => n.contains(v),
      deregisterDocumentInteractionHandler: (v, m) => document.documentElement.removeEventListener(v, m, Tt()),
      deregisterInteractionHandler: (v, m) => (o || n).removeEventListener(v, m, Tt()),
      deregisterResizeHandler: (v) => window.removeEventListener("resize", v),
      getWindowPageOffset: () => ({
        x: window.pageXOffset,
        y: window.pageYOffset
      }),
      isSurfaceActive: () => s ?? gr(u || n, ":active"),
      isSurfaceDisabled: () => !!i,
      isUnbounded: () => !!l,
      registerDocumentInteractionHandler: (v, m) => document.documentElement.addEventListener(v, m, Tt()),
      registerInteractionHandler: (v, m) => (o || n).addEventListener(v, m, Tt()),
      registerResizeHandler: (v) => window.addEventListener("resize", v),
      removeClass: f,
      updateCssVariable: d
    }), g.then(() => {
      p && (p.init(), p.setUnbounded(l));
    })) : p && !e && g.then(() => {
      p && (p.destroy(), p = void 0);
    }), p && (A !== o || R !== u) && (A = o, R = u, p.destroy(), requestAnimationFrame(() => {
      p && (p.init(), p.setUnbounded(l));
    })), !e && l && c("mdc-ripple-upgraded--unbounded");
  }
  _(), h && (b = h(F));
  function F() {
    p && p.layout();
  }
  return {
    update(v) {
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
      } = Object.assign({ ripple: !0, surface: !1, unbounded: !1, disabled: !1, color: void 0, active: void 0, rippleElement: void 0, eventTarget: void 0, activeTarget: void 0, addClass: (m) => n.classList.add(m), removeClass: (m) => n.classList.remove(m), addStyle: (m, E) => n.style.setProperty(m, E), initPromise: Promise.resolve() }, v)), _();
    },
    destroy() {
      p && (p.destroy(), p = void 0, f("mdc-ripple-surface"), f("smui-ripple-surface--primary"), f("smui-ripple-surface--secondary")), b && b();
    }
  };
}
function mr(n) {
  let e = (
    /*tag*/
    n[1]
  ), t, l, i = (
    /*tag*/
    n[1] && Qt(n)
  );
  return {
    c() {
      i && i.c(), t = Ie();
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
      L(i, r), l = !1;
    },
    d(r) {
      r && D(t), i && i.d(r);
    }
  };
}
function hr(n) {
  let e = (
    /*tag*/
    n[1]
  ), t, l = (
    /*tag*/
    n[1] && Jt(n)
  );
  return {
    c() {
      l && l.c(), t = Ie();
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
      ) ? (l.d(1), l = Jt(i), e = /*tag*/
      i[1], l.c(), l.m(t.parentNode, t)) : l.p(i, r) : (l = Jt(i), e = /*tag*/
      i[1], l.c(), l.m(t.parentNode, t)) : e && (l.d(1), l = null, e = /*tag*/
      i[1]);
    },
    i: J,
    o: J,
    d(i) {
      i && D(t), l && l.d(i);
    }
  };
}
function pr(n) {
  let e, t, l, i, r;
  const s = (
    /*#slots*/
    n[8].default
  ), a = re(
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
      e = Fe("svg"), a && a.c(), dn(e, u);
    },
    m(c, f) {
      M(c, e, f), a && a.m(e, null), n[9](e), l = !0, i || (r = [
        $(t = Se.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        $(
          /*forwardEvents*/
          n[4].call(null, e)
        )
      ], i = !0);
    },
    p(c, f) {
      a && a.p && (!l || f & /*$$scope*/
      128) && ae(
        a,
        s,
        c,
        /*$$scope*/
        c[7],
        l ? se(
          s,
          /*$$scope*/
          c[7],
          f,
          null
        ) : oe(
          /*$$scope*/
          c[7]
        ),
        null
      ), dn(e, u = ue(o, [f & /*$$restProps*/
      32 && /*$$restProps*/
      c[5]])), t && he(t.update) && f & /*use*/
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
      L(a, c), l = !1;
    },
    d(c) {
      c && D(e), a && a.d(c), n[9](null), i = !1, ge(r);
    }
  };
}
function Qt(n) {
  let e, t, l, i, r;
  const s = (
    /*#slots*/
    n[8].default
  ), a = re(
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
      e = U(
        /*tag*/
        n[1]
      ), a && a.c(), wt(
        /*tag*/
        n[1]
      )(e, u);
    },
    m(c, f) {
      M(c, e, f), a && a.m(e, null), n[11](e), l = !0, i || (r = [
        $(t = Se.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        $(
          /*forwardEvents*/
          n[4].call(null, e)
        )
      ], i = !0);
    },
    p(c, f) {
      a && a.p && (!l || f & /*$$scope*/
      128) && ae(
        a,
        s,
        c,
        /*$$scope*/
        c[7],
        l ? se(
          s,
          /*$$scope*/
          c[7],
          f,
          null
        ) : oe(
          /*$$scope*/
          c[7]
        ),
        null
      ), wt(
        /*tag*/
        c[1]
      )(e, u = ue(o, [f & /*$$restProps*/
      32 && /*$$restProps*/
      c[5]])), t && he(t.update) && f & /*use*/
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
      L(a, c), l = !1;
    },
    d(c) {
      c && D(e), a && a.d(c), n[11](null), i = !1, ge(r);
    }
  };
}
function Jt(n) {
  let e, t, l, i, r = [
    /*$$restProps*/
    n[5]
  ], s = {};
  for (let a = 0; a < r.length; a += 1)
    s = j(s, r[a]);
  return {
    c() {
      e = U(
        /*tag*/
        n[1]
      ), wt(
        /*tag*/
        n[1]
      )(e, s);
    },
    m(a, o) {
      M(a, e, o), n[10](e), l || (i = [
        $(t = Se.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        $(
          /*forwardEvents*/
          n[4].call(null, e)
        )
      ], l = !0);
    },
    p(a, o) {
      wt(
        /*tag*/
        a[1]
      )(e, s = ue(r, [o & /*$$restProps*/
      32 && /*$$restProps*/
      a[5]])), t && he(t.update) && o & /*use*/
      1 && t.update.call(
        null,
        /*use*/
        a[0]
      );
    },
    d(a) {
      a && D(e), n[10](null), l = !1, ge(i);
    }
  };
}
function _r(n) {
  let e, t, l, i;
  const r = [pr, hr, mr], s = [];
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
      t.c(), l = Ie();
    },
    m(o, u) {
      s[e].m(o, u), M(o, l, u), i = !0;
    },
    p(o, [u]) {
      let c = e;
      e = a(o), e === c ? s[e].p(o, u) : (fe(), L(s[c], 1, 1, () => {
        s[c] = null;
      }), de(), t = s[e], t ? t.p(o, u) : (t = s[e] = r[e](o), t.c()), C(t, 1), t.m(l.parentNode, l));
    },
    i(o) {
      i || (C(t), i = !0);
    },
    o(o) {
      L(t), i = !1;
    },
    d(o) {
      o && D(l), s[e].d(o);
    }
  };
}
function br(n, e, t) {
  let l;
  const i = ["use", "tag", "getElement"];
  let r = ce(e, i), { $$slots: s = {}, $$scope: a } = e, { use: o = [] } = e, { tag: u } = e;
  const c = Ge(Re());
  let f;
  function d() {
    return f;
  }
  function g(b) {
    ne[b ? "unshift" : "push"](() => {
      f = b, t(2, f);
    });
  }
  function p(b) {
    ne[b ? "unshift" : "push"](() => {
      f = b, t(2, f);
    });
  }
  function h(b) {
    ne[b ? "unshift" : "push"](() => {
      f = b, t(2, f);
    });
  }
  return n.$$set = (b) => {
    e = j(j({}, e), Me(b)), t(5, r = ce(e, i)), "use" in b && t(0, o = b.use), "tag" in b && t(1, u = b.tag), "$$scope" in b && t(7, a = b.$$scope);
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
    p,
    h
  ];
}
class Ot extends te {
  constructor(e) {
    super(), ee(this, e, br, _r, Q, { use: 0, tag: 1, getElement: 6 });
  }
  get getElement() {
    return this.$$.ctx[6];
  }
}
const ut = [];
function kt(n, e = J) {
  let t;
  const l = /* @__PURE__ */ new Set();
  function i(a) {
    if (Q(n, a) && (n = a, t)) {
      const o = !ut.length;
      for (const u of l)
        u[1](), ut.push(u, n);
      if (o) {
        for (let u = 0; u < ut.length; u += 2)
          ut[u][0](ut[u + 1]);
        ut.length = 0;
      }
    }
  }
  function r(a) {
    i(a(n));
  }
  function s(a, o = J) {
    const u = [a, o];
    return l.add(u), l.size === 1 && (t = e(i, r) || J), a(n), () => {
      l.delete(u), l.size === 0 && t && (t(), t = null);
    };
  }
  return { set: i, update: r, subscribe: s };
}
function vr(n) {
  let e;
  const t = (
    /*#slots*/
    n[4].default
  ), l = re(
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
      8) && ae(
        l,
        t,
        i,
        /*$$scope*/
        i[3],
        e ? se(
          t,
          /*$$scope*/
          i[3],
          r,
          null
        ) : oe(
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
      L(l, i), e = !1;
    },
    d(i) {
      l && l.d(i);
    }
  };
}
function Cr(n, e, t) {
  let l, { $$slots: i = {}, $$scope: r } = e, { key: s } = e, { value: a } = e;
  const o = kt(a);
  return ft(n, o, (u) => t(5, l = u)), De(s, o), Bt(() => {
    o.set(void 0);
  }), n.$$set = (u) => {
    "key" in u && t(1, s = u.key), "value" in u && t(2, a = u.value), "$$scope" in u && t(3, r = u.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty & /*value*/
    4 && tn(o, l = a, l);
  }, [o, s, a, r, i];
}
class Wt extends te {
  constructor(e) {
    super(), ee(this, e, Cr, vr, Q, { key: 1, value: 2 });
  }
}
function vn(n) {
  let e;
  return {
    c() {
      e = U("div"), w(e, "class", "mdc-button__touch");
    },
    m(t, l) {
      M(t, e, l);
    },
    d(t) {
      t && D(e);
    }
  };
}
function Ir(n) {
  let e, t, l, i;
  const r = (
    /*#slots*/
    n[28].default
  ), s = re(
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
      e = U("div"), t = W(), s && s.c(), a && a.c(), l = Ie(), w(e, "class", "mdc-button__ripple");
    },
    m(o, u) {
      M(o, e, u), M(o, t, u), s && s.m(o, u), a && a.m(o, u), M(o, l, u), i = !0;
    },
    p(o, u) {
      s && s.p && (!i || u[0] & /*$$scope*/
      1073741824) && ae(
        s,
        r,
        o,
        /*$$scope*/
        o[30],
        i ? se(
          r,
          /*$$scope*/
          o[30],
          u,
          null
        ) : oe(
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
      L(s, o), i = !1;
    },
    d(o) {
      o && (D(e), D(t), D(l)), s && s.d(o), a && a.d(o);
    }
  };
}
function Ar(n) {
  let e, t, l;
  const i = [
    { tag: (
      /*tag*/
      n[10]
    ) },
    {
      use: [
        [
          yt,
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
      ).map($t).concat([
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
      $$slots: { default: [Ir] },
      $$scope: { ctx: a }
    };
    for (let c = 0; c < i.length; c += 1)
      u = j(u, i[c]);
    return o !== void 0 && o[0] & /*tag, ripple, color, $$restProps, addClass, removeClass, addStyle, forwardEvents, use, className, variant, touch, context, secondary, internalClasses, internalStyles, style, actionProp, defaultProp, secondaryProp, href*/
    12580351 && (u = j(u, ue(i, [
      o[0] & /*tag*/
      1024 && { tag: (
        /*tag*/
        a[10]
      ) },
      o[0] & /*ripple, color, $$restProps, addClass, removeClass, addStyle, forwardEvents, use*/
      12189721 && {
        use: [
          [
            yt,
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
        ).map($t).concat([
          /*style*/
          a[2]
        ]).join(" ")
      },
      o[0] & /*actionProp*/
      65536 && Le(
        /*actionProp*/
        a[16]
      ),
      o[0] & /*defaultProp*/
      32768 && Le(
        /*defaultProp*/
        a[15]
      ),
      o[0] & /*secondaryProp*/
      16384 && Le(
        /*secondaryProp*/
        a[14]
      ),
      o[0] & /*href*/
      128 && { href: (
        /*href*/
        a[7]
      ) },
      o[0] & /*$$restProps*/
      8388608 && Le(
        /*$$restProps*/
        a[23]
      )
    ]))), { props: u };
  }
  return r && (e = Gt(r, s(n)), n[29](e), e.$on(
    "click",
    /*handleClick*/
    n[22]
  )), {
    c() {
      e && V(e.$$.fragment), t = Ie();
    },
    m(a, o) {
      e && Z(e, a, o), M(a, t, o), l = !0;
    },
    p(a, o) {
      if (o[0] & /*component*/
      512 && r !== (r = /*component*/
      a[9])) {
        if (e) {
          fe();
          const u = e;
          L(u.$$.fragment, 1, 0, () => {
            q(u, 1);
          }), de();
        }
        r ? (e = Gt(r, s(a, o)), a[29](e), e.$on(
          "click",
          /*handleClick*/
          a[22]
        ), V(e.$$.fragment), C(e.$$.fragment, 1), Z(e, t.parentNode, t)) : e = null;
      } else if (r) {
        const u = o[0] & /*tag, ripple, color, $$restProps, addClass, removeClass, addStyle, forwardEvents, use, className, variant, touch, context, secondary, internalClasses, internalStyles, style, actionProp, defaultProp, secondaryProp, href*/
        12580351 ? ue(i, [
          o[0] & /*tag*/
          1024 && { tag: (
            /*tag*/
            a[10]
          ) },
          o[0] & /*ripple, color, $$restProps, addClass, removeClass, addStyle, forwardEvents, use*/
          12189721 && {
            use: [
              [
                yt,
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
            ).map($t).concat([
              /*style*/
              a[2]
            ]).join(" ")
          },
          o[0] & /*actionProp*/
          65536 && Le(
            /*actionProp*/
            a[16]
          ),
          o[0] & /*defaultProp*/
          32768 && Le(
            /*defaultProp*/
            a[15]
          ),
          o[0] & /*secondaryProp*/
          16384 && Le(
            /*secondaryProp*/
            a[14]
          ),
          o[0] & /*href*/
          128 && { href: (
            /*href*/
            a[7]
          ) },
          o[0] & /*$$restProps*/
          8388608 && Le(
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
      e && L(e.$$.fragment, a), l = !1;
    },
    d(a) {
      a && D(t), n[29](null), e && q(e, a);
    }
  };
}
const $t = ([n, e]) => `${n}: ${e};`;
function yr(n, e, t) {
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
  let a = ce(e, s), { $$slots: o = {}, $$scope: u } = e;
  const c = Ge(Re());
  let { use: f = [] } = e, { class: d = "" } = e, { style: g = "" } = e, { ripple: p = !0 } = e, { color: h = "primary" } = e, { variant: b = "text" } = e, { touch: S = !1 } = e, { href: A = void 0 } = e, { action: R = "close" } = e, { defaultAction: _ = !1 } = e, { secondary: F = !1 } = e, v, m = {}, E = {}, B = Ue("SMUI:button:context"), { component: G = Ot } = e, { tag: k = G === Ot ? A == null ? "button" : "a" : void 0 } = e, O = a.disabled;
  De("SMUI:label:context", "button"), De("SMUI:icon:context", "button");
  function P(I) {
    m[I] || t(12, m[I] = !0, m);
  }
  function Y(I) {
    (!(I in m) || m[I]) && t(12, m[I] = !1, m);
  }
  function ye(I, N) {
    E[I] != N && (N === "" || N == null ? (delete E[I], t(13, E)) : t(13, E[I] = N, E));
  }
  function ke() {
    B === "banner" && _e(ve(), F ? "SMUIBannerButton:secondaryActionClick" : "SMUIBannerButton:primaryActionClick");
  }
  function ve() {
    return v.getElement();
  }
  function z(I) {
    ne[I ? "unshift" : "push"](() => {
      v = I, t(11, v);
    });
  }
  return n.$$set = (I) => {
    t(31, e = j(j({}, e), Me(I))), t(23, a = ce(e, s)), "use" in I && t(0, f = I.use), "class" in I && t(1, d = I.class), "style" in I && t(2, g = I.style), "ripple" in I && t(3, p = I.ripple), "color" in I && t(4, h = I.color), "variant" in I && t(5, b = I.variant), "touch" in I && t(6, S = I.touch), "href" in I && t(7, A = I.href), "action" in I && t(24, R = I.action), "defaultAction" in I && t(25, _ = I.defaultAction), "secondary" in I && t(8, F = I.secondary), "component" in I && t(9, G = I.component), "tag" in I && t(10, k = I.tag), "$$scope" in I && t(30, u = I.$$scope);
  }, n.$$.update = () => {
    if (t(16, l = B === "dialog:action" && R != null ? { "data-mdc-dialog-action": R } : { action: e.action }), t(15, i = B === "dialog:action" && _ ? { "data-mdc-dialog-button-default": "" } : { default: e.default }), t(14, r = B === "banner" ? {} : { secondary: e.secondary }), O !== a.disabled) {
      if (v) {
        const I = ve();
        "blur" in I && I.blur();
      }
      t(27, O = a.disabled);
    }
  }, e = Me(e), [
    f,
    d,
    g,
    p,
    h,
    b,
    S,
    A,
    F,
    G,
    k,
    v,
    m,
    E,
    r,
    i,
    l,
    c,
    B,
    P,
    Y,
    ye,
    ke,
    a,
    R,
    _,
    ve,
    O,
    o,
    z,
    u
  ];
}
class ht extends te {
  constructor(e) {
    super(), ee(
      this,
      e,
      yr,
      Ar,
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
var kr = {
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
var wr = (
  /** @class */
  function(n) {
    pt(e, n);
    function e(t) {
      var l = n.call(this, Te(Te({}, e.defaultAdapter), t)) || this;
      return l.shakeAnimationEndHandler = function() {
        l.handleShakeAnimationEnd();
      }, l;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return kr;
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
  }(_t)
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
var it = {
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
var Lr = (
  /** @class */
  function(n) {
    pt(e, n);
    function e(t) {
      var l = n.call(this, Te(Te({}, e.defaultAdapter), t)) || this;
      return l.transitionEndHandler = function(i) {
        l.handleTransitionEnd(i);
      }, l;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return it;
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
      this.adapter.removeClass(it.LINE_RIPPLE_DEACTIVATING), this.adapter.addClass(it.LINE_RIPPLE_ACTIVE);
    }, e.prototype.setRippleCenter = function(t) {
      this.adapter.setStyle("transform-origin", t + "px center");
    }, e.prototype.deactivate = function() {
      this.adapter.addClass(it.LINE_RIPPLE_DEACTIVATING);
    }, e.prototype.handleTransitionEnd = function(t) {
      var l = this.adapter.hasClass(it.LINE_RIPPLE_DEACTIVATING);
      t.propertyName === "opacity" && l && (this.adapter.removeClass(it.LINE_RIPPLE_ACTIVE), this.adapter.removeClass(it.LINE_RIPPLE_DEACTIVATING));
    }, e;
  }(_t)
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
var Sr = {
  NOTCH_ELEMENT_SELECTOR: ".mdc-notched-outline__notch"
}, Cn = {
  // This should stay in sync with $mdc-notched-outline-padding * 2.
  NOTCH_ELEMENT_PADDING: 8
}, Rr = {
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
var Er = (
  /** @class */
  function(n) {
    pt(e, n);
    function e(t) {
      return n.call(this, Te(Te({}, e.defaultAdapter), t)) || this;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return Sr;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Rr;
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
  }(_t)
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
var xt = {
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
}, Pr = {
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
}, Dr = [
  "pattern",
  "min",
  "max",
  "required",
  "step",
  "minlength",
  "maxlength"
], Hr = [
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
var An = ["mousedown", "touchstart"], yn = ["click", "keydown"], Mr = (
  /** @class */
  function(n) {
    pt(e, n);
    function e(t, l) {
      l === void 0 && (l = {});
      var i = n.call(this, Te(Te({}, e.defaultAdapter), t)) || this;
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
        return Pr;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return xt;
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
        return Hr.indexOf(t) >= 0;
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
        for (var s = $e(An), a = s.next(); !a.done; a = s.next()) {
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
        for (var u = $e(yn), c = u.next(); !c.done; c = u.next()) {
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
        for (var s = $e(An), a = s.next(); !a.done; a = s.next()) {
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
        for (var u = $e(yn), c = u.next(); !c.done; c = u.next()) {
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
        return Dr.indexOf(i) > -1 ? (l.styleValidity(!0), l.adapter.setLabelRequired(l.getNativeInput().required), !0) : !1;
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
        r && s ? this.adapter.setInputAttr(xt.ARIA_DESCRIBEDBY, s) : this.adapter.removeInputAttr(xt.ARIA_DESCRIBEDBY);
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
  }(_t)
);
function Tr(n) {
  let e, t, l, i, r, s, a, o;
  const u = (
    /*#slots*/
    n[22].default
  ), c = re(
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
    d = j(d, f[g]);
  return {
    c() {
      e = U("label"), c && c.c(), ie(e, d);
    },
    m(g, p) {
      M(g, e, p), c && c.m(e, null), n[24](e), s = !0, a || (o = [
        $(r = Se.call(
          null,
          e,
          /*use*/
          n[2]
        )),
        $(
          /*forwardEvents*/
          n[10].call(null, e)
        )
      ], a = !0);
    },
    p(g, p) {
      c && c.p && (!s || p & /*$$scope*/
      2097152) && ae(
        c,
        u,
        g,
        /*$$scope*/
        g[21],
        s ? se(
          u,
          /*$$scope*/
          g[21],
          p,
          null
        ) : oe(
          /*$$scope*/
          g[21]
        ),
        null
      ), ie(e, d = ue(f, [
        (!s || p & /*className, floatAbove, required, internalClasses*/
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
        (!s || p & /*internalStyles, style*/
        528 && l !== (l = Object.entries(
          /*internalStyles*/
          g[9]
        ).map(wn).concat([
          /*style*/
          g[4]
        ]).join(" "))) && { style: l },
        (!s || p & /*forId*/
        32 && i !== (i = /*forId*/
        g[5] || /*inputProps*/
        (g[11] ? (
          /*inputProps*/
          g[11].id
        ) : void 0))) && { for: i },
        p & /*$$restProps*/
        4096 && /*$$restProps*/
        g[12]
      ])), r && he(r.update) && p & /*use*/
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
      L(c, g), s = !1;
    },
    d(g) {
      g && D(e), c && c.d(g), n[24](null), a = !1, ge(o);
    }
  };
}
function Fr(n) {
  let e, t, l, i, r, s, a;
  const o = (
    /*#slots*/
    n[22].default
  ), u = re(
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
      ).map(kn).concat([
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
      e = U("span"), u && u.c(), ie(e, f);
    },
    m(d, g) {
      M(d, e, g), u && u.m(e, null), n[23](e), r = !0, s || (a = [
        $(i = Se.call(
          null,
          e,
          /*use*/
          n[2]
        )),
        $(
          /*forwardEvents*/
          n[10].call(null, e)
        )
      ], s = !0);
    },
    p(d, g) {
      u && u.p && (!r || g & /*$$scope*/
      2097152) && ae(
        u,
        o,
        d,
        /*$$scope*/
        d[21],
        r ? se(
          o,
          /*$$scope*/
          d[21],
          g,
          null
        ) : oe(
          /*$$scope*/
          d[21]
        ),
        null
      ), ie(e, f = ue(c, [
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
        ).map(kn).concat([
          /*style*/
          d[4]
        ]).join(" "))) && { style: l },
        g & /*$$restProps*/
        4096 && /*$$restProps*/
        d[12]
      ])), i && he(i.update) && g & /*use*/
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
      L(u, d), r = !1;
    },
    d(d) {
      d && D(e), u && u.d(d), n[23](null), s = !1, ge(a);
    }
  };
}
function Gr(n) {
  let e, t, l, i;
  const r = [Fr, Tr], s = [];
  function a(o, u) {
    return (
      /*wrapped*/
      o[6] ? 0 : 1
    );
  }
  return e = a(n), t = s[e] = r[e](n), {
    c() {
      t.c(), l = Ie();
    },
    m(o, u) {
      s[e].m(o, u), M(o, l, u), i = !0;
    },
    p(o, [u]) {
      let c = e;
      e = a(o), e === c ? s[e].p(o, u) : (fe(), L(s[c], 1, 1, () => {
        s[c] = null;
      }), de(), t = s[e], t ? t.p(o, u) : (t = s[e] = r[e](o), t.c()), C(t, 1), t.m(l.parentNode, l));
    },
    i(o) {
      i || (C(t), i = !0);
    },
    o(o) {
      L(t), i = !1;
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
  let i = ce(e, l), { $$slots: r = {}, $$scope: s } = e;
  var a;
  const o = Ge(Re());
  let { use: u = [] } = e, { class: c = "" } = e, { style: f = "" } = e, { for: d = void 0 } = e, { floatAbove: g = !1 } = e, { required: p = !1 } = e, { wrapped: h = !1 } = e, b, S, A = {}, R = {}, _ = (a = Ue("SMUI:generic:input:props")) !== null && a !== void 0 ? a : {}, F = g, v = p;
  Be(() => {
    t(18, S = new wr({
      addClass: m,
      removeClass: E,
      getWidth: () => {
        var I, N;
        const pe = ye(), Ae = pe.cloneNode(!0);
        (I = pe.parentNode) === null || I === void 0 || I.appendChild(Ae), Ae.classList.add("smui-floating-label--remove-transition"), Ae.classList.add("smui-floating-label--force-size"), Ae.classList.remove("mdc-floating-label--float-above");
        const Oe = Ae.scrollWidth;
        return (N = pe.parentNode) === null || N === void 0 || N.removeChild(Ae), Oe;
      },
      registerInteractionHandler: (I, N) => ye().addEventListener(I, N),
      deregisterInteractionHandler: (I, N) => ye().removeEventListener(I, N)
    }));
    const z = {
      get element() {
        return ye();
      },
      addStyle: B,
      removeStyle: G
    };
    return _e(b, "SMUIFloatingLabel:mount", z), S.init(), () => {
      _e(b, "SMUIFloatingLabel:unmount", z), S.destroy();
    };
  });
  function m(z) {
    A[z] || t(8, A[z] = !0, A);
  }
  function E(z) {
    (!(z in A) || A[z]) && t(8, A[z] = !1, A);
  }
  function B(z, I) {
    R[z] != I && (I === "" || I == null ? (delete R[z], t(9, R)) : t(9, R[z] = I, R));
  }
  function G(z) {
    z in R && (delete R[z], t(9, R));
  }
  function k(z) {
    S.shake(z);
  }
  function O(z) {
    t(0, g = z);
  }
  function P(z) {
    t(1, p = z);
  }
  function Y() {
    return S.getWidth();
  }
  function ye() {
    return b;
  }
  function ke(z) {
    ne[z ? "unshift" : "push"](() => {
      b = z, t(7, b);
    });
  }
  function ve(z) {
    ne[z ? "unshift" : "push"](() => {
      b = z, t(7, b);
    });
  }
  return n.$$set = (z) => {
    e = j(j({}, e), Me(z)), t(12, i = ce(e, l)), "use" in z && t(2, u = z.use), "class" in z && t(3, c = z.class), "style" in z && t(4, f = z.style), "for" in z && t(5, d = z.for), "floatAbove" in z && t(0, g = z.floatAbove), "required" in z && t(1, p = z.required), "wrapped" in z && t(6, h = z.wrapped), "$$scope" in z && t(21, s = z.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty & /*instance, previousFloatAbove, floatAbove*/
    786433 && S && F !== g && (t(19, F = g), S.float(g)), n.$$.dirty & /*instance, previousRequired, required*/
    1310722 && S && v !== p && (t(20, v = p), S.setRequired(p));
  }, [
    g,
    p,
    u,
    c,
    f,
    d,
    h,
    b,
    A,
    R,
    o,
    _,
    i,
    k,
    O,
    P,
    Y,
    ye,
    S,
    F,
    v,
    s,
    r,
    ke,
    ve
  ];
}
class Kl extends te {
  constructor(e) {
    super(), ee(this, e, Ur, Gr, Q, {
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
      ).map(Ln).concat([
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
      e = U("div"), ie(e, o);
    },
    m(u, c) {
      M(u, e, c), n[13](e), r || (s = [
        $(i = Se.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        $(
          /*forwardEvents*/
          n[7].call(null, e)
        )
      ], r = !0);
    },
    p(u, [c]) {
      ie(e, o = ue(a, [
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
        ).map(Ln).concat([
          /*style*/
          u[2]
        ]).join(" ")) && { style: l },
        c & /*$$restProps*/
        256 && /*$$restProps*/
        u[8]
      ])), i && he(i.update) && c & /*use*/
      1 && i.update.call(
        null,
        /*use*/
        u[0]
      );
    },
    i: J,
    o: J,
    d(u) {
      u && D(e), n[13](null), r = !1, ge(s);
    }
  };
}
const Ln = ([n, e]) => `${n}: ${e};`;
function Wr(n, e, t) {
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
  let i = ce(e, l);
  const r = Ge(Re());
  let { use: s = [] } = e, { class: a = "" } = e, { style: o = "" } = e, { active: u = !1 } = e, c, f, d = {}, g = {};
  Be(() => (f = new Lr({
    addClass: h,
    removeClass: b,
    hasClass: p,
    setStyle: S,
    registerEventHandler: (m, E) => F().addEventListener(m, E),
    deregisterEventHandler: (m, E) => F().removeEventListener(m, E)
  }), f.init(), () => {
    f.destroy();
  }));
  function p(m) {
    return m in d ? d[m] : F().classList.contains(m);
  }
  function h(m) {
    d[m] || t(5, d[m] = !0, d);
  }
  function b(m) {
    (!(m in d) || d[m]) && t(5, d[m] = !1, d);
  }
  function S(m, E) {
    g[m] != E && (E === "" || E == null ? (delete g[m], t(6, g)) : t(6, g[m] = E, g));
  }
  function A() {
    f.activate();
  }
  function R() {
    f.deactivate();
  }
  function _(m) {
    f.setRippleCenter(m);
  }
  function F() {
    return c;
  }
  function v(m) {
    ne[m ? "unshift" : "push"](() => {
      c = m, t(4, c);
    });
  }
  return n.$$set = (m) => {
    e = j(j({}, e), Me(m)), t(8, i = ce(e, l)), "use" in m && t(0, s = m.use), "class" in m && t(1, a = m.class), "style" in m && t(2, o = m.style), "active" in m && t(3, u = m.active);
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
    R,
    _,
    F,
    v
  ];
}
class Br extends te {
  constructor(e) {
    super(), ee(this, e, Wr, Or, Q, {
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
function Sn(n) {
  let e, t, l;
  const i = (
    /*#slots*/
    n[15].default
  ), r = re(
    i,
    n,
    /*$$scope*/
    n[14],
    null
  );
  return {
    c() {
      e = U("div"), r && r.c(), w(e, "class", "mdc-notched-outline__notch"), w(e, "style", t = Object.entries(
        /*notchStyles*/
        n[7]
      ).map(Rn).join(" "));
    },
    m(s, a) {
      M(s, e, a), r && r.m(e, null), l = !0;
    },
    p(s, a) {
      r && r.p && (!l || a & /*$$scope*/
      16384) && ae(
        r,
        i,
        s,
        /*$$scope*/
        s[14],
        l ? se(
          i,
          /*$$scope*/
          s[14],
          a,
          null
        ) : oe(
          /*$$scope*/
          s[14]
        ),
        null
      ), (!l || a & /*notchStyles*/
      128 && t !== (t = Object.entries(
        /*notchStyles*/
        s[7]
      ).map(Rn).join(" "))) && w(e, "style", t);
    },
    i(s) {
      l || (C(r, s), l = !0);
    },
    o(s) {
      L(r, s), l = !1;
    },
    d(s) {
      s && D(e), r && r.d(s);
    }
  };
}
function Nr(n) {
  let e, t, l, i, r, s, a, o, u, c, f = !/*noLabel*/
  n[3] && Sn(n), d = [
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
  for (let p = 0; p < d.length; p += 1)
    g = j(g, d[p]);
  return {
    c() {
      e = U("div"), t = U("div"), l = W(), f && f.c(), i = W(), r = U("div"), w(t, "class", "mdc-notched-outline__leading"), w(r, "class", "mdc-notched-outline__trailing"), ie(e, g);
    },
    m(p, h) {
      M(p, e, h), T(e, t), T(e, l), f && f.m(e, null), T(e, i), T(e, r), n[16](e), o = !0, u || (c = [
        $(a = Se.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        $(
          /*forwardEvents*/
          n[8].call(null, e)
        ),
        K(
          e,
          "SMUIFloatingLabel:mount",
          /*handleFloatingLabelMount*/
          n[9]
        ),
        K(
          e,
          "SMUIFloatingLabel:unmount",
          /*SMUIFloatingLabel_unmount_handler*/
          n[17]
        )
      ], u = !0);
    },
    p(p, [h]) {
      /*noLabel*/
      p[3] ? f && (fe(), L(f, 1, 1, () => {
        f = null;
      }), de()) : f ? (f.p(p, h), h & /*noLabel*/
      8 && C(f, 1)) : (f = Sn(p), f.c(), C(f, 1), f.m(e, i)), ie(e, g = ue(d, [
        (!o || h & /*className, notched, noLabel, internalClasses*/
        78 && s !== (s = x({
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
        }))) && { class: s },
        h & /*$$restProps*/
        1024 && /*$$restProps*/
        p[10]
      ])), a && he(a.update) && h & /*use*/
      1 && a.update.call(
        null,
        /*use*/
        p[0]
      );
    },
    i(p) {
      o || (C(f), o = !0);
    },
    o(p) {
      L(f), o = !1;
    },
    d(p) {
      p && D(e), f && f.d(), n[16](null), u = !1, ge(c);
    }
  };
}
const Rn = ([n, e]) => `${n}: ${e};`;
function Zr(n, e, t) {
  const l = ["use", "class", "notched", "noLabel", "notch", "closeNotch", "getElement"];
  let i = ce(e, l), { $$slots: r = {}, $$scope: s } = e;
  const a = Ge(Re());
  let { use: o = [] } = e, { class: u = "" } = e, { notched: c = !1 } = e, { noLabel: f = !1 } = e, d, g, p, h = {}, b = {};
  Be(() => (g = new Er({
    addClass: A,
    removeClass: R,
    setNotchWidthProperty: (k) => _("width", k + "px"),
    removeNotchWidthProperty: () => F("width")
  }), g.init(), () => {
    g.destroy();
  }));
  function S(k) {
    t(4, p = k.detail);
  }
  function A(k) {
    h[k] || t(6, h[k] = !0, h);
  }
  function R(k) {
    (!(k in h) || h[k]) && t(6, h[k] = !1, h);
  }
  function _(k, O) {
    b[k] != O && (O === "" || O == null ? (delete b[k], t(7, b)) : t(7, b[k] = O, b));
  }
  function F(k) {
    k in b && (delete b[k], t(7, b));
  }
  function v(k) {
    g.notch(k);
  }
  function m() {
    g.closeNotch();
  }
  function E() {
    return d;
  }
  function B(k) {
    ne[k ? "unshift" : "push"](() => {
      d = k, t(5, d);
    });
  }
  const G = () => t(4, p = void 0);
  return n.$$set = (k) => {
    e = j(j({}, e), Me(k)), t(10, i = ce(e, l)), "use" in k && t(0, o = k.use), "class" in k && t(1, u = k.class), "notched" in k && t(2, c = k.notched), "noLabel" in k && t(3, f = k.noLabel), "$$scope" in k && t(14, s = k.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty & /*floatingLabel*/
    16 && (p ? (p.addStyle("transition-duration", "0s"), A("mdc-notched-outline--upgraded"), requestAnimationFrame(() => {
      p && p.removeStyle("transition-duration");
    })) : R("mdc-notched-outline--upgraded"));
  }, [
    o,
    u,
    c,
    f,
    p,
    d,
    h,
    b,
    a,
    S,
    i,
    v,
    m,
    E,
    s,
    r,
    B,
    G
  ];
}
class qr extends te {
  constructor(e) {
    super(), ee(this, e, Zr, Nr, Q, {
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
function Vr(n) {
  let e;
  const t = (
    /*#slots*/
    n[11].default
  ), l = re(
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
      8192) && ae(
        l,
        t,
        i,
        /*$$scope*/
        i[13],
        e ? se(
          t,
          /*$$scope*/
          i[13],
          r,
          null
        ) : oe(
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
      L(l, i), e = !1;
    },
    d(i) {
      l && l.d(i);
    }
  };
}
function jr(n) {
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
      $$slots: { default: [Vr] },
      $$scope: { ctx: a }
    };
    for (let c = 0; c < i.length; c += 1)
      u = j(u, i[c]);
    return o !== void 0 && o & /*tag, forwardEvents, use, className, smuiClass, smuiClassMap, props, $$restProps*/
    1003 && (u = j(u, ue(i, [
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
      128 && Le(
        /*props*/
        a[7]
      ),
      o & /*$$restProps*/
      512 && Le(
        /*$$restProps*/
        a[9]
      )
    ]))), { props: u };
  }
  return r && (e = Gt(r, s(n)), n[12](e)), {
    c() {
      e && V(e.$$.fragment), t = Ie();
    },
    m(a, o) {
      e && Z(e, a, o), M(a, t, o), l = !0;
    },
    p(a, [o]) {
      if (o & /*component*/
      4 && r !== (r = /*component*/
      a[2])) {
        if (e) {
          fe();
          const u = e;
          L(u.$$.fragment, 1, 0, () => {
            q(u, 1);
          }), de();
        }
        r ? (e = Gt(r, s(a, o)), a[12](e), V(e.$$.fragment), C(e.$$.fragment, 1), Z(e, t.parentNode, t)) : e = null;
      } else if (r) {
        const u = o & /*tag, forwardEvents, use, className, smuiClass, smuiClassMap, props, $$restProps*/
        1003 ? ue(i, [
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
          128 && Le(
            /*props*/
            a[7]
          ),
          o & /*$$restProps*/
          512 && Le(
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
      e && L(e.$$.fragment, a), l = !1;
    },
    d(a) {
      a && D(t), n[12](null), e && q(e, a);
    }
  };
}
const Ye = {
  component: Ot,
  tag: "div",
  class: "",
  classMap: {},
  contexts: {},
  props: {}
};
function zr(n, e, t) {
  const l = ["use", "class", "component", "tag", "getElement"];
  let i = ce(e, l), { $$slots: r = {}, $$scope: s } = e, { use: a = [] } = e, { class: o = "" } = e, u;
  const c = Ye.class, f = {}, d = [], g = Ye.contexts, p = Ye.props;
  let { component: h = Ye.component } = e, { tag: b = h === Ot ? Ye.tag : void 0 } = e;
  Object.entries(Ye.classMap).forEach(([_, F]) => {
    const v = Ue(F);
    v && "subscribe" in v && d.push(v.subscribe((m) => {
      t(5, f[_] = m, f);
    }));
  });
  const S = Ge(Re());
  for (let _ in g)
    g.hasOwnProperty(_) && De(_, g[_]);
  Bt(() => {
    for (const _ of d)
      _();
  });
  function A() {
    return u.getElement();
  }
  function R(_) {
    ne[_ ? "unshift" : "push"](() => {
      u = _, t(4, u);
    });
  }
  return n.$$set = (_) => {
    e = j(j({}, e), Me(_)), t(9, i = ce(e, l)), "use" in _ && t(0, a = _.use), "class" in _ && t(1, o = _.class), "component" in _ && t(2, h = _.component), "tag" in _ && t(3, b = _.tag), "$$scope" in _ && t(13, s = _.$$scope);
  }, [
    a,
    o,
    h,
    b,
    u,
    f,
    c,
    p,
    S,
    i,
    A,
    r,
    R,
    s
  ];
}
class Xr extends te {
  constructor(e) {
    super(), ee(this, e, zr, jr, Q, {
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
const En = Object.assign({}, Ye);
function He(n) {
  return new Proxy(Xr, {
    construct: function(e, t) {
      return Object.assign(Ye, En, n), new e(...t);
    },
    get: function(e, t) {
      return Object.assign(Ye, En, n), e[t];
    }
  });
}
const Yr = He({
  class: "mdc-text-field-helper-line",
  tag: "div"
}), Kr = He({
  class: "mdc-text-field__affix mdc-text-field__affix--prefix",
  tag: "span"
}), Qr = He({
  class: "mdc-text-field__affix mdc-text-field__affix--suffix",
  tag: "span"
});
function Jr(n) {
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
      e = U("input"), ie(e, a);
    },
    m(o, u) {
      M(o, e, u), e.autofocus && e.focus(), n[26](e), i || (r = [
        $(l = Se.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        $(
          /*forwardEvents*/
          n[7].call(null, e)
        ),
        K(
          e,
          "input",
          /*input_handler*/
          n[27]
        ),
        K(
          e,
          "change",
          /*changeHandler*/
          n[9]
        ),
        K(
          e,
          "blur",
          /*blur_handler*/
          n[24]
        ),
        K(
          e,
          "focus",
          /*focus_handler*/
          n[25]
        )
      ], i = !0);
    },
    p(o, [u]) {
      ie(e, a = ue(s, [
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
      ])), l && he(l.update) && u & /*use*/
      1 && l.update.call(
        null,
        /*use*/
        o[0]
      );
    },
    i: J,
    o: J,
    d(o) {
      o && D(e), n[26](null), i = !1, ge(r);
    }
  };
}
function $r(n) {
  return n === "" ? Number.NaN : +n;
}
function xr(n, e, t) {
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
  let i = ce(e, l);
  const r = Ge(Re());
  let s = () => {
  };
  function a(I) {
    return I === s;
  }
  let { use: o = [] } = e, { class: u = "" } = e, { type: c = "text" } = e, { placeholder: f = " " } = e, { value: d = s } = e;
  const g = a(d);
  g && (d = "");
  let { files: p = null } = e, { dirty: h = !1 } = e, { invalid: b = !1 } = e, { updateInvalid: S = !0 } = e, { emptyValueNull: A = d === null } = e;
  g && A && (d = null);
  let { emptyValueUndefined: R = d === void 0 } = e;
  g && R && (d = void 0);
  let _, F = {}, v = {};
  Be(() => {
    S && t(14, b = _.matches(":invalid"));
  });
  function m(I) {
    if (c === "file") {
      t(12, p = I.currentTarget.files);
      return;
    }
    if (I.currentTarget.value === "" && A) {
      t(11, d = null);
      return;
    }
    if (I.currentTarget.value === "" && R) {
      t(11, d = void 0);
      return;
    }
    switch (c) {
      case "number":
      case "range":
        t(11, d = $r(I.currentTarget.value));
        break;
      default:
        t(11, d = I.currentTarget.value);
        break;
    }
  }
  function E(I) {
    (c === "file" || c === "range") && m(I), t(13, h = !0), S && t(14, b = _.matches(":invalid"));
  }
  function B(I) {
    var N;
    return I in F ? (N = F[I]) !== null && N !== void 0 ? N : null : Y().getAttribute(I);
  }
  function G(I, N) {
    F[I] !== N && t(6, F[I] = N, F);
  }
  function k(I) {
    (!(I in F) || F[I] != null) && t(6, F[I] = void 0, F);
  }
  function O() {
    Y().focus();
  }
  function P() {
    Y().blur();
  }
  function Y() {
    return _;
  }
  function ye(I) {
    Ut.call(this, n, I);
  }
  function ke(I) {
    Ut.call(this, n, I);
  }
  function ve(I) {
    ne[I ? "unshift" : "push"](() => {
      _ = I, t(5, _);
    });
  }
  const z = (I) => c !== "file" && m(I);
  return n.$$set = (I) => {
    e = j(j({}, e), Me(I)), t(10, i = ce(e, l)), "use" in I && t(0, o = I.use), "class" in I && t(1, u = I.class), "type" in I && t(2, c = I.type), "placeholder" in I && t(3, f = I.placeholder), "value" in I && t(11, d = I.value), "files" in I && t(12, p = I.files), "dirty" in I && t(13, h = I.dirty), "invalid" in I && t(14, b = I.invalid), "updateInvalid" in I && t(15, S = I.updateInvalid), "emptyValueNull" in I && t(16, A = I.emptyValueNull), "emptyValueUndefined" in I && t(17, R = I.emptyValueUndefined);
  }, n.$$.update = () => {
    n.$$.dirty & /*type, valueProp, value*/
    2068 && (c === "file" ? (delete v.value, t(4, v), t(2, c), t(11, d)) : t(4, v.value = d ?? "", v));
  }, [
    o,
    u,
    c,
    f,
    v,
    _,
    F,
    r,
    m,
    E,
    i,
    d,
    p,
    h,
    b,
    S,
    A,
    R,
    B,
    G,
    k,
    O,
    P,
    Y,
    ye,
    ke,
    ve,
    z
  ];
}
class es extends te {
  constructor(e) {
    super(), ee(this, e, xr, Jr, Q, {
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
function ts(n) {
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
      e = U("textarea"), ie(e, o);
    },
    m(u, c) {
      M(u, e, c), e.autofocus && e.focus(), n[21](e), gn(
        e,
        /*value*/
        n[0]
      ), r || (s = [
        $(i = Se.call(
          null,
          e,
          /*use*/
          n[1]
        )),
        $(
          /*forwardEvents*/
          n[7].call(null, e)
        ),
        K(
          e,
          "change",
          /*changeHandler*/
          n[8]
        ),
        K(
          e,
          "blur",
          /*blur_handler*/
          n[19]
        ),
        K(
          e,
          "focus",
          /*focus_handler*/
          n[20]
        ),
        K(
          e,
          "input",
          /*textarea_input_handler*/
          n[22]
        )
      ], r = !0);
    },
    p(u, [c]) {
      ie(e, o = ue(a, [
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
      ])), i && he(i.update) && c & /*use*/
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
    i: J,
    o: J,
    d(u) {
      u && D(e), n[21](null), r = !1, ge(s);
    }
  };
}
function ns(n, e, t) {
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
  let i = ce(e, l);
  const r = Ge(Re());
  let { use: s = [] } = e, { class: a = "" } = e, { style: o = "" } = e, { value: u = "" } = e, { dirty: c = !1 } = e, { invalid: f = !1 } = e, { updateInvalid: d = !0 } = e, { resizable: g = !0 } = e, p, h = {};
  Be(() => {
    d && t(11, f = p.matches(":invalid"));
  });
  function b() {
    t(10, c = !0), d && t(11, f = p.matches(":invalid"));
  }
  function S(k) {
    var O;
    return k in h ? (O = h[k]) !== null && O !== void 0 ? O : null : v().getAttribute(k);
  }
  function A(k, O) {
    h[k] !== O && t(6, h[k] = O, h);
  }
  function R(k) {
    (!(k in h) || h[k] != null) && t(6, h[k] = void 0, h);
  }
  function _() {
    v().focus();
  }
  function F() {
    v().blur();
  }
  function v() {
    return p;
  }
  function m(k) {
    Ut.call(this, n, k);
  }
  function E(k) {
    Ut.call(this, n, k);
  }
  function B(k) {
    ne[k ? "unshift" : "push"](() => {
      p = k, t(5, p);
    });
  }
  function G() {
    u = this.value, t(0, u);
  }
  return n.$$set = (k) => {
    e = j(j({}, e), Me(k)), t(9, i = ce(e, l)), "use" in k && t(1, s = k.use), "class" in k && t(2, a = k.class), "style" in k && t(3, o = k.style), "value" in k && t(0, u = k.value), "dirty" in k && t(10, c = k.dirty), "invalid" in k && t(11, f = k.invalid), "updateInvalid" in k && t(12, d = k.updateInvalid), "resizable" in k && t(4, g = k.resizable);
  }, [
    u,
    s,
    a,
    o,
    g,
    p,
    h,
    r,
    b,
    i,
    c,
    f,
    d,
    S,
    A,
    R,
    _,
    F,
    v,
    m,
    E,
    B,
    G
  ];
}
class ls extends te {
  constructor(e) {
    super(), ee(this, e, ns, ts, Q, {
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
const is = (n) => ({}), Pn = (n) => ({}), rs = (n) => ({}), Dn = (n) => ({}), ss = (n) => ({}), Hn = (n) => ({}), as = (n) => ({}), Mn = (n) => ({}), os = (n) => ({}), Tn = (n) => ({}), us = (n) => ({}), Fn = (n) => ({}), cs = (n) => ({}), Gn = (n) => ({}), fs = (n) => ({}), Un = (n) => ({}), ds = (n) => ({}), On = (n) => ({}), gs = (n) => ({}), Wn = (n) => ({}), ms = (n) => ({}), Bn = (n) => ({}), hs = (n) => ({}), Nn = (n) => ({});
function ps(n) {
  let e, t, l, i, r, s, a, o, u, c, f, d, g, p;
  const h = (
    /*#slots*/
    n[56].label
  ), b = re(
    h,
    n,
    /*$$scope*/
    n[87],
    Tn
  );
  l = new Wt({
    props: {
      key: "SMUI:textfield:icon:leading",
      value: !0,
      $$slots: { default: [bs] },
      $$scope: { ctx: n }
    }
  });
  const S = (
    /*#slots*/
    n[56].default
  ), A = re(
    S,
    n,
    /*$$scope*/
    n[87],
    null
  );
  s = new Wt({
    props: {
      key: "SMUI:textfield:icon:leading",
      value: !1,
      $$slots: { default: [vs] },
      $$scope: { ctx: n }
    }
  });
  const R = (
    /*#slots*/
    n[56].ripple
  ), _ = re(
    R,
    n,
    /*$$scope*/
    n[87],
    Dn
  );
  let F = [
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
      ).map($n).concat([
        /*style*/
        n[10]
      ]).join(" ")
    },
    mt(
      /*$$restProps*/
      n[46],
      ["input$", "label$", "ripple$", "outline$", "helperLine$"]
    )
  ], v = {};
  for (let m = 0; m < F.length; m += 1)
    v = j(v, F[m]);
  return {
    c() {
      e = U("div"), b && b.c(), t = W(), V(l.$$.fragment), i = W(), A && A.c(), r = W(), V(s.$$.fragment), a = W(), _ && _.c(), ie(e, v);
    },
    m(m, E) {
      M(m, e, E), b && b.m(e, null), T(e, t), Z(l, e, null), T(e, i), A && A.m(e, null), T(e, r), Z(s, e, null), T(e, a), _ && _.m(e, null), n[82](e), d = !0, g || (p = [
        $(c = yt.call(null, e, {
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
        $(f = Se.call(
          null,
          e,
          /*use*/
          n[8]
        )),
        $(
          /*forwardEvents*/
          n[34].call(null, e)
        ),
        K(
          e,
          "SMUITextfieldLeadingIcon:mount",
          /*handleLeadingIconMount*/
          n[38]
        ),
        K(
          e,
          "SMUITextfieldLeadingIcon:unmount",
          /*SMUITextfieldLeadingIcon_unmount_handler_1*/
          n[83]
        ),
        K(
          e,
          "SMUITextfieldTrailingIcon:mount",
          /*handleTrailingIconMount*/
          n[39]
        ),
        K(
          e,
          "SMUITextfieldTrailingIcon:unmount",
          /*SMUITextfieldTrailingIcon_unmount_handler_1*/
          n[84]
        )
      ], g = !0);
    },
    p(m, E) {
      b && b.p && (!d || E[2] & /*$$scope*/
      33554432) && ae(
        b,
        h,
        m,
        /*$$scope*/
        m[87],
        d ? se(
          h,
          /*$$scope*/
          m[87],
          E,
          os
        ) : oe(
          /*$$scope*/
          m[87]
        ),
        Tn
      );
      const B = {};
      E[2] & /*$$scope*/
      33554432 && (B.$$scope = { dirty: E, ctx: m }), l.$set(B), A && A.p && (!d || E[2] & /*$$scope*/
      33554432) && ae(
        A,
        S,
        m,
        /*$$scope*/
        m[87],
        d ? se(
          S,
          /*$$scope*/
          m[87],
          E,
          null
        ) : oe(
          /*$$scope*/
          m[87]
        ),
        null
      );
      const G = {};
      E[2] & /*$$scope*/
      33554432 && (G.$$scope = { dirty: E, ctx: m }), s.$set(G), _ && _.p && (!d || E[2] & /*$$scope*/
      33554432) && ae(
        _,
        R,
        m,
        /*$$scope*/
        m[87],
        d ? se(
          R,
          /*$$scope*/
          m[87],
          E,
          rs
        ) : oe(
          /*$$scope*/
          m[87]
        ),
        Dn
      ), ie(e, v = ue(F, [
        (!d || E[0] & /*className, disabled, textarea, variant, noLabel, invalid, internalClasses*/
        33673730 | E[1] & /*$$slots*/
        65536 && o !== (o = x({
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
        (!d || E[0] & /*internalStyles, style*/
        67109888 && u !== (u = Object.entries(
          /*internalStyles*/
          m[26]
        ).map($n).concat([
          /*style*/
          m[10]
        ]).join(" "))) && { style: u },
        E[1] & /*$$restProps*/
        32768 && mt(
          /*$$restProps*/
          m[46],
          ["input$", "label$", "ripple$", "outline$", "helperLine$"]
        )
      ])), c && he(c.update) && E[0] & /*ripple*/
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
      }), f && he(f.update) && E[0] & /*use*/
      256 && f.update.call(
        null,
        /*use*/
        m[8]
      );
    },
    i(m) {
      d || (C(b, m), C(l.$$.fragment, m), C(A, m), C(s.$$.fragment, m), C(_, m), d = !0);
    },
    o(m) {
      L(b, m), L(l.$$.fragment, m), L(A, m), L(s.$$.fragment, m), L(_, m), d = !1;
    },
    d(m) {
      m && D(e), b && b.d(m), q(l), A && A.d(m), q(s), _ && _.d(m), n[82](null), g = !1, ge(p);
    }
  };
}
function _s(n) {
  let e, t, l, i, r, s, a, o, u, c, f, d, g, p, h, b, S, A, R = !/*textarea*/
  n[14] && /*variant*/
  n[15] !== "outlined" && Zn(n), _ = (
    /*textarea*/
    (n[14] || /*variant*/
    n[15] === "outlined") && jn(n)
  );
  i = new Wt({
    props: {
      key: "SMUI:textfield:icon:leading",
      value: !0,
      $$slots: { default: [ys] },
      $$scope: { ctx: n }
    }
  });
  const F = (
    /*#slots*/
    n[56].default
  ), v = re(
    F,
    n,
    /*$$scope*/
    n[87],
    null
  ), m = [ws, ks], E = [];
  function B(P, Y) {
    return (
      /*textarea*/
      P[14] && typeof /*value*/
      P[0] == "string" ? 0 : 1
    );
  }
  a = B(n), o = E[a] = m[a](n), c = new Wt({
    props: {
      key: "SMUI:textfield:icon:leading",
      value: !1,
      $$slots: { default: [Rs] },
      $$scope: { ctx: n }
    }
  });
  let G = !/*textarea*/
  n[14] && /*variant*/
  n[15] !== "outlined" && /*ripple*/
  n[11] && Kn(n), k = [
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
      ).map(Jn).concat([
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
    mt(
      /*$$restProps*/
      n[46],
      ["input$", "label$", "ripple$", "outline$", "helperLine$"]
    )
  ], O = {};
  for (let P = 0; P < k.length; P += 1)
    O = j(O, k[P]);
  return {
    c() {
      e = U("label"), R && R.c(), t = W(), _ && _.c(), l = W(), V(i.$$.fragment), r = W(), v && v.c(), s = W(), o.c(), u = W(), V(c.$$.fragment), f = W(), G && G.c(), ie(e, O);
    },
    m(P, Y) {
      M(P, e, Y), R && R.m(e, null), T(e, t), _ && _.m(e, null), T(e, l), Z(i, e, null), T(e, r), v && v.m(e, null), T(e, s), E[a].m(e, null), T(e, u), Z(c, e, null), T(e, f), G && G.m(e, null), n[78](e), b = !0, S || (A = [
        $(p = yt.call(null, e, {
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
        $(h = Se.call(
          null,
          e,
          /*use*/
          n[8]
        )),
        $(
          /*forwardEvents*/
          n[34].call(null, e)
        ),
        K(
          e,
          "SMUITextfieldLeadingIcon:mount",
          /*handleLeadingIconMount*/
          n[38]
        ),
        K(
          e,
          "SMUITextfieldLeadingIcon:unmount",
          /*SMUITextfieldLeadingIcon_unmount_handler*/
          n[79]
        ),
        K(
          e,
          "SMUITextfieldTrailingIcon:mount",
          /*handleTrailingIconMount*/
          n[39]
        ),
        K(
          e,
          "SMUITextfieldTrailingIcon:unmount",
          /*SMUITextfieldTrailingIcon_unmount_handler*/
          n[80]
        ),
        K(
          e,
          "SMUITextfieldCharacterCounter:mount",
          /*handleCharacterCounterMount*/
          n[40]
        ),
        K(
          e,
          "SMUITextfieldCharacterCounter:unmount",
          /*SMUITextfieldCharacterCounter_unmount_handler*/
          n[81]
        )
      ], S = !0);
    },
    p(P, Y) {
      !/*textarea*/
      P[14] && /*variant*/
      P[15] !== "outlined" ? R ? (R.p(P, Y), Y[0] & /*textarea, variant*/
      49152 && C(R, 1)) : (R = Zn(P), R.c(), C(R, 1), R.m(e, t)) : R && (fe(), L(R, 1, 1, () => {
        R = null;
      }), de()), /*textarea*/
      P[14] || /*variant*/
      P[15] === "outlined" ? _ ? (_.p(P, Y), Y[0] & /*textarea, variant*/
      49152 && C(_, 1)) : (_ = jn(P), _.c(), C(_, 1), _.m(e, l)) : _ && (fe(), L(_, 1, 1, () => {
        _ = null;
      }), de());
      const ye = {};
      Y[2] & /*$$scope*/
      33554432 && (ye.$$scope = { dirty: Y, ctx: P }), i.$set(ye), v && v.p && (!b || Y[2] & /*$$scope*/
      33554432) && ae(
        v,
        F,
        P,
        /*$$scope*/
        P[87],
        b ? se(
          F,
          /*$$scope*/
          P[87],
          Y,
          null
        ) : oe(
          /*$$scope*/
          P[87]
        ),
        null
      );
      let ke = a;
      a = B(P), a === ke ? E[a].p(P, Y) : (fe(), L(E[ke], 1, 1, () => {
        E[ke] = null;
      }), de(), o = E[a], o ? o.p(P, Y) : (o = E[a] = m[a](P), o.c()), C(o, 1), o.m(e, u));
      const ve = {};
      Y[2] & /*$$scope*/
      33554432 && (ve.$$scope = { dirty: Y, ctx: P }), c.$set(ve), !/*textarea*/
      P[14] && /*variant*/
      P[15] !== "outlined" && /*ripple*/
      P[11] ? G ? (G.p(P, Y), Y[0] & /*textarea, variant, ripple*/
      51200 && C(G, 1)) : (G = Kn(P), G.c(), C(G, 1), G.m(e, null)) : G && (fe(), L(G, 1, 1, () => {
        G = null;
      }), de()), ie(e, O = ue(k, [
        (!b || Y[0] & /*className, disabled, textarea, variant, noLabel, label, focused, value, withLeadingIcon, withTrailingIcon, invalid, internalClasses*/
        314823171 | Y[1] & /*$$slots*/
        65536 && d !== (d = x({
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
        (!b || Y[0] & /*internalStyles, style*/
        67109888 && g !== (g = Object.entries(
          /*internalStyles*/
          P[26]
        ).map(Jn).concat([
          /*style*/
          P[10]
        ]).join(" "))) && { style: g },
        {
          for: (
            /* suppress a11y warning, since this is wrapped */
            void 0
          )
        },
        Y[1] & /*$$restProps*/
        32768 && mt(
          /*$$restProps*/
          P[46],
          ["input$", "label$", "ripple$", "outline$", "helperLine$"]
        )
      ])), p && he(p.update) && Y[0] & /*textarea, variant*/
      49152 | Y[1] & /*inputElement*/
      4 && p.update.call(null, {
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
      }), h && he(h.update) && Y[0] & /*use*/
      256 && h.update.call(
        null,
        /*use*/
        P[8]
      );
    },
    i(P) {
      b || (C(R), C(_), C(i.$$.fragment, P), C(v, P), C(o), C(c.$$.fragment, P), C(G), b = !0);
    },
    o(P) {
      L(R), L(_), L(i.$$.fragment, P), L(v, P), L(o), L(c.$$.fragment, P), L(G), b = !1;
    },
    d(P) {
      P && D(e), R && R.d(), _ && _.d(), q(i), v && v.d(P), E[a].d(), q(c), G && G.d(), n[78](null), S = !1, ge(A);
    }
  };
}
function bs(n) {
  let e;
  const t = (
    /*#slots*/
    n[56].leadingIcon
  ), l = re(
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
      33554432) && ae(
        l,
        t,
        i,
        /*$$scope*/
        i[87],
        e ? se(
          t,
          /*$$scope*/
          i[87],
          r,
          as
        ) : oe(
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
      L(l, i), e = !1;
    },
    d(i) {
      l && l.d(i);
    }
  };
}
function vs(n) {
  let e;
  const t = (
    /*#slots*/
    n[56].trailingIcon
  ), l = re(
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
      33554432) && ae(
        l,
        t,
        i,
        /*$$scope*/
        i[87],
        e ? se(
          t,
          /*$$scope*/
          i[87],
          r,
          ss
        ) : oe(
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
      L(l, i), e = !1;
    },
    d(i) {
      l && l.d(i);
    }
  };
}
function Zn(n) {
  let e, t, l, i = (
    /*variant*/
    n[15] === "filled" && qn()
  ), r = !/*noLabel*/
  n[16] && /*label*/
  (n[17] != null || /*$$slots*/
  n[47].label) && Vn(n);
  return {
    c() {
      i && i.c(), e = W(), r && r.c(), t = Ie();
    },
    m(s, a) {
      i && i.m(s, a), M(s, e, a), r && r.m(s, a), M(s, t, a), l = !0;
    },
    p(s, a) {
      /*variant*/
      s[15] === "filled" ? i || (i = qn(), i.c(), i.m(e.parentNode, e)) : i && (i.d(1), i = null), !/*noLabel*/
      s[16] && /*label*/
      (s[17] != null || /*$$slots*/
      s[47].label) ? r ? (r.p(s, a), a[0] & /*noLabel, label*/
      196608 | a[1] & /*$$slots*/
      65536 && C(r, 1)) : (r = Vn(s), r.c(), C(r, 1), r.m(t.parentNode, t)) : r && (fe(), L(r, 1, 1, () => {
        r = null;
      }), de());
    },
    i(s) {
      l || (C(r), l = !0);
    },
    o(s) {
      L(r), l = !1;
    },
    d(s) {
      s && (D(e), D(t)), i && i.d(s), r && r.d(s);
    }
  };
}
function qn(n) {
  let e;
  return {
    c() {
      e = U("span"), w(e, "class", "mdc-text-field__ripple");
    },
    m(t, l) {
      M(t, e, l);
    },
    d(t) {
      t && D(e);
    }
  };
}
function Vn(n) {
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
    Pe(
      /*$$restProps*/
      n[46],
      "label$"
    )
  ];
  let i = {
    $$slots: { default: [Cs] },
    $$scope: { ctx: n }
  };
  for (let r = 0; r < l.length; r += 1)
    i = j(i, l[r]);
  return e = new Kl({ props: i }), n[57](e), {
    c() {
      V(e.$$.fragment);
    },
    m(r, s) {
      Z(e, r, s), t = !0;
    },
    p(r, s) {
      const a = s[0] & /*focused, value, required*/
      268443649 | s[1] & /*$$restProps*/
      32768 ? ue(l, [
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
        32768 && Le(Pe(
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
      L(e.$$.fragment, r), t = !1;
    },
    d(r) {
      n[57](null), q(e, r);
    }
  };
}
function Cs(n) {
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
  ), r = re(
    i,
    n,
    /*$$scope*/
    n[87],
    Nn
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
      )) + "") && be(t, e), r && r.p && (!l || a[2] & /*$$scope*/
      33554432) && ae(
        r,
        i,
        s,
        /*$$scope*/
        s[87],
        l ? se(
          i,
          /*$$scope*/
          s[87],
          a,
          hs
        ) : oe(
          /*$$scope*/
          s[87]
        ),
        Nn
      );
    },
    i(s) {
      l || (C(r, s), l = !0);
    },
    o(s) {
      L(r, s), l = !1;
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
    Pe(
      /*$$restProps*/
      n[46],
      "outline$"
    )
  ];
  let i = {
    $$slots: { default: [As] },
    $$scope: { ctx: n }
  };
  for (let r = 0; r < l.length; r += 1)
    i = j(i, l[r]);
  return e = new qr({ props: i }), n[59](e), {
    c() {
      V(e.$$.fragment);
    },
    m(r, s) {
      Z(e, r, s), t = !0;
    },
    p(r, s) {
      const a = s[0] & /*noLabel, label*/
      196608 | s[1] & /*$$slots, $$restProps*/
      98304 ? ue(l, [
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
        32768 && Le(Pe(
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
      L(e.$$.fragment, r), t = !1;
    },
    d(r) {
      n[59](null), q(e, r);
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
    Pe(
      /*$$restProps*/
      n[46],
      "label$"
    )
  ];
  let i = {
    $$slots: { default: [Is] },
    $$scope: { ctx: n }
  };
  for (let r = 0; r < l.length; r += 1)
    i = j(i, l[r]);
  return e = new Kl({ props: i }), n[58](e), {
    c() {
      V(e.$$.fragment);
    },
    m(r, s) {
      Z(e, r, s), t = !0;
    },
    p(r, s) {
      const a = s[0] & /*focused, value, required*/
      268443649 | s[1] & /*$$restProps*/
      32768 ? ue(l, [
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
        32768 && Le(Pe(
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
      L(e.$$.fragment, r), t = !1;
    },
    d(r) {
      n[58](null), q(e, r);
    }
  };
}
function Is(n) {
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
  ), r = re(
    i,
    n,
    /*$$scope*/
    n[87],
    Bn
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
      )) + "") && be(t, e), r && r.p && (!l || a[2] & /*$$scope*/
      33554432) && ae(
        r,
        i,
        s,
        /*$$scope*/
        s[87],
        l ? se(
          i,
          /*$$scope*/
          s[87],
          a,
          ms
        ) : oe(
          /*$$scope*/
          s[87]
        ),
        Bn
      );
    },
    i(s) {
      l || (C(r, s), l = !0);
    },
    o(s) {
      L(r, s), l = !1;
    },
    d(s) {
      s && D(t), r && r.d(s);
    }
  };
}
function As(n) {
  let e, t, l = !/*noLabel*/
  n[16] && /*label*/
  (n[17] != null || /*$$slots*/
  n[47].label) && zn(n);
  return {
    c() {
      l && l.c(), e = Ie();
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
      65536 && C(l, 1)) : (l = zn(i), l.c(), C(l, 1), l.m(e.parentNode, e)) : l && (fe(), L(l, 1, 1, () => {
        l = null;
      }), de());
    },
    i(i) {
      t || (C(l), t = !0);
    },
    o(i) {
      L(l), t = !1;
    },
    d(i) {
      i && D(e), l && l.d(i);
    }
  };
}
function ys(n) {
  let e;
  const t = (
    /*#slots*/
    n[56].leadingIcon
  ), l = re(
    t,
    n,
    /*$$scope*/
    n[87],
    Wn
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
      33554432) && ae(
        l,
        t,
        i,
        /*$$scope*/
        i[87],
        e ? se(
          t,
          /*$$scope*/
          i[87],
          r,
          gs
        ) : oe(
          /*$$scope*/
          i[87]
        ),
        Wn
      );
    },
    i(i) {
      e || (C(l, i), e = !0);
    },
    o(i) {
      L(l, i), e = !1;
    },
    d(i) {
      l && l.d(i);
    }
  };
}
function ks(n) {
  let e, t, l, i, r, s, a, o, u, c;
  const f = (
    /*#slots*/
    n[56].prefix
  ), d = re(
    f,
    n,
    /*$$scope*/
    n[87],
    Un
  );
  let g = (
    /*prefix*/
    n[20] != null && Xn(n)
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
    Pe(
      /*$$restProps*/
      n[46],
      "input$"
    )
  ];
  function h(m) {
    n[69](m);
  }
  function b(m) {
    n[70](m);
  }
  function S(m) {
    n[71](m);
  }
  function A(m) {
    n[72](m);
  }
  let R = {};
  for (let m = 0; m < p.length; m += 1)
    R = j(R, p[m]);
  /*value*/
  n[0] !== void 0 && (R.value = /*value*/
  n[0]), /*files*/
  n[3] !== void 0 && (R.files = /*files*/
  n[3]), /*dirty*/
  n[4] !== void 0 && (R.dirty = /*dirty*/
  n[4]), /*invalid*/
  n[1] !== void 0 && (R.invalid = /*invalid*/
  n[1]), l = new es({ props: R }), n[68](l), ne.push(() => Je(l, "value", h)), ne.push(() => Je(l, "files", b)), ne.push(() => Je(l, "dirty", S)), ne.push(() => Je(l, "invalid", A)), l.$on(
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
  let _ = (
    /*suffix*/
    n[21] != null && Yn(n)
  );
  const F = (
    /*#slots*/
    n[56].suffix
  ), v = re(
    F,
    n,
    /*$$scope*/
    n[87],
    Gn
  );
  return {
    c() {
      d && d.c(), e = W(), g && g.c(), t = W(), V(l.$$.fragment), o = W(), _ && _.c(), u = W(), v && v.c();
    },
    m(m, E) {
      d && d.m(m, E), M(m, e, E), g && g.m(m, E), M(m, t, E), Z(l, m, E), M(m, o, E), _ && _.m(m, E), M(m, u, E), v && v.m(m, E), c = !0;
    },
    p(m, E) {
      d && d.p && (!c || E[2] & /*$$scope*/
      33554432) && ae(
        d,
        f,
        m,
        /*$$scope*/
        m[87],
        c ? se(
          f,
          /*$$scope*/
          m[87],
          E,
          fs
        ) : oe(
          /*$$scope*/
          m[87]
        ),
        Un
      ), /*prefix*/
      m[20] != null ? g ? (g.p(m, E), E[0] & /*prefix*/
      1048576 && C(g, 1)) : (g = Xn(m), g.c(), C(g, 1), g.m(t.parentNode, t)) : g && (fe(), L(g, 1, 1, () => {
        g = null;
      }), de());
      const B = E[0] & /*type, disabled, required, updateInvalid, helperId, noLabel, label*/
      135213056 | E[1] & /*$$restProps*/
      32768 ? ue(p, [
        E[0] & /*type*/
        262144 && { type: (
          /*type*/
          m[18]
        ) },
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
        E[0] & /*noLabel, label*/
        196608 && Le(
          /*noLabel*/
          m[16] && /*label*/
          m[17] != null ? { placeholder: (
            /*label*/
            m[17]
          ) } : {}
        ),
        E[1] & /*$$restProps*/
        32768 && Le(Pe(
          /*$$restProps*/
          m[46],
          "input$"
        ))
      ]) : {};
      !i && E[0] & /*value*/
      1 && (i = !0, B.value = /*value*/
      m[0], Qe(() => i = !1)), !r && E[0] & /*files*/
      8 && (r = !0, B.files = /*files*/
      m[3], Qe(() => r = !1)), !s && E[0] & /*dirty*/
      16 && (s = !0, B.dirty = /*dirty*/
      m[4], Qe(() => s = !1)), !a && E[0] & /*invalid*/
      2 && (a = !0, B.invalid = /*invalid*/
      m[1], Qe(() => a = !1)), l.$set(B), /*suffix*/
      m[21] != null ? _ ? (_.p(m, E), E[0] & /*suffix*/
      2097152 && C(_, 1)) : (_ = Yn(m), _.c(), C(_, 1), _.m(u.parentNode, u)) : _ && (fe(), L(_, 1, 1, () => {
        _ = null;
      }), de()), v && v.p && (!c || E[2] & /*$$scope*/
      33554432) && ae(
        v,
        F,
        m,
        /*$$scope*/
        m[87],
        c ? se(
          F,
          /*$$scope*/
          m[87],
          E,
          cs
        ) : oe(
          /*$$scope*/
          m[87]
        ),
        Gn
      );
    },
    i(m) {
      c || (C(d, m), C(g), C(l.$$.fragment, m), C(_), C(v, m), c = !0);
    },
    o(m) {
      L(d, m), L(g), L(l.$$.fragment, m), L(_), L(v, m), c = !1;
    },
    d(m) {
      m && (D(e), D(t), D(o), D(u)), d && d.d(m), g && g.d(m), n[68](null), q(l, m), _ && _.d(m), v && v.d(m);
    }
  };
}
function ws(n) {
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
    Pe(
      /*$$restProps*/
      n[46],
      "input$"
    )
  ];
  function c(b) {
    n[61](b);
  }
  function f(b) {
    n[62](b);
  }
  function d(b) {
    n[63](b);
  }
  let g = {};
  for (let b = 0; b < u.length; b += 1)
    g = j(g, u[b]);
  /*value*/
  n[0] !== void 0 && (g.value = /*value*/
  n[0]), /*dirty*/
  n[4] !== void 0 && (g.dirty = /*dirty*/
  n[4]), /*invalid*/
  n[1] !== void 0 && (g.invalid = /*invalid*/
  n[1]), t = new ls({ props: g }), n[60](t), ne.push(() => Je(t, "value", c)), ne.push(() => Je(t, "dirty", f)), ne.push(() => Je(t, "invalid", d)), t.$on(
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
  ), h = re(
    p,
    n,
    /*$$scope*/
    n[87],
    On
  );
  return {
    c() {
      e = U("span"), V(t.$$.fragment), s = W(), h && h.c(), w(e, "class", a = x({
        "mdc-text-field__resizer": !("input$resizable" in /*$$restProps*/
        n[46]) || /*$$restProps*/
        n[46].input$resizable
      }));
    },
    m(b, S) {
      M(b, e, S), Z(t, e, null), T(e, s), h && h.m(e, null), o = !0;
    },
    p(b, S) {
      const A = S[0] & /*disabled, required, updateInvalid, helperId*/
      134754304 | S[1] & /*$$restProps*/
      32768 ? ue(u, [
        S[0] & /*disabled*/
        4096 && { disabled: (
          /*disabled*/
          b[12]
        ) },
        S[0] & /*required*/
        8192 && { required: (
          /*required*/
          b[13]
        ) },
        S[0] & /*updateInvalid*/
        524288 && { updateInvalid: (
          /*updateInvalid*/
          b[19]
        ) },
        S[0] & /*helperId*/
        134217728 && { "aria-controls": (
          /*helperId*/
          b[27]
        ) },
        S[0] & /*helperId*/
        134217728 && { "aria-describedby": (
          /*helperId*/
          b[27]
        ) },
        S[1] & /*$$restProps*/
        32768 && Le(Pe(
          /*$$restProps*/
          b[46],
          "input$"
        ))
      ]) : {};
      !l && S[0] & /*value*/
      1 && (l = !0, A.value = /*value*/
      b[0], Qe(() => l = !1)), !i && S[0] & /*dirty*/
      16 && (i = !0, A.dirty = /*dirty*/
      b[4], Qe(() => i = !1)), !r && S[0] & /*invalid*/
      2 && (r = !0, A.invalid = /*invalid*/
      b[1], Qe(() => r = !1)), t.$set(A), h && h.p && (!o || S[2] & /*$$scope*/
      33554432) && ae(
        h,
        p,
        b,
        /*$$scope*/
        b[87],
        o ? se(
          p,
          /*$$scope*/
          b[87],
          S,
          ds
        ) : oe(
          /*$$scope*/
          b[87]
        ),
        On
      ), (!o || S[1] & /*$$restProps*/
      32768 && a !== (a = x({
        "mdc-text-field__resizer": !("input$resizable" in /*$$restProps*/
        b[46]) || /*$$restProps*/
        b[46].input$resizable
      }))) && w(e, "class", a);
    },
    i(b) {
      o || (C(t.$$.fragment, b), C(h, b), o = !0);
    },
    o(b) {
      L(t.$$.fragment, b), L(h, b), o = !1;
    },
    d(b) {
      b && D(e), n[60](null), q(t), h && h.d(b);
    }
  };
}
function Xn(n) {
  let e, t;
  return e = new Kr({
    props: {
      $$slots: { default: [Ls] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      V(e.$$.fragment);
    },
    m(l, i) {
      Z(e, l, i), t = !0;
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
      L(e.$$.fragment, l), t = !1;
    },
    d(l) {
      q(e, l);
    }
  };
}
function Ls(n) {
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
      1048576 && be(
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
  return e = new Qr({
    props: {
      $$slots: { default: [Ss] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      V(e.$$.fragment);
    },
    m(l, i) {
      Z(e, l, i), t = !0;
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
      L(e.$$.fragment, l), t = !1;
    },
    d(l) {
      q(e, l);
    }
  };
}
function Ss(n) {
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
      2097152 && be(
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
function Rs(n) {
  let e;
  const t = (
    /*#slots*/
    n[56].trailingIcon
  ), l = re(
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
      33554432) && ae(
        l,
        t,
        i,
        /*$$scope*/
        i[87],
        e ? se(
          t,
          /*$$scope*/
          i[87],
          r,
          us
        ) : oe(
          /*$$scope*/
          i[87]
        ),
        Fn
      );
    },
    i(i) {
      e || (C(l, i), e = !0);
    },
    o(i) {
      L(l, i), e = !1;
    },
    d(i) {
      l && l.d(i);
    }
  };
}
function Kn(n) {
  let e, t;
  const l = [Pe(
    /*$$restProps*/
    n[46],
    "ripple$"
  )];
  let i = {};
  for (let r = 0; r < l.length; r += 1)
    i = j(i, l[r]);
  return e = new Br({ props: i }), n[77](e), {
    c() {
      V(e.$$.fragment);
    },
    m(r, s) {
      Z(e, r, s), t = !0;
    },
    p(r, s) {
      const a = s[1] & /*$$restProps*/
      32768 ? ue(l, [Le(Pe(
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
      L(e.$$.fragment, r), t = !1;
    },
    d(r) {
      n[77](null), q(e, r);
    }
  };
}
function Qn(n) {
  let e, t;
  const l = [Pe(
    /*$$restProps*/
    n[46],
    "helperLine$"
  )];
  let i = {
    $$slots: { default: [Es] },
    $$scope: { ctx: n }
  };
  for (let r = 0; r < l.length; r += 1)
    i = j(i, l[r]);
  return e = new Yr({ props: i }), e.$on(
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
      V(e.$$.fragment);
    },
    m(r, s) {
      Z(e, r, s), t = !0;
    },
    p(r, s) {
      const a = s[1] & /*$$restProps*/
      32768 ? ue(l, [Le(Pe(
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
      L(e.$$.fragment, r), t = !1;
    },
    d(r) {
      q(e, r);
    }
  };
}
function Es(n) {
  let e;
  const t = (
    /*#slots*/
    n[56].helper
  ), l = re(
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
      33554432) && ae(
        l,
        t,
        i,
        /*$$scope*/
        i[87],
        e ? se(
          t,
          /*$$scope*/
          i[87],
          r,
          is
        ) : oe(
          /*$$scope*/
          i[87]
        ),
        Pn
      );
    },
    i(i) {
      e || (C(l, i), e = !0);
    },
    o(i) {
      L(l, i), e = !1;
    },
    d(i) {
      l && l.d(i);
    }
  };
}
function Ps(n) {
  let e, t, l, i, r;
  const s = [_s, ps], a = [];
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
      t.c(), l = W(), u && u.c(), i = Ie();
    },
    m(c, f) {
      a[e].m(c, f), M(c, l, f), u && u.m(c, f), M(c, i, f), r = !0;
    },
    p(c, f) {
      t.p(c, f), /*$$slots*/
      c[47].helper ? u ? (u.p(c, f), f[1] & /*$$slots*/
      65536 && C(u, 1)) : (u = Qn(c), u.c(), C(u, 1), u.m(i.parentNode, i)) : u && (fe(), L(u, 1, 1, () => {
        u = null;
      }), de());
    },
    i(c) {
      r || (C(t), C(u), r = !0);
    },
    o(c) {
      L(t), L(u), r = !1;
    },
    d(c) {
      c && (D(l), D(i)), a[e].d(c), u && u.d(c);
    }
  };
}
const Jn = ([n, e]) => `${n}: ${e};`, $n = ([n, e]) => `${n}: ${e};`;
function Ds(n, e, t) {
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
  let r = ce(e, i), { $$slots: s = {}, $$scope: a } = e;
  const o = an(s), { applyPassive: u } = zl, c = Ge(Re());
  let f = () => {
  };
  function d(y) {
    return y === f;
  }
  let { use: g = [] } = e, { class: p = "" } = e, { style: h = "" } = e, { ripple: b = !0 } = e, { disabled: S = !1 } = e, { required: A = !1 } = e, { textarea: R = !1 } = e, { variant: _ = R ? "outlined" : "standard" } = e, { noLabel: F = !1 } = e, { label: v = void 0 } = e, { type: m = "text" } = e, { value: E = r.input$emptyValueUndefined ? void 0 : f } = e, { files: B = f } = e;
  const G = !d(E) || !d(B);
  d(E) && (E = void 0), d(B) && (B = null);
  let { invalid: k = f } = e, { updateInvalid: O = d(k) } = e;
  d(k) && (k = !1);
  let { dirty: P = !1 } = e, { prefix: Y = void 0 } = e, { suffix: ye = void 0 } = e, { validateOnValueChange: ke = O } = e, { useNativeValidation: ve = O } = e, { withLeadingIcon: z = f } = e, { withTrailingIcon: I = f } = e, { input: N = void 0 } = e, { floatingLabel: pe = void 0 } = e, { lineRipple: Ae = void 0 } = e, { notchedOutline: Oe = void 0 } = e, Ne, me, Ze = {}, Ke = {}, xe, et = !1, St = Ue("SMUI:addLayoutListener"), bt, vt, qe = new Promise((y) => vt = y), tt, nt, at, lt, Ct = E;
  St && (bt = St(un)), Be(() => {
    if (t(54, me = new Mr(
      {
        // getRootAdapterMethods_
        addClass: Et,
        removeClass: Pt,
        hasClass: It,
        registerTextFieldInteractionHandler: (y, we) => Dt().addEventListener(y, we),
        deregisterTextFieldInteractionHandler: (y, we) => Dt().removeEventListener(y, we),
        registerValidationAttributeChangeHandler: (y) => {
          const we = (jt) => jt.map((zt) => zt.attributeName).filter((zt) => zt), cn = new MutationObserver((jt) => {
            ve && y(we(jt));
          }), Mi = { attributes: !0 };
          return N && cn.observe(N.getElement(), Mi), cn;
        },
        deregisterValidationAttributeChangeHandler: (y) => {
          y.disconnect();
        },
        // getInputAdapterMethods_
        getNativeInput: () => {
          var y;
          return (y = N == null ? void 0 : N.getElement()) !== null && y !== void 0 ? y : null;
        },
        setInputAttr: (y, we) => {
          N == null || N.addAttr(y, we);
        },
        removeInputAttr: (y) => {
          N == null || N.removeAttr(y);
        },
        isFocused: () => document.activeElement === (N == null ? void 0 : N.getElement()),
        registerInputInteractionHandler: (y, we) => {
          N == null || N.getElement().addEventListener(y, we, u());
        },
        deregisterInputInteractionHandler: (y, we) => {
          N == null || N.getElement().removeEventListener(y, we, u());
        },
        // getLabelAdapterMethods_
        floatLabel: (y) => pe && pe.float(y),
        getLabelWidth: () => pe ? pe.getWidth() : 0,
        hasLabel: () => !!pe,
        shakeLabel: (y) => pe && pe.shake(y),
        setLabelRequired: (y) => pe && pe.setRequired(y),
        // getLineRippleAdapterMethods_
        activateLineRipple: () => Ae && Ae.activate(),
        deactivateLineRipple: () => Ae && Ae.deactivate(),
        setLineRippleTransformOrigin: (y) => Ae && Ae.setRippleCenter(y),
        // getOutlineAdapterMethods_
        closeOutline: () => Oe && Oe.closeNotch(),
        hasOutline: () => !!Oe,
        notchOutline: (y) => Oe && Oe.notch(y)
      },
      {
        get helperText() {
          return at;
        },
        get characterCounter() {
          return lt;
        },
        get leadingIcon() {
          return tt;
        },
        get trailingIcon() {
          return nt;
        }
      }
    )), G) {
      if (N == null)
        throw new Error("SMUI Textfield must be initialized with either a non-undefined initial value or an Input component.");
      me.init();
    } else
      Vi().then(() => {
        if (N == null)
          throw new Error("SMUI Textfield must be initialized with either a non-undefined initial value or an Input component.");
        me.init();
      });
    return vt(), () => {
      me.destroy();
    };
  }), Bt(() => {
    bt && bt();
  });
  function Vt(y) {
    t(29, tt = y.detail);
  }
  function H(y) {
    t(30, nt = y.detail);
  }
  function X(y) {
    t(32, lt = y.detail);
  }
  function Ee(y) {
    t(27, xe = y.detail);
  }
  function Rt(y) {
    t(31, at = y.detail);
  }
  function It(y) {
    var we;
    return y in Ze ? (we = Ze[y]) !== null && we !== void 0 ? we : null : Dt().classList.contains(y);
  }
  function Et(y) {
    Ze[y] || t(25, Ze[y] = !0, Ze);
  }
  function Pt(y) {
    (!(y in Ze) || Ze[y]) && t(25, Ze[y] = !1, Ze);
  }
  function ei(y, we) {
    Ke[y] != we && (we === "" || we == null ? (delete Ke[y], t(26, Ke)) : t(26, Ke[y] = we, Ke));
  }
  function ti() {
    N == null || N.focus();
  }
  function ni() {
    N == null || N.blur();
  }
  function un() {
    if (me) {
      const y = me.shouldFloat;
      me.notchOutline(y);
    }
  }
  function Dt() {
    return Ne;
  }
  function li(y) {
    ne[y ? "unshift" : "push"](() => {
      pe = y, t(5, pe);
    });
  }
  function ii(y) {
    ne[y ? "unshift" : "push"](() => {
      pe = y, t(5, pe);
    });
  }
  function ri(y) {
    ne[y ? "unshift" : "push"](() => {
      Oe = y, t(7, Oe);
    });
  }
  function si(y) {
    ne[y ? "unshift" : "push"](() => {
      N = y, t(2, N);
    });
  }
  function ai(y) {
    E = y, t(0, E);
  }
  function oi(y) {
    P = y, t(4, P);
  }
  function ui(y) {
    k = y, t(1, k), t(54, me), t(19, O);
  }
  const ci = () => t(28, et = !1), fi = () => t(28, et = !0), di = (y) => _e(Ne, "blur", y), gi = (y) => _e(Ne, "focus", y);
  function mi(y) {
    ne[y ? "unshift" : "push"](() => {
      N = y, t(2, N);
    });
  }
  function hi(y) {
    E = y, t(0, E);
  }
  function pi(y) {
    B = y, t(3, B);
  }
  function _i(y) {
    P = y, t(4, P);
  }
  function bi(y) {
    k = y, t(1, k), t(54, me), t(19, O);
  }
  const vi = () => t(28, et = !1), Ci = () => t(28, et = !0), Ii = (y) => _e(Ne, "blur", y), Ai = (y) => _e(Ne, "focus", y);
  function yi(y) {
    ne[y ? "unshift" : "push"](() => {
      Ae = y, t(6, Ae);
    });
  }
  function ki(y) {
    ne[y ? "unshift" : "push"](() => {
      Ne = y, t(24, Ne);
    });
  }
  const wi = () => t(29, tt = void 0), Li = () => t(30, nt = void 0), Si = () => t(32, lt = void 0);
  function Ri(y) {
    ne[y ? "unshift" : "push"](() => {
      Ne = y, t(24, Ne);
    });
  }
  const Ei = () => t(29, tt = void 0), Pi = () => t(30, nt = void 0), Di = () => {
    t(27, xe = void 0), t(31, at = void 0);
  }, Hi = () => t(32, lt = void 0);
  return n.$$set = (y) => {
    e = j(j({}, e), Me(y)), t(46, r = ce(e, i)), "use" in y && t(8, g = y.use), "class" in y && t(9, p = y.class), "style" in y && t(10, h = y.style), "ripple" in y && t(11, b = y.ripple), "disabled" in y && t(12, S = y.disabled), "required" in y && t(13, A = y.required), "textarea" in y && t(14, R = y.textarea), "variant" in y && t(15, _ = y.variant), "noLabel" in y && t(16, F = y.noLabel), "label" in y && t(17, v = y.label), "type" in y && t(18, m = y.type), "value" in y && t(0, E = y.value), "files" in y && t(3, B = y.files), "invalid" in y && t(1, k = y.invalid), "updateInvalid" in y && t(19, O = y.updateInvalid), "dirty" in y && t(4, P = y.dirty), "prefix" in y && t(20, Y = y.prefix), "suffix" in y && t(21, ye = y.suffix), "validateOnValueChange" in y && t(48, ke = y.validateOnValueChange), "useNativeValidation" in y && t(49, ve = y.useNativeValidation), "withLeadingIcon" in y && t(22, z = y.withLeadingIcon), "withTrailingIcon" in y && t(23, I = y.withTrailingIcon), "input" in y && t(2, N = y.input), "floatingLabel" in y && t(5, pe = y.floatingLabel), "lineRipple" in y && t(6, Ae = y.lineRipple), "notchedOutline" in y && t(7, Oe = y.notchedOutline), "$$scope" in y && t(87, a = y.$$scope);
  }, n.$$.update = () => {
    if (n.$$.dirty[0] & /*input*/
    4 && t(33, l = N && N.getElement()), n.$$.dirty[0] & /*invalid, updateInvalid*/
    524290 | n.$$.dirty[1] & /*instance*/
    8388608 && me && me.isValid() !== !k && (O ? t(1, k = !me.isValid()) : me.setValid(!k)), n.$$.dirty[1] & /*instance, validateOnValueChange*/
    8519680 && me && me.getValidateOnValueChange() !== ke && me.setValidateOnValueChange(d(ke) ? !1 : ke), n.$$.dirty[1] & /*instance, useNativeValidation*/
    8650752 && me && me.setUseNativeValidation(d(ve) ? !0 : ve), n.$$.dirty[0] & /*disabled*/
    4096 | n.$$.dirty[1] & /*instance*/
    8388608 && me && me.setDisabled(S), n.$$.dirty[0] & /*value*/
    1 | n.$$.dirty[1] & /*instance, previousValue*/
    25165824 && me && G && Ct !== E) {
      t(55, Ct = E);
      const y = `${E}`;
      me.getValue() !== y && me.setValue(y);
    }
  }, [
    E,
    k,
    N,
    B,
    P,
    pe,
    Ae,
    Oe,
    g,
    p,
    h,
    b,
    S,
    A,
    R,
    _,
    F,
    v,
    m,
    O,
    Y,
    ye,
    z,
    I,
    Ne,
    Ze,
    Ke,
    xe,
    et,
    tt,
    nt,
    at,
    lt,
    l,
    c,
    d,
    G,
    qe,
    Vt,
    H,
    X,
    Ee,
    Rt,
    Et,
    Pt,
    ei,
    r,
    o,
    ke,
    ve,
    ti,
    ni,
    un,
    Dt,
    me,
    Ct,
    s,
    li,
    ii,
    ri,
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
    _i,
    bi,
    vi,
    Ci,
    Ii,
    Ai,
    yi,
    ki,
    wi,
    Li,
    Si,
    Ri,
    Ei,
    Pi,
    Di,
    Hi,
    a
  ];
}
class Hs extends te {
  constructor(e) {
    super(), ee(
      this,
      e,
      Ds,
      Ps,
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
function Ms(n) {
  let e, t, l, i, r, s;
  const a = (
    /*#slots*/
    n[8].default
  ), o = re(
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
      e = U("span"), o && o.c(), ie(e, c);
    },
    m(f, d) {
      M(f, e, d), o && o.m(e, null), n[9](e), i = !0, r || (s = [
        $(l = Se.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        $(
          /*forwardEvents*/
          n[3].call(null, e)
        )
      ], r = !0);
    },
    p(f, [d]) {
      o && o.p && (!i || d & /*$$scope*/
      128) && ae(
        o,
        a,
        f,
        /*$$scope*/
        f[7],
        i ? se(
          a,
          /*$$scope*/
          f[7],
          d,
          null
        ) : oe(
          /*$$scope*/
          f[7]
        ),
        null
      ), ie(e, c = ue(u, [
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
      ])), l && he(l.update) && d & /*use*/
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
      L(o, f), i = !1;
    },
    d(f) {
      f && D(e), o && o.d(f), n[9](null), r = !1, ge(s);
    }
  };
}
function Ts(n, e, t) {
  const l = ["use", "class", "getElement"];
  let i = ce(e, l), { $$slots: r = {}, $$scope: s } = e;
  const a = Ge(Re());
  let { use: o = [] } = e, { class: u = "" } = e, c, f = Ue("SMUI:list:graphic:menu-selection-group");
  function d() {
    return c;
  }
  function g(p) {
    ne[p ? "unshift" : "push"](() => {
      c = p, t(2, c);
    });
  }
  return n.$$set = (p) => {
    e = j(j({}, e), Me(p)), t(5, i = ce(e, l)), "use" in p && t(0, o = p.use), "class" in p && t(1, u = p.class), "$$scope" in p && t(7, s = p.$$scope);
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
class Fs extends te {
  constructor(e) {
    super(), ee(this, e, Ts, Ms, Q, { use: 0, class: 1, getElement: 6 });
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
  component: Fs
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
function Gs(n) {
  let e, t;
  const l = (
    /*#slots*/
    n[1].default
  ), i = re(
    l,
    n,
    /*$$scope*/
    n[0],
    null
  );
  return {
    c() {
      e = U("span"), i && i.c(), w(e, "class", "oscd-icon");
    },
    m(r, s) {
      M(r, e, s), i && i.m(e, null), t = !0;
    },
    p(r, [s]) {
      i && i.p && (!t || s & /*$$scope*/
      1) && ae(
        i,
        l,
        r,
        /*$$scope*/
        r[0],
        t ? se(
          l,
          /*$$scope*/
          r[0],
          s,
          null
        ) : oe(
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
      L(i, r), t = !1;
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
class Zt extends te {
  constructor(e) {
    super(), ee(this, e, Us, Gs, Q, {});
  }
}
function Os(n) {
  let e, t;
  return {
    c() {
      e = Fe("svg"), t = Fe("path"), w(t, "d", "M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z"), w(e, "xmlns", "http://www.w3.org/2000/svg"), w(e, "viewBox", "0 -960 960 960"), w(
        e,
        "style",
        /*svgStyles*/
        n[0]
      );
    },
    m(l, i) {
      M(l, e, i), T(e, t);
    },
    p(l, i) {
      i & /*svgStyles*/
      1 && w(
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
function Ws(n) {
  let e, t;
  return e = new Zt({
    props: {
      $$slots: { default: [Os] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      V(e.$$.fragment);
    },
    m(l, i) {
      Z(e, l, i), t = !0;
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
      L(e.$$.fragment, l), t = !1;
    },
    d(l) {
      q(e, l);
    }
  };
}
function Bs(n, e, t) {
  let { svgStyles: l = "" } = e;
  return n.$$set = (i) => {
    "svgStyles" in i && t(0, l = i.svgStyles);
  }, [l];
}
class Ns extends te {
  constructor(e) {
    super(), ee(this, e, Bs, Ws, Q, { svgStyles: 0 });
  }
}
function Zs(n) {
  let e, t;
  return {
    c() {
      e = Fe("svg"), t = Fe("path"), w(t, "d", "M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"), w(e, "xmlns", "http://www.w3.org/2000/svg"), w(e, "viewBox", "0 -960 960 960"), w(e, "width", "24"), w(e, "height", "24"), w(e, "fill", "#004552");
    },
    m(l, i) {
      M(l, e, i), T(e, t);
    },
    p: J,
    i: J,
    o: J,
    d(l) {
      l && D(e);
    }
  };
}
class qs extends te {
  constructor(e) {
    super(), ee(this, e, null, Zs, Q, {});
  }
}
function Vs(n) {
  let e, t;
  return {
    c() {
      e = Fe("svg"), t = Fe("path"), w(t, "d", "M480-280q17 0 28.5-11.5T520-320q0-17-11.5-28.5T480-360q-17 0-28.5 11.5T440-320q0 17 11.5 28.5T480-280Zm-40-160h80v-240h-80v240Zm40 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"), w(e, "xmlns", "http://www.w3.org/2000/svg"), w(e, "height", "24px"), w(e, "viewBox", "0 -960 960 960"), w(e, "width", "24px"), w(e, "fill", "#004552");
    },
    m(l, i) {
      M(l, e, i), T(e, t);
    },
    p: J,
    i: J,
    o: J,
    d(l) {
      l && D(e);
    }
  };
}
class js extends te {
  constructor(e) {
    super(), ee(this, e, null, Vs, Q, {});
  }
}
function zs(n) {
  let e, t;
  return {
    c() {
      e = Fe("svg"), t = Fe("path"), w(t, "d", "m40-120 440-760 440 760H40Zm138-80h604L480-720 178-200Zm302-40q17 0 28.5-11.5T520-280q0-17-11.5-28.5T480-320q-17 0-28.5 11.5T440-280q0 17 11.5 28.5T480-240Zm-40-120h80v-200h-80v200Zm40-100Z"), w(e, "xmlns", "http://www.w3.org/2000/svg"), w(e, "height", "24px"), w(e, "viewBox", "0 -960 960 960"), w(e, "width", "24px"), w(e, "fill", "#004552");
    },
    m(l, i) {
      M(l, e, i), T(e, t);
    },
    p: J,
    i: J,
    o: J,
    d(l) {
      l && D(e);
    }
  };
}
class Xs extends te {
  constructor(e) {
    super(), ee(this, e, null, zs, Q, {});
  }
}
function Ys(n) {
  let e, t;
  return {
    c() {
      e = Fe("svg"), t = Fe("path"), w(t, "d", "m380-300 280-180-280-180v360ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"), w(e, "xmlns", "http://www.w3.org/2000/svg"), w(e, "viewBox", "0 -960 960 960"), w(
        e,
        "style",
        /*svgStyles*/
        n[0]
      );
    },
    m(l, i) {
      M(l, e, i), T(e, t);
    },
    p(l, i) {
      i & /*svgStyles*/
      1 && w(
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
function Ks(n) {
  let e, t;
  return e = new Zt({
    props: {
      $$slots: { default: [Ys] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      V(e.$$.fragment);
    },
    m(l, i) {
      Z(e, l, i), t = !0;
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
      L(e.$$.fragment, l), t = !1;
    },
    d(l) {
      q(e, l);
    }
  };
}
function Qs(n, e, t) {
  let { svgStyles: l = "" } = e;
  return n.$$set = (i) => {
    "svgStyles" in i && t(0, l = i.svgStyles);
  }, [l];
}
class Js extends te {
  constructor(e) {
    super(), ee(this, e, Qs, Ks, Q, { svgStyles: 0 });
  }
}
function $s(n) {
  let e, t;
  return {
    c() {
      e = Fe("svg"), t = Fe("path"), w(t, "d", "M440-280h80v-240h-80v240Zm40-320q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0 520q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"), w(e, "xmlns", "http://www.w3.org/2000/svg"), w(e, "viewBox", "0 -960 960 960"), w(
        e,
        "style",
        /*svgStyles*/
        n[0]
      );
    },
    m(l, i) {
      M(l, e, i), T(e, t);
    },
    p(l, i) {
      i & /*svgStyles*/
      1 && w(
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
function xs(n) {
  let e, t;
  return e = new Zt({
    props: {
      $$slots: { default: [$s] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      V(e.$$.fragment);
    },
    m(l, i) {
      Z(e, l, i), t = !0;
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
      L(e.$$.fragment, l), t = !1;
    },
    d(l) {
      q(e, l);
    }
  };
}
function ea(n, e, t) {
  let { svgStyles: l = "" } = e;
  return n.$$set = (i) => {
    "svgStyles" in i && t(0, l = i.svgStyles);
  }, [l];
}
class ta extends te {
  constructor(e) {
    super(), ee(this, e, ea, xs, Q, { svgStyles: 0 });
  }
}
function na(n) {
  let e, t;
  return {
    c() {
      e = Fe("svg"), t = Fe("path"), w(t, "d", "M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z"), w(e, "xmlns", "http://www.w3.org/2000/svg"), w(e, "height", "24px"), w(e, "viewBox", "0 -960 960 960"), w(e, "width", "24px"), w(e, "fill", "#e3e3e3");
    },
    m(l, i) {
      M(l, e, i), T(e, t);
    },
    p: J,
    d(l) {
      l && D(e);
    }
  };
}
function la(n) {
  let e, t;
  return e = new Zt({
    props: {
      $$slots: { default: [na] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      V(e.$$.fragment);
    },
    m(l, i) {
      Z(e, l, i), t = !0;
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
      L(e.$$.fragment, l), t = !1;
    },
    d(l) {
      q(e, l);
    }
  };
}
function ia(n, e, t) {
  let { svgStyles: l = "" } = e;
  return n.$$set = (i) => {
    "svgStyles" in i && t(0, l = i.svgStyles);
  }, [l];
}
class ra extends te {
  constructor(e) {
    super(), ee(this, e, ia, la, Q, { svgStyles: 0 });
  }
}
function xn(n) {
  let e, t, l;
  return {
    c() {
      e = U("span"), t = le(
        /*content*/
        n[0]
      ), w(
        e,
        "id",
        /*id*/
        n[2]
      ), w(e, "role", "tooltip"), w(e, "class", l = "bubble " + /*side*/
      n[1] + " svelte-h101gz");
    },
    m(i, r) {
      M(i, e, r), T(e, t);
    },
    p(i, r) {
      r & /*content*/
      1 && be(
        t,
        /*content*/
        i[0]
      ), r & /*side*/
      2 && l !== (l = "bubble " + /*side*/
      i[1] + " svelte-h101gz") && w(e, "class", l);
    },
    d(i) {
      i && D(e);
    }
  };
}
function sa(n) {
  let e, t, l, i;
  const r = (
    /*#slots*/
    n[4].default
  ), s = re(
    r,
    n,
    /*$$scope*/
    n[3],
    null
  );
  let a = (
    /*content*/
    n[0] && xn(n)
  );
  return {
    c() {
      e = U("span"), s && s.c(), t = W(), a && a.c(), w(e, "class", "tt svelte-h101gz"), w(e, "tabindex", "0"), w(e, "aria-describedby", l = /*content*/
      n[0] ? (
        /*id*/
        n[2]
      ) : void 0);
    },
    m(o, u) {
      M(o, e, u), s && s.m(e, null), T(e, t), a && a.m(e, null), i = !0;
    },
    p(o, [u]) {
      s && s.p && (!i || u & /*$$scope*/
      8) && ae(
        s,
        r,
        o,
        /*$$scope*/
        o[3],
        i ? se(
          r,
          /*$$scope*/
          o[3],
          u,
          null
        ) : oe(
          /*$$scope*/
          o[3]
        ),
        null
      ), /*content*/
      o[0] ? a ? a.p(o, u) : (a = xn(o), a.c(), a.m(e, null)) : a && (a.d(1), a = null), (!i || u & /*content*/
      1 && l !== (l = /*content*/
      o[0] ? (
        /*id*/
        o[2]
      ) : void 0)) && w(e, "aria-describedby", l);
    },
    i(o) {
      i || (C(s, o), i = !0);
    },
    o(o) {
      L(s, o), i = !1;
    },
    d(o) {
      o && D(e), s && s.d(o), a && a.d();
    }
  };
}
function aa(n, e, t) {
  let { $$slots: l = {}, $$scope: i } = e, { content: r = "" } = e, { side: s = "top" } = e;
  const a = `tt-${Math.random().toString(36).slice(2)}`;
  return n.$$set = (o) => {
    "content" in o && t(0, r = o.content), "side" in o && t(1, s = o.side), "$$scope" in o && t(3, i = o.$$scope);
  }, [r, s, a, i, l];
}
class oa extends te {
  constructor(e) {
    super(), ee(this, e, aa, sa, Q, { content: 0, side: 1 });
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
var Xe = {
  HEADER_CELL_SORTED: "mdc-data-table__header-cell--sorted",
  HEADER_CELL_SORTED_DESCENDING: "mdc-data-table__header-cell--sorted-descending",
  IN_PROGRESS: "mdc-data-table--in-progress",
  ROW_SELECTED: "mdc-data-table__row--selected"
}, el = {
  ARIA_SELECTED: "aria-selected",
  ARIA_SORT: "aria-sort"
}, rt = {
  ARIA_SELECTED: el.ARIA_SELECTED,
  ARIA_SORT: el.ARIA_SORT
}, We;
(function(n) {
  n.ASCENDING = "ascending", n.DESCENDING = "descending", n.NONE = "none", n.OTHER = "other";
})(We || (We = {}));
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
var ua = (
  /** @class */
  function(n) {
    pt(e, n);
    function e(t) {
      return n.call(this, Te(Te({}, e.defaultAdapter), t)) || this;
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
        return Ji(this, function(t) {
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
        s !== i && (this.adapter.removeClassNameByHeaderCellIndex(s, Xe.HEADER_CELL_SORTED), this.adapter.removeClassNameByHeaderCellIndex(s, Xe.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(s, rt.ARIA_SORT, We.NONE), this.adapter.setSortStatusLabelByHeaderCellIndex(s, We.NONE));
      this.adapter.setClassNameByHeaderCellIndex(i, Xe.HEADER_CELL_SORTED);
      var a = this.adapter.getAttributeByHeaderCellIndex(i, rt.ARIA_SORT), o = We.NONE;
      a === We.ASCENDING ? (this.adapter.setClassNameByHeaderCellIndex(i, Xe.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(i, rt.ARIA_SORT, We.DESCENDING), o = We.DESCENDING) : a === We.DESCENDING ? (this.adapter.removeClassNameByHeaderCellIndex(i, Xe.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(i, rt.ARIA_SORT, We.ASCENDING), o = We.ASCENDING) : (this.adapter.setAttributeByHeaderCellIndex(i, rt.ARIA_SORT, We.ASCENDING), o = We.ASCENDING), this.adapter.setSortStatusLabelByHeaderCellIndex(i, o), this.adapter.notifySortAction({
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
      }), this.adapter.addClass(Xe.IN_PROGRESS);
    }, e.prototype.hideProgress = function() {
      this.adapter.removeClass(Xe.IN_PROGRESS);
    }, e.prototype.setHeaderRowCheckboxState = function() {
      this.adapter.getSelectedRowCount() === 0 ? (this.adapter.setHeaderRowCheckboxChecked(!1), this.adapter.setHeaderRowCheckboxIndeterminate(!1)) : this.adapter.getSelectedRowCount() === this.adapter.getRowCount() ? (this.adapter.setHeaderRowCheckboxChecked(!0), this.adapter.setHeaderRowCheckboxIndeterminate(!1)) : (this.adapter.setHeaderRowCheckboxIndeterminate(!0), this.adapter.setHeaderRowCheckboxChecked(!1));
    }, e.prototype.selectRowAtIndex = function(t, l) {
      l ? (this.adapter.addClassAtRowIndex(t, Xe.ROW_SELECTED), this.adapter.setAttributeAtRowIndex(t, rt.ARIA_SELECTED, "true")) : (this.adapter.removeClassAtRowIndex(t, Xe.ROW_SELECTED), this.adapter.setAttributeAtRowIndex(t, rt.ARIA_SELECTED, "false"));
    }, e;
  }(_t)
);
const ca = (n) => ({}), tl = (n) => ({}), fa = (n) => ({}), nl = (n) => ({});
function ll(n) {
  let e, t, l, i, r;
  const s = (
    /*#slots*/
    n[36].progress
  ), a = re(
    s,
    n,
    /*$$scope*/
    n[35],
    nl
  );
  return {
    c() {
      e = U("div"), t = U("div"), l = W(), a && a.c(), w(t, "class", "mdc-data-table__scrim"), w(e, "class", "mdc-data-table__progress-indicator"), w(e, "style", i = Object.entries(
        /*progressIndicatorStyles*/
        n[13]
      ).map(il).join(" "));
    },
    m(o, u) {
      M(o, e, u), T(e, t), T(e, l), a && a.m(e, null), r = !0;
    },
    p(o, u) {
      a && a.p && (!r || u[1] & /*$$scope*/
      16) && ae(
        a,
        s,
        o,
        /*$$scope*/
        o[35],
        r ? se(
          s,
          /*$$scope*/
          o[35],
          u,
          fa
        ) : oe(
          /*$$scope*/
          o[35]
        ),
        nl
      ), (!r || u[0] & /*progressIndicatorStyles*/
      8192 && i !== (i = Object.entries(
        /*progressIndicatorStyles*/
        o[13]
      ).map(il).join(" "))) && w(e, "style", i);
    },
    i(o) {
      r || (C(a, o), r = !0);
    },
    o(o) {
      L(a, o), r = !1;
    },
    d(o) {
      o && D(e), a && a.d(o);
    }
  };
}
function da(n) {
  let e, t, l, i, r, s, a, o, u, c, f, d, g, p;
  const h = (
    /*#slots*/
    n[36].default
  ), b = re(
    h,
    n,
    /*$$scope*/
    n[35],
    null
  );
  let S = [
    {
      class: i = x({
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
  ], A = {};
  for (let G = 0; G < S.length; G += 1)
    A = j(A, S[G]);
  let R = [
    {
      class: s = x({
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
  ], _ = {};
  for (let G = 0; G < R.length; G += 1)
    _ = j(_, R[G]);
  let F = (
    /*$$slots*/
    n[24].progress && ll(n)
  );
  const v = (
    /*#slots*/
    n[36].paginate
  ), m = re(
    v,
    n,
    /*$$scope*/
    n[35],
    tl
  );
  let E = [
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
    mt(
      /*$$restProps*/
      n[25],
      ["container$", "table$"]
    )
  ], B = {};
  for (let G = 0; G < E.length; G += 1)
    B = j(B, E[G]);
  return {
    c() {
      e = U("div"), t = U("div"), l = U("table"), b && b.c(), o = W(), F && F.c(), u = W(), m && m.c(), ie(l, A), ie(t, _), ie(e, B);
    },
    m(G, k) {
      M(G, e, k), T(e, t), T(t, l), b && b.m(l, null), n[37](t), T(e, o), F && F.m(e, null), T(e, u), m && m.m(e, null), n[38](e), d = !0, g || (p = [
        $(r = Se.call(
          null,
          l,
          /*table$use*/
          n[5]
        )),
        $(a = Se.call(
          null,
          t,
          /*container$use*/
          n[3]
        )),
        $(f = Se.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        $(
          /*forwardEvents*/
          n[15].call(null, e)
        ),
        K(
          e,
          "SMUICheckbox:mount",
          /*SMUICheckbox_mount_handler*/
          n[39]
        ),
        K(
          e,
          "SMUIDataTableHeader:mount",
          /*handleHeaderMount*/
          n[19]
        ),
        K(
          e,
          "SMUIDataTableHeader:unmount",
          /*SMUIDataTableHeader_unmount_handler*/
          n[40]
        ),
        K(
          e,
          "SMUIDataTableBody:mount",
          /*handleBodyMount*/
          n[20]
        ),
        K(
          e,
          "SMUIDataTableBody:unmount",
          /*SMUIDataTableBody_unmount_handler*/
          n[41]
        ),
        K(
          e,
          "SMUIDataTableHeaderCheckbox:change",
          /*SMUIDataTableHeaderCheckbox_change_handler*/
          n[42]
        ),
        K(
          e,
          "SMUIDataTableHeader:click",
          /*handleHeaderRowClick*/
          n[22]
        ),
        K(
          e,
          "SMUIDataTableRow:click",
          /*handleRowClick*/
          n[23]
        ),
        K(
          e,
          "SMUIDataTableBodyCheckbox:change",
          /*handleBodyCheckboxChange*/
          n[21]
        )
      ], g = !0);
    },
    p(G, k) {
      b && b.p && (!d || k[1] & /*$$scope*/
      16) && ae(
        b,
        h,
        G,
        /*$$scope*/
        G[35],
        d ? se(
          h,
          /*$$scope*/
          G[35],
          k,
          null
        ) : oe(
          /*$$scope*/
          G[35]
        ),
        null
      ), ie(l, A = ue(S, [
        (!d || k[0] & /*table$class*/
        64 && i !== (i = x({
          [
            /*table$class*/
            G[6]
          ]: !0,
          "mdc-data-table__table": !0
        }))) && { class: i },
        k[0] & /*$$restProps*/
        33554432 && Pe(
          /*$$restProps*/
          G[25],
          "table$"
        )
      ])), r && he(r.update) && k[0] & /*table$use*/
      32 && r.update.call(
        null,
        /*table$use*/
        G[5]
      ), ie(t, _ = ue(R, [
        (!d || k[0] & /*container$class*/
        16 && s !== (s = x({
          [
            /*container$class*/
            G[4]
          ]: !0,
          "mdc-data-table__table-container": !0
        }))) && { class: s },
        k[0] & /*$$restProps*/
        33554432 && Pe(
          /*$$restProps*/
          G[25],
          "container$"
        )
      ])), a && he(a.update) && k[0] & /*container$use*/
      8 && a.update.call(
        null,
        /*container$use*/
        G[3]
      ), /*$$slots*/
      G[24].progress ? F ? (F.p(G, k), k[0] & /*$$slots*/
      16777216 && C(F, 1)) : (F = ll(G), F.c(), C(F, 1), F.m(e, u)) : F && (fe(), L(F, 1, 1, () => {
        F = null;
      }), de()), m && m.p && (!d || k[1] & /*$$scope*/
      16) && ae(
        m,
        v,
        G,
        /*$$scope*/
        G[35],
        d ? se(
          v,
          /*$$scope*/
          G[35],
          k,
          ca
        ) : oe(
          /*$$scope*/
          G[35]
        ),
        tl
      ), ie(e, B = ue(E, [
        (!d || k[0] & /*className, stickyHeader, internalClasses*/
        4102 && c !== (c = x({
          [
            /*className*/
            G[1]
          ]: !0,
          "mdc-data-table": !0,
          "mdc-data-table--sticky-header": (
            /*stickyHeader*/
            G[2]
          ),
          .../*internalClasses*/
          G[12]
        }))) && { class: c },
        k[0] & /*$$restProps*/
        33554432 && mt(
          /*$$restProps*/
          G[25],
          ["container$", "table$"]
        )
      ])), f && he(f.update) && k[0] & /*use*/
      1 && f.update.call(
        null,
        /*use*/
        G[0]
      );
    },
    i(G) {
      d || (C(b, G), C(F), C(m, G), d = !0);
    },
    o(G) {
      L(b, G), L(F), L(m, G), d = !1;
    },
    d(G) {
      G && D(e), b && b.d(G), n[37](null), F && F.d(), m && m.d(G), n[38](null), g = !1, ge(p);
    }
  };
}
const il = ([n, e]) => `${n}: ${e};`;
function ga(n, e, t) {
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
  let i = ce(e, l), r, s, a, { $$slots: o = {}, $$scope: u } = e;
  const c = an(o), { closest: f } = Yl, d = Ge(Re());
  let { use: g = [] } = e, { class: p = "" } = e, { stickyHeader: h = !1 } = e, { sortable: b = !1 } = e, { sort: S = null } = e, { sortDirection: A = "ascending" } = e, { sortAscendingAriaLabel: R = "sorted, ascending" } = e, { sortDescendingAriaLabel: _ = "sorted, descending" } = e, { container$use: F = [] } = e, { container$class: v = "" } = e, { table$use: m = [] } = e, { table$class: E = "" } = e, B, G, k, O, P, Y = {}, ye = { height: "auto", top: "initial" }, ke = Ue("SMUI:addLayoutListener"), ve, z = !1, I = kt(!1);
  ft(n, I, (H) => t(34, r = H));
  let N = kt(S);
  ft(n, N, (H) => t(45, a = H));
  let pe = kt(A);
  ft(n, pe, (H) => t(44, s = H)), De("SMUI:checkbox:context", "data-table"), De("SMUI:linear-progress:context", "data-table"), De("SMUI:linear-progress:closed", I), De("SMUI:data-table:sortable", b), De("SMUI:data-table:sort", N), De("SMUI:data-table:sortDirection", pe), De("SMUI:data-table:sortAscendingAriaLabel", R), De("SMUI:data-table:sortDescendingAriaLabel", _), ke && (ve = ke(vt));
  let Ae;
  Be(() => (t(7, G = new ua({
    addClass: Ze,
    removeClass: Ke,
    getHeaderCellElements: () => {
      var H;
      return (H = O == null ? void 0 : O.cells.map((X) => X.element)) !== null && H !== void 0 ? H : [];
    },
    getHeaderCellCount: () => {
      var H;
      return (H = O == null ? void 0 : O.cells.length) !== null && H !== void 0 ? H : 0;
    },
    getAttributeByHeaderCellIndex: (H, X) => {
      var Ee;
      return (Ee = O == null ? void 0 : O.orderedCells[H].getAttr(X)) !== null && Ee !== void 0 ? Ee : null;
    },
    setAttributeByHeaderCellIndex: (H, X, Ee) => {
      O == null || O.orderedCells[H].addAttr(X, Ee);
    },
    setClassNameByHeaderCellIndex: (H, X) => {
      O == null || O.orderedCells[H].addClass(X);
    },
    removeClassNameByHeaderCellIndex: (H, X) => {
      O == null || O.orderedCells[H].removeClass(X);
    },
    notifySortAction: (H) => {
      t(26, S = H.columnId), t(27, A = H.sortValue), _e(qe(), "SMUIDataTable:sorted", H, void 0, !0);
    },
    getTableContainerHeight: () => k.getBoundingClientRect().height,
    getTableHeaderHeight: () => {
      const H = qe().querySelector(".mdc-data-table__header-row");
      if (!H)
        throw new Error("MDCDataTable: Table header element not found.");
      return H.getBoundingClientRect().height;
    },
    setProgressIndicatorStyles: (H) => {
      t(13, ye = H);
    },
    addClassAtRowIndex: (H, X) => {
      P == null || P.orderedRows[H].addClass(X);
    },
    getRowCount: () => {
      var H;
      return (H = P == null ? void 0 : P.rows.length) !== null && H !== void 0 ? H : 0;
    },
    getRowElements: () => {
      var H;
      return (H = P == null ? void 0 : P.rows.map((X) => X.element)) !== null && H !== void 0 ? H : [];
    },
    getRowIdAtIndex: (H) => {
      var X;
      return (X = P == null ? void 0 : P.orderedRows[H].rowId) !== null && X !== void 0 ? X : null;
    },
    getRowIndexByChildElement: (H) => {
      var X;
      return (X = P == null ? void 0 : P.orderedRows.map((Ee) => Ee.element).indexOf(f(H, ".mdc-data-table__row"))) !== null && X !== void 0 ? X : -1;
    },
    getSelectedRowCount: () => {
      var H;
      return (H = P == null ? void 0 : P.rows.filter((X) => X.selected).length) !== null && H !== void 0 ? H : 0;
    },
    isCheckboxAtRowIndexChecked: (H) => {
      const X = P == null ? void 0 : P.orderedRows[H].checkbox;
      return X ? X.checked : !1;
    },
    isHeaderRowCheckboxChecked: () => {
      const H = O == null ? void 0 : O.checkbox;
      return H ? H.checked : !1;
    },
    isRowsSelectable: () => !!qe().querySelector(".mdc-data-table__row-checkbox") || !!qe().querySelector(".mdc-data-table__header-row-checkbox"),
    notifyRowSelectionChanged: (H) => {
      const X = P == null ? void 0 : P.orderedRows[H.rowIndex];
      X && _e(
        qe(),
        "SMUIDataTable:rowSelectionChanged",
        {
          row: X.element,
          rowId: X.rowId,
          rowIndex: H.rowIndex,
          selected: H.selected
        },
        void 0,
        !0
      );
    },
    notifySelectedAll: () => {
      xe(!1), _e(qe(), "SMUIDataTable:selectedAll", void 0, void 0, !0);
    },
    notifyUnselectedAll: () => {
      xe(!1), _e(qe(), "SMUIDataTable:unselectedAll", void 0, void 0, !0);
    },
    notifyRowClick: (H) => {
      _e(qe(), "SMUIDataTable:rowClick", H, void 0, !0);
    },
    registerHeaderRowCheckbox: () => {
    },
    // Handled automatically.
    registerRowCheckboxes: () => {
    },
    // Handled automatically.
    removeClassAtRowIndex: (H, X) => {
      P == null || P.orderedRows[H].removeClass(X);
    },
    setAttributeAtRowIndex: (H, X, Ee) => {
      P == null || P.orderedRows[H].addAttr(X, Ee);
    },
    setHeaderRowCheckboxChecked: (H) => {
      const X = O == null ? void 0 : O.checkbox;
      X && (X.checked = H);
    },
    setHeaderRowCheckboxIndeterminate: xe,
    setRowCheckboxCheckedAtIndex: (H, X) => {
      const Ee = P == null ? void 0 : P.orderedRows[H].checkbox;
      Ee && (Ee.checked = X);
    },
    setSortStatusLabelByHeaderCellIndex: (H, X) => {
    }
    // Handled automatically.
  })), G.init(), G.layout(), t(14, z = !0), () => {
    G.destroy();
  })), Bt(() => {
    ve && ve();
  });
  function Oe(H) {
    t(10, O = H.detail);
  }
  function Ne(H) {
    t(11, P = H.detail);
  }
  function me(H) {
    G && G.handleRowCheckboxChange(H);
  }
  function Ze(H) {
    Y[H] || t(12, Y[H] = !0, Y);
  }
  function Ke(H) {
    (!(H in Y) || Y[H]) && t(12, Y[H] = !1, Y);
  }
  function xe(H) {
    const X = O == null ? void 0 : O.checkbox;
    X && (X.indeterminate = H);
  }
  function et(H) {
    if (!G || !H.detail.target)
      return;
    const X = f(H.detail.target, ".mdc-data-table__header-cell--with-sort");
    X && bt(X);
  }
  function St(H) {
    if (!G || !H.detail.target)
      return;
    const X = f(H.detail.target, ".mdc-data-table__row");
    X && G && G.handleRowClick({ rowId: H.detail.rowId, row: X });
  }
  function bt(H) {
    var X, Ee;
    const Rt = (X = O == null ? void 0 : O.orderedCells) !== null && X !== void 0 ? X : [], It = Rt.map((Pt) => Pt.element).indexOf(H);
    if (It === -1)
      return;
    const Et = (Ee = Rt[It].columnId) !== null && Ee !== void 0 ? Ee : null;
    G.handleSortAction({ columnId: Et, columnIndex: It, headerCell: H });
  }
  function vt() {
    return G.layout();
  }
  function qe() {
    return B;
  }
  function tt(H) {
    ne[H ? "unshift" : "push"](() => {
      k = H, t(9, k);
    });
  }
  function nt(H) {
    ne[H ? "unshift" : "push"](() => {
      B = H, t(8, B);
    });
  }
  const at = () => G && z && G.layout(), lt = () => t(10, O = void 0), Ct = () => t(11, P = void 0), Vt = () => G && G.handleHeaderRowCheckboxChange();
  return n.$$set = (H) => {
    e = j(j({}, e), Me(H)), t(25, i = ce(e, l)), "use" in H && t(0, g = H.use), "class" in H && t(1, p = H.class), "stickyHeader" in H && t(2, h = H.stickyHeader), "sortable" in H && t(28, b = H.sortable), "sort" in H && t(26, S = H.sort), "sortDirection" in H && t(27, A = H.sortDirection), "sortAscendingAriaLabel" in H && t(29, R = H.sortAscendingAriaLabel), "sortDescendingAriaLabel" in H && t(30, _ = H.sortDescendingAriaLabel), "container$use" in H && t(3, F = H.container$use), "container$class" in H && t(4, v = H.container$class), "table$use" in H && t(5, m = H.table$use), "table$class" in H && t(6, E = H.table$class), "$$scope" in H && t(35, u = H.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty[0] & /*sort*/
    67108864 && tn(N, a = S, a), n.$$.dirty[0] & /*sortDirection*/
    134217728 && tn(pe, s = A, s), n.$$.dirty[0] & /*instance*/
    128 | n.$$.dirty[1] & /*previousProgressClosed, $progressClosed*/
    12 && c.progress && G && Ae !== r && (t(33, Ae = r), r ? G.hideProgress() : G.showProgress());
  }, [
    g,
    p,
    h,
    F,
    v,
    m,
    E,
    G,
    B,
    k,
    O,
    P,
    Y,
    ye,
    z,
    d,
    I,
    N,
    pe,
    Oe,
    Ne,
    me,
    et,
    St,
    c,
    i,
    S,
    A,
    b,
    R,
    _,
    vt,
    qe,
    Ae,
    r,
    u,
    o,
    tt,
    nt,
    at,
    lt,
    Ct,
    Vt
  ];
}
class ma extends te {
  constructor(e) {
    super(), ee(
      this,
      e,
      ga,
      da,
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
function ha(n) {
  let e, t, l, i, r;
  const s = (
    /*#slots*/
    n[10].default
  ), a = re(
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
      e = U("thead"), a && a.c(), ie(e, u);
    },
    m(c, f) {
      M(c, e, f), a && a.m(e, null), n[11](e), l = !0, i || (r = [
        $(t = Se.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        $(
          /*forwardEvents*/
          n[3].call(null, e)
        ),
        K(
          e,
          "SMUICheckbox:mount",
          /*handleCheckboxMount*/
          n[4]
        ),
        K(
          e,
          "SMUICheckbox:unmount",
          /*SMUICheckbox_unmount_handler*/
          n[12]
        ),
        K(
          e,
          "SMUIDataTableCell:mount",
          /*handleCellMount*/
          n[5]
        ),
        K(
          e,
          "SMUIDataTableCell:unmount",
          /*handleCellUnmount*/
          n[6]
        )
      ], i = !0);
    },
    p(c, [f]) {
      a && a.p && (!l || f & /*$$scope*/
      512) && ae(
        a,
        s,
        c,
        /*$$scope*/
        c[9],
        l ? se(
          s,
          /*$$scope*/
          c[9],
          f,
          null
        ) : oe(
          /*$$scope*/
          c[9]
        ),
        null
      ), ie(e, u = ue(o, [f & /*$$restProps*/
      128 && /*$$restProps*/
      c[7]])), t && he(t.update) && f & /*use*/
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
      L(a, c), l = !1;
    },
    d(c) {
      c && D(e), a && a.d(c), n[11](null), i = !1, ge(r);
    }
  };
}
function pa(n, e, t) {
  const l = ["use", "getElement"];
  let i = ce(e, l), { $$slots: r = {}, $$scope: s } = e;
  const a = Ge(Re());
  let { use: o = [] } = e, u, c, f = [];
  const d = /* @__PURE__ */ new WeakMap();
  De("SMUI:data-table:row:header", !0), Be(() => {
    const _ = {
      get cells() {
        return f;
      },
      get orderedCells() {
        return b();
      },
      get checkbox() {
        return c;
      }
    };
    return _e(S(), "SMUIDataTableHeader:mount", _), () => {
      _e(S(), "SMUIDataTableHeader:unmount", _);
    };
  });
  function g(_) {
    t(2, c = _.detail);
  }
  function p(_) {
    f.push(_.detail), d.set(_.detail.element, _.detail), _.stopPropagation();
  }
  function h(_) {
    const F = f.indexOf(_.detail);
    F !== -1 && (f.splice(F, 1), f = f), d.delete(_.detail.element), _.stopPropagation();
  }
  function b() {
    return [...S().querySelectorAll(".mdc-data-table__header-cell")].map((_) => d.get(_)).filter((_) => _ && _._smui_data_table_header_cell_accessor);
  }
  function S() {
    return u;
  }
  function A(_) {
    ne[_ ? "unshift" : "push"](() => {
      u = _, t(1, u);
    });
  }
  const R = () => t(2, c = void 0);
  return n.$$set = (_) => {
    e = j(j({}, e), Me(_)), t(7, i = ce(e, l)), "use" in _ && t(0, o = _.use), "$$scope" in _ && t(9, s = _.$$scope);
  }, [
    o,
    u,
    c,
    a,
    g,
    p,
    h,
    i,
    S,
    s,
    r,
    A,
    R
  ];
}
class _a extends te {
  constructor(e) {
    super(), ee(this, e, pa, ha, Q, { use: 0, getElement: 8 });
  }
  get getElement() {
    return this.$$.ctx[8];
  }
}
function ba(n) {
  let e, t, l, i, r, s;
  const a = (
    /*#slots*/
    n[9].default
  ), o = re(
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
      e = U("tbody"), o && o.c(), ie(e, c);
    },
    m(f, d) {
      M(f, e, d), o && o.m(e, null), n[10](e), i = !0, r || (s = [
        $(l = Se.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        $(
          /*forwardEvents*/
          n[3].call(null, e)
        ),
        K(
          e,
          "SMUIDataTableRow:mount",
          /*handleRowMount*/
          n[4]
        ),
        K(
          e,
          "SMUIDataTableRow:unmount",
          /*handleRowUnmount*/
          n[5]
        )
      ], r = !0);
    },
    p(f, [d]) {
      o && o.p && (!i || d & /*$$scope*/
      256) && ae(
        o,
        a,
        f,
        /*$$scope*/
        f[8],
        i ? se(
          a,
          /*$$scope*/
          f[8],
          d,
          null
        ) : oe(
          /*$$scope*/
          f[8]
        ),
        null
      ), ie(e, c = ue(u, [
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
      ])), l && he(l.update) && d & /*use*/
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
      L(o, f), i = !1;
    },
    d(f) {
      f && D(e), o && o.d(f), n[10](null), r = !1, ge(s);
    }
  };
}
function va(n, e, t) {
  const l = ["use", "class", "getElement"];
  let i = ce(e, l), { $$slots: r = {}, $$scope: s } = e;
  const a = Ge(Re());
  let { use: o = [] } = e, { class: u = "" } = e, c, f = [];
  const d = /* @__PURE__ */ new WeakMap();
  De("SMUI:data-table:row:header", !1), Be(() => {
    const A = {
      get rows() {
        return f;
      },
      get orderedRows() {
        return h();
      }
    };
    return _e(b(), "SMUIDataTableBody:mount", A), () => {
      _e(b(), "SMUIDataTableBody:unmount", A);
    };
  });
  function g(A) {
    f.push(A.detail), d.set(A.detail.element, A.detail), A.stopPropagation();
  }
  function p(A) {
    const R = f.indexOf(A.detail);
    R !== -1 && (f.splice(R, 1), f = f), d.delete(A.detail.element), A.stopPropagation();
  }
  function h() {
    return [...b().querySelectorAll(".mdc-data-table__row")].map((A) => d.get(A)).filter((A) => A && A._smui_data_table_row_accessor);
  }
  function b() {
    return c;
  }
  function S(A) {
    ne[A ? "unshift" : "push"](() => {
      c = A, t(2, c);
    });
  }
  return n.$$set = (A) => {
    e = j(j({}, e), Me(A)), t(6, i = ce(e, l)), "use" in A && t(0, o = A.use), "class" in A && t(1, u = A.class), "$$scope" in A && t(8, s = A.$$scope);
  }, [
    o,
    u,
    c,
    a,
    g,
    p,
    i,
    b,
    s,
    r,
    S
  ];
}
class Ca extends te {
  constructor(e) {
    super(), ee(this, e, va, ba, Q, { use: 0, class: 1, getElement: 7 });
  }
  get getElement() {
    return this.$$.ctx[7];
  }
}
function Ia(n) {
  let e, t, l, i, r, s, a;
  const o = (
    /*#slots*/
    n[15].default
  ), u = re(
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
      e = U("tr"), u && u.c(), ie(e, f);
    },
    m(d, g) {
      M(d, e, g), u && u.m(e, null), n[16](e), r = !0, s || (a = [
        $(i = Se.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        $(
          /*forwardEvents*/
          n[6].call(null, e)
        ),
        K(
          e,
          "click",
          /*click_handler*/
          n[17]
        ),
        K(
          e,
          "SMUICheckbox:mount",
          /*handleCheckboxMount*/
          n[8]
        ),
        K(
          e,
          "SMUICheckbox:unmount",
          /*SMUICheckbox_unmount_handler*/
          n[18]
        )
      ], s = !0);
    },
    p(d, [g]) {
      u && u.p && (!r || g & /*$$scope*/
      16384) && ae(
        u,
        o,
        d,
        /*$$scope*/
        d[14],
        r ? se(
          o,
          /*$$scope*/
          d[14],
          g,
          null
        ) : oe(
          /*$$scope*/
          d[14]
        ),
        null
      ), ie(e, f = ue(c, [
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
      ])), i && he(i.update) && g & /*use*/
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
      L(u, d), r = !1;
    },
    d(d) {
      d && D(e), u && u.d(d), n[16](null), s = !1, ge(a);
    }
  };
}
let Aa = 0;
function ya(n, e, t) {
  const l = ["use", "class", "rowId", "getElement"];
  let i = ce(e, l), { $$slots: r = {}, $$scope: s } = e;
  const a = Ge(Re());
  let { use: o = [] } = e, { class: u = "" } = e, { rowId: c = "SMUI-data-table-row-" + Aa++ } = e, f, d, g = {}, p = {}, h = Ue("SMUI:data-table:row:header");
  Be(() => {
    const k = h ? {
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
        var O;
        return (O = d && d.checked) !== null && O !== void 0 ? O : !1;
      },
      addClass: S,
      removeClass: A,
      getAttr: R,
      addAttr: _
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
        var O;
        return (O = d && d.checked) !== null && O !== void 0 ? O : !1;
      },
      addClass: S,
      removeClass: A,
      getAttr: R,
      addAttr: _
    };
    return _e(m(), "SMUIDataTableRow:mount", k), () => {
      _e(m(), "SMUIDataTableRow:unmount", k);
    };
  });
  function b(k) {
    t(3, d = k.detail);
  }
  function S(k) {
    g[k] || t(4, g[k] = !0, g);
  }
  function A(k) {
    (!(k in g) || g[k]) && t(4, g[k] = !1, g);
  }
  function R(k) {
    var O;
    return k in p ? (O = p[k]) !== null && O !== void 0 ? O : null : m().getAttribute(k);
  }
  function _(k, O) {
    p[k] !== O && t(5, p[k] = O, p);
  }
  function F(k) {
    _e(m(), "SMUIDataTableHeader:click", k);
  }
  function v(k) {
    _e(m(), "SMUIDataTableRow:click", { rowId: c, target: k.target });
  }
  function m() {
    return f;
  }
  function E(k) {
    ne[k ? "unshift" : "push"](() => {
      f = k, t(2, f);
    });
  }
  const B = (k) => h ? F(k) : v(k), G = () => t(3, d = void 0);
  return n.$$set = (k) => {
    e = j(j({}, e), Me(k)), t(11, i = ce(e, l)), "use" in k && t(0, o = k.use), "class" in k && t(1, u = k.class), "rowId" in k && t(12, c = k.rowId), "$$scope" in k && t(14, s = k.$$scope);
  }, [
    o,
    u,
    f,
    d,
    g,
    p,
    a,
    h,
    b,
    F,
    v,
    i,
    c,
    m,
    s,
    r,
    E,
    B,
    G
  ];
}
class Ql extends te {
  constructor(e) {
    super(), ee(this, e, ya, Ia, Q, {
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
function ka(n) {
  let e, t, l, i, r, s;
  const a = (
    /*#slots*/
    n[22].default
  ), o = re(
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
      e = U("td"), o && o.c(), ie(e, c);
    },
    m(f, d) {
      M(f, e, d), o && o.m(e, null), n[25](e), i = !0, r || (s = [
        $(l = Se.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        $(
          /*forwardEvents*/
          n[11].call(null, e)
        ),
        K(
          e,
          "change",
          /*change_handler_1*/
          n[26]
        )
      ], r = !0);
    },
    p(f, d) {
      o && o.p && (!i || d & /*$$scope*/
      2097152) && ae(
        o,
        a,
        f,
        /*$$scope*/
        f[21],
        i ? se(
          a,
          /*$$scope*/
          f[21],
          d,
          null
        ) : oe(
          /*$$scope*/
          f[21]
        ),
        null
      ), ie(e, c = ue(u, [
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
      ])), l && he(l.update) && d & /*use*/
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
      L(o, f), i = !1;
    },
    d(f) {
      f && D(e), o && o.d(f), n[25](null), r = !1, ge(s);
    }
  };
}
function wa(n) {
  let e, t, l, i, r, s, a, o, u;
  const c = [Sa, La], f = [];
  function d(h, b) {
    return (
      /*sortable*/
      h[5] ? 0 : 1
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
  ], p = {};
  for (let h = 0; h < g.length; h += 1)
    p = j(p, g[h]);
  return {
    c() {
      e = U("th"), l.c(), ie(e, p);
    },
    m(h, b) {
      M(h, e, b), f[t].m(e, null), n[23](e), a = !0, o || (u = [
        $(s = Se.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        $(
          /*forwardEvents*/
          n[11].call(null, e)
        ),
        K(
          e,
          "change",
          /*change_handler*/
          n[24]
        )
      ], o = !0);
    },
    p(h, b) {
      let S = t;
      t = d(h), t === S ? f[t].p(h, b) : (fe(), L(f[S], 1, 1, () => {
        f[S] = null;
      }), de(), l = f[t], l ? l.p(h, b) : (l = f[t] = c[t](h), l.c()), C(l, 1), l.m(e, null)), ie(e, p = ue(g, [
        (!a || b & /*className, numeric, checkbox, sortable, $sort, columnId, internalClasses*/
        702 && i !== (i = x({
          [
            /*className*/
            h[1]
          ]: !0,
          "mdc-data-table__header-cell": !0,
          "mdc-data-table__header-cell--numeric": (
            /*numeric*/
            h[2]
          ),
          "mdc-data-table__header-cell--checkbox": (
            /*checkbox*/
            h[3]
          ),
          "mdc-data-table__header-cell--with-sort": (
            /*sortable*/
            h[5]
          ),
          "mdc-data-table__header-cell--sorted": (
            /*sortable*/
            h[5] && /*$sort*/
            h[9] === /*columnId*/
            h[4]
          ),
          .../*internalClasses*/
          h[7]
        }))) && { class: i },
        { role: "columnheader" },
        { scope: "col" },
        (!a || b & /*columnId*/
        16) && { "data-column-id": (
          /*columnId*/
          h[4]
        ) },
        (!a || b & /*sortable, $sort, columnId, $sortDirection*/
        1584 && r !== (r = /*sortable*/
        h[5] ? (
          /*$sort*/
          h[9] === /*columnId*/
          h[4] ? (
            /*$sortDirection*/
            h[10]
          ) : "none"
        ) : void 0)) && { "aria-sort": r },
        b & /*internalAttrs*/
        256 && /*internalAttrs*/
        h[8],
        b & /*$$restProps*/
        524288 && /*$$restProps*/
        h[19]
      ])), s && he(s.update) && b & /*use*/
      1 && s.update.call(
        null,
        /*use*/
        h[0]
      );
    },
    i(h) {
      a || (C(l), a = !0);
    },
    o(h) {
      L(l), a = !1;
    },
    d(h) {
      h && D(e), f[t].d(), n[23](null), o = !1, ge(u);
    }
  };
}
function La(n) {
  let e;
  const t = (
    /*#slots*/
    n[22].default
  ), l = re(
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
      2097152) && ae(
        l,
        t,
        i,
        /*$$scope*/
        i[21],
        e ? se(
          t,
          /*$$scope*/
          i[21],
          r,
          null
        ) : oe(
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
      L(l, i), e = !1;
    },
    d(i) {
      l && l.d(i);
    }
  };
}
function Sa(n) {
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
  ), u = re(
    o,
    n,
    /*$$scope*/
    n[21],
    null
  );
  return {
    c() {
      e = U("div"), u && u.c(), t = W(), l = U("div"), r = le(i), w(l, "class", "mdc-data-table__sort-status-label"), w(l, "aria-hidden", "true"), w(l, "id", s = /*columnId*/
      n[4] + "-status-label"), w(e, "class", "mdc-data-table__header-cell-wrapper");
    },
    m(c, f) {
      M(c, e, f), u && u.m(e, null), T(e, t), T(e, l), T(l, r), a = !0;
    },
    p(c, f) {
      u && u.p && (!a || f & /*$$scope*/
      2097152) && ae(
        u,
        o,
        c,
        /*$$scope*/
        c[21],
        a ? se(
          o,
          /*$$scope*/
          c[21],
          f,
          null
        ) : oe(
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
      ) : "") + "") && be(r, i), (!a || f & /*columnId*/
      16 && s !== (s = /*columnId*/
      c[4] + "-status-label")) && w(l, "id", s);
    },
    i(c) {
      a || (C(u, c), a = !0);
    },
    o(c) {
      L(u, c), a = !1;
    },
    d(c) {
      c && D(e), u && u.d(c);
    }
  };
}
function Ra(n) {
  let e, t, l, i;
  const r = [wa, ka], s = [];
  function a(o, u) {
    return (
      /*header*/
      o[12] ? 0 : 1
    );
  }
  return e = a(n), t = s[e] = r[e](n), {
    c() {
      t.c(), l = Ie();
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
      L(t), i = !1;
    },
    d(o) {
      o && D(l), s[e].d(o);
    }
  };
}
let Ea = 0;
function Pa(n, e, t) {
  const l = ["use", "class", "numeric", "checkbox", "columnId", "sortable", "getElement"];
  let i = ce(e, l), r, s, { $$slots: a = {}, $$scope: o } = e;
  const u = Ge(Re());
  let c = Ue("SMUI:data-table:row:header"), { use: f = [] } = e, { class: d = "" } = e, { numeric: g = !1 } = e, { checkbox: p = !1 } = e, { columnId: h = c ? "SMUI-data-table-column-" + Ea++ : "SMUI-data-table-unused" } = e, { sortable: b = Ue("SMUI:data-table:sortable") } = e, S, A = {}, R = {}, _ = Ue("SMUI:data-table:sort");
  ft(n, _, (I) => t(9, r = I));
  let F = Ue("SMUI:data-table:sortDirection");
  ft(n, F, (I) => t(10, s = I));
  let v = Ue("SMUI:data-table:sortAscendingAriaLabel"), m = Ue("SMUI:data-table:sortDescendingAriaLabel");
  b && (De("SMUI:label:context", "data-table:sortable-header-cell"), De("SMUI:icon-button:context", "data-table:sortable-header-cell"), De("SMUI:icon-button:aria-describedby", h + "-status-label")), Be(() => {
    const I = c ? {
      _smui_data_table_header_cell_accessor: !0,
      get element() {
        return Y();
      },
      get columnId() {
        return h;
      },
      addClass: E,
      removeClass: B,
      getAttr: G,
      addAttr: k
    } : {
      _smui_data_table_header_cell_accessor: !1,
      get element() {
        return Y();
      },
      get columnId() {
      },
      addClass: E,
      removeClass: B,
      getAttr: G,
      addAttr: k
    };
    return _e(Y(), "SMUIDataTableCell:mount", I), () => {
      _e(Y(), "SMUIDataTableCell:unmount", I);
    };
  });
  function E(I) {
    A[I] || t(7, A[I] = !0, A);
  }
  function B(I) {
    (!(I in A) || A[I]) && t(7, A[I] = !1, A);
  }
  function G(I) {
    var N;
    return I in R ? (N = R[I]) !== null && N !== void 0 ? N : null : Y().getAttribute(I);
  }
  function k(I, N) {
    R[I] !== N && t(8, R[I] = N, R);
  }
  function O(I) {
    _e(Y(), "SMUIDataTableHeaderCheckbox:change", I);
  }
  function P(I) {
    _e(Y(), "SMUIDataTableBodyCheckbox:change", I);
  }
  function Y() {
    return S;
  }
  function ye(I) {
    ne[I ? "unshift" : "push"](() => {
      S = I, t(6, S);
    });
  }
  const ke = (I) => p && O(I);
  function ve(I) {
    ne[I ? "unshift" : "push"](() => {
      S = I, t(6, S);
    });
  }
  const z = (I) => p && P(I);
  return n.$$set = (I) => {
    e = j(j({}, e), Me(I)), t(19, i = ce(e, l)), "use" in I && t(0, f = I.use), "class" in I && t(1, d = I.class), "numeric" in I && t(2, g = I.numeric), "checkbox" in I && t(3, p = I.checkbox), "columnId" in I && t(4, h = I.columnId), "sortable" in I && t(5, b = I.sortable), "$$scope" in I && t(21, o = I.$$scope);
  }, [
    f,
    d,
    g,
    p,
    h,
    b,
    S,
    A,
    R,
    r,
    s,
    u,
    c,
    _,
    F,
    v,
    m,
    O,
    P,
    i,
    Y,
    o,
    a,
    ye,
    ke,
    ve,
    z
  ];
}
class qt extends te {
  constructor(e) {
    super(), ee(this, e, Pa, Ra, Q, {
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
const { Boolean: Jl } = Oi;
function rl(n, e, t) {
  const l = n.slice();
  return l[17] = e[t], l[19] = t, l;
}
const Da = (n) => ({ item: n & /*items*/
1 }), sl = (n) => ({ item: (
  /*item*/
  n[17]
) });
function al(n, e, t) {
  const l = n.slice();
  return l[20] = e[t], l;
}
function ol(n, e, t) {
  const l = n.slice();
  return l[20] = e[t], l;
}
function Ha(n) {
  let e, t;
  return e = new ma({
    props: {
      style: "width: 100%;",
      $$slots: { default: [qa] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      V(e.$$.fragment);
    },
    m(l, i) {
      Z(e, l, i), t = !0;
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
      L(e.$$.fragment, l), t = !1;
    },
    d(l) {
      q(e, l);
    }
  };
}
function Ma(n) {
  let e, t;
  return {
    c() {
      e = U("p"), t = le(
        /*emptyText*/
        n[4]
      ), w(e, "class", "status svelte-1v7zd15");
    },
    m(l, i) {
      M(l, e, i), T(e, t);
    },
    p(l, i) {
      i & /*emptyText*/
      16 && be(
        t,
        /*emptyText*/
        l[4]
      );
    },
    i: J,
    o: J,
    d(l) {
      l && D(e);
    }
  };
}
function Ta(n) {
  let e, t;
  return {
    c() {
      e = U("p"), t = le(
        /*errorMsg*/
        n[3]
      ), w(e, "class", "status error svelte-1v7zd15");
    },
    m(l, i) {
      M(l, e, i), T(e, t);
    },
    p(l, i) {
      i & /*errorMsg*/
      8 && be(
        t,
        /*errorMsg*/
        l[3]
      );
    },
    i: J,
    o: J,
    d(l) {
      l && D(e);
    }
  };
}
function Fa(n) {
  let e;
  return {
    c() {
      e = U("p"), e.textContent = "Loading…", w(e, "class", "status svelte-1v7zd15");
    },
    m(t, l) {
      M(t, e, l);
    },
    p: J,
    i: J,
    o: J,
    d(t) {
      t && D(e);
    }
  };
}
function Ga(n) {
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
      l[20].header + "") && be(t, e);
    },
    d(l) {
      l && D(t);
    }
  };
}
function ul(n) {
  let e, t;
  return e = new qt({
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
      $$slots: { default: [Ga] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      V(e.$$.fragment);
    },
    m(l, i) {
      Z(e, l, i), t = !0;
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
      L(e.$$.fragment, l), t = !1;
    },
    d(l) {
      q(e, l);
    }
  };
}
function cl(n) {
  let e, t;
  return e = new qt({
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
      V(e.$$.fragment);
    },
    m(l, i) {
      Z(e, l, i), t = !0;
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
      L(e.$$.fragment, l), t = !1;
    },
    d(l) {
      q(e, l);
    }
  };
}
function Ua(n) {
  let e, t, l, i = Ce(
    /*columns*/
    n[1]
  ), r = [];
  for (let o = 0; o < i.length; o += 1)
    r[o] = ul(ol(n, i, o));
  const s = (o) => L(r[o], 1, 1, () => {
    r[o] = null;
  });
  let a = (
    /*slotHasActions*/
    n[9] && cl(n)
  );
  return {
    c() {
      for (let o = 0; o < r.length; o += 1)
        r[o].c();
      e = W(), a && a.c(), t = Ie();
    },
    m(o, u) {
      for (let c = 0; c < r.length; c += 1)
        r[c] && r[c].m(o, u);
      M(o, e, u), a && a.m(o, u), M(o, t, u), l = !0;
    },
    p(o, u) {
      if (u & /*columns, headerBg, Boolean*/
      66) {
        i = Ce(
          /*columns*/
          o[1]
        );
        let c;
        for (c = 0; c < i.length; c += 1) {
          const f = ol(o, i, c);
          r[c] ? (r[c].p(f, u), C(r[c], 1)) : (r[c] = ul(f), r[c].c(), C(r[c], 1), r[c].m(e.parentNode, e));
        }
        for (fe(), c = i.length; c < r.length; c += 1)
          s(c);
        de();
      }
      /*slotHasActions*/
      o[9] ? a ? (a.p(o, u), u & /*slotHasActions*/
      512 && C(a, 1)) : (a = cl(o), a.c(), C(a, 1), a.m(t.parentNode, t)) : a && (fe(), L(a, 1, 1, () => {
        a = null;
      }), de());
    },
    i(o) {
      if (!l) {
        for (let u = 0; u < i.length; u += 1)
          C(r[u]);
        C(a), l = !0;
      }
    },
    o(o) {
      r = r.filter(Jl);
      for (let u = 0; u < r.length; u += 1)
        L(r[u]);
      L(a), l = !1;
    },
    d(o) {
      o && (D(e), D(t)), je(r, o), a && a.d(o);
    }
  };
}
function Oa(n) {
  let e, t;
  return e = new Ql({
    props: {
      $$slots: { default: [Ua] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      V(e.$$.fragment);
    },
    m(l, i) {
      Z(e, l, i), t = !0;
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
      L(e.$$.fragment, l), t = !1;
    },
    d(l) {
      q(e, l);
    }
  };
}
function Wa(n) {
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
      ]) ?? "") + "") && be(t, e);
    },
    d(i) {
      i && D(t);
    }
  };
}
function fl(n) {
  let e, t;
  return e = new qt({
    props: {
      $$slots: { default: [Wa] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      V(e.$$.fragment);
    },
    m(l, i) {
      Z(e, l, i), t = !0;
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
      L(e.$$.fragment, l), t = !1;
    },
    d(l) {
      q(e, l);
    }
  };
}
function dl(n) {
  let e, t;
  return e = new qt({
    props: {
      numeric: !0,
      $$slots: { default: [Ba] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      V(e.$$.fragment);
    },
    m(l, i) {
      Z(e, l, i), t = !0;
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
      L(e.$$.fragment, l), t = !1;
    },
    d(l) {
      q(e, l);
    }
  };
}
function Ba(n) {
  let e;
  const t = (
    /*#slots*/
    n[11].actions
  ), l = re(
    t,
    n,
    /*$$scope*/
    n[14],
    sl
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
      16385) && ae(
        l,
        t,
        i,
        /*$$scope*/
        i[14],
        e ? se(
          t,
          /*$$scope*/
          i[14],
          r,
          Da
        ) : oe(
          /*$$scope*/
          i[14]
        ),
        sl
      );
    },
    i(i) {
      e || (C(l, i), e = !0);
    },
    o(i) {
      L(l, i), e = !1;
    },
    d(i) {
      l && l.d(i);
    }
  };
}
function Na(n) {
  let e, t, l, i = Ce(
    /*columns*/
    n[1]
  ), r = [];
  for (let o = 0; o < i.length; o += 1)
    r[o] = fl(al(n, i, o));
  const s = (o) => L(r[o], 1, 1, () => {
    r[o] = null;
  });
  let a = (
    /*slotHasActions*/
    n[9] && dl(n)
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
      M(o, e, u), a && a.m(o, u), M(o, t, u), l = !0;
    },
    p(o, u) {
      if (u & /*items, columns*/
      3) {
        i = Ce(
          /*columns*/
          o[1]
        );
        let c;
        for (c = 0; c < i.length; c += 1) {
          const f = al(o, i, c);
          r[c] ? (r[c].p(f, u), C(r[c], 1)) : (r[c] = fl(f), r[c].c(), C(r[c], 1), r[c].m(e.parentNode, e));
        }
        for (fe(), c = i.length; c < r.length; c += 1)
          s(c);
        de();
      }
      /*slotHasActions*/
      o[9] ? a ? (a.p(o, u), u & /*slotHasActions*/
      512 && C(a, 1)) : (a = dl(o), a.c(), C(a, 1), a.m(t.parentNode, t)) : a && (fe(), L(a, 1, 1, () => {
        a = null;
      }), de());
    },
    i(o) {
      if (!l) {
        for (let u = 0; u < i.length; u += 1)
          C(r[u]);
        C(a), l = !0;
      }
    },
    o(o) {
      r = r.filter(Jl);
      for (let u = 0; u < r.length; u += 1)
        L(r[u]);
      L(a), l = !1;
    },
    d(o) {
      o && (D(e), D(t)), je(r, o), a && a.d(o);
    }
  };
}
function gl(n, e) {
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
  return l = new Ql({
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
      $$slots: { default: [Na] },
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
      t = Ie(), V(l.$$.fragment), this.first = t;
    },
    m(s, a) {
      M(s, t, a), Z(l, s, a), i = !0;
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
      L(l.$$.fragment, s), i = !1;
    },
    d(s) {
      s && D(t), q(l, s);
    }
  };
}
function Za(n) {
  let e = [], t = /* @__PURE__ */ new Map(), l, i, r = Ce(
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
    let o = rl(n, r, a), u = s(o);
    t.set(u, e[a] = gl(u, o));
  }
  return {
    c() {
      for (let a = 0; a < e.length; a += 1)
        e[a].c();
      l = Ie();
    },
    m(a, o) {
      for (let u = 0; u < e.length; u += 1)
        e[u] && e[u].m(a, o);
      M(a, l, o), i = !0;
    },
    p(a, o) {
      o & /*rowBg, hoveredRow, getRowId, items, Boolean, $$scope, slotHasActions, columns*/
      17315 && (r = Ce(
        /*items*/
        a[0]
      ), fe(), e = Yi(e, o, s, 1, a, r, t, l.parentNode, Xi, gl, l, rl), de());
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
        L(e[o]);
      i = !1;
    },
    d(a) {
      a && D(l);
      for (let o = 0; o < e.length; o += 1)
        e[o].d(a);
    }
  };
}
function qa(n) {
  let e, t, l, i;
  return e = new _a({
    props: {
      style: (
        /*headerBg*/
        n[6] ? `background-color:${/*headerBg*/
        n[6]}` : void 0
      ),
      $$slots: { default: [Oa] },
      $$scope: { ctx: n }
    }
  }), l = new Ca({
    props: {
      $$slots: { default: [Za] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      V(e.$$.fragment), t = W(), V(l.$$.fragment);
    },
    m(r, s) {
      Z(e, r, s), M(r, t, s), Z(l, r, s), i = !0;
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
      L(e.$$.fragment, r), L(l.$$.fragment, r), i = !1;
    },
    d(r) {
      r && D(t), q(e, r), q(l, r);
    }
  };
}
function Va(n) {
  let e, t, l, i;
  const r = [Fa, Ta, Ma, Ha], s = [];
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
      t.c(), l = Ie();
    },
    m(o, u) {
      s[e].m(o, u), M(o, l, u), i = !0;
    },
    p(o, [u]) {
      let c = e;
      e = a(o), e === c ? s[e].p(o, u) : (fe(), L(s[c], 1, 1, () => {
        s[c] = null;
      }), de(), t = s[e], t ? t.p(o, u) : (t = s[e] = r[e](o), t.c()), C(t, 1), t.m(l.parentNode, l));
    },
    i(o) {
      i || (C(t), i = !0);
    },
    o(o) {
      L(t), i = !1;
    },
    d(o) {
      o && D(l), s[e].d(o);
    }
  };
}
function ja(n, e, t) {
  let l, { $$slots: i = {}, $$scope: r } = e;
  const s = an(i);
  let { items: a = [] } = e, { columns: o = [] } = e, { loading: u = !1 } = e, { errorMsg: c = "" } = e, { emptyText: f = "Nothing to show." } = e, { getRowId: d = (_, F) => {
    var v, m;
    return (m = _ && ((v = _.id) !== null && v !== void 0 ? v : _.key)) !== null && m !== void 0 ? m : F;
  } } = e, { headerBg: g = null } = e, { rowBg: p = null } = e, h = null;
  const b = s;
  let { hasActions: S = !1 } = e;
  const A = (_, F) => t(8, h = d(_, F)), R = () => t(8, h = null);
  return n.$$set = (_) => {
    "items" in _ && t(0, a = _.items), "columns" in _ && t(1, o = _.columns), "loading" in _ && t(2, u = _.loading), "errorMsg" in _ && t(3, c = _.errorMsg), "emptyText" in _ && t(4, f = _.emptyText), "getRowId" in _ && t(5, d = _.getRowId), "headerBg" in _ && t(6, g = _.headerBg), "rowBg" in _ && t(7, p = _.rowBg), "hasActions" in _ && t(10, S = _.hasActions), "$$scope" in _ && t(14, r = _.$$scope);
  }, n.$$.update = () => {
    n.$$.dirty & /*hasActions*/
    1024 && t(9, l = S || !!(b != null && b.actions));
  }, [
    a,
    o,
    u,
    c,
    f,
    d,
    g,
    p,
    h,
    l,
    S,
    i,
    A,
    R,
    r
  ];
}
class za extends te {
  constructor(e) {
    super(), ee(this, e, ja, Va, Q, {
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
function ml(n, e, t) {
  const l = n.slice();
  return l[5] = e[t], l[7] = t, l;
}
function hl(n) {
  let e, t = (
    /*crumb*/
    n[5].secondaryLabel + ""
  ), l;
  return {
    c() {
      e = U("span"), l = le(t), w(e, "class", "secondary-label svelte-1ngm2be");
    },
    m(i, r) {
      M(i, e, r), T(e, l);
    },
    p(i, r) {
      r & /*breadcrumbs*/
      1 && t !== (t = /*crumb*/
      i[5].secondaryLabel + "") && be(l, t);
    },
    d(i) {
      i && D(e);
    }
  };
}
function pl(n) {
  let e;
  return {
    c() {
      e = U("span"), e.textContent = "chevron_right", w(e, "class", "material-icons separator svelte-1ngm2be");
    },
    m(t, l) {
      M(t, e, l);
    },
    d(t) {
      t && D(e);
    }
  };
}
function _l(n) {
  let e, t, l, i = (
    /*crumb*/
    n[5].label + ""
  ), r, s, a, o, u, c, f, d, g = (
    /*crumb*/
    n[5].secondaryLabel && hl(n)
  );
  function p() {
    return (
      /*click_handler*/
      n[3](
        /*i*/
        n[7]
      )
    );
  }
  let h = (
    /*i*/
    n[7] < /*breadcrumbs*/
    n[0].length - 1 && pl()
  );
  return {
    c() {
      e = U("div"), t = U("span"), l = U("span"), r = le(i), s = W(), g && g.c(), u = W(), h && h.c(), c = W(), w(l, "class", "label svelte-1ngm2be"), w(t, "class", a = "breadcrumb " + /*crumb*/
      (n[5].enabled ? "" : "br-disabled") + " " + /*i*/
      (n[7] === /*activeIndex*/
      n[1] ? "br-active" : "") + " svelte-1ngm2be"), w(t, "aria-current", o = /*i*/
      n[7] === /*activeIndex*/
      n[1] ? "page" : void 0), w(e, "class", "breadcrumb-wrapper svelte-1ngm2be");
    },
    m(b, S) {
      M(b, e, S), T(e, t), T(t, l), T(l, r), T(t, s), g && g.m(t, null), T(e, u), h && h.m(e, null), T(e, c), f || (d = K(t, "click", p), f = !0);
    },
    p(b, S) {
      n = b, S & /*breadcrumbs*/
      1 && i !== (i = /*crumb*/
      n[5].label + "") && be(r, i), /*crumb*/
      n[5].secondaryLabel ? g ? g.p(n, S) : (g = hl(n), g.c(), g.m(t, null)) : g && (g.d(1), g = null), S & /*breadcrumbs, activeIndex*/
      3 && a !== (a = "breadcrumb " + /*crumb*/
      (n[5].enabled ? "" : "br-disabled") + " " + /*i*/
      (n[7] === /*activeIndex*/
      n[1] ? "br-active" : "") + " svelte-1ngm2be") && w(t, "class", a), S & /*activeIndex*/
      2 && o !== (o = /*i*/
      n[7] === /*activeIndex*/
      n[1] ? "page" : void 0) && w(t, "aria-current", o), /*i*/
      n[7] < /*breadcrumbs*/
      n[0].length - 1 ? h || (h = pl(), h.c(), h.m(e, c)) : h && (h.d(1), h = null);
    },
    d(b) {
      b && D(e), g && g.d(), h && h.d(), f = !1, d();
    }
  };
}
function Xa(n) {
  let e, t = Ce(
    /*breadcrumbs*/
    n[0]
  ), l = [];
  for (let i = 0; i < t.length; i += 1)
    l[i] = _l(ml(n, t, i));
  return {
    c() {
      e = U("div");
      for (let i = 0; i < l.length; i += 1)
        l[i].c();
      w(e, "class", "oscd-breadcrumbs svelte-1ngm2be");
    },
    m(i, r) {
      M(i, e, r);
      for (let s = 0; s < l.length; s += 1)
        l[s] && l[s].m(e, null);
    },
    p(i, [r]) {
      if (r & /*breadcrumbs, activeIndex, undefined, handleClick*/
      7) {
        t = Ce(
          /*breadcrumbs*/
          i[0]
        );
        let s;
        for (s = 0; s < t.length; s += 1) {
          const a = ml(i, t, s);
          l[s] ? l[s].p(a, r) : (l[s] = _l(a), l[s].c(), l[s].m(e, null));
        }
        for (; s < l.length; s += 1)
          l[s].d(1);
        l.length = t.length;
      }
    },
    i: J,
    o: J,
    d(i) {
      i && D(e), je(l, i);
    }
  };
}
function Ya(n, e, t) {
  let { breadcrumbs: l = [] } = e, { activeIndex: i = 0 } = e;
  const r = ze(), s = (o) => {
    l[o].enabled && o !== i && r("click", { index: o });
  }, a = (o) => s(o);
  return n.$$set = (o) => {
    "breadcrumbs" in o && t(0, l = o.breadcrumbs), "activeIndex" in o && t(1, i = o.activeIndex);
  }, [l, i, s, a];
}
class on extends te {
  constructor(e) {
    super(), ee(this, e, Ya, Xa, Q, { breadcrumbs: 0, activeIndex: 1 });
  }
}
const Ka = Object.freeze({
  // This flag exists as a workaround for issue 454 (basically a browser bug) - seems like these rect values take time to update when in grid layout. Setting it to true can cause strange behaviour in the REPL for non-grid zones, see issue 470
  USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT: "USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT"
});
Ka.USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT + "";
function Qa(n) {
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
function Ja(n) {
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
function $a(n) {
  let e, t, l, i, r, s, a, o;
  t = new Ns({
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
  r = new Js({
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
      e = U("button"), V(t.$$.fragment), l = W(), i = U("button"), V(r.$$.fragment), w(e, "type", "button"), w(e, "class", "icon svelte-wxofq2"), w(e, "aria-label", "View process"), w(i, "type", "button"), w(i, "class", "icon svelte-wxofq2"), w(i, "aria-label", "Start process");
    },
    m(f, d) {
      M(f, e, d), Z(t, e, null), M(f, l, d), M(f, i, d), Z(r, i, null), s = !0, a || (o = [
        K(e, "click", u),
        K(i, "click", c)
      ], a = !0);
    },
    p(f, d) {
      n = f;
    },
    i(f) {
      s || (C(t.$$.fragment, f), C(r.$$.fragment, f), s = !0);
    },
    o(f) {
      L(t.$$.fragment, f), L(r.$$.fragment, f), s = !1;
    },
    d(f) {
      f && (D(e), D(l), D(i)), q(t), q(r), a = !1, ge(o);
    }
  };
}
function xa(n) {
  let e, t, l, i, r, s, a, o, u, c, f, d, g, p, h, b, S;
  i = new ta({}), o = new ht({
    props: {
      variant: "raised",
      style: "--mdc-theme-primary: #ffffff; --mdc-theme-on-primary: #004552",
      $$slots: { default: [Qa] },
      $$scope: { ctx: n }
    }
  }), o.$on(
    "click",
    /*click_handler*/
    n[11]
  );
  function A(_) {
    n[12](_);
  }
  let R = {
    variant: "outlined",
    label: "Search Processes"
  };
  return (
    /*searchQuery*/
    n[2] !== void 0 && (R.value = /*searchQuery*/
    n[2]), f = new Hs({ props: R }), ne.push(() => Je(f, "value", A)), p = new ht({
      props: {
        variant: "raised",
        style: "--mdc-theme-primary: #004552; --mdc-theme-on-primary: #ffffff",
        $$slots: { default: [Ja] },
        $$scope: { ctx: n }
      }
    }), p.$on(
      "click",
      /*handleAddNew*/
      n[7]
    ), b = new za({
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
            $a,
            ({ item: _ }) => ({ 16: _ }),
            ({ item: _ }) => _ ? 65536 : 0
          ]
        },
        $$scope: { ctx: n }
      }
    }), {
      c() {
        e = U("div"), t = U("div"), l = U("div"), V(i.$$.fragment), r = W(), s = U("span"), s.textContent = `A process “Process Name C” has already been started for the ---.scd.
        Would you like to continue where you left off?`, a = W(), V(o.$$.fragment), u = W(), c = U("div"), V(f.$$.fragment), g = W(), V(p.$$.fragment), h = W(), V(b.$$.fragment), w(s, "class", "svelte-wxofq2"), w(l, "class", "process-banner__info svelte-wxofq2"), w(t, "class", "process-banner svelte-wxofq2"), w(c, "class", "process-toolbar svelte-wxofq2"), w(e, "class", "processes svelte-wxofq2");
      },
      m(_, F) {
        M(_, e, F), T(e, t), T(t, l), Z(i, l, null), T(l, r), T(l, s), T(t, a), Z(o, t, null), T(e, u), T(e, c), Z(f, c, null), T(c, g), Z(p, c, null), T(e, h), Z(b, e, null), S = !0;
      },
      p(_, [F]) {
        const v = {};
        F & /*$$scope*/
        131072 && (v.$$scope = { dirty: F, ctx: _ }), o.$set(v);
        const m = {};
        !d && F & /*searchQuery*/
        4 && (d = !0, m.value = /*searchQuery*/
        _[2], Qe(() => d = !1)), f.$set(m);
        const E = {};
        F & /*$$scope*/
        131072 && (E.$$scope = { dirty: F, ctx: _ }), p.$set(E);
        const B = {};
        F & /*filteredRows*/
        8 && (B.items = /*filteredRows*/
        _[3]), F & /*loading*/
        1 && (B.loading = /*loading*/
        _[0]), F & /*errorMsg*/
        2 && (B.errorMsg = /*errorMsg*/
        _[1]), F & /*$$scope, item*/
        196608 && (B.$$scope = { dirty: F, ctx: _ }), b.$set(B);
      },
      i(_) {
        S || (C(i.$$.fragment, _), C(o.$$.fragment, _), C(f.$$.fragment, _), C(p.$$.fragment, _), C(b.$$.fragment, _), S = !0);
      },
      o(_) {
        L(i.$$.fragment, _), L(o.$$.fragment, _), L(f.$$.fragment, _), L(p.$$.fragment, _), L(b.$$.fragment, _), S = !1;
      },
      d(_) {
        _ && D(e), q(i), q(o), q(f), q(p), q(b);
      }
    }
  );
}
function eo(n, e, t) {
  let l, i, r, { processes: s = [] } = e, { loading: a = !1 } = e, { errorMsg: o = "" } = e;
  const u = ze(), c = (R) => u("start", R), f = (R) => u("view", R);
  let d = "";
  const g = [
    { key: "displayName", header: "Name" },
    {
      key: "description",
      header: "Description"
    }
  ], p = () => {
    console.log("Add new process clicked");
  }, h = () => console.log("Continue Process");
  function b(R) {
    d = R, t(2, d);
  }
  const S = (R) => f(R), A = (R) => c(R);
  return n.$$set = (R) => {
    "processes" in R && t(8, s = R.processes), "loading" in R && t(0, a = R.loading), "errorMsg" in R && t(1, o = R.errorMsg);
  }, n.$$.update = () => {
    n.$$.dirty & /*searchQuery*/
    4 && t(10, l = d.trim().toLowerCase()), n.$$.dirty & /*processes*/
    256 && t(9, i = (s ?? []).map((R) => Object.assign(Object.assign({}, R), { displayName: R.name || R.id }))), n.$$.dirty & /*searchLower, rows*/
    1536 && t(3, r = l ? i.filter((R) => {
      var _;
      return ((_ = R.displayName) !== null && _ !== void 0 ? _ : "").toLowerCase().includes(l);
    }) : i);
  }, [
    a,
    o,
    d,
    r,
    c,
    f,
    g,
    p,
    s,
    i,
    l,
    h,
    b,
    S,
    A
  ];
}
class to extends te {
  constructor(e) {
    super(), ee(this, e, eo, xa, Q, { processes: 8, loading: 0, errorMsg: 1 });
  }
}
function bl(n, e, t) {
  const l = n.slice();
  return l[7] = e[t], l[9] = t, l;
}
function no(n) {
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
    p: J,
    i: J,
    o: J,
    d(l) {
      l && D(t);
    }
  };
}
function lo(n) {
  let e, t, l, i;
  const r = [ao, so, ro, io], s = [];
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
      t.c(), l = Ie();
    },
    m(o, u) {
      s[e].m(o, u), M(o, l, u), i = !0;
    },
    p(o, u) {
      let c = e;
      e = a(o), e !== c && (fe(), L(s[c], 1, 1, () => {
        s[c] = null;
      }), de(), t = s[e], t || (t = s[e] = r[e](o), t.c()), C(t, 1), t.m(l.parentNode, l));
    },
    i(o) {
      i || (C(t), i = !0);
    },
    o(o) {
      L(t), i = !1;
    },
    d(o) {
      o && D(l), s[e].d(o);
    }
  };
}
function io(n) {
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
    i: J,
    o: J,
    d(l) {
      l && D(t);
    }
  };
}
function ro(n) {
  let e, t;
  return e = new Xs({}), {
    c() {
      V(e.$$.fragment);
    },
    m(l, i) {
      Z(e, l, i), t = !0;
    },
    i(l) {
      t || (C(e.$$.fragment, l), t = !0);
    },
    o(l) {
      L(e.$$.fragment, l), t = !1;
    },
    d(l) {
      q(e, l);
    }
  };
}
function so(n) {
  let e, t;
  return e = new js({}), {
    c() {
      V(e.$$.fragment);
    },
    m(l, i) {
      Z(e, l, i), t = !0;
    },
    i(l) {
      t || (C(e.$$.fragment, l), t = !0);
    },
    o(l) {
      L(e.$$.fragment, l), t = !1;
    },
    d(l) {
      q(e, l);
    }
  };
}
function ao(n) {
  let e, t;
  return e = new qs({}), {
    c() {
      V(e.$$.fragment);
    },
    m(l, i) {
      Z(e, l, i), t = !0;
    },
    i(l) {
      t || (C(e.$$.fragment, l), t = !0);
    },
    o(l) {
      L(e.$$.fragment, l), t = !1;
    },
    d(l) {
      q(e, l);
    }
  };
}
function oo(n) {
  let e, t, l, i, r, s, a, o;
  const u = [lo, no], c = [];
  function f(g, p) {
    return p & /*visited, items, currentId*/
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
      e = U("button"), i.c(), w(e, "aria-current", r = /*item*/
      n[7].id === /*currentId*/
      n[2] ? "step" : void 0), Ve(e, "not-visited", !/*visited*/
      n[1].includes(
        /*item*/
        n[7].id
      )), Ve(
        e,
        "current",
        /*item*/
        n[7].id === /*currentId*/
        n[2]
      ), Ve(
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
    m(g, p) {
      M(g, e, p), c[l].m(e, null), s = !0, a || (o = K(e, "click", d), a = !0);
    },
    p(g, p) {
      n = g;
      let h = l;
      l = f(n, p), l === h ? c[l].p(n, p) : (fe(), L(c[h], 1, 1, () => {
        c[h] = null;
      }), de(), i = c[l], i ? i.p(n, p) : (i = c[l] = u[l](n), i.c()), C(i, 1), i.m(e, null)), (!s || p & /*items, currentId*/
      5 && r !== (r = /*item*/
      n[7].id === /*currentId*/
      n[2] ? "step" : void 0)) && w(e, "aria-current", r), (!s || p & /*visited, items*/
      3) && Ve(e, "not-visited", !/*visited*/
      n[1].includes(
        /*item*/
        n[7].id
      )), (!s || p & /*items, currentId*/
      5) && Ve(
        e,
        "current",
        /*item*/
        n[7].id === /*currentId*/
        n[2]
      ), (!s || p & /*visited, items, currentId*/
      7) && Ve(
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
      L(i), s = !1;
    },
    d(g) {
      g && D(e), c[l].d(), a = !1, o();
    }
  };
}
function vl(n) {
  let e;
  return {
    c() {
      e = U("div"), w(e, "class", "step-line svelte-swalin"), w(e, "aria-hidden", "true");
    },
    m(t, l) {
      M(t, e, l);
    },
    d(t) {
      t && D(e);
    }
  };
}
function Cl(n) {
  let e, t, l, i, r = (
    /*item*/
    n[7].label + ""
  ), s, a, o, u;
  t = new oa({
    props: {
      content: (
        /*tooltipMap*/
        n[4][
          /*item*/
          n[7].id
        ] ?? ""
      ),
      side: "bottom",
      $$slots: { default: [oo] },
      $$scope: { ctx: n }
    }
  });
  let c = (
    /*i*/
    n[9] < /*items*/
    n[0].length - 1 && vl()
  );
  return {
    c() {
      e = U("div"), V(t.$$.fragment), l = W(), i = U("p"), s = le(r), a = W(), c && c.c(), o = Ie(), w(e, "class", "step svelte-swalin");
    },
    m(f, d) {
      M(f, e, d), Z(t, e, null), T(e, l), T(e, i), T(i, s), M(f, a, d), c && c.m(f, d), M(f, o, d), u = !0;
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
      f[7].label + "") && be(s, r), /*i*/
      f[9] < /*items*/
      f[0].length - 1 ? c || (c = vl(), c.c(), c.m(o.parentNode, o)) : c && (c.d(1), c = null);
    },
    i(f) {
      u || (C(t.$$.fragment, f), u = !0);
    },
    o(f) {
      L(t.$$.fragment, f), u = !1;
    },
    d(f) {
      f && (D(e), D(a), D(o)), q(t), c && c.d(f);
    }
  };
}
function uo(n) {
  let e, t, l = Ce(
    /*items*/
    n[0]
  ), i = [];
  for (let s = 0; s < l.length; s += 1)
    i[s] = Cl(bl(n, l, s));
  const r = (s) => L(i[s], 1, 1, () => {
    i[s] = null;
  });
  return {
    c() {
      e = U("div");
      for (let s = 0; s < i.length; s += 1)
        i[s].c();
      w(e, "class", "steps svelte-swalin");
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
        l = Ce(
          /*items*/
          s[0]
        );
        let o;
        for (o = 0; o < l.length; o += 1) {
          const u = bl(s, l, o);
          i[o] ? (i[o].p(u, a), C(i[o], 1)) : (i[o] = Cl(u), i[o].c(), C(i[o], 1), i[o].m(e, null));
        }
        for (fe(), o = l.length; o < i.length; o += 1)
          r(o);
        de();
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
        L(i[a]);
      t = !1;
    },
    d(s) {
      s && D(e), je(i, s);
    }
  };
}
function co(n, e, t) {
  let { items: l = [] } = e, { visited: i = [] } = e, { currentId: r = null } = e, { status: s = {} } = e, { tooltipMap: a = {} } = e;
  const o = ze(), u = (c) => o("select", c.id);
  return n.$$set = (c) => {
    "items" in c && t(0, l = c.items), "visited" in c && t(1, i = c.visited), "currentId" in c && t(2, r = c.currentId), "status" in c && t(3, s = c.status), "tooltipMap" in c && t(4, a = c.tooltipMap);
  }, [l, i, r, s, a, o, u];
}
class $l extends te {
  constructor(e) {
    super(), ee(this, e, co, uo, Q, {
      items: 0,
      visited: 1,
      currentId: 2,
      status: 3,
      tooltipMap: 4
    });
  }
}
function fo(n) {
  let e, t;
  return e = new $l({
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
      V(e.$$.fragment);
    },
    m(l, i) {
      Z(e, l, i), t = !0;
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
      L(e.$$.fragment, l), t = !1;
    },
    d(l) {
      q(e, l);
    }
  };
}
function go(n, e, t) {
  const l = ze(), i = [
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
class mo extends te {
  constructor(e) {
    super(), ee(this, e, go, fo, Q, { currentId: 0, visited: 1 });
  }
}
function ho(n) {
  let e, t, l, i, r, s, a, o, u, c, f;
  return l = new ra({}), {
    c() {
      e = U("div"), t = U("button"), V(l.$$.fragment), i = W(), r = U("span"), r.textContent = "Back to Overview", s = W(), a = U("span"), o = le(
        /*title*/
        n[0]
      ), w(a, "class", "back-container__title svelte-1p6ln66"), w(t, "type", "button"), w(t, "class", "back-container svelte-1p6ln66"), Yt(e, "display", "flex"), Yt(e, "align-items", "center"), Yt(e, "gap", "0.5rem");
    },
    m(d, g) {
      M(d, e, g), T(e, t), Z(l, t, null), T(t, i), T(t, r), T(t, s), T(t, a), T(a, o), u = !0, c || (f = K(
        t,
        "click",
        /*onBack*/
        n[1]
      ), c = !0);
    },
    p(d, [g]) {
      (!u || g & /*title*/
      1) && be(
        o,
        /*title*/
        d[0]
      );
    },
    i(d) {
      u || (C(l.$$.fragment, d), u = !0);
    },
    o(d) {
      L(l.$$.fragment, d), u = !1;
    },
    d(d) {
      d && D(e), q(l), c = !1, f();
    }
  };
}
function po(n, e, t) {
  let { title: l = "Engineering Wizard" } = e;
  const i = ze();
  function r() {
    i("back");
  }
  return n.$$set = (s) => {
    "title" in s && t(0, l = s.title);
  }, [l, r];
}
class xl extends te {
  constructor(e) {
    super(), ee(this, e, po, ho, Q, { title: 0 });
  }
}
function Il(n, e, t) {
  const l = n.slice();
  return l[3] = e[t], l[5] = t, l;
}
function Al(n, e, t) {
  const l = n.slice();
  return l[6] = e[t], l;
}
function _o(n) {
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
      e = U("div"), t = U("span"), i = le(l), r = W(), w(t, "class", "plugin-item__name svelte-siq5x1"), w(e, "class", "plugin-item svelte-siq5x1");
    },
    m(s, a) {
      M(s, e, a), T(e, t), T(t, i), T(e, r);
    },
    p(s, a) {
      a & /*pluginGroups*/
      1 && l !== (l = /*plugin*/
      s[6].name + "") && be(i, l);
    },
    d(s) {
      s && D(e);
    }
  };
}
function kl(n) {
  let e, t, l, i, r, s = (
    /*group*/
    n[3].title + ""
  ), a, o, u, c, f = Ce(
    /*group*/
    n[3].plugins
  ), d = [];
  for (let g = 0; g < f.length; g += 1)
    d[g] = yl(Al(n, f, g));
  return {
    c() {
      e = U("div"), t = U("div"), l = U("span"), l.textContent = `${/*i*/
      n[5] + 1}.`, i = W(), r = U("span"), a = le(s), o = W(), u = U("div");
      for (let g = 0; g < d.length; g += 1)
        d[g].c();
      c = W(), w(l, "class", "plugin__index svelte-siq5x1"), w(r, "class", "plugin__title svelte-siq5x1"), w(t, "class", "plugin__group-title svelte-siq5x1"), w(u, "class", "plugin__items svelte-siq5x1"), w(e, "class", "plugin svelte-siq5x1");
    },
    m(g, p) {
      M(g, e, p), T(e, t), T(t, l), T(t, i), T(t, r), T(r, a), T(e, o), T(e, u);
      for (let h = 0; h < d.length; h += 1)
        d[h] && d[h].m(u, null);
      T(e, c);
    },
    p(g, p) {
      if (p & /*pluginGroups*/
      1 && s !== (s = /*group*/
      g[3].title + "") && be(a, s), p & /*pluginGroups*/
      1) {
        f = Ce(
          /*group*/
          g[3].plugins
        );
        let h;
        for (h = 0; h < f.length; h += 1) {
          const b = Al(g, f, h);
          d[h] ? d[h].p(b, p) : (d[h] = yl(b), d[h].c(), d[h].m(u, null));
        }
        for (; h < d.length; h += 1)
          d[h].d(1);
        d.length = f.length;
      }
    },
    d(g) {
      g && D(e), je(d, g);
    }
  };
}
function bo(n) {
  let e, t, l, i, r, s, a;
  r = new ht({
    props: {
      variant: "raised",
      style: "--mdc-theme-primary: var(--on-brand); --mdc-theme-on-primary: var(--brand)",
      "aria-label": "Edit process",
      $$slots: { default: [_o] },
      $$scope: { ctx: n }
    }
  }), r.$on(
    "click",
    /*requestEdit*/
    n[1]
  );
  let o = Ce(
    /*pluginGroups*/
    n[0]
  ), u = [];
  for (let c = 0; c < o.length; c += 1)
    u[c] = kl(Il(n, o, c));
  return {
    c() {
      e = U("div"), t = U("div"), l = U("p"), l.textContent = "Process", i = W(), V(r.$$.fragment), s = W();
      for (let c = 0; c < u.length; c += 1)
        u[c].c();
      w(l, "class", "svelte-siq5x1"), w(t, "class", "plugins-list__header svelte-siq5x1"), w(e, "class", "plugins-list svelte-siq5x1");
    },
    m(c, f) {
      M(c, e, f), T(e, t), T(t, l), T(t, i), Z(r, t, null), T(e, s);
      for (let d = 0; d < u.length; d += 1)
        u[d] && u[d].m(e, null);
      a = !0;
    },
    p(c, [f]) {
      const d = {};
      if (f & /*$$scope*/
      512 && (d.$$scope = { dirty: f, ctx: c }), r.$set(d), f & /*pluginGroups*/
      1) {
        o = Ce(
          /*pluginGroups*/
          c[0]
        );
        let g;
        for (g = 0; g < o.length; g += 1) {
          const p = Il(c, o, g);
          u[g] ? u[g].p(p, f) : (u[g] = kl(p), u[g].c(), u[g].m(e, null));
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
      L(r.$$.fragment, c), a = !1;
    },
    d(c) {
      c && D(e), q(r), je(u, c);
    }
  };
}
function vo(n, e, t) {
  let { pluginGroups: l = [] } = e;
  const i = ze(), r = () => i("editRequested");
  return n.$$set = (s) => {
    "pluginGroups" in s && t(0, l = s.pluginGroups);
  }, [l, r];
}
class Co extends te {
  constructor(e) {
    super(), ee(this, e, vo, bo, Q, { pluginGroups: 0 });
  }
}
function Io(n, e) {
  const t = (n == null ? void 0 : n.name) ?? "—";
  return [
    { label: "Engineering-Wizard", enabled: !0 },
    { label: e != null && e.edit ? `Edit ${t}` : t, enabled: !1 }
  ];
}
function Ao(n) {
  var e;
  return (e = n == null ? void 0 : n.pluginGroups) != null && e.length ? n.pluginGroups : [{ title: "Process", plugins: (n == null ? void 0 : n.plugins) ?? [] }];
}
function yo() {
  var e;
  const n = document.querySelector("open-scd");
  return ((e = n == null ? void 0 : n.shadowRoot) == null ? void 0 : e.querySelector("compas-layout")) ?? null;
}
function ko(n) {
  var e;
  (e = yo()) == null || e.dispatchEvent(
    new CustomEvent("toggle-editor-tabs", {
      detail: { visible: n },
      bubbles: !0,
      composed: !0
    })
  );
}
async function wo(n) {
  if (!customElements.get(n.id)) {
    const e = await import(
      /* @vite-ignore */
      n.src
    );
    customElements.define(n.id, e.default);
  }
}
async function Lo(n) {
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
const gt = kt(!0);
gt.subscribe((n) => {
  ko(n);
});
function wl(n, e, t) {
  const l = n.slice();
  return l[5] = e[t], l[7] = t, l;
}
function Ll(n, e, t) {
  const l = n.slice();
  return l[8] = e[t], l[10] = t, l;
}
function So(n) {
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
  let e, t, l, i, r, s, a, o = (
    /*plugin*/
    n[8].name + ""
  ), u, c, f, d;
  function g() {
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
      e = U("div"), t = U("button"), l = U("span"), l.textContent = "−", s = W(), a = U("span"), u = le(o), c = W(), w(l, "aria-hidden", "true"), w(l, "class", "plugin-item__minus svelte-qk2r5z"), w(t, "class", "plugin-item__remove svelte-qk2r5z"), w(t, "aria-label", i = `Remove ${/*plugin*/
      n[8].name}`), w(t, "title", r = `Remove ${/*plugin*/
      n[8].name}`), w(a, "class", "plugin-item__name svelte-qk2r5z"), w(e, "class", "plugin-item svelte-qk2r5z");
    },
    m(p, h) {
      M(p, e, h), T(e, t), T(t, l), T(e, s), T(e, a), T(a, u), T(e, c), f || (d = K(t, "click", g), f = !0);
    },
    p(p, h) {
      n = p, h & /*pluginGroups*/
      1 && i !== (i = `Remove ${/*plugin*/
      n[8].name}`) && w(t, "aria-label", i), h & /*pluginGroups*/
      1 && r !== (r = `Remove ${/*plugin*/
      n[8].name}`) && w(t, "title", r), h & /*pluginGroups*/
      1 && o !== (o = /*plugin*/
      n[8].name + "") && be(u, o);
    },
    d(p) {
      p && D(e), f = !1, d();
    }
  };
}
function Rl(n) {
  let e, t, l, i, r, s = (
    /*group*/
    n[5].title + ""
  ), a, o, u, c, f = Ce(
    /*group*/
    n[5].plugins
  ), d = [];
  for (let g = 0; g < f.length; g += 1)
    d[g] = Sl(Ll(n, f, g));
  return {
    c() {
      e = U("div"), t = U("div"), l = U("span"), l.textContent = `${/*i*/
      n[7] + 1}.`, i = W(), r = U("span"), a = le(s), o = W(), u = U("div");
      for (let g = 0; g < d.length; g += 1)
        d[g].c();
      c = W(), w(l, "class", "plugin__index svelte-qk2r5z"), w(r, "class", "plugin__title svelte-qk2r5z"), w(t, "class", "plugin__group-title svelte-qk2r5z"), w(u, "class", "plugin__items svelte-qk2r5z"), w(e, "class", "plugin svelte-qk2r5z");
    },
    m(g, p) {
      M(g, e, p), T(e, t), T(t, l), T(t, i), T(t, r), T(r, a), T(e, o), T(e, u);
      for (let h = 0; h < d.length; h += 1)
        d[h] && d[h].m(u, null);
      T(e, c);
    },
    p(g, p) {
      if (p & /*pluginGroups*/
      1 && s !== (s = /*group*/
      g[5].title + "") && be(a, s), p & /*pluginGroups, removeOne*/
      5) {
        f = Ce(
          /*group*/
          g[5].plugins
        );
        let h;
        for (h = 0; h < f.length; h += 1) {
          const b = Ll(g, f, h);
          d[h] ? d[h].p(b, p) : (d[h] = Sl(b), d[h].c(), d[h].m(u, null));
        }
        for (; h < d.length; h += 1)
          d[h].d(1);
        d.length = f.length;
      }
    },
    d(g) {
      g && D(e), je(d, g);
    }
  };
}
function Ro(n) {
  let e, t, l, i, r, s, a;
  r = new ht({
    props: {
      variant: "raised",
      style: "--mdc-theme-primary: var(--on-brand); --mdc-theme-on-primary: var(--brand)",
      "aria-label": "Remove all plugins",
      $$slots: { default: [So] },
      $$scope: { ctx: n }
    }
  }), r.$on(
    "click",
    /*removeAllPlugins*/
    n[1]
  );
  let o = Ce(
    /*pluginGroups*/
    n[0]
  ), u = [];
  for (let c = 0; c < o.length; c += 1)
    u[c] = Rl(wl(n, o, c));
  return {
    c() {
      e = U("div"), t = U("div"), l = U("p"), l.textContent = "Process", i = W(), V(r.$$.fragment), s = W();
      for (let c = 0; c < u.length; c += 1)
        u[c].c();
      w(l, "class", "svelte-qk2r5z"), w(t, "class", "plugins-list__header svelte-qk2r5z"), w(e, "class", "plugins-list svelte-qk2r5z");
    },
    m(c, f) {
      M(c, e, f), T(e, t), T(t, l), T(t, i), Z(r, t, null), T(e, s);
      for (let d = 0; d < u.length; d += 1)
        u[d] && u[d].m(e, null);
      a = !0;
    },
    p(c, [f]) {
      const d = {};
      if (f & /*$$scope*/
      2048 && (d.$$scope = { dirty: f, ctx: c }), r.$set(d), f & /*pluginGroups, removeOne*/
      5) {
        o = Ce(
          /*pluginGroups*/
          c[0]
        );
        let g;
        for (g = 0; g < o.length; g += 1) {
          const p = wl(c, o, g);
          u[g] ? u[g].p(p, f) : (u[g] = Rl(p), u[g].c(), u[g].m(e, null));
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
      L(r.$$.fragment, c), a = !1;
    },
    d(c) {
      c && D(e), q(r), je(u, c);
    }
  };
}
function Eo(n, e, t) {
  let { pluginGroups: l = [] } = e;
  const i = ze(), r = () => i("removeAllPlugins"), s = (o, u) => {
    const c = l[o], f = c.plugins[u];
    i("removePlugin", { groupIndex: o, pluginIndex: u, group: c, plugin: f });
  }, a = (o, u) => s(o, u);
  return n.$$set = (o) => {
    "pluginGroups" in o && t(0, l = o.pluginGroups);
  }, [l, r, s, a];
}
class Po extends te {
  constructor(e) {
    super(), ee(this, e, Eo, Ro, Q, { pluginGroups: 0 });
  }
}
function Do(n) {
  let e, t;
  return e = new Po({
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
      V(e.$$.fragment);
    },
    m(l, i) {
      Z(e, l, i), t = !0;
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
      L(e.$$.fragment, l), t = !1;
    },
    d(l) {
      q(e, l);
    }
  };
}
function Ho(n, e, t) {
  let { pluginGroups: l = [] } = e, { proc: i = null } = e;
  const r = (a) => console.log("remove all plugins", a), s = (a) => console.log("remove one", a.detail);
  return n.$$set = (a) => {
    "pluginGroups" in a && t(0, l = a.pluginGroups), "proc" in a && t(1, i = a.proc);
  }, [l, i, r, s];
}
class Mo extends te {
  constructor(e) {
    super(), ee(this, e, Ho, Do, Q, { pluginGroups: 0, proc: 1 });
  }
}
const To = "data:application/xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHZhbGlkYXRpb25zPgogIDx2YWxpZGF0aW9uPgogICAgPGlkPmNvbW0tc3VibmV0LTAwMTwvaWQ+CiAgICA8bmFtZT5TdWJuZXQgQWRkcmVzcyBWYWxpZGl0eTwvbmFtZT4KICAgIDx2YWxpZGF0b3I+Y2hlY2stc3VibmV0LWFkZHJlc3M8L3ZhbGlkYXRvcj4KICA8L3ZhbGlkYXRpb24+CiAgPHZhbGlkYXRpb24+CiAgICA8aWQ+Z3NlLWNvbmZpZy0wMDI8L2lkPgogICAgPG5hbWU+R1NFIENvbnRyb2wgQmxvY2tzIENvbmZpZ3VyYXRpb248L25hbWU+CiAgICA8dmFsaWRhdG9yPmNoZWNrLWdzZS1jb25maWc8L3ZhbGlkYXRvcj4KICA8L3ZhbGlkYXRpb24+CiAgPHZhbGlkYXRpb24+CiAgICA8aWQ+c212LWNvbmZpZy0wMDM8L2lkPgogICAgPG5hbWU+U01WIENvbnRyb2wgQmxvY2tzIENvbmZpZ3VyYXRpb248L25hbWU+CiAgICA8dmFsaWRhdG9yPmNoZWNrLXNtdi1jb25maWc8L3ZhbGlkYXRvcj4KICA8L3ZhbGlkYXRpb24+CjwvdmFsaWRhdGlvbnM+Cgo=", Fo = "data:application/xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHZhbGlkYXRpb25zPgogIDx2YWxpZGF0aW9uPgogICAgPGlkPmllZC1uYW1lLTAwMTwvaWQ+CiAgICA8bmFtZT5JRUQgTmFtZSBGb3JtYXQ8L25hbWU+CiAgICA8dmFsaWRhdG9yPmNoZWNrLWllZC1uYW1lLWZvcm1hdDwvdmFsaWRhdG9yPgogIDwvdmFsaWRhdGlvbj4KICA8dmFsaWRhdGlvbj4KICAgIDxpZD5hcC1jb25maWctMDAyPC9pZD4KICAgIDxuYW1lPkFjY2VzcyBQb2ludCBDb25maWd1cmF0aW9uPC9uYW1lPgogICAgPHZhbGlkYXRvcj5jaGVjay1hY2Nlc3MtcG9pbnQtY29uZmlnPC92YWxpZGF0b3I+CiAgPC92YWxpZGF0aW9uPgogIDx2YWxpZGF0aW9uPgogICAgPGlkPmxuLWFzc2lnbi0wMDM8L2lkPgogICAgPG5hbWU+TG9naWNhbCBOb2RlIEFzc2lnbm1lbnRzPC9uYW1lPgogICAgPHZhbGlkYXRvcj5jaGVjay1sbi1hc3NpZ25tZW50czwvdmFsaWRhdG9yPgogIDwvdmFsaWRhdGlvbj4KPC92YWxpZGF0aW9ucz4KCg==", Go = "data:application/xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHZhbGlkYXRpb25zPgogIDx2YWxpZGF0aW9uPgogICAgPGlkPnN1YnN0YXRpb24tc3RydWN0dXJlLTAwMTwvaWQ+CiAgICA8bmFtZT5TdWJzdGF0aW9uIFN0cnVjdHVyZSBJbnRlZ3JpdHk8L25hbWU+CiAgICA8dmFsaWRhdG9yPmNoZWNrLXN1YnN0YXRpb24tc3RydWN0dXJlPC92YWxpZGF0b3I+CiAgPC92YWxpZGF0aW9uPgogIDx2YWxpZGF0aW9uPgogICAgPGlkPnZvbHRhZ2UtbGV2ZWwtdW5pcXVlbmVzcy0wMDI8L2lkPgogICAgPG5hbWU+Vm9sdGFnZSBMZXZlbCBOYW1lIFVuaXF1ZW5lc3M8L25hbWU+CiAgICA8dmFsaWRhdG9yPmNoZWNrLXZsLW5hbWUtdW5pcXVlbmVzczwvdmFsaWRhdG9yPgogIDwvdmFsaWRhdGlvbj4KICA8dmFsaWRhdGlvbj4KICAgIDxpZD5iYXktbmFtaW5nLTAwMzwvaWQ+CiAgICA8bmFtZT5CYXkgTmFtaW5nIENvbnZlbnRpb248L25hbWU+CiAgICA8dmFsaWRhdG9yPmNoZWNrLWJheS1uYW1pbmc8L3ZhbGlkYXRvcj4KICA8L3ZhbGlkYXRpb24+CjwvdmFsaWRhdGlvbnM+Cgo=", Uo = "data:application/xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHZhbGlkYXRpb25zPgogIDx2YWxpZGF0aW9uPgogICAgPGlkPnRlbXBsYXRlLWlucHV0cy0wMDE8L2lkPgogICAgPG5hbWU+UmVxdWlyZWQgSW5wdXRzIFByZXNlbnQ8L25hbWU+CiAgICA8dmFsaWRhdG9yPmNoZWNrLXJlcXVpcmVkLWlucHV0czwvdmFsaWRhdG9yPgogIDwvdmFsaWRhdGlvbj4KICA8dmFsaWRhdGlvbj4KICAgIDxpZD50Zy1uYW1pbmctMDAyPC9pZD4KICAgIDxuYW1lPlRlbXBsYXRlIE5hbWluZyBDb252ZW50aW9uPC9uYW1lPgogICAgPHZhbGlkYXRvcj5jaGVjay10ZW1wbGF0ZS1uYW1pbmc8L3ZhbGlkYXRvcj4KICA8L3ZhbGlkYXRpb24+CiAgPHZhbGlkYXRpb24+CiAgICA8aWQ+dGctY29tcGF0LTAwMzwvaWQ+CiAgICA8bmFtZT5UZW1wbGF0ZSBDb21wYXRpYmlsaXR5PC9uYW1lPgogICAgPHZhbGlkYXRvcj5jaGVjay10ZW1wbGF0ZS1jb21wYXRpYmlsaXR5PC92YWxpZGF0b3I+CiAgPC92YWxpZGF0aW9uPgo8L3ZhbGlkYXRpb25zPgoK";
function El(n, e, t) {
  const l = n.slice();
  return l[18] = e[t], l[20] = t, l;
}
function Pl(n, e, t) {
  const l = n.slice();
  return l[21] = e[t], l[23] = t, l;
}
function Dl(n) {
  let e, t = Ce(
    /*group*/
    n[18].plugins
  ), l = [];
  for (let i = 0; i < t.length; i += 1)
    l[i] = Hl(Pl(n, t, i));
  return {
    c() {
      for (let i = 0; i < l.length; i += 1)
        l[i].c();
      e = Ie();
    },
    m(i, r) {
      for (let s = 0; s < l.length; s += 1)
        l[s] && l[s].m(i, r);
      M(i, e, r);
    },
    p(i, r) {
      if (r & /*selectedIdx, activePluginIdx, selectPlugin, pluginGroups*/
      263) {
        t = Ce(
          /*group*/
          i[18].plugins
        );
        let s;
        for (s = 0; s < t.length; s += 1) {
          const a = Pl(i, t, s);
          l[s] ? l[s].p(a, r) : (l[s] = Hl(a), l[s].c(), l[s].m(e.parentNode, e));
        }
        for (; s < l.length; s += 1)
          l[s].d(1);
        l.length = t.length;
      }
    },
    d(i) {
      i && D(e), je(l, i);
    }
  };
}
function Hl(n) {
  let e, t, l = (
    /*plugin*/
    n[21].name + ""
  ), i, r, s, a;
  function o() {
    return (
      /*click_handler_1*/
      n[15](
        /*gIdx*/
        n[20],
        /*idx*/
        n[23]
      )
    );
  }
  return {
    c() {
      e = U("button"), t = U("span"), i = le(l), r = W(), w(e, "type", "button"), w(e, "class", "validation-groups__plugin svelte-o5wbot"), Ve(
        e,
        "active",
        /*gIdx*/
        n[20] === /*selectedIdx*/
        n[1] && /*idx*/
        n[23] === /*activePluginIdx*/
        n[2]
      );
    },
    m(u, c) {
      M(u, e, c), T(e, t), T(t, i), T(e, r), s || (a = K(e, "click", o), s = !0);
    },
    p(u, c) {
      n = u, c & /*pluginGroups*/
      1 && l !== (l = /*plugin*/
      n[21].name + "") && be(i, l), c & /*selectedIdx, activePluginIdx*/
      6 && Ve(
        e,
        "active",
        /*gIdx*/
        n[20] === /*selectedIdx*/
        n[1] && /*idx*/
        n[23] === /*activePluginIdx*/
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
    n[18].title + ""
  ), i, r, s, a, o, u;
  function c() {
    return (
      /*click_handler*/
      n[14](
        /*gIdx*/
        n[20]
      )
    );
  }
  let f = (
    /*gIdx*/
    n[20] === /*selectedIdx*/
    n[1] && Dl(n)
  );
  return {
    c() {
      e = U("div"), t = U("button"), i = le(l), s = W(), f && f.c(), a = W(), w(t, "type", "button"), w(t, "class", "validation-groups__group-title svelte-o5wbot"), w(t, "aria-pressed", r = /*gIdx*/
      n[20] === /*selectedIdx*/
      n[1]), w(e, "class", "validation-groups__group svelte-o5wbot"), Ve(
        e,
        "expanded",
        /*gIdx*/
        n[20] === /*selectedIdx*/
        n[1]
      );
    },
    m(d, g) {
      M(d, e, g), T(e, t), T(t, i), T(e, s), f && f.m(e, null), T(e, a), o || (u = K(t, "click", c), o = !0);
    },
    p(d, g) {
      n = d, g & /*pluginGroups*/
      1 && l !== (l = /*group*/
      n[18].title + "") && be(i, l), g & /*selectedIdx*/
      2 && r !== (r = /*gIdx*/
      n[20] === /*selectedIdx*/
      n[1]) && w(t, "aria-pressed", r), /*gIdx*/
      n[20] === /*selectedIdx*/
      n[1] ? f ? f.p(n, g) : (f = Dl(n), f.c(), f.m(e, a)) : f && (f.d(1), f = null), g & /*selectedIdx*/
      2 && Ve(
        e,
        "expanded",
        /*gIdx*/
        n[20] === /*selectedIdx*/
        n[1]
      );
    },
    d(d) {
      d && D(e), f && f.d(), o = !1, u();
    }
  };
}
function Tl(n) {
  let e, t, l, i = (
    /*currentPlugin*/
    n[3].name + ""
  ), r, s;
  function a(c, f) {
    return (
      /*loadingXml*/
      c[5] ? Bo : (
        /*xmlError*/
        c[6] ? Wo : Oo
      )
    );
  }
  let o = a(n), u = o(n);
  return {
    c() {
      e = U("div"), t = U("h4"), l = le("XML for: "), r = le(i), s = W(), u.c(), w(t, "class", "xml-viewer__title svelte-o5wbot"), w(e, "class", "xml-viewer svelte-o5wbot");
    },
    m(c, f) {
      M(c, e, f), T(e, t), T(t, l), T(t, r), T(e, s), u.m(e, null);
    },
    p(c, f) {
      f & /*currentPlugin*/
      8 && i !== (i = /*currentPlugin*/
      c[3].name + "") && be(r, i), o === (o = a(c)) && u ? u.p(c, f) : (u.d(1), u = o(c), u && (u.c(), u.m(e, null)));
    },
    d(c) {
      c && D(e), u.d();
    }
  };
}
function Oo(n) {
  let e, t, l;
  return {
    c() {
      e = U("div"), t = U("pre"), l = le(
        /*xmlText*/
        n[4]
      ), w(t, "class", "svelte-o5wbot"), w(e, "class", "xml-viewer__box svelte-o5wbot");
    },
    m(i, r) {
      M(i, e, r), T(e, t), T(t, l);
    },
    p(i, r) {
      r & /*xmlText*/
      16 && be(
        l,
        /*xmlText*/
        i[4]
      );
    },
    d(i) {
      i && D(e);
    }
  };
}
function Wo(n) {
  let e, t;
  return {
    c() {
      e = U("p"), t = le(
        /*xmlError*/
        n[6]
      ), w(e, "class", "error svelte-o5wbot");
    },
    m(l, i) {
      M(l, e, i), T(e, t);
    },
    p(l, i) {
      i & /*xmlError*/
      64 && be(
        t,
        /*xmlError*/
        l[6]
      );
    },
    d(l) {
      l && D(e);
    }
  };
}
function Bo(n) {
  let e;
  return {
    c() {
      e = U("p"), e.textContent = "Loading…";
    },
    m(t, l) {
      M(t, e, l);
    },
    p: J,
    d(t) {
      t && D(e);
    }
  };
}
function No(n) {
  let e, t, l, i = Ce(
    /*pluginGroups*/
    n[0]
  ), r = [];
  for (let a = 0; a < i.length; a += 1)
    r[a] = Ml(El(n, i, a));
  let s = (
    /*currentPlugin*/
    n[3] && Tl(n)
  );
  return {
    c() {
      e = U("div");
      for (let a = 0; a < r.length; a += 1)
        r[a].c();
      t = W(), s && s.c(), l = Ie(), w(e, "class", "validation-groups svelte-o5wbot");
    },
    m(a, o) {
      M(a, e, o);
      for (let u = 0; u < r.length; u += 1)
        r[u] && r[u].m(e, null);
      M(a, t, o), s && s.m(a, o), M(a, l, o);
    },
    p(a, [o]) {
      if (o & /*selectedIdx, pluginGroups, activePluginIdx, selectPlugin, selectGroup*/
      391) {
        i = Ce(
          /*pluginGroups*/
          a[0]
        );
        let u;
        for (u = 0; u < i.length; u += 1) {
          const c = El(a, i, u);
          r[u] ? r[u].p(c, o) : (r[u] = Ml(c), r[u].c(), r[u].m(e, null));
        }
        for (; u < r.length; u += 1)
          r[u].d(1);
        r.length = i.length;
      }
      /*currentPlugin*/
      a[3] ? s ? s.p(a, o) : (s = Tl(a), s.c(), s.m(l.parentNode, l)) : s && (s.d(1), s = null);
    },
    i: J,
    o: J,
    d(a) {
      a && (D(e), D(t), D(l)), je(r, a), s && s.d(a);
    }
  };
}
function Zo(n, e, t) {
  let l, i, r;
  var s, a, o;
  let { pluginGroups: u = [] } = e, c = null, f = null, d = "", g = !1, p = "", h = null;
  function b(F) {
    return Nt(this, void 0, void 0, function* () {
      t(5, g = !0), t(6, p = ""), t(4, d = ""), h == null || h.abort(), h = new AbortController();
      try {
        const v = new URL((/* @__PURE__ */ Object.assign({ "../../assets/validations/communication-explorer.xml": To, "../../assets/validations/ied-editor.xml": Fo, "../../assets/validations/substation-explorer.xml": Go, "../../assets/validations/template-generator.xml": Uo }))[`../../assets/validations/${F}.xml`], import.meta.url).href, m = yield fetch(v, {
          cache: "no-cache",
          signal: h.signal
        });
        if (!m.ok) {
          if (m.status === 404) {
            t(4, d = "(No XML found for this plugin.)");
            return;
          }
          throw new Error(`HTTP ${m.status}`);
        }
        t(4, d = yield m.text());
      } catch (v) {
        if ((v == null ? void 0 : v.name) === "AbortError")
          return;
        t(6, p = (v == null ? void 0 : v.message) || "Failed to load XML.");
      } finally {
        t(5, g = !1);
      }
    });
  }
  function S(F) {
    var v;
    const m = u[F];
    t(1, c = F), t(2, f = !((v = m == null ? void 0 : m.plugins) === null || v === void 0) && v.length ? 0 : null);
  }
  function A(F, v) {
    t(1, c = F), t(2, f = v);
  }
  const R = (F) => S(F), _ = (F, v) => A(F, v);
  return n.$$set = (F) => {
    "pluginGroups" in F && t(0, u = F.pluginGroups);
  }, n.$$.update = () => {
    n.$$.dirty & /*pluginGroups, selectedIdx, _a, _b*/
    1539 && u != null && u.length && (c == null || c >= u.length) && (t(1, c = 0), t(2, f = !(t(10, a = t(9, s = u[0]) === null || s === void 0 ? void 0 : s.plugins) === null || a === void 0) && a.length ? 0 : null)), n.$$.dirty & /*selectedIdx, pluginGroups*/
    3 && t(13, l = c != null ? u[c] : null), n.$$.dirty & /*currentGroup, activePluginIdx*/
    8196 && t(3, i = l && f != null ? l.plugins[f] : null), n.$$.dirty & /*currentPlugin, _c*/
    2056 && t(12, r = t(11, o = i == null ? void 0 : i.id) !== null && o !== void 0 ? o : null), n.$$.dirty & /*currentPluginId*/
    4096 && r && b(r);
  }, [
    u,
    c,
    f,
    i,
    d,
    g,
    p,
    S,
    A,
    s,
    a,
    o,
    r,
    l,
    R,
    _
  ];
}
class qo extends te {
  constructor(e) {
    super(), ee(this, e, Zo, No, Q, { pluginGroups: 0 });
  }
}
function Vo(n) {
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
  ), r = new ht({
    props: {
      variant: "raised",
      style: "--mdc-theme-primary: var(--brand); --mdc-theme-on-primary: var(--on-brand)",
      disabled: !/*currentProcess*/
      n[0],
      "aria-label": "Start process",
      $$slots: { default: [zo] },
      $$scope: { ctx: n }
    }
  }), r.$on(
    "click",
    /*startProcess*/
    n[9]
  ), a = new Co({
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
      e = U("div"), t = U("div"), V(l.$$.fragment), i = W(), V(r.$$.fragment), s = W(), V(a.$$.fragment), w(t, "class", "header svelte-evkqad"), w(e, "class", "step-content svelte-evkqad");
    },
    m(u, c) {
      M(u, e, c), T(e, t), Z(l, t, null), T(t, i), Z(r, t, null), T(e, s), Z(a, e, null), o = !0;
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
      L(l.$$.fragment, u), L(r.$$.fragment, u), L(a.$$.fragment, u), o = !1;
    },
    d(u) {
      u && D(e), q(l), q(r), q(a);
    }
  };
}
function jo(n) {
  let e, t, l, i, r, s, a, o, u, c, f, d, g, p, h, b, S, A;
  t = new xl({}), t.$on(
    "back",
    /*exitEditing*/
    n[11]
  ), i = new mo({
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
  const R = [Yo, Xo], _ = [];
  function F(v, m) {
    return (
      /*currentStepId*/
      v[2] === "process-definition" ? 0 : 1
    );
  }
  return p = F(n), h = _[p] = R[p](n), {
    c() {
      e = U("div"), V(t.$$.fragment), l = W(), V(i.$$.fragment), r = W(), s = U("div"), a = U("button"), o = le("Back"), u = W(), c = U("button"), f = le("Next"), d = W(), g = U("div"), h.c(), w(a, "type", "button"), w(a, "class", "btn btn--back svelte-evkqad"), a.disabled = /*isAtFirstStep*/
      n[5], w(a, "aria-label", "Previous step"), w(c, "type", "button"), w(c, "class", "btn btn--next svelte-evkqad"), c.disabled = /*isAtLastStep*/
      n[6], w(c, "aria-label", "Next step"), w(s, "class", "stepper-navigation svelte-evkqad"), w(e, "class", "stepper svelte-evkqad"), w(g, "class", "step-content svelte-evkqad");
    },
    m(v, m) {
      M(v, e, m), Z(t, e, null), T(e, l), Z(i, e, null), T(e, r), T(e, s), T(s, a), T(a, o), T(s, u), T(s, c), T(c, f), M(v, d, m), M(v, g, m), _[p].m(g, null), b = !0, S || (A = [
        K(
          a,
          "click",
          /*goToPreviousStep*/
          n[14]
        ),
        K(
          c,
          "click",
          /*goToNextStep*/
          n[13]
        )
      ], S = !0);
    },
    p(v, m) {
      const E = {};
      m & /*currentStepId*/
      4 && (E.currentId = /*currentStepId*/
      v[2]), m & /*visitedSteps*/
      16 && (E.visited = /*visitedSteps*/
      v[4]), i.$set(E), (!b || m & /*isAtFirstStep*/
      32) && (a.disabled = /*isAtFirstStep*/
      v[5]), (!b || m & /*isAtLastStep*/
      64) && (c.disabled = /*isAtLastStep*/
      v[6]);
      let B = p;
      p = F(v), p === B ? _[p].p(v, m) : (fe(), L(_[B], 1, 1, () => {
        _[B] = null;
      }), de(), h = _[p], h ? h.p(v, m) : (h = _[p] = R[p](v), h.c()), C(h, 1), h.m(g, null));
    },
    i(v) {
      b || (C(t.$$.fragment, v), C(i.$$.fragment, v), C(h), b = !0);
    },
    o(v) {
      L(t.$$.fragment, v), L(i.$$.fragment, v), L(h), b = !1;
    },
    d(v) {
      v && (D(e), D(d), D(g)), q(t), q(i), _[p].d(), S = !1, ge(A);
    }
  };
}
function zo(n) {
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
function Xo(n) {
  let e, t, l, i, r, s, a;
  return t = new on({
    props: {
      breadcrumbs: (
        /*breadcrumbs*/
        n[7]
      ),
      activeIndex: 2
    }
  }), t.$on(
    "click",
    /*handleBreadcrumbClick*/
    n[8]
  ), i = new ht({
    props: {
      variant: "raised",
      style: "--mdc-theme-primary: var(--brand); --mdc-theme-on-primary: var(--on-brand)",
      disabled: !/*currentProcess*/
      n[0],
      "aria-label": "Add validation",
      $$slots: { default: [Ko] },
      $$scope: { ctx: n }
    }
  }), i.$on("click", Fl), s = new qo({
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
  }), s.$on("addValidation", Fl), s.$on(
    "breadcrumbClick",
    /*handleBreadcrumbClick*/
    n[8]
  ), {
    c() {
      e = U("div"), V(t.$$.fragment), l = W(), V(i.$$.fragment), r = W(), V(s.$$.fragment), w(e, "class", "header svelte-evkqad");
    },
    m(o, u) {
      M(o, e, u), Z(t, e, null), T(e, l), Z(i, e, null), M(o, r, u), Z(s, o, u), a = !0;
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
      L(t.$$.fragment, o), L(i.$$.fragment, o), L(s.$$.fragment, o), a = !1;
    },
    d(o) {
      o && (D(e), D(r)), q(t), q(i), q(s, o);
    }
  };
}
function Yo(n) {
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
  ), i = new Mo({
    props: { pluginGroups: (
      /*pluginGroups*/
      n[3]
    ) }
  }), {
    c() {
      e = U("div"), V(t.$$.fragment), l = W(), V(i.$$.fragment), w(e, "class", "header svelte-evkqad");
    },
    m(s, a) {
      M(s, e, a), Z(t, e, null), M(s, l, a), Z(i, s, a), r = !0;
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
      L(t.$$.fragment, s), L(i.$$.fragment, s), r = !1;
    },
    d(s) {
      s && (D(e), D(l)), q(t), q(i, s);
    }
  };
}
function Ko(n) {
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
function Qo(n) {
  let e, t, l, i;
  const r = [jo, Vo], s = [];
  function a(o, u) {
    return (
      /*isEditing*/
      o[1] ? 0 : 1
    );
  }
  return t = a(n), l = s[t] = r[t](n), {
    c() {
      e = U("div"), l.c(), w(e, "class", "page-content svelte-evkqad");
    },
    m(o, u) {
      M(o, e, u), s[t].m(e, null), i = !0;
    },
    p(o, [u]) {
      let c = t;
      t = a(o), t === c ? s[t].p(o, u) : (fe(), L(s[c], 1, 1, () => {
        s[c] = null;
      }), de(), l = s[t], l ? l.p(o, u) : (l = s[t] = r[t](o), l.c()), C(l, 1), l.m(e, null));
    },
    i(o) {
      i || (C(l), i = !0);
    },
    o(o) {
      L(l), i = !1;
    },
    d(o) {
      o && D(e), s[t].d();
    }
  };
}
function Fl() {
  alert("Add New Validation clicked!");
}
function Jo(n, e, t) {
  let l, i, r, { currentProcess: s = null } = e;
  const a = ["process-definition", "validator-configuration"], o = ze();
  let u = !1, c = 0, f = a[0], d = [], g = [];
  function p(v) {
    v.detail.index === 0 && (gt.set(!0), o("back"));
  }
  function h() {
    s && o("start", s);
  }
  function b() {
    t(1, u = !0), gt.set(!1), t(15, c = 0), t(4, g = []);
  }
  function S() {
    t(1, u = !1), gt.set(!0), o("back");
  }
  function A(v) {
    const m = a.indexOf(v.detail);
    m !== -1 && t(15, c = m);
  }
  function R(v) {
    g.includes(v) || t(4, g = [...g, v]);
  }
  function _() {
    i || (R(f), t(15, c += 1), o("next"));
  }
  function F() {
    l || (t(15, c -= 1), o("previous"));
  }
  return n.$$set = (v) => {
    "currentProcess" in v && t(0, s = v.currentProcess);
  }, n.$$.update = () => {
    n.$$.dirty & /*currentStepIndex*/
    32768 && t(2, f = a[c]), n.$$.dirty & /*currentStepIndex*/
    32768 && t(5, l = c === 0), n.$$.dirty & /*currentStepIndex*/
    32768 && t(6, i = c === a.length - 1), n.$$.dirty & /*currentProcess, isEditing*/
    3 && t(7, r = Io(s, { edit: u })), n.$$.dirty & /*currentProcess*/
    1 && t(3, d = Ao(s));
  }, [
    s,
    u,
    f,
    d,
    g,
    l,
    i,
    r,
    p,
    h,
    b,
    S,
    A,
    _,
    F,
    c
  ];
}
class $o extends te {
  constructor(e) {
    super(), ee(this, e, Jo, Qo, Q, { currentProcess: 0 });
  }
}
function xo(n) {
  let e, t;
  return e = new $l({
    props: {
      items: (
        /*plugins*/
        n[0].map(Gl)
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
      V(e.$$.fragment);
    },
    m(l, i) {
      Z(e, l, i), t = !0;
    },
    p(l, [i]) {
      const r = {};
      i & /*plugins*/
      1 && (r.items = /*plugins*/
      l[0].map(Gl)), i & /*visited*/
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
      L(e.$$.fragment, l), t = !1;
    },
    d(l) {
      q(e, l);
    }
  };
}
const Gl = (n) => ({ id: n.id, label: n.name });
function eu(n, e, t) {
  let l, { plugins: i = [] } = e, { visited: r = [] } = e, { currentId: s = null } = e, { pluginStatus: a = {} } = e;
  const o = ze(), u = (c) => {
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
class tu extends te {
  constructor(e) {
    super(), ee(this, e, eu, xo, Q, {
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
      l && l.c(), t = Ie();
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
      e = U(
        /*tagName*/
        n[4]
      ), wt(
        /*tagName*/
        n[4]
      )(e, { class: "svelte-uyxnge" });
    },
    m(r, s) {
      M(r, e, s), l || (i = $(t = lu.call(null, e, {
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
      t && he(t.update) && s & /*doc, editCount*/
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
function nu(n) {
  let e, t, l, i, r, s, a, o, u, c, f, d, g, p;
  t = new xl({}), t.$on(
    "back",
    /*exitWorkflow*/
    n[9]
  ), i = new tu({
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
  let h = (
    /*tagName*/
    n[4] && Ul(n)
  );
  return {
    c() {
      e = U("div"), V(t.$$.fragment), l = W(), V(i.$$.fragment), r = W(), s = U("div"), a = U("button"), a.textContent = "Back", o = W(), u = U("button"), u.textContent = "Next", c = W(), h && h.c(), f = Ie(), w(a, "class", "back-button svelte-uyxnge"), w(u, "class", "next-button svelte-uyxnge"), w(s, "class", "stepper-navigation svelte-uyxnge"), w(e, "class", "stepper svelte-uyxnge");
    },
    m(b, S) {
      M(b, e, S), Z(t, e, null), T(e, l), Z(i, e, null), T(e, r), T(e, s), T(s, a), T(s, o), T(s, u), M(b, c, S), h && h.m(b, S), M(b, f, S), d = !0, g || (p = [
        K(
          a,
          "click",
          /*previousPlugin*/
          n[8]
        ),
        K(
          u,
          "click",
          /*nextPlugin*/
          n[7]
        )
      ], g = !0);
    },
    p(b, [S]) {
      const A = {};
      S & /*plugins*/
      4 && (A.plugins = /*plugins*/
      b[2]), S & /*visited*/
      32 && (A.visited = /*visited*/
      b[5]), S & /*tagName*/
      16 && (A.currentId = /*tagName*/
      b[4]), S & /*pluginStatus*/
      8 && (A.pluginStatus = /*pluginStatus*/
      b[3]), i.$set(A), /*tagName*/
      b[4] ? h ? h.p(b, S) : (h = Ul(b), h.c(), h.m(f.parentNode, f)) : h && (h.d(1), h = null);
    },
    i(b) {
      d || (C(t.$$.fragment, b), C(i.$$.fragment, b), d = !0);
    },
    o(b) {
      L(t.$$.fragment, b), L(i.$$.fragment, b), d = !1;
    },
    d(b) {
      b && (D(e), D(c), D(f)), q(t), q(i), h && h.d(b), g = !1, ge(p);
    }
  };
}
function lu(n, e) {
  return Object.assign(n, e), { update: (t) => Object.assign(n, t) };
}
function iu(n, e, t) {
  let { doc: l } = e, { editCount: i = -1 } = e, { host: r } = e, { plugins: s = [] } = e, a = null, o = [];
  const u = ["check", "warning", "error"];
  let c = {};
  const f = ze();
  function d(A) {
    return Nt(this, void 0, void 0, function* () {
      if (yield wo(A), t(4, a = A.id), !o.includes(A.id)) {
        t(5, o = [...o, A.id]);
        const R = s.findIndex((_) => _.id === A.id);
        t(3, c = Object.assign(Object.assign({}, c), {
          [A.id]: u[R % u.length]
        }));
      }
    });
  }
  function g() {
    h(1);
  }
  function p() {
    h(-1);
  }
  function h(A) {
    const R = s.findIndex((_) => _.id === a);
    d(s[(R + A + s.length) % s.length]);
  }
  Be(() => {
    s.length && (Lo(s).catch(console.error), d(s[0])), gt.set(!1);
  });
  function b() {
    gt.set(!0), f("exit");
  }
  const S = (A) => d(A.detail);
  return n.$$set = (A) => {
    "doc" in A && t(0, l = A.doc), "editCount" in A && t(1, i = A.editCount), "host" in A && t(10, r = A.host), "plugins" in A && t(2, s = A.plugins);
  }, n.$$.update = () => {
    n.$$.dirty & /*plugins, pluginStatus*/
    12 && s.reduce(
      (A, R) => {
        const _ = c[R.id];
        return A[R.id] = _ ?? "", A;
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
    p,
    b,
    r,
    S
  ];
}
class ru extends te {
  constructor(e) {
    super(), ee(this, e, iu, nu, Q, {
      doc: 0,
      editCount: 1,
      host: 10,
      plugins: 2
    });
  }
}
function su(n) {
  let e, t;
  return e = new to({
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
      V(e.$$.fragment);
    },
    m(l, i) {
      Z(e, l, i), t = !0;
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
      L(e.$$.fragment, l), t = !1;
    },
    d(l) {
      q(e, l);
    }
  };
}
function au(n) {
  let e, t;
  return e = new $o({
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
      V(e.$$.fragment);
    },
    m(l, i) {
      Z(e, l, i), t = !0;
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
      L(e.$$.fragment, l), t = !1;
    },
    d(l) {
      q(e, l);
    }
  };
}
function ou(n) {
  let e, t;
  return e = new ru({
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
      V(e.$$.fragment);
    },
    m(l, i) {
      Z(e, l, i), t = !0;
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
      L(e.$$.fragment, l), t = !1;
    },
    d(l) {
      q(e, l);
    }
  };
}
function uu(n) {
  let e, t, l, i;
  const r = [ou, au, su], s = [];
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
      t.c(), l = Ie();
    },
    m(o, u) {
      s[e].m(o, u), M(o, l, u), i = !0;
    },
    p(o, [u]) {
      let c = e;
      e = a(o), e === c ? s[e].p(o, u) : (fe(), L(s[c], 1, 1, () => {
        s[c] = null;
      }), de(), t = s[e], t ? t.p(o, u) : (t = s[e] = r[e](o), t.c()), C(t, 1), t.m(l.parentNode, l));
    },
    i(o) {
      i || (C(t), i = !0);
    },
    o(o) {
      L(t), i = !1;
    },
    d(o) {
      o && D(l), s[e].d(o);
    }
  };
}
function cu(n, e, t) {
  let { doc: l } = e, { editCount: i = -1 } = e, { host: r } = e, s = [], a = null, o = null, u = !0, c = "";
  const f = new URL("data:application/xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHByb2Nlc3Nlcz4KICA8cHJvY2Vzcz4KICAgIDxpZD5zdGFuZGFyZC1wcm9jZXNzLTE8L2lkPgogICAgPHZlcnNpb24+MC4wLjE8L3ZlcnNpb24+CiAgICA8bmFtZT5TdGFuZGFyZCBQcm9jZXNzIDE8L25hbWU+CiAgICA8ZGVzY3JpcHRpb24+CiAgICAgIFRoaXMgaXMgYSBzdGFuZGFyZGl6ZWQgcHJvY2VzcyB1c2VkIGZvciB0ZXN0aW5nIHB1cnBvc2VzIG9ubHkKICAgIDwvZGVzY3JpcHRpb24+CgogICAgPHBsdWdpbnMtc2VxdWVuY2U+CiAgICAgIDxncm91cD4KICAgICAgICA8dGl0bGU+RGF0YTwvdGl0bGU+CiAgICAgICAgPHBsdWdpbj4KICAgICAgICAgIDxpZD5zdWJzdGF0aW9uLWV4cGxvcmVyPC9pZD4KICAgICAgICAgIDxuYW1lPlN1YnN0YXRpb248L25hbWU+CiAgICAgICAgICA8c3JjPgogICAgICAgICAgICBodHRwczovL3BoaWxpcHBpbGlldnNraWJlYXJpbmdwb2ludGNvbS5naXRodWIuaW8vb3NjZC1vZmZpY2lhbC1wbHVnaW5zLXRlc3QvcGx1Z2lucy9lZGl0b3JzL3N1YnN0YXRpb24uanMKICAgICAgICAgIDwvc3JjPgogICAgICAgIDwvcGx1Z2luPgogICAgICA8L2dyb3VwPgoKICAgICAgPGdyb3VwPgogICAgICAgIDx0aXRsZT5Db25uZWN0aW9uPC90aXRsZT4KICAgICAgICA8cGx1Z2luPgogICAgICAgICAgPGlkPmllZC1lZGl0b3I8L2lkPgogICAgICAgICAgPG5hbWU+SUVEPC9uYW1lPgogICAgICAgICAgPHNyYz4KICAgICAgICAgICAgaHR0cHM6Ly9waGlsaXBwaWxpZXZza2liZWFyaW5ncG9pbnRjb20uZ2l0aHViLmlvL29zY2Qtb2ZmaWNpYWwtcGx1Z2lucy10ZXN0L3BsdWdpbnMvZWRpdG9ycy9pZWQuanMKICAgICAgICAgIDwvc3JjPgogICAgICAgIDwvcGx1Z2luPgoKICAgICAgICA8cGx1Z2luPgogICAgICAgICAgPGlkPnRlbXBsYXRlLWdlbmVyYXRvcjwvaWQ+CiAgICAgICAgICA8bmFtZT5UZW1wbGF0ZSBHZW5lcmF0b3I8L25hbWU+CiAgICAgICAgICA8c3JjPgogICAgICAgICAgICBodHRwczovL2FzZS1jb21wYXMuZ2l0aHViLmlvL2NvbXBhcy10cmFuc25ldGJ3LXBsdWdpbnMvYmVhcmluZ3BvaW50L2NvbXBhcy9wbHVnaW5zL3RlbXBsYXRlLWdlbmVyYXRvci9pbmRleC5qcwogICAgICAgICAgPC9zcmM+CiAgICAgICAgPC9wbHVnaW4+CgogICAgICA8L2dyb3VwPgogICAgICA8Z3JvdXA+CiAgICAgICAgPHRpdGxlPkNvbW11bmljYXRpb248L3RpdGxlPgogICAgICAgIDxwbHVnaW4+CiAgICAgICAgICA8aWQ+Y29tbXVuaWNhdGlvbi1leHBsb3JlcjwvaWQ+CiAgICAgICAgICA8bmFtZT5Db21tdW5pY2F0aW9uIEV4cGxvcmVyPC9uYW1lPgogICAgICAgICAgPHNyYz4KICAgICAgICAgICAgaHR0cHM6Ly9waGlsaXBwaWxpZXZza2liZWFyaW5ncG9pbnRjb20uZ2l0aHViLmlvL29zY2Qtb2ZmaWNpYWwtcGx1Z2lucy10ZXN0L3BsdWdpbnMvZWRpdG9ycy9jb21tdW5pY2F0aW9uLmpzCiAgICAgICAgICA8L3NyYz4KICAgICAgICA8L3BsdWdpbj4KICAgICAgPC9ncm91cD4KICAgIDwvcGx1Z2lucy1zZXF1ZW5jZT4KICA8L3Byb2Nlc3M+CjwvcHJvY2Vzc2VzPgo=", import.meta.url).href, d = (v) => {
    var m, E;
    return (E = (m = v == null ? void 0 : v.textContent) === null || m === void 0 ? void 0 : m.trim()) !== null && E !== void 0 ? E : "";
  }, g = (v) => ({
    id: d(v.querySelector("id")),
    name: d(v.querySelector("name")),
    src: d(v.querySelector("src"))
  }), p = (v) => Array.from(v.querySelectorAll("process")).map((m) => {
    const E = Array.from(m.querySelectorAll("plugins-sequence > group")), B = E.length ? E.map((k) => ({
      title: d(k.querySelector(":scope > title")),
      plugins: Array.from(k.querySelectorAll(":scope > plugin")).map(g)
    })) : void 0, G = B ? B.flatMap((k) => k.plugins) : Array.from(m.querySelectorAll("plugins-sequence > plugin")).map(g);
    return {
      id: d(m.querySelector(":scope > id")),
      version: d(m.querySelector(":scope > version")),
      name: d(m.querySelector(":scope > name")),
      description: d(m.querySelector(":scope > description")),
      plugins: G,
      pluginGroups: B
    };
  });
  let h = null;
  function b() {
    return Nt(this, void 0, void 0, function* () {
      t(6, u = !0), t(7, c = ""), h == null || h.abort(), h = new AbortController();
      try {
        const v = yield fetch(f, {
          cache: "no-cache",
          signal: h.signal
        });
        if (!v.ok)
          throw new Error(`HTTP ${v.status}`);
        const m = yield v.text(), E = new DOMParser().parseFromString(m, "application/xml");
        if (E.querySelector("parsererror"))
          throw new Error("Invalid XML file format.");
        t(3, s = p(E));
      } catch (v) {
        if ((v == null ? void 0 : v.name) === "AbortError")
          return;
        t(3, s = []), t(7, c = v.message || "Failed to load processes.");
      } finally {
        t(6, u = !1);
      }
    });
  }
  Be(() => (b(), () => h == null ? void 0 : h.abort()));
  function S(v) {
    t(5, o = v), t(4, a = null);
  }
  function A(v) {
    t(4, a = v.detail);
  }
  function R(v) {
    S(v.detail);
  }
  function _() {
    t(4, a = null);
  }
  function F() {
    t(5, o = null), t(4, a = null);
  }
  return n.$$set = (v) => {
    "doc" in v && t(0, l = v.doc), "editCount" in v && t(1, i = v.editCount), "host" in v && t(2, r = v.host);
  }, [
    l,
    i,
    r,
    s,
    a,
    o,
    u,
    c,
    A,
    R,
    _,
    F
  ];
}
class fu extends te {
  constructor(e) {
    super(), ee(this, e, cu, uu, Q, { doc: 0, editCount: 1, host: 2 });
  }
}
function Ol(n) {
  let e, t;
  return e = new fu({
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
      V(e.$$.fragment);
    },
    m(l, i) {
      Z(e, l, i), t = !0;
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
      L(e.$$.fragment, l), t = !1;
    },
    d(l) {
      q(e, l);
    }
  };
}
function du(n) {
  let e, t, l, i, r, s = (
    /*doc*/
    (n[0] || /*dev*/
    n[1]) && Ol(n)
  );
  return {
    c() {
      s && s.c(), e = W(), t = U("input"), l = W(), i = U("input"), w(t, "type", "hidden"), w(t, "name", "package-name"), t.value = Vl, w(i, "type", "hidden"), w(i, "name", "package-version"), i.value = jl;
    },
    m(a, o) {
      s && s.m(a, o), M(a, e, o), M(a, t, o), M(a, l, o), M(a, i, o), r = !0;
    },
    p(a, [o]) {
      /*doc*/
      a[0] || /*dev*/
      a[1] ? s ? (s.p(a, o), o & /*doc, dev*/
      3 && C(s, 1)) : (s = Ol(a), s.c(), C(s, 1), s.m(e.parentNode, e)) : s && (fe(), L(s, 1, 1, () => {
        s = null;
      }), de());
    },
    i(a) {
      r || (C(s), r = !0);
    },
    o(a) {
      L(s), r = !1;
    },
    d(a) {
      a && (D(e), D(t), D(l), D(i)), s && s.d(a);
    }
  };
}
function gu(n, e, t) {
  let { doc: l } = e, { dev: i = !1 } = e, { editCount: r = 0 } = e;
  return console.log("editcount", r), n.$$set = (s) => {
    "doc" in s && t(0, l = s.doc), "dev" in s && t(1, i = s.dev), "editCount" in s && t(2, r = s.editCount);
  }, [l, i, r];
}
class mu extends te {
  constructor(e) {
    super(), ee(this, e, gu, du, Q, { doc: 0, dev: 1, editCount: 2 });
  }
}
class bu extends HTMLElement {
  connectedCallback() {
    var t;
    this.attachShadow({ mode: "open" }), this.plugin = new mu({
      target: this.shadowRoot,
      props: {
        doc: this._doc,
        editCount: -1,
        host: this
      }
    });
    const e = hu();
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
function hu() {
  const n = `${Vl}-v${jl}-style`, e = pu(), t = document.createElement("link");
  return t.rel = "stylesheet", t.type = "text/css", t.href = e, t.id = n, t;
}
function pu() {
  const n = new URL(import.meta.url), e = n.origin, t = n.pathname.split("/").slice(0, -1).filter(Boolean).join("/");
  return [e, t, "style.css"].filter(Boolean).join("/");
}
export {
  bu as default
};
