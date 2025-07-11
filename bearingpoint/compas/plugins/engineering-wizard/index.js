var de = Object.defineProperty;
var ae = (e, t, n) => t in e ? de(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var T = (e, t, n) => (ae(e, typeof t != "symbol" ? t + "" : t, n), n);
function P() {
}
function te(e) {
  return e();
}
function J() {
  return /* @__PURE__ */ Object.create(null);
}
function x(e) {
  e.forEach(te);
}
function R(e) {
  return typeof e == "function";
}
function V(e, t) {
  return e != e ? t == t : e !== t || e && typeof e == "object" || typeof e == "function";
}
function pe(e) {
  return Object.keys(e).length === 0;
}
function he(e) {
  return e && R(e.destroy) ? e.destroy : P;
}
function k(e, t) {
  e.appendChild(t);
}
function y(e, t, n) {
  e.insertBefore(t, n || null);
}
function b(e) {
  e.parentNode && e.parentNode.removeChild(e);
}
function me(e, t) {
  for (let n = 0; n < e.length; n += 1)
    e[n] && e[n].d(t);
}
function w(e) {
  return document.createElement(e);
}
function ne(e) {
  return document.createTextNode(e);
}
function $() {
  return ne(" ");
}
function H() {
  return ne("");
}
function U(e, t, n, i) {
  return e.addEventListener(t, n, i), () => e.removeEventListener(t, n, i);
}
function m(e, t, n) {
  n == null ? e.removeAttribute(t) : e.getAttribute(t) !== n && e.setAttribute(t, n);
}
const _e = ["width", "height"];
function ge(e, t) {
  const n = Object.getOwnPropertyDescriptors(e.__proto__);
  for (const i in t)
    t[i] == null ? e.removeAttribute(i) : i === "style" ? e.style.cssText = t[i] : i === "__value" ? e.value = e[i] = t[i] : n[i] && n[i].set && _e.indexOf(i) === -1 ? e[i] = t[i] : m(e, i, t[i]);
}
function ve(e, t) {
  Object.keys(t).forEach((n) => {
    be(e, n, t[n]);
  });
}
function be(e, t, n) {
  const i = t.toLowerCase();
  i in e ? e[i] = typeof e[i] == "boolean" && n === "" ? !0 : n : t in e ? e[t] = typeof e[t] == "boolean" && n === "" ? !0 : n : m(e, t, n);
}
function we(e) {
  return /-/.test(e) ? ve : ge;
}
function ye(e) {
  return Array.from(e.childNodes);
}
function ke(e, t, { bubbles: n = !1, cancelable: i = !1 } = {}) {
  return new CustomEvent(e, { detail: t, bubbles: n, cancelable: i });
}
let B;
function L(e) {
  B = e;
}
function ie() {
  if (!B)
    throw new Error("Function called outside component initialization");
  return B;
}
function Ce(e) {
  ie().$$.on_mount.push(e);
}
function Ee() {
  const e = ie();
  return (t, n, { cancelable: i = !1 } = {}) => {
    const o = e.$$.callbacks[t];
    if (o) {
      const l = ke(
        /** @type {string} */
        t,
        n,
        { cancelable: i }
      );
      return o.slice().forEach((s) => {
        s.call(e, l);
      }), !l.defaultPrevented;
    }
    return !0;
  };
}
const N = [], K = [];
let O = [];
const Q = [], $e = /* @__PURE__ */ Promise.resolve();
let q = !1;
function je() {
  q || (q = !0, $e.then(oe));
}
function z(e) {
  O.push(e);
}
const D = /* @__PURE__ */ new Set();
let S = 0;
function oe() {
  if (S !== 0)
    return;
  const e = B;
  do {
    try {
      for (; S < N.length; ) {
        const t = N[S];
        S++, L(t), Se(t.$$);
      }
    } catch (t) {
      throw N.length = 0, S = 0, t;
    }
    for (L(null), N.length = 0, S = 0; K.length; )
      K.pop()();
    for (let t = 0; t < O.length; t += 1) {
      const n = O[t];
      D.has(n) || (D.add(n), n());
    }
    O.length = 0;
  } while (N.length);
  for (; Q.length; )
    Q.pop()();
  q = !1, D.clear(), L(e);
}
function Se(e) {
  if (e.fragment !== null) {
    e.update(), x(e.before_update);
    const t = e.dirty;
    e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(z);
  }
}
function Ne(e) {
  const t = [], n = [];
  O.forEach((i) => e.indexOf(i) === -1 ? t.push(i) : n.push(i)), n.forEach((i) => i()), O = t;
}
const I = /* @__PURE__ */ new Set();
let j;
function Oe() {
  j = {
    r: 0,
    c: [],
    p: j
    // parent group
  };
}
function Pe() {
  j.r || x(j.c), j = j.p;
}
function A(e, t) {
  e && e.i && (I.delete(e), e.i(t));
}
function F(e, t, n, i) {
  if (e && e.o) {
    if (I.has(e))
      return;
    I.add(e), j.c.push(() => {
      I.delete(e), i && (n && e.d(1), i());
    }), e.o(t);
  } else
    i && i();
}
function W(e) {
  return (e == null ? void 0 : e.length) !== void 0 ? e : Array.from(e);
}
function xe(e) {
  e && e.c();
}
function se(e, t, n) {
  const { fragment: i, after_update: o } = e.$$;
  i && i.m(t, n), z(() => {
    const l = e.$$.on_mount.map(te).filter(R);
    e.$$.on_destroy ? e.$$.on_destroy.push(...l) : x(l), e.$$.on_mount = [];
  }), o.forEach(z);
}
function le(e, t) {
  const n = e.$$;
  n.fragment !== null && (Ne(n.after_update), x(n.on_destroy), n.fragment && n.fragment.d(t), n.on_destroy = n.fragment = null, n.ctx = []);
}
function Le(e, t) {
  e.$$.dirty[0] === -1 && (N.push(e), je(), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31;
}
function ce(e, t, n, i, o, l, s = null, c = [-1]) {
  const d = B;
  L(e);
  const u = e.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: l,
    update: P,
    not_equal: o,
    bound: J(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(t.context || (d ? d.$$.context : [])),
    // everything else
    callbacks: J(),
    dirty: c,
    skip_bound: !1,
    root: t.target || d.$$.root
  };
  s && s(u.root);
  let a = !1;
  if (u.ctx = n ? n(e, t.props || {}, (r, f, ..._) => {
    const C = _.length ? _[0] : f;
    return u.ctx && o(u.ctx[r], u.ctx[r] = C) && (!u.skip_bound && u.bound[r] && u.bound[r](C), a && Le(e, r)), f;
  }) : [], u.update(), a = !0, x(u.before_update), u.fragment = i ? i(u.ctx) : !1, t.target) {
    if (t.hydrate) {
      const r = ye(t.target);
      u.fragment && u.fragment.l(r), r.forEach(b);
    } else
      u.fragment && u.fragment.c();
    t.intro && A(e.$$.fragment), se(e, t.target, t.anchor), oe();
  }
  L(d);
}
class ue {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    T(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    T(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    le(this, 1), this.$destroy = P;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(t, n) {
    if (!R(n))
      return P;
    const i = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
    return i.push(n), () => {
      const o = i.indexOf(n);
      o !== -1 && i.splice(o, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(t) {
    this.$$set && !pe(t) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1);
  }
}
const Ae = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(Ae);
const re = "archive-explorer", fe = "0.0.1";
function Be(e, t, n, i) {
  function o(l) {
    return l instanceof n ? l : new n(function(s) {
      s(l);
    });
  }
  return new (n || (n = Promise))(function(l, s) {
    function c(a) {
      try {
        u(i.next(a));
      } catch (r) {
        s(r);
      }
    }
    function d(a) {
      try {
        u(i.throw(a));
      } catch (r) {
        s(r);
      }
    }
    function u(a) {
      a.done ? l(a.value) : o(a.value).then(c, d);
    }
    u((i = i.apply(e, t || [])).next());
  });
}
function X(e, t, n) {
  const i = e.slice();
  return i[11] = t[n], i[13] = n, i;
}
function Ie(e) {
  let t;
  return {
    c() {
      t = w("div"), m(t, "class", "plugin-step-line svelte-1rjckws");
    },
    m(n, i) {
      y(n, t, i);
    },
    d(n) {
      n && b(t);
    }
  };
}
function Y(e) {
  let t, n, i, o, l, s, c, d;
  function u() {
    return (
      /*click_handler*/
      e[7](
        /*plugin*/
        e[11]
      )
    );
  }
  let a = (
    /*i*/
    e[13] < /*plugins*/
    e[3].length - 1 && Ie()
  );
  return {
    c() {
      t = w("div"), n = w("button"), n.textContent = `${/*i*/
      e[13] + 1}`, i = $(), o = w("p"), o.textContent = `${/*plugin*/
      e[11].label}`, l = $(), a && a.c(), s = H(), m(n, "class", "svelte-1rjckws"), m(o, "class", "svelte-1rjckws"), m(t, "class", "plugin-step svelte-1rjckws");
    },
    m(r, f) {
      y(r, t, f), k(t, n), k(t, i), k(t, o), y(r, l, f), a && a.m(r, f), y(r, s, f), c || (d = U(n, "click", u), c = !0);
    },
    p(r, f) {
      e = r;
    },
    d(r) {
      r && (b(t), b(l), b(s)), a && a.d(r), c = !1, d();
    }
  };
}
function Z(e) {
  let t = (
    /*tagName*/
    e[2]
  ), n, i = (
    /*tagName*/
    e[2] && M(e)
  );
  return {
    c() {
      i && i.c(), n = H();
    },
    m(o, l) {
      i && i.m(o, l), y(o, n, l);
    },
    p(o, l) {
      /*tagName*/
      o[2] ? t ? V(
        t,
        /*tagName*/
        o[2]
      ) ? (i.d(1), i = M(o), t = /*tagName*/
      o[2], i.c(), i.m(n.parentNode, n)) : i.p(o, l) : (i = M(o), t = /*tagName*/
      o[2], i.c(), i.m(n.parentNode, n)) : t && (i.d(1), i = null, t = /*tagName*/
      o[2]);
    },
    d(o) {
      o && b(n), i && i.d(o);
    }
  };
}
function M(e) {
  let t, n, i, o;
  return {
    c() {
      t = w(
        /*tagName*/
        e[2]
      ), we(
        /*tagName*/
        e[2]
      )(t, { class: "svelte-1rjckws" });
    },
    m(l, s) {
      y(l, t, s), i || (o = he(n = De.call(null, t, {
        doc: (
          /*doc*/
          e[0]
        ),
        editCount: (
          /*editCount*/
          e[1]
        )
      })), i = !0);
    },
    p(l, s) {
      n && R(n.update) && s & /*doc, editCount*/
      3 && n.update.call(null, {
        doc: (
          /*doc*/
          l[0]
        ),
        editCount: (
          /*editCount*/
          l[1]
        )
      });
    },
    d(l) {
      l && b(t), i = !1, o();
    }
  };
}
function Re(e) {
  let t, n, i, o, l, s, c, d, u, a, r, f, _, C = W(
    /*plugins*/
    e[3]
  ), g = [];
  for (let p = 0; p < C.length; p += 1)
    g[p] = Y(X(e, C, p));
  let v = (
    /*tagName*/
    e[2] && Z(e)
  );
  return {
    c() {
      t = w("div"), n = w("p"), n.textContent = "Plugin Flow", i = $(), o = w("div");
      for (let p = 0; p < g.length; p += 1)
        g[p].c();
      l = $(), s = w("div"), c = w("button"), c.textContent = "Back", d = $(), u = w("button"), u.textContent = "Next", a = $(), v && v.c(), r = H(), m(n, "class", "plugin-flow-title svelte-1rjckws"), m(o, "class", "plugin-steps svelte-1rjckws"), m(c, "class", "back-button svelte-1rjckws"), m(u, "class", "next-button svelte-1rjckws"), m(s, "class", "stepper-navigation svelte-1rjckws"), m(t, "class", "stepper svelte-1rjckws");
    },
    m(p, E) {
      y(p, t, E), k(t, n), k(t, i), k(t, o);
      for (let h = 0; h < g.length; h += 1)
        g[h] && g[h].m(o, null);
      k(t, l), k(t, s), k(s, c), k(s, d), k(s, u), y(p, a, E), v && v.m(p, E), y(p, r, E), f || (_ = [
        U(
          c,
          "click",
          /*previousPlugin*/
          e[6]
        ),
        U(
          u,
          "click",
          /*nextPlugin*/
          e[5]
        )
      ], f = !0);
    },
    p(p, [E]) {
      if (E & /*plugins, loadPlugin*/
      24) {
        C = W(
          /*plugins*/
          p[3]
        );
        let h;
        for (h = 0; h < C.length; h += 1) {
          const G = X(p, C, h);
          g[h] ? g[h].p(G, E) : (g[h] = Y(G), g[h].c(), g[h].m(o, null));
        }
        for (; h < g.length; h += 1)
          g[h].d(1);
        g.length = C.length;
      }
      /*tagName*/
      p[2] ? v ? v.p(p, E) : (v = Z(p), v.c(), v.m(r.parentNode, r)) : v && (v.d(1), v = null);
    },
    i: P,
    o: P,
    d(p) {
      p && (b(t), b(a), b(r)), me(g, p), v && v.d(p), f = !1, x(_);
    }
  };
}
function Te() {
  var e, t;
  const n = document.querySelector("open-scd");
  return (t = (e = n == null ? void 0 : n.shadowRoot) === null || e === void 0 ? void 0 : e.querySelector("compas-layout")) !== null && t !== void 0 ? t : null;
}
function De(e, t) {
  return Object.assign(e, t), { update: (n) => Object.assign(e, n) };
}
function Me(e, t, n) {
  let { doc: i } = t, { editCount: o = -1 } = t, l = null;
  Ee();
  function s(f) {
    var _;
    (_ = Te()) === null || _ === void 0 || _.dispatchEvent(new CustomEvent(
      "toggle-editor-tabs",
      {
        detail: { visible: f },
        bubbles: !0,
        composed: !0
      }
    ));
  }
  const c = [
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
  function d(f) {
    return Be(this, void 0, void 0, function* () {
      const _ = yield import(f.src);
      customElements.get(f.tag) || customElements.define(f.tag, _.default), n(2, l = f.tag);
    });
  }
  Ce(() => {
    d(c[0]), s(!1);
  });
  function u() {
    const f = c.findIndex((_) => _.tag === l);
    d(c[(f + 1) % c.length]);
  }
  function a() {
    const f = c.findIndex((_) => _.tag === l);
    d(c[(f - 1 + c.length) % c.length]);
  }
  const r = (f) => d(f);
  return e.$$set = (f) => {
    "doc" in f && n(0, i = f.doc), "editCount" in f && n(1, o = f.editCount);
  }, [
    i,
    o,
    l,
    c,
    d,
    u,
    a,
    r
  ];
}
class Ue extends ue {
  constructor(t) {
    super(), ce(this, t, Me, Re, V, { doc: 0, editCount: 1 });
  }
}
function ee(e) {
  let t, n;
  return t = new Ue({
    props: {
      doc: (
        /*doc*/
        e[0]
      ),
      editCount: (
        /*editCount*/
        e[2]
      )
    }
  }), {
    c() {
      xe(t.$$.fragment);
    },
    m(i, o) {
      se(t, i, o), n = !0;
    },
    p(i, o) {
      const l = {};
      o & /*doc*/
      1 && (l.doc = /*doc*/
      i[0]), o & /*editCount*/
      4 && (l.editCount = /*editCount*/
      i[2]), t.$set(l);
    },
    i(i) {
      n || (A(t.$$.fragment, i), n = !0);
    },
    o(i) {
      F(t.$$.fragment, i), n = !1;
    },
    d(i) {
      le(t, i);
    }
  };
}
function qe(e) {
  let t, n, i, o, l, s = (
    /*doc*/
    (e[0] || /*dev*/
    e[1]) && ee(e)
  );
  return {
    c() {
      s && s.c(), t = $(), n = w("input"), i = $(), o = w("input"), m(n, "type", "hidden"), m(n, "name", "package-name"), n.value = re, m(o, "type", "hidden"), m(o, "name", "package-version"), o.value = fe;
    },
    m(c, d) {
      s && s.m(c, d), y(c, t, d), y(c, n, d), y(c, i, d), y(c, o, d), l = !0;
    },
    p(c, [d]) {
      /*doc*/
      c[0] || /*dev*/
      c[1] ? s ? (s.p(c, d), d & /*doc, dev*/
      3 && A(s, 1)) : (s = ee(c), s.c(), A(s, 1), s.m(t.parentNode, t)) : s && (Oe(), F(s, 1, 1, () => {
        s = null;
      }), Pe());
    },
    i(c) {
      l || (A(s), l = !0);
    },
    o(c) {
      F(s), l = !1;
    },
    d(c) {
      c && (b(t), b(n), b(i), b(o)), s && s.d(c);
    }
  };
}
function ze(e, t, n) {
  let { doc: i } = t, { dev: o = !1 } = t, { editCount: l = 0 } = t;
  return console.log("editcount", l), e.$$set = (s) => {
    "doc" in s && n(0, i = s.doc), "dev" in s && n(1, o = s.dev), "editCount" in s && n(2, l = s.editCount);
  }, [i, o, l];
}
class Fe extends ue {
  constructor(t) {
    super(), ce(this, t, ze, qe, V, { doc: 0, dev: 1, editCount: 2 });
  }
}
class Je extends HTMLElement {
  connectedCallback() {
    var n;
    this.attachShadow({ mode: "open" }), this.plugin = new Fe({
      target: this.shadowRoot,
      props: {
        doc: this._doc,
        editCount: -1
      }
    });
    const t = Ve();
    (n = this.shadowRoot) == null || n.appendChild(t);
  }
  set doc(t) {
    this._doc = t, this.plugin && this.plugin.$set({ doc: t });
  }
  get doc() {
    return this._doc;
  }
  set editCount(t) {
    this.plugin && this.plugin.$set({ editCount: t });
  }
}
function Ve() {
  const e = `${re}-v${fe}-style`, t = He(), n = document.createElement("link");
  return n.rel = "stylesheet", n.type = "text/css", n.href = t, n.id = e, n;
}
function He() {
  const e = new URL(import.meta.url), t = e.origin, n = e.pathname.split("/").slice(0, -1).filter(Boolean).join("/");
  return [t, n, "style.css"].filter(Boolean).join("/");
}
export {
  Je as default
};
