var Jl = Object.defineProperty;
var Wa = (e) => {
  throw TypeError(e);
};
var Kl = (e, t, r) => t in e ? Jl(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var Br = (e, t, r) => Kl(e, typeof t != "symbol" ? t + "" : t, r), Ri = (e, t, r) => t.has(e) || Wa("Cannot " + r);
var T = (e, t, r) => (Ri(e, t, "read from private field"), r ? r.call(e) : t.get(e)), re = (e, t, r) => t.has(e) ? Wa("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), F = (e, t, r, n) => (Ri(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r), ke = (e, t, r) => (Ri(e, t, "access private method"), r);
const Oe = Symbol(), $l = "http://www.w3.org/1999/xhtml", eu = "http://www.w3.org/2000/svg", tu = "@attach", Vo = !1;
var hi = Array.isArray, ru = Array.prototype.indexOf, pa = Array.from, ri = Object.defineProperty, Qt = Object.getOwnPropertyDescriptor, qo = Object.getOwnPropertyDescriptors, nu = Object.prototype, iu = Array.prototype, ma = Object.getPrototypeOf, Za = Object.isExtensible;
function hn(e) {
  return typeof e == "function";
}
const pe = () => {
};
function zo(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function Xo() {
  var e, t, r = new Promise((n, i) => {
    e = n, t = i;
  });
  return { promise: r, resolve: e, reject: t };
}
const Ye = 2, ga = 4, ba = 8, Sr = 16, jt = 32, Ar = 64, _a = 128, dt = 256, ni = 512, Ge = 1024, ot = 2048, rr = 4096, Et = 8192, xr = 16384, ya = 32768, Cr = 65536, Ya = 1 << 17, au = 1 << 18, ln = 1 << 19, ou = 1 << 20, qi = 1 << 21, vi = 1 << 22, gr = 1 << 23, Lt = Symbol("$state"), Wo = Symbol("legacy props"), su = Symbol(""), Fr = new class extends Error {
  constructor() {
    super(...arguments);
    Br(this, "name", "StaleReactionError");
    Br(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
function Ea(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function lu() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function uu(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function cu() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function fu(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function du() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function hu(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function vu() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function pu() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function mu() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function gu() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
function bu() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function _u() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let yu = !1;
function Zo(e) {
  return e === this.v;
}
function wa(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Yo(e) {
  return !wa(e, this.v);
}
let un = !1, Eu = !1;
function wu() {
  un = !0;
}
let me = null;
function Jr(e) {
  me = e;
}
function ve(e) {
  return (
    /** @type {T} */
    Qo().get(e)
  );
}
function ne(e, t) {
  return Qo().set(e, t), t;
}
function Me(e, t = !1, r) {
  me = {
    p: me,
    c: null,
    e: null,
    s: e,
    x: null,
    l: un && !t ? { s: null, u: null, $: [] } : null
  };
}
function De(e) {
  var t = (
    /** @type {ComponentContext} */
    me
  ), r = t.e;
  if (r !== null) {
    t.e = null;
    for (var n of r)
      ds(n);
  }
  return e !== void 0 && (t.x = e), me = t.p, e ?? /** @type {T} */
  {};
}
function On() {
  return !un || me !== null && me.l === null;
}
function Qo(e) {
  return me === null && Ea(), me.c ?? (me.c = new Map(Su(me) || void 0));
}
function Su(e) {
  let t = e.p;
  for (; t !== null; ) {
    const r = t.c;
    if (r !== null)
      return r;
    t = t.p;
  }
  return null;
}
let cr = [];
function Jo() {
  var e = cr;
  cr = [], zo(e);
}
function tr(e) {
  if (cr.length === 0 && !yn) {
    var t = cr;
    queueMicrotask(() => {
      t === cr && Jo();
    });
  }
  cr.push(e);
}
function Au() {
  for (; cr.length > 0; )
    Jo();
}
const xu = /* @__PURE__ */ new WeakMap();
function Ko(e) {
  var t = Z;
  if (t === null)
    return W.f |= gr, e;
  if (t.f & ya)
    Kr(e, t);
  else {
    if (!(t.f & _a))
      throw !t.parent && e instanceof Error && $o(e), e;
    t.b.error(e);
  }
}
function Kr(e, t) {
  for (; t !== null; ) {
    if (t.f & _a)
      try {
        t.b.error(e);
        return;
      } catch (r) {
        e = r;
      }
    t = t.parent;
  }
  throw e instanceof Error && $o(e), e;
}
function $o(e) {
  const t = xu.get(e);
  t && (ri(e, "message", {
    value: t.message
  }), ri(e, "stack", {
    value: t.stack
  }));
}
const Un = /* @__PURE__ */ new Set();
let le = null, Qn = null, Ne = null, zi = /* @__PURE__ */ new Set(), Ot = [], pi = null, Xi = !1, yn = !1;
var zr, Xr, dr, In, Wr, Zr, hr, Yr, Rn, Tn, vt, Wi, Jn, Zi;
const ci = class ci {
  constructor() {
    re(this, vt);
    /**
     * The current values of any sources that are updated in this batch
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Source, any>}
     */
    Br(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any sources that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Source, any>}
     */
    re(this, zr, /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<() => void>}
     */
    re(this, Xr, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    re(this, dr, 0);
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    re(this, In, null);
    /**
     * Async effects inside a newly-created `<svelte:boundary>`
     * — these do not prevent the batch from committing
     * @type {Effect[]}
     */
    re(this, Wr, []);
    /**
     * Template effects and `$effect.pre` effects, which run when
     * a batch is committed
     * @type {Effect[]}
     */
    re(this, Zr, []);
    /**
     * The same as `#render_effects`, but for `$effect` (which runs after)
     * @type {Effect[]}
     */
    re(this, hr, []);
    /**
     * Block effects, which may need to re-run on subsequent flushes
     * in order to update internal sources (e.g. each block items)
     * @type {Effect[]}
     */
    re(this, Yr, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Effect[]}
     */
    re(this, Rn, []);
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Effect[]}
     */
    re(this, Tn, []);
    /**
     * A set of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`
     * @type {Set<Effect>}
     */
    Br(this, "skipped_effects", /* @__PURE__ */ new Set());
  }
  /**
   *
   * @param {Effect[]} root_effects
   */
  process(t) {
    var a;
    Ot = [], Qn = null, this.apply();
    for (const o of t)
      ke(this, vt, Wi).call(this, o);
    if (T(this, dr) === 0) {
      var r = Ne;
      ke(this, vt, Zi).call(this);
      var n = T(this, Zr), i = T(this, hr);
      F(this, Zr, []), F(this, hr, []), F(this, Yr, []), Qn = this, le = null, Ne = r, Qa(n), Qa(i), Qn = null, (a = T(this, In)) == null || a.resolve();
    } else
      ke(this, vt, Jn).call(this, T(this, Zr)), ke(this, vt, Jn).call(this, T(this, hr)), ke(this, vt, Jn).call(this, T(this, Yr));
    Ne = null;
    for (const o of T(this, Wr))
      An(o);
    F(this, Wr, []);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Source} source
   * @param {any} value
   */
  capture(t, r) {
    T(this, zr).has(t) || T(this, zr).set(t, r), this.current.set(t, t.v), Ne == null || Ne.set(t, t.v);
  }
  activate() {
    le = this;
  }
  deactivate() {
    le = null, Ne = null;
  }
  flush() {
    if (Ot.length > 0) {
      if (this.activate(), es(), le !== null && le !== this)
        return;
    } else T(this, dr) === 0 && ke(this, vt, Zi).call(this);
    this.deactivate();
    for (const t of zi)
      if (zi.delete(t), t(), le !== null)
        break;
  }
  increment() {
    F(this, dr, T(this, dr) + 1);
  }
  decrement() {
    F(this, dr, T(this, dr) - 1);
    for (const t of T(this, Rn))
      We(t, ot), Er(t);
    for (const t of T(this, Tn))
      We(t, rr), Er(t);
    this.flush();
  }
  /** @param {() => void} fn */
  add_callback(t) {
    T(this, Xr).add(t);
  }
  settled() {
    return (T(this, In) ?? F(this, In, Xo())).promise;
  }
  static ensure() {
    if (le === null) {
      const t = le = new ci();
      Un.add(le), yn || ci.enqueue(() => {
        le === t && t.flush();
      });
    }
    return le;
  }
  /** @param {() => void} task */
  static enqueue(t) {
    tr(t);
  }
  apply() {
  }
};
zr = new WeakMap(), Xr = new WeakMap(), dr = new WeakMap(), In = new WeakMap(), Wr = new WeakMap(), Zr = new WeakMap(), hr = new WeakMap(), Yr = new WeakMap(), Rn = new WeakMap(), Tn = new WeakMap(), vt = new WeakSet(), /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 */
Wi = function(t) {
  var u;
  t.f ^= Ge;
  for (var r = t.first; r !== null; ) {
    var n = r.f, i = (n & (jt | Ar)) !== 0, a = i && (n & Ge) !== 0, o = a || (n & Et) !== 0 || this.skipped_effects.has(r);
    if (!o && r.fn !== null) {
      i ? r.f ^= Ge : n & ga ? T(this, hr).push(r) : n & Ge || (n & vi && ((u = r.b) != null && u.is_pending()) ? T(this, Wr).push(r) : Ei(r) && (r.f & Sr && T(this, Yr).push(r), An(r)));
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
Jn = function(t) {
  for (const r of t)
    (r.f & ot ? T(this, Rn) : T(this, Tn)).push(r), We(r, Ge);
  t.length = 0;
}, /**
 * Append and remove branches to/from the DOM
 */
Zi = function() {
  var t;
  for (const r of T(this, Xr))
    r();
  if (T(this, Xr).clear(), Un.size > 1) {
    T(this, zr).clear();
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
          ts(o, a);
        if (Ot.length > 0) {
          le = n, n.apply();
          for (const o of Ot)
            ke(t = n, vt, Wi).call(t, o);
          Ot = [], n.deactivate();
        }
      }
    }
    le = null;
  }
  Un.delete(this);
};
let Ft = ci;
function Cu(e) {
  var t = yn;
  yn = !0;
  try {
    for (var r; ; ) {
      if (Au(), Ot.length === 0 && (le == null || le.flush(), Ot.length === 0))
        return pi = null, /** @type {T} */
        r;
      es();
    }
  } finally {
    yn = t;
  }
}
function es() {
  var e = jr;
  Xi = !0;
  try {
    var t = 0;
    for (eo(!0); Ot.length > 0; ) {
      var r = Ft.ensure();
      if (t++ > 1e3) {
        var n, i;
        Iu();
      }
      r.process(Ot), Jt.clear();
    }
  } finally {
    Xi = !1, eo(e), pi = null;
  }
}
function Iu() {
  try {
    du();
  } catch (e) {
    Kr(e, pi);
  }
}
let Ut = null;
function Qa(e) {
  var t = e.length;
  if (t !== 0) {
    for (var r = 0; r < t; ) {
      var n = e[r++];
      if (!(n.f & (xr | Et)) && Ei(n) && (Ut = [], An(n), n.deps === null && n.first === null && n.nodes_start === null && (n.teardown === null && n.ac === null ? ps(n) : n.fn = null), (Ut == null ? void 0 : Ut.length) > 0)) {
        Jt.clear();
        for (const i of Ut)
          An(i);
        Ut = [];
      }
    }
    Ut = null;
  }
}
function ts(e, t) {
  if (e.reactions !== null)
    for (const r of e.reactions) {
      const n = r.f;
      n & Ye ? ts(
        /** @type {Derived} */
        r,
        t
      ) : n & (vi | Sr) && rs(r, t) && (We(r, ot), Er(
        /** @type {Effect} */
        r
      ));
    }
}
function rs(e, t) {
  if (e.deps !== null) {
    for (const r of e.deps)
      if (t.includes(r) || r.f & Ye && rs(
        /** @type {Derived} */
        r,
        t
      ))
        return !0;
  }
  return !1;
}
function Er(e) {
  for (var t = pi = e; t.parent !== null; ) {
    t = t.parent;
    var r = t.f;
    if (Xi && t === Z && r & Sr)
      return;
    if (r & (Ar | jt)) {
      if (!(r & Ge)) return;
      t.f ^= Ge;
    }
  }
  Ot.push(t);
}
function Ru(e) {
  let t = 0, r = wr(0), n;
  return () => {
    zu() && (f(r), _i(() => (t === 0 && (n = ar(() => e(() => En(r)))), t += 1, () => {
      tr(() => {
        t -= 1, t === 0 && (n == null || n(), n = void 0, En(r));
      });
    })));
  };
}
var Tu = Cr | ln | _a;
function Ou(e, t, r) {
  new Hu(e, t, r);
}
var bt, ut, va, It, vr, Rt, ct, Je, Tt, zt, pr, Xt, mr, Wt, fi, di, Ze, Lu, Pu, Kn, $n, Yi;
class Hu {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   */
  constructor(t, r, n) {
    re(this, Ze);
    /** @type {Boundary | null} */
    Br(this, "parent");
    re(this, bt, !1);
    /** @type {TemplateNode} */
    re(this, ut);
    /** @type {TemplateNode | null} */
    re(this, va, null);
    /** @type {BoundaryProps} */
    re(this, It);
    /** @type {((anchor: Node) => void)} */
    re(this, vr);
    /** @type {Effect} */
    re(this, Rt);
    /** @type {Effect | null} */
    re(this, ct, null);
    /** @type {Effect | null} */
    re(this, Je, null);
    /** @type {Effect | null} */
    re(this, Tt, null);
    /** @type {DocumentFragment | null} */
    re(this, zt, null);
    re(this, pr, 0);
    re(this, Xt, 0);
    re(this, mr, !1);
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    re(this, Wt, null);
    re(this, fi, () => {
      T(this, Wt) && $r(T(this, Wt), T(this, pr));
    });
    re(this, di, Ru(() => (F(this, Wt, wr(T(this, pr))), () => {
      F(this, Wt, null);
    })));
    F(this, ut, t), F(this, It, r), F(this, vr, n), this.parent = /** @type {Effect} */
    Z.b, F(this, bt, !!T(this, It).pending), F(this, Rt, ir(() => {
      Z.b = this;
      {
        try {
          F(this, ct, Fe(() => n(T(this, ut))));
        } catch (i) {
          this.error(i);
        }
        T(this, Xt) > 0 ? ke(this, Ze, $n).call(this) : F(this, bt, !1);
      }
    }, Tu));
  }
  /**
   * Returns `true` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_pending() {
    return T(this, bt) || !!this.parent && this.parent.is_pending();
  }
  has_pending_snippet() {
    return !!T(this, It).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   */
  update_pending_count(t) {
    ke(this, Ze, Yi).call(this, t), F(this, pr, T(this, pr) + t), zi.add(T(this, fi));
  }
  get_effect_pending() {
    return T(this, di).call(this), f(
      /** @type {Source<number>} */
      T(this, Wt)
    );
  }
  /** @param {unknown} error */
  error(t) {
    var r = T(this, It).onerror;
    let n = T(this, It).failed;
    if (T(this, mr) || !r && !n)
      throw t;
    T(this, ct) && (Ue(T(this, ct)), F(this, ct, null)), T(this, Je) && (Ue(T(this, Je)), F(this, Je, null)), T(this, Tt) && (Ue(T(this, Tt)), F(this, Tt, null));
    var i = !1, a = !1;
    const o = () => {
      if (i) {
        _u();
        return;
      }
      i = !0, a && gu(), Ft.ensure(), F(this, pr, 0), T(this, Tt) !== null && Kt(T(this, Tt), () => {
        F(this, Tt, null);
      }), F(this, bt, this.has_pending_snippet()), F(this, ct, ke(this, Ze, Kn).call(this, () => (F(this, mr, !1), Fe(() => T(this, vr).call(this, T(this, ut)))))), T(this, Xt) > 0 ? ke(this, Ze, $n).call(this) : F(this, bt, !1);
    };
    var l = W;
    try {
      $e(null), a = !0, r == null || r(t, o), a = !1;
    } catch (s) {
      Kr(s, T(this, Rt) && T(this, Rt).parent);
    } finally {
      $e(l);
    }
    n && tr(() => {
      F(this, Tt, ke(this, Ze, Kn).call(this, () => {
        F(this, mr, !0);
        try {
          return Fe(() => {
            n(
              T(this, ut),
              () => t,
              () => o
            );
          });
        } catch (s) {
          return Kr(
            s,
            /** @type {Effect} */
            T(this, Rt).parent
          ), null;
        } finally {
          F(this, mr, !1);
        }
      }));
    });
  }
}
bt = new WeakMap(), ut = new WeakMap(), va = new WeakMap(), It = new WeakMap(), vr = new WeakMap(), Rt = new WeakMap(), ct = new WeakMap(), Je = new WeakMap(), Tt = new WeakMap(), zt = new WeakMap(), pr = new WeakMap(), Xt = new WeakMap(), mr = new WeakMap(), Wt = new WeakMap(), fi = new WeakMap(), di = new WeakMap(), Ze = new WeakSet(), Lu = function() {
  try {
    F(this, ct, Fe(() => T(this, vr).call(this, T(this, ut))));
  } catch (t) {
    this.error(t);
  }
  F(this, bt, !1);
}, Pu = function() {
  const t = T(this, It).pending;
  t && (F(this, Je, Fe(() => t(T(this, ut)))), Ft.enqueue(() => {
    F(this, ct, ke(this, Ze, Kn).call(this, () => (Ft.ensure(), Fe(() => T(this, vr).call(this, T(this, ut)))))), T(this, Xt) > 0 ? ke(this, Ze, $n).call(this) : (Kt(
      /** @type {Effect} */
      T(this, Je),
      () => {
        F(this, Je, null);
      }
    ), F(this, bt, !1));
  }));
}, /**
 * @param {() => Effect | null} fn
 */
Kn = function(t) {
  var r = Z, n = W, i = me;
  Pt(T(this, Rt)), $e(T(this, Rt)), Jr(T(this, Rt).ctx);
  try {
    return t();
  } catch (a) {
    return Ko(a), null;
  } finally {
    Pt(r), $e(n), Jr(i);
  }
}, $n = function() {
  const t = (
    /** @type {(anchor: Node) => void} */
    T(this, It).pending
  );
  T(this, ct) !== null && (F(this, zt, document.createDocumentFragment()), Mu(T(this, ct), T(this, zt))), T(this, Je) === null && F(this, Je, Fe(() => t(T(this, ut))));
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 */
Yi = function(t) {
  var r;
  if (!this.has_pending_snippet()) {
    this.parent && ke(r = this.parent, Ze, Yi).call(r, t);
    return;
  }
  F(this, Xt, T(this, Xt) + t), T(this, Xt) === 0 && (F(this, bt, !1), T(this, Je) && Kt(T(this, Je), () => {
    F(this, Je, null);
  }), T(this, zt) && (T(this, ut).before(T(this, zt)), F(this, zt, null)), tr(() => {
    Ft.ensure().flush();
  }));
};
function Mu(e, t) {
  for (var r = e.nodes_start, n = e.nodes_end; r !== null; ) {
    var i = r === n ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Hn(r)
    );
    t.append(r), r = i;
  }
}
function ns(e, t, r) {
  const n = On() ? mi : Sa;
  if (t.length === 0) {
    r(e.map(n));
    return;
  }
  var i = le, a = (
    /** @type {Effect} */
    Z
  ), o = Du();
  Promise.all(t.map((l) => /* @__PURE__ */ Bu(l))).then((l) => {
    o();
    try {
      r([...e.map(n), ...l]);
    } catch (s) {
      a.f & xr || Kr(s, a);
    }
    i == null || i.deactivate(), Qi();
  }).catch((l) => {
    Kr(l, a);
  });
}
function Du() {
  var e = Z, t = W, r = me, n = le;
  return function() {
    Pt(e), $e(t), Jr(r), n == null || n.activate();
  };
}
function Qi() {
  Pt(null), $e(null), Jr(null);
}
// @__NO_SIDE_EFFECTS__
function mi(e) {
  var t = Ye | ot, r = W !== null && W.f & Ye ? (
    /** @type {Derived} */
    W
  ) : null;
  return Z === null || r !== null && r.f & dt ? t |= dt : Z.f |= ln, {
    ctx: me,
    deps: null,
    effects: null,
    equals: Zo,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      Oe
    ),
    wv: 0,
    parent: r ?? Z,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function Bu(e, t) {
  let r = (
    /** @type {Effect | null} */
    Z
  );
  r === null && lu();
  var n = (
    /** @type {Boundary} */
    r.b
  ), i = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), a = wr(
    /** @type {V} */
    Oe
  ), o = !W, l = /* @__PURE__ */ new Map();
  return Wu(() => {
    var v;
    var s = Xo();
    i = s.promise;
    try {
      Promise.resolve(e()).then(s.resolve, s.reject).then(Qi);
    } catch (p) {
      s.reject(p), Qi();
    }
    var u = (
      /** @type {Batch} */
      le
    ), c = n.is_pending();
    o && (n.update_pending_count(1), c || (u.increment(), (v = l.get(u)) == null || v.reject(Fr), l.delete(u), l.set(u, s)));
    const d = (p, h = void 0) => {
      if (c || u.activate(), h)
        h !== Fr && (a.f |= gr, $r(a, h));
      else {
        a.f & gr && (a.f ^= gr), $r(a, p);
        for (const [m, E] of l) {
          if (l.delete(m), m === u) break;
          E.reject(Fr);
        }
      }
      o && (n.update_pending_count(-1), c || u.decrement());
    };
    s.promise.then(d, (p) => d(null, p || "unknown"));
  }), bi(() => {
    for (const s of l.values())
      s.reject(Fr);
  }), new Promise((s) => {
    function u(c) {
      function d() {
        c === i ? s(a) : u(i);
      }
      c.then(d, d);
    }
    u(i);
  });
}
// @__NO_SIDE_EFFECTS__
function Ee(e) {
  const t = /* @__PURE__ */ mi(e);
  return bs(t), t;
}
// @__NO_SIDE_EFFECTS__
function Sa(e) {
  const t = /* @__PURE__ */ mi(e);
  return t.equals = Yo, t;
}
function is(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var r = 0; r < t.length; r += 1)
      Ue(
        /** @type {Effect} */
        t[r]
      );
  }
}
function Nu(e) {
  for (var t = e.parent; t !== null; ) {
    if (!(t.f & Ye))
      return (
        /** @type {Effect} */
        t
      );
    t = t.parent;
  }
  return null;
}
function Aa(e) {
  var t, r = Z;
  Pt(Nu(e));
  try {
    is(e), t = ws(e);
  } finally {
    Pt(r);
  }
  return t;
}
function as(e) {
  var t = Aa(e);
  if (e.equals(t) || (e.v = t, e.wv = ys()), !Ir)
    if (Ne !== null)
      Ne.set(e, e.v);
    else {
      var r = (Zt || e.f & dt) && e.deps !== null ? rr : Ge;
      We(e, r);
    }
}
const Jt = /* @__PURE__ */ new Map();
function wr(e, t) {
  var r = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: Zo,
    rv: 0,
    wv: 0
  };
  return r;
}
// @__NO_SIDE_EFFECTS__
function ue(e, t) {
  const r = wr(e);
  return bs(r), r;
}
// @__NO_SIDE_EFFECTS__
function os(e, t = !1, r = !0) {
  var i;
  const n = wr(e);
  return t || (n.equals = Yo), un && r && me !== null && me.l !== null && ((i = me.l).s ?? (i.s = [])).push(n), n;
}
function V(e, t, r = !1) {
  W !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!yt || W.f & Ya) && On() && W.f & (Ye | Sr | vi | Ya) && !(Xe != null && Xe.includes(e)) && mu();
  let n = r ? ie(t) : t;
  return $r(e, n);
}
function $r(e, t) {
  if (!e.equals(t)) {
    var r = e.v;
    Ir ? Jt.set(e, t) : Jt.set(e, r), e.v = t;
    var n = Ft.ensure();
    n.capture(e, r), e.f & Ye && (e.f & ot && Aa(
      /** @type {Derived} */
      e
    ), We(e, e.f & dt ? rr : Ge)), e.wv = ys(), ss(e, ot), On() && Z !== null && Z.f & Ge && !(Z.f & (jt | Ar)) && (lt === null ? Qu([e]) : lt.push(e));
  }
  return t;
}
function En(e) {
  V(e, e.v + 1);
}
function ss(e, t) {
  var r = e.reactions;
  if (r !== null)
    for (var n = On(), i = r.length, a = 0; a < i; a++) {
      var o = r[a], l = o.f;
      if (!(!n && o === Z)) {
        var s = (l & ot) === 0;
        s && We(o, t), l & Ye ? ss(
          /** @type {Derived} */
          o,
          rr
        ) : s && (l & Sr && Ut !== null && Ut.push(
          /** @type {Effect} */
          o
        ), Er(
          /** @type {Effect} */
          o
        ));
      }
    }
}
function ie(e) {
  if (typeof e != "object" || e === null || Lt in e)
    return e;
  const t = ma(e);
  if (t !== nu && t !== iu)
    return e;
  var r = /* @__PURE__ */ new Map(), n = hi(e), i = /* @__PURE__ */ ue(0), a = br, o = (l) => {
    if (br === a)
      return l();
    var s = W, u = br;
    $e(null), ro(a);
    var c = l();
    return $e(s), ro(u), c;
  };
  return n && r.set("length", /* @__PURE__ */ ue(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(l, s, u) {
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && vu();
        var c = r.get(s);
        return c === void 0 ? c = o(() => {
          var d = /* @__PURE__ */ ue(u.value);
          return r.set(s, d), d;
        }) : V(c, u.value, !0), !0;
      },
      deleteProperty(l, s) {
        var u = r.get(s);
        if (u === void 0) {
          if (s in l) {
            const c = o(() => /* @__PURE__ */ ue(Oe));
            r.set(s, c), En(i);
          }
        } else
          V(u, Oe), En(i);
        return !0;
      },
      get(l, s, u) {
        var p;
        if (s === Lt)
          return e;
        var c = r.get(s), d = s in l;
        if (c === void 0 && (!d || (p = Qt(l, s)) != null && p.writable) && (c = o(() => {
          var h = ie(d ? l[s] : Oe), m = /* @__PURE__ */ ue(h);
          return m;
        }), r.set(s, c)), c !== void 0) {
          var v = f(c);
          return v === Oe ? void 0 : v;
        }
        return Reflect.get(l, s, u);
      },
      getOwnPropertyDescriptor(l, s) {
        var u = Reflect.getOwnPropertyDescriptor(l, s);
        if (u && "value" in u) {
          var c = r.get(s);
          c && (u.value = f(c));
        } else if (u === void 0) {
          var d = r.get(s), v = d == null ? void 0 : d.v;
          if (d !== void 0 && v !== Oe)
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
        var u = r.get(s), c = u !== void 0 && u.v !== Oe || Reflect.has(l, s);
        if (u !== void 0 || Z !== null && (!c || (v = Qt(l, s)) != null && v.writable)) {
          u === void 0 && (u = o(() => {
            var p = c ? ie(l[s]) : Oe, h = /* @__PURE__ */ ue(p);
            return h;
          }), r.set(s, u));
          var d = f(u);
          if (d === Oe)
            return !1;
        }
        return c;
      },
      set(l, s, u, c) {
        var x;
        var d = r.get(s), v = s in l;
        if (n && s === "length")
          for (var p = u; p < /** @type {Source<number>} */
          d.v; p += 1) {
            var h = r.get(p + "");
            h !== void 0 ? V(h, Oe) : p in l && (h = o(() => /* @__PURE__ */ ue(Oe)), r.set(p + "", h));
          }
        if (d === void 0)
          (!v || (x = Qt(l, s)) != null && x.writable) && (d = o(() => /* @__PURE__ */ ue(void 0)), V(d, ie(u)), r.set(s, d));
        else {
          v = d.v !== Oe;
          var m = o(() => ie(u));
          V(d, m);
        }
        var E = Reflect.getOwnPropertyDescriptor(l, s);
        if (E != null && E.set && E.set.call(c, u), !v) {
          if (n && typeof s == "string") {
            var _ = (
              /** @type {Source<number>} */
              r.get("length")
            ), C = Number(s);
            Number.isInteger(C) && C >= _.v && V(_, C + 1);
          }
          En(i);
        }
        return !0;
      },
      ownKeys(l) {
        f(i);
        var s = Reflect.ownKeys(l).filter((d) => {
          var v = r.get(d);
          return v === void 0 || v.v !== Oe;
        });
        for (var [u, c] of r)
          c.v !== Oe && !(u in l) && s.push(u);
        return s;
      },
      setPrototypeOf() {
        pu();
      }
    }
  );
}
function Ja(e) {
  try {
    if (e !== null && typeof e == "object" && Lt in e)
      return e[Lt];
  } catch {
  }
  return e;
}
function Uu(e, t) {
  return Object.is(Ja(e), Ja(t));
}
var Ka, ls, us, cs;
function ku() {
  if (Ka === void 0) {
    Ka = window, ls = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, r = Text.prototype;
    us = Qt(t, "firstChild").get, cs = Qt(t, "nextSibling").get, Za(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), Za(r) && (r.__t = void 0);
  }
}
function nr(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function en(e) {
  return us.call(e);
}
// @__NO_SIDE_EFFECTS__
function Hn(e) {
  return cs.call(e);
}
function ae(e, t) {
  return /* @__PURE__ */ en(e);
}
function q(e, t = !1) {
  {
    var r = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ en(
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
function Fu(e) {
  e.textContent = "";
}
function xa() {
  return !1;
}
function Gu(e, t) {
  if (t) {
    const r = document.body;
    e.autofocus = !0, tr(() => {
      document.activeElement === r && e.focus();
    });
  }
}
let $a = !1;
function ju() {
  $a || ($a = !0, document.addEventListener(
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
function gi(e) {
  var t = W, r = Z;
  $e(null), Pt(null);
  try {
    return e();
  } finally {
    $e(t), Pt(r);
  }
}
function fs(e, t, r, n = r) {
  e.addEventListener(t, () => gi(r));
  const i = e.__on_r;
  i ? e.__on_r = () => {
    i(), n(!0);
  } : e.__on_r = () => n(!0), ju();
}
function Vu(e) {
  Z === null && W === null && fu(), W !== null && W.f & dt && Z === null && cu(), Ir && uu();
}
function qu(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function Vt(e, t, r, n = !0) {
  var i = Z;
  i !== null && i.f & Et && (e |= Et);
  var a = {
    ctx: me,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | ot,
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
      An(a), a.f |= ya;
    } catch (s) {
      throw Ue(a), s;
    }
  else t !== null && Er(a);
  if (n) {
    var o = a;
    if (r && o.deps === null && o.teardown === null && o.nodes_start === null && o.first === o.last && // either `null`, or a singular child
    !(o.f & ln) && (o = o.first), o !== null && (o.parent = i, i !== null && qu(o, i), W !== null && W.f & Ye && !(e & Ar))) {
      var l = (
        /** @type {Derived} */
        W
      );
      (l.effects ?? (l.effects = [])).push(o);
    }
  }
  return a;
}
function zu() {
  return W !== null && !yt;
}
function bi(e) {
  const t = Vt(ba, null, !1);
  return We(t, Ge), t.teardown = e, t;
}
function He(e) {
  Vu();
  var t = (
    /** @type {Effect} */
    Z.f
  ), r = !W && (t & jt) !== 0 && (t & ya) === 0;
  if (r) {
    var n = (
      /** @type {ComponentContext} */
      me
    );
    (n.e ?? (n.e = [])).push(e);
  } else
    return ds(e);
}
function ds(e) {
  return Vt(ga | ou, e, !1);
}
function Xu(e) {
  Ft.ensure();
  const t = Vt(Ar | ln, e, !0);
  return (r = {}) => new Promise((n) => {
    r.outro ? Kt(t, () => {
      Ue(t), n(void 0);
    }) : (Ue(t), n(void 0));
  });
}
function Ln(e) {
  return Vt(ga, e, !1);
}
function Wu(e) {
  return Vt(vi | ln, e, !0);
}
function _i(e, t = 0) {
  return Vt(ba | t, e, !0);
}
function we(e, t = [], r = []) {
  ns(t, r, (n) => {
    Vt(ba, () => e(...n.map(f)), !0);
  });
}
function ir(e, t = 0) {
  var r = Vt(Sr | t, e, !0);
  return r;
}
function Fe(e, t = !0) {
  return Vt(jt | ln, e, !0, t);
}
function hs(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = Ir, n = W;
    to(!0), $e(null);
    try {
      t.call(null);
    } finally {
      to(r), $e(n);
    }
  }
}
function vs(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    const i = r.ac;
    i !== null && gi(() => {
      i.abort(Fr);
    });
    var n = r.next;
    r.f & Ar ? r.parent = null : Ue(r, t), r = n;
  }
}
function Zu(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    t.f & jt || Ue(t), t = r;
  }
}
function Ue(e, t = !0) {
  var r = !1;
  (t || e.f & au) && e.nodes_start !== null && e.nodes_end !== null && (Yu(
    e.nodes_start,
    /** @type {TemplateNode} */
    e.nodes_end
  ), r = !0), vs(e, t && !r), ii(e, 0), We(e, xr);
  var n = e.transitions;
  if (n !== null)
    for (const a of n)
      a.stop();
  hs(e);
  var i = e.parent;
  i !== null && i.first !== null && ps(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = e.ac = null;
}
function Yu(e, t) {
  for (; e !== null; ) {
    var r = e === t ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Hn(e)
    );
    e.remove(), e = r;
  }
}
function ps(e) {
  var t = e.parent, r = e.prev, n = e.next;
  r !== null && (r.next = n), n !== null && (n.prev = r), t !== null && (t.first === e && (t.first = n), t.last === e && (t.last = r));
}
function Kt(e, t) {
  var r = [];
  Ca(e, r, !0), ms(r, () => {
    Ue(e), t && t();
  });
}
function ms(e, t) {
  var r = e.length;
  if (r > 0) {
    var n = () => --r || t();
    for (var i of e)
      i.out(n);
  } else
    t();
}
function Ca(e, t, r) {
  if (!(e.f & Et)) {
    if (e.f ^= Et, e.transitions !== null)
      for (const o of e.transitions)
        (o.is_global || r) && t.push(o);
    for (var n = e.first; n !== null; ) {
      var i = n.next, a = (n.f & Cr) !== 0 || (n.f & jt) !== 0;
      Ca(n, t, a ? r : !1), n = i;
    }
  }
}
function yi(e) {
  gs(e, !0);
}
function gs(e, t) {
  if (e.f & Et) {
    e.f ^= Et, e.f & Ge || (We(e, ot), Er(e));
    for (var r = e.first; r !== null; ) {
      var n = r.next, i = (r.f & Cr) !== 0 || (r.f & jt) !== 0;
      gs(r, i ? t : !1), r = n;
    }
    if (e.transitions !== null)
      for (const a of e.transitions)
        (a.is_global || t) && a.in();
  }
}
let jr = !1;
function eo(e) {
  jr = e;
}
let Ir = !1;
function to(e) {
  Ir = e;
}
let W = null, yt = !1;
function $e(e) {
  W = e;
}
let Z = null;
function Pt(e) {
  Z = e;
}
let Xe = null;
function bs(e) {
  W !== null && (Xe === null ? Xe = [e] : Xe.push(e));
}
let ze = null, rt = 0, lt = null;
function Qu(e) {
  lt = e;
}
let _s = 1, Sn = 0, br = Sn;
function ro(e) {
  br = e;
}
let Zt = !1;
function ys() {
  return ++_s;
}
function Ei(e) {
  var d;
  var t = e.f;
  if (t & ot)
    return !0;
  if (t & rr) {
    var r = e.deps, n = (t & dt) !== 0;
    if (r !== null) {
      var i, a, o = (t & ni) !== 0, l = n && Z !== null && !Zt, s = r.length;
      if ((o || l) && (Z === null || !(Z.f & xr))) {
        var u = (
          /** @type {Derived} */
          e
        ), c = u.parent;
        for (i = 0; i < s; i++)
          a = r[i], (o || !((d = a == null ? void 0 : a.reactions) != null && d.includes(u))) && (a.reactions ?? (a.reactions = [])).push(u);
        o && (u.f ^= ni), l && c !== null && !(c.f & dt) && (u.f ^= dt);
      }
      for (i = 0; i < s; i++)
        if (a = r[i], Ei(
          /** @type {Derived} */
          a
        ) && as(
          /** @type {Derived} */
          a
        ), a.wv > e.wv)
          return !0;
    }
    (!n || Z !== null && !Zt) && We(e, Ge);
  }
  return !1;
}
function Es(e, t, r = !0) {
  var n = e.reactions;
  if (n !== null && !(Xe != null && Xe.includes(e)))
    for (var i = 0; i < n.length; i++) {
      var a = n[i];
      a.f & Ye ? Es(
        /** @type {Derived} */
        a,
        t,
        !1
      ) : t === a && (r ? We(a, ot) : a.f & Ge && We(a, rr), Er(
        /** @type {Effect} */
        a
      ));
    }
}
function ws(e) {
  var m;
  var t = ze, r = rt, n = lt, i = W, a = Zt, o = Xe, l = me, s = yt, u = br, c = e.f;
  ze = /** @type {null | Value[]} */
  null, rt = 0, lt = null, Zt = (c & dt) !== 0 && (yt || !jr || W === null), W = c & (jt | Ar) ? null : e, Xe = null, Jr(e.ctx), yt = !1, br = ++Sn, e.ac !== null && (gi(() => {
    e.ac.abort(Fr);
  }), e.ac = null);
  try {
    e.f |= qi;
    var d = (
      /** @type {Function} */
      e.fn
    ), v = d(), p = e.deps;
    if (ze !== null) {
      var h;
      if (ii(e, rt), p !== null && rt > 0)
        for (p.length = rt + ze.length, h = 0; h < ze.length; h++)
          p[rt + h] = ze[h];
      else
        e.deps = p = ze;
      if (!Zt || // Deriveds that already have reactions can cleanup, so we still add them as reactions
      c & Ye && /** @type {import('#client').Derived} */
      e.reactions !== null)
        for (h = rt; h < p.length; h++)
          ((m = p[h]).reactions ?? (m.reactions = [])).push(e);
    } else p !== null && rt < p.length && (ii(e, rt), p.length = rt);
    if (On() && lt !== null && !yt && p !== null && !(e.f & (Ye | rr | ot)))
      for (h = 0; h < /** @type {Source[]} */
      lt.length; h++)
        Es(
          lt[h],
          /** @type {Effect} */
          e
        );
    return i !== null && i !== e && (Sn++, lt !== null && (n === null ? n = lt : n.push(.../** @type {Source[]} */
    lt))), e.f & gr && (e.f ^= gr), v;
  } catch (E) {
    return Ko(E);
  } finally {
    e.f ^= qi, ze = t, rt = r, lt = n, W = i, Zt = a, Xe = o, Jr(l), yt = s, br = u;
  }
}
function Ju(e, t) {
  let r = t.reactions;
  if (r !== null) {
    var n = ru.call(r, e);
    if (n !== -1) {
      var i = r.length - 1;
      i === 0 ? r = t.reactions = null : (r[n] = r[i], r.pop());
    }
  }
  r === null && t.f & Ye && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (ze === null || !ze.includes(t)) && (We(t, rr), t.f & (dt | ni) || (t.f ^= ni), is(
    /** @type {Derived} **/
    t
  ), ii(
    /** @type {Derived} **/
    t,
    0
  ));
}
function ii(e, t) {
  var r = e.deps;
  if (r !== null)
    for (var n = t; n < r.length; n++)
      Ju(e, r[n]);
}
function An(e) {
  var t = e.f;
  if (!(t & xr)) {
    We(e, Ge);
    var r = Z, n = jr;
    Z = e, jr = !0;
    try {
      t & Sr ? Zu(e) : vs(e), hs(e);
      var i = ws(e);
      e.teardown = typeof i == "function" ? i : null, e.wv = _s;
      var a;
      Vo && Eu && e.f & ot && e.deps;
    } finally {
      jr = n, Z = r;
    }
  }
}
async function Ku() {
  await Promise.resolve(), Cu();
}
function f(e) {
  var t = e.f, r = (t & Ye) !== 0;
  if (W !== null && !yt) {
    var n = Z !== null && (Z.f & xr) !== 0;
    if (!n && !(Xe != null && Xe.includes(e))) {
      var i = W.deps;
      if (W.f & qi)
        e.rv < Sn && (e.rv = Sn, ze === null && i !== null && i[rt] === e ? rt++ : ze === null ? ze = [e] : (!Zt || !ze.includes(e)) && ze.push(e));
      else {
        (W.deps ?? (W.deps = [])).push(e);
        var a = e.reactions;
        a === null ? e.reactions = [W] : a.includes(W) || a.push(W);
      }
    }
  } else if (r && /** @type {Derived} */
  e.deps === null && /** @type {Derived} */
  e.effects === null) {
    var o = (
      /** @type {Derived} */
      e
    ), l = o.parent;
    l !== null && !(l.f & dt) && (o.f ^= dt);
  }
  if (Ir) {
    if (Jt.has(e))
      return Jt.get(e);
    if (r) {
      o = /** @type {Derived} */
      e;
      var s = o.v;
      return (!(o.f & Ge) && o.reactions !== null || Ss(o)) && (s = Aa(o)), Jt.set(o, s), s;
    }
  } else if (r) {
    if (o = /** @type {Derived} */
    e, Ne != null && Ne.has(o))
      return Ne.get(o);
    Ei(o) && as(o);
  }
  if (Ne != null && Ne.has(e))
    return Ne.get(e);
  if (e.f & gr)
    throw e.v;
  return e.v;
}
function Ss(e) {
  if (e.v === Oe) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (Jt.has(t) || t.f & Ye && Ss(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function ar(e) {
  var t = yt;
  try {
    return yt = !0, e();
  } finally {
    yt = t;
  }
}
const $u = -7169;
function We(e, t) {
  e.f = e.f & $u | t;
}
function ec(e) {
  if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
    if (Lt in e)
      Ji(e);
    else if (!Array.isArray(e))
      for (let t in e) {
        const r = e[t];
        typeof r == "object" && r && Lt in r && Ji(r);
      }
  }
}
function Ji(e, t = /* @__PURE__ */ new Set()) {
  if (typeof e == "object" && e !== null && // We don't want to traverse DOM elements
  !(e instanceof EventTarget) && !t.has(e)) {
    t.add(e), e instanceof Date && e.getTime();
    for (let n in e)
      try {
        Ji(e[n], t);
      } catch {
      }
    const r = ma(e);
    if (r !== Object.prototype && r !== Array.prototype && r !== Map.prototype && r !== Set.prototype && r !== Date.prototype) {
      const n = qo(r);
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
const As = /* @__PURE__ */ new Set(), Ki = /* @__PURE__ */ new Set();
function Ia(e, t, r, n = {}) {
  function i(a) {
    if (n.capture || bn.call(t, a), !a.cancelBubble)
      return gi(() => r == null ? void 0 : r.call(this, a));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? tr(() => {
    t.addEventListener(e, i, n);
  }) : t.addEventListener(e, i, n), i;
}
function tc(e, t, r, n = {}) {
  var i = Ia(t, e, r, n);
  return () => {
    e.removeEventListener(t, i, n);
  };
}
function kn(e, t, r, n, i) {
  var a = { capture: n, passive: i }, o = Ia(e, t, r, a);
  (t === document.body || // @ts-ignore
  t === window || // @ts-ignore
  t === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  t instanceof HTMLMediaElement) && bi(() => {
    t.removeEventListener(e, o, a);
  });
}
function Mt(e) {
  for (var t = 0; t < e.length; t++)
    As.add(e[t]);
  for (var r of Ki)
    r(e);
}
let no = null;
function bn(e) {
  var C;
  var t = this, r = (
    /** @type {Node} */
    t.ownerDocument
  ), n = e.type, i = ((C = e.composedPath) == null ? void 0 : C.call(e)) || [], a = (
    /** @type {null | Element} */
    i[0] || e.target
  );
  no = e;
  var o = 0, l = no === e && e.__root;
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
    ri(e, "currentTarget", {
      configurable: !0,
      get() {
        return a || r;
      }
    });
    var c = W, d = Z;
    $e(null), Pt(null);
    try {
      for (var v, p = []; a !== null; ) {
        var h = a.assignedSlot || a.parentNode || /** @type {any} */
        a.host || null;
        try {
          var m = a["__" + n];
          if (m != null && (!/** @type {any} */
          a.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === a))
            if (hi(m)) {
              var [E, ..._] = m;
              E.apply(a, [e, ..._]);
            } else
              m.call(a, e);
        } catch (x) {
          v ? p.push(x) : v = x;
        }
        if (e.cancelBubble || h === t || h === null)
          break;
        a = h;
      }
      if (v) {
        for (let x of p)
          queueMicrotask(() => {
            throw x;
          });
        throw v;
      }
    } finally {
      e.__root = t, delete e.currentTarget, $e(c), Pt(d);
    }
  }
}
function xs(e) {
  var t = document.createElement("template");
  return t.innerHTML = e.replaceAll("<!>", "<!---->"), t.content;
}
function tn(e, t) {
  var r = (
    /** @type {Effect} */
    Z
  );
  r.nodes_start === null && (r.nodes_start = e, r.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function ce(e, t) {
  var r = (t & 1) !== 0, n = (t & 2) !== 0, i, a = !e.startsWith("<!>");
  return () => {
    i === void 0 && (i = xs(a ? e : "<!>" + e), r || (i = /** @type {Node} */
    /* @__PURE__ */ en(i)));
    var o = (
      /** @type {TemplateNode} */
      n || ls ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (r) {
      var l = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ en(o)
      ), s = (
        /** @type {TemplateNode} */
        o.lastChild
      );
      tn(l, s);
    } else
      tn(o, o);
    return o;
  };
}
// @__NO_SIDE_EFFECTS__
function rc(e, t, r = "svg") {
  var n = !e.startsWith("<!>"), i = `<${r}>${n ? e : "<!>" + e}</${r}>`, a;
  return () => {
    if (!a) {
      var o = (
        /** @type {DocumentFragment} */
        xs(i)
      ), l = (
        /** @type {Element} */
        /* @__PURE__ */ en(o)
      );
      a = /** @type {Element} */
      /* @__PURE__ */ en(l);
    }
    var s = (
      /** @type {TemplateNode} */
      a.cloneNode(!0)
    );
    return tn(s, s), s;
  };
}
// @__NO_SIDE_EFFECTS__
function pt(e, t) {
  return /* @__PURE__ */ rc(e, t, "svg");
}
function $i(e = "") {
  {
    var t = nr(e + "");
    return tn(t, t), t;
  }
}
function $() {
  var e = document.createDocumentFragment(), t = document.createComment(""), r = nr();
  return e.append(t, r), tn(t, r), e;
}
function L(e, t) {
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function nc(e) {
  return e.endsWith("capture") && e !== "gotpointercapture" && e !== "lostpointercapture";
}
const ic = [
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
function ac(e) {
  return ic.includes(e);
}
const oc = {
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
function sc(e) {
  return e = e.toLowerCase(), oc[e] ?? e;
}
const lc = ["touchstart", "touchmove"];
function uc(e) {
  return lc.includes(e);
}
function $t(e, t) {
  var r = t == null ? "" : typeof t == "object" ? t + "" : t;
  r !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = r, e.nodeValue = r + "");
}
function cc(e, t) {
  return fc(e, t);
}
const Nr = /* @__PURE__ */ new Map();
function fc(e, { target: t, anchor: r, props: n = {}, events: i, context: a, intro: o = !0 }) {
  ku();
  var l = /* @__PURE__ */ new Set(), s = (d) => {
    for (var v = 0; v < d.length; v++) {
      var p = d[v];
      if (!l.has(p)) {
        l.add(p);
        var h = uc(p);
        t.addEventListener(p, bn, { passive: h });
        var m = Nr.get(p);
        m === void 0 ? (document.addEventListener(p, bn, { passive: h }), Nr.set(p, 1)) : Nr.set(p, m + 1);
      }
    }
  };
  s(pa(As)), Ki.add(s);
  var u = void 0, c = Xu(() => {
    var d = r ?? t.appendChild(nr());
    return Ou(
      /** @type {TemplateNode} */
      d,
      {
        pending: () => {
        }
      },
      (v) => {
        if (a) {
          Me({});
          var p = (
            /** @type {ComponentContext} */
            me
          );
          p.c = a;
        }
        i && (n.$$events = i), u = e(v, n) || {}, a && De();
      }
    ), () => {
      var h;
      for (var v of l) {
        t.removeEventListener(v, bn);
        var p = (
          /** @type {number} */
          Nr.get(v)
        );
        --p === 0 ? (document.removeEventListener(v, bn), Nr.delete(v)) : Nr.set(v, p);
      }
      Ki.delete(s), d !== r && ((h = d.parentNode) == null || h.removeChild(d));
    };
  });
  return dc.set(u, c), u;
}
let dc = /* @__PURE__ */ new WeakMap();
function Pe(e, t, ...r) {
  var n = e, i = pe, a;
  ir(() => {
    i !== (i = t()) && (a && (Ue(a), a = null), a = Fe(() => (
      /** @type {SnippetFn} */
      i(n, ...r)
    )));
  }, Cr);
}
function Gt(e) {
  me === null && Ea(), un && me.l !== null ? hc(me).m.push(e) : He(() => {
    const t = ar(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function Ra(e) {
  me === null && Ea(), Gt(() => () => ar(e));
}
function hc(e) {
  var t = (
    /** @type {ComponentContextLegacy} */
    e.l
  );
  return t.u ?? (t.u = { a: [], b: [], m: [] });
}
function se(e, t, r = !1) {
  var n = e, i = null, a = null, o = Oe, l = r ? Cr : 0, s = !1;
  const u = (p, h = !0) => {
    s = !0, v(h, p);
  };
  var c = null;
  function d() {
    c !== null && (c.lastChild.remove(), n.before(c), c = null);
    var p = o ? i : a, h = o ? a : i;
    p && yi(p), h && Kt(h, () => {
      o ? a = null : i = null;
    });
  }
  const v = (p, h) => {
    if (o !== (o = p)) {
      var m = xa(), E = n;
      if (m && (c = document.createDocumentFragment(), c.append(E = nr())), o ? i ?? (i = h && Fe(() => h(E))) : a ?? (a = h && Fe(() => h(E))), m) {
        var _ = (
          /** @type {Batch} */
          le
        ), C = o ? i : a, x = o ? a : i;
        C && _.skipped_effects.delete(C), x && _.skipped_effects.add(x), _.add_callback(d);
      } else
        d();
    }
  };
  ir(() => {
    s = !1, t(u), s || v(null, null);
  }, l);
}
function Fn(e, t) {
  return t;
}
function vc(e, t, r) {
  for (var n = e.items, i = [], a = t.length, o = 0; o < a; o++)
    Ca(t[o].e, i, !0);
  var l = a > 0 && i.length === 0 && r !== null;
  if (l) {
    var s = (
      /** @type {Element} */
      /** @type {Element} */
      r.parentNode
    );
    Fu(s), s.append(
      /** @type {Element} */
      r
    ), n.clear(), Ct(e, t[0].prev, t[a - 1].next);
  }
  ms(i, () => {
    for (var u = 0; u < a; u++) {
      var c = t[u];
      l || (n.delete(c.k), Ct(e, c.prev, c.next)), Ue(c.e, !l);
    }
  });
}
function kr(e, t, r, n, i, a = null) {
  var o = e, l = { flags: t, items: /* @__PURE__ */ new Map(), first: null }, s = (t & 4) !== 0;
  if (s) {
    var u = (
      /** @type {Element} */
      e
    );
    o = u.appendChild(nr());
  }
  var c = null, d = !1, v = /* @__PURE__ */ new Map(), p = /* @__PURE__ */ Sa(() => {
    var _ = r();
    return hi(_) ? _ : _ == null ? [] : pa(_);
  }), h, m;
  function E() {
    pc(
      m,
      h,
      l,
      v,
      o,
      i,
      t,
      n,
      r
    ), a !== null && (h.length === 0 ? c ? yi(c) : c = Fe(() => a(o)) : c !== null && Kt(c, () => {
      c = null;
    }));
  }
  ir(() => {
    m ?? (m = /** @type {Effect} */
    Z), h = /** @type {V[]} */
    f(p);
    var _ = h.length;
    if (!(d && _ === 0)) {
      d = _ === 0;
      var C, x, b, g;
      if (xa()) {
        var A = /* @__PURE__ */ new Set(), y = (
          /** @type {Batch} */
          le
        );
        for (x = 0; x < _; x += 1) {
          b = h[x], g = n(b, x);
          var I = l.items.get(g) ?? v.get(g);
          I ? t & 3 && Cs(I, b, x, t) : (C = Is(
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
          ), v.set(g, C)), A.add(g);
        }
        for (const [D, H] of l.items)
          A.has(D) || y.skipped_effects.add(H.e);
        y.add_callback(E);
      } else
        E();
      f(p);
    }
  });
}
function pc(e, t, r, n, i, a, o, l, s) {
  var Y, P, S, M;
  var u = (o & 8) !== 0, c = (o & 3) !== 0, d = t.length, v = r.items, p = r.first, h = p, m, E = null, _, C = [], x = [], b, g, A, y;
  if (u)
    for (y = 0; y < d; y += 1)
      b = t[y], g = l(b, y), A = v.get(g), A !== void 0 && ((Y = A.a) == null || Y.measure(), (_ ?? (_ = /* @__PURE__ */ new Set())).add(A));
  for (y = 0; y < d; y += 1) {
    if (b = t[y], g = l(b, y), A = v.get(g), A === void 0) {
      var I = n.get(g);
      if (I !== void 0) {
        n.delete(g), v.set(g, I);
        var D = E ? E.next : h;
        Ct(r, E, I), Ct(r, I, D), Ti(I, D, i), E = I;
      } else {
        var H = h ? (
          /** @type {TemplateNode} */
          h.e.nodes_start
        ) : i;
        E = Is(
          H,
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
      v.set(g, E), C = [], x = [], h = E.next;
      continue;
    }
    if (c && Cs(A, b, y, o), A.e.f & Et && (yi(A.e), u && ((P = A.a) == null || P.unfix(), (_ ?? (_ = /* @__PURE__ */ new Set())).delete(A))), A !== h) {
      if (m !== void 0 && m.has(A)) {
        if (C.length < x.length) {
          var j = x[0], J;
          E = j.prev;
          var ee = C[0], Se = C[C.length - 1];
          for (J = 0; J < C.length; J += 1)
            Ti(C[J], j, i);
          for (J = 0; J < x.length; J += 1)
            m.delete(x[J]);
          Ct(r, ee.prev, Se.next), Ct(r, E, ee), Ct(r, Se, j), h = j, E = Se, y -= 1, C = [], x = [];
        } else
          m.delete(A), Ti(A, h, i), Ct(r, A.prev, A.next), Ct(r, A, E === null ? r.first : E.next), Ct(r, E, A), E = A;
        continue;
      }
      for (C = [], x = []; h !== null && h.k !== g; )
        h.e.f & Et || (m ?? (m = /* @__PURE__ */ new Set())).add(h), x.push(h), h = h.next;
      if (h === null)
        continue;
      A = h;
    }
    C.push(A), E = A, h = A.next;
  }
  if (h !== null || m !== void 0) {
    for (var B = m === void 0 ? [] : pa(m); h !== null; )
      h.e.f & Et || B.push(h), h = h.next;
    var fe = B.length;
    if (fe > 0) {
      var N = o & 4 && d === 0 ? i : null;
      if (u) {
        for (y = 0; y < fe; y += 1)
          (S = B[y].a) == null || S.measure();
        for (y = 0; y < fe; y += 1)
          (M = B[y].a) == null || M.fix();
      }
      vc(r, B, N);
    }
  }
  u && tr(() => {
    var ge;
    if (_ !== void 0)
      for (A of _)
        (ge = A.a) == null || ge.apply();
  }), e.first = r.first && r.first.e, e.last = E && E.e;
  for (var G of n.values())
    Ue(G.e);
  n.clear();
}
function Cs(e, t, r, n) {
  n & 1 && $r(e.v, t), n & 2 ? $r(
    /** @type {Value<number>} */
    e.i,
    r
  ) : e.i = r;
}
function Is(e, t, r, n, i, a, o, l, s, u, c) {
  var d = (s & 1) !== 0, v = (s & 16) === 0, p = d ? v ? /* @__PURE__ */ os(i, !1, !1) : wr(i) : i, h = s & 2 ? wr(o) : o, m = {
    i: h,
    v: p,
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
      E.append(e = nr());
    }
    return m.e = Fe(() => l(
      /** @type {Node} */
      e,
      p,
      h,
      u
    ), yu), m.e.prev = r && r.e, m.e.next = n && n.e, r === null ? c || (t.first = m) : (r.next = m, r.e.next = m.e), n !== null && (n.prev = m, n.e.prev = m.e), m;
  } finally {
  }
}
function Ti(e, t, r) {
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
function wi(e, t, r) {
  var n = e, i, a, o = null, l = null;
  function s() {
    a && (Kt(a), a = null), o && (o.lastChild.remove(), n.before(o), o = null), a = l, l = null;
  }
  ir(() => {
    if (i !== (i = t())) {
      var u = xa();
      if (i) {
        var c = n;
        u && (o = document.createDocumentFragment(), o.append(c = nr()), a && le.skipped_effects.add(a)), l = Fe(() => r(c, i));
      }
      u ? le.add_callback(s) : s();
    }
  }, Cr);
}
function io(e, t, r, n, i, a) {
  var o, l, s = null, u = (
    /** @type {TemplateNode} */
    e
  ), c;
  ir(() => {
    const d = t() || null;
    var v = d === "svg" ? eu : null;
    d !== o && (c && (d === null ? Kt(c, () => {
      c = null, l = null;
    }) : d === l ? yi(c) : Ue(c)), d && d !== l && (c = Fe(() => {
      if (s = v ? document.createElementNS(v, d) : document.createElement(d), tn(s, s), n) {
        var p = (
          /** @type {TemplateNode} */
          s.appendChild(nr())
        );
        n(s, p);
      }
      Z.nodes_end = s, u.before(s);
    })), o = d, o && (l = o));
  }, Cr);
}
function it(e, t, r) {
  Ln(() => {
    var n = ar(() => t(e, r == null ? void 0 : r()) || {});
    if (r && (n != null && n.update)) {
      var i = !1, a = (
        /** @type {any} */
        {}
      );
      _i(() => {
        var o = r();
        ec(o), i && wa(a, o) && (a = o, n.update(o));
      }), i = !0;
    }
    if (n != null && n.destroy)
      return () => (
        /** @type {Function} */
        n.destroy()
      );
  });
}
function mc(e, t) {
  var r = void 0, n;
  ir(() => {
    r !== (r = t()) && (n && (Ue(n), n = null), r && (n = Fe(() => {
      Ln(() => (
        /** @type {(node: Element) => void} */
        r(e)
      ));
    })));
  });
}
function Rs(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var i = e.length;
    for (t = 0; t < i; t++) e[t] && (r = Rs(e[t])) && (n && (n += " "), n += r);
  } else for (r in e) e[r] && (n && (n += " "), n += r);
  return n;
}
function gc() {
  for (var e, t, r = 0, n = "", i = arguments.length; r < i; r++) (e = arguments[r]) && (t = Rs(e)) && (n && (n += " "), n += t);
  return n;
}
function bc(e) {
  return typeof e == "object" ? gc(e) : e ?? "";
}
const ao = [...` 	
\r\f \v\uFEFF`];
function _c(e, t, r) {
  var n = e == null ? "" : "" + e;
  if (r) {
    for (var i in r)
      if (r[i])
        n = n ? n + " " + i : i;
      else if (n.length)
        for (var a = i.length, o = 0; (o = n.indexOf(i, o)) >= 0; ) {
          var l = o + a;
          (o === 0 || ao.includes(n[o - 1])) && (l === n.length || ao.includes(n[l])) ? n = (o === 0 ? "" : n.substring(0, o)) + n.substring(l + 1) : o = l;
        }
  }
  return n === "" ? null : n;
}
function oo(e, t = !1) {
  var r = t ? " !important;" : ";", n = "";
  for (var i in e) {
    var a = e[i];
    a != null && a !== "" && (n += " " + i + ": " + a + r);
  }
  return n;
}
function Oi(e) {
  return e[0] !== "-" || e[1] !== "-" ? e.toLowerCase() : e;
}
function yc(e, t) {
  if (t) {
    var r = "", n, i;
    if (Array.isArray(t) ? (n = t[0], i = t[1]) : n = t, e) {
      e = String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var a = !1, o = 0, l = !1, s = [];
      n && s.push(...Object.keys(n).map(Oi)), i && s.push(...Object.keys(i).map(Oi));
      var u = 0, c = -1;
      const m = e.length;
      for (var d = 0; d < m; d++) {
        var v = e[d];
        if (l ? v === "/" && e[d - 1] === "*" && (l = !1) : a ? a === v && (a = !1) : v === "/" && e[d + 1] === "*" ? l = !0 : v === '"' || v === "'" ? a = v : v === "(" ? o++ : v === ")" && o--, !l && a === !1 && o === 0) {
          if (v === ":" && c === -1)
            c = d;
          else if (v === ";" || d === m - 1) {
            if (c !== -1) {
              var p = Oi(e.substring(u, c).trim());
              if (!s.includes(p)) {
                v !== ";" && d++;
                var h = e.substring(u, d).trim();
                r += " " + h + ";";
              }
            }
            u = d + 1, c = -1;
          }
        }
      }
    }
    return n && (r += oo(n)), i && (r += oo(i, !0)), r = r.trim(), r === "" ? null : r;
  }
  return e == null ? null : String(e);
}
function Ec(e, t, r, n, i, a) {
  var o = e.__className;
  if (o !== r || o === void 0) {
    var l = _c(r, n, a);
    l == null ? e.removeAttribute("class") : t ? e.className = l : e.setAttribute("class", l), e.__className = r;
  } else if (a && i !== a)
    for (var s in a) {
      var u = !!a[s];
      (i == null || u !== !!i[s]) && e.classList.toggle(s, u);
    }
  return a;
}
function Hi(e, t = {}, r, n) {
  for (var i in r) {
    var a = r[i];
    t[i] !== a && (r[i] == null ? e.style.removeProperty(i) : e.style.setProperty(i, a, n));
  }
}
function st(e, t, r, n) {
  var i = e.__style;
  if (i !== t) {
    var a = yc(t, n);
    a == null ? e.removeAttribute("style") : e.style.cssText = a, e.__style = t;
  } else n && (Array.isArray(n) ? (Hi(e, r == null ? void 0 : r[0], n[0]), Hi(e, r == null ? void 0 : r[1], n[1], "important")) : Hi(e, r, n));
  return n;
}
function ai(e, t, r = !1) {
  if (e.multiple) {
    if (t == null)
      return;
    if (!hi(t))
      return bu();
    for (var n of e.options)
      n.selected = t.includes(wn(n));
    return;
  }
  for (n of e.options) {
    var i = wn(n);
    if (Uu(i, t)) {
      n.selected = !0;
      return;
    }
  }
  (!r || t !== void 0) && (e.selectedIndex = -1);
}
function Ts(e) {
  var t = new MutationObserver(() => {
    ai(e, e.__value);
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
  }), bi(() => {
    t.disconnect();
  });
}
function wc(e, t, r = t) {
  var n = !0;
  fs(e, "change", (i) => {
    var a = i ? "[selected]" : ":checked", o;
    if (e.multiple)
      o = [].map.call(e.querySelectorAll(a), wn);
    else {
      var l = e.querySelector(a) ?? // will fall back to first non-disabled option if no option is selected
      e.querySelector("option:not([disabled])");
      o = l && wn(l);
    }
    r(o);
  }), Ln(() => {
    var i = t();
    if (ai(e, i, n), n && i === void 0) {
      var a = e.querySelector(":checked");
      a !== null && (i = wn(a), r(i));
    }
    e.__value = i, n = !1;
  }), Ts(e);
}
function wn(e) {
  return "__value" in e ? e.__value : e.value;
}
const vn = Symbol("class"), pn = Symbol("style"), Os = Symbol("is custom element"), Hs = Symbol("is html");
function so(e, t) {
  var r = Ta(e);
  r.value === (r.value = // treat null and undefined the same for the initial value
  t ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  e.value === t && (t !== 0 || e.nodeName !== "PROGRESS") || (e.value = t ?? "");
}
function Sc(e, t) {
  t ? e.hasAttribute("selected") || e.setAttribute("selected", "") : e.removeAttribute("selected");
}
function er(e, t, r, n) {
  var i = Ta(e);
  i[t] !== (i[t] = r) && (t === "loading" && (e[su] = r), r == null ? e.removeAttribute(t) : typeof r != "string" && Ls(e).includes(t) ? e[t] = r : e.setAttribute(t, r));
}
function Ac(e, t, r, n, i = !1, a = !1) {
  var o = Ta(e), l = o[Os], s = !o[Hs], u = t || {}, c = e.tagName === "OPTION";
  for (var d in t)
    d in r || (r[d] = null);
  r.class ? r.class = bc(r.class) : r[vn] && (r.class = null), r[pn] && (r.style ?? (r.style = null));
  var v = Ls(e);
  for (const x in r) {
    let b = r[x];
    if (c && x === "value" && b == null) {
      e.value = e.__value = "", u[x] = b;
      continue;
    }
    if (x === "class") {
      var p = e.namespaceURI === "http://www.w3.org/1999/xhtml";
      Ec(e, p, b, n, t == null ? void 0 : t[vn], r[vn]), u[x] = b, u[vn] = r[vn];
      continue;
    }
    if (x === "style") {
      st(e, b, t == null ? void 0 : t[pn], r[pn]), u[x] = b, u[pn] = r[pn];
      continue;
    }
    var h = u[x];
    if (!(b === h && !(b === void 0 && e.hasAttribute(x)))) {
      u[x] = b;
      var m = x[0] + x[1];
      if (m !== "$$")
        if (m === "on") {
          const g = {}, A = "$$" + x;
          let y = x.slice(2);
          var E = ac(y);
          if (nc(y) && (y = y.slice(0, -7), g.capture = !0), !E && h) {
            if (b != null) continue;
            e.removeEventListener(y, u[A], g), u[A] = null;
          }
          if (b != null)
            if (E)
              e[`__${y}`] = b, Mt([y]);
            else {
              let I = function(D) {
                u[x].call(this, D);
              };
              u[A] = Ia(y, e, I, g);
            }
          else E && (e[`__${y}`] = void 0);
        } else if (x === "style")
          er(e, x, b);
        else if (x === "autofocus")
          Gu(
            /** @type {HTMLElement} */
            e,
            !!b
          );
        else if (!l && (x === "__value" || x === "value" && b != null))
          e.value = e.__value = b;
        else if (x === "selected" && c)
          Sc(
            /** @type {HTMLOptionElement} */
            e,
            b
          );
        else {
          var _ = x;
          s || (_ = sc(_));
          var C = _ === "defaultValue" || _ === "defaultChecked";
          if (b == null && !l && !C)
            if (o[x] = null, _ === "value" || _ === "checked") {
              let g = (
                /** @type {HTMLInputElement} */
                e
              );
              const A = t === void 0;
              if (_ === "value") {
                let y = g.defaultValue;
                g.removeAttribute(_), g.defaultValue = y, g.value = g.__value = A ? y : null;
              } else {
                let y = g.defaultChecked;
                g.removeAttribute(_), g.defaultChecked = y, g.checked = A ? y : !1;
              }
            } else
              e.removeAttribute(x);
          else C || v.includes(_) && (l || typeof b != "string") ? (e[_] = b, _ in o && (o[_] = Oe)) : typeof b != "function" && er(e, _, b);
        }
    }
  }
  return u;
}
function at(e, t, r = [], n = [], i, a = !1, o = !1) {
  ns(r, n, (l) => {
    var s = void 0, u = {}, c = e.nodeName === "SELECT", d = !1;
    if (ir(() => {
      var p = t(...l.map(f)), h = Ac(
        e,
        s,
        p,
        i,
        a,
        o
      );
      d && c && "value" in p && ai(
        /** @type {HTMLSelectElement} */
        e,
        p.value
      );
      for (let E of Object.getOwnPropertySymbols(u))
        p[E] || Ue(u[E]);
      for (let E of Object.getOwnPropertySymbols(p)) {
        var m = p[E];
        E.description === tu && (!s || m !== s[E]) && (u[E] && Ue(u[E]), u[E] = Fe(() => mc(e, () => m))), h[E] = m;
      }
      s = h;
    }), c) {
      var v = (
        /** @type {HTMLSelectElement} */
        e
      );
      Ln(() => {
        ai(
          v,
          /** @type {Record<string | symbol, any>} */
          s.value,
          !0
        ), Ts(v);
      });
    }
    d = !0;
  });
}
function Ta(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ?? (e.__attributes = {
      [Os]: e.nodeName.includes("-"),
      [Hs]: e.namespaceURI === $l
    })
  );
}
var lo = /* @__PURE__ */ new Map();
function Ls(e) {
  var t = e.getAttribute("is") || e.nodeName, r = lo.get(t);
  if (r) return r;
  lo.set(t, r = []);
  for (var n, i = e, a = Element.prototype; a !== i; ) {
    n = qo(i);
    for (var o in n)
      n[o].set && r.push(o);
    i = ma(i);
  }
  return r;
}
function uo(e, t, r = t) {
  var n = /* @__PURE__ */ new WeakSet();
  fs(e, "input", async (i) => {
    var a = i ? e.defaultValue : e.value;
    if (a = Li(e) ? Pi(a) : a, r(a), le !== null && n.add(le), await Ku(), a !== (a = t())) {
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
  ar(t) == null && e.value && (r(Li(e) ? Pi(e.value) : e.value), le !== null && n.add(le)), _i(() => {
    var i = t();
    if (e === document.activeElement) {
      var a = (
        /** @type {Batch} */
        Qn ?? le
      );
      if (n.has(a))
        return;
    }
    Li(e) && i === Pi(e.value) || e.type === "date" && !i && !e.value || i !== e.value && (e.value = i ?? "");
  });
}
function Li(e) {
  var t = e.type;
  return t === "number" || t === "range";
}
function Pi(e) {
  return e === "" ? null : +e;
}
function co(e, t) {
  return e === t || (e == null ? void 0 : e[Lt]) === t;
}
function je(e = {}, t, r, n) {
  return Ln(() => {
    var i, a;
    return _i(() => {
      i = a, a = [], ar(() => {
        e !== r(...a) && (t(e, ...a), i && co(r(...i), e) && t(null, ...i));
      });
    }), () => {
      tr(() => {
        a && co(r(...a), e) && t(null, ...a);
      });
    };
  }), e;
}
function Oa(e, t, r) {
  if (e == null)
    return t(void 0), r && r(void 0), pe;
  const n = ar(
    () => e.subscribe(
      t,
      // @ts-expect-error
      r
    )
  );
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
const Ur = [];
function xc(e, t) {
  return {
    subscribe: ht(e, t).subscribe
  };
}
function ht(e, t = pe) {
  let r = null;
  const n = /* @__PURE__ */ new Set();
  function i(l) {
    if (wa(e, l) && (e = l, r)) {
      const s = !Ur.length;
      for (const u of n)
        u[1](), Ur.push(u, e);
      if (s) {
        for (let u = 0; u < Ur.length; u += 2)
          Ur[u][0](Ur[u + 1]);
        Ur.length = 0;
      }
    }
  }
  function a(l) {
    i(l(
      /** @type {T} */
      e
    ));
  }
  function o(l, s = pe) {
    const u = [l, s];
    return n.add(u), n.size === 1 && (r = t(i, a) || pe), l(
      /** @type {T} */
      e
    ), () => {
      n.delete(u), n.size === 0 && r && (r(), r = null);
    };
  }
  return { set: i, update: a, subscribe: o };
}
function cn(e, t, r) {
  const n = !Array.isArray(e), i = n ? [e] : e;
  if (!i.every(Boolean))
    throw new Error("derived() expects stores as input, got a falsy value");
  const a = t.length < 2;
  return xc(r, (o, l) => {
    let s = !1;
    const u = [];
    let c = 0, d = pe;
    const v = () => {
      if (c)
        return;
      d();
      const h = t(n ? u[0] : u, o, l);
      a ? o(h) : d = typeof h == "function" ? h : pe;
    }, p = i.map(
      (h, m) => Oa(
        h,
        (E) => {
          u[m] = E, c &= ~(1 << m), s && v();
        },
        () => {
          c |= 1 << m;
        }
      )
    );
    return s = !0, v(), function() {
      zo(p), d(), s = !1;
    };
  });
}
function Ps(e) {
  let t;
  return Oa(e, (r) => t = r)(), t;
}
let Gn = !1, ea = Symbol();
function _r(e, t, r) {
  const n = r[t] ?? (r[t] = {
    store: null,
    source: /* @__PURE__ */ os(void 0),
    unsubscribe: pe
  });
  if (n.store !== e && !(ea in r))
    if (n.unsubscribe(), n.store = e ?? null, e == null)
      n.source.v = void 0, n.unsubscribe = pe;
    else {
      var i = !0;
      n.unsubscribe = Oa(e, (a) => {
        i ? n.source.v = a : V(n.source, a);
      }), i = !1;
    }
  return e && ea in r ? Ps(e) : f(n.source);
}
function ta(e, t) {
  return e.set(t), t;
}
function Pn() {
  const e = {};
  function t() {
    bi(() => {
      for (var r in e)
        e[r].unsubscribe();
      ri(e, ea, {
        enumerable: !1,
        value: !0
      });
    });
  }
  return [e, t];
}
function Cc(e) {
  var t = Gn;
  try {
    return Gn = !1, [e(), Gn];
  } finally {
    Gn = t;
  }
}
const Ic = {
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
function St(e, t, r) {
  return new Proxy(
    { props: e, exclude: t },
    Ic
  );
}
const Rc = {
  get(e, t) {
    let r = e.props.length;
    for (; r--; ) {
      let n = e.props[r];
      if (hn(n) && (n = n()), typeof n == "object" && n !== null && t in n) return n[t];
    }
  },
  set(e, t, r) {
    let n = e.props.length;
    for (; n--; ) {
      let i = e.props[n];
      hn(i) && (i = i());
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
      if (hn(n) && (n = n()), typeof n == "object" && n !== null && t in n) {
        const i = Qt(n, t);
        return i && !i.configurable && (i.configurable = !0), i;
      }
    }
  },
  has(e, t) {
    if (t === Lt || t === Wo) return !1;
    for (let r of e.props)
      if (hn(r) && (r = r()), r != null && t in r) return !0;
    return !1;
  },
  ownKeys(e) {
    const t = [];
    for (let r of e.props)
      if (hn(r) && (r = r()), !!r) {
        for (const n in r)
          t.includes(n) || t.push(n);
        for (const n of Object.getOwnPropertySymbols(r))
          t.includes(n) || t.push(n);
      }
    return t;
  }
};
function Si(...e) {
  return new Proxy({ props: e }, Rc);
}
function R(e, t, r, n) {
  var x;
  var i = !un || (r & 2) !== 0, a = (r & 8) !== 0, o = (r & 16) !== 0, l = (
    /** @type {V} */
    n
  ), s = !0, u = () => (s && (s = !1, l = o ? ar(
    /** @type {() => V} */
    n
  ) : (
    /** @type {V} */
    n
  )), l), c;
  if (a) {
    var d = Lt in e || Wo in e;
    c = ((x = Qt(e, t)) == null ? void 0 : x.set) ?? (d && t in e ? (b) => e[t] = b : void 0);
  }
  var v, p = !1;
  a ? [v, p] = Cc(() => (
    /** @type {V} */
    e[t]
  )) : v = /** @type {V} */
  e[t], v === void 0 && n !== void 0 && (v = u(), c && (i && hu(), c(v)));
  var h;
  if (i ? h = () => {
    var b = (
      /** @type {V} */
      e[t]
    );
    return b === void 0 ? u() : (s = !0, b);
  } : h = () => {
    var b = (
      /** @type {V} */
      e[t]
    );
    return b !== void 0 && (l = /** @type {V} */
    void 0), b === void 0 ? l : b;
  }, i && !(r & 4))
    return h;
  if (c) {
    var m = e.$$legacy;
    return (
      /** @type {() => V} */
      function(b, g) {
        return arguments.length > 0 ? ((!i || !g || m || p) && c(g ? h() : b), b) : h();
      }
    );
  }
  var E = !1, _ = (r & 1 ? mi : Sa)(() => (E = !1, h()));
  a && f(_);
  var C = (
    /** @type {Effect} */
    Z
  );
  return (
    /** @type {() => V} */
    function(b, g) {
      if (arguments.length > 0) {
        const A = g ? f(_) : i && a ? ie(b) : b;
        return V(_, A), E = !0, l !== void 0 && (l = A), b;
      }
      return Ir && E || C.f & xr ? _.v : f(_);
    }
  );
}
const Tc = "5";
var jo;
typeof window < "u" && ((jo = window.__svelte ?? (window.__svelte = {})).v ?? (jo.v = /* @__PURE__ */ new Set())).add(Tc);
function Oc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Hc = function(t) {
  return Lc(t) && !Pc(t);
};
function Lc(e) {
  return !!e && typeof e == "object";
}
function Pc(e) {
  var t = Object.prototype.toString.call(e);
  return t === "[object RegExp]" || t === "[object Date]" || Bc(e);
}
var Mc = typeof Symbol == "function" && Symbol.for, Dc = Mc ? Symbol.for("react.element") : 60103;
function Bc(e) {
  return e.$$typeof === Dc;
}
function Nc(e) {
  return Array.isArray(e) ? [] : {};
}
function xn(e, t) {
  return t.clone !== !1 && t.isMergeableObject(e) ? rn(Nc(e), e, t) : e;
}
function Uc(e, t, r) {
  return e.concat(t).map(function(n) {
    return xn(n, r);
  });
}
function kc(e, t) {
  if (!t.customMerge)
    return rn;
  var r = t.customMerge(e);
  return typeof r == "function" ? r : rn;
}
function Fc(e) {
  return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e).filter(function(t) {
    return Object.propertyIsEnumerable.call(e, t);
  }) : [];
}
function fo(e) {
  return Object.keys(e).concat(Fc(e));
}
function Ms(e, t) {
  try {
    return t in e;
  } catch {
    return !1;
  }
}
function Gc(e, t) {
  return Ms(e, t) && !(Object.hasOwnProperty.call(e, t) && Object.propertyIsEnumerable.call(e, t));
}
function jc(e, t, r) {
  var n = {};
  return r.isMergeableObject(e) && fo(e).forEach(function(i) {
    n[i] = xn(e[i], r);
  }), fo(t).forEach(function(i) {
    Gc(e, i) || (Ms(e, i) && r.isMergeableObject(t[i]) ? n[i] = kc(i, r)(e[i], t[i], r) : n[i] = xn(t[i], r));
  }), n;
}
function rn(e, t, r) {
  r = r || {}, r.arrayMerge = r.arrayMerge || Uc, r.isMergeableObject = r.isMergeableObject || Hc, r.cloneUnlessOtherwiseSpecified = xn;
  var n = Array.isArray(t), i = Array.isArray(e), a = n === i;
  return a ? n ? r.arrayMerge(e, t, r) : jc(e, t, r) : xn(t, r);
}
rn.all = function(t, r) {
  if (!Array.isArray(t))
    throw new Error("first argument should be an array");
  return t.reduce(function(n, i) {
    return rn(n, i, r);
  }, {});
};
var Vc = rn, qc = Vc;
const zc = /* @__PURE__ */ Oc(qc);
var ra = function(e, t) {
  return ra = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, n) {
    r.__proto__ = n;
  } || function(r, n) {
    for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (r[i] = n[i]);
  }, ra(e, t);
};
function At(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  ra(e, t);
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
function Xc(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
      t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (r[n[i]] = e[n[i]]);
  return r;
}
function Ds(e, t, r, n) {
  function i(a) {
    return a instanceof r ? a : new r(function(o) {
      o(a);
    });
  }
  return new (r || (r = Promise))(function(a, o) {
    function l(c) {
      try {
        u(n.next(c));
      } catch (d) {
        o(d);
      }
    }
    function s(c) {
      try {
        u(n.throw(c));
      } catch (d) {
        o(d);
      }
    }
    function u(c) {
      c.done ? a(c.value) : i(c.value).then(l, s);
    }
    u((n = n.apply(e, t || [])).next());
  });
}
function Ha(e, t) {
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
function na(e, t) {
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
function Vr(e, t, r) {
  if (r || arguments.length === 2) for (var n = 0, i = t.length, a; n < i; n++)
    (a || !(n in t)) && (a || (a = Array.prototype.slice.call(t, 0, n)), a[n] = t[n]);
  return e.concat(a || Array.prototype.slice.call(t));
}
function qr(e) {
  return this instanceof qr ? (this.v = e, this) : new qr(e);
}
function Wc(e, t, r) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var n = r.apply(e, t || []), i, a = [];
  return i = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype), l("next"), l("throw"), l("return", o), i[Symbol.asyncIterator] = function() {
    return this;
  }, i;
  function o(p) {
    return function(h) {
      return Promise.resolve(h).then(p, d);
    };
  }
  function l(p, h) {
    n[p] && (i[p] = function(m) {
      return new Promise(function(E, _) {
        a.push([p, m, E, _]) > 1 || s(p, m);
      });
    }, h && (i[p] = h(i[p])));
  }
  function s(p, h) {
    try {
      u(n[p](h));
    } catch (m) {
      v(a[0][3], m);
    }
  }
  function u(p) {
    p.value instanceof qr ? Promise.resolve(p.value.v).then(c, d) : v(a[0][2], p);
  }
  function c(p) {
    s("next", p);
  }
  function d(p) {
    s("throw", p);
  }
  function v(p, h) {
    p(h), a.shift(), a.length && s(a[0][0], a[0][1]);
  }
}
function Zc(e) {
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
function Mi(e, t) {
  var r = t && t.cache ? t.cache : tf, n = t && t.serializer ? t.serializer : $c, i = t && t.strategy ? t.strategy : Jc;
  return i(e, {
    cache: r,
    serializer: n
  });
}
function Yc(e) {
  return e == null || typeof e == "number" || typeof e == "boolean";
}
function Qc(e, t, r, n) {
  var i = Yc(n) ? n : r(n), a = t.get(i);
  return typeof a > "u" && (a = e.call(this, n), t.set(i, a)), a;
}
function Bs(e, t, r) {
  var n = Array.prototype.slice.call(arguments, 3), i = r(n), a = t.get(i);
  return typeof a > "u" && (a = e.apply(this, n), t.set(i, a)), a;
}
function Ns(e, t, r, n, i) {
  return r.bind(t, e, n, i);
}
function Jc(e, t) {
  var r = e.length === 1 ? Qc : Bs;
  return Ns(e, this, r, t.cache.create(), t.serializer);
}
function Kc(e, t) {
  return Ns(e, this, Bs, t.cache.create(), t.serializer);
}
var $c = function() {
  return JSON.stringify(arguments);
}, ef = (
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
), tf = {
  create: function() {
    return new ef();
  }
}, Di = {
  variadic: Kc
}, Q;
(function(e) {
  e[e.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", e[e.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", e[e.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", e[e.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", e[e.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", e[e.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", e[e.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", e[e.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", e[e.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", e[e.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", e[e.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", e[e.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", e[e.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", e[e.INVALID_TAG = 23] = "INVALID_TAG", e[e.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", e[e.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", e[e.UNCLOSED_TAG = 27] = "UNCLOSED_TAG";
})(Q || (Q = {}));
var be;
(function(e) {
  e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag";
})(be || (be = {}));
var nn;
(function(e) {
  e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime";
})(nn || (nn = {}));
function ho(e) {
  return e.type === be.literal;
}
function rf(e) {
  return e.type === be.argument;
}
function Us(e) {
  return e.type === be.number;
}
function ks(e) {
  return e.type === be.date;
}
function Fs(e) {
  return e.type === be.time;
}
function Gs(e) {
  return e.type === be.select;
}
function js(e) {
  return e.type === be.plural;
}
function nf(e) {
  return e.type === be.pound;
}
function Vs(e) {
  return e.type === be.tag;
}
function qs(e) {
  return !!(e && typeof e == "object" && e.type === nn.number);
}
function ia(e) {
  return !!(e && typeof e == "object" && e.type === nn.dateTime);
}
var zs = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/, af = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
function of(e) {
  var t = {};
  return e.replace(af, function(r) {
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
var sf = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
function lf(e) {
  if (e.length === 0)
    throw new Error("Number skeleton cannot be empty");
  for (var t = e.split(sf).filter(function(v) {
    return v.length > 0;
  }), r = [], n = 0, i = t; n < i.length; n++) {
    var a = i[n], o = a.split("/");
    if (o.length === 0)
      throw new Error("Invalid number skeleton");
    for (var l = o[0], s = o.slice(1), u = 0, c = s; u < c.length; u++) {
      var d = c[u];
      if (d.length === 0)
        throw new Error("Invalid number skeleton");
    }
    r.push({ stem: l, options: s });
  }
  return r;
}
function uf(e) {
  return e.replace(/^(.*?)-/, "");
}
var vo = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g, Xs = /^(@+)?(\+|#+)?[rs]?$/g, cf = /(\*)(0+)|(#+)(0+)|(0+)/g, Ws = /^(0+)$/;
function po(e) {
  var t = {};
  return e[e.length - 1] === "r" ? t.roundingPriority = "morePrecision" : e[e.length - 1] === "s" && (t.roundingPriority = "lessPrecision"), e.replace(Xs, function(r, n, i) {
    return typeof i != "string" ? (t.minimumSignificantDigits = n.length, t.maximumSignificantDigits = n.length) : i === "+" ? t.minimumSignificantDigits = n.length : n[0] === "#" ? t.maximumSignificantDigits = n.length : (t.minimumSignificantDigits = n.length, t.maximumSignificantDigits = n.length + (typeof i == "string" ? i.length : 0)), "";
  }), t;
}
function Zs(e) {
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
function ff(e) {
  var t;
  if (e[0] === "E" && e[1] === "E" ? (t = {
    notation: "engineering"
  }, e = e.slice(2)) : e[0] === "E" && (t = {
    notation: "scientific"
  }, e = e.slice(1)), t) {
    var r = e.slice(0, 2);
    if (r === "+!" ? (t.signDisplay = "always", e = e.slice(2)) : r === "+?" && (t.signDisplay = "exceptZero", e = e.slice(2)), !Ws.test(e))
      throw new Error("Malformed concise eng/scientific notation");
    t.minimumIntegerDigits = e.length;
  }
  return t;
}
function mo(e) {
  var t = {}, r = Zs(e);
  return r || t;
}
function df(e) {
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
        t.style = "unit", t.unit = uf(i.options[0]);
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
          return k(k({}, s), mo(u));
        }, {}));
        continue;
      case "engineering":
        t = k(k(k({}, t), { notation: "engineering" }), i.options.reduce(function(s, u) {
          return k(k({}, s), mo(u));
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
        i.options[0].replace(cf, function(s, u, c, d, v, p) {
          if (u)
            t.minimumIntegerDigits = c.length;
          else {
            if (d && v)
              throw new Error("We currently do not support maximum integer digits");
            if (p)
              throw new Error("We currently do not support exact integer digits");
          }
          return "";
        });
        continue;
    }
    if (Ws.test(i.stem)) {
      t.minimumIntegerDigits = i.stem.length;
      continue;
    }
    if (vo.test(i.stem)) {
      if (i.options.length > 1)
        throw new RangeError("Fraction-precision stems only accept a single optional option");
      i.stem.replace(vo, function(s, u, c, d, v, p) {
        return c === "*" ? t.minimumFractionDigits = u.length : d && d[0] === "#" ? t.maximumFractionDigits = d.length : v && p ? (t.minimumFractionDigits = v.length, t.maximumFractionDigits = v.length + p.length) : (t.minimumFractionDigits = u.length, t.maximumFractionDigits = u.length), "";
      });
      var a = i.options[0];
      a === "w" ? t = k(k({}, t), { trailingZeroDisplay: "stripIfInteger" }) : a && (t = k(k({}, t), po(a)));
      continue;
    }
    if (Xs.test(i.stem)) {
      t = k(k({}, t), po(i.stem));
      continue;
    }
    var o = Zs(i.stem);
    o && (t = k(k({}, t), o));
    var l = ff(i.stem);
    l && (t = k(k({}, t), l));
  }
  return t;
}
var jn = {
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
function hf(e, t) {
  for (var r = "", n = 0; n < e.length; n++) {
    var i = e.charAt(n);
    if (i === "j") {
      for (var a = 0; n + 1 < e.length && e.charAt(n + 1) === i; )
        a++, n++;
      var o = 1 + (a & 1), l = a < 2 ? 1 : 3 + (a >> 1), s = "a", u = vf(t);
      for ((u == "H" || u == "k") && (l = 0); l-- > 0; )
        r += s;
      for (; o-- > 0; )
        r = u + r;
    } else i === "J" ? r += "H" : r += i;
  }
  return r;
}
function vf(e) {
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
  var i = jn[n || ""] || jn[r || ""] || jn["".concat(r, "-001")] || jn["001"];
  return i[0];
}
var Bi, pf = new RegExp("^".concat(zs.source, "*")), mf = new RegExp("".concat(zs.source, "*$"));
function K(e, t) {
  return { start: e, end: t };
}
var gf = !!String.prototype.startsWith && "_a".startsWith("a", 1), bf = !!String.fromCodePoint, _f = !!Object.fromEntries, yf = !!String.prototype.codePointAt, Ef = !!String.prototype.trimStart, wf = !!String.prototype.trimEnd, Sf = !!Number.isSafeInteger, Af = Sf ? Number.isSafeInteger : function(e) {
  return typeof e == "number" && isFinite(e) && Math.floor(e) === e && Math.abs(e) <= 9007199254740991;
}, aa = !0;
try {
  var xf = Qs("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  aa = ((Bi = xf.exec("a")) === null || Bi === void 0 ? void 0 : Bi[0]) === "a";
} catch {
  aa = !1;
}
var go = gf ? (
  // Native
  function(t, r, n) {
    return t.startsWith(r, n);
  }
) : (
  // For IE11
  function(t, r, n) {
    return t.slice(n, n + r.length) === r;
  }
), oa = bf ? String.fromCodePoint : (
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
), bo = (
  // native
  _f ? Object.fromEntries : (
    // Ponyfill
    function(t) {
      for (var r = {}, n = 0, i = t; n < i.length; n++) {
        var a = i[n], o = a[0], l = a[1];
        r[o] = l;
      }
      return r;
    }
  )
), Ys = yf ? (
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
), Cf = Ef ? (
  // Native
  function(t) {
    return t.trimStart();
  }
) : (
  // Ponyfill
  function(t) {
    return t.replace(pf, "");
  }
), If = wf ? (
  // Native
  function(t) {
    return t.trimEnd();
  }
) : (
  // Ponyfill
  function(t) {
    return t.replace(mf, "");
  }
);
function Qs(e, t) {
  return new RegExp(e, t);
}
var sa;
if (aa) {
  var _o = Qs("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  sa = function(t, r) {
    var n;
    _o.lastIndex = r;
    var i = _o.exec(t);
    return (n = i[1]) !== null && n !== void 0 ? n : "";
  };
} else
  sa = function(t, r) {
    for (var n = []; ; ) {
      var i = Ys(t, r);
      if (i === void 0 || Js(i) || Hf(i))
        break;
      n.push(i), r += i >= 65536 ? 2 : 1;
    }
    return oa.apply(void 0, n);
  };
var Rf = (
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
              type: be.pound,
              location: K(l, this.clonePosition())
            });
          } else if (a === 60 && !this.ignoreTag && this.peek() === 47) {
            if (n)
              break;
            return this.error(Q.UNMATCHED_CLOSING_TAG, K(this.clonePosition(), this.clonePosition()));
          } else if (a === 60 && !this.ignoreTag && la(this.peek() || 0)) {
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
            type: be.literal,
            value: "<".concat(i, "/>"),
            location: K(n, this.clonePosition())
          },
          err: null
        };
      if (this.bumpIf(">")) {
        var a = this.parseMessage(t + 1, r, !0);
        if (a.err)
          return a;
        var o = a.val, l = this.clonePosition();
        if (this.bumpIf("</")) {
          if (this.isEOF() || !la(this.char()))
            return this.error(Q.INVALID_TAG, K(l, this.clonePosition()));
          var s = this.clonePosition(), u = this.parseTagName();
          return i !== u ? this.error(Q.UNMATCHED_CLOSING_TAG, K(s, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
            val: {
              type: be.tag,
              value: i,
              children: o,
              location: K(n, this.clonePosition())
            },
            err: null
          } : this.error(Q.INVALID_TAG, K(l, this.clonePosition())));
        } else
          return this.error(Q.UNCLOSED_TAG, K(n, this.clonePosition()));
      } else
        return this.error(Q.INVALID_TAG, K(n, this.clonePosition()));
    }, e.prototype.parseTagName = function() {
      var t = this.offset();
      for (this.bump(); !this.isEOF() && Of(this.char()); )
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
      var s = K(n, this.clonePosition());
      return {
        val: { type: be.literal, value: i, location: s },
        err: null
      };
    }, e.prototype.tryParseLeftAngleBracket = function() {
      return !this.isEOF() && this.char() === 60 && (this.ignoreTag || // If at the opening tag or closing tag position, bail.
      !Tf(this.peek() || 0)) ? (this.bump(), "<") : null;
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
      return oa.apply(void 0, r);
    }, e.prototype.tryParseUnquoted = function(t, r) {
      if (this.isEOF())
        return null;
      var n = this.char();
      return n === 60 || n === 123 || n === 35 && (r === "plural" || r === "selectordinal") || n === 125 && t > 0 ? null : (this.bump(), oa(n));
    }, e.prototype.parseArgument = function(t, r) {
      var n = this.clonePosition();
      if (this.bump(), this.bumpSpace(), this.isEOF())
        return this.error(Q.EXPECT_ARGUMENT_CLOSING_BRACE, K(n, this.clonePosition()));
      if (this.char() === 125)
        return this.bump(), this.error(Q.EMPTY_ARGUMENT, K(n, this.clonePosition()));
      var i = this.parseIdentifierIfPossible().value;
      if (!i)
        return this.error(Q.MALFORMED_ARGUMENT, K(n, this.clonePosition()));
      if (this.bumpSpace(), this.isEOF())
        return this.error(Q.EXPECT_ARGUMENT_CLOSING_BRACE, K(n, this.clonePosition()));
      switch (this.char()) {
        case 125:
          return this.bump(), {
            val: {
              type: be.argument,
              // value does not include the opening and closing braces.
              value: i,
              location: K(n, this.clonePosition())
            },
            err: null
          };
        case 44:
          return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(Q.EXPECT_ARGUMENT_CLOSING_BRACE, K(n, this.clonePosition())) : this.parseArgumentOptions(t, r, i, n);
        default:
          return this.error(Q.MALFORMED_ARGUMENT, K(n, this.clonePosition()));
      }
    }, e.prototype.parseIdentifierIfPossible = function() {
      var t = this.clonePosition(), r = this.offset(), n = sa(this.message, r), i = r + n.length;
      this.bumpTo(i);
      var a = this.clonePosition(), o = K(t, a);
      return { value: n, location: o };
    }, e.prototype.parseArgumentOptions = function(t, r, n, i) {
      var a, o = this.clonePosition(), l = this.parseIdentifierIfPossible().value, s = this.clonePosition();
      switch (l) {
        case "":
          return this.error(Q.EXPECT_ARGUMENT_TYPE, K(o, s));
        case "number":
        case "date":
        case "time": {
          this.bumpSpace();
          var u = null;
          if (this.bumpIf(",")) {
            this.bumpSpace();
            var c = this.clonePosition(), d = this.parseSimpleArgStyleIfPossible();
            if (d.err)
              return d;
            var v = If(d.val);
            if (v.length === 0)
              return this.error(Q.EXPECT_ARGUMENT_STYLE, K(this.clonePosition(), this.clonePosition()));
            var p = K(c, this.clonePosition());
            u = { style: v, styleLocation: p };
          }
          var h = this.tryParseArgumentClose(i);
          if (h.err)
            return h;
          var m = K(i, this.clonePosition());
          if (u && go(u == null ? void 0 : u.style, "::", 0)) {
            var E = Cf(u.style.slice(2));
            if (l === "number") {
              var d = this.parseNumberSkeletonFromString(E, u.styleLocation);
              return d.err ? d : {
                val: { type: be.number, value: n, location: m, style: d.val },
                err: null
              };
            } else {
              if (E.length === 0)
                return this.error(Q.EXPECT_DATE_TIME_SKELETON, m);
              var _ = E;
              this.locale && (_ = hf(E, this.locale));
              var v = {
                type: nn.dateTime,
                pattern: _,
                location: u.styleLocation,
                parsedOptions: this.shouldParseSkeletons ? of(_) : {}
              }, C = l === "date" ? be.date : be.time;
              return {
                val: { type: C, value: n, location: m, style: v },
                err: null
              };
            }
          }
          return {
            val: {
              type: l === "number" ? be.number : l === "date" ? be.date : be.time,
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
            return this.error(Q.EXPECT_SELECT_ARGUMENT_OPTIONS, K(x, k({}, x)));
          this.bumpSpace();
          var b = this.parseIdentifierIfPossible(), g = 0;
          if (l !== "select" && b.value === "offset") {
            if (!this.bumpIf(":"))
              return this.error(Q.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, K(this.clonePosition(), this.clonePosition()));
            this.bumpSpace();
            var d = this.tryParseDecimalInteger(Q.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, Q.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);
            if (d.err)
              return d;
            this.bumpSpace(), b = this.parseIdentifierIfPossible(), g = d.val;
          }
          var A = this.tryParsePluralOrSelectOptions(t, l, r, b);
          if (A.err)
            return A;
          var h = this.tryParseArgumentClose(i);
          if (h.err)
            return h;
          var y = K(i, this.clonePosition());
          return l === "select" ? {
            val: {
              type: be.select,
              value: n,
              options: bo(A.val),
              location: y
            },
            err: null
          } : {
            val: {
              type: be.plural,
              value: n,
              options: bo(A.val),
              offset: g,
              pluralType: l === "plural" ? "cardinal" : "ordinal",
              location: y
            },
            err: null
          };
        }
        default:
          return this.error(Q.INVALID_ARGUMENT_TYPE, K(o, s));
      }
    }, e.prototype.tryParseArgumentClose = function(t) {
      return this.isEOF() || this.char() !== 125 ? this.error(Q.EXPECT_ARGUMENT_CLOSING_BRACE, K(t, this.clonePosition())) : (this.bump(), { val: !0, err: null });
    }, e.prototype.parseSimpleArgStyleIfPossible = function() {
      for (var t = 0, r = this.clonePosition(); !this.isEOF(); ) {
        var n = this.char();
        switch (n) {
          case 39: {
            this.bump();
            var i = this.clonePosition();
            if (!this.bumpUntil("'"))
              return this.error(Q.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, K(i, this.clonePosition()));
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
        n = lf(t);
      } catch {
        return this.error(Q.INVALID_NUMBER_SKELETON, r);
      }
      return {
        val: {
          type: nn.number,
          tokens: n,
          location: r,
          parsedOptions: this.shouldParseSkeletons ? df(n) : {}
        },
        err: null
      };
    }, e.prototype.tryParsePluralOrSelectOptions = function(t, r, n, i) {
      for (var a, o = !1, l = [], s = /* @__PURE__ */ new Set(), u = i.value, c = i.location; ; ) {
        if (u.length === 0) {
          var d = this.clonePosition();
          if (r !== "select" && this.bumpIf("=")) {
            var v = this.tryParseDecimalInteger(Q.EXPECT_PLURAL_ARGUMENT_SELECTOR, Q.INVALID_PLURAL_ARGUMENT_SELECTOR);
            if (v.err)
              return v;
            c = K(d, this.clonePosition()), u = this.message.slice(d.offset, this.offset());
          } else
            break;
        }
        if (s.has(u))
          return this.error(r === "select" ? Q.DUPLICATE_SELECT_ARGUMENT_SELECTOR : Q.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, c);
        u === "other" && (o = !0), this.bumpSpace();
        var p = this.clonePosition();
        if (!this.bumpIf("{"))
          return this.error(r === "select" ? Q.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : Q.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, K(this.clonePosition(), this.clonePosition()));
        var h = this.parseMessage(t + 1, r, n);
        if (h.err)
          return h;
        var m = this.tryParseArgumentClose(p);
        if (m.err)
          return m;
        l.push([
          u,
          {
            value: h.val,
            location: K(p, this.clonePosition())
          }
        ]), s.add(u), this.bumpSpace(), a = this.parseIdentifierIfPossible(), u = a.value, c = a.location;
      }
      return l.length === 0 ? this.error(r === "select" ? Q.EXPECT_SELECT_ARGUMENT_SELECTOR : Q.EXPECT_PLURAL_ARGUMENT_SELECTOR, K(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !o ? this.error(Q.MISSING_OTHER_CLAUSE, K(this.clonePosition(), this.clonePosition())) : { val: l, err: null };
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
      var s = K(i, this.clonePosition());
      return a ? (o *= n, Af(o) ? { val: o, err: null } : this.error(r, s)) : this.error(t, s);
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
      var r = Ys(this.message, t);
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
      if (go(this.message, t, this.offset())) {
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
      for (; !this.isEOF() && Js(this.char()); )
        this.bump();
    }, e.prototype.peek = function() {
      if (this.isEOF())
        return null;
      var t = this.char(), r = this.offset(), n = this.message.charCodeAt(r + (t >= 65536 ? 2 : 1));
      return n ?? null;
    }, e;
  }()
);
function la(e) {
  return e >= 97 && e <= 122 || e >= 65 && e <= 90;
}
function Tf(e) {
  return la(e) || e === 47;
}
function Of(e) {
  return e === 45 || e === 46 || e >= 48 && e <= 57 || e === 95 || e >= 97 && e <= 122 || e >= 65 && e <= 90 || e == 183 || e >= 192 && e <= 214 || e >= 216 && e <= 246 || e >= 248 && e <= 893 || e >= 895 && e <= 8191 || e >= 8204 && e <= 8205 || e >= 8255 && e <= 8256 || e >= 8304 && e <= 8591 || e >= 11264 && e <= 12271 || e >= 12289 && e <= 55295 || e >= 63744 && e <= 64975 || e >= 65008 && e <= 65533 || e >= 65536 && e <= 983039;
}
function Js(e) {
  return e >= 9 && e <= 13 || e === 32 || e === 133 || e >= 8206 && e <= 8207 || e === 8232 || e === 8233;
}
function Hf(e) {
  return e >= 33 && e <= 35 || e === 36 || e >= 37 && e <= 39 || e === 40 || e === 41 || e === 42 || e === 43 || e === 44 || e === 45 || e >= 46 && e <= 47 || e >= 58 && e <= 59 || e >= 60 && e <= 62 || e >= 63 && e <= 64 || e === 91 || e === 92 || e === 93 || e === 94 || e === 96 || e === 123 || e === 124 || e === 125 || e === 126 || e === 161 || e >= 162 && e <= 165 || e === 166 || e === 167 || e === 169 || e === 171 || e === 172 || e === 174 || e === 176 || e === 177 || e === 182 || e === 187 || e === 191 || e === 215 || e === 247 || e >= 8208 && e <= 8213 || e >= 8214 && e <= 8215 || e === 8216 || e === 8217 || e === 8218 || e >= 8219 && e <= 8220 || e === 8221 || e === 8222 || e === 8223 || e >= 8224 && e <= 8231 || e >= 8240 && e <= 8248 || e === 8249 || e === 8250 || e >= 8251 && e <= 8254 || e >= 8257 && e <= 8259 || e === 8260 || e === 8261 || e === 8262 || e >= 8263 && e <= 8273 || e === 8274 || e === 8275 || e >= 8277 && e <= 8286 || e >= 8592 && e <= 8596 || e >= 8597 && e <= 8601 || e >= 8602 && e <= 8603 || e >= 8604 && e <= 8607 || e === 8608 || e >= 8609 && e <= 8610 || e === 8611 || e >= 8612 && e <= 8613 || e === 8614 || e >= 8615 && e <= 8621 || e === 8622 || e >= 8623 && e <= 8653 || e >= 8654 && e <= 8655 || e >= 8656 && e <= 8657 || e === 8658 || e === 8659 || e === 8660 || e >= 8661 && e <= 8691 || e >= 8692 && e <= 8959 || e >= 8960 && e <= 8967 || e === 8968 || e === 8969 || e === 8970 || e === 8971 || e >= 8972 && e <= 8991 || e >= 8992 && e <= 8993 || e >= 8994 && e <= 9e3 || e === 9001 || e === 9002 || e >= 9003 && e <= 9083 || e === 9084 || e >= 9085 && e <= 9114 || e >= 9115 && e <= 9139 || e >= 9140 && e <= 9179 || e >= 9180 && e <= 9185 || e >= 9186 && e <= 9254 || e >= 9255 && e <= 9279 || e >= 9280 && e <= 9290 || e >= 9291 && e <= 9311 || e >= 9472 && e <= 9654 || e === 9655 || e >= 9656 && e <= 9664 || e === 9665 || e >= 9666 && e <= 9719 || e >= 9720 && e <= 9727 || e >= 9728 && e <= 9838 || e === 9839 || e >= 9840 && e <= 10087 || e === 10088 || e === 10089 || e === 10090 || e === 10091 || e === 10092 || e === 10093 || e === 10094 || e === 10095 || e === 10096 || e === 10097 || e === 10098 || e === 10099 || e === 10100 || e === 10101 || e >= 10132 && e <= 10175 || e >= 10176 && e <= 10180 || e === 10181 || e === 10182 || e >= 10183 && e <= 10213 || e === 10214 || e === 10215 || e === 10216 || e === 10217 || e === 10218 || e === 10219 || e === 10220 || e === 10221 || e === 10222 || e === 10223 || e >= 10224 && e <= 10239 || e >= 10240 && e <= 10495 || e >= 10496 && e <= 10626 || e === 10627 || e === 10628 || e === 10629 || e === 10630 || e === 10631 || e === 10632 || e === 10633 || e === 10634 || e === 10635 || e === 10636 || e === 10637 || e === 10638 || e === 10639 || e === 10640 || e === 10641 || e === 10642 || e === 10643 || e === 10644 || e === 10645 || e === 10646 || e === 10647 || e === 10648 || e >= 10649 && e <= 10711 || e === 10712 || e === 10713 || e === 10714 || e === 10715 || e >= 10716 && e <= 10747 || e === 10748 || e === 10749 || e >= 10750 && e <= 11007 || e >= 11008 && e <= 11055 || e >= 11056 && e <= 11076 || e >= 11077 && e <= 11078 || e >= 11079 && e <= 11084 || e >= 11085 && e <= 11123 || e >= 11124 && e <= 11125 || e >= 11126 && e <= 11157 || e === 11158 || e >= 11159 && e <= 11263 || e >= 11776 && e <= 11777 || e === 11778 || e === 11779 || e === 11780 || e === 11781 || e >= 11782 && e <= 11784 || e === 11785 || e === 11786 || e === 11787 || e === 11788 || e === 11789 || e >= 11790 && e <= 11798 || e === 11799 || e >= 11800 && e <= 11801 || e === 11802 || e === 11803 || e === 11804 || e === 11805 || e >= 11806 && e <= 11807 || e === 11808 || e === 11809 || e === 11810 || e === 11811 || e === 11812 || e === 11813 || e === 11814 || e === 11815 || e === 11816 || e === 11817 || e >= 11818 && e <= 11822 || e === 11823 || e >= 11824 && e <= 11833 || e >= 11834 && e <= 11835 || e >= 11836 && e <= 11839 || e === 11840 || e === 11841 || e === 11842 || e >= 11843 && e <= 11855 || e >= 11856 && e <= 11857 || e === 11858 || e >= 11859 && e <= 11903 || e >= 12289 && e <= 12291 || e === 12296 || e === 12297 || e === 12298 || e === 12299 || e === 12300 || e === 12301 || e === 12302 || e === 12303 || e === 12304 || e === 12305 || e >= 12306 && e <= 12307 || e === 12308 || e === 12309 || e === 12310 || e === 12311 || e === 12312 || e === 12313 || e === 12314 || e === 12315 || e === 12316 || e === 12317 || e >= 12318 && e <= 12319 || e === 12320 || e === 12336 || e === 64830 || e === 64831 || e >= 65093 && e <= 65094;
}
function ua(e) {
  e.forEach(function(t) {
    if (delete t.location, Gs(t) || js(t))
      for (var r in t.options)
        delete t.options[r].location, ua(t.options[r].value);
    else Us(t) && qs(t.style) || (ks(t) || Fs(t)) && ia(t.style) ? delete t.style.location : Vs(t) && ua(t.children);
  });
}
function Lf(e, t) {
  t === void 0 && (t = {}), t = k({ shouldParseSkeletons: !0, requiresOtherClause: !0 }, t);
  var r = new Rf(e, t).parse();
  if (r.err) {
    var n = SyntaxError(Q[r.err.kind]);
    throw n.location = r.err.location, n.originalMessage = r.err.message, n;
  }
  return t != null && t.captureLocation || ua(r.val), r.val;
}
var an;
(function(e) {
  e.MISSING_VALUE = "MISSING_VALUE", e.INVALID_VALUE = "INVALID_VALUE", e.MISSING_INTL_API = "MISSING_INTL_API";
})(an || (an = {}));
var Ai = (
  /** @class */
  function(e) {
    At(t, e);
    function t(r, n, i) {
      var a = e.call(this, r) || this;
      return a.code = n, a.originalMessage = i, a;
    }
    return t.prototype.toString = function() {
      return "[formatjs Error: ".concat(this.code, "] ").concat(this.message);
    }, t;
  }(Error)
), yo = (
  /** @class */
  function(e) {
    At(t, e);
    function t(r, n, i, a) {
      return e.call(this, 'Invalid values for "'.concat(r, '": "').concat(n, '". Options are "').concat(Object.keys(i).join('", "'), '"'), an.INVALID_VALUE, a) || this;
    }
    return t;
  }(Ai)
), Pf = (
  /** @class */
  function(e) {
    At(t, e);
    function t(r, n, i) {
      return e.call(this, 'Value for "'.concat(r, '" must be of type ').concat(n), an.INVALID_VALUE, i) || this;
    }
    return t;
  }(Ai)
), Mf = (
  /** @class */
  function(e) {
    At(t, e);
    function t(r, n) {
      return e.call(this, 'The intl string context variable "'.concat(r, '" was not provided to the string "').concat(n, '"'), an.MISSING_VALUE, n) || this;
    }
    return t;
  }(Ai)
), qe;
(function(e) {
  e[e.literal = 0] = "literal", e[e.object = 1] = "object";
})(qe || (qe = {}));
function Df(e) {
  return e.length < 2 ? e : e.reduce(function(t, r) {
    var n = t[t.length - 1];
    return !n || n.type !== qe.literal || r.type !== qe.literal ? t.push(r) : n.value += r.value, t;
  }, []);
}
function Bf(e) {
  return typeof e == "function";
}
function ei(e, t, r, n, i, a, o) {
  if (e.length === 1 && ho(e[0]))
    return [
      {
        type: qe.literal,
        value: e[0].value
      }
    ];
  for (var l = [], s = 0, u = e; s < u.length; s++) {
    var c = u[s];
    if (ho(c)) {
      l.push({
        type: qe.literal,
        value: c.value
      });
      continue;
    }
    if (nf(c)) {
      typeof a == "number" && l.push({
        type: qe.literal,
        value: r.getNumberFormat(t).format(a)
      });
      continue;
    }
    var d = c.value;
    if (!(i && d in i))
      throw new Mf(d, o);
    var v = i[d];
    if (rf(c)) {
      (!v || typeof v == "string" || typeof v == "number") && (v = typeof v == "string" || typeof v == "number" ? String(v) : ""), l.push({
        type: typeof v == "string" ? qe.literal : qe.object,
        value: v
      });
      continue;
    }
    if (ks(c)) {
      var p = typeof c.style == "string" ? n.date[c.style] : ia(c.style) ? c.style.parsedOptions : void 0;
      l.push({
        type: qe.literal,
        value: r.getDateTimeFormat(t, p).format(v)
      });
      continue;
    }
    if (Fs(c)) {
      var p = typeof c.style == "string" ? n.time[c.style] : ia(c.style) ? c.style.parsedOptions : n.time.medium;
      l.push({
        type: qe.literal,
        value: r.getDateTimeFormat(t, p).format(v)
      });
      continue;
    }
    if (Us(c)) {
      var p = typeof c.style == "string" ? n.number[c.style] : qs(c.style) ? c.style.parsedOptions : void 0;
      p && p.scale && (v = v * (p.scale || 1)), l.push({
        type: qe.literal,
        value: r.getNumberFormat(t, p).format(v)
      });
      continue;
    }
    if (Vs(c)) {
      var h = c.children, m = c.value, E = i[m];
      if (!Bf(E))
        throw new Pf(m, "function", o);
      var _ = ei(h, t, r, n, i, a), C = E(_.map(function(g) {
        return g.value;
      }));
      Array.isArray(C) || (C = [C]), l.push.apply(l, C.map(function(g) {
        return {
          type: typeof g == "string" ? qe.literal : qe.object,
          value: g
        };
      }));
    }
    if (Gs(c)) {
      var x = c.options[v] || c.options.other;
      if (!x)
        throw new yo(c.value, v, Object.keys(c.options), o);
      l.push.apply(l, ei(x.value, t, r, n, i));
      continue;
    }
    if (js(c)) {
      var x = c.options["=".concat(v)];
      if (!x) {
        if (!Intl.PluralRules)
          throw new Ai(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`, an.MISSING_INTL_API, o);
        var b = r.getPluralRules(t, { type: c.pluralType }).select(v - (c.offset || 0));
        x = c.options[b] || c.options.other;
      }
      if (!x)
        throw new yo(c.value, v, Object.keys(c.options), o);
      l.push.apply(l, ei(x.value, t, r, n, i, v - (c.offset || 0)));
      continue;
    }
  }
  return Df(l);
}
function Nf(e, t) {
  return t ? k(k(k({}, e || {}), t || {}), Object.keys(e).reduce(function(r, n) {
    return r[n] = k(k({}, e[n]), t[n] || {}), r;
  }, {})) : e;
}
function Uf(e, t) {
  return t ? Object.keys(e).reduce(function(r, n) {
    return r[n] = Nf(e[n], t[n]), r;
  }, k({}, e)) : e;
}
function Ni(e) {
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
function kf(e) {
  return e === void 0 && (e = {
    number: {},
    dateTime: {},
    pluralRules: {}
  }), {
    getNumberFormat: Mi(function() {
      for (var t, r = [], n = 0; n < arguments.length; n++)
        r[n] = arguments[n];
      return new ((t = Intl.NumberFormat).bind.apply(t, Vr([void 0], r, !1)))();
    }, {
      cache: Ni(e.number),
      strategy: Di.variadic
    }),
    getDateTimeFormat: Mi(function() {
      for (var t, r = [], n = 0; n < arguments.length; n++)
        r[n] = arguments[n];
      return new ((t = Intl.DateTimeFormat).bind.apply(t, Vr([void 0], r, !1)))();
    }, {
      cache: Ni(e.dateTime),
      strategy: Di.variadic
    }),
    getPluralRules: Mi(function() {
      for (var t, r = [], n = 0; n < arguments.length; n++)
        r[n] = arguments[n];
      return new ((t = Intl.PluralRules).bind.apply(t, Vr([void 0], r, !1)))();
    }, {
      cache: Ni(e.pluralRules),
      strategy: Di.variadic
    })
  };
}
var Ks = (
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
        var c = u.reduce(function(d, v) {
          return !d.length || v.type !== qe.literal || typeof d[d.length - 1] != "string" ? d.push(v.value) : d[d.length - 1] += v.value, d;
        }, []);
        return c.length <= 1 ? c[0] || "" : c;
      }, this.formatToParts = function(s) {
        return ei(a.ast, a.locales, a.formatters, a.formats, s, void 0, a.message);
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
        var l = Xc(o, ["formatters"]);
        this.ast = e.__parse(t, k(k({}, l), { locale: this.resolvedLocale }));
      } else
        this.ast = t;
      if (!Array.isArray(this.ast))
        throw new TypeError("A message must be provided as a String or AST.");
      this.formats = Uf(e.formats, n), this.formatters = i && i.formatters || kf(this.formatterCache);
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
    }, e.__parse = Lf, e.formats = {
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
function Ff(e, t) {
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
const Yt = {}, Gf = (e, t, r) => r && (t in Yt || (Yt[t] = {}), e in Yt[t] || (Yt[t][e] = r), r), $s = (e, t) => {
  if (t == null)
    return;
  if (t in Yt && e in Yt[t])
    return Yt[t][e];
  const r = Dn(t);
  for (let n = 0; n < r.length; n++) {
    const i = r[n], a = Vf(i, e);
    if (a)
      return Gf(e, t, a);
  }
};
let La;
const Mn = ht({});
function jf(e) {
  return La[e] || null;
}
function el(e) {
  return e in La;
}
function Vf(e, t) {
  if (!el(e))
    return null;
  const r = jf(e);
  return Ff(r, t);
}
function qf(e) {
  if (e == null)
    return;
  const t = Dn(e);
  for (let r = 0; r < t.length; r++) {
    const n = t[r];
    if (el(n))
      return n;
  }
}
function tl(e, ...t) {
  delete Yt[e], Mn.update((r) => (r[e] = zc.all([r[e] || {}, ...t]), r));
}
cn(
  [Mn],
  ([e]) => Object.keys(e)
);
Mn.subscribe((e) => La = e);
const ti = {};
function zf(e, t) {
  ti[e].delete(t), ti[e].size === 0 && delete ti[e];
}
function rl(e) {
  return ti[e];
}
function Xf(e) {
  return Dn(e).map((t) => {
    const r = rl(t);
    return [t, r ? [...r] : []];
  }).filter(([, t]) => t.length > 0);
}
function oi(e) {
  return e == null ? !1 : Dn(e).some(
    (t) => {
      var r;
      return (r = rl(t)) == null ? void 0 : r.size;
    }
  );
}
function Wf(e, t) {
  return Promise.all(
    t.map((n) => (zf(e, n), n().then((i) => i.default || i)))
  ).then((n) => tl(e, ...n));
}
const mn = {};
function nl(e) {
  if (!oi(e))
    return e in mn ? mn[e] : Promise.resolve();
  const t = Xf(e);
  return mn[e] = Promise.all(
    t.map(
      ([r, n]) => Wf(r, n)
    )
  ).then(() => {
    if (oi(e))
      return nl(e);
    delete mn[e];
  }), mn[e];
}
var Eo = Object.getOwnPropertySymbols, Zf = Object.prototype.hasOwnProperty, Yf = Object.prototype.propertyIsEnumerable, Qf = (e, t) => {
  var r = {};
  for (var n in e)
    Zf.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && Eo)
    for (var n of Eo(e))
      t.indexOf(n) < 0 && Yf.call(e, n) && (r[n] = e[n]);
  return r;
};
const Jf = {
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
function Kf({ locale: e, id: t }) {
  console.warn(
    `[svelte-i18n] The message "${t}" was not found in "${Dn(
      e
    ).join('", "')}".${oi(or()) ? `

Note: there are at least one loader still registered to this locale that wasn't executed.` : ""}`
  );
}
const $f = {
  fallbackLocale: null,
  loadingDelay: 200,
  formats: Jf,
  warnOnMissingMessages: !0,
  handleMissingMessage: void 0,
  ignoreTag: !0
}, _n = $f;
function on() {
  return _n;
}
function ed(e) {
  const t = e, { formats: r } = t, n = Qf(t, ["formats"]);
  let i = e.fallbackLocale;
  if (e.initialLocale)
    try {
      Ks.resolveLocale(e.initialLocale) && (i = e.initialLocale);
    } catch {
      console.warn(
        `[svelte-i18n] The initial locale "${e.initialLocale}" is not a valid locale.`
      );
    }
  return n.warnOnMissingMessages && (delete n.warnOnMissingMessages, n.handleMissingMessage == null ? n.handleMissingMessage = Kf : console.warn(
    '[svelte-i18n] The "warnOnMissingMessages" option is deprecated. Please use the "handleMissingMessage" option instead.'
  )), Object.assign(_n, n, { initialLocale: i }), r && ("number" in r && Object.assign(_n.formats.number, r.number), "date" in r && Object.assign(_n.formats.date, r.date), "time" in r && Object.assign(_n.formats.time, r.time)), Rr.set(i);
}
const Ui = ht(!1);
var td = Object.defineProperty, rd = Object.defineProperties, nd = Object.getOwnPropertyDescriptors, wo = Object.getOwnPropertySymbols, id = Object.prototype.hasOwnProperty, ad = Object.prototype.propertyIsEnumerable, So = (e, t, r) => t in e ? td(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, od = (e, t) => {
  for (var r in t || (t = {}))
    id.call(t, r) && So(e, r, t[r]);
  if (wo)
    for (var r of wo(t))
      ad.call(t, r) && So(e, r, t[r]);
  return e;
}, sd = (e, t) => rd(e, nd(t));
let ca;
const si = ht(null);
function Ao(e) {
  return e.split("-").map((t, r, n) => n.slice(0, r + 1).join("-")).reverse();
}
function Dn(e, t = on().fallbackLocale) {
  const r = Ao(e);
  return t ? [.../* @__PURE__ */ new Set([...r, ...Ao(t)])] : r;
}
function or() {
  return ca ?? void 0;
}
si.subscribe((e) => {
  ca = e ?? void 0, typeof window < "u" && e != null && document.documentElement.setAttribute("lang", e);
});
const ld = (e) => {
  if (e && qf(e) && oi(e)) {
    const { loadingDelay: t } = on();
    let r;
    return typeof window < "u" && or() != null && t ? r = window.setTimeout(
      () => Ui.set(!0),
      t
    ) : Ui.set(!0), nl(e).then(() => {
      si.set(e);
    }).finally(() => {
      clearTimeout(r), Ui.set(!1);
    });
  }
  return si.set(e);
}, Rr = sd(od({}, si), {
  set: ld
}), ud = () => typeof window > "u" ? null : window.navigator.language || window.navigator.languages[0], xi = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => {
    const i = JSON.stringify(n);
    return i in t ? t[i] : t[i] = e(n);
  };
};
var cd = Object.defineProperty, li = Object.getOwnPropertySymbols, il = Object.prototype.hasOwnProperty, al = Object.prototype.propertyIsEnumerable, xo = (e, t, r) => t in e ? cd(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, Pa = (e, t) => {
  for (var r in t || (t = {}))
    il.call(t, r) && xo(e, r, t[r]);
  if (li)
    for (var r of li(t))
      al.call(t, r) && xo(e, r, t[r]);
  return e;
}, fn = (e, t) => {
  var r = {};
  for (var n in e)
    il.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && li)
    for (var n of li(e))
      t.indexOf(n) < 0 && al.call(e, n) && (r[n] = e[n]);
  return r;
};
const Cn = (e, t) => {
  const { formats: r } = on();
  if (e in r && t in r[e])
    return r[e][t];
  throw new Error(`[svelte-i18n] Unknown "${t}" ${e} format.`);
}, fd = xi(
  (e) => {
    var t = e, { locale: r, format: n } = t, i = fn(t, ["locale", "format"]);
    if (r == null)
      throw new Error('[svelte-i18n] A "locale" must be set to format numbers');
    return n && (i = Cn("number", n)), new Intl.NumberFormat(r, i);
  }
), dd = xi(
  (e) => {
    var t = e, { locale: r, format: n } = t, i = fn(t, ["locale", "format"]);
    if (r == null)
      throw new Error('[svelte-i18n] A "locale" must be set to format dates');
    return n ? i = Cn("date", n) : Object.keys(i).length === 0 && (i = Cn("date", "short")), new Intl.DateTimeFormat(r, i);
  }
), hd = xi(
  (e) => {
    var t = e, { locale: r, format: n } = t, i = fn(t, ["locale", "format"]);
    if (r == null)
      throw new Error(
        '[svelte-i18n] A "locale" must be set to format time values'
      );
    return n ? i = Cn("time", n) : Object.keys(i).length === 0 && (i = Cn("time", "short")), new Intl.DateTimeFormat(r, i);
  }
), vd = (e = {}) => {
  var t = e, {
    locale: r = or()
  } = t, n = fn(t, [
    "locale"
  ]);
  return fd(Pa({ locale: r }, n));
}, pd = (e = {}) => {
  var t = e, {
    locale: r = or()
  } = t, n = fn(t, [
    "locale"
  ]);
  return dd(Pa({ locale: r }, n));
}, md = (e = {}) => {
  var t = e, {
    locale: r = or()
  } = t, n = fn(t, [
    "locale"
  ]);
  return hd(Pa({ locale: r }, n));
}, gd = xi(
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  (e, t = or()) => new Ks(e, t, on().formats, {
    ignoreTag: on().ignoreTag
  })
), bd = (e, t = {}) => {
  var r, n, i, a;
  let o = t;
  typeof e == "object" && (o = e, e = o.id);
  const {
    values: l,
    locale: s = or(),
    default: u
  } = o;
  if (s == null)
    throw new Error(
      "[svelte-i18n] Cannot format a message without first setting the initial locale."
    );
  let c = $s(e, s);
  if (!c)
    c = (a = (i = (n = (r = on()).handleMissingMessage) == null ? void 0 : n.call(r, { locale: s, id: e, defaultValue: u })) != null ? i : u) != null ? a : e;
  else if (typeof c != "string")
    return console.warn(
      `[svelte-i18n] Message with id "${e}" must be of type "string", found: "${typeof c}". Gettin its value through the "$format" method is deprecated; use the "json" method instead.`
    ), c;
  if (!l)
    return c;
  let d = c;
  try {
    d = gd(c, s).format(l);
  } catch (v) {
    v instanceof Error && console.warn(
      `[svelte-i18n] Message "${e}" has syntax error:`,
      v.message
    );
  }
  return d;
}, _d = (e, t) => md(t).format(e), yd = (e, t) => pd(t).format(e), Ed = (e, t) => vd(t).format(e), wd = (e, t = or()) => $s(e, t), Sd = cn([Rr, Mn], () => bd);
cn([Rr], () => _d);
cn([Rr], () => yd);
cn([Rr], () => Ed);
cn([Rr, Mn], () => wd);
function Ad(e, t) {
  Object.entries(e).forEach(([a, o]) => {
    tl(a, o);
  });
  const r = localStorage.getItem("language"), n = "en", i = r ?? ud();
  console.log("Initial: Setting the language to", i), ed({
    fallbackLocale: n,
    initialLocale: i
  }), window.addEventListener("oscd-language-changed", (a) => {
    const o = a;
    if (!o.detail.language) {
      console.error("No translations for language");
      return;
    }
    console.log("Updating the language to", o.detail.language), Rr.set(o.detail.language);
  });
}
const xd = "Ort", Cd = "Suche", Id = "UUID", Rd = "Name", Td = "Autor", Od = "Typ", Hd = "Version", Ld = "Geändert am", Pd = "Von", Md = "Bis", Dd = "Suchergebnis", Bd = "Ort auswählen", Nd = "Filter Hinzufügen", Ud = "Filtertypen", kd = {
  location: xd,
  search: Cd,
  uuid: Id,
  name: Rd,
  author: Td,
  type: Od,
  version: Hd,
  changed_at: Ld,
  from: Pd,
  to: Md,
  search_result: Dd,
  select_location: Bd,
  add_filter: Nd,
  filter_types: Ud
}, Fd = "Location", Gd = "Search", jd = "UUID", Vd = "Name", qd = "Author", zd = "Type", Xd = "Version", Wd = "Changed At", Zd = "From", Yd = "To", Qd = "Search Result", Jd = "Select Location", Kd = "Add Filter", $d = "Filter Types", eh = {
  location: Fd,
  search: Gd,
  uuid: jd,
  name: Vd,
  author: qd,
  type: zd,
  version: Xd,
  changed_at: Wd,
  from: Zd,
  to: Yd,
  search_result: Qd,
  select_location: Jd,
  add_filter: Kd,
  filter_types: $d
};
function xe(e) {
  return typeof e == "function";
}
function ol(e) {
  var t = function(n) {
    Error.call(n), n.stack = new Error().stack;
  }, r = e(t);
  return r.prototype = Object.create(Error.prototype), r.prototype.constructor = r, r;
}
var ki = ol(function(e) {
  return function(r) {
    e(this), this.message = r ? r.length + ` errors occurred during unsubscription:
` + r.map(function(n, i) {
      return i + 1 + ") " + n.toString();
    }).join(`
  `) : "", this.name = "UnsubscriptionError", this.errors = r;
  };
});
function Co(e, t) {
  if (e) {
    var r = e.indexOf(t);
    0 <= r && e.splice(r, 1);
  }
}
var Ma = function() {
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
      if (xe(c))
        try {
          c();
        } catch (m) {
          a = m instanceof ki ? m.errors : [m];
        }
      var d = this._finalizers;
      if (d) {
        this._finalizers = null;
        try {
          for (var v = Ht(d), p = v.next(); !p.done; p = v.next()) {
            var h = p.value;
            try {
              Io(h);
            } catch (m) {
              a = a ?? [], m instanceof ki ? a = Vr(Vr([], na(a)), na(m.errors)) : a.push(m);
            }
          }
        } catch (m) {
          n = { error: m };
        } finally {
          try {
            p && !p.done && (i = v.return) && i.call(v);
          } finally {
            if (n) throw n.error;
          }
        }
      }
      if (a)
        throw new ki(a);
    }
  }, e.prototype.add = function(t) {
    var r;
    if (t && t !== this)
      if (this.closed)
        Io(t);
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
    r === t ? this._parentage = null : Array.isArray(r) && Co(r, t);
  }, e.prototype.remove = function(t) {
    var r = this._finalizers;
    r && Co(r, t), t instanceof e && t._removeParent(this);
  }, e.EMPTY = function() {
    var t = new e();
    return t.closed = !0, t;
  }(), e;
}();
Ma.EMPTY;
function sl(e) {
  return e instanceof Ma || e && "closed" in e && xe(e.remove) && xe(e.add) && xe(e.unsubscribe);
}
function Io(e) {
  xe(e) ? e() : e.unsubscribe();
}
var th = {
  Promise: void 0
}, rh = {
  setTimeout: function(e, t) {
    for (var r = [], n = 2; n < arguments.length; n++)
      r[n - 2] = arguments[n];
    return setTimeout.apply(void 0, Vr([e, t], na(r)));
  },
  clearTimeout: function(e) {
    return clearTimeout(e);
  },
  delegate: void 0
};
function ll(e) {
  rh.setTimeout(function() {
    throw e;
  });
}
function Ro() {
}
function nh(e) {
  e();
}
var Da = function(e) {
  At(t, e);
  function t(r) {
    var n = e.call(this) || this;
    return n.isStopped = !1, r ? (n.destination = r, sl(r) && r.add(n)) : n.destination = oh, n;
  }
  return t.create = function(r, n, i) {
    return new fa(r, n, i);
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
}(Ma), ih = function() {
  function e(t) {
    this.partialObserver = t;
  }
  return e.prototype.next = function(t) {
    var r = this.partialObserver;
    if (r.next)
      try {
        r.next(t);
      } catch (n) {
        Vn(n);
      }
  }, e.prototype.error = function(t) {
    var r = this.partialObserver;
    if (r.error)
      try {
        r.error(t);
      } catch (n) {
        Vn(n);
      }
    else
      Vn(t);
  }, e.prototype.complete = function() {
    var t = this.partialObserver;
    if (t.complete)
      try {
        t.complete();
      } catch (r) {
        Vn(r);
      }
  }, e;
}(), fa = function(e) {
  At(t, e);
  function t(r, n, i) {
    var a = e.call(this) || this, o;
    return xe(r) || !r ? o = {
      next: r ?? void 0,
      error: n ?? void 0,
      complete: i ?? void 0
    } : o = r, a.destination = new ih(o), a;
  }
  return t;
}(Da);
function Vn(e) {
  ll(e);
}
function ah(e) {
  throw e;
}
var oh = {
  closed: !0,
  next: Ro,
  error: ah,
  complete: Ro
}, Ba = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}();
function ul(e) {
  return e;
}
function sh(e) {
  return e.length === 0 ? ul : e.length === 1 ? e[0] : function(r) {
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
    var i = this, a = uh(t) ? t : new fa(t, r, n);
    return nh(function() {
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
    return r = To(r), new r(function(i, a) {
      var o = new fa({
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
  }, e.prototype[Ba] = function() {
    return this;
  }, e.prototype.pipe = function() {
    for (var t = [], r = 0; r < arguments.length; r++)
      t[r] = arguments[r];
    return sh(t)(this);
  }, e.prototype.toPromise = function(t) {
    var r = this;
    return t = To(t), new t(function(n, i) {
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
function To(e) {
  var t;
  return (t = e ?? th.Promise) !== null && t !== void 0 ? t : Promise;
}
function lh(e) {
  return e && xe(e.next) && xe(e.error) && xe(e.complete);
}
function uh(e) {
  return e && e instanceof Da || lh(e) && sl(e);
}
function ch(e) {
  return xe(e == null ? void 0 : e.lift);
}
function dn(e) {
  return function(t) {
    if (ch(t))
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
function sn(e, t, r, n, i) {
  return new fh(e, t, r, n, i);
}
var fh = function(e) {
  At(t, e);
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
}(Da), dh = new xt(function(e) {
  return e.complete();
});
function hh(e) {
  return e && xe(e.schedule);
}
function vh(e) {
  return e[e.length - 1];
}
function ph(e) {
  return hh(vh(e)) ? e.pop() : void 0;
}
var cl = function(e) {
  return e && typeof e.length == "number" && typeof e != "function";
};
function fl(e) {
  return xe(e == null ? void 0 : e.then);
}
function dl(e) {
  return xe(e[Ba]);
}
function hl(e) {
  return Symbol.asyncIterator && xe(e == null ? void 0 : e[Symbol.asyncIterator]);
}
function vl(e) {
  return new TypeError("You provided " + (e !== null && typeof e == "object" ? "an invalid object" : "'" + e + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
}
function mh() {
  return typeof Symbol != "function" || !Symbol.iterator ? "@@iterator" : Symbol.iterator;
}
var pl = mh();
function ml(e) {
  return xe(e == null ? void 0 : e[pl]);
}
function gl(e) {
  return Wc(this, arguments, function() {
    var r, n, i, a;
    return Ha(this, function(o) {
      switch (o.label) {
        case 0:
          r = e.getReader(), o.label = 1;
        case 1:
          o.trys.push([1, , 9, 10]), o.label = 2;
        case 2:
          return [4, qr(r.read())];
        case 3:
          return n = o.sent(), i = n.value, a = n.done, a ? [4, qr(void 0)] : [3, 5];
        case 4:
          return [2, o.sent()];
        case 5:
          return [4, qr(i)];
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
function bl(e) {
  return xe(e == null ? void 0 : e.getReader);
}
function Bn(e) {
  if (e instanceof xt)
    return e;
  if (e != null) {
    if (dl(e))
      return gh(e);
    if (cl(e))
      return bh(e);
    if (fl(e))
      return _h(e);
    if (hl(e))
      return _l(e);
    if (ml(e))
      return yh(e);
    if (bl(e))
      return Eh(e);
  }
  throw vl(e);
}
function gh(e) {
  return new xt(function(t) {
    var r = e[Ba]();
    if (xe(r.subscribe))
      return r.subscribe(t);
    throw new TypeError("Provided object does not correctly implement Symbol.observable");
  });
}
function bh(e) {
  return new xt(function(t) {
    for (var r = 0; r < e.length && !t.closed; r++)
      t.next(e[r]);
    t.complete();
  });
}
function _h(e) {
  return new xt(function(t) {
    e.then(function(r) {
      t.closed || (t.next(r), t.complete());
    }, function(r) {
      return t.error(r);
    }).then(null, ll);
  });
}
function yh(e) {
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
function _l(e) {
  return new xt(function(t) {
    wh(e, t).catch(function(r) {
      return t.error(r);
    });
  });
}
function Eh(e) {
  return _l(gl(e));
}
function wh(e, t) {
  var r, n, i, a;
  return Ds(this, void 0, void 0, function() {
    var o, l;
    return Ha(this, function(s) {
      switch (s.label) {
        case 0:
          s.trys.push([0, 5, 6, 11]), r = Zc(e), s.label = 1;
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
function yr(e, t, r, n, i) {
  n === void 0 && (n = 0), i === void 0 && (i = !1);
  var a = t.schedule(function() {
    r(), i ? e.add(this.schedule(null, n)) : this.unsubscribe();
  }, n);
  if (e.add(a), !i)
    return a;
}
function yl(e, t) {
  return t === void 0 && (t = 0), dn(function(r, n) {
    r.subscribe(sn(n, function(i) {
      return yr(n, e, function() {
        return n.next(i);
      }, t);
    }, function() {
      return yr(n, e, function() {
        return n.complete();
      }, t);
    }, function(i) {
      return yr(n, e, function() {
        return n.error(i);
      }, t);
    }));
  });
}
function El(e, t) {
  return t === void 0 && (t = 0), dn(function(r, n) {
    n.add(e.schedule(function() {
      return r.subscribe(n);
    }, t));
  });
}
function Sh(e, t) {
  return Bn(e).pipe(El(t), yl(t));
}
function Ah(e, t) {
  return Bn(e).pipe(El(t), yl(t));
}
function xh(e, t) {
  return new xt(function(r) {
    var n = 0;
    return t.schedule(function() {
      n === e.length ? r.complete() : (r.next(e[n++]), r.closed || this.schedule());
    });
  });
}
function Ch(e, t) {
  return new xt(function(r) {
    var n;
    return yr(r, t, function() {
      n = e[pl](), yr(r, t, function() {
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
      return xe(n == null ? void 0 : n.return) && n.return();
    };
  });
}
function wl(e, t) {
  if (!e)
    throw new Error("Iterable cannot be null");
  return new xt(function(r) {
    yr(r, t, function() {
      var n = e[Symbol.asyncIterator]();
      yr(r, t, function() {
        n.next().then(function(i) {
          i.done ? r.complete() : r.next(i.value);
        });
      }, 0, !0);
    });
  });
}
function Ih(e, t) {
  return wl(gl(e), t);
}
function Rh(e, t) {
  if (e != null) {
    if (dl(e))
      return Sh(e, t);
    if (cl(e))
      return xh(e, t);
    if (fl(e))
      return Ah(e, t);
    if (hl(e))
      return wl(e, t);
    if (ml(e))
      return Ch(e, t);
    if (bl(e))
      return Ih(e, t);
  }
  throw vl(e);
}
function Th(e, t) {
  return t ? Rh(e, t) : Bn(e);
}
function Sl() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t];
  var r = ph(e);
  return Th(e, r);
}
function Ke(e, t) {
  return dn(function(r, n) {
    var i = 0;
    r.subscribe(sn(n, function(a) {
      n.next(e.call(t, a, i++));
    }));
  });
}
function Oh(e, t, r, n, i, a, o, l) {
  var s = [], u = 0, c = 0, d = !1, v = function() {
    d && !s.length && !u && t.complete();
  }, p = function(m) {
    return u < n ? h(m) : s.push(m);
  }, h = function(m) {
    u++;
    var E = !1;
    Bn(r(m, c++)).subscribe(sn(t, function(_) {
      t.next(_);
    }, function() {
      E = !0;
    }, void 0, function() {
      if (E)
        try {
          u--;
          for (var _ = function() {
            var C = s.shift();
            o || h(C);
          }; s.length && u < n; )
            _();
          v();
        } catch (C) {
          t.error(C);
        }
    }));
  };
  return e.subscribe(sn(t, p, function() {
    d = !0, v();
  })), function() {
  };
}
function da(e, t, r) {
  return r === void 0 && (r = 1 / 0), xe(t) ? da(function(n, i) {
    return Ke(function(a, o) {
      return t(n, a, i, o);
    })(Bn(e(n, i)));
  }, r) : (typeof t == "number" && (r = t), dn(function(n, i) {
    return Oh(n, i, e, r);
  }));
}
function Al(e, t) {
  return xe(t) ? da(e, t, 1) : da(e, 1);
}
function Hh(e) {
  return e <= 0 ? function() {
    return dh;
  } : dn(function(t, r) {
    var n = 0;
    t.subscribe(sn(r, function(i) {
      ++n <= e && (r.next(i), e <= n && r.complete());
    }));
  });
}
function Lh(e, t, r) {
  var n = xe(e) || t || r ? { next: e, error: t, complete: r } : e;
  return n ? dn(function(i, a) {
    var o;
    (o = n.subscribe) === null || o === void 0 || o.call(n);
    var l = !0;
    i.subscribe(sn(a, function(s) {
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
  }) : ul;
}
function xl(e) {
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
var Ph = /* @__PURE__ */ function() {
  function e(t, r, n, i) {
    i === void 0 && (i = "download_load"), this.originalEvent = t, this.xhr = r, this.request = n, this.type = i;
    var a = r.status, o = r.responseType;
    this.status = a ?? 0, this.responseType = o ?? "";
    var l = r.getAllResponseHeaders();
    this.responseHeaders = l ? l.split(`
`).reduce(function(c, d) {
      var v = d.indexOf(": ");
      return c[d.slice(0, v)] = d.slice(v + 2), c;
    }, {}) : {}, this.response = xl(r);
    var s = t.loaded, u = t.total;
    this.loaded = s, this.total = u;
  }
  return e;
}(), ui = ol(function(e) {
  return function(r, n, i) {
    this.message = r, this.name = "AjaxError", this.xhr = n, this.request = i, this.status = n.status, this.responseType = n.responseType;
    var a;
    try {
      a = xl(n);
    } catch {
      a = n.responseText;
    }
    this.response = a;
  };
}), Mh = function() {
  function e(t, r) {
    return ui.call(this, "ajax timeout", t, r), this.name = "AjaxTimeoutError", this;
  }
  return e.prototype = Object.create(ui.prototype), e;
}();
function Dh(e, t) {
  return sr({ method: "GET", url: e, headers: t });
}
function Bh(e, t, r) {
  return sr({ method: "POST", url: e, body: t, headers: r });
}
function Nh(e, t) {
  return sr({ method: "DELETE", url: e, headers: t });
}
function Uh(e, t, r) {
  return sr({ method: "PUT", url: e, body: t, headers: r });
}
function kh(e, t, r) {
  return sr({ method: "PATCH", url: e, body: t, headers: r });
}
var Fh = Ke(function(e) {
  return e.response;
});
function Gh(e, t) {
  return Fh(sr({
    method: "GET",
    url: e,
    headers: t
  }));
}
var sr = function() {
  var e = function(t) {
    var r = typeof t == "string" ? {
      url: t
    } : t;
    return Vh(r);
  };
  return e.get = Dh, e.post = Bh, e.delete = Nh, e.put = Uh, e.patch = kh, e.getJSON = Gh, e;
}(), jh = "upload", Oo = "download", Fi = "loadstart", Gi = "progress", Ho = "load";
function Vh(e) {
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
        u = new URLSearchParams(c[1]), new URLSearchParams(a).forEach(function(N, G) {
          return u.set(G, N);
        }), s = c[0] + "?" + u;
      } else
        u = new URLSearchParams(a), s = s + "?" + u;
    }
    var d = {};
    if (l)
      for (var v in l)
        l.hasOwnProperty(v) && (d[v.toLowerCase()] = l[v]);
    var p = i.crossDomain;
    !p && !("x-requested-with" in d) && (d["x-requested-with"] = "XMLHttpRequest");
    var h = i.withCredentials, m = i.xsrfCookieName, E = i.xsrfHeaderName;
    if ((h || !p) && m && E) {
      var _ = (n = (r = document == null ? void 0 : document.cookie.match(new RegExp("(^|;\\s*)(" + m + ")=([^;]*)"))) === null || r === void 0 ? void 0 : r.pop()) !== null && n !== void 0 ? n : "";
      _ && (d[E] = _);
    }
    var C = qh(o, d), x = k(k({}, i), {
      url: s,
      headers: d,
      body: C
    }), b;
    b = e.createXHR ? e.createXHR() : new XMLHttpRequest();
    {
      var g = e.progressSubscriber, A = e.includeDownloadProgress, y = A === void 0 ? !1 : A, I = e.includeUploadProgress, D = I === void 0 ? !1 : I, H = function(N, G) {
        b.addEventListener(N, function() {
          var Y, P = G();
          (Y = g == null ? void 0 : g.error) === null || Y === void 0 || Y.call(g, P), t.error(P);
        });
      };
      H("timeout", function() {
        return new Mh(b, x);
      }), H("abort", function() {
        return new ui("aborted", b, x);
      });
      var j = function(N, G) {
        return new Ph(G, b, x, N + "_" + G.type);
      }, J = function(N, G, Y) {
        N.addEventListener(G, function(P) {
          t.next(j(Y, P));
        });
      };
      D && [Fi, Gi, Ho].forEach(function(N) {
        return J(b.upload, N, jh);
      }), g && [Fi, Gi].forEach(function(N) {
        return b.upload.addEventListener(N, function(G) {
          var Y;
          return (Y = g == null ? void 0 : g.next) === null || Y === void 0 ? void 0 : Y.call(g, G);
        });
      }), y && [Fi, Gi].forEach(function(N) {
        return J(b, N, Oo);
      });
      var ee = function(N) {
        var G = "ajax error" + (N ? " " + N : "");
        t.error(new ui(G, b, x));
      };
      b.addEventListener("error", function(N) {
        var G;
        (G = g == null ? void 0 : g.error) === null || G === void 0 || G.call(g, N), ee();
      }), b.addEventListener(Ho, function(N) {
        var G, Y, P = b.status;
        if (P < 400) {
          (G = g == null ? void 0 : g.complete) === null || G === void 0 || G.call(g);
          var S = void 0;
          try {
            S = j(Oo, N);
          } catch (M) {
            t.error(M);
            return;
          }
          t.next(S), t.complete();
        } else
          (Y = g == null ? void 0 : g.error) === null || Y === void 0 || Y.call(g, N), ee(P);
      });
    }
    var Se = x.user, B = x.method, fe = x.async;
    Se ? b.open(B, s, fe, Se, x.password) : b.open(B, s, fe), fe && (b.timeout = x.timeout, b.responseType = x.responseType), "withCredentials" in b && (b.withCredentials = x.withCredentials);
    for (var v in d)
      d.hasOwnProperty(v) && b.setRequestHeader(v, d[v]);
    return C ? b.send(C) : b.send(), function() {
      b && b.readyState !== 4 && b.abort();
    };
  });
}
function qh(e, t) {
  var r;
  if (!e || typeof e == "string" || Qh(e) || Jh(e) || Xh(e) || Wh(e) || Zh(e) || Kh(e))
    return e;
  if (Yh(e))
    return e.buffer;
  if (typeof e == "object")
    return t["content-type"] = (r = t["content-type"]) !== null && r !== void 0 ? r : "application/json;charset=utf-8", JSON.stringify(e);
  throw new TypeError("Unknown body type");
}
var zh = Object.prototype.toString;
function Na(e, t) {
  return zh.call(e) === "[object " + t + "]";
}
function Xh(e) {
  return Na(e, "ArrayBuffer");
}
function Wh(e) {
  return Na(e, "File");
}
function Zh(e) {
  return Na(e, "Blob");
}
function Yh(e) {
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView(e);
}
function Qh(e) {
  return typeof FormData < "u" && e instanceof FormData;
}
function Jh(e) {
  return typeof URLSearchParams < "u" && e instanceof URLSearchParams;
}
function Kh(e) {
  return typeof ReadableStream < "u" && e instanceof ReadableStream;
}
let $h = class {
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
const ev = new $h("https://demo.compas.energy", {}, "DSOM Versatel Production URL"), tv = [ev], rv = tv[0].getUrl();
let Cl = class {
  constructor(t = {}) {
    this.configuration = t;
  }
  get basePath() {
    return this.configuration.basePath ?? rv;
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
}, nv = class {
  constructor(t = new Cl()) {
    this.configuration = t, this.middleware = [], this.withMiddleware = (r) => {
      const n = this.clone();
      return n.middleware = n.middleware.concat(r), n;
    }, this.withPreMiddleware = (r) => this.withMiddleware(r.map((n) => ({ pre: n }))), this.withPostMiddleware = (r) => this.withMiddleware(r.map((n) => ({ post: n }))), this.createRequestArgs = ({ url: r, query: n, method: i, headers: a, body: o, responseType: l }) => ({
      url: `${this.configuration.basePath}${r}${n && Object.keys(n).length ? `?${iv(n)}` : ""}`,
      method: i,
      headers: a,
      body: o instanceof FormData ? o : JSON.stringify(o),
      responseType: l ?? "json"
    }), this.rxjsRequest = (r) => Sl(r).pipe(
      Ke((n) => (this.middleware.filter((i) => i.pre).forEach((i) => n = i.pre(n)), n)),
      Al(
        (n) => sr(n).pipe(
          Ke((i) => (this.middleware.filter((a) => a.post).forEach((a) => i = a.post(i)), i))
        )
      )
    ), this.clone = () => Object.assign(Object.create(Object.getPrototypeOf(this)), this), this.middleware = t.middleware;
  }
  request(t, r) {
    return this.rxjsRequest(this.createRequestArgs(t)).pipe(
      Ke((n) => {
        const { status: i, response: a } = n;
        if (i >= 200 && i < 300)
          return (r == null ? void 0 : r.response) === "raw" ? n : a;
        throw n;
      })
    );
  }
};
const fr = (e) => encodeURIComponent(`${e}`), iv = (e) => Object.entries(e).map(
  ([t, r]) => r instanceof Array ? r.map((n) => `${fr(t)}=${fr(n)}`).join("&") : `${fr(t)}=${fr(r)}`
).join("&"), qn = (e, t, r) => {
  if (e == null)
    throw new Error(`Parameter "${t}" was null or undefined when calling "${r}".`);
};
class av extends nv {
  retrieveDataResourceByVersion({ id: t, version: r }, n) {
    qn(t, "id", "retrieveDataResourceByVersion"), qn(r, "version", "retrieveDataResourceByVersion");
    const i = {};
    return this.request({
      url: "/api/scl/{id}/version/{version}".replace("{id}", fr(t)).replace("{version}", fr(r)),
      method: "GET",
      headers: i,
      responseType: "blob"
    }, n == null ? void 0 : n.responseOpts);
  }
  retrieveDataResourceHistory({ id: t }, r) {
    qn(t, "id", "retrieveDataResourceHistory");
    const n = {};
    return this.request({
      url: "/api/scl/{id}/versions".replace("{id}", fr(t)),
      method: "GET",
      headers: n
    }, r == null ? void 0 : r.responseOpts);
  }
  searchForResources({ dataResourceSearch: t }, r) {
    qn(t, "dataResourceSearch", "searchForResources");
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
class Ua {
  constructor(t, r, n, i, a, o, l, s, u) {
    this.uuid = t, this.name = r, this.author = n, this.type = i, this.changedAt = a, this.version = o, this.available = l, this.deleted = s, this.location = u;
  }
  static from(t) {
    return new Ua(
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
class ov {
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
const sv = new ov("https://demo.compas.energy", {}, "DSOM Versatel Production URL"), lv = [sv], uv = lv[0].getUrl();
class Il {
  constructor(t = {}) {
    this.configuration = t;
  }
  get basePath() {
    return this.configuration.basePath ?? uv;
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
class cv {
  constructor(t = new Il()) {
    this.configuration = t, this.middleware = [], this.withMiddleware = (r) => {
      const n = this.clone();
      return n.middleware = n.middleware.concat(r), n;
    }, this.withPreMiddleware = (r) => this.withMiddleware(r.map((n) => ({ pre: n }))), this.withPostMiddleware = (r) => this.withMiddleware(r.map((n) => ({ post: n }))), this.createRequestArgs = ({ url: r, query: n, method: i, headers: a, body: o, responseType: l }) => ({
      url: `${this.configuration.basePath}${r}${n && Object.keys(n).length ? `?${fv(n)}` : ""}`,
      method: i,
      headers: a,
      body: o instanceof FormData ? o : JSON.stringify(o),
      responseType: l ?? "json"
    }), this.rxjsRequest = (r) => Sl(r).pipe(
      Ke((n) => (this.middleware.filter((i) => i.pre).forEach((i) => n = i.pre(n)), n)),
      Al(
        (n) => sr(n).pipe(
          Ke((i) => (this.middleware.filter((a) => a.post).forEach((a) => i = a.post(i)), i))
        )
      )
    ), this.clone = () => Object.assign(Object.create(Object.getPrototypeOf(this)), this), this.middleware = t.middleware;
  }
  request(t, r) {
    return this.rxjsRequest(this.createRequestArgs(t)).pipe(
      Ke((n) => {
        const { status: i, response: a } = n;
        if (i >= 200 && i < 300)
          return (r == null ? void 0 : r.response) === "raw" ? n : a;
        throw n;
      })
    );
  }
}
const _t = (e) => encodeURIComponent(`${e}`), fv = (e) => Object.entries(e).map(
  ([t, r]) => r instanceof Array ? r.map((n) => `${_t(t)}=${_t(n)}`).join("&") : `${_t(t)}=${_t(r)}`
).join("&"), Dt = (e, t, r) => {
  if (e == null)
    throw new Error(`Parameter "${t}" was null or undefined when calling "${r}".`);
};
class dv extends cv {
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
class ka {
  constructor(t, r, n, i, a) {
    this.uuid = a, this.key = t, this.name = r, this.description = n, this.assignedResources = i;
  }
  static from(t) {
    return new ka(t.key, t.name, t.description, t.assignedResources, t.uuid);
  }
}
class Gr {
  constructor() {
    this.endpoint = "/compas-scl-data-service", this.locationsApiClient = this.createLocationsApiClient(this.endpoint), this.historyApiClient = this.createHistoryApiClient(this.endpoint);
  }
  static getInstance() {
    return Gr.instance || (Gr.instance = new Gr()), Gr.instance;
  }
  getLocations(t) {
    return this.locationsApiClient.getLocations({
      page: t == null ? void 0 : t.page,
      pageSize: t == null ? void 0 : t.pageSize
    }).pipe(
      Ke((r) => r || []),
      Ke((r) => r.map((n) => ka.from(n)))
    );
  }
  assignResourceToLocation(t, r) {
    return this.locationsApiClient.assignResourceToLocation({ locationId: t, uuid: r }).pipe(Ke(() => {
    }));
  }
  unassignResourceFromLocation(t, r) {
    return this.locationsApiClient.unassignResourceFromLocation({ locationId: t, uuid: r }).pipe(Ke(() => {
    }));
  }
  searchResources(t) {
    return console.log(t), this.historyApiClient.searchForResources({
      dataResourceSearch: this.mapToDataResourceSearch(t)
    }).pipe(
      Ke((r) => (console.log(r), r.results)),
      Ke(
        (r) => r.map((n) => Ua.from(n))
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
    const r = new Il({
      basePath: t
      // accessToken: authInfo.token,
    });
    return new dv(r);
  }
  createHistoryApiClient(t) {
    const r = new Cl({
      basePath: t
      // accessToken: authInfo.token,
    });
    return new av(r);
  }
}
var kt;
class hv {
  constructor() {
    re(this, kt, ht([]));
  }
  get store() {
    return T(this, kt);
  }
  set(t) {
    T(this, kt).set(t);
  }
  update(t) {
    T(this, kt).update((r) => r.map((n) => n.uuid === t.uuid ? t : n));
  }
  add(t) {
    T(this, kt).update((r) => [...r, t]);
  }
  remove(t) {
    T(this, kt).update((r) => r.filter((n) => n.uuid !== t));
  }
  findById(t) {
    return Ps(T(this, kt)).find((r) => r.uuid === t);
  }
}
kt = new WeakMap();
function wt(e) {
  return Object.entries(e).filter(([t, r]) => t !== "" && r).map(([t]) => t).join(" ");
}
function ft(e, t, r, n = { bubbles: !0 }) {
  if (typeof Event > "u")
    throw new Error("Event not defined.");
  if (!e)
    throw new Error("Tried to dispatch event without element.");
  const i = new CustomEvent(t, Object.assign(Object.assign({}, n), { detail: r }));
  return e == null || e.dispatchEvent(i), i;
}
function vv(e, t) {
  let r = Object.getOwnPropertyNames(e);
  const n = {};
  for (let i = 0; i < r.length; i++) {
    const a = r[i], o = a.indexOf("$");
    o !== -1 && t.indexOf(a.substring(0, o + 1)) !== -1 || t.indexOf(a) === -1 && (n[a] = e[a]);
  }
  return n;
}
function Lo(e, t) {
  let r = Object.getOwnPropertyNames(e);
  const n = {};
  for (let i = 0; i < r.length; i++) {
    const a = r[i];
    a.substring(0, t.length) === t && (n[a.substring(t.length)] = e[a]);
  }
  return n;
}
class pv {
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
    r in a || (a[r] = /* @__PURE__ */ new Map()), a[r].set(n, tc(t, r, n, i));
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
function z(e, t) {
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
var zn;
function mv(e, t) {
  t === void 0 && (t = !1);
  var r = e.CSS, n = zn;
  if (typeof zn == "boolean" && !t)
    return zn;
  var i = r && typeof r.supports == "function";
  if (!i)
    return !1;
  var a = r.supports("--css-vars", "yes"), o = r.supports("(--css-vars: yes)") && r.supports("color", "#00000000");
  return n = a || o, t || (zn = n), n;
}
function gv(e, t, r) {
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
var Ci = (
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
function bv(e) {
  return e === void 0 && (e = window), _v(e) ? { passive: !0 } : !1;
}
function _v(e) {
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
const yv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  applyPassive: bv
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
function Ev(e, t) {
  if (e.closest)
    return e.closest(t);
  for (var r = e; r; ) {
    if (Rl(r, t))
      return r;
    r = r.parentElement;
  }
  return null;
}
function Rl(e, t) {
  var r = e.matches || e.webkitMatchesSelector || e.msMatchesSelector;
  return r.call(e, t);
}
function wv(e) {
  var t = e;
  if (t.offsetParent !== null)
    return t.scrollWidth;
  var r = t.cloneNode(!0);
  r.style.setProperty("position", "absolute"), r.style.setProperty("transform", "translate(-9999px, -9999px)"), document.documentElement.appendChild(r);
  var n = r.scrollWidth;
  return document.documentElement.removeChild(r), n;
}
const Tl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  closest: Ev,
  estimateScrollWidth: wv,
  matches: Rl
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
var Sv = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  BG_FOCUSED: "mdc-ripple-upgraded--background-focused",
  FG_ACTIVATION: "mdc-ripple-upgraded--foreground-activation",
  FG_DEACTIVATION: "mdc-ripple-upgraded--foreground-deactivation",
  ROOT: "mdc-ripple-upgraded",
  UNBOUNDED: "mdc-ripple-upgraded--unbounded"
}, Av = {
  VAR_FG_SCALE: "--mdc-ripple-fg-scale",
  VAR_FG_SIZE: "--mdc-ripple-fg-size",
  VAR_FG_TRANSLATE_END: "--mdc-ripple-fg-translate-end",
  VAR_FG_TRANSLATE_START: "--mdc-ripple-fg-translate-start",
  VAR_LEFT: "--mdc-ripple-left",
  VAR_TOP: "--mdc-ripple-top"
}, Po = {
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
var Mo = [
  "touchstart",
  "pointerdown",
  "mousedown",
  "keydown"
], Do = [
  "touchend",
  "pointerup",
  "mouseup",
  "contextmenu"
], Xn = [], xv = (
  /** @class */
  function(e) {
    At(t, e);
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
        return Sv;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t, "strings", {
      get: function() {
        return Av;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t, "numbers", {
      get: function() {
        return Po;
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
          for (var a = Ht(Mo), o = a.next(); !o.done; o = a.next()) {
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
          for (var a = Ht(Do), o = a.next(); !o.done; o = a.next()) {
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
        for (var i = Ht(Mo), a = i.next(); !a.done; a = i.next()) {
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
        for (var i = Ht(Do), a = i.next(); !a.done; a = i.next()) {
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
            var l = r !== void 0 && Xn.length > 0 && Xn.some(function(s) {
              return n.adapter.containsEventTarget(s);
            });
            if (l) {
              this.resetActivationState();
              return;
            }
            r !== void 0 && (Xn.push(r.target), this.registerDeactivationHandlers(r)), i.wasElementMadeActive = this.checkElementMadeActive(r), i.wasElementMadeActive && this.animateActivation(), requestAnimationFrame(function() {
              Xn = [], !i.wasElementMadeActive && r !== void 0 && (r.key === " " || r.keyCode === 32) && (i.wasElementMadeActive = n.checkElementMadeActive(r), i.wasElementMadeActive && n.animateActivation()), i.wasElementMadeActive || (n.activationState = n.defaultActivationState());
            });
          }
        }
      }
    }, t.prototype.checkElementMadeActive = function(r) {
      return r !== void 0 && r.type === "keydown" ? this.adapter.isSurfaceActive() : !0;
    }, t.prototype.animateActivation = function() {
      var r = this, n = t.strings, i = n.VAR_FG_TRANSLATE_START, a = n.VAR_FG_TRANSLATE_END, o = t.cssClasses, l = o.FG_DEACTIVATION, s = o.FG_ACTIVATION, u = t.numbers.DEACTIVATION_TIMEOUT_MS;
      this.layoutInternal();
      var c = "", d = "";
      if (!this.adapter.isUnbounded()) {
        var v = this.getFgTranslationCoordinates(), p = v.startPoint, h = v.endPoint;
        c = p.x + "px, " + p.y + "px", d = h.x + "px, " + h.y + "px";
      }
      this.adapter.updateCssVariable(i, c), this.adapter.updateCssVariable(a, d), clearTimeout(this.activationTimer), clearTimeout(this.fgDeactivationRemovalTimer), this.rmBoundedActivationClasses(), this.adapter.removeClass(l), this.adapter.computeBoundingRect(), this.adapter.addClass(s), this.activationTimer = setTimeout(function() {
        r.activationTimerCallback();
      }, u);
    }, t.prototype.getFgTranslationCoordinates = function() {
      var r = this.activationState, n = r.activationEvent, i = r.wasActivatedByPointer, a;
      i ? a = gv(n, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect()) : a = {
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
      }, Po.FG_DEACTIVATION_MS));
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
  }(Ci)
);
const { applyPassive: Bo } = yv, { matches: Cv } = Tl;
function Ol(e, { ripple: t = !0, surface: r = !1, unbounded: n = !1, disabled: i = !1, color: a, active: o, rippleElement: l, eventTarget: s, activeTarget: u, addClass: c = (h) => e.classList.add(h), removeClass: d = (h) => e.classList.remove(h), addStyle: v = (h, m) => e.style.setProperty(h, m), initPromise: p = Promise.resolve() } = {}) {
  let h, m = new pv(), E = ve("SMUI:addLayoutListener"), _, C = o, x = s, b = u;
  function g() {
    r ? (c("mdc-ripple-surface"), a === "primary" ? (c("smui-ripple-surface--primary"), d("smui-ripple-surface--secondary")) : a === "secondary" ? (d("smui-ripple-surface--primary"), c("smui-ripple-surface--secondary")) : (d("smui-ripple-surface--primary"), d("smui-ripple-surface--secondary"))) : (d("mdc-ripple-surface"), d("smui-ripple-surface--primary"), d("smui-ripple-surface--secondary")), h && C !== o && (C = o, o ? h.activate() : o === !1 && h.deactivate()), t && !h ? (h = new xv({
      addClass: c,
      browserSupportsCssVars: () => mv(window),
      computeBoundingRect: () => (l || e).getBoundingClientRect(),
      containsEventTarget: (y) => e.contains(y),
      deregisterDocumentInteractionHandler: (y, I) => m.off(document.documentElement, y, I),
      deregisterInteractionHandler: (y, I) => m.off(s || e, y, I),
      deregisterResizeHandler: (y) => window.removeEventListener("resize", y),
      getWindowPageOffset: () => {
        var y, I;
        return {
          x: (y = window.pageXOffset) !== null && y !== void 0 ? y : window.scrollX,
          y: (I = window.pageYOffset) !== null && I !== void 0 ? I : window.scrollY
        };
      },
      isSurfaceActive: () => o ?? Cv(u || e, ":active"),
      isSurfaceDisabled: () => !!i,
      isUnbounded: () => !!n,
      registerDocumentInteractionHandler: (y, I) => {
        const D = Bo();
        m.on(document.documentElement, y, I, typeof D == "boolean" ? { capture: D } : D);
      },
      registerInteractionHandler: (y, I) => {
        const D = Bo();
        m.on(s || e, y, I, typeof D == "boolean" ? { capture: D } : D);
      },
      registerResizeHandler: (y) => m.on(window, "resize", y),
      removeClass: d,
      updateCssVariable: v
    }), p.then(() => {
      h && (h.init(), h.setUnbounded(n));
    })) : h && !t && p.then(() => {
      h && (h.destroy(), h = void 0, m.clear());
    }), h && (x !== s || b !== u) && (x = s, b = u, h.destroy(), requestAnimationFrame(() => {
      h && (h.init(), h.setUnbounded(n));
    })), !t && n && c("mdc-ripple-upgraded--unbounded");
  }
  g(), E && (_ = E(A));
  function A() {
    h && h.layout();
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
        removeClass: d,
        addStyle: v,
        initPromise: p
      } = Object.assign({ ripple: !0, surface: !1, unbounded: !1, disabled: !1, color: void 0, active: void 0, rippleElement: void 0, eventTarget: void 0, activeTarget: void 0, addClass: (I) => e.classList.add(I), removeClass: (I) => e.classList.remove(I), addStyle: (I, D) => e.style.setProperty(I, D), initPromise: Promise.resolve() }, y)), g();
    },
    destroy() {
      h && (h.destroy(), h = void 0, m.clear(), d("mdc-ripple-surface"), d("smui-ripple-surface--primary"), d("smui-ripple-surface--secondary")), _ && _();
    }
  };
}
function Iv(e, t) {
  Me(t, !0);
  let r = R(t, "use", 19, () => []), n = R(t, "class", 3, ""), i = R(t, "on", 3, !1), a = R(t, "component", 3, Fa), o = R(t, "tag", 3, "i"), l = /* @__PURE__ */ St(t, [
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
  const u = /* @__PURE__ */ Ee(() => o() === "svg" || a() === Ov), c = ve("SMUI:icon:context");
  function d() {
    return s.getElement();
  }
  var v = { getElement: d }, p = $(), h = q(p);
  {
    let m = /* @__PURE__ */ Ee(() => wt({
      "mdc-button__icon": c === "button",
      "mdc-fab__icon": c === "fab",
      "mdc-icon-button__icon": c === "icon-button",
      "mdc-icon-button__icon--on": c === "icon-button" && i(),
      "mdc-tab__icon": c === "tab",
      "mdc-banner__icon": c === "banner",
      "mdc-segmented-button__icon": c === "segmented-button",
      [n()]: !0
    }));
    wi(h, a, (E, _) => {
      je(
        _(E, Si(
          {
            get tag() {
              return o();
            },
            get use() {
              return r();
            },
            get class() {
              return f(m);
            },
            "aria-hidden": "true"
          },
          () => f(u) ? { focusable: "false", tabindex: "-1" } : {},
          () => l,
          {
            children: (C, x) => {
              var b = $(), g = q(b);
              Pe(g, () => t.children ?? pe), L(C, b);
            },
            $$slots: { default: !0 }
          }
        )),
        (C) => s = C,
        () => s
      );
    });
  }
  return L(e, p), De(v);
}
var Rv = /* @__PURE__ */ pt("<svg><!></svg>");
function Fa(e, t) {
  Me(t, !0);
  let r = R(t, "use", 19, () => []), n = R(t, "tag", 3, "div"), i = /* @__PURE__ */ St(t, ["$$slots", "$$events", "$$legacy", "use", "tag", "children"]);
  const a = /* @__PURE__ */ Ee(() => [
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
  var s = { getElement: l }, u = $(), c = q(u);
  {
    var d = (p) => {
      var h = Rv();
      at(h, () => ({ ...i }));
      var m = ae(h);
      Pe(m, () => t.children ?? pe), je(h, (E) => o = E, () => o), it(h, (E, _) => z == null ? void 0 : z(E, _), r), L(p, h);
    }, v = (p) => {
      var h = $(), m = q(h);
      {
        var E = (C) => {
          var x = $(), b = q(x);
          io(b, n, !1, (g, A) => {
            je(g, (y) => o = y, () => o), it(g, (y, I) => z == null ? void 0 : z(y, I), r), at(g, () => ({ ...i }));
          }), L(C, x);
        }, _ = (C) => {
          var x = $(), b = q(x);
          io(b, n, !1, (g, A) => {
            je(g, (D) => o = D, () => o), it(g, (D, H) => z == null ? void 0 : z(D, H), r), at(g, () => ({ ...i }));
            var y = $(), I = q(y);
            Pe(I, () => t.children ?? pe), L(A, y);
          }), L(C, x);
        };
        se(
          m,
          (C) => {
            f(a) ? C(E) : C(_, !1);
          },
          !0
        );
      }
      L(p, h);
    };
    se(c, (p) => {
      n() === "svg" ? p(d) : p(v, !1);
    });
  }
  return L(e, u), De(s);
}
var Tv = /* @__PURE__ */ pt("<svg><!></svg>");
function Ov(e, t) {
  Me(t, !0), console && console.warn && console.warn('The @smui/common Svg component is deprecated. You can use `tag="svg"` now.');
  let r = R(t, "use", 19, () => []), n = /* @__PURE__ */ St(t, ["$$slots", "$$events", "$$legacy", "use", "children"]), i;
  function a() {
    return i;
  }
  var o = { getElement: a }, l = Tv();
  at(l, () => ({ ...n }));
  var s = ae(l);
  return Pe(s, () => t.children ?? pe), je(l, (u) => i = u, () => i), it(l, (u, c) => z == null ? void 0 : z(u, c), r), L(e, l), De(o);
}
var Hv = /* @__PURE__ */ ce('<div class="mdc-button__touch"></div>'), Lv = /* @__PURE__ */ ce('<div class="mdc-button__ripple"></div> <!><!>', 1);
function Pv(e, t) {
  Me(t, !0);
  let r = R(t, "use", 19, () => []), n = R(t, "class", 3, ""), i = R(t, "style", 3, ""), a = R(t, "ripple", 3, !0), o = R(t, "color", 3, "primary"), l = R(t, "variant", 3, "text"), s = R(t, "touch", 3, !1), u = R(t, "action", 3, "close"), c = R(t, "defaultAction", 3, !1), d = R(t, "secondary", 3, !1), v = R(t, "component", 3, Fa), p = R(t, "tag", 19, () => t.href == null ? "button" : "a"), h = /* @__PURE__ */ St(t, [
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
  ]), m, E = ie({}), _ = ie({}), C = ve("SMUI:button:context");
  const x = /* @__PURE__ */ Ee(() => C === "dialog:action" && u() != null ? { "data-mdc-dialog-action": u() } : { action: u() }), b = /* @__PURE__ */ Ee(() => C === "dialog:action" && c() ? { "data-mdc-dialog-button-default": "" } : {}), g = /* @__PURE__ */ Ee(() => C === "banner" ? {} : { secondary: d() });
  let A = t.disabled;
  He(() => {
    if (A !== t.disabled) {
      if (m) {
        const B = j();
        "blur" in B && B.blur();
      }
      A = h.disabled;
    }
  }), ne("SMUI:label:context", "button"), ne("SMUI:icon:context", "button");
  function y(B) {
    E[B] || (E[B] = !0);
  }
  function I(B) {
    (!(B in E) || E[B]) && (E[B] = !1);
  }
  function D(B, fe) {
    _[B] != fe && (fe === "" || fe == null ? delete _[B] : _[B] = fe);
  }
  function H() {
    C === "banner" && ft(j(), d() ? "SMUIBannerButtonSecondaryActionClick" : "SMUIBannerButtonPrimaryActionClick");
  }
  function j() {
    return m.getElement();
  }
  var J = { getElement: j }, ee = $(), Se = q(ee);
  {
    let B = /* @__PURE__ */ Ee(() => [
      [
        Ol,
        {
          ripple: a(),
          unbounded: !1,
          color: o(),
          disabled: !!t.disabled,
          addClass: y,
          removeClass: I,
          addStyle: D
        }
      ],
      ...r()
    ]), fe = /* @__PURE__ */ Ee(() => wt({
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
      "mdc-banner__secondary-action": C === "banner" && d(),
      "mdc-banner__primary-action": C === "banner" && !d(),
      "mdc-tooltip__action": C === "tooltip:rich-actions",
      ...E,
      [n()]: !0
    })), N = /* @__PURE__ */ Ee(() => Object.entries(_).map(([G, Y]) => `${G}: ${Y};`).concat([i()]).join(" "));
    wi(Se, v, (G, Y) => {
      je(
        Y(G, Si(
          {
            get tag() {
              return p();
            },
            get use() {
              return f(B);
            },
            get class() {
              return f(fe);
            },
            get style() {
              return f(N);
            }
          },
          () => f(x),
          () => f(b),
          () => f(g),
          {
            get href() {
              return t.href;
            }
          },
          () => h,
          {
            onclick: (P) => {
              var S;
              H(), (S = t.onclick) == null || S.call(t, P);
            },
            children: (P, S) => {
              var M = Lv(), ge = Le(q(M), 2);
              Pe(ge, () => t.children ?? pe);
              var _e = Le(ge);
              {
                var de = (X) => {
                  var te = Hv();
                  L(X, te);
                };
                se(_e, (X) => {
                  s() && X(de);
                });
              }
              L(P, M);
            },
            $$slots: { default: !0 }
          }
        )),
        (P) => m = P,
        () => m
      );
    });
  }
  return L(e, ee), De(J);
}
function Mv(e, t) {
  Me(t, !0);
  let r = R(t, "callback", 3, () => {
  }), n = R(t, "disabled", 3, !1), i = R(t, "variant", 3, "default"), a = R(t, "isAbortAction", 3, !1), o = R(t, "backgroundColor", 3, void 0);
  {
    let l = /* @__PURE__ */ Ee(() => a() ? "background-color: #ff3e00;" : "background-color: " + o());
    Pv(e, {
      onclick: () => r()(),
      get variant() {
        return i();
      },
      get disabled() {
        return n();
      },
      get style() {
        return f(l);
      },
      children: (s, u) => {
        var c = $(), d = q(c);
        Pe(d, () => t.children ?? pe), L(s, c);
      },
      $$slots: { default: !0 }
    });
  }
  De();
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
var Wn = {
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
var Dv = (
  /** @class */
  function(e) {
    At(t, e);
    function t(r) {
      var n = e.call(this, k(k({}, t.defaultAdapter), r)) || this;
      return n.hasToggledAriaLabel = !1, n;
    }
    return Object.defineProperty(t, "cssClasses", {
      get: function() {
        return Wn;
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
      return this.adapter.hasClass(Wn.ICON_BUTTON_ON);
    }, t.prototype.toggle = function(r) {
      if (r === void 0 && (r = !this.isOn()), r ? this.adapter.addClass(Wn.ICON_BUTTON_ON) : this.adapter.removeClass(Wn.ICON_BUTTON_ON), this.hasToggledAriaLabel) {
        var n = r ? this.adapter.getAttr(Bt.DATA_ARIA_LABEL_ON) : this.adapter.getAttr(Bt.DATA_ARIA_LABEL_OFF);
        this.adapter.setAttr(Bt.ARIA_LABEL, n || "");
      } else
        this.adapter.setAttr(Bt.ARIA_PRESSED, "" + r);
    }, t;
  }(Ci)
), Bv = /* @__PURE__ */ ce('<div class="mdc-icon-button__touch"></div>'), Nv = /* @__PURE__ */ ce('<div class="mdc-icon-button__ripple"></div> <!><!>', 1);
function Uv(e, t) {
  Me(t, !0);
  let r = () => {
  };
  function n(S) {
    return S === r;
  }
  let i = R(t, "use", 19, () => []), a = R(t, "class", 3, ""), o = R(t, "style", 3, ""), l = R(t, "ripple", 3, !0), s = R(t, "toggle", 3, !1), u = R(t, "pressed", 15, r), c = R(t, "touch", 3, !1), d = R(t, "displayFlex", 3, !0), v = R(t, "size", 3, "normal"), p = R(t, "component", 3, Fa), h = R(t, "tag", 19, () => t.href == null ? "button" : "a"), m = /* @__PURE__ */ St(t, [
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
  ]), E, _, C = /* @__PURE__ */ ue(ie({})), x = ie({}), b = /* @__PURE__ */ ue(ie({})), g = ve("SMUI:icon-button:context"), A = ve("SMUI:icon-button:aria-describedby");
  const y = /* @__PURE__ */ Ee(() => {
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
  let I = !!t.disabled;
  He(() => {
    if (I != !!t.disabled) {
      if (E) {
        const S = N();
        "blur" in S && S.blur();
      }
      I = !!t.disabled;
    }
  }), ne("SMUI:icon:context", "icon-button");
  let D = null;
  He(() => {
    E && N() && s() !== D && (s() && !_ ? (_ = new Dv({
      addClass: j,
      hasClass: H,
      notifyChange: (S) => {
        fe(S), ft(N(), "SMUIIconButtonToggleChange", S);
      },
      removeClass: J,
      getAttr: Se,
      setAttr: B
    }), _.init()) : !s() && _ && (_.destroy(), _ = void 0, V(C, {}, !0), V(b, {}, !0)), D = s());
  }), He(() => {
    _ && !n(u()) && _.isOn() !== u() && _.toggle(u());
  }), Ra(() => {
    _ && _.destroy();
  });
  function H(S) {
    return S in f(C) ? f(C)[S] : N().classList.contains(S);
  }
  function j(S) {
    f(C)[S] || (f(C)[S] = !0);
  }
  function J(S) {
    (!(S in f(C)) || f(C)[S]) && (f(C)[S] = !1);
  }
  function ee(S, M) {
    x[S] != M && (M === "" || M == null ? delete x[S] : x[S] = M);
  }
  function Se(S) {
    return S in f(b) ? f(b)[S] ?? null : N().getAttribute(S);
  }
  function B(S, M) {
    f(b)[S] !== M && (f(b)[S] = M);
  }
  function fe(S) {
    u(S.isOn);
  }
  function N() {
    return E.getElement();
  }
  var G = { getElement: N }, Y = $(), P = q(Y);
  {
    let S = /* @__PURE__ */ Ee(() => [
      [
        Ol,
        {
          ripple: l(),
          unbounded: !0,
          color: t.color,
          disabled: !!t.disabled,
          addClass: j,
          removeClass: J,
          addStyle: ee
        }
      ],
      ...i()
    ]), M = /* @__PURE__ */ Ee(() => wt({
      "mdc-icon-button": !0,
      "mdc-icon-button--on": !n(u()) && u(),
      "mdc-icon-button--touch": c(),
      "mdc-icon-button--display-flex": d(),
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
      ...f(C),
      [a()]: !0
    })), ge = /* @__PURE__ */ Ee(() => Object.entries(x).map(([X, te]) => `${X}: ${te};`).concat([o()]).join(" ")), _e = /* @__PURE__ */ Ee(() => n(u()) ? null : u() ? "true" : "false"), de = /* @__PURE__ */ Ee(() => u() ? t.ariaLabelOn : t.ariaLabelOff);
    wi(P, p, (X, te) => {
      je(
        te(X, Si(
          {
            get tag() {
              return h();
            },
            get use() {
              return f(S);
            },
            get class() {
              return f(M);
            },
            get style() {
              return f(ge);
            },
            get "aria-pressed"() {
              return f(_e);
            },
            get "aria-label"() {
              return f(de);
            },
            get "data-aria-label-on"() {
              return t.ariaLabelOn;
            },
            get "data-aria-label-off"() {
              return t.ariaLabelOff;
            },
            get "aria-describedby"() {
              return A;
            },
            get href() {
              return t.href;
            }
          },
          () => f(y),
          () => f(b),
          () => m,
          {
            onclick: (Ie) => {
              var Ce;
              _ && _.handleClick(), g === "top-app-bar:navigation" && ft(N(), "SMUITopAppBarIconButtonNav"), (Ce = t.onclick) == null || Ce.call(t, Ie);
            },
            children: (Ie, Ce) => {
              var Ve = Nv(), he = Le(q(Ve), 2);
              Pe(he, () => t.children ?? pe);
              var ye = Le(he);
              {
                var oe = (Re) => {
                  var et = Bv();
                  L(Re, et);
                };
                se(ye, (Re) => {
                  c() && Re(oe);
                });
              }
              L(Ie, Ve);
            },
            $$slots: { default: !0 }
          }
        )),
        (Ie) => E = Ie,
        () => E
      );
    });
  }
  return L(e, Y), De(G);
}
function kv(e, t) {
  let r = R(t, "callback", 3, () => {
  }), n = R(t, "icon", 3, ""), i = R(t, "disabled", 3, !1);
  Uv(e, {
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
      Iv(a, {
        class: "material-icons",
        children: (l, s) => {
          var u = $i();
          we(() => $t(u, n())), L(l, u);
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
var No = {
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
function Fv(e) {
  return !!e.document && typeof e.document.createElement == "function";
}
function Gv(e, t) {
  if (Fv(e) && t in No) {
    var r = e.document.createElement("div"), n = No[t], i = n.standard, a = n.prefixed, o = i in r.style;
    return o ? i : a;
  }
  return t;
}
const Be = [];
for (let e = 0; e < 256; ++e)
  Be.push((e + 256).toString(16).slice(1));
function jv(e, t = 0) {
  return (Be[e[t + 0]] + Be[e[t + 1]] + Be[e[t + 2]] + Be[e[t + 3]] + "-" + Be[e[t + 4]] + Be[e[t + 5]] + "-" + Be[e[t + 6]] + Be[e[t + 7]] + "-" + Be[e[t + 8]] + Be[e[t + 9]] + "-" + Be[e[t + 10]] + Be[e[t + 11]] + Be[e[t + 12]] + Be[e[t + 13]] + Be[e[t + 14]] + Be[e[t + 15]]).toLowerCase();
}
let ji;
const Vv = new Uint8Array(16);
function qv() {
  if (!ji) {
    if (typeof crypto > "u" || !crypto.getRandomValues)
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    ji = crypto.getRandomValues.bind(crypto);
  }
  return ji(Vv);
}
const zv = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), Uo = { randomUUID: zv };
function Xv(e, t, r) {
  var i;
  if (Uo.randomUUID && !t && !e)
    return Uo.randomUUID();
  e = e || {};
  const n = e.random ?? ((i = e.rng) == null ? void 0 : i.call(e)) ?? qv();
  if (n.length < 16)
    throw new Error("Random bytes length must be >= 16");
  if (n[6] = n[6] & 15 | 64, n[8] = n[8] & 63 | 128, t) {
    if (r = r || 0, r < 0 || r + 16 > t.length)
      throw new RangeError(`UUID byte range ${r}:${r + 15} is out of buffer bounds`);
    for (let a = 0; a < 16; ++a)
      t[r + a] = n[a];
    return t;
  }
  return jv(n);
}
var Wv = /* @__PURE__ */ ce('<span class="oscd-icon"><!></span>');
function lr(e, t) {
  var r = Wv(), n = ae(r);
  Pe(n, () => t.children ?? pe), L(e, r);
}
var Zv = /* @__PURE__ */ pt('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"></path></svg>');
function Yv(e, t) {
  let r = R(t, "svgStyles", 3, "");
  lr(e, {
    children: (n, i) => {
      var a = Zv();
      we(() => st(a, r())), L(n, a);
    }
  });
}
var Qv = /* @__PURE__ */ pt('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="24px"><path d="m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"></path></svg>');
function Jv(e, t) {
  let r = R(t, "svgStyles", 3, "");
  lr(e, {
    children: (n, i) => {
      var a = Qv();
      we(() => st(a, r())), L(n, a);
    }
  });
}
var Kv = /* @__PURE__ */ pt('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z"></path></svg>');
function $v(e, t) {
  let r = R(t, "svgStyles", 3, "");
  lr(e, {
    children: (n, i) => {
      var a = Kv();
      we(() => st(a, r())), L(n, a);
    }
  });
}
var ep = /* @__PURE__ */ pt('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="m590-160 80 80H240q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h360l200 240v480q0 20-8.5 36.5T768-96L560-302q-17 11-37 16.5t-43 5.5q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 23-5.5 43T618-360l102 104v-356L562-800H240v640h350ZM480-360q33 0 56.5-23.5T560-440q0-33-23.5-56.5T480-520q-33 0-56.5 23.5T400-440q0 33 23.5 56.5T480-360Zm0-80Zm0 0Z"></path></svg>');
function tp(e, t) {
  let r = R(t, "svgStyles", 3, "");
  lr(e, {
    children: (n, i) => {
      var a = ep();
      we(() => st(a, r())), L(n, a);
    }
  });
}
var rp = /* @__PURE__ */ pt('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-160q-134 0-227-93t-93-227q0-134 93-227t227-93q69 0 132 28.5T720-690v-110h80v280H520v-80h168q-32-56-87.5-88T480-720q-100 0-170 70t-70 170q0 100 70 170t170 70q77 0 139-44t87-116h84q-28 106-114 173t-196 67Z"></path></svg>');
function np(e, t) {
  let r = R(t, "svgStyles", 3, "");
  lr(e, {
    children: (n, i) => {
      var a = rp();
      we(() => st(a, r())), L(n, a);
    }
  });
}
var ip = /* @__PURE__ */ pt('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M200-440v-80h560v80H200Z"></path></svg>');
function ap(e, t) {
  let r = R(t, "svgStyles", 3, "");
  lr(e, {
    children: (n, i) => {
      var a = ip();
      we(() => st(a, r())), L(n, a);
    }
  });
}
var op = /* @__PURE__ */ pt('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"></path></svg>');
function sp(e, t) {
  let r = R(t, "svgStyles", 3, "");
  lr(e, {
    children: (n, i) => {
      var a = op();
      we(() => st(a, r())), L(n, a);
    }
  });
}
var lp = /* @__PURE__ */ pt('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"></path></svg>');
function up(e, t) {
  let r = R(t, "svgStyles", 3, "");
  lr(e, {
    children: (n, i) => {
      var a = lp();
      we(() => st(a, r())), L(n, a);
    }
  });
}
wu();
Mt(["change"]);
var cp = /* @__PURE__ */ ce('<div class="overlay svelte-14uvd2z"><div class="loading-spinner-container svelte-14uvd2z"><div class="loading-spinner svelte-14uvd2z"></div> <span class="loading-message svelte-14uvd2z"> </span></div></div>'), fp = /* @__PURE__ */ ce('<div class="svelte-14uvd2z"><!></div>');
function dp(e, t) {
  let r = R(t, "loadingDone", 3, !0), n = R(t, "message", 3, "Loading...");
  var i = fp(), a = ae(i);
  {
    var o = (l) => {
      var s = cp(), u = ae(s), c = Le(ae(u), 2), d = ae(c);
      we(() => $t(d, n())), L(l, s);
    };
    se(a, (l) => {
      r() || l(o);
    });
  }
  L(e, i);
}
Mt(["change"]);
function hp(e, t, r, n) {
  t() && ((e.key === "Enter" || e.key === " ") && (e.preventDefault(), r()), e.key === "Escape" && (e.preventDefault(), n()));
}
var vp = /* @__PURE__ */ ce('<span role="button" tabindex="0" aria-labelledby="tooltip"><!></span>');
function ko(e, t) {
  Me(t, !0);
  let r = R(t, "content", 3, ""), n = R(t, "side", 3, "top"), i = R(t, "hoverDelay", 3, 0), a = R(t, "transitionDuration", 3, 80);
  const o = `tt-${Math.random().toString(36).slice(2)}`;
  let l = /* @__PURE__ */ ue(null), s = /* @__PURE__ */ ue(null), u = /* @__PURE__ */ ue(null), c = /* @__PURE__ */ ue(null), d = /* @__PURE__ */ ue(!1), v = /* @__PURE__ */ ue(null), p = /* @__PURE__ */ ue(null);
  function h() {
    r() && (f(v) && clearTimeout(f(v)), i() > 0 ? V(v, setTimeout(() => V(d, !0), i()), !0) : V(d, !0));
  }
  function m() {
    f(v) && clearTimeout(f(v)), V(d, !1);
  }
  function E() {
    h();
  }
  function _() {
    m();
  }
  function C() {
    h();
  }
  function x() {
    m();
  }
  function b() {
    if (!f(s) || !f(c) || !f(l)) return;
    const I = f(l).getBoundingClientRect(), D = f(c).getBoundingClientRect();
    let H = 0, j = 0;
    const J = 8;
    switch (n()) {
      case "top":
        H = I.top - D.height - J, j = I.left + I.width / 2 - D.width / 2;
        break;
      case "bottom":
        H = I.bottom + J, j = I.left + I.width / 2 - D.width / 2;
        break;
      case "left":
        H = I.top + I.height / 2 - D.height / 2, j = I.left - D.width - J;
        break;
      case "right":
        H = I.top + I.height / 2 - D.height / 2, j = I.right + J;
        break;
    }
    f(s).style.top = `${H + window.scrollY}px`, f(s).style.left = `${j + window.scrollX}px`;
  }
  function g() {
    var I;
    (I = f(p)) == null || I.disconnect(), V(p, null), f(s) && f(s).parentNode && f(s).parentNode.removeChild(f(s)), V(s, null), V(c, null), V(u, null), f(v) && clearTimeout(f(v));
  }
  Ra(g), He(() => {
    if (!(!f(d) || !r())) {
      if (!f(s)) {
        V(s, document.createElement("div"), !0), f(s).style.position = "absolute", f(s).style.zIndex = "9999", f(s).style.pointerEvents = "none", f(s).style.opacity = "0", f(s).style.transition = `opacity ${a()}ms ease`, f(s).id = o, f(s).setAttribute("role", "tooltip"), document.body.appendChild(f(s)), V(u, f(s).attachShadow({ mode: "open" }), !0);
        const I = document.createElement("style");
        I.textContent = `
        .bubble {
          --pad-y: 6px;
          --pad-x: 10px;
          --radius: 4px;
          background: #000;
          color: #fff;
          font-size: 0.85rem;
          line-height: 1.2;
          padding: var(--pad-y) var(--pad-x);
          border-radius: var(--radius);
          white-space: nowrap;
          box-shadow: 0 4px 14px rgba(0,0,0,.25);
          pointer-events: none;
          position: relative;
          transition: none;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
          Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
        }
        .bubble::after {
          content: "";
          position: absolute;
          background: #000;
          width: 8px;
          height: 8px;
          transform: rotate(45deg);
        }
        .bubble.top::after {
          left: 50%;
          bottom: -4px;
          transform: translateX(-50%) rotate(45deg);
        }
        .bubble.bottom::after {
          left: 50%;
          top: -4px;
          transform: translateX(-50%) rotate(45deg);
        }
        .bubble.left::after {
          top: 50%;
          right: -4px;
          transform: translateY(-50%) rotate(45deg);
        }
        .bubble.right::after {
          top: 50%;
          left: -4px;
          transform: translateY(-50%) rotate(45deg);
        }
      `, f(u).appendChild(I), V(c, document.createElement("div"), !0), f(u).appendChild(f(c)), V(
          p,
          new MutationObserver(() => {
            f(d) && b();
          }),
          !0
        ), f(p).observe(document.body, { childList: !0, subtree: !0 });
      }
      f(c) && (f(c).className = `bubble ${n()}`, f(c).innerHTML = r()), f(s) && (f(s).style.opacity = "1", b());
    }
  }), He(() => {
    if (f(d) || !f(s))
      return;
    f(s).style.opacity = "0";
    const I = f(s), D = setTimeout(
      () => {
        I && I.parentNode && I.parentNode.removeChild(I), f(s) === I && g();
      },
      a()
    );
    return () => clearTimeout(D);
  });
  var A = vp();
  A.__keydown = [hp, r, h, m];
  var y = ae(A);
  Pe(y, () => t.children ?? pe), je(A, (I) => V(l, I), () => f(l)), we(() => {
    er(A, "aria-haspopup", r() ? "true" : void 0), er(A, "aria-expanded", r() ? f(d) ? "true" : "false" : void 0), er(A, "aria-describedby", r() ? o : void 0);
  }), kn("mouseenter", A, E), kn("mouseleave", A, _), kn("focus", A, C), kn("blur", A, x), L(e, A), De();
}
Mt(["keydown"]);
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
var tt = {
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
}, gn = {
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
var pp = (
  /** @class */
  function(e) {
    At(t, e);
    function t(r) {
      var n = e.call(this, k(k({}, t.defaultAdapter), r)) || this;
      return n.observer = null, n;
    }
    return Object.defineProperty(t, "cssClasses", {
      get: function() {
        return tt;
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
      this.determinate = !this.adapter.hasClass(tt.INDETERMINATE_CLASS), this.adapter.addClass(tt.ANIMATION_READY_CLASS), this.progress = 0, this.buffer = 1, this.observer = this.adapter.attachResizeObserver(function(n) {
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
        this.adapter.removeClass(tt.INDETERMINATE_CLASS), this.adapter.setAttribute(gt.ARIA_VALUENOW, this.progress.toString()), this.adapter.setAttribute(gt.ARIA_VALUEMAX, "1"), this.adapter.setAttribute(gt.ARIA_VALUEMIN, "0"), this.setPrimaryBarProgress(this.progress), this.setBufferBarProgress(this.buffer);
        return;
      }
      this.observer && this.calculateAndSetDimensions(this.adapter.getWidth()), this.adapter.addClass(tt.INDETERMINATE_CLASS), this.adapter.removeAttribute(gt.ARIA_VALUENOW), this.adapter.removeAttribute(gt.ARIA_VALUEMAX), this.adapter.removeAttribute(gt.ARIA_VALUEMIN), this.setPrimaryBarProgress(1), this.setBufferBarProgress(1);
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
      this.adapter.removeClass(tt.CLOSED_CLASS), this.adapter.removeClass(tt.CLOSED_ANIMATION_OFF_CLASS), this.adapter.removeAttribute(gt.ARIA_HIDDEN);
    }, t.prototype.close = function() {
      this.adapter.addClass(tt.CLOSED_CLASS), this.adapter.setAttribute(gt.ARIA_HIDDEN, "true");
    }, t.prototype.isClosed = function() {
      return this.adapter.hasClass(tt.CLOSED_CLASS);
    }, t.prototype.handleTransitionEnd = function() {
      this.adapter.hasClass(tt.CLOSED_CLASS) && this.adapter.addClass(tt.CLOSED_ANIMATION_OFF_CLASS);
    }, t.prototype.destroy = function() {
      e.prototype.destroy.call(this), this.observer && this.observer.disconnect();
    }, t.prototype.restartAnimation = function() {
      this.adapter.removeClass(tt.ANIMATION_READY_CLASS), this.adapter.forceLayout(), this.adapter.addClass(tt.ANIMATION_READY_CLASS);
    }, t.prototype.setPrimaryBarProgress = function(r) {
      var n = "scaleX(" + r + ")", i = typeof window < "u" ? Gv(window, "transform") : "transform";
      this.adapter.setPrimaryBarStyle(i, n);
    }, t.prototype.setBufferBarProgress = function(r) {
      var n = r * 100 + "%";
      this.adapter.setBufferBarStyle(gt.FLEX_BASIS, n);
    }, t.prototype.calculateAndSetDimensions = function(r) {
      var n = r * gn.PRIMARY_HALF, i = r * gn.PRIMARY_FULL, a = r * gn.SECONDARY_QUARTER, o = r * gn.SECONDARY_HALF, l = r * gn.SECONDARY_FULL;
      this.adapter.setStyle("--mdc-linear-progress-primary-half", n + "px"), this.adapter.setStyle("--mdc-linear-progress-primary-half-neg", -n + "px"), this.adapter.setStyle("--mdc-linear-progress-primary-full", i + "px"), this.adapter.setStyle("--mdc-linear-progress-primary-full-neg", -i + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-quarter", a + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-quarter-neg", -a + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-half", o + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-half-neg", -o + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-full", l + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-full-neg", -l + "px"), this.restartAnimation();
    }, t;
  }(Ci)
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
}, Fo = {
  ARIA_SELECTED: "aria-selected",
  ARIA_SORT: "aria-sort"
}, ur = {
  ARIA_SELECTED: Fo.ARIA_SELECTED,
  ARIA_SORT: Fo.ARIA_SORT
}, nt;
(function(e) {
  e.ASCENDING = "ascending", e.DESCENDING = "descending", e.NONE = "none", e.OTHER = "other";
})(nt || (nt = {}));
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
var mp = (
  /** @class */
  function(e) {
    At(t, e);
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
      return Ds(this, void 0, void 0, function() {
        return Ha(this, function(r) {
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
        o !== i && (this.adapter.removeClassNameByHeaderCellIndex(o, Nt.HEADER_CELL_SORTED), this.adapter.removeClassNameByHeaderCellIndex(o, Nt.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(o, ur.ARIA_SORT, nt.NONE), this.adapter.setSortStatusLabelByHeaderCellIndex(o, nt.NONE));
      this.adapter.setClassNameByHeaderCellIndex(i, Nt.HEADER_CELL_SORTED);
      var l = this.adapter.getAttributeByHeaderCellIndex(i, ur.ARIA_SORT), s = nt.NONE;
      l === nt.ASCENDING ? (this.adapter.setClassNameByHeaderCellIndex(i, Nt.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(i, ur.ARIA_SORT, nt.DESCENDING), s = nt.DESCENDING) : l === nt.DESCENDING ? (this.adapter.removeClassNameByHeaderCellIndex(i, Nt.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(i, ur.ARIA_SORT, nt.ASCENDING), s = nt.ASCENDING) : (this.adapter.setAttributeByHeaderCellIndex(i, ur.ARIA_SORT, nt.ASCENDING), s = nt.ASCENDING), this.adapter.setSortStatusLabelByHeaderCellIndex(i, s), this.adapter.notifySortAction({
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
      n ? (this.adapter.addClassAtRowIndex(r, Nt.ROW_SELECTED), this.adapter.setAttributeAtRowIndex(r, ur.ARIA_SELECTED, "true")) : (this.adapter.removeClassAtRowIndex(r, Nt.ROW_SELECTED), this.adapter.setAttributeAtRowIndex(r, ur.ARIA_SELECTED, "false"));
    }, t;
  }(Ci)
), gp = /* @__PURE__ */ ce('<div class="mdc-data-table__progress-indicator"><div class="mdc-data-table__scrim"></div> <!></div>'), bp = /* @__PURE__ */ ce("<div><div><table><!></table></div> <!> <!></div>");
function _p(e, t) {
  Me(t, !0);
  const r = () => _r(ee, "$progressClosed", n), [n, i] = Pn(), { closest: a } = Tl;
  let o = R(t, "use", 19, () => []), l = R(t, "class", 3, ""), s = R(t, "stickyHeader", 3, !1), u = R(t, "sortable", 3, !1), c = R(t, "sort", 15, null), d = R(t, "sortDirection", 15, "ascending"), v = R(t, "sortAscendingAriaLabel", 3, "sorted, ascending"), p = R(t, "sortDescendingAriaLabel", 3, "sorted, descending"), h = R(t, "container$use", 19, () => []), m = R(t, "container$class", 3, ""), E = R(t, "table$use", 19, () => []), _ = R(t, "table$class", 3, ""), C = /* @__PURE__ */ St(t, [
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
  ]), x, b = /* @__PURE__ */ ue(void 0), g, A = /* @__PURE__ */ ue(void 0), y = /* @__PURE__ */ ue(void 0), I = ie({}), D = /* @__PURE__ */ ue(ie({ height: "auto", top: "initial" })), H = ve("SMUI:addLayoutListener"), j, J = !1, ee = ht(!1), Se = ht(c());
  He(() => {
    ta(Se, c());
  });
  let B = ht(d());
  He(() => {
    ta(B, d());
  }), ne("SMUI:checkbox:context", "data-table"), ne("SMUI:linear-progress:context", "data-table"), ne("SMUI:linear-progress:closed", ee), ne("SMUI:data-table:sortable", u()), ne("SMUI:data-table:sort", Se), ne("SMUI:data-table:sortDirection", B), ne("SMUI:data-table:sortAscendingAriaLabel", v()), ne("SMUI:data-table:sortDescendingAriaLabel", p()), H && (j = H(_e));
  let fe;
  He(() => {
    t.progress && f(b) && fe !== r() && (fe = r(), r() ? f(b).hideProgress() : f(b).showProgress());
  }), ne("SMUI:checkbox:mount", () => {
    f(b) && J && f(b).layout();
  }), ne("SMUI:data-table:header:mount", (w) => {
    V(A, w, !0);
  }), ne("SMUI:data-table:header:unmount", () => {
    V(A, void 0);
  }), ne("SMUI:data-table:body:mount", (w) => {
    V(y, w, !0);
  }), ne("SMUI:data-table:body:unmount", () => {
    V(y, void 0);
  }), Gt(() => (V(
    b,
    new mp({
      addClass: G,
      removeClass: Y,
      getHeaderCellElements: () => {
        var w;
        return ((w = f(A)) == null ? void 0 : w.cells.map((O) => O.element)) ?? [];
      },
      getHeaderCellCount: () => {
        var w;
        return ((w = f(A)) == null ? void 0 : w.cells.length) ?? 0;
      },
      getAttributeByHeaderCellIndex: (w, O) => {
        var U;
        return ((U = f(A)) == null ? void 0 : U.orderedCells[w].getAttr(O)) ?? null;
      },
      setAttributeByHeaderCellIndex: (w, O, U) => {
        var Ae;
        (Ae = f(A)) == null || Ae.orderedCells[w].addAttr(O, U);
      },
      setClassNameByHeaderCellIndex: (w, O) => {
        var U;
        (U = f(A)) == null || U.orderedCells[w].addClass(O);
      },
      removeClassNameByHeaderCellIndex: (w, O) => {
        var U;
        (U = f(A)) == null || U.orderedCells[w].removeClass(O);
      },
      notifySortAction: (w) => {
        c(w.columnId), d(w.sortValue), ft(de(), "SMUIDataTableSorted", w);
      },
      getTableContainerHeight: () => g.getBoundingClientRect().height,
      getTableHeaderHeight: () => {
        const w = de().querySelector(".mdc-data-table__header-row");
        if (!w)
          throw new Error("MDCDataTable: Table header element not found.");
        return w.getBoundingClientRect().height;
      },
      setProgressIndicatorStyles: (w) => {
        V(D, w, !0);
      },
      addClassAtRowIndex: (w, O) => {
        var U;
        (U = f(y)) == null || U.orderedRows[w].addClass(O);
      },
      getRowCount: () => {
        var w;
        return ((w = f(y)) == null ? void 0 : w.rows.length) ?? 0;
      },
      getRowElements: () => {
        var w;
        return ((w = f(y)) == null ? void 0 : w.rows.map((O) => O.element)) ?? [];
      },
      getRowIdAtIndex: (w) => {
        var O;
        return ((O = f(y)) == null ? void 0 : O.orderedRows[w].rowId) ?? null;
      },
      getRowIndexByChildElement: (w) => {
        var O;
        return ((O = f(y)) == null ? void 0 : O.orderedRows.map((U) => U.element).indexOf(a(w, ".mdc-data-table__row"))) ?? -1;
      },
      getSelectedRowCount: () => {
        var w;
        return ((w = f(y)) == null ? void 0 : w.rows.filter((O) => O.selected).length) ?? 0;
      },
      isCheckboxAtRowIndexChecked: (w) => {
        var U;
        const O = (U = f(y)) == null ? void 0 : U.orderedRows[w].checkbox;
        return O ? O.checked : !1;
      },
      isHeaderRowCheckboxChecked: () => {
        var O;
        const w = (O = f(A)) == null ? void 0 : O.checkbox;
        return w ? w.checked : !1;
      },
      isRowsSelectable: () => !!de().querySelector(".mdc-data-table__row-checkbox") || !!de().querySelector(".mdc-data-table__header-row-checkbox"),
      notifyRowSelectionChanged: (w) => {
        var U;
        const O = (U = f(y)) == null ? void 0 : U.orderedRows[w.rowIndex];
        O && ft(de(), "SMUIDataTableSelectionChanged", {
          row: O.element,
          rowId: O.rowId,
          rowIndex: w.rowIndex,
          selected: w.selected
        });
      },
      notifySelectedAll: () => {
        P(!1), ft(de(), "SMUIDataTableSelectedAll");
      },
      notifyUnselectedAll: () => {
        P(!1), ft(de(), "SMUIDataTableUnselectedAll");
      },
      notifyRowClick: (w) => ft(de(), "SMUIDataTableClickRow", w),
      registerHeaderRowCheckbox: () => {
      },
      registerRowCheckboxes: () => {
      },
      removeClassAtRowIndex: (w, O) => {
        var U;
        (U = f(y)) == null || U.orderedRows[w].removeClass(O);
      },
      setAttributeAtRowIndex: (w, O, U) => {
        var Ae;
        (Ae = f(y)) == null || Ae.orderedRows[w].addAttr(O, U);
      },
      setHeaderRowCheckboxChecked: (w) => {
        var U;
        const O = (U = f(A)) == null ? void 0 : U.checkbox;
        O && (O.checked = w);
      },
      setHeaderRowCheckboxIndeterminate: P,
      setRowCheckboxCheckedAtIndex: (w, O) => {
        var Ae;
        const U = (Ae = f(y)) == null ? void 0 : Ae.orderedRows[w].checkbox;
        U && (U.checked = O);
      },
      setSortStatusLabelByHeaderCellIndex: (w, O) => {
      }
    }),
    !0
  ), f(b).init(), f(b).layout(), J = !0, () => {
    var w;
    (w = f(b)) == null || w.destroy();
  })), Ra(() => {
    j && j();
  });
  function N(w) {
    f(b) && f(b).handleRowCheckboxChange(w);
  }
  function G(w) {
    I[w] || (I[w] = !0);
  }
  function Y(w) {
    (!(w in I) || I[w]) && (I[w] = !1);
  }
  function P(w) {
    var U;
    const O = (U = f(A)) == null ? void 0 : U.checkbox;
    O && (O.indeterminate = w);
  }
  function S(w) {
    if (!f(b) || !w.detail.target)
      return;
    const O = a(w.detail.target, ".mdc-data-table__header-cell--with-sort");
    O && ge(O);
  }
  function M(w) {
    if (!f(b) || !w.detail.target)
      return;
    const O = a(w.detail.target, ".mdc-data-table__row");
    O && f(b) && f(b).handleRowClick({ rowId: w.detail.rowId, row: O });
  }
  function ge(w) {
    var qt, Nn;
    const O = ((qt = f(A)) == null ? void 0 : qt.orderedCells) ?? [], U = O.map((Ii) => Ii.element).indexOf(w);
    if (U === -1)
      return;
    const Ae = O[U].columnId ?? null;
    (Nn = f(b)) == null || Nn.handleSortAction({ columnId: Ae, columnIndex: U, headerCell: w });
  }
  function _e() {
    var w;
    return (w = f(b)) == null ? void 0 : w.layout();
  }
  function de() {
    return x;
  }
  var X = { layout: _e, getElement: de }, te = bp(), Ie = (w) => {
    var O;
    f(b) && f(b).handleHeaderRowCheckboxChange(), (O = t.onSMUIDataTableHeaderCheckboxChange) == null || O.call(t, w);
  }, Ce = (w) => {
    var O;
    S(w), (O = t.onSMUIDataTableHeaderClick) == null || O.call(t, w);
  }, Ve = (w) => {
    var O;
    M(w), (O = t.onSMUIDataTableRowClick) == null || O.call(t, w);
  }, he = (w) => {
    var O;
    N(w), (O = t.onSMUIDataTableBodyCheckboxChange) == null || O.call(t, w);
  };
  at(
    te,
    (w, O) => ({
      class: w,
      ...O,
      onSMUIDataTableHeaderCheckboxChange: Ie,
      onSMUIDataTableHeaderClick: Ce,
      onSMUIDataTableRowClick: Ve,
      onSMUIDataTableBodyCheckboxChange: he
    }),
    [
      () => wt({
        "mdc-data-table": !0,
        "mdc-data-table--sticky-header": s(),
        ...I,
        [l()]: !0
      }),
      () => vv(C, ["container$", "table$"])
    ]
  );
  var ye = ae(te);
  at(ye, (w, O) => ({ class: w, ...O }), [
    () => wt({
      "mdc-data-table__table-container": !0,
      [m()]: !0
    }),
    () => Lo(C, "container$")
  ]);
  var oe = ae(ye);
  at(oe, (w, O) => ({ class: w, ...O }), [
    () => wt({ "mdc-data-table__table": !0, [_()]: !0 }),
    () => Lo(C, "table$")
  ]);
  var Re = ae(oe);
  Pe(Re, () => t.children ?? pe), it(oe, (w, O) => z == null ? void 0 : z(w, O), E), je(ye, (w) => g = w, () => g), it(ye, (w, O) => z == null ? void 0 : z(w, O), h);
  var et = Le(ye, 2);
  {
    var Qe = (w) => {
      var O = gp(), U = Le(ae(O), 2);
      Pe(U, () => t.progress ?? pe), we((Ae) => st(O, Ae), [
        () => Object.entries(f(D)).map(([Ae, qt]) => `${Ae}: ${qt};`).join(" ")
      ]), L(w, O);
    };
    se(et, (w) => {
      t.progress && w(Qe);
    });
  }
  var mt = Le(et, 2);
  Pe(mt, () => t.paginate ?? pe), je(te, (w) => x = w, () => x), it(te, (w, O) => z == null ? void 0 : z(w, O), o), L(e, te);
  var Te = De(X);
  return i(), Te;
}
var yp = /* @__PURE__ */ ce("<thead><!></thead>");
function Ep(e, t) {
  Me(t, !0);
  let r = R(t, "use", 19, () => []), n = /* @__PURE__ */ St(t, ["$$slots", "$$events", "$$legacy", "use", "children"]), i, a = /* @__PURE__ */ ue(void 0), o = [];
  const l = /* @__PURE__ */ new WeakMap();
  ne("SMUI:data-table:row:header", !0);
  const s = ve("SMUI:checkbox:mount");
  ne("SMUI:checkbox:mount", (_) => {
    V(a, _, !0), s && s(_);
  });
  const u = ve("SMUI:checkbox:unmount");
  ne("SMUI:checkbox:unmount", (_) => {
    V(a, void 0), u && u(_);
  }), ne("SMUI:data-table:cell:mount", (_) => {
    o.push(_), l.set(_.element, _);
  }), ne("SMUI:data-table:cell:unmount", (_) => {
    const C = o.findIndex((x) => x === _);
    C !== -1 && o.splice(C, 1), l.delete(_.element);
  });
  const c = ve("SMUI:data-table:header:mount"), d = ve("SMUI:data-table:header:unmount");
  Gt(() => {
    const _ = {
      get cells() {
        return o;
      },
      get orderedCells() {
        return v();
      },
      get checkbox() {
        return f(a);
      }
    };
    return c && c(_), () => {
      d && d(_);
    };
  });
  function v() {
    return [
      ...p().querySelectorAll(".mdc-data-table__header-cell")
    ].map((_) => l.get(_)).filter((_) => _ && _._smui_data_table_header_cell_accessor);
  }
  function p() {
    return i;
  }
  var h = { getElement: p }, m = yp();
  at(m, () => ({ ...n }));
  var E = ae(m);
  return Pe(E, () => t.children ?? pe), je(m, (_) => i = _, () => i), it(m, (_, C) => z == null ? void 0 : z(_, C), r), L(e, m), De(h);
}
var wp = /* @__PURE__ */ ce("<tbody><!></tbody>");
function Sp(e, t) {
  Me(t, !0);
  let r = R(t, "use", 19, () => []), n = R(t, "class", 3, ""), i = /* @__PURE__ */ St(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "children"
  ]), a, o = [];
  const l = /* @__PURE__ */ new WeakMap();
  ne("SMUI:data-table:row:header", !1), ne("SMUI:data-table:row:mount", (m) => {
    o.push(m), l.set(m.element, m);
  }), ne("SMUI:data-table:row:unmount", (m) => {
    const E = o.findIndex((_) => _ === m);
    E !== -1 && o.splice(E, 1), l.delete(m.element);
  });
  const s = ve("SMUI:data-table:body:mount"), u = ve("SMUI:data-table:body:unmount");
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
    return [...d().querySelectorAll(".mdc-data-table__row")].map((m) => l.get(m)).filter((m) => m && m._smui_data_table_row_accessor);
  }
  function d() {
    return a;
  }
  var v = { getElement: d }, p = wp();
  at(p, (m) => ({ class: m, ...i }), [
    () => wt({ "mdc-data-table__content": !0, [n()]: !0 })
  ]);
  var h = ae(p);
  return Pe(h, () => t.children ?? pe), je(p, (m) => a = m, () => a), it(p, (m, E) => z == null ? void 0 : z(m, E), r), L(e, p), De(v);
}
let Ap = 0;
var xp = /* @__PURE__ */ ce("<tr><!></tr>");
function Vi(e, t) {
  Me(t, !0);
  let r = R(t, "use", 19, () => []), n = R(t, "class", 3, ""), i = R(t, "rowId", 19, () => "SMUI-data-table-row-" + Ap++), a = /* @__PURE__ */ St(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "rowId",
    "children"
  ]), o, l = /* @__PURE__ */ ue(void 0), s = ie({}), u = ie({}), c = ve("SMUI:data-table:row:header");
  const d = ve("SMUI:checkbox:mount");
  ne("SMUI:checkbox:mount", (H) => {
    V(l, H, !0), d && d(H);
  });
  const v = ve("SMUI:checkbox:unmount");
  ne("SMUI:checkbox:unmount", (H) => {
    V(l, void 0), v && v(H);
  });
  const p = ve("SMUI:data-table:row:mount"), h = ve("SMUI:data-table:row:unmount");
  Gt(() => {
    const H = c ? {
      _smui_data_table_row_accessor: !1,
      get element() {
        return g();
      },
      get checkbox() {
        return f(l);
      },
      get rowId() {
      },
      get selected() {
        return (f(l) && f(l).checked) ?? !1;
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
        return f(l);
      },
      get rowId() {
        return i();
      },
      get selected() {
        return (f(l) && f(l).checked) ?? !1;
      },
      addClass: m,
      removeClass: E,
      getAttr: _,
      addAttr: C
    };
    return p && p(H), () => {
      h && h(H);
    };
  });
  function m(H) {
    s[H] || (s[H] = !0);
  }
  function E(H) {
    (!(H in s) || s[H]) && (s[H] = !1);
  }
  function _(H) {
    return H in u ? u[H] ?? null : g().getAttribute(H);
  }
  function C(H, j) {
    u[H] !== j && (u[H] = j);
  }
  function x(H) {
    ft(g(), "SMUIDataTableHeaderClick", H);
  }
  function b(H) {
    ft(g(), "SMUIDataTableRowClick", { rowId: i(), target: H.target });
  }
  function g() {
    return o;
  }
  var A = { getElement: g }, y = xp(), I = (H) => {
    var j;
    c ? x(H) : b(H), (j = t.onclick) == null || j.call(t, H);
  };
  at(
    y,
    (H) => ({
      class: H,
      "aria-selected": f(l) ? f(l).checked ? "true" : "false" : void 0,
      ...u,
      ...a,
      onclick: I
    }),
    [
      () => wt({
        "mdc-data-table__header-row": c,
        "mdc-data-table__row": !c,
        "mdc-data-table__row--selected": !c && f(l) && f(l).checked,
        ...s,
        [n()]: !0
      })
    ]
  );
  var D = ae(y);
  return Pe(D, () => t.children ?? pe), je(y, (H) => o = H, () => o), it(y, (H, j) => z == null ? void 0 : z(H, j), r), L(e, y), De(A);
}
let Cp = 0;
var Ip = /* @__PURE__ */ ce('<div class="mdc-data-table__header-cell-wrapper"><!> <div class="mdc-data-table__sort-status-label" aria-hidden="true"> </div></div>'), Rp = /* @__PURE__ */ ce("<th><!></th>"), Tp = /* @__PURE__ */ ce("<td><!></td>");
function Zn(e, t) {
  Me(t, !0);
  const r = () => _r(_, "$sort", i), n = () => _r(C, "$sortDirection", i), [i, a] = Pn();
  let o = ve("SMUI:data-table:row:header"), l = R(t, "use", 19, () => []), s = R(t, "class", 3, ""), u = R(t, "numeric", 3, !1), c = R(t, "checkbox", 3, !1), d = R(t, "columnId", 19, () => o ? "SMUI-data-table-column-" + Cp++ : "SMUI-data-table-unused"), v = R(t, "sortable", 19, () => ve("SMUI:data-table:sortable")), p = /* @__PURE__ */ St(t, [
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
  ]), h, m = ie({}), E = ie({}), _ = ve("SMUI:data-table:sort"), C = ve("SMUI:data-table:sortDirection"), x = ve("SMUI:data-table:sortAscendingAriaLabel"), b = ve("SMUI:data-table:sortDescendingAriaLabel");
  v() && (ne("SMUI:label:context", "data-table:sortable-header-cell"), ne("SMUI:icon-button:context", "data-table:sortable-header-cell"), ne("SMUI:icon-button:aria-describedby", d() + "-status-label"));
  const g = ve("SMUI:data-table:cell:mount"), A = ve("SMUI:data-table:cell:unmount");
  Gt(() => {
    const P = o ? {
      _smui_data_table_header_cell_accessor: !0,
      get element() {
        return ee();
      },
      get columnId() {
        return d();
      },
      addClass: y,
      removeClass: I,
      getAttr: D,
      addAttr: H
    } : {
      _smui_data_table_header_cell_accessor: !1,
      get element() {
        return ee();
      },
      get columnId() {
      },
      addClass: y,
      removeClass: I,
      getAttr: D,
      addAttr: H
    };
    return g && g(P), () => {
      A && A(P);
    };
  });
  function y(P) {
    m[P] || (m[P] = !0);
  }
  function I(P) {
    (!(P in m) || m[P]) && (m[P] = !1);
  }
  function D(P) {
    return P in E ? E[P] ?? null : ee().getAttribute(P);
  }
  function H(P, S) {
    E[P] !== S && (E[P] = S);
  }
  function j(P) {
    ft(ee(), "SMUIDataTableHeaderCheckboxChange", P);
  }
  function J(P) {
    ft(ee(), "SMUIDataTableBodyCheckboxChange", P);
  }
  function ee() {
    return h;
  }
  var Se = { getElement: ee }, B = $(), fe = q(B);
  {
    var N = (P) => {
      var S = Rp(), M = (X) => {
        var te;
        c() && j(X), (te = t.onchange) == null || te.call(t, X);
      };
      at(
        S,
        (X) => ({
          class: X,
          role: "columnheader",
          scope: "col",
          "data-column-id": d(),
          "aria-sort": v() ? r() === d() ? n() : "none" : void 0,
          ...E,
          ...p,
          onchange: M
        }),
        [
          () => wt({
            "mdc-data-table__header-cell": !0,
            "mdc-data-table__header-cell--numeric": u(),
            "mdc-data-table__header-cell--checkbox": c(),
            "mdc-data-table__header-cell--with-sort": v(),
            "mdc-data-table__header-cell--sorted": v() && r() === d(),
            ...m,
            [s()]: !0
          })
        ]
      );
      var ge = ae(S);
      {
        var _e = (X) => {
          var te = Ip(), Ie = ae(te);
          Pe(Ie, () => t.children ?? pe);
          var Ce = Le(Ie, 2), Ve = ae(Ce);
          we(() => {
            er(Ce, "id", `${d() ?? ""}-status-label`), $t(Ve, r() === d() ? n() === "ascending" ? x : b : "");
          }), L(X, te);
        }, de = (X) => {
          var te = $(), Ie = q(te);
          Pe(Ie, () => t.children ?? pe), L(X, te);
        };
        se(ge, (X) => {
          v() ? X(_e) : X(de, !1);
        });
      }
      je(S, (X) => h = X, () => h), it(S, (X, te) => z == null ? void 0 : z(X, te), l), L(P, S);
    }, G = (P) => {
      var S = Tp(), M = (_e) => {
        var de;
        c() && J(_e), (de = t.onchange) == null || de.call(t, _e);
      };
      at(
        S,
        (_e) => ({
          class: _e,
          ...E,
          ...p,
          onchange: M
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
      var ge = ae(S);
      Pe(ge, () => t.children ?? pe), je(S, (_e) => h = _e, () => h), it(S, (_e, de) => z == null ? void 0 : z(_e, de), l), L(P, S);
    };
    se(fe, (P) => {
      o ? P(N) : P(G, !1);
    });
  }
  L(e, B);
  var Y = De(Se);
  return a(), Y;
}
Mt(["click"]);
Mt(["click"]);
function ha(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
var Op = Object.freeze({
  // This flag exists as a workaround for issue 454 (basically a browser bug) - seems like these rect values take time to update when in grid layout. Setting it to true can cause strange behaviour in the REPL for non-grid zones, see issue 470
  USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT: "USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT"
});
ha({}, Op.USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT, !1);
var Yn, Go = {
  DND_ZONE_ACTIVE: "dnd-zone-active",
  DND_ZONE_DRAG_DISABLED: "dnd-zone-drag-disabled"
};
Yn = {}, ha(Yn, Go.DND_ZONE_ACTIVE, "Tab to one the items and press space-bar or enter to start dragging it"), ha(Yn, Go.DND_ZONE_DRAG_DISABLED, "This is a disabled drag and drop list");
const Hp = ht([]);
Hp.subscribe;
Mt([
  "click",
  "keydown",
  "pointerdown",
  "pointerup",
  "pointermove"
]);
Mt(["click"]);
const Lp = 4e3;
function Pp() {
  let e = ie({ items: [] }), t = 0;
  const r = (i) => {
    e.items = e.items.filter((a) => a.id !== i);
  }, n = (i, a, o, l = Lp) => {
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
Pp();
var Mp = /* @__PURE__ */ ce('<div><div class="mdc-linear-progress__buffer"><div class="mdc-linear-progress__buffer-bar"></div> <div class="mdc-linear-progress__buffer-dots"></div></div> <div class="mdc-linear-progress__bar mdc-linear-progress__primary-bar"><span class="mdc-linear-progress__bar-inner"></span></div> <div class="mdc-linear-progress__bar mdc-linear-progress__secondary-bar"><span class="mdc-linear-progress__bar-inner"></span></div></div>');
function Dp(e, t) {
  Me(t, !0);
  const [r, n] = Pn();
  let i = R(t, "use", 19, () => []), a = R(t, "class", 3, ""), o = R(t, "style", 3, ""), l = R(t, "indeterminate", 3, !1), s = R(t, "closed", 3, !1), u = R(t, "progress", 3, 0), c = R(t, "buffer", 3, void 0), d = /* @__PURE__ */ St(t, [
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
  ]), v, p = /* @__PURE__ */ ue(void 0), h = ie({}), m = ie({}), E = ie({}), _ = ie({}), C = ie({}), x = ve("SMUI:linear-progress:context"), b = ve("SMUI:linear-progress:closed");
  He(() => {
    b && ta(b, s());
  }), He(() => {
    f(p) && f(p).isDeterminate() !== !l() && f(p).setDeterminate(!l());
  }), He(() => {
    f(p) && f(p).getProgress() !== u() && f(p).setProgress(u());
  }), He(() => {
    f(p) && (c() == null ? f(p).setBuffer(1) : f(p).setBuffer(c()));
  }), He(() => {
    f(p) && (s() ? f(p).close() : f(p).open());
  }), Gt(() => (V(
    p,
    new pp({
      addClass: A,
      forceLayout: () => {
        ee().getBoundingClientRect();
      },
      setBufferBarStyle: j,
      setPrimaryBarStyle: J,
      hasClass: g,
      removeAttribute: D,
      removeClass: y,
      setAttribute: I,
      setStyle: H,
      attachResizeObserver: (S) => {
        const M = window.ResizeObserver;
        if (M) {
          const ge = new M(S);
          return ge.observe(ee()), ge;
        }
        return null;
      },
      getWidth: () => ee().offsetWidth
    }),
    !0
  ), f(p).init(), () => {
    var S;
    (S = f(p)) == null || S.destroy();
  }));
  function g(S) {
    return S in h ? h[S] : ee().classList.contains(S);
  }
  function A(S) {
    h[S] || (h[S] = !0);
  }
  function y(S) {
    (!(S in h) || h[S]) && (h[S] = !1);
  }
  function I(S, M) {
    m[S] !== M && (m[S] = M);
  }
  function D(S) {
    (!(S in m) || m[S] != null) && (m[S] = void 0);
  }
  function H(S, M) {
    E[S] != M && (M === "" || M == null ? delete E[S] : E[S] = M);
  }
  function j(S, M) {
    _[S] != M && (M === "" || M == null ? delete _[S] : _[S] = M);
  }
  function J(S, M) {
    C[S] != M && (M === "" || M == null ? delete C[S] : C[S] = M);
  }
  function ee() {
    return v;
  }
  var Se = { getElement: ee }, B = Mp(), fe = (S) => {
    var M;
    f(p) && f(p).handleTransitionEnd(), (M = t.ontransitionend) == null || M.call(t, S);
  };
  at(
    B,
    (S, M) => ({
      class: S,
      style: M,
      role: "progressbar",
      "aria-valuemin": 0,
      "aria-valuemax": 1,
      "aria-valuenow": l() ? void 0 : u(),
      ...m,
      ...d,
      ontransitionend: fe
    }),
    [
      () => wt({
        "mdc-linear-progress": !0,
        "mdc-linear-progress--indeterminate": l(),
        "mdc-linear-progress--closed": s(),
        "mdc-data-table__linear-progress": x === "data-table",
        ...h,
        [a()]: !0
      }),
      () => Object.entries(E).map(([S, M]) => `${S}: ${M};`).concat([o()]).join(" ")
    ]
  );
  var N = ae(B), G = ae(N), Y = Le(N, 2);
  je(B, (S) => v = S, () => v), it(B, (S, M) => z == null ? void 0 : z(S, M), i), we(
    (S, M) => {
      st(G, S), st(Y, M);
    },
    [
      () => Object.entries(_).map(([S, M]) => `${S}: ${M};`).join(" "),
      () => Object.entries(C).map(([S, M]) => `${S}: ${M};`).join(" ")
    ]
  ), L(e, B);
  var P = De(Se);
  return n(), P;
}
var Bp = /* @__PURE__ */ pt('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor" class="svelte-1mj71p3"><path d="M12 4l-8 8h16l-8-8z"></path></svg>'), Np = /* @__PURE__ */ pt('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor" class="svelte-1mj71p3"><path d="M12 20l8-8H4l8 8z"></path></svg>'), Up = /* @__PURE__ */ ce('<div class="custom-cell-container svelte-1mj71p3"><div class="cell-header svelte-1mj71p3"><span class="header-title svelte-1mj71p3"> </span> <!></div></div>'), kp = (e, t) => t(), Fp = /* @__PURE__ */ ce('<input type="text" class="svelte-1mj71p3"/>'), Gp = (e, t) => t(), jp = /* @__PURE__ */ ce('<input type="number" class="svelte-1mj71p3"/>'), Vp = /* @__PURE__ */ ce("<!> <!>", 1), qp = /* @__PURE__ */ ce("<!> <!>", 1), zp = /* @__PURE__ */ ce('<div class="cell-actions svelte-1mj71p3"></div>'), Xp = /* @__PURE__ */ ce("<!> <!>", 1);
function Wp(e, t) {
  Me(t, !0);
  const r = () => _r(m, "$sortColumn", a), n = () => _r(E, "$sortDirection", a), i = () => _r(h, "$filteredData", a), [a, o] = Pn();
  let l = R(t, "loadingDone", 15, !0), s = R(t, "label", 19, Xv), u = R(t, "columnDefs", 19, () => []), c = R(t, "rowData", 31, () => ie([])), d = R(t, "rowActions", 19, () => []), v = R(t, "searchInputLabel", 3, "Search"), p = ie({ name: "", color: "", number: "" }), h = ht([]), m = ht(null), E = ht(null);
  t.store.store.subscribe((b) => {
    c([...b]), _();
  });
  function _() {
    let b = c().filter((g) => u().every((A) => {
      const y = p[A.field], I = A.filterValueGetter ? A.filterValueGetter(g) : g[A.field];
      return y ? A.filterType === "number" ? I == y : I.toString().toLowerCase().includes(y.toLowerCase()) : !0;
    }));
    b = C(b), h.set(b);
  }
  function C(b) {
    let g, A;
    return m.subscribe((y) => g = y), E.subscribe((y) => A = y), !g || !A ? b : b.sort((y, I) => {
      let D = y[g], H = I[g];
      return D == null && (D = ""), H == null && (H = ""), A === "asc" ? D.toString().localeCompare(H.toString()) : H.toString().localeCompare(D.toString());
    });
  }
  function x(b) {
    m.update((g) => {
      if (g === b)
        E.update((A) => A === "asc" ? "desc" : A === "desc" ? null : "asc");
      else
        return E.set("asc"), b;
      return b;
    }), _();
  }
  h.set(c()), _p(e, {
    get "table$aria-label"() {
      return s();
    },
    style: "max-width: 100%; width: 100%;",
    progress: (g) => {
      Dp(g, {
        indeterminate: !0,
        "aria-label": "Data is being loaded...",
        get closed() {
          return l();
        },
        set closed(A) {
          l(A);
        }
      });
    },
    children: (g, A) => {
      var y = Xp(), I = q(y);
      Ep(I, {
        children: (H, j) => {
          var J = qp(), ee = q(J);
          Vi(ee, {
            class: "header-title-row",
            children: (B, fe) => {
              var N = $(), G = q(N);
              kr(G, 17, u, Fn, (Y, P) => {
                Zn(Y, {
                  onclick: () => f(P).sortable && x(f(P).field),
                  get style() {
                    return f(P).headerStyle;
                  },
                  children: (S, M) => {
                    var ge = Up(), _e = ae(ge), de = ae(_e), X = ae(de), te = Le(de, 2);
                    {
                      var Ie = (Ce) => {
                        var Ve = $(), he = q(Ve);
                        {
                          var ye = (oe) => {
                            var Re = $(), et = q(Re);
                            {
                              var Qe = (Te) => {
                                var w = Bp();
                                L(Te, w);
                              }, mt = (Te) => {
                                var w = $(), O = q(w);
                                {
                                  var U = (Ae) => {
                                    var qt = Np();
                                    L(Ae, qt);
                                  };
                                  se(
                                    O,
                                    (Ae) => {
                                      n() === "desc" && Ae(U);
                                    },
                                    !0
                                  );
                                }
                                L(Te, w);
                              };
                              se(et, (Te) => {
                                n() === "asc" ? Te(Qe) : Te(mt, !1);
                              });
                            }
                            L(oe, Re);
                          };
                          se(he, (oe) => {
                            r() === f(P).field && n() !== null && oe(ye);
                          });
                        }
                        L(Ce, Ve);
                      };
                      se(te, (Ce) => {
                        f(P).sortable && Ce(Ie);
                      });
                    }
                    we(() => {
                      st(ge, `min-width: ${f(P).minWidth ?? 0 ?? ""}`), $t(X, f(P).headerName);
                    }), L(S, ge);
                  },
                  $$slots: { default: !0 }
                });
              }), L(B, N);
            },
            $$slots: { default: !0 }
          });
          var Se = Le(ee, 2);
          Vi(Se, {
            class: "header-filter-row",
            children: (B, fe) => {
              var N = $(), G = q(N);
              kr(G, 17, u, Fn, (Y, P) => {
                Zn(Y, {
                  children: (S, M) => {
                    var ge = $(), _e = q(ge);
                    {
                      var de = (X) => {
                        var te = Vp(), Ie = q(te);
                        {
                          var Ce = (ye) => {
                            var oe = Fp();
                            oe.__input = [kp, _], we(() => er(oe, "placeholder", `${v()} ${f(P).headerName}`)), uo(oe, () => p[f(P).field], (Re) => p[f(P).field] = Re), L(ye, oe);
                          };
                          se(Ie, (ye) => {
                            f(P).filterType === "text" && ye(Ce);
                          });
                        }
                        var Ve = Le(Ie, 2);
                        {
                          var he = (ye) => {
                            var oe = jp();
                            oe.__input = [Gp, _], we(() => er(oe, "placeholder", `${v()} ${f(P).headerName}`)), uo(oe, () => p[f(P).field], (Re) => p[f(P).field] = Re), L(ye, oe);
                          };
                          se(Ve, (ye) => {
                            f(P).filterType === "number" && ye(he);
                          });
                        }
                        L(X, te);
                      };
                      se(_e, (X) => {
                        f(P).filter && X(de);
                      });
                    }
                    L(S, ge);
                  },
                  $$slots: { default: !0 }
                });
              }), L(B, N);
            },
            $$slots: { default: !0 }
          }), L(H, J);
        },
        $$slots: { default: !0 }
      });
      var D = Le(I, 2);
      Sp(D, {
        children: (H, j) => {
          var J = $(), ee = q(J);
          kr(ee, 1, i, Fn, (Se, B) => {
            Vi(Se, {
              children: (fe, N) => {
                var G = $(), Y = q(G);
                kr(Y, 17, u, (P) => P.field, (P, S) => {
                  var M = $(), ge = q(M);
                  {
                    var _e = (X) => {
                      Zn(X, {
                        children: (te, Ie) => {
                          var Ce = zp();
                          kr(Ce, 21, d, Fn, (Ve, he) => {
                            var ye = $(), oe = q(ye);
                            {
                              var Re = (Qe) => {
                                ko(Qe, {
                                  get content() {
                                    return f(he).tooltip;
                                  },
                                  hoverDelay: 500,
                                  children: (mt, Te) => {
                                    {
                                      let w = /* @__PURE__ */ Ee(() => f(he).disabled(f(B)));
                                      kv(mt, {
                                        get iconComponent() {
                                          return f(he).iconComponent;
                                        },
                                        get iconStyles() {
                                          return f(he).iconStyles;
                                        },
                                        callback: () => f(he).callback(f(B)),
                                        get disabled() {
                                          return f(w);
                                        }
                                      });
                                    }
                                  },
                                  $$slots: { default: !0 }
                                });
                              }, et = (Qe) => {
                                ko(Qe, {
                                  get content() {
                                    return f(he).tooltip;
                                  },
                                  hoverDelay: 500,
                                  children: (mt, Te) => {
                                    {
                                      let w = /* @__PURE__ */ Ee(() => f(he).disabled(f(B)));
                                      Mv(mt, {
                                        class: "button",
                                        variant: "raised",
                                        callback: () => f(he).callback(f(B)),
                                        get disabled() {
                                          return f(w);
                                        },
                                        children: (O, U) => {
                                          var Ae = $(), qt = q(Ae);
                                          {
                                            var Nn = (Tr) => {
                                              Yv(Tr, { svgStyles: "margin: unset" });
                                            }, Ii = (Tr) => {
                                              var Ga = $(), Pl = q(Ga);
                                              {
                                                var Ml = (Or) => {
                                                  Jv(Or, { svgStyles: "margin: unset" });
                                                }, Dl = (Or) => {
                                                  var ja = $(), Bl = q(ja);
                                                  {
                                                    var Nl = (Hr) => {
                                                      $v(Hr, { svgStyles: "margin: unset" });
                                                    }, Ul = (Hr) => {
                                                      var Va = $(), kl = q(Va);
                                                      {
                                                        var Fl = (Lr) => {
                                                          tp(Lr, { svgStyles: "margin: unset" });
                                                        }, Gl = (Lr) => {
                                                          var qa = $(), jl = q(qa);
                                                          {
                                                            var Vl = (Pr) => {
                                                              ap(Pr, { svgStyles: "margin: unset" });
                                                            }, ql = (Pr) => {
                                                              var za = $(), zl = q(za);
                                                              {
                                                                var Xl = (Mr) => {
                                                                  sp(Mr, { svgStyles: "margin: unset" });
                                                                }, Wl = (Mr) => {
                                                                  var Xa = $(), Zl = q(Xa);
                                                                  {
                                                                    var Yl = (Dr) => {
                                                                      up(Dr, { svgStyles: "margin: unset" });
                                                                    }, Ql = (Dr) => {
                                                                      np(Dr, { svgStyles: "margin: unset" });
                                                                    };
                                                                    se(
                                                                      Zl,
                                                                      (Dr) => {
                                                                        f(he).icon === "delete" ? Dr(Yl) : Dr(Ql, !1);
                                                                      },
                                                                      !0
                                                                    );
                                                                  }
                                                                  L(Mr, Xa);
                                                                };
                                                                se(
                                                                  zl,
                                                                  (Mr) => {
                                                                    f(he).icon === "edit" ? Mr(Xl) : Mr(Wl, !1);
                                                                  },
                                                                  !0
                                                                );
                                                              }
                                                              L(Pr, za);
                                                            };
                                                            se(
                                                              jl,
                                                              (Pr) => {
                                                                f(he).icon === "remove" ? Pr(Vl) : Pr(ql, !1);
                                                              },
                                                              !0
                                                            );
                                                          }
                                                          L(Lr, qa);
                                                        };
                                                        se(
                                                          kl,
                                                          (Lr) => {
                                                            f(he).icon === "find-in-page" ? Lr(Fl) : Lr(Gl, !1);
                                                          },
                                                          !0
                                                        );
                                                      }
                                                      L(Hr, Va);
                                                    };
                                                    se(
                                                      Bl,
                                                      (Hr) => {
                                                        f(he).icon === "download" ? Hr(Nl) : Hr(Ul, !1);
                                                      },
                                                      !0
                                                    );
                                                  }
                                                  L(Or, ja);
                                                };
                                                se(
                                                  Pl,
                                                  (Or) => {
                                                    f(he).icon === "cancel" ? Or(Ml) : Or(Dl, !1);
                                                  },
                                                  !0
                                                );
                                              }
                                              L(Tr, Ga);
                                            };
                                            se(qt, (Tr) => {
                                              f(he).icon === "add" ? Tr(Nn) : Tr(Ii, !1);
                                            });
                                          }
                                          L(O, Ae);
                                        },
                                        $$slots: { default: !0 }
                                      });
                                    }
                                  },
                                  $$slots: { default: !0 }
                                });
                              };
                              se(oe, (Qe) => {
                                f(he).iconComponent ? Qe(Re) : Qe(et, !1);
                              });
                            }
                            L(Ve, ye);
                          }), L(te, Ce);
                        },
                        $$slots: { default: !0 }
                      });
                    }, de = (X) => {
                      Zn(X, {
                        get numeric() {
                          return f(S).numeric;
                        },
                        get style() {
                          return f(S).cellStyle;
                        },
                        children: (te, Ie) => {
                          var Ce = $(), Ve = q(Ce);
                          {
                            var he = (oe) => {
                              const Re = /* @__PURE__ */ Ee(() => f(S).cellRenderer);
                              var et = $(), Qe = q(et);
                              wi(Qe, () => f(Re), (mt, Te) => {
                                Te(mt, Si(
                                  {
                                    get row() {
                                      return f(B);
                                    },
                                    get value() {
                                      return f(B)[f(S).field];
                                    },
                                    get col() {
                                      return f(S);
                                    }
                                  },
                                  () => f(S).cellRendererProps ?? {}
                                ));
                              }), L(oe, et);
                            }, ye = (oe) => {
                              var Re = $(), et = q(Re);
                              {
                                var Qe = (Te) => {
                                  var w = $i();
                                  we((O) => $t(w, O), [
                                    () => f(S).valueFormatter(f(B)[f(S).field])
                                  ]), L(Te, w);
                                }, mt = (Te) => {
                                  var w = $i();
                                  we(() => $t(w, f(B)[f(S).field] ?? "")), L(Te, w);
                                };
                                se(
                                  et,
                                  (Te) => {
                                    f(S).valueFormatter ? Te(Qe) : Te(mt, !1);
                                  },
                                  !0
                                );
                              }
                              L(oe, Re);
                            };
                            se(Ve, (oe) => {
                              f(S).cellRenderer ? oe(he) : oe(ye, !1);
                            });
                          }
                          L(te, Ce);
                        },
                        $$slots: { default: !0 }
                      });
                    };
                    se(ge, (X) => {
                      f(S).field === "actions" ? X(_e) : X(de, !1);
                    });
                  }
                  L(P, M);
                }), L(fe, G);
              },
              $$slots: { default: !0 }
            });
          }), L(H, J);
        },
        $$slots: { default: !0 }
      }), L(g, y);
    },
    $$slots: { progress: !0, default: !0 }
  }), De(), o();
}
Mt(["input"]);
var Zp = (e, t, r) => {
  var n;
  return (n = t.onChange) == null ? void 0 : n.call(t, t.row, f(r));
}, Yp = /* @__PURE__ */ ce("<option> </option>"), Qp = /* @__PURE__ */ ce(`<div style="min-width: 180px"><select><option>—</option><!></select> <style>select {
      width: 100%;
      min-width: 180px;
    }</style></div>`);
function Jp(e, t) {
  Me(t, !0);
  let r = R(t, "locations", 19, () => []), n = /* @__PURE__ */ ue(ie(t.value ?? ""));
  He(() => {
    V(n, t.value ?? "", !0);
  }), He(() => {
    var s;
    f(n) !== (t.value ?? "") && ((s = t.onChange) == null || s.call(t, t.row, f(n)));
  });
  var i = Qp(), a = ae(i);
  a.__change = [Zp, t, n];
  var o = ae(a);
  o.value = o.__value = "";
  var l = Le(o);
  kr(l, 17, r, (s) => s.value, (s, u) => {
    var c = Yp(), d = ae(c), v = {};
    we(() => {
      $t(d, f(u).label), v !== (v = f(u).value) && (c.value = (c.__value = f(u).value) ?? "");
    }), L(s, c);
  }), wc(a, () => f(n), (s) => V(n, s)), L(e, i), De();
}
Mt(["change"]);
Ad({ en: eh, de: kd });
var Kp = /* @__PURE__ */ ce('<div class="app-container svelte-1lw4l1e"><h3 style="margin-bottom: 1rem;" class="svelte-1lw4l1e"> </h3> <!></div>');
function $p(e, t) {
  Me(t, !0);
  const r = () => _r(Sd, "$_", n), [n, i] = Pn(), a = Gr.getInstance();
  let o = /* @__PURE__ */ ue(ie([])), l = "", s = /* @__PURE__ */ ue(!0);
  Gt(() => {
    setTimeout(
      () => {
        V(s, !1);
      },
      200
    );
  }), Gt(() => {
    a.getLocations().subscribe({
      next: (g) => {
        V(o, g.map((A) => ({ label: A.name, value: A.uuid })), !0);
      }
    }), p();
  });
  const u = new hv();
  function c(g) {
    return new Date(g).toLocaleDateString();
  }
  function d(g) {
    var A;
    return !f(o) || !g ? g || "" : ((A = f(o).find((y) => y.value === g)) == null ? void 0 : A.label) ?? g;
  }
  let v = ie([]);
  function p() {
    const g = h(v);
    a.searchResources(g).pipe(Hh(1), Lh((A) => {
      u.set(A.filter((y) => y.location !== l));
    })).subscribe();
  }
  function h(g) {
    const A = {
      uuid: null,
      type: null,
      name: null,
      location: null,
      author: null,
      from: null,
      to: null
    };
    return console.log("Convert filter to search params: ", g), g.forEach((y) => {
      console.log("KEY:", y.key), y.key === "from" || y.key === "to" ? A[y.key] = new Date(y.value).toISOString() : A[y.key] = y.value;
    }), A;
  }
  function m(g, A) {
    const y = g.location, I = A || null;
    if (y === I)
      return;
    const D = { ...g, location: I };
    u.update(D), (I ? a.assignResourceToLocation(I, g.uuid) : a.unassignResourceFromLocation(y ?? "", g.uuid)).subscribe({
      next: () => {
        p();
      },
      error: () => {
        const j = { ...g, location: y };
        u.update(j);
      }
    });
  }
  let E = /* @__PURE__ */ Ee(() => [
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
      cellRenderer: Jp,
      cellRendererProps: {
        locations: f(o),
        onChange: m
      },
      filterValueGetter: (g) => d(g.location)
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
  He(() => {
  });
  var _ = $(), C = q(_);
  {
    var x = (g) => {
      {
        let A = /* @__PURE__ */ Ee(() => !f(s));
        dp(g, {
          get loadingDone() {
            return f(A);
          }
        });
      }
    }, b = (g) => {
      var A = Kp(), y = ae(A), I = ae(y), D = Le(y, 2);
      {
        let H = /* @__PURE__ */ Ee(() => r()("search"));
        Wp(D, {
          get columnDefs() {
            return f(E);
          },
          get store() {
            return u;
          },
          get searchInputLabel() {
            return f(H);
          }
        });
      }
      we((H) => $t(I, H), [() => r()("search_result")]), L(g, A);
    };
    se(C, (g) => {
      f(s) ? g(x) : g(b, !1);
    });
  }
  L(e, _), De(), i();
}
const Hl = "location-viewer", Ll = "0.0.1";
var em = /* @__PURE__ */ ce('<!> <input type="hidden" name="package-name"/> <input type="hidden" name="package-version"/>', 1);
function tm(e, t) {
  Me(t, !0);
  let r = R(t, "dev", 3, !1);
  var n = em(), i = q(n);
  {
    var a = (s) => {
      $p(s, {});
    };
    se(i, (s) => {
      (t.doc || r()) && s(a);
    });
  }
  var o = Le(i, 2), l = Le(o, 2);
  we(() => {
    so(o, Hl), so(l, Ll);
  }), L(e, n), De();
}
var Qr;
class um extends HTMLElement {
  constructor() {
    super();
    re(this, Qr);
    F(this, Qr, /* @__PURE__ */ ue(ie({ doc: void 0, editCount: void 0 })));
  }
  get props() {
    return f(T(this, Qr));
  }
  set props(r) {
    V(T(this, Qr), r, !0);
  }
  connectedCallback() {
    var n;
    this.attachShadow({ mode: "open" }), this.props.doc = this._doc, this.props.editCount = this.editCount, cc(tm, { target: this.shadowRoot, props: this.props });
    const r = rm();
    (n = this.shadowRoot) == null || n.appendChild(r);
  }
  set doc(r) {
    this._doc = r, this.props.doc = r;
  }
  set editCount(r) {
    this.props.editCount = r;
  }
}
Qr = new WeakMap();
function rm() {
  const e = `${Hl}-v${Ll}-style`, t = nm(), r = document.createElement("link");
  return r.rel = "stylesheet", r.type = "text/css", r.href = t, r.id = e, r;
}
function nm() {
  const e = new URL(import.meta.url), t = e.origin, r = e.pathname.split("/").slice(0, -1).filter(Boolean).join("/");
  return [t, r, "style.css"].filter(Boolean).join("/");
}
export {
  um as default
};
