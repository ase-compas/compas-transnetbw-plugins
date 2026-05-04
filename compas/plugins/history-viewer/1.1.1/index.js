var Xd = Object.defineProperty;
var Sl = (t) => {
  throw TypeError(t);
};
var Zd = (t, e, n) => e in t ? Xd(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var Ti = (t, e, n) => Zd(t, typeof e != "symbol" ? e + "" : e, n), Xo = (t, e, n) => e.has(t) || Sl("Cannot " + n);
var le = (t, e, n) => (Xo(t, e, "read from private field"), n ? n.call(t) : e.get(t)), rt = (t, e, n) => e.has(t) ? Sl("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, n), Ve = (t, e, n, r) => (Xo(t, e, "write to private field"), r ? r.call(t, n) : e.set(t, n), n), Zt = (t, e, n) => (Xo(t, e, "access private method"), n);
const kt = Symbol(), Yd = "http://www.w3.org/1999/xhtml", Qd = "http://www.w3.org/2000/svg", Jd = "@attach", Uu = !1;
var Po = Array.isArray, $d = Array.prototype.indexOf, qs = Array.from, mo = Object.defineProperty, Hr = Object.getOwnPropertyDescriptor, Fu = Object.getOwnPropertyDescriptors, ef = Object.prototype, tf = Array.prototype, Ws = Object.getPrototypeOf, El = Object.isExtensible;
function Mi(t) {
  return typeof t == "function";
}
const ge = () => {
};
function nf(t) {
  return t();
}
function go(t) {
  for (var e = 0; e < t.length; e++)
    t[e]();
}
function ku() {
  var t, e, n = new Promise((r, i) => {
    t = r, e = i;
  });
  return { promise: n, resolve: t, reject: e };
}
const on = 2, zs = 4, Ho = 8, Fr = 16, Ir = 32, vi = 64, Ks = 128, Ln = 256, po = 512, Jt = 1024, yn = 2048, kr = 4096, kn = 8192, mi = 16384, No = 32768, Br = 65536, Al = 1 << 17, rf = 1 << 18, ia = 1 << 19, Bu = 1 << 20, bs = 1 << 21, Uo = 1 << 22, si = 1 << 23, $n = Symbol("$state"), Vu = Symbol("legacy props"), af = Symbol(""), Pi = new class extends Error {
  constructor() {
    super(...arguments);
    Ti(this, "name", "StaleReactionError");
    Ti(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
function Xs(t) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function of() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function sf(t) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function lf() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function uf(t) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function cf() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function df(t) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function ff() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function hf() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function vf() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function mf() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
function gf() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function pf() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let bf = !1;
function Gu(t) {
  return t === this.v;
}
function Zs(t, e) {
  return t != t ? e == e : t !== e || t !== null && typeof t == "object" || typeof t == "function";
}
function ju(t) {
  return !Zs(t, this.v);
}
let aa = !1, _f = !1;
function yf() {
  aa = !0;
}
let dt = null;
function Xi(t) {
  dt = t;
}
function _e(t) {
  return (
    /** @type {T} */
    qu().get(t)
  );
}
function ue(t, e) {
  return qu().set(t, e), e;
}
function we(t, e = !1, n) {
  dt = {
    p: dt,
    c: null,
    e: null,
    s: t,
    x: null,
    l: aa && !e ? { s: null, u: null, $: [] } : null
  };
}
function Le(t) {
  var e = (
    /** @type {ComponentContext} */
    dt
  ), n = e.e;
  if (n !== null) {
    e.e = null;
    for (var r of n)
      sc(r);
  }
  return t !== void 0 && (e.x = t), dt = e.p, t ?? /** @type {T} */
  {};
}
function Ba() {
  return !aa || dt !== null && dt.l === null;
}
function qu(t) {
  return dt === null && Xs(), dt.c ?? (dt.c = new Map(If(dt) || void 0));
}
function If(t) {
  let e = t.p;
  for (; e !== null; ) {
    const n = e.c;
    if (n !== null)
      return n;
    e = e.p;
  }
  return null;
}
let ti = [];
function Wu() {
  var t = ti;
  ti = [], go(t);
}
function _r(t) {
  if (ti.length === 0 && !wa) {
    var e = ti;
    queueMicrotask(() => {
      e === ti && Wu();
    });
  }
  ti.push(t);
}
function Sf() {
  for (; ti.length > 0; )
    Wu();
}
const Ef = /* @__PURE__ */ new WeakMap();
function zu(t) {
  var e = We;
  if (e === null)
    return qe.f |= si, t;
  if (e.f & No)
    Zi(t, e);
  else {
    if (!(e.f & Ks))
      throw !e.parent && t instanceof Error && Ku(t), t;
    e.b.error(t);
  }
}
function Zi(t, e) {
  for (; e !== null; ) {
    if (e.f & Ks)
      try {
        e.b.error(t);
        return;
      } catch (n) {
        t = n;
      }
    e = e.parent;
  }
  throw t instanceof Error && Ku(t), t;
}
function Ku(t) {
  const e = Ef.get(t);
  e && (mo(t, "message", {
    value: e.message
  }), mo(t, "stack", {
    value: e.stack
  }));
}
const Za = /* @__PURE__ */ new Set();
let ut = null, so = null, zt = null, _s = /* @__PURE__ */ new Set(), Yn = [], Fo = null, ys = !1, wa = !1;
var Gi, ji, ni, Ua, qi, Wi, ri, zi, Fa, ka, On, Is, lo, Ss;
const Ro = class Ro {
  constructor() {
    rt(this, On);
    /**
     * The current values of any sources that are updated in this batch
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Source, any>}
     */
    Ti(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any sources that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Source, any>}
     */
    rt(this, Gi, /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<() => void>}
     */
    rt(this, ji, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    rt(this, ni, 0);
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    rt(this, Ua, null);
    /**
     * Async effects inside a newly-created `<svelte:boundary>`
     * — these do not prevent the batch from committing
     * @type {Effect[]}
     */
    rt(this, qi, []);
    /**
     * Template effects and `$effect.pre` effects, which run when
     * a batch is committed
     * @type {Effect[]}
     */
    rt(this, Wi, []);
    /**
     * The same as `#render_effects`, but for `$effect` (which runs after)
     * @type {Effect[]}
     */
    rt(this, ri, []);
    /**
     * Block effects, which may need to re-run on subsequent flushes
     * in order to update internal sources (e.g. each block items)
     * @type {Effect[]}
     */
    rt(this, zi, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Effect[]}
     */
    rt(this, Fa, []);
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Effect[]}
     */
    rt(this, ka, []);
    /**
     * A set of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`
     * @type {Set<Effect>}
     */
    Ti(this, "skipped_effects", /* @__PURE__ */ new Set());
  }
  /**
   *
   * @param {Effect[]} root_effects
   */
  process(e) {
    var a;
    Yn = [], so = null, this.apply();
    for (const o of e)
      Zt(this, On, Is).call(this, o);
    if (le(this, ni) === 0) {
      var n = zt;
      Zt(this, On, Ss).call(this);
      var r = le(this, Wi), i = le(this, ri);
      Ve(this, Wi, []), Ve(this, ri, []), Ve(this, zi, []), so = this, ut = null, zt = n, Cl(r), Cl(i), so = null, (a = le(this, Ua)) == null || a.resolve();
    } else
      Zt(this, On, lo).call(this, le(this, Wi)), Zt(this, On, lo).call(this, le(this, ri)), Zt(this, On, lo).call(this, le(this, zi));
    zt = null;
    for (const o of le(this, qi))
      Da(o);
    Ve(this, qi, []);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Source} source
   * @param {any} value
   */
  capture(e, n) {
    le(this, Gi).has(e) || le(this, Gi).set(e, n), this.current.set(e, e.v), zt == null || zt.set(e, e.v);
  }
  activate() {
    ut = this;
  }
  deactivate() {
    ut = null, zt = null;
  }
  flush() {
    if (Yn.length > 0) {
      if (this.activate(), Xu(), ut !== null && ut !== this)
        return;
    } else le(this, ni) === 0 && Zt(this, On, Ss).call(this);
    this.deactivate();
    for (const e of _s)
      if (_s.delete(e), e(), ut !== null)
        break;
  }
  increment() {
    Ve(this, ni, le(this, ni) + 1);
  }
  decrement() {
    Ve(this, ni, le(this, ni) - 1);
    for (const e of le(this, Fa))
      rn(e, yn), fi(e);
    for (const e of le(this, ka))
      rn(e, kr), fi(e);
    this.flush();
  }
  /** @param {() => void} fn */
  add_callback(e) {
    le(this, ji).add(e);
  }
  settled() {
    return (le(this, Ua) ?? Ve(this, Ua, ku())).promise;
  }
  static ensure() {
    if (ut === null) {
      const e = ut = new Ro();
      Za.add(ut), wa || Ro.enqueue(() => {
        ut === e && e.flush();
      });
    }
    return ut;
  }
  /** @param {() => void} task */
  static enqueue(e) {
    _r(e);
  }
  apply() {
  }
};
Gi = new WeakMap(), ji = new WeakMap(), ni = new WeakMap(), Ua = new WeakMap(), qi = new WeakMap(), Wi = new WeakMap(), ri = new WeakMap(), zi = new WeakMap(), Fa = new WeakMap(), ka = new WeakMap(), On = new WeakSet(), /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 */
Is = function(e) {
  var c;
  e.f ^= Jt;
  for (var n = e.first; n !== null; ) {
    var r = n.f, i = (r & (Ir | vi)) !== 0, a = i && (r & Jt) !== 0, o = a || (r & kn) !== 0 || this.skipped_effects.has(n);
    if (!o && n.fn !== null) {
      i ? n.f ^= Jt : r & zs ? le(this, ri).push(n) : r & Jt || (r & Uo && ((c = n.b) != null && c.is_pending()) ? le(this, qi).push(n) : Vo(n) && (n.f & Fr && le(this, zi).push(n), Da(n)));
      var u = n.first;
      if (u !== null) {
        n = u;
        continue;
      }
    }
    var l = n.parent;
    for (n = n.next; n === null && l !== null; )
      n = l.next, l = l.parent;
  }
}, /**
 * @param {Effect[]} effects
 */
lo = function(e) {
  for (const n of e)
    (n.f & yn ? le(this, Fa) : le(this, ka)).push(n), rn(n, Jt);
  e.length = 0;
}, /**
 * Append and remove branches to/from the DOM
 */
Ss = function() {
  var e;
  for (const n of le(this, ji))
    n();
  if (le(this, ji).clear(), Za.size > 1) {
    le(this, Gi).clear();
    let n = !0;
    for (const r of Za) {
      if (r === this) {
        n = !1;
        continue;
      }
      const i = [];
      for (const [o, u] of this.current) {
        if (r.current.has(o))
          if (n && u !== r.current.get(o))
            r.current.set(o, u);
          else
            continue;
        i.push(o);
      }
      if (i.length === 0)
        continue;
      const a = [...r.current.keys()].filter((o) => !this.current.has(o));
      if (a.length > 0) {
        for (const o of i)
          Zu(o, a);
        if (Yn.length > 0) {
          ut = r, r.apply();
          for (const o of Yn)
            Zt(e = r, On, Is).call(e, o);
          Yn = [], r.deactivate();
        }
      }
    }
    ut = null;
  }
  Za.delete(this);
};
let pr = Ro;
function Af(t) {
  var e = wa;
  wa = !0;
  try {
    for (var n; ; ) {
      if (Sf(), Yn.length === 0 && (ut == null || ut.flush(), Yn.length === 0))
        return Fo = null, /** @type {T} */
        n;
      Xu();
    }
  } finally {
    wa = e;
  }
}
function Xu() {
  var t = ki;
  ys = !0;
  try {
    var e = 0;
    for (wl(!0); Yn.length > 0; ) {
      var n = pr.ensure();
      if (e++ > 1e3) {
        var r, i;
        Cf();
      }
      n.process(Yn), Nr.clear();
    }
  } finally {
    ys = !1, wl(t), Fo = null;
  }
}
function Cf() {
  try {
    cf();
  } catch (t) {
    Zi(t, Fo);
  }
}
let fr = null;
function Cl(t) {
  var e = t.length;
  if (e !== 0) {
    for (var n = 0; n < e; ) {
      var r = t[n++];
      if (!(r.f & (mi | kn)) && Vo(r) && (fr = [], Da(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null && r.ac === null ? dc(r) : r.fn = null), (fr == null ? void 0 : fr.length) > 0)) {
        Nr.clear();
        for (const i of fr)
          Da(i);
        fr = [];
      }
    }
    fr = null;
  }
}
function Zu(t, e) {
  if (t.reactions !== null)
    for (const n of t.reactions) {
      const r = n.f;
      r & on ? Zu(
        /** @type {Derived} */
        n,
        e
      ) : r & (Uo | Fr) && Yu(n, e) && (rn(n, yn), fi(
        /** @type {Effect} */
        n
      ));
    }
}
function Yu(t, e) {
  if (t.deps !== null) {
    for (const n of t.deps)
      if (e.includes(n) || n.f & on && Yu(
        /** @type {Derived} */
        n,
        e
      ))
        return !0;
  }
  return !1;
}
function fi(t) {
  for (var e = Fo = t; e.parent !== null; ) {
    e = e.parent;
    var n = e.f;
    if (ys && e === We && n & Fr)
      return;
    if (n & (vi | Ir)) {
      if (!(n & Jt)) return;
      e.f ^= Jt;
    }
  }
  Yn.push(e);
}
function Tf(t) {
  let e = 0, n = hi(0), r;
  return () => {
    Gf() && (s(n), ja(() => (e === 0 && (r = jn(() => t(() => La(n)))), e += 1, () => {
      _r(() => {
        e -= 1, e === 0 && (r == null || r(), r = void 0, La(n));
      });
    })));
  };
}
var xf = Br | ia | Ks;
function wf(t, e, n) {
  new Lf(t, e, n);
}
var Hn, xn, js, Kn, ii, Xn, wn, fn, Zn, Lr, ai, Or, oi, Rr, Do, Mo, an, Of, Rf, uo, co, Es;
class Lf {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   */
  constructor(e, n, r) {
    rt(this, an);
    /** @type {Boundary | null} */
    Ti(this, "parent");
    rt(this, Hn, !1);
    /** @type {TemplateNode} */
    rt(this, xn);
    /** @type {TemplateNode | null} */
    rt(this, js, null);
    /** @type {BoundaryProps} */
    rt(this, Kn);
    /** @type {((anchor: Node) => void)} */
    rt(this, ii);
    /** @type {Effect} */
    rt(this, Xn);
    /** @type {Effect | null} */
    rt(this, wn, null);
    /** @type {Effect | null} */
    rt(this, fn, null);
    /** @type {Effect | null} */
    rt(this, Zn, null);
    /** @type {DocumentFragment | null} */
    rt(this, Lr, null);
    rt(this, ai, 0);
    rt(this, Or, 0);
    rt(this, oi, !1);
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    rt(this, Rr, null);
    rt(this, Do, () => {
      le(this, Rr) && Yi(le(this, Rr), le(this, ai));
    });
    rt(this, Mo, Tf(() => (Ve(this, Rr, hi(le(this, ai))), () => {
      Ve(this, Rr, null);
    })));
    Ve(this, xn, e), Ve(this, Kn, n), Ve(this, ii, r), this.parent = /** @type {Effect} */
    We.b, Ve(this, Hn, !!le(this, Kn).pending), Ve(this, Xn, Gr(() => {
      We.b = this;
      {
        try {
          Ve(this, wn, Yt(() => r(le(this, xn))));
        } catch (i) {
          this.error(i);
        }
        le(this, Or) > 0 ? Zt(this, an, co).call(this) : Ve(this, Hn, !1);
      }
    }, xf));
  }
  /**
   * Returns `true` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_pending() {
    return le(this, Hn) || !!this.parent && this.parent.is_pending();
  }
  has_pending_snippet() {
    return !!le(this, Kn).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   */
  update_pending_count(e) {
    Zt(this, an, Es).call(this, e), Ve(this, ai, le(this, ai) + e), _s.add(le(this, Do));
  }
  get_effect_pending() {
    return le(this, Mo).call(this), s(
      /** @type {Source<number>} */
      le(this, Rr)
    );
  }
  /** @param {unknown} error */
  error(e) {
    var n = le(this, Kn).onerror;
    let r = le(this, Kn).failed;
    if (le(this, oi) || !n && !r)
      throw e;
    le(this, wn) && (Kt(le(this, wn)), Ve(this, wn, null)), le(this, fn) && (Kt(le(this, fn)), Ve(this, fn, null)), le(this, Zn) && (Kt(le(this, Zn)), Ve(this, Zn, null));
    var i = !1, a = !1;
    const o = () => {
      if (i) {
        pf();
        return;
      }
      i = !0, a && mf(), pr.ensure(), Ve(this, ai, 0), le(this, Zn) !== null && Ur(le(this, Zn), () => {
        Ve(this, Zn, null);
      }), Ve(this, Hn, this.has_pending_snippet()), Ve(this, wn, Zt(this, an, uo).call(this, () => (Ve(this, oi, !1), Yt(() => le(this, ii).call(this, le(this, xn)))))), le(this, Or) > 0 ? Zt(this, an, co).call(this) : Ve(this, Hn, !1);
    };
    var u = qe;
    try {
      hn(null), a = !0, n == null || n(e, o), a = !1;
    } catch (l) {
      Zi(l, le(this, Xn) && le(this, Xn).parent);
    } finally {
      hn(u);
    }
    r && _r(() => {
      Ve(this, Zn, Zt(this, an, uo).call(this, () => {
        Ve(this, oi, !0);
        try {
          return Yt(() => {
            r(
              le(this, xn),
              () => e,
              () => o
            );
          });
        } catch (l) {
          return Zi(
            l,
            /** @type {Effect} */
            le(this, Xn).parent
          ), null;
        } finally {
          Ve(this, oi, !1);
        }
      }));
    });
  }
}
Hn = new WeakMap(), xn = new WeakMap(), js = new WeakMap(), Kn = new WeakMap(), ii = new WeakMap(), Xn = new WeakMap(), wn = new WeakMap(), fn = new WeakMap(), Zn = new WeakMap(), Lr = new WeakMap(), ai = new WeakMap(), Or = new WeakMap(), oi = new WeakMap(), Rr = new WeakMap(), Do = new WeakMap(), Mo = new WeakMap(), an = new WeakSet(), Of = function() {
  try {
    Ve(this, wn, Yt(() => le(this, ii).call(this, le(this, xn))));
  } catch (e) {
    this.error(e);
  }
  Ve(this, Hn, !1);
}, Rf = function() {
  const e = le(this, Kn).pending;
  e && (Ve(this, fn, Yt(() => e(le(this, xn)))), pr.enqueue(() => {
    Ve(this, wn, Zt(this, an, uo).call(this, () => (pr.ensure(), Yt(() => le(this, ii).call(this, le(this, xn)))))), le(this, Or) > 0 ? Zt(this, an, co).call(this) : (Ur(
      /** @type {Effect} */
      le(this, fn),
      () => {
        Ve(this, fn, null);
      }
    ), Ve(this, Hn, !1));
  }));
}, /**
 * @param {() => Effect | null} fn
 */
uo = function(e) {
  var n = We, r = qe, i = dt;
  tr(le(this, Xn)), hn(le(this, Xn)), Xi(le(this, Xn).ctx);
  try {
    return e();
  } catch (a) {
    return zu(a), null;
  } finally {
    tr(n), hn(r), Xi(i);
  }
}, co = function() {
  const e = (
    /** @type {(anchor: Node) => void} */
    le(this, Kn).pending
  );
  le(this, wn) !== null && (Ve(this, Lr, document.createDocumentFragment()), Df(le(this, wn), le(this, Lr))), le(this, fn) === null && Ve(this, fn, Yt(() => e(le(this, xn))));
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 */
Es = function(e) {
  var n;
  if (!this.has_pending_snippet()) {
    this.parent && Zt(n = this.parent, an, Es).call(n, e);
    return;
  }
  Ve(this, Or, le(this, Or) + e), le(this, Or) === 0 && (Ve(this, Hn, !1), le(this, fn) && Ur(le(this, fn), () => {
    Ve(this, fn, null);
  }), le(this, Lr) && (le(this, xn).before(le(this, Lr)), Ve(this, Lr, null)), _r(() => {
    pr.ensure().flush();
  }));
};
function Df(t, e) {
  for (var n = t.nodes_start, r = t.nodes_end; n !== null; ) {
    var i = n === r ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Ga(n)
    );
    e.append(n), n = i;
  }
}
function Qu(t, e, n) {
  const r = Ba() ? Va : Ys;
  if (e.length === 0) {
    n(t.map(r));
    return;
  }
  var i = ut, a = (
    /** @type {Effect} */
    We
  ), o = Mf();
  Promise.all(e.map((u) => /* @__PURE__ */ Pf(u))).then((u) => {
    o();
    try {
      n([...t.map(r), ...u]);
    } catch (l) {
      a.f & mi || Zi(l, a);
    }
    i == null || i.deactivate(), As();
  }).catch((u) => {
    Zi(u, a);
  });
}
function Mf() {
  var t = We, e = qe, n = dt, r = ut;
  return function() {
    tr(t), hn(e), Xi(n), r == null || r.activate();
  };
}
function As() {
  tr(null), hn(null), Xi(null);
}
// @__NO_SIDE_EFFECTS__
function Va(t) {
  var e = on | yn, n = qe !== null && qe.f & on ? (
    /** @type {Derived} */
    qe
  ) : null;
  return We === null || n !== null && n.f & Ln ? e |= Ln : We.f |= ia, {
    ctx: dt,
    deps: null,
    effects: null,
    equals: Gu,
    f: e,
    fn: t,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      kt
    ),
    wv: 0,
    parent: n ?? We,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function Pf(t, e) {
  let n = (
    /** @type {Effect | null} */
    We
  );
  n === null && of();
  var r = (
    /** @type {Boundary} */
    n.b
  ), i = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), a = hi(
    /** @type {V} */
    kt
  ), o = !qe, u = /* @__PURE__ */ new Map();
  return qf(() => {
    var f;
    var l = ku();
    i = l.promise;
    try {
      Promise.resolve(t()).then(l.resolve, l.reject).then(As);
    } catch (g) {
      l.reject(g), As();
    }
    var c = (
      /** @type {Batch} */
      ut
    ), d = r.is_pending();
    o && (r.update_pending_count(1), d || (c.increment(), (f = u.get(c)) == null || f.reject(Pi), u.delete(c), u.set(c, l)));
    const m = (g, h = void 0) => {
      if (d || c.activate(), h)
        h !== Pi && (a.f |= si, Yi(a, h));
      else {
        a.f & si && (a.f ^= si), Yi(a, g);
        for (const [p, b] of u) {
          if (u.delete(p), p === c) break;
          b.reject(Pi);
        }
      }
      o && (r.update_pending_count(-1), d || c.decrement());
    };
    l.promise.then(m, (g) => m(null, g || "unknown"));
  }), ko(() => {
    for (const l of u.values())
      l.reject(Pi);
  }), new Promise((l) => {
    function c(d) {
      function m() {
        d === i ? l(a) : c(i);
      }
      d.then(m, m);
    }
    c(i);
  });
}
// @__NO_SIDE_EFFECTS__
function ve(t) {
  const e = /* @__PURE__ */ Va(t);
  return vc(e), e;
}
// @__NO_SIDE_EFFECTS__
function Ys(t) {
  const e = /* @__PURE__ */ Va(t);
  return e.equals = ju, e;
}
function Ju(t) {
  var e = t.effects;
  if (e !== null) {
    t.effects = null;
    for (var n = 0; n < e.length; n += 1)
      Kt(
        /** @type {Effect} */
        e[n]
      );
  }
}
function Hf(t) {
  for (var e = t.parent; e !== null; ) {
    if (!(e.f & on))
      return (
        /** @type {Effect} */
        e
      );
    e = e.parent;
  }
  return null;
}
function Qs(t) {
  var e, n = We;
  tr(Hf(t));
  try {
    Ju(t), e = bc(t);
  } finally {
    tr(n);
  }
  return e;
}
function $u(t) {
  var e = Qs(t);
  if (t.equals(e) || (t.v = e, t.wv = gc()), !pi)
    if (zt !== null)
      zt.set(t, t.v);
    else {
      var n = (Mr || t.f & Ln) && t.deps !== null ? kr : Jt;
      rn(t, n);
    }
}
const Nr = /* @__PURE__ */ new Map();
function hi(t, e) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: t,
    reactions: null,
    equals: Gu,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function me(t, e) {
  const n = hi(t);
  return vc(n), n;
}
// @__NO_SIDE_EFFECTS__
function ec(t, e = !1, n = !0) {
  var i;
  const r = hi(t);
  return e || (r.equals = ju), aa && n && dt !== null && dt.l !== null && ((i = dt.l).s ?? (i.s = [])).push(r), r;
}
function X(t, e, n = !1) {
  qe !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Nn || qe.f & Al) && Ba() && qe.f & (on | Fr | Uo | Al) && !(nn != null && nn.includes(t)) && vf();
  let r = n ? ye(e) : e;
  return Yi(t, r);
}
function Yi(t, e) {
  if (!t.equals(e)) {
    var n = t.v;
    pi ? Nr.set(t, e) : Nr.set(t, n), t.v = e;
    var r = pr.ensure();
    r.capture(t, n), t.f & on && (t.f & yn && Qs(
      /** @type {Derived} */
      t
    ), rn(t, t.f & Ln ? kr : Jt)), t.wv = gc(), tc(t, yn), Ba() && We !== null && We.f & Jt && !(We.f & (Ir | vi)) && (Tn === null ? Kf([t]) : Tn.push(t));
  }
  return e;
}
function La(t) {
  X(t, t.v + 1);
}
function tc(t, e) {
  var n = t.reactions;
  if (n !== null)
    for (var r = Ba(), i = n.length, a = 0; a < i; a++) {
      var o = n[a], u = o.f;
      if (!(!r && o === We)) {
        var l = (u & yn) === 0;
        l && rn(o, e), u & on ? tc(
          /** @type {Derived} */
          o,
          kr
        ) : l && (u & Fr && fr !== null && fr.push(
          /** @type {Effect} */
          o
        ), fi(
          /** @type {Effect} */
          o
        ));
      }
    }
}
function ye(t) {
  if (typeof t != "object" || t === null || $n in t)
    return t;
  const e = Ws(t);
  if (e !== ef && e !== tf)
    return t;
  var n = /* @__PURE__ */ new Map(), r = Po(t), i = /* @__PURE__ */ me(0), a = li, o = (u) => {
    if (li === a)
      return u();
    var l = qe, c = li;
    hn(null), Ol(a);
    var d = u();
    return hn(l), Ol(c), d;
  };
  return r && n.set("length", /* @__PURE__ */ me(
    /** @type {any[]} */
    t.length
  )), new Proxy(
    /** @type {any} */
    t,
    {
      defineProperty(u, l, c) {
        (!("value" in c) || c.configurable === !1 || c.enumerable === !1 || c.writable === !1) && ff();
        var d = n.get(l);
        return d === void 0 ? d = o(() => {
          var m = /* @__PURE__ */ me(c.value);
          return n.set(l, m), m;
        }) : X(d, c.value, !0), !0;
      },
      deleteProperty(u, l) {
        var c = n.get(l);
        if (c === void 0) {
          if (l in u) {
            const d = o(() => /* @__PURE__ */ me(kt));
            n.set(l, d), La(i);
          }
        } else
          X(c, kt), La(i);
        return !0;
      },
      get(u, l, c) {
        var g;
        if (l === $n)
          return t;
        var d = n.get(l), m = l in u;
        if (d === void 0 && (!m || (g = Hr(u, l)) != null && g.writable) && (d = o(() => {
          var h = ye(m ? u[l] : kt), p = /* @__PURE__ */ me(h);
          return p;
        }), n.set(l, d)), d !== void 0) {
          var f = s(d);
          return f === kt ? void 0 : f;
        }
        return Reflect.get(u, l, c);
      },
      getOwnPropertyDescriptor(u, l) {
        var c = Reflect.getOwnPropertyDescriptor(u, l);
        if (c && "value" in c) {
          var d = n.get(l);
          d && (c.value = s(d));
        } else if (c === void 0) {
          var m = n.get(l), f = m == null ? void 0 : m.v;
          if (m !== void 0 && f !== kt)
            return {
              enumerable: !0,
              configurable: !0,
              value: f,
              writable: !0
            };
        }
        return c;
      },
      has(u, l) {
        var f;
        if (l === $n)
          return !0;
        var c = n.get(l), d = c !== void 0 && c.v !== kt || Reflect.has(u, l);
        if (c !== void 0 || We !== null && (!d || (f = Hr(u, l)) != null && f.writable)) {
          c === void 0 && (c = o(() => {
            var g = d ? ye(u[l]) : kt, h = /* @__PURE__ */ me(g);
            return h;
          }), n.set(l, c));
          var m = s(c);
          if (m === kt)
            return !1;
        }
        return d;
      },
      set(u, l, c, d) {
        var S;
        var m = n.get(l), f = l in u;
        if (r && l === "length")
          for (var g = c; g < /** @type {Source<number>} */
          m.v; g += 1) {
            var h = n.get(g + "");
            h !== void 0 ? X(h, kt) : g in u && (h = o(() => /* @__PURE__ */ me(kt)), n.set(g + "", h));
          }
        if (m === void 0)
          (!f || (S = Hr(u, l)) != null && S.writable) && (m = o(() => /* @__PURE__ */ me(void 0)), X(m, ye(c)), n.set(l, m));
        else {
          f = m.v !== kt;
          var p = o(() => ye(c));
          X(m, p);
        }
        var b = Reflect.getOwnPropertyDescriptor(u, l);
        if (b != null && b.set && b.set.call(d, c), !f) {
          if (r && typeof l == "string") {
            var y = (
              /** @type {Source<number>} */
              n.get("length")
            ), E = Number(l);
            Number.isInteger(E) && E >= y.v && X(y, E + 1);
          }
          La(i);
        }
        return !0;
      },
      ownKeys(u) {
        s(i);
        var l = Reflect.ownKeys(u).filter((m) => {
          var f = n.get(m);
          return f === void 0 || f.v !== kt;
        });
        for (var [c, d] of n)
          d.v !== kt && !(c in u) && l.push(c);
        return l;
      },
      setPrototypeOf() {
        hf();
      }
    }
  );
}
function Tl(t) {
  try {
    if (t !== null && typeof t == "object" && $n in t)
      return t[$n];
  } catch {
  }
  return t;
}
function Nf(t, e) {
  return Object.is(Tl(t), Tl(e));
}
var Oa, Js, nc, rc, ic;
function Uf() {
  if (Oa === void 0) {
    Oa = window, Js = document, nc = /Firefox/.test(navigator.userAgent);
    var t = Element.prototype, e = Node.prototype, n = Text.prototype;
    rc = Hr(e, "firstChild").get, ic = Hr(e, "nextSibling").get, El(t) && (t.__click = void 0, t.__className = void 0, t.__attributes = null, t.__style = void 0, t.__e = void 0), El(n) && (n.__t = void 0);
  }
}
function Vr(t = "") {
  return document.createTextNode(t);
}
// @__NO_SIDE_EFFECTS__
function Qi(t) {
  return rc.call(t);
}
// @__NO_SIDE_EFFECTS__
function Ga(t) {
  return ic.call(t);
}
function ce(t, e) {
  return /* @__PURE__ */ Qi(t);
}
function Z(t, e = !1) {
  {
    var n = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ Qi(
        /** @type {Node} */
        t
      )
    );
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ Ga(n) : n;
  }
}
function be(t, e = 1, n = !1) {
  let r = t;
  for (; e--; )
    r = /** @type {TemplateNode} */
    /* @__PURE__ */ Ga(r);
  return r;
}
function Ff(t) {
  t.textContent = "";
}
function $s() {
  return !1;
}
function kf(t, e) {
  if (e) {
    const n = document.body;
    t.autofocus = !0, _r(() => {
      document.activeElement === n && t.focus();
    });
  }
}
let xl = !1;
function Bf() {
  xl || (xl = !0, document.addEventListener(
    "reset",
    (t) => {
      Promise.resolve().then(() => {
        var e;
        if (!t.defaultPrevented)
          for (
            const n of
            /**@type {HTMLFormElement} */
            t.target.elements
          )
            (e = n.__on_r) == null || e.call(n);
      });
    },
    // In the capture phase to guarantee we get noticed of it (no possiblity of stopPropagation)
    { capture: !0 }
  ));
}
function oa(t) {
  var e = qe, n = We;
  hn(null), tr(null);
  try {
    return t();
  } finally {
    hn(e), tr(n);
  }
}
function ac(t, e, n, r = n) {
  t.addEventListener(e, () => oa(n));
  const i = t.__on_r;
  i ? t.__on_r = () => {
    i(), r(!0);
  } : t.__on_r = () => r(!0), Bf();
}
function oc(t) {
  We === null && qe === null && uf(), qe !== null && qe.f & Ln && We === null && lf(), pi && sf();
}
function Vf(t, e) {
  var n = e.last;
  n === null ? e.last = e.first = t : (n.next = t, t.prev = n, e.last = t);
}
function nr(t, e, n, r = !0) {
  var i = We;
  i !== null && i.f & kn && (t |= kn);
  var a = {
    ctx: dt,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: t | yn,
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
      Da(a), a.f |= No;
    } catch (l) {
      throw Kt(a), l;
    }
  else e !== null && fi(a);
  if (r) {
    var o = a;
    if (n && o.deps === null && o.teardown === null && o.nodes_start === null && o.first === o.last && // either `null`, or a singular child
    !(o.f & ia) && (o = o.first), o !== null && (o.parent = i, i !== null && Vf(o, i), qe !== null && qe.f & on && !(t & vi))) {
      var u = (
        /** @type {Derived} */
        qe
      );
      (u.effects ?? (u.effects = [])).push(o);
    }
  }
  return a;
}
function Gf() {
  return qe !== null && !Nn;
}
function ko(t) {
  const e = nr(Ho, null, !1);
  return rn(e, Jt), e.teardown = t, e;
}
function Oe(t) {
  oc();
  var e = (
    /** @type {Effect} */
    We.f
  ), n = !qe && (e & Ir) !== 0 && (e & No) === 0;
  if (n) {
    var r = (
      /** @type {ComponentContext} */
      dt
    );
    (r.e ?? (r.e = [])).push(t);
  } else
    return sc(t);
}
function sc(t) {
  return nr(zs | Bu, t, !1);
}
function lc(t) {
  return oc(), nr(Ho | Bu, t, !0);
}
function jf(t) {
  pr.ensure();
  const e = nr(vi | ia, t, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? Ur(e, () => {
      Kt(e), r(void 0);
    }) : (Kt(e), r(void 0));
  });
}
function gi(t) {
  return nr(zs, t, !1);
}
function qf(t) {
  return nr(Uo | ia, t, !0);
}
function ja(t, e = 0) {
  return nr(Ho | e, t, !0);
}
function Te(t, e = [], n = []) {
  Qu(e, n, (r) => {
    nr(Ho, () => t(...r.map(s)), !0);
  });
}
function Gr(t, e = 0) {
  var n = nr(Fr | e, t, !0);
  return n;
}
function Yt(t, e = !0) {
  return nr(Ir | ia, t, !0, e);
}
function uc(t) {
  var e = t.teardown;
  if (e !== null) {
    const n = pi, r = qe;
    Ll(!0), hn(null);
    try {
      e.call(null);
    } finally {
      Ll(n), hn(r);
    }
  }
}
function cc(t, e = !1) {
  var n = t.first;
  for (t.first = t.last = null; n !== null; ) {
    const i = n.ac;
    i !== null && oa(() => {
      i.abort(Pi);
    });
    var r = n.next;
    n.f & vi ? n.parent = null : Kt(n, e), n = r;
  }
}
function Wf(t) {
  for (var e = t.first; e !== null; ) {
    var n = e.next;
    e.f & Ir || Kt(e), e = n;
  }
}
function Kt(t, e = !0) {
  var n = !1;
  (e || t.f & rf) && t.nodes_start !== null && t.nodes_end !== null && (zf(
    t.nodes_start,
    /** @type {TemplateNode} */
    t.nodes_end
  ), n = !0), cc(t, e && !n), bo(t, 0), rn(t, mi);
  var r = t.transitions;
  if (r !== null)
    for (const a of r)
      a.stop();
  uc(t);
  var i = t.parent;
  i !== null && i.first !== null && dc(t), t.next = t.prev = t.teardown = t.ctx = t.deps = t.fn = t.nodes_start = t.nodes_end = t.ac = null;
}
function zf(t, e) {
  for (; t !== null; ) {
    var n = t === e ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Ga(t)
    );
    t.remove(), t = n;
  }
}
function dc(t) {
  var e = t.parent, n = t.prev, r = t.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), e !== null && (e.first === t && (e.first = r), e.last === t && (e.last = n));
}
function Ur(t, e) {
  var n = [];
  el(t, n, !0), fc(n, () => {
    Kt(t), e && e();
  });
}
function fc(t, e) {
  var n = t.length;
  if (n > 0) {
    var r = () => --n || e();
    for (var i of t)
      i.out(r);
  } else
    e();
}
function el(t, e, n) {
  if (!(t.f & kn)) {
    if (t.f ^= kn, t.transitions !== null)
      for (const o of t.transitions)
        (o.is_global || n) && e.push(o);
    for (var r = t.first; r !== null; ) {
      var i = r.next, a = (r.f & Br) !== 0 || (r.f & Ir) !== 0;
      el(r, e, a ? n : !1), r = i;
    }
  }
}
function Bo(t) {
  hc(t, !0);
}
function hc(t, e) {
  if (t.f & kn) {
    t.f ^= kn, t.f & Jt || (rn(t, yn), fi(t));
    for (var n = t.first; n !== null; ) {
      var r = n.next, i = (n.f & Br) !== 0 || (n.f & Ir) !== 0;
      hc(n, i ? e : !1), n = r;
    }
    if (t.transitions !== null)
      for (const a of t.transitions)
        (a.is_global || e) && a.in();
  }
}
let ki = !1;
function wl(t) {
  ki = t;
}
let pi = !1;
function Ll(t) {
  pi = t;
}
let qe = null, Nn = !1;
function hn(t) {
  qe = t;
}
let We = null;
function tr(t) {
  We = t;
}
let nn = null;
function vc(t) {
  qe !== null && (nn === null ? nn = [t] : nn.push(t));
}
let tn = null, bn = 0, Tn = null;
function Kf(t) {
  Tn = t;
}
let mc = 1, Ra = 0, li = Ra;
function Ol(t) {
  li = t;
}
let Mr = !1;
function gc() {
  return ++mc;
}
function Vo(t) {
  var m;
  var e = t.f;
  if (e & yn)
    return !0;
  if (e & kr) {
    var n = t.deps, r = (e & Ln) !== 0;
    if (n !== null) {
      var i, a, o = (e & po) !== 0, u = r && We !== null && !Mr, l = n.length;
      if ((o || u) && (We === null || !(We.f & mi))) {
        var c = (
          /** @type {Derived} */
          t
        ), d = c.parent;
        for (i = 0; i < l; i++)
          a = n[i], (o || !((m = a == null ? void 0 : a.reactions) != null && m.includes(c))) && (a.reactions ?? (a.reactions = [])).push(c);
        o && (c.f ^= po), u && d !== null && !(d.f & Ln) && (c.f ^= Ln);
      }
      for (i = 0; i < l; i++)
        if (a = n[i], Vo(
          /** @type {Derived} */
          a
        ) && $u(
          /** @type {Derived} */
          a
        ), a.wv > t.wv)
          return !0;
    }
    (!r || We !== null && !Mr) && rn(t, Jt);
  }
  return !1;
}
function pc(t, e, n = !0) {
  var r = t.reactions;
  if (r !== null && !(nn != null && nn.includes(t)))
    for (var i = 0; i < r.length; i++) {
      var a = r[i];
      a.f & on ? pc(
        /** @type {Derived} */
        a,
        e,
        !1
      ) : e === a && (n ? rn(a, yn) : a.f & Jt && rn(a, kr), fi(
        /** @type {Effect} */
        a
      ));
    }
}
function bc(t) {
  var p;
  var e = tn, n = bn, r = Tn, i = qe, a = Mr, o = nn, u = dt, l = Nn, c = li, d = t.f;
  tn = /** @type {null | Value[]} */
  null, bn = 0, Tn = null, Mr = (d & Ln) !== 0 && (Nn || !ki || qe === null), qe = d & (Ir | vi) ? null : t, nn = null, Xi(t.ctx), Nn = !1, li = ++Ra, t.ac !== null && (oa(() => {
    t.ac.abort(Pi);
  }), t.ac = null);
  try {
    t.f |= bs;
    var m = (
      /** @type {Function} */
      t.fn
    ), f = m(), g = t.deps;
    if (tn !== null) {
      var h;
      if (bo(t, bn), g !== null && bn > 0)
        for (g.length = bn + tn.length, h = 0; h < tn.length; h++)
          g[bn + h] = tn[h];
      else
        t.deps = g = tn;
      if (!Mr || // Deriveds that already have reactions can cleanup, so we still add them as reactions
      d & on && /** @type {import('#client').Derived} */
      t.reactions !== null)
        for (h = bn; h < g.length; h++)
          ((p = g[h]).reactions ?? (p.reactions = [])).push(t);
    } else g !== null && bn < g.length && (bo(t, bn), g.length = bn);
    if (Ba() && Tn !== null && !Nn && g !== null && !(t.f & (on | kr | yn)))
      for (h = 0; h < /** @type {Source[]} */
      Tn.length; h++)
        pc(
          Tn[h],
          /** @type {Effect} */
          t
        );
    return i !== null && i !== t && (Ra++, Tn !== null && (r === null ? r = Tn : r.push(.../** @type {Source[]} */
    Tn))), t.f & si && (t.f ^= si), f;
  } catch (b) {
    return zu(b);
  } finally {
    t.f ^= bs, tn = e, bn = n, Tn = r, qe = i, Mr = a, nn = o, Xi(u), Nn = l, li = c;
  }
}
function Xf(t, e) {
  let n = e.reactions;
  if (n !== null) {
    var r = $d.call(n, t);
    if (r !== -1) {
      var i = n.length - 1;
      i === 0 ? n = e.reactions = null : (n[r] = n[i], n.pop());
    }
  }
  n === null && e.f & on && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (tn === null || !tn.includes(e)) && (rn(e, kr), e.f & (Ln | po) || (e.f ^= po), Ju(
    /** @type {Derived} **/
    e
  ), bo(
    /** @type {Derived} **/
    e,
    0
  ));
}
function bo(t, e) {
  var n = t.deps;
  if (n !== null)
    for (var r = e; r < n.length; r++)
      Xf(t, n[r]);
}
function Da(t) {
  var e = t.f;
  if (!(e & mi)) {
    rn(t, Jt);
    var n = We, r = ki;
    We = t, ki = !0;
    try {
      e & Fr ? Wf(t) : cc(t), uc(t);
      var i = bc(t);
      t.teardown = typeof i == "function" ? i : null, t.wv = mc;
      var a;
      Uu && _f && t.f & yn && t.deps;
    } finally {
      ki = r, We = n;
    }
  }
}
async function _c() {
  await Promise.resolve(), Af();
}
function s(t) {
  var e = t.f, n = (e & on) !== 0;
  if (qe !== null && !Nn) {
    var r = We !== null && (We.f & mi) !== 0;
    if (!r && !(nn != null && nn.includes(t))) {
      var i = qe.deps;
      if (qe.f & bs)
        t.rv < Ra && (t.rv = Ra, tn === null && i !== null && i[bn] === t ? bn++ : tn === null ? tn = [t] : (!Mr || !tn.includes(t)) && tn.push(t));
      else {
        (qe.deps ?? (qe.deps = [])).push(t);
        var a = t.reactions;
        a === null ? t.reactions = [qe] : a.includes(qe) || a.push(qe);
      }
    }
  } else if (n && /** @type {Derived} */
  t.deps === null && /** @type {Derived} */
  t.effects === null) {
    var o = (
      /** @type {Derived} */
      t
    ), u = o.parent;
    u !== null && !(u.f & Ln) && (o.f ^= Ln);
  }
  if (pi) {
    if (Nr.has(t))
      return Nr.get(t);
    if (n) {
      o = /** @type {Derived} */
      t;
      var l = o.v;
      return (!(o.f & Jt) && o.reactions !== null || yc(o)) && (l = Qs(o)), Nr.set(o, l), l;
    }
  } else if (n) {
    if (o = /** @type {Derived} */
    t, zt != null && zt.has(o))
      return zt.get(o);
    Vo(o) && $u(o);
  }
  if (zt != null && zt.has(t))
    return zt.get(t);
  if (t.f & si)
    throw t.v;
  return t.v;
}
function yc(t) {
  if (t.v === kt) return !0;
  if (t.deps === null) return !1;
  for (const e of t.deps)
    if (Nr.has(e) || e.f & on && yc(
      /** @type {Derived} */
      e
    ))
      return !0;
  return !1;
}
function jn(t) {
  var e = Nn;
  try {
    return Nn = !0, t();
  } finally {
    Nn = e;
  }
}
const Zf = -7169;
function rn(t, e) {
  t.f = t.f & Zf | e;
}
function Ic(t) {
  if (!(typeof t != "object" || !t || t instanceof EventTarget)) {
    if ($n in t)
      Cs(t);
    else if (!Array.isArray(t))
      for (let e in t) {
        const n = t[e];
        typeof n == "object" && n && $n in n && Cs(n);
      }
  }
}
function Cs(t, e = /* @__PURE__ */ new Set()) {
  if (typeof t == "object" && t !== null && // We don't want to traverse DOM elements
  !(t instanceof EventTarget) && !e.has(t)) {
    e.add(t), t instanceof Date && t.getTime();
    for (let r in t)
      try {
        Cs(t[r], e);
      } catch {
      }
    const n = Ws(t);
    if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
      const r = Fu(n);
      for (let i in r) {
        const a = r[i].get;
        if (a)
          try {
            a.call(t);
          } catch {
          }
      }
    }
  }
}
const Sc = /* @__PURE__ */ new Set(), Ts = /* @__PURE__ */ new Set();
function tl(t, e, n, r = {}) {
  function i(a) {
    if (r.capture || Ta.call(e, a), !a.cancelBubble)
      return oa(() => n == null ? void 0 : n.call(this, a));
  }
  return t.startsWith("pointer") || t.startsWith("touch") || t === "wheel" ? _r(() => {
    e.addEventListener(t, i, r);
  }) : e.addEventListener(t, i, r), i;
}
function Yf(t, e, n, r = {}) {
  var i = tl(e, t, n, r);
  return () => {
    t.removeEventListener(e, i, r);
  };
}
function Jn(t, e, n, r, i) {
  var a = { capture: r, passive: i }, o = tl(t, e, n, a);
  (e === document.body || // @ts-ignore
  e === window || // @ts-ignore
  e === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  e instanceof HTMLMediaElement) && ko(() => {
    e.removeEventListener(t, o, a);
  });
}
function Sn(t) {
  for (var e = 0; e < t.length; e++)
    Sc.add(t[e]);
  for (var n of Ts)
    n(t);
}
let Rl = null;
function Ta(t) {
  var E;
  var e = this, n = (
    /** @type {Node} */
    e.ownerDocument
  ), r = t.type, i = ((E = t.composedPath) == null ? void 0 : E.call(t)) || [], a = (
    /** @type {null | Element} */
    i[0] || t.target
  );
  Rl = t;
  var o = 0, u = Rl === t && t.__root;
  if (u) {
    var l = i.indexOf(u);
    if (l !== -1 && (e === document || e === /** @type {any} */
    window)) {
      t.__root = e;
      return;
    }
    var c = i.indexOf(e);
    if (c === -1)
      return;
    l <= c && (o = l);
  }
  if (a = /** @type {Element} */
  i[o] || t.target, a !== e) {
    mo(t, "currentTarget", {
      configurable: !0,
      get() {
        return a || n;
      }
    });
    var d = qe, m = We;
    hn(null), tr(null);
    try {
      for (var f, g = []; a !== null; ) {
        var h = a.assignedSlot || a.parentNode || /** @type {any} */
        a.host || null;
        try {
          var p = a["__" + r];
          if (p != null && (!/** @type {any} */
          a.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          t.target === a))
            if (Po(p)) {
              var [b, ...y] = p;
              b.apply(a, [t, ...y]);
            } else
              p.call(a, t);
        } catch (S) {
          f ? g.push(S) : f = S;
        }
        if (t.cancelBubble || h === e || h === null)
          break;
        a = h;
      }
      if (f) {
        for (let S of g)
          queueMicrotask(() => {
            throw S;
          });
        throw f;
      }
    } finally {
      t.__root = e, delete t.currentTarget, hn(d), tr(m);
    }
  }
}
function Ec(t) {
  var e = document.createElement("template");
  return e.innerHTML = t.replaceAll("<!>", "<!---->"), e.content;
}
function Ji(t, e) {
  var n = (
    /** @type {Effect} */
    We
  );
  n.nodes_start === null && (n.nodes_start = t, n.nodes_end = e);
}
// @__NO_SIDE_EFFECTS__
function de(t, e) {
  var n = (e & 1) !== 0, r = (e & 2) !== 0, i, a = !t.startsWith("<!>");
  return () => {
    i === void 0 && (i = Ec(a ? t : "<!>" + t), n || (i = /** @type {Node} */
    /* @__PURE__ */ Qi(i)));
    var o = (
      /** @type {TemplateNode} */
      r || nc ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (n) {
      var u = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Qi(o)
      ), l = (
        /** @type {TemplateNode} */
        o.lastChild
      );
      Ji(u, l);
    } else
      Ji(o, o);
    return o;
  };
}
// @__NO_SIDE_EFFECTS__
function Qf(t, e, n = "svg") {
  var r = !t.startsWith("<!>"), i = `<${n}>${r ? t : "<!>" + t}</${n}>`, a;
  return () => {
    if (!a) {
      var o = (
        /** @type {DocumentFragment} */
        Ec(i)
      ), u = (
        /** @type {Element} */
        /* @__PURE__ */ Qi(o)
      );
      a = /** @type {Element} */
      /* @__PURE__ */ Qi(u);
    }
    var l = (
      /** @type {TemplateNode} */
      a.cloneNode(!0)
    );
    return Ji(l, l), l;
  };
}
// @__NO_SIDE_EFFECTS__
function _t(t, e) {
  return /* @__PURE__ */ Qf(t, e, "svg");
}
function gt(t = "") {
  {
    var e = Vr(t + "");
    return Ji(e, e), e;
  }
}
function re() {
  var t = document.createDocumentFragment(), e = document.createComment(""), n = Vr();
  return t.append(e, n), Ji(e, n), t;
}
function T(t, e) {
  t !== null && t.before(
    /** @type {Node} */
    e
  );
}
function Jf(t) {
  return t.endsWith("capture") && t !== "gotpointercapture" && t !== "lostpointercapture";
}
const $f = [
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
function eh(t) {
  return $f.includes(t);
}
const th = {
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
function nh(t) {
  return t = t.toLowerCase(), th[t] ?? t;
}
const rh = ["touchstart", "touchmove"];
function ih(t) {
  return rh.includes(t);
}
let _o = !0;
function Dl(t) {
  _o = t;
}
function ze(t, e) {
  var n = e == null ? "" : typeof e == "object" ? e + "" : e;
  n !== (t.__t ?? (t.__t = t.nodeValue)) && (t.__t = n, t.nodeValue = n + "");
}
function ah(t, e) {
  return oh(t, e);
}
const xi = /* @__PURE__ */ new Map();
function oh(t, { target: e, anchor: n, props: r = {}, events: i, context: a, intro: o = !0 }) {
  Uf();
  var u = /* @__PURE__ */ new Set(), l = (m) => {
    for (var f = 0; f < m.length; f++) {
      var g = m[f];
      if (!u.has(g)) {
        u.add(g);
        var h = ih(g);
        e.addEventListener(g, Ta, { passive: h });
        var p = xi.get(g);
        p === void 0 ? (document.addEventListener(g, Ta, { passive: h }), xi.set(g, 1)) : xi.set(g, p + 1);
      }
    }
  };
  l(qs(Sc)), Ts.add(l);
  var c = void 0, d = jf(() => {
    var m = n ?? e.appendChild(Vr());
    return wf(
      /** @type {TemplateNode} */
      m,
      {
        pending: () => {
        }
      },
      (f) => {
        if (a) {
          we({});
          var g = (
            /** @type {ComponentContext} */
            dt
          );
          g.c = a;
        }
        i && (r.$$events = i), _o = o, c = t(f, r) || {}, _o = !0, a && Le();
      }
    ), () => {
      var h;
      for (var f of u) {
        e.removeEventListener(f, Ta);
        var g = (
          /** @type {number} */
          xi.get(f)
        );
        --g === 0 ? (document.removeEventListener(f, Ta), xi.delete(f)) : xi.set(f, g);
      }
      Ts.delete(l), m !== n && ((h = m.parentNode) == null || h.removeChild(m));
    };
  });
  return sh.set(c, d), c;
}
let sh = /* @__PURE__ */ new WeakMap();
function Ae(t, e, ...n) {
  var r = t, i = ge, a;
  Gr(() => {
    i !== (i = e()) && (a && (Kt(a), a = null), a = Yt(() => (
      /** @type {SnippetFn} */
      i(r, ...n)
    )));
  }, Br);
}
function at(t) {
  dt === null && Xs(), aa && dt.l !== null ? lh(dt).m.push(t) : Oe(() => {
    const e = jn(t);
    if (typeof e == "function") return (
      /** @type {() => void} */
      e
    );
  });
}
function En(t) {
  dt === null && Xs(), at(() => () => jn(t));
}
function lh(t) {
  var e = (
    /** @type {ComponentContextLegacy} */
    t.l
  );
  return e.u ?? (e.u = { a: [], b: [], m: [] });
}
function oe(t, e, n = !1) {
  var r = t, i = null, a = null, o = kt, u = n ? Br : 0, l = !1;
  const c = (g, h = !0) => {
    l = !0, f(h, g);
  };
  var d = null;
  function m() {
    d !== null && (d.lastChild.remove(), r.before(d), d = null);
    var g = o ? i : a, h = o ? a : i;
    g && Bo(g), h && Ur(h, () => {
      o ? a = null : i = null;
    });
  }
  const f = (g, h) => {
    if (o !== (o = g)) {
      var p = $s(), b = r;
      if (p && (d = document.createDocumentFragment(), d.append(b = Vr())), o ? i ?? (i = h && Yt(() => h(b))) : a ?? (a = h && Yt(() => h(b))), p) {
        var y = (
          /** @type {Batch} */
          ut
        ), E = o ? i : a, S = o ? a : i;
        E && y.skipped_effects.delete(E), S && y.skipped_effects.add(S), y.add_callback(m);
      } else
        m();
    }
  };
  Gr(() => {
    l = !1, e(c), l || f(null, null);
  }, u);
}
let ui = null;
function Ml(t) {
  ui = t;
}
function Hi(t, e) {
  return e;
}
function uh(t, e, n) {
  for (var r = t.items, i = [], a = e.length, o = 0; o < a; o++)
    el(e[o].e, i, !0);
  var u = a > 0 && i.length === 0 && n !== null;
  if (u) {
    var l = (
      /** @type {Element} */
      /** @type {Element} */
      n.parentNode
    );
    Ff(l), l.append(
      /** @type {Element} */
      n
    ), r.clear(), zn(t, e[0].prev, e[a - 1].next);
  }
  fc(i, () => {
    for (var c = 0; c < a; c++) {
      var d = e[c];
      u || (r.delete(d.k), zn(t, d.prev, d.next)), Kt(d.e, !u);
    }
  });
}
function Qn(t, e, n, r, i, a = null) {
  var o = t, u = { flags: e, items: /* @__PURE__ */ new Map(), first: null }, l = (e & 4) !== 0;
  if (l) {
    var c = (
      /** @type {Element} */
      t
    );
    o = c.appendChild(Vr());
  }
  var d = null, m = !1, f = /* @__PURE__ */ new Map(), g = /* @__PURE__ */ Ys(() => {
    var y = n();
    return Po(y) ? y : y == null ? [] : qs(y);
  }), h, p;
  function b() {
    ch(
      p,
      h,
      u,
      f,
      o,
      i,
      e,
      r,
      n
    ), a !== null && (h.length === 0 ? d ? Bo(d) : d = Yt(() => a(o)) : d !== null && Ur(d, () => {
      d = null;
    }));
  }
  Gr(() => {
    p ?? (p = /** @type {Effect} */
    We), h = /** @type {V[]} */
    s(g);
    var y = h.length;
    if (!(m && y === 0)) {
      m = y === 0;
      var E, S, _, A;
      if ($s()) {
        var I = /* @__PURE__ */ new Set(), L = (
          /** @type {Batch} */
          ut
        );
        for (S = 0; S < y; S += 1) {
          _ = h[S], A = r(_, S);
          var C = u.items.get(A) ?? f.get(A);
          C ? e & 3 && Ac(C, _, S, e) : (E = Cc(
            null,
            u,
            null,
            null,
            _,
            A,
            S,
            i,
            e,
            n,
            !0
          ), f.set(A, E)), I.add(A);
        }
        for (const [w, B] of u.items)
          I.has(w) || L.skipped_effects.add(B.e);
        L.add_callback(b);
      } else
        b();
      s(g);
    }
  });
}
function ch(t, e, n, r, i, a, o, u, l) {
  var ne, F, R, W;
  var c = (o & 8) !== 0, d = (o & 3) !== 0, m = e.length, f = n.items, g = n.first, h = g, p, b = null, y, E = [], S = [], _, A, I, L;
  if (c)
    for (L = 0; L < m; L += 1)
      _ = e[L], A = u(_, L), I = f.get(A), I !== void 0 && ((ne = I.a) == null || ne.measure(), (y ?? (y = /* @__PURE__ */ new Set())).add(I));
  for (L = 0; L < m; L += 1) {
    if (_ = e[L], A = u(_, L), I = f.get(A), I === void 0) {
      var C = r.get(A);
      if (C !== void 0) {
        r.delete(A), f.set(A, C);
        var w = b ? b.next : h;
        zn(n, b, C), zn(n, C, w), Zo(C, w, i), b = C;
      } else {
        var B = h ? (
          /** @type {TemplateNode} */
          h.e.nodes_start
        ) : i;
        b = Cc(
          B,
          n,
          b,
          b === null ? n.first : b.next,
          _,
          A,
          L,
          a,
          o,
          l
        );
      }
      f.set(A, b), E = [], S = [], h = b.next;
      continue;
    }
    if (d && Ac(I, _, L, o), I.e.f & kn && (Bo(I.e), c && ((F = I.a) == null || F.unfix(), (y ?? (y = /* @__PURE__ */ new Set())).delete(I))), I !== h) {
      if (p !== void 0 && p.has(I)) {
        if (E.length < S.length) {
          var $ = S[0], q;
          b = $.prev;
          var z = E[0], O = E[E.length - 1];
          for (q = 0; q < E.length; q += 1)
            Zo(E[q], $, i);
          for (q = 0; q < S.length; q += 1)
            p.delete(S[q]);
          zn(n, z.prev, O.next), zn(n, b, z), zn(n, O, $), h = $, b = O, L -= 1, E = [], S = [];
        } else
          p.delete(I), Zo(I, h, i), zn(n, I.prev, I.next), zn(n, I, b === null ? n.first : b.next), zn(n, b, I), b = I;
        continue;
      }
      for (E = [], S = []; h !== null && h.k !== A; )
        h.e.f & kn || (p ?? (p = /* @__PURE__ */ new Set())).add(h), S.push(h), h = h.next;
      if (h === null)
        continue;
      I = h;
    }
    E.push(I), b = I, h = I.next;
  }
  if (h !== null || p !== void 0) {
    for (var x = p === void 0 ? [] : qs(p); h !== null; )
      h.e.f & kn || x.push(h), h = h.next;
    var P = x.length;
    if (P > 0) {
      var N = o & 4 && m === 0 ? i : null;
      if (c) {
        for (L = 0; L < P; L += 1)
          (R = x[L].a) == null || R.measure();
        for (L = 0; L < P; L += 1)
          (W = x[L].a) == null || W.fix();
      }
      uh(n, x, N);
    }
  }
  c && _r(() => {
    var Ie;
    if (y !== void 0)
      for (I of y)
        (Ie = I.a) == null || Ie.apply();
  }), t.first = n.first && n.first.e, t.last = b && b.e;
  for (var K of r.values())
    Kt(K.e);
  r.clear();
}
function Ac(t, e, n, r) {
  r & 1 && Yi(t.v, e), r & 2 ? Yi(
    /** @type {Value<number>} */
    t.i,
    n
  ) : t.i = n;
}
function Cc(t, e, n, r, i, a, o, u, l, c, d) {
  var m = ui, f = (l & 1) !== 0, g = (l & 16) === 0, h = f ? g ? /* @__PURE__ */ ec(i, !1, !1) : hi(i) : i, p = l & 2 ? hi(o) : o, b = {
    i: p,
    v: h,
    k: a,
    a: null,
    // @ts-expect-error
    e: null,
    prev: n,
    next: r
  };
  ui = b;
  try {
    if (t === null) {
      var y = document.createDocumentFragment();
      y.append(t = Vr());
    }
    return b.e = Yt(() => u(
      /** @type {Node} */
      t,
      h,
      p,
      c
    ), bf), b.e.prev = n && n.e, b.e.next = r && r.e, n === null ? d || (e.first = b) : (n.next = b, n.e.next = b.e), r !== null && (r.prev = b, r.e.prev = b.e), b;
  } finally {
    ui = m;
  }
}
function Zo(t, e, n) {
  for (var r = t.next ? (
    /** @type {TemplateNode} */
    t.next.e.nodes_start
  ) : n, i = e ? (
    /** @type {TemplateNode} */
    e.e.nodes_start
  ) : n, a = (
    /** @type {TemplateNode} */
    t.e.nodes_start
  ); a !== null && a !== r; ) {
    var o = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Ga(a)
    );
    i.before(a), a = o;
  }
}
function zn(t, e, n) {
  e === null ? t.first = n : (e.next = n, e.e.next = n && n.e), n !== null && (n.prev = e, n.e.prev = e && e.e);
}
function rr(t, e, n) {
  var r = t, i, a, o = null, u = null;
  function l() {
    a && (Ur(a), a = null), o && (o.lastChild.remove(), r.before(o), o = null), a = u, u = null;
  }
  Gr(() => {
    if (i !== (i = e())) {
      var c = $s();
      if (i) {
        var d = r;
        c && (o = document.createDocumentFragment(), o.append(d = Vr()), a && ut.skipped_effects.add(a)), u = Yt(() => n(d, i));
      }
      c ? ut.add_callback(l) : l();
    }
  }, Br);
}
function Pl(t, e, n, r, i, a) {
  var o, u, l = null, c = (
    /** @type {TemplateNode} */
    t
  ), d, m = ui;
  Gr(() => {
    const f = e() || null;
    var g = f === "svg" ? Qd : null;
    if (f !== o) {
      var h = ui;
      Ml(m), d && (f === null ? Ur(d, () => {
        d = null, u = null;
      }) : f === u ? Bo(d) : (Kt(d), Dl(!1))), f && f !== u && (d = Yt(() => {
        if (l = g ? document.createElementNS(g, f) : document.createElement(f), Ji(l, l), r) {
          var p = (
            /** @type {TemplateNode} */
            l.appendChild(Vr())
          );
          r(l, p);
        }
        We.nodes_end = l, c.before(l);
      })), o = f, o && (u = o), Dl(!0), Ml(h);
    }
  }, Br);
}
function Ne(t, e, n) {
  gi(() => {
    var r = jn(() => e(t, n == null ? void 0 : n()) || {});
    if (n && (r != null && r.update)) {
      var i = !1, a = (
        /** @type {any} */
        {}
      );
      ja(() => {
        var o = n();
        Ic(o), i && Zs(a, o) && (a = o, r.update(o));
      }), i = !0;
    }
    if (r != null && r.destroy)
      return () => (
        /** @type {Function} */
        r.destroy()
      );
  });
}
function dh(t, e) {
  var n = void 0, r;
  Gr(() => {
    n !== (n = e()) && (r && (Kt(r), r = null), n && (r = Yt(() => {
      gi(() => (
        /** @type {(node: Element) => void} */
        n(t)
      ));
    })));
  });
}
function Tc(t) {
  var e, n, r = "";
  if (typeof t == "string" || typeof t == "number") r += t;
  else if (typeof t == "object") if (Array.isArray(t)) {
    var i = t.length;
    for (e = 0; e < i; e++) t[e] && (n = Tc(t[e])) && (r && (r += " "), r += n);
  } else for (n in t) t[n] && (r && (r += " "), r += n);
  return r;
}
function fh() {
  for (var t, e, n = 0, r = "", i = arguments.length; n < i; n++) (t = arguments[n]) && (e = Tc(t)) && (r && (r += " "), r += e);
  return r;
}
function xc(t) {
  return typeof t == "object" ? fh(t) : t ?? "";
}
const Hl = [...` 	
\r\f \v\uFEFF`];
function hh(t, e, n) {
  var r = t == null ? "" : "" + t;
  if (e && (r = r ? r + " " + e : e), n) {
    for (var i in n)
      if (n[i])
        r = r ? r + " " + i : i;
      else if (r.length)
        for (var a = i.length, o = 0; (o = r.indexOf(i, o)) >= 0; ) {
          var u = o + a;
          (o === 0 || Hl.includes(r[o - 1])) && (u === r.length || Hl.includes(r[u])) ? r = (o === 0 ? "" : r.substring(0, o)) + r.substring(u + 1) : o = u;
        }
  }
  return r === "" ? null : r;
}
function Nl(t, e = !1) {
  var n = e ? " !important;" : ";", r = "";
  for (var i in t) {
    var a = t[i];
    a != null && a !== "" && (r += " " + i + ": " + a + n);
  }
  return r;
}
function Yo(t) {
  return t[0] !== "-" || t[1] !== "-" ? t.toLowerCase() : t;
}
function vh(t, e) {
  if (e) {
    var n = "", r, i;
    if (Array.isArray(e) ? (r = e[0], i = e[1]) : r = e, t) {
      t = String(t).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var a = !1, o = 0, u = !1, l = [];
      r && l.push(...Object.keys(r).map(Yo)), i && l.push(...Object.keys(i).map(Yo));
      var c = 0, d = -1;
      const p = t.length;
      for (var m = 0; m < p; m++) {
        var f = t[m];
        if (u ? f === "/" && t[m - 1] === "*" && (u = !1) : a ? a === f && (a = !1) : f === "/" && t[m + 1] === "*" ? u = !0 : f === '"' || f === "'" ? a = f : f === "(" ? o++ : f === ")" && o--, !u && a === !1 && o === 0) {
          if (f === ":" && d === -1)
            d = m;
          else if (f === ";" || m === p - 1) {
            if (d !== -1) {
              var g = Yo(t.substring(c, d).trim());
              if (!l.includes(g)) {
                f !== ";" && m++;
                var h = t.substring(c, m).trim();
                n += " " + h + ";";
              }
            }
            c = m + 1, d = -1;
          }
        }
      }
    }
    return r && (n += Nl(r)), i && (n += Nl(i, !0)), n = n.trim(), n === "" ? null : n;
  }
  return t == null ? null : String(t);
}
function nl(t, e, n, r, i, a) {
  var o = t.__className;
  if (o !== n || o === void 0) {
    var u = hh(n, r, a);
    u == null ? t.removeAttribute("class") : e ? t.className = u : t.setAttribute("class", u), t.__className = n;
  } else if (a && i !== a)
    for (var l in a) {
      var c = !!a[l];
      (i == null || c !== !!i[l]) && t.classList.toggle(l, c);
    }
  return a;
}
function Qo(t, e = {}, n, r) {
  for (var i in n) {
    var a = n[i];
    e[i] !== a && (n[i] == null ? t.style.removeProperty(i) : t.style.setProperty(i, a, r));
  }
}
function ct(t, e, n, r) {
  var i = t.__style;
  if (i !== e) {
    var a = vh(e, r);
    a == null ? t.removeAttribute("style") : t.style.cssText = a, t.__style = e;
  } else r && (Array.isArray(r) ? (Qo(t, n == null ? void 0 : n[0], r[0]), Qo(t, n == null ? void 0 : n[1], r[1], "important")) : Qo(t, n, r));
  return r;
}
function xs(t, e, n = !1) {
  if (t.multiple) {
    if (e == null)
      return;
    if (!Po(e))
      return gf();
    for (var r of t.options)
      r.selected = e.includes(Ul(r));
    return;
  }
  for (r of t.options) {
    var i = Ul(r);
    if (Nf(i, e)) {
      r.selected = !0;
      return;
    }
  }
  (!n || e !== void 0) && (t.selectedIndex = -1);
}
function mh(t) {
  var e = new MutationObserver(() => {
    xs(t, t.__value);
  });
  e.observe(t, {
    // Listen to option element changes
    childList: !0,
    subtree: !0,
    // because of <optgroup>
    // Listen to option element value attribute changes
    // (doesn't get notified of select value changes,
    // because that property is not reflected as an attribute)
    attributes: !0,
    attributeFilter: ["value"]
  }), ko(() => {
    e.disconnect();
  });
}
function Ul(t) {
  return "__value" in t ? t.__value : t.value;
}
const ga = Symbol("class"), pa = Symbol("style"), wc = Symbol("is custom element"), Lc = Symbol("is html");
function Fl(t, e) {
  var n = rl(t);
  n.value === (n.value = // treat null and undefined the same for the initial value
  e ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  t.value === e && (e !== 0 || t.nodeName !== "PROGRESS") || (t.value = e ?? "");
}
function gh(t, e) {
  e ? t.hasAttribute("selected") || t.setAttribute("selected", "") : t.removeAttribute("selected");
}
function br(t, e, n, r) {
  var i = rl(t);
  i[e] !== (i[e] = n) && (e === "loading" && (t[af] = n), n == null ? t.removeAttribute(e) : typeof n != "string" && Oc(t).includes(e) ? t[e] = n : t.setAttribute(e, n));
}
function ph(t, e, n, r, i = !1, a = !1) {
  var o = rl(t), u = o[wc], l = !o[Lc], c = e || {}, d = t.tagName === "OPTION";
  for (var m in e)
    m in n || (n[m] = null);
  n.class ? n.class = xc(n.class) : n[ga] && (n.class = null), n[pa] && (n.style ?? (n.style = null));
  var f = Oc(t);
  for (const S in n) {
    let _ = n[S];
    if (d && S === "value" && _ == null) {
      t.value = t.__value = "", c[S] = _;
      continue;
    }
    if (S === "class") {
      var g = t.namespaceURI === "http://www.w3.org/1999/xhtml";
      nl(t, g, _, r, e == null ? void 0 : e[ga], n[ga]), c[S] = _, c[ga] = n[ga];
      continue;
    }
    if (S === "style") {
      ct(t, _, e == null ? void 0 : e[pa], n[pa]), c[S] = _, c[pa] = n[pa];
      continue;
    }
    var h = c[S];
    if (!(_ === h && !(_ === void 0 && t.hasAttribute(S)))) {
      c[S] = _;
      var p = S[0] + S[1];
      if (p !== "$$")
        if (p === "on") {
          const A = {}, I = "$$" + S;
          let L = S.slice(2);
          var b = eh(L);
          if (Jf(L) && (L = L.slice(0, -7), A.capture = !0), !b && h) {
            if (_ != null) continue;
            t.removeEventListener(L, c[I], A), c[I] = null;
          }
          if (_ != null)
            if (b)
              t[`__${L}`] = _, Sn([L]);
            else {
              let C = function(w) {
                c[S].call(this, w);
              };
              c[I] = tl(L, t, C, A);
            }
          else b && (t[`__${L}`] = void 0);
        } else if (S === "style")
          br(t, S, _);
        else if (S === "autofocus")
          kf(
            /** @type {HTMLElement} */
            t,
            !!_
          );
        else if (!u && (S === "__value" || S === "value" && _ != null))
          t.value = t.__value = _;
        else if (S === "selected" && d)
          gh(
            /** @type {HTMLOptionElement} */
            t,
            _
          );
        else {
          var y = S;
          l || (y = nh(y));
          var E = y === "defaultValue" || y === "defaultChecked";
          if (_ == null && !u && !E)
            if (o[S] = null, y === "value" || y === "checked") {
              let A = (
                /** @type {HTMLInputElement} */
                t
              );
              const I = e === void 0;
              if (y === "value") {
                let L = A.defaultValue;
                A.removeAttribute(y), A.defaultValue = L, A.value = A.__value = I ? L : null;
              } else {
                let L = A.defaultChecked;
                A.removeAttribute(y), A.defaultChecked = L, A.checked = I ? L : !1;
              }
            } else
              t.removeAttribute(S);
          else E || f.includes(y) && (u || typeof _ != "string") ? (t[y] = _, y in o && (o[y] = kt)) : typeof _ != "function" && br(t, y, _);
        }
    }
  }
  return c;
}
function ke(t, e, n = [], r = [], i, a = !1, o = !1) {
  Qu(n, r, (u) => {
    var l = void 0, c = {}, d = t.nodeName === "SELECT", m = !1;
    if (Gr(() => {
      var g = e(...u.map(s)), h = ph(
        t,
        l,
        g,
        i,
        a,
        o
      );
      m && d && "value" in g && xs(
        /** @type {HTMLSelectElement} */
        t,
        g.value
      );
      for (let b of Object.getOwnPropertySymbols(c))
        g[b] || Kt(c[b]);
      for (let b of Object.getOwnPropertySymbols(g)) {
        var p = g[b];
        b.description === Jd && (!l || p !== l[b]) && (c[b] && Kt(c[b]), c[b] = Yt(() => dh(t, () => p))), h[b] = p;
      }
      l = h;
    }), d) {
      var f = (
        /** @type {HTMLSelectElement} */
        t
      );
      gi(() => {
        xs(
          f,
          /** @type {Record<string | symbol, any>} */
          l.value,
          !0
        ), mh(f);
      });
    }
    m = !0;
  });
}
function rl(t) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    t.__attributes ?? (t.__attributes = {
      [wc]: t.nodeName.includes("-"),
      [Lc]: t.namespaceURI === Yd
    })
  );
}
var kl = /* @__PURE__ */ new Map();
function Oc(t) {
  var e = t.getAttribute("is") || t.nodeName, n = kl.get(e);
  if (n) return n;
  kl.set(e, n = []);
  for (var r, i = t, a = Element.prototype; a !== i; ) {
    r = Fu(i);
    for (var o in r)
      r[o].set && n.push(o);
    i = Ws(i);
  }
  return n;
}
const bh = () => performance.now(), vr = {
  // don't access requestAnimationFrame eagerly outside method
  // this allows basic testing of user code without JSDOM
  // bunder will eval and remove ternary when the user's app is built
  tick: (
    /** @param {any} _ */
    (t) => requestAnimationFrame(t)
  ),
  now: () => bh(),
  tasks: /* @__PURE__ */ new Set()
};
function Rc() {
  const t = vr.now();
  vr.tasks.forEach((e) => {
    e.c(t) || (vr.tasks.delete(e), e.f());
  }), vr.tasks.size !== 0 && vr.tick(Rc);
}
function _h(t) {
  let e;
  return vr.tasks.size === 0 && vr.tick(Rc), {
    promise: new Promise((n) => {
      vr.tasks.add(e = { c: t, f: n });
    }),
    abort() {
      vr.tasks.delete(e);
    }
  };
}
function Ya(t, e) {
  oa(() => {
    t.dispatchEvent(new CustomEvent(e));
  });
}
function yh(t) {
  if (t === "float") return "cssFloat";
  if (t === "offset") return "cssOffset";
  if (t.startsWith("--")) return t;
  const e = t.split("-");
  return e.length === 1 ? e[0] : e[0] + e.slice(1).map(
    /** @param {any} word */
    (n) => n[0].toUpperCase() + n.slice(1)
  ).join("");
}
function Bl(t) {
  const e = {}, n = t.split(";");
  for (const r of n) {
    const [i, a] = r.split(":");
    if (!i || a === void 0) break;
    const o = yh(i.trim());
    e[o] = a.trim();
  }
  return e;
}
const Ih = (t) => t;
function Sh(t, e, n) {
  var r = (
    /** @type {EachItem} */
    ui
  ), i, a, o, u = null;
  r.a ?? (r.a = {
    element: t,
    measure() {
      i = this.element.getBoundingClientRect();
    },
    apply() {
      if (o == null || o.abort(), a = this.element.getBoundingClientRect(), i.left !== a.left || i.right !== a.right || i.top !== a.top || i.bottom !== a.bottom) {
        const l = e()(this.element, { from: i, to: a }, n == null ? void 0 : n());
        o = Io(this.element, l, void 0, 1, () => {
          o == null || o.abort(), o = void 0;
        });
      }
    },
    fix() {
      if (!t.getAnimations().length) {
        var { position: l, width: c, height: d } = getComputedStyle(t);
        if (l !== "absolute" && l !== "fixed") {
          var m = (
            /** @type {HTMLElement | SVGElement} */
            t.style
          );
          u = {
            position: m.position,
            width: m.width,
            height: m.height,
            transform: m.transform
          }, m.position = "absolute", m.width = c, m.height = d;
          var f = t.getBoundingClientRect();
          if (i.left !== f.left || i.top !== f.top) {
            var g = `translate(${i.left - f.left}px, ${i.top - f.top}px)`;
            m.transform = m.transform ? `${m.transform} ${g}` : g;
          }
        }
      }
    },
    unfix() {
      if (u) {
        var l = (
          /** @type {HTMLElement | SVGElement} */
          t.style
        );
        l.position = u.position, l.width = u.width, l.height = u.height, l.transform = u.transform;
      }
    }
  }), r.a.element = t;
}
function yo(t, e, n, r) {
  var i = (t & 1) !== 0, a = (t & 2) !== 0, o = i && a, u = (t & 4) !== 0, l = o ? "both" : i ? "in" : "out", c, d = e.inert, m = e.style.overflow, f, g;
  function h() {
    return oa(() => c ?? (c = n()(e, (r == null ? void 0 : r()) ?? /** @type {P} */
    {}, {
      direction: l
    })));
  }
  var p = {
    is_global: u,
    in() {
      var S;
      if (e.inert = d, !i) {
        g == null || g.abort(), (S = g == null ? void 0 : g.reset) == null || S.call(g);
        return;
      }
      a || f == null || f.abort(), Ya(e, "introstart"), f = Io(e, h(), g, 1, () => {
        Ya(e, "introend"), f == null || f.abort(), f = c = void 0, e.style.overflow = m;
      });
    },
    out(S) {
      if (!a) {
        S == null || S(), c = void 0;
        return;
      }
      e.inert = !0, Ya(e, "outrostart"), g = Io(e, h(), f, 0, () => {
        Ya(e, "outroend"), S == null || S();
      });
    },
    stop: () => {
      f == null || f.abort(), g == null || g.abort();
    }
  }, b = (
    /** @type {Effect} */
    We
  );
  if ((b.transitions ?? (b.transitions = [])).push(p), i && _o) {
    var y = u;
    if (!y) {
      for (var E = (
        /** @type {Effect | null} */
        b.parent
      ); E && E.f & Br; )
        for (; (E = E.parent) && !(E.f & Fr); )
          ;
      y = !E || (E.f & No) !== 0;
    }
    y && gi(() => {
      jn(() => p.in());
    });
  }
}
function Io(t, e, n, r, i) {
  var a = r === 1;
  if (Mi(e)) {
    var o, u = !1;
    return _r(() => {
      if (!u) {
        var b = e({ direction: a ? "in" : "out" });
        o = Io(t, b, n, r, i);
      }
    }), {
      abort: () => {
        u = !0, o == null || o.abort();
      },
      deactivate: () => o.deactivate(),
      reset: () => o.reset(),
      t: () => o.t()
    };
  }
  if (n == null || n.deactivate(), !(e != null && e.duration))
    return i(), {
      abort: ge,
      deactivate: ge,
      reset: ge,
      t: () => r
    };
  const { delay: l = 0, css: c, tick: d, easing: m = Ih } = e;
  var f = [];
  if (a && n === void 0 && (d && d(0, 1), c)) {
    var g = Bl(c(0, 1));
    f.push(g, g);
  }
  var h = () => 1 - r, p = t.animate(f, { duration: l, fill: "forwards" });
  return p.onfinish = () => {
    p.cancel();
    var b = (n == null ? void 0 : n.t()) ?? 1 - r;
    n == null || n.abort();
    var y = r - b, E = (
      /** @type {number} */
      e.duration * Math.abs(y)
    ), S = [];
    if (E > 0) {
      var _ = !1;
      if (c)
        for (var A = Math.ceil(E / 16.666666666666668), I = 0; I <= A; I += 1) {
          var L = b + y * m(I / A), C = Bl(c(L, 1 - L));
          S.push(C), _ || (_ = C.overflow === "hidden");
        }
      _ && (t.style.overflow = "hidden"), h = () => {
        var w = (
          /** @type {number} */
          /** @type {globalThis.Animation} */
          p.currentTime
        );
        return b + y * m(w / E);
      }, d && _h(() => {
        if (p.playState !== "running") return !1;
        var w = h();
        return d(w, 1 - w), !0;
      });
    }
    p = t.animate(S, { duration: E, fill: "forwards" }), p.onfinish = () => {
      h = () => r, d == null || d(r, 1 - r), i();
    };
  }, {
    abort: () => {
      p && (p.cancel(), p.effect = null, p.onfinish = ge);
    },
    deactivate: () => {
      i = ge;
    },
    reset: () => {
      r === 0 && (d == null || d(1, 0));
    },
    t: () => h()
  };
}
function Ma(t, e, n = e) {
  var r = /* @__PURE__ */ new WeakSet();
  ac(t, "input", async (i) => {
    var a = i ? t.defaultValue : t.value;
    if (a = Jo(t) ? $o(a) : a, n(a), ut !== null && r.add(ut), await _c(), a !== (a = e())) {
      var o = t.selectionStart, u = t.selectionEnd, l = t.value.length;
      if (t.value = a ?? "", u !== null) {
        var c = t.value.length;
        o === u && u === l && c > l ? (t.selectionStart = c, t.selectionEnd = c) : (t.selectionStart = o, t.selectionEnd = Math.min(u, c));
      }
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  jn(e) == null && t.value && (n(Jo(t) ? $o(t.value) : t.value), ut !== null && r.add(ut)), ja(() => {
    var i = e();
    if (t === document.activeElement) {
      var a = (
        /** @type {Batch} */
        so ?? ut
      );
      if (r.has(a))
        return;
    }
    Jo(t) && i === $o(t.value) || t.type === "date" && !i && !t.value || i !== t.value && (t.value = i ?? "");
  });
}
function Eh(t, e, n = e) {
  ac(t, "change", (r) => {
    var i = r ? t.defaultChecked : t.checked;
    n(i);
  }), // If we are hydrating and the value has since changed,
  // then use the update value from the input instead.
  // If defaultChecked is set, then checked == defaultChecked
  jn(e) == null && n(t.checked), ja(() => {
    var r = e();
    t.checked = !!r;
  });
}
function Jo(t) {
  var e = t.type;
  return e === "number" || e === "range";
}
function $o(t) {
  return t === "" ? null : +t;
}
function Vl(t, e) {
  return t === e || (t == null ? void 0 : t[$n]) === e;
}
function Ce(t = {}, e, n, r) {
  return gi(() => {
    var i, a;
    return ja(() => {
      i = a, a = (r == null ? void 0 : r()) || [], jn(() => {
        t !== n(...a) && (e(t, ...a), i && Vl(n(...i), t) && e(null, ...i));
      });
    }), () => {
      _r(() => {
        a && Vl(n(...a), t) && e(null, ...a);
      });
    };
  }), t;
}
function Ah(t = !1) {
  const e = (
    /** @type {ComponentContextLegacy} */
    dt
  ), n = e.l.u;
  if (!n) return;
  let r = () => Ic(e.s);
  if (t) {
    let i = 0, a = (
      /** @type {Record<string, any>} */
      {}
    );
    const o = /* @__PURE__ */ Va(() => {
      let u = !1;
      const l = e.s;
      for (const c in l)
        l[c] !== a[c] && (a[c] = l[c], u = !0);
      return u && i++, i;
    });
    r = () => s(o);
  }
  n.b.length && lc(() => {
    Gl(e, r), go(n.b);
  }), Oe(() => {
    const i = jn(() => n.m.map(nf));
    return () => {
      for (const a of i)
        typeof a == "function" && a();
    };
  }), n.a.length && Oe(() => {
    Gl(e, r), go(n.a);
  });
}
function Gl(t, e) {
  if (t.l.s)
    for (const n of t.l.s) s(n);
  e();
}
function il(t, e, n) {
  if (t == null)
    return e(void 0), n && n(void 0), ge;
  const r = jn(
    () => t.subscribe(
      e,
      // @ts-expect-error
      n
    )
  );
  return r.unsubscribe ? () => r.unsubscribe() : r;
}
const wi = [];
function Ch(t, e) {
  return {
    subscribe: Gt(t, e).subscribe
  };
}
function Gt(t, e = ge) {
  let n = null;
  const r = /* @__PURE__ */ new Set();
  function i(u) {
    if (Zs(t, u) && (t = u, n)) {
      const l = !wi.length;
      for (const c of r)
        c[1](), wi.push(c, t);
      if (l) {
        for (let c = 0; c < wi.length; c += 2)
          wi[c][0](wi[c + 1]);
        wi.length = 0;
      }
    }
  }
  function a(u) {
    i(u(
      /** @type {T} */
      t
    ));
  }
  function o(u, l = ge) {
    const c = [u, l];
    return r.add(c), r.size === 1 && (n = e(i, a) || ge), u(
      /** @type {T} */
      t
    ), () => {
      r.delete(c), r.size === 0 && n && (n(), n = null);
    };
  }
  return { set: i, update: a, subscribe: o };
}
function sa(t, e, n) {
  const r = !Array.isArray(t), i = r ? [t] : t;
  if (!i.every(Boolean))
    throw new Error("derived() expects stores as input, got a falsy value");
  const a = e.length < 2;
  return Ch(n, (o, u) => {
    let l = !1;
    const c = [];
    let d = 0, m = ge;
    const f = () => {
      if (d)
        return;
      m();
      const h = e(r ? c[0] : c, o, u);
      a ? o(h) : m = typeof h == "function" ? h : ge;
    }, g = i.map(
      (h, p) => il(
        h,
        (b) => {
          c[p] = b, d &= ~(1 << p), l && f();
        },
        () => {
          d |= 1 << p;
        }
      )
    );
    return l = !0, f(), function() {
      go(g), m(), l = !1;
    };
  });
}
function Dc(t) {
  let e;
  return il(t, (n) => e = n)(), e;
}
let Qa = !1, ws = Symbol();
function Bn(t, e, n) {
  const r = n[e] ?? (n[e] = {
    store: null,
    source: /* @__PURE__ */ ec(void 0),
    unsubscribe: ge
  });
  if (r.store !== t && !(ws in n))
    if (r.unsubscribe(), r.store = t ?? null, t == null)
      r.source.v = void 0, r.unsubscribe = ge;
    else {
      var i = !0;
      r.unsubscribe = il(t, (a) => {
        i ? r.source.v = a : X(r.source, a);
      }), i = !1;
    }
  return t && ws in n ? Dc(t) : s(r.source);
}
function Fn(t, e) {
  return t.set(e), e;
}
function ir() {
  const t = {};
  function e() {
    ko(() => {
      for (var n in t)
        t[n].unsubscribe();
      mo(t, ws, {
        enumerable: !1,
        value: !0
      });
    });
  }
  return [t, e];
}
function Th(t) {
  var e = Qa;
  try {
    return Qa = !1, [t(), Qa];
  } finally {
    Qa = e;
  }
}
const xh = {
  get(t, e) {
    if (!t.exclude.includes(e))
      return t.props[e];
  },
  set(t, e) {
    return !1;
  },
  getOwnPropertyDescriptor(t, e) {
    if (!t.exclude.includes(e) && e in t.props)
      return {
        enumerable: !0,
        configurable: !0,
        value: t.props[e]
      };
  },
  has(t, e) {
    return t.exclude.includes(e) ? !1 : e in t.props;
  },
  ownKeys(t) {
    return Reflect.ownKeys(t.props).filter((e) => !t.exclude.includes(e));
  }
};
// @__NO_SIDE_EFFECTS__
function je(t, e, n) {
  return new Proxy(
    { props: t, exclude: e },
    xh
  );
}
const wh = {
  get(t, e) {
    let n = t.props.length;
    for (; n--; ) {
      let r = t.props[n];
      if (Mi(r) && (r = r()), typeof r == "object" && r !== null && e in r) return r[e];
    }
  },
  set(t, e, n) {
    let r = t.props.length;
    for (; r--; ) {
      let i = t.props[r];
      Mi(i) && (i = i());
      const a = Hr(i, e);
      if (a && a.set)
        return a.set(n), !0;
    }
    return !1;
  },
  getOwnPropertyDescriptor(t, e) {
    let n = t.props.length;
    for (; n--; ) {
      let r = t.props[n];
      if (Mi(r) && (r = r()), typeof r == "object" && r !== null && e in r) {
        const i = Hr(r, e);
        return i && !i.configurable && (i.configurable = !0), i;
      }
    }
  },
  has(t, e) {
    if (e === $n || e === Vu) return !1;
    for (let n of t.props)
      if (Mi(n) && (n = n()), n != null && e in n) return !0;
    return !1;
  },
  ownKeys(t) {
    const e = [];
    for (let n of t.props)
      if (Mi(n) && (n = n()), !!n) {
        for (const r in n)
          e.includes(r) || e.push(r);
        for (const r of Object.getOwnPropertySymbols(n))
          e.includes(r) || e.push(r);
      }
    return e;
  }
};
function $e(...t) {
  return new Proxy({ props: t }, wh);
}
function v(t, e, n, r) {
  var S;
  var i = !aa || (n & 2) !== 0, a = (n & 8) !== 0, o = (n & 16) !== 0, u = (
    /** @type {V} */
    r
  ), l = !0, c = () => (l && (l = !1, u = o ? jn(
    /** @type {() => V} */
    r
  ) : (
    /** @type {V} */
    r
  )), u), d;
  if (a) {
    var m = $n in t || Vu in t;
    d = ((S = Hr(t, e)) == null ? void 0 : S.set) ?? (m && e in t ? (_) => t[e] = _ : void 0);
  }
  var f, g = !1;
  a ? [f, g] = Th(() => (
    /** @type {V} */
    t[e]
  )) : f = /** @type {V} */
  t[e], f === void 0 && r !== void 0 && (f = c(), d && (i && df(), d(f)));
  var h;
  if (i ? h = () => {
    var _ = (
      /** @type {V} */
      t[e]
    );
    return _ === void 0 ? c() : (l = !0, _);
  } : h = () => {
    var _ = (
      /** @type {V} */
      t[e]
    );
    return _ !== void 0 && (u = /** @type {V} */
    void 0), _ === void 0 ? u : _;
  }, i && !(n & 4))
    return h;
  if (d) {
    var p = t.$$legacy;
    return (
      /** @type {() => V} */
      function(_, A) {
        return arguments.length > 0 ? ((!i || !A || p || g) && d(A ? h() : _), _) : h();
      }
    );
  }
  var b = !1, y = (n & 1 ? Va : Ys)(() => (b = !1, h()));
  a && s(y);
  var E = (
    /** @type {Effect} */
    We
  );
  return (
    /** @type {() => V} */
    function(_, A) {
      if (arguments.length > 0) {
        const I = A ? s(y) : i && a ? ye(_) : _;
        return X(y, I), b = !0, u !== void 0 && (u = I), _;
      }
      return pi && b || E.f & mi ? y.v : s(y);
    }
  );
}
const Lh = "5";
var Nu;
typeof window < "u" && ((Nu = window.__svelte ?? (window.__svelte = {})).v ?? (Nu.v = /* @__PURE__ */ new Set())).add(Lh);
function Oh(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var Rh = function(e) {
  return Dh(e) && !Mh(e);
};
function Dh(t) {
  return !!t && typeof t == "object";
}
function Mh(t) {
  var e = Object.prototype.toString.call(t);
  return e === "[object RegExp]" || e === "[object Date]" || Nh(t);
}
var Ph = typeof Symbol == "function" && Symbol.for, Hh = Ph ? Symbol.for("react.element") : 60103;
function Nh(t) {
  return t.$$typeof === Hh;
}
function Uh(t) {
  return Array.isArray(t) ? [] : {};
}
function Pa(t, e) {
  return e.clone !== !1 && e.isMergeableObject(t) ? $i(Uh(t), t, e) : t;
}
function Fh(t, e, n) {
  return t.concat(e).map(function(r) {
    return Pa(r, n);
  });
}
function kh(t, e) {
  if (!e.customMerge)
    return $i;
  var n = e.customMerge(t);
  return typeof n == "function" ? n : $i;
}
function Bh(t) {
  return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(t).filter(function(e) {
    return Object.propertyIsEnumerable.call(t, e);
  }) : [];
}
function jl(t) {
  return Object.keys(t).concat(Bh(t));
}
function Mc(t, e) {
  try {
    return e in t;
  } catch {
    return !1;
  }
}
function Vh(t, e) {
  return Mc(t, e) && !(Object.hasOwnProperty.call(t, e) && Object.propertyIsEnumerable.call(t, e));
}
function Gh(t, e, n) {
  var r = {};
  return n.isMergeableObject(t) && jl(t).forEach(function(i) {
    r[i] = Pa(t[i], n);
  }), jl(e).forEach(function(i) {
    Vh(t, i) || (Mc(t, i) && n.isMergeableObject(e[i]) ? r[i] = kh(i, n)(t[i], e[i], n) : r[i] = Pa(e[i], n));
  }), r;
}
function $i(t, e, n) {
  n = n || {}, n.arrayMerge = n.arrayMerge || Fh, n.isMergeableObject = n.isMergeableObject || Rh, n.cloneUnlessOtherwiseSpecified = Pa;
  var r = Array.isArray(e), i = Array.isArray(t), a = r === i;
  return a ? r ? n.arrayMerge(t, e, n) : Gh(t, e, n) : Pa(e, n);
}
$i.all = function(e, n) {
  if (!Array.isArray(e))
    throw new Error("first argument should be an array");
  return e.reduce(function(r, i) {
    return $i(r, i, n);
  }, {});
};
var jh = $i, qh = jh;
const Wh = /* @__PURE__ */ Oh(qh);
var Ls = function(t, e) {
  return Ls = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, r) {
    n.__proto__ = r;
  } || function(n, r) {
    for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (n[i] = r[i]);
  }, Ls(t, e);
};
function Ke(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  Ls(t, e);
  function n() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : (n.prototype = e.prototype, new n());
}
var pe = function() {
  return pe = Object.assign || function(e) {
    for (var n, r = 1, i = arguments.length; r < i; r++) {
      n = arguments[r];
      for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, pe.apply(this, arguments);
};
function zh(t, e) {
  var n = {};
  for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(t); i < r.length; i++)
      e.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[i]) && (n[r[i]] = t[r[i]]);
  return n;
}
function Pc(t, e, n, r) {
  function i(a) {
    return a instanceof n ? a : new n(function(o) {
      o(a);
    });
  }
  return new (n || (n = Promise))(function(a, o) {
    function u(d) {
      try {
        c(r.next(d));
      } catch (m) {
        o(m);
      }
    }
    function l(d) {
      try {
        c(r.throw(d));
      } catch (m) {
        o(m);
      }
    }
    function c(d) {
      d.done ? a(d.value) : i(d.value).then(u, l);
    }
    c((r = r.apply(t, e || [])).next());
  });
}
function al(t, e) {
  var n = { label: 0, sent: function() {
    if (a[0] & 1) throw a[1];
    return a[1];
  }, trys: [], ops: [] }, r, i, a, o = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
  return o.next = u(0), o.throw = u(1), o.return = u(2), typeof Symbol == "function" && (o[Symbol.iterator] = function() {
    return this;
  }), o;
  function u(c) {
    return function(d) {
      return l([c, d]);
    };
  }
  function l(c) {
    if (r) throw new TypeError("Generator is already executing.");
    for (; o && (o = 0, c[0] && (n = 0)), n; ) try {
      if (r = 1, i && (a = c[0] & 2 ? i.return : c[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, c[1])).done) return a;
      switch (i = 0, a && (c = [c[0] & 2, a.value]), c[0]) {
        case 0:
        case 1:
          a = c;
          break;
        case 4:
          return n.label++, { value: c[1], done: !1 };
        case 5:
          n.label++, i = c[1], c = [0];
          continue;
        case 7:
          c = n.ops.pop(), n.trys.pop();
          continue;
        default:
          if (a = n.trys, !(a = a.length > 0 && a[a.length - 1]) && (c[0] === 6 || c[0] === 2)) {
            n = 0;
            continue;
          }
          if (c[0] === 3 && (!a || c[1] > a[0] && c[1] < a[3])) {
            n.label = c[1];
            break;
          }
          if (c[0] === 6 && n.label < a[1]) {
            n.label = a[1], a = c;
            break;
          }
          if (a && n.label < a[2]) {
            n.label = a[2], n.ops.push(c);
            break;
          }
          a[2] && n.ops.pop(), n.trys.pop();
          continue;
      }
      c = e.call(t, n);
    } catch (d) {
      c = [6, d], i = 0;
    } finally {
      r = a = 0;
    }
    if (c[0] & 5) throw c[1];
    return { value: c[0] ? c[1] : void 0, done: !0 };
  }
}
function Bt(t) {
  var e = typeof Symbol == "function" && Symbol.iterator, n = e && t[e], r = 0;
  if (n) return n.call(t);
  if (t && typeof t.length == "number") return {
    next: function() {
      return t && r >= t.length && (t = void 0), { value: t && t[r++], done: !t };
    }
  };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function yr(t, e) {
  var n = typeof Symbol == "function" && t[Symbol.iterator];
  if (!n) return t;
  var r = n.call(t), i, a = [], o;
  try {
    for (; (e === void 0 || e-- > 0) && !(i = r.next()).done; ) a.push(i.value);
  } catch (u) {
    o = { error: u };
  } finally {
    try {
      i && !i.done && (n = r.return) && n.call(r);
    } finally {
      if (o) throw o.error;
    }
  }
  return a;
}
function er(t, e, n) {
  if (n || arguments.length === 2) for (var r = 0, i = e.length, a; r < i; r++)
    (a || !(r in e)) && (a || (a = Array.prototype.slice.call(e, 0, r)), a[r] = e[r]);
  return t.concat(a || Array.prototype.slice.call(e));
}
function Bi(t) {
  return this instanceof Bi ? (this.v = t, this) : new Bi(t);
}
function Kh(t, e, n) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var r = n.apply(t, e || []), i, a = [];
  return i = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype), u("next"), u("throw"), u("return", o), i[Symbol.asyncIterator] = function() {
    return this;
  }, i;
  function o(g) {
    return function(h) {
      return Promise.resolve(h).then(g, m);
    };
  }
  function u(g, h) {
    r[g] && (i[g] = function(p) {
      return new Promise(function(b, y) {
        a.push([g, p, b, y]) > 1 || l(g, p);
      });
    }, h && (i[g] = h(i[g])));
  }
  function l(g, h) {
    try {
      c(r[g](h));
    } catch (p) {
      f(a[0][3], p);
    }
  }
  function c(g) {
    g.value instanceof Bi ? Promise.resolve(g.value.v).then(d, m) : f(a[0][2], g);
  }
  function d(g) {
    l("next", g);
  }
  function m(g) {
    l("throw", g);
  }
  function f(g, h) {
    g(h), a.shift(), a.length && l(a[0][0], a[0][1]);
  }
}
function Xh(t) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var e = t[Symbol.asyncIterator], n;
  return e ? e.call(t) : (t = typeof Bt == "function" ? Bt(t) : t[Symbol.iterator](), n = {}, r("next"), r("throw"), r("return"), n[Symbol.asyncIterator] = function() {
    return this;
  }, n);
  function r(a) {
    n[a] = t[a] && function(o) {
      return new Promise(function(u, l) {
        o = t[a](o), i(u, l, o.done, o.value);
      });
    };
  }
  function i(a, o, u, l) {
    Promise.resolve(l).then(function(c) {
      a({ value: c, done: u });
    }, o);
  }
}
function es(t, e) {
  var n = e && e.cache ? e.cache : tv, r = e && e.serializer ? e.serializer : $h, i = e && e.strategy ? e.strategy : Qh;
  return i(t, {
    cache: n,
    serializer: r
  });
}
function Zh(t) {
  return t == null || typeof t == "number" || typeof t == "boolean";
}
function Yh(t, e, n, r) {
  var i = Zh(r) ? r : n(r), a = e.get(i);
  return typeof a > "u" && (a = t.call(this, r), e.set(i, a)), a;
}
function Hc(t, e, n) {
  var r = Array.prototype.slice.call(arguments, 3), i = n(r), a = e.get(i);
  return typeof a > "u" && (a = t.apply(this, r), e.set(i, a)), a;
}
function Nc(t, e, n, r, i) {
  return n.bind(e, t, r, i);
}
function Qh(t, e) {
  var n = t.length === 1 ? Yh : Hc;
  return Nc(t, this, n, e.cache.create(), e.serializer);
}
function Jh(t, e) {
  return Nc(t, this, Hc, e.cache.create(), e.serializer);
}
var $h = function() {
  return JSON.stringify(arguments);
}, ev = (
  /** @class */
  function() {
    function t() {
      this.cache = /* @__PURE__ */ Object.create(null);
    }
    return t.prototype.get = function(e) {
      return this.cache[e];
    }, t.prototype.set = function(e, n) {
      this.cache[e] = n;
    }, t;
  }()
), tv = {
  create: function() {
    return new ev();
  }
}, ts = {
  variadic: Jh
}, Qe;
(function(t) {
  t[t.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", t[t.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", t[t.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", t[t.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", t[t.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", t[t.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", t[t.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", t[t.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", t[t.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", t[t.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", t[t.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", t[t.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", t[t.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", t[t.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", t[t.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", t[t.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", t[t.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", t[t.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", t[t.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", t[t.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", t[t.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", t[t.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", t[t.INVALID_TAG = 23] = "INVALID_TAG", t[t.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", t[t.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", t[t.UNCLOSED_TAG = 27] = "UNCLOSED_TAG";
})(Qe || (Qe = {}));
var bt;
(function(t) {
  t[t.literal = 0] = "literal", t[t.argument = 1] = "argument", t[t.number = 2] = "number", t[t.date = 3] = "date", t[t.time = 4] = "time", t[t.select = 5] = "select", t[t.plural = 6] = "plural", t[t.pound = 7] = "pound", t[t.tag = 8] = "tag";
})(bt || (bt = {}));
var ea;
(function(t) {
  t[t.number = 0] = "number", t[t.dateTime = 1] = "dateTime";
})(ea || (ea = {}));
function ql(t) {
  return t.type === bt.literal;
}
function nv(t) {
  return t.type === bt.argument;
}
function Uc(t) {
  return t.type === bt.number;
}
function Fc(t) {
  return t.type === bt.date;
}
function kc(t) {
  return t.type === bt.time;
}
function Bc(t) {
  return t.type === bt.select;
}
function Vc(t) {
  return t.type === bt.plural;
}
function rv(t) {
  return t.type === bt.pound;
}
function Gc(t) {
  return t.type === bt.tag;
}
function jc(t) {
  return !!(t && typeof t == "object" && t.type === ea.number);
}
function Os(t) {
  return !!(t && typeof t == "object" && t.type === ea.dateTime);
}
var qc = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/, iv = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
function av(t) {
  var e = {};
  return t.replace(iv, function(n) {
    var r = n.length;
    switch (n[0]) {
      case "G":
        e.era = r === 4 ? "long" : r === 5 ? "narrow" : "short";
        break;
      case "y":
        e.year = r === 2 ? "2-digit" : "numeric";
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
        e.month = ["numeric", "2-digit", "short", "long", "narrow"][r - 1];
        break;
      case "w":
      case "W":
        throw new RangeError("`w/W` (week) patterns are not supported");
      case "d":
        e.day = ["numeric", "2-digit"][r - 1];
        break;
      case "D":
      case "F":
      case "g":
        throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");
      case "E":
        e.weekday = r === 4 ? "long" : r === 5 ? "narrow" : "short";
        break;
      case "e":
        if (r < 4)
          throw new RangeError("`e..eee` (weekday) patterns are not supported");
        e.weekday = ["short", "long", "narrow", "short"][r - 4];
        break;
      case "c":
        if (r < 4)
          throw new RangeError("`c..ccc` (weekday) patterns are not supported");
        e.weekday = ["short", "long", "narrow", "short"][r - 4];
        break;
      case "a":
        e.hour12 = !0;
        break;
      case "b":
      case "B":
        throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");
      case "h":
        e.hourCycle = "h12", e.hour = ["numeric", "2-digit"][r - 1];
        break;
      case "H":
        e.hourCycle = "h23", e.hour = ["numeric", "2-digit"][r - 1];
        break;
      case "K":
        e.hourCycle = "h11", e.hour = ["numeric", "2-digit"][r - 1];
        break;
      case "k":
        e.hourCycle = "h24", e.hour = ["numeric", "2-digit"][r - 1];
        break;
      case "j":
      case "J":
      case "C":
        throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");
      case "m":
        e.minute = ["numeric", "2-digit"][r - 1];
        break;
      case "s":
        e.second = ["numeric", "2-digit"][r - 1];
        break;
      case "S":
      case "A":
        throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");
      case "z":
        e.timeZoneName = r < 4 ? "short" : "long";
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
  }), e;
}
var ov = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
function sv(t) {
  if (t.length === 0)
    throw new Error("Number skeleton cannot be empty");
  for (var e = t.split(ov).filter(function(f) {
    return f.length > 0;
  }), n = [], r = 0, i = e; r < i.length; r++) {
    var a = i[r], o = a.split("/");
    if (o.length === 0)
      throw new Error("Invalid number skeleton");
    for (var u = o[0], l = o.slice(1), c = 0, d = l; c < d.length; c++) {
      var m = d[c];
      if (m.length === 0)
        throw new Error("Invalid number skeleton");
    }
    n.push({ stem: u, options: l });
  }
  return n;
}
function lv(t) {
  return t.replace(/^(.*?)-/, "");
}
var Wl = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g, Wc = /^(@+)?(\+|#+)?[rs]?$/g, uv = /(\*)(0+)|(#+)(0+)|(0+)/g, zc = /^(0+)$/;
function zl(t) {
  var e = {};
  return t[t.length - 1] === "r" ? e.roundingPriority = "morePrecision" : t[t.length - 1] === "s" && (e.roundingPriority = "lessPrecision"), t.replace(Wc, function(n, r, i) {
    return typeof i != "string" ? (e.minimumSignificantDigits = r.length, e.maximumSignificantDigits = r.length) : i === "+" ? e.minimumSignificantDigits = r.length : r[0] === "#" ? e.maximumSignificantDigits = r.length : (e.minimumSignificantDigits = r.length, e.maximumSignificantDigits = r.length + (typeof i == "string" ? i.length : 0)), "";
  }), e;
}
function Kc(t) {
  switch (t) {
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
function cv(t) {
  var e;
  if (t[0] === "E" && t[1] === "E" ? (e = {
    notation: "engineering"
  }, t = t.slice(2)) : t[0] === "E" && (e = {
    notation: "scientific"
  }, t = t.slice(1)), e) {
    var n = t.slice(0, 2);
    if (n === "+!" ? (e.signDisplay = "always", t = t.slice(2)) : n === "+?" && (e.signDisplay = "exceptZero", t = t.slice(2)), !zc.test(t))
      throw new Error("Malformed concise eng/scientific notation");
    e.minimumIntegerDigits = t.length;
  }
  return e;
}
function Kl(t) {
  var e = {}, n = Kc(t);
  return n || e;
}
function dv(t) {
  for (var e = {}, n = 0, r = t; n < r.length; n++) {
    var i = r[n];
    switch (i.stem) {
      case "percent":
      case "%":
        e.style = "percent";
        continue;
      case "%x100":
        e.style = "percent", e.scale = 100;
        continue;
      case "currency":
        e.style = "currency", e.currency = i.options[0];
        continue;
      case "group-off":
      case ",_":
        e.useGrouping = !1;
        continue;
      case "precision-integer":
      case ".":
        e.maximumFractionDigits = 0;
        continue;
      case "measure-unit":
      case "unit":
        e.style = "unit", e.unit = lv(i.options[0]);
        continue;
      case "compact-short":
      case "K":
        e.notation = "compact", e.compactDisplay = "short";
        continue;
      case "compact-long":
      case "KK":
        e.notation = "compact", e.compactDisplay = "long";
        continue;
      case "scientific":
        e = pe(pe(pe({}, e), { notation: "scientific" }), i.options.reduce(function(l, c) {
          return pe(pe({}, l), Kl(c));
        }, {}));
        continue;
      case "engineering":
        e = pe(pe(pe({}, e), { notation: "engineering" }), i.options.reduce(function(l, c) {
          return pe(pe({}, l), Kl(c));
        }, {}));
        continue;
      case "notation-simple":
        e.notation = "standard";
        continue;
      case "unit-width-narrow":
        e.currencyDisplay = "narrowSymbol", e.unitDisplay = "narrow";
        continue;
      case "unit-width-short":
        e.currencyDisplay = "code", e.unitDisplay = "short";
        continue;
      case "unit-width-full-name":
        e.currencyDisplay = "name", e.unitDisplay = "long";
        continue;
      case "unit-width-iso-code":
        e.currencyDisplay = "symbol";
        continue;
      case "scale":
        e.scale = parseFloat(i.options[0]);
        continue;
      case "rounding-mode-floor":
        e.roundingMode = "floor";
        continue;
      case "rounding-mode-ceiling":
        e.roundingMode = "ceil";
        continue;
      case "rounding-mode-down":
        e.roundingMode = "trunc";
        continue;
      case "rounding-mode-up":
        e.roundingMode = "expand";
        continue;
      case "rounding-mode-half-even":
        e.roundingMode = "halfEven";
        continue;
      case "rounding-mode-half-down":
        e.roundingMode = "halfTrunc";
        continue;
      case "rounding-mode-half-up":
        e.roundingMode = "halfExpand";
        continue;
      case "integer-width":
        if (i.options.length > 1)
          throw new RangeError("integer-width stems only accept a single optional option");
        i.options[0].replace(uv, function(l, c, d, m, f, g) {
          if (c)
            e.minimumIntegerDigits = d.length;
          else {
            if (m && f)
              throw new Error("We currently do not support maximum integer digits");
            if (g)
              throw new Error("We currently do not support exact integer digits");
          }
          return "";
        });
        continue;
    }
    if (zc.test(i.stem)) {
      e.minimumIntegerDigits = i.stem.length;
      continue;
    }
    if (Wl.test(i.stem)) {
      if (i.options.length > 1)
        throw new RangeError("Fraction-precision stems only accept a single optional option");
      i.stem.replace(Wl, function(l, c, d, m, f, g) {
        return d === "*" ? e.minimumFractionDigits = c.length : m && m[0] === "#" ? e.maximumFractionDigits = m.length : f && g ? (e.minimumFractionDigits = f.length, e.maximumFractionDigits = f.length + g.length) : (e.minimumFractionDigits = c.length, e.maximumFractionDigits = c.length), "";
      });
      var a = i.options[0];
      a === "w" ? e = pe(pe({}, e), { trailingZeroDisplay: "stripIfInteger" }) : a && (e = pe(pe({}, e), zl(a)));
      continue;
    }
    if (Wc.test(i.stem)) {
      e = pe(pe({}, e), zl(i.stem));
      continue;
    }
    var o = Kc(i.stem);
    o && (e = pe(pe({}, e), o));
    var u = cv(i.stem);
    u && (e = pe(pe({}, e), u));
  }
  return e;
}
var Ja = {
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
function fv(t, e) {
  for (var n = "", r = 0; r < t.length; r++) {
    var i = t.charAt(r);
    if (i === "j") {
      for (var a = 0; r + 1 < t.length && t.charAt(r + 1) === i; )
        a++, r++;
      var o = 1 + (a & 1), u = a < 2 ? 1 : 3 + (a >> 1), l = "a", c = hv(e);
      for ((c == "H" || c == "k") && (u = 0); u-- > 0; )
        n += l;
      for (; o-- > 0; )
        n = c + n;
    } else i === "J" ? n += "H" : n += i;
  }
  return n;
}
function hv(t) {
  var e = t.hourCycle;
  if (e === void 0 && // @ts-ignore hourCycle(s) is not identified yet
  t.hourCycles && // @ts-ignore
  t.hourCycles.length && (e = t.hourCycles[0]), e)
    switch (e) {
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
  var n = t.language, r;
  n !== "root" && (r = t.maximize().region);
  var i = Ja[r || ""] || Ja[n || ""] || Ja["".concat(n, "-001")] || Ja["001"];
  return i[0];
}
var ns, vv = new RegExp("^".concat(qc.source, "*")), mv = new RegExp("".concat(qc.source, "*$"));
function Je(t, e) {
  return { start: t, end: e };
}
var gv = !!String.prototype.startsWith && "_a".startsWith("a", 1), pv = !!String.fromCodePoint, bv = !!Object.fromEntries, _v = !!String.prototype.codePointAt, yv = !!String.prototype.trimStart, Iv = !!String.prototype.trimEnd, Sv = !!Number.isSafeInteger, Ev = Sv ? Number.isSafeInteger : function(t) {
  return typeof t == "number" && isFinite(t) && Math.floor(t) === t && Math.abs(t) <= 9007199254740991;
}, Rs = !0;
try {
  var Av = Zc("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  Rs = ((ns = Av.exec("a")) === null || ns === void 0 ? void 0 : ns[0]) === "a";
} catch {
  Rs = !1;
}
var Xl = gv ? (
  // Native
  function(e, n, r) {
    return e.startsWith(n, r);
  }
) : (
  // For IE11
  function(e, n, r) {
    return e.slice(r, r + n.length) === n;
  }
), Ds = pv ? String.fromCodePoint : (
  // IE11
  function() {
    for (var e = [], n = 0; n < arguments.length; n++)
      e[n] = arguments[n];
    for (var r = "", i = e.length, a = 0, o; i > a; ) {
      if (o = e[a++], o > 1114111)
        throw RangeError(o + " is not a valid code point");
      r += o < 65536 ? String.fromCharCode(o) : String.fromCharCode(((o -= 65536) >> 10) + 55296, o % 1024 + 56320);
    }
    return r;
  }
), Zl = (
  // native
  bv ? Object.fromEntries : (
    // Ponyfill
    function(e) {
      for (var n = {}, r = 0, i = e; r < i.length; r++) {
        var a = i[r], o = a[0], u = a[1];
        n[o] = u;
      }
      return n;
    }
  )
), Xc = _v ? (
  // Native
  function(e, n) {
    return e.codePointAt(n);
  }
) : (
  // IE 11
  function(e, n) {
    var r = e.length;
    if (!(n < 0 || n >= r)) {
      var i = e.charCodeAt(n), a;
      return i < 55296 || i > 56319 || n + 1 === r || (a = e.charCodeAt(n + 1)) < 56320 || a > 57343 ? i : (i - 55296 << 10) + (a - 56320) + 65536;
    }
  }
), Cv = yv ? (
  // Native
  function(e) {
    return e.trimStart();
  }
) : (
  // Ponyfill
  function(e) {
    return e.replace(vv, "");
  }
), Tv = Iv ? (
  // Native
  function(e) {
    return e.trimEnd();
  }
) : (
  // Ponyfill
  function(e) {
    return e.replace(mv, "");
  }
);
function Zc(t, e) {
  return new RegExp(t, e);
}
var Ms;
if (Rs) {
  var Yl = Zc("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  Ms = function(e, n) {
    var r;
    Yl.lastIndex = n;
    var i = Yl.exec(e);
    return (r = i[1]) !== null && r !== void 0 ? r : "";
  };
} else
  Ms = function(e, n) {
    for (var r = []; ; ) {
      var i = Xc(e, n);
      if (i === void 0 || Yc(i) || Ov(i))
        break;
      r.push(i), n += i >= 65536 ? 2 : 1;
    }
    return Ds.apply(void 0, r);
  };
var xv = (
  /** @class */
  function() {
    function t(e, n) {
      n === void 0 && (n = {}), this.message = e, this.position = { offset: 0, line: 1, column: 1 }, this.ignoreTag = !!n.ignoreTag, this.locale = n.locale, this.requiresOtherClause = !!n.requiresOtherClause, this.shouldParseSkeletons = !!n.shouldParseSkeletons;
    }
    return t.prototype.parse = function() {
      if (this.offset() !== 0)
        throw Error("parser can only be used once");
      return this.parseMessage(0, "", !1);
    }, t.prototype.parseMessage = function(e, n, r) {
      for (var i = []; !this.isEOF(); ) {
        var a = this.char();
        if (a === 123) {
          var o = this.parseArgument(e, r);
          if (o.err)
            return o;
          i.push(o.val);
        } else {
          if (a === 125 && e > 0)
            break;
          if (a === 35 && (n === "plural" || n === "selectordinal")) {
            var u = this.clonePosition();
            this.bump(), i.push({
              type: bt.pound,
              location: Je(u, this.clonePosition())
            });
          } else if (a === 60 && !this.ignoreTag && this.peek() === 47) {
            if (r)
              break;
            return this.error(Qe.UNMATCHED_CLOSING_TAG, Je(this.clonePosition(), this.clonePosition()));
          } else if (a === 60 && !this.ignoreTag && Ps(this.peek() || 0)) {
            var o = this.parseTag(e, n);
            if (o.err)
              return o;
            i.push(o.val);
          } else {
            var o = this.parseLiteral(e, n);
            if (o.err)
              return o;
            i.push(o.val);
          }
        }
      }
      return { val: i, err: null };
    }, t.prototype.parseTag = function(e, n) {
      var r = this.clonePosition();
      this.bump();
      var i = this.parseTagName();
      if (this.bumpSpace(), this.bumpIf("/>"))
        return {
          val: {
            type: bt.literal,
            value: "<".concat(i, "/>"),
            location: Je(r, this.clonePosition())
          },
          err: null
        };
      if (this.bumpIf(">")) {
        var a = this.parseMessage(e + 1, n, !0);
        if (a.err)
          return a;
        var o = a.val, u = this.clonePosition();
        if (this.bumpIf("</")) {
          if (this.isEOF() || !Ps(this.char()))
            return this.error(Qe.INVALID_TAG, Je(u, this.clonePosition()));
          var l = this.clonePosition(), c = this.parseTagName();
          return i !== c ? this.error(Qe.UNMATCHED_CLOSING_TAG, Je(l, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
            val: {
              type: bt.tag,
              value: i,
              children: o,
              location: Je(r, this.clonePosition())
            },
            err: null
          } : this.error(Qe.INVALID_TAG, Je(u, this.clonePosition())));
        } else
          return this.error(Qe.UNCLOSED_TAG, Je(r, this.clonePosition()));
      } else
        return this.error(Qe.INVALID_TAG, Je(r, this.clonePosition()));
    }, t.prototype.parseTagName = function() {
      var e = this.offset();
      for (this.bump(); !this.isEOF() && Lv(this.char()); )
        this.bump();
      return this.message.slice(e, this.offset());
    }, t.prototype.parseLiteral = function(e, n) {
      for (var r = this.clonePosition(), i = ""; ; ) {
        var a = this.tryParseQuote(n);
        if (a) {
          i += a;
          continue;
        }
        var o = this.tryParseUnquoted(e, n);
        if (o) {
          i += o;
          continue;
        }
        var u = this.tryParseLeftAngleBracket();
        if (u) {
          i += u;
          continue;
        }
        break;
      }
      var l = Je(r, this.clonePosition());
      return {
        val: { type: bt.literal, value: i, location: l },
        err: null
      };
    }, t.prototype.tryParseLeftAngleBracket = function() {
      return !this.isEOF() && this.char() === 60 && (this.ignoreTag || // If at the opening tag or closing tag position, bail.
      !wv(this.peek() || 0)) ? (this.bump(), "<") : null;
    }, t.prototype.tryParseQuote = function(e) {
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
          if (e === "plural" || e === "selectordinal")
            break;
          return null;
        default:
          return null;
      }
      this.bump();
      var n = [this.char()];
      for (this.bump(); !this.isEOF(); ) {
        var r = this.char();
        if (r === 39)
          if (this.peek() === 39)
            n.push(39), this.bump();
          else {
            this.bump();
            break;
          }
        else
          n.push(r);
        this.bump();
      }
      return Ds.apply(void 0, n);
    }, t.prototype.tryParseUnquoted = function(e, n) {
      if (this.isEOF())
        return null;
      var r = this.char();
      return r === 60 || r === 123 || r === 35 && (n === "plural" || n === "selectordinal") || r === 125 && e > 0 ? null : (this.bump(), Ds(r));
    }, t.prototype.parseArgument = function(e, n) {
      var r = this.clonePosition();
      if (this.bump(), this.bumpSpace(), this.isEOF())
        return this.error(Qe.EXPECT_ARGUMENT_CLOSING_BRACE, Je(r, this.clonePosition()));
      if (this.char() === 125)
        return this.bump(), this.error(Qe.EMPTY_ARGUMENT, Je(r, this.clonePosition()));
      var i = this.parseIdentifierIfPossible().value;
      if (!i)
        return this.error(Qe.MALFORMED_ARGUMENT, Je(r, this.clonePosition()));
      if (this.bumpSpace(), this.isEOF())
        return this.error(Qe.EXPECT_ARGUMENT_CLOSING_BRACE, Je(r, this.clonePosition()));
      switch (this.char()) {
        case 125:
          return this.bump(), {
            val: {
              type: bt.argument,
              // value does not include the opening and closing braces.
              value: i,
              location: Je(r, this.clonePosition())
            },
            err: null
          };
        case 44:
          return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(Qe.EXPECT_ARGUMENT_CLOSING_BRACE, Je(r, this.clonePosition())) : this.parseArgumentOptions(e, n, i, r);
        default:
          return this.error(Qe.MALFORMED_ARGUMENT, Je(r, this.clonePosition()));
      }
    }, t.prototype.parseIdentifierIfPossible = function() {
      var e = this.clonePosition(), n = this.offset(), r = Ms(this.message, n), i = n + r.length;
      this.bumpTo(i);
      var a = this.clonePosition(), o = Je(e, a);
      return { value: r, location: o };
    }, t.prototype.parseArgumentOptions = function(e, n, r, i) {
      var a, o = this.clonePosition(), u = this.parseIdentifierIfPossible().value, l = this.clonePosition();
      switch (u) {
        case "":
          return this.error(Qe.EXPECT_ARGUMENT_TYPE, Je(o, l));
        case "number":
        case "date":
        case "time": {
          this.bumpSpace();
          var c = null;
          if (this.bumpIf(",")) {
            this.bumpSpace();
            var d = this.clonePosition(), m = this.parseSimpleArgStyleIfPossible();
            if (m.err)
              return m;
            var f = Tv(m.val);
            if (f.length === 0)
              return this.error(Qe.EXPECT_ARGUMENT_STYLE, Je(this.clonePosition(), this.clonePosition()));
            var g = Je(d, this.clonePosition());
            c = { style: f, styleLocation: g };
          }
          var h = this.tryParseArgumentClose(i);
          if (h.err)
            return h;
          var p = Je(i, this.clonePosition());
          if (c && Xl(c == null ? void 0 : c.style, "::", 0)) {
            var b = Cv(c.style.slice(2));
            if (u === "number") {
              var m = this.parseNumberSkeletonFromString(b, c.styleLocation);
              return m.err ? m : {
                val: { type: bt.number, value: r, location: p, style: m.val },
                err: null
              };
            } else {
              if (b.length === 0)
                return this.error(Qe.EXPECT_DATE_TIME_SKELETON, p);
              var y = b;
              this.locale && (y = fv(b, this.locale));
              var f = {
                type: ea.dateTime,
                pattern: y,
                location: c.styleLocation,
                parsedOptions: this.shouldParseSkeletons ? av(y) : {}
              }, E = u === "date" ? bt.date : bt.time;
              return {
                val: { type: E, value: r, location: p, style: f },
                err: null
              };
            }
          }
          return {
            val: {
              type: u === "number" ? bt.number : u === "date" ? bt.date : bt.time,
              value: r,
              location: p,
              style: (a = c == null ? void 0 : c.style) !== null && a !== void 0 ? a : null
            },
            err: null
          };
        }
        case "plural":
        case "selectordinal":
        case "select": {
          var S = this.clonePosition();
          if (this.bumpSpace(), !this.bumpIf(","))
            return this.error(Qe.EXPECT_SELECT_ARGUMENT_OPTIONS, Je(S, pe({}, S)));
          this.bumpSpace();
          var _ = this.parseIdentifierIfPossible(), A = 0;
          if (u !== "select" && _.value === "offset") {
            if (!this.bumpIf(":"))
              return this.error(Qe.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, Je(this.clonePosition(), this.clonePosition()));
            this.bumpSpace();
            var m = this.tryParseDecimalInteger(Qe.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, Qe.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);
            if (m.err)
              return m;
            this.bumpSpace(), _ = this.parseIdentifierIfPossible(), A = m.val;
          }
          var I = this.tryParsePluralOrSelectOptions(e, u, n, _);
          if (I.err)
            return I;
          var h = this.tryParseArgumentClose(i);
          if (h.err)
            return h;
          var L = Je(i, this.clonePosition());
          return u === "select" ? {
            val: {
              type: bt.select,
              value: r,
              options: Zl(I.val),
              location: L
            },
            err: null
          } : {
            val: {
              type: bt.plural,
              value: r,
              options: Zl(I.val),
              offset: A,
              pluralType: u === "plural" ? "cardinal" : "ordinal",
              location: L
            },
            err: null
          };
        }
        default:
          return this.error(Qe.INVALID_ARGUMENT_TYPE, Je(o, l));
      }
    }, t.prototype.tryParseArgumentClose = function(e) {
      return this.isEOF() || this.char() !== 125 ? this.error(Qe.EXPECT_ARGUMENT_CLOSING_BRACE, Je(e, this.clonePosition())) : (this.bump(), { val: !0, err: null });
    }, t.prototype.parseSimpleArgStyleIfPossible = function() {
      for (var e = 0, n = this.clonePosition(); !this.isEOF(); ) {
        var r = this.char();
        switch (r) {
          case 39: {
            this.bump();
            var i = this.clonePosition();
            if (!this.bumpUntil("'"))
              return this.error(Qe.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, Je(i, this.clonePosition()));
            this.bump();
            break;
          }
          case 123: {
            e += 1, this.bump();
            break;
          }
          case 125: {
            if (e > 0)
              e -= 1;
            else
              return {
                val: this.message.slice(n.offset, this.offset()),
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
        val: this.message.slice(n.offset, this.offset()),
        err: null
      };
    }, t.prototype.parseNumberSkeletonFromString = function(e, n) {
      var r = [];
      try {
        r = sv(e);
      } catch {
        return this.error(Qe.INVALID_NUMBER_SKELETON, n);
      }
      return {
        val: {
          type: ea.number,
          tokens: r,
          location: n,
          parsedOptions: this.shouldParseSkeletons ? dv(r) : {}
        },
        err: null
      };
    }, t.prototype.tryParsePluralOrSelectOptions = function(e, n, r, i) {
      for (var a, o = !1, u = [], l = /* @__PURE__ */ new Set(), c = i.value, d = i.location; ; ) {
        if (c.length === 0) {
          var m = this.clonePosition();
          if (n !== "select" && this.bumpIf("=")) {
            var f = this.tryParseDecimalInteger(Qe.EXPECT_PLURAL_ARGUMENT_SELECTOR, Qe.INVALID_PLURAL_ARGUMENT_SELECTOR);
            if (f.err)
              return f;
            d = Je(m, this.clonePosition()), c = this.message.slice(m.offset, this.offset());
          } else
            break;
        }
        if (l.has(c))
          return this.error(n === "select" ? Qe.DUPLICATE_SELECT_ARGUMENT_SELECTOR : Qe.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, d);
        c === "other" && (o = !0), this.bumpSpace();
        var g = this.clonePosition();
        if (!this.bumpIf("{"))
          return this.error(n === "select" ? Qe.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : Qe.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, Je(this.clonePosition(), this.clonePosition()));
        var h = this.parseMessage(e + 1, n, r);
        if (h.err)
          return h;
        var p = this.tryParseArgumentClose(g);
        if (p.err)
          return p;
        u.push([
          c,
          {
            value: h.val,
            location: Je(g, this.clonePosition())
          }
        ]), l.add(c), this.bumpSpace(), a = this.parseIdentifierIfPossible(), c = a.value, d = a.location;
      }
      return u.length === 0 ? this.error(n === "select" ? Qe.EXPECT_SELECT_ARGUMENT_SELECTOR : Qe.EXPECT_PLURAL_ARGUMENT_SELECTOR, Je(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !o ? this.error(Qe.MISSING_OTHER_CLAUSE, Je(this.clonePosition(), this.clonePosition())) : { val: u, err: null };
    }, t.prototype.tryParseDecimalInteger = function(e, n) {
      var r = 1, i = this.clonePosition();
      this.bumpIf("+") || this.bumpIf("-") && (r = -1);
      for (var a = !1, o = 0; !this.isEOF(); ) {
        var u = this.char();
        if (u >= 48 && u <= 57)
          a = !0, o = o * 10 + (u - 48), this.bump();
        else
          break;
      }
      var l = Je(i, this.clonePosition());
      return a ? (o *= r, Ev(o) ? { val: o, err: null } : this.error(n, l)) : this.error(e, l);
    }, t.prototype.offset = function() {
      return this.position.offset;
    }, t.prototype.isEOF = function() {
      return this.offset() === this.message.length;
    }, t.prototype.clonePosition = function() {
      return {
        offset: this.position.offset,
        line: this.position.line,
        column: this.position.column
      };
    }, t.prototype.char = function() {
      var e = this.position.offset;
      if (e >= this.message.length)
        throw Error("out of bound");
      var n = Xc(this.message, e);
      if (n === void 0)
        throw Error("Offset ".concat(e, " is at invalid UTF-16 code unit boundary"));
      return n;
    }, t.prototype.error = function(e, n) {
      return {
        val: null,
        err: {
          kind: e,
          message: this.message,
          location: n
        }
      };
    }, t.prototype.bump = function() {
      if (!this.isEOF()) {
        var e = this.char();
        e === 10 ? (this.position.line += 1, this.position.column = 1, this.position.offset += 1) : (this.position.column += 1, this.position.offset += e < 65536 ? 1 : 2);
      }
    }, t.prototype.bumpIf = function(e) {
      if (Xl(this.message, e, this.offset())) {
        for (var n = 0; n < e.length; n++)
          this.bump();
        return !0;
      }
      return !1;
    }, t.prototype.bumpUntil = function(e) {
      var n = this.offset(), r = this.message.indexOf(e, n);
      return r >= 0 ? (this.bumpTo(r), !0) : (this.bumpTo(this.message.length), !1);
    }, t.prototype.bumpTo = function(e) {
      if (this.offset() > e)
        throw Error("targetOffset ".concat(e, " must be greater than or equal to the current offset ").concat(this.offset()));
      for (e = Math.min(e, this.message.length); ; ) {
        var n = this.offset();
        if (n === e)
          break;
        if (n > e)
          throw Error("targetOffset ".concat(e, " is at invalid UTF-16 code unit boundary"));
        if (this.bump(), this.isEOF())
          break;
      }
    }, t.prototype.bumpSpace = function() {
      for (; !this.isEOF() && Yc(this.char()); )
        this.bump();
    }, t.prototype.peek = function() {
      if (this.isEOF())
        return null;
      var e = this.char(), n = this.offset(), r = this.message.charCodeAt(n + (e >= 65536 ? 2 : 1));
      return r ?? null;
    }, t;
  }()
);
function Ps(t) {
  return t >= 97 && t <= 122 || t >= 65 && t <= 90;
}
function wv(t) {
  return Ps(t) || t === 47;
}
function Lv(t) {
  return t === 45 || t === 46 || t >= 48 && t <= 57 || t === 95 || t >= 97 && t <= 122 || t >= 65 && t <= 90 || t == 183 || t >= 192 && t <= 214 || t >= 216 && t <= 246 || t >= 248 && t <= 893 || t >= 895 && t <= 8191 || t >= 8204 && t <= 8205 || t >= 8255 && t <= 8256 || t >= 8304 && t <= 8591 || t >= 11264 && t <= 12271 || t >= 12289 && t <= 55295 || t >= 63744 && t <= 64975 || t >= 65008 && t <= 65533 || t >= 65536 && t <= 983039;
}
function Yc(t) {
  return t >= 9 && t <= 13 || t === 32 || t === 133 || t >= 8206 && t <= 8207 || t === 8232 || t === 8233;
}
function Ov(t) {
  return t >= 33 && t <= 35 || t === 36 || t >= 37 && t <= 39 || t === 40 || t === 41 || t === 42 || t === 43 || t === 44 || t === 45 || t >= 46 && t <= 47 || t >= 58 && t <= 59 || t >= 60 && t <= 62 || t >= 63 && t <= 64 || t === 91 || t === 92 || t === 93 || t === 94 || t === 96 || t === 123 || t === 124 || t === 125 || t === 126 || t === 161 || t >= 162 && t <= 165 || t === 166 || t === 167 || t === 169 || t === 171 || t === 172 || t === 174 || t === 176 || t === 177 || t === 182 || t === 187 || t === 191 || t === 215 || t === 247 || t >= 8208 && t <= 8213 || t >= 8214 && t <= 8215 || t === 8216 || t === 8217 || t === 8218 || t >= 8219 && t <= 8220 || t === 8221 || t === 8222 || t === 8223 || t >= 8224 && t <= 8231 || t >= 8240 && t <= 8248 || t === 8249 || t === 8250 || t >= 8251 && t <= 8254 || t >= 8257 && t <= 8259 || t === 8260 || t === 8261 || t === 8262 || t >= 8263 && t <= 8273 || t === 8274 || t === 8275 || t >= 8277 && t <= 8286 || t >= 8592 && t <= 8596 || t >= 8597 && t <= 8601 || t >= 8602 && t <= 8603 || t >= 8604 && t <= 8607 || t === 8608 || t >= 8609 && t <= 8610 || t === 8611 || t >= 8612 && t <= 8613 || t === 8614 || t >= 8615 && t <= 8621 || t === 8622 || t >= 8623 && t <= 8653 || t >= 8654 && t <= 8655 || t >= 8656 && t <= 8657 || t === 8658 || t === 8659 || t === 8660 || t >= 8661 && t <= 8691 || t >= 8692 && t <= 8959 || t >= 8960 && t <= 8967 || t === 8968 || t === 8969 || t === 8970 || t === 8971 || t >= 8972 && t <= 8991 || t >= 8992 && t <= 8993 || t >= 8994 && t <= 9e3 || t === 9001 || t === 9002 || t >= 9003 && t <= 9083 || t === 9084 || t >= 9085 && t <= 9114 || t >= 9115 && t <= 9139 || t >= 9140 && t <= 9179 || t >= 9180 && t <= 9185 || t >= 9186 && t <= 9254 || t >= 9255 && t <= 9279 || t >= 9280 && t <= 9290 || t >= 9291 && t <= 9311 || t >= 9472 && t <= 9654 || t === 9655 || t >= 9656 && t <= 9664 || t === 9665 || t >= 9666 && t <= 9719 || t >= 9720 && t <= 9727 || t >= 9728 && t <= 9838 || t === 9839 || t >= 9840 && t <= 10087 || t === 10088 || t === 10089 || t === 10090 || t === 10091 || t === 10092 || t === 10093 || t === 10094 || t === 10095 || t === 10096 || t === 10097 || t === 10098 || t === 10099 || t === 10100 || t === 10101 || t >= 10132 && t <= 10175 || t >= 10176 && t <= 10180 || t === 10181 || t === 10182 || t >= 10183 && t <= 10213 || t === 10214 || t === 10215 || t === 10216 || t === 10217 || t === 10218 || t === 10219 || t === 10220 || t === 10221 || t === 10222 || t === 10223 || t >= 10224 && t <= 10239 || t >= 10240 && t <= 10495 || t >= 10496 && t <= 10626 || t === 10627 || t === 10628 || t === 10629 || t === 10630 || t === 10631 || t === 10632 || t === 10633 || t === 10634 || t === 10635 || t === 10636 || t === 10637 || t === 10638 || t === 10639 || t === 10640 || t === 10641 || t === 10642 || t === 10643 || t === 10644 || t === 10645 || t === 10646 || t === 10647 || t === 10648 || t >= 10649 && t <= 10711 || t === 10712 || t === 10713 || t === 10714 || t === 10715 || t >= 10716 && t <= 10747 || t === 10748 || t === 10749 || t >= 10750 && t <= 11007 || t >= 11008 && t <= 11055 || t >= 11056 && t <= 11076 || t >= 11077 && t <= 11078 || t >= 11079 && t <= 11084 || t >= 11085 && t <= 11123 || t >= 11124 && t <= 11125 || t >= 11126 && t <= 11157 || t === 11158 || t >= 11159 && t <= 11263 || t >= 11776 && t <= 11777 || t === 11778 || t === 11779 || t === 11780 || t === 11781 || t >= 11782 && t <= 11784 || t === 11785 || t === 11786 || t === 11787 || t === 11788 || t === 11789 || t >= 11790 && t <= 11798 || t === 11799 || t >= 11800 && t <= 11801 || t === 11802 || t === 11803 || t === 11804 || t === 11805 || t >= 11806 && t <= 11807 || t === 11808 || t === 11809 || t === 11810 || t === 11811 || t === 11812 || t === 11813 || t === 11814 || t === 11815 || t === 11816 || t === 11817 || t >= 11818 && t <= 11822 || t === 11823 || t >= 11824 && t <= 11833 || t >= 11834 && t <= 11835 || t >= 11836 && t <= 11839 || t === 11840 || t === 11841 || t === 11842 || t >= 11843 && t <= 11855 || t >= 11856 && t <= 11857 || t === 11858 || t >= 11859 && t <= 11903 || t >= 12289 && t <= 12291 || t === 12296 || t === 12297 || t === 12298 || t === 12299 || t === 12300 || t === 12301 || t === 12302 || t === 12303 || t === 12304 || t === 12305 || t >= 12306 && t <= 12307 || t === 12308 || t === 12309 || t === 12310 || t === 12311 || t === 12312 || t === 12313 || t === 12314 || t === 12315 || t === 12316 || t === 12317 || t >= 12318 && t <= 12319 || t === 12320 || t === 12336 || t === 64830 || t === 64831 || t >= 65093 && t <= 65094;
}
function Hs(t) {
  t.forEach(function(e) {
    if (delete e.location, Bc(e) || Vc(e))
      for (var n in e.options)
        delete e.options[n].location, Hs(e.options[n].value);
    else Uc(e) && jc(e.style) || (Fc(e) || kc(e)) && Os(e.style) ? delete e.style.location : Gc(e) && Hs(e.children);
  });
}
function Rv(t, e) {
  e === void 0 && (e = {}), e = pe({ shouldParseSkeletons: !0, requiresOtherClause: !0 }, e);
  var n = new xv(t, e).parse();
  if (n.err) {
    var r = SyntaxError(Qe[n.err.kind]);
    throw r.location = n.err.location, r.originalMessage = n.err.message, r;
  }
  return e != null && e.captureLocation || Hs(n.val), n.val;
}
var ta;
(function(t) {
  t.MISSING_VALUE = "MISSING_VALUE", t.INVALID_VALUE = "INVALID_VALUE", t.MISSING_INTL_API = "MISSING_INTL_API";
})(ta || (ta = {}));
var Go = (
  /** @class */
  function(t) {
    Ke(e, t);
    function e(n, r, i) {
      var a = t.call(this, n) || this;
      return a.code = r, a.originalMessage = i, a;
    }
    return e.prototype.toString = function() {
      return "[formatjs Error: ".concat(this.code, "] ").concat(this.message);
    }, e;
  }(Error)
), Ql = (
  /** @class */
  function(t) {
    Ke(e, t);
    function e(n, r, i, a) {
      return t.call(this, 'Invalid values for "'.concat(n, '": "').concat(r, '". Options are "').concat(Object.keys(i).join('", "'), '"'), ta.INVALID_VALUE, a) || this;
    }
    return e;
  }(Go)
), Dv = (
  /** @class */
  function(t) {
    Ke(e, t);
    function e(n, r, i) {
      return t.call(this, 'Value for "'.concat(n, '" must be of type ').concat(r), ta.INVALID_VALUE, i) || this;
    }
    return e;
  }(Go)
), Mv = (
  /** @class */
  function(t) {
    Ke(e, t);
    function e(n, r) {
      return t.call(this, 'The intl string context variable "'.concat(n, '" was not provided to the string "').concat(r, '"'), ta.MISSING_VALUE, r) || this;
    }
    return e;
  }(Go)
), en;
(function(t) {
  t[t.literal = 0] = "literal", t[t.object = 1] = "object";
})(en || (en = {}));
function Pv(t) {
  return t.length < 2 ? t : t.reduce(function(e, n) {
    var r = e[e.length - 1];
    return !r || r.type !== en.literal || n.type !== en.literal ? e.push(n) : r.value += n.value, e;
  }, []);
}
function Hv(t) {
  return typeof t == "function";
}
function fo(t, e, n, r, i, a, o) {
  if (t.length === 1 && ql(t[0]))
    return [
      {
        type: en.literal,
        value: t[0].value
      }
    ];
  for (var u = [], l = 0, c = t; l < c.length; l++) {
    var d = c[l];
    if (ql(d)) {
      u.push({
        type: en.literal,
        value: d.value
      });
      continue;
    }
    if (rv(d)) {
      typeof a == "number" && u.push({
        type: en.literal,
        value: n.getNumberFormat(e).format(a)
      });
      continue;
    }
    var m = d.value;
    if (!(i && m in i))
      throw new Mv(m, o);
    var f = i[m];
    if (nv(d)) {
      (!f || typeof f == "string" || typeof f == "number") && (f = typeof f == "string" || typeof f == "number" ? String(f) : ""), u.push({
        type: typeof f == "string" ? en.literal : en.object,
        value: f
      });
      continue;
    }
    if (Fc(d)) {
      var g = typeof d.style == "string" ? r.date[d.style] : Os(d.style) ? d.style.parsedOptions : void 0;
      u.push({
        type: en.literal,
        value: n.getDateTimeFormat(e, g).format(f)
      });
      continue;
    }
    if (kc(d)) {
      var g = typeof d.style == "string" ? r.time[d.style] : Os(d.style) ? d.style.parsedOptions : r.time.medium;
      u.push({
        type: en.literal,
        value: n.getDateTimeFormat(e, g).format(f)
      });
      continue;
    }
    if (Uc(d)) {
      var g = typeof d.style == "string" ? r.number[d.style] : jc(d.style) ? d.style.parsedOptions : void 0;
      g && g.scale && (f = f * (g.scale || 1)), u.push({
        type: en.literal,
        value: n.getNumberFormat(e, g).format(f)
      });
      continue;
    }
    if (Gc(d)) {
      var h = d.children, p = d.value, b = i[p];
      if (!Hv(b))
        throw new Dv(p, "function", o);
      var y = fo(h, e, n, r, i, a), E = b(y.map(function(A) {
        return A.value;
      }));
      Array.isArray(E) || (E = [E]), u.push.apply(u, E.map(function(A) {
        return {
          type: typeof A == "string" ? en.literal : en.object,
          value: A
        };
      }));
    }
    if (Bc(d)) {
      var S = d.options[f] || d.options.other;
      if (!S)
        throw new Ql(d.value, f, Object.keys(d.options), o);
      u.push.apply(u, fo(S.value, e, n, r, i));
      continue;
    }
    if (Vc(d)) {
      var S = d.options["=".concat(f)];
      if (!S) {
        if (!Intl.PluralRules)
          throw new Go(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`, ta.MISSING_INTL_API, o);
        var _ = n.getPluralRules(e, { type: d.pluralType }).select(f - (d.offset || 0));
        S = d.options[_] || d.options.other;
      }
      if (!S)
        throw new Ql(d.value, f, Object.keys(d.options), o);
      u.push.apply(u, fo(S.value, e, n, r, i, f - (d.offset || 0)));
      continue;
    }
  }
  return Pv(u);
}
function Nv(t, e) {
  return e ? pe(pe(pe({}, t || {}), e || {}), Object.keys(t).reduce(function(n, r) {
    return n[r] = pe(pe({}, t[r]), e[r] || {}), n;
  }, {})) : t;
}
function Uv(t, e) {
  return e ? Object.keys(t).reduce(function(n, r) {
    return n[r] = Nv(t[r], e[r]), n;
  }, pe({}, t)) : t;
}
function rs(t) {
  return {
    create: function() {
      return {
        get: function(e) {
          return t[e];
        },
        set: function(e, n) {
          t[e] = n;
        }
      };
    }
  };
}
function Fv(t) {
  return t === void 0 && (t = {
    number: {},
    dateTime: {},
    pluralRules: {}
  }), {
    getNumberFormat: es(function() {
      for (var e, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((e = Intl.NumberFormat).bind.apply(e, er([void 0], n, !1)))();
    }, {
      cache: rs(t.number),
      strategy: ts.variadic
    }),
    getDateTimeFormat: es(function() {
      for (var e, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((e = Intl.DateTimeFormat).bind.apply(e, er([void 0], n, !1)))();
    }, {
      cache: rs(t.dateTime),
      strategy: ts.variadic
    }),
    getPluralRules: es(function() {
      for (var e, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((e = Intl.PluralRules).bind.apply(e, er([void 0], n, !1)))();
    }, {
      cache: rs(t.pluralRules),
      strategy: ts.variadic
    })
  };
}
var Qc = (
  /** @class */
  function() {
    function t(e, n, r, i) {
      n === void 0 && (n = t.defaultLocale);
      var a = this;
      if (this.formatterCache = {
        number: {},
        dateTime: {},
        pluralRules: {}
      }, this.format = function(l) {
        var c = a.formatToParts(l);
        if (c.length === 1)
          return c[0].value;
        var d = c.reduce(function(m, f) {
          return !m.length || f.type !== en.literal || typeof m[m.length - 1] != "string" ? m.push(f.value) : m[m.length - 1] += f.value, m;
        }, []);
        return d.length <= 1 ? d[0] || "" : d;
      }, this.formatToParts = function(l) {
        return fo(a.ast, a.locales, a.formatters, a.formats, l, void 0, a.message);
      }, this.resolvedOptions = function() {
        var l;
        return {
          locale: ((l = a.resolvedLocale) === null || l === void 0 ? void 0 : l.toString()) || Intl.NumberFormat.supportedLocalesOf(a.locales)[0]
        };
      }, this.getAst = function() {
        return a.ast;
      }, this.locales = n, this.resolvedLocale = t.resolveLocale(n), typeof e == "string") {
        if (this.message = e, !t.__parse)
          throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");
        var o = i || {};
        o.formatters;
        var u = zh(o, ["formatters"]);
        this.ast = t.__parse(e, pe(pe({}, u), { locale: this.resolvedLocale }));
      } else
        this.ast = e;
      if (!Array.isArray(this.ast))
        throw new TypeError("A message must be provided as a String or AST.");
      this.formats = Uv(t.formats, r), this.formatters = i && i.formatters || Fv(this.formatterCache);
    }
    return Object.defineProperty(t, "defaultLocale", {
      get: function() {
        return t.memoizedDefaultLocale || (t.memoizedDefaultLocale = new Intl.NumberFormat().resolvedOptions().locale), t.memoizedDefaultLocale;
      },
      enumerable: !1,
      configurable: !0
    }), t.memoizedDefaultLocale = null, t.resolveLocale = function(e) {
      if (!(typeof Intl.Locale > "u")) {
        var n = Intl.NumberFormat.supportedLocalesOf(e);
        return n.length > 0 ? new Intl.Locale(n[0]) : new Intl.Locale(typeof e == "string" ? e : e[0]);
      }
    }, t.__parse = Rv, t.formats = {
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
    }, t;
  }()
);
function kv(t, e) {
  if (e == null)
    return;
  if (e in t)
    return t[e];
  const n = e.split(".");
  let r = t;
  for (let i = 0; i < n.length; i++)
    if (typeof r == "object") {
      if (i > 0) {
        const a = n.slice(i, n.length).join(".");
        if (a in r) {
          r = r[a];
          break;
        }
      }
      r = r[n[i]];
    } else
      r = void 0;
  return r;
}
const Pr = {}, Bv = (t, e, n) => n && (e in Pr || (Pr[e] = {}), t in Pr[e] || (Pr[e][t] = n), n), Jc = (t, e) => {
  if (e == null)
    return;
  if (e in Pr && t in Pr[e])
    return Pr[e][t];
  const n = Wa(e);
  for (let r = 0; r < n.length; r++) {
    const i = n[r], a = Gv(i, t);
    if (a)
      return Bv(t, e, a);
  }
};
let ol;
const qa = Gt({});
function Vv(t) {
  return ol[t] || null;
}
function $c(t) {
  return t in ol;
}
function Gv(t, e) {
  if (!$c(t))
    return null;
  const n = Vv(t);
  return kv(n, e);
}
function jv(t) {
  if (t == null)
    return;
  const e = Wa(t);
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    if ($c(r))
      return r;
  }
}
function ed(t, ...e) {
  delete Pr[t], qa.update((n) => (n[t] = Wh.all([n[t] || {}, ...e]), n));
}
sa(
  [qa],
  ([t]) => Object.keys(t)
);
qa.subscribe((t) => ol = t);
const ho = {};
function qv(t, e) {
  ho[t].delete(e), ho[t].size === 0 && delete ho[t];
}
function td(t) {
  return ho[t];
}
function Wv(t) {
  return Wa(t).map((e) => {
    const n = td(e);
    return [e, n ? [...n] : []];
  }).filter(([, e]) => e.length > 0);
}
function So(t) {
  return t == null ? !1 : Wa(t).some(
    (e) => {
      var n;
      return (n = td(e)) == null ? void 0 : n.size;
    }
  );
}
function zv(t, e) {
  return Promise.all(
    e.map((r) => (qv(t, r), r().then((i) => i.default || i)))
  ).then((r) => ed(t, ...r));
}
const ba = {};
function nd(t) {
  if (!So(t))
    return t in ba ? ba[t] : Promise.resolve();
  const e = Wv(t);
  return ba[t] = Promise.all(
    e.map(
      ([n, r]) => zv(n, r)
    )
  ).then(() => {
    if (So(t))
      return nd(t);
    delete ba[t];
  }), ba[t];
}
var Jl = Object.getOwnPropertySymbols, Kv = Object.prototype.hasOwnProperty, Xv = Object.prototype.propertyIsEnumerable, Zv = (t, e) => {
  var n = {};
  for (var r in t)
    Kv.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && Jl)
    for (var r of Jl(t))
      e.indexOf(r) < 0 && Xv.call(t, r) && (n[r] = t[r]);
  return n;
};
const Yv = {
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
function Qv({ locale: t, id: e }) {
  console.warn(
    `[svelte-i18n] The message "${e}" was not found in "${Wa(
      t
    ).join('", "')}".${So(jr()) ? `

Note: there are at least one loader still registered to this locale that wasn't executed.` : ""}`
  );
}
const Jv = {
  fallbackLocale: null,
  loadingDelay: 200,
  formats: Yv,
  warnOnMissingMessages: !0,
  handleMissingMessage: void 0,
  ignoreTag: !0
}, xa = Jv;
function na() {
  return xa;
}
function $v(t) {
  const e = t, { formats: n } = e, r = Zv(e, ["formats"]);
  let i = t.fallbackLocale;
  if (t.initialLocale)
    try {
      Qc.resolveLocale(t.initialLocale) && (i = t.initialLocale);
    } catch {
      console.warn(
        `[svelte-i18n] The initial locale "${t.initialLocale}" is not a valid locale.`
      );
    }
  return r.warnOnMissingMessages && (delete r.warnOnMissingMessages, r.handleMissingMessage == null ? r.handleMissingMessage = Qv : console.warn(
    '[svelte-i18n] The "warnOnMissingMessages" option is deprecated. Please use the "handleMissingMessage" option instead.'
  )), Object.assign(xa, r, { initialLocale: i }), n && ("number" in n && Object.assign(xa.formats.number, n.number), "date" in n && Object.assign(xa.formats.date, n.date), "time" in n && Object.assign(xa.formats.time, n.time)), bi.set(i);
}
const is = Gt(!1);
var em = Object.defineProperty, tm = Object.defineProperties, nm = Object.getOwnPropertyDescriptors, $l = Object.getOwnPropertySymbols, rm = Object.prototype.hasOwnProperty, im = Object.prototype.propertyIsEnumerable, eu = (t, e, n) => e in t ? em(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n, am = (t, e) => {
  for (var n in e || (e = {}))
    rm.call(e, n) && eu(t, n, e[n]);
  if ($l)
    for (var n of $l(e))
      im.call(e, n) && eu(t, n, e[n]);
  return t;
}, om = (t, e) => tm(t, nm(e));
let Ns;
const Eo = Gt(null);
function tu(t) {
  return t.split("-").map((e, n, r) => r.slice(0, n + 1).join("-")).reverse();
}
function Wa(t, e = na().fallbackLocale) {
  const n = tu(t);
  return e ? [.../* @__PURE__ */ new Set([...n, ...tu(e)])] : n;
}
function jr() {
  return Ns ?? void 0;
}
Eo.subscribe((t) => {
  Ns = t ?? void 0, typeof window < "u" && t != null && document.documentElement.setAttribute("lang", t);
});
const sm = (t) => {
  if (t && jv(t) && So(t)) {
    const { loadingDelay: e } = na();
    let n;
    return typeof window < "u" && jr() != null && e ? n = window.setTimeout(
      () => is.set(!0),
      e
    ) : is.set(!0), nd(t).then(() => {
      Eo.set(t);
    }).finally(() => {
      clearTimeout(n), is.set(!1);
    });
  }
  return Eo.set(t);
}, bi = om(am({}, Eo), {
  set: sm
}), lm = () => typeof window > "u" ? null : window.navigator.language || window.navigator.languages[0], jo = (t) => {
  const e = /* @__PURE__ */ Object.create(null);
  return (r) => {
    const i = JSON.stringify(r);
    return i in e ? e[i] : e[i] = t(r);
  };
};
var um = Object.defineProperty, Ao = Object.getOwnPropertySymbols, rd = Object.prototype.hasOwnProperty, id = Object.prototype.propertyIsEnumerable, nu = (t, e, n) => e in t ? um(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n, sl = (t, e) => {
  for (var n in e || (e = {}))
    rd.call(e, n) && nu(t, n, e[n]);
  if (Ao)
    for (var n of Ao(e))
      id.call(e, n) && nu(t, n, e[n]);
  return t;
}, la = (t, e) => {
  var n = {};
  for (var r in t)
    rd.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && Ao)
    for (var r of Ao(t))
      e.indexOf(r) < 0 && id.call(t, r) && (n[r] = t[r]);
  return n;
};
const Ha = (t, e) => {
  const { formats: n } = na();
  if (t in n && e in n[t])
    return n[t][e];
  throw new Error(`[svelte-i18n] Unknown "${e}" ${t} format.`);
}, cm = jo(
  (t) => {
    var e = t, { locale: n, format: r } = e, i = la(e, ["locale", "format"]);
    if (n == null)
      throw new Error('[svelte-i18n] A "locale" must be set to format numbers');
    return r && (i = Ha("number", r)), new Intl.NumberFormat(n, i);
  }
), dm = jo(
  (t) => {
    var e = t, { locale: n, format: r } = e, i = la(e, ["locale", "format"]);
    if (n == null)
      throw new Error('[svelte-i18n] A "locale" must be set to format dates');
    return r ? i = Ha("date", r) : Object.keys(i).length === 0 && (i = Ha("date", "short")), new Intl.DateTimeFormat(n, i);
  }
), fm = jo(
  (t) => {
    var e = t, { locale: n, format: r } = e, i = la(e, ["locale", "format"]);
    if (n == null)
      throw new Error(
        '[svelte-i18n] A "locale" must be set to format time values'
      );
    return r ? i = Ha("time", r) : Object.keys(i).length === 0 && (i = Ha("time", "short")), new Intl.DateTimeFormat(n, i);
  }
), hm = (t = {}) => {
  var e = t, {
    locale: n = jr()
  } = e, r = la(e, [
    "locale"
  ]);
  return cm(sl({ locale: n }, r));
}, vm = (t = {}) => {
  var e = t, {
    locale: n = jr()
  } = e, r = la(e, [
    "locale"
  ]);
  return dm(sl({ locale: n }, r));
}, mm = (t = {}) => {
  var e = t, {
    locale: n = jr()
  } = e, r = la(e, [
    "locale"
  ]);
  return fm(sl({ locale: n }, r));
}, gm = jo(
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  (t, e = jr()) => new Qc(t, e, na().formats, {
    ignoreTag: na().ignoreTag
  })
), pm = (t, e = {}) => {
  var n, r, i, a;
  let o = e;
  typeof t == "object" && (o = t, t = o.id);
  const {
    values: u,
    locale: l = jr(),
    default: c
  } = o;
  if (l == null)
    throw new Error(
      "[svelte-i18n] Cannot format a message without first setting the initial locale."
    );
  let d = Jc(t, l);
  if (!d)
    d = (a = (i = (r = (n = na()).handleMissingMessage) == null ? void 0 : r.call(n, { locale: l, id: t, defaultValue: c })) != null ? i : c) != null ? a : t;
  else if (typeof d != "string")
    return console.warn(
      `[svelte-i18n] Message with id "${t}" must be of type "string", found: "${typeof d}". Gettin its value through the "$format" method is deprecated; use the "json" method instead.`
    ), d;
  if (!u)
    return d;
  let m = d;
  try {
    m = gm(d, l).format(u);
  } catch (f) {
    f instanceof Error && console.warn(
      `[svelte-i18n] Message "${t}" has syntax error:`,
      f.message
    );
  }
  return m;
}, bm = (t, e) => mm(e).format(t), _m = (t, e) => vm(e).format(t), ym = (t, e) => hm(e).format(t), Im = (t, e = jr()) => Jc(t, e), Sm = sa([bi, qa], () => pm);
sa([bi], () => bm);
sa([bi], () => _m);
sa([bi], () => ym);
sa([bi, qa], () => Im);
function Em(t, e) {
  Object.entries(t).forEach(([a, o]) => {
    ed(a, o);
  });
  const n = localStorage.getItem("language"), r = "en", i = n ?? lm();
  console.log("Initial: Setting the language to", i), $v({
    fallbackLocale: r,
    initialLocale: i
  }), window.addEventListener("oscd-language-changed", (a) => {
    const o = a;
    if (!o.detail.language) {
      console.error("No translations for language");
      return;
    }
    console.log("Updating the language to", o.detail.language), bi.set(o.detail.language);
  });
}
const Am = "Ort", Cm = "Suche", Tm = "UUID", xm = "File Name", wm = "Autor", Lm = "Typ", Om = "Version", Rm = "Datum", Dm = "Fertig", Mm = "Filtertypen", Pm = "Filter Hinzufügen", Hm = {
  location: Am,
  search: Cm,
  uuid: Tm,
  filename: xm,
  author: wm,
  type: Lm,
  version: Om,
  date: Rm,
  "versionHistory.title": "Versionsverlauf der Datei {filename}",
  "versionTable.heading": "Versionstabelle",
  done: Dm,
  filter_types: Mm,
  add_filter: Pm
}, Nm = "Location", Um = "Search", Fm = "UUID", km = "Filename", Bm = "Author", Vm = "Type", Gm = "Version", jm = "Date", qm = "Done", Wm = "Filter Types", zm = "Add Filter", Km = {
  location: Nm,
  search: Um,
  uuid: Fm,
  filename: km,
  author: Bm,
  type: Vm,
  version: Gm,
  date: jm,
  "versionHistory.title": "Version History of file {filename}",
  "versionTable.heading": "Version Table",
  done: qm,
  filter_types: Wm,
  add_filter: zm
};
function He(t) {
  return Object.entries(t).filter(([e, n]) => e !== "" && n).map(([e]) => e).join(" ");
}
function Xe(t, e, n, r = { bubbles: !0 }) {
  if (typeof Event > "u")
    throw new Error("Event not defined.");
  if (!t)
    throw new Error("Tried to dispatch event without element.");
  const i = new CustomEvent(e, Object.assign(Object.assign({}, r), { detail: n }));
  return t == null || t.dispatchEvent(i), i;
}
function Vn(t, e) {
  let n = Object.getOwnPropertyNames(t);
  const r = {};
  for (let i = 0; i < n.length; i++) {
    const a = n[i], o = a.indexOf("$");
    o !== -1 && e.indexOf(a.substring(0, o + 1)) !== -1 || e.indexOf(a) === -1 && (r[a] = t[a]);
  }
  return r;
}
function it(t, e) {
  let n = Object.getOwnPropertyNames(t);
  const r = {};
  for (let i = 0; i < n.length; i++) {
    const a = n[i];
    a.substring(0, e.length) === e && (r[a.substring(e.length)] = t[a]);
  }
  return r;
}
class _i {
  constructor() {
    this.elementMap = /* @__PURE__ */ new Map();
  }
  /**
   * Listen to an event on an element.
   */
  on(e, n, r, i) {
    this.elementMap.has(e) || this.elementMap.set(e, {});
    const a = this.elementMap.get(e);
    if (a == null)
      throw new Error("Event map couldn't be created.");
    n in a || (a[n] = /* @__PURE__ */ new Map()), a[n].set(r, Yf(e, n, r, i));
  }
  /**
   * Unlisten to an event on an element.
   */
  off(e, n, r) {
    const i = this.elementMap.get(e);
    if (i == null || !(n in i))
      return;
    const a = i[n], o = a.get(r);
    o != null && (o(), a.delete(r), a.size === 0 && (delete i[n], Object.keys(i).length === 0 && this.elementMap.delete(e)));
  }
  /**
   * Unlisten to all events managed by this instance.
   */
  clear() {
    this.elementMap.forEach((e, n) => {
      for (let [r, i] of Object.entries(e))
        i.forEach((a, o) => {
          a();
        });
    }), this.elementMap.clear();
  }
}
function Y(t, e) {
  let n = [];
  if (e)
    for (let r = 0; r < e.length; r++) {
      const i = e[r], a = Array.isArray(i) ? i[0] : i;
      Array.isArray(i) && i.length > 1 ? n.push(a(t, i[1])) : n.push(a(t));
    }
  return {
    update(r) {
      if ((r && r.length || 0) != n.length)
        throw new Error("You must not change the length of an actions array.");
      if (r)
        for (let i = 0; i < r.length; i++) {
          const a = n[i];
          if (a && a.update) {
            const o = r[i];
            Array.isArray(o) && o.length > 1 ? a.update(o[1]) : a.update();
          }
        }
    },
    destroy() {
      for (let r = 0; r < n.length; r++) {
        const i = n[r];
        i && i.destroy && i.destroy();
      }
    }
  };
}
var $a;
function Xm(t, e) {
  e === void 0 && (e = !1);
  var n = t.CSS, r = $a;
  if (typeof $a == "boolean" && !e)
    return $a;
  var i = n && typeof n.supports == "function";
  if (!i)
    return !1;
  var a = n.supports("--css-vars", "yes"), o = n.supports("(--css-vars: yes)") && n.supports("color", "#00000000");
  return r = a || o, e || ($a = r), r;
}
function Zm(t, e, n) {
  if (!t)
    return { x: 0, y: 0 };
  var r = e.x, i = e.y, a = r + n.left, o = i + n.top, u, l;
  if (t.type === "touchstart") {
    var c = t;
    u = c.changedTouches[0].pageX - a, l = c.changedTouches[0].pageY - o;
  } else {
    var d = t;
    u = d.pageX - a, l = d.pageY - o;
  }
  return { x: u, y: l };
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
var wt = (
  /** @class */
  function() {
    function t(e) {
      e === void 0 && (e = {}), this.adapter = e;
    }
    return Object.defineProperty(t, "cssClasses", {
      get: function() {
        return {};
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t, "strings", {
      get: function() {
        return {};
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t, "numbers", {
      get: function() {
        return {};
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t, "defaultAdapter", {
      get: function() {
        return {};
      },
      enumerable: !1,
      configurable: !0
    }), t.prototype.init = function() {
    }, t.prototype.destroy = function() {
    }, t;
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
function Ym(t) {
  return t === void 0 && (t = window), Qm(t) ? { passive: !0 } : !1;
}
function Qm(t) {
  t === void 0 && (t = window);
  var e = !1;
  try {
    var n = {
      // This function will be called when the browser
      // attempts to access the passive property.
      get passive() {
        return e = !0, !1;
      }
    }, r = function() {
    };
    t.document.addEventListener("test", r, n), t.document.removeEventListener("test", r, n);
  } catch {
    e = !1;
  }
  return e;
}
const ad = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  applyPassive: Ym
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
function Jm(t, e) {
  if (t.closest)
    return t.closest(e);
  for (var n = t; n; ) {
    if (od(n, e))
      return n;
    n = n.parentElement;
  }
  return null;
}
function od(t, e) {
  var n = t.matches || t.webkitMatchesSelector || t.msMatchesSelector;
  return n.call(t, e);
}
function $m(t) {
  var e = t;
  if (e.offsetParent !== null)
    return e.scrollWidth;
  var n = e.cloneNode(!0);
  n.style.setProperty("position", "absolute"), n.style.setProperty("transform", "translate(-9999px, -9999px)"), document.documentElement.appendChild(n);
  var r = n.scrollWidth;
  return document.documentElement.removeChild(n), r;
}
const ua = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  closest: Jm,
  estimateScrollWidth: $m,
  matches: od
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
var eg = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  BG_FOCUSED: "mdc-ripple-upgraded--background-focused",
  FG_ACTIVATION: "mdc-ripple-upgraded--foreground-activation",
  FG_DEACTIVATION: "mdc-ripple-upgraded--foreground-deactivation",
  ROOT: "mdc-ripple-upgraded",
  UNBOUNDED: "mdc-ripple-upgraded--unbounded"
}, tg = {
  VAR_FG_SCALE: "--mdc-ripple-fg-scale",
  VAR_FG_SIZE: "--mdc-ripple-fg-size",
  VAR_FG_TRANSLATE_END: "--mdc-ripple-fg-translate-end",
  VAR_FG_TRANSLATE_START: "--mdc-ripple-fg-translate-start",
  VAR_LEFT: "--mdc-ripple-left",
  VAR_TOP: "--mdc-ripple-top"
}, ru = {
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
var iu = [
  "touchstart",
  "pointerdown",
  "mousedown",
  "keydown"
], au = [
  "touchend",
  "pointerup",
  "mouseup",
  "contextmenu"
], eo = [], ng = (
  /** @class */
  function(t) {
    Ke(e, t);
    function e(n) {
      var r = t.call(this, pe(pe({}, e.defaultAdapter), n)) || this;
      return r.activationAnimationHasEnded = !1, r.activationTimer = 0, r.fgDeactivationRemovalTimer = 0, r.fgScale = "0", r.frame = { width: 0, height: 0 }, r.initialSize = 0, r.layoutFrame = 0, r.maxRadius = 0, r.unboundedCoords = { left: 0, top: 0 }, r.activationState = r.defaultActivationState(), r.activationTimerCallback = function() {
        r.activationAnimationHasEnded = !0, r.runDeactivationUXLogicIfReady();
      }, r.activateHandler = function(i) {
        r.activateImpl(i);
      }, r.deactivateHandler = function() {
        r.deactivateImpl();
      }, r.focusHandler = function() {
        r.handleFocus();
      }, r.blurHandler = function() {
        r.handleBlur();
      }, r.resizeHandler = function() {
        r.layout();
      }, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return eg;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return tg;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return ru;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
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
    }), e.prototype.init = function() {
      var n = this, r = this.supportsPressRipple();
      if (this.registerRootHandlers(r), r) {
        var i = e.cssClasses, a = i.ROOT, o = i.UNBOUNDED;
        requestAnimationFrame(function() {
          n.adapter.addClass(a), n.adapter.isUnbounded() && (n.adapter.addClass(o), n.layoutInternal());
        });
      }
    }, e.prototype.destroy = function() {
      var n = this;
      if (this.supportsPressRipple()) {
        this.activationTimer && (clearTimeout(this.activationTimer), this.activationTimer = 0, this.adapter.removeClass(e.cssClasses.FG_ACTIVATION)), this.fgDeactivationRemovalTimer && (clearTimeout(this.fgDeactivationRemovalTimer), this.fgDeactivationRemovalTimer = 0, this.adapter.removeClass(e.cssClasses.FG_DEACTIVATION));
        var r = e.cssClasses, i = r.ROOT, a = r.UNBOUNDED;
        requestAnimationFrame(function() {
          n.adapter.removeClass(i), n.adapter.removeClass(a), n.removeCssVars();
        });
      }
      this.deregisterRootHandlers(), this.deregisterDeactivationHandlers();
    }, e.prototype.activate = function(n) {
      this.activateImpl(n);
    }, e.prototype.deactivate = function() {
      this.deactivateImpl();
    }, e.prototype.layout = function() {
      var n = this;
      this.layoutFrame && cancelAnimationFrame(this.layoutFrame), this.layoutFrame = requestAnimationFrame(function() {
        n.layoutInternal(), n.layoutFrame = 0;
      });
    }, e.prototype.setUnbounded = function(n) {
      var r = e.cssClasses.UNBOUNDED;
      n ? this.adapter.addClass(r) : this.adapter.removeClass(r);
    }, e.prototype.handleFocus = function() {
      var n = this;
      requestAnimationFrame(function() {
        return n.adapter.addClass(e.cssClasses.BG_FOCUSED);
      });
    }, e.prototype.handleBlur = function() {
      var n = this;
      requestAnimationFrame(function() {
        return n.adapter.removeClass(e.cssClasses.BG_FOCUSED);
      });
    }, e.prototype.supportsPressRipple = function() {
      return this.adapter.browserSupportsCssVars();
    }, e.prototype.defaultActivationState = function() {
      return {
        activationEvent: void 0,
        hasDeactivationUXRun: !1,
        isActivated: !1,
        isProgrammatic: !1,
        wasActivatedByPointer: !1,
        wasElementMadeActive: !1
      };
    }, e.prototype.registerRootHandlers = function(n) {
      var r, i;
      if (n) {
        try {
          for (var a = Bt(iu), o = a.next(); !o.done; o = a.next()) {
            var u = o.value;
            this.adapter.registerInteractionHandler(u, this.activateHandler);
          }
        } catch (l) {
          r = { error: l };
        } finally {
          try {
            o && !o.done && (i = a.return) && i.call(a);
          } finally {
            if (r) throw r.error;
          }
        }
        this.adapter.isUnbounded() && this.adapter.registerResizeHandler(this.resizeHandler);
      }
      this.adapter.registerInteractionHandler("focus", this.focusHandler), this.adapter.registerInteractionHandler("blur", this.blurHandler);
    }, e.prototype.registerDeactivationHandlers = function(n) {
      var r, i;
      if (n.type === "keydown")
        this.adapter.registerInteractionHandler("keyup", this.deactivateHandler);
      else
        try {
          for (var a = Bt(au), o = a.next(); !o.done; o = a.next()) {
            var u = o.value;
            this.adapter.registerDocumentInteractionHandler(u, this.deactivateHandler);
          }
        } catch (l) {
          r = { error: l };
        } finally {
          try {
            o && !o.done && (i = a.return) && i.call(a);
          } finally {
            if (r) throw r.error;
          }
        }
    }, e.prototype.deregisterRootHandlers = function() {
      var n, r;
      try {
        for (var i = Bt(iu), a = i.next(); !a.done; a = i.next()) {
          var o = a.value;
          this.adapter.deregisterInteractionHandler(o, this.activateHandler);
        }
      } catch (u) {
        n = { error: u };
      } finally {
        try {
          a && !a.done && (r = i.return) && r.call(i);
        } finally {
          if (n) throw n.error;
        }
      }
      this.adapter.deregisterInteractionHandler("focus", this.focusHandler), this.adapter.deregisterInteractionHandler("blur", this.blurHandler), this.adapter.isUnbounded() && this.adapter.deregisterResizeHandler(this.resizeHandler);
    }, e.prototype.deregisterDeactivationHandlers = function() {
      var n, r;
      this.adapter.deregisterInteractionHandler("keyup", this.deactivateHandler);
      try {
        for (var i = Bt(au), a = i.next(); !a.done; a = i.next()) {
          var o = a.value;
          this.adapter.deregisterDocumentInteractionHandler(o, this.deactivateHandler);
        }
      } catch (u) {
        n = { error: u };
      } finally {
        try {
          a && !a.done && (r = i.return) && r.call(i);
        } finally {
          if (n) throw n.error;
        }
      }
    }, e.prototype.removeCssVars = function() {
      var n = this, r = e.strings, i = Object.keys(r);
      i.forEach(function(a) {
        a.indexOf("VAR_") === 0 && n.adapter.updateCssVariable(r[a], null);
      });
    }, e.prototype.activateImpl = function(n) {
      var r = this;
      if (!this.adapter.isSurfaceDisabled()) {
        var i = this.activationState;
        if (!i.isActivated) {
          var a = this.previousActivationEvent, o = a && n !== void 0 && a.type !== n.type;
          if (!o) {
            i.isActivated = !0, i.isProgrammatic = n === void 0, i.activationEvent = n, i.wasActivatedByPointer = i.isProgrammatic ? !1 : n !== void 0 && (n.type === "mousedown" || n.type === "touchstart" || n.type === "pointerdown");
            var u = n !== void 0 && eo.length > 0 && eo.some(function(l) {
              return r.adapter.containsEventTarget(l);
            });
            if (u) {
              this.resetActivationState();
              return;
            }
            n !== void 0 && (eo.push(n.target), this.registerDeactivationHandlers(n)), i.wasElementMadeActive = this.checkElementMadeActive(n), i.wasElementMadeActive && this.animateActivation(), requestAnimationFrame(function() {
              eo = [], !i.wasElementMadeActive && n !== void 0 && (n.key === " " || n.keyCode === 32) && (i.wasElementMadeActive = r.checkElementMadeActive(n), i.wasElementMadeActive && r.animateActivation()), i.wasElementMadeActive || (r.activationState = r.defaultActivationState());
            });
          }
        }
      }
    }, e.prototype.checkElementMadeActive = function(n) {
      return n !== void 0 && n.type === "keydown" ? this.adapter.isSurfaceActive() : !0;
    }, e.prototype.animateActivation = function() {
      var n = this, r = e.strings, i = r.VAR_FG_TRANSLATE_START, a = r.VAR_FG_TRANSLATE_END, o = e.cssClasses, u = o.FG_DEACTIVATION, l = o.FG_ACTIVATION, c = e.numbers.DEACTIVATION_TIMEOUT_MS;
      this.layoutInternal();
      var d = "", m = "";
      if (!this.adapter.isUnbounded()) {
        var f = this.getFgTranslationCoordinates(), g = f.startPoint, h = f.endPoint;
        d = g.x + "px, " + g.y + "px", m = h.x + "px, " + h.y + "px";
      }
      this.adapter.updateCssVariable(i, d), this.adapter.updateCssVariable(a, m), clearTimeout(this.activationTimer), clearTimeout(this.fgDeactivationRemovalTimer), this.rmBoundedActivationClasses(), this.adapter.removeClass(u), this.adapter.computeBoundingRect(), this.adapter.addClass(l), this.activationTimer = setTimeout(function() {
        n.activationTimerCallback();
      }, c);
    }, e.prototype.getFgTranslationCoordinates = function() {
      var n = this.activationState, r = n.activationEvent, i = n.wasActivatedByPointer, a;
      i ? a = Zm(r, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect()) : a = {
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
    }, e.prototype.runDeactivationUXLogicIfReady = function() {
      var n = this, r = e.cssClasses.FG_DEACTIVATION, i = this.activationState, a = i.hasDeactivationUXRun, o = i.isActivated, u = a || !o;
      u && this.activationAnimationHasEnded && (this.rmBoundedActivationClasses(), this.adapter.addClass(r), this.fgDeactivationRemovalTimer = setTimeout(function() {
        n.adapter.removeClass(r);
      }, ru.FG_DEACTIVATION_MS));
    }, e.prototype.rmBoundedActivationClasses = function() {
      var n = e.cssClasses.FG_ACTIVATION;
      this.adapter.removeClass(n), this.activationAnimationHasEnded = !1, this.adapter.computeBoundingRect();
    }, e.prototype.resetActivationState = function() {
      var n = this;
      this.previousActivationEvent = this.activationState.activationEvent, this.activationState = this.defaultActivationState(), setTimeout(function() {
        return n.previousActivationEvent = void 0;
      }, e.numbers.TAP_DELAY_MS);
    }, e.prototype.deactivateImpl = function() {
      var n = this, r = this.activationState;
      if (r.isActivated) {
        var i = pe({}, r);
        r.isProgrammatic ? (requestAnimationFrame(function() {
          n.animateDeactivation(i);
        }), this.resetActivationState()) : (this.deregisterDeactivationHandlers(), requestAnimationFrame(function() {
          n.activationState.hasDeactivationUXRun = !0, n.animateDeactivation(i), n.resetActivationState();
        }));
      }
    }, e.prototype.animateDeactivation = function(n) {
      var r = n.wasActivatedByPointer, i = n.wasElementMadeActive;
      (r || i) && this.runDeactivationUXLogicIfReady();
    }, e.prototype.layoutInternal = function() {
      var n = this;
      this.frame = this.adapter.computeBoundingRect();
      var r = Math.max(this.frame.height, this.frame.width), i = function() {
        var o = Math.sqrt(Math.pow(n.frame.width, 2) + Math.pow(n.frame.height, 2));
        return o + e.numbers.PADDING;
      };
      this.maxRadius = this.adapter.isUnbounded() ? r : i();
      var a = Math.floor(r * e.numbers.INITIAL_ORIGIN_SCALE);
      this.adapter.isUnbounded() && a % 2 !== 0 ? this.initialSize = a - 1 : this.initialSize = a, this.fgScale = "" + this.maxRadius / this.initialSize, this.updateLayoutCssVars();
    }, e.prototype.updateLayoutCssVars = function() {
      var n = e.strings, r = n.VAR_FG_SIZE, i = n.VAR_LEFT, a = n.VAR_TOP, o = n.VAR_FG_SCALE;
      this.adapter.updateCssVariable(r, this.initialSize + "px"), this.adapter.updateCssVariable(o, this.fgScale), this.adapter.isUnbounded() && (this.unboundedCoords = {
        left: Math.round(this.frame.width / 2 - this.initialSize / 2),
        top: Math.round(this.frame.height / 2 - this.initialSize / 2)
      }, this.adapter.updateCssVariable(i, this.unboundedCoords.left + "px"), this.adapter.updateCssVariable(a, this.unboundedCoords.top + "px"));
    }, e;
  }(wt)
);
/**
 * @license
 * Copyright 2020 Google Inc.
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
var as = "mdc-dom-focus-sentinel", rg = (
  /** @class */
  function() {
    function t(e, n) {
      n === void 0 && (n = {}), this.root = e, this.options = n, this.elFocusedBeforeTrapFocus = null;
    }
    return t.prototype.trapFocus = function() {
      var e = this.getFocusableElements(this.root);
      if (e.length === 0)
        throw new Error("FocusTrap: Element must have at least one focusable child.");
      this.elFocusedBeforeTrapFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null, this.wrapTabFocus(this.root), this.options.skipInitialFocus || this.focusInitialElement(e, this.options.initialFocusEl);
    }, t.prototype.releaseFocus = function() {
      [].slice.call(this.root.querySelectorAll("." + as)).forEach(function(e) {
        e.parentElement.removeChild(e);
      }), !this.options.skipRestoreFocus && this.elFocusedBeforeTrapFocus && this.elFocusedBeforeTrapFocus.focus();
    }, t.prototype.wrapTabFocus = function(e) {
      var n = this, r = this.createSentinel(), i = this.createSentinel();
      r.addEventListener("focus", function() {
        var a = n.getFocusableElements(e);
        a.length > 0 && a[a.length - 1].focus();
      }), i.addEventListener("focus", function() {
        var a = n.getFocusableElements(e);
        a.length > 0 && a[0].focus();
      }), e.insertBefore(r, e.children[0]), e.appendChild(i);
    }, t.prototype.focusInitialElement = function(e, n) {
      var r = 0;
      n && (r = Math.max(e.indexOf(n), 0)), e[r].focus();
    }, t.prototype.getFocusableElements = function(e) {
      var n = [].slice.call(e.querySelectorAll("[autofocus], [tabindex], a, input, textarea, select, button"));
      return n.filter(function(r) {
        var i = r.getAttribute("aria-disabled") === "true" || r.getAttribute("disabled") != null || r.getAttribute("hidden") != null || r.getAttribute("aria-hidden") === "true", a = r.tabIndex >= 0 && r.getBoundingClientRect().width > 0 && !r.classList.contains(as) && !i, o = !1;
        if (a) {
          var u = getComputedStyle(r);
          o = u.display === "none" || u.visibility === "hidden";
        }
        return a && !o;
      });
    }, t.prototype.createSentinel = function() {
      var e = document.createElement("div");
      return e.setAttribute("tabindex", "0"), e.setAttribute("aria-hidden", "true"), e.classList.add(as), e;
    }, t;
  }()
);
const ig = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  FocusTrap: rg
}, Symbol.toStringTag, { value: "Module" }));
/**
 * @license
 * Copyright 2020 Google Inc.
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
var Ge = {
  UNKNOWN: "Unknown",
  BACKSPACE: "Backspace",
  ENTER: "Enter",
  SPACEBAR: "Spacebar",
  PAGE_UP: "PageUp",
  PAGE_DOWN: "PageDown",
  END: "End",
  HOME: "Home",
  ARROW_LEFT: "ArrowLeft",
  ARROW_UP: "ArrowUp",
  ARROW_RIGHT: "ArrowRight",
  ARROW_DOWN: "ArrowDown",
  DELETE: "Delete",
  ESCAPE: "Escape",
  TAB: "Tab"
}, sn = /* @__PURE__ */ new Set();
sn.add(Ge.BACKSPACE);
sn.add(Ge.ENTER);
sn.add(Ge.SPACEBAR);
sn.add(Ge.PAGE_UP);
sn.add(Ge.PAGE_DOWN);
sn.add(Ge.END);
sn.add(Ge.HOME);
sn.add(Ge.ARROW_LEFT);
sn.add(Ge.ARROW_UP);
sn.add(Ge.ARROW_RIGHT);
sn.add(Ge.ARROW_DOWN);
sn.add(Ge.DELETE);
sn.add(Ge.ESCAPE);
sn.add(Ge.TAB);
var vn = {
  BACKSPACE: 8,
  ENTER: 13,
  SPACEBAR: 32,
  PAGE_UP: 33,
  PAGE_DOWN: 34,
  END: 35,
  HOME: 36,
  ARROW_LEFT: 37,
  ARROW_UP: 38,
  ARROW_RIGHT: 39,
  ARROW_DOWN: 40,
  DELETE: 46,
  ESCAPE: 27,
  TAB: 9
}, ln = /* @__PURE__ */ new Map();
ln.set(vn.BACKSPACE, Ge.BACKSPACE);
ln.set(vn.ENTER, Ge.ENTER);
ln.set(vn.SPACEBAR, Ge.SPACEBAR);
ln.set(vn.PAGE_UP, Ge.PAGE_UP);
ln.set(vn.PAGE_DOWN, Ge.PAGE_DOWN);
ln.set(vn.END, Ge.END);
ln.set(vn.HOME, Ge.HOME);
ln.set(vn.ARROW_LEFT, Ge.ARROW_LEFT);
ln.set(vn.ARROW_UP, Ge.ARROW_UP);
ln.set(vn.ARROW_RIGHT, Ge.ARROW_RIGHT);
ln.set(vn.ARROW_DOWN, Ge.ARROW_DOWN);
ln.set(vn.DELETE, Ge.DELETE);
ln.set(vn.ESCAPE, Ge.ESCAPE);
ln.set(vn.TAB, Ge.TAB);
var qr = /* @__PURE__ */ new Set();
qr.add(Ge.PAGE_UP);
qr.add(Ge.PAGE_DOWN);
qr.add(Ge.END);
qr.add(Ge.HOME);
qr.add(Ge.ARROW_LEFT);
qr.add(Ge.ARROW_UP);
qr.add(Ge.ARROW_RIGHT);
qr.add(Ge.ARROW_DOWN);
function Ot(t) {
  var e = t.key;
  if (sn.has(e))
    return e;
  var n = ln.get(t.keyCode);
  return n || Ge.UNKNOWN;
}
const { applyPassive: ou } = ad, { matches: ag } = ua;
function Qt(t, { ripple: e = !0, surface: n = !1, unbounded: r = !1, disabled: i = !1, color: a, active: o, rippleElement: u, eventTarget: l, activeTarget: c, addClass: d = (h) => t.classList.add(h), removeClass: m = (h) => t.classList.remove(h), addStyle: f = (h, p) => t.style.setProperty(h, p), initPromise: g = Promise.resolve() } = {}) {
  let h, p = new _i(), b = _e("SMUI:addLayoutListener"), y, E = o, S = l, _ = c;
  function A() {
    n ? (d("mdc-ripple-surface"), a === "primary" ? (d("smui-ripple-surface--primary"), m("smui-ripple-surface--secondary")) : a === "secondary" ? (m("smui-ripple-surface--primary"), d("smui-ripple-surface--secondary")) : (m("smui-ripple-surface--primary"), m("smui-ripple-surface--secondary"))) : (m("mdc-ripple-surface"), m("smui-ripple-surface--primary"), m("smui-ripple-surface--secondary")), h && E !== o && (E = o, o ? h.activate() : o === !1 && h.deactivate()), e && !h ? (h = new ng({
      addClass: d,
      browserSupportsCssVars: () => Xm(window),
      computeBoundingRect: () => (u || t).getBoundingClientRect(),
      containsEventTarget: (L) => t.contains(L),
      deregisterDocumentInteractionHandler: (L, C) => p.off(document.documentElement, L, C),
      deregisterInteractionHandler: (L, C) => p.off(l || t, L, C),
      deregisterResizeHandler: (L) => window.removeEventListener("resize", L),
      getWindowPageOffset: () => {
        var L, C;
        return {
          x: (L = window.pageXOffset) !== null && L !== void 0 ? L : window.scrollX,
          y: (C = window.pageYOffset) !== null && C !== void 0 ? C : window.scrollY
        };
      },
      isSurfaceActive: () => o ?? ag(c || t, ":active"),
      isSurfaceDisabled: () => !!i,
      isUnbounded: () => !!r,
      registerDocumentInteractionHandler: (L, C) => {
        const w = ou();
        p.on(document.documentElement, L, C, typeof w == "boolean" ? { capture: w } : w);
      },
      registerInteractionHandler: (L, C) => {
        const w = ou();
        p.on(l || t, L, C, typeof w == "boolean" ? { capture: w } : w);
      },
      registerResizeHandler: (L) => p.on(window, "resize", L),
      removeClass: m,
      updateCssVariable: f
    }), g.then(() => {
      h && (h.init(), h.setUnbounded(r));
    })) : h && !e && g.then(() => {
      h && (h.destroy(), h = void 0, p.clear());
    }), h && (S !== l || _ !== c) && (S = l, _ = c, h.destroy(), requestAnimationFrame(() => {
      h && (h.init(), h.setUnbounded(r));
    })), !e && r && d("mdc-ripple-upgraded--unbounded");
  }
  A(), b && (y = b(I));
  function I() {
    h && h.layout();
  }
  return {
    update(L) {
      ({
        ripple: e,
        surface: n,
        unbounded: r,
        disabled: i,
        color: a,
        active: o,
        rippleElement: u,
        eventTarget: l,
        activeTarget: c,
        addClass: d,
        removeClass: m,
        addStyle: f,
        initPromise: g
      } = Object.assign({ ripple: !0, surface: !1, unbounded: !1, disabled: !1, color: void 0, active: void 0, rippleElement: void 0, eventTarget: void 0, activeTarget: void 0, addClass: (C) => t.classList.add(C), removeClass: (C) => t.classList.remove(C), addStyle: (C, w) => t.style.setProperty(C, w), initPromise: Promise.resolve() }, L)), A();
    },
    destroy() {
      h && (h.destroy(), h = void 0, p.clear(), m("mdc-ripple-surface"), m("smui-ripple-surface--primary"), m("smui-ripple-surface--secondary")), y && y();
    }
  };
}
function sd(t, e) {
  we(e, !0);
  let n = v(e, "use", 19, () => []), r = v(e, "class", 3, ""), i = v(e, "component", 3, Wr), a = v(e, "tag", 3, "span"), o = /* @__PURE__ */ je(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "component",
    "tag",
    "children"
  ]), u;
  const l = _e("SMUI:label:context"), c = _e("SMUI:label:tabindex");
  function d() {
    return u.getElement();
  }
  var m = { getElement: d }, f = re(), g = Z(f);
  {
    let h = /* @__PURE__ */ ve(() => He({
      "mdc-button__label": l === "button",
      "mdc-fab__label": l === "fab",
      "mdc-tab__text-label": l === "tab",
      "mdc-image-list__label": l === "image-list",
      "mdc-snackbar__label": l === "snackbar",
      "mdc-banner__text": l === "banner",
      "mdc-segmented-button__label": l === "segmented-button",
      "mdc-data-table__pagination-rows-per-page-label": l === "data-table:pagination",
      "mdc-data-table__header-cell-label": l === "data-table:sortable-header-cell",
      [r()]: !0
    }));
    rr(g, i, (p, b) => {
      Ce(
        b(p, $e(
          {
            get tag() {
              return a();
            },
            get use() {
              return n();
            },
            get class() {
              return s(h);
            }
          },
          () => l === "snackbar" ? { "aria-atomic": "false" } : {},
          {
            get tabindex() {
              return c;
            }
          },
          () => o,
          {
            children: (y, E) => {
              var S = re(), _ = Z(S);
              Ae(_, () => e.children ?? ge), T(y, S);
            },
            $$slots: { default: !0 }
          }
        )),
        (y) => u = y,
        () => u
      );
    });
  }
  return T(t, f), Le(m);
}
function Us(t, e) {
  we(e, !0);
  let n = v(e, "use", 19, () => []), r = v(e, "class", 3, ""), i = v(e, "on", 3, !1), a = v(e, "component", 3, Wr), o = v(e, "tag", 3, "i"), u = /* @__PURE__ */ je(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "on",
    "component",
    "tag",
    "children"
  ]), l;
  const c = /* @__PURE__ */ ve(() => o() === "svg" || a() === lg), d = _e("SMUI:icon:context");
  function m() {
    return l.getElement();
  }
  var f = { getElement: m }, g = re(), h = Z(g);
  {
    let p = /* @__PURE__ */ ve(() => He({
      "mdc-button__icon": d === "button",
      "mdc-fab__icon": d === "fab",
      "mdc-icon-button__icon": d === "icon-button",
      "mdc-icon-button__icon--on": d === "icon-button" && i(),
      "mdc-tab__icon": d === "tab",
      "mdc-banner__icon": d === "banner",
      "mdc-segmented-button__icon": d === "segmented-button",
      [r()]: !0
    }));
    rr(h, a, (b, y) => {
      Ce(
        y(b, $e(
          {
            get tag() {
              return o();
            },
            get use() {
              return n();
            },
            get class() {
              return s(p);
            },
            "aria-hidden": "true"
          },
          () => s(c) ? { focusable: "false", tabindex: "-1" } : {},
          () => u,
          {
            children: (E, S) => {
              var _ = re(), A = Z(_);
              Ae(A, () => e.children ?? ge), T(E, _);
            },
            $$slots: { default: !0 }
          }
        )),
        (E) => l = E,
        () => l
      );
    });
  }
  return T(t, g), Le(f);
}
var og = /* @__PURE__ */ _t("<svg><!></svg>");
function Wr(t, e) {
  we(e, !0);
  let n = v(e, "use", 19, () => []), r = v(e, "tag", 3, "div"), i = /* @__PURE__ */ je(e, ["$$slots", "$$events", "$$legacy", "use", "tag", "children"]);
  const a = /* @__PURE__ */ ve(() => [
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
  ].indexOf(r()) > -1);
  let o;
  function u() {
    return o;
  }
  var l = { getElement: u }, c = re(), d = Z(c);
  {
    var m = (g) => {
      var h = og();
      ke(h, () => ({ ...i }));
      var p = ce(h);
      Ae(p, () => e.children ?? ge), Ce(h, (b) => o = b, () => o), Ne(h, (b, y) => Y == null ? void 0 : Y(b, y), n), T(g, h);
    }, f = (g) => {
      var h = re(), p = Z(h);
      {
        var b = (E) => {
          var S = re(), _ = Z(S);
          Pl(_, r, !1, (A, I) => {
            Ce(A, (L) => o = L, () => o), Ne(A, (L, C) => Y == null ? void 0 : Y(L, C), n), ke(A, () => ({ ...i }));
          }), T(E, S);
        }, y = (E) => {
          var S = re(), _ = Z(S);
          Pl(_, r, !1, (A, I) => {
            Ce(A, (w) => o = w, () => o), Ne(A, (w, B) => Y == null ? void 0 : Y(w, B), n), ke(A, () => ({ ...i }));
            var L = re(), C = Z(L);
            Ae(C, () => e.children ?? ge), T(I, L);
          }), T(E, S);
        };
        oe(
          p,
          (E) => {
            s(a) ? E(b) : E(y, !1);
          },
          !0
        );
      }
      T(g, h);
    };
    oe(d, (g) => {
      r() === "svg" ? g(m) : g(f, !1);
    });
  }
  return T(t, c), Le(l);
}
var sg = /* @__PURE__ */ _t("<svg><!></svg>");
function lg(t, e) {
  we(e, !0), console && console.warn && console.warn('The @smui/common Svg component is deprecated. You can use `tag="svg"` now.');
  let n = v(e, "use", 19, () => []), r = /* @__PURE__ */ je(e, ["$$slots", "$$events", "$$legacy", "use", "children"]), i;
  function a() {
    return i;
  }
  var o = { getElement: a }, u = sg();
  ke(u, () => ({ ...r }));
  var l = ce(u);
  return Ae(l, () => e.children ?? ge), Ce(u, (c) => i = c, () => i), Ne(u, (c, d) => Y == null ? void 0 : Y(c, d), n), T(t, u), Le(o);
}
function to(t, e) {
  we(e, !0);
  const [n, r] = ir(), i = Gt(e.value);
  ue(e.key, i), Oe(() => {
    Fn(i, e.value);
  }), En(() => {
    i.set(void 0);
  });
  var a = re(), o = Z(a);
  Ae(o, () => e.children ?? ge), T(t, a), Le(), r();
}
var ug = /* @__PURE__ */ de('<div class="mdc-button__touch"></div>'), cg = /* @__PURE__ */ de('<div class="mdc-button__ripple"></div> <!><!>', 1);
function ra(t, e) {
  we(e, !0);
  let n = v(e, "use", 19, () => []), r = v(e, "class", 3, ""), i = v(e, "style", 3, ""), a = v(e, "ripple", 3, !0), o = v(e, "color", 3, "primary"), u = v(e, "variant", 3, "text"), l = v(e, "touch", 3, !1), c = v(e, "action", 3, "close"), d = v(e, "defaultAction", 3, !1), m = v(e, "secondary", 3, !1), f = v(e, "component", 3, Wr), g = v(e, "tag", 19, () => e.href == null ? "button" : "a"), h = /* @__PURE__ */ je(e, [
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
  ]), p, b = ye({}), y = ye({}), E = _e("SMUI:button:context");
  const S = /* @__PURE__ */ ve(() => E === "dialog:action" && c() != null ? { "data-mdc-dialog-action": c() } : { action: c() }), _ = /* @__PURE__ */ ve(() => E === "dialog:action" && d() ? { "data-mdc-dialog-button-default": "" } : {}), A = /* @__PURE__ */ ve(() => E === "banner" ? {} : { secondary: m() });
  let I = e.disabled;
  Oe(() => {
    if (I !== e.disabled) {
      if (p) {
        const x = $();
        "blur" in x && x.blur();
      }
      I = h.disabled;
    }
  }), ue("SMUI:label:context", "button"), ue("SMUI:icon:context", "button");
  function L(x) {
    b[x] || (b[x] = !0);
  }
  function C(x) {
    (!(x in b) || b[x]) && (b[x] = !1);
  }
  function w(x, P) {
    y[x] != P && (P === "" || P == null ? delete y[x] : y[x] = P);
  }
  function B() {
    E === "banner" && Xe($(), m() ? "SMUIBannerButtonSecondaryActionClick" : "SMUIBannerButtonPrimaryActionClick");
  }
  function $() {
    return p.getElement();
  }
  var q = { getElement: $ }, z = re(), O = Z(z);
  {
    let x = /* @__PURE__ */ ve(() => [
      [
        Qt,
        {
          ripple: a(),
          unbounded: !1,
          color: o(),
          disabled: !!e.disabled,
          addClass: L,
          removeClass: C,
          addStyle: w
        }
      ],
      ...n()
    ]), P = /* @__PURE__ */ ve(() => He({
      "mdc-button": !0,
      "mdc-button--raised": u() === "raised",
      "mdc-button--unelevated": u() === "unelevated",
      "mdc-button--outlined": u() === "outlined",
      "smui-button--color-secondary": o() === "secondary",
      "mdc-button--touch": l(),
      "mdc-card__action": E === "card:action",
      "mdc-card__action--button": E === "card:action",
      "mdc-dialog__button": E === "dialog:action",
      "mdc-top-app-bar__navigation-icon": E === "top-app-bar:navigation",
      "mdc-top-app-bar__action-item": E === "top-app-bar:action",
      "mdc-snackbar__action": E === "snackbar:actions",
      "mdc-banner__secondary-action": E === "banner" && m(),
      "mdc-banner__primary-action": E === "banner" && !m(),
      "mdc-tooltip__action": E === "tooltip:rich-actions",
      ...b,
      [r()]: !0
    })), N = /* @__PURE__ */ ve(() => Object.entries(y).map(([K, ne]) => `${K}: ${ne};`).concat([i()]).join(" "));
    rr(O, f, (K, ne) => {
      Ce(
        ne(K, $e(
          {
            get tag() {
              return g();
            },
            get use() {
              return s(x);
            },
            get class() {
              return s(P);
            },
            get style() {
              return s(N);
            }
          },
          () => s(S),
          () => s(_),
          () => s(A),
          {
            get href() {
              return e.href;
            }
          },
          () => h,
          {
            onclick: (F) => {
              var R;
              B(), (R = e.onclick) == null || R.call(e, F);
            },
            children: (F, R) => {
              var W = cg(), Ie = be(Z(W), 2);
              Ae(Ie, () => e.children ?? ge);
              var V = be(Ie);
              {
                var H = (M) => {
                  var D = ug();
                  T(M, D);
                };
                oe(V, (M) => {
                  l() && M(H);
                });
              }
              T(F, W);
            },
            $$slots: { default: !0 }
          }
        )),
        (F) => p = F,
        () => p
      );
    });
  }
  return T(t, z), Le(q);
}
function ld(t, e) {
  we(e, !0);
  let n = v(e, "callback", 3, () => {
  }), r = v(e, "disabled", 3, !1), i = v(e, "variant", 3, "default"), a = v(e, "isAbortAction", 3, !1), o = v(e, "backgroundColor", 3, void 0);
  {
    let u = /* @__PURE__ */ ve(() => a() ? "background-color: #ff3e00;" : "background-color: " + o());
    ra(t, {
      onclick: () => n()(),
      get variant() {
        return i();
      },
      get disabled() {
        return r();
      },
      get style() {
        return s(u);
      },
      children: (l, c) => {
        var d = re(), m = Z(d);
        Ae(m, () => e.children ?? ge), T(l, d);
      },
      $$slots: { default: !0 }
    });
  }
  Le();
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
var no = {
  ICON_BUTTON_ON: "mdc-icon-button--on",
  ROOT: "mdc-icon-button"
}, lr = {
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
var dg = (
  /** @class */
  function(t) {
    Ke(e, t);
    function e(n) {
      var r = t.call(this, pe(pe({}, e.defaultAdapter), n)) || this;
      return r.hasToggledAriaLabel = !1, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return no;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return lr;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
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
    }), e.prototype.init = function() {
      var n = this.adapter.getAttr(lr.DATA_ARIA_LABEL_ON), r = this.adapter.getAttr(lr.DATA_ARIA_LABEL_OFF);
      if (n && r) {
        if (this.adapter.getAttr(lr.ARIA_PRESSED) !== null)
          throw new Error("MDCIconButtonToggleFoundation: Button should not set `aria-pressed` if it has a toggled aria label.");
        this.hasToggledAriaLabel = !0;
      } else
        this.adapter.setAttr(lr.ARIA_PRESSED, String(this.isOn()));
    }, e.prototype.handleClick = function() {
      this.toggle(), this.adapter.notifyChange({ isOn: this.isOn() });
    }, e.prototype.isOn = function() {
      return this.adapter.hasClass(no.ICON_BUTTON_ON);
    }, e.prototype.toggle = function(n) {
      if (n === void 0 && (n = !this.isOn()), n ? this.adapter.addClass(no.ICON_BUTTON_ON) : this.adapter.removeClass(no.ICON_BUTTON_ON), this.hasToggledAriaLabel) {
        var r = n ? this.adapter.getAttr(lr.DATA_ARIA_LABEL_ON) : this.adapter.getAttr(lr.DATA_ARIA_LABEL_OFF);
        this.adapter.setAttr(lr.ARIA_LABEL, r || "");
      } else
        this.adapter.setAttr(lr.ARIA_PRESSED, "" + n);
    }, e;
  }(wt)
), fg = /* @__PURE__ */ de('<div class="mdc-icon-button__touch"></div>'), hg = /* @__PURE__ */ de('<div class="mdc-icon-button__ripple"></div> <!><!>', 1);
function vg(t, e) {
  we(e, !0);
  let n = () => {
  };
  function r(R) {
    return R === n;
  }
  let i = v(e, "use", 19, () => []), a = v(e, "class", 3, ""), o = v(e, "style", 3, ""), u = v(e, "ripple", 3, !0), l = v(e, "toggle", 3, !1), c = v(e, "pressed", 15, n), d = v(e, "touch", 3, !1), m = v(e, "displayFlex", 3, !0), f = v(e, "size", 3, "normal"), g = v(e, "component", 3, Wr), h = v(e, "tag", 19, () => e.href == null ? "button" : "a"), p = /* @__PURE__ */ je(e, [
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
  ]), b, y, E = /* @__PURE__ */ me(ye({})), S = ye({}), _ = /* @__PURE__ */ me(ye({})), A = _e("SMUI:icon-button:context"), I = _e("SMUI:icon-button:aria-describedby");
  const L = /* @__PURE__ */ ve(() => {
    if (A === "data-table:pagination")
      switch (e.action) {
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
    else return A === "dialog:header" || A === "dialog:sheet" ? { "data-mdc-dialog-action": e.action } : { action: e.action };
  });
  let C = !!e.disabled;
  Oe(() => {
    if (C != !!e.disabled) {
      if (b) {
        const R = N();
        "blur" in R && R.blur();
      }
      C = !!e.disabled;
    }
  }), ue("SMUI:icon:context", "icon-button");
  let w = null;
  Oe(() => {
    b && N() && l() !== w && (l() && !y ? (y = new dg({
      addClass: $,
      hasClass: B,
      notifyChange: (R) => {
        P(R), Xe(N(), "SMUIIconButtonToggleChange", R);
      },
      removeClass: q,
      getAttr: O,
      setAttr: x
    }), y.init()) : !l() && y && (y.destroy(), y = void 0, X(E, {}, !0), X(_, {}, !0)), w = l());
  }), Oe(() => {
    y && !r(c()) && y.isOn() !== c() && y.toggle(c());
  }), En(() => {
    y && y.destroy();
  });
  function B(R) {
    return R in s(E) ? s(E)[R] : N().classList.contains(R);
  }
  function $(R) {
    s(E)[R] || (s(E)[R] = !0);
  }
  function q(R) {
    (!(R in s(E)) || s(E)[R]) && (s(E)[R] = !1);
  }
  function z(R, W) {
    S[R] != W && (W === "" || W == null ? delete S[R] : S[R] = W);
  }
  function O(R) {
    return R in s(_) ? s(_)[R] ?? null : N().getAttribute(R);
  }
  function x(R, W) {
    s(_)[R] !== W && (s(_)[R] = W);
  }
  function P(R) {
    c(R.isOn);
  }
  function N() {
    return b.getElement();
  }
  var K = { getElement: N }, ne = re(), F = Z(ne);
  {
    let R = /* @__PURE__ */ ve(() => [
      [
        Qt,
        {
          ripple: u(),
          unbounded: !0,
          color: e.color,
          disabled: !!e.disabled,
          addClass: $,
          removeClass: q,
          addStyle: z
        }
      ],
      ...i()
    ]), W = /* @__PURE__ */ ve(() => He({
      "mdc-icon-button": !0,
      "mdc-icon-button--on": !r(c()) && c(),
      "mdc-icon-button--touch": d(),
      "mdc-icon-button--display-flex": m(),
      "smui-icon-button--size-button": f() === "button",
      "smui-icon-button--size-mini": f() === "mini",
      "mdc-icon-button--reduced-size": f() === "mini" || f() === "button",
      "mdc-card__action": A === "card:action",
      "mdc-card__action--icon": A === "card:action",
      "mdc-top-app-bar__navigation-icon": A === "top-app-bar:navigation",
      "mdc-top-app-bar__action-item": A === "top-app-bar:action",
      "mdc-snackbar__dismiss": A === "snackbar:actions",
      "mdc-data-table__pagination-button": A === "data-table:pagination",
      "mdc-data-table__sort-icon-button": A === "data-table:sortable-header-cell",
      "mdc-dialog__close": (A === "dialog:header" || A === "dialog:sheet") && e.action === "close",
      ...s(E),
      [a()]: !0
    })), Ie = /* @__PURE__ */ ve(() => Object.entries(S).map(([M, D]) => `${M}: ${D};`).concat([o()]).join(" ")), V = /* @__PURE__ */ ve(() => r(c()) ? null : c() ? "true" : "false"), H = /* @__PURE__ */ ve(() => c() ? e.ariaLabelOn : e.ariaLabelOff);
    rr(F, g, (M, D) => {
      Ce(
        D(M, $e(
          {
            get tag() {
              return h();
            },
            get use() {
              return s(R);
            },
            get class() {
              return s(W);
            },
            get style() {
              return s(Ie);
            },
            get "aria-pressed"() {
              return s(V);
            },
            get "aria-label"() {
              return s(H);
            },
            get "data-aria-label-on"() {
              return e.ariaLabelOn;
            },
            get "data-aria-label-off"() {
              return e.ariaLabelOff;
            },
            get "aria-describedby"() {
              return I;
            },
            get href() {
              return e.href;
            }
          },
          () => s(L),
          () => s(_),
          () => p,
          {
            onclick: (ee) => {
              var J;
              y && y.handleClick(), A === "top-app-bar:navigation" && Xe(N(), "SMUITopAppBarIconButtonNav"), (J = e.onclick) == null || J.call(e, ee);
            },
            children: (ee, J) => {
              var ie = hg(), Se = be(Z(ie), 2);
              Ae(Se, () => e.children ?? ge);
              var te = be(Se);
              {
                var se = (Re) => {
                  var xe = fg();
                  T(Re, xe);
                };
                oe(te, (Re) => {
                  d() && Re(se);
                });
              }
              T(ee, ie);
            },
            $$slots: { default: !0 }
          }
        )),
        (ee) => b = ee,
        () => b
      );
    });
  }
  return T(t, ne), Le(K);
}
function mg(t, e) {
  let n = v(e, "callback", 3, () => {
  }), r = v(e, "icon", 3, ""), i = v(e, "disabled", 3, !1);
  vg(t, {
    get disabled() {
      return i();
    },
    style: "margin-bottom: 0;",
    $$events: {
      click(...a) {
        var o;
        (o = n()) == null || o.apply(this, a);
      }
    },
    children: (a, o) => {
      Us(a, {
        class: "material-icons",
        children: (u, l) => {
          var c = gt();
          Te(() => ze(c, r())), T(u, c);
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
var gg = {
  LABEL_FLOAT_ABOVE: "mdc-floating-label--float-above",
  LABEL_REQUIRED: "mdc-floating-label--required",
  LABEL_SHAKE: "mdc-floating-label--shake",
  ROOT: "mdc-floating-label"
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
var pg = (
  /** @class */
  function(t) {
    Ke(e, t);
    function e(n) {
      var r = t.call(this, pe(pe({}, e.defaultAdapter), n)) || this;
      return r.shakeAnimationEndHandler = function() {
        r.handleShakeAnimationEnd();
      }, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return gg;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
      /**
       * See {@link MDCFloatingLabelAdapter} for typing information on parameters and return types.
       */
      get: function() {
        return {
          addClass: function() {
          },
          removeClass: function() {
          },
          getWidth: function() {
            return 0;
          },
          registerInteractionHandler: function() {
          },
          deregisterInteractionHandler: function() {
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.init = function() {
      this.adapter.registerInteractionHandler("animationend", this.shakeAnimationEndHandler);
    }, e.prototype.destroy = function() {
      this.adapter.deregisterInteractionHandler("animationend", this.shakeAnimationEndHandler);
    }, e.prototype.getWidth = function() {
      return this.adapter.getWidth();
    }, e.prototype.shake = function(n) {
      var r = e.cssClasses.LABEL_SHAKE;
      n ? this.adapter.addClass(r) : this.adapter.removeClass(r);
    }, e.prototype.float = function(n) {
      var r = e.cssClasses, i = r.LABEL_FLOAT_ABOVE, a = r.LABEL_SHAKE;
      n ? this.adapter.addClass(i) : (this.adapter.removeClass(i), this.adapter.removeClass(a));
    }, e.prototype.setRequired = function(n) {
      var r = e.cssClasses.LABEL_REQUIRED;
      n ? this.adapter.addClass(r) : this.adapter.removeClass(r);
    }, e.prototype.handleShakeAnimationEnd = function() {
      var n = e.cssClasses.LABEL_SHAKE;
      this.adapter.removeClass(n);
    }, e;
  }(wt)
);
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
var Qr = {
  LINE_RIPPLE_ACTIVE: "mdc-line-ripple--active",
  LINE_RIPPLE_DEACTIVATING: "mdc-line-ripple--deactivating"
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
var bg = (
  /** @class */
  function(t) {
    Ke(e, t);
    function e(n) {
      var r = t.call(this, pe(pe({}, e.defaultAdapter), n)) || this;
      return r.transitionEndHandler = function(i) {
        r.handleTransitionEnd(i);
      }, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Qr;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
      /**
       * See {@link MDCLineRippleAdapter} for typing information on parameters and return types.
       */
      get: function() {
        return {
          addClass: function() {
          },
          removeClass: function() {
          },
          hasClass: function() {
            return !1;
          },
          setStyle: function() {
          },
          registerEventHandler: function() {
          },
          deregisterEventHandler: function() {
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.init = function() {
      this.adapter.registerEventHandler("transitionend", this.transitionEndHandler);
    }, e.prototype.destroy = function() {
      this.adapter.deregisterEventHandler("transitionend", this.transitionEndHandler);
    }, e.prototype.activate = function() {
      this.adapter.removeClass(Qr.LINE_RIPPLE_DEACTIVATING), this.adapter.addClass(Qr.LINE_RIPPLE_ACTIVE);
    }, e.prototype.setRippleCenter = function(n) {
      this.adapter.setStyle("transform-origin", n + "px center");
    }, e.prototype.deactivate = function() {
      this.adapter.addClass(Qr.LINE_RIPPLE_DEACTIVATING);
    }, e.prototype.handleTransitionEnd = function(n) {
      var r = this.adapter.hasClass(Qr.LINE_RIPPLE_DEACTIVATING);
      n.propertyName === "opacity" && r && (this.adapter.removeClass(Qr.LINE_RIPPLE_ACTIVE), this.adapter.removeClass(Qr.LINE_RIPPLE_DEACTIVATING));
    }, e;
  }(wt)
);
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
var _g = {
  NOTCH_ELEMENT_SELECTOR: ".mdc-notched-outline__notch"
}, su = {
  // This should stay in sync with $mdc-notched-outline-padding * 2.
  NOTCH_ELEMENT_PADDING: 8
}, yg = {
  NO_LABEL: "mdc-notched-outline--no-label",
  OUTLINE_NOTCHED: "mdc-notched-outline--notched",
  OUTLINE_UPGRADED: "mdc-notched-outline--upgraded"
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
var Ig = (
  /** @class */
  function(t) {
    Ke(e, t);
    function e(n) {
      return t.call(this, pe(pe({}, e.defaultAdapter), n)) || this;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return _g;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return yg;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return su;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
      /**
       * See {@link MDCNotchedOutlineAdapter} for typing information on parameters and return types.
       */
      get: function() {
        return {
          addClass: function() {
          },
          removeClass: function() {
          },
          setNotchWidthProperty: function() {
          },
          removeNotchWidthProperty: function() {
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.notch = function(n) {
      var r = e.cssClasses.OUTLINE_NOTCHED;
      n > 0 && (n += su.NOTCH_ELEMENT_PADDING), this.adapter.setNotchWidthProperty(n), this.adapter.addClass(r);
    }, e.prototype.closeNotch = function() {
      var n = e.cssClasses.OUTLINE_NOTCHED;
      this.adapter.removeClass(n), this.adapter.removeNotchWidthProperty();
    }, e;
  }(wt)
);
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
var os = {
  ARIA_CONTROLS: "aria-controls",
  ARIA_DESCRIBEDBY: "aria-describedby",
  INPUT_SELECTOR: ".mdc-text-field__input",
  LABEL_SELECTOR: ".mdc-floating-label",
  LEADING_ICON_SELECTOR: ".mdc-text-field__icon--leading",
  LINE_RIPPLE_SELECTOR: ".mdc-line-ripple",
  OUTLINE_SELECTOR: ".mdc-notched-outline",
  PREFIX_SELECTOR: ".mdc-text-field__affix--prefix",
  SUFFIX_SELECTOR: ".mdc-text-field__affix--suffix",
  TRAILING_ICON_SELECTOR: ".mdc-text-field__icon--trailing"
}, Sg = {
  DISABLED: "mdc-text-field--disabled",
  FOCUSED: "mdc-text-field--focused",
  HELPER_LINE: "mdc-text-field-helper-line",
  INVALID: "mdc-text-field--invalid",
  LABEL_FLOATING: "mdc-text-field--label-floating",
  NO_LABEL: "mdc-text-field--no-label",
  OUTLINED: "mdc-text-field--outlined",
  ROOT: "mdc-text-field",
  TEXTAREA: "mdc-text-field--textarea",
  WITH_LEADING_ICON: "mdc-text-field--with-leading-icon",
  WITH_TRAILING_ICON: "mdc-text-field--with-trailing-icon",
  WITH_INTERNAL_COUNTER: "mdc-text-field--with-internal-counter"
}, lu = {
  LABEL_SCALE: 0.75
}, Eg = [
  "pattern",
  "min",
  "max",
  "required",
  "step",
  "minlength",
  "maxlength"
], Ag = [
  "color",
  "date",
  "datetime-local",
  "month",
  "range",
  "time",
  "week"
];
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
var uu = ["mousedown", "touchstart"], cu = ["click", "keydown"], Cg = (
  /** @class */
  function(t) {
    Ke(e, t);
    function e(n, r) {
      r === void 0 && (r = {});
      var i = t.call(this, pe(pe({}, e.defaultAdapter), n)) || this;
      return i.isFocused = !1, i.receivedUserInput = !1, i.valid = !0, i.useNativeValidation = !0, i.validateOnValueChange = !0, i.helperText = r.helperText, i.characterCounter = r.characterCounter, i.leadingIcon = r.leadingIcon, i.trailingIcon = r.trailingIcon, i.inputFocusHandler = function() {
        i.activateFocus();
      }, i.inputBlurHandler = function() {
        i.deactivateFocus();
      }, i.inputInputHandler = function() {
        i.handleInput();
      }, i.setPointerXOffset = function(a) {
        i.setTransformOrigin(a);
      }, i.textFieldInteractionHandler = function() {
        i.handleTextFieldInteraction();
      }, i.validationAttributeChangeHandler = function(a) {
        i.handleValidationAttributeChange(a);
      }, i;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Sg;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return os;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return lu;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "shouldAlwaysFloat", {
      get: function() {
        var n = this.getNativeInput().type;
        return Ag.indexOf(n) >= 0;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "shouldFloat", {
      get: function() {
        return this.shouldAlwaysFloat || this.isFocused || !!this.getValue() || this.isBadInput();
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "shouldShake", {
      get: function() {
        return !this.isFocused && !this.isValid() && !!this.getValue();
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
      /**
       * See {@link MDCTextFieldAdapter} for typing information on parameters and
       * return types.
       */
      get: function() {
        return {
          addClass: function() {
          },
          removeClass: function() {
          },
          hasClass: function() {
            return !0;
          },
          setInputAttr: function() {
          },
          removeInputAttr: function() {
          },
          registerTextFieldInteractionHandler: function() {
          },
          deregisterTextFieldInteractionHandler: function() {
          },
          registerInputInteractionHandler: function() {
          },
          deregisterInputInteractionHandler: function() {
          },
          registerValidationAttributeChangeHandler: function() {
            return new MutationObserver(function() {
            });
          },
          deregisterValidationAttributeChangeHandler: function() {
          },
          getNativeInput: function() {
            return null;
          },
          isFocused: function() {
            return !1;
          },
          activateLineRipple: function() {
          },
          deactivateLineRipple: function() {
          },
          setLineRippleTransformOrigin: function() {
          },
          shakeLabel: function() {
          },
          floatLabel: function() {
          },
          setLabelRequired: function() {
          },
          hasLabel: function() {
            return !1;
          },
          getLabelWidth: function() {
            return 0;
          },
          hasOutline: function() {
            return !1;
          },
          notchOutline: function() {
          },
          closeOutline: function() {
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.init = function() {
      var n, r, i, a;
      this.adapter.hasLabel() && this.getNativeInput().required && this.adapter.setLabelRequired(!0), this.adapter.isFocused() ? this.inputFocusHandler() : this.adapter.hasLabel() && this.shouldFloat && (this.notchOutline(!0), this.adapter.floatLabel(!0), this.styleFloating(!0)), this.adapter.registerInputInteractionHandler("focus", this.inputFocusHandler), this.adapter.registerInputInteractionHandler("blur", this.inputBlurHandler), this.adapter.registerInputInteractionHandler("input", this.inputInputHandler);
      try {
        for (var o = Bt(uu), u = o.next(); !u.done; u = o.next()) {
          var l = u.value;
          this.adapter.registerInputInteractionHandler(l, this.setPointerXOffset);
        }
      } catch (m) {
        n = { error: m };
      } finally {
        try {
          u && !u.done && (r = o.return) && r.call(o);
        } finally {
          if (n) throw n.error;
        }
      }
      try {
        for (var c = Bt(cu), d = c.next(); !d.done; d = c.next()) {
          var l = d.value;
          this.adapter.registerTextFieldInteractionHandler(l, this.textFieldInteractionHandler);
        }
      } catch (m) {
        i = { error: m };
      } finally {
        try {
          d && !d.done && (a = c.return) && a.call(c);
        } finally {
          if (i) throw i.error;
        }
      }
      this.validationObserver = this.adapter.registerValidationAttributeChangeHandler(this.validationAttributeChangeHandler), this.setcharacterCounter(this.getValue().length);
    }, e.prototype.destroy = function() {
      var n, r, i, a;
      this.adapter.deregisterInputInteractionHandler("focus", this.inputFocusHandler), this.adapter.deregisterInputInteractionHandler("blur", this.inputBlurHandler), this.adapter.deregisterInputInteractionHandler("input", this.inputInputHandler);
      try {
        for (var o = Bt(uu), u = o.next(); !u.done; u = o.next()) {
          var l = u.value;
          this.adapter.deregisterInputInteractionHandler(l, this.setPointerXOffset);
        }
      } catch (m) {
        n = { error: m };
      } finally {
        try {
          u && !u.done && (r = o.return) && r.call(o);
        } finally {
          if (n) throw n.error;
        }
      }
      try {
        for (var c = Bt(cu), d = c.next(); !d.done; d = c.next()) {
          var l = d.value;
          this.adapter.deregisterTextFieldInteractionHandler(l, this.textFieldInteractionHandler);
        }
      } catch (m) {
        i = { error: m };
      } finally {
        try {
          d && !d.done && (a = c.return) && a.call(c);
        } finally {
          if (i) throw i.error;
        }
      }
      this.adapter.deregisterValidationAttributeChangeHandler(this.validationObserver);
    }, e.prototype.handleTextFieldInteraction = function() {
      var n = this.adapter.getNativeInput();
      n && n.disabled || (this.receivedUserInput = !0);
    }, e.prototype.handleValidationAttributeChange = function(n) {
      var r = this;
      n.some(function(i) {
        return Eg.indexOf(i) > -1 ? (r.styleValidity(!0), r.adapter.setLabelRequired(r.getNativeInput().required), !0) : !1;
      }), n.indexOf("maxlength") > -1 && this.setcharacterCounter(this.getValue().length);
    }, e.prototype.notchOutline = function(n) {
      if (!(!this.adapter.hasOutline() || !this.adapter.hasLabel()))
        if (n) {
          var r = this.adapter.getLabelWidth() * lu.LABEL_SCALE;
          this.adapter.notchOutline(r);
        } else
          this.adapter.closeOutline();
    }, e.prototype.activateFocus = function() {
      this.isFocused = !0, this.styleFocused(this.isFocused), this.adapter.activateLineRipple(), this.adapter.hasLabel() && (this.notchOutline(this.shouldFloat), this.adapter.floatLabel(this.shouldFloat), this.styleFloating(this.shouldFloat), this.adapter.shakeLabel(this.shouldShake)), this.helperText && (this.helperText.isPersistent() || !this.helperText.isValidation() || !this.valid) && this.helperText.showToScreenReader();
    }, e.prototype.setTransformOrigin = function(n) {
      if (!(this.isDisabled() || this.adapter.hasOutline())) {
        var r = n.touches, i = r ? r[0] : n, a = i.target.getBoundingClientRect(), o = i.clientX - a.left;
        this.adapter.setLineRippleTransformOrigin(o);
      }
    }, e.prototype.handleInput = function() {
      this.autoCompleteFocus(), this.setcharacterCounter(this.getValue().length);
    }, e.prototype.autoCompleteFocus = function() {
      this.receivedUserInput || this.activateFocus();
    }, e.prototype.deactivateFocus = function() {
      this.isFocused = !1, this.adapter.deactivateLineRipple();
      var n = this.isValid();
      this.styleValidity(n), this.styleFocused(this.isFocused), this.adapter.hasLabel() && (this.notchOutline(this.shouldFloat), this.adapter.floatLabel(this.shouldFloat), this.styleFloating(this.shouldFloat), this.adapter.shakeLabel(this.shouldShake)), this.shouldFloat || (this.receivedUserInput = !1);
    }, e.prototype.getValue = function() {
      return this.getNativeInput().value;
    }, e.prototype.setValue = function(n) {
      if (this.getValue() !== n && (this.getNativeInput().value = n), this.setcharacterCounter(n.length), this.validateOnValueChange) {
        var r = this.isValid();
        this.styleValidity(r);
      }
      this.adapter.hasLabel() && (this.notchOutline(this.shouldFloat), this.adapter.floatLabel(this.shouldFloat), this.styleFloating(this.shouldFloat), this.validateOnValueChange && this.adapter.shakeLabel(this.shouldShake));
    }, e.prototype.isValid = function() {
      return this.useNativeValidation ? this.isNativeInputValid() : this.valid;
    }, e.prototype.setValid = function(n) {
      this.valid = n, this.styleValidity(n);
      var r = !n && !this.isFocused && !!this.getValue();
      this.adapter.hasLabel() && this.adapter.shakeLabel(r);
    }, e.prototype.setValidateOnValueChange = function(n) {
      this.validateOnValueChange = n;
    }, e.prototype.getValidateOnValueChange = function() {
      return this.validateOnValueChange;
    }, e.prototype.setUseNativeValidation = function(n) {
      this.useNativeValidation = n;
    }, e.prototype.isDisabled = function() {
      return this.getNativeInput().disabled;
    }, e.prototype.setDisabled = function(n) {
      this.getNativeInput().disabled = n, this.styleDisabled(n);
    }, e.prototype.setHelperTextContent = function(n) {
      this.helperText && this.helperText.setContent(n);
    }, e.prototype.setLeadingIconAriaLabel = function(n) {
      this.leadingIcon && this.leadingIcon.setAriaLabel(n);
    }, e.prototype.setLeadingIconContent = function(n) {
      this.leadingIcon && this.leadingIcon.setContent(n);
    }, e.prototype.setTrailingIconAriaLabel = function(n) {
      this.trailingIcon && this.trailingIcon.setAriaLabel(n);
    }, e.prototype.setTrailingIconContent = function(n) {
      this.trailingIcon && this.trailingIcon.setContent(n);
    }, e.prototype.setcharacterCounter = function(n) {
      if (this.characterCounter) {
        var r = this.getNativeInput().maxLength;
        if (r === -1)
          throw new Error("MDCTextFieldFoundation: Expected maxlength html property on text input or textarea.");
        this.characterCounter.setCounterValue(n, r);
      }
    }, e.prototype.isBadInput = function() {
      return this.getNativeInput().validity.badInput || !1;
    }, e.prototype.isNativeInputValid = function() {
      return this.getNativeInput().validity.valid;
    }, e.prototype.styleValidity = function(n) {
      var r = e.cssClasses.INVALID;
      if (n ? this.adapter.removeClass(r) : this.adapter.addClass(r), this.helperText) {
        this.helperText.setValidity(n);
        var i = this.helperText.isValidation();
        if (!i)
          return;
        var a = this.helperText.isVisible(), o = this.helperText.getId();
        a && o ? this.adapter.setInputAttr(os.ARIA_DESCRIBEDBY, o) : this.adapter.removeInputAttr(os.ARIA_DESCRIBEDBY);
      }
    }, e.prototype.styleFocused = function(n) {
      var r = e.cssClasses.FOCUSED;
      n ? this.adapter.addClass(r) : this.adapter.removeClass(r);
    }, e.prototype.styleDisabled = function(n) {
      var r = e.cssClasses, i = r.DISABLED, a = r.INVALID;
      n ? (this.adapter.addClass(i), this.adapter.removeClass(a)) : this.adapter.removeClass(i), this.leadingIcon && this.leadingIcon.setDisabled(n), this.trailingIcon && this.trailingIcon.setDisabled(n);
    }, e.prototype.styleFloating = function(n) {
      var r = e.cssClasses.LABEL_FLOATING;
      n ? this.adapter.addClass(r) : this.adapter.removeClass(r);
    }, e.prototype.getNativeInput = function() {
      var n = this.adapter ? this.adapter.getNativeInput() : null;
      return n || {
        disabled: !1,
        maxLength: -1,
        required: !1,
        type: "input",
        validity: {
          badInput: !1,
          valid: !0
        },
        value: ""
      };
    }, e;
  }(wt)
);
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
var du = {
  ICON_EVENT: "MDCTextField:icon",
  ICON_ROLE: "button"
}, Tg = {
  ROOT: "mdc-text-field__icon"
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
var fu = ["click", "keydown"], xg = (
  /** @class */
  function(t) {
    Ke(e, t);
    function e(n) {
      var r = t.call(this, pe(pe({}, e.defaultAdapter), n)) || this;
      return r.savedTabIndex = null, r.interactionHandler = function(i) {
        r.handleInteraction(i);
      }, r;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return du;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Tg;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
      /**
       * See {@link MDCTextFieldIconAdapter} for typing information on parameters and return types.
       */
      get: function() {
        return {
          getAttr: function() {
            return null;
          },
          setAttr: function() {
          },
          removeAttr: function() {
          },
          setContent: function() {
          },
          registerInteractionHandler: function() {
          },
          deregisterInteractionHandler: function() {
          },
          notifyIconAction: function() {
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.init = function() {
      var n, r;
      this.savedTabIndex = this.adapter.getAttr("tabindex");
      try {
        for (var i = Bt(fu), a = i.next(); !a.done; a = i.next()) {
          var o = a.value;
          this.adapter.registerInteractionHandler(o, this.interactionHandler);
        }
      } catch (u) {
        n = { error: u };
      } finally {
        try {
          a && !a.done && (r = i.return) && r.call(i);
        } finally {
          if (n) throw n.error;
        }
      }
    }, e.prototype.destroy = function() {
      var n, r;
      try {
        for (var i = Bt(fu), a = i.next(); !a.done; a = i.next()) {
          var o = a.value;
          this.adapter.deregisterInteractionHandler(o, this.interactionHandler);
        }
      } catch (u) {
        n = { error: u };
      } finally {
        try {
          a && !a.done && (r = i.return) && r.call(i);
        } finally {
          if (n) throw n.error;
        }
      }
    }, e.prototype.setDisabled = function(n) {
      this.savedTabIndex && (n ? (this.adapter.setAttr("tabindex", "-1"), this.adapter.removeAttr("role")) : (this.adapter.setAttr("tabindex", this.savedTabIndex), this.adapter.setAttr("role", du.ICON_ROLE)));
    }, e.prototype.setAriaLabel = function(n) {
      this.adapter.setAttr("aria-label", n);
    }, e.prototype.setContent = function(n) {
      this.adapter.setContent(n);
    }, e.prototype.handleInteraction = function(n) {
      var r = n.key === "Enter" || n.keyCode === 13;
      (n.type === "click" || r) && (n.preventDefault(), this.adapter.notifyIconAction());
    }, e;
  }(wt)
), wg = /* @__PURE__ */ de("<span><!></span>"), Lg = /* @__PURE__ */ de("<label><!></label>");
function Co(t, e) {
  we(e, !0);
  let n = v(e, "use", 19, () => []), r = v(e, "class", 3, ""), i = v(e, "style", 3, ""), a = v(e, "floatAbove", 15, !1), o = v(e, "required", 15, !1), u = v(e, "wrapped", 3, !1), l = /* @__PURE__ */ je(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "style",
    "for",
    "floatAbove",
    "required",
    "wrapped",
    "children"
  ]), c, d = /* @__PURE__ */ me(void 0), m = new _i(), f = ye({}), g = ye({}), h = _e("SMUI:generic:input:props") ?? {}, p = a();
  Oe(() => {
    s(d) && p !== a() && (p = a(), s(d).float(a()));
  });
  let b = o();
  Oe(() => {
    s(d) && b !== o() && (b = o(), s(d).setRequired(o()));
  });
  const y = _e("SMUI:floating-label:mount"), E = _e("SMUI:floating-label:unmount");
  at(() => {
    X(
      d,
      new pg({
        addClass: S,
        removeClass: _,
        getWidth: () => {
          var R, W;
          const K = $(), ne = K.cloneNode(!0);
          (R = K.parentNode) == null || R.appendChild(ne), ne.classList.add("smui-floating-label--remove-transition"), ne.classList.add("smui-floating-label--force-size"), ne.classList.remove("mdc-floating-label--float-above");
          const F = ne.scrollWidth;
          return (W = K.parentNode) == null || W.removeChild(ne), F;
        },
        registerInteractionHandler: (K, ne) => m.on($(), K, ne),
        deregisterInteractionHandler: (K, ne) => m.off($(), K, ne)
      }),
      !0
    );
    const N = {
      get element() {
        return $();
      },
      addStyle: A,
      removeStyle: I
    };
    return y && y(N), s(d).init(), () => {
      var K;
      E && E(N), (K = s(d)) == null || K.destroy(), m.clear();
    };
  });
  function S(N) {
    f[N] || (f[N] = !0);
  }
  function _(N) {
    (!(N in f) || f[N]) && (f[N] = !1);
  }
  function A(N, K) {
    g[N] != K && (K === "" || K == null ? delete g[N] : g[N] = K);
  }
  function I(N) {
    N in g && delete g[N];
  }
  function L(N) {
    var K;
    (K = s(d)) == null || K.shake(N);
  }
  function C(N) {
    a(N);
  }
  function w(N) {
    o(N);
  }
  function B() {
    if (s(d) == null)
      throw new Error("Instance is undefined.");
    return s(d).getWidth();
  }
  function $() {
    return c;
  }
  var q = { shake: L, float: C, setRequired: w, getWidth: B, getElement: $ }, z = re(), O = Z(z);
  {
    var x = (N) => {
      var K = wg();
      ke(K, (F, R) => ({ class: F, style: R, ...l }), [
        () => He({
          "mdc-floating-label": !0,
          "mdc-floating-label--float-above": a(),
          "mdc-floating-label--required": o(),
          ...f,
          [r()]: !0
        }),
        () => Object.entries(g).map(([F, R]) => `${F}: ${R};`).concat([i()]).join(" ")
      ]);
      var ne = ce(K);
      Ae(ne, () => e.children ?? ge), Ce(K, (F) => c = F, () => c), Ne(K, (F, R) => Y == null ? void 0 : Y(F, R), n), T(N, K);
    }, P = (N) => {
      var K = Lg();
      ke(
        K,
        (F, R) => ({
          class: F,
          style: R,
          for: e.for || (h ? h.id : void 0),
          ...l
        }),
        [
          () => He({
            "mdc-floating-label": !0,
            "mdc-floating-label--float-above": a(),
            "mdc-floating-label--required": o(),
            ...f,
            [r()]: !0
          }),
          () => Object.entries(g).map(([F, R]) => `${F}: ${R};`).concat([i()]).join(" ")
        ]
      );
      var ne = ce(K);
      Ae(ne, () => e.children ?? ge), Ce(K, (F) => c = F, () => c), Ne(K, (F, R) => Y == null ? void 0 : Y(F, R), n), T(N, K);
    };
    oe(O, (N) => {
      u() ? N(x) : N(P, !1);
    });
  }
  return T(t, z), Le(q);
}
var Og = /* @__PURE__ */ de("<div></div>");
function ud(t, e) {
  we(e, !0);
  let n = v(e, "use", 19, () => []), r = v(e, "class", 3, ""), i = v(e, "style", 3, ""), a = v(e, "active", 3, !1), o = /* @__PURE__ */ je(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "style",
    "active"
  ]), u, l = /* @__PURE__ */ me(void 0), c = new _i(), d = ye({}), m = ye({});
  at(() => (X(
    l,
    new bg({
      addClass: g,
      removeClass: h,
      hasClass: f,
      setStyle: p,
      registerEventHandler: (I, L) => c.on(S(), I, L),
      deregisterEventHandler: (I, L) => c.off(S(), I, L)
    }),
    !0
  ), s(l).init(), () => {
    var I;
    (I = s(l)) == null || I.destroy(), c.clear();
  }));
  function f(I) {
    return I in d ? d[I] : S().classList.contains(I);
  }
  function g(I) {
    d[I] || (d[I] = !0);
  }
  function h(I) {
    (!(I in d) || d[I]) && (d[I] = !1);
  }
  function p(I, L) {
    m[I] != L && (L === "" || L == null ? delete m[I] : m[I] = L);
  }
  function b() {
    var I;
    (I = s(l)) == null || I.activate();
  }
  function y() {
    var I;
    (I = s(l)) == null || I.deactivate();
  }
  function E(I) {
    var L;
    (L = s(l)) == null || L.setRippleCenter(I);
  }
  function S() {
    return u;
  }
  var _ = { activate: b, deactivate: y, setRippleCenter: E, getElement: S }, A = Og();
  return ke(A, (I, L) => ({ class: I, style: L, ...o }), [
    () => He({
      "mdc-line-ripple": !0,
      "mdc-line-ripple--active": a(),
      ...d,
      [r()]: !0
    }),
    () => Object.entries(m).map(([I, L]) => `${I}: ${L};`).concat([i()]).join(" ")
  ]), Ce(A, (I) => u = I, () => u), Ne(A, (I, L) => Y == null ? void 0 : Y(I, L), n), T(t, A), Le(_);
}
var Rg = /* @__PURE__ */ de('<div class="mdc-notched-outline__notch"><!></div>'), Dg = /* @__PURE__ */ de('<div><div class="mdc-notched-outline__leading"></div> <!> <div class="mdc-notched-outline__trailing"></div></div>');
function cd(t, e) {
  we(e, !0);
  let n = v(e, "use", 19, () => []), r = v(e, "class", 3, ""), i = v(e, "notched", 3, !1), a = v(e, "noLabel", 3, !1), o = /* @__PURE__ */ je(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "notched",
    "noLabel",
    "children"
  ]), u, l = /* @__PURE__ */ me(void 0), c = /* @__PURE__ */ me(void 0), d = ye({}), m = ye({}), f;
  Oe(() => {
    s(c) !== f && (s(c) ? (s(c).addStyle("transition-duration", "0s"), g("mdc-notched-outline--upgraded"), requestAnimationFrame(() => {
      s(c) && s(c).removeStyle("transition-duration");
    })) : h("mdc-notched-outline--upgraded"), f = s(c));
  }), ue("SMUI:floating-label:mount", (C) => {
    X(c, C, !0);
  }), ue("SMUI:floating-label:unmount", () => {
    X(c, void 0);
  }), at(() => (X(
    l,
    new Ig({
      addClass: g,
      removeClass: h,
      setNotchWidthProperty: (C) => p("width", C + "px"),
      removeNotchWidthProperty: () => b("width")
    }),
    !0
  ), s(l).init(), () => {
    var C;
    (C = s(l)) == null || C.destroy();
  }));
  function g(C) {
    d[C] || (d[C] = !0);
  }
  function h(C) {
    (!(C in d) || d[C]) && (d[C] = !1);
  }
  function p(C, w) {
    m[C] != w && (w === "" || w == null ? delete m[C] : m[C] = w);
  }
  function b(C) {
    C in m && delete m[C];
  }
  function y(C) {
    var w;
    (w = s(l)) == null || w.notch(C);
  }
  function E() {
    var C;
    (C = s(l)) == null || C.closeNotch();
  }
  function S() {
    return u;
  }
  var _ = { notch: y, closeNotch: E, getElement: S }, A = Dg();
  ke(A, (C) => ({ class: C, ...o }), [
    () => He({
      "mdc-notched-outline": !0,
      "mdc-notched-outline--notched": i(),
      "mdc-notched-outline--no-label": a(),
      ...d,
      [r()]: !0
    })
  ]);
  var I = be(ce(A), 2);
  {
    var L = (C) => {
      var w = Rg(), B = ce(w);
      Ae(B, () => e.children ?? ge), Te(($) => ct(w, $), [
        () => Object.entries(m).map(([$, q]) => `${$}: ${q};`).join(" ")
      ]), T(C, w);
    };
    oe(I, (C) => {
      a() || C(L);
    });
  }
  return Ce(A, (C) => u = C, () => u), Ne(A, (C, w) => Y == null ? void 0 : Y(C, w), n), T(t, A), Le(_);
}
function ca(t, e) {
  we(e, !0);
  let n = v(e, "use", 19, () => []), r = v(e, "class", 3, ""), i = v(e, "component", 3, Wr), a = v(e, "tag", 3, "div"), o = v(e, "_smuiClass", 3, ""), u = v(e, "_smuiClassMap", 23, () => ({})), l = v(e, "_smuiContexts", 19, () => ({})), c = v(e, "_smuiProps", 19, () => ({})), d = /* @__PURE__ */ je(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "component",
    "tag",
    "_smuiClass",
    "_smuiClassMap",
    "_smuiContexts",
    "_smuiProps",
    "children"
  ]), m;
  const f = [];
  Object.entries(u()).forEach(([y, E]) => {
    const S = _e(E);
    S && "subscribe" in S && f.push(S.subscribe((_) => {
      u()[y] = _;
    }));
  });
  for (let y in l())
    l().hasOwnProperty(y) && ue(y, l()[y]);
  En(() => {
    for (const y of f)
      y();
  });
  function g() {
    return m.getElement();
  }
  var h = { getElement: g }, p = re(), b = Z(p);
  {
    let y = /* @__PURE__ */ ve(() => He({
      [o()]: !0,
      ...u(),
      [r()]: !0
    }));
    rr(b, i, (E, S) => {
      Ce(
        S(E, $e(
          {
            get tag() {
              return a();
            },
            get use() {
              return n();
            },
            get class() {
              return s(y);
            }
          },
          c,
          () => d,
          {
            children: (_, A) => {
              var I = re(), L = Z(I);
              Ae(L, () => e.children ?? ge), T(_, I);
            },
            $$slots: { default: !0 }
          }
        )),
        (_) => m = _,
        () => m
      );
    });
  }
  return T(t, p), Le(h);
}
function Mg(t, e) {
  we(e, !0);
  let n = /* @__PURE__ */ je(e, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return Ce(
    ca(t, $e({ _smuiClass: "mdc-text-field-helper-line", tag: "div" }, () => n, {
      children: (o, u) => {
        var l = re(), c = Z(l);
        Ae(c, () => e.children ?? ge), T(o, l);
      },
      $$slots: { default: !0 }
    })),
    (o) => r = o,
    () => r
  ), Le(a);
}
function Pg(t, e) {
  we(e, !0);
  let n = /* @__PURE__ */ je(e, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return Ce(
    ca(t, $e(
      {
        _smuiClass: "mdc-text-field__affix mdc-text-field__affix--prefix",
        tag: "span"
      },
      () => n,
      {
        children: (o, u) => {
          var l = re(), c = Z(l);
          Ae(c, () => e.children ?? ge), T(o, l);
        },
        $$slots: { default: !0 }
      }
    )),
    (o) => r = o,
    () => r
  ), Le(a);
}
function Hg(t, e) {
  we(e, !0);
  let n = /* @__PURE__ */ je(e, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return Ce(
    ca(t, $e(
      {
        _smuiClass: "mdc-text-field__affix mdc-text-field__affix--suffix",
        tag: "span"
      },
      () => n,
      {
        children: (o, u) => {
          var l = re(), c = Z(l);
          Ae(c, () => e.children ?? ge), T(o, l);
        },
        $$slots: { default: !0 }
      }
    )),
    (o) => r = o,
    () => r
  ), Le(a);
}
var Ng = /* @__PURE__ */ de("<input/>");
function Ug(t, e) {
  we(e, !0);
  let n = v(e, "use", 19, () => []), r = v(e, "class", 3, ""), i = v(e, "type", 3, "text"), a = v(e, "placeholder", 3, " "), o = v(e, "value", 15), u = v(e, "files", 15, null), l = v(e, "dirty", 15, !1), c = v(e, "invalid", 15, !1), d = v(e, "updateInvalid", 3, !0), m = v(e, "initialInvalid", 3, !1), f = v(e, "emptyValueNull", 19, () => o() === null), g = v(e, "emptyValueUndefined", 19, () => o() === void 0), h = /* @__PURE__ */ je(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "type",
    "placeholder",
    "value",
    "files",
    "dirty",
    "invalid",
    "updateInvalid",
    "initialInvalid",
    "emptyValueNull",
    "emptyValueUndefined"
  ]), p, b = ye({}), y = ye({});
  Oe(() => {
    i() === "file" ? delete y.value : y.value = o() == null ? "" : o();
  }), at(() => {
    d() && m() && c(B().matches(":invalid"));
  });
  function E(x) {
    return x === "" ? Number.NaN : +x;
  }
  function S(x) {
    if (i() === "file") {
      u(x.currentTarget.files);
      return;
    }
    if (x.currentTarget.value === "" && f()) {
      o(null);
      return;
    }
    if (x.currentTarget.value === "" && g()) {
      o(void 0);
      return;
    }
    switch (i()) {
      case "number":
      case "range":
        o(E(x.currentTarget.value));
        break;
      default:
        o(x.currentTarget.value);
        break;
    }
  }
  function _(x) {
    (i() === "file" || i() === "range") && S(x), l(!0), d() && c(B().matches(":invalid"));
  }
  function A(x) {
    return x in b ? b[x] ?? null : B().getAttribute(x);
  }
  function I(x, P) {
    b[x] !== P && (b[x] = P);
  }
  function L(x) {
    (!(x in b) || b[x] != null) && (b[x] = void 0);
  }
  function C() {
    B().focus();
  }
  function w() {
    B().blur();
  }
  function B() {
    return p;
  }
  var $ = { getAttr: A, addAttr: I, removeAttr: L, focus: C, blur: w, getElement: B }, q = Ng(), z = (x) => {
    var P;
    i() !== "file" && S(x), (P = e.oninput) == null || P.call(e, x);
  }, O = (x) => {
    var P;
    _(x), (P = e.onchange) == null || P.call(e, x);
  };
  return ke(
    q,
    (x) => ({
      class: x,
      type: i(),
      placeholder: a(),
      ...y,
      ...b,
      ...h,
      oninput: z,
      onchange: O
    }),
    [
      () => He({ "mdc-text-field__input": !0, [r()]: !0 })
    ],
    void 0,
    void 0,
    !0
  ), Ce(q, (x) => p = x, () => p), Ne(q, (x, P) => Y == null ? void 0 : Y(x, P), n), T(t, q), Le($);
}
var Fg = /* @__PURE__ */ de("<textarea></textarea>");
function kg(t, e) {
  we(e, !0);
  let n = v(e, "use", 19, () => []), r = v(e, "class", 3, ""), i = v(e, "style", 3, ""), a = v(e, "value", 15, ""), o = v(e, "dirty", 15, !1), u = v(e, "invalid", 15, !1), l = v(e, "updateInvalid", 3, !0), c = v(e, "initialInvalid", 3, !1), d = v(e, "resizable", 3, !0), m = /* @__PURE__ */ je(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "style",
    "value",
    "dirty",
    "invalid",
    "updateInvalid",
    "initialInvalid",
    "resizable"
  ]), f, g = ye({});
  at(() => {
    l() && c() && u(_().matches(":invalid"));
  });
  function h() {
    o(!0), l() && u(_().matches(":invalid"));
  }
  function p(C) {
    return C in g ? g[C] ?? null : _().getAttribute(C);
  }
  function b(C, w) {
    g[C] !== w && (g[C] = w);
  }
  function y(C) {
    (!(C in g) || g[C] != null) && (g[C] = void 0);
  }
  function E() {
    _().focus();
  }
  function S() {
    _().blur();
  }
  function _() {
    return f;
  }
  var A = { getAttr: p, addAttr: b, removeAttr: y, focus: E, blur: S, getElement: _ }, I = Fg(), L = (C) => {
    var w;
    h(), (w = e.onchange) == null || w.call(e, C);
  };
  return ke(
    I,
    (C) => ({
      class: C,
      style: `${d() ? "" : "resize: none; "}${i()}`,
      ...g,
      ...m,
      onchange: L
    }),
    [
      () => He({ "mdc-text-field__input": !0, [r()]: !0 })
    ]
  ), Ce(I, (C) => f = C, () => f), Ne(I, (C, w) => Y == null ? void 0 : Y(C, w), n), gi(() => Ma(I, a)), T(t, I), Le(A);
}
var Bg = /* @__PURE__ */ de('<span class="mdc-text-field__ripple"></span>'), Vg = /* @__PURE__ */ de("<!> <!>", 1), Gg = /* @__PURE__ */ de("<span><!> <!></span>"), jg = /* @__PURE__ */ de("<!> <!> <!>", 1), qg = /* @__PURE__ */ de("<label><!> <!> <!> <!> <!> <!> <!></label>"), Wg = /* @__PURE__ */ de("<div><!> <!> <!> <!> <!></div>"), zg = /* @__PURE__ */ de("<!> <!>", 1);
function Fs(t, e) {
  we(e, !0);
  const { applyPassive: n } = ad;
  let r = () => {
  };
  function i(j) {
    return j === r;
  }
  let a = v(e, "use", 19, () => []), o = v(e, "class", 3, ""), u = v(e, "style", 3, ""), l = v(e, "ripple", 3, !0), c = v(e, "disabled", 3, !1), d = v(e, "required", 3, !1), m = v(e, "textarea", 3, !1), f = v(e, "variant", 19, () => m() ? "outlined" : "standard"), g = v(e, "noLabel", 3, !1), h = v(e, "type", 3, "text"), p = v(e, "value", 15), b = v(e, "files", 15, r), y = v(e, "invalid", 15, r), E = v(e, "updateInvalid", 19, () => i(y())), S = v(e, "initialInvalid", 3, !1), _ = v(e, "dirty", 15, !1), A = v(e, "validateOnValueChange", 19, E), I = v(e, "useNativeValidation", 19, E), L = v(e, "withLeadingIcon", 3, r), C = v(e, "withTrailingIcon", 3, r), w = v(e, "input", 7), B = v(e, "floatingLabel", 7), $ = v(e, "lineRipple", 7), q = v(e, "notchedOutline", 7), z = /* @__PURE__ */ je(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "style",
    "ripple",
    "disabled",
    "required",
    "textarea",
    "variant",
    "noLabel",
    "label",
    "type",
    "value",
    "files",
    "invalid",
    "updateInvalid",
    "initialInvalid",
    "dirty",
    "prefix",
    "suffix",
    "validateOnValueChange",
    "useNativeValidation",
    "withLeadingIcon",
    "withTrailingIcon",
    "input",
    "floatingLabel",
    "lineRipple",
    "notchedOutline",
    "children",
    "leadingIcon",
    "trailingIcon",
    "internalCounter",
    "line",
    "helper"
  ]);
  const O = p() !== void 0 || p() === void 0 && e.input$emptyValueUndefined || !i(b());
  i(b()) && b(null), i(y()) && y(!1);
  let x, P = /* @__PURE__ */ me(void 0), N = new _i(), K = ye({}), ne = ye({}), F = /* @__PURE__ */ me(void 0), R = /* @__PURE__ */ me(!1), W = /* @__PURE__ */ me(ye(S())), Ie = _e("SMUI:addLayoutListener"), V, H, M = new Promise((j) => H = j), D, ee, J, ie;
  const Se = /* @__PURE__ */ ve(() => w() && w().getElement());
  Oe(() => {
    (_() || s(W) || !E()) && s(P) && s(P).isValid() !== !y() && (E() ? y(!s(P).isValid()) : s(P).setValid(!y()));
  }), Oe(() => {
    s(P) && s(P).getValidateOnValueChange() !== A() && s(P).setValidateOnValueChange(i(A()) ? !1 : A());
  }), Oe(() => {
    s(P) && s(P).setUseNativeValidation(i(I()) ? !0 : I());
  }), Oe(() => {
    s(P) && s(P).setDisabled(c());
  });
  let te = p();
  Oe(() => {
    if (s(P) && O && te !== p()) {
      te = p();
      const j = `${p() == null ? "" : p()}`;
      s(P).getValue() !== j && s(P).setValue(j);
    }
  }), Ie && (V = Ie(G)), ue("SMUI:textfield:leading-icon:mount", (j) => {
    D = j;
  }), ue("SMUI:textfield:leading-icon:unmount", () => {
    D = void 0;
  }), ue("SMUI:textfield:trailing-icon:mount", (j) => {
    ee = j;
  }), ue("SMUI:textfield:trailing-icon:unmount", () => {
    ee = void 0;
  }), ue("SMUI:textfield:helper-text:id", (j) => {
    X(F, j, !0);
  }), ue("SMUI:textfield:helper-text:mount", (j) => {
    J = j;
  }), ue("SMUI:textfield:helper-text:unmount", () => {
    X(F, void 0), J = void 0;
  }), ue("SMUI:textfield:character-counter:mount", (j) => {
    ie = j;
  }), ue("SMUI:textfield:character-counter:unmount", () => {
    ie = void 0;
  }), at(() => {
    var j;
    if (X(
      P,
      new Cg(
        {
          // getRootAdapterMethods_
          addClass: Re,
          removeClass: xe,
          hasClass: se,
          registerTextFieldInteractionHandler: (ae, Be) => N.on(Q(), ae, Be),
          deregisterTextFieldInteractionHandler: (ae, Be) => N.off(Q(), ae, Be),
          registerValidationAttributeChangeHandler: (ae) => {
            const Be = (yt) => yt.map((jt) => jt.attributeName).filter((jt) => jt), vt = new MutationObserver((yt) => {
              I() && ae(Be(yt));
            }), St = { attributes: !0 };
            return w() && vt.observe(w().getElement(), St), vt;
          },
          deregisterValidationAttributeChangeHandler: (ae) => {
            ae.disconnect();
          },
          // getInputAdapterMethods_
          getNativeInput: () => {
            var ae;
            return ((ae = w()) == null ? void 0 : ae.getElement()) ?? null;
          },
          setInputAttr: (ae, Be) => {
            var vt;
            (vt = w()) == null || vt.addAttr(ae, Be);
          },
          removeInputAttr: (ae) => {
            var Be;
            (Be = w()) == null || Be.removeAttr(ae);
          },
          isFocused: () => {
            var ae;
            return document.activeElement === ((ae = w()) == null ? void 0 : ae.getElement());
          },
          registerInputInteractionHandler: (ae, Be) => {
            var St;
            const vt = (St = w()) == null ? void 0 : St.getElement();
            if (vt) {
              const yt = n();
              N.on(vt, ae, Be, typeof yt == "boolean" ? { capture: yt } : yt);
            }
          },
          deregisterInputInteractionHandler: (ae, Be) => {
            var St;
            const vt = (St = w()) == null ? void 0 : St.getElement();
            vt && N.off(vt, ae, Be);
          },
          // getLabelAdapterMethods_
          floatLabel: (ae) => B() && B().float(ae),
          getLabelWidth: () => B() ? B().getWidth() : 0,
          hasLabel: () => !!B(),
          shakeLabel: (ae) => B() && B().shake(ae),
          setLabelRequired: (ae) => B() && B().setRequired(ae),
          // getLineRippleAdapterMethods_
          activateLineRipple: () => $() && $().activate(),
          deactivateLineRipple: () => $() && $().deactivate(),
          setLineRippleTransformOrigin: (ae) => $() && $().setRippleCenter(ae),
          // getOutlineAdapterMethods_
          closeOutline: () => q() && q().closeNotch(),
          hasOutline: () => !!q(),
          notchOutline: (ae) => q() && q().notch(ae)
        },
        {
          get helperText() {
            return J;
          },
          get characterCounter() {
            return ie;
          },
          get leadingIcon() {
            return D;
          },
          get trailingIcon() {
            return ee;
          }
        }
      ),
      !0
    ), O) {
      if (w() == null)
        throw new Error("SMUI Textfield must be initialized with either a non-undefined initial value or an Input component.");
      (j = s(P)) == null || j.init();
    } else
      _c().then(() => {
        var ae;
        if (w() == null)
          throw new Error("SMUI Textfield must be initialized with either a non-undefined initial value or an Input component.");
        (ae = s(P)) == null || ae.init();
      });
    return H(), () => {
      var ae;
      (ae = s(P)) == null || ae.destroy(), N.clear();
    };
  }), En(() => {
    V && V();
  });
  function se(j) {
    return j in K ? K[j] ?? null : Q().classList.contains(j);
  }
  function Re(j) {
    K[j] || (K[j] = !0);
  }
  function xe(j) {
    (!(j in K) || K[j]) && (K[j] = !1);
  }
  function Ue(j, ae) {
    ne[j] != ae && (ae === "" || ae == null ? delete ne[j] : ne[j] = ae);
  }
  function Me() {
    var j;
    (j = w()) == null || j.focus();
  }
  function Pe() {
    var j;
    (j = w()) == null || j.blur();
  }
  function G() {
    if (s(P)) {
      const j = s(P).shouldFloat;
      s(P).notchOutline(j);
    }
  }
  function Q() {
    return x;
  }
  var fe = { focus: Me, blur: Pe, layout: G, getElement: Q }, De = zg(), Fe = Z(De);
  {
    var ot = (j) => {
      var ae = qg();
      ke(ae, (Ze, et, tt) => ({ class: Ze, style: et, for: void 0, ...tt }), [
        () => He({
          "mdc-text-field": !0,
          "mdc-text-field--disabled": c(),
          "mdc-text-field--textarea": m(),
          "mdc-text-field--filled": f() === "filled",
          "mdc-text-field--outlined": f() === "outlined",
          "smui-text-field--standard": f() === "standard" && !m(),
          "mdc-text-field--no-label": g() || e.label == null,
          "mdc-text-field--label-floating": s(R) || p() != null && p() !== "",
          "mdc-text-field--with-leading-icon": i(L()) ? e.leadingIcon : L(),
          "mdc-text-field--with-trailing-icon": i(C()) ? e.trailingIcon : C(),
          "mdc-text-field--with-internal-counter": m() && e.internalCounter,
          "mdc-text-field--invalid": y(),
          ...K,
          [o()]: !0
        }),
        () => Object.entries(ne).map(([Ze, et]) => `${Ze}: ${et};`).concat([u()]).join(" "),
        () => Vn(z, ["input$", "label$", "ripple$", "outline$", "helperLine$"])
      ]);
      var Be = ce(ae);
      {
        var vt = (Ze) => {
          var et = Vg(), tt = Z(et);
          {
            var Ut = (ht) => {
              var Lt = Bg();
              T(ht, Lt);
            };
            oe(tt, (ht) => {
              f() === "filled" && ht(Ut);
            });
          }
          var mn = be(tt, 2);
          {
            var st = (ht) => {
              {
                let Lt = /* @__PURE__ */ ve(() => s(R) || p() != null && p() !== "" && (typeof p() != "number" || !isNaN(p()))), nt = /* @__PURE__ */ ve(() => it(z, "label$"));
                Ce(
                  Co(ht, $e(
                    {
                      get floatAbove() {
                        return s(Lt);
                      },
                      get required() {
                        return d();
                      },
                      wrapped: !0
                    },
                    () => s(nt),
                    {
                      children: (Mt, Mn) => {
                        var Pt = re(), Et = Z(Pt);
                        {
                          var Ft = (qt) => {
                          }, un = (qt) => {
                            var cn = re(), $t = Z(cn);
                            {
                              var Wn = (dn) => {
                                var Xt = gt();
                                Te(() => ze(Xt, e.label)), T(dn, Xt);
                              }, Kr = (dn) => {
                                var Xt = re(), gn = Z(Xt);
                                Ae(gn, () => e.label), T(dn, Xt);
                              };
                              oe(
                                $t,
                                (dn) => {
                                  typeof e.label == "string" ? dn(Wn) : dn(Kr, !1);
                                },
                                !0
                              );
                            }
                            T(qt, cn);
                          };
                          oe(Et, (qt) => {
                            e.label == null ? qt(Ft) : qt(un, !1);
                          });
                        }
                        T(Mt, Pt);
                      },
                      $$slots: { default: !0 }
                    }
                  )),
                  (Mt) => B(Mt),
                  () => B()
                );
              }
            };
            oe(mn, (ht) => {
              !g() && e.label != null && ht(st);
            });
          }
          T(Ze, et);
        };
        oe(Be, (Ze) => {
          !m() && f() !== "outlined" && Ze(vt);
        });
      }
      var St = be(Be, 2);
      {
        var yt = (Ze) => {
          {
            let et = /* @__PURE__ */ ve(() => g() || e.label == null), tt = /* @__PURE__ */ ve(() => it(z, "outline$"));
            Ce(
              cd(Ze, $e(
                {
                  get noLabel() {
                    return s(et);
                  }
                },
                () => s(tt),
                {
                  children: (Ut, mn) => {
                    var st = re(), ht = Z(st);
                    {
                      var Lt = (nt) => {
                        {
                          let Mt = /* @__PURE__ */ ve(() => s(R) || p() != null && p() !== "" && (typeof p() != "number" || !isNaN(p()))), Mn = /* @__PURE__ */ ve(() => it(z, "label$"));
                          Ce(
                            Co(nt, $e(
                              {
                                get floatAbove() {
                                  return s(Mt);
                                },
                                get required() {
                                  return d();
                                },
                                wrapped: !0
                              },
                              () => s(Mn),
                              {
                                children: (Pt, Et) => {
                                  var Ft = re(), un = Z(Ft);
                                  {
                                    var qt = ($t) => {
                                    }, cn = ($t) => {
                                      var Wn = re(), Kr = Z(Wn);
                                      {
                                        var dn = (gn) => {
                                          var ar = gt();
                                          Te(() => ze(ar, e.label)), T(gn, ar);
                                        }, Xt = (gn) => {
                                          var ar = re(), da = Z(ar);
                                          Ae(da, () => e.label), T(gn, ar);
                                        };
                                        oe(
                                          Kr,
                                          (gn) => {
                                            typeof e.label == "string" ? gn(dn) : gn(Xt, !1);
                                          },
                                          !0
                                        );
                                      }
                                      T($t, Wn);
                                    };
                                    oe(un, ($t) => {
                                      e.label == null ? $t(qt) : $t(cn, !1);
                                    });
                                  }
                                  T(Pt, Ft);
                                },
                                $$slots: { default: !0 }
                              }
                            )),
                            (Pt) => B(Pt),
                            () => B()
                          );
                        }
                      };
                      oe(ht, (nt) => {
                        !g() && e.label != null && nt(Lt);
                      });
                    }
                    T(Ut, st);
                  },
                  $$slots: { default: !0 }
                }
              )),
              (Ut) => q(Ut),
              () => q()
            );
          }
        };
        oe(St, (Ze) => {
          (m() || f() === "outlined") && Ze(yt);
        });
      }
      var jt = be(St, 2);
      to(jt, {
        key: "SMUI:textfield:icon:leading",
        value: !0,
        children: (Ze, et) => {
          var tt = re(), Ut = Z(tt);
          Ae(Ut, () => e.leadingIcon ?? ge), T(Ze, tt);
        },
        $$slots: { default: !0 }
      });
      var Sr = be(jt, 2);
      Ae(Sr, () => e.children ?? ge);
      var pt = be(Sr, 2);
      {
        var Nt = (Ze) => {
          var et = Gg(), tt = ce(et);
          {
            let mn = /* @__PURE__ */ ve(() => it(z, "input$"));
            Ce(
              kg(tt, $e(
                {
                  get disabled() {
                    return c();
                  },
                  get required() {
                    return d();
                  },
                  get updateInvalid() {
                    return E();
                  },
                  get initialInvalid() {
                    return s(W);
                  },
                  get "aria-controls"() {
                    return s(F);
                  },
                  get "aria-describedby"() {
                    return s(F);
                  }
                },
                () => s(mn),
                {
                  onblur: (st) => {
                    var ht;
                    X(R, !1), X(W, !0), Xe(Q(), "blur", st), (ht = e.input$onblur) == null || ht.call(e, st);
                  },
                  onfocus: (st) => {
                    var ht;
                    X(R, !0), Xe(Q(), "focus", st), (ht = e.input$onfocus) == null || ht.call(e, st);
                  },
                  get value() {
                    return p();
                  },
                  set value(st) {
                    p(st);
                  },
                  get dirty() {
                    return _();
                  },
                  set dirty(st) {
                    _(st);
                  },
                  get invalid() {
                    return y();
                  },
                  set invalid(st) {
                    y(st);
                  }
                }
              )),
              (st) => w(st),
              () => w()
            );
          }
          var Ut = be(tt, 2);
          Ae(Ut, () => e.internalCounter ?? ge), Te((mn) => nl(et, 1, mn), [
            () => xc(He({
              "mdc-text-field__resizer": !("input$resizable" in z) || e.input$resizable
            }))
          ]), T(Ze, et);
        }, At = (Ze) => {
          var et = jg(), tt = Z(et);
          {
            var Ut = (Lt) => {
              var nt = re(), Mt = Z(nt);
              {
                var Mn = (Et) => {
                  Pg(Et, {
                    children: (Ft, un) => {
                      var qt = gt();
                      Te(() => ze(qt, e.prefix)), T(Ft, qt);
                    },
                    $$slots: { default: !0 }
                  });
                }, Pt = (Et) => {
                  var Ft = re(), un = Z(Ft);
                  Ae(un, () => e.prefix ?? ge), T(Et, Ft);
                };
                oe(Mt, (Et) => {
                  typeof e.prefix == "string" ? Et(Mn) : Et(Pt, !1);
                });
              }
              T(Lt, nt);
            };
            oe(tt, (Lt) => {
              e.prefix != null && Lt(Ut);
            });
          }
          var mn = be(tt, 2);
          {
            let Lt = /* @__PURE__ */ ve(() => it(z, "input$"));
            Ce(
              Ug(mn, $e(
                {
                  get type() {
                    return h();
                  },
                  get disabled() {
                    return c();
                  },
                  get required() {
                    return d();
                  },
                  get updateInvalid() {
                    return E();
                  },
                  get initialInvalid() {
                    return s(W);
                  },
                  get "aria-controls"() {
                    return s(F);
                  },
                  get "aria-describedby"() {
                    return s(F);
                  }
                },
                () => g() && e.label != null && typeof e.label == "string" ? { placeholder: e.label } : {},
                () => s(Lt),
                {
                  onblur: (nt) => {
                    var Mt;
                    X(R, !1), X(W, !0), Xe(Q(), "blur", nt), (Mt = e.input$onblur) == null || Mt.call(e, nt);
                  },
                  onfocus: (nt) => {
                    var Mt;
                    X(R, !0), Xe(Q(), "focus", nt), (Mt = e.input$onfocus) == null || Mt.call(e, nt);
                  },
                  get value() {
                    return p();
                  },
                  set value(nt) {
                    p(nt);
                  },
                  get files() {
                    return b();
                  },
                  set files(nt) {
                    b(nt);
                  },
                  get dirty() {
                    return _();
                  },
                  set dirty(nt) {
                    _(nt);
                  },
                  get invalid() {
                    return y();
                  },
                  set invalid(nt) {
                    y(nt);
                  }
                }
              )),
              (nt) => w(nt),
              () => w()
            );
          }
          var st = be(mn, 2);
          {
            var ht = (Lt) => {
              var nt = re(), Mt = Z(nt);
              {
                var Mn = (Et) => {
                  Hg(Et, {
                    children: (Ft, un) => {
                      var qt = gt();
                      Te(() => ze(qt, e.suffix)), T(Ft, qt);
                    },
                    $$slots: { default: !0 }
                  });
                }, Pt = (Et) => {
                  var Ft = re(), un = Z(Ft);
                  Ae(un, () => e.suffix ?? ge), T(Et, Ft);
                };
                oe(Mt, (Et) => {
                  typeof e.suffix == "string" ? Et(Mn) : Et(Pt, !1);
                });
              }
              T(Lt, nt);
            };
            oe(st, (Lt) => {
              e.suffix != null && Lt(ht);
            });
          }
          T(Ze, et);
        };
        oe(pt, (Ze) => {
          m() && typeof p() == "string" ? Ze(Nt) : Ze(At, !1);
        });
      }
      var Dn = be(pt, 2);
      to(Dn, {
        key: "SMUI:textfield:icon:leading",
        value: !1,
        children: (Ze, et) => {
          var tt = re(), Ut = Z(tt);
          Ae(Ut, () => e.trailingIcon ?? ge), T(Ze, tt);
        },
        $$slots: { default: !0 }
      });
      var Ei = be(Dn, 2);
      {
        var qn = (Ze) => {
          {
            let et = /* @__PURE__ */ ve(() => it(z, "ripple$"));
            Ce(ud(Ze, $e(() => s(et))), (tt) => $(tt), () => $());
          }
        };
        oe(Ei, (Ze) => {
          !m() && f() !== "outlined" && l() && Ze(qn);
        });
      }
      Ce(ae, (Ze) => x = Ze, () => x), Ne(ae, (Ze, et) => Qt == null ? void 0 : Qt(Ze, et), () => ({
        ripple: !m() && f() === "filled",
        unbounded: !1,
        addClass: Re,
        removeClass: xe,
        addStyle: Ue,
        eventTarget: s(Se),
        activeTarget: s(Se),
        initPromise: M
      })), Ne(ae, (Ze, et) => Y == null ? void 0 : Y(Ze, et), a), T(j, ae);
    }, ft = (j) => {
      var ae = Wg();
      ke(ae, (pt, Nt, At) => ({ class: pt, style: Nt, ...At }), [
        () => He({
          "mdc-text-field": !0,
          "mdc-text-field--disabled": c(),
          "mdc-text-field--textarea": m(),
          "mdc-text-field--filled": f() === "filled",
          "mdc-text-field--outlined": f() === "outlined",
          "smui-text-field--standard": f() === "standard" && !m(),
          "mdc-text-field--no-label": g() || e.label == null,
          "mdc-text-field--with-leading-icon": e.leadingIcon,
          "mdc-text-field--with-trailing-icon": e.trailingIcon,
          "mdc-text-field--invalid": y(),
          ...K,
          [o()]: !0
        }),
        () => Object.entries(ne).map(([pt, Nt]) => `${pt}: ${Nt};`).concat([u()]).join(" "),
        () => Vn(z, ["input$", "label$", "ripple$", "outline$", "helperLine$"])
      ]);
      var Be = ce(ae);
      {
        var vt = (pt) => {
          var Nt = re(), At = Z(Nt);
          Ae(At, () => e.label ?? ge), T(pt, Nt);
        };
        oe(Be, (pt) => {
          typeof e.label != "string" && pt(vt);
        });
      }
      var St = be(Be, 2);
      to(St, {
        key: "SMUI:textfield:icon:leading",
        value: !0,
        children: (pt, Nt) => {
          var At = re(), Dn = Z(At);
          Ae(Dn, () => e.leadingIcon ?? ge), T(pt, At);
        },
        $$slots: { default: !0 }
      });
      var yt = be(St, 2);
      Ae(yt, () => e.children ?? ge);
      var jt = be(yt, 2);
      to(jt, {
        key: "SMUI:textfield:icon:leading",
        value: !1,
        children: (pt, Nt) => {
          var At = re(), Dn = Z(At);
          Ae(Dn, () => e.trailingIcon ?? ge), T(pt, At);
        },
        $$slots: { default: !0 }
      });
      var Sr = be(jt, 2);
      Ae(Sr, () => e.line ?? ge), Ce(ae, (pt) => x = pt, () => x), Ne(ae, (pt, Nt) => Qt == null ? void 0 : Qt(pt, Nt), () => ({
        ripple: l(),
        unbounded: !1,
        addClass: Re,
        removeClass: xe,
        addStyle: Ue
      })), Ne(ae, (pt, Nt) => Y == null ? void 0 : Y(pt, Nt), a), T(j, ae);
    };
    oe(Fe, (j) => {
      O ? j(ot) : j(ft, !1);
    });
  }
  var he = be(Fe, 2);
  {
    var k = (j) => {
      {
        let ae = /* @__PURE__ */ ve(() => it(z, "helperLine$"));
        Mg(j, $e(() => s(ae), {
          children: (Be, vt) => {
            var St = re(), yt = Z(St);
            Ae(yt, () => e.helper ?? ge), T(Be, St);
          },
          $$slots: { default: !0 }
        }));
      }
    };
    oe(he, (j) => {
      e.helper && j(k);
    });
  }
  return T(t, De), Le(fe);
}
var Kg = /* @__PURE__ */ de("<i><!></i>");
function Xg(t, e) {
  we(e, !0);
  const n = () => Bn(h, "$leadingStore", r), [r, i] = ir();
  let a = v(e, "use", 19, () => []), o = v(e, "class", 3, ""), u = v(e, "tabindex", 19, () => e.role === "button" ? 0 : -1), l = v(e, "disabled", 3, !1), c = /* @__PURE__ */ je(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "role",
    "tabindex",
    "disabled",
    "children"
  ]), d, m = /* @__PURE__ */ me(void 0), f = new _i(), g = ye({});
  const h = _e("SMUI:textfield:icon:leading"), p = n();
  let b = /* @__PURE__ */ me(void 0);
  const y = /* @__PURE__ */ ve(() => ({ role: e.role, tabindex: u() })), E = _e("SMUI:textfield:leading-icon:mount"), S = _e("SMUI:textfield:leading-icon:unmount"), _ = _e("SMUI:textfield:trailing-icon:mount"), A = _e("SMUI:textfield:trailing-icon:unmount");
  at(() => (X(
    m,
    new xg({
      getAttr: I,
      setAttr: L,
      removeAttr: C,
      setContent: (P) => {
        X(b, P, !0);
      },
      registerInteractionHandler: (P, N) => f.on(w(), P, N),
      deregisterInteractionHandler: (P, N) => f.off(w(), P, N),
      notifyIconAction: () => Xe(w(), "SMUITextFieldIcon")
    }),
    !0
  ), p ? E && E(s(m)) : _ && _(s(m)), s(m).init(), () => {
    var P;
    s(m) && (p ? S && S(s(m)) : A && A(s(m))), (P = s(m)) == null || P.destroy(), f.clear();
  }));
  function I(P) {
    return P in g ? g[P] ?? null : w().getAttribute(P);
  }
  function L(P, N) {
    g[P] !== N && (g[P] = N);
  }
  function C(P) {
    (!(P in g) || g[P] != null) && (g[P] = void 0);
  }
  function w() {
    return d;
  }
  var B = { getElement: w }, $ = Kg();
  ke(
    $,
    (P) => ({
      class: P,
      "aria-hidden": u() === -1 ? "true" : "false",
      "aria-disabled": e.role === "button" ? l() ? "true" : "false" : void 0,
      ...s(y),
      ...g,
      ...c
    }),
    [
      () => He({
        "mdc-text-field__icon": !0,
        "mdc-text-field__icon--leading": p,
        "mdc-text-field__icon--trailing": !p,
        [o()]: !0
      })
    ]
  );
  var q = ce($);
  {
    var z = (P) => {
      var N = re(), K = Z(N);
      Ae(K, () => e.children ?? ge), T(P, N);
    }, O = (P) => {
      var N = gt();
      Te(() => ze(N, s(b))), T(P, N);
    };
    oe(q, (P) => {
      s(b) == null ? P(z) : P(O, !1);
    });
  }
  Ce($, (P) => d = P, () => d), Ne($, (P, N) => Y == null ? void 0 : Y(P, N), a), T(t, $);
  var x = Le(B);
  return i(), x;
}
function Zg(t, e) {
  we(e, !0);
  let n = v(e, "placeholder", 3, ""), r = v(e, "label", 3, ""), i = v(e, "icon", 3, ""), a = v(e, "value", 15, ""), o = v(e, "variant", 3, "standard"), u = v(e, "styles", 3, ""), l = v(e, "required", 3, !1), c = v(e, "invalid", 3, !1), d = v(e, "oninput", 3, () => {
  });
  var m = re(), f = Z(m);
  {
    var g = (p) => {
      {
        const b = (E) => {
          Xg(E, {
            class: "material-icons",
            children: (S, _) => {
              var A = gt();
              Te(() => ze(A, i())), T(S, A);
            },
            $$slots: { default: !0 }
          });
        };
        let y = /* @__PURE__ */ ve(() => `width: 100%; ${u()}`);
        Fs(p, {
          get label() {
            return r();
          },
          get required() {
            return l();
          },
          get invalid() {
            return c();
          },
          get placeholder() {
            return n();
          },
          get style() {
            return s(y);
          },
          get variant() {
            return o();
          },
          get oninput() {
            return d();
          },
          get value() {
            return a();
          },
          set value(E) {
            a(E);
          },
          leadingIcon: b,
          $$slots: { leadingIcon: !0 }
        });
      }
    }, h = (p) => {
      Fs(p, {
        get label() {
          return r();
        },
        get placeholder() {
          return n();
        },
        style: "width: 100%",
        get variant() {
          return o();
        },
        get required() {
          return l();
        },
        get invalid() {
          return c();
        },
        get oninput() {
          return d();
        },
        get value() {
          return a();
        },
        set value(b) {
          a(b);
        }
      });
    };
    oe(f, (p) => {
      i() ? p(g) : p(h, !1);
    });
  }
  T(t, m), Le();
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
var Yg = {
  ANCHOR: "mdc-menu-surface--anchor",
  ANIMATING_CLOSED: "mdc-menu-surface--animating-closed",
  ANIMATING_OPEN: "mdc-menu-surface--animating-open",
  FIXED: "mdc-menu-surface--fixed",
  IS_OPEN_BELOW: "mdc-menu-surface--is-open-below",
  OPEN: "mdc-menu-surface--open",
  ROOT: "mdc-menu-surface"
}, Qg = {
  CLOSED_EVENT: "MDCMenuSurface:closed",
  CLOSING_EVENT: "MDCMenuSurface:closing",
  OPENED_EVENT: "MDCMenuSurface:opened",
  OPENING_EVENT: "MDCMenuSurface:opening",
  FOCUSABLE_ELEMENTS: [
    "button:not(:disabled)",
    '[href]:not([aria-disabled="true"])',
    "input:not(:disabled)",
    "select:not(:disabled)",
    "textarea:not(:disabled)",
    '[tabindex]:not([tabindex="-1"]):not([aria-disabled="true"])'
  ].join(", ")
}, _a = {
  /** Total duration of menu-surface open animation. */
  TRANSITION_OPEN_DURATION: 120,
  /** Total duration of menu-surface close animation. */
  TRANSITION_CLOSE_DURATION: 75,
  /**
   * Margin left to the edge of the viewport when menu-surface is at maximum
   * possible height. Also used as a viewport margin.
   */
  MARGIN_TO_EDGE: 32,
  /**
   * Ratio of anchor width to menu-surface width for switching from corner
   * positioning to center positioning.
   */
  ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO: 0.67,
  /**
   * Amount of time to wait before restoring focus when closing the menu
   * surface. This is important because if a touch event triggered the menu
   * close, and the subsequent mouse event occurs after focus is restored, then
   * the restored focus would be lost.
   */
  TOUCH_EVENT_WAIT_MS: 30
}, Tt;
(function(t) {
  t[t.BOTTOM = 1] = "BOTTOM", t[t.CENTER = 2] = "CENTER", t[t.RIGHT = 4] = "RIGHT", t[t.FLIP_RTL = 8] = "FLIP_RTL";
})(Tt || (Tt = {}));
var ci;
(function(t) {
  t[t.TOP_LEFT = 0] = "TOP_LEFT", t[t.TOP_RIGHT = 4] = "TOP_RIGHT", t[t.BOTTOM_LEFT = 1] = "BOTTOM_LEFT", t[t.BOTTOM_RIGHT = 5] = "BOTTOM_RIGHT", t[t.TOP_START = 8] = "TOP_START", t[t.TOP_END = 12] = "TOP_END", t[t.BOTTOM_START = 9] = "BOTTOM_START", t[t.BOTTOM_END = 13] = "BOTTOM_END";
})(ci || (ci = {}));
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
var Cr, ur, Ye = {
  LIST_ITEM_ACTIVATED_CLASS: "mdc-list-item--activated",
  LIST_ITEM_CLASS: "mdc-list-item",
  LIST_ITEM_DISABLED_CLASS: "mdc-list-item--disabled",
  LIST_ITEM_SELECTED_CLASS: "mdc-list-item--selected",
  LIST_ITEM_TEXT_CLASS: "mdc-list-item__text",
  LIST_ITEM_PRIMARY_TEXT_CLASS: "mdc-list-item__primary-text",
  ROOT: "mdc-list"
};
Cr = {}, Cr["" + Ye.LIST_ITEM_ACTIVATED_CLASS] = "mdc-list-item--activated", Cr["" + Ye.LIST_ITEM_CLASS] = "mdc-list-item", Cr["" + Ye.LIST_ITEM_DISABLED_CLASS] = "mdc-list-item--disabled", Cr["" + Ye.LIST_ITEM_SELECTED_CLASS] = "mdc-list-item--selected", Cr["" + Ye.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-list-item__primary-text", Cr["" + Ye.ROOT] = "mdc-list";
var Li = (ur = {}, ur["" + Ye.LIST_ITEM_ACTIVATED_CLASS] = "mdc-deprecated-list-item--activated", ur["" + Ye.LIST_ITEM_CLASS] = "mdc-deprecated-list-item", ur["" + Ye.LIST_ITEM_DISABLED_CLASS] = "mdc-deprecated-list-item--disabled", ur["" + Ye.LIST_ITEM_SELECTED_CLASS] = "mdc-deprecated-list-item--selected", ur["" + Ye.LIST_ITEM_TEXT_CLASS] = "mdc-deprecated-list-item__text", ur["" + Ye.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-deprecated-list-item__primary-text", ur["" + Ye.ROOT] = "mdc-deprecated-list", ur), Tr = {
  ACTION_EVENT: "MDCList:action",
  SELECTION_CHANGE_EVENT: "MDCList:selectionChange",
  ARIA_CHECKED: "aria-checked",
  ARIA_CHECKED_CHECKBOX_SELECTOR: '[role="checkbox"][aria-checked="true"]',
  ARIA_CHECKED_RADIO_SELECTOR: '[role="radio"][aria-checked="true"]',
  ARIA_CURRENT: "aria-current",
  ARIA_DISABLED: "aria-disabled",
  ARIA_ORIENTATION: "aria-orientation",
  ARIA_ORIENTATION_HORIZONTAL: "horizontal",
  ARIA_ROLE_CHECKBOX_SELECTOR: '[role="checkbox"]',
  ARIA_SELECTED: "aria-selected",
  ARIA_INTERACTIVE_ROLES_SELECTOR: '[role="listbox"], [role="menu"]',
  ARIA_MULTI_SELECTABLE_SELECTOR: '[aria-multiselectable="true"]',
  CHECKBOX_RADIO_SELECTOR: 'input[type="checkbox"], input[type="radio"]',
  CHECKBOX_SELECTOR: 'input[type="checkbox"]',
  CHILD_ELEMENTS_TO_TOGGLE_TABINDEX: `
    .` + Ye.LIST_ITEM_CLASS + ` button:not(:disabled),
    .` + Ye.LIST_ITEM_CLASS + ` a,
    .` + Li[Ye.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + Li[Ye.LIST_ITEM_CLASS] + ` a
  `,
  DEPRECATED_SELECTOR: ".mdc-deprecated-list",
  FOCUSABLE_CHILD_ELEMENTS: `
    .` + Ye.LIST_ITEM_CLASS + ` button:not(:disabled),
    .` + Ye.LIST_ITEM_CLASS + ` a,
    .` + Ye.LIST_ITEM_CLASS + ` input[type="radio"]:not(:disabled),
    .` + Ye.LIST_ITEM_CLASS + ` input[type="checkbox"]:not(:disabled),
    .` + Li[Ye.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + Li[Ye.LIST_ITEM_CLASS] + ` a,
    .` + Li[Ye.LIST_ITEM_CLASS] + ` input[type="radio"]:not(:disabled),
    .` + Li[Ye.LIST_ITEM_CLASS] + ` input[type="checkbox"]:not(:disabled)
  `,
  RADIO_SELECTOR: 'input[type="radio"]',
  SELECTED_ITEM_SELECTOR: '[aria-selected="true"], [aria-current="true"]'
}, Ct = {
  UNSET_INDEX: -1,
  TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS: 300
};
/**
 * @license
 * Copyright 2020 Google Inc.
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
var Jg = ["input", "button", "textarea", "select"], Cn = function(t) {
  var e = t.target;
  if (e) {
    var n = ("" + e.tagName).toLowerCase();
    Jg.indexOf(n) === -1 && t.preventDefault();
  }
};
/**
 * @license
 * Copyright 2020 Google Inc.
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
function $g() {
  var t = {
    bufferClearTimeout: 0,
    currentFirstChar: "",
    sortedIndexCursor: 0,
    typeaheadBuffer: ""
  };
  return t;
}
function ep(t, e) {
  for (var n = /* @__PURE__ */ new Map(), r = 0; r < t; r++) {
    var i = e(r).trim();
    if (i) {
      var a = i[0].toLowerCase();
      n.has(a) || n.set(a, []), n.get(a).push({ text: i.toLowerCase(), index: r });
    }
  }
  return n.forEach(function(o) {
    o.sort(function(u, l) {
      return u.index - l.index;
    });
  }), n;
}
function ks(t, e) {
  var n = t.nextChar, r = t.focusItemAtIndex, i = t.sortedIndexByFirstChar, a = t.focusedItemIndex, o = t.skipFocus, u = t.isItemAtIndexDisabled;
  clearTimeout(e.bufferClearTimeout), e.bufferClearTimeout = setTimeout(function() {
    fd(e);
  }, Ct.TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS), e.typeaheadBuffer = e.typeaheadBuffer + n;
  var l;
  return e.typeaheadBuffer.length === 1 ? l = tp(i, a, u, e) : l = np(i, u, e), l !== -1 && !o && r(l), l;
}
function tp(t, e, n, r) {
  var i = r.typeaheadBuffer[0], a = t.get(i);
  if (!a)
    return -1;
  if (i === r.currentFirstChar && a[r.sortedIndexCursor].index === e) {
    r.sortedIndexCursor = (r.sortedIndexCursor + 1) % a.length;
    var o = a[r.sortedIndexCursor].index;
    if (!n(o))
      return o;
  }
  r.currentFirstChar = i;
  var u = -1, l;
  for (l = 0; l < a.length; l++)
    if (!n(a[l].index)) {
      u = l;
      break;
    }
  for (; l < a.length; l++)
    if (a[l].index > e && !n(a[l].index)) {
      u = l;
      break;
    }
  return u !== -1 ? (r.sortedIndexCursor = u, a[r.sortedIndexCursor].index) : -1;
}
function np(t, e, n) {
  var r = n.typeaheadBuffer[0], i = t.get(r);
  if (!i)
    return -1;
  var a = i[n.sortedIndexCursor];
  if (a.text.lastIndexOf(n.typeaheadBuffer, 0) === 0 && !e(a.index))
    return a.index;
  for (var o = (n.sortedIndexCursor + 1) % i.length, u = -1; o !== n.sortedIndexCursor; ) {
    var l = i[o], c = l.text.lastIndexOf(n.typeaheadBuffer, 0) === 0, d = !e(l.index);
    if (c && d) {
      u = o;
      break;
    }
    o = (o + 1) % i.length;
  }
  return u !== -1 ? (n.sortedIndexCursor = u, i[n.sortedIndexCursor].index) : -1;
}
function dd(t) {
  return t.typeaheadBuffer.length > 0;
}
function fd(t) {
  t.typeaheadBuffer = "";
}
function hu(t, e) {
  var n = t.event, r = t.isTargetListItem, i = t.focusedItemIndex, a = t.focusItemAtIndex, o = t.sortedIndexByFirstChar, u = t.isItemAtIndexDisabled, l = Ot(n) === "ArrowLeft", c = Ot(n) === "ArrowUp", d = Ot(n) === "ArrowRight", m = Ot(n) === "ArrowDown", f = Ot(n) === "Home", g = Ot(n) === "End", h = Ot(n) === "Enter", p = Ot(n) === "Spacebar";
  if (n.altKey || n.ctrlKey || n.metaKey || l || c || d || m || f || g || h)
    return -1;
  var b = !p && n.key.length === 1;
  if (b) {
    Cn(n);
    var y = {
      focusItemAtIndex: a,
      focusedItemIndex: i,
      nextChar: n.key.toLowerCase(),
      sortedIndexByFirstChar: o,
      skipFocus: !1,
      isItemAtIndexDisabled: u
    };
    return ks(y, e);
  }
  if (!p)
    return -1;
  r && Cn(n);
  var E = r && dd(e);
  if (E) {
    var y = {
      focusItemAtIndex: a,
      focusedItemIndex: i,
      nextChar: " ",
      sortedIndexByFirstChar: o,
      skipFocus: !1,
      isItemAtIndexDisabled: u
    };
    return ks(y, e);
  }
  return -1;
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
function rp(t) {
  return t instanceof Array;
}
var ip = ["Alt", "Control", "Meta", "Shift"];
function vu(t) {
  var e = new Set(t ? ip.filter(function(n) {
    return t.getModifierState(n);
  }) : []);
  return function(n) {
    return n.every(function(r) {
      return e.has(r);
    }) && n.length === e.size;
  };
}
var ap = (
  /** @class */
  function(t) {
    Ke(e, t);
    function e(n) {
      var r = t.call(this, pe(pe({}, e.defaultAdapter), n)) || this;
      return r.wrapFocus = !1, r.isVertical = !0, r.isSingleSelectionList = !1, r.areDisabledItemsFocusable = !0, r.selectedIndex = Ct.UNSET_INDEX, r.focusedItemIndex = Ct.UNSET_INDEX, r.useActivatedClass = !1, r.useSelectedAttr = !1, r.ariaCurrentAttrValue = null, r.isCheckboxList = !1, r.isRadioList = !1, r.lastSelectedIndex = null, r.hasTypeahead = !1, r.typeaheadState = $g(), r.sortedIndexByFirstChar = /* @__PURE__ */ new Map(), r;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return Tr;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Ye;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return Ct;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
      get: function() {
        return {
          addClassForElementIndex: function() {
          },
          focusItemAtIndex: function() {
          },
          getAttributeForElementIndex: function() {
            return null;
          },
          getFocusedElementIndex: function() {
            return 0;
          },
          getListItemCount: function() {
            return 0;
          },
          hasCheckboxAtIndex: function() {
            return !1;
          },
          hasRadioAtIndex: function() {
            return !1;
          },
          isCheckboxCheckedAtIndex: function() {
            return !1;
          },
          isFocusInsideList: function() {
            return !1;
          },
          isRootFocused: function() {
            return !1;
          },
          listItemAtIndexHasClass: function() {
            return !1;
          },
          notifyAction: function() {
          },
          notifySelectionChange: function() {
          },
          removeClassForElementIndex: function() {
          },
          setAttributeForElementIndex: function() {
          },
          setCheckedCheckboxOrRadioAtIndex: function() {
          },
          setTabIndexForListItemChildren: function() {
          },
          getPrimaryTextAtIndex: function() {
            return "";
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.layout = function() {
      this.adapter.getListItemCount() !== 0 && (this.adapter.hasCheckboxAtIndex(0) ? this.isCheckboxList = !0 : this.adapter.hasRadioAtIndex(0) ? this.isRadioList = !0 : this.maybeInitializeSingleSelection(), this.hasTypeahead && (this.sortedIndexByFirstChar = this.typeaheadInitSortedIndex()));
    }, e.prototype.getFocusedItemIndex = function() {
      return this.focusedItemIndex;
    }, e.prototype.setWrapFocus = function(n) {
      this.wrapFocus = n;
    }, e.prototype.setVerticalOrientation = function(n) {
      this.isVertical = n;
    }, e.prototype.setSingleSelection = function(n) {
      this.isSingleSelectionList = n, n && (this.maybeInitializeSingleSelection(), this.selectedIndex = this.getSelectedIndexFromDOM());
    }, e.prototype.setDisabledItemsFocusable = function(n) {
      this.areDisabledItemsFocusable = n;
    }, e.prototype.maybeInitializeSingleSelection = function() {
      var n = this.getSelectedIndexFromDOM();
      if (n !== Ct.UNSET_INDEX) {
        var r = this.adapter.listItemAtIndexHasClass(n, Ye.LIST_ITEM_ACTIVATED_CLASS);
        r && this.setUseActivatedClass(!0), this.isSingleSelectionList = !0, this.selectedIndex = n;
      }
    }, e.prototype.getSelectedIndexFromDOM = function() {
      for (var n = Ct.UNSET_INDEX, r = this.adapter.getListItemCount(), i = 0; i < r; i++) {
        var a = this.adapter.listItemAtIndexHasClass(i, Ye.LIST_ITEM_SELECTED_CLASS), o = this.adapter.listItemAtIndexHasClass(i, Ye.LIST_ITEM_ACTIVATED_CLASS);
        if (a || o) {
          n = i;
          break;
        }
      }
      return n;
    }, e.prototype.setHasTypeahead = function(n) {
      this.hasTypeahead = n, n && (this.sortedIndexByFirstChar = this.typeaheadInitSortedIndex());
    }, e.prototype.isTypeaheadInProgress = function() {
      return this.hasTypeahead && dd(this.typeaheadState);
    }, e.prototype.setUseActivatedClass = function(n) {
      this.useActivatedClass = n;
    }, e.prototype.setUseSelectedAttribute = function(n) {
      this.useSelectedAttr = n;
    }, e.prototype.getSelectedIndex = function() {
      return this.selectedIndex;
    }, e.prototype.setSelectedIndex = function(n, r) {
      r === void 0 && (r = {}), this.isIndexValid(n) && (this.isCheckboxList ? this.setCheckboxAtIndex(n, r) : this.isRadioList ? this.setRadioAtIndex(n, r) : this.setSingleSelectionAtIndex(n, r));
    }, e.prototype.handleFocusIn = function(n) {
      n >= 0 && (this.focusedItemIndex = n, this.adapter.setAttributeForElementIndex(n, "tabindex", "0"), this.adapter.setTabIndexForListItemChildren(n, "0"));
    }, e.prototype.handleFocusOut = function(n) {
      var r = this;
      n >= 0 && (this.adapter.setAttributeForElementIndex(n, "tabindex", "-1"), this.adapter.setTabIndexForListItemChildren(n, "-1")), setTimeout(function() {
        r.adapter.isFocusInsideList() || r.setTabindexToFirstSelectedOrFocusedItem();
      }, 0);
    }, e.prototype.isIndexDisabled = function(n) {
      return this.adapter.listItemAtIndexHasClass(n, Ye.LIST_ITEM_DISABLED_CLASS);
    }, e.prototype.handleKeydown = function(n, r, i) {
      var a = this, o, u = Ot(n) === "ArrowLeft", l = Ot(n) === "ArrowUp", c = Ot(n) === "ArrowRight", d = Ot(n) === "ArrowDown", m = Ot(n) === "Home", f = Ot(n) === "End", g = Ot(n) === "Enter", h = Ot(n) === "Spacebar", p = this.isVertical && d || !this.isVertical && c, b = this.isVertical && l || !this.isVertical && u, y = n.key === "A" || n.key === "a", E = vu(n);
      if (this.adapter.isRootFocused()) {
        if ((b || f) && E([]))
          n.preventDefault(), this.focusLastElement();
        else if ((p || m) && E([]))
          n.preventDefault(), this.focusFirstElement();
        else if (b && E(["Shift"]) && this.isCheckboxList) {
          n.preventDefault();
          var S = this.focusLastElement();
          S !== -1 && this.setSelectedIndexOnAction(S, !1);
        } else if (p && E(["Shift"]) && this.isCheckboxList) {
          n.preventDefault();
          var S = this.focusFirstElement();
          S !== -1 && this.setSelectedIndexOnAction(S, !1);
        }
        if (this.hasTypeahead) {
          var _ = {
            event: n,
            focusItemAtIndex: function(L) {
              a.focusItemAtIndex(L);
            },
            focusedItemIndex: -1,
            isTargetListItem: r,
            sortedIndexByFirstChar: this.sortedIndexByFirstChar,
            isItemAtIndexDisabled: function(L) {
              return a.isIndexDisabled(L);
            }
          };
          hu(_, this.typeaheadState);
        }
        return;
      }
      var A = this.adapter.getFocusedElementIndex();
      if (!(A === -1 && (A = i, A < 0))) {
        if (p && E([]))
          Cn(n), this.focusNextElement(A);
        else if (b && E([]))
          Cn(n), this.focusPrevElement(A);
        else if (p && E(["Shift"]) && this.isCheckboxList) {
          Cn(n);
          var S = this.focusNextElement(A);
          S !== -1 && this.setSelectedIndexOnAction(S, !1);
        } else if (b && E(["Shift"]) && this.isCheckboxList) {
          Cn(n);
          var S = this.focusPrevElement(A);
          S !== -1 && this.setSelectedIndexOnAction(S, !1);
        } else if (m && E([]))
          Cn(n), this.focusFirstElement();
        else if (f && E([]))
          Cn(n), this.focusLastElement();
        else if (m && E(["Control", "Shift"]) && this.isCheckboxList) {
          if (Cn(n), this.isIndexDisabled(A))
            return;
          this.focusFirstElement(), this.toggleCheckboxRange(0, A, A);
        } else if (f && E(["Control", "Shift"]) && this.isCheckboxList) {
          if (Cn(n), this.isIndexDisabled(A))
            return;
          this.focusLastElement(), this.toggleCheckboxRange(A, this.adapter.getListItemCount() - 1, A);
        } else if (y && E(["Control"]) && this.isCheckboxList)
          n.preventDefault(), this.checkboxListToggleAll(this.selectedIndex === Ct.UNSET_INDEX ? [] : this.selectedIndex, !0);
        else if ((g || h) && E([])) {
          if (r) {
            var I = n.target;
            if (I && I.tagName === "A" && g || (Cn(n), this.isIndexDisabled(A)))
              return;
            this.isTypeaheadInProgress() || (this.isSelectableList() && this.setSelectedIndexOnAction(A, !1), this.adapter.notifyAction(A));
          }
        } else if ((g || h) && E(["Shift"]) && this.isCheckboxList) {
          var I = n.target;
          if (I && I.tagName === "A" && g || (Cn(n), this.isIndexDisabled(A)))
            return;
          this.isTypeaheadInProgress() || (this.toggleCheckboxRange((o = this.lastSelectedIndex) !== null && o !== void 0 ? o : A, A, A), this.adapter.notifyAction(A));
        }
        if (this.hasTypeahead) {
          var _ = {
            event: n,
            focusItemAtIndex: function(C) {
              a.focusItemAtIndex(C);
            },
            focusedItemIndex: this.focusedItemIndex,
            isTargetListItem: r,
            sortedIndexByFirstChar: this.sortedIndexByFirstChar,
            isItemAtIndexDisabled: function(C) {
              return a.isIndexDisabled(C);
            }
          };
          hu(_, this.typeaheadState);
        }
      }
    }, e.prototype.handleClick = function(n, r, i) {
      var a, o = vu(i);
      n !== Ct.UNSET_INDEX && (this.isIndexDisabled(n) || (o([]) ? (this.isSelectableList() && this.setSelectedIndexOnAction(n, r), this.adapter.notifyAction(n)) : this.isCheckboxList && o(["Shift"]) && (this.toggleCheckboxRange((a = this.lastSelectedIndex) !== null && a !== void 0 ? a : n, n, n), this.adapter.notifyAction(n))));
    }, e.prototype.focusNextElement = function(n) {
      var r = this.adapter.getListItemCount(), i = n, a = null;
      do {
        if (i++, i >= r)
          if (this.wrapFocus)
            i = 0;
          else
            return n;
        if (i === a)
          return -1;
        a = a ?? i;
      } while (!this.areDisabledItemsFocusable && this.isIndexDisabled(i));
      return this.focusItemAtIndex(i), i;
    }, e.prototype.focusPrevElement = function(n) {
      var r = this.adapter.getListItemCount(), i = n, a = null;
      do {
        if (i--, i < 0)
          if (this.wrapFocus)
            i = r - 1;
          else
            return n;
        if (i === a)
          return -1;
        a = a ?? i;
      } while (!this.areDisabledItemsFocusable && this.isIndexDisabled(i));
      return this.focusItemAtIndex(i), i;
    }, e.prototype.focusFirstElement = function() {
      return this.focusNextElement(-1);
    }, e.prototype.focusLastElement = function() {
      return this.focusPrevElement(this.adapter.getListItemCount());
    }, e.prototype.focusInitialElement = function() {
      var n = this.getFirstSelectedOrFocusedItemIndex();
      return this.focusItemAtIndex(n), n;
    }, e.prototype.setEnabled = function(n, r) {
      this.isIndexValid(n, !1) && (r ? (this.adapter.removeClassForElementIndex(n, Ye.LIST_ITEM_DISABLED_CLASS), this.adapter.setAttributeForElementIndex(n, Tr.ARIA_DISABLED, "false")) : (this.adapter.addClassForElementIndex(n, Ye.LIST_ITEM_DISABLED_CLASS), this.adapter.setAttributeForElementIndex(n, Tr.ARIA_DISABLED, "true")));
    }, e.prototype.setSingleSelectionAtIndex = function(n, r) {
      if (r === void 0 && (r = {}), !(this.selectedIndex === n && !r.forceUpdate)) {
        var i = Ye.LIST_ITEM_SELECTED_CLASS;
        this.useActivatedClass && (i = Ye.LIST_ITEM_ACTIVATED_CLASS), this.selectedIndex !== Ct.UNSET_INDEX && this.adapter.removeClassForElementIndex(this.selectedIndex, i), this.setAriaForSingleSelectionAtIndex(n), this.setTabindexAtIndex(n), n !== Ct.UNSET_INDEX && this.adapter.addClassForElementIndex(n, i), this.selectedIndex = n, r.isUserInteraction && !r.forceUpdate && this.adapter.notifySelectionChange([n]);
      }
    }, e.prototype.setAriaForSingleSelectionAtIndex = function(n) {
      this.selectedIndex === Ct.UNSET_INDEX && (this.ariaCurrentAttrValue = this.adapter.getAttributeForElementIndex(n, Tr.ARIA_CURRENT));
      var r = this.ariaCurrentAttrValue !== null, i = r ? Tr.ARIA_CURRENT : Tr.ARIA_SELECTED;
      if (this.selectedIndex !== Ct.UNSET_INDEX && this.adapter.setAttributeForElementIndex(this.selectedIndex, i, "false"), n !== Ct.UNSET_INDEX) {
        var a = r ? this.ariaCurrentAttrValue : "true";
        this.adapter.setAttributeForElementIndex(n, i, a);
      }
    }, e.prototype.getSelectionAttribute = function() {
      return this.useSelectedAttr ? Tr.ARIA_SELECTED : Tr.ARIA_CHECKED;
    }, e.prototype.setRadioAtIndex = function(n, r) {
      r === void 0 && (r = {});
      var i = this.getSelectionAttribute();
      this.adapter.setCheckedCheckboxOrRadioAtIndex(n, !0), !(this.selectedIndex === n && !r.forceUpdate) && (this.selectedIndex !== Ct.UNSET_INDEX && this.adapter.setAttributeForElementIndex(this.selectedIndex, i, "false"), this.adapter.setAttributeForElementIndex(n, i, "true"), this.selectedIndex = n, r.isUserInteraction && !r.forceUpdate && this.adapter.notifySelectionChange([n]));
    }, e.prototype.setCheckboxAtIndex = function(n, r) {
      r === void 0 && (r = {});
      for (var i = this.selectedIndex, a = r.isUserInteraction ? new Set(i === Ct.UNSET_INDEX ? [] : i) : null, o = this.getSelectionAttribute(), u = [], l = 0; l < this.adapter.getListItemCount(); l++) {
        var c = a == null ? void 0 : a.has(l), d = n.indexOf(l) >= 0;
        d !== c && u.push(l), this.adapter.setCheckedCheckboxOrRadioAtIndex(l, d), this.adapter.setAttributeForElementIndex(l, o, d ? "true" : "false");
      }
      this.selectedIndex = n, r.isUserInteraction && u.length && this.adapter.notifySelectionChange(u);
    }, e.prototype.toggleCheckboxRange = function(n, r, i) {
      this.lastSelectedIndex = i;
      for (var a = new Set(this.selectedIndex === Ct.UNSET_INDEX ? [] : this.selectedIndex), o = !(a != null && a.has(i)), u = yr([n, r].sort(), 2), l = u[0], c = u[1], d = this.getSelectionAttribute(), m = [], f = l; f <= c; f++)
        if (!this.isIndexDisabled(f)) {
          var g = a.has(f);
          o !== g && (m.push(f), this.adapter.setCheckedCheckboxOrRadioAtIndex(f, o), this.adapter.setAttributeForElementIndex(f, d, "" + o), o ? a.add(f) : a.delete(f));
        }
      m.length && (this.selectedIndex = er([], yr(a)), this.adapter.notifySelectionChange(m));
    }, e.prototype.setTabindexAtIndex = function(n) {
      this.focusedItemIndex === Ct.UNSET_INDEX && n !== 0 ? this.adapter.setAttributeForElementIndex(0, "tabindex", "-1") : this.focusedItemIndex >= 0 && this.focusedItemIndex !== n && this.adapter.setAttributeForElementIndex(this.focusedItemIndex, "tabindex", "-1"), !(this.selectedIndex instanceof Array) && this.selectedIndex !== n && this.adapter.setAttributeForElementIndex(this.selectedIndex, "tabindex", "-1"), n !== Ct.UNSET_INDEX && this.adapter.setAttributeForElementIndex(n, "tabindex", "0");
    }, e.prototype.isSelectableList = function() {
      return this.isSingleSelectionList || this.isCheckboxList || this.isRadioList;
    }, e.prototype.setTabindexToFirstSelectedOrFocusedItem = function() {
      var n = this.getFirstSelectedOrFocusedItemIndex();
      this.setTabindexAtIndex(n);
    }, e.prototype.getFirstSelectedOrFocusedItemIndex = function() {
      return this.isSelectableList() ? typeof this.selectedIndex == "number" && this.selectedIndex !== Ct.UNSET_INDEX ? this.selectedIndex : rp(this.selectedIndex) && this.selectedIndex.length > 0 ? this.selectedIndex.reduce(function(n, r) {
        return Math.min(n, r);
      }) : 0 : Math.max(this.focusedItemIndex, 0);
    }, e.prototype.isIndexValid = function(n, r) {
      var i = this;
      if (r === void 0 && (r = !0), n instanceof Array) {
        if (!this.isCheckboxList && r)
          throw new Error("MDCListFoundation: Array of index is only supported for checkbox based list");
        return n.length === 0 ? !0 : n.some(function(a) {
          return i.isIndexInRange(a);
        });
      } else if (typeof n == "number") {
        if (this.isCheckboxList && r)
          throw new Error("MDCListFoundation: Expected array of index for checkbox based list but got number: " + n);
        return this.isIndexInRange(n) || this.isSingleSelectionList && n === Ct.UNSET_INDEX;
      } else
        return !1;
    }, e.prototype.isIndexInRange = function(n) {
      var r = this.adapter.getListItemCount();
      return n >= 0 && n < r;
    }, e.prototype.setSelectedIndexOnAction = function(n, r) {
      this.lastSelectedIndex = n, this.isCheckboxList ? (this.toggleCheckboxAtIndex(n, r), this.adapter.notifySelectionChange([n])) : this.setSelectedIndex(n, { isUserInteraction: !0 });
    }, e.prototype.toggleCheckboxAtIndex = function(n, r) {
      var i = this.getSelectionAttribute(), a = this.adapter.isCheckboxCheckedAtIndex(n), o;
      r ? o = a : (o = !a, this.adapter.setCheckedCheckboxOrRadioAtIndex(n, o)), this.adapter.setAttributeForElementIndex(n, i, o ? "true" : "false");
      var u = this.selectedIndex === Ct.UNSET_INDEX ? [] : this.selectedIndex.slice();
      o ? u.push(n) : u = u.filter(function(l) {
        return l !== n;
      }), this.selectedIndex = u;
    }, e.prototype.focusItemAtIndex = function(n) {
      this.adapter.focusItemAtIndex(n), this.focusedItemIndex = n;
    }, e.prototype.checkboxListToggleAll = function(n, r) {
      var i = this.adapter.getListItemCount();
      if (n.length === i)
        this.setCheckboxAtIndex([], { isUserInteraction: r });
      else {
        for (var a = [], o = 0; o < i; o++)
          (!this.isIndexDisabled(o) || n.indexOf(o) > -1) && a.push(o);
        this.setCheckboxAtIndex(a, { isUserInteraction: r });
      }
    }, e.prototype.typeaheadMatchItem = function(n, r, i) {
      var a = this;
      i === void 0 && (i = !1);
      var o = {
        focusItemAtIndex: function(u) {
          a.focusItemAtIndex(u);
        },
        focusedItemIndex: r || this.focusedItemIndex,
        nextChar: n,
        sortedIndexByFirstChar: this.sortedIndexByFirstChar,
        skipFocus: i,
        isItemAtIndexDisabled: function(u) {
          return a.isIndexDisabled(u);
        }
      };
      return ks(o, this.typeaheadState);
    }, e.prototype.typeaheadInitSortedIndex = function() {
      return ep(this.adapter.getListItemCount(), this.adapter.getPrimaryTextAtIndex);
    }, e.prototype.clearTypeaheadBuffer = function() {
      fd(this.typeaheadState);
    }, e;
  }(wt)
);
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
var hd = (
  /** @class */
  function(t) {
    Ke(e, t);
    function e(n) {
      var r = t.call(this, pe(pe({}, e.defaultAdapter), n)) || this;
      return r.isSurfaceOpen = !1, r.isQuickOpen = !1, r.isHoistedElement = !1, r.isFixedPosition = !1, r.isHorizontallyCenteredOnViewport = !1, r.maxHeight = 0, r.openBottomBias = 0, r.openAnimationEndTimerId = 0, r.closeAnimationEndTimerId = 0, r.animationRequestId = 0, r.anchorCorner = ci.TOP_START, r.originCorner = ci.TOP_START, r.anchorMargin = { top: 0, right: 0, bottom: 0, left: 0 }, r.position = { x: 0, y: 0 }, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Yg;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Qg;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return _a;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "Corner", {
      get: function() {
        return ci;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
      /**
       * @see {@link MDCMenuSurfaceAdapter} for typing information on parameters and return types.
       */
      get: function() {
        return {
          addClass: function() {
          },
          removeClass: function() {
          },
          hasClass: function() {
            return !1;
          },
          hasAnchor: function() {
            return !1;
          },
          isElementInContainer: function() {
            return !1;
          },
          isFocused: function() {
            return !1;
          },
          isRtl: function() {
            return !1;
          },
          getInnerDimensions: function() {
            return { height: 0, width: 0 };
          },
          getAnchorDimensions: function() {
            return null;
          },
          getWindowDimensions: function() {
            return { height: 0, width: 0 };
          },
          getBodyDimensions: function() {
            return { height: 0, width: 0 };
          },
          getWindowScroll: function() {
            return { x: 0, y: 0 };
          },
          setPosition: function() {
          },
          setMaxHeight: function() {
          },
          setTransformOrigin: function() {
          },
          saveFocus: function() {
          },
          restoreFocus: function() {
          },
          notifyClose: function() {
          },
          notifyClosing: function() {
          },
          notifyOpen: function() {
          },
          notifyOpening: function() {
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.init = function() {
      var n = e.cssClasses, r = n.ROOT, i = n.OPEN;
      if (!this.adapter.hasClass(r))
        throw new Error(r + " class required in root element.");
      this.adapter.hasClass(i) && (this.isSurfaceOpen = !0);
    }, e.prototype.destroy = function() {
      clearTimeout(this.openAnimationEndTimerId), clearTimeout(this.closeAnimationEndTimerId), cancelAnimationFrame(this.animationRequestId);
    }, e.prototype.setAnchorCorner = function(n) {
      this.anchorCorner = n;
    }, e.prototype.flipCornerHorizontally = function() {
      this.originCorner = this.originCorner ^ Tt.RIGHT;
    }, e.prototype.setAnchorMargin = function(n) {
      this.anchorMargin.top = n.top || 0, this.anchorMargin.right = n.right || 0, this.anchorMargin.bottom = n.bottom || 0, this.anchorMargin.left = n.left || 0;
    }, e.prototype.setIsHoisted = function(n) {
      this.isHoistedElement = n;
    }, e.prototype.setFixedPosition = function(n) {
      this.isFixedPosition = n;
    }, e.prototype.isFixed = function() {
      return this.isFixedPosition;
    }, e.prototype.setAbsolutePosition = function(n, r) {
      this.position.x = this.isFinite(n) ? n : 0, this.position.y = this.isFinite(r) ? r : 0;
    }, e.prototype.setIsHorizontallyCenteredOnViewport = function(n) {
      this.isHorizontallyCenteredOnViewport = n;
    }, e.prototype.setQuickOpen = function(n) {
      this.isQuickOpen = n;
    }, e.prototype.setMaxHeight = function(n) {
      this.maxHeight = n;
    }, e.prototype.setOpenBottomBias = function(n) {
      this.openBottomBias = n;
    }, e.prototype.isOpen = function() {
      return this.isSurfaceOpen;
    }, e.prototype.open = function() {
      var n = this;
      this.isSurfaceOpen || (this.adapter.notifyOpening(), this.adapter.saveFocus(), this.isQuickOpen ? (this.isSurfaceOpen = !0, this.adapter.addClass(e.cssClasses.OPEN), this.dimensions = this.adapter.getInnerDimensions(), this.autoposition(), this.adapter.notifyOpen()) : (this.adapter.addClass(e.cssClasses.ANIMATING_OPEN), this.animationRequestId = requestAnimationFrame(function() {
        n.dimensions = n.adapter.getInnerDimensions(), n.autoposition(), n.adapter.addClass(e.cssClasses.OPEN), n.openAnimationEndTimerId = setTimeout(function() {
          n.openAnimationEndTimerId = 0, n.adapter.removeClass(e.cssClasses.ANIMATING_OPEN), n.adapter.notifyOpen();
        }, _a.TRANSITION_OPEN_DURATION);
      }), this.isSurfaceOpen = !0));
    }, e.prototype.close = function(n) {
      var r = this;
      if (n === void 0 && (n = !1), !!this.isSurfaceOpen) {
        if (this.adapter.notifyClosing(), this.isQuickOpen) {
          this.isSurfaceOpen = !1, n || this.maybeRestoreFocus(), this.adapter.removeClass(e.cssClasses.OPEN), this.adapter.removeClass(e.cssClasses.IS_OPEN_BELOW), this.adapter.notifyClose();
          return;
        }
        this.adapter.addClass(e.cssClasses.ANIMATING_CLOSED), requestAnimationFrame(function() {
          r.adapter.removeClass(e.cssClasses.OPEN), r.adapter.removeClass(e.cssClasses.IS_OPEN_BELOW), r.closeAnimationEndTimerId = setTimeout(function() {
            r.closeAnimationEndTimerId = 0, r.adapter.removeClass(e.cssClasses.ANIMATING_CLOSED), r.adapter.notifyClose();
          }, _a.TRANSITION_CLOSE_DURATION);
        }), this.isSurfaceOpen = !1, n || this.maybeRestoreFocus();
      }
    }, e.prototype.handleBodyClick = function(n) {
      var r = n.target;
      this.adapter.isElementInContainer(r) || this.close();
    }, e.prototype.handleKeydown = function(n) {
      var r = n.keyCode, i = n.key, a = i === "Escape" || r === 27;
      a && this.close();
    }, e.prototype.autoposition = function() {
      var n;
      this.measurements = this.getAutoLayoutmeasurements();
      var r = this.getoriginCorner(), i = this.getMenuSurfaceMaxHeight(r), a = this.hasBit(r, Tt.BOTTOM) ? "bottom" : "top", o = this.hasBit(r, Tt.RIGHT) ? "right" : "left", u = this.getHorizontalOriginOffset(r), l = this.getVerticalOriginOffset(r), c = this.measurements, d = c.anchorSize, m = c.surfaceSize, f = (n = {}, n[o] = u, n[a] = l, n);
      d.width / m.width > _a.ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO && (o = "center"), (this.isHoistedElement || this.isFixedPosition) && this.adjustPositionForHoistedElement(f), this.adapter.setTransformOrigin(o + " " + a), this.adapter.setPosition(f), this.adapter.setMaxHeight(i ? i + "px" : ""), this.hasBit(r, Tt.BOTTOM) || this.adapter.addClass(e.cssClasses.IS_OPEN_BELOW);
    }, e.prototype.getAutoLayoutmeasurements = function() {
      var n = this.adapter.getAnchorDimensions(), r = this.adapter.getBodyDimensions(), i = this.adapter.getWindowDimensions(), a = this.adapter.getWindowScroll();
      return n || (n = {
        top: this.position.y,
        right: this.position.x,
        bottom: this.position.y,
        left: this.position.x,
        width: 0,
        height: 0
      }), {
        anchorSize: n,
        bodySize: r,
        surfaceSize: this.dimensions,
        viewportDistance: {
          // tslint:disable:object-literal-sort-keys Positional properties are more readable when they're grouped together
          top: n.top,
          right: i.width - n.right,
          bottom: i.height - n.bottom,
          left: n.left
          // tslint:enable:object-literal-sort-keys
        },
        viewportSize: i,
        windowScroll: a
      };
    }, e.prototype.getoriginCorner = function() {
      var n = this.originCorner, r = this.measurements, i = r.viewportDistance, a = r.anchorSize, o = r.surfaceSize, u = e.numbers.MARGIN_TO_EDGE, l = this.hasBit(this.anchorCorner, Tt.BOTTOM), c, d;
      l ? (c = i.top - u + this.anchorMargin.bottom, d = i.bottom - u - this.anchorMargin.bottom) : (c = i.top - u + this.anchorMargin.top, d = i.bottom - u + a.height - this.anchorMargin.top);
      var m = d - o.height > 0;
      !m && c > d + this.openBottomBias && (n = this.setBit(n, Tt.BOTTOM));
      var f = this.adapter.isRtl(), g = this.hasBit(this.anchorCorner, Tt.FLIP_RTL), h = this.hasBit(this.anchorCorner, Tt.RIGHT) || this.hasBit(n, Tt.RIGHT), p = !1;
      f && g ? p = !h : p = h;
      var b, y;
      p ? (b = i.left + a.width + this.anchorMargin.right, y = i.right - this.anchorMargin.right) : (b = i.left + this.anchorMargin.left, y = i.right + a.width - this.anchorMargin.left);
      var E = b - o.width > 0, S = y - o.width > 0, _ = this.hasBit(n, Tt.FLIP_RTL) && this.hasBit(n, Tt.RIGHT);
      return S && _ && f || !E && _ ? n = this.unsetBit(n, Tt.RIGHT) : (E && p && f || E && !p && h || !S && b >= y) && (n = this.setBit(n, Tt.RIGHT)), n;
    }, e.prototype.getMenuSurfaceMaxHeight = function(n) {
      if (this.maxHeight > 0)
        return this.maxHeight;
      var r = this.measurements.viewportDistance, i = 0, a = this.hasBit(n, Tt.BOTTOM), o = this.hasBit(this.anchorCorner, Tt.BOTTOM), u = e.numbers.MARGIN_TO_EDGE;
      return a ? (i = r.top + this.anchorMargin.top - u, o || (i += this.measurements.anchorSize.height)) : (i = r.bottom - this.anchorMargin.bottom + this.measurements.anchorSize.height - u, o && (i -= this.measurements.anchorSize.height)), i;
    }, e.prototype.getHorizontalOriginOffset = function(n) {
      var r = this.measurements.anchorSize, i = this.hasBit(n, Tt.RIGHT), a = this.hasBit(this.anchorCorner, Tt.RIGHT);
      if (i) {
        var o = a ? r.width - this.anchorMargin.left : this.anchorMargin.right;
        return this.isHoistedElement || this.isFixedPosition ? o - (this.measurements.viewportSize.width - this.measurements.bodySize.width) : o;
      }
      return a ? r.width - this.anchorMargin.right : this.anchorMargin.left;
    }, e.prototype.getVerticalOriginOffset = function(n) {
      var r = this.measurements.anchorSize, i = this.hasBit(n, Tt.BOTTOM), a = this.hasBit(this.anchorCorner, Tt.BOTTOM), o = 0;
      return i ? o = a ? r.height - this.anchorMargin.top : -this.anchorMargin.bottom : o = a ? r.height + this.anchorMargin.bottom : this.anchorMargin.top, o;
    }, e.prototype.adjustPositionForHoistedElement = function(n) {
      var r, i, a = this.measurements, o = a.windowScroll, u = a.viewportDistance, l = a.surfaceSize, c = a.viewportSize, d = Object.keys(n);
      try {
        for (var m = Bt(d), f = m.next(); !f.done; f = m.next()) {
          var g = f.value, h = n[g] || 0;
          if (this.isHorizontallyCenteredOnViewport && (g === "left" || g === "right")) {
            n[g] = (c.width - l.width) / 2;
            continue;
          }
          h += u[g], this.isFixedPosition || (g === "top" ? h += o.y : g === "bottom" ? h -= o.y : g === "left" ? h += o.x : h -= o.x), n[g] = h;
        }
      } catch (p) {
        r = { error: p };
      } finally {
        try {
          f && !f.done && (i = m.return) && i.call(m);
        } finally {
          if (r) throw r.error;
        }
      }
    }, e.prototype.maybeRestoreFocus = function() {
      var n = this, r = this.adapter.isFocused(), i = this.adapter.getOwnerDocument ? this.adapter.getOwnerDocument() : document, a = i.activeElement && this.adapter.isElementInContainer(i.activeElement);
      (r || a) && setTimeout(function() {
        n.adapter.restoreFocus();
      }, _a.TOUCH_EVENT_WAIT_MS);
    }, e.prototype.hasBit = function(n, r) {
      return !!(n & r);
    }, e.prototype.setBit = function(n, r) {
      return n | r;
    }, e.prototype.unsetBit = function(n, r) {
      return n ^ r;
    }, e.prototype.isFinite = function(n) {
      return typeof n == "number" && isFinite(n);
    }, e;
  }(wt)
);
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
var mu = {
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
function op(t) {
  return !!t.document && typeof t.document.createElement == "function";
}
function sp(t, e) {
  if (op(t) && e in mu) {
    var n = t.document.createElement("div"), r = mu[e], i = r.standard, a = r.prefixed, o = i in n.style;
    return o ? i : a;
  }
  return e;
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
var Vi = {
  MENU_SELECTED_LIST_ITEM: "mdc-menu-item--selected",
  MENU_SELECTION_GROUP: "mdc-menu__selection-group",
  ROOT: "mdc-menu"
}, Oi = {
  ARIA_CHECKED_ATTR: "aria-checked",
  ARIA_DISABLED_ATTR: "aria-disabled",
  CHECKBOX_SELECTOR: 'input[type="checkbox"]',
  LIST_SELECTOR: ".mdc-list,.mdc-deprecated-list",
  SELECTED_EVENT: "MDCMenu:selected",
  SKIP_RESTORE_FOCUS: "data-menu-item-skip-restore-focus"
}, lp = {
  FOCUS_ROOT_INDEX: -1
}, Ni;
(function(t) {
  t[t.NONE = 0] = "NONE", t[t.LIST_ROOT = 1] = "LIST_ROOT", t[t.FIRST_ITEM = 2] = "FIRST_ITEM", t[t.LAST_ITEM = 3] = "LAST_ITEM";
})(Ni || (Ni = {}));
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
var up = (
  /** @class */
  function(t) {
    Ke(e, t);
    function e(n) {
      var r = t.call(this, pe(pe({}, e.defaultAdapter), n)) || this;
      return r.closeAnimationEndTimerId = 0, r.defaultFocusState = Ni.LIST_ROOT, r.selectedIndex = -1, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Vi;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Oi;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return lp;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
      /**
       * @see {@link MDCMenuAdapter} for typing information on parameters and return types.
       */
      get: function() {
        return {
          addClassToElementAtIndex: function() {
          },
          removeClassFromElementAtIndex: function() {
          },
          addAttributeToElementAtIndex: function() {
          },
          removeAttributeFromElementAtIndex: function() {
          },
          getAttributeFromElementAtIndex: function() {
            return null;
          },
          elementContainsClass: function() {
            return !1;
          },
          closeSurface: function() {
          },
          getElementIndex: function() {
            return -1;
          },
          notifySelected: function() {
          },
          getMenuItemCount: function() {
            return 0;
          },
          focusItemAtIndex: function() {
          },
          focusListRoot: function() {
          },
          getSelectedSiblingOfItemAtIndex: function() {
            return -1;
          },
          isSelectableItemAtIndex: function() {
            return !1;
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.destroy = function() {
      this.closeAnimationEndTimerId && clearTimeout(this.closeAnimationEndTimerId), this.adapter.closeSurface();
    }, e.prototype.handleKeydown = function(n) {
      var r = n.key, i = n.keyCode, a = r === "Tab" || i === 9;
      a && this.adapter.closeSurface(
        /** skipRestoreFocus */
        !0
      );
    }, e.prototype.handleItemAction = function(n) {
      var r = this, i = this.adapter.getElementIndex(n);
      if (!(i < 0)) {
        this.adapter.notifySelected({ index: i });
        var a = this.adapter.getAttributeFromElementAtIndex(i, Oi.SKIP_RESTORE_FOCUS) === "true";
        this.adapter.closeSurface(a), this.closeAnimationEndTimerId = setTimeout(function() {
          var o = r.adapter.getElementIndex(n);
          o >= 0 && r.adapter.isSelectableItemAtIndex(o) && r.setSelectedIndex(o);
        }, hd.numbers.TRANSITION_CLOSE_DURATION);
      }
    }, e.prototype.handleMenuSurfaceOpened = function() {
      switch (this.defaultFocusState) {
        case Ni.FIRST_ITEM:
          this.adapter.focusItemAtIndex(0);
          break;
        case Ni.LAST_ITEM:
          this.adapter.focusItemAtIndex(this.adapter.getMenuItemCount() - 1);
          break;
        case Ni.NONE:
          break;
        default:
          this.adapter.focusListRoot();
          break;
      }
    }, e.prototype.setDefaultFocusState = function(n) {
      this.defaultFocusState = n;
    }, e.prototype.getSelectedIndex = function() {
      return this.selectedIndex;
    }, e.prototype.setSelectedIndex = function(n) {
      if (this.validatedIndex(n), !this.adapter.isSelectableItemAtIndex(n))
        throw new Error("MDCMenuFoundation: No selection group at specified index.");
      var r = this.adapter.getSelectedSiblingOfItemAtIndex(n);
      r >= 0 && (this.adapter.removeAttributeFromElementAtIndex(r, Oi.ARIA_CHECKED_ATTR), this.adapter.removeClassFromElementAtIndex(r, Vi.MENU_SELECTED_LIST_ITEM)), this.adapter.addClassToElementAtIndex(n, Vi.MENU_SELECTED_LIST_ITEM), this.adapter.addAttributeToElementAtIndex(n, Oi.ARIA_CHECKED_ATTR, "true"), this.selectedIndex = n;
    }, e.prototype.setEnabled = function(n, r) {
      this.validatedIndex(n), r ? (this.adapter.removeClassFromElementAtIndex(n, Ye.LIST_ITEM_DISABLED_CLASS), this.adapter.addAttributeToElementAtIndex(n, Oi.ARIA_DISABLED_ATTR, "false")) : (this.adapter.addClassToElementAtIndex(n, Ye.LIST_ITEM_DISABLED_CLASS), this.adapter.addAttributeToElementAtIndex(n, Oi.ARIA_DISABLED_ATTR, "true"));
    }, e.prototype.validatedIndex = function(n) {
      var r = this.adapter.getMenuItemCount(), i = n >= 0 && n < r;
      if (!i)
        throw new Error("MDCMenuFoundation: No list item at specified index.");
    }, e;
  }(wt)
);
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
var It = {
  ACTIVATED: "mdc-select--activated",
  DISABLED: "mdc-select--disabled",
  FOCUSED: "mdc-select--focused",
  INVALID: "mdc-select--invalid",
  MENU_INVALID: "mdc-select__menu--invalid",
  OUTLINED: "mdc-select--outlined",
  REQUIRED: "mdc-select--required",
  ROOT: "mdc-select",
  WITH_LEADING_ICON: "mdc-select--with-leading-icon"
}, ss = {
  ARIA_CONTROLS: "aria-controls",
  ARIA_DESCRIBEDBY: "aria-describedby",
  ARIA_SELECTED_ATTR: "aria-selected",
  CHANGE_EVENT: "MDCSelect:change",
  HIDDEN_INPUT_SELECTOR: 'input[type="hidden"]',
  LABEL_SELECTOR: ".mdc-floating-label",
  LEADING_ICON_SELECTOR: ".mdc-select__icon",
  LINE_RIPPLE_SELECTOR: ".mdc-line-ripple",
  MENU_SELECTOR: ".mdc-select__menu",
  OUTLINE_SELECTOR: ".mdc-notched-outline",
  SELECTED_TEXT_SELECTOR: ".mdc-select__selected-text",
  SELECT_ANCHOR_SELECTOR: ".mdc-select__anchor",
  VALUE_ATTR: "data-value"
}, Jr = {
  LABEL_SCALE: 0.75,
  UNSET_INDEX: -1,
  CLICK_DEBOUNCE_TIMEOUT_MS: 330
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
var cp = (
  /** @class */
  function(t) {
    Ke(e, t);
    function e(n, r) {
      r === void 0 && (r = {});
      var i = t.call(this, pe(pe({}, e.defaultAdapter), n)) || this;
      return i.disabled = !1, i.isMenuOpen = !1, i.useDefaultValidation = !0, i.customValidity = !0, i.lastSelectedIndex = Jr.UNSET_INDEX, i.clickDebounceTimeout = 0, i.recentlyClicked = !1, i.leadingIcon = r.leadingIcon, i.helperText = r.helperText, i;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return It;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return Jr;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return ss;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
      /**
       * See {@link MDCSelectAdapter} for typing information on parameters and return types.
       */
      get: function() {
        return {
          addClass: function() {
          },
          removeClass: function() {
          },
          hasClass: function() {
            return !1;
          },
          activateBottomLine: function() {
          },
          deactivateBottomLine: function() {
          },
          getSelectedIndex: function() {
            return -1;
          },
          setSelectedIndex: function() {
          },
          hasLabel: function() {
            return !1;
          },
          floatLabel: function() {
          },
          getLabelWidth: function() {
            return 0;
          },
          setLabelRequired: function() {
          },
          hasOutline: function() {
            return !1;
          },
          notchOutline: function() {
          },
          closeOutline: function() {
          },
          setRippleCenter: function() {
          },
          notifyChange: function() {
          },
          setSelectedText: function() {
          },
          isSelectAnchorFocused: function() {
            return !1;
          },
          getSelectAnchorAttr: function() {
            return "";
          },
          setSelectAnchorAttr: function() {
          },
          removeSelectAnchorAttr: function() {
          },
          addMenuClass: function() {
          },
          removeMenuClass: function() {
          },
          openMenu: function() {
          },
          closeMenu: function() {
          },
          getAnchorElement: function() {
            return null;
          },
          setMenuAnchorElement: function() {
          },
          setMenuAnchorCorner: function() {
          },
          setMenuWrapFocus: function() {
          },
          focusMenuItemAtIndex: function() {
          },
          getMenuItemCount: function() {
            return 0;
          },
          getMenuItemValues: function() {
            return [];
          },
          getMenuItemTextAtIndex: function() {
            return "";
          },
          isTypeaheadInProgress: function() {
            return !1;
          },
          typeaheadMatchItem: function() {
            return -1;
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.getSelectedIndex = function() {
      return this.adapter.getSelectedIndex();
    }, e.prototype.setSelectedIndex = function(n, r, i) {
      r === void 0 && (r = !1), i === void 0 && (i = !1), !(n >= this.adapter.getMenuItemCount()) && (n === Jr.UNSET_INDEX ? this.adapter.setSelectedText("") : this.adapter.setSelectedText(this.adapter.getMenuItemTextAtIndex(n).trim()), this.adapter.setSelectedIndex(n), r && this.adapter.closeMenu(), !i && this.lastSelectedIndex !== n && this.handleChange(), this.lastSelectedIndex = n);
    }, e.prototype.setValue = function(n, r) {
      r === void 0 && (r = !1);
      var i = this.adapter.getMenuItemValues().indexOf(n);
      this.setSelectedIndex(
        i,
        /** closeMenu */
        !1,
        r
      );
    }, e.prototype.getValue = function() {
      var n = this.adapter.getSelectedIndex(), r = this.adapter.getMenuItemValues();
      return n !== Jr.UNSET_INDEX ? r[n] : "";
    }, e.prototype.getDisabled = function() {
      return this.disabled;
    }, e.prototype.setDisabled = function(n) {
      this.disabled = n, this.disabled ? (this.adapter.addClass(It.DISABLED), this.adapter.closeMenu()) : this.adapter.removeClass(It.DISABLED), this.leadingIcon && this.leadingIcon.setDisabled(this.disabled), this.disabled ? this.adapter.removeSelectAnchorAttr("tabindex") : this.adapter.setSelectAnchorAttr("tabindex", "0"), this.adapter.setSelectAnchorAttr("aria-disabled", this.disabled.toString());
    }, e.prototype.openMenu = function() {
      this.adapter.addClass(It.ACTIVATED), this.adapter.openMenu(), this.isMenuOpen = !0, this.adapter.setSelectAnchorAttr("aria-expanded", "true");
    }, e.prototype.setHelperTextContent = function(n) {
      this.helperText && this.helperText.setContent(n);
    }, e.prototype.layout = function() {
      if (this.adapter.hasLabel()) {
        var n = this.getValue().length > 0, r = this.adapter.hasClass(It.FOCUSED), i = n || r, a = this.adapter.hasClass(It.REQUIRED);
        this.notchOutline(i), this.adapter.floatLabel(i), this.adapter.setLabelRequired(a);
      }
    }, e.prototype.layoutOptions = function() {
      var n = this.adapter.getMenuItemValues(), r = n.indexOf(this.getValue());
      this.setSelectedIndex(
        r,
        /** closeMenu */
        !1,
        /** skipNotify */
        !0
      );
    }, e.prototype.handleMenuOpened = function() {
      if (this.adapter.getMenuItemValues().length !== 0) {
        var n = this.getSelectedIndex(), r = n >= 0 ? n : 0;
        this.adapter.focusMenuItemAtIndex(r);
      }
    }, e.prototype.handleMenuClosing = function() {
      this.adapter.setSelectAnchorAttr("aria-expanded", "false");
    }, e.prototype.handleMenuClosed = function() {
      this.adapter.removeClass(It.ACTIVATED), this.isMenuOpen = !1, this.adapter.isSelectAnchorFocused() || this.blur();
    }, e.prototype.handleChange = function() {
      this.layout(), this.adapter.notifyChange(this.getValue());
      var n = this.adapter.hasClass(It.REQUIRED);
      n && this.useDefaultValidation && this.setValid(this.isValid());
    }, e.prototype.handleMenuItemAction = function(n) {
      this.setSelectedIndex(
        n,
        /** closeMenu */
        !0
      );
    }, e.prototype.handleFocus = function() {
      this.adapter.addClass(It.FOCUSED), this.layout(), this.adapter.activateBottomLine();
    }, e.prototype.handleBlur = function() {
      this.isMenuOpen || this.blur();
    }, e.prototype.handleClick = function(n) {
      if (!(this.disabled || this.recentlyClicked)) {
        if (this.setClickDebounceTimeout(), this.isMenuOpen) {
          this.adapter.closeMenu();
          return;
        }
        this.adapter.setRippleCenter(n), this.openMenu();
      }
    }, e.prototype.handleKeydown = function(n) {
      if (!(this.isMenuOpen || !this.adapter.hasClass(It.FOCUSED))) {
        var r = Ot(n) === Ge.ENTER, i = Ot(n) === Ge.SPACEBAR, a = Ot(n) === Ge.ARROW_UP, o = Ot(n) === Ge.ARROW_DOWN, u = n.ctrlKey || n.metaKey;
        if (!u && (!i && n.key && n.key.length === 1 || i && this.adapter.isTypeaheadInProgress())) {
          var l = i ? " " : n.key, c = this.adapter.typeaheadMatchItem(l, this.getSelectedIndex());
          c >= 0 && this.setSelectedIndex(c), n.preventDefault();
          return;
        }
        !r && !i && !a && !o || (this.openMenu(), n.preventDefault());
      }
    }, e.prototype.notchOutline = function(n) {
      if (this.adapter.hasOutline()) {
        var r = this.adapter.hasClass(It.FOCUSED);
        if (n) {
          var i = Jr.LABEL_SCALE, a = this.adapter.getLabelWidth() * i;
          this.adapter.notchOutline(a);
        } else r || this.adapter.closeOutline();
      }
    }, e.prototype.setLeadingIconAriaLabel = function(n) {
      this.leadingIcon && this.leadingIcon.setAriaLabel(n);
    }, e.prototype.setLeadingIconContent = function(n) {
      this.leadingIcon && this.leadingIcon.setContent(n);
    }, e.prototype.getUseDefaultValidation = function() {
      return this.useDefaultValidation;
    }, e.prototype.setUseDefaultValidation = function(n) {
      this.useDefaultValidation = n;
    }, e.prototype.setValid = function(n) {
      this.useDefaultValidation || (this.customValidity = n), this.adapter.setSelectAnchorAttr("aria-invalid", (!n).toString()), n ? (this.adapter.removeClass(It.INVALID), this.adapter.removeMenuClass(It.MENU_INVALID)) : (this.adapter.addClass(It.INVALID), this.adapter.addMenuClass(It.MENU_INVALID)), this.syncHelperTextValidity(n);
    }, e.prototype.isValid = function() {
      return this.useDefaultValidation && this.adapter.hasClass(It.REQUIRED) && !this.adapter.hasClass(It.DISABLED) ? this.getSelectedIndex() !== Jr.UNSET_INDEX && (this.getSelectedIndex() !== 0 || !!this.getValue()) : this.customValidity;
    }, e.prototype.setRequired = function(n) {
      n ? this.adapter.addClass(It.REQUIRED) : this.adapter.removeClass(It.REQUIRED), this.adapter.setSelectAnchorAttr("aria-required", n.toString()), this.adapter.setLabelRequired(n);
    }, e.prototype.getRequired = function() {
      return this.adapter.getSelectAnchorAttr("aria-required") === "true";
    }, e.prototype.init = function() {
      var n = this.adapter.getAnchorElement();
      n && (this.adapter.setMenuAnchorElement(n), this.adapter.setMenuAnchorCorner(ci.BOTTOM_START)), this.adapter.setMenuWrapFocus(!1), this.setDisabled(this.adapter.hasClass(It.DISABLED)), this.syncHelperTextValidity(!this.adapter.hasClass(It.INVALID)), this.layout(), this.layoutOptions();
    }, e.prototype.blur = function() {
      this.adapter.removeClass(It.FOCUSED), this.layout(), this.adapter.deactivateBottomLine();
      var n = this.adapter.hasClass(It.REQUIRED);
      n && this.useDefaultValidation && this.setValid(this.isValid());
    }, e.prototype.syncHelperTextValidity = function(n) {
      if (this.helperText) {
        this.helperText.setValidity(n);
        var r = this.helperText.isVisible(), i = this.helperText.getId();
        r && i ? this.adapter.setSelectAnchorAttr(ss.ARIA_DESCRIBEDBY, i) : this.adapter.removeSelectAnchorAttr(ss.ARIA_DESCRIBEDBY);
      }
    }, e.prototype.setClickDebounceTimeout = function() {
      var n = this;
      clearTimeout(this.clickDebounceTimeout), this.clickDebounceTimeout = setTimeout(function() {
        n.recentlyClicked = !1;
      }, Jr.CLICK_DEBOUNCE_TIMEOUT_MS), this.recentlyClicked = !0;
    }, e;
  }(wt)
);
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
var $r = {
  ARIA_HIDDEN: "aria-hidden",
  ROLE: "role"
}, cr = {
  HELPER_TEXT_VALIDATION_MSG: "mdc-select-helper-text--validation-msg",
  HELPER_TEXT_VALIDATION_MSG_PERSISTENT: "mdc-select-helper-text--validation-msg-persistent"
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
var dp = (
  /** @class */
  function(t) {
    Ke(e, t);
    function e(n) {
      return t.call(this, pe(pe({}, e.defaultAdapter), n)) || this;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return cr;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return $r;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
      /**
       * See {@link MDCSelectHelperTextAdapter} for typing information on parameters and return types.
       */
      get: function() {
        return {
          addClass: function() {
          },
          removeClass: function() {
          },
          hasClass: function() {
            return !1;
          },
          setAttr: function() {
          },
          getAttr: function() {
            return null;
          },
          removeAttr: function() {
          },
          setContent: function() {
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.getId = function() {
      return this.adapter.getAttr("id");
    }, e.prototype.isVisible = function() {
      return this.adapter.getAttr($r.ARIA_HIDDEN) !== "true";
    }, e.prototype.setContent = function(n) {
      this.adapter.setContent(n);
    }, e.prototype.setValidation = function(n) {
      n ? this.adapter.addClass(cr.HELPER_TEXT_VALIDATION_MSG) : this.adapter.removeClass(cr.HELPER_TEXT_VALIDATION_MSG);
    }, e.prototype.setValidationMsgPersistent = function(n) {
      n ? this.adapter.addClass(cr.HELPER_TEXT_VALIDATION_MSG_PERSISTENT) : this.adapter.removeClass(cr.HELPER_TEXT_VALIDATION_MSG_PERSISTENT);
    }, e.prototype.getIsValidation = function() {
      return this.adapter.hasClass(cr.HELPER_TEXT_VALIDATION_MSG);
    }, e.prototype.getIsValidationMsgPersistent = function() {
      return this.adapter.hasClass(cr.HELPER_TEXT_VALIDATION_MSG_PERSISTENT);
    }, e.prototype.setValidity = function(n) {
      var r = this.adapter.hasClass(cr.HELPER_TEXT_VALIDATION_MSG);
      if (r) {
        var i = this.adapter.hasClass(cr.HELPER_TEXT_VALIDATION_MSG_PERSISTENT), a = !n || i;
        if (a) {
          this.showToScreenReader(), n ? this.adapter.removeAttr($r.ROLE) : this.adapter.setAttr($r.ROLE, "alert");
          return;
        }
        this.adapter.removeAttr($r.ROLE), this.hide();
      }
    }, e.prototype.showToScreenReader = function() {
      this.adapter.removeAttr($r.ARIA_HIDDEN);
    }, e.prototype.hide = function() {
      this.adapter.setAttr($r.ARIA_HIDDEN, "true");
    }, e;
  }(wt)
), fp = /* @__PURE__ */ de("<div><!></div>");
function hp(t, e) {
  we(e, !0);
  let n = v(e, "use", 19, () => []), r = v(e, "class", 3, ""), i = v(e, "style", 3, ""), a = v(e, "static", 3, !1), o = v(e, "anchor", 3, !0), u = v(e, "fixed", 3, !1), l = v(e, "open", 31, () => ye(a())), c = v(e, "managed", 3, !1), d = v(e, "fullWidth", 3, !1), m = v(e, "quickOpen", 3, !1), f = v(e, "anchorElement", 15), g = v(e, "anchorMargin", 19, () => ({ top: 0, right: 0, bottom: 0, left: 0 })), h = v(e, "maxHeight", 3, 0), p = v(e, "horizontallyCenteredOnViewport", 3, !1), b = v(e, "openBottomBias", 3, 0), y = v(e, "neverRestoreFocus", 3, !1), E = /* @__PURE__ */ je(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "style",
    "static",
    "anchor",
    "fixed",
    "open",
    "managed",
    "fullWidth",
    "quickOpen",
    "anchorElement",
    "anchorCorner",
    "anchorMargin",
    "maxHeight",
    "horizontallyCenteredOnViewport",
    "openBottomBias",
    "neverRestoreFocus",
    "children"
  ]), S, _ = /* @__PURE__ */ me(void 0), A = ye({}), I = ye({}), L = /* @__PURE__ */ me(void 0);
  ue("SMUI:list:role", "menu"), ue("SMUI:list:item:role", "menuitem"), Oe(() => {
    var D, ee;
    S && o() && !((D = S.parentElement) != null && D.classList.contains("mdc-menu-surface--anchor")) && ((ee = S.parentElement) == null || ee.classList.add("mdc-menu-surface--anchor"), f(S.parentElement ?? void 0));
  }), Oe(() => {
    s(_) && s(_).isOpen() !== l() && (l() ? s(_).open() : s(_).close());
  }), Oe(() => {
    s(_) && s(_).setQuickOpen(m());
  }), Oe(() => {
    s(_) && s(_).setFixedPosition(u());
  }), Oe(() => {
    s(_) && s(_).setMaxHeight(h());
  }), Oe(() => {
    s(_) && s(_).setIsHorizontallyCenteredOnViewport(p());
  });
  const C = ci;
  Oe(() => {
    s(_) && e.anchorCorner != null && (typeof e.anchorCorner == "string" ? s(_).setAnchorCorner(C[e.anchorCorner]) : s(_).setAnchorCorner(e.anchorCorner));
  }), Oe(() => {
    s(_) && s(_).setAnchorMargin(g());
  }), Oe(() => {
    s(_) && s(_).setOpenBottomBias(b());
  });
  const w = _e("SMUI:menu-surface:mount"), B = _e("SMUI:menu-surface:unmount");
  at(() => {
    X(
      _,
      new hd({
        addClass: q,
        removeClass: z,
        hasClass: $,
        hasAnchor: () => !!f(),
        notifyClose: () => {
          c() || l(a()), l() || Xe(W(), "SMUIMenuSurfaceClosed");
        },
        notifyClosing: () => {
          c() || l(a()), l() || Xe(W(), "SMUIMenuSurfaceClosing");
        },
        notifyOpen: () => {
          c() || l(!0), l() && Xe(W(), "SMUIMenuSurfaceOpened");
        },
        notifyOpening: () => {
          l() || Xe(W(), "SMUIMenuSurfaceOpening");
        },
        isElementInContainer: (ee) => W().contains(ee),
        isRtl: () => getComputedStyle(W()).getPropertyValue("direction") === "rtl",
        setTransformOrigin: (ee) => {
          I["transform-origin"] = ee;
        },
        isFocused: () => document.activeElement === W(),
        saveFocus: () => {
          X(L, document.activeElement ?? void 0, !0);
        },
        restoreFocus: () => {
          !y() && (!S || W().contains(document.activeElement)) && s(L) && document.contains(s(L)) && "focus" in s(L) && s(L).focus();
        },
        getInnerDimensions: () => ({
          width: W().offsetWidth,
          height: W().offsetHeight
        }),
        getAnchorDimensions: () => f() ? f().getBoundingClientRect() : null,
        getWindowDimensions: () => ({ width: window.innerWidth, height: window.innerHeight }),
        getBodyDimensions: () => ({
          width: document.body.clientWidth,
          height: document.body.clientHeight
        }),
        getWindowScroll: () => ({ x: window.pageXOffset, y: window.pageYOffset }),
        setPosition: (ee) => {
          I.left = "left" in ee ? `${ee.left}px` : "", I.right = "right" in ee ? `${ee.right}px` : "", I.top = "top" in ee ? `${ee.top}px` : "", I.bottom = "bottom" in ee ? `${ee.bottom}px` : "";
        },
        setMaxHeight: (ee) => {
          I["max-height"] = ee;
        }
      }),
      !0
    );
    const D = {
      get open() {
        return l();
      },
      set open(ee) {
        l(ee);
      },
      closeProgrammatic: O
    };
    return w && w(D), s(_).init(), () => {
      var J, ie;
      B && B(D);
      const ee = s(_).isHoistedElement;
      (J = s(_)) == null || J.destroy(), ee && ((ie = W().parentNode) == null || ie.removeChild(W()));
    };
  }), En(() => {
    var D;
    o() && W() && ((D = W().parentElement) == null || D.classList.remove("mdc-menu-surface--anchor"));
  });
  function $(D) {
    return D in A ? A[D] : W().classList.contains(D);
  }
  function q(D) {
    A[D] || (A[D] = !0);
  }
  function z(D) {
    (!(D in A) || A[D]) && (A[D] = !1);
  }
  function O(D) {
    var ee;
    (ee = s(_)) == null || ee.close(D), l(!1);
  }
  function x(D) {
    s(_) && l() && !c() && s(_).handleBodyClick(D);
  }
  function P() {
    return l();
  }
  function N(D) {
    l(D);
  }
  function K(D, ee) {
    if (s(_) == null)
      throw new Error("Instance is not defined.");
    return s(_).setAbsolutePosition(D, ee);
  }
  function ne(D) {
    if (s(_) == null)
      throw new Error("Instance is not defined.");
    return s(_).setIsHoisted(D);
  }
  function F() {
    if (s(_) == null)
      throw new Error("Instance is not defined.");
    return s(_).isFixed();
  }
  function R() {
    if (s(_) == null)
      throw new Error("Instance is not defined.");
    return s(_).flipCornerHorizontally();
  }
  function W() {
    return S;
  }
  var Ie = {
    isOpen: P,
    setOpen: N,
    setAbsolutePosition: K,
    setIsHoisted: ne,
    isFixed: F,
    flipCornerHorizontally: R,
    getElement: W
  }, V = fp();
  Jn("click", Js.body, x, !0);
  var H = (D) => {
    var ee;
    s(_) && !c() && s(_).handleKeydown(D), (ee = e.onkeydown) == null || ee.call(e, D);
  };
  ke(
    V,
    (D, ee) => ({
      class: D,
      style: ee,
      role: "dialog",
      ...E,
      onkeydown: H
    }),
    [
      () => He({
        "mdc-menu-surface": !0,
        "mdc-menu-surface--fixed": u(),
        "mdc-menu-surface--open": a(),
        "smui-menu-surface--static": a(),
        "mdc-menu-surface--fullwidth": d(),
        ...A,
        [r()]: !0
      }),
      () => Object.entries(I).map(([D, ee]) => `${D}: ${ee};`).concat([i()]).join(" ")
    ]
  );
  var M = ce(V);
  return Ae(M, () => e.children ?? ge), Ce(V, (D) => S = D, () => S), Ne(V, (D, ee) => Y == null ? void 0 : Y(D, ee), n), T(t, V), Le(Ie);
}
function ls(t, { addClass: e = (r) => t.classList.add(r), removeClass: n = (r) => t.classList.remove(r) } = {}) {
  return e("mdc-menu-surface--anchor"), {
    destroy() {
      n("mdc-menu-surface--anchor");
    }
  };
}
function vp(t, e) {
  we(e, !0);
  const { closest: n } = ua;
  let r = v(e, "use", 19, () => []), i = v(e, "class", 3, ""), a = v(e, "open", 15, !1), o = v(e, "anchorElement", 15), u = v(e, "managed", 3, !1), l = /* @__PURE__ */ je(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "open",
    "anchorElement",
    "managed",
    "children"
  ]), c, d = /* @__PURE__ */ me(void 0), m = /* @__PURE__ */ me(void 0), f = /* @__PURE__ */ me(void 0);
  ue("SMUI:menu-surface:mount", (C) => {
    s(m) || X(m, C, !0);
  });
  const g = _e("SMUI:list:mount");
  ue("SMUI:list:mount", (C) => {
    s(f) || X(f, C, !0), g && g(C);
  });
  const h = _e("SMUI:menu:mount"), p = _e("SMUI:menu:unmount");
  at(() => (X(
    d,
    new up({
      addClassToElementAtIndex: (C, w) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        s(f).addClassForElementIndex(C, w);
      },
      removeClassFromElementAtIndex: (C, w) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        s(f).removeClassForElementIndex(C, w);
      },
      addAttributeToElementAtIndex: (C, w, B) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        s(f).setAttributeForElementIndex(C, w, B);
      },
      removeAttributeFromElementAtIndex: (C, w) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        s(f).removeAttributeForElementIndex(C, w);
      },
      getAttributeFromElementAtIndex: (C, w) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        return s(f).getAttributeFromElementIndex(C, w);
      },
      elementContainsClass: (C, w) => C.classList.contains(w),
      closeSurface: (C) => {
        var w;
        u() || ((w = s(m)) == null || w.closeProgrammatic(C), Xe(I(), "SMUIMenuClosedProgrammatically"));
      },
      getElementIndex: (C) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        return s(f).getOrderedList().map((w) => w.element).indexOf(C);
      },
      notifySelected: (C) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        Xe(I(), "SMUIMenuSelected", {
          index: C.index,
          item: s(f).getOrderedList()[C.index].element
        });
      },
      getMenuItemCount: () => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        return s(f).items.length;
      },
      focusItemAtIndex: (C) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        s(f).focusItemAtIndex(C);
      },
      focusListRoot: () => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        "focus" in s(f).element && s(f).element.focus();
      },
      isSelectableItemAtIndex: (C) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        return !!n(s(f).getOrderedList()[C].element, `.${Vi.MENU_SELECTION_GROUP}`);
      },
      getSelectedSiblingOfItemAtIndex: (C) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        const w = s(f).getOrderedList(), B = n(w[C].element, `.${Vi.MENU_SELECTION_GROUP}`), $ = B == null ? void 0 : B.querySelector(`.${Vi.MENU_SELECTED_LIST_ITEM}`);
        return $ ? w.map((q) => q.element).indexOf($) : -1;
      }
    }),
    !0
  ), h && h(s(d)), s(d).init(), () => {
    var C;
    p && s(d) && p(s(d)), (C = s(d)) == null || C.destroy();
  }));
  function b(C) {
    s(d) && s(d).handleKeydown(C);
  }
  function y() {
    return a();
  }
  function E(C) {
    a(C);
  }
  function S(C) {
    if (s(d) == null)
      throw new Error("Instance is undefined.");
    s(d).setDefaultFocusState(C);
  }
  function _() {
    if (s(d) == null)
      throw new Error("Instance is undefined.");
    return s(d).getSelectedIndex();
  }
  function A() {
    return c;
  }
  function I() {
    return c.getElement();
  }
  var L = {
    isOpen: y,
    setOpen: E,
    setDefaultFocusState: S,
    getSelectedIndex: _,
    getMenuSurface: A,
    getElement: I
  };
  {
    let C = /* @__PURE__ */ ve(() => He({ "mdc-menu": !0, [i()]: !0 }));
    Ce(
      hp(t, $e(
        {
          get use() {
            return r();
          },
          get class() {
            return s(C);
          },
          get managed() {
            return u();
          }
        },
        () => l,
        {
          onkeydown: (w) => {
            var B;
            b(w), (B = e.onkeydown) == null || B.call(e, w);
          },
          onSMUIMenuSurfaceOpened: (w) => {
            var B;
            s(d) && s(d).handleMenuSurfaceOpened(), (B = e.onSMUIMenuSurfaceOpened) == null || B.call(e, w);
          },
          onSMUIListAction: (w) => {
            var B;
            s(d) && s(f) && s(d).handleItemAction(s(f).getOrderedList()[w.detail.index].element), (B = e.onSMUIListAction) == null || B.call(e, w);
          },
          get open() {
            return a();
          },
          set open(w) {
            a(w);
          },
          get anchorElement() {
            return o();
          },
          set anchorElement(w) {
            o(w);
          },
          children: (w, B) => {
            var $ = re(), q = Z($);
            Ae(q, () => e.children ?? ge), T(w, $);
          },
          $$slots: { default: !0 }
        }
      )),
      (w) => c = w,
      () => c
    );
  }
  return Le(L);
}
function mp(t, e) {
  we(e, !0);
  const { closest: n, matches: r } = ua;
  let i = _e("SMUI:list:nav"), a = v(e, "use", 19, () => []), o = v(e, "class", 3, ""), u = v(e, "nonInteractive", 3, !1), l = v(e, "dense", 3, !1), c = v(e, "textualList", 3, !1), d = v(e, "avatarList", 3, !1), m = v(e, "iconList", 3, !1), f = v(e, "imageList", 3, !1), g = v(e, "thumbnailList", 3, !1), h = v(e, "videoList", 3, !1), p = v(e, "twoLine", 3, !1), b = v(e, "threeLine", 3, !1), y = v(e, "vertical", 3, !0), E = v(e, "wrapFocus", 19, () => _e("SMUI:list:wrapFocus") ?? !1), S = v(e, "singleSelection", 3, !1), _ = v(e, "disabledItemsFocusable", 3, !1), A = v(e, "selectedIndex", 31, () => -1), I = v(e, "radioList", 3, !1), L = v(e, "checkList", 3, !1), C = v(e, "hasTypeahead", 3, !1), w = v(e, "component", 3, Wr), B = v(e, "tag", 3, i ? "nav" : "ul"), $ = /* @__PURE__ */ je(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "nonInteractive",
    "dense",
    "textualList",
    "avatarList",
    "iconList",
    "imageList",
    "thumbnailList",
    "videoList",
    "twoLine",
    "threeLine",
    "vertical",
    "wrapFocus",
    "singleSelection",
    "disabledItemsFocusable",
    "selectedIndex",
    "radioList",
    "checkList",
    "hasTypeahead",
    "component",
    "tag",
    "children"
  ]), q, z = /* @__PURE__ */ me(void 0), O = [], x = _e("SMUI:list:role");
  const P = /* @__PURE__ */ new WeakMap();
  let N = _e("SMUI:dialog:selection"), K = _e("SMUI:addLayoutListener"), ne;
  ue("SMUI:list:nonInteractive", u()), ue("SMUI:separator:context", "list"), x || (S() ? (x = "listbox", ue("SMUI:list:item:role", "option")) : I() ? (x = "radiogroup", ue("SMUI:list:item:role", "radio")) : L() ? (x = "group", ue("SMUI:list:item:role", "checkbox")) : (x = "list", ue("SMUI:list:item:role", void 0))), Oe(() => {
    s(z) && s(z).setVerticalOrientation(y());
  }), Oe(() => {
    s(z) && s(z).setWrapFocus(E());
  }), Oe(() => {
    s(z) && s(z).setHasTypeahead(C());
  }), Oe(() => {
    s(z) && s(z).setSingleSelection(S());
  }), Oe(() => {
    s(z) && s(z).setDisabledItemsFocusable(_());
  }), Oe(() => {
    s(z) && S() && G() !== A() && s(z).setSelectedIndex(A());
  }), K && (ne = K(Ue)), ue("SMUI:list:item:mount", (he) => {
    O.push(he), P.set(he.element, he), S() && he.selected && A(xe(he.element));
  }), ue("SMUI:list:item:unmount", (he) => {
    const k = (he && O.findIndex((j) => j === he)) ?? -1;
    k !== -1 && (O.splice(k, 1), P.delete(he.element));
  });
  const F = _e("SMUI:list:mount"), R = _e("SMUI:list:unmount");
  at(() => {
    X(
      z,
      new ap({
        addClassForElementIndex: J,
        focusItemAtIndex: fe,
        getAttributeForElementIndex: (k, j) => {
          var ae;
          return ((ae = D()[k]) == null ? void 0 : ae.getAttr(j)) ?? null;
        },
        getFocusedElementIndex: () => document.activeElement ? D().map((k) => k.element).indexOf(document.activeElement) : -1,
        getListItemCount: () => O.length,
        getPrimaryTextAtIndex: Re,
        hasCheckboxAtIndex: (k) => {
          var j;
          return ((j = D()[k]) == null ? void 0 : j.hasCheckbox) ?? !1;
        },
        hasRadioAtIndex: (k) => {
          var j;
          return ((j = D()[k]) == null ? void 0 : j.hasRadio) ?? !1;
        },
        isCheckboxCheckedAtIndex: (k) => {
          const j = D()[k];
          return ((j == null ? void 0 : j.hasCheckbox) && j.checked) ?? !1;
        },
        isFocusInsideList: () => q != null && De() !== document.activeElement && De().contains(document.activeElement),
        isRootFocused: () => q != null && document.activeElement === De(),
        listItemAtIndexHasClass: ee,
        notifyAction: (k) => {
          A(k), q != null && Xe(De(), "SMUIListAction", { index: k });
        },
        notifySelectionChange: (k) => {
          q != null && Xe(De(), "SMUIListSelectionChange", { changedIndices: k });
        },
        removeClassForElementIndex: ie,
        setAttributeForElementIndex: Se,
        setCheckedCheckboxOrRadioAtIndex: (k, j) => {
          D()[k].checked = j;
        },
        setTabIndexForListItemChildren: (k, j) => {
          const ae = D()[k];
          Array.prototype.forEach.call(ae.element.querySelectorAll("button:not(:disabled), a"), (vt) => {
            vt.setAttribute("tabindex", j);
          });
        }
      }),
      !0
    );
    const he = {
      get element() {
        return De();
      },
      get items() {
        return O;
      },
      get typeaheadInProgress() {
        if (!s(z))
          throw new Error("Instance is undefined.");
        return s(z).isTypeaheadInProgress();
      },
      typeaheadMatchItem(k, j) {
        if (!s(z))
          throw new Error("Instance is undefined.");
        return s(z).typeaheadMatchItem(
          k,
          j,
          /** skipFocus */
          !0
        );
      },
      getOrderedList: D,
      focusItemAtIndex: fe,
      addClassForElementIndex: J,
      removeClassForElementIndex: ie,
      setAttributeForElementIndex: Se,
      removeAttributeForElementIndex: te,
      getAttributeFromElementIndex: se,
      getPrimaryTextAtIndex: Re
    };
    return F && F(he), s(z).init(), s(z).layout(), () => {
      var k;
      R && R(he), (k = s(z)) == null || k.destroy();
    };
  }), En(() => {
    ne && ne();
  });
  function W(he) {
    s(z) && he.target && s(z).handleKeydown(he, he.target.classList.contains("mdc-deprecated-list-item"), xe(he.target));
  }
  function Ie(he) {
    s(z) && he.target && s(z).handleFocusIn(xe(he.target));
  }
  function V(he) {
    s(z) && he.target && s(z).handleFocusOut(xe(he.target));
  }
  function H(he) {
    s(z) && he.target && s(z).handleClick(xe(he.target), !r(he.target, 'input[type="checkbox"], input[type="radio"]'), he);
  }
  function M(he) {
    if (I() || L()) {
      const k = xe(he.target);
      if (k !== -1) {
        const j = D()[k];
        j && (I() && !j.checked || L()) && (r(he.detail.target, 'input[type="checkbox"], input[type="radio"]') || (j.checked = !j.checked), j.activateRipple(), window.requestAnimationFrame(() => {
          j.deactivateRipple();
        }));
      }
    }
  }
  function D() {
    return q == null ? [] : [...De().children].map((he) => P.get(he)).filter((he) => he && he._smui_list_item_accessor);
  }
  function ee(he, k) {
    const j = D()[he];
    return (j && j.hasClass(k)) ?? !1;
  }
  function J(he, k) {
    const j = D()[he];
    j && j.addClass(k);
  }
  function ie(he, k) {
    const j = D()[he];
    j && j.removeClass(k);
  }
  function Se(he, k, j) {
    const ae = D()[he];
    ae && ae.addAttr(k, j);
  }
  function te(he, k) {
    const j = D()[he];
    j && j.removeAttr(k);
  }
  function se(he, k) {
    const j = D()[he];
    return j ? j.getAttr(k) : null;
  }
  function Re(he) {
    const k = D()[he];
    return (k && k.getPrimaryText()) ?? "";
  }
  function xe(he) {
    const k = n(he, ".mdc-deprecated-list-item, .mdc-deprecated-list");
    return k && r(k, ".mdc-deprecated-list-item") ? D().map((j) => j == null ? void 0 : j.element).indexOf(k) : -1;
  }
  function Ue() {
    if (!s(z))
      throw new Error("Instance is undefined.");
    return s(z).layout();
  }
  function Me(he, k) {
    if (!s(z))
      throw new Error("Instance is undefined.");
    return s(z).setEnabled(he, k);
  }
  function Pe() {
    if (!s(z))
      throw new Error("Instance is undefined.");
    return s(z).isTypeaheadInProgress();
  }
  function G() {
    if (!s(z))
      throw new Error("Instance is undefined.");
    return s(z).getSelectedIndex();
  }
  function Q() {
    if (!s(z))
      throw new Error("Instance is undefined.");
    return s(z).getFocusedItemIndex();
  }
  function fe(he) {
    const k = D()[he];
    k && "focus" in k.element && k.element.focus();
  }
  function De() {
    return q.getElement();
  }
  var Fe = {
    layout: Ue,
    setEnabled: Me,
    getTypeaheadInProgress: Pe,
    getSelectedIndex: G,
    getFocusedItemIndex: Q,
    focusItemAtIndex: fe,
    getElement: De
  }, ot = re(), ft = Z(ot);
  {
    let he = /* @__PURE__ */ ve(() => He({
      "mdc-deprecated-list": !0,
      "mdc-deprecated-list--non-interactive": u(),
      "mdc-deprecated-list--dense": l(),
      "mdc-deprecated-list--textual-list": c(),
      "mdc-deprecated-list--avatar-list": d() || N,
      "mdc-deprecated-list--icon-list": m(),
      "mdc-deprecated-list--image-list": f(),
      "mdc-deprecated-list--thumbnail-list": g(),
      "mdc-deprecated-list--video-list": h(),
      "mdc-deprecated-list--two-line": p(),
      "smui-list--three-line": b() && !p(),
      [o()]: !0
    }));
    rr(ft, w, (k, j) => {
      Ce(
        j(k, $e(
          {
            get tag() {
              return B();
            },
            get use() {
              return a();
            },
            get class() {
              return s(he);
            },
            get role() {
              return x;
            }
          },
          () => $,
          {
            onkeydown: (ae) => {
              var Be;
              W(ae), (Be = e.onkeydown) == null || Be.call(e, ae);
            },
            onfocusin: (ae) => {
              var Be;
              Ie(ae), (Be = e.onfocusin) == null || Be.call(e, ae);
            },
            onfocusout: (ae) => {
              var Be;
              V(ae), (Be = e.onfocusout) == null || Be.call(e, ae);
            },
            onclick: (ae) => {
              var Be;
              H(ae), (Be = e.onclick) == null || Be.call(e, ae);
            },
            onSMUIAction: (ae) => {
              var Be;
              M(ae), (Be = e.onSMUIAction) == null || Be.call(e, ae);
            },
            children: (ae, Be) => {
              var vt = re(), St = Z(vt);
              Ae(St, () => e.children ?? ge), T(ae, vt);
            },
            $$slots: { default: !0 }
          }
        )),
        (ae) => q = ae,
        () => q
      );
    });
  }
  return T(t, ot), Le(Fe);
}
let gp = 0;
var pp = /* @__PURE__ */ de('<span class="mdc-deprecated-list-item__ripple"></span>'), bp = /* @__PURE__ */ de("<!><!>", 1);
function _p(t, e) {
  we(e, !0);
  let n = () => {
  };
  function r(J) {
    return J === n;
  }
  let i = _e("SMUI:list:item:nav"), a = v(e, "use", 19, () => []), o = v(e, "class", 3, ""), u = v(e, "style", 3, ""), l = v(e, "nonInteractive", 19, () => _e("SMUI:list:nonInteractive") ?? !1), c = v(e, "ripple", 19, () => !l()), d = v(e, "wrapper", 3, !1), m = v(e, "activated", 15, !1), f = v(e, "role", 19, () => d() ? "presentation" : _e("SMUI:list:item:role")), g = v(e, "selected", 15, !1), h = v(e, "disabled", 3, !1), p = v(e, "skipRestoreFocus", 3, !1), b = v(e, "tabindex", 15, n), y = v(e, "inputId", 19, () => "SMUI-form-field-list-" + gp++), E = v(e, "component", 3, Wr), S = v(e, "tag", 19, () => i ? e.href ? "a" : "span" : "li"), _ = /* @__PURE__ */ je(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "style",
    "color",
    "nonInteractive",
    "ripple",
    "wrapper",
    "activated",
    "role",
    "selected",
    "disabled",
    "skipRestoreFocus",
    "tabindex",
    "inputId",
    "href",
    "component",
    "tag",
    "children"
  ]);
  ue("SMUI:list:nonInteractive", void 0), ue("SMUI:list:item:role", void 0);
  let A, I = ye({}), L = ye({}), C = ye({}), w = /* @__PURE__ */ me(void 0), B = /* @__PURE__ */ me(void 0);
  const $ = /* @__PURE__ */ ve(() => r(b()) ? !l() && !h() && (g() || s(w) && s(w).checked) ? 0 : -1 : b());
  ue("SMUI:generic:input:props", { id: y() }), ue("SMUI:separator:context", void 0), ue("SMUI:generic:input:mount", (J) => {
    ("_smui_checkbox_accessor" in J || "_smui_radio_accessor" in J) && X(w, J, !0);
  }), ue("SMUI:generic:input:unmount", () => {
    X(w, void 0);
  });
  const q = _e("SMUI:list:item:mount"), z = _e("SMUI:list:item:unmount");
  at(() => {
    if (!g() && !l()) {
      let ie = !0, Se = A.getElement();
      for (; Se.previousElementSibling; )
        if (Se = Se.previousElementSibling, Se.nodeType === 1 && Se.classList.contains("mdc-deprecated-list-item") && !Se.classList.contains("mdc-deprecated-list-item--disabled")) {
          ie = !1;
          break;
        }
      ie && X(B, window.requestAnimationFrame(() => R(Se)), !0);
    }
    const J = {
      _smui_list_item_accessor: !0,
      get element() {
        return H();
      },
      get selected() {
        return g();
      },
      set selected(ie) {
        g(ie);
      },
      hasClass: O,
      addClass: x,
      removeClass: P,
      getAttr: K,
      addAttr: ne,
      removeAttr: F,
      getPrimaryText: V,
      // For inputs within item.
      get checked() {
        return (s(w) && s(w).checked) ?? !1;
      },
      set checked(ie) {
        s(w) && (s(w).checked = !!ie);
      },
      get hasCheckbox() {
        return !!(s(w) && "_smui_checkbox_accessor" in s(w));
      },
      get hasRadio() {
        return !!(s(w) && "_smui_radio_accessor" in s(w));
      },
      activateRipple() {
        s(w) && s(w).activateRipple();
      },
      deactivateRipple() {
        s(w) && s(w).deactivateRipple();
      },
      // For select options.
      getValue() {
        return e.value;
      },
      // For autocomplete
      action: Ie,
      get tabindex() {
        return s($);
      },
      set tabindex(ie) {
        b(ie);
      },
      get disabled() {
        return h();
      },
      get activated() {
        return m();
      },
      set activated(ie) {
        m(ie);
      }
    };
    return q && q(J), () => {
      z && z(J);
    };
  }), En(() => {
    s(B) && window.cancelAnimationFrame(s(B));
  });
  function O(J) {
    return J in I ? I[J] : H().classList.contains(J);
  }
  function x(J) {
    I[J] || (I[J] = !0);
  }
  function P(J) {
    (!(J in I) || I[J]) && (I[J] = !1);
  }
  function N(J, ie) {
    L[J] != ie && (ie === "" || ie == null ? delete L[J] : L[J] = ie);
  }
  function K(J) {
    return J in C ? C[J] ?? null : H().getAttribute(J);
  }
  function ne(J, ie) {
    C[J] !== ie && (C[J] = ie);
  }
  function F(J) {
    (!(J in C) || C[J] != null) && (C[J] = void 0);
  }
  function R(J) {
    let ie = !0;
    for (; J.nextElementSibling; )
      if (J = J.nextElementSibling, J.nodeType === 1 && J.classList.contains("mdc-deprecated-list-item")) {
        const Se = J.attributes.getNamedItem("tabindex");
        if (Se && Se.value === "0") {
          ie = !1;
          break;
        }
      }
    ie && b(0);
  }
  function W(J) {
    const ie = J.key === "Enter", Se = J.key === "Space";
    (ie || Se) && Ie(J);
  }
  function Ie(J) {
    h() || Xe(H(), "SMUIAction", J);
  }
  function V() {
    const J = H(), ie = J.querySelector(".mdc-deprecated-list-item__primary-text");
    if (ie)
      return ie.textContent ?? "";
    const Se = J.querySelector(".mdc-deprecated-list-item__text");
    return Se ? Se.textContent ?? "" : J.textContent ?? "";
  }
  function H() {
    return A.getElement();
  }
  var M = { action: Ie, getPrimaryText: V, getElement: H }, D = re(), ee = Z(D);
  {
    let J = /* @__PURE__ */ ve(() => [
      ...l() ? [] : [
        [
          Qt,
          {
            ripple: !s(w),
            unbounded: !1,
            color: (m() || g()) && e.color == null ? "primary" : e.color,
            disabled: h(),
            addClass: x,
            removeClass: P,
            addStyle: N
          }
        ]
      ],
      ...a()
    ]), ie = /* @__PURE__ */ ve(() => He({
      "mdc-deprecated-list-item": !d(),
      "mdc-deprecated-list-item__wrapper": d(),
      "mdc-deprecated-list-item--activated": m(),
      "mdc-deprecated-list-item--selected": g(),
      "mdc-deprecated-list-item--disabled": h(),
      "mdc-menu-item--selected": !i && f() === "menuitem" && g(),
      "smui-menu-item--non-interactive": l(),
      ...I,
      [o()]: !0
    })), Se = /* @__PURE__ */ ve(() => Object.entries(L).map(([se, Re]) => `${se}: ${Re};`).concat([u()]).join(" ")), te = /* @__PURE__ */ ve(() => p() || void 0);
    rr(ee, E, (se, Re) => {
      Ce(
        Re(se, $e(
          {
            get tag() {
              return S();
            },
            get use() {
              return s(J);
            },
            get class() {
              return s(ie);
            },
            get style() {
              return s(Se);
            }
          },
          () => i && m() ? { "aria-current": "page" } : {},
          () => !i || d() ? { role: f() } : {},
          () => !i && f() === "option" ? { "aria-selected": g() ? "true" : "false" } : {},
          () => !i && (f() === "radio" || f() === "checkbox") ? {
            "aria-checked": s(w) && s(w).checked ? "true" : "false"
          } : {},
          () => i ? {} : { "aria-disabled": h() ? "true" : "false" },
          {
            get "data-menu-item-skip-restore-focus"() {
              return s(te);
            },
            get tabindex() {
              return s($);
            },
            get href() {
              return e.href;
            }
          },
          () => C,
          () => _,
          {
            onclick: (xe) => {
              var Ue;
              Ie(xe), (Ue = e.onclick) == null || Ue.call(e, xe);
            },
            onkeydown: (xe) => {
              var Ue;
              W(xe), (Ue = e.onkeydown) == null || Ue.call(e, xe);
            },
            children: (xe, Ue) => {
              var Me = bp(), Pe = Z(Me);
              {
                var G = (fe) => {
                  var De = pp();
                  T(fe, De);
                };
                oe(Pe, (fe) => {
                  c() && fe(G);
                });
              }
              var Q = be(Pe);
              Ae(Q, () => e.children ?? ge), T(xe, Me);
            },
            $$slots: { default: !0 }
          }
        )),
        (xe) => A = xe,
        () => A
      );
    });
  }
  return T(t, D), Le(M);
}
let yp = 0;
var Ip = /* @__PURE__ */ de("<div><!></div>");
function Sp(t, e) {
  we(e, !0);
  let n = v(e, "use", 19, () => []), r = v(e, "class", 3, ""), i = v(e, "id", 19, () => "SMUI-select-helper-text-" + yp++), a = v(e, "persistent", 3, !1), o = v(e, "validationMsg", 3, !1), u = /* @__PURE__ */ je(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "id",
    "persistent",
    "validationMsg",
    "children"
  ]), l, c = /* @__PURE__ */ me(void 0), d = ye({}), m = ye({}), f = /* @__PURE__ */ me(void 0);
  const g = _e("SMUI:select:helper-text:id"), h = _e("SMUI:select:helper-text:mount"), p = _e("SMUI:select:helper-text:unmount");
  at(() => (X(
    c,
    new dp({
      addClass: y,
      removeClass: E,
      hasClass: b,
      getAttr: S,
      setAttr: _,
      removeAttr: A,
      setContent: (q) => {
        X(f, q, !0);
      }
    }),
    !0
  ), g && g(i()), h && h(s(c)), s(c).init(), () => {
    var q;
    p && s(c) && p(s(c)), (q = s(c)) == null || q.destroy();
  }));
  function b(q) {
    return q in d ? d[q] : I().classList.contains(q);
  }
  function y(q) {
    d[q] || (d[q] = !0);
  }
  function E(q) {
    (!(q in d) || d[q]) && (d[q] = !1);
  }
  function S(q) {
    return q in m ? m[q] ?? null : I().getAttribute(q);
  }
  function _(q, z) {
    m[q] !== z && (m[q] = z);
  }
  function A(q) {
    (!(q in m) || m[q] != null) && (m[q] = void 0);
  }
  function I() {
    return l;
  }
  var L = { getElement: I }, C = Ip();
  ke(
    C,
    (q) => ({
      class: q,
      "aria-hidden": a() ? void 0 : "true",
      id: i(),
      ...m,
      ...u
    }),
    [
      () => He({
        "mdc-select-helper-text": !0,
        "mdc-select-helper-text--validation-msg": o(),
        "mdc-select-helper-text--validation-msg-persistent": a(),
        ...d,
        [r()]: !0
      })
    ]
  );
  var w = ce(C);
  {
    var B = (q) => {
      var z = re(), O = Z(z);
      Ae(O, () => e.children ?? ge), T(q, z);
    }, $ = (q) => {
      var z = gt();
      Te(() => ze(z, s(f))), T(q, z);
    };
    oe(w, (q) => {
      s(f) == null ? q(B) : q($, !1);
    });
  }
  return Ce(C, (q) => l = q, () => l), Ne(C, (q, z) => Y == null ? void 0 : Y(q, z), n), T(t, C), Le(L);
}
let Ep = 0;
var Ap = /* @__PURE__ */ de("<input/>"), Cp = /* @__PURE__ */ de('<span class="mdc-select__ripple"></span>'), Tp = /* @__PURE__ */ de('<div><!> <div><!> <!> <!> <!> <span><span> </span></span> <span><svg class="mdc-select__dropdown-icon-graphic" viewBox="7 10 10 5" focusable="false"><polygon class="mdc-select__dropdown-icon-inactive" stroke="none" fill-rule="evenodd" points="7 10 12 15 17 10"></polygon><polygon class="mdc-select__dropdown-icon-active" stroke="none" fill-rule="evenodd" points="7 15 12 10 17 15"></polygon></svg></span> <!></div> <!></div> <!>', 1);
function xp(t, e) {
  we(e, !0);
  const n = () => Bn(De, "$selectedTextStore", r), [r, i] = ir();
  let a = () => {
  };
  function o(U) {
    return U === a;
  }
  let u = v(e, "use", 19, () => []), l = v(e, "class", 3, ""), c = v(e, "style", 3, ""), d = v(e, "ripple", 3, !0), m = v(e, "disabled", 3, !1), f = v(e, "variant", 3, "standard"), g = v(e, "noLabel", 3, !1), h = v(e, "label", 3, void 0), p = v(e, "value", 15), b = v(e, "key", 3, (U) => U), y = v(e, "dirty", 15, !1), E = v(e, "invalid", 15, a), S = v(e, "updateInvalid", 19, () => o(E())), _ = v(e, "required", 3, !1), A = v(e, "inputId", 19, () => "SMUI-select-" + Ep++), I = v(e, "hiddenInput", 3, !1), L = v(e, "withLeadingIcon", 3, a), C = v(e, "anchor$use", 19, () => []), w = v(e, "anchor$class", 3, ""), B = v(e, "selectedTextContainer$use", 19, () => []), $ = v(e, "selectedTextContainer$class", 3, ""), q = v(e, "selectedText$use", 19, () => []), z = v(e, "selectedText$class", 3, ""), O = v(e, "dropdownIcon$use", 19, () => []), x = v(e, "dropdownIcon$class", 3, ""), P = v(e, "menu$class", 3, ""), N = /* @__PURE__ */ je(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "style",
    "ripple",
    "disabled",
    "variant",
    "noLabel",
    "label",
    "value",
    "key",
    "dirty",
    "invalid",
    "updateInvalid",
    "required",
    "inputId",
    "hiddenInput",
    "withLeadingIcon",
    "anchor$use",
    "anchor$class",
    "selectedTextContainer$use",
    "selectedTextContainer$class",
    "selectedText$use",
    "selectedText$class",
    "dropdownIcon$use",
    "dropdownIcon$class",
    "menu$class",
    "children",
    "leadingIcon",
    "helperText"
  ]);
  const K = o(E());
  o(E()) && E(!1);
  let ne, F = /* @__PURE__ */ me(void 0), R = ye({}), W = ye({}), Ie, V = ye({}), H = /* @__PURE__ */ me(-1);
  const M = /* @__PURE__ */ ve(() => N.menu$id ?? A() + "-menu");
  let D = /* @__PURE__ */ me(void 0), ee = _e("SMUI:addLayoutListener"), J, ie = /* @__PURE__ */ me(!1), Se = ye({}), te = /* @__PURE__ */ me(void 0), se = /* @__PURE__ */ me(void 0), Re = /* @__PURE__ */ me(!1), xe, Ue = _e("SMUI:select:context"), Me, Pe, G, Q, fe;
  ue("SMUI:list:role", ""), ue("SMUI:list:nav", !1);
  const De = Gt("");
  ue("SMUI:select:selectedText", De);
  const Fe = Gt(p());
  Oe(() => {
    Fn(Fe, p());
  }), ue("SMUI:select:value", Fe), Oe(() => {
    s(F) && s(F).getValue() !== b()(p()) && s(F).setValue(b()(p()));
  });
  let ot = s(H);
  Oe(() => {
    if (ot !== s(H))
      if (ot = s(H), s(F))
        s(F).setSelectedIndex(
          s(H),
          /* closeMenu */
          !1,
          /* skipNotify */
          !0
        );
      else {
        const U = jt();
        p() !== U[s(H)] && p(U[s(H)]);
      }
  }), Oe(() => {
    s(F) && s(F).getDisabled() !== m() && s(F).setDisabled(m());
  }), Oe(() => {
    s(F) && y() && s(F).isValid() !== !E() && (S() ? E(!s(F).isValid()) : s(F).setValid(!E()));
  }), Oe(() => {
    s(F) && s(F).getRequired() !== _() && s(F).setRequired(_());
  }), ee && (J = ee(Ei)), ue("SMUI:select:leading-icon:mount", (U) => {
    Me = U;
  }), ue("SMUI:select:leading-icon:unmount", () => {
    Me = void 0;
  }), ue("SMUI:list:mount", (U) => {
    xe = U;
  }), ue("SMUI:select:helper-text:id", (U) => {
    X(D, U, !0);
  }), ue("SMUI:select:helper-text:mount", (U) => {
    Pe = U;
  }), ue("SMUI:select:helper-text:unmount", () => {
    X(D, void 0), Pe = void 0;
  }), at(() => (X(
    F,
    new cp(
      {
        // getSelectAdapterMethods
        // getMenuItemAttr: (menuItem: Element, attr: string) =>
        //   menuItem.getAttribute(attr),
        setSelectedText: (U) => {
          Fn(De, U);
        },
        isSelectAnchorFocused: () => document.activeElement === Ie,
        getSelectAnchorAttr: vt,
        setSelectAnchorAttr: St,
        removeSelectAnchorAttr: yt,
        addMenuClass: ae,
        removeMenuClass: Be,
        openMenu: () => {
          X(ie, !0);
        },
        closeMenu: () => {
          X(ie, !1);
        },
        getAnchorElement: () => Ie,
        setMenuAnchorElement: (U) => {
          X(te, U, !0);
        },
        setMenuAnchorCorner: (U) => {
          X(se, U, !0);
        },
        setMenuWrapFocus: (U) => {
          X(Re, U, !0);
        },
        getSelectedIndex: () => s(H),
        setSelectedIndex: (U) => {
          ot = U, X(H, U, !0), p(jt()[s(H)]);
        },
        focusMenuItemAtIndex: (U) => {
          xe.focusItemAtIndex(U);
        },
        getMenuItemCount: () => xe.items.length,
        getMenuItemValues: () => jt().map(b()),
        getMenuItemTextAtIndex: (U) => xe.getPrimaryTextAtIndex(U),
        isTypeaheadInProgress: () => xe.typeaheadInProgress,
        typeaheadMatchItem: (U, Ee) => xe.typeaheadMatchItem(U, Ee),
        // getCommonAdapterMethods
        addClass: he,
        removeClass: k,
        hasClass: ft,
        setRippleCenter: (U) => Q && Q.setRippleCenter(U),
        activateBottomLine: () => Q && Q.activate(),
        deactivateBottomLine: () => Q && Q.deactivate(),
        notifyChange: (U) => {
          var Ee;
          y(!0), S() && E(!((Ee = s(F)) != null && Ee.isValid())), Xe(qn(), "SMUISelectChange", { value: p(), index: s(H) });
        },
        // getOutlineAdapterMethods
        hasOutline: () => !!fe,
        notchOutline: (U) => fe && fe.notch(U),
        closeOutline: () => fe && fe.closeNotch(),
        // getLabelAdapterMethods
        hasLabel: () => !!G,
        floatLabel: (U) => G && G.float(U),
        getLabelWidth: () => G ? G.getWidth() : 0,
        setLabelRequired: (U) => G && G.setRequired(U)
      },
      {
        get helperText() {
          return Pe;
        },
        get leadingIcon() {
          return Me;
        }
      }
    ),
    !0
  ), X(H, jt().indexOf(p()), !0), s(F).init(), At(K), () => {
    var U;
    (U = s(F)) == null || U.destroy();
  })), En(() => {
    J && J();
  });
  function ft(U) {
    return U in R ? R[U] : qn().classList.contains(U);
  }
  function he(U) {
    R[U] || (R[U] = !0);
  }
  function k(U) {
    (!(U in R) || R[U]) && (R[U] = !1);
  }
  function j(U, Ee) {
    W[U] != Ee && (Ee === "" || Ee == null ? delete W[U] : W[U] = Ee);
  }
  function ae(U) {
    Se[U] || (Se[U] = !0);
  }
  function Be(U) {
    (!(U in Se) || Se[U]) && (Se[U] = !1);
  }
  function vt(U) {
    return U in V ? V[U] ?? null : qn().getAttribute(U);
  }
  function St(U, Ee) {
    V[U] !== Ee && (V[U] = Ee);
  }
  function yt(U) {
    (!(U in V) || V[U] != null) && (V[U] = void 0);
  }
  function jt() {
    return xe.getOrderedList().map((U) => U.getValue());
  }
  function Sr(U) {
    const Ee = U.currentTarget.getBoundingClientRect();
    return (pt(U) ? U.touches[0].clientX : U.clientX) - Ee.left;
  }
  function pt(U) {
    return "touches" in U;
  }
  function Nt() {
    if (s(F) == null)
      throw new Error("Instance is undefined.");
    return s(F).getUseDefaultValidation();
  }
  function At(U) {
    var Ee;
    (Ee = s(F)) == null || Ee.setUseDefaultValidation(U);
  }
  function Dn() {
    Ie.focus();
  }
  function Ei() {
    var U;
    (U = s(F)) == null || U.layout();
  }
  function qn() {
    return ne;
  }
  var Ze = {
    getUseDefaultValidation: Nt,
    setUseDefaultValidation: At,
    focus: Dn,
    layout: Ei,
    getElement: qn
  }, et = Tp(), tt = Z(et);
  ke(tt, (U, Ee, mt) => ({ class: U, style: Ee, ...mt }), [
    () => He({
      "mdc-select": !0,
      "mdc-select--required": _(),
      "mdc-select--disabled": m(),
      "mdc-select--filled": f() === "filled",
      "mdc-select--outlined": f() === "outlined",
      "smui-select--standard": f() === "standard",
      "mdc-select--with-leading-icon": o(L()) ? e.leadingIcon : L(),
      "mdc-select--no-label": g() || h() == null,
      "mdc-select--invalid": E(),
      "mdc-select--activated": s(ie),
      "mdc-data-table__pagination-rows-per-page-select": Ue === "data-table:pagination",
      ...R,
      [l()]: !0
    }),
    () => Object.entries(W).map(([U, Ee]) => `${U}: ${Ee};`).concat([c()]).join(" "),
    () => Vn(N, [
      "input$",
      "anchor$",
      "label$",
      "outline$",
      "selectedTextContainer$",
      "selectedText$",
      "dropdownIcon$",
      "ripple$",
      "menu$",
      "list$",
      "helperText$"
    ])
  ]);
  var Ut = ce(tt);
  {
    var mn = (U) => {
      var Ee = Ap();
      ke(
        Ee,
        (mt) => ({
          type: "hidden",
          required: _(),
          disabled: m(),
          value: p(),
          ...mt
        }),
        [() => it(N, "input$")],
        void 0,
        void 0,
        !0
      ), T(U, Ee);
    };
    oe(Ut, (U) => {
      I() && U(mn);
    });
  }
  var st = be(Ut, 2), ht = (U) => {
    var Ee;
    Ie.focus(), s(F) && s(F).handleClick(Sr(U)), (Ee = e.anchor$onclick) == null || Ee.call(e, U);
  }, Lt = (U) => {
    var Ee;
    s(F) && s(F).handleKeydown(U), (Ee = e.onkeydown) == null || Ee.call(e, U);
  }, nt = (U) => {
    var Ee;
    s(F) && s(F).handleBlur(), Xe(qn(), "blur", U), (Ee = e.anchor$onblur) == null || Ee.call(e, U);
  }, Mt = (U) => {
    var Ee;
    s(F) && s(F).handleFocus(), Xe(qn(), "focus", U), (Ee = e.anchor$onfocus) == null || Ee.call(e, U);
  };
  ke(
    st,
    (U, Ee) => ({
      class: U,
      "aria-required": _() ? "true" : void 0,
      "aria-disabled": m() ? "true" : void 0,
      "aria-controls": s(M),
      "aria-expanded": s(ie) ? "true" : "false",
      "aria-describedby": s(D),
      role: "combobox",
      tabindex: "0",
      ...V,
      ...Ee,
      onclick: ht,
      onkeydown: Lt,
      onblur: nt,
      onfocus: Mt
    }),
    [
      () => He({ "mdc-select__anchor": !0, [w()]: !0 }),
      () => it(N, "anchor$")
    ]
  );
  var Mn = ce(st);
  {
    var Pt = (U) => {
      var Ee = Cp();
      T(U, Ee);
    };
    oe(Mn, (U) => {
      f() === "filled" && U(Pt);
    });
  }
  var Et = be(Mn, 2);
  {
    var Ft = (U) => {
      {
        let Ee = /* @__PURE__ */ ve(() => A() + "-smui-label"), mt = /* @__PURE__ */ ve(() => n() !== ""), Ht = /* @__PURE__ */ ve(() => it(N, "label$"));
        Ce(
          Co(U, $e(
            {
              get id() {
                return s(Ee);
              },
              get floatAbove() {
                return s(mt);
              },
              get required() {
                return _();
              }
            },
            () => s(Ht),
            {
              children: (or, sr) => {
                var fa = re(), Ai = Z(fa);
                {
                  var Xr = (Zr) => {
                  }, zo = (Zr) => {
                    var Ka = re(), ha = Z(Ka);
                    {
                      var yl = (Ar) => {
                        var Yr = gt();
                        Te(() => ze(Yr, h())), T(Ar, Yr);
                      }, Xa = (Ar) => {
                        var Yr = re(), Ko = Z(Yr);
                        Ae(Ko, h), T(Ar, Yr);
                      };
                      oe(
                        ha,
                        (Ar) => {
                          typeof h() == "string" ? Ar(yl) : Ar(Xa, !1);
                        },
                        !0
                      );
                    }
                    T(Zr, Ka);
                  };
                  oe(Ai, (Zr) => {
                    h() == null ? Zr(Xr) : Zr(zo, !1);
                  });
                }
                T(or, fa);
              },
              $$slots: { default: !0 }
            }
          )),
          (or) => G = or,
          () => G
        );
      }
    };
    oe(Et, (U) => {
      f() !== "outlined" && !g() && h() != null && U(Ft);
    });
  }
  var un = be(Et, 2);
  {
    var qt = (U) => {
      {
        let Ee = /* @__PURE__ */ ve(() => g() || h() == null), mt = /* @__PURE__ */ ve(() => it(N, "outline$"));
        Ce(
          cd(U, $e(
            {
              get noLabel() {
                return s(Ee);
              }
            },
            () => s(mt),
            {
              children: (Ht, or) => {
                var sr = re(), fa = Z(sr);
                {
                  var Ai = (Xr) => {
                    {
                      let zo = /* @__PURE__ */ ve(() => A() + "-smui-label"), Zr = /* @__PURE__ */ ve(() => n() !== ""), Ka = /* @__PURE__ */ ve(() => it(N, "label$"));
                      Ce(
                        Co(Xr, $e(
                          {
                            get id() {
                              return s(zo);
                            },
                            get floatAbove() {
                              return s(Zr);
                            },
                            get required() {
                              return _();
                            }
                          },
                          () => s(Ka),
                          {
                            children: (ha, yl) => {
                              var Xa = re(), Ar = Z(Xa);
                              {
                                var Yr = (va) => {
                                }, Ko = (va) => {
                                  var Il = re(), qd = Z(Il);
                                  {
                                    var Wd = (Ci) => {
                                      var ma = gt();
                                      Te(() => ze(ma, h())), T(Ci, ma);
                                    }, zd = (Ci) => {
                                      var ma = re(), Kd = Z(ma);
                                      Ae(Kd, h), T(Ci, ma);
                                    };
                                    oe(
                                      qd,
                                      (Ci) => {
                                        typeof h() == "string" ? Ci(Wd) : Ci(zd, !1);
                                      },
                                      !0
                                    );
                                  }
                                  T(va, Il);
                                };
                                oe(Ar, (va) => {
                                  h() == null ? va(Yr) : va(Ko, !1);
                                });
                              }
                              T(ha, Xa);
                            },
                            $$slots: { default: !0 }
                          }
                        )),
                        (ha) => G = ha,
                        () => G
                      );
                    }
                  };
                  oe(fa, (Xr) => {
                    !g() && h() != null && Xr(Ai);
                  });
                }
                T(Ht, sr);
              },
              $$slots: { default: !0 }
            }
          )),
          (Ht) => fe = Ht,
          () => fe
        );
      }
    };
    oe(un, (U) => {
      f() === "outlined" && U(qt);
    });
  }
  var cn = be(un, 2);
  Ae(cn, () => e.leadingIcon ?? ge);
  var $t = be(cn, 2);
  ke($t, (U, Ee) => ({ class: U, ...Ee }), [
    () => He({
      "mdc-select__selected-text-container": !0,
      [$()]: !0
    }),
    () => it(N, "selectedTextContainer$")
  ]);
  var Wn = ce($t);
  ke(
    Wn,
    (U, Ee) => ({
      id: A() + "-smui-selected-text",
      class: U,
      role: "button",
      "aria-haspopup": "listbox",
      "aria-labelledby": A() + "-smui-label",
      ...Ee
    }),
    [
      () => He({
        "mdc-select__selected-text": !0,
        [z()]: !0
      }),
      () => it(N, "selectedText$")
    ]
  );
  var Kr = ce(Wn);
  Ne(Wn, (U, Ee) => Y == null ? void 0 : Y(U, Ee), q), Ne($t, (U, Ee) => Y == null ? void 0 : Y(U, Ee), B);
  var dn = be($t, 2);
  ke(dn, (U, Ee) => ({ class: U, ...Ee }), [
    () => He({
      "mdc-select__dropdown-icon": !0,
      [x()]: !0
    }),
    () => it(N, "dropdownIcon$")
  ]), Ne(dn, (U, Ee) => Y == null ? void 0 : Y(U, Ee), O);
  var Xt = be(dn, 2);
  {
    var gn = (U) => {
      {
        let Ee = /* @__PURE__ */ ve(() => it(N, "ripple$"));
        Ce(ud(U, $e(() => s(Ee))), (mt) => Q = mt, () => Q);
      }
    };
    oe(Xt, (U) => {
      f() !== "outlined" && d() && U(gn);
    });
  }
  Ce(st, (U) => Ie = U, () => Ie), Ne(st, (U, Ee) => Y == null ? void 0 : Y(U, Ee), C);
  var ar = be(st, 2);
  {
    let U = /* @__PURE__ */ ve(() => He({
      "mdc-select__menu": !0,
      ...Se,
      [P()]: !0
    })), Ee = /* @__PURE__ */ ve(() => it(N, "menu$"));
    vp(ar, $e(
      {
        get class() {
          return s(U);
        },
        get id() {
          return s(M);
        },
        fullWidth: !0,
        anchor: !1,
        get anchorElement() {
          return s(te);
        },
        get anchorCorner() {
          return s(se);
        }
      },
      () => s(Ee),
      {
        onSMUIMenuSelected: (mt) => {
          var Ht;
          s(F) && s(F).handleMenuItemAction(mt.detail.index), (Ht = e.onSMUIMenuSelected) == null || Ht.call(e, mt);
        },
        onSMUIMenuSurfaceClosing: (mt) => {
          var Ht;
          s(F) && s(F).handleMenuClosing(), (Ht = e.onSMUIMenuSurfaceClosing) == null || Ht.call(e, mt);
        },
        onSMUIMenuSurfaceClosed: (mt) => {
          var Ht;
          s(F) && s(F).handleMenuClosed(), (Ht = e.onSMUIMenuSurfaceClosed) == null || Ht.call(e, mt);
        },
        onSMUIMenuSurfaceOpened: (mt) => {
          var Ht;
          s(F) && s(F).handleMenuOpened(), (Ht = e.onSMUIMenuSurfaceOpened) == null || Ht.call(e, mt);
        },
        get open() {
          return s(ie);
        },
        set open(mt) {
          X(ie, mt, !0);
        },
        children: (mt, Ht) => {
          {
            let or = /* @__PURE__ */ ve(() => it(N, "list$"));
            mp(mt, $e(
              {
                role: "listbox",
                get wrapFocus() {
                  return s(Re);
                }
              },
              () => s(or),
              {
                get selectedIndex() {
                  return s(H);
                },
                set selectedIndex(sr) {
                  X(H, sr, !0);
                },
                children: (sr, fa) => {
                  var Ai = re(), Xr = Z(Ai);
                  Ae(Xr, () => e.children ?? ge), T(sr, Ai);
                },
                $$slots: { default: !0 }
              }
            ));
          }
        },
        $$slots: { default: !0 }
      }
    ));
  }
  Ce(tt, (U) => ne = U, () => ne), Ne(tt, (U, Ee) => Qt == null ? void 0 : Qt(U, Ee), () => ({
    ripple: f() === "filled",
    unbounded: !1,
    addClass: he,
    removeClass: k,
    addStyle: j
  })), Ne(tt, (U, Ee) => ls == null ? void 0 : ls(U, Ee), () => ({ addClass: he, removeClass: k })), Ne(tt, (U, Ee) => Y == null ? void 0 : Y(U, Ee), u);
  var da = be(tt, 2);
  {
    var Wo = (U) => {
      {
        let Ee = /* @__PURE__ */ ve(() => it(N, "helperText$"));
        Sp(U, $e(() => s(Ee), {
          children: (mt, Ht) => {
            var or = re(), sr = Z(or);
            Ae(sr, () => e.helperText ?? ge), T(mt, or);
          },
          $$slots: { default: !0 }
        }));
      }
    };
    oe(da, (U) => {
      e.helperText && U(Wo);
    });
  }
  Te(() => ze(Kr, n())), T(t, et);
  var Er = Le(Ze);
  return i(), Er;
}
function wp(t, e) {
  we(e, !0);
  const n = () => Bn(d, "$selectedValue", r), [r, i] = ir();
  let a = v(e, "use", 19, () => []);
  v(e, "class", 3, "");
  let o = v(e, "value", 3, ""), u = /* @__PURE__ */ je(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "value",
    "children"
  ]), l;
  const c = _e("SMUI:select:selectedText"), d = _e("SMUI:select:value");
  ue("SMUI:list:item:role", "option");
  const m = /* @__PURE__ */ ve(() => o() != null && o() !== "" && n() === o());
  at(f), En(f);
  function f() {
    s(m) && l && Fn(c, l.getPrimaryText());
  }
  function g() {
    return l.getElement();
  }
  var h = { getElement: g };
  Ce(
    _p(t, $e(
      {
        get use() {
          return a();
        },
        get "data-value"() {
          return o();
        },
        get value() {
          return o();
        },
        get selected() {
          return s(m);
        }
      },
      () => u,
      {
        children: (b, y) => {
          var E = re(), S = Z(E);
          Ae(S, () => e.children ?? ge), T(b, E);
        },
        $$slots: { default: !0 }
      }
    )),
    (b) => l = b,
    () => l
  );
  var p = Le(h);
  return i(), p;
}
function Lp(t, e) {
  we(e, !0);
  let n = v(e, "data", 19, () => []);
  v(e, "placeholder", 3, "");
  let r = v(e, "label", 3, "");
  v(e, "description", 3, "");
  let i = v(e, "value", 15), a = v(e, "required", 3, !1);
  v(e, "size", 3, "sm");
  let o = v(e, "variant", 3, "standard"), u = v(e, "selectedOptionIndex", 31, () => -1), l = v(e, "disabled", 3, !1);
  function c(d) {
    return () => u(d);
  }
  xp(t, {
    get disabled() {
      return l();
    },
    key: (d) => `${d ?? ""}`,
    get label() {
      return r();
    },
    style: "width: 100%;",
    get variant() {
      return o();
    },
    get required() {
      return a();
    },
    get value() {
      return i();
    },
    set value(d) {
      i(d);
    },
    children: (d, m) => {
      var f = re(), g = Z(f);
      Qn(g, 17, n, Hi, (h, p, b) => {
        {
          let y = /* @__PURE__ */ ve(() => c(b));
          wp(h, {
            get onclick() {
              return s(y);
            },
            get value() {
              return s(p).value;
            },
            children: (E, S) => {
              var _ = gt();
              Te(() => ze(_, s(p).label)), T(E, _);
            },
            $$slots: { default: !0 }
          });
        }
      }), T(d, f);
    },
    $$slots: { default: !0 }
  }), Le();
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
function Op(t) {
  return t ? t.scrollHeight > t.offsetHeight : !1;
}
function Rp(t) {
  return t ? t.scrollTop === 0 : !1;
}
function Dp(t) {
  return t ? Math.ceil(t.scrollHeight - t.scrollTop) === t.clientHeight : !1;
}
function Mp(t) {
  var e = /* @__PURE__ */ new Set();
  return [].forEach.call(t, function(n) {
    return e.add(n.offsetTop);
  }), e.size > 1;
}
/**
 * @license
 * Copyright 2020 Google Inc.
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
var Pp = (
  /** @class */
  function() {
    function t() {
      this.rafIDs = /* @__PURE__ */ new Map();
    }
    return t.prototype.request = function(e, n) {
      var r = this;
      this.cancel(e);
      var i = requestAnimationFrame(function(a) {
        r.rafIDs.delete(e), n(a);
      });
      this.rafIDs.set(e, i);
    }, t.prototype.cancel = function(e) {
      var n = this.rafIDs.get(e);
      n && (cancelAnimationFrame(n), this.rafIDs.delete(e));
    }, t.prototype.cancelAll = function() {
      var e = this;
      this.rafIDs.forEach(function(n, r) {
        e.cancel(r);
      });
    }, t.prototype.getQueue = function() {
      var e = [];
      return this.rafIDs.forEach(function(n, r) {
        e.push(r);
      }), e;
    }, t;
  }()
);
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
var lt = {
  CLOSING: "mdc-dialog--closing",
  OPEN: "mdc-dialog--open",
  OPENING: "mdc-dialog--opening",
  SCROLLABLE: "mdc-dialog--scrollable",
  SCROLL_LOCK: "mdc-dialog-scroll-lock",
  STACKED: "mdc-dialog--stacked",
  FULLSCREEN: "mdc-dialog--fullscreen",
  // Class for showing a scroll divider on full-screen dialog header element.
  // Should only be displayed on scrollable content, when the dialog content is
  // scrolled "underneath" the header.
  SCROLL_DIVIDER_HEADER: "mdc-dialog-scroll-divider-header",
  // Class for showing a scroll divider on a full-screen dialog footer element.
  // Should only be displayed on scrolalble content, when the dialog content is
  // obscured "underneath" the footer.
  SCROLL_DIVIDER_FOOTER: "mdc-dialog-scroll-divider-footer",
  // The "surface scrim" is a scrim covering only the surface of a dialog. This
  // is used in situations where a confirmation dialog is shown over an already
  // opened full-screen dialog. On larger screen-sizes, the full-screen dialog
  // is sized as a modal and so in these situations we display a "surface scrim"
  // to prevent a "double scrim" (where the scrim from the secondary
  // confirmation dialog would overlap with the scrim from the full-screen
  // dialog).
  SURFACE_SCRIM_SHOWN: "mdc-dialog__surface-scrim--shown",
  // "Showing" animating class for the surface-scrim.
  SURFACE_SCRIM_SHOWING: "mdc-dialog__surface-scrim--showing",
  // "Hiding" animating class for the surface-scrim.
  SURFACE_SCRIM_HIDING: "mdc-dialog__surface-scrim--hiding",
  // Class to hide a dialog's scrim (used in conjunction with a surface-scrim).
  // Note that we only hide the original scrim rather than removing it entirely
  // to prevent interactions with the content behind this scrim, and to capture
  // scrim clicks.
  SCRIM_HIDDEN: "mdc-dialog__scrim--hidden"
}, ya = {
  ACTION_ATTRIBUTE: "data-mdc-dialog-action",
  BUTTON_DEFAULT_ATTRIBUTE: "data-mdc-dialog-button-default",
  BUTTON_SELECTOR: ".mdc-dialog__button",
  CLOSED_EVENT: "MDCDialog:closed",
  CLOSE_ACTION: "close",
  CLOSING_EVENT: "MDCDialog:closing",
  CONTAINER_SELECTOR: ".mdc-dialog__container",
  CONTENT_SELECTOR: ".mdc-dialog__content",
  DESTROY_ACTION: "destroy",
  INITIAL_FOCUS_ATTRIBUTE: "data-mdc-dialog-initial-focus",
  OPENED_EVENT: "MDCDialog:opened",
  OPENING_EVENT: "MDCDialog:opening",
  SCRIM_SELECTOR: ".mdc-dialog__scrim",
  SUPPRESS_DEFAULT_PRESS_SELECTOR: [
    "textarea",
    ".mdc-menu .mdc-list-item",
    ".mdc-menu .mdc-deprecated-list-item"
  ].join(", "),
  SURFACE_SELECTOR: ".mdc-dialog__surface"
}, us = {
  DIALOG_ANIMATION_CLOSE_TIME_MS: 75,
  DIALOG_ANIMATION_OPEN_TIME_MS: 150
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
var To;
(function(t) {
  t.POLL_SCROLL_POS = "poll_scroll_position", t.POLL_LAYOUT_CHANGE = "poll_layout_change";
})(To || (To = {}));
var Hp = (
  /** @class */
  function(t) {
    Ke(e, t);
    function e(n) {
      var r = t.call(this, pe(pe({}, e.defaultAdapter), n)) || this;
      return r.dialogOpen = !1, r.isFullscreen = !1, r.animationFrame = 0, r.animationTimer = 0, r.escapeKeyAction = ya.CLOSE_ACTION, r.scrimClickAction = ya.CLOSE_ACTION, r.autoStackButtons = !0, r.areButtonsStacked = !1, r.suppressDefaultPressSelector = ya.SUPPRESS_DEFAULT_PRESS_SELECTOR, r.animFrame = new Pp(), r.contentScrollHandler = function() {
        r.handleScrollEvent();
      }, r.windowResizeHandler = function() {
        r.layout();
      }, r.windowOrientationChangeHandler = function() {
        r.layout();
      }, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return lt;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return ya;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return us;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
      get: function() {
        return {
          addBodyClass: function() {
          },
          addClass: function() {
          },
          areButtonsStacked: function() {
            return !1;
          },
          clickDefaultButton: function() {
          },
          eventTargetMatches: function() {
            return !1;
          },
          getActionFromEvent: function() {
            return "";
          },
          getInitialFocusEl: function() {
            return null;
          },
          hasClass: function() {
            return !1;
          },
          isContentScrollable: function() {
            return !1;
          },
          notifyClosed: function() {
          },
          notifyClosing: function() {
          },
          notifyOpened: function() {
          },
          notifyOpening: function() {
          },
          releaseFocus: function() {
          },
          removeBodyClass: function() {
          },
          removeClass: function() {
          },
          reverseButtons: function() {
          },
          trapFocus: function() {
          },
          registerContentEventHandler: function() {
          },
          deregisterContentEventHandler: function() {
          },
          isScrollableContentAtTop: function() {
            return !1;
          },
          isScrollableContentAtBottom: function() {
            return !1;
          },
          registerWindowEventHandler: function() {
          },
          deregisterWindowEventHandler: function() {
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.init = function() {
      this.adapter.hasClass(lt.STACKED) && this.setAutoStackButtons(!1), this.isFullscreen = this.adapter.hasClass(lt.FULLSCREEN);
    }, e.prototype.destroy = function() {
      this.animationTimer && (clearTimeout(this.animationTimer), this.handleAnimationTimerEnd()), this.isFullscreen && this.adapter.deregisterContentEventHandler("scroll", this.contentScrollHandler), this.animFrame.cancelAll(), this.adapter.deregisterWindowEventHandler("resize", this.windowResizeHandler), this.adapter.deregisterWindowEventHandler("orientationchange", this.windowOrientationChangeHandler);
    }, e.prototype.open = function(n) {
      var r = this;
      this.dialogOpen = !0, this.adapter.notifyOpening(), this.adapter.addClass(lt.OPENING), this.isFullscreen && this.adapter.registerContentEventHandler("scroll", this.contentScrollHandler), n && n.isAboveFullscreenDialog && this.adapter.addClass(lt.SCRIM_HIDDEN), this.adapter.registerWindowEventHandler("resize", this.windowResizeHandler), this.adapter.registerWindowEventHandler("orientationchange", this.windowOrientationChangeHandler), this.runNextAnimationFrame(function() {
        r.adapter.addClass(lt.OPEN), r.adapter.addBodyClass(lt.SCROLL_LOCK), r.layout(), r.animationTimer = setTimeout(function() {
          r.handleAnimationTimerEnd(), r.adapter.trapFocus(r.adapter.getInitialFocusEl()), r.adapter.notifyOpened();
        }, us.DIALOG_ANIMATION_OPEN_TIME_MS);
      });
    }, e.prototype.close = function(n) {
      var r = this;
      n === void 0 && (n = ""), this.dialogOpen && (this.dialogOpen = !1, this.adapter.notifyClosing(n), this.adapter.addClass(lt.CLOSING), this.adapter.removeClass(lt.OPEN), this.adapter.removeBodyClass(lt.SCROLL_LOCK), this.isFullscreen && this.adapter.deregisterContentEventHandler("scroll", this.contentScrollHandler), this.adapter.deregisterWindowEventHandler("resize", this.windowResizeHandler), this.adapter.deregisterWindowEventHandler("orientationchange", this.windowOrientationChangeHandler), cancelAnimationFrame(this.animationFrame), this.animationFrame = 0, clearTimeout(this.animationTimer), this.animationTimer = setTimeout(function() {
        r.adapter.releaseFocus(), r.handleAnimationTimerEnd(), r.adapter.notifyClosed(n);
      }, us.DIALOG_ANIMATION_CLOSE_TIME_MS));
    }, e.prototype.showSurfaceScrim = function() {
      var n = this;
      this.adapter.addClass(lt.SURFACE_SCRIM_SHOWING), this.runNextAnimationFrame(function() {
        n.adapter.addClass(lt.SURFACE_SCRIM_SHOWN);
      });
    }, e.prototype.hideSurfaceScrim = function() {
      this.adapter.removeClass(lt.SURFACE_SCRIM_SHOWN), this.adapter.addClass(lt.SURFACE_SCRIM_HIDING);
    }, e.prototype.handleSurfaceScrimTransitionEnd = function() {
      this.adapter.removeClass(lt.SURFACE_SCRIM_HIDING), this.adapter.removeClass(lt.SURFACE_SCRIM_SHOWING);
    }, e.prototype.isOpen = function() {
      return this.dialogOpen;
    }, e.prototype.getEscapeKeyAction = function() {
      return this.escapeKeyAction;
    }, e.prototype.setEscapeKeyAction = function(n) {
      this.escapeKeyAction = n;
    }, e.prototype.getScrimClickAction = function() {
      return this.scrimClickAction;
    }, e.prototype.setScrimClickAction = function(n) {
      this.scrimClickAction = n;
    }, e.prototype.getAutoStackButtons = function() {
      return this.autoStackButtons;
    }, e.prototype.setAutoStackButtons = function(n) {
      this.autoStackButtons = n;
    }, e.prototype.getSuppressDefaultPressSelector = function() {
      return this.suppressDefaultPressSelector;
    }, e.prototype.setSuppressDefaultPressSelector = function(n) {
      this.suppressDefaultPressSelector = n;
    }, e.prototype.layout = function() {
      var n = this;
      this.animFrame.request(To.POLL_LAYOUT_CHANGE, function() {
        n.layoutInternal();
      });
    }, e.prototype.handleClick = function(n) {
      var r = this.adapter.eventTargetMatches(n.target, ya.SCRIM_SELECTOR);
      if (r && this.scrimClickAction !== "")
        this.close(this.scrimClickAction);
      else {
        var i = this.adapter.getActionFromEvent(n);
        i && this.close(i);
      }
    }, e.prototype.handleKeydown = function(n) {
      var r = n.key === "Enter" || n.keyCode === 13;
      if (r) {
        var i = this.adapter.getActionFromEvent(n);
        if (!i) {
          var a = n.composedPath ? n.composedPath()[0] : n.target, o = this.suppressDefaultPressSelector ? !this.adapter.eventTargetMatches(a, this.suppressDefaultPressSelector) : !0;
          r && o && this.adapter.clickDefaultButton();
        }
      }
    }, e.prototype.handleDocumentKeydown = function(n) {
      var r = n.key === "Escape" || n.keyCode === 27;
      r && this.escapeKeyAction !== "" && this.close(this.escapeKeyAction);
    }, e.prototype.handleScrollEvent = function() {
      var n = this;
      this.animFrame.request(To.POLL_SCROLL_POS, function() {
        n.toggleScrollDividerHeader(), n.toggleScrollDividerFooter();
      });
    }, e.prototype.layoutInternal = function() {
      this.autoStackButtons && this.detectStackedButtons(), this.toggleScrollableClasses();
    }, e.prototype.handleAnimationTimerEnd = function() {
      this.animationTimer = 0, this.adapter.removeClass(lt.OPENING), this.adapter.removeClass(lt.CLOSING);
    }, e.prototype.runNextAnimationFrame = function(n) {
      var r = this;
      cancelAnimationFrame(this.animationFrame), this.animationFrame = requestAnimationFrame(function() {
        r.animationFrame = 0, clearTimeout(r.animationTimer), r.animationTimer = setTimeout(n, 0);
      });
    }, e.prototype.detectStackedButtons = function() {
      this.adapter.removeClass(lt.STACKED);
      var n = this.adapter.areButtonsStacked();
      n && this.adapter.addClass(lt.STACKED), n !== this.areButtonsStacked && (this.adapter.reverseButtons(), this.areButtonsStacked = n);
    }, e.prototype.toggleScrollableClasses = function() {
      this.adapter.removeClass(lt.SCROLLABLE), this.adapter.isContentScrollable() && (this.adapter.addClass(lt.SCROLLABLE), this.isFullscreen && (this.toggleScrollDividerHeader(), this.toggleScrollDividerFooter()));
    }, e.prototype.toggleScrollDividerHeader = function() {
      this.adapter.isScrollableContentAtTop() ? this.adapter.hasClass(lt.SCROLL_DIVIDER_HEADER) && this.adapter.removeClass(lt.SCROLL_DIVIDER_HEADER) : this.adapter.addClass(lt.SCROLL_DIVIDER_HEADER);
    }, e.prototype.toggleScrollDividerFooter = function() {
      this.adapter.isScrollableContentAtBottom() ? this.adapter.hasClass(lt.SCROLL_DIVIDER_FOOTER) && this.adapter.removeClass(lt.SCROLL_DIVIDER_FOOTER) : this.adapter.addClass(lt.SCROLL_DIVIDER_FOOTER);
    }, e;
  }(wt)
), Np = /* @__PURE__ */ de('<div class="mdc-dialog__surface-scrim"></div>'), Up = /* @__PURE__ */ de('<div><div><div><!> <!></div></div> <div class="mdc-dialog__scrim"></div></div> <!>', 1);
function ll(t, e) {
  we(e, !0);
  const n = () => Bn(q, "$aboveFullscreenShown", r), [r, i] = ir(), { FocusTrap: a } = ig, { closest: o, matches: u } = ua;
  let l = v(e, "use", 19, () => []), c = v(e, "class", 3, ""), d = v(e, "open", 15, !1), m = v(e, "selection", 3, !1), f = v(e, "escapeKeyAction", 3, "close"), g = v(e, "scrimClickAction", 3, "close"), h = v(e, "autoStackButtons", 3, !0), p = v(e, "fullscreen", 3, !1), b = v(e, "sheet", 3, !1), y = v(e, "noContentPadding", 3, !1), E = v(e, "container$class", 3, ""), S = v(e, "surface$class", 3, ""), _ = /* @__PURE__ */ je(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "open",
    "selection",
    "escapeKeyAction",
    "scrimClickAction",
    "autoStackButtons",
    "fullscreen",
    "sheet",
    "noContentPadding",
    "container$class",
    "surface$class",
    "children",
    "over"
  ]), A, I = /* @__PURE__ */ me(void 0), L = new _i(), C = ye({}), w, B = Gt(!1), $ = _e("SMUI:dialog:aboveFullscreen"), q = _e("SMUI:dialog:aboveFullscreenShown") ?? Gt(!1), z = _e("SMUI:addLayoutListener"), O, x = [], P = (k) => (x.push(k), () => {
    const j = x.indexOf(k);
    j >= 0 && x.splice(j, 1);
  });
  ue("SMUI:dialog:actions:reversed", B), ue("SMUI:addLayoutListener", P), ue("SMUI:dialog:selection", m()), ue("SMUI:dialog:aboveFullscreen", $ || p()), ue("SMUI:dialog:aboveFullscreenShown", q), b() && ue("SMUI:icon-button:context", "dialog:sheet"), Oe(() => {
    s(I) && s(I).getEscapeKeyAction() !== f() && s(I).setEscapeKeyAction(f());
  }), Oe(() => {
    s(I) && s(I).getScrimClickAction() !== g() && s(I).setScrimClickAction(g());
  }), Oe(() => {
    s(I) && s(I).getAutoStackButtons() !== h() && s(I).setAutoStackButtons(h());
  }), Oe(() => {
    h() || Fn(B, !0);
  }), z && (O = z(ie)), Oe(() => {
    s(I) && s(I).isOpen() !== d() && (d() ? s(I).open({ isAboveFullscreenDialog: !!$ }) : s(I).close());
  });
  let N = n();
  Oe(() => {
    p() && s(I) && N !== n() && (N = n(), n() ? s(I).showSurfaceScrim() : s(I).hideSurfaceScrim());
  }), at(() => (w = new a(A, { initialFocusEl: V() ?? void 0 }), X(
    I,
    new Hp({
      addBodyClass: (k) => document.body.classList.add(k),
      addClass: ne,
      areButtonsStacked: () => Mp(R()),
      clickDefaultButton: () => {
        const k = W();
        k && k.click();
      },
      eventTargetMatches: (k, j) => k ? u(k, j) : !1,
      getActionFromEvent: (k) => {
        if (!k.target)
          return "";
        const j = o(k.target, "[data-mdc-dialog-action]");
        return j && j.getAttribute("data-mdc-dialog-action");
      },
      getInitialFocusEl: V,
      hasClass: K,
      isContentScrollable: () => Op(Ie()),
      notifyClosed: (k) => {
        d(!1), Xe(Se(), "SMUIDialogClosed", k ? { action: k } : {});
      },
      notifyClosing: (k) => Xe(Se(), "SMUIDialogClosing", k ? { action: k } : {}),
      notifyOpened: () => Xe(Se(), "SMUIDialogOpened", {}),
      notifyOpening: () => Xe(Se(), "SMUIDialogOpening", {}),
      releaseFocus: () => w.releaseFocus(),
      removeBodyClass: (k) => document.body.classList.remove(k),
      removeClass: F,
      reverseButtons: () => {
        Fn(B, !0);
      },
      trapFocus: () => w.trapFocus(),
      registerContentEventHandler: (k, j) => {
        const ae = Ie();
        ae instanceof HTMLElement && L.on(ae, k, j);
      },
      deregisterContentEventHandler: (k, j) => {
        const ae = Ie();
        ae instanceof HTMLElement && L.off(ae, k, j);
      },
      isScrollableContentAtTop: () => Rp(Ie()),
      isScrollableContentAtBottom: () => Dp(Ie()),
      registerWindowEventHandler: (k, j) => L.on(window, k, j),
      deregisterWindowEventHandler: (k, j) => L.off(window, k, j)
    }),
    !0
  ), s(I).init(), () => {
    var k;
    (k = s(I)) == null || k.destroy(), L.clear();
  })), En(() => {
    O && O();
  });
  function K(k) {
    return k in C ? C[k] : Se().classList.contains(k);
  }
  function ne(k) {
    C[k] || (C[k] = !0);
  }
  function F(k) {
    (!(k in C) || C[k]) && (C[k] = !1);
  }
  function R() {
    return [].slice.call(Se().querySelectorAll(".mdc-dialog__button"));
  }
  function W() {
    return Se().querySelector("[data-mdc-dialog-button-default]");
  }
  function Ie() {
    return Se().querySelector(".mdc-dialog__content");
  }
  function V() {
    return Se().querySelector("[data-mdc-dialog-initial-focus]");
  }
  function H() {
    $ && Fn(q, !0), requestAnimationFrame(() => {
      x.forEach((k) => k());
    });
  }
  function M() {
    x.forEach((k) => k());
  }
  function D() {
    $ && Fn(q, !1);
  }
  function ee() {
    return d();
  }
  function J(k) {
    d(k);
  }
  function ie() {
    var k;
    return (k = s(I)) == null ? void 0 : k.layout();
  }
  function Se() {
    return A;
  }
  var te = { isOpen: ee, setOpen: J, layout: ie, getElement: Se }, se = Up();
  Jn("resize", Oa, () => d() && s(I) && s(I).layout()), Jn("orientationchange", Oa, () => d() && s(I) && s(I).layout()), Jn("keydown", Js.body, (k) => s(I) && s(I).handleDocumentKeydown(k));
  var Re = Z(se), xe = (k) => {
    var j;
    H(), (j = e.onSMUIDialogOpening) == null || j.call(e, k);
  }, Ue = (k) => {
    var j;
    M(), (j = e.onSMUIDialogOpened) == null || j.call(e, k);
  }, Me = (k) => {
    var j;
    D(), (j = e.onSMUIDialogClosed) == null || j.call(e, k);
  }, Pe = (k) => {
    var j;
    s(I) && s(I).handleClick(k), (j = e.onclick) == null || j.call(e, k);
  }, G = (k) => {
    var j;
    s(I) && s(I).handleKeydown(k), (j = e.onkeydown) == null || j.call(e, k);
  };
  ke(
    Re,
    (k, j) => ({
      class: k,
      role: "alertdialog",
      "aria-modal": "true",
      ...j,
      onSMUIDialogOpening: xe,
      onSMUIDialogOpened: Ue,
      onSMUIDialogClosed: Me,
      onclick: Pe,
      onkeydown: G
    }),
    [
      () => He({
        "mdc-dialog": !0,
        "mdc-dialog--stacked": !h(),
        "mdc-dialog--fullscreen": p(),
        "mdc-dialog--sheet": b(),
        "mdc-dialog--no-content-padding": y(),
        "smui-dialog--selection": m(),
        ...C,
        [c()]: !0
      }),
      () => Vn(_, ["container$", "surface$"])
    ]
  );
  var Q = ce(Re);
  ke(Q, (k, j) => ({ class: k, ...j }), [
    () => He({ "mdc-dialog__container": !0, [E()]: !0 }),
    () => it(_, "container$")
  ]);
  var fe = ce(Q);
  ke(fe, (k, j) => ({ class: k, role: "alertdialog", "aria-modal": "true", ...j }), [
    () => He({ "mdc-dialog__surface": !0, [S()]: !0 }),
    () => it(_, "surface$")
  ]);
  var De = ce(fe);
  Ae(De, () => e.children ?? ge);
  var Fe = be(De, 2);
  {
    var ot = (k) => {
      var j = Np();
      Jn("transitionend", j, () => s(I) && s(I).handleSurfaceScrimTransitionEnd()), T(k, j);
    };
    oe(Fe, (k) => {
      p() && k(ot);
    });
  }
  Ce(Re, (k) => A = k, () => A), Ne(Re, (k, j) => Y == null ? void 0 : Y(k, j), l);
  var ft = be(Re, 2);
  Ae(ft, () => e.over ?? ge), T(t, se);
  var he = Le(te);
  return i(), he;
}
function vd(t, e) {
  we(e, !0);
  let n = /* @__PURE__ */ je(e, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return Ce(
    ca(t, $e(
      {
        _smuiClass: "mdc-dialog__header",
        _smuiContexts: { "SMUI:icon-button:context": "dialog:header" },
        tag: "div"
      },
      () => n,
      {
        children: (o, u) => {
          var l = re(), c = Z(l);
          Ae(c, () => e.children ?? ge), T(o, l);
        },
        $$slots: { default: !0 }
      }
    )),
    (o) => r = o,
    () => r
  ), Le(a);
}
function ul(t, e) {
  we(e, !0);
  let n = /* @__PURE__ */ je(e, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return Ce(
    ca(t, $e({ _smuiClass: "mdc-dialog__content", tag: "div" }, () => n, {
      children: (o, u) => {
        var l = re(), c = Z(l);
        Ae(c, () => e.children ?? ge), T(o, l);
      },
      $$slots: { default: !0 }
    })),
    (o) => r = o,
    () => r
  ), Le(a);
}
function cl(t, e) {
  we(e, !0);
  let n = /* @__PURE__ */ je(e, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return Ce(
    ca(t, $e(
      {
        _smuiClass: "mdc-dialog__actions",
        _smuiClassMap: {
          "smui-dialog__actions--reversed": "SMUI:dialog:actions:reversed"
        },
        _smuiContexts: { "SMUI:button:context": "dialog:action" },
        tag: "div"
      },
      () => n,
      {
        children: (o, u) => {
          var l = re(), c = Z(l);
          Ae(c, () => e.children ?? ge), T(o, l);
        },
        $$slots: { default: !0 }
      }
    )),
    (o) => r = o,
    () => r
  ), Le(a);
}
var Fp = /* @__PURE__ */ de('<div class="dialog-title svelte-187m1sc"><!></div> <!> <!>', 1);
function kp(t, e) {
  we(e, !0);
  let n = v(e, "open", 15, !1), r = v(e, "onClose", 3, () => {
  });
  ll(t, {
    "aria-labelledby": "large-scroll-title",
    "aria-describedby": "large-scroll-content",
    onSMUIDialogClosed: (i) => {
      n(!1), r()();
    },
    surface$style: "width: 1080px; max-width: calc(100vw - 32px);",
    get open() {
      return n();
    },
    set open(i) {
      n(i);
    },
    children: (i, a) => {
      var o = Fp(), u = Z(o), l = ce(u);
      Ae(l, () => e.title ?? ge);
      var c = be(u, 2);
      ul(c, {
        id: "large-scroll-content",
        children: (m, f) => {
          var g = re(), h = Z(g);
          Ae(h, () => e.content ?? ge), T(m, g);
        },
        $$slots: { default: !0 }
      });
      var d = be(c, 2);
      cl(d, {
        children: (m, f) => {
          var g = re(), h = Z(g);
          Ae(h, () => e.actions ?? ge), T(m, g);
        },
        $$slots: { default: !0 }
      }), T(i, o);
    },
    $$slots: { default: !0 }
  }), Le();
}
const dl = Gt({
  component: null,
  props: {},
  isOpen: !1
}), Bp = Gt([]);
Bp.subscribe;
const gu = ye({ freeze: !1 });
function Vp(t, e) {
  we(e, !0);
  let n = /* @__PURE__ */ me(void 0), r = /* @__PURE__ */ me(!1);
  const i = dl.subscribe((l) => {
    X(n, l, !0), X(r, l.isOpen, !0), gu.freeze = !1;
  });
  at(() => () => i()), Oe(() => {
    gu.freeze = s(
      r
      // freeze drawer controls when dialog is open
    );
  });
  var a = re(), o = Z(a);
  {
    var u = (l) => {
      var c = re(), d = Z(c);
      rr(d, () => s(n).component, (m, f) => {
        f(m, $e(() => s(n).props, {
          get open() {
            return s(r);
          },
          set open(g) {
            X(r, g, !0);
          }
        }));
      }), T(l, c);
    };
    oe(o, (l) => {
      s(n).isOpen && s(n).component && l(u);
    });
  }
  T(t, a), Le();
}
function cs(t, e = {}) {
  return new Promise((n) => {
    dl.set({
      component: t,
      props: e,
      isOpen: !0,
      resolve: n
    });
  });
}
function ds(t, e) {
  dl.update((n) => {
    var r;
    return (r = n.resolve) == null || r.call(n, { type: t, data: e }), { component: null, props: {}, isOpen: !1 };
  });
}
var Gp = /* @__PURE__ */ de('<div class="oscd-confirm-dialog__content svelte-1eipd40"> </div>');
function fs(t, e) {
  we(e, !0);
  let n = v(e, "open", 15, !1), r = v(e, "title", 3, ""), i = v(e, "message", 3, ""), a = v(e, "confirmActionText", 3, "OK"), o = v(e, "confirmActionColor", 3, "primary"), u = v(e, "cancelActionText", 3, "Cancel"), l = v(e, "color", 3, "var(--mdc-theme-primary, #ff3e00)");
  function c() {
    ds("confirm");
  }
  function d() {
    ds("cancel");
  }
  Jp(t, {
    get title() {
      return r();
    },
    get confirmActionText() {
      return a();
    },
    get confirmActionColor() {
      return o();
    },
    get cancelActionText() {
      return u();
    },
    get color() {
      return l();
    },
    onConfirm: () => c(),
    onCancel: () => d(),
    onClose: () => ds("cancel"),
    width: "100%",
    maxWidth: "500px",
    height: "auto",
    maxHeight: "auto",
    get open() {
      return n();
    },
    set open(f) {
      n(f);
    },
    content: (f) => {
      var g = Gp(), h = ce(g);
      Te(() => ze(h, i())), T(f, g);
    },
    $$slots: { content: !0 }
  }), Le();
}
var jp = /* @__PURE__ */ de('<div class="header svelte-154fm8w"><h4 id="leave-confirm-title" class="svelte-154fm8w"> </h4></div>'), qp = /* @__PURE__ */ de('<p class="message svelte-154fm8w" id="leave-confirm-content"> </p>'), Wp = /* @__PURE__ */ de("<!> <!>", 1), zp = /* @__PURE__ */ de("<!> <!> <!>", 1);
function Kp(t, e) {
  we(e, !0);
  let n = v(e, "open", 15, !1), r = v(e, "title", 3, "Unsaved changes"), i = v(e, "message", 3, "If you leave now, your unsaved changes will be lost."), a = v(e, "discardActionText", 3, "Discard changes"), o = v(e, "cancelActionText", 3, "Keep editing"), u = v(e, "onStay", 3, () => {
  }), l = v(e, "onLeave", 3, () => {
  });
  ll(t, {
    class: "leave-confirm-dialog",
    surface$style: "width: 100%; max-width: 480px;",
    "aria-labelledby": "leave-confirm-title",
    "aria-describedby": "leave-confirm-content",
    get open() {
      return n();
    },
    set open(c) {
      n(c);
    },
    children: (c, d) => {
      var m = zp(), f = Z(m);
      vd(f, {
        children: (p, b) => {
          var y = jp(), E = ce(y), S = ce(E);
          Te(() => ze(S, r())), T(p, y);
        },
        $$slots: { default: !0 }
      });
      var g = be(f, 2);
      ul(g, {
        children: (p, b) => {
          var y = qp(), E = ce(y);
          Te(() => ze(E, i())), T(p, y);
        },
        $$slots: { default: !0 }
      });
      var h = be(g, 2);
      cl(h, {
        class: "leave-confirm-actions",
        children: (p, b) => {
          var y = Wp(), E = Z(y);
          ra(E, {
            type: "button",
            get onclick() {
              return u();
            },
            children: (_, A) => {
              var I = gt();
              Te(() => ze(I, o())), T(_, I);
            },
            $$slots: { default: !0 }
          });
          var S = be(E, 2);
          ra(S, {
            type: "button",
            get onclick() {
              return l();
            },
            style: "background-color: #FF203A; color: white;",
            children: (_, A) => {
              var I = gt();
              Te(() => ze(I, a())), T(_, I);
            },
            $$slots: { default: !0 }
          }), T(p, y);
        },
        $$slots: { default: !0 }
      }), T(c, m);
    },
    $$slots: { default: !0 }
  }), Le();
}
var Xp = /* @__PURE__ */ de('<div class="dialog__title svelte-ec2c4h"><h4 class="svelte-ec2c4h"> </h4> <!></div>'), Zp = /* @__PURE__ */ de("<!> <!>", 1), Yp = /* @__PURE__ */ de('<!> <!> <div class="dialog__actions svelte-ec2c4h"><!></div>', 1), Qp = /* @__PURE__ */ de("<!> <!>", 1);
function Jp(t, e) {
  we(e, !0);
  let n = v(e, "open", 15, !1), r = v(e, "title", 3, ""), i = v(e, "confirmActionText", 3, "Confirm"), a = v(e, "confirmActionColor", 3, "primary"), o = v(e, "cancelActionText", 3, "Cancel"), u = v(e, "width", 3, "80vw"), l = v(e, "maxWidth", 3, "85vw"), c = v(e, "height", 3, "85vh"), d = v(e, "maxHeight", 3, "85vh"), m = v(e, "confirmDisabled", 3, !1), f = v(e, "color", 3, "var(--mdc-theme-primary, #ff3e00)"), g = v(e, "contentPadding", 3, "var(--dialog-h-padding, 1.5rem)"), h = v(e, "showCloseButton", 3, !0), p = v(e, "confirmClose", 3, !1), b = v(e, "onClose", 3, () => {
  }), y = v(e, "onCancel", 3, () => {
  }), E = v(e, "onConfirm", 3, () => {
  }), S = /* @__PURE__ */ me(!1), _ = /* @__PURE__ */ me(null), A = /* @__PURE__ */ me(!1);
  function I(P) {
    p() ? (X(_, P, !0), X(S, !0)) : (X(A, !0), P());
  }
  function L(P) {
    if (s(A)) {
      X(A, !1);
      return;
    }
    P.detail.action === "confirm" ? E()() : I(b());
  }
  function C(P) {
    p() && P.target.classList.contains("mdc-dialog__scrim") && I(b());
  }
  function w(P) {
    p() && n() && P.key === "Escape" && !s(S) && (P.preventDefault(), I(b()));
  }
  function B() {
    X(A, !0), X(S, !1);
    const P = s(_) ?? b();
    X(_, null), P();
  }
  const $ = /* @__PURE__ */ ve(() => m() ? "" : `background-color: ${a() === "primary" ? f() : "#FF203A"}; color: white;`);
  var q = Qp();
  Jn("keydown", Oa, w);
  var z = Z(q);
  {
    let P = /* @__PURE__ */ ve(() => p() ? "" : "close"), N = /* @__PURE__ */ ve(() => p() ? "" : "close"), K = /* @__PURE__ */ ve(() => `width: ${u()}; max-width: ${l()}; height: ${c()}; max-height: ${d()}; --dialog-content-padding: ${g()};`);
    ll(z, {
      "aria-labelledby": "large-scroll-title",
      "aria-describedby": "large-scroll-content",
      onSMUIDialogClosed: L,
      get escapeKeyAction() {
        return s(P);
      },
      get scrimClickAction() {
        return s(N);
      },
      onclick: C,
      surface$class: "oscd-base-dialog__surface",
      get surface$style() {
        return s(K);
      },
      get open() {
        return n();
      },
      set open(ne) {
        n(ne);
      },
      children: (ne, F) => {
        var R = Yp(), W = Z(R);
        vd(W, {
          children: (ee, J) => {
            var ie = Xp(), Se = ce(ie), te = ce(Se), se = be(Se, 2);
            {
              var Re = (xe) => {
                S_(xe, {
                  tabindex: "-1",
                  onClick: () => I(b()),
                  tooltip: "Close",
                  tooltipSide: "left",
                  type: "close",
                  fillColor: "white"
                });
              };
              oe(se, (xe) => {
                h() && xe(Re);
              });
            }
            Te(() => {
              ct(ie, `background-color: ${f()};`), ze(te, r());
            }), T(ee, ie);
          },
          $$slots: { default: !0 }
        });
        var Ie = be(W, 2);
        ul(Ie, {
          id: "dialog__content",
          children: (ee, J) => {
            var ie = re(), Se = Z(ie);
            Ae(Se, () => e.content ?? ge), T(ee, ie);
          },
          $$slots: { default: !0 }
        });
        var V = be(Ie, 2), H = ce(V);
        {
          var M = (ee) => {
            var J = re(), ie = Z(J);
            Ae(ie, () => e.actions, () => ({ requestClose: () => I(y()) })), T(ee, J);
          }, D = (ee) => {
            cl(ee, {
              class: "oscd-dialog__actions",
              children: (J, ie) => {
                var Se = Zp(), te = Z(Se);
                {
                  var se = (xe) => {
                    ra(xe, {
                      type: "button",
                      onclick: () => I(y()),
                      color: "secondary",
                      children: (Ue, Me) => {
                        var Pe = gt();
                        Te(() => ze(Pe, o())), T(Ue, Pe);
                      },
                      $$slots: { default: !0 }
                    });
                  };
                  oe(te, (xe) => {
                    o() && xe(se);
                  });
                }
                var Re = be(te, 2);
                ra(Re, {
                  type: "button",
                  action: "confirm",
                  get disabled() {
                    return m();
                  },
                  get style() {
                    return s($);
                  },
                  children: (xe, Ue) => {
                    var Me = gt();
                    Te(() => ze(Me, i())), T(xe, Me);
                  },
                  $$slots: { default: !0 }
                }), T(J, Se);
              },
              $$slots: { default: !0 }
            });
          };
          oe(H, (ee) => {
            e.actions ? ee(M) : ee(D, !1);
          });
        }
        T(ne, R);
      },
      $$slots: { default: !0 }
    });
  }
  var O = be(z, 2);
  {
    var x = (P) => {
      Kp(P, {
        onStay: () => {
          X(S, !1);
        },
        onLeave: B,
        get open() {
          return s(S);
        },
        set open(N) {
          X(S, N, !0);
        }
      });
    };
    oe(O, (P) => {
      p() && P(x);
    });
  }
  T(t, q), Le();
}
const Wt = [];
for (let t = 0; t < 256; ++t)
  Wt.push((t + 256).toString(16).slice(1));
function $p(t, e = 0) {
  return (Wt[t[e + 0]] + Wt[t[e + 1]] + Wt[t[e + 2]] + Wt[t[e + 3]] + "-" + Wt[t[e + 4]] + Wt[t[e + 5]] + "-" + Wt[t[e + 6]] + Wt[t[e + 7]] + "-" + Wt[t[e + 8]] + Wt[t[e + 9]] + "-" + Wt[t[e + 10]] + Wt[t[e + 11]] + Wt[t[e + 12]] + Wt[t[e + 13]] + Wt[t[e + 14]] + Wt[t[e + 15]]).toLowerCase();
}
let hs;
const eb = new Uint8Array(16);
function tb() {
  if (!hs) {
    if (typeof crypto > "u" || !crypto.getRandomValues)
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    hs = crypto.getRandomValues.bind(crypto);
  }
  return hs(eb);
}
const nb = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), pu = { randomUUID: nb };
function rb(t, e, n) {
  var i;
  if (pu.randomUUID && !e && !t)
    return pu.randomUUID();
  t = t || {};
  const r = t.random ?? ((i = t.rng) == null ? void 0 : i.call(t)) ?? tb();
  if (r.length < 16)
    throw new Error("Random bytes length must be >= 16");
  if (r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, e) {
    if (n = n || 0, n < 0 || n + 16 > e.length)
      throw new RangeError(`UUID byte range ${n}:${n + 15} is out of buffer bounds`);
    for (let a = 0; a < 16; ++a)
      e[n + a] = r[a];
    return e;
  }
  return $p(r);
}
var ib = /* @__PURE__ */ de('<span class="oscd-icon"><!></span>');
function Dt(t, e) {
  var n = ib(), r = ce(n);
  Ae(r, () => e.children ?? ge), T(t, n);
}
var ab = /* @__PURE__ */ _t('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"></path></svg>');
function ob(t, e) {
  let n = v(e, "svgStyles", 3, "");
  Dt(t, {
    children: (r, i) => {
      var a = ab();
      Te(() => ct(a, n())), T(r, a);
    }
  });
}
var sb = /* @__PURE__ */ _t('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"></path></svg>');
function fl(t, e) {
  let n = v(e, "svgStyles", 3, "");
  Dt(t, {
    children: (r, i) => {
      var a = sb();
      Te(() => ct(a, n())), T(r, a);
    }
  });
}
var lb = /* @__PURE__ */ _t('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z"></path></svg>');
function ub(t, e) {
  let n = v(e, "svgStyles", 3, "");
  Dt(t, {
    children: (r, i) => {
      var a = lb();
      Te(() => ct(a, n())), T(r, a);
    }
  });
}
var cb = /* @__PURE__ */ _t('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="m590-160 80 80H240q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h360l200 240v480q0 20-8.5 36.5T768-96L560-302q-17 11-37 16.5t-43 5.5q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 23-5.5 43T618-360l102 104v-356L562-800H240v640h350ZM480-360q33 0 56.5-23.5T560-440q0-33-23.5-56.5T480-520q-33 0-56.5 23.5T400-440q0 33 23.5 56.5T480-360Zm0-80Zm0 0Z"></path></svg>');
function db(t, e) {
  let n = v(e, "svgStyles", 3, "");
  Dt(t, {
    children: (r, i) => {
      var a = cb();
      Te(() => ct(a, n())), T(r, a);
    }
  });
}
var fb = /* @__PURE__ */ _t('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-160q-134 0-227-93t-93-227q0-134 93-227t227-93q69 0 132 28.5T720-690v-110h80v280H520v-80h168q-32-56-87.5-88T480-720q-100 0-170 70t-70 170q0 100 70 170t170 70q77 0 139-44t87-116h84q-28 106-114 173t-196 67Z"></path></svg>');
function hb(t, e) {
  let n = v(e, "svgStyles", 3, "");
  Dt(t, {
    children: (r, i) => {
      var a = fb();
      Te(() => ct(a, n())), T(r, a);
    }
  });
}
var vb = /* @__PURE__ */ _t('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M200-440v-80h560v80H200Z"></path></svg>');
function mb(t, e) {
  let n = v(e, "svgStyles", 3, "");
  Dt(t, {
    children: (r, i) => {
      var a = vb();
      Te(() => ct(a, n())), T(r, a);
    }
  });
}
var gb = /* @__PURE__ */ _t('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"></path></svg>');
function md(t, e) {
  let n = v(e, "svgStyles", 3, "");
  Dt(t, {
    children: (r, i) => {
      var a = gb();
      Te(() => ct(a, n())), T(r, a);
    }
  });
}
var pb = /* @__PURE__ */ _t('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"></path></svg>');
function gd(t, e) {
  let n = v(e, "svgStyles", 3, "");
  Dt(t, {
    children: (r, i) => {
      var a = pb();
      Te(() => ct(a, n())), T(r, a);
    }
  });
}
var bb = /* @__PURE__ */ _t('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z"></path></svg>');
function _b(t, e) {
  let n = v(e, "svgStyles", 3, "");
  Dt(t, {
    children: (r, i) => {
      var a = bb();
      Te(() => ct(a, n())), T(r, a);
    }
  });
}
var yb = /* @__PURE__ */ _t('<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"></path><path d="M16 8h-2v3h-3v2h3v3h2v-3h3v-2h-3zM2 12c0-2.79 1.64-5.2 4.01-6.32V3.52C2.52 4.76 0 8.09 0 12s2.52 7.24 6.01 8.48v-2.16C3.64 17.2 2 14.79 2 12zm13-9c-4.96 0-9 4.04-9 9s4.04 9 9 9 9-4.04 9-9-4.04-9-9-9zm0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7z"></path></svg>');
function Ib(t, e) {
  let n = v(e, "svgStyles", 3, "");
  Dt(t, {
    children: (r, i) => {
      var a = yb();
      Te(() => ct(a, n())), T(r, a);
    }
  });
}
yf();
var Sb = /* @__PURE__ */ _t('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M440-280h80v-240h-80v240Zm40-320q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0 520q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"></path></svg>');
function Eb(t, e) {
  let n = v(e, "svgStyles", 3, "");
  Dt(t, {
    children: (r, i) => {
      var a = Sb();
      Te(() => ct(a, n())), T(r, a);
    }
  });
}
var Ab = /* @__PURE__ */ _t('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"></path></svg>');
function Cb(t, e) {
  let n = v(e, "svgStyles", 3, "");
  Dt(t, {
    children: (r, i) => {
      var a = Ab();
      Te(() => ct(a, n())), T(r, a);
    }
  });
}
var Tb = /* @__PURE__ */ _t('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960"><path d="m176-120-56-56 301-302-181-45 198-123-17-234 179 151 216-88-87 217 151 178-234-16-124 198-45-181-301 301Zm24-520-80-80 80-80 80 80-80 80Zm355 197 48-79 93 7-60-71 35-86-86 35-71-59 7 92-79 49 90 22 23 90Zm165 323-80-80 80-80 80 80-80 80ZM569-570Z"></path></svg>');
function xb(t, e) {
  let n = v(e, "svgStyles", 3, "");
  Dt(t, {
    children: (r, i) => {
      var a = Tb();
      Te(() => ct(a, n())), T(r, a);
    }
  });
}
var wb = /* @__PURE__ */ _t('<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m770-302-60-62q40-11 65-42.5t25-73.5q0-50-35-85t-85-35H520v-80h160q83 0 141.5 58.5T880-480q0 57-29.5 105T770-302ZM634-440l-80-80h86v80h-6ZM792-56 56-792l56-56 736 736-56 56ZM440-280H280q-83 0-141.5-58.5T80-480q0-69 42-123t108-71l74 74h-24q-50 0-85 35t-35 85q0 50 35 85t85 35h160v80ZM320-440v-80h65l79 80H320Z"></path></svg>');
function Lb(t, e) {
  let n = v(e, "svgStyles", 3, "");
  Dt(t, {
    children: (r, i) => {
      var a = wb();
      Te(() => ct(a, n())), T(r, a);
    }
  });
}
var Ob = /* @__PURE__ */ _t('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"></path></svg>');
function Rb(t, e) {
  let n = v(e, "svgStyles", 3, "");
  Dt(t, {
    children: (r, i) => {
      var a = Ob();
      Te(() => ct(a, n())), T(r, a);
    }
  });
}
var Db = /* @__PURE__ */ _t('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" height="24px"><path d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z"></path></svg>');
function Mb(t, e) {
  let n = v(e, "svgStyles", 8, "");
  Dt(t, {
    children: (r, i) => {
      var a = Db();
      Te(() => ct(a, n())), T(r, a);
    }
  });
}
var Pb = /* @__PURE__ */ _t('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3" cursor="pointer"><path d="M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160Zm40 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"></path></svg>');
function Hb(t, e) {
  let n = v(e, "svgStyles", 8, "");
  Dt(t, {
    children: (r, i) => {
      var a = Pb();
      Te(() => ct(a, n())), T(r, a);
    }
  });
}
var Nb = /* @__PURE__ */ _t('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m480-240 160-160-56-56-64 64v-168h-80v168l-64-64-56 56 160 160ZM200-640v440h560v-440H200Zm0 520q-33 0-56.5-23.5T120-200v-499q0-14 4.5-27t13.5-24l50-61q11-14 27.5-21.5T250-840h460q18 0 34.5 7.5T772-811l50 61q9 11 13.5 24t4.5 27v499q0 33-23.5 56.5T760-120H200Zm16-600h528l-34-40H250l-34 40Zm264 300Z"></path></svg>');
function Ub(t, e) {
  let n = v(e, "svgStyles", 8, "");
  Dt(t, {
    children: (r, i) => {
      var a = Nb();
      Te(() => ct(a, n())), T(r, a);
    }
  });
}
var Fb = /* @__PURE__ */ _t('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z"></path></svg>');
function kb(t, e) {
  let n = v(e, "svgStyles", 3, "");
  Dt(t, {
    children: (r, i) => {
      var a = Fb();
      Te(() => ct(a, n())), T(r, a);
    }
  });
}
var Bb = /* @__PURE__ */ _t('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M480-624 288-432l51 51 105-105v390h72v-390l105 105 51-51-192-192ZM163-264q-33-48-50-103T96-480q0-80 30-149.5t82.5-122Q261-804 331-834t149.5-30q79.5 0 149 30t122 82.5Q804-699 834-629.5T864-480q0 58-17.5 113T797-264l-51-52q23-38 34.5-79t11.5-85q0-130-91-221t-221-91q-130 0-221 91t-91 221q0 44 11.5 85.5T214-316l-51 52Z"></path></svg>');
function Vb(t, e) {
  let n = v(e, "svgStyles", 3, "");
  Dt(t, {
    children: (r, i) => {
      var a = Bb();
      Te(() => ct(a, n())), T(r, a);
    }
  });
}
function Gb(t, e) {
  e(t.target.value);
}
var jb = /* @__PURE__ */ de('<div class="custom-text-field svelte-1719vm0"><input type="date" id="datetime-picker" class="custom-text-field__input svelte-1719vm0" placeholder=""/> <label for="datetime-picker" class="custom-floating-label svelte-1719vm0"> </label> <span class="custom-line svelte-1719vm0"></span></div>');
function qb(t, e) {
  we(e, !0);
  let n = v(e, "label", 3, ""), r = v(e, "value", 15, "");
  var i = jb(), a = ce(i);
  a.__change = [Gb, r];
  var o = be(a, 2), u = ce(o);
  Te(() => ze(u, n())), Ma(a, r), T(t, i), Le();
}
Sn(["change"]);
function Wb(t, e) {
  e(t.target.value);
}
var zb = /* @__PURE__ */ de('<div class="custom-text-field svelte-6wdfbb"><input type="datetime-local" id="datetime-picker" class="custom-text-field__input svelte-6wdfbb" placeholder=""/> <label for="datetime-picker" class="custom-floating-label svelte-6wdfbb"> </label> <span class="custom-line svelte-6wdfbb"></span></div>');
function Kb(t, e) {
  we(e, !0);
  let n = v(e, "label", 3, ""), r = v(e, "value", 15, "");
  var i = zb(), a = ce(i);
  a.__change = [Wb, r];
  var o = be(a, 2), u = ce(o);
  Te(() => ze(u, n())), Ma(a, r), T(t, i), Le();
}
Sn(["change"]);
function Xb(t, e, n, r) {
  e() && ((t.key === "Enter" || t.key === " ") && (t.preventDefault(), n()), t.key === "Escape" && (t.preventDefault(), r()));
}
var Zb = /* @__PURE__ */ de('<span role="button" tabindex="0" aria-labelledby="tooltip"><!></span>');
function Na(t, e) {
  we(e, !0);
  let n = v(e, "content", 3, ""), r = v(e, "side", 3, "top"), i = v(e, "hoverDelay", 3, 0), a = v(e, "transitionDuration", 3, 80), o = v(e, "disabled", 3, !1), u = v(e, "offset", 3, 8), l = v(e, "backgroundColor", 3, "#000"), c = v(e, "paddingY", 3, 6), d = v(e, "paddingX", 3, 10), m = v(e, "textColor", 3, "#fff");
  const f = `tt-${Math.random().toString(36).slice(2)}`;
  let g = /* @__PURE__ */ me(null), h = /* @__PURE__ */ me(null), p = /* @__PURE__ */ me(null), b = /* @__PURE__ */ me(null), y = /* @__PURE__ */ me(!1), E = /* @__PURE__ */ me(null), S = /* @__PURE__ */ me(null);
  function _(x) {
    var W;
    if (!x || !x.trim().startsWith("var(")) return x;
    const P = x.match(/^var\(\s*([^,\s)]+)\s*(?:,\s*([^)]+)\s*)?\)$/);
    if (!P) return x;
    const N = P[1], K = (W = P[2]) == null ? void 0 : W.trim(), ne = s(g) ? getComputedStyle(s(g)).getPropertyValue(N) : "", F = getComputedStyle(document.documentElement).getPropertyValue(N), R = (ne || F).trim();
    return R || K || x;
  }
  function A() {
    !n() || o() || (s(E) && clearTimeout(s(E)), i() > 0 ? X(E, setTimeout(() => X(y, !0), i()), !0) : X(y, !0));
  }
  function I() {
    s(E) && clearTimeout(s(E)), X(y, !1);
  }
  function L() {
    A();
  }
  function C() {
    I();
  }
  function w() {
    A();
  }
  function B() {
    I();
  }
  function $() {
    if (!s(h) || !s(b) || !s(g) || o()) return;
    const x = s(g).getBoundingClientRect(), P = s(b).getBoundingClientRect();
    let N = 0, K = 0;
    const ne = u();
    switch (r()) {
      case "top":
        N = x.top - P.height - ne, K = x.left + x.width / 2 - P.width / 2;
        break;
      case "bottom":
        N = x.bottom + ne, K = x.left + x.width / 2 - P.width / 2;
        break;
      case "left":
        N = x.top + x.height / 2 - P.height / 2, K = x.left - P.width - ne;
        break;
      case "right":
        N = x.top + x.height / 2 - P.height / 2, K = x.right + ne;
        break;
    }
    s(h).style.top = `${N + window.scrollY}px`, s(h).style.left = `${K + window.scrollX}px`;
  }
  function q() {
    var x;
    (x = s(S)) == null || x.disconnect(), X(S, null), s(h) && s(h).parentNode && s(h).parentNode.removeChild(s(h)), X(h, null), X(b, null), X(p, null), s(E) && clearTimeout(s(E));
  }
  En(q), Oe(() => {
    if (!(!s(y) || !n() || o())) {
      if (!s(h)) {
        X(h, document.createElement("div"), !0), s(h).style.position = "absolute", s(h).style.zIndex = "9999", s(h).style.pointerEvents = "none", s(h).style.opacity = "0", s(h).style.transition = `opacity ${a()}ms ease`, s(h).id = f, s(h).setAttribute("role", "tooltip"), document.body.appendChild(s(h)), X(p, s(h).attachShadow({ mode: "open" }), !0);
        const x = document.createElement("style"), P = _(l()), N = _(m());
        x.textContent = `
        .bubble {
          --pad-y: ${c()}px;
          --pad-x: ${d()}px;
          --radius: 4px;
          --bg: ${P};
          --fg: ${N};
          background: var(--bg);
          color: var(--fg);
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
          background: var(--bg);
          width: 8px;
          height: 8px;
          transform: rotate(45deg);
        }
        .bubble.top::after { left: 50%; bottom: -4px; transform: translateX(-50%) rotate(45deg); }
        .bubble.bottom::after { left: 50%; top: -4px; transform: translateX(-50%) rotate(45deg); }
        .bubble.left::after { top: 50%; right: -4px; transform: translateY(-50%) rotate(45deg); }
        .bubble.right::after { top: 50%; left: -4px; transform: translateY(-50%) rotate(45deg); }
      `, s(p).appendChild(x), X(b, document.createElement("div"), !0), s(p).appendChild(s(b)), X(
          S,
          new MutationObserver(() => {
            s(y) && $();
          }),
          !0
        ), s(S).observe(document.body, { childList: !0, subtree: !0 });
      }
      s(b) && (s(b).className = `bubble ${r()}`, s(b).innerHTML = n()), s(h) && (s(h).style.opacity = "1", $());
    }
  }), Oe(() => {
    if (s(y) || !s(h))
      return;
    s(h).style.opacity = "0";
    const x = s(h), P = setTimeout(
      () => {
        x && x.parentNode && x.parentNode.removeChild(x), s(h) === x && q();
      },
      a()
    );
    return () => clearTimeout(P);
  });
  var z = Zb();
  z.__keydown = [Xb, n, A, I];
  var O = ce(z);
  Ae(O, () => e.children ?? ge), Ce(z, (x) => X(g, x), () => s(g)), Te(() => {
    br(z, "aria-describedby", n() && !o() ? f : void 0), br(z, "aria-haspopup", n() ? "true" : void 0), br(z, "aria-expanded", n() ? s(y) ? "true" : "false" : void 0);
  }), Jn("mouseenter", z, L), Jn("mouseleave", z, C), Jn("focus", z, w), Jn("blur", z, B), T(t, z), Le();
}
Sn(["keydown"]);
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
var Ia = {
  ANIM_CHECKED_INDETERMINATE: "mdc-checkbox--anim-checked-indeterminate",
  ANIM_CHECKED_UNCHECKED: "mdc-checkbox--anim-checked-unchecked",
  ANIM_INDETERMINATE_CHECKED: "mdc-checkbox--anim-indeterminate-checked",
  ANIM_INDETERMINATE_UNCHECKED: "mdc-checkbox--anim-indeterminate-unchecked",
  ANIM_UNCHECKED_CHECKED: "mdc-checkbox--anim-unchecked-checked",
  ANIM_UNCHECKED_INDETERMINATE: "mdc-checkbox--anim-unchecked-indeterminate",
  BACKGROUND: "mdc-checkbox__background",
  CHECKED: "mdc-checkbox--checked",
  CHECKMARK: "mdc-checkbox__checkmark",
  CHECKMARK_PATH: "mdc-checkbox__checkmark-path",
  DISABLED: "mdc-checkbox--disabled",
  INDETERMINATE: "mdc-checkbox--indeterminate",
  MIXEDMARK: "mdc-checkbox__mixedmark",
  NATIVE_CONTROL: "mdc-checkbox__native-control",
  ROOT: "mdc-checkbox",
  SELECTED: "mdc-checkbox--selected",
  UPGRADED: "mdc-checkbox--upgraded"
}, An = {
  ARIA_CHECKED_ATTR: "aria-checked",
  ARIA_CHECKED_INDETERMINATE_VALUE: "mixed",
  DATA_INDETERMINATE_ATTR: "data-indeterminate",
  NATIVE_CONTROL_SELECTOR: ".mdc-checkbox__native-control",
  TRANSITION_STATE_CHECKED: "checked",
  TRANSITION_STATE_INDETERMINATE: "indeterminate",
  TRANSITION_STATE_INIT: "init",
  TRANSITION_STATE_UNCHECKED: "unchecked"
}, bu = {
  ANIM_END_LATCH_MS: 250
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
var Yb = (
  /** @class */
  function(t) {
    Ke(e, t);
    function e(n) {
      var r = t.call(this, pe(pe({}, e.defaultAdapter), n)) || this;
      return r.currentCheckState = An.TRANSITION_STATE_INIT, r.currentAnimationClass = "", r.animEndLatchTimer = 0, r.enableAnimationEndHandler = !1, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Ia;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return An;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return bu;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
      get: function() {
        return {
          addClass: function() {
          },
          forceLayout: function() {
          },
          hasNativeControl: function() {
            return !1;
          },
          isAttachedToDOM: function() {
            return !1;
          },
          isChecked: function() {
            return !1;
          },
          isIndeterminate: function() {
            return !1;
          },
          removeClass: function() {
          },
          removeNativeControlAttr: function() {
          },
          setNativeControlAttr: function() {
          },
          setNativeControlDisabled: function() {
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.init = function() {
      this.currentCheckState = this.determineCheckState(), this.updateAriaChecked(), this.adapter.addClass(Ia.UPGRADED);
    }, e.prototype.destroy = function() {
      clearTimeout(this.animEndLatchTimer);
    }, e.prototype.setDisabled = function(n) {
      this.adapter.setNativeControlDisabled(n), n ? this.adapter.addClass(Ia.DISABLED) : this.adapter.removeClass(Ia.DISABLED);
    }, e.prototype.handleAnimationEnd = function() {
      var n = this;
      this.enableAnimationEndHandler && (clearTimeout(this.animEndLatchTimer), this.animEndLatchTimer = setTimeout(function() {
        n.adapter.removeClass(n.currentAnimationClass), n.enableAnimationEndHandler = !1;
      }, bu.ANIM_END_LATCH_MS));
    }, e.prototype.handleChange = function() {
      this.transitionCheckState();
    }, e.prototype.transitionCheckState = function() {
      if (this.adapter.hasNativeControl()) {
        var n = this.currentCheckState, r = this.determineCheckState();
        if (n !== r) {
          this.updateAriaChecked();
          var i = An.TRANSITION_STATE_UNCHECKED, a = Ia.SELECTED;
          r === i ? this.adapter.removeClass(a) : this.adapter.addClass(a), this.currentAnimationClass.length > 0 && (clearTimeout(this.animEndLatchTimer), this.adapter.forceLayout(), this.adapter.removeClass(this.currentAnimationClass)), this.currentAnimationClass = this.getTransitionAnimationClass(n, r), this.currentCheckState = r, this.adapter.isAttachedToDOM() && this.currentAnimationClass.length > 0 && (this.adapter.addClass(this.currentAnimationClass), this.enableAnimationEndHandler = !0);
        }
      }
    }, e.prototype.determineCheckState = function() {
      var n = An.TRANSITION_STATE_INDETERMINATE, r = An.TRANSITION_STATE_CHECKED, i = An.TRANSITION_STATE_UNCHECKED;
      return this.adapter.isIndeterminate() ? n : this.adapter.isChecked() ? r : i;
    }, e.prototype.getTransitionAnimationClass = function(n, r) {
      var i = An.TRANSITION_STATE_INIT, a = An.TRANSITION_STATE_CHECKED, o = An.TRANSITION_STATE_UNCHECKED, u = e.cssClasses, l = u.ANIM_UNCHECKED_CHECKED, c = u.ANIM_UNCHECKED_INDETERMINATE, d = u.ANIM_CHECKED_UNCHECKED, m = u.ANIM_CHECKED_INDETERMINATE, f = u.ANIM_INDETERMINATE_CHECKED, g = u.ANIM_INDETERMINATE_UNCHECKED;
      switch (n) {
        case i:
          return r === o ? "" : r === a ? f : g;
        case o:
          return r === a ? l : c;
        case a:
          return r === o ? d : m;
        default:
          return r === a ? f : g;
      }
    }, e.prototype.updateAriaChecked = function() {
      this.adapter.isIndeterminate() ? this.adapter.setNativeControlAttr(An.ARIA_CHECKED_ATTR, An.ARIA_CHECKED_INDETERMINATE_VALUE) : this.adapter.removeNativeControlAttr(An.ARIA_CHECKED_ATTR);
    }, e;
  }(wt)
);
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
var pn = {
  CLOSED_CLASS: "mdc-linear-progress--closed",
  CLOSED_ANIMATION_OFF_CLASS: "mdc-linear-progress--closed-animation-off",
  INDETERMINATE_CLASS: "mdc-linear-progress--indeterminate",
  REVERSED_CLASS: "mdc-linear-progress--reversed",
  ANIMATION_READY_CLASS: "mdc-linear-progress--animation-ready"
}, Pn = {
  ARIA_HIDDEN: "aria-hidden",
  ARIA_VALUEMAX: "aria-valuemax",
  ARIA_VALUEMIN: "aria-valuemin",
  ARIA_VALUENOW: "aria-valuenow",
  BUFFER_BAR_SELECTOR: ".mdc-linear-progress__buffer-bar",
  FLEX_BASIS: "flex-basis",
  PRIMARY_BAR_SELECTOR: ".mdc-linear-progress__primary-bar"
}, Sa = {
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
var Qb = (
  /** @class */
  function(t) {
    Ke(e, t);
    function e(n) {
      var r = t.call(this, pe(pe({}, e.defaultAdapter), n)) || this;
      return r.observer = null, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return pn;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Pn;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
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
    }), e.prototype.init = function() {
      var n = this;
      this.determinate = !this.adapter.hasClass(pn.INDETERMINATE_CLASS), this.adapter.addClass(pn.ANIMATION_READY_CLASS), this.progress = 0, this.buffer = 1, this.observer = this.adapter.attachResizeObserver(function(r) {
        var i, a;
        if (!n.determinate)
          try {
            for (var o = Bt(r), u = o.next(); !u.done; u = o.next()) {
              var l = u.value;
              l.contentRect && n.calculateAndSetDimensions(l.contentRect.width);
            }
          } catch (c) {
            i = { error: c };
          } finally {
            try {
              u && !u.done && (a = o.return) && a.call(o);
            } finally {
              if (i) throw i.error;
            }
          }
      }), !this.determinate && this.observer && this.calculateAndSetDimensions(this.adapter.getWidth());
    }, e.prototype.setDeterminate = function(n) {
      if (this.determinate = n, this.determinate) {
        this.adapter.removeClass(pn.INDETERMINATE_CLASS), this.adapter.setAttribute(Pn.ARIA_VALUENOW, this.progress.toString()), this.adapter.setAttribute(Pn.ARIA_VALUEMAX, "1"), this.adapter.setAttribute(Pn.ARIA_VALUEMIN, "0"), this.setPrimaryBarProgress(this.progress), this.setBufferBarProgress(this.buffer);
        return;
      }
      this.observer && this.calculateAndSetDimensions(this.adapter.getWidth()), this.adapter.addClass(pn.INDETERMINATE_CLASS), this.adapter.removeAttribute(Pn.ARIA_VALUENOW), this.adapter.removeAttribute(Pn.ARIA_VALUEMAX), this.adapter.removeAttribute(Pn.ARIA_VALUEMIN), this.setPrimaryBarProgress(1), this.setBufferBarProgress(1);
    }, e.prototype.isDeterminate = function() {
      return this.determinate;
    }, e.prototype.setProgress = function(n) {
      this.progress = n, this.determinate && (this.setPrimaryBarProgress(n), this.adapter.setAttribute(Pn.ARIA_VALUENOW, n.toString()));
    }, e.prototype.getProgress = function() {
      return this.progress;
    }, e.prototype.setBuffer = function(n) {
      this.buffer = n, this.determinate && this.setBufferBarProgress(n);
    }, e.prototype.getBuffer = function() {
      return this.buffer;
    }, e.prototype.open = function() {
      this.adapter.removeClass(pn.CLOSED_CLASS), this.adapter.removeClass(pn.CLOSED_ANIMATION_OFF_CLASS), this.adapter.removeAttribute(Pn.ARIA_HIDDEN);
    }, e.prototype.close = function() {
      this.adapter.addClass(pn.CLOSED_CLASS), this.adapter.setAttribute(Pn.ARIA_HIDDEN, "true");
    }, e.prototype.isClosed = function() {
      return this.adapter.hasClass(pn.CLOSED_CLASS);
    }, e.prototype.handleTransitionEnd = function() {
      this.adapter.hasClass(pn.CLOSED_CLASS) && this.adapter.addClass(pn.CLOSED_ANIMATION_OFF_CLASS);
    }, e.prototype.destroy = function() {
      t.prototype.destroy.call(this), this.observer && this.observer.disconnect();
    }, e.prototype.restartAnimation = function() {
      this.adapter.removeClass(pn.ANIMATION_READY_CLASS), this.adapter.forceLayout(), this.adapter.addClass(pn.ANIMATION_READY_CLASS);
    }, e.prototype.setPrimaryBarProgress = function(n) {
      var r = "scaleX(" + n + ")", i = typeof window < "u" ? sp(window, "transform") : "transform";
      this.adapter.setPrimaryBarStyle(i, r);
    }, e.prototype.setBufferBarProgress = function(n) {
      var r = n * 100 + "%";
      this.adapter.setBufferBarStyle(Pn.FLEX_BASIS, r);
    }, e.prototype.calculateAndSetDimensions = function(n) {
      var r = n * Sa.PRIMARY_HALF, i = n * Sa.PRIMARY_FULL, a = n * Sa.SECONDARY_QUARTER, o = n * Sa.SECONDARY_HALF, u = n * Sa.SECONDARY_FULL;
      this.adapter.setStyle("--mdc-linear-progress-primary-half", r + "px"), this.adapter.setStyle("--mdc-linear-progress-primary-half-neg", -r + "px"), this.adapter.setStyle("--mdc-linear-progress-primary-full", i + "px"), this.adapter.setStyle("--mdc-linear-progress-primary-full-neg", -i + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-quarter", a + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-quarter-neg", -a + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-half", o + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-half-neg", -o + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-full", u + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-full-neg", -u + "px"), this.restartAnimation();
    }, e;
  }(wt)
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
var dr = {
  HEADER_CELL_SORTED: "mdc-data-table__header-cell--sorted",
  HEADER_CELL_SORTED_DESCENDING: "mdc-data-table__header-cell--sorted-descending",
  IN_PROGRESS: "mdc-data-table--in-progress",
  ROW_SELECTED: "mdc-data-table__row--selected"
}, _u = {
  ARIA_SELECTED: "aria-selected",
  ARIA_SORT: "aria-sort"
}, ei = {
  ARIA_SELECTED: _u.ARIA_SELECTED,
  ARIA_SORT: _u.ARIA_SORT
}, _n;
(function(t) {
  t.ASCENDING = "ascending", t.DESCENDING = "descending", t.NONE = "none", t.OTHER = "other";
})(_n || (_n = {}));
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
var Jb = (
  /** @class */
  function(t) {
    Ke(e, t);
    function e(n) {
      return t.call(this, pe(pe({}, e.defaultAdapter), n)) || this;
    }
    return Object.defineProperty(e, "defaultAdapter", {
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
    }), e.prototype.layout = function() {
      this.adapter.isRowsSelectable() && (this.adapter.registerHeaderRowCheckbox(), this.adapter.registerRowCheckboxes(), this.setHeaderRowCheckboxState());
    }, e.prototype.layoutAsync = function() {
      return Pc(this, void 0, void 0, function() {
        return al(this, function(n) {
          switch (n.label) {
            case 0:
              return this.adapter.isRowsSelectable() ? [4, this.adapter.registerHeaderRowCheckbox()] : [3, 3];
            case 1:
              return n.sent(), [4, this.adapter.registerRowCheckboxes()];
            case 2:
              n.sent(), this.setHeaderRowCheckboxState(), n.label = 3;
            case 3:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, e.prototype.getRows = function() {
      return this.adapter.getRowElements();
    }, e.prototype.getHeaderCells = function() {
      return this.adapter.getHeaderCellElements();
    }, e.prototype.setSelectedRowIds = function(n) {
      for (var r = 0; r < this.adapter.getRowCount(); r++) {
        var i = this.adapter.getRowIdAtIndex(r), a = !1;
        i && n.indexOf(i) >= 0 && (a = !0), this.adapter.setRowCheckboxCheckedAtIndex(r, a), this.selectRowAtIndex(r, a);
      }
      this.setHeaderRowCheckboxState();
    }, e.prototype.getRowIds = function() {
      for (var n = [], r = 0; r < this.adapter.getRowCount(); r++)
        n.push(this.adapter.getRowIdAtIndex(r));
      return n;
    }, e.prototype.getSelectedRowIds = function() {
      for (var n = [], r = 0; r < this.adapter.getRowCount(); r++)
        this.adapter.isCheckboxAtRowIndexChecked(r) && n.push(this.adapter.getRowIdAtIndex(r));
      return n;
    }, e.prototype.handleHeaderRowCheckboxChange = function() {
      for (var n = this.adapter.isHeaderRowCheckboxChecked(), r = 0; r < this.adapter.getRowCount(); r++)
        this.adapter.setRowCheckboxCheckedAtIndex(r, n), this.selectRowAtIndex(r, n);
      n ? this.adapter.notifySelectedAll() : this.adapter.notifyUnselectedAll();
    }, e.prototype.handleRowCheckboxChange = function(n) {
      var r = this.adapter.getRowIndexByChildElement(n.target);
      if (r !== -1) {
        var i = this.adapter.isCheckboxAtRowIndexChecked(r);
        this.selectRowAtIndex(r, i), this.setHeaderRowCheckboxState();
        var a = this.adapter.getRowIdAtIndex(r);
        this.adapter.notifyRowSelectionChanged({ rowId: a, rowIndex: r, selected: i });
      }
    }, e.prototype.handleSortAction = function(n) {
      for (var r = n.columnId, i = n.columnIndex, a = n.headerCell, o = 0; o < this.adapter.getHeaderCellCount(); o++)
        o !== i && (this.adapter.removeClassNameByHeaderCellIndex(o, dr.HEADER_CELL_SORTED), this.adapter.removeClassNameByHeaderCellIndex(o, dr.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(o, ei.ARIA_SORT, _n.NONE), this.adapter.setSortStatusLabelByHeaderCellIndex(o, _n.NONE));
      this.adapter.setClassNameByHeaderCellIndex(i, dr.HEADER_CELL_SORTED);
      var u = this.adapter.getAttributeByHeaderCellIndex(i, ei.ARIA_SORT), l = _n.NONE;
      u === _n.ASCENDING ? (this.adapter.setClassNameByHeaderCellIndex(i, dr.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(i, ei.ARIA_SORT, _n.DESCENDING), l = _n.DESCENDING) : u === _n.DESCENDING ? (this.adapter.removeClassNameByHeaderCellIndex(i, dr.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(i, ei.ARIA_SORT, _n.ASCENDING), l = _n.ASCENDING) : (this.adapter.setAttributeByHeaderCellIndex(i, ei.ARIA_SORT, _n.ASCENDING), l = _n.ASCENDING), this.adapter.setSortStatusLabelByHeaderCellIndex(i, l), this.adapter.notifySortAction({
        columnId: r,
        columnIndex: i,
        headerCell: a,
        sortValue: l
      });
    }, e.prototype.handleRowClick = function(n) {
      var r = n.rowId, i = n.row;
      this.adapter.notifyRowClick({
        rowId: r,
        row: i
      });
    }, e.prototype.showProgress = function() {
      var n = this.adapter.getTableHeaderHeight(), r = this.adapter.getTableContainerHeight() - n, i = n;
      this.adapter.setProgressIndicatorStyles({
        height: r + "px",
        top: i + "px"
      }), this.adapter.addClass(dr.IN_PROGRESS);
    }, e.prototype.hideProgress = function() {
      this.adapter.removeClass(dr.IN_PROGRESS);
    }, e.prototype.setHeaderRowCheckboxState = function() {
      this.adapter.getSelectedRowCount() === 0 ? (this.adapter.setHeaderRowCheckboxChecked(!1), this.adapter.setHeaderRowCheckboxIndeterminate(!1)) : this.adapter.getSelectedRowCount() === this.adapter.getRowCount() ? (this.adapter.setHeaderRowCheckboxChecked(!0), this.adapter.setHeaderRowCheckboxIndeterminate(!1)) : (this.adapter.setHeaderRowCheckboxIndeterminate(!0), this.adapter.setHeaderRowCheckboxChecked(!1));
    }, e.prototype.selectRowAtIndex = function(n, r) {
      r ? (this.adapter.addClassAtRowIndex(n, dr.ROW_SELECTED), this.adapter.setAttributeAtRowIndex(n, ei.ARIA_SELECTED, "true")) : (this.adapter.removeClassAtRowIndex(n, dr.ROW_SELECTED), this.adapter.setAttributeAtRowIndex(n, ei.ARIA_SELECTED, "false"));
    }, e;
  }(wt)
), $b = /* @__PURE__ */ de('<div class="mdc-data-table__progress-indicator"><div class="mdc-data-table__scrim"></div> <!></div>'), e_ = /* @__PURE__ */ de("<div><div><table><!></table></div> <!> <!></div>");
function t_(t, e) {
  we(e, !0);
  const n = () => Bn(z, "$progressClosed", r), [r, i] = ir(), { closest: a } = ua;
  let o = v(e, "use", 19, () => []), u = v(e, "class", 3, ""), l = v(e, "stickyHeader", 3, !1), c = v(e, "sortable", 3, !1), d = v(e, "sort", 15, null), m = v(e, "sortDirection", 15, "ascending"), f = v(e, "sortAscendingAriaLabel", 3, "sorted, ascending"), g = v(e, "sortDescendingAriaLabel", 3, "sorted, descending"), h = v(e, "container$use", 19, () => []), p = v(e, "container$class", 3, ""), b = v(e, "table$use", 19, () => []), y = v(e, "table$class", 3, ""), E = /* @__PURE__ */ je(e, [
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
  ]), S, _ = /* @__PURE__ */ me(void 0), A, I = /* @__PURE__ */ me(void 0), L = /* @__PURE__ */ me(void 0), C = ye({}), w = /* @__PURE__ */ me(ye({ height: "auto", top: "initial" })), B = _e("SMUI:addLayoutListener"), $, q = !1, z = Gt(!1), O = Gt(d());
  Oe(() => {
    Fn(O, d());
  });
  let x = Gt(m());
  Oe(() => {
    Fn(x, m());
  }), ue("SMUI:checkbox:context", "data-table"), ue("SMUI:linear-progress:context", "data-table"), ue("SMUI:linear-progress:closed", z), ue("SMUI:data-table:sortable", c()), ue("SMUI:data-table:sort", O), ue("SMUI:data-table:sortDirection", x), ue("SMUI:data-table:sortAscendingAriaLabel", f()), ue("SMUI:data-table:sortDescendingAriaLabel", g()), B && ($ = B(V));
  let P;
  Oe(() => {
    e.progress && s(_) && P !== n() && (P = n(), n() ? s(_).hideProgress() : s(_).showProgress());
  }), ue("SMUI:checkbox:mount", () => {
    s(_) && q && s(_).layout();
  }), ue("SMUI:data-table:header:mount", (G) => {
    X(I, G, !0);
  }), ue("SMUI:data-table:header:unmount", () => {
    X(I, void 0);
  }), ue("SMUI:data-table:body:mount", (G) => {
    X(L, G, !0);
  }), ue("SMUI:data-table:body:unmount", () => {
    X(L, void 0);
  }), at(() => (X(
    _,
    new Jb({
      addClass: K,
      removeClass: ne,
      getHeaderCellElements: () => {
        var G;
        return ((G = s(I)) == null ? void 0 : G.cells.map((Q) => Q.element)) ?? [];
      },
      getHeaderCellCount: () => {
        var G;
        return ((G = s(I)) == null ? void 0 : G.cells.length) ?? 0;
      },
      getAttributeByHeaderCellIndex: (G, Q) => {
        var fe;
        return ((fe = s(I)) == null ? void 0 : fe.orderedCells[G].getAttr(Q)) ?? null;
      },
      setAttributeByHeaderCellIndex: (G, Q, fe) => {
        var De;
        (De = s(I)) == null || De.orderedCells[G].addAttr(Q, fe);
      },
      setClassNameByHeaderCellIndex: (G, Q) => {
        var fe;
        (fe = s(I)) == null || fe.orderedCells[G].addClass(Q);
      },
      removeClassNameByHeaderCellIndex: (G, Q) => {
        var fe;
        (fe = s(I)) == null || fe.orderedCells[G].removeClass(Q);
      },
      notifySortAction: (G) => {
        d(G.columnId), m(G.sortValue), Xe(H(), "SMUIDataTableSorted", G);
      },
      getTableContainerHeight: () => A.getBoundingClientRect().height,
      getTableHeaderHeight: () => {
        const G = H().querySelector(".mdc-data-table__header-row");
        if (!G)
          throw new Error("MDCDataTable: Table header element not found.");
        return G.getBoundingClientRect().height;
      },
      setProgressIndicatorStyles: (G) => {
        X(w, G, !0);
      },
      addClassAtRowIndex: (G, Q) => {
        var fe;
        (fe = s(L)) == null || fe.orderedRows[G].addClass(Q);
      },
      getRowCount: () => {
        var G;
        return ((G = s(L)) == null ? void 0 : G.rows.length) ?? 0;
      },
      getRowElements: () => {
        var G;
        return ((G = s(L)) == null ? void 0 : G.rows.map((Q) => Q.element)) ?? [];
      },
      getRowIdAtIndex: (G) => {
        var Q;
        return ((Q = s(L)) == null ? void 0 : Q.orderedRows[G].rowId) ?? null;
      },
      getRowIndexByChildElement: (G) => {
        var Q;
        return ((Q = s(L)) == null ? void 0 : Q.orderedRows.map((fe) => fe.element).indexOf(a(G, ".mdc-data-table__row"))) ?? -1;
      },
      getSelectedRowCount: () => {
        var G;
        return ((G = s(L)) == null ? void 0 : G.rows.filter((Q) => Q.selected).length) ?? 0;
      },
      isCheckboxAtRowIndexChecked: (G) => {
        var fe;
        const Q = (fe = s(L)) == null ? void 0 : fe.orderedRows[G].checkbox;
        return Q ? Q.checked : !1;
      },
      isHeaderRowCheckboxChecked: () => {
        var Q;
        const G = (Q = s(I)) == null ? void 0 : Q.checkbox;
        return G ? G.checked : !1;
      },
      isRowsSelectable: () => !!H().querySelector(".mdc-data-table__row-checkbox") || !!H().querySelector(".mdc-data-table__header-row-checkbox"),
      notifyRowSelectionChanged: (G) => {
        var fe;
        const Q = (fe = s(L)) == null ? void 0 : fe.orderedRows[G.rowIndex];
        Q && Xe(H(), "SMUIDataTableSelectionChanged", {
          row: Q.element,
          rowId: Q.rowId,
          rowIndex: G.rowIndex,
          selected: G.selected
        });
      },
      notifySelectedAll: () => {
        F(!1), Xe(H(), "SMUIDataTableSelectedAll");
      },
      notifyUnselectedAll: () => {
        F(!1), Xe(H(), "SMUIDataTableUnselectedAll");
      },
      notifyRowClick: (G) => Xe(H(), "SMUIDataTableClickRow", G),
      registerHeaderRowCheckbox: () => {
      },
      registerRowCheckboxes: () => {
      },
      removeClassAtRowIndex: (G, Q) => {
        var fe;
        (fe = s(L)) == null || fe.orderedRows[G].removeClass(Q);
      },
      setAttributeAtRowIndex: (G, Q, fe) => {
        var De;
        (De = s(L)) == null || De.orderedRows[G].addAttr(Q, fe);
      },
      setHeaderRowCheckboxChecked: (G) => {
        var fe;
        const Q = (fe = s(I)) == null ? void 0 : fe.checkbox;
        Q && (Q.checked = G);
      },
      setHeaderRowCheckboxIndeterminate: F,
      setRowCheckboxCheckedAtIndex: (G, Q) => {
        var De;
        const fe = (De = s(L)) == null ? void 0 : De.orderedRows[G].checkbox;
        fe && (fe.checked = Q);
      },
      setSortStatusLabelByHeaderCellIndex: (G, Q) => {
      }
    }),
    !0
  ), s(_).init(), s(_).layout(), q = !0, () => {
    var G;
    (G = s(_)) == null || G.destroy();
  })), En(() => {
    $ && $();
  });
  function N(G) {
    s(_) && s(_).handleRowCheckboxChange(G);
  }
  function K(G) {
    C[G] || (C[G] = !0);
  }
  function ne(G) {
    (!(G in C) || C[G]) && (C[G] = !1);
  }
  function F(G) {
    var fe;
    const Q = (fe = s(I)) == null ? void 0 : fe.checkbox;
    Q && (Q.indeterminate = G);
  }
  function R(G) {
    if (!s(_) || !G.detail.target)
      return;
    const Q = a(G.detail.target, ".mdc-data-table__header-cell--with-sort");
    Q && Ie(Q);
  }
  function W(G) {
    if (!s(_) || !G.detail.target)
      return;
    const Q = a(G.detail.target, ".mdc-data-table__row");
    Q && s(_) && s(_).handleRowClick({ rowId: G.detail.rowId, row: Q });
  }
  function Ie(G) {
    var Fe, ot;
    const Q = ((Fe = s(I)) == null ? void 0 : Fe.orderedCells) ?? [], fe = Q.map((ft) => ft.element).indexOf(G);
    if (fe === -1)
      return;
    const De = Q[fe].columnId ?? null;
    (ot = s(_)) == null || ot.handleSortAction({ columnId: De, columnIndex: fe, headerCell: G });
  }
  function V() {
    var G;
    return (G = s(_)) == null ? void 0 : G.layout();
  }
  function H() {
    return S;
  }
  var M = { layout: V, getElement: H }, D = e_(), ee = (G) => {
    var Q;
    s(_) && s(_).handleHeaderRowCheckboxChange(), (Q = e.onSMUIDataTableHeaderCheckboxChange) == null || Q.call(e, G);
  }, J = (G) => {
    var Q;
    R(G), (Q = e.onSMUIDataTableHeaderClick) == null || Q.call(e, G);
  }, ie = (G) => {
    var Q;
    W(G), (Q = e.onSMUIDataTableRowClick) == null || Q.call(e, G);
  }, Se = (G) => {
    var Q;
    N(G), (Q = e.onSMUIDataTableBodyCheckboxChange) == null || Q.call(e, G);
  };
  ke(
    D,
    (G, Q) => ({
      class: G,
      ...Q,
      onSMUIDataTableHeaderCheckboxChange: ee,
      onSMUIDataTableHeaderClick: J,
      onSMUIDataTableRowClick: ie,
      onSMUIDataTableBodyCheckboxChange: Se
    }),
    [
      () => He({
        "mdc-data-table": !0,
        "mdc-data-table--sticky-header": l(),
        ...C,
        [u()]: !0
      }),
      () => Vn(E, ["container$", "table$"])
    ]
  );
  var te = ce(D);
  ke(te, (G, Q) => ({ class: G, ...Q }), [
    () => He({
      "mdc-data-table__table-container": !0,
      [p()]: !0
    }),
    () => it(E, "container$")
  ]);
  var se = ce(te);
  ke(se, (G, Q) => ({ class: G, ...Q }), [
    () => He({ "mdc-data-table__table": !0, [y()]: !0 }),
    () => it(E, "table$")
  ]);
  var Re = ce(se);
  Ae(Re, () => e.children ?? ge), Ne(se, (G, Q) => Y == null ? void 0 : Y(G, Q), b), Ce(te, (G) => A = G, () => A), Ne(te, (G, Q) => Y == null ? void 0 : Y(G, Q), h);
  var xe = be(te, 2);
  {
    var Ue = (G) => {
      var Q = $b(), fe = be(ce(Q), 2);
      Ae(fe, () => e.progress ?? ge), Te((De) => ct(Q, De), [
        () => Object.entries(s(w)).map(([De, Fe]) => `${De}: ${Fe};`).join(" ")
      ]), T(G, Q);
    };
    oe(xe, (G) => {
      e.progress && G(Ue);
    });
  }
  var Me = be(xe, 2);
  Ae(Me, () => e.paginate ?? ge), Ce(D, (G) => S = G, () => S), Ne(D, (G, Q) => Y == null ? void 0 : Y(G, Q), o), T(t, D);
  var Pe = Le(M);
  return i(), Pe;
}
var n_ = /* @__PURE__ */ de("<thead><!></thead>");
function r_(t, e) {
  we(e, !0);
  let n = v(e, "use", 19, () => []), r = /* @__PURE__ */ je(e, ["$$slots", "$$events", "$$legacy", "use", "children"]), i, a = /* @__PURE__ */ me(void 0), o = [];
  const u = /* @__PURE__ */ new WeakMap();
  ue("SMUI:data-table:row:header", !0);
  const l = _e("SMUI:checkbox:mount");
  ue("SMUI:checkbox:mount", (y) => {
    X(a, y, !0), l && l(y);
  });
  const c = _e("SMUI:checkbox:unmount");
  ue("SMUI:checkbox:unmount", (y) => {
    X(a, void 0), c && c(y);
  }), ue("SMUI:data-table:cell:mount", (y) => {
    o.push(y), u.set(y.element, y);
  }), ue("SMUI:data-table:cell:unmount", (y) => {
    const E = o.findIndex((S) => S === y);
    E !== -1 && o.splice(E, 1), u.delete(y.element);
  });
  const d = _e("SMUI:data-table:header:mount"), m = _e("SMUI:data-table:header:unmount");
  at(() => {
    const y = {
      get cells() {
        return o;
      },
      get orderedCells() {
        return f();
      },
      get checkbox() {
        return s(a);
      }
    };
    return d && d(y), () => {
      m && m(y);
    };
  });
  function f() {
    return [
      ...g().querySelectorAll(".mdc-data-table__header-cell")
    ].map((y) => u.get(y)).filter((y) => y && y._smui_data_table_header_cell_accessor);
  }
  function g() {
    return i;
  }
  var h = { getElement: g }, p = n_();
  ke(p, () => ({ ...r }));
  var b = ce(p);
  return Ae(b, () => e.children ?? ge), Ce(p, (y) => i = y, () => i), Ne(p, (y, E) => Y == null ? void 0 : Y(y, E), n), T(t, p), Le(h);
}
var i_ = /* @__PURE__ */ de("<tbody><!></tbody>");
function a_(t, e) {
  we(e, !0);
  let n = v(e, "use", 19, () => []), r = v(e, "class", 3, ""), i = /* @__PURE__ */ je(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "children"
  ]), a, o = [];
  const u = /* @__PURE__ */ new WeakMap();
  ue("SMUI:data-table:row:header", !1), ue("SMUI:data-table:row:mount", (p) => {
    o.push(p), u.set(p.element, p);
  }), ue("SMUI:data-table:row:unmount", (p) => {
    const b = o.findIndex((y) => y === p);
    b !== -1 && o.splice(b, 1), u.delete(p.element);
  });
  const l = _e("SMUI:data-table:body:mount"), c = _e("SMUI:data-table:body:unmount");
  at(() => {
    const p = {
      get rows() {
        return o;
      },
      get orderedRows() {
        return d();
      }
    };
    return l && l(p), () => {
      c && c(p);
    };
  });
  function d() {
    return [...m().querySelectorAll(".mdc-data-table__row")].map((p) => u.get(p)).filter((p) => p && p._smui_data_table_row_accessor);
  }
  function m() {
    return a;
  }
  var f = { getElement: m }, g = i_();
  ke(g, (p) => ({ class: p, ...i }), [
    () => He({ "mdc-data-table__content": !0, [r()]: !0 })
  ]);
  var h = ce(g);
  return Ae(h, () => e.children ?? ge), Ce(g, (p) => a = p, () => a), Ne(g, (p, b) => Y == null ? void 0 : Y(p, b), n), T(t, g), Le(f);
}
let o_ = 0;
var s_ = /* @__PURE__ */ de("<tr><!></tr>");
function ro(t, e) {
  we(e, !0);
  let n = v(e, "use", 19, () => []), r = v(e, "class", 3, ""), i = v(e, "rowId", 19, () => "SMUI-data-table-row-" + o_++), a = /* @__PURE__ */ je(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "rowId",
    "children"
  ]), o, u = /* @__PURE__ */ me(void 0), l = ye({}), c = ye({}), d = _e("SMUI:data-table:row:header");
  const m = _e("SMUI:checkbox:mount");
  ue("SMUI:checkbox:mount", (B) => {
    X(u, B, !0), m && m(B);
  });
  const f = _e("SMUI:checkbox:unmount");
  ue("SMUI:checkbox:unmount", (B) => {
    X(u, void 0), f && f(B);
  });
  const g = _e("SMUI:data-table:row:mount"), h = _e("SMUI:data-table:row:unmount");
  at(() => {
    const B = d ? {
      _smui_data_table_row_accessor: !1,
      get element() {
        return A();
      },
      get checkbox() {
        return s(u);
      },
      get rowId() {
      },
      get selected() {
        return (s(u) && s(u).checked) ?? !1;
      },
      addClass: p,
      removeClass: b,
      getAttr: y,
      addAttr: E
    } : {
      _smui_data_table_row_accessor: !0,
      get element() {
        return A();
      },
      get checkbox() {
        return s(u);
      },
      get rowId() {
        return i();
      },
      get selected() {
        return (s(u) && s(u).checked) ?? !1;
      },
      addClass: p,
      removeClass: b,
      getAttr: y,
      addAttr: E
    };
    return g && g(B), () => {
      h && h(B);
    };
  });
  function p(B) {
    l[B] || (l[B] = !0);
  }
  function b(B) {
    (!(B in l) || l[B]) && (l[B] = !1);
  }
  function y(B) {
    return B in c ? c[B] ?? null : A().getAttribute(B);
  }
  function E(B, $) {
    c[B] !== $ && (c[B] = $);
  }
  function S(B) {
    Xe(A(), "SMUIDataTableHeaderClick", B);
  }
  function _(B) {
    Xe(A(), "SMUIDataTableRowClick", { rowId: i(), target: B.target });
  }
  function A() {
    return o;
  }
  var I = { getElement: A }, L = s_(), C = (B) => {
    var $;
    d ? S(B) : _(B), ($ = e.onclick) == null || $.call(e, B);
  };
  ke(
    L,
    (B) => ({
      class: B,
      "aria-selected": s(u) ? s(u).checked ? "true" : "false" : void 0,
      ...c,
      ...a,
      onclick: C
    }),
    [
      () => He({
        "mdc-data-table__header-row": d,
        "mdc-data-table__row": !d,
        "mdc-data-table__row--selected": !d && s(u) && s(u).checked,
        ...l,
        [r()]: !0
      })
    ]
  );
  var w = ce(L);
  return Ae(w, () => e.children ?? ge), Ce(L, (B) => o = B, () => o), Ne(L, (B, $) => Y == null ? void 0 : Y(B, $), n), T(t, L), Le(I);
}
let l_ = 0;
var u_ = /* @__PURE__ */ de('<div class="mdc-data-table__header-cell-wrapper"><!> <div class="mdc-data-table__sort-status-label" aria-hidden="true"> </div></div>'), c_ = /* @__PURE__ */ de("<th><!></th>"), d_ = /* @__PURE__ */ de("<td><!></td>");
function Ea(t, e) {
  we(e, !0);
  const n = () => Bn(y, "$sort", i), r = () => Bn(E, "$sortDirection", i), [i, a] = ir();
  let o = _e("SMUI:data-table:row:header"), u = v(e, "use", 19, () => []), l = v(e, "class", 3, ""), c = v(e, "numeric", 3, !1), d = v(e, "checkbox", 3, !1), m = v(e, "columnId", 19, () => o ? "SMUI-data-table-column-" + l_++ : "SMUI-data-table-unused"), f = v(e, "sortable", 19, () => _e("SMUI:data-table:sortable")), g = /* @__PURE__ */ je(e, [
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
  ]), h, p = ye({}), b = ye({}), y = _e("SMUI:data-table:sort"), E = _e("SMUI:data-table:sortDirection"), S = _e("SMUI:data-table:sortAscendingAriaLabel"), _ = _e("SMUI:data-table:sortDescendingAriaLabel");
  f() && (ue("SMUI:label:context", "data-table:sortable-header-cell"), ue("SMUI:icon-button:context", "data-table:sortable-header-cell"), ue("SMUI:icon-button:aria-describedby", m() + "-status-label"));
  const A = _e("SMUI:data-table:cell:mount"), I = _e("SMUI:data-table:cell:unmount");
  at(() => {
    const F = o ? {
      _smui_data_table_header_cell_accessor: !0,
      get element() {
        return z();
      },
      get columnId() {
        return m();
      },
      addClass: L,
      removeClass: C,
      getAttr: w,
      addAttr: B
    } : {
      _smui_data_table_header_cell_accessor: !1,
      get element() {
        return z();
      },
      get columnId() {
      },
      addClass: L,
      removeClass: C,
      getAttr: w,
      addAttr: B
    };
    return A && A(F), () => {
      I && I(F);
    };
  });
  function L(F) {
    p[F] || (p[F] = !0);
  }
  function C(F) {
    (!(F in p) || p[F]) && (p[F] = !1);
  }
  function w(F) {
    return F in b ? b[F] ?? null : z().getAttribute(F);
  }
  function B(F, R) {
    b[F] !== R && (b[F] = R);
  }
  function $(F) {
    Xe(z(), "SMUIDataTableHeaderCheckboxChange", F);
  }
  function q(F) {
    Xe(z(), "SMUIDataTableBodyCheckboxChange", F);
  }
  function z() {
    return h;
  }
  var O = { getElement: z }, x = re(), P = Z(x);
  {
    var N = (F) => {
      var R = c_(), W = (M) => {
        var D;
        d() && $(M), (D = e.onchange) == null || D.call(e, M);
      };
      ke(
        R,
        (M) => ({
          class: M,
          role: "columnheader",
          scope: "col",
          "data-column-id": m(),
          "aria-sort": f() ? n() === m() ? r() : "none" : void 0,
          ...b,
          ...g,
          onchange: W
        }),
        [
          () => He({
            "mdc-data-table__header-cell": !0,
            "mdc-data-table__header-cell--numeric": c(),
            "mdc-data-table__header-cell--checkbox": d(),
            "mdc-data-table__header-cell--with-sort": f(),
            "mdc-data-table__header-cell--sorted": f() && n() === m(),
            ...p,
            [l()]: !0
          })
        ]
      );
      var Ie = ce(R);
      {
        var V = (M) => {
          var D = u_(), ee = ce(D);
          Ae(ee, () => e.children ?? ge);
          var J = be(ee, 2), ie = ce(J);
          Te(() => {
            br(J, "id", `${m() ?? ""}-status-label`), ze(ie, n() === m() ? r() === "ascending" ? S : _ : "");
          }), T(M, D);
        }, H = (M) => {
          var D = re(), ee = Z(D);
          Ae(ee, () => e.children ?? ge), T(M, D);
        };
        oe(Ie, (M) => {
          f() ? M(V) : M(H, !1);
        });
      }
      Ce(R, (M) => h = M, () => h), Ne(R, (M, D) => Y == null ? void 0 : Y(M, D), u), T(F, R);
    }, K = (F) => {
      var R = d_(), W = (V) => {
        var H;
        d() && q(V), (H = e.onchange) == null || H.call(e, V);
      };
      ke(
        R,
        (V) => ({
          class: V,
          ...b,
          ...g,
          onchange: W
        }),
        [
          () => He({
            "mdc-data-table__cell": !0,
            "mdc-data-table__cell--numeric": c(),
            "mdc-data-table__cell--checkbox": d(),
            ...p,
            [l()]: !0
          })
        ]
      );
      var Ie = ce(R);
      Ae(Ie, () => e.children ?? ge), Ce(R, (V) => h = V, () => h), Ne(R, (V, H) => Y == null ? void 0 : Y(V, H), u), T(F, R);
    };
    oe(P, (F) => {
      o ? F(N) : F(K, !1);
    });
  }
  T(t, x);
  var ne = Le(O);
  return a(), ne;
}
var f_ = /* @__PURE__ */ de('<div><div class="mdc-linear-progress__buffer"><div class="mdc-linear-progress__buffer-bar"></div> <div class="mdc-linear-progress__buffer-dots"></div></div> <div class="mdc-linear-progress__bar mdc-linear-progress__primary-bar"><span class="mdc-linear-progress__bar-inner"></span></div> <div class="mdc-linear-progress__bar mdc-linear-progress__secondary-bar"><span class="mdc-linear-progress__bar-inner"></span></div></div>');
function h_(t, e) {
  we(e, !0);
  const [n, r] = ir();
  let i = v(e, "use", 19, () => []), a = v(e, "class", 3, ""), o = v(e, "style", 3, ""), u = v(e, "indeterminate", 3, !1), l = v(e, "closed", 3, !1), c = v(e, "progress", 3, 0), d = v(e, "buffer", 3, void 0), m = /* @__PURE__ */ je(e, [
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
  ]), f, g = /* @__PURE__ */ me(void 0), h = ye({}), p = ye({}), b = ye({}), y = ye({}), E = ye({}), S = _e("SMUI:linear-progress:context"), _ = _e("SMUI:linear-progress:closed");
  Oe(() => {
    _ && Fn(_, l());
  }), Oe(() => {
    s(g) && s(g).isDeterminate() !== !u() && s(g).setDeterminate(!u());
  }), Oe(() => {
    s(g) && s(g).getProgress() !== c() && s(g).setProgress(c());
  }), Oe(() => {
    s(g) && (d() == null ? s(g).setBuffer(1) : s(g).setBuffer(d()));
  }), Oe(() => {
    s(g) && (l() ? s(g).close() : s(g).open());
  }), at(() => (X(
    g,
    new Qb({
      addClass: I,
      forceLayout: () => {
        z().getBoundingClientRect();
      },
      setBufferBarStyle: $,
      setPrimaryBarStyle: q,
      hasClass: A,
      removeAttribute: w,
      removeClass: L,
      setAttribute: C,
      setStyle: B,
      attachResizeObserver: (R) => {
        const W = window.ResizeObserver;
        if (W) {
          const Ie = new W(R);
          return Ie.observe(z()), Ie;
        }
        return null;
      },
      getWidth: () => z().offsetWidth
    }),
    !0
  ), s(g).init(), () => {
    var R;
    (R = s(g)) == null || R.destroy();
  }));
  function A(R) {
    return R in h ? h[R] : z().classList.contains(R);
  }
  function I(R) {
    h[R] || (h[R] = !0);
  }
  function L(R) {
    (!(R in h) || h[R]) && (h[R] = !1);
  }
  function C(R, W) {
    p[R] !== W && (p[R] = W);
  }
  function w(R) {
    (!(R in p) || p[R] != null) && (p[R] = void 0);
  }
  function B(R, W) {
    b[R] != W && (W === "" || W == null ? delete b[R] : b[R] = W);
  }
  function $(R, W) {
    y[R] != W && (W === "" || W == null ? delete y[R] : y[R] = W);
  }
  function q(R, W) {
    E[R] != W && (W === "" || W == null ? delete E[R] : E[R] = W);
  }
  function z() {
    return f;
  }
  var O = { getElement: z }, x = f_(), P = (R) => {
    var W;
    s(g) && s(g).handleTransitionEnd(), (W = e.ontransitionend) == null || W.call(e, R);
  };
  ke(
    x,
    (R, W) => ({
      class: R,
      style: W,
      role: "progressbar",
      "aria-valuemin": 0,
      "aria-valuemax": 1,
      "aria-valuenow": u() ? void 0 : c(),
      ...p,
      ...m,
      ontransitionend: P
    }),
    [
      () => He({
        "mdc-linear-progress": !0,
        "mdc-linear-progress--indeterminate": u(),
        "mdc-linear-progress--closed": l(),
        "mdc-data-table__linear-progress": S === "data-table",
        ...h,
        [a()]: !0
      }),
      () => Object.entries(b).map(([R, W]) => `${R}: ${W};`).concat([o()]).join(" ")
    ]
  );
  var N = ce(x), K = ce(N), ne = be(N, 2);
  Ce(x, (R) => f = R, () => f), Ne(x, (R, W) => Y == null ? void 0 : Y(R, W), i), Te(
    (R, W) => {
      ct(K, R), ct(ne, W);
    },
    [
      () => Object.entries(y).map(([R, W]) => `${R}: ${W};`).join(" "),
      () => Object.entries(E).map(([R, W]) => `${R}: ${W};`).join(" ")
    ]
  ), T(t, x);
  var F = Le(O);
  return r(), F;
}
Sn(["click"]);
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
var v_ = {
  ROOT: "mdc-form-field"
}, m_ = {
  LABEL_SELECTOR: ".mdc-form-field > label"
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
var g_ = (
  /** @class */
  function(t) {
    Ke(e, t);
    function e(n) {
      var r = t.call(this, pe(pe({}, e.defaultAdapter), n)) || this;
      return r.click = function() {
        r.handleClick();
      }, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return v_;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return m_;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
      get: function() {
        return {
          activateInputRipple: function() {
          },
          deactivateInputRipple: function() {
          },
          deregisterInteractionHandler: function() {
          },
          registerInteractionHandler: function() {
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.init = function() {
      this.adapter.registerInteractionHandler("click", this.click);
    }, e.prototype.destroy = function() {
      this.adapter.deregisterInteractionHandler("click", this.click);
    }, e.prototype.handleClick = function() {
      var n = this;
      this.adapter.activateInputRipple(), requestAnimationFrame(function() {
        n.adapter.deactivateInputRipple();
      });
    }, e;
  }(wt)
);
let p_ = 0;
var b_ = /* @__PURE__ */ de("<div><!> <label><!></label></div>");
function __(t, e) {
  we(e, !0);
  let n = v(e, "use", 19, () => []), r = v(e, "class", 3, ""), i = v(e, "align", 3, "start"), a = v(e, "noWrap", 3, !1), o = v(e, "inputId", 19, () => "SMUI-form-field-" + p_++), u = v(e, "label$use", 19, () => []), l = /* @__PURE__ */ je(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "align",
    "noWrap",
    "inputId",
    "label$use",
    "children",
    "label"
  ]), c, d = /* @__PURE__ */ me(void 0), m = new _i(), f, g = /* @__PURE__ */ me(void 0);
  ue("SMUI:generic:input:props", { id: o() }), ue("SMUI:generic:input:mount", (_) => {
    X(g, _, !0);
  }), ue("SMUI:generic:input:unmount", () => {
    X(g, void 0);
  }), at(() => (X(
    d,
    new g_({
      activateInputRipple: () => {
        s(g) && s(g).activateRipple();
      },
      deactivateInputRipple: () => {
        s(g) && s(g).deactivateRipple();
      },
      deregisterInteractionHandler: (_, A) => m.off(f, _, A),
      registerInteractionHandler: (_, A) => m.on(f, _, A)
    }),
    !0
  ), s(d).init(), () => {
    var _;
    (_ = s(d)) == null || _.destroy(), m.clear();
  }));
  function h() {
    return c;
  }
  var p = { getElement: h }, b = b_();
  ke(b, (_, A) => ({ class: _, ...A }), [
    () => He({
      "mdc-form-field": !0,
      "mdc-form-field--align-end": i() === "end",
      "mdc-form-field--nowrap": a(),
      [r()]: !0
    }),
    () => Vn(l, ["label$"])
  ]);
  var y = ce(b);
  Ae(y, () => e.children ?? ge);
  var E = be(y, 2);
  ke(E, (_) => ({ for: o(), ..._ }), [() => it(l, "label$")]);
  var S = ce(E);
  return Ae(S, () => e.label ?? ge), Ce(E, (_) => f = _, () => f), Ne(E, (_, A) => Y == null ? void 0 : Y(_, A), u), Ce(b, (_) => c = _, () => c), Ne(b, (_, A) => Y == null ? void 0 : Y(_, A), n), T(t, b), Le(p);
}
var y_ = (t, e) => {
  var n;
  t.stopPropagation(), (n = e.onClick) == null || n.call(e, t);
}, I_ = /* @__PURE__ */ de('<button class="icon-button svelte-jv2py4"><!></button>');
function S_(t, e) {
  we(e, !0);
  let n = v(e, "tooltipSide", 3, "top"), r = v(e, "showDelay", 3, 1e3), i = v(e, "fillColor", 3, "var(--mdc-theme-primary)"), a = v(e, "size", 3, "20px"), o = /* @__PURE__ */ ve(() => `fill: ${i()}; margin: 0; width: ${a()}; height: ${a()};`);
  Na(t, {
    get content() {
      return e.tooltip;
    },
    get hoverDelay() {
      return r();
    },
    get side() {
      return n();
    },
    children: (u, l) => {
      var c = I_();
      c.__click = [y_, e];
      var d = ce(c);
      {
        var m = (g) => {
          gd(g, {
            get svgStyles() {
              return s(o);
            }
          });
        }, f = (g) => {
          var h = re(), p = Z(h);
          {
            var b = (E) => {
              Ib(E, {
                get svgStyles() {
                  return s(o);
                }
              });
            }, y = (E) => {
              var S = re(), _ = Z(S);
              {
                var A = (L) => {
                  md(L, {
                    get svgStyles() {
                      return s(o);
                    }
                  });
                }, I = (L) => {
                  var C = re(), w = Z(C);
                  {
                    var B = (q) => {
                      _b(q, {
                        get svgStyles() {
                          return s(o);
                        }
                      });
                    }, $ = (q) => {
                      var z = re(), O = Z(z);
                      {
                        var x = (N) => {
                          xb(N, {
                            get svgStyles() {
                              return s(o);
                            }
                          });
                        }, P = (N) => {
                          var K = re(), ne = Z(K);
                          {
                            var F = (W) => {
                              Lb(W, {
                                get svgStyles() {
                                  return s(o);
                                }
                              });
                            }, R = (W) => {
                              var Ie = re(), V = Z(Ie);
                              {
                                var H = (D) => {
                                  Rb(D, {
                                    get svgStyles() {
                                      return s(o);
                                    }
                                  });
                                }, M = (D) => {
                                  var ee = re(), J = Z(ee);
                                  {
                                    var ie = (te) => {
                                      Mb(te, {
                                        get svgStyles() {
                                          return s(o);
                                        }
                                      });
                                    }, Se = (te) => {
                                      var se = re(), Re = Z(se);
                                      {
                                        var xe = (Me) => {
                                          kb(Me, {
                                            get svgStyles() {
                                              return s(o);
                                            }
                                          });
                                        }, Ue = (Me) => {
                                          var Pe = re(), G = Z(Pe);
                                          {
                                            var Q = (De) => {
                                              Eb(De, {
                                                get svgStyles() {
                                                  return s(o);
                                                }
                                              });
                                            }, fe = (De) => {
                                              var Fe = re(), ot = Z(Fe);
                                              {
                                                var ft = (k) => {
                                                  Vb(k, {
                                                    get svgStyles() {
                                                      return s(o);
                                                    }
                                                  });
                                                }, he = (k) => {
                                                  var j = gt();
                                                  Te(() => ze(j, `Unsupported supported type: ${e.type ?? ""}`)), T(k, j);
                                                };
                                                oe(
                                                  ot,
                                                  (k) => {
                                                    e.type === "input-circle" ? k(ft) : k(he, !1);
                                                  },
                                                  !0
                                                );
                                              }
                                              T(De, Fe);
                                            };
                                            oe(
                                              G,
                                              (De) => {
                                                e.type === "info" ? De(Q) : De(fe, !1);
                                              },
                                              !0
                                            );
                                          }
                                          T(Me, Pe);
                                        };
                                        oe(
                                          Re,
                                          (Me) => {
                                            e.type === "open_in_new" ? Me(xe) : Me(Ue, !1);
                                          },
                                          !0
                                        );
                                      }
                                      T(te, se);
                                    };
                                    oe(
                                      J,
                                      (te) => {
                                        e.type === "star" ? te(ie) : te(Se, !1);
                                      },
                                      !0
                                    );
                                  }
                                  T(D, ee);
                                };
                                oe(
                                  V,
                                  (D) => {
                                    e.type === "close" ? D(H) : D(M, !1);
                                  },
                                  !0
                                );
                              }
                              T(W, Ie);
                            };
                            oe(
                              ne,
                              (W) => {
                                e.type === "link-off" ? W(F) : W(R, !1);
                              },
                              !0
                            );
                          }
                          T(N, K);
                        };
                        oe(
                          O,
                          (N) => {
                            e.type === "wand-stars" ? N(x) : N(P, !1);
                          },
                          !0
                        );
                      }
                      T(q, z);
                    };
                    oe(
                      w,
                      (q) => {
                        e.type === "visibility" ? q(B) : q($, !1);
                      },
                      !0
                    );
                  }
                  T(L, C);
                };
                oe(
                  _,
                  (L) => {
                    e.type === "edit" ? L(A) : L(I, !1);
                  },
                  !0
                );
              }
              T(E, S);
            };
            oe(
              p,
              (E) => {
                e.type === "duplicate" ? E(b) : E(y, !1);
              },
              !0
            );
          }
          T(g, h);
        };
        oe(d, (g) => {
          e.type === "delete" ? g(m) : g(f, !1);
        });
      }
      Te(() => br(c, "aria-label", e.tooltip)), T(u, c);
    },
    $$slots: { default: !0 }
  }), Le();
}
Sn(["click"]);
function Bs(t, e, n) {
  return e in t ? Object.defineProperty(t, e, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = n, t;
}
var E_ = Object.freeze({
  // This flag exists as a workaround for issue 454 (basically a browser bug) - seems like these rect values take time to update when in grid layout. Setting it to true can cause strange behaviour in the REPL for non-grid zones, see issue 470
  USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT: "USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT"
});
Bs({}, E_.USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT, !1);
var io, yu = {
  DND_ZONE_ACTIVE: "dnd-zone-active",
  DND_ZONE_DRAG_DISABLED: "dnd-zone-drag-disabled"
};
io = {}, Bs(io, yu.DND_ZONE_ACTIVE, "Tab to one the items and press space-bar or enter to start dragging it"), Bs(io, yu.DND_ZONE_DRAG_DISABLED, "This is a disabled drag and drop list");
function A_(t) {
  return t * t * t;
}
function pd(t) {
  const e = t - 1;
  return e * e * e + 1;
}
function C_(t, { from: e, to: n }, r = {}) {
  var { delay: i = 0, duration: a = (I) => Math.sqrt(I) * 120, easing: o = pd } = r, u = getComputedStyle(t), l = u.transform === "none" ? "" : u.transform, [c, d] = u.transformOrigin.split(" ").map(parseFloat);
  c /= t.clientWidth, d /= t.clientHeight;
  var m = T_(t), f = t.clientWidth / n.width / m, g = t.clientHeight / n.height / m, h = e.left + e.width * c, p = e.top + e.height * d, b = n.left + n.width * c, y = n.top + n.height * d, E = (h - b) * f, S = (p - y) * g, _ = e.width / n.width, A = e.height / n.height;
  return {
    delay: i,
    duration: typeof a == "function" ? a(Math.sqrt(E * E + S * S)) : a,
    easing: o,
    css: (I, L) => {
      var C = L * E, w = L * S, B = I + L * _, $ = I + L * A;
      return `transform: ${l} translate(${C}px, ${w}px) scale(${B}, ${$});`;
    }
  };
}
function T_(t) {
  if ("currentCSSZoom" in t)
    return (
      /** @type {number} */
      t.currentCSSZoom
    );
  for (var e = t, n = 1; e !== null; )
    n *= +getComputedStyle(e).zoom, e = /** @type {Element | null} */
    e.parentElement;
  return n;
}
function x_(t) {
  const e = t - 1;
  return e * e * e + 1;
}
function Iu(t) {
  const e = typeof t == "string" && t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
  return e ? [parseFloat(e[1]), e[2] || "px"] : [
    /** @type {number} */
    t,
    "px"
  ];
}
function xo(t, { delay: e = 0, duration: n = 400, easing: r = x_, x: i = 0, y: a = 0, opacity: o = 0 } = {}) {
  const u = getComputedStyle(t), l = +u.opacity, c = u.transform === "none" ? "" : u.transform, d = l * (1 - o), [m, f] = Iu(i), [g, h] = Iu(a);
  return {
    delay: e,
    duration: n,
    easing: r,
    css: (p, b) => `
			transform: ${c} translate(${(1 - p) * m}${f}, ${(1 - p) * g}${h});
			opacity: ${l - d * b}`
  };
}
Sn([
  "click",
  "keydown",
  "pointerdown",
  "pointerup",
  "pointermove"
]);
function w_(t, e) {
  var n;
  (n = e()) == null || n();
}
var L_ = /* @__PURE__ */ de('<div class="detail svelte-4xu36c"> </div>'), O_ = /* @__PURE__ */ de('<div class="toast-card svelte-4xu36c"><div class="icon svelte-4xu36c"><!></div> <div class="content svelte-4xu36c"><div class="summary svelte-4xu36c"> </div> <!></div> <button class="close svelte-4xu36c"><!></button></div>');
function R_(t, e) {
  we(e, !0);
  let n = v(e, "onClose", 3, () => {
  });
  const r = {
    success: "check_circle",
    error: "error",
    info: "info",
    warn: "warning"
  }, i = {
    success: "var(--oscd-status-success)",
    error: "var(--oscd-status-error)",
    info: "var(--oscd-status-info)",
    warn: "var(--oscd-status-warning)"
  };
  var a = O_(), o = ce(a), u = ce(o);
  Us(u, {
    class: "material-icons",
    children: (p, b) => {
      var y = gt();
      Te(() => ze(y, r[e.type])), T(p, y);
    },
    $$slots: { default: !0 }
  });
  var l = be(o, 2), c = ce(l), d = ce(c), m = be(c, 2);
  {
    var f = (p) => {
      var b = L_(), y = ce(b);
      Te(() => ze(y, e.detail)), T(p, b);
    };
    oe(m, (p) => {
      e.detail && p(f);
    });
  }
  var g = be(l, 2);
  g.__click = [w_, n];
  var h = ce(g);
  Us(h, {
    class: "material-icons",
    children: (p, b) => {
      var y = gt("close");
      T(p, y);
    },
    $$slots: { default: !0 }
  }), Te(() => {
    ct(a, `--color:${i[e.type] ?? ""}`), ze(d, e.summary);
  }), yo(1, a, () => xo, () => ({ x: 0, y: 30, duration: 150, easing: A_ })), yo(2, a, () => xo, () => ({ x: 50, y: 0, duration: 150, easing: pd })), T(t, a), Le();
}
Sn(["click"]);
const D_ = 4e3;
function M_() {
  let t = ye({ items: [] }), e = 0;
  const n = (i) => {
    t.items = t.items.filter((a) => a.id !== i);
  }, r = (i, a, o, u = D_) => {
    const l = e++, c = { id: l, summary: a, detail: o, type: i };
    return t.items = [...t.items, c], setTimeout(
      () => {
        n(l);
      },
      u
    ), l;
  };
  return {
    /** readonly state for UI host */
    get toasts() {
      return t;
    },
    success: (i, a, o) => r("success", i, a, o),
    error: (i, a, o) => r("error", i, a, o),
    info: (i, a, o) => r("info", i, a, o),
    warn: (i, a, o) => r("warn", i, a, o),
    remove: n
  };
}
const xr = M_();
var P_ = /* @__PURE__ */ de("<div><!></div>"), H_ = /* @__PURE__ */ de('<div class="toast-host svelte-11vwiay"></div>');
function N_(t, e) {
  we(e, !1);
  const n = xr.toasts;
  Ah();
  var r = H_();
  Qn(r, 13, () => n.items, (i) => i.id, (i, a) => {
    var o = P_(), u = ce(o);
    R_(u, {
      get summary() {
        return s(a).summary;
      },
      get detail() {
        return s(a).detail;
      },
      get type() {
        return s(a).type;
      },
      onClose: () => xr.remove(s(a).id)
    }), Sh(o, () => C_, null), T(i, o);
  }), T(t, r), Le();
}
var U_ = (t, e) => {
  t.stopPropagation(), e.onOpen();
}, F_ = (t, e) => {
  t.stopPropagation(), e.onRemove();
}, k_ = /* @__PURE__ */ de('<button type="button" style="all: unset; display: flex; align-items: center; justify-content: center;" class="svelte-1mybgc7"><!></button>'), B_ = /* @__PURE__ */ de('<span class="filter-badge__seperator svelte-1mybgc7">|</span> <span class="filter-badge__value svelte-1mybgc7"> </span> <span class="filter-badge__arrow-down"><!></span>', 1), V_ = /* @__PURE__ */ de('<button type="button"><div class="filter-badge__icon svelte-1mybgc7"><!></div> <span class="filter-badge__label svelte-1mybgc7"> </span> <!></button>');
function G_(t, e) {
  we(e, !0);
  let n = /* @__PURE__ */ ve(() => !!e.value);
  var r = V_();
  r.__click = [U_, e];
  var i = ce(r), a = ce(i);
  {
    var o = (f) => {
      Na(f, {
        content: "Remove Filter",
        hoverDelay: 500,
        side: "top",
        children: (g, h) => {
          var p = k_();
          p.__click = [F_, e];
          var b = ce(p);
          fl(b, {
            svgStyles: "fill: grey; height: filt-content; width: fit-content;"
          }), T(g, p);
        },
        $$slots: { default: !0 }
      });
    }, u = (f) => {
      Na(f, {
        content: "Add Filter",
        hoverDelay: 501,
        side: "top",
        children: (g, h) => {
          Hb(g, {
            svgStyles: "fill: grey; height: filt-content; width: fit-content;"
          });
        },
        $$slots: { default: !0 }
      });
    };
    oe(a, (f) => {
      s(n) ? f(o) : f(u, !1);
    });
  }
  var l = be(i, 2), c = ce(l), d = be(l, 2);
  {
    var m = (f) => {
      var g = B_(), h = be(Z(g), 2), p = ce(h), b = be(h, 2), y = ce(b);
      Cb(y, { svgStyles: "fill: gray;" }), Te(() => ze(p, e.value)), T(f, g);
    };
    oe(d, (f) => {
      s(n) && f(m);
    });
  }
  Te(() => {
    nl(r, 1, `filter-badge ${s(n) ? "filter-badge--active" : "filter-badge--inactive"}`, "svelte-1mybgc7"), ze(c, e.label);
  }), T(t, r), Le();
}
Sn(["click"]);
var j_ = /* @__PURE__ */ de('<div><input/> <div class="mdc-checkbox__background"><svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24"><path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"></path></svg> <div class="mdc-checkbox__mixedmark"></div></div> <div class="mdc-checkbox__ripple"></div></div>');
function q_(t, e) {
  we(e, !0);
  let n = () => {
  };
  function r(te) {
    return te === n;
  }
  let i = v(e, "use", 19, () => []), a = v(e, "class", 3, ""), o = v(e, "style", 3, ""), u = v(e, "disabled", 15, !1), l = v(e, "touch", 3, !1), c = v(e, "indeterminate", 15, n), d = v(e, "group", 11, n), m = v(e, "checked", 15, n), f = v(e, "value", 3, null), g = v(e, "valueKey", 3, n), h = v(e, "input$use", 19, () => []), p = v(e, "input$class", 3, ""), b = /* @__PURE__ */ je(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "style",
    "disabled",
    "touch",
    "indeterminate",
    "group",
    "checked",
    "value",
    "valueKey",
    "input$use",
    "input$class"
  ]), y, E = /* @__PURE__ */ me(void 0), S = /* @__PURE__ */ me(void 0), _ = ye({}), A = ye({}), I = ye({}), L = /* @__PURE__ */ me(!1), C = ye(_e("SMUI:generic:input:props") ?? {}), w = /* @__PURE__ */ me(ye(r(d()) ? r(m()) ? !1 : !!m() : d().findIndex((te) => te === f()) !== -1)), B = _e("SMUI:checkbox:context"), $ = _e("SMUI:data-table:row:header"), q = m(), z = r(d()) ? [] : [...d()], O = s(w);
  Oe(() => {
    let te = !1;
    if (!r(d()))
      if (O !== s(w)) {
        const se = d().findIndex((Re) => Re === f());
        s(w) && se === -1 ? d().push(f()) : !s(w) && se !== -1 && d().splice(se, 1), te = !0;
      } else {
        const se = z.findIndex((xe) => xe === f()), Re = d().findIndex((xe) => xe === f());
        se > -1 && Re === -1 ? (X(w, !1), te = !0) : Re > -1 && se === -1 && (X(w, !0), te = !0);
      }
    r(m()) ? O !== s(w) && (te = !0) : (m() !== (c() ? null : s(w)) || s(w) !== O) && (m() === q && s(w) !== O ? (m(s(w)), r(c()) || c(!1)) : X(w, !!m()), te = !0), s(S) && (r(c()) ? s(S).indeterminate && (s(S).indeterminate = !1, te = !0) : !c() && s(S).indeterminate ? (s(S).indeterminate = !1, te = !0) : c() && !s(S).indeterminate && (s(S).indeterminate = !0, X(w, !1), te = !0)), q = m(), z = r(d()) ? [] : [...d()], O = s(w), te && s(E) && s(E).handleChange();
  });
  const x = _e("SMUI:generic:input:mount"), P = _e("SMUI:generic:input:unmount"), N = _e("SMUI:checkbox:mount"), K = _e("SMUI:checkbox:unmount");
  at(() => {
    if (s(S) == null)
      throw new Error("Checkbox is not defined.");
    s(S).indeterminate = !r(c()) && c(), X(
      E,
      new Yb({
        addClass: ne,
        forceLayout: () => H().offsetWidth,
        hasNativeControl: () => !0,
        isAttachedToDOM: () => !!H().parentNode,
        isChecked: () => s(w),
        isIndeterminate: () => r(c()) ? !1 : c(),
        removeClass: F,
        removeNativeControlAttr: Ie,
        setNativeControlAttr: W,
        setNativeControlDisabled: (se) => u(se)
      }),
      !0
    );
    const te = {
      _smui_checkbox_accessor: !0,
      get element() {
        return H();
      },
      get checked() {
        return s(w);
      },
      set checked(se) {
        s(w) !== se && X(w, se, !0);
      },
      get indeterminate() {
        return r(c()) ? !1 : c();
      },
      set indeterminate(se) {
        c(se);
      },
      activateRipple() {
        u() || X(L, !0);
      },
      deactivateRipple() {
        X(L, !1);
      }
    };
    return x && x(te), N && N(te), s(E).init(), () => {
      var se;
      P && P(te), K && K(te), (se = s(E)) == null || se.destroy();
    };
  });
  function ne(te) {
    _[te] || (_[te] = !0);
  }
  function F(te) {
    (!(te in _) || _[te]) && (_[te] = !1);
  }
  function R(te, se) {
    A[te] != se && (se === "" || se == null ? delete A[te] : A[te] = se);
  }
  function W(te, se) {
    I[te] !== se && (I[te] = se);
  }
  function Ie(te) {
    (!(te in I) || I[te] != null) && (I[te] = void 0);
  }
  function V() {
    return C && C.id;
  }
  function H() {
    return y;
  }
  var M = { getId: V, getElement: H }, D = j_(), ee = (te) => {
    var se;
    s(E) && s(E).handleAnimationEnd(), (se = e.onanimationend) == null || se.call(e, te);
  };
  ke(D, (te, se, Re) => ({ class: te, style: se, ...Re, onanimationend: ee }), [
    () => He({
      "mdc-checkbox": !0,
      "mdc-checkbox--disabled": u(),
      "mdc-checkbox--touch": l(),
      "mdc-data-table__header-row-checkbox": B === "data-table" && $,
      "mdc-data-table__row-checkbox": B === "data-table" && !$,
      ..._,
      [a()]: !0
    }),
    () => Object.entries(A).map(([te, se]) => `${te}: ${se};`).concat([o()]).join(" "),
    () => Vn(b, ["input$"])
  ]);
  var J = ce(D), ie = (te) => {
    var se;
    Xe(H(), "blur", te), (se = e.input$onblur) == null || se.call(e, te);
  }, Se = (te) => {
    var se;
    Xe(H(), "focus", te), (se = e.input$onfocus) == null || se.call(e, te);
  };
  return ke(
    J,
    (te, se, Re, xe) => ({
      class: te,
      type: "checkbox",
      ...C,
      disabled: u(),
      value: se,
      "data-indeterminate": Re,
      ...I,
      ...xe,
      onblur: ie,
      onfocus: Se
    }),
    [
      () => He({ "mdc-checkbox__native-control": !0, [p()]: !0 }),
      () => r(g()) ? f() : g(),
      () => !r(c()) && c() ? "true" : void 0,
      () => it(b, "input$")
    ],
    void 0,
    void 0,
    !0
  ), Ce(J, (te) => X(S, te), () => s(S)), Ne(J, (te, se) => Y == null ? void 0 : Y(te, se), h), gi(() => Eh(J, () => s(w), (te) => X(w, te))), Ce(D, (te) => y = te, () => y), Ne(D, (te, se) => Y == null ? void 0 : Y(te, se), i), Ne(D, (te, se) => Qt == null ? void 0 : Qt(te, se), () => ({
    unbounded: !0,
    addClass: ne,
    removeClass: F,
    addStyle: R,
    active: s(L),
    eventTarget: s(S)
  })), T(t, D), Le(M);
}
var W_ = /* @__PURE__ */ de('<div style="display: flex; flex-direction: column;"></div>');
function z_(t, e) {
  we(e, !0);
  let n = v(e, "data", 19, () => []), r = v(e, "values", 31, () => ye([]));
  var i = W_();
  Qn(i, 21, n, Hi, (a, o) => {
    __(a, {
      label: (l) => {
        var c = gt();
        Te(() => ze(c, s(o).label)), T(l, c);
      },
      children: (l, c) => {
        q_(l, {
          get value() {
            return s(o).value;
          },
          get group() {
            return r();
          },
          set group(d) {
            r(d);
          }
        });
      },
      $$slots: { label: !0, default: !0 }
    });
  }), T(t, i), Le();
}
var K_ = (t) => t.stopPropagation(), X_ = /* @__PURE__ */ de('<div class="custom-menu svelte-58jwwf"><div class="menu-arrow svelte-58jwwf"></div> <h4 class="svelte-58jwwf"> </h4> <div class="custom-menu__content"><!></div> <!></div>'), Z_ = /* @__PURE__ */ de('<div class="filter-wrapper svelte-58jwwf"><!> <!></div>'), Y_ = /* @__PURE__ */ de('<div class="oscd-filters svelte-58jwwf"></div>');
function Q_(t, e) {
  we(e, !0);
  let n = v(e, "filters", 15), r = /* @__PURE__ */ me(null), i = [], a = [];
  function o(h) {
    var p;
    if (!(h.value === void 0 || h.value === null || h.value === ""))
      switch (h.type) {
        case "text":
          return String(h.value);
        case "number":
          return String(h.value);
        case "select":
          const b = (p = h.options) == null ? void 0 : p.find((S) => S.value === h.value);
          return b ? b.label : String(h.value);
        case "multiselect":
          if (!Array.isArray(h.value) || h.value.length === 0) return;
          const y = h.value.map((S) => {
            var A;
            const _ = (A = h.options) == null ? void 0 : A.find((I) => I.value === S);
            return _ ? _.label : String(S);
          }), E = 1;
          return y.length <= E ? y.join(", ") : `${y.slice(0, E).join(", ")} +${y.length - E} more`;
        case "date":
          try {
            const S = new Date(h.value);
            return isNaN(S.getTime()) ? String(h.value) : S.toLocaleDateString();
          } catch {
            return String(h.value);
          }
        case "datetime":
          try {
            const S = new Date(h.value);
            return isNaN(S.getTime()) ? String(h.value) : new Intl.DateTimeFormat("default", {
              year: "numeric",
              month: "short",
              day: "numeric",
              hour: "2-digit",
              minute: "2-digit",
              hour12: !1
            }).format(S);
          } catch {
            return String(h.value);
          }
        default:
          return String(h.value);
      }
  }
  function u(h) {
    switch (h.type) {
      case "text":
      case "date":
      case "datetime":
        return h.value ?? "";
      case "number":
        return h.value ?? 0;
      case "select":
        return h.value ?? null;
      case "multiselect":
        return Array.isArray(h.value) ? [...h.value] : [];
      default:
        return h.value ?? "";
    }
  }
  function l(h) {
    s(r) === h ? X(r, null) : (X(r, h, !0), a[h] = u(n()[h]));
  }
  function c() {
    X(r, null), a[s(r)] = void 0;
  }
  function d(h) {
    var p;
    n(n().map((b, y) => y === h ? { ...b, value: a[h] } : b)), (p = e.onfiltersChanged) == null || p.call(e, [...n()]), X(r, null);
  }
  function m(h) {
    var p;
    n(n().map((b, y) => y === h ? { ...b, value: void 0 } : b)), a[h] = void 0, (p = e.onfiltersChanged) == null || p.call(e, [...n()]), c();
  }
  function f(h) {
    i.some((b) => b && b.contains(h.target)) || c();
  }
  at(() => {
    document.addEventListener("click", f);
  }), En(() => {
    document.removeEventListener("click", f);
  }), Oe(() => {
  });
  var g = Y_();
  Qn(g, 23, n, (h) => h.key, (h, p, b) => {
    var y = Z_(), E = ce(y);
    {
      let A = /* @__PURE__ */ ve(() => o(s(p)));
      G_(E, {
        get label() {
          return s(p).label;
        },
        get value() {
          return s(A);
        },
        onOpen: () => l(s(b)),
        onRemove: () => m(s(b))
      });
    }
    var S = be(E, 2);
    {
      var _ = (A) => {
        var I = X_();
        I.__click = [K_];
        var L = be(ce(I), 2), C = ce(L), w = be(L, 2), B = ce(w);
        {
          var $ = (O) => {
            Fs(O, {
              get label() {
                return s(p).label;
              },
              get placeholder() {
                return s(p).placeholder;
              },
              get type() {
                return s(p).type;
              },
              style: "width: 100%;",
              get value() {
                return a[s(b)];
              },
              set value(x) {
                a[s(b)] = x;
              }
            });
          }, q = (O) => {
            var x = re(), P = Z(x);
            {
              var N = (ne) => {
                {
                  let F = /* @__PURE__ */ ve(() => {
                    var R;
                    return (R = s(p)) == null ? void 0 : R.options;
                  });
                  Lp(ne, {
                    get label() {
                      return s(p).label;
                    },
                    get data() {
                      return s(F);
                    },
                    get value() {
                      return a[s(b)];
                    },
                    set value(R) {
                      a[s(b)] = R;
                    }
                  });
                }
              }, K = (ne) => {
                var F = re(), R = Z(F);
                {
                  var W = (V) => {
                    {
                      let H = /* @__PURE__ */ ve(() => {
                        var M;
                        return (M = s(p)) == null ? void 0 : M.options;
                      });
                      z_(V, {
                        get data() {
                          return s(H);
                        },
                        get values() {
                          return a[s(b)];
                        },
                        set values(M) {
                          a[s(b)] = M;
                        }
                      });
                    }
                  }, Ie = (V) => {
                    var H = re(), M = Z(H);
                    {
                      var D = (J) => {
                        qb(J, {
                          get value() {
                            return a[s(b)];
                          },
                          set value(ie) {
                            a[s(b)] = ie;
                          }
                        });
                      }, ee = (J) => {
                        var ie = re(), Se = Z(ie);
                        {
                          var te = (se) => {
                            Kb(se, {
                              get value() {
                                return a[s(b)];
                              },
                              set value(Re) {
                                a[s(b)] = Re;
                              }
                            });
                          };
                          oe(
                            Se,
                            (se) => {
                              s(p).type === "datetime" && se(te);
                            },
                            !0
                          );
                        }
                        T(J, ie);
                      };
                      oe(
                        M,
                        (J) => {
                          s(p).type === "date" ? J(D) : J(ee, !1);
                        },
                        !0
                      );
                    }
                    T(V, H);
                  };
                  oe(
                    R,
                    (V) => {
                      s(p).type === "multiselect" ? V(W) : V(Ie, !1);
                    },
                    !0
                  );
                }
                T(ne, F);
              };
              oe(
                P,
                (ne) => {
                  s(p).type === "select" ? ne(N) : ne(K, !1);
                },
                !0
              );
            }
            T(O, x);
          };
          oe(B, (O) => {
            s(p).type === "text" || s(p).type === "number" ? O($) : O(q, !1);
          });
        }
        var z = be(w, 2);
        ra(z, {
          variant: "unelevated",
          style: "background: var(--secondary); color: white; width: 100%;",
          onclick: () => d(s(b)),
          children: (O, x) => {
            var P = gt("Apply");
            T(O, P);
          },
          $$slots: { default: !0 }
        }), Te(() => ze(C, `Filter by ${s(p).label ?? ""}`)), yo(2, I, () => xo, () => ({ y: 5, duration: 120 })), yo(1, I, () => xo, () => ({ y: -5, duration: 120 })), T(A, I);
      };
      oe(S, (A) => {
        s(r) === s(b) && A(_);
      });
    }
    Ce(y, (A, I) => i[I] = A, (A) => i == null ? void 0 : i[A], () => [s(b)]), T(h, y);
  }), T(t, g), Le();
}
Sn(["click"]);
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
var bd = {
  ANIMATING: "mdc-tab-scroller--animating",
  SCROLL_AREA_SCROLL: "mdc-tab-scroller__scroll-area--scroll",
  SCROLL_TEST: "mdc-tab-scroller__test"
}, J_ = {
  AREA_SELECTOR: ".mdc-tab-scroller__scroll-area",
  CONTENT_SELECTOR: ".mdc-tab-scroller__scroll-content"
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
var hl = (
  /** @class */
  /* @__PURE__ */ function() {
    function t(e) {
      this.adapter = e;
    }
    return t;
  }()
);
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
var $_ = (
  /** @class */
  function(t) {
    Ke(e, t);
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return e.prototype.getScrollPositionRTL = function() {
      var n = this.adapter.getScrollAreaScrollLeft(), r = this.calculateScrollEdges().right;
      return Math.round(r - n);
    }, e.prototype.scrollToRTL = function(n) {
      var r = this.calculateScrollEdges(), i = this.adapter.getScrollAreaScrollLeft(), a = this.clampScrollValue(r.right - n);
      return {
        finalScrollPosition: a,
        scrollDelta: a - i
      };
    }, e.prototype.incrementScrollRTL = function(n) {
      var r = this.adapter.getScrollAreaScrollLeft(), i = this.clampScrollValue(r - n);
      return {
        finalScrollPosition: i,
        scrollDelta: i - r
      };
    }, e.prototype.getAnimatingScrollPosition = function(n) {
      return n;
    }, e.prototype.calculateScrollEdges = function() {
      var n = this.adapter.getScrollContentOffsetWidth(), r = this.adapter.getScrollAreaOffsetWidth();
      return {
        left: 0,
        right: n - r
      };
    }, e.prototype.clampScrollValue = function(n) {
      var r = this.calculateScrollEdges();
      return Math.min(Math.max(r.left, n), r.right);
    }, e;
  }(hl)
);
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
var ey = (
  /** @class */
  function(t) {
    Ke(e, t);
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return e.prototype.getScrollPositionRTL = function(n) {
      var r = this.adapter.getScrollAreaScrollLeft();
      return Math.round(n - r);
    }, e.prototype.scrollToRTL = function(n) {
      var r = this.adapter.getScrollAreaScrollLeft(), i = this.clampScrollValue(-n);
      return {
        finalScrollPosition: i,
        scrollDelta: i - r
      };
    }, e.prototype.incrementScrollRTL = function(n) {
      var r = this.adapter.getScrollAreaScrollLeft(), i = this.clampScrollValue(r - n);
      return {
        finalScrollPosition: i,
        scrollDelta: i - r
      };
    }, e.prototype.getAnimatingScrollPosition = function(n, r) {
      return n - r;
    }, e.prototype.calculateScrollEdges = function() {
      var n = this.adapter.getScrollContentOffsetWidth(), r = this.adapter.getScrollAreaOffsetWidth();
      return {
        left: r - n,
        right: 0
      };
    }, e.prototype.clampScrollValue = function(n) {
      var r = this.calculateScrollEdges();
      return Math.max(Math.min(r.right, n), r.left);
    }, e;
  }(hl)
);
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
var ty = (
  /** @class */
  function(t) {
    Ke(e, t);
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return e.prototype.getScrollPositionRTL = function(n) {
      var r = this.adapter.getScrollAreaScrollLeft();
      return Math.round(r - n);
    }, e.prototype.scrollToRTL = function(n) {
      var r = this.adapter.getScrollAreaScrollLeft(), i = this.clampScrollValue(n);
      return {
        finalScrollPosition: i,
        scrollDelta: r - i
      };
    }, e.prototype.incrementScrollRTL = function(n) {
      var r = this.adapter.getScrollAreaScrollLeft(), i = this.clampScrollValue(r + n);
      return {
        finalScrollPosition: i,
        scrollDelta: r - i
      };
    }, e.prototype.getAnimatingScrollPosition = function(n, r) {
      return n + r;
    }, e.prototype.calculateScrollEdges = function() {
      var n = this.adapter.getScrollContentOffsetWidth(), r = this.adapter.getScrollAreaOffsetWidth();
      return {
        left: n - r,
        right: 0
      };
    }, e.prototype.clampScrollValue = function(n) {
      var r = this.calculateScrollEdges();
      return Math.min(Math.max(r.right, n), r.left);
    }, e;
  }(hl)
);
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
var ny = (
  /** @class */
  function(t) {
    Ke(e, t);
    function e(n) {
      var r = t.call(this, pe(pe({}, e.defaultAdapter), n)) || this;
      return r.isAnimating = !1, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return bd;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return J_;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
      get: function() {
        return {
          eventTargetMatchesSelector: function() {
            return !1;
          },
          addClass: function() {
          },
          removeClass: function() {
          },
          addScrollAreaClass: function() {
          },
          setScrollAreaStyleProperty: function() {
          },
          setScrollContentStyleProperty: function() {
          },
          getScrollContentStyleValue: function() {
            return "";
          },
          setScrollAreaScrollLeft: function() {
          },
          getScrollAreaScrollLeft: function() {
            return 0;
          },
          getScrollContentOffsetWidth: function() {
            return 0;
          },
          getScrollAreaOffsetWidth: function() {
            return 0;
          },
          computeScrollAreaClientRect: function() {
            return { top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0 };
          },
          computeScrollContentClientRect: function() {
            return { top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0 };
          },
          computeHorizontalScrollbarHeight: function() {
            return 0;
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.init = function() {
      var n = this.adapter.computeHorizontalScrollbarHeight();
      this.adapter.setScrollAreaStyleProperty("margin-bottom", -n + "px"), this.adapter.addScrollAreaClass(e.cssClasses.SCROLL_AREA_SCROLL);
    }, e.prototype.getScrollPosition = function() {
      if (this.isRTL())
        return this.computeCurrentScrollPositionRTL();
      var n = this.calculateCurrentTranslateX(), r = this.adapter.getScrollAreaScrollLeft();
      return r - n;
    }, e.prototype.handleInteraction = function() {
      this.isAnimating && this.stopScrollAnimation();
    }, e.prototype.handleTransitionEnd = function(n) {
      var r = n.target;
      !this.isAnimating || !this.adapter.eventTargetMatchesSelector(r, e.strings.CONTENT_SELECTOR) || (this.isAnimating = !1, this.adapter.removeClass(e.cssClasses.ANIMATING));
    }, e.prototype.incrementScroll = function(n) {
      n !== 0 && this.animate(this.getIncrementScrollOperation(n));
    }, e.prototype.incrementScrollImmediate = function(n) {
      if (n !== 0) {
        var r = this.getIncrementScrollOperation(n);
        r.scrollDelta !== 0 && (this.stopScrollAnimation(), this.adapter.setScrollAreaScrollLeft(r.finalScrollPosition));
      }
    }, e.prototype.scrollTo = function(n) {
      if (this.isRTL()) {
        this.scrollToImplRTL(n);
        return;
      }
      this.scrollToImpl(n);
    }, e.prototype.getRTLScroller = function() {
      return this.rtlScrollerInstance || (this.rtlScrollerInstance = this.rtlScrollerFactory()), this.rtlScrollerInstance;
    }, e.prototype.calculateCurrentTranslateX = function() {
      var n = this.adapter.getScrollContentStyleValue("transform");
      if (n === "none")
        return 0;
      var r = /\((.+?)\)/.exec(n);
      if (!r)
        return 0;
      var i = r[1], a = yr(i.split(","), 6);
      a[0], a[1], a[2], a[3];
      var o = a[4];
      return a[5], parseFloat(o);
    }, e.prototype.clampScrollValue = function(n) {
      var r = this.calculateScrollEdges();
      return Math.min(Math.max(r.left, n), r.right);
    }, e.prototype.computeCurrentScrollPositionRTL = function() {
      var n = this.calculateCurrentTranslateX();
      return this.getRTLScroller().getScrollPositionRTL(n);
    }, e.prototype.calculateScrollEdges = function() {
      var n = this.adapter.getScrollContentOffsetWidth(), r = this.adapter.getScrollAreaOffsetWidth();
      return {
        left: 0,
        right: n - r
      };
    }, e.prototype.scrollToImpl = function(n) {
      var r = this.getScrollPosition(), i = this.clampScrollValue(n), a = i - r;
      this.animate({
        finalScrollPosition: i,
        scrollDelta: a
      });
    }, e.prototype.scrollToImplRTL = function(n) {
      var r = this.getRTLScroller().scrollToRTL(n);
      this.animate(r);
    }, e.prototype.getIncrementScrollOperation = function(n) {
      if (this.isRTL())
        return this.getRTLScroller().incrementScrollRTL(n);
      var r = this.getScrollPosition(), i = n + r, a = this.clampScrollValue(i), o = a - r;
      return {
        finalScrollPosition: a,
        scrollDelta: o
      };
    }, e.prototype.animate = function(n) {
      var r = this;
      n.scrollDelta !== 0 && (this.stopScrollAnimation(), this.adapter.setScrollAreaScrollLeft(n.finalScrollPosition), this.adapter.setScrollContentStyleProperty("transform", "translateX(" + n.scrollDelta + "px)"), this.adapter.computeScrollAreaClientRect(), requestAnimationFrame(function() {
        r.adapter.addClass(e.cssClasses.ANIMATING), r.adapter.setScrollContentStyleProperty("transform", "none");
      }), this.isAnimating = !0);
    }, e.prototype.stopScrollAnimation = function() {
      this.isAnimating = !1;
      var n = this.getAnimatingScrollPosition();
      this.adapter.removeClass(e.cssClasses.ANIMATING), this.adapter.setScrollContentStyleProperty("transform", "translateX(0px)"), this.adapter.setScrollAreaScrollLeft(n);
    }, e.prototype.getAnimatingScrollPosition = function() {
      var n = this.calculateCurrentTranslateX(), r = this.adapter.getScrollAreaScrollLeft();
      return this.isRTL() ? this.getRTLScroller().getAnimatingScrollPosition(r, n) : r - n;
    }, e.prototype.rtlScrollerFactory = function() {
      var n = this.adapter.getScrollAreaScrollLeft();
      this.adapter.setScrollAreaScrollLeft(n - 1);
      var r = this.adapter.getScrollAreaScrollLeft();
      if (r < 0)
        return this.adapter.setScrollAreaScrollLeft(n), new ey(this.adapter);
      var i = this.adapter.computeScrollAreaClientRect(), a = this.adapter.computeScrollContentClientRect(), o = Math.round(a.right - i.right);
      return this.adapter.setScrollAreaScrollLeft(n), o === r ? new ty(this.adapter) : new $_(this.adapter);
    }, e.prototype.isRTL = function() {
      return this.adapter.getScrollContentStyleValue("direction") === "rtl";
    }, e;
  }(wt)
);
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
var vs;
function ry(t, e) {
  if (e === void 0 && (e = !0), e && typeof vs < "u")
    return vs;
  var n = t.createElement("div");
  n.classList.add(bd.SCROLL_TEST), t.body.appendChild(n);
  var r = n.offsetHeight - n.clientHeight;
  return t.body.removeChild(n), e && (vs = r), r;
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
var iy = {
  ACTIVE: "mdc-tab-indicator--active",
  FADE: "mdc-tab-indicator--fade",
  NO_TRANSITION: "mdc-tab-indicator--no-transition"
}, ay = {
  CONTENT_SELECTOR: ".mdc-tab-indicator__content"
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
var hr = (
  /** @class */
  function(t) {
    Ke(e, t);
    function e(n) {
      return t.call(this, pe(pe({}, e.defaultAdapter), n)) || this;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return iy;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return ay;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
      get: function() {
        return {
          addClass: function() {
          },
          removeClass: function() {
          },
          computeContentClientRect: function() {
            return { top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0 };
          },
          setContentStyleProperty: function() {
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.computeContentClientRect = function() {
      return this.adapter.computeContentClientRect();
    }, e;
  }(wt)
);
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
var oy = (
  /** @class */
  function(t) {
    Ke(e, t);
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return e.prototype.activate = function() {
      this.adapter.addClass(hr.cssClasses.ACTIVE);
    }, e.prototype.deactivate = function() {
      this.adapter.removeClass(hr.cssClasses.ACTIVE);
    }, e;
  }(hr)
);
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
var Su = (
  /** @class */
  function(t) {
    Ke(e, t);
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return e.prototype.activate = function(n) {
      if (!n) {
        this.adapter.addClass(hr.cssClasses.ACTIVE);
        return;
      }
      var r = this.computeContentClientRect(), i = n.width / r.width, a = n.left - r.left;
      this.adapter.addClass(hr.cssClasses.NO_TRANSITION), this.adapter.setContentStyleProperty("transform", "translateX(" + a + "px) scaleX(" + i + ")"), this.computeContentClientRect(), this.adapter.removeClass(hr.cssClasses.NO_TRANSITION), this.adapter.addClass(hr.cssClasses.ACTIVE), this.adapter.setContentStyleProperty("transform", "");
    }, e.prototype.deactivate = function() {
      this.adapter.removeClass(hr.cssClasses.ACTIVE);
    }, e;
  }(hr)
);
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
var ao = {
  ACTIVE: "mdc-tab--active"
}, Aa = {
  ARIA_SELECTED: "aria-selected",
  CONTENT_SELECTOR: ".mdc-tab__content",
  INTERACTED_EVENT: "MDCTab:interacted",
  RIPPLE_SELECTOR: ".mdc-tab__ripple",
  TABINDEX: "tabIndex",
  TAB_INDICATOR_SELECTOR: ".mdc-tab-indicator"
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
var sy = (
  /** @class */
  function(t) {
    Ke(e, t);
    function e(n) {
      var r = t.call(this, pe(pe({}, e.defaultAdapter), n)) || this;
      return r.focusOnActivate = !0, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return ao;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Aa;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
      get: function() {
        return {
          addClass: function() {
          },
          removeClass: function() {
          },
          hasClass: function() {
            return !1;
          },
          setAttr: function() {
          },
          activateIndicator: function() {
          },
          deactivateIndicator: function() {
          },
          notifyInteracted: function() {
          },
          getOffsetLeft: function() {
            return 0;
          },
          getOffsetWidth: function() {
            return 0;
          },
          getContentOffsetLeft: function() {
            return 0;
          },
          getContentOffsetWidth: function() {
            return 0;
          },
          focus: function() {
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.handleClick = function() {
      this.adapter.notifyInteracted();
    }, e.prototype.isActive = function() {
      return this.adapter.hasClass(ao.ACTIVE);
    }, e.prototype.setFocusOnActivate = function(n) {
      this.focusOnActivate = n;
    }, e.prototype.activate = function(n) {
      this.adapter.addClass(ao.ACTIVE), this.adapter.setAttr(Aa.ARIA_SELECTED, "true"), this.adapter.setAttr(Aa.TABINDEX, "0"), this.adapter.activateIndicator(n), this.focusOnActivate && this.adapter.focus();
    }, e.prototype.deactivate = function() {
      this.isActive() && (this.adapter.removeClass(ao.ACTIVE), this.adapter.setAttr(Aa.ARIA_SELECTED, "false"), this.adapter.setAttr(Aa.TABINDEX, "-1"), this.adapter.deactivateIndicator());
    }, e.prototype.computeDimensions = function() {
      var n = this.adapter.getOffsetWidth(), r = this.adapter.getOffsetLeft(), i = this.adapter.getContentOffsetWidth(), a = this.adapter.getContentOffsetLeft();
      return {
        contentLeft: r + a,
        contentRight: r + a + i,
        rootLeft: r,
        rootRight: r + n
      };
    }, e;
  }(wt)
);
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
var Rt = {
  ARROW_LEFT_KEY: "ArrowLeft",
  ARROW_RIGHT_KEY: "ArrowRight",
  END_KEY: "End",
  ENTER_KEY: "Enter",
  HOME_KEY: "Home",
  SPACE_KEY: "Space",
  TAB_ACTIVATED_EVENT: "MDCTabBar:activated",
  TAB_SCROLLER_SELECTOR: ".mdc-tab-scroller",
  TAB_SELECTOR: ".mdc-tab"
}, Un = {
  ARROW_LEFT_KEYCODE: 37,
  ARROW_RIGHT_KEYCODE: 39,
  END_KEYCODE: 35,
  ENTER_KEYCODE: 13,
  EXTRA_SCROLL_AMOUNT: 20,
  HOME_KEYCODE: 36,
  SPACE_KEYCODE: 32
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
var yi = /* @__PURE__ */ new Set();
yi.add(Rt.ARROW_LEFT_KEY);
yi.add(Rt.ARROW_RIGHT_KEY);
yi.add(Rt.END_KEY);
yi.add(Rt.HOME_KEY);
yi.add(Rt.ENTER_KEY);
yi.add(Rt.SPACE_KEY);
var Ii = /* @__PURE__ */ new Map();
Ii.set(Un.ARROW_LEFT_KEYCODE, Rt.ARROW_LEFT_KEY);
Ii.set(Un.ARROW_RIGHT_KEYCODE, Rt.ARROW_RIGHT_KEY);
Ii.set(Un.END_KEYCODE, Rt.END_KEY);
Ii.set(Un.HOME_KEYCODE, Rt.HOME_KEY);
Ii.set(Un.ENTER_KEYCODE, Rt.ENTER_KEY);
Ii.set(Un.SPACE_KEYCODE, Rt.SPACE_KEY);
var ly = (
  /** @class */
  function(t) {
    Ke(e, t);
    function e(n) {
      var r = t.call(this, pe(pe({}, e.defaultAdapter), n)) || this;
      return r.useAutomaticActivation = !1, r;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return Rt;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return Un;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
      get: function() {
        return {
          scrollTo: function() {
          },
          incrementScroll: function() {
          },
          getScrollPosition: function() {
            return 0;
          },
          getScrollContentWidth: function() {
            return 0;
          },
          getOffsetWidth: function() {
            return 0;
          },
          isRTL: function() {
            return !1;
          },
          setActiveTab: function() {
          },
          activateTabAtIndex: function() {
          },
          deactivateTabAtIndex: function() {
          },
          focusTabAtIndex: function() {
          },
          getTabIndicatorClientRectAtIndex: function() {
            return { top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0 };
          },
          getTabDimensionsAtIndex: function() {
            return { rootLeft: 0, rootRight: 0, contentLeft: 0, contentRight: 0 };
          },
          getPreviousActiveTabIndex: function() {
            return -1;
          },
          getFocusedTabIndex: function() {
            return -1;
          },
          getIndexOfTabById: function() {
            return -1;
          },
          getTabListLength: function() {
            return 0;
          },
          notifyTabActivated: function() {
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.setUseAutomaticActivation = function(n) {
      this.useAutomaticActivation = n;
    }, e.prototype.activateTab = function(n) {
      var r = this.adapter.getPreviousActiveTabIndex();
      if (!(!this.indexIsInRange(n) || n === r)) {
        var i;
        r !== -1 && (this.adapter.deactivateTabAtIndex(r), i = this.adapter.getTabIndicatorClientRectAtIndex(r)), this.adapter.activateTabAtIndex(n, i), this.scrollIntoView(n), this.adapter.notifyTabActivated(n);
      }
    }, e.prototype.handleKeyDown = function(n) {
      var r = this.getKeyFromEvent(n);
      if (r !== void 0)
        if (this.isActivationKey(r) || n.preventDefault(), this.useAutomaticActivation) {
          if (this.isActivationKey(r))
            return;
          var i = this.determineTargetFromKey(this.adapter.getPreviousActiveTabIndex(), r);
          this.adapter.setActiveTab(i), this.scrollIntoView(i);
        } else {
          var a = this.adapter.getFocusedTabIndex();
          if (this.isActivationKey(r))
            this.adapter.setActiveTab(a);
          else {
            var i = this.determineTargetFromKey(a, r);
            this.adapter.focusTabAtIndex(i), this.scrollIntoView(i);
          }
        }
    }, e.prototype.handleTabInteraction = function(n) {
      this.adapter.setActiveTab(this.adapter.getIndexOfTabById(n.detail.tabId));
    }, e.prototype.scrollIntoView = function(n) {
      if (this.indexIsInRange(n)) {
        if (n === 0) {
          this.adapter.scrollTo(0);
          return;
        }
        if (n === this.adapter.getTabListLength() - 1) {
          this.adapter.scrollTo(this.adapter.getScrollContentWidth());
          return;
        }
        if (this.isRTL()) {
          this.scrollIntoViewImplRTL(n);
          return;
        }
        this.scrollIntoViewImpl(n);
      }
    }, e.prototype.determineTargetFromKey = function(n, r) {
      var i = this.isRTL(), a = this.adapter.getTabListLength() - 1, o = r === Rt.END_KEY, u = r === Rt.ARROW_LEFT_KEY && !i || r === Rt.ARROW_RIGHT_KEY && i, l = r === Rt.ARROW_RIGHT_KEY && !i || r === Rt.ARROW_LEFT_KEY && i, c = n;
      return o ? c = a : u ? c -= 1 : l ? c += 1 : c = 0, c < 0 ? c = a : c > a && (c = 0), c;
    }, e.prototype.calculateScrollIncrement = function(n, r, i, a) {
      var o = this.adapter.getTabDimensionsAtIndex(r), u = o.contentLeft - i - a, l = o.contentRight - i, c = l - Un.EXTRA_SCROLL_AMOUNT, d = u + Un.EXTRA_SCROLL_AMOUNT;
      return r < n ? Math.min(c, 0) : Math.max(d, 0);
    }, e.prototype.calculateScrollIncrementRTL = function(n, r, i, a, o) {
      var u = this.adapter.getTabDimensionsAtIndex(r), l = o - u.contentLeft - i, c = o - u.contentRight - i - a, d = c + Un.EXTRA_SCROLL_AMOUNT, m = l - Un.EXTRA_SCROLL_AMOUNT;
      return r > n ? Math.max(d, 0) : Math.min(m, 0);
    }, e.prototype.findAdjacentTabIndexClosestToEdge = function(n, r, i, a) {
      var o = r.rootLeft - i, u = r.rootRight - i - a, l = o + u, c = o < 0 || l < 0, d = u > 0 || l > 0;
      return c ? n - 1 : d ? n + 1 : -1;
    }, e.prototype.findAdjacentTabIndexClosestToEdgeRTL = function(n, r, i, a, o) {
      var u = o - r.rootLeft - a - i, l = o - r.rootRight - i, c = u + l, d = u > 0 || c > 0, m = l < 0 || c < 0;
      return d ? n + 1 : m ? n - 1 : -1;
    }, e.prototype.getKeyFromEvent = function(n) {
      return yi.has(n.key) ? n.key : Ii.get(n.keyCode);
    }, e.prototype.isActivationKey = function(n) {
      return n === Rt.SPACE_KEY || n === Rt.ENTER_KEY;
    }, e.prototype.indexIsInRange = function(n) {
      return n >= 0 && n < this.adapter.getTabListLength();
    }, e.prototype.isRTL = function() {
      return this.adapter.isRTL();
    }, e.prototype.scrollIntoViewImpl = function(n) {
      var r = this.adapter.getScrollPosition(), i = this.adapter.getOffsetWidth(), a = this.adapter.getTabDimensionsAtIndex(n), o = this.findAdjacentTabIndexClosestToEdge(n, a, r, i);
      if (this.indexIsInRange(o)) {
        var u = this.calculateScrollIncrement(n, o, r, i);
        this.adapter.incrementScroll(u);
      }
    }, e.prototype.scrollIntoViewImplRTL = function(n) {
      var r = this.adapter.getScrollPosition(), i = this.adapter.getOffsetWidth(), a = this.adapter.getTabDimensionsAtIndex(n), o = this.adapter.getScrollContentWidth(), u = this.findAdjacentTabIndexClosestToEdgeRTL(n, a, r, i, o);
      if (this.indexIsInRange(u)) {
        var l = this.calculateScrollIncrementRTL(n, u, r, i, o);
        this.adapter.incrementScroll(l);
      }
    }, e;
  }(wt)
), uy = /* @__PURE__ */ de("<div><div><div><!></div></div></div>");
function cy(t, e) {
  we(e, !0);
  const { matches: n } = ua;
  let r = v(e, "use", 19, () => []), i = v(e, "class", 3, ""), a = v(e, "align", 3, void 0), o = v(e, "scrollArea$use", 19, () => []), u = v(e, "scrollArea$class", 3, ""), l = v(e, "scrollContent$use", 19, () => []), c = v(e, "scrollContent$class", 3, ""), d = /* @__PURE__ */ je(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "align",
    "scrollArea$use",
    "scrollArea$class",
    "scrollContent$use",
    "scrollContent$class",
    "children"
  ]), m, f = /* @__PURE__ */ me(void 0), g, h, p = ye({}), b = ye({}), y = ye({}), E = ye({});
  at(() => (X(
    f,
    new ny({
      eventTargetMatchesSelector: (H, M) => n(H, M),
      addClass: S,
      removeClass: _,
      addScrollAreaClass: A,
      setScrollAreaStyleProperty: I,
      setScrollContentStyleProperty: L,
      getScrollContentStyleValue: C,
      setScrollAreaScrollLeft: (H) => g.scrollLeft = H,
      getScrollAreaScrollLeft: () => g.scrollLeft,
      getScrollContentOffsetWidth: () => h.offsetWidth,
      getScrollAreaOffsetWidth: () => g.offsetWidth,
      computeScrollAreaClientRect: () => g.getBoundingClientRect(),
      computeScrollContentClientRect: () => h.getBoundingClientRect(),
      computeHorizontalScrollbarHeight: () => ry(document)
    }),
    !0
  ), s(f).init(), () => {
    var H;
    (H = s(f)) == null || H.destroy();
  }));
  function S(H) {
    p[H] || (p[H] = !0);
  }
  function _(H) {
    (!(H in p) || p[H]) && (p[H] = !1);
  }
  function A(H) {
    b[H] || (b[H] = !0);
  }
  function I(H, M) {
    y[H] != M && (M === "" || M == null ? delete y[H] : y[H] = M);
  }
  function L(H, M) {
    E[H] != M && (M === "" || M == null ? delete E[H] : E[H] = M);
  }
  function C(H) {
    return H in E ? E[H] : getComputedStyle(h).getPropertyValue(H);
  }
  function w() {
    if (s(f) == null)
      throw new Error("Instance is undefined.");
    return s(f).getScrollPosition();
  }
  function B() {
    return h.offsetWidth;
  }
  function $(H) {
    var M;
    (M = s(f)) == null || M.incrementScroll(H);
  }
  function q(H) {
    var M;
    (M = s(f)) == null || M.scrollTo(H);
  }
  function z() {
    return m;
  }
  var O = {
    getScrollPosition: w,
    getScrollContentWidth: B,
    incrementScroll: $,
    scrollTo: q,
    getElement: z
  }, x = uy();
  ke(x, (H, M) => ({ class: H, ...M }), [
    () => He({
      "mdc-tab-scroller": !0,
      "mdc-tab-scroller--align-start": a() === "start",
      "mdc-tab-scroller--align-end": a() === "end",
      "mdc-tab-scroller--align-center": a() === "center",
      ...p,
      [i()]: !0
    }),
    () => Vn(d, ["scrollArea$", "scrollContent$"])
  ]);
  var P = ce(x), N = (H) => {
    var M;
    s(f) && s(f).handleInteraction(), (M = e.scrollArea$onwheel) == null || M.call(e, H);
  }, K = (H) => {
    var M;
    s(f) && s(f).handleInteraction(), (M = e.scrollArea$ontouchstart) == null || M.call(e, H);
  }, ne = (H) => {
    var M;
    s(f) && s(f).handleInteraction(), (M = e.scrollArea$onpointerdown) == null || M.call(e, H);
  }, F = (H) => {
    var M;
    s(f) && s(f).handleInteraction(), (M = e.scrollArea$onmousedown) == null || M.call(e, H);
  }, R = (H) => {
    var M;
    s(f) && s(f).handleInteraction(), (M = e.scrollArea$onkeydown) == null || M.call(e, H);
  };
  ke(
    P,
    (H, M, D) => ({
      class: H,
      style: M,
      ...D,
      onwheel: N,
      ontouchstart: K,
      onpointerdown: ne,
      onmousedown: F,
      onkeydown: R
    }),
    [
      () => He({
        "mdc-tab-scroller__scroll-area": !0,
        ...b,
        [u()]: !0
      }),
      () => Object.entries(y).map(([H, M]) => `${H}: ${M};`).join(" "),
      () => it(d, "scrollArea$")
    ]
  );
  var W = ce(P), Ie = (H) => {
    var M;
    s(f) && s(f).handleTransitionEnd(H), (M = e.scrollContent$ontransitionend) == null || M.call(e, H);
  };
  ke(
    W,
    (H, M, D) => ({
      class: H,
      style: M,
      ...D,
      ontransitionend: Ie
    }),
    [
      () => He({
        "mdc-tab-scroller__scroll-content": !0,
        [c()]: !0
      }),
      () => Object.entries(E).map(([H, M]) => `${H}: ${M};`).join(" "),
      () => it(d, "scrollContent$")
    ]
  );
  var V = ce(W);
  return Ae(V, () => e.children ?? ge), Ce(W, (H) => h = H, () => h), Ne(W, (H, M) => Y == null ? void 0 : Y(H, M), l), Ce(P, (H) => g = H, () => g), Ne(P, (H, M) => Y == null ? void 0 : Y(H, M), o), Ce(x, (H) => m = H, () => m), Ne(x, (H, M) => Y == null ? void 0 : Y(H, M), r), T(t, x), Le(O);
}
var dy = /* @__PURE__ */ de("<div><!></div>");
function fy(t, e) {
  we(e, !0);
  let n = v(e, "use", 19, () => []), r = v(e, "class", 3, ""), i = v(e, "tabs", 19, () => []), a = v(e, "key", 3, (O) => O), o = v(e, "focusOnActivate", 3, !0), u = v(e, "focusOnProgrammatic", 3, !1), l = v(e, "useAutomaticActivation", 3, !0), c = v(e, "active", 15), d = v(e, "tabindex", 3, 0), m = /* @__PURE__ */ je(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "tabs",
    "key",
    "focusOnActivate",
    "focusOnProgrammatic",
    "useAutomaticActivation",
    "active",
    "tabindex",
    "tab"
  ]), f, g = /* @__PURE__ */ me(void 0), h, p = /* @__PURE__ */ me(ye(c() == null ? -1 : i().findIndex((O) => c() && a()(O) === a()(c())))), b = ye({}), y = /* @__PURE__ */ me(/* @__PURE__ */ new WeakMap()), E = !1;
  ue("SMUI:tab:focusOnActivate", o()), ue("SMUI:tab:initialActive", {
    active: c() == null ? null : a()(c()),
    key: a()
  }), Oe(() => {
    (c() == null && s(p) !== -1 || c() != null && s(p) === -1 || c() != null && a()(c()) !== a()(i()[s(p)])) && (X(p, i().findIndex((O) => c() && a()(O) === a()(c())), !0), s(g) && (E = !u(), s(g).activateTab(s(p)), E = !1));
  }), Oe(() => {
    if (i().length) {
      const O = i()[0] instanceof Object ? s(y).get(i()[0]) : b[i()[0]];
      O && O.forceAccessible(s(p) === -1);
    }
  });
  let S = !1;
  Oe(() => {
    if (!s(g)) {
      S = !1;
      return;
    }
    S || (S = !0, s(g).setUseAutomaticActivation(l()));
  }), ue("SMUI:tab:mount", (O) => {
    A(O.tabId, O);
  }), ue("SMUI:tab:unmount", (O) => {
    I(O.tabId);
  }), at(() => (X(
    g,
    new ly({
      scrollTo: (O) => h.scrollTo(O),
      incrementScroll: (O) => h.incrementScroll(O),
      getScrollPosition: () => h.getScrollPosition(),
      getScrollContentWidth: () => h.getScrollContentWidth(),
      getOffsetWidth: () => C().offsetWidth,
      isRTL: () => getComputedStyle(C()).getPropertyValue("direction") === "rtl",
      setActiveTab: (O) => {
        var x;
        c(i()[O]), X(p, O, !0), (x = s(g)) == null || x.activateTab(O);
      },
      activateTabAtIndex: (O, x) => {
        var P;
        return (P = _(i()[O])) == null ? void 0 : P.activate(x, E);
      },
      deactivateTabAtIndex: (O) => {
        var x;
        return (x = _(i()[O])) == null ? void 0 : x.deactivate();
      },
      focusTabAtIndex: (O) => {
        var x;
        return (x = _(i()[O])) == null ? void 0 : x.focus();
      },
      getTabIndicatorClientRectAtIndex: (O) => {
        var x;
        return ((x = _(i()[O])) == null ? void 0 : x.computeIndicatorClientRect()) ?? new DOMRect();
      },
      getTabDimensionsAtIndex: (O) => {
        var x;
        return ((x = _(i()[O])) == null ? void 0 : x.computeDimensions()) ?? { rootLeft: 0, rootRight: 0, contentLeft: 0, contentRight: 0 };
      },
      getPreviousActiveTabIndex: () => {
        var O;
        for (let x = 0; x < i().length; x++)
          if ((O = _(i()[x])) != null && O.active)
            return x;
        return -1;
      },
      getFocusedTabIndex: () => {
        const O = i().map((P) => {
          var N;
          return (N = _(P)) == null ? void 0 : N.element;
        }), x = document.activeElement;
        return O.indexOf(x);
      },
      getIndexOfTabById: (O) => i().findIndex((x) => a()(x) === a()(O)),
      getTabListLength: () => i().length,
      notifyTabActivated: (O) => Xe(C(), "SMUITabBarActivated", { index: O })
    }),
    !0
  ), s(g).init(), () => {
    var O;
    (O = s(g)) == null || O.destroy();
  }));
  function _(O) {
    return O instanceof Object ? s(y).get(O) : b[O];
  }
  function A(O, x) {
    O instanceof Object ? (s(y).set(O, x), X(y, s(y))) : b[O] = x;
  }
  function I(O) {
    O instanceof Object ? (s(y).delete(O), X(y, s(y))) : delete b[O];
  }
  function L(O) {
    var x;
    (x = s(g)) == null || x.scrollIntoView(O);
  }
  function C() {
    return f;
  }
  var w = { scrollIntoView: L, getElement: C }, B = dy(), $ = (O) => {
    var x;
    s(g) && s(g).handleKeyDown(O), (x = e.onkeydown) == null || x.call(e, O);
  }, q = (O) => {
    var x;
    s(g) && s(g).handleTabInteraction(O), (x = e.onSMUITabInteracted) == null || x.call(e, O);
  };
  ke(
    B,
    (O, x) => ({
      class: O,
      role: "tablist",
      tabindex: d(),
      ...x,
      onkeydown: $,
      onSMUITabInteracted: q
    }),
    [
      () => He({ "mdc-tab-bar": !0, [r()]: !0 }),
      () => Vn(m, ["tabScroller$"])
    ]
  );
  var z = ce(B);
  {
    let O = /* @__PURE__ */ ve(() => it(m, "tabScroller$"));
    Ce(
      cy(z, $e(() => s(O), {
        children: (x, P) => {
          var N = re(), K = Z(N);
          Qn(K, 17, i, (ne) => a()(ne), (ne, F) => {
            var R = re(), W = Z(R);
            Ae(W, () => e.tab, () => s(F)), T(ne, R);
          }), T(x, N);
        },
        $$slots: { default: !0 }
      })),
      (x) => h = x,
      () => h
    );
  }
  return Ce(B, (O) => f = O, () => f), Ne(B, (O, x) => Y == null ? void 0 : Y(O, x), n), T(t, B), Le(w);
}
var hy = /* @__PURE__ */ de("<span><span><!></span></span>");
function vy(t, e) {
  we(e, !0);
  let n = v(e, "use", 19, () => []), r = v(e, "class", 3, ""), i = v(e, "active", 15, !1), a = v(e, "type", 3, "underline"), o = v(e, "transition", 3, "slide"), u = v(e, "content$use", 19, () => []), l = v(e, "content$class", 3, ""), c = /* @__PURE__ */ je(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "active",
    "type",
    "transition",
    "content$use",
    "content$class",
    "children"
  ]), d, m = /* @__PURE__ */ me(void 0), f, g = /* @__PURE__ */ me(ye({})), h = /* @__PURE__ */ me(ye({})), p = ye([]), b = o();
  Oe(() => {
    b !== o() && (b = o(), s(m) && s(m).destroy(), X(g, {}, !0), X(h, {}, !0), X(m, y(), !0), s(m).init());
  }), lc(() => {
    p.length && requestAnimationFrame(() => {
      const O = p.shift() ?? [];
      for (const x of O)
        x();
    });
  }), at(() => (X(m, y(), !0), s(m).init(), () => {
    var O;
    (O = s(m)) == null || O.destroy();
  }));
  function y() {
    const O = {
      fade: oy,
      slide: Su
    }[o()] || Su;
    return new O({
      addClass: (...x) => E(() => S(...x)),
      removeClass: (...x) => E(() => _(...x)),
      computeContentClientRect: C,
      setContentStyleProperty: (...x) => E(() => A(...x))
    });
  }
  function E(O) {
    p.length ? p[p.length - 1].push(O) : O();
  }
  function S(O) {
    s(g)[O] || (s(g)[O] = !0);
  }
  function _(O) {
    (!(O in s(g)) || s(g)[O]) && (s(g)[O] = !1);
  }
  function A(O, x) {
    s(h)[O] != x && (x === "" || x == null ? delete s(h)[O] : s(h)[O] = x);
  }
  function I(O) {
    var x;
    i(!0), (x = s(m)) == null || x.activate(O);
  }
  function L() {
    var O;
    i(!1), (O = s(m)) == null || O.deactivate();
  }
  function C() {
    return p.push([]), f.getBoundingClientRect();
  }
  function w() {
    return d;
  }
  var B = { activate: I, deactivate: L, computeContentClientRect: C, getElement: w }, $ = hy();
  ke($, (O, x) => ({ class: O, ...x }), [
    () => He({
      "mdc-tab-indicator": !0,
      "mdc-tab-indicator--active": i(),
      "mdc-tab-indicator--fade": o() === "fade",
      ...s(g),
      [r()]: !0
    }),
    () => Vn(c, ["content$"])
  ]);
  var q = ce($);
  ke(
    q,
    (O, x, P) => ({
      class: O,
      style: x,
      "aria-hidden": a() === "icon" ? "true" : void 0,
      ...P
    }),
    [
      () => He({
        "mdc-tab-indicator__content": !0,
        "mdc-tab-indicator__content--underline": a() === "underline",
        "mdc-tab-indicator__content--icon": a() === "icon",
        [l()]: !0
      }),
      () => Object.entries(s(h)).map(([O, x]) => `${O}: ${x};`).join(" "),
      () => it(c, "content$")
    ]
  );
  var z = ce(q);
  return Ae(z, () => e.children ?? ge), Ce(q, (O) => f = O, () => f), Ne(q, (O, x) => Y == null ? void 0 : Y(O, x), u), Ce($, (O) => d = O, () => d), Ne($, (O, x) => Y == null ? void 0 : Y(O, x), n), T(t, $), Le(B);
}
var my = /* @__PURE__ */ de('<span><!> <!></span> <!> <span class="mdc-tab__ripple"></span>', 1);
function gy(t, e) {
  we(e, !0);
  const n = (M) => {
    {
      let D = /* @__PURE__ */ ve(() => it(p, "tabIndicator$"));
      Ce(
        vy(M, $e(() => s(D), {
          get active() {
            return s(w);
          },
          set active(ee) {
            X(w, ee, !0);
          },
          children: (ee, J) => {
            var ie = re(), Se = Z(ie);
            Ae(Se, () => e.tabIndicator ?? ge), T(ee, ie);
          },
          $$slots: { default: !0 }
        })),
        (ee) => S = ee,
        () => S
      );
    }
  };
  let r = v(e, "use", 19, () => []), i = v(e, "class", 3, ""), a = v(e, "style", 3, ""), o = v(e, "ripple", 3, !0), u = v(e, "stacked", 3, !1), l = v(e, "minWidth", 3, !1), c = v(e, "indicatorSpanOnlyContent", 3, !1), d = v(e, "href", 3, void 0), m = v(e, "content$use", 19, () => []), f = v(e, "content$class", 3, ""), g = v(e, "component", 3, Wr), h = v(e, "tag", 19, () => d() == null ? "button" : "a"), p = /* @__PURE__ */ je(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "style",
    "tab",
    "ripple",
    "stacked",
    "minWidth",
    "indicatorSpanOnlyContent",
    "href",
    "content$use",
    "content$class",
    "component",
    "tag",
    "children",
    "tabIndicator"
  ]), b, y = /* @__PURE__ */ me(void 0), E, S, _ = ye({}), A = ye({}), I = ye({}), L = _e("SMUI:tab:focusOnActivate");
  const C = _e("SMUI:tab:initialActive");
  let w = /* @__PURE__ */ me(ye(C.active != null && C.key(e.tab) === C.active)), B = /* @__PURE__ */ me(!1);
  if (ue("SMUI:label:context", "tab"), ue("SMUI:icon:context", "tab"), !e.tab)
    throw new Error("The tab property is required! It should be passed down from the TabBar to the Tab.");
  let $ = !1;
  Oe(() => {
    if (!s(y)) {
      $ = !1;
      return;
    }
    $ || ($ = !0, s(y).setFocusOnActivate(L));
  });
  const q = _e("SMUI:tab:mount"), z = _e("SMUI:tab:unmount");
  at(() => {
    X(
      y,
      new sy({
        setAttr: K,
        addClass: x,
        removeClass: P,
        hasClass: O,
        activateIndicator: (D) => S.activate(D),
        deactivateIndicator: () => S.deactivate(),
        notifyInteracted: () => Xe(W(), "SMUITabInteracted", { tabId: e.tab }),
        getOffsetLeft: () => W().offsetLeft,
        getOffsetWidth: () => W().offsetWidth,
        getContentOffsetLeft: () => E.offsetLeft,
        getContentOffsetWidth: () => E.offsetWidth,
        focus: R
      }),
      !0
    );
    const M = {
      tabId: e.tab,
      get element() {
        return W();
      },
      get active() {
        return s(w);
      },
      forceAccessible(D) {
        X(B, D, !0);
      },
      computeIndicatorClientRect: () => S.computeContentClientRect(),
      computeDimensions: () => {
        if (s(y) == null)
          throw new Error("Instance is undefined.");
        return s(y).computeDimensions();
      },
      focus: R,
      activate: ne,
      deactivate: F
    };
    return q && q(M), s(y).init(), () => {
      var D;
      z && z(M), (D = s(y)) == null || D.destroy();
    };
  });
  function O(M) {
    return M in _ ? _[M] : W().classList.contains(M);
  }
  function x(M) {
    _[M] || (_[M] = !0);
  }
  function P(M) {
    (!(M in _) || _[M]) && (_[M] = !1);
  }
  function N(M, D) {
    A[M] != D && (D === "" || D == null ? delete A[M] : A[M] = D);
  }
  function K(M, D) {
    I[M] !== D && (I[M] = D);
  }
  function ne(M, D) {
    var ee, J, ie;
    X(w, !0), D && ((ee = s(y)) == null || ee.setFocusOnActivate(!1)), (J = s(y)) == null || J.activate(M), D && ((ie = s(y)) == null || ie.setFocusOnActivate(L));
  }
  function F() {
    var M;
    X(w, !1), (M = s(y)) == null || M.deactivate();
  }
  function R() {
    W().focus();
  }
  function W() {
    return b.getElement();
  }
  var Ie = { activate: ne, deactivate: F, focus: R, getElement: W }, V = re(), H = Z(V);
  {
    let M = /* @__PURE__ */ ve(() => [
      [
        Qt,
        {
          ripple: o(),
          unbounded: !1,
          addClass: x,
          removeClass: P,
          addStyle: N
        }
      ],
      ...r()
    ]), D = /* @__PURE__ */ ve(() => He({
      "mdc-tab": !0,
      "mdc-tab--active": s(w),
      "mdc-tab--stacked": u(),
      "mdc-tab--min-width": l(),
      ..._,
      [i()]: !0
    })), ee = /* @__PURE__ */ ve(() => Object.entries(A).map(([te, se]) => `${te}: ${se};`).concat([a()]).join(" ")), J = /* @__PURE__ */ ve(() => s(w) ? "true" : "false"), ie = /* @__PURE__ */ ve(() => s(w) || s(B) ? "0" : "-1"), Se = /* @__PURE__ */ ve(() => Vn(p, ["content$", "tabIndicator$"]));
    rr(H, g, (te, se) => {
      Ce(
        se(te, $e(
          {
            get tag() {
              return h();
            },
            get use() {
              return s(M);
            },
            get class() {
              return s(D);
            },
            get style() {
              return s(ee);
            },
            role: "tab",
            get "aria-selected"() {
              return s(J);
            },
            get tabindex() {
              return s(ie);
            },
            get href() {
              return d();
            }
          },
          () => I,
          () => s(Se),
          {
            onclick: (Re) => {
              var xe;
              (xe = e.onclick) == null || xe.call(e, Re), !Re.defaultPrevented && s(y) && s(y).handleClick();
            },
            children: (Re, xe) => {
              var Ue = my(), Me = Z(Ue);
              ke(Me, (Fe, ot) => ({ class: Fe, ...ot }), [
                () => He({ "mdc-tab__content": !0, [f()]: !0 }),
                () => it(p, "content$")
              ]);
              var Pe = ce(Me);
              Ae(Pe, () => e.children ?? ge);
              var G = be(Pe, 2);
              {
                var Q = (Fe) => {
                  n(Fe);
                };
                oe(G, (Fe) => {
                  c() && Fe(Q);
                });
              }
              Ce(Me, (Fe) => E = Fe, () => E), Ne(Me, (Fe, ot) => Y == null ? void 0 : Y(Fe, ot), m);
              var fe = be(Me, 2);
              {
                var De = (Fe) => {
                  n(Fe);
                };
                oe(fe, (Fe) => {
                  c() || Fe(De);
                });
              }
              T(Re, Ue);
            },
            $$slots: { default: !0 }
          }
        )),
        (Re) => b = Re,
        () => b
      );
    });
  }
  return T(t, V), Le(Ie);
}
var py = (t, e) => e(), by = /* @__PURE__ */ de('<button class="filter-tab__tabs__clear svelte-nj6sif">Clear Filters</button>'), _y = /* @__PURE__ */ de('<div class="filter-tab__tabs svelte-nj6sif"><h4 style="all:unset; font-weight: bold; font-size: 1rem;">Filter by</h4> <!> <!></div>'), yy = /* @__PURE__ */ de('<div class="filter-tab svelte-nj6sif"><!> <!> <!></div>');
function Iy(t, e) {
  we(e, !0);
  let n = v(e, "filters", 31, () => ye([])), r = v(e, "onFilterChange", 3, (S) => {
  }), i = v(e, "activeNavigationTab", 31, () => ye(e.navigationTabs ? e.navigationTabs[0] : void 0)), a = v(e, "searchText", 15, ""), o = v(e, "searchLabel", 3, "Search"), u = v(e, "searchPlaceholder", 3, "Type to search..."), l = v(e, "onSearchInput", 3, () => {
  }), c = v(e, "searchDisabled", 3, !1), d = /* @__PURE__ */ ve(() => n().some((S) => S.value !== void 0 && S.value !== null && S.value !== "")), m = () => {
    n(n().map((S) => ({ ...S, value: void 0 }))), r()(n());
  };
  var f = yy(), g = ce(f);
  {
    var h = (S) => {
      Zg(S, {
        oninput: () => l()(),
        icon: "search",
        get label() {
          return o();
        },
        get placeholder() {
          return u();
        },
        variant: "outlined",
        styles: "background: var(--oscd-base2,#fff); max-width: 650px;",
        get value() {
          return a();
        },
        set value(_) {
          a(_);
        }
      });
    };
    oe(g, (S) => {
      c() || S(h);
    });
  }
  var p = be(g, 2);
  {
    var b = (S) => {
      fy(S, {
        get tabs() {
          return e.navigationTabs;
        },
        get active() {
          return i();
        },
        set active(A) {
          i(A);
        },
        tab: (A, I = ge) => {
          gy(A, {
            get tab() {
              return I();
            },
            minWidth: !0,
            children: (L, C) => {
              sd(L, {
                children: (w, B) => {
                  var $ = gt();
                  Te(() => ze($, I())), T(w, $);
                },
                $$slots: { default: !0 }
              });
            },
            $$slots: { default: !0 }
          });
        },
        $$slots: { tab: !0 }
      });
    };
    oe(p, (S) => {
      e.navigationTabs && S(b);
    });
  }
  var y = be(p, 2);
  {
    var E = (S) => {
      var _ = _y(), A = be(ce(_), 2);
      Q_(A, {
        onfiltersChanged: (C) => r()(C),
        get filters() {
          return n();
        },
        set filters(C) {
          n(C);
        }
      });
      var I = be(A, 2);
      {
        var L = (C) => {
          var w = by();
          w.__click = [py, m], T(C, w);
        };
        oe(I, (C) => {
          s(d) && C(L);
        });
      }
      T(S, _);
    };
    oe(y, (S) => {
      n() && n().length > 0 && S(E);
    });
  }
  T(t, f), Le();
}
Sn(["click"]);
Sn(["change", "click"]);
var Sy = /* @__PURE__ */ _t('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor" class="svelte-1mj71p3"><path d="M12 4l-8 8h16l-8-8z"></path></svg>'), Ey = /* @__PURE__ */ _t('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor" class="svelte-1mj71p3"><path d="M12 20l8-8H4l8 8z"></path></svg>'), Ay = /* @__PURE__ */ de('<div class="custom-cell-container svelte-1mj71p3"><div class="cell-header svelte-1mj71p3"><span class="header-title svelte-1mj71p3"> </span> <!></div></div>'), Cy = (t, e) => e(), Ty = /* @__PURE__ */ de('<input type="text" class="svelte-1mj71p3"/>'), xy = (t, e) => e(), wy = /* @__PURE__ */ de('<input type="number" class="svelte-1mj71p3"/>'), Ly = /* @__PURE__ */ de("<!> <!>", 1), Oy = /* @__PURE__ */ de("<!> <!>", 1), Ry = /* @__PURE__ */ de('<div class="cell-actions svelte-1mj71p3"></div>'), Dy = /* @__PURE__ */ de("<!> <!>", 1);
function Eu(t, e) {
  we(e, !0);
  const n = () => Bn(b, "$sortColumn", a), r = () => Bn(y, "$sortDirection", a), i = () => Bn(p, "$filteredData", a), [a, o] = ir();
  let u = v(e, "loadingDone", 15, !0), l = v(e, "label", 19, rb), c = v(e, "columnDefs", 19, () => []), d = v(e, "rowData", 31, () => ye([])), m = v(e, "rowActions", 19, () => []), f = v(e, "searchInputLabel", 3, "Search"), g = v(e, "emptyText", 3, "No data available"), h = ye({ name: "", color: "", number: "" }), p = Gt([]), b = Gt(null), y = Gt(null), E = /* @__PURE__ */ ve(() => c().some((I) => I.filter));
  e.store.store.subscribe((I) => {
    d([...I]), S();
  });
  function S() {
    let I = d().filter((L) => c().every((C) => {
      const w = h[C.field], B = C.filterValueGetter ? C.filterValueGetter(L) : L[C.field];
      return w ? C.filterType === "number" ? B == w : B.toString().toLowerCase().includes(w.toLowerCase()) : !0;
    }));
    I = _(I), p.set(I);
  }
  function _(I) {
    let L, C;
    return b.subscribe((w) => L = w), y.subscribe((w) => C = w), !L || !C ? I : I.sort((w, B) => {
      let $ = w[L], q = B[L];
      return $ == null && ($ = ""), q == null && (q = ""), C === "asc" ? $.toString().localeCompare(q.toString()) : q.toString().localeCompare($.toString());
    });
  }
  function A(I) {
    b.update((L) => {
      if (L === I)
        y.update((C) => C === "asc" ? "desc" : C === "desc" ? null : "asc");
      else
        return y.set("asc"), I;
      return I;
    }), S();
  }
  p.set(d()), t_(t, {
    get "table$aria-label"() {
      return l();
    },
    style: "max-width: 100%; width: 100%;",
    progress: (L) => {
      h_(L, {
        indeterminate: !0,
        "aria-label": "Data is being loaded...",
        get closed() {
          return u();
        },
        set closed(C) {
          u(C);
        }
      });
    },
    children: (L, C) => {
      var w = Dy(), B = Z(w);
      r_(B, {
        children: (q, z) => {
          var O = Oy(), x = Z(O);
          ro(x, {
            class: "header-title-row",
            children: (K, ne) => {
              var F = re(), R = Z(F);
              Qn(R, 17, c, Hi, (W, Ie) => {
                Ea(W, {
                  onclick: () => s(Ie).sortable && A(s(Ie).field),
                  get style() {
                    return s(Ie).headerStyle;
                  },
                  children: (V, H) => {
                    var M = Ay(), D = ce(M), ee = ce(D), J = ce(ee), ie = be(ee, 2);
                    {
                      var Se = (te) => {
                        var se = re(), Re = Z(se);
                        {
                          var xe = (Ue) => {
                            var Me = re(), Pe = Z(Me);
                            {
                              var G = (fe) => {
                                var De = Sy();
                                T(fe, De);
                              }, Q = (fe) => {
                                var De = re(), Fe = Z(De);
                                {
                                  var ot = (ft) => {
                                    var he = Ey();
                                    T(ft, he);
                                  };
                                  oe(
                                    Fe,
                                    (ft) => {
                                      r() === "desc" && ft(ot);
                                    },
                                    !0
                                  );
                                }
                                T(fe, De);
                              };
                              oe(Pe, (fe) => {
                                r() === "asc" ? fe(G) : fe(Q, !1);
                              });
                            }
                            T(Ue, Me);
                          };
                          oe(Re, (Ue) => {
                            n() === s(Ie).field && r() !== null && Ue(xe);
                          });
                        }
                        T(te, se);
                      };
                      oe(ie, (te) => {
                        s(Ie).sortable && te(Se);
                      });
                    }
                    Te(() => {
                      ct(M, `min-width: ${s(Ie).minWidth ?? 0 ?? ""}`), ze(J, s(Ie).headerName);
                    }), T(V, M);
                  },
                  $$slots: { default: !0 }
                });
              }), T(K, F);
            },
            $$slots: { default: !0 }
          });
          var P = be(x, 2);
          {
            var N = (K) => {
              ro(K, {
                class: "header-filter-row",
                children: (ne, F) => {
                  var R = re(), W = Z(R);
                  Qn(W, 17, c, Hi, (Ie, V) => {
                    Ea(Ie, {
                      children: (H, M) => {
                        var D = re(), ee = Z(D);
                        {
                          var J = (ie) => {
                            var Se = Ly(), te = Z(Se);
                            {
                              var se = (Ue) => {
                                var Me = Ty();
                                Me.__input = [Cy, S], Te(() => br(Me, "placeholder", `${f()} ${s(V).headerName}`)), Ma(Me, () => h[s(V).field], (Pe) => h[s(V).field] = Pe), T(Ue, Me);
                              };
                              oe(te, (Ue) => {
                                s(V).filterType === "text" && Ue(se);
                              });
                            }
                            var Re = be(te, 2);
                            {
                              var xe = (Ue) => {
                                var Me = wy();
                                Me.__input = [xy, S], Te(() => br(Me, "placeholder", `${f()} ${s(V).headerName}`)), Ma(Me, () => h[s(V).field], (Pe) => h[s(V).field] = Pe), T(Ue, Me);
                              };
                              oe(Re, (Ue) => {
                                s(V).filterType === "number" && Ue(xe);
                              });
                            }
                            T(ie, Se);
                          };
                          oe(ee, (ie) => {
                            s(V).filter && ie(J);
                          });
                        }
                        T(H, D);
                      },
                      $$slots: { default: !0 }
                    });
                  }), T(ne, R);
                },
                $$slots: { default: !0 }
              });
            };
            oe(P, (K) => {
              s(E) && K(N);
            });
          }
          T(q, O);
        },
        $$slots: { default: !0 }
      });
      var $ = be(B, 2);
      a_($, {
        children: (q, z) => {
          var O = re(), x = Z(O);
          {
            var P = (K) => {
              ro(K, {
                children: (ne, F) => {
                  Ea(ne, {
                    class: "oscd-basic-table__empty-row",
                    get colspan() {
                      return c().length;
                    },
                    style: "text-align:center; padding: 24px; opacity: 0.6; background: rgba(0,0,0,0.05);",
                    children: (R, W) => {
                      var Ie = gt();
                      Te(() => ze(Ie, g())), T(R, Ie);
                    },
                    $$slots: { default: !0 }
                  });
                },
                $$slots: { default: !0 }
              });
            }, N = (K) => {
              var ne = re(), F = Z(ne);
              Qn(F, 1, i, Hi, (R, W) => {
                ro(R, {
                  children: (Ie, V) => {
                    var H = re(), M = Z(H);
                    Qn(M, 17, c, (D) => D.field, (D, ee) => {
                      var J = re(), ie = Z(J);
                      {
                        var Se = (se) => {
                          Ea(se, {
                            children: (Re, xe) => {
                              var Ue = Ry();
                              Qn(Ue, 21, m, Hi, (Me, Pe) => {
                                var G = re(), Q = Z(G);
                                {
                                  var fe = (Fe) => {
                                    Na(Fe, {
                                      get content() {
                                        return s(Pe).tooltip;
                                      },
                                      hoverDelay: 500,
                                      children: (ot, ft) => {
                                        {
                                          let he = /* @__PURE__ */ ve(() => s(Pe).disabled(s(W)));
                                          mg(ot, {
                                            get iconComponent() {
                                              return s(Pe).iconComponent;
                                            },
                                            get iconStyles() {
                                              return s(Pe).iconStyles;
                                            },
                                            callback: () => s(Pe).callback(s(W)),
                                            get disabled() {
                                              return s(he);
                                            }
                                          });
                                        }
                                      },
                                      $$slots: { default: !0 }
                                    });
                                  }, De = (Fe) => {
                                    Na(Fe, {
                                      get content() {
                                        return s(Pe).tooltip;
                                      },
                                      hoverDelay: 500,
                                      children: (ot, ft) => {
                                        {
                                          let he = /* @__PURE__ */ ve(() => s(Pe).disabled(s(W)));
                                          ld(ot, {
                                            class: "button",
                                            variant: "raised",
                                            callback: () => s(Pe).callback(s(W)),
                                            get disabled() {
                                              return s(he);
                                            },
                                            children: (k, j) => {
                                              var ae = re(), Be = Z(ae);
                                              {
                                                var vt = (yt) => {
                                                  ob(yt, { svgStyles: "margin: unset" });
                                                }, St = (yt) => {
                                                  var jt = re(), Sr = Z(jt);
                                                  {
                                                    var pt = (At) => {
                                                      fl(At, { svgStyles: "margin: unset" });
                                                    }, Nt = (At) => {
                                                      var Dn = re(), Ei = Z(Dn);
                                                      {
                                                        var qn = (et) => {
                                                          ub(et, { svgStyles: "margin: unset" });
                                                        }, Ze = (et) => {
                                                          var tt = re(), Ut = Z(tt);
                                                          {
                                                            var mn = (ht) => {
                                                              db(ht, { svgStyles: "margin: unset" });
                                                            }, st = (ht) => {
                                                              var Lt = re(), nt = Z(Lt);
                                                              {
                                                                var Mt = (Pt) => {
                                                                  mb(Pt, { svgStyles: "margin: unset" });
                                                                }, Mn = (Pt) => {
                                                                  var Et = re(), Ft = Z(Et);
                                                                  {
                                                                    var un = (cn) => {
                                                                      md(cn, { svgStyles: "margin: unset" });
                                                                    }, qt = (cn) => {
                                                                      var $t = re(), Wn = Z($t);
                                                                      {
                                                                        var Kr = (Xt) => {
                                                                          gd(Xt, { svgStyles: "margin: unset" });
                                                                        }, dn = (Xt) => {
                                                                          var gn = re(), ar = Z(gn);
                                                                          {
                                                                            var da = (Er) => {
                                                                              Ub(Er, { svgStyles: "margin: unset" });
                                                                            }, Wo = (Er) => {
                                                                              hb(Er, { svgStyles: "margin: unset" });
                                                                            };
                                                                            oe(
                                                                              ar,
                                                                              (Er) => {
                                                                                s(Pe).icon === "archive" ? Er(da) : Er(Wo, !1);
                                                                              },
                                                                              !0
                                                                            );
                                                                          }
                                                                          T(Xt, gn);
                                                                        };
                                                                        oe(
                                                                          Wn,
                                                                          (Xt) => {
                                                                            s(Pe).icon === "delete" ? Xt(Kr) : Xt(dn, !1);
                                                                          },
                                                                          !0
                                                                        );
                                                                      }
                                                                      T(cn, $t);
                                                                    };
                                                                    oe(
                                                                      Ft,
                                                                      (cn) => {
                                                                        s(Pe).icon === "edit" ? cn(un) : cn(qt, !1);
                                                                      },
                                                                      !0
                                                                    );
                                                                  }
                                                                  T(Pt, Et);
                                                                };
                                                                oe(
                                                                  nt,
                                                                  (Pt) => {
                                                                    s(Pe).icon === "remove" ? Pt(Mt) : Pt(Mn, !1);
                                                                  },
                                                                  !0
                                                                );
                                                              }
                                                              T(ht, Lt);
                                                            };
                                                            oe(
                                                              Ut,
                                                              (ht) => {
                                                                s(Pe).icon === "find-in-page" ? ht(mn) : ht(st, !1);
                                                              },
                                                              !0
                                                            );
                                                          }
                                                          T(et, tt);
                                                        };
                                                        oe(
                                                          Ei,
                                                          (et) => {
                                                            s(Pe).icon === "download" ? et(qn) : et(Ze, !1);
                                                          },
                                                          !0
                                                        );
                                                      }
                                                      T(At, Dn);
                                                    };
                                                    oe(
                                                      Sr,
                                                      (At) => {
                                                        s(Pe).icon === "cancel" ? At(pt) : At(Nt, !1);
                                                      },
                                                      !0
                                                    );
                                                  }
                                                  T(yt, jt);
                                                };
                                                oe(Be, (yt) => {
                                                  s(Pe).icon === "add" ? yt(vt) : yt(St, !1);
                                                });
                                              }
                                              T(k, ae);
                                            },
                                            $$slots: { default: !0 }
                                          });
                                        }
                                      },
                                      $$slots: { default: !0 }
                                    });
                                  };
                                  oe(Q, (Fe) => {
                                    s(Pe).iconComponent ? Fe(fe) : Fe(De, !1);
                                  });
                                }
                                T(Me, G);
                              }), T(Re, Ue);
                            },
                            $$slots: { default: !0 }
                          });
                        }, te = (se) => {
                          Ea(se, {
                            get numeric() {
                              return s(ee).numeric;
                            },
                            get style() {
                              return s(ee).cellStyle;
                            },
                            children: (Re, xe) => {
                              var Ue = re(), Me = Z(Ue);
                              {
                                var Pe = (Q) => {
                                  const fe = /* @__PURE__ */ ve(() => s(ee).cellRenderer);
                                  var De = re(), Fe = Z(De);
                                  rr(Fe, () => s(fe), (ot, ft) => {
                                    ft(ot, $e(
                                      {
                                        get row() {
                                          return s(W);
                                        },
                                        get value() {
                                          return s(W)[s(ee).field];
                                        },
                                        get col() {
                                          return s(ee);
                                        }
                                      },
                                      () => s(ee).cellRendererProps ?? {}
                                    ));
                                  }), T(Q, De);
                                }, G = (Q) => {
                                  var fe = re(), De = Z(fe);
                                  {
                                    var Fe = (ft) => {
                                      var he = gt();
                                      Te((k) => ze(he, k), [
                                        () => s(ee).valueFormatter(s(W)[s(ee).field])
                                      ]), T(ft, he);
                                    }, ot = (ft) => {
                                      var he = gt();
                                      Te(() => ze(he, s(W)[s(ee).field] ?? "")), T(ft, he);
                                    };
                                    oe(
                                      De,
                                      (ft) => {
                                        s(ee).valueFormatter ? ft(Fe) : ft(ot, !1);
                                      },
                                      !0
                                    );
                                  }
                                  T(Q, fe);
                                };
                                oe(Me, (Q) => {
                                  s(ee).cellRenderer ? Q(Pe) : Q(G, !1);
                                });
                              }
                              T(Re, Ue);
                            },
                            $$slots: { default: !0 }
                          });
                        };
                        oe(ie, (se) => {
                          s(ee).field === "actions" ? se(Se) : se(te, !1);
                        });
                      }
                      T(D, J);
                    }), T(Ie, H);
                  },
                  $$slots: { default: !0 }
                });
              }), T(K, ne);
            };
            oe(x, (K) => {
              i().length === 0 ? K(P) : K(N, !1);
            });
          }
          T(q, O);
        },
        $$slots: { default: !0 }
      }), T(L, w);
    },
    $$slots: { progress: !0, default: !0 }
  }), Le(), o();
}
Sn(["input"]);
function xt(t) {
  return typeof t == "function";
}
function vl(t) {
  var e = function(r) {
    Error.call(r), r.stack = new Error().stack;
  }, n = t(e);
  return n.prototype = Object.create(Error.prototype), n.prototype.constructor = n, n;
}
var ms = vl(function(t) {
  return function(n) {
    t(this), this.message = n ? n.length + ` errors occurred during unsubscription:
` + n.map(function(r, i) {
      return i + 1 + ") " + r.toString();
    }).join(`
  `) : "", this.name = "UnsubscriptionError", this.errors = n;
  };
});
function wo(t, e) {
  if (t) {
    var n = t.indexOf(e);
    0 <= n && t.splice(n, 1);
  }
}
var za = function() {
  function t(e) {
    this.initialTeardown = e, this.closed = !1, this._parentage = null, this._finalizers = null;
  }
  return t.prototype.unsubscribe = function() {
    var e, n, r, i, a;
    if (!this.closed) {
      this.closed = !0;
      var o = this._parentage;
      if (o)
        if (this._parentage = null, Array.isArray(o))
          try {
            for (var u = Bt(o), l = u.next(); !l.done; l = u.next()) {
              var c = l.value;
              c.remove(this);
            }
          } catch (p) {
            e = { error: p };
          } finally {
            try {
              l && !l.done && (n = u.return) && n.call(u);
            } finally {
              if (e) throw e.error;
            }
          }
        else
          o.remove(this);
      var d = this.initialTeardown;
      if (xt(d))
        try {
          d();
        } catch (p) {
          a = p instanceof ms ? p.errors : [p];
        }
      var m = this._finalizers;
      if (m) {
        this._finalizers = null;
        try {
          for (var f = Bt(m), g = f.next(); !g.done; g = f.next()) {
            var h = g.value;
            try {
              Au(h);
            } catch (p) {
              a = a ?? [], p instanceof ms ? a = er(er([], yr(a)), yr(p.errors)) : a.push(p);
            }
          }
        } catch (p) {
          r = { error: p };
        } finally {
          try {
            g && !g.done && (i = f.return) && i.call(f);
          } finally {
            if (r) throw r.error;
          }
        }
      }
      if (a)
        throw new ms(a);
    }
  }, t.prototype.add = function(e) {
    var n;
    if (e && e !== this)
      if (this.closed)
        Au(e);
      else {
        if (e instanceof t) {
          if (e.closed || e._hasParent(this))
            return;
          e._addParent(this);
        }
        (this._finalizers = (n = this._finalizers) !== null && n !== void 0 ? n : []).push(e);
      }
  }, t.prototype._hasParent = function(e) {
    var n = this._parentage;
    return n === e || Array.isArray(n) && n.includes(e);
  }, t.prototype._addParent = function(e) {
    var n = this._parentage;
    this._parentage = Array.isArray(n) ? (n.push(e), n) : n ? [n, e] : e;
  }, t.prototype._removeParent = function(e) {
    var n = this._parentage;
    n === e ? this._parentage = null : Array.isArray(n) && wo(n, e);
  }, t.prototype.remove = function(e) {
    var n = this._finalizers;
    n && wo(n, e), e instanceof t && e._removeParent(this);
  }, t.EMPTY = function() {
    var e = new t();
    return e.closed = !0, e;
  }(), t;
}(), _d = za.EMPTY;
function yd(t) {
  return t instanceof za || t && "closed" in t && xt(t.remove) && xt(t.add) && xt(t.unsubscribe);
}
function Au(t) {
  xt(t) ? t() : t.unsubscribe();
}
var My = {
  Promise: void 0
}, Py = {
  setTimeout: function(t, e) {
    for (var n = [], r = 2; r < arguments.length; r++)
      n[r - 2] = arguments[r];
    return setTimeout.apply(void 0, er([t, e], yr(n)));
  },
  clearTimeout: function(t) {
    return clearTimeout(t);
  },
  delegate: void 0
};
function Id(t) {
  Py.setTimeout(function() {
    throw t;
  });
}
function Cu() {
}
function vo(t) {
  t();
}
var ml = function(t) {
  Ke(e, t);
  function e(n) {
    var r = t.call(this) || this;
    return r.isStopped = !1, n ? (r.destination = n, yd(n) && n.add(r)) : r.destination = Uy, r;
  }
  return e.create = function(n, r, i) {
    return new Vs(n, r, i);
  }, e.prototype.next = function(n) {
    this.isStopped || this._next(n);
  }, e.prototype.error = function(n) {
    this.isStopped || (this.isStopped = !0, this._error(n));
  }, e.prototype.complete = function() {
    this.isStopped || (this.isStopped = !0, this._complete());
  }, e.prototype.unsubscribe = function() {
    this.closed || (this.isStopped = !0, t.prototype.unsubscribe.call(this), this.destination = null);
  }, e.prototype._next = function(n) {
    this.destination.next(n);
  }, e.prototype._error = function(n) {
    try {
      this.destination.error(n);
    } finally {
      this.unsubscribe();
    }
  }, e.prototype._complete = function() {
    try {
      this.destination.complete();
    } finally {
      this.unsubscribe();
    }
  }, e;
}(za), Hy = function() {
  function t(e) {
    this.partialObserver = e;
  }
  return t.prototype.next = function(e) {
    var n = this.partialObserver;
    if (n.next)
      try {
        n.next(e);
      } catch (r) {
        oo(r);
      }
  }, t.prototype.error = function(e) {
    var n = this.partialObserver;
    if (n.error)
      try {
        n.error(e);
      } catch (r) {
        oo(r);
      }
    else
      oo(e);
  }, t.prototype.complete = function() {
    var e = this.partialObserver;
    if (e.complete)
      try {
        e.complete();
      } catch (n) {
        oo(n);
      }
  }, t;
}(), Vs = function(t) {
  Ke(e, t);
  function e(n, r, i) {
    var a = t.call(this) || this, o;
    return xt(n) || !n ? o = {
      next: n ?? void 0,
      error: r ?? void 0,
      complete: i ?? void 0
    } : o = n, a.destination = new Hy(o), a;
  }
  return e;
}(ml);
function oo(t) {
  Id(t);
}
function Ny(t) {
  throw t;
}
var Uy = {
  closed: !0,
  next: Cu,
  error: Ny,
  complete: Cu
}, gl = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}();
function pl(t) {
  return t;
}
function Fy(t) {
  return t.length === 0 ? pl : t.length === 1 ? t[0] : function(n) {
    return t.reduce(function(r, i) {
      return i(r);
    }, n);
  };
}
var In = function() {
  function t(e) {
    e && (this._subscribe = e);
  }
  return t.prototype.lift = function(e) {
    var n = new t();
    return n.source = this, n.operator = e, n;
  }, t.prototype.subscribe = function(e, n, r) {
    var i = this, a = By(e) ? e : new Vs(e, n, r);
    return vo(function() {
      var o = i, u = o.operator, l = o.source;
      a.add(u ? u.call(a, l) : l ? i._subscribe(a) : i._trySubscribe(a));
    }), a;
  }, t.prototype._trySubscribe = function(e) {
    try {
      return this._subscribe(e);
    } catch (n) {
      e.error(n);
    }
  }, t.prototype.forEach = function(e, n) {
    var r = this;
    return n = Tu(n), new n(function(i, a) {
      var o = new Vs({
        next: function(u) {
          try {
            e(u);
          } catch (l) {
            a(l), o.unsubscribe();
          }
        },
        error: a,
        complete: i
      });
      r.subscribe(o);
    });
  }, t.prototype._subscribe = function(e) {
    var n;
    return (n = this.source) === null || n === void 0 ? void 0 : n.subscribe(e);
  }, t.prototype[gl] = function() {
    return this;
  }, t.prototype.pipe = function() {
    for (var e = [], n = 0; n < arguments.length; n++)
      e[n] = arguments[n];
    return Fy(e)(this);
  }, t.prototype.toPromise = function(e) {
    var n = this;
    return e = Tu(e), new e(function(r, i) {
      var a;
      n.subscribe(function(o) {
        return a = o;
      }, function(o) {
        return i(o);
      }, function() {
        return r(a);
      });
    });
  }, t.create = function(e) {
    return new t(e);
  }, t;
}();
function Tu(t) {
  var e;
  return (e = t ?? My.Promise) !== null && e !== void 0 ? e : Promise;
}
function ky(t) {
  return t && xt(t.next) && xt(t.error) && xt(t.complete);
}
function By(t) {
  return t && t instanceof ml || ky(t) && yd(t);
}
function Vy(t) {
  return xt(t == null ? void 0 : t.lift);
}
function Rn(t) {
  return function(e) {
    if (Vy(e))
      return e.lift(function(n) {
        try {
          return t(n, this);
        } catch (r) {
          this.error(r);
        }
      });
    throw new TypeError("Unable to lift unknown Observable type");
  };
}
function Gn(t, e, n, r, i) {
  return new Gy(t, e, n, r, i);
}
var Gy = function(t) {
  Ke(e, t);
  function e(n, r, i, a, o, u) {
    var l = t.call(this, n) || this;
    return l.onFinalize = o, l.shouldUnsubscribe = u, l._next = r ? function(c) {
      try {
        r(c);
      } catch (d) {
        n.error(d);
      }
    } : t.prototype._next, l._error = a ? function(c) {
      try {
        a(c);
      } catch (d) {
        n.error(d);
      } finally {
        this.unsubscribe();
      }
    } : t.prototype._error, l._complete = i ? function() {
      try {
        i();
      } catch (c) {
        n.error(c);
      } finally {
        this.unsubscribe();
      }
    } : t.prototype._complete, l;
  }
  return e.prototype.unsubscribe = function() {
    var n;
    if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
      var r = this.closed;
      t.prototype.unsubscribe.call(this), !r && ((n = this.onFinalize) === null || n === void 0 || n.call(this));
    }
  }, e;
}(ml), jy = vl(function(t) {
  return function() {
    t(this), this.name = "ObjectUnsubscribedError", this.message = "object unsubscribed";
  };
}), Gs = function(t) {
  Ke(e, t);
  function e() {
    var n = t.call(this) || this;
    return n.closed = !1, n.currentObservers = null, n.observers = [], n.isStopped = !1, n.hasError = !1, n.thrownError = null, n;
  }
  return e.prototype.lift = function(n) {
    var r = new xu(this, this);
    return r.operator = n, r;
  }, e.prototype._throwIfClosed = function() {
    if (this.closed)
      throw new jy();
  }, e.prototype.next = function(n) {
    var r = this;
    vo(function() {
      var i, a;
      if (r._throwIfClosed(), !r.isStopped) {
        r.currentObservers || (r.currentObservers = Array.from(r.observers));
        try {
          for (var o = Bt(r.currentObservers), u = o.next(); !u.done; u = o.next()) {
            var l = u.value;
            l.next(n);
          }
        } catch (c) {
          i = { error: c };
        } finally {
          try {
            u && !u.done && (a = o.return) && a.call(o);
          } finally {
            if (i) throw i.error;
          }
        }
      }
    });
  }, e.prototype.error = function(n) {
    var r = this;
    vo(function() {
      if (r._throwIfClosed(), !r.isStopped) {
        r.hasError = r.isStopped = !0, r.thrownError = n;
        for (var i = r.observers; i.length; )
          i.shift().error(n);
      }
    });
  }, e.prototype.complete = function() {
    var n = this;
    vo(function() {
      if (n._throwIfClosed(), !n.isStopped) {
        n.isStopped = !0;
        for (var r = n.observers; r.length; )
          r.shift().complete();
      }
    });
  }, e.prototype.unsubscribe = function() {
    this.isStopped = this.closed = !0, this.observers = this.currentObservers = null;
  }, Object.defineProperty(e.prototype, "observed", {
    get: function() {
      var n;
      return ((n = this.observers) === null || n === void 0 ? void 0 : n.length) > 0;
    },
    enumerable: !1,
    configurable: !0
  }), e.prototype._trySubscribe = function(n) {
    return this._throwIfClosed(), t.prototype._trySubscribe.call(this, n);
  }, e.prototype._subscribe = function(n) {
    return this._throwIfClosed(), this._checkFinalizedStatuses(n), this._innerSubscribe(n);
  }, e.prototype._innerSubscribe = function(n) {
    var r = this, i = this, a = i.hasError, o = i.isStopped, u = i.observers;
    return a || o ? _d : (this.currentObservers = null, u.push(n), new za(function() {
      r.currentObservers = null, wo(u, n);
    }));
  }, e.prototype._checkFinalizedStatuses = function(n) {
    var r = this, i = r.hasError, a = r.thrownError, o = r.isStopped;
    i ? n.error(a) : o && n.complete();
  }, e.prototype.asObservable = function() {
    var n = new In();
    return n.source = this, n;
  }, e.create = function(n, r) {
    return new xu(n, r);
  }, e;
}(In), xu = function(t) {
  Ke(e, t);
  function e(n, r) {
    var i = t.call(this) || this;
    return i.destination = n, i.source = r, i;
  }
  return e.prototype.next = function(n) {
    var r, i;
    (i = (r = this.destination) === null || r === void 0 ? void 0 : r.next) === null || i === void 0 || i.call(r, n);
  }, e.prototype.error = function(n) {
    var r, i;
    (i = (r = this.destination) === null || r === void 0 ? void 0 : r.error) === null || i === void 0 || i.call(r, n);
  }, e.prototype.complete = function() {
    var n, r;
    (r = (n = this.destination) === null || n === void 0 ? void 0 : n.complete) === null || r === void 0 || r.call(n);
  }, e.prototype._subscribe = function(n) {
    var r, i;
    return (i = (r = this.source) === null || r === void 0 ? void 0 : r.subscribe(n)) !== null && i !== void 0 ? i : _d;
  }, e;
}(Gs), qy = {
  now: function() {
    return Date.now();
  }
}, Wy = function(t) {
  Ke(e, t);
  function e(n, r) {
    return t.call(this) || this;
  }
  return e.prototype.schedule = function(n, r) {
    return this;
  }, e;
}(za), wu = {
  setInterval: function(t, e) {
    for (var n = [], r = 2; r < arguments.length; r++)
      n[r - 2] = arguments[r];
    return setInterval.apply(void 0, er([t, e], yr(n)));
  },
  clearInterval: function(t) {
    return clearInterval(t);
  },
  delegate: void 0
}, zy = function(t) {
  Ke(e, t);
  function e(n, r) {
    var i = t.call(this, n, r) || this;
    return i.scheduler = n, i.work = r, i.pending = !1, i;
  }
  return e.prototype.schedule = function(n, r) {
    var i;
    if (r === void 0 && (r = 0), this.closed)
      return this;
    this.state = n;
    var a = this.id, o = this.scheduler;
    return a != null && (this.id = this.recycleAsyncId(o, a, r)), this.pending = !0, this.delay = r, this.id = (i = this.id) !== null && i !== void 0 ? i : this.requestAsyncId(o, this.id, r), this;
  }, e.prototype.requestAsyncId = function(n, r, i) {
    return i === void 0 && (i = 0), wu.setInterval(n.flush.bind(n, this), i);
  }, e.prototype.recycleAsyncId = function(n, r, i) {
    if (i === void 0 && (i = 0), i != null && this.delay === i && this.pending === !1)
      return r;
    r != null && wu.clearInterval(r);
  }, e.prototype.execute = function(n, r) {
    if (this.closed)
      return new Error("executing a cancelled action");
    this.pending = !1;
    var i = this._execute(n, r);
    if (i)
      return i;
    this.pending === !1 && this.id != null && (this.id = this.recycleAsyncId(this.scheduler, this.id, null));
  }, e.prototype._execute = function(n, r) {
    var i = !1, a;
    try {
      this.work(n);
    } catch (o) {
      i = !0, a = o || new Error("Scheduled action threw falsy error");
    }
    if (i)
      return this.unsubscribe(), a;
  }, e.prototype.unsubscribe = function() {
    if (!this.closed) {
      var n = this, r = n.id, i = n.scheduler, a = i.actions;
      this.work = this.state = this.scheduler = null, this.pending = !1, wo(a, this), r != null && (this.id = this.recycleAsyncId(i, r, null)), this.delay = null, t.prototype.unsubscribe.call(this);
    }
  }, e;
}(Wy), Lu = function() {
  function t(e, n) {
    n === void 0 && (n = t.now), this.schedulerActionCtor = e, this.now = n;
  }
  return t.prototype.schedule = function(e, n, r) {
    return n === void 0 && (n = 0), new this.schedulerActionCtor(this, e).schedule(r, n);
  }, t.now = qy.now, t;
}(), Ky = function(t) {
  Ke(e, t);
  function e(n, r) {
    r === void 0 && (r = Lu.now);
    var i = t.call(this, n, r) || this;
    return i.actions = [], i._active = !1, i;
  }
  return e.prototype.flush = function(n) {
    var r = this.actions;
    if (this._active) {
      r.push(n);
      return;
    }
    var i;
    this._active = !0;
    do
      if (i = n.execute(n.state, n.delay))
        break;
    while (n = r.shift());
    if (this._active = !1, i) {
      for (; n = r.shift(); )
        n.unsubscribe();
      throw i;
    }
  }, e;
}(Lu), Xy = new Ky(zy), Zy = new In(function(t) {
  return t.complete();
});
function Yy(t) {
  return t && xt(t.schedule);
}
function Sd(t) {
  return t[t.length - 1];
}
function Ed(t) {
  return Yy(Sd(t)) ? t.pop() : void 0;
}
function Qy(t, e) {
  return typeof Sd(t) == "number" ? t.pop() : e;
}
var Ad = function(t) {
  return t && typeof t.length == "number" && typeof t != "function";
};
function Cd(t) {
  return xt(t == null ? void 0 : t.then);
}
function Td(t) {
  return xt(t[gl]);
}
function xd(t) {
  return Symbol.asyncIterator && xt(t == null ? void 0 : t[Symbol.asyncIterator]);
}
function wd(t) {
  return new TypeError("You provided " + (t !== null && typeof t == "object" ? "an invalid object" : "'" + t + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
}
function Jy() {
  return typeof Symbol != "function" || !Symbol.iterator ? "@@iterator" : Symbol.iterator;
}
var Ld = Jy();
function Od(t) {
  return xt(t == null ? void 0 : t[Ld]);
}
function Rd(t) {
  return Kh(this, arguments, function() {
    var n, r, i, a;
    return al(this, function(o) {
      switch (o.label) {
        case 0:
          n = t.getReader(), o.label = 1;
        case 1:
          o.trys.push([1, , 9, 10]), o.label = 2;
        case 2:
          return [4, Bi(n.read())];
        case 3:
          return r = o.sent(), i = r.value, a = r.done, a ? [4, Bi(void 0)] : [3, 5];
        case 4:
          return [2, o.sent()];
        case 5:
          return [4, Bi(i)];
        case 6:
          return [4, o.sent()];
        case 7:
          return o.sent(), [3, 2];
        case 8:
          return [3, 10];
        case 9:
          return n.releaseLock(), [7];
        case 10:
          return [2];
      }
    });
  });
}
function Dd(t) {
  return xt(t == null ? void 0 : t.getReader);
}
function Si(t) {
  if (t instanceof In)
    return t;
  if (t != null) {
    if (Td(t))
      return $y(t);
    if (Ad(t))
      return e0(t);
    if (Cd(t))
      return t0(t);
    if (xd(t))
      return Md(t);
    if (Od(t))
      return n0(t);
    if (Dd(t))
      return r0(t);
  }
  throw wd(t);
}
function $y(t) {
  return new In(function(e) {
    var n = t[gl]();
    if (xt(n.subscribe))
      return n.subscribe(e);
    throw new TypeError("Provided object does not correctly implement Symbol.observable");
  });
}
function e0(t) {
  return new In(function(e) {
    for (var n = 0; n < t.length && !e.closed; n++)
      e.next(t[n]);
    e.complete();
  });
}
function t0(t) {
  return new In(function(e) {
    t.then(function(n) {
      e.closed || (e.next(n), e.complete());
    }, function(n) {
      return e.error(n);
    }).then(null, Id);
  });
}
function n0(t) {
  return new In(function(e) {
    var n, r;
    try {
      for (var i = Bt(t), a = i.next(); !a.done; a = i.next()) {
        var o = a.value;
        if (e.next(o), e.closed)
          return;
      }
    } catch (u) {
      n = { error: u };
    } finally {
      try {
        a && !a.done && (r = i.return) && r.call(i);
      } finally {
        if (n) throw n.error;
      }
    }
    e.complete();
  });
}
function Md(t) {
  return new In(function(e) {
    i0(t, e).catch(function(n) {
      return e.error(n);
    });
  });
}
function r0(t) {
  return Md(Rd(t));
}
function i0(t, e) {
  var n, r, i, a;
  return Pc(this, void 0, void 0, function() {
    var o, u;
    return al(this, function(l) {
      switch (l.label) {
        case 0:
          l.trys.push([0, 5, 6, 11]), n = Xh(t), l.label = 1;
        case 1:
          return [4, n.next()];
        case 2:
          if (r = l.sent(), !!r.done) return [3, 4];
          if (o = r.value, e.next(o), e.closed)
            return [2];
          l.label = 3;
        case 3:
          return [3, 1];
        case 4:
          return [3, 11];
        case 5:
          return u = l.sent(), i = { error: u }, [3, 11];
        case 6:
          return l.trys.push([6, , 9, 10]), r && !r.done && (a = n.return) ? [4, a.call(n)] : [3, 8];
        case 7:
          l.sent(), l.label = 8;
        case 8:
          return [3, 10];
        case 9:
          if (i) throw i.error;
          return [7];
        case 10:
          return [7];
        case 11:
          return e.complete(), [2];
      }
    });
  });
}
function di(t, e, n, r, i) {
  r === void 0 && (r = 0), i === void 0 && (i = !1);
  var a = e.schedule(function() {
    n(), i ? t.add(this.schedule(null, r)) : this.unsubscribe();
  }, r);
  if (t.add(a), !i)
    return a;
}
function Pd(t, e) {
  return e === void 0 && (e = 0), Rn(function(n, r) {
    n.subscribe(Gn(r, function(i) {
      return di(r, t, function() {
        return r.next(i);
      }, e);
    }, function() {
      return di(r, t, function() {
        return r.complete();
      }, e);
    }, function(i) {
      return di(r, t, function() {
        return r.error(i);
      }, e);
    }));
  });
}
function Hd(t, e) {
  return e === void 0 && (e = 0), Rn(function(n, r) {
    r.add(t.schedule(function() {
      return n.subscribe(r);
    }, e));
  });
}
function a0(t, e) {
  return Si(t).pipe(Hd(e), Pd(e));
}
function o0(t, e) {
  return Si(t).pipe(Hd(e), Pd(e));
}
function s0(t, e) {
  return new In(function(n) {
    var r = 0;
    return e.schedule(function() {
      r === t.length ? n.complete() : (n.next(t[r++]), n.closed || this.schedule());
    });
  });
}
function l0(t, e) {
  return new In(function(n) {
    var r;
    return di(n, e, function() {
      r = t[Ld](), di(n, e, function() {
        var i, a, o;
        try {
          i = r.next(), a = i.value, o = i.done;
        } catch (u) {
          n.error(u);
          return;
        }
        o ? n.complete() : n.next(a);
      }, 0, !0);
    }), function() {
      return xt(r == null ? void 0 : r.return) && r.return();
    };
  });
}
function Nd(t, e) {
  if (!t)
    throw new Error("Iterable cannot be null");
  return new In(function(n) {
    di(n, e, function() {
      var r = t[Symbol.asyncIterator]();
      di(n, e, function() {
        r.next().then(function(i) {
          i.done ? n.complete() : n.next(i.value);
        });
      }, 0, !0);
    });
  });
}
function u0(t, e) {
  return Nd(Rd(t), e);
}
function c0(t, e) {
  if (t != null) {
    if (Td(t))
      return a0(t, e);
    if (Ad(t))
      return s0(t, e);
    if (Cd(t))
      return o0(t, e);
    if (xd(t))
      return Nd(t, e);
    if (Od(t))
      return l0(t, e);
    if (Dd(t))
      return u0(t, e);
  }
  throw wd(t);
}
function qo(t, e) {
  return e ? c0(t, e) : Si(t);
}
function bl() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  var n = Ed(t);
  return qo(t, n);
}
function Vt(t, e) {
  return Rn(function(n, r) {
    var i = 0;
    n.subscribe(Gn(r, function(a) {
      r.next(t.call(e, a, i++));
    }));
  });
}
function d0(t, e, n, r, i, a, o, u) {
  var l = [], c = 0, d = 0, m = !1, f = function() {
    m && !l.length && !c && e.complete();
  }, g = function(p) {
    return c < r ? h(p) : l.push(p);
  }, h = function(p) {
    c++;
    var b = !1;
    Si(n(p, d++)).subscribe(Gn(e, function(y) {
      e.next(y);
    }, function() {
      b = !0;
    }, void 0, function() {
      if (b)
        try {
          c--;
          for (var y = function() {
            var E = l.shift();
            o || h(E);
          }; l.length && c < r; )
            y();
          f();
        } catch (E) {
          e.error(E);
        }
    }));
  };
  return t.subscribe(Gn(e, g, function() {
    m = !0, f();
  })), function() {
  };
}
function Lo(t, e, n) {
  return n === void 0 && (n = 1 / 0), xt(e) ? Lo(function(r, i) {
    return Vt(function(a, o) {
      return e(r, a, i, o);
    })(Si(t(r, i)));
  }, n) : (typeof e == "number" && (n = e), Rn(function(r, i) {
    return d0(r, i, t, n);
  }));
}
function f0(t) {
  return t === void 0 && (t = 1 / 0), Lo(pl, t);
}
function Ou(t, e) {
  return Rn(function(n, r) {
    var i = 0;
    n.subscribe(Gn(r, function(a) {
      return t.call(e, a, i++) && r.next(a);
    }));
  });
}
function Ud(t) {
  return Rn(function(e, n) {
    var r = null, i = !1, a;
    r = e.subscribe(Gn(n, void 0, void 0, function(o) {
      a = Si(t(o, Ud(t)(e))), r ? (r.unsubscribe(), r = null, a.subscribe(n)) : i = !0;
    })), i && (r.unsubscribe(), r = null, a.subscribe(n));
  });
}
function Fd(t, e) {
  return xt(e) ? Lo(t, e, 1) : Lo(t, 1);
}
function h0(t, e) {
  return e === void 0 && (e = Xy), Rn(function(n, r) {
    var i = null, a = null, o = null, u = function() {
      if (i) {
        i.unsubscribe(), i = null;
        var c = a;
        a = null, r.next(c);
      }
    };
    function l() {
      var c = o + t, d = e.now();
      if (d < c) {
        i = this.schedule(void 0, c - d), r.add(i);
        return;
      }
      u();
    }
    n.subscribe(Gn(r, function(c) {
      a = c, o = e.now(), i || (i = e.schedule(l, t), r.add(i));
    }, function() {
      u(), r.complete();
    }, void 0, function() {
      a = i = null;
    }));
  });
}
function wr(t) {
  return t <= 0 ? function() {
    return Zy;
  } : Rn(function(e, n) {
    var r = 0;
    e.subscribe(Gn(n, function(i) {
      ++r <= t && (n.next(i), t <= r && n.complete());
    }));
  });
}
function Ru(t) {
  return Rn(function(e, n) {
    try {
      e.subscribe(n);
    } finally {
      n.add(t);
    }
  });
}
function v0() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  var n = Ed(t), r = Qy(t, 1 / 0);
  return Rn(function(i, a) {
    f0(r)(qo(er([i], yr(t)), n)).subscribe(a);
  });
}
function m0() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  return v0.apply(void 0, er([], yr(t)));
}
function Du(t, e) {
  return Rn(function(n, r) {
    var i = null, a = 0, o = !1, u = function() {
      return o && !i && r.complete();
    };
    n.subscribe(Gn(r, function(l) {
      i == null || i.unsubscribe();
      var c = 0, d = a++;
      Si(t(l, d)).subscribe(i = Gn(r, function(m) {
        return r.next(e ? e(l, m, d, c++) : m);
      }, function() {
        i = null, u();
      }));
    }, function() {
      o = !0, u();
    }));
  });
}
function Ri(t, e, n) {
  var r = xt(t) || e || n ? { next: t, error: e, complete: n } : t;
  return r ? Rn(function(i, a) {
    var o;
    (o = r.subscribe) === null || o === void 0 || o.call(r);
    var u = !0;
    i.subscribe(Gn(a, function(l) {
      var c;
      (c = r.next) === null || c === void 0 || c.call(r, l), a.next(l);
    }, function() {
      var l;
      u = !1, (l = r.complete) === null || l === void 0 || l.call(r), a.complete();
    }, function(l) {
      var c;
      u = !1, (c = r.error) === null || c === void 0 || c.call(r, l), a.error(l);
    }, function() {
      var l, c;
      u && ((l = r.unsubscribe) === null || l === void 0 || l.call(r)), (c = r.finalize) === null || c === void 0 || c.call(r);
    }));
  }) : pl;
}
class g0 {
  constructor(e, n, r, i, a, o, u, l, c, d) {
    this._uuid = e, this._filename = n, this._author = r, this._type = i, this._date = a, this._version = o, this._comment = u, this._archived = l, this._available = c, this._deleted = d;
  }
  get uuid() {
    return this._uuid;
  }
  get filename() {
    return this._filename;
  }
  get author() {
    return this._author;
  }
  get type() {
    return this._type;
  }
  get date() {
    return this._date;
  }
  get version() {
    return this._version;
  }
  get comment() {
    return this._comment;
  }
  get archived() {
    return this._archived;
  }
  get available() {
    return this._available;
  }
  get deleted() {
    return this._deleted;
  }
}
function kd(t) {
  switch (t.responseType) {
    case "json": {
      if ("response" in t)
        return t.response;
      var e = t;
      return JSON.parse(e.responseText);
    }
    case "document":
      return t.responseXML;
    case "text":
    default: {
      if ("response" in t)
        return t.response;
      var e = t;
      return e.responseText;
    }
  }
}
var p0 = /* @__PURE__ */ function() {
  function t(e, n, r, i) {
    i === void 0 && (i = "download_load"), this.originalEvent = e, this.xhr = n, this.request = r, this.type = i;
    var a = n.status, o = n.responseType;
    this.status = a ?? 0, this.responseType = o ?? "";
    var u = n.getAllResponseHeaders();
    this.responseHeaders = u ? u.split(`
`).reduce(function(d, m) {
      var f = m.indexOf(": ");
      return d[m.slice(0, f)] = m.slice(f + 2), d;
    }, {}) : {}, this.response = kd(n);
    var l = e.loaded, c = e.total;
    this.loaded = l, this.total = c;
  }
  return t;
}(), Oo = vl(function(t) {
  return function(n, r, i) {
    this.message = n, this.name = "AjaxError", this.xhr = r, this.request = i, this.status = r.status, this.responseType = r.responseType;
    var a;
    try {
      a = kd(r);
    } catch {
      a = r.responseText;
    }
    this.response = a;
  };
}), b0 = function() {
  function t(e, n) {
    return Oo.call(this, "ajax timeout", e, n), this.name = "AjaxTimeoutError", this;
  }
  return t.prototype = Object.create(Oo.prototype), t;
}();
function _0(t, e) {
  return zr({ method: "GET", url: t, headers: e });
}
function y0(t, e, n) {
  return zr({ method: "POST", url: t, body: e, headers: n });
}
function I0(t, e) {
  return zr({ method: "DELETE", url: t, headers: e });
}
function S0(t, e, n) {
  return zr({ method: "PUT", url: t, body: e, headers: n });
}
function E0(t, e, n) {
  return zr({ method: "PATCH", url: t, body: e, headers: n });
}
var A0 = Vt(function(t) {
  return t.response;
});
function C0(t, e) {
  return A0(zr({
    method: "GET",
    url: t,
    headers: e
  }));
}
var zr = function() {
  var t = function(e) {
    var n = typeof e == "string" ? {
      url: e
    } : e;
    return x0(n);
  };
  return t.get = _0, t.post = y0, t.delete = I0, t.put = S0, t.patch = E0, t.getJSON = C0, t;
}(), T0 = "upload", Mu = "download", gs = "loadstart", ps = "progress", Pu = "load";
function x0(t) {
  return new In(function(e) {
    var n, r, i = pe({ async: !0, crossDomain: !1, withCredentials: !1, method: "GET", timeout: 0, responseType: "json" }, t), a = i.queryParams, o = i.body, u = i.headers, l = i.url;
    if (!l)
      throw new TypeError("url is required");
    if (a) {
      var c;
      if (l.includes("?")) {
        var d = l.split("?");
        if (2 < d.length)
          throw new TypeError("invalid url");
        c = new URLSearchParams(d[1]), new URLSearchParams(a).forEach(function(N, K) {
          return c.set(K, N);
        }), l = d[0] + "?" + c;
      } else
        c = new URLSearchParams(a), l = l + "?" + c;
    }
    var m = {};
    if (u)
      for (var f in u)
        u.hasOwnProperty(f) && (m[f.toLowerCase()] = u[f]);
    var g = i.crossDomain;
    !g && !("x-requested-with" in m) && (m["x-requested-with"] = "XMLHttpRequest");
    var h = i.withCredentials, p = i.xsrfCookieName, b = i.xsrfHeaderName;
    if ((h || !g) && p && b) {
      var y = (r = (n = document == null ? void 0 : document.cookie.match(new RegExp("(^|;\\s*)(" + p + ")=([^;]*)"))) === null || n === void 0 ? void 0 : n.pop()) !== null && r !== void 0 ? r : "";
      y && (m[b] = y);
    }
    var E = w0(o, m), S = pe(pe({}, i), {
      url: l,
      headers: m,
      body: E
    }), _;
    _ = t.createXHR ? t.createXHR() : new XMLHttpRequest();
    {
      var A = t.progressSubscriber, I = t.includeDownloadProgress, L = I === void 0 ? !1 : I, C = t.includeUploadProgress, w = C === void 0 ? !1 : C, B = function(N, K) {
        _.addEventListener(N, function() {
          var ne, F = K();
          (ne = A == null ? void 0 : A.error) === null || ne === void 0 || ne.call(A, F), e.error(F);
        });
      };
      B("timeout", function() {
        return new b0(_, S);
      }), B("abort", function() {
        return new Oo("aborted", _, S);
      });
      var $ = function(N, K) {
        return new p0(K, _, S, N + "_" + K.type);
      }, q = function(N, K, ne) {
        N.addEventListener(K, function(F) {
          e.next($(ne, F));
        });
      };
      w && [gs, ps, Pu].forEach(function(N) {
        return q(_.upload, N, T0);
      }), A && [gs, ps].forEach(function(N) {
        return _.upload.addEventListener(N, function(K) {
          var ne;
          return (ne = A == null ? void 0 : A.next) === null || ne === void 0 ? void 0 : ne.call(A, K);
        });
      }), L && [gs, ps].forEach(function(N) {
        return q(_, N, Mu);
      });
      var z = function(N) {
        var K = "ajax error" + (N ? " " + N : "");
        e.error(new Oo(K, _, S));
      };
      _.addEventListener("error", function(N) {
        var K;
        (K = A == null ? void 0 : A.error) === null || K === void 0 || K.call(A, N), z();
      }), _.addEventListener(Pu, function(N) {
        var K, ne, F = _.status;
        if (F < 400) {
          (K = A == null ? void 0 : A.complete) === null || K === void 0 || K.call(A);
          var R = void 0;
          try {
            R = $(Mu, N);
          } catch (W) {
            e.error(W);
            return;
          }
          e.next(R), e.complete();
        } else
          (ne = A == null ? void 0 : A.error) === null || ne === void 0 || ne.call(A, N), z(F);
      });
    }
    var O = S.user, x = S.method, P = S.async;
    O ? _.open(x, l, P, O, S.password) : _.open(x, l, P), P && (_.timeout = S.timeout, _.responseType = S.responseType), "withCredentials" in _ && (_.withCredentials = S.withCredentials);
    for (var f in m)
      m.hasOwnProperty(f) && _.setRequestHeader(f, m[f]);
    return E ? _.send(E) : _.send(), function() {
      _ && _.readyState !== 4 && _.abort();
    };
  });
}
function w0(t, e) {
  var n;
  if (!t || typeof t == "string" || P0(t) || H0(t) || O0(t) || R0(t) || D0(t) || N0(t))
    return t;
  if (M0(t))
    return t.buffer;
  if (typeof t == "object")
    return e["content-type"] = (n = e["content-type"]) !== null && n !== void 0 ? n : "application/json;charset=utf-8", JSON.stringify(t);
  throw new TypeError("Unknown body type");
}
var L0 = Object.prototype.toString;
function _l(t, e) {
  return L0.call(t) === "[object " + e + "]";
}
function O0(t) {
  return _l(t, "ArrayBuffer");
}
function R0(t) {
  return _l(t, "File");
}
function D0(t) {
  return _l(t, "Blob");
}
function M0(t) {
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView(t);
}
function P0(t) {
  return typeof FormData < "u" && t instanceof FormData;
}
function H0(t) {
  return typeof URLSearchParams < "u" && t instanceof URLSearchParams;
}
function N0(t) {
  return typeof ReadableStream < "u" && t instanceof ReadableStream;
}
let U0 = class {
  constructor(e, n, r) {
    this.url = e, this.variableConfiguration = n, this.description = r;
  }
  /**
   * Sets the value of the variables of this server.
   *
   * @param variableConfiguration a partial variable configuration for the variables contained in the url
   */
  setVariables(e) {
    Object.assign(this.variableConfiguration, e);
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
    let e = this.url;
    for (const n in this.variableConfiguration)
      if (this.variableConfiguration.hasOwnProperty(n)) {
        const r = new RegExp("{" + n + "}", "g");
        e = e.replace(r, this.variableConfiguration[n]);
      }
    return e;
  }
};
const F0 = new U0("https://demo.compas.energy", {}, "DSOM Versatel Production URL"), k0 = [F0], B0 = k0[0].getUrl();
let Bd = class {
  constructor(e = {}) {
    this.configuration = e;
  }
  get basePath() {
    return this.configuration.basePath ?? B0;
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
    const { apiKey: e } = this.configuration;
    return e ? typeof e == "string" ? () => e : e : void 0;
  }
  get accessToken() {
    const { accessToken: e } = this.configuration;
    return e ? typeof e == "string" ? () => e : e : void 0;
  }
}, V0 = class {
  constructor(e = new Bd()) {
    this.configuration = e, this.middleware = [], this.withMiddleware = (n) => {
      const r = this.clone();
      return r.middleware = r.middleware.concat(n), r;
    }, this.withPreMiddleware = (n) => this.withMiddleware(n.map((r) => ({ pre: r }))), this.withPostMiddleware = (n) => this.withMiddleware(n.map((r) => ({ post: r }))), this.createRequestArgs = ({ url: n, query: r, method: i, headers: a, body: o, responseType: u }) => ({
      url: `${this.configuration.basePath}${n}${r && Object.keys(r).length ? `?${G0(r)}` : ""}`,
      method: i,
      headers: a,
      body: o instanceof FormData ? o : JSON.stringify(o),
      responseType: u ?? "json"
    }), this.rxjsRequest = (n) => bl(n).pipe(
      Vt((r) => (this.middleware.filter((i) => i.pre).forEach((i) => r = i.pre(r)), r)),
      Fd(
        (r) => zr(r).pipe(
          Vt((i) => (this.middleware.filter((a) => a.post).forEach((a) => i = a.post(i)), i))
        )
      )
    ), this.clone = () => Object.assign(Object.create(Object.getPrototypeOf(this)), this), this.middleware = e.middleware;
  }
  request(e, n) {
    return this.rxjsRequest(this.createRequestArgs(e)).pipe(
      Vt((r) => {
        const { status: i, response: a } = r;
        if (i >= 200 && i < 300)
          return (n == null ? void 0 : n.response) === "raw" ? r : a;
        throw r;
      })
    );
  }
};
const mr = (t) => encodeURIComponent(`${t}`), G0 = (t) => Object.entries(t).map(
  ([e, n]) => n instanceof Array ? n.map((r) => `${mr(e)}=${mr(r)}`).join("&") : `${mr(e)}=${mr(n)}`
).join("&"), Di = (t, e, n) => {
  if (t == null)
    throw new Error(`Parameter "${e}" was null or undefined when calling "${n}".`);
};
class j0 extends V0 {
  deleteAllSclFileVersions({ id: e, type: n }, r) {
    Di(e, "id", "deleteAllSclFileVersions"), Di(n, "type", "deleteAllSclFileVersions");
    const i = {};
    return this.request({
      url: "/scl/v1/{type}/{id}".replace("{id}", mr(e)).replace("{type}", mr(n)),
      method: "DELETE",
      headers: i
    }, r == null ? void 0 : r.responseOpts);
  }
  retrieveDataResourceByVersion({ id: e, version: n }, r) {
    Di(e, "id", "retrieveDataResourceByVersion"), Di(n, "version", "retrieveDataResourceByVersion");
    const i = {};
    return this.request({
      url: "/api/scl/{id}/version/{version}".replace("{id}", mr(e)).replace("{version}", mr(n)),
      method: "GET",
      headers: i,
      responseType: "blob"
    }, r == null ? void 0 : r.responseOpts);
  }
  retrieveDataResourceHistory({ id: e }, n) {
    Di(e, "id", "retrieveDataResourceHistory");
    const r = {};
    return this.request({
      url: "/api/scl/{id}/versions".replace("{id}", mr(e)),
      method: "GET",
      headers: r
    }, n == null ? void 0 : n.responseOpts);
  }
  searchForResources({ dataResourceSearch: e }, n) {
    Di(e, "dataResourceSearch", "searchForResources");
    const r = {
      "Content-Type": "application/json"
    };
    return this.request({
      url: "/api/scl/search",
      method: "POST",
      headers: r,
      body: e
    }, n == null ? void 0 : n.responseOpts);
  }
}
class Ui {
  constructor() {
    this.endpoint = "/compas-scl-data-service";
  }
  static getInstance() {
    return Ui.instance || (Ui.instance = new Ui()), Ui.instance;
  }
  searchFiles(e) {
    return this.generateApiClient(this.endpoint).searchForResources({
      dataResourceSearch: this.mapToDataResourceSearch(e)
    }).pipe(
      Ou((r) => !!r || !!r.results),
      Vt((r) => r.results),
      Vt(
        (r) => r.map((i) => this.mapToFileSearchResult(i))
      )
    );
  }
  getHistoryFiles(e) {
    return this.generateApiClient(this.endpoint).retrieveDataResourceHistory({
      id: e
    }).pipe(
      Ou((r) => !!r || !!r.versions),
      Vt((r) => r.versions),
      Vt(
        (r) => r.map((i) => this.mapToFileSearchResult(i))
      )
    );
  }
  /**
   * Delete all versions of a resource
   * @param type scl file type (e.g., SSD, SCL, etc.)
   * @param uuid uuid of the resource
   */
  deleteResource(e, n) {
    return this.generateApiClient(this.endpoint).deleteAllSclFileVersions({ id: n, type: e });
  }
  downloadSclData(e, n, r) {
    return this.generateApiClient(this.endpoint).retrieveDataResourceByVersion({
      id: e,
      version: r
    });
  }
  mapToFileSearchResult(e) {
    return new g0(
      e.uuid,
      e.name,
      e.author,
      e.type,
      new Date(e.changedAt),
      e.version,
      e.comment,
      e.archived,
      e.available,
      e.deleted
    );
  }
  mapToDataResourceSearch(e) {
    return {
      uuid: e.uuid || null,
      type: e.type || null,
      name: e.filename || null,
      author: e.author || null,
      from: e.from || null,
      to: e.to || null
    };
  }
  generateApiClient(e) {
    const n = new Bd({
      basePath: e
      // accessToken: authInfo.token,
    });
    return new j0(n);
  }
}
var Dr;
class Hu {
  constructor() {
    rt(this, Dr, Gt([]));
  }
  get store() {
    return le(this, Dr);
  }
  updateData(e) {
    le(this, Dr).set(e);
  }
  addData(e) {
    le(this, Dr).update((n) => [...n, e]);
  }
  removeData(e) {
    le(this, Dr).update((n) => n.filter((r) => r.uuid !== e));
  }
  getData(e) {
    return Dc(le(this, Dr)).find((n) => n.uuid === e);
  }
}
Dr = new WeakMap();
class q0 {
  constructor(e, n, r) {
    this.url = e, this.variableConfiguration = n, this.description = r;
  }
  /**
   * Sets the value of the variables of this server.
   *
   * @param variableConfiguration a partial variable configuration for the variables contained in the url
   */
  setVariables(e) {
    Object.assign(this.variableConfiguration, e);
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
    let e = this.url;
    for (const n in this.variableConfiguration)
      if (this.variableConfiguration.hasOwnProperty(n)) {
        const r = new RegExp("{" + n + "}", "g");
        e = e.replace(r, this.variableConfiguration[n]);
      }
    return e;
  }
}
const W0 = new q0("https://demo.compas.energy", {}, "DSOM Versatel Production URL"), z0 = [W0], K0 = z0[0].getUrl();
class Vd {
  constructor(e = {}) {
    this.configuration = e;
  }
  get basePath() {
    return this.configuration.basePath ?? K0;
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
    const { apiKey: e } = this.configuration;
    return e ? typeof e == "string" ? () => e : e : void 0;
  }
  get accessToken() {
    const { accessToken: e } = this.configuration;
    return e ? typeof e == "string" ? () => e : e : void 0;
  }
}
class X0 {
  constructor(e = new Vd()) {
    this.configuration = e, this.middleware = [], this.withMiddleware = (n) => {
      const r = this.clone();
      return r.middleware = r.middleware.concat(n), r;
    }, this.withPreMiddleware = (n) => this.withMiddleware(n.map((r) => ({ pre: r }))), this.withPostMiddleware = (n) => this.withMiddleware(n.map((r) => ({ post: r }))), this.createRequestArgs = ({ url: n, query: r, method: i, headers: a, body: o, responseType: u }) => ({
      url: `${this.configuration.basePath}${n}${r && Object.keys(r).length ? `?${Z0(r)}` : ""}`,
      method: i,
      headers: a,
      body: o instanceof FormData ? o : JSON.stringify(o),
      responseType: u ?? "json"
    }), this.rxjsRequest = (n) => bl(n).pipe(
      Vt((r) => (this.middleware.filter((i) => i.pre).forEach((i) => r = i.pre(r)), r)),
      Fd(
        (r) => zr(r).pipe(
          Vt((i) => (this.middleware.filter((a) => a.post).forEach((a) => i = a.post(i)), i))
        )
      )
    ), this.clone = () => Object.assign(Object.create(Object.getPrototypeOf(this)), this), this.middleware = e.middleware;
  }
  request(e, n) {
    return this.rxjsRequest(this.createRequestArgs(e)).pipe(
      Vt((r) => {
        const { status: i, response: a } = r;
        if (i >= 200 && i < 300)
          return (n == null ? void 0 : n.response) === "raw" ? r : a;
        throw r;
      })
    );
  }
}
const gr = (t) => encodeURIComponent(`${t}`), Z0 = (t) => Object.entries(t).map(
  ([e, n]) => n instanceof Array ? n.map((r) => `${gr(e)}=${gr(r)}`).join("&") : `${gr(e)}=${gr(n)}`
).join("&"), Ca = (t, e, n) => {
  if (t == null)
    throw new Error(`Parameter "${e}" was null or undefined when calling "${n}".`);
};
class Y0 extends X0 {
  archiveResource({ id: e, version: n, xAuthor: r, xApprover: i, contentType: a, xFilename: o, body: u }, l) {
    Ca(e, "id", "archiveResource"), Ca(n, "version", "archiveResource");
    const c = {
      "Content-Type": "application/octet-stream",
      ...r != null ? { "X-author": String(r) } : void 0,
      ...i != null ? { "X-approver": String(i) } : void 0,
      ...a != null ? { "Content-Type": String(a) } : void 0,
      ...o != null ? { "X-filename": String(o) } : void 0
    };
    return this.request({
      url: "/api/archive/referenced-resource/{id}/versions/{version}".replace("{id}", gr(e)).replace("{version}", gr(n)),
      method: "POST",
      headers: c,
      body: u
    }, l == null ? void 0 : l.responseOpts);
  }
  archiveSclResource({ id: e, version: n }, r) {
    Ca(e, "id", "archiveSclResource"), Ca(n, "version", "archiveSclResource");
    const i = {};
    return this.request({
      url: "/api/archive/scl/{id}/versions/{version}".replace("{id}", gr(e)).replace("{version}", gr(n)),
      method: "POST",
      headers: i
    }, r == null ? void 0 : r.responseOpts);
  }
  retrieveArchivedResourceHistory({ id: e }, n) {
    Ca(e, "id", "retrieveArchivedResourceHistory");
    const r = {};
    return this.request({
      url: "/api/archive/resources/{id}/versions".replace("{id}", gr(e)),
      method: "GET",
      headers: r
    }, n == null ? void 0 : n.responseOpts);
  }
  searchArchivedResources({ archivedResourcesSearch: e }, n) {
    const r = {
      "Content-Type": "application/json"
    };
    return this.request({
      url: "/api/archive/resources/search",
      method: "POST",
      headers: r,
      body: e
    }, n == null ? void 0 : n.responseOpts);
  }
}
class Q0 {
  constructor(e, n, r, i, a, o, u, l, c, d, m, f, g) {
    this._uuid = e, this._name = n, this._location = r, this._note = i, this._author = a, this._approver = o, this._type = u, this._voltage = l, this._modifiedAt = c, this._archivedAt = d, this._contentType = m, this._version = f, this._fields = g;
  }
  get uuid() {
    return this._uuid;
  }
  get filename() {
    return this._name;
  }
  get location() {
    return this._location;
  }
  get author() {
    return this._author;
  }
  get version() {
    return this._version;
  }
  get type() {
    return this._type;
  }
  get name() {
    return this._name;
  }
  get note() {
    return this._note;
  }
  get approver() {
    return this._approver;
  }
  get voltage() {
    return this._voltage;
  }
  get modifiedAt() {
    return this._modifiedAt;
  }
  get archivedAt() {
    return this._archivedAt;
  }
  get contentType() {
    return this._contentType;
  }
  get fields() {
    return this._fields;
  }
}
class Fi {
  constructor() {
    this.baseUrl = "/compas-scl-data-service", this.apiClient = this.generateApiClient();
  }
  static getInstance() {
    return Fi.instance || (Fi.instance = new Fi()), Fi.instance;
  }
  searchArchive(e) {
    return this.apiClient.searchArchivedResources({ archivedResourcesSearch: e }).pipe(
      wr(1),
      Vt((n) => n.resources),
      Vt((n) => this.mapResourcesToArchiveSearchResults(n))
    );
  }
  retrieveArchivedResourceHistory(e) {
    return this.apiClient.retrieveArchivedResourceHistory({ id: e }).pipe(
      wr(1),
      Vt((n) => n.versions),
      Vt((n) => this.mapResourcesToArchiveSearchResults(n))
    );
  }
  findByUUIDAndVersion(e, n, r) {
    return qo(
      fetch(`${this.baseUrl}/scl/v1/${n}/${e}/${r}`).then((i) => {
        if (i.status >= 200 && i.status < 300)
          return i.blob();
        throw new Error(
          "Unable to download resource: " + i.status + " " + i.statusText
        );
      })
    );
  }
  archiveSclFile(e, n) {
    return this.apiClient.archiveSclResource({ id: e, version: n });
  }
  mapResourcesToArchiveSearchResults(e) {
    return e != null && e.length ? e.map((n) => this.mapToArchiveSearchResult(n)) : [];
  }
  mapToArchiveSearchResult(e) {
    return new Q0(
      e.uuid,
      e.name,
      e.location,
      e.note,
      e.author,
      e.approver,
      e.type,
      e.voltage,
      new Date(e.modifiedAt).toDateString(),
      new Date(e.archivedAt).toDateString(),
      e.contentType,
      e.version,
      e.fields
    );
  }
  generateApiClient() {
    const e = new Vd({
      basePath: this.baseUrl
      // accessToken: authInfo.token,
    });
    return new Y0(e);
  }
}
Em({ en: Km, de: Hm });
var J0 = /* @__PURE__ */ de("<h3> </h3>"), $0 = /* @__PURE__ */ de("<div><!></div>"), eI = /* @__PURE__ */ de("<!> <!>", 1), tI = /* @__PURE__ */ de("<div><!></div>"), nI = /* @__PURE__ */ de('<div class="oscd-app"><div class="version-editor-container svelte-vqh57v"><!> <div class="search-filter svelte-vqh57v"><!></div> <div class="table-container svelte-vqh57v"><!></div></div></div> <!> <!>', 1);
function rI(t, e) {
  we(e, !0);
  const n = () => Bn(Sm, "$_", r), [r, i] = ir(), a = Ui.getInstance(), o = Fi.getInstance();
  let u = /* @__PURE__ */ me(void 0);
  const l = new Gs(), c = new Gs(), d = c.pipe(
    m0(l.pipe(h0(200))),
    Vt(() => B(s(I))),
    Ri(() => {
      X(g, !1);
    }),
    Du((V) => a.searchFiles(V).pipe(
      Vt((H) => H.filter((M) => !M.deleted)),
      Ri((H) => {
        [...H], m().updateData(H);
      }),
      Ru(() => {
        X(g, !0);
      })
    ))
  );
  let m = v(e, "dataStore", 19, () => new Hu()), f = v(e, "historyStore", 19, () => new Hu()), g = /* @__PURE__ */ me(!0), h = /* @__PURE__ */ me(!1), p = /* @__PURE__ */ me("");
  at(() => {
    const V = d.subscribe();
    return c.next(), () => V.unsubscribe();
  });
  function b(V) {
    return new Date(V).toLocaleDateString();
  }
  const y = {
    headerName: "",
    field: "actions",
    numeric: !1,
    filter: !1,
    filterType: "text",
    minWidth: "100px",
    sortable: !1
  };
  let E = /* @__PURE__ */ ve(() => [
    {
      headerName: n()("uuid"),
      field: "uuid",
      numeric: !1,
      filter: !1,
      filterType: "text",
      sortable: !1
    },
    {
      headerName: n()("filename"),
      field: "filename",
      numeric: !1,
      filter: !1,
      filterType: "text",
      sortable: !0
    },
    {
      headerName: n()("type"),
      field: "type",
      numeric: !1,
      filter: !1,
      filterType: "text",
      sortable: !0
    },
    {
      headerName: n()("author"),
      field: "author",
      numeric: !1,
      filter: !1,
      filterType: "text",
      sortable: !0
    },
    {
      headerName: n()("date"),
      field: "date",
      numeric: !1,
      filter: !1,
      filterType: "text",
      sortable: !0,
      valueFormatter: b
    },
    {
      headerName: n()("version"),
      field: "version",
      numeric: !1,
      filter: !1,
      filterType: "text",
      sortable: !0
    },
    y
  ]), S = /* @__PURE__ */ ve(() => [
    ...s(E),
    {
      headerName: "Comment",
      field: "comment",
      numeric: !1,
      filter: !1,
      filterType: "text",
      sortable: !0
    }
  ]);
  const _ = [
    {
      icon: "edit",
      tooltip: "Open",
      callback: (V) => z(V),
      disabled: (V) => !V.available
    },
    {
      icon: "find-in-page",
      tooltip: "View History",
      callback: (V) => $(V),
      disabled: () => !1
    },
    {
      icon: "download",
      tooltip: "Download",
      callback: (V) => w(V),
      disabled: (V) => !V.available
    },
    {
      icon: "delete",
      tooltip: "Delete",
      callback: (V) => L(V),
      disabled: () => !1
    },
    {
      icon: "archive",
      tooltip: "Archive",
      callback: (V) => C(V),
      disabled: () => !1
    }
  ], A = [
    {
      icon: "download",
      tooltip: "Download",
      callback: (V) => w(V),
      disabled: (V) => !V.available
    }
  ];
  let I = /* @__PURE__ */ me(ye([
    { key: "uuid", label: "UUID", type: "text" },
    {
      key: "type",
      label: "Type",
      type: "select",
      options: [
        { value: "SSD", label: "SSD" },
        { value: "IID", label: "IID" },
        { value: "ICD", label: "ICD" },
        { value: "SCD", label: "SCD" },
        { value: "CID", label: "CID" },
        { value: "SED", label: "SED" },
        { value: "ISD", label: "ISD" },
        { value: "STD", label: "STD" }
      ]
    },
    { key: "author", label: "Author", type: "text" },
    { key: "from", label: "Date from", type: "date" },
    { key: "to", label: "Date to", type: "date" }
  ]));
  async function L(V) {
    console.debug("deleteResource: ", V), (await cs(fs, {
      title: "Confirm Deletion",
      message: `Are you sure you want to delete the resource "${V.filename} (${V.uuid})"? This action cannot be undone.`,
      confirmActionText: "Delete",
      cancelActionText: "Cancel",
      confirmActionColor: "danger"
    })).type === "confirm" && a.deleteResource(V.type, V.uuid).pipe(wr(1)).subscribe({
      next: () => {
        l.next(null), xr.success("Deleted resource", `Resource "${V.filename} (${V.uuid})" has been deleted.`);
      },
      error: (M) => {
        console.error(`Failed to delete resource "${V.filename} (${V.uuid})":`, M), xr.error("Deletion failed", `Failed to delete resource "${V.filename} (${V.uuid})".`);
      }
    });
  }
  async function C(V) {
    console.debug("archiveResource: ", V), (await cs(fs, {
      title: "Confirm Archiving",
      message: `Archive latest version "${V.filename}" (v${V.version})? This keeps the file in History and does not delete it.`,
      confirmActionText: "Archive",
      cancelActionText: "Cancel"
    })).type === "confirm" && o.archiveSclFile(V.uuid, V.version).pipe(wr(1)).subscribe({
      next: () => {
        l.next(null), xr.success("Archived resource", `Resource "${V.filename} (${V.uuid})" has been archived.`);
      },
      error: (M) => {
        console.error(`Failed to archive resource "${V.filename} (${V.uuid})":`, M);
        const D = M == null ? void 0 : M.response;
        D != null && D.errorMessages && (D == null ? void 0 : D.errorMessages.length) > 0 ? xr.error("Archiving failed", D.errorMessages[0].message) : xr.error("Archiving failed", `Failed to archive resource "${V.filename} (${V.uuid})".`);
      }
    });
  }
  function w(V) {
    console.log("Download file: ", V), a.downloadSclData(V.uuid, V.type, V.version).pipe(wr(1), Ri((H) => {
      const M = window.URL.createObjectURL(H), D = document.createElement("a");
      D.href = M, D.download = `${V.filename}.${V.type.toLowerCase()}`, D.style.display = "none", document.body.appendChild(D), D.click(), document.body.removeChild(D), window.URL.revokeObjectURL(M);
    })).subscribe();
  }
  function B(V) {
    const H = {
      uuid: null,
      filename: null,
      author: null,
      type: null,
      name: null,
      from: null,
      to: null
    };
    return V.forEach((M) => {
      if (M.key in H && M.type !== "date" && M.value)
        H[M.key] = M.value;
      else if (M.type === "date" && M.value) {
        const D = new Date(M.value);
        M.key === "from" ? H.from = D.toISOString() : M.key === "to" && (D.setHours(23, 59, 59, 999), H.to = D.toISOString());
      }
    }), s(p) && s(p).trim() !== "" && (H.filename = s(p).trim()), H;
  }
  function $(V) {
    X(u, V, !0), a.getHistoryFiles(V.uuid).pipe(wr(1), Ri((H) => {
      X(h, !0), [...H], f().updateData(H);
    })).subscribe();
  }
  function q(V) {
    console.log("Dialog closed with result: ", V), X(h, !1);
  }
  async function z(V) {
    if ((await cs(fs, {
      title: "Open File",
      message: `Do you want to open "${V.filename}"? 

Any unsaved changes in your current project will be lost.`,
      confirmActionText: "Open",
      cancelActionText: "Cancel"
    })).type !== "confirm")
      return;
    let M = "";
    a.downloadSclData(V.uuid, V.type, V.version).pipe(
      wr(1),
      Ri((D) => {
        M = window.URL.createObjectURL(D);
      }),
      Du(() => qo(fetch(M).then((D) => {
        if (D.status === 200)
          return D.text();
        throw new Error(`Failed to load ${V.filename}: ${D.status} ${D.statusText}`);
      }))),
      wr(1),
      Ud((D) => (xr.error("Open Document Failed", `Failed to open document "${V.filename}".`), console.error(D), bl(void 0))),
      Ri((D) => {
        var ie;
        if (!D)
          return;
        const ee = V.filename, J = new DOMParser().parseFromString(D, "application/xml");
        (ie = window.document.getElementsByTagName("open-scd")[0]) == null || ie.dispatchEvent(new CustomEvent("open-doc", {
          bubbles: !0,
          composed: !0,
          detail: { localFile: !1, doc: J, docName: ee }
        }));
      }),
      Ru(() => M && window.URL.revokeObjectURL(M))
    ).subscribe();
  }
  var O = nI(), x = Z(O), P = ce(x), N = ce(P);
  kp(N, {
    onClose: q,
    get open() {
      return s(h);
    },
    set open(D) {
      X(h, D, !0);
    },
    title: (D) => {
      var ee = J0(), J = ce(ee);
      Te((ie) => ze(J, ie), [
        () => {
          var ie;
          return n()("versionHistory.title", { values: { filename: (ie = s(u)) == null ? void 0 : ie.filename } });
        }
      ]), T(D, ee);
    },
    content: (D) => {
      var ee = $0(), J = ce(ee);
      {
        let ie = /* @__PURE__ */ ve(() => n()("search"));
        Eu(J, {
          get columnDefs() {
            return s(S);
          },
          get store() {
            return f();
          },
          get loadingDone() {
            return s(g);
          },
          get rowActions() {
            return A;
          },
          get searchInputLabel() {
            return s(ie);
          }
        });
      }
      T(D, ee);
    },
    actions: (D) => {
      var ee = tI(), J = ce(ee);
      ld(J, {
        callback: q,
        variant: "raised",
        children: (ie, Se) => {
          var te = eI(), se = Z(te);
          fl(se, {});
          var Re = be(se, 2);
          sd(Re, {
            children: (xe, Ue) => {
              var Me = gt();
              Te((Pe) => ze(Me, Pe), [() => n()("done")]), T(xe, Me);
            },
            $$slots: { default: !0 }
          }), T(ie, te);
        },
        $$slots: { default: !0 }
      }), T(D, ee);
    },
    $$slots: { title: !0, content: !0, actions: !0 }
  });
  var K = be(N, 2), ne = ce(K);
  Iy(ne, {
    searchLabel: "Search file name...",
    onFilterChange: () => l.next(null),
    onSearchInput: () => l.next(null),
    get filters() {
      return s(I);
    },
    set filters(V) {
      X(I, V, !0);
    },
    get searchText() {
      return s(p);
    },
    set searchText(V) {
      X(p, V, !0);
    }
  });
  var F = be(K, 2), R = ce(F);
  {
    let V = /* @__PURE__ */ ve(() => n()("search"));
    Eu(R, {
      emptyText: "No resources found.",
      get columnDefs() {
        return s(E);
      },
      get store() {
        return m();
      },
      get loadingDone() {
        return s(g);
      },
      get rowActions() {
        return _;
      },
      get searchInputLabel() {
        return s(V);
      }
    });
  }
  var W = be(x, 2);
  N_(W, {});
  var Ie = be(W, 2);
  Vp(Ie, {}), T(t, O), Le(), i();
}
const Gd = "version-editor", jd = "0.0.1";
var iI = /* @__PURE__ */ de('<!> <input type="hidden" name="package-name"/> <input type="hidden" name="package-version"/>', 1);
function aI(t, e) {
  we(e, !0);
  let n = v(e, "dev", 3, !1);
  var r = iI(), i = Z(r);
  {
    var a = (l) => {
      rI(l, {});
    };
    oe(i, (l) => {
      (e.doc || n()) && l(a);
    });
  }
  var o = be(i, 2), u = be(o, 2);
  Te(() => {
    Fl(o, Gd), Fl(u, jd);
  }), T(t, r), Le();
}
var Ki;
class hI extends HTMLElement {
  constructor() {
    super();
    rt(this, Ki);
    Ve(this, Ki, /* @__PURE__ */ me(ye({ doc: void 0, editCount: void 0 })));
  }
  get props() {
    return s(le(this, Ki));
  }
  set props(n) {
    X(le(this, Ki), n, !0);
  }
  connectedCallback() {
    this.attachShadow({ mode: "open" }), this.props.doc = this._doc, this.props.editCount = this._editCount;
    const n = oI();
    this.shadowRoot.appendChild(n);
    const r = () => ah(aI, { target: this.shadowRoot, props: this.props });
    n.addEventListener("load", r, { once: !0 }), n.addEventListener("error", r, { once: !0 });
  }
  set doc(n) {
    this._doc = n, this.props.doc = n;
  }
  set editCount(n) {
    this._editCount = n, this.props.editCount = n;
  }
}
Ki = new WeakMap();
function oI() {
  const t = `${Gd}-v${jd}-style`, e = sI(), n = document.createElement("link");
  return n.rel = "stylesheet", n.type = "text/css", n.href = e, n.id = t, n;
}
function sI() {
  const t = new URL(import.meta.url), e = t.origin, n = t.pathname.split("/").slice(0, -1).filter(Boolean).join("/");
  return [e, n, "style.css"].filter(Boolean).join("/");
}
export {
  hI as default
};
