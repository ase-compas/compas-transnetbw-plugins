var It = Object.defineProperty;
var Zt = (n, e, t) => e in n ? It(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var Me = (n, e, t) => (Zt(n, typeof e != "symbol" ? e + "" : e, t), t);
function N() {
}
function X(n, e) {
  for (const t in e)
    n[t] = e[t];
  return (
    /** @type {T & S} */
    n
  );
}
function pt(n) {
  return n();
}
function Ye() {
  return /* @__PURE__ */ Object.create(null);
}
function L(n) {
  n.forEach(pt);
}
function ee(n) {
  return typeof n == "function";
}
function S(n, e) {
  return n != n ? e == e : n !== e || n && typeof n == "object" || typeof n == "function";
}
function Pt(n) {
  return Object.keys(n).length === 0;
}
function Ae(n, e, t, l) {
  if (n) {
    const s = _t(n, e, t, l);
    return n[0](s);
  }
}
function _t(n, e, t, l) {
  return n[1] && l ? X(t.ctx.slice(), n[1](l(e))) : t.ctx;
}
function ye(n, e, t, l) {
  if (n[2] && l) {
    const s = n[2](l(t));
    if (e.dirty === void 0)
      return s;
    if (typeof s == "object") {
      const i = [], r = Math.max(e.dirty.length, s.length);
      for (let o = 0; o < r; o += 1)
        i[o] = e.dirty[o] | s[o];
      return i;
    }
    return e.dirty | s;
  }
  return e.dirty;
}
function Ie(n, e, t, l, s, i) {
  if (s) {
    const r = _t(e, t, l, i);
    n.p(r, s);
  }
}
function Ze(n) {
  if (n.ctx.length > 32) {
    const e = [], t = n.ctx.length / 32;
    for (let l = 0; l < t; l++)
      e[l] = -1;
    return e;
  }
  return -1;
}
function Xe(n) {
  const e = {};
  for (const t in n)
    t[0] !== "$" && (e[t] = n[t]);
  return e;
}
function de(n, e) {
  const t = {};
  e = new Set(e);
  for (const l in n)
    !e.has(l) && l[0] !== "$" && (t[l] = n[l]);
  return t;
}
function $(n) {
  return n && ee(n.destroy) ? n.destroy : N;
}
function _(n, e) {
  n.appendChild(e);
}
function y(n, e, t) {
  n.insertBefore(e, t || null);
}
function k(n) {
  n.parentNode && n.parentNode.removeChild(n);
}
function Et(n, e) {
  for (let t = 0; t < n.length; t += 1)
    n[t] && n[t].d(e);
}
function h(n) {
  return document.createElement(n);
}
function ie(n) {
  return document.createElementNS("http://www.w3.org/2000/svg", n);
}
function V(n) {
  return document.createTextNode(n);
}
function j() {
  return V(" ");
}
function x() {
  return V("");
}
function O(n, e, t, l) {
  return n.addEventListener(e, t, l), () => n.removeEventListener(e, t, l);
}
function g(n, e, t) {
  t == null ? n.removeAttribute(e) : n.getAttribute(e) !== t && n.setAttribute(e, t);
}
const qt = ["width", "height"];
function ze(n, e) {
  const t = Object.getOwnPropertyDescriptors(n.__proto__);
  for (const l in e)
    e[l] == null ? n.removeAttribute(l) : l === "style" ? n.style.cssText = e[l] : l === "__value" ? n.value = n[l] = e[l] : t[l] && t[l].set && qt.indexOf(l) === -1 ? n[l] = e[l] : g(n, l, e[l]);
}
function Qe(n, e) {
  for (const t in e)
    g(n, t, e[t]);
}
function Wt(n, e) {
  Object.keys(e).forEach((t) => {
    jt(n, t, e[t]);
  });
}
function jt(n, e, t) {
  const l = e.toLowerCase();
  l in n ? n[l] = typeof n[l] == "boolean" && t === "" ? !0 : t : e in n ? n[e] = typeof n[e] == "boolean" && t === "" ? !0 : t : g(n, e, t);
}
function we(n) {
  return /-/.test(n) ? Wt : ze;
}
function Tt(n) {
  return Array.from(n.childNodes);
}
function R(n, e) {
  e = "" + e, n.data !== e && (n.data = /** @type {string} */
  e);
}
function Ge(n, e, t, l) {
  t == null ? n.style.removeProperty(e) : n.style.setProperty(e, t, "");
}
function ce(n, e, t) {
  n.classList.toggle(e, !!t);
}
function Nt(n, e, { bubbles: t = !1, cancelable: l = !1 } = {}) {
  return new CustomEvent(n, { detail: e, bubbles: t, cancelable: l });
}
function Je(n, e) {
  return new n(e);
}
let ke;
function be(n) {
  ke = n;
}
function te() {
  if (!ke)
    throw new Error("Function called outside component initialization");
  return ke;
}
function mt(n) {
  te().$$.on_mount.push(n);
}
function Mt(n) {
  te().$$.on_destroy.push(n);
}
function Fe() {
  const n = te();
  return (e, t, { cancelable: l = !1 } = {}) => {
    const s = n.$$.callbacks[e];
    if (s) {
      const i = Nt(
        /** @type {string} */
        e,
        t,
        { cancelable: l }
      );
      return s.slice().forEach((r) => {
        r.call(n, i);
      }), !i.defaultPrevented;
    }
    return !0;
  };
}
function Gt(n, e) {
  return te().$$.context.set(n, e), e;
}
function ht(n) {
  return te().$$.context.get(n);
}
const fe = [], se = [];
let ae = [];
const $e = [], Vt = /* @__PURE__ */ Promise.resolve();
let Le = !1;
function Ht() {
  Le || (Le = !0, Vt.then(vt));
}
function Re(n) {
  ae.push(n);
}
const Ve = /* @__PURE__ */ new Set();
let ue = 0;
function vt() {
  if (ue !== 0)
    return;
  const n = ke;
  do {
    try {
      for (; ue < fe.length; ) {
        const e = fe[ue];
        ue++, be(e), Bt(e.$$);
      }
    } catch (e) {
      throw fe.length = 0, ue = 0, e;
    }
    for (be(null), fe.length = 0, ue = 0; se.length; )
      se.pop()();
    for (let e = 0; e < ae.length; e += 1) {
      const t = ae[e];
      Ve.has(t) || (Ve.add(t), t());
    }
    ae.length = 0;
  } while (fe.length);
  for (; $e.length; )
    $e.pop()();
  Le = !1, Ve.clear(), be(n);
}
function Bt(n) {
  if (n.fragment !== null) {
    n.update(), L(n.before_update);
    const e = n.dirty;
    n.dirty = [-1], n.fragment && n.fragment.p(n.ctx, e), n.after_update.forEach(Re);
  }
}
function St(n) {
  const e = [], t = [];
  ae.forEach((l) => n.indexOf(l) === -1 ? e.push(l) : t.push(l)), t.forEach((l) => l()), ae = e;
}
const qe = /* @__PURE__ */ new Set();
let le;
function oe() {
  le = {
    r: 0,
    c: [],
    p: le
    // parent group
  };
}
function re() {
  le.r || L(le.c), le = le.p;
}
function W(n, e) {
  n && n.i && (qe.delete(n), n.i(e));
}
function T(n, e, t, l) {
  if (n && n.o) {
    if (qe.has(n))
      return;
    qe.add(n), le.c.push(() => {
      qe.delete(n), l && (t && n.d(1), l());
    }), n.o(e);
  } else
    l && l();
}
function ge(n) {
  return (n == null ? void 0 : n.length) !== void 0 ? n : Array.from(n);
}
function bt(n, e) {
  n.d(1), e.delete(n.key);
}
function Ct(n, e, t, l, s, i, r, o, c, u, f, a) {
  let p = n.length, w = i.length, A = p;
  const E = {};
  for (; A--; )
    E[n[A].key] = A;
  const v = [], I = /* @__PURE__ */ new Map(), m = /* @__PURE__ */ new Map(), d = [];
  for (A = w; A--; ) {
    const Z = a(s, i, A), P = t(Z);
    let M = r.get(P);
    M ? d.push(() => M.p(Z, e)) : (M = u(P, Z), M.c()), I.set(P, v[A] = M), P in E && m.set(P, Math.abs(A - E[P]));
  }
  const C = /* @__PURE__ */ new Set(), q = /* @__PURE__ */ new Set();
  function b(Z) {
    W(Z, 1), Z.m(o, f), r.set(Z.key, Z), f = Z.first, w--;
  }
  for (; p && w; ) {
    const Z = v[w - 1], P = n[p - 1], M = Z.key, z = P.key;
    Z === P ? (f = Z.first, p--, w--) : I.has(z) ? !r.has(M) || C.has(M) ? b(Z) : q.has(z) ? p-- : m.get(M) > m.get(z) ? (q.add(M), b(Z)) : (C.add(z), p--) : (c(P, r), p--);
  }
  for (; p--; ) {
    const Z = n[p];
    I.has(Z.key) || c(Z, r);
  }
  for (; w; )
    b(v[w - 1]);
  return L(d), v;
}
function pe(n, e) {
  const t = {}, l = {}, s = { $$scope: 1 };
  let i = n.length;
  for (; i--; ) {
    const r = n[i], o = e[i];
    if (o) {
      for (const c in r)
        c in o || (l[c] = 1);
      for (const c in o)
        s[c] || (t[c] = o[c], s[c] = 1);
      n[i] = o;
    } else
      for (const c in r)
        s[c] = 1;
  }
  for (const r in l)
    r in t || (t[r] = void 0);
  return t;
}
function Ee(n) {
  return typeof n == "object" && n !== null ? n : {};
}
function Q(n) {
  n && n.c();
}
function D(n, e, t) {
  const { fragment: l, after_update: s } = n.$$;
  l && l.m(e, t), Re(() => {
    const i = n.$$.on_mount.map(pt).filter(ee);
    n.$$.on_destroy ? n.$$.on_destroy.push(...i) : L(i), n.$$.on_mount = [];
  }), s.forEach(Re);
}
function K(n, e) {
  const t = n.$$;
  t.fragment !== null && (St(t.after_update), L(t.on_destroy), t.fragment && t.fragment.d(e), t.on_destroy = t.fragment = null, t.ctx = []);
}
function zt(n, e) {
  n.$$.dirty[0] === -1 && (fe.push(n), Ht(), n.$$.dirty.fill(0)), n.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function F(n, e, t, l, s, i, r = null, o = [-1]) {
  const c = ke;
  be(n);
  const u = n.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: i,
    update: N,
    not_equal: s,
    bound: Ye(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (c ? c.$$.context : [])),
    // everything else
    callbacks: Ye(),
    dirty: o,
    skip_bound: !1,
    root: e.target || c.$$.root
  };
  r && r(u.root);
  let f = !1;
  if (u.ctx = t ? t(n, e.props || {}, (a, p, ...w) => {
    const A = w.length ? w[0] : p;
    return u.ctx && s(u.ctx[a], u.ctx[a] = A) && (!u.skip_bound && u.bound[a] && u.bound[a](A), f && zt(n, a)), p;
  }) : [], u.update(), f = !0, L(u.before_update), u.fragment = l ? l(u.ctx) : !1, e.target) {
    if (e.hydrate) {
      const a = Tt(e.target);
      u.fragment && u.fragment.l(a), a.forEach(k);
    } else
      u.fragment && u.fragment.c();
    e.intro && W(n.$$.fragment), D(n, e.target, e.anchor), vt();
  }
  be(c);
}
class U {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    Me(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    Me(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    K(this, 1), this.$destroy = N;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, t) {
    if (!ee(t))
      return N;
    const l = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return l.push(t), () => {
      const s = l.indexOf(t);
      s !== -1 && l.splice(s, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(e) {
    this.$$set && !Pt(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const Lt = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(Lt);
const wt = "archive-explorer", kt = "0.0.1";
function At(n, e, t, l) {
  function s(i) {
    return i instanceof t ? i : new t(function(r) {
      r(i);
    });
  }
  return new (t || (t = Promise))(function(i, r) {
    function o(f) {
      try {
        u(l.next(f));
      } catch (a) {
        r(a);
      }
    }
    function c(f) {
      try {
        u(l.throw(f));
      } catch (a) {
        r(a);
      }
    }
    function u(f) {
      f.done ? i(f.value) : s(f.value).then(o, c);
    }
    u((l = l.apply(n, e || [])).next());
  });
}
function xe(n, e, t) {
  const l = n.slice();
  return l[6] = e[t], l[8] = t, l;
}
function Rt(n) {
  let e, t = [], l = /* @__PURE__ */ new Map(), s = ge(
    /*processes*/
    n[0]
  );
  const i = (r) => (
    /*p*/
    r[6].id
  );
  for (let r = 0; r < s.length; r += 1) {
    let o = xe(n, s, r), c = i(o);
    l.set(c, t[r] = tt(c, o));
  }
  return {
    c() {
      e = h("ol");
      for (let r = 0; r < t.length; r += 1)
        t[r].c();
      g(e, "class", "processes-list svelte-12dv09y");
    },
    m(r, o) {
      y(r, e, o);
      for (let c = 0; c < t.length; c += 1)
        t[c] && t[c].m(e, null);
    },
    p(r, o) {
      o & /*dispatch, processes*/
      9 && (s = ge(
        /*processes*/
        r[0]
      ), t = Ct(t, o, i, 1, r, s, l, e, bt, tt, null, xe));
    },
    d(r) {
      r && k(e);
      for (let o = 0; o < t.length; o += 1)
        t[o].d();
    }
  };
}
function Xt(n) {
  let e;
  return {
    c() {
      e = h("p"), e.textContent = "No processes found.", g(e, "class", "svelte-12dv09y");
    },
    m(t, l) {
      y(t, e, l);
    },
    p: N,
    d(t) {
      t && k(e);
    }
  };
}
function Ft(n) {
  let e, t;
  return {
    c() {
      e = h("p"), t = V(
        /*errorMsg*/
        n[2]
      ), g(e, "class", "error svelte-12dv09y");
    },
    m(l, s) {
      y(l, e, s), _(e, t);
    },
    p(l, s) {
      s & /*errorMsg*/
      4 && R(
        t,
        /*errorMsg*/
        l[2]
      );
    },
    d(l) {
      l && k(e);
    }
  };
}
function Ut(n) {
  let e;
  return {
    c() {
      e = h("p"), e.textContent = "Loading…", g(e, "class", "svelte-12dv09y");
    },
    m(t, l) {
      y(t, e, l);
    },
    p: N,
    d(t) {
      t && k(e);
    }
  };
}
function et(n) {
  let e, t = (
    /*p*/
    n[6].description + ""
  ), l;
  return {
    c() {
      e = h("p"), l = V(t), g(e, "class", "process-description svelte-12dv09y");
    },
    m(s, i) {
      y(s, e, i), _(e, l);
    },
    p(s, i) {
      i & /*processes*/
      1 && t !== (t = /*p*/
      s[6].description + "") && R(l, t);
    },
    d(s) {
      s && k(e);
    }
  };
}
function tt(n, e) {
  let t, l, s, i = (
    /*i*/
    e[8] + 1 + ""
  ), r, o, c, u, f, a = (
    /*p*/
    (e[6].name || /*p*/
    e[6].id) + ""
  ), p, w, A, E, v, I, m, d, C, q, b = (
    /*p*/
    e[6].description && et(e)
  );
  function Z() {
    return (
      /*click_handler*/
      e[4](
        /*p*/
        e[6]
      )
    );
  }
  function P() {
    return (
      /*click_handler_1*/
      e[5](
        /*p*/
        e[6]
      )
    );
  }
  return {
    key: n,
    first: null,
    c() {
      t = h("li"), l = h("div"), s = h("span"), r = V(i), o = V("."), c = j(), u = h("div"), f = h("p"), p = V(a), w = j(), b && b.c(), A = j(), E = h("div"), v = h("button"), v.textContent = "START PROCESS", I = j(), m = h("button"), m.textContent = "VIEW DETAILS", d = j(), g(s, "class", "order svelte-12dv09y"), g(f, "class", "process-name svelte-12dv09y"), g(u, "class", "svelte-12dv09y"), g(l, "class", "process-header svelte-12dv09y"), g(v, "class", "btn svelte-12dv09y"), g(m, "class", "btn primary svelte-12dv09y"), g(E, "class", "actions svelte-12dv09y"), g(t, "class", "process-card svelte-12dv09y"), this.first = t;
    },
    m(M, z) {
      y(M, t, z), _(t, l), _(l, s), _(s, r), _(s, o), _(l, c), _(l, u), _(u, f), _(f, p), _(u, w), b && b.m(u, null), _(t, A), _(t, E), _(E, v), _(E, I), _(E, m), _(t, d), C || (q = [
        O(v, "click", Z),
        O(m, "click", P)
      ], C = !0);
    },
    p(M, z) {
      e = M, z & /*processes*/
      1 && i !== (i = /*i*/
      e[8] + 1 + "") && R(r, i), z & /*processes*/
      1 && a !== (a = /*p*/
      (e[6].name || /*p*/
      e[6].id) + "") && R(p, a), /*p*/
      e[6].description ? b ? b.p(e, z) : (b = et(e), b.c(), b.m(u, null)) : b && (b.d(1), b = null);
    },
    d(M) {
      M && k(t), b && b.d(), C = !1, L(q);
    }
  };
}
function Ot(n) {
  let e, t, l;
  function s(o, c) {
    return (
      /*loading*/
      o[1] ? Ut : (
        /*errorMsg*/
        o[2] ? Ft : (
          /*processes*/
          o[0].length === 0 ? Xt : Rt
        )
      )
    );
  }
  let i = s(n), r = i(n);
  return {
    c() {
      e = h("div"), t = h("h1"), t.textContent = "Engineering Processes", l = j(), r.c(), g(t, "class", "title svelte-12dv09y"), g(e, "class", "container svelte-12dv09y");
    },
    m(o, c) {
      y(o, e, c), _(e, t), _(e, l), r.m(e, null);
    },
    p(o, [c]) {
      i === (i = s(o)) && r ? r.p(o, c) : (r.d(1), r = i(o), r && (r.c(), r.m(e, null)));
    },
    i: N,
    o: N,
    d(o) {
      o && k(e), r.d();
    }
  };
}
function Dt(n, e, t) {
  let { processes: l = [] } = e, { loading: s = !1 } = e, { errorMsg: i = "" } = e;
  const r = Fe(), o = (u) => r("start", u), c = (u) => r("view", u);
  return n.$$set = (u) => {
    "processes" in u && t(0, l = u.processes), "loading" in u && t(1, s = u.loading), "errorMsg" in u && t(2, i = u.errorMsg);
  }, [l, s, i, r, o, c];
}
class Kt extends U {
  constructor(e) {
    super(), F(this, e, Dt, Ot, S, { processes: 0, loading: 1, errorMsg: 2 });
  }
}
function nt(n, e, t) {
  const l = n.slice();
  return l[5] = e[t], l[7] = t, l;
}
function Yt(n) {
  let e, t, l, s, i, r, o = (
    /*proc*/
    n[0].id + ""
  ), c, u, f, a, p, w = (
    /*proc*/
    n[0].name + ""
  ), A, E, v, I, m, d = (
    /*proc*/
    n[0].version + ""
  ), C, q, b, Z, P, M = (
    /*proc*/
    n[0].description + ""
  ), z, je, _e, Te, me, ne, he, Oe, ve, Ne, De;
  function Ke(G, B) {
    return !/*proc*/
    G[0].plugins || /*proc*/
    G[0].plugins.length === 0 ? $t : Jt;
  }
  let Pe = Ke(n), Y = Pe(n);
  return {
    c() {
      e = h("h1"), e.textContent = "Process Details", t = j(), l = h("div"), s = h("div"), i = h("span"), i.textContent = "ID", r = h("span"), c = V(o), u = j(), f = h("div"), a = h("span"), a.textContent = "Name", p = h("span"), A = V(w), E = j(), v = h("div"), I = h("span"), I.textContent = "Version", m = h("span"), C = V(d), q = j(), b = h("div"), Z = h("span"), Z.textContent = "Description", P = h("span"), z = V(M), je = j(), _e = h("h2"), _e.textContent = "Plugins", Te = j(), Y.c(), me = j(), ne = h("div"), he = h("button"), he.textContent = "Back", Oe = j(), ve = h("button"), ve.textContent = "START PROCESS", g(e, "class", "title svelte-1qn566t"), g(i, "class", "label svelte-1qn566t"), g(r, "class", "value svelte-1qn566t"), g(s, "class", "row svelte-1qn566t"), g(a, "class", "label svelte-1qn566t"), g(p, "class", "value svelte-1qn566t"), g(f, "class", "row svelte-1qn566t"), g(I, "class", "label svelte-1qn566t"), g(m, "class", "value svelte-1qn566t"), g(v, "class", "row svelte-1qn566t"), g(Z, "class", "label svelte-1qn566t"), g(P, "class", "value svelte-1qn566t"), g(b, "class", "row svelte-1qn566t"), g(l, "class", "card svelte-1qn566t"), g(_e, "class", "subtitle svelte-1qn566t"), g(he, "class", "btn svelte-1qn566t"), g(ve, "class", "btn primary svelte-1qn566t"), g(ne, "class", "actions svelte-1qn566t");
    },
    m(G, B) {
      y(G, e, B), y(G, t, B), y(G, l, B), _(l, s), _(s, i), _(s, r), _(r, c), _(l, u), _(l, f), _(f, a), _(f, p), _(p, A), _(l, E), _(l, v), _(v, I), _(v, m), _(m, C), _(l, q), _(l, b), _(b, Z), _(b, P), _(P, z), y(G, je, B), y(G, _e, B), y(G, Te, B), Y.m(G, B), y(G, me, B), y(G, ne, B), _(ne, he), _(ne, Oe), _(ne, ve), Ne || (De = [
        O(
          he,
          "click",
          /*click_handler_1*/
          n[3]
        ),
        O(
          ve,
          "click",
          /*click_handler_2*/
          n[4]
        )
      ], Ne = !0);
    },
    p(G, B) {
      B & /*proc*/
      1 && o !== (o = /*proc*/
      G[0].id + "") && R(c, o), B & /*proc*/
      1 && w !== (w = /*proc*/
      G[0].name + "") && R(A, w), B & /*proc*/
      1 && d !== (d = /*proc*/
      G[0].version + "") && R(C, d), B & /*proc*/
      1 && M !== (M = /*proc*/
      G[0].description + "") && R(z, M), Pe === (Pe = Ke(G)) && Y ? Y.p(G, B) : (Y.d(1), Y = Pe(G), Y && (Y.c(), Y.m(me.parentNode, me)));
    },
    d(G) {
      G && (k(e), k(t), k(l), k(je), k(_e), k(Te), k(me), k(ne)), Y.d(G), Ne = !1, L(De);
    }
  };
}
function Qt(n) {
  let e, t, l, s, i, r;
  return {
    c() {
      e = h("div"), t = h("p"), t.textContent = "No process selected.", l = j(), s = h("button"), s.textContent = "Back to list", g(t, "class", "svelte-1qn566t"), g(s, "class", "btn svelte-1qn566t"), g(e, "class", "empty-state svelte-1qn566t");
    },
    m(o, c) {
      y(o, e, c), _(e, t), _(e, l), _(e, s), i || (r = O(
        s,
        "click",
        /*click_handler*/
        n[2]
      ), i = !0);
    },
    p: N,
    d(o) {
      o && k(e), i = !1, r();
    }
  };
}
function Jt(n) {
  let e, t = [], l = /* @__PURE__ */ new Map(), s = ge(
    /*proc*/
    n[0].plugins
  );
  const i = (r) => (
    /*pl*/
    r[5].id
  );
  for (let r = 0; r < s.length; r += 1) {
    let o = nt(n, s, r), c = i(o);
    l.set(c, t[r] = it(c, o));
  }
  return {
    c() {
      e = h("ol");
      for (let r = 0; r < t.length; r += 1)
        t[r].c();
      g(e, "class", "plugins-list svelte-1qn566t");
    },
    m(r, o) {
      y(r, e, o);
      for (let c = 0; c < t.length; c += 1)
        t[c] && t[c].m(e, null);
    },
    p(r, o) {
      o & /*proc*/
      1 && (s = ge(
        /*proc*/
        r[0].plugins
      ), t = Ct(t, o, i, 1, r, s, l, e, bt, it, null, nt));
    },
    d(r) {
      r && k(e);
      for (let o = 0; o < t.length; o += 1)
        t[o].d();
    }
  };
}
function $t(n) {
  let e;
  return {
    c() {
      e = h("p"), e.textContent = "No plugins defined for this process.", g(e, "class", "muted svelte-1qn566t");
    },
    m(t, l) {
      y(t, e, l);
    },
    p: N,
    d(t) {
      t && k(e);
    }
  };
}
function lt(n) {
  let e, t = (
    /*pl*/
    n[5].type + ""
  ), l;
  return {
    c() {
      e = h("p"), l = V(t), g(e, "class", "plugin-type svelte-1qn566t");
    },
    m(s, i) {
      y(s, e, i), _(e, l);
    },
    p(s, i) {
      i & /*proc*/
      1 && t !== (t = /*pl*/
      s[5].type + "") && R(l, t);
    },
    d(s) {
      s && k(e);
    }
  };
}
function st(n) {
  let e, t = (
    /*pl*/
    n[5].description + ""
  ), l;
  return {
    c() {
      e = h("p"), l = V(t), g(e, "class", "description svelte-1qn566t");
    },
    m(s, i) {
      y(s, e, i), _(e, l);
    },
    p(s, i) {
      i & /*proc*/
      1 && t !== (t = /*pl*/
      s[5].description + "") && R(l, t);
    },
    d(s) {
      s && k(e);
    }
  };
}
function it(n, e) {
  let t, l, s, i = (
    /*i*/
    e[7] + 1 + ""
  ), r, o, c, u, f, a = (
    /*pl*/
    (e[5].name || /*pl*/
    e[5].id) + ""
  ), p, w, A, E, v = (
    /*pl*/
    e[5].type && lt(e)
  ), I = (
    /*pl*/
    e[5].description && st(e)
  );
  return {
    key: n,
    first: null,
    c() {
      t = h("li"), l = h("div"), s = h("span"), r = V(i), o = V("."), c = j(), u = h("div"), f = h("p"), p = V(a), w = j(), v && v.c(), A = j(), I && I.c(), E = j(), g(s, "class", "order svelte-1qn566t"), g(f, "class", "plugin-name svelte-1qn566t"), g(u, "class", "svelte-1qn566t"), g(l, "class", "plugin-header svelte-1qn566t"), g(t, "class", "plugin-card svelte-1qn566t"), this.first = t;
    },
    m(m, d) {
      y(m, t, d), _(t, l), _(l, s), _(s, r), _(s, o), _(l, c), _(l, u), _(u, f), _(f, p), _(u, w), v && v.m(u, null), _(t, A), I && I.m(t, null), _(t, E);
    },
    p(m, d) {
      e = m, d & /*proc*/
      1 && i !== (i = /*i*/
      e[7] + 1 + "") && R(r, i), d & /*proc*/
      1 && a !== (a = /*pl*/
      (e[5].name || /*pl*/
      e[5].id) + "") && R(p, a), /*pl*/
      e[5].type ? v ? v.p(e, d) : (v = lt(e), v.c(), v.m(u, null)) : v && (v.d(1), v = null), /*pl*/
      e[5].description ? I ? I.p(e, d) : (I = st(e), I.c(), I.m(t, E)) : I && (I.d(1), I = null);
    },
    d(m) {
      m && k(t), v && v.d(), I && I.d();
    }
  };
}
function xt(n) {
  let e;
  function t(i, r) {
    return (
      /*proc*/
      i[0] ? Yt : Qt
    );
  }
  let l = t(n), s = l(n);
  return {
    c() {
      e = h("div"), s.c(), g(e, "class", "container svelte-1qn566t");
    },
    m(i, r) {
      y(i, e, r), s.m(e, null);
    },
    p(i, [r]) {
      l === (l = t(i)) && s ? s.p(i, r) : (s.d(1), s = l(i), s && (s.c(), s.m(e, null)));
    },
    i: N,
    o: N,
    d(i) {
      i && k(e), s.d();
    }
  };
}
function en(n, e, t) {
  let { proc: l = null } = e;
  const s = Fe(), i = () => s("back"), r = () => s("back"), o = () => s("start", l);
  return n.$$set = (c) => {
    "proc" in c && t(0, l = c.proc);
  }, [l, s, i, r, o];
}
class tn extends U {
  constructor(e) {
    super(), F(this, e, en, xt, S, { proc: 0 });
  }
}
function Ce(n) {
  return Object.entries(n).filter(([e, t]) => e !== "" && t).map(([e]) => e).join(" ");
}
const ot = /^[a-z]+(?::(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/, nn = /^[^$]+(?:\$(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/;
function Ue(n) {
  let e, t = [];
  n.$on = (s, i) => {
    let r = s, o = () => {
    };
    return e ? o = e(r, i) : t.push([r, i]), r.match(ot) && console && console.warn('Event modifiers in SMUI now use "$" instead of ":", so that all events can be bound with modifiers. Please update your event binding: ', r), () => {
      o();
    };
  };
  function l(s) {
    const i = n.$$.callbacks[s.type];
    i && i.slice().forEach((r) => r.call(this, s));
  }
  return (s) => {
    const i = [], r = {};
    e = (o, c) => {
      let u = o, f = c, a = !1;
      const p = u.match(ot), w = u.match(nn), A = p || w;
      if (u.match(/^SMUI:\w+:/)) {
        const I = u.split(":");
        let m = "";
        for (let d = 0; d < I.length; d++)
          m += d === I.length - 1 ? ":" + I[d] : I[d].split("-").map((C) => C.slice(0, 1).toUpperCase() + C.slice(1)).join("");
        console.warn(`The event ${u.split("$")[0]} has been renamed to ${m.split("$")[0]}.`), u = m;
      }
      if (A) {
        const I = u.split(p ? ":" : "$");
        u = I[0];
        const m = I.slice(1).reduce((d, C) => (d[C] = !0, d), {});
        m.passive && (a = a || {}, a.passive = !0), m.nonpassive && (a = a || {}, a.passive = !1), m.capture && (a = a || {}, a.capture = !0), m.once && (a = a || {}, a.once = !0), m.preventDefault && (f = ln(f)), m.stopPropagation && (f = sn(f)), m.stopImmediatePropagation && (f = on(f)), m.self && (f = rn(s, f)), m.trusted && (f = cn(f));
      }
      const E = rt(s, u, f, a), v = () => {
        E();
        const I = i.indexOf(v);
        I > -1 && i.splice(I, 1);
      };
      return i.push(v), u in r || (r[u] = rt(s, u, l)), v;
    };
    for (let o = 0; o < t.length; o++)
      e(t[o][0], t[o][1]);
    return {
      destroy: () => {
        for (let o = 0; o < i.length; o++)
          i[o]();
        for (let o of Object.entries(r))
          o[1]();
      }
    };
  };
}
function rt(n, e, t, l) {
  return n.addEventListener(e, t, l), () => n.removeEventListener(e, t, l);
}
function ln(n) {
  return function(e) {
    return e.preventDefault(), n.call(this, e);
  };
}
function sn(n) {
  return function(e) {
    return e.stopPropagation(), n.call(this, e);
  };
}
function on(n) {
  return function(e) {
    return e.stopImmediatePropagation(), n.call(this, e);
  };
}
function rn(n, e) {
  return function(t) {
    if (t.target === n)
      return e.call(this, t);
  };
}
function cn(n) {
  return function(e) {
    if (e.isTrusted)
      return n.call(this, e);
  };
}
function We(n, e) {
  let t = [];
  if (e)
    for (let l = 0; l < e.length; l++) {
      const s = e[l], i = Array.isArray(s) ? s[0] : s;
      Array.isArray(s) && s.length > 1 ? t.push(i(n, s[1])) : t.push(i(n));
    }
  return {
    update(l) {
      if ((l && l.length || 0) != t.length)
        throw new Error("You must not change the length of an actions array.");
      if (l)
        for (let s = 0; s < l.length; s++) {
          const i = t[s];
          if (i && i.update) {
            const r = l[s];
            Array.isArray(r) && r.length > 1 ? i.update(r[1]) : i.update();
          }
        }
    },
    destroy() {
      for (let l = 0; l < t.length; l++) {
        const s = t[l];
        s && s.destroy && s.destroy();
      }
    }
  };
}
function un(n) {
  let e = (
    /*tag*/
    n[1]
  ), t, l, s = (
    /*tag*/
    n[1] && He(n)
  );
  return {
    c() {
      s && s.c(), t = x();
    },
    m(i, r) {
      s && s.m(i, r), y(i, t, r), l = !0;
    },
    p(i, r) {
      /*tag*/
      i[1] ? e ? S(
        e,
        /*tag*/
        i[1]
      ) ? (s.d(1), s = He(i), e = /*tag*/
      i[1], s.c(), s.m(t.parentNode, t)) : s.p(i, r) : (s = He(i), e = /*tag*/
      i[1], s.c(), s.m(t.parentNode, t)) : e && (s.d(1), s = null, e = /*tag*/
      i[1]);
    },
    i(i) {
      l || (W(s, i), l = !0);
    },
    o(i) {
      T(s, i), l = !1;
    },
    d(i) {
      i && k(t), s && s.d(i);
    }
  };
}
function fn(n) {
  let e = (
    /*tag*/
    n[1]
  ), t, l = (
    /*tag*/
    n[1] && Be(n)
  );
  return {
    c() {
      l && l.c(), t = x();
    },
    m(s, i) {
      l && l.m(s, i), y(s, t, i);
    },
    p(s, i) {
      /*tag*/
      s[1] ? e ? S(
        e,
        /*tag*/
        s[1]
      ) ? (l.d(1), l = Be(s), e = /*tag*/
      s[1], l.c(), l.m(t.parentNode, t)) : l.p(s, i) : (l = Be(s), e = /*tag*/
      s[1], l.c(), l.m(t.parentNode, t)) : e && (l.d(1), l = null, e = /*tag*/
      s[1]);
    },
    i: N,
    o: N,
    d(s) {
      s && k(t), l && l.d(s);
    }
  };
}
function an(n) {
  let e, t, l, s, i;
  const r = (
    /*#slots*/
    n[8].default
  ), o = Ae(
    r,
    n,
    /*$$scope*/
    n[7],
    null
  );
  let c = [
    /*$$restProps*/
    n[5]
  ], u = {};
  for (let f = 0; f < c.length; f += 1)
    u = X(u, c[f]);
  return {
    c() {
      e = ie("svg"), o && o.c(), Qe(e, u);
    },
    m(f, a) {
      y(f, e, a), o && o.m(e, null), n[9](e), l = !0, s || (i = [
        $(t = We.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        $(
          /*forwardEvents*/
          n[4].call(null, e)
        )
      ], s = !0);
    },
    p(f, a) {
      o && o.p && (!l || a & /*$$scope*/
      128) && Ie(
        o,
        r,
        f,
        /*$$scope*/
        f[7],
        l ? ye(
          r,
          /*$$scope*/
          f[7],
          a,
          null
        ) : Ze(
          /*$$scope*/
          f[7]
        ),
        null
      ), Qe(e, u = pe(c, [a & /*$$restProps*/
      32 && /*$$restProps*/
      f[5]])), t && ee(t.update) && a & /*use*/
      1 && t.update.call(
        null,
        /*use*/
        f[0]
      );
    },
    i(f) {
      l || (W(o, f), l = !0);
    },
    o(f) {
      T(o, f), l = !1;
    },
    d(f) {
      f && k(e), o && o.d(f), n[9](null), s = !1, L(i);
    }
  };
}
function He(n) {
  let e, t, l, s, i;
  const r = (
    /*#slots*/
    n[8].default
  ), o = Ae(
    r,
    n,
    /*$$scope*/
    n[7],
    null
  );
  let c = [
    /*$$restProps*/
    n[5]
  ], u = {};
  for (let f = 0; f < c.length; f += 1)
    u = X(u, c[f]);
  return {
    c() {
      e = h(
        /*tag*/
        n[1]
      ), o && o.c(), we(
        /*tag*/
        n[1]
      )(e, u);
    },
    m(f, a) {
      y(f, e, a), o && o.m(e, null), n[11](e), l = !0, s || (i = [
        $(t = We.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        $(
          /*forwardEvents*/
          n[4].call(null, e)
        )
      ], s = !0);
    },
    p(f, a) {
      o && o.p && (!l || a & /*$$scope*/
      128) && Ie(
        o,
        r,
        f,
        /*$$scope*/
        f[7],
        l ? ye(
          r,
          /*$$scope*/
          f[7],
          a,
          null
        ) : Ze(
          /*$$scope*/
          f[7]
        ),
        null
      ), we(
        /*tag*/
        f[1]
      )(e, u = pe(c, [a & /*$$restProps*/
      32 && /*$$restProps*/
      f[5]])), t && ee(t.update) && a & /*use*/
      1 && t.update.call(
        null,
        /*use*/
        f[0]
      );
    },
    i(f) {
      l || (W(o, f), l = !0);
    },
    o(f) {
      T(o, f), l = !1;
    },
    d(f) {
      f && k(e), o && o.d(f), n[11](null), s = !1, L(i);
    }
  };
}
function Be(n) {
  let e, t, l, s, i = [
    /*$$restProps*/
    n[5]
  ], r = {};
  for (let o = 0; o < i.length; o += 1)
    r = X(r, i[o]);
  return {
    c() {
      e = h(
        /*tag*/
        n[1]
      ), we(
        /*tag*/
        n[1]
      )(e, r);
    },
    m(o, c) {
      y(o, e, c), n[10](e), l || (s = [
        $(t = We.call(
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
    p(o, c) {
      we(
        /*tag*/
        o[1]
      )(e, r = pe(i, [c & /*$$restProps*/
      32 && /*$$restProps*/
      o[5]])), t && ee(t.update) && c & /*use*/
      1 && t.update.call(
        null,
        /*use*/
        o[0]
      );
    },
    d(o) {
      o && k(e), n[10](null), l = !1, L(s);
    }
  };
}
function dn(n) {
  let e, t, l, s;
  const i = [an, fn, un], r = [];
  function o(c, u) {
    return (
      /*tag*/
      c[1] === "svg" ? 0 : (
        /*selfClosing*/
        c[3] ? 1 : 2
      )
    );
  }
  return e = o(n), t = r[e] = i[e](n), {
    c() {
      t.c(), l = x();
    },
    m(c, u) {
      r[e].m(c, u), y(c, l, u), s = !0;
    },
    p(c, [u]) {
      let f = e;
      e = o(c), e === f ? r[e].p(c, u) : (oe(), T(r[f], 1, 1, () => {
        r[f] = null;
      }), re(), t = r[e], t ? t.p(c, u) : (t = r[e] = i[e](c), t.c()), W(t, 1), t.m(l.parentNode, l));
    },
    i(c) {
      s || (W(t), s = !0);
    },
    o(c) {
      T(t), s = !1;
    },
    d(c) {
      c && k(l), r[e].d(c);
    }
  };
}
function gn(n, e, t) {
  let l;
  const s = ["use", "tag", "getElement"];
  let i = de(e, s), { $$slots: r = {}, $$scope: o } = e, { use: c = [] } = e, { tag: u } = e;
  const f = Ue(te());
  let a;
  function p() {
    return a;
  }
  function w(v) {
    se[v ? "unshift" : "push"](() => {
      a = v, t(2, a);
    });
  }
  function A(v) {
    se[v ? "unshift" : "push"](() => {
      a = v, t(2, a);
    });
  }
  function E(v) {
    se[v ? "unshift" : "push"](() => {
      a = v, t(2, a);
    });
  }
  return n.$$set = (v) => {
    e = X(X({}, e), Xe(v)), t(5, i = de(e, s)), "use" in v && t(0, c = v.use), "tag" in v && t(1, u = v.tag), "$$scope" in v && t(7, o = v.$$scope);
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
    c,
    u,
    a,
    l,
    f,
    i,
    p,
    o,
    r,
    w,
    A,
    E
  ];
}
class yt extends U {
  constructor(e) {
    super(), F(this, e, gn, dn, S, { use: 0, tag: 1, getElement: 6 });
  }
  get getElement() {
    return this.$$.ctx[6];
  }
}
function pn(n) {
  let e;
  const t = (
    /*#slots*/
    n[11].default
  ), l = Ae(
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
    m(s, i) {
      l && l.m(s, i), e = !0;
    },
    p(s, i) {
      l && l.p && (!e || i & /*$$scope*/
      8192) && Ie(
        l,
        t,
        s,
        /*$$scope*/
        s[13],
        e ? ye(
          t,
          /*$$scope*/
          s[13],
          i,
          null
        ) : Ze(
          /*$$scope*/
          s[13]
        ),
        null
      );
    },
    i(s) {
      e || (W(l, s), e = !0);
    },
    o(s) {
      T(l, s), e = !1;
    },
    d(s) {
      l && l.d(s);
    }
  };
}
function _n(n) {
  let e, t, l;
  const s = [
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
      class: Ce({
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
  var i = (
    /*component*/
    n[2]
  );
  function r(o, c) {
    let u = {
      $$slots: { default: [pn] },
      $$scope: { ctx: o }
    };
    for (let f = 0; f < s.length; f += 1)
      u = X(u, s[f]);
    return c !== void 0 && c & /*tag, forwardEvents, use, className, smuiClass, smuiClassMap, props, $$restProps*/
    1003 && (u = X(u, pe(s, [
      c & /*tag*/
      8 && { tag: (
        /*tag*/
        o[3]
      ) },
      c & /*forwardEvents, use*/
      257 && {
        use: [
          /*forwardEvents*/
          o[8],
          .../*use*/
          o[0]
        ]
      },
      c & /*className, smuiClass, smuiClassMap*/
      98 && {
        class: Ce({
          [
            /*className*/
            o[1]
          ]: !0,
          [
            /*smuiClass*/
            o[6]
          ]: !0,
          .../*smuiClassMap*/
          o[5]
        })
      },
      c & /*props*/
      128 && Ee(
        /*props*/
        o[7]
      ),
      c & /*$$restProps*/
      512 && Ee(
        /*$$restProps*/
        o[9]
      )
    ]))), { props: u };
  }
  return i && (e = Je(i, r(n)), n[12](e)), {
    c() {
      e && Q(e.$$.fragment), t = x();
    },
    m(o, c) {
      e && D(e, o, c), y(o, t, c), l = !0;
    },
    p(o, [c]) {
      if (c & /*component*/
      4 && i !== (i = /*component*/
      o[2])) {
        if (e) {
          oe();
          const u = e;
          T(u.$$.fragment, 1, 0, () => {
            K(u, 1);
          }), re();
        }
        i ? (e = Je(i, r(o, c)), o[12](e), Q(e.$$.fragment), W(e.$$.fragment, 1), D(e, t.parentNode, t)) : e = null;
      } else if (i) {
        const u = c & /*tag, forwardEvents, use, className, smuiClass, smuiClassMap, props, $$restProps*/
        1003 ? pe(s, [
          c & /*tag*/
          8 && { tag: (
            /*tag*/
            o[3]
          ) },
          c & /*forwardEvents, use*/
          257 && {
            use: [
              /*forwardEvents*/
              o[8],
              .../*use*/
              o[0]
            ]
          },
          c & /*className, smuiClass, smuiClassMap*/
          98 && {
            class: Ce({
              [
                /*className*/
                o[1]
              ]: !0,
              [
                /*smuiClass*/
                o[6]
              ]: !0,
              .../*smuiClassMap*/
              o[5]
            })
          },
          c & /*props*/
          128 && Ee(
            /*props*/
            o[7]
          ),
          c & /*$$restProps*/
          512 && Ee(
            /*$$restProps*/
            o[9]
          )
        ]) : {};
        c & /*$$scope*/
        8192 && (u.$$scope = { dirty: c, ctx: o }), e.$set(u);
      }
    },
    i(o) {
      l || (e && W(e.$$.fragment, o), l = !0);
    },
    o(o) {
      e && T(e.$$.fragment, o), l = !1;
    },
    d(o) {
      o && k(t), n[12](null), e && K(e, o);
    }
  };
}
const J = {
  component: yt,
  tag: "div",
  class: "",
  classMap: {},
  contexts: {},
  props: {}
};
function mn(n, e, t) {
  const l = ["use", "class", "component", "tag", "getElement"];
  let s = de(e, l), { $$slots: i = {}, $$scope: r } = e, { use: o = [] } = e, { class: c = "" } = e, u;
  const f = J.class, a = {}, p = [], w = J.contexts, A = J.props;
  let { component: E = J.component } = e, { tag: v = E === yt ? J.tag : void 0 } = e;
  Object.entries(J.classMap).forEach(([C, q]) => {
    const b = ht(q);
    b && "subscribe" in b && p.push(b.subscribe((Z) => {
      t(5, a[C] = Z, a);
    }));
  });
  const I = Ue(te());
  for (let C in w)
    w.hasOwnProperty(C) && Gt(C, w[C]);
  Mt(() => {
    for (const C of p)
      C();
  });
  function m() {
    return u.getElement();
  }
  function d(C) {
    se[C ? "unshift" : "push"](() => {
      u = C, t(4, u);
    });
  }
  return n.$$set = (C) => {
    e = X(X({}, e), Xe(C)), t(9, s = de(e, l)), "use" in C && t(0, o = C.use), "class" in C && t(1, c = C.class), "component" in C && t(2, E = C.component), "tag" in C && t(3, v = C.tag), "$$scope" in C && t(13, r = C.$$scope);
  }, [
    o,
    c,
    E,
    v,
    u,
    a,
    f,
    A,
    I,
    s,
    m,
    i,
    d,
    r
  ];
}
class hn extends U {
  constructor(e) {
    super(), F(this, e, mn, _n, S, {
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
const ct = Object.assign({}, J);
function H(n) {
  return new Proxy(hn, {
    construct: function(e, t) {
      return Object.assign(J, ct, n), new e(...t);
    },
    get: function(e, t) {
      return Object.assign(J, ct, n), e[t];
    }
  });
}
H({
  class: "mdc-text-field-helper-line",
  tag: "div"
});
H({
  class: "mdc-text-field__affix mdc-text-field__affix--prefix",
  tag: "span"
});
H({
  class: "mdc-text-field__affix mdc-text-field__affix--suffix",
  tag: "span"
});
H({
  class: "mdc-deprecated-list-item__text",
  tag: "span"
});
H({
  class: "mdc-deprecated-list-item__primary-text",
  tag: "span"
});
H({
  class: "mdc-deprecated-list-item__secondary-text",
  tag: "span"
});
function vn(n) {
  let e, t, l, s, i, r;
  const o = (
    /*#slots*/
    n[8].default
  ), c = Ae(
    o,
    n,
    /*$$scope*/
    n[7],
    null
  );
  let u = [
    {
      class: t = Ce({
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
  for (let a = 0; a < u.length; a += 1)
    f = X(f, u[a]);
  return {
    c() {
      e = h("span"), c && c.c(), ze(e, f);
    },
    m(a, p) {
      y(a, e, p), c && c.m(e, null), n[9](e), s = !0, i || (r = [
        $(l = We.call(
          null,
          e,
          /*use*/
          n[0]
        )),
        $(
          /*forwardEvents*/
          n[3].call(null, e)
        )
      ], i = !0);
    },
    p(a, [p]) {
      c && c.p && (!s || p & /*$$scope*/
      128) && Ie(
        c,
        o,
        a,
        /*$$scope*/
        a[7],
        s ? ye(
          o,
          /*$$scope*/
          a[7],
          p,
          null
        ) : Ze(
          /*$$scope*/
          a[7]
        ),
        null
      ), ze(e, f = pe(u, [
        (!s || p & /*className*/
        2 && t !== (t = Ce({
          [
            /*className*/
            a[1]
          ]: !0,
          "mdc-deprecated-list-item__graphic": !0,
          "mdc-menu__selection-group-icon": (
            /*menuSelectionGroup*/
            a[4]
          )
        }))) && { class: t },
        p & /*$$restProps*/
        32 && /*$$restProps*/
        a[5]
      ])), l && ee(l.update) && p & /*use*/
      1 && l.update.call(
        null,
        /*use*/
        a[0]
      );
    },
    i(a) {
      s || (W(c, a), s = !0);
    },
    o(a) {
      T(c, a), s = !1;
    },
    d(a) {
      a && k(e), c && c.d(a), n[9](null), i = !1, L(r);
    }
  };
}
function bn(n, e, t) {
  const l = ["use", "class", "getElement"];
  let s = de(e, l), { $$slots: i = {}, $$scope: r } = e;
  const o = Ue(te());
  let { use: c = [] } = e, { class: u = "" } = e, f, a = ht("SMUI:list:graphic:menu-selection-group");
  function p() {
    return f;
  }
  function w(A) {
    se[A ? "unshift" : "push"](() => {
      f = A, t(2, f);
    });
  }
  return n.$$set = (A) => {
    e = X(X({}, e), Xe(A)), t(5, s = de(e, l)), "use" in A && t(0, c = A.use), "class" in A && t(1, u = A.class), "$$scope" in A && t(7, r = A.$$scope);
  }, [
    c,
    u,
    f,
    o,
    a,
    s,
    p,
    r,
    i,
    w
  ];
}
class Cn extends U {
  constructor(e) {
    super(), F(this, e, bn, vn, S, { use: 0, class: 1, getElement: 6 });
  }
  get getElement() {
    return this.$$.ctx[6];
  }
}
H({
  class: "mdc-deprecated-list-item__meta",
  tag: "span"
});
H({
  class: "mdc-deprecated-list-group",
  tag: "div"
});
H({
  class: "mdc-deprecated-list-group__subheader",
  tag: "h3"
});
H({
  class: "mdc-menu__selection-group-icon",
  component: Cn
});
H({
  class: "mdc-dialog__header",
  tag: "div",
  contexts: {
    "SMUI:icon-button:context": "dialog:header"
  }
});
H({
  class: "mdc-dialog__title",
  tag: "h2"
});
H({
  class: "mdc-dialog__content",
  tag: "div"
});
H({
  class: "mdc-dialog__actions",
  tag: "div",
  classMap: {
    "smui-dialog__actions--reversed": "SMUI:dialog:actions:reversed"
  },
  contexts: {
    "SMUI:button:context": "dialog:action"
  }
});
H({
  class: "smui-paper__content",
  tag: "div"
});
H({
  class: "smui-paper__title",
  tag: "h5"
});
H({
  class: "smui-paper__subtitle",
  tag: "h6"
});
function wn(n) {
  let e, t;
  return {
    c() {
      e = ie("svg"), t = ie("path"), g(t, "d", "M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"), g(e, "xmlns", "http://www.w3.org/2000/svg"), g(e, "viewBox", "0 -960 960 960"), g(e, "width", "24"), g(e, "height", "24"), g(e, "fill", "#004552");
    },
    m(l, s) {
      y(l, e, s), _(e, t);
    },
    p: N,
    i: N,
    o: N,
    d(l) {
      l && k(e);
    }
  };
}
class kn extends U {
  constructor(e) {
    super(), F(this, e, null, wn, S, {});
  }
}
function An(n) {
  let e, t;
  return {
    c() {
      e = ie("svg"), t = ie("path"), g(t, "d", "M480-280q17 0 28.5-11.5T520-320q0-17-11.5-28.5T480-360q-17 0-28.5 11.5T440-320q0 17 11.5 28.5T480-280Zm-40-160h80v-240h-80v240Zm40 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"), g(e, "xmlns", "http://www.w3.org/2000/svg"), g(e, "height", "24px"), g(e, "viewBox", "0 -960 960 960"), g(e, "width", "24px"), g(e, "fill", "#004552");
    },
    m(l, s) {
      y(l, e, s), _(e, t);
    },
    p: N,
    i: N,
    o: N,
    d(l) {
      l && k(e);
    }
  };
}
class yn extends U {
  constructor(e) {
    super(), F(this, e, null, An, S, {});
  }
}
function In(n) {
  let e, t;
  return {
    c() {
      e = ie("svg"), t = ie("path"), g(t, "d", "m40-120 440-760 440 760H40Zm138-80h604L480-720 178-200Zm302-40q17 0 28.5-11.5T520-280q0-17-11.5-28.5T480-320q-17 0-28.5 11.5T440-280q0 17 11.5 28.5T480-240Zm-40-120h80v-200h-80v200Zm40-100Z"), g(e, "xmlns", "http://www.w3.org/2000/svg"), g(e, "height", "24px"), g(e, "viewBox", "0 -960 960 960"), g(e, "width", "24px"), g(e, "fill", "#004552");
    },
    m(l, s) {
      y(l, e, s), _(e, t);
    },
    p: N,
    i: N,
    o: N,
    d(l) {
      l && k(e);
    }
  };
}
class Zn extends U {
  constructor(e) {
    super(), F(this, e, null, In, S, {});
  }
}
function ut(n) {
  let e, t, l;
  return {
    c() {
      e = h("div"), t = V(
        /*text*/
        n[0]
      ), g(e, "class", l = "tooltip-box visible " + /*position*/
      n[1] + " svelte-11wr6ok");
    },
    m(s, i) {
      y(s, e, i), _(e, t);
    },
    p(s, i) {
      i & /*text*/
      1 && R(
        t,
        /*text*/
        s[0]
      ), i & /*position*/
      2 && l !== (l = "tooltip-box visible " + /*position*/
      s[1] + " svelte-11wr6ok") && g(e, "class", l);
    },
    d(s) {
      s && k(e);
    }
  };
}
function Pn(n) {
  let e, t, l, s, i;
  const r = (
    /*#slots*/
    n[4].default
  ), o = Ae(
    r,
    n,
    /*$$scope*/
    n[3],
    null
  );
  let c = (
    /*visible*/
    n[2] && ut(n)
  );
  return {
    c() {
      e = h("div"), o && o.c(), t = j(), c && c.c(), g(e, "class", "tooltip-container svelte-11wr6ok");
    },
    m(u, f) {
      y(u, e, f), o && o.m(e, null), _(e, t), c && c.m(e, null), l = !0, s || (i = [
        O(
          e,
          "mouseenter",
          /*mouseenter_handler*/
          n[5]
        ),
        O(
          e,
          "mouseleave",
          /*mouseleave_handler*/
          n[6]
        )
      ], s = !0);
    },
    p(u, [f]) {
      o && o.p && (!l || f & /*$$scope*/
      8) && Ie(
        o,
        r,
        u,
        /*$$scope*/
        u[3],
        l ? ye(
          r,
          /*$$scope*/
          u[3],
          f,
          null
        ) : Ze(
          /*$$scope*/
          u[3]
        ),
        null
      ), /*visible*/
      u[2] ? c ? c.p(u, f) : (c = ut(u), c.c(), c.m(e, null)) : c && (c.d(1), c = null);
    },
    i(u) {
      l || (W(o, u), l = !0);
    },
    o(u) {
      T(o, u), l = !1;
    },
    d(u) {
      u && k(e), o && o.d(u), c && c.d(), s = !1, L(i);
    }
  };
}
function En(n, e, t) {
  let { $$slots: l = {}, $$scope: s } = e, { text: i } = e, { position: r = "top" } = e, o = !1;
  const c = () => t(2, o = !0), u = () => t(2, o = !1);
  return n.$$set = (f) => {
    "text" in f && t(0, i = f.text), "position" in f && t(1, r = f.position), "$$scope" in f && t(3, s = f.$$scope);
  }, [
    i,
    r,
    o,
    s,
    l,
    c,
    u
  ];
}
class qn extends U {
  constructor(e) {
    super(), F(this, e, En, Pn, S, { text: 0, position: 1 });
  }
}
function ft(n, e, t) {
  const l = n.slice();
  return l[17] = e[t], l[19] = t, l;
}
function Wn(n) {
  let e = (
    /*i*/
    n[19] + 1 + ""
  ), t;
  return {
    c() {
      t = V(e);
    },
    m(l, s) {
      y(l, t, s);
    },
    p: N,
    i: N,
    o: N,
    d(l) {
      l && k(t);
    }
  };
}
function jn(n) {
  let e, t, l, s;
  const i = [Mn, Nn, Tn], r = [];
  function o(c, u) {
    return (
      /*pluginStatus*/
      c[2][
        /*plugin*/
        c[17].tag
      ] === "check" ? 0 : (
        /*pluginStatus*/
        c[2][
          /*plugin*/
          c[17].tag
        ] === "error" ? 1 : 2
      )
    );
  }
  return e = o(n), t = r[e] = i[e](n), {
    c() {
      t.c(), l = x();
    },
    m(c, u) {
      r[e].m(c, u), y(c, l, u), s = !0;
    },
    p(c, u) {
      let f = e;
      e = o(c), e !== f && (oe(), T(r[f], 1, 1, () => {
        r[f] = null;
      }), re(), t = r[e], t || (t = r[e] = i[e](c), t.c()), W(t, 1), t.m(l.parentNode, l));
    },
    i(c) {
      s || (W(t), s = !0);
    },
    o(c) {
      T(t), s = !1;
    },
    d(c) {
      c && k(l), r[e].d(c);
    }
  };
}
function Tn(n) {
  let e, t;
  return e = new Zn({}), {
    c() {
      Q(e.$$.fragment);
    },
    m(l, s) {
      D(e, l, s), t = !0;
    },
    i(l) {
      t || (W(e.$$.fragment, l), t = !0);
    },
    o(l) {
      T(e.$$.fragment, l), t = !1;
    },
    d(l) {
      K(e, l);
    }
  };
}
function Nn(n) {
  let e, t;
  return e = new yn({}), {
    c() {
      Q(e.$$.fragment);
    },
    m(l, s) {
      D(e, l, s), t = !0;
    },
    i(l) {
      t || (W(e.$$.fragment, l), t = !0);
    },
    o(l) {
      T(e.$$.fragment, l), t = !1;
    },
    d(l) {
      K(e, l);
    }
  };
}
function Mn(n) {
  let e, t;
  return e = new kn({}), {
    c() {
      Q(e.$$.fragment);
    },
    m(l, s) {
      D(e, l, s), t = !0;
    },
    i(l) {
      t || (W(e.$$.fragment, l), t = !0);
    },
    o(l) {
      T(e.$$.fragment, l), t = !1;
    },
    d(l) {
      K(e, l);
    }
  };
}
function Gn(n) {
  let e, t, l, s, i, r, o;
  const c = [jn, Wn], u = [];
  function f(p, w) {
    return w & /*visited, tagName*/
    24 && (t = null), t == null && (t = !!/*visited*/
    (p[4].includes(
      /*plugin*/
      p[17].tag
    ) && /*plugin*/
    p[17].tag !== /*tagName*/
    p[3])), t ? 0 : 1;
  }
  l = f(n, -1), s = u[l] = c[l](n);
  function a() {
    return (
      /*click_handler_1*/
      n[13](
        /*plugin*/
        n[17]
      )
    );
  }
  return {
    c() {
      e = h("button"), s.c(), g(e, "class", "svelte-1xq5awa"), ce(e, "not-visited", !/*visited*/
      n[4].includes(
        /*plugin*/
        n[17].tag
      )), ce(
        e,
        "current",
        /*plugin*/
        n[17].tag === /*tagName*/
        n[3]
      ), ce(
        e,
        "visited",
        /*visited*/
        n[4].includes(
          /*plugin*/
          n[17].tag
        ) && /*plugin*/
        n[17].tag !== /*tagName*/
        n[3]
      );
    },
    m(p, w) {
      y(p, e, w), u[l].m(e, null), i = !0, r || (o = O(e, "click", a), r = !0);
    },
    p(p, w) {
      n = p;
      let A = l;
      l = f(n, w), l === A ? u[l].p(n, w) : (oe(), T(u[A], 1, 1, () => {
        u[A] = null;
      }), re(), s = u[l], s ? s.p(n, w) : (s = u[l] = c[l](n), s.c()), W(s, 1), s.m(e, null)), (!i || w & /*visited, plugins*/
      144) && ce(e, "not-visited", !/*visited*/
      n[4].includes(
        /*plugin*/
        n[17].tag
      )), (!i || w & /*plugins, tagName*/
      136) && ce(
        e,
        "current",
        /*plugin*/
        n[17].tag === /*tagName*/
        n[3]
      ), (!i || w & /*visited, plugins, tagName*/
      152) && ce(
        e,
        "visited",
        /*visited*/
        n[4].includes(
          /*plugin*/
          n[17].tag
        ) && /*plugin*/
        n[17].tag !== /*tagName*/
        n[3]
      );
    },
    i(p) {
      i || (W(s), i = !0);
    },
    o(p) {
      T(s), i = !1;
    },
    d(p) {
      p && k(e), u[l].d(), r = !1, o();
    }
  };
}
function Vn(n) {
  let e;
  return {
    c() {
      e = h("div"), g(e, "class", "plugin-step-line svelte-1xq5awa");
    },
    m(t, l) {
      y(t, e, l);
    },
    d(t) {
      t && k(e);
    }
  };
}
function at(n) {
  let e, t, l, s, i, r, o;
  t = new qn({
    props: {
      text: (
        /*tooltipText*/
        n[5][
          /*plugin*/
          n[17].tag
        ]
      ),
      position: "bottom",
      $$slots: { default: [Gn] },
      $$scope: { ctx: n }
    }
  });
  let c = (
    /*i*/
    n[19] < /*plugins*/
    n[7].length - 1 && Vn()
  );
  return {
    c() {
      e = h("div"), Q(t.$$.fragment), l = j(), s = h("p"), s.textContent = `${/*plugin*/
      n[17].label}`, i = j(), c && c.c(), r = x(), g(s, "class", "svelte-1xq5awa"), g(e, "class", "plugin-step svelte-1xq5awa");
    },
    m(u, f) {
      y(u, e, f), D(t, e, null), _(e, l), _(e, s), y(u, i, f), c && c.m(u, f), y(u, r, f), o = !0;
    },
    p(u, f) {
      const a = {};
      f & /*tooltipText*/
      32 && (a.text = /*tooltipText*/
      u[5][
        /*plugin*/
        u[17].tag
      ]), f & /*$$scope, visited, tagName, pluginStatus*/
      1048604 && (a.$$scope = { dirty: f, ctx: u }), t.$set(a);
    },
    i(u) {
      o || (W(t.$$.fragment, u), o = !0);
    },
    o(u) {
      T(t.$$.fragment, u), o = !1;
    },
    d(u) {
      u && (k(e), k(i), k(r)), K(t), c && c.d(u);
    }
  };
}
function dt(n) {
  let e = (
    /*tagName*/
    n[3]
  ), t, l = (
    /*tagName*/
    n[3] && Se(n)
  );
  return {
    c() {
      l && l.c(), t = x();
    },
    m(s, i) {
      l && l.m(s, i), y(s, t, i);
    },
    p(s, i) {
      /*tagName*/
      s[3] ? e ? S(
        e,
        /*tagName*/
        s[3]
      ) ? (l.d(1), l = Se(s), e = /*tagName*/
      s[3], l.c(), l.m(t.parentNode, t)) : l.p(s, i) : (l = Se(s), e = /*tagName*/
      s[3], l.c(), l.m(t.parentNode, t)) : e && (l.d(1), l = null, e = /*tagName*/
      s[3]);
    },
    d(s) {
      s && k(t), l && l.d(s);
    }
  };
}
function Se(n) {
  let e, t, l, s;
  return {
    c() {
      e = h(
        /*tagName*/
        n[3]
      ), we(
        /*tagName*/
        n[3]
      )(e, { class: "svelte-1xq5awa" });
    },
    m(i, r) {
      y(i, e, r), l || (s = $(t = Sn.call(null, e, {
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
    p(i, r) {
      t && ee(t.update) && r & /*doc, editCount*/
      3 && t.update.call(null, {
        doc: (
          /*doc*/
          i[0]
        ),
        editCount: (
          /*editCount*/
          i[1]
        )
      });
    },
    d(i) {
      i && k(e), l = !1, s();
    }
  };
}
function Hn(n) {
  let e, t, l, s, i, r, o, c, u, f, a, p, w, A, E, v, I, m = ge(
    /*plugins*/
    n[7]
  ), d = [];
  for (let b = 0; b < m.length; b += 1)
    d[b] = at(ft(n, m, b));
  const C = (b) => T(d[b], 1, 1, () => {
    d[b] = null;
  });
  let q = (
    /*tagName*/
    n[3] && dt(n)
  );
  return {
    c() {
      e = h("div"), t = h("div"), l = h("button"), l.textContent = "exit", s = j(), i = h("p"), i.textContent = "Plugin Flow", r = j(), o = h("div");
      for (let b = 0; b < d.length; b += 1)
        d[b].c();
      c = j(), u = h("div"), f = h("button"), f.textContent = "Back", a = j(), p = h("button"), p.textContent = "Next", w = j(), q && q.c(), A = x(), g(l, "class", "back-button svelte-1xq5awa"), g(i, "class", "plugin-flow-title svelte-1xq5awa"), Ge(t, "display", "flex"), Ge(t, "align-items", "center"), Ge(t, "gap", "0.5rem"), g(t, "class", "svelte-1xq5awa"), g(o, "class", "plugin-steps svelte-1xq5awa"), g(f, "class", "back-button svelte-1xq5awa"), g(p, "class", "next-button svelte-1xq5awa"), g(u, "class", "stepper-navigation svelte-1xq5awa"), g(e, "class", "stepper svelte-1xq5awa");
    },
    m(b, Z) {
      y(b, e, Z), _(e, t), _(t, l), _(t, s), _(t, i), _(e, r), _(e, o);
      for (let P = 0; P < d.length; P += 1)
        d[P] && d[P].m(o, null);
      _(e, c), _(e, u), _(u, f), _(u, a), _(u, p), y(b, w, Z), q && q.m(b, Z), y(b, A, Z), E = !0, v || (I = [
        O(
          l,
          "click",
          /*click_handler*/
          n[12]
        ),
        O(
          f,
          "click",
          /*previousPlugin*/
          n[10]
        ),
        O(
          p,
          "click",
          /*nextPlugin*/
          n[9]
        )
      ], v = !0);
    },
    p(b, [Z]) {
      if (Z & /*plugins, tooltipText, visited, tagName, loadPlugin, pluginStatus*/
      444) {
        m = ge(
          /*plugins*/
          b[7]
        );
        let P;
        for (P = 0; P < m.length; P += 1) {
          const M = ft(b, m, P);
          d[P] ? (d[P].p(M, Z), W(d[P], 1)) : (d[P] = at(M), d[P].c(), W(d[P], 1), d[P].m(o, null));
        }
        for (oe(), P = m.length; P < d.length; P += 1)
          C(P);
        re();
      }
      /*tagName*/
      b[3] ? q ? q.p(b, Z) : (q = dt(b), q.c(), q.m(A.parentNode, A)) : q && (q.d(1), q = null);
    },
    i(b) {
      if (!E) {
        for (let Z = 0; Z < m.length; Z += 1)
          W(d[Z]);
        E = !0;
      }
    },
    o(b) {
      d = d.filter(Boolean);
      for (let Z = 0; Z < d.length; Z += 1)
        T(d[Z]);
      E = !1;
    },
    d(b) {
      b && (k(e), k(w), k(A)), Et(d, b), q && q.d(b), v = !1, L(I);
    }
  };
}
function Bn() {
  var n, e;
  const t = document.querySelector("open-scd");
  return (e = (n = t == null ? void 0 : t.shadowRoot) === null || n === void 0 ? void 0 : n.querySelector("compas-layout")) !== null && e !== void 0 ? e : null;
}
function Sn(n, e) {
  return Object.assign(n, e), { update: (t) => Object.assign(n, t) };
}
function zn(n, e, t) {
  let l, { doc: s } = e, { editCount: i = -1 } = e, { host: r } = e, o = null, c = [];
  const u = ["check", "warning", "error"];
  let f = {};
  Fe();
  function a(m) {
    var d;
    (d = Bn()) === null || d === void 0 || d.dispatchEvent(new CustomEvent(
      "toggle-editor-tabs",
      {
        detail: { visible: m },
        bubbles: !0,
        composed: !0
      }
    ));
  }
  const p = [
    {
      tag: "engineering-wizard",
      src: "https://philippilievskibearingpointcom.github.io/oscd-official-plugins-test/plugins/editors/substation.js",
      label: "Substation"
    },
    {
      tag: "substation-explorer",
      src: "https://philippilievskibearingpointcom.github.io/oscd-official-plugins-test/plugins/editors/ied.js",
      label: "IED"
    },
    {
      tag: "communication-editor",
      src: "https://philippilievskibearingpointcom.github.io/oscd-official-plugins-test/plugins/editors/communication.js",
      label: "Communication"
    }
  ];
  function w(m) {
    return At(this, void 0, void 0, function* () {
      const d = yield import(m.src);
      if (customElements.get(m.tag) || customElements.define(m.tag, d.default), t(3, o = m.tag), !c.includes(m.tag)) {
        t(4, c = [...c, m.tag]);
        const C = p.findIndex((q) => q.tag === m.tag);
        t(2, f = Object.assign(Object.assign({}, f), { [m.tag]: u[C] }));
      }
    });
  }
  mt(() => {
    w(p[0]), a(!1);
  });
  function A() {
    const m = p.findIndex((d) => d.tag === o);
    w(p[(m + 1) % p.length]);
  }
  function E() {
    const m = p.findIndex((d) => d.tag === o);
    w(p[(m - 1 + p.length) % p.length]);
  }
  const v = () => a(!0), I = (m) => w(m);
  return n.$$set = (m) => {
    "doc" in m && t(0, s = m.doc), "editCount" in m && t(1, i = m.editCount), "host" in m && t(11, r = m.host);
  }, n.$$.update = () => {
    n.$$.dirty & /*pluginStatus*/
    4 && t(5, l = p.reduce(
      (m, d) => {
        const C = f[d.tag];
        return m[d.tag] = C === "error" ? `Resolve errors in ${d.label}` : C === "warning" ? `Check warnings for ${d.label}` : `Load the ${d.label} editor`, m;
      },
      {}
    ));
  }, [
    s,
    i,
    f,
    o,
    c,
    l,
    a,
    p,
    w,
    A,
    E,
    r,
    v,
    I
  ];
}
class Ln extends U {
  constructor(e) {
    super(), F(this, e, zn, Hn, S, { doc: 0, editCount: 1, host: 11 });
  }
}
function Rn(n) {
  let e, t;
  return e = new Kt({
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
      Q(e.$$.fragment);
    },
    m(l, s) {
      D(e, l, s), t = !0;
    },
    p(l, s) {
      const i = {};
      s & /*processes*/
      8 && (i.processes = /*processes*/
      l[3]), s & /*loading*/
      64 && (i.loading = /*loading*/
      l[6]), s & /*errorMsg*/
      128 && (i.errorMsg = /*errorMsg*/
      l[7]), e.$set(i);
    },
    i(l) {
      t || (W(e.$$.fragment, l), t = !0);
    },
    o(l) {
      T(e.$$.fragment, l), t = !1;
    },
    d(l) {
      K(e, l);
    }
  };
}
function Xn(n) {
  let e, t;
  return e = new tn({ props: { proc: (
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
      Q(e.$$.fragment);
    },
    m(l, s) {
      D(e, l, s), t = !0;
    },
    p(l, s) {
      const i = {};
      s & /*selected*/
      16 && (i.proc = /*selected*/
      l[4]), e.$set(i);
    },
    i(l) {
      t || (W(e.$$.fragment, l), t = !0);
    },
    o(l) {
      T(e.$$.fragment, l), t = !1;
    },
    d(l) {
      K(e, l);
    }
  };
}
function Fn(n) {
  let e, t;
  return e = new Ln({
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
      )
    }
  }), {
    c() {
      Q(e.$$.fragment);
    },
    m(l, s) {
      D(e, l, s), t = !0;
    },
    p(l, s) {
      const i = {};
      s & /*doc*/
      1 && (i.doc = /*doc*/
      l[0]), s & /*editCount*/
      2 && (i.editCount = /*editCount*/
      l[1]), s & /*host*/
      4 && (i.host = /*host*/
      l[2]), e.$set(i);
    },
    i(l) {
      t || (W(e.$$.fragment, l), t = !0);
    },
    o(l) {
      T(e.$$.fragment, l), t = !1;
    },
    d(l) {
      K(e, l);
    }
  };
}
function Un(n) {
  let e, t, l, s;
  const i = [Fn, Xn, Rn], r = [];
  function o(c, u) {
    return (
      /*running*/
      c[5] ? 0 : (
        /*selected*/
        c[4] ? 1 : 2
      )
    );
  }
  return e = o(n), t = r[e] = i[e](n), {
    c() {
      t.c(), l = x();
    },
    m(c, u) {
      r[e].m(c, u), y(c, l, u), s = !0;
    },
    p(c, [u]) {
      let f = e;
      e = o(c), e === f ? r[e].p(c, u) : (oe(), T(r[f], 1, 1, () => {
        r[f] = null;
      }), re(), t = r[e], t ? t.p(c, u) : (t = r[e] = i[e](c), t.c()), W(t, 1), t.m(l.parentNode, l));
    },
    i(c) {
      s || (W(t), s = !0);
    },
    o(c) {
      T(t), s = !1;
    },
    d(c) {
      c && k(l), r[e].d(c);
    }
  };
}
function On(n, e, t) {
  let { doc: l } = e, { editCount: s = -1 } = e, { host: i } = e, r = [], o = null, c = null, u = !0, f = "";
  const a = new URL("data:application/xml;base64,PHByb2Nlc3Nlcz4KICA8cHJvY2Vzcz4KICAgIDxpZD5zdGFuZGFyZC1wcm9jZXNzLTE8L2lkPgogICAgPHZlcnNpb24+MC4wLjE8L3ZlcnNpb24+CiAgICA8bmFtZT5TdGFuZGFyZCBQcm9jZXNzIDE8L25hbWU+CiAgICA8ZGVzY3JpcHRpb24+VGhpcyBpcyBhIHN0YW5kYXJkaXplZCBwcm9jZXNzIHVzZWQgZm9yIHRlc3RpbmcgcHVycG9zZXMgb25seTwvZGVzY3JpcHRpb24+CiAgICA8cGx1Z2lucy1zZXF1ZW5jZT4KICAgICAgPHBsdWdpbj4KICAgICAgICA8aWQ+c3Vic3RhdGlvbjwvaWQ+CiAgICAgICAgPG5hbWU+U3Vic3RhdGlvbjwvbmFtZT4KICAgICAgPC9wbHVnaW4+CiAgICAgIDxwbHVnaW4+CiAgICAgICAgPGlkPmllZDwvaWQ+CiAgICAgICAgPG5hbWU+SUVEPC9uYW1lPgogICAgICA8L3BsdWdpbj4KICAgICAgPHBsdWdpbj4KICAgICAgICA8aWQ+Y29tbXVuaWNhdGlvbi1leHBsb3JlcjwvaWQ+CiAgICAgICAgPG5hbWU+Q29tbXVuaWNhdGlvbiBFeHBsb3JlcjwvbmFtZT4KICAgICAgPC9wbHVnaW4+CiAgICA8L3BsdWdpbnMtc2VxdWVuY2U+CiAgPC9wcm9jZXNzPgoKICA8cHJvY2Vzcz4KICAgIDxpZD5zdGFuZGFyZC1wcm9jZXNzLTI8L2lkPgogICAgPHZlcnNpb24+MC4wLjE8L3ZlcnNpb24+CiAgICA8bmFtZT5TdGFuZGFyZCBQcm9jZXNzIDI8L25hbWU+CiAgICA8ZGVzY3JpcHRpb24+VGhpcyBpcyBhIHN0YW5kYXJkaXplZCBwcm9jZXNzIHVzZWQgZm9yIHRlc3RpbmcgcHVycG9zZXMgb25seTwvZGVzY3JpcHRpb24+CiAgICA8cGx1Z2lucy1zZXF1ZW5jZT4KICAgICAgPHBsdWdpbj4KICAgICAgICA8aWQ+c3Vic3RhdGlvbjwvaWQ+CiAgICAgICAgPG5hbWU+U3Vic3RhdGlvbjwvbmFtZT4KICAgICAgPC9wbHVnaW4+CiAgICAgIDxwbHVnaW4+CiAgICAgICAgPGlkPnh5ejwvaWQ+CiAgICAgICAgPG5hbWU+WFlaPC9uYW1lPgogICAgICA8L3BsdWdpbj4KICAgICAgPHBsdWdpbj4KICAgICAgICA8aWQ+bmV0d29yay1leHBsb3JlcjwvaWQ+CiAgICAgICAgPG5hbWU+TmV0d29yayBFeHBsb3JlcjwvbmFtZT4KICAgICAgPC9wbHVnaW4+CiAgICA8L3BsdWdpbnMtc2VxdWVuY2U+CiAgPC9wcm9jZXNzPgoKICA8cHJvY2Vzcz4KICAgIDxpZD5zdGFuZGFyZC1wcm9jZXNzLTM8L2lkPgogICAgPHZlcnNpb24+MC4wLjE8L3ZlcnNpb24+CiAgICA8bmFtZT5TdGFuZGFyZCBQcm9jZXNzIDM8L25hbWU+CiAgICA8ZGVzY3JpcHRpb24+VGhpcyBpcyBhIHN0YW5kYXJkaXplZCBwcm9jZXNzIHVzZWQgZm9yIHRlc3RpbmcgcHVycG9zZXMgb25seTwvZGVzY3JpcHRpb24+CiAgICA8cGx1Z2lucy1zZXF1ZW5jZT4KICAgICAgPHBsdWdpbj4KICAgICAgICA8aWQ+c3Vic3RhdGlvbjwvaWQ+CiAgICAgICAgPG5hbWU+U3Vic3RhdGlvbjwvbmFtZT4KICAgICAgPC9wbHVnaW4+CiAgICAgIDxwbHVnaW4+CiAgICAgICAgPGlkPnNpdGlwZTwvaWQ+CiAgICAgICAgPG5hbWU+U2l0aXBlPC9uYW1lPgogICAgICA8L3BsdWdpbj4KICAgICAgPHBsdWdpbj4KICAgICAgICA8aWQ+aWVkPC9pZD4KICAgICAgICA8bmFtZT5JRUQ8L25hbWU+CiAgICAgIDwvcGx1Z2luPgogICAgPC9wbHVnaW5zLXNlcXVlbmNlPgogIDwvcHJvY2Vzcz4KPC9wcm9jZXNzZXM+Cg==", import.meta.url).href, p = (d) => {
    var C, q;
    return (q = (C = d == null ? void 0 : d.textContent) === null || C === void 0 ? void 0 : C.trim()) !== null && q !== void 0 ? q : "";
  }, w = (d) => Array.from(d.getElementsByTagName("process")).map((C) => {
    const q = Array.from(C.getElementsByTagName("plugin")).map((b) => ({
      id: p(b.querySelector("id")),
      name: p(b.querySelector("name"))
    }));
    return {
      id: p(C.querySelector(":scope > id")),
      version: p(C.querySelector(":scope > version")),
      name: p(C.querySelector(":scope > name")),
      description: p(C.querySelector(":scope > description")),
      plugins: q
    };
  });
  function A() {
    return At(this, void 0, void 0, function* () {
      t(6, u = !0), t(7, f = "");
      try {
        const d = yield fetch(a, { cache: "no-cache" });
        if (!d.ok)
          throw new Error(`HTTP ${d.status}`);
        const C = new DOMParser().parseFromString(yield d.text(), "application/xml");
        if (C.querySelector("parsererror"))
          throw new Error("Invalid XML file format.");
        t(3, r = w(C));
      } catch (d) {
        t(3, r = []), t(7, f = d.message || "Failed to load processes.");
      } finally {
        t(6, u = !1);
      }
    });
  }
  mt(A);
  function E(d) {
    t(5, c = d), t(4, o = null);
  }
  function v(d) {
    t(4, o = d.detail);
  }
  function I(d) {
    E(d.detail);
  }
  function m() {
    t(4, o = null);
  }
  return n.$$set = (d) => {
    "doc" in d && t(0, l = d.doc), "editCount" in d && t(1, s = d.editCount), "host" in d && t(2, i = d.host);
  }, [
    l,
    s,
    i,
    r,
    o,
    c,
    u,
    f,
    v,
    I,
    m
  ];
}
class Dn extends U {
  constructor(e) {
    super(), F(this, e, On, Un, S, { doc: 0, editCount: 1, host: 2 });
  }
}
function gt(n) {
  let e, t;
  return e = new Dn({
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
      Q(e.$$.fragment);
    },
    m(l, s) {
      D(e, l, s), t = !0;
    },
    p(l, s) {
      const i = {};
      s & /*doc*/
      1 && (i.doc = /*doc*/
      l[0]), s & /*editCount*/
      4 && (i.editCount = /*editCount*/
      l[2]), e.$set(i);
    },
    i(l) {
      t || (W(e.$$.fragment, l), t = !0);
    },
    o(l) {
      T(e.$$.fragment, l), t = !1;
    },
    d(l) {
      K(e, l);
    }
  };
}
function Kn(n) {
  let e, t, l, s, i, r = (
    /*doc*/
    (n[0] || /*dev*/
    n[1]) && gt(n)
  );
  return {
    c() {
      r && r.c(), e = j(), t = h("input"), l = j(), s = h("input"), g(t, "type", "hidden"), g(t, "name", "package-name"), t.value = wt, g(s, "type", "hidden"), g(s, "name", "package-version"), s.value = kt;
    },
    m(o, c) {
      r && r.m(o, c), y(o, e, c), y(o, t, c), y(o, l, c), y(o, s, c), i = !0;
    },
    p(o, [c]) {
      /*doc*/
      o[0] || /*dev*/
      o[1] ? r ? (r.p(o, c), c & /*doc, dev*/
      3 && W(r, 1)) : (r = gt(o), r.c(), W(r, 1), r.m(e.parentNode, e)) : r && (oe(), T(r, 1, 1, () => {
        r = null;
      }), re());
    },
    i(o) {
      i || (W(r), i = !0);
    },
    o(o) {
      T(r), i = !1;
    },
    d(o) {
      o && (k(e), k(t), k(l), k(s)), r && r.d(o);
    }
  };
}
function Yn(n, e, t) {
  let { doc: l } = e, { dev: s = !1 } = e, { editCount: i = 0 } = e;
  return console.log("editcount", i), n.$$set = (r) => {
    "doc" in r && t(0, l = r.doc), "dev" in r && t(1, s = r.dev), "editCount" in r && t(2, i = r.editCount);
  }, [l, s, i];
}
class Qn extends U {
  constructor(e) {
    super(), F(this, e, Yn, Kn, S, { doc: 0, dev: 1, editCount: 2 });
  }
}
class el extends HTMLElement {
  connectedCallback() {
    var t;
    this.attachShadow({ mode: "open" }), this.plugin = new Qn({
      target: this.shadowRoot,
      props: {
        doc: this._doc,
        editCount: -1,
        host: this
      }
    });
    const e = Jn();
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
function Jn() {
  const n = `${wt}-v${kt}-style`, e = $n(), t = document.createElement("link");
  return t.rel = "stylesheet", t.type = "text/css", t.href = e, t.id = n, t;
}
function $n() {
  const n = new URL(import.meta.url), e = n.origin, t = n.pathname.split("/").slice(0, -1).filter(Boolean).join("/");
  return [e, t, "style.css"].filter(Boolean).join("/");
}
export {
  el as default
};
