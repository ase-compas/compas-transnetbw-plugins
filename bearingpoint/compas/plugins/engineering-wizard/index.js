var it = Object.defineProperty;
var ot = (t, e, n) => e in t ? it(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var P = (t, e, n) => (ot(t, typeof e != "symbol" ? e + "" : e, n), n);
function E() {
}
function G(t) {
  return t();
}
function M() {
  return /* @__PURE__ */ Object.create(null);
}
function C(t) {
  t.forEach(G);
}
function L(t) {
  return typeof t == "function";
}
function I(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
function st(t) {
  return Object.keys(t).length === 0;
}
function rt(t) {
  return t && L(t.destroy) ? t.destroy : E;
}
function $(t, e) {
  t.appendChild(e);
}
function h(t, e, n) {
  t.insertBefore(e, n || null);
}
function p(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function g(t) {
  return document.createElement(t);
}
function J(t) {
  return document.createTextNode(t);
}
function k() {
  return J(" ");
}
function K() {
  return J("");
}
function q(t, e, n, i) {
  return t.addEventListener(e, n, i), () => t.removeEventListener(e, n, i);
}
function _(t, e, n) {
  n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
const ut = ["width", "height"];
function lt(t, e) {
  const n = Object.getOwnPropertyDescriptors(t.__proto__);
  for (const i in e)
    e[i] == null ? t.removeAttribute(i) : i === "style" ? t.style.cssText = e[i] : i === "__value" ? t.value = t[i] = e[i] : n[i] && n[i].set && ut.indexOf(i) === -1 ? t[i] = e[i] : _(t, i, e[i]);
}
function ct(t, e) {
  Object.keys(e).forEach((n) => {
    ft(t, n, e[n]);
  });
}
function ft(t, e, n) {
  const i = e.toLowerCase();
  i in t ? t[i] = typeof t[i] == "boolean" && n === "" ? !0 : n : e in t ? t[e] = typeof t[e] == "boolean" && n === "" ? !0 : n : _(t, e, n);
}
function dt(t) {
  return /-/.test(t) ? ct : lt;
}
function at(t) {
  return Array.from(t.childNodes);
}
function pt(t, e, { bubbles: n = !1, cancelable: i = !1 } = {}) {
  return new CustomEvent(t, { detail: e, bubbles: n, cancelable: i });
}
let O;
function S(t) {
  O = t;
}
function Q() {
  if (!O)
    throw new Error("Function called outside component initialization");
  return O;
}
function _t(t) {
  Q().$$.on_mount.push(t);
}
function mt() {
  const t = Q();
  return (e, n, { cancelable: i = !1 } = {}) => {
    const o = t.$$.callbacks[e];
    if (o) {
      const r = pt(
        /** @type {string} */
        e,
        n,
        { cancelable: i }
      );
      return o.slice().forEach((s) => {
        s.call(t, r);
      }), !r.defaultPrevented;
    }
    return !0;
  };
}
const v = [], U = [];
let b = [];
const z = [], ht = /* @__PURE__ */ Promise.resolve();
let R = !1;
function gt() {
  R || (R = !0, ht.then(W));
}
function B(t) {
  b.push(t);
}
const x = /* @__PURE__ */ new Set();
let w = 0;
function W() {
  if (w !== 0)
    return;
  const t = O;
  do {
    try {
      for (; w < v.length; ) {
        const e = v[w];
        w++, S(e), yt(e.$$);
      }
    } catch (e) {
      throw v.length = 0, w = 0, e;
    }
    for (S(null), v.length = 0, w = 0; U.length; )
      U.pop()();
    for (let e = 0; e < b.length; e += 1) {
      const n = b[e];
      x.has(n) || (x.add(n), n());
    }
    b.length = 0;
  } while (v.length);
  for (; z.length; )
    z.pop()();
  R = !1, x.clear(), S(t);
}
function yt(t) {
  if (t.fragment !== null) {
    t.update(), C(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(B);
  }
}
function wt(t) {
  const e = [], n = [];
  b.forEach((i) => t.indexOf(i) === -1 ? e.push(i) : n.push(i)), n.forEach((i) => i()), b = e;
}
const N = /* @__PURE__ */ new Set();
let y;
function vt() {
  y = {
    r: 0,
    c: [],
    p: y
    // parent group
  };
}
function bt() {
  y.r || C(y.c), y = y.p;
}
function j(t, e) {
  t && t.i && (N.delete(t), t.i(e));
}
function D(t, e, n, i) {
  if (t && t.o) {
    if (N.has(t))
      return;
    N.add(t), y.c.push(() => {
      N.delete(t), i && (n && t.d(1), i());
    }), t.o(e);
  } else
    i && i();
}
function Et(t) {
  t && t.c();
}
function X(t, e, n) {
  const { fragment: i, after_update: o } = t.$$;
  i && i.m(e, n), B(() => {
    const r = t.$$.on_mount.map(G).filter(L);
    t.$$.on_destroy ? t.$$.on_destroy.push(...r) : C(r), t.$$.on_mount = [];
  }), o.forEach(B);
}
function Y(t, e) {
  const n = t.$$;
  n.fragment !== null && (wt(n.after_update), C(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []);
}
function Ct(t, e) {
  t.$$.dirty[0] === -1 && (v.push(t), gt(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function Z(t, e, n, i, o, r, s = null, c = [-1]) {
  const f = O;
  S(t);
  const l = t.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: r,
    update: E,
    not_equal: o,
    bound: M(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (f ? f.$$.context : [])),
    // everything else
    callbacks: M(),
    dirty: c,
    skip_bound: !1,
    root: e.target || f.$$.root
  };
  s && s(l.root);
  let a = !1;
  if (l.ctx = n ? n(t, e.props || {}, (u, d, ...m) => {
    const T = m.length ? m[0] : d;
    return l.ctx && o(l.ctx[u], l.ctx[u] = T) && (!l.skip_bound && l.bound[u] && l.bound[u](T), a && Ct(t, u)), d;
  }) : [], l.update(), a = !0, C(l.before_update), l.fragment = i ? i(l.ctx) : !1, e.target) {
    if (e.hydrate) {
      const u = at(e.target);
      l.fragment && l.fragment.l(u), u.forEach(p);
    } else
      l.fragment && l.fragment.c();
    e.intro && j(t.$$.fragment), X(t, e.target, e.anchor), W();
  }
  S(f);
}
class tt {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    P(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    P(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    Y(this, 1), this.$destroy = E;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, n) {
    if (!L(n))
      return E;
    const i = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return i.push(n), () => {
      const o = i.indexOf(n);
      o !== -1 && i.splice(o, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(e) {
    this.$$set && !st(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const $t = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add($t);
const et = "archive-explorer", nt = "0.0.1";
function V(t, e, n, i) {
  function o(r) {
    return r instanceof n ? r : new n(function(s) {
      s(r);
    });
  }
  return new (n || (n = Promise))(function(r, s) {
    function c(a) {
      try {
        l(i.next(a));
      } catch (u) {
        s(u);
      }
    }
    function f(a) {
      try {
        l(i.throw(a));
      } catch (u) {
        s(u);
      }
    }
    function l(a) {
      a.done ? r(a.value) : o(a.value).then(c, f);
    }
    l((i = i.apply(t, e || [])).next());
  });
}
function F(t) {
  let e = (
    /*tagName*/
    t[2]
  ), n, i = (
    /*tagName*/
    t[2] && A(t)
  );
  return {
    c() {
      i && i.c(), n = K();
    },
    m(o, r) {
      i && i.m(o, r), h(o, n, r);
    },
    p(o, r) {
      /*tagName*/
      o[2] ? e ? I(
        e,
        /*tagName*/
        o[2]
      ) ? (i.d(1), i = A(o), e = /*tagName*/
      o[2], i.c(), i.m(n.parentNode, n)) : i.p(o, r) : (i = A(o), e = /*tagName*/
      o[2], i.c(), i.m(n.parentNode, n)) : e && (i.d(1), i = null, e = /*tagName*/
      o[2]);
    },
    d(o) {
      o && p(n), i && i.d(o);
    }
  };
}
function A(t) {
  let e, n, i, o;
  return {
    c() {
      e = g(
        /*tagName*/
        t[2]
      ), dt(
        /*tagName*/
        t[2]
      )(e, { class: "svelte-5wgwtq" });
    },
    m(r, s) {
      h(r, e, s), i || (o = rt(n = jt.call(null, e, {
        doc: (
          /*doc*/
          t[0]
        ),
        editCount: (
          /*editCount*/
          t[1]
        )
      })), i = !0);
    },
    p(r, s) {
      n && L(n.update) && s & /*doc, editCount*/
      3 && n.update.call(null, {
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
      r && p(e), i = !1, o();
    }
  };
}
function kt(t) {
  let e, n, i, o, r, s, c, f, l, a, u = (
    /*tagName*/
    t[2] && F(t)
  );
  return {
    c() {
      e = g("div"), n = g("button"), n.textContent = "Load Substation", i = k(), o = g("button"), o.textContent = "Load IED Editor", r = k(), s = g("button"), s.textContent = "Exit", c = k(), u && u.c(), f = K(), _(n, "class", "svelte-5wgwtq"), _(o, "class", "svelte-5wgwtq"), _(s, "class", "svelte-5wgwtq"), _(e, "class", "stepper-container svelte-5wgwtq");
    },
    m(d, m) {
      h(d, e, m), $(e, n), $(e, i), $(e, o), $(e, r), $(e, s), h(d, c, m), u && u.m(d, m), h(d, f, m), l || (a = [
        q(
          n,
          "click",
          /*addSubstation*/
          t[5]
        ),
        q(
          o,
          "click",
          /*addIED*/
          t[4]
        ),
        q(
          s,
          "click",
          /*exitEditor*/
          t[3]
        )
      ], l = !0);
    },
    p(d, [m]) {
      /*tagName*/
      d[2] ? u ? u.p(d, m) : (u = F(d), u.c(), u.m(f.parentNode, f)) : u && (u.d(1), u = null);
    },
    i: E,
    o: E,
    d(d) {
      d && (p(e), p(c), p(f)), u && u.d(d), l = !1, C(a);
    }
  };
}
function St() {
  var t, e;
  const n = document.querySelector("open-scd");
  return (e = (t = n == null ? void 0 : n.shadowRoot) === null || t === void 0 ? void 0 : t.querySelector("compas-layout")) !== null && e !== void 0 ? e : null;
}
function jt(t, e) {
  return Object.assign(t, e), {
    update(n) {
      Object.assign(t, n);
    }
  };
}
function Ot(t, e, n) {
  let { doc: i } = e, { editCount: o = -1 } = e, r = null;
  mt();
  function s(u) {
    const d = St();
    d && d.dispatchEvent(new CustomEvent(
      "toggle-editor-tabs",
      {
        detail: { visible: u },
        bubbles: !0,
        composed: !0
      }
    ));
  }
  _t(() => {
    s(!1);
  });
  const c = () => s(!0);
  function f() {
    return V(this, void 0, void 0, function* () {
      const u = {
        tag: "substation-explorer",
        src: "https://philippilievskibearingpointcom.github.io/oscd-official-plugins-test/plugins/editors/ied.js"
      }, d = yield import(u.src);
      a(u, d);
    });
  }
  function l() {
    return V(this, void 0, void 0, function* () {
      const u = {
        tag: "engineering-wizard",
        src: "https://philippilievskibearingpointcom.github.io/oscd-official-plugins-test/plugins/editors/substation.js"
      }, d = yield import(u.src);
      a(u, d);
    });
  }
  function a(u, d) {
    customElements.get(u.tag) || customElements.define(u.tag, d.default), n(2, r = u.tag);
  }
  return t.$$set = (u) => {
    "doc" in u && n(0, i = u.doc), "editCount" in u && n(1, o = u.editCount);
  }, [i, o, r, c, f, l];
}
class Nt extends tt {
  constructor(e) {
    super(), Z(this, e, Ot, kt, I, { doc: 0, editCount: 1 });
  }
}
function H(t) {
  let e, n;
  return e = new Nt({
    props: {
      doc: (
        /*doc*/
        t[0]
      ),
      editCount: (
        /*editCount*/
        t[2]
      )
    }
  }), {
    c() {
      Et(e.$$.fragment);
    },
    m(i, o) {
      X(e, i, o), n = !0;
    },
    p(i, o) {
      const r = {};
      o & /*doc*/
      1 && (r.doc = /*doc*/
      i[0]), o & /*editCount*/
      4 && (r.editCount = /*editCount*/
      i[2]), e.$set(r);
    },
    i(i) {
      n || (j(e.$$.fragment, i), n = !0);
    },
    o(i) {
      D(e.$$.fragment, i), n = !1;
    },
    d(i) {
      Y(e, i);
    }
  };
}
function Lt(t) {
  let e, n, i, o, r, s = (
    /*doc*/
    (t[0] || /*dev*/
    t[1]) && H(t)
  );
  return {
    c() {
      s && s.c(), e = k(), n = g("input"), i = k(), o = g("input"), _(n, "type", "hidden"), _(n, "name", "package-name"), n.value = et, _(o, "type", "hidden"), _(o, "name", "package-version"), o.value = nt;
    },
    m(c, f) {
      s && s.m(c, f), h(c, e, f), h(c, n, f), h(c, i, f), h(c, o, f), r = !0;
    },
    p(c, [f]) {
      /*doc*/
      c[0] || /*dev*/
      c[1] ? s ? (s.p(c, f), f & /*doc, dev*/
      3 && j(s, 1)) : (s = H(c), s.c(), j(s, 1), s.m(e.parentNode, e)) : s && (vt(), D(s, 1, 1, () => {
        s = null;
      }), bt());
    },
    i(c) {
      r || (j(s), r = !0);
    },
    o(c) {
      D(s), r = !1;
    },
    d(c) {
      c && (p(e), p(n), p(i), p(o)), s && s.d(c);
    }
  };
}
function Pt(t, e, n) {
  let { doc: i } = e, { dev: o = !1 } = e, { editCount: r = 0 } = e;
  return console.log("editcount", r), t.$$set = (s) => {
    "doc" in s && n(0, i = s.doc), "dev" in s && n(1, o = s.dev), "editCount" in s && n(2, r = s.editCount);
  }, [i, o, r];
}
class qt extends tt {
  constructor(e) {
    super(), Z(this, e, Pt, Lt, I, { doc: 0, dev: 1, editCount: 2 });
  }
}
class Bt extends HTMLElement {
  connectedCallback() {
    var n;
    this.attachShadow({ mode: "open" }), this.plugin = new qt({
      target: this.shadowRoot,
      props: {
        doc: this._doc,
        editCount: -1
      }
    });
    const e = xt();
    (n = this.shadowRoot) == null || n.appendChild(e);
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
function xt() {
  const t = `${et}-v${nt}-style`, e = At(), n = document.createElement("link");
  return n.rel = "stylesheet", n.type = "text/css", n.href = e, n.id = t, n;
}
function At() {
  const t = new URL(import.meta.url), e = t.origin, n = t.pathname.split("/").slice(0, -1).filter(Boolean).join("/");
  return [e, n, "style.css"].filter(Boolean).join("/");
}
export {
  Bt as default
};
