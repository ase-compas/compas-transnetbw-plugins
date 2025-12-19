var Jl = Object.defineProperty;
var za = (e) => {
  throw TypeError(e);
};
var Kl = (e, t, r) => t in e ? Jl(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var Dr = (e, t, r) => Kl(e, typeof t != "symbol" ? t + "" : t, r), xi = (e, t, r) => t.has(e) || za("Cannot " + r);
var R = (e, t, r) => (xi(e, t, "read from private field"), r ? r.call(e) : t.get(e)), K = (e, t, r) => t.has(e) ? za("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), F = (e, t, r, n) => (xi(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r), je = (e, t, r) => (xi(e, t, "access private method"), r);
const He = Symbol(), $l = "http://www.w3.org/1999/xhtml", eu = "http://www.w3.org/2000/svg", tu = "@attach", Vo = !1;
var ci = Array.isArray, ru = Array.prototype.indexOf, ha = Array.from, $n = Object.defineProperty, Yt = Object.getOwnPropertyDescriptor, qo = Object.getOwnPropertyDescriptors, nu = Object.prototype, iu = Array.prototype, va = Object.getPrototypeOf, Xa = Object.isExtensible;
function dn(e) {
  return typeof e == "function";
}
const de = () => {
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
const Ke = 2, pa = 4, ma = 8, Er = 16, Gt = 32, wr = 64, ga = 128, ht = 256, ei = 512, qe = 1024, st = 2048, er = 4096, Et = 8192, Sr = 16384, ba = 32768, Ar = 65536, Wa = 1 << 17, au = 1 << 18, sn = 1 << 19, ou = 1 << 20, ji = 1 << 21, fi = 1 << 22, pr = 1 << 23, Lt = Symbol("$state"), Wo = Symbol("legacy props"), su = Symbol(""), Ur = new class extends Error {
  constructor() {
    super(...arguments);
    Dr(this, "name", "StaleReactionError");
    Dr(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
function _a(e) {
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
function ya(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Yo(e) {
  return !ya(e, this.v);
}
let ln = !1, Eu = !1;
function wu() {
  ln = !0;
}
let ve = null;
function Yr(e) {
  ve = e;
}
function fe(e) {
  return (
    /** @type {T} */
    Qo().get(e)
  );
}
function te(e, t) {
  return Qo().set(e, t), t;
}
function De(e, t = !1, r) {
  ve = {
    p: ve,
    c: null,
    e: null,
    s: e,
    x: null,
    l: ln && !t ? { s: null, u: null, $: [] } : null
  };
}
function Be(e) {
  var t = (
    /** @type {ComponentContext} */
    ve
  ), r = t.e;
  if (r !== null) {
    t.e = null;
    for (var n of r)
      ds(n);
  }
  return e !== void 0 && (t.x = e), ve = t.p, e ?? /** @type {T} */
  {};
}
function On() {
  return !ln || ve !== null && ve.l === null;
}
function Qo(e) {
  return ve === null && _a(), ve.c ?? (ve.c = new Map(Su(ve) || void 0));
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
let lr = [];
function Jo() {
  var e = lr;
  lr = [], zo(e);
}
function $t(e) {
  if (lr.length === 0 && !yn) {
    var t = lr;
    queueMicrotask(() => {
      t === lr && Jo();
    });
  }
  lr.push(e);
}
function Au() {
  for (; lr.length > 0; )
    Jo();
}
const xu = /* @__PURE__ */ new WeakMap();
function Ko(e) {
  var t = z;
  if (t === null)
    return q.f |= pr, e;
  if (t.f & ba)
    Qr(e, t);
  else {
    if (!(t.f & ga))
      throw !t.parent && e instanceof Error && $o(e), e;
    t.b.error(e);
  }
}
function Qr(e, t) {
  for (; t !== null; ) {
    if (t.f & ga)
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
  t && ($n(e, "message", {
    value: t.message
  }), $n(e, "stack", {
    value: t.stack
  }));
}
const Un = /* @__PURE__ */ new Set();
let se = null, Wn = null, ke = null, Vi = /* @__PURE__ */ new Set(), Ot = [], di = null, qi = !1, yn = !1;
var Vr, qr, cr, In, zr, Xr, fr, Wr, Rn, Tn, pt, zi, Zn, Xi;
const si = class si {
  constructor() {
    K(this, pt);
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
    K(this, Vr, /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<() => void>}
     */
    K(this, qr, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    K(this, cr, 0);
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    K(this, In, null);
    /**
     * Async effects inside a newly-created `<svelte:boundary>`
     * — these do not prevent the batch from committing
     * @type {Effect[]}
     */
    K(this, zr, []);
    /**
     * Template effects and `$effect.pre` effects, which run when
     * a batch is committed
     * @type {Effect[]}
     */
    K(this, Xr, []);
    /**
     * The same as `#render_effects`, but for `$effect` (which runs after)
     * @type {Effect[]}
     */
    K(this, fr, []);
    /**
     * Block effects, which may need to re-run on subsequent flushes
     * in order to update internal sources (e.g. each block items)
     * @type {Effect[]}
     */
    K(this, Wr, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Effect[]}
     */
    K(this, Rn, []);
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Effect[]}
     */
    K(this, Tn, []);
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
      je(this, pt, zi).call(this, o);
    if (R(this, cr) === 0) {
      var r = ke;
      je(this, pt, Xi).call(this);
      var n = R(this, Xr), i = R(this, fr);
      F(this, Xr, []), F(this, fr, []), F(this, Wr, []), Wn = this, se = null, ke = r, Za(n), Za(i), Wn = null, (a = R(this, In)) == null || a.resolve();
    } else
      je(this, pt, Zn).call(this, R(this, Xr)), je(this, pt, Zn).call(this, R(this, fr)), je(this, pt, Zn).call(this, R(this, Wr));
    ke = null;
    for (const o of R(this, zr))
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
    R(this, Vr).has(t) || R(this, Vr).set(t, r), this.current.set(t, t.v), ke == null || ke.set(t, t.v);
  }
  activate() {
    se = this;
  }
  deactivate() {
    se = null, ke = null;
  }
  flush() {
    if (Ot.length > 0) {
      if (this.activate(), es(), se !== null && se !== this)
        return;
    } else R(this, cr) === 0 && je(this, pt, Xi).call(this);
    this.deactivate();
    for (const t of Vi)
      if (Vi.delete(t), t(), se !== null)
        break;
  }
  increment() {
    F(this, cr, R(this, cr) + 1);
  }
  decrement() {
    F(this, cr, R(this, cr) - 1);
    for (const t of R(this, Rn))
      Qe(t, st), _r(t);
    for (const t of R(this, Tn))
      Qe(t, er), _r(t);
    this.flush();
  }
  /** @param {() => void} fn */
  add_callback(t) {
    R(this, qr).add(t);
  }
  settled() {
    return (R(this, In) ?? F(this, In, Xo())).promise;
  }
  static ensure() {
    if (se === null) {
      const t = se = new si();
      Un.add(se), yn || si.enqueue(() => {
        se === t && t.flush();
      });
    }
    return se;
  }
  /** @param {() => void} task */
  static enqueue(t) {
    $t(t);
  }
  apply() {
  }
};
Vr = new WeakMap(), qr = new WeakMap(), cr = new WeakMap(), In = new WeakMap(), zr = new WeakMap(), Xr = new WeakMap(), fr = new WeakMap(), Wr = new WeakMap(), Rn = new WeakMap(), Tn = new WeakMap(), pt = new WeakSet(), /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 */
zi = function(t) {
  var u;
  t.f ^= qe;
  for (var r = t.first; r !== null; ) {
    var n = r.f, i = (n & (Gt | wr)) !== 0, a = i && (n & qe) !== 0, o = a || (n & Et) !== 0 || this.skipped_effects.has(r);
    if (!o && r.fn !== null) {
      i ? r.f ^= qe : n & pa ? R(this, fr).push(r) : n & qe || (n & fi && ((u = r.b) != null && u.is_pending()) ? R(this, zr).push(r) : bi(r) && (r.f & Er && R(this, Wr).push(r), An(r)));
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
    (r.f & st ? R(this, Rn) : R(this, Tn)).push(r), Qe(r, qe);
  t.length = 0;
}, /**
 * Append and remove branches to/from the DOM
 */
Xi = function() {
  var t;
  for (const r of R(this, qr))
    r();
  if (R(this, qr).clear(), Un.size > 1) {
    R(this, Vr).clear();
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
          se = n, n.apply();
          for (const o of Ot)
            je(t = n, pt, zi).call(t, o);
          Ot = [], n.deactivate();
        }
      }
    }
    se = null;
  }
  Un.delete(this);
};
let kt = si;
function Cu(e) {
  var t = yn;
  yn = !0;
  try {
    for (var r; ; ) {
      if (Au(), Ot.length === 0 && (se == null || se.flush(), Ot.length === 0))
        return di = null, /** @type {T} */
        r;
      es();
    }
  } finally {
    yn = t;
  }
}
function es() {
  var e = Fr;
  qi = !0;
  try {
    var t = 0;
    for (Ka(!0); Ot.length > 0; ) {
      var r = kt.ensure();
      if (t++ > 1e3) {
        var n, i;
        Iu();
      }
      r.process(Ot), Qt.clear();
    }
  } finally {
    qi = !1, Ka(e), di = null;
  }
}
function Iu() {
  try {
    du();
  } catch (e) {
    Qr(e, di);
  }
}
let Nt = null;
function Za(e) {
  var t = e.length;
  if (t !== 0) {
    for (var r = 0; r < t; ) {
      var n = e[r++];
      if (!(n.f & (Sr | Et)) && bi(n) && (Nt = [], An(n), n.deps === null && n.first === null && n.nodes_start === null && (n.teardown === null && n.ac === null ? ps(n) : n.fn = null), (Nt == null ? void 0 : Nt.length) > 0)) {
        Qt.clear();
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
      n & Ke ? ts(
        /** @type {Derived} */
        r,
        t
      ) : n & (fi | Er) && rs(r, t) && (Qe(r, st), _r(
        /** @type {Effect} */
        r
      ));
    }
}
function rs(e, t) {
  if (e.deps !== null) {
    for (const r of e.deps)
      if (t.includes(r) || r.f & Ke && rs(
        /** @type {Derived} */
        r,
        t
      ))
        return !0;
  }
  return !1;
}
function _r(e) {
  for (var t = di = e; t.parent !== null; ) {
    t = t.parent;
    var r = t.f;
    if (qi && t === z && r & Er)
      return;
    if (r & (wr | Gt)) {
      if (!(r & qe)) return;
      t.f ^= qe;
    }
  }
  Ot.push(t);
}
function Ru(e) {
  let t = 0, r = yr(0), n;
  return () => {
    zu() && (f(r), mi(() => (t === 0 && (n = nr(() => e(() => En(r)))), t += 1, () => {
      $t(() => {
        t -= 1, t === 0 && (n == null || n(), n = void 0, En(r));
      });
    })));
  };
}
var Tu = Ar | sn | ga;
function Ou(e, t, r) {
  new Hu(e, t, r);
}
var bt, ct, da, It, dr, Rt, ft, $e, Tt, qt, hr, zt, vr, Xt, li, ui, Je, Lu, Mu, Yn, Qn, Wi;
class Hu {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   */
  constructor(t, r, n) {
    K(this, Je);
    /** @type {Boundary | null} */
    Dr(this, "parent");
    K(this, bt, !1);
    /** @type {TemplateNode} */
    K(this, ct);
    /** @type {TemplateNode | null} */
    K(this, da, null);
    /** @type {BoundaryProps} */
    K(this, It);
    /** @type {((anchor: Node) => void)} */
    K(this, dr);
    /** @type {Effect} */
    K(this, Rt);
    /** @type {Effect | null} */
    K(this, ft, null);
    /** @type {Effect | null} */
    K(this, $e, null);
    /** @type {Effect | null} */
    K(this, Tt, null);
    /** @type {DocumentFragment | null} */
    K(this, qt, null);
    K(this, hr, 0);
    K(this, zt, 0);
    K(this, vr, !1);
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    K(this, Xt, null);
    K(this, li, () => {
      R(this, Xt) && Jr(R(this, Xt), R(this, hr));
    });
    K(this, ui, Ru(() => (F(this, Xt, yr(R(this, hr))), () => {
      F(this, Xt, null);
    })));
    F(this, ct, t), F(this, It, r), F(this, dr, n), this.parent = /** @type {Effect} */
    z.b, F(this, bt, !!R(this, It).pending), F(this, Rt, rr(() => {
      z.b = this;
      {
        try {
          F(this, ft, Ve(() => n(R(this, ct))));
        } catch (i) {
          this.error(i);
        }
        R(this, zt) > 0 ? je(this, Je, Qn).call(this) : F(this, bt, !1);
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
    je(this, Je, Wi).call(this, t), F(this, hr, R(this, hr) + t), Vi.add(R(this, li));
  }
  get_effect_pending() {
    return R(this, ui).call(this), f(
      /** @type {Source<number>} */
      R(this, Xt)
    );
  }
  /** @param {unknown} error */
  error(t) {
    var r = R(this, It).onerror;
    let n = R(this, It).failed;
    if (R(this, vr) || !r && !n)
      throw t;
    R(this, ft) && (Fe(R(this, ft)), F(this, ft, null)), R(this, $e) && (Fe(R(this, $e)), F(this, $e, null)), R(this, Tt) && (Fe(R(this, Tt)), F(this, Tt, null));
    var i = !1, a = !1;
    const o = () => {
      if (i) {
        _u();
        return;
      }
      i = !0, a && gu(), kt.ensure(), F(this, hr, 0), R(this, Tt) !== null && Jt(R(this, Tt), () => {
        F(this, Tt, null);
      }), F(this, bt, this.has_pending_snippet()), F(this, ft, je(this, Je, Yn).call(this, () => (F(this, vr, !1), Ve(() => R(this, dr).call(this, R(this, ct)))))), R(this, zt) > 0 ? je(this, Je, Qn).call(this) : F(this, bt, !1);
    };
    var l = q;
    try {
      tt(null), a = !0, r == null || r(t, o), a = !1;
    } catch (s) {
      Qr(s, R(this, Rt) && R(this, Rt).parent);
    } finally {
      tt(l);
    }
    n && $t(() => {
      F(this, Tt, je(this, Je, Yn).call(this, () => {
        F(this, vr, !0);
        try {
          return Ve(() => {
            n(
              R(this, ct),
              () => t,
              () => o
            );
          });
        } catch (s) {
          return Qr(
            s,
            /** @type {Effect} */
            R(this, Rt).parent
          ), null;
        } finally {
          F(this, vr, !1);
        }
      }));
    });
  }
}
bt = new WeakMap(), ct = new WeakMap(), da = new WeakMap(), It = new WeakMap(), dr = new WeakMap(), Rt = new WeakMap(), ft = new WeakMap(), $e = new WeakMap(), Tt = new WeakMap(), qt = new WeakMap(), hr = new WeakMap(), zt = new WeakMap(), vr = new WeakMap(), Xt = new WeakMap(), li = new WeakMap(), ui = new WeakMap(), Je = new WeakSet(), Lu = function() {
  try {
    F(this, ft, Ve(() => R(this, dr).call(this, R(this, ct))));
  } catch (t) {
    this.error(t);
  }
  F(this, bt, !1);
}, Mu = function() {
  const t = R(this, It).pending;
  t && (F(this, $e, Ve(() => t(R(this, ct)))), kt.enqueue(() => {
    F(this, ft, je(this, Je, Yn).call(this, () => (kt.ensure(), Ve(() => R(this, dr).call(this, R(this, ct)))))), R(this, zt) > 0 ? je(this, Je, Qn).call(this) : (Jt(
      /** @type {Effect} */
      R(this, $e),
      () => {
        F(this, $e, null);
      }
    ), F(this, bt, !1));
  }));
}, /**
 * @param {() => Effect | null} fn
 */
Yn = function(t) {
  var r = z, n = q, i = ve;
  Mt(R(this, Rt)), tt(R(this, Rt)), Yr(R(this, Rt).ctx);
  try {
    return t();
  } catch (a) {
    return Ko(a), null;
  } finally {
    Mt(r), tt(n), Yr(i);
  }
}, Qn = function() {
  const t = (
    /** @type {(anchor: Node) => void} */
    R(this, It).pending
  );
  R(this, ft) !== null && (F(this, qt, document.createDocumentFragment()), Pu(R(this, ft), R(this, qt))), R(this, $e) === null && F(this, $e, Ve(() => t(R(this, ct))));
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 */
Wi = function(t) {
  var r;
  if (!this.has_pending_snippet()) {
    this.parent && je(r = this.parent, Je, Wi).call(r, t);
    return;
  }
  F(this, zt, R(this, zt) + t), R(this, zt) === 0 && (F(this, bt, !1), R(this, $e) && Jt(R(this, $e), () => {
    F(this, $e, null);
  }), R(this, qt) && (R(this, ct).before(R(this, qt)), F(this, qt, null)), $t(() => {
    kt.ensure().flush();
  }));
};
function Pu(e, t) {
  for (var r = e.nodes_start, n = e.nodes_end; r !== null; ) {
    var i = r === n ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Hn(r)
    );
    t.append(r), r = i;
  }
}
function ns(e, t, r) {
  const n = On() ? hi : Ea;
  if (t.length === 0) {
    r(e.map(n));
    return;
  }
  var i = se, a = (
    /** @type {Effect} */
    z
  ), o = Du();
  Promise.all(t.map((l) => /* @__PURE__ */ Bu(l))).then((l) => {
    o();
    try {
      r([...e.map(n), ...l]);
    } catch (s) {
      a.f & Sr || Qr(s, a);
    }
    i == null || i.deactivate(), Zi();
  }).catch((l) => {
    Qr(l, a);
  });
}
function Du() {
  var e = z, t = q, r = ve, n = se;
  return function() {
    Mt(e), tt(t), Yr(r), n == null || n.activate();
  };
}
function Zi() {
  Mt(null), tt(null), Yr(null);
}
// @__NO_SIDE_EFFECTS__
function hi(e) {
  var t = Ke | st, r = q !== null && q.f & Ke ? (
    /** @type {Derived} */
    q
  ) : null;
  return z === null || r !== null && r.f & ht ? t |= ht : z.f |= sn, {
    ctx: ve,
    deps: null,
    effects: null,
    equals: Zo,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      He
    ),
    wv: 0,
    parent: r ?? z,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function Bu(e, t) {
  let r = (
    /** @type {Effect | null} */
    z
  );
  r === null && lu();
  var n = (
    /** @type {Boundary} */
    r.b
  ), i = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), a = yr(
    /** @type {V} */
    He
  ), o = !q, l = /* @__PURE__ */ new Map();
  return Wu(() => {
    var p;
    var s = Xo();
    i = s.promise;
    try {
      Promise.resolve(e()).then(s.resolve, s.reject).then(Zi);
    } catch (v) {
      s.reject(v), Zi();
    }
    var u = (
      /** @type {Batch} */
      se
    ), c = n.is_pending();
    o && (n.update_pending_count(1), c || (u.increment(), (p = l.get(u)) == null || p.reject(Ur), l.delete(u), l.set(u, s)));
    const d = (v, h = void 0) => {
      if (c || u.activate(), h)
        h !== Ur && (a.f |= pr, Jr(a, h));
      else {
        a.f & pr && (a.f ^= pr), Jr(a, v);
        for (const [m, E] of l) {
          if (l.delete(m), m === u) break;
          E.reject(Ur);
        }
      }
      o && (n.update_pending_count(-1), c || u.decrement());
    };
    s.promise.then(d, (v) => d(null, v || "unknown"));
  }), pi(() => {
    for (const s of l.values())
      s.reject(Ur);
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
  const t = /* @__PURE__ */ hi(e);
  return bs(t), t;
}
// @__NO_SIDE_EFFECTS__
function Ea(e) {
  const t = /* @__PURE__ */ hi(e);
  return t.equals = Yo, t;
}
function is(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var r = 0; r < t.length; r += 1)
      Fe(
        /** @type {Effect} */
        t[r]
      );
  }
}
function Nu(e) {
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
function wa(e) {
  var t, r = z;
  Mt(Nu(e));
  try {
    is(e), t = ws(e);
  } finally {
    Mt(r);
  }
  return t;
}
function as(e) {
  var t = wa(e);
  if (e.equals(t) || (e.v = t, e.wv = ys()), !xr)
    if (ke !== null)
      ke.set(e, e.v);
    else {
      var r = (Wt || e.f & ht) && e.deps !== null ? er : qe;
      Qe(e, r);
    }
}
const Qt = /* @__PURE__ */ new Map();
function yr(e, t) {
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
function le(e, t) {
  const r = yr(e);
  return bs(r), r;
}
// @__NO_SIDE_EFFECTS__
function os(e, t = !1, r = !0) {
  var i;
  const n = yr(e);
  return t || (n.equals = Yo), ln && r && ve !== null && ve.l !== null && ((i = ve.l).s ?? (i.s = [])).push(n), n;
}
function G(e, t, r = !1) {
  q !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!yt || q.f & Wa) && On() && q.f & (Ke | Er | fi | Wa) && !(Ye != null && Ye.includes(e)) && mu();
  let n = r ? re(t) : t;
  return Jr(e, n);
}
function Jr(e, t) {
  if (!e.equals(t)) {
    var r = e.v;
    xr ? Qt.set(e, t) : Qt.set(e, r), e.v = t;
    var n = kt.ensure();
    n.capture(e, r), e.f & Ke && (e.f & st && wa(
      /** @type {Derived} */
      e
    ), Qe(e, e.f & ht ? er : qe)), e.wv = ys(), ss(e, st), On() && z !== null && z.f & qe && !(z.f & (Gt | wr)) && (ut === null ? Qu([e]) : ut.push(e));
  }
  return t;
}
function En(e) {
  G(e, e.v + 1);
}
function ss(e, t) {
  var r = e.reactions;
  if (r !== null)
    for (var n = On(), i = r.length, a = 0; a < i; a++) {
      var o = r[a], l = o.f;
      if (!(!n && o === z)) {
        var s = (l & st) === 0;
        s && Qe(o, t), l & Ke ? ss(
          /** @type {Derived} */
          o,
          er
        ) : s && (l & Er && Nt !== null && Nt.push(
          /** @type {Effect} */
          o
        ), _r(
          /** @type {Effect} */
          o
        ));
      }
    }
}
function re(e) {
  if (typeof e != "object" || e === null || Lt in e)
    return e;
  const t = va(e);
  if (t !== nu && t !== iu)
    return e;
  var r = /* @__PURE__ */ new Map(), n = ci(e), i = /* @__PURE__ */ le(0), a = mr, o = (l) => {
    if (mr === a)
      return l();
    var s = q, u = mr;
    tt(null), eo(a);
    var c = l();
    return tt(s), eo(u), c;
  };
  return n && r.set("length", /* @__PURE__ */ le(
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
          var d = /* @__PURE__ */ le(u.value);
          return r.set(s, d), d;
        }) : G(c, u.value, !0), !0;
      },
      deleteProperty(l, s) {
        var u = r.get(s);
        if (u === void 0) {
          if (s in l) {
            const c = o(() => /* @__PURE__ */ le(He));
            r.set(s, c), En(i);
          }
        } else
          G(u, He), En(i);
        return !0;
      },
      get(l, s, u) {
        var v;
        if (s === Lt)
          return e;
        var c = r.get(s), d = s in l;
        if (c === void 0 && (!d || (v = Yt(l, s)) != null && v.writable) && (c = o(() => {
          var h = re(d ? l[s] : He), m = /* @__PURE__ */ le(h);
          return m;
        }), r.set(s, c)), c !== void 0) {
          var p = f(c);
          return p === He ? void 0 : p;
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
          if (d !== void 0 && p !== He)
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
        var u = r.get(s), c = u !== void 0 && u.v !== He || Reflect.has(l, s);
        if (u !== void 0 || z !== null && (!c || (p = Yt(l, s)) != null && p.writable)) {
          u === void 0 && (u = o(() => {
            var v = c ? re(l[s]) : He, h = /* @__PURE__ */ le(v);
            return h;
          }), r.set(s, u));
          var d = f(u);
          if (d === He)
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
            h !== void 0 ? G(h, He) : v in l && (h = o(() => /* @__PURE__ */ le(He)), r.set(v + "", h));
          }
        if (d === void 0)
          (!p || (x = Yt(l, s)) != null && x.writable) && (d = o(() => /* @__PURE__ */ le(void 0)), G(d, re(u)), r.set(s, d));
        else {
          p = d.v !== He;
          var m = o(() => re(u));
          G(d, m);
        }
        var E = Reflect.getOwnPropertyDescriptor(l, s);
        if (E != null && E.set && E.set.call(c, u), !p) {
          if (n && typeof s == "string") {
            var y = (
              /** @type {Source<number>} */
              r.get("length")
            ), C = Number(s);
            Number.isInteger(C) && C >= y.v && G(y, C + 1);
          }
          En(i);
        }
        return !0;
      },
      ownKeys(l) {
        f(i);
        var s = Reflect.ownKeys(l).filter((d) => {
          var p = r.get(d);
          return p === void 0 || p.v !== He;
        });
        for (var [u, c] of r)
          c.v !== He && !(u in l) && s.push(u);
        return s;
      },
      setPrototypeOf() {
        pu();
      }
    }
  );
}
function Ya(e) {
  try {
    if (e !== null && typeof e == "object" && Lt in e)
      return e[Lt];
  } catch {
  }
  return e;
}
function Uu(e, t) {
  return Object.is(Ya(e), Ya(t));
}
var Qa, ls, us, cs;
function ku() {
  if (Qa === void 0) {
    Qa = window, ls = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, r = Text.prototype;
    us = Yt(t, "firstChild").get, cs = Yt(t, "nextSibling").get, Xa(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), Xa(r) && (r.__t = void 0);
  }
}
function tr(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function Kr(e) {
  return us.call(e);
}
// @__NO_SIDE_EFFECTS__
function Hn(e) {
  return cs.call(e);
}
function ne(e, t) {
  return /* @__PURE__ */ Kr(e);
}
function X(e, t = !1) {
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
function Me(e, t = 1, r = !1) {
  let n = e;
  for (; t--; )
    n = /** @type {TemplateNode} */
    /* @__PURE__ */ Hn(n);
  return n;
}
function Fu(e) {
  e.textContent = "";
}
function Sa() {
  return !1;
}
function Gu(e, t) {
  if (t) {
    const r = document.body;
    e.autofocus = !0, $t(() => {
      document.activeElement === r && e.focus();
    });
  }
}
let Ja = !1;
function ju() {
  Ja || (Ja = !0, document.addEventListener(
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
  var t = q, r = z;
  tt(null), Mt(null);
  try {
    return e();
  } finally {
    tt(t), Mt(r);
  }
}
function fs(e, t, r, n = r) {
  e.addEventListener(t, () => vi(r));
  const i = e.__on_r;
  i ? e.__on_r = () => {
    i(), n(!0);
  } : e.__on_r = () => n(!0), ju();
}
function Vu(e) {
  z === null && q === null && fu(), q !== null && q.f & ht && z === null && cu(), xr && uu();
}
function qu(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function jt(e, t, r, n = !0) {
  var i = z;
  i !== null && i.f & Et && (e |= Et);
  var a = {
    ctx: ve,
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
      An(a), a.f |= ba;
    } catch (s) {
      throw Fe(a), s;
    }
  else t !== null && _r(a);
  if (n) {
    var o = a;
    if (r && o.deps === null && o.teardown === null && o.nodes_start === null && o.first === o.last && // either `null`, or a singular child
    !(o.f & sn) && (o = o.first), o !== null && (o.parent = i, i !== null && qu(o, i), q !== null && q.f & Ke && !(e & wr))) {
      var l = (
        /** @type {Derived} */
        q
      );
      (l.effects ?? (l.effects = [])).push(o);
    }
  }
  return a;
}
function zu() {
  return q !== null && !yt;
}
function pi(e) {
  const t = jt(ma, null, !1);
  return Qe(t, qe), t.teardown = e, t;
}
function Le(e) {
  Vu();
  var t = (
    /** @type {Effect} */
    z.f
  ), r = !q && (t & Gt) !== 0 && (t & ba) === 0;
  if (r) {
    var n = (
      /** @type {ComponentContext} */
      ve
    );
    (n.e ?? (n.e = [])).push(e);
  } else
    return ds(e);
}
function ds(e) {
  return jt(pa | ou, e, !1);
}
function Xu(e) {
  kt.ensure();
  const t = jt(wr | sn, e, !0);
  return (r = {}) => new Promise((n) => {
    r.outro ? Jt(t, () => {
      Fe(t), n(void 0);
    }) : (Fe(t), n(void 0));
  });
}
function Ln(e) {
  return jt(pa, e, !1);
}
function Wu(e) {
  return jt(fi | sn, e, !0);
}
function mi(e, t = 0) {
  return jt(ma | t, e, !0);
}
function we(e, t = [], r = []) {
  ns(t, r, (n) => {
    jt(ma, () => e(...n.map(f)), !0);
  });
}
function rr(e, t = 0) {
  var r = jt(Er | t, e, !0);
  return r;
}
function Ve(e, t = !0) {
  return jt(Gt | sn, e, !0, t);
}
function hs(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = xr, n = q;
    $a(!0), tt(null);
    try {
      t.call(null);
    } finally {
      $a(r), tt(n);
    }
  }
}
function vs(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    const i = r.ac;
    i !== null && vi(() => {
      i.abort(Ur);
    });
    var n = r.next;
    r.f & wr ? r.parent = null : Fe(r, t), r = n;
  }
}
function Zu(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    t.f & Gt || Fe(t), t = r;
  }
}
function Fe(e, t = !0) {
  var r = !1;
  (t || e.f & au) && e.nodes_start !== null && e.nodes_end !== null && (Yu(
    e.nodes_start,
    /** @type {TemplateNode} */
    e.nodes_end
  ), r = !0), vs(e, t && !r), ti(e, 0), Qe(e, Sr);
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
function Jt(e, t) {
  var r = [];
  Aa(e, r, !0), ms(r, () => {
    Fe(e), t && t();
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
function Aa(e, t, r) {
  if (!(e.f & Et)) {
    if (e.f ^= Et, e.transitions !== null)
      for (const o of e.transitions)
        (o.is_global || r) && t.push(o);
    for (var n = e.first; n !== null; ) {
      var i = n.next, a = (n.f & Ar) !== 0 || (n.f & Gt) !== 0;
      Aa(n, t, a ? r : !1), n = i;
    }
  }
}
function gi(e) {
  gs(e, !0);
}
function gs(e, t) {
  if (e.f & Et) {
    e.f ^= Et, e.f & qe || (Qe(e, st), _r(e));
    for (var r = e.first; r !== null; ) {
      var n = r.next, i = (r.f & Ar) !== 0 || (r.f & Gt) !== 0;
      gs(r, i ? t : !1), r = n;
    }
    if (e.transitions !== null)
      for (const a of e.transitions)
        (a.is_global || t) && a.in();
  }
}
let Fr = !1;
function Ka(e) {
  Fr = e;
}
let xr = !1;
function $a(e) {
  xr = e;
}
let q = null, yt = !1;
function tt(e) {
  q = e;
}
let z = null;
function Mt(e) {
  z = e;
}
let Ye = null;
function bs(e) {
  q !== null && (Ye === null ? Ye = [e] : Ye.push(e));
}
let Ze = null, nt = 0, ut = null;
function Qu(e) {
  ut = e;
}
let _s = 1, Sn = 0, mr = Sn;
function eo(e) {
  mr = e;
}
let Wt = !1;
function ys() {
  return ++_s;
}
function bi(e) {
  var d;
  var t = e.f;
  if (t & st)
    return !0;
  if (t & er) {
    var r = e.deps, n = (t & ht) !== 0;
    if (r !== null) {
      var i, a, o = (t & ei) !== 0, l = n && z !== null && !Wt, s = r.length;
      if ((o || l) && (z === null || !(z.f & Sr))) {
        var u = (
          /** @type {Derived} */
          e
        ), c = u.parent;
        for (i = 0; i < s; i++)
          a = r[i], (o || !((d = a == null ? void 0 : a.reactions) != null && d.includes(u))) && (a.reactions ?? (a.reactions = [])).push(u);
        o && (u.f ^= ei), l && c !== null && !(c.f & ht) && (u.f ^= ht);
      }
      for (i = 0; i < s; i++)
        if (a = r[i], bi(
          /** @type {Derived} */
          a
        ) && as(
          /** @type {Derived} */
          a
        ), a.wv > e.wv)
          return !0;
    }
    (!n || z !== null && !Wt) && Qe(e, qe);
  }
  return !1;
}
function Es(e, t, r = !0) {
  var n = e.reactions;
  if (n !== null && !(Ye != null && Ye.includes(e)))
    for (var i = 0; i < n.length; i++) {
      var a = n[i];
      a.f & Ke ? Es(
        /** @type {Derived} */
        a,
        t,
        !1
      ) : t === a && (r ? Qe(a, st) : a.f & qe && Qe(a, er), _r(
        /** @type {Effect} */
        a
      ));
    }
}
function ws(e) {
  var m;
  var t = Ze, r = nt, n = ut, i = q, a = Wt, o = Ye, l = ve, s = yt, u = mr, c = e.f;
  Ze = /** @type {null | Value[]} */
  null, nt = 0, ut = null, Wt = (c & ht) !== 0 && (yt || !Fr || q === null), q = c & (Gt | wr) ? null : e, Ye = null, Yr(e.ctx), yt = !1, mr = ++Sn, e.ac !== null && (vi(() => {
    e.ac.abort(Ur);
  }), e.ac = null);
  try {
    e.f |= ji;
    var d = (
      /** @type {Function} */
      e.fn
    ), p = d(), v = e.deps;
    if (Ze !== null) {
      var h;
      if (ti(e, nt), v !== null && nt > 0)
        for (v.length = nt + Ze.length, h = 0; h < Ze.length; h++)
          v[nt + h] = Ze[h];
      else
        e.deps = v = Ze;
      if (!Wt || // Deriveds that already have reactions can cleanup, so we still add them as reactions
      c & Ke && /** @type {import('#client').Derived} */
      e.reactions !== null)
        for (h = nt; h < v.length; h++)
          ((m = v[h]).reactions ?? (m.reactions = [])).push(e);
    } else v !== null && nt < v.length && (ti(e, nt), v.length = nt);
    if (On() && ut !== null && !yt && v !== null && !(e.f & (Ke | er | st)))
      for (h = 0; h < /** @type {Source[]} */
      ut.length; h++)
        Es(
          ut[h],
          /** @type {Effect} */
          e
        );
    return i !== null && i !== e && (Sn++, ut !== null && (n === null ? n = ut : n.push(.../** @type {Source[]} */
    ut))), e.f & pr && (e.f ^= pr), p;
  } catch (E) {
    return Ko(E);
  } finally {
    e.f ^= ji, Ze = t, nt = r, ut = n, q = i, Wt = a, Ye = o, Yr(l), yt = s, mr = u;
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
  r === null && t.f & Ke && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Ze === null || !Ze.includes(t)) && (Qe(t, er), t.f & (ht | ei) || (t.f ^= ei), is(
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
      Ju(e, r[n]);
}
function An(e) {
  var t = e.f;
  if (!(t & Sr)) {
    Qe(e, qe);
    var r = z, n = Fr;
    z = e, Fr = !0;
    try {
      t & Er ? Zu(e) : vs(e), hs(e);
      var i = ws(e);
      e.teardown = typeof i == "function" ? i : null, e.wv = _s;
      var a;
      Vo && Eu && e.f & st && e.deps;
    } finally {
      Fr = n, z = r;
    }
  }
}
async function Ku() {
  await Promise.resolve(), Cu();
}
function f(e) {
  var t = e.f, r = (t & Ke) !== 0;
  if (q !== null && !yt) {
    var n = z !== null && (z.f & Sr) !== 0;
    if (!n && !(Ye != null && Ye.includes(e))) {
      var i = q.deps;
      if (q.f & ji)
        e.rv < Sn && (e.rv = Sn, Ze === null && i !== null && i[nt] === e ? nt++ : Ze === null ? Ze = [e] : (!Wt || !Ze.includes(e)) && Ze.push(e));
      else {
        (q.deps ?? (q.deps = [])).push(e);
        var a = e.reactions;
        a === null ? e.reactions = [q] : a.includes(q) || a.push(q);
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
  if (xr) {
    if (Qt.has(e))
      return Qt.get(e);
    if (r) {
      o = /** @type {Derived} */
      e;
      var s = o.v;
      return (!(o.f & qe) && o.reactions !== null || Ss(o)) && (s = wa(o)), Qt.set(o, s), s;
    }
  } else if (r) {
    if (o = /** @type {Derived} */
    e, ke != null && ke.has(o))
      return ke.get(o);
    bi(o) && as(o);
  }
  if (ke != null && ke.has(e))
    return ke.get(e);
  if (e.f & pr)
    throw e.v;
  return e.v;
}
function Ss(e) {
  if (e.v === He) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (Qt.has(t) || t.f & Ke && Ss(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function nr(e) {
  var t = yt;
  try {
    return yt = !0, e();
  } finally {
    yt = t;
  }
}
const $u = -7169;
function Qe(e, t) {
  e.f = e.f & $u | t;
}
function ec(e) {
  if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
    if (Lt in e)
      Yi(e);
    else if (!Array.isArray(e))
      for (let t in e) {
        const r = e[t];
        typeof r == "object" && r && Lt in r && Yi(r);
      }
  }
}
function Yi(e, t = /* @__PURE__ */ new Set()) {
  if (typeof e == "object" && e !== null && // We don't want to traverse DOM elements
  !(e instanceof EventTarget) && !t.has(e)) {
    t.add(e), e instanceof Date && e.getTime();
    for (let n in e)
      try {
        Yi(e[n], t);
      } catch {
      }
    const r = va(e);
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
const As = /* @__PURE__ */ new Set(), Qi = /* @__PURE__ */ new Set();
function xa(e, t, r, n = {}) {
  function i(a) {
    if (n.capture || gn.call(t, a), !a.cancelBubble)
      return vi(() => r == null ? void 0 : r.call(this, a));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? $t(() => {
    t.addEventListener(e, i, n);
  }) : t.addEventListener(e, i, n), i;
}
function tc(e, t, r, n = {}) {
  var i = xa(t, e, r, n);
  return () => {
    e.removeEventListener(t, i, n);
  };
}
function to(e, t, r, n, i) {
  var a = { capture: n, passive: i }, o = xa(e, t, r, a);
  (t === document.body || // @ts-ignore
  t === window || // @ts-ignore
  t === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  t instanceof HTMLMediaElement) && pi(() => {
    t.removeEventListener(e, o, a);
  });
}
function Vt(e) {
  for (var t = 0; t < e.length; t++)
    As.add(e[t]);
  for (var r of Qi)
    r(e);
}
let ro = null;
function gn(e) {
  var C;
  var t = this, r = (
    /** @type {Node} */
    t.ownerDocument
  ), n = e.type, i = ((C = e.composedPath) == null ? void 0 : C.call(e)) || [], a = (
    /** @type {null | Element} */
    i[0] || e.target
  );
  ro = e;
  var o = 0, l = ro === e && e.__root;
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
    var c = q, d = z;
    tt(null), Mt(null);
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
            if (ci(m)) {
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
      e.__root = t, delete e.currentTarget, tt(c), Mt(d);
    }
  }
}
function xs(e) {
  var t = document.createElement("template");
  return t.innerHTML = e.replaceAll("<!>", "<!---->"), t.content;
}
function $r(e, t) {
  var r = (
    /** @type {Effect} */
    z
  );
  r.nodes_start === null && (r.nodes_start = e, r.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function he(e, t) {
  var r = (t & 1) !== 0, n = (t & 2) !== 0, i, a = !e.startsWith("<!>");
  return () => {
    i === void 0 && (i = xs(a ? e : "<!>" + e), r || (i = /** @type {Node} */
    /* @__PURE__ */ Kr(i)));
    var o = (
      /** @type {TemplateNode} */
      n || ls ? document.importNode(i, !0) : i.cloneNode(!0)
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
function rc(e, t, r = "svg") {
  var n = !e.startsWith("<!>"), i = `<${r}>${n ? e : "<!>" + e}</${r}>`, a;
  return () => {
    if (!a) {
      var o = (
        /** @type {DocumentFragment} */
        xs(i)
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
  return /* @__PURE__ */ rc(e, t, "svg");
}
function Ji(e = "") {
  {
    var t = tr(e + "");
    return $r(t, t), t;
  }
}
function $() {
  var e = document.createDocumentFragment(), t = document.createComment(""), r = tr();
  return e.append(t, r), $r(t, r), e;
}
function H(e, t) {
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
function Kt(e, t) {
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
        t.addEventListener(v, gn, { passive: h });
        var m = Br.get(v);
        m === void 0 ? (document.addEventListener(v, gn, { passive: h }), Br.set(v, 1)) : Br.set(v, m + 1);
      }
    }
  };
  s(ha(As)), Qi.add(s);
  var u = void 0, c = Xu(() => {
    var d = r ?? t.appendChild(tr());
    return Ou(
      /** @type {TemplateNode} */
      d,
      {
        pending: () => {
        }
      },
      (p) => {
        if (a) {
          De({});
          var v = (
            /** @type {ComponentContext} */
            ve
          );
          v.c = a;
        }
        i && (n.$$events = i), u = e(p, n) || {}, a && Be();
      }
    ), () => {
      var h;
      for (var p of l) {
        t.removeEventListener(p, gn);
        var v = (
          /** @type {number} */
          Br.get(p)
        );
        --v === 0 ? (document.removeEventListener(p, gn), Br.delete(p)) : Br.set(p, v);
      }
      Qi.delete(s), d !== r && ((h = d.parentNode) == null || h.removeChild(d));
    };
  });
  return dc.set(u, c), u;
}
let dc = /* @__PURE__ */ new WeakMap();
function Pe(e, t, ...r) {
  var n = e, i = de, a;
  rr(() => {
    i !== (i = t()) && (a && (Fe(a), a = null), a = Ve(() => (
      /** @type {SnippetFn} */
      i(n, ...r)
    )));
  }, Ar);
}
function Ft(e) {
  ve === null && _a(), ln && ve.l !== null ? hc(ve).m.push(e) : Le(() => {
    const t = nr(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function Ca(e) {
  ve === null && _a(), Ft(() => () => nr(e));
}
function hc(e) {
  var t = (
    /** @type {ComponentContextLegacy} */
    e.l
  );
  return t.u ?? (t.u = { a: [], b: [], m: [] });
}
function oe(e, t, r = !1) {
  var n = e, i = null, a = null, o = He, l = r ? Ar : 0, s = !1;
  const u = (v, h = !0) => {
    s = !0, p(h, v);
  };
  var c = null;
  function d() {
    c !== null && (c.lastChild.remove(), n.before(c), c = null);
    var v = o ? i : a, h = o ? a : i;
    v && gi(v), h && Jt(h, () => {
      o ? a = null : i = null;
    });
  }
  const p = (v, h) => {
    if (o !== (o = v)) {
      var m = Sa(), E = n;
      if (m && (c = document.createDocumentFragment(), c.append(E = tr())), o ? i ?? (i = h && Ve(() => h(E))) : a ?? (a = h && Ve(() => h(E))), m) {
        var y = (
          /** @type {Batch} */
          se
        ), C = o ? i : a, x = o ? a : i;
        C && y.skipped_effects.delete(C), x && y.skipped_effects.add(x), y.add_callback(d);
      } else
        d();
    }
  };
  rr(() => {
    s = !1, t(u), s || p(null, null);
  }, l);
}
function Ci(e, t) {
  return t;
}
function vc(e, t, r) {
  for (var n = e.items, i = [], a = t.length, o = 0; o < a; o++)
    Aa(t[o].e, i, !0);
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
      l || (n.delete(c.k), Ct(e, c.prev, c.next)), Fe(c.e, !l);
    }
  });
}
function bn(e, t, r, n, i, a = null) {
  var o = e, l = { flags: t, items: /* @__PURE__ */ new Map(), first: null }, s = (t & 4) !== 0;
  if (s) {
    var u = (
      /** @type {Element} */
      e
    );
    o = u.appendChild(tr());
  }
  var c = null, d = !1, p = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ Ea(() => {
    var y = r();
    return ci(y) ? y : y == null ? [] : ha(y);
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
    ), a !== null && (h.length === 0 ? c ? gi(c) : c = Ve(() => a(o)) : c !== null && Jt(c, () => {
      c = null;
    }));
  }
  rr(() => {
    m ?? (m = /** @type {Effect} */
    z), h = /** @type {V[]} */
    f(v);
    var y = h.length;
    if (!(d && y === 0)) {
      d = y === 0;
      var C, x, g, b;
      if (Sa()) {
        var A = /* @__PURE__ */ new Set(), _ = (
          /** @type {Batch} */
          se
        );
        for (x = 0; x < y; x += 1) {
          g = h[x], b = n(g, x);
          var O = l.items.get(b) ?? p.get(b);
          O ? t & 3 && Cs(O, g, x, t) : (C = Is(
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
        for (const [N, L] of l.items)
          A.has(N) || _.skipped_effects.add(L.e);
        _.add_callback(E);
      } else
        E();
      f(v);
    }
  });
}
function pc(e, t, r, n, i, a, o, l, s) {
  var J, P, S, M;
  var u = (o & 8) !== 0, c = (o & 3) !== 0, d = t.length, p = r.items, v = r.first, h = v, m, E = null, y, C = [], x = [], g, b, A, _;
  if (u)
    for (_ = 0; _ < d; _ += 1)
      g = t[_], b = l(g, _), A = p.get(b), A !== void 0 && ((J = A.a) == null || J.measure(), (y ?? (y = /* @__PURE__ */ new Set())).add(A));
  for (_ = 0; _ < d; _ += 1) {
    if (g = t[_], b = l(g, _), A = p.get(b), A === void 0) {
      var O = n.get(b);
      if (O !== void 0) {
        n.delete(b), p.set(b, O);
        var N = E ? E.next : h;
        Ct(r, E, O), Ct(r, O, N), Ii(O, N, i), E = O;
      } else {
        var L = h ? (
          /** @type {TemplateNode} */
          h.e.nodes_start
        ) : i;
        E = Is(
          L,
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
    if (c && Cs(A, g, _, o), A.e.f & Et && (gi(A.e), u && ((P = A.a) == null || P.unfix(), (y ?? (y = /* @__PURE__ */ new Set())).delete(A))), A !== h) {
      if (m !== void 0 && m.has(A)) {
        if (C.length < x.length) {
          var Z = x[0], ie;
          E = Z.prev;
          var ee = C[0], be = C[C.length - 1];
          for (ie = 0; ie < C.length; ie += 1)
            Ii(C[ie], Z, i);
          for (ie = 0; ie < x.length; ie += 1)
            m.delete(x[ie]);
          Ct(r, ee.prev, be.next), Ct(r, E, ee), Ct(r, be, Z), h = Z, E = be, _ -= 1, C = [], x = [];
        } else
          m.delete(A), Ii(A, h, i), Ct(r, A.prev, A.next), Ct(r, A, E === null ? r.first : E.next), Ct(r, E, A), E = A;
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
    for (var B = m === void 0 ? [] : ha(m); h !== null; )
      h.e.f & Et || B.push(h), h = h.next;
    var ue = B.length;
    if (ue > 0) {
      var D = o & 4 && d === 0 ? i : null;
      if (u) {
        for (_ = 0; _ < ue; _ += 1)
          (S = B[_].a) == null || S.measure();
        for (_ = 0; _ < ue; _ += 1)
          (M = B[_].a) == null || M.fix();
      }
      vc(r, B, D);
    }
  }
  u && $t(() => {
    var xe;
    if (y !== void 0)
      for (A of y)
        (xe = A.a) == null || xe.apply();
  }), e.first = r.first && r.first.e, e.last = E && E.e;
  for (var j of n.values())
    Fe(j.e);
  n.clear();
}
function Cs(e, t, r, n) {
  n & 1 && Jr(e.v, t), n & 2 ? Jr(
    /** @type {Value<number>} */
    e.i,
    r
  ) : e.i = r;
}
function Is(e, t, r, n, i, a, o, l, s, u, c) {
  var d = (s & 1) !== 0, p = (s & 16) === 0, v = d ? p ? /* @__PURE__ */ os(i, !1, !1) : yr(i) : i, h = s & 2 ? yr(o) : o, m = {
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
      E.append(e = tr());
    }
    return m.e = Ve(() => l(
      /** @type {Node} */
      e,
      v,
      h,
      u
    ), yu), m.e.prev = r && r.e, m.e.next = n && n.e, r === null ? c || (t.first = m) : (r.next = m, r.e.next = m.e), n !== null && (n.prev = m, n.e.prev = m.e), m;
  } finally {
  }
}
function Ii(e, t, r) {
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
function _i(e, t, r) {
  var n = e, i, a, o = null, l = null;
  function s() {
    a && (Jt(a), a = null), o && (o.lastChild.remove(), n.before(o), o = null), a = l, l = null;
  }
  rr(() => {
    if (i !== (i = t())) {
      var u = Sa();
      if (i) {
        var c = n;
        u && (o = document.createDocumentFragment(), o.append(c = tr()), a && se.skipped_effects.add(a)), l = Ve(() => r(c, i));
      }
      u ? se.add_callback(s) : s();
    }
  }, Ar);
}
function no(e, t, r, n, i, a) {
  var o, l, s = null, u = (
    /** @type {TemplateNode} */
    e
  ), c;
  rr(() => {
    const d = t() || null;
    var p = d === "svg" ? eu : null;
    d !== o && (c && (d === null ? Jt(c, () => {
      c = null, l = null;
    }) : d === l ? gi(c) : Fe(c)), d && d !== l && (c = Ve(() => {
      if (s = p ? document.createElementNS(p, d) : document.createElement(d), $r(s, s), n) {
        var v = (
          /** @type {TemplateNode} */
          s.appendChild(tr())
        );
        n(s, v);
      }
      z.nodes_end = s, u.before(s);
    })), o = d, o && (l = o));
  }, Ar);
}
function at(e, t, r) {
  Ln(() => {
    var n = nr(() => t(e, r == null ? void 0 : r()) || {});
    if (r && (n != null && n.update)) {
      var i = !1, a = (
        /** @type {any} */
        {}
      );
      mi(() => {
        var o = r();
        ec(o), i && ya(a, o) && (a = o, n.update(o));
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
  rr(() => {
    r !== (r = t()) && (n && (Fe(n), n = null), r && (n = Ve(() => {
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
const io = [...` 	
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
          (o === 0 || io.includes(n[o - 1])) && (l === n.length || io.includes(n[l])) ? n = (o === 0 ? "" : n.substring(0, o)) + n.substring(l + 1) : o = l;
        }
  }
  return n === "" ? null : n;
}
function ao(e, t = !1) {
  var r = t ? " !important;" : ";", n = "";
  for (var i in e) {
    var a = e[i];
    a != null && a !== "" && (n += " " + i + ": " + a + r);
  }
  return n;
}
function Ri(e) {
  return e[0] !== "-" || e[1] !== "-" ? e.toLowerCase() : e;
}
function yc(e, t) {
  if (t) {
    var r = "", n, i;
    if (Array.isArray(t) ? (n = t[0], i = t[1]) : n = t, e) {
      e = String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var a = !1, o = 0, l = !1, s = [];
      n && s.push(...Object.keys(n).map(Ri)), i && s.push(...Object.keys(i).map(Ri));
      var u = 0, c = -1;
      const m = e.length;
      for (var d = 0; d < m; d++) {
        var p = e[d];
        if (l ? p === "/" && e[d - 1] === "*" && (l = !1) : a ? a === p && (a = !1) : p === "/" && e[d + 1] === "*" ? l = !0 : p === '"' || p === "'" ? a = p : p === "(" ? o++ : p === ")" && o--, !l && a === !1 && o === 0) {
          if (p === ":" && c === -1)
            c = d;
          else if (p === ";" || d === m - 1) {
            if (c !== -1) {
              var v = Ri(e.substring(u, c).trim());
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
    return n && (r += ao(n)), i && (r += ao(i, !0)), r = r.trim(), r === "" ? null : r;
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
function Ti(e, t = {}, r, n) {
  for (var i in r) {
    var a = r[i];
    t[i] !== a && (r[i] == null ? e.style.removeProperty(i) : e.style.setProperty(i, a, n));
  }
}
function lt(e, t, r, n) {
  var i = e.__style;
  if (i !== t) {
    var a = yc(t, n);
    a == null ? e.removeAttribute("style") : e.style.cssText = a, e.__style = t;
  } else n && (Array.isArray(n) ? (Ti(e, r == null ? void 0 : r[0], n[0]), Ti(e, r == null ? void 0 : r[1], n[1], "important")) : Ti(e, r, n));
  return n;
}
function ri(e, t, r = !1) {
  if (e.multiple) {
    if (t == null)
      return;
    if (!ci(t))
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
  }), pi(() => {
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
    if (ri(e, i, n), n && i === void 0) {
      var a = e.querySelector(":checked");
      a !== null && (i = wn(a), r(i));
    }
    e.__value = i, n = !1;
  }), Ts(e);
}
function wn(e) {
  return "__value" in e ? e.__value : e.value;
}
const hn = Symbol("class"), vn = Symbol("style"), Os = Symbol("is custom element"), Hs = Symbol("is html");
function oo(e, t) {
  var r = Ia(e);
  r.value === (r.value = // treat null and undefined the same for the initial value
  t ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  e.value === t && (t !== 0 || e.nodeName !== "PROGRESS") || (e.value = t ?? "");
}
function Sc(e, t) {
  t ? e.hasAttribute("selected") || e.setAttribute("selected", "") : e.removeAttribute("selected");
}
function en(e, t, r, n) {
  var i = Ia(e);
  i[t] !== (i[t] = r) && (t === "loading" && (e[su] = r), r == null ? e.removeAttribute(t) : typeof r != "string" && Ls(e).includes(t) ? e[t] = r : e.setAttribute(t, r));
}
function Ac(e, t, r, n, i = !1, a = !1) {
  var o = Ia(e), l = o[Os], s = !o[Hs], u = t || {}, c = e.tagName === "OPTION";
  for (var d in t)
    d in r || (r[d] = null);
  r.class ? r.class = bc(r.class) : r[hn] && (r.class = null), r[vn] && (r.style ?? (r.style = null));
  var p = Ls(e);
  for (const x in r) {
    let g = r[x];
    if (c && x === "value" && g == null) {
      e.value = e.__value = "", u[x] = g;
      continue;
    }
    if (x === "class") {
      var v = e.namespaceURI === "http://www.w3.org/1999/xhtml";
      Ec(e, v, g, n, t == null ? void 0 : t[hn], r[hn]), u[x] = g, u[hn] = r[hn];
      continue;
    }
    if (x === "style") {
      lt(e, g, t == null ? void 0 : t[vn], r[vn]), u[x] = g, u[vn] = r[vn];
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
              let O = function(N) {
                u[x].call(this, N);
              };
              u[A] = xa(_, e, O, b);
            }
          else E && (e[`__${_}`] = void 0);
        } else if (x === "style")
          en(e, x, g);
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
          else C || p.includes(y) && (l || typeof g != "string") ? (e[y] = g, y in o && (o[y] = He)) : typeof g != "function" && en(e, y, g);
        }
    }
  }
  return u;
}
function ot(e, t, r = [], n = [], i, a = !1, o = !1) {
  ns(r, n, (l) => {
    var s = void 0, u = {}, c = e.nodeName === "SELECT", d = !1;
    if (rr(() => {
      var v = t(...l.map(f)), h = Ac(
        e,
        s,
        v,
        i,
        a,
        o
      );
      d && c && "value" in v && ri(
        /** @type {HTMLSelectElement} */
        e,
        v.value
      );
      for (let E of Object.getOwnPropertySymbols(u))
        v[E] || Fe(u[E]);
      for (let E of Object.getOwnPropertySymbols(v)) {
        var m = v[E];
        E.description === tu && (!s || m !== s[E]) && (u[E] && Fe(u[E]), u[E] = Ve(() => mc(e, () => m))), h[E] = m;
      }
      s = h;
    }), c) {
      var p = (
        /** @type {HTMLSelectElement} */
        e
      );
      Ln(() => {
        ri(
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
function Ia(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ?? (e.__attributes = {
      [Os]: e.nodeName.includes("-"),
      [Hs]: e.namespaceURI === $l
    })
  );
}
var so = /* @__PURE__ */ new Map();
function Ls(e) {
  var t = e.getAttribute("is") || e.nodeName, r = so.get(t);
  if (r) return r;
  so.set(t, r = []);
  for (var n, i = e, a = Element.prototype; a !== i; ) {
    n = qo(i);
    for (var o in n)
      n[o].set && r.push(o);
    i = va(i);
  }
  return r;
}
function lo(e, t, r = t) {
  var n = /* @__PURE__ */ new WeakSet();
  fs(e, "input", async (i) => {
    var a = i ? e.defaultValue : e.value;
    if (a = Oi(e) ? Hi(a) : a, r(a), se !== null && n.add(se), await Ku(), a !== (a = t())) {
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
  nr(t) == null && e.value && (r(Oi(e) ? Hi(e.value) : e.value), se !== null && n.add(se)), mi(() => {
    var i = t();
    if (e === document.activeElement) {
      var a = (
        /** @type {Batch} */
        Wn ?? se
      );
      if (n.has(a))
        return;
    }
    Oi(e) && i === Hi(e.value) || e.type === "date" && !i && !e.value || i !== e.value && (e.value = i ?? "");
  });
}
function Oi(e) {
  var t = e.type;
  return t === "number" || t === "range";
}
function Hi(e) {
  return e === "" ? null : +e;
}
function uo(e, t) {
  return e === t || (e == null ? void 0 : e[Lt]) === t;
}
function ze(e = {}, t, r, n) {
  return Ln(() => {
    var i, a;
    return mi(() => {
      i = a, a = [], nr(() => {
        e !== r(...a) && (t(e, ...a), i && uo(r(...i), e) && t(null, ...i));
      });
    }), () => {
      $t(() => {
        a && uo(r(...a), e) && t(null, ...a);
      });
    };
  }), e;
}
function Ra(e, t, r) {
  if (e == null)
    return t(void 0), r && r(void 0), de;
  const n = nr(
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
    subscribe: vt(e, t).subscribe
  };
}
function vt(e, t = de) {
  let r = null;
  const n = /* @__PURE__ */ new Set();
  function i(l) {
    if (ya(e, l) && (e = l, r)) {
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
  function o(l, s = de) {
    const u = [l, s];
    return n.add(u), n.size === 1 && (r = t(i, a) || de), l(
      /** @type {T} */
      e
    ), () => {
      n.delete(u), n.size === 0 && r && (r(), r = null);
    };
  }
  return { set: i, update: a, subscribe: o };
}
function un(e, t, r) {
  const n = !Array.isArray(e), i = n ? [e] : e;
  if (!i.every(Boolean))
    throw new Error("derived() expects stores as input, got a falsy value");
  const a = t.length < 2;
  return xc(r, (o, l) => {
    let s = !1;
    const u = [];
    let c = 0, d = de;
    const p = () => {
      if (c)
        return;
      d();
      const h = t(n ? u[0] : u, o, l);
      a ? o(h) : d = typeof h == "function" ? h : de;
    }, v = i.map(
      (h, m) => Ra(
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
function Ms(e) {
  let t;
  return Ra(e, (r) => t = r)(), t;
}
let kn = !1, Ki = Symbol();
function gr(e, t, r) {
  const n = r[t] ?? (r[t] = {
    store: null,
    source: /* @__PURE__ */ os(void 0),
    unsubscribe: de
  });
  if (n.store !== e && !(Ki in r))
    if (n.unsubscribe(), n.store = e ?? null, e == null)
      n.source.v = void 0, n.unsubscribe = de;
    else {
      var i = !0;
      n.unsubscribe = Ra(e, (a) => {
        i ? n.source.v = a : G(n.source, a);
      }), i = !1;
    }
  return e && Ki in r ? Ms(e) : f(n.source);
}
function $i(e, t) {
  return e.set(t), t;
}
function Mn() {
  const e = {};
  function t() {
    pi(() => {
      for (var r in e)
        e[r].unsubscribe();
      $n(e, Ki, {
        enumerable: !1,
        value: !0
      });
    });
  }
  return [e, t];
}
function Cc(e) {
  var t = kn;
  try {
    return kn = !1, [e(), kn];
  } finally {
    kn = t;
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
      if (dn(n) && (n = n()), typeof n == "object" && n !== null && t in n) return n[t];
    }
  },
  set(e, t, r) {
    let n = e.props.length;
    for (; n--; ) {
      let i = e.props[n];
      dn(i) && (i = i());
      const a = Yt(i, t);
      if (a && a.set)
        return a.set(r), !0;
    }
    return !1;
  },
  getOwnPropertyDescriptor(e, t) {
    let r = e.props.length;
    for (; r--; ) {
      let n = e.props[r];
      if (dn(n) && (n = n()), typeof n == "object" && n !== null && t in n) {
        const i = Yt(n, t);
        return i && !i.configurable && (i.configurable = !0), i;
      }
    }
  },
  has(e, t) {
    if (t === Lt || t === Wo) return !1;
    for (let r of e.props)
      if (dn(r) && (r = r()), r != null && t in r) return !0;
    return !1;
  },
  ownKeys(e) {
    const t = [];
    for (let r of e.props)
      if (dn(r) && (r = r()), !!r) {
        for (const n in r)
          t.includes(n) || t.push(n);
        for (const n of Object.getOwnPropertySymbols(r))
          t.includes(n) || t.push(n);
      }
    return t;
  }
};
function yi(...e) {
  return new Proxy({ props: e }, Rc);
}
function I(e, t, r, n) {
  var x;
  var i = !ln || (r & 2) !== 0, a = (r & 8) !== 0, o = (r & 16) !== 0, l = (
    /** @type {V} */
    n
  ), s = !0, u = () => (s && (s = !1, l = o ? nr(
    /** @type {() => V} */
    n
  ) : (
    /** @type {V} */
    n
  )), l), c;
  if (a) {
    var d = Lt in e || Wo in e;
    c = ((x = Yt(e, t)) == null ? void 0 : x.set) ?? (d && t in e ? (g) => e[t] = g : void 0);
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
  var E = !1, y = (r & 1 ? hi : Ea)(() => (E = !1, h()));
  a && f(y);
  var C = (
    /** @type {Effect} */
    z
  );
  return (
    /** @type {() => V} */
    function(g, b) {
      if (arguments.length > 0) {
        const A = b ? f(y) : i && a ? re(g) : g;
        return G(y, A), E = !0, l !== void 0 && (l = A), g;
      }
      return xr && E || C.f & Sr ? y.v : f(y);
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
  return Lc(t) && !Mc(t);
};
function Lc(e) {
  return !!e && typeof e == "object";
}
function Mc(e) {
  var t = Object.prototype.toString.call(e);
  return t === "[object RegExp]" || t === "[object Date]" || Bc(e);
}
var Pc = typeof Symbol == "function" && Symbol.for, Dc = Pc ? Symbol.for("react.element") : 60103;
function Bc(e) {
  return e.$$typeof === Dc;
}
function Nc(e) {
  return Array.isArray(e) ? [] : {};
}
function xn(e, t) {
  return t.clone !== !1 && t.isMergeableObject(e) ? tn(Nc(e), e, t) : e;
}
function Uc(e, t, r) {
  return e.concat(t).map(function(n) {
    return xn(n, r);
  });
}
function kc(e, t) {
  if (!t.customMerge)
    return tn;
  var r = t.customMerge(e);
  return typeof r == "function" ? r : tn;
}
function Fc(e) {
  return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e).filter(function(t) {
    return Object.propertyIsEnumerable.call(e, t);
  }) : [];
}
function co(e) {
  return Object.keys(e).concat(Fc(e));
}
function Ps(e, t) {
  try {
    return t in e;
  } catch {
    return !1;
  }
}
function Gc(e, t) {
  return Ps(e, t) && !(Object.hasOwnProperty.call(e, t) && Object.propertyIsEnumerable.call(e, t));
}
function jc(e, t, r) {
  var n = {};
  return r.isMergeableObject(e) && co(e).forEach(function(i) {
    n[i] = xn(e[i], r);
  }), co(t).forEach(function(i) {
    Gc(e, i) || (Ps(e, i) && r.isMergeableObject(t[i]) ? n[i] = kc(i, r)(e[i], t[i], r) : n[i] = xn(t[i], r));
  }), n;
}
function tn(e, t, r) {
  r = r || {}, r.arrayMerge = r.arrayMerge || Uc, r.isMergeableObject = r.isMergeableObject || Hc, r.cloneUnlessOtherwiseSpecified = xn;
  var n = Array.isArray(t), i = Array.isArray(e), a = n === i;
  return a ? n ? r.arrayMerge(e, t, r) : jc(e, t, r) : xn(t, r);
}
tn.all = function(t, r) {
  if (!Array.isArray(t))
    throw new Error("first argument should be an array");
  return t.reduce(function(n, i) {
    return tn(n, i, r);
  }, {});
};
var Vc = tn, qc = Vc;
const zc = /* @__PURE__ */ Oc(qc);
var ea = function(e, t) {
  return ea = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, n) {
    r.__proto__ = n;
  } || function(r, n) {
    for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (r[i] = n[i]);
  }, ea(e, t);
};
function At(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  ea(e, t);
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
function Ta(e, t) {
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
function ta(e, t) {
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
    v.value instanceof jr ? Promise.resolve(v.value.v).then(c, d) : p(a[0][2], v);
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
function Li(e, t) {
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
}, W;
(function(e) {
  e[e.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", e[e.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", e[e.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", e[e.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", e[e.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", e[e.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", e[e.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", e[e.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", e[e.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", e[e.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", e[e.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", e[e.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", e[e.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", e[e.INVALID_TAG = 23] = "INVALID_TAG", e[e.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", e[e.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", e[e.UNCLOSED_TAG = 27] = "UNCLOSED_TAG";
})(W || (W = {}));
var me;
(function(e) {
  e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag";
})(me || (me = {}));
var rn;
(function(e) {
  e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime";
})(rn || (rn = {}));
function fo(e) {
  return e.type === me.literal;
}
function rf(e) {
  return e.type === me.argument;
}
function Us(e) {
  return e.type === me.number;
}
function ks(e) {
  return e.type === me.date;
}
function Fs(e) {
  return e.type === me.time;
}
function Gs(e) {
  return e.type === me.select;
}
function js(e) {
  return e.type === me.plural;
}
function nf(e) {
  return e.type === me.pound;
}
function Vs(e) {
  return e.type === me.tag;
}
function qs(e) {
  return !!(e && typeof e == "object" && e.type === rn.number);
}
function ra(e) {
  return !!(e && typeof e == "object" && e.type === rn.dateTime);
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
var ho = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g, Xs = /^(@+)?(\+|#+)?[rs]?$/g, cf = /(\*)(0+)|(#+)(0+)|(0+)/g, Ws = /^(0+)$/;
function vo(e) {
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
function po(e) {
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
          return k(k({}, s), po(u));
        }, {}));
        continue;
      case "engineering":
        t = k(k(k({}, t), { notation: "engineering" }), i.options.reduce(function(s, u) {
          return k(k({}, s), po(u));
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
    if (ho.test(i.stem)) {
      if (i.options.length > 1)
        throw new RangeError("Fraction-precision stems only accept a single optional option");
      i.stem.replace(ho, function(s, u, c, d, p, v) {
        return c === "*" ? t.minimumFractionDigits = u.length : d && d[0] === "#" ? t.maximumFractionDigits = d.length : p && v ? (t.minimumFractionDigits = p.length, t.maximumFractionDigits = p.length + v.length) : (t.minimumFractionDigits = u.length, t.maximumFractionDigits = u.length), "";
      });
      var a = i.options[0];
      a === "w" ? t = k(k({}, t), { trailingZeroDisplay: "stripIfInteger" }) : a && (t = k(k({}, t), vo(a)));
      continue;
    }
    if (Xs.test(i.stem)) {
      t = k(k({}, t), vo(i.stem));
      continue;
    }
    var o = Zs(i.stem);
    o && (t = k(k({}, t), o));
    var l = ff(i.stem);
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
  var i = Fn[n || ""] || Fn[r || ""] || Fn["".concat(r, "-001")] || Fn["001"];
  return i[0];
}
var Pi, pf = new RegExp("^".concat(zs.source, "*")), mf = new RegExp("".concat(zs.source, "*$"));
function Q(e, t) {
  return { start: e, end: t };
}
var gf = !!String.prototype.startsWith && "_a".startsWith("a", 1), bf = !!String.fromCodePoint, _f = !!Object.fromEntries, yf = !!String.prototype.codePointAt, Ef = !!String.prototype.trimStart, wf = !!String.prototype.trimEnd, Sf = !!Number.isSafeInteger, Af = Sf ? Number.isSafeInteger : function(e) {
  return typeof e == "number" && isFinite(e) && Math.floor(e) === e && Math.abs(e) <= 9007199254740991;
}, na = !0;
try {
  var xf = Qs("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  na = ((Pi = xf.exec("a")) === null || Pi === void 0 ? void 0 : Pi[0]) === "a";
} catch {
  na = !1;
}
var mo = gf ? (
  // Native
  function(t, r, n) {
    return t.startsWith(r, n);
  }
) : (
  // For IE11
  function(t, r, n) {
    return t.slice(n, n + r.length) === r;
  }
), ia = bf ? String.fromCodePoint : (
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
), go = (
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
var aa;
if (na) {
  var bo = Qs("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  aa = function(t, r) {
    var n;
    bo.lastIndex = r;
    var i = bo.exec(t);
    return (n = i[1]) !== null && n !== void 0 ? n : "";
  };
} else
  aa = function(t, r) {
    for (var n = []; ; ) {
      var i = Ys(t, r);
      if (i === void 0 || Js(i) || Hf(i))
        break;
      n.push(i), r += i >= 65536 ? 2 : 1;
    }
    return ia.apply(void 0, n);
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
              type: me.pound,
              location: Q(l, this.clonePosition())
            });
          } else if (a === 60 && !this.ignoreTag && this.peek() === 47) {
            if (n)
              break;
            return this.error(W.UNMATCHED_CLOSING_TAG, Q(this.clonePosition(), this.clonePosition()));
          } else if (a === 60 && !this.ignoreTag && oa(this.peek() || 0)) {
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
            type: me.literal,
            value: "<".concat(i, "/>"),
            location: Q(n, this.clonePosition())
          },
          err: null
        };
      if (this.bumpIf(">")) {
        var a = this.parseMessage(t + 1, r, !0);
        if (a.err)
          return a;
        var o = a.val, l = this.clonePosition();
        if (this.bumpIf("</")) {
          if (this.isEOF() || !oa(this.char()))
            return this.error(W.INVALID_TAG, Q(l, this.clonePosition()));
          var s = this.clonePosition(), u = this.parseTagName();
          return i !== u ? this.error(W.UNMATCHED_CLOSING_TAG, Q(s, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
            val: {
              type: me.tag,
              value: i,
              children: o,
              location: Q(n, this.clonePosition())
            },
            err: null
          } : this.error(W.INVALID_TAG, Q(l, this.clonePosition())));
        } else
          return this.error(W.UNCLOSED_TAG, Q(n, this.clonePosition()));
      } else
        return this.error(W.INVALID_TAG, Q(n, this.clonePosition()));
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
      var s = Q(n, this.clonePosition());
      return {
        val: { type: me.literal, value: i, location: s },
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
      return ia.apply(void 0, r);
    }, e.prototype.tryParseUnquoted = function(t, r) {
      if (this.isEOF())
        return null;
      var n = this.char();
      return n === 60 || n === 123 || n === 35 && (r === "plural" || r === "selectordinal") || n === 125 && t > 0 ? null : (this.bump(), ia(n));
    }, e.prototype.parseArgument = function(t, r) {
      var n = this.clonePosition();
      if (this.bump(), this.bumpSpace(), this.isEOF())
        return this.error(W.EXPECT_ARGUMENT_CLOSING_BRACE, Q(n, this.clonePosition()));
      if (this.char() === 125)
        return this.bump(), this.error(W.EMPTY_ARGUMENT, Q(n, this.clonePosition()));
      var i = this.parseIdentifierIfPossible().value;
      if (!i)
        return this.error(W.MALFORMED_ARGUMENT, Q(n, this.clonePosition()));
      if (this.bumpSpace(), this.isEOF())
        return this.error(W.EXPECT_ARGUMENT_CLOSING_BRACE, Q(n, this.clonePosition()));
      switch (this.char()) {
        case 125:
          return this.bump(), {
            val: {
              type: me.argument,
              // value does not include the opening and closing braces.
              value: i,
              location: Q(n, this.clonePosition())
            },
            err: null
          };
        case 44:
          return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(W.EXPECT_ARGUMENT_CLOSING_BRACE, Q(n, this.clonePosition())) : this.parseArgumentOptions(t, r, i, n);
        default:
          return this.error(W.MALFORMED_ARGUMENT, Q(n, this.clonePosition()));
      }
    }, e.prototype.parseIdentifierIfPossible = function() {
      var t = this.clonePosition(), r = this.offset(), n = aa(this.message, r), i = r + n.length;
      this.bumpTo(i);
      var a = this.clonePosition(), o = Q(t, a);
      return { value: n, location: o };
    }, e.prototype.parseArgumentOptions = function(t, r, n, i) {
      var a, o = this.clonePosition(), l = this.parseIdentifierIfPossible().value, s = this.clonePosition();
      switch (l) {
        case "":
          return this.error(W.EXPECT_ARGUMENT_TYPE, Q(o, s));
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
              return this.error(W.EXPECT_ARGUMENT_STYLE, Q(this.clonePosition(), this.clonePosition()));
            var v = Q(c, this.clonePosition());
            u = { style: p, styleLocation: v };
          }
          var h = this.tryParseArgumentClose(i);
          if (h.err)
            return h;
          var m = Q(i, this.clonePosition());
          if (u && mo(u == null ? void 0 : u.style, "::", 0)) {
            var E = Cf(u.style.slice(2));
            if (l === "number") {
              var d = this.parseNumberSkeletonFromString(E, u.styleLocation);
              return d.err ? d : {
                val: { type: me.number, value: n, location: m, style: d.val },
                err: null
              };
            } else {
              if (E.length === 0)
                return this.error(W.EXPECT_DATE_TIME_SKELETON, m);
              var y = E;
              this.locale && (y = hf(E, this.locale));
              var p = {
                type: rn.dateTime,
                pattern: y,
                location: u.styleLocation,
                parsedOptions: this.shouldParseSkeletons ? of(y) : {}
              }, C = l === "date" ? me.date : me.time;
              return {
                val: { type: C, value: n, location: m, style: p },
                err: null
              };
            }
          }
          return {
            val: {
              type: l === "number" ? me.number : l === "date" ? me.date : me.time,
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
            return this.error(W.EXPECT_SELECT_ARGUMENT_OPTIONS, Q(x, k({}, x)));
          this.bumpSpace();
          var g = this.parseIdentifierIfPossible(), b = 0;
          if (l !== "select" && g.value === "offset") {
            if (!this.bumpIf(":"))
              return this.error(W.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, Q(this.clonePosition(), this.clonePosition()));
            this.bumpSpace();
            var d = this.tryParseDecimalInteger(W.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, W.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);
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
          var _ = Q(i, this.clonePosition());
          return l === "select" ? {
            val: {
              type: me.select,
              value: n,
              options: go(A.val),
              location: _
            },
            err: null
          } : {
            val: {
              type: me.plural,
              value: n,
              options: go(A.val),
              offset: b,
              pluralType: l === "plural" ? "cardinal" : "ordinal",
              location: _
            },
            err: null
          };
        }
        default:
          return this.error(W.INVALID_ARGUMENT_TYPE, Q(o, s));
      }
    }, e.prototype.tryParseArgumentClose = function(t) {
      return this.isEOF() || this.char() !== 125 ? this.error(W.EXPECT_ARGUMENT_CLOSING_BRACE, Q(t, this.clonePosition())) : (this.bump(), { val: !0, err: null });
    }, e.prototype.parseSimpleArgStyleIfPossible = function() {
      for (var t = 0, r = this.clonePosition(); !this.isEOF(); ) {
        var n = this.char();
        switch (n) {
          case 39: {
            this.bump();
            var i = this.clonePosition();
            if (!this.bumpUntil("'"))
              return this.error(W.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, Q(i, this.clonePosition()));
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
        return this.error(W.INVALID_NUMBER_SKELETON, r);
      }
      return {
        val: {
          type: rn.number,
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
            var p = this.tryParseDecimalInteger(W.EXPECT_PLURAL_ARGUMENT_SELECTOR, W.INVALID_PLURAL_ARGUMENT_SELECTOR);
            if (p.err)
              return p;
            c = Q(d, this.clonePosition()), u = this.message.slice(d.offset, this.offset());
          } else
            break;
        }
        if (s.has(u))
          return this.error(r === "select" ? W.DUPLICATE_SELECT_ARGUMENT_SELECTOR : W.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, c);
        u === "other" && (o = !0), this.bumpSpace();
        var v = this.clonePosition();
        if (!this.bumpIf("{"))
          return this.error(r === "select" ? W.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : W.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, Q(this.clonePosition(), this.clonePosition()));
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
            location: Q(v, this.clonePosition())
          }
        ]), s.add(u), this.bumpSpace(), a = this.parseIdentifierIfPossible(), u = a.value, c = a.location;
      }
      return l.length === 0 ? this.error(r === "select" ? W.EXPECT_SELECT_ARGUMENT_SELECTOR : W.EXPECT_PLURAL_ARGUMENT_SELECTOR, Q(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !o ? this.error(W.MISSING_OTHER_CLAUSE, Q(this.clonePosition(), this.clonePosition())) : { val: l, err: null };
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
      var s = Q(i, this.clonePosition());
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
      if (mo(this.message, t, this.offset())) {
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
function oa(e) {
  return e >= 97 && e <= 122 || e >= 65 && e <= 90;
}
function Tf(e) {
  return oa(e) || e === 47;
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
function sa(e) {
  e.forEach(function(t) {
    if (delete t.location, Gs(t) || js(t))
      for (var r in t.options)
        delete t.options[r].location, sa(t.options[r].value);
    else Us(t) && qs(t.style) || (ks(t) || Fs(t)) && ra(t.style) ? delete t.style.location : Vs(t) && sa(t.children);
  });
}
function Lf(e, t) {
  t === void 0 && (t = {}), t = k({ shouldParseSkeletons: !0, requiresOtherClause: !0 }, t);
  var r = new Rf(e, t).parse();
  if (r.err) {
    var n = SyntaxError(W[r.err.kind]);
    throw n.location = r.err.location, n.originalMessage = r.err.message, n;
  }
  return t != null && t.captureLocation || sa(r.val), r.val;
}
var nn;
(function(e) {
  e.MISSING_VALUE = "MISSING_VALUE", e.INVALID_VALUE = "INVALID_VALUE", e.MISSING_INTL_API = "MISSING_INTL_API";
})(nn || (nn = {}));
var Ei = (
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
), _o = (
  /** @class */
  function(e) {
    At(t, e);
    function t(r, n, i, a) {
      return e.call(this, 'Invalid values for "'.concat(r, '": "').concat(n, '". Options are "').concat(Object.keys(i).join('", "'), '"'), nn.INVALID_VALUE, a) || this;
    }
    return t;
  }(Ei)
), Mf = (
  /** @class */
  function(e) {
    At(t, e);
    function t(r, n, i) {
      return e.call(this, 'Value for "'.concat(r, '" must be of type ').concat(n), nn.INVALID_VALUE, i) || this;
    }
    return t;
  }(Ei)
), Pf = (
  /** @class */
  function(e) {
    At(t, e);
    function t(r, n) {
      return e.call(this, 'The intl string context variable "'.concat(r, '" was not provided to the string "').concat(n, '"'), nn.MISSING_VALUE, n) || this;
    }
    return t;
  }(Ei)
), We;
(function(e) {
  e[e.literal = 0] = "literal", e[e.object = 1] = "object";
})(We || (We = {}));
function Df(e) {
  return e.length < 2 ? e : e.reduce(function(t, r) {
    var n = t[t.length - 1];
    return !n || n.type !== We.literal || r.type !== We.literal ? t.push(r) : n.value += r.value, t;
  }, []);
}
function Bf(e) {
  return typeof e == "function";
}
function Jn(e, t, r, n, i, a, o) {
  if (e.length === 1 && fo(e[0]))
    return [
      {
        type: We.literal,
        value: e[0].value
      }
    ];
  for (var l = [], s = 0, u = e; s < u.length; s++) {
    var c = u[s];
    if (fo(c)) {
      l.push({
        type: We.literal,
        value: c.value
      });
      continue;
    }
    if (nf(c)) {
      typeof a == "number" && l.push({
        type: We.literal,
        value: r.getNumberFormat(t).format(a)
      });
      continue;
    }
    var d = c.value;
    if (!(i && d in i))
      throw new Pf(d, o);
    var p = i[d];
    if (rf(c)) {
      (!p || typeof p == "string" || typeof p == "number") && (p = typeof p == "string" || typeof p == "number" ? String(p) : ""), l.push({
        type: typeof p == "string" ? We.literal : We.object,
        value: p
      });
      continue;
    }
    if (ks(c)) {
      var v = typeof c.style == "string" ? n.date[c.style] : ra(c.style) ? c.style.parsedOptions : void 0;
      l.push({
        type: We.literal,
        value: r.getDateTimeFormat(t, v).format(p)
      });
      continue;
    }
    if (Fs(c)) {
      var v = typeof c.style == "string" ? n.time[c.style] : ra(c.style) ? c.style.parsedOptions : n.time.medium;
      l.push({
        type: We.literal,
        value: r.getDateTimeFormat(t, v).format(p)
      });
      continue;
    }
    if (Us(c)) {
      var v = typeof c.style == "string" ? n.number[c.style] : qs(c.style) ? c.style.parsedOptions : void 0;
      v && v.scale && (p = p * (v.scale || 1)), l.push({
        type: We.literal,
        value: r.getNumberFormat(t, v).format(p)
      });
      continue;
    }
    if (Vs(c)) {
      var h = c.children, m = c.value, E = i[m];
      if (!Bf(E))
        throw new Mf(m, "function", o);
      var y = Jn(h, t, r, n, i, a), C = E(y.map(function(b) {
        return b.value;
      }));
      Array.isArray(C) || (C = [C]), l.push.apply(l, C.map(function(b) {
        return {
          type: typeof b == "string" ? We.literal : We.object,
          value: b
        };
      }));
    }
    if (Gs(c)) {
      var x = c.options[p] || c.options.other;
      if (!x)
        throw new _o(c.value, p, Object.keys(c.options), o);
      l.push.apply(l, Jn(x.value, t, r, n, i));
      continue;
    }
    if (js(c)) {
      var x = c.options["=".concat(p)];
      if (!x) {
        if (!Intl.PluralRules)
          throw new Ei(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`, nn.MISSING_INTL_API, o);
        var g = r.getPluralRules(t, { type: c.pluralType }).select(p - (c.offset || 0));
        x = c.options[g] || c.options.other;
      }
      if (!x)
        throw new _o(c.value, p, Object.keys(c.options), o);
      l.push.apply(l, Jn(x.value, t, r, n, i, p - (c.offset || 0)));
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
function Di(e) {
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
    getNumberFormat: Li(function() {
      for (var t, r = [], n = 0; n < arguments.length; n++)
        r[n] = arguments[n];
      return new ((t = Intl.NumberFormat).bind.apply(t, Gr([void 0], r, !1)))();
    }, {
      cache: Di(e.number),
      strategy: Mi.variadic
    }),
    getDateTimeFormat: Li(function() {
      for (var t, r = [], n = 0; n < arguments.length; n++)
        r[n] = arguments[n];
      return new ((t = Intl.DateTimeFormat).bind.apply(t, Gr([void 0], r, !1)))();
    }, {
      cache: Di(e.dateTime),
      strategy: Mi.variadic
    }),
    getPluralRules: Li(function() {
      for (var t, r = [], n = 0; n < arguments.length; n++)
        r[n] = arguments[n];
      return new ((t = Intl.PluralRules).bind.apply(t, Gr([void 0], r, !1)))();
    }, {
      cache: Di(e.pluralRules),
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
          return !d.length || p.type !== We.literal || typeof d[d.length - 1] != "string" ? d.push(p.value) : d[d.length - 1] += p.value, d;
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
const Zt = {}, Gf = (e, t, r) => r && (t in Zt || (Zt[t] = {}), e in Zt[t] || (Zt[t][e] = r), r), $s = (e, t) => {
  if (t == null)
    return;
  if (t in Zt && e in Zt[t])
    return Zt[t][e];
  const r = Dn(t);
  for (let n = 0; n < r.length; n++) {
    const i = r[n], a = Vf(i, e);
    if (a)
      return Gf(e, t, a);
  }
};
let Oa;
const Pn = vt({});
function jf(e) {
  return Oa[e] || null;
}
function el(e) {
  return e in Oa;
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
  delete Zt[e], Pn.update((r) => (r[e] = zc.all([r[e] || {}, ...t]), r));
}
un(
  [Pn],
  ([e]) => Object.keys(e)
);
Pn.subscribe((e) => Oa = e);
const Kn = {};
function zf(e, t) {
  Kn[e].delete(t), Kn[e].size === 0 && delete Kn[e];
}
function rl(e) {
  return Kn[e];
}
function Xf(e) {
  return Dn(e).map((t) => {
    const r = rl(t);
    return [t, r ? [...r] : []];
  }).filter(([, t]) => t.length > 0);
}
function ni(e) {
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
const pn = {};
function nl(e) {
  if (!ni(e))
    return e in pn ? pn[e] : Promise.resolve();
  const t = Xf(e);
  return pn[e] = Promise.all(
    t.map(
      ([r, n]) => Wf(r, n)
    )
  ).then(() => {
    if (ni(e))
      return nl(e);
    delete pn[e];
  }), pn[e];
}
var yo = Object.getOwnPropertySymbols, Zf = Object.prototype.hasOwnProperty, Yf = Object.prototype.propertyIsEnumerable, Qf = (e, t) => {
  var r = {};
  for (var n in e)
    Zf.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && yo)
    for (var n of yo(e))
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
    ).join('", "')}".${ni(ir()) ? `

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
function an() {
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
  )), Object.assign(_n, n, { initialLocale: i }), r && ("number" in r && Object.assign(_n.formats.number, r.number), "date" in r && Object.assign(_n.formats.date, r.date), "time" in r && Object.assign(_n.formats.time, r.time)), Cr.set(i);
}
const Bi = vt(!1);
var td = Object.defineProperty, rd = Object.defineProperties, nd = Object.getOwnPropertyDescriptors, Eo = Object.getOwnPropertySymbols, id = Object.prototype.hasOwnProperty, ad = Object.prototype.propertyIsEnumerable, wo = (e, t, r) => t in e ? td(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, od = (e, t) => {
  for (var r in t || (t = {}))
    id.call(t, r) && wo(e, r, t[r]);
  if (Eo)
    for (var r of Eo(t))
      ad.call(t, r) && wo(e, r, t[r]);
  return e;
}, sd = (e, t) => rd(e, nd(t));
let la;
const ii = vt(null);
function So(e) {
  return e.split("-").map((t, r, n) => n.slice(0, r + 1).join("-")).reverse();
}
function Dn(e, t = an().fallbackLocale) {
  const r = So(e);
  return t ? [.../* @__PURE__ */ new Set([...r, ...So(t)])] : r;
}
function ir() {
  return la ?? void 0;
}
ii.subscribe((e) => {
  la = e ?? void 0, typeof window < "u" && e != null && document.documentElement.setAttribute("lang", e);
});
const ld = (e) => {
  if (e && qf(e) && ni(e)) {
    const { loadingDelay: t } = an();
    let r;
    return typeof window < "u" && ir() != null && t ? r = window.setTimeout(
      () => Bi.set(!0),
      t
    ) : Bi.set(!0), nl(e).then(() => {
      ii.set(e);
    }).finally(() => {
      clearTimeout(r), Bi.set(!1);
    });
  }
  return ii.set(e);
}, Cr = sd(od({}, ii), {
  set: ld
}), ud = () => typeof window > "u" ? null : window.navigator.language || window.navigator.languages[0], wi = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => {
    const i = JSON.stringify(n);
    return i in t ? t[i] : t[i] = e(n);
  };
};
var cd = Object.defineProperty, ai = Object.getOwnPropertySymbols, il = Object.prototype.hasOwnProperty, al = Object.prototype.propertyIsEnumerable, Ao = (e, t, r) => t in e ? cd(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, Ha = (e, t) => {
  for (var r in t || (t = {}))
    il.call(t, r) && Ao(e, r, t[r]);
  if (ai)
    for (var r of ai(t))
      al.call(t, r) && Ao(e, r, t[r]);
  return e;
}, cn = (e, t) => {
  var r = {};
  for (var n in e)
    il.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && ai)
    for (var n of ai(e))
      t.indexOf(n) < 0 && al.call(e, n) && (r[n] = e[n]);
  return r;
};
const Cn = (e, t) => {
  const { formats: r } = an();
  if (e in r && t in r[e])
    return r[e][t];
  throw new Error(`[svelte-i18n] Unknown "${t}" ${e} format.`);
}, fd = wi(
  (e) => {
    var t = e, { locale: r, format: n } = t, i = cn(t, ["locale", "format"]);
    if (r == null)
      throw new Error('[svelte-i18n] A "locale" must be set to format numbers');
    return n && (i = Cn("number", n)), new Intl.NumberFormat(r, i);
  }
), dd = wi(
  (e) => {
    var t = e, { locale: r, format: n } = t, i = cn(t, ["locale", "format"]);
    if (r == null)
      throw new Error('[svelte-i18n] A "locale" must be set to format dates');
    return n ? i = Cn("date", n) : Object.keys(i).length === 0 && (i = Cn("date", "short")), new Intl.DateTimeFormat(r, i);
  }
), hd = wi(
  (e) => {
    var t = e, { locale: r, format: n } = t, i = cn(t, ["locale", "format"]);
    if (r == null)
      throw new Error(
        '[svelte-i18n] A "locale" must be set to format time values'
      );
    return n ? i = Cn("time", n) : Object.keys(i).length === 0 && (i = Cn("time", "short")), new Intl.DateTimeFormat(r, i);
  }
), vd = (e = {}) => {
  var t = e, {
    locale: r = ir()
  } = t, n = cn(t, [
    "locale"
  ]);
  return fd(Ha({ locale: r }, n));
}, pd = (e = {}) => {
  var t = e, {
    locale: r = ir()
  } = t, n = cn(t, [
    "locale"
  ]);
  return dd(Ha({ locale: r }, n));
}, md = (e = {}) => {
  var t = e, {
    locale: r = ir()
  } = t, n = cn(t, [
    "locale"
  ]);
  return hd(Ha({ locale: r }, n));
}, gd = wi(
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  (e, t = ir()) => new Ks(e, t, an().formats, {
    ignoreTag: an().ignoreTag
  })
), bd = (e, t = {}) => {
  var r, n, i, a;
  let o = t;
  typeof e == "object" && (o = e, e = o.id);
  const {
    values: l,
    locale: s = ir(),
    default: u
  } = o;
  if (s == null)
    throw new Error(
      "[svelte-i18n] Cannot format a message without first setting the initial locale."
    );
  let c = $s(e, s);
  if (!c)
    c = (a = (i = (n = (r = an()).handleMissingMessage) == null ? void 0 : n.call(r, { locale: s, id: e, defaultValue: u })) != null ? i : u) != null ? a : e;
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
}, _d = (e, t) => md(t).format(e), yd = (e, t) => pd(t).format(e), Ed = (e, t) => vd(t).format(e), wd = (e, t = ir()) => $s(e, t), Sd = un([Cr, Pn], () => bd);
un([Cr], () => _d);
un([Cr], () => yd);
un([Cr], () => Ed);
un([Cr, Pn], () => wd);
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
    console.log("Updating the language to", o.detail.language), Cr.set(o.detail.language);
  });
}
const xd = "Ort", Cd = "Suche", Id = "UUID", Rd = "Name", Td = "Autor", Od = "Typ", Hd = "Version", Ld = "Geändert am", Md = "Von", Pd = "Bis", Dd = "Suchergebnis", Bd = "Ort auswählen", Nd = "Filter Hinzufügen", Ud = "Filtertypen", kd = {
  location: xd,
  search: Cd,
  uuid: Id,
  name: Rd,
  author: Td,
  type: Od,
  version: Hd,
  changed_at: Ld,
  from: Md,
  to: Pd,
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
function Ae(e) {
  return typeof e == "function";
}
function ol(e) {
  var t = function(n) {
    Error.call(n), n.stack = new Error().stack;
  }, r = e(t);
  return r.prototype = Object.create(Error.prototype), r.prototype.constructor = r, r;
}
var Ni = ol(function(e) {
  return function(r) {
    e(this), this.message = r ? r.length + ` errors occurred during unsubscription:
` + r.map(function(n, i) {
      return i + 1 + ") " + n.toString();
    }).join(`
  `) : "", this.name = "UnsubscriptionError", this.errors = r;
  };
});
function xo(e, t) {
  if (e) {
    var r = e.indexOf(t);
    0 <= r && e.splice(r, 1);
  }
}
var La = function() {
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
      if (Ae(c))
        try {
          c();
        } catch (m) {
          a = m instanceof Ni ? m.errors : [m];
        }
      var d = this._finalizers;
      if (d) {
        this._finalizers = null;
        try {
          for (var p = Ht(d), v = p.next(); !v.done; v = p.next()) {
            var h = v.value;
            try {
              Co(h);
            } catch (m) {
              a = a ?? [], m instanceof Ni ? a = Gr(Gr([], ta(a)), ta(m.errors)) : a.push(m);
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
        throw new Ni(a);
    }
  }, e.prototype.add = function(t) {
    var r;
    if (t && t !== this)
      if (this.closed)
        Co(t);
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
    r === t ? this._parentage = null : Array.isArray(r) && xo(r, t);
  }, e.prototype.remove = function(t) {
    var r = this._finalizers;
    r && xo(r, t), t instanceof e && t._removeParent(this);
  }, e.EMPTY = function() {
    var t = new e();
    return t.closed = !0, t;
  }(), e;
}();
La.EMPTY;
function sl(e) {
  return e instanceof La || e && "closed" in e && Ae(e.remove) && Ae(e.add) && Ae(e.unsubscribe);
}
function Co(e) {
  Ae(e) ? e() : e.unsubscribe();
}
var th = {
  Promise: void 0
}, rh = {
  setTimeout: function(e, t) {
    for (var r = [], n = 2; n < arguments.length; n++)
      r[n - 2] = arguments[n];
    return setTimeout.apply(void 0, Gr([e, t], ta(r)));
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
function Io() {
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
    return new ua(r, n, i);
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
}(La), ih = function() {
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
}(), ua = function(e) {
  At(t, e);
  function t(r, n, i) {
    var a = e.call(this) || this, o;
    return Ae(r) || !r ? o = {
      next: r ?? void 0,
      error: n ?? void 0,
      complete: i ?? void 0
    } : o = r, a.destination = new ih(o), a;
  }
  return t;
}(Ma);
function Gn(e) {
  ll(e);
}
function ah(e) {
  throw e;
}
var oh = {
  closed: !0,
  next: Io,
  error: ah,
  complete: Io
}, Pa = function() {
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
    var i = this, a = uh(t) ? t : new ua(t, r, n);
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
    return r = Ro(r), new r(function(i, a) {
      var o = new ua({
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
  }, e.prototype[Pa] = function() {
    return this;
  }, e.prototype.pipe = function() {
    for (var t = [], r = 0; r < arguments.length; r++)
      t[r] = arguments[r];
    return sh(t)(this);
  }, e.prototype.toPromise = function(t) {
    var r = this;
    return t = Ro(t), new t(function(n, i) {
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
function Ro(e) {
  var t;
  return (t = e ?? th.Promise) !== null && t !== void 0 ? t : Promise;
}
function lh(e) {
  return e && Ae(e.next) && Ae(e.error) && Ae(e.complete);
}
function uh(e) {
  return e && e instanceof Ma || lh(e) && sl(e);
}
function ch(e) {
  return Ae(e == null ? void 0 : e.lift);
}
function fn(e) {
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
function on(e, t, r, n, i) {
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
  return e && Ae(e.schedule);
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
  return Ae(e == null ? void 0 : e.then);
}
function dl(e) {
  return Ae(e[Pa]);
}
function hl(e) {
  return Symbol.asyncIterator && Ae(e == null ? void 0 : e[Symbol.asyncIterator]);
}
function vl(e) {
  return new TypeError("You provided " + (e !== null && typeof e == "object" ? "an invalid object" : "'" + e + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
}
function mh() {
  return typeof Symbol != "function" || !Symbol.iterator ? "@@iterator" : Symbol.iterator;
}
var pl = mh();
function ml(e) {
  return Ae(e == null ? void 0 : e[pl]);
}
function gl(e) {
  return Wc(this, arguments, function() {
    var r, n, i, a;
    return Ta(this, function(o) {
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
function bl(e) {
  return Ae(e == null ? void 0 : e.getReader);
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
    var r = e[Pa]();
    if (Ae(r.subscribe))
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
    return Ta(this, function(s) {
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
function br(e, t, r, n, i) {
  n === void 0 && (n = 0), i === void 0 && (i = !1);
  var a = t.schedule(function() {
    r(), i ? e.add(this.schedule(null, n)) : this.unsubscribe();
  }, n);
  if (e.add(a), !i)
    return a;
}
function yl(e, t) {
  return t === void 0 && (t = 0), fn(function(r, n) {
    r.subscribe(on(n, function(i) {
      return br(n, e, function() {
        return n.next(i);
      }, t);
    }, function() {
      return br(n, e, function() {
        return n.complete();
      }, t);
    }, function(i) {
      return br(n, e, function() {
        return n.error(i);
      }, t);
    }));
  });
}
function El(e, t) {
  return t === void 0 && (t = 0), fn(function(r, n) {
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
    return br(r, t, function() {
      n = e[pl](), br(r, t, function() {
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
      return Ae(n == null ? void 0 : n.return) && n.return();
    };
  });
}
function wl(e, t) {
  if (!e)
    throw new Error("Iterable cannot be null");
  return new xt(function(r) {
    br(r, t, function() {
      var n = e[Symbol.asyncIterator]();
      br(r, t, function() {
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
function et(e, t) {
  return fn(function(r, n) {
    var i = 0;
    r.subscribe(on(n, function(a) {
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
    Bn(r(m, c++)).subscribe(on(t, function(y) {
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
  return e.subscribe(on(t, v, function() {
    d = !0, p();
  })), function() {
  };
}
function ca(e, t, r) {
  return r === void 0 && (r = 1 / 0), Ae(t) ? ca(function(n, i) {
    return et(function(a, o) {
      return t(n, a, i, o);
    })(Bn(e(n, i)));
  }, r) : (typeof t == "number" && (r = t), fn(function(n, i) {
    return Oh(n, i, e, r);
  }));
}
function Al(e, t) {
  return Ae(t) ? ca(e, t, 1) : ca(e, 1);
}
function Hh(e) {
  return e <= 0 ? function() {
    return dh;
  } : fn(function(t, r) {
    var n = 0;
    t.subscribe(on(r, function(i) {
      ++n <= e && (r.next(i), e <= n && r.complete());
    }));
  });
}
function Lh(e, t, r) {
  var n = Ae(e) || t || r ? { next: e, error: t, complete: r } : e;
  return n ? fn(function(i, a) {
    var o;
    (o = n.subscribe) === null || o === void 0 || o.call(n);
    var l = !0;
    i.subscribe(on(a, function(s) {
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
var Mh = /* @__PURE__ */ function() {
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
}(), oi = ol(function(e) {
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
}), Ph = function() {
  function e(t, r) {
    return oi.call(this, "ajax timeout", t, r), this.name = "AjaxTimeoutError", this;
  }
  return e.prototype = Object.create(oi.prototype), e;
}();
function Dh(e, t) {
  return ar({ method: "GET", url: e, headers: t });
}
function Bh(e, t, r) {
  return ar({ method: "POST", url: e, body: t, headers: r });
}
function Nh(e, t) {
  return ar({ method: "DELETE", url: e, headers: t });
}
function Uh(e, t, r) {
  return ar({ method: "PUT", url: e, body: t, headers: r });
}
function kh(e, t, r) {
  return ar({ method: "PATCH", url: e, body: t, headers: r });
}
var Fh = et(function(e) {
  return e.response;
});
function Gh(e, t) {
  return Fh(ar({
    method: "GET",
    url: e,
    headers: t
  }));
}
var ar = function() {
  var e = function(t) {
    var r = typeof t == "string" ? {
      url: t
    } : t;
    return Vh(r);
  };
  return e.get = Dh, e.post = Bh, e.delete = Nh, e.put = Uh, e.patch = kh, e.getJSON = Gh, e;
}(), jh = "upload", To = "download", Ui = "loadstart", ki = "progress", Oo = "load";
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
        u = new URLSearchParams(c[1]), new URLSearchParams(a).forEach(function(D, j) {
          return u.set(j, D);
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
      var b = e.progressSubscriber, A = e.includeDownloadProgress, _ = A === void 0 ? !1 : A, O = e.includeUploadProgress, N = O === void 0 ? !1 : O, L = function(D, j) {
        g.addEventListener(D, function() {
          var J, P = j();
          (J = b == null ? void 0 : b.error) === null || J === void 0 || J.call(b, P), t.error(P);
        });
      };
      L("timeout", function() {
        return new Ph(g, x);
      }), L("abort", function() {
        return new oi("aborted", g, x);
      });
      var Z = function(D, j) {
        return new Mh(j, g, x, D + "_" + j.type);
      }, ie = function(D, j, J) {
        D.addEventListener(j, function(P) {
          t.next(Z(J, P));
        });
      };
      N && [Ui, ki, Oo].forEach(function(D) {
        return ie(g.upload, D, jh);
      }), b && [Ui, ki].forEach(function(D) {
        return g.upload.addEventListener(D, function(j) {
          var J;
          return (J = b == null ? void 0 : b.next) === null || J === void 0 ? void 0 : J.call(b, j);
        });
      }), _ && [Ui, ki].forEach(function(D) {
        return ie(g, D, To);
      });
      var ee = function(D) {
        var j = "ajax error" + (D ? " " + D : "");
        t.error(new oi(j, g, x));
      };
      g.addEventListener("error", function(D) {
        var j;
        (j = b == null ? void 0 : b.error) === null || j === void 0 || j.call(b, D), ee();
      }), g.addEventListener(Oo, function(D) {
        var j, J, P = g.status;
        if (P < 400) {
          (j = b == null ? void 0 : b.complete) === null || j === void 0 || j.call(b);
          var S = void 0;
          try {
            S = Z(To, D);
          } catch (M) {
            t.error(M);
            return;
          }
          t.next(S), t.complete();
        } else
          (J = b == null ? void 0 : b.error) === null || J === void 0 || J.call(b, D), ee(P);
      });
    }
    var be = x.user, B = x.method, ue = x.async;
    be ? g.open(B, s, ue, be, x.password) : g.open(B, s, ue), ue && (g.timeout = x.timeout, g.responseType = x.responseType), "withCredentials" in g && (g.withCredentials = x.withCredentials);
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
function Da(e, t) {
  return zh.call(e) === "[object " + t + "]";
}
function Xh(e) {
  return Da(e, "ArrayBuffer");
}
function Wh(e) {
  return Da(e, "File");
}
function Zh(e) {
  return Da(e, "Blob");
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
      et((n) => (this.middleware.filter((i) => i.pre).forEach((i) => n = i.pre(n)), n)),
      Al(
        (n) => ar(n).pipe(
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
const ur = (e) => encodeURIComponent(`${e}`), iv = (e) => Object.entries(e).map(
  ([t, r]) => r instanceof Array ? r.map((n) => `${ur(t)}=${ur(n)}`).join("&") : `${ur(t)}=${ur(r)}`
).join("&"), jn = (e, t, r) => {
  if (e == null)
    throw new Error(`Parameter "${t}" was null or undefined when calling "${r}".`);
};
class av extends nv {
  retrieveDataResourceByVersion({ id: t, version: r }, n) {
    jn(t, "id", "retrieveDataResourceByVersion"), jn(r, "version", "retrieveDataResourceByVersion");
    const i = {};
    return this.request({
      url: "/api/scl/{id}/version/{version}".replace("{id}", ur(t)).replace("{version}", ur(r)),
      method: "GET",
      headers: i,
      responseType: "blob"
    }, n == null ? void 0 : n.responseOpts);
  }
  retrieveDataResourceHistory({ id: t }, r) {
    jn(t, "id", "retrieveDataResourceHistory");
    const n = {};
    return this.request({
      url: "/api/scl/{id}/versions".replace("{id}", ur(t)),
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
class Ba {
  constructor(t, r, n, i, a, o, l, s, u) {
    this.uuid = t, this.name = r, this.author = n, this.type = i, this.changedAt = a, this.version = o, this.available = l, this.deleted = s, this.location = u;
  }
  static from(t) {
    return new Ba(
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
      et((n) => (this.middleware.filter((i) => i.pre).forEach((i) => n = i.pre(n)), n)),
      Al(
        (n) => ar(n).pipe(
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
const _t = (e) => encodeURIComponent(`${e}`), fv = (e) => Object.entries(e).map(
  ([t, r]) => r instanceof Array ? r.map((n) => `${_t(t)}=${_t(n)}`).join("&") : `${_t(t)}=${_t(r)}`
).join("&"), Pt = (e, t, r) => {
  if (e == null)
    throw new Error(`Parameter "${t}" was null or undefined when calling "${r}".`);
};
class dv extends cv {
  assignResourceToLocation({ locationId: t, uuid: r }, n) {
    Pt(t, "locationId", "assignResourceToLocation"), Pt(r, "uuid", "assignResourceToLocation");
    const i = {};
    return this.request({
      url: "/api/locations/{locationId}/resources/{uuid}/assign".replace("{locationId}", _t(t)).replace("{uuid}", _t(r)),
      method: "POST",
      headers: i
    }, n == null ? void 0 : n.responseOpts);
  }
  createLocation({ location: t }, r) {
    Pt(t, "location", "createLocation");
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
    Pt(t, "locationId", "deleteLocation");
    const n = {};
    return this.request({
      url: "/api/locations/{locationId}".replace("{locationId}", _t(t)),
      method: "DELETE",
      headers: n
    }, r == null ? void 0 : r.responseOpts);
  }
  getLocation({ locationId: t }, r) {
    Pt(t, "locationId", "getLocation");
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
    Pt(t, "locationId", "unassignResourceFromLocation"), Pt(r, "uuid", "unassignResourceFromLocation");
    const i = {};
    return this.request({
      url: "/api/locations/{locationId}/resources/{uuid}/unassign".replace("{locationId}", _t(t)).replace("{uuid}", _t(r)),
      method: "POST",
      headers: i
    }, n == null ? void 0 : n.responseOpts);
  }
  updateLocation({ locationId: t, location: r }, n) {
    Pt(t, "locationId", "updateLocation"), Pt(r, "location", "updateLocation");
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
class Na {
  constructor(t, r, n, i, a) {
    this.uuid = a, this.key = t, this.name = r, this.description = n, this.assignedResources = i;
  }
  static from(t) {
    return new Na(t.key, t.name, t.description, t.assignedResources, t.uuid);
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
      et((r) => r.map((n) => Na.from(n)))
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
        (r) => r.map((n) => Ba.from(n))
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
    K(this, Ut, vt([]));
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
    return Ms(R(this, Ut)).find((r) => r.uuid === t);
  }
}
Ut = new WeakMap();
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
function vv(e, t) {
  let r = Object.getOwnPropertyNames(e);
  const n = {};
  for (let i = 0; i < r.length; i++) {
    const a = r[i], o = a.indexOf("$");
    o !== -1 && t.indexOf(a.substring(0, o + 1)) !== -1 || t.indexOf(a) === -1 && (n[a] = e[a]);
  }
  return n;
}
function Ho(e, t) {
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
function V(e, t) {
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
function mv(e, t) {
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
var Si = (
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
}, Lo = {
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
], Po = [
  "touchend",
  "pointerup",
  "mouseup",
  "contextmenu"
], qn = [], xv = (
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
        return Lo;
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
          for (var a = Ht(Po), o = a.next(); !o.done; o = a.next()) {
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
        for (var i = Ht(Po), a = i.next(); !a.done; a = i.next()) {
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
      }, Lo.FG_DEACTIVATION_MS));
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
  }(Si)
);
const { applyPassive: Do } = yv, { matches: Cv } = Tl;
function Ol(e, { ripple: t = !0, surface: r = !1, unbounded: n = !1, disabled: i = !1, color: a, active: o, rippleElement: l, eventTarget: s, activeTarget: u, addClass: c = (h) => e.classList.add(h), removeClass: d = (h) => e.classList.remove(h), addStyle: p = (h, m) => e.style.setProperty(h, m), initPromise: v = Promise.resolve() } = {}) {
  let h, m = new pv(), E = fe("SMUI:addLayoutListener"), y, C = o, x = s, g = u;
  function b() {
    r ? (c("mdc-ripple-surface"), a === "primary" ? (c("smui-ripple-surface--primary"), d("smui-ripple-surface--secondary")) : a === "secondary" ? (d("smui-ripple-surface--primary"), c("smui-ripple-surface--secondary")) : (d("smui-ripple-surface--primary"), d("smui-ripple-surface--secondary"))) : (d("mdc-ripple-surface"), d("smui-ripple-surface--primary"), d("smui-ripple-surface--secondary")), h && C !== o && (C = o, o ? h.activate() : o === !1 && h.deactivate()), t && !h ? (h = new xv({
      addClass: c,
      browserSupportsCssVars: () => mv(window),
      computeBoundingRect: () => (l || e).getBoundingClientRect(),
      containsEventTarget: (_) => e.contains(_),
      deregisterDocumentInteractionHandler: (_, O) => m.off(document.documentElement, _, O),
      deregisterInteractionHandler: (_, O) => m.off(s || e, _, O),
      deregisterResizeHandler: (_) => window.removeEventListener("resize", _),
      getWindowPageOffset: () => {
        var _, O;
        return {
          x: (_ = window.pageXOffset) !== null && _ !== void 0 ? _ : window.scrollX,
          y: (O = window.pageYOffset) !== null && O !== void 0 ? O : window.scrollY
        };
      },
      isSurfaceActive: () => o ?? Cv(u || e, ":active"),
      isSurfaceDisabled: () => !!i,
      isUnbounded: () => !!n,
      registerDocumentInteractionHandler: (_, O) => {
        const N = Do();
        m.on(document.documentElement, _, O, typeof N == "boolean" ? { capture: N } : N);
      },
      registerInteractionHandler: (_, O) => {
        const N = Do();
        m.on(s || e, _, O, typeof N == "boolean" ? { capture: N } : N);
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
      } = Object.assign({ ripple: !0, surface: !1, unbounded: !1, disabled: !1, color: void 0, active: void 0, rippleElement: void 0, eventTarget: void 0, activeTarget: void 0, addClass: (O) => e.classList.add(O), removeClass: (O) => e.classList.remove(O), addStyle: (O, N) => e.style.setProperty(O, N), initPromise: Promise.resolve() }, _)), b();
    },
    destroy() {
      h && (h.destroy(), h = void 0, m.clear(), d("mdc-ripple-surface"), d("smui-ripple-surface--primary"), d("smui-ripple-surface--secondary")), y && y();
    }
  };
}
function Iv(e, t) {
  De(t, !0);
  let r = I(t, "use", 19, () => []), n = I(t, "class", 3, ""), i = I(t, "on", 3, !1), a = I(t, "component", 3, Ua), o = I(t, "tag", 3, "i"), l = /* @__PURE__ */ St(t, [
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
  const u = /* @__PURE__ */ Ee(() => o() === "svg" || a() === Ov), c = fe("SMUI:icon:context");
  function d() {
    return s.getElement();
  }
  var p = { getElement: d }, v = $(), h = X(v);
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
    _i(h, a, (E, y) => {
      ze(
        y(E, yi(
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
              var g = $(), b = X(g);
              Pe(b, () => t.children ?? de), H(C, g);
            },
            $$slots: { default: !0 }
          }
        )),
        (C) => s = C,
        () => s
      );
    });
  }
  return H(e, v), Be(p);
}
var Rv = /* @__PURE__ */ mt("<svg><!></svg>");
function Ua(e, t) {
  De(t, !0);
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
  var s = { getElement: l }, u = $(), c = X(u);
  {
    var d = (v) => {
      var h = Rv();
      ot(h, () => ({ ...i }));
      var m = ne(h);
      Pe(m, () => t.children ?? de), ze(h, (E) => o = E, () => o), at(h, (E, y) => V == null ? void 0 : V(E, y), r), H(v, h);
    }, p = (v) => {
      var h = $(), m = X(h);
      {
        var E = (C) => {
          var x = $(), g = X(x);
          no(g, n, !1, (b, A) => {
            ze(b, (_) => o = _, () => o), at(b, (_, O) => V == null ? void 0 : V(_, O), r), ot(b, () => ({ ...i }));
          }), H(C, x);
        }, y = (C) => {
          var x = $(), g = X(x);
          no(g, n, !1, (b, A) => {
            ze(b, (N) => o = N, () => o), at(b, (N, L) => V == null ? void 0 : V(N, L), r), ot(b, () => ({ ...i }));
            var _ = $(), O = X(_);
            Pe(O, () => t.children ?? de), H(A, _);
          }), H(C, x);
        };
        oe(
          m,
          (C) => {
            f(a) ? C(E) : C(y, !1);
          },
          !0
        );
      }
      H(v, h);
    };
    oe(c, (v) => {
      n() === "svg" ? v(d) : v(p, !1);
    });
  }
  return H(e, u), Be(s);
}
var Tv = /* @__PURE__ */ mt("<svg><!></svg>");
function Ov(e, t) {
  De(t, !0), console && console.warn && console.warn('The @smui/common Svg component is deprecated. You can use `tag="svg"` now.');
  let r = I(t, "use", 19, () => []), n = /* @__PURE__ */ St(t, ["$$slots", "$$events", "$$legacy", "use", "children"]), i;
  function a() {
    return i;
  }
  var o = { getElement: a }, l = Tv();
  ot(l, () => ({ ...n }));
  var s = ne(l);
  return Pe(s, () => t.children ?? de), ze(l, (u) => i = u, () => i), at(l, (u, c) => V == null ? void 0 : V(u, c), r), H(e, l), Be(o);
}
var Hv = /* @__PURE__ */ he('<div class="mdc-button__touch"></div>'), Lv = /* @__PURE__ */ he('<div class="mdc-button__ripple"></div> <!><!>', 1);
function Mv(e, t) {
  De(t, !0);
  let r = I(t, "use", 19, () => []), n = I(t, "class", 3, ""), i = I(t, "style", 3, ""), a = I(t, "ripple", 3, !0), o = I(t, "color", 3, "primary"), l = I(t, "variant", 3, "text"), s = I(t, "touch", 3, !1), u = I(t, "action", 3, "close"), c = I(t, "defaultAction", 3, !1), d = I(t, "secondary", 3, !1), p = I(t, "component", 3, Ua), v = I(t, "tag", 19, () => t.href == null ? "button" : "a"), h = /* @__PURE__ */ St(t, [
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
  ]), m, E = re({}), y = re({}), C = fe("SMUI:button:context");
  const x = /* @__PURE__ */ Ee(() => C === "dialog:action" && u() != null ? { "data-mdc-dialog-action": u() } : { action: u() }), g = /* @__PURE__ */ Ee(() => C === "dialog:action" && c() ? { "data-mdc-dialog-button-default": "" } : {}), b = /* @__PURE__ */ Ee(() => C === "banner" ? {} : { secondary: d() });
  let A = t.disabled;
  Le(() => {
    if (A !== t.disabled) {
      if (m) {
        const B = Z();
        "blur" in B && B.blur();
      }
      A = h.disabled;
    }
  }), te("SMUI:label:context", "button"), te("SMUI:icon:context", "button");
  function _(B) {
    E[B] || (E[B] = !0);
  }
  function O(B) {
    (!(B in E) || E[B]) && (E[B] = !1);
  }
  function N(B, ue) {
    y[B] != ue && (ue === "" || ue == null ? delete y[B] : y[B] = ue);
  }
  function L() {
    C === "banner" && dt(Z(), d() ? "SMUIBannerButtonSecondaryActionClick" : "SMUIBannerButtonPrimaryActionClick");
  }
  function Z() {
    return m.getElement();
  }
  var ie = { getElement: Z }, ee = $(), be = X(ee);
  {
    let B = /* @__PURE__ */ Ee(() => [
      [
        Ol,
        {
          ripple: a(),
          unbounded: !1,
          color: o(),
          disabled: !!t.disabled,
          addClass: _,
          removeClass: O,
          addStyle: N
        }
      ],
      ...r()
    ]), ue = /* @__PURE__ */ Ee(() => wt({
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
    })), D = /* @__PURE__ */ Ee(() => Object.entries(y).map(([j, J]) => `${j}: ${J};`).concat([i()]).join(" "));
    _i(be, p, (j, J) => {
      ze(
        J(j, yi(
          {
            get tag() {
              return v();
            },
            get use() {
              return f(B);
            },
            get class() {
              return f(ue);
            },
            get style() {
              return f(D);
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
            onclick: (P) => {
              var S;
              L(), (S = t.onclick) == null || S.call(t, P);
            },
            children: (P, S) => {
              var M = Lv(), xe = Me(X(M), 2);
              Pe(xe, () => t.children ?? de);
              var Se = Me(xe);
              {
                var pe = (Y) => {
                  var ae = Hv();
                  H(Y, ae);
                };
                oe(Se, (Y) => {
                  s() && Y(pe);
                });
              }
              H(P, M);
            },
            $$slots: { default: !0 }
          }
        )),
        (P) => m = P,
        () => m
      );
    });
  }
  return H(e, ee), Be(ie);
}
function Pv(e, t) {
  De(t, !0);
  let r = I(t, "callback", 3, () => {
  }), n = I(t, "disabled", 3, !1), i = I(t, "variant", 3, "default"), a = I(t, "isAbortAction", 3, !1), o = I(t, "backgroundColor", 3, void 0);
  {
    let l = /* @__PURE__ */ Ee(() => a() ? "background-color: #ff3e00;" : "background-color: " + o());
    Mv(e, {
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
        var c = $(), d = X(c);
        Pe(d, () => t.children ?? de), H(s, c);
      },
      $$slots: { default: !0 }
    });
  }
  Be();
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
        return zn;
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
      return this.adapter.hasClass(zn.ICON_BUTTON_ON);
    }, t.prototype.toggle = function(r) {
      if (r === void 0 && (r = !this.isOn()), r ? this.adapter.addClass(zn.ICON_BUTTON_ON) : this.adapter.removeClass(zn.ICON_BUTTON_ON), this.hasToggledAriaLabel) {
        var n = r ? this.adapter.getAttr(Dt.DATA_ARIA_LABEL_ON) : this.adapter.getAttr(Dt.DATA_ARIA_LABEL_OFF);
        this.adapter.setAttr(Dt.ARIA_LABEL, n || "");
      } else
        this.adapter.setAttr(Dt.ARIA_PRESSED, "" + r);
    }, t;
  }(Si)
), Bv = /* @__PURE__ */ he('<div class="mdc-icon-button__touch"></div>'), Nv = /* @__PURE__ */ he('<div class="mdc-icon-button__ripple"></div> <!><!>', 1);
function Uv(e, t) {
  De(t, !0);
  let r = () => {
  };
  function n(S) {
    return S === r;
  }
  let i = I(t, "use", 19, () => []), a = I(t, "class", 3, ""), o = I(t, "style", 3, ""), l = I(t, "ripple", 3, !0), s = I(t, "toggle", 3, !1), u = I(t, "pressed", 15, r), c = I(t, "touch", 3, !1), d = I(t, "displayFlex", 3, !0), p = I(t, "size", 3, "normal"), v = I(t, "component", 3, Ua), h = I(t, "tag", 19, () => t.href == null ? "button" : "a"), m = /* @__PURE__ */ St(t, [
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
  ]), E, y, C = /* @__PURE__ */ le(re({})), x = re({}), g = /* @__PURE__ */ le(re({})), b = fe("SMUI:icon-button:context"), A = fe("SMUI:icon-button:aria-describedby");
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
  let O = !!t.disabled;
  Le(() => {
    if (O != !!t.disabled) {
      if (E) {
        const S = D();
        "blur" in S && S.blur();
      }
      O = !!t.disabled;
    }
  }), te("SMUI:icon:context", "icon-button");
  let N = null;
  Le(() => {
    E && D() && s() !== N && (s() && !y ? (y = new Dv({
      addClass: Z,
      hasClass: L,
      notifyChange: (S) => {
        ue(S), dt(D(), "SMUIIconButtonToggleChange", S);
      },
      removeClass: ie,
      getAttr: be,
      setAttr: B
    }), y.init()) : !s() && y && (y.destroy(), y = void 0, G(C, {}, !0), G(g, {}, !0)), N = s());
  }), Le(() => {
    y && !n(u()) && y.isOn() !== u() && y.toggle(u());
  }), Ca(() => {
    y && y.destroy();
  });
  function L(S) {
    return S in f(C) ? f(C)[S] : D().classList.contains(S);
  }
  function Z(S) {
    f(C)[S] || (f(C)[S] = !0);
  }
  function ie(S) {
    (!(S in f(C)) || f(C)[S]) && (f(C)[S] = !1);
  }
  function ee(S, M) {
    x[S] != M && (M === "" || M == null ? delete x[S] : x[S] = M);
  }
  function be(S) {
    return S in f(g) ? f(g)[S] ?? null : D().getAttribute(S);
  }
  function B(S, M) {
    f(g)[S] !== M && (f(g)[S] = M);
  }
  function ue(S) {
    u(S.isOn);
  }
  function D() {
    return E.getElement();
  }
  var j = { getElement: D }, J = $(), P = X(J);
  {
    let S = /* @__PURE__ */ Ee(() => [
      [
        Ol,
        {
          ripple: l(),
          unbounded: !0,
          color: t.color,
          disabled: !!t.disabled,
          addClass: Z,
          removeClass: ie,
          addStyle: ee
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
    })), xe = /* @__PURE__ */ Ee(() => Object.entries(x).map(([Y, ae]) => `${Y}: ${ae};`).concat([o()]).join(" ")), Se = /* @__PURE__ */ Ee(() => n(u()) ? null : u() ? "true" : "false"), pe = /* @__PURE__ */ Ee(() => u() ? t.ariaLabelOn : t.ariaLabelOff);
    _i(P, v, (Y, ae) => {
      ze(
        ae(Y, yi(
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
              return f(xe);
            },
            get "aria-pressed"() {
              return f(Se);
            },
            get "aria-label"() {
              return f(pe);
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
            onclick: (_e) => {
              var Ce;
              y && y.handleClick(), b === "top-app-bar:navigation" && dt(D(), "SMUITopAppBarIconButtonNav"), (Ce = t.onclick) == null || Ce.call(t, _e);
            },
            children: (_e, Ce) => {
              var Xe = Nv(), ce = Me(X(Xe), 2);
              Pe(ce, () => t.children ?? de);
              var Te = Me(ce);
              {
                var Ie = (ye) => {
                  var ge = Bv();
                  H(ye, ge);
                };
                oe(Te, (ye) => {
                  c() && ye(Ie);
                });
              }
              H(_e, Xe);
            },
            $$slots: { default: !0 }
          }
        )),
        (_e) => E = _e,
        () => E
      );
    });
  }
  return H(e, J), Be(j);
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
          var u = Ji();
          we(() => Kt(u, n())), H(l, u);
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
var Bo = {
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
  if (Fv(e) && t in Bo) {
    var r = e.document.createElement("div"), n = Bo[t], i = n.standard, a = n.prefixed, o = i in r.style;
    return o ? i : a;
  }
  return t;
}
const Ue = [];
for (let e = 0; e < 256; ++e)
  Ue.push((e + 256).toString(16).slice(1));
function jv(e, t = 0) {
  return (Ue[e[t + 0]] + Ue[e[t + 1]] + Ue[e[t + 2]] + Ue[e[t + 3]] + "-" + Ue[e[t + 4]] + Ue[e[t + 5]] + "-" + Ue[e[t + 6]] + Ue[e[t + 7]] + "-" + Ue[e[t + 8]] + Ue[e[t + 9]] + "-" + Ue[e[t + 10]] + Ue[e[t + 11]] + Ue[e[t + 12]] + Ue[e[t + 13]] + Ue[e[t + 14]] + Ue[e[t + 15]]).toLowerCase();
}
let Fi;
const Vv = new Uint8Array(16);
function qv() {
  if (!Fi) {
    if (typeof crypto > "u" || !crypto.getRandomValues)
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    Fi = crypto.getRandomValues.bind(crypto);
  }
  return Fi(Vv);
}
const zv = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), No = { randomUUID: zv };
function Xv(e, t, r) {
  var i;
  if (No.randomUUID && !t && !e)
    return No.randomUUID();
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
var Wv = /* @__PURE__ */ he('<span class="oscd-icon"><!></span>');
function or(e, t) {
  var r = Wv(), n = ne(r);
  Pe(n, () => t.children ?? de), H(e, r);
}
var Zv = /* @__PURE__ */ mt('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"></path></svg>');
function Yv(e, t) {
  let r = I(t, "svgStyles", 3, "");
  or(e, {
    children: (n, i) => {
      var a = Zv();
      we(() => lt(a, r())), H(n, a);
    }
  });
}
var Qv = /* @__PURE__ */ mt('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="24px"><path d="m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"></path></svg>');
function Jv(e, t) {
  let r = I(t, "svgStyles", 3, "");
  or(e, {
    children: (n, i) => {
      var a = Qv();
      we(() => lt(a, r())), H(n, a);
    }
  });
}
var Kv = /* @__PURE__ */ mt('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z"></path></svg>');
function $v(e, t) {
  let r = I(t, "svgStyles", 3, "");
  or(e, {
    children: (n, i) => {
      var a = Kv();
      we(() => lt(a, r())), H(n, a);
    }
  });
}
var ep = /* @__PURE__ */ mt('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="m590-160 80 80H240q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h360l200 240v480q0 20-8.5 36.5T768-96L560-302q-17 11-37 16.5t-43 5.5q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 23-5.5 43T618-360l102 104v-356L562-800H240v640h350ZM480-360q33 0 56.5-23.5T560-440q0-33-23.5-56.5T480-520q-33 0-56.5 23.5T400-440q0 33 23.5 56.5T480-360Zm0-80Zm0 0Z"></path></svg>');
function tp(e, t) {
  let r = I(t, "svgStyles", 3, "");
  or(e, {
    children: (n, i) => {
      var a = ep();
      we(() => lt(a, r())), H(n, a);
    }
  });
}
var rp = /* @__PURE__ */ mt('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-160q-134 0-227-93t-93-227q0-134 93-227t227-93q69 0 132 28.5T720-690v-110h80v280H520v-80h168q-32-56-87.5-88T480-720q-100 0-170 70t-70 170q0 100 70 170t170 70q77 0 139-44t87-116h84q-28 106-114 173t-196 67Z"></path></svg>');
function np(e, t) {
  let r = I(t, "svgStyles", 3, "");
  or(e, {
    children: (n, i) => {
      var a = rp();
      we(() => lt(a, r())), H(n, a);
    }
  });
}
var ip = /* @__PURE__ */ mt('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M200-440v-80h560v80H200Z"></path></svg>');
function ap(e, t) {
  let r = I(t, "svgStyles", 3, "");
  or(e, {
    children: (n, i) => {
      var a = ip();
      we(() => lt(a, r())), H(n, a);
    }
  });
}
var op = /* @__PURE__ */ mt('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"></path></svg>');
function sp(e, t) {
  let r = I(t, "svgStyles", 3, "");
  or(e, {
    children: (n, i) => {
      var a = op();
      we(() => lt(a, r())), H(n, a);
    }
  });
}
var lp = /* @__PURE__ */ mt('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"></path></svg>');
function up(e, t) {
  let r = I(t, "svgStyles", 3, "");
  or(e, {
    children: (n, i) => {
      var a = lp();
      we(() => lt(a, r())), H(n, a);
    }
  });
}
wu();
Vt(["change"]);
var cp = /* @__PURE__ */ he('<div class="overlay svelte-14uvd2z"><div class="loading-spinner-container svelte-14uvd2z"><div class="loading-spinner svelte-14uvd2z"></div> <span class="loading-message svelte-14uvd2z"> </span></div></div>'), fp = /* @__PURE__ */ he('<div class="svelte-14uvd2z"><!></div>');
function dp(e, t) {
  let r = I(t, "loadingDone", 3, !0), n = I(t, "message", 3, "Loading...");
  var i = fp(), a = ne(i);
  {
    var o = (l) => {
      var s = cp(), u = ne(s), c = Me(ne(u), 2), d = ne(c);
      we(() => Kt(d, n())), H(l, s);
    };
    oe(a, (l) => {
      r() || l(o);
    });
  }
  H(e, i);
}
Vt(["change"]);
var hp = /* @__PURE__ */ he('<span role="tooltip" aria-labelledby="tooltip"><!></span>');
function Uo(e, t) {
  De(t, !0);
  let r = I(t, "content", 3, ""), n = I(t, "side", 3, "top"), i = I(t, "hoverDelay", 3, 0), a = I(t, "transitionDuration", 3, 80);
  const o = `tt-${Math.random().toString(36).slice(2)}`;
  let l = /* @__PURE__ */ le(null), s = /* @__PURE__ */ le(null), u = /* @__PURE__ */ le(null), c = /* @__PURE__ */ le(null), d = /* @__PURE__ */ le(!1), p = /* @__PURE__ */ le(null), v = /* @__PURE__ */ le(null);
  function h() {
    r() && (i() > 0 ? G(p, setTimeout(() => G(d, !0), i()), !0) : G(d, !0));
  }
  function m() {
    f(p) && clearTimeout(f(p)), G(d, !1);
  }
  function E() {
    if (!f(s) || !f(c) || !f(l)) return;
    const g = f(l).getBoundingClientRect(), b = f(c).getBoundingClientRect();
    let A = 0, _ = 0;
    const O = 8;
    switch (n()) {
      case "top":
        A = g.top - b.height - O, _ = g.left + g.width / 2 - b.width / 2;
        break;
      case "bottom":
        A = g.bottom + O, _ = g.left + g.width / 2 - b.width / 2;
        break;
      case "left":
        A = g.top + g.height / 2 - b.height / 2, _ = g.left - b.width - O;
        break;
      case "right":
        A = g.top + g.height / 2 - b.height / 2, _ = g.right + O;
        break;
    }
    f(s).style.top = `${A + window.scrollY}px`, f(s).style.left = `${_ + window.scrollX}px`;
  }
  function y() {
    var g;
    (g = f(v)) == null || g.disconnect(), G(v, null), f(s) && f(s).parentNode && f(s).parentNode.removeChild(f(s)), G(s, null), G(c, null), G(u, null), f(p) && clearTimeout(f(p));
  }
  Ca(y), Le(() => {
    if (!(!f(d) || !r())) {
      if (!f(s)) {
        G(s, document.createElement("div"), !0), f(s).style.position = "absolute", f(s).style.zIndex = "9999", f(s).style.pointerEvents = "none", f(s).style.opacity = "0", f(s).style.transition = `opacity ${a()}ms ease`, f(s).id = o, f(s).setAttribute("role", "tooltip"), document.body.appendChild(f(s)), G(u, f(s).attachShadow({ mode: "open" }), !0);
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
      `, f(u).appendChild(g), G(c, document.createElement("div"), !0), f(u).appendChild(f(c)), G(
          v,
          new MutationObserver(() => {
            f(d) && E();
          }),
          !0
        ), f(v).observe(document.body, { childList: !0, subtree: !0 });
      }
      f(c) && (f(c).className = `bubble ${n()}`, f(c).innerHTML = r()), f(s) && (f(s).style.opacity = "1", E());
    }
  }), Le(() => {
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
  var C = hp(), x = ne(C);
  Pe(x, () => t.children ?? de), ze(C, (g) => G(l, g), () => f(l)), we(() => en(C, "aria-describedby", r() ? o : void 0)), to("mouseenter", C, h), to("mouseleave", C, m), H(e, C), Be();
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
}, mn = {
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
      var n = "scaleX(" + r + ")", i = typeof window < "u" ? Gv(window, "transform") : "transform";
      this.adapter.setPrimaryBarStyle(i, n);
    }, t.prototype.setBufferBarProgress = function(r) {
      var n = r * 100 + "%";
      this.adapter.setBufferBarStyle(gt.FLEX_BASIS, n);
    }, t.prototype.calculateAndSetDimensions = function(r) {
      var n = r * mn.PRIMARY_HALF, i = r * mn.PRIMARY_FULL, a = r * mn.SECONDARY_QUARTER, o = r * mn.SECONDARY_HALF, l = r * mn.SECONDARY_FULL;
      this.adapter.setStyle("--mdc-linear-progress-primary-half", n + "px"), this.adapter.setStyle("--mdc-linear-progress-primary-half-neg", -n + "px"), this.adapter.setStyle("--mdc-linear-progress-primary-full", i + "px"), this.adapter.setStyle("--mdc-linear-progress-primary-full-neg", -i + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-quarter", a + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-quarter-neg", -a + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-half", o + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-half-neg", -o + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-full", l + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-full-neg", -l + "px"), this.restartAnimation();
    }, t;
  }(Si)
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
}, ko = {
  ARIA_SELECTED: "aria-selected",
  ARIA_SORT: "aria-sort"
}, sr = {
  ARIA_SELECTED: ko.ARIA_SELECTED,
  ARIA_SORT: ko.ARIA_SORT
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
        return Ta(this, function(r) {
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
        o !== i && (this.adapter.removeClassNameByHeaderCellIndex(o, Bt.HEADER_CELL_SORTED), this.adapter.removeClassNameByHeaderCellIndex(o, Bt.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(o, sr.ARIA_SORT, it.NONE), this.adapter.setSortStatusLabelByHeaderCellIndex(o, it.NONE));
      this.adapter.setClassNameByHeaderCellIndex(i, Bt.HEADER_CELL_SORTED);
      var l = this.adapter.getAttributeByHeaderCellIndex(i, sr.ARIA_SORT), s = it.NONE;
      l === it.ASCENDING ? (this.adapter.setClassNameByHeaderCellIndex(i, Bt.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(i, sr.ARIA_SORT, it.DESCENDING), s = it.DESCENDING) : l === it.DESCENDING ? (this.adapter.removeClassNameByHeaderCellIndex(i, Bt.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(i, sr.ARIA_SORT, it.ASCENDING), s = it.ASCENDING) : (this.adapter.setAttributeByHeaderCellIndex(i, sr.ARIA_SORT, it.ASCENDING), s = it.ASCENDING), this.adapter.setSortStatusLabelByHeaderCellIndex(i, s), this.adapter.notifySortAction({
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
      n ? (this.adapter.addClassAtRowIndex(r, Bt.ROW_SELECTED), this.adapter.setAttributeAtRowIndex(r, sr.ARIA_SELECTED, "true")) : (this.adapter.removeClassAtRowIndex(r, Bt.ROW_SELECTED), this.adapter.setAttributeAtRowIndex(r, sr.ARIA_SELECTED, "false"));
    }, t;
  }(Si)
), mp = /* @__PURE__ */ he('<div class="mdc-data-table__progress-indicator"><div class="mdc-data-table__scrim"></div> <!></div>'), gp = /* @__PURE__ */ he("<div><div><table><!></table></div> <!> <!></div>");
function bp(e, t) {
  De(t, !0);
  const r = () => gr(ee, "$progressClosed", n), [n, i] = Mn(), { closest: a } = Tl;
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
  ]), x, g = /* @__PURE__ */ le(void 0), b, A = /* @__PURE__ */ le(void 0), _ = /* @__PURE__ */ le(void 0), O = re({}), N = /* @__PURE__ */ le(re({ height: "auto", top: "initial" })), L = fe("SMUI:addLayoutListener"), Z, ie = !1, ee = vt(!1), be = vt(c());
  Le(() => {
    $i(be, c());
  });
  let B = vt(d());
  Le(() => {
    $i(B, d());
  }), te("SMUI:checkbox:context", "data-table"), te("SMUI:linear-progress:context", "data-table"), te("SMUI:linear-progress:closed", ee), te("SMUI:data-table:sortable", u()), te("SMUI:data-table:sort", be), te("SMUI:data-table:sortDirection", B), te("SMUI:data-table:sortAscendingAriaLabel", p()), te("SMUI:data-table:sortDescendingAriaLabel", v()), L && (Z = L(Se));
  let ue;
  Le(() => {
    t.progress && f(g) && ue !== r() && (ue = r(), r() ? f(g).hideProgress() : f(g).showProgress());
  }), te("SMUI:checkbox:mount", () => {
    f(g) && ie && f(g).layout();
  }), te("SMUI:data-table:header:mount", (w) => {
    G(A, w, !0);
  }), te("SMUI:data-table:header:unmount", () => {
    G(A, void 0);
  }), te("SMUI:data-table:body:mount", (w) => {
    G(_, w, !0);
  }), te("SMUI:data-table:body:unmount", () => {
    G(_, void 0);
  }), Ft(() => (G(
    g,
    new pp({
      addClass: j,
      removeClass: J,
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
        var Re;
        (Re = f(A)) == null || Re.orderedCells[w].addAttr(T, U);
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
        c(w.columnId), d(w.sortValue), dt(pe(), "SMUIDataTableSorted", w);
      },
      getTableContainerHeight: () => b.getBoundingClientRect().height,
      getTableHeaderHeight: () => {
        const w = pe().querySelector(".mdc-data-table__header-row");
        if (!w)
          throw new Error("MDCDataTable: Table header element not found.");
        return w.getBoundingClientRect().height;
      },
      setProgressIndicatorStyles: (w) => {
        G(N, w, !0);
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
      isRowsSelectable: () => !!pe().querySelector(".mdc-data-table__row-checkbox") || !!pe().querySelector(".mdc-data-table__header-row-checkbox"),
      notifyRowSelectionChanged: (w) => {
        var U;
        const T = (U = f(_)) == null ? void 0 : U.orderedRows[w.rowIndex];
        T && dt(pe(), "SMUIDataTableSelectionChanged", {
          row: T.element,
          rowId: T.rowId,
          rowIndex: w.rowIndex,
          selected: w.selected
        });
      },
      notifySelectedAll: () => {
        P(!1), dt(pe(), "SMUIDataTableSelectedAll");
      },
      notifyUnselectedAll: () => {
        P(!1), dt(pe(), "SMUIDataTableUnselectedAll");
      },
      notifyRowClick: (w) => dt(pe(), "SMUIDataTableClickRow", w),
      registerHeaderRowCheckbox: () => {
      },
      registerRowCheckboxes: () => {
      },
      removeClassAtRowIndex: (w, T) => {
        var U;
        (U = f(_)) == null || U.orderedRows[w].removeClass(T);
      },
      setAttributeAtRowIndex: (w, T, U) => {
        var Re;
        (Re = f(_)) == null || Re.orderedRows[w].addAttr(T, U);
      },
      setHeaderRowCheckboxChecked: (w) => {
        var U;
        const T = (U = f(A)) == null ? void 0 : U.checkbox;
        T && (T.checked = w);
      },
      setHeaderRowCheckboxIndeterminate: P,
      setRowCheckboxCheckedAtIndex: (w, T) => {
        var Re;
        const U = (Re = f(_)) == null ? void 0 : Re.orderedRows[w].checkbox;
        U && (U.checked = T);
      },
      setSortStatusLabelByHeaderCellIndex: (w, T) => {
      }
    }),
    !0
  ), f(g).init(), f(g).layout(), ie = !0, () => {
    var w;
    (w = f(g)) == null || w.destroy();
  })), Ca(() => {
    Z && Z();
  });
  function D(w) {
    f(g) && f(g).handleRowCheckboxChange(w);
  }
  function j(w) {
    O[w] || (O[w] = !0);
  }
  function J(w) {
    (!(w in O) || O[w]) && (O[w] = !1);
  }
  function P(w) {
    var U;
    const T = (U = f(A)) == null ? void 0 : U.checkbox;
    T && (T.indeterminate = w);
  }
  function S(w) {
    if (!f(g) || !w.detail.target)
      return;
    const T = a(w.detail.target, ".mdc-data-table__header-cell--with-sort");
    T && xe(T);
  }
  function M(w) {
    if (!f(g) || !w.detail.target)
      return;
    const T = a(w.detail.target, ".mdc-data-table__row");
    T && f(g) && f(g).handleRowClick({ rowId: w.detail.rowId, row: T });
  }
  function xe(w) {
    var Ir, Nn;
    const T = ((Ir = f(A)) == null ? void 0 : Ir.orderedCells) ?? [], U = T.map((Ai) => Ai.element).indexOf(w);
    if (U === -1)
      return;
    const Re = T[U].columnId ?? null;
    (Nn = f(g)) == null || Nn.handleSortAction({ columnId: Re, columnIndex: U, headerCell: w });
  }
  function Se() {
    var w;
    return (w = f(g)) == null ? void 0 : w.layout();
  }
  function pe() {
    return x;
  }
  var Y = { layout: Se, getElement: pe }, ae = gp(), _e = (w) => {
    var T;
    f(g) && f(g).handleHeaderRowCheckboxChange(), (T = t.onSMUIDataTableHeaderCheckboxChange) == null || T.call(t, w);
  }, Ce = (w) => {
    var T;
    S(w), (T = t.onSMUIDataTableHeaderClick) == null || T.call(t, w);
  }, Xe = (w) => {
    var T;
    M(w), (T = t.onSMUIDataTableRowClick) == null || T.call(t, w);
  }, ce = (w) => {
    var T;
    D(w), (T = t.onSMUIDataTableBodyCheckboxChange) == null || T.call(t, w);
  };
  ot(
    ae,
    (w, T) => ({
      class: w,
      ...T,
      onSMUIDataTableHeaderCheckboxChange: _e,
      onSMUIDataTableHeaderClick: Ce,
      onSMUIDataTableRowClick: Xe,
      onSMUIDataTableBodyCheckboxChange: ce
    }),
    [
      () => wt({
        "mdc-data-table": !0,
        "mdc-data-table--sticky-header": s(),
        ...O,
        [l()]: !0
      }),
      () => vv(C, ["container$", "table$"])
    ]
  );
  var Te = ne(ae);
  ot(Te, (w, T) => ({ class: w, ...T }), [
    () => wt({
      "mdc-data-table__table-container": !0,
      [m()]: !0
    }),
    () => Ho(C, "container$")
  ]);
  var Ie = ne(Te);
  ot(Ie, (w, T) => ({ class: w, ...T }), [
    () => wt({ "mdc-data-table__table": !0, [y()]: !0 }),
    () => Ho(C, "table$")
  ]);
  var ye = ne(Ie);
  Pe(ye, () => t.children ?? de), at(Ie, (w, T) => V == null ? void 0 : V(w, T), E), ze(Te, (w) => b = w, () => b), at(Te, (w, T) => V == null ? void 0 : V(w, T), h);
  var ge = Me(Te, 2);
  {
    var Oe = (w) => {
      var T = mp(), U = Me(ne(T), 2);
      Pe(U, () => t.progress ?? de), we((Re) => lt(T, Re), [
        () => Object.entries(f(N)).map(([Re, Ir]) => `${Re}: ${Ir};`).join(" ")
      ]), H(w, T);
    };
    oe(ge, (w) => {
      t.progress && w(Oe);
    });
  }
  var Ge = Me(ge, 2);
  Pe(Ge, () => t.paginate ?? de), ze(ae, (w) => x = w, () => x), at(ae, (w, T) => V == null ? void 0 : V(w, T), o), H(e, ae);
  var Ne = Be(Y);
  return i(), Ne;
}
var _p = /* @__PURE__ */ he("<thead><!></thead>");
function yp(e, t) {
  De(t, !0);
  let r = I(t, "use", 19, () => []), n = /* @__PURE__ */ St(t, ["$$slots", "$$events", "$$legacy", "use", "children"]), i, a = /* @__PURE__ */ le(void 0), o = [];
  const l = /* @__PURE__ */ new WeakMap();
  te("SMUI:data-table:row:header", !0);
  const s = fe("SMUI:checkbox:mount");
  te("SMUI:checkbox:mount", (y) => {
    G(a, y, !0), s && s(y);
  });
  const u = fe("SMUI:checkbox:unmount");
  te("SMUI:checkbox:unmount", (y) => {
    G(a, void 0), u && u(y);
  }), te("SMUI:data-table:cell:mount", (y) => {
    o.push(y), l.set(y.element, y);
  }), te("SMUI:data-table:cell:unmount", (y) => {
    const C = o.findIndex((x) => x === y);
    C !== -1 && o.splice(C, 1), l.delete(y.element);
  });
  const c = fe("SMUI:data-table:header:mount"), d = fe("SMUI:data-table:header:unmount");
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
  ot(m, () => ({ ...n }));
  var E = ne(m);
  return Pe(E, () => t.children ?? de), ze(m, (y) => i = y, () => i), at(m, (y, C) => V == null ? void 0 : V(y, C), r), H(e, m), Be(h);
}
var Ep = /* @__PURE__ */ he("<tbody><!></tbody>");
function wp(e, t) {
  De(t, !0);
  let r = I(t, "use", 19, () => []), n = I(t, "class", 3, ""), i = /* @__PURE__ */ St(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "children"
  ]), a, o = [];
  const l = /* @__PURE__ */ new WeakMap();
  te("SMUI:data-table:row:header", !1), te("SMUI:data-table:row:mount", (m) => {
    o.push(m), l.set(m.element, m);
  }), te("SMUI:data-table:row:unmount", (m) => {
    const E = o.findIndex((y) => y === m);
    E !== -1 && o.splice(E, 1), l.delete(m.element);
  });
  const s = fe("SMUI:data-table:body:mount"), u = fe("SMUI:data-table:body:unmount");
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
  ot(v, (m) => ({ class: m, ...i }), [
    () => wt({ "mdc-data-table__content": !0, [n()]: !0 })
  ]);
  var h = ne(v);
  return Pe(h, () => t.children ?? de), ze(v, (m) => a = m, () => a), at(v, (m, E) => V == null ? void 0 : V(m, E), r), H(e, v), Be(p);
}
let Sp = 0;
var Ap = /* @__PURE__ */ he("<tr><!></tr>");
function Fo(e, t) {
  De(t, !0);
  let r = I(t, "use", 19, () => []), n = I(t, "class", 3, ""), i = I(t, "rowId", 19, () => "SMUI-data-table-row-" + Sp++), a = /* @__PURE__ */ St(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "rowId",
    "children"
  ]), o, l = /* @__PURE__ */ le(void 0), s = re({}), u = re({}), c = fe("SMUI:data-table:row:header");
  const d = fe("SMUI:checkbox:mount");
  te("SMUI:checkbox:mount", (L) => {
    G(l, L, !0), d && d(L);
  });
  const p = fe("SMUI:checkbox:unmount");
  te("SMUI:checkbox:unmount", (L) => {
    G(l, void 0), p && p(L);
  });
  const v = fe("SMUI:data-table:row:mount"), h = fe("SMUI:data-table:row:unmount");
  Ft(() => {
    const L = c ? {
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
    return v && v(L), () => {
      h && h(L);
    };
  });
  function m(L) {
    s[L] || (s[L] = !0);
  }
  function E(L) {
    (!(L in s) || s[L]) && (s[L] = !1);
  }
  function y(L) {
    return L in u ? u[L] ?? null : b().getAttribute(L);
  }
  function C(L, Z) {
    u[L] !== Z && (u[L] = Z);
  }
  function x(L) {
    dt(b(), "SMUIDataTableHeaderClick", L);
  }
  function g(L) {
    dt(b(), "SMUIDataTableRowClick", { rowId: i(), target: L.target });
  }
  function b() {
    return o;
  }
  var A = { getElement: b }, _ = Ap(), O = (L) => {
    var Z;
    c ? x(L) : g(L), (Z = t.onclick) == null || Z.call(t, L);
  };
  ot(
    _,
    (L) => ({
      class: L,
      "aria-selected": f(l) ? f(l).checked ? "true" : "false" : void 0,
      ...u,
      ...a,
      onclick: O
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
  var N = ne(_);
  return Pe(N, () => t.children ?? de), ze(_, (L) => o = L, () => o), at(_, (L, Z) => V == null ? void 0 : V(L, Z), r), H(e, _), Be(A);
}
let xp = 0;
var Cp = /* @__PURE__ */ he('<div class="mdc-data-table__header-cell-wrapper"><!> <div class="mdc-data-table__sort-status-label" aria-hidden="true"> </div></div>'), Ip = /* @__PURE__ */ he("<th><!></th>"), Rp = /* @__PURE__ */ he("<td><!></td>");
function Gi(e, t) {
  De(t, !0);
  const r = () => gr(y, "$sort", i), n = () => gr(C, "$sortDirection", i), [i, a] = Mn();
  let o = fe("SMUI:data-table:row:header"), l = I(t, "use", 19, () => []), s = I(t, "class", 3, ""), u = I(t, "numeric", 3, !1), c = I(t, "checkbox", 3, !1), d = I(t, "columnId", 19, () => o ? "SMUI-data-table-column-" + xp++ : "SMUI-data-table-unused"), p = I(t, "sortable", 19, () => fe("SMUI:data-table:sortable")), v = /* @__PURE__ */ St(t, [
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
  ]), h, m = re({}), E = re({}), y = fe("SMUI:data-table:sort"), C = fe("SMUI:data-table:sortDirection"), x = fe("SMUI:data-table:sortAscendingAriaLabel"), g = fe("SMUI:data-table:sortDescendingAriaLabel");
  p() && (te("SMUI:label:context", "data-table:sortable-header-cell"), te("SMUI:icon-button:context", "data-table:sortable-header-cell"), te("SMUI:icon-button:aria-describedby", d() + "-status-label"));
  const b = fe("SMUI:data-table:cell:mount"), A = fe("SMUI:data-table:cell:unmount");
  Ft(() => {
    const P = o ? {
      _smui_data_table_header_cell_accessor: !0,
      get element() {
        return ee();
      },
      get columnId() {
        return d();
      },
      addClass: _,
      removeClass: O,
      getAttr: N,
      addAttr: L
    } : {
      _smui_data_table_header_cell_accessor: !1,
      get element() {
        return ee();
      },
      get columnId() {
      },
      addClass: _,
      removeClass: O,
      getAttr: N,
      addAttr: L
    };
    return b && b(P), () => {
      A && A(P);
    };
  });
  function _(P) {
    m[P] || (m[P] = !0);
  }
  function O(P) {
    (!(P in m) || m[P]) && (m[P] = !1);
  }
  function N(P) {
    return P in E ? E[P] ?? null : ee().getAttribute(P);
  }
  function L(P, S) {
    E[P] !== S && (E[P] = S);
  }
  function Z(P) {
    dt(ee(), "SMUIDataTableHeaderCheckboxChange", P);
  }
  function ie(P) {
    dt(ee(), "SMUIDataTableBodyCheckboxChange", P);
  }
  function ee() {
    return h;
  }
  var be = { getElement: ee }, B = $(), ue = X(B);
  {
    var D = (P) => {
      var S = Ip(), M = (Y) => {
        var ae;
        c() && Z(Y), (ae = t.onchange) == null || ae.call(t, Y);
      };
      ot(
        S,
        (Y) => ({
          class: Y,
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
      var xe = ne(S);
      {
        var Se = (Y) => {
          var ae = Cp(), _e = ne(ae);
          Pe(_e, () => t.children ?? de);
          var Ce = Me(_e, 2), Xe = ne(Ce);
          we(() => {
            en(Ce, "id", `${d() ?? ""}-status-label`), Kt(Xe, r() === d() ? n() === "ascending" ? x : g : "");
          }), H(Y, ae);
        }, pe = (Y) => {
          var ae = $(), _e = X(ae);
          Pe(_e, () => t.children ?? de), H(Y, ae);
        };
        oe(xe, (Y) => {
          p() ? Y(Se) : Y(pe, !1);
        });
      }
      ze(S, (Y) => h = Y, () => h), at(S, (Y, ae) => V == null ? void 0 : V(Y, ae), l), H(P, S);
    }, j = (P) => {
      var S = Rp(), M = (Se) => {
        var pe;
        c() && ie(Se), (pe = t.onchange) == null || pe.call(t, Se);
      };
      ot(
        S,
        (Se) => ({
          class: Se,
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
      var xe = ne(S);
      Pe(xe, () => t.children ?? de), ze(S, (Se) => h = Se, () => h), at(S, (Se, pe) => V == null ? void 0 : V(Se, pe), l), H(P, S);
    };
    oe(ue, (P) => {
      o ? P(D) : P(j, !1);
    });
  }
  H(e, B);
  var J = Be(be);
  return a(), J;
}
Vt(["click"]);
Vt(["click"]);
function fa(e, t, r) {
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
fa({}, Tp.USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT, !1);
var Xn, Go = {
  DND_ZONE_ACTIVE: "dnd-zone-active",
  DND_ZONE_DRAG_DISABLED: "dnd-zone-drag-disabled"
};
Xn = {}, fa(Xn, Go.DND_ZONE_ACTIVE, "Tab to one the items and press space-bar or enter to start dragging it"), fa(Xn, Go.DND_ZONE_DRAG_DISABLED, "This is a disabled drag and drop list");
const Op = vt([]);
Op.subscribe;
Vt(["click", "pointerdown", "pointerup", "pointermove"]);
Vt(["click"]);
const Hp = 4e3;
function Lp() {
  let e = re({ items: [] }), t = 0;
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
var Mp = /* @__PURE__ */ he('<div><div class="mdc-linear-progress__buffer"><div class="mdc-linear-progress__buffer-bar"></div> <div class="mdc-linear-progress__buffer-dots"></div></div> <div class="mdc-linear-progress__bar mdc-linear-progress__primary-bar"><span class="mdc-linear-progress__bar-inner"></span></div> <div class="mdc-linear-progress__bar mdc-linear-progress__secondary-bar"><span class="mdc-linear-progress__bar-inner"></span></div></div>');
function Pp(e, t) {
  De(t, !0);
  const [r, n] = Mn();
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
  ]), p, v = /* @__PURE__ */ le(void 0), h = re({}), m = re({}), E = re({}), y = re({}), C = re({}), x = fe("SMUI:linear-progress:context"), g = fe("SMUI:linear-progress:closed");
  Le(() => {
    g && $i(g, s());
  }), Le(() => {
    f(v) && f(v).isDeterminate() !== !l() && f(v).setDeterminate(!l());
  }), Le(() => {
    f(v) && f(v).getProgress() !== u() && f(v).setProgress(u());
  }), Le(() => {
    f(v) && (c() == null ? f(v).setBuffer(1) : f(v).setBuffer(c()));
  }), Le(() => {
    f(v) && (s() ? f(v).close() : f(v).open());
  }), Ft(() => (G(
    v,
    new vp({
      addClass: A,
      forceLayout: () => {
        ee().getBoundingClientRect();
      },
      setBufferBarStyle: Z,
      setPrimaryBarStyle: ie,
      hasClass: b,
      removeAttribute: N,
      removeClass: _,
      setAttribute: O,
      setStyle: L,
      attachResizeObserver: (S) => {
        const M = window.ResizeObserver;
        if (M) {
          const xe = new M(S);
          return xe.observe(ee()), xe;
        }
        return null;
      },
      getWidth: () => ee().offsetWidth
    }),
    !0
  ), f(v).init(), () => {
    var S;
    (S = f(v)) == null || S.destroy();
  }));
  function b(S) {
    return S in h ? h[S] : ee().classList.contains(S);
  }
  function A(S) {
    h[S] || (h[S] = !0);
  }
  function _(S) {
    (!(S in h) || h[S]) && (h[S] = !1);
  }
  function O(S, M) {
    m[S] !== M && (m[S] = M);
  }
  function N(S) {
    (!(S in m) || m[S] != null) && (m[S] = void 0);
  }
  function L(S, M) {
    E[S] != M && (M === "" || M == null ? delete E[S] : E[S] = M);
  }
  function Z(S, M) {
    y[S] != M && (M === "" || M == null ? delete y[S] : y[S] = M);
  }
  function ie(S, M) {
    C[S] != M && (M === "" || M == null ? delete C[S] : C[S] = M);
  }
  function ee() {
    return p;
  }
  var be = { getElement: ee }, B = Mp(), ue = (S) => {
    var M;
    f(v) && f(v).handleTransitionEnd(), (M = t.ontransitionend) == null || M.call(t, S);
  };
  ot(
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
      ontransitionend: ue
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
  var D = ne(B), j = ne(D), J = Me(D, 2);
  ze(B, (S) => p = S, () => p), at(B, (S, M) => V == null ? void 0 : V(S, M), i), we(
    (S, M) => {
      lt(j, S), lt(J, M);
    },
    [
      () => Object.entries(y).map(([S, M]) => `${S}: ${M};`).join(" "),
      () => Object.entries(C).map(([S, M]) => `${S}: ${M};`).join(" ")
    ]
  ), H(e, B);
  var P = Be(be);
  return n(), P;
}
var Dp = /* @__PURE__ */ mt('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor" class="svelte-1mj71p3"><path d="M12 4l-8 8h16l-8-8z"></path></svg>'), Bp = /* @__PURE__ */ mt('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor" class="svelte-1mj71p3"><path d="M12 20l8-8H4l8 8z"></path></svg>'), Np = (e, t) => t(), Up = /* @__PURE__ */ he('<input type="text" class="svelte-1mj71p3"/>'), kp = (e, t) => t(), Fp = /* @__PURE__ */ he('<input type="number" class="svelte-1mj71p3"/>'), Gp = /* @__PURE__ */ he("<!> <!>", 1), jp = /* @__PURE__ */ he('<div class="custom-cell-container svelte-1mj71p3"><div class="cell-header svelte-1mj71p3"><span class="header-title svelte-1mj71p3"> </span> <!></div> <!></div>'), Vp = /* @__PURE__ */ he('<div class="cell-actions svelte-1mj71p3"></div>'), qp = /* @__PURE__ */ he("<!> <!>", 1);
function zp(e, t) {
  De(t, !0);
  const r = () => gr(m, "$sortColumn", a), n = () => gr(E, "$sortDirection", a), i = () => gr(h, "$filteredData", a), [a, o] = Mn();
  let l = I(t, "loadingDone", 15, !0), s = I(t, "label", 19, Xv), u = I(t, "columnDefs", 19, () => []), c = I(t, "rowData", 31, () => re([])), d = I(t, "rowActions", 19, () => []), p = I(t, "searchInputLabel", 3, "Search"), v = re({ name: "", color: "", number: "" }), h = vt([]), m = vt(null), E = vt(null);
  t.store.store.subscribe((g) => {
    c([...g]), y();
  });
  function y() {
    let g = c().filter((b) => u().every((A) => {
      const _ = v[A.field], O = A.filterValueGetter ? A.filterValueGetter(b) : b[A.field];
      return _ ? A.filterType === "number" ? O == _ : O.toString().toLowerCase().includes(_.toLowerCase()) : !0;
    }));
    g = C(g), h.set(g);
  }
  function C(g) {
    let b, A;
    return m.subscribe((_) => b = _), E.subscribe((_) => A = _), !b || !A ? g : g.sort((_, O) => {
      let N = _[b], L = O[b];
      return N == null && (N = ""), L == null && (L = ""), A === "asc" ? N.toString().localeCompare(L.toString()) : L.toString().localeCompare(N.toString());
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
      Pp(b, {
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
      var _ = qp(), O = X(_);
      yp(O, {
        children: (L, Z) => {
          Fo(L, {
            class: "header-row",
            children: (ie, ee) => {
              var be = $(), B = X(be);
              bn(B, 17, u, Ci, (ue, D) => {
                Gi(ue, {
                  onclick: () => f(D).sortable && x(f(D).field),
                  get style() {
                    return f(D).headerStyle;
                  },
                  children: (j, J) => {
                    var P = jp(), S = ne(P), M = ne(S), xe = ne(M), Se = Me(M, 2);
                    {
                      var pe = (_e) => {
                        var Ce = $(), Xe = X(Ce);
                        {
                          var ce = (Te) => {
                            var Ie = $(), ye = X(Ie);
                            {
                              var ge = (Ge) => {
                                var Ne = Dp();
                                H(Ge, Ne);
                              }, Oe = (Ge) => {
                                var Ne = $(), w = X(Ne);
                                {
                                  var T = (U) => {
                                    var Re = Bp();
                                    H(U, Re);
                                  };
                                  oe(
                                    w,
                                    (U) => {
                                      n() === "desc" && U(T);
                                    },
                                    !0
                                  );
                                }
                                H(Ge, Ne);
                              };
                              oe(ye, (Ge) => {
                                n() === "asc" ? Ge(ge) : Ge(Oe, !1);
                              });
                            }
                            H(Te, Ie);
                          };
                          oe(Xe, (Te) => {
                            r() === f(D).field && n() !== null && Te(ce);
                          });
                        }
                        H(_e, Ce);
                      };
                      oe(Se, (_e) => {
                        f(D).sortable && _e(pe);
                      });
                    }
                    var Y = Me(S, 2);
                    {
                      var ae = (_e) => {
                        var Ce = Gp(), Xe = X(Ce);
                        {
                          var ce = (ye) => {
                            var ge = Up();
                            ge.__input = [Np, y], we(() => en(ge, "placeholder", `${p()} ${f(D).headerName}`)), lo(ge, () => v[f(D).field], (Oe) => v[f(D).field] = Oe), H(ye, ge);
                          };
                          oe(Xe, (ye) => {
                            f(D).filterType === "text" && ye(ce);
                          });
                        }
                        var Te = Me(Xe, 2);
                        {
                          var Ie = (ye) => {
                            var ge = Fp();
                            ge.__input = [kp, y], we(() => en(ge, "placeholder", `${p()} ${f(D).headerName}`)), lo(ge, () => v[f(D).field], (Oe) => v[f(D).field] = Oe), H(ye, ge);
                          };
                          oe(Te, (ye) => {
                            f(D).filterType === "number" && ye(Ie);
                          });
                        }
                        H(_e, Ce);
                      };
                      oe(Y, (_e) => {
                        f(D).filter && _e(ae);
                      });
                    }
                    we(() => {
                      lt(P, `min-width: ${f(D).minWidth ?? 0 ?? ""}`), Kt(xe, f(D).headerName);
                    }), H(j, P);
                  },
                  $$slots: { default: !0 }
                });
              }), H(ie, be);
            },
            $$slots: { default: !0 }
          });
        },
        $$slots: { default: !0 }
      });
      var N = Me(O, 2);
      wp(N, {
        children: (L, Z) => {
          var ie = $(), ee = X(ie);
          bn(ee, 1, i, Ci, (be, B) => {
            Fo(be, {
              children: (ue, D) => {
                var j = $(), J = X(j);
                bn(J, 17, u, (P) => P.field, (P, S) => {
                  var M = $(), xe = X(M);
                  {
                    var Se = (Y) => {
                      Gi(Y, {
                        children: (ae, _e) => {
                          var Ce = Vp();
                          bn(Ce, 21, d, Ci, (Xe, ce) => {
                            var Te = $(), Ie = X(Te);
                            {
                              var ye = (Oe) => {
                                Uo(Oe, {
                                  get content() {
                                    return f(ce).tooltip;
                                  },
                                  hoverDelay: 500,
                                  children: (Ge, Ne) => {
                                    {
                                      let w = /* @__PURE__ */ Ee(() => f(ce).disabled(f(B)));
                                      kv(Ge, {
                                        get iconComponent() {
                                          return f(ce).iconComponent;
                                        },
                                        get iconStyles() {
                                          return f(ce).iconStyles;
                                        },
                                        callback: () => f(ce).callback(f(B)),
                                        get disabled() {
                                          return f(w);
                                        }
                                      });
                                    }
                                  },
                                  $$slots: { default: !0 }
                                });
                              }, ge = (Oe) => {
                                Uo(Oe, {
                                  get content() {
                                    return f(ce).tooltip;
                                  },
                                  hoverDelay: 500,
                                  children: (Ge, Ne) => {
                                    {
                                      let w = /* @__PURE__ */ Ee(() => f(ce).disabled(f(B)));
                                      Pv(Ge, {
                                        class: "button",
                                        variant: "raised",
                                        callback: () => f(ce).callback(f(B)),
                                        get disabled() {
                                          return f(w);
                                        },
                                        children: (T, U) => {
                                          var Re = $(), Ir = X(Re);
                                          {
                                            var Nn = (Rr) => {
                                              Yv(Rr, { svgStyles: "margin: unset" });
                                            }, Ai = (Rr) => {
                                              var ka = $(), Ml = X(ka);
                                              {
                                                var Pl = (Tr) => {
                                                  Jv(Tr, { svgStyles: "margin: unset" });
                                                }, Dl = (Tr) => {
                                                  var Fa = $(), Bl = X(Fa);
                                                  {
                                                    var Nl = (Or) => {
                                                      $v(Or, { svgStyles: "margin: unset" });
                                                    }, Ul = (Or) => {
                                                      var Ga = $(), kl = X(Ga);
                                                      {
                                                        var Fl = (Hr) => {
                                                          tp(Hr, { svgStyles: "margin: unset" });
                                                        }, Gl = (Hr) => {
                                                          var ja = $(), jl = X(ja);
                                                          {
                                                            var Vl = (Lr) => {
                                                              ap(Lr, { svgStyles: "margin: unset" });
                                                            }, ql = (Lr) => {
                                                              var Va = $(), zl = X(Va);
                                                              {
                                                                var Xl = (Mr) => {
                                                                  sp(Mr, { svgStyles: "margin: unset" });
                                                                }, Wl = (Mr) => {
                                                                  var qa = $(), Zl = X(qa);
                                                                  {
                                                                    var Yl = (Pr) => {
                                                                      up(Pr, { svgStyles: "margin: unset" });
                                                                    }, Ql = (Pr) => {
                                                                      np(Pr, { svgStyles: "margin: unset" });
                                                                    };
                                                                    oe(
                                                                      Zl,
                                                                      (Pr) => {
                                                                        f(ce).icon === "delete" ? Pr(Yl) : Pr(Ql, !1);
                                                                      },
                                                                      !0
                                                                    );
                                                                  }
                                                                  H(Mr, qa);
                                                                };
                                                                oe(
                                                                  zl,
                                                                  (Mr) => {
                                                                    f(ce).icon === "edit" ? Mr(Xl) : Mr(Wl, !1);
                                                                  },
                                                                  !0
                                                                );
                                                              }
                                                              H(Lr, Va);
                                                            };
                                                            oe(
                                                              jl,
                                                              (Lr) => {
                                                                f(ce).icon === "remove" ? Lr(Vl) : Lr(ql, !1);
                                                              },
                                                              !0
                                                            );
                                                          }
                                                          H(Hr, ja);
                                                        };
                                                        oe(
                                                          kl,
                                                          (Hr) => {
                                                            f(ce).icon === "find-in-page" ? Hr(Fl) : Hr(Gl, !1);
                                                          },
                                                          !0
                                                        );
                                                      }
                                                      H(Or, Ga);
                                                    };
                                                    oe(
                                                      Bl,
                                                      (Or) => {
                                                        f(ce).icon === "download" ? Or(Nl) : Or(Ul, !1);
                                                      },
                                                      !0
                                                    );
                                                  }
                                                  H(Tr, Fa);
                                                };
                                                oe(
                                                  Ml,
                                                  (Tr) => {
                                                    f(ce).icon === "cancel" ? Tr(Pl) : Tr(Dl, !1);
                                                  },
                                                  !0
                                                );
                                              }
                                              H(Rr, ka);
                                            };
                                            oe(Ir, (Rr) => {
                                              f(ce).icon === "add" ? Rr(Nn) : Rr(Ai, !1);
                                            });
                                          }
                                          H(T, Re);
                                        },
                                        $$slots: { default: !0 }
                                      });
                                    }
                                  },
                                  $$slots: { default: !0 }
                                });
                              };
                              oe(Ie, (Oe) => {
                                f(ce).iconComponent ? Oe(ye) : Oe(ge, !1);
                              });
                            }
                            H(Xe, Te);
                          }), H(ae, Ce);
                        },
                        $$slots: { default: !0 }
                      });
                    }, pe = (Y) => {
                      Gi(Y, {
                        get numeric() {
                          return f(S).numeric;
                        },
                        get style() {
                          return f(S).cellStyle;
                        },
                        children: (ae, _e) => {
                          var Ce = $(), Xe = X(Ce);
                          {
                            var ce = (Ie) => {
                              const ye = /* @__PURE__ */ Ee(() => f(S).cellRenderer);
                              var ge = $(), Oe = X(ge);
                              _i(Oe, () => f(ye), (Ge, Ne) => {
                                Ne(Ge, yi(
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
                              }), H(Ie, ge);
                            }, Te = (Ie) => {
                              var ye = $(), ge = X(ye);
                              {
                                var Oe = (Ne) => {
                                  var w = Ji();
                                  we((T) => Kt(w, T), [
                                    () => f(S).valueFormatter(f(B)[f(S).field])
                                  ]), H(Ne, w);
                                }, Ge = (Ne) => {
                                  var w = Ji();
                                  we(() => Kt(w, f(B)[f(S).field] ?? "")), H(Ne, w);
                                };
                                oe(
                                  ge,
                                  (Ne) => {
                                    f(S).valueFormatter ? Ne(Oe) : Ne(Ge, !1);
                                  },
                                  !0
                                );
                              }
                              H(Ie, ye);
                            };
                            oe(Xe, (Ie) => {
                              f(S).cellRenderer ? Ie(ce) : Ie(Te, !1);
                            });
                          }
                          H(ae, Ce);
                        },
                        $$slots: { default: !0 }
                      });
                    };
                    oe(xe, (Y) => {
                      f(S).field === "actions" ? Y(Se) : Y(pe, !1);
                    });
                  }
                  H(P, M);
                }), H(ue, j);
              },
              $$slots: { default: !0 }
            });
          }), H(L, ie);
        },
        $$slots: { default: !0 }
      }), H(b, _);
    },
    $$slots: { progress: !0, default: !0 }
  }), Be(), o();
}
Vt(["input"]);
var Xp = (e, t, r) => {
  var n;
  return (n = t.onChange) == null ? void 0 : n.call(t, t.row, f(r));
}, Wp = /* @__PURE__ */ he("<option> </option>"), Zp = /* @__PURE__ */ he(`<div style="min-width: 180px"><select><option>—</option><!></select> <style>select {
      width: 100%;
      min-width: 180px;
    }</style></div>`);
function Yp(e, t) {
  De(t, !0);
  let r = I(t, "locations", 19, () => []), n = /* @__PURE__ */ le(re(t.value ?? ""));
  Le(() => {
    G(n, t.value ?? "", !0);
  }), Le(() => {
    var s;
    f(n) !== (t.value ?? "") && ((s = t.onChange) == null || s.call(t, t.row, f(n)));
  });
  var i = Zp(), a = ne(i);
  a.__change = [Xp, t, n];
  var o = ne(a);
  o.value = o.__value = "";
  var l = Me(o);
  bn(l, 17, r, (s) => s.value, (s, u) => {
    var c = Wp(), d = ne(c), p = {};
    we(() => {
      Kt(d, f(u).label), p !== (p = f(u).value) && (c.value = (c.__value = f(u).value) ?? "");
    }), H(s, c);
  }), wc(a, () => f(n), (s) => G(n, s)), H(e, i), Be();
}
Vt(["change"]);
Ad({ en: eh, de: kd });
var Qp = /* @__PURE__ */ he('<div class="app-container svelte-1lw4l1e"><h3 style="margin-bottom: 1rem;" class="svelte-1lw4l1e"> </h3> <!></div>');
function Jp(e, t) {
  De(t, !0);
  const r = () => gr(Sd, "$_", n), [n, i] = Mn(), a = kr.getInstance();
  let o = /* @__PURE__ */ le(re([])), l = "", s = /* @__PURE__ */ le(!0);
  Ft(() => {
    setTimeout(
      () => {
        G(s, !1);
      },
      200
    );
  }), Ft(() => {
    a.getLocations().subscribe({
      next: (b) => {
        G(o, b.map((A) => ({ label: A.name, value: A.uuid })), !0);
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
  let p = re([]);
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
    const _ = b.location, O = A || null;
    if (_ === O)
      return;
    const N = { ...b, location: O };
    u.update(N), (O ? a.assignResourceToLocation(O, b.uuid) : a.unassignResourceFromLocation(_ ?? "", b.uuid)).subscribe({
      next: () => {
        v();
      },
      error: () => {
        const Z = { ...b, location: _ };
        u.update(Z);
      }
    });
  }
  let E = /* @__PURE__ */ Ee(() => [
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
      cellRenderer: Yp,
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
  Le(() => {
  });
  var y = $(), C = X(y);
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
      var A = Qp(), _ = ne(A), O = ne(_), N = Me(_, 2);
      {
        let L = /* @__PURE__ */ Ee(() => r()("search"));
        zp(N, {
          get columnDefs() {
            return f(E);
          },
          get store() {
            return u;
          },
          get searchInputLabel() {
            return f(L);
          }
        });
      }
      we((L) => Kt(O, L), [() => r()("search_result")]), H(b, A);
    };
    oe(C, (b) => {
      f(s) ? b(x) : b(g, !1);
    });
  }
  H(e, y), Be(), i();
}
const Hl = "location-viewer", Ll = "0.0.1";
var Kp = /* @__PURE__ */ he('<!> <input type="hidden" name="package-name"/> <input type="hidden" name="package-version"/>', 1);
function $p(e, t) {
  De(t, !0);
  let r = I(t, "dev", 3, !1);
  var n = Kp(), i = X(n);
  {
    var a = (s) => {
      Jp(s, {});
    };
    oe(i, (s) => {
      (t.doc || r()) && s(a);
    });
  }
  var o = Me(i, 2), l = Me(o, 2);
  we(() => {
    oo(o, Hl), oo(l, Ll);
  }), H(e, n), Be();
}
var Zr;
class sm extends HTMLElement {
  constructor() {
    super();
    K(this, Zr);
    F(this, Zr, /* @__PURE__ */ le(re({ doc: void 0, editCount: void 0 })));
  }
  get props() {
    return f(R(this, Zr));
  }
  set props(r) {
    G(R(this, Zr), r, !0);
  }
  connectedCallback() {
    var n;
    this.attachShadow({ mode: "open" }), this.props.doc = this._doc, this.props.editCount = this.editCount, cc($p, { target: this.shadowRoot, props: this.props });
    const r = em();
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
function em() {
  const e = `${Hl}-v${Ll}-style`, t = tm(), r = document.createElement("link");
  return r.rel = "stylesheet", r.type = "text/css", r.href = t, r.id = e, r;
}
function tm() {
  const e = new URL(import.meta.url), t = e.origin, r = e.pathname.split("/").slice(0, -1).filter(Boolean).join("/");
  return [t, r, "style.css"].filter(Boolean).join("/");
}
export {
  sm as default
};
