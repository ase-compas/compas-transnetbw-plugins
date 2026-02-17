var Mn = Object.defineProperty;
var Le = (t) => {
  throw TypeError(t);
};
var Dn = (t, e, n) => e in t ? Mn(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var Rt = (t, e, n) => Dn(t, typeof e != "symbol" ? e + "" : e, n), me = (t, e, n) => e.has(t) || Le("Cannot " + n);
var f = (t, e, n) => (me(t, e, "read from private field"), n ? n.call(t) : e.get(t)), w = (t, e, n) => e.has(t) ? Le("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, n), p = (t, e, n, r) => (me(t, e, "write to private field"), r ? r.call(t, n) : e.set(t, n), n), P = (t, e, n) => (me(t, e, "access private method"), n);
const b = Symbol(), Ln = "http://www.w3.org/1999/xhtml", $e = !1;
var Je = Array.isArray, Fn = Array.prototype.indexOf, Un = Array.from, Ee = Object.defineProperty, kt = Object.getOwnPropertyDescriptor, jn = Object.prototype, qn = Array.prototype, Bn = Object.getPrototypeOf, Fe = Object.isExtensible;
function Yn(t) {
  for (var e = 0; e < t.length; e++)
    t[e]();
}
function Qe() {
  var t, e, n = new Promise((r, i) => {
    t = r, e = i;
  });
  return { promise: n, resolve: t, reject: e };
}
const O = 2, Xe = 4, Ne = 8, Tt = 16, _t = 32, Pt = 64, ke = 128, Z = 256, se = 512, x = 1024, U = 2048, vt = 4096, ct = 8192, xt = 16384, tn = 32768, _e = 65536, Ue = 1 << 17, Vn = 1 << 18, Bt = 1 << 19, Hn = 1 << 20, ye = 1 << 21, ve = 1 << 22, yt = 1 << 23, ee = Symbol("$state"), Gn = Symbol("legacy props"), It = new class extends Error {
  constructor() {
    super(...arguments);
    Rt(this, "name", "StaleReactionError");
    Rt(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
function Kn() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function Wn() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Zn(t) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function zn() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function $n() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Jn() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Qn() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
function Xn() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
function en(t) {
  return t === this.v;
}
function tr(t, e) {
  return t != t ? e == e : t !== e || t !== null && typeof t == "object" || typeof t == "function";
}
function er(t) {
  return !tr(t, this.v);
}
let he = !1, nr = !1;
function rr() {
  he = !0;
}
let j = null;
function jt(t) {
  j = t;
}
function nn(t, e = !1, n) {
  j = {
    p: j,
    c: null,
    e: null,
    s: t,
    x: null,
    l: he && !e ? { s: null, u: null, $: [] } : null
  };
}
function rn(t) {
  var e = (
    /** @type {ComponentContext} */
    j
  ), n = e.e;
  if (n !== null) {
    e.e = null;
    for (var r of n)
      Pr(r);
  }
  return j = e.p, /** @type {T} */
  {};
}
function $t() {
  return !he || j !== null && j.l === null;
}
let Nt = [];
function ir() {
  var t = Nt;
  Nt = [], Yn(t);
}
function le(t) {
  if (Nt.length === 0) {
    var e = Nt;
    queueMicrotask(() => {
      e === Nt && ir();
    });
  }
  Nt.push(t);
}
const sr = /* @__PURE__ */ new WeakMap();
function sn(t) {
  var e = m;
  if (e === null)
    return g.f |= yt, t;
  if (e.f & tn)
    qt(t, e);
  else {
    if (!(e.f & ke))
      throw !e.parent && t instanceof Error && ln(t), t;
    e.b.error(t);
  }
}
function qt(t, e) {
  for (; e !== null; ) {
    if (e.f & ke)
      try {
        e.b.error(t);
        return;
      } catch (n) {
        t = n;
      }
    e = e.parent;
  }
  throw t instanceof Error && ln(t), t;
}
function ln(t) {
  const e = sr.get(t);
  e && (Ee(t, "message", {
    value: e.message
  }), Ee(t, "stack", {
    value: e.stack
  }));
}
const Qt = /* @__PURE__ */ new Set();
let S = null, T = null, be = /* @__PURE__ */ new Set(), st = [], Oe = null, Se = !1;
var Ct, Mt, pt, Wt, Dt, Lt, gt, Ft, Zt, zt, V, Te, ne, Pe;
const ae = class ae {
  constructor() {
    w(this, V);
    /**
     * The current values of any sources that are updated in this batch
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Source, any>}
     */
    Rt(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any sources that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Source, any>}
     */
    w(this, Ct, /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<() => void>}
     */
    w(this, Mt, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    w(this, pt, 0);
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    w(this, Wt, null);
    /**
     * Async effects inside a newly-created `<svelte:boundary>`
     * — these do not prevent the batch from committing
     * @type {Effect[]}
     */
    w(this, Dt, []);
    /**
     * Template effects and `$effect.pre` effects, which run when
     * a batch is committed
     * @type {Effect[]}
     */
    w(this, Lt, []);
    /**
     * The same as `#render_effects`, but for `$effect` (which runs after)
     * @type {Effect[]}
     */
    w(this, gt, []);
    /**
     * Block effects, which may need to re-run on subsequent flushes
     * in order to update internal sources (e.g. each block items)
     * @type {Effect[]}
     */
    w(this, Ft, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Effect[]}
     */
    w(this, Zt, []);
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Effect[]}
     */
    w(this, zt, []);
    /**
     * A set of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`
     * @type {Set<Effect>}
     */
    Rt(this, "skipped_effects", /* @__PURE__ */ new Set());
  }
  /**
   *
   * @param {Effect[]} root_effects
   */
  process(e) {
    var s;
    st = [], this.apply();
    for (const l of e)
      P(this, V, Te).call(this, l);
    if (f(this, pt) === 0) {
      var n = T;
      P(this, V, Pe).call(this);
      var r = f(this, Lt), i = f(this, gt);
      p(this, Lt, []), p(this, gt, []), p(this, Ft, []), S = null, T = n, je(r), je(i), (s = f(this, Wt)) == null || s.resolve();
    } else
      P(this, V, ne).call(this, f(this, Lt)), P(this, V, ne).call(this, f(this, gt)), P(this, V, ne).call(this, f(this, Ft));
    T = null;
    for (const l of f(this, Dt))
      Kt(l);
    p(this, Dt, []);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Source} source
   * @param {any} value
   */
  capture(e, n) {
    f(this, Ct).has(e) || f(this, Ct).set(e, n), this.current.set(e, e.v), T == null || T.set(e, e.v);
  }
  activate() {
    S = this;
  }
  deactivate() {
    S = null, T = null;
  }
  flush() {
    if (st.length > 0) {
      if (this.activate(), lr(), S !== null && S !== this)
        return;
    } else f(this, pt) === 0 && P(this, V, Pe).call(this);
    this.deactivate();
    for (const e of be)
      if (be.delete(e), e(), S !== null)
        break;
  }
  increment() {
    p(this, pt, f(this, pt) + 1);
  }
  decrement() {
    p(this, pt, f(this, pt) - 1);
    for (const e of f(this, Zt))
      N(e, U), St(e);
    for (const e of f(this, zt))
      N(e, vt), St(e);
    this.flush();
  }
  /** @param {() => void} fn */
  add_callback(e) {
    f(this, Mt).add(e);
  }
  settled() {
    return (f(this, Wt) ?? p(this, Wt, Qe())).promise;
  }
  static ensure() {
    if (S === null) {
      const e = S = new ae();
      Qt.add(S), ae.enqueue(() => {
        S === e && e.flush();
      });
    }
    return S;
  }
  /** @param {() => void} task */
  static enqueue(e) {
    le(e);
  }
  apply() {
  }
};
Ct = new WeakMap(), Mt = new WeakMap(), pt = new WeakMap(), Wt = new WeakMap(), Dt = new WeakMap(), Lt = new WeakMap(), gt = new WeakMap(), Ft = new WeakMap(), Zt = new WeakMap(), zt = new WeakMap(), V = new WeakSet(), /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 */
Te = function(e) {
  var o;
  e.f ^= x;
  for (var n = e.first; n !== null; ) {
    var r = n.f, i = (r & (_t | Pt)) !== 0, s = i && (r & x) !== 0, l = s || (r & ct) !== 0 || this.skipped_effects.has(n);
    if (!l && n.fn !== null) {
      i ? n.f ^= x : r & Xe ? f(this, gt).push(n) : r & x || (r & ve && ((o = n.b) != null && o.is_pending()) ? f(this, Dt).push(n) : ge(n) && (n.f & Tt && f(this, Ft).push(n), Kt(n)));
      var a = n.first;
      if (a !== null) {
        n = a;
        continue;
      }
    }
    var u = n.parent;
    for (n = n.next; n === null && u !== null; )
      n = u.next, u = u.parent;
  }
}, /**
 * @param {Effect[]} effects
 */
ne = function(e) {
  for (const n of e)
    (n.f & U ? f(this, Zt) : f(this, zt)).push(n), N(n, x);
  e.length = 0;
}, /**
 * Append and remove branches to/from the DOM
 */
Pe = function() {
  var e;
  for (const n of f(this, Mt))
    n();
  if (f(this, Mt).clear(), Qt.size > 1) {
    f(this, Ct).clear();
    let n = !0;
    for (const r of Qt) {
      if (r === this) {
        n = !1;
        continue;
      }
      const i = [];
      for (const [l, a] of this.current) {
        if (r.current.has(l))
          if (n && a !== r.current.get(l))
            r.current.set(l, a);
          else
            continue;
        i.push(l);
      }
      if (i.length === 0)
        continue;
      const s = [...r.current.keys()].filter((l) => !this.current.has(l));
      if (s.length > 0) {
        for (const l of i)
          un(l, s);
        if (st.length > 0) {
          S = r, r.apply();
          for (const l of st)
            P(e = r, V, Te).call(e, l);
          st = [], r.deactivate();
        }
      }
    }
    S = null;
  }
  Qt.delete(this);
};
let it = ae;
function lr() {
  var t = Ot;
  Se = !0;
  try {
    var e = 0;
    for (Ye(!0); st.length > 0; ) {
      var n = it.ensure();
      if (e++ > 1e3) {
        var r, i;
        ur();
      }
      n.process(st), ot.clear();
    }
  } finally {
    Se = !1, Ye(t), Oe = null;
  }
}
function ur() {
  try {
    Wn();
  } catch (t) {
    qt(t, Oe);
  }
}
let et = null;
function je(t) {
  var e = t.length;
  if (e !== 0) {
    for (var n = 0; n < e; ) {
      var r = t[n++];
      if (!(r.f & (xt | ct)) && ge(r) && (et = [], Kt(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null && r.ac === null ? yn(r) : r.fn = null), (et == null ? void 0 : et.length) > 0)) {
        ot.clear();
        for (const i of et)
          Kt(i);
        et = [];
      }
    }
    et = null;
  }
}
function un(t, e) {
  if (t.reactions !== null)
    for (const n of t.reactions) {
      const r = n.f;
      r & O ? un(
        /** @type {Derived} */
        n,
        e
      ) : r & (ve | Tt) && fn(n, e) && (N(n, U), St(
        /** @type {Effect} */
        n
      ));
    }
}
function fn(t, e) {
  if (t.deps !== null) {
    for (const n of t.deps)
      if (e.includes(n) || n.f & O && fn(
        /** @type {Derived} */
        n,
        e
      ))
        return !0;
  }
  return !1;
}
function St(t) {
  for (var e = Oe = t; e.parent !== null; ) {
    e = e.parent;
    var n = e.f;
    if (Se && e === m && n & Tt)
      return;
    if (n & (Pt | _t)) {
      if (!(n & x)) return;
      e.f ^= x;
    }
  }
  st.push(e);
}
function fr(t) {
  let e = 0, n = de(0), r;
  return () => {
    Sr() && (W(n), Ar(() => (e === 0 && (r = In(() => t(() => Vt(n)))), e += 1, () => {
      le(() => {
        e -= 1, e === 0 && (r == null || r(), r = void 0, Vt(n));
      });
    })));
  };
}
var ar = _e | Bt | ke;
function or(t, e, n) {
  new cr(t, e, n);
}
var G, B, Ie, z, mt, $, Y, M, J, lt, wt, ut, Et, ft, oe, ce, k, _r, vr, re, ie, xe;
class cr {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   */
  constructor(e, n, r) {
    w(this, k);
    /** @type {Boundary | null} */
    Rt(this, "parent");
    w(this, G, !1);
    /** @type {TemplateNode} */
    w(this, B);
    /** @type {TemplateNode | null} */
    w(this, Ie, null);
    /** @type {BoundaryProps} */
    w(this, z);
    /** @type {((anchor: Node) => void)} */
    w(this, mt);
    /** @type {Effect} */
    w(this, $);
    /** @type {Effect | null} */
    w(this, Y, null);
    /** @type {Effect | null} */
    w(this, M, null);
    /** @type {Effect | null} */
    w(this, J, null);
    /** @type {DocumentFragment | null} */
    w(this, lt, null);
    w(this, wt, 0);
    w(this, ut, 0);
    w(this, Et, !1);
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    w(this, ft, null);
    w(this, oe, () => {
      f(this, ft) && ue(f(this, ft), f(this, wt));
    });
    w(this, ce, fr(() => (p(this, ft, de(f(this, wt))), () => {
      p(this, ft, null);
    })));
    p(this, B, e), p(this, z, n), p(this, mt, r), this.parent = /** @type {Effect} */
    m.b, p(this, G, !!f(this, z).pending), p(this, $, mn(() => {
      m.b = this;
      {
        try {
          p(this, Y, nt(() => r(f(this, B))));
        } catch (i) {
          this.error(i);
        }
        f(this, ut) > 0 ? P(this, k, ie).call(this) : p(this, G, !1);
      }
    }, ar));
  }
  /**
   * Returns `true` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_pending() {
    return f(this, G) || !!this.parent && this.parent.is_pending();
  }
  has_pending_snippet() {
    return !!f(this, z).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   */
  update_pending_count(e) {
    P(this, k, xe).call(this, e), p(this, wt, f(this, wt) + e), be.add(f(this, oe));
  }
  get_effect_pending() {
    return f(this, ce).call(this), W(
      /** @type {Source<number>} */
      f(this, ft)
    );
  }
  /** @param {unknown} error */
  error(e) {
    var n = f(this, z).onerror;
    let r = f(this, z).failed;
    if (f(this, Et) || !n && !r)
      throw e;
    f(this, Y) && (Q(f(this, Y)), p(this, Y, null)), f(this, M) && (Q(f(this, M)), p(this, M, null)), f(this, J) && (Q(f(this, J)), p(this, J, null));
    var i = !1, s = !1;
    const l = () => {
      if (i) {
        Xn();
        return;
      }
      i = !0, s && Qn(), it.ensure(), p(this, wt, 0), f(this, J) !== null && Ht(f(this, J), () => {
        p(this, J, null);
      }), p(this, G, this.has_pending_snippet()), p(this, Y, P(this, k, re).call(this, () => (p(this, Et, !1), nt(() => f(this, mt).call(this, f(this, B)))))), f(this, ut) > 0 ? P(this, k, ie).call(this) : p(this, G, !1);
    };
    var a = g;
    try {
      D(null), s = !0, n == null || n(e, l), s = !1;
    } catch (u) {
      qt(u, f(this, $) && f(this, $).parent);
    } finally {
      D(a);
    }
    r && le(() => {
      p(this, J, P(this, k, re).call(this, () => {
        p(this, Et, !0);
        try {
          return nt(() => {
            r(
              f(this, B),
              () => e,
              () => l
            );
          });
        } catch (u) {
          return qt(
            u,
            /** @type {Effect} */
            f(this, $).parent
          ), null;
        } finally {
          p(this, Et, !1);
        }
      }));
    });
  }
}
G = new WeakMap(), B = new WeakMap(), Ie = new WeakMap(), z = new WeakMap(), mt = new WeakMap(), $ = new WeakMap(), Y = new WeakMap(), M = new WeakMap(), J = new WeakMap(), lt = new WeakMap(), wt = new WeakMap(), ut = new WeakMap(), Et = new WeakMap(), ft = new WeakMap(), oe = new WeakMap(), ce = new WeakMap(), k = new WeakSet(), _r = function() {
  try {
    p(this, Y, nt(() => f(this, mt).call(this, f(this, B))));
  } catch (e) {
    this.error(e);
  }
  p(this, G, !1);
}, vr = function() {
  const e = f(this, z).pending;
  e && (p(this, M, nt(() => e(f(this, B)))), it.enqueue(() => {
    p(this, Y, P(this, k, re).call(this, () => (it.ensure(), nt(() => f(this, mt).call(this, f(this, B)))))), f(this, ut) > 0 ? P(this, k, ie).call(this) : (Ht(
      /** @type {Effect} */
      f(this, M),
      () => {
        p(this, M, null);
      }
    ), p(this, G, !1));
  }));
}, /**
 * @param {() => Effect | null} fn
 */
re = function(e) {
  var n = m, r = g, i = j;
  X(f(this, $)), D(f(this, $)), jt(f(this, $).ctx);
  try {
    return e();
  } catch (s) {
    return sn(s), null;
  } finally {
    X(n), D(r), jt(i);
  }
}, ie = function() {
  const e = (
    /** @type {(anchor: Node) => void} */
    f(this, z).pending
  );
  f(this, Y) !== null && (p(this, lt, document.createDocumentFragment()), hr(f(this, Y), f(this, lt))), f(this, M) === null && p(this, M, nt(() => e(f(this, B))));
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 */
xe = function(e) {
  var n;
  if (!this.has_pending_snippet()) {
    this.parent && P(n = this.parent, k, xe).call(n, e);
    return;
  }
  p(this, ut, f(this, ut) + e), f(this, ut) === 0 && (p(this, G, !1), f(this, M) && Ht(f(this, M), () => {
    p(this, M, null);
  }), f(this, lt) && (f(this, B).before(f(this, lt)), p(this, lt, null)), le(() => {
    it.ensure().flush();
  }));
};
function hr(t, e) {
  for (var n = t.nodes_start, r = t.nodes_end; n !== null; ) {
    var i = n === r ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ pe(n)
    );
    e.append(n), n = i;
  }
}
function dr(t, e, n) {
  const r = $t() ? Ce : an;
  if (e.length === 0) {
    n(t.map(r));
    return;
  }
  var i = S, s = (
    /** @type {Effect} */
    m
  ), l = pr();
  Promise.all(e.map((a) => /* @__PURE__ */ gr(a))).then((a) => {
    l();
    try {
      n([...t.map(r), ...a]);
    } catch (u) {
      s.f & xt || qt(u, s);
    }
    i == null || i.deactivate(), Re();
  }).catch((a) => {
    qt(a, s);
  });
}
function pr() {
  var t = m, e = g, n = j, r = S;
  return function() {
    X(t), D(e), jt(n), r == null || r.activate();
  };
}
function Re() {
  X(null), D(null), jt(null);
}
// @__NO_SIDE_EFFECTS__
function Ce(t) {
  var e = O | U, n = g !== null && g.f & O ? (
    /** @type {Derived} */
    g
  ) : null;
  return m === null || n !== null && n.f & Z ? e |= Z : m.f |= Bt, {
    ctx: j,
    deps: null,
    effects: null,
    equals: en,
    f: e,
    fn: t,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      b
    ),
    wv: 0,
    parent: n ?? m,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function gr(t, e) {
  let n = (
    /** @type {Effect | null} */
    m
  );
  n === null && Kn();
  var r = (
    /** @type {Boundary} */
    n.b
  ), i = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), s = de(
    /** @type {V} */
    b
  ), l = !g, a = /* @__PURE__ */ new Map();
  return Rr(() => {
    var d;
    var u = Qe();
    i = u.promise;
    try {
      Promise.resolve(t()).then(u.resolve, u.reject).then(Re);
    } catch (_) {
      u.reject(_), Re();
    }
    var o = (
      /** @type {Batch} */
      S
    ), c = r.is_pending();
    l && (r.update_pending_count(1), c || (o.increment(), (d = a.get(o)) == null || d.reject(It), a.delete(o), a.set(o, u)));
    const h = (_, v = void 0) => {
      if (c || o.activate(), v)
        v !== It && (s.f |= yt, ue(s, v));
      else {
        s.f & yt && (s.f ^= yt), ue(s, _);
        for (const [E, y] of a) {
          if (a.delete(E), E === o) break;
          y.reject(It);
        }
      }
      l && (r.update_pending_count(-1), c || o.decrement());
    };
    u.promise.then(h, (_) => h(null, _ || "unknown"));
  }), Tr(() => {
    for (const u of a.values())
      u.reject(It);
  }), new Promise((u) => {
    function o(c) {
      function h() {
        c === i ? u(s) : o(i);
      }
      c.then(h, h);
    }
    o(i);
  });
}
// @__NO_SIDE_EFFECTS__
function an(t) {
  const e = /* @__PURE__ */ Ce(t);
  return e.equals = er, e;
}
function on(t) {
  var e = t.effects;
  if (e !== null) {
    t.effects = null;
    for (var n = 0; n < e.length; n += 1)
      Q(
        /** @type {Effect} */
        e[n]
      );
  }
}
function mr(t) {
  for (var e = t.parent; e !== null; ) {
    if (!(e.f & O))
      return (
        /** @type {Effect} */
        e
      );
    e = e.parent;
  }
  return null;
}
function Me(t) {
  var e, n = m;
  X(mr(t));
  try {
    on(t), e = Rn(t);
  } finally {
    X(n);
  }
  return e;
}
function cn(t) {
  var e = Me(t);
  if (t.equals(e) || (t.v = e, t.wv = Pn()), !Yt)
    if (T !== null)
      T.set(t, t.v);
    else {
      var n = (at || t.f & Z) && t.deps !== null ? vt : x;
      N(t, n);
    }
}
const ot = /* @__PURE__ */ new Map();
function de(t, e) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: t,
    reactions: null,
    equals: en,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function tt(t, e) {
  const n = de(t);
  return Mr(n), n;
}
function rt(t, e, n = !1) {
  g !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!K || g.f & Ue) && $t() && g.f & (O | Tt | ve | Ue) && !(I != null && I.includes(t)) && Jn();
  let r = n ? dt(e) : e;
  return ue(t, r);
}
function ue(t, e) {
  if (!t.equals(e)) {
    var n = t.v;
    Yt ? ot.set(t, e) : ot.set(t, n), t.v = e;
    var r = it.ensure();
    r.capture(t, n), t.f & O && (t.f & U && Me(
      /** @type {Derived} */
      t
    ), N(t, t.f & Z ? vt : x)), t.wv = Pn(), _n(t, U), $t() && m !== null && m.f & x && !(m.f & (_t | Pt)) && (q === null ? Dr([t]) : q.push(t));
  }
  return e;
}
function Vt(t) {
  rt(t, t.v + 1);
}
function _n(t, e) {
  var n = t.reactions;
  if (n !== null)
    for (var r = $t(), i = n.length, s = 0; s < i; s++) {
      var l = n[s], a = l.f;
      if (!(!r && l === m)) {
        var u = (a & U) === 0;
        u && N(l, e), a & O ? _n(
          /** @type {Derived} */
          l,
          vt
        ) : u && (a & Tt && et !== null && et.push(
          /** @type {Effect} */
          l
        ), St(
          /** @type {Effect} */
          l
        ));
      }
    }
}
function dt(t) {
  if (typeof t != "object" || t === null || ee in t)
    return t;
  const e = Bn(t);
  if (e !== jn && e !== qn)
    return t;
  var n = /* @__PURE__ */ new Map(), r = Je(t), i = /* @__PURE__ */ tt(0), s = bt, l = (a) => {
    if (bt === s)
      return a();
    var u = g, o = bt;
    D(null), He(s);
    var c = a();
    return D(u), He(o), c;
  };
  return r && n.set("length", /* @__PURE__ */ tt(
    /** @type {any[]} */
    t.length
  )), new Proxy(
    /** @type {any} */
    t,
    {
      defineProperty(a, u, o) {
        (!("value" in o) || o.configurable === !1 || o.enumerable === !1 || o.writable === !1) && zn();
        var c = n.get(u);
        return c === void 0 ? c = l(() => {
          var h = /* @__PURE__ */ tt(o.value);
          return n.set(u, h), h;
        }) : rt(c, o.value, !0), !0;
      },
      deleteProperty(a, u) {
        var o = n.get(u);
        if (o === void 0) {
          if (u in a) {
            const c = l(() => /* @__PURE__ */ tt(b));
            n.set(u, c), Vt(i);
          }
        } else
          rt(o, b), Vt(i);
        return !0;
      },
      get(a, u, o) {
        var _;
        if (u === ee)
          return t;
        var c = n.get(u), h = u in a;
        if (c === void 0 && (!h || (_ = kt(a, u)) != null && _.writable) && (c = l(() => {
          var v = dt(h ? a[u] : b), E = /* @__PURE__ */ tt(v);
          return E;
        }), n.set(u, c)), c !== void 0) {
          var d = W(c);
          return d === b ? void 0 : d;
        }
        return Reflect.get(a, u, o);
      },
      getOwnPropertyDescriptor(a, u) {
        var o = Reflect.getOwnPropertyDescriptor(a, u);
        if (o && "value" in o) {
          var c = n.get(u);
          c && (o.value = W(c));
        } else if (o === void 0) {
          var h = n.get(u), d = h == null ? void 0 : h.v;
          if (h !== void 0 && d !== b)
            return {
              enumerable: !0,
              configurable: !0,
              value: d,
              writable: !0
            };
        }
        return o;
      },
      has(a, u) {
        var d;
        if (u === ee)
          return !0;
        var o = n.get(u), c = o !== void 0 && o.v !== b || Reflect.has(a, u);
        if (o !== void 0 || m !== null && (!c || (d = kt(a, u)) != null && d.writable)) {
          o === void 0 && (o = l(() => {
            var _ = c ? dt(a[u]) : b, v = /* @__PURE__ */ tt(_);
            return v;
          }), n.set(u, o));
          var h = W(o);
          if (h === b)
            return !1;
        }
        return c;
      },
      set(a, u, o, c) {
        var L;
        var h = n.get(u), d = u in a;
        if (r && u === "length")
          for (var _ = o; _ < /** @type {Source<number>} */
          h.v; _ += 1) {
            var v = n.get(_ + "");
            v !== void 0 ? rt(v, b) : _ in a && (v = l(() => /* @__PURE__ */ tt(b)), n.set(_ + "", v));
          }
        if (h === void 0)
          (!d || (L = kt(a, u)) != null && L.writable) && (h = l(() => /* @__PURE__ */ tt(void 0)), rt(h, dt(o)), n.set(u, h));
        else {
          d = h.v !== b;
          var E = l(() => dt(o));
          rt(h, E);
        }
        var y = Reflect.getOwnPropertyDescriptor(a, u);
        if (y != null && y.set && y.set.call(c, o), !d) {
          if (r && typeof u == "string") {
            var C = (
              /** @type {Source<number>} */
              n.get("length")
            ), H = Number(u);
            Number.isInteger(H) && H >= C.v && rt(C, H + 1);
          }
          Vt(i);
        }
        return !0;
      },
      ownKeys(a) {
        W(i);
        var u = Reflect.ownKeys(a).filter((h) => {
          var d = n.get(h);
          return d === void 0 || d.v !== b;
        });
        for (var [o, c] of n)
          c.v !== b && !(o in a) && u.push(o);
        return u;
      },
      setPrototypeOf() {
        $n();
      }
    }
  );
}
var qe, vn, hn, dn;
function wr() {
  if (qe === void 0) {
    qe = window, vn = /Firefox/.test(navigator.userAgent);
    var t = Element.prototype, e = Node.prototype, n = Text.prototype;
    hn = kt(e, "firstChild").get, dn = kt(e, "nextSibling").get, Fe(t) && (t.__click = void 0, t.__className = void 0, t.__attributes = null, t.__style = void 0, t.__e = void 0), Fe(n) && (n.__t = void 0);
  }
}
function pn(t = "") {
  return document.createTextNode(t);
}
// @__NO_SIDE_EFFECTS__
function Ae(t) {
  return hn.call(t);
}
// @__NO_SIDE_EFFECTS__
function pe(t) {
  return dn.call(t);
}
function Er(t, e = !1) {
  {
    var n = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ Ae(
        /** @type {Node} */
        t
      )
    );
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ pe(n) : n;
  }
}
function Be(t, e = 1, n = !1) {
  let r = t;
  for (; e--; )
    r = /** @type {TemplateNode} */
    /* @__PURE__ */ pe(r);
  return r;
}
function yr() {
  return !1;
}
function gn(t) {
  var e = g, n = m;
  D(null), X(null);
  try {
    return t();
  } finally {
    D(e), X(n);
  }
}
function br(t, e) {
  var n = e.last;
  n === null ? e.last = e.first = t : (n.next = t, t.prev = n, e.last = t);
}
function ht(t, e, n, r = !0) {
  var i = m;
  i !== null && i.f & ct && (t |= ct);
  var s = {
    ctx: j,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: t | U,
    first: null,
    fn: e,
    last: null,
    next: null,
    parent: i,
    b: i && i.b,
    prev: null,
    teardown: null,
    transitions: null,
    wv: 0,
    ac: null
  };
  if (n)
    try {
      Kt(s), s.f |= tn;
    } catch (u) {
      throw Q(s), u;
    }
  else e !== null && St(s);
  if (r) {
    var l = s;
    if (n && l.deps === null && l.teardown === null && l.nodes_start === null && l.first === l.last && // either `null`, or a singular child
    !(l.f & Bt) && (l = l.first), l !== null && (l.parent = i, i !== null && br(l, i), g !== null && g.f & O && !(t & Pt))) {
      var a = (
        /** @type {Derived} */
        g
      );
      (a.effects ?? (a.effects = [])).push(l);
    }
  }
  return s;
}
function Sr() {
  return g !== null && !K;
}
function Tr(t) {
  const e = ht(Ne, null, !1);
  return N(e, x), e.teardown = t, e;
}
function Pr(t) {
  return ht(Xe | Hn, t, !1);
}
function xr(t) {
  it.ensure();
  const e = ht(Pt | Bt, t, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? Ht(e, () => {
      Q(e), r(void 0);
    }) : (Q(e), r(void 0));
  });
}
function Rr(t) {
  return ht(ve | Bt, t, !0);
}
function Ar(t, e = 0) {
  return ht(Ne | e, t, !0);
}
function Ir(t, e = [], n = []) {
  dr(e, n, (r) => {
    ht(Ne, () => t(...r.map(W)), !0);
  });
}
function mn(t, e = 0) {
  var n = ht(Tt | e, t, !0);
  return n;
}
function nt(t, e = !0) {
  return ht(_t | Bt, t, !0, e);
}
function wn(t) {
  var e = t.teardown;
  if (e !== null) {
    const n = Yt, r = g;
    Ve(!0), D(null);
    try {
      e.call(null);
    } finally {
      Ve(n), D(r);
    }
  }
}
function En(t, e = !1) {
  var n = t.first;
  for (t.first = t.last = null; n !== null; ) {
    const i = n.ac;
    i !== null && gn(() => {
      i.abort(It);
    });
    var r = n.next;
    n.f & Pt ? n.parent = null : Q(n, e), n = r;
  }
}
function Nr(t) {
  for (var e = t.first; e !== null; ) {
    var n = e.next;
    e.f & _t || Q(e), e = n;
  }
}
function Q(t, e = !0) {
  var n = !1;
  (e || t.f & Vn) && t.nodes_start !== null && t.nodes_end !== null && (kr(
    t.nodes_start,
    /** @type {TemplateNode} */
    t.nodes_end
  ), n = !0), En(t, e && !n), fe(t, 0), N(t, xt);
  var r = t.transitions;
  if (r !== null)
    for (const s of r)
      s.stop();
  wn(t);
  var i = t.parent;
  i !== null && i.first !== null && yn(t), t.next = t.prev = t.teardown = t.ctx = t.deps = t.fn = t.nodes_start = t.nodes_end = t.ac = null;
}
function kr(t, e) {
  for (; t !== null; ) {
    var n = t === e ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ pe(t)
    );
    t.remove(), t = n;
  }
}
function yn(t) {
  var e = t.parent, n = t.prev, r = t.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), e !== null && (e.first === t && (e.first = r), e.last === t && (e.last = n));
}
function Ht(t, e) {
  var n = [];
  bn(t, n, !0), Or(n, () => {
    Q(t), e && e();
  });
}
function Or(t, e) {
  var n = t.length;
  if (n > 0) {
    var r = () => --n || e();
    for (var i of t)
      i.out(r);
  } else
    e();
}
function bn(t, e, n) {
  if (!(t.f & ct)) {
    if (t.f ^= ct, t.transitions !== null)
      for (const l of t.transitions)
        (l.is_global || n) && e.push(l);
    for (var r = t.first; r !== null; ) {
      var i = r.next, s = (r.f & _e) !== 0 || (r.f & _t) !== 0;
      bn(r, e, s ? n : !1), r = i;
    }
  }
}
function Cr(t) {
  Sn(t, !0);
}
function Sn(t, e) {
  if (t.f & ct) {
    t.f ^= ct, t.f & x || (N(t, U), St(t));
    for (var n = t.first; n !== null; ) {
      var r = n.next, i = (n.f & _e) !== 0 || (n.f & _t) !== 0;
      Sn(n, i ? e : !1), n = r;
    }
    if (t.transitions !== null)
      for (const s of t.transitions)
        (s.is_global || e) && s.in();
  }
}
let Ot = !1;
function Ye(t) {
  Ot = t;
}
let Yt = !1;
function Ve(t) {
  Yt = t;
}
let g = null, K = !1;
function D(t) {
  g = t;
}
let m = null;
function X(t) {
  m = t;
}
let I = null;
function Mr(t) {
  g !== null && (I === null ? I = [t] : I.push(t));
}
let A = null, F = 0, q = null;
function Dr(t) {
  q = t;
}
let Tn = 1, Gt = 0, bt = Gt;
function He(t) {
  bt = t;
}
let at = !1;
function Pn() {
  return ++Tn;
}
function ge(t) {
  var h;
  var e = t.f;
  if (e & U)
    return !0;
  if (e & vt) {
    var n = t.deps, r = (e & Z) !== 0;
    if (n !== null) {
      var i, s, l = (e & se) !== 0, a = r && m !== null && !at, u = n.length;
      if ((l || a) && (m === null || !(m.f & xt))) {
        var o = (
          /** @type {Derived} */
          t
        ), c = o.parent;
        for (i = 0; i < u; i++)
          s = n[i], (l || !((h = s == null ? void 0 : s.reactions) != null && h.includes(o))) && (s.reactions ?? (s.reactions = [])).push(o);
        l && (o.f ^= se), a && c !== null && !(c.f & Z) && (o.f ^= Z);
      }
      for (i = 0; i < u; i++)
        if (s = n[i], ge(
          /** @type {Derived} */
          s
        ) && cn(
          /** @type {Derived} */
          s
        ), s.wv > t.wv)
          return !0;
    }
    (!r || m !== null && !at) && N(t, x);
  }
  return !1;
}
function xn(t, e, n = !0) {
  var r = t.reactions;
  if (r !== null && !(I != null && I.includes(t)))
    for (var i = 0; i < r.length; i++) {
      var s = r[i];
      s.f & O ? xn(
        /** @type {Derived} */
        s,
        e,
        !1
      ) : e === s && (n ? N(s, U) : s.f & x && N(s, vt), St(
        /** @type {Effect} */
        s
      ));
    }
}
function Rn(t) {
  var E;
  var e = A, n = F, r = q, i = g, s = at, l = I, a = j, u = K, o = bt, c = t.f;
  A = /** @type {null | Value[]} */
  null, F = 0, q = null, at = (c & Z) !== 0 && (K || !Ot || g === null), g = c & (_t | Pt) ? null : t, I = null, jt(t.ctx), K = !1, bt = ++Gt, t.ac !== null && (gn(() => {
    t.ac.abort(It);
  }), t.ac = null);
  try {
    t.f |= ye;
    var h = (
      /** @type {Function} */
      t.fn
    ), d = h(), _ = t.deps;
    if (A !== null) {
      var v;
      if (fe(t, F), _ !== null && F > 0)
        for (_.length = F + A.length, v = 0; v < A.length; v++)
          _[F + v] = A[v];
      else
        t.deps = _ = A;
      if (!at || // Deriveds that already have reactions can cleanup, so we still add them as reactions
      c & O && /** @type {import('#client').Derived} */
      t.reactions !== null)
        for (v = F; v < _.length; v++)
          ((E = _[v]).reactions ?? (E.reactions = [])).push(t);
    } else _ !== null && F < _.length && (fe(t, F), _.length = F);
    if ($t() && q !== null && !K && _ !== null && !(t.f & (O | vt | U)))
      for (v = 0; v < /** @type {Source[]} */
      q.length; v++)
        xn(
          q[v],
          /** @type {Effect} */
          t
        );
    return i !== null && i !== t && (Gt++, q !== null && (r === null ? r = q : r.push(.../** @type {Source[]} */
    q))), t.f & yt && (t.f ^= yt), d;
  } catch (y) {
    return sn(y);
  } finally {
    t.f ^= ye, A = e, F = n, q = r, g = i, at = s, I = l, jt(a), K = u, bt = o;
  }
}
function Lr(t, e) {
  let n = e.reactions;
  if (n !== null) {
    var r = Fn.call(n, t);
    if (r !== -1) {
      var i = n.length - 1;
      i === 0 ? n = e.reactions = null : (n[r] = n[i], n.pop());
    }
  }
  n === null && e.f & O && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (A === null || !A.includes(e)) && (N(e, vt), e.f & (Z | se) || (e.f ^= se), on(
    /** @type {Derived} **/
    e
  ), fe(
    /** @type {Derived} **/
    e,
    0
  ));
}
function fe(t, e) {
  var n = t.deps;
  if (n !== null)
    for (var r = e; r < n.length; r++)
      Lr(t, n[r]);
}
function Kt(t) {
  var e = t.f;
  if (!(e & xt)) {
    N(t, x);
    var n = m, r = Ot;
    m = t, Ot = !0;
    try {
      e & Tt ? Nr(t) : En(t), wn(t);
      var i = Rn(t);
      t.teardown = typeof i == "function" ? i : null, t.wv = Tn;
      var s;
      $e && nr && t.f & U && t.deps;
    } finally {
      Ot = r, m = n;
    }
  }
}
function W(t) {
  var e = t.f, n = (e & O) !== 0;
  if (g !== null && !K) {
    var r = m !== null && (m.f & xt) !== 0;
    if (!r && !(I != null && I.includes(t))) {
      var i = g.deps;
      if (g.f & ye)
        t.rv < Gt && (t.rv = Gt, A === null && i !== null && i[F] === t ? F++ : A === null ? A = [t] : (!at || !A.includes(t)) && A.push(t));
      else {
        (g.deps ?? (g.deps = [])).push(t);
        var s = t.reactions;
        s === null ? t.reactions = [g] : s.includes(g) || s.push(g);
      }
    }
  } else if (n && /** @type {Derived} */
  t.deps === null && /** @type {Derived} */
  t.effects === null) {
    var l = (
      /** @type {Derived} */
      t
    ), a = l.parent;
    a !== null && !(a.f & Z) && (l.f ^= Z);
  }
  if (Yt) {
    if (ot.has(t))
      return ot.get(t);
    if (n) {
      l = /** @type {Derived} */
      t;
      var u = l.v;
      return (!(l.f & x) && l.reactions !== null || An(l)) && (u = Me(l)), ot.set(l, u), u;
    }
  } else if (n) {
    if (l = /** @type {Derived} */
    t, T != null && T.has(l))
      return T.get(l);
    ge(l) && cn(l);
  }
  if (T != null && T.has(t))
    return T.get(t);
  if (t.f & yt)
    throw t.v;
  return t.v;
}
function An(t) {
  if (t.v === b) return !0;
  if (t.deps === null) return !1;
  for (const e of t.deps)
    if (ot.has(e) || e.f & O && An(
      /** @type {Derived} */
      e
    ))
      return !0;
  return !1;
}
function In(t) {
  var e = K;
  try {
    return K = !0, t();
  } finally {
    K = e;
  }
}
const Fr = -7169;
function N(t, e) {
  t.f = t.f & Fr | e;
}
const Ur = /* @__PURE__ */ new Set(), Ge = /* @__PURE__ */ new Set();
let Ke = null;
function Xt(t) {
  var H;
  var e = this, n = (
    /** @type {Node} */
    e.ownerDocument
  ), r = t.type, i = ((H = t.composedPath) == null ? void 0 : H.call(t)) || [], s = (
    /** @type {null | Element} */
    i[0] || t.target
  );
  Ke = t;
  var l = 0, a = Ke === t && t.__root;
  if (a) {
    var u = i.indexOf(a);
    if (u !== -1 && (e === document || e === /** @type {any} */
    window)) {
      t.__root = e;
      return;
    }
    var o = i.indexOf(e);
    if (o === -1)
      return;
    u <= o && (l = u);
  }
  if (s = /** @type {Element} */
  i[l] || t.target, s !== e) {
    Ee(t, "currentTarget", {
      configurable: !0,
      get() {
        return s || n;
      }
    });
    var c = g, h = m;
    D(null), X(null);
    try {
      for (var d, _ = []; s !== null; ) {
        var v = s.assignedSlot || s.parentNode || /** @type {any} */
        s.host || null;
        try {
          var E = s["__" + r];
          if (E != null && (!/** @type {any} */
          s.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          t.target === s))
            if (Je(E)) {
              var [y, ...C] = E;
              y.apply(s, [t, ...C]);
            } else
              E.call(s, t);
        } catch (L) {
          d ? _.push(L) : d = L;
        }
        if (t.cancelBubble || v === e || v === null)
          break;
        s = v;
      }
      if (d) {
        for (let L of _)
          queueMicrotask(() => {
            throw L;
          });
        throw d;
      }
    } finally {
      t.__root = e, delete t.currentTarget, D(c), X(h);
    }
  }
}
function jr(t) {
  var e = document.createElement("template");
  return e.innerHTML = t.replaceAll("<!>", "<!---->"), e.content;
}
function We(t, e) {
  var n = (
    /** @type {Effect} */
    m
  );
  n.nodes_start === null && (n.nodes_start = t, n.nodes_end = e);
}
// @__NO_SIDE_EFFECTS__
function Nn(t, e) {
  var n = (e & 1) !== 0, r = (e & 2) !== 0, i, s = !t.startsWith("<!>");
  return () => {
    i === void 0 && (i = jr(s ? t : "<!>" + t), n || (i = /** @type {Node} */
    /* @__PURE__ */ Ae(i)));
    var l = (
      /** @type {TemplateNode} */
      r || vn ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (n) {
      var a = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Ae(l)
      ), u = (
        /** @type {TemplateNode} */
        l.lastChild
      );
      We(a, u);
    } else
      We(l, l);
    return l;
  };
}
function kn(t, e) {
  t !== null && t.before(
    /** @type {Node} */
    e
  );
}
const qr = ["touchstart", "touchmove"];
function Br(t) {
  return qr.includes(t);
}
function Yr(t, e) {
  return Vr(t, e);
}
const At = /* @__PURE__ */ new Map();
function Vr(t, { target: e, anchor: n, props: r = {}, events: i, context: s, intro: l = !0 }) {
  wr();
  var a = /* @__PURE__ */ new Set(), u = (h) => {
    for (var d = 0; d < h.length; d++) {
      var _ = h[d];
      if (!a.has(_)) {
        a.add(_);
        var v = Br(_);
        e.addEventListener(_, Xt, { passive: v });
        var E = At.get(_);
        E === void 0 ? (document.addEventListener(_, Xt, { passive: v }), At.set(_, 1)) : At.set(_, E + 1);
      }
    }
  };
  u(Un(Ur)), Ge.add(u);
  var o = void 0, c = xr(() => {
    var h = n ?? e.appendChild(pn());
    return or(
      /** @type {TemplateNode} */
      h,
      {
        pending: () => {
        }
      },
      (d) => {
        if (s) {
          nn({});
          var _ = (
            /** @type {ComponentContext} */
            j
          );
          _.c = s;
        }
        i && (r.$$events = i), o = t(d, r) || {}, s && rn();
      }
    ), () => {
      var v;
      for (var d of a) {
        e.removeEventListener(d, Xt);
        var _ = (
          /** @type {number} */
          At.get(d)
        );
        --_ === 0 ? (document.removeEventListener(d, Xt), At.delete(d)) : At.set(d, _);
      }
      Ge.delete(u), h !== n && ((v = h.parentNode) == null || v.removeChild(h));
    };
  });
  return Hr.set(o, c), o;
}
let Hr = /* @__PURE__ */ new WeakMap();
function Gr(t, e, n = !1) {
  var r = t, i = null, s = null, l = b, a = n ? _e : 0, u = !1;
  const o = (_, v = !0) => {
    u = !0, d(v, _);
  };
  var c = null;
  function h() {
    c !== null && (c.lastChild.remove(), r.before(c), c = null);
    var _ = l ? i : s, v = l ? s : i;
    _ && Cr(_), v && Ht(v, () => {
      l ? s = null : i = null;
    });
  }
  const d = (_, v) => {
    if (l !== (l = _)) {
      var E = yr(), y = r;
      if (E && (c = document.createDocumentFragment(), c.append(y = pn())), l ? i ?? (i = v && nt(() => v(y))) : s ?? (s = v && nt(() => v(y))), E) {
        var C = (
          /** @type {Batch} */
          S
        ), H = l ? i : s, L = l ? s : i;
        H && C.skipped_effects.delete(H), L && C.skipped_effects.add(L), C.add_callback(h);
      } else
        h();
    }
  };
  mn(() => {
    u = !1, e(o), u || d(null, null);
  }, a);
}
const Kr = Symbol("is custom element"), Wr = Symbol("is html");
function Ze(t, e) {
  var n = Zr(t);
  n.value === (n.value = // treat null and undefined the same for the initial value
  e ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  t.value === e && (e !== 0 || t.nodeName !== "PROGRESS") || (t.value = e ?? "");
}
function Zr(t) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    t.__attributes ?? (t.__attributes = {
      [Kr]: t.nodeName.includes("-"),
      [Wr]: t.namespaceURI === Ln
    })
  );
}
let te = !1;
function zr(t) {
  var e = te;
  try {
    return te = !1, [t(), te];
  } finally {
    te = e;
  }
}
function we(t, e, n, r) {
  var L;
  var i = !he || (n & 2) !== 0, s = (n & 8) !== 0, l = (n & 16) !== 0, a = (
    /** @type {V} */
    r
  ), u = !0, o = () => (u && (u = !1, a = l ? In(
    /** @type {() => V} */
    r
  ) : (
    /** @type {V} */
    r
  )), a), c;
  if (s) {
    var h = ee in t || Gn in t;
    c = ((L = kt(t, e)) == null ? void 0 : L.set) ?? (h && e in t ? (R) => t[e] = R : void 0);
  }
  var d, _ = !1;
  s ? [d, _] = zr(() => (
    /** @type {V} */
    t[e]
  )) : d = /** @type {V} */
  t[e], d === void 0 && r !== void 0 && (d = o(), c && (i && Zn(), c(d)));
  var v;
  if (i ? v = () => {
    var R = (
      /** @type {V} */
      t[e]
    );
    return R === void 0 ? o() : (u = !0, R);
  } : v = () => {
    var R = (
      /** @type {V} */
      t[e]
    );
    return R !== void 0 && (a = /** @type {V} */
    void 0), R === void 0 ? a : R;
  }, i && !(n & 4))
    return v;
  if (c) {
    var E = t.$$legacy;
    return (
      /** @type {() => V} */
      function(R, Jt) {
        return arguments.length > 0 ? ((!i || !Jt || E || _) && c(Jt ? v() : R), R) : v();
      }
    );
  }
  var y = !1, C = (n & 1 ? Ce : an)(() => (y = !1, v()));
  s && W(C);
  var H = (
    /** @type {Effect} */
    m
  );
  return (
    /** @type {() => V} */
    function(R, Jt) {
      if (arguments.length > 0) {
        const De = Jt ? W(C) : i && s ? dt(R) : R;
        return rt(C, De), y = !0, a !== void 0 && (a = De), R;
      }
      return Yt && y || H.f & xt ? C.v : W(C);
    }
  );
}
const $r = "5";
var ze;
typeof window < "u" && ((ze = window.__svelte ?? (window.__svelte = {})).v ?? (ze.v = /* @__PURE__ */ new Set())).add($r);
rr();
var Jr = /* @__PURE__ */ Nn('<div class="placeholder svelte-t4sb8k">Under construction</div>');
function Qr(t) {
  var e = Jr();
  kn(t, e);
}
const On = "type-distributor", Cn = "0.0.1";
var Xr = /* @__PURE__ */ Nn('<!> <input type="hidden" name="package-name"/> <input type="hidden" name="package-version"/>', 1);
function ti(t, e) {
  nn(e, !0);
  let n = we(e, "dev", 3, !1);
  we(e, "editCount", 3, 0), we(e, "plugins", 19, () => []);
  var r = Xr(), i = Er(r);
  {
    var s = (u) => {
      Qr(u);
    };
    Gr(i, (u) => {
      (e.doc || n()) && u(s);
    });
  }
  var l = Be(i, 2), a = Be(l, 2);
  Ir(() => {
    Ze(l, On), Ze(a, Cn);
  }), kn(t, r), rn();
}
var Ut;
class si extends HTMLElement {
  constructor() {
    super();
    w(this, Ut);
    p(this, Ut, /* @__PURE__ */ tt(dt({
      doc: this._doc,
      editCount: -1,
      host: this,
      plugins: [],
      docId: null,
      pluginId: null,
      docName: null,
      nsdoc: null,
      docs: {},
      locale: navigator.language ?? "en-US",
      oscdApi: null
    })));
  }
  get _props() {
    return W(f(this, Ut));
  }
  set _props(n) {
    rt(f(this, Ut), n, !0);
  }
  connectedCallback() {
    if (this.shadowRoot) return;
    this.attachShadow({ mode: "open" }), Yr(ti, { target: this.shadowRoot, props: this._props });
    const n = ei();
    this.shadowRoot.appendChild(n);
  }
  set doc(n) {
    this._doc = n, this._props.doc = n;
  }
  get doc() {
    return this._doc;
  }
  set editCount(n) {
    this._props.editCount = n;
  }
  set docId(n) {
    this._props.docId = n;
  }
  set pluginId(n) {
    this._props.pluginId = n;
  }
  set docName(n) {
    this._props.docName = n;
  }
  set nsdoc(n) {
    this._props.nsdoc = n;
  }
  set docs(n) {
    this._props.docs = n;
  }
  set locale(n) {
    this._props.locale = n;
  }
  set oscdApi(n) {
    this._props.oscdApi = n;
  }
}
Ut = new WeakMap();
function ei() {
  const t = `${On}-v${Cn}-style`, e = ni(), n = document.createElement("link");
  return n.rel = "stylesheet", n.type = "text/css", n.href = e, n.id = t, n;
}
function ni() {
  const t = new URL(import.meta.url), e = t.origin, n = t.pathname.split("/").slice(0, -1).filter(Boolean).join("/");
  return [e, n, "style.css"].filter(Boolean).join("/");
}
export {
  si as default
};
