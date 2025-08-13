var It = Object.defineProperty;
var Et = (n, e, t) => e in n ? It(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var Me = (n, e, t) => (Et(n, typeof e != "symbol" ? e + "" : e, t), t);
function j() {
}
function L(n, e) {
  for (const t in e)
    n[t] = e[t];
  return (
    /** @type {T & S} */
    n
  );
}
function gt(n) {
  return n();
}
function Ke() {
  return /* @__PURE__ */ Object.create(null);
}
function z(n) {
  n.forEach(gt);
}
function te(n) {
  return typeof n == "function";
}
function H(n, e) {
  return n != n ? e == e : n !== e || n && typeof n == "object" || typeof n == "function";
}
function Zt(n) {
  return Object.keys(n).length === 0;
}
function ke(n, e, t, l) {
  if (n) {
    const s = pt(n, e, t, l);
    return n[0](s);
  }
}
function pt(n, e, t, l) {
  return n[1] && l ? L(t.ctx.slice(), n[1](l(e))) : t.ctx;
}
function Ae(n, e, t, l) {
  if (n[2] && l) {
    const s = n[2](l(t));
    if (e.dirty === void 0)
      return s;
    if (typeof s == "object") {
      const i = [], o = Math.max(e.dirty.length, s.length);
      for (let r = 0; r < o; r += 1)
        i[r] = e.dirty[r] | s[r];
      return i;
    }
    return e.dirty | s;
  }
  return e.dirty;
}
function Ie(n, e, t, l, s, i) {
  if (s) {
    const o = pt(e, t, l, i);
    n.p(o, s);
  }
}
function Ee(n) {
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
function de(n, e) {
  const t = {};
  e = new Set(e);
  for (const l in n)
    !e.has(l) && l[0] !== "$" && (t[l] = n[l]);
  return t;
}
function $(n) {
  return n && te(n.destroy) ? n.destroy : j;
}
function m(n, e) {
  n.appendChild(e);
}
function A(n, e, t) {
  n.insertBefore(e, t || null);
}
function k(n) {
  n.parentNode && n.parentNode.removeChild(n);
}
function Pt(n, e) {
  for (let t = 0; t < n.length; t += 1)
    n[t] && n[t].d(e);
}
function b(n) {
  return document.createElement(n);
}
function ie(n) {
  return document.createElementNS("http://www.w3.org/2000/svg", n);
}
function G(n) {
  return document.createTextNode(n);
}
function N() {
  return G(" ");
}
function x() {
  return G("");
}
function F(n, e, t, l) {
  return n.addEventListener(e, t, l), () => n.removeEventListener(e, t, l);
}
function _(n, e, t) {
  t == null ? n.removeAttribute(e) : n.getAttribute(e) !== t && n.setAttribute(e, t);
}
const Tt = ["width", "height"];
function De(n, e) {
  const t = Object.getOwnPropertyDescriptors(n.__proto__);
  for (const l in e)
    e[l] == null ? n.removeAttribute(l) : l === "style" ? n.style.cssText = e[l] : l === "__value" ? n.value = n[l] = e[l] : t[l] && t[l].set && Tt.indexOf(l) === -1 ? n[l] = e[l] : _(n, l, e[l]);
}
function Qe(n, e) {
  for (const t in e)
    _(n, t, e[t]);
}
function qt(n, e) {
  Object.keys(e).forEach((t) => {
    Nt(n, t, e[t]);
  });
}
function Nt(n, e, t) {
  const l = e.toLowerCase();
  l in n ? n[l] = typeof n[l] == "boolean" && t === "" ? !0 : t : e in n ? n[e] = typeof n[e] == "boolean" && t === "" ? !0 : t : _(n, e, t);
}
function we(n) {
  return /-/.test(n) ? qt : De;
}
function Wt(n) {
  return Array.from(n.childNodes);
}
function O(n, e) {
  e = "" + e, n.data !== e && (n.data = /** @type {string} */
  e);
}
function Te(n, e, t, l) {
  t == null ? n.style.removeProperty(e) : n.style.setProperty(e, t, "");
}
function ce(n, e, t) {
  n.classList.toggle(e, !!t);
}
function jt(n, e, { bubbles: t = !1, cancelable: l = !1 } = {}) {
  return new CustomEvent(n, { detail: e, bubbles: t, cancelable: l });
}
function Je(n, e) {
  return new n(e);
}
let ye;
function ve(n) {
  ye = n;
}
function ne() {
  if (!ye)
    throw new Error("Function called outside component initialization");
  return ye;
}
function _t(n) {
  ne().$$.on_mount.push(n);
}
function mt(n) {
  ne().$$.on_destroy.push(n);
}
function Ue() {
  const n = ne();
  return (e, t, { cancelable: l = !1 } = {}) => {
    const s = n.$$.callbacks[e];
    if (s) {
      const i = jt(
        /** @type {string} */
        e,
        t,
        { cancelable: l }
      );
      return s.slice().forEach((o) => {
        o.call(n, i);
      }), !i.defaultPrevented;
    }
    return !0;
  };
}
function St(n, e) {
  return ne().$$.context.set(n, e), e;
}
function ht(n) {
  return ne().$$.context.get(n);
}
const ae = [], ee = [];
let fe = [];
const $e = [], Mt = /* @__PURE__ */ Promise.resolve();
let ze = !1;
function Gt() {
  ze || (ze = !0, Mt.then(bt));
}
function Le(n) {
  fe.push(n);
}
const Ge = /* @__PURE__ */ new Set();
let ue = 0;
function bt() {
  if (ue !== 0)
    return;
  const n = ye;
  do {
    try {
      for (; ue < ae.length; ) {
        const e = ae[ue];
        ue++, ve(e), Bt(e.$$);
      }
    } catch (e) {
      throw ae.length = 0, ue = 0, e;
    }
    for (ve(null), ae.length = 0, ue = 0; ee.length; )
      ee.pop()();
    for (let e = 0; e < fe.length; e += 1) {
      const t = fe[e];
      Ge.has(t) || (Ge.add(t), t());
    }
    fe.length = 0;
  } while (ae.length);
  for (; $e.length; )
    $e.pop()();
  ze = !1, Ge.clear(), ve(n);
}
function Bt(n) {
  if (n.fragment !== null) {
    n.update(), z(n.before_update);
    const e = n.dirty;
    n.dirty = [-1], n.fragment && n.fragment.p(n.ctx, e), n.after_update.forEach(Le);
  }
}
function Vt(n) {
  const e = [], t = [];
  fe.forEach((l) => n.indexOf(l) === -1 ? e.push(l) : t.push(l)), t.forEach((l) => l()), fe = e;
}
const qe = /* @__PURE__ */ new Set();
let se;
function oe() {
  se = {
    r: 0,
    c: [],
    p: se
    // parent group
  };
}
function re() {
  se.r || z(se.c), se = se.p;
}
function q(n, e) {
  n && n.i && (qe.delete(n), n.i(e));
}
function W(n, e, t, l) {
  if (n && n.o) {
    if (qe.has(n))
      return;
    qe.add(n), se.c.push(() => {
      qe.delete(n), l && (t && n.d(1), l());
    }), n.o(e);
  } else
    l && l();
}
function ge(n) {
  return (n == null ? void 0 : n.length) !== void 0 ? n : Array.from(n);
}
function vt(n, e) {
  n.d(1), e.delete(n.key);
}
function Ct(n, e, t, l, s, i, o, r, c, u, a, f) {
  let g = n.length, w = i.length, y = g;
  const P = {};
  for (; y--; )
    P[n[y].key] = y;
  const h = [], I = /* @__PURE__ */ new Map(), p = /* @__PURE__ */ new Map(), d = [];
  for (y = w; y--; ) {
    const E = f(s, i, y), Z = t(E);
    let S = o.get(Z);
    S ? d.push(() => S.p(E, e)) : (S = u(Z, E), S.c()), I.set(Z, h[y] = S), Z in P && p.set(Z, Math.abs(y - P[Z]));
  }
  const C = /* @__PURE__ */ new Set(), T = /* @__PURE__ */ new Set();
  function v(E) {
    q(E, 1), E.m(r, a), o.set(E.key, E), a = E.first, w--;
  }
  for (; g && w; ) {
    const E = h[w - 1], Z = n[g - 1], S = E.key, D = Z.key;
    E === Z ? (a = E.first, g--, w--) : I.has(D) ? !o.has(S) || C.has(S) ? v(E) : T.has(D) ? g-- : p.get(S) > p.get(D) ? (T.add(S), v(E)) : (C.add(D), g--) : (c(Z, o), g--);
  }
  for (; g--; ) {
    const E = n[g];
    I.has(E.key) || c(E, o);
  }
  for (; w; )
    v(h[w - 1]);
  return z(d), h;
}
function pe(n, e) {
  const t = {}, l = {}, s = { $$scope: 1 };
  let i = n.length;
  for (; i--; ) {
    const o = n[i], r = e[i];
    if (r) {
      for (const c in o)
        c in r || (l[c] = 1);
      for (const c in r)
        s[c] || (t[c] = r[c], s[c] = 1);
      n[i] = r;
    } else
      for (const c in o)
        s[c] = 1;
  }
  for (const o in l)
    o in t || (t[o] = void 0);
  return t;
}
function Pe(n) {
  return typeof n == "object" && n !== null ? n : {};
}
function Q(n) {
  n && n.c();
}
function X(n, e, t) {
  const { fragment: l, after_update: s } = n.$$;
  l && l.m(e, t), Le(() => {
    const i = n.$$.on_mount.map(gt).filter(te);
    n.$$.on_destroy ? n.$$.on_destroy.push(...i) : z(i), n.$$.on_mount = [];
  }), s.forEach(Le);
}
function Y(n, e) {
  const t = n.$$;
  t.fragment !== null && (Vt(t.after_update), z(t.on_destroy), t.fragment && t.fragment.d(e), t.on_destroy = t.fragment = null, t.ctx = []);
}
function Ht(n, e) {
  n.$$.dirty[0] === -1 && (ae.push(n), Gt(), n.$$.dirty.fill(0)), n.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function U(n, e, t, l, s, i, o = null, r = [-1]) {
  const c = ye;
  ve(n);
  const u = n.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: i,
    update: j,
    not_equal: s,
    bound: Ke(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (c ? c.$$.context : [])),
    // everything else
    callbacks: Ke(),
    dirty: r,
    skip_bound: !1,
    root: e.target || c.$$.root
  };
  o && o(u.root);
  let a = !1;
  if (u.ctx = t ? t(n, e.props || {}, (f, g, ...w) => {
    const y = w.length ? w[0] : g;
    return u.ctx && s(u.ctx[f], u.ctx[f] = y) && (!u.skip_bound && u.bound[f] && u.bound[f](y), a && Ht(n, f)), g;
  }) : [], u.update(), a = !0, z(u.before_update), u.fragment = l ? l(u.ctx) : !1, e.target) {
    if (e.hydrate) {
      const f = Wt(e.target);
      u.fragment && u.fragment.l(f), f.forEach(k);
    } else
      u.fragment && u.fragment.c();
    e.intro && q(n.$$.fragment), X(n, e.target, e.anchor), bt();
  }
  ve(c);
}
class R {
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
    Y(this, 1), this.$destroy = j;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, t) {
    if (!te(t))
      return j;
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
    this.$$set && !Zt(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const Dt = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(Dt);
const wt = "archive-explorer", yt = "0.0.1";
function kt(n, e, t, l) {
  function s(i) {
    return i instanceof t ? i : new t(function(o) {
      o(i);
    });
  }
  return new (t || (t = Promise))(function(i, o) {
    function r(a) {
      try {
        u(l.next(a));
      } catch (f) {
        o(f);
      }
    }
    function c(a) {
      try {
        u(l.throw(a));
      } catch (f) {
        o(f);
      }
    }
    function u(a) {
      a.done ? i(a.value) : s(a.value).then(r, c);
    }
    u((l = l.apply(n, e || [])).next());
  });
}
function xe(n, e, t) {
  const l = n.slice();
  return l[6] = e[t], l[8] = t, l;
}
function zt(n) {
  let e, t = [], l = /* @__PURE__ */ new Map(), s = ge(
    /*processes*/
    n[0]
  );
  const i = (o) => (
    /*p*/
    o[6].id
  );
  for (let o = 0; o < s.length; o += 1) {
    let r = xe(n, s, o), c = i(r);
    l.set(c, t[o] = tt(c, r));
  }
  return {
    c() {
      e = b("ol");
      for (let o = 0; o < t.length; o += 1)
        t[o].c();
      _(e, "class", "processes-list svelte-12dv09y");
    },
    m(o, r) {
      A(o, e, r);
      for (let c = 0; c < t.length; c += 1)
        t[c] && t[c].m(e, null);
    },
    p(o, r) {
      r & /*dispatch, processes*/
      9 && (s = ge(
        /*processes*/
        o[0]
      ), t = Ct(t, r, i, 1, o, s, l, e, vt, tt, null, xe));
    },
    d(o) {
      o && k(e);
      for (let r = 0; r < t.length; r += 1)
        t[r].d();
    }
  };
}
function Lt(n) {
  let e;
  return {
    c() {
      e = b("p"), e.textContent = "No processes found.", _(e, "class", "svelte-12dv09y");
    },
    m(t, l) {
      A(t, e, l);
    },
    p: j,
    d(t) {
      t && k(e);
    }
  };
}
function Ot(n) {
  let e, t;
  return {
    c() {
      e = b("p"), t = G(
        /*errorMsg*/
        n[2]
      ), _(e, "class", "error svelte-12dv09y");
    },
    m(l, s) {
      A(l, e, s), m(e, t);
    },
    p(l, s) {
      s & /*errorMsg*/
      4 && O(
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
      e = b("p"), e.textContent = "Loading…", _(e, "class", "svelte-12dv09y");
    },
    m(t, l) {
      A(t, e, l);
    },
    p: j,
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
      e = b("p"), l = G(t), _(e, "class", "process-description svelte-12dv09y");
    },
    m(s, i) {
      A(s, e, i), m(e, l);
    },
    p(s, i) {
      i & /*processes*/
      1 && t !== (t = /*p*/
      s[6].description + "") && O(l, t);
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
  ), o, r, c, u, a, f = (
    /*p*/
    (e[6].name || /*p*/
    e[6].id) + ""
  ), g, w, y, P, h, I, p, d, C, T, v = (
    /*p*/
    e[6].description && et(e)
  );
  function E() {
    return (
      /*click_handler*/
      e[4](
        /*p*/
        e[6]
      )
    );
  }
  function Z() {
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
      t = b("li"), l = b("div"), s = b("span"), o = G(i), r = G("."), c = N(), u = b("div"), a = b("p"), g = G(f), w = N(), v && v.c(), y = N(), P = b("div"), h = b("button"), h.textContent = "START PROCESS", I = N(), p = b("button"), p.textContent = "VIEW DETAILS", d = N(), _(s, "class", "order svelte-12dv09y"), _(a, "class", "process-name svelte-12dv09y"), _(u, "class", "svelte-12dv09y"), _(l, "class", "process-header svelte-12dv09y"), _(h, "class", "btn svelte-12dv09y"), _(p, "class", "btn primary svelte-12dv09y"), _(P, "class", "actions svelte-12dv09y"), _(t, "class", "process-card svelte-12dv09y"), this.first = t;
    },
    m(S, D) {
      A(S, t, D), m(t, l), m(l, s), m(s, o), m(s, r), m(l, c), m(l, u), m(u, a), m(a, g), m(u, w), v && v.m(u, null), m(t, y), m(t, P), m(P, h), m(P, I), m(P, p), m(t, d), C || (T = [
        F(h, "click", E),
        F(p, "click", Z)
      ], C = !0);
    },
    p(S, D) {
      e = S, D & /*processes*/
      1 && i !== (i = /*i*/
      e[8] + 1 + "") && O(o, i), D & /*processes*/
      1 && f !== (f = /*p*/
      (e[6].name || /*p*/
      e[6].id) + "") && O(g, f), /*p*/
      e[6].description ? v ? v.p(e, D) : (v = et(e), v.c(), v.m(u, null)) : v && (v.d(1), v = null);
    },
    d(S) {
      S && k(t), v && v.d(), C = !1, z(T);
    }
  };
}
function Rt(n) {
  let e, t, l;
  function s(r, c) {
    return (
      /*loading*/
      r[1] ? Ut : (
        /*errorMsg*/
        r[2] ? Ot : (
          /*processes*/
          r[0].length === 0 ? Lt : zt
        )
      )
    );
  }
  let i = s(n), o = i(n);
  return {
    c() {
      e = b("div"), t = b("h1"), t.textContent = "Engineering Processes", l = N(), o.c(), _(t, "class", "title svelte-12dv09y"), _(e, "class", "container svelte-12dv09y");
    },
    m(r, c) {
      A(r, e, c), m(e, t), m(e, l), o.m(e, null);
    },
    p(r, [c]) {
      i === (i = s(r)) && o ? o.p(r, c) : (o.d(1), o = i(r), o && (o.c(), o.m(e, null)));
    },
    i: j,
    o: j,
    d(r) {
      r && k(e), o.d();
    }
  };
}
function Ft(n, e, t) {
  let { processes: l = [] } = e, { loading: s = !1 } = e, { errorMsg: i = "" } = e;
  const o = Ue(), r = (u) => o("start", u), c = (u) => o("view", u);
  return n.$$set = (u) => {
    "processes" in u && t(0, l = u.processes), "loading" in u && t(1, s = u.loading), "errorMsg" in u && t(2, i = u.errorMsg);
  }, [l, s, i, o, r, c];
}
class Xt extends R {
  constructor(e) {
    super(), U(this, e, Ft, Rt, H, { processes: 0, loading: 1, errorMsg: 2 });
  }
}
function nt(n, e, t) {
  const l = n.slice();
  return l[5] = e[t], l[7] = t, l;
}
function Yt(n) {
  let e, t, l, s, i, o, r = (
    /*proc*/
    n[0].id + ""
  ), c, u, a, f, g, w = (
    /*proc*/
    n[0].name + ""
  ), y, P, h, I, p, d = (
    /*proc*/
    n[0].version + ""
  ), C, T, v, E, Z, S = (
    /*proc*/
    n[0].description + ""
  ), D, We, _e, je, me, le, he, Fe, be, Se, Xe;
  function Ye(M, V) {
    return !/*proc*/
    M[0].plugins || /*proc*/
    M[0].plugins.length === 0 ? Jt : Qt;
  }
  let Ze = Ye(n), K = Ze(n);
  return {
    c() {
      e = b("h1"), e.textContent = "Process Details", t = N(), l = b("div"), s = b("div"), i = b("span"), i.textContent = "ID", o = b("span"), c = G(r), u = N(), a = b("div"), f = b("span"), f.textContent = "Name", g = b("span"), y = G(w), P = N(), h = b("div"), I = b("span"), I.textContent = "Version", p = b("span"), C = G(d), T = N(), v = b("div"), E = b("span"), E.textContent = "Description", Z = b("span"), D = G(S), We = N(), _e = b("h2"), _e.textContent = "Plugins", je = N(), K.c(), me = N(), le = b("div"), he = b("button"), he.textContent = "Back", Fe = N(), be = b("button"), be.textContent = "START PROCESS", _(e, "class", "title svelte-1qn566t"), _(i, "class", "label svelte-1qn566t"), _(o, "class", "value svelte-1qn566t"), _(s, "class", "row svelte-1qn566t"), _(f, "class", "label svelte-1qn566t"), _(g, "class", "value svelte-1qn566t"), _(a, "class", "row svelte-1qn566t"), _(I, "class", "label svelte-1qn566t"), _(p, "class", "value svelte-1qn566t"), _(h, "class", "row svelte-1qn566t"), _(E, "class", "label svelte-1qn566t"), _(Z, "class", "value svelte-1qn566t"), _(v, "class", "row svelte-1qn566t"), _(l, "class", "card svelte-1qn566t"), _(_e, "class", "subtitle svelte-1qn566t"), _(he, "class", "btn svelte-1qn566t"), _(be, "class", "btn primary svelte-1qn566t"), _(le, "class", "actions svelte-1qn566t");
    },
    m(M, V) {
      A(M, e, V), A(M, t, V), A(M, l, V), m(l, s), m(s, i), m(s, o), m(o, c), m(l, u), m(l, a), m(a, f), m(a, g), m(g, y), m(l, P), m(l, h), m(h, I), m(h, p), m(p, C), m(l, T), m(l, v), m(v, E), m(v, Z), m(Z, D), A(M, We, V), A(M, _e, V), A(M, je, V), K.m(M, V), A(M, me, V), A(M, le, V), m(le, he), m(le, Fe), m(le, be), Se || (Xe = [
        F(
          he,
          "click",
          /*click_handler_1*/
          n[3]
        ),
        F(
          be,
          "click",
          /*click_handler_2*/
          n[4]
        )
      ], Se = !0);
    },
    p(M, V) {
      V & /*proc*/
      1 && r !== (r = /*proc*/
      M[0].id + "") && O(c, r), V & /*proc*/
      1 && w !== (w = /*proc*/
      M[0].name + "") && O(y, w), V & /*proc*/
      1 && d !== (d = /*proc*/
      M[0].version + "") && O(C, d), V & /*proc*/
      1 && S !== (S = /*proc*/
      M[0].description + "") && O(D, S), Ze === (Ze = Ye(M)) && K ? K.p(M, V) : (K.d(1), K = Ze(M), K && (K.c(), K.m(me.parentNode, me)));
    },
    d(M) {
      M && (k(e), k(t), k(l), k(We), k(_e), k(je), k(me), k(le)), K.d(M), Se = !1, z(Xe);
    }
  };
}
function Kt(n) {
  let e, t, l, s, i, o;
  return {
    c() {
      e = b("div"), t = b("p"), t.textContent = "No process selected.", l = N(), s = b("button"), s.textContent = "Back to list", _(t, "class", "svelte-1qn566t"), _(s, "class", "btn svelte-1qn566t"), _(e, "class", "empty-state svelte-1qn566t");
    },
    m(r, c) {
      A(r, e, c), m(e, t), m(e, l), m(e, s), i || (o = F(
        s,
        "click",
        /*click_handler*/
        n[2]
      ), i = !0);
    },
    p: j,
    d(r) {
      r && k(e), i = !1, o();
    }
  };
}
function Qt(n) {
  let e, t = [], l = /* @__PURE__ */ new Map(), s = ge(
    /*proc*/
    n[0].plugins
  );
  const i = (o) => (
    /*pl*/
    o[5].id
  );
  for (let o = 0; o < s.length; o += 1) {
    let r = nt(n, s, o), c = i(r);
    l.set(c, t[o] = it(c, r));
  }
  return {
    c() {
      e = b("ol");
      for (let o = 0; o < t.length; o += 1)
        t[o].c();
      _(e, "class", "plugins-list svelte-1qn566t");
    },
    m(o, r) {
      A(o, e, r);
      for (let c = 0; c < t.length; c += 1)
        t[c] && t[c].m(e, null);
    },
    p(o, r) {
      r & /*proc*/
      1 && (s = ge(
        /*proc*/
        o[0].plugins
      ), t = Ct(t, r, i, 1, o, s, l, e, vt, it, null, nt));
    },
    d(o) {
      o && k(e);
      for (let r = 0; r < t.length; r += 1)
        t[r].d();
    }
  };
}
function Jt(n) {
  let e;
  return {
    c() {
      e = b("p"), e.textContent = "No plugins defined for this process.", _(e, "class", "muted svelte-1qn566t");
    },
    m(t, l) {
      A(t, e, l);
    },
    p: j,
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
      e = b("p"), l = G(t), _(e, "class", "plugin-type svelte-1qn566t");
    },
    m(s, i) {
      A(s, e, i), m(e, l);
    },
    p(s, i) {
      i & /*proc*/
      1 && t !== (t = /*pl*/
      s[5].type + "") && O(l, t);
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
      e = b("p"), l = G(t), _(e, "class", "description svelte-1qn566t");
    },
    m(s, i) {
      A(s, e, i), m(e, l);
    },
    p(s, i) {
      i & /*proc*/
      1 && t !== (t = /*pl*/
      s[5].description + "") && O(l, t);
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
  ), o, r, c, u, a, f = (
    /*pl*/
    (e[5].name || /*pl*/
    e[5].id) + ""
  ), g, w, y, P, h = (
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
      t = b("li"), l = b("div"), s = b("span"), o = G(i), r = G("."), c = N(), u = b("div"), a = b("p"), g = G(f), w = N(), h && h.c(), y = N(), I && I.c(), P = N(), _(s, "class", "order svelte-1qn566t"), _(a, "class", "plugin-name svelte-1qn566t"), _(u, "class", "svelte-1qn566t"), _(l, "class", "plugin-header svelte-1qn566t"), _(t, "class", "plugin-card svelte-1qn566t"), this.first = t;
    },
    m(p, d) {
      A(p, t, d), m(t, l), m(l, s), m(s, o), m(s, r), m(l, c), m(l, u), m(u, a), m(a, g), m(u, w), h && h.m(u, null), m(t, y), I && I.m(t, null), m(t, P);
    },
    p(p, d) {
      e = p, d & /*proc*/
      1 && i !== (i = /*i*/
      e[7] + 1 + "") && O(o, i), d & /*proc*/
      1 && f !== (f = /*pl*/
      (e[5].name || /*pl*/
      e[5].id) + "") && O(g, f), /*pl*/
      e[5].type ? h ? h.p(e, d) : (h = lt(e), h.c(), h.m(u, null)) : h && (h.d(1), h = null), /*pl*/
      e[5].description ? I ? I.p(e, d) : (I = st(e), I.c(), I.m(t, P)) : I && (I.d(1), I = null);
    },
    d(p) {
      p && k(t), h && h.d(), I && I.d();
    }
  };
}
function $t(n) {
  let e;
  function t(i, o) {
    return (
      /*proc*/
      i[0] ? Yt : Kt
    );
  }
  let l = t(n), s = l(n);
  return {
    c() {
      e = b("div"), s.c(), _(e, "class", "container svelte-1qn566t");
    },
    m(i, o) {
      A(i, e, o), s.m(e, null);
    },
    p(i, [o]) {
      l === (l = t(i)) && s ? s.p(i, o) : (s.d(1), s = l(i), s && (s.c(), s.m(e, null)));
    },
    i: j,
    o: j,
    d(i) {
      i && k(e), s.d();
    }
  };
}
function xt(n, e, t) {
  let { proc: l = null } = e;
  const s = Ue(), i = () => s("back"), o = () => s("back"), r = () => s("start", l);
  return n.$$set = (c) => {
    "proc" in c && t(0, l = c.proc);
  }, [l, s, i, o, r];
}
class en extends R {
  constructor(e) {
    super(), U(this, e, xt, $t, H, { proc: 0 });
  }
}
function Ce(n) {
  return Object.entries(n).filter(([e, t]) => e !== "" && t).map(([e]) => e).join(" ");
}
const ot = /^[a-z]+(?::(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/, tn = /^[^$]+(?:\$(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/;
function Re(n) {
  let e, t = [];
  n.$on = (s, i) => {
    let o = s, r = () => {
    };
    return e ? r = e(o, i) : t.push([o, i]), o.match(ot) && console && console.warn('Event modifiers in SMUI now use "$" instead of ":", so that all events can be bound with modifiers. Please update your event binding: ', o), () => {
      r();
    };
  };
  function l(s) {
    const i = n.$$.callbacks[s.type];
    i && i.slice().forEach((o) => o.call(this, s));
  }
  return (s) => {
    const i = [], o = {};
    e = (r, c) => {
      let u = r, a = c, f = !1;
      const g = u.match(ot), w = u.match(tn), y = g || w;
      if (u.match(/^SMUI:\w+:/)) {
        const I = u.split(":");
        let p = "";
        for (let d = 0; d < I.length; d++)
          p += d === I.length - 1 ? ":" + I[d] : I[d].split("-").map((C) => C.slice(0, 1).toUpperCase() + C.slice(1)).join("");
        console.warn(`The event ${u.split("$")[0]} has been renamed to ${p.split("$")[0]}.`), u = p;
      }
      if (y) {
        const I = u.split(g ? ":" : "$");
        u = I[0];
        const p = I.slice(1).reduce((d, C) => (d[C] = !0, d), {});
        p.passive && (f = f || {}, f.passive = !0), p.nonpassive && (f = f || {}, f.passive = !1), p.capture && (f = f || {}, f.capture = !0), p.once && (f = f || {}, f.once = !0), p.preventDefault && (a = nn(a)), p.stopPropagation && (a = ln(a)), p.stopImmediatePropagation && (a = sn(a)), p.self && (a = on(s, a)), p.trusted && (a = rn(a));
      }
      const P = rt(s, u, a, f), h = () => {
        P();
        const I = i.indexOf(h);
        I > -1 && i.splice(I, 1);
      };
      return i.push(h), u in o || (o[u] = rt(s, u, l)), h;
    };
    for (let r = 0; r < t.length; r++)
      e(t[r][0], t[r][1]);
    return {
      destroy: () => {
        for (let r = 0; r < i.length; r++)
          i[r]();
        for (let r of Object.entries(o))
          r[1]();
      }
    };
  };
}
function rt(n, e, t, l) {
  return n.addEventListener(e, t, l), () => n.removeEventListener(e, t, l);
}
function nn(n) {
  return function(e) {
    return e.preventDefault(), n.call(this, e);
  };
}
function ln(n) {
  return function(e) {
    return e.stopPropagation(), n.call(this, e);
  };
}
function sn(n) {
  return function(e) {
    return e.stopImmediatePropagation(), n.call(this, e);
  };
}
function on(n, e) {
  return function(t) {
    if (t.target === n)
      return e.call(this, t);
  };
}
function rn(n) {
  return function(e) {
    if (e.isTrusted)
      return n.call(this, e);
  };
}
function Ne(n, e) {
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
            const o = l[s];
            Array.isArray(o) && o.length > 1 ? i.update(o[1]) : i.update();
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
function cn(n) {
  let e = (
    /*tag*/
    n[1]
  ), t, l, s = (
    /*tag*/
    n[1] && Be(n)
  );
  return {
    c() {
      s && s.c(), t = x();
    },
    m(i, o) {
      s && s.m(i, o), A(i, t, o), l = !0;
    },
    p(i, o) {
      /*tag*/
      i[1] ? e ? H(
        e,
        /*tag*/
        i[1]
      ) ? (s.d(1), s = Be(i), e = /*tag*/
      i[1], s.c(), s.m(t.parentNode, t)) : s.p(i, o) : (s = Be(i), e = /*tag*/
      i[1], s.c(), s.m(t.parentNode, t)) : e && (s.d(1), s = null, e = /*tag*/
      i[1]);
    },
    i(i) {
      l || (q(s, i), l = !0);
    },
    o(i) {
      W(s, i), l = !1;
    },
    d(i) {
      i && k(t), s && s.d(i);
    }
  };
}
function un(n) {
  let e = (
    /*tag*/
    n[1]
  ), t, l = (
    /*tag*/
    n[1] && Ve(n)
  );
  return {
    c() {
      l && l.c(), t = x();
    },
    m(s, i) {
      l && l.m(s, i), A(s, t, i);
    },
    p(s, i) {
      /*tag*/
      s[1] ? e ? H(
        e,
        /*tag*/
        s[1]
      ) ? (l.d(1), l = Ve(s), e = /*tag*/
      s[1], l.c(), l.m(t.parentNode, t)) : l.p(s, i) : (l = Ve(s), e = /*tag*/
      s[1], l.c(), l.m(t.parentNode, t)) : e && (l.d(1), l = null, e = /*tag*/
      s[1]);
    },
    i: j,
    o: j,
    d(s) {
      s && k(t), l && l.d(s);
    }
  };
}
function an(n) {
  let e, t, l, s, i;
  const o = (
    /*#slots*/
    n[8].default
  ), r = ke(
    o,
    n,
    /*$$scope*/
    n[7],
    null
  );
  let c = [
    /*$$restProps*/
    n[5]
  ], u = {};
  for (let a = 0; a < c.length; a += 1)
    u = L(u, c[a]);
  return {
    c() {
      e = ie("svg"), r && r.c(), Qe(e, u);
    },
    m(a, f) {
      A(a, e, f), r && r.m(e, null), n[9](e), l = !0, s || (i = [
        $(t = Ne.call(
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
    p(a, f) {
      r && r.p && (!l || f & /*$$scope*/
      128) && Ie(
        r,
        o,
        a,
        /*$$scope*/
        a[7],
        l ? Ae(
          o,
          /*$$scope*/
          a[7],
          f,
          null
        ) : Ee(
          /*$$scope*/
          a[7]
        ),
        null
      ), Qe(e, u = pe(c, [f & /*$$restProps*/
      32 && /*$$restProps*/
      a[5]])), t && te(t.update) && f & /*use*/
      1 && t.update.call(
        null,
        /*use*/
        a[0]
      );
    },
    i(a) {
      l || (q(r, a), l = !0);
    },
    o(a) {
      W(r, a), l = !1;
    },
    d(a) {
      a && k(e), r && r.d(a), n[9](null), s = !1, z(i);
    }
  };
}
function Be(n) {
  let e, t, l, s, i;
  const o = (
    /*#slots*/
    n[8].default
  ), r = ke(
    o,
    n,
    /*$$scope*/
    n[7],
    null
  );
  let c = [
    /*$$restProps*/
    n[5]
  ], u = {};
  for (let a = 0; a < c.length; a += 1)
    u = L(u, c[a]);
  return {
    c() {
      e = b(
        /*tag*/
        n[1]
      ), r && r.c(), we(
        /*tag*/
        n[1]
      )(e, u);
    },
    m(a, f) {
      A(a, e, f), r && r.m(e, null), n[11](e), l = !0, s || (i = [
        $(t = Ne.call(
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
    p(a, f) {
      r && r.p && (!l || f & /*$$scope*/
      128) && Ie(
        r,
        o,
        a,
        /*$$scope*/
        a[7],
        l ? Ae(
          o,
          /*$$scope*/
          a[7],
          f,
          null
        ) : Ee(
          /*$$scope*/
          a[7]
        ),
        null
      ), we(
        /*tag*/
        a[1]
      )(e, u = pe(c, [f & /*$$restProps*/
      32 && /*$$restProps*/
      a[5]])), t && te(t.update) && f & /*use*/
      1 && t.update.call(
        null,
        /*use*/
        a[0]
      );
    },
    i(a) {
      l || (q(r, a), l = !0);
    },
    o(a) {
      W(r, a), l = !1;
    },
    d(a) {
      a && k(e), r && r.d(a), n[11](null), s = !1, z(i);
    }
  };
}
function Ve(n) {
  let e, t, l, s, i = [
    /*$$restProps*/
    n[5]
  ], o = {};
  for (let r = 0; r < i.length; r += 1)
    o = L(o, i[r]);
  return {
    c() {
      e = b(
        /*tag*/
        n[1]
      ), we(
        /*tag*/
        n[1]
      )(e, o);
    },
    m(r, c) {
      A(r, e, c), n[10](e), l || (s = [
        $(t = Ne.call(
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
    p(r, c) {
      we(
        /*tag*/
        r[1]
      )(e, o = pe(i, [c & /*$$restProps*/
      32 && /*$$restProps*/
      r[5]])), t && te(t.update) && c & /*use*/
      1 && t.update.call(
        null,
        /*use*/
        r[0]
      );
    },
    d(r) {
      r && k(e), n[10](null), l = !1, z(s);
    }
  };
}
function fn(n) {
  let e, t, l, s;
  const i = [an, un, cn], o = [];
  function r(c, u) {
    return (
      /*tag*/
      c[1] === "svg" ? 0 : (
        /*selfClosing*/
        c[3] ? 1 : 2
      )
    );
  }
  return e = r(n), t = o[e] = i[e](n), {
    c() {
      t.c(), l = x();
    },
    m(c, u) {
      o[e].m(c, u), A(c, l, u), s = !0;
    },
    p(c, [u]) {
      let a = e;
      e = r(c), e === a ? o[e].p(c, u) : (oe(), W(o[a], 1, 1, () => {
        o[a] = null;
      }), re(), t = o[e], t ? t.p(c, u) : (t = o[e] = i[e](c), t.c()), q(t, 1), t.m(l.parentNode, l));
    },
    i(c) {
      s || (q(t), s = !0);
    },
    o(c) {
      W(t), s = !1;
    },
    d(c) {
      c && k(l), o[e].d(c);
    }
  };
}
function dn(n, e, t) {
  let l;
  const s = ["use", "tag", "getElement"];
  let i = de(e, s), { $$slots: o = {}, $$scope: r } = e, { use: c = [] } = e, { tag: u } = e;
  const a = Re(ne());
  let f;
  function g() {
    return f;
  }
  function w(h) {
    ee[h ? "unshift" : "push"](() => {
      f = h, t(2, f);
    });
  }
  function y(h) {
    ee[h ? "unshift" : "push"](() => {
      f = h, t(2, f);
    });
  }
  function P(h) {
    ee[h ? "unshift" : "push"](() => {
      f = h, t(2, f);
    });
  }
  return n.$$set = (h) => {
    e = L(L({}, e), Oe(h)), t(5, i = de(e, s)), "use" in h && t(0, c = h.use), "tag" in h && t(1, u = h.tag), "$$scope" in h && t(7, r = h.$$scope);
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
    f,
    l,
    a,
    i,
    g,
    r,
    o,
    w,
    y,
    P
  ];
}
class At extends R {
  constructor(e) {
    super(), U(this, e, dn, fn, H, { use: 0, tag: 1, getElement: 6 });
  }
  get getElement() {
    return this.$$.ctx[6];
  }
}
function gn(n) {
  let e;
  const t = (
    /*#slots*/
    n[11].default
  ), l = ke(
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
        e ? Ae(
          t,
          /*$$scope*/
          s[13],
          i,
          null
        ) : Ee(
          /*$$scope*/
          s[13]
        ),
        null
      );
    },
    i(s) {
      e || (q(l, s), e = !0);
    },
    o(s) {
      W(l, s), e = !1;
    },
    d(s) {
      l && l.d(s);
    }
  };
}
function pn(n) {
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
  function o(r, c) {
    let u = {
      $$slots: { default: [gn] },
      $$scope: { ctx: r }
    };
    for (let a = 0; a < s.length; a += 1)
      u = L(u, s[a]);
    return c !== void 0 && c & /*tag, forwardEvents, use, className, smuiClass, smuiClassMap, props, $$restProps*/
    1003 && (u = L(u, pe(s, [
      c & /*tag*/
      8 && { tag: (
        /*tag*/
        r[3]
      ) },
      c & /*forwardEvents, use*/
      257 && {
        use: [
          /*forwardEvents*/
          r[8],
          .../*use*/
          r[0]
        ]
      },
      c & /*className, smuiClass, smuiClassMap*/
      98 && {
        class: Ce({
          [
            /*className*/
            r[1]
          ]: !0,
          [
            /*smuiClass*/
            r[6]
          ]: !0,
          .../*smuiClassMap*/
          r[5]
        })
      },
      c & /*props*/
      128 && Pe(
        /*props*/
        r[7]
      ),
      c & /*$$restProps*/
      512 && Pe(
        /*$$restProps*/
        r[9]
      )
    ]))), { props: u };
  }
  return i && (e = Je(i, o(n)), n[12](e)), {
    c() {
      e && Q(e.$$.fragment), t = x();
    },
    m(r, c) {
      e && X(e, r, c), A(r, t, c), l = !0;
    },
    p(r, [c]) {
      if (c & /*component*/
      4 && i !== (i = /*component*/
      r[2])) {
        if (e) {
          oe();
          const u = e;
          W(u.$$.fragment, 1, 0, () => {
            Y(u, 1);
          }), re();
        }
        i ? (e = Je(i, o(r, c)), r[12](e), Q(e.$$.fragment), q(e.$$.fragment, 1), X(e, t.parentNode, t)) : e = null;
      } else if (i) {
        const u = c & /*tag, forwardEvents, use, className, smuiClass, smuiClassMap, props, $$restProps*/
        1003 ? pe(s, [
          c & /*tag*/
          8 && { tag: (
            /*tag*/
            r[3]
          ) },
          c & /*forwardEvents, use*/
          257 && {
            use: [
              /*forwardEvents*/
              r[8],
              .../*use*/
              r[0]
            ]
          },
          c & /*className, smuiClass, smuiClassMap*/
          98 && {
            class: Ce({
              [
                /*className*/
                r[1]
              ]: !0,
              [
                /*smuiClass*/
                r[6]
              ]: !0,
              .../*smuiClassMap*/
              r[5]
            })
          },
          c & /*props*/
          128 && Pe(
            /*props*/
            r[7]
          ),
          c & /*$$restProps*/
          512 && Pe(
            /*$$restProps*/
            r[9]
          )
        ]) : {};
        c & /*$$scope*/
        8192 && (u.$$scope = { dirty: c, ctx: r }), e.$set(u);
      }
    },
    i(r) {
      l || (e && q(e.$$.fragment, r), l = !0);
    },
    o(r) {
      e && W(e.$$.fragment, r), l = !1;
    },
    d(r) {
      r && k(t), n[12](null), e && Y(e, r);
    }
  };
}
const J = {
  component: At,
  tag: "div",
  class: "",
  classMap: {},
  contexts: {},
  props: {}
};
function _n(n, e, t) {
  const l = ["use", "class", "component", "tag", "getElement"];
  let s = de(e, l), { $$slots: i = {}, $$scope: o } = e, { use: r = [] } = e, { class: c = "" } = e, u;
  const a = J.class, f = {}, g = [], w = J.contexts, y = J.props;
  let { component: P = J.component } = e, { tag: h = P === At ? J.tag : void 0 } = e;
  Object.entries(J.classMap).forEach(([C, T]) => {
    const v = ht(T);
    v && "subscribe" in v && g.push(v.subscribe((E) => {
      t(5, f[C] = E, f);
    }));
  });
  const I = Re(ne());
  for (let C in w)
    w.hasOwnProperty(C) && St(C, w[C]);
  mt(() => {
    for (const C of g)
      C();
  });
  function p() {
    return u.getElement();
  }
  function d(C) {
    ee[C ? "unshift" : "push"](() => {
      u = C, t(4, u);
    });
  }
  return n.$$set = (C) => {
    e = L(L({}, e), Oe(C)), t(9, s = de(e, l)), "use" in C && t(0, r = C.use), "class" in C && t(1, c = C.class), "component" in C && t(2, P = C.component), "tag" in C && t(3, h = C.tag), "$$scope" in C && t(13, o = C.$$scope);
  }, [
    r,
    c,
    P,
    h,
    u,
    f,
    a,
    y,
    I,
    s,
    p,
    i,
    d,
    o
  ];
}
class mn extends R {
  constructor(e) {
    super(), U(this, e, _n, pn, H, {
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
function B(n) {
  return new Proxy(mn, {
    construct: function(e, t) {
      return Object.assign(J, ct, n), new e(...t);
    },
    get: function(e, t) {
      return Object.assign(J, ct, n), e[t];
    }
  });
}
B({
  class: "mdc-text-field-helper-line",
  tag: "div"
});
B({
  class: "mdc-text-field__affix mdc-text-field__affix--prefix",
  tag: "span"
});
B({
  class: "mdc-text-field__affix mdc-text-field__affix--suffix",
  tag: "span"
});
B({
  class: "mdc-deprecated-list-item__text",
  tag: "span"
});
B({
  class: "mdc-deprecated-list-item__primary-text",
  tag: "span"
});
B({
  class: "mdc-deprecated-list-item__secondary-text",
  tag: "span"
});
function hn(n) {
  let e, t, l, s, i, o;
  const r = (
    /*#slots*/
    n[8].default
  ), c = ke(
    r,
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
  ], a = {};
  for (let f = 0; f < u.length; f += 1)
    a = L(a, u[f]);
  return {
    c() {
      e = b("span"), c && c.c(), De(e, a);
    },
    m(f, g) {
      A(f, e, g), c && c.m(e, null), n[9](e), s = !0, i || (o = [
        $(l = Ne.call(
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
    p(f, [g]) {
      c && c.p && (!s || g & /*$$scope*/
      128) && Ie(
        c,
        r,
        f,
        /*$$scope*/
        f[7],
        s ? Ae(
          r,
          /*$$scope*/
          f[7],
          g,
          null
        ) : Ee(
          /*$$scope*/
          f[7]
        ),
        null
      ), De(e, a = pe(u, [
        (!s || g & /*className*/
        2 && t !== (t = Ce({
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
        g & /*$$restProps*/
        32 && /*$$restProps*/
        f[5]
      ])), l && te(l.update) && g & /*use*/
      1 && l.update.call(
        null,
        /*use*/
        f[0]
      );
    },
    i(f) {
      s || (q(c, f), s = !0);
    },
    o(f) {
      W(c, f), s = !1;
    },
    d(f) {
      f && k(e), c && c.d(f), n[9](null), i = !1, z(o);
    }
  };
}
function bn(n, e, t) {
  const l = ["use", "class", "getElement"];
  let s = de(e, l), { $$slots: i = {}, $$scope: o } = e;
  const r = Re(ne());
  let { use: c = [] } = e, { class: u = "" } = e, a, f = ht("SMUI:list:graphic:menu-selection-group");
  function g() {
    return a;
  }
  function w(y) {
    ee[y ? "unshift" : "push"](() => {
      a = y, t(2, a);
    });
  }
  return n.$$set = (y) => {
    e = L(L({}, e), Oe(y)), t(5, s = de(e, l)), "use" in y && t(0, c = y.use), "class" in y && t(1, u = y.class), "$$scope" in y && t(7, o = y.$$scope);
  }, [
    c,
    u,
    a,
    r,
    f,
    s,
    g,
    o,
    i,
    w
  ];
}
class vn extends R {
  constructor(e) {
    super(), U(this, e, bn, hn, H, { use: 0, class: 1, getElement: 6 });
  }
  get getElement() {
    return this.$$.ctx[6];
  }
}
B({
  class: "mdc-deprecated-list-item__meta",
  tag: "span"
});
B({
  class: "mdc-deprecated-list-group",
  tag: "div"
});
B({
  class: "mdc-deprecated-list-group__subheader",
  tag: "h3"
});
B({
  class: "mdc-menu__selection-group-icon",
  component: vn
});
B({
  class: "mdc-dialog__header",
  tag: "div",
  contexts: {
    "SMUI:icon-button:context": "dialog:header"
  }
});
B({
  class: "mdc-dialog__title",
  tag: "h2"
});
B({
  class: "mdc-dialog__content",
  tag: "div"
});
B({
  class: "mdc-dialog__actions",
  tag: "div",
  classMap: {
    "smui-dialog__actions--reversed": "SMUI:dialog:actions:reversed"
  },
  contexts: {
    "SMUI:button:context": "dialog:action"
  }
});
B({
  class: "smui-paper__content",
  tag: "div"
});
B({
  class: "smui-paper__title",
  tag: "h5"
});
B({
  class: "smui-paper__subtitle",
  tag: "h6"
});
function Cn(n) {
  let e, t;
  return {
    c() {
      e = ie("svg"), t = ie("path"), _(t, "d", "M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"), _(e, "xmlns", "http://www.w3.org/2000/svg"), _(e, "viewBox", "0 -960 960 960"), _(e, "width", "24"), _(e, "height", "24"), _(e, "fill", "#004552");
    },
    m(l, s) {
      A(l, e, s), m(e, t);
    },
    p: j,
    i: j,
    o: j,
    d(l) {
      l && k(e);
    }
  };
}
class wn extends R {
  constructor(e) {
    super(), U(this, e, null, Cn, H, {});
  }
}
function yn(n) {
  let e, t;
  return {
    c() {
      e = ie("svg"), t = ie("path"), _(t, "d", "M480-280q17 0 28.5-11.5T520-320q0-17-11.5-28.5T480-360q-17 0-28.5 11.5T440-320q0 17 11.5 28.5T480-280Zm-40-160h80v-240h-80v240Zm40 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"), _(e, "xmlns", "http://www.w3.org/2000/svg"), _(e, "height", "24px"), _(e, "viewBox", "0 -960 960 960"), _(e, "width", "24px"), _(e, "fill", "#004552");
    },
    m(l, s) {
      A(l, e, s), m(e, t);
    },
    p: j,
    i: j,
    o: j,
    d(l) {
      l && k(e);
    }
  };
}
class kn extends R {
  constructor(e) {
    super(), U(this, e, null, yn, H, {});
  }
}
function An(n) {
  let e, t;
  return {
    c() {
      e = ie("svg"), t = ie("path"), _(t, "d", "m40-120 440-760 440 760H40Zm138-80h604L480-720 178-200Zm302-40q17 0 28.5-11.5T520-280q0-17-11.5-28.5T480-320q-17 0-28.5 11.5T440-280q0 17 11.5 28.5T480-240Zm-40-120h80v-200h-80v200Zm40-100Z"), _(e, "xmlns", "http://www.w3.org/2000/svg"), _(e, "height", "24px"), _(e, "viewBox", "0 -960 960 960"), _(e, "width", "24px"), _(e, "fill", "#004552");
    },
    m(l, s) {
      A(l, e, s), m(e, t);
    },
    p: j,
    i: j,
    o: j,
    d(l) {
      l && k(e);
    }
  };
}
class In extends R {
  constructor(e) {
    super(), U(this, e, null, An, H, {});
  }
}
function En(n) {
  let e, t, l, s;
  const i = (
    /*#slots*/
    n[7].default
  ), o = ke(
    i,
    n,
    /*$$scope*/
    n[6],
    null
  );
  return {
    c() {
      e = b("span"), o && o.c(), Te(e, "display", "inline-block");
    },
    m(r, c) {
      A(r, e, c), o && o.m(e, null), n[8](e), t = !0, l || (s = [
        F(
          e,
          "mouseenter",
          /*handleMouseEnter*/
          n[1]
        ),
        F(
          e,
          "mouseleave",
          /*handleMouseLeave*/
          n[2]
        )
      ], l = !0);
    },
    p(r, [c]) {
      o && o.p && (!t || c & /*$$scope*/
      64) && Ie(
        o,
        i,
        r,
        /*$$scope*/
        r[6],
        t ? Ae(
          i,
          /*$$scope*/
          r[6],
          c,
          null
        ) : Ee(
          /*$$scope*/
          r[6]
        ),
        null
      );
    },
    i(r) {
      t || (q(o, r), t = !0);
    },
    o(r) {
      W(o, r), t = !1;
    },
    d(r) {
      r && k(e), o && o.d(r), n[8](null), l = !1, z(s);
    }
  };
}
function Zn(n, e, t) {
  let { $$slots: l = {}, $$scope: s } = e, { content: i = "" } = e, { hoverDelay: o = 300 } = e, { hideDelay: r = 500 } = e, c, u, a, f, g = { left: 0, top: 0, width: 0 };
  function w() {
    clearTimeout(u), g = a.getBoundingClientRect(), c = setTimeout(
      () => {
        P();
      },
      o
    );
  }
  function y() {
    clearTimeout(c), u = setTimeout(
      () => {
        h();
      },
      r
    );
  }
  function P() {
    h(), f = document.createElement("div"), f.setAttribute("role", "tooltip"), f.textContent = i, Object.assign(f.style, {
      position: "fixed",
      left: `${g.left + g.width / 2}px`,
      top: `${g.top - 8}px`,
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
  function h() {
    f && f.parentNode && (f.parentNode.removeChild(f), f = null);
  }
  mt(() => {
    clearTimeout(c), clearTimeout(u), h();
  });
  function I(p) {
    ee[p ? "unshift" : "push"](() => {
      a = p, t(0, a);
    });
  }
  return n.$$set = (p) => {
    "content" in p && t(3, i = p.content), "hoverDelay" in p && t(4, o = p.hoverDelay), "hideDelay" in p && t(5, r = p.hideDelay), "$$scope" in p && t(6, s = p.$$scope);
  }, [
    a,
    w,
    y,
    i,
    o,
    r,
    s,
    l,
    I
  ];
}
class Pn extends R {
  constructor(e) {
    super(), U(this, e, Zn, En, H, { content: 3, hoverDelay: 4, hideDelay: 5 });
  }
}
const Tn = Object.freeze({
  // This flag exists as a workaround for issue 454 (basically a browser bug) - seems like these rect values take time to update when in grid layout. Setting it to true can cause strange behaviour in the REPL for non-grid zones, see issue 470
  USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT: "USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT"
});
Tn.USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT + "";
function ut(n, e, t) {
  const l = n.slice();
  return l[17] = e[t], l[19] = t, l;
}
function qn(n) {
  let e = (
    /*i*/
    n[19] + 1 + ""
  ), t;
  return {
    c() {
      t = G(e);
    },
    m(l, s) {
      A(l, t, s);
    },
    p: j,
    i: j,
    o: j,
    d(l) {
      l && k(t);
    }
  };
}
function Nn(n) {
  let e, t, l, s;
  const i = [Sn, jn, Wn], o = [];
  function r(c, u) {
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
  return e = r(n), t = o[e] = i[e](n), {
    c() {
      t.c(), l = x();
    },
    m(c, u) {
      o[e].m(c, u), A(c, l, u), s = !0;
    },
    p(c, u) {
      let a = e;
      e = r(c), e !== a && (oe(), W(o[a], 1, 1, () => {
        o[a] = null;
      }), re(), t = o[e], t || (t = o[e] = i[e](c), t.c()), q(t, 1), t.m(l.parentNode, l));
    },
    i(c) {
      s || (q(t), s = !0);
    },
    o(c) {
      W(t), s = !1;
    },
    d(c) {
      c && k(l), o[e].d(c);
    }
  };
}
function Wn(n) {
  let e, t;
  return e = new In({}), {
    c() {
      Q(e.$$.fragment);
    },
    m(l, s) {
      X(e, l, s), t = !0;
    },
    i(l) {
      t || (q(e.$$.fragment, l), t = !0);
    },
    o(l) {
      W(e.$$.fragment, l), t = !1;
    },
    d(l) {
      Y(e, l);
    }
  };
}
function jn(n) {
  let e, t;
  return e = new kn({}), {
    c() {
      Q(e.$$.fragment);
    },
    m(l, s) {
      X(e, l, s), t = !0;
    },
    i(l) {
      t || (q(e.$$.fragment, l), t = !0);
    },
    o(l) {
      W(e.$$.fragment, l), t = !1;
    },
    d(l) {
      Y(e, l);
    }
  };
}
function Sn(n) {
  let e, t;
  return e = new wn({}), {
    c() {
      Q(e.$$.fragment);
    },
    m(l, s) {
      X(e, l, s), t = !0;
    },
    i(l) {
      t || (q(e.$$.fragment, l), t = !0);
    },
    o(l) {
      W(e.$$.fragment, l), t = !1;
    },
    d(l) {
      Y(e, l);
    }
  };
}
function Mn(n) {
  let e, t, l, s, i, o, r;
  const c = [Nn, qn], u = [];
  function a(g, w) {
    return w & /*visited, tagName*/
    24 && (t = null), t == null && (t = !!/*visited*/
    (g[4].includes(
      /*plugin*/
      g[17].tag
    ) && /*plugin*/
    g[17].tag !== /*tagName*/
    g[3])), t ? 0 : 1;
  }
  l = a(n, -1), s = u[l] = c[l](n);
  function f() {
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
      e = b("button"), s.c(), _(e, "class", "svelte-1xq5awa"), ce(e, "not-visited", !/*visited*/
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
    m(g, w) {
      A(g, e, w), u[l].m(e, null), i = !0, o || (r = F(e, "click", f), o = !0);
    },
    p(g, w) {
      n = g;
      let y = l;
      l = a(n, w), l === y ? u[l].p(n, w) : (oe(), W(u[y], 1, 1, () => {
        u[y] = null;
      }), re(), s = u[l], s ? s.p(n, w) : (s = u[l] = c[l](n), s.c()), q(s, 1), s.m(e, null)), (!i || w & /*visited, plugins*/
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
    i(g) {
      i || (q(s), i = !0);
    },
    o(g) {
      W(s), i = !1;
    },
    d(g) {
      g && k(e), u[l].d(), o = !1, r();
    }
  };
}
function Gn(n) {
  let e;
  return {
    c() {
      e = b("div"), _(e, "class", "plugin-step-line svelte-1xq5awa");
    },
    m(t, l) {
      A(t, e, l);
    },
    d(t) {
      t && k(e);
    }
  };
}
function at(n) {
  let e, t, l, s, i, o, r;
  t = new Pn({
    props: {
      text: (
        /*tooltipText*/
        n[5][
          /*plugin*/
          n[17].tag
        ]
      ),
      position: "bottom",
      $$slots: { default: [Mn] },
      $$scope: { ctx: n }
    }
  });
  let c = (
    /*i*/
    n[19] < /*plugins*/
    n[7].length - 1 && Gn()
  );
  return {
    c() {
      e = b("div"), Q(t.$$.fragment), l = N(), s = b("p"), s.textContent = `${/*plugin*/
      n[17].label}`, i = N(), c && c.c(), o = x(), _(s, "class", "svelte-1xq5awa"), _(e, "class", "plugin-step svelte-1xq5awa");
    },
    m(u, a) {
      A(u, e, a), X(t, e, null), m(e, l), m(e, s), A(u, i, a), c && c.m(u, a), A(u, o, a), r = !0;
    },
    p(u, a) {
      const f = {};
      a & /*tooltipText*/
      32 && (f.text = /*tooltipText*/
      u[5][
        /*plugin*/
        u[17].tag
      ]), a & /*$$scope, visited, tagName, pluginStatus*/
      1048604 && (f.$$scope = { dirty: a, ctx: u }), t.$set(f);
    },
    i(u) {
      r || (q(t.$$.fragment, u), r = !0);
    },
    o(u) {
      W(t.$$.fragment, u), r = !1;
    },
    d(u) {
      u && (k(e), k(i), k(o)), Y(t), c && c.d(u);
    }
  };
}
function ft(n) {
  let e = (
    /*tagName*/
    n[3]
  ), t, l = (
    /*tagName*/
    n[3] && He(n)
  );
  return {
    c() {
      l && l.c(), t = x();
    },
    m(s, i) {
      l && l.m(s, i), A(s, t, i);
    },
    p(s, i) {
      /*tagName*/
      s[3] ? e ? H(
        e,
        /*tagName*/
        s[3]
      ) ? (l.d(1), l = He(s), e = /*tagName*/
      s[3], l.c(), l.m(t.parentNode, t)) : l.p(s, i) : (l = He(s), e = /*tagName*/
      s[3], l.c(), l.m(t.parentNode, t)) : e && (l.d(1), l = null, e = /*tagName*/
      s[3]);
    },
    d(s) {
      s && k(t), l && l.d(s);
    }
  };
}
function He(n) {
  let e, t, l, s;
  return {
    c() {
      e = b(
        /*tagName*/
        n[3]
      ), we(
        /*tagName*/
        n[3]
      )(e, { class: "svelte-1xq5awa" });
    },
    m(i, o) {
      A(i, e, o), l || (s = $(t = Hn.call(null, e, {
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
    p(i, o) {
      t && te(t.update) && o & /*doc, editCount*/
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
function Bn(n) {
  let e, t, l, s, i, o, r, c, u, a, f, g, w, y, P, h, I, p = ge(
    /*plugins*/
    n[7]
  ), d = [];
  for (let v = 0; v < p.length; v += 1)
    d[v] = at(ut(n, p, v));
  const C = (v) => W(d[v], 1, 1, () => {
    d[v] = null;
  });
  let T = (
    /*tagName*/
    n[3] && ft(n)
  );
  return {
    c() {
      e = b("div"), t = b("div"), l = b("button"), l.textContent = "exit", s = N(), i = b("p"), i.textContent = "Plugin Flow", o = N(), r = b("div");
      for (let v = 0; v < d.length; v += 1)
        d[v].c();
      c = N(), u = b("div"), a = b("button"), a.textContent = "Back", f = N(), g = b("button"), g.textContent = "Next", w = N(), T && T.c(), y = x(), _(l, "class", "back-button svelte-1xq5awa"), _(i, "class", "plugin-flow-title svelte-1xq5awa"), Te(t, "display", "flex"), Te(t, "align-items", "center"), Te(t, "gap", "0.5rem"), _(t, "class", "svelte-1xq5awa"), _(r, "class", "plugin-steps svelte-1xq5awa"), _(a, "class", "back-button svelte-1xq5awa"), _(g, "class", "next-button svelte-1xq5awa"), _(u, "class", "stepper-navigation svelte-1xq5awa"), _(e, "class", "stepper svelte-1xq5awa");
    },
    m(v, E) {
      A(v, e, E), m(e, t), m(t, l), m(t, s), m(t, i), m(e, o), m(e, r);
      for (let Z = 0; Z < d.length; Z += 1)
        d[Z] && d[Z].m(r, null);
      m(e, c), m(e, u), m(u, a), m(u, f), m(u, g), A(v, w, E), T && T.m(v, E), A(v, y, E), P = !0, h || (I = [
        F(
          l,
          "click",
          /*click_handler*/
          n[12]
        ),
        F(
          a,
          "click",
          /*previousPlugin*/
          n[10]
        ),
        F(
          g,
          "click",
          /*nextPlugin*/
          n[9]
        )
      ], h = !0);
    },
    p(v, [E]) {
      if (E & /*plugins, tooltipText, visited, tagName, loadPlugin, pluginStatus*/
      444) {
        p = ge(
          /*plugins*/
          v[7]
        );
        let Z;
        for (Z = 0; Z < p.length; Z += 1) {
          const S = ut(v, p, Z);
          d[Z] ? (d[Z].p(S, E), q(d[Z], 1)) : (d[Z] = at(S), d[Z].c(), q(d[Z], 1), d[Z].m(r, null));
        }
        for (oe(), Z = p.length; Z < d.length; Z += 1)
          C(Z);
        re();
      }
      /*tagName*/
      v[3] ? T ? T.p(v, E) : (T = ft(v), T.c(), T.m(y.parentNode, y)) : T && (T.d(1), T = null);
    },
    i(v) {
      if (!P) {
        for (let E = 0; E < p.length; E += 1)
          q(d[E]);
        P = !0;
      }
    },
    o(v) {
      d = d.filter(Boolean);
      for (let E = 0; E < d.length; E += 1)
        W(d[E]);
      P = !1;
    },
    d(v) {
      v && (k(e), k(w), k(y)), Pt(d, v), T && T.d(v), h = !1, z(I);
    }
  };
}
function Vn() {
  var n, e;
  const t = document.querySelector("open-scd");
  return (e = (n = t == null ? void 0 : t.shadowRoot) === null || n === void 0 ? void 0 : n.querySelector("compas-layout")) !== null && e !== void 0 ? e : null;
}
function Hn(n, e) {
  return Object.assign(n, e), { update: (t) => Object.assign(n, t) };
}
function Dn(n, e, t) {
  let l, { doc: s } = e, { editCount: i = -1 } = e, { host: o } = e, r = null, c = [];
  const u = ["check", "warning", "error"];
  let a = {};
  Ue();
  function f(p) {
    var d;
    (d = Vn()) === null || d === void 0 || d.dispatchEvent(new CustomEvent(
      "toggle-editor-tabs",
      {
        detail: { visible: p },
        bubbles: !0,
        composed: !0
      }
    ));
  }
  const g = [
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
  function w(p) {
    return kt(this, void 0, void 0, function* () {
      const d = yield import(p.src);
      if (customElements.get(p.tag) || customElements.define(p.tag, d.default), t(3, r = p.tag), !c.includes(p.tag)) {
        t(4, c = [...c, p.tag]);
        const C = g.findIndex((T) => T.tag === p.tag);
        t(2, a = Object.assign(Object.assign({}, a), { [p.tag]: u[C] }));
      }
    });
  }
  _t(() => {
    w(g[0]), f(!1);
  });
  function y() {
    const p = g.findIndex((d) => d.tag === r);
    w(g[(p + 1) % g.length]);
  }
  function P() {
    const p = g.findIndex((d) => d.tag === r);
    w(g[(p - 1 + g.length) % g.length]);
  }
  const h = () => f(!0), I = (p) => w(p);
  return n.$$set = (p) => {
    "doc" in p && t(0, s = p.doc), "editCount" in p && t(1, i = p.editCount), "host" in p && t(11, o = p.host);
  }, n.$$.update = () => {
    n.$$.dirty & /*pluginStatus*/
    4 && t(5, l = g.reduce(
      (p, d) => {
        const C = a[d.tag];
        return p[d.tag] = C === "error" ? `Resolve errors in ${d.label}` : C === "warning" ? `Check warnings for ${d.label}` : `Load the ${d.label} editor`, p;
      },
      {}
    ));
  }, [
    s,
    i,
    a,
    r,
    c,
    l,
    f,
    g,
    w,
    y,
    P,
    o,
    h,
    I
  ];
}
class zn extends R {
  constructor(e) {
    super(), U(this, e, Dn, Bn, H, { doc: 0, editCount: 1, host: 11 });
  }
}
function Ln(n) {
  let e, t;
  return e = new Xt({
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
      X(e, l, s), t = !0;
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
      t || (q(e.$$.fragment, l), t = !0);
    },
    o(l) {
      W(e.$$.fragment, l), t = !1;
    },
    d(l) {
      Y(e, l);
    }
  };
}
function On(n) {
  let e, t;
  return e = new en({ props: { proc: (
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
      X(e, l, s), t = !0;
    },
    p(l, s) {
      const i = {};
      s & /*selected*/
      16 && (i.proc = /*selected*/
      l[4]), e.$set(i);
    },
    i(l) {
      t || (q(e.$$.fragment, l), t = !0);
    },
    o(l) {
      W(e.$$.fragment, l), t = !1;
    },
    d(l) {
      Y(e, l);
    }
  };
}
function Un(n) {
  let e, t;
  return e = new zn({
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
      X(e, l, s), t = !0;
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
      t || (q(e.$$.fragment, l), t = !0);
    },
    o(l) {
      W(e.$$.fragment, l), t = !1;
    },
    d(l) {
      Y(e, l);
    }
  };
}
function Rn(n) {
  let e, t, l, s;
  const i = [Un, On, Ln], o = [];
  function r(c, u) {
    return (
      /*running*/
      c[5] ? 0 : (
        /*selected*/
        c[4] ? 1 : 2
      )
    );
  }
  return e = r(n), t = o[e] = i[e](n), {
    c() {
      t.c(), l = x();
    },
    m(c, u) {
      o[e].m(c, u), A(c, l, u), s = !0;
    },
    p(c, [u]) {
      let a = e;
      e = r(c), e === a ? o[e].p(c, u) : (oe(), W(o[a], 1, 1, () => {
        o[a] = null;
      }), re(), t = o[e], t ? t.p(c, u) : (t = o[e] = i[e](c), t.c()), q(t, 1), t.m(l.parentNode, l));
    },
    i(c) {
      s || (q(t), s = !0);
    },
    o(c) {
      W(t), s = !1;
    },
    d(c) {
      c && k(l), o[e].d(c);
    }
  };
}
function Fn(n, e, t) {
  let { doc: l } = e, { editCount: s = -1 } = e, { host: i } = e, o = [], r = null, c = null, u = !0, a = "";
  const f = new URL("data:application/xml;base64,PHByb2Nlc3Nlcz4KICA8cHJvY2Vzcz4KICAgIDxpZD5zdGFuZGFyZC1wcm9jZXNzLTE8L2lkPgogICAgPHZlcnNpb24+MC4wLjE8L3ZlcnNpb24+CiAgICA8bmFtZT5TdGFuZGFyZCBQcm9jZXNzIDE8L25hbWU+CiAgICA8ZGVzY3JpcHRpb24+VGhpcyBpcyBhIHN0YW5kYXJkaXplZCBwcm9jZXNzIHVzZWQgZm9yIHRlc3RpbmcgcHVycG9zZXMgb25seTwvZGVzY3JpcHRpb24+CiAgICA8cGx1Z2lucy1zZXF1ZW5jZT4KICAgICAgPHBsdWdpbj4KICAgICAgICA8aWQ+c3Vic3RhdGlvbjwvaWQ+CiAgICAgICAgPG5hbWU+U3Vic3RhdGlvbjwvbmFtZT4KICAgICAgPC9wbHVnaW4+CiAgICAgIDxwbHVnaW4+CiAgICAgICAgPGlkPmllZDwvaWQ+CiAgICAgICAgPG5hbWU+SUVEPC9uYW1lPgogICAgICA8L3BsdWdpbj4KICAgICAgPHBsdWdpbj4KICAgICAgICA8aWQ+Y29tbXVuaWNhdGlvbi1leHBsb3JlcjwvaWQ+CiAgICAgICAgPG5hbWU+Q29tbXVuaWNhdGlvbiBFeHBsb3JlcjwvbmFtZT4KICAgICAgPC9wbHVnaW4+CiAgICA8L3BsdWdpbnMtc2VxdWVuY2U+CiAgPC9wcm9jZXNzPgoKICA8cHJvY2Vzcz4KICAgIDxpZD5zdGFuZGFyZC1wcm9jZXNzLTI8L2lkPgogICAgPHZlcnNpb24+MC4wLjE8L3ZlcnNpb24+CiAgICA8bmFtZT5TdGFuZGFyZCBQcm9jZXNzIDI8L25hbWU+CiAgICA8ZGVzY3JpcHRpb24+VGhpcyBpcyBhIHN0YW5kYXJkaXplZCBwcm9jZXNzIHVzZWQgZm9yIHRlc3RpbmcgcHVycG9zZXMgb25seTwvZGVzY3JpcHRpb24+CiAgICA8cGx1Z2lucy1zZXF1ZW5jZT4KICAgICAgPHBsdWdpbj4KICAgICAgICA8aWQ+c3Vic3RhdGlvbjwvaWQ+CiAgICAgICAgPG5hbWU+U3Vic3RhdGlvbjwvbmFtZT4KICAgICAgPC9wbHVnaW4+CiAgICAgIDxwbHVnaW4+CiAgICAgICAgPGlkPnh5ejwvaWQ+CiAgICAgICAgPG5hbWU+WFlaPC9uYW1lPgogICAgICA8L3BsdWdpbj4KICAgICAgPHBsdWdpbj4KICAgICAgICA8aWQ+bmV0d29yay1leHBsb3JlcjwvaWQ+CiAgICAgICAgPG5hbWU+TmV0d29yayBFeHBsb3JlcjwvbmFtZT4KICAgICAgPC9wbHVnaW4+CiAgICA8L3BsdWdpbnMtc2VxdWVuY2U+CiAgPC9wcm9jZXNzPgoKICA8cHJvY2Vzcz4KICAgIDxpZD5zdGFuZGFyZC1wcm9jZXNzLTM8L2lkPgogICAgPHZlcnNpb24+MC4wLjE8L3ZlcnNpb24+CiAgICA8bmFtZT5TdGFuZGFyZCBQcm9jZXNzIDM8L25hbWU+CiAgICA8ZGVzY3JpcHRpb24+VGhpcyBpcyBhIHN0YW5kYXJkaXplZCBwcm9jZXNzIHVzZWQgZm9yIHRlc3RpbmcgcHVycG9zZXMgb25seTwvZGVzY3JpcHRpb24+CiAgICA8cGx1Z2lucy1zZXF1ZW5jZT4KICAgICAgPHBsdWdpbj4KICAgICAgICA8aWQ+c3Vic3RhdGlvbjwvaWQ+CiAgICAgICAgPG5hbWU+U3Vic3RhdGlvbjwvbmFtZT4KICAgICAgPC9wbHVnaW4+CiAgICAgIDxwbHVnaW4+CiAgICAgICAgPGlkPnNpdGlwZTwvaWQ+CiAgICAgICAgPG5hbWU+U2l0aXBlPC9uYW1lPgogICAgICA8L3BsdWdpbj4KICAgICAgPHBsdWdpbj4KICAgICAgICA8aWQ+aWVkPC9pZD4KICAgICAgICA8bmFtZT5JRUQ8L25hbWU+CiAgICAgIDwvcGx1Z2luPgogICAgPC9wbHVnaW5zLXNlcXVlbmNlPgogIDwvcHJvY2Vzcz4KPC9wcm9jZXNzZXM+Cg==", import.meta.url).href, g = (d) => {
    var C, T;
    return (T = (C = d == null ? void 0 : d.textContent) === null || C === void 0 ? void 0 : C.trim()) !== null && T !== void 0 ? T : "";
  }, w = (d) => Array.from(d.getElementsByTagName("process")).map((C) => {
    const T = Array.from(C.getElementsByTagName("plugin")).map((v) => ({
      id: g(v.querySelector("id")),
      name: g(v.querySelector("name"))
    }));
    return {
      id: g(C.querySelector(":scope > id")),
      version: g(C.querySelector(":scope > version")),
      name: g(C.querySelector(":scope > name")),
      description: g(C.querySelector(":scope > description")),
      plugins: T
    };
  });
  function y() {
    return kt(this, void 0, void 0, function* () {
      t(6, u = !0), t(7, a = "");
      try {
        const d = yield fetch(f, { cache: "no-cache" });
        if (!d.ok)
          throw new Error(`HTTP ${d.status}`);
        const C = new DOMParser().parseFromString(yield d.text(), "application/xml");
        if (C.querySelector("parsererror"))
          throw new Error("Invalid XML file format.");
        t(3, o = w(C));
      } catch (d) {
        t(3, o = []), t(7, a = d.message || "Failed to load processes.");
      } finally {
        t(6, u = !1);
      }
    });
  }
  _t(y);
  function P(d) {
    t(5, c = d), t(4, r = null);
  }
  function h(d) {
    t(4, r = d.detail);
  }
  function I(d) {
    P(d.detail);
  }
  function p() {
    t(4, r = null);
  }
  return n.$$set = (d) => {
    "doc" in d && t(0, l = d.doc), "editCount" in d && t(1, s = d.editCount), "host" in d && t(2, i = d.host);
  }, [
    l,
    s,
    i,
    o,
    r,
    c,
    u,
    a,
    h,
    I,
    p
  ];
}
class Xn extends R {
  constructor(e) {
    super(), U(this, e, Fn, Rn, H, { doc: 0, editCount: 1, host: 2 });
  }
}
function dt(n) {
  let e, t;
  return e = new Xn({
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
      X(e, l, s), t = !0;
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
      t || (q(e.$$.fragment, l), t = !0);
    },
    o(l) {
      W(e.$$.fragment, l), t = !1;
    },
    d(l) {
      Y(e, l);
    }
  };
}
function Yn(n) {
  let e, t, l, s, i, o = (
    /*doc*/
    (n[0] || /*dev*/
    n[1]) && dt(n)
  );
  return {
    c() {
      o && o.c(), e = N(), t = b("input"), l = N(), s = b("input"), _(t, "type", "hidden"), _(t, "name", "package-name"), t.value = wt, _(s, "type", "hidden"), _(s, "name", "package-version"), s.value = yt;
    },
    m(r, c) {
      o && o.m(r, c), A(r, e, c), A(r, t, c), A(r, l, c), A(r, s, c), i = !0;
    },
    p(r, [c]) {
      /*doc*/
      r[0] || /*dev*/
      r[1] ? o ? (o.p(r, c), c & /*doc, dev*/
      3 && q(o, 1)) : (o = dt(r), o.c(), q(o, 1), o.m(e.parentNode, e)) : o && (oe(), W(o, 1, 1, () => {
        o = null;
      }), re());
    },
    i(r) {
      i || (q(o), i = !0);
    },
    o(r) {
      W(o), i = !1;
    },
    d(r) {
      r && (k(e), k(t), k(l), k(s)), o && o.d(r);
    }
  };
}
function Kn(n, e, t) {
  let { doc: l } = e, { dev: s = !1 } = e, { editCount: i = 0 } = e;
  return console.log("editcount", i), n.$$set = (o) => {
    "doc" in o && t(0, l = o.doc), "dev" in o && t(1, s = o.dev), "editCount" in o && t(2, i = o.editCount);
  }, [l, s, i];
}
class Qn extends R {
  constructor(e) {
    super(), U(this, e, Kn, Yn, H, { doc: 0, dev: 1, editCount: 2 });
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
  const n = `${wt}-v${yt}-style`, e = $n(), t = document.createElement("link");
  return t.rel = "stylesheet", t.type = "text/css", t.href = e, t.id = n, t;
}
function $n() {
  const n = new URL(import.meta.url), e = n.origin, t = n.pathname.split("/").slice(0, -1).filter(Boolean).join("/");
  return [e, t, "style.css"].filter(Boolean).join("/");
}
export {
  el as default
};
