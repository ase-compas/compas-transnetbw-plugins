var J = Object.defineProperty;
var K = (t, e, n) => e in t ? J(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var b = (t, e, n) => (K(t, typeof e != "symbol" ? e + "" : e, n), n);
function p() {
}
function T(t) {
  return t();
}
function L() {
  return /* @__PURE__ */ Object.create(null);
}
function x(t) {
  t.forEach(T);
}
function z(t) {
  return typeof t == "function";
}
function H(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
function Q(t) {
  return Object.keys(t).length === 0;
}
function g(t, e, n) {
  t.insertBefore(e, n || null);
}
function _(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function k(t) {
  return document.createElement(t);
}
function X(t) {
  return document.createTextNode(t);
}
function R() {
  return X(" ");
}
function w(t, e, n) {
  n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
function Z(t) {
  return Array.from(t.childNodes);
}
let j;
function $(t) {
  j = t;
}
const h = [], U = [];
let m = [];
const I = [], tt = /* @__PURE__ */ Promise.resolve();
let C = !1;
function et() {
  C || (C = !0, tt.then(V));
}
function S(t) {
  m.push(t);
}
const E = /* @__PURE__ */ new Set();
let d = 0;
function V() {
  if (d !== 0)
    return;
  const t = j;
  do {
    try {
      for (; d < h.length; ) {
        const e = h[d];
        d++, $(e), nt(e.$$);
      }
    } catch (e) {
      throw h.length = 0, d = 0, e;
    }
    for ($(null), h.length = 0, d = 0; U.length; )
      U.pop()();
    for (let e = 0; e < m.length; e += 1) {
      const n = m[e];
      E.has(n) || (E.add(n), n());
    }
    m.length = 0;
  } while (h.length);
  for (; I.length; )
    I.pop()();
  C = !1, E.clear(), $(t);
}
function nt(t) {
  if (t.fragment !== null) {
    t.update(), x(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(S);
  }
}
function rt(t) {
  const e = [], n = [];
  m.forEach((r) => t.indexOf(r) === -1 ? e.push(r) : n.push(r)), n.forEach((r) => r()), m = e;
}
const v = /* @__PURE__ */ new Set();
let a;
function it() {
  a = {
    r: 0,
    c: [],
    p: a
    // parent group
  };
}
function ot() {
  a.r || x(a.c), a = a.p;
}
function y(t, e) {
  t && t.i && (v.delete(t), t.i(e));
}
function N(t, e, n, r) {
  if (t && t.o) {
    if (v.has(t))
      return;
    v.add(t), a.c.push(() => {
      v.delete(t), r && (n && t.d(1), r());
    }), t.o(e);
  } else
    r && r();
}
function st(t) {
  t && t.c();
}
function W(t, e, n) {
  const { fragment: r, after_update: o } = t.$$;
  r && r.m(e, n), S(() => {
    const c = t.$$.on_mount.map(T).filter(z);
    t.$$.on_destroy ? t.$$.on_destroy.push(...c) : x(c), t.$$.on_mount = [];
  }), o.forEach(S);
}
function Y(t, e) {
  const n = t.$$;
  n.fragment !== null && (rt(n.after_update), x(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []);
}
function ut(t, e) {
  t.$$.dirty[0] === -1 && (h.push(t), et(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function q(t, e, n, r, o, c, i = null, u = [-1]) {
  const f = j;
  $(t);
  const s = t.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: c,
    update: p,
    not_equal: o,
    bound: L(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (f ? f.$$.context : [])),
    // everything else
    callbacks: L(),
    dirty: u,
    skip_bound: !1,
    root: e.target || f.$$.root
  };
  i && i(s.root);
  let O = !1;
  if (s.ctx = n ? n(t, e.props || {}, (l, P, ...A) => {
    const B = A.length ? A[0] : P;
    return s.ctx && o(s.ctx[l], s.ctx[l] = B) && (!s.skip_bound && s.bound[l] && s.bound[l](B), O && ut(t, l)), P;
  }) : [], s.update(), O = !0, x(s.before_update), s.fragment = r ? r(s.ctx) : !1, e.target) {
    if (e.hydrate) {
      const l = Z(e.target);
      s.fragment && s.fragment.l(l), l.forEach(_);
    } else
      s.fragment && s.fragment.c();
    e.intro && y(t.$$.fragment), W(t, e.target, e.anchor), V();
  }
  $(f);
}
class D {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    b(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    b(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    Y(this, 1), this.$destroy = p;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, n) {
    if (!z(n))
      return p;
    const r = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return r.push(n), () => {
      const o = r.indexOf(n);
      o !== -1 && r.splice(o, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(e) {
    this.$$set && !Q(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const ct = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(ct);
const F = "archive-explorer", G = "0.0.1";
function ft(t) {
  let e;
  return {
    c() {
      e = k("p"), e.textContent = "You are in the Engineering-Wizard";
    },
    m(n, r) {
      g(n, e, r);
    },
    p,
    i: p,
    o: p,
    d(n) {
      n && _(e);
    }
  };
}
class lt extends D {
  constructor(e) {
    super(), q(this, e, null, ft, H, {});
  }
}
function M(t) {
  let e, n;
  return e = new lt({}), {
    c() {
      st(e.$$.fragment);
    },
    m(r, o) {
      W(e, r, o), n = !0;
    },
    i(r) {
      n || (y(e.$$.fragment, r), n = !0);
    },
    o(r) {
      N(e.$$.fragment, r), n = !1;
    },
    d(r) {
      Y(e, r);
    }
  };
}
function at(t) {
  let e, n, r, o, c, i = (
    /*doc*/
    (t[0] || /*dev*/
    t[1]) && M()
  );
  return {
    c() {
      i && i.c(), e = R(), n = k("input"), r = R(), o = k("input"), w(n, "type", "hidden"), w(n, "name", "package-name"), n.value = F, w(o, "type", "hidden"), w(o, "name", "package-version"), o.value = G;
    },
    m(u, f) {
      i && i.m(u, f), g(u, e, f), g(u, n, f), g(u, r, f), g(u, o, f), c = !0;
    },
    p(u, [f]) {
      /*doc*/
      u[0] || /*dev*/
      u[1] ? i ? f & /*doc, dev*/
      3 && y(i, 1) : (i = M(), i.c(), y(i, 1), i.m(e.parentNode, e)) : i && (it(), N(i, 1, 1, () => {
        i = null;
      }), ot());
    },
    i(u) {
      c || (y(i), c = !0);
    },
    o(u) {
      N(i), c = !1;
    },
    d(u) {
      u && (_(e), _(n), _(r), _(o)), i && i.d(u);
    }
  };
}
function dt(t, e, n) {
  let { doc: r } = e, { dev: o = !1 } = e;
  return t.$$set = (c) => {
    "doc" in c && n(0, r = c.doc), "dev" in c && n(1, o = c.dev);
  }, [r, o];
}
class ht extends D {
  constructor(e) {
    super(), q(this, e, dt, at, H, { doc: 0, dev: 1 });
  }
}
class gt extends HTMLElement {
  connectedCallback() {
    var n;
    this.attachShadow({ mode: "open" }), this.plugin = new ht({
      target: this.shadowRoot,
      props: {
        doc: this._doc,
        editCount: -1
      }
    });
    const e = _t();
    (n = this.shadowRoot) == null || n.appendChild(e);
  }
  set doc(e) {
    this._doc = e, this.plugin && this.plugin.$set({ doc: e });
  }
  set editCount(e) {
    this.plugin && this.plugin.$set({ editCount: e });
  }
}
function _t() {
  const t = `${F}-v${G}-style`, e = pt(), n = document.createElement("link");
  return n.rel = "stylesheet", n.type = "text/css", n.href = e, n.id = t, n;
}
function pt() {
  const t = new URL(import.meta.url), e = t.origin, n = t.pathname.split("/").slice(0, -1).filter(Boolean).join("/");
  return [e, n, "style.css"].filter(Boolean).join("/");
}
export {
  gt as default
};
