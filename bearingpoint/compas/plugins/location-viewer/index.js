var Jl = Object.defineProperty;
var Xa = (e) => {
  throw TypeError(e);
};
var Kl = (e, t, r) => t in e ? Jl(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var Dr = (e, t, r) => Kl(e, typeof t != "symbol" ? t + "" : t, r), Ii = (e, t, r) => t.has(e) || Xa("Cannot " + r);
var R = (e, t, r) => (Ii(e, t, "read from private field"), r ? r.call(e) : t.get(e)), te = (e, t, r) => t.has(e) ? Xa("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), F = (e, t, r, n) => (Ii(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r), ke = (e, t, r) => (Ii(e, t, "access private method"), r);
const Oe = Symbol(), $l = "http://www.w3.org/1999/xhtml", eu = "http://www.w3.org/2000/svg", tu = "@attach", Vo = !1;
var di = Array.isArray, ru = Array.prototype.indexOf, va = Array.from, ti = Object.defineProperty, Qt = Object.getOwnPropertyDescriptor, qo = Object.getOwnPropertyDescriptors, nu = Object.prototype, iu = Array.prototype, pa = Object.getPrototypeOf, Wa = Object.isExtensible;
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
const Ye = 2, ma = 4, ga = 8, wr = 16, Gt = 32, Sr = 64, ba = 128, dt = 256, ri = 512, Ge = 1024, ot = 2048, tr = 4096, Et = 8192, Ar = 16384, _a = 32768, xr = 65536, Za = 1 << 17, au = 1 << 18, ln = 1 << 19, ou = 1 << 20, Vi = 1 << 21, hi = 1 << 22, mr = 1 << 23, Lt = Symbol("$state"), Wo = Symbol("legacy props"), su = Symbol(""), kr = new class extends Error {
  constructor() {
    super(...arguments);
    Dr(this, "name", "StaleReactionError");
    Dr(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
function ya(e) {
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
function Ea(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Yo(e) {
  return !Ea(e, this.v);
}
let un = !1, Eu = !1;
function wu() {
  un = !0;
}
let me = null;
function Qr(e) {
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
  return me === null && ya(), me.c ?? (me.c = new Map(Su(me) || void 0));
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
let ur = [];
function Jo() {
  var e = ur;
  ur = [], zo(e);
}
function er(e) {
  if (ur.length === 0 && !yn) {
    var t = ur;
    queueMicrotask(() => {
      t === ur && Jo();
    });
  }
  ur.push(e);
}
function Au() {
  for (; ur.length > 0; )
    Jo();
}
const xu = /* @__PURE__ */ new WeakMap();
function Ko(e) {
  var t = W;
  if (t === null)
    return X.f |= mr, e;
  if (t.f & _a)
    Jr(e, t);
  else {
    if (!(t.f & ba))
      throw !t.parent && e instanceof Error && $o(e), e;
    t.b.error(e);
  }
}
function Jr(e, t) {
  for (; t !== null; ) {
    if (t.f & ba)
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
  t && (ti(e, "message", {
    value: t.message
  }), ti(e, "stack", {
    value: t.stack
  }));
}
const Un = /* @__PURE__ */ new Set();
let le = null, Yn = null, Ne = null, qi = /* @__PURE__ */ new Set(), Ot = [], vi = null, zi = !1, yn = !1;
var qr, zr, fr, In, Xr, Wr, dr, Zr, Rn, Tn, vt, Xi, Qn, Wi;
const ui = class ui {
  constructor() {
    te(this, vt);
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
    te(this, qr, /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<() => void>}
     */
    te(this, zr, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    te(this, fr, 0);
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    te(this, In, null);
    /**
     * Async effects inside a newly-created `<svelte:boundary>`
     * — these do not prevent the batch from committing
     * @type {Effect[]}
     */
    te(this, Xr, []);
    /**
     * Template effects and `$effect.pre` effects, which run when
     * a batch is committed
     * @type {Effect[]}
     */
    te(this, Wr, []);
    /**
     * The same as `#render_effects`, but for `$effect` (which runs after)
     * @type {Effect[]}
     */
    te(this, dr, []);
    /**
     * Block effects, which may need to re-run on subsequent flushes
     * in order to update internal sources (e.g. each block items)
     * @type {Effect[]}
     */
    te(this, Zr, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Effect[]}
     */
    te(this, Rn, []);
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Effect[]}
     */
    te(this, Tn, []);
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
    Ot = [], Yn = null, this.apply();
    for (const o of t)
      ke(this, vt, Xi).call(this, o);
    if (R(this, fr) === 0) {
      var r = Ne;
      ke(this, vt, Wi).call(this);
      var n = R(this, Wr), i = R(this, dr);
      F(this, Wr, []), F(this, dr, []), F(this, Zr, []), Yn = this, le = null, Ne = r, Ya(n), Ya(i), Yn = null, (a = R(this, In)) == null || a.resolve();
    } else
      ke(this, vt, Qn).call(this, R(this, Wr)), ke(this, vt, Qn).call(this, R(this, dr)), ke(this, vt, Qn).call(this, R(this, Zr));
    Ne = null;
    for (const o of R(this, Xr))
      An(o);
    F(this, Xr, []);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Source} source
   * @param {any} value
   */
  capture(t, r) {
    R(this, qr).has(t) || R(this, qr).set(t, r), this.current.set(t, t.v), Ne == null || Ne.set(t, t.v);
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
    } else R(this, fr) === 0 && ke(this, vt, Wi).call(this);
    this.deactivate();
    for (const t of qi)
      if (qi.delete(t), t(), le !== null)
        break;
  }
  increment() {
    F(this, fr, R(this, fr) + 1);
  }
  decrement() {
    F(this, fr, R(this, fr) - 1);
    for (const t of R(this, Rn))
      We(t, ot), yr(t);
    for (const t of R(this, Tn))
      We(t, tr), yr(t);
    this.flush();
  }
  /** @param {() => void} fn */
  add_callback(t) {
    R(this, zr).add(t);
  }
  settled() {
    return (R(this, In) ?? F(this, In, Xo())).promise;
  }
  static ensure() {
    if (le === null) {
      const t = le = new ui();
      Un.add(le), yn || ui.enqueue(() => {
        le === t && t.flush();
      });
    }
    return le;
  }
  /** @param {() => void} task */
  static enqueue(t) {
    er(t);
  }
  apply() {
  }
};
qr = new WeakMap(), zr = new WeakMap(), fr = new WeakMap(), In = new WeakMap(), Xr = new WeakMap(), Wr = new WeakMap(), dr = new WeakMap(), Zr = new WeakMap(), Rn = new WeakMap(), Tn = new WeakMap(), vt = new WeakSet(), /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 */
Xi = function(t) {
  var u;
  t.f ^= Ge;
  for (var r = t.first; r !== null; ) {
    var n = r.f, i = (n & (Gt | Sr)) !== 0, a = i && (n & Ge) !== 0, o = a || (n & Et) !== 0 || this.skipped_effects.has(r);
    if (!o && r.fn !== null) {
      i ? r.f ^= Ge : n & ma ? R(this, dr).push(r) : n & Ge || (n & hi && ((u = r.b) != null && u.is_pending()) ? R(this, Xr).push(r) : yi(r) && (r.f & wr && R(this, Zr).push(r), An(r)));
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
Qn = function(t) {
  for (const r of t)
    (r.f & ot ? R(this, Rn) : R(this, Tn)).push(r), We(r, Ge);
  t.length = 0;
}, /**
 * Append and remove branches to/from the DOM
 */
Wi = function() {
  var t;
  for (const r of R(this, zr))
    r();
  if (R(this, zr).clear(), Un.size > 1) {
    R(this, qr).clear();
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
            ke(t = n, vt, Xi).call(t, o);
          Ot = [], n.deactivate();
        }
      }
    }
    le = null;
  }
  Un.delete(this);
};
let kt = ui;
function Cu(e) {
  var t = yn;
  yn = !0;
  try {
    for (var r; ; ) {
      if (Au(), Ot.length === 0 && (le == null || le.flush(), Ot.length === 0))
        return vi = null, /** @type {T} */
        r;
      es();
    }
  } finally {
    yn = t;
  }
}
function es() {
  var e = Gr;
  zi = !0;
  try {
    var t = 0;
    for ($a(!0); Ot.length > 0; ) {
      var r = kt.ensure();
      if (t++ > 1e3) {
        var n, i;
        Iu();
      }
      r.process(Ot), Jt.clear();
    }
  } finally {
    zi = !1, $a(e), vi = null;
  }
}
function Iu() {
  try {
    du();
  } catch (e) {
    Jr(e, vi);
  }
}
let Nt = null;
function Ya(e) {
  var t = e.length;
  if (t !== 0) {
    for (var r = 0; r < t; ) {
      var n = e[r++];
      if (!(n.f & (Ar | Et)) && yi(n) && (Nt = [], An(n), n.deps === null && n.first === null && n.nodes_start === null && (n.teardown === null && n.ac === null ? ps(n) : n.fn = null), (Nt == null ? void 0 : Nt.length) > 0)) {
        Jt.clear();
        for (const i of Nt)
          An(i);
        Nt = [];
      }
    }
    Nt = null;
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
      ) : n & (hi | wr) && rs(r, t) && (We(r, ot), yr(
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
function yr(e) {
  for (var t = vi = e; t.parent !== null; ) {
    t = t.parent;
    var r = t.f;
    if (zi && t === W && r & wr)
      return;
    if (r & (Sr | Gt)) {
      if (!(r & Ge)) return;
      t.f ^= Ge;
    }
  }
  Ot.push(t);
}
function Ru(e) {
  let t = 0, r = Er(0), n;
  return () => {
    zu() && (f(r), bi(() => (t === 0 && (n = ir(() => e(() => En(r)))), t += 1, () => {
      er(() => {
        t -= 1, t === 0 && (n == null || n(), n = void 0, En(r));
      });
    })));
  };
}
var Tu = xr | ln | ba;
function Ou(e, t, r) {
  new Hu(e, t, r);
}
var bt, ut, ha, It, hr, Rt, ct, Je, Tt, zt, vr, Xt, pr, Wt, ci, fi, Ze, Lu, Pu, Jn, Kn, Zi;
class Hu {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   */
  constructor(t, r, n) {
    te(this, Ze);
    /** @type {Boundary | null} */
    Dr(this, "parent");
    te(this, bt, !1);
    /** @type {TemplateNode} */
    te(this, ut);
    /** @type {TemplateNode | null} */
    te(this, ha, null);
    /** @type {BoundaryProps} */
    te(this, It);
    /** @type {((anchor: Node) => void)} */
    te(this, hr);
    /** @type {Effect} */
    te(this, Rt);
    /** @type {Effect | null} */
    te(this, ct, null);
    /** @type {Effect | null} */
    te(this, Je, null);
    /** @type {Effect | null} */
    te(this, Tt, null);
    /** @type {DocumentFragment | null} */
    te(this, zt, null);
    te(this, vr, 0);
    te(this, Xt, 0);
    te(this, pr, !1);
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    te(this, Wt, null);
    te(this, ci, () => {
      R(this, Wt) && Kr(R(this, Wt), R(this, vr));
    });
    te(this, fi, Ru(() => (F(this, Wt, Er(R(this, vr))), () => {
      F(this, Wt, null);
    })));
    F(this, ut, t), F(this, It, r), F(this, hr, n), this.parent = /** @type {Effect} */
    W.b, F(this, bt, !!R(this, It).pending), F(this, Rt, nr(() => {
      W.b = this;
      {
        try {
          F(this, ct, Fe(() => n(R(this, ut))));
        } catch (i) {
          this.error(i);
        }
        R(this, Xt) > 0 ? ke(this, Ze, Kn).call(this) : F(this, bt, !1);
      }
    }, Tu));
  }
  /**
   * Returns `true` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_pending() {
    return R(this, bt) || !!this.parent && this.parent.is_pending();
  }
  has_pending_snippet() {
    return !!R(this, It).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   */
  update_pending_count(t) {
    ke(this, Ze, Zi).call(this, t), F(this, vr, R(this, vr) + t), qi.add(R(this, ci));
  }
  get_effect_pending() {
    return R(this, fi).call(this), f(
      /** @type {Source<number>} */
      R(this, Wt)
    );
  }
  /** @param {unknown} error */
  error(t) {
    var r = R(this, It).onerror;
    let n = R(this, It).failed;
    if (R(this, pr) || !r && !n)
      throw t;
    R(this, ct) && (Ue(R(this, ct)), F(this, ct, null)), R(this, Je) && (Ue(R(this, Je)), F(this, Je, null)), R(this, Tt) && (Ue(R(this, Tt)), F(this, Tt, null));
    var i = !1, a = !1;
    const o = () => {
      if (i) {
        _u();
        return;
      }
      i = !0, a && gu(), kt.ensure(), F(this, vr, 0), R(this, Tt) !== null && Kt(R(this, Tt), () => {
        F(this, Tt, null);
      }), F(this, bt, this.has_pending_snippet()), F(this, ct, ke(this, Ze, Jn).call(this, () => (F(this, pr, !1), Fe(() => R(this, hr).call(this, R(this, ut)))))), R(this, Xt) > 0 ? ke(this, Ze, Kn).call(this) : F(this, bt, !1);
    };
    var l = X;
    try {
      $e(null), a = !0, r == null || r(t, o), a = !1;
    } catch (s) {
      Jr(s, R(this, Rt) && R(this, Rt).parent);
    } finally {
      $e(l);
    }
    n && er(() => {
      F(this, Tt, ke(this, Ze, Jn).call(this, () => {
        F(this, pr, !0);
        try {
          return Fe(() => {
            n(
              R(this, ut),
              () => t,
              () => o
            );
          });
        } catch (s) {
          return Jr(
            s,
            /** @type {Effect} */
            R(this, Rt).parent
          ), null;
        } finally {
          F(this, pr, !1);
        }
      }));
    });
  }
}
bt = new WeakMap(), ut = new WeakMap(), ha = new WeakMap(), It = new WeakMap(), hr = new WeakMap(), Rt = new WeakMap(), ct = new WeakMap(), Je = new WeakMap(), Tt = new WeakMap(), zt = new WeakMap(), vr = new WeakMap(), Xt = new WeakMap(), pr = new WeakMap(), Wt = new WeakMap(), ci = new WeakMap(), fi = new WeakMap(), Ze = new WeakSet(), Lu = function() {
  try {
    F(this, ct, Fe(() => R(this, hr).call(this, R(this, ut))));
  } catch (t) {
    this.error(t);
  }
  F(this, bt, !1);
}, Pu = function() {
  const t = R(this, It).pending;
  t && (F(this, Je, Fe(() => t(R(this, ut)))), kt.enqueue(() => {
    F(this, ct, ke(this, Ze, Jn).call(this, () => (kt.ensure(), Fe(() => R(this, hr).call(this, R(this, ut)))))), R(this, Xt) > 0 ? ke(this, Ze, Kn).call(this) : (Kt(
      /** @type {Effect} */
      R(this, Je),
      () => {
        F(this, Je, null);
      }
    ), F(this, bt, !1));
  }));
}, /**
 * @param {() => Effect | null} fn
 */
Jn = function(t) {
  var r = W, n = X, i = me;
  Pt(R(this, Rt)), $e(R(this, Rt)), Qr(R(this, Rt).ctx);
  try {
    return t();
  } catch (a) {
    return Ko(a), null;
  } finally {
    Pt(r), $e(n), Qr(i);
  }
}, Kn = function() {
  const t = (
    /** @type {(anchor: Node) => void} */
    R(this, It).pending
  );
  R(this, ct) !== null && (F(this, zt, document.createDocumentFragment()), Mu(R(this, ct), R(this, zt))), R(this, Je) === null && F(this, Je, Fe(() => t(R(this, ut))));
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 */
Zi = function(t) {
  var r;
  if (!this.has_pending_snippet()) {
    this.parent && ke(r = this.parent, Ze, Zi).call(r, t);
    return;
  }
  F(this, Xt, R(this, Xt) + t), R(this, Xt) === 0 && (F(this, bt, !1), R(this, Je) && Kt(R(this, Je), () => {
    F(this, Je, null);
  }), R(this, zt) && (R(this, ut).before(R(this, zt)), F(this, zt, null)), er(() => {
    kt.ensure().flush();
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
  const n = On() ? pi : wa;
  if (t.length === 0) {
    r(e.map(n));
    return;
  }
  var i = le, a = (
    /** @type {Effect} */
    W
  ), o = Du();
  Promise.all(t.map((l) => /* @__PURE__ */ Bu(l))).then((l) => {
    o();
    try {
      r([...e.map(n), ...l]);
    } catch (s) {
      a.f & Ar || Jr(s, a);
    }
    i == null || i.deactivate(), Yi();
  }).catch((l) => {
    Jr(l, a);
  });
}
function Du() {
  var e = W, t = X, r = me, n = le;
  return function() {
    Pt(e), $e(t), Qr(r), n == null || n.activate();
  };
}
function Yi() {
  Pt(null), $e(null), Qr(null);
}
// @__NO_SIDE_EFFECTS__
function pi(e) {
  var t = Ye | ot, r = X !== null && X.f & Ye ? (
    /** @type {Derived} */
    X
  ) : null;
  return W === null || r !== null && r.f & dt ? t |= dt : W.f |= ln, {
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
    parent: r ?? W,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function Bu(e, t) {
  let r = (
    /** @type {Effect | null} */
    W
  );
  r === null && lu();
  var n = (
    /** @type {Boundary} */
    r.b
  ), i = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), a = Er(
    /** @type {V} */
    Oe
  ), o = !X, l = /* @__PURE__ */ new Map();
  return Wu(() => {
    var p;
    var s = Xo();
    i = s.promise;
    try {
      Promise.resolve(e()).then(s.resolve, s.reject).then(Yi);
    } catch (v) {
      s.reject(v), Yi();
    }
    var u = (
      /** @type {Batch} */
      le
    ), c = n.is_pending();
    o && (n.update_pending_count(1), c || (u.increment(), (p = l.get(u)) == null || p.reject(kr), l.delete(u), l.set(u, s)));
    const d = (v, h = void 0) => {
      if (c || u.activate(), h)
        h !== kr && (a.f |= mr, Kr(a, h));
      else {
        a.f & mr && (a.f ^= mr), Kr(a, v);
        for (const [m, E] of l) {
          if (l.delete(m), m === u) break;
          E.reject(kr);
        }
      }
      o && (n.update_pending_count(-1), c || u.decrement());
    };
    s.promise.then(d, (v) => d(null, v || "unknown"));
  }), gi(() => {
    for (const s of l.values())
      s.reject(kr);
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
  const t = /* @__PURE__ */ pi(e);
  return bs(t), t;
}
// @__NO_SIDE_EFFECTS__
function wa(e) {
  const t = /* @__PURE__ */ pi(e);
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
function Sa(e) {
  var t, r = W;
  Pt(Nu(e));
  try {
    is(e), t = ws(e);
  } finally {
    Pt(r);
  }
  return t;
}
function as(e) {
  var t = Sa(e);
  if (e.equals(t) || (e.v = t, e.wv = ys()), !Cr)
    if (Ne !== null)
      Ne.set(e, e.v);
    else {
      var r = (Zt || e.f & dt) && e.deps !== null ? tr : Ge;
      We(e, r);
    }
}
const Jt = /* @__PURE__ */ new Map();
function Er(e, t) {
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
  const r = Er(e);
  return bs(r), r;
}
// @__NO_SIDE_EFFECTS__
function os(e, t = !1, r = !0) {
  var i;
  const n = Er(e);
  return t || (n.equals = Yo), un && r && me !== null && me.l !== null && ((i = me.l).s ?? (i.s = [])).push(n), n;
}
function j(e, t, r = !1) {
  X !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!yt || X.f & Za) && On() && X.f & (Ye | wr | hi | Za) && !(Xe != null && Xe.includes(e)) && mu();
  let n = r ? ie(t) : t;
  return Kr(e, n);
}
function Kr(e, t) {
  if (!e.equals(t)) {
    var r = e.v;
    Cr ? Jt.set(e, t) : Jt.set(e, r), e.v = t;
    var n = kt.ensure();
    n.capture(e, r), e.f & Ye && (e.f & ot && Sa(
      /** @type {Derived} */
      e
    ), We(e, e.f & dt ? tr : Ge)), e.wv = ys(), ss(e, ot), On() && W !== null && W.f & Ge && !(W.f & (Gt | Sr)) && (lt === null ? Qu([e]) : lt.push(e));
  }
  return t;
}
function En(e) {
  j(e, e.v + 1);
}
function ss(e, t) {
  var r = e.reactions;
  if (r !== null)
    for (var n = On(), i = r.length, a = 0; a < i; a++) {
      var o = r[a], l = o.f;
      if (!(!n && o === W)) {
        var s = (l & ot) === 0;
        s && We(o, t), l & Ye ? ss(
          /** @type {Derived} */
          o,
          tr
        ) : s && (l & wr && Nt !== null && Nt.push(
          /** @type {Effect} */
          o
        ), yr(
          /** @type {Effect} */
          o
        ));
      }
    }
}
function ie(e) {
  if (typeof e != "object" || e === null || Lt in e)
    return e;
  const t = pa(e);
  if (t !== nu && t !== iu)
    return e;
  var r = /* @__PURE__ */ new Map(), n = di(e), i = /* @__PURE__ */ ue(0), a = gr, o = (l) => {
    if (gr === a)
      return l();
    var s = X, u = gr;
    $e(null), to(a);
    var c = l();
    return $e(s), to(u), c;
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
        }) : j(c, u.value, !0), !0;
      },
      deleteProperty(l, s) {
        var u = r.get(s);
        if (u === void 0) {
          if (s in l) {
            const c = o(() => /* @__PURE__ */ ue(Oe));
            r.set(s, c), En(i);
          }
        } else
          j(u, Oe), En(i);
        return !0;
      },
      get(l, s, u) {
        var v;
        if (s === Lt)
          return e;
        var c = r.get(s), d = s in l;
        if (c === void 0 && (!d || (v = Qt(l, s)) != null && v.writable) && (c = o(() => {
          var h = ie(d ? l[s] : Oe), m = /* @__PURE__ */ ue(h);
          return m;
        }), r.set(s, c)), c !== void 0) {
          var p = f(c);
          return p === Oe ? void 0 : p;
        }
        return Reflect.get(l, s, u);
      },
      getOwnPropertyDescriptor(l, s) {
        var u = Reflect.getOwnPropertyDescriptor(l, s);
        if (u && "value" in u) {
          var c = r.get(s);
          c && (u.value = f(c));
        } else if (u === void 0) {
          var d = r.get(s), p = d == null ? void 0 : d.v;
          if (d !== void 0 && p !== Oe)
            return {
              enumerable: !0,
              configurable: !0,
              value: p,
              writable: !0
            };
        }
        return u;
      },
      has(l, s) {
        var p;
        if (s === Lt)
          return !0;
        var u = r.get(s), c = u !== void 0 && u.v !== Oe || Reflect.has(l, s);
        if (u !== void 0 || W !== null && (!c || (p = Qt(l, s)) != null && p.writable)) {
          u === void 0 && (u = o(() => {
            var v = c ? ie(l[s]) : Oe, h = /* @__PURE__ */ ue(v);
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
        var d = r.get(s), p = s in l;
        if (n && s === "length")
          for (var v = u; v < /** @type {Source<number>} */
          d.v; v += 1) {
            var h = r.get(v + "");
            h !== void 0 ? j(h, Oe) : v in l && (h = o(() => /* @__PURE__ */ ue(Oe)), r.set(v + "", h));
          }
        if (d === void 0)
          (!p || (x = Qt(l, s)) != null && x.writable) && (d = o(() => /* @__PURE__ */ ue(void 0)), j(d, ie(u)), r.set(s, d));
        else {
          p = d.v !== Oe;
          var m = o(() => ie(u));
          j(d, m);
        }
        var E = Reflect.getOwnPropertyDescriptor(l, s);
        if (E != null && E.set && E.set.call(c, u), !p) {
          if (n && typeof s == "string") {
            var y = (
              /** @type {Source<number>} */
              r.get("length")
            ), C = Number(s);
            Number.isInteger(C) && C >= y.v && j(y, C + 1);
          }
          En(i);
        }
        return !0;
      },
      ownKeys(l) {
        f(i);
        var s = Reflect.ownKeys(l).filter((d) => {
          var p = r.get(d);
          return p === void 0 || p.v !== Oe;
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
function Qa(e) {
  try {
    if (e !== null && typeof e == "object" && Lt in e)
      return e[Lt];
  } catch {
  }
  return e;
}
function Uu(e, t) {
  return Object.is(Qa(e), Qa(t));
}
var Ja, ls, us, cs;
function ku() {
  if (Ja === void 0) {
    Ja = window, ls = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, r = Text.prototype;
    us = Qt(t, "firstChild").get, cs = Qt(t, "nextSibling").get, Wa(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), Wa(r) && (r.__t = void 0);
  }
}
function rr(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function $r(e) {
  return us.call(e);
}
// @__NO_SIDE_EFFECTS__
function Hn(e) {
  return cs.call(e);
}
function ae(e, t) {
  return /* @__PURE__ */ $r(e);
}
function V(e, t = !1) {
  {
    var r = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ $r(
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
function Aa() {
  return !1;
}
function Gu(e, t) {
  if (t) {
    const r = document.body;
    e.autofocus = !0, er(() => {
      document.activeElement === r && e.focus();
    });
  }
}
let Ka = !1;
function ju() {
  Ka || (Ka = !0, document.addEventListener(
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
function mi(e) {
  var t = X, r = W;
  $e(null), Pt(null);
  try {
    return e();
  } finally {
    $e(t), Pt(r);
  }
}
function fs(e, t, r, n = r) {
  e.addEventListener(t, () => mi(r));
  const i = e.__on_r;
  i ? e.__on_r = () => {
    i(), n(!0);
  } : e.__on_r = () => n(!0), ju();
}
function Vu(e) {
  W === null && X === null && fu(), X !== null && X.f & dt && W === null && cu(), Cr && uu();
}
function qu(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function jt(e, t, r, n = !0) {
  var i = W;
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
      An(a), a.f |= _a;
    } catch (s) {
      throw Ue(a), s;
    }
  else t !== null && yr(a);
  if (n) {
    var o = a;
    if (r && o.deps === null && o.teardown === null && o.nodes_start === null && o.first === o.last && // either `null`, or a singular child
    !(o.f & ln) && (o = o.first), o !== null && (o.parent = i, i !== null && qu(o, i), X !== null && X.f & Ye && !(e & Sr))) {
      var l = (
        /** @type {Derived} */
        X
      );
      (l.effects ?? (l.effects = [])).push(o);
    }
  }
  return a;
}
function zu() {
  return X !== null && !yt;
}
function gi(e) {
  const t = jt(ga, null, !1);
  return We(t, Ge), t.teardown = e, t;
}
function He(e) {
  Vu();
  var t = (
    /** @type {Effect} */
    W.f
  ), r = !X && (t & Gt) !== 0 && (t & _a) === 0;
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
  return jt(ma | ou, e, !1);
}
function Xu(e) {
  kt.ensure();
  const t = jt(Sr | ln, e, !0);
  return (r = {}) => new Promise((n) => {
    r.outro ? Kt(t, () => {
      Ue(t), n(void 0);
    }) : (Ue(t), n(void 0));
  });
}
function Ln(e) {
  return jt(ma, e, !1);
}
function Wu(e) {
  return jt(hi | ln, e, !0);
}
function bi(e, t = 0) {
  return jt(ga | t, e, !0);
}
function we(e, t = [], r = []) {
  ns(t, r, (n) => {
    jt(ga, () => e(...n.map(f)), !0);
  });
}
function nr(e, t = 0) {
  var r = jt(wr | t, e, !0);
  return r;
}
function Fe(e, t = !0) {
  return jt(Gt | ln, e, !0, t);
}
function hs(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = Cr, n = X;
    eo(!0), $e(null);
    try {
      t.call(null);
    } finally {
      eo(r), $e(n);
    }
  }
}
function vs(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    const i = r.ac;
    i !== null && mi(() => {
      i.abort(kr);
    });
    var n = r.next;
    r.f & Sr ? r.parent = null : Ue(r, t), r = n;
  }
}
function Zu(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    t.f & Gt || Ue(t), t = r;
  }
}
function Ue(e, t = !0) {
  var r = !1;
  (t || e.f & au) && e.nodes_start !== null && e.nodes_end !== null && (Yu(
    e.nodes_start,
    /** @type {TemplateNode} */
    e.nodes_end
  ), r = !0), vs(e, t && !r), ni(e, 0), We(e, Ar);
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
  xa(e, r, !0), ms(r, () => {
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
function xa(e, t, r) {
  if (!(e.f & Et)) {
    if (e.f ^= Et, e.transitions !== null)
      for (const o of e.transitions)
        (o.is_global || r) && t.push(o);
    for (var n = e.first; n !== null; ) {
      var i = n.next, a = (n.f & xr) !== 0 || (n.f & Gt) !== 0;
      xa(n, t, a ? r : !1), n = i;
    }
  }
}
function _i(e) {
  gs(e, !0);
}
function gs(e, t) {
  if (e.f & Et) {
    e.f ^= Et, e.f & Ge || (We(e, ot), yr(e));
    for (var r = e.first; r !== null; ) {
      var n = r.next, i = (r.f & xr) !== 0 || (r.f & Gt) !== 0;
      gs(r, i ? t : !1), r = n;
    }
    if (e.transitions !== null)
      for (const a of e.transitions)
        (a.is_global || t) && a.in();
  }
}
let Gr = !1;
function $a(e) {
  Gr = e;
}
let Cr = !1;
function eo(e) {
  Cr = e;
}
let X = null, yt = !1;
function $e(e) {
  X = e;
}
let W = null;
function Pt(e) {
  W = e;
}
let Xe = null;
function bs(e) {
  X !== null && (Xe === null ? Xe = [e] : Xe.push(e));
}
let ze = null, rt = 0, lt = null;
function Qu(e) {
  lt = e;
}
let _s = 1, Sn = 0, gr = Sn;
function to(e) {
  gr = e;
}
let Zt = !1;
function ys() {
  return ++_s;
}
function yi(e) {
  var d;
  var t = e.f;
  if (t & ot)
    return !0;
  if (t & tr) {
    var r = e.deps, n = (t & dt) !== 0;
    if (r !== null) {
      var i, a, o = (t & ri) !== 0, l = n && W !== null && !Zt, s = r.length;
      if ((o || l) && (W === null || !(W.f & Ar))) {
        var u = (
          /** @type {Derived} */
          e
        ), c = u.parent;
        for (i = 0; i < s; i++)
          a = r[i], (o || !((d = a == null ? void 0 : a.reactions) != null && d.includes(u))) && (a.reactions ?? (a.reactions = [])).push(u);
        o && (u.f ^= ri), l && c !== null && !(c.f & dt) && (u.f ^= dt);
      }
      for (i = 0; i < s; i++)
        if (a = r[i], yi(
          /** @type {Derived} */
          a
        ) && as(
          /** @type {Derived} */
          a
        ), a.wv > e.wv)
          return !0;
    }
    (!n || W !== null && !Zt) && We(e, Ge);
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
      ) : t === a && (r ? We(a, ot) : a.f & Ge && We(a, tr), yr(
        /** @type {Effect} */
        a
      ));
    }
}
function ws(e) {
  var m;
  var t = ze, r = rt, n = lt, i = X, a = Zt, o = Xe, l = me, s = yt, u = gr, c = e.f;
  ze = /** @type {null | Value[]} */
  null, rt = 0, lt = null, Zt = (c & dt) !== 0 && (yt || !Gr || X === null), X = c & (Gt | Sr) ? null : e, Xe = null, Qr(e.ctx), yt = !1, gr = ++Sn, e.ac !== null && (mi(() => {
    e.ac.abort(kr);
  }), e.ac = null);
  try {
    e.f |= Vi;
    var d = (
      /** @type {Function} */
      e.fn
    ), p = d(), v = e.deps;
    if (ze !== null) {
      var h;
      if (ni(e, rt), v !== null && rt > 0)
        for (v.length = rt + ze.length, h = 0; h < ze.length; h++)
          v[rt + h] = ze[h];
      else
        e.deps = v = ze;
      if (!Zt || // Deriveds that already have reactions can cleanup, so we still add them as reactions
      c & Ye && /** @type {import('#client').Derived} */
      e.reactions !== null)
        for (h = rt; h < v.length; h++)
          ((m = v[h]).reactions ?? (m.reactions = [])).push(e);
    } else v !== null && rt < v.length && (ni(e, rt), v.length = rt);
    if (On() && lt !== null && !yt && v !== null && !(e.f & (Ye | tr | ot)))
      for (h = 0; h < /** @type {Source[]} */
      lt.length; h++)
        Es(
          lt[h],
          /** @type {Effect} */
          e
        );
    return i !== null && i !== e && (Sn++, lt !== null && (n === null ? n = lt : n.push(.../** @type {Source[]} */
    lt))), e.f & mr && (e.f ^= mr), p;
  } catch (E) {
    return Ko(E);
  } finally {
    e.f ^= Vi, ze = t, rt = r, lt = n, X = i, Zt = a, Xe = o, Qr(l), yt = s, gr = u;
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
  (ze === null || !ze.includes(t)) && (We(t, tr), t.f & (dt | ri) || (t.f ^= ri), is(
    /** @type {Derived} **/
    t
  ), ni(
    /** @type {Derived} **/
    t,
    0
  ));
}
function ni(e, t) {
  var r = e.deps;
  if (r !== null)
    for (var n = t; n < r.length; n++)
      Ju(e, r[n]);
}
function An(e) {
  var t = e.f;
  if (!(t & Ar)) {
    We(e, Ge);
    var r = W, n = Gr;
    W = e, Gr = !0;
    try {
      t & wr ? Zu(e) : vs(e), hs(e);
      var i = ws(e);
      e.teardown = typeof i == "function" ? i : null, e.wv = _s;
      var a;
      Vo && Eu && e.f & ot && e.deps;
    } finally {
      Gr = n, W = r;
    }
  }
}
async function Ku() {
  await Promise.resolve(), Cu();
}
function f(e) {
  var t = e.f, r = (t & Ye) !== 0;
  if (X !== null && !yt) {
    var n = W !== null && (W.f & Ar) !== 0;
    if (!n && !(Xe != null && Xe.includes(e))) {
      var i = X.deps;
      if (X.f & Vi)
        e.rv < Sn && (e.rv = Sn, ze === null && i !== null && i[rt] === e ? rt++ : ze === null ? ze = [e] : (!Zt || !ze.includes(e)) && ze.push(e));
      else {
        (X.deps ?? (X.deps = [])).push(e);
        var a = e.reactions;
        a === null ? e.reactions = [X] : a.includes(X) || a.push(X);
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
  if (Cr) {
    if (Jt.has(e))
      return Jt.get(e);
    if (r) {
      o = /** @type {Derived} */
      e;
      var s = o.v;
      return (!(o.f & Ge) && o.reactions !== null || Ss(o)) && (s = Sa(o)), Jt.set(o, s), s;
    }
  } else if (r) {
    if (o = /** @type {Derived} */
    e, Ne != null && Ne.has(o))
      return Ne.get(o);
    yi(o) && as(o);
  }
  if (Ne != null && Ne.has(e))
    return Ne.get(e);
  if (e.f & mr)
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
function ir(e) {
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
      Qi(e);
    else if (!Array.isArray(e))
      for (let t in e) {
        const r = e[t];
        typeof r == "object" && r && Lt in r && Qi(r);
      }
  }
}
function Qi(e, t = /* @__PURE__ */ new Set()) {
  if (typeof e == "object" && e !== null && // We don't want to traverse DOM elements
  !(e instanceof EventTarget) && !t.has(e)) {
    t.add(e), e instanceof Date && e.getTime();
    for (let n in e)
      try {
        Qi(e[n], t);
      } catch {
      }
    const r = pa(e);
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
const As = /* @__PURE__ */ new Set(), Ji = /* @__PURE__ */ new Set();
function Ca(e, t, r, n = {}) {
  function i(a) {
    if (n.capture || bn.call(t, a), !a.cancelBubble)
      return mi(() => r == null ? void 0 : r.call(this, a));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? er(() => {
    t.addEventListener(e, i, n);
  }) : t.addEventListener(e, i, n), i;
}
function tc(e, t, r, n = {}) {
  var i = Ca(t, e, r, n);
  return () => {
    e.removeEventListener(t, i, n);
  };
}
function ro(e, t, r, n, i) {
  var a = { capture: n, passive: i }, o = Ca(e, t, r, a);
  (t === document.body || // @ts-ignore
  t === window || // @ts-ignore
  t === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  t instanceof HTMLMediaElement) && gi(() => {
    t.removeEventListener(e, o, a);
  });
}
function Vt(e) {
  for (var t = 0; t < e.length; t++)
    As.add(e[t]);
  for (var r of Ji)
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
    ti(e, "currentTarget", {
      configurable: !0,
      get() {
        return a || r;
      }
    });
    var c = X, d = W;
    $e(null), Pt(null);
    try {
      for (var p, v = []; a !== null; ) {
        var h = a.assignedSlot || a.parentNode || /** @type {any} */
        a.host || null;
        try {
          var m = a["__" + n];
          if (m != null && (!/** @type {any} */
          a.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === a))
            if (di(m)) {
              var [E, ...y] = m;
              E.apply(a, [e, ...y]);
            } else
              m.call(a, e);
        } catch (x) {
          p ? v.push(x) : p = x;
        }
        if (e.cancelBubble || h === t || h === null)
          break;
        a = h;
      }
      if (p) {
        for (let x of v)
          queueMicrotask(() => {
            throw x;
          });
        throw p;
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
function en(e, t) {
  var r = (
    /** @type {Effect} */
    W
  );
  r.nodes_start === null && (r.nodes_start = e, r.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function ce(e, t) {
  var r = (t & 1) !== 0, n = (t & 2) !== 0, i, a = !e.startsWith("<!>");
  return () => {
    i === void 0 && (i = xs(a ? e : "<!>" + e), r || (i = /** @type {Node} */
    /* @__PURE__ */ $r(i)));
    var o = (
      /** @type {TemplateNode} */
      n || ls ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (r) {
      var l = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ $r(o)
      ), s = (
        /** @type {TemplateNode} */
        o.lastChild
      );
      en(l, s);
    } else
      en(o, o);
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
        /* @__PURE__ */ $r(o)
      );
      a = /** @type {Element} */
      /* @__PURE__ */ $r(l);
    }
    var s = (
      /** @type {TemplateNode} */
      a.cloneNode(!0)
    );
    return en(s, s), s;
  };
}
// @__NO_SIDE_EFFECTS__
function pt(e, t) {
  return /* @__PURE__ */ rc(e, t, "svg");
}
function Ki(e = "") {
  {
    var t = rr(e + "");
    return en(t, t), t;
  }
}
function K() {
  var e = document.createDocumentFragment(), t = document.createComment(""), r = rr();
  return e.append(t, r), en(t, r), e;
}
function O(e, t) {
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
const Br = /* @__PURE__ */ new Map();
function fc(e, { target: t, anchor: r, props: n = {}, events: i, context: a, intro: o = !0 }) {
  ku();
  var l = /* @__PURE__ */ new Set(), s = (d) => {
    for (var p = 0; p < d.length; p++) {
      var v = d[p];
      if (!l.has(v)) {
        l.add(v);
        var h = uc(v);
        t.addEventListener(v, bn, { passive: h });
        var m = Br.get(v);
        m === void 0 ? (document.addEventListener(v, bn, { passive: h }), Br.set(v, 1)) : Br.set(v, m + 1);
      }
    }
  };
  s(va(As)), Ji.add(s);
  var u = void 0, c = Xu(() => {
    var d = r ?? t.appendChild(rr());
    return Ou(
      /** @type {TemplateNode} */
      d,
      {
        pending: () => {
        }
      },
      (p) => {
        if (a) {
          Me({});
          var v = (
            /** @type {ComponentContext} */
            me
          );
          v.c = a;
        }
        i && (n.$$events = i), u = e(p, n) || {}, a && De();
      }
    ), () => {
      var h;
      for (var p of l) {
        t.removeEventListener(p, bn);
        var v = (
          /** @type {number} */
          Br.get(p)
        );
        --v === 0 ? (document.removeEventListener(p, bn), Br.delete(p)) : Br.set(p, v);
      }
      Ji.delete(s), d !== r && ((h = d.parentNode) == null || h.removeChild(d));
    };
  });
  return dc.set(u, c), u;
}
let dc = /* @__PURE__ */ new WeakMap();
function Pe(e, t, ...r) {
  var n = e, i = pe, a;
  nr(() => {
    i !== (i = t()) && (a && (Ue(a), a = null), a = Fe(() => (
      /** @type {SnippetFn} */
      i(n, ...r)
    )));
  }, xr);
}
function Ft(e) {
  me === null && ya(), un && me.l !== null ? hc(me).m.push(e) : He(() => {
    const t = ir(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function Ia(e) {
  me === null && ya(), Ft(() => () => ir(e));
}
function hc(e) {
  var t = (
    /** @type {ComponentContextLegacy} */
    e.l
  );
  return t.u ?? (t.u = { a: [], b: [], m: [] });
}
function se(e, t, r = !1) {
  var n = e, i = null, a = null, o = Oe, l = r ? xr : 0, s = !1;
  const u = (v, h = !0) => {
    s = !0, p(h, v);
  };
  var c = null;
  function d() {
    c !== null && (c.lastChild.remove(), n.before(c), c = null);
    var v = o ? i : a, h = o ? a : i;
    v && _i(v), h && Kt(h, () => {
      o ? a = null : i = null;
    });
  }
  const p = (v, h) => {
    if (o !== (o = v)) {
      var m = Aa(), E = n;
      if (m && (c = document.createDocumentFragment(), c.append(E = rr())), o ? i ?? (i = h && Fe(() => h(E))) : a ?? (a = h && Fe(() => h(E))), m) {
        var y = (
          /** @type {Batch} */
          le
        ), C = o ? i : a, x = o ? a : i;
        C && y.skipped_effects.delete(C), x && y.skipped_effects.add(x), y.add_callback(d);
      } else
        d();
    }
  };
  nr(() => {
    s = !1, t(u), s || p(null, null);
  }, l);
}
function kn(e, t) {
  return t;
}
function vc(e, t, r) {
  for (var n = e.items, i = [], a = t.length, o = 0; o < a; o++)
    xa(t[o].e, i, !0);
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
function Ur(e, t, r, n, i, a = null) {
  var o = e, l = { flags: t, items: /* @__PURE__ */ new Map(), first: null }, s = (t & 4) !== 0;
  if (s) {
    var u = (
      /** @type {Element} */
      e
    );
    o = u.appendChild(rr());
  }
  var c = null, d = !1, p = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ wa(() => {
    var y = r();
    return di(y) ? y : y == null ? [] : va(y);
  }), h, m;
  function E() {
    pc(
      m,
      h,
      l,
      p,
      o,
      i,
      t,
      n,
      r
    ), a !== null && (h.length === 0 ? c ? _i(c) : c = Fe(() => a(o)) : c !== null && Kt(c, () => {
      c = null;
    }));
  }
  nr(() => {
    m ?? (m = /** @type {Effect} */
    W), h = /** @type {V[]} */
    f(v);
    var y = h.length;
    if (!(d && y === 0)) {
      d = y === 0;
      var C, x, g, b;
      if (Aa()) {
        var A = /* @__PURE__ */ new Set(), _ = (
          /** @type {Batch} */
          le
        );
        for (x = 0; x < y; x += 1) {
          g = h[x], b = n(g, x);
          var H = l.items.get(b) ?? p.get(b);
          H ? t & 3 && Cs(H, g, x, t) : (C = Is(
            null,
            l,
            null,
            null,
            g,
            b,
            x,
            i,
            t,
            r,
            !0
          ), p.set(b, C)), A.add(b);
        }
        for (const [B, P] of l.items)
          A.has(B) || _.skipped_effects.add(P.e);
        _.add_callback(E);
      } else
        E();
      f(v);
    }
  });
}
function pc(e, t, r, n, i, a, o, l, s) {
  var Z, L, S, M;
  var u = (o & 8) !== 0, c = (o & 3) !== 0, d = t.length, p = r.items, v = r.first, h = v, m, E = null, y, C = [], x = [], g, b, A, _;
  if (u)
    for (_ = 0; _ < d; _ += 1)
      g = t[_], b = l(g, _), A = p.get(b), A !== void 0 && ((Z = A.a) == null || Z.measure(), (y ?? (y = /* @__PURE__ */ new Set())).add(A));
  for (_ = 0; _ < d; _ += 1) {
    if (g = t[_], b = l(g, _), A = p.get(b), A === void 0) {
      var H = n.get(b);
      if (H !== void 0) {
        n.delete(b), p.set(b, H);
        var B = E ? E.next : h;
        Ct(r, E, H), Ct(r, H, B), Ri(H, B, i), E = H;
      } else {
        var P = h ? (
          /** @type {TemplateNode} */
          h.e.nodes_start
        ) : i;
        E = Is(
          P,
          r,
          E,
          E === null ? r.first : E.next,
          g,
          b,
          _,
          a,
          o,
          s
        );
      }
      p.set(b, E), C = [], x = [], h = E.next;
      continue;
    }
    if (c && Cs(A, g, _, o), A.e.f & Et && (_i(A.e), u && ((L = A.a) == null || L.unfix(), (y ?? (y = /* @__PURE__ */ new Set())).delete(A))), A !== h) {
      if (m !== void 0 && m.has(A)) {
        if (C.length < x.length) {
          var Q = x[0], re;
          E = Q.prev;
          var $ = C[0], Se = C[C.length - 1];
          for (re = 0; re < C.length; re += 1)
            Ri(C[re], Q, i);
          for (re = 0; re < x.length; re += 1)
            m.delete(x[re]);
          Ct(r, $.prev, Se.next), Ct(r, E, $), Ct(r, Se, Q), h = Q, E = Se, _ -= 1, C = [], x = [];
        } else
          m.delete(A), Ri(A, h, i), Ct(r, A.prev, A.next), Ct(r, A, E === null ? r.first : E.next), Ct(r, E, A), E = A;
        continue;
      }
      for (C = [], x = []; h !== null && h.k !== b; )
        h.e.f & Et || (m ?? (m = /* @__PURE__ */ new Set())).add(h), x.push(h), h = h.next;
      if (h === null)
        continue;
      A = h;
    }
    C.push(A), E = A, h = A.next;
  }
  if (h !== null || m !== void 0) {
    for (var D = m === void 0 ? [] : va(m); h !== null; )
      h.e.f & Et || D.push(h), h = h.next;
    var fe = D.length;
    if (fe > 0) {
      var N = o & 4 && d === 0 ? i : null;
      if (u) {
        for (_ = 0; _ < fe; _ += 1)
          (S = D[_].a) == null || S.measure();
        for (_ = 0; _ < fe; _ += 1)
          (M = D[_].a) == null || M.fix();
      }
      vc(r, D, N);
    }
  }
  u && er(() => {
    var ge;
    if (y !== void 0)
      for (A of y)
        (ge = A.a) == null || ge.apply();
  }), e.first = r.first && r.first.e, e.last = E && E.e;
  for (var G of n.values())
    Ue(G.e);
  n.clear();
}
function Cs(e, t, r, n) {
  n & 1 && Kr(e.v, t), n & 2 ? Kr(
    /** @type {Value<number>} */
    e.i,
    r
  ) : e.i = r;
}
function Is(e, t, r, n, i, a, o, l, s, u, c) {
  var d = (s & 1) !== 0, p = (s & 16) === 0, v = d ? p ? /* @__PURE__ */ os(i, !1, !1) : Er(i) : i, h = s & 2 ? Er(o) : o, m = {
    i: h,
    v,
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
    return m.e = Fe(() => l(
      /** @type {Node} */
      e,
      v,
      h,
      u
    ), yu), m.e.prev = r && r.e, m.e.next = n && n.e, r === null ? c || (t.first = m) : (r.next = m, r.e.next = m.e), n !== null && (n.prev = m, n.e.prev = m.e), m;
  } finally {
  }
}
function Ri(e, t, r) {
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
function Ei(e, t, r) {
  var n = e, i, a, o = null, l = null;
  function s() {
    a && (Kt(a), a = null), o && (o.lastChild.remove(), n.before(o), o = null), a = l, l = null;
  }
  nr(() => {
    if (i !== (i = t())) {
      var u = Aa();
      if (i) {
        var c = n;
        u && (o = document.createDocumentFragment(), o.append(c = rr()), a && le.skipped_effects.add(a)), l = Fe(() => r(c, i));
      }
      u ? le.add_callback(s) : s();
    }
  }, xr);
}
function io(e, t, r, n, i, a) {
  var o, l, s = null, u = (
    /** @type {TemplateNode} */
    e
  ), c;
  nr(() => {
    const d = t() || null;
    var p = d === "svg" ? eu : null;
    d !== o && (c && (d === null ? Kt(c, () => {
      c = null, l = null;
    }) : d === l ? _i(c) : Ue(c)), d && d !== l && (c = Fe(() => {
      if (s = p ? document.createElementNS(p, d) : document.createElement(d), en(s, s), n) {
        var v = (
          /** @type {TemplateNode} */
          s.appendChild(rr())
        );
        n(s, v);
      }
      W.nodes_end = s, u.before(s);
    })), o = d, o && (l = o));
  }, xr);
}
function it(e, t, r) {
  Ln(() => {
    var n = ir(() => t(e, r == null ? void 0 : r()) || {});
    if (r && (n != null && n.update)) {
      var i = !1, a = (
        /** @type {any} */
        {}
      );
      bi(() => {
        var o = r();
        ec(o), i && Ea(a, o) && (a = o, n.update(o));
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
  nr(() => {
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
function Ti(e) {
  return e[0] !== "-" || e[1] !== "-" ? e.toLowerCase() : e;
}
function yc(e, t) {
  if (t) {
    var r = "", n, i;
    if (Array.isArray(t) ? (n = t[0], i = t[1]) : n = t, e) {
      e = String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var a = !1, o = 0, l = !1, s = [];
      n && s.push(...Object.keys(n).map(Ti)), i && s.push(...Object.keys(i).map(Ti));
      var u = 0, c = -1;
      const m = e.length;
      for (var d = 0; d < m; d++) {
        var p = e[d];
        if (l ? p === "/" && e[d - 1] === "*" && (l = !1) : a ? a === p && (a = !1) : p === "/" && e[d + 1] === "*" ? l = !0 : p === '"' || p === "'" ? a = p : p === "(" ? o++ : p === ")" && o--, !l && a === !1 && o === 0) {
          if (p === ":" && c === -1)
            c = d;
          else if (p === ";" || d === m - 1) {
            if (c !== -1) {
              var v = Ti(e.substring(u, c).trim());
              if (!s.includes(v)) {
                p !== ";" && d++;
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
function Oi(e, t = {}, r, n) {
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
  } else n && (Array.isArray(n) ? (Oi(e, r == null ? void 0 : r[0], n[0]), Oi(e, r == null ? void 0 : r[1], n[1], "important")) : Oi(e, r, n));
  return n;
}
function ii(e, t, r = !1) {
  if (e.multiple) {
    if (t == null)
      return;
    if (!di(t))
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
    ii(e, e.__value);
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
  }), gi(() => {
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
    if (ii(e, i, n), n && i === void 0) {
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
  var r = Ra(e);
  r.value === (r.value = // treat null and undefined the same for the initial value
  t ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  e.value === t && (t !== 0 || e.nodeName !== "PROGRESS") || (e.value = t ?? "");
}
function Sc(e, t) {
  t ? e.hasAttribute("selected") || e.setAttribute("selected", "") : e.removeAttribute("selected");
}
function tn(e, t, r, n) {
  var i = Ra(e);
  i[t] !== (i[t] = r) && (t === "loading" && (e[su] = r), r == null ? e.removeAttribute(t) : typeof r != "string" && Ls(e).includes(t) ? e[t] = r : e.setAttribute(t, r));
}
function Ac(e, t, r, n, i = !1, a = !1) {
  var o = Ra(e), l = o[Os], s = !o[Hs], u = t || {}, c = e.tagName === "OPTION";
  for (var d in t)
    d in r || (r[d] = null);
  r.class ? r.class = bc(r.class) : r[vn] && (r.class = null), r[pn] && (r.style ?? (r.style = null));
  var p = Ls(e);
  for (const x in r) {
    let g = r[x];
    if (c && x === "value" && g == null) {
      e.value = e.__value = "", u[x] = g;
      continue;
    }
    if (x === "class") {
      var v = e.namespaceURI === "http://www.w3.org/1999/xhtml";
      Ec(e, v, g, n, t == null ? void 0 : t[vn], r[vn]), u[x] = g, u[vn] = r[vn];
      continue;
    }
    if (x === "style") {
      st(e, g, t == null ? void 0 : t[pn], r[pn]), u[x] = g, u[pn] = r[pn];
      continue;
    }
    var h = u[x];
    if (!(g === h && !(g === void 0 && e.hasAttribute(x)))) {
      u[x] = g;
      var m = x[0] + x[1];
      if (m !== "$$")
        if (m === "on") {
          const b = {}, A = "$$" + x;
          let _ = x.slice(2);
          var E = ac(_);
          if (nc(_) && (_ = _.slice(0, -7), b.capture = !0), !E && h) {
            if (g != null) continue;
            e.removeEventListener(_, u[A], b), u[A] = null;
          }
          if (g != null)
            if (E)
              e[`__${_}`] = g, Vt([_]);
            else {
              let H = function(B) {
                u[x].call(this, B);
              };
              u[A] = Ca(_, e, H, b);
            }
          else E && (e[`__${_}`] = void 0);
        } else if (x === "style")
          tn(e, x, g);
        else if (x === "autofocus")
          Gu(
            /** @type {HTMLElement} */
            e,
            !!g
          );
        else if (!l && (x === "__value" || x === "value" && g != null))
          e.value = e.__value = g;
        else if (x === "selected" && c)
          Sc(
            /** @type {HTMLOptionElement} */
            e,
            g
          );
        else {
          var y = x;
          s || (y = sc(y));
          var C = y === "defaultValue" || y === "defaultChecked";
          if (g == null && !l && !C)
            if (o[x] = null, y === "value" || y === "checked") {
              let b = (
                /** @type {HTMLInputElement} */
                e
              );
              const A = t === void 0;
              if (y === "value") {
                let _ = b.defaultValue;
                b.removeAttribute(y), b.defaultValue = _, b.value = b.__value = A ? _ : null;
              } else {
                let _ = b.defaultChecked;
                b.removeAttribute(y), b.defaultChecked = _, b.checked = A ? _ : !1;
              }
            } else
              e.removeAttribute(x);
          else C || p.includes(y) && (l || typeof g != "string") ? (e[y] = g, y in o && (o[y] = Oe)) : typeof g != "function" && tn(e, y, g);
        }
    }
  }
  return u;
}
function at(e, t, r = [], n = [], i, a = !1, o = !1) {
  ns(r, n, (l) => {
    var s = void 0, u = {}, c = e.nodeName === "SELECT", d = !1;
    if (nr(() => {
      var v = t(...l.map(f)), h = Ac(
        e,
        s,
        v,
        i,
        a,
        o
      );
      d && c && "value" in v && ii(
        /** @type {HTMLSelectElement} */
        e,
        v.value
      );
      for (let E of Object.getOwnPropertySymbols(u))
        v[E] || Ue(u[E]);
      for (let E of Object.getOwnPropertySymbols(v)) {
        var m = v[E];
        E.description === tu && (!s || m !== s[E]) && (u[E] && Ue(u[E]), u[E] = Fe(() => mc(e, () => m))), h[E] = m;
      }
      s = h;
    }), c) {
      var p = (
        /** @type {HTMLSelectElement} */
        e
      );
      Ln(() => {
        ii(
          p,
          /** @type {Record<string | symbol, any>} */
          s.value,
          !0
        ), Ts(p);
      });
    }
    d = !0;
  });
}
function Ra(e) {
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
    i = pa(i);
  }
  return r;
}
function uo(e, t, r = t) {
  var n = /* @__PURE__ */ new WeakSet();
  fs(e, "input", async (i) => {
    var a = i ? e.defaultValue : e.value;
    if (a = Hi(e) ? Li(a) : a, r(a), le !== null && n.add(le), await Ku(), a !== (a = t())) {
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
  ir(t) == null && e.value && (r(Hi(e) ? Li(e.value) : e.value), le !== null && n.add(le)), bi(() => {
    var i = t();
    if (e === document.activeElement) {
      var a = (
        /** @type {Batch} */
        Yn ?? le
      );
      if (n.has(a))
        return;
    }
    Hi(e) && i === Li(e.value) || e.type === "date" && !i && !e.value || i !== e.value && (e.value = i ?? "");
  });
}
function Hi(e) {
  var t = e.type;
  return t === "number" || t === "range";
}
function Li(e) {
  return e === "" ? null : +e;
}
function co(e, t) {
  return e === t || (e == null ? void 0 : e[Lt]) === t;
}
function je(e = {}, t, r, n) {
  return Ln(() => {
    var i, a;
    return bi(() => {
      i = a, a = [], ir(() => {
        e !== r(...a) && (t(e, ...a), i && co(r(...i), e) && t(null, ...i));
      });
    }), () => {
      er(() => {
        a && co(r(...a), e) && t(null, ...a);
      });
    };
  }), e;
}
function Ta(e, t, r) {
  if (e == null)
    return t(void 0), r && r(void 0), pe;
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
function xc(e, t) {
  return {
    subscribe: ht(e, t).subscribe
  };
}
function ht(e, t = pe) {
  let r = null;
  const n = /* @__PURE__ */ new Set();
  function i(l) {
    if (Ea(e, l) && (e = l, r)) {
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
    const p = () => {
      if (c)
        return;
      d();
      const h = t(n ? u[0] : u, o, l);
      a ? o(h) : d = typeof h == "function" ? h : pe;
    }, v = i.map(
      (h, m) => Ta(
        h,
        (E) => {
          u[m] = E, c &= ~(1 << m), s && p();
        },
        () => {
          c |= 1 << m;
        }
      )
    );
    return s = !0, p(), function() {
      zo(v), d(), s = !1;
    };
  });
}
function Ps(e) {
  let t;
  return Ta(e, (r) => t = r)(), t;
}
let Fn = !1, $i = Symbol();
function br(e, t, r) {
  const n = r[t] ?? (r[t] = {
    store: null,
    source: /* @__PURE__ */ os(void 0),
    unsubscribe: pe
  });
  if (n.store !== e && !($i in r))
    if (n.unsubscribe(), n.store = e ?? null, e == null)
      n.source.v = void 0, n.unsubscribe = pe;
    else {
      var i = !0;
      n.unsubscribe = Ta(e, (a) => {
        i ? n.source.v = a : j(n.source, a);
      }), i = !1;
    }
  return e && $i in r ? Ps(e) : f(n.source);
}
function ea(e, t) {
  return e.set(t), t;
}
function Pn() {
  const e = {};
  function t() {
    gi(() => {
      for (var r in e)
        e[r].unsubscribe();
      ti(e, $i, {
        enumerable: !1,
        value: !0
      });
    });
  }
  return [e, t];
}
function Cc(e) {
  var t = Fn;
  try {
    return Fn = !1, [e(), Fn];
  } finally {
    Fn = t;
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
function wi(...e) {
  return new Proxy({ props: e }, Rc);
}
function I(e, t, r, n) {
  var x;
  var i = !un || (r & 2) !== 0, a = (r & 8) !== 0, o = (r & 16) !== 0, l = (
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
    var d = Lt in e || Wo in e;
    c = ((x = Qt(e, t)) == null ? void 0 : x.set) ?? (d && t in e ? (g) => e[t] = g : void 0);
  }
  var p, v = !1;
  a ? [p, v] = Cc(() => (
    /** @type {V} */
    e[t]
  )) : p = /** @type {V} */
  e[t], p === void 0 && n !== void 0 && (p = u(), c && (i && hu(), c(p)));
  var h;
  if (i ? h = () => {
    var g = (
      /** @type {V} */
      e[t]
    );
    return g === void 0 ? u() : (s = !0, g);
  } : h = () => {
    var g = (
      /** @type {V} */
      e[t]
    );
    return g !== void 0 && (l = /** @type {V} */
    void 0), g === void 0 ? l : g;
  }, i && !(r & 4))
    return h;
  if (c) {
    var m = e.$$legacy;
    return (
      /** @type {() => V} */
      function(g, b) {
        return arguments.length > 0 ? ((!i || !b || m || v) && c(b ? h() : g), g) : h();
      }
    );
  }
  var E = !1, y = (r & 1 ? pi : wa)(() => (E = !1, h()));
  a && f(y);
  var C = (
    /** @type {Effect} */
    W
  );
  return (
    /** @type {() => V} */
    function(g, b) {
      if (arguments.length > 0) {
        const A = b ? f(y) : i && a ? ie(g) : g;
        return j(y, A), E = !0, l !== void 0 && (l = A), g;
      }
      return Cr && E || C.f & Ar ? y.v : f(y);
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
var ta = function(e, t) {
  return ta = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, n) {
    r.__proto__ = n;
  } || function(r, n) {
    for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (r[i] = n[i]);
  }, ta(e, t);
};
function At(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  ta(e, t);
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
function Oa(e, t) {
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
function ra(e, t) {
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
function jr(e, t, r) {
  if (r || arguments.length === 2) for (var n = 0, i = t.length, a; n < i; n++)
    (a || !(n in t)) && (a || (a = Array.prototype.slice.call(t, 0, n)), a[n] = t[n]);
  return e.concat(a || Array.prototype.slice.call(t));
}
function Vr(e) {
  return this instanceof Vr ? (this.v = e, this) : new Vr(e);
}
function Wc(e, t, r) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var n = r.apply(e, t || []), i, a = [];
  return i = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype), l("next"), l("throw"), l("return", o), i[Symbol.asyncIterator] = function() {
    return this;
  }, i;
  function o(v) {
    return function(h) {
      return Promise.resolve(h).then(v, d);
    };
  }
  function l(v, h) {
    n[v] && (i[v] = function(m) {
      return new Promise(function(E, y) {
        a.push([v, m, E, y]) > 1 || s(v, m);
      });
    }, h && (i[v] = h(i[v])));
  }
  function s(v, h) {
    try {
      u(n[v](h));
    } catch (m) {
      p(a[0][3], m);
    }
  }
  function u(v) {
    v.value instanceof Vr ? Promise.resolve(v.value.v).then(c, d) : p(a[0][2], v);
  }
  function c(v) {
    s("next", v);
  }
  function d(v) {
    s("throw", v);
  }
  function p(v, h) {
    v(h), a.shift(), a.length && s(a[0][0], a[0][1]);
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
function Pi(e, t) {
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
}, Mi = {
  variadic: Kc
}, Y;
(function(e) {
  e[e.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", e[e.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", e[e.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", e[e.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", e[e.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", e[e.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", e[e.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", e[e.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", e[e.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", e[e.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", e[e.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", e[e.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", e[e.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", e[e.INVALID_TAG = 23] = "INVALID_TAG", e[e.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", e[e.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", e[e.UNCLOSED_TAG = 27] = "UNCLOSED_TAG";
})(Y || (Y = {}));
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
function na(e) {
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
  for (var t = e.split(sf).filter(function(p) {
    return p.length > 0;
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
        i.options[0].replace(cf, function(s, u, c, d, p, v) {
          if (u)
            t.minimumIntegerDigits = c.length;
          else {
            if (d && p)
              throw new Error("We currently do not support maximum integer digits");
            if (v)
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
      i.stem.replace(vo, function(s, u, c, d, p, v) {
        return c === "*" ? t.minimumFractionDigits = u.length : d && d[0] === "#" ? t.maximumFractionDigits = d.length : p && v ? (t.minimumFractionDigits = p.length, t.maximumFractionDigits = p.length + v.length) : (t.minimumFractionDigits = u.length, t.maximumFractionDigits = u.length), "";
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
var Gn = {
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
  var i = Gn[n || ""] || Gn[r || ""] || Gn["".concat(r, "-001")] || Gn["001"];
  return i[0];
}
var Di, pf = new RegExp("^".concat(zs.source, "*")), mf = new RegExp("".concat(zs.source, "*$"));
function J(e, t) {
  return { start: e, end: t };
}
var gf = !!String.prototype.startsWith && "_a".startsWith("a", 1), bf = !!String.fromCodePoint, _f = !!Object.fromEntries, yf = !!String.prototype.codePointAt, Ef = !!String.prototype.trimStart, wf = !!String.prototype.trimEnd, Sf = !!Number.isSafeInteger, Af = Sf ? Number.isSafeInteger : function(e) {
  return typeof e == "number" && isFinite(e) && Math.floor(e) === e && Math.abs(e) <= 9007199254740991;
}, ia = !0;
try {
  var xf = Qs("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  ia = ((Di = xf.exec("a")) === null || Di === void 0 ? void 0 : Di[0]) === "a";
} catch {
  ia = !1;
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
), aa = bf ? String.fromCodePoint : (
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
var oa;
if (ia) {
  var _o = Qs("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  oa = function(t, r) {
    var n;
    _o.lastIndex = r;
    var i = _o.exec(t);
    return (n = i[1]) !== null && n !== void 0 ? n : "";
  };
} else
  oa = function(t, r) {
    for (var n = []; ; ) {
      var i = Ys(t, r);
      if (i === void 0 || Js(i) || Hf(i))
        break;
      n.push(i), r += i >= 65536 ? 2 : 1;
    }
    return aa.apply(void 0, n);
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
              location: J(l, this.clonePosition())
            });
          } else if (a === 60 && !this.ignoreTag && this.peek() === 47) {
            if (n)
              break;
            return this.error(Y.UNMATCHED_CLOSING_TAG, J(this.clonePosition(), this.clonePosition()));
          } else if (a === 60 && !this.ignoreTag && sa(this.peek() || 0)) {
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
            location: J(n, this.clonePosition())
          },
          err: null
        };
      if (this.bumpIf(">")) {
        var a = this.parseMessage(t + 1, r, !0);
        if (a.err)
          return a;
        var o = a.val, l = this.clonePosition();
        if (this.bumpIf("</")) {
          if (this.isEOF() || !sa(this.char()))
            return this.error(Y.INVALID_TAG, J(l, this.clonePosition()));
          var s = this.clonePosition(), u = this.parseTagName();
          return i !== u ? this.error(Y.UNMATCHED_CLOSING_TAG, J(s, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
            val: {
              type: be.tag,
              value: i,
              children: o,
              location: J(n, this.clonePosition())
            },
            err: null
          } : this.error(Y.INVALID_TAG, J(l, this.clonePosition())));
        } else
          return this.error(Y.UNCLOSED_TAG, J(n, this.clonePosition()));
      } else
        return this.error(Y.INVALID_TAG, J(n, this.clonePosition()));
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
      var s = J(n, this.clonePosition());
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
      return aa.apply(void 0, r);
    }, e.prototype.tryParseUnquoted = function(t, r) {
      if (this.isEOF())
        return null;
      var n = this.char();
      return n === 60 || n === 123 || n === 35 && (r === "plural" || r === "selectordinal") || n === 125 && t > 0 ? null : (this.bump(), aa(n));
    }, e.prototype.parseArgument = function(t, r) {
      var n = this.clonePosition();
      if (this.bump(), this.bumpSpace(), this.isEOF())
        return this.error(Y.EXPECT_ARGUMENT_CLOSING_BRACE, J(n, this.clonePosition()));
      if (this.char() === 125)
        return this.bump(), this.error(Y.EMPTY_ARGUMENT, J(n, this.clonePosition()));
      var i = this.parseIdentifierIfPossible().value;
      if (!i)
        return this.error(Y.MALFORMED_ARGUMENT, J(n, this.clonePosition()));
      if (this.bumpSpace(), this.isEOF())
        return this.error(Y.EXPECT_ARGUMENT_CLOSING_BRACE, J(n, this.clonePosition()));
      switch (this.char()) {
        case 125:
          return this.bump(), {
            val: {
              type: be.argument,
              // value does not include the opening and closing braces.
              value: i,
              location: J(n, this.clonePosition())
            },
            err: null
          };
        case 44:
          return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(Y.EXPECT_ARGUMENT_CLOSING_BRACE, J(n, this.clonePosition())) : this.parseArgumentOptions(t, r, i, n);
        default:
          return this.error(Y.MALFORMED_ARGUMENT, J(n, this.clonePosition()));
      }
    }, e.prototype.parseIdentifierIfPossible = function() {
      var t = this.clonePosition(), r = this.offset(), n = oa(this.message, r), i = r + n.length;
      this.bumpTo(i);
      var a = this.clonePosition(), o = J(t, a);
      return { value: n, location: o };
    }, e.prototype.parseArgumentOptions = function(t, r, n, i) {
      var a, o = this.clonePosition(), l = this.parseIdentifierIfPossible().value, s = this.clonePosition();
      switch (l) {
        case "":
          return this.error(Y.EXPECT_ARGUMENT_TYPE, J(o, s));
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
            var p = If(d.val);
            if (p.length === 0)
              return this.error(Y.EXPECT_ARGUMENT_STYLE, J(this.clonePosition(), this.clonePosition()));
            var v = J(c, this.clonePosition());
            u = { style: p, styleLocation: v };
          }
          var h = this.tryParseArgumentClose(i);
          if (h.err)
            return h;
          var m = J(i, this.clonePosition());
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
                return this.error(Y.EXPECT_DATE_TIME_SKELETON, m);
              var y = E;
              this.locale && (y = hf(E, this.locale));
              var p = {
                type: nn.dateTime,
                pattern: y,
                location: u.styleLocation,
                parsedOptions: this.shouldParseSkeletons ? of(y) : {}
              }, C = l === "date" ? be.date : be.time;
              return {
                val: { type: C, value: n, location: m, style: p },
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
            return this.error(Y.EXPECT_SELECT_ARGUMENT_OPTIONS, J(x, k({}, x)));
          this.bumpSpace();
          var g = this.parseIdentifierIfPossible(), b = 0;
          if (l !== "select" && g.value === "offset") {
            if (!this.bumpIf(":"))
              return this.error(Y.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, J(this.clonePosition(), this.clonePosition()));
            this.bumpSpace();
            var d = this.tryParseDecimalInteger(Y.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, Y.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);
            if (d.err)
              return d;
            this.bumpSpace(), g = this.parseIdentifierIfPossible(), b = d.val;
          }
          var A = this.tryParsePluralOrSelectOptions(t, l, r, g);
          if (A.err)
            return A;
          var h = this.tryParseArgumentClose(i);
          if (h.err)
            return h;
          var _ = J(i, this.clonePosition());
          return l === "select" ? {
            val: {
              type: be.select,
              value: n,
              options: bo(A.val),
              location: _
            },
            err: null
          } : {
            val: {
              type: be.plural,
              value: n,
              options: bo(A.val),
              offset: b,
              pluralType: l === "plural" ? "cardinal" : "ordinal",
              location: _
            },
            err: null
          };
        }
        default:
          return this.error(Y.INVALID_ARGUMENT_TYPE, J(o, s));
      }
    }, e.prototype.tryParseArgumentClose = function(t) {
      return this.isEOF() || this.char() !== 125 ? this.error(Y.EXPECT_ARGUMENT_CLOSING_BRACE, J(t, this.clonePosition())) : (this.bump(), { val: !0, err: null });
    }, e.prototype.parseSimpleArgStyleIfPossible = function() {
      for (var t = 0, r = this.clonePosition(); !this.isEOF(); ) {
        var n = this.char();
        switch (n) {
          case 39: {
            this.bump();
            var i = this.clonePosition();
            if (!this.bumpUntil("'"))
              return this.error(Y.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, J(i, this.clonePosition()));
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
        return this.error(Y.INVALID_NUMBER_SKELETON, r);
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
            var p = this.tryParseDecimalInteger(Y.EXPECT_PLURAL_ARGUMENT_SELECTOR, Y.INVALID_PLURAL_ARGUMENT_SELECTOR);
            if (p.err)
              return p;
            c = J(d, this.clonePosition()), u = this.message.slice(d.offset, this.offset());
          } else
            break;
        }
        if (s.has(u))
          return this.error(r === "select" ? Y.DUPLICATE_SELECT_ARGUMENT_SELECTOR : Y.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, c);
        u === "other" && (o = !0), this.bumpSpace();
        var v = this.clonePosition();
        if (!this.bumpIf("{"))
          return this.error(r === "select" ? Y.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : Y.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, J(this.clonePosition(), this.clonePosition()));
        var h = this.parseMessage(t + 1, r, n);
        if (h.err)
          return h;
        var m = this.tryParseArgumentClose(v);
        if (m.err)
          return m;
        l.push([
          u,
          {
            value: h.val,
            location: J(v, this.clonePosition())
          }
        ]), s.add(u), this.bumpSpace(), a = this.parseIdentifierIfPossible(), u = a.value, c = a.location;
      }
      return l.length === 0 ? this.error(r === "select" ? Y.EXPECT_SELECT_ARGUMENT_SELECTOR : Y.EXPECT_PLURAL_ARGUMENT_SELECTOR, J(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !o ? this.error(Y.MISSING_OTHER_CLAUSE, J(this.clonePosition(), this.clonePosition())) : { val: l, err: null };
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
      var s = J(i, this.clonePosition());
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
function sa(e) {
  return e >= 97 && e <= 122 || e >= 65 && e <= 90;
}
function Tf(e) {
  return sa(e) || e === 47;
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
function la(e) {
  e.forEach(function(t) {
    if (delete t.location, Gs(t) || js(t))
      for (var r in t.options)
        delete t.options[r].location, la(t.options[r].value);
    else Us(t) && qs(t.style) || (ks(t) || Fs(t)) && na(t.style) ? delete t.style.location : Vs(t) && la(t.children);
  });
}
function Lf(e, t) {
  t === void 0 && (t = {}), t = k({ shouldParseSkeletons: !0, requiresOtherClause: !0 }, t);
  var r = new Rf(e, t).parse();
  if (r.err) {
    var n = SyntaxError(Y[r.err.kind]);
    throw n.location = r.err.location, n.originalMessage = r.err.message, n;
  }
  return t != null && t.captureLocation || la(r.val), r.val;
}
var an;
(function(e) {
  e.MISSING_VALUE = "MISSING_VALUE", e.INVALID_VALUE = "INVALID_VALUE", e.MISSING_INTL_API = "MISSING_INTL_API";
})(an || (an = {}));
var Si = (
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
  }(Si)
), Pf = (
  /** @class */
  function(e) {
    At(t, e);
    function t(r, n, i) {
      return e.call(this, 'Value for "'.concat(r, '" must be of type ').concat(n), an.INVALID_VALUE, i) || this;
    }
    return t;
  }(Si)
), Mf = (
  /** @class */
  function(e) {
    At(t, e);
    function t(r, n) {
      return e.call(this, 'The intl string context variable "'.concat(r, '" was not provided to the string "').concat(n, '"'), an.MISSING_VALUE, n) || this;
    }
    return t;
  }(Si)
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
function $n(e, t, r, n, i, a, o) {
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
    var p = i[d];
    if (rf(c)) {
      (!p || typeof p == "string" || typeof p == "number") && (p = typeof p == "string" || typeof p == "number" ? String(p) : ""), l.push({
        type: typeof p == "string" ? qe.literal : qe.object,
        value: p
      });
      continue;
    }
    if (ks(c)) {
      var v = typeof c.style == "string" ? n.date[c.style] : na(c.style) ? c.style.parsedOptions : void 0;
      l.push({
        type: qe.literal,
        value: r.getDateTimeFormat(t, v).format(p)
      });
      continue;
    }
    if (Fs(c)) {
      var v = typeof c.style == "string" ? n.time[c.style] : na(c.style) ? c.style.parsedOptions : n.time.medium;
      l.push({
        type: qe.literal,
        value: r.getDateTimeFormat(t, v).format(p)
      });
      continue;
    }
    if (Us(c)) {
      var v = typeof c.style == "string" ? n.number[c.style] : qs(c.style) ? c.style.parsedOptions : void 0;
      v && v.scale && (p = p * (v.scale || 1)), l.push({
        type: qe.literal,
        value: r.getNumberFormat(t, v).format(p)
      });
      continue;
    }
    if (Vs(c)) {
      var h = c.children, m = c.value, E = i[m];
      if (!Bf(E))
        throw new Pf(m, "function", o);
      var y = $n(h, t, r, n, i, a), C = E(y.map(function(b) {
        return b.value;
      }));
      Array.isArray(C) || (C = [C]), l.push.apply(l, C.map(function(b) {
        return {
          type: typeof b == "string" ? qe.literal : qe.object,
          value: b
        };
      }));
    }
    if (Gs(c)) {
      var x = c.options[p] || c.options.other;
      if (!x)
        throw new yo(c.value, p, Object.keys(c.options), o);
      l.push.apply(l, $n(x.value, t, r, n, i));
      continue;
    }
    if (js(c)) {
      var x = c.options["=".concat(p)];
      if (!x) {
        if (!Intl.PluralRules)
          throw new Si(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`, an.MISSING_INTL_API, o);
        var g = r.getPluralRules(t, { type: c.pluralType }).select(p - (c.offset || 0));
        x = c.options[g] || c.options.other;
      }
      if (!x)
        throw new yo(c.value, p, Object.keys(c.options), o);
      l.push.apply(l, $n(x.value, t, r, n, i, p - (c.offset || 0)));
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
function Bi(e) {
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
    getNumberFormat: Pi(function() {
      for (var t, r = [], n = 0; n < arguments.length; n++)
        r[n] = arguments[n];
      return new ((t = Intl.NumberFormat).bind.apply(t, jr([void 0], r, !1)))();
    }, {
      cache: Bi(e.number),
      strategy: Mi.variadic
    }),
    getDateTimeFormat: Pi(function() {
      for (var t, r = [], n = 0; n < arguments.length; n++)
        r[n] = arguments[n];
      return new ((t = Intl.DateTimeFormat).bind.apply(t, jr([void 0], r, !1)))();
    }, {
      cache: Bi(e.dateTime),
      strategy: Mi.variadic
    }),
    getPluralRules: Pi(function() {
      for (var t, r = [], n = 0; n < arguments.length; n++)
        r[n] = arguments[n];
      return new ((t = Intl.PluralRules).bind.apply(t, jr([void 0], r, !1)))();
    }, {
      cache: Bi(e.pluralRules),
      strategy: Mi.variadic
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
        var c = u.reduce(function(d, p) {
          return !d.length || p.type !== qe.literal || typeof d[d.length - 1] != "string" ? d.push(p.value) : d[d.length - 1] += p.value, d;
        }, []);
        return c.length <= 1 ? c[0] || "" : c;
      }, this.formatToParts = function(s) {
        return $n(a.ast, a.locales, a.formatters, a.formats, s, void 0, a.message);
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
let Ha;
const Mn = ht({});
function jf(e) {
  return Ha[e] || null;
}
function el(e) {
  return e in Ha;
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
Mn.subscribe((e) => Ha = e);
const ei = {};
function zf(e, t) {
  ei[e].delete(t), ei[e].size === 0 && delete ei[e];
}
function rl(e) {
  return ei[e];
}
function Xf(e) {
  return Dn(e).map((t) => {
    const r = rl(t);
    return [t, r ? [...r] : []];
  }).filter(([, t]) => t.length > 0);
}
function ai(e) {
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
  if (!ai(e))
    return e in mn ? mn[e] : Promise.resolve();
  const t = Xf(e);
  return mn[e] = Promise.all(
    t.map(
      ([r, n]) => Wf(r, n)
    )
  ).then(() => {
    if (ai(e))
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
    ).join('", "')}".${ai(ar()) ? `

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
  )), Object.assign(_n, n, { initialLocale: i }), r && ("number" in r && Object.assign(_n.formats.number, r.number), "date" in r && Object.assign(_n.formats.date, r.date), "time" in r && Object.assign(_n.formats.time, r.time)), Ir.set(i);
}
const Ni = ht(!1);
var td = Object.defineProperty, rd = Object.defineProperties, nd = Object.getOwnPropertyDescriptors, wo = Object.getOwnPropertySymbols, id = Object.prototype.hasOwnProperty, ad = Object.prototype.propertyIsEnumerable, So = (e, t, r) => t in e ? td(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, od = (e, t) => {
  for (var r in t || (t = {}))
    id.call(t, r) && So(e, r, t[r]);
  if (wo)
    for (var r of wo(t))
      ad.call(t, r) && So(e, r, t[r]);
  return e;
}, sd = (e, t) => rd(e, nd(t));
let ua;
const oi = ht(null);
function Ao(e) {
  return e.split("-").map((t, r, n) => n.slice(0, r + 1).join("-")).reverse();
}
function Dn(e, t = on().fallbackLocale) {
  const r = Ao(e);
  return t ? [.../* @__PURE__ */ new Set([...r, ...Ao(t)])] : r;
}
function ar() {
  return ua ?? void 0;
}
oi.subscribe((e) => {
  ua = e ?? void 0, typeof window < "u" && e != null && document.documentElement.setAttribute("lang", e);
});
const ld = (e) => {
  if (e && qf(e) && ai(e)) {
    const { loadingDelay: t } = on();
    let r;
    return typeof window < "u" && ar() != null && t ? r = window.setTimeout(
      () => Ni.set(!0),
      t
    ) : Ni.set(!0), nl(e).then(() => {
      oi.set(e);
    }).finally(() => {
      clearTimeout(r), Ni.set(!1);
    });
  }
  return oi.set(e);
}, Ir = sd(od({}, oi), {
  set: ld
}), ud = () => typeof window > "u" ? null : window.navigator.language || window.navigator.languages[0], Ai = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => {
    const i = JSON.stringify(n);
    return i in t ? t[i] : t[i] = e(n);
  };
};
var cd = Object.defineProperty, si = Object.getOwnPropertySymbols, il = Object.prototype.hasOwnProperty, al = Object.prototype.propertyIsEnumerable, xo = (e, t, r) => t in e ? cd(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, La = (e, t) => {
  for (var r in t || (t = {}))
    il.call(t, r) && xo(e, r, t[r]);
  if (si)
    for (var r of si(t))
      al.call(t, r) && xo(e, r, t[r]);
  return e;
}, fn = (e, t) => {
  var r = {};
  for (var n in e)
    il.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && si)
    for (var n of si(e))
      t.indexOf(n) < 0 && al.call(e, n) && (r[n] = e[n]);
  return r;
};
const Cn = (e, t) => {
  const { formats: r } = on();
  if (e in r && t in r[e])
    return r[e][t];
  throw new Error(`[svelte-i18n] Unknown "${t}" ${e} format.`);
}, fd = Ai(
  (e) => {
    var t = e, { locale: r, format: n } = t, i = fn(t, ["locale", "format"]);
    if (r == null)
      throw new Error('[svelte-i18n] A "locale" must be set to format numbers');
    return n && (i = Cn("number", n)), new Intl.NumberFormat(r, i);
  }
), dd = Ai(
  (e) => {
    var t = e, { locale: r, format: n } = t, i = fn(t, ["locale", "format"]);
    if (r == null)
      throw new Error('[svelte-i18n] A "locale" must be set to format dates');
    return n ? i = Cn("date", n) : Object.keys(i).length === 0 && (i = Cn("date", "short")), new Intl.DateTimeFormat(r, i);
  }
), hd = Ai(
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
    locale: r = ar()
  } = t, n = fn(t, [
    "locale"
  ]);
  return fd(La({ locale: r }, n));
}, pd = (e = {}) => {
  var t = e, {
    locale: r = ar()
  } = t, n = fn(t, [
    "locale"
  ]);
  return dd(La({ locale: r }, n));
}, md = (e = {}) => {
  var t = e, {
    locale: r = ar()
  } = t, n = fn(t, [
    "locale"
  ]);
  return hd(La({ locale: r }, n));
}, gd = Ai(
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  (e, t = ar()) => new Ks(e, t, on().formats, {
    ignoreTag: on().ignoreTag
  })
), bd = (e, t = {}) => {
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
  } catch (p) {
    p instanceof Error && console.warn(
      `[svelte-i18n] Message "${e}" has syntax error:`,
      p.message
    );
  }
  return d;
}, _d = (e, t) => md(t).format(e), yd = (e, t) => pd(t).format(e), Ed = (e, t) => vd(t).format(e), wd = (e, t = ar()) => $s(e, t), Sd = cn([Ir, Mn], () => bd);
cn([Ir], () => _d);
cn([Ir], () => yd);
cn([Ir], () => Ed);
cn([Ir, Mn], () => wd);
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
    console.log("Updating the language to", o.detail.language), Ir.set(o.detail.language);
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
var Ui = ol(function(e) {
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
var Pa = function() {
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
          a = m instanceof Ui ? m.errors : [m];
        }
      var d = this._finalizers;
      if (d) {
        this._finalizers = null;
        try {
          for (var p = Ht(d), v = p.next(); !v.done; v = p.next()) {
            var h = v.value;
            try {
              Io(h);
            } catch (m) {
              a = a ?? [], m instanceof Ui ? a = jr(jr([], ra(a)), ra(m.errors)) : a.push(m);
            }
          }
        } catch (m) {
          n = { error: m };
        } finally {
          try {
            v && !v.done && (i = p.return) && i.call(p);
          } finally {
            if (n) throw n.error;
          }
        }
      }
      if (a)
        throw new Ui(a);
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
Pa.EMPTY;
function sl(e) {
  return e instanceof Pa || e && "closed" in e && xe(e.remove) && xe(e.add) && xe(e.unsubscribe);
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
    return setTimeout.apply(void 0, jr([e, t], ra(r)));
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
var Ma = function(e) {
  At(t, e);
  function t(r) {
    var n = e.call(this) || this;
    return n.isStopped = !1, r ? (n.destination = r, sl(r) && r.add(n)) : n.destination = oh, n;
  }
  return t.create = function(r, n, i) {
    return new ca(r, n, i);
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
}(Pa), ih = function() {
  function e(t) {
    this.partialObserver = t;
  }
  return e.prototype.next = function(t) {
    var r = this.partialObserver;
    if (r.next)
      try {
        r.next(t);
      } catch (n) {
        jn(n);
      }
  }, e.prototype.error = function(t) {
    var r = this.partialObserver;
    if (r.error)
      try {
        r.error(t);
      } catch (n) {
        jn(n);
      }
    else
      jn(t);
  }, e.prototype.complete = function() {
    var t = this.partialObserver;
    if (t.complete)
      try {
        t.complete();
      } catch (r) {
        jn(r);
      }
  }, e;
}(), ca = function(e) {
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
}(Ma);
function jn(e) {
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
}, Da = function() {
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
    var i = this, a = uh(t) ? t : new ca(t, r, n);
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
      var o = new ca({
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
  }, e.prototype[Da] = function() {
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
  return e && e instanceof Ma || lh(e) && sl(e);
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
}(Ma), dh = new xt(function(e) {
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
  return xe(e[Da]);
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
    return Oa(this, function(o) {
      switch (o.label) {
        case 0:
          r = e.getReader(), o.label = 1;
        case 1:
          o.trys.push([1, , 9, 10]), o.label = 2;
        case 2:
          return [4, Vr(r.read())];
        case 3:
          return n = o.sent(), i = n.value, a = n.done, a ? [4, Vr(void 0)] : [3, 5];
        case 4:
          return [2, o.sent()];
        case 5:
          return [4, Vr(i)];
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
    var r = e[Da]();
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
    return Oa(this, function(s) {
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
function _r(e, t, r, n, i) {
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
    return _r(r, t, function() {
      n = e[pl](), _r(r, t, function() {
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
  var s = [], u = 0, c = 0, d = !1, p = function() {
    d && !s.length && !u && t.complete();
  }, v = function(m) {
    return u < n ? h(m) : s.push(m);
  }, h = function(m) {
    u++;
    var E = !1;
    Bn(r(m, c++)).subscribe(sn(t, function(y) {
      t.next(y);
    }, function() {
      E = !0;
    }, void 0, function() {
      if (E)
        try {
          u--;
          for (var y = function() {
            var C = s.shift();
            o || h(C);
          }; s.length && u < n; )
            y();
          p();
        } catch (C) {
          t.error(C);
        }
    }));
  };
  return e.subscribe(sn(t, v, function() {
    d = !0, p();
  })), function() {
  };
}
function fa(e, t, r) {
  return r === void 0 && (r = 1 / 0), xe(t) ? fa(function(n, i) {
    return Ke(function(a, o) {
      return t(n, a, i, o);
    })(Bn(e(n, i)));
  }, r) : (typeof t == "number" && (r = t), dn(function(n, i) {
    return Oh(n, i, e, r);
  }));
}
function Al(e, t) {
  return xe(t) ? fa(e, t, 1) : fa(e, 1);
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
      var p = d.indexOf(": ");
      return c[d.slice(0, p)] = d.slice(p + 2), c;
    }, {}) : {}, this.response = xl(r);
    var s = t.loaded, u = t.total;
    this.loaded = s, this.total = u;
  }
  return e;
}(), li = ol(function(e) {
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
    return li.call(this, "ajax timeout", t, r), this.name = "AjaxTimeoutError", this;
  }
  return e.prototype = Object.create(li.prototype), e;
}();
function Dh(e, t) {
  return or({ method: "GET", url: e, headers: t });
}
function Bh(e, t, r) {
  return or({ method: "POST", url: e, body: t, headers: r });
}
function Nh(e, t) {
  return or({ method: "DELETE", url: e, headers: t });
}
function Uh(e, t, r) {
  return or({ method: "PUT", url: e, body: t, headers: r });
}
function kh(e, t, r) {
  return or({ method: "PATCH", url: e, body: t, headers: r });
}
var Fh = Ke(function(e) {
  return e.response;
});
function Gh(e, t) {
  return Fh(or({
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
    return Vh(r);
  };
  return e.get = Dh, e.post = Bh, e.delete = Nh, e.put = Uh, e.patch = kh, e.getJSON = Gh, e;
}(), jh = "upload", Oo = "download", ki = "loadstart", Fi = "progress", Ho = "load";
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
      for (var p in l)
        l.hasOwnProperty(p) && (d[p.toLowerCase()] = l[p]);
    var v = i.crossDomain;
    !v && !("x-requested-with" in d) && (d["x-requested-with"] = "XMLHttpRequest");
    var h = i.withCredentials, m = i.xsrfCookieName, E = i.xsrfHeaderName;
    if ((h || !v) && m && E) {
      var y = (n = (r = document == null ? void 0 : document.cookie.match(new RegExp("(^|;\\s*)(" + m + ")=([^;]*)"))) === null || r === void 0 ? void 0 : r.pop()) !== null && n !== void 0 ? n : "";
      y && (d[E] = y);
    }
    var C = qh(o, d), x = k(k({}, i), {
      url: s,
      headers: d,
      body: C
    }), g;
    g = e.createXHR ? e.createXHR() : new XMLHttpRequest();
    {
      var b = e.progressSubscriber, A = e.includeDownloadProgress, _ = A === void 0 ? !1 : A, H = e.includeUploadProgress, B = H === void 0 ? !1 : H, P = function(N, G) {
        g.addEventListener(N, function() {
          var Z, L = G();
          (Z = b == null ? void 0 : b.error) === null || Z === void 0 || Z.call(b, L), t.error(L);
        });
      };
      P("timeout", function() {
        return new Mh(g, x);
      }), P("abort", function() {
        return new li("aborted", g, x);
      });
      var Q = function(N, G) {
        return new Ph(G, g, x, N + "_" + G.type);
      }, re = function(N, G, Z) {
        N.addEventListener(G, function(L) {
          t.next(Q(Z, L));
        });
      };
      B && [ki, Fi, Ho].forEach(function(N) {
        return re(g.upload, N, jh);
      }), b && [ki, Fi].forEach(function(N) {
        return g.upload.addEventListener(N, function(G) {
          var Z;
          return (Z = b == null ? void 0 : b.next) === null || Z === void 0 ? void 0 : Z.call(b, G);
        });
      }), _ && [ki, Fi].forEach(function(N) {
        return re(g, N, Oo);
      });
      var $ = function(N) {
        var G = "ajax error" + (N ? " " + N : "");
        t.error(new li(G, g, x));
      };
      g.addEventListener("error", function(N) {
        var G;
        (G = b == null ? void 0 : b.error) === null || G === void 0 || G.call(b, N), $();
      }), g.addEventListener(Ho, function(N) {
        var G, Z, L = g.status;
        if (L < 400) {
          (G = b == null ? void 0 : b.complete) === null || G === void 0 || G.call(b);
          var S = void 0;
          try {
            S = Q(Oo, N);
          } catch (M) {
            t.error(M);
            return;
          }
          t.next(S), t.complete();
        } else
          (Z = b == null ? void 0 : b.error) === null || Z === void 0 || Z.call(b, N), $(L);
      });
    }
    var Se = x.user, D = x.method, fe = x.async;
    Se ? g.open(D, s, fe, Se, x.password) : g.open(D, s, fe), fe && (g.timeout = x.timeout, g.responseType = x.responseType), "withCredentials" in g && (g.withCredentials = x.withCredentials);
    for (var p in d)
      d.hasOwnProperty(p) && g.setRequestHeader(p, d[p]);
    return C ? g.send(C) : g.send(), function() {
      g && g.readyState !== 4 && g.abort();
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
function Ba(e, t) {
  return zh.call(e) === "[object " + t + "]";
}
function Xh(e) {
  return Ba(e, "ArrayBuffer");
}
function Wh(e) {
  return Ba(e, "File");
}
function Zh(e) {
  return Ba(e, "Blob");
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
        (n) => or(n).pipe(
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
const cr = (e) => encodeURIComponent(`${e}`), iv = (e) => Object.entries(e).map(
  ([t, r]) => r instanceof Array ? r.map((n) => `${cr(t)}=${cr(n)}`).join("&") : `${cr(t)}=${cr(r)}`
).join("&"), Vn = (e, t, r) => {
  if (e == null)
    throw new Error(`Parameter "${t}" was null or undefined when calling "${r}".`);
};
class av extends nv {
  retrieveDataResourceByVersion({ id: t, version: r }, n) {
    Vn(t, "id", "retrieveDataResourceByVersion"), Vn(r, "version", "retrieveDataResourceByVersion");
    const i = {};
    return this.request({
      url: "/api/scl/{id}/version/{version}".replace("{id}", cr(t)).replace("{version}", cr(r)),
      method: "GET",
      headers: i,
      responseType: "blob"
    }, n == null ? void 0 : n.responseOpts);
  }
  retrieveDataResourceHistory({ id: t }, r) {
    Vn(t, "id", "retrieveDataResourceHistory");
    const n = {};
    return this.request({
      url: "/api/scl/{id}/versions".replace("{id}", cr(t)),
      method: "GET",
      headers: n
    }, r == null ? void 0 : r.responseOpts);
  }
  searchForResources({ dataResourceSearch: t }, r) {
    Vn(t, "dataResourceSearch", "searchForResources");
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
class Na {
  constructor(t, r, n, i, a, o, l, s, u) {
    this.uuid = t, this.name = r, this.author = n, this.type = i, this.changedAt = a, this.version = o, this.available = l, this.deleted = s, this.location = u;
  }
  static from(t) {
    return new Na(
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
        (n) => or(n).pipe(
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
).join("&"), Mt = (e, t, r) => {
  if (e == null)
    throw new Error(`Parameter "${t}" was null or undefined when calling "${r}".`);
};
class dv extends cv {
  assignResourceToLocation({ locationId: t, uuid: r }, n) {
    Mt(t, "locationId", "assignResourceToLocation"), Mt(r, "uuid", "assignResourceToLocation");
    const i = {};
    return this.request({
      url: "/api/locations/{locationId}/resources/{uuid}/assign".replace("{locationId}", _t(t)).replace("{uuid}", _t(r)),
      method: "POST",
      headers: i
    }, n == null ? void 0 : n.responseOpts);
  }
  createLocation({ location: t }, r) {
    Mt(t, "location", "createLocation");
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
    Mt(t, "locationId", "deleteLocation");
    const n = {};
    return this.request({
      url: "/api/locations/{locationId}".replace("{locationId}", _t(t)),
      method: "DELETE",
      headers: n
    }, r == null ? void 0 : r.responseOpts);
  }
  getLocation({ locationId: t }, r) {
    Mt(t, "locationId", "getLocation");
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
    Mt(t, "locationId", "unassignResourceFromLocation"), Mt(r, "uuid", "unassignResourceFromLocation");
    const i = {};
    return this.request({
      url: "/api/locations/{locationId}/resources/{uuid}/unassign".replace("{locationId}", _t(t)).replace("{uuid}", _t(r)),
      method: "POST",
      headers: i
    }, n == null ? void 0 : n.responseOpts);
  }
  updateLocation({ locationId: t, location: r }, n) {
    Mt(t, "locationId", "updateLocation"), Mt(r, "location", "updateLocation");
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
class Ua {
  constructor(t, r, n, i, a) {
    this.uuid = a, this.key = t, this.name = r, this.description = n, this.assignedResources = i;
  }
  static from(t) {
    return new Ua(t.key, t.name, t.description, t.assignedResources, t.uuid);
  }
}
class Fr {
  constructor() {
    this.endpoint = "/compas-scl-data-service", this.locationsApiClient = this.createLocationsApiClient(this.endpoint), this.historyApiClient = this.createHistoryApiClient(this.endpoint);
  }
  static getInstance() {
    return Fr.instance || (Fr.instance = new Fr()), Fr.instance;
  }
  getLocations(t) {
    return this.locationsApiClient.getLocations({
      page: t == null ? void 0 : t.page,
      pageSize: t == null ? void 0 : t.pageSize
    }).pipe(
      Ke((r) => r || []),
      Ke((r) => r.map((n) => Ua.from(n)))
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
        (r) => r.map((n) => Na.from(n))
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
var Ut;
class hv {
  constructor() {
    te(this, Ut, ht([]));
  }
  get store() {
    return R(this, Ut);
  }
  set(t) {
    R(this, Ut).set(t);
  }
  update(t) {
    R(this, Ut).update((r) => r.map((n) => n.uuid === t.uuid ? t : n));
  }
  add(t) {
    R(this, Ut).update((r) => [...r, t]);
  }
  remove(t) {
    R(this, Ut).update((r) => r.filter((n) => n.uuid !== t));
  }
  findById(t) {
    return Ps(R(this, Ut)).find((r) => r.uuid === t);
  }
}
Ut = new WeakMap();
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
function q(e, t) {
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
var qn;
function mv(e, t) {
  t === void 0 && (t = !1);
  var r = e.CSS, n = qn;
  if (typeof qn == "boolean" && !t)
    return qn;
  var i = r && typeof r.supports == "function";
  if (!i)
    return !1;
  var a = r.supports("--css-vars", "yes"), o = r.supports("(--css-vars: yes)") && r.supports("color", "#00000000");
  return n = a || o, t || (qn = n), n;
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
var xi = (
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
], zn = [], xv = (
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
            var l = r !== void 0 && zn.length > 0 && zn.some(function(s) {
              return n.adapter.containsEventTarget(s);
            });
            if (l) {
              this.resetActivationState();
              return;
            }
            r !== void 0 && (zn.push(r.target), this.registerDeactivationHandlers(r)), i.wasElementMadeActive = this.checkElementMadeActive(r), i.wasElementMadeActive && this.animateActivation(), requestAnimationFrame(function() {
              zn = [], !i.wasElementMadeActive && r !== void 0 && (r.key === " " || r.keyCode === 32) && (i.wasElementMadeActive = n.checkElementMadeActive(r), i.wasElementMadeActive && n.animateActivation()), i.wasElementMadeActive || (n.activationState = n.defaultActivationState());
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
        var p = this.getFgTranslationCoordinates(), v = p.startPoint, h = p.endPoint;
        c = v.x + "px, " + v.y + "px", d = h.x + "px, " + h.y + "px";
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
  }(xi)
);
const { applyPassive: Bo } = yv, { matches: Cv } = Tl;
function Ol(e, { ripple: t = !0, surface: r = !1, unbounded: n = !1, disabled: i = !1, color: a, active: o, rippleElement: l, eventTarget: s, activeTarget: u, addClass: c = (h) => e.classList.add(h), removeClass: d = (h) => e.classList.remove(h), addStyle: p = (h, m) => e.style.setProperty(h, m), initPromise: v = Promise.resolve() } = {}) {
  let h, m = new pv(), E = ve("SMUI:addLayoutListener"), y, C = o, x = s, g = u;
  function b() {
    r ? (c("mdc-ripple-surface"), a === "primary" ? (c("smui-ripple-surface--primary"), d("smui-ripple-surface--secondary")) : a === "secondary" ? (d("smui-ripple-surface--primary"), c("smui-ripple-surface--secondary")) : (d("smui-ripple-surface--primary"), d("smui-ripple-surface--secondary"))) : (d("mdc-ripple-surface"), d("smui-ripple-surface--primary"), d("smui-ripple-surface--secondary")), h && C !== o && (C = o, o ? h.activate() : o === !1 && h.deactivate()), t && !h ? (h = new xv({
      addClass: c,
      browserSupportsCssVars: () => mv(window),
      computeBoundingRect: () => (l || e).getBoundingClientRect(),
      containsEventTarget: (_) => e.contains(_),
      deregisterDocumentInteractionHandler: (_, H) => m.off(document.documentElement, _, H),
      deregisterInteractionHandler: (_, H) => m.off(s || e, _, H),
      deregisterResizeHandler: (_) => window.removeEventListener("resize", _),
      getWindowPageOffset: () => {
        var _, H;
        return {
          x: (_ = window.pageXOffset) !== null && _ !== void 0 ? _ : window.scrollX,
          y: (H = window.pageYOffset) !== null && H !== void 0 ? H : window.scrollY
        };
      },
      isSurfaceActive: () => o ?? Cv(u || e, ":active"),
      isSurfaceDisabled: () => !!i,
      isUnbounded: () => !!n,
      registerDocumentInteractionHandler: (_, H) => {
        const B = Bo();
        m.on(document.documentElement, _, H, typeof B == "boolean" ? { capture: B } : B);
      },
      registerInteractionHandler: (_, H) => {
        const B = Bo();
        m.on(s || e, _, H, typeof B == "boolean" ? { capture: B } : B);
      },
      registerResizeHandler: (_) => m.on(window, "resize", _),
      removeClass: d,
      updateCssVariable: p
    }), v.then(() => {
      h && (h.init(), h.setUnbounded(n));
    })) : h && !t && v.then(() => {
      h && (h.destroy(), h = void 0, m.clear());
    }), h && (x !== s || g !== u) && (x = s, g = u, h.destroy(), requestAnimationFrame(() => {
      h && (h.init(), h.setUnbounded(n));
    })), !t && n && c("mdc-ripple-upgraded--unbounded");
  }
  b(), E && (y = E(A));
  function A() {
    h && h.layout();
  }
  return {
    update(_) {
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
        addStyle: p,
        initPromise: v
      } = Object.assign({ ripple: !0, surface: !1, unbounded: !1, disabled: !1, color: void 0, active: void 0, rippleElement: void 0, eventTarget: void 0, activeTarget: void 0, addClass: (H) => e.classList.add(H), removeClass: (H) => e.classList.remove(H), addStyle: (H, B) => e.style.setProperty(H, B), initPromise: Promise.resolve() }, _)), b();
    },
    destroy() {
      h && (h.destroy(), h = void 0, m.clear(), d("mdc-ripple-surface"), d("smui-ripple-surface--primary"), d("smui-ripple-surface--secondary")), y && y();
    }
  };
}
function Iv(e, t) {
  Me(t, !0);
  let r = I(t, "use", 19, () => []), n = I(t, "class", 3, ""), i = I(t, "on", 3, !1), a = I(t, "component", 3, ka), o = I(t, "tag", 3, "i"), l = /* @__PURE__ */ St(t, [
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
  var p = { getElement: d }, v = K(), h = V(v);
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
    Ei(h, a, (E, y) => {
      je(
        y(E, wi(
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
              var g = K(), b = V(g);
              Pe(b, () => t.children ?? pe), O(C, g);
            },
            $$slots: { default: !0 }
          }
        )),
        (C) => s = C,
        () => s
      );
    });
  }
  return O(e, v), De(p);
}
var Rv = /* @__PURE__ */ pt("<svg><!></svg>");
function ka(e, t) {
  Me(t, !0);
  let r = I(t, "use", 19, () => []), n = I(t, "tag", 3, "div"), i = /* @__PURE__ */ St(t, ["$$slots", "$$events", "$$legacy", "use", "tag", "children"]);
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
  var s = { getElement: l }, u = K(), c = V(u);
  {
    var d = (v) => {
      var h = Rv();
      at(h, () => ({ ...i }));
      var m = ae(h);
      Pe(m, () => t.children ?? pe), je(h, (E) => o = E, () => o), it(h, (E, y) => q == null ? void 0 : q(E, y), r), O(v, h);
    }, p = (v) => {
      var h = K(), m = V(h);
      {
        var E = (C) => {
          var x = K(), g = V(x);
          io(g, n, !1, (b, A) => {
            je(b, (_) => o = _, () => o), it(b, (_, H) => q == null ? void 0 : q(_, H), r), at(b, () => ({ ...i }));
          }), O(C, x);
        }, y = (C) => {
          var x = K(), g = V(x);
          io(g, n, !1, (b, A) => {
            je(b, (B) => o = B, () => o), it(b, (B, P) => q == null ? void 0 : q(B, P), r), at(b, () => ({ ...i }));
            var _ = K(), H = V(_);
            Pe(H, () => t.children ?? pe), O(A, _);
          }), O(C, x);
        };
        se(
          m,
          (C) => {
            f(a) ? C(E) : C(y, !1);
          },
          !0
        );
      }
      O(v, h);
    };
    se(c, (v) => {
      n() === "svg" ? v(d) : v(p, !1);
    });
  }
  return O(e, u), De(s);
}
var Tv = /* @__PURE__ */ pt("<svg><!></svg>");
function Ov(e, t) {
  Me(t, !0), console && console.warn && console.warn('The @smui/common Svg component is deprecated. You can use `tag="svg"` now.');
  let r = I(t, "use", 19, () => []), n = /* @__PURE__ */ St(t, ["$$slots", "$$events", "$$legacy", "use", "children"]), i;
  function a() {
    return i;
  }
  var o = { getElement: a }, l = Tv();
  at(l, () => ({ ...n }));
  var s = ae(l);
  return Pe(s, () => t.children ?? pe), je(l, (u) => i = u, () => i), it(l, (u, c) => q == null ? void 0 : q(u, c), r), O(e, l), De(o);
}
var Hv = /* @__PURE__ */ ce('<div class="mdc-button__touch"></div>'), Lv = /* @__PURE__ */ ce('<div class="mdc-button__ripple"></div> <!><!>', 1);
function Pv(e, t) {
  Me(t, !0);
  let r = I(t, "use", 19, () => []), n = I(t, "class", 3, ""), i = I(t, "style", 3, ""), a = I(t, "ripple", 3, !0), o = I(t, "color", 3, "primary"), l = I(t, "variant", 3, "text"), s = I(t, "touch", 3, !1), u = I(t, "action", 3, "close"), c = I(t, "defaultAction", 3, !1), d = I(t, "secondary", 3, !1), p = I(t, "component", 3, ka), v = I(t, "tag", 19, () => t.href == null ? "button" : "a"), h = /* @__PURE__ */ St(t, [
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
  ]), m, E = ie({}), y = ie({}), C = ve("SMUI:button:context");
  const x = /* @__PURE__ */ Ee(() => C === "dialog:action" && u() != null ? { "data-mdc-dialog-action": u() } : { action: u() }), g = /* @__PURE__ */ Ee(() => C === "dialog:action" && c() ? { "data-mdc-dialog-button-default": "" } : {}), b = /* @__PURE__ */ Ee(() => C === "banner" ? {} : { secondary: d() });
  let A = t.disabled;
  He(() => {
    if (A !== t.disabled) {
      if (m) {
        const D = Q();
        "blur" in D && D.blur();
      }
      A = h.disabled;
    }
  }), ne("SMUI:label:context", "button"), ne("SMUI:icon:context", "button");
  function _(D) {
    E[D] || (E[D] = !0);
  }
  function H(D) {
    (!(D in E) || E[D]) && (E[D] = !1);
  }
  function B(D, fe) {
    y[D] != fe && (fe === "" || fe == null ? delete y[D] : y[D] = fe);
  }
  function P() {
    C === "banner" && ft(Q(), d() ? "SMUIBannerButtonSecondaryActionClick" : "SMUIBannerButtonPrimaryActionClick");
  }
  function Q() {
    return m.getElement();
  }
  var re = { getElement: Q }, $ = K(), Se = V($);
  {
    let D = /* @__PURE__ */ Ee(() => [
      [
        Ol,
        {
          ripple: a(),
          unbounded: !1,
          color: o(),
          disabled: !!t.disabled,
          addClass: _,
          removeClass: H,
          addStyle: B
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
    })), N = /* @__PURE__ */ Ee(() => Object.entries(y).map(([G, Z]) => `${G}: ${Z};`).concat([i()]).join(" "));
    Ei(Se, p, (G, Z) => {
      je(
        Z(G, wi(
          {
            get tag() {
              return v();
            },
            get use() {
              return f(D);
            },
            get class() {
              return f(fe);
            },
            get style() {
              return f(N);
            }
          },
          () => f(x),
          () => f(g),
          () => f(b),
          {
            get href() {
              return t.href;
            }
          },
          () => h,
          {
            onclick: (L) => {
              var S;
              P(), (S = t.onclick) == null || S.call(t, L);
            },
            children: (L, S) => {
              var M = Lv(), ge = Le(V(M), 2);
              Pe(ge, () => t.children ?? pe);
              var _e = Le(ge);
              {
                var de = (z) => {
                  var ee = Hv();
                  O(z, ee);
                };
                se(_e, (z) => {
                  s() && z(de);
                });
              }
              O(L, M);
            },
            $$slots: { default: !0 }
          }
        )),
        (L) => m = L,
        () => m
      );
    });
  }
  return O(e, $), De(re);
}
function Mv(e, t) {
  Me(t, !0);
  let r = I(t, "callback", 3, () => {
  }), n = I(t, "disabled", 3, !1), i = I(t, "variant", 3, "default"), a = I(t, "isAbortAction", 3, !1), o = I(t, "backgroundColor", 3, void 0);
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
        var c = K(), d = V(c);
        Pe(d, () => t.children ?? pe), O(s, c);
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
var Xn = {
  ICON_BUTTON_ON: "mdc-icon-button--on",
  ROOT: "mdc-icon-button"
}, Dt = {
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
        return Xn;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t, "strings", {
      get: function() {
        return Dt;
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
      var r = this.adapter.getAttr(Dt.DATA_ARIA_LABEL_ON), n = this.adapter.getAttr(Dt.DATA_ARIA_LABEL_OFF);
      if (r && n) {
        if (this.adapter.getAttr(Dt.ARIA_PRESSED) !== null)
          throw new Error("MDCIconButtonToggleFoundation: Button should not set `aria-pressed` if it has a toggled aria label.");
        this.hasToggledAriaLabel = !0;
      } else
        this.adapter.setAttr(Dt.ARIA_PRESSED, String(this.isOn()));
    }, t.prototype.handleClick = function() {
      this.toggle(), this.adapter.notifyChange({ isOn: this.isOn() });
    }, t.prototype.isOn = function() {
      return this.adapter.hasClass(Xn.ICON_BUTTON_ON);
    }, t.prototype.toggle = function(r) {
      if (r === void 0 && (r = !this.isOn()), r ? this.adapter.addClass(Xn.ICON_BUTTON_ON) : this.adapter.removeClass(Xn.ICON_BUTTON_ON), this.hasToggledAriaLabel) {
        var n = r ? this.adapter.getAttr(Dt.DATA_ARIA_LABEL_ON) : this.adapter.getAttr(Dt.DATA_ARIA_LABEL_OFF);
        this.adapter.setAttr(Dt.ARIA_LABEL, n || "");
      } else
        this.adapter.setAttr(Dt.ARIA_PRESSED, "" + r);
    }, t;
  }(xi)
), Bv = /* @__PURE__ */ ce('<div class="mdc-icon-button__touch"></div>'), Nv = /* @__PURE__ */ ce('<div class="mdc-icon-button__ripple"></div> <!><!>', 1);
function Uv(e, t) {
  Me(t, !0);
  let r = () => {
  };
  function n(S) {
    return S === r;
  }
  let i = I(t, "use", 19, () => []), a = I(t, "class", 3, ""), o = I(t, "style", 3, ""), l = I(t, "ripple", 3, !0), s = I(t, "toggle", 3, !1), u = I(t, "pressed", 15, r), c = I(t, "touch", 3, !1), d = I(t, "displayFlex", 3, !0), p = I(t, "size", 3, "normal"), v = I(t, "component", 3, ka), h = I(t, "tag", 19, () => t.href == null ? "button" : "a"), m = /* @__PURE__ */ St(t, [
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
  ]), E, y, C = /* @__PURE__ */ ue(ie({})), x = ie({}), g = /* @__PURE__ */ ue(ie({})), b = ve("SMUI:icon-button:context"), A = ve("SMUI:icon-button:aria-describedby");
  const _ = /* @__PURE__ */ Ee(() => {
    if (b === "data-table:pagination")
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
    else return b === "dialog:header" || b === "dialog:sheet" ? { "data-mdc-dialog-action": t.action } : { action: t.action };
  });
  let H = !!t.disabled;
  He(() => {
    if (H != !!t.disabled) {
      if (E) {
        const S = N();
        "blur" in S && S.blur();
      }
      H = !!t.disabled;
    }
  }), ne("SMUI:icon:context", "icon-button");
  let B = null;
  He(() => {
    E && N() && s() !== B && (s() && !y ? (y = new Dv({
      addClass: Q,
      hasClass: P,
      notifyChange: (S) => {
        fe(S), ft(N(), "SMUIIconButtonToggleChange", S);
      },
      removeClass: re,
      getAttr: Se,
      setAttr: D
    }), y.init()) : !s() && y && (y.destroy(), y = void 0, j(C, {}, !0), j(g, {}, !0)), B = s());
  }), He(() => {
    y && !n(u()) && y.isOn() !== u() && y.toggle(u());
  }), Ia(() => {
    y && y.destroy();
  });
  function P(S) {
    return S in f(C) ? f(C)[S] : N().classList.contains(S);
  }
  function Q(S) {
    f(C)[S] || (f(C)[S] = !0);
  }
  function re(S) {
    (!(S in f(C)) || f(C)[S]) && (f(C)[S] = !1);
  }
  function $(S, M) {
    x[S] != M && (M === "" || M == null ? delete x[S] : x[S] = M);
  }
  function Se(S) {
    return S in f(g) ? f(g)[S] ?? null : N().getAttribute(S);
  }
  function D(S, M) {
    f(g)[S] !== M && (f(g)[S] = M);
  }
  function fe(S) {
    u(S.isOn);
  }
  function N() {
    return E.getElement();
  }
  var G = { getElement: N }, Z = K(), L = V(Z);
  {
    let S = /* @__PURE__ */ Ee(() => [
      [
        Ol,
        {
          ripple: l(),
          unbounded: !0,
          color: t.color,
          disabled: !!t.disabled,
          addClass: Q,
          removeClass: re,
          addStyle: $
        }
      ],
      ...i()
    ]), M = /* @__PURE__ */ Ee(() => wt({
      "mdc-icon-button": !0,
      "mdc-icon-button--on": !n(u()) && u(),
      "mdc-icon-button--touch": c(),
      "mdc-icon-button--display-flex": d(),
      "smui-icon-button--size-button": p() === "button",
      "smui-icon-button--size-mini": p() === "mini",
      "mdc-icon-button--reduced-size": p() === "mini" || p() === "button",
      "mdc-card__action": b === "card:action",
      "mdc-card__action--icon": b === "card:action",
      "mdc-top-app-bar__navigation-icon": b === "top-app-bar:navigation",
      "mdc-top-app-bar__action-item": b === "top-app-bar:action",
      "mdc-snackbar__dismiss": b === "snackbar:actions",
      "mdc-data-table__pagination-button": b === "data-table:pagination",
      "mdc-data-table__sort-icon-button": b === "data-table:sortable-header-cell",
      "mdc-dialog__close": (b === "dialog:header" || b === "dialog:sheet") && t.action === "close",
      ...f(C),
      [a()]: !0
    })), ge = /* @__PURE__ */ Ee(() => Object.entries(x).map(([z, ee]) => `${z}: ${ee};`).concat([o()]).join(" ")), _e = /* @__PURE__ */ Ee(() => n(u()) ? null : u() ? "true" : "false"), de = /* @__PURE__ */ Ee(() => u() ? t.ariaLabelOn : t.ariaLabelOff);
    Ei(L, v, (z, ee) => {
      je(
        ee(z, wi(
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
          () => f(_),
          () => f(g),
          () => m,
          {
            onclick: (Ie) => {
              var Ce;
              y && y.handleClick(), b === "top-app-bar:navigation" && ft(N(), "SMUITopAppBarIconButtonNav"), (Ce = t.onclick) == null || Ce.call(t, Ie);
            },
            children: (Ie, Ce) => {
              var Ve = Nv(), he = Le(V(Ve), 2);
              Pe(he, () => t.children ?? pe);
              var ye = Le(he);
              {
                var oe = (Re) => {
                  var et = Bv();
                  O(Re, et);
                };
                se(ye, (Re) => {
                  c() && Re(oe);
                });
              }
              O(Ie, Ve);
            },
            $$slots: { default: !0 }
          }
        )),
        (Ie) => E = Ie,
        () => E
      );
    });
  }
  return O(e, Z), De(G);
}
function kv(e, t) {
  let r = I(t, "callback", 3, () => {
  }), n = I(t, "icon", 3, ""), i = I(t, "disabled", 3, !1);
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
          var u = Ki();
          we(() => $t(u, n())), O(l, u);
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
let Gi;
const Vv = new Uint8Array(16);
function qv() {
  if (!Gi) {
    if (typeof crypto > "u" || !crypto.getRandomValues)
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    Gi = crypto.getRandomValues.bind(crypto);
  }
  return Gi(Vv);
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
function sr(e, t) {
  var r = Wv(), n = ae(r);
  Pe(n, () => t.children ?? pe), O(e, r);
}
var Zv = /* @__PURE__ */ pt('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"></path></svg>');
function Yv(e, t) {
  let r = I(t, "svgStyles", 3, "");
  sr(e, {
    children: (n, i) => {
      var a = Zv();
      we(() => st(a, r())), O(n, a);
    }
  });
}
var Qv = /* @__PURE__ */ pt('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="24px"><path d="m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"></path></svg>');
function Jv(e, t) {
  let r = I(t, "svgStyles", 3, "");
  sr(e, {
    children: (n, i) => {
      var a = Qv();
      we(() => st(a, r())), O(n, a);
    }
  });
}
var Kv = /* @__PURE__ */ pt('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z"></path></svg>');
function $v(e, t) {
  let r = I(t, "svgStyles", 3, "");
  sr(e, {
    children: (n, i) => {
      var a = Kv();
      we(() => st(a, r())), O(n, a);
    }
  });
}
var ep = /* @__PURE__ */ pt('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="m590-160 80 80H240q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h360l200 240v480q0 20-8.5 36.5T768-96L560-302q-17 11-37 16.5t-43 5.5q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 23-5.5 43T618-360l102 104v-356L562-800H240v640h350ZM480-360q33 0 56.5-23.5T560-440q0-33-23.5-56.5T480-520q-33 0-56.5 23.5T400-440q0 33 23.5 56.5T480-360Zm0-80Zm0 0Z"></path></svg>');
function tp(e, t) {
  let r = I(t, "svgStyles", 3, "");
  sr(e, {
    children: (n, i) => {
      var a = ep();
      we(() => st(a, r())), O(n, a);
    }
  });
}
var rp = /* @__PURE__ */ pt('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-160q-134 0-227-93t-93-227q0-134 93-227t227-93q69 0 132 28.5T720-690v-110h80v280H520v-80h168q-32-56-87.5-88T480-720q-100 0-170 70t-70 170q0 100 70 170t170 70q77 0 139-44t87-116h84q-28 106-114 173t-196 67Z"></path></svg>');
function np(e, t) {
  let r = I(t, "svgStyles", 3, "");
  sr(e, {
    children: (n, i) => {
      var a = rp();
      we(() => st(a, r())), O(n, a);
    }
  });
}
var ip = /* @__PURE__ */ pt('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M200-440v-80h560v80H200Z"></path></svg>');
function ap(e, t) {
  let r = I(t, "svgStyles", 3, "");
  sr(e, {
    children: (n, i) => {
      var a = ip();
      we(() => st(a, r())), O(n, a);
    }
  });
}
var op = /* @__PURE__ */ pt('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"></path></svg>');
function sp(e, t) {
  let r = I(t, "svgStyles", 3, "");
  sr(e, {
    children: (n, i) => {
      var a = op();
      we(() => st(a, r())), O(n, a);
    }
  });
}
var lp = /* @__PURE__ */ pt('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"></path></svg>');
function up(e, t) {
  let r = I(t, "svgStyles", 3, "");
  sr(e, {
    children: (n, i) => {
      var a = lp();
      we(() => st(a, r())), O(n, a);
    }
  });
}
wu();
Vt(["change"]);
var cp = /* @__PURE__ */ ce('<div class="overlay svelte-14uvd2z"><div class="loading-spinner-container svelte-14uvd2z"><div class="loading-spinner svelte-14uvd2z"></div> <span class="loading-message svelte-14uvd2z"> </span></div></div>'), fp = /* @__PURE__ */ ce('<div class="svelte-14uvd2z"><!></div>');
function dp(e, t) {
  let r = I(t, "loadingDone", 3, !0), n = I(t, "message", 3, "Loading...");
  var i = fp(), a = ae(i);
  {
    var o = (l) => {
      var s = cp(), u = ae(s), c = Le(ae(u), 2), d = ae(c);
      we(() => $t(d, n())), O(l, s);
    };
    se(a, (l) => {
      r() || l(o);
    });
  }
  O(e, i);
}
Vt(["change"]);
var hp = /* @__PURE__ */ ce('<span role="tooltip" aria-labelledby="tooltip"><!></span>');
function ko(e, t) {
  Me(t, !0);
  let r = I(t, "content", 3, ""), n = I(t, "side", 3, "top"), i = I(t, "hoverDelay", 3, 0), a = I(t, "transitionDuration", 3, 80);
  const o = `tt-${Math.random().toString(36).slice(2)}`;
  let l = /* @__PURE__ */ ue(null), s = /* @__PURE__ */ ue(null), u = /* @__PURE__ */ ue(null), c = /* @__PURE__ */ ue(null), d = /* @__PURE__ */ ue(!1), p = /* @__PURE__ */ ue(null), v = /* @__PURE__ */ ue(null);
  function h() {
    r() && (i() > 0 ? j(p, setTimeout(() => j(d, !0), i()), !0) : j(d, !0));
  }
  function m() {
    f(p) && clearTimeout(f(p)), j(d, !1);
  }
  function E() {
    if (!f(s) || !f(c) || !f(l)) return;
    const g = f(l).getBoundingClientRect(), b = f(c).getBoundingClientRect();
    let A = 0, _ = 0;
    const H = 8;
    switch (n()) {
      case "top":
        A = g.top - b.height - H, _ = g.left + g.width / 2 - b.width / 2;
        break;
      case "bottom":
        A = g.bottom + H, _ = g.left + g.width / 2 - b.width / 2;
        break;
      case "left":
        A = g.top + g.height / 2 - b.height / 2, _ = g.left - b.width - H;
        break;
      case "right":
        A = g.top + g.height / 2 - b.height / 2, _ = g.right + H;
        break;
    }
    f(s).style.top = `${A + window.scrollY}px`, f(s).style.left = `${_ + window.scrollX}px`;
  }
  function y() {
    var g;
    (g = f(v)) == null || g.disconnect(), j(v, null), f(s) && f(s).parentNode && f(s).parentNode.removeChild(f(s)), j(s, null), j(c, null), j(u, null), f(p) && clearTimeout(f(p));
  }
  Ia(y), He(() => {
    if (!(!f(d) || !r())) {
      if (!f(s)) {
        j(s, document.createElement("div"), !0), f(s).style.position = "absolute", f(s).style.zIndex = "9999", f(s).style.pointerEvents = "none", f(s).style.opacity = "0", f(s).style.transition = `opacity ${a()}ms ease`, f(s).id = o, f(s).setAttribute("role", "tooltip"), document.body.appendChild(f(s)), j(u, f(s).attachShadow({ mode: "open" }), !0);
        const g = document.createElement("style");
        g.textContent = `
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
      `, f(u).appendChild(g), j(c, document.createElement("div"), !0), f(u).appendChild(f(c)), j(
          v,
          new MutationObserver(() => {
            f(d) && E();
          }),
          !0
        ), f(v).observe(document.body, { childList: !0, subtree: !0 });
      }
      f(c) && (f(c).className = `bubble ${n()}`, f(c).innerHTML = r()), f(s) && (f(s).style.opacity = "1", E());
    }
  }), He(() => {
    if (f(d) || !f(s))
      return;
    f(s).style.opacity = "0";
    const g = f(s), b = setTimeout(
      () => {
        g && g.parentNode && g.parentNode.removeChild(g), f(s) === g && y();
      },
      a()
    );
    return () => clearTimeout(b);
  });
  var C = hp(), x = ae(C);
  Pe(x, () => t.children ?? pe), je(C, (g) => j(l, g), () => f(l)), we(() => tn(C, "aria-describedby", r() ? o : void 0)), ro("mouseenter", C, h), ro("mouseleave", C, m), O(e, C), De();
}
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
var vp = (
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
  }(xi)
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
var Bt = {
  HEADER_CELL_SORTED: "mdc-data-table__header-cell--sorted",
  HEADER_CELL_SORTED_DESCENDING: "mdc-data-table__header-cell--sorted-descending",
  IN_PROGRESS: "mdc-data-table--in-progress",
  ROW_SELECTED: "mdc-data-table__row--selected"
}, Fo = {
  ARIA_SELECTED: "aria-selected",
  ARIA_SORT: "aria-sort"
}, lr = {
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
var pp = (
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
        return Oa(this, function(r) {
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
        o !== i && (this.adapter.removeClassNameByHeaderCellIndex(o, Bt.HEADER_CELL_SORTED), this.adapter.removeClassNameByHeaderCellIndex(o, Bt.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(o, lr.ARIA_SORT, nt.NONE), this.adapter.setSortStatusLabelByHeaderCellIndex(o, nt.NONE));
      this.adapter.setClassNameByHeaderCellIndex(i, Bt.HEADER_CELL_SORTED);
      var l = this.adapter.getAttributeByHeaderCellIndex(i, lr.ARIA_SORT), s = nt.NONE;
      l === nt.ASCENDING ? (this.adapter.setClassNameByHeaderCellIndex(i, Bt.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(i, lr.ARIA_SORT, nt.DESCENDING), s = nt.DESCENDING) : l === nt.DESCENDING ? (this.adapter.removeClassNameByHeaderCellIndex(i, Bt.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(i, lr.ARIA_SORT, nt.ASCENDING), s = nt.ASCENDING) : (this.adapter.setAttributeByHeaderCellIndex(i, lr.ARIA_SORT, nt.ASCENDING), s = nt.ASCENDING), this.adapter.setSortStatusLabelByHeaderCellIndex(i, s), this.adapter.notifySortAction({
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
      }), this.adapter.addClass(Bt.IN_PROGRESS);
    }, t.prototype.hideProgress = function() {
      this.adapter.removeClass(Bt.IN_PROGRESS);
    }, t.prototype.setHeaderRowCheckboxState = function() {
      this.adapter.getSelectedRowCount() === 0 ? (this.adapter.setHeaderRowCheckboxChecked(!1), this.adapter.setHeaderRowCheckboxIndeterminate(!1)) : this.adapter.getSelectedRowCount() === this.adapter.getRowCount() ? (this.adapter.setHeaderRowCheckboxChecked(!0), this.adapter.setHeaderRowCheckboxIndeterminate(!1)) : (this.adapter.setHeaderRowCheckboxIndeterminate(!0), this.adapter.setHeaderRowCheckboxChecked(!1));
    }, t.prototype.selectRowAtIndex = function(r, n) {
      n ? (this.adapter.addClassAtRowIndex(r, Bt.ROW_SELECTED), this.adapter.setAttributeAtRowIndex(r, lr.ARIA_SELECTED, "true")) : (this.adapter.removeClassAtRowIndex(r, Bt.ROW_SELECTED), this.adapter.setAttributeAtRowIndex(r, lr.ARIA_SELECTED, "false"));
    }, t;
  }(xi)
), mp = /* @__PURE__ */ ce('<div class="mdc-data-table__progress-indicator"><div class="mdc-data-table__scrim"></div> <!></div>'), gp = /* @__PURE__ */ ce("<div><div><table><!></table></div> <!> <!></div>");
function bp(e, t) {
  Me(t, !0);
  const r = () => br($, "$progressClosed", n), [n, i] = Pn(), { closest: a } = Tl;
  let o = I(t, "use", 19, () => []), l = I(t, "class", 3, ""), s = I(t, "stickyHeader", 3, !1), u = I(t, "sortable", 3, !1), c = I(t, "sort", 15, null), d = I(t, "sortDirection", 15, "ascending"), p = I(t, "sortAscendingAriaLabel", 3, "sorted, ascending"), v = I(t, "sortDescendingAriaLabel", 3, "sorted, descending"), h = I(t, "container$use", 19, () => []), m = I(t, "container$class", 3, ""), E = I(t, "table$use", 19, () => []), y = I(t, "table$class", 3, ""), C = /* @__PURE__ */ St(t, [
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
  ]), x, g = /* @__PURE__ */ ue(void 0), b, A = /* @__PURE__ */ ue(void 0), _ = /* @__PURE__ */ ue(void 0), H = ie({}), B = /* @__PURE__ */ ue(ie({ height: "auto", top: "initial" })), P = ve("SMUI:addLayoutListener"), Q, re = !1, $ = ht(!1), Se = ht(c());
  He(() => {
    ea(Se, c());
  });
  let D = ht(d());
  He(() => {
    ea(D, d());
  }), ne("SMUI:checkbox:context", "data-table"), ne("SMUI:linear-progress:context", "data-table"), ne("SMUI:linear-progress:closed", $), ne("SMUI:data-table:sortable", u()), ne("SMUI:data-table:sort", Se), ne("SMUI:data-table:sortDirection", D), ne("SMUI:data-table:sortAscendingAriaLabel", p()), ne("SMUI:data-table:sortDescendingAriaLabel", v()), P && (Q = P(_e));
  let fe;
  He(() => {
    t.progress && f(g) && fe !== r() && (fe = r(), r() ? f(g).hideProgress() : f(g).showProgress());
  }), ne("SMUI:checkbox:mount", () => {
    f(g) && re && f(g).layout();
  }), ne("SMUI:data-table:header:mount", (w) => {
    j(A, w, !0);
  }), ne("SMUI:data-table:header:unmount", () => {
    j(A, void 0);
  }), ne("SMUI:data-table:body:mount", (w) => {
    j(_, w, !0);
  }), ne("SMUI:data-table:body:unmount", () => {
    j(_, void 0);
  }), Ft(() => (j(
    g,
    new pp({
      addClass: G,
      removeClass: Z,
      getHeaderCellElements: () => {
        var w;
        return ((w = f(A)) == null ? void 0 : w.cells.map((T) => T.element)) ?? [];
      },
      getHeaderCellCount: () => {
        var w;
        return ((w = f(A)) == null ? void 0 : w.cells.length) ?? 0;
      },
      getAttributeByHeaderCellIndex: (w, T) => {
        var U;
        return ((U = f(A)) == null ? void 0 : U.orderedCells[w].getAttr(T)) ?? null;
      },
      setAttributeByHeaderCellIndex: (w, T, U) => {
        var Ae;
        (Ae = f(A)) == null || Ae.orderedCells[w].addAttr(T, U);
      },
      setClassNameByHeaderCellIndex: (w, T) => {
        var U;
        (U = f(A)) == null || U.orderedCells[w].addClass(T);
      },
      removeClassNameByHeaderCellIndex: (w, T) => {
        var U;
        (U = f(A)) == null || U.orderedCells[w].removeClass(T);
      },
      notifySortAction: (w) => {
        c(w.columnId), d(w.sortValue), ft(de(), "SMUIDataTableSorted", w);
      },
      getTableContainerHeight: () => b.getBoundingClientRect().height,
      getTableHeaderHeight: () => {
        const w = de().querySelector(".mdc-data-table__header-row");
        if (!w)
          throw new Error("MDCDataTable: Table header element not found.");
        return w.getBoundingClientRect().height;
      },
      setProgressIndicatorStyles: (w) => {
        j(B, w, !0);
      },
      addClassAtRowIndex: (w, T) => {
        var U;
        (U = f(_)) == null || U.orderedRows[w].addClass(T);
      },
      getRowCount: () => {
        var w;
        return ((w = f(_)) == null ? void 0 : w.rows.length) ?? 0;
      },
      getRowElements: () => {
        var w;
        return ((w = f(_)) == null ? void 0 : w.rows.map((T) => T.element)) ?? [];
      },
      getRowIdAtIndex: (w) => {
        var T;
        return ((T = f(_)) == null ? void 0 : T.orderedRows[w].rowId) ?? null;
      },
      getRowIndexByChildElement: (w) => {
        var T;
        return ((T = f(_)) == null ? void 0 : T.orderedRows.map((U) => U.element).indexOf(a(w, ".mdc-data-table__row"))) ?? -1;
      },
      getSelectedRowCount: () => {
        var w;
        return ((w = f(_)) == null ? void 0 : w.rows.filter((T) => T.selected).length) ?? 0;
      },
      isCheckboxAtRowIndexChecked: (w) => {
        var U;
        const T = (U = f(_)) == null ? void 0 : U.orderedRows[w].checkbox;
        return T ? T.checked : !1;
      },
      isHeaderRowCheckboxChecked: () => {
        var T;
        const w = (T = f(A)) == null ? void 0 : T.checkbox;
        return w ? w.checked : !1;
      },
      isRowsSelectable: () => !!de().querySelector(".mdc-data-table__row-checkbox") || !!de().querySelector(".mdc-data-table__header-row-checkbox"),
      notifyRowSelectionChanged: (w) => {
        var U;
        const T = (U = f(_)) == null ? void 0 : U.orderedRows[w.rowIndex];
        T && ft(de(), "SMUIDataTableSelectionChanged", {
          row: T.element,
          rowId: T.rowId,
          rowIndex: w.rowIndex,
          selected: w.selected
        });
      },
      notifySelectedAll: () => {
        L(!1), ft(de(), "SMUIDataTableSelectedAll");
      },
      notifyUnselectedAll: () => {
        L(!1), ft(de(), "SMUIDataTableUnselectedAll");
      },
      notifyRowClick: (w) => ft(de(), "SMUIDataTableClickRow", w),
      registerHeaderRowCheckbox: () => {
      },
      registerRowCheckboxes: () => {
      },
      removeClassAtRowIndex: (w, T) => {
        var U;
        (U = f(_)) == null || U.orderedRows[w].removeClass(T);
      },
      setAttributeAtRowIndex: (w, T, U) => {
        var Ae;
        (Ae = f(_)) == null || Ae.orderedRows[w].addAttr(T, U);
      },
      setHeaderRowCheckboxChecked: (w) => {
        var U;
        const T = (U = f(A)) == null ? void 0 : U.checkbox;
        T && (T.checked = w);
      },
      setHeaderRowCheckboxIndeterminate: L,
      setRowCheckboxCheckedAtIndex: (w, T) => {
        var Ae;
        const U = (Ae = f(_)) == null ? void 0 : Ae.orderedRows[w].checkbox;
        U && (U.checked = T);
      },
      setSortStatusLabelByHeaderCellIndex: (w, T) => {
      }
    }),
    !0
  ), f(g).init(), f(g).layout(), re = !0, () => {
    var w;
    (w = f(g)) == null || w.destroy();
  })), Ia(() => {
    Q && Q();
  });
  function N(w) {
    f(g) && f(g).handleRowCheckboxChange(w);
  }
  function G(w) {
    H[w] || (H[w] = !0);
  }
  function Z(w) {
    (!(w in H) || H[w]) && (H[w] = !1);
  }
  function L(w) {
    var U;
    const T = (U = f(A)) == null ? void 0 : U.checkbox;
    T && (T.indeterminate = w);
  }
  function S(w) {
    if (!f(g) || !w.detail.target)
      return;
    const T = a(w.detail.target, ".mdc-data-table__header-cell--with-sort");
    T && ge(T);
  }
  function M(w) {
    if (!f(g) || !w.detail.target)
      return;
    const T = a(w.detail.target, ".mdc-data-table__row");
    T && f(g) && f(g).handleRowClick({ rowId: w.detail.rowId, row: T });
  }
  function ge(w) {
    var qt, Nn;
    const T = ((qt = f(A)) == null ? void 0 : qt.orderedCells) ?? [], U = T.map((Ci) => Ci.element).indexOf(w);
    if (U === -1)
      return;
    const Ae = T[U].columnId ?? null;
    (Nn = f(g)) == null || Nn.handleSortAction({ columnId: Ae, columnIndex: U, headerCell: w });
  }
  function _e() {
    var w;
    return (w = f(g)) == null ? void 0 : w.layout();
  }
  function de() {
    return x;
  }
  var z = { layout: _e, getElement: de }, ee = gp(), Ie = (w) => {
    var T;
    f(g) && f(g).handleHeaderRowCheckboxChange(), (T = t.onSMUIDataTableHeaderCheckboxChange) == null || T.call(t, w);
  }, Ce = (w) => {
    var T;
    S(w), (T = t.onSMUIDataTableHeaderClick) == null || T.call(t, w);
  }, Ve = (w) => {
    var T;
    M(w), (T = t.onSMUIDataTableRowClick) == null || T.call(t, w);
  }, he = (w) => {
    var T;
    N(w), (T = t.onSMUIDataTableBodyCheckboxChange) == null || T.call(t, w);
  };
  at(
    ee,
    (w, T) => ({
      class: w,
      ...T,
      onSMUIDataTableHeaderCheckboxChange: Ie,
      onSMUIDataTableHeaderClick: Ce,
      onSMUIDataTableRowClick: Ve,
      onSMUIDataTableBodyCheckboxChange: he
    }),
    [
      () => wt({
        "mdc-data-table": !0,
        "mdc-data-table--sticky-header": s(),
        ...H,
        [l()]: !0
      }),
      () => vv(C, ["container$", "table$"])
    ]
  );
  var ye = ae(ee);
  at(ye, (w, T) => ({ class: w, ...T }), [
    () => wt({
      "mdc-data-table__table-container": !0,
      [m()]: !0
    }),
    () => Lo(C, "container$")
  ]);
  var oe = ae(ye);
  at(oe, (w, T) => ({ class: w, ...T }), [
    () => wt({ "mdc-data-table__table": !0, [y()]: !0 }),
    () => Lo(C, "table$")
  ]);
  var Re = ae(oe);
  Pe(Re, () => t.children ?? pe), it(oe, (w, T) => q == null ? void 0 : q(w, T), E), je(ye, (w) => b = w, () => b), it(ye, (w, T) => q == null ? void 0 : q(w, T), h);
  var et = Le(ye, 2);
  {
    var Qe = (w) => {
      var T = mp(), U = Le(ae(T), 2);
      Pe(U, () => t.progress ?? pe), we((Ae) => st(T, Ae), [
        () => Object.entries(f(B)).map(([Ae, qt]) => `${Ae}: ${qt};`).join(" ")
      ]), O(w, T);
    };
    se(et, (w) => {
      t.progress && w(Qe);
    });
  }
  var mt = Le(et, 2);
  Pe(mt, () => t.paginate ?? pe), je(ee, (w) => x = w, () => x), it(ee, (w, T) => q == null ? void 0 : q(w, T), o), O(e, ee);
  var Te = De(z);
  return i(), Te;
}
var _p = /* @__PURE__ */ ce("<thead><!></thead>");
function yp(e, t) {
  Me(t, !0);
  let r = I(t, "use", 19, () => []), n = /* @__PURE__ */ St(t, ["$$slots", "$$events", "$$legacy", "use", "children"]), i, a = /* @__PURE__ */ ue(void 0), o = [];
  const l = /* @__PURE__ */ new WeakMap();
  ne("SMUI:data-table:row:header", !0);
  const s = ve("SMUI:checkbox:mount");
  ne("SMUI:checkbox:mount", (y) => {
    j(a, y, !0), s && s(y);
  });
  const u = ve("SMUI:checkbox:unmount");
  ne("SMUI:checkbox:unmount", (y) => {
    j(a, void 0), u && u(y);
  }), ne("SMUI:data-table:cell:mount", (y) => {
    o.push(y), l.set(y.element, y);
  }), ne("SMUI:data-table:cell:unmount", (y) => {
    const C = o.findIndex((x) => x === y);
    C !== -1 && o.splice(C, 1), l.delete(y.element);
  });
  const c = ve("SMUI:data-table:header:mount"), d = ve("SMUI:data-table:header:unmount");
  Ft(() => {
    const y = {
      get cells() {
        return o;
      },
      get orderedCells() {
        return p();
      },
      get checkbox() {
        return f(a);
      }
    };
    return c && c(y), () => {
      d && d(y);
    };
  });
  function p() {
    return [
      ...v().querySelectorAll(".mdc-data-table__header-cell")
    ].map((y) => l.get(y)).filter((y) => y && y._smui_data_table_header_cell_accessor);
  }
  function v() {
    return i;
  }
  var h = { getElement: v }, m = _p();
  at(m, () => ({ ...n }));
  var E = ae(m);
  return Pe(E, () => t.children ?? pe), je(m, (y) => i = y, () => i), it(m, (y, C) => q == null ? void 0 : q(y, C), r), O(e, m), De(h);
}
var Ep = /* @__PURE__ */ ce("<tbody><!></tbody>");
function wp(e, t) {
  Me(t, !0);
  let r = I(t, "use", 19, () => []), n = I(t, "class", 3, ""), i = /* @__PURE__ */ St(t, [
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
    const E = o.findIndex((y) => y === m);
    E !== -1 && o.splice(E, 1), l.delete(m.element);
  });
  const s = ve("SMUI:data-table:body:mount"), u = ve("SMUI:data-table:body:unmount");
  Ft(() => {
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
  var p = { getElement: d }, v = Ep();
  at(v, (m) => ({ class: m, ...i }), [
    () => wt({ "mdc-data-table__content": !0, [n()]: !0 })
  ]);
  var h = ae(v);
  return Pe(h, () => t.children ?? pe), je(v, (m) => a = m, () => a), it(v, (m, E) => q == null ? void 0 : q(m, E), r), O(e, v), De(p);
}
let Sp = 0;
var Ap = /* @__PURE__ */ ce("<tr><!></tr>");
function ji(e, t) {
  Me(t, !0);
  let r = I(t, "use", 19, () => []), n = I(t, "class", 3, ""), i = I(t, "rowId", 19, () => "SMUI-data-table-row-" + Sp++), a = /* @__PURE__ */ St(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "rowId",
    "children"
  ]), o, l = /* @__PURE__ */ ue(void 0), s = ie({}), u = ie({}), c = ve("SMUI:data-table:row:header");
  const d = ve("SMUI:checkbox:mount");
  ne("SMUI:checkbox:mount", (P) => {
    j(l, P, !0), d && d(P);
  });
  const p = ve("SMUI:checkbox:unmount");
  ne("SMUI:checkbox:unmount", (P) => {
    j(l, void 0), p && p(P);
  });
  const v = ve("SMUI:data-table:row:mount"), h = ve("SMUI:data-table:row:unmount");
  Ft(() => {
    const P = c ? {
      _smui_data_table_row_accessor: !1,
      get element() {
        return b();
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
      getAttr: y,
      addAttr: C
    } : {
      _smui_data_table_row_accessor: !0,
      get element() {
        return b();
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
      getAttr: y,
      addAttr: C
    };
    return v && v(P), () => {
      h && h(P);
    };
  });
  function m(P) {
    s[P] || (s[P] = !0);
  }
  function E(P) {
    (!(P in s) || s[P]) && (s[P] = !1);
  }
  function y(P) {
    return P in u ? u[P] ?? null : b().getAttribute(P);
  }
  function C(P, Q) {
    u[P] !== Q && (u[P] = Q);
  }
  function x(P) {
    ft(b(), "SMUIDataTableHeaderClick", P);
  }
  function g(P) {
    ft(b(), "SMUIDataTableRowClick", { rowId: i(), target: P.target });
  }
  function b() {
    return o;
  }
  var A = { getElement: b }, _ = Ap(), H = (P) => {
    var Q;
    c ? x(P) : g(P), (Q = t.onclick) == null || Q.call(t, P);
  };
  at(
    _,
    (P) => ({
      class: P,
      "aria-selected": f(l) ? f(l).checked ? "true" : "false" : void 0,
      ...u,
      ...a,
      onclick: H
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
  var B = ae(_);
  return Pe(B, () => t.children ?? pe), je(_, (P) => o = P, () => o), it(_, (P, Q) => q == null ? void 0 : q(P, Q), r), O(e, _), De(A);
}
let xp = 0;
var Cp = /* @__PURE__ */ ce('<div class="mdc-data-table__header-cell-wrapper"><!> <div class="mdc-data-table__sort-status-label" aria-hidden="true"> </div></div>'), Ip = /* @__PURE__ */ ce("<th><!></th>"), Rp = /* @__PURE__ */ ce("<td><!></td>");
function Wn(e, t) {
  Me(t, !0);
  const r = () => br(y, "$sort", i), n = () => br(C, "$sortDirection", i), [i, a] = Pn();
  let o = ve("SMUI:data-table:row:header"), l = I(t, "use", 19, () => []), s = I(t, "class", 3, ""), u = I(t, "numeric", 3, !1), c = I(t, "checkbox", 3, !1), d = I(t, "columnId", 19, () => o ? "SMUI-data-table-column-" + xp++ : "SMUI-data-table-unused"), p = I(t, "sortable", 19, () => ve("SMUI:data-table:sortable")), v = /* @__PURE__ */ St(t, [
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
  ]), h, m = ie({}), E = ie({}), y = ve("SMUI:data-table:sort"), C = ve("SMUI:data-table:sortDirection"), x = ve("SMUI:data-table:sortAscendingAriaLabel"), g = ve("SMUI:data-table:sortDescendingAriaLabel");
  p() && (ne("SMUI:label:context", "data-table:sortable-header-cell"), ne("SMUI:icon-button:context", "data-table:sortable-header-cell"), ne("SMUI:icon-button:aria-describedby", d() + "-status-label"));
  const b = ve("SMUI:data-table:cell:mount"), A = ve("SMUI:data-table:cell:unmount");
  Ft(() => {
    const L = o ? {
      _smui_data_table_header_cell_accessor: !0,
      get element() {
        return $();
      },
      get columnId() {
        return d();
      },
      addClass: _,
      removeClass: H,
      getAttr: B,
      addAttr: P
    } : {
      _smui_data_table_header_cell_accessor: !1,
      get element() {
        return $();
      },
      get columnId() {
      },
      addClass: _,
      removeClass: H,
      getAttr: B,
      addAttr: P
    };
    return b && b(L), () => {
      A && A(L);
    };
  });
  function _(L) {
    m[L] || (m[L] = !0);
  }
  function H(L) {
    (!(L in m) || m[L]) && (m[L] = !1);
  }
  function B(L) {
    return L in E ? E[L] ?? null : $().getAttribute(L);
  }
  function P(L, S) {
    E[L] !== S && (E[L] = S);
  }
  function Q(L) {
    ft($(), "SMUIDataTableHeaderCheckboxChange", L);
  }
  function re(L) {
    ft($(), "SMUIDataTableBodyCheckboxChange", L);
  }
  function $() {
    return h;
  }
  var Se = { getElement: $ }, D = K(), fe = V(D);
  {
    var N = (L) => {
      var S = Ip(), M = (z) => {
        var ee;
        c() && Q(z), (ee = t.onchange) == null || ee.call(t, z);
      };
      at(
        S,
        (z) => ({
          class: z,
          role: "columnheader",
          scope: "col",
          "data-column-id": d(),
          "aria-sort": p() ? r() === d() ? n() : "none" : void 0,
          ...E,
          ...v,
          onchange: M
        }),
        [
          () => wt({
            "mdc-data-table__header-cell": !0,
            "mdc-data-table__header-cell--numeric": u(),
            "mdc-data-table__header-cell--checkbox": c(),
            "mdc-data-table__header-cell--with-sort": p(),
            "mdc-data-table__header-cell--sorted": p() && r() === d(),
            ...m,
            [s()]: !0
          })
        ]
      );
      var ge = ae(S);
      {
        var _e = (z) => {
          var ee = Cp(), Ie = ae(ee);
          Pe(Ie, () => t.children ?? pe);
          var Ce = Le(Ie, 2), Ve = ae(Ce);
          we(() => {
            tn(Ce, "id", `${d() ?? ""}-status-label`), $t(Ve, r() === d() ? n() === "ascending" ? x : g : "");
          }), O(z, ee);
        }, de = (z) => {
          var ee = K(), Ie = V(ee);
          Pe(Ie, () => t.children ?? pe), O(z, ee);
        };
        se(ge, (z) => {
          p() ? z(_e) : z(de, !1);
        });
      }
      je(S, (z) => h = z, () => h), it(S, (z, ee) => q == null ? void 0 : q(z, ee), l), O(L, S);
    }, G = (L) => {
      var S = Rp(), M = (_e) => {
        var de;
        c() && re(_e), (de = t.onchange) == null || de.call(t, _e);
      };
      at(
        S,
        (_e) => ({
          class: _e,
          ...E,
          ...v,
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
      Pe(ge, () => t.children ?? pe), je(S, (_e) => h = _e, () => h), it(S, (_e, de) => q == null ? void 0 : q(_e, de), l), O(L, S);
    };
    se(fe, (L) => {
      o ? L(N) : L(G, !1);
    });
  }
  O(e, D);
  var Z = De(Se);
  return a(), Z;
}
Vt(["click"]);
Vt(["click"]);
function da(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
var Tp = Object.freeze({
  // This flag exists as a workaround for issue 454 (basically a browser bug) - seems like these rect values take time to update when in grid layout. Setting it to true can cause strange behaviour in the REPL for non-grid zones, see issue 470
  USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT: "USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT"
});
da({}, Tp.USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT, !1);
var Zn, Go = {
  DND_ZONE_ACTIVE: "dnd-zone-active",
  DND_ZONE_DRAG_DISABLED: "dnd-zone-drag-disabled"
};
Zn = {}, da(Zn, Go.DND_ZONE_ACTIVE, "Tab to one the items and press space-bar or enter to start dragging it"), da(Zn, Go.DND_ZONE_DRAG_DISABLED, "This is a disabled drag and drop list");
const Op = ht([]);
Op.subscribe;
Vt(["click", "pointerdown", "pointerup", "pointermove"]);
Vt(["click"]);
const Hp = 4e3;
function Lp() {
  let e = ie({ items: [] }), t = 0;
  const r = (i) => {
    e.items = e.items.filter((a) => a.id !== i);
  }, n = (i, a, o, l = Hp) => {
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
Lp();
var Pp = /* @__PURE__ */ ce('<div><div class="mdc-linear-progress__buffer"><div class="mdc-linear-progress__buffer-bar"></div> <div class="mdc-linear-progress__buffer-dots"></div></div> <div class="mdc-linear-progress__bar mdc-linear-progress__primary-bar"><span class="mdc-linear-progress__bar-inner"></span></div> <div class="mdc-linear-progress__bar mdc-linear-progress__secondary-bar"><span class="mdc-linear-progress__bar-inner"></span></div></div>');
function Mp(e, t) {
  Me(t, !0);
  const [r, n] = Pn();
  let i = I(t, "use", 19, () => []), a = I(t, "class", 3, ""), o = I(t, "style", 3, ""), l = I(t, "indeterminate", 3, !1), s = I(t, "closed", 3, !1), u = I(t, "progress", 3, 0), c = I(t, "buffer", 3, void 0), d = /* @__PURE__ */ St(t, [
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
  ]), p, v = /* @__PURE__ */ ue(void 0), h = ie({}), m = ie({}), E = ie({}), y = ie({}), C = ie({}), x = ve("SMUI:linear-progress:context"), g = ve("SMUI:linear-progress:closed");
  He(() => {
    g && ea(g, s());
  }), He(() => {
    f(v) && f(v).isDeterminate() !== !l() && f(v).setDeterminate(!l());
  }), He(() => {
    f(v) && f(v).getProgress() !== u() && f(v).setProgress(u());
  }), He(() => {
    f(v) && (c() == null ? f(v).setBuffer(1) : f(v).setBuffer(c()));
  }), He(() => {
    f(v) && (s() ? f(v).close() : f(v).open());
  }), Ft(() => (j(
    v,
    new vp({
      addClass: A,
      forceLayout: () => {
        $().getBoundingClientRect();
      },
      setBufferBarStyle: Q,
      setPrimaryBarStyle: re,
      hasClass: b,
      removeAttribute: B,
      removeClass: _,
      setAttribute: H,
      setStyle: P,
      attachResizeObserver: (S) => {
        const M = window.ResizeObserver;
        if (M) {
          const ge = new M(S);
          return ge.observe($()), ge;
        }
        return null;
      },
      getWidth: () => $().offsetWidth
    }),
    !0
  ), f(v).init(), () => {
    var S;
    (S = f(v)) == null || S.destroy();
  }));
  function b(S) {
    return S in h ? h[S] : $().classList.contains(S);
  }
  function A(S) {
    h[S] || (h[S] = !0);
  }
  function _(S) {
    (!(S in h) || h[S]) && (h[S] = !1);
  }
  function H(S, M) {
    m[S] !== M && (m[S] = M);
  }
  function B(S) {
    (!(S in m) || m[S] != null) && (m[S] = void 0);
  }
  function P(S, M) {
    E[S] != M && (M === "" || M == null ? delete E[S] : E[S] = M);
  }
  function Q(S, M) {
    y[S] != M && (M === "" || M == null ? delete y[S] : y[S] = M);
  }
  function re(S, M) {
    C[S] != M && (M === "" || M == null ? delete C[S] : C[S] = M);
  }
  function $() {
    return p;
  }
  var Se = { getElement: $ }, D = Pp(), fe = (S) => {
    var M;
    f(v) && f(v).handleTransitionEnd(), (M = t.ontransitionend) == null || M.call(t, S);
  };
  at(
    D,
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
  var N = ae(D), G = ae(N), Z = Le(N, 2);
  je(D, (S) => p = S, () => p), it(D, (S, M) => q == null ? void 0 : q(S, M), i), we(
    (S, M) => {
      st(G, S), st(Z, M);
    },
    [
      () => Object.entries(y).map(([S, M]) => `${S}: ${M};`).join(" "),
      () => Object.entries(C).map(([S, M]) => `${S}: ${M};`).join(" ")
    ]
  ), O(e, D);
  var L = De(Se);
  return n(), L;
}
var Dp = /* @__PURE__ */ pt('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor" class="svelte-1mj71p3"><path d="M12 4l-8 8h16l-8-8z"></path></svg>'), Bp = /* @__PURE__ */ pt('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor" class="svelte-1mj71p3"><path d="M12 20l8-8H4l8 8z"></path></svg>'), Np = /* @__PURE__ */ ce('<div class="custom-cell-container svelte-1mj71p3"><div class="cell-header svelte-1mj71p3"><span class="header-title svelte-1mj71p3"> </span> <!></div></div>'), Up = (e, t) => t(), kp = /* @__PURE__ */ ce('<input type="text" class="svelte-1mj71p3"/>'), Fp = (e, t) => t(), Gp = /* @__PURE__ */ ce('<input type="number" class="svelte-1mj71p3"/>'), jp = /* @__PURE__ */ ce("<!> <!>", 1), Vp = /* @__PURE__ */ ce("<!> <!>", 1), qp = /* @__PURE__ */ ce('<div class="cell-actions svelte-1mj71p3"></div>'), zp = /* @__PURE__ */ ce("<!> <!>", 1);
function Xp(e, t) {
  Me(t, !0);
  const r = () => br(m, "$sortColumn", a), n = () => br(E, "$sortDirection", a), i = () => br(h, "$filteredData", a), [a, o] = Pn();
  let l = I(t, "loadingDone", 15, !0), s = I(t, "label", 19, Xv), u = I(t, "columnDefs", 19, () => []), c = I(t, "rowData", 31, () => ie([])), d = I(t, "rowActions", 19, () => []), p = I(t, "searchInputLabel", 3, "Search"), v = ie({ name: "", color: "", number: "" }), h = ht([]), m = ht(null), E = ht(null);
  t.store.store.subscribe((g) => {
    c([...g]), y();
  });
  function y() {
    let g = c().filter((b) => u().every((A) => {
      const _ = v[A.field], H = A.filterValueGetter ? A.filterValueGetter(b) : b[A.field];
      return _ ? A.filterType === "number" ? H == _ : H.toString().toLowerCase().includes(_.toLowerCase()) : !0;
    }));
    g = C(g), h.set(g);
  }
  function C(g) {
    let b, A;
    return m.subscribe((_) => b = _), E.subscribe((_) => A = _), !b || !A ? g : g.sort((_, H) => {
      let B = _[b], P = H[b];
      return B == null && (B = ""), P == null && (P = ""), A === "asc" ? B.toString().localeCompare(P.toString()) : P.toString().localeCompare(B.toString());
    });
  }
  function x(g) {
    m.update((b) => {
      if (b === g)
        E.update((A) => A === "asc" ? "desc" : A === "desc" ? null : "asc");
      else
        return E.set("asc"), g;
      return g;
    }), y();
  }
  h.set(c()), bp(e, {
    get "table$aria-label"() {
      return s();
    },
    style: "max-width: 100%; width: 100%;",
    progress: (b) => {
      Mp(b, {
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
    children: (b, A) => {
      var _ = zp(), H = V(_);
      yp(H, {
        children: (P, Q) => {
          var re = Vp(), $ = V(re);
          ji($, {
            class: "header-title-row",
            children: (D, fe) => {
              var N = K(), G = V(N);
              Ur(G, 17, u, kn, (Z, L) => {
                Wn(Z, {
                  onclick: () => f(L).sortable && x(f(L).field),
                  get style() {
                    return f(L).headerStyle;
                  },
                  children: (S, M) => {
                    var ge = Np(), _e = ae(ge), de = ae(_e), z = ae(de), ee = Le(de, 2);
                    {
                      var Ie = (Ce) => {
                        var Ve = K(), he = V(Ve);
                        {
                          var ye = (oe) => {
                            var Re = K(), et = V(Re);
                            {
                              var Qe = (Te) => {
                                var w = Dp();
                                O(Te, w);
                              }, mt = (Te) => {
                                var w = K(), T = V(w);
                                {
                                  var U = (Ae) => {
                                    var qt = Bp();
                                    O(Ae, qt);
                                  };
                                  se(
                                    T,
                                    (Ae) => {
                                      n() === "desc" && Ae(U);
                                    },
                                    !0
                                  );
                                }
                                O(Te, w);
                              };
                              se(et, (Te) => {
                                n() === "asc" ? Te(Qe) : Te(mt, !1);
                              });
                            }
                            O(oe, Re);
                          };
                          se(he, (oe) => {
                            r() === f(L).field && n() !== null && oe(ye);
                          });
                        }
                        O(Ce, Ve);
                      };
                      se(ee, (Ce) => {
                        f(L).sortable && Ce(Ie);
                      });
                    }
                    we(() => {
                      st(ge, `min-width: ${f(L).minWidth ?? 0 ?? ""}`), $t(z, f(L).headerName);
                    }), O(S, ge);
                  },
                  $$slots: { default: !0 }
                });
              }), O(D, N);
            },
            $$slots: { default: !0 }
          });
          var Se = Le($, 2);
          ji(Se, {
            class: "header-filter-row",
            children: (D, fe) => {
              var N = K(), G = V(N);
              Ur(G, 17, u, kn, (Z, L) => {
                Wn(Z, {
                  children: (S, M) => {
                    var ge = K(), _e = V(ge);
                    {
                      var de = (z) => {
                        var ee = jp(), Ie = V(ee);
                        {
                          var Ce = (ye) => {
                            var oe = kp();
                            oe.__input = [Up, y], we(() => tn(oe, "placeholder", `${p()} ${f(L).headerName}`)), uo(oe, () => v[f(L).field], (Re) => v[f(L).field] = Re), O(ye, oe);
                          };
                          se(Ie, (ye) => {
                            f(L).filterType === "text" && ye(Ce);
                          });
                        }
                        var Ve = Le(Ie, 2);
                        {
                          var he = (ye) => {
                            var oe = Gp();
                            oe.__input = [Fp, y], we(() => tn(oe, "placeholder", `${p()} ${f(L).headerName}`)), uo(oe, () => v[f(L).field], (Re) => v[f(L).field] = Re), O(ye, oe);
                          };
                          se(Ve, (ye) => {
                            f(L).filterType === "number" && ye(he);
                          });
                        }
                        O(z, ee);
                      };
                      se(_e, (z) => {
                        f(L).filter && z(de);
                      });
                    }
                    O(S, ge);
                  },
                  $$slots: { default: !0 }
                });
              }), O(D, N);
            },
            $$slots: { default: !0 }
          }), O(P, re);
        },
        $$slots: { default: !0 }
      });
      var B = Le(H, 2);
      wp(B, {
        children: (P, Q) => {
          var re = K(), $ = V(re);
          Ur($, 1, i, kn, (Se, D) => {
            ji(Se, {
              children: (fe, N) => {
                var G = K(), Z = V(G);
                Ur(Z, 17, u, (L) => L.field, (L, S) => {
                  var M = K(), ge = V(M);
                  {
                    var _e = (z) => {
                      Wn(z, {
                        children: (ee, Ie) => {
                          var Ce = qp();
                          Ur(Ce, 21, d, kn, (Ve, he) => {
                            var ye = K(), oe = V(ye);
                            {
                              var Re = (Qe) => {
                                ko(Qe, {
                                  get content() {
                                    return f(he).tooltip;
                                  },
                                  hoverDelay: 500,
                                  children: (mt, Te) => {
                                    {
                                      let w = /* @__PURE__ */ Ee(() => f(he).disabled(f(D)));
                                      kv(mt, {
                                        get iconComponent() {
                                          return f(he).iconComponent;
                                        },
                                        get iconStyles() {
                                          return f(he).iconStyles;
                                        },
                                        callback: () => f(he).callback(f(D)),
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
                                      let w = /* @__PURE__ */ Ee(() => f(he).disabled(f(D)));
                                      Mv(mt, {
                                        class: "button",
                                        variant: "raised",
                                        callback: () => f(he).callback(f(D)),
                                        get disabled() {
                                          return f(w);
                                        },
                                        children: (T, U) => {
                                          var Ae = K(), qt = V(Ae);
                                          {
                                            var Nn = (Rr) => {
                                              Yv(Rr, { svgStyles: "margin: unset" });
                                            }, Ci = (Rr) => {
                                              var Fa = K(), Pl = V(Fa);
                                              {
                                                var Ml = (Tr) => {
                                                  Jv(Tr, { svgStyles: "margin: unset" });
                                                }, Dl = (Tr) => {
                                                  var Ga = K(), Bl = V(Ga);
                                                  {
                                                    var Nl = (Or) => {
                                                      $v(Or, { svgStyles: "margin: unset" });
                                                    }, Ul = (Or) => {
                                                      var ja = K(), kl = V(ja);
                                                      {
                                                        var Fl = (Hr) => {
                                                          tp(Hr, { svgStyles: "margin: unset" });
                                                        }, Gl = (Hr) => {
                                                          var Va = K(), jl = V(Va);
                                                          {
                                                            var Vl = (Lr) => {
                                                              ap(Lr, { svgStyles: "margin: unset" });
                                                            }, ql = (Lr) => {
                                                              var qa = K(), zl = V(qa);
                                                              {
                                                                var Xl = (Pr) => {
                                                                  sp(Pr, { svgStyles: "margin: unset" });
                                                                }, Wl = (Pr) => {
                                                                  var za = K(), Zl = V(za);
                                                                  {
                                                                    var Yl = (Mr) => {
                                                                      up(Mr, { svgStyles: "margin: unset" });
                                                                    }, Ql = (Mr) => {
                                                                      np(Mr, { svgStyles: "margin: unset" });
                                                                    };
                                                                    se(
                                                                      Zl,
                                                                      (Mr) => {
                                                                        f(he).icon === "delete" ? Mr(Yl) : Mr(Ql, !1);
                                                                      },
                                                                      !0
                                                                    );
                                                                  }
                                                                  O(Pr, za);
                                                                };
                                                                se(
                                                                  zl,
                                                                  (Pr) => {
                                                                    f(he).icon === "edit" ? Pr(Xl) : Pr(Wl, !1);
                                                                  },
                                                                  !0
                                                                );
                                                              }
                                                              O(Lr, qa);
                                                            };
                                                            se(
                                                              jl,
                                                              (Lr) => {
                                                                f(he).icon === "remove" ? Lr(Vl) : Lr(ql, !1);
                                                              },
                                                              !0
                                                            );
                                                          }
                                                          O(Hr, Va);
                                                        };
                                                        se(
                                                          kl,
                                                          (Hr) => {
                                                            f(he).icon === "find-in-page" ? Hr(Fl) : Hr(Gl, !1);
                                                          },
                                                          !0
                                                        );
                                                      }
                                                      O(Or, ja);
                                                    };
                                                    se(
                                                      Bl,
                                                      (Or) => {
                                                        f(he).icon === "download" ? Or(Nl) : Or(Ul, !1);
                                                      },
                                                      !0
                                                    );
                                                  }
                                                  O(Tr, Ga);
                                                };
                                                se(
                                                  Pl,
                                                  (Tr) => {
                                                    f(he).icon === "cancel" ? Tr(Ml) : Tr(Dl, !1);
                                                  },
                                                  !0
                                                );
                                              }
                                              O(Rr, Fa);
                                            };
                                            se(qt, (Rr) => {
                                              f(he).icon === "add" ? Rr(Nn) : Rr(Ci, !1);
                                            });
                                          }
                                          O(T, Ae);
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
                            O(Ve, ye);
                          }), O(ee, Ce);
                        },
                        $$slots: { default: !0 }
                      });
                    }, de = (z) => {
                      Wn(z, {
                        get numeric() {
                          return f(S).numeric;
                        },
                        get style() {
                          return f(S).cellStyle;
                        },
                        children: (ee, Ie) => {
                          var Ce = K(), Ve = V(Ce);
                          {
                            var he = (oe) => {
                              const Re = /* @__PURE__ */ Ee(() => f(S).cellRenderer);
                              var et = K(), Qe = V(et);
                              Ei(Qe, () => f(Re), (mt, Te) => {
                                Te(mt, wi(
                                  {
                                    get row() {
                                      return f(D);
                                    },
                                    get value() {
                                      return f(D)[f(S).field];
                                    },
                                    get col() {
                                      return f(S);
                                    }
                                  },
                                  () => f(S).cellRendererProps ?? {}
                                ));
                              }), O(oe, et);
                            }, ye = (oe) => {
                              var Re = K(), et = V(Re);
                              {
                                var Qe = (Te) => {
                                  var w = Ki();
                                  we((T) => $t(w, T), [
                                    () => f(S).valueFormatter(f(D)[f(S).field])
                                  ]), O(Te, w);
                                }, mt = (Te) => {
                                  var w = Ki();
                                  we(() => $t(w, f(D)[f(S).field] ?? "")), O(Te, w);
                                };
                                se(
                                  et,
                                  (Te) => {
                                    f(S).valueFormatter ? Te(Qe) : Te(mt, !1);
                                  },
                                  !0
                                );
                              }
                              O(oe, Re);
                            };
                            se(Ve, (oe) => {
                              f(S).cellRenderer ? oe(he) : oe(ye, !1);
                            });
                          }
                          O(ee, Ce);
                        },
                        $$slots: { default: !0 }
                      });
                    };
                    se(ge, (z) => {
                      f(S).field === "actions" ? z(_e) : z(de, !1);
                    });
                  }
                  O(L, M);
                }), O(fe, G);
              },
              $$slots: { default: !0 }
            });
          }), O(P, re);
        },
        $$slots: { default: !0 }
      }), O(b, _);
    },
    $$slots: { progress: !0, default: !0 }
  }), De(), o();
}
Vt(["input"]);
var Wp = (e, t, r) => {
  var n;
  return (n = t.onChange) == null ? void 0 : n.call(t, t.row, f(r));
}, Zp = /* @__PURE__ */ ce("<option> </option>"), Yp = /* @__PURE__ */ ce(`<div style="min-width: 180px"><select><option>—</option><!></select> <style>select {
      width: 100%;
      min-width: 180px;
    }</style></div>`);
function Qp(e, t) {
  Me(t, !0);
  let r = I(t, "locations", 19, () => []), n = /* @__PURE__ */ ue(ie(t.value ?? ""));
  He(() => {
    j(n, t.value ?? "", !0);
  }), He(() => {
    var s;
    f(n) !== (t.value ?? "") && ((s = t.onChange) == null || s.call(t, t.row, f(n)));
  });
  var i = Yp(), a = ae(i);
  a.__change = [Wp, t, n];
  var o = ae(a);
  o.value = o.__value = "";
  var l = Le(o);
  Ur(l, 17, r, (s) => s.value, (s, u) => {
    var c = Zp(), d = ae(c), p = {};
    we(() => {
      $t(d, f(u).label), p !== (p = f(u).value) && (c.value = (c.__value = f(u).value) ?? "");
    }), O(s, c);
  }), wc(a, () => f(n), (s) => j(n, s)), O(e, i), De();
}
Vt(["change"]);
Ad({ en: eh, de: kd });
var Jp = /* @__PURE__ */ ce('<div class="app-container svelte-1lw4l1e"><h3 style="margin-bottom: 1rem;" class="svelte-1lw4l1e"> </h3> <!></div>');
function Kp(e, t) {
  Me(t, !0);
  const r = () => br(Sd, "$_", n), [n, i] = Pn(), a = Fr.getInstance();
  let o = /* @__PURE__ */ ue(ie([])), l = "", s = /* @__PURE__ */ ue(!0);
  Ft(() => {
    setTimeout(
      () => {
        j(s, !1);
      },
      200
    );
  }), Ft(() => {
    a.getLocations().subscribe({
      next: (b) => {
        j(o, b.map((A) => ({ label: A.name, value: A.uuid })), !0);
      }
    }), v();
  });
  const u = new hv();
  function c(b) {
    return new Date(b).toLocaleDateString();
  }
  function d(b) {
    var A;
    return !f(o) || !b ? b || "" : ((A = f(o).find((_) => _.value === b)) == null ? void 0 : A.label) ?? b;
  }
  let p = ie([]);
  function v() {
    const b = h(p);
    a.searchResources(b).pipe(Hh(1), Lh((A) => {
      u.set(A.filter((_) => _.location !== l));
    })).subscribe();
  }
  function h(b) {
    const A = {
      uuid: null,
      type: null,
      name: null,
      location: null,
      author: null,
      from: null,
      to: null
    };
    return console.log("Convert filter to search params: ", b), b.forEach((_) => {
      console.log("KEY:", _.key), _.key === "from" || _.key === "to" ? A[_.key] = new Date(_.value).toISOString() : A[_.key] = _.value;
    }), A;
  }
  function m(b, A) {
    const _ = b.location, H = A || null;
    if (_ === H)
      return;
    const B = { ...b, location: H };
    u.update(B), (H ? a.assignResourceToLocation(H, b.uuid) : a.unassignResourceFromLocation(_ ?? "", b.uuid)).subscribe({
      next: () => {
        v();
      },
      error: () => {
        const Q = { ...b, location: _ };
        u.update(Q);
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
      cellRenderer: Qp,
      cellRendererProps: {
        locations: f(o),
        onChange: m
      },
      filterValueGetter: (b) => d(b.location)
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
  var y = K(), C = V(y);
  {
    var x = (b) => {
      {
        let A = /* @__PURE__ */ Ee(() => !f(s));
        dp(b, {
          get loadingDone() {
            return f(A);
          }
        });
      }
    }, g = (b) => {
      var A = Jp(), _ = ae(A), H = ae(_), B = Le(_, 2);
      {
        let P = /* @__PURE__ */ Ee(() => r()("search"));
        Xp(B, {
          get columnDefs() {
            return f(E);
          },
          get store() {
            return u;
          },
          get searchInputLabel() {
            return f(P);
          }
        });
      }
      we((P) => $t(H, P), [() => r()("search_result")]), O(b, A);
    };
    se(C, (b) => {
      f(s) ? b(x) : b(g, !1);
    });
  }
  O(e, y), De(), i();
}
const Hl = "location-viewer", Ll = "0.0.1";
var $p = /* @__PURE__ */ ce('<!> <input type="hidden" name="package-name"/> <input type="hidden" name="package-version"/>', 1);
function em(e, t) {
  Me(t, !0);
  let r = I(t, "dev", 3, !1);
  var n = $p(), i = V(n);
  {
    var a = (s) => {
      Kp(s, {});
    };
    se(i, (s) => {
      (t.doc || r()) && s(a);
    });
  }
  var o = Le(i, 2), l = Le(o, 2);
  we(() => {
    so(o, Hl), so(l, Ll);
  }), O(e, n), De();
}
var Yr;
class lm extends HTMLElement {
  constructor() {
    super();
    te(this, Yr);
    F(this, Yr, /* @__PURE__ */ ue(ie({ doc: void 0, editCount: void 0 })));
  }
  get props() {
    return f(R(this, Yr));
  }
  set props(r) {
    j(R(this, Yr), r, !0);
  }
  connectedCallback() {
    var n;
    this.attachShadow({ mode: "open" }), this.props.doc = this._doc, this.props.editCount = this.editCount, cc(em, { target: this.shadowRoot, props: this.props });
    const r = tm();
    (n = this.shadowRoot) == null || n.appendChild(r);
  }
  set doc(r) {
    this._doc = r, this.props.doc = r;
  }
  set editCount(r) {
    this.props.editCount = r;
  }
}
Yr = new WeakMap();
function tm() {
  const e = `${Hl}-v${Ll}-style`, t = rm(), r = document.createElement("link");
  return r.rel = "stylesheet", r.type = "text/css", r.href = t, r.id = e, r;
}
function rm() {
  const e = new URL(import.meta.url), t = e.origin, r = e.pathname.split("/").slice(0, -1).filter(Boolean).join("/");
  return [t, r, "style.css"].filter(Boolean).join("/");
}
export {
  lm as default
};
