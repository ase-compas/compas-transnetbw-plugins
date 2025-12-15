var Wl = Object.defineProperty;
var Ga = (e) => {
  throw TypeError(e);
};
var Zl = (e, t, r) => t in e ? Wl(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var Dr = (e, t, r) => Zl(e, typeof t != "symbol" ? t + "" : t, r), Ai = (e, t, r) => t.has(e) || Ga("Cannot " + r);
var I = (e, t, r) => (Ai(e, t, "read from private field"), r ? r.call(e) : t.get(e)), J = (e, t, r) => t.has(e) ? Ga("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), F = (e, t, r, n) => (Ai(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r), Ge = (e, t, r) => (Ai(e, t, "access private method"), r);
const He = Symbol(), Yl = "http://www.w3.org/1999/xhtml", Ql = "http://www.w3.org/2000/svg", Jl = "@attach", No = !1;
var ci = Array.isArray, Kl = Array.prototype.indexOf, fa = Array.from, $n = Object.defineProperty, Qt = Object.getOwnPropertyDescriptor, Uo = Object.getOwnPropertyDescriptors, $l = Object.prototype, eu = Array.prototype, da = Object.getPrototypeOf, ja = Object.isExtensible;
function fn(e) {
  return typeof e == "function";
}
const fe = () => {
};
function ko(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function Fo() {
  var e, t, r = new Promise((n, i) => {
    e = n, t = i;
  });
  return { promise: r, resolve: e, reject: t };
}
const Ke = 2, ha = 4, va = 8, wr = 16, jt = 32, Ar = 64, pa = 128, ht = 256, ei = 512, Ve = 1024, st = 2048, tr = 4096, Et = 8192, Sr = 16384, ma = 32768, xr = 65536, Va = 1 << 17, tu = 1 << 18, on = 1 << 19, ru = 1 << 20, Fi = 1 << 21, fi = 1 << 22, mr = 1 << 23, Lt = Symbol("$state"), Go = Symbol("legacy props"), nu = Symbol(""), Ur = new class extends Error {
  constructor() {
    super(...arguments);
    Dr(this, "name", "StaleReactionError");
    Dr(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
function ga(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function iu() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function au(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function ou() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function su(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function lu() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function uu(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function cu() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function fu() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function du() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function hu() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
function vu() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function pu() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let mu = !1;
function jo(e) {
  return e === this.v;
}
function ba(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Vo(e) {
  return !ba(e, this.v);
}
let sn = !1, gu = !1;
function bu() {
  sn = !0;
}
let ce = null;
function Yr(e) {
  ce = e;
}
function le(e) {
  return (
    /** @type {T} */
    qo().get(e)
  );
}
function ee(e, t) {
  return qo().set(e, t), t;
}
function Ue(e, t = !1, r) {
  ce = {
    p: ce,
    c: null,
    e: null,
    s: e,
    x: null,
    l: sn && !t ? { s: null, u: null, $: [] } : null
  };
}
function ke(e) {
  var t = (
    /** @type {ComponentContext} */
    ce
  ), r = t.e;
  if (r !== null) {
    t.e = null;
    for (var n of r)
      os(n);
  }
  return e !== void 0 && (t.x = e), ce = t.p, e ?? /** @type {T} */
  {};
}
function On() {
  return !sn || ce !== null && ce.l === null;
}
function qo(e) {
  return ce === null && ga(), ce.c ?? (ce.c = new Map(_u(ce) || void 0));
}
function _u(e) {
  let t = e.p;
  for (; t !== null; ) {
    const r = t.c;
    if (r !== null)
      return r;
    t = t.p;
  }
  return null;
}
let ur = [];
function zo() {
  var e = ur;
  ur = [], ko(e);
}
function er(e) {
  if (ur.length === 0 && !_n) {
    var t = ur;
    queueMicrotask(() => {
      t === ur && zo();
    });
  }
  ur.push(e);
}
function yu() {
  for (; ur.length > 0; )
    zo();
}
const Eu = /* @__PURE__ */ new WeakMap();
function Xo(e) {
  var t = q;
  if (t === null)
    return V.f |= mr, e;
  if (t.f & ma)
    Qr(e, t);
  else {
    if (!(t.f & pa))
      throw !t.parent && e instanceof Error && Wo(e), e;
    t.b.error(e);
  }
}
function Qr(e, t) {
  for (; t !== null; ) {
    if (t.f & pa)
      try {
        t.b.error(e);
        return;
      } catch (r) {
        e = r;
      }
    t = t.parent;
  }
  throw e instanceof Error && Wo(e), e;
}
function Wo(e) {
  const t = Eu.get(e);
  t && ($n(e, "message", {
    value: t.message
  }), $n(e, "stack", {
    value: t.stack
  }));
}
const Un = /* @__PURE__ */ new Set();
let ae = null, Wn = null, De = null, Gi = /* @__PURE__ */ new Set(), Ot = [], di = null, ji = !1, _n = !1;
var Vr, qr, fr, In, zr, Xr, dr, Wr, Rn, Tn, pt, Vi, Zn, qi;
const si = class si {
  constructor() {
    J(this, pt);
    /**
     * The current values of any sources that are updated in this batch
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Source, any>}
     */
    Dr(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any sources that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Source, any>}
     */
    J(this, Vr, /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<() => void>}
     */
    J(this, qr, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    J(this, fr, 0);
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    J(this, In, null);
    /**
     * Async effects inside a newly-created `<svelte:boundary>`
     * — these do not prevent the batch from committing
     * @type {Effect[]}
     */
    J(this, zr, []);
    /**
     * Template effects and `$effect.pre` effects, which run when
     * a batch is committed
     * @type {Effect[]}
     */
    J(this, Xr, []);
    /**
     * The same as `#render_effects`, but for `$effect` (which runs after)
     * @type {Effect[]}
     */
    J(this, dr, []);
    /**
     * Block effects, which may need to re-run on subsequent flushes
     * in order to update internal sources (e.g. each block items)
     * @type {Effect[]}
     */
    J(this, Wr, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Effect[]}
     */
    J(this, Rn, []);
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Effect[]}
     */
    J(this, Tn, []);
    /**
     * A set of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`
     * @type {Set<Effect>}
     */
    Dr(this, "skipped_effects", /* @__PURE__ */ new Set());
  }
  /**
   *
   * @param {Effect[]} root_effects
   */
  process(t) {
    var a;
    Ot = [], Wn = null, this.apply();
    for (const o of t)
      Ge(this, pt, Vi).call(this, o);
    if (I(this, fr) === 0) {
      var r = De;
      Ge(this, pt, qi).call(this);
      var n = I(this, Xr), i = I(this, dr);
      F(this, Xr, []), F(this, dr, []), F(this, Wr, []), Wn = this, ae = null, De = r, qa(n), qa(i), Wn = null, (a = I(this, In)) == null || a.resolve();
    } else
      Ge(this, pt, Zn).call(this, I(this, Xr)), Ge(this, pt, Zn).call(this, I(this, dr)), Ge(this, pt, Zn).call(this, I(this, Wr));
    De = null;
    for (const o of I(this, zr))
      An(o);
    F(this, zr, []);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Source} source
   * @param {any} value
   */
  capture(t, r) {
    I(this, Vr).has(t) || I(this, Vr).set(t, r), this.current.set(t, t.v), De == null || De.set(t, t.v);
  }
  activate() {
    ae = this;
  }
  deactivate() {
    ae = null, De = null;
  }
  flush() {
    if (Ot.length > 0) {
      if (this.activate(), Zo(), ae !== null && ae !== this)
        return;
    } else I(this, fr) === 0 && Ge(this, pt, qi).call(this);
    this.deactivate();
    for (const t of Gi)
      if (Gi.delete(t), t(), ae !== null)
        break;
  }
  increment() {
    F(this, fr, I(this, fr) + 1);
  }
  decrement() {
    F(this, fr, I(this, fr) - 1);
    for (const t of I(this, Rn))
      Ye(t, st), yr(t);
    for (const t of I(this, Tn))
      Ye(t, tr), yr(t);
    this.flush();
  }
  /** @param {() => void} fn */
  add_callback(t) {
    I(this, qr).add(t);
  }
  settled() {
    return (I(this, In) ?? F(this, In, Fo())).promise;
  }
  static ensure() {
    if (ae === null) {
      const t = ae = new si();
      Un.add(ae), _n || si.enqueue(() => {
        ae === t && t.flush();
      });
    }
    return ae;
  }
  /** @param {() => void} task */
  static enqueue(t) {
    er(t);
  }
  apply() {
  }
};
Vr = new WeakMap(), qr = new WeakMap(), fr = new WeakMap(), In = new WeakMap(), zr = new WeakMap(), Xr = new WeakMap(), dr = new WeakMap(), Wr = new WeakMap(), Rn = new WeakMap(), Tn = new WeakMap(), pt = new WeakSet(), /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 */
Vi = function(t) {
  var u;
  t.f ^= Ve;
  for (var r = t.first; r !== null; ) {
    var n = r.f, i = (n & (jt | Ar)) !== 0, a = i && (n & Ve) !== 0, o = a || (n & Et) !== 0 || this.skipped_effects.has(r);
    if (!o && r.fn !== null) {
      i ? r.f ^= Ve : n & ha ? I(this, dr).push(r) : n & Ve || (n & fi && ((u = r.b) != null && u.is_pending()) ? I(this, zr).push(r) : gi(r) && (r.f & wr && I(this, Wr).push(r), An(r)));
      var l = r.first;
      if (l !== null) {
        r = l;
        continue;
      }
    }
    var s = r.parent;
    for (r = r.next; r === null && s !== null; )
      r = s.next, s = s.parent;
  }
}, /**
 * @param {Effect[]} effects
 */
Zn = function(t) {
  for (const r of t)
    (r.f & st ? I(this, Rn) : I(this, Tn)).push(r), Ye(r, Ve);
  t.length = 0;
}, /**
 * Append and remove branches to/from the DOM
 */
qi = function() {
  var t;
  for (const r of I(this, qr))
    r();
  if (I(this, qr).clear(), Un.size > 1) {
    I(this, Vr).clear();
    let r = !0;
    for (const n of Un) {
      if (n === this) {
        r = !1;
        continue;
      }
      const i = [];
      for (const [o, l] of this.current) {
        if (n.current.has(o))
          if (r && l !== n.current.get(o))
            n.current.set(o, l);
          else
            continue;
        i.push(o);
      }
      if (i.length === 0)
        continue;
      const a = [...n.current.keys()].filter((o) => !this.current.has(o));
      if (a.length > 0) {
        for (const o of i)
          Yo(o, a);
        if (Ot.length > 0) {
          ae = n, n.apply();
          for (const o of Ot)
            Ge(t = n, pt, Vi).call(t, o);
          Ot = [], n.deactivate();
        }
      }
    }
    ae = null;
  }
  Un.delete(this);
};
let Ft = si;
function wu(e) {
  var t = _n;
  _n = !0;
  try {
    for (var r; ; ) {
      if (yu(), Ot.length === 0 && (ae == null || ae.flush(), Ot.length === 0))
        return di = null, /** @type {T} */
        r;
      Zo();
    }
  } finally {
    _n = t;
  }
}
function Zo() {
  var e = Fr;
  ji = !0;
  try {
    var t = 0;
    for (Za(!0); Ot.length > 0; ) {
      var r = Ft.ensure();
      if (t++ > 1e3) {
        var n, i;
        Au();
      }
      r.process(Ot), Jt.clear();
    }
  } finally {
    ji = !1, Za(e), di = null;
  }
}
function Au() {
  try {
    lu();
  } catch (e) {
    Qr(e, di);
  }
}
let Ut = null;
function qa(e) {
  var t = e.length;
  if (t !== 0) {
    for (var r = 0; r < t; ) {
      var n = e[r++];
      if (!(n.f & (Sr | Et)) && gi(n) && (Ut = [], An(n), n.deps === null && n.first === null && n.nodes_start === null && (n.teardown === null && n.ac === null ? us(n) : n.fn = null), (Ut == null ? void 0 : Ut.length) > 0)) {
        Jt.clear();
        for (const i of Ut)
          An(i);
        Ut = [];
      }
    }
    Ut = null;
  }
}
function Yo(e, t) {
  if (e.reactions !== null)
    for (const r of e.reactions) {
      const n = r.f;
      n & Ke ? Yo(
        /** @type {Derived} */
        r,
        t
      ) : n & (fi | wr) && Qo(r, t) && (Ye(r, st), yr(
        /** @type {Effect} */
        r
      ));
    }
}
function Qo(e, t) {
  if (e.deps !== null) {
    for (const r of e.deps)
      if (t.includes(r) || r.f & Ke && Qo(
        /** @type {Derived} */
        r,
        t
      ))
        return !0;
  }
  return !1;
}
function yr(e) {
  for (var t = di = e; t.parent !== null; ) {
    t = t.parent;
    var r = t.f;
    if (ji && t === q && r & wr)
      return;
    if (r & (Ar | jt)) {
      if (!(r & Ve)) return;
      t.f ^= Ve;
    }
  }
  Ot.push(t);
}
function Su(e) {
  let t = 0, r = Er(0), n;
  return () => {
    Gu() && (p(r), pi(() => (t === 0 && (n = ir(() => e(() => yn(r)))), t += 1, () => {
      er(() => {
        t -= 1, t === 0 && (n == null || n(), n = void 0, yn(r));
      });
    })));
  };
}
var xu = xr | on | pa;
function Cu(e, t, r) {
  new Iu(e, t, r);
}
var bt, ct, ca, It, hr, Rt, ft, $e, Tt, zt, vr, Xt, pr, Wt, li, ui, Je, Ru, Tu, Yn, Qn, zi;
class Iu {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   */
  constructor(t, r, n) {
    J(this, Je);
    /** @type {Boundary | null} */
    Dr(this, "parent");
    J(this, bt, !1);
    /** @type {TemplateNode} */
    J(this, ct);
    /** @type {TemplateNode | null} */
    J(this, ca, null);
    /** @type {BoundaryProps} */
    J(this, It);
    /** @type {((anchor: Node) => void)} */
    J(this, hr);
    /** @type {Effect} */
    J(this, Rt);
    /** @type {Effect | null} */
    J(this, ft, null);
    /** @type {Effect | null} */
    J(this, $e, null);
    /** @type {Effect | null} */
    J(this, Tt, null);
    /** @type {DocumentFragment | null} */
    J(this, zt, null);
    J(this, vr, 0);
    J(this, Xt, 0);
    J(this, pr, !1);
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    J(this, Wt, null);
    J(this, li, () => {
      I(this, Wt) && Jr(I(this, Wt), I(this, vr));
    });
    J(this, ui, Su(() => (F(this, Wt, Er(I(this, vr))), () => {
      F(this, Wt, null);
    })));
    F(this, ct, t), F(this, It, r), F(this, hr, n), this.parent = /** @type {Effect} */
    q.b, F(this, bt, !!I(this, It).pending), F(this, Rt, nr(() => {
      q.b = this;
      {
        try {
          F(this, ft, je(() => n(I(this, ct))));
        } catch (i) {
          this.error(i);
        }
        I(this, Xt) > 0 ? Ge(this, Je, Qn).call(this) : F(this, bt, !1);
      }
    }, xu));
  }
  /**
   * Returns `true` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_pending() {
    return I(this, bt) || !!this.parent && this.parent.is_pending();
  }
  has_pending_snippet() {
    return !!I(this, It).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   */
  update_pending_count(t) {
    Ge(this, Je, zi).call(this, t), F(this, vr, I(this, vr) + t), Gi.add(I(this, li));
  }
  get_effect_pending() {
    return I(this, ui).call(this), p(
      /** @type {Source<number>} */
      I(this, Wt)
    );
  }
  /** @param {unknown} error */
  error(t) {
    var r = I(this, It).onerror;
    let n = I(this, It).failed;
    if (I(this, pr) || !r && !n)
      throw t;
    I(this, ft) && (Be(I(this, ft)), F(this, ft, null)), I(this, $e) && (Be(I(this, $e)), F(this, $e, null)), I(this, Tt) && (Be(I(this, Tt)), F(this, Tt, null));
    var i = !1, a = !1;
    const o = () => {
      if (i) {
        pu();
        return;
      }
      i = !0, a && hu(), Ft.ensure(), F(this, vr, 0), I(this, Tt) !== null && Kt(I(this, Tt), () => {
        F(this, Tt, null);
      }), F(this, bt, this.has_pending_snippet()), F(this, ft, Ge(this, Je, Yn).call(this, () => (F(this, pr, !1), je(() => I(this, hr).call(this, I(this, ct)))))), I(this, Xt) > 0 ? Ge(this, Je, Qn).call(this) : F(this, bt, !1);
    };
    var l = V;
    try {
      tt(null), a = !0, r == null || r(t, o), a = !1;
    } catch (s) {
      Qr(s, I(this, Rt) && I(this, Rt).parent);
    } finally {
      tt(l);
    }
    n && er(() => {
      F(this, Tt, Ge(this, Je, Yn).call(this, () => {
        F(this, pr, !0);
        try {
          return je(() => {
            n(
              I(this, ct),
              () => t,
              () => o
            );
          });
        } catch (s) {
          return Qr(
            s,
            /** @type {Effect} */
            I(this, Rt).parent
          ), null;
        } finally {
          F(this, pr, !1);
        }
      }));
    });
  }
}
bt = new WeakMap(), ct = new WeakMap(), ca = new WeakMap(), It = new WeakMap(), hr = new WeakMap(), Rt = new WeakMap(), ft = new WeakMap(), $e = new WeakMap(), Tt = new WeakMap(), zt = new WeakMap(), vr = new WeakMap(), Xt = new WeakMap(), pr = new WeakMap(), Wt = new WeakMap(), li = new WeakMap(), ui = new WeakMap(), Je = new WeakSet(), Ru = function() {
  try {
    F(this, ft, je(() => I(this, hr).call(this, I(this, ct))));
  } catch (t) {
    this.error(t);
  }
  F(this, bt, !1);
}, Tu = function() {
  const t = I(this, It).pending;
  t && (F(this, $e, je(() => t(I(this, ct)))), Ft.enqueue(() => {
    F(this, ft, Ge(this, Je, Yn).call(this, () => (Ft.ensure(), je(() => I(this, hr).call(this, I(this, ct)))))), I(this, Xt) > 0 ? Ge(this, Je, Qn).call(this) : (Kt(
      /** @type {Effect} */
      I(this, $e),
      () => {
        F(this, $e, null);
      }
    ), F(this, bt, !1));
  }));
}, /**
 * @param {() => Effect | null} fn
 */
Yn = function(t) {
  var r = q, n = V, i = ce;
  Pt(I(this, Rt)), tt(I(this, Rt)), Yr(I(this, Rt).ctx);
  try {
    return t();
  } catch (a) {
    return Xo(a), null;
  } finally {
    Pt(r), tt(n), Yr(i);
  }
}, Qn = function() {
  const t = (
    /** @type {(anchor: Node) => void} */
    I(this, It).pending
  );
  I(this, ft) !== null && (F(this, zt, document.createDocumentFragment()), Ou(I(this, ft), I(this, zt))), I(this, $e) === null && F(this, $e, je(() => t(I(this, ct))));
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 */
zi = function(t) {
  var r;
  if (!this.has_pending_snippet()) {
    this.parent && Ge(r = this.parent, Je, zi).call(r, t);
    return;
  }
  F(this, Xt, I(this, Xt) + t), I(this, Xt) === 0 && (F(this, bt, !1), I(this, $e) && Kt(I(this, $e), () => {
    F(this, $e, null);
  }), I(this, zt) && (I(this, ct).before(I(this, zt)), F(this, zt, null)), er(() => {
    Ft.ensure().flush();
  }));
};
function Ou(e, t) {
  for (var r = e.nodes_start, n = e.nodes_end; r !== null; ) {
    var i = r === n ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Hn(r)
    );
    t.append(r), r = i;
  }
}
function Jo(e, t, r) {
  const n = On() ? hi : _a;
  if (t.length === 0) {
    r(e.map(n));
    return;
  }
  var i = ae, a = (
    /** @type {Effect} */
    q
  ), o = Hu();
  Promise.all(t.map((l) => /* @__PURE__ */ Lu(l))).then((l) => {
    o();
    try {
      r([...e.map(n), ...l]);
    } catch (s) {
      a.f & Sr || Qr(s, a);
    }
    i == null || i.deactivate(), Xi();
  }).catch((l) => {
    Qr(l, a);
  });
}
function Hu() {
  var e = q, t = V, r = ce, n = ae;
  return function() {
    Pt(e), tt(t), Yr(r), n == null || n.activate();
  };
}
function Xi() {
  Pt(null), tt(null), Yr(null);
}
// @__NO_SIDE_EFFECTS__
function hi(e) {
  var t = Ke | st, r = V !== null && V.f & Ke ? (
    /** @type {Derived} */
    V
  ) : null;
  return q === null || r !== null && r.f & ht ? t |= ht : q.f |= on, {
    ctx: ce,
    deps: null,
    effects: null,
    equals: jo,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      He
    ),
    wv: 0,
    parent: r ?? q,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function Lu(e, t) {
  let r = (
    /** @type {Effect | null} */
    q
  );
  r === null && iu();
  var n = (
    /** @type {Boundary} */
    r.b
  ), i = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), a = Er(
    /** @type {V} */
    He
  ), o = !V, l = /* @__PURE__ */ new Map();
  return Vu(() => {
    var v;
    var s = Fo();
    i = s.promise;
    try {
      Promise.resolve(e()).then(s.resolve, s.reject).then(Xi);
    } catch (h) {
      s.reject(h), Xi();
    }
    var u = (
      /** @type {Batch} */
      ae
    ), c = n.is_pending();
    o && (n.update_pending_count(1), c || (u.increment(), (v = l.get(u)) == null || v.reject(Ur), l.delete(u), l.set(u, s)));
    const f = (h, d = void 0) => {
      if (c || u.activate(), d)
        d !== Ur && (a.f |= mr, Jr(a, d));
      else {
        a.f & mr && (a.f ^= mr), Jr(a, h);
        for (const [m, E] of l) {
          if (l.delete(m), m === u) break;
          E.reject(Ur);
        }
      }
      o && (n.update_pending_count(-1), c || u.decrement());
    };
    s.promise.then(f, (h) => f(null, h || "unknown"));
  }), wa(() => {
    for (const s of l.values())
      s.reject(Ur);
  }), new Promise((s) => {
    function u(c) {
      function f() {
        c === i ? s(a) : u(i);
      }
      c.then(f, f);
    }
    u(i);
  });
}
// @__NO_SIDE_EFFECTS__
function ye(e) {
  const t = /* @__PURE__ */ hi(e);
  return ds(t), t;
}
// @__NO_SIDE_EFFECTS__
function _a(e) {
  const t = /* @__PURE__ */ hi(e);
  return t.equals = Vo, t;
}
function Ko(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var r = 0; r < t.length; r += 1)
      Be(
        /** @type {Effect} */
        t[r]
      );
  }
}
function Pu(e) {
  for (var t = e.parent; t !== null; ) {
    if (!(t.f & Ke))
      return (
        /** @type {Effect} */
        t
      );
    t = t.parent;
  }
  return null;
}
function ya(e) {
  var t, r = q;
  Pt(Pu(e));
  try {
    Ko(e), t = ms(e);
  } finally {
    Pt(r);
  }
  return t;
}
function $o(e) {
  var t = ya(e);
  if (e.equals(t) || (e.v = t, e.wv = vs()), !Cr)
    if (De !== null)
      De.set(e, e.v);
    else {
      var r = (Zt || e.f & ht) && e.deps !== null ? tr : Ve;
      Ye(e, r);
    }
}
const Jt = /* @__PURE__ */ new Map();
function Er(e, t) {
  var r = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: jo,
    rv: 0,
    wv: 0
  };
  return r;
}
// @__NO_SIDE_EFFECTS__
function we(e, t) {
  const r = Er(e);
  return ds(r), r;
}
// @__NO_SIDE_EFFECTS__
function es(e, t = !1, r = !0) {
  var i;
  const n = Er(e);
  return t || (n.equals = Vo), sn && r && ce !== null && ce.l !== null && ((i = ce.l).s ?? (i.s = [])).push(n), n;
}
function ue(e, t, r = !1) {
  V !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!yt || V.f & Va) && On() && V.f & (Ke | wr | fi | Va) && !(Ze != null && Ze.includes(e)) && du();
  let n = r ? te(t) : t;
  return Jr(e, n);
}
function Jr(e, t) {
  if (!e.equals(t)) {
    var r = e.v;
    Cr ? Jt.set(e, t) : Jt.set(e, r), e.v = t;
    var n = Ft.ensure();
    n.capture(e, r), e.f & Ke && (e.f & st && ya(
      /** @type {Derived} */
      e
    ), Ye(e, e.f & ht ? tr : Ve)), e.wv = vs(), ts(e, st), On() && q !== null && q.f & Ve && !(q.f & (jt | Ar)) && (ut === null ? Xu([e]) : ut.push(e));
  }
  return t;
}
function yn(e) {
  ue(e, e.v + 1);
}
function ts(e, t) {
  var r = e.reactions;
  if (r !== null)
    for (var n = On(), i = r.length, a = 0; a < i; a++) {
      var o = r[a], l = o.f;
      if (!(!n && o === q)) {
        var s = (l & st) === 0;
        s && Ye(o, t), l & Ke ? ts(
          /** @type {Derived} */
          o,
          tr
        ) : s && (l & wr && Ut !== null && Ut.push(
          /** @type {Effect} */
          o
        ), yr(
          /** @type {Effect} */
          o
        ));
      }
    }
}
function te(e) {
  if (typeof e != "object" || e === null || Lt in e)
    return e;
  const t = da(e);
  if (t !== $l && t !== eu)
    return e;
  var r = /* @__PURE__ */ new Map(), n = ci(e), i = /* @__PURE__ */ we(0), a = gr, o = (l) => {
    if (gr === a)
      return l();
    var s = V, u = gr;
    tt(null), Qa(a);
    var c = l();
    return tt(s), Qa(u), c;
  };
  return n && r.set("length", /* @__PURE__ */ we(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(l, s, u) {
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && cu();
        var c = r.get(s);
        return c === void 0 ? c = o(() => {
          var f = /* @__PURE__ */ we(u.value);
          return r.set(s, f), f;
        }) : ue(c, u.value, !0), !0;
      },
      deleteProperty(l, s) {
        var u = r.get(s);
        if (u === void 0) {
          if (s in l) {
            const c = o(() => /* @__PURE__ */ we(He));
            r.set(s, c), yn(i);
          }
        } else
          ue(u, He), yn(i);
        return !0;
      },
      get(l, s, u) {
        var h;
        if (s === Lt)
          return e;
        var c = r.get(s), f = s in l;
        if (c === void 0 && (!f || (h = Qt(l, s)) != null && h.writable) && (c = o(() => {
          var d = te(f ? l[s] : He), m = /* @__PURE__ */ we(d);
          return m;
        }), r.set(s, c)), c !== void 0) {
          var v = p(c);
          return v === He ? void 0 : v;
        }
        return Reflect.get(l, s, u);
      },
      getOwnPropertyDescriptor(l, s) {
        var u = Reflect.getOwnPropertyDescriptor(l, s);
        if (u && "value" in u) {
          var c = r.get(s);
          c && (u.value = p(c));
        } else if (u === void 0) {
          var f = r.get(s), v = f == null ? void 0 : f.v;
          if (f !== void 0 && v !== He)
            return {
              enumerable: !0,
              configurable: !0,
              value: v,
              writable: !0
            };
        }
        return u;
      },
      has(l, s) {
        var v;
        if (s === Lt)
          return !0;
        var u = r.get(s), c = u !== void 0 && u.v !== He || Reflect.has(l, s);
        if (u !== void 0 || q !== null && (!c || (v = Qt(l, s)) != null && v.writable)) {
          u === void 0 && (u = o(() => {
            var h = c ? te(l[s]) : He, d = /* @__PURE__ */ we(h);
            return d;
          }), r.set(s, u));
          var f = p(u);
          if (f === He)
            return !1;
        }
        return c;
      },
      set(l, s, u, c) {
        var x;
        var f = r.get(s), v = s in l;
        if (n && s === "length")
          for (var h = u; h < /** @type {Source<number>} */
          f.v; h += 1) {
            var d = r.get(h + "");
            d !== void 0 ? ue(d, He) : h in l && (d = o(() => /* @__PURE__ */ we(He)), r.set(h + "", d));
          }
        if (f === void 0)
          (!v || (x = Qt(l, s)) != null && x.writable) && (f = o(() => /* @__PURE__ */ we(void 0)), ue(f, te(u)), r.set(s, f));
        else {
          v = f.v !== He;
          var m = o(() => te(u));
          ue(f, m);
        }
        var E = Reflect.getOwnPropertyDescriptor(l, s);
        if (E != null && E.set && E.set.call(c, u), !v) {
          if (n && typeof s == "string") {
            var _ = (
              /** @type {Source<number>} */
              r.get("length")
            ), C = Number(s);
            Number.isInteger(C) && C >= _.v && ue(_, C + 1);
          }
          yn(i);
        }
        return !0;
      },
      ownKeys(l) {
        p(i);
        var s = Reflect.ownKeys(l).filter((f) => {
          var v = r.get(f);
          return v === void 0 || v.v !== He;
        });
        for (var [u, c] of r)
          c.v !== He && !(u in l) && s.push(u);
        return s;
      },
      setPrototypeOf() {
        fu();
      }
    }
  );
}
function za(e) {
  try {
    if (e !== null && typeof e == "object" && Lt in e)
      return e[Lt];
  } catch {
  }
  return e;
}
function Mu(e, t) {
  return Object.is(za(e), za(t));
}
var Xa, rs, ns, is;
function Du() {
  if (Xa === void 0) {
    Xa = window, rs = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, r = Text.prototype;
    ns = Qt(t, "firstChild").get, is = Qt(t, "nextSibling").get, ja(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), ja(r) && (r.__t = void 0);
  }
}
function rr(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function Kr(e) {
  return ns.call(e);
}
// @__NO_SIDE_EFFECTS__
function Hn(e) {
  return is.call(e);
}
function oe(e, t) {
  return /* @__PURE__ */ Kr(e);
}
function z(e, t = !1) {
  {
    var r = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ Kr(
        /** @type {Node} */
        e
      )
    );
    return r instanceof Comment && r.data === "" ? /* @__PURE__ */ Hn(r) : r;
  }
}
function Le(e, t = 1, r = !1) {
  let n = e;
  for (; t--; )
    n = /** @type {TemplateNode} */
    /* @__PURE__ */ Hn(n);
  return n;
}
function Bu(e) {
  e.textContent = "";
}
function Ea() {
  return !1;
}
function Nu(e, t) {
  if (t) {
    const r = document.body;
    e.autofocus = !0, er(() => {
      document.activeElement === r && e.focus();
    });
  }
}
let Wa = !1;
function Uu() {
  Wa || (Wa = !0, document.addEventListener(
    "reset",
    (e) => {
      Promise.resolve().then(() => {
        var t;
        if (!e.defaultPrevented)
          for (
            const r of
            /**@type {HTMLFormElement} */
            e.target.elements
          )
            (t = r.__on_r) == null || t.call(r);
      });
    },
    // In the capture phase to guarantee we get noticed of it (no possiblity of stopPropagation)
    { capture: !0 }
  ));
}
function vi(e) {
  var t = V, r = q;
  tt(null), Pt(null);
  try {
    return e();
  } finally {
    tt(t), Pt(r);
  }
}
function as(e, t, r, n = r) {
  e.addEventListener(t, () => vi(r));
  const i = e.__on_r;
  i ? e.__on_r = () => {
    i(), n(!0);
  } : e.__on_r = () => n(!0), Uu();
}
function ku(e) {
  q === null && V === null && su(), V !== null && V.f & ht && q === null && ou(), Cr && au();
}
function Fu(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function Vt(e, t, r, n = !0) {
  var i = q;
  i !== null && i.f & Et && (e |= Et);
  var a = {
    ctx: ce,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | st,
    first: null,
    fn: t,
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
  if (r)
    try {
      An(a), a.f |= ma;
    } catch (s) {
      throw Be(a), s;
    }
  else t !== null && yr(a);
  if (n) {
    var o = a;
    if (r && o.deps === null && o.teardown === null && o.nodes_start === null && o.first === o.last && // either `null`, or a singular child
    !(o.f & on) && (o = o.first), o !== null && (o.parent = i, i !== null && Fu(o, i), V !== null && V.f & Ke && !(e & Ar))) {
      var l = (
        /** @type {Derived} */
        V
      );
      (l.effects ?? (l.effects = [])).push(o);
    }
  }
  return a;
}
function Gu() {
  return V !== null && !yt;
}
function wa(e) {
  const t = Vt(va, null, !1);
  return Ye(t, Ve), t.teardown = e, t;
}
function qe(e) {
  ku();
  var t = (
    /** @type {Effect} */
    q.f
  ), r = !V && (t & jt) !== 0 && (t & ma) === 0;
  if (r) {
    var n = (
      /** @type {ComponentContext} */
      ce
    );
    (n.e ?? (n.e = [])).push(e);
  } else
    return os(e);
}
function os(e) {
  return Vt(ha | ru, e, !1);
}
function ju(e) {
  Ft.ensure();
  const t = Vt(Ar | on, e, !0);
  return (r = {}) => new Promise((n) => {
    r.outro ? Kt(t, () => {
      Be(t), n(void 0);
    }) : (Be(t), n(void 0));
  });
}
function Ln(e) {
  return Vt(ha, e, !1);
}
function Vu(e) {
  return Vt(fi | on, e, !0);
}
function pi(e, t = 0) {
  return Vt(va | t, e, !0);
}
function Ae(e, t = [], r = []) {
  Jo(t, r, (n) => {
    Vt(va, () => e(...n.map(p)), !0);
  });
}
function nr(e, t = 0) {
  var r = Vt(wr | t, e, !0);
  return r;
}
function je(e, t = !0) {
  return Vt(jt | on, e, !0, t);
}
function ss(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = Cr, n = V;
    Ya(!0), tt(null);
    try {
      t.call(null);
    } finally {
      Ya(r), tt(n);
    }
  }
}
function ls(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    const i = r.ac;
    i !== null && vi(() => {
      i.abort(Ur);
    });
    var n = r.next;
    r.f & Ar ? r.parent = null : Be(r, t), r = n;
  }
}
function qu(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    t.f & jt || Be(t), t = r;
  }
}
function Be(e, t = !0) {
  var r = !1;
  (t || e.f & tu) && e.nodes_start !== null && e.nodes_end !== null && (zu(
    e.nodes_start,
    /** @type {TemplateNode} */
    e.nodes_end
  ), r = !0), ls(e, t && !r), ti(e, 0), Ye(e, Sr);
  var n = e.transitions;
  if (n !== null)
    for (const a of n)
      a.stop();
  ss(e);
  var i = e.parent;
  i !== null && i.first !== null && us(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = e.ac = null;
}
function zu(e, t) {
  for (; e !== null; ) {
    var r = e === t ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Hn(e)
    );
    e.remove(), e = r;
  }
}
function us(e) {
  var t = e.parent, r = e.prev, n = e.next;
  r !== null && (r.next = n), n !== null && (n.prev = r), t !== null && (t.first === e && (t.first = n), t.last === e && (t.last = r));
}
function Kt(e, t) {
  var r = [];
  Aa(e, r, !0), cs(r, () => {
    Be(e), t && t();
  });
}
function cs(e, t) {
  var r = e.length;
  if (r > 0) {
    var n = () => --r || t();
    for (var i of e)
      i.out(n);
  } else
    t();
}
function Aa(e, t, r) {
  if (!(e.f & Et)) {
    if (e.f ^= Et, e.transitions !== null)
      for (const o of e.transitions)
        (o.is_global || r) && t.push(o);
    for (var n = e.first; n !== null; ) {
      var i = n.next, a = (n.f & xr) !== 0 || (n.f & jt) !== 0;
      Aa(n, t, a ? r : !1), n = i;
    }
  }
}
function mi(e) {
  fs(e, !0);
}
function fs(e, t) {
  if (e.f & Et) {
    e.f ^= Et, e.f & Ve || (Ye(e, st), yr(e));
    for (var r = e.first; r !== null; ) {
      var n = r.next, i = (r.f & xr) !== 0 || (r.f & jt) !== 0;
      fs(r, i ? t : !1), r = n;
    }
    if (e.transitions !== null)
      for (const a of e.transitions)
        (a.is_global || t) && a.in();
  }
}
let Fr = !1;
function Za(e) {
  Fr = e;
}
let Cr = !1;
function Ya(e) {
  Cr = e;
}
let V = null, yt = !1;
function tt(e) {
  V = e;
}
let q = null;
function Pt(e) {
  q = e;
}
let Ze = null;
function ds(e) {
  V !== null && (Ze === null ? Ze = [e] : Ze.push(e));
}
let We = null, nt = 0, ut = null;
function Xu(e) {
  ut = e;
}
let hs = 1, wn = 0, gr = wn;
function Qa(e) {
  gr = e;
}
let Zt = !1;
function vs() {
  return ++hs;
}
function gi(e) {
  var f;
  var t = e.f;
  if (t & st)
    return !0;
  if (t & tr) {
    var r = e.deps, n = (t & ht) !== 0;
    if (r !== null) {
      var i, a, o = (t & ei) !== 0, l = n && q !== null && !Zt, s = r.length;
      if ((o || l) && (q === null || !(q.f & Sr))) {
        var u = (
          /** @type {Derived} */
          e
        ), c = u.parent;
        for (i = 0; i < s; i++)
          a = r[i], (o || !((f = a == null ? void 0 : a.reactions) != null && f.includes(u))) && (a.reactions ?? (a.reactions = [])).push(u);
        o && (u.f ^= ei), l && c !== null && !(c.f & ht) && (u.f ^= ht);
      }
      for (i = 0; i < s; i++)
        if (a = r[i], gi(
          /** @type {Derived} */
          a
        ) && $o(
          /** @type {Derived} */
          a
        ), a.wv > e.wv)
          return !0;
    }
    (!n || q !== null && !Zt) && Ye(e, Ve);
  }
  return !1;
}
function ps(e, t, r = !0) {
  var n = e.reactions;
  if (n !== null && !(Ze != null && Ze.includes(e)))
    for (var i = 0; i < n.length; i++) {
      var a = n[i];
      a.f & Ke ? ps(
        /** @type {Derived} */
        a,
        t,
        !1
      ) : t === a && (r ? Ye(a, st) : a.f & Ve && Ye(a, tr), yr(
        /** @type {Effect} */
        a
      ));
    }
}
function ms(e) {
  var m;
  var t = We, r = nt, n = ut, i = V, a = Zt, o = Ze, l = ce, s = yt, u = gr, c = e.f;
  We = /** @type {null | Value[]} */
  null, nt = 0, ut = null, Zt = (c & ht) !== 0 && (yt || !Fr || V === null), V = c & (jt | Ar) ? null : e, Ze = null, Yr(e.ctx), yt = !1, gr = ++wn, e.ac !== null && (vi(() => {
    e.ac.abort(Ur);
  }), e.ac = null);
  try {
    e.f |= Fi;
    var f = (
      /** @type {Function} */
      e.fn
    ), v = f(), h = e.deps;
    if (We !== null) {
      var d;
      if (ti(e, nt), h !== null && nt > 0)
        for (h.length = nt + We.length, d = 0; d < We.length; d++)
          h[nt + d] = We[d];
      else
        e.deps = h = We;
      if (!Zt || // Deriveds that already have reactions can cleanup, so we still add them as reactions
      c & Ke && /** @type {import('#client').Derived} */
      e.reactions !== null)
        for (d = nt; d < h.length; d++)
          ((m = h[d]).reactions ?? (m.reactions = [])).push(e);
    } else h !== null && nt < h.length && (ti(e, nt), h.length = nt);
    if (On() && ut !== null && !yt && h !== null && !(e.f & (Ke | tr | st)))
      for (d = 0; d < /** @type {Source[]} */
      ut.length; d++)
        ps(
          ut[d],
          /** @type {Effect} */
          e
        );
    return i !== null && i !== e && (wn++, ut !== null && (n === null ? n = ut : n.push(.../** @type {Source[]} */
    ut))), e.f & mr && (e.f ^= mr), v;
  } catch (E) {
    return Xo(E);
  } finally {
    e.f ^= Fi, We = t, nt = r, ut = n, V = i, Zt = a, Ze = o, Yr(l), yt = s, gr = u;
  }
}
function Wu(e, t) {
  let r = t.reactions;
  if (r !== null) {
    var n = Kl.call(r, e);
    if (n !== -1) {
      var i = r.length - 1;
      i === 0 ? r = t.reactions = null : (r[n] = r[i], r.pop());
    }
  }
  r === null && t.f & Ke && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (We === null || !We.includes(t)) && (Ye(t, tr), t.f & (ht | ei) || (t.f ^= ei), Ko(
    /** @type {Derived} **/
    t
  ), ti(
    /** @type {Derived} **/
    t,
    0
  ));
}
function ti(e, t) {
  var r = e.deps;
  if (r !== null)
    for (var n = t; n < r.length; n++)
      Wu(e, r[n]);
}
function An(e) {
  var t = e.f;
  if (!(t & Sr)) {
    Ye(e, Ve);
    var r = q, n = Fr;
    q = e, Fr = !0;
    try {
      t & wr ? qu(e) : ls(e), ss(e);
      var i = ms(e);
      e.teardown = typeof i == "function" ? i : null, e.wv = hs;
      var a;
      No && gu && e.f & st && e.deps;
    } finally {
      Fr = n, q = r;
    }
  }
}
async function Zu() {
  await Promise.resolve(), wu();
}
function p(e) {
  var t = e.f, r = (t & Ke) !== 0;
  if (V !== null && !yt) {
    var n = q !== null && (q.f & Sr) !== 0;
    if (!n && !(Ze != null && Ze.includes(e))) {
      var i = V.deps;
      if (V.f & Fi)
        e.rv < wn && (e.rv = wn, We === null && i !== null && i[nt] === e ? nt++ : We === null ? We = [e] : (!Zt || !We.includes(e)) && We.push(e));
      else {
        (V.deps ?? (V.deps = [])).push(e);
        var a = e.reactions;
        a === null ? e.reactions = [V] : a.includes(V) || a.push(V);
      }
    }
  } else if (r && /** @type {Derived} */
  e.deps === null && /** @type {Derived} */
  e.effects === null) {
    var o = (
      /** @type {Derived} */
      e
    ), l = o.parent;
    l !== null && !(l.f & ht) && (o.f ^= ht);
  }
  if (Cr) {
    if (Jt.has(e))
      return Jt.get(e);
    if (r) {
      o = /** @type {Derived} */
      e;
      var s = o.v;
      return (!(o.f & Ve) && o.reactions !== null || gs(o)) && (s = ya(o)), Jt.set(o, s), s;
    }
  } else if (r) {
    if (o = /** @type {Derived} */
    e, De != null && De.has(o))
      return De.get(o);
    gi(o) && $o(o);
  }
  if (De != null && De.has(e))
    return De.get(e);
  if (e.f & mr)
    throw e.v;
  return e.v;
}
function gs(e) {
  if (e.v === He) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (Jt.has(t) || t.f & Ke && gs(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function ir(e) {
  var t = yt;
  try {
    return yt = !0, e();
  } finally {
    yt = t;
  }
}
const Yu = -7169;
function Ye(e, t) {
  e.f = e.f & Yu | t;
}
function Qu(e) {
  if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
    if (Lt in e)
      Wi(e);
    else if (!Array.isArray(e))
      for (let t in e) {
        const r = e[t];
        typeof r == "object" && r && Lt in r && Wi(r);
      }
  }
}
function Wi(e, t = /* @__PURE__ */ new Set()) {
  if (typeof e == "object" && e !== null && // We don't want to traverse DOM elements
  !(e instanceof EventTarget) && !t.has(e)) {
    t.add(e), e instanceof Date && e.getTime();
    for (let n in e)
      try {
        Wi(e[n], t);
      } catch {
      }
    const r = da(e);
    if (r !== Object.prototype && r !== Array.prototype && r !== Map.prototype && r !== Set.prototype && r !== Date.prototype) {
      const n = Uo(r);
      for (let i in n) {
        const a = n[i].get;
        if (a)
          try {
            a.call(e);
          } catch {
          }
      }
    }
  }
}
const bs = /* @__PURE__ */ new Set(), Zi = /* @__PURE__ */ new Set();
function _s(e, t, r, n = {}) {
  function i(a) {
    if (n.capture || mn.call(t, a), !a.cancelBubble)
      return vi(() => r == null ? void 0 : r.call(this, a));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? er(() => {
    t.addEventListener(e, i, n);
  }) : t.addEventListener(e, i, n), i;
}
function Ju(e, t, r, n = {}) {
  var i = _s(t, e, r, n);
  return () => {
    e.removeEventListener(t, i, n);
  };
}
function qt(e) {
  for (var t = 0; t < e.length; t++)
    bs.add(e[t]);
  for (var r of Zi)
    r(e);
}
let Ja = null;
function mn(e) {
  var C;
  var t = this, r = (
    /** @type {Node} */
    t.ownerDocument
  ), n = e.type, i = ((C = e.composedPath) == null ? void 0 : C.call(e)) || [], a = (
    /** @type {null | Element} */
    i[0] || e.target
  );
  Ja = e;
  var o = 0, l = Ja === e && e.__root;
  if (l) {
    var s = i.indexOf(l);
    if (s !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e.__root = t;
      return;
    }
    var u = i.indexOf(t);
    if (u === -1)
      return;
    s <= u && (o = s);
  }
  if (a = /** @type {Element} */
  i[o] || e.target, a !== t) {
    $n(e, "currentTarget", {
      configurable: !0,
      get() {
        return a || r;
      }
    });
    var c = V, f = q;
    tt(null), Pt(null);
    try {
      for (var v, h = []; a !== null; ) {
        var d = a.assignedSlot || a.parentNode || /** @type {any} */
        a.host || null;
        try {
          var m = a["__" + n];
          if (m != null && (!/** @type {any} */
          a.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === a))
            if (ci(m)) {
              var [E, ..._] = m;
              E.apply(a, [e, ..._]);
            } else
              m.call(a, e);
        } catch (x) {
          v ? h.push(x) : v = x;
        }
        if (e.cancelBubble || d === t || d === null)
          break;
        a = d;
      }
      if (v) {
        for (let x of h)
          queueMicrotask(() => {
            throw x;
          });
        throw v;
      }
    } finally {
      e.__root = t, delete e.currentTarget, tt(c), Pt(f);
    }
  }
}
function ys(e) {
  var t = document.createElement("template");
  return t.innerHTML = e.replaceAll("<!>", "<!---->"), t.content;
}
function $r(e, t) {
  var r = (
    /** @type {Effect} */
    q
  );
  r.nodes_start === null && (r.nodes_start = e, r.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function de(e, t) {
  var r = (t & 1) !== 0, n = (t & 2) !== 0, i, a = !e.startsWith("<!>");
  return () => {
    i === void 0 && (i = ys(a ? e : "<!>" + e), r || (i = /** @type {Node} */
    /* @__PURE__ */ Kr(i)));
    var o = (
      /** @type {TemplateNode} */
      n || rs ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (r) {
      var l = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Kr(o)
      ), s = (
        /** @type {TemplateNode} */
        o.lastChild
      );
      $r(l, s);
    } else
      $r(o, o);
    return o;
  };
}
// @__NO_SIDE_EFFECTS__
function Ku(e, t, r = "svg") {
  var n = !e.startsWith("<!>"), i = `<${r}>${n ? e : "<!>" + e}</${r}>`, a;
  return () => {
    if (!a) {
      var o = (
        /** @type {DocumentFragment} */
        ys(i)
      ), l = (
        /** @type {Element} */
        /* @__PURE__ */ Kr(o)
      );
      a = /** @type {Element} */
      /* @__PURE__ */ Kr(l);
    }
    var s = (
      /** @type {TemplateNode} */
      a.cloneNode(!0)
    );
    return $r(s, s), s;
  };
}
// @__NO_SIDE_EFFECTS__
function mt(e, t) {
  return /* @__PURE__ */ Ku(e, t, "svg");
}
function Yi(e = "") {
  {
    var t = rr(e + "");
    return $r(t, t), t;
  }
}
function K() {
  var e = document.createDocumentFragment(), t = document.createComment(""), r = rr();
  return e.append(t, r), $r(t, r), e;
}
function O(e, t) {
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function $u(e) {
  return e.endsWith("capture") && e !== "gotpointercapture" && e !== "lostpointercapture";
}
const ec = [
  "beforeinput",
  "click",
  "change",
  "dblclick",
  "contextmenu",
  "focusin",
  "focusout",
  "input",
  "keydown",
  "keyup",
  "mousedown",
  "mousemove",
  "mouseout",
  "mouseover",
  "mouseup",
  "pointerdown",
  "pointermove",
  "pointerout",
  "pointerover",
  "pointerup",
  "touchend",
  "touchmove",
  "touchstart"
];
function tc(e) {
  return ec.includes(e);
}
const rc = {
  // no `class: 'className'` because we handle that separately
  formnovalidate: "formNoValidate",
  ismap: "isMap",
  nomodule: "noModule",
  playsinline: "playsInline",
  readonly: "readOnly",
  defaultvalue: "defaultValue",
  defaultchecked: "defaultChecked",
  srcobject: "srcObject",
  novalidate: "noValidate",
  allowfullscreen: "allowFullscreen",
  disablepictureinpicture: "disablePictureInPicture",
  disableremoteplayback: "disableRemotePlayback"
};
function nc(e) {
  return e = e.toLowerCase(), rc[e] ?? e;
}
const ic = ["touchstart", "touchmove"];
function ac(e) {
  return ic.includes(e);
}
function $t(e, t) {
  var r = t == null ? "" : typeof t == "object" ? t + "" : t;
  r !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = r, e.nodeValue = r + "");
}
function oc(e, t) {
  return sc(e, t);
}
const Br = /* @__PURE__ */ new Map();
function sc(e, { target: t, anchor: r, props: n = {}, events: i, context: a, intro: o = !0 }) {
  Du();
  var l = /* @__PURE__ */ new Set(), s = (f) => {
    for (var v = 0; v < f.length; v++) {
      var h = f[v];
      if (!l.has(h)) {
        l.add(h);
        var d = ac(h);
        t.addEventListener(h, mn, { passive: d });
        var m = Br.get(h);
        m === void 0 ? (document.addEventListener(h, mn, { passive: d }), Br.set(h, 1)) : Br.set(h, m + 1);
      }
    }
  };
  s(fa(bs)), Zi.add(s);
  var u = void 0, c = ju(() => {
    var f = r ?? t.appendChild(rr());
    return Cu(
      /** @type {TemplateNode} */
      f,
      {
        pending: () => {
        }
      },
      (v) => {
        if (a) {
          Ue({});
          var h = (
            /** @type {ComponentContext} */
            ce
          );
          h.c = a;
        }
        i && (n.$$events = i), u = e(v, n) || {}, a && ke();
      }
    ), () => {
      var d;
      for (var v of l) {
        t.removeEventListener(v, mn);
        var h = (
          /** @type {number} */
          Br.get(v)
        );
        --h === 0 ? (document.removeEventListener(v, mn), Br.delete(v)) : Br.set(v, h);
      }
      Zi.delete(s), f !== r && ((d = f.parentNode) == null || d.removeChild(f));
    };
  });
  return lc.set(u, c), u;
}
let lc = /* @__PURE__ */ new WeakMap();
function Ne(e, t, ...r) {
  var n = e, i = fe, a;
  nr(() => {
    i !== (i = t()) && (a && (Be(a), a = null), a = je(() => (
      /** @type {SnippetFn} */
      i(n, ...r)
    )));
  }, xr);
}
function Gt(e) {
  ce === null && ga(), sn && ce.l !== null ? uc(ce).m.push(e) : qe(() => {
    const t = ir(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function Es(e) {
  ce === null && ga(), Gt(() => () => ir(e));
}
function uc(e) {
  var t = (
    /** @type {ComponentContextLegacy} */
    e.l
  );
  return t.u ?? (t.u = { a: [], b: [], m: [] });
}
function ie(e, t, r = !1) {
  var n = e, i = null, a = null, o = He, l = r ? xr : 0, s = !1;
  const u = (h, d = !0) => {
    s = !0, v(d, h);
  };
  var c = null;
  function f() {
    c !== null && (c.lastChild.remove(), n.before(c), c = null);
    var h = o ? i : a, d = o ? a : i;
    h && mi(h), d && Kt(d, () => {
      o ? a = null : i = null;
    });
  }
  const v = (h, d) => {
    if (o !== (o = h)) {
      var m = Ea(), E = n;
      if (m && (c = document.createDocumentFragment(), c.append(E = rr())), o ? i ?? (i = d && je(() => d(E))) : a ?? (a = d && je(() => d(E))), m) {
        var _ = (
          /** @type {Batch} */
          ae
        ), C = o ? i : a, x = o ? a : i;
        C && _.skipped_effects.delete(C), x && _.skipped_effects.add(x), _.add_callback(f);
      } else
        f();
    }
  };
  nr(() => {
    s = !1, t(u), s || v(null, null);
  }, l);
}
function Si(e, t) {
  return t;
}
function cc(e, t, r) {
  for (var n = e.items, i = [], a = t.length, o = 0; o < a; o++)
    Aa(t[o].e, i, !0);
  var l = a > 0 && i.length === 0 && r !== null;
  if (l) {
    var s = (
      /** @type {Element} */
      /** @type {Element} */
      r.parentNode
    );
    Bu(s), s.append(
      /** @type {Element} */
      r
    ), n.clear(), Ct(e, t[0].prev, t[a - 1].next);
  }
  cs(i, () => {
    for (var u = 0; u < a; u++) {
      var c = t[u];
      l || (n.delete(c.k), Ct(e, c.prev, c.next)), Be(c.e, !l);
    }
  });
}
function gn(e, t, r, n, i, a = null) {
  var o = e, l = { flags: t, items: /* @__PURE__ */ new Map(), first: null }, s = (t & 4) !== 0;
  if (s) {
    var u = (
      /** @type {Element} */
      e
    );
    o = u.appendChild(rr());
  }
  var c = null, f = !1, v = /* @__PURE__ */ new Map(), h = /* @__PURE__ */ _a(() => {
    var _ = r();
    return ci(_) ? _ : _ == null ? [] : fa(_);
  }), d, m;
  function E() {
    fc(
      m,
      d,
      l,
      v,
      o,
      i,
      t,
      n,
      r
    ), a !== null && (d.length === 0 ? c ? mi(c) : c = je(() => a(o)) : c !== null && Kt(c, () => {
      c = null;
    }));
  }
  nr(() => {
    m ?? (m = /** @type {Effect} */
    q), d = /** @type {V[]} */
    p(h);
    var _ = d.length;
    if (!(f && _ === 0)) {
      f = _ === 0;
      var C, x, b, g;
      if (Ea()) {
        var S = /* @__PURE__ */ new Set(), y = (
          /** @type {Batch} */
          ae
        );
        for (x = 0; x < _; x += 1) {
          b = d[x], g = n(b, x);
          var H = l.items.get(g) ?? v.get(g);
          H ? t & 3 && ws(H, b, x, t) : (C = As(
            null,
            l,
            null,
            null,
            b,
            g,
            x,
            i,
            t,
            r,
            !0
          ), v.set(g, C)), S.add(g);
        }
        for (const [N, L] of l.items)
          S.has(N) || y.skipped_effects.add(L.e);
        y.add_callback(E);
      } else
        E();
      p(h);
    }
  });
}
function fc(e, t, r, n, i, a, o, l, s) {
  var Q, M, A, P;
  var u = (o & 8) !== 0, c = (o & 3) !== 0, f = t.length, v = r.items, h = r.first, d = h, m, E = null, _, C = [], x = [], b, g, S, y;
  if (u)
    for (y = 0; y < f; y += 1)
      b = t[y], g = l(b, y), S = v.get(g), S !== void 0 && ((Q = S.a) == null || Q.measure(), (_ ?? (_ = /* @__PURE__ */ new Set())).add(S));
  for (y = 0; y < f; y += 1) {
    if (b = t[y], g = l(b, y), S = v.get(g), S === void 0) {
      var H = n.get(g);
      if (H !== void 0) {
        n.delete(g), v.set(g, H);
        var N = E ? E.next : d;
        Ct(r, E, H), Ct(r, H, N), xi(H, N, i), E = H;
      } else {
        var L = d ? (
          /** @type {TemplateNode} */
          d.e.nodes_start
        ) : i;
        E = As(
          L,
          r,
          E,
          E === null ? r.first : E.next,
          b,
          g,
          y,
          a,
          o,
          s
        );
      }
      v.set(g, E), C = [], x = [], d = E.next;
      continue;
    }
    if (c && ws(S, b, y, o), S.e.f & Et && (mi(S.e), u && ((M = S.a) == null || M.unfix(), (_ ?? (_ = /* @__PURE__ */ new Set())).delete(S))), S !== d) {
      if (m !== void 0 && m.has(S)) {
        if (C.length < x.length) {
          var W = x[0], re;
          E = W.prev;
          var $ = C[0], ge = C[C.length - 1];
          for (re = 0; re < C.length; re += 1)
            xi(C[re], W, i);
          for (re = 0; re < x.length; re += 1)
            m.delete(x[re]);
          Ct(r, $.prev, ge.next), Ct(r, E, $), Ct(r, ge, W), d = W, E = ge, y -= 1, C = [], x = [];
        } else
          m.delete(S), xi(S, d, i), Ct(r, S.prev, S.next), Ct(r, S, E === null ? r.first : E.next), Ct(r, E, S), E = S;
        continue;
      }
      for (C = [], x = []; d !== null && d.k !== g; )
        d.e.f & Et || (m ?? (m = /* @__PURE__ */ new Set())).add(d), x.push(d), d = d.next;
      if (d === null)
        continue;
      S = d;
    }
    C.push(S), E = S, d = S.next;
  }
  if (d !== null || m !== void 0) {
    for (var B = m === void 0 ? [] : fa(m); d !== null; )
      d.e.f & Et || B.push(d), d = d.next;
    var se = B.length;
    if (se > 0) {
      var D = o & 4 && f === 0 ? i : null;
      if (u) {
        for (y = 0; y < se; y += 1)
          (A = B[y].a) == null || A.measure();
        for (y = 0; y < se; y += 1)
          (P = B[y].a) == null || P.fix();
      }
      cc(r, B, D);
    }
  }
  u && er(() => {
    var xe;
    if (_ !== void 0)
      for (S of _)
        (xe = S.a) == null || xe.apply();
  }), e.first = r.first && r.first.e, e.last = E && E.e;
  for (var G of n.values())
    Be(G.e);
  n.clear();
}
function ws(e, t, r, n) {
  n & 1 && Jr(e.v, t), n & 2 ? Jr(
    /** @type {Value<number>} */
    e.i,
    r
  ) : e.i = r;
}
function As(e, t, r, n, i, a, o, l, s, u, c) {
  var f = (s & 1) !== 0, v = (s & 16) === 0, h = f ? v ? /* @__PURE__ */ es(i, !1, !1) : Er(i) : i, d = s & 2 ? Er(o) : o, m = {
    i: d,
    v: h,
    k: a,
    a: null,
    // @ts-expect-error
    e: null,
    prev: r,
    next: n
  };
  try {
    if (e === null) {
      var E = document.createDocumentFragment();
      E.append(e = rr());
    }
    return m.e = je(() => l(
      /** @type {Node} */
      e,
      h,
      d,
      u
    ), mu), m.e.prev = r && r.e, m.e.next = n && n.e, r === null ? c || (t.first = m) : (r.next = m, r.e.next = m.e), n !== null && (n.prev = m, n.e.prev = m.e), m;
  } finally {
  }
}
function xi(e, t, r) {
  for (var n = e.next ? (
    /** @type {TemplateNode} */
    e.next.e.nodes_start
  ) : r, i = t ? (
    /** @type {TemplateNode} */
    t.e.nodes_start
  ) : r, a = (
    /** @type {TemplateNode} */
    e.e.nodes_start
  ); a !== null && a !== n; ) {
    var o = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Hn(a)
    );
    i.before(a), a = o;
  }
}
function Ct(e, t, r) {
  t === null ? e.first = r : (t.next = r, t.e.next = r && r.e), r !== null && (r.prev = t, r.e.prev = t && t.e);
}
function bi(e, t, r) {
  var n = e, i, a, o = null, l = null;
  function s() {
    a && (Kt(a), a = null), o && (o.lastChild.remove(), n.before(o), o = null), a = l, l = null;
  }
  nr(() => {
    if (i !== (i = t())) {
      var u = Ea();
      if (i) {
        var c = n;
        u && (o = document.createDocumentFragment(), o.append(c = rr()), a && ae.skipped_effects.add(a)), l = je(() => r(c, i));
      }
      u ? ae.add_callback(s) : s();
    }
  }, xr);
}
function Ka(e, t, r, n, i, a) {
  var o, l, s = null, u = (
    /** @type {TemplateNode} */
    e
  ), c;
  nr(() => {
    const f = t() || null;
    var v = f === "svg" ? Ql : null;
    f !== o && (c && (f === null ? Kt(c, () => {
      c = null, l = null;
    }) : f === l ? mi(c) : Be(c)), f && f !== l && (c = je(() => {
      if (s = v ? document.createElementNS(v, f) : document.createElement(f), $r(s, s), n) {
        var h = (
          /** @type {TemplateNode} */
          s.appendChild(rr())
        );
        n(s, h);
      }
      q.nodes_end = s, u.before(s);
    })), o = f, o && (l = o));
  }, xr);
}
function at(e, t, r) {
  Ln(() => {
    var n = ir(() => t(e, r == null ? void 0 : r()) || {});
    if (r && (n != null && n.update)) {
      var i = !1, a = (
        /** @type {any} */
        {}
      );
      pi(() => {
        var o = r();
        Qu(o), i && ba(a, o) && (a = o, n.update(o));
      }), i = !0;
    }
    if (n != null && n.destroy)
      return () => (
        /** @type {Function} */
        n.destroy()
      );
  });
}
function dc(e, t) {
  var r = void 0, n;
  nr(() => {
    r !== (r = t()) && (n && (Be(n), n = null), r && (n = je(() => {
      Ln(() => (
        /** @type {(node: Element) => void} */
        r(e)
      ));
    })));
  });
}
function Ss(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var i = e.length;
    for (t = 0; t < i; t++) e[t] && (r = Ss(e[t])) && (n && (n += " "), n += r);
  } else for (r in e) e[r] && (n && (n += " "), n += r);
  return n;
}
function hc() {
  for (var e, t, r = 0, n = "", i = arguments.length; r < i; r++) (e = arguments[r]) && (t = Ss(e)) && (n && (n += " "), n += t);
  return n;
}
function vc(e) {
  return typeof e == "object" ? hc(e) : e ?? "";
}
const $a = [...` 	
\r\f \v\uFEFF`];
function pc(e, t, r) {
  var n = e == null ? "" : "" + e;
  if (r) {
    for (var i in r)
      if (r[i])
        n = n ? n + " " + i : i;
      else if (n.length)
        for (var a = i.length, o = 0; (o = n.indexOf(i, o)) >= 0; ) {
          var l = o + a;
          (o === 0 || $a.includes(n[o - 1])) && (l === n.length || $a.includes(n[l])) ? n = (o === 0 ? "" : n.substring(0, o)) + n.substring(l + 1) : o = l;
        }
  }
  return n === "" ? null : n;
}
function eo(e, t = !1) {
  var r = t ? " !important;" : ";", n = "";
  for (var i in e) {
    var a = e[i];
    a != null && a !== "" && (n += " " + i + ": " + a + r);
  }
  return n;
}
function Ci(e) {
  return e[0] !== "-" || e[1] !== "-" ? e.toLowerCase() : e;
}
function mc(e, t) {
  if (t) {
    var r = "", n, i;
    if (Array.isArray(t) ? (n = t[0], i = t[1]) : n = t, e) {
      e = String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var a = !1, o = 0, l = !1, s = [];
      n && s.push(...Object.keys(n).map(Ci)), i && s.push(...Object.keys(i).map(Ci));
      var u = 0, c = -1;
      const m = e.length;
      for (var f = 0; f < m; f++) {
        var v = e[f];
        if (l ? v === "/" && e[f - 1] === "*" && (l = !1) : a ? a === v && (a = !1) : v === "/" && e[f + 1] === "*" ? l = !0 : v === '"' || v === "'" ? a = v : v === "(" ? o++ : v === ")" && o--, !l && a === !1 && o === 0) {
          if (v === ":" && c === -1)
            c = f;
          else if (v === ";" || f === m - 1) {
            if (c !== -1) {
              var h = Ci(e.substring(u, c).trim());
              if (!s.includes(h)) {
                v !== ";" && f++;
                var d = e.substring(u, f).trim();
                r += " " + d + ";";
              }
            }
            u = f + 1, c = -1;
          }
        }
      }
    }
    return n && (r += eo(n)), i && (r += eo(i, !0)), r = r.trim(), r === "" ? null : r;
  }
  return e == null ? null : String(e);
}
function gc(e, t, r, n, i, a) {
  var o = e.__className;
  if (o !== r || o === void 0) {
    var l = pc(r, n, a);
    l == null ? e.removeAttribute("class") : t ? e.className = l : e.setAttribute("class", l), e.__className = r;
  } else if (a && i !== a)
    for (var s in a) {
      var u = !!a[s];
      (i == null || u !== !!i[s]) && e.classList.toggle(s, u);
    }
  return a;
}
function Ii(e, t = {}, r, n) {
  for (var i in r) {
    var a = r[i];
    t[i] !== a && (r[i] == null ? e.style.removeProperty(i) : e.style.setProperty(i, a, n));
  }
}
function lt(e, t, r, n) {
  var i = e.__style;
  if (i !== t) {
    var a = mc(t, n);
    a == null ? e.removeAttribute("style") : e.style.cssText = a, e.__style = t;
  } else n && (Array.isArray(n) ? (Ii(e, r == null ? void 0 : r[0], n[0]), Ii(e, r == null ? void 0 : r[1], n[1], "important")) : Ii(e, r, n));
  return n;
}
function ri(e, t, r = !1) {
  if (e.multiple) {
    if (t == null)
      return;
    if (!ci(t))
      return vu();
    for (var n of e.options)
      n.selected = t.includes(En(n));
    return;
  }
  for (n of e.options) {
    var i = En(n);
    if (Mu(i, t)) {
      n.selected = !0;
      return;
    }
  }
  (!r || t !== void 0) && (e.selectedIndex = -1);
}
function xs(e) {
  var t = new MutationObserver(() => {
    ri(e, e.__value);
  });
  t.observe(e, {
    // Listen to option element changes
    childList: !0,
    subtree: !0,
    // because of <optgroup>
    // Listen to option element value attribute changes
    // (doesn't get notified of select value changes,
    // because that property is not reflected as an attribute)
    attributes: !0,
    attributeFilter: ["value"]
  }), wa(() => {
    t.disconnect();
  });
}
function bc(e, t, r = t) {
  var n = !0;
  as(e, "change", (i) => {
    var a = i ? "[selected]" : ":checked", o;
    if (e.multiple)
      o = [].map.call(e.querySelectorAll(a), En);
    else {
      var l = e.querySelector(a) ?? // will fall back to first non-disabled option if no option is selected
      e.querySelector("option:not([disabled])");
      o = l && En(l);
    }
    r(o);
  }), Ln(() => {
    var i = t();
    if (ri(e, i, n), n && i === void 0) {
      var a = e.querySelector(":checked");
      a !== null && (i = En(a), r(i));
    }
    e.__value = i, n = !1;
  }), xs(e);
}
function En(e) {
  return "__value" in e ? e.__value : e.value;
}
const dn = Symbol("class"), hn = Symbol("style"), Cs = Symbol("is custom element"), Is = Symbol("is html");
function to(e, t) {
  var r = Sa(e);
  r.value === (r.value = // treat null and undefined the same for the initial value
  t ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  e.value === t && (t !== 0 || e.nodeName !== "PROGRESS") || (e.value = t ?? "");
}
function _c(e, t) {
  t ? e.hasAttribute("selected") || e.setAttribute("selected", "") : e.removeAttribute("selected");
}
function Sn(e, t, r, n) {
  var i = Sa(e);
  i[t] !== (i[t] = r) && (t === "loading" && (e[nu] = r), r == null ? e.removeAttribute(t) : typeof r != "string" && Rs(e).includes(t) ? e[t] = r : e.setAttribute(t, r));
}
function yc(e, t, r, n, i = !1, a = !1) {
  var o = Sa(e), l = o[Cs], s = !o[Is], u = t || {}, c = e.tagName === "OPTION";
  for (var f in t)
    f in r || (r[f] = null);
  r.class ? r.class = vc(r.class) : r[dn] && (r.class = null), r[hn] && (r.style ?? (r.style = null));
  var v = Rs(e);
  for (const x in r) {
    let b = r[x];
    if (c && x === "value" && b == null) {
      e.value = e.__value = "", u[x] = b;
      continue;
    }
    if (x === "class") {
      var h = e.namespaceURI === "http://www.w3.org/1999/xhtml";
      gc(e, h, b, n, t == null ? void 0 : t[dn], r[dn]), u[x] = b, u[dn] = r[dn];
      continue;
    }
    if (x === "style") {
      lt(e, b, t == null ? void 0 : t[hn], r[hn]), u[x] = b, u[hn] = r[hn];
      continue;
    }
    var d = u[x];
    if (!(b === d && !(b === void 0 && e.hasAttribute(x)))) {
      u[x] = b;
      var m = x[0] + x[1];
      if (m !== "$$")
        if (m === "on") {
          const g = {}, S = "$$" + x;
          let y = x.slice(2);
          var E = tc(y);
          if ($u(y) && (y = y.slice(0, -7), g.capture = !0), !E && d) {
            if (b != null) continue;
            e.removeEventListener(y, u[S], g), u[S] = null;
          }
          if (b != null)
            if (E)
              e[`__${y}`] = b, qt([y]);
            else {
              let H = function(N) {
                u[x].call(this, N);
              };
              u[S] = _s(y, e, H, g);
            }
          else E && (e[`__${y}`] = void 0);
        } else if (x === "style")
          Sn(e, x, b);
        else if (x === "autofocus")
          Nu(
            /** @type {HTMLElement} */
            e,
            !!b
          );
        else if (!l && (x === "__value" || x === "value" && b != null))
          e.value = e.__value = b;
        else if (x === "selected" && c)
          _c(
            /** @type {HTMLOptionElement} */
            e,
            b
          );
        else {
          var _ = x;
          s || (_ = nc(_));
          var C = _ === "defaultValue" || _ === "defaultChecked";
          if (b == null && !l && !C)
            if (o[x] = null, _ === "value" || _ === "checked") {
              let g = (
                /** @type {HTMLInputElement} */
                e
              );
              const S = t === void 0;
              if (_ === "value") {
                let y = g.defaultValue;
                g.removeAttribute(_), g.defaultValue = y, g.value = g.__value = S ? y : null;
              } else {
                let y = g.defaultChecked;
                g.removeAttribute(_), g.defaultChecked = y, g.checked = S ? y : !1;
              }
            } else
              e.removeAttribute(x);
          else C || v.includes(_) && (l || typeof b != "string") ? (e[_] = b, _ in o && (o[_] = He)) : typeof b != "function" && Sn(e, _, b);
        }
    }
  }
  return u;
}
function ot(e, t, r = [], n = [], i, a = !1, o = !1) {
  Jo(r, n, (l) => {
    var s = void 0, u = {}, c = e.nodeName === "SELECT", f = !1;
    if (nr(() => {
      var h = t(...l.map(p)), d = yc(
        e,
        s,
        h,
        i,
        a,
        o
      );
      f && c && "value" in h && ri(
        /** @type {HTMLSelectElement} */
        e,
        h.value
      );
      for (let E of Object.getOwnPropertySymbols(u))
        h[E] || Be(u[E]);
      for (let E of Object.getOwnPropertySymbols(h)) {
        var m = h[E];
        E.description === Jl && (!s || m !== s[E]) && (u[E] && Be(u[E]), u[E] = je(() => dc(e, () => m))), d[E] = m;
      }
      s = d;
    }), c) {
      var v = (
        /** @type {HTMLSelectElement} */
        e
      );
      Ln(() => {
        ri(
          v,
          /** @type {Record<string | symbol, any>} */
          s.value,
          !0
        ), xs(v);
      });
    }
    f = !0;
  });
}
function Sa(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ?? (e.__attributes = {
      [Cs]: e.nodeName.includes("-"),
      [Is]: e.namespaceURI === Yl
    })
  );
}
var ro = /* @__PURE__ */ new Map();
function Rs(e) {
  var t = e.getAttribute("is") || e.nodeName, r = ro.get(t);
  if (r) return r;
  ro.set(t, r = []);
  for (var n, i = e, a = Element.prototype; a !== i; ) {
    n = Uo(i);
    for (var o in n)
      n[o].set && r.push(o);
    i = da(i);
  }
  return r;
}
function no(e, t, r = t) {
  var n = /* @__PURE__ */ new WeakSet();
  as(e, "input", async (i) => {
    var a = i ? e.defaultValue : e.value;
    if (a = Ri(e) ? Ti(a) : a, r(a), ae !== null && n.add(ae), await Zu(), a !== (a = t())) {
      var o = e.selectionStart, l = e.selectionEnd, s = e.value.length;
      if (e.value = a ?? "", l !== null) {
        var u = e.value.length;
        o === l && l === s && u > s ? (e.selectionStart = u, e.selectionEnd = u) : (e.selectionStart = o, e.selectionEnd = Math.min(l, u));
      }
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  ir(t) == null && e.value && (r(Ri(e) ? Ti(e.value) : e.value), ae !== null && n.add(ae)), pi(() => {
    var i = t();
    if (e === document.activeElement) {
      var a = (
        /** @type {Batch} */
        Wn ?? ae
      );
      if (n.has(a))
        return;
    }
    Ri(e) && i === Ti(e.value) || e.type === "date" && !i && !e.value || i !== e.value && (e.value = i ?? "");
  });
}
function Ri(e) {
  var t = e.type;
  return t === "number" || t === "range";
}
function Ti(e) {
  return e === "" ? null : +e;
}
function io(e, t) {
  return e === t || (e == null ? void 0 : e[Lt]) === t;
}
function Qe(e = {}, t, r, n) {
  return Ln(() => {
    var i, a;
    return pi(() => {
      i = a, a = [], ir(() => {
        e !== r(...a) && (t(e, ...a), i && io(r(...i), e) && t(null, ...i));
      });
    }), () => {
      er(() => {
        a && io(r(...a), e) && t(null, ...a);
      });
    };
  }), e;
}
function xa(e, t, r) {
  if (e == null)
    return t(void 0), r && r(void 0), fe;
  const n = ir(
    () => e.subscribe(
      t,
      // @ts-expect-error
      r
    )
  );
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
const Nr = [];
function Ec(e, t) {
  return {
    subscribe: vt(e, t).subscribe
  };
}
function vt(e, t = fe) {
  let r = null;
  const n = /* @__PURE__ */ new Set();
  function i(l) {
    if (ba(e, l) && (e = l, r)) {
      const s = !Nr.length;
      for (const u of n)
        u[1](), Nr.push(u, e);
      if (s) {
        for (let u = 0; u < Nr.length; u += 2)
          Nr[u][0](Nr[u + 1]);
        Nr.length = 0;
      }
    }
  }
  function a(l) {
    i(l(
      /** @type {T} */
      e
    ));
  }
  function o(l, s = fe) {
    const u = [l, s];
    return n.add(u), n.size === 1 && (r = t(i, a) || fe), l(
      /** @type {T} */
      e
    ), () => {
      n.delete(u), n.size === 0 && r && (r(), r = null);
    };
  }
  return { set: i, update: a, subscribe: o };
}
function ln(e, t, r) {
  const n = !Array.isArray(e), i = n ? [e] : e;
  if (!i.every(Boolean))
    throw new Error("derived() expects stores as input, got a falsy value");
  const a = t.length < 2;
  return Ec(r, (o, l) => {
    let s = !1;
    const u = [];
    let c = 0, f = fe;
    const v = () => {
      if (c)
        return;
      f();
      const d = t(n ? u[0] : u, o, l);
      a ? o(d) : f = typeof d == "function" ? d : fe;
    }, h = i.map(
      (d, m) => xa(
        d,
        (E) => {
          u[m] = E, c &= ~(1 << m), s && v();
        },
        () => {
          c |= 1 << m;
        }
      )
    );
    return s = !0, v(), function() {
      ko(h), f(), s = !1;
    };
  });
}
function Ts(e) {
  let t;
  return xa(e, (r) => t = r)(), t;
}
let kn = !1, Qi = Symbol();
function br(e, t, r) {
  const n = r[t] ?? (r[t] = {
    store: null,
    source: /* @__PURE__ */ es(void 0),
    unsubscribe: fe
  });
  if (n.store !== e && !(Qi in r))
    if (n.unsubscribe(), n.store = e ?? null, e == null)
      n.source.v = void 0, n.unsubscribe = fe;
    else {
      var i = !0;
      n.unsubscribe = xa(e, (a) => {
        i ? n.source.v = a : ue(n.source, a);
      }), i = !1;
    }
  return e && Qi in r ? Ts(e) : p(n.source);
}
function Ji(e, t) {
  return e.set(t), t;
}
function Pn() {
  const e = {};
  function t() {
    wa(() => {
      for (var r in e)
        e[r].unsubscribe();
      $n(e, Qi, {
        enumerable: !1,
        value: !0
      });
    });
  }
  return [e, t];
}
function wc(e) {
  var t = kn;
  try {
    return kn = !1, [e(), kn];
  } finally {
    kn = t;
  }
}
const Ac = {
  get(e, t) {
    if (!e.exclude.includes(t))
      return e.props[t];
  },
  set(e, t) {
    return !1;
  },
  getOwnPropertyDescriptor(e, t) {
    if (!e.exclude.includes(t) && t in e.props)
      return {
        enumerable: !0,
        configurable: !0,
        value: e.props[t]
      };
  },
  has(e, t) {
    return e.exclude.includes(t) ? !1 : t in e.props;
  },
  ownKeys(e) {
    return Reflect.ownKeys(e.props).filter((t) => !e.exclude.includes(t));
  }
};
// @__NO_SIDE_EFFECTS__
function At(e, t, r) {
  return new Proxy(
    { props: e, exclude: t },
    Ac
  );
}
const Sc = {
  get(e, t) {
    let r = e.props.length;
    for (; r--; ) {
      let n = e.props[r];
      if (fn(n) && (n = n()), typeof n == "object" && n !== null && t in n) return n[t];
    }
  },
  set(e, t, r) {
    let n = e.props.length;
    for (; n--; ) {
      let i = e.props[n];
      fn(i) && (i = i());
      const a = Qt(i, t);
      if (a && a.set)
        return a.set(r), !0;
    }
    return !1;
  },
  getOwnPropertyDescriptor(e, t) {
    let r = e.props.length;
    for (; r--; ) {
      let n = e.props[r];
      if (fn(n) && (n = n()), typeof n == "object" && n !== null && t in n) {
        const i = Qt(n, t);
        return i && !i.configurable && (i.configurable = !0), i;
      }
    }
  },
  has(e, t) {
    if (t === Lt || t === Go) return !1;
    for (let r of e.props)
      if (fn(r) && (r = r()), r != null && t in r) return !0;
    return !1;
  },
  ownKeys(e) {
    const t = [];
    for (let r of e.props)
      if (fn(r) && (r = r()), !!r) {
        for (const n in r)
          t.includes(n) || t.push(n);
        for (const n of Object.getOwnPropertySymbols(r))
          t.includes(n) || t.push(n);
      }
    return t;
  }
};
function _i(...e) {
  return new Proxy({ props: e }, Sc);
}
function T(e, t, r, n) {
  var x;
  var i = !sn || (r & 2) !== 0, a = (r & 8) !== 0, o = (r & 16) !== 0, l = (
    /** @type {V} */
    n
  ), s = !0, u = () => (s && (s = !1, l = o ? ir(
    /** @type {() => V} */
    n
  ) : (
    /** @type {V} */
    n
  )), l), c;
  if (a) {
    var f = Lt in e || Go in e;
    c = ((x = Qt(e, t)) == null ? void 0 : x.set) ?? (f && t in e ? (b) => e[t] = b : void 0);
  }
  var v, h = !1;
  a ? [v, h] = wc(() => (
    /** @type {V} */
    e[t]
  )) : v = /** @type {V} */
  e[t], v === void 0 && n !== void 0 && (v = u(), c && (i && uu(), c(v)));
  var d;
  if (i ? d = () => {
    var b = (
      /** @type {V} */
      e[t]
    );
    return b === void 0 ? u() : (s = !0, b);
  } : d = () => {
    var b = (
      /** @type {V} */
      e[t]
    );
    return b !== void 0 && (l = /** @type {V} */
    void 0), b === void 0 ? l : b;
  }, i && !(r & 4))
    return d;
  if (c) {
    var m = e.$$legacy;
    return (
      /** @type {() => V} */
      function(b, g) {
        return arguments.length > 0 ? ((!i || !g || m || h) && c(g ? d() : b), b) : d();
      }
    );
  }
  var E = !1, _ = (r & 1 ? hi : _a)(() => (E = !1, d()));
  a && p(_);
  var C = (
    /** @type {Effect} */
    q
  );
  return (
    /** @type {() => V} */
    function(b, g) {
      if (arguments.length > 0) {
        const S = g ? p(_) : i && a ? te(b) : b;
        return ue(_, S), E = !0, l !== void 0 && (l = S), b;
      }
      return Cr && E || C.f & Sr ? _.v : p(_);
    }
  );
}
const xc = "5";
var Bo;
typeof window < "u" && ((Bo = window.__svelte ?? (window.__svelte = {})).v ?? (Bo.v = /* @__PURE__ */ new Set())).add(xc);
function Cc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ic = function(t) {
  return Rc(t) && !Tc(t);
};
function Rc(e) {
  return !!e && typeof e == "object";
}
function Tc(e) {
  var t = Object.prototype.toString.call(e);
  return t === "[object RegExp]" || t === "[object Date]" || Lc(e);
}
var Oc = typeof Symbol == "function" && Symbol.for, Hc = Oc ? Symbol.for("react.element") : 60103;
function Lc(e) {
  return e.$$typeof === Hc;
}
function Pc(e) {
  return Array.isArray(e) ? [] : {};
}
function xn(e, t) {
  return t.clone !== !1 && t.isMergeableObject(e) ? en(Pc(e), e, t) : e;
}
function Mc(e, t, r) {
  return e.concat(t).map(function(n) {
    return xn(n, r);
  });
}
function Dc(e, t) {
  if (!t.customMerge)
    return en;
  var r = t.customMerge(e);
  return typeof r == "function" ? r : en;
}
function Bc(e) {
  return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e).filter(function(t) {
    return Object.propertyIsEnumerable.call(e, t);
  }) : [];
}
function ao(e) {
  return Object.keys(e).concat(Bc(e));
}
function Os(e, t) {
  try {
    return t in e;
  } catch {
    return !1;
  }
}
function Nc(e, t) {
  return Os(e, t) && !(Object.hasOwnProperty.call(e, t) && Object.propertyIsEnumerable.call(e, t));
}
function Uc(e, t, r) {
  var n = {};
  return r.isMergeableObject(e) && ao(e).forEach(function(i) {
    n[i] = xn(e[i], r);
  }), ao(t).forEach(function(i) {
    Nc(e, i) || (Os(e, i) && r.isMergeableObject(t[i]) ? n[i] = Dc(i, r)(e[i], t[i], r) : n[i] = xn(t[i], r));
  }), n;
}
function en(e, t, r) {
  r = r || {}, r.arrayMerge = r.arrayMerge || Mc, r.isMergeableObject = r.isMergeableObject || Ic, r.cloneUnlessOtherwiseSpecified = xn;
  var n = Array.isArray(t), i = Array.isArray(e), a = n === i;
  return a ? n ? r.arrayMerge(e, t, r) : Uc(e, t, r) : xn(t, r);
}
en.all = function(t, r) {
  if (!Array.isArray(t))
    throw new Error("first argument should be an array");
  return t.reduce(function(n, i) {
    return en(n, i, r);
  }, {});
};
var kc = en, Fc = kc;
const Gc = /* @__PURE__ */ Cc(Fc);
var Ki = function(e, t) {
  return Ki = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, n) {
    r.__proto__ = n;
  } || function(r, n) {
    for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (r[i] = n[i]);
  }, Ki(e, t);
};
function St(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  Ki(e, t);
  function r() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : (r.prototype = t.prototype, new r());
}
var k = function() {
  return k = Object.assign || function(t) {
    for (var r, n = 1, i = arguments.length; n < i; n++) {
      r = arguments[n];
      for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (t[a] = r[a]);
    }
    return t;
  }, k.apply(this, arguments);
};
function jc(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
      t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (r[n[i]] = e[n[i]]);
  return r;
}
function Hs(e, t, r, n) {
  function i(a) {
    return a instanceof r ? a : new r(function(o) {
      o(a);
    });
  }
  return new (r || (r = Promise))(function(a, o) {
    function l(c) {
      try {
        u(n.next(c));
      } catch (f) {
        o(f);
      }
    }
    function s(c) {
      try {
        u(n.throw(c));
      } catch (f) {
        o(f);
      }
    }
    function u(c) {
      c.done ? a(c.value) : i(c.value).then(l, s);
    }
    u((n = n.apply(e, t || [])).next());
  });
}
function Ca(e, t) {
  var r = { label: 0, sent: function() {
    if (a[0] & 1) throw a[1];
    return a[1];
  }, trys: [], ops: [] }, n, i, a, o = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
  return o.next = l(0), o.throw = l(1), o.return = l(2), typeof Symbol == "function" && (o[Symbol.iterator] = function() {
    return this;
  }), o;
  function l(u) {
    return function(c) {
      return s([u, c]);
    };
  }
  function s(u) {
    if (n) throw new TypeError("Generator is already executing.");
    for (; o && (o = 0, u[0] && (r = 0)), r; ) try {
      if (n = 1, i && (a = u[0] & 2 ? i.return : u[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, u[1])).done) return a;
      switch (i = 0, a && (u = [u[0] & 2, a.value]), u[0]) {
        case 0:
        case 1:
          a = u;
          break;
        case 4:
          return r.label++, { value: u[1], done: !1 };
        case 5:
          r.label++, i = u[1], u = [0];
          continue;
        case 7:
          u = r.ops.pop(), r.trys.pop();
          continue;
        default:
          if (a = r.trys, !(a = a.length > 0 && a[a.length - 1]) && (u[0] === 6 || u[0] === 2)) {
            r = 0;
            continue;
          }
          if (u[0] === 3 && (!a || u[1] > a[0] && u[1] < a[3])) {
            r.label = u[1];
            break;
          }
          if (u[0] === 6 && r.label < a[1]) {
            r.label = a[1], a = u;
            break;
          }
          if (a && r.label < a[2]) {
            r.label = a[2], r.ops.push(u);
            break;
          }
          a[2] && r.ops.pop(), r.trys.pop();
          continue;
      }
      u = t.call(e, r);
    } catch (c) {
      u = [6, c], i = 0;
    } finally {
      n = a = 0;
    }
    if (u[0] & 5) throw u[1];
    return { value: u[0] ? u[1] : void 0, done: !0 };
  }
}
function Ht(e) {
  var t = typeof Symbol == "function" && Symbol.iterator, r = t && e[t], n = 0;
  if (r) return r.call(e);
  if (e && typeof e.length == "number") return {
    next: function() {
      return e && n >= e.length && (e = void 0), { value: e && e[n++], done: !e };
    }
  };
  throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function $i(e, t) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r) return e;
  var n = r.call(e), i, a = [], o;
  try {
    for (; (t === void 0 || t-- > 0) && !(i = n.next()).done; ) a.push(i.value);
  } catch (l) {
    o = { error: l };
  } finally {
    try {
      i && !i.done && (r = n.return) && r.call(n);
    } finally {
      if (o) throw o.error;
    }
  }
  return a;
}
function Gr(e, t, r) {
  if (r || arguments.length === 2) for (var n = 0, i = t.length, a; n < i; n++)
    (a || !(n in t)) && (a || (a = Array.prototype.slice.call(t, 0, n)), a[n] = t[n]);
  return e.concat(a || Array.prototype.slice.call(t));
}
function jr(e) {
  return this instanceof jr ? (this.v = e, this) : new jr(e);
}
function Vc(e, t, r) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var n = r.apply(e, t || []), i, a = [];
  return i = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype), l("next"), l("throw"), l("return", o), i[Symbol.asyncIterator] = function() {
    return this;
  }, i;
  function o(h) {
    return function(d) {
      return Promise.resolve(d).then(h, f);
    };
  }
  function l(h, d) {
    n[h] && (i[h] = function(m) {
      return new Promise(function(E, _) {
        a.push([h, m, E, _]) > 1 || s(h, m);
      });
    }, d && (i[h] = d(i[h])));
  }
  function s(h, d) {
    try {
      u(n[h](d));
    } catch (m) {
      v(a[0][3], m);
    }
  }
  function u(h) {
    h.value instanceof jr ? Promise.resolve(h.value.v).then(c, f) : v(a[0][2], h);
  }
  function c(h) {
    s("next", h);
  }
  function f(h) {
    s("throw", h);
  }
  function v(h, d) {
    h(d), a.shift(), a.length && s(a[0][0], a[0][1]);
  }
}
function qc(e) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var t = e[Symbol.asyncIterator], r;
  return t ? t.call(e) : (e = typeof Ht == "function" ? Ht(e) : e[Symbol.iterator](), r = {}, n("next"), n("throw"), n("return"), r[Symbol.asyncIterator] = function() {
    return this;
  }, r);
  function n(a) {
    r[a] = e[a] && function(o) {
      return new Promise(function(l, s) {
        o = e[a](o), i(l, s, o.done, o.value);
      });
    };
  }
  function i(a, o, l, s) {
    Promise.resolve(s).then(function(u) {
      a({ value: u, done: l });
    }, o);
  }
}
function Oi(e, t) {
  var r = t && t.cache ? t.cache : Jc, n = t && t.serializer ? t.serializer : Yc, i = t && t.strategy ? t.strategy : Wc;
  return i(e, {
    cache: r,
    serializer: n
  });
}
function zc(e) {
  return e == null || typeof e == "number" || typeof e == "boolean";
}
function Xc(e, t, r, n) {
  var i = zc(n) ? n : r(n), a = t.get(i);
  return typeof a > "u" && (a = e.call(this, n), t.set(i, a)), a;
}
function Ls(e, t, r) {
  var n = Array.prototype.slice.call(arguments, 3), i = r(n), a = t.get(i);
  return typeof a > "u" && (a = e.apply(this, n), t.set(i, a)), a;
}
function Ps(e, t, r, n, i) {
  return r.bind(t, e, n, i);
}
function Wc(e, t) {
  var r = e.length === 1 ? Xc : Ls;
  return Ps(e, this, r, t.cache.create(), t.serializer);
}
function Zc(e, t) {
  return Ps(e, this, Ls, t.cache.create(), t.serializer);
}
var Yc = function() {
  return JSON.stringify(arguments);
}, Qc = (
  /** @class */
  function() {
    function e() {
      this.cache = /* @__PURE__ */ Object.create(null);
    }
    return e.prototype.get = function(t) {
      return this.cache[t];
    }, e.prototype.set = function(t, r) {
      this.cache[t] = r;
    }, e;
  }()
), Jc = {
  create: function() {
    return new Qc();
  }
}, Hi = {
  variadic: Zc
}, X;
(function(e) {
  e[e.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", e[e.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", e[e.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", e[e.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", e[e.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", e[e.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", e[e.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", e[e.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", e[e.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", e[e.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", e[e.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", e[e.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", e[e.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", e[e.INVALID_TAG = 23] = "INVALID_TAG", e[e.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", e[e.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", e[e.UNCLOSED_TAG = 27] = "UNCLOSED_TAG";
})(X || (X = {}));
var pe;
(function(e) {
  e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag";
})(pe || (pe = {}));
var tn;
(function(e) {
  e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime";
})(tn || (tn = {}));
function oo(e) {
  return e.type === pe.literal;
}
function Kc(e) {
  return e.type === pe.argument;
}
function Ms(e) {
  return e.type === pe.number;
}
function Ds(e) {
  return e.type === pe.date;
}
function Bs(e) {
  return e.type === pe.time;
}
function Ns(e) {
  return e.type === pe.select;
}
function Us(e) {
  return e.type === pe.plural;
}
function $c(e) {
  return e.type === pe.pound;
}
function ks(e) {
  return e.type === pe.tag;
}
function Fs(e) {
  return !!(e && typeof e == "object" && e.type === tn.number);
}
function ea(e) {
  return !!(e && typeof e == "object" && e.type === tn.dateTime);
}
var Gs = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/, ef = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
function tf(e) {
  var t = {};
  return e.replace(ef, function(r) {
    var n = r.length;
    switch (r[0]) {
      case "G":
        t.era = n === 4 ? "long" : n === 5 ? "narrow" : "short";
        break;
      case "y":
        t.year = n === 2 ? "2-digit" : "numeric";
        break;
      case "Y":
      case "u":
      case "U":
      case "r":
        throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");
      case "q":
      case "Q":
        throw new RangeError("`q/Q` (quarter) patterns are not supported");
      case "M":
      case "L":
        t.month = ["numeric", "2-digit", "short", "long", "narrow"][n - 1];
        break;
      case "w":
      case "W":
        throw new RangeError("`w/W` (week) patterns are not supported");
      case "d":
        t.day = ["numeric", "2-digit"][n - 1];
        break;
      case "D":
      case "F":
      case "g":
        throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");
      case "E":
        t.weekday = n === 4 ? "long" : n === 5 ? "narrow" : "short";
        break;
      case "e":
        if (n < 4)
          throw new RangeError("`e..eee` (weekday) patterns are not supported");
        t.weekday = ["short", "long", "narrow", "short"][n - 4];
        break;
      case "c":
        if (n < 4)
          throw new RangeError("`c..ccc` (weekday) patterns are not supported");
        t.weekday = ["short", "long", "narrow", "short"][n - 4];
        break;
      case "a":
        t.hour12 = !0;
        break;
      case "b":
      case "B":
        throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");
      case "h":
        t.hourCycle = "h12", t.hour = ["numeric", "2-digit"][n - 1];
        break;
      case "H":
        t.hourCycle = "h23", t.hour = ["numeric", "2-digit"][n - 1];
        break;
      case "K":
        t.hourCycle = "h11", t.hour = ["numeric", "2-digit"][n - 1];
        break;
      case "k":
        t.hourCycle = "h24", t.hour = ["numeric", "2-digit"][n - 1];
        break;
      case "j":
      case "J":
      case "C":
        throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");
      case "m":
        t.minute = ["numeric", "2-digit"][n - 1];
        break;
      case "s":
        t.second = ["numeric", "2-digit"][n - 1];
        break;
      case "S":
      case "A":
        throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");
      case "z":
        t.timeZoneName = n < 4 ? "short" : "long";
        break;
      case "Z":
      case "O":
      case "v":
      case "V":
      case "X":
      case "x":
        throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead");
    }
    return "";
  }), t;
}
var rf = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
function nf(e) {
  if (e.length === 0)
    throw new Error("Number skeleton cannot be empty");
  for (var t = e.split(rf).filter(function(v) {
    return v.length > 0;
  }), r = [], n = 0, i = t; n < i.length; n++) {
    var a = i[n], o = a.split("/");
    if (o.length === 0)
      throw new Error("Invalid number skeleton");
    for (var l = o[0], s = o.slice(1), u = 0, c = s; u < c.length; u++) {
      var f = c[u];
      if (f.length === 0)
        throw new Error("Invalid number skeleton");
    }
    r.push({ stem: l, options: s });
  }
  return r;
}
function af(e) {
  return e.replace(/^(.*?)-/, "");
}
var so = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g, js = /^(@+)?(\+|#+)?[rs]?$/g, of = /(\*)(0+)|(#+)(0+)|(0+)/g, Vs = /^(0+)$/;
function lo(e) {
  var t = {};
  return e[e.length - 1] === "r" ? t.roundingPriority = "morePrecision" : e[e.length - 1] === "s" && (t.roundingPriority = "lessPrecision"), e.replace(js, function(r, n, i) {
    return typeof i != "string" ? (t.minimumSignificantDigits = n.length, t.maximumSignificantDigits = n.length) : i === "+" ? t.minimumSignificantDigits = n.length : n[0] === "#" ? t.maximumSignificantDigits = n.length : (t.minimumSignificantDigits = n.length, t.maximumSignificantDigits = n.length + (typeof i == "string" ? i.length : 0)), "";
  }), t;
}
function qs(e) {
  switch (e) {
    case "sign-auto":
      return {
        signDisplay: "auto"
      };
    case "sign-accounting":
    case "()":
      return {
        currencySign: "accounting"
      };
    case "sign-always":
    case "+!":
      return {
        signDisplay: "always"
      };
    case "sign-accounting-always":
    case "()!":
      return {
        signDisplay: "always",
        currencySign: "accounting"
      };
    case "sign-except-zero":
    case "+?":
      return {
        signDisplay: "exceptZero"
      };
    case "sign-accounting-except-zero":
    case "()?":
      return {
        signDisplay: "exceptZero",
        currencySign: "accounting"
      };
    case "sign-never":
    case "+_":
      return {
        signDisplay: "never"
      };
  }
}
function sf(e) {
  var t;
  if (e[0] === "E" && e[1] === "E" ? (t = {
    notation: "engineering"
  }, e = e.slice(2)) : e[0] === "E" && (t = {
    notation: "scientific"
  }, e = e.slice(1)), t) {
    var r = e.slice(0, 2);
    if (r === "+!" ? (t.signDisplay = "always", e = e.slice(2)) : r === "+?" && (t.signDisplay = "exceptZero", e = e.slice(2)), !Vs.test(e))
      throw new Error("Malformed concise eng/scientific notation");
    t.minimumIntegerDigits = e.length;
  }
  return t;
}
function uo(e) {
  var t = {}, r = qs(e);
  return r || t;
}
function lf(e) {
  for (var t = {}, r = 0, n = e; r < n.length; r++) {
    var i = n[r];
    switch (i.stem) {
      case "percent":
      case "%":
        t.style = "percent";
        continue;
      case "%x100":
        t.style = "percent", t.scale = 100;
        continue;
      case "currency":
        t.style = "currency", t.currency = i.options[0];
        continue;
      case "group-off":
      case ",_":
        t.useGrouping = !1;
        continue;
      case "precision-integer":
      case ".":
        t.maximumFractionDigits = 0;
        continue;
      case "measure-unit":
      case "unit":
        t.style = "unit", t.unit = af(i.options[0]);
        continue;
      case "compact-short":
      case "K":
        t.notation = "compact", t.compactDisplay = "short";
        continue;
      case "compact-long":
      case "KK":
        t.notation = "compact", t.compactDisplay = "long";
        continue;
      case "scientific":
        t = k(k(k({}, t), { notation: "scientific" }), i.options.reduce(function(s, u) {
          return k(k({}, s), uo(u));
        }, {}));
        continue;
      case "engineering":
        t = k(k(k({}, t), { notation: "engineering" }), i.options.reduce(function(s, u) {
          return k(k({}, s), uo(u));
        }, {}));
        continue;
      case "notation-simple":
        t.notation = "standard";
        continue;
      case "unit-width-narrow":
        t.currencyDisplay = "narrowSymbol", t.unitDisplay = "narrow";
        continue;
      case "unit-width-short":
        t.currencyDisplay = "code", t.unitDisplay = "short";
        continue;
      case "unit-width-full-name":
        t.currencyDisplay = "name", t.unitDisplay = "long";
        continue;
      case "unit-width-iso-code":
        t.currencyDisplay = "symbol";
        continue;
      case "scale":
        t.scale = parseFloat(i.options[0]);
        continue;
      case "rounding-mode-floor":
        t.roundingMode = "floor";
        continue;
      case "rounding-mode-ceiling":
        t.roundingMode = "ceil";
        continue;
      case "rounding-mode-down":
        t.roundingMode = "trunc";
        continue;
      case "rounding-mode-up":
        t.roundingMode = "expand";
        continue;
      case "rounding-mode-half-even":
        t.roundingMode = "halfEven";
        continue;
      case "rounding-mode-half-down":
        t.roundingMode = "halfTrunc";
        continue;
      case "rounding-mode-half-up":
        t.roundingMode = "halfExpand";
        continue;
      case "integer-width":
        if (i.options.length > 1)
          throw new RangeError("integer-width stems only accept a single optional option");
        i.options[0].replace(of, function(s, u, c, f, v, h) {
          if (u)
            t.minimumIntegerDigits = c.length;
          else {
            if (f && v)
              throw new Error("We currently do not support maximum integer digits");
            if (h)
              throw new Error("We currently do not support exact integer digits");
          }
          return "";
        });
        continue;
    }
    if (Vs.test(i.stem)) {
      t.minimumIntegerDigits = i.stem.length;
      continue;
    }
    if (so.test(i.stem)) {
      if (i.options.length > 1)
        throw new RangeError("Fraction-precision stems only accept a single optional option");
      i.stem.replace(so, function(s, u, c, f, v, h) {
        return c === "*" ? t.minimumFractionDigits = u.length : f && f[0] === "#" ? t.maximumFractionDigits = f.length : v && h ? (t.minimumFractionDigits = v.length, t.maximumFractionDigits = v.length + h.length) : (t.minimumFractionDigits = u.length, t.maximumFractionDigits = u.length), "";
      });
      var a = i.options[0];
      a === "w" ? t = k(k({}, t), { trailingZeroDisplay: "stripIfInteger" }) : a && (t = k(k({}, t), lo(a)));
      continue;
    }
    if (js.test(i.stem)) {
      t = k(k({}, t), lo(i.stem));
      continue;
    }
    var o = qs(i.stem);
    o && (t = k(k({}, t), o));
    var l = sf(i.stem);
    l && (t = k(k({}, t), l));
  }
  return t;
}
var Fn = {
  "001": [
    "H",
    "h"
  ],
  419: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  AC: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  AD: [
    "H",
    "hB"
  ],
  AE: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  AF: [
    "H",
    "hb",
    "hB",
    "h"
  ],
  AG: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  AI: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  AL: [
    "h",
    "H",
    "hB"
  ],
  AM: [
    "H",
    "hB"
  ],
  AO: [
    "H",
    "hB"
  ],
  AR: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  AS: [
    "h",
    "H"
  ],
  AT: [
    "H",
    "hB"
  ],
  AU: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  AW: [
    "H",
    "hB"
  ],
  AX: [
    "H"
  ],
  AZ: [
    "H",
    "hB",
    "h"
  ],
  BA: [
    "H",
    "hB",
    "h"
  ],
  BB: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  BD: [
    "h",
    "hB",
    "H"
  ],
  BE: [
    "H",
    "hB"
  ],
  BF: [
    "H",
    "hB"
  ],
  BG: [
    "H",
    "hB",
    "h"
  ],
  BH: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  BI: [
    "H",
    "h"
  ],
  BJ: [
    "H",
    "hB"
  ],
  BL: [
    "H",
    "hB"
  ],
  BM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  BN: [
    "hb",
    "hB",
    "h",
    "H"
  ],
  BO: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  BQ: [
    "H"
  ],
  BR: [
    "H",
    "hB"
  ],
  BS: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  BT: [
    "h",
    "H"
  ],
  BW: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  BY: [
    "H",
    "h"
  ],
  BZ: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  CA: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  CC: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  CD: [
    "hB",
    "H"
  ],
  CF: [
    "H",
    "h",
    "hB"
  ],
  CG: [
    "H",
    "hB"
  ],
  CH: [
    "H",
    "hB",
    "h"
  ],
  CI: [
    "H",
    "hB"
  ],
  CK: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  CL: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  CM: [
    "H",
    "h",
    "hB"
  ],
  CN: [
    "H",
    "hB",
    "hb",
    "h"
  ],
  CO: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  CP: [
    "H"
  ],
  CR: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  CU: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  CV: [
    "H",
    "hB"
  ],
  CW: [
    "H",
    "hB"
  ],
  CX: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  CY: [
    "h",
    "H",
    "hb",
    "hB"
  ],
  CZ: [
    "H"
  ],
  DE: [
    "H",
    "hB"
  ],
  DG: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  DJ: [
    "h",
    "H"
  ],
  DK: [
    "H"
  ],
  DM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  DO: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  DZ: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  EA: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  EC: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  EE: [
    "H",
    "hB"
  ],
  EG: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  EH: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  ER: [
    "h",
    "H"
  ],
  ES: [
    "H",
    "hB",
    "h",
    "hb"
  ],
  ET: [
    "hB",
    "hb",
    "h",
    "H"
  ],
  FI: [
    "H"
  ],
  FJ: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  FK: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  FM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  FO: [
    "H",
    "h"
  ],
  FR: [
    "H",
    "hB"
  ],
  GA: [
    "H",
    "hB"
  ],
  GB: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  GD: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  GE: [
    "H",
    "hB",
    "h"
  ],
  GF: [
    "H",
    "hB"
  ],
  GG: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  GH: [
    "h",
    "H"
  ],
  GI: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  GL: [
    "H",
    "h"
  ],
  GM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  GN: [
    "H",
    "hB"
  ],
  GP: [
    "H",
    "hB"
  ],
  GQ: [
    "H",
    "hB",
    "h",
    "hb"
  ],
  GR: [
    "h",
    "H",
    "hb",
    "hB"
  ],
  GT: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  GU: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  GW: [
    "H",
    "hB"
  ],
  GY: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  HK: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  HN: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  HR: [
    "H",
    "hB"
  ],
  HU: [
    "H",
    "h"
  ],
  IC: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  ID: [
    "H"
  ],
  IE: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  IL: [
    "H",
    "hB"
  ],
  IM: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  IN: [
    "h",
    "H"
  ],
  IO: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  IQ: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  IR: [
    "hB",
    "H"
  ],
  IS: [
    "H"
  ],
  IT: [
    "H",
    "hB"
  ],
  JE: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  JM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  JO: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  JP: [
    "H",
    "K",
    "h"
  ],
  KE: [
    "hB",
    "hb",
    "H",
    "h"
  ],
  KG: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  KH: [
    "hB",
    "h",
    "H",
    "hb"
  ],
  KI: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  KM: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  KN: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  KP: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  KR: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  KW: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  KY: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  KZ: [
    "H",
    "hB"
  ],
  LA: [
    "H",
    "hb",
    "hB",
    "h"
  ],
  LB: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  LC: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  LI: [
    "H",
    "hB",
    "h"
  ],
  LK: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  LR: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  LS: [
    "h",
    "H"
  ],
  LT: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  LU: [
    "H",
    "h",
    "hB"
  ],
  LV: [
    "H",
    "hB",
    "hb",
    "h"
  ],
  LY: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  MA: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  MC: [
    "H",
    "hB"
  ],
  MD: [
    "H",
    "hB"
  ],
  ME: [
    "H",
    "hB",
    "h"
  ],
  MF: [
    "H",
    "hB"
  ],
  MG: [
    "H",
    "h"
  ],
  MH: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  MK: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  ML: [
    "H"
  ],
  MM: [
    "hB",
    "hb",
    "H",
    "h"
  ],
  MN: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  MO: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  MP: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  MQ: [
    "H",
    "hB"
  ],
  MR: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  MS: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  MT: [
    "H",
    "h"
  ],
  MU: [
    "H",
    "h"
  ],
  MV: [
    "H",
    "h"
  ],
  MW: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  MX: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  MY: [
    "hb",
    "hB",
    "h",
    "H"
  ],
  MZ: [
    "H",
    "hB"
  ],
  NA: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  NC: [
    "H",
    "hB"
  ],
  NE: [
    "H"
  ],
  NF: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  NG: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  NI: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  NL: [
    "H",
    "hB"
  ],
  NO: [
    "H",
    "h"
  ],
  NP: [
    "H",
    "h",
    "hB"
  ],
  NR: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  NU: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  NZ: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  OM: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  PA: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  PE: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  PF: [
    "H",
    "h",
    "hB"
  ],
  PG: [
    "h",
    "H"
  ],
  PH: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  PK: [
    "h",
    "hB",
    "H"
  ],
  PL: [
    "H",
    "h"
  ],
  PM: [
    "H",
    "hB"
  ],
  PN: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  PR: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  PS: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  PT: [
    "H",
    "hB"
  ],
  PW: [
    "h",
    "H"
  ],
  PY: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  QA: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  RE: [
    "H",
    "hB"
  ],
  RO: [
    "H",
    "hB"
  ],
  RS: [
    "H",
    "hB",
    "h"
  ],
  RU: [
    "H"
  ],
  RW: [
    "H",
    "h"
  ],
  SA: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  SB: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  SC: [
    "H",
    "h",
    "hB"
  ],
  SD: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  SE: [
    "H"
  ],
  SG: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  SH: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  SI: [
    "H",
    "hB"
  ],
  SJ: [
    "H"
  ],
  SK: [
    "H"
  ],
  SL: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  SM: [
    "H",
    "h",
    "hB"
  ],
  SN: [
    "H",
    "h",
    "hB"
  ],
  SO: [
    "h",
    "H"
  ],
  SR: [
    "H",
    "hB"
  ],
  SS: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  ST: [
    "H",
    "hB"
  ],
  SV: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  SX: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  SY: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  SZ: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  TA: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  TC: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  TD: [
    "h",
    "H",
    "hB"
  ],
  TF: [
    "H",
    "h",
    "hB"
  ],
  TG: [
    "H",
    "hB"
  ],
  TH: [
    "H",
    "h"
  ],
  TJ: [
    "H",
    "h"
  ],
  TL: [
    "H",
    "hB",
    "hb",
    "h"
  ],
  TM: [
    "H",
    "h"
  ],
  TN: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  TO: [
    "h",
    "H"
  ],
  TR: [
    "H",
    "hB"
  ],
  TT: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  TW: [
    "hB",
    "hb",
    "h",
    "H"
  ],
  TZ: [
    "hB",
    "hb",
    "H",
    "h"
  ],
  UA: [
    "H",
    "hB",
    "h"
  ],
  UG: [
    "hB",
    "hb",
    "H",
    "h"
  ],
  UM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  US: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  UY: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  UZ: [
    "H",
    "hB",
    "h"
  ],
  VA: [
    "H",
    "h",
    "hB"
  ],
  VC: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  VE: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  VG: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  VI: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  VN: [
    "H",
    "h"
  ],
  VU: [
    "h",
    "H"
  ],
  WF: [
    "H",
    "hB"
  ],
  WS: [
    "h",
    "H"
  ],
  XK: [
    "H",
    "hB",
    "h"
  ],
  YE: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  YT: [
    "H",
    "hB"
  ],
  ZA: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  ZM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  ZW: [
    "H",
    "h"
  ],
  "af-ZA": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  "ar-001": [
    "h",
    "hB",
    "hb",
    "H"
  ],
  "ca-ES": [
    "H",
    "h",
    "hB"
  ],
  "en-001": [
    "h",
    "hb",
    "H",
    "hB"
  ],
  "en-HK": [
    "h",
    "hb",
    "H",
    "hB"
  ],
  "en-IL": [
    "H",
    "h",
    "hb",
    "hB"
  ],
  "en-MY": [
    "h",
    "hb",
    "H",
    "hB"
  ],
  "es-BR": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  "es-ES": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  "es-GQ": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  "fr-CA": [
    "H",
    "h",
    "hB"
  ],
  "gl-ES": [
    "H",
    "h",
    "hB"
  ],
  "gu-IN": [
    "hB",
    "hb",
    "h",
    "H"
  ],
  "hi-IN": [
    "hB",
    "h",
    "H"
  ],
  "it-CH": [
    "H",
    "h",
    "hB"
  ],
  "it-IT": [
    "H",
    "h",
    "hB"
  ],
  "kn-IN": [
    "hB",
    "h",
    "H"
  ],
  "ml-IN": [
    "hB",
    "h",
    "H"
  ],
  "mr-IN": [
    "hB",
    "hb",
    "h",
    "H"
  ],
  "pa-IN": [
    "hB",
    "hb",
    "h",
    "H"
  ],
  "ta-IN": [
    "hB",
    "h",
    "hb",
    "H"
  ],
  "te-IN": [
    "hB",
    "h",
    "H"
  ],
  "zu-ZA": [
    "H",
    "hB",
    "hb",
    "h"
  ]
};
function uf(e, t) {
  for (var r = "", n = 0; n < e.length; n++) {
    var i = e.charAt(n);
    if (i === "j") {
      for (var a = 0; n + 1 < e.length && e.charAt(n + 1) === i; )
        a++, n++;
      var o = 1 + (a & 1), l = a < 2 ? 1 : 3 + (a >> 1), s = "a", u = cf(t);
      for ((u == "H" || u == "k") && (l = 0); l-- > 0; )
        r += s;
      for (; o-- > 0; )
        r = u + r;
    } else i === "J" ? r += "H" : r += i;
  }
  return r;
}
function cf(e) {
  var t = e.hourCycle;
  if (t === void 0 && // @ts-ignore hourCycle(s) is not identified yet
  e.hourCycles && // @ts-ignore
  e.hourCycles.length && (t = e.hourCycles[0]), t)
    switch (t) {
      case "h24":
        return "k";
      case "h23":
        return "H";
      case "h12":
        return "h";
      case "h11":
        return "K";
      default:
        throw new Error("Invalid hourCycle");
    }
  var r = e.language, n;
  r !== "root" && (n = e.maximize().region);
  var i = Fn[n || ""] || Fn[r || ""] || Fn["".concat(r, "-001")] || Fn["001"];
  return i[0];
}
var Li, ff = new RegExp("^".concat(Gs.source, "*")), df = new RegExp("".concat(Gs.source, "*$"));
function Y(e, t) {
  return { start: e, end: t };
}
var hf = !!String.prototype.startsWith && "_a".startsWith("a", 1), vf = !!String.fromCodePoint, pf = !!Object.fromEntries, mf = !!String.prototype.codePointAt, gf = !!String.prototype.trimStart, bf = !!String.prototype.trimEnd, _f = !!Number.isSafeInteger, yf = _f ? Number.isSafeInteger : function(e) {
  return typeof e == "number" && isFinite(e) && Math.floor(e) === e && Math.abs(e) <= 9007199254740991;
}, ta = !0;
try {
  var Ef = Xs("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  ta = ((Li = Ef.exec("a")) === null || Li === void 0 ? void 0 : Li[0]) === "a";
} catch {
  ta = !1;
}
var co = hf ? (
  // Native
  function(t, r, n) {
    return t.startsWith(r, n);
  }
) : (
  // For IE11
  function(t, r, n) {
    return t.slice(n, n + r.length) === r;
  }
), ra = vf ? String.fromCodePoint : (
  // IE11
  function() {
    for (var t = [], r = 0; r < arguments.length; r++)
      t[r] = arguments[r];
    for (var n = "", i = t.length, a = 0, o; i > a; ) {
      if (o = t[a++], o > 1114111)
        throw RangeError(o + " is not a valid code point");
      n += o < 65536 ? String.fromCharCode(o) : String.fromCharCode(((o -= 65536) >> 10) + 55296, o % 1024 + 56320);
    }
    return n;
  }
), fo = (
  // native
  pf ? Object.fromEntries : (
    // Ponyfill
    function(t) {
      for (var r = {}, n = 0, i = t; n < i.length; n++) {
        var a = i[n], o = a[0], l = a[1];
        r[o] = l;
      }
      return r;
    }
  )
), zs = mf ? (
  // Native
  function(t, r) {
    return t.codePointAt(r);
  }
) : (
  // IE 11
  function(t, r) {
    var n = t.length;
    if (!(r < 0 || r >= n)) {
      var i = t.charCodeAt(r), a;
      return i < 55296 || i > 56319 || r + 1 === n || (a = t.charCodeAt(r + 1)) < 56320 || a > 57343 ? i : (i - 55296 << 10) + (a - 56320) + 65536;
    }
  }
), wf = gf ? (
  // Native
  function(t) {
    return t.trimStart();
  }
) : (
  // Ponyfill
  function(t) {
    return t.replace(ff, "");
  }
), Af = bf ? (
  // Native
  function(t) {
    return t.trimEnd();
  }
) : (
  // Ponyfill
  function(t) {
    return t.replace(df, "");
  }
);
function Xs(e, t) {
  return new RegExp(e, t);
}
var na;
if (ta) {
  var ho = Xs("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  na = function(t, r) {
    var n;
    ho.lastIndex = r;
    var i = ho.exec(t);
    return (n = i[1]) !== null && n !== void 0 ? n : "";
  };
} else
  na = function(t, r) {
    for (var n = []; ; ) {
      var i = zs(t, r);
      if (i === void 0 || Ws(i) || If(i))
        break;
      n.push(i), r += i >= 65536 ? 2 : 1;
    }
    return ra.apply(void 0, n);
  };
var Sf = (
  /** @class */
  function() {
    function e(t, r) {
      r === void 0 && (r = {}), this.message = t, this.position = { offset: 0, line: 1, column: 1 }, this.ignoreTag = !!r.ignoreTag, this.locale = r.locale, this.requiresOtherClause = !!r.requiresOtherClause, this.shouldParseSkeletons = !!r.shouldParseSkeletons;
    }
    return e.prototype.parse = function() {
      if (this.offset() !== 0)
        throw Error("parser can only be used once");
      return this.parseMessage(0, "", !1);
    }, e.prototype.parseMessage = function(t, r, n) {
      for (var i = []; !this.isEOF(); ) {
        var a = this.char();
        if (a === 123) {
          var o = this.parseArgument(t, n);
          if (o.err)
            return o;
          i.push(o.val);
        } else {
          if (a === 125 && t > 0)
            break;
          if (a === 35 && (r === "plural" || r === "selectordinal")) {
            var l = this.clonePosition();
            this.bump(), i.push({
              type: pe.pound,
              location: Y(l, this.clonePosition())
            });
          } else if (a === 60 && !this.ignoreTag && this.peek() === 47) {
            if (n)
              break;
            return this.error(X.UNMATCHED_CLOSING_TAG, Y(this.clonePosition(), this.clonePosition()));
          } else if (a === 60 && !this.ignoreTag && ia(this.peek() || 0)) {
            var o = this.parseTag(t, r);
            if (o.err)
              return o;
            i.push(o.val);
          } else {
            var o = this.parseLiteral(t, r);
            if (o.err)
              return o;
            i.push(o.val);
          }
        }
      }
      return { val: i, err: null };
    }, e.prototype.parseTag = function(t, r) {
      var n = this.clonePosition();
      this.bump();
      var i = this.parseTagName();
      if (this.bumpSpace(), this.bumpIf("/>"))
        return {
          val: {
            type: pe.literal,
            value: "<".concat(i, "/>"),
            location: Y(n, this.clonePosition())
          },
          err: null
        };
      if (this.bumpIf(">")) {
        var a = this.parseMessage(t + 1, r, !0);
        if (a.err)
          return a;
        var o = a.val, l = this.clonePosition();
        if (this.bumpIf("</")) {
          if (this.isEOF() || !ia(this.char()))
            return this.error(X.INVALID_TAG, Y(l, this.clonePosition()));
          var s = this.clonePosition(), u = this.parseTagName();
          return i !== u ? this.error(X.UNMATCHED_CLOSING_TAG, Y(s, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
            val: {
              type: pe.tag,
              value: i,
              children: o,
              location: Y(n, this.clonePosition())
            },
            err: null
          } : this.error(X.INVALID_TAG, Y(l, this.clonePosition())));
        } else
          return this.error(X.UNCLOSED_TAG, Y(n, this.clonePosition()));
      } else
        return this.error(X.INVALID_TAG, Y(n, this.clonePosition()));
    }, e.prototype.parseTagName = function() {
      var t = this.offset();
      for (this.bump(); !this.isEOF() && Cf(this.char()); )
        this.bump();
      return this.message.slice(t, this.offset());
    }, e.prototype.parseLiteral = function(t, r) {
      for (var n = this.clonePosition(), i = ""; ; ) {
        var a = this.tryParseQuote(r);
        if (a) {
          i += a;
          continue;
        }
        var o = this.tryParseUnquoted(t, r);
        if (o) {
          i += o;
          continue;
        }
        var l = this.tryParseLeftAngleBracket();
        if (l) {
          i += l;
          continue;
        }
        break;
      }
      var s = Y(n, this.clonePosition());
      return {
        val: { type: pe.literal, value: i, location: s },
        err: null
      };
    }, e.prototype.tryParseLeftAngleBracket = function() {
      return !this.isEOF() && this.char() === 60 && (this.ignoreTag || // If at the opening tag or closing tag position, bail.
      !xf(this.peek() || 0)) ? (this.bump(), "<") : null;
    }, e.prototype.tryParseQuote = function(t) {
      if (this.isEOF() || this.char() !== 39)
        return null;
      switch (this.peek()) {
        case 39:
          return this.bump(), this.bump(), "'";
        case 123:
        case 60:
        case 62:
        case 125:
          break;
        case 35:
          if (t === "plural" || t === "selectordinal")
            break;
          return null;
        default:
          return null;
      }
      this.bump();
      var r = [this.char()];
      for (this.bump(); !this.isEOF(); ) {
        var n = this.char();
        if (n === 39)
          if (this.peek() === 39)
            r.push(39), this.bump();
          else {
            this.bump();
            break;
          }
        else
          r.push(n);
        this.bump();
      }
      return ra.apply(void 0, r);
    }, e.prototype.tryParseUnquoted = function(t, r) {
      if (this.isEOF())
        return null;
      var n = this.char();
      return n === 60 || n === 123 || n === 35 && (r === "plural" || r === "selectordinal") || n === 125 && t > 0 ? null : (this.bump(), ra(n));
    }, e.prototype.parseArgument = function(t, r) {
      var n = this.clonePosition();
      if (this.bump(), this.bumpSpace(), this.isEOF())
        return this.error(X.EXPECT_ARGUMENT_CLOSING_BRACE, Y(n, this.clonePosition()));
      if (this.char() === 125)
        return this.bump(), this.error(X.EMPTY_ARGUMENT, Y(n, this.clonePosition()));
      var i = this.parseIdentifierIfPossible().value;
      if (!i)
        return this.error(X.MALFORMED_ARGUMENT, Y(n, this.clonePosition()));
      if (this.bumpSpace(), this.isEOF())
        return this.error(X.EXPECT_ARGUMENT_CLOSING_BRACE, Y(n, this.clonePosition()));
      switch (this.char()) {
        case 125:
          return this.bump(), {
            val: {
              type: pe.argument,
              // value does not include the opening and closing braces.
              value: i,
              location: Y(n, this.clonePosition())
            },
            err: null
          };
        case 44:
          return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(X.EXPECT_ARGUMENT_CLOSING_BRACE, Y(n, this.clonePosition())) : this.parseArgumentOptions(t, r, i, n);
        default:
          return this.error(X.MALFORMED_ARGUMENT, Y(n, this.clonePosition()));
      }
    }, e.prototype.parseIdentifierIfPossible = function() {
      var t = this.clonePosition(), r = this.offset(), n = na(this.message, r), i = r + n.length;
      this.bumpTo(i);
      var a = this.clonePosition(), o = Y(t, a);
      return { value: n, location: o };
    }, e.prototype.parseArgumentOptions = function(t, r, n, i) {
      var a, o = this.clonePosition(), l = this.parseIdentifierIfPossible().value, s = this.clonePosition();
      switch (l) {
        case "":
          return this.error(X.EXPECT_ARGUMENT_TYPE, Y(o, s));
        case "number":
        case "date":
        case "time": {
          this.bumpSpace();
          var u = null;
          if (this.bumpIf(",")) {
            this.bumpSpace();
            var c = this.clonePosition(), f = this.parseSimpleArgStyleIfPossible();
            if (f.err)
              return f;
            var v = Af(f.val);
            if (v.length === 0)
              return this.error(X.EXPECT_ARGUMENT_STYLE, Y(this.clonePosition(), this.clonePosition()));
            var h = Y(c, this.clonePosition());
            u = { style: v, styleLocation: h };
          }
          var d = this.tryParseArgumentClose(i);
          if (d.err)
            return d;
          var m = Y(i, this.clonePosition());
          if (u && co(u == null ? void 0 : u.style, "::", 0)) {
            var E = wf(u.style.slice(2));
            if (l === "number") {
              var f = this.parseNumberSkeletonFromString(E, u.styleLocation);
              return f.err ? f : {
                val: { type: pe.number, value: n, location: m, style: f.val },
                err: null
              };
            } else {
              if (E.length === 0)
                return this.error(X.EXPECT_DATE_TIME_SKELETON, m);
              var _ = E;
              this.locale && (_ = uf(E, this.locale));
              var v = {
                type: tn.dateTime,
                pattern: _,
                location: u.styleLocation,
                parsedOptions: this.shouldParseSkeletons ? tf(_) : {}
              }, C = l === "date" ? pe.date : pe.time;
              return {
                val: { type: C, value: n, location: m, style: v },
                err: null
              };
            }
          }
          return {
            val: {
              type: l === "number" ? pe.number : l === "date" ? pe.date : pe.time,
              value: n,
              location: m,
              style: (a = u == null ? void 0 : u.style) !== null && a !== void 0 ? a : null
            },
            err: null
          };
        }
        case "plural":
        case "selectordinal":
        case "select": {
          var x = this.clonePosition();
          if (this.bumpSpace(), !this.bumpIf(","))
            return this.error(X.EXPECT_SELECT_ARGUMENT_OPTIONS, Y(x, k({}, x)));
          this.bumpSpace();
          var b = this.parseIdentifierIfPossible(), g = 0;
          if (l !== "select" && b.value === "offset") {
            if (!this.bumpIf(":"))
              return this.error(X.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, Y(this.clonePosition(), this.clonePosition()));
            this.bumpSpace();
            var f = this.tryParseDecimalInteger(X.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, X.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);
            if (f.err)
              return f;
            this.bumpSpace(), b = this.parseIdentifierIfPossible(), g = f.val;
          }
          var S = this.tryParsePluralOrSelectOptions(t, l, r, b);
          if (S.err)
            return S;
          var d = this.tryParseArgumentClose(i);
          if (d.err)
            return d;
          var y = Y(i, this.clonePosition());
          return l === "select" ? {
            val: {
              type: pe.select,
              value: n,
              options: fo(S.val),
              location: y
            },
            err: null
          } : {
            val: {
              type: pe.plural,
              value: n,
              options: fo(S.val),
              offset: g,
              pluralType: l === "plural" ? "cardinal" : "ordinal",
              location: y
            },
            err: null
          };
        }
        default:
          return this.error(X.INVALID_ARGUMENT_TYPE, Y(o, s));
      }
    }, e.prototype.tryParseArgumentClose = function(t) {
      return this.isEOF() || this.char() !== 125 ? this.error(X.EXPECT_ARGUMENT_CLOSING_BRACE, Y(t, this.clonePosition())) : (this.bump(), { val: !0, err: null });
    }, e.prototype.parseSimpleArgStyleIfPossible = function() {
      for (var t = 0, r = this.clonePosition(); !this.isEOF(); ) {
        var n = this.char();
        switch (n) {
          case 39: {
            this.bump();
            var i = this.clonePosition();
            if (!this.bumpUntil("'"))
              return this.error(X.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, Y(i, this.clonePosition()));
            this.bump();
            break;
          }
          case 123: {
            t += 1, this.bump();
            break;
          }
          case 125: {
            if (t > 0)
              t -= 1;
            else
              return {
                val: this.message.slice(r.offset, this.offset()),
                err: null
              };
            break;
          }
          default:
            this.bump();
            break;
        }
      }
      return {
        val: this.message.slice(r.offset, this.offset()),
        err: null
      };
    }, e.prototype.parseNumberSkeletonFromString = function(t, r) {
      var n = [];
      try {
        n = nf(t);
      } catch {
        return this.error(X.INVALID_NUMBER_SKELETON, r);
      }
      return {
        val: {
          type: tn.number,
          tokens: n,
          location: r,
          parsedOptions: this.shouldParseSkeletons ? lf(n) : {}
        },
        err: null
      };
    }, e.prototype.tryParsePluralOrSelectOptions = function(t, r, n, i) {
      for (var a, o = !1, l = [], s = /* @__PURE__ */ new Set(), u = i.value, c = i.location; ; ) {
        if (u.length === 0) {
          var f = this.clonePosition();
          if (r !== "select" && this.bumpIf("=")) {
            var v = this.tryParseDecimalInteger(X.EXPECT_PLURAL_ARGUMENT_SELECTOR, X.INVALID_PLURAL_ARGUMENT_SELECTOR);
            if (v.err)
              return v;
            c = Y(f, this.clonePosition()), u = this.message.slice(f.offset, this.offset());
          } else
            break;
        }
        if (s.has(u))
          return this.error(r === "select" ? X.DUPLICATE_SELECT_ARGUMENT_SELECTOR : X.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, c);
        u === "other" && (o = !0), this.bumpSpace();
        var h = this.clonePosition();
        if (!this.bumpIf("{"))
          return this.error(r === "select" ? X.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : X.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, Y(this.clonePosition(), this.clonePosition()));
        var d = this.parseMessage(t + 1, r, n);
        if (d.err)
          return d;
        var m = this.tryParseArgumentClose(h);
        if (m.err)
          return m;
        l.push([
          u,
          {
            value: d.val,
            location: Y(h, this.clonePosition())
          }
        ]), s.add(u), this.bumpSpace(), a = this.parseIdentifierIfPossible(), u = a.value, c = a.location;
      }
      return l.length === 0 ? this.error(r === "select" ? X.EXPECT_SELECT_ARGUMENT_SELECTOR : X.EXPECT_PLURAL_ARGUMENT_SELECTOR, Y(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !o ? this.error(X.MISSING_OTHER_CLAUSE, Y(this.clonePosition(), this.clonePosition())) : { val: l, err: null };
    }, e.prototype.tryParseDecimalInteger = function(t, r) {
      var n = 1, i = this.clonePosition();
      this.bumpIf("+") || this.bumpIf("-") && (n = -1);
      for (var a = !1, o = 0; !this.isEOF(); ) {
        var l = this.char();
        if (l >= 48 && l <= 57)
          a = !0, o = o * 10 + (l - 48), this.bump();
        else
          break;
      }
      var s = Y(i, this.clonePosition());
      return a ? (o *= n, yf(o) ? { val: o, err: null } : this.error(r, s)) : this.error(t, s);
    }, e.prototype.offset = function() {
      return this.position.offset;
    }, e.prototype.isEOF = function() {
      return this.offset() === this.message.length;
    }, e.prototype.clonePosition = function() {
      return {
        offset: this.position.offset,
        line: this.position.line,
        column: this.position.column
      };
    }, e.prototype.char = function() {
      var t = this.position.offset;
      if (t >= this.message.length)
        throw Error("out of bound");
      var r = zs(this.message, t);
      if (r === void 0)
        throw Error("Offset ".concat(t, " is at invalid UTF-16 code unit boundary"));
      return r;
    }, e.prototype.error = function(t, r) {
      return {
        val: null,
        err: {
          kind: t,
          message: this.message,
          location: r
        }
      };
    }, e.prototype.bump = function() {
      if (!this.isEOF()) {
        var t = this.char();
        t === 10 ? (this.position.line += 1, this.position.column = 1, this.position.offset += 1) : (this.position.column += 1, this.position.offset += t < 65536 ? 1 : 2);
      }
    }, e.prototype.bumpIf = function(t) {
      if (co(this.message, t, this.offset())) {
        for (var r = 0; r < t.length; r++)
          this.bump();
        return !0;
      }
      return !1;
    }, e.prototype.bumpUntil = function(t) {
      var r = this.offset(), n = this.message.indexOf(t, r);
      return n >= 0 ? (this.bumpTo(n), !0) : (this.bumpTo(this.message.length), !1);
    }, e.prototype.bumpTo = function(t) {
      if (this.offset() > t)
        throw Error("targetOffset ".concat(t, " must be greater than or equal to the current offset ").concat(this.offset()));
      for (t = Math.min(t, this.message.length); ; ) {
        var r = this.offset();
        if (r === t)
          break;
        if (r > t)
          throw Error("targetOffset ".concat(t, " is at invalid UTF-16 code unit boundary"));
        if (this.bump(), this.isEOF())
          break;
      }
    }, e.prototype.bumpSpace = function() {
      for (; !this.isEOF() && Ws(this.char()); )
        this.bump();
    }, e.prototype.peek = function() {
      if (this.isEOF())
        return null;
      var t = this.char(), r = this.offset(), n = this.message.charCodeAt(r + (t >= 65536 ? 2 : 1));
      return n ?? null;
    }, e;
  }()
);
function ia(e) {
  return e >= 97 && e <= 122 || e >= 65 && e <= 90;
}
function xf(e) {
  return ia(e) || e === 47;
}
function Cf(e) {
  return e === 45 || e === 46 || e >= 48 && e <= 57 || e === 95 || e >= 97 && e <= 122 || e >= 65 && e <= 90 || e == 183 || e >= 192 && e <= 214 || e >= 216 && e <= 246 || e >= 248 && e <= 893 || e >= 895 && e <= 8191 || e >= 8204 && e <= 8205 || e >= 8255 && e <= 8256 || e >= 8304 && e <= 8591 || e >= 11264 && e <= 12271 || e >= 12289 && e <= 55295 || e >= 63744 && e <= 64975 || e >= 65008 && e <= 65533 || e >= 65536 && e <= 983039;
}
function Ws(e) {
  return e >= 9 && e <= 13 || e === 32 || e === 133 || e >= 8206 && e <= 8207 || e === 8232 || e === 8233;
}
function If(e) {
  return e >= 33 && e <= 35 || e === 36 || e >= 37 && e <= 39 || e === 40 || e === 41 || e === 42 || e === 43 || e === 44 || e === 45 || e >= 46 && e <= 47 || e >= 58 && e <= 59 || e >= 60 && e <= 62 || e >= 63 && e <= 64 || e === 91 || e === 92 || e === 93 || e === 94 || e === 96 || e === 123 || e === 124 || e === 125 || e === 126 || e === 161 || e >= 162 && e <= 165 || e === 166 || e === 167 || e === 169 || e === 171 || e === 172 || e === 174 || e === 176 || e === 177 || e === 182 || e === 187 || e === 191 || e === 215 || e === 247 || e >= 8208 && e <= 8213 || e >= 8214 && e <= 8215 || e === 8216 || e === 8217 || e === 8218 || e >= 8219 && e <= 8220 || e === 8221 || e === 8222 || e === 8223 || e >= 8224 && e <= 8231 || e >= 8240 && e <= 8248 || e === 8249 || e === 8250 || e >= 8251 && e <= 8254 || e >= 8257 && e <= 8259 || e === 8260 || e === 8261 || e === 8262 || e >= 8263 && e <= 8273 || e === 8274 || e === 8275 || e >= 8277 && e <= 8286 || e >= 8592 && e <= 8596 || e >= 8597 && e <= 8601 || e >= 8602 && e <= 8603 || e >= 8604 && e <= 8607 || e === 8608 || e >= 8609 && e <= 8610 || e === 8611 || e >= 8612 && e <= 8613 || e === 8614 || e >= 8615 && e <= 8621 || e === 8622 || e >= 8623 && e <= 8653 || e >= 8654 && e <= 8655 || e >= 8656 && e <= 8657 || e === 8658 || e === 8659 || e === 8660 || e >= 8661 && e <= 8691 || e >= 8692 && e <= 8959 || e >= 8960 && e <= 8967 || e === 8968 || e === 8969 || e === 8970 || e === 8971 || e >= 8972 && e <= 8991 || e >= 8992 && e <= 8993 || e >= 8994 && e <= 9e3 || e === 9001 || e === 9002 || e >= 9003 && e <= 9083 || e === 9084 || e >= 9085 && e <= 9114 || e >= 9115 && e <= 9139 || e >= 9140 && e <= 9179 || e >= 9180 && e <= 9185 || e >= 9186 && e <= 9254 || e >= 9255 && e <= 9279 || e >= 9280 && e <= 9290 || e >= 9291 && e <= 9311 || e >= 9472 && e <= 9654 || e === 9655 || e >= 9656 && e <= 9664 || e === 9665 || e >= 9666 && e <= 9719 || e >= 9720 && e <= 9727 || e >= 9728 && e <= 9838 || e === 9839 || e >= 9840 && e <= 10087 || e === 10088 || e === 10089 || e === 10090 || e === 10091 || e === 10092 || e === 10093 || e === 10094 || e === 10095 || e === 10096 || e === 10097 || e === 10098 || e === 10099 || e === 10100 || e === 10101 || e >= 10132 && e <= 10175 || e >= 10176 && e <= 10180 || e === 10181 || e === 10182 || e >= 10183 && e <= 10213 || e === 10214 || e === 10215 || e === 10216 || e === 10217 || e === 10218 || e === 10219 || e === 10220 || e === 10221 || e === 10222 || e === 10223 || e >= 10224 && e <= 10239 || e >= 10240 && e <= 10495 || e >= 10496 && e <= 10626 || e === 10627 || e === 10628 || e === 10629 || e === 10630 || e === 10631 || e === 10632 || e === 10633 || e === 10634 || e === 10635 || e === 10636 || e === 10637 || e === 10638 || e === 10639 || e === 10640 || e === 10641 || e === 10642 || e === 10643 || e === 10644 || e === 10645 || e === 10646 || e === 10647 || e === 10648 || e >= 10649 && e <= 10711 || e === 10712 || e === 10713 || e === 10714 || e === 10715 || e >= 10716 && e <= 10747 || e === 10748 || e === 10749 || e >= 10750 && e <= 11007 || e >= 11008 && e <= 11055 || e >= 11056 && e <= 11076 || e >= 11077 && e <= 11078 || e >= 11079 && e <= 11084 || e >= 11085 && e <= 11123 || e >= 11124 && e <= 11125 || e >= 11126 && e <= 11157 || e === 11158 || e >= 11159 && e <= 11263 || e >= 11776 && e <= 11777 || e === 11778 || e === 11779 || e === 11780 || e === 11781 || e >= 11782 && e <= 11784 || e === 11785 || e === 11786 || e === 11787 || e === 11788 || e === 11789 || e >= 11790 && e <= 11798 || e === 11799 || e >= 11800 && e <= 11801 || e === 11802 || e === 11803 || e === 11804 || e === 11805 || e >= 11806 && e <= 11807 || e === 11808 || e === 11809 || e === 11810 || e === 11811 || e === 11812 || e === 11813 || e === 11814 || e === 11815 || e === 11816 || e === 11817 || e >= 11818 && e <= 11822 || e === 11823 || e >= 11824 && e <= 11833 || e >= 11834 && e <= 11835 || e >= 11836 && e <= 11839 || e === 11840 || e === 11841 || e === 11842 || e >= 11843 && e <= 11855 || e >= 11856 && e <= 11857 || e === 11858 || e >= 11859 && e <= 11903 || e >= 12289 && e <= 12291 || e === 12296 || e === 12297 || e === 12298 || e === 12299 || e === 12300 || e === 12301 || e === 12302 || e === 12303 || e === 12304 || e === 12305 || e >= 12306 && e <= 12307 || e === 12308 || e === 12309 || e === 12310 || e === 12311 || e === 12312 || e === 12313 || e === 12314 || e === 12315 || e === 12316 || e === 12317 || e >= 12318 && e <= 12319 || e === 12320 || e === 12336 || e === 64830 || e === 64831 || e >= 65093 && e <= 65094;
}
function aa(e) {
  e.forEach(function(t) {
    if (delete t.location, Ns(t) || Us(t))
      for (var r in t.options)
        delete t.options[r].location, aa(t.options[r].value);
    else Ms(t) && Fs(t.style) || (Ds(t) || Bs(t)) && ea(t.style) ? delete t.style.location : ks(t) && aa(t.children);
  });
}
function Rf(e, t) {
  t === void 0 && (t = {}), t = k({ shouldParseSkeletons: !0, requiresOtherClause: !0 }, t);
  var r = new Sf(e, t).parse();
  if (r.err) {
    var n = SyntaxError(X[r.err.kind]);
    throw n.location = r.err.location, n.originalMessage = r.err.message, n;
  }
  return t != null && t.captureLocation || aa(r.val), r.val;
}
var rn;
(function(e) {
  e.MISSING_VALUE = "MISSING_VALUE", e.INVALID_VALUE = "INVALID_VALUE", e.MISSING_INTL_API = "MISSING_INTL_API";
})(rn || (rn = {}));
var yi = (
  /** @class */
  function(e) {
    St(t, e);
    function t(r, n, i) {
      var a = e.call(this, r) || this;
      return a.code = n, a.originalMessage = i, a;
    }
    return t.prototype.toString = function() {
      return "[formatjs Error: ".concat(this.code, "] ").concat(this.message);
    }, t;
  }(Error)
), vo = (
  /** @class */
  function(e) {
    St(t, e);
    function t(r, n, i, a) {
      return e.call(this, 'Invalid values for "'.concat(r, '": "').concat(n, '". Options are "').concat(Object.keys(i).join('", "'), '"'), rn.INVALID_VALUE, a) || this;
    }
    return t;
  }(yi)
), Tf = (
  /** @class */
  function(e) {
    St(t, e);
    function t(r, n, i) {
      return e.call(this, 'Value for "'.concat(r, '" must be of type ').concat(n), rn.INVALID_VALUE, i) || this;
    }
    return t;
  }(yi)
), Of = (
  /** @class */
  function(e) {
    St(t, e);
    function t(r, n) {
      return e.call(this, 'The intl string context variable "'.concat(r, '" was not provided to the string "').concat(n, '"'), rn.MISSING_VALUE, n) || this;
    }
    return t;
  }(yi)
), Xe;
(function(e) {
  e[e.literal = 0] = "literal", e[e.object = 1] = "object";
})(Xe || (Xe = {}));
function Hf(e) {
  return e.length < 2 ? e : e.reduce(function(t, r) {
    var n = t[t.length - 1];
    return !n || n.type !== Xe.literal || r.type !== Xe.literal ? t.push(r) : n.value += r.value, t;
  }, []);
}
function Lf(e) {
  return typeof e == "function";
}
function Jn(e, t, r, n, i, a, o) {
  if (e.length === 1 && oo(e[0]))
    return [
      {
        type: Xe.literal,
        value: e[0].value
      }
    ];
  for (var l = [], s = 0, u = e; s < u.length; s++) {
    var c = u[s];
    if (oo(c)) {
      l.push({
        type: Xe.literal,
        value: c.value
      });
      continue;
    }
    if ($c(c)) {
      typeof a == "number" && l.push({
        type: Xe.literal,
        value: r.getNumberFormat(t).format(a)
      });
      continue;
    }
    var f = c.value;
    if (!(i && f in i))
      throw new Of(f, o);
    var v = i[f];
    if (Kc(c)) {
      (!v || typeof v == "string" || typeof v == "number") && (v = typeof v == "string" || typeof v == "number" ? String(v) : ""), l.push({
        type: typeof v == "string" ? Xe.literal : Xe.object,
        value: v
      });
      continue;
    }
    if (Ds(c)) {
      var h = typeof c.style == "string" ? n.date[c.style] : ea(c.style) ? c.style.parsedOptions : void 0;
      l.push({
        type: Xe.literal,
        value: r.getDateTimeFormat(t, h).format(v)
      });
      continue;
    }
    if (Bs(c)) {
      var h = typeof c.style == "string" ? n.time[c.style] : ea(c.style) ? c.style.parsedOptions : n.time.medium;
      l.push({
        type: Xe.literal,
        value: r.getDateTimeFormat(t, h).format(v)
      });
      continue;
    }
    if (Ms(c)) {
      var h = typeof c.style == "string" ? n.number[c.style] : Fs(c.style) ? c.style.parsedOptions : void 0;
      h && h.scale && (v = v * (h.scale || 1)), l.push({
        type: Xe.literal,
        value: r.getNumberFormat(t, h).format(v)
      });
      continue;
    }
    if (ks(c)) {
      var d = c.children, m = c.value, E = i[m];
      if (!Lf(E))
        throw new Tf(m, "function", o);
      var _ = Jn(d, t, r, n, i, a), C = E(_.map(function(g) {
        return g.value;
      }));
      Array.isArray(C) || (C = [C]), l.push.apply(l, C.map(function(g) {
        return {
          type: typeof g == "string" ? Xe.literal : Xe.object,
          value: g
        };
      }));
    }
    if (Ns(c)) {
      var x = c.options[v] || c.options.other;
      if (!x)
        throw new vo(c.value, v, Object.keys(c.options), o);
      l.push.apply(l, Jn(x.value, t, r, n, i));
      continue;
    }
    if (Us(c)) {
      var x = c.options["=".concat(v)];
      if (!x) {
        if (!Intl.PluralRules)
          throw new yi(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`, rn.MISSING_INTL_API, o);
        var b = r.getPluralRules(t, { type: c.pluralType }).select(v - (c.offset || 0));
        x = c.options[b] || c.options.other;
      }
      if (!x)
        throw new vo(c.value, v, Object.keys(c.options), o);
      l.push.apply(l, Jn(x.value, t, r, n, i, v - (c.offset || 0)));
      continue;
    }
  }
  return Hf(l);
}
function Pf(e, t) {
  return t ? k(k(k({}, e || {}), t || {}), Object.keys(e).reduce(function(r, n) {
    return r[n] = k(k({}, e[n]), t[n] || {}), r;
  }, {})) : e;
}
function Mf(e, t) {
  return t ? Object.keys(e).reduce(function(r, n) {
    return r[n] = Pf(e[n], t[n]), r;
  }, k({}, e)) : e;
}
function Pi(e) {
  return {
    create: function() {
      return {
        get: function(t) {
          return e[t];
        },
        set: function(t, r) {
          e[t] = r;
        }
      };
    }
  };
}
function Df(e) {
  return e === void 0 && (e = {
    number: {},
    dateTime: {},
    pluralRules: {}
  }), {
    getNumberFormat: Oi(function() {
      for (var t, r = [], n = 0; n < arguments.length; n++)
        r[n] = arguments[n];
      return new ((t = Intl.NumberFormat).bind.apply(t, Gr([void 0], r, !1)))();
    }, {
      cache: Pi(e.number),
      strategy: Hi.variadic
    }),
    getDateTimeFormat: Oi(function() {
      for (var t, r = [], n = 0; n < arguments.length; n++)
        r[n] = arguments[n];
      return new ((t = Intl.DateTimeFormat).bind.apply(t, Gr([void 0], r, !1)))();
    }, {
      cache: Pi(e.dateTime),
      strategy: Hi.variadic
    }),
    getPluralRules: Oi(function() {
      for (var t, r = [], n = 0; n < arguments.length; n++)
        r[n] = arguments[n];
      return new ((t = Intl.PluralRules).bind.apply(t, Gr([void 0], r, !1)))();
    }, {
      cache: Pi(e.pluralRules),
      strategy: Hi.variadic
    })
  };
}
var Zs = (
  /** @class */
  function() {
    function e(t, r, n, i) {
      r === void 0 && (r = e.defaultLocale);
      var a = this;
      if (this.formatterCache = {
        number: {},
        dateTime: {},
        pluralRules: {}
      }, this.format = function(s) {
        var u = a.formatToParts(s);
        if (u.length === 1)
          return u[0].value;
        var c = u.reduce(function(f, v) {
          return !f.length || v.type !== Xe.literal || typeof f[f.length - 1] != "string" ? f.push(v.value) : f[f.length - 1] += v.value, f;
        }, []);
        return c.length <= 1 ? c[0] || "" : c;
      }, this.formatToParts = function(s) {
        return Jn(a.ast, a.locales, a.formatters, a.formats, s, void 0, a.message);
      }, this.resolvedOptions = function() {
        var s;
        return {
          locale: ((s = a.resolvedLocale) === null || s === void 0 ? void 0 : s.toString()) || Intl.NumberFormat.supportedLocalesOf(a.locales)[0]
        };
      }, this.getAst = function() {
        return a.ast;
      }, this.locales = r, this.resolvedLocale = e.resolveLocale(r), typeof t == "string") {
        if (this.message = t, !e.__parse)
          throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");
        var o = i || {};
        o.formatters;
        var l = jc(o, ["formatters"]);
        this.ast = e.__parse(t, k(k({}, l), { locale: this.resolvedLocale }));
      } else
        this.ast = t;
      if (!Array.isArray(this.ast))
        throw new TypeError("A message must be provided as a String or AST.");
      this.formats = Mf(e.formats, n), this.formatters = i && i.formatters || Df(this.formatterCache);
    }
    return Object.defineProperty(e, "defaultLocale", {
      get: function() {
        return e.memoizedDefaultLocale || (e.memoizedDefaultLocale = new Intl.NumberFormat().resolvedOptions().locale), e.memoizedDefaultLocale;
      },
      enumerable: !1,
      configurable: !0
    }), e.memoizedDefaultLocale = null, e.resolveLocale = function(t) {
      if (!(typeof Intl.Locale > "u")) {
        var r = Intl.NumberFormat.supportedLocalesOf(t);
        return r.length > 0 ? new Intl.Locale(r[0]) : new Intl.Locale(typeof t == "string" ? t : t[0]);
      }
    }, e.__parse = Rf, e.formats = {
      number: {
        integer: {
          maximumFractionDigits: 0
        },
        currency: {
          style: "currency"
        },
        percent: {
          style: "percent"
        }
      },
      date: {
        short: {
          month: "numeric",
          day: "numeric",
          year: "2-digit"
        },
        medium: {
          month: "short",
          day: "numeric",
          year: "numeric"
        },
        long: {
          month: "long",
          day: "numeric",
          year: "numeric"
        },
        full: {
          weekday: "long",
          month: "long",
          day: "numeric",
          year: "numeric"
        }
      },
      time: {
        short: {
          hour: "numeric",
          minute: "numeric"
        },
        medium: {
          hour: "numeric",
          minute: "numeric",
          second: "numeric"
        },
        long: {
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          timeZoneName: "short"
        },
        full: {
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          timeZoneName: "short"
        }
      }
    }, e;
  }()
);
function Bf(e, t) {
  if (t == null)
    return;
  if (t in e)
    return e[t];
  const r = t.split(".");
  let n = e;
  for (let i = 0; i < r.length; i++)
    if (typeof n == "object") {
      if (i > 0) {
        const a = r.slice(i, r.length).join(".");
        if (a in n) {
          n = n[a];
          break;
        }
      }
      n = n[r[i]];
    } else
      n = void 0;
  return n;
}
const Yt = {}, Nf = (e, t, r) => r && (t in Yt || (Yt[t] = {}), e in Yt[t] || (Yt[t][e] = r), r), Ys = (e, t) => {
  if (t == null)
    return;
  if (t in Yt && e in Yt[t])
    return Yt[t][e];
  const r = Dn(t);
  for (let n = 0; n < r.length; n++) {
    const i = r[n], a = kf(i, e);
    if (a)
      return Nf(e, t, a);
  }
};
let Ia;
const Mn = vt({});
function Uf(e) {
  return Ia[e] || null;
}
function Qs(e) {
  return e in Ia;
}
function kf(e, t) {
  if (!Qs(e))
    return null;
  const r = Uf(e);
  return Bf(r, t);
}
function Ff(e) {
  if (e == null)
    return;
  const t = Dn(e);
  for (let r = 0; r < t.length; r++) {
    const n = t[r];
    if (Qs(n))
      return n;
  }
}
function Js(e, ...t) {
  delete Yt[e], Mn.update((r) => (r[e] = Gc.all([r[e] || {}, ...t]), r));
}
ln(
  [Mn],
  ([e]) => Object.keys(e)
);
Mn.subscribe((e) => Ia = e);
const Kn = {};
function Gf(e, t) {
  Kn[e].delete(t), Kn[e].size === 0 && delete Kn[e];
}
function Ks(e) {
  return Kn[e];
}
function jf(e) {
  return Dn(e).map((t) => {
    const r = Ks(t);
    return [t, r ? [...r] : []];
  }).filter(([, t]) => t.length > 0);
}
function ni(e) {
  return e == null ? !1 : Dn(e).some(
    (t) => {
      var r;
      return (r = Ks(t)) == null ? void 0 : r.size;
    }
  );
}
function Vf(e, t) {
  return Promise.all(
    t.map((n) => (Gf(e, n), n().then((i) => i.default || i)))
  ).then((n) => Js(e, ...n));
}
const vn = {};
function $s(e) {
  if (!ni(e))
    return e in vn ? vn[e] : Promise.resolve();
  const t = jf(e);
  return vn[e] = Promise.all(
    t.map(
      ([r, n]) => Vf(r, n)
    )
  ).then(() => {
    if (ni(e))
      return $s(e);
    delete vn[e];
  }), vn[e];
}
var po = Object.getOwnPropertySymbols, qf = Object.prototype.hasOwnProperty, zf = Object.prototype.propertyIsEnumerable, Xf = (e, t) => {
  var r = {};
  for (var n in e)
    qf.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && po)
    for (var n of po(e))
      t.indexOf(n) < 0 && zf.call(e, n) && (r[n] = e[n]);
  return r;
};
const Wf = {
  number: {
    scientific: { notation: "scientific" },
    engineering: { notation: "engineering" },
    compactLong: { notation: "compact", compactDisplay: "long" },
    compactShort: { notation: "compact", compactDisplay: "short" }
  },
  date: {
    short: { month: "numeric", day: "numeric", year: "2-digit" },
    medium: { month: "short", day: "numeric", year: "numeric" },
    long: { month: "long", day: "numeric", year: "numeric" },
    full: { weekday: "long", month: "long", day: "numeric", year: "numeric" }
  },
  time: {
    short: { hour: "numeric", minute: "numeric" },
    medium: { hour: "numeric", minute: "numeric", second: "numeric" },
    long: {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      timeZoneName: "short"
    },
    full: {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      timeZoneName: "short"
    }
  }
};
function Zf({ locale: e, id: t }) {
  console.warn(
    `[svelte-i18n] The message "${t}" was not found in "${Dn(
      e
    ).join('", "')}".${ni(ar()) ? `

Note: there are at least one loader still registered to this locale that wasn't executed.` : ""}`
  );
}
const Yf = {
  fallbackLocale: null,
  loadingDelay: 200,
  formats: Wf,
  warnOnMissingMessages: !0,
  handleMissingMessage: void 0,
  ignoreTag: !0
}, bn = Yf;
function nn() {
  return bn;
}
function Qf(e) {
  const t = e, { formats: r } = t, n = Xf(t, ["formats"]);
  let i = e.fallbackLocale;
  if (e.initialLocale)
    try {
      Zs.resolveLocale(e.initialLocale) && (i = e.initialLocale);
    } catch {
      console.warn(
        `[svelte-i18n] The initial locale "${e.initialLocale}" is not a valid locale.`
      );
    }
  return n.warnOnMissingMessages && (delete n.warnOnMissingMessages, n.handleMissingMessage == null ? n.handleMissingMessage = Zf : console.warn(
    '[svelte-i18n] The "warnOnMissingMessages" option is deprecated. Please use the "handleMissingMessage" option instead.'
  )), Object.assign(bn, n, { initialLocale: i }), r && ("number" in r && Object.assign(bn.formats.number, r.number), "date" in r && Object.assign(bn.formats.date, r.date), "time" in r && Object.assign(bn.formats.time, r.time)), Ir.set(i);
}
const Mi = vt(!1);
var Jf = Object.defineProperty, Kf = Object.defineProperties, $f = Object.getOwnPropertyDescriptors, mo = Object.getOwnPropertySymbols, ed = Object.prototype.hasOwnProperty, td = Object.prototype.propertyIsEnumerable, go = (e, t, r) => t in e ? Jf(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, rd = (e, t) => {
  for (var r in t || (t = {}))
    ed.call(t, r) && go(e, r, t[r]);
  if (mo)
    for (var r of mo(t))
      td.call(t, r) && go(e, r, t[r]);
  return e;
}, nd = (e, t) => Kf(e, $f(t));
let oa;
const ii = vt(null);
function bo(e) {
  return e.split("-").map((t, r, n) => n.slice(0, r + 1).join("-")).reverse();
}
function Dn(e, t = nn().fallbackLocale) {
  const r = bo(e);
  return t ? [.../* @__PURE__ */ new Set([...r, ...bo(t)])] : r;
}
function ar() {
  return oa ?? void 0;
}
ii.subscribe((e) => {
  oa = e ?? void 0, typeof window < "u" && e != null && document.documentElement.setAttribute("lang", e);
});
const id = (e) => {
  if (e && Ff(e) && ni(e)) {
    const { loadingDelay: t } = nn();
    let r;
    return typeof window < "u" && ar() != null && t ? r = window.setTimeout(
      () => Mi.set(!0),
      t
    ) : Mi.set(!0), $s(e).then(() => {
      ii.set(e);
    }).finally(() => {
      clearTimeout(r), Mi.set(!1);
    });
  }
  return ii.set(e);
}, Ir = nd(rd({}, ii), {
  set: id
}), ad = () => typeof window > "u" ? null : window.navigator.language || window.navigator.languages[0], Ei = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => {
    const i = JSON.stringify(n);
    return i in t ? t[i] : t[i] = e(n);
  };
};
var od = Object.defineProperty, ai = Object.getOwnPropertySymbols, el = Object.prototype.hasOwnProperty, tl = Object.prototype.propertyIsEnumerable, _o = (e, t, r) => t in e ? od(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, Ra = (e, t) => {
  for (var r in t || (t = {}))
    el.call(t, r) && _o(e, r, t[r]);
  if (ai)
    for (var r of ai(t))
      tl.call(t, r) && _o(e, r, t[r]);
  return e;
}, un = (e, t) => {
  var r = {};
  for (var n in e)
    el.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && ai)
    for (var n of ai(e))
      t.indexOf(n) < 0 && tl.call(e, n) && (r[n] = e[n]);
  return r;
};
const Cn = (e, t) => {
  const { formats: r } = nn();
  if (e in r && t in r[e])
    return r[e][t];
  throw new Error(`[svelte-i18n] Unknown "${t}" ${e} format.`);
}, sd = Ei(
  (e) => {
    var t = e, { locale: r, format: n } = t, i = un(t, ["locale", "format"]);
    if (r == null)
      throw new Error('[svelte-i18n] A "locale" must be set to format numbers');
    return n && (i = Cn("number", n)), new Intl.NumberFormat(r, i);
  }
), ld = Ei(
  (e) => {
    var t = e, { locale: r, format: n } = t, i = un(t, ["locale", "format"]);
    if (r == null)
      throw new Error('[svelte-i18n] A "locale" must be set to format dates');
    return n ? i = Cn("date", n) : Object.keys(i).length === 0 && (i = Cn("date", "short")), new Intl.DateTimeFormat(r, i);
  }
), ud = Ei(
  (e) => {
    var t = e, { locale: r, format: n } = t, i = un(t, ["locale", "format"]);
    if (r == null)
      throw new Error(
        '[svelte-i18n] A "locale" must be set to format time values'
      );
    return n ? i = Cn("time", n) : Object.keys(i).length === 0 && (i = Cn("time", "short")), new Intl.DateTimeFormat(r, i);
  }
), cd = (e = {}) => {
  var t = e, {
    locale: r = ar()
  } = t, n = un(t, [
    "locale"
  ]);
  return sd(Ra({ locale: r }, n));
}, fd = (e = {}) => {
  var t = e, {
    locale: r = ar()
  } = t, n = un(t, [
    "locale"
  ]);
  return ld(Ra({ locale: r }, n));
}, dd = (e = {}) => {
  var t = e, {
    locale: r = ar()
  } = t, n = un(t, [
    "locale"
  ]);
  return ud(Ra({ locale: r }, n));
}, hd = Ei(
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  (e, t = ar()) => new Zs(e, t, nn().formats, {
    ignoreTag: nn().ignoreTag
  })
), vd = (e, t = {}) => {
  var r, n, i, a;
  let o = t;
  typeof e == "object" && (o = e, e = o.id);
  const {
    values: l,
    locale: s = ar(),
    default: u
  } = o;
  if (s == null)
    throw new Error(
      "[svelte-i18n] Cannot format a message without first setting the initial locale."
    );
  let c = Ys(e, s);
  if (!c)
    c = (a = (i = (n = (r = nn()).handleMissingMessage) == null ? void 0 : n.call(r, { locale: s, id: e, defaultValue: u })) != null ? i : u) != null ? a : e;
  else if (typeof c != "string")
    return console.warn(
      `[svelte-i18n] Message with id "${e}" must be of type "string", found: "${typeof c}". Gettin its value through the "$format" method is deprecated; use the "json" method instead.`
    ), c;
  if (!l)
    return c;
  let f = c;
  try {
    f = hd(c, s).format(l);
  } catch (v) {
    v instanceof Error && console.warn(
      `[svelte-i18n] Message "${e}" has syntax error:`,
      v.message
    );
  }
  return f;
}, pd = (e, t) => dd(t).format(e), md = (e, t) => fd(t).format(e), gd = (e, t) => cd(t).format(e), bd = (e, t = ar()) => Ys(e, t), _d = ln([Ir, Mn], () => vd);
ln([Ir], () => pd);
ln([Ir], () => md);
ln([Ir], () => gd);
ln([Ir, Mn], () => bd);
function yd(e, t) {
  Object.entries(e).forEach(([a, o]) => {
    Js(a, o);
  });
  const r = localStorage.getItem("language"), n = "en", i = r ?? ad();
  console.log("Initial: Setting the language to", i), Qf({
    fallbackLocale: n,
    initialLocale: i
  }), window.addEventListener("oscd-language-changed", (a) => {
    const o = a;
    if (!o.detail.language) {
      console.error("No translations for language");
      return;
    }
    console.log("Updating the language to", o.detail.language), Ir.set(o.detail.language);
  });
}
const Ed = "Ort", wd = "Suche", Ad = "UUID", Sd = "Name", xd = "Autor", Cd = "Typ", Id = "Version", Rd = "Geändert am", Td = "Von", Od = "Bis", Hd = "Suchergebnis", Ld = "Ort auswählen", Pd = "Filter Hinzufügen", Md = "Filtertypen", Dd = {
  location: Ed,
  search: wd,
  uuid: Ad,
  name: Sd,
  author: xd,
  type: Cd,
  version: Id,
  changed_at: Rd,
  from: Td,
  to: Od,
  search_result: Hd,
  select_location: Ld,
  add_filter: Pd,
  filter_types: Md
}, Bd = "Location", Nd = "Search", Ud = "UUID", kd = "Name", Fd = "Author", Gd = "Type", jd = "Version", Vd = "Changed At", qd = "From", zd = "To", Xd = "Search Result", Wd = "Select Location", Zd = "Add Filter", Yd = "Filter Types", Qd = {
  location: Bd,
  search: Nd,
  uuid: Ud,
  name: kd,
  author: Fd,
  type: Gd,
  version: jd,
  changed_at: Vd,
  from: qd,
  to: zd,
  search_result: Xd,
  select_location: Wd,
  add_filter: Zd,
  filter_types: Yd
};
function Se(e) {
  return typeof e == "function";
}
function rl(e) {
  var t = function(n) {
    Error.call(n), n.stack = new Error().stack;
  }, r = e(t);
  return r.prototype = Object.create(Error.prototype), r.prototype.constructor = r, r;
}
var Di = rl(function(e) {
  return function(r) {
    e(this), this.message = r ? r.length + ` errors occurred during unsubscription:
` + r.map(function(n, i) {
      return i + 1 + ") " + n.toString();
    }).join(`
  `) : "", this.name = "UnsubscriptionError", this.errors = r;
  };
});
function yo(e, t) {
  if (e) {
    var r = e.indexOf(t);
    0 <= r && e.splice(r, 1);
  }
}
var Ta = function() {
  function e(t) {
    this.initialTeardown = t, this.closed = !1, this._parentage = null, this._finalizers = null;
  }
  return e.prototype.unsubscribe = function() {
    var t, r, n, i, a;
    if (!this.closed) {
      this.closed = !0;
      var o = this._parentage;
      if (o)
        if (this._parentage = null, Array.isArray(o))
          try {
            for (var l = Ht(o), s = l.next(); !s.done; s = l.next()) {
              var u = s.value;
              u.remove(this);
            }
          } catch (m) {
            t = { error: m };
          } finally {
            try {
              s && !s.done && (r = l.return) && r.call(l);
            } finally {
              if (t) throw t.error;
            }
          }
        else
          o.remove(this);
      var c = this.initialTeardown;
      if (Se(c))
        try {
          c();
        } catch (m) {
          a = m instanceof Di ? m.errors : [m];
        }
      var f = this._finalizers;
      if (f) {
        this._finalizers = null;
        try {
          for (var v = Ht(f), h = v.next(); !h.done; h = v.next()) {
            var d = h.value;
            try {
              Eo(d);
            } catch (m) {
              a = a ?? [], m instanceof Di ? a = Gr(Gr([], $i(a)), $i(m.errors)) : a.push(m);
            }
          }
        } catch (m) {
          n = { error: m };
        } finally {
          try {
            h && !h.done && (i = v.return) && i.call(v);
          } finally {
            if (n) throw n.error;
          }
        }
      }
      if (a)
        throw new Di(a);
    }
  }, e.prototype.add = function(t) {
    var r;
    if (t && t !== this)
      if (this.closed)
        Eo(t);
      else {
        if (t instanceof e) {
          if (t.closed || t._hasParent(this))
            return;
          t._addParent(this);
        }
        (this._finalizers = (r = this._finalizers) !== null && r !== void 0 ? r : []).push(t);
      }
  }, e.prototype._hasParent = function(t) {
    var r = this._parentage;
    return r === t || Array.isArray(r) && r.includes(t);
  }, e.prototype._addParent = function(t) {
    var r = this._parentage;
    this._parentage = Array.isArray(r) ? (r.push(t), r) : r ? [r, t] : t;
  }, e.prototype._removeParent = function(t) {
    var r = this._parentage;
    r === t ? this._parentage = null : Array.isArray(r) && yo(r, t);
  }, e.prototype.remove = function(t) {
    var r = this._finalizers;
    r && yo(r, t), t instanceof e && t._removeParent(this);
  }, e.EMPTY = function() {
    var t = new e();
    return t.closed = !0, t;
  }(), e;
}();
Ta.EMPTY;
function nl(e) {
  return e instanceof Ta || e && "closed" in e && Se(e.remove) && Se(e.add) && Se(e.unsubscribe);
}
function Eo(e) {
  Se(e) ? e() : e.unsubscribe();
}
var Jd = {
  Promise: void 0
}, Kd = {
  setTimeout: function(e, t) {
    for (var r = [], n = 2; n < arguments.length; n++)
      r[n - 2] = arguments[n];
    return setTimeout.apply(void 0, Gr([e, t], $i(r)));
  },
  clearTimeout: function(e) {
    return clearTimeout(e);
  },
  delegate: void 0
};
function il(e) {
  Kd.setTimeout(function() {
    throw e;
  });
}
function wo() {
}
function $d(e) {
  e();
}
var Oa = function(e) {
  St(t, e);
  function t(r) {
    var n = e.call(this) || this;
    return n.isStopped = !1, r ? (n.destination = r, nl(r) && r.add(n)) : n.destination = rh, n;
  }
  return t.create = function(r, n, i) {
    return new sa(r, n, i);
  }, t.prototype.next = function(r) {
    this.isStopped || this._next(r);
  }, t.prototype.error = function(r) {
    this.isStopped || (this.isStopped = !0, this._error(r));
  }, t.prototype.complete = function() {
    this.isStopped || (this.isStopped = !0, this._complete());
  }, t.prototype.unsubscribe = function() {
    this.closed || (this.isStopped = !0, e.prototype.unsubscribe.call(this), this.destination = null);
  }, t.prototype._next = function(r) {
    this.destination.next(r);
  }, t.prototype._error = function(r) {
    try {
      this.destination.error(r);
    } finally {
      this.unsubscribe();
    }
  }, t.prototype._complete = function() {
    try {
      this.destination.complete();
    } finally {
      this.unsubscribe();
    }
  }, t;
}(Ta), eh = function() {
  function e(t) {
    this.partialObserver = t;
  }
  return e.prototype.next = function(t) {
    var r = this.partialObserver;
    if (r.next)
      try {
        r.next(t);
      } catch (n) {
        Gn(n);
      }
  }, e.prototype.error = function(t) {
    var r = this.partialObserver;
    if (r.error)
      try {
        r.error(t);
      } catch (n) {
        Gn(n);
      }
    else
      Gn(t);
  }, e.prototype.complete = function() {
    var t = this.partialObserver;
    if (t.complete)
      try {
        t.complete();
      } catch (r) {
        Gn(r);
      }
  }, e;
}(), sa = function(e) {
  St(t, e);
  function t(r, n, i) {
    var a = e.call(this) || this, o;
    return Se(r) || !r ? o = {
      next: r ?? void 0,
      error: n ?? void 0,
      complete: i ?? void 0
    } : o = r, a.destination = new eh(o), a;
  }
  return t;
}(Oa);
function Gn(e) {
  il(e);
}
function th(e) {
  throw e;
}
var rh = {
  closed: !0,
  next: wo,
  error: th,
  complete: wo
}, Ha = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}();
function al(e) {
  return e;
}
function nh(e) {
  return e.length === 0 ? al : e.length === 1 ? e[0] : function(r) {
    return e.reduce(function(n, i) {
      return i(n);
    }, r);
  };
}
var xt = function() {
  function e(t) {
    t && (this._subscribe = t);
  }
  return e.prototype.lift = function(t) {
    var r = new e();
    return r.source = this, r.operator = t, r;
  }, e.prototype.subscribe = function(t, r, n) {
    var i = this, a = ah(t) ? t : new sa(t, r, n);
    return $d(function() {
      var o = i, l = o.operator, s = o.source;
      a.add(l ? l.call(a, s) : s ? i._subscribe(a) : i._trySubscribe(a));
    }), a;
  }, e.prototype._trySubscribe = function(t) {
    try {
      return this._subscribe(t);
    } catch (r) {
      t.error(r);
    }
  }, e.prototype.forEach = function(t, r) {
    var n = this;
    return r = Ao(r), new r(function(i, a) {
      var o = new sa({
        next: function(l) {
          try {
            t(l);
          } catch (s) {
            a(s), o.unsubscribe();
          }
        },
        error: a,
        complete: i
      });
      n.subscribe(o);
    });
  }, e.prototype._subscribe = function(t) {
    var r;
    return (r = this.source) === null || r === void 0 ? void 0 : r.subscribe(t);
  }, e.prototype[Ha] = function() {
    return this;
  }, e.prototype.pipe = function() {
    for (var t = [], r = 0; r < arguments.length; r++)
      t[r] = arguments[r];
    return nh(t)(this);
  }, e.prototype.toPromise = function(t) {
    var r = this;
    return t = Ao(t), new t(function(n, i) {
      var a;
      r.subscribe(function(o) {
        return a = o;
      }, function(o) {
        return i(o);
      }, function() {
        return n(a);
      });
    });
  }, e.create = function(t) {
    return new e(t);
  }, e;
}();
function Ao(e) {
  var t;
  return (t = e ?? Jd.Promise) !== null && t !== void 0 ? t : Promise;
}
function ih(e) {
  return e && Se(e.next) && Se(e.error) && Se(e.complete);
}
function ah(e) {
  return e && e instanceof Oa || ih(e) && nl(e);
}
function oh(e) {
  return Se(e == null ? void 0 : e.lift);
}
function cn(e) {
  return function(t) {
    if (oh(t))
      return t.lift(function(r) {
        try {
          return e(r, this);
        } catch (n) {
          this.error(n);
        }
      });
    throw new TypeError("Unable to lift unknown Observable type");
  };
}
function an(e, t, r, n, i) {
  return new sh(e, t, r, n, i);
}
var sh = function(e) {
  St(t, e);
  function t(r, n, i, a, o, l) {
    var s = e.call(this, r) || this;
    return s.onFinalize = o, s.shouldUnsubscribe = l, s._next = n ? function(u) {
      try {
        n(u);
      } catch (c) {
        r.error(c);
      }
    } : e.prototype._next, s._error = a ? function(u) {
      try {
        a(u);
      } catch (c) {
        r.error(c);
      } finally {
        this.unsubscribe();
      }
    } : e.prototype._error, s._complete = i ? function() {
      try {
        i();
      } catch (u) {
        r.error(u);
      } finally {
        this.unsubscribe();
      }
    } : e.prototype._complete, s;
  }
  return t.prototype.unsubscribe = function() {
    var r;
    if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
      var n = this.closed;
      e.prototype.unsubscribe.call(this), !n && ((r = this.onFinalize) === null || r === void 0 || r.call(this));
    }
  }, t;
}(Oa), lh = new xt(function(e) {
  return e.complete();
});
function uh(e) {
  return e && Se(e.schedule);
}
function ch(e) {
  return e[e.length - 1];
}
function fh(e) {
  return uh(ch(e)) ? e.pop() : void 0;
}
var ol = function(e) {
  return e && typeof e.length == "number" && typeof e != "function";
};
function sl(e) {
  return Se(e == null ? void 0 : e.then);
}
function ll(e) {
  return Se(e[Ha]);
}
function ul(e) {
  return Symbol.asyncIterator && Se(e == null ? void 0 : e[Symbol.asyncIterator]);
}
function cl(e) {
  return new TypeError("You provided " + (e !== null && typeof e == "object" ? "an invalid object" : "'" + e + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
}
function dh() {
  return typeof Symbol != "function" || !Symbol.iterator ? "@@iterator" : Symbol.iterator;
}
var fl = dh();
function dl(e) {
  return Se(e == null ? void 0 : e[fl]);
}
function hl(e) {
  return Vc(this, arguments, function() {
    var r, n, i, a;
    return Ca(this, function(o) {
      switch (o.label) {
        case 0:
          r = e.getReader(), o.label = 1;
        case 1:
          o.trys.push([1, , 9, 10]), o.label = 2;
        case 2:
          return [4, jr(r.read())];
        case 3:
          return n = o.sent(), i = n.value, a = n.done, a ? [4, jr(void 0)] : [3, 5];
        case 4:
          return [2, o.sent()];
        case 5:
          return [4, jr(i)];
        case 6:
          return [4, o.sent()];
        case 7:
          return o.sent(), [3, 2];
        case 8:
          return [3, 10];
        case 9:
          return r.releaseLock(), [7];
        case 10:
          return [2];
      }
    });
  });
}
function vl(e) {
  return Se(e == null ? void 0 : e.getReader);
}
function Bn(e) {
  if (e instanceof xt)
    return e;
  if (e != null) {
    if (ll(e))
      return hh(e);
    if (ol(e))
      return vh(e);
    if (sl(e))
      return ph(e);
    if (ul(e))
      return pl(e);
    if (dl(e))
      return mh(e);
    if (vl(e))
      return gh(e);
  }
  throw cl(e);
}
function hh(e) {
  return new xt(function(t) {
    var r = e[Ha]();
    if (Se(r.subscribe))
      return r.subscribe(t);
    throw new TypeError("Provided object does not correctly implement Symbol.observable");
  });
}
function vh(e) {
  return new xt(function(t) {
    for (var r = 0; r < e.length && !t.closed; r++)
      t.next(e[r]);
    t.complete();
  });
}
function ph(e) {
  return new xt(function(t) {
    e.then(function(r) {
      t.closed || (t.next(r), t.complete());
    }, function(r) {
      return t.error(r);
    }).then(null, il);
  });
}
function mh(e) {
  return new xt(function(t) {
    var r, n;
    try {
      for (var i = Ht(e), a = i.next(); !a.done; a = i.next()) {
        var o = a.value;
        if (t.next(o), t.closed)
          return;
      }
    } catch (l) {
      r = { error: l };
    } finally {
      try {
        a && !a.done && (n = i.return) && n.call(i);
      } finally {
        if (r) throw r.error;
      }
    }
    t.complete();
  });
}
function pl(e) {
  return new xt(function(t) {
    bh(e, t).catch(function(r) {
      return t.error(r);
    });
  });
}
function gh(e) {
  return pl(hl(e));
}
function bh(e, t) {
  var r, n, i, a;
  return Hs(this, void 0, void 0, function() {
    var o, l;
    return Ca(this, function(s) {
      switch (s.label) {
        case 0:
          s.trys.push([0, 5, 6, 11]), r = qc(e), s.label = 1;
        case 1:
          return [4, r.next()];
        case 2:
          if (n = s.sent(), !!n.done) return [3, 4];
          if (o = n.value, t.next(o), t.closed)
            return [2];
          s.label = 3;
        case 3:
          return [3, 1];
        case 4:
          return [3, 11];
        case 5:
          return l = s.sent(), i = { error: l }, [3, 11];
        case 6:
          return s.trys.push([6, , 9, 10]), n && !n.done && (a = r.return) ? [4, a.call(r)] : [3, 8];
        case 7:
          s.sent(), s.label = 8;
        case 8:
          return [3, 10];
        case 9:
          if (i) throw i.error;
          return [7];
        case 10:
          return [7];
        case 11:
          return t.complete(), [2];
      }
    });
  });
}
function _r(e, t, r, n, i) {
  n === void 0 && (n = 0), i === void 0 && (i = !1);
  var a = t.schedule(function() {
    r(), i ? e.add(this.schedule(null, n)) : this.unsubscribe();
  }, n);
  if (e.add(a), !i)
    return a;
}
function ml(e, t) {
  return t === void 0 && (t = 0), cn(function(r, n) {
    r.subscribe(an(n, function(i) {
      return _r(n, e, function() {
        return n.next(i);
      }, t);
    }, function() {
      return _r(n, e, function() {
        return n.complete();
      }, t);
    }, function(i) {
      return _r(n, e, function() {
        return n.error(i);
      }, t);
    }));
  });
}
function gl(e, t) {
  return t === void 0 && (t = 0), cn(function(r, n) {
    n.add(e.schedule(function() {
      return r.subscribe(n);
    }, t));
  });
}
function _h(e, t) {
  return Bn(e).pipe(gl(t), ml(t));
}
function yh(e, t) {
  return Bn(e).pipe(gl(t), ml(t));
}
function Eh(e, t) {
  return new xt(function(r) {
    var n = 0;
    return t.schedule(function() {
      n === e.length ? r.complete() : (r.next(e[n++]), r.closed || this.schedule());
    });
  });
}
function wh(e, t) {
  return new xt(function(r) {
    var n;
    return _r(r, t, function() {
      n = e[fl](), _r(r, t, function() {
        var i, a, o;
        try {
          i = n.next(), a = i.value, o = i.done;
        } catch (l) {
          r.error(l);
          return;
        }
        o ? r.complete() : r.next(a);
      }, 0, !0);
    }), function() {
      return Se(n == null ? void 0 : n.return) && n.return();
    };
  });
}
function bl(e, t) {
  if (!e)
    throw new Error("Iterable cannot be null");
  return new xt(function(r) {
    _r(r, t, function() {
      var n = e[Symbol.asyncIterator]();
      _r(r, t, function() {
        n.next().then(function(i) {
          i.done ? r.complete() : r.next(i.value);
        });
      }, 0, !0);
    });
  });
}
function Ah(e, t) {
  return bl(hl(e), t);
}
function Sh(e, t) {
  if (e != null) {
    if (ll(e))
      return _h(e, t);
    if (ol(e))
      return Eh(e, t);
    if (sl(e))
      return yh(e, t);
    if (ul(e))
      return bl(e, t);
    if (dl(e))
      return wh(e, t);
    if (vl(e))
      return Ah(e, t);
  }
  throw cl(e);
}
function xh(e, t) {
  return t ? Sh(e, t) : Bn(e);
}
function _l() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t];
  var r = fh(e);
  return xh(e, r);
}
function et(e, t) {
  return cn(function(r, n) {
    var i = 0;
    r.subscribe(an(n, function(a) {
      n.next(e.call(t, a, i++));
    }));
  });
}
function Ch(e, t, r, n, i, a, o, l) {
  var s = [], u = 0, c = 0, f = !1, v = function() {
    f && !s.length && !u && t.complete();
  }, h = function(m) {
    return u < n ? d(m) : s.push(m);
  }, d = function(m) {
    u++;
    var E = !1;
    Bn(r(m, c++)).subscribe(an(t, function(_) {
      t.next(_);
    }, function() {
      E = !0;
    }, void 0, function() {
      if (E)
        try {
          u--;
          for (var _ = function() {
            var C = s.shift();
            o || d(C);
          }; s.length && u < n; )
            _();
          v();
        } catch (C) {
          t.error(C);
        }
    }));
  };
  return e.subscribe(an(t, h, function() {
    f = !0, v();
  })), function() {
  };
}
function la(e, t, r) {
  return r === void 0 && (r = 1 / 0), Se(t) ? la(function(n, i) {
    return et(function(a, o) {
      return t(n, a, i, o);
    })(Bn(e(n, i)));
  }, r) : (typeof t == "number" && (r = t), cn(function(n, i) {
    return Ch(n, i, e, r);
  }));
}
function yl(e, t) {
  return Se(t) ? la(e, t, 1) : la(e, 1);
}
function Ih(e) {
  return e <= 0 ? function() {
    return lh;
  } : cn(function(t, r) {
    var n = 0;
    t.subscribe(an(r, function(i) {
      ++n <= e && (r.next(i), e <= n && r.complete());
    }));
  });
}
function Rh(e, t, r) {
  var n = Se(e) || t || r ? { next: e, error: t, complete: r } : e;
  return n ? cn(function(i, a) {
    var o;
    (o = n.subscribe) === null || o === void 0 || o.call(n);
    var l = !0;
    i.subscribe(an(a, function(s) {
      var u;
      (u = n.next) === null || u === void 0 || u.call(n, s), a.next(s);
    }, function() {
      var s;
      l = !1, (s = n.complete) === null || s === void 0 || s.call(n), a.complete();
    }, function(s) {
      var u;
      l = !1, (u = n.error) === null || u === void 0 || u.call(n, s), a.error(s);
    }, function() {
      var s, u;
      l && ((s = n.unsubscribe) === null || s === void 0 || s.call(n)), (u = n.finalize) === null || u === void 0 || u.call(n);
    }));
  }) : al;
}
function El(e) {
  switch (e.responseType) {
    case "json": {
      if ("response" in e)
        return e.response;
      var t = e;
      return JSON.parse(t.responseText);
    }
    case "document":
      return e.responseXML;
    case "text":
    default: {
      if ("response" in e)
        return e.response;
      var t = e;
      return t.responseText;
    }
  }
}
var Th = /* @__PURE__ */ function() {
  function e(t, r, n, i) {
    i === void 0 && (i = "download_load"), this.originalEvent = t, this.xhr = r, this.request = n, this.type = i;
    var a = r.status, o = r.responseType;
    this.status = a ?? 0, this.responseType = o ?? "";
    var l = r.getAllResponseHeaders();
    this.responseHeaders = l ? l.split(`
`).reduce(function(c, f) {
      var v = f.indexOf(": ");
      return c[f.slice(0, v)] = f.slice(v + 2), c;
    }, {}) : {}, this.response = El(r);
    var s = t.loaded, u = t.total;
    this.loaded = s, this.total = u;
  }
  return e;
}(), oi = rl(function(e) {
  return function(r, n, i) {
    this.message = r, this.name = "AjaxError", this.xhr = n, this.request = i, this.status = n.status, this.responseType = n.responseType;
    var a;
    try {
      a = El(n);
    } catch {
      a = n.responseText;
    }
    this.response = a;
  };
}), Oh = function() {
  function e(t, r) {
    return oi.call(this, "ajax timeout", t, r), this.name = "AjaxTimeoutError", this;
  }
  return e.prototype = Object.create(oi.prototype), e;
}();
function Hh(e, t) {
  return or({ method: "GET", url: e, headers: t });
}
function Lh(e, t, r) {
  return or({ method: "POST", url: e, body: t, headers: r });
}
function Ph(e, t) {
  return or({ method: "DELETE", url: e, headers: t });
}
function Mh(e, t, r) {
  return or({ method: "PUT", url: e, body: t, headers: r });
}
function Dh(e, t, r) {
  return or({ method: "PATCH", url: e, body: t, headers: r });
}
var Bh = et(function(e) {
  return e.response;
});
function Nh(e, t) {
  return Bh(or({
    method: "GET",
    url: e,
    headers: t
  }));
}
var or = function() {
  var e = function(t) {
    var r = typeof t == "string" ? {
      url: t
    } : t;
    return kh(r);
  };
  return e.get = Hh, e.post = Lh, e.delete = Ph, e.put = Mh, e.patch = Dh, e.getJSON = Nh, e;
}(), Uh = "upload", So = "download", Bi = "loadstart", Ni = "progress", xo = "load";
function kh(e) {
  return new xt(function(t) {
    var r, n, i = k({ async: !0, crossDomain: !1, withCredentials: !1, method: "GET", timeout: 0, responseType: "json" }, e), a = i.queryParams, o = i.body, l = i.headers, s = i.url;
    if (!s)
      throw new TypeError("url is required");
    if (a) {
      var u;
      if (s.includes("?")) {
        var c = s.split("?");
        if (2 < c.length)
          throw new TypeError("invalid url");
        u = new URLSearchParams(c[1]), new URLSearchParams(a).forEach(function(D, G) {
          return u.set(G, D);
        }), s = c[0] + "?" + u;
      } else
        u = new URLSearchParams(a), s = s + "?" + u;
    }
    var f = {};
    if (l)
      for (var v in l)
        l.hasOwnProperty(v) && (f[v.toLowerCase()] = l[v]);
    var h = i.crossDomain;
    !h && !("x-requested-with" in f) && (f["x-requested-with"] = "XMLHttpRequest");
    var d = i.withCredentials, m = i.xsrfCookieName, E = i.xsrfHeaderName;
    if ((d || !h) && m && E) {
      var _ = (n = (r = document == null ? void 0 : document.cookie.match(new RegExp("(^|;\\s*)(" + m + ")=([^;]*)"))) === null || r === void 0 ? void 0 : r.pop()) !== null && n !== void 0 ? n : "";
      _ && (f[E] = _);
    }
    var C = Fh(o, f), x = k(k({}, i), {
      url: s,
      headers: f,
      body: C
    }), b;
    b = e.createXHR ? e.createXHR() : new XMLHttpRequest();
    {
      var g = e.progressSubscriber, S = e.includeDownloadProgress, y = S === void 0 ? !1 : S, H = e.includeUploadProgress, N = H === void 0 ? !1 : H, L = function(D, G) {
        b.addEventListener(D, function() {
          var Q, M = G();
          (Q = g == null ? void 0 : g.error) === null || Q === void 0 || Q.call(g, M), t.error(M);
        });
      };
      L("timeout", function() {
        return new Oh(b, x);
      }), L("abort", function() {
        return new oi("aborted", b, x);
      });
      var W = function(D, G) {
        return new Th(G, b, x, D + "_" + G.type);
      }, re = function(D, G, Q) {
        D.addEventListener(G, function(M) {
          t.next(W(Q, M));
        });
      };
      N && [Bi, Ni, xo].forEach(function(D) {
        return re(b.upload, D, Uh);
      }), g && [Bi, Ni].forEach(function(D) {
        return b.upload.addEventListener(D, function(G) {
          var Q;
          return (Q = g == null ? void 0 : g.next) === null || Q === void 0 ? void 0 : Q.call(g, G);
        });
      }), y && [Bi, Ni].forEach(function(D) {
        return re(b, D, So);
      });
      var $ = function(D) {
        var G = "ajax error" + (D ? " " + D : "");
        t.error(new oi(G, b, x));
      };
      b.addEventListener("error", function(D) {
        var G;
        (G = g == null ? void 0 : g.error) === null || G === void 0 || G.call(g, D), $();
      }), b.addEventListener(xo, function(D) {
        var G, Q, M = b.status;
        if (M < 400) {
          (G = g == null ? void 0 : g.complete) === null || G === void 0 || G.call(g);
          var A = void 0;
          try {
            A = W(So, D);
          } catch (P) {
            t.error(P);
            return;
          }
          t.next(A), t.complete();
        } else
          (Q = g == null ? void 0 : g.error) === null || Q === void 0 || Q.call(g, D), $(M);
      });
    }
    var ge = x.user, B = x.method, se = x.async;
    ge ? b.open(B, s, se, ge, x.password) : b.open(B, s, se), se && (b.timeout = x.timeout, b.responseType = x.responseType), "withCredentials" in b && (b.withCredentials = x.withCredentials);
    for (var v in f)
      f.hasOwnProperty(v) && b.setRequestHeader(v, f[v]);
    return C ? b.send(C) : b.send(), function() {
      b && b.readyState !== 4 && b.abort();
    };
  });
}
function Fh(e, t) {
  var r;
  if (!e || typeof e == "string" || Xh(e) || Wh(e) || jh(e) || Vh(e) || qh(e) || Zh(e))
    return e;
  if (zh(e))
    return e.buffer;
  if (typeof e == "object")
    return t["content-type"] = (r = t["content-type"]) !== null && r !== void 0 ? r : "application/json;charset=utf-8", JSON.stringify(e);
  throw new TypeError("Unknown body type");
}
var Gh = Object.prototype.toString;
function La(e, t) {
  return Gh.call(e) === "[object " + t + "]";
}
function jh(e) {
  return La(e, "ArrayBuffer");
}
function Vh(e) {
  return La(e, "File");
}
function qh(e) {
  return La(e, "Blob");
}
function zh(e) {
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView(e);
}
function Xh(e) {
  return typeof FormData < "u" && e instanceof FormData;
}
function Wh(e) {
  return typeof URLSearchParams < "u" && e instanceof URLSearchParams;
}
function Zh(e) {
  return typeof ReadableStream < "u" && e instanceof ReadableStream;
}
let Yh = class {
  constructor(t, r, n) {
    this.url = t, this.variableConfiguration = r, this.description = n;
  }
  /**
   * Sets the value of the variables of this server.
   *
   * @param variableConfiguration a partial variable configuration for the variables contained in the url
   */
  setVariables(t) {
    Object.assign(this.variableConfiguration, t);
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
    let t = this.url;
    for (const r in this.variableConfiguration)
      if (this.variableConfiguration.hasOwnProperty(r)) {
        const n = new RegExp("{" + r + "}", "g");
        t = t.replace(n, this.variableConfiguration[r]);
      }
    return t;
  }
};
const Qh = new Yh("https://demo.compas.energy", {}, "DSOM Versatel Production URL"), Jh = [Qh], Kh = Jh[0].getUrl();
let wl = class {
  constructor(t = {}) {
    this.configuration = t;
  }
  get basePath() {
    return this.configuration.basePath ?? Kh;
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
    const { apiKey: t } = this.configuration;
    return t ? typeof t == "string" ? () => t : t : void 0;
  }
  get accessToken() {
    const { accessToken: t } = this.configuration;
    return t ? typeof t == "string" ? () => t : t : void 0;
  }
}, $h = class {
  constructor(t = new wl()) {
    this.configuration = t, this.middleware = [], this.withMiddleware = (r) => {
      const n = this.clone();
      return n.middleware = n.middleware.concat(r), n;
    }, this.withPreMiddleware = (r) => this.withMiddleware(r.map((n) => ({ pre: n }))), this.withPostMiddleware = (r) => this.withMiddleware(r.map((n) => ({ post: n }))), this.createRequestArgs = ({ url: r, query: n, method: i, headers: a, body: o, responseType: l }) => ({
      url: `${this.configuration.basePath}${r}${n && Object.keys(n).length ? `?${ev(n)}` : ""}`,
      method: i,
      headers: a,
      body: o instanceof FormData ? o : JSON.stringify(o),
      responseType: l ?? "json"
    }), this.rxjsRequest = (r) => _l(r).pipe(
      et((n) => (this.middleware.filter((i) => i.pre).forEach((i) => n = i.pre(n)), n)),
      yl(
        (n) => or(n).pipe(
          et((i) => (this.middleware.filter((a) => a.post).forEach((a) => i = a.post(i)), i))
        )
      )
    ), this.clone = () => Object.assign(Object.create(Object.getPrototypeOf(this)), this), this.middleware = t.middleware;
  }
  request(t, r) {
    return this.rxjsRequest(this.createRequestArgs(t)).pipe(
      et((n) => {
        const { status: i, response: a } = n;
        if (i >= 200 && i < 300)
          return (r == null ? void 0 : r.response) === "raw" ? n : a;
        throw n;
      })
    );
  }
};
const cr = (e) => encodeURIComponent(`${e}`), ev = (e) => Object.entries(e).map(
  ([t, r]) => r instanceof Array ? r.map((n) => `${cr(t)}=${cr(n)}`).join("&") : `${cr(t)}=${cr(r)}`
).join("&"), jn = (e, t, r) => {
  if (e == null)
    throw new Error(`Parameter "${t}" was null or undefined when calling "${r}".`);
};
class tv extends $h {
  retrieveDataResourceByVersion({ id: t, version: r }, n) {
    jn(t, "id", "retrieveDataResourceByVersion"), jn(r, "version", "retrieveDataResourceByVersion");
    const i = {};
    return this.request({
      url: "/api/scl/{id}/version/{version}".replace("{id}", cr(t)).replace("{version}", cr(r)),
      method: "GET",
      headers: i,
      responseType: "blob"
    }, n == null ? void 0 : n.responseOpts);
  }
  retrieveDataResourceHistory({ id: t }, r) {
    jn(t, "id", "retrieveDataResourceHistory");
    const n = {};
    return this.request({
      url: "/api/scl/{id}/versions".replace("{id}", cr(t)),
      method: "GET",
      headers: n
    }, r == null ? void 0 : r.responseOpts);
  }
  searchForResources({ dataResourceSearch: t }, r) {
    jn(t, "dataResourceSearch", "searchForResources");
    const n = {
      "Content-Type": "application/json"
    };
    return this.request({
      url: "/api/scl/search",
      method: "POST",
      headers: n,
      body: t
    }, r == null ? void 0 : r.responseOpts);
  }
}
class Pa {
  constructor(t, r, n, i, a, o, l, s, u) {
    this.uuid = t, this.name = r, this.author = n, this.type = i, this.changedAt = a, this.version = o, this.available = l, this.deleted = s, this.location = u;
  }
  static from(t) {
    return new Pa(
      t.uuid,
      t.name,
      t.author,
      t.type,
      t.changedAt,
      t.version,
      t.available,
      t.deleted,
      t.location
    );
  }
}
class rv {
  constructor(t, r, n) {
    this.url = t, this.variableConfiguration = r, this.description = n;
  }
  /**
   * Sets the value of the variables of this server.
   *
   * @param variableConfiguration a partial variable configuration for the variables contained in the url
   */
  setVariables(t) {
    Object.assign(this.variableConfiguration, t);
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
    let t = this.url;
    for (const r in this.variableConfiguration)
      if (this.variableConfiguration.hasOwnProperty(r)) {
        const n = new RegExp("{" + r + "}", "g");
        t = t.replace(n, this.variableConfiguration[r]);
      }
    return t;
  }
}
const nv = new rv("https://demo.compas.energy", {}, "DSOM Versatel Production URL"), iv = [nv], av = iv[0].getUrl();
class Al {
  constructor(t = {}) {
    this.configuration = t;
  }
  get basePath() {
    return this.configuration.basePath ?? av;
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
    const { apiKey: t } = this.configuration;
    return t ? typeof t == "string" ? () => t : t : void 0;
  }
  get accessToken() {
    const { accessToken: t } = this.configuration;
    return t ? typeof t == "string" ? () => t : t : void 0;
  }
}
class ov {
  constructor(t = new Al()) {
    this.configuration = t, this.middleware = [], this.withMiddleware = (r) => {
      const n = this.clone();
      return n.middleware = n.middleware.concat(r), n;
    }, this.withPreMiddleware = (r) => this.withMiddleware(r.map((n) => ({ pre: n }))), this.withPostMiddleware = (r) => this.withMiddleware(r.map((n) => ({ post: n }))), this.createRequestArgs = ({ url: r, query: n, method: i, headers: a, body: o, responseType: l }) => ({
      url: `${this.configuration.basePath}${r}${n && Object.keys(n).length ? `?${sv(n)}` : ""}`,
      method: i,
      headers: a,
      body: o instanceof FormData ? o : JSON.stringify(o),
      responseType: l ?? "json"
    }), this.rxjsRequest = (r) => _l(r).pipe(
      et((n) => (this.middleware.filter((i) => i.pre).forEach((i) => n = i.pre(n)), n)),
      yl(
        (n) => or(n).pipe(
          et((i) => (this.middleware.filter((a) => a.post).forEach((a) => i = a.post(i)), i))
        )
      )
    ), this.clone = () => Object.assign(Object.create(Object.getPrototypeOf(this)), this), this.middleware = t.middleware;
  }
  request(t, r) {
    return this.rxjsRequest(this.createRequestArgs(t)).pipe(
      et((n) => {
        const { status: i, response: a } = n;
        if (i >= 200 && i < 300)
          return (r == null ? void 0 : r.response) === "raw" ? n : a;
        throw n;
      })
    );
  }
}
const _t = (e) => encodeURIComponent(`${e}`), sv = (e) => Object.entries(e).map(
  ([t, r]) => r instanceof Array ? r.map((n) => `${_t(t)}=${_t(n)}`).join("&") : `${_t(t)}=${_t(r)}`
).join("&"), Dt = (e, t, r) => {
  if (e == null)
    throw new Error(`Parameter "${t}" was null or undefined when calling "${r}".`);
};
class lv extends ov {
  assignResourceToLocation({ locationId: t, uuid: r }, n) {
    Dt(t, "locationId", "assignResourceToLocation"), Dt(r, "uuid", "assignResourceToLocation");
    const i = {};
    return this.request({
      url: "/api/locations/{locationId}/resources/{uuid}/assign".replace("{locationId}", _t(t)).replace("{uuid}", _t(r)),
      method: "POST",
      headers: i
    }, n == null ? void 0 : n.responseOpts);
  }
  createLocation({ location: t }, r) {
    Dt(t, "location", "createLocation");
    const n = {
      "Content-Type": "application/json"
    };
    return this.request({
      url: "/api/locations",
      method: "POST",
      headers: n,
      body: t
    }, r == null ? void 0 : r.responseOpts);
  }
  deleteLocation({ locationId: t }, r) {
    Dt(t, "locationId", "deleteLocation");
    const n = {};
    return this.request({
      url: "/api/locations/{locationId}".replace("{locationId}", _t(t)),
      method: "DELETE",
      headers: n
    }, r == null ? void 0 : r.responseOpts);
  }
  getLocation({ locationId: t }, r) {
    Dt(t, "locationId", "getLocation");
    const n = {};
    return this.request({
      url: "/api/locations/{locationId}".replace("{locationId}", _t(t)),
      method: "GET",
      headers: n
    }, r == null ? void 0 : r.responseOpts);
  }
  getLocations({ page: t, pageSize: r }, n) {
    const i = {}, a = {};
    return t != null && (a.page = t), r != null && (a.pageSize = r), this.request({
      url: "/api/locations",
      method: "GET",
      headers: i,
      query: a
    }, n == null ? void 0 : n.responseOpts);
  }
  unassignResourceFromLocation({ locationId: t, uuid: r }, n) {
    Dt(t, "locationId", "unassignResourceFromLocation"), Dt(r, "uuid", "unassignResourceFromLocation");
    const i = {};
    return this.request({
      url: "/api/locations/{locationId}/resources/{uuid}/unassign".replace("{locationId}", _t(t)).replace("{uuid}", _t(r)),
      method: "POST",
      headers: i
    }, n == null ? void 0 : n.responseOpts);
  }
  updateLocation({ locationId: t, location: r }, n) {
    Dt(t, "locationId", "updateLocation"), Dt(r, "location", "updateLocation");
    const i = {
      "Content-Type": "application/json"
    };
    return this.request({
      url: "/api/locations/{locationId}".replace("{locationId}", _t(t)),
      method: "PUT",
      headers: i,
      body: r
    }, n == null ? void 0 : n.responseOpts);
  }
}
class Ma {
  constructor(t, r, n, i, a) {
    this.uuid = a, this.key = t, this.name = r, this.description = n, this.assignedResources = i;
  }
  static from(t) {
    return new Ma(t.key, t.name, t.description, t.assignedResources, t.uuid);
  }
}
class kr {
  constructor() {
    this.endpoint = "/compas-scl-data-service", this.locationsApiClient = this.createLocationsApiClient(this.endpoint), this.historyApiClient = this.createHistoryApiClient(this.endpoint);
  }
  static getInstance() {
    return kr.instance || (kr.instance = new kr()), kr.instance;
  }
  getLocations(t) {
    return this.locationsApiClient.getLocations({
      page: t == null ? void 0 : t.page,
      pageSize: t == null ? void 0 : t.pageSize
    }).pipe(
      et((r) => r || []),
      et((r) => r.map((n) => Ma.from(n)))
    );
  }
  assignResourceToLocation(t, r) {
    return this.locationsApiClient.assignResourceToLocation({ locationId: t, uuid: r }).pipe(et(() => {
    }));
  }
  unassignResourceFromLocation(t, r) {
    return this.locationsApiClient.unassignResourceFromLocation({ locationId: t, uuid: r }).pipe(et(() => {
    }));
  }
  searchResources(t) {
    return console.log(t), this.historyApiClient.searchForResources({
      dataResourceSearch: this.mapToDataResourceSearch(t)
    }).pipe(
      et((r) => (console.log(r), r.results)),
      et(
        (r) => r.map((n) => Pa.from(n))
      )
    );
  }
  mapToDataResourceSearch(t) {
    return {
      uuid: t.uuid || null,
      type: t.type || null,
      name: t.name || null,
      author: t.author || null,
      location: t.location || null,
      from: t.from || null,
      to: t.to || null
    };
  }
  createLocationsApiClient(t) {
    const r = new Al({
      basePath: t
      // accessToken: authInfo.token,
    });
    return new lv(r);
  }
  createHistoryApiClient(t) {
    const r = new wl({
      basePath: t
      // accessToken: authInfo.token,
    });
    return new tv(r);
  }
}
var kt;
class uv {
  constructor() {
    J(this, kt, vt([]));
  }
  get store() {
    return I(this, kt);
  }
  set(t) {
    I(this, kt).set(t);
  }
  update(t) {
    I(this, kt).update((r) => r.map((n) => n.uuid === t.uuid ? t : n));
  }
  add(t) {
    I(this, kt).update((r) => [...r, t]);
  }
  remove(t) {
    I(this, kt).update((r) => r.filter((n) => n.uuid !== t));
  }
  findById(t) {
    return Ts(I(this, kt)).find((r) => r.uuid === t);
  }
}
kt = new WeakMap();
function wt(e) {
  return Object.entries(e).filter(([t, r]) => t !== "" && r).map(([t]) => t).join(" ");
}
function dt(e, t, r, n = { bubbles: !0 }) {
  if (typeof Event > "u")
    throw new Error("Event not defined.");
  if (!e)
    throw new Error("Tried to dispatch event without element.");
  const i = new CustomEvent(t, Object.assign(Object.assign({}, n), { detail: r }));
  return e == null || e.dispatchEvent(i), i;
}
function cv(e, t) {
  let r = Object.getOwnPropertyNames(e);
  const n = {};
  for (let i = 0; i < r.length; i++) {
    const a = r[i], o = a.indexOf("$");
    o !== -1 && t.indexOf(a.substring(0, o + 1)) !== -1 || t.indexOf(a) === -1 && (n[a] = e[a]);
  }
  return n;
}
function Co(e, t) {
  let r = Object.getOwnPropertyNames(e);
  const n = {};
  for (let i = 0; i < r.length; i++) {
    const a = r[i];
    a.substring(0, t.length) === t && (n[a.substring(t.length)] = e[a]);
  }
  return n;
}
class fv {
  constructor() {
    this.elementMap = /* @__PURE__ */ new Map();
  }
  /**
   * Listen to an event on an element.
   */
  on(t, r, n, i) {
    this.elementMap.has(t) || this.elementMap.set(t, {});
    const a = this.elementMap.get(t);
    if (a == null)
      throw new Error("Event map couldn't be created.");
    r in a || (a[r] = /* @__PURE__ */ new Map()), a[r].set(n, Ju(t, r, n, i));
  }
  /**
   * Unlisten to an event on an element.
   */
  off(t, r, n) {
    const i = this.elementMap.get(t);
    if (i == null || !(r in i))
      return;
    const a = i[r], o = a.get(n);
    o != null && (o(), a.delete(n), a.size === 0 && (delete i[r], Object.keys(i).length === 0 && this.elementMap.delete(t)));
  }
  /**
   * Unlisten to all events managed by this instance.
   */
  clear() {
    this.elementMap.forEach((t, r) => {
      for (let [n, i] of Object.entries(t))
        i.forEach((a, o) => {
          a();
        });
    }), this.elementMap.clear();
  }
}
function j(e, t) {
  let r = [];
  if (t)
    for (let n = 0; n < t.length; n++) {
      const i = t[n], a = Array.isArray(i) ? i[0] : i;
      Array.isArray(i) && i.length > 1 ? r.push(a(e, i[1])) : r.push(a(e));
    }
  return {
    update(n) {
      if ((n && n.length || 0) != r.length)
        throw new Error("You must not change the length of an actions array.");
      if (n)
        for (let i = 0; i < n.length; i++) {
          const a = r[i];
          if (a && a.update) {
            const o = n[i];
            Array.isArray(o) && o.length > 1 ? a.update(o[1]) : a.update();
          }
        }
    },
    destroy() {
      for (let n = 0; n < r.length; n++) {
        const i = r[n];
        i && i.destroy && i.destroy();
      }
    }
  };
}
var Vn;
function dv(e, t) {
  t === void 0 && (t = !1);
  var r = e.CSS, n = Vn;
  if (typeof Vn == "boolean" && !t)
    return Vn;
  var i = r && typeof r.supports == "function";
  if (!i)
    return !1;
  var a = r.supports("--css-vars", "yes"), o = r.supports("(--css-vars: yes)") && r.supports("color", "#00000000");
  return n = a || o, t || (Vn = n), n;
}
function hv(e, t, r) {
  if (!e)
    return { x: 0, y: 0 };
  var n = t.x, i = t.y, a = n + r.left, o = i + r.top, l, s;
  if (e.type === "touchstart") {
    var u = e;
    l = u.changedTouches[0].pageX - a, s = u.changedTouches[0].pageY - o;
  } else {
    var c = e;
    l = c.pageX - a, s = c.pageY - o;
  }
  return { x: l, y: s };
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
var wi = (
  /** @class */
  function() {
    function e(t) {
      t === void 0 && (t = {}), this.adapter = t;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return {};
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return {};
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return {};
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
      get: function() {
        return {};
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.init = function() {
    }, e.prototype.destroy = function() {
    }, e;
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
function vv(e) {
  return e === void 0 && (e = window), pv(e) ? { passive: !0 } : !1;
}
function pv(e) {
  e === void 0 && (e = window);
  var t = !1;
  try {
    var r = {
      // This function will be called when the browser
      // attempts to access the passive property.
      get passive() {
        return t = !0, !1;
      }
    }, n = function() {
    };
    e.document.addEventListener("test", n, r), e.document.removeEventListener("test", n, r);
  } catch {
    t = !1;
  }
  return t;
}
const mv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  applyPassive: vv
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
function gv(e, t) {
  if (e.closest)
    return e.closest(t);
  for (var r = e; r; ) {
    if (Sl(r, t))
      return r;
    r = r.parentElement;
  }
  return null;
}
function Sl(e, t) {
  var r = e.matches || e.webkitMatchesSelector || e.msMatchesSelector;
  return r.call(e, t);
}
function bv(e) {
  var t = e;
  if (t.offsetParent !== null)
    return t.scrollWidth;
  var r = t.cloneNode(!0);
  r.style.setProperty("position", "absolute"), r.style.setProperty("transform", "translate(-9999px, -9999px)"), document.documentElement.appendChild(r);
  var n = r.scrollWidth;
  return document.documentElement.removeChild(r), n;
}
const xl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  closest: gv,
  estimateScrollWidth: bv,
  matches: Sl
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
var _v = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  BG_FOCUSED: "mdc-ripple-upgraded--background-focused",
  FG_ACTIVATION: "mdc-ripple-upgraded--foreground-activation",
  FG_DEACTIVATION: "mdc-ripple-upgraded--foreground-deactivation",
  ROOT: "mdc-ripple-upgraded",
  UNBOUNDED: "mdc-ripple-upgraded--unbounded"
}, yv = {
  VAR_FG_SCALE: "--mdc-ripple-fg-scale",
  VAR_FG_SIZE: "--mdc-ripple-fg-size",
  VAR_FG_TRANSLATE_END: "--mdc-ripple-fg-translate-end",
  VAR_FG_TRANSLATE_START: "--mdc-ripple-fg-translate-start",
  VAR_LEFT: "--mdc-ripple-left",
  VAR_TOP: "--mdc-ripple-top"
}, Io = {
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
var Ro = [
  "touchstart",
  "pointerdown",
  "mousedown",
  "keydown"
], To = [
  "touchend",
  "pointerup",
  "mouseup",
  "contextmenu"
], qn = [], Ev = (
  /** @class */
  function(e) {
    St(t, e);
    function t(r) {
      var n = e.call(this, k(k({}, t.defaultAdapter), r)) || this;
      return n.activationAnimationHasEnded = !1, n.activationTimer = 0, n.fgDeactivationRemovalTimer = 0, n.fgScale = "0", n.frame = { width: 0, height: 0 }, n.initialSize = 0, n.layoutFrame = 0, n.maxRadius = 0, n.unboundedCoords = { left: 0, top: 0 }, n.activationState = n.defaultActivationState(), n.activationTimerCallback = function() {
        n.activationAnimationHasEnded = !0, n.runDeactivationUXLogicIfReady();
      }, n.activateHandler = function(i) {
        n.activateImpl(i);
      }, n.deactivateHandler = function() {
        n.deactivateImpl();
      }, n.focusHandler = function() {
        n.handleFocus();
      }, n.blurHandler = function() {
        n.handleBlur();
      }, n.resizeHandler = function() {
        n.layout();
      }, n;
    }
    return Object.defineProperty(t, "cssClasses", {
      get: function() {
        return _v;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t, "strings", {
      get: function() {
        return yv;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t, "numbers", {
      get: function() {
        return Io;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t, "defaultAdapter", {
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
    }), t.prototype.init = function() {
      var r = this, n = this.supportsPressRipple();
      if (this.registerRootHandlers(n), n) {
        var i = t.cssClasses, a = i.ROOT, o = i.UNBOUNDED;
        requestAnimationFrame(function() {
          r.adapter.addClass(a), r.adapter.isUnbounded() && (r.adapter.addClass(o), r.layoutInternal());
        });
      }
    }, t.prototype.destroy = function() {
      var r = this;
      if (this.supportsPressRipple()) {
        this.activationTimer && (clearTimeout(this.activationTimer), this.activationTimer = 0, this.adapter.removeClass(t.cssClasses.FG_ACTIVATION)), this.fgDeactivationRemovalTimer && (clearTimeout(this.fgDeactivationRemovalTimer), this.fgDeactivationRemovalTimer = 0, this.adapter.removeClass(t.cssClasses.FG_DEACTIVATION));
        var n = t.cssClasses, i = n.ROOT, a = n.UNBOUNDED;
        requestAnimationFrame(function() {
          r.adapter.removeClass(i), r.adapter.removeClass(a), r.removeCssVars();
        });
      }
      this.deregisterRootHandlers(), this.deregisterDeactivationHandlers();
    }, t.prototype.activate = function(r) {
      this.activateImpl(r);
    }, t.prototype.deactivate = function() {
      this.deactivateImpl();
    }, t.prototype.layout = function() {
      var r = this;
      this.layoutFrame && cancelAnimationFrame(this.layoutFrame), this.layoutFrame = requestAnimationFrame(function() {
        r.layoutInternal(), r.layoutFrame = 0;
      });
    }, t.prototype.setUnbounded = function(r) {
      var n = t.cssClasses.UNBOUNDED;
      r ? this.adapter.addClass(n) : this.adapter.removeClass(n);
    }, t.prototype.handleFocus = function() {
      var r = this;
      requestAnimationFrame(function() {
        return r.adapter.addClass(t.cssClasses.BG_FOCUSED);
      });
    }, t.prototype.handleBlur = function() {
      var r = this;
      requestAnimationFrame(function() {
        return r.adapter.removeClass(t.cssClasses.BG_FOCUSED);
      });
    }, t.prototype.supportsPressRipple = function() {
      return this.adapter.browserSupportsCssVars();
    }, t.prototype.defaultActivationState = function() {
      return {
        activationEvent: void 0,
        hasDeactivationUXRun: !1,
        isActivated: !1,
        isProgrammatic: !1,
        wasActivatedByPointer: !1,
        wasElementMadeActive: !1
      };
    }, t.prototype.registerRootHandlers = function(r) {
      var n, i;
      if (r) {
        try {
          for (var a = Ht(Ro), o = a.next(); !o.done; o = a.next()) {
            var l = o.value;
            this.adapter.registerInteractionHandler(l, this.activateHandler);
          }
        } catch (s) {
          n = { error: s };
        } finally {
          try {
            o && !o.done && (i = a.return) && i.call(a);
          } finally {
            if (n) throw n.error;
          }
        }
        this.adapter.isUnbounded() && this.adapter.registerResizeHandler(this.resizeHandler);
      }
      this.adapter.registerInteractionHandler("focus", this.focusHandler), this.adapter.registerInteractionHandler("blur", this.blurHandler);
    }, t.prototype.registerDeactivationHandlers = function(r) {
      var n, i;
      if (r.type === "keydown")
        this.adapter.registerInteractionHandler("keyup", this.deactivateHandler);
      else
        try {
          for (var a = Ht(To), o = a.next(); !o.done; o = a.next()) {
            var l = o.value;
            this.adapter.registerDocumentInteractionHandler(l, this.deactivateHandler);
          }
        } catch (s) {
          n = { error: s };
        } finally {
          try {
            o && !o.done && (i = a.return) && i.call(a);
          } finally {
            if (n) throw n.error;
          }
        }
    }, t.prototype.deregisterRootHandlers = function() {
      var r, n;
      try {
        for (var i = Ht(Ro), a = i.next(); !a.done; a = i.next()) {
          var o = a.value;
          this.adapter.deregisterInteractionHandler(o, this.activateHandler);
        }
      } catch (l) {
        r = { error: l };
      } finally {
        try {
          a && !a.done && (n = i.return) && n.call(i);
        } finally {
          if (r) throw r.error;
        }
      }
      this.adapter.deregisterInteractionHandler("focus", this.focusHandler), this.adapter.deregisterInteractionHandler("blur", this.blurHandler), this.adapter.isUnbounded() && this.adapter.deregisterResizeHandler(this.resizeHandler);
    }, t.prototype.deregisterDeactivationHandlers = function() {
      var r, n;
      this.adapter.deregisterInteractionHandler("keyup", this.deactivateHandler);
      try {
        for (var i = Ht(To), a = i.next(); !a.done; a = i.next()) {
          var o = a.value;
          this.adapter.deregisterDocumentInteractionHandler(o, this.deactivateHandler);
        }
      } catch (l) {
        r = { error: l };
      } finally {
        try {
          a && !a.done && (n = i.return) && n.call(i);
        } finally {
          if (r) throw r.error;
        }
      }
    }, t.prototype.removeCssVars = function() {
      var r = this, n = t.strings, i = Object.keys(n);
      i.forEach(function(a) {
        a.indexOf("VAR_") === 0 && r.adapter.updateCssVariable(n[a], null);
      });
    }, t.prototype.activateImpl = function(r) {
      var n = this;
      if (!this.adapter.isSurfaceDisabled()) {
        var i = this.activationState;
        if (!i.isActivated) {
          var a = this.previousActivationEvent, o = a && r !== void 0 && a.type !== r.type;
          if (!o) {
            i.isActivated = !0, i.isProgrammatic = r === void 0, i.activationEvent = r, i.wasActivatedByPointer = i.isProgrammatic ? !1 : r !== void 0 && (r.type === "mousedown" || r.type === "touchstart" || r.type === "pointerdown");
            var l = r !== void 0 && qn.length > 0 && qn.some(function(s) {
              return n.adapter.containsEventTarget(s);
            });
            if (l) {
              this.resetActivationState();
              return;
            }
            r !== void 0 && (qn.push(r.target), this.registerDeactivationHandlers(r)), i.wasElementMadeActive = this.checkElementMadeActive(r), i.wasElementMadeActive && this.animateActivation(), requestAnimationFrame(function() {
              qn = [], !i.wasElementMadeActive && r !== void 0 && (r.key === " " || r.keyCode === 32) && (i.wasElementMadeActive = n.checkElementMadeActive(r), i.wasElementMadeActive && n.animateActivation()), i.wasElementMadeActive || (n.activationState = n.defaultActivationState());
            });
          }
        }
      }
    }, t.prototype.checkElementMadeActive = function(r) {
      return r !== void 0 && r.type === "keydown" ? this.adapter.isSurfaceActive() : !0;
    }, t.prototype.animateActivation = function() {
      var r = this, n = t.strings, i = n.VAR_FG_TRANSLATE_START, a = n.VAR_FG_TRANSLATE_END, o = t.cssClasses, l = o.FG_DEACTIVATION, s = o.FG_ACTIVATION, u = t.numbers.DEACTIVATION_TIMEOUT_MS;
      this.layoutInternal();
      var c = "", f = "";
      if (!this.adapter.isUnbounded()) {
        var v = this.getFgTranslationCoordinates(), h = v.startPoint, d = v.endPoint;
        c = h.x + "px, " + h.y + "px", f = d.x + "px, " + d.y + "px";
      }
      this.adapter.updateCssVariable(i, c), this.adapter.updateCssVariable(a, f), clearTimeout(this.activationTimer), clearTimeout(this.fgDeactivationRemovalTimer), this.rmBoundedActivationClasses(), this.adapter.removeClass(l), this.adapter.computeBoundingRect(), this.adapter.addClass(s), this.activationTimer = setTimeout(function() {
        r.activationTimerCallback();
      }, u);
    }, t.prototype.getFgTranslationCoordinates = function() {
      var r = this.activationState, n = r.activationEvent, i = r.wasActivatedByPointer, a;
      i ? a = hv(n, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect()) : a = {
        x: this.frame.width / 2,
        y: this.frame.height / 2
      }, a = {
        x: a.x - this.initialSize / 2,
        y: a.y - this.initialSize / 2
      };
      var o = {
        x: this.frame.width / 2 - this.initialSize / 2,
        y: this.frame.height / 2 - this.initialSize / 2
      };
      return { startPoint: a, endPoint: o };
    }, t.prototype.runDeactivationUXLogicIfReady = function() {
      var r = this, n = t.cssClasses.FG_DEACTIVATION, i = this.activationState, a = i.hasDeactivationUXRun, o = i.isActivated, l = a || !o;
      l && this.activationAnimationHasEnded && (this.rmBoundedActivationClasses(), this.adapter.addClass(n), this.fgDeactivationRemovalTimer = setTimeout(function() {
        r.adapter.removeClass(n);
      }, Io.FG_DEACTIVATION_MS));
    }, t.prototype.rmBoundedActivationClasses = function() {
      var r = t.cssClasses.FG_ACTIVATION;
      this.adapter.removeClass(r), this.activationAnimationHasEnded = !1, this.adapter.computeBoundingRect();
    }, t.prototype.resetActivationState = function() {
      var r = this;
      this.previousActivationEvent = this.activationState.activationEvent, this.activationState = this.defaultActivationState(), setTimeout(function() {
        return r.previousActivationEvent = void 0;
      }, t.numbers.TAP_DELAY_MS);
    }, t.prototype.deactivateImpl = function() {
      var r = this, n = this.activationState;
      if (n.isActivated) {
        var i = k({}, n);
        n.isProgrammatic ? (requestAnimationFrame(function() {
          r.animateDeactivation(i);
        }), this.resetActivationState()) : (this.deregisterDeactivationHandlers(), requestAnimationFrame(function() {
          r.activationState.hasDeactivationUXRun = !0, r.animateDeactivation(i), r.resetActivationState();
        }));
      }
    }, t.prototype.animateDeactivation = function(r) {
      var n = r.wasActivatedByPointer, i = r.wasElementMadeActive;
      (n || i) && this.runDeactivationUXLogicIfReady();
    }, t.prototype.layoutInternal = function() {
      var r = this;
      this.frame = this.adapter.computeBoundingRect();
      var n = Math.max(this.frame.height, this.frame.width), i = function() {
        var o = Math.sqrt(Math.pow(r.frame.width, 2) + Math.pow(r.frame.height, 2));
        return o + t.numbers.PADDING;
      };
      this.maxRadius = this.adapter.isUnbounded() ? n : i();
      var a = Math.floor(n * t.numbers.INITIAL_ORIGIN_SCALE);
      this.adapter.isUnbounded() && a % 2 !== 0 ? this.initialSize = a - 1 : this.initialSize = a, this.fgScale = "" + this.maxRadius / this.initialSize, this.updateLayoutCssVars();
    }, t.prototype.updateLayoutCssVars = function() {
      var r = t.strings, n = r.VAR_FG_SIZE, i = r.VAR_LEFT, a = r.VAR_TOP, o = r.VAR_FG_SCALE;
      this.adapter.updateCssVariable(n, this.initialSize + "px"), this.adapter.updateCssVariable(o, this.fgScale), this.adapter.isUnbounded() && (this.unboundedCoords = {
        left: Math.round(this.frame.width / 2 - this.initialSize / 2),
        top: Math.round(this.frame.height / 2 - this.initialSize / 2)
      }, this.adapter.updateCssVariable(i, this.unboundedCoords.left + "px"), this.adapter.updateCssVariable(a, this.unboundedCoords.top + "px"));
    }, t;
  }(wi)
);
const { applyPassive: Oo } = mv, { matches: wv } = xl;
function Cl(e, { ripple: t = !0, surface: r = !1, unbounded: n = !1, disabled: i = !1, color: a, active: o, rippleElement: l, eventTarget: s, activeTarget: u, addClass: c = (d) => e.classList.add(d), removeClass: f = (d) => e.classList.remove(d), addStyle: v = (d, m) => e.style.setProperty(d, m), initPromise: h = Promise.resolve() } = {}) {
  let d, m = new fv(), E = le("SMUI:addLayoutListener"), _, C = o, x = s, b = u;
  function g() {
    r ? (c("mdc-ripple-surface"), a === "primary" ? (c("smui-ripple-surface--primary"), f("smui-ripple-surface--secondary")) : a === "secondary" ? (f("smui-ripple-surface--primary"), c("smui-ripple-surface--secondary")) : (f("smui-ripple-surface--primary"), f("smui-ripple-surface--secondary"))) : (f("mdc-ripple-surface"), f("smui-ripple-surface--primary"), f("smui-ripple-surface--secondary")), d && C !== o && (C = o, o ? d.activate() : o === !1 && d.deactivate()), t && !d ? (d = new Ev({
      addClass: c,
      browserSupportsCssVars: () => dv(window),
      computeBoundingRect: () => (l || e).getBoundingClientRect(),
      containsEventTarget: (y) => e.contains(y),
      deregisterDocumentInteractionHandler: (y, H) => m.off(document.documentElement, y, H),
      deregisterInteractionHandler: (y, H) => m.off(s || e, y, H),
      deregisterResizeHandler: (y) => window.removeEventListener("resize", y),
      getWindowPageOffset: () => {
        var y, H;
        return {
          x: (y = window.pageXOffset) !== null && y !== void 0 ? y : window.scrollX,
          y: (H = window.pageYOffset) !== null && H !== void 0 ? H : window.scrollY
        };
      },
      isSurfaceActive: () => o ?? wv(u || e, ":active"),
      isSurfaceDisabled: () => !!i,
      isUnbounded: () => !!n,
      registerDocumentInteractionHandler: (y, H) => {
        const N = Oo();
        m.on(document.documentElement, y, H, typeof N == "boolean" ? { capture: N } : N);
      },
      registerInteractionHandler: (y, H) => {
        const N = Oo();
        m.on(s || e, y, H, typeof N == "boolean" ? { capture: N } : N);
      },
      registerResizeHandler: (y) => m.on(window, "resize", y),
      removeClass: f,
      updateCssVariable: v
    }), h.then(() => {
      d && (d.init(), d.setUnbounded(n));
    })) : d && !t && h.then(() => {
      d && (d.destroy(), d = void 0, m.clear());
    }), d && (x !== s || b !== u) && (x = s, b = u, d.destroy(), requestAnimationFrame(() => {
      d && (d.init(), d.setUnbounded(n));
    })), !t && n && c("mdc-ripple-upgraded--unbounded");
  }
  g(), E && (_ = E(S));
  function S() {
    d && d.layout();
  }
  return {
    update(y) {
      ({
        ripple: t,
        surface: r,
        unbounded: n,
        disabled: i,
        color: a,
        active: o,
        rippleElement: l,
        eventTarget: s,
        activeTarget: u,
        addClass: c,
        removeClass: f,
        addStyle: v,
        initPromise: h
      } = Object.assign({ ripple: !0, surface: !1, unbounded: !1, disabled: !1, color: void 0, active: void 0, rippleElement: void 0, eventTarget: void 0, activeTarget: void 0, addClass: (H) => e.classList.add(H), removeClass: (H) => e.classList.remove(H), addStyle: (H, N) => e.style.setProperty(H, N), initPromise: Promise.resolve() }, y)), g();
    },
    destroy() {
      d && (d.destroy(), d = void 0, m.clear(), f("mdc-ripple-surface"), f("smui-ripple-surface--primary"), f("smui-ripple-surface--secondary")), _ && _();
    }
  };
}
function Av(e, t) {
  Ue(t, !0);
  let r = T(t, "use", 19, () => []), n = T(t, "class", 3, ""), i = T(t, "on", 3, !1), a = T(t, "component", 3, Da), o = T(t, "tag", 3, "i"), l = /* @__PURE__ */ At(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "on",
    "component",
    "tag",
    "children"
  ]), s;
  const u = /* @__PURE__ */ ye(() => o() === "svg" || a() === Cv), c = le("SMUI:icon:context");
  function f() {
    return s.getElement();
  }
  var v = { getElement: f }, h = K(), d = z(h);
  {
    let m = /* @__PURE__ */ ye(() => wt({
      "mdc-button__icon": c === "button",
      "mdc-fab__icon": c === "fab",
      "mdc-icon-button__icon": c === "icon-button",
      "mdc-icon-button__icon--on": c === "icon-button" && i(),
      "mdc-tab__icon": c === "tab",
      "mdc-banner__icon": c === "banner",
      "mdc-segmented-button__icon": c === "segmented-button",
      [n()]: !0
    }));
    bi(d, a, (E, _) => {
      Qe(
        _(E, _i(
          {
            get tag() {
              return o();
            },
            get use() {
              return r();
            },
            get class() {
              return p(m);
            },
            "aria-hidden": "true"
          },
          () => p(u) ? { focusable: "false", tabindex: "-1" } : {},
          () => l,
          {
            children: (C, x) => {
              var b = K(), g = z(b);
              Ne(g, () => t.children ?? fe), O(C, b);
            },
            $$slots: { default: !0 }
          }
        )),
        (C) => s = C,
        () => s
      );
    });
  }
  return O(e, h), ke(v);
}
var Sv = /* @__PURE__ */ mt("<svg><!></svg>");
function Da(e, t) {
  Ue(t, !0);
  let r = T(t, "use", 19, () => []), n = T(t, "tag", 3, "div"), i = /* @__PURE__ */ At(t, ["$$slots", "$$events", "$$legacy", "use", "tag", "children"]);
  const a = /* @__PURE__ */ ye(() => [
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
  ].indexOf(n()) > -1);
  let o;
  function l() {
    return o;
  }
  var s = { getElement: l }, u = K(), c = z(u);
  {
    var f = (h) => {
      var d = Sv();
      ot(d, () => ({ ...i }));
      var m = oe(d);
      Ne(m, () => t.children ?? fe), Qe(d, (E) => o = E, () => o), at(d, (E, _) => j == null ? void 0 : j(E, _), r), O(h, d);
    }, v = (h) => {
      var d = K(), m = z(d);
      {
        var E = (C) => {
          var x = K(), b = z(x);
          Ka(b, n, !1, (g, S) => {
            Qe(g, (y) => o = y, () => o), at(g, (y, H) => j == null ? void 0 : j(y, H), r), ot(g, () => ({ ...i }));
          }), O(C, x);
        }, _ = (C) => {
          var x = K(), b = z(x);
          Ka(b, n, !1, (g, S) => {
            Qe(g, (N) => o = N, () => o), at(g, (N, L) => j == null ? void 0 : j(N, L), r), ot(g, () => ({ ...i }));
            var y = K(), H = z(y);
            Ne(H, () => t.children ?? fe), O(S, y);
          }), O(C, x);
        };
        ie(
          m,
          (C) => {
            p(a) ? C(E) : C(_, !1);
          },
          !0
        );
      }
      O(h, d);
    };
    ie(c, (h) => {
      n() === "svg" ? h(f) : h(v, !1);
    });
  }
  return O(e, u), ke(s);
}
var xv = /* @__PURE__ */ mt("<svg><!></svg>");
function Cv(e, t) {
  Ue(t, !0), console && console.warn && console.warn('The @smui/common Svg component is deprecated. You can use `tag="svg"` now.');
  let r = T(t, "use", 19, () => []), n = /* @__PURE__ */ At(t, ["$$slots", "$$events", "$$legacy", "use", "children"]), i;
  function a() {
    return i;
  }
  var o = { getElement: a }, l = xv();
  ot(l, () => ({ ...n }));
  var s = oe(l);
  return Ne(s, () => t.children ?? fe), Qe(l, (u) => i = u, () => i), at(l, (u, c) => j == null ? void 0 : j(u, c), r), O(e, l), ke(o);
}
var Iv = /* @__PURE__ */ de('<div class="mdc-button__touch"></div>'), Rv = /* @__PURE__ */ de('<div class="mdc-button__ripple"></div> <!><!>', 1);
function Tv(e, t) {
  Ue(t, !0);
  let r = T(t, "use", 19, () => []), n = T(t, "class", 3, ""), i = T(t, "style", 3, ""), a = T(t, "ripple", 3, !0), o = T(t, "color", 3, "primary"), l = T(t, "variant", 3, "text"), s = T(t, "touch", 3, !1), u = T(t, "action", 3, "close"), c = T(t, "defaultAction", 3, !1), f = T(t, "secondary", 3, !1), v = T(t, "component", 3, Da), h = T(t, "tag", 19, () => t.href == null ? "button" : "a"), d = /* @__PURE__ */ At(t, [
    "$$slots",
    "$$events",
    "$$legacy",
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
    "children"
  ]), m, E = te({}), _ = te({}), C = le("SMUI:button:context");
  const x = /* @__PURE__ */ ye(() => C === "dialog:action" && u() != null ? { "data-mdc-dialog-action": u() } : { action: u() }), b = /* @__PURE__ */ ye(() => C === "dialog:action" && c() ? { "data-mdc-dialog-button-default": "" } : {}), g = /* @__PURE__ */ ye(() => C === "banner" ? {} : { secondary: f() });
  let S = t.disabled;
  qe(() => {
    if (S !== t.disabled) {
      if (m) {
        const B = W();
        "blur" in B && B.blur();
      }
      S = d.disabled;
    }
  }), ee("SMUI:label:context", "button"), ee("SMUI:icon:context", "button");
  function y(B) {
    E[B] || (E[B] = !0);
  }
  function H(B) {
    (!(B in E) || E[B]) && (E[B] = !1);
  }
  function N(B, se) {
    _[B] != se && (se === "" || se == null ? delete _[B] : _[B] = se);
  }
  function L() {
    C === "banner" && dt(W(), f() ? "SMUIBannerButtonSecondaryActionClick" : "SMUIBannerButtonPrimaryActionClick");
  }
  function W() {
    return m.getElement();
  }
  var re = { getElement: W }, $ = K(), ge = z($);
  {
    let B = /* @__PURE__ */ ye(() => [
      [
        Cl,
        {
          ripple: a(),
          unbounded: !1,
          color: o(),
          disabled: !!t.disabled,
          addClass: y,
          removeClass: H,
          addStyle: N
        }
      ],
      ...r()
    ]), se = /* @__PURE__ */ ye(() => wt({
      "mdc-button": !0,
      "mdc-button--raised": l() === "raised",
      "mdc-button--unelevated": l() === "unelevated",
      "mdc-button--outlined": l() === "outlined",
      "smui-button--color-secondary": o() === "secondary",
      "mdc-button--touch": s(),
      "mdc-card__action": C === "card:action",
      "mdc-card__action--button": C === "card:action",
      "mdc-dialog__button": C === "dialog:action",
      "mdc-top-app-bar__navigation-icon": C === "top-app-bar:navigation",
      "mdc-top-app-bar__action-item": C === "top-app-bar:action",
      "mdc-snackbar__action": C === "snackbar:actions",
      "mdc-banner__secondary-action": C === "banner" && f(),
      "mdc-banner__primary-action": C === "banner" && !f(),
      "mdc-tooltip__action": C === "tooltip:rich-actions",
      ...E,
      [n()]: !0
    })), D = /* @__PURE__ */ ye(() => Object.entries(_).map(([G, Q]) => `${G}: ${Q};`).concat([i()]).join(" "));
    bi(ge, v, (G, Q) => {
      Qe(
        Q(G, _i(
          {
            get tag() {
              return h();
            },
            get use() {
              return p(B);
            },
            get class() {
              return p(se);
            },
            get style() {
              return p(D);
            }
          },
          () => p(x),
          () => p(b),
          () => p(g),
          {
            get href() {
              return t.href;
            }
          },
          () => d,
          {
            onclick: (M) => {
              var A;
              L(), (A = t.onclick) == null || A.call(t, M);
            },
            children: (M, A) => {
              var P = Rv(), xe = Le(z(P), 2);
              Ne(xe, () => t.children ?? fe);
              var Ee = Le(xe);
              {
                var ve = (Z) => {
                  var ne = Iv();
                  O(Z, ne);
                };
                ie(Ee, (Z) => {
                  s() && Z(ve);
                });
              }
              O(M, P);
            },
            $$slots: { default: !0 }
          }
        )),
        (M) => m = M,
        () => m
      );
    });
  }
  return O(e, $), ke(re);
}
function Ov(e, t) {
  Ue(t, !0);
  let r = T(t, "callback", 3, () => {
  }), n = T(t, "disabled", 3, !1), i = T(t, "variant", 3, "default"), a = T(t, "isAbortAction", 3, !1), o = T(t, "backgroundColor", 3, void 0);
  {
    let l = /* @__PURE__ */ ye(() => a() ? "background-color: #ff3e00;" : "background-color: " + o());
    Tv(e, {
      onclick: () => r()(),
      get variant() {
        return i();
      },
      get disabled() {
        return n();
      },
      get style() {
        return p(l);
      },
      children: (s, u) => {
        var c = K(), f = z(c);
        Ne(f, () => t.children ?? fe), O(s, c);
      },
      $$slots: { default: !0 }
    });
  }
  ke();
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
var zn = {
  ICON_BUTTON_ON: "mdc-icon-button--on",
  ROOT: "mdc-icon-button"
}, Bt = {
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
var Hv = (
  /** @class */
  function(e) {
    St(t, e);
    function t(r) {
      var n = e.call(this, k(k({}, t.defaultAdapter), r)) || this;
      return n.hasToggledAriaLabel = !1, n;
    }
    return Object.defineProperty(t, "cssClasses", {
      get: function() {
        return zn;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t, "strings", {
      get: function() {
        return Bt;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t, "defaultAdapter", {
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
    }), t.prototype.init = function() {
      var r = this.adapter.getAttr(Bt.DATA_ARIA_LABEL_ON), n = this.adapter.getAttr(Bt.DATA_ARIA_LABEL_OFF);
      if (r && n) {
        if (this.adapter.getAttr(Bt.ARIA_PRESSED) !== null)
          throw new Error("MDCIconButtonToggleFoundation: Button should not set `aria-pressed` if it has a toggled aria label.");
        this.hasToggledAriaLabel = !0;
      } else
        this.adapter.setAttr(Bt.ARIA_PRESSED, String(this.isOn()));
    }, t.prototype.handleClick = function() {
      this.toggle(), this.adapter.notifyChange({ isOn: this.isOn() });
    }, t.prototype.isOn = function() {
      return this.adapter.hasClass(zn.ICON_BUTTON_ON);
    }, t.prototype.toggle = function(r) {
      if (r === void 0 && (r = !this.isOn()), r ? this.adapter.addClass(zn.ICON_BUTTON_ON) : this.adapter.removeClass(zn.ICON_BUTTON_ON), this.hasToggledAriaLabel) {
        var n = r ? this.adapter.getAttr(Bt.DATA_ARIA_LABEL_ON) : this.adapter.getAttr(Bt.DATA_ARIA_LABEL_OFF);
        this.adapter.setAttr(Bt.ARIA_LABEL, n || "");
      } else
        this.adapter.setAttr(Bt.ARIA_PRESSED, "" + r);
    }, t;
  }(wi)
), Lv = /* @__PURE__ */ de('<div class="mdc-icon-button__touch"></div>'), Pv = /* @__PURE__ */ de('<div class="mdc-icon-button__ripple"></div> <!><!>', 1);
function Mv(e, t) {
  Ue(t, !0);
  let r = () => {
  };
  function n(A) {
    return A === r;
  }
  let i = T(t, "use", 19, () => []), a = T(t, "class", 3, ""), o = T(t, "style", 3, ""), l = T(t, "ripple", 3, !0), s = T(t, "toggle", 3, !1), u = T(t, "pressed", 15, r), c = T(t, "touch", 3, !1), f = T(t, "displayFlex", 3, !0), v = T(t, "size", 3, "normal"), h = T(t, "component", 3, Da), d = T(t, "tag", 19, () => t.href == null ? "button" : "a"), m = /* @__PURE__ */ At(t, [
    "$$slots",
    "$$events",
    "$$legacy",
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
    "children"
  ]), E, _, C = /* @__PURE__ */ we(te({})), x = te({}), b = /* @__PURE__ */ we(te({})), g = le("SMUI:icon-button:context"), S = le("SMUI:icon-button:aria-describedby");
  const y = /* @__PURE__ */ ye(() => {
    if (g === "data-table:pagination")
      switch (t.action) {
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
    else return g === "dialog:header" || g === "dialog:sheet" ? { "data-mdc-dialog-action": t.action } : { action: t.action };
  });
  let H = !!t.disabled;
  qe(() => {
    if (H != !!t.disabled) {
      if (E) {
        const A = D();
        "blur" in A && A.blur();
      }
      H = !!t.disabled;
    }
  }), ee("SMUI:icon:context", "icon-button");
  let N = null;
  qe(() => {
    E && D() && s() !== N && (s() && !_ ? (_ = new Hv({
      addClass: W,
      hasClass: L,
      notifyChange: (A) => {
        se(A), dt(D(), "SMUIIconButtonToggleChange", A);
      },
      removeClass: re,
      getAttr: ge,
      setAttr: B
    }), _.init()) : !s() && _ && (_.destroy(), _ = void 0, ue(C, {}, !0), ue(b, {}, !0)), N = s());
  }), qe(() => {
    _ && !n(u()) && _.isOn() !== u() && _.toggle(u());
  }), Es(() => {
    _ && _.destroy();
  });
  function L(A) {
    return A in p(C) ? p(C)[A] : D().classList.contains(A);
  }
  function W(A) {
    p(C)[A] || (p(C)[A] = !0);
  }
  function re(A) {
    (!(A in p(C)) || p(C)[A]) && (p(C)[A] = !1);
  }
  function $(A, P) {
    x[A] != P && (P === "" || P == null ? delete x[A] : x[A] = P);
  }
  function ge(A) {
    return A in p(b) ? p(b)[A] ?? null : D().getAttribute(A);
  }
  function B(A, P) {
    p(b)[A] !== P && (p(b)[A] = P);
  }
  function se(A) {
    u(A.isOn);
  }
  function D() {
    return E.getElement();
  }
  var G = { getElement: D }, Q = K(), M = z(Q);
  {
    let A = /* @__PURE__ */ ye(() => [
      [
        Cl,
        {
          ripple: l(),
          unbounded: !0,
          color: t.color,
          disabled: !!t.disabled,
          addClass: W,
          removeClass: re,
          addStyle: $
        }
      ],
      ...i()
    ]), P = /* @__PURE__ */ ye(() => wt({
      "mdc-icon-button": !0,
      "mdc-icon-button--on": !n(u()) && u(),
      "mdc-icon-button--touch": c(),
      "mdc-icon-button--display-flex": f(),
      "smui-icon-button--size-button": v() === "button",
      "smui-icon-button--size-mini": v() === "mini",
      "mdc-icon-button--reduced-size": v() === "mini" || v() === "button",
      "mdc-card__action": g === "card:action",
      "mdc-card__action--icon": g === "card:action",
      "mdc-top-app-bar__navigation-icon": g === "top-app-bar:navigation",
      "mdc-top-app-bar__action-item": g === "top-app-bar:action",
      "mdc-snackbar__dismiss": g === "snackbar:actions",
      "mdc-data-table__pagination-button": g === "data-table:pagination",
      "mdc-data-table__sort-icon-button": g === "data-table:sortable-header-cell",
      "mdc-dialog__close": (g === "dialog:header" || g === "dialog:sheet") && t.action === "close",
      ...p(C),
      [a()]: !0
    })), xe = /* @__PURE__ */ ye(() => Object.entries(x).map(([Z, ne]) => `${Z}: ${ne};`).concat([o()]).join(" ")), Ee = /* @__PURE__ */ ye(() => n(u()) ? null : u() ? "true" : "false"), ve = /* @__PURE__ */ ye(() => u() ? t.ariaLabelOn : t.ariaLabelOff);
    bi(M, h, (Z, ne) => {
      Qe(
        ne(Z, _i(
          {
            get tag() {
              return d();
            },
            get use() {
              return p(A);
            },
            get class() {
              return p(P);
            },
            get style() {
              return p(xe);
            },
            get "aria-pressed"() {
              return p(Ee);
            },
            get "aria-label"() {
              return p(ve);
            },
            get "data-aria-label-on"() {
              return t.ariaLabelOn;
            },
            get "data-aria-label-off"() {
              return t.ariaLabelOff;
            },
            get "aria-describedby"() {
              return S;
            },
            get href() {
              return t.href;
            }
          },
          () => p(y),
          () => p(b),
          () => m,
          {
            onclick: (be) => {
              var Ce;
              _ && _.handleClick(), g === "top-app-bar:navigation" && dt(D(), "SMUITopAppBarIconButtonNav"), (Ce = t.onclick) == null || Ce.call(t, be);
            },
            children: (be, Ce) => {
              var ze = Pv(), he = Le(z(ze), 2);
              Ne(he, () => t.children ?? fe);
              var Re = Le(he);
              {
                var Ie = (_e) => {
                  var me = Lv();
                  O(_e, me);
                };
                ie(Re, (_e) => {
                  c() && _e(Ie);
                });
              }
              O(be, ze);
            },
            $$slots: { default: !0 }
          }
        )),
        (be) => E = be,
        () => E
      );
    });
  }
  return O(e, Q), ke(G);
}
function Dv(e, t) {
  let r = T(t, "callback", 3, () => {
  }), n = T(t, "icon", 3, ""), i = T(t, "disabled", 3, !1);
  Mv(e, {
    get disabled() {
      return i();
    },
    style: "margin-bottom: 0;",
    $$events: {
      click(...a) {
        var o;
        (o = r()) == null || o.apply(this, a);
      }
    },
    children: (a, o) => {
      Av(a, {
        class: "material-icons",
        children: (l, s) => {
          var u = Yi();
          Ae(() => $t(u, n())), O(l, u);
        },
        $$slots: { default: !0 }
      });
    },
    $$slots: { default: !0 }
  });
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
var Ho = {
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
function Bv(e) {
  return !!e.document && typeof e.document.createElement == "function";
}
function Nv(e, t) {
  if (Bv(e) && t in Ho) {
    var r = e.document.createElement("div"), n = Ho[t], i = n.standard, a = n.prefixed, o = i in r.style;
    return o ? i : a;
  }
  return t;
}
const Me = [];
for (let e = 0; e < 256; ++e)
  Me.push((e + 256).toString(16).slice(1));
function Uv(e, t = 0) {
  return (Me[e[t + 0]] + Me[e[t + 1]] + Me[e[t + 2]] + Me[e[t + 3]] + "-" + Me[e[t + 4]] + Me[e[t + 5]] + "-" + Me[e[t + 6]] + Me[e[t + 7]] + "-" + Me[e[t + 8]] + Me[e[t + 9]] + "-" + Me[e[t + 10]] + Me[e[t + 11]] + Me[e[t + 12]] + Me[e[t + 13]] + Me[e[t + 14]] + Me[e[t + 15]]).toLowerCase();
}
let Ui;
const kv = new Uint8Array(16);
function Fv() {
  if (!Ui) {
    if (typeof crypto > "u" || !crypto.getRandomValues)
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    Ui = crypto.getRandomValues.bind(crypto);
  }
  return Ui(kv);
}
const Gv = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), Lo = { randomUUID: Gv };
function jv(e, t, r) {
  var i;
  if (Lo.randomUUID && !t && !e)
    return Lo.randomUUID();
  e = e || {};
  const n = e.random ?? ((i = e.rng) == null ? void 0 : i.call(e)) ?? Fv();
  if (n.length < 16)
    throw new Error("Random bytes length must be >= 16");
  if (n[6] = n[6] & 15 | 64, n[8] = n[8] & 63 | 128, t) {
    if (r = r || 0, r < 0 || r + 16 > t.length)
      throw new RangeError(`UUID byte range ${r}:${r + 15} is out of buffer bounds`);
    for (let a = 0; a < 16; ++a)
      t[r + a] = n[a];
    return t;
  }
  return Uv(n);
}
var Vv = /* @__PURE__ */ de('<span class="oscd-icon"><!></span>');
function sr(e, t) {
  var r = Vv(), n = oe(r);
  Ne(n, () => t.children ?? fe), O(e, r);
}
var qv = /* @__PURE__ */ mt('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"></path></svg>');
function zv(e, t) {
  let r = T(t, "svgStyles", 3, "");
  sr(e, {
    children: (n, i) => {
      var a = qv();
      Ae(() => lt(a, r())), O(n, a);
    }
  });
}
var Xv = /* @__PURE__ */ mt('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="24px"><path d="m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"></path></svg>');
function Wv(e, t) {
  let r = T(t, "svgStyles", 3, "");
  sr(e, {
    children: (n, i) => {
      var a = Xv();
      Ae(() => lt(a, r())), O(n, a);
    }
  });
}
var Zv = /* @__PURE__ */ mt('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z"></path></svg>');
function Yv(e, t) {
  let r = T(t, "svgStyles", 3, "");
  sr(e, {
    children: (n, i) => {
      var a = Zv();
      Ae(() => lt(a, r())), O(n, a);
    }
  });
}
var Qv = /* @__PURE__ */ mt('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="m590-160 80 80H240q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h360l200 240v480q0 20-8.5 36.5T768-96L560-302q-17 11-37 16.5t-43 5.5q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 23-5.5 43T618-360l102 104v-356L562-800H240v640h350ZM480-360q33 0 56.5-23.5T560-440q0-33-23.5-56.5T480-520q-33 0-56.5 23.5T400-440q0 33 23.5 56.5T480-360Zm0-80Zm0 0Z"></path></svg>');
function Jv(e, t) {
  let r = T(t, "svgStyles", 3, "");
  sr(e, {
    children: (n, i) => {
      var a = Qv();
      Ae(() => lt(a, r())), O(n, a);
    }
  });
}
var Kv = /* @__PURE__ */ mt('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-160q-134 0-227-93t-93-227q0-134 93-227t227-93q69 0 132 28.5T720-690v-110h80v280H520v-80h168q-32-56-87.5-88T480-720q-100 0-170 70t-70 170q0 100 70 170t170 70q77 0 139-44t87-116h84q-28 106-114 173t-196 67Z"></path></svg>');
function $v(e, t) {
  let r = T(t, "svgStyles", 3, "");
  sr(e, {
    children: (n, i) => {
      var a = Kv();
      Ae(() => lt(a, r())), O(n, a);
    }
  });
}
var ep = /* @__PURE__ */ mt('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M200-440v-80h560v80H200Z"></path></svg>');
function tp(e, t) {
  let r = T(t, "svgStyles", 3, "");
  sr(e, {
    children: (n, i) => {
      var a = ep();
      Ae(() => lt(a, r())), O(n, a);
    }
  });
}
var rp = /* @__PURE__ */ mt('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"></path></svg>');
function np(e, t) {
  let r = T(t, "svgStyles", 3, "");
  sr(e, {
    children: (n, i) => {
      var a = rp();
      Ae(() => lt(a, r())), O(n, a);
    }
  });
}
var ip = /* @__PURE__ */ mt('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"></path></svg>');
function ap(e, t) {
  let r = T(t, "svgStyles", 3, "");
  sr(e, {
    children: (n, i) => {
      var a = ip();
      Ae(() => lt(a, r())), O(n, a);
    }
  });
}
bu();
qt(["change"]);
var op = /* @__PURE__ */ de('<div class="overlay svelte-14uvd2z"><div class="loading-spinner-container svelte-14uvd2z"><div class="loading-spinner svelte-14uvd2z"></div> <span class="loading-message svelte-14uvd2z"> </span></div></div>'), sp = /* @__PURE__ */ de('<div class="svelte-14uvd2z"><!></div>');
function lp(e, t) {
  let r = T(t, "loadingDone", 3, !0), n = T(t, "message", 3, "Loading...");
  var i = sp(), a = oe(i);
  {
    var o = (l) => {
      var s = op(), u = oe(s), c = Le(oe(u), 2), f = oe(c);
      Ae(() => $t(f, n())), O(l, s);
    };
    ie(a, (l) => {
      r() || l(o);
    });
  }
  O(e, i);
}
qt(["change"]);
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
var rt = {
  CLOSED_CLASS: "mdc-linear-progress--closed",
  CLOSED_ANIMATION_OFF_CLASS: "mdc-linear-progress--closed-animation-off",
  INDETERMINATE_CLASS: "mdc-linear-progress--indeterminate",
  REVERSED_CLASS: "mdc-linear-progress--reversed",
  ANIMATION_READY_CLASS: "mdc-linear-progress--animation-ready"
}, gt = {
  ARIA_HIDDEN: "aria-hidden",
  ARIA_VALUEMAX: "aria-valuemax",
  ARIA_VALUEMIN: "aria-valuemin",
  ARIA_VALUENOW: "aria-valuenow",
  BUFFER_BAR_SELECTOR: ".mdc-linear-progress__buffer-bar",
  FLEX_BASIS: "flex-basis",
  PRIMARY_BAR_SELECTOR: ".mdc-linear-progress__primary-bar"
}, pn = {
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
var up = (
  /** @class */
  function(e) {
    St(t, e);
    function t(r) {
      var n = e.call(this, k(k({}, t.defaultAdapter), r)) || this;
      return n.observer = null, n;
    }
    return Object.defineProperty(t, "cssClasses", {
      get: function() {
        return rt;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t, "strings", {
      get: function() {
        return gt;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t, "defaultAdapter", {
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
    }), t.prototype.init = function() {
      var r = this;
      this.determinate = !this.adapter.hasClass(rt.INDETERMINATE_CLASS), this.adapter.addClass(rt.ANIMATION_READY_CLASS), this.progress = 0, this.buffer = 1, this.observer = this.adapter.attachResizeObserver(function(n) {
        var i, a;
        if (!r.determinate)
          try {
            for (var o = Ht(n), l = o.next(); !l.done; l = o.next()) {
              var s = l.value;
              s.contentRect && r.calculateAndSetDimensions(s.contentRect.width);
            }
          } catch (u) {
            i = { error: u };
          } finally {
            try {
              l && !l.done && (a = o.return) && a.call(o);
            } finally {
              if (i) throw i.error;
            }
          }
      }), !this.determinate && this.observer && this.calculateAndSetDimensions(this.adapter.getWidth());
    }, t.prototype.setDeterminate = function(r) {
      if (this.determinate = r, this.determinate) {
        this.adapter.removeClass(rt.INDETERMINATE_CLASS), this.adapter.setAttribute(gt.ARIA_VALUENOW, this.progress.toString()), this.adapter.setAttribute(gt.ARIA_VALUEMAX, "1"), this.adapter.setAttribute(gt.ARIA_VALUEMIN, "0"), this.setPrimaryBarProgress(this.progress), this.setBufferBarProgress(this.buffer);
        return;
      }
      this.observer && this.calculateAndSetDimensions(this.adapter.getWidth()), this.adapter.addClass(rt.INDETERMINATE_CLASS), this.adapter.removeAttribute(gt.ARIA_VALUENOW), this.adapter.removeAttribute(gt.ARIA_VALUEMAX), this.adapter.removeAttribute(gt.ARIA_VALUEMIN), this.setPrimaryBarProgress(1), this.setBufferBarProgress(1);
    }, t.prototype.isDeterminate = function() {
      return this.determinate;
    }, t.prototype.setProgress = function(r) {
      this.progress = r, this.determinate && (this.setPrimaryBarProgress(r), this.adapter.setAttribute(gt.ARIA_VALUENOW, r.toString()));
    }, t.prototype.getProgress = function() {
      return this.progress;
    }, t.prototype.setBuffer = function(r) {
      this.buffer = r, this.determinate && this.setBufferBarProgress(r);
    }, t.prototype.getBuffer = function() {
      return this.buffer;
    }, t.prototype.open = function() {
      this.adapter.removeClass(rt.CLOSED_CLASS), this.adapter.removeClass(rt.CLOSED_ANIMATION_OFF_CLASS), this.adapter.removeAttribute(gt.ARIA_HIDDEN);
    }, t.prototype.close = function() {
      this.adapter.addClass(rt.CLOSED_CLASS), this.adapter.setAttribute(gt.ARIA_HIDDEN, "true");
    }, t.prototype.isClosed = function() {
      return this.adapter.hasClass(rt.CLOSED_CLASS);
    }, t.prototype.handleTransitionEnd = function() {
      this.adapter.hasClass(rt.CLOSED_CLASS) && this.adapter.addClass(rt.CLOSED_ANIMATION_OFF_CLASS);
    }, t.prototype.destroy = function() {
      e.prototype.destroy.call(this), this.observer && this.observer.disconnect();
    }, t.prototype.restartAnimation = function() {
      this.adapter.removeClass(rt.ANIMATION_READY_CLASS), this.adapter.forceLayout(), this.adapter.addClass(rt.ANIMATION_READY_CLASS);
    }, t.prototype.setPrimaryBarProgress = function(r) {
      var n = "scaleX(" + r + ")", i = typeof window < "u" ? Nv(window, "transform") : "transform";
      this.adapter.setPrimaryBarStyle(i, n);
    }, t.prototype.setBufferBarProgress = function(r) {
      var n = r * 100 + "%";
      this.adapter.setBufferBarStyle(gt.FLEX_BASIS, n);
    }, t.prototype.calculateAndSetDimensions = function(r) {
      var n = r * pn.PRIMARY_HALF, i = r * pn.PRIMARY_FULL, a = r * pn.SECONDARY_QUARTER, o = r * pn.SECONDARY_HALF, l = r * pn.SECONDARY_FULL;
      this.adapter.setStyle("--mdc-linear-progress-primary-half", n + "px"), this.adapter.setStyle("--mdc-linear-progress-primary-half-neg", -n + "px"), this.adapter.setStyle("--mdc-linear-progress-primary-full", i + "px"), this.adapter.setStyle("--mdc-linear-progress-primary-full-neg", -i + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-quarter", a + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-quarter-neg", -a + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-half", o + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-half-neg", -o + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-full", l + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-full-neg", -l + "px"), this.restartAnimation();
    }, t;
  }(wi)
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
var Nt = {
  HEADER_CELL_SORTED: "mdc-data-table__header-cell--sorted",
  HEADER_CELL_SORTED_DESCENDING: "mdc-data-table__header-cell--sorted-descending",
  IN_PROGRESS: "mdc-data-table--in-progress",
  ROW_SELECTED: "mdc-data-table__row--selected"
}, Po = {
  ARIA_SELECTED: "aria-selected",
  ARIA_SORT: "aria-sort"
}, lr = {
  ARIA_SELECTED: Po.ARIA_SELECTED,
  ARIA_SORT: Po.ARIA_SORT
}, it;
(function(e) {
  e.ASCENDING = "ascending", e.DESCENDING = "descending", e.NONE = "none", e.OTHER = "other";
})(it || (it = {}));
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
var cp = (
  /** @class */
  function(e) {
    St(t, e);
    function t(r) {
      return e.call(this, k(k({}, t.defaultAdapter), r)) || this;
    }
    return Object.defineProperty(t, "defaultAdapter", {
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
    }), t.prototype.layout = function() {
      this.adapter.isRowsSelectable() && (this.adapter.registerHeaderRowCheckbox(), this.adapter.registerRowCheckboxes(), this.setHeaderRowCheckboxState());
    }, t.prototype.layoutAsync = function() {
      return Hs(this, void 0, void 0, function() {
        return Ca(this, function(r) {
          switch (r.label) {
            case 0:
              return this.adapter.isRowsSelectable() ? [4, this.adapter.registerHeaderRowCheckbox()] : [3, 3];
            case 1:
              return r.sent(), [4, this.adapter.registerRowCheckboxes()];
            case 2:
              r.sent(), this.setHeaderRowCheckboxState(), r.label = 3;
            case 3:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, t.prototype.getRows = function() {
      return this.adapter.getRowElements();
    }, t.prototype.getHeaderCells = function() {
      return this.adapter.getHeaderCellElements();
    }, t.prototype.setSelectedRowIds = function(r) {
      for (var n = 0; n < this.adapter.getRowCount(); n++) {
        var i = this.adapter.getRowIdAtIndex(n), a = !1;
        i && r.indexOf(i) >= 0 && (a = !0), this.adapter.setRowCheckboxCheckedAtIndex(n, a), this.selectRowAtIndex(n, a);
      }
      this.setHeaderRowCheckboxState();
    }, t.prototype.getRowIds = function() {
      for (var r = [], n = 0; n < this.adapter.getRowCount(); n++)
        r.push(this.adapter.getRowIdAtIndex(n));
      return r;
    }, t.prototype.getSelectedRowIds = function() {
      for (var r = [], n = 0; n < this.adapter.getRowCount(); n++)
        this.adapter.isCheckboxAtRowIndexChecked(n) && r.push(this.adapter.getRowIdAtIndex(n));
      return r;
    }, t.prototype.handleHeaderRowCheckboxChange = function() {
      for (var r = this.adapter.isHeaderRowCheckboxChecked(), n = 0; n < this.adapter.getRowCount(); n++)
        this.adapter.setRowCheckboxCheckedAtIndex(n, r), this.selectRowAtIndex(n, r);
      r ? this.adapter.notifySelectedAll() : this.adapter.notifyUnselectedAll();
    }, t.prototype.handleRowCheckboxChange = function(r) {
      var n = this.adapter.getRowIndexByChildElement(r.target);
      if (n !== -1) {
        var i = this.adapter.isCheckboxAtRowIndexChecked(n);
        this.selectRowAtIndex(n, i), this.setHeaderRowCheckboxState();
        var a = this.adapter.getRowIdAtIndex(n);
        this.adapter.notifyRowSelectionChanged({ rowId: a, rowIndex: n, selected: i });
      }
    }, t.prototype.handleSortAction = function(r) {
      for (var n = r.columnId, i = r.columnIndex, a = r.headerCell, o = 0; o < this.adapter.getHeaderCellCount(); o++)
        o !== i && (this.adapter.removeClassNameByHeaderCellIndex(o, Nt.HEADER_CELL_SORTED), this.adapter.removeClassNameByHeaderCellIndex(o, Nt.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(o, lr.ARIA_SORT, it.NONE), this.adapter.setSortStatusLabelByHeaderCellIndex(o, it.NONE));
      this.adapter.setClassNameByHeaderCellIndex(i, Nt.HEADER_CELL_SORTED);
      var l = this.adapter.getAttributeByHeaderCellIndex(i, lr.ARIA_SORT), s = it.NONE;
      l === it.ASCENDING ? (this.adapter.setClassNameByHeaderCellIndex(i, Nt.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(i, lr.ARIA_SORT, it.DESCENDING), s = it.DESCENDING) : l === it.DESCENDING ? (this.adapter.removeClassNameByHeaderCellIndex(i, Nt.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(i, lr.ARIA_SORT, it.ASCENDING), s = it.ASCENDING) : (this.adapter.setAttributeByHeaderCellIndex(i, lr.ARIA_SORT, it.ASCENDING), s = it.ASCENDING), this.adapter.setSortStatusLabelByHeaderCellIndex(i, s), this.adapter.notifySortAction({
        columnId: n,
        columnIndex: i,
        headerCell: a,
        sortValue: s
      });
    }, t.prototype.handleRowClick = function(r) {
      var n = r.rowId, i = r.row;
      this.adapter.notifyRowClick({
        rowId: n,
        row: i
      });
    }, t.prototype.showProgress = function() {
      var r = this.adapter.getTableHeaderHeight(), n = this.adapter.getTableContainerHeight() - r, i = r;
      this.adapter.setProgressIndicatorStyles({
        height: n + "px",
        top: i + "px"
      }), this.adapter.addClass(Nt.IN_PROGRESS);
    }, t.prototype.hideProgress = function() {
      this.adapter.removeClass(Nt.IN_PROGRESS);
    }, t.prototype.setHeaderRowCheckboxState = function() {
      this.adapter.getSelectedRowCount() === 0 ? (this.adapter.setHeaderRowCheckboxChecked(!1), this.adapter.setHeaderRowCheckboxIndeterminate(!1)) : this.adapter.getSelectedRowCount() === this.adapter.getRowCount() ? (this.adapter.setHeaderRowCheckboxChecked(!0), this.adapter.setHeaderRowCheckboxIndeterminate(!1)) : (this.adapter.setHeaderRowCheckboxIndeterminate(!0), this.adapter.setHeaderRowCheckboxChecked(!1));
    }, t.prototype.selectRowAtIndex = function(r, n) {
      n ? (this.adapter.addClassAtRowIndex(r, Nt.ROW_SELECTED), this.adapter.setAttributeAtRowIndex(r, lr.ARIA_SELECTED, "true")) : (this.adapter.removeClassAtRowIndex(r, Nt.ROW_SELECTED), this.adapter.setAttributeAtRowIndex(r, lr.ARIA_SELECTED, "false"));
    }, t;
  }(wi)
), fp = /* @__PURE__ */ de('<div class="mdc-data-table__progress-indicator"><div class="mdc-data-table__scrim"></div> <!></div>'), dp = /* @__PURE__ */ de("<div><div><table><!></table></div> <!> <!></div>");
function hp(e, t) {
  Ue(t, !0);
  const r = () => br($, "$progressClosed", n), [n, i] = Pn(), { closest: a } = xl;
  let o = T(t, "use", 19, () => []), l = T(t, "class", 3, ""), s = T(t, "stickyHeader", 3, !1), u = T(t, "sortable", 3, !1), c = T(t, "sort", 15, null), f = T(t, "sortDirection", 15, "ascending"), v = T(t, "sortAscendingAriaLabel", 3, "sorted, ascending"), h = T(t, "sortDescendingAriaLabel", 3, "sorted, descending"), d = T(t, "container$use", 19, () => []), m = T(t, "container$class", 3, ""), E = T(t, "table$use", 19, () => []), _ = T(t, "table$class", 3, ""), C = /* @__PURE__ */ At(t, [
    "$$slots",
    "$$events",
    "$$legacy",
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
    "children",
    "progress",
    "paginate"
  ]), x, b = /* @__PURE__ */ we(void 0), g, S = /* @__PURE__ */ we(void 0), y = /* @__PURE__ */ we(void 0), H = te({}), N = /* @__PURE__ */ we(te({ height: "auto", top: "initial" })), L = le("SMUI:addLayoutListener"), W, re = !1, $ = vt(!1), ge = vt(c());
  qe(() => {
    Ji(ge, c());
  });
  let B = vt(f());
  qe(() => {
    Ji(B, f());
  }), ee("SMUI:checkbox:context", "data-table"), ee("SMUI:linear-progress:context", "data-table"), ee("SMUI:linear-progress:closed", $), ee("SMUI:data-table:sortable", u()), ee("SMUI:data-table:sort", ge), ee("SMUI:data-table:sortDirection", B), ee("SMUI:data-table:sortAscendingAriaLabel", v()), ee("SMUI:data-table:sortDescendingAriaLabel", h()), L && (W = L(Ee));
  let se;
  qe(() => {
    t.progress && p(b) && se !== r() && (se = r(), r() ? p(b).hideProgress() : p(b).showProgress());
  }), ee("SMUI:checkbox:mount", () => {
    p(b) && re && p(b).layout();
  }), ee("SMUI:data-table:header:mount", (w) => {
    ue(S, w, !0);
  }), ee("SMUI:data-table:header:unmount", () => {
    ue(S, void 0);
  }), ee("SMUI:data-table:body:mount", (w) => {
    ue(y, w, !0);
  }), ee("SMUI:data-table:body:unmount", () => {
    ue(y, void 0);
  }), Gt(() => (ue(
    b,
    new cp({
      addClass: G,
      removeClass: Q,
      getHeaderCellElements: () => {
        var w;
        return ((w = p(S)) == null ? void 0 : w.cells.map((R) => R.element)) ?? [];
      },
      getHeaderCellCount: () => {
        var w;
        return ((w = p(S)) == null ? void 0 : w.cells.length) ?? 0;
      },
      getAttributeByHeaderCellIndex: (w, R) => {
        var U;
        return ((U = p(S)) == null ? void 0 : U.orderedCells[w].getAttr(R)) ?? null;
      },
      setAttributeByHeaderCellIndex: (w, R, U) => {
        var Oe;
        (Oe = p(S)) == null || Oe.orderedCells[w].addAttr(R, U);
      },
      setClassNameByHeaderCellIndex: (w, R) => {
        var U;
        (U = p(S)) == null || U.orderedCells[w].addClass(R);
      },
      removeClassNameByHeaderCellIndex: (w, R) => {
        var U;
        (U = p(S)) == null || U.orderedCells[w].removeClass(R);
      },
      notifySortAction: (w) => {
        c(w.columnId), f(w.sortValue), dt(ve(), "SMUIDataTableSorted", w);
      },
      getTableContainerHeight: () => g.getBoundingClientRect().height,
      getTableHeaderHeight: () => {
        const w = ve().querySelector(".mdc-data-table__header-row");
        if (!w)
          throw new Error("MDCDataTable: Table header element not found.");
        return w.getBoundingClientRect().height;
      },
      setProgressIndicatorStyles: (w) => {
        ue(N, w, !0);
      },
      addClassAtRowIndex: (w, R) => {
        var U;
        (U = p(y)) == null || U.orderedRows[w].addClass(R);
      },
      getRowCount: () => {
        var w;
        return ((w = p(y)) == null ? void 0 : w.rows.length) ?? 0;
      },
      getRowElements: () => {
        var w;
        return ((w = p(y)) == null ? void 0 : w.rows.map((R) => R.element)) ?? [];
      },
      getRowIdAtIndex: (w) => {
        var R;
        return ((R = p(y)) == null ? void 0 : R.orderedRows[w].rowId) ?? null;
      },
      getRowIndexByChildElement: (w) => {
        var R;
        return ((R = p(y)) == null ? void 0 : R.orderedRows.map((U) => U.element).indexOf(a(w, ".mdc-data-table__row"))) ?? -1;
      },
      getSelectedRowCount: () => {
        var w;
        return ((w = p(y)) == null ? void 0 : w.rows.filter((R) => R.selected).length) ?? 0;
      },
      isCheckboxAtRowIndexChecked: (w) => {
        var U;
        const R = (U = p(y)) == null ? void 0 : U.orderedRows[w].checkbox;
        return R ? R.checked : !1;
      },
      isHeaderRowCheckboxChecked: () => {
        var R;
        const w = (R = p(S)) == null ? void 0 : R.checkbox;
        return w ? w.checked : !1;
      },
      isRowsSelectable: () => !!ve().querySelector(".mdc-data-table__row-checkbox") || !!ve().querySelector(".mdc-data-table__header-row-checkbox"),
      notifyRowSelectionChanged: (w) => {
        var U;
        const R = (U = p(y)) == null ? void 0 : U.orderedRows[w.rowIndex];
        R && dt(ve(), "SMUIDataTableSelectionChanged", {
          row: R.element,
          rowId: R.rowId,
          rowIndex: w.rowIndex,
          selected: w.selected
        });
      },
      notifySelectedAll: () => {
        M(!1), dt(ve(), "SMUIDataTableSelectedAll");
      },
      notifyUnselectedAll: () => {
        M(!1), dt(ve(), "SMUIDataTableUnselectedAll");
      },
      notifyRowClick: (w) => dt(ve(), "SMUIDataTableClickRow", w),
      registerHeaderRowCheckbox: () => {
      },
      registerRowCheckboxes: () => {
      },
      removeClassAtRowIndex: (w, R) => {
        var U;
        (U = p(y)) == null || U.orderedRows[w].removeClass(R);
      },
      setAttributeAtRowIndex: (w, R, U) => {
        var Oe;
        (Oe = p(y)) == null || Oe.orderedRows[w].addAttr(R, U);
      },
      setHeaderRowCheckboxChecked: (w) => {
        var U;
        const R = (U = p(S)) == null ? void 0 : U.checkbox;
        R && (R.checked = w);
      },
      setHeaderRowCheckboxIndeterminate: M,
      setRowCheckboxCheckedAtIndex: (w, R) => {
        var Oe;
        const U = (Oe = p(y)) == null ? void 0 : Oe.orderedRows[w].checkbox;
        U && (U.checked = R);
      },
      setSortStatusLabelByHeaderCellIndex: (w, R) => {
      }
    }),
    !0
  ), p(b).init(), p(b).layout(), re = !0, () => {
    var w;
    (w = p(b)) == null || w.destroy();
  })), Es(() => {
    W && W();
  });
  function D(w) {
    p(b) && p(b).handleRowCheckboxChange(w);
  }
  function G(w) {
    H[w] || (H[w] = !0);
  }
  function Q(w) {
    (!(w in H) || H[w]) && (H[w] = !1);
  }
  function M(w) {
    var U;
    const R = (U = p(S)) == null ? void 0 : U.checkbox;
    R && (R.indeterminate = w);
  }
  function A(w) {
    if (!p(b) || !w.detail.target)
      return;
    const R = a(w.detail.target, ".mdc-data-table__header-cell--with-sort");
    R && xe(R);
  }
  function P(w) {
    if (!p(b) || !w.detail.target)
      return;
    const R = a(w.detail.target, ".mdc-data-table__row");
    R && p(b) && p(b).handleRowClick({ rowId: w.detail.rowId, row: R });
  }
  function xe(w) {
    var Rr, Mt;
    const R = ((Rr = p(S)) == null ? void 0 : Rr.orderedCells) ?? [], U = R.map((Nn) => Nn.element).indexOf(w);
    if (U === -1)
      return;
    const Oe = R[U].columnId ?? null;
    (Mt = p(b)) == null || Mt.handleSortAction({ columnId: Oe, columnIndex: U, headerCell: w });
  }
  function Ee() {
    var w;
    return (w = p(b)) == null ? void 0 : w.layout();
  }
  function ve() {
    return x;
  }
  var Z = { layout: Ee, getElement: ve }, ne = dp(), be = (w) => {
    var R;
    p(b) && p(b).handleHeaderRowCheckboxChange(), (R = t.onSMUIDataTableHeaderCheckboxChange) == null || R.call(t, w);
  }, Ce = (w) => {
    var R;
    A(w), (R = t.onSMUIDataTableHeaderClick) == null || R.call(t, w);
  }, ze = (w) => {
    var R;
    P(w), (R = t.onSMUIDataTableRowClick) == null || R.call(t, w);
  }, he = (w) => {
    var R;
    D(w), (R = t.onSMUIDataTableBodyCheckboxChange) == null || R.call(t, w);
  };
  ot(
    ne,
    (w, R) => ({
      class: w,
      ...R,
      onSMUIDataTableHeaderCheckboxChange: be,
      onSMUIDataTableHeaderClick: Ce,
      onSMUIDataTableRowClick: ze,
      onSMUIDataTableBodyCheckboxChange: he
    }),
    [
      () => wt({
        "mdc-data-table": !0,
        "mdc-data-table--sticky-header": s(),
        ...H,
        [l()]: !0
      }),
      () => cv(C, ["container$", "table$"])
    ]
  );
  var Re = oe(ne);
  ot(Re, (w, R) => ({ class: w, ...R }), [
    () => wt({
      "mdc-data-table__table-container": !0,
      [m()]: !0
    }),
    () => Co(C, "container$")
  ]);
  var Ie = oe(Re);
  ot(Ie, (w, R) => ({ class: w, ...R }), [
    () => wt({ "mdc-data-table__table": !0, [_()]: !0 }),
    () => Co(C, "table$")
  ]);
  var _e = oe(Ie);
  Ne(_e, () => t.children ?? fe), at(Ie, (w, R) => j == null ? void 0 : j(w, R), E), Qe(Re, (w) => g = w, () => g), at(Re, (w, R) => j == null ? void 0 : j(w, R), d);
  var me = Le(Re, 2);
  {
    var Te = (w) => {
      var R = fp(), U = Le(oe(R), 2);
      Ne(U, () => t.progress ?? fe), Ae((Oe) => lt(R, Oe), [
        () => Object.entries(p(N)).map(([Oe, Rr]) => `${Oe}: ${Rr};`).join(" ")
      ]), O(w, R);
    };
    ie(me, (w) => {
      t.progress && w(Te);
    });
  }
  var Fe = Le(me, 2);
  Ne(Fe, () => t.paginate ?? fe), Qe(ne, (w) => x = w, () => x), at(ne, (w, R) => j == null ? void 0 : j(w, R), o), O(e, ne);
  var Pe = ke(Z);
  return i(), Pe;
}
var vp = /* @__PURE__ */ de("<thead><!></thead>");
function pp(e, t) {
  Ue(t, !0);
  let r = T(t, "use", 19, () => []), n = /* @__PURE__ */ At(t, ["$$slots", "$$events", "$$legacy", "use", "children"]), i, a = /* @__PURE__ */ we(void 0), o = [];
  const l = /* @__PURE__ */ new WeakMap();
  ee("SMUI:data-table:row:header", !0);
  const s = le("SMUI:checkbox:mount");
  ee("SMUI:checkbox:mount", (_) => {
    ue(a, _, !0), s && s(_);
  });
  const u = le("SMUI:checkbox:unmount");
  ee("SMUI:checkbox:unmount", (_) => {
    ue(a, void 0), u && u(_);
  }), ee("SMUI:data-table:cell:mount", (_) => {
    o.push(_), l.set(_.element, _);
  }), ee("SMUI:data-table:cell:unmount", (_) => {
    const C = o.findIndex((x) => x === _);
    C !== -1 && o.splice(C, 1), l.delete(_.element);
  });
  const c = le("SMUI:data-table:header:mount"), f = le("SMUI:data-table:header:unmount");
  Gt(() => {
    const _ = {
      get cells() {
        return o;
      },
      get orderedCells() {
        return v();
      },
      get checkbox() {
        return p(a);
      }
    };
    return c && c(_), () => {
      f && f(_);
    };
  });
  function v() {
    return [
      ...h().querySelectorAll(".mdc-data-table__header-cell")
    ].map((_) => l.get(_)).filter((_) => _ && _._smui_data_table_header_cell_accessor);
  }
  function h() {
    return i;
  }
  var d = { getElement: h }, m = vp();
  ot(m, () => ({ ...n }));
  var E = oe(m);
  return Ne(E, () => t.children ?? fe), Qe(m, (_) => i = _, () => i), at(m, (_, C) => j == null ? void 0 : j(_, C), r), O(e, m), ke(d);
}
var mp = /* @__PURE__ */ de("<tbody><!></tbody>");
function gp(e, t) {
  Ue(t, !0);
  let r = T(t, "use", 19, () => []), n = T(t, "class", 3, ""), i = /* @__PURE__ */ At(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "children"
  ]), a, o = [];
  const l = /* @__PURE__ */ new WeakMap();
  ee("SMUI:data-table:row:header", !1), ee("SMUI:data-table:row:mount", (m) => {
    o.push(m), l.set(m.element, m);
  }), ee("SMUI:data-table:row:unmount", (m) => {
    const E = o.findIndex((_) => _ === m);
    E !== -1 && o.splice(E, 1), l.delete(m.element);
  });
  const s = le("SMUI:data-table:body:mount"), u = le("SMUI:data-table:body:unmount");
  Gt(() => {
    const m = {
      get rows() {
        return o;
      },
      get orderedRows() {
        return c();
      }
    };
    return s && s(m), () => {
      u && u(m);
    };
  });
  function c() {
    return [...f().querySelectorAll(".mdc-data-table__row")].map((m) => l.get(m)).filter((m) => m && m._smui_data_table_row_accessor);
  }
  function f() {
    return a;
  }
  var v = { getElement: f }, h = mp();
  ot(h, (m) => ({ class: m, ...i }), [
    () => wt({ "mdc-data-table__content": !0, [n()]: !0 })
  ]);
  var d = oe(h);
  return Ne(d, () => t.children ?? fe), Qe(h, (m) => a = m, () => a), at(h, (m, E) => j == null ? void 0 : j(m, E), r), O(e, h), ke(v);
}
let bp = 0;
var _p = /* @__PURE__ */ de("<tr><!></tr>");
function Mo(e, t) {
  Ue(t, !0);
  let r = T(t, "use", 19, () => []), n = T(t, "class", 3, ""), i = T(t, "rowId", 19, () => "SMUI-data-table-row-" + bp++), a = /* @__PURE__ */ At(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "rowId",
    "children"
  ]), o, l = /* @__PURE__ */ we(void 0), s = te({}), u = te({}), c = le("SMUI:data-table:row:header");
  const f = le("SMUI:checkbox:mount");
  ee("SMUI:checkbox:mount", (L) => {
    ue(l, L, !0), f && f(L);
  });
  const v = le("SMUI:checkbox:unmount");
  ee("SMUI:checkbox:unmount", (L) => {
    ue(l, void 0), v && v(L);
  });
  const h = le("SMUI:data-table:row:mount"), d = le("SMUI:data-table:row:unmount");
  Gt(() => {
    const L = c ? {
      _smui_data_table_row_accessor: !1,
      get element() {
        return g();
      },
      get checkbox() {
        return p(l);
      },
      get rowId() {
      },
      get selected() {
        return (p(l) && p(l).checked) ?? !1;
      },
      addClass: m,
      removeClass: E,
      getAttr: _,
      addAttr: C
    } : {
      _smui_data_table_row_accessor: !0,
      get element() {
        return g();
      },
      get checkbox() {
        return p(l);
      },
      get rowId() {
        return i();
      },
      get selected() {
        return (p(l) && p(l).checked) ?? !1;
      },
      addClass: m,
      removeClass: E,
      getAttr: _,
      addAttr: C
    };
    return h && h(L), () => {
      d && d(L);
    };
  });
  function m(L) {
    s[L] || (s[L] = !0);
  }
  function E(L) {
    (!(L in s) || s[L]) && (s[L] = !1);
  }
  function _(L) {
    return L in u ? u[L] ?? null : g().getAttribute(L);
  }
  function C(L, W) {
    u[L] !== W && (u[L] = W);
  }
  function x(L) {
    dt(g(), "SMUIDataTableHeaderClick", L);
  }
  function b(L) {
    dt(g(), "SMUIDataTableRowClick", { rowId: i(), target: L.target });
  }
  function g() {
    return o;
  }
  var S = { getElement: g }, y = _p(), H = (L) => {
    var W;
    c ? x(L) : b(L), (W = t.onclick) == null || W.call(t, L);
  };
  ot(
    y,
    (L) => ({
      class: L,
      "aria-selected": p(l) ? p(l).checked ? "true" : "false" : void 0,
      ...u,
      ...a,
      onclick: H
    }),
    [
      () => wt({
        "mdc-data-table__header-row": c,
        "mdc-data-table__row": !c,
        "mdc-data-table__row--selected": !c && p(l) && p(l).checked,
        ...s,
        [n()]: !0
      })
    ]
  );
  var N = oe(y);
  return Ne(N, () => t.children ?? fe), Qe(y, (L) => o = L, () => o), at(y, (L, W) => j == null ? void 0 : j(L, W), r), O(e, y), ke(S);
}
let yp = 0;
var Ep = /* @__PURE__ */ de('<div class="mdc-data-table__header-cell-wrapper"><!> <div class="mdc-data-table__sort-status-label" aria-hidden="true"> </div></div>'), wp = /* @__PURE__ */ de("<th><!></th>"), Ap = /* @__PURE__ */ de("<td><!></td>");
function ki(e, t) {
  Ue(t, !0);
  const r = () => br(_, "$sort", i), n = () => br(C, "$sortDirection", i), [i, a] = Pn();
  let o = le("SMUI:data-table:row:header"), l = T(t, "use", 19, () => []), s = T(t, "class", 3, ""), u = T(t, "numeric", 3, !1), c = T(t, "checkbox", 3, !1), f = T(t, "columnId", 19, () => o ? "SMUI-data-table-column-" + yp++ : "SMUI-data-table-unused"), v = T(t, "sortable", 19, () => le("SMUI:data-table:sortable")), h = /* @__PURE__ */ At(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "numeric",
    "checkbox",
    "columnId",
    "sortable",
    "children"
  ]), d, m = te({}), E = te({}), _ = le("SMUI:data-table:sort"), C = le("SMUI:data-table:sortDirection"), x = le("SMUI:data-table:sortAscendingAriaLabel"), b = le("SMUI:data-table:sortDescendingAriaLabel");
  v() && (ee("SMUI:label:context", "data-table:sortable-header-cell"), ee("SMUI:icon-button:context", "data-table:sortable-header-cell"), ee("SMUI:icon-button:aria-describedby", f() + "-status-label"));
  const g = le("SMUI:data-table:cell:mount"), S = le("SMUI:data-table:cell:unmount");
  Gt(() => {
    const M = o ? {
      _smui_data_table_header_cell_accessor: !0,
      get element() {
        return $();
      },
      get columnId() {
        return f();
      },
      addClass: y,
      removeClass: H,
      getAttr: N,
      addAttr: L
    } : {
      _smui_data_table_header_cell_accessor: !1,
      get element() {
        return $();
      },
      get columnId() {
      },
      addClass: y,
      removeClass: H,
      getAttr: N,
      addAttr: L
    };
    return g && g(M), () => {
      S && S(M);
    };
  });
  function y(M) {
    m[M] || (m[M] = !0);
  }
  function H(M) {
    (!(M in m) || m[M]) && (m[M] = !1);
  }
  function N(M) {
    return M in E ? E[M] ?? null : $().getAttribute(M);
  }
  function L(M, A) {
    E[M] !== A && (E[M] = A);
  }
  function W(M) {
    dt($(), "SMUIDataTableHeaderCheckboxChange", M);
  }
  function re(M) {
    dt($(), "SMUIDataTableBodyCheckboxChange", M);
  }
  function $() {
    return d;
  }
  var ge = { getElement: $ }, B = K(), se = z(B);
  {
    var D = (M) => {
      var A = wp(), P = (Z) => {
        var ne;
        c() && W(Z), (ne = t.onchange) == null || ne.call(t, Z);
      };
      ot(
        A,
        (Z) => ({
          class: Z,
          role: "columnheader",
          scope: "col",
          "data-column-id": f(),
          "aria-sort": v() ? r() === f() ? n() : "none" : void 0,
          ...E,
          ...h,
          onchange: P
        }),
        [
          () => wt({
            "mdc-data-table__header-cell": !0,
            "mdc-data-table__header-cell--numeric": u(),
            "mdc-data-table__header-cell--checkbox": c(),
            "mdc-data-table__header-cell--with-sort": v(),
            "mdc-data-table__header-cell--sorted": v() && r() === f(),
            ...m,
            [s()]: !0
          })
        ]
      );
      var xe = oe(A);
      {
        var Ee = (Z) => {
          var ne = Ep(), be = oe(ne);
          Ne(be, () => t.children ?? fe);
          var Ce = Le(be, 2), ze = oe(Ce);
          Ae(() => {
            Sn(Ce, "id", `${f() ?? ""}-status-label`), $t(ze, r() === f() ? n() === "ascending" ? x : b : "");
          }), O(Z, ne);
        }, ve = (Z) => {
          var ne = K(), be = z(ne);
          Ne(be, () => t.children ?? fe), O(Z, ne);
        };
        ie(xe, (Z) => {
          v() ? Z(Ee) : Z(ve, !1);
        });
      }
      Qe(A, (Z) => d = Z, () => d), at(A, (Z, ne) => j == null ? void 0 : j(Z, ne), l), O(M, A);
    }, G = (M) => {
      var A = Ap(), P = (Ee) => {
        var ve;
        c() && re(Ee), (ve = t.onchange) == null || ve.call(t, Ee);
      };
      ot(
        A,
        (Ee) => ({
          class: Ee,
          ...E,
          ...h,
          onchange: P
        }),
        [
          () => wt({
            "mdc-data-table__cell": !0,
            "mdc-data-table__cell--numeric": u(),
            "mdc-data-table__cell--checkbox": c(),
            ...m,
            [s()]: !0
          })
        ]
      );
      var xe = oe(A);
      Ne(xe, () => t.children ?? fe), Qe(A, (Ee) => d = Ee, () => d), at(A, (Ee, ve) => j == null ? void 0 : j(Ee, ve), l), O(M, A);
    };
    ie(se, (M) => {
      o ? M(D) : M(G, !1);
    });
  }
  O(e, B);
  var Q = ke(ge);
  return a(), Q;
}
qt(["click"]);
qt(["click"]);
function ua(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
var Sp = Object.freeze({
  // This flag exists as a workaround for issue 454 (basically a browser bug) - seems like these rect values take time to update when in grid layout. Setting it to true can cause strange behaviour in the REPL for non-grid zones, see issue 470
  USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT: "USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT"
});
ua({}, Sp.USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT, !1);
var Xn, Do = {
  DND_ZONE_ACTIVE: "dnd-zone-active",
  DND_ZONE_DRAG_DISABLED: "dnd-zone-drag-disabled"
};
Xn = {}, ua(Xn, Do.DND_ZONE_ACTIVE, "Tab to one the items and press space-bar or enter to start dragging it"), ua(Xn, Do.DND_ZONE_DRAG_DISABLED, "This is a disabled drag and drop list");
const xp = vt([]);
xp.subscribe;
qt(["click", "pointerdown", "pointerup", "pointermove"]);
qt(["click"]);
const Cp = 4e3;
function Ip() {
  let e = te({ items: [] }), t = 0;
  const r = (i) => {
    e.items = e.items.filter((a) => a.id !== i);
  }, n = (i, a, o, l = Cp) => {
    const s = t++, u = { id: s, summary: a, detail: o, type: i };
    return e.items = [...e.items, u], setTimeout(
      () => {
        r(s);
      },
      l
    ), s;
  };
  return {
    /** readonly state for UI host */
    get toasts() {
      return e;
    },
    success: (i, a, o) => n("success", i, a, o),
    error: (i, a, o) => n("error", i, a, o),
    info: (i, a, o) => n("info", i, a, o),
    warn: (i, a, o) => n("warn", i, a, o),
    remove: r
  };
}
Ip();
var Rp = /* @__PURE__ */ de('<div><div class="mdc-linear-progress__buffer"><div class="mdc-linear-progress__buffer-bar"></div> <div class="mdc-linear-progress__buffer-dots"></div></div> <div class="mdc-linear-progress__bar mdc-linear-progress__primary-bar"><span class="mdc-linear-progress__bar-inner"></span></div> <div class="mdc-linear-progress__bar mdc-linear-progress__secondary-bar"><span class="mdc-linear-progress__bar-inner"></span></div></div>');
function Tp(e, t) {
  Ue(t, !0);
  const [r, n] = Pn();
  let i = T(t, "use", 19, () => []), a = T(t, "class", 3, ""), o = T(t, "style", 3, ""), l = T(t, "indeterminate", 3, !1), s = T(t, "closed", 3, !1), u = T(t, "progress", 3, 0), c = T(t, "buffer", 3, void 0), f = /* @__PURE__ */ At(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "style",
    "indeterminate",
    "closed",
    "progress",
    "buffer"
  ]), v, h = /* @__PURE__ */ we(void 0), d = te({}), m = te({}), E = te({}), _ = te({}), C = te({}), x = le("SMUI:linear-progress:context"), b = le("SMUI:linear-progress:closed");
  qe(() => {
    b && Ji(b, s());
  }), qe(() => {
    p(h) && p(h).isDeterminate() !== !l() && p(h).setDeterminate(!l());
  }), qe(() => {
    p(h) && p(h).getProgress() !== u() && p(h).setProgress(u());
  }), qe(() => {
    p(h) && (c() == null ? p(h).setBuffer(1) : p(h).setBuffer(c()));
  }), qe(() => {
    p(h) && (s() ? p(h).close() : p(h).open());
  }), Gt(() => (ue(
    h,
    new up({
      addClass: S,
      forceLayout: () => {
        $().getBoundingClientRect();
      },
      setBufferBarStyle: W,
      setPrimaryBarStyle: re,
      hasClass: g,
      removeAttribute: N,
      removeClass: y,
      setAttribute: H,
      setStyle: L,
      attachResizeObserver: (A) => {
        const P = window.ResizeObserver;
        if (P) {
          const xe = new P(A);
          return xe.observe($()), xe;
        }
        return null;
      },
      getWidth: () => $().offsetWidth
    }),
    !0
  ), p(h).init(), () => {
    var A;
    (A = p(h)) == null || A.destroy();
  }));
  function g(A) {
    return A in d ? d[A] : $().classList.contains(A);
  }
  function S(A) {
    d[A] || (d[A] = !0);
  }
  function y(A) {
    (!(A in d) || d[A]) && (d[A] = !1);
  }
  function H(A, P) {
    m[A] !== P && (m[A] = P);
  }
  function N(A) {
    (!(A in m) || m[A] != null) && (m[A] = void 0);
  }
  function L(A, P) {
    E[A] != P && (P === "" || P == null ? delete E[A] : E[A] = P);
  }
  function W(A, P) {
    _[A] != P && (P === "" || P == null ? delete _[A] : _[A] = P);
  }
  function re(A, P) {
    C[A] != P && (P === "" || P == null ? delete C[A] : C[A] = P);
  }
  function $() {
    return v;
  }
  var ge = { getElement: $ }, B = Rp(), se = (A) => {
    var P;
    p(h) && p(h).handleTransitionEnd(), (P = t.ontransitionend) == null || P.call(t, A);
  };
  ot(
    B,
    (A, P) => ({
      class: A,
      style: P,
      role: "progressbar",
      "aria-valuemin": 0,
      "aria-valuemax": 1,
      "aria-valuenow": l() ? void 0 : u(),
      ...m,
      ...f,
      ontransitionend: se
    }),
    [
      () => wt({
        "mdc-linear-progress": !0,
        "mdc-linear-progress--indeterminate": l(),
        "mdc-linear-progress--closed": s(),
        "mdc-data-table__linear-progress": x === "data-table",
        ...d,
        [a()]: !0
      }),
      () => Object.entries(E).map(([A, P]) => `${A}: ${P};`).concat([o()]).join(" ")
    ]
  );
  var D = oe(B), G = oe(D), Q = Le(D, 2);
  Qe(B, (A) => v = A, () => v), at(B, (A, P) => j == null ? void 0 : j(A, P), i), Ae(
    (A, P) => {
      lt(G, A), lt(Q, P);
    },
    [
      () => Object.entries(_).map(([A, P]) => `${A}: ${P};`).join(" "),
      () => Object.entries(C).map(([A, P]) => `${A}: ${P};`).join(" ")
    ]
  ), O(e, B);
  var M = ke(ge);
  return n(), M;
}
var Op = /* @__PURE__ */ mt('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor" class="svelte-1mj71p3"><path d="M12 4l-8 8h16l-8-8z"></path></svg>'), Hp = /* @__PURE__ */ mt('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor" class="svelte-1mj71p3"><path d="M12 20l8-8H4l8 8z"></path></svg>'), Lp = (e, t) => t(), Pp = /* @__PURE__ */ de('<input type="text" class="svelte-1mj71p3"/>'), Mp = (e, t) => t(), Dp = /* @__PURE__ */ de('<input type="number" class="svelte-1mj71p3"/>'), Bp = /* @__PURE__ */ de("<!> <!>", 1), Np = /* @__PURE__ */ de('<div class="custom-cell-container svelte-1mj71p3"><div class="cell-header svelte-1mj71p3"><span class="header-title svelte-1mj71p3"> </span> <!></div> <!></div>'), Up = /* @__PURE__ */ de('<div class="cell-actions svelte-1mj71p3"></div>'), kp = /* @__PURE__ */ de("<!> <!>", 1);
function Fp(e, t) {
  Ue(t, !0);
  const r = () => br(m, "$sortColumn", a), n = () => br(E, "$sortDirection", a), i = () => br(d, "$filteredData", a), [a, o] = Pn();
  let l = T(t, "loadingDone", 15, !0), s = T(t, "label", 19, jv), u = T(t, "columnDefs", 19, () => []), c = T(t, "rowData", 31, () => te([])), f = T(t, "rowActions", 19, () => []), v = T(t, "searchInputLabel", 3, "Search"), h = te({ name: "", color: "", number: "" }), d = vt([]), m = vt(null), E = vt(null);
  t.store.store.subscribe((b) => {
    c([...b]), _();
  });
  function _() {
    let b = c().filter((g) => u().every((S) => {
      const y = h[S.field], H = S.filterValueGetter ? S.filterValueGetter(g) : g[S.field];
      return y ? S.filterType === "number" ? H == y : H.toString().toLowerCase().includes(y.toLowerCase()) : !0;
    }));
    b = C(b), d.set(b);
  }
  function C(b) {
    let g, S;
    return m.subscribe((y) => g = y), E.subscribe((y) => S = y), !g || !S ? b : b.sort((y, H) => {
      let N = y[g], L = H[g];
      return N == null && (N = ""), L == null && (L = ""), S === "asc" ? N.toString().localeCompare(L.toString()) : L.toString().localeCompare(N.toString());
    });
  }
  function x(b) {
    m.update((g) => {
      if (g === b)
        E.update((S) => S === "asc" ? "desc" : S === "desc" ? null : "asc");
      else
        return E.set("asc"), b;
      return b;
    }), _();
  }
  d.set(c()), hp(e, {
    get "table$aria-label"() {
      return s();
    },
    style: "max-width: 100%; width: 100%;",
    progress: (g) => {
      Tp(g, {
        indeterminate: !0,
        "aria-label": "Data is being loaded...",
        get closed() {
          return l();
        },
        set closed(S) {
          l(S);
        }
      });
    },
    children: (g, S) => {
      var y = kp(), H = z(y);
      pp(H, {
        children: (L, W) => {
          Mo(L, {
            class: "header-row",
            children: (re, $) => {
              var ge = K(), B = z(ge);
              gn(B, 17, u, Si, (se, D) => {
                ki(se, {
                  onclick: () => p(D).sortable && x(p(D).field),
                  get style() {
                    return p(D).headerStyle;
                  },
                  children: (G, Q) => {
                    var M = Np(), A = oe(M), P = oe(A), xe = oe(P), Ee = Le(P, 2);
                    {
                      var ve = (be) => {
                        var Ce = K(), ze = z(Ce);
                        {
                          var he = (Re) => {
                            var Ie = K(), _e = z(Ie);
                            {
                              var me = (Fe) => {
                                var Pe = Op();
                                O(Fe, Pe);
                              }, Te = (Fe) => {
                                var Pe = K(), w = z(Pe);
                                {
                                  var R = (U) => {
                                    var Oe = Hp();
                                    O(U, Oe);
                                  };
                                  ie(
                                    w,
                                    (U) => {
                                      n() === "desc" && U(R);
                                    },
                                    !0
                                  );
                                }
                                O(Fe, Pe);
                              };
                              ie(_e, (Fe) => {
                                n() === "asc" ? Fe(me) : Fe(Te, !1);
                              });
                            }
                            O(Re, Ie);
                          };
                          ie(ze, (Re) => {
                            r() === p(D).field && n() !== null && Re(he);
                          });
                        }
                        O(be, Ce);
                      };
                      ie(Ee, (be) => {
                        p(D).sortable && be(ve);
                      });
                    }
                    var Z = Le(A, 2);
                    {
                      var ne = (be) => {
                        var Ce = Bp(), ze = z(Ce);
                        {
                          var he = (_e) => {
                            var me = Pp();
                            me.__input = [Lp, _], Ae(() => Sn(me, "placeholder", `${v()} ${p(D).headerName}`)), no(me, () => h[p(D).field], (Te) => h[p(D).field] = Te), O(_e, me);
                          };
                          ie(ze, (_e) => {
                            p(D).filterType === "text" && _e(he);
                          });
                        }
                        var Re = Le(ze, 2);
                        {
                          var Ie = (_e) => {
                            var me = Dp();
                            me.__input = [Mp, _], Ae(() => Sn(me, "placeholder", `${v()} ${p(D).headerName}`)), no(me, () => h[p(D).field], (Te) => h[p(D).field] = Te), O(_e, me);
                          };
                          ie(Re, (_e) => {
                            p(D).filterType === "number" && _e(Ie);
                          });
                        }
                        O(be, Ce);
                      };
                      ie(Z, (be) => {
                        p(D).filter && be(ne);
                      });
                    }
                    Ae(() => {
                      lt(M, `min-width: ${p(D).minWidth ?? 0 ?? ""}`), $t(xe, p(D).headerName);
                    }), O(G, M);
                  },
                  $$slots: { default: !0 }
                });
              }), O(re, ge);
            },
            $$slots: { default: !0 }
          });
        },
        $$slots: { default: !0 }
      });
      var N = Le(H, 2);
      gp(N, {
        children: (L, W) => {
          var re = K(), $ = z(re);
          gn($, 1, i, Si, (ge, B) => {
            Mo(ge, {
              children: (se, D) => {
                var G = K(), Q = z(G);
                gn(Q, 17, u, (M) => M.field, (M, A) => {
                  var P = K(), xe = z(P);
                  {
                    var Ee = (Z) => {
                      ki(Z, {
                        children: (ne, be) => {
                          var Ce = Up();
                          gn(Ce, 21, f, Si, (ze, he) => {
                            var Re = K(), Ie = z(Re);
                            {
                              var _e = (Te) => {
                                {
                                  let Fe = /* @__PURE__ */ ye(() => p(he).disabled(p(B)));
                                  Dv(Te, {
                                    get iconComponent() {
                                      return p(he).iconComponent;
                                    },
                                    get iconStyles() {
                                      return p(he).iconStyles;
                                    },
                                    callback: () => p(he).callback(p(B)),
                                    get disabled() {
                                      return p(Fe);
                                    }
                                  });
                                }
                              }, me = (Te) => {
                                {
                                  let Fe = /* @__PURE__ */ ye(() => p(he).disabled(p(B)));
                                  Ov(Te, {
                                    class: "button",
                                    variant: "raised",
                                    callback: () => p(he).callback(p(B)),
                                    get disabled() {
                                      return p(Fe);
                                    },
                                    children: (Pe, w) => {
                                      var R = K(), U = z(R);
                                      {
                                        var Oe = (Mt) => {
                                          zv(Mt, { svgStyles: "margin: unset" });
                                        }, Rr = (Mt) => {
                                          var Nn = K(), Tl = z(Nn);
                                          {
                                            var Ol = (Tr) => {
                                              Wv(Tr, { svgStyles: "margin: unset" });
                                            }, Hl = (Tr) => {
                                              var Ba = K(), Ll = z(Ba);
                                              {
                                                var Pl = (Or) => {
                                                  Yv(Or, { svgStyles: "margin: unset" });
                                                }, Ml = (Or) => {
                                                  var Na = K(), Dl = z(Na);
                                                  {
                                                    var Bl = (Hr) => {
                                                      Jv(Hr, { svgStyles: "margin: unset" });
                                                    }, Nl = (Hr) => {
                                                      var Ua = K(), Ul = z(Ua);
                                                      {
                                                        var kl = (Lr) => {
                                                          tp(Lr, { svgStyles: "margin: unset" });
                                                        }, Fl = (Lr) => {
                                                          var ka = K(), Gl = z(ka);
                                                          {
                                                            var jl = (Pr) => {
                                                              np(Pr, { svgStyles: "margin: unset" });
                                                            }, Vl = (Pr) => {
                                                              var Fa = K(), ql = z(Fa);
                                                              {
                                                                var zl = (Mr) => {
                                                                  ap(Mr, { svgStyles: "margin: unset" });
                                                                }, Xl = (Mr) => {
                                                                  $v(Mr, { svgStyles: "margin: unset" });
                                                                };
                                                                ie(
                                                                  ql,
                                                                  (Mr) => {
                                                                    p(he).icon === "delete" ? Mr(zl) : Mr(Xl, !1);
                                                                  },
                                                                  !0
                                                                );
                                                              }
                                                              O(Pr, Fa);
                                                            };
                                                            ie(
                                                              Gl,
                                                              (Pr) => {
                                                                p(he).icon === "edit" ? Pr(jl) : Pr(Vl, !1);
                                                              },
                                                              !0
                                                            );
                                                          }
                                                          O(Lr, ka);
                                                        };
                                                        ie(
                                                          Ul,
                                                          (Lr) => {
                                                            p(he).icon === "remove" ? Lr(kl) : Lr(Fl, !1);
                                                          },
                                                          !0
                                                        );
                                                      }
                                                      O(Hr, Ua);
                                                    };
                                                    ie(
                                                      Dl,
                                                      (Hr) => {
                                                        p(he).icon === "find-in-page" ? Hr(Bl) : Hr(Nl, !1);
                                                      },
                                                      !0
                                                    );
                                                  }
                                                  O(Or, Na);
                                                };
                                                ie(
                                                  Ll,
                                                  (Or) => {
                                                    p(he).icon === "download" ? Or(Pl) : Or(Ml, !1);
                                                  },
                                                  !0
                                                );
                                              }
                                              O(Tr, Ba);
                                            };
                                            ie(
                                              Tl,
                                              (Tr) => {
                                                p(he).icon === "cancel" ? Tr(Ol) : Tr(Hl, !1);
                                              },
                                              !0
                                            );
                                          }
                                          O(Mt, Nn);
                                        };
                                        ie(U, (Mt) => {
                                          p(he).icon === "add" ? Mt(Oe) : Mt(Rr, !1);
                                        });
                                      }
                                      O(Pe, R);
                                    },
                                    $$slots: { default: !0 }
                                  });
                                }
                              };
                              ie(Ie, (Te) => {
                                p(he).iconComponent ? Te(_e) : Te(me, !1);
                              });
                            }
                            O(ze, Re);
                          }), O(ne, Ce);
                        },
                        $$slots: { default: !0 }
                      });
                    }, ve = (Z) => {
                      ki(Z, {
                        get numeric() {
                          return p(A).numeric;
                        },
                        get style() {
                          return p(A).cellStyle;
                        },
                        children: (ne, be) => {
                          var Ce = K(), ze = z(Ce);
                          {
                            var he = (Ie) => {
                              const _e = /* @__PURE__ */ ye(() => p(A).cellRenderer);
                              var me = K(), Te = z(me);
                              bi(Te, () => p(_e), (Fe, Pe) => {
                                Pe(Fe, _i(
                                  {
                                    get row() {
                                      return p(B);
                                    },
                                    get value() {
                                      return p(B)[p(A).field];
                                    },
                                    get col() {
                                      return p(A);
                                    }
                                  },
                                  () => p(A).cellRendererProps ?? {}
                                ));
                              }), O(Ie, me);
                            }, Re = (Ie) => {
                              var _e = K(), me = z(_e);
                              {
                                var Te = (Pe) => {
                                  var w = Yi();
                                  Ae((R) => $t(w, R), [
                                    () => p(A).valueFormatter(p(B)[p(A).field])
                                  ]), O(Pe, w);
                                }, Fe = (Pe) => {
                                  var w = Yi();
                                  Ae(() => $t(w, p(B)[p(A).field] ?? "")), O(Pe, w);
                                };
                                ie(
                                  me,
                                  (Pe) => {
                                    p(A).valueFormatter ? Pe(Te) : Pe(Fe, !1);
                                  },
                                  !0
                                );
                              }
                              O(Ie, _e);
                            };
                            ie(ze, (Ie) => {
                              p(A).cellRenderer ? Ie(he) : Ie(Re, !1);
                            });
                          }
                          O(ne, Ce);
                        },
                        $$slots: { default: !0 }
                      });
                    };
                    ie(xe, (Z) => {
                      p(A).field === "actions" ? Z(Ee) : Z(ve, !1);
                    });
                  }
                  O(M, P);
                }), O(se, G);
              },
              $$slots: { default: !0 }
            });
          }), O(L, re);
        },
        $$slots: { default: !0 }
      }), O(g, y);
    },
    $$slots: { progress: !0, default: !0 }
  }), ke(), o();
}
qt(["input"]);
var Gp = (e, t, r) => {
  var n;
  return (n = t.onChange) == null ? void 0 : n.call(t, t.row, p(r));
}, jp = /* @__PURE__ */ de("<option> </option>"), Vp = /* @__PURE__ */ de(`<div style="min-width: 180px"><select><option>—</option><!></select> <style>select {
      width: 100%;
      min-width: 180px;
    }</style></div>`);
function qp(e, t) {
  Ue(t, !0);
  let r = T(t, "locations", 19, () => []), n = /* @__PURE__ */ we(te(t.value ?? ""));
  qe(() => {
    ue(n, t.value ?? "", !0);
  }), qe(() => {
    var s;
    p(n) !== (t.value ?? "") && ((s = t.onChange) == null || s.call(t, t.row, p(n)));
  });
  var i = Vp(), a = oe(i);
  a.__change = [Gp, t, n];
  var o = oe(a);
  o.value = o.__value = "";
  var l = Le(o);
  gn(l, 17, r, (s) => s.value, (s, u) => {
    var c = jp(), f = oe(c), v = {};
    Ae(() => {
      $t(f, p(u).label), v !== (v = p(u).value) && (c.value = (c.__value = p(u).value) ?? "");
    }), O(s, c);
  }), bc(a, () => p(n), (s) => ue(n, s)), O(e, i), ke();
}
qt(["change"]);
yd({ en: Qd, de: Dd });
var zp = /* @__PURE__ */ de('<div class="app-container svelte-1lw4l1e"><h3 style="margin-bottom: 1rem;" class="svelte-1lw4l1e"> </h3> <!></div>');
function Xp(e, t) {
  Ue(t, !0);
  const r = () => br(_d, "$_", n), [n, i] = Pn(), a = kr.getInstance();
  let o = /* @__PURE__ */ we(te([])), l = "", s = /* @__PURE__ */ we(!0);
  Gt(() => {
    setTimeout(
      () => {
        ue(s, !1);
      },
      200
    );
  }), Gt(() => {
    a.getLocations().subscribe({
      next: (g) => {
        ue(o, g.map((S) => ({ label: S.name, value: S.uuid })), !0);
      }
    }), h();
  });
  const u = new uv();
  function c(g) {
    return new Date(g).toLocaleDateString();
  }
  function f(g) {
    var S;
    return !p(o) || !g ? g || "" : ((S = p(o).find((y) => y.value === g)) == null ? void 0 : S.label) ?? g;
  }
  let v = te([]);
  function h() {
    const g = d(v);
    a.searchResources(g).pipe(Ih(1), Rh((S) => {
      u.set(S.filter((y) => y.location !== l));
    })).subscribe();
  }
  function d(g) {
    const S = {
      uuid: null,
      type: null,
      name: null,
      location: null,
      author: null,
      from: null,
      to: null
    };
    return console.log("Convert filter to search params: ", g), g.forEach((y) => {
      console.log("KEY:", y.key), y.key === "from" || y.key === "to" ? S[y.key] = new Date(y.value).toISOString() : S[y.key] = y.value;
    }), S;
  }
  function m(g, S) {
    const y = g.location, H = S || null;
    if (y === H)
      return;
    const N = { ...g, location: H };
    u.update(N), (H ? a.assignResourceToLocation(H, g.uuid) : a.unassignResourceFromLocation(y ?? "", g.uuid)).subscribe({
      next: () => {
        h();
      },
      error: () => {
        const W = { ...g, location: y };
        u.update(W);
      }
    });
  }
  let E = /* @__PURE__ */ ye(() => [
    {
      headerName: r()("uuid"),
      field: "uuid",
      numeric: !1,
      filter: !0,
      filterType: "text",
      sortable: !1
    },
    {
      headerName: r()("name"),
      field: "name",
      numeric: !1,
      filter: !0,
      filterType: "text",
      sortable: !0
    },
    {
      headerName: r()("author"),
      field: "author",
      numeric: !1,
      filter: !0,
      filterType: "text",
      sortable: !0
    },
    {
      headerName: r()("type"),
      field: "type",
      numeric: !1,
      filter: !0,
      filterType: "text",
      sortable: !0
    },
    {
      headerName: r()("location"),
      field: "location",
      numeric: !1,
      filter: !0,
      filterType: "text",
      sortable: !0,
      cellRenderer: qp,
      cellRendererProps: {
        locations: p(o),
        onChange: m
      },
      filterValueGetter: (g) => f(g.location)
    },
    {
      headerName: r()("version"),
      field: "version",
      numeric: !1,
      filter: !0,
      filterType: "text",
      sortable: !0
    },
    {
      headerName: r()("changed_at"),
      field: "changedAt",
      numeric: !1,
      filter: !0,
      filterType: "text",
      sortable: !0,
      valueFormatter: c
    }
  ]);
  qe(() => {
  });
  var _ = K(), C = z(_);
  {
    var x = (g) => {
      {
        let S = /* @__PURE__ */ ye(() => !p(s));
        lp(g, {
          get loadingDone() {
            return p(S);
          }
        });
      }
    }, b = (g) => {
      var S = zp(), y = oe(S), H = oe(y), N = Le(y, 2);
      {
        let L = /* @__PURE__ */ ye(() => r()("search"));
        Fp(N, {
          get columnDefs() {
            return p(E);
          },
          get store() {
            return u;
          },
          get searchInputLabel() {
            return p(L);
          }
        });
      }
      Ae((L) => $t(H, L), [() => r()("search_result")]), O(g, S);
    };
    ie(C, (g) => {
      p(s) ? g(x) : g(b, !1);
    });
  }
  O(e, _), ke(), i();
}
const Il = "location-viewer", Rl = "0.0.1";
var Wp = /* @__PURE__ */ de('<!> <input type="hidden" name="package-name"/> <input type="hidden" name="package-version"/>', 1);
function Zp(e, t) {
  Ue(t, !0);
  let r = T(t, "dev", 3, !1);
  var n = Wp(), i = z(n);
  {
    var a = (s) => {
      Xp(s, {});
    };
    ie(i, (s) => {
      (t.doc || r()) && s(a);
    });
  }
  var o = Le(i, 2), l = Le(o, 2);
  Ae(() => {
    to(o, Il), to(l, Rl);
  }), O(e, n), ke();
}
var Zr;
class rm extends HTMLElement {
  constructor() {
    super();
    J(this, Zr);
    F(this, Zr, /* @__PURE__ */ we(te({ doc: void 0, editCount: void 0 })));
  }
  get props() {
    return p(I(this, Zr));
  }
  set props(r) {
    ue(I(this, Zr), r, !0);
  }
  connectedCallback() {
    var n;
    this.attachShadow({ mode: "open" }), this.props.doc = this._doc, this.props.editCount = this.editCount, oc(Zp, { target: this.shadowRoot, props: this.props });
    const r = Yp();
    (n = this.shadowRoot) == null || n.appendChild(r);
  }
  set doc(r) {
    this._doc = r, this.props.doc = r;
  }
  set editCount(r) {
    this.props.editCount = r;
  }
}
Zr = new WeakMap();
function Yp() {
  const e = `${Il}-v${Rl}-style`, t = Qp(), r = document.createElement("link");
  return r.rel = "stylesheet", r.type = "text/css", r.href = t, r.id = e, r;
}
function Qp() {
  const e = new URL(import.meta.url), t = e.origin, r = e.pathname.split("/").slice(0, -1).filter(Boolean).join("/");
  return [t, r, "style.css"].filter(Boolean).join("/");
}
export {
  rm as default
};
