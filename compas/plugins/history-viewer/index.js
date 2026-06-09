var Fd = Object.defineProperty;
var _l = (t) => {
  throw TypeError(t);
};
var kd = (t, e, n) => e in t ? Fd(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var Dn = (t, e, n) => kd(t, typeof e != "symbol" ? e + "" : e, n), jo = (t, e, n) => e.has(t) || _l("Cannot " + n);
var le = (t, e, n) => (jo(t, e, "read from private field"), n ? n.call(t) : e.get(t)), rt = (t, e, n) => e.has(t) ? _l("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, n), Ve = (t, e, n, r) => (jo(t, e, "write to private field"), r ? r.call(t, n) : e.set(t, n), n), Xt = (t, e, n) => (jo(t, e, "access private method"), n);
const kt = Symbol(), Bd = "http://www.w3.org/1999/xhtml", Vd = "http://www.w3.org/2000/svg", Gd = "@attach", Ou = !1;
var Oo = Array.isArray, jd = Array.prototype.indexOf, Gs = Array.from, fo = Object.defineProperty, Rr = Object.getOwnPropertyDescriptor, Ru = Object.getOwnPropertyDescriptors, qd = Object.prototype, Wd = Array.prototype, js = Object.getPrototypeOf, yl = Object.isExtensible;
function Li(t) {
  return typeof t == "function";
}
const pe = () => {
};
function zd(t) {
  return t();
}
function ho(t) {
  for (var e = 0; e < t.length; e++)
    t[e]();
}
function Du() {
  var t, e, n = new Promise((r, i) => {
    t = r, e = i;
  });
  return { promise: n, resolve: t, reject: e };
}
const an = 2, qs = 4, Ro = 8, Pr = 16, _r = 32, hi = 64, Ws = 128, wn = 256, vo = 512, Qt = 1024, _n = 2048, Hr = 4096, kn = 8192, vi = 16384, Do = 32768, Nr = 65536, Il = 1 << 17, Kd = 1 << 18, $i = 1 << 19, Mu = 1 << 20, hs = 1 << 21, Mo = 1 << 22, ai = 1 << 23, $n = Symbol("$state"), Pu = Symbol("legacy props"), Xd = Symbol(""), Oi = new class extends Error {
  constructor() {
    super(...arguments);
    Dn(this, "name", "StaleReactionError");
    Dn(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
function zs(t) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function Zd() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function Yd(t) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Qd() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Jd(t) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function $d() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function ef(t) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function tf() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function nf() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function rf() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function af() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
function of() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function sf() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let lf = !1;
function Hu(t) {
  return t === this.v;
}
function Ks(t, e) {
  return t != t ? e == e : t !== e || t !== null && typeof t == "object" || typeof t == "function";
}
function Nu(t) {
  return !Ks(t, this.v);
}
let ea = !1, uf = !1;
function cf() {
  ea = !0;
}
let dt = null;
function Gi(t) {
  dt = t;
}
function ye(t) {
  return (
    /** @type {T} */
    Uu().get(t)
  );
}
function ue(t, e) {
  return Uu().set(t, e), e;
}
function we(t, e = !1, n) {
  dt = {
    p: dt,
    c: null,
    e: null,
    s: t,
    x: null,
    l: ea && !e ? { s: null, u: null, $: [] } : null
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
      ec(r);
  }
  return t !== void 0 && (e.x = t), dt = e.p, t ?? /** @type {T} */
  {};
}
function Ua() {
  return !ea || dt !== null && dt.l === null;
}
function Uu(t) {
  return dt === null && zs(), dt.c ?? (dt.c = new Map(df(dt) || void 0));
}
function df(t) {
  let e = t.p;
  for (; e !== null; ) {
    const n = e.c;
    if (n !== null)
      return n;
    e = e.p;
  }
  return null;
}
let $r = [];
function Fu() {
  var t = $r;
  $r = [], ho(t);
}
function br(t) {
  if ($r.length === 0 && !Aa) {
    var e = $r;
    queueMicrotask(() => {
      e === $r && Fu();
    });
  }
  $r.push(t);
}
function ff() {
  for (; $r.length > 0; )
    Fu();
}
const hf = /* @__PURE__ */ new WeakMap();
function ku(t) {
  var e = We;
  if (e === null)
    return qe.f |= ai, t;
  if (e.f & Do)
    ji(t, e);
  else {
    if (!(e.f & Ws))
      throw !e.parent && t instanceof Error && Bu(t), t;
    e.b.error(t);
  }
}
function ji(t, e) {
  for (; e !== null; ) {
    if (e.f & Ws)
      try {
        e.b.error(t);
        return;
      } catch (n) {
        t = n;
      }
    e = e.parent;
  }
  throw t instanceof Error && Bu(t), t;
}
function Bu(t) {
  const e = hf.get(t);
  e && (fo(t, "message", {
    value: e.message
  }), fo(t, "stack", {
    value: e.stack
  }));
}
const Ka = /* @__PURE__ */ new Set();
let ut = null, ao = null, qt = null, vs = /* @__PURE__ */ new Set(), Yn = [], Po = null, ms = !1, Aa = !1;
var Ni, Ui, ei, Pa, Fi, ki, ti, Bi, Ha, Na, Ln, gs, oo, ps;
const xo = class xo {
  constructor() {
    rt(this, Ln);
    /**
     * The current values of any sources that are updated in this batch
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Source, any>}
     */
    Dn(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any sources that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Source, any>}
     */
    rt(this, Ni, /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<() => void>}
     */
    rt(this, Ui, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    rt(this, ei, 0);
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    rt(this, Pa, null);
    /**
     * Async effects inside a newly-created `<svelte:boundary>`
     * — these do not prevent the batch from committing
     * @type {Effect[]}
     */
    rt(this, Fi, []);
    /**
     * Template effects and `$effect.pre` effects, which run when
     * a batch is committed
     * @type {Effect[]}
     */
    rt(this, ki, []);
    /**
     * The same as `#render_effects`, but for `$effect` (which runs after)
     * @type {Effect[]}
     */
    rt(this, ti, []);
    /**
     * Block effects, which may need to re-run on subsequent flushes
     * in order to update internal sources (e.g. each block items)
     * @type {Effect[]}
     */
    rt(this, Bi, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Effect[]}
     */
    rt(this, Ha, []);
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Effect[]}
     */
    rt(this, Na, []);
    /**
     * A set of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`
     * @type {Set<Effect>}
     */
    Dn(this, "skipped_effects", /* @__PURE__ */ new Set());
  }
  /**
   *
   * @param {Effect[]} root_effects
   */
  process(e) {
    var a;
    Yn = [], ao = null, this.apply();
    for (const o of e)
      Xt(this, Ln, gs).call(this, o);
    if (le(this, ei) === 0) {
      var n = qt;
      Xt(this, Ln, ps).call(this);
      var r = le(this, ki), i = le(this, ti);
      Ve(this, ki, []), Ve(this, ti, []), Ve(this, Bi, []), ao = this, ut = null, qt = n, El(r), El(i), ao = null, (a = le(this, Pa)) == null || a.resolve();
    } else
      Xt(this, Ln, oo).call(this, le(this, ki)), Xt(this, Ln, oo).call(this, le(this, ti)), Xt(this, Ln, oo).call(this, le(this, Bi));
    qt = null;
    for (const o of le(this, Fi))
      wa(o);
    Ve(this, Fi, []);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Source} source
   * @param {any} value
   */
  capture(e, n) {
    le(this, Ni).has(e) || le(this, Ni).set(e, n), this.current.set(e, e.v), qt == null || qt.set(e, e.v);
  }
  activate() {
    ut = this;
  }
  deactivate() {
    ut = null, qt = null;
  }
  flush() {
    if (Yn.length > 0) {
      if (this.activate(), Vu(), ut !== null && ut !== this)
        return;
    } else le(this, ei) === 0 && Xt(this, Ln, ps).call(this);
    this.deactivate();
    for (const e of vs)
      if (vs.delete(e), e(), ut !== null)
        break;
  }
  increment() {
    Ve(this, ei, le(this, ei) + 1);
  }
  decrement() {
    Ve(this, ei, le(this, ei) - 1);
    for (const e of le(this, Ha))
      nn(e, _n), di(e);
    for (const e of le(this, Na))
      nn(e, Hr), di(e);
    this.flush();
  }
  /** @param {() => void} fn */
  add_callback(e) {
    le(this, Ui).add(e);
  }
  settled() {
    return (le(this, Pa) ?? Ve(this, Pa, Du())).promise;
  }
  static ensure() {
    if (ut === null) {
      const e = ut = new xo();
      Ka.add(ut), Aa || xo.enqueue(() => {
        ut === e && e.flush();
      });
    }
    return ut;
  }
  /** @param {() => void} task */
  static enqueue(e) {
    br(e);
  }
  apply() {
  }
};
Ni = new WeakMap(), Ui = new WeakMap(), ei = new WeakMap(), Pa = new WeakMap(), Fi = new WeakMap(), ki = new WeakMap(), ti = new WeakMap(), Bi = new WeakMap(), Ha = new WeakMap(), Na = new WeakMap(), Ln = new WeakSet(), /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 */
gs = function(e) {
  var c;
  e.f ^= Qt;
  for (var n = e.first; n !== null; ) {
    var r = n.f, i = (r & (_r | hi)) !== 0, a = i && (r & Qt) !== 0, o = a || (r & kn) !== 0 || this.skipped_effects.has(n);
    if (!o && n.fn !== null) {
      i ? n.f ^= Qt : r & qs ? le(this, ti).push(n) : r & Qt || (r & Mo && ((c = n.b) != null && c.is_pending()) ? le(this, Fi).push(n) : Uo(n) && (n.f & Pr && le(this, Bi).push(n), wa(n)));
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
oo = function(e) {
  for (const n of e)
    (n.f & _n ? le(this, Ha) : le(this, Na)).push(n), nn(n, Qt);
  e.length = 0;
}, /**
 * Append and remove branches to/from the DOM
 */
ps = function() {
  var e;
  for (const n of le(this, Ui))
    n();
  if (le(this, Ui).clear(), Ka.size > 1) {
    le(this, Ni).clear();
    let n = !0;
    for (const r of Ka) {
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
          Gu(o, a);
        if (Yn.length > 0) {
          ut = r, r.apply();
          for (const o of Yn)
            Xt(e = r, Ln, gs).call(e, o);
          Yn = [], r.deactivate();
        }
      }
    }
    ut = null;
  }
  Ka.delete(this);
};
let gr = xo;
function vf(t) {
  var e = Aa;
  Aa = !0;
  try {
    for (var n; ; ) {
      if (ff(), Yn.length === 0 && (ut == null || ut.flush(), Yn.length === 0))
        return Po = null, /** @type {T} */
        n;
      Vu();
    }
  } finally {
    Aa = e;
  }
}
function Vu() {
  var t = Mi;
  ms = !0;
  try {
    var e = 0;
    for (Cl(!0); Yn.length > 0; ) {
      var n = gr.ensure();
      if (e++ > 1e3) {
        var r, i;
        mf();
      }
      n.process(Yn), Dr.clear();
    }
  } finally {
    ms = !1, Cl(t), Po = null;
  }
}
function mf() {
  try {
    $d();
  } catch (t) {
    ji(t, Po);
  }
}
let dr = null;
function El(t) {
  var e = t.length;
  if (e !== 0) {
    for (var n = 0; n < e; ) {
      var r = t[n++];
      if (!(r.f & (vi | kn)) && Uo(r) && (dr = [], wa(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null && r.ac === null ? ic(r) : r.fn = null), (dr == null ? void 0 : dr.length) > 0)) {
        Dr.clear();
        for (const i of dr)
          wa(i);
        dr = [];
      }
    }
    dr = null;
  }
}
function Gu(t, e) {
  if (t.reactions !== null)
    for (const n of t.reactions) {
      const r = n.f;
      r & an ? Gu(
        /** @type {Derived} */
        n,
        e
      ) : r & (Mo | Pr) && ju(n, e) && (nn(n, _n), di(
        /** @type {Effect} */
        n
      ));
    }
}
function ju(t, e) {
  if (t.deps !== null) {
    for (const n of t.deps)
      if (e.includes(n) || n.f & an && ju(
        /** @type {Derived} */
        n,
        e
      ))
        return !0;
  }
  return !1;
}
function di(t) {
  for (var e = Po = t; e.parent !== null; ) {
    e = e.parent;
    var n = e.f;
    if (ms && e === We && n & Pr)
      return;
    if (n & (hi | _r)) {
      if (!(n & Qt)) return;
      e.f ^= Qt;
    }
  }
  Yn.push(e);
}
function gf(t) {
  let e = 0, n = fi(0), r;
  return () => {
    Df() && (s(n), Ba(() => (e === 0 && (r = Gn(() => t(() => Ca(n)))), e += 1, () => {
      br(() => {
        e -= 1, e === 0 && (r == null || r(), r = void 0, Ca(n));
      });
    })));
  };
}
var pf = Nr | $i | Ws;
function bf(t, e, n) {
  new _f(t, e, n);
}
var Hn, Cn, Vs, Kn, ni, Xn, Tn, dn, Zn, Cr, ri, Tr, ii, xr, wo, Lo, rn, yf, If, so, lo, bs;
class _f {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   */
  constructor(e, n, r) {
    rt(this, rn);
    /** @type {Boundary | null} */
    Dn(this, "parent");
    rt(this, Hn, !1);
    /** @type {TemplateNode} */
    rt(this, Cn);
    /** @type {TemplateNode | null} */
    rt(this, Vs, null);
    /** @type {BoundaryProps} */
    rt(this, Kn);
    /** @type {((anchor: Node) => void)} */
    rt(this, ni);
    /** @type {Effect} */
    rt(this, Xn);
    /** @type {Effect | null} */
    rt(this, Tn, null);
    /** @type {Effect | null} */
    rt(this, dn, null);
    /** @type {Effect | null} */
    rt(this, Zn, null);
    /** @type {DocumentFragment | null} */
    rt(this, Cr, null);
    rt(this, ri, 0);
    rt(this, Tr, 0);
    rt(this, ii, !1);
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    rt(this, xr, null);
    rt(this, wo, () => {
      le(this, xr) && qi(le(this, xr), le(this, ri));
    });
    rt(this, Lo, gf(() => (Ve(this, xr, fi(le(this, ri))), () => {
      Ve(this, xr, null);
    })));
    Ve(this, Cn, e), Ve(this, Kn, n), Ve(this, ni, r), this.parent = /** @type {Effect} */
    We.b, Ve(this, Hn, !!le(this, Kn).pending), Ve(this, Xn, Fr(() => {
      We.b = this;
      {
        try {
          Ve(this, Tn, Zt(() => r(le(this, Cn))));
        } catch (i) {
          this.error(i);
        }
        le(this, Tr) > 0 ? Xt(this, rn, lo).call(this) : Ve(this, Hn, !1);
      }
    }, pf));
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
    Xt(this, rn, bs).call(this, e), Ve(this, ri, le(this, ri) + e), vs.add(le(this, wo));
  }
  get_effect_pending() {
    return le(this, Lo).call(this), s(
      /** @type {Source<number>} */
      le(this, xr)
    );
  }
  /** @param {unknown} error */
  error(e) {
    var n = le(this, Kn).onerror;
    let r = le(this, Kn).failed;
    if (le(this, ii) || !n && !r)
      throw e;
    le(this, Tn) && (zt(le(this, Tn)), Ve(this, Tn, null)), le(this, dn) && (zt(le(this, dn)), Ve(this, dn, null)), le(this, Zn) && (zt(le(this, Zn)), Ve(this, Zn, null));
    var i = !1, a = !1;
    const o = () => {
      if (i) {
        sf();
        return;
      }
      i = !0, a && af(), gr.ensure(), Ve(this, ri, 0), le(this, Zn) !== null && Mr(le(this, Zn), () => {
        Ve(this, Zn, null);
      }), Ve(this, Hn, this.has_pending_snippet()), Ve(this, Tn, Xt(this, rn, so).call(this, () => (Ve(this, ii, !1), Zt(() => le(this, ni).call(this, le(this, Cn)))))), le(this, Tr) > 0 ? Xt(this, rn, lo).call(this) : Ve(this, Hn, !1);
    };
    var u = qe;
    try {
      fn(null), a = !0, n == null || n(e, o), a = !1;
    } catch (l) {
      ji(l, le(this, Xn) && le(this, Xn).parent);
    } finally {
      fn(u);
    }
    r && br(() => {
      Ve(this, Zn, Xt(this, rn, so).call(this, () => {
        Ve(this, ii, !0);
        try {
          return Zt(() => {
            r(
              le(this, Cn),
              () => e,
              () => o
            );
          });
        } catch (l) {
          return ji(
            l,
            /** @type {Effect} */
            le(this, Xn).parent
          ), null;
        } finally {
          Ve(this, ii, !1);
        }
      }));
    });
  }
}
Hn = new WeakMap(), Cn = new WeakMap(), Vs = new WeakMap(), Kn = new WeakMap(), ni = new WeakMap(), Xn = new WeakMap(), Tn = new WeakMap(), dn = new WeakMap(), Zn = new WeakMap(), Cr = new WeakMap(), ri = new WeakMap(), Tr = new WeakMap(), ii = new WeakMap(), xr = new WeakMap(), wo = new WeakMap(), Lo = new WeakMap(), rn = new WeakSet(), yf = function() {
  try {
    Ve(this, Tn, Zt(() => le(this, ni).call(this, le(this, Cn))));
  } catch (e) {
    this.error(e);
  }
  Ve(this, Hn, !1);
}, If = function() {
  const e = le(this, Kn).pending;
  e && (Ve(this, dn, Zt(() => e(le(this, Cn)))), gr.enqueue(() => {
    Ve(this, Tn, Xt(this, rn, so).call(this, () => (gr.ensure(), Zt(() => le(this, ni).call(this, le(this, Cn)))))), le(this, Tr) > 0 ? Xt(this, rn, lo).call(this) : (Mr(
      /** @type {Effect} */
      le(this, dn),
      () => {
        Ve(this, dn, null);
      }
    ), Ve(this, Hn, !1));
  }));
}, /**
 * @param {() => Effect | null} fn
 */
so = function(e) {
  var n = We, r = qe, i = dt;
  er(le(this, Xn)), fn(le(this, Xn)), Gi(le(this, Xn).ctx);
  try {
    return e();
  } catch (a) {
    return ku(a), null;
  } finally {
    er(n), fn(r), Gi(i);
  }
}, lo = function() {
  const e = (
    /** @type {(anchor: Node) => void} */
    le(this, Kn).pending
  );
  le(this, Tn) !== null && (Ve(this, Cr, document.createDocumentFragment()), Ef(le(this, Tn), le(this, Cr))), le(this, dn) === null && Ve(this, dn, Zt(() => e(le(this, Cn))));
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 */
bs = function(e) {
  var n;
  if (!this.has_pending_snippet()) {
    this.parent && Xt(n = this.parent, rn, bs).call(n, e);
    return;
  }
  Ve(this, Tr, le(this, Tr) + e), le(this, Tr) === 0 && (Ve(this, Hn, !1), le(this, dn) && Mr(le(this, dn), () => {
    Ve(this, dn, null);
  }), le(this, Cr) && (le(this, Cn).before(le(this, Cr)), Ve(this, Cr, null)), br(() => {
    gr.ensure().flush();
  }));
};
function Ef(t, e) {
  for (var n = t.nodes_start, r = t.nodes_end; n !== null; ) {
    var i = n === r ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ ka(n)
    );
    e.append(n), n = i;
  }
}
function qu(t, e, n) {
  const r = Ua() ? Fa : Xs;
  if (e.length === 0) {
    n(t.map(r));
    return;
  }
  var i = ut, a = (
    /** @type {Effect} */
    We
  ), o = Sf();
  Promise.all(e.map((u) => /* @__PURE__ */ Af(u))).then((u) => {
    o();
    try {
      n([...t.map(r), ...u]);
    } catch (l) {
      a.f & vi || ji(l, a);
    }
    i == null || i.deactivate(), _s();
  }).catch((u) => {
    ji(u, a);
  });
}
function Sf() {
  var t = We, e = qe, n = dt, r = ut;
  return function() {
    er(t), fn(e), Gi(n), r == null || r.activate();
  };
}
function _s() {
  er(null), fn(null), Gi(null);
}
// @__NO_SIDE_EFFECTS__
function Fa(t) {
  var e = an | _n, n = qe !== null && qe.f & an ? (
    /** @type {Derived} */
    qe
  ) : null;
  return We === null || n !== null && n.f & wn ? e |= wn : We.f |= $i, {
    ctx: dt,
    deps: null,
    effects: null,
    equals: Hu,
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
function Af(t, e) {
  let n = (
    /** @type {Effect | null} */
    We
  );
  n === null && Zd();
  var r = (
    /** @type {Boundary} */
    n.b
  ), i = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), a = fi(
    /** @type {V} */
    kt
  ), o = !qe, u = /* @__PURE__ */ new Map();
  return Pf(() => {
    var f;
    var l = Du();
    i = l.promise;
    try {
      Promise.resolve(t()).then(l.resolve, l.reject).then(_s);
    } catch (g) {
      l.reject(g), _s();
    }
    var c = (
      /** @type {Batch} */
      ut
    ), d = r.is_pending();
    o && (r.update_pending_count(1), d || (c.increment(), (f = u.get(c)) == null || f.reject(Oi), u.delete(c), u.set(c, l)));
    const m = (g, h = void 0) => {
      if (d || c.activate(), h)
        h !== Oi && (a.f |= ai, qi(a, h));
      else {
        a.f & ai && (a.f ^= ai), qi(a, g);
        for (const [p, b] of u) {
          if (u.delete(p), p === c) break;
          b.reject(Oi);
        }
      }
      o && (r.update_pending_count(-1), d || c.decrement());
    };
    l.promise.then(m, (g) => m(null, g || "unknown"));
  }), Ho(() => {
    for (const l of u.values())
      l.reject(Oi);
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
function fe(t) {
  const e = /* @__PURE__ */ Fa(t);
  return sc(e), e;
}
// @__NO_SIDE_EFFECTS__
function Xs(t) {
  const e = /* @__PURE__ */ Fa(t);
  return e.equals = Nu, e;
}
function Wu(t) {
  var e = t.effects;
  if (e !== null) {
    t.effects = null;
    for (var n = 0; n < e.length; n += 1)
      zt(
        /** @type {Effect} */
        e[n]
      );
  }
}
function Cf(t) {
  for (var e = t.parent; e !== null; ) {
    if (!(e.f & an))
      return (
        /** @type {Effect} */
        e
      );
    e = e.parent;
  }
  return null;
}
function Zs(t) {
  var e, n = We;
  er(Cf(t));
  try {
    Wu(t), e = dc(t);
  } finally {
    er(n);
  }
  return e;
}
function zu(t) {
  var e = Zs(t);
  if (t.equals(e) || (t.v = e, t.wv = uc()), !gi)
    if (qt !== null)
      qt.set(t, t.v);
    else {
      var n = (Lr || t.f & wn) && t.deps !== null ? Hr : Qt;
      nn(t, n);
    }
}
const Dr = /* @__PURE__ */ new Map();
function fi(t, e) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: t,
    reactions: null,
    equals: Hu,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function he(t, e) {
  const n = fi(t);
  return sc(n), n;
}
// @__NO_SIDE_EFFECTS__
function Ku(t, e = !1, n = !0) {
  var i;
  const r = fi(t);
  return e || (r.equals = Nu), ea && n && dt !== null && dt.l !== null && ((i = dt.l).s ?? (i.s = [])).push(r), r;
}
function X(t, e, n = !1) {
  qe !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Nn || qe.f & Il) && Ua() && qe.f & (an | Pr | Mo | Il) && !(tn != null && tn.includes(t)) && rf();
  let r = n ? Ie(e) : e;
  return qi(t, r);
}
function qi(t, e) {
  if (!t.equals(e)) {
    var n = t.v;
    gi ? Dr.set(t, e) : Dr.set(t, n), t.v = e;
    var r = gr.ensure();
    r.capture(t, n), t.f & an && (t.f & _n && Zs(
      /** @type {Derived} */
      t
    ), nn(t, t.f & wn ? Hr : Qt)), t.wv = uc(), Xu(t, _n), Ua() && We !== null && We.f & Qt && !(We.f & (_r | hi)) && (An === null ? Uf([t]) : An.push(t));
  }
  return e;
}
function Ca(t) {
  X(t, t.v + 1);
}
function Xu(t, e) {
  var n = t.reactions;
  if (n !== null)
    for (var r = Ua(), i = n.length, a = 0; a < i; a++) {
      var o = n[a], u = o.f;
      if (!(!r && o === We)) {
        var l = (u & _n) === 0;
        l && nn(o, e), u & an ? Xu(
          /** @type {Derived} */
          o,
          Hr
        ) : l && (u & Pr && dr !== null && dr.push(
          /** @type {Effect} */
          o
        ), di(
          /** @type {Effect} */
          o
        ));
      }
    }
}
function Ie(t) {
  if (typeof t != "object" || t === null || $n in t)
    return t;
  const e = js(t);
  if (e !== qd && e !== Wd)
    return t;
  var n = /* @__PURE__ */ new Map(), r = Oo(t), i = /* @__PURE__ */ he(0), a = oi, o = (u) => {
    if (oi === a)
      return u();
    var l = qe, c = oi;
    fn(null), xl(a);
    var d = u();
    return fn(l), xl(c), d;
  };
  return r && n.set("length", /* @__PURE__ */ he(
    /** @type {any[]} */
    t.length
  )), new Proxy(
    /** @type {any} */
    t,
    {
      defineProperty(u, l, c) {
        (!("value" in c) || c.configurable === !1 || c.enumerable === !1 || c.writable === !1) && tf();
        var d = n.get(l);
        return d === void 0 ? d = o(() => {
          var m = /* @__PURE__ */ he(c.value);
          return n.set(l, m), m;
        }) : X(d, c.value, !0), !0;
      },
      deleteProperty(u, l) {
        var c = n.get(l);
        if (c === void 0) {
          if (l in u) {
            const d = o(() => /* @__PURE__ */ he(kt));
            n.set(l, d), Ca(i);
          }
        } else
          X(c, kt), Ca(i);
        return !0;
      },
      get(u, l, c) {
        var g;
        if (l === $n)
          return t;
        var d = n.get(l), m = l in u;
        if (d === void 0 && (!m || (g = Rr(u, l)) != null && g.writable) && (d = o(() => {
          var h = Ie(m ? u[l] : kt), p = /* @__PURE__ */ he(h);
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
        if (c !== void 0 || We !== null && (!d || (f = Rr(u, l)) != null && f.writable)) {
          c === void 0 && (c = o(() => {
            var g = d ? Ie(u[l]) : kt, h = /* @__PURE__ */ he(g);
            return h;
          }), n.set(l, c));
          var m = s(c);
          if (m === kt)
            return !1;
        }
        return d;
      },
      set(u, l, c, d) {
        var E;
        var m = n.get(l), f = l in u;
        if (r && l === "length")
          for (var g = c; g < /** @type {Source<number>} */
          m.v; g += 1) {
            var h = n.get(g + "");
            h !== void 0 ? X(h, kt) : g in u && (h = o(() => /* @__PURE__ */ he(kt)), n.set(g + "", h));
          }
        if (m === void 0)
          (!f || (E = Rr(u, l)) != null && E.writable) && (m = o(() => /* @__PURE__ */ he(void 0)), X(m, Ie(c)), n.set(l, m));
        else {
          f = m.v !== kt;
          var p = o(() => Ie(c));
          X(m, p);
        }
        var b = Reflect.getOwnPropertyDescriptor(u, l);
        if (b != null && b.set && b.set.call(d, c), !f) {
          if (r && typeof l == "string") {
            var y = (
              /** @type {Source<number>} */
              n.get("length")
            ), S = Number(l);
            Number.isInteger(S) && S >= y.v && X(y, S + 1);
          }
          Ca(i);
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
        nf();
      }
    }
  );
}
function Sl(t) {
  try {
    if (t !== null && typeof t == "object" && $n in t)
      return t[$n];
  } catch {
  }
  return t;
}
function Tf(t, e) {
  return Object.is(Sl(t), Sl(e));
}
var Ta, Ys, Zu, Yu, Qu;
function xf() {
  if (Ta === void 0) {
    Ta = window, Ys = document, Zu = /Firefox/.test(navigator.userAgent);
    var t = Element.prototype, e = Node.prototype, n = Text.prototype;
    Yu = Rr(e, "firstChild").get, Qu = Rr(e, "nextSibling").get, yl(t) && (t.__click = void 0, t.__className = void 0, t.__attributes = null, t.__style = void 0, t.__e = void 0), yl(n) && (n.__t = void 0);
  }
}
function Ur(t = "") {
  return document.createTextNode(t);
}
// @__NO_SIDE_EFFECTS__
function Wi(t) {
  return Yu.call(t);
}
// @__NO_SIDE_EFFECTS__
function ka(t) {
  return Qu.call(t);
}
function ce(t, e) {
  return /* @__PURE__ */ Wi(t);
}
function Y(t, e = !1) {
  {
    var n = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ Wi(
        /** @type {Node} */
        t
      )
    );
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ ka(n) : n;
  }
}
function ge(t, e = 1, n = !1) {
  let r = t;
  for (; e--; )
    r = /** @type {TemplateNode} */
    /* @__PURE__ */ ka(r);
  return r;
}
function wf(t) {
  t.textContent = "";
}
function Qs() {
  return !1;
}
function Lf(t, e) {
  if (e) {
    const n = document.body;
    t.autofocus = !0, br(() => {
      document.activeElement === n && t.focus();
    });
  }
}
let Al = !1;
function Of() {
  Al || (Al = !0, document.addEventListener(
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
function ta(t) {
  var e = qe, n = We;
  fn(null), er(null);
  try {
    return t();
  } finally {
    fn(e), er(n);
  }
}
function Ju(t, e, n, r = n) {
  t.addEventListener(e, () => ta(n));
  const i = t.__on_r;
  i ? t.__on_r = () => {
    i(), r(!0);
  } : t.__on_r = () => r(!0), Of();
}
function $u(t) {
  We === null && qe === null && Jd(), qe !== null && qe.f & wn && We === null && Qd(), gi && Yd();
}
function Rf(t, e) {
  var n = e.last;
  n === null ? e.last = e.first = t : (n.next = t, t.prev = n, e.last = t);
}
function tr(t, e, n, r = !0) {
  var i = We;
  i !== null && i.f & kn && (t |= kn);
  var a = {
    ctx: dt,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: t | _n,
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
      wa(a), a.f |= Do;
    } catch (l) {
      throw zt(a), l;
    }
  else e !== null && di(a);
  if (r) {
    var o = a;
    if (n && o.deps === null && o.teardown === null && o.nodes_start === null && o.first === o.last && // either `null`, or a singular child
    !(o.f & $i) && (o = o.first), o !== null && (o.parent = i, i !== null && Rf(o, i), qe !== null && qe.f & an && !(t & hi))) {
      var u = (
        /** @type {Derived} */
        qe
      );
      (u.effects ?? (u.effects = [])).push(o);
    }
  }
  return a;
}
function Df() {
  return qe !== null && !Nn;
}
function Ho(t) {
  const e = tr(Ro, null, !1);
  return nn(e, Qt), e.teardown = t, e;
}
function Oe(t) {
  $u();
  var e = (
    /** @type {Effect} */
    We.f
  ), n = !qe && (e & _r) !== 0 && (e & Do) === 0;
  if (n) {
    var r = (
      /** @type {ComponentContext} */
      dt
    );
    (r.e ?? (r.e = [])).push(t);
  } else
    return ec(t);
}
function ec(t) {
  return tr(qs | Mu, t, !1);
}
function tc(t) {
  return $u(), tr(Ro | Mu, t, !0);
}
function Mf(t) {
  gr.ensure();
  const e = tr(hi | $i, t, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? Mr(e, () => {
      zt(e), r(void 0);
    }) : (zt(e), r(void 0));
  });
}
function mi(t) {
  return tr(qs, t, !1);
}
function Pf(t) {
  return tr(Mo | $i, t, !0);
}
function Ba(t, e = 0) {
  return tr(Ro | e, t, !0);
}
function xe(t, e = [], n = []) {
  qu(e, n, (r) => {
    tr(Ro, () => t(...r.map(s)), !0);
  });
}
function Fr(t, e = 0) {
  var n = tr(Pr | e, t, !0);
  return n;
}
function Zt(t, e = !0) {
  return tr(_r | $i, t, !0, e);
}
function nc(t) {
  var e = t.teardown;
  if (e !== null) {
    const n = gi, r = qe;
    Tl(!0), fn(null);
    try {
      e.call(null);
    } finally {
      Tl(n), fn(r);
    }
  }
}
function rc(t, e = !1) {
  var n = t.first;
  for (t.first = t.last = null; n !== null; ) {
    const i = n.ac;
    i !== null && ta(() => {
      i.abort(Oi);
    });
    var r = n.next;
    n.f & hi ? n.parent = null : zt(n, e), n = r;
  }
}
function Hf(t) {
  for (var e = t.first; e !== null; ) {
    var n = e.next;
    e.f & _r || zt(e), e = n;
  }
}
function zt(t, e = !0) {
  var n = !1;
  (e || t.f & Kd) && t.nodes_start !== null && t.nodes_end !== null && (Nf(
    t.nodes_start,
    /** @type {TemplateNode} */
    t.nodes_end
  ), n = !0), rc(t, e && !n), mo(t, 0), nn(t, vi);
  var r = t.transitions;
  if (r !== null)
    for (const a of r)
      a.stop();
  nc(t);
  var i = t.parent;
  i !== null && i.first !== null && ic(t), t.next = t.prev = t.teardown = t.ctx = t.deps = t.fn = t.nodes_start = t.nodes_end = t.ac = null;
}
function Nf(t, e) {
  for (; t !== null; ) {
    var n = t === e ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ ka(t)
    );
    t.remove(), t = n;
  }
}
function ic(t) {
  var e = t.parent, n = t.prev, r = t.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), e !== null && (e.first === t && (e.first = r), e.last === t && (e.last = n));
}
function Mr(t, e) {
  var n = [];
  Js(t, n, !0), ac(n, () => {
    zt(t), e && e();
  });
}
function ac(t, e) {
  var n = t.length;
  if (n > 0) {
    var r = () => --n || e();
    for (var i of t)
      i.out(r);
  } else
    e();
}
function Js(t, e, n) {
  if (!(t.f & kn)) {
    if (t.f ^= kn, t.transitions !== null)
      for (const o of t.transitions)
        (o.is_global || n) && e.push(o);
    for (var r = t.first; r !== null; ) {
      var i = r.next, a = (r.f & Nr) !== 0 || (r.f & _r) !== 0;
      Js(r, e, a ? n : !1), r = i;
    }
  }
}
function No(t) {
  oc(t, !0);
}
function oc(t, e) {
  if (t.f & kn) {
    t.f ^= kn, t.f & Qt || (nn(t, _n), di(t));
    for (var n = t.first; n !== null; ) {
      var r = n.next, i = (n.f & Nr) !== 0 || (n.f & _r) !== 0;
      oc(n, i ? e : !1), n = r;
    }
    if (t.transitions !== null)
      for (const a of t.transitions)
        (a.is_global || e) && a.in();
  }
}
let Mi = !1;
function Cl(t) {
  Mi = t;
}
let gi = !1;
function Tl(t) {
  gi = t;
}
let qe = null, Nn = !1;
function fn(t) {
  qe = t;
}
let We = null;
function er(t) {
  We = t;
}
let tn = null;
function sc(t) {
  qe !== null && (tn === null ? tn = [t] : tn.push(t));
}
let en = null, pn = 0, An = null;
function Uf(t) {
  An = t;
}
let lc = 1, xa = 0, oi = xa;
function xl(t) {
  oi = t;
}
let Lr = !1;
function uc() {
  return ++lc;
}
function Uo(t) {
  var m;
  var e = t.f;
  if (e & _n)
    return !0;
  if (e & Hr) {
    var n = t.deps, r = (e & wn) !== 0;
    if (n !== null) {
      var i, a, o = (e & vo) !== 0, u = r && We !== null && !Lr, l = n.length;
      if ((o || u) && (We === null || !(We.f & vi))) {
        var c = (
          /** @type {Derived} */
          t
        ), d = c.parent;
        for (i = 0; i < l; i++)
          a = n[i], (o || !((m = a == null ? void 0 : a.reactions) != null && m.includes(c))) && (a.reactions ?? (a.reactions = [])).push(c);
        o && (c.f ^= vo), u && d !== null && !(d.f & wn) && (c.f ^= wn);
      }
      for (i = 0; i < l; i++)
        if (a = n[i], Uo(
          /** @type {Derived} */
          a
        ) && zu(
          /** @type {Derived} */
          a
        ), a.wv > t.wv)
          return !0;
    }
    (!r || We !== null && !Lr) && nn(t, Qt);
  }
  return !1;
}
function cc(t, e, n = !0) {
  var r = t.reactions;
  if (r !== null && !(tn != null && tn.includes(t)))
    for (var i = 0; i < r.length; i++) {
      var a = r[i];
      a.f & an ? cc(
        /** @type {Derived} */
        a,
        e,
        !1
      ) : e === a && (n ? nn(a, _n) : a.f & Qt && nn(a, Hr), di(
        /** @type {Effect} */
        a
      ));
    }
}
function dc(t) {
  var p;
  var e = en, n = pn, r = An, i = qe, a = Lr, o = tn, u = dt, l = Nn, c = oi, d = t.f;
  en = /** @type {null | Value[]} */
  null, pn = 0, An = null, Lr = (d & wn) !== 0 && (Nn || !Mi || qe === null), qe = d & (_r | hi) ? null : t, tn = null, Gi(t.ctx), Nn = !1, oi = ++xa, t.ac !== null && (ta(() => {
    t.ac.abort(Oi);
  }), t.ac = null);
  try {
    t.f |= hs;
    var m = (
      /** @type {Function} */
      t.fn
    ), f = m(), g = t.deps;
    if (en !== null) {
      var h;
      if (mo(t, pn), g !== null && pn > 0)
        for (g.length = pn + en.length, h = 0; h < en.length; h++)
          g[pn + h] = en[h];
      else
        t.deps = g = en;
      if (!Lr || // Deriveds that already have reactions can cleanup, so we still add them as reactions
      d & an && /** @type {import('#client').Derived} */
      t.reactions !== null)
        for (h = pn; h < g.length; h++)
          ((p = g[h]).reactions ?? (p.reactions = [])).push(t);
    } else g !== null && pn < g.length && (mo(t, pn), g.length = pn);
    if (Ua() && An !== null && !Nn && g !== null && !(t.f & (an | Hr | _n)))
      for (h = 0; h < /** @type {Source[]} */
      An.length; h++)
        cc(
          An[h],
          /** @type {Effect} */
          t
        );
    return i !== null && i !== t && (xa++, An !== null && (r === null ? r = An : r.push(.../** @type {Source[]} */
    An))), t.f & ai && (t.f ^= ai), f;
  } catch (b) {
    return ku(b);
  } finally {
    t.f ^= hs, en = e, pn = n, An = r, qe = i, Lr = a, tn = o, Gi(u), Nn = l, oi = c;
  }
}
function Ff(t, e) {
  let n = e.reactions;
  if (n !== null) {
    var r = jd.call(n, t);
    if (r !== -1) {
      var i = n.length - 1;
      i === 0 ? n = e.reactions = null : (n[r] = n[i], n.pop());
    }
  }
  n === null && e.f & an && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (en === null || !en.includes(e)) && (nn(e, Hr), e.f & (wn | vo) || (e.f ^= vo), Wu(
    /** @type {Derived} **/
    e
  ), mo(
    /** @type {Derived} **/
    e,
    0
  ));
}
function mo(t, e) {
  var n = t.deps;
  if (n !== null)
    for (var r = e; r < n.length; r++)
      Ff(t, n[r]);
}
function wa(t) {
  var e = t.f;
  if (!(e & vi)) {
    nn(t, Qt);
    var n = We, r = Mi;
    We = t, Mi = !0;
    try {
      e & Pr ? Hf(t) : rc(t), nc(t);
      var i = dc(t);
      t.teardown = typeof i == "function" ? i : null, t.wv = lc;
      var a;
      Ou && uf && t.f & _n && t.deps;
    } finally {
      Mi = r, We = n;
    }
  }
}
async function fc() {
  await Promise.resolve(), vf();
}
function s(t) {
  var e = t.f, n = (e & an) !== 0;
  if (qe !== null && !Nn) {
    var r = We !== null && (We.f & vi) !== 0;
    if (!r && !(tn != null && tn.includes(t))) {
      var i = qe.deps;
      if (qe.f & hs)
        t.rv < xa && (t.rv = xa, en === null && i !== null && i[pn] === t ? pn++ : en === null ? en = [t] : (!Lr || !en.includes(t)) && en.push(t));
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
    u !== null && !(u.f & wn) && (o.f ^= wn);
  }
  if (gi) {
    if (Dr.has(t))
      return Dr.get(t);
    if (n) {
      o = /** @type {Derived} */
      t;
      var l = o.v;
      return (!(o.f & Qt) && o.reactions !== null || hc(o)) && (l = Zs(o)), Dr.set(o, l), l;
    }
  } else if (n) {
    if (o = /** @type {Derived} */
    t, qt != null && qt.has(o))
      return qt.get(o);
    Uo(o) && zu(o);
  }
  if (qt != null && qt.has(t))
    return qt.get(t);
  if (t.f & ai)
    throw t.v;
  return t.v;
}
function hc(t) {
  if (t.v === kt) return !0;
  if (t.deps === null) return !1;
  for (const e of t.deps)
    if (Dr.has(e) || e.f & an && hc(
      /** @type {Derived} */
      e
    ))
      return !0;
  return !1;
}
function Gn(t) {
  var e = Nn;
  try {
    return Nn = !0, t();
  } finally {
    Nn = e;
  }
}
const kf = -7169;
function nn(t, e) {
  t.f = t.f & kf | e;
}
function vc(t) {
  if (!(typeof t != "object" || !t || t instanceof EventTarget)) {
    if ($n in t)
      ys(t);
    else if (!Array.isArray(t))
      for (let e in t) {
        const n = t[e];
        typeof n == "object" && n && $n in n && ys(n);
      }
  }
}
function ys(t, e = /* @__PURE__ */ new Set()) {
  if (typeof t == "object" && t !== null && // We don't want to traverse DOM elements
  !(t instanceof EventTarget) && !e.has(t)) {
    e.add(t), t instanceof Date && t.getTime();
    for (let r in t)
      try {
        ys(t[r], e);
      } catch {
      }
    const n = js(t);
    if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
      const r = Ru(n);
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
const mc = /* @__PURE__ */ new Set(), Is = /* @__PURE__ */ new Set();
function $s(t, e, n, r = {}) {
  function i(a) {
    if (r.capture || Ia.call(e, a), !a.cancelBubble)
      return ta(() => n == null ? void 0 : n.call(this, a));
  }
  return t.startsWith("pointer") || t.startsWith("touch") || t === "wheel" ? br(() => {
    e.addEventListener(t, i, r);
  }) : e.addEventListener(t, i, r), i;
}
function Bf(t, e, n, r = {}) {
  var i = $s(e, t, n, r);
  return () => {
    t.removeEventListener(e, i, r);
  };
}
function Jn(t, e, n, r, i) {
  var a = { capture: r, passive: i }, o = $s(t, e, n, a);
  (e === document.body || // @ts-ignore
  e === window || // @ts-ignore
  e === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  e instanceof HTMLMediaElement) && Ho(() => {
    e.removeEventListener(t, o, a);
  });
}
function yn(t) {
  for (var e = 0; e < t.length; e++)
    mc.add(t[e]);
  for (var n of Is)
    n(t);
}
let wl = null;
function Ia(t) {
  var S;
  var e = this, n = (
    /** @type {Node} */
    e.ownerDocument
  ), r = t.type, i = ((S = t.composedPath) == null ? void 0 : S.call(t)) || [], a = (
    /** @type {null | Element} */
    i[0] || t.target
  );
  wl = t;
  var o = 0, u = wl === t && t.__root;
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
    fo(t, "currentTarget", {
      configurable: !0,
      get() {
        return a || n;
      }
    });
    var d = qe, m = We;
    fn(null), er(null);
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
            if (Oo(p)) {
              var [b, ...y] = p;
              b.apply(a, [t, ...y]);
            } else
              p.call(a, t);
        } catch (E) {
          f ? g.push(E) : f = E;
        }
        if (t.cancelBubble || h === e || h === null)
          break;
        a = h;
      }
      if (f) {
        for (let E of g)
          queueMicrotask(() => {
            throw E;
          });
        throw f;
      }
    } finally {
      t.__root = e, delete t.currentTarget, fn(d), er(m);
    }
  }
}
function gc(t) {
  var e = document.createElement("template");
  return e.innerHTML = t.replaceAll("<!>", "<!---->"), e.content;
}
function zi(t, e) {
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
    i === void 0 && (i = gc(a ? t : "<!>" + t), n || (i = /** @type {Node} */
    /* @__PURE__ */ Wi(i)));
    var o = (
      /** @type {TemplateNode} */
      r || Zu ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (n) {
      var u = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Wi(o)
      ), l = (
        /** @type {TemplateNode} */
        o.lastChild
      );
      zi(u, l);
    } else
      zi(o, o);
    return o;
  };
}
// @__NO_SIDE_EFFECTS__
function Vf(t, e, n = "svg") {
  var r = !t.startsWith("<!>"), i = `<${n}>${r ? t : "<!>" + t}</${n}>`, a;
  return () => {
    if (!a) {
      var o = (
        /** @type {DocumentFragment} */
        gc(i)
      ), u = (
        /** @type {Element} */
        /* @__PURE__ */ Wi(o)
      );
      a = /** @type {Element} */
      /* @__PURE__ */ Wi(u);
    }
    var l = (
      /** @type {TemplateNode} */
      a.cloneNode(!0)
    );
    return zi(l, l), l;
  };
}
// @__NO_SIDE_EFFECTS__
function _t(t, e) {
  return /* @__PURE__ */ Vf(t, e, "svg");
}
function vt(t = "") {
  {
    var e = Ur(t + "");
    return zi(e, e), e;
  }
}
function ie() {
  var t = document.createDocumentFragment(), e = document.createComment(""), n = Ur();
  return t.append(e, n), zi(e, n), t;
}
function T(t, e) {
  t !== null && t.before(
    /** @type {Node} */
    e
  );
}
function Gf(t) {
  return t.endsWith("capture") && t !== "gotpointercapture" && t !== "lostpointercapture";
}
const jf = [
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
function qf(t) {
  return jf.includes(t);
}
const Wf = {
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
function zf(t) {
  return t = t.toLowerCase(), Wf[t] ?? t;
}
const Kf = ["touchstart", "touchmove"];
function Xf(t) {
  return Kf.includes(t);
}
let go = !0;
function Ll(t) {
  go = t;
}
function ze(t, e) {
  var n = e == null ? "" : typeof e == "object" ? e + "" : e;
  n !== (t.__t ?? (t.__t = t.nodeValue)) && (t.__t = n, t.nodeValue = n + "");
}
function Zf(t, e) {
  return Yf(t, e);
}
const Ai = /* @__PURE__ */ new Map();
function Yf(t, { target: e, anchor: n, props: r = {}, events: i, context: a, intro: o = !0 }) {
  xf();
  var u = /* @__PURE__ */ new Set(), l = (m) => {
    for (var f = 0; f < m.length; f++) {
      var g = m[f];
      if (!u.has(g)) {
        u.add(g);
        var h = Xf(g);
        e.addEventListener(g, Ia, { passive: h });
        var p = Ai.get(g);
        p === void 0 ? (document.addEventListener(g, Ia, { passive: h }), Ai.set(g, 1)) : Ai.set(g, p + 1);
      }
    }
  };
  l(Gs(mc)), Is.add(l);
  var c = void 0, d = Mf(() => {
    var m = n ?? e.appendChild(Ur());
    return bf(
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
        i && (r.$$events = i), go = o, c = t(f, r) || {}, go = !0, a && Le();
      }
    ), () => {
      var h;
      for (var f of u) {
        e.removeEventListener(f, Ia);
        var g = (
          /** @type {number} */
          Ai.get(f)
        );
        --g === 0 ? (document.removeEventListener(f, Ia), Ai.delete(f)) : Ai.set(f, g);
      }
      Is.delete(l), m !== n && ((h = m.parentNode) == null || h.removeChild(m));
    };
  });
  return Qf.set(c, d), c;
}
let Qf = /* @__PURE__ */ new WeakMap();
function Ae(t, e, ...n) {
  var r = t, i = pe, a;
  Fr(() => {
    i !== (i = e()) && (a && (zt(a), a = null), a = Zt(() => (
      /** @type {SnippetFn} */
      i(r, ...n)
    )));
  }, Nr);
}
function at(t) {
  dt === null && zs(), ea && dt.l !== null ? Jf(dt).m.push(t) : Oe(() => {
    const e = Gn(t);
    if (typeof e == "function") return (
      /** @type {() => void} */
      e
    );
  });
}
function In(t) {
  dt === null && zs(), at(() => () => Gn(t));
}
function Jf(t) {
  var e = (
    /** @type {ComponentContextLegacy} */
    t.l
  );
  return e.u ?? (e.u = { a: [], b: [], m: [] });
}
function oe(t, e, n = !1) {
  var r = t, i = null, a = null, o = kt, u = n ? Nr : 0, l = !1;
  const c = (g, h = !0) => {
    l = !0, f(h, g);
  };
  var d = null;
  function m() {
    d !== null && (d.lastChild.remove(), r.before(d), d = null);
    var g = o ? i : a, h = o ? a : i;
    g && No(g), h && Mr(h, () => {
      o ? a = null : i = null;
    });
  }
  const f = (g, h) => {
    if (o !== (o = g)) {
      var p = Qs(), b = r;
      if (p && (d = document.createDocumentFragment(), d.append(b = Ur())), o ? i ?? (i = h && Zt(() => h(b))) : a ?? (a = h && Zt(() => h(b))), p) {
        var y = (
          /** @type {Batch} */
          ut
        ), S = o ? i : a, E = o ? a : i;
        S && y.skipped_effects.delete(S), E && y.skipped_effects.add(E), y.add_callback(m);
      } else
        m();
    }
  };
  Fr(() => {
    l = !1, e(c), l || f(null, null);
  }, u);
}
let si = null;
function Ol(t) {
  si = t;
}
function Ri(t, e) {
  return e;
}
function $f(t, e, n) {
  for (var r = t.items, i = [], a = e.length, o = 0; o < a; o++)
    Js(e[o].e, i, !0);
  var u = a > 0 && i.length === 0 && n !== null;
  if (u) {
    var l = (
      /** @type {Element} */
      /** @type {Element} */
      n.parentNode
    );
    wf(l), l.append(
      /** @type {Element} */
      n
    ), r.clear(), zn(t, e[0].prev, e[a - 1].next);
  }
  ac(i, () => {
    for (var c = 0; c < a; c++) {
      var d = e[c];
      u || (r.delete(d.k), zn(t, d.prev, d.next)), zt(d.e, !u);
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
    o = c.appendChild(Ur());
  }
  var d = null, m = !1, f = /* @__PURE__ */ new Map(), g = /* @__PURE__ */ Xs(() => {
    var y = n();
    return Oo(y) ? y : y == null ? [] : Gs(y);
  }), h, p;
  function b() {
    eh(
      p,
      h,
      u,
      f,
      o,
      i,
      e,
      r,
      n
    ), a !== null && (h.length === 0 ? d ? No(d) : d = Zt(() => a(o)) : d !== null && Mr(d, () => {
      d = null;
    }));
  }
  Fr(() => {
    p ?? (p = /** @type {Effect} */
    We), h = /** @type {V[]} */
    s(g);
    var y = h.length;
    if (!(m && y === 0)) {
      m = y === 0;
      var S, E, _, A;
      if (Qs()) {
        var I = /* @__PURE__ */ new Set(), O = (
          /** @type {Batch} */
          ut
        );
        for (E = 0; E < y; E += 1) {
          _ = h[E], A = r(_, E);
          var C = u.items.get(A) ?? f.get(A);
          C ? e & 3 && pc(C, _, E, e) : (S = bc(
            null,
            u,
            null,
            null,
            _,
            A,
            E,
            i,
            e,
            n,
            !0
          ), f.set(A, S)), I.add(A);
        }
        for (const [L, k] of u.items)
          I.has(L) || O.skipped_effects.add(k.e);
        O.add_callback(b);
      } else
        b();
      s(g);
    }
  });
}
function eh(t, e, n, r, i, a, o, u, l) {
  var ne, N, D, j;
  var c = (o & 8) !== 0, d = (o & 3) !== 0, m = e.length, f = n.items, g = n.first, h = g, p, b = null, y, S = [], E = [], _, A, I, O;
  if (c)
    for (O = 0; O < m; O += 1)
      _ = e[O], A = u(_, O), I = f.get(A), I !== void 0 && ((ne = I.a) == null || ne.measure(), (y ?? (y = /* @__PURE__ */ new Set())).add(I));
  for (O = 0; O < m; O += 1) {
    if (_ = e[O], A = u(_, O), I = f.get(A), I === void 0) {
      var C = r.get(A);
      if (C !== void 0) {
        r.delete(A), f.set(A, C);
        var L = b ? b.next : h;
        zn(n, b, C), zn(n, C, L), qo(C, L, i), b = C;
      } else {
        var k = h ? (
          /** @type {TemplateNode} */
          h.e.nodes_start
        ) : i;
        b = bc(
          k,
          n,
          b,
          b === null ? n.first : b.next,
          _,
          A,
          O,
          a,
          o,
          l
        );
      }
      f.set(A, b), S = [], E = [], h = b.next;
      continue;
    }
    if (d && pc(I, _, O, o), I.e.f & kn && (No(I.e), c && ((N = I.a) == null || N.unfix(), (y ?? (y = /* @__PURE__ */ new Set())).delete(I))), I !== h) {
      if (p !== void 0 && p.has(I)) {
        if (S.length < E.length) {
          var $ = E[0], V;
          b = $.prev;
          var W = S[0], R = S[S.length - 1];
          for (V = 0; V < S.length; V += 1)
            qo(S[V], $, i);
          for (V = 0; V < E.length; V += 1)
            p.delete(E[V]);
          zn(n, W.prev, R.next), zn(n, b, W), zn(n, R, $), h = $, b = R, O -= 1, S = [], E = [];
        } else
          p.delete(I), qo(I, h, i), zn(n, I.prev, I.next), zn(n, I, b === null ? n.first : b.next), zn(n, b, I), b = I;
        continue;
      }
      for (S = [], E = []; h !== null && h.k !== A; )
        h.e.f & kn || (p ?? (p = /* @__PURE__ */ new Set())).add(h), E.push(h), h = h.next;
      if (h === null)
        continue;
      I = h;
    }
    S.push(I), b = I, h = I.next;
  }
  if (h !== null || p !== void 0) {
    for (var x = p === void 0 ? [] : Gs(p); h !== null; )
      h.e.f & kn || x.push(h), h = h.next;
    var M = x.length;
    if (M > 0) {
      var P = o & 4 && m === 0 ? i : null;
      if (c) {
        for (O = 0; O < M; O += 1)
          (D = x[O].a) == null || D.measure();
        for (O = 0; O < M; O += 1)
          (j = x[O].a) == null || j.fix();
      }
      $f(n, x, P);
    }
  }
  c && br(() => {
    var Ee;
    if (y !== void 0)
      for (I of y)
        (Ee = I.a) == null || Ee.apply();
  }), t.first = n.first && n.first.e, t.last = b && b.e;
  for (var Z of r.values())
    zt(Z.e);
  r.clear();
}
function pc(t, e, n, r) {
  r & 1 && qi(t.v, e), r & 2 ? qi(
    /** @type {Value<number>} */
    t.i,
    n
  ) : t.i = n;
}
function bc(t, e, n, r, i, a, o, u, l, c, d) {
  var m = si, f = (l & 1) !== 0, g = (l & 16) === 0, h = f ? g ? /* @__PURE__ */ Ku(i, !1, !1) : fi(i) : i, p = l & 2 ? fi(o) : o, b = {
    i: p,
    v: h,
    k: a,
    a: null,
    // @ts-expect-error
    e: null,
    prev: n,
    next: r
  };
  si = b;
  try {
    if (t === null) {
      var y = document.createDocumentFragment();
      y.append(t = Ur());
    }
    return b.e = Zt(() => u(
      /** @type {Node} */
      t,
      h,
      p,
      c
    ), lf), b.e.prev = n && n.e, b.e.next = r && r.e, n === null ? d || (e.first = b) : (n.next = b, n.e.next = b.e), r !== null && (r.prev = b, r.e.prev = b.e), b;
  } finally {
    si = m;
  }
}
function qo(t, e, n) {
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
      /* @__PURE__ */ ka(a)
    );
    i.before(a), a = o;
  }
}
function zn(t, e, n) {
  e === null ? t.first = n : (e.next = n, e.e.next = n && n.e), n !== null && (n.prev = e, n.e.prev = e && e.e);
}
function nr(t, e, n) {
  var r = t, i, a, o = null, u = null;
  function l() {
    a && (Mr(a), a = null), o && (o.lastChild.remove(), r.before(o), o = null), a = u, u = null;
  }
  Fr(() => {
    if (i !== (i = e())) {
      var c = Qs();
      if (i) {
        var d = r;
        c && (o = document.createDocumentFragment(), o.append(d = Ur()), a && ut.skipped_effects.add(a)), u = Zt(() => n(d, i));
      }
      c ? ut.add_callback(l) : l();
    }
  }, Nr);
}
function Rl(t, e, n, r, i, a) {
  var o, u, l = null, c = (
    /** @type {TemplateNode} */
    t
  ), d, m = si;
  Fr(() => {
    const f = e() || null;
    var g = f === "svg" ? Vd : null;
    if (f !== o) {
      var h = si;
      Ol(m), d && (f === null ? Mr(d, () => {
        d = null, u = null;
      }) : f === u ? No(d) : (zt(d), Ll(!1))), f && f !== u && (d = Zt(() => {
        if (l = g ? document.createElementNS(g, f) : document.createElement(f), zi(l, l), r) {
          var p = (
            /** @type {TemplateNode} */
            l.appendChild(Ur())
          );
          r(l, p);
        }
        We.nodes_end = l, c.before(l);
      })), o = f, o && (u = o), Ll(!0), Ol(h);
    }
  }, Nr);
}
function Ue(t, e, n) {
  mi(() => {
    var r = Gn(() => e(t, n == null ? void 0 : n()) || {});
    if (n && (r != null && r.update)) {
      var i = !1, a = (
        /** @type {any} */
        {}
      );
      Ba(() => {
        var o = n();
        vc(o), i && Ks(a, o) && (a = o, r.update(o));
      }), i = !0;
    }
    if (r != null && r.destroy)
      return () => (
        /** @type {Function} */
        r.destroy()
      );
  });
}
function th(t, e) {
  var n = void 0, r;
  Fr(() => {
    n !== (n = e()) && (r && (zt(r), r = null), n && (r = Zt(() => {
      mi(() => (
        /** @type {(node: Element) => void} */
        n(t)
      ));
    })));
  });
}
function _c(t) {
  var e, n, r = "";
  if (typeof t == "string" || typeof t == "number") r += t;
  else if (typeof t == "object") if (Array.isArray(t)) {
    var i = t.length;
    for (e = 0; e < i; e++) t[e] && (n = _c(t[e])) && (r && (r += " "), r += n);
  } else for (n in t) t[n] && (r && (r += " "), r += n);
  return r;
}
function nh() {
  for (var t, e, n = 0, r = "", i = arguments.length; n < i; n++) (t = arguments[n]) && (e = _c(t)) && (r && (r += " "), r += e);
  return r;
}
function yc(t) {
  return typeof t == "object" ? nh(t) : t ?? "";
}
const Dl = [...` 	
\r\f \v\uFEFF`];
function rh(t, e, n) {
  var r = t == null ? "" : "" + t;
  if (e && (r = r ? r + " " + e : e), n) {
    for (var i in n)
      if (n[i])
        r = r ? r + " " + i : i;
      else if (r.length)
        for (var a = i.length, o = 0; (o = r.indexOf(i, o)) >= 0; ) {
          var u = o + a;
          (o === 0 || Dl.includes(r[o - 1])) && (u === r.length || Dl.includes(r[u])) ? r = (o === 0 ? "" : r.substring(0, o)) + r.substring(u + 1) : o = u;
        }
  }
  return r === "" ? null : r;
}
function Ml(t, e = !1) {
  var n = e ? " !important;" : ";", r = "";
  for (var i in t) {
    var a = t[i];
    a != null && a !== "" && (r += " " + i + ": " + a + n);
  }
  return r;
}
function Wo(t) {
  return t[0] !== "-" || t[1] !== "-" ? t.toLowerCase() : t;
}
function ih(t, e) {
  if (e) {
    var n = "", r, i;
    if (Array.isArray(e) ? (r = e[0], i = e[1]) : r = e, t) {
      t = String(t).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var a = !1, o = 0, u = !1, l = [];
      r && l.push(...Object.keys(r).map(Wo)), i && l.push(...Object.keys(i).map(Wo));
      var c = 0, d = -1;
      const p = t.length;
      for (var m = 0; m < p; m++) {
        var f = t[m];
        if (u ? f === "/" && t[m - 1] === "*" && (u = !1) : a ? a === f && (a = !1) : f === "/" && t[m + 1] === "*" ? u = !0 : f === '"' || f === "'" ? a = f : f === "(" ? o++ : f === ")" && o--, !u && a === !1 && o === 0) {
          if (f === ":" && d === -1)
            d = m;
          else if (f === ";" || m === p - 1) {
            if (d !== -1) {
              var g = Wo(t.substring(c, d).trim());
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
    return r && (n += Ml(r)), i && (n += Ml(i, !0)), n = n.trim(), n === "" ? null : n;
  }
  return t == null ? null : String(t);
}
function el(t, e, n, r, i, a) {
  var o = t.__className;
  if (o !== n || o === void 0) {
    var u = rh(n, r, a);
    u == null ? t.removeAttribute("class") : e ? t.className = u : t.setAttribute("class", u), t.__className = n;
  } else if (a && i !== a)
    for (var l in a) {
      var c = !!a[l];
      (i == null || c !== !!i[l]) && t.classList.toggle(l, c);
    }
  return a;
}
function zo(t, e = {}, n, r) {
  for (var i in n) {
    var a = n[i];
    e[i] !== a && (n[i] == null ? t.style.removeProperty(i) : t.style.setProperty(i, a, r));
  }
}
function ct(t, e, n, r) {
  var i = t.__style;
  if (i !== e) {
    var a = ih(e, r);
    a == null ? t.removeAttribute("style") : t.style.cssText = a, t.__style = e;
  } else r && (Array.isArray(r) ? (zo(t, n == null ? void 0 : n[0], r[0]), zo(t, n == null ? void 0 : n[1], r[1], "important")) : zo(t, n, r));
  return r;
}
function Es(t, e, n = !1) {
  if (t.multiple) {
    if (e == null)
      return;
    if (!Oo(e))
      return of();
    for (var r of t.options)
      r.selected = e.includes(Pl(r));
    return;
  }
  for (r of t.options) {
    var i = Pl(r);
    if (Tf(i, e)) {
      r.selected = !0;
      return;
    }
  }
  (!n || e !== void 0) && (t.selectedIndex = -1);
}
function ah(t) {
  var e = new MutationObserver(() => {
    Es(t, t.__value);
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
  }), Ho(() => {
    e.disconnect();
  });
}
function Pl(t) {
  return "__value" in t ? t.__value : t.value;
}
const da = Symbol("class"), fa = Symbol("style"), Ic = Symbol("is custom element"), Ec = Symbol("is html");
function Hl(t, e) {
  var n = tl(t);
  n.value === (n.value = // treat null and undefined the same for the initial value
  e ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  t.value === e && (e !== 0 || t.nodeName !== "PROGRESS") || (t.value = e ?? "");
}
function oh(t, e) {
  e ? t.hasAttribute("selected") || t.setAttribute("selected", "") : t.removeAttribute("selected");
}
function pr(t, e, n, r) {
  var i = tl(t);
  i[e] !== (i[e] = n) && (e === "loading" && (t[Xd] = n), n == null ? t.removeAttribute(e) : typeof n != "string" && Sc(t).includes(e) ? t[e] = n : t.setAttribute(e, n));
}
function sh(t, e, n, r, i = !1, a = !1) {
  var o = tl(t), u = o[Ic], l = !o[Ec], c = e || {}, d = t.tagName === "OPTION";
  for (var m in e)
    m in n || (n[m] = null);
  n.class ? n.class = yc(n.class) : n[da] && (n.class = null), n[fa] && (n.style ?? (n.style = null));
  var f = Sc(t);
  for (const E in n) {
    let _ = n[E];
    if (d && E === "value" && _ == null) {
      t.value = t.__value = "", c[E] = _;
      continue;
    }
    if (E === "class") {
      var g = t.namespaceURI === "http://www.w3.org/1999/xhtml";
      el(t, g, _, r, e == null ? void 0 : e[da], n[da]), c[E] = _, c[da] = n[da];
      continue;
    }
    if (E === "style") {
      ct(t, _, e == null ? void 0 : e[fa], n[fa]), c[E] = _, c[fa] = n[fa];
      continue;
    }
    var h = c[E];
    if (!(_ === h && !(_ === void 0 && t.hasAttribute(E)))) {
      c[E] = _;
      var p = E[0] + E[1];
      if (p !== "$$")
        if (p === "on") {
          const A = {}, I = "$$" + E;
          let O = E.slice(2);
          var b = qf(O);
          if (Gf(O) && (O = O.slice(0, -7), A.capture = !0), !b && h) {
            if (_ != null) continue;
            t.removeEventListener(O, c[I], A), c[I] = null;
          }
          if (_ != null)
            if (b)
              t[`__${O}`] = _, yn([O]);
            else {
              let C = function(L) {
                c[E].call(this, L);
              };
              c[I] = $s(O, t, C, A);
            }
          else b && (t[`__${O}`] = void 0);
        } else if (E === "style")
          pr(t, E, _);
        else if (E === "autofocus")
          Lf(
            /** @type {HTMLElement} */
            t,
            !!_
          );
        else if (!u && (E === "__value" || E === "value" && _ != null))
          t.value = t.__value = _;
        else if (E === "selected" && d)
          oh(
            /** @type {HTMLOptionElement} */
            t,
            _
          );
        else {
          var y = E;
          l || (y = zf(y));
          var S = y === "defaultValue" || y === "defaultChecked";
          if (_ == null && !u && !S)
            if (o[E] = null, y === "value" || y === "checked") {
              let A = (
                /** @type {HTMLInputElement} */
                t
              );
              const I = e === void 0;
              if (y === "value") {
                let O = A.defaultValue;
                A.removeAttribute(y), A.defaultValue = O, A.value = A.__value = I ? O : null;
              } else {
                let O = A.defaultChecked;
                A.removeAttribute(y), A.defaultChecked = O, A.checked = I ? O : !1;
              }
            } else
              t.removeAttribute(E);
          else S || f.includes(y) && (u || typeof _ != "string") ? (t[y] = _, y in o && (o[y] = kt)) : typeof _ != "function" && pr(t, y, _);
        }
    }
  }
  return c;
}
function ke(t, e, n = [], r = [], i, a = !1, o = !1) {
  qu(n, r, (u) => {
    var l = void 0, c = {}, d = t.nodeName === "SELECT", m = !1;
    if (Fr(() => {
      var g = e(...u.map(s)), h = sh(
        t,
        l,
        g,
        i,
        a,
        o
      );
      m && d && "value" in g && Es(
        /** @type {HTMLSelectElement} */
        t,
        g.value
      );
      for (let b of Object.getOwnPropertySymbols(c))
        g[b] || zt(c[b]);
      for (let b of Object.getOwnPropertySymbols(g)) {
        var p = g[b];
        b.description === Gd && (!l || p !== l[b]) && (c[b] && zt(c[b]), c[b] = Zt(() => th(t, () => p))), h[b] = p;
      }
      l = h;
    }), d) {
      var f = (
        /** @type {HTMLSelectElement} */
        t
      );
      mi(() => {
        Es(
          f,
          /** @type {Record<string | symbol, any>} */
          l.value,
          !0
        ), ah(f);
      });
    }
    m = !0;
  });
}
function tl(t) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    t.__attributes ?? (t.__attributes = {
      [Ic]: t.nodeName.includes("-"),
      [Ec]: t.namespaceURI === Bd
    })
  );
}
var Nl = /* @__PURE__ */ new Map();
function Sc(t) {
  var e = t.getAttribute("is") || t.nodeName, n = Nl.get(e);
  if (n) return n;
  Nl.set(e, n = []);
  for (var r, i = t, a = Element.prototype; a !== i; ) {
    r = Ru(i);
    for (var o in r)
      r[o].set && n.push(o);
    i = js(i);
  }
  return n;
}
const lh = () => performance.now(), hr = {
  // don't access requestAnimationFrame eagerly outside method
  // this allows basic testing of user code without JSDOM
  // bunder will eval and remove ternary when the user's app is built
  tick: (
    /** @param {any} _ */
    (t) => requestAnimationFrame(t)
  ),
  now: () => lh(),
  tasks: /* @__PURE__ */ new Set()
};
function Ac() {
  const t = hr.now();
  hr.tasks.forEach((e) => {
    e.c(t) || (hr.tasks.delete(e), e.f());
  }), hr.tasks.size !== 0 && hr.tick(Ac);
}
function uh(t) {
  let e;
  return hr.tasks.size === 0 && hr.tick(Ac), {
    promise: new Promise((n) => {
      hr.tasks.add(e = { c: t, f: n });
    }),
    abort() {
      hr.tasks.delete(e);
    }
  };
}
function Xa(t, e) {
  ta(() => {
    t.dispatchEvent(new CustomEvent(e));
  });
}
function ch(t) {
  if (t === "float") return "cssFloat";
  if (t === "offset") return "cssOffset";
  if (t.startsWith("--")) return t;
  const e = t.split("-");
  return e.length === 1 ? e[0] : e[0] + e.slice(1).map(
    /** @param {any} word */
    (n) => n[0].toUpperCase() + n.slice(1)
  ).join("");
}
function Ul(t) {
  const e = {}, n = t.split(";");
  for (const r of n) {
    const [i, a] = r.split(":");
    if (!i || a === void 0) break;
    const o = ch(i.trim());
    e[o] = a.trim();
  }
  return e;
}
const dh = (t) => t;
function fh(t, e, n) {
  var r = (
    /** @type {EachItem} */
    si
  ), i, a, o, u = null;
  r.a ?? (r.a = {
    element: t,
    measure() {
      i = this.element.getBoundingClientRect();
    },
    apply() {
      if (o == null || o.abort(), a = this.element.getBoundingClientRect(), i.left !== a.left || i.right !== a.right || i.top !== a.top || i.bottom !== a.bottom) {
        const l = e()(this.element, { from: i, to: a }, n == null ? void 0 : n());
        o = bo(this.element, l, void 0, 1, () => {
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
function po(t, e, n, r) {
  var i = (t & 1) !== 0, a = (t & 2) !== 0, o = i && a, u = (t & 4) !== 0, l = o ? "both" : i ? "in" : "out", c, d = e.inert, m = e.style.overflow, f, g;
  function h() {
    return ta(() => c ?? (c = n()(e, (r == null ? void 0 : r()) ?? /** @type {P} */
    {}, {
      direction: l
    })));
  }
  var p = {
    is_global: u,
    in() {
      var E;
      if (e.inert = d, !i) {
        g == null || g.abort(), (E = g == null ? void 0 : g.reset) == null || E.call(g);
        return;
      }
      a || f == null || f.abort(), Xa(e, "introstart"), f = bo(e, h(), g, 1, () => {
        Xa(e, "introend"), f == null || f.abort(), f = c = void 0, e.style.overflow = m;
      });
    },
    out(E) {
      if (!a) {
        E == null || E(), c = void 0;
        return;
      }
      e.inert = !0, Xa(e, "outrostart"), g = bo(e, h(), f, 0, () => {
        Xa(e, "outroend"), E == null || E();
      });
    },
    stop: () => {
      f == null || f.abort(), g == null || g.abort();
    }
  }, b = (
    /** @type {Effect} */
    We
  );
  if ((b.transitions ?? (b.transitions = [])).push(p), i && go) {
    var y = u;
    if (!y) {
      for (var S = (
        /** @type {Effect | null} */
        b.parent
      ); S && S.f & Nr; )
        for (; (S = S.parent) && !(S.f & Pr); )
          ;
      y = !S || (S.f & Do) !== 0;
    }
    y && mi(() => {
      Gn(() => p.in());
    });
  }
}
function bo(t, e, n, r, i) {
  var a = r === 1;
  if (Li(e)) {
    var o, u = !1;
    return br(() => {
      if (!u) {
        var b = e({ direction: a ? "in" : "out" });
        o = bo(t, b, n, r, i);
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
      abort: pe,
      deactivate: pe,
      reset: pe,
      t: () => r
    };
  const { delay: l = 0, css: c, tick: d, easing: m = dh } = e;
  var f = [];
  if (a && n === void 0 && (d && d(0, 1), c)) {
    var g = Ul(c(0, 1));
    f.push(g, g);
  }
  var h = () => 1 - r, p = t.animate(f, { duration: l, fill: "forwards" });
  return p.onfinish = () => {
    p.cancel();
    var b = (n == null ? void 0 : n.t()) ?? 1 - r;
    n == null || n.abort();
    var y = r - b, S = (
      /** @type {number} */
      e.duration * Math.abs(y)
    ), E = [];
    if (S > 0) {
      var _ = !1;
      if (c)
        for (var A = Math.ceil(S / 16.666666666666668), I = 0; I <= A; I += 1) {
          var O = b + y * m(I / A), C = Ul(c(O, 1 - O));
          E.push(C), _ || (_ = C.overflow === "hidden");
        }
      _ && (t.style.overflow = "hidden"), h = () => {
        var L = (
          /** @type {number} */
          /** @type {globalThis.Animation} */
          p.currentTime
        );
        return b + y * m(L / S);
      }, d && uh(() => {
        if (p.playState !== "running") return !1;
        var L = h();
        return d(L, 1 - L), !0;
      });
    }
    p = t.animate(E, { duration: S, fill: "forwards" }), p.onfinish = () => {
      h = () => r, d == null || d(r, 1 - r), i();
    };
  }, {
    abort: () => {
      p && (p.cancel(), p.effect = null, p.onfinish = pe);
    },
    deactivate: () => {
      i = pe;
    },
    reset: () => {
      r === 0 && (d == null || d(1, 0));
    },
    t: () => h()
  };
}
function La(t, e, n = e) {
  var r = /* @__PURE__ */ new WeakSet();
  Ju(t, "input", async (i) => {
    var a = i ? t.defaultValue : t.value;
    if (a = Ko(t) ? Xo(a) : a, n(a), ut !== null && r.add(ut), await fc(), a !== (a = e())) {
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
  Gn(e) == null && t.value && (n(Ko(t) ? Xo(t.value) : t.value), ut !== null && r.add(ut)), Ba(() => {
    var i = e();
    if (t === document.activeElement) {
      var a = (
        /** @type {Batch} */
        ao ?? ut
      );
      if (r.has(a))
        return;
    }
    Ko(t) && i === Xo(t.value) || t.type === "date" && !i && !t.value || i !== t.value && (t.value = i ?? "");
  });
}
function hh(t, e, n = e) {
  Ju(t, "change", (r) => {
    var i = r ? t.defaultChecked : t.checked;
    n(i);
  }), // If we are hydrating and the value has since changed,
  // then use the update value from the input instead.
  // If defaultChecked is set, then checked == defaultChecked
  Gn(e) == null && n(t.checked), Ba(() => {
    var r = e();
    t.checked = !!r;
  });
}
function Ko(t) {
  var e = t.type;
  return e === "number" || e === "range";
}
function Xo(t) {
  return t === "" ? null : +t;
}
function Fl(t, e) {
  return t === e || (t == null ? void 0 : t[$n]) === e;
}
function Te(t = {}, e, n, r) {
  return mi(() => {
    var i, a;
    return Ba(() => {
      i = a, a = (r == null ? void 0 : r()) || [], Gn(() => {
        t !== n(...a) && (e(t, ...a), i && Fl(n(...i), t) && e(null, ...i));
      });
    }), () => {
      br(() => {
        a && Fl(n(...a), t) && e(null, ...a);
      });
    };
  }), t;
}
function vh(t = !1) {
  const e = (
    /** @type {ComponentContextLegacy} */
    dt
  ), n = e.l.u;
  if (!n) return;
  let r = () => vc(e.s);
  if (t) {
    let i = 0, a = (
      /** @type {Record<string, any>} */
      {}
    );
    const o = /* @__PURE__ */ Fa(() => {
      let u = !1;
      const l = e.s;
      for (const c in l)
        l[c] !== a[c] && (a[c] = l[c], u = !0);
      return u && i++, i;
    });
    r = () => s(o);
  }
  n.b.length && tc(() => {
    kl(e, r), ho(n.b);
  }), Oe(() => {
    const i = Gn(() => n.m.map(zd));
    return () => {
      for (const a of i)
        typeof a == "function" && a();
    };
  }), n.a.length && Oe(() => {
    kl(e, r), ho(n.a);
  });
}
function kl(t, e) {
  if (t.l.s)
    for (const n of t.l.s) s(n);
  e();
}
function nl(t, e, n) {
  if (t == null)
    return e(void 0), n && n(void 0), pe;
  const r = Gn(
    () => t.subscribe(
      e,
      // @ts-expect-error
      n
    )
  );
  return r.unsubscribe ? () => r.unsubscribe() : r;
}
const Ci = [];
function mh(t, e) {
  return {
    subscribe: Bt(t, e).subscribe
  };
}
function Bt(t, e = pe) {
  let n = null;
  const r = /* @__PURE__ */ new Set();
  function i(u) {
    if (Ks(t, u) && (t = u, n)) {
      const l = !Ci.length;
      for (const c of r)
        c[1](), Ci.push(c, t);
      if (l) {
        for (let c = 0; c < Ci.length; c += 2)
          Ci[c][0](Ci[c + 1]);
        Ci.length = 0;
      }
    }
  }
  function a(u) {
    i(u(
      /** @type {T} */
      t
    ));
  }
  function o(u, l = pe) {
    const c = [u, l];
    return r.add(c), r.size === 1 && (n = e(i, a) || pe), u(
      /** @type {T} */
      t
    ), () => {
      r.delete(c), r.size === 0 && n && (n(), n = null);
    };
  }
  return { set: i, update: a, subscribe: o };
}
function na(t, e, n) {
  const r = !Array.isArray(t), i = r ? [t] : t;
  if (!i.every(Boolean))
    throw new Error("derived() expects stores as input, got a falsy value");
  const a = e.length < 2;
  return mh(n, (o, u) => {
    let l = !1;
    const c = [];
    let d = 0, m = pe;
    const f = () => {
      if (d)
        return;
      m();
      const h = e(r ? c[0] : c, o, u);
      a ? o(h) : m = typeof h == "function" ? h : pe;
    }, g = i.map(
      (h, p) => nl(
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
      ho(g), m(), l = !1;
    };
  });
}
function Cc(t) {
  let e;
  return nl(t, (n) => e = n)(), e;
}
let Za = !1, Ss = Symbol();
function Bn(t, e, n) {
  const r = n[e] ?? (n[e] = {
    store: null,
    source: /* @__PURE__ */ Ku(void 0),
    unsubscribe: pe
  });
  if (r.store !== t && !(Ss in n))
    if (r.unsubscribe(), r.store = t ?? null, t == null)
      r.source.v = void 0, r.unsubscribe = pe;
    else {
      var i = !0;
      r.unsubscribe = nl(t, (a) => {
        i ? r.source.v = a : X(r.source, a);
      }), i = !1;
    }
  return t && Ss in n ? Cc(t) : s(r.source);
}
function Fn(t, e) {
  return t.set(e), e;
}
function rr() {
  const t = {};
  function e() {
    Ho(() => {
      for (var n in t)
        t[n].unsubscribe();
      fo(t, Ss, {
        enumerable: !1,
        value: !0
      });
    });
  }
  return [t, e];
}
function gh(t) {
  var e = Za;
  try {
    return Za = !1, [t(), Za];
  } finally {
    Za = e;
  }
}
const ph = {
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
    ph
  );
}
const bh = {
  get(t, e) {
    let n = t.props.length;
    for (; n--; ) {
      let r = t.props[n];
      if (Li(r) && (r = r()), typeof r == "object" && r !== null && e in r) return r[e];
    }
  },
  set(t, e, n) {
    let r = t.props.length;
    for (; r--; ) {
      let i = t.props[r];
      Li(i) && (i = i());
      const a = Rr(i, e);
      if (a && a.set)
        return a.set(n), !0;
    }
    return !1;
  },
  getOwnPropertyDescriptor(t, e) {
    let n = t.props.length;
    for (; n--; ) {
      let r = t.props[n];
      if (Li(r) && (r = r()), typeof r == "object" && r !== null && e in r) {
        const i = Rr(r, e);
        return i && !i.configurable && (i.configurable = !0), i;
      }
    }
  },
  has(t, e) {
    if (e === $n || e === Pu) return !1;
    for (let n of t.props)
      if (Li(n) && (n = n()), n != null && e in n) return !0;
    return !1;
  },
  ownKeys(t) {
    const e = [];
    for (let n of t.props)
      if (Li(n) && (n = n()), !!n) {
        for (const r in n)
          e.includes(r) || e.push(r);
        for (const r of Object.getOwnPropertySymbols(n))
          e.includes(r) || e.push(r);
      }
    return e;
  }
};
function Je(...t) {
  return new Proxy({ props: t }, bh);
}
function v(t, e, n, r) {
  var E;
  var i = !ea || (n & 2) !== 0, a = (n & 8) !== 0, o = (n & 16) !== 0, u = (
    /** @type {V} */
    r
  ), l = !0, c = () => (l && (l = !1, u = o ? Gn(
    /** @type {() => V} */
    r
  ) : (
    /** @type {V} */
    r
  )), u), d;
  if (a) {
    var m = $n in t || Pu in t;
    d = ((E = Rr(t, e)) == null ? void 0 : E.set) ?? (m && e in t ? (_) => t[e] = _ : void 0);
  }
  var f, g = !1;
  a ? [f, g] = gh(() => (
    /** @type {V} */
    t[e]
  )) : f = /** @type {V} */
  t[e], f === void 0 && r !== void 0 && (f = c(), d && (i && ef(), d(f)));
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
  var b = !1, y = (n & 1 ? Fa : Xs)(() => (b = !1, h()));
  a && s(y);
  var S = (
    /** @type {Effect} */
    We
  );
  return (
    /** @type {() => V} */
    function(_, A) {
      if (arguments.length > 0) {
        const I = A ? s(y) : i && a ? Ie(_) : _;
        return X(y, I), b = !0, u !== void 0 && (u = I), _;
      }
      return gi && b || S.f & vi ? y.v : s(y);
    }
  );
}
const _h = "5";
var Lu;
typeof window < "u" && ((Lu = window.__svelte ?? (window.__svelte = {})).v ?? (Lu.v = /* @__PURE__ */ new Set())).add(_h);
function yh(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var Ih = function(e) {
  return Eh(e) && !Sh(e);
};
function Eh(t) {
  return !!t && typeof t == "object";
}
function Sh(t) {
  var e = Object.prototype.toString.call(t);
  return e === "[object RegExp]" || e === "[object Date]" || Th(t);
}
var Ah = typeof Symbol == "function" && Symbol.for, Ch = Ah ? Symbol.for("react.element") : 60103;
function Th(t) {
  return t.$$typeof === Ch;
}
function xh(t) {
  return Array.isArray(t) ? [] : {};
}
function Oa(t, e) {
  return e.clone !== !1 && e.isMergeableObject(t) ? Ki(xh(t), t, e) : t;
}
function wh(t, e, n) {
  return t.concat(e).map(function(r) {
    return Oa(r, n);
  });
}
function Lh(t, e) {
  if (!e.customMerge)
    return Ki;
  var n = e.customMerge(t);
  return typeof n == "function" ? n : Ki;
}
function Oh(t) {
  return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(t).filter(function(e) {
    return Object.propertyIsEnumerable.call(t, e);
  }) : [];
}
function Bl(t) {
  return Object.keys(t).concat(Oh(t));
}
function Tc(t, e) {
  try {
    return e in t;
  } catch {
    return !1;
  }
}
function Rh(t, e) {
  return Tc(t, e) && !(Object.hasOwnProperty.call(t, e) && Object.propertyIsEnumerable.call(t, e));
}
function Dh(t, e, n) {
  var r = {};
  return n.isMergeableObject(t) && Bl(t).forEach(function(i) {
    r[i] = Oa(t[i], n);
  }), Bl(e).forEach(function(i) {
    Rh(t, i) || (Tc(t, i) && n.isMergeableObject(e[i]) ? r[i] = Lh(i, n)(t[i], e[i], n) : r[i] = Oa(e[i], n));
  }), r;
}
function Ki(t, e, n) {
  n = n || {}, n.arrayMerge = n.arrayMerge || wh, n.isMergeableObject = n.isMergeableObject || Ih, n.cloneUnlessOtherwiseSpecified = Oa;
  var r = Array.isArray(e), i = Array.isArray(t), a = r === i;
  return a ? r ? n.arrayMerge(t, e, n) : Dh(t, e, n) : Oa(e, n);
}
Ki.all = function(e, n) {
  if (!Array.isArray(e))
    throw new Error("first argument should be an array");
  return e.reduce(function(r, i) {
    return Ki(r, i, n);
  }, {});
};
var Mh = Ki, Ph = Mh;
const Hh = /* @__PURE__ */ yh(Ph);
var As = function(t, e) {
  return As = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, r) {
    n.__proto__ = r;
  } || function(n, r) {
    for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (n[i] = r[i]);
  }, As(t, e);
};
function et(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  As(t, e);
  function n() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : (n.prototype = e.prototype, new n());
}
var be = function() {
  return be = Object.assign || function(e) {
    for (var n, r = 1, i = arguments.length; r < i; r++) {
      n = arguments[r];
      for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, be.apply(this, arguments);
};
function Nh(t, e) {
  var n = {};
  for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(t); i < r.length; i++)
      e.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[i]) && (n[r[i]] = t[r[i]]);
  return n;
}
function xc(t, e, n, r) {
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
function rl(t, e) {
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
function Wt(t) {
  var e = typeof Symbol == "function" && Symbol.iterator, n = e && t[e], r = 0;
  if (n) return n.call(t);
  if (t && typeof t.length == "number") return {
    next: function() {
      return t && r >= t.length && (t = void 0), { value: t && t[r++], done: !t };
    }
  };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function Xi(t, e) {
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
function li(t, e, n) {
  if (n || arguments.length === 2) for (var r = 0, i = e.length, a; r < i; r++)
    (a || !(r in e)) && (a || (a = Array.prototype.slice.call(e, 0, r)), a[r] = e[r]);
  return t.concat(a || Array.prototype.slice.call(e));
}
function Pi(t) {
  return this instanceof Pi ? (this.v = t, this) : new Pi(t);
}
function Uh(t, e, n) {
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
    g.value instanceof Pi ? Promise.resolve(g.value.v).then(d, m) : f(a[0][2], g);
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
function Fh(t) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var e = t[Symbol.asyncIterator], n;
  return e ? e.call(t) : (t = typeof Wt == "function" ? Wt(t) : t[Symbol.iterator](), n = {}, r("next"), r("throw"), r("return"), n[Symbol.asyncIterator] = function() {
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
function Zo(t, e) {
  var n = e && e.cache ? e.cache : Wh, r = e && e.serializer ? e.serializer : jh, i = e && e.strategy ? e.strategy : Vh;
  return i(t, {
    cache: n,
    serializer: r
  });
}
function kh(t) {
  return t == null || typeof t == "number" || typeof t == "boolean";
}
function Bh(t, e, n, r) {
  var i = kh(r) ? r : n(r), a = e.get(i);
  return typeof a > "u" && (a = t.call(this, r), e.set(i, a)), a;
}
function wc(t, e, n) {
  var r = Array.prototype.slice.call(arguments, 3), i = n(r), a = e.get(i);
  return typeof a > "u" && (a = t.apply(this, r), e.set(i, a)), a;
}
function Lc(t, e, n, r, i) {
  return n.bind(e, t, r, i);
}
function Vh(t, e) {
  var n = t.length === 1 ? Bh : wc;
  return Lc(t, this, n, e.cache.create(), e.serializer);
}
function Gh(t, e) {
  return Lc(t, this, wc, e.cache.create(), e.serializer);
}
var jh = function() {
  return JSON.stringify(arguments);
}, qh = (
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
), Wh = {
  create: function() {
    return new qh();
  }
}, Yo = {
  variadic: Gh
}, Ye;
(function(t) {
  t[t.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", t[t.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", t[t.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", t[t.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", t[t.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", t[t.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", t[t.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", t[t.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", t[t.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", t[t.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", t[t.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", t[t.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", t[t.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", t[t.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", t[t.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", t[t.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", t[t.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", t[t.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", t[t.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", t[t.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", t[t.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", t[t.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", t[t.INVALID_TAG = 23] = "INVALID_TAG", t[t.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", t[t.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", t[t.UNCLOSED_TAG = 27] = "UNCLOSED_TAG";
})(Ye || (Ye = {}));
var bt;
(function(t) {
  t[t.literal = 0] = "literal", t[t.argument = 1] = "argument", t[t.number = 2] = "number", t[t.date = 3] = "date", t[t.time = 4] = "time", t[t.select = 5] = "select", t[t.plural = 6] = "plural", t[t.pound = 7] = "pound", t[t.tag = 8] = "tag";
})(bt || (bt = {}));
var Zi;
(function(t) {
  t[t.number = 0] = "number", t[t.dateTime = 1] = "dateTime";
})(Zi || (Zi = {}));
function Vl(t) {
  return t.type === bt.literal;
}
function zh(t) {
  return t.type === bt.argument;
}
function Oc(t) {
  return t.type === bt.number;
}
function Rc(t) {
  return t.type === bt.date;
}
function Dc(t) {
  return t.type === bt.time;
}
function Mc(t) {
  return t.type === bt.select;
}
function Pc(t) {
  return t.type === bt.plural;
}
function Kh(t) {
  return t.type === bt.pound;
}
function Hc(t) {
  return t.type === bt.tag;
}
function Nc(t) {
  return !!(t && typeof t == "object" && t.type === Zi.number);
}
function Cs(t) {
  return !!(t && typeof t == "object" && t.type === Zi.dateTime);
}
var Uc = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/, Xh = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
function Zh(t) {
  var e = {};
  return t.replace(Xh, function(n) {
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
var Yh = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
function Qh(t) {
  if (t.length === 0)
    throw new Error("Number skeleton cannot be empty");
  for (var e = t.split(Yh).filter(function(f) {
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
function Jh(t) {
  return t.replace(/^(.*?)-/, "");
}
var Gl = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g, Fc = /^(@+)?(\+|#+)?[rs]?$/g, $h = /(\*)(0+)|(#+)(0+)|(0+)/g, kc = /^(0+)$/;
function jl(t) {
  var e = {};
  return t[t.length - 1] === "r" ? e.roundingPriority = "morePrecision" : t[t.length - 1] === "s" && (e.roundingPriority = "lessPrecision"), t.replace(Fc, function(n, r, i) {
    return typeof i != "string" ? (e.minimumSignificantDigits = r.length, e.maximumSignificantDigits = r.length) : i === "+" ? e.minimumSignificantDigits = r.length : r[0] === "#" ? e.maximumSignificantDigits = r.length : (e.minimumSignificantDigits = r.length, e.maximumSignificantDigits = r.length + (typeof i == "string" ? i.length : 0)), "";
  }), e;
}
function Bc(t) {
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
function ev(t) {
  var e;
  if (t[0] === "E" && t[1] === "E" ? (e = {
    notation: "engineering"
  }, t = t.slice(2)) : t[0] === "E" && (e = {
    notation: "scientific"
  }, t = t.slice(1)), e) {
    var n = t.slice(0, 2);
    if (n === "+!" ? (e.signDisplay = "always", t = t.slice(2)) : n === "+?" && (e.signDisplay = "exceptZero", t = t.slice(2)), !kc.test(t))
      throw new Error("Malformed concise eng/scientific notation");
    e.minimumIntegerDigits = t.length;
  }
  return e;
}
function ql(t) {
  var e = {}, n = Bc(t);
  return n || e;
}
function tv(t) {
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
        e.style = "unit", e.unit = Jh(i.options[0]);
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
        e = be(be(be({}, e), { notation: "scientific" }), i.options.reduce(function(l, c) {
          return be(be({}, l), ql(c));
        }, {}));
        continue;
      case "engineering":
        e = be(be(be({}, e), { notation: "engineering" }), i.options.reduce(function(l, c) {
          return be(be({}, l), ql(c));
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
        i.options[0].replace($h, function(l, c, d, m, f, g) {
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
    if (kc.test(i.stem)) {
      e.minimumIntegerDigits = i.stem.length;
      continue;
    }
    if (Gl.test(i.stem)) {
      if (i.options.length > 1)
        throw new RangeError("Fraction-precision stems only accept a single optional option");
      i.stem.replace(Gl, function(l, c, d, m, f, g) {
        return d === "*" ? e.minimumFractionDigits = c.length : m && m[0] === "#" ? e.maximumFractionDigits = m.length : f && g ? (e.minimumFractionDigits = f.length, e.maximumFractionDigits = f.length + g.length) : (e.minimumFractionDigits = c.length, e.maximumFractionDigits = c.length), "";
      });
      var a = i.options[0];
      a === "w" ? e = be(be({}, e), { trailingZeroDisplay: "stripIfInteger" }) : a && (e = be(be({}, e), jl(a)));
      continue;
    }
    if (Fc.test(i.stem)) {
      e = be(be({}, e), jl(i.stem));
      continue;
    }
    var o = Bc(i.stem);
    o && (e = be(be({}, e), o));
    var u = ev(i.stem);
    u && (e = be(be({}, e), u));
  }
  return e;
}
var Ya = {
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
function nv(t, e) {
  for (var n = "", r = 0; r < t.length; r++) {
    var i = t.charAt(r);
    if (i === "j") {
      for (var a = 0; r + 1 < t.length && t.charAt(r + 1) === i; )
        a++, r++;
      var o = 1 + (a & 1), u = a < 2 ? 1 : 3 + (a >> 1), l = "a", c = rv(e);
      for ((c == "H" || c == "k") && (u = 0); u-- > 0; )
        n += l;
      for (; o-- > 0; )
        n = c + n;
    } else i === "J" ? n += "H" : n += i;
  }
  return n;
}
function rv(t) {
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
  var i = Ya[r || ""] || Ya[n || ""] || Ya["".concat(n, "-001")] || Ya["001"];
  return i[0];
}
var Qo, iv = new RegExp("^".concat(Uc.source, "*")), av = new RegExp("".concat(Uc.source, "*$"));
function Qe(t, e) {
  return { start: t, end: e };
}
var ov = !!String.prototype.startsWith && "_a".startsWith("a", 1), sv = !!String.fromCodePoint, lv = !!Object.fromEntries, uv = !!String.prototype.codePointAt, cv = !!String.prototype.trimStart, dv = !!String.prototype.trimEnd, fv = !!Number.isSafeInteger, hv = fv ? Number.isSafeInteger : function(t) {
  return typeof t == "number" && isFinite(t) && Math.floor(t) === t && Math.abs(t) <= 9007199254740991;
}, Ts = !0;
try {
  var vv = Gc("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  Ts = ((Qo = vv.exec("a")) === null || Qo === void 0 ? void 0 : Qo[0]) === "a";
} catch {
  Ts = !1;
}
var Wl = ov ? (
  // Native
  function(e, n, r) {
    return e.startsWith(n, r);
  }
) : (
  // For IE11
  function(e, n, r) {
    return e.slice(r, r + n.length) === n;
  }
), xs = sv ? String.fromCodePoint : (
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
), zl = (
  // native
  lv ? Object.fromEntries : (
    // Ponyfill
    function(e) {
      for (var n = {}, r = 0, i = e; r < i.length; r++) {
        var a = i[r], o = a[0], u = a[1];
        n[o] = u;
      }
      return n;
    }
  )
), Vc = uv ? (
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
), mv = cv ? (
  // Native
  function(e) {
    return e.trimStart();
  }
) : (
  // Ponyfill
  function(e) {
    return e.replace(iv, "");
  }
), gv = dv ? (
  // Native
  function(e) {
    return e.trimEnd();
  }
) : (
  // Ponyfill
  function(e) {
    return e.replace(av, "");
  }
);
function Gc(t, e) {
  return new RegExp(t, e);
}
var ws;
if (Ts) {
  var Kl = Gc("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  ws = function(e, n) {
    var r;
    Kl.lastIndex = n;
    var i = Kl.exec(e);
    return (r = i[1]) !== null && r !== void 0 ? r : "";
  };
} else
  ws = function(e, n) {
    for (var r = []; ; ) {
      var i = Vc(e, n);
      if (i === void 0 || jc(i) || yv(i))
        break;
      r.push(i), n += i >= 65536 ? 2 : 1;
    }
    return xs.apply(void 0, r);
  };
var pv = (
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
              location: Qe(u, this.clonePosition())
            });
          } else if (a === 60 && !this.ignoreTag && this.peek() === 47) {
            if (r)
              break;
            return this.error(Ye.UNMATCHED_CLOSING_TAG, Qe(this.clonePosition(), this.clonePosition()));
          } else if (a === 60 && !this.ignoreTag && Ls(this.peek() || 0)) {
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
            location: Qe(r, this.clonePosition())
          },
          err: null
        };
      if (this.bumpIf(">")) {
        var a = this.parseMessage(e + 1, n, !0);
        if (a.err)
          return a;
        var o = a.val, u = this.clonePosition();
        if (this.bumpIf("</")) {
          if (this.isEOF() || !Ls(this.char()))
            return this.error(Ye.INVALID_TAG, Qe(u, this.clonePosition()));
          var l = this.clonePosition(), c = this.parseTagName();
          return i !== c ? this.error(Ye.UNMATCHED_CLOSING_TAG, Qe(l, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
            val: {
              type: bt.tag,
              value: i,
              children: o,
              location: Qe(r, this.clonePosition())
            },
            err: null
          } : this.error(Ye.INVALID_TAG, Qe(u, this.clonePosition())));
        } else
          return this.error(Ye.UNCLOSED_TAG, Qe(r, this.clonePosition()));
      } else
        return this.error(Ye.INVALID_TAG, Qe(r, this.clonePosition()));
    }, t.prototype.parseTagName = function() {
      var e = this.offset();
      for (this.bump(); !this.isEOF() && _v(this.char()); )
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
      var l = Qe(r, this.clonePosition());
      return {
        val: { type: bt.literal, value: i, location: l },
        err: null
      };
    }, t.prototype.tryParseLeftAngleBracket = function() {
      return !this.isEOF() && this.char() === 60 && (this.ignoreTag || // If at the opening tag or closing tag position, bail.
      !bv(this.peek() || 0)) ? (this.bump(), "<") : null;
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
      return xs.apply(void 0, n);
    }, t.prototype.tryParseUnquoted = function(e, n) {
      if (this.isEOF())
        return null;
      var r = this.char();
      return r === 60 || r === 123 || r === 35 && (n === "plural" || n === "selectordinal") || r === 125 && e > 0 ? null : (this.bump(), xs(r));
    }, t.prototype.parseArgument = function(e, n) {
      var r = this.clonePosition();
      if (this.bump(), this.bumpSpace(), this.isEOF())
        return this.error(Ye.EXPECT_ARGUMENT_CLOSING_BRACE, Qe(r, this.clonePosition()));
      if (this.char() === 125)
        return this.bump(), this.error(Ye.EMPTY_ARGUMENT, Qe(r, this.clonePosition()));
      var i = this.parseIdentifierIfPossible().value;
      if (!i)
        return this.error(Ye.MALFORMED_ARGUMENT, Qe(r, this.clonePosition()));
      if (this.bumpSpace(), this.isEOF())
        return this.error(Ye.EXPECT_ARGUMENT_CLOSING_BRACE, Qe(r, this.clonePosition()));
      switch (this.char()) {
        case 125:
          return this.bump(), {
            val: {
              type: bt.argument,
              // value does not include the opening and closing braces.
              value: i,
              location: Qe(r, this.clonePosition())
            },
            err: null
          };
        case 44:
          return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(Ye.EXPECT_ARGUMENT_CLOSING_BRACE, Qe(r, this.clonePosition())) : this.parseArgumentOptions(e, n, i, r);
        default:
          return this.error(Ye.MALFORMED_ARGUMENT, Qe(r, this.clonePosition()));
      }
    }, t.prototype.parseIdentifierIfPossible = function() {
      var e = this.clonePosition(), n = this.offset(), r = ws(this.message, n), i = n + r.length;
      this.bumpTo(i);
      var a = this.clonePosition(), o = Qe(e, a);
      return { value: r, location: o };
    }, t.prototype.parseArgumentOptions = function(e, n, r, i) {
      var a, o = this.clonePosition(), u = this.parseIdentifierIfPossible().value, l = this.clonePosition();
      switch (u) {
        case "":
          return this.error(Ye.EXPECT_ARGUMENT_TYPE, Qe(o, l));
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
            var f = gv(m.val);
            if (f.length === 0)
              return this.error(Ye.EXPECT_ARGUMENT_STYLE, Qe(this.clonePosition(), this.clonePosition()));
            var g = Qe(d, this.clonePosition());
            c = { style: f, styleLocation: g };
          }
          var h = this.tryParseArgumentClose(i);
          if (h.err)
            return h;
          var p = Qe(i, this.clonePosition());
          if (c && Wl(c == null ? void 0 : c.style, "::", 0)) {
            var b = mv(c.style.slice(2));
            if (u === "number") {
              var m = this.parseNumberSkeletonFromString(b, c.styleLocation);
              return m.err ? m : {
                val: { type: bt.number, value: r, location: p, style: m.val },
                err: null
              };
            } else {
              if (b.length === 0)
                return this.error(Ye.EXPECT_DATE_TIME_SKELETON, p);
              var y = b;
              this.locale && (y = nv(b, this.locale));
              var f = {
                type: Zi.dateTime,
                pattern: y,
                location: c.styleLocation,
                parsedOptions: this.shouldParseSkeletons ? Zh(y) : {}
              }, S = u === "date" ? bt.date : bt.time;
              return {
                val: { type: S, value: r, location: p, style: f },
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
          var E = this.clonePosition();
          if (this.bumpSpace(), !this.bumpIf(","))
            return this.error(Ye.EXPECT_SELECT_ARGUMENT_OPTIONS, Qe(E, be({}, E)));
          this.bumpSpace();
          var _ = this.parseIdentifierIfPossible(), A = 0;
          if (u !== "select" && _.value === "offset") {
            if (!this.bumpIf(":"))
              return this.error(Ye.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, Qe(this.clonePosition(), this.clonePosition()));
            this.bumpSpace();
            var m = this.tryParseDecimalInteger(Ye.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, Ye.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);
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
          var O = Qe(i, this.clonePosition());
          return u === "select" ? {
            val: {
              type: bt.select,
              value: r,
              options: zl(I.val),
              location: O
            },
            err: null
          } : {
            val: {
              type: bt.plural,
              value: r,
              options: zl(I.val),
              offset: A,
              pluralType: u === "plural" ? "cardinal" : "ordinal",
              location: O
            },
            err: null
          };
        }
        default:
          return this.error(Ye.INVALID_ARGUMENT_TYPE, Qe(o, l));
      }
    }, t.prototype.tryParseArgumentClose = function(e) {
      return this.isEOF() || this.char() !== 125 ? this.error(Ye.EXPECT_ARGUMENT_CLOSING_BRACE, Qe(e, this.clonePosition())) : (this.bump(), { val: !0, err: null });
    }, t.prototype.parseSimpleArgStyleIfPossible = function() {
      for (var e = 0, n = this.clonePosition(); !this.isEOF(); ) {
        var r = this.char();
        switch (r) {
          case 39: {
            this.bump();
            var i = this.clonePosition();
            if (!this.bumpUntil("'"))
              return this.error(Ye.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, Qe(i, this.clonePosition()));
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
        r = Qh(e);
      } catch {
        return this.error(Ye.INVALID_NUMBER_SKELETON, n);
      }
      return {
        val: {
          type: Zi.number,
          tokens: r,
          location: n,
          parsedOptions: this.shouldParseSkeletons ? tv(r) : {}
        },
        err: null
      };
    }, t.prototype.tryParsePluralOrSelectOptions = function(e, n, r, i) {
      for (var a, o = !1, u = [], l = /* @__PURE__ */ new Set(), c = i.value, d = i.location; ; ) {
        if (c.length === 0) {
          var m = this.clonePosition();
          if (n !== "select" && this.bumpIf("=")) {
            var f = this.tryParseDecimalInteger(Ye.EXPECT_PLURAL_ARGUMENT_SELECTOR, Ye.INVALID_PLURAL_ARGUMENT_SELECTOR);
            if (f.err)
              return f;
            d = Qe(m, this.clonePosition()), c = this.message.slice(m.offset, this.offset());
          } else
            break;
        }
        if (l.has(c))
          return this.error(n === "select" ? Ye.DUPLICATE_SELECT_ARGUMENT_SELECTOR : Ye.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, d);
        c === "other" && (o = !0), this.bumpSpace();
        var g = this.clonePosition();
        if (!this.bumpIf("{"))
          return this.error(n === "select" ? Ye.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : Ye.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, Qe(this.clonePosition(), this.clonePosition()));
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
            location: Qe(g, this.clonePosition())
          }
        ]), l.add(c), this.bumpSpace(), a = this.parseIdentifierIfPossible(), c = a.value, d = a.location;
      }
      return u.length === 0 ? this.error(n === "select" ? Ye.EXPECT_SELECT_ARGUMENT_SELECTOR : Ye.EXPECT_PLURAL_ARGUMENT_SELECTOR, Qe(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !o ? this.error(Ye.MISSING_OTHER_CLAUSE, Qe(this.clonePosition(), this.clonePosition())) : { val: u, err: null };
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
      var l = Qe(i, this.clonePosition());
      return a ? (o *= r, hv(o) ? { val: o, err: null } : this.error(n, l)) : this.error(e, l);
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
      var n = Vc(this.message, e);
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
      if (Wl(this.message, e, this.offset())) {
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
      for (; !this.isEOF() && jc(this.char()); )
        this.bump();
    }, t.prototype.peek = function() {
      if (this.isEOF())
        return null;
      var e = this.char(), n = this.offset(), r = this.message.charCodeAt(n + (e >= 65536 ? 2 : 1));
      return r ?? null;
    }, t;
  }()
);
function Ls(t) {
  return t >= 97 && t <= 122 || t >= 65 && t <= 90;
}
function bv(t) {
  return Ls(t) || t === 47;
}
function _v(t) {
  return t === 45 || t === 46 || t >= 48 && t <= 57 || t === 95 || t >= 97 && t <= 122 || t >= 65 && t <= 90 || t == 183 || t >= 192 && t <= 214 || t >= 216 && t <= 246 || t >= 248 && t <= 893 || t >= 895 && t <= 8191 || t >= 8204 && t <= 8205 || t >= 8255 && t <= 8256 || t >= 8304 && t <= 8591 || t >= 11264 && t <= 12271 || t >= 12289 && t <= 55295 || t >= 63744 && t <= 64975 || t >= 65008 && t <= 65533 || t >= 65536 && t <= 983039;
}
function jc(t) {
  return t >= 9 && t <= 13 || t === 32 || t === 133 || t >= 8206 && t <= 8207 || t === 8232 || t === 8233;
}
function yv(t) {
  return t >= 33 && t <= 35 || t === 36 || t >= 37 && t <= 39 || t === 40 || t === 41 || t === 42 || t === 43 || t === 44 || t === 45 || t >= 46 && t <= 47 || t >= 58 && t <= 59 || t >= 60 && t <= 62 || t >= 63 && t <= 64 || t === 91 || t === 92 || t === 93 || t === 94 || t === 96 || t === 123 || t === 124 || t === 125 || t === 126 || t === 161 || t >= 162 && t <= 165 || t === 166 || t === 167 || t === 169 || t === 171 || t === 172 || t === 174 || t === 176 || t === 177 || t === 182 || t === 187 || t === 191 || t === 215 || t === 247 || t >= 8208 && t <= 8213 || t >= 8214 && t <= 8215 || t === 8216 || t === 8217 || t === 8218 || t >= 8219 && t <= 8220 || t === 8221 || t === 8222 || t === 8223 || t >= 8224 && t <= 8231 || t >= 8240 && t <= 8248 || t === 8249 || t === 8250 || t >= 8251 && t <= 8254 || t >= 8257 && t <= 8259 || t === 8260 || t === 8261 || t === 8262 || t >= 8263 && t <= 8273 || t === 8274 || t === 8275 || t >= 8277 && t <= 8286 || t >= 8592 && t <= 8596 || t >= 8597 && t <= 8601 || t >= 8602 && t <= 8603 || t >= 8604 && t <= 8607 || t === 8608 || t >= 8609 && t <= 8610 || t === 8611 || t >= 8612 && t <= 8613 || t === 8614 || t >= 8615 && t <= 8621 || t === 8622 || t >= 8623 && t <= 8653 || t >= 8654 && t <= 8655 || t >= 8656 && t <= 8657 || t === 8658 || t === 8659 || t === 8660 || t >= 8661 && t <= 8691 || t >= 8692 && t <= 8959 || t >= 8960 && t <= 8967 || t === 8968 || t === 8969 || t === 8970 || t === 8971 || t >= 8972 && t <= 8991 || t >= 8992 && t <= 8993 || t >= 8994 && t <= 9e3 || t === 9001 || t === 9002 || t >= 9003 && t <= 9083 || t === 9084 || t >= 9085 && t <= 9114 || t >= 9115 && t <= 9139 || t >= 9140 && t <= 9179 || t >= 9180 && t <= 9185 || t >= 9186 && t <= 9254 || t >= 9255 && t <= 9279 || t >= 9280 && t <= 9290 || t >= 9291 && t <= 9311 || t >= 9472 && t <= 9654 || t === 9655 || t >= 9656 && t <= 9664 || t === 9665 || t >= 9666 && t <= 9719 || t >= 9720 && t <= 9727 || t >= 9728 && t <= 9838 || t === 9839 || t >= 9840 && t <= 10087 || t === 10088 || t === 10089 || t === 10090 || t === 10091 || t === 10092 || t === 10093 || t === 10094 || t === 10095 || t === 10096 || t === 10097 || t === 10098 || t === 10099 || t === 10100 || t === 10101 || t >= 10132 && t <= 10175 || t >= 10176 && t <= 10180 || t === 10181 || t === 10182 || t >= 10183 && t <= 10213 || t === 10214 || t === 10215 || t === 10216 || t === 10217 || t === 10218 || t === 10219 || t === 10220 || t === 10221 || t === 10222 || t === 10223 || t >= 10224 && t <= 10239 || t >= 10240 && t <= 10495 || t >= 10496 && t <= 10626 || t === 10627 || t === 10628 || t === 10629 || t === 10630 || t === 10631 || t === 10632 || t === 10633 || t === 10634 || t === 10635 || t === 10636 || t === 10637 || t === 10638 || t === 10639 || t === 10640 || t === 10641 || t === 10642 || t === 10643 || t === 10644 || t === 10645 || t === 10646 || t === 10647 || t === 10648 || t >= 10649 && t <= 10711 || t === 10712 || t === 10713 || t === 10714 || t === 10715 || t >= 10716 && t <= 10747 || t === 10748 || t === 10749 || t >= 10750 && t <= 11007 || t >= 11008 && t <= 11055 || t >= 11056 && t <= 11076 || t >= 11077 && t <= 11078 || t >= 11079 && t <= 11084 || t >= 11085 && t <= 11123 || t >= 11124 && t <= 11125 || t >= 11126 && t <= 11157 || t === 11158 || t >= 11159 && t <= 11263 || t >= 11776 && t <= 11777 || t === 11778 || t === 11779 || t === 11780 || t === 11781 || t >= 11782 && t <= 11784 || t === 11785 || t === 11786 || t === 11787 || t === 11788 || t === 11789 || t >= 11790 && t <= 11798 || t === 11799 || t >= 11800 && t <= 11801 || t === 11802 || t === 11803 || t === 11804 || t === 11805 || t >= 11806 && t <= 11807 || t === 11808 || t === 11809 || t === 11810 || t === 11811 || t === 11812 || t === 11813 || t === 11814 || t === 11815 || t === 11816 || t === 11817 || t >= 11818 && t <= 11822 || t === 11823 || t >= 11824 && t <= 11833 || t >= 11834 && t <= 11835 || t >= 11836 && t <= 11839 || t === 11840 || t === 11841 || t === 11842 || t >= 11843 && t <= 11855 || t >= 11856 && t <= 11857 || t === 11858 || t >= 11859 && t <= 11903 || t >= 12289 && t <= 12291 || t === 12296 || t === 12297 || t === 12298 || t === 12299 || t === 12300 || t === 12301 || t === 12302 || t === 12303 || t === 12304 || t === 12305 || t >= 12306 && t <= 12307 || t === 12308 || t === 12309 || t === 12310 || t === 12311 || t === 12312 || t === 12313 || t === 12314 || t === 12315 || t === 12316 || t === 12317 || t >= 12318 && t <= 12319 || t === 12320 || t === 12336 || t === 64830 || t === 64831 || t >= 65093 && t <= 65094;
}
function Os(t) {
  t.forEach(function(e) {
    if (delete e.location, Mc(e) || Pc(e))
      for (var n in e.options)
        delete e.options[n].location, Os(e.options[n].value);
    else Oc(e) && Nc(e.style) || (Rc(e) || Dc(e)) && Cs(e.style) ? delete e.style.location : Hc(e) && Os(e.children);
  });
}
function Iv(t, e) {
  e === void 0 && (e = {}), e = be({ shouldParseSkeletons: !0, requiresOtherClause: !0 }, e);
  var n = new pv(t, e).parse();
  if (n.err) {
    var r = SyntaxError(Ye[n.err.kind]);
    throw r.location = n.err.location, r.originalMessage = n.err.message, r;
  }
  return e != null && e.captureLocation || Os(n.val), n.val;
}
var Yi;
(function(t) {
  t.MISSING_VALUE = "MISSING_VALUE", t.INVALID_VALUE = "INVALID_VALUE", t.MISSING_INTL_API = "MISSING_INTL_API";
})(Yi || (Yi = {}));
var Fo = (
  /** @class */
  function(t) {
    et(e, t);
    function e(n, r, i) {
      var a = t.call(this, n) || this;
      return a.code = r, a.originalMessage = i, a;
    }
    return e.prototype.toString = function() {
      return "[formatjs Error: ".concat(this.code, "] ").concat(this.message);
    }, e;
  }(Error)
), Xl = (
  /** @class */
  function(t) {
    et(e, t);
    function e(n, r, i, a) {
      return t.call(this, 'Invalid values for "'.concat(n, '": "').concat(r, '". Options are "').concat(Object.keys(i).join('", "'), '"'), Yi.INVALID_VALUE, a) || this;
    }
    return e;
  }(Fo)
), Ev = (
  /** @class */
  function(t) {
    et(e, t);
    function e(n, r, i) {
      return t.call(this, 'Value for "'.concat(n, '" must be of type ').concat(r), Yi.INVALID_VALUE, i) || this;
    }
    return e;
  }(Fo)
), Sv = (
  /** @class */
  function(t) {
    et(e, t);
    function e(n, r) {
      return t.call(this, 'The intl string context variable "'.concat(n, '" was not provided to the string "').concat(r, '"'), Yi.MISSING_VALUE, r) || this;
    }
    return e;
  }(Fo)
), $t;
(function(t) {
  t[t.literal = 0] = "literal", t[t.object = 1] = "object";
})($t || ($t = {}));
function Av(t) {
  return t.length < 2 ? t : t.reduce(function(e, n) {
    var r = e[e.length - 1];
    return !r || r.type !== $t.literal || n.type !== $t.literal ? e.push(n) : r.value += n.value, e;
  }, []);
}
function Cv(t) {
  return typeof t == "function";
}
function uo(t, e, n, r, i, a, o) {
  if (t.length === 1 && Vl(t[0]))
    return [
      {
        type: $t.literal,
        value: t[0].value
      }
    ];
  for (var u = [], l = 0, c = t; l < c.length; l++) {
    var d = c[l];
    if (Vl(d)) {
      u.push({
        type: $t.literal,
        value: d.value
      });
      continue;
    }
    if (Kh(d)) {
      typeof a == "number" && u.push({
        type: $t.literal,
        value: n.getNumberFormat(e).format(a)
      });
      continue;
    }
    var m = d.value;
    if (!(i && m in i))
      throw new Sv(m, o);
    var f = i[m];
    if (zh(d)) {
      (!f || typeof f == "string" || typeof f == "number") && (f = typeof f == "string" || typeof f == "number" ? String(f) : ""), u.push({
        type: typeof f == "string" ? $t.literal : $t.object,
        value: f
      });
      continue;
    }
    if (Rc(d)) {
      var g = typeof d.style == "string" ? r.date[d.style] : Cs(d.style) ? d.style.parsedOptions : void 0;
      u.push({
        type: $t.literal,
        value: n.getDateTimeFormat(e, g).format(f)
      });
      continue;
    }
    if (Dc(d)) {
      var g = typeof d.style == "string" ? r.time[d.style] : Cs(d.style) ? d.style.parsedOptions : r.time.medium;
      u.push({
        type: $t.literal,
        value: n.getDateTimeFormat(e, g).format(f)
      });
      continue;
    }
    if (Oc(d)) {
      var g = typeof d.style == "string" ? r.number[d.style] : Nc(d.style) ? d.style.parsedOptions : void 0;
      g && g.scale && (f = f * (g.scale || 1)), u.push({
        type: $t.literal,
        value: n.getNumberFormat(e, g).format(f)
      });
      continue;
    }
    if (Hc(d)) {
      var h = d.children, p = d.value, b = i[p];
      if (!Cv(b))
        throw new Ev(p, "function", o);
      var y = uo(h, e, n, r, i, a), S = b(y.map(function(A) {
        return A.value;
      }));
      Array.isArray(S) || (S = [S]), u.push.apply(u, S.map(function(A) {
        return {
          type: typeof A == "string" ? $t.literal : $t.object,
          value: A
        };
      }));
    }
    if (Mc(d)) {
      var E = d.options[f] || d.options.other;
      if (!E)
        throw new Xl(d.value, f, Object.keys(d.options), o);
      u.push.apply(u, uo(E.value, e, n, r, i));
      continue;
    }
    if (Pc(d)) {
      var E = d.options["=".concat(f)];
      if (!E) {
        if (!Intl.PluralRules)
          throw new Fo(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`, Yi.MISSING_INTL_API, o);
        var _ = n.getPluralRules(e, { type: d.pluralType }).select(f - (d.offset || 0));
        E = d.options[_] || d.options.other;
      }
      if (!E)
        throw new Xl(d.value, f, Object.keys(d.options), o);
      u.push.apply(u, uo(E.value, e, n, r, i, f - (d.offset || 0)));
      continue;
    }
  }
  return Av(u);
}
function Tv(t, e) {
  return e ? be(be(be({}, t || {}), e || {}), Object.keys(t).reduce(function(n, r) {
    return n[r] = be(be({}, t[r]), e[r] || {}), n;
  }, {})) : t;
}
function xv(t, e) {
  return e ? Object.keys(t).reduce(function(n, r) {
    return n[r] = Tv(t[r], e[r]), n;
  }, be({}, t)) : t;
}
function Jo(t) {
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
function wv(t) {
  return t === void 0 && (t = {
    number: {},
    dateTime: {},
    pluralRules: {}
  }), {
    getNumberFormat: Zo(function() {
      for (var e, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((e = Intl.NumberFormat).bind.apply(e, li([void 0], n, !1)))();
    }, {
      cache: Jo(t.number),
      strategy: Yo.variadic
    }),
    getDateTimeFormat: Zo(function() {
      for (var e, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((e = Intl.DateTimeFormat).bind.apply(e, li([void 0], n, !1)))();
    }, {
      cache: Jo(t.dateTime),
      strategy: Yo.variadic
    }),
    getPluralRules: Zo(function() {
      for (var e, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((e = Intl.PluralRules).bind.apply(e, li([void 0], n, !1)))();
    }, {
      cache: Jo(t.pluralRules),
      strategy: Yo.variadic
    })
  };
}
var qc = (
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
          return !m.length || f.type !== $t.literal || typeof m[m.length - 1] != "string" ? m.push(f.value) : m[m.length - 1] += f.value, m;
        }, []);
        return d.length <= 1 ? d[0] || "" : d;
      }, this.formatToParts = function(l) {
        return uo(a.ast, a.locales, a.formatters, a.formats, l, void 0, a.message);
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
        var u = Nh(o, ["formatters"]);
        this.ast = t.__parse(e, be(be({}, u), { locale: this.resolvedLocale }));
      } else
        this.ast = e;
      if (!Array.isArray(this.ast))
        throw new TypeError("A message must be provided as a String or AST.");
      this.formats = xv(t.formats, r), this.formatters = i && i.formatters || wv(this.formatterCache);
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
    }, t.__parse = Iv, t.formats = {
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
function Lv(t, e) {
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
const Or = {}, Ov = (t, e, n) => n && (e in Or || (Or[e] = {}), t in Or[e] || (Or[e][t] = n), n), Wc = (t, e) => {
  if (e == null)
    return;
  if (e in Or && t in Or[e])
    return Or[e][t];
  const n = Ga(e);
  for (let r = 0; r < n.length; r++) {
    const i = n[r], a = Dv(i, t);
    if (a)
      return Ov(t, e, a);
  }
};
let il;
const Va = Bt({});
function Rv(t) {
  return il[t] || null;
}
function zc(t) {
  return t in il;
}
function Dv(t, e) {
  if (!zc(t))
    return null;
  const n = Rv(t);
  return Lv(n, e);
}
function Mv(t) {
  if (t == null)
    return;
  const e = Ga(t);
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    if (zc(r))
      return r;
  }
}
function Kc(t, ...e) {
  delete Or[t], Va.update((n) => (n[t] = Hh.all([n[t] || {}, ...e]), n));
}
na(
  [Va],
  ([t]) => Object.keys(t)
);
Va.subscribe((t) => il = t);
const co = {};
function Pv(t, e) {
  co[t].delete(e), co[t].size === 0 && delete co[t];
}
function Xc(t) {
  return co[t];
}
function Hv(t) {
  return Ga(t).map((e) => {
    const n = Xc(e);
    return [e, n ? [...n] : []];
  }).filter(([, e]) => e.length > 0);
}
function _o(t) {
  return t == null ? !1 : Ga(t).some(
    (e) => {
      var n;
      return (n = Xc(e)) == null ? void 0 : n.size;
    }
  );
}
function Nv(t, e) {
  return Promise.all(
    e.map((r) => (Pv(t, r), r().then((i) => i.default || i)))
  ).then((r) => Kc(t, ...r));
}
const ha = {};
function Zc(t) {
  if (!_o(t))
    return t in ha ? ha[t] : Promise.resolve();
  const e = Hv(t);
  return ha[t] = Promise.all(
    e.map(
      ([n, r]) => Nv(n, r)
    )
  ).then(() => {
    if (_o(t))
      return Zc(t);
    delete ha[t];
  }), ha[t];
}
var Zl = Object.getOwnPropertySymbols, Uv = Object.prototype.hasOwnProperty, Fv = Object.prototype.propertyIsEnumerable, kv = (t, e) => {
  var n = {};
  for (var r in t)
    Uv.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && Zl)
    for (var r of Zl(t))
      e.indexOf(r) < 0 && Fv.call(t, r) && (n[r] = t[r]);
  return n;
};
const Bv = {
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
function Vv({ locale: t, id: e }) {
  console.warn(
    `[svelte-i18n] The message "${e}" was not found in "${Ga(
      t
    ).join('", "')}".${_o(kr()) ? `

Note: there are at least one loader still registered to this locale that wasn't executed.` : ""}`
  );
}
const Gv = {
  fallbackLocale: null,
  loadingDelay: 200,
  formats: Bv,
  warnOnMissingMessages: !0,
  handleMissingMessage: void 0,
  ignoreTag: !0
}, Ea = Gv;
function Qi() {
  return Ea;
}
function jv(t) {
  const e = t, { formats: n } = e, r = kv(e, ["formats"]);
  let i = t.fallbackLocale;
  if (t.initialLocale)
    try {
      qc.resolveLocale(t.initialLocale) && (i = t.initialLocale);
    } catch {
      console.warn(
        `[svelte-i18n] The initial locale "${t.initialLocale}" is not a valid locale.`
      );
    }
  return r.warnOnMissingMessages && (delete r.warnOnMissingMessages, r.handleMissingMessage == null ? r.handleMissingMessage = Vv : console.warn(
    '[svelte-i18n] The "warnOnMissingMessages" option is deprecated. Please use the "handleMissingMessage" option instead.'
  )), Object.assign(Ea, r, { initialLocale: i }), n && ("number" in n && Object.assign(Ea.formats.number, n.number), "date" in n && Object.assign(Ea.formats.date, n.date), "time" in n && Object.assign(Ea.formats.time, n.time)), pi.set(i);
}
const $o = Bt(!1);
var qv = Object.defineProperty, Wv = Object.defineProperties, zv = Object.getOwnPropertyDescriptors, Yl = Object.getOwnPropertySymbols, Kv = Object.prototype.hasOwnProperty, Xv = Object.prototype.propertyIsEnumerable, Ql = (t, e, n) => e in t ? qv(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n, Zv = (t, e) => {
  for (var n in e || (e = {}))
    Kv.call(e, n) && Ql(t, n, e[n]);
  if (Yl)
    for (var n of Yl(e))
      Xv.call(e, n) && Ql(t, n, e[n]);
  return t;
}, Yv = (t, e) => Wv(t, zv(e));
let Rs;
const yo = Bt(null);
function Jl(t) {
  return t.split("-").map((e, n, r) => r.slice(0, n + 1).join("-")).reverse();
}
function Ga(t, e = Qi().fallbackLocale) {
  const n = Jl(t);
  return e ? [.../* @__PURE__ */ new Set([...n, ...Jl(e)])] : n;
}
function kr() {
  return Rs ?? void 0;
}
yo.subscribe((t) => {
  Rs = t ?? void 0, typeof window < "u" && t != null && document.documentElement.setAttribute("lang", t);
});
const Qv = (t) => {
  if (t && Mv(t) && _o(t)) {
    const { loadingDelay: e } = Qi();
    let n;
    return typeof window < "u" && kr() != null && e ? n = window.setTimeout(
      () => $o.set(!0),
      e
    ) : $o.set(!0), Zc(t).then(() => {
      yo.set(t);
    }).finally(() => {
      clearTimeout(n), $o.set(!1);
    });
  }
  return yo.set(t);
}, pi = Yv(Zv({}, yo), {
  set: Qv
}), Jv = () => typeof window > "u" ? null : window.navigator.language || window.navigator.languages[0], ko = (t) => {
  const e = /* @__PURE__ */ Object.create(null);
  return (r) => {
    const i = JSON.stringify(r);
    return i in e ? e[i] : e[i] = t(r);
  };
};
var $v = Object.defineProperty, Io = Object.getOwnPropertySymbols, Yc = Object.prototype.hasOwnProperty, Qc = Object.prototype.propertyIsEnumerable, $l = (t, e, n) => e in t ? $v(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n, al = (t, e) => {
  for (var n in e || (e = {}))
    Yc.call(e, n) && $l(t, n, e[n]);
  if (Io)
    for (var n of Io(e))
      Qc.call(e, n) && $l(t, n, e[n]);
  return t;
}, ra = (t, e) => {
  var n = {};
  for (var r in t)
    Yc.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && Io)
    for (var r of Io(t))
      e.indexOf(r) < 0 && Qc.call(t, r) && (n[r] = t[r]);
  return n;
};
const Ra = (t, e) => {
  const { formats: n } = Qi();
  if (t in n && e in n[t])
    return n[t][e];
  throw new Error(`[svelte-i18n] Unknown "${e}" ${t} format.`);
}, em = ko(
  (t) => {
    var e = t, { locale: n, format: r } = e, i = ra(e, ["locale", "format"]);
    if (n == null)
      throw new Error('[svelte-i18n] A "locale" must be set to format numbers');
    return r && (i = Ra("number", r)), new Intl.NumberFormat(n, i);
  }
), tm = ko(
  (t) => {
    var e = t, { locale: n, format: r } = e, i = ra(e, ["locale", "format"]);
    if (n == null)
      throw new Error('[svelte-i18n] A "locale" must be set to format dates');
    return r ? i = Ra("date", r) : Object.keys(i).length === 0 && (i = Ra("date", "short")), new Intl.DateTimeFormat(n, i);
  }
), nm = ko(
  (t) => {
    var e = t, { locale: n, format: r } = e, i = ra(e, ["locale", "format"]);
    if (n == null)
      throw new Error(
        '[svelte-i18n] A "locale" must be set to format time values'
      );
    return r ? i = Ra("time", r) : Object.keys(i).length === 0 && (i = Ra("time", "short")), new Intl.DateTimeFormat(n, i);
  }
), rm = (t = {}) => {
  var e = t, {
    locale: n = kr()
  } = e, r = ra(e, [
    "locale"
  ]);
  return em(al({ locale: n }, r));
}, im = (t = {}) => {
  var e = t, {
    locale: n = kr()
  } = e, r = ra(e, [
    "locale"
  ]);
  return tm(al({ locale: n }, r));
}, am = (t = {}) => {
  var e = t, {
    locale: n = kr()
  } = e, r = ra(e, [
    "locale"
  ]);
  return nm(al({ locale: n }, r));
}, om = ko(
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  (t, e = kr()) => new qc(t, e, Qi().formats, {
    ignoreTag: Qi().ignoreTag
  })
), sm = (t, e = {}) => {
  var n, r, i, a;
  let o = e;
  typeof t == "object" && (o = t, t = o.id);
  const {
    values: u,
    locale: l = kr(),
    default: c
  } = o;
  if (l == null)
    throw new Error(
      "[svelte-i18n] Cannot format a message without first setting the initial locale."
    );
  let d = Wc(t, l);
  if (!d)
    d = (a = (i = (r = (n = Qi()).handleMissingMessage) == null ? void 0 : r.call(n, { locale: l, id: t, defaultValue: c })) != null ? i : c) != null ? a : t;
  else if (typeof d != "string")
    return console.warn(
      `[svelte-i18n] Message with id "${t}" must be of type "string", found: "${typeof d}". Gettin its value through the "$format" method is deprecated; use the "json" method instead.`
    ), d;
  if (!u)
    return d;
  let m = d;
  try {
    m = om(d, l).format(u);
  } catch (f) {
    f instanceof Error && console.warn(
      `[svelte-i18n] Message "${t}" has syntax error:`,
      f.message
    );
  }
  return m;
}, lm = (t, e) => am(e).format(t), um = (t, e) => im(e).format(t), cm = (t, e) => rm(e).format(t), dm = (t, e = kr()) => Wc(t, e), fm = na([pi, Va], () => sm);
na([pi], () => lm);
na([pi], () => um);
na([pi], () => cm);
na([pi, Va], () => dm);
function hm(t, e) {
  Object.entries(t).forEach(([a, o]) => {
    Kc(a, o);
  });
  const n = localStorage.getItem("language"), r = "en", i = n ?? Jv();
  console.log("Initial: Setting the language to", i), jv({
    fallbackLocale: r,
    initialLocale: i
  }), window.addEventListener("oscd-language-changed", (a) => {
    const o = a;
    if (!o.detail.language) {
      console.error("No translations for language");
      return;
    }
    console.log("Updating the language to", o.detail.language), pi.set(o.detail.language);
  });
}
const vm = "Ort", mm = "Suche", gm = "UUID", pm = "File Name", bm = "Autor", _m = "Typ", ym = "Version", Im = "Datum", Em = "Fertig", Sm = "Filtertypen", Am = "Filter Hinzufügen", Cm = {
  location: vm,
  search: mm,
  uuid: gm,
  filename: pm,
  author: bm,
  type: _m,
  version: ym,
  date: Im,
  "versionHistory.title": "Versionsverlauf der Datei {filename}",
  "versionTable.heading": "Versionstabelle",
  done: Em,
  filter_types: Sm,
  add_filter: Am
}, Tm = "Location", xm = "Search", wm = "UUID", Lm = "Filename", Om = "Author", Rm = "Type", Dm = "Version", Mm = "Date", Pm = "Done", Hm = "Filter Types", Nm = "Add Filter", Um = {
  location: Tm,
  search: xm,
  uuid: wm,
  filename: Lm,
  author: Om,
  type: Rm,
  version: Dm,
  date: Mm,
  "versionHistory.title": "Version History of file {filename}",
  "versionTable.heading": "Version Table",
  done: Pm,
  filter_types: Hm,
  add_filter: Nm
};
function He(t) {
  return Object.entries(t).filter(([e, n]) => e !== "" && n).map(([e]) => e).join(" ");
}
function Ke(t, e, n, r = { bubbles: !0 }) {
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
class bi {
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
    n in a || (a[n] = /* @__PURE__ */ new Map()), a[n].set(r, Bf(e, n, r, i));
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
function Q(t, e) {
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
var Qa;
function Fm(t, e) {
  e === void 0 && (e = !1);
  var n = t.CSS, r = Qa;
  if (typeof Qa == "boolean" && !e)
    return Qa;
  var i = n && typeof n.supports == "function";
  if (!i)
    return !1;
  var a = n.supports("--css-vars", "yes"), o = n.supports("(--css-vars: yes)") && n.supports("color", "#00000000");
  return r = a || o, e || (Qa = r), r;
}
function km(t, e, n) {
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
var xt = (
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
function Bm(t) {
  return t === void 0 && (t = window), Vm(t) ? { passive: !0 } : !1;
}
function Vm(t) {
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
const Jc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  applyPassive: Bm
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
function Gm(t, e) {
  if (t.closest)
    return t.closest(e);
  for (var n = t; n; ) {
    if ($c(n, e))
      return n;
    n = n.parentElement;
  }
  return null;
}
function $c(t, e) {
  var n = t.matches || t.webkitMatchesSelector || t.msMatchesSelector;
  return n.call(t, e);
}
function jm(t) {
  var e = t;
  if (e.offsetParent !== null)
    return e.scrollWidth;
  var n = e.cloneNode(!0);
  n.style.setProperty("position", "absolute"), n.style.setProperty("transform", "translate(-9999px, -9999px)"), document.documentElement.appendChild(n);
  var r = n.scrollWidth;
  return document.documentElement.removeChild(n), r;
}
const ia = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  closest: Gm,
  estimateScrollWidth: jm,
  matches: $c
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
var qm = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  BG_FOCUSED: "mdc-ripple-upgraded--background-focused",
  FG_ACTIVATION: "mdc-ripple-upgraded--foreground-activation",
  FG_DEACTIVATION: "mdc-ripple-upgraded--foreground-deactivation",
  ROOT: "mdc-ripple-upgraded",
  UNBOUNDED: "mdc-ripple-upgraded--unbounded"
}, Wm = {
  VAR_FG_SCALE: "--mdc-ripple-fg-scale",
  VAR_FG_SIZE: "--mdc-ripple-fg-size",
  VAR_FG_TRANSLATE_END: "--mdc-ripple-fg-translate-end",
  VAR_FG_TRANSLATE_START: "--mdc-ripple-fg-translate-start",
  VAR_LEFT: "--mdc-ripple-left",
  VAR_TOP: "--mdc-ripple-top"
}, eu = {
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
var tu = [
  "touchstart",
  "pointerdown",
  "mousedown",
  "keydown"
], nu = [
  "touchend",
  "pointerup",
  "mouseup",
  "contextmenu"
], Ja = [], zm = (
  /** @class */
  function(t) {
    et(e, t);
    function e(n) {
      var r = t.call(this, be(be({}, e.defaultAdapter), n)) || this;
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
        return qm;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Wm;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return eu;
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
          for (var a = Wt(tu), o = a.next(); !o.done; o = a.next()) {
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
          for (var a = Wt(nu), o = a.next(); !o.done; o = a.next()) {
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
        for (var i = Wt(tu), a = i.next(); !a.done; a = i.next()) {
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
        for (var i = Wt(nu), a = i.next(); !a.done; a = i.next()) {
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
            var u = n !== void 0 && Ja.length > 0 && Ja.some(function(l) {
              return r.adapter.containsEventTarget(l);
            });
            if (u) {
              this.resetActivationState();
              return;
            }
            n !== void 0 && (Ja.push(n.target), this.registerDeactivationHandlers(n)), i.wasElementMadeActive = this.checkElementMadeActive(n), i.wasElementMadeActive && this.animateActivation(), requestAnimationFrame(function() {
              Ja = [], !i.wasElementMadeActive && n !== void 0 && (n.key === " " || n.keyCode === 32) && (i.wasElementMadeActive = r.checkElementMadeActive(n), i.wasElementMadeActive && r.animateActivation()), i.wasElementMadeActive || (r.activationState = r.defaultActivationState());
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
      i ? a = km(r, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect()) : a = {
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
      }, eu.FG_DEACTIVATION_MS));
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
        var i = be({}, r);
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
  }(xt)
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
var es = "mdc-dom-focus-sentinel", Km = (
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
      [].slice.call(this.root.querySelectorAll("." + es)).forEach(function(e) {
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
        var i = r.getAttribute("aria-disabled") === "true" || r.getAttribute("disabled") != null || r.getAttribute("hidden") != null || r.getAttribute("aria-hidden") === "true", a = r.tabIndex >= 0 && r.getBoundingClientRect().width > 0 && !r.classList.contains(es) && !i, o = !1;
        if (a) {
          var u = getComputedStyle(r);
          o = u.display === "none" || u.visibility === "hidden";
        }
        return a && !o;
      });
    }, t.prototype.createSentinel = function() {
      var e = document.createElement("div");
      return e.setAttribute("tabindex", "0"), e.setAttribute("aria-hidden", "true"), e.classList.add(es), e;
    }, t;
  }()
);
const Xm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  FocusTrap: Km
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
}, on = /* @__PURE__ */ new Set();
on.add(Ge.BACKSPACE);
on.add(Ge.ENTER);
on.add(Ge.SPACEBAR);
on.add(Ge.PAGE_UP);
on.add(Ge.PAGE_DOWN);
on.add(Ge.END);
on.add(Ge.HOME);
on.add(Ge.ARROW_LEFT);
on.add(Ge.ARROW_UP);
on.add(Ge.ARROW_RIGHT);
on.add(Ge.ARROW_DOWN);
on.add(Ge.DELETE);
on.add(Ge.ESCAPE);
on.add(Ge.TAB);
var hn = {
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
}, sn = /* @__PURE__ */ new Map();
sn.set(hn.BACKSPACE, Ge.BACKSPACE);
sn.set(hn.ENTER, Ge.ENTER);
sn.set(hn.SPACEBAR, Ge.SPACEBAR);
sn.set(hn.PAGE_UP, Ge.PAGE_UP);
sn.set(hn.PAGE_DOWN, Ge.PAGE_DOWN);
sn.set(hn.END, Ge.END);
sn.set(hn.HOME, Ge.HOME);
sn.set(hn.ARROW_LEFT, Ge.ARROW_LEFT);
sn.set(hn.ARROW_UP, Ge.ARROW_UP);
sn.set(hn.ARROW_RIGHT, Ge.ARROW_RIGHT);
sn.set(hn.ARROW_DOWN, Ge.ARROW_DOWN);
sn.set(hn.DELETE, Ge.DELETE);
sn.set(hn.ESCAPE, Ge.ESCAPE);
sn.set(hn.TAB, Ge.TAB);
var Br = /* @__PURE__ */ new Set();
Br.add(Ge.PAGE_UP);
Br.add(Ge.PAGE_DOWN);
Br.add(Ge.END);
Br.add(Ge.HOME);
Br.add(Ge.ARROW_LEFT);
Br.add(Ge.ARROW_UP);
Br.add(Ge.ARROW_RIGHT);
Br.add(Ge.ARROW_DOWN);
function Lt(t) {
  var e = t.key;
  if (on.has(e))
    return e;
  var n = sn.get(t.keyCode);
  return n || Ge.UNKNOWN;
}
const { applyPassive: ru } = Jc, { matches: Zm } = ia;
function Yt(t, { ripple: e = !0, surface: n = !1, unbounded: r = !1, disabled: i = !1, color: a, active: o, rippleElement: u, eventTarget: l, activeTarget: c, addClass: d = (h) => t.classList.add(h), removeClass: m = (h) => t.classList.remove(h), addStyle: f = (h, p) => t.style.setProperty(h, p), initPromise: g = Promise.resolve() } = {}) {
  let h, p = new bi(), b = ye("SMUI:addLayoutListener"), y, S = o, E = l, _ = c;
  function A() {
    n ? (d("mdc-ripple-surface"), a === "primary" ? (d("smui-ripple-surface--primary"), m("smui-ripple-surface--secondary")) : a === "secondary" ? (m("smui-ripple-surface--primary"), d("smui-ripple-surface--secondary")) : (m("smui-ripple-surface--primary"), m("smui-ripple-surface--secondary"))) : (m("mdc-ripple-surface"), m("smui-ripple-surface--primary"), m("smui-ripple-surface--secondary")), h && S !== o && (S = o, o ? h.activate() : o === !1 && h.deactivate()), e && !h ? (h = new zm({
      addClass: d,
      browserSupportsCssVars: () => Fm(window),
      computeBoundingRect: () => (u || t).getBoundingClientRect(),
      containsEventTarget: (O) => t.contains(O),
      deregisterDocumentInteractionHandler: (O, C) => p.off(document.documentElement, O, C),
      deregisterInteractionHandler: (O, C) => p.off(l || t, O, C),
      deregisterResizeHandler: (O) => window.removeEventListener("resize", O),
      getWindowPageOffset: () => {
        var O, C;
        return {
          x: (O = window.pageXOffset) !== null && O !== void 0 ? O : window.scrollX,
          y: (C = window.pageYOffset) !== null && C !== void 0 ? C : window.scrollY
        };
      },
      isSurfaceActive: () => o ?? Zm(c || t, ":active"),
      isSurfaceDisabled: () => !!i,
      isUnbounded: () => !!r,
      registerDocumentInteractionHandler: (O, C) => {
        const L = ru();
        p.on(document.documentElement, O, C, typeof L == "boolean" ? { capture: L } : L);
      },
      registerInteractionHandler: (O, C) => {
        const L = ru();
        p.on(l || t, O, C, typeof L == "boolean" ? { capture: L } : L);
      },
      registerResizeHandler: (O) => p.on(window, "resize", O),
      removeClass: m,
      updateCssVariable: f
    }), g.then(() => {
      h && (h.init(), h.setUnbounded(r));
    })) : h && !e && g.then(() => {
      h && (h.destroy(), h = void 0, p.clear());
    }), h && (E !== l || _ !== c) && (E = l, _ = c, h.destroy(), requestAnimationFrame(() => {
      h && (h.init(), h.setUnbounded(r));
    })), !e && r && d("mdc-ripple-upgraded--unbounded");
  }
  A(), b && (y = b(I));
  function I() {
    h && h.layout();
  }
  return {
    update(O) {
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
      } = Object.assign({ ripple: !0, surface: !1, unbounded: !1, disabled: !1, color: void 0, active: void 0, rippleElement: void 0, eventTarget: void 0, activeTarget: void 0, addClass: (C) => t.classList.add(C), removeClass: (C) => t.classList.remove(C), addStyle: (C, L) => t.style.setProperty(C, L), initPromise: Promise.resolve() }, O)), A();
    },
    destroy() {
      h && (h.destroy(), h = void 0, p.clear(), m("mdc-ripple-surface"), m("smui-ripple-surface--primary"), m("smui-ripple-surface--secondary")), y && y();
    }
  };
}
function Ds(t, e) {
  we(e, !0);
  let n = v(e, "use", 19, () => []), r = v(e, "class", 3, ""), i = v(e, "component", 3, Vr), a = v(e, "tag", 3, "span"), o = /* @__PURE__ */ je(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "component",
    "tag",
    "children"
  ]), u;
  const l = ye("SMUI:label:context"), c = ye("SMUI:label:tabindex");
  function d() {
    return u.getElement();
  }
  var m = { getElement: d }, f = ie(), g = Y(f);
  {
    let h = /* @__PURE__ */ fe(() => He({
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
    nr(g, i, (p, b) => {
      Te(
        b(p, Je(
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
            children: (y, S) => {
              var E = ie(), _ = Y(E);
              Ae(_, () => e.children ?? pe), T(y, E);
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
function Ms(t, e) {
  we(e, !0);
  let n = v(e, "use", 19, () => []), r = v(e, "class", 3, ""), i = v(e, "on", 3, !1), a = v(e, "component", 3, Vr), o = v(e, "tag", 3, "i"), u = /* @__PURE__ */ je(e, [
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
  const c = /* @__PURE__ */ fe(() => o() === "svg" || a() === Jm), d = ye("SMUI:icon:context");
  function m() {
    return l.getElement();
  }
  var f = { getElement: m }, g = ie(), h = Y(g);
  {
    let p = /* @__PURE__ */ fe(() => He({
      "mdc-button__icon": d === "button",
      "mdc-fab__icon": d === "fab",
      "mdc-icon-button__icon": d === "icon-button",
      "mdc-icon-button__icon--on": d === "icon-button" && i(),
      "mdc-tab__icon": d === "tab",
      "mdc-banner__icon": d === "banner",
      "mdc-segmented-button__icon": d === "segmented-button",
      [r()]: !0
    }));
    nr(h, a, (b, y) => {
      Te(
        y(b, Je(
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
            children: (S, E) => {
              var _ = ie(), A = Y(_);
              Ae(A, () => e.children ?? pe), T(S, _);
            },
            $$slots: { default: !0 }
          }
        )),
        (S) => l = S,
        () => l
      );
    });
  }
  return T(t, g), Le(f);
}
var Ym = /* @__PURE__ */ _t("<svg><!></svg>");
function Vr(t, e) {
  we(e, !0);
  let n = v(e, "use", 19, () => []), r = v(e, "tag", 3, "div"), i = /* @__PURE__ */ je(e, ["$$slots", "$$events", "$$legacy", "use", "tag", "children"]);
  const a = /* @__PURE__ */ fe(() => [
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
  var l = { getElement: u }, c = ie(), d = Y(c);
  {
    var m = (g) => {
      var h = Ym();
      ke(h, () => ({ ...i }));
      var p = ce(h);
      Ae(p, () => e.children ?? pe), Te(h, (b) => o = b, () => o), Ue(h, (b, y) => Q == null ? void 0 : Q(b, y), n), T(g, h);
    }, f = (g) => {
      var h = ie(), p = Y(h);
      {
        var b = (S) => {
          var E = ie(), _ = Y(E);
          Rl(_, r, !1, (A, I) => {
            Te(A, (O) => o = O, () => o), Ue(A, (O, C) => Q == null ? void 0 : Q(O, C), n), ke(A, () => ({ ...i }));
          }), T(S, E);
        }, y = (S) => {
          var E = ie(), _ = Y(E);
          Rl(_, r, !1, (A, I) => {
            Te(A, (L) => o = L, () => o), Ue(A, (L, k) => Q == null ? void 0 : Q(L, k), n), ke(A, () => ({ ...i }));
            var O = ie(), C = Y(O);
            Ae(C, () => e.children ?? pe), T(I, O);
          }), T(S, E);
        };
        oe(
          p,
          (S) => {
            s(a) ? S(b) : S(y, !1);
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
var Qm = /* @__PURE__ */ _t("<svg><!></svg>");
function Jm(t, e) {
  we(e, !0), console && console.warn && console.warn('The @smui/common Svg component is deprecated. You can use `tag="svg"` now.');
  let n = v(e, "use", 19, () => []), r = /* @__PURE__ */ je(e, ["$$slots", "$$events", "$$legacy", "use", "children"]), i;
  function a() {
    return i;
  }
  var o = { getElement: a }, u = Qm();
  ke(u, () => ({ ...r }));
  var l = ce(u);
  return Ae(l, () => e.children ?? pe), Te(u, (c) => i = c, () => i), Ue(u, (c, d) => Q == null ? void 0 : Q(c, d), n), T(t, u), Le(o);
}
function $a(t, e) {
  we(e, !0);
  const [n, r] = rr(), i = Bt(e.value);
  ue(e.key, i), Oe(() => {
    Fn(i, e.value);
  }), In(() => {
    i.set(void 0);
  });
  var a = ie(), o = Y(a);
  Ae(o, () => e.children ?? pe), T(t, a), Le(), r();
}
var $m = /* @__PURE__ */ de('<div class="mdc-button__touch"></div>'), eg = /* @__PURE__ */ de('<div class="mdc-button__ripple"></div> <!><!>', 1);
function Ji(t, e) {
  we(e, !0);
  let n = v(e, "use", 19, () => []), r = v(e, "class", 3, ""), i = v(e, "style", 3, ""), a = v(e, "ripple", 3, !0), o = v(e, "color", 3, "primary"), u = v(e, "variant", 3, "text"), l = v(e, "touch", 3, !1), c = v(e, "action", 3, "close"), d = v(e, "defaultAction", 3, !1), m = v(e, "secondary", 3, !1), f = v(e, "component", 3, Vr), g = v(e, "tag", 19, () => e.href == null ? "button" : "a"), h = /* @__PURE__ */ je(e, [
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
  ]), p, b = Ie({}), y = Ie({}), S = ye("SMUI:button:context");
  const E = /* @__PURE__ */ fe(() => S === "dialog:action" && c() != null ? { "data-mdc-dialog-action": c() } : { action: c() }), _ = /* @__PURE__ */ fe(() => S === "dialog:action" && d() ? { "data-mdc-dialog-button-default": "" } : {}), A = /* @__PURE__ */ fe(() => S === "banner" ? {} : { secondary: m() });
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
  function O(x) {
    b[x] || (b[x] = !0);
  }
  function C(x) {
    (!(x in b) || b[x]) && (b[x] = !1);
  }
  function L(x, M) {
    y[x] != M && (M === "" || M == null ? delete y[x] : y[x] = M);
  }
  function k() {
    S === "banner" && Ke($(), m() ? "SMUIBannerButtonSecondaryActionClick" : "SMUIBannerButtonPrimaryActionClick");
  }
  function $() {
    return p.getElement();
  }
  var V = { getElement: $ }, W = ie(), R = Y(W);
  {
    let x = /* @__PURE__ */ fe(() => [
      [
        Yt,
        {
          ripple: a(),
          unbounded: !1,
          color: o(),
          disabled: !!e.disabled,
          addClass: O,
          removeClass: C,
          addStyle: L
        }
      ],
      ...n()
    ]), M = /* @__PURE__ */ fe(() => He({
      "mdc-button": !0,
      "mdc-button--raised": u() === "raised",
      "mdc-button--unelevated": u() === "unelevated",
      "mdc-button--outlined": u() === "outlined",
      "smui-button--color-secondary": o() === "secondary",
      "mdc-button--touch": l(),
      "mdc-card__action": S === "card:action",
      "mdc-card__action--button": S === "card:action",
      "mdc-dialog__button": S === "dialog:action",
      "mdc-top-app-bar__navigation-icon": S === "top-app-bar:navigation",
      "mdc-top-app-bar__action-item": S === "top-app-bar:action",
      "mdc-snackbar__action": S === "snackbar:actions",
      "mdc-banner__secondary-action": S === "banner" && m(),
      "mdc-banner__primary-action": S === "banner" && !m(),
      "mdc-tooltip__action": S === "tooltip:rich-actions",
      ...b,
      [r()]: !0
    })), P = /* @__PURE__ */ fe(() => Object.entries(y).map(([Z, ne]) => `${Z}: ${ne};`).concat([i()]).join(" "));
    nr(R, f, (Z, ne) => {
      Te(
        ne(Z, Je(
          {
            get tag() {
              return g();
            },
            get use() {
              return s(x);
            },
            get class() {
              return s(M);
            },
            get style() {
              return s(P);
            }
          },
          () => s(E),
          () => s(_),
          () => s(A),
          {
            get href() {
              return e.href;
            }
          },
          () => h,
          {
            onclick: (N) => {
              var D;
              k(), (D = e.onclick) == null || D.call(e, N);
            },
            children: (N, D) => {
              var j = eg(), Ee = ge(Y(j), 2);
              Ae(Ee, () => e.children ?? pe);
              var _e = ge(Ee);
              {
                var G = (q) => {
                  var w = $m();
                  T(q, w);
                };
                oe(_e, (q) => {
                  l() && q(G);
                });
              }
              T(N, j);
            },
            $$slots: { default: !0 }
          }
        )),
        (N) => p = N,
        () => p
      );
    });
  }
  return T(t, W), Le(V);
}
function Ps(t, e) {
  we(e, !0);
  let n = v(e, "callback", 3, () => {
  }), r = v(e, "disabled", 3, !1), i = v(e, "variant", 3, "default"), a = v(e, "isAbortAction", 3, !1), o = v(e, "backgroundColor", 3, void 0), u = v(e, "ariaLabel", 3, void 0);
  {
    let l = /* @__PURE__ */ fe(() => a() ? "background-color: #ff3e00;" : "background-color: " + o());
    Ji(t, {
      onclick: () => n()(),
      get variant() {
        return i();
      },
      get disabled() {
        return r();
      },
      get "aria-label"() {
        return u();
      },
      get style() {
        return s(l);
      },
      children: (c, d) => {
        var m = ie(), f = Y(m);
        Ae(f, () => e.children ?? pe), T(c, m);
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
var eo = {
  ICON_BUTTON_ON: "mdc-icon-button--on",
  ROOT: "mdc-icon-button"
}, sr = {
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
var tg = (
  /** @class */
  function(t) {
    et(e, t);
    function e(n) {
      var r = t.call(this, be(be({}, e.defaultAdapter), n)) || this;
      return r.hasToggledAriaLabel = !1, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return eo;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return sr;
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
      var n = this.adapter.getAttr(sr.DATA_ARIA_LABEL_ON), r = this.adapter.getAttr(sr.DATA_ARIA_LABEL_OFF);
      if (n && r) {
        if (this.adapter.getAttr(sr.ARIA_PRESSED) !== null)
          throw new Error("MDCIconButtonToggleFoundation: Button should not set `aria-pressed` if it has a toggled aria label.");
        this.hasToggledAriaLabel = !0;
      } else
        this.adapter.setAttr(sr.ARIA_PRESSED, String(this.isOn()));
    }, e.prototype.handleClick = function() {
      this.toggle(), this.adapter.notifyChange({ isOn: this.isOn() });
    }, e.prototype.isOn = function() {
      return this.adapter.hasClass(eo.ICON_BUTTON_ON);
    }, e.prototype.toggle = function(n) {
      if (n === void 0 && (n = !this.isOn()), n ? this.adapter.addClass(eo.ICON_BUTTON_ON) : this.adapter.removeClass(eo.ICON_BUTTON_ON), this.hasToggledAriaLabel) {
        var r = n ? this.adapter.getAttr(sr.DATA_ARIA_LABEL_ON) : this.adapter.getAttr(sr.DATA_ARIA_LABEL_OFF);
        this.adapter.setAttr(sr.ARIA_LABEL, r || "");
      } else
        this.adapter.setAttr(sr.ARIA_PRESSED, "" + n);
    }, e;
  }(xt)
), ng = /* @__PURE__ */ de('<div class="mdc-icon-button__touch"></div>'), rg = /* @__PURE__ */ de('<div class="mdc-icon-button__ripple"></div> <!><!>', 1);
function ig(t, e) {
  we(e, !0);
  let n = () => {
  };
  function r(D) {
    return D === n;
  }
  let i = v(e, "use", 19, () => []), a = v(e, "class", 3, ""), o = v(e, "style", 3, ""), u = v(e, "ripple", 3, !0), l = v(e, "toggle", 3, !1), c = v(e, "pressed", 15, n), d = v(e, "touch", 3, !1), m = v(e, "displayFlex", 3, !0), f = v(e, "size", 3, "normal"), g = v(e, "component", 3, Vr), h = v(e, "tag", 19, () => e.href == null ? "button" : "a"), p = /* @__PURE__ */ je(e, [
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
  ]), b, y, S = /* @__PURE__ */ he(Ie({})), E = Ie({}), _ = /* @__PURE__ */ he(Ie({})), A = ye("SMUI:icon-button:context"), I = ye("SMUI:icon-button:aria-describedby");
  const O = /* @__PURE__ */ fe(() => {
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
        const D = P();
        "blur" in D && D.blur();
      }
      C = !!e.disabled;
    }
  }), ue("SMUI:icon:context", "icon-button");
  let L = null;
  Oe(() => {
    b && P() && l() !== L && (l() && !y ? (y = new tg({
      addClass: $,
      hasClass: k,
      notifyChange: (D) => {
        M(D), Ke(P(), "SMUIIconButtonToggleChange", D);
      },
      removeClass: V,
      getAttr: R,
      setAttr: x
    }), y.init()) : !l() && y && (y.destroy(), y = void 0, X(S, {}, !0), X(_, {}, !0)), L = l());
  }), Oe(() => {
    y && !r(c()) && y.isOn() !== c() && y.toggle(c());
  }), In(() => {
    y && y.destroy();
  });
  function k(D) {
    return D in s(S) ? s(S)[D] : P().classList.contains(D);
  }
  function $(D) {
    s(S)[D] || (s(S)[D] = !0);
  }
  function V(D) {
    (!(D in s(S)) || s(S)[D]) && (s(S)[D] = !1);
  }
  function W(D, j) {
    E[D] != j && (j === "" || j == null ? delete E[D] : E[D] = j);
  }
  function R(D) {
    return D in s(_) ? s(_)[D] ?? null : P().getAttribute(D);
  }
  function x(D, j) {
    s(_)[D] !== j && (s(_)[D] = j);
  }
  function M(D) {
    c(D.isOn);
  }
  function P() {
    return b.getElement();
  }
  var Z = { getElement: P }, ne = ie(), N = Y(ne);
  {
    let D = /* @__PURE__ */ fe(() => [
      [
        Yt,
        {
          ripple: u(),
          unbounded: !0,
          color: e.color,
          disabled: !!e.disabled,
          addClass: $,
          removeClass: V,
          addStyle: W
        }
      ],
      ...i()
    ]), j = /* @__PURE__ */ fe(() => He({
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
      ...s(S),
      [a()]: !0
    })), Ee = /* @__PURE__ */ fe(() => Object.entries(E).map(([q, w]) => `${q}: ${w};`).concat([o()]).join(" ")), _e = /* @__PURE__ */ fe(() => r(c()) ? null : c() ? "true" : "false"), G = /* @__PURE__ */ fe(() => c() ? e.ariaLabelOn : e.ariaLabelOff);
    nr(N, g, (q, w) => {
      Te(
        w(q, Je(
          {
            get tag() {
              return h();
            },
            get use() {
              return s(D);
            },
            get class() {
              return s(j);
            },
            get style() {
              return s(Ee);
            },
            get "aria-pressed"() {
              return s(_e);
            },
            get "aria-label"() {
              return s(G);
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
          () => s(O),
          () => s(_),
          () => p,
          {
            onclick: (z) => {
              var K;
              y && y.handleClick(), A === "top-app-bar:navigation" && Ke(P(), "SMUITopAppBarIconButtonNav"), (K = e.onclick) == null || K.call(e, z);
            },
            children: (z, K) => {
              var te = rg(), se = ge(Y(te), 2);
              Ae(se, () => e.children ?? pe);
              var ee = ge(se);
              {
                var re = (Re) => {
                  var Ce = ng();
                  T(Re, Ce);
                };
                oe(ee, (Re) => {
                  d() && Re(re);
                });
              }
              T(z, te);
            },
            $$slots: { default: !0 }
          }
        )),
        (z) => b = z,
        () => b
      );
    });
  }
  return T(t, ne), Le(Z);
}
function ag(t, e) {
  let n = v(e, "callback", 3, () => {
  }), r = v(e, "icon", 3, ""), i = v(e, "disabled", 3, !1), a = v(e, "ariaLabel", 3, void 0);
  ig(t, {
    get disabled() {
      return i();
    },
    get "aria-label"() {
      return a();
    },
    style: "margin-bottom: 0;",
    $$events: {
      click(...o) {
        var u;
        (u = n()) == null || u.apply(this, o);
      }
    },
    children: (o, u) => {
      Ms(o, {
        class: "material-icons",
        children: (l, c) => {
          var d = vt();
          xe(() => ze(d, r())), T(l, d);
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
var og = {
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
var sg = (
  /** @class */
  function(t) {
    et(e, t);
    function e(n) {
      var r = t.call(this, be(be({}, e.defaultAdapter), n)) || this;
      return r.shakeAnimationEndHandler = function() {
        r.handleShakeAnimationEnd();
      }, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return og;
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
  }(xt)
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
var Kr = {
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
var lg = (
  /** @class */
  function(t) {
    et(e, t);
    function e(n) {
      var r = t.call(this, be(be({}, e.defaultAdapter), n)) || this;
      return r.transitionEndHandler = function(i) {
        r.handleTransitionEnd(i);
      }, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Kr;
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
      this.adapter.removeClass(Kr.LINE_RIPPLE_DEACTIVATING), this.adapter.addClass(Kr.LINE_RIPPLE_ACTIVE);
    }, e.prototype.setRippleCenter = function(n) {
      this.adapter.setStyle("transform-origin", n + "px center");
    }, e.prototype.deactivate = function() {
      this.adapter.addClass(Kr.LINE_RIPPLE_DEACTIVATING);
    }, e.prototype.handleTransitionEnd = function(n) {
      var r = this.adapter.hasClass(Kr.LINE_RIPPLE_DEACTIVATING);
      n.propertyName === "opacity" && r && (this.adapter.removeClass(Kr.LINE_RIPPLE_ACTIVE), this.adapter.removeClass(Kr.LINE_RIPPLE_DEACTIVATING));
    }, e;
  }(xt)
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
var ug = {
  NOTCH_ELEMENT_SELECTOR: ".mdc-notched-outline__notch"
}, iu = {
  // This should stay in sync with $mdc-notched-outline-padding * 2.
  NOTCH_ELEMENT_PADDING: 8
}, cg = {
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
var dg = (
  /** @class */
  function(t) {
    et(e, t);
    function e(n) {
      return t.call(this, be(be({}, e.defaultAdapter), n)) || this;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return ug;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return cg;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return iu;
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
      n > 0 && (n += iu.NOTCH_ELEMENT_PADDING), this.adapter.setNotchWidthProperty(n), this.adapter.addClass(r);
    }, e.prototype.closeNotch = function() {
      var n = e.cssClasses.OUTLINE_NOTCHED;
      this.adapter.removeClass(n), this.adapter.removeNotchWidthProperty();
    }, e;
  }(xt)
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
var ts = {
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
}, fg = {
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
}, au = {
  LABEL_SCALE: 0.75
}, hg = [
  "pattern",
  "min",
  "max",
  "required",
  "step",
  "minlength",
  "maxlength"
], vg = [
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
var ou = ["mousedown", "touchstart"], su = ["click", "keydown"], mg = (
  /** @class */
  function(t) {
    et(e, t);
    function e(n, r) {
      r === void 0 && (r = {});
      var i = t.call(this, be(be({}, e.defaultAdapter), n)) || this;
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
        return fg;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return ts;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return au;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "shouldAlwaysFloat", {
      get: function() {
        var n = this.getNativeInput().type;
        return vg.indexOf(n) >= 0;
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
        for (var o = Wt(ou), u = o.next(); !u.done; u = o.next()) {
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
        for (var c = Wt(su), d = c.next(); !d.done; d = c.next()) {
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
        for (var o = Wt(ou), u = o.next(); !u.done; u = o.next()) {
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
        for (var c = Wt(su), d = c.next(); !d.done; d = c.next()) {
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
        return hg.indexOf(i) > -1 ? (r.styleValidity(!0), r.adapter.setLabelRequired(r.getNativeInput().required), !0) : !1;
      }), n.indexOf("maxlength") > -1 && this.setcharacterCounter(this.getValue().length);
    }, e.prototype.notchOutline = function(n) {
      if (!(!this.adapter.hasOutline() || !this.adapter.hasLabel()))
        if (n) {
          var r = this.adapter.getLabelWidth() * au.LABEL_SCALE;
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
        a && o ? this.adapter.setInputAttr(ts.ARIA_DESCRIBEDBY, o) : this.adapter.removeInputAttr(ts.ARIA_DESCRIBEDBY);
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
  }(xt)
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
var lu = {
  ICON_EVENT: "MDCTextField:icon",
  ICON_ROLE: "button"
}, gg = {
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
var uu = ["click", "keydown"], pg = (
  /** @class */
  function(t) {
    et(e, t);
    function e(n) {
      var r = t.call(this, be(be({}, e.defaultAdapter), n)) || this;
      return r.savedTabIndex = null, r.interactionHandler = function(i) {
        r.handleInteraction(i);
      }, r;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return lu;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return gg;
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
        for (var i = Wt(uu), a = i.next(); !a.done; a = i.next()) {
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
        for (var i = Wt(uu), a = i.next(); !a.done; a = i.next()) {
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
      this.savedTabIndex && (n ? (this.adapter.setAttr("tabindex", "-1"), this.adapter.removeAttr("role")) : (this.adapter.setAttr("tabindex", this.savedTabIndex), this.adapter.setAttr("role", lu.ICON_ROLE)));
    }, e.prototype.setAriaLabel = function(n) {
      this.adapter.setAttr("aria-label", n);
    }, e.prototype.setContent = function(n) {
      this.adapter.setContent(n);
    }, e.prototype.handleInteraction = function(n) {
      var r = n.key === "Enter" || n.keyCode === 13;
      (n.type === "click" || r) && (n.preventDefault(), this.adapter.notifyIconAction());
    }, e;
  }(xt)
), bg = /* @__PURE__ */ de("<span><!></span>"), _g = /* @__PURE__ */ de("<label><!></label>");
function Eo(t, e) {
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
  ]), c, d = /* @__PURE__ */ he(void 0), m = new bi(), f = Ie({}), g = Ie({}), h = ye("SMUI:generic:input:props") ?? {}, p = a();
  Oe(() => {
    s(d) && p !== a() && (p = a(), s(d).float(a()));
  });
  let b = o();
  Oe(() => {
    s(d) && b !== o() && (b = o(), s(d).setRequired(o()));
  });
  const y = ye("SMUI:floating-label:mount"), S = ye("SMUI:floating-label:unmount");
  at(() => {
    X(
      d,
      new sg({
        addClass: E,
        removeClass: _,
        getWidth: () => {
          var D, j;
          const Z = $(), ne = Z.cloneNode(!0);
          (D = Z.parentNode) == null || D.appendChild(ne), ne.classList.add("smui-floating-label--remove-transition"), ne.classList.add("smui-floating-label--force-size"), ne.classList.remove("mdc-floating-label--float-above");
          const N = ne.scrollWidth;
          return (j = Z.parentNode) == null || j.removeChild(ne), N;
        },
        registerInteractionHandler: (Z, ne) => m.on($(), Z, ne),
        deregisterInteractionHandler: (Z, ne) => m.off($(), Z, ne)
      }),
      !0
    );
    const P = {
      get element() {
        return $();
      },
      addStyle: A,
      removeStyle: I
    };
    return y && y(P), s(d).init(), () => {
      var Z;
      S && S(P), (Z = s(d)) == null || Z.destroy(), m.clear();
    };
  });
  function E(P) {
    f[P] || (f[P] = !0);
  }
  function _(P) {
    (!(P in f) || f[P]) && (f[P] = !1);
  }
  function A(P, Z) {
    g[P] != Z && (Z === "" || Z == null ? delete g[P] : g[P] = Z);
  }
  function I(P) {
    P in g && delete g[P];
  }
  function O(P) {
    var Z;
    (Z = s(d)) == null || Z.shake(P);
  }
  function C(P) {
    a(P);
  }
  function L(P) {
    o(P);
  }
  function k() {
    if (s(d) == null)
      throw new Error("Instance is undefined.");
    return s(d).getWidth();
  }
  function $() {
    return c;
  }
  var V = { shake: O, float: C, setRequired: L, getWidth: k, getElement: $ }, W = ie(), R = Y(W);
  {
    var x = (P) => {
      var Z = bg();
      ke(Z, (N, D) => ({ class: N, style: D, ...l }), [
        () => He({
          "mdc-floating-label": !0,
          "mdc-floating-label--float-above": a(),
          "mdc-floating-label--required": o(),
          ...f,
          [r()]: !0
        }),
        () => Object.entries(g).map(([N, D]) => `${N}: ${D};`).concat([i()]).join(" ")
      ]);
      var ne = ce(Z);
      Ae(ne, () => e.children ?? pe), Te(Z, (N) => c = N, () => c), Ue(Z, (N, D) => Q == null ? void 0 : Q(N, D), n), T(P, Z);
    }, M = (P) => {
      var Z = _g();
      ke(
        Z,
        (N, D) => ({
          class: N,
          style: D,
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
          () => Object.entries(g).map(([N, D]) => `${N}: ${D};`).concat([i()]).join(" ")
        ]
      );
      var ne = ce(Z);
      Ae(ne, () => e.children ?? pe), Te(Z, (N) => c = N, () => c), Ue(Z, (N, D) => Q == null ? void 0 : Q(N, D), n), T(P, Z);
    };
    oe(R, (P) => {
      u() ? P(x) : P(M, !1);
    });
  }
  return T(t, W), Le(V);
}
var yg = /* @__PURE__ */ de("<div></div>");
function ed(t, e) {
  we(e, !0);
  let n = v(e, "use", 19, () => []), r = v(e, "class", 3, ""), i = v(e, "style", 3, ""), a = v(e, "active", 3, !1), o = /* @__PURE__ */ je(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "style",
    "active"
  ]), u, l = /* @__PURE__ */ he(void 0), c = new bi(), d = Ie({}), m = Ie({});
  at(() => (X(
    l,
    new lg({
      addClass: g,
      removeClass: h,
      hasClass: f,
      setStyle: p,
      registerEventHandler: (I, O) => c.on(E(), I, O),
      deregisterEventHandler: (I, O) => c.off(E(), I, O)
    }),
    !0
  ), s(l).init(), () => {
    var I;
    (I = s(l)) == null || I.destroy(), c.clear();
  }));
  function f(I) {
    return I in d ? d[I] : E().classList.contains(I);
  }
  function g(I) {
    d[I] || (d[I] = !0);
  }
  function h(I) {
    (!(I in d) || d[I]) && (d[I] = !1);
  }
  function p(I, O) {
    m[I] != O && (O === "" || O == null ? delete m[I] : m[I] = O);
  }
  function b() {
    var I;
    (I = s(l)) == null || I.activate();
  }
  function y() {
    var I;
    (I = s(l)) == null || I.deactivate();
  }
  function S(I) {
    var O;
    (O = s(l)) == null || O.setRippleCenter(I);
  }
  function E() {
    return u;
  }
  var _ = { activate: b, deactivate: y, setRippleCenter: S, getElement: E }, A = yg();
  return ke(A, (I, O) => ({ class: I, style: O, ...o }), [
    () => He({
      "mdc-line-ripple": !0,
      "mdc-line-ripple--active": a(),
      ...d,
      [r()]: !0
    }),
    () => Object.entries(m).map(([I, O]) => `${I}: ${O};`).concat([i()]).join(" ")
  ]), Te(A, (I) => u = I, () => u), Ue(A, (I, O) => Q == null ? void 0 : Q(I, O), n), T(t, A), Le(_);
}
var Ig = /* @__PURE__ */ de('<div class="mdc-notched-outline__notch"><!></div>'), Eg = /* @__PURE__ */ de('<div><div class="mdc-notched-outline__leading"></div> <!> <div class="mdc-notched-outline__trailing"></div></div>');
function td(t, e) {
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
  ]), u, l = /* @__PURE__ */ he(void 0), c = /* @__PURE__ */ he(void 0), d = Ie({}), m = Ie({}), f;
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
    new dg({
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
  function p(C, L) {
    m[C] != L && (L === "" || L == null ? delete m[C] : m[C] = L);
  }
  function b(C) {
    C in m && delete m[C];
  }
  function y(C) {
    var L;
    (L = s(l)) == null || L.notch(C);
  }
  function S() {
    var C;
    (C = s(l)) == null || C.closeNotch();
  }
  function E() {
    return u;
  }
  var _ = { notch: y, closeNotch: S, getElement: E }, A = Eg();
  ke(A, (C) => ({ class: C, ...o }), [
    () => He({
      "mdc-notched-outline": !0,
      "mdc-notched-outline--notched": i(),
      "mdc-notched-outline--no-label": a(),
      ...d,
      [r()]: !0
    })
  ]);
  var I = ge(ce(A), 2);
  {
    var O = (C) => {
      var L = Ig(), k = ce(L);
      Ae(k, () => e.children ?? pe), xe(($) => ct(L, $), [
        () => Object.entries(m).map(([$, V]) => `${$}: ${V};`).join(" ")
      ]), T(C, L);
    };
    oe(I, (C) => {
      a() || C(O);
    });
  }
  return Te(A, (C) => u = C, () => u), Ue(A, (C, L) => Q == null ? void 0 : Q(C, L), n), T(t, A), Le(_);
}
function aa(t, e) {
  we(e, !0);
  let n = v(e, "use", 19, () => []), r = v(e, "class", 3, ""), i = v(e, "component", 3, Vr), a = v(e, "tag", 3, "div"), o = v(e, "_smuiClass", 3, ""), u = v(e, "_smuiClassMap", 23, () => ({})), l = v(e, "_smuiContexts", 19, () => ({})), c = v(e, "_smuiProps", 19, () => ({})), d = /* @__PURE__ */ je(e, [
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
  Object.entries(u()).forEach(([y, S]) => {
    const E = ye(S);
    E && "subscribe" in E && f.push(E.subscribe((_) => {
      u()[y] = _;
    }));
  });
  for (let y in l())
    l().hasOwnProperty(y) && ue(y, l()[y]);
  In(() => {
    for (const y of f)
      y();
  });
  function g() {
    return m.getElement();
  }
  var h = { getElement: g }, p = ie(), b = Y(p);
  {
    let y = /* @__PURE__ */ fe(() => He({
      [o()]: !0,
      ...u(),
      [r()]: !0
    }));
    nr(b, i, (S, E) => {
      Te(
        E(S, Je(
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
              var I = ie(), O = Y(I);
              Ae(O, () => e.children ?? pe), T(_, I);
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
function Sg(t, e) {
  we(e, !0);
  let n = /* @__PURE__ */ je(e, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return Te(
    aa(t, Je({ _smuiClass: "mdc-text-field-helper-line", tag: "div" }, () => n, {
      children: (o, u) => {
        var l = ie(), c = Y(l);
        Ae(c, () => e.children ?? pe), T(o, l);
      },
      $$slots: { default: !0 }
    })),
    (o) => r = o,
    () => r
  ), Le(a);
}
function Ag(t, e) {
  we(e, !0);
  let n = /* @__PURE__ */ je(e, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return Te(
    aa(t, Je(
      {
        _smuiClass: "mdc-text-field__affix mdc-text-field__affix--prefix",
        tag: "span"
      },
      () => n,
      {
        children: (o, u) => {
          var l = ie(), c = Y(l);
          Ae(c, () => e.children ?? pe), T(o, l);
        },
        $$slots: { default: !0 }
      }
    )),
    (o) => r = o,
    () => r
  ), Le(a);
}
function Cg(t, e) {
  we(e, !0);
  let n = /* @__PURE__ */ je(e, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return Te(
    aa(t, Je(
      {
        _smuiClass: "mdc-text-field__affix mdc-text-field__affix--suffix",
        tag: "span"
      },
      () => n,
      {
        children: (o, u) => {
          var l = ie(), c = Y(l);
          Ae(c, () => e.children ?? pe), T(o, l);
        },
        $$slots: { default: !0 }
      }
    )),
    (o) => r = o,
    () => r
  ), Le(a);
}
var Tg = /* @__PURE__ */ de("<input/>");
function xg(t, e) {
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
  ]), p, b = Ie({}), y = Ie({});
  Oe(() => {
    i() === "file" ? delete y.value : y.value = o() == null ? "" : o();
  }), at(() => {
    d() && m() && c(k().matches(":invalid"));
  });
  function S(x) {
    return x === "" ? Number.NaN : +x;
  }
  function E(x) {
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
        o(S(x.currentTarget.value));
        break;
      default:
        o(x.currentTarget.value);
        break;
    }
  }
  function _(x) {
    (i() === "file" || i() === "range") && E(x), l(!0), d() && c(k().matches(":invalid"));
  }
  function A(x) {
    return x in b ? b[x] ?? null : k().getAttribute(x);
  }
  function I(x, M) {
    b[x] !== M && (b[x] = M);
  }
  function O(x) {
    (!(x in b) || b[x] != null) && (b[x] = void 0);
  }
  function C() {
    k().focus();
  }
  function L() {
    k().blur();
  }
  function k() {
    return p;
  }
  var $ = { getAttr: A, addAttr: I, removeAttr: O, focus: C, blur: L, getElement: k }, V = Tg(), W = (x) => {
    var M;
    i() !== "file" && E(x), (M = e.oninput) == null || M.call(e, x);
  }, R = (x) => {
    var M;
    _(x), (M = e.onchange) == null || M.call(e, x);
  };
  return ke(
    V,
    (x) => ({
      class: x,
      type: i(),
      placeholder: a(),
      ...y,
      ...b,
      ...h,
      oninput: W,
      onchange: R
    }),
    [
      () => He({ "mdc-text-field__input": !0, [r()]: !0 })
    ],
    void 0,
    void 0,
    !0
  ), Te(V, (x) => p = x, () => p), Ue(V, (x, M) => Q == null ? void 0 : Q(x, M), n), T(t, V), Le($);
}
var wg = /* @__PURE__ */ de("<textarea></textarea>");
function Lg(t, e) {
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
  ]), f, g = Ie({});
  at(() => {
    l() && c() && u(_().matches(":invalid"));
  });
  function h() {
    o(!0), l() && u(_().matches(":invalid"));
  }
  function p(C) {
    return C in g ? g[C] ?? null : _().getAttribute(C);
  }
  function b(C, L) {
    g[C] !== L && (g[C] = L);
  }
  function y(C) {
    (!(C in g) || g[C] != null) && (g[C] = void 0);
  }
  function S() {
    _().focus();
  }
  function E() {
    _().blur();
  }
  function _() {
    return f;
  }
  var A = { getAttr: p, addAttr: b, removeAttr: y, focus: S, blur: E, getElement: _ }, I = wg(), O = (C) => {
    var L;
    h(), (L = e.onchange) == null || L.call(e, C);
  };
  return ke(
    I,
    (C) => ({
      class: C,
      style: `${d() ? "" : "resize: none; "}${i()}`,
      ...g,
      ...m,
      onchange: O
    }),
    [
      () => He({ "mdc-text-field__input": !0, [r()]: !0 })
    ]
  ), Te(I, (C) => f = C, () => f), Ue(I, (C, L) => Q == null ? void 0 : Q(C, L), n), mi(() => La(I, a)), T(t, I), Le(A);
}
var Og = /* @__PURE__ */ de('<span class="mdc-text-field__ripple"></span>'), Rg = /* @__PURE__ */ de("<!> <!>", 1), Dg = /* @__PURE__ */ de("<span><!> <!></span>"), Mg = /* @__PURE__ */ de("<!> <!> <!>", 1), Pg = /* @__PURE__ */ de("<label><!> <!> <!> <!> <!> <!> <!></label>"), Hg = /* @__PURE__ */ de("<div><!> <!> <!> <!> <!></div>"), Ng = /* @__PURE__ */ de("<!> <!>", 1);
function Hs(t, e) {
  we(e, !0);
  const { applyPassive: n } = Jc;
  let r = () => {
  };
  function i(B) {
    return B === r;
  }
  let a = v(e, "use", 19, () => []), o = v(e, "class", 3, ""), u = v(e, "style", 3, ""), l = v(e, "ripple", 3, !0), c = v(e, "disabled", 3, !1), d = v(e, "required", 3, !1), m = v(e, "textarea", 3, !1), f = v(e, "variant", 19, () => m() ? "outlined" : "standard"), g = v(e, "noLabel", 3, !1), h = v(e, "type", 3, "text"), p = v(e, "value", 15), b = v(e, "files", 15, r), y = v(e, "invalid", 15, r), S = v(e, "updateInvalid", 19, () => i(y())), E = v(e, "initialInvalid", 3, !1), _ = v(e, "dirty", 15, !1), A = v(e, "validateOnValueChange", 19, S), I = v(e, "useNativeValidation", 19, S), O = v(e, "withLeadingIcon", 3, r), C = v(e, "withTrailingIcon", 3, r), L = v(e, "input", 7), k = v(e, "floatingLabel", 7), $ = v(e, "lineRipple", 7), V = v(e, "notchedOutline", 7), W = /* @__PURE__ */ je(e, [
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
  const R = p() !== void 0 || p() === void 0 && e.input$emptyValueUndefined || !i(b());
  i(b()) && b(null), i(y()) && y(!1);
  let x, M = /* @__PURE__ */ he(void 0), P = new bi(), Z = Ie({}), ne = Ie({}), N = /* @__PURE__ */ he(void 0), D = /* @__PURE__ */ he(!1), j = /* @__PURE__ */ he(Ie(E())), Ee = ye("SMUI:addLayoutListener"), _e, G, q = new Promise((B) => G = B), w, z, K, te;
  const se = /* @__PURE__ */ fe(() => L() && L().getElement());
  Oe(() => {
    (_() || s(j) || !S()) && s(M) && s(M).isValid() !== !y() && (S() ? y(!s(M).isValid()) : s(M).setValid(!y()));
  }), Oe(() => {
    s(M) && s(M).getValidateOnValueChange() !== A() && s(M).setValidateOnValueChange(i(A()) ? !1 : A());
  }), Oe(() => {
    s(M) && s(M).setUseNativeValidation(i(I()) ? !0 : I());
  }), Oe(() => {
    s(M) && s(M).setDisabled(c());
  });
  let ee = p();
  Oe(() => {
    if (s(M) && R && ee !== p()) {
      ee = p();
      const B = `${p() == null ? "" : p()}`;
      s(M).getValue() !== B && s(M).setValue(B);
    }
  }), Ee && (_e = Ee(U)), ue("SMUI:textfield:leading-icon:mount", (B) => {
    w = B;
  }), ue("SMUI:textfield:leading-icon:unmount", () => {
    w = void 0;
  }), ue("SMUI:textfield:trailing-icon:mount", (B) => {
    z = B;
  }), ue("SMUI:textfield:trailing-icon:unmount", () => {
    z = void 0;
  }), ue("SMUI:textfield:helper-text:id", (B) => {
    X(N, B, !0);
  }), ue("SMUI:textfield:helper-text:mount", (B) => {
    K = B;
  }), ue("SMUI:textfield:helper-text:unmount", () => {
    X(N, void 0), K = void 0;
  }), ue("SMUI:textfield:character-counter:mount", (B) => {
    te = B;
  }), ue("SMUI:textfield:character-counter:unmount", () => {
    te = void 0;
  }), at(() => {
    var B;
    if (X(
      M,
      new mg(
        {
          // getRootAdapterMethods_
          addClass: Re,
          removeClass: Ce,
          hasClass: re,
          registerTextFieldInteractionHandler: (ae, Be) => P.on(J(), ae, Be),
          deregisterTextFieldInteractionHandler: (ae, Be) => P.off(J(), ae, Be),
          registerValidationAttributeChangeHandler: (ae) => {
            const Be = (yt) => yt.map((Vt) => Vt.attributeName).filter((Vt) => Vt), mt = new MutationObserver((yt) => {
              I() && ae(Be(yt));
            }), Et = { attributes: !0 };
            return L() && mt.observe(L().getElement(), Et), mt;
          },
          deregisterValidationAttributeChangeHandler: (ae) => {
            ae.disconnect();
          },
          // getInputAdapterMethods_
          getNativeInput: () => {
            var ae;
            return ((ae = L()) == null ? void 0 : ae.getElement()) ?? null;
          },
          setInputAttr: (ae, Be) => {
            var mt;
            (mt = L()) == null || mt.addAttr(ae, Be);
          },
          removeInputAttr: (ae) => {
            var Be;
            (Be = L()) == null || Be.removeAttr(ae);
          },
          isFocused: () => {
            var ae;
            return document.activeElement === ((ae = L()) == null ? void 0 : ae.getElement());
          },
          registerInputInteractionHandler: (ae, Be) => {
            var Et;
            const mt = (Et = L()) == null ? void 0 : Et.getElement();
            if (mt) {
              const yt = n();
              P.on(mt, ae, Be, typeof yt == "boolean" ? { capture: yt } : yt);
            }
          },
          deregisterInputInteractionHandler: (ae, Be) => {
            var Et;
            const mt = (Et = L()) == null ? void 0 : Et.getElement();
            mt && P.off(mt, ae, Be);
          },
          // getLabelAdapterMethods_
          floatLabel: (ae) => k() && k().float(ae),
          getLabelWidth: () => k() ? k().getWidth() : 0,
          hasLabel: () => !!k(),
          shakeLabel: (ae) => k() && k().shake(ae),
          setLabelRequired: (ae) => k() && k().setRequired(ae),
          // getLineRippleAdapterMethods_
          activateLineRipple: () => $() && $().activate(),
          deactivateLineRipple: () => $() && $().deactivate(),
          setLineRippleTransformOrigin: (ae) => $() && $().setRippleCenter(ae),
          // getOutlineAdapterMethods_
          closeOutline: () => V() && V().closeNotch(),
          hasOutline: () => !!V(),
          notchOutline: (ae) => V() && V().notch(ae)
        },
        {
          get helperText() {
            return K;
          },
          get characterCounter() {
            return te;
          },
          get leadingIcon() {
            return w;
          },
          get trailingIcon() {
            return z;
          }
        }
      ),
      !0
    ), R) {
      if (L() == null)
        throw new Error("SMUI Textfield must be initialized with either a non-undefined initial value or an Input component.");
      (B = s(M)) == null || B.init();
    } else
      fc().then(() => {
        var ae;
        if (L() == null)
          throw new Error("SMUI Textfield must be initialized with either a non-undefined initial value or an Input component.");
        (ae = s(M)) == null || ae.init();
      });
    return G(), () => {
      var ae;
      (ae = s(M)) == null || ae.destroy(), P.clear();
    };
  }), In(() => {
    _e && _e();
  });
  function re(B) {
    return B in Z ? Z[B] ?? null : J().classList.contains(B);
  }
  function Re(B) {
    Z[B] || (Z[B] = !0);
  }
  function Ce(B) {
    (!(B in Z) || Z[B]) && (Z[B] = !1);
  }
  function Ne(B, ae) {
    ne[B] != ae && (ae === "" || ae == null ? delete ne[B] : ne[B] = ae);
  }
  function Pe() {
    var B;
    (B = L()) == null || B.focus();
  }
  function Me() {
    var B;
    (B = L()) == null || B.blur();
  }
  function U() {
    if (s(M)) {
      const B = s(M).shouldFloat;
      s(M).notchOutline(B);
    }
  }
  function J() {
    return x;
  }
  var ve = { focus: Pe, blur: Me, layout: U, getElement: J }, De = Ng(), Fe = Y(De);
  {
    var ot = (B) => {
      var ae = Pg();
      ke(ae, (Xe, $e, tt) => ({ class: Xe, style: $e, for: void 0, ...tt }), [
        () => He({
          "mdc-text-field": !0,
          "mdc-text-field--disabled": c(),
          "mdc-text-field--textarea": m(),
          "mdc-text-field--filled": f() === "filled",
          "mdc-text-field--outlined": f() === "outlined",
          "smui-text-field--standard": f() === "standard" && !m(),
          "mdc-text-field--no-label": g() || e.label == null,
          "mdc-text-field--label-floating": s(D) || p() != null && p() !== "",
          "mdc-text-field--with-leading-icon": i(O()) ? e.leadingIcon : O(),
          "mdc-text-field--with-trailing-icon": i(C()) ? e.trailingIcon : C(),
          "mdc-text-field--with-internal-counter": m() && e.internalCounter,
          "mdc-text-field--invalid": y(),
          ...Z,
          [o()]: !0
        }),
        () => Object.entries(ne).map(([Xe, $e]) => `${Xe}: ${$e};`).concat([u()]).join(" "),
        () => Vn(W, ["input$", "label$", "ripple$", "outline$", "helperLine$"])
      ]);
      var Be = ce(ae);
      {
        var mt = (Xe) => {
          var $e = Rg(), tt = Y($e);
          {
            var Ut = (ht) => {
              var wt = Og();
              T(ht, wt);
            };
            oe(tt, (ht) => {
              f() === "filled" && ht(Ut);
            });
          }
          var vn = ge(tt, 2);
          {
            var st = (ht) => {
              {
                let wt = /* @__PURE__ */ fe(() => s(D) || p() != null && p() !== "" && (typeof p() != "number" || !isNaN(p()))), nt = /* @__PURE__ */ fe(() => it(W, "label$"));
                Te(
                  Eo(ht, Je(
                    {
                      get floatAbove() {
                        return s(wt);
                      },
                      get required() {
                        return d();
                      },
                      wrapped: !0
                    },
                    () => s(nt),
                    {
                      children: (Mt, Rn) => {
                        var Pt = ie(), St = Y(Pt);
                        {
                          var Ft = (Gt) => {
                          }, ln = (Gt) => {
                            var un = ie(), Jt = Y(un);
                            {
                              var Wn = (cn) => {
                                var Kt = vt();
                                xe(() => ze(Kt, e.label)), T(cn, Kt);
                              }, jr = (cn) => {
                                var Kt = ie(), mn = Y(Kt);
                                Ae(mn, () => e.label), T(cn, Kt);
                              };
                              oe(
                                Jt,
                                (cn) => {
                                  typeof e.label == "string" ? cn(Wn) : cn(jr, !1);
                                },
                                !0
                              );
                            }
                            T(Gt, un);
                          };
                          oe(St, (Gt) => {
                            e.label == null ? Gt(Ft) : Gt(ln, !1);
                          });
                        }
                        T(Mt, Pt);
                      },
                      $$slots: { default: !0 }
                    }
                  )),
                  (Mt) => k(Mt),
                  () => k()
                );
              }
            };
            oe(vn, (ht) => {
              !g() && e.label != null && ht(st);
            });
          }
          T(Xe, $e);
        };
        oe(Be, (Xe) => {
          !m() && f() !== "outlined" && Xe(mt);
        });
      }
      var Et = ge(Be, 2);
      {
        var yt = (Xe) => {
          {
            let $e = /* @__PURE__ */ fe(() => g() || e.label == null), tt = /* @__PURE__ */ fe(() => it(W, "outline$"));
            Te(
              td(Xe, Je(
                {
                  get noLabel() {
                    return s($e);
                  }
                },
                () => s(tt),
                {
                  children: (Ut, vn) => {
                    var st = ie(), ht = Y(st);
                    {
                      var wt = (nt) => {
                        {
                          let Mt = /* @__PURE__ */ fe(() => s(D) || p() != null && p() !== "" && (typeof p() != "number" || !isNaN(p()))), Rn = /* @__PURE__ */ fe(() => it(W, "label$"));
                          Te(
                            Eo(nt, Je(
                              {
                                get floatAbove() {
                                  return s(Mt);
                                },
                                get required() {
                                  return d();
                                },
                                wrapped: !0
                              },
                              () => s(Rn),
                              {
                                children: (Pt, St) => {
                                  var Ft = ie(), ln = Y(Ft);
                                  {
                                    var Gt = (Jt) => {
                                    }, un = (Jt) => {
                                      var Wn = ie(), jr = Y(Wn);
                                      {
                                        var cn = (mn) => {
                                          var ir = vt();
                                          xe(() => ze(ir, e.label)), T(mn, ir);
                                        }, Kt = (mn) => {
                                          var ir = ie(), oa = Y(ir);
                                          Ae(oa, () => e.label), T(mn, ir);
                                        };
                                        oe(
                                          jr,
                                          (mn) => {
                                            typeof e.label == "string" ? mn(cn) : mn(Kt, !1);
                                          },
                                          !0
                                        );
                                      }
                                      T(Jt, Wn);
                                    };
                                    oe(ln, (Jt) => {
                                      e.label == null ? Jt(Gt) : Jt(un, !1);
                                    });
                                  }
                                  T(Pt, Ft);
                                },
                                $$slots: { default: !0 }
                              }
                            )),
                            (Pt) => k(Pt),
                            () => k()
                          );
                        }
                      };
                      oe(ht, (nt) => {
                        !g() && e.label != null && nt(wt);
                      });
                    }
                    T(Ut, st);
                  },
                  $$slots: { default: !0 }
                }
              )),
              (Ut) => V(Ut),
              () => V()
            );
          }
        };
        oe(Et, (Xe) => {
          (m() || f() === "outlined") && Xe(yt);
        });
      }
      var Vt = ge(Et, 2);
      $a(Vt, {
        key: "SMUI:textfield:icon:leading",
        value: !0,
        children: (Xe, $e) => {
          var tt = ie(), Ut = Y(tt);
          Ae(Ut, () => e.leadingIcon ?? pe), T(Xe, tt);
        },
        $$slots: { default: !0 }
      });
      var yr = ge(Vt, 2);
      Ae(yr, () => e.children ?? pe);
      var pt = ge(yr, 2);
      {
        var Nt = (Xe) => {
          var $e = Dg(), tt = ce($e);
          {
            let vn = /* @__PURE__ */ fe(() => it(W, "input$"));
            Te(
              Lg(tt, Je(
                {
                  get disabled() {
                    return c();
                  },
                  get required() {
                    return d();
                  },
                  get updateInvalid() {
                    return S();
                  },
                  get initialInvalid() {
                    return s(j);
                  },
                  get "aria-controls"() {
                    return s(N);
                  },
                  get "aria-describedby"() {
                    return s(N);
                  }
                },
                () => s(vn),
                {
                  onblur: (st) => {
                    var ht;
                    X(D, !1), X(j, !0), Ke(J(), "blur", st), (ht = e.input$onblur) == null || ht.call(e, st);
                  },
                  onfocus: (st) => {
                    var ht;
                    X(D, !0), Ke(J(), "focus", st), (ht = e.input$onfocus) == null || ht.call(e, st);
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
              (st) => L(st),
              () => L()
            );
          }
          var Ut = ge(tt, 2);
          Ae(Ut, () => e.internalCounter ?? pe), xe((vn) => el($e, 1, vn), [
            () => yc(He({
              "mdc-text-field__resizer": !("input$resizable" in W) || e.input$resizable
            }))
          ]), T(Xe, $e);
        }, At = (Xe) => {
          var $e = Mg(), tt = Y($e);
          {
            var Ut = (wt) => {
              var nt = ie(), Mt = Y(nt);
              {
                var Rn = (St) => {
                  Ag(St, {
                    children: (Ft, ln) => {
                      var Gt = vt();
                      xe(() => ze(Gt, e.prefix)), T(Ft, Gt);
                    },
                    $$slots: { default: !0 }
                  });
                }, Pt = (St) => {
                  var Ft = ie(), ln = Y(Ft);
                  Ae(ln, () => e.prefix ?? pe), T(St, Ft);
                };
                oe(Mt, (St) => {
                  typeof e.prefix == "string" ? St(Rn) : St(Pt, !1);
                });
              }
              T(wt, nt);
            };
            oe(tt, (wt) => {
              e.prefix != null && wt(Ut);
            });
          }
          var vn = ge(tt, 2);
          {
            let wt = /* @__PURE__ */ fe(() => it(W, "input$"));
            Te(
              xg(vn, Je(
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
                    return S();
                  },
                  get initialInvalid() {
                    return s(j);
                  },
                  get "aria-controls"() {
                    return s(N);
                  },
                  get "aria-describedby"() {
                    return s(N);
                  }
                },
                () => g() && e.label != null && typeof e.label == "string" ? { placeholder: e.label } : {},
                () => s(wt),
                {
                  onblur: (nt) => {
                    var Mt;
                    X(D, !1), X(j, !0), Ke(J(), "blur", nt), (Mt = e.input$onblur) == null || Mt.call(e, nt);
                  },
                  onfocus: (nt) => {
                    var Mt;
                    X(D, !0), Ke(J(), "focus", nt), (Mt = e.input$onfocus) == null || Mt.call(e, nt);
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
              (nt) => L(nt),
              () => L()
            );
          }
          var st = ge(vn, 2);
          {
            var ht = (wt) => {
              var nt = ie(), Mt = Y(nt);
              {
                var Rn = (St) => {
                  Cg(St, {
                    children: (Ft, ln) => {
                      var Gt = vt();
                      xe(() => ze(Gt, e.suffix)), T(Ft, Gt);
                    },
                    $$slots: { default: !0 }
                  });
                }, Pt = (St) => {
                  var Ft = ie(), ln = Y(Ft);
                  Ae(ln, () => e.suffix ?? pe), T(St, Ft);
                };
                oe(Mt, (St) => {
                  typeof e.suffix == "string" ? St(Rn) : St(Pt, !1);
                });
              }
              T(wt, nt);
            };
            oe(st, (wt) => {
              e.suffix != null && wt(ht);
            });
          }
          T(Xe, $e);
        };
        oe(pt, (Xe) => {
          m() && typeof p() == "string" ? Xe(Nt) : Xe(At, !1);
        });
      }
      var On = ge(pt, 2);
      $a(On, {
        key: "SMUI:textfield:icon:leading",
        value: !1,
        children: (Xe, $e) => {
          var tt = ie(), Ut = Y(tt);
          Ae(Ut, () => e.trailingIcon ?? pe), T(Xe, tt);
        },
        $$slots: { default: !0 }
      });
      var Ii = ge(On, 2);
      {
        var qn = (Xe) => {
          {
            let $e = /* @__PURE__ */ fe(() => it(W, "ripple$"));
            Te(ed(Xe, Je(() => s($e))), (tt) => $(tt), () => $());
          }
        };
        oe(Ii, (Xe) => {
          !m() && f() !== "outlined" && l() && Xe(qn);
        });
      }
      Te(ae, (Xe) => x = Xe, () => x), Ue(ae, (Xe, $e) => Yt == null ? void 0 : Yt(Xe, $e), () => ({
        ripple: !m() && f() === "filled",
        unbounded: !1,
        addClass: Re,
        removeClass: Ce,
        addStyle: Ne,
        eventTarget: s(se),
        activeTarget: s(se),
        initPromise: q
      })), Ue(ae, (Xe, $e) => Q == null ? void 0 : Q(Xe, $e), a), T(B, ae);
    }, ft = (B) => {
      var ae = Hg();
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
          ...Z,
          [o()]: !0
        }),
        () => Object.entries(ne).map(([pt, Nt]) => `${pt}: ${Nt};`).concat([u()]).join(" "),
        () => Vn(W, ["input$", "label$", "ripple$", "outline$", "helperLine$"])
      ]);
      var Be = ce(ae);
      {
        var mt = (pt) => {
          var Nt = ie(), At = Y(Nt);
          Ae(At, () => e.label ?? pe), T(pt, Nt);
        };
        oe(Be, (pt) => {
          typeof e.label != "string" && pt(mt);
        });
      }
      var Et = ge(Be, 2);
      $a(Et, {
        key: "SMUI:textfield:icon:leading",
        value: !0,
        children: (pt, Nt) => {
          var At = ie(), On = Y(At);
          Ae(On, () => e.leadingIcon ?? pe), T(pt, At);
        },
        $$slots: { default: !0 }
      });
      var yt = ge(Et, 2);
      Ae(yt, () => e.children ?? pe);
      var Vt = ge(yt, 2);
      $a(Vt, {
        key: "SMUI:textfield:icon:leading",
        value: !1,
        children: (pt, Nt) => {
          var At = ie(), On = Y(At);
          Ae(On, () => e.trailingIcon ?? pe), T(pt, At);
        },
        $$slots: { default: !0 }
      });
      var yr = ge(Vt, 2);
      Ae(yr, () => e.line ?? pe), Te(ae, (pt) => x = pt, () => x), Ue(ae, (pt, Nt) => Yt == null ? void 0 : Yt(pt, Nt), () => ({
        ripple: l(),
        unbounded: !1,
        addClass: Re,
        removeClass: Ce,
        addStyle: Ne
      })), Ue(ae, (pt, Nt) => Q == null ? void 0 : Q(pt, Nt), a), T(B, ae);
    };
    oe(Fe, (B) => {
      R ? B(ot) : B(ft, !1);
    });
  }
  var me = ge(Fe, 2);
  {
    var F = (B) => {
      {
        let ae = /* @__PURE__ */ fe(() => it(W, "helperLine$"));
        Sg(B, Je(() => s(ae), {
          children: (Be, mt) => {
            var Et = ie(), yt = Y(Et);
            Ae(yt, () => e.helper ?? pe), T(Be, Et);
          },
          $$slots: { default: !0 }
        }));
      }
    };
    oe(me, (B) => {
      e.helper && B(F);
    });
  }
  return T(t, De), Le(ve);
}
var Ug = /* @__PURE__ */ de("<i><!></i>");
function Fg(t, e) {
  we(e, !0);
  const n = () => Bn(h, "$leadingStore", r), [r, i] = rr();
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
  ]), d, m = /* @__PURE__ */ he(void 0), f = new bi(), g = Ie({});
  const h = ye("SMUI:textfield:icon:leading"), p = n();
  let b = /* @__PURE__ */ he(void 0);
  const y = /* @__PURE__ */ fe(() => ({ role: e.role, tabindex: u() })), S = ye("SMUI:textfield:leading-icon:mount"), E = ye("SMUI:textfield:leading-icon:unmount"), _ = ye("SMUI:textfield:trailing-icon:mount"), A = ye("SMUI:textfield:trailing-icon:unmount");
  at(() => (X(
    m,
    new pg({
      getAttr: I,
      setAttr: O,
      removeAttr: C,
      setContent: (M) => {
        X(b, M, !0);
      },
      registerInteractionHandler: (M, P) => f.on(L(), M, P),
      deregisterInteractionHandler: (M, P) => f.off(L(), M, P),
      notifyIconAction: () => Ke(L(), "SMUITextFieldIcon")
    }),
    !0
  ), p ? S && S(s(m)) : _ && _(s(m)), s(m).init(), () => {
    var M;
    s(m) && (p ? E && E(s(m)) : A && A(s(m))), (M = s(m)) == null || M.destroy(), f.clear();
  }));
  function I(M) {
    return M in g ? g[M] ?? null : L().getAttribute(M);
  }
  function O(M, P) {
    g[M] !== P && (g[M] = P);
  }
  function C(M) {
    (!(M in g) || g[M] != null) && (g[M] = void 0);
  }
  function L() {
    return d;
  }
  var k = { getElement: L }, $ = Ug();
  ke(
    $,
    (M) => ({
      class: M,
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
  var V = ce($);
  {
    var W = (M) => {
      var P = ie(), Z = Y(P);
      Ae(Z, () => e.children ?? pe), T(M, P);
    }, R = (M) => {
      var P = vt();
      xe(() => ze(P, s(b))), T(M, P);
    };
    oe(V, (M) => {
      s(b) == null ? M(W) : M(R, !1);
    });
  }
  Te($, (M) => d = M, () => d), Ue($, (M, P) => Q == null ? void 0 : Q(M, P), a), T(t, $);
  var x = Le(k);
  return i(), x;
}
function kg(t, e) {
  we(e, !0);
  let n = v(e, "placeholder", 3, ""), r = v(e, "label", 3, ""), i = v(e, "icon", 3, ""), a = v(e, "value", 15, ""), o = v(e, "variant", 3, "standard"), u = v(e, "styles", 3, ""), l = v(e, "required", 3, !1), c = v(e, "invalid", 3, !1), d = v(e, "oninput", 3, () => {
  });
  var m = ie(), f = Y(m);
  {
    var g = (p) => {
      {
        const b = (S) => {
          Fg(S, {
            class: "material-icons",
            children: (E, _) => {
              var A = vt();
              xe(() => ze(A, i())), T(E, A);
            },
            $$slots: { default: !0 }
          });
        };
        let y = /* @__PURE__ */ fe(() => `width: 100%; ${u()}`);
        Hs(p, {
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
          set value(S) {
            a(S);
          },
          leadingIcon: b,
          $$slots: { leadingIcon: !0 }
        });
      }
    }, h = (p) => {
      Hs(p, {
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
var Bg = {
  ANCHOR: "mdc-menu-surface--anchor",
  ANIMATING_CLOSED: "mdc-menu-surface--animating-closed",
  ANIMATING_OPEN: "mdc-menu-surface--animating-open",
  FIXED: "mdc-menu-surface--fixed",
  IS_OPEN_BELOW: "mdc-menu-surface--is-open-below",
  OPEN: "mdc-menu-surface--open",
  ROOT: "mdc-menu-surface"
}, Vg = {
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
}, va = {
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
var ui;
(function(t) {
  t[t.TOP_LEFT = 0] = "TOP_LEFT", t[t.TOP_RIGHT = 4] = "TOP_RIGHT", t[t.BOTTOM_LEFT = 1] = "BOTTOM_LEFT", t[t.BOTTOM_RIGHT = 5] = "BOTTOM_RIGHT", t[t.TOP_START = 8] = "TOP_START", t[t.TOP_END = 12] = "TOP_END", t[t.BOTTOM_START = 9] = "BOTTOM_START", t[t.BOTTOM_END = 13] = "BOTTOM_END";
})(ui || (ui = {}));
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
var Sr, lr, Ze = {
  LIST_ITEM_ACTIVATED_CLASS: "mdc-list-item--activated",
  LIST_ITEM_CLASS: "mdc-list-item",
  LIST_ITEM_DISABLED_CLASS: "mdc-list-item--disabled",
  LIST_ITEM_SELECTED_CLASS: "mdc-list-item--selected",
  LIST_ITEM_TEXT_CLASS: "mdc-list-item__text",
  LIST_ITEM_PRIMARY_TEXT_CLASS: "mdc-list-item__primary-text",
  ROOT: "mdc-list"
};
Sr = {}, Sr["" + Ze.LIST_ITEM_ACTIVATED_CLASS] = "mdc-list-item--activated", Sr["" + Ze.LIST_ITEM_CLASS] = "mdc-list-item", Sr["" + Ze.LIST_ITEM_DISABLED_CLASS] = "mdc-list-item--disabled", Sr["" + Ze.LIST_ITEM_SELECTED_CLASS] = "mdc-list-item--selected", Sr["" + Ze.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-list-item__primary-text", Sr["" + Ze.ROOT] = "mdc-list";
var Ti = (lr = {}, lr["" + Ze.LIST_ITEM_ACTIVATED_CLASS] = "mdc-deprecated-list-item--activated", lr["" + Ze.LIST_ITEM_CLASS] = "mdc-deprecated-list-item", lr["" + Ze.LIST_ITEM_DISABLED_CLASS] = "mdc-deprecated-list-item--disabled", lr["" + Ze.LIST_ITEM_SELECTED_CLASS] = "mdc-deprecated-list-item--selected", lr["" + Ze.LIST_ITEM_TEXT_CLASS] = "mdc-deprecated-list-item__text", lr["" + Ze.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-deprecated-list-item__primary-text", lr["" + Ze.ROOT] = "mdc-deprecated-list", lr), Ar = {
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
    .` + Ze.LIST_ITEM_CLASS + ` button:not(:disabled),
    .` + Ze.LIST_ITEM_CLASS + ` a,
    .` + Ti[Ze.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + Ti[Ze.LIST_ITEM_CLASS] + ` a
  `,
  DEPRECATED_SELECTOR: ".mdc-deprecated-list",
  FOCUSABLE_CHILD_ELEMENTS: `
    .` + Ze.LIST_ITEM_CLASS + ` button:not(:disabled),
    .` + Ze.LIST_ITEM_CLASS + ` a,
    .` + Ze.LIST_ITEM_CLASS + ` input[type="radio"]:not(:disabled),
    .` + Ze.LIST_ITEM_CLASS + ` input[type="checkbox"]:not(:disabled),
    .` + Ti[Ze.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + Ti[Ze.LIST_ITEM_CLASS] + ` a,
    .` + Ti[Ze.LIST_ITEM_CLASS] + ` input[type="radio"]:not(:disabled),
    .` + Ti[Ze.LIST_ITEM_CLASS] + ` input[type="checkbox"]:not(:disabled)
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
var Gg = ["input", "button", "textarea", "select"], Sn = function(t) {
  var e = t.target;
  if (e) {
    var n = ("" + e.tagName).toLowerCase();
    Gg.indexOf(n) === -1 && t.preventDefault();
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
function jg() {
  var t = {
    bufferClearTimeout: 0,
    currentFirstChar: "",
    sortedIndexCursor: 0,
    typeaheadBuffer: ""
  };
  return t;
}
function qg(t, e) {
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
function Ns(t, e) {
  var n = t.nextChar, r = t.focusItemAtIndex, i = t.sortedIndexByFirstChar, a = t.focusedItemIndex, o = t.skipFocus, u = t.isItemAtIndexDisabled;
  clearTimeout(e.bufferClearTimeout), e.bufferClearTimeout = setTimeout(function() {
    rd(e);
  }, Ct.TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS), e.typeaheadBuffer = e.typeaheadBuffer + n;
  var l;
  return e.typeaheadBuffer.length === 1 ? l = Wg(i, a, u, e) : l = zg(i, u, e), l !== -1 && !o && r(l), l;
}
function Wg(t, e, n, r) {
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
function zg(t, e, n) {
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
function nd(t) {
  return t.typeaheadBuffer.length > 0;
}
function rd(t) {
  t.typeaheadBuffer = "";
}
function cu(t, e) {
  var n = t.event, r = t.isTargetListItem, i = t.focusedItemIndex, a = t.focusItemAtIndex, o = t.sortedIndexByFirstChar, u = t.isItemAtIndexDisabled, l = Lt(n) === "ArrowLeft", c = Lt(n) === "ArrowUp", d = Lt(n) === "ArrowRight", m = Lt(n) === "ArrowDown", f = Lt(n) === "Home", g = Lt(n) === "End", h = Lt(n) === "Enter", p = Lt(n) === "Spacebar";
  if (n.altKey || n.ctrlKey || n.metaKey || l || c || d || m || f || g || h)
    return -1;
  var b = !p && n.key.length === 1;
  if (b) {
    Sn(n);
    var y = {
      focusItemAtIndex: a,
      focusedItemIndex: i,
      nextChar: n.key.toLowerCase(),
      sortedIndexByFirstChar: o,
      skipFocus: !1,
      isItemAtIndexDisabled: u
    };
    return Ns(y, e);
  }
  if (!p)
    return -1;
  r && Sn(n);
  var S = r && nd(e);
  if (S) {
    var y = {
      focusItemAtIndex: a,
      focusedItemIndex: i,
      nextChar: " ",
      sortedIndexByFirstChar: o,
      skipFocus: !1,
      isItemAtIndexDisabled: u
    };
    return Ns(y, e);
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
function Kg(t) {
  return t instanceof Array;
}
var Xg = ["Alt", "Control", "Meta", "Shift"];
function du(t) {
  var e = new Set(t ? Xg.filter(function(n) {
    return t.getModifierState(n);
  }) : []);
  return function(n) {
    return n.every(function(r) {
      return e.has(r);
    }) && n.length === e.size;
  };
}
var Zg = (
  /** @class */
  function(t) {
    et(e, t);
    function e(n) {
      var r = t.call(this, be(be({}, e.defaultAdapter), n)) || this;
      return r.wrapFocus = !1, r.isVertical = !0, r.isSingleSelectionList = !1, r.areDisabledItemsFocusable = !0, r.selectedIndex = Ct.UNSET_INDEX, r.focusedItemIndex = Ct.UNSET_INDEX, r.useActivatedClass = !1, r.useSelectedAttr = !1, r.ariaCurrentAttrValue = null, r.isCheckboxList = !1, r.isRadioList = !1, r.lastSelectedIndex = null, r.hasTypeahead = !1, r.typeaheadState = jg(), r.sortedIndexByFirstChar = /* @__PURE__ */ new Map(), r;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return Ar;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Ze;
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
        var r = this.adapter.listItemAtIndexHasClass(n, Ze.LIST_ITEM_ACTIVATED_CLASS);
        r && this.setUseActivatedClass(!0), this.isSingleSelectionList = !0, this.selectedIndex = n;
      }
    }, e.prototype.getSelectedIndexFromDOM = function() {
      for (var n = Ct.UNSET_INDEX, r = this.adapter.getListItemCount(), i = 0; i < r; i++) {
        var a = this.adapter.listItemAtIndexHasClass(i, Ze.LIST_ITEM_SELECTED_CLASS), o = this.adapter.listItemAtIndexHasClass(i, Ze.LIST_ITEM_ACTIVATED_CLASS);
        if (a || o) {
          n = i;
          break;
        }
      }
      return n;
    }, e.prototype.setHasTypeahead = function(n) {
      this.hasTypeahead = n, n && (this.sortedIndexByFirstChar = this.typeaheadInitSortedIndex());
    }, e.prototype.isTypeaheadInProgress = function() {
      return this.hasTypeahead && nd(this.typeaheadState);
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
      return this.adapter.listItemAtIndexHasClass(n, Ze.LIST_ITEM_DISABLED_CLASS);
    }, e.prototype.handleKeydown = function(n, r, i) {
      var a = this, o, u = Lt(n) === "ArrowLeft", l = Lt(n) === "ArrowUp", c = Lt(n) === "ArrowRight", d = Lt(n) === "ArrowDown", m = Lt(n) === "Home", f = Lt(n) === "End", g = Lt(n) === "Enter", h = Lt(n) === "Spacebar", p = this.isVertical && d || !this.isVertical && c, b = this.isVertical && l || !this.isVertical && u, y = n.key === "A" || n.key === "a", S = du(n);
      if (this.adapter.isRootFocused()) {
        if ((b || f) && S([]))
          n.preventDefault(), this.focusLastElement();
        else if ((p || m) && S([]))
          n.preventDefault(), this.focusFirstElement();
        else if (b && S(["Shift"]) && this.isCheckboxList) {
          n.preventDefault();
          var E = this.focusLastElement();
          E !== -1 && this.setSelectedIndexOnAction(E, !1);
        } else if (p && S(["Shift"]) && this.isCheckboxList) {
          n.preventDefault();
          var E = this.focusFirstElement();
          E !== -1 && this.setSelectedIndexOnAction(E, !1);
        }
        if (this.hasTypeahead) {
          var _ = {
            event: n,
            focusItemAtIndex: function(O) {
              a.focusItemAtIndex(O);
            },
            focusedItemIndex: -1,
            isTargetListItem: r,
            sortedIndexByFirstChar: this.sortedIndexByFirstChar,
            isItemAtIndexDisabled: function(O) {
              return a.isIndexDisabled(O);
            }
          };
          cu(_, this.typeaheadState);
        }
        return;
      }
      var A = this.adapter.getFocusedElementIndex();
      if (!(A === -1 && (A = i, A < 0))) {
        if (p && S([]))
          Sn(n), this.focusNextElement(A);
        else if (b && S([]))
          Sn(n), this.focusPrevElement(A);
        else if (p && S(["Shift"]) && this.isCheckboxList) {
          Sn(n);
          var E = this.focusNextElement(A);
          E !== -1 && this.setSelectedIndexOnAction(E, !1);
        } else if (b && S(["Shift"]) && this.isCheckboxList) {
          Sn(n);
          var E = this.focusPrevElement(A);
          E !== -1 && this.setSelectedIndexOnAction(E, !1);
        } else if (m && S([]))
          Sn(n), this.focusFirstElement();
        else if (f && S([]))
          Sn(n), this.focusLastElement();
        else if (m && S(["Control", "Shift"]) && this.isCheckboxList) {
          if (Sn(n), this.isIndexDisabled(A))
            return;
          this.focusFirstElement(), this.toggleCheckboxRange(0, A, A);
        } else if (f && S(["Control", "Shift"]) && this.isCheckboxList) {
          if (Sn(n), this.isIndexDisabled(A))
            return;
          this.focusLastElement(), this.toggleCheckboxRange(A, this.adapter.getListItemCount() - 1, A);
        } else if (y && S(["Control"]) && this.isCheckboxList)
          n.preventDefault(), this.checkboxListToggleAll(this.selectedIndex === Ct.UNSET_INDEX ? [] : this.selectedIndex, !0);
        else if ((g || h) && S([])) {
          if (r) {
            var I = n.target;
            if (I && I.tagName === "A" && g || (Sn(n), this.isIndexDisabled(A)))
              return;
            this.isTypeaheadInProgress() || (this.isSelectableList() && this.setSelectedIndexOnAction(A, !1), this.adapter.notifyAction(A));
          }
        } else if ((g || h) && S(["Shift"]) && this.isCheckboxList) {
          var I = n.target;
          if (I && I.tagName === "A" && g || (Sn(n), this.isIndexDisabled(A)))
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
          cu(_, this.typeaheadState);
        }
      }
    }, e.prototype.handleClick = function(n, r, i) {
      var a, o = du(i);
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
      this.isIndexValid(n, !1) && (r ? (this.adapter.removeClassForElementIndex(n, Ze.LIST_ITEM_DISABLED_CLASS), this.adapter.setAttributeForElementIndex(n, Ar.ARIA_DISABLED, "false")) : (this.adapter.addClassForElementIndex(n, Ze.LIST_ITEM_DISABLED_CLASS), this.adapter.setAttributeForElementIndex(n, Ar.ARIA_DISABLED, "true")));
    }, e.prototype.setSingleSelectionAtIndex = function(n, r) {
      if (r === void 0 && (r = {}), !(this.selectedIndex === n && !r.forceUpdate)) {
        var i = Ze.LIST_ITEM_SELECTED_CLASS;
        this.useActivatedClass && (i = Ze.LIST_ITEM_ACTIVATED_CLASS), this.selectedIndex !== Ct.UNSET_INDEX && this.adapter.removeClassForElementIndex(this.selectedIndex, i), this.setAriaForSingleSelectionAtIndex(n), this.setTabindexAtIndex(n), n !== Ct.UNSET_INDEX && this.adapter.addClassForElementIndex(n, i), this.selectedIndex = n, r.isUserInteraction && !r.forceUpdate && this.adapter.notifySelectionChange([n]);
      }
    }, e.prototype.setAriaForSingleSelectionAtIndex = function(n) {
      this.selectedIndex === Ct.UNSET_INDEX && (this.ariaCurrentAttrValue = this.adapter.getAttributeForElementIndex(n, Ar.ARIA_CURRENT));
      var r = this.ariaCurrentAttrValue !== null, i = r ? Ar.ARIA_CURRENT : Ar.ARIA_SELECTED;
      if (this.selectedIndex !== Ct.UNSET_INDEX && this.adapter.setAttributeForElementIndex(this.selectedIndex, i, "false"), n !== Ct.UNSET_INDEX) {
        var a = r ? this.ariaCurrentAttrValue : "true";
        this.adapter.setAttributeForElementIndex(n, i, a);
      }
    }, e.prototype.getSelectionAttribute = function() {
      return this.useSelectedAttr ? Ar.ARIA_SELECTED : Ar.ARIA_CHECKED;
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
      for (var a = new Set(this.selectedIndex === Ct.UNSET_INDEX ? [] : this.selectedIndex), o = !(a != null && a.has(i)), u = Xi([n, r].sort(), 2), l = u[0], c = u[1], d = this.getSelectionAttribute(), m = [], f = l; f <= c; f++)
        if (!this.isIndexDisabled(f)) {
          var g = a.has(f);
          o !== g && (m.push(f), this.adapter.setCheckedCheckboxOrRadioAtIndex(f, o), this.adapter.setAttributeForElementIndex(f, d, "" + o), o ? a.add(f) : a.delete(f));
        }
      m.length && (this.selectedIndex = li([], Xi(a)), this.adapter.notifySelectionChange(m));
    }, e.prototype.setTabindexAtIndex = function(n) {
      this.focusedItemIndex === Ct.UNSET_INDEX && n !== 0 ? this.adapter.setAttributeForElementIndex(0, "tabindex", "-1") : this.focusedItemIndex >= 0 && this.focusedItemIndex !== n && this.adapter.setAttributeForElementIndex(this.focusedItemIndex, "tabindex", "-1"), !(this.selectedIndex instanceof Array) && this.selectedIndex !== n && this.adapter.setAttributeForElementIndex(this.selectedIndex, "tabindex", "-1"), n !== Ct.UNSET_INDEX && this.adapter.setAttributeForElementIndex(n, "tabindex", "0");
    }, e.prototype.isSelectableList = function() {
      return this.isSingleSelectionList || this.isCheckboxList || this.isRadioList;
    }, e.prototype.setTabindexToFirstSelectedOrFocusedItem = function() {
      var n = this.getFirstSelectedOrFocusedItemIndex();
      this.setTabindexAtIndex(n);
    }, e.prototype.getFirstSelectedOrFocusedItemIndex = function() {
      return this.isSelectableList() ? typeof this.selectedIndex == "number" && this.selectedIndex !== Ct.UNSET_INDEX ? this.selectedIndex : Kg(this.selectedIndex) && this.selectedIndex.length > 0 ? this.selectedIndex.reduce(function(n, r) {
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
      return Ns(o, this.typeaheadState);
    }, e.prototype.typeaheadInitSortedIndex = function() {
      return qg(this.adapter.getListItemCount(), this.adapter.getPrimaryTextAtIndex);
    }, e.prototype.clearTypeaheadBuffer = function() {
      rd(this.typeaheadState);
    }, e;
  }(xt)
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
var id = (
  /** @class */
  function(t) {
    et(e, t);
    function e(n) {
      var r = t.call(this, be(be({}, e.defaultAdapter), n)) || this;
      return r.isSurfaceOpen = !1, r.isQuickOpen = !1, r.isHoistedElement = !1, r.isFixedPosition = !1, r.isHorizontallyCenteredOnViewport = !1, r.maxHeight = 0, r.openBottomBias = 0, r.openAnimationEndTimerId = 0, r.closeAnimationEndTimerId = 0, r.animationRequestId = 0, r.anchorCorner = ui.TOP_START, r.originCorner = ui.TOP_START, r.anchorMargin = { top: 0, right: 0, bottom: 0, left: 0 }, r.position = { x: 0, y: 0 }, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Bg;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Vg;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return va;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "Corner", {
      get: function() {
        return ui;
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
        }, va.TRANSITION_OPEN_DURATION);
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
          }, va.TRANSITION_CLOSE_DURATION);
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
      d.width / m.width > va.ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO && (o = "center"), (this.isHoistedElement || this.isFixedPosition) && this.adjustPositionForHoistedElement(f), this.adapter.setTransformOrigin(o + " " + a), this.adapter.setPosition(f), this.adapter.setMaxHeight(i ? i + "px" : ""), this.hasBit(r, Tt.BOTTOM) || this.adapter.addClass(e.cssClasses.IS_OPEN_BELOW);
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
      var S = b - o.width > 0, E = y - o.width > 0, _ = this.hasBit(n, Tt.FLIP_RTL) && this.hasBit(n, Tt.RIGHT);
      return E && _ && f || !S && _ ? n = this.unsetBit(n, Tt.RIGHT) : (S && p && f || S && !p && h || !E && b >= y) && (n = this.setBit(n, Tt.RIGHT)), n;
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
        for (var m = Wt(d), f = m.next(); !f.done; f = m.next()) {
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
      }, va.TOUCH_EVENT_WAIT_MS);
    }, e.prototype.hasBit = function(n, r) {
      return !!(n & r);
    }, e.prototype.setBit = function(n, r) {
      return n | r;
    }, e.prototype.unsetBit = function(n, r) {
      return n ^ r;
    }, e.prototype.isFinite = function(n) {
      return typeof n == "number" && isFinite(n);
    }, e;
  }(xt)
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
var fu = {
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
function Yg(t) {
  return !!t.document && typeof t.document.createElement == "function";
}
function Qg(t, e) {
  if (Yg(t) && e in fu) {
    var n = t.document.createElement("div"), r = fu[e], i = r.standard, a = r.prefixed, o = i in n.style;
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
var Hi = {
  MENU_SELECTED_LIST_ITEM: "mdc-menu-item--selected",
  MENU_SELECTION_GROUP: "mdc-menu__selection-group",
  ROOT: "mdc-menu"
}, xi = {
  ARIA_CHECKED_ATTR: "aria-checked",
  ARIA_DISABLED_ATTR: "aria-disabled",
  CHECKBOX_SELECTOR: 'input[type="checkbox"]',
  LIST_SELECTOR: ".mdc-list,.mdc-deprecated-list",
  SELECTED_EVENT: "MDCMenu:selected",
  SKIP_RESTORE_FOCUS: "data-menu-item-skip-restore-focus"
}, Jg = {
  FOCUS_ROOT_INDEX: -1
}, Di;
(function(t) {
  t[t.NONE = 0] = "NONE", t[t.LIST_ROOT = 1] = "LIST_ROOT", t[t.FIRST_ITEM = 2] = "FIRST_ITEM", t[t.LAST_ITEM = 3] = "LAST_ITEM";
})(Di || (Di = {}));
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
var $g = (
  /** @class */
  function(t) {
    et(e, t);
    function e(n) {
      var r = t.call(this, be(be({}, e.defaultAdapter), n)) || this;
      return r.closeAnimationEndTimerId = 0, r.defaultFocusState = Di.LIST_ROOT, r.selectedIndex = -1, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Hi;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return xi;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return Jg;
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
        var a = this.adapter.getAttributeFromElementAtIndex(i, xi.SKIP_RESTORE_FOCUS) === "true";
        this.adapter.closeSurface(a), this.closeAnimationEndTimerId = setTimeout(function() {
          var o = r.adapter.getElementIndex(n);
          o >= 0 && r.adapter.isSelectableItemAtIndex(o) && r.setSelectedIndex(o);
        }, id.numbers.TRANSITION_CLOSE_DURATION);
      }
    }, e.prototype.handleMenuSurfaceOpened = function() {
      switch (this.defaultFocusState) {
        case Di.FIRST_ITEM:
          this.adapter.focusItemAtIndex(0);
          break;
        case Di.LAST_ITEM:
          this.adapter.focusItemAtIndex(this.adapter.getMenuItemCount() - 1);
          break;
        case Di.NONE:
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
      r >= 0 && (this.adapter.removeAttributeFromElementAtIndex(r, xi.ARIA_CHECKED_ATTR), this.adapter.removeClassFromElementAtIndex(r, Hi.MENU_SELECTED_LIST_ITEM)), this.adapter.addClassToElementAtIndex(n, Hi.MENU_SELECTED_LIST_ITEM), this.adapter.addAttributeToElementAtIndex(n, xi.ARIA_CHECKED_ATTR, "true"), this.selectedIndex = n;
    }, e.prototype.setEnabled = function(n, r) {
      this.validatedIndex(n), r ? (this.adapter.removeClassFromElementAtIndex(n, Ze.LIST_ITEM_DISABLED_CLASS), this.adapter.addAttributeToElementAtIndex(n, xi.ARIA_DISABLED_ATTR, "false")) : (this.adapter.addClassToElementAtIndex(n, Ze.LIST_ITEM_DISABLED_CLASS), this.adapter.addAttributeToElementAtIndex(n, xi.ARIA_DISABLED_ATTR, "true"));
    }, e.prototype.validatedIndex = function(n) {
      var r = this.adapter.getMenuItemCount(), i = n >= 0 && n < r;
      if (!i)
        throw new Error("MDCMenuFoundation: No list item at specified index.");
    }, e;
  }(xt)
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
}, ns = {
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
}, Xr = {
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
var ep = (
  /** @class */
  function(t) {
    et(e, t);
    function e(n, r) {
      r === void 0 && (r = {});
      var i = t.call(this, be(be({}, e.defaultAdapter), n)) || this;
      return i.disabled = !1, i.isMenuOpen = !1, i.useDefaultValidation = !0, i.customValidity = !0, i.lastSelectedIndex = Xr.UNSET_INDEX, i.clickDebounceTimeout = 0, i.recentlyClicked = !1, i.leadingIcon = r.leadingIcon, i.helperText = r.helperText, i;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return It;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return Xr;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return ns;
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
      r === void 0 && (r = !1), i === void 0 && (i = !1), !(n >= this.adapter.getMenuItemCount()) && (n === Xr.UNSET_INDEX ? this.adapter.setSelectedText("") : this.adapter.setSelectedText(this.adapter.getMenuItemTextAtIndex(n).trim()), this.adapter.setSelectedIndex(n), r && this.adapter.closeMenu(), !i && this.lastSelectedIndex !== n && this.handleChange(), this.lastSelectedIndex = n);
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
      return n !== Xr.UNSET_INDEX ? r[n] : "";
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
        var r = Lt(n) === Ge.ENTER, i = Lt(n) === Ge.SPACEBAR, a = Lt(n) === Ge.ARROW_UP, o = Lt(n) === Ge.ARROW_DOWN, u = n.ctrlKey || n.metaKey;
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
          var i = Xr.LABEL_SCALE, a = this.adapter.getLabelWidth() * i;
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
      return this.useDefaultValidation && this.adapter.hasClass(It.REQUIRED) && !this.adapter.hasClass(It.DISABLED) ? this.getSelectedIndex() !== Xr.UNSET_INDEX && (this.getSelectedIndex() !== 0 || !!this.getValue()) : this.customValidity;
    }, e.prototype.setRequired = function(n) {
      n ? this.adapter.addClass(It.REQUIRED) : this.adapter.removeClass(It.REQUIRED), this.adapter.setSelectAnchorAttr("aria-required", n.toString()), this.adapter.setLabelRequired(n);
    }, e.prototype.getRequired = function() {
      return this.adapter.getSelectAnchorAttr("aria-required") === "true";
    }, e.prototype.init = function() {
      var n = this.adapter.getAnchorElement();
      n && (this.adapter.setMenuAnchorElement(n), this.adapter.setMenuAnchorCorner(ui.BOTTOM_START)), this.adapter.setMenuWrapFocus(!1), this.setDisabled(this.adapter.hasClass(It.DISABLED)), this.syncHelperTextValidity(!this.adapter.hasClass(It.INVALID)), this.layout(), this.layoutOptions();
    }, e.prototype.blur = function() {
      this.adapter.removeClass(It.FOCUSED), this.layout(), this.adapter.deactivateBottomLine();
      var n = this.adapter.hasClass(It.REQUIRED);
      n && this.useDefaultValidation && this.setValid(this.isValid());
    }, e.prototype.syncHelperTextValidity = function(n) {
      if (this.helperText) {
        this.helperText.setValidity(n);
        var r = this.helperText.isVisible(), i = this.helperText.getId();
        r && i ? this.adapter.setSelectAnchorAttr(ns.ARIA_DESCRIBEDBY, i) : this.adapter.removeSelectAnchorAttr(ns.ARIA_DESCRIBEDBY);
      }
    }, e.prototype.setClickDebounceTimeout = function() {
      var n = this;
      clearTimeout(this.clickDebounceTimeout), this.clickDebounceTimeout = setTimeout(function() {
        n.recentlyClicked = !1;
      }, Xr.CLICK_DEBOUNCE_TIMEOUT_MS), this.recentlyClicked = !0;
    }, e;
  }(xt)
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
var Zr = {
  ARIA_HIDDEN: "aria-hidden",
  ROLE: "role"
}, ur = {
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
var tp = (
  /** @class */
  function(t) {
    et(e, t);
    function e(n) {
      return t.call(this, be(be({}, e.defaultAdapter), n)) || this;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return ur;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Zr;
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
      return this.adapter.getAttr(Zr.ARIA_HIDDEN) !== "true";
    }, e.prototype.setContent = function(n) {
      this.adapter.setContent(n);
    }, e.prototype.setValidation = function(n) {
      n ? this.adapter.addClass(ur.HELPER_TEXT_VALIDATION_MSG) : this.adapter.removeClass(ur.HELPER_TEXT_VALIDATION_MSG);
    }, e.prototype.setValidationMsgPersistent = function(n) {
      n ? this.adapter.addClass(ur.HELPER_TEXT_VALIDATION_MSG_PERSISTENT) : this.adapter.removeClass(ur.HELPER_TEXT_VALIDATION_MSG_PERSISTENT);
    }, e.prototype.getIsValidation = function() {
      return this.adapter.hasClass(ur.HELPER_TEXT_VALIDATION_MSG);
    }, e.prototype.getIsValidationMsgPersistent = function() {
      return this.adapter.hasClass(ur.HELPER_TEXT_VALIDATION_MSG_PERSISTENT);
    }, e.prototype.setValidity = function(n) {
      var r = this.adapter.hasClass(ur.HELPER_TEXT_VALIDATION_MSG);
      if (r) {
        var i = this.adapter.hasClass(ur.HELPER_TEXT_VALIDATION_MSG_PERSISTENT), a = !n || i;
        if (a) {
          this.showToScreenReader(), n ? this.adapter.removeAttr(Zr.ROLE) : this.adapter.setAttr(Zr.ROLE, "alert");
          return;
        }
        this.adapter.removeAttr(Zr.ROLE), this.hide();
      }
    }, e.prototype.showToScreenReader = function() {
      this.adapter.removeAttr(Zr.ARIA_HIDDEN);
    }, e.prototype.hide = function() {
      this.adapter.setAttr(Zr.ARIA_HIDDEN, "true");
    }, e;
  }(xt)
), np = /* @__PURE__ */ de("<div><!></div>");
function rp(t, e) {
  we(e, !0);
  let n = v(e, "use", 19, () => []), r = v(e, "class", 3, ""), i = v(e, "style", 3, ""), a = v(e, "static", 3, !1), o = v(e, "anchor", 3, !0), u = v(e, "fixed", 3, !1), l = v(e, "open", 31, () => Ie(a())), c = v(e, "managed", 3, !1), d = v(e, "fullWidth", 3, !1), m = v(e, "quickOpen", 3, !1), f = v(e, "anchorElement", 15), g = v(e, "anchorMargin", 19, () => ({ top: 0, right: 0, bottom: 0, left: 0 })), h = v(e, "maxHeight", 3, 0), p = v(e, "horizontallyCenteredOnViewport", 3, !1), b = v(e, "openBottomBias", 3, 0), y = v(e, "neverRestoreFocus", 3, !1), S = /* @__PURE__ */ je(e, [
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
  ]), E, _ = /* @__PURE__ */ he(void 0), A = Ie({}), I = Ie({}), O = /* @__PURE__ */ he(void 0);
  ue("SMUI:list:role", "menu"), ue("SMUI:list:item:role", "menuitem"), Oe(() => {
    var w, z;
    E && o() && !((w = E.parentElement) != null && w.classList.contains("mdc-menu-surface--anchor")) && ((z = E.parentElement) == null || z.classList.add("mdc-menu-surface--anchor"), f(E.parentElement ?? void 0));
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
  const C = ui;
  Oe(() => {
    s(_) && e.anchorCorner != null && (typeof e.anchorCorner == "string" ? s(_).setAnchorCorner(C[e.anchorCorner]) : s(_).setAnchorCorner(e.anchorCorner));
  }), Oe(() => {
    s(_) && s(_).setAnchorMargin(g());
  }), Oe(() => {
    s(_) && s(_).setOpenBottomBias(b());
  });
  const L = ye("SMUI:menu-surface:mount"), k = ye("SMUI:menu-surface:unmount");
  at(() => {
    X(
      _,
      new id({
        addClass: V,
        removeClass: W,
        hasClass: $,
        hasAnchor: () => !!f(),
        notifyClose: () => {
          c() || l(a()), l() || Ke(j(), "SMUIMenuSurfaceClosed");
        },
        notifyClosing: () => {
          c() || l(a()), l() || Ke(j(), "SMUIMenuSurfaceClosing");
        },
        notifyOpen: () => {
          c() || l(!0), l() && Ke(j(), "SMUIMenuSurfaceOpened");
        },
        notifyOpening: () => {
          l() || Ke(j(), "SMUIMenuSurfaceOpening");
        },
        isElementInContainer: (z) => j().contains(z),
        isRtl: () => getComputedStyle(j()).getPropertyValue("direction") === "rtl",
        setTransformOrigin: (z) => {
          I["transform-origin"] = z;
        },
        isFocused: () => document.activeElement === j(),
        saveFocus: () => {
          X(O, document.activeElement ?? void 0, !0);
        },
        restoreFocus: () => {
          !y() && (!E || j().contains(document.activeElement)) && s(O) && document.contains(s(O)) && "focus" in s(O) && s(O).focus();
        },
        getInnerDimensions: () => ({
          width: j().offsetWidth,
          height: j().offsetHeight
        }),
        getAnchorDimensions: () => f() ? f().getBoundingClientRect() : null,
        getWindowDimensions: () => ({ width: window.innerWidth, height: window.innerHeight }),
        getBodyDimensions: () => ({
          width: document.body.clientWidth,
          height: document.body.clientHeight
        }),
        getWindowScroll: () => ({ x: window.pageXOffset, y: window.pageYOffset }),
        setPosition: (z) => {
          I.left = "left" in z ? `${z.left}px` : "", I.right = "right" in z ? `${z.right}px` : "", I.top = "top" in z ? `${z.top}px` : "", I.bottom = "bottom" in z ? `${z.bottom}px` : "";
        },
        setMaxHeight: (z) => {
          I["max-height"] = z;
        }
      }),
      !0
    );
    const w = {
      get open() {
        return l();
      },
      set open(z) {
        l(z);
      },
      closeProgrammatic: R
    };
    return L && L(w), s(_).init(), () => {
      var K, te;
      k && k(w);
      const z = s(_).isHoistedElement;
      (K = s(_)) == null || K.destroy(), z && ((te = j().parentNode) == null || te.removeChild(j()));
    };
  }), In(() => {
    var w;
    o() && j() && ((w = j().parentElement) == null || w.classList.remove("mdc-menu-surface--anchor"));
  });
  function $(w) {
    return w in A ? A[w] : j().classList.contains(w);
  }
  function V(w) {
    A[w] || (A[w] = !0);
  }
  function W(w) {
    (!(w in A) || A[w]) && (A[w] = !1);
  }
  function R(w) {
    var z;
    (z = s(_)) == null || z.close(w), l(!1);
  }
  function x(w) {
    s(_) && l() && !c() && s(_).handleBodyClick(w);
  }
  function M() {
    return l();
  }
  function P(w) {
    l(w);
  }
  function Z(w, z) {
    if (s(_) == null)
      throw new Error("Instance is not defined.");
    return s(_).setAbsolutePosition(w, z);
  }
  function ne(w) {
    if (s(_) == null)
      throw new Error("Instance is not defined.");
    return s(_).setIsHoisted(w);
  }
  function N() {
    if (s(_) == null)
      throw new Error("Instance is not defined.");
    return s(_).isFixed();
  }
  function D() {
    if (s(_) == null)
      throw new Error("Instance is not defined.");
    return s(_).flipCornerHorizontally();
  }
  function j() {
    return E;
  }
  var Ee = {
    isOpen: M,
    setOpen: P,
    setAbsolutePosition: Z,
    setIsHoisted: ne,
    isFixed: N,
    flipCornerHorizontally: D,
    getElement: j
  }, _e = np();
  Jn("click", Ys.body, x, !0);
  var G = (w) => {
    var z;
    s(_) && !c() && s(_).handleKeydown(w), (z = e.onkeydown) == null || z.call(e, w);
  };
  ke(
    _e,
    (w, z) => ({
      class: w,
      style: z,
      role: "dialog",
      ...S,
      onkeydown: G
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
      () => Object.entries(I).map(([w, z]) => `${w}: ${z};`).concat([i()]).join(" ")
    ]
  );
  var q = ce(_e);
  return Ae(q, () => e.children ?? pe), Te(_e, (w) => E = w, () => E), Ue(_e, (w, z) => Q == null ? void 0 : Q(w, z), n), T(t, _e), Le(Ee);
}
function rs(t, { addClass: e = (r) => t.classList.add(r), removeClass: n = (r) => t.classList.remove(r) } = {}) {
  return e("mdc-menu-surface--anchor"), {
    destroy() {
      n("mdc-menu-surface--anchor");
    }
  };
}
function ip(t, e) {
  we(e, !0);
  const { closest: n } = ia;
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
  ]), c, d = /* @__PURE__ */ he(void 0), m = /* @__PURE__ */ he(void 0), f = /* @__PURE__ */ he(void 0);
  ue("SMUI:menu-surface:mount", (C) => {
    s(m) || X(m, C, !0);
  });
  const g = ye("SMUI:list:mount");
  ue("SMUI:list:mount", (C) => {
    s(f) || X(f, C, !0), g && g(C);
  });
  const h = ye("SMUI:menu:mount"), p = ye("SMUI:menu:unmount");
  at(() => (X(
    d,
    new $g({
      addClassToElementAtIndex: (C, L) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        s(f).addClassForElementIndex(C, L);
      },
      removeClassFromElementAtIndex: (C, L) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        s(f).removeClassForElementIndex(C, L);
      },
      addAttributeToElementAtIndex: (C, L, k) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        s(f).setAttributeForElementIndex(C, L, k);
      },
      removeAttributeFromElementAtIndex: (C, L) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        s(f).removeAttributeForElementIndex(C, L);
      },
      getAttributeFromElementAtIndex: (C, L) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        return s(f).getAttributeFromElementIndex(C, L);
      },
      elementContainsClass: (C, L) => C.classList.contains(L),
      closeSurface: (C) => {
        var L;
        u() || ((L = s(m)) == null || L.closeProgrammatic(C), Ke(I(), "SMUIMenuClosedProgrammatically"));
      },
      getElementIndex: (C) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        return s(f).getOrderedList().map((L) => L.element).indexOf(C);
      },
      notifySelected: (C) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        Ke(I(), "SMUIMenuSelected", {
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
        return !!n(s(f).getOrderedList()[C].element, `.${Hi.MENU_SELECTION_GROUP}`);
      },
      getSelectedSiblingOfItemAtIndex: (C) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        const L = s(f).getOrderedList(), k = n(L[C].element, `.${Hi.MENU_SELECTION_GROUP}`), $ = k == null ? void 0 : k.querySelector(`.${Hi.MENU_SELECTED_LIST_ITEM}`);
        return $ ? L.map((V) => V.element).indexOf($) : -1;
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
  function S(C) {
    a(C);
  }
  function E(C) {
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
  var O = {
    isOpen: y,
    setOpen: S,
    setDefaultFocusState: E,
    getSelectedIndex: _,
    getMenuSurface: A,
    getElement: I
  };
  {
    let C = /* @__PURE__ */ fe(() => He({ "mdc-menu": !0, [i()]: !0 }));
    Te(
      rp(t, Je(
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
          onkeydown: (L) => {
            var k;
            b(L), (k = e.onkeydown) == null || k.call(e, L);
          },
          onSMUIMenuSurfaceOpened: (L) => {
            var k;
            s(d) && s(d).handleMenuSurfaceOpened(), (k = e.onSMUIMenuSurfaceOpened) == null || k.call(e, L);
          },
          onSMUIListAction: (L) => {
            var k;
            s(d) && s(f) && s(d).handleItemAction(s(f).getOrderedList()[L.detail.index].element), (k = e.onSMUIListAction) == null || k.call(e, L);
          },
          get open() {
            return a();
          },
          set open(L) {
            a(L);
          },
          get anchorElement() {
            return o();
          },
          set anchorElement(L) {
            o(L);
          },
          children: (L, k) => {
            var $ = ie(), V = Y($);
            Ae(V, () => e.children ?? pe), T(L, $);
          },
          $$slots: { default: !0 }
        }
      )),
      (L) => c = L,
      () => c
    );
  }
  return Le(O);
}
function ap(t, e) {
  we(e, !0);
  const { closest: n, matches: r } = ia;
  let i = ye("SMUI:list:nav"), a = v(e, "use", 19, () => []), o = v(e, "class", 3, ""), u = v(e, "nonInteractive", 3, !1), l = v(e, "dense", 3, !1), c = v(e, "textualList", 3, !1), d = v(e, "avatarList", 3, !1), m = v(e, "iconList", 3, !1), f = v(e, "imageList", 3, !1), g = v(e, "thumbnailList", 3, !1), h = v(e, "videoList", 3, !1), p = v(e, "twoLine", 3, !1), b = v(e, "threeLine", 3, !1), y = v(e, "vertical", 3, !0), S = v(e, "wrapFocus", 19, () => ye("SMUI:list:wrapFocus") ?? !1), E = v(e, "singleSelection", 3, !1), _ = v(e, "disabledItemsFocusable", 3, !1), A = v(e, "selectedIndex", 31, () => -1), I = v(e, "radioList", 3, !1), O = v(e, "checkList", 3, !1), C = v(e, "hasTypeahead", 3, !1), L = v(e, "component", 3, Vr), k = v(e, "tag", 3, i ? "nav" : "ul"), $ = /* @__PURE__ */ je(e, [
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
  ]), V, W = /* @__PURE__ */ he(void 0), R = [], x = ye("SMUI:list:role");
  const M = /* @__PURE__ */ new WeakMap();
  let P = ye("SMUI:dialog:selection"), Z = ye("SMUI:addLayoutListener"), ne;
  ue("SMUI:list:nonInteractive", u()), ue("SMUI:separator:context", "list"), x || (E() ? (x = "listbox", ue("SMUI:list:item:role", "option")) : I() ? (x = "radiogroup", ue("SMUI:list:item:role", "radio")) : O() ? (x = "group", ue("SMUI:list:item:role", "checkbox")) : (x = "list", ue("SMUI:list:item:role", void 0))), Oe(() => {
    s(W) && s(W).setVerticalOrientation(y());
  }), Oe(() => {
    s(W) && s(W).setWrapFocus(S());
  }), Oe(() => {
    s(W) && s(W).setHasTypeahead(C());
  }), Oe(() => {
    s(W) && s(W).setSingleSelection(E());
  }), Oe(() => {
    s(W) && s(W).setDisabledItemsFocusable(_());
  }), Oe(() => {
    s(W) && E() && U() !== A() && s(W).setSelectedIndex(A());
  }), Z && (ne = Z(Ne)), ue("SMUI:list:item:mount", (me) => {
    R.push(me), M.set(me.element, me), E() && me.selected && A(Ce(me.element));
  }), ue("SMUI:list:item:unmount", (me) => {
    const F = (me && R.findIndex((B) => B === me)) ?? -1;
    F !== -1 && (R.splice(F, 1), M.delete(me.element));
  });
  const N = ye("SMUI:list:mount"), D = ye("SMUI:list:unmount");
  at(() => {
    X(
      W,
      new Zg({
        addClassForElementIndex: K,
        focusItemAtIndex: ve,
        getAttributeForElementIndex: (F, B) => {
          var ae;
          return ((ae = w()[F]) == null ? void 0 : ae.getAttr(B)) ?? null;
        },
        getFocusedElementIndex: () => document.activeElement ? w().map((F) => F.element).indexOf(document.activeElement) : -1,
        getListItemCount: () => R.length,
        getPrimaryTextAtIndex: Re,
        hasCheckboxAtIndex: (F) => {
          var B;
          return ((B = w()[F]) == null ? void 0 : B.hasCheckbox) ?? !1;
        },
        hasRadioAtIndex: (F) => {
          var B;
          return ((B = w()[F]) == null ? void 0 : B.hasRadio) ?? !1;
        },
        isCheckboxCheckedAtIndex: (F) => {
          const B = w()[F];
          return ((B == null ? void 0 : B.hasCheckbox) && B.checked) ?? !1;
        },
        isFocusInsideList: () => V != null && De() !== document.activeElement && De().contains(document.activeElement),
        isRootFocused: () => V != null && document.activeElement === De(),
        listItemAtIndexHasClass: z,
        notifyAction: (F) => {
          A(F), V != null && Ke(De(), "SMUIListAction", { index: F });
        },
        notifySelectionChange: (F) => {
          V != null && Ke(De(), "SMUIListSelectionChange", { changedIndices: F });
        },
        removeClassForElementIndex: te,
        setAttributeForElementIndex: se,
        setCheckedCheckboxOrRadioAtIndex: (F, B) => {
          w()[F].checked = B;
        },
        setTabIndexForListItemChildren: (F, B) => {
          const ae = w()[F];
          Array.prototype.forEach.call(ae.element.querySelectorAll("button:not(:disabled), a"), (mt) => {
            mt.setAttribute("tabindex", B);
          });
        }
      }),
      !0
    );
    const me = {
      get element() {
        return De();
      },
      get items() {
        return R;
      },
      get typeaheadInProgress() {
        if (!s(W))
          throw new Error("Instance is undefined.");
        return s(W).isTypeaheadInProgress();
      },
      typeaheadMatchItem(F, B) {
        if (!s(W))
          throw new Error("Instance is undefined.");
        return s(W).typeaheadMatchItem(
          F,
          B,
          /** skipFocus */
          !0
        );
      },
      getOrderedList: w,
      focusItemAtIndex: ve,
      addClassForElementIndex: K,
      removeClassForElementIndex: te,
      setAttributeForElementIndex: se,
      removeAttributeForElementIndex: ee,
      getAttributeFromElementIndex: re,
      getPrimaryTextAtIndex: Re
    };
    return N && N(me), s(W).init(), s(W).layout(), () => {
      var F;
      D && D(me), (F = s(W)) == null || F.destroy();
    };
  }), In(() => {
    ne && ne();
  });
  function j(me) {
    s(W) && me.target && s(W).handleKeydown(me, me.target.classList.contains("mdc-deprecated-list-item"), Ce(me.target));
  }
  function Ee(me) {
    s(W) && me.target && s(W).handleFocusIn(Ce(me.target));
  }
  function _e(me) {
    s(W) && me.target && s(W).handleFocusOut(Ce(me.target));
  }
  function G(me) {
    s(W) && me.target && s(W).handleClick(Ce(me.target), !r(me.target, 'input[type="checkbox"], input[type="radio"]'), me);
  }
  function q(me) {
    if (I() || O()) {
      const F = Ce(me.target);
      if (F !== -1) {
        const B = w()[F];
        B && (I() && !B.checked || O()) && (r(me.detail.target, 'input[type="checkbox"], input[type="radio"]') || (B.checked = !B.checked), B.activateRipple(), window.requestAnimationFrame(() => {
          B.deactivateRipple();
        }));
      }
    }
  }
  function w() {
    return V == null ? [] : [...De().children].map((me) => M.get(me)).filter((me) => me && me._smui_list_item_accessor);
  }
  function z(me, F) {
    const B = w()[me];
    return (B && B.hasClass(F)) ?? !1;
  }
  function K(me, F) {
    const B = w()[me];
    B && B.addClass(F);
  }
  function te(me, F) {
    const B = w()[me];
    B && B.removeClass(F);
  }
  function se(me, F, B) {
    const ae = w()[me];
    ae && ae.addAttr(F, B);
  }
  function ee(me, F) {
    const B = w()[me];
    B && B.removeAttr(F);
  }
  function re(me, F) {
    const B = w()[me];
    return B ? B.getAttr(F) : null;
  }
  function Re(me) {
    const F = w()[me];
    return (F && F.getPrimaryText()) ?? "";
  }
  function Ce(me) {
    const F = n(me, ".mdc-deprecated-list-item, .mdc-deprecated-list");
    return F && r(F, ".mdc-deprecated-list-item") ? w().map((B) => B == null ? void 0 : B.element).indexOf(F) : -1;
  }
  function Ne() {
    if (!s(W))
      throw new Error("Instance is undefined.");
    return s(W).layout();
  }
  function Pe(me, F) {
    if (!s(W))
      throw new Error("Instance is undefined.");
    return s(W).setEnabled(me, F);
  }
  function Me() {
    if (!s(W))
      throw new Error("Instance is undefined.");
    return s(W).isTypeaheadInProgress();
  }
  function U() {
    if (!s(W))
      throw new Error("Instance is undefined.");
    return s(W).getSelectedIndex();
  }
  function J() {
    if (!s(W))
      throw new Error("Instance is undefined.");
    return s(W).getFocusedItemIndex();
  }
  function ve(me) {
    const F = w()[me];
    F && "focus" in F.element && F.element.focus();
  }
  function De() {
    return V.getElement();
  }
  var Fe = {
    layout: Ne,
    setEnabled: Pe,
    getTypeaheadInProgress: Me,
    getSelectedIndex: U,
    getFocusedItemIndex: J,
    focusItemAtIndex: ve,
    getElement: De
  }, ot = ie(), ft = Y(ot);
  {
    let me = /* @__PURE__ */ fe(() => He({
      "mdc-deprecated-list": !0,
      "mdc-deprecated-list--non-interactive": u(),
      "mdc-deprecated-list--dense": l(),
      "mdc-deprecated-list--textual-list": c(),
      "mdc-deprecated-list--avatar-list": d() || P,
      "mdc-deprecated-list--icon-list": m(),
      "mdc-deprecated-list--image-list": f(),
      "mdc-deprecated-list--thumbnail-list": g(),
      "mdc-deprecated-list--video-list": h(),
      "mdc-deprecated-list--two-line": p(),
      "smui-list--three-line": b() && !p(),
      [o()]: !0
    }));
    nr(ft, L, (F, B) => {
      Te(
        B(F, Je(
          {
            get tag() {
              return k();
            },
            get use() {
              return a();
            },
            get class() {
              return s(me);
            },
            get role() {
              return x;
            }
          },
          () => $,
          {
            onkeydown: (ae) => {
              var Be;
              j(ae), (Be = e.onkeydown) == null || Be.call(e, ae);
            },
            onfocusin: (ae) => {
              var Be;
              Ee(ae), (Be = e.onfocusin) == null || Be.call(e, ae);
            },
            onfocusout: (ae) => {
              var Be;
              _e(ae), (Be = e.onfocusout) == null || Be.call(e, ae);
            },
            onclick: (ae) => {
              var Be;
              G(ae), (Be = e.onclick) == null || Be.call(e, ae);
            },
            onSMUIAction: (ae) => {
              var Be;
              q(ae), (Be = e.onSMUIAction) == null || Be.call(e, ae);
            },
            children: (ae, Be) => {
              var mt = ie(), Et = Y(mt);
              Ae(Et, () => e.children ?? pe), T(ae, mt);
            },
            $$slots: { default: !0 }
          }
        )),
        (ae) => V = ae,
        () => V
      );
    });
  }
  return T(t, ot), Le(Fe);
}
let op = 0;
var sp = /* @__PURE__ */ de('<span class="mdc-deprecated-list-item__ripple"></span>'), lp = /* @__PURE__ */ de("<!><!>", 1);
function up(t, e) {
  we(e, !0);
  let n = () => {
  };
  function r(K) {
    return K === n;
  }
  let i = ye("SMUI:list:item:nav"), a = v(e, "use", 19, () => []), o = v(e, "class", 3, ""), u = v(e, "style", 3, ""), l = v(e, "nonInteractive", 19, () => ye("SMUI:list:nonInteractive") ?? !1), c = v(e, "ripple", 19, () => !l()), d = v(e, "wrapper", 3, !1), m = v(e, "activated", 15, !1), f = v(e, "role", 19, () => d() ? "presentation" : ye("SMUI:list:item:role")), g = v(e, "selected", 15, !1), h = v(e, "disabled", 3, !1), p = v(e, "skipRestoreFocus", 3, !1), b = v(e, "tabindex", 15, n), y = v(e, "inputId", 19, () => "SMUI-form-field-list-" + op++), S = v(e, "component", 3, Vr), E = v(e, "tag", 19, () => i ? e.href ? "a" : "span" : "li"), _ = /* @__PURE__ */ je(e, [
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
  let A, I = Ie({}), O = Ie({}), C = Ie({}), L = /* @__PURE__ */ he(void 0), k = /* @__PURE__ */ he(void 0);
  const $ = /* @__PURE__ */ fe(() => r(b()) ? !l() && !h() && (g() || s(L) && s(L).checked) ? 0 : -1 : b());
  ue("SMUI:generic:input:props", { id: y() }), ue("SMUI:separator:context", void 0), ue("SMUI:generic:input:mount", (K) => {
    ("_smui_checkbox_accessor" in K || "_smui_radio_accessor" in K) && X(L, K, !0);
  }), ue("SMUI:generic:input:unmount", () => {
    X(L, void 0);
  });
  const V = ye("SMUI:list:item:mount"), W = ye("SMUI:list:item:unmount");
  at(() => {
    if (!g() && !l()) {
      let te = !0, se = A.getElement();
      for (; se.previousElementSibling; )
        if (se = se.previousElementSibling, se.nodeType === 1 && se.classList.contains("mdc-deprecated-list-item") && !se.classList.contains("mdc-deprecated-list-item--disabled")) {
          te = !1;
          break;
        }
      te && X(k, window.requestAnimationFrame(() => D(se)), !0);
    }
    const K = {
      _smui_list_item_accessor: !0,
      get element() {
        return G();
      },
      get selected() {
        return g();
      },
      set selected(te) {
        g(te);
      },
      hasClass: R,
      addClass: x,
      removeClass: M,
      getAttr: Z,
      addAttr: ne,
      removeAttr: N,
      getPrimaryText: _e,
      // For inputs within item.
      get checked() {
        return (s(L) && s(L).checked) ?? !1;
      },
      set checked(te) {
        s(L) && (s(L).checked = !!te);
      },
      get hasCheckbox() {
        return !!(s(L) && "_smui_checkbox_accessor" in s(L));
      },
      get hasRadio() {
        return !!(s(L) && "_smui_radio_accessor" in s(L));
      },
      activateRipple() {
        s(L) && s(L).activateRipple();
      },
      deactivateRipple() {
        s(L) && s(L).deactivateRipple();
      },
      // For select options.
      getValue() {
        return e.value;
      },
      // For autocomplete
      action: Ee,
      get tabindex() {
        return s($);
      },
      set tabindex(te) {
        b(te);
      },
      get disabled() {
        return h();
      },
      get activated() {
        return m();
      },
      set activated(te) {
        m(te);
      }
    };
    return V && V(K), () => {
      W && W(K);
    };
  }), In(() => {
    s(k) && window.cancelAnimationFrame(s(k));
  });
  function R(K) {
    return K in I ? I[K] : G().classList.contains(K);
  }
  function x(K) {
    I[K] || (I[K] = !0);
  }
  function M(K) {
    (!(K in I) || I[K]) && (I[K] = !1);
  }
  function P(K, te) {
    O[K] != te && (te === "" || te == null ? delete O[K] : O[K] = te);
  }
  function Z(K) {
    return K in C ? C[K] ?? null : G().getAttribute(K);
  }
  function ne(K, te) {
    C[K] !== te && (C[K] = te);
  }
  function N(K) {
    (!(K in C) || C[K] != null) && (C[K] = void 0);
  }
  function D(K) {
    let te = !0;
    for (; K.nextElementSibling; )
      if (K = K.nextElementSibling, K.nodeType === 1 && K.classList.contains("mdc-deprecated-list-item")) {
        const se = K.attributes.getNamedItem("tabindex");
        if (se && se.value === "0") {
          te = !1;
          break;
        }
      }
    te && b(0);
  }
  function j(K) {
    const te = K.key === "Enter", se = K.key === "Space";
    (te || se) && Ee(K);
  }
  function Ee(K) {
    h() || Ke(G(), "SMUIAction", K);
  }
  function _e() {
    const K = G(), te = K.querySelector(".mdc-deprecated-list-item__primary-text");
    if (te)
      return te.textContent ?? "";
    const se = K.querySelector(".mdc-deprecated-list-item__text");
    return se ? se.textContent ?? "" : K.textContent ?? "";
  }
  function G() {
    return A.getElement();
  }
  var q = { action: Ee, getPrimaryText: _e, getElement: G }, w = ie(), z = Y(w);
  {
    let K = /* @__PURE__ */ fe(() => [
      ...l() ? [] : [
        [
          Yt,
          {
            ripple: !s(L),
            unbounded: !1,
            color: (m() || g()) && e.color == null ? "primary" : e.color,
            disabled: h(),
            addClass: x,
            removeClass: M,
            addStyle: P
          }
        ]
      ],
      ...a()
    ]), te = /* @__PURE__ */ fe(() => He({
      "mdc-deprecated-list-item": !d(),
      "mdc-deprecated-list-item__wrapper": d(),
      "mdc-deprecated-list-item--activated": m(),
      "mdc-deprecated-list-item--selected": g(),
      "mdc-deprecated-list-item--disabled": h(),
      "mdc-menu-item--selected": !i && f() === "menuitem" && g(),
      "smui-menu-item--non-interactive": l(),
      ...I,
      [o()]: !0
    })), se = /* @__PURE__ */ fe(() => Object.entries(O).map(([re, Re]) => `${re}: ${Re};`).concat([u()]).join(" ")), ee = /* @__PURE__ */ fe(() => p() || void 0);
    nr(z, S, (re, Re) => {
      Te(
        Re(re, Je(
          {
            get tag() {
              return E();
            },
            get use() {
              return s(K);
            },
            get class() {
              return s(te);
            },
            get style() {
              return s(se);
            }
          },
          () => i && m() ? { "aria-current": "page" } : {},
          () => !i || d() ? { role: f() } : {},
          () => !i && f() === "option" ? { "aria-selected": g() ? "true" : "false" } : {},
          () => !i && (f() === "radio" || f() === "checkbox") ? {
            "aria-checked": s(L) && s(L).checked ? "true" : "false"
          } : {},
          () => i ? {} : { "aria-disabled": h() ? "true" : "false" },
          {
            get "data-menu-item-skip-restore-focus"() {
              return s(ee);
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
            onclick: (Ce) => {
              var Ne;
              Ee(Ce), (Ne = e.onclick) == null || Ne.call(e, Ce);
            },
            onkeydown: (Ce) => {
              var Ne;
              j(Ce), (Ne = e.onkeydown) == null || Ne.call(e, Ce);
            },
            children: (Ce, Ne) => {
              var Pe = lp(), Me = Y(Pe);
              {
                var U = (ve) => {
                  var De = sp();
                  T(ve, De);
                };
                oe(Me, (ve) => {
                  c() && ve(U);
                });
              }
              var J = ge(Me);
              Ae(J, () => e.children ?? pe), T(Ce, Pe);
            },
            $$slots: { default: !0 }
          }
        )),
        (Ce) => A = Ce,
        () => A
      );
    });
  }
  return T(t, w), Le(q);
}
let cp = 0;
var dp = /* @__PURE__ */ de("<div><!></div>");
function fp(t, e) {
  we(e, !0);
  let n = v(e, "use", 19, () => []), r = v(e, "class", 3, ""), i = v(e, "id", 19, () => "SMUI-select-helper-text-" + cp++), a = v(e, "persistent", 3, !1), o = v(e, "validationMsg", 3, !1), u = /* @__PURE__ */ je(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "id",
    "persistent",
    "validationMsg",
    "children"
  ]), l, c = /* @__PURE__ */ he(void 0), d = Ie({}), m = Ie({}), f = /* @__PURE__ */ he(void 0);
  const g = ye("SMUI:select:helper-text:id"), h = ye("SMUI:select:helper-text:mount"), p = ye("SMUI:select:helper-text:unmount");
  at(() => (X(
    c,
    new tp({
      addClass: y,
      removeClass: S,
      hasClass: b,
      getAttr: E,
      setAttr: _,
      removeAttr: A,
      setContent: (V) => {
        X(f, V, !0);
      }
    }),
    !0
  ), g && g(i()), h && h(s(c)), s(c).init(), () => {
    var V;
    p && s(c) && p(s(c)), (V = s(c)) == null || V.destroy();
  }));
  function b(V) {
    return V in d ? d[V] : I().classList.contains(V);
  }
  function y(V) {
    d[V] || (d[V] = !0);
  }
  function S(V) {
    (!(V in d) || d[V]) && (d[V] = !1);
  }
  function E(V) {
    return V in m ? m[V] ?? null : I().getAttribute(V);
  }
  function _(V, W) {
    m[V] !== W && (m[V] = W);
  }
  function A(V) {
    (!(V in m) || m[V] != null) && (m[V] = void 0);
  }
  function I() {
    return l;
  }
  var O = { getElement: I }, C = dp();
  ke(
    C,
    (V) => ({
      class: V,
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
  var L = ce(C);
  {
    var k = (V) => {
      var W = ie(), R = Y(W);
      Ae(R, () => e.children ?? pe), T(V, W);
    }, $ = (V) => {
      var W = vt();
      xe(() => ze(W, s(f))), T(V, W);
    };
    oe(L, (V) => {
      s(f) == null ? V(k) : V($, !1);
    });
  }
  return Te(C, (V) => l = V, () => l), Ue(C, (V, W) => Q == null ? void 0 : Q(V, W), n), T(t, C), Le(O);
}
let hp = 0;
var vp = /* @__PURE__ */ de("<input/>"), mp = /* @__PURE__ */ de('<span class="mdc-select__ripple"></span>'), gp = /* @__PURE__ */ de('<div><!> <div><!> <!> <!> <!> <span><span> </span></span> <span><svg class="mdc-select__dropdown-icon-graphic" viewBox="7 10 10 5" focusable="false"><polygon class="mdc-select__dropdown-icon-inactive" stroke="none" fill-rule="evenodd" points="7 10 12 15 17 10"></polygon><polygon class="mdc-select__dropdown-icon-active" stroke="none" fill-rule="evenodd" points="7 15 12 10 17 15"></polygon></svg></span> <!></div> <!></div> <!>', 1);
function pp(t, e) {
  we(e, !0);
  const n = () => Bn(De, "$selectedTextStore", r), [r, i] = rr();
  let a = () => {
  };
  function o(H) {
    return H === a;
  }
  let u = v(e, "use", 19, () => []), l = v(e, "class", 3, ""), c = v(e, "style", 3, ""), d = v(e, "ripple", 3, !0), m = v(e, "disabled", 3, !1), f = v(e, "variant", 3, "standard"), g = v(e, "noLabel", 3, !1), h = v(e, "label", 3, void 0), p = v(e, "value", 15), b = v(e, "key", 3, (H) => H), y = v(e, "dirty", 15, !1), S = v(e, "invalid", 15, a), E = v(e, "updateInvalid", 19, () => o(S())), _ = v(e, "required", 3, !1), A = v(e, "inputId", 19, () => "SMUI-select-" + hp++), I = v(e, "hiddenInput", 3, !1), O = v(e, "withLeadingIcon", 3, a), C = v(e, "anchor$use", 19, () => []), L = v(e, "anchor$class", 3, ""), k = v(e, "selectedTextContainer$use", 19, () => []), $ = v(e, "selectedTextContainer$class", 3, ""), V = v(e, "selectedText$use", 19, () => []), W = v(e, "selectedText$class", 3, ""), R = v(e, "dropdownIcon$use", 19, () => []), x = v(e, "dropdownIcon$class", 3, ""), M = v(e, "menu$class", 3, ""), P = /* @__PURE__ */ je(e, [
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
  const Z = o(S());
  o(S()) && S(!1);
  let ne, N = /* @__PURE__ */ he(void 0), D = Ie({}), j = Ie({}), Ee, _e = Ie({}), G = /* @__PURE__ */ he(-1);
  const q = /* @__PURE__ */ fe(() => P.menu$id ?? A() + "-menu");
  let w = /* @__PURE__ */ he(void 0), z = ye("SMUI:addLayoutListener"), K, te = /* @__PURE__ */ he(!1), se = Ie({}), ee = /* @__PURE__ */ he(void 0), re = /* @__PURE__ */ he(void 0), Re = /* @__PURE__ */ he(!1), Ce, Ne = ye("SMUI:select:context"), Pe, Me, U, J, ve;
  ue("SMUI:list:role", ""), ue("SMUI:list:nav", !1);
  const De = Bt("");
  ue("SMUI:select:selectedText", De);
  const Fe = Bt(p());
  Oe(() => {
    Fn(Fe, p());
  }), ue("SMUI:select:value", Fe), Oe(() => {
    s(N) && s(N).getValue() !== b()(p()) && s(N).setValue(b()(p()));
  });
  let ot = s(G);
  Oe(() => {
    if (ot !== s(G))
      if (ot = s(G), s(N))
        s(N).setSelectedIndex(
          s(G),
          /* closeMenu */
          !1,
          /* skipNotify */
          !0
        );
      else {
        const H = Vt();
        p() !== H[s(G)] && p(H[s(G)]);
      }
  }), Oe(() => {
    s(N) && s(N).getDisabled() !== m() && s(N).setDisabled(m());
  }), Oe(() => {
    s(N) && y() && s(N).isValid() !== !S() && (E() ? S(!s(N).isValid()) : s(N).setValid(!S()));
  }), Oe(() => {
    s(N) && s(N).getRequired() !== _() && s(N).setRequired(_());
  }), z && (K = z(Ii)), ue("SMUI:select:leading-icon:mount", (H) => {
    Pe = H;
  }), ue("SMUI:select:leading-icon:unmount", () => {
    Pe = void 0;
  }), ue("SMUI:list:mount", (H) => {
    Ce = H;
  }), ue("SMUI:select:helper-text:id", (H) => {
    X(w, H, !0);
  }), ue("SMUI:select:helper-text:mount", (H) => {
    Me = H;
  }), ue("SMUI:select:helper-text:unmount", () => {
    X(w, void 0), Me = void 0;
  }), at(() => (X(
    N,
    new ep(
      {
        // getSelectAdapterMethods
        // getMenuItemAttr: (menuItem: Element, attr: string) =>
        //   menuItem.getAttribute(attr),
        setSelectedText: (H) => {
          Fn(De, H);
        },
        isSelectAnchorFocused: () => document.activeElement === Ee,
        getSelectAnchorAttr: mt,
        setSelectAnchorAttr: Et,
        removeSelectAnchorAttr: yt,
        addMenuClass: ae,
        removeMenuClass: Be,
        openMenu: () => {
          X(te, !0);
        },
        closeMenu: () => {
          X(te, !1);
        },
        getAnchorElement: () => Ee,
        setMenuAnchorElement: (H) => {
          X(ee, H, !0);
        },
        setMenuAnchorCorner: (H) => {
          X(re, H, !0);
        },
        setMenuWrapFocus: (H) => {
          X(Re, H, !0);
        },
        getSelectedIndex: () => s(G),
        setSelectedIndex: (H) => {
          ot = H, X(G, H, !0), p(Vt()[s(G)]);
        },
        focusMenuItemAtIndex: (H) => {
          Ce.focusItemAtIndex(H);
        },
        getMenuItemCount: () => Ce.items.length,
        getMenuItemValues: () => Vt().map(b()),
        getMenuItemTextAtIndex: (H) => Ce.getPrimaryTextAtIndex(H),
        isTypeaheadInProgress: () => Ce.typeaheadInProgress,
        typeaheadMatchItem: (H, Se) => Ce.typeaheadMatchItem(H, Se),
        // getCommonAdapterMethods
        addClass: me,
        removeClass: F,
        hasClass: ft,
        setRippleCenter: (H) => J && J.setRippleCenter(H),
        activateBottomLine: () => J && J.activate(),
        deactivateBottomLine: () => J && J.deactivate(),
        notifyChange: (H) => {
          var Se;
          y(!0), E() && S(!((Se = s(N)) != null && Se.isValid())), Ke(qn(), "SMUISelectChange", { value: p(), index: s(G) });
        },
        // getOutlineAdapterMethods
        hasOutline: () => !!ve,
        notchOutline: (H) => ve && ve.notch(H),
        closeOutline: () => ve && ve.closeNotch(),
        // getLabelAdapterMethods
        hasLabel: () => !!U,
        floatLabel: (H) => U && U.float(H),
        getLabelWidth: () => U ? U.getWidth() : 0,
        setLabelRequired: (H) => U && U.setRequired(H)
      },
      {
        get helperText() {
          return Me;
        },
        get leadingIcon() {
          return Pe;
        }
      }
    ),
    !0
  ), X(G, Vt().indexOf(p()), !0), s(N).init(), At(Z), () => {
    var H;
    (H = s(N)) == null || H.destroy();
  })), In(() => {
    K && K();
  });
  function ft(H) {
    return H in D ? D[H] : qn().classList.contains(H);
  }
  function me(H) {
    D[H] || (D[H] = !0);
  }
  function F(H) {
    (!(H in D) || D[H]) && (D[H] = !1);
  }
  function B(H, Se) {
    j[H] != Se && (Se === "" || Se == null ? delete j[H] : j[H] = Se);
  }
  function ae(H) {
    se[H] || (se[H] = !0);
  }
  function Be(H) {
    (!(H in se) || se[H]) && (se[H] = !1);
  }
  function mt(H) {
    return H in _e ? _e[H] ?? null : qn().getAttribute(H);
  }
  function Et(H, Se) {
    _e[H] !== Se && (_e[H] = Se);
  }
  function yt(H) {
    (!(H in _e) || _e[H] != null) && (_e[H] = void 0);
  }
  function Vt() {
    return Ce.getOrderedList().map((H) => H.getValue());
  }
  function yr(H) {
    const Se = H.currentTarget.getBoundingClientRect();
    return (pt(H) ? H.touches[0].clientX : H.clientX) - Se.left;
  }
  function pt(H) {
    return "touches" in H;
  }
  function Nt() {
    if (s(N) == null)
      throw new Error("Instance is undefined.");
    return s(N).getUseDefaultValidation();
  }
  function At(H) {
    var Se;
    (Se = s(N)) == null || Se.setUseDefaultValidation(H);
  }
  function On() {
    Ee.focus();
  }
  function Ii() {
    var H;
    (H = s(N)) == null || H.layout();
  }
  function qn() {
    return ne;
  }
  var Xe = {
    getUseDefaultValidation: Nt,
    setUseDefaultValidation: At,
    focus: On,
    layout: Ii,
    getElement: qn
  }, $e = gp(), tt = Y($e);
  ke(tt, (H, Se, gt) => ({ class: H, style: Se, ...gt }), [
    () => He({
      "mdc-select": !0,
      "mdc-select--required": _(),
      "mdc-select--disabled": m(),
      "mdc-select--filled": f() === "filled",
      "mdc-select--outlined": f() === "outlined",
      "smui-select--standard": f() === "standard",
      "mdc-select--with-leading-icon": o(O()) ? e.leadingIcon : O(),
      "mdc-select--no-label": g() || h() == null,
      "mdc-select--invalid": S(),
      "mdc-select--activated": s(te),
      "mdc-data-table__pagination-rows-per-page-select": Ne === "data-table:pagination",
      ...D,
      [l()]: !0
    }),
    () => Object.entries(j).map(([H, Se]) => `${H}: ${Se};`).concat([c()]).join(" "),
    () => Vn(P, [
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
    var vn = (H) => {
      var Se = vp();
      ke(
        Se,
        (gt) => ({
          type: "hidden",
          required: _(),
          disabled: m(),
          value: p(),
          ...gt
        }),
        [() => it(P, "input$")],
        void 0,
        void 0,
        !0
      ), T(H, Se);
    };
    oe(Ut, (H) => {
      I() && H(vn);
    });
  }
  var st = ge(Ut, 2), ht = (H) => {
    var Se;
    Ee.focus(), s(N) && s(N).handleClick(yr(H)), (Se = e.anchor$onclick) == null || Se.call(e, H);
  }, wt = (H) => {
    var Se;
    s(N) && s(N).handleKeydown(H), (Se = e.onkeydown) == null || Se.call(e, H);
  }, nt = (H) => {
    var Se;
    s(N) && s(N).handleBlur(), Ke(qn(), "blur", H), (Se = e.anchor$onblur) == null || Se.call(e, H);
  }, Mt = (H) => {
    var Se;
    s(N) && s(N).handleFocus(), Ke(qn(), "focus", H), (Se = e.anchor$onfocus) == null || Se.call(e, H);
  };
  ke(
    st,
    (H, Se) => ({
      class: H,
      "aria-required": _() ? "true" : void 0,
      "aria-disabled": m() ? "true" : void 0,
      "aria-controls": s(q),
      "aria-expanded": s(te) ? "true" : "false",
      "aria-describedby": s(w),
      role: "combobox",
      tabindex: "0",
      ..._e,
      ...Se,
      onclick: ht,
      onkeydown: wt,
      onblur: nt,
      onfocus: Mt
    }),
    [
      () => He({ "mdc-select__anchor": !0, [L()]: !0 }),
      () => it(P, "anchor$")
    ]
  );
  var Rn = ce(st);
  {
    var Pt = (H) => {
      var Se = mp();
      T(H, Se);
    };
    oe(Rn, (H) => {
      f() === "filled" && H(Pt);
    });
  }
  var St = ge(Rn, 2);
  {
    var Ft = (H) => {
      {
        let Se = /* @__PURE__ */ fe(() => A() + "-smui-label"), gt = /* @__PURE__ */ fe(() => n() !== ""), Ht = /* @__PURE__ */ fe(() => it(P, "label$"));
        Te(
          Eo(H, Je(
            {
              get id() {
                return s(Se);
              },
              get floatAbove() {
                return s(gt);
              },
              get required() {
                return _();
              }
            },
            () => s(Ht),
            {
              children: (ar, or) => {
                var sa = ie(), Ei = Y(sa);
                {
                  var qr = (Wr) => {
                  }, Vo = (Wr) => {
                    var Wa = ie(), la = Y(Wa);
                    {
                      var pl = (Er) => {
                        var zr = vt();
                        xe(() => ze(zr, h())), T(Er, zr);
                      }, za = (Er) => {
                        var zr = ie(), Go = Y(zr);
                        Ae(Go, h), T(Er, zr);
                      };
                      oe(
                        la,
                        (Er) => {
                          typeof h() == "string" ? Er(pl) : Er(za, !1);
                        },
                        !0
                      );
                    }
                    T(Wr, Wa);
                  };
                  oe(Ei, (Wr) => {
                    h() == null ? Wr(qr) : Wr(Vo, !1);
                  });
                }
                T(ar, sa);
              },
              $$slots: { default: !0 }
            }
          )),
          (ar) => U = ar,
          () => U
        );
      }
    };
    oe(St, (H) => {
      f() !== "outlined" && !g() && h() != null && H(Ft);
    });
  }
  var ln = ge(St, 2);
  {
    var Gt = (H) => {
      {
        let Se = /* @__PURE__ */ fe(() => g() || h() == null), gt = /* @__PURE__ */ fe(() => it(P, "outline$"));
        Te(
          td(H, Je(
            {
              get noLabel() {
                return s(Se);
              }
            },
            () => s(gt),
            {
              children: (Ht, ar) => {
                var or = ie(), sa = Y(or);
                {
                  var Ei = (qr) => {
                    {
                      let Vo = /* @__PURE__ */ fe(() => A() + "-smui-label"), Wr = /* @__PURE__ */ fe(() => n() !== ""), Wa = /* @__PURE__ */ fe(() => it(P, "label$"));
                      Te(
                        Eo(qr, Je(
                          {
                            get id() {
                              return s(Vo);
                            },
                            get floatAbove() {
                              return s(Wr);
                            },
                            get required() {
                              return _();
                            }
                          },
                          () => s(Wa),
                          {
                            children: (la, pl) => {
                              var za = ie(), Er = Y(za);
                              {
                                var zr = (ua) => {
                                }, Go = (ua) => {
                                  var bl = ie(), Pd = Y(bl);
                                  {
                                    var Hd = (Si) => {
                                      var ca = vt();
                                      xe(() => ze(ca, h())), T(Si, ca);
                                    }, Nd = (Si) => {
                                      var ca = ie(), Ud = Y(ca);
                                      Ae(Ud, h), T(Si, ca);
                                    };
                                    oe(
                                      Pd,
                                      (Si) => {
                                        typeof h() == "string" ? Si(Hd) : Si(Nd, !1);
                                      },
                                      !0
                                    );
                                  }
                                  T(ua, bl);
                                };
                                oe(Er, (ua) => {
                                  h() == null ? ua(zr) : ua(Go, !1);
                                });
                              }
                              T(la, za);
                            },
                            $$slots: { default: !0 }
                          }
                        )),
                        (la) => U = la,
                        () => U
                      );
                    }
                  };
                  oe(sa, (qr) => {
                    !g() && h() != null && qr(Ei);
                  });
                }
                T(Ht, or);
              },
              $$slots: { default: !0 }
            }
          )),
          (Ht) => ve = Ht,
          () => ve
        );
      }
    };
    oe(ln, (H) => {
      f() === "outlined" && H(Gt);
    });
  }
  var un = ge(ln, 2);
  Ae(un, () => e.leadingIcon ?? pe);
  var Jt = ge(un, 2);
  ke(Jt, (H, Se) => ({ class: H, ...Se }), [
    () => He({
      "mdc-select__selected-text-container": !0,
      [$()]: !0
    }),
    () => it(P, "selectedTextContainer$")
  ]);
  var Wn = ce(Jt);
  ke(
    Wn,
    (H, Se) => ({
      id: A() + "-smui-selected-text",
      class: H,
      role: "button",
      "aria-haspopup": "listbox",
      "aria-labelledby": A() + "-smui-label",
      ...Se
    }),
    [
      () => He({
        "mdc-select__selected-text": !0,
        [W()]: !0
      }),
      () => it(P, "selectedText$")
    ]
  );
  var jr = ce(Wn);
  Ue(Wn, (H, Se) => Q == null ? void 0 : Q(H, Se), V), Ue(Jt, (H, Se) => Q == null ? void 0 : Q(H, Se), k);
  var cn = ge(Jt, 2);
  ke(cn, (H, Se) => ({ class: H, ...Se }), [
    () => He({
      "mdc-select__dropdown-icon": !0,
      [x()]: !0
    }),
    () => it(P, "dropdownIcon$")
  ]), Ue(cn, (H, Se) => Q == null ? void 0 : Q(H, Se), R);
  var Kt = ge(cn, 2);
  {
    var mn = (H) => {
      {
        let Se = /* @__PURE__ */ fe(() => it(P, "ripple$"));
        Te(ed(H, Je(() => s(Se))), (gt) => J = gt, () => J);
      }
    };
    oe(Kt, (H) => {
      f() !== "outlined" && d() && H(mn);
    });
  }
  Te(st, (H) => Ee = H, () => Ee), Ue(st, (H, Se) => Q == null ? void 0 : Q(H, Se), C);
  var ir = ge(st, 2);
  {
    let H = /* @__PURE__ */ fe(() => He({
      "mdc-select__menu": !0,
      ...se,
      [M()]: !0
    })), Se = /* @__PURE__ */ fe(() => it(P, "menu$"));
    ip(ir, Je(
      {
        get class() {
          return s(H);
        },
        get id() {
          return s(q);
        },
        fullWidth: !0,
        anchor: !1,
        get anchorElement() {
          return s(ee);
        },
        get anchorCorner() {
          return s(re);
        }
      },
      () => s(Se),
      {
        onSMUIMenuSelected: (gt) => {
          var Ht;
          s(N) && s(N).handleMenuItemAction(gt.detail.index), (Ht = e.onSMUIMenuSelected) == null || Ht.call(e, gt);
        },
        onSMUIMenuSurfaceClosing: (gt) => {
          var Ht;
          s(N) && s(N).handleMenuClosing(), (Ht = e.onSMUIMenuSurfaceClosing) == null || Ht.call(e, gt);
        },
        onSMUIMenuSurfaceClosed: (gt) => {
          var Ht;
          s(N) && s(N).handleMenuClosed(), (Ht = e.onSMUIMenuSurfaceClosed) == null || Ht.call(e, gt);
        },
        onSMUIMenuSurfaceOpened: (gt) => {
          var Ht;
          s(N) && s(N).handleMenuOpened(), (Ht = e.onSMUIMenuSurfaceOpened) == null || Ht.call(e, gt);
        },
        get open() {
          return s(te);
        },
        set open(gt) {
          X(te, gt, !0);
        },
        children: (gt, Ht) => {
          {
            let ar = /* @__PURE__ */ fe(() => it(P, "list$"));
            ap(gt, Je(
              {
                role: "listbox",
                get wrapFocus() {
                  return s(Re);
                }
              },
              () => s(ar),
              {
                get selectedIndex() {
                  return s(G);
                },
                set selectedIndex(or) {
                  X(G, or, !0);
                },
                children: (or, sa) => {
                  var Ei = ie(), qr = Y(Ei);
                  Ae(qr, () => e.children ?? pe), T(or, Ei);
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
  Te(tt, (H) => ne = H, () => ne), Ue(tt, (H, Se) => Yt == null ? void 0 : Yt(H, Se), () => ({
    ripple: f() === "filled",
    unbounded: !1,
    addClass: me,
    removeClass: F,
    addStyle: B
  })), Ue(tt, (H, Se) => rs == null ? void 0 : rs(H, Se), () => ({ addClass: me, removeClass: F })), Ue(tt, (H, Se) => Q == null ? void 0 : Q(H, Se), u);
  var oa = ge(tt, 2);
  {
    var Bo = (H) => {
      {
        let Se = /* @__PURE__ */ fe(() => it(P, "helperText$"));
        fp(H, Je(() => s(Se), {
          children: (gt, Ht) => {
            var ar = ie(), or = Y(ar);
            Ae(or, () => e.helperText ?? pe), T(gt, ar);
          },
          $$slots: { default: !0 }
        }));
      }
    };
    oe(oa, (H) => {
      e.helperText && H(Bo);
    });
  }
  xe(() => ze(jr, n())), T(t, $e);
  var Ir = Le(Xe);
  return i(), Ir;
}
function bp(t, e) {
  we(e, !0);
  const n = () => Bn(d, "$selectedValue", r), [r, i] = rr();
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
  const c = ye("SMUI:select:selectedText"), d = ye("SMUI:select:value");
  ue("SMUI:list:item:role", "option");
  const m = /* @__PURE__ */ fe(() => o() != null && o() !== "" && n() === o());
  at(f), In(f);
  function f() {
    s(m) && l && Fn(c, l.getPrimaryText());
  }
  function g() {
    return l.getElement();
  }
  var h = { getElement: g };
  Te(
    up(t, Je(
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
          var S = ie(), E = Y(S);
          Ae(E, () => e.children ?? pe), T(b, S);
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
function _p(t, e) {
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
  pp(t, {
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
      var f = ie(), g = Y(f);
      Qn(g, 17, n, Ri, (h, p, b) => {
        {
          let y = /* @__PURE__ */ fe(() => c(b));
          bp(h, {
            get onclick() {
              return s(y);
            },
            get value() {
              return s(p).value;
            },
            children: (S, E) => {
              var _ = vt();
              xe(() => ze(_, s(p).label)), T(S, _);
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
function yp(t) {
  return t ? t.scrollHeight > t.offsetHeight : !1;
}
function Ip(t) {
  return t ? t.scrollTop === 0 : !1;
}
function Ep(t) {
  return t ? Math.ceil(t.scrollHeight - t.scrollTop) === t.clientHeight : !1;
}
function Sp(t) {
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
var Ap = (
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
}, ma = {
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
}, is = {
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
var So;
(function(t) {
  t.POLL_SCROLL_POS = "poll_scroll_position", t.POLL_LAYOUT_CHANGE = "poll_layout_change";
})(So || (So = {}));
var Cp = (
  /** @class */
  function(t) {
    et(e, t);
    function e(n) {
      var r = t.call(this, be(be({}, e.defaultAdapter), n)) || this;
      return r.dialogOpen = !1, r.isFullscreen = !1, r.animationFrame = 0, r.animationTimer = 0, r.escapeKeyAction = ma.CLOSE_ACTION, r.scrimClickAction = ma.CLOSE_ACTION, r.autoStackButtons = !0, r.areButtonsStacked = !1, r.suppressDefaultPressSelector = ma.SUPPRESS_DEFAULT_PRESS_SELECTOR, r.animFrame = new Ap(), r.contentScrollHandler = function() {
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
        return ma;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return is;
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
        }, is.DIALOG_ANIMATION_OPEN_TIME_MS);
      });
    }, e.prototype.close = function(n) {
      var r = this;
      n === void 0 && (n = ""), this.dialogOpen && (this.dialogOpen = !1, this.adapter.notifyClosing(n), this.adapter.addClass(lt.CLOSING), this.adapter.removeClass(lt.OPEN), this.adapter.removeBodyClass(lt.SCROLL_LOCK), this.isFullscreen && this.adapter.deregisterContentEventHandler("scroll", this.contentScrollHandler), this.adapter.deregisterWindowEventHandler("resize", this.windowResizeHandler), this.adapter.deregisterWindowEventHandler("orientationchange", this.windowOrientationChangeHandler), cancelAnimationFrame(this.animationFrame), this.animationFrame = 0, clearTimeout(this.animationTimer), this.animationTimer = setTimeout(function() {
        r.adapter.releaseFocus(), r.handleAnimationTimerEnd(), r.adapter.notifyClosed(n);
      }, is.DIALOG_ANIMATION_CLOSE_TIME_MS));
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
      this.animFrame.request(So.POLL_LAYOUT_CHANGE, function() {
        n.layoutInternal();
      });
    }, e.prototype.handleClick = function(n) {
      var r = this.adapter.eventTargetMatches(n.target, ma.SCRIM_SELECTOR);
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
      this.animFrame.request(So.POLL_SCROLL_POS, function() {
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
  }(xt)
), Tp = /* @__PURE__ */ de('<div class="mdc-dialog__surface-scrim"></div>'), xp = /* @__PURE__ */ de('<div><div><div><!> <!></div></div> <div class="mdc-dialog__scrim"></div></div> <!>', 1);
function ol(t, e) {
  we(e, !0);
  const n = () => Bn(V, "$aboveFullscreenShown", r), [r, i] = rr(), { FocusTrap: a } = Xm, { closest: o, matches: u } = ia;
  let l = v(e, "use", 19, () => []), c = v(e, "class", 3, ""), d = v(e, "open", 15, !1), m = v(e, "selection", 3, !1), f = v(e, "escapeKeyAction", 3, "close"), g = v(e, "scrimClickAction", 3, "close"), h = v(e, "autoStackButtons", 3, !0), p = v(e, "fullscreen", 3, !1), b = v(e, "sheet", 3, !1), y = v(e, "noContentPadding", 3, !1), S = v(e, "container$class", 3, ""), E = v(e, "surface$class", 3, ""), _ = /* @__PURE__ */ je(e, [
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
  ]), A, I = /* @__PURE__ */ he(void 0), O = new bi(), C = Ie({}), L, k = Bt(!1), $ = ye("SMUI:dialog:aboveFullscreen"), V = ye("SMUI:dialog:aboveFullscreenShown") ?? Bt(!1), W = ye("SMUI:addLayoutListener"), R, x = [], M = (F) => (x.push(F), () => {
    const B = x.indexOf(F);
    B >= 0 && x.splice(B, 1);
  });
  ue("SMUI:dialog:actions:reversed", k), ue("SMUI:addLayoutListener", M), ue("SMUI:dialog:selection", m()), ue("SMUI:dialog:aboveFullscreen", $ || p()), ue("SMUI:dialog:aboveFullscreenShown", V), b() && ue("SMUI:icon-button:context", "dialog:sheet"), Oe(() => {
    s(I) && s(I).getEscapeKeyAction() !== f() && s(I).setEscapeKeyAction(f());
  }), Oe(() => {
    s(I) && s(I).getScrimClickAction() !== g() && s(I).setScrimClickAction(g());
  }), Oe(() => {
    s(I) && s(I).getAutoStackButtons() !== h() && s(I).setAutoStackButtons(h());
  }), Oe(() => {
    h() || Fn(k, !0);
  }), W && (R = W(te)), Oe(() => {
    s(I) && s(I).isOpen() !== d() && (d() ? s(I).open({ isAboveFullscreenDialog: !!$ }) : s(I).close());
  });
  let P = n();
  Oe(() => {
    p() && s(I) && P !== n() && (P = n(), n() ? s(I).showSurfaceScrim() : s(I).hideSurfaceScrim());
  }), at(() => (L = new a(A, { initialFocusEl: _e() ?? void 0 }), X(
    I,
    new Cp({
      addBodyClass: (F) => document.body.classList.add(F),
      addClass: ne,
      areButtonsStacked: () => Sp(D()),
      clickDefaultButton: () => {
        const F = j();
        F && F.click();
      },
      eventTargetMatches: (F, B) => F ? u(F, B) : !1,
      getActionFromEvent: (F) => {
        if (!F.target)
          return "";
        const B = o(F.target, "[data-mdc-dialog-action]");
        return B && B.getAttribute("data-mdc-dialog-action");
      },
      getInitialFocusEl: _e,
      hasClass: Z,
      isContentScrollable: () => yp(Ee()),
      notifyClosed: (F) => {
        d(!1), Ke(se(), "SMUIDialogClosed", F ? { action: F } : {});
      },
      notifyClosing: (F) => Ke(se(), "SMUIDialogClosing", F ? { action: F } : {}),
      notifyOpened: () => Ke(se(), "SMUIDialogOpened", {}),
      notifyOpening: () => Ke(se(), "SMUIDialogOpening", {}),
      releaseFocus: () => L.releaseFocus(),
      removeBodyClass: (F) => document.body.classList.remove(F),
      removeClass: N,
      reverseButtons: () => {
        Fn(k, !0);
      },
      trapFocus: () => L.trapFocus(),
      registerContentEventHandler: (F, B) => {
        const ae = Ee();
        ae instanceof HTMLElement && O.on(ae, F, B);
      },
      deregisterContentEventHandler: (F, B) => {
        const ae = Ee();
        ae instanceof HTMLElement && O.off(ae, F, B);
      },
      isScrollableContentAtTop: () => Ip(Ee()),
      isScrollableContentAtBottom: () => Ep(Ee()),
      registerWindowEventHandler: (F, B) => O.on(window, F, B),
      deregisterWindowEventHandler: (F, B) => O.off(window, F, B)
    }),
    !0
  ), s(I).init(), () => {
    var F;
    (F = s(I)) == null || F.destroy(), O.clear();
  })), In(() => {
    R && R();
  });
  function Z(F) {
    return F in C ? C[F] : se().classList.contains(F);
  }
  function ne(F) {
    C[F] || (C[F] = !0);
  }
  function N(F) {
    (!(F in C) || C[F]) && (C[F] = !1);
  }
  function D() {
    return [].slice.call(se().querySelectorAll(".mdc-dialog__button"));
  }
  function j() {
    return se().querySelector("[data-mdc-dialog-button-default]");
  }
  function Ee() {
    return se().querySelector(".mdc-dialog__content");
  }
  function _e() {
    return se().querySelector("[data-mdc-dialog-initial-focus]");
  }
  function G() {
    $ && Fn(V, !0), requestAnimationFrame(() => {
      x.forEach((F) => F());
    });
  }
  function q() {
    x.forEach((F) => F());
  }
  function w() {
    $ && Fn(V, !1);
  }
  function z() {
    return d();
  }
  function K(F) {
    d(F);
  }
  function te() {
    var F;
    return (F = s(I)) == null ? void 0 : F.layout();
  }
  function se() {
    return A;
  }
  var ee = { isOpen: z, setOpen: K, layout: te, getElement: se }, re = xp();
  Jn("resize", Ta, () => d() && s(I) && s(I).layout()), Jn("orientationchange", Ta, () => d() && s(I) && s(I).layout()), Jn("keydown", Ys.body, (F) => s(I) && s(I).handleDocumentKeydown(F));
  var Re = Y(re), Ce = (F) => {
    var B;
    G(), (B = e.onSMUIDialogOpening) == null || B.call(e, F);
  }, Ne = (F) => {
    var B;
    q(), (B = e.onSMUIDialogOpened) == null || B.call(e, F);
  }, Pe = (F) => {
    var B;
    w(), (B = e.onSMUIDialogClosed) == null || B.call(e, F);
  }, Me = (F) => {
    var B;
    s(I) && s(I).handleClick(F), (B = e.onclick) == null || B.call(e, F);
  }, U = (F) => {
    var B;
    s(I) && s(I).handleKeydown(F), (B = e.onkeydown) == null || B.call(e, F);
  };
  ke(
    Re,
    (F, B) => ({
      class: F,
      role: "alertdialog",
      "aria-modal": "true",
      ...B,
      onSMUIDialogOpening: Ce,
      onSMUIDialogOpened: Ne,
      onSMUIDialogClosed: Pe,
      onclick: Me,
      onkeydown: U
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
  var J = ce(Re);
  ke(J, (F, B) => ({ class: F, ...B }), [
    () => He({ "mdc-dialog__container": !0, [S()]: !0 }),
    () => it(_, "container$")
  ]);
  var ve = ce(J);
  ke(ve, (F, B) => ({ class: F, role: "alertdialog", "aria-modal": "true", ...B }), [
    () => He({ "mdc-dialog__surface": !0, [E()]: !0 }),
    () => it(_, "surface$")
  ]);
  var De = ce(ve);
  Ae(De, () => e.children ?? pe);
  var Fe = ge(De, 2);
  {
    var ot = (F) => {
      var B = Tp();
      Jn("transitionend", B, () => s(I) && s(I).handleSurfaceScrimTransitionEnd()), T(F, B);
    };
    oe(Fe, (F) => {
      p() && F(ot);
    });
  }
  Te(Re, (F) => A = F, () => A), Ue(Re, (F, B) => Q == null ? void 0 : Q(F, B), l);
  var ft = ge(Re, 2);
  Ae(ft, () => e.over ?? pe), T(t, re);
  var me = Le(ee);
  return i(), me;
}
function ad(t, e) {
  we(e, !0);
  let n = /* @__PURE__ */ je(e, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return Te(
    aa(t, Je(
      {
        _smuiClass: "mdc-dialog__header",
        _smuiContexts: { "SMUI:icon-button:context": "dialog:header" },
        tag: "div"
      },
      () => n,
      {
        children: (o, u) => {
          var l = ie(), c = Y(l);
          Ae(c, () => e.children ?? pe), T(o, l);
        },
        $$slots: { default: !0 }
      }
    )),
    (o) => r = o,
    () => r
  ), Le(a);
}
function sl(t, e) {
  we(e, !0);
  let n = /* @__PURE__ */ je(e, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return Te(
    aa(t, Je({ _smuiClass: "mdc-dialog__content", tag: "div" }, () => n, {
      children: (o, u) => {
        var l = ie(), c = Y(l);
        Ae(c, () => e.children ?? pe), T(o, l);
      },
      $$slots: { default: !0 }
    })),
    (o) => r = o,
    () => r
  ), Le(a);
}
function ll(t, e) {
  we(e, !0);
  let n = /* @__PURE__ */ je(e, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return Te(
    aa(t, Je(
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
          var l = ie(), c = Y(l);
          Ae(c, () => e.children ?? pe), T(o, l);
        },
        $$slots: { default: !0 }
      }
    )),
    (o) => r = o,
    () => r
  ), Le(a);
}
var wp = /* @__PURE__ */ de('<div class="dialog-title svelte-187m1sc"><!></div> <!> <!>', 1);
function Lp(t, e) {
  we(e, !0);
  let n = v(e, "open", 15, !1), r = v(e, "onClose", 3, () => {
  });
  ol(t, {
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
      var o = wp(), u = Y(o), l = ce(u);
      Ae(l, () => e.title ?? pe);
      var c = ge(u, 2);
      sl(c, {
        id: "large-scroll-content",
        children: (m, f) => {
          var g = ie(), h = Y(g);
          Ae(h, () => e.content ?? pe), T(m, g);
        },
        $$slots: { default: !0 }
      });
      var d = ge(c, 2);
      ll(d, {
        children: (m, f) => {
          var g = ie(), h = Y(g);
          Ae(h, () => e.actions ?? pe), T(m, g);
        },
        $$slots: { default: !0 }
      }), T(i, o);
    },
    $$slots: { default: !0 }
  }), Le();
}
const ul = Bt({
  component: null,
  props: {},
  isOpen: !1
}), Op = Bt([]);
Op.subscribe;
const hu = Ie({ freeze: !1 });
function Rp(t, e) {
  we(e, !0);
  let n = /* @__PURE__ */ he(void 0), r = /* @__PURE__ */ he(!1);
  const i = ul.subscribe((l) => {
    X(n, l, !0), X(r, l.isOpen, !0), hu.freeze = !1;
  });
  at(() => () => i()), Oe(() => {
    hu.freeze = s(
      r
      // freeze drawer controls when dialog is open
    );
  });
  var a = ie(), o = Y(a);
  {
    var u = (l) => {
      var c = ie(), d = Y(c);
      nr(d, () => s(n).component, (m, f) => {
        f(m, Je(() => s(n).props, {
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
function as(t, e = {}) {
  return new Promise((n) => {
    ul.set({
      component: t,
      props: e,
      isOpen: !0,
      resolve: n
    });
  });
}
function os(t, e) {
  ul.update((n) => {
    var r;
    return (r = n.resolve) == null || r.call(n, { type: t, data: e }), { component: null, props: {}, isOpen: !1 };
  });
}
var Dp = /* @__PURE__ */ de('<div class="oscd-confirm-dialog__content svelte-1eipd40"> </div>');
function ss(t, e) {
  we(e, !0);
  let n = v(e, "open", 15, !1), r = v(e, "title", 3, ""), i = v(e, "message", 3, ""), a = v(e, "confirmActionText", 3, "OK"), o = v(e, "confirmActionColor", 3, "primary"), u = v(e, "cancelActionText", 3, "Cancel"), l = v(e, "color", 3, "var(--mdc-theme-primary, #ff3e00)");
  function c() {
    os("confirm");
  }
  function d() {
    os("cancel");
  }
  Gp(t, {
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
    onClose: () => os("cancel"),
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
      var g = Dp(), h = ce(g);
      xe(() => ze(h, i())), T(f, g);
    },
    $$slots: { content: !0 }
  }), Le();
}
var Mp = /* @__PURE__ */ de('<div class="header svelte-154fm8w"><h4 id="leave-confirm-title" class="svelte-154fm8w"> </h4></div>'), Pp = /* @__PURE__ */ de('<p class="message svelte-154fm8w" id="leave-confirm-content"> </p>'), Hp = /* @__PURE__ */ de("<!> <!>", 1), Np = /* @__PURE__ */ de("<!> <!> <!>", 1);
function Up(t, e) {
  we(e, !0);
  let n = v(e, "open", 15, !1), r = v(e, "title", 3, "Unsaved changes"), i = v(e, "message", 3, "If you leave now, your unsaved changes will be lost."), a = v(e, "discardActionText", 3, "Discard changes"), o = v(e, "cancelActionText", 3, "Keep editing"), u = v(e, "onStay", 3, () => {
  }), l = v(e, "onLeave", 3, () => {
  });
  ol(t, {
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
      var m = Np(), f = Y(m);
      ad(f, {
        children: (p, b) => {
          var y = Mp(), S = ce(y), E = ce(S);
          xe(() => ze(E, r())), T(p, y);
        },
        $$slots: { default: !0 }
      });
      var g = ge(f, 2);
      sl(g, {
        children: (p, b) => {
          var y = Pp(), S = ce(y);
          xe(() => ze(S, i())), T(p, y);
        },
        $$slots: { default: !0 }
      });
      var h = ge(g, 2);
      ll(h, {
        class: "leave-confirm-actions",
        children: (p, b) => {
          var y = Hp(), S = Y(y);
          Ji(S, {
            type: "button",
            get onclick() {
              return u();
            },
            children: (_, A) => {
              var I = vt();
              xe(() => ze(I, o())), T(_, I);
            },
            $$slots: { default: !0 }
          });
          var E = ge(S, 2);
          Ji(E, {
            type: "button",
            get onclick() {
              return l();
            },
            style: "background-color: #FF203A; color: white;",
            children: (_, A) => {
              var I = vt();
              xe(() => ze(I, a())), T(_, I);
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
var Fp = /* @__PURE__ */ de('<div class="dialog__title svelte-ec2c4h"><h4 class="svelte-ec2c4h"> </h4> <!></div>'), kp = /* @__PURE__ */ de("<!> <!>", 1), Bp = /* @__PURE__ */ de('<!> <!> <div class="dialog__actions svelte-ec2c4h"><!></div>', 1), Vp = /* @__PURE__ */ de("<!> <!>", 1);
function Gp(t, e) {
  we(e, !0);
  let n = v(e, "open", 15, !1), r = v(e, "title", 3, ""), i = v(e, "confirmActionText", 3, "Confirm"), a = v(e, "confirmActionColor", 3, "primary"), o = v(e, "cancelActionText", 3, "Cancel"), u = v(e, "width", 3, "80vw"), l = v(e, "maxWidth", 3, "85vw"), c = v(e, "height", 3, "85vh"), d = v(e, "maxHeight", 3, "85vh"), m = v(e, "confirmDisabled", 3, !1), f = v(e, "color", 3, "var(--mdc-theme-primary, #ff3e00)"), g = v(e, "contentPadding", 3, "var(--dialog-h-padding, 1.5rem)"), h = v(e, "showCloseButton", 3, !0), p = v(e, "confirmClose", 3, !1), b = v(e, "onClose", 3, () => {
  }), y = v(e, "onCancel", 3, () => {
  }), S = v(e, "onConfirm", 3, () => {
  }), E = /* @__PURE__ */ he(!1), _ = /* @__PURE__ */ he(null), A = /* @__PURE__ */ he(!1);
  function I(M) {
    p() ? (X(_, M, !0), X(E, !0)) : (X(A, !0), M());
  }
  function O(M) {
    if (s(A)) {
      X(A, !1);
      return;
    }
    M.detail.action === "confirm" ? S()() : I(b());
  }
  function C(M) {
    p() && M.target.classList.contains("mdc-dialog__scrim") && I(b());
  }
  function L(M) {
    p() && n() && M.key === "Escape" && !s(E) && (M.preventDefault(), I(b()));
  }
  function k() {
    X(A, !0), X(E, !1);
    const M = s(_) ?? b();
    X(_, null), M();
  }
  const $ = /* @__PURE__ */ fe(() => m() ? "" : `background-color: ${a() === "primary" ? f() : "#FF203A"}; color: white;`);
  var V = Vp();
  Jn("keydown", Ta, L);
  var W = Y(V);
  {
    let M = /* @__PURE__ */ fe(() => p() ? "" : "close"), P = /* @__PURE__ */ fe(() => p() ? "" : "close"), Z = /* @__PURE__ */ fe(() => `width: ${u()}; max-width: ${l()}; height: ${c()}; max-height: ${d()}; --dialog-content-padding: ${g()};`);
    ol(W, {
      "aria-labelledby": "large-scroll-title",
      "aria-describedby": "large-scroll-content",
      onSMUIDialogClosed: O,
      get escapeKeyAction() {
        return s(M);
      },
      get scrimClickAction() {
        return s(P);
      },
      onclick: C,
      surface$class: "oscd-base-dialog__surface",
      get surface$style() {
        return s(Z);
      },
      get open() {
        return n();
      },
      set open(ne) {
        n(ne);
      },
      children: (ne, N) => {
        var D = Bp(), j = Y(D);
        ad(j, {
          children: (z, K) => {
            var te = Fp(), se = ce(te), ee = ce(se), re = ge(se, 2);
            {
              var Re = (Ce) => {
                d_(Ce, {
                  tabindex: "-1",
                  onClick: () => I(b()),
                  tooltip: "Close",
                  tooltipSide: "left",
                  type: "close",
                  fillColor: "white"
                });
              };
              oe(re, (Ce) => {
                h() && Ce(Re);
              });
            }
            xe(() => {
              ct(te, `background-color: ${f()};`), ze(ee, r());
            }), T(z, te);
          },
          $$slots: { default: !0 }
        });
        var Ee = ge(j, 2);
        sl(Ee, {
          id: "dialog__content",
          children: (z, K) => {
            var te = ie(), se = Y(te);
            Ae(se, () => e.content ?? pe), T(z, te);
          },
          $$slots: { default: !0 }
        });
        var _e = ge(Ee, 2), G = ce(_e);
        {
          var q = (z) => {
            var K = ie(), te = Y(K);
            Ae(te, () => e.actions, () => ({ requestClose: () => I(y()) })), T(z, K);
          }, w = (z) => {
            ll(z, {
              class: "oscd-dialog__actions",
              children: (K, te) => {
                var se = kp(), ee = Y(se);
                {
                  var re = (Ce) => {
                    Ji(Ce, {
                      type: "button",
                      onclick: () => I(y()),
                      color: "secondary",
                      children: (Ne, Pe) => {
                        var Me = vt();
                        xe(() => ze(Me, o())), T(Ne, Me);
                      },
                      $$slots: { default: !0 }
                    });
                  };
                  oe(ee, (Ce) => {
                    o() && Ce(re);
                  });
                }
                var Re = ge(ee, 2);
                Ji(Re, {
                  type: "button",
                  action: "confirm",
                  get disabled() {
                    return m();
                  },
                  get style() {
                    return s($);
                  },
                  children: (Ce, Ne) => {
                    var Pe = vt();
                    xe(() => ze(Pe, i())), T(Ce, Pe);
                  },
                  $$slots: { default: !0 }
                }), T(K, se);
              },
              $$slots: { default: !0 }
            });
          };
          oe(G, (z) => {
            e.actions ? z(q) : z(w, !1);
          });
        }
        T(ne, D);
      },
      $$slots: { default: !0 }
    });
  }
  var R = ge(W, 2);
  {
    var x = (M) => {
      Up(M, {
        onStay: () => {
          X(E, !1);
        },
        onLeave: k,
        get open() {
          return s(E);
        },
        set open(P) {
          X(E, P, !0);
        }
      });
    };
    oe(R, (M) => {
      p() && M(x);
    });
  }
  T(t, V), Le();
}
const jt = [];
for (let t = 0; t < 256; ++t)
  jt.push((t + 256).toString(16).slice(1));
function jp(t, e = 0) {
  return (jt[t[e + 0]] + jt[t[e + 1]] + jt[t[e + 2]] + jt[t[e + 3]] + "-" + jt[t[e + 4]] + jt[t[e + 5]] + "-" + jt[t[e + 6]] + jt[t[e + 7]] + "-" + jt[t[e + 8]] + jt[t[e + 9]] + "-" + jt[t[e + 10]] + jt[t[e + 11]] + jt[t[e + 12]] + jt[t[e + 13]] + jt[t[e + 14]] + jt[t[e + 15]]).toLowerCase();
}
let ls;
const qp = new Uint8Array(16);
function Wp() {
  if (!ls) {
    if (typeof crypto > "u" || !crypto.getRandomValues)
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    ls = crypto.getRandomValues.bind(crypto);
  }
  return ls(qp);
}
const zp = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), vu = { randomUUID: zp };
function Kp(t, e, n) {
  var i;
  if (vu.randomUUID && !e && !t)
    return vu.randomUUID();
  t = t || {};
  const r = t.random ?? ((i = t.rng) == null ? void 0 : i.call(t)) ?? Wp();
  if (r.length < 16)
    throw new Error("Random bytes length must be >= 16");
  if (r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, e) {
    if (n = n || 0, n < 0 || n + 16 > e.length)
      throw new RangeError(`UUID byte range ${n}:${n + 15} is out of buffer bounds`);
    for (let a = 0; a < 16; ++a)
      e[n + a] = r[a];
    return e;
  }
  return jp(r);
}
var Xp = /* @__PURE__ */ de('<span class="oscd-icon"><!></span>');
function Dt(t, e) {
  var n = Xp(), r = ce(n);
  Ae(r, () => e.children ?? pe), T(t, n);
}
var Zp = /* @__PURE__ */ _t('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"></path></svg>');
function Yp(t, e) {
  let n = v(e, "svgStyles", 3, "");
  Dt(t, {
    children: (r, i) => {
      var a = Zp();
      xe(() => ct(a, n())), T(r, a);
    }
  });
}
var Qp = /* @__PURE__ */ _t('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"></path></svg>');
function cl(t, e) {
  let n = v(e, "svgStyles", 3, "");
  Dt(t, {
    children: (r, i) => {
      var a = Qp();
      xe(() => ct(a, n())), T(r, a);
    }
  });
}
var Jp = /* @__PURE__ */ _t('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z"></path></svg>');
function $p(t, e) {
  let n = v(e, "svgStyles", 3, "");
  Dt(t, {
    children: (r, i) => {
      var a = Jp();
      xe(() => ct(a, n())), T(r, a);
    }
  });
}
var eb = /* @__PURE__ */ _t('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="m590-160 80 80H240q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h360l200 240v480q0 20-8.5 36.5T768-96L560-302q-17 11-37 16.5t-43 5.5q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 23-5.5 43T618-360l102 104v-356L562-800H240v640h350ZM480-360q33 0 56.5-23.5T560-440q0-33-23.5-56.5T480-520q-33 0-56.5 23.5T400-440q0 33 23.5 56.5T480-360Zm0-80Zm0 0Z"></path></svg>');
function tb(t, e) {
  let n = v(e, "svgStyles", 3, "");
  Dt(t, {
    children: (r, i) => {
      var a = eb();
      xe(() => ct(a, n())), T(r, a);
    }
  });
}
var nb = /* @__PURE__ */ _t('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-160q-134 0-227-93t-93-227q0-134 93-227t227-93q69 0 132 28.5T720-690v-110h80v280H520v-80h168q-32-56-87.5-88T480-720q-100 0-170 70t-70 170q0 100 70 170t170 70q77 0 139-44t87-116h84q-28 106-114 173t-196 67Z"></path></svg>');
function od(t, e) {
  let n = v(e, "svgStyles", 3, "");
  Dt(t, {
    children: (r, i) => {
      var a = nb();
      xe(() => ct(a, n())), T(r, a);
    }
  });
}
var rb = /* @__PURE__ */ _t('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M200-440v-80h560v80H200Z"></path></svg>');
function ib(t, e) {
  let n = v(e, "svgStyles", 3, "");
  Dt(t, {
    children: (r, i) => {
      var a = rb();
      xe(() => ct(a, n())), T(r, a);
    }
  });
}
var ab = /* @__PURE__ */ _t('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"></path></svg>');
function sd(t, e) {
  let n = v(e, "svgStyles", 3, "");
  Dt(t, {
    children: (r, i) => {
      var a = ab();
      xe(() => ct(a, n())), T(r, a);
    }
  });
}
var ob = /* @__PURE__ */ _t('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"></path></svg>');
function ld(t, e) {
  let n = v(e, "svgStyles", 3, "");
  Dt(t, {
    children: (r, i) => {
      var a = ob();
      xe(() => ct(a, n())), T(r, a);
    }
  });
}
var sb = /* @__PURE__ */ _t('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z"></path></svg>');
function lb(t, e) {
  let n = v(e, "svgStyles", 3, "");
  Dt(t, {
    children: (r, i) => {
      var a = sb();
      xe(() => ct(a, n())), T(r, a);
    }
  });
}
var ub = /* @__PURE__ */ _t('<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"></path><path d="M16 8h-2v3h-3v2h3v3h2v-3h3v-2h-3zM2 12c0-2.79 1.64-5.2 4.01-6.32V3.52C2.52 4.76 0 8.09 0 12s2.52 7.24 6.01 8.48v-2.16C3.64 17.2 2 14.79 2 12zm13-9c-4.96 0-9 4.04-9 9s4.04 9 9 9 9-4.04 9-9-4.04-9-9-9zm0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7z"></path></svg>');
function cb(t, e) {
  let n = v(e, "svgStyles", 3, "");
  Dt(t, {
    children: (r, i) => {
      var a = ub();
      xe(() => ct(a, n())), T(r, a);
    }
  });
}
cf();
var db = /* @__PURE__ */ _t('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M440-280h80v-240h-80v240Zm40-320q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0 520q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"></path></svg>');
function fb(t, e) {
  let n = v(e, "svgStyles", 3, "");
  Dt(t, {
    children: (r, i) => {
      var a = db();
      xe(() => ct(a, n())), T(r, a);
    }
  });
}
var hb = /* @__PURE__ */ _t('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"></path></svg>');
function vb(t, e) {
  let n = v(e, "svgStyles", 3, "");
  Dt(t, {
    children: (r, i) => {
      var a = hb();
      xe(() => ct(a, n())), T(r, a);
    }
  });
}
var mb = /* @__PURE__ */ _t('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960"><path d="m176-120-56-56 301-302-181-45 198-123-17-234 179 151 216-88-87 217 151 178-234-16-124 198-45-181-301 301Zm24-520-80-80 80-80 80 80-80 80Zm355 197 48-79 93 7-60-71 35-86-86 35-71-59 7 92-79 49 90 22 23 90Zm165 323-80-80 80-80 80 80-80 80ZM569-570Z"></path></svg>');
function gb(t, e) {
  let n = v(e, "svgStyles", 3, "");
  Dt(t, {
    children: (r, i) => {
      var a = mb();
      xe(() => ct(a, n())), T(r, a);
    }
  });
}
var pb = /* @__PURE__ */ _t('<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m770-302-60-62q40-11 65-42.5t25-73.5q0-50-35-85t-85-35H520v-80h160q83 0 141.5 58.5T880-480q0 57-29.5 105T770-302ZM634-440l-80-80h86v80h-6ZM792-56 56-792l56-56 736 736-56 56ZM440-280H280q-83 0-141.5-58.5T80-480q0-69 42-123t108-71l74 74h-24q-50 0-85 35t-35 85q0 50 35 85t85 35h160v80ZM320-440v-80h65l79 80H320Z"></path></svg>');
function bb(t, e) {
  let n = v(e, "svgStyles", 3, "");
  Dt(t, {
    children: (r, i) => {
      var a = pb();
      xe(() => ct(a, n())), T(r, a);
    }
  });
}
var _b = /* @__PURE__ */ _t('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"></path></svg>');
function yb(t, e) {
  let n = v(e, "svgStyles", 3, "");
  Dt(t, {
    children: (r, i) => {
      var a = _b();
      xe(() => ct(a, n())), T(r, a);
    }
  });
}
var Ib = /* @__PURE__ */ _t('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" height="24px"><path d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z"></path></svg>');
function Eb(t, e) {
  let n = v(e, "svgStyles", 8, "");
  Dt(t, {
    children: (r, i) => {
      var a = Ib();
      xe(() => ct(a, n())), T(r, a);
    }
  });
}
var Sb = /* @__PURE__ */ _t('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3" cursor="pointer"><path d="M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160Zm40 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"></path></svg>');
function Ab(t, e) {
  let n = v(e, "svgStyles", 8, "");
  Dt(t, {
    children: (r, i) => {
      var a = Sb();
      xe(() => ct(a, n())), T(r, a);
    }
  });
}
var Cb = /* @__PURE__ */ _t('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m480-240 160-160-56-56-64 64v-168h-80v168l-64-64-56 56 160 160ZM200-640v440h560v-440H200Zm0 520q-33 0-56.5-23.5T120-200v-499q0-14 4.5-27t13.5-24l50-61q11-14 27.5-21.5T250-840h460q18 0 34.5 7.5T772-811l50 61q9 11 13.5 24t4.5 27v499q0 33-23.5 56.5T760-120H200Zm16-600h528l-34-40H250l-34 40Zm264 300Z"></path></svg>');
function Tb(t, e) {
  let n = v(e, "svgStyles", 8, "");
  Dt(t, {
    children: (r, i) => {
      var a = Cb();
      xe(() => ct(a, n())), T(r, a);
    }
  });
}
var xb = /* @__PURE__ */ _t('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z"></path></svg>');
function wb(t, e) {
  let n = v(e, "svgStyles", 3, "");
  Dt(t, {
    children: (r, i) => {
      var a = xb();
      xe(() => ct(a, n())), T(r, a);
    }
  });
}
var Lb = /* @__PURE__ */ _t('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M480-624 288-432l51 51 105-105v390h72v-390l105 105 51-51-192-192ZM163-264q-33-48-50-103T96-480q0-80 30-149.5t82.5-122Q261-804 331-834t149.5-30q79.5 0 149 30t122 82.5Q804-699 834-629.5T864-480q0 58-17.5 113T797-264l-51-52q23-38 34.5-79t11.5-85q0-130-91-221t-221-91q-130 0-221 91t-91 221q0 44 11.5 85.5T214-316l-51 52Z"></path></svg>');
function Ob(t, e) {
  let n = v(e, "svgStyles", 3, "");
  Dt(t, {
    children: (r, i) => {
      var a = Lb();
      xe(() => ct(a, n())), T(r, a);
    }
  });
}
function Rb(t, e) {
  e(t.target.value);
}
var Db = /* @__PURE__ */ de('<div class="custom-text-field svelte-1719vm0"><input type="date" id="datetime-picker" class="custom-text-field__input svelte-1719vm0" placeholder=""/> <label for="datetime-picker" class="custom-floating-label svelte-1719vm0"> </label> <span class="custom-line svelte-1719vm0"></span></div>');
function Mb(t, e) {
  we(e, !0);
  let n = v(e, "label", 3, ""), r = v(e, "value", 15, "");
  var i = Db(), a = ce(i);
  a.__change = [Rb, r];
  var o = ge(a, 2), u = ce(o);
  xe(() => ze(u, n())), La(a, r), T(t, i), Le();
}
yn(["change"]);
function Pb(t, e) {
  e(t.target.value);
}
var Hb = /* @__PURE__ */ de('<div class="custom-text-field svelte-6wdfbb"><input type="datetime-local" id="datetime-picker" class="custom-text-field__input svelte-6wdfbb" placeholder=""/> <label for="datetime-picker" class="custom-floating-label svelte-6wdfbb"> </label> <span class="custom-line svelte-6wdfbb"></span></div>');
function Nb(t, e) {
  we(e, !0);
  let n = v(e, "label", 3, ""), r = v(e, "value", 15, "");
  var i = Hb(), a = ce(i);
  a.__change = [Pb, r];
  var o = ge(a, 2), u = ce(o);
  xe(() => ze(u, n())), La(a, r), T(t, i), Le();
}
yn(["change"]);
function Ub(t, e, n, r) {
  e() && ((t.key === "Enter" || t.key === " ") && (t.preventDefault(), n()), t.key === "Escape" && (t.preventDefault(), r()));
}
var Fb = /* @__PURE__ */ de('<span role="button" tabindex="0" aria-labelledby="tooltip"><!></span>');
function Da(t, e) {
  we(e, !0);
  let n = v(e, "content", 3, ""), r = v(e, "side", 3, "top"), i = v(e, "hoverDelay", 3, 0), a = v(e, "transitionDuration", 3, 80), o = v(e, "disabled", 3, !1), u = v(e, "offset", 3, 8), l = v(e, "backgroundColor", 3, "#000"), c = v(e, "paddingY", 3, 6), d = v(e, "paddingX", 3, 10), m = v(e, "textColor", 3, "#fff");
  const f = `tt-${Math.random().toString(36).slice(2)}`;
  let g = /* @__PURE__ */ he(null), h = /* @__PURE__ */ he(null), p = /* @__PURE__ */ he(null), b = /* @__PURE__ */ he(null), y = /* @__PURE__ */ he(!1), S = /* @__PURE__ */ he(null), E = /* @__PURE__ */ he(null);
  function _(x) {
    var j;
    if (!x || !x.trim().startsWith("var(")) return x;
    const M = x.match(/^var\(\s*([^,\s)]+)\s*(?:,\s*([^)]+)\s*)?\)$/);
    if (!M) return x;
    const P = M[1], Z = (j = M[2]) == null ? void 0 : j.trim(), ne = s(g) ? getComputedStyle(s(g)).getPropertyValue(P) : "", N = getComputedStyle(document.documentElement).getPropertyValue(P), D = (ne || N).trim();
    return D || Z || x;
  }
  function A() {
    !n() || o() || (s(S) && clearTimeout(s(S)), i() > 0 ? X(S, setTimeout(() => X(y, !0), i()), !0) : X(y, !0));
  }
  function I() {
    s(S) && clearTimeout(s(S)), X(y, !1);
  }
  function O() {
    A();
  }
  function C() {
    I();
  }
  function L() {
    A();
  }
  function k() {
    I();
  }
  function $() {
    if (!s(h) || !s(b) || !s(g) || o()) return;
    const x = s(g).getBoundingClientRect(), M = s(b).getBoundingClientRect();
    let P = 0, Z = 0;
    const ne = u();
    switch (r()) {
      case "top":
        P = x.top - M.height - ne, Z = x.left + x.width / 2 - M.width / 2;
        break;
      case "bottom":
        P = x.bottom + ne, Z = x.left + x.width / 2 - M.width / 2;
        break;
      case "left":
        P = x.top + x.height / 2 - M.height / 2, Z = x.left - M.width - ne;
        break;
      case "right":
        P = x.top + x.height / 2 - M.height / 2, Z = x.right + ne;
        break;
    }
    s(h).style.top = `${P + window.scrollY}px`, s(h).style.left = `${Z + window.scrollX}px`;
  }
  function V() {
    var x;
    (x = s(E)) == null || x.disconnect(), X(E, null), s(h) && s(h).parentNode && s(h).parentNode.removeChild(s(h)), X(h, null), X(b, null), X(p, null), s(S) && clearTimeout(s(S));
  }
  In(V), Oe(() => {
    if (!(!s(y) || !n() || o())) {
      if (!s(h)) {
        X(h, document.createElement("div"), !0), s(h).style.position = "absolute", s(h).style.zIndex = "9999", s(h).style.pointerEvents = "none", s(h).style.opacity = "0", s(h).style.transition = `opacity ${a()}ms ease`, s(h).id = f, s(h).setAttribute("role", "tooltip"), document.body.appendChild(s(h)), X(p, s(h).attachShadow({ mode: "open" }), !0);
        const x = document.createElement("style"), M = _(l()), P = _(m());
        x.textContent = `
        .bubble {
          --pad-y: ${c()}px;
          --pad-x: ${d()}px;
          --radius: 4px;
          --bg: ${M};
          --fg: ${P};
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
          E,
          new MutationObserver(() => {
            s(y) && $();
          }),
          !0
        ), s(E).observe(document.body, { childList: !0, subtree: !0 });
      }
      s(b) && (s(b).className = `bubble ${r()}`, s(b).innerHTML = n()), s(h) && (s(h).style.opacity = "1", $());
    }
  }), Oe(() => {
    if (s(y) || !s(h))
      return;
    s(h).style.opacity = "0";
    const x = s(h), M = setTimeout(
      () => {
        x && x.parentNode && x.parentNode.removeChild(x), s(h) === x && V();
      },
      a()
    );
    return () => clearTimeout(M);
  });
  var W = Fb();
  W.__keydown = [Ub, n, A, I];
  var R = ce(W);
  Ae(R, () => e.children ?? pe), Te(W, (x) => X(g, x), () => s(g)), xe(() => {
    pr(W, "aria-describedby", n() && !o() ? f : void 0), pr(W, "aria-haspopup", n() ? "true" : void 0), pr(W, "aria-expanded", n() ? s(y) ? "true" : "false" : void 0);
  }), Jn("mouseenter", W, O), Jn("mouseleave", W, C), Jn("focus", W, L), Jn("blur", W, k), T(t, W), Le();
}
yn(["keydown"]);
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
var ga = {
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
}, En = {
  ARIA_CHECKED_ATTR: "aria-checked",
  ARIA_CHECKED_INDETERMINATE_VALUE: "mixed",
  DATA_INDETERMINATE_ATTR: "data-indeterminate",
  NATIVE_CONTROL_SELECTOR: ".mdc-checkbox__native-control",
  TRANSITION_STATE_CHECKED: "checked",
  TRANSITION_STATE_INDETERMINATE: "indeterminate",
  TRANSITION_STATE_INIT: "init",
  TRANSITION_STATE_UNCHECKED: "unchecked"
}, mu = {
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
var kb = (
  /** @class */
  function(t) {
    et(e, t);
    function e(n) {
      var r = t.call(this, be(be({}, e.defaultAdapter), n)) || this;
      return r.currentCheckState = En.TRANSITION_STATE_INIT, r.currentAnimationClass = "", r.animEndLatchTimer = 0, r.enableAnimationEndHandler = !1, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return ga;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return En;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return mu;
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
      this.currentCheckState = this.determineCheckState(), this.updateAriaChecked(), this.adapter.addClass(ga.UPGRADED);
    }, e.prototype.destroy = function() {
      clearTimeout(this.animEndLatchTimer);
    }, e.prototype.setDisabled = function(n) {
      this.adapter.setNativeControlDisabled(n), n ? this.adapter.addClass(ga.DISABLED) : this.adapter.removeClass(ga.DISABLED);
    }, e.prototype.handleAnimationEnd = function() {
      var n = this;
      this.enableAnimationEndHandler && (clearTimeout(this.animEndLatchTimer), this.animEndLatchTimer = setTimeout(function() {
        n.adapter.removeClass(n.currentAnimationClass), n.enableAnimationEndHandler = !1;
      }, mu.ANIM_END_LATCH_MS));
    }, e.prototype.handleChange = function() {
      this.transitionCheckState();
    }, e.prototype.transitionCheckState = function() {
      if (this.adapter.hasNativeControl()) {
        var n = this.currentCheckState, r = this.determineCheckState();
        if (n !== r) {
          this.updateAriaChecked();
          var i = En.TRANSITION_STATE_UNCHECKED, a = ga.SELECTED;
          r === i ? this.adapter.removeClass(a) : this.adapter.addClass(a), this.currentAnimationClass.length > 0 && (clearTimeout(this.animEndLatchTimer), this.adapter.forceLayout(), this.adapter.removeClass(this.currentAnimationClass)), this.currentAnimationClass = this.getTransitionAnimationClass(n, r), this.currentCheckState = r, this.adapter.isAttachedToDOM() && this.currentAnimationClass.length > 0 && (this.adapter.addClass(this.currentAnimationClass), this.enableAnimationEndHandler = !0);
        }
      }
    }, e.prototype.determineCheckState = function() {
      var n = En.TRANSITION_STATE_INDETERMINATE, r = En.TRANSITION_STATE_CHECKED, i = En.TRANSITION_STATE_UNCHECKED;
      return this.adapter.isIndeterminate() ? n : this.adapter.isChecked() ? r : i;
    }, e.prototype.getTransitionAnimationClass = function(n, r) {
      var i = En.TRANSITION_STATE_INIT, a = En.TRANSITION_STATE_CHECKED, o = En.TRANSITION_STATE_UNCHECKED, u = e.cssClasses, l = u.ANIM_UNCHECKED_CHECKED, c = u.ANIM_UNCHECKED_INDETERMINATE, d = u.ANIM_CHECKED_UNCHECKED, m = u.ANIM_CHECKED_INDETERMINATE, f = u.ANIM_INDETERMINATE_CHECKED, g = u.ANIM_INDETERMINATE_UNCHECKED;
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
      this.adapter.isIndeterminate() ? this.adapter.setNativeControlAttr(En.ARIA_CHECKED_ATTR, En.ARIA_CHECKED_INDETERMINATE_VALUE) : this.adapter.removeNativeControlAttr(En.ARIA_CHECKED_ATTR);
    }, e;
  }(xt)
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
var gn = {
  CLOSED_CLASS: "mdc-linear-progress--closed",
  CLOSED_ANIMATION_OFF_CLASS: "mdc-linear-progress--closed-animation-off",
  INDETERMINATE_CLASS: "mdc-linear-progress--indeterminate",
  REVERSED_CLASS: "mdc-linear-progress--reversed",
  ANIMATION_READY_CLASS: "mdc-linear-progress--animation-ready"
}, Mn = {
  ARIA_HIDDEN: "aria-hidden",
  ARIA_VALUEMAX: "aria-valuemax",
  ARIA_VALUEMIN: "aria-valuemin",
  ARIA_VALUENOW: "aria-valuenow",
  BUFFER_BAR_SELECTOR: ".mdc-linear-progress__buffer-bar",
  FLEX_BASIS: "flex-basis",
  PRIMARY_BAR_SELECTOR: ".mdc-linear-progress__primary-bar"
}, pa = {
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
var Bb = (
  /** @class */
  function(t) {
    et(e, t);
    function e(n) {
      var r = t.call(this, be(be({}, e.defaultAdapter), n)) || this;
      return r.observer = null, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return gn;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Mn;
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
      this.determinate = !this.adapter.hasClass(gn.INDETERMINATE_CLASS), this.adapter.addClass(gn.ANIMATION_READY_CLASS), this.progress = 0, this.buffer = 1, this.observer = this.adapter.attachResizeObserver(function(r) {
        var i, a;
        if (!n.determinate)
          try {
            for (var o = Wt(r), u = o.next(); !u.done; u = o.next()) {
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
        this.adapter.removeClass(gn.INDETERMINATE_CLASS), this.adapter.setAttribute(Mn.ARIA_VALUENOW, this.progress.toString()), this.adapter.setAttribute(Mn.ARIA_VALUEMAX, "1"), this.adapter.setAttribute(Mn.ARIA_VALUEMIN, "0"), this.setPrimaryBarProgress(this.progress), this.setBufferBarProgress(this.buffer);
        return;
      }
      this.observer && this.calculateAndSetDimensions(this.adapter.getWidth()), this.adapter.addClass(gn.INDETERMINATE_CLASS), this.adapter.removeAttribute(Mn.ARIA_VALUENOW), this.adapter.removeAttribute(Mn.ARIA_VALUEMAX), this.adapter.removeAttribute(Mn.ARIA_VALUEMIN), this.setPrimaryBarProgress(1), this.setBufferBarProgress(1);
    }, e.prototype.isDeterminate = function() {
      return this.determinate;
    }, e.prototype.setProgress = function(n) {
      this.progress = n, this.determinate && (this.setPrimaryBarProgress(n), this.adapter.setAttribute(Mn.ARIA_VALUENOW, n.toString()));
    }, e.prototype.getProgress = function() {
      return this.progress;
    }, e.prototype.setBuffer = function(n) {
      this.buffer = n, this.determinate && this.setBufferBarProgress(n);
    }, e.prototype.getBuffer = function() {
      return this.buffer;
    }, e.prototype.open = function() {
      this.adapter.removeClass(gn.CLOSED_CLASS), this.adapter.removeClass(gn.CLOSED_ANIMATION_OFF_CLASS), this.adapter.removeAttribute(Mn.ARIA_HIDDEN);
    }, e.prototype.close = function() {
      this.adapter.addClass(gn.CLOSED_CLASS), this.adapter.setAttribute(Mn.ARIA_HIDDEN, "true");
    }, e.prototype.isClosed = function() {
      return this.adapter.hasClass(gn.CLOSED_CLASS);
    }, e.prototype.handleTransitionEnd = function() {
      this.adapter.hasClass(gn.CLOSED_CLASS) && this.adapter.addClass(gn.CLOSED_ANIMATION_OFF_CLASS);
    }, e.prototype.destroy = function() {
      t.prototype.destroy.call(this), this.observer && this.observer.disconnect();
    }, e.prototype.restartAnimation = function() {
      this.adapter.removeClass(gn.ANIMATION_READY_CLASS), this.adapter.forceLayout(), this.adapter.addClass(gn.ANIMATION_READY_CLASS);
    }, e.prototype.setPrimaryBarProgress = function(n) {
      var r = "scaleX(" + n + ")", i = typeof window < "u" ? Qg(window, "transform") : "transform";
      this.adapter.setPrimaryBarStyle(i, r);
    }, e.prototype.setBufferBarProgress = function(n) {
      var r = n * 100 + "%";
      this.adapter.setBufferBarStyle(Mn.FLEX_BASIS, r);
    }, e.prototype.calculateAndSetDimensions = function(n) {
      var r = n * pa.PRIMARY_HALF, i = n * pa.PRIMARY_FULL, a = n * pa.SECONDARY_QUARTER, o = n * pa.SECONDARY_HALF, u = n * pa.SECONDARY_FULL;
      this.adapter.setStyle("--mdc-linear-progress-primary-half", r + "px"), this.adapter.setStyle("--mdc-linear-progress-primary-half-neg", -r + "px"), this.adapter.setStyle("--mdc-linear-progress-primary-full", i + "px"), this.adapter.setStyle("--mdc-linear-progress-primary-full-neg", -i + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-quarter", a + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-quarter-neg", -a + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-half", o + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-half-neg", -o + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-full", u + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-full-neg", -u + "px"), this.restartAnimation();
    }, e;
  }(xt)
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
var cr = {
  HEADER_CELL_SORTED: "mdc-data-table__header-cell--sorted",
  HEADER_CELL_SORTED_DESCENDING: "mdc-data-table__header-cell--sorted-descending",
  IN_PROGRESS: "mdc-data-table--in-progress",
  ROW_SELECTED: "mdc-data-table__row--selected"
}, gu = {
  ARIA_SELECTED: "aria-selected",
  ARIA_SORT: "aria-sort"
}, Yr = {
  ARIA_SELECTED: gu.ARIA_SELECTED,
  ARIA_SORT: gu.ARIA_SORT
}, bn;
(function(t) {
  t.ASCENDING = "ascending", t.DESCENDING = "descending", t.NONE = "none", t.OTHER = "other";
})(bn || (bn = {}));
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
var Vb = (
  /** @class */
  function(t) {
    et(e, t);
    function e(n) {
      return t.call(this, be(be({}, e.defaultAdapter), n)) || this;
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
      return xc(this, void 0, void 0, function() {
        return rl(this, function(n) {
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
        o !== i && (this.adapter.removeClassNameByHeaderCellIndex(o, cr.HEADER_CELL_SORTED), this.adapter.removeClassNameByHeaderCellIndex(o, cr.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(o, Yr.ARIA_SORT, bn.NONE), this.adapter.setSortStatusLabelByHeaderCellIndex(o, bn.NONE));
      this.adapter.setClassNameByHeaderCellIndex(i, cr.HEADER_CELL_SORTED);
      var u = this.adapter.getAttributeByHeaderCellIndex(i, Yr.ARIA_SORT), l = bn.NONE;
      u === bn.ASCENDING ? (this.adapter.setClassNameByHeaderCellIndex(i, cr.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(i, Yr.ARIA_SORT, bn.DESCENDING), l = bn.DESCENDING) : u === bn.DESCENDING ? (this.adapter.removeClassNameByHeaderCellIndex(i, cr.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(i, Yr.ARIA_SORT, bn.ASCENDING), l = bn.ASCENDING) : (this.adapter.setAttributeByHeaderCellIndex(i, Yr.ARIA_SORT, bn.ASCENDING), l = bn.ASCENDING), this.adapter.setSortStatusLabelByHeaderCellIndex(i, l), this.adapter.notifySortAction({
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
      }), this.adapter.addClass(cr.IN_PROGRESS);
    }, e.prototype.hideProgress = function() {
      this.adapter.removeClass(cr.IN_PROGRESS);
    }, e.prototype.setHeaderRowCheckboxState = function() {
      this.adapter.getSelectedRowCount() === 0 ? (this.adapter.setHeaderRowCheckboxChecked(!1), this.adapter.setHeaderRowCheckboxIndeterminate(!1)) : this.adapter.getSelectedRowCount() === this.adapter.getRowCount() ? (this.adapter.setHeaderRowCheckboxChecked(!0), this.adapter.setHeaderRowCheckboxIndeterminate(!1)) : (this.adapter.setHeaderRowCheckboxIndeterminate(!0), this.adapter.setHeaderRowCheckboxChecked(!1));
    }, e.prototype.selectRowAtIndex = function(n, r) {
      r ? (this.adapter.addClassAtRowIndex(n, cr.ROW_SELECTED), this.adapter.setAttributeAtRowIndex(n, Yr.ARIA_SELECTED, "true")) : (this.adapter.removeClassAtRowIndex(n, cr.ROW_SELECTED), this.adapter.setAttributeAtRowIndex(n, Yr.ARIA_SELECTED, "false"));
    }, e;
  }(xt)
), Gb = /* @__PURE__ */ de('<div class="mdc-data-table__progress-indicator"><div class="mdc-data-table__scrim"></div> <!></div>'), jb = /* @__PURE__ */ de("<div><div><table><!></table></div> <!> <!></div>");
function qb(t, e) {
  we(e, !0);
  const n = () => Bn(W, "$progressClosed", r), [r, i] = rr(), { closest: a } = ia;
  let o = v(e, "use", 19, () => []), u = v(e, "class", 3, ""), l = v(e, "stickyHeader", 3, !1), c = v(e, "sortable", 3, !1), d = v(e, "sort", 15, null), m = v(e, "sortDirection", 15, "ascending"), f = v(e, "sortAscendingAriaLabel", 3, "sorted, ascending"), g = v(e, "sortDescendingAriaLabel", 3, "sorted, descending"), h = v(e, "container$use", 19, () => []), p = v(e, "container$class", 3, ""), b = v(e, "table$use", 19, () => []), y = v(e, "table$class", 3, ""), S = /* @__PURE__ */ je(e, [
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
  ]), E, _ = /* @__PURE__ */ he(void 0), A, I = /* @__PURE__ */ he(void 0), O = /* @__PURE__ */ he(void 0), C = Ie({}), L = /* @__PURE__ */ he(Ie({ height: "auto", top: "initial" })), k = ye("SMUI:addLayoutListener"), $, V = !1, W = Bt(!1), R = Bt(d());
  Oe(() => {
    Fn(R, d());
  });
  let x = Bt(m());
  Oe(() => {
    Fn(x, m());
  }), ue("SMUI:checkbox:context", "data-table"), ue("SMUI:linear-progress:context", "data-table"), ue("SMUI:linear-progress:closed", W), ue("SMUI:data-table:sortable", c()), ue("SMUI:data-table:sort", R), ue("SMUI:data-table:sortDirection", x), ue("SMUI:data-table:sortAscendingAriaLabel", f()), ue("SMUI:data-table:sortDescendingAriaLabel", g()), k && ($ = k(_e));
  let M;
  Oe(() => {
    e.progress && s(_) && M !== n() && (M = n(), n() ? s(_).hideProgress() : s(_).showProgress());
  }), ue("SMUI:checkbox:mount", () => {
    s(_) && V && s(_).layout();
  }), ue("SMUI:data-table:header:mount", (U) => {
    X(I, U, !0);
  }), ue("SMUI:data-table:header:unmount", () => {
    X(I, void 0);
  }), ue("SMUI:data-table:body:mount", (U) => {
    X(O, U, !0);
  }), ue("SMUI:data-table:body:unmount", () => {
    X(O, void 0);
  }), at(() => (X(
    _,
    new Vb({
      addClass: Z,
      removeClass: ne,
      getHeaderCellElements: () => {
        var U;
        return ((U = s(I)) == null ? void 0 : U.cells.map((J) => J.element)) ?? [];
      },
      getHeaderCellCount: () => {
        var U;
        return ((U = s(I)) == null ? void 0 : U.cells.length) ?? 0;
      },
      getAttributeByHeaderCellIndex: (U, J) => {
        var ve;
        return ((ve = s(I)) == null ? void 0 : ve.orderedCells[U].getAttr(J)) ?? null;
      },
      setAttributeByHeaderCellIndex: (U, J, ve) => {
        var De;
        (De = s(I)) == null || De.orderedCells[U].addAttr(J, ve);
      },
      setClassNameByHeaderCellIndex: (U, J) => {
        var ve;
        (ve = s(I)) == null || ve.orderedCells[U].addClass(J);
      },
      removeClassNameByHeaderCellIndex: (U, J) => {
        var ve;
        (ve = s(I)) == null || ve.orderedCells[U].removeClass(J);
      },
      notifySortAction: (U) => {
        d(U.columnId), m(U.sortValue), Ke(G(), "SMUIDataTableSorted", U);
      },
      getTableContainerHeight: () => A.getBoundingClientRect().height,
      getTableHeaderHeight: () => {
        const U = G().querySelector(".mdc-data-table__header-row");
        if (!U)
          throw new Error("MDCDataTable: Table header element not found.");
        return U.getBoundingClientRect().height;
      },
      setProgressIndicatorStyles: (U) => {
        X(L, U, !0);
      },
      addClassAtRowIndex: (U, J) => {
        var ve;
        (ve = s(O)) == null || ve.orderedRows[U].addClass(J);
      },
      getRowCount: () => {
        var U;
        return ((U = s(O)) == null ? void 0 : U.rows.length) ?? 0;
      },
      getRowElements: () => {
        var U;
        return ((U = s(O)) == null ? void 0 : U.rows.map((J) => J.element)) ?? [];
      },
      getRowIdAtIndex: (U) => {
        var J;
        return ((J = s(O)) == null ? void 0 : J.orderedRows[U].rowId) ?? null;
      },
      getRowIndexByChildElement: (U) => {
        var J;
        return ((J = s(O)) == null ? void 0 : J.orderedRows.map((ve) => ve.element).indexOf(a(U, ".mdc-data-table__row"))) ?? -1;
      },
      getSelectedRowCount: () => {
        var U;
        return ((U = s(O)) == null ? void 0 : U.rows.filter((J) => J.selected).length) ?? 0;
      },
      isCheckboxAtRowIndexChecked: (U) => {
        var ve;
        const J = (ve = s(O)) == null ? void 0 : ve.orderedRows[U].checkbox;
        return J ? J.checked : !1;
      },
      isHeaderRowCheckboxChecked: () => {
        var J;
        const U = (J = s(I)) == null ? void 0 : J.checkbox;
        return U ? U.checked : !1;
      },
      isRowsSelectable: () => !!G().querySelector(".mdc-data-table__row-checkbox") || !!G().querySelector(".mdc-data-table__header-row-checkbox"),
      notifyRowSelectionChanged: (U) => {
        var ve;
        const J = (ve = s(O)) == null ? void 0 : ve.orderedRows[U.rowIndex];
        J && Ke(G(), "SMUIDataTableSelectionChanged", {
          row: J.element,
          rowId: J.rowId,
          rowIndex: U.rowIndex,
          selected: U.selected
        });
      },
      notifySelectedAll: () => {
        N(!1), Ke(G(), "SMUIDataTableSelectedAll");
      },
      notifyUnselectedAll: () => {
        N(!1), Ke(G(), "SMUIDataTableUnselectedAll");
      },
      notifyRowClick: (U) => Ke(G(), "SMUIDataTableClickRow", U),
      registerHeaderRowCheckbox: () => {
      },
      registerRowCheckboxes: () => {
      },
      removeClassAtRowIndex: (U, J) => {
        var ve;
        (ve = s(O)) == null || ve.orderedRows[U].removeClass(J);
      },
      setAttributeAtRowIndex: (U, J, ve) => {
        var De;
        (De = s(O)) == null || De.orderedRows[U].addAttr(J, ve);
      },
      setHeaderRowCheckboxChecked: (U) => {
        var ve;
        const J = (ve = s(I)) == null ? void 0 : ve.checkbox;
        J && (J.checked = U);
      },
      setHeaderRowCheckboxIndeterminate: N,
      setRowCheckboxCheckedAtIndex: (U, J) => {
        var De;
        const ve = (De = s(O)) == null ? void 0 : De.orderedRows[U].checkbox;
        ve && (ve.checked = J);
      },
      setSortStatusLabelByHeaderCellIndex: (U, J) => {
      }
    }),
    !0
  ), s(_).init(), s(_).layout(), V = !0, () => {
    var U;
    (U = s(_)) == null || U.destroy();
  })), In(() => {
    $ && $();
  });
  function P(U) {
    s(_) && s(_).handleRowCheckboxChange(U);
  }
  function Z(U) {
    C[U] || (C[U] = !0);
  }
  function ne(U) {
    (!(U in C) || C[U]) && (C[U] = !1);
  }
  function N(U) {
    var ve;
    const J = (ve = s(I)) == null ? void 0 : ve.checkbox;
    J && (J.indeterminate = U);
  }
  function D(U) {
    if (!s(_) || !U.detail.target)
      return;
    const J = a(U.detail.target, ".mdc-data-table__header-cell--with-sort");
    J && Ee(J);
  }
  function j(U) {
    if (!s(_) || !U.detail.target)
      return;
    const J = a(U.detail.target, ".mdc-data-table__row");
    J && s(_) && s(_).handleRowClick({ rowId: U.detail.rowId, row: J });
  }
  function Ee(U) {
    var Fe, ot;
    const J = ((Fe = s(I)) == null ? void 0 : Fe.orderedCells) ?? [], ve = J.map((ft) => ft.element).indexOf(U);
    if (ve === -1)
      return;
    const De = J[ve].columnId ?? null;
    (ot = s(_)) == null || ot.handleSortAction({ columnId: De, columnIndex: ve, headerCell: U });
  }
  function _e() {
    var U;
    return (U = s(_)) == null ? void 0 : U.layout();
  }
  function G() {
    return E;
  }
  var q = { layout: _e, getElement: G }, w = jb(), z = (U) => {
    var J;
    s(_) && s(_).handleHeaderRowCheckboxChange(), (J = e.onSMUIDataTableHeaderCheckboxChange) == null || J.call(e, U);
  }, K = (U) => {
    var J;
    D(U), (J = e.onSMUIDataTableHeaderClick) == null || J.call(e, U);
  }, te = (U) => {
    var J;
    j(U), (J = e.onSMUIDataTableRowClick) == null || J.call(e, U);
  }, se = (U) => {
    var J;
    P(U), (J = e.onSMUIDataTableBodyCheckboxChange) == null || J.call(e, U);
  };
  ke(
    w,
    (U, J) => ({
      class: U,
      ...J,
      onSMUIDataTableHeaderCheckboxChange: z,
      onSMUIDataTableHeaderClick: K,
      onSMUIDataTableRowClick: te,
      onSMUIDataTableBodyCheckboxChange: se
    }),
    [
      () => He({
        "mdc-data-table": !0,
        "mdc-data-table--sticky-header": l(),
        ...C,
        [u()]: !0
      }),
      () => Vn(S, ["container$", "table$"])
    ]
  );
  var ee = ce(w);
  ke(ee, (U, J) => ({ class: U, ...J }), [
    () => He({
      "mdc-data-table__table-container": !0,
      [p()]: !0
    }),
    () => it(S, "container$")
  ]);
  var re = ce(ee);
  ke(re, (U, J) => ({ class: U, ...J }), [
    () => He({ "mdc-data-table__table": !0, [y()]: !0 }),
    () => it(S, "table$")
  ]);
  var Re = ce(re);
  Ae(Re, () => e.children ?? pe), Ue(re, (U, J) => Q == null ? void 0 : Q(U, J), b), Te(ee, (U) => A = U, () => A), Ue(ee, (U, J) => Q == null ? void 0 : Q(U, J), h);
  var Ce = ge(ee, 2);
  {
    var Ne = (U) => {
      var J = Gb(), ve = ge(ce(J), 2);
      Ae(ve, () => e.progress ?? pe), xe((De) => ct(J, De), [
        () => Object.entries(s(L)).map(([De, Fe]) => `${De}: ${Fe};`).join(" ")
      ]), T(U, J);
    };
    oe(Ce, (U) => {
      e.progress && U(Ne);
    });
  }
  var Pe = ge(Ce, 2);
  Ae(Pe, () => e.paginate ?? pe), Te(w, (U) => E = U, () => E), Ue(w, (U, J) => Q == null ? void 0 : Q(U, J), o), T(t, w);
  var Me = Le(q);
  return i(), Me;
}
var Wb = /* @__PURE__ */ de("<thead><!></thead>");
function zb(t, e) {
  we(e, !0);
  let n = v(e, "use", 19, () => []), r = /* @__PURE__ */ je(e, ["$$slots", "$$events", "$$legacy", "use", "children"]), i, a = /* @__PURE__ */ he(void 0), o = [];
  const u = /* @__PURE__ */ new WeakMap();
  ue("SMUI:data-table:row:header", !0);
  const l = ye("SMUI:checkbox:mount");
  ue("SMUI:checkbox:mount", (y) => {
    X(a, y, !0), l && l(y);
  });
  const c = ye("SMUI:checkbox:unmount");
  ue("SMUI:checkbox:unmount", (y) => {
    X(a, void 0), c && c(y);
  }), ue("SMUI:data-table:cell:mount", (y) => {
    o.push(y), u.set(y.element, y);
  }), ue("SMUI:data-table:cell:unmount", (y) => {
    const S = o.findIndex((E) => E === y);
    S !== -1 && o.splice(S, 1), u.delete(y.element);
  });
  const d = ye("SMUI:data-table:header:mount"), m = ye("SMUI:data-table:header:unmount");
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
  var h = { getElement: g }, p = Wb();
  ke(p, () => ({ ...r }));
  var b = ce(p);
  return Ae(b, () => e.children ?? pe), Te(p, (y) => i = y, () => i), Ue(p, (y, S) => Q == null ? void 0 : Q(y, S), n), T(t, p), Le(h);
}
var Kb = /* @__PURE__ */ de("<tbody><!></tbody>");
function Xb(t, e) {
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
  const l = ye("SMUI:data-table:body:mount"), c = ye("SMUI:data-table:body:unmount");
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
  var f = { getElement: m }, g = Kb();
  ke(g, (p) => ({ class: p, ...i }), [
    () => He({ "mdc-data-table__content": !0, [r()]: !0 })
  ]);
  var h = ce(g);
  return Ae(h, () => e.children ?? pe), Te(g, (p) => a = p, () => a), Ue(g, (p, b) => Q == null ? void 0 : Q(p, b), n), T(t, g), Le(f);
}
let Zb = 0;
var Yb = /* @__PURE__ */ de("<tr><!></tr>");
function to(t, e) {
  we(e, !0);
  let n = v(e, "use", 19, () => []), r = v(e, "class", 3, ""), i = v(e, "rowId", 19, () => "SMUI-data-table-row-" + Zb++), a = /* @__PURE__ */ je(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "rowId",
    "children"
  ]), o, u = /* @__PURE__ */ he(void 0), l = Ie({}), c = Ie({}), d = ye("SMUI:data-table:row:header");
  const m = ye("SMUI:checkbox:mount");
  ue("SMUI:checkbox:mount", (k) => {
    X(u, k, !0), m && m(k);
  });
  const f = ye("SMUI:checkbox:unmount");
  ue("SMUI:checkbox:unmount", (k) => {
    X(u, void 0), f && f(k);
  });
  const g = ye("SMUI:data-table:row:mount"), h = ye("SMUI:data-table:row:unmount");
  at(() => {
    const k = d ? {
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
      addAttr: S
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
      addAttr: S
    };
    return g && g(k), () => {
      h && h(k);
    };
  });
  function p(k) {
    l[k] || (l[k] = !0);
  }
  function b(k) {
    (!(k in l) || l[k]) && (l[k] = !1);
  }
  function y(k) {
    return k in c ? c[k] ?? null : A().getAttribute(k);
  }
  function S(k, $) {
    c[k] !== $ && (c[k] = $);
  }
  function E(k) {
    Ke(A(), "SMUIDataTableHeaderClick", k);
  }
  function _(k) {
    Ke(A(), "SMUIDataTableRowClick", { rowId: i(), target: k.target });
  }
  function A() {
    return o;
  }
  var I = { getElement: A }, O = Yb(), C = (k) => {
    var $;
    d ? E(k) : _(k), ($ = e.onclick) == null || $.call(e, k);
  };
  ke(
    O,
    (k) => ({
      class: k,
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
  var L = ce(O);
  return Ae(L, () => e.children ?? pe), Te(O, (k) => o = k, () => o), Ue(O, (k, $) => Q == null ? void 0 : Q(k, $), n), T(t, O), Le(I);
}
let Qb = 0;
var Jb = /* @__PURE__ */ de('<div class="mdc-data-table__header-cell-wrapper"><!> <div class="mdc-data-table__sort-status-label" aria-hidden="true"> </div></div>'), $b = /* @__PURE__ */ de("<th><!></th>"), e_ = /* @__PURE__ */ de("<td><!></td>");
function ba(t, e) {
  we(e, !0);
  const n = () => Bn(y, "$sort", i), r = () => Bn(S, "$sortDirection", i), [i, a] = rr();
  let o = ye("SMUI:data-table:row:header"), u = v(e, "use", 19, () => []), l = v(e, "class", 3, ""), c = v(e, "numeric", 3, !1), d = v(e, "checkbox", 3, !1), m = v(e, "columnId", 19, () => o ? "SMUI-data-table-column-" + Qb++ : "SMUI-data-table-unused"), f = v(e, "sortable", 19, () => ye("SMUI:data-table:sortable")), g = /* @__PURE__ */ je(e, [
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
  ]), h, p = Ie({}), b = Ie({}), y = ye("SMUI:data-table:sort"), S = ye("SMUI:data-table:sortDirection"), E = ye("SMUI:data-table:sortAscendingAriaLabel"), _ = ye("SMUI:data-table:sortDescendingAriaLabel");
  f() && (ue("SMUI:label:context", "data-table:sortable-header-cell"), ue("SMUI:icon-button:context", "data-table:sortable-header-cell"), ue("SMUI:icon-button:aria-describedby", m() + "-status-label"));
  const A = ye("SMUI:data-table:cell:mount"), I = ye("SMUI:data-table:cell:unmount");
  at(() => {
    const N = o ? {
      _smui_data_table_header_cell_accessor: !0,
      get element() {
        return W();
      },
      get columnId() {
        return m();
      },
      addClass: O,
      removeClass: C,
      getAttr: L,
      addAttr: k
    } : {
      _smui_data_table_header_cell_accessor: !1,
      get element() {
        return W();
      },
      get columnId() {
      },
      addClass: O,
      removeClass: C,
      getAttr: L,
      addAttr: k
    };
    return A && A(N), () => {
      I && I(N);
    };
  });
  function O(N) {
    p[N] || (p[N] = !0);
  }
  function C(N) {
    (!(N in p) || p[N]) && (p[N] = !1);
  }
  function L(N) {
    return N in b ? b[N] ?? null : W().getAttribute(N);
  }
  function k(N, D) {
    b[N] !== D && (b[N] = D);
  }
  function $(N) {
    Ke(W(), "SMUIDataTableHeaderCheckboxChange", N);
  }
  function V(N) {
    Ke(W(), "SMUIDataTableBodyCheckboxChange", N);
  }
  function W() {
    return h;
  }
  var R = { getElement: W }, x = ie(), M = Y(x);
  {
    var P = (N) => {
      var D = $b(), j = (q) => {
        var w;
        d() && $(q), (w = e.onchange) == null || w.call(e, q);
      };
      ke(
        D,
        (q) => ({
          class: q,
          role: "columnheader",
          scope: "col",
          "data-column-id": m(),
          "aria-sort": f() ? n() === m() ? r() : "none" : void 0,
          ...b,
          ...g,
          onchange: j
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
      var Ee = ce(D);
      {
        var _e = (q) => {
          var w = Jb(), z = ce(w);
          Ae(z, () => e.children ?? pe);
          var K = ge(z, 2), te = ce(K);
          xe(() => {
            pr(K, "id", `${m() ?? ""}-status-label`), ze(te, n() === m() ? r() === "ascending" ? E : _ : "");
          }), T(q, w);
        }, G = (q) => {
          var w = ie(), z = Y(w);
          Ae(z, () => e.children ?? pe), T(q, w);
        };
        oe(Ee, (q) => {
          f() ? q(_e) : q(G, !1);
        });
      }
      Te(D, (q) => h = q, () => h), Ue(D, (q, w) => Q == null ? void 0 : Q(q, w), u), T(N, D);
    }, Z = (N) => {
      var D = e_(), j = (_e) => {
        var G;
        d() && V(_e), (G = e.onchange) == null || G.call(e, _e);
      };
      ke(
        D,
        (_e) => ({
          class: _e,
          ...b,
          ...g,
          onchange: j
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
      var Ee = ce(D);
      Ae(Ee, () => e.children ?? pe), Te(D, (_e) => h = _e, () => h), Ue(D, (_e, G) => Q == null ? void 0 : Q(_e, G), u), T(N, D);
    };
    oe(M, (N) => {
      o ? N(P) : N(Z, !1);
    });
  }
  T(t, x);
  var ne = Le(R);
  return a(), ne;
}
var t_ = /* @__PURE__ */ de('<div><div class="mdc-linear-progress__buffer"><div class="mdc-linear-progress__buffer-bar"></div> <div class="mdc-linear-progress__buffer-dots"></div></div> <div class="mdc-linear-progress__bar mdc-linear-progress__primary-bar"><span class="mdc-linear-progress__bar-inner"></span></div> <div class="mdc-linear-progress__bar mdc-linear-progress__secondary-bar"><span class="mdc-linear-progress__bar-inner"></span></div></div>');
function n_(t, e) {
  we(e, !0);
  const [n, r] = rr();
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
  ]), f, g = /* @__PURE__ */ he(void 0), h = Ie({}), p = Ie({}), b = Ie({}), y = Ie({}), S = Ie({}), E = ye("SMUI:linear-progress:context"), _ = ye("SMUI:linear-progress:closed");
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
    new Bb({
      addClass: I,
      forceLayout: () => {
        W().getBoundingClientRect();
      },
      setBufferBarStyle: $,
      setPrimaryBarStyle: V,
      hasClass: A,
      removeAttribute: L,
      removeClass: O,
      setAttribute: C,
      setStyle: k,
      attachResizeObserver: (D) => {
        const j = window.ResizeObserver;
        if (j) {
          const Ee = new j(D);
          return Ee.observe(W()), Ee;
        }
        return null;
      },
      getWidth: () => W().offsetWidth
    }),
    !0
  ), s(g).init(), () => {
    var D;
    (D = s(g)) == null || D.destroy();
  }));
  function A(D) {
    return D in h ? h[D] : W().classList.contains(D);
  }
  function I(D) {
    h[D] || (h[D] = !0);
  }
  function O(D) {
    (!(D in h) || h[D]) && (h[D] = !1);
  }
  function C(D, j) {
    p[D] !== j && (p[D] = j);
  }
  function L(D) {
    (!(D in p) || p[D] != null) && (p[D] = void 0);
  }
  function k(D, j) {
    b[D] != j && (j === "" || j == null ? delete b[D] : b[D] = j);
  }
  function $(D, j) {
    y[D] != j && (j === "" || j == null ? delete y[D] : y[D] = j);
  }
  function V(D, j) {
    S[D] != j && (j === "" || j == null ? delete S[D] : S[D] = j);
  }
  function W() {
    return f;
  }
  var R = { getElement: W }, x = t_(), M = (D) => {
    var j;
    s(g) && s(g).handleTransitionEnd(), (j = e.ontransitionend) == null || j.call(e, D);
  };
  ke(
    x,
    (D, j) => ({
      class: D,
      style: j,
      role: "progressbar",
      "aria-valuemin": 0,
      "aria-valuemax": 1,
      "aria-valuenow": u() ? void 0 : c(),
      ...p,
      ...m,
      ontransitionend: M
    }),
    [
      () => He({
        "mdc-linear-progress": !0,
        "mdc-linear-progress--indeterminate": u(),
        "mdc-linear-progress--closed": l(),
        "mdc-data-table__linear-progress": E === "data-table",
        ...h,
        [a()]: !0
      }),
      () => Object.entries(b).map(([D, j]) => `${D}: ${j};`).concat([o()]).join(" ")
    ]
  );
  var P = ce(x), Z = ce(P), ne = ge(P, 2);
  Te(x, (D) => f = D, () => f), Ue(x, (D, j) => Q == null ? void 0 : Q(D, j), i), xe(
    (D, j) => {
      ct(Z, D), ct(ne, j);
    },
    [
      () => Object.entries(y).map(([D, j]) => `${D}: ${j};`).join(" "),
      () => Object.entries(S).map(([D, j]) => `${D}: ${j};`).join(" ")
    ]
  ), T(t, x);
  var N = Le(R);
  return r(), N;
}
yn(["click"]);
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
var r_ = {
  ROOT: "mdc-form-field"
}, i_ = {
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
var a_ = (
  /** @class */
  function(t) {
    et(e, t);
    function e(n) {
      var r = t.call(this, be(be({}, e.defaultAdapter), n)) || this;
      return r.click = function() {
        r.handleClick();
      }, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return r_;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return i_;
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
  }(xt)
);
let o_ = 0;
var s_ = /* @__PURE__ */ de("<div><!> <label><!></label></div>");
function l_(t, e) {
  we(e, !0);
  let n = v(e, "use", 19, () => []), r = v(e, "class", 3, ""), i = v(e, "align", 3, "start"), a = v(e, "noWrap", 3, !1), o = v(e, "inputId", 19, () => "SMUI-form-field-" + o_++), u = v(e, "label$use", 19, () => []), l = /* @__PURE__ */ je(e, [
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
  ]), c, d = /* @__PURE__ */ he(void 0), m = new bi(), f, g = /* @__PURE__ */ he(void 0);
  ue("SMUI:generic:input:props", { id: o() }), ue("SMUI:generic:input:mount", (_) => {
    X(g, _, !0);
  }), ue("SMUI:generic:input:unmount", () => {
    X(g, void 0);
  }), at(() => (X(
    d,
    new a_({
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
  var p = { getElement: h }, b = s_();
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
  Ae(y, () => e.children ?? pe);
  var S = ge(y, 2);
  ke(S, (_) => ({ for: o(), ..._ }), [() => it(l, "label$")]);
  var E = ce(S);
  return Ae(E, () => e.label ?? pe), Te(S, (_) => f = _, () => f), Ue(S, (_, A) => Q == null ? void 0 : Q(_, A), u), Te(b, (_) => c = _, () => c), Ue(b, (_, A) => Q == null ? void 0 : Q(_, A), n), T(t, b), Le(p);
}
var u_ = (t, e) => {
  var n;
  t.stopPropagation(), (n = e.onClick) == null || n.call(e, t);
}, c_ = /* @__PURE__ */ de('<button class="icon-button svelte-jv2py4"><!></button>');
function d_(t, e) {
  we(e, !0);
  let n = v(e, "tooltipSide", 3, "top"), r = v(e, "showDelay", 3, 1e3), i = v(e, "fillColor", 3, "var(--mdc-theme-primary)"), a = v(e, "size", 3, "20px"), o = /* @__PURE__ */ fe(() => `fill: ${i()}; margin: 0; width: ${a()}; height: ${a()};`);
  Da(t, {
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
      var c = c_();
      c.__click = [u_, e];
      var d = ce(c);
      {
        var m = (g) => {
          ld(g, {
            get svgStyles() {
              return s(o);
            }
          });
        }, f = (g) => {
          var h = ie(), p = Y(h);
          {
            var b = (S) => {
              cb(S, {
                get svgStyles() {
                  return s(o);
                }
              });
            }, y = (S) => {
              var E = ie(), _ = Y(E);
              {
                var A = (O) => {
                  sd(O, {
                    get svgStyles() {
                      return s(o);
                    }
                  });
                }, I = (O) => {
                  var C = ie(), L = Y(C);
                  {
                    var k = (V) => {
                      lb(V, {
                        get svgStyles() {
                          return s(o);
                        }
                      });
                    }, $ = (V) => {
                      var W = ie(), R = Y(W);
                      {
                        var x = (P) => {
                          gb(P, {
                            get svgStyles() {
                              return s(o);
                            }
                          });
                        }, M = (P) => {
                          var Z = ie(), ne = Y(Z);
                          {
                            var N = (j) => {
                              bb(j, {
                                get svgStyles() {
                                  return s(o);
                                }
                              });
                            }, D = (j) => {
                              var Ee = ie(), _e = Y(Ee);
                              {
                                var G = (w) => {
                                  yb(w, {
                                    get svgStyles() {
                                      return s(o);
                                    }
                                  });
                                }, q = (w) => {
                                  var z = ie(), K = Y(z);
                                  {
                                    var te = (ee) => {
                                      Eb(ee, {
                                        get svgStyles() {
                                          return s(o);
                                        }
                                      });
                                    }, se = (ee) => {
                                      var re = ie(), Re = Y(re);
                                      {
                                        var Ce = (Pe) => {
                                          wb(Pe, {
                                            get svgStyles() {
                                              return s(o);
                                            }
                                          });
                                        }, Ne = (Pe) => {
                                          var Me = ie(), U = Y(Me);
                                          {
                                            var J = (De) => {
                                              fb(De, {
                                                get svgStyles() {
                                                  return s(o);
                                                }
                                              });
                                            }, ve = (De) => {
                                              var Fe = ie(), ot = Y(Fe);
                                              {
                                                var ft = (F) => {
                                                  Ob(F, {
                                                    get svgStyles() {
                                                      return s(o);
                                                    }
                                                  });
                                                }, me = (F) => {
                                                  var B = vt();
                                                  xe(() => ze(B, `Unsupported supported type: ${e.type ?? ""}`)), T(F, B);
                                                };
                                                oe(
                                                  ot,
                                                  (F) => {
                                                    e.type === "input-circle" ? F(ft) : F(me, !1);
                                                  },
                                                  !0
                                                );
                                              }
                                              T(De, Fe);
                                            };
                                            oe(
                                              U,
                                              (De) => {
                                                e.type === "info" ? De(J) : De(ve, !1);
                                              },
                                              !0
                                            );
                                          }
                                          T(Pe, Me);
                                        };
                                        oe(
                                          Re,
                                          (Pe) => {
                                            e.type === "open_in_new" ? Pe(Ce) : Pe(Ne, !1);
                                          },
                                          !0
                                        );
                                      }
                                      T(ee, re);
                                    };
                                    oe(
                                      K,
                                      (ee) => {
                                        e.type === "star" ? ee(te) : ee(se, !1);
                                      },
                                      !0
                                    );
                                  }
                                  T(w, z);
                                };
                                oe(
                                  _e,
                                  (w) => {
                                    e.type === "close" ? w(G) : w(q, !1);
                                  },
                                  !0
                                );
                              }
                              T(j, Ee);
                            };
                            oe(
                              ne,
                              (j) => {
                                e.type === "link-off" ? j(N) : j(D, !1);
                              },
                              !0
                            );
                          }
                          T(P, Z);
                        };
                        oe(
                          R,
                          (P) => {
                            e.type === "wand-stars" ? P(x) : P(M, !1);
                          },
                          !0
                        );
                      }
                      T(V, W);
                    };
                    oe(
                      L,
                      (V) => {
                        e.type === "visibility" ? V(k) : V($, !1);
                      },
                      !0
                    );
                  }
                  T(O, C);
                };
                oe(
                  _,
                  (O) => {
                    e.type === "edit" ? O(A) : O(I, !1);
                  },
                  !0
                );
              }
              T(S, E);
            };
            oe(
              p,
              (S) => {
                e.type === "duplicate" ? S(b) : S(y, !1);
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
      xe(() => pr(c, "aria-label", e.tooltip)), T(u, c);
    },
    $$slots: { default: !0 }
  }), Le();
}
yn(["click"]);
function Us(t, e, n) {
  return e in t ? Object.defineProperty(t, e, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = n, t;
}
var f_ = Object.freeze({
  // This flag exists as a workaround for issue 454 (basically a browser bug) - seems like these rect values take time to update when in grid layout. Setting it to true can cause strange behaviour in the REPL for non-grid zones, see issue 470
  USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT: "USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT"
});
Us({}, f_.USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT, !1);
var no, pu = {
  DND_ZONE_ACTIVE: "dnd-zone-active",
  DND_ZONE_DRAG_DISABLED: "dnd-zone-drag-disabled"
};
no = {}, Us(no, pu.DND_ZONE_ACTIVE, "Tab to one the items and press space-bar or enter to start dragging it"), Us(no, pu.DND_ZONE_DRAG_DISABLED, "This is a disabled drag and drop list");
function h_(t) {
  return t * t * t;
}
function ud(t) {
  const e = t - 1;
  return e * e * e + 1;
}
function v_(t, { from: e, to: n }, r = {}) {
  var { delay: i = 0, duration: a = (I) => Math.sqrt(I) * 120, easing: o = ud } = r, u = getComputedStyle(t), l = u.transform === "none" ? "" : u.transform, [c, d] = u.transformOrigin.split(" ").map(parseFloat);
  c /= t.clientWidth, d /= t.clientHeight;
  var m = m_(t), f = t.clientWidth / n.width / m, g = t.clientHeight / n.height / m, h = e.left + e.width * c, p = e.top + e.height * d, b = n.left + n.width * c, y = n.top + n.height * d, S = (h - b) * f, E = (p - y) * g, _ = e.width / n.width, A = e.height / n.height;
  return {
    delay: i,
    duration: typeof a == "function" ? a(Math.sqrt(S * S + E * E)) : a,
    easing: o,
    css: (I, O) => {
      var C = O * S, L = O * E, k = I + O * _, $ = I + O * A;
      return `transform: ${l} translate(${C}px, ${L}px) scale(${k}, ${$});`;
    }
  };
}
function m_(t) {
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
function g_(t) {
  const e = t - 1;
  return e * e * e + 1;
}
function bu(t) {
  const e = typeof t == "string" && t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
  return e ? [parseFloat(e[1]), e[2] || "px"] : [
    /** @type {number} */
    t,
    "px"
  ];
}
function Ao(t, { delay: e = 0, duration: n = 400, easing: r = g_, x: i = 0, y: a = 0, opacity: o = 0 } = {}) {
  const u = getComputedStyle(t), l = +u.opacity, c = u.transform === "none" ? "" : u.transform, d = l * (1 - o), [m, f] = bu(i), [g, h] = bu(a);
  return {
    delay: e,
    duration: n,
    easing: r,
    css: (p, b) => `
			transform: ${c} translate(${(1 - p) * m}${f}, ${(1 - p) * g}${h});
			opacity: ${l - d * b}`
  };
}
yn([
  "click",
  "keydown",
  "pointerdown",
  "pointerup",
  "pointermove"
]);
function p_(t, e) {
  var n;
  (n = e()) == null || n();
}
var b_ = /* @__PURE__ */ de('<div class="detail svelte-4xu36c"> </div>'), __ = /* @__PURE__ */ de('<div class="toast-card svelte-4xu36c"><div class="icon svelte-4xu36c"><!></div> <div class="content svelte-4xu36c"><div class="summary svelte-4xu36c"> </div> <!></div> <button class="close svelte-4xu36c"><!></button></div>');
function y_(t, e) {
  we(e, !0);
  let n = v(e, "onClose", 3, () => {
  });
  const r = {
    success: "check_circle",
    error: "error",
    info: "info",
    warn: "warning"
  }, i = {
    success: "var(--oscd-status-success, #4CAF50)",
    error: "var(--oscd-status-error, #F44336)",
    info: "var(--oscd-status-info, #2196F3)",
    warn: "var(--oscd-status-warning, #FF9800)"
  };
  var a = __(), o = ce(a), u = ce(o);
  Ms(u, {
    class: "material-icons",
    children: (p, b) => {
      var y = vt();
      xe(() => ze(y, r[e.type])), T(p, y);
    },
    $$slots: { default: !0 }
  });
  var l = ge(o, 2), c = ce(l), d = ce(c), m = ge(c, 2);
  {
    var f = (p) => {
      var b = b_(), y = ce(b);
      xe(() => ze(y, e.detail)), T(p, b);
    };
    oe(m, (p) => {
      e.detail && p(f);
    });
  }
  var g = ge(l, 2);
  g.__click = [p_, n];
  var h = ce(g);
  Ms(h, {
    class: "material-icons",
    children: (p, b) => {
      var y = vt("close");
      T(p, y);
    },
    $$slots: { default: !0 }
  }), xe(() => {
    ct(a, `--color:${i[e.type] ?? ""}`), ze(d, e.summary);
  }), po(1, a, () => Ao, () => ({ x: 0, y: 30, duration: 150, easing: h_ })), po(2, a, () => Ao, () => ({ x: 50, y: 0, duration: 150, easing: ud })), T(t, a), Le();
}
yn(["click"]);
const I_ = 4e3;
function E_() {
  let t = Ie({ items: [] }), e = 0;
  const n = (i) => {
    t.items = t.items.filter((a) => a.id !== i);
  }, r = (i, a, o, u = I_) => {
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
const Pn = E_();
var S_ = /* @__PURE__ */ de("<div><!></div>"), A_ = /* @__PURE__ */ de('<div class="toast-host svelte-11vwiay"></div>');
function C_(t, e) {
  we(e, !1);
  const n = Pn.toasts;
  vh();
  var r = A_();
  Qn(r, 13, () => n.items, (i) => i.id, (i, a) => {
    var o = S_(), u = ce(o);
    y_(u, {
      get summary() {
        return s(a).summary;
      },
      get detail() {
        return s(a).detail;
      },
      get type() {
        return s(a).type;
      },
      onClose: () => Pn.remove(s(a).id)
    }), fh(o, () => v_, null), T(i, o);
  }), T(t, r), Le();
}
var T_ = (t, e) => {
  t.stopPropagation(), e.onOpen();
}, x_ = (t, e) => {
  t.stopPropagation(), e.onRemove();
}, w_ = /* @__PURE__ */ de('<button type="button" style="all: unset; display: flex; align-items: center; justify-content: center;" class="svelte-1mybgc7"><!></button>'), L_ = /* @__PURE__ */ de('<span class="filter-badge__seperator svelte-1mybgc7">|</span> <span class="filter-badge__value svelte-1mybgc7"> </span> <span class="filter-badge__arrow-down"><!></span>', 1), O_ = /* @__PURE__ */ de('<button type="button"><div class="filter-badge__icon svelte-1mybgc7"><!></div> <span class="filter-badge__label svelte-1mybgc7"> </span> <!></button>');
function R_(t, e) {
  we(e, !0);
  let n = /* @__PURE__ */ fe(() => !!e.value);
  var r = O_();
  r.__click = [T_, e];
  var i = ce(r), a = ce(i);
  {
    var o = (f) => {
      Da(f, {
        content: "Remove Filter",
        hoverDelay: 500,
        side: "top",
        children: (g, h) => {
          var p = w_();
          p.__click = [x_, e];
          var b = ce(p);
          cl(b, {
            svgStyles: "fill: grey; height: filt-content; width: fit-content;"
          }), T(g, p);
        },
        $$slots: { default: !0 }
      });
    }, u = (f) => {
      Da(f, {
        content: "Add Filter",
        hoverDelay: 501,
        side: "top",
        children: (g, h) => {
          Ab(g, {
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
  var l = ge(i, 2), c = ce(l), d = ge(l, 2);
  {
    var m = (f) => {
      var g = L_(), h = ge(Y(g), 2), p = ce(h), b = ge(h, 2), y = ce(b);
      vb(y, { svgStyles: "fill: gray;" }), xe(() => ze(p, e.value)), T(f, g);
    };
    oe(d, (f) => {
      s(n) && f(m);
    });
  }
  xe(() => {
    el(r, 1, `filter-badge ${s(n) ? "filter-badge--active" : "filter-badge--inactive"}`, "svelte-1mybgc7"), ze(c, e.label);
  }), T(t, r), Le();
}
yn(["click"]);
var D_ = /* @__PURE__ */ de('<div><input/> <div class="mdc-checkbox__background"><svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24"><path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"></path></svg> <div class="mdc-checkbox__mixedmark"></div></div> <div class="mdc-checkbox__ripple"></div></div>');
function M_(t, e) {
  we(e, !0);
  let n = () => {
  };
  function r(ee) {
    return ee === n;
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
  ]), y, S = /* @__PURE__ */ he(void 0), E = /* @__PURE__ */ he(void 0), _ = Ie({}), A = Ie({}), I = Ie({}), O = /* @__PURE__ */ he(!1), C = Ie(ye("SMUI:generic:input:props") ?? {}), L = /* @__PURE__ */ he(Ie(r(d()) ? r(m()) ? !1 : !!m() : d().findIndex((ee) => ee === f()) !== -1)), k = ye("SMUI:checkbox:context"), $ = ye("SMUI:data-table:row:header"), V = m(), W = r(d()) ? [] : [...d()], R = s(L);
  Oe(() => {
    let ee = !1;
    if (!r(d()))
      if (R !== s(L)) {
        const re = d().findIndex((Re) => Re === f());
        s(L) && re === -1 ? d().push(f()) : !s(L) && re !== -1 && d().splice(re, 1), ee = !0;
      } else {
        const re = W.findIndex((Ce) => Ce === f()), Re = d().findIndex((Ce) => Ce === f());
        re > -1 && Re === -1 ? (X(L, !1), ee = !0) : Re > -1 && re === -1 && (X(L, !0), ee = !0);
      }
    r(m()) ? R !== s(L) && (ee = !0) : (m() !== (c() ? null : s(L)) || s(L) !== R) && (m() === V && s(L) !== R ? (m(s(L)), r(c()) || c(!1)) : X(L, !!m()), ee = !0), s(E) && (r(c()) ? s(E).indeterminate && (s(E).indeterminate = !1, ee = !0) : !c() && s(E).indeterminate ? (s(E).indeterminate = !1, ee = !0) : c() && !s(E).indeterminate && (s(E).indeterminate = !0, X(L, !1), ee = !0)), V = m(), W = r(d()) ? [] : [...d()], R = s(L), ee && s(S) && s(S).handleChange();
  });
  const x = ye("SMUI:generic:input:mount"), M = ye("SMUI:generic:input:unmount"), P = ye("SMUI:checkbox:mount"), Z = ye("SMUI:checkbox:unmount");
  at(() => {
    if (s(E) == null)
      throw new Error("Checkbox is not defined.");
    s(E).indeterminate = !r(c()) && c(), X(
      S,
      new kb({
        addClass: ne,
        forceLayout: () => G().offsetWidth,
        hasNativeControl: () => !0,
        isAttachedToDOM: () => !!G().parentNode,
        isChecked: () => s(L),
        isIndeterminate: () => r(c()) ? !1 : c(),
        removeClass: N,
        removeNativeControlAttr: Ee,
        setNativeControlAttr: j,
        setNativeControlDisabled: (re) => u(re)
      }),
      !0
    );
    const ee = {
      _smui_checkbox_accessor: !0,
      get element() {
        return G();
      },
      get checked() {
        return s(L);
      },
      set checked(re) {
        s(L) !== re && X(L, re, !0);
      },
      get indeterminate() {
        return r(c()) ? !1 : c();
      },
      set indeterminate(re) {
        c(re);
      },
      activateRipple() {
        u() || X(O, !0);
      },
      deactivateRipple() {
        X(O, !1);
      }
    };
    return x && x(ee), P && P(ee), s(S).init(), () => {
      var re;
      M && M(ee), Z && Z(ee), (re = s(S)) == null || re.destroy();
    };
  });
  function ne(ee) {
    _[ee] || (_[ee] = !0);
  }
  function N(ee) {
    (!(ee in _) || _[ee]) && (_[ee] = !1);
  }
  function D(ee, re) {
    A[ee] != re && (re === "" || re == null ? delete A[ee] : A[ee] = re);
  }
  function j(ee, re) {
    I[ee] !== re && (I[ee] = re);
  }
  function Ee(ee) {
    (!(ee in I) || I[ee] != null) && (I[ee] = void 0);
  }
  function _e() {
    return C && C.id;
  }
  function G() {
    return y;
  }
  var q = { getId: _e, getElement: G }, w = D_(), z = (ee) => {
    var re;
    s(S) && s(S).handleAnimationEnd(), (re = e.onanimationend) == null || re.call(e, ee);
  };
  ke(w, (ee, re, Re) => ({ class: ee, style: re, ...Re, onanimationend: z }), [
    () => He({
      "mdc-checkbox": !0,
      "mdc-checkbox--disabled": u(),
      "mdc-checkbox--touch": l(),
      "mdc-data-table__header-row-checkbox": k === "data-table" && $,
      "mdc-data-table__row-checkbox": k === "data-table" && !$,
      ..._,
      [a()]: !0
    }),
    () => Object.entries(A).map(([ee, re]) => `${ee}: ${re};`).concat([o()]).join(" "),
    () => Vn(b, ["input$"])
  ]);
  var K = ce(w), te = (ee) => {
    var re;
    Ke(G(), "blur", ee), (re = e.input$onblur) == null || re.call(e, ee);
  }, se = (ee) => {
    var re;
    Ke(G(), "focus", ee), (re = e.input$onfocus) == null || re.call(e, ee);
  };
  return ke(
    K,
    (ee, re, Re, Ce) => ({
      class: ee,
      type: "checkbox",
      ...C,
      disabled: u(),
      value: re,
      "data-indeterminate": Re,
      ...I,
      ...Ce,
      onblur: te,
      onfocus: se
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
  ), Te(K, (ee) => X(E, ee), () => s(E)), Ue(K, (ee, re) => Q == null ? void 0 : Q(ee, re), h), mi(() => hh(K, () => s(L), (ee) => X(L, ee))), Te(w, (ee) => y = ee, () => y), Ue(w, (ee, re) => Q == null ? void 0 : Q(ee, re), i), Ue(w, (ee, re) => Yt == null ? void 0 : Yt(ee, re), () => ({
    unbounded: !0,
    addClass: ne,
    removeClass: N,
    addStyle: D,
    active: s(O),
    eventTarget: s(E)
  })), T(t, w), Le(q);
}
var P_ = /* @__PURE__ */ de('<div style="display: flex; flex-direction: column;"></div>');
function H_(t, e) {
  we(e, !0);
  let n = v(e, "data", 19, () => []), r = v(e, "values", 31, () => Ie([]));
  var i = P_();
  Qn(i, 21, n, Ri, (a, o) => {
    l_(a, {
      label: (l) => {
        var c = vt();
        xe(() => ze(c, s(o).label)), T(l, c);
      },
      children: (l, c) => {
        M_(l, {
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
var N_ = (t) => t.stopPropagation(), U_ = /* @__PURE__ */ de('<div class="custom-menu svelte-58jwwf"><div class="menu-arrow svelte-58jwwf"></div> <h4 class="svelte-58jwwf"> </h4> <div class="custom-menu__content"><!></div> <!></div>'), F_ = /* @__PURE__ */ de('<div class="filter-wrapper svelte-58jwwf"><!> <!></div>'), k_ = /* @__PURE__ */ de('<div class="oscd-filters svelte-58jwwf"></div>');
function B_(t, e) {
  we(e, !0);
  let n = v(e, "filters", 15), r = /* @__PURE__ */ he(null), i = [], a = [];
  function o(h) {
    var p;
    if (!(h.value === void 0 || h.value === null || h.value === ""))
      switch (h.type) {
        case "text":
          return String(h.value);
        case "number":
          return String(h.value);
        case "select":
          const b = (p = h.options) == null ? void 0 : p.find((E) => E.value === h.value);
          return b ? b.label : String(h.value);
        case "multiselect":
          if (!Array.isArray(h.value) || h.value.length === 0) return;
          const y = h.value.map((E) => {
            var A;
            const _ = (A = h.options) == null ? void 0 : A.find((I) => I.value === E);
            return _ ? _.label : String(E);
          }), S = 1;
          return y.length <= S ? y.join(", ") : `${y.slice(0, S).join(", ")} +${y.length - S} more`;
        case "date":
          try {
            const E = new Date(h.value);
            return isNaN(E.getTime()) ? String(h.value) : E.toLocaleDateString();
          } catch {
            return String(h.value);
          }
        case "datetime":
          try {
            const E = new Date(h.value);
            return isNaN(E.getTime()) ? String(h.value) : new Intl.DateTimeFormat("default", {
              year: "numeric",
              month: "short",
              day: "numeric",
              hour: "2-digit",
              minute: "2-digit",
              hour12: !1
            }).format(E);
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
  }), In(() => {
    document.removeEventListener("click", f);
  }), Oe(() => {
  });
  var g = k_();
  Qn(g, 23, n, (h) => h.key, (h, p, b) => {
    var y = F_(), S = ce(y);
    {
      let A = /* @__PURE__ */ fe(() => o(s(p)));
      R_(S, {
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
    var E = ge(S, 2);
    {
      var _ = (A) => {
        var I = U_();
        I.__click = [N_];
        var O = ge(ce(I), 2), C = ce(O), L = ge(O, 2), k = ce(L);
        {
          var $ = (R) => {
            Hs(R, {
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
          }, V = (R) => {
            var x = ie(), M = Y(x);
            {
              var P = (ne) => {
                {
                  let N = /* @__PURE__ */ fe(() => {
                    var D;
                    return (D = s(p)) == null ? void 0 : D.options;
                  });
                  _p(ne, {
                    get label() {
                      return s(p).label;
                    },
                    get data() {
                      return s(N);
                    },
                    get value() {
                      return a[s(b)];
                    },
                    set value(D) {
                      a[s(b)] = D;
                    }
                  });
                }
              }, Z = (ne) => {
                var N = ie(), D = Y(N);
                {
                  var j = (_e) => {
                    {
                      let G = /* @__PURE__ */ fe(() => {
                        var q;
                        return (q = s(p)) == null ? void 0 : q.options;
                      });
                      H_(_e, {
                        get data() {
                          return s(G);
                        },
                        get values() {
                          return a[s(b)];
                        },
                        set values(q) {
                          a[s(b)] = q;
                        }
                      });
                    }
                  }, Ee = (_e) => {
                    var G = ie(), q = Y(G);
                    {
                      var w = (K) => {
                        Mb(K, {
                          get value() {
                            return a[s(b)];
                          },
                          set value(te) {
                            a[s(b)] = te;
                          }
                        });
                      }, z = (K) => {
                        var te = ie(), se = Y(te);
                        {
                          var ee = (re) => {
                            Nb(re, {
                              get value() {
                                return a[s(b)];
                              },
                              set value(Re) {
                                a[s(b)] = Re;
                              }
                            });
                          };
                          oe(
                            se,
                            (re) => {
                              s(p).type === "datetime" && re(ee);
                            },
                            !0
                          );
                        }
                        T(K, te);
                      };
                      oe(
                        q,
                        (K) => {
                          s(p).type === "date" ? K(w) : K(z, !1);
                        },
                        !0
                      );
                    }
                    T(_e, G);
                  };
                  oe(
                    D,
                    (_e) => {
                      s(p).type === "multiselect" ? _e(j) : _e(Ee, !1);
                    },
                    !0
                  );
                }
                T(ne, N);
              };
              oe(
                M,
                (ne) => {
                  s(p).type === "select" ? ne(P) : ne(Z, !1);
                },
                !0
              );
            }
            T(R, x);
          };
          oe(k, (R) => {
            s(p).type === "text" || s(p).type === "number" ? R($) : R(V, !1);
          });
        }
        var W = ge(L, 2);
        Ji(W, {
          variant: "unelevated",
          style: "background: var(--secondary); color: white; width: 100%;",
          onclick: () => d(s(b)),
          children: (R, x) => {
            var M = vt("Apply");
            T(R, M);
          },
          $$slots: { default: !0 }
        }), xe(() => ze(C, `Filter by ${s(p).label ?? ""}`)), po(2, I, () => Ao, () => ({ y: 5, duration: 120 })), po(1, I, () => Ao, () => ({ y: -5, duration: 120 })), T(A, I);
      };
      oe(E, (A) => {
        s(r) === s(b) && A(_);
      });
    }
    Te(y, (A, I) => i[I] = A, (A) => i == null ? void 0 : i[A], () => [s(b)]), T(h, y);
  }), T(t, g), Le();
}
yn(["click"]);
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
var cd = {
  ANIMATING: "mdc-tab-scroller--animating",
  SCROLL_AREA_SCROLL: "mdc-tab-scroller__scroll-area--scroll",
  SCROLL_TEST: "mdc-tab-scroller__test"
}, V_ = {
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
var dl = (
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
var G_ = (
  /** @class */
  function(t) {
    et(e, t);
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
  }(dl)
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
var j_ = (
  /** @class */
  function(t) {
    et(e, t);
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
  }(dl)
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
var q_ = (
  /** @class */
  function(t) {
    et(e, t);
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
  }(dl)
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
var W_ = (
  /** @class */
  function(t) {
    et(e, t);
    function e(n) {
      var r = t.call(this, be(be({}, e.defaultAdapter), n)) || this;
      return r.isAnimating = !1, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return cd;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return V_;
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
      var i = r[1], a = Xi(i.split(","), 6);
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
        return this.adapter.setScrollAreaScrollLeft(n), new j_(this.adapter);
      var i = this.adapter.computeScrollAreaClientRect(), a = this.adapter.computeScrollContentClientRect(), o = Math.round(a.right - i.right);
      return this.adapter.setScrollAreaScrollLeft(n), o === r ? new q_(this.adapter) : new G_(this.adapter);
    }, e.prototype.isRTL = function() {
      return this.adapter.getScrollContentStyleValue("direction") === "rtl";
    }, e;
  }(xt)
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
var us;
function z_(t, e) {
  if (e === void 0 && (e = !0), e && typeof us < "u")
    return us;
  var n = t.createElement("div");
  n.classList.add(cd.SCROLL_TEST), t.body.appendChild(n);
  var r = n.offsetHeight - n.clientHeight;
  return t.body.removeChild(n), e && (us = r), r;
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
var K_ = {
  ACTIVE: "mdc-tab-indicator--active",
  FADE: "mdc-tab-indicator--fade",
  NO_TRANSITION: "mdc-tab-indicator--no-transition"
}, X_ = {
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
var fr = (
  /** @class */
  function(t) {
    et(e, t);
    function e(n) {
      return t.call(this, be(be({}, e.defaultAdapter), n)) || this;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return K_;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return X_;
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
  }(xt)
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
var Z_ = (
  /** @class */
  function(t) {
    et(e, t);
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return e.prototype.activate = function() {
      this.adapter.addClass(fr.cssClasses.ACTIVE);
    }, e.prototype.deactivate = function() {
      this.adapter.removeClass(fr.cssClasses.ACTIVE);
    }, e;
  }(fr)
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
var _u = (
  /** @class */
  function(t) {
    et(e, t);
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return e.prototype.activate = function(n) {
      if (!n) {
        this.adapter.addClass(fr.cssClasses.ACTIVE);
        return;
      }
      var r = this.computeContentClientRect(), i = n.width / r.width, a = n.left - r.left;
      this.adapter.addClass(fr.cssClasses.NO_TRANSITION), this.adapter.setContentStyleProperty("transform", "translateX(" + a + "px) scaleX(" + i + ")"), this.computeContentClientRect(), this.adapter.removeClass(fr.cssClasses.NO_TRANSITION), this.adapter.addClass(fr.cssClasses.ACTIVE), this.adapter.setContentStyleProperty("transform", "");
    }, e.prototype.deactivate = function() {
      this.adapter.removeClass(fr.cssClasses.ACTIVE);
    }, e;
  }(fr)
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
var ro = {
  ACTIVE: "mdc-tab--active"
}, _a = {
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
var Y_ = (
  /** @class */
  function(t) {
    et(e, t);
    function e(n) {
      var r = t.call(this, be(be({}, e.defaultAdapter), n)) || this;
      return r.focusOnActivate = !0, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return ro;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return _a;
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
      return this.adapter.hasClass(ro.ACTIVE);
    }, e.prototype.setFocusOnActivate = function(n) {
      this.focusOnActivate = n;
    }, e.prototype.activate = function(n) {
      this.adapter.addClass(ro.ACTIVE), this.adapter.setAttr(_a.ARIA_SELECTED, "true"), this.adapter.setAttr(_a.TABINDEX, "0"), this.adapter.activateIndicator(n), this.focusOnActivate && this.adapter.focus();
    }, e.prototype.deactivate = function() {
      this.isActive() && (this.adapter.removeClass(ro.ACTIVE), this.adapter.setAttr(_a.ARIA_SELECTED, "false"), this.adapter.setAttr(_a.TABINDEX, "-1"), this.adapter.deactivateIndicator());
    }, e.prototype.computeDimensions = function() {
      var n = this.adapter.getOffsetWidth(), r = this.adapter.getOffsetLeft(), i = this.adapter.getContentOffsetWidth(), a = this.adapter.getContentOffsetLeft();
      return {
        contentLeft: r + a,
        contentRight: r + a + i,
        rootLeft: r,
        rootRight: r + n
      };
    }, e;
  }(xt)
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
var Ot = {
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
var _i = /* @__PURE__ */ new Set();
_i.add(Ot.ARROW_LEFT_KEY);
_i.add(Ot.ARROW_RIGHT_KEY);
_i.add(Ot.END_KEY);
_i.add(Ot.HOME_KEY);
_i.add(Ot.ENTER_KEY);
_i.add(Ot.SPACE_KEY);
var yi = /* @__PURE__ */ new Map();
yi.set(Un.ARROW_LEFT_KEYCODE, Ot.ARROW_LEFT_KEY);
yi.set(Un.ARROW_RIGHT_KEYCODE, Ot.ARROW_RIGHT_KEY);
yi.set(Un.END_KEYCODE, Ot.END_KEY);
yi.set(Un.HOME_KEYCODE, Ot.HOME_KEY);
yi.set(Un.ENTER_KEYCODE, Ot.ENTER_KEY);
yi.set(Un.SPACE_KEYCODE, Ot.SPACE_KEY);
var Q_ = (
  /** @class */
  function(t) {
    et(e, t);
    function e(n) {
      var r = t.call(this, be(be({}, e.defaultAdapter), n)) || this;
      return r.useAutomaticActivation = !1, r;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return Ot;
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
      var i = this.isRTL(), a = this.adapter.getTabListLength() - 1, o = r === Ot.END_KEY, u = r === Ot.ARROW_LEFT_KEY && !i || r === Ot.ARROW_RIGHT_KEY && i, l = r === Ot.ARROW_RIGHT_KEY && !i || r === Ot.ARROW_LEFT_KEY && i, c = n;
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
      return _i.has(n.key) ? n.key : yi.get(n.keyCode);
    }, e.prototype.isActivationKey = function(n) {
      return n === Ot.SPACE_KEY || n === Ot.ENTER_KEY;
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
  }(xt)
), J_ = /* @__PURE__ */ de("<div><div><div><!></div></div></div>");
function $_(t, e) {
  we(e, !0);
  const { matches: n } = ia;
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
  ]), m, f = /* @__PURE__ */ he(void 0), g, h, p = Ie({}), b = Ie({}), y = Ie({}), S = Ie({});
  at(() => (X(
    f,
    new W_({
      eventTargetMatchesSelector: (G, q) => n(G, q),
      addClass: E,
      removeClass: _,
      addScrollAreaClass: A,
      setScrollAreaStyleProperty: I,
      setScrollContentStyleProperty: O,
      getScrollContentStyleValue: C,
      setScrollAreaScrollLeft: (G) => g.scrollLeft = G,
      getScrollAreaScrollLeft: () => g.scrollLeft,
      getScrollContentOffsetWidth: () => h.offsetWidth,
      getScrollAreaOffsetWidth: () => g.offsetWidth,
      computeScrollAreaClientRect: () => g.getBoundingClientRect(),
      computeScrollContentClientRect: () => h.getBoundingClientRect(),
      computeHorizontalScrollbarHeight: () => z_(document)
    }),
    !0
  ), s(f).init(), () => {
    var G;
    (G = s(f)) == null || G.destroy();
  }));
  function E(G) {
    p[G] || (p[G] = !0);
  }
  function _(G) {
    (!(G in p) || p[G]) && (p[G] = !1);
  }
  function A(G) {
    b[G] || (b[G] = !0);
  }
  function I(G, q) {
    y[G] != q && (q === "" || q == null ? delete y[G] : y[G] = q);
  }
  function O(G, q) {
    S[G] != q && (q === "" || q == null ? delete S[G] : S[G] = q);
  }
  function C(G) {
    return G in S ? S[G] : getComputedStyle(h).getPropertyValue(G);
  }
  function L() {
    if (s(f) == null)
      throw new Error("Instance is undefined.");
    return s(f).getScrollPosition();
  }
  function k() {
    return h.offsetWidth;
  }
  function $(G) {
    var q;
    (q = s(f)) == null || q.incrementScroll(G);
  }
  function V(G) {
    var q;
    (q = s(f)) == null || q.scrollTo(G);
  }
  function W() {
    return m;
  }
  var R = {
    getScrollPosition: L,
    getScrollContentWidth: k,
    incrementScroll: $,
    scrollTo: V,
    getElement: W
  }, x = J_();
  ke(x, (G, q) => ({ class: G, ...q }), [
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
  var M = ce(x), P = (G) => {
    var q;
    s(f) && s(f).handleInteraction(), (q = e.scrollArea$onwheel) == null || q.call(e, G);
  }, Z = (G) => {
    var q;
    s(f) && s(f).handleInteraction(), (q = e.scrollArea$ontouchstart) == null || q.call(e, G);
  }, ne = (G) => {
    var q;
    s(f) && s(f).handleInteraction(), (q = e.scrollArea$onpointerdown) == null || q.call(e, G);
  }, N = (G) => {
    var q;
    s(f) && s(f).handleInteraction(), (q = e.scrollArea$onmousedown) == null || q.call(e, G);
  }, D = (G) => {
    var q;
    s(f) && s(f).handleInteraction(), (q = e.scrollArea$onkeydown) == null || q.call(e, G);
  };
  ke(
    M,
    (G, q, w) => ({
      class: G,
      style: q,
      ...w,
      onwheel: P,
      ontouchstart: Z,
      onpointerdown: ne,
      onmousedown: N,
      onkeydown: D
    }),
    [
      () => He({
        "mdc-tab-scroller__scroll-area": !0,
        ...b,
        [u()]: !0
      }),
      () => Object.entries(y).map(([G, q]) => `${G}: ${q};`).join(" "),
      () => it(d, "scrollArea$")
    ]
  );
  var j = ce(M), Ee = (G) => {
    var q;
    s(f) && s(f).handleTransitionEnd(G), (q = e.scrollContent$ontransitionend) == null || q.call(e, G);
  };
  ke(
    j,
    (G, q, w) => ({
      class: G,
      style: q,
      ...w,
      ontransitionend: Ee
    }),
    [
      () => He({
        "mdc-tab-scroller__scroll-content": !0,
        [c()]: !0
      }),
      () => Object.entries(S).map(([G, q]) => `${G}: ${q};`).join(" "),
      () => it(d, "scrollContent$")
    ]
  );
  var _e = ce(j);
  return Ae(_e, () => e.children ?? pe), Te(j, (G) => h = G, () => h), Ue(j, (G, q) => Q == null ? void 0 : Q(G, q), l), Te(M, (G) => g = G, () => g), Ue(M, (G, q) => Q == null ? void 0 : Q(G, q), o), Te(x, (G) => m = G, () => m), Ue(x, (G, q) => Q == null ? void 0 : Q(G, q), r), T(t, x), Le(R);
}
var ey = /* @__PURE__ */ de("<div><!></div>");
function ty(t, e) {
  we(e, !0);
  let n = v(e, "use", 19, () => []), r = v(e, "class", 3, ""), i = v(e, "tabs", 19, () => []), a = v(e, "key", 3, (R) => R), o = v(e, "focusOnActivate", 3, !0), u = v(e, "focusOnProgrammatic", 3, !1), l = v(e, "useAutomaticActivation", 3, !0), c = v(e, "active", 15), d = v(e, "tabindex", 3, 0), m = /* @__PURE__ */ je(e, [
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
  ]), f, g = /* @__PURE__ */ he(void 0), h, p = /* @__PURE__ */ he(Ie(c() == null ? -1 : i().findIndex((R) => c() && a()(R) === a()(c())))), b = Ie({}), y = /* @__PURE__ */ he(/* @__PURE__ */ new WeakMap()), S = !1;
  ue("SMUI:tab:focusOnActivate", o()), ue("SMUI:tab:initialActive", {
    active: c() == null ? null : a()(c()),
    key: a()
  }), Oe(() => {
    (c() == null && s(p) !== -1 || c() != null && s(p) === -1 || c() != null && a()(c()) !== a()(i()[s(p)])) && (X(p, i().findIndex((R) => c() && a()(R) === a()(c())), !0), s(g) && (S = !u(), s(g).activateTab(s(p)), S = !1));
  }), Oe(() => {
    if (i().length) {
      const R = i()[0] instanceof Object ? s(y).get(i()[0]) : b[i()[0]];
      R && R.forceAccessible(s(p) === -1);
    }
  });
  let E = !1;
  Oe(() => {
    if (!s(g)) {
      E = !1;
      return;
    }
    E || (E = !0, s(g).setUseAutomaticActivation(l()));
  }), ue("SMUI:tab:mount", (R) => {
    A(R.tabId, R);
  }), ue("SMUI:tab:unmount", (R) => {
    I(R.tabId);
  }), at(() => (X(
    g,
    new Q_({
      scrollTo: (R) => h.scrollTo(R),
      incrementScroll: (R) => h.incrementScroll(R),
      getScrollPosition: () => h.getScrollPosition(),
      getScrollContentWidth: () => h.getScrollContentWidth(),
      getOffsetWidth: () => C().offsetWidth,
      isRTL: () => getComputedStyle(C()).getPropertyValue("direction") === "rtl",
      setActiveTab: (R) => {
        var x;
        c(i()[R]), X(p, R, !0), (x = s(g)) == null || x.activateTab(R);
      },
      activateTabAtIndex: (R, x) => {
        var M;
        return (M = _(i()[R])) == null ? void 0 : M.activate(x, S);
      },
      deactivateTabAtIndex: (R) => {
        var x;
        return (x = _(i()[R])) == null ? void 0 : x.deactivate();
      },
      focusTabAtIndex: (R) => {
        var x;
        return (x = _(i()[R])) == null ? void 0 : x.focus();
      },
      getTabIndicatorClientRectAtIndex: (R) => {
        var x;
        return ((x = _(i()[R])) == null ? void 0 : x.computeIndicatorClientRect()) ?? new DOMRect();
      },
      getTabDimensionsAtIndex: (R) => {
        var x;
        return ((x = _(i()[R])) == null ? void 0 : x.computeDimensions()) ?? { rootLeft: 0, rootRight: 0, contentLeft: 0, contentRight: 0 };
      },
      getPreviousActiveTabIndex: () => {
        var R;
        for (let x = 0; x < i().length; x++)
          if ((R = _(i()[x])) != null && R.active)
            return x;
        return -1;
      },
      getFocusedTabIndex: () => {
        const R = i().map((M) => {
          var P;
          return (P = _(M)) == null ? void 0 : P.element;
        }), x = document.activeElement;
        return R.indexOf(x);
      },
      getIndexOfTabById: (R) => i().findIndex((x) => a()(x) === a()(R)),
      getTabListLength: () => i().length,
      notifyTabActivated: (R) => Ke(C(), "SMUITabBarActivated", { index: R })
    }),
    !0
  ), s(g).init(), () => {
    var R;
    (R = s(g)) == null || R.destroy();
  }));
  function _(R) {
    return R instanceof Object ? s(y).get(R) : b[R];
  }
  function A(R, x) {
    R instanceof Object ? (s(y).set(R, x), X(y, s(y))) : b[R] = x;
  }
  function I(R) {
    R instanceof Object ? (s(y).delete(R), X(y, s(y))) : delete b[R];
  }
  function O(R) {
    var x;
    (x = s(g)) == null || x.scrollIntoView(R);
  }
  function C() {
    return f;
  }
  var L = { scrollIntoView: O, getElement: C }, k = ey(), $ = (R) => {
    var x;
    s(g) && s(g).handleKeyDown(R), (x = e.onkeydown) == null || x.call(e, R);
  }, V = (R) => {
    var x;
    s(g) && s(g).handleTabInteraction(R), (x = e.onSMUITabInteracted) == null || x.call(e, R);
  };
  ke(
    k,
    (R, x) => ({
      class: R,
      role: "tablist",
      tabindex: d(),
      ...x,
      onkeydown: $,
      onSMUITabInteracted: V
    }),
    [
      () => He({ "mdc-tab-bar": !0, [r()]: !0 }),
      () => Vn(m, ["tabScroller$"])
    ]
  );
  var W = ce(k);
  {
    let R = /* @__PURE__ */ fe(() => it(m, "tabScroller$"));
    Te(
      $_(W, Je(() => s(R), {
        children: (x, M) => {
          var P = ie(), Z = Y(P);
          Qn(Z, 17, i, (ne) => a()(ne), (ne, N) => {
            var D = ie(), j = Y(D);
            Ae(j, () => e.tab, () => s(N)), T(ne, D);
          }), T(x, P);
        },
        $$slots: { default: !0 }
      })),
      (x) => h = x,
      () => h
    );
  }
  return Te(k, (R) => f = R, () => f), Ue(k, (R, x) => Q == null ? void 0 : Q(R, x), n), T(t, k), Le(L);
}
var ny = /* @__PURE__ */ de("<span><span><!></span></span>");
function ry(t, e) {
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
  ]), d, m = /* @__PURE__ */ he(void 0), f, g = /* @__PURE__ */ he(Ie({})), h = /* @__PURE__ */ he(Ie({})), p = Ie([]), b = o();
  Oe(() => {
    b !== o() && (b = o(), s(m) && s(m).destroy(), X(g, {}, !0), X(h, {}, !0), X(m, y(), !0), s(m).init());
  }), tc(() => {
    p.length && requestAnimationFrame(() => {
      const R = p.shift() ?? [];
      for (const x of R)
        x();
    });
  }), at(() => (X(m, y(), !0), s(m).init(), () => {
    var R;
    (R = s(m)) == null || R.destroy();
  }));
  function y() {
    const R = {
      fade: Z_,
      slide: _u
    }[o()] || _u;
    return new R({
      addClass: (...x) => S(() => E(...x)),
      removeClass: (...x) => S(() => _(...x)),
      computeContentClientRect: C,
      setContentStyleProperty: (...x) => S(() => A(...x))
    });
  }
  function S(R) {
    p.length ? p[p.length - 1].push(R) : R();
  }
  function E(R) {
    s(g)[R] || (s(g)[R] = !0);
  }
  function _(R) {
    (!(R in s(g)) || s(g)[R]) && (s(g)[R] = !1);
  }
  function A(R, x) {
    s(h)[R] != x && (x === "" || x == null ? delete s(h)[R] : s(h)[R] = x);
  }
  function I(R) {
    var x;
    i(!0), (x = s(m)) == null || x.activate(R);
  }
  function O() {
    var R;
    i(!1), (R = s(m)) == null || R.deactivate();
  }
  function C() {
    return p.push([]), f.getBoundingClientRect();
  }
  function L() {
    return d;
  }
  var k = { activate: I, deactivate: O, computeContentClientRect: C, getElement: L }, $ = ny();
  ke($, (R, x) => ({ class: R, ...x }), [
    () => He({
      "mdc-tab-indicator": !0,
      "mdc-tab-indicator--active": i(),
      "mdc-tab-indicator--fade": o() === "fade",
      ...s(g),
      [r()]: !0
    }),
    () => Vn(c, ["content$"])
  ]);
  var V = ce($);
  ke(
    V,
    (R, x, M) => ({
      class: R,
      style: x,
      "aria-hidden": a() === "icon" ? "true" : void 0,
      ...M
    }),
    [
      () => He({
        "mdc-tab-indicator__content": !0,
        "mdc-tab-indicator__content--underline": a() === "underline",
        "mdc-tab-indicator__content--icon": a() === "icon",
        [l()]: !0
      }),
      () => Object.entries(s(h)).map(([R, x]) => `${R}: ${x};`).join(" "),
      () => it(c, "content$")
    ]
  );
  var W = ce(V);
  return Ae(W, () => e.children ?? pe), Te(V, (R) => f = R, () => f), Ue(V, (R, x) => Q == null ? void 0 : Q(R, x), u), Te($, (R) => d = R, () => d), Ue($, (R, x) => Q == null ? void 0 : Q(R, x), n), T(t, $), Le(k);
}
var iy = /* @__PURE__ */ de('<span><!> <!></span> <!> <span class="mdc-tab__ripple"></span>', 1);
function ay(t, e) {
  we(e, !0);
  const n = (q) => {
    {
      let w = /* @__PURE__ */ fe(() => it(p, "tabIndicator$"));
      Te(
        ry(q, Je(() => s(w), {
          get active() {
            return s(L);
          },
          set active(z) {
            X(L, z, !0);
          },
          children: (z, K) => {
            var te = ie(), se = Y(te);
            Ae(se, () => e.tabIndicator ?? pe), T(z, te);
          },
          $$slots: { default: !0 }
        })),
        (z) => E = z,
        () => E
      );
    }
  };
  let r = v(e, "use", 19, () => []), i = v(e, "class", 3, ""), a = v(e, "style", 3, ""), o = v(e, "ripple", 3, !0), u = v(e, "stacked", 3, !1), l = v(e, "minWidth", 3, !1), c = v(e, "indicatorSpanOnlyContent", 3, !1), d = v(e, "href", 3, void 0), m = v(e, "content$use", 19, () => []), f = v(e, "content$class", 3, ""), g = v(e, "component", 3, Vr), h = v(e, "tag", 19, () => d() == null ? "button" : "a"), p = /* @__PURE__ */ je(e, [
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
  ]), b, y = /* @__PURE__ */ he(void 0), S, E, _ = Ie({}), A = Ie({}), I = Ie({}), O = ye("SMUI:tab:focusOnActivate");
  const C = ye("SMUI:tab:initialActive");
  let L = /* @__PURE__ */ he(Ie(C.active != null && C.key(e.tab) === C.active)), k = /* @__PURE__ */ he(!1);
  if (ue("SMUI:label:context", "tab"), ue("SMUI:icon:context", "tab"), !e.tab)
    throw new Error("The tab property is required! It should be passed down from the TabBar to the Tab.");
  let $ = !1;
  Oe(() => {
    if (!s(y)) {
      $ = !1;
      return;
    }
    $ || ($ = !0, s(y).setFocusOnActivate(O));
  });
  const V = ye("SMUI:tab:mount"), W = ye("SMUI:tab:unmount");
  at(() => {
    X(
      y,
      new Y_({
        setAttr: Z,
        addClass: x,
        removeClass: M,
        hasClass: R,
        activateIndicator: (w) => E.activate(w),
        deactivateIndicator: () => E.deactivate(),
        notifyInteracted: () => Ke(j(), "SMUITabInteracted", { tabId: e.tab }),
        getOffsetLeft: () => j().offsetLeft,
        getOffsetWidth: () => j().offsetWidth,
        getContentOffsetLeft: () => S.offsetLeft,
        getContentOffsetWidth: () => S.offsetWidth,
        focus: D
      }),
      !0
    );
    const q = {
      tabId: e.tab,
      get element() {
        return j();
      },
      get active() {
        return s(L);
      },
      forceAccessible(w) {
        X(k, w, !0);
      },
      computeIndicatorClientRect: () => E.computeContentClientRect(),
      computeDimensions: () => {
        if (s(y) == null)
          throw new Error("Instance is undefined.");
        return s(y).computeDimensions();
      },
      focus: D,
      activate: ne,
      deactivate: N
    };
    return V && V(q), s(y).init(), () => {
      var w;
      W && W(q), (w = s(y)) == null || w.destroy();
    };
  });
  function R(q) {
    return q in _ ? _[q] : j().classList.contains(q);
  }
  function x(q) {
    _[q] || (_[q] = !0);
  }
  function M(q) {
    (!(q in _) || _[q]) && (_[q] = !1);
  }
  function P(q, w) {
    A[q] != w && (w === "" || w == null ? delete A[q] : A[q] = w);
  }
  function Z(q, w) {
    I[q] !== w && (I[q] = w);
  }
  function ne(q, w) {
    var z, K, te;
    X(L, !0), w && ((z = s(y)) == null || z.setFocusOnActivate(!1)), (K = s(y)) == null || K.activate(q), w && ((te = s(y)) == null || te.setFocusOnActivate(O));
  }
  function N() {
    var q;
    X(L, !1), (q = s(y)) == null || q.deactivate();
  }
  function D() {
    j().focus();
  }
  function j() {
    return b.getElement();
  }
  var Ee = { activate: ne, deactivate: N, focus: D, getElement: j }, _e = ie(), G = Y(_e);
  {
    let q = /* @__PURE__ */ fe(() => [
      [
        Yt,
        {
          ripple: o(),
          unbounded: !1,
          addClass: x,
          removeClass: M,
          addStyle: P
        }
      ],
      ...r()
    ]), w = /* @__PURE__ */ fe(() => He({
      "mdc-tab": !0,
      "mdc-tab--active": s(L),
      "mdc-tab--stacked": u(),
      "mdc-tab--min-width": l(),
      ..._,
      [i()]: !0
    })), z = /* @__PURE__ */ fe(() => Object.entries(A).map(([ee, re]) => `${ee}: ${re};`).concat([a()]).join(" ")), K = /* @__PURE__ */ fe(() => s(L) ? "true" : "false"), te = /* @__PURE__ */ fe(() => s(L) || s(k) ? "0" : "-1"), se = /* @__PURE__ */ fe(() => Vn(p, ["content$", "tabIndicator$"]));
    nr(G, g, (ee, re) => {
      Te(
        re(ee, Je(
          {
            get tag() {
              return h();
            },
            get use() {
              return s(q);
            },
            get class() {
              return s(w);
            },
            get style() {
              return s(z);
            },
            role: "tab",
            get "aria-selected"() {
              return s(K);
            },
            get tabindex() {
              return s(te);
            },
            get href() {
              return d();
            }
          },
          () => I,
          () => s(se),
          {
            onclick: (Re) => {
              var Ce;
              (Ce = e.onclick) == null || Ce.call(e, Re), !Re.defaultPrevented && s(y) && s(y).handleClick();
            },
            children: (Re, Ce) => {
              var Ne = iy(), Pe = Y(Ne);
              ke(Pe, (Fe, ot) => ({ class: Fe, ...ot }), [
                () => He({ "mdc-tab__content": !0, [f()]: !0 }),
                () => it(p, "content$")
              ]);
              var Me = ce(Pe);
              Ae(Me, () => e.children ?? pe);
              var U = ge(Me, 2);
              {
                var J = (Fe) => {
                  n(Fe);
                };
                oe(U, (Fe) => {
                  c() && Fe(J);
                });
              }
              Te(Pe, (Fe) => S = Fe, () => S), Ue(Pe, (Fe, ot) => Q == null ? void 0 : Q(Fe, ot), m);
              var ve = ge(Pe, 2);
              {
                var De = (Fe) => {
                  n(Fe);
                };
                oe(ve, (Fe) => {
                  c() || Fe(De);
                });
              }
              T(Re, Ne);
            },
            $$slots: { default: !0 }
          }
        )),
        (Re) => b = Re,
        () => b
      );
    });
  }
  return T(t, _e), Le(Ee);
}
var oy = (t, e) => e(), sy = /* @__PURE__ */ de('<button class="filter-tab__tabs__clear svelte-nj6sif">Clear Filters</button>'), ly = /* @__PURE__ */ de('<div class="filter-tab__tabs svelte-nj6sif"><h4 style="all:unset; font-weight: bold; font-size: 1rem;">Filter by</h4> <!> <!></div>'), uy = /* @__PURE__ */ de('<div class="filter-tab svelte-nj6sif"><!> <!> <!></div>');
function cy(t, e) {
  we(e, !0);
  let n = v(e, "filters", 31, () => Ie([])), r = v(e, "onFilterChange", 3, (E) => {
  }), i = v(e, "activeNavigationTab", 31, () => Ie(e.navigationTabs ? e.navigationTabs[0] : void 0)), a = v(e, "searchText", 15, ""), o = v(e, "searchLabel", 3, "Search"), u = v(e, "searchPlaceholder", 3, "Type to search..."), l = v(e, "onSearchInput", 3, () => {
  }), c = v(e, "searchDisabled", 3, !1), d = /* @__PURE__ */ fe(() => n().some((E) => E.value !== void 0 && E.value !== null && E.value !== "")), m = () => {
    n(n().map((E) => ({ ...E, value: void 0 }))), r()(n());
  };
  var f = uy(), g = ce(f);
  {
    var h = (E) => {
      kg(E, {
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
    oe(g, (E) => {
      c() || E(h);
    });
  }
  var p = ge(g, 2);
  {
    var b = (E) => {
      ty(E, {
        get tabs() {
          return e.navigationTabs;
        },
        get active() {
          return i();
        },
        set active(A) {
          i(A);
        },
        tab: (A, I = pe) => {
          ay(A, {
            get tab() {
              return I();
            },
            minWidth: !0,
            children: (O, C) => {
              Ds(O, {
                children: (L, k) => {
                  var $ = vt();
                  xe(() => ze($, I())), T(L, $);
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
    oe(p, (E) => {
      e.navigationTabs && E(b);
    });
  }
  var y = ge(p, 2);
  {
    var S = (E) => {
      var _ = ly(), A = ge(ce(_), 2);
      B_(A, {
        onfiltersChanged: (C) => r()(C),
        get filters() {
          return n();
        },
        set filters(C) {
          n(C);
        }
      });
      var I = ge(A, 2);
      {
        var O = (C) => {
          var L = sy();
          L.__click = [oy, m], T(C, L);
        };
        oe(I, (C) => {
          s(d) && C(O);
        });
      }
      T(E, _);
    };
    oe(y, (E) => {
      n() && n().length > 0 && E(S);
    });
  }
  T(t, f), Le();
}
yn(["click"]);
yn(["change", "click"]);
var dy = /* @__PURE__ */ _t('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor" class="svelte-1mj71p3"><path d="M12 4l-8 8h16l-8-8z"></path></svg>'), fy = /* @__PURE__ */ _t('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor" class="svelte-1mj71p3"><path d="M12 20l8-8H4l8 8z"></path></svg>'), hy = /* @__PURE__ */ de('<div class="custom-cell-container svelte-1mj71p3"><div class="cell-header svelte-1mj71p3"><span class="header-title svelte-1mj71p3"> </span> <!></div></div>'), vy = (t, e) => e(), my = /* @__PURE__ */ de('<input type="text" class="svelte-1mj71p3"/>'), gy = (t, e) => e(), py = /* @__PURE__ */ de('<input type="number" class="svelte-1mj71p3"/>'), by = /* @__PURE__ */ de("<!> <!>", 1), _y = /* @__PURE__ */ de("<!> <!>", 1), yy = /* @__PURE__ */ de('<div class="cell-actions svelte-1mj71p3"></div>'), Iy = /* @__PURE__ */ de("<!> <!>", 1);
function yu(t, e) {
  we(e, !0);
  const n = () => Bn(b, "$sortColumn", a), r = () => Bn(y, "$sortDirection", a), i = () => Bn(p, "$filteredData", a), [a, o] = rr();
  let u = v(e, "loadingDone", 15, !0), l = v(e, "label", 19, Kp), c = v(e, "columnDefs", 19, () => []), d = v(e, "rowData", 31, () => Ie([])), m = v(e, "rowActions", 19, () => []), f = v(e, "searchInputLabel", 3, "Search"), g = v(e, "emptyText", 3, "No data available"), h = Ie({ name: "", color: "", number: "" }), p = Bt([]), b = Bt(null), y = Bt(null), S = /* @__PURE__ */ fe(() => c().some((I) => I.filter));
  e.store.store.subscribe((I) => {
    d([...I]), E();
  });
  function E() {
    let I = d().filter((O) => c().every((C) => {
      const L = h[C.field], k = C.filterValueGetter ? C.filterValueGetter(O) : O[C.field];
      return L ? C.filterType === "number" ? k == L : k.toString().toLowerCase().includes(L.toLowerCase()) : !0;
    }));
    I = _(I), p.set(I);
  }
  function _(I) {
    let O, C;
    return b.subscribe((L) => O = L), y.subscribe((L) => C = L), !O || !C ? I : I.sort((L, k) => {
      let $ = L[O], V = k[O];
      return $ == null && ($ = ""), V == null && (V = ""), C === "asc" ? $.toString().localeCompare(V.toString()) : V.toString().localeCompare($.toString());
    });
  }
  function A(I) {
    b.update((O) => {
      if (O === I)
        y.update((C) => C === "asc" ? "desc" : C === "desc" ? null : "asc");
      else
        return y.set("asc"), I;
      return I;
    }), E();
  }
  p.set(d()), qb(t, {
    get "table$aria-label"() {
      return l();
    },
    style: "max-width: 100%; width: 100%;",
    progress: (O) => {
      n_(O, {
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
    children: (O, C) => {
      var L = Iy(), k = Y(L);
      zb(k, {
        children: (V, W) => {
          var R = _y(), x = Y(R);
          to(x, {
            class: "header-title-row",
            children: (Z, ne) => {
              var N = ie(), D = Y(N);
              Qn(D, 17, c, Ri, (j, Ee) => {
                ba(j, {
                  onclick: () => s(Ee).sortable && A(s(Ee).field),
                  get style() {
                    return s(Ee).headerStyle;
                  },
                  children: (_e, G) => {
                    var q = hy(), w = ce(q), z = ce(w), K = ce(z), te = ge(z, 2);
                    {
                      var se = (ee) => {
                        var re = ie(), Re = Y(re);
                        {
                          var Ce = (Ne) => {
                            var Pe = ie(), Me = Y(Pe);
                            {
                              var U = (ve) => {
                                var De = dy();
                                T(ve, De);
                              }, J = (ve) => {
                                var De = ie(), Fe = Y(De);
                                {
                                  var ot = (ft) => {
                                    var me = fy();
                                    T(ft, me);
                                  };
                                  oe(
                                    Fe,
                                    (ft) => {
                                      r() === "desc" && ft(ot);
                                    },
                                    !0
                                  );
                                }
                                T(ve, De);
                              };
                              oe(Me, (ve) => {
                                r() === "asc" ? ve(U) : ve(J, !1);
                              });
                            }
                            T(Ne, Pe);
                          };
                          oe(Re, (Ne) => {
                            n() === s(Ee).field && r() !== null && Ne(Ce);
                          });
                        }
                        T(ee, re);
                      };
                      oe(te, (ee) => {
                        s(Ee).sortable && ee(se);
                      });
                    }
                    xe(() => {
                      ct(q, `min-width: ${s(Ee).minWidth ?? 0 ?? ""}`), ze(K, s(Ee).headerName);
                    }), T(_e, q);
                  },
                  $$slots: { default: !0 }
                });
              }), T(Z, N);
            },
            $$slots: { default: !0 }
          });
          var M = ge(x, 2);
          {
            var P = (Z) => {
              to(Z, {
                class: "header-filter-row",
                children: (ne, N) => {
                  var D = ie(), j = Y(D);
                  Qn(j, 17, c, Ri, (Ee, _e) => {
                    ba(Ee, {
                      children: (G, q) => {
                        var w = ie(), z = Y(w);
                        {
                          var K = (te) => {
                            var se = by(), ee = Y(se);
                            {
                              var re = (Ne) => {
                                var Pe = my();
                                Pe.__input = [vy, E], xe(() => pr(Pe, "placeholder", `${f()} ${s(_e).headerName}`)), La(Pe, () => h[s(_e).field], (Me) => h[s(_e).field] = Me), T(Ne, Pe);
                              };
                              oe(ee, (Ne) => {
                                s(_e).filterType === "text" && Ne(re);
                              });
                            }
                            var Re = ge(ee, 2);
                            {
                              var Ce = (Ne) => {
                                var Pe = py();
                                Pe.__input = [gy, E], xe(() => pr(Pe, "placeholder", `${f()} ${s(_e).headerName}`)), La(Pe, () => h[s(_e).field], (Me) => h[s(_e).field] = Me), T(Ne, Pe);
                              };
                              oe(Re, (Ne) => {
                                s(_e).filterType === "number" && Ne(Ce);
                              });
                            }
                            T(te, se);
                          };
                          oe(z, (te) => {
                            s(_e).filter && te(K);
                          });
                        }
                        T(G, w);
                      },
                      $$slots: { default: !0 }
                    });
                  }), T(ne, D);
                },
                $$slots: { default: !0 }
              });
            };
            oe(M, (Z) => {
              s(S) && Z(P);
            });
          }
          T(V, R);
        },
        $$slots: { default: !0 }
      });
      var $ = ge(k, 2);
      Xb($, {
        children: (V, W) => {
          var R = ie(), x = Y(R);
          {
            var M = (Z) => {
              to(Z, {
                children: (ne, N) => {
                  ba(ne, {
                    class: "oscd-basic-table__empty-row",
                    get colspan() {
                      return c().length;
                    },
                    style: "text-align:center; padding: 24px; opacity: 0.6; background: rgba(0,0,0,0.05);",
                    children: (D, j) => {
                      var Ee = vt();
                      xe(() => ze(Ee, g())), T(D, Ee);
                    },
                    $$slots: { default: !0 }
                  });
                },
                $$slots: { default: !0 }
              });
            }, P = (Z) => {
              var ne = ie(), N = Y(ne);
              Qn(N, 1, i, Ri, (D, j) => {
                to(D, {
                  children: (Ee, _e) => {
                    var G = ie(), q = Y(G);
                    Qn(q, 17, c, (w) => w.field, (w, z) => {
                      var K = ie(), te = Y(K);
                      {
                        var se = (re) => {
                          ba(re, {
                            children: (Re, Ce) => {
                              var Ne = yy();
                              Qn(Ne, 21, m, Ri, (Pe, Me) => {
                                var U = ie(), J = Y(U);
                                {
                                  var ve = (Fe) => {
                                    Da(Fe, {
                                      get content() {
                                        return s(Me).tooltip;
                                      },
                                      hoverDelay: 500,
                                      children: (ot, ft) => {
                                        {
                                          let me = /* @__PURE__ */ fe(() => s(Me).disabled(s(j)));
                                          ag(ot, {
                                            get iconComponent() {
                                              return s(Me).iconComponent;
                                            },
                                            get iconStyles() {
                                              return s(Me).iconStyles;
                                            },
                                            callback: () => s(Me).callback(s(j)),
                                            get disabled() {
                                              return s(me);
                                            },
                                            get ariaLabel() {
                                              return s(Me).ariaLabel;
                                            }
                                          });
                                        }
                                      },
                                      $$slots: { default: !0 }
                                    });
                                  }, De = (Fe) => {
                                    Da(Fe, {
                                      get content() {
                                        return s(Me).tooltip;
                                      },
                                      hoverDelay: 500,
                                      children: (ot, ft) => {
                                        {
                                          let me = /* @__PURE__ */ fe(() => s(Me).disabled(s(j)));
                                          Ps(ot, {
                                            class: "button",
                                            variant: "raised",
                                            callback: () => s(Me).callback(s(j)),
                                            get disabled() {
                                              return s(me);
                                            },
                                            get ariaLabel() {
                                              return s(Me).ariaLabel;
                                            },
                                            children: (F, B) => {
                                              var ae = ie(), Be = Y(ae);
                                              {
                                                var mt = (yt) => {
                                                  Yp(yt, { svgStyles: "margin: unset" });
                                                }, Et = (yt) => {
                                                  var Vt = ie(), yr = Y(Vt);
                                                  {
                                                    var pt = (At) => {
                                                      cl(At, { svgStyles: "margin: unset" });
                                                    }, Nt = (At) => {
                                                      var On = ie(), Ii = Y(On);
                                                      {
                                                        var qn = ($e) => {
                                                          $p($e, { svgStyles: "margin: unset" });
                                                        }, Xe = ($e) => {
                                                          var tt = ie(), Ut = Y(tt);
                                                          {
                                                            var vn = (ht) => {
                                                              tb(ht, { svgStyles: "margin: unset" });
                                                            }, st = (ht) => {
                                                              var wt = ie(), nt = Y(wt);
                                                              {
                                                                var Mt = (Pt) => {
                                                                  ib(Pt, { svgStyles: "margin: unset" });
                                                                }, Rn = (Pt) => {
                                                                  var St = ie(), Ft = Y(St);
                                                                  {
                                                                    var ln = (un) => {
                                                                      sd(un, { svgStyles: "margin: unset" });
                                                                    }, Gt = (un) => {
                                                                      var Jt = ie(), Wn = Y(Jt);
                                                                      {
                                                                        var jr = (Kt) => {
                                                                          ld(Kt, { svgStyles: "margin: unset" });
                                                                        }, cn = (Kt) => {
                                                                          var mn = ie(), ir = Y(mn);
                                                                          {
                                                                            var oa = (Ir) => {
                                                                              Tb(Ir, { svgStyles: "margin: unset" });
                                                                            }, Bo = (Ir) => {
                                                                              od(Ir, { svgStyles: "margin: unset" });
                                                                            };
                                                                            oe(
                                                                              ir,
                                                                              (Ir) => {
                                                                                s(Me).icon === "archive" ? Ir(oa) : Ir(Bo, !1);
                                                                              },
                                                                              !0
                                                                            );
                                                                          }
                                                                          T(Kt, mn);
                                                                        };
                                                                        oe(
                                                                          Wn,
                                                                          (Kt) => {
                                                                            s(Me).icon === "delete" ? Kt(jr) : Kt(cn, !1);
                                                                          },
                                                                          !0
                                                                        );
                                                                      }
                                                                      T(un, Jt);
                                                                    };
                                                                    oe(
                                                                      Ft,
                                                                      (un) => {
                                                                        s(Me).icon === "edit" ? un(ln) : un(Gt, !1);
                                                                      },
                                                                      !0
                                                                    );
                                                                  }
                                                                  T(Pt, St);
                                                                };
                                                                oe(
                                                                  nt,
                                                                  (Pt) => {
                                                                    s(Me).icon === "remove" ? Pt(Mt) : Pt(Rn, !1);
                                                                  },
                                                                  !0
                                                                );
                                                              }
                                                              T(ht, wt);
                                                            };
                                                            oe(
                                                              Ut,
                                                              (ht) => {
                                                                s(Me).icon === "find-in-page" ? ht(vn) : ht(st, !1);
                                                              },
                                                              !0
                                                            );
                                                          }
                                                          T($e, tt);
                                                        };
                                                        oe(
                                                          Ii,
                                                          ($e) => {
                                                            s(Me).icon === "download" ? $e(qn) : $e(Xe, !1);
                                                          },
                                                          !0
                                                        );
                                                      }
                                                      T(At, On);
                                                    };
                                                    oe(
                                                      yr,
                                                      (At) => {
                                                        s(Me).icon === "cancel" ? At(pt) : At(Nt, !1);
                                                      },
                                                      !0
                                                    );
                                                  }
                                                  T(yt, Vt);
                                                };
                                                oe(Be, (yt) => {
                                                  s(Me).icon === "add" ? yt(mt) : yt(Et, !1);
                                                });
                                              }
                                              T(F, ae);
                                            },
                                            $$slots: { default: !0 }
                                          });
                                        }
                                      },
                                      $$slots: { default: !0 }
                                    });
                                  };
                                  oe(J, (Fe) => {
                                    s(Me).iconComponent ? Fe(ve) : Fe(De, !1);
                                  });
                                }
                                T(Pe, U);
                              }), T(Re, Ne);
                            },
                            $$slots: { default: !0 }
                          });
                        }, ee = (re) => {
                          ba(re, {
                            get numeric() {
                              return s(z).numeric;
                            },
                            get style() {
                              return s(z).cellStyle;
                            },
                            children: (Re, Ce) => {
                              var Ne = ie(), Pe = Y(Ne);
                              {
                                var Me = (J) => {
                                  const ve = /* @__PURE__ */ fe(() => s(z).cellRenderer);
                                  var De = ie(), Fe = Y(De);
                                  nr(Fe, () => s(ve), (ot, ft) => {
                                    ft(ot, Je(
                                      {
                                        get row() {
                                          return s(j);
                                        },
                                        get value() {
                                          return s(j)[s(z).field];
                                        },
                                        get col() {
                                          return s(z);
                                        }
                                      },
                                      () => s(z).cellRendererProps ?? {}
                                    ));
                                  }), T(J, De);
                                }, U = (J) => {
                                  var ve = ie(), De = Y(ve);
                                  {
                                    var Fe = (ft) => {
                                      var me = vt();
                                      xe((F) => ze(me, F), [
                                        () => s(z).valueFormatter(s(j)[s(z).field])
                                      ]), T(ft, me);
                                    }, ot = (ft) => {
                                      var me = vt();
                                      xe(() => ze(me, s(j)[s(z).field] ?? "")), T(ft, me);
                                    };
                                    oe(
                                      De,
                                      (ft) => {
                                        s(z).valueFormatter ? ft(Fe) : ft(ot, !1);
                                      },
                                      !0
                                    );
                                  }
                                  T(J, ve);
                                };
                                oe(Pe, (J) => {
                                  s(z).cellRenderer ? J(Me) : J(U, !1);
                                });
                              }
                              T(Re, Ne);
                            },
                            $$slots: { default: !0 }
                          });
                        };
                        oe(te, (re) => {
                          s(z).field === "actions" ? re(se) : re(ee, !1);
                        });
                      }
                      T(w, K);
                    }), T(Ee, G);
                  },
                  $$slots: { default: !0 }
                });
              }), T(Z, ne);
            };
            oe(x, (Z) => {
              i().length === 0 ? Z(M) : Z(P, !1);
            });
          }
          T(V, R);
        },
        $$slots: { default: !0 }
      }), T(O, L);
    },
    $$slots: { progress: !0, default: !0 }
  }), Le(), o();
}
yn(["input"]);
function Rt(t) {
  return typeof t == "function";
}
function fl(t) {
  var e = function(r) {
    Error.call(r), r.stack = new Error().stack;
  }, n = t(e);
  return n.prototype = Object.create(Error.prototype), n.prototype.constructor = n, n;
}
var cs = fl(function(t) {
  return function(n) {
    t(this), this.message = n ? n.length + ` errors occurred during unsubscription:
` + n.map(function(r, i) {
      return i + 1 + ") " + r.toString();
    }).join(`
  `) : "", this.name = "UnsubscriptionError", this.errors = n;
  };
});
function Iu(t, e) {
  if (t) {
    var n = t.indexOf(e);
    0 <= n && t.splice(n, 1);
  }
}
var hl = function() {
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
            for (var u = Wt(o), l = u.next(); !l.done; l = u.next()) {
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
      if (Rt(d))
        try {
          d();
        } catch (p) {
          a = p instanceof cs ? p.errors : [p];
        }
      var m = this._finalizers;
      if (m) {
        this._finalizers = null;
        try {
          for (var f = Wt(m), g = f.next(); !g.done; g = f.next()) {
            var h = g.value;
            try {
              Eu(h);
            } catch (p) {
              a = a ?? [], p instanceof cs ? a = li(li([], Xi(a)), Xi(p.errors)) : a.push(p);
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
        throw new cs(a);
    }
  }, t.prototype.add = function(e) {
    var n;
    if (e && e !== this)
      if (this.closed)
        Eu(e);
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
    n === e ? this._parentage = null : Array.isArray(n) && Iu(n, e);
  }, t.prototype.remove = function(e) {
    var n = this._finalizers;
    n && Iu(n, e), e instanceof t && e._removeParent(this);
  }, t.EMPTY = function() {
    var e = new t();
    return e.closed = !0, e;
  }(), t;
}();
hl.EMPTY;
function dd(t) {
  return t instanceof hl || t && "closed" in t && Rt(t.remove) && Rt(t.add) && Rt(t.unsubscribe);
}
function Eu(t) {
  Rt(t) ? t() : t.unsubscribe();
}
var Ey = {
  Promise: void 0
}, Sy = {
  setTimeout: function(t, e) {
    for (var n = [], r = 2; r < arguments.length; r++)
      n[r - 2] = arguments[r];
    return setTimeout.apply(void 0, li([t, e], Xi(n)));
  },
  clearTimeout: function(t) {
    return clearTimeout(t);
  },
  delegate: void 0
};
function fd(t) {
  Sy.setTimeout(function() {
    throw t;
  });
}
function Su() {
}
function Ay(t) {
  t();
}
var vl = function(t) {
  et(e, t);
  function e(n) {
    var r = t.call(this) || this;
    return r.isStopped = !1, n ? (r.destination = n, dd(n) && n.add(r)) : r.destination = xy, r;
  }
  return e.create = function(n, r, i) {
    return new Co(n, r, i);
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
}(hl), Cy = function() {
  function t(e) {
    this.partialObserver = e;
  }
  return t.prototype.next = function(e) {
    var n = this.partialObserver;
    if (n.next)
      try {
        n.next(e);
      } catch (r) {
        io(r);
      }
  }, t.prototype.error = function(e) {
    var n = this.partialObserver;
    if (n.error)
      try {
        n.error(e);
      } catch (r) {
        io(r);
      }
    else
      io(e);
  }, t.prototype.complete = function() {
    var e = this.partialObserver;
    if (e.complete)
      try {
        e.complete();
      } catch (n) {
        io(n);
      }
  }, t;
}(), Co = function(t) {
  et(e, t);
  function e(n, r, i) {
    var a = t.call(this) || this, o;
    return Rt(n) || !n ? o = {
      next: n ?? void 0,
      error: r ?? void 0,
      complete: i ?? void 0
    } : o = n, a.destination = new Cy(o), a;
  }
  return e;
}(vl);
function io(t) {
  fd(t);
}
function Ty(t) {
  throw t;
}
var xy = {
  closed: !0,
  next: Su,
  error: Ty,
  complete: Su
}, ml = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}();
function wy(t) {
  return t;
}
function Ly(t) {
  return t.length === 0 ? wy : t.length === 1 ? t[0] : function(n) {
    return t.reduce(function(r, i) {
      return i(r);
    }, n);
  };
}
var jn = function() {
  function t(e) {
    e && (this._subscribe = e);
  }
  return t.prototype.lift = function(e) {
    var n = new t();
    return n.source = this, n.operator = e, n;
  }, t.prototype.subscribe = function(e, n, r) {
    var i = this, a = Ry(e) ? e : new Co(e, n, r);
    return Ay(function() {
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
    return n = Au(n), new n(function(i, a) {
      var o = new Co({
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
  }, t.prototype[ml] = function() {
    return this;
  }, t.prototype.pipe = function() {
    for (var e = [], n = 0; n < arguments.length; n++)
      e[n] = arguments[n];
    return Ly(e)(this);
  }, t.prototype.toPromise = function(e) {
    var n = this;
    return e = Au(e), new e(function(r, i) {
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
function Au(t) {
  var e;
  return (e = t ?? Ey.Promise) !== null && e !== void 0 ? e : Promise;
}
function Oy(t) {
  return t && Rt(t.next) && Rt(t.error) && Rt(t.complete);
}
function Ry(t) {
  return t && t instanceof vl || Oy(t) && dd(t);
}
function Dy(t) {
  return Rt(t == null ? void 0 : t.lift);
}
function ja(t) {
  return function(e) {
    if (Dy(e))
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
function Ma(t, e, n, r, i) {
  return new My(t, e, n, r, i);
}
var My = function(t) {
  et(e, t);
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
}(vl), Py = new jn(function(t) {
  return t.complete();
});
function Hy(t) {
  return t && Rt(t.schedule);
}
function Ny(t) {
  return t[t.length - 1];
}
function Uy(t) {
  return Hy(Ny(t)) ? t.pop() : void 0;
}
var hd = function(t) {
  return t && typeof t.length == "number" && typeof t != "function";
};
function vd(t) {
  return Rt(t == null ? void 0 : t.then);
}
function md(t) {
  return Rt(t[ml]);
}
function gd(t) {
  return Symbol.asyncIterator && Rt(t == null ? void 0 : t[Symbol.asyncIterator]);
}
function pd(t) {
  return new TypeError("You provided " + (t !== null && typeof t == "object" ? "an invalid object" : "'" + t + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
}
function Fy() {
  return typeof Symbol != "function" || !Symbol.iterator ? "@@iterator" : Symbol.iterator;
}
var bd = Fy();
function _d(t) {
  return Rt(t == null ? void 0 : t[bd]);
}
function yd(t) {
  return Uh(this, arguments, function() {
    var n, r, i, a;
    return rl(this, function(o) {
      switch (o.label) {
        case 0:
          n = t.getReader(), o.label = 1;
        case 1:
          o.trys.push([1, , 9, 10]), o.label = 2;
        case 2:
          return [4, Pi(n.read())];
        case 3:
          return r = o.sent(), i = r.value, a = r.done, a ? [4, Pi(void 0)] : [3, 5];
        case 4:
          return [2, o.sent()];
        case 5:
          return [4, Pi(i)];
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
function Id(t) {
  return Rt(t == null ? void 0 : t.getReader);
}
function qa(t) {
  if (t instanceof jn)
    return t;
  if (t != null) {
    if (md(t))
      return ky(t);
    if (hd(t))
      return By(t);
    if (vd(t))
      return Vy(t);
    if (gd(t))
      return Ed(t);
    if (_d(t))
      return Gy(t);
    if (Id(t))
      return jy(t);
  }
  throw pd(t);
}
function ky(t) {
  return new jn(function(e) {
    var n = t[ml]();
    if (Rt(n.subscribe))
      return n.subscribe(e);
    throw new TypeError("Provided object does not correctly implement Symbol.observable");
  });
}
function By(t) {
  return new jn(function(e) {
    for (var n = 0; n < t.length && !e.closed; n++)
      e.next(t[n]);
    e.complete();
  });
}
function Vy(t) {
  return new jn(function(e) {
    t.then(function(n) {
      e.closed || (e.next(n), e.complete());
    }, function(n) {
      return e.error(n);
    }).then(null, fd);
  });
}
function Gy(t) {
  return new jn(function(e) {
    var n, r;
    try {
      for (var i = Wt(t), a = i.next(); !a.done; a = i.next()) {
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
function Ed(t) {
  return new jn(function(e) {
    qy(t, e).catch(function(n) {
      return e.error(n);
    });
  });
}
function jy(t) {
  return Ed(yd(t));
}
function qy(t, e) {
  var n, r, i, a;
  return xc(this, void 0, void 0, function() {
    var o, u;
    return rl(this, function(l) {
      switch (l.label) {
        case 0:
          l.trys.push([0, 5, 6, 11]), n = Fh(t), l.label = 1;
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
function ci(t, e, n, r, i) {
  r === void 0 && (r = 0), i === void 0 && (i = !1);
  var a = e.schedule(function() {
    n(), i ? t.add(this.schedule(null, r)) : this.unsubscribe();
  }, r);
  if (t.add(a), !i)
    return a;
}
function Sd(t, e) {
  return e === void 0 && (e = 0), ja(function(n, r) {
    n.subscribe(Ma(r, function(i) {
      return ci(r, t, function() {
        return r.next(i);
      }, e);
    }, function() {
      return ci(r, t, function() {
        return r.complete();
      }, e);
    }, function(i) {
      return ci(r, t, function() {
        return r.error(i);
      }, e);
    }));
  });
}
function Ad(t, e) {
  return e === void 0 && (e = 0), ja(function(n, r) {
    r.add(t.schedule(function() {
      return n.subscribe(r);
    }, e));
  });
}
function Wy(t, e) {
  return qa(t).pipe(Ad(e), Sd(e));
}
function zy(t, e) {
  return qa(t).pipe(Ad(e), Sd(e));
}
function Ky(t, e) {
  return new jn(function(n) {
    var r = 0;
    return e.schedule(function() {
      r === t.length ? n.complete() : (n.next(t[r++]), n.closed || this.schedule());
    });
  });
}
function Xy(t, e) {
  return new jn(function(n) {
    var r;
    return ci(n, e, function() {
      r = t[bd](), ci(n, e, function() {
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
      return Rt(r == null ? void 0 : r.return) && r.return();
    };
  });
}
function Cd(t, e) {
  if (!t)
    throw new Error("Iterable cannot be null");
  return new jn(function(n) {
    ci(n, e, function() {
      var r = t[Symbol.asyncIterator]();
      ci(n, e, function() {
        r.next().then(function(i) {
          i.done ? n.complete() : n.next(i.value);
        });
      }, 0, !0);
    });
  });
}
function Zy(t, e) {
  return Cd(yd(t), e);
}
function Yy(t, e) {
  if (t != null) {
    if (md(t))
      return Wy(t, e);
    if (hd(t))
      return Ky(t, e);
    if (vd(t))
      return zy(t, e);
    if (gd(t))
      return Cd(t, e);
    if (_d(t))
      return Xy(t, e);
    if (Id(t))
      return Zy(t, e);
  }
  throw pd(t);
}
function Td(t, e) {
  return e ? Yy(t, e) : qa(t);
}
function xd() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  var n = Uy(t);
  return Td(t, n);
}
var Qy = fl(function(t) {
  return function() {
    t(this), this.name = "EmptyError", this.message = "no elements in sequence";
  };
});
function Sa(t, e) {
  return new Promise(function(n, r) {
    var i = new Co({
      next: function(a) {
        n(a), i.unsubscribe();
      },
      error: r,
      complete: function() {
        r(new Qy());
      }
    });
    t.subscribe(i);
  });
}
function xn(t, e) {
  return ja(function(n, r) {
    var i = 0;
    n.subscribe(Ma(r, function(a) {
      r.next(t.call(e, a, i++));
    }));
  });
}
function Jy(t, e, n, r, i, a, o, u) {
  var l = [], c = 0, d = 0, m = !1, f = function() {
    m && !l.length && !c && e.complete();
  }, g = function(p) {
    return c < r ? h(p) : l.push(p);
  }, h = function(p) {
    c++;
    var b = !1;
    qa(n(p, d++)).subscribe(Ma(e, function(y) {
      e.next(y);
    }, function() {
      b = !0;
    }, void 0, function() {
      if (b)
        try {
          c--;
          for (var y = function() {
            var S = l.shift();
            o || h(S);
          }; l.length && c < r; )
            y();
          f();
        } catch (S) {
          e.error(S);
        }
    }));
  };
  return t.subscribe(Ma(e, g, function() {
    m = !0, f();
  })), function() {
  };
}
function Fs(t, e, n) {
  return n === void 0 && (n = 1 / 0), Rt(e) ? Fs(function(r, i) {
    return xn(function(a, o) {
      return e(r, a, i, o);
    })(qa(t(r, i)));
  }, n) : (typeof e == "number" && (n = e), ja(function(r, i) {
    return Jy(r, i, t, n);
  }));
}
function wd(t, e) {
  return Rt(e) ? Fs(t, e, 1) : Fs(t, 1);
}
function Cu(t) {
  return t <= 0 ? function() {
    return Py;
  } : ja(function(e, n) {
    var r = 0;
    e.subscribe(Ma(n, function(i) {
      ++r <= t && (n.next(i), t <= r && n.complete());
    }));
  });
}
class $y {
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
function Ld(t) {
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
var e0 = /* @__PURE__ */ function() {
  function t(e, n, r, i) {
    i === void 0 && (i = "download_load"), this.originalEvent = e, this.xhr = n, this.request = r, this.type = i;
    var a = n.status, o = n.responseType;
    this.status = a ?? 0, this.responseType = o ?? "";
    var u = n.getAllResponseHeaders();
    this.responseHeaders = u ? u.split(`
`).reduce(function(d, m) {
      var f = m.indexOf(": ");
      return d[m.slice(0, f)] = m.slice(f + 2), d;
    }, {}) : {}, this.response = Ld(n);
    var l = e.loaded, c = e.total;
    this.loaded = l, this.total = c;
  }
  return t;
}(), To = fl(function(t) {
  return function(n, r, i) {
    this.message = n, this.name = "AjaxError", this.xhr = r, this.request = i, this.status = r.status, this.responseType = r.responseType;
    var a;
    try {
      a = Ld(r);
    } catch {
      a = r.responseText;
    }
    this.response = a;
  };
}), t0 = function() {
  function t(e, n) {
    return To.call(this, "ajax timeout", e, n), this.name = "AjaxTimeoutError", this;
  }
  return t.prototype = Object.create(To.prototype), t;
}();
function n0(t, e) {
  return Gr({ method: "GET", url: t, headers: e });
}
function r0(t, e, n) {
  return Gr({ method: "POST", url: t, body: e, headers: n });
}
function i0(t, e) {
  return Gr({ method: "DELETE", url: t, headers: e });
}
function a0(t, e, n) {
  return Gr({ method: "PUT", url: t, body: e, headers: n });
}
function o0(t, e, n) {
  return Gr({ method: "PATCH", url: t, body: e, headers: n });
}
var s0 = xn(function(t) {
  return t.response;
});
function l0(t, e) {
  return s0(Gr({
    method: "GET",
    url: t,
    headers: e
  }));
}
var Gr = function() {
  var t = function(e) {
    var n = typeof e == "string" ? {
      url: e
    } : e;
    return c0(n);
  };
  return t.get = n0, t.post = r0, t.delete = i0, t.put = a0, t.patch = o0, t.getJSON = l0, t;
}(), u0 = "upload", Tu = "download", ds = "loadstart", fs = "progress", xu = "load";
function c0(t) {
  return new jn(function(e) {
    var n, r, i = be({ async: !0, crossDomain: !1, withCredentials: !1, method: "GET", timeout: 0, responseType: "json" }, t), a = i.queryParams, o = i.body, u = i.headers, l = i.url;
    if (!l)
      throw new TypeError("url is required");
    if (a) {
      var c;
      if (l.includes("?")) {
        var d = l.split("?");
        if (2 < d.length)
          throw new TypeError("invalid url");
        c = new URLSearchParams(d[1]), new URLSearchParams(a).forEach(function(P, Z) {
          return c.set(Z, P);
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
    var S = d0(o, m), E = be(be({}, i), {
      url: l,
      headers: m,
      body: S
    }), _;
    _ = t.createXHR ? t.createXHR() : new XMLHttpRequest();
    {
      var A = t.progressSubscriber, I = t.includeDownloadProgress, O = I === void 0 ? !1 : I, C = t.includeUploadProgress, L = C === void 0 ? !1 : C, k = function(P, Z) {
        _.addEventListener(P, function() {
          var ne, N = Z();
          (ne = A == null ? void 0 : A.error) === null || ne === void 0 || ne.call(A, N), e.error(N);
        });
      };
      k("timeout", function() {
        return new t0(_, E);
      }), k("abort", function() {
        return new To("aborted", _, E);
      });
      var $ = function(P, Z) {
        return new e0(Z, _, E, P + "_" + Z.type);
      }, V = function(P, Z, ne) {
        P.addEventListener(Z, function(N) {
          e.next($(ne, N));
        });
      };
      L && [ds, fs, xu].forEach(function(P) {
        return V(_.upload, P, u0);
      }), A && [ds, fs].forEach(function(P) {
        return _.upload.addEventListener(P, function(Z) {
          var ne;
          return (ne = A == null ? void 0 : A.next) === null || ne === void 0 ? void 0 : ne.call(A, Z);
        });
      }), O && [ds, fs].forEach(function(P) {
        return V(_, P, Tu);
      });
      var W = function(P) {
        var Z = "ajax error" + (P ? " " + P : "");
        e.error(new To(Z, _, E));
      };
      _.addEventListener("error", function(P) {
        var Z;
        (Z = A == null ? void 0 : A.error) === null || Z === void 0 || Z.call(A, P), W();
      }), _.addEventListener(xu, function(P) {
        var Z, ne, N = _.status;
        if (N < 400) {
          (Z = A == null ? void 0 : A.complete) === null || Z === void 0 || Z.call(A);
          var D = void 0;
          try {
            D = $(Tu, P);
          } catch (j) {
            e.error(j);
            return;
          }
          e.next(D), e.complete();
        } else
          (ne = A == null ? void 0 : A.error) === null || ne === void 0 || ne.call(A, P), W(N);
      });
    }
    var R = E.user, x = E.method, M = E.async;
    R ? _.open(x, l, M, R, E.password) : _.open(x, l, M), M && (_.timeout = E.timeout, _.responseType = E.responseType), "withCredentials" in _ && (_.withCredentials = E.withCredentials);
    for (var f in m)
      m.hasOwnProperty(f) && _.setRequestHeader(f, m[f]);
    return S ? _.send(S) : _.send(), function() {
      _ && _.readyState !== 4 && _.abort();
    };
  });
}
function d0(t, e) {
  var n;
  if (!t || typeof t == "string" || p0(t) || b0(t) || h0(t) || v0(t) || m0(t) || _0(t))
    return t;
  if (g0(t))
    return t.buffer;
  if (typeof t == "object")
    return e["content-type"] = (n = e["content-type"]) !== null && n !== void 0 ? n : "application/json;charset=utf-8", JSON.stringify(t);
  throw new TypeError("Unknown body type");
}
var f0 = Object.prototype.toString;
function gl(t, e) {
  return f0.call(t) === "[object " + e + "]";
}
function h0(t) {
  return gl(t, "ArrayBuffer");
}
function v0(t) {
  return gl(t, "File");
}
function m0(t) {
  return gl(t, "Blob");
}
function g0(t) {
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView(t);
}
function p0(t) {
  return typeof FormData < "u" && t instanceof FormData;
}
function b0(t) {
  return typeof URLSearchParams < "u" && t instanceof URLSearchParams;
}
function _0(t) {
  return typeof ReadableStream < "u" && t instanceof ReadableStream;
}
let y0 = class {
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
const I0 = new y0("https://demo.compas.energy", {}, "DSOM Versatel Production URL"), E0 = [I0], S0 = E0[0].getUrl();
let Od = class {
  constructor(e = {}) {
    this.configuration = e;
  }
  get basePath() {
    return this.configuration.basePath ?? S0;
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
}, A0 = class {
  constructor(e = new Od()) {
    this.configuration = e, this.middleware = [], this.withMiddleware = (n) => {
      const r = this.clone();
      return r.middleware = r.middleware.concat(n), r;
    }, this.withPreMiddleware = (n) => this.withMiddleware(n.map((r) => ({ pre: r }))), this.withPostMiddleware = (n) => this.withMiddleware(n.map((r) => ({ post: r }))), this.createRequestArgs = ({ url: n, query: r, method: i, headers: a, body: o, responseType: u }) => ({
      url: `${this.configuration.basePath}${n}${r && Object.keys(r).length ? `?${C0(r)}` : ""}`,
      method: i,
      headers: a,
      body: o instanceof FormData ? o : JSON.stringify(o),
      responseType: u ?? "json"
    }), this.rxjsRequest = (n) => xd(n).pipe(
      xn((r) => (this.middleware.filter((i) => i.pre).forEach((i) => r = i.pre(r)), r)),
      wd(
        (r) => Gr(r).pipe(
          xn((i) => (this.middleware.filter((a) => a.post).forEach((a) => i = a.post(i)), i))
        )
      )
    ), this.clone = () => Object.assign(Object.create(Object.getPrototypeOf(this)), this), this.middleware = e.middleware;
  }
  request(e, n) {
    return this.rxjsRequest(this.createRequestArgs(e)).pipe(
      xn((r) => {
        const { status: i, response: a } = r;
        if (i >= 200 && i < 300)
          return (n == null ? void 0 : n.response) === "raw" ? r : a;
        throw r;
      })
    );
  }
};
const vr = (t) => encodeURIComponent(`${t}`), C0 = (t) => Object.entries(t).map(
  ([e, n]) => n instanceof Array ? n.map((r) => `${vr(e)}=${vr(r)}`).join("&") : `${vr(e)}=${vr(n)}`
).join("&"), wi = (t, e, n) => {
  if (t == null)
    throw new Error(`Parameter "${e}" was null or undefined when calling "${n}".`);
};
class T0 extends A0 {
  deleteAllSclFileVersions({ id: e, type: n }, r) {
    wi(e, "id", "deleteAllSclFileVersions"), wi(n, "type", "deleteAllSclFileVersions");
    const i = {};
    return this.request({
      url: "/scl/v1/{type}/{id}".replace("{id}", vr(e)).replace("{type}", vr(n)),
      method: "DELETE",
      headers: i
    }, r == null ? void 0 : r.responseOpts);
  }
  retrieveDataResourceByVersion({ id: e, version: n }, r) {
    wi(e, "id", "retrieveDataResourceByVersion"), wi(n, "version", "retrieveDataResourceByVersion");
    const i = {};
    return this.request({
      url: "/api/scl/{id}/version/{version}".replace("{id}", vr(e)).replace("{version}", vr(n)),
      method: "GET",
      headers: i,
      responseType: "blob"
    }, r == null ? void 0 : r.responseOpts);
  }
  retrieveDataResourceHistory({ id: e }, n) {
    wi(e, "id", "retrieveDataResourceHistory");
    const r = {};
    return this.request({
      url: "/api/scl/{id}/versions".replace("{id}", vr(e)),
      method: "GET",
      headers: r
    }, n == null ? void 0 : n.responseOpts);
  }
  searchForResources({ dataResourceSearch: e }, n) {
    wi(e, "dataResourceSearch", "searchForResources");
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
const Qr = class Qr {
  constructor() {
    Dn(this, "endpoint", "/compas-scl-data-service");
  }
  static getInstance() {
    return Qr.instance || (Qr.instance = new Qr()), Qr.instance;
  }
  async searchFiles(e) {
    const n = this.generateApiClient(this.endpoint), r = await Sa(
      n.searchForResources({ dataResourceSearch: this.mapToDataResourceSearch(e) })
    );
    return r != null && r.results ? r.results.map((i) => this.mapToFileSearchResult(i)) : [];
  }
  async getHistoryFiles(e) {
    const n = this.generateApiClient(this.endpoint), r = await Sa(
      n.retrieveDataResourceHistory({ id: e })
    );
    return r != null && r.versions ? r.versions.map((i) => this.mapToFileSearchResult(i)) : [];
  }
  /**
   * Delete all versions of a resource
   * @param type scl file type (e.g., SSD, SCL, etc.)
   * @param uuid uuid of the resource
   */
  async deleteResource(e, n) {
    const r = this.generateApiClient(this.endpoint);
    await Sa(r.deleteAllSclFileVersions({ id: n, type: e }));
  }
  async downloadSclData(e, n, r) {
    const i = this.generateApiClient(this.endpoint);
    return Sa(
      i.retrieveDataResourceByVersion({ id: e, version: r })
    );
  }
  mapToFileSearchResult(e) {
    return new $y(
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
      uuid: e.uuid,
      type: e.type,
      name: e.filename,
      author: e.author,
      from: e.from,
      to: e.to
    };
  }
  generateApiClient(e) {
    return new T0(new Od({ basePath: e }));
  }
};
Dn(Qr, "instance");
let ks = Qr;
var wr;
class wu {
  constructor() {
    rt(this, wr, Bt([]));
  }
  get store() {
    return le(this, wr);
  }
  updateData(e) {
    le(this, wr).set(e);
  }
  addData(e) {
    le(this, wr).update((n) => [...n, e]);
  }
  removeData(e) {
    le(this, wr).update((n) => n.filter((r) => r.uuid !== e));
  }
  getData(e) {
    return Cc(le(this, wr)).find((n) => n.uuid === e);
  }
}
wr = new WeakMap();
class x0 {
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
const w0 = new x0("https://demo.compas.energy", {}, "DSOM Versatel Production URL"), L0 = [w0], O0 = L0[0].getUrl();
class Rd {
  constructor(e = {}) {
    this.configuration = e;
  }
  get basePath() {
    return this.configuration.basePath ?? O0;
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
class R0 {
  constructor(e = new Rd()) {
    this.configuration = e, this.middleware = [], this.withMiddleware = (n) => {
      const r = this.clone();
      return r.middleware = r.middleware.concat(n), r;
    }, this.withPreMiddleware = (n) => this.withMiddleware(n.map((r) => ({ pre: r }))), this.withPostMiddleware = (n) => this.withMiddleware(n.map((r) => ({ post: r }))), this.createRequestArgs = ({ url: n, query: r, method: i, headers: a, body: o, responseType: u }) => ({
      url: `${this.configuration.basePath}${n}${r && Object.keys(r).length ? `?${D0(r)}` : ""}`,
      method: i,
      headers: a,
      body: o instanceof FormData ? o : JSON.stringify(o),
      responseType: u ?? "json"
    }), this.rxjsRequest = (n) => xd(n).pipe(
      xn((r) => (this.middleware.filter((i) => i.pre).forEach((i) => r = i.pre(r)), r)),
      wd(
        (r) => Gr(r).pipe(
          xn((i) => (this.middleware.filter((a) => a.post).forEach((a) => i = a.post(i)), i))
        )
      )
    ), this.clone = () => Object.assign(Object.create(Object.getPrototypeOf(this)), this), this.middleware = e.middleware;
  }
  request(e, n) {
    return this.rxjsRequest(this.createRequestArgs(e)).pipe(
      xn((r) => {
        const { status: i, response: a } = r;
        if (i >= 200 && i < 300)
          return (n == null ? void 0 : n.response) === "raw" ? r : a;
        throw r;
      })
    );
  }
}
const mr = (t) => encodeURIComponent(`${t}`), D0 = (t) => Object.entries(t).map(
  ([e, n]) => n instanceof Array ? n.map((r) => `${mr(e)}=${mr(r)}`).join("&") : `${mr(e)}=${mr(n)}`
).join("&"), ya = (t, e, n) => {
  if (t == null)
    throw new Error(`Parameter "${e}" was null or undefined when calling "${n}".`);
};
class M0 extends R0 {
  archiveResource({ id: e, version: n, xAuthor: r, xApprover: i, contentType: a, xFilename: o, body: u }, l) {
    ya(e, "id", "archiveResource"), ya(n, "version", "archiveResource");
    const c = {
      "Content-Type": "application/octet-stream",
      ...r != null ? { "X-author": String(r) } : void 0,
      ...i != null ? { "X-approver": String(i) } : void 0,
      ...a != null ? { "Content-Type": String(a) } : void 0,
      ...o != null ? { "X-filename": String(o) } : void 0
    };
    return this.request({
      url: "/api/archive/referenced-resource/{id}/versions/{version}".replace("{id}", mr(e)).replace("{version}", mr(n)),
      method: "POST",
      headers: c,
      body: u
    }, l == null ? void 0 : l.responseOpts);
  }
  archiveSclResource({ id: e, version: n }, r) {
    ya(e, "id", "archiveSclResource"), ya(n, "version", "archiveSclResource");
    const i = {};
    return this.request({
      url: "/api/archive/scl/{id}/versions/{version}".replace("{id}", mr(e)).replace("{version}", mr(n)),
      method: "POST",
      headers: i
    }, r == null ? void 0 : r.responseOpts);
  }
  retrieveArchivedResourceHistory({ id: e }, n) {
    ya(e, "id", "retrieveArchivedResourceHistory");
    const r = {};
    return this.request({
      url: "/api/archive/resources/{id}/versions".replace("{id}", mr(e)),
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
class P0 {
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
const Jr = class Jr {
  constructor() {
    Dn(this, "baseUrl", "/compas-scl-data-service");
    Dn(this, "apiClient");
    this.apiClient = this.generateApiClient();
  }
  static getInstance() {
    return Jr.instance || (Jr.instance = new Jr()), Jr.instance;
  }
  searchArchive(e) {
    return this.apiClient.searchArchivedResources({ archivedResourcesSearch: e }).pipe(
      Cu(1),
      xn((n) => n.resources),
      xn((n) => this.mapResourcesToArchiveSearchResults(n))
    );
  }
  retrieveArchivedResourceHistory(e) {
    return this.apiClient.retrieveArchivedResourceHistory({ id: e }).pipe(
      Cu(1),
      xn((n) => n.versions),
      xn((n) => this.mapResourcesToArchiveSearchResults(n))
    );
  }
  findByUUIDAndVersion(e, n, r) {
    return Td(
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
    return new P0(
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
    const e = new Rd({
      basePath: this.baseUrl
      // accessToken: authInfo.token,
    });
    return new M0(e);
  }
};
Dn(Jr, "instance");
let Bs = Jr;
hm({ en: Um, de: Cm });
var H0 = /* @__PURE__ */ de("<h3> </h3>"), N0 = /* @__PURE__ */ de("<!> <!>", 1), U0 = /* @__PURE__ */ de("<!> <!>", 1), F0 = /* @__PURE__ */ de('<div class="oscd-app"><div class="version-editor-container svelte-vqh57v"><!> <div class="search-filter svelte-vqh57v"><!></div> <div class="toolbar svelte-vqh57v"><!></div> <div class="table-container svelte-vqh57v"><!></div></div></div> <!> <!>', 1);
function k0(t, e) {
  we(e, !0);
  const n = () => Bn(fm, "$_", r), [r, i] = rr();
  v(e, "editCount", 19, () => -1);
  let a = v(e, "dataStore", 19, () => new wu()), o = v(e, "historyStore", 19, () => new wu());
  const u = ks.getInstance(), l = Bs.getInstance();
  let c = /* @__PURE__ */ he(!0), d = /* @__PURE__ */ he(!0), m = /* @__PURE__ */ he(!1), f = /* @__PURE__ */ he(""), g = /* @__PURE__ */ he(void 0), h = /* @__PURE__ */ he(Ie([
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
  const p = {
    headerName: "",
    field: "actions",
    numeric: !1,
    filter: !1,
    filterType: "text",
    minWidth: "100px",
    sortable: !1
  };
  let b = /* @__PURE__ */ fe(() => [
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
      valueFormatter: C
    },
    {
      headerName: n()("version"),
      field: "version",
      numeric: !1,
      filter: !1,
      filterType: "text",
      sortable: !0
    },
    p
  ]), y = /* @__PURE__ */ fe(() => [
    ...s(b),
    {
      headerName: "Comment",
      field: "comment",
      numeric: !1,
      filter: !1,
      filterType: "text",
      sortable: !0
    }
  ]);
  const S = [
    {
      icon: "edit",
      tooltip: "Open",
      callback: (w) => R(w),
      disabled: (w) => !w.available
    },
    {
      icon: "find-in-page",
      tooltip: "View History",
      callback: (w) => V(w),
      disabled: () => !1
    },
    {
      icon: "download",
      tooltip: "Download",
      callback: (w) => $(w),
      disabled: (w) => !w.available
    },
    {
      icon: "delete",
      tooltip: "Delete",
      callback: (w) => L(w),
      disabled: () => !1
    },
    {
      icon: "archive",
      tooltip: "Archive",
      callback: (w) => k(w),
      disabled: () => !1
    }
  ], E = [
    {
      icon: "download",
      tooltip: "Download",
      callback: (w) => $(w),
      disabled: (w) => !w.available
    }
  ];
  let _;
  at(() => (I(), window.addEventListener("doc-saved", I), () => {
    clearTimeout(_), window.removeEventListener("doc-saved", I);
  }));
  function A(w = 200) {
    clearTimeout(_), _ = setTimeout(() => I(), w);
  }
  async function I() {
    if (s(c)) {
      X(c, !1);
      try {
        const w = O(), z = await u.searchFiles(w);
        a().updateData(z.filter((K) => !K.deleted));
      } catch (w) {
        console.error("Failed to load resources:", w), Pn.error("Load Failed", "Could not load the resource list.");
      } finally {
        X(c, !0);
      }
    }
  }
  function O() {
    const w = {
      uuid: null,
      filename: null,
      author: null,
      type: null,
      name: null,
      from: null,
      to: null
    };
    for (const z of s(h))
      if (z.key in w && z.type !== "date" && z.value)
        w[z.key] = z.value;
      else if (z.type === "date" && z.value) {
        const K = new Date(z.value);
        z.key === "from" ? w.from = K.toISOString() : z.key === "to" && (K.setHours(23, 59, 59, 999), w.to = K.toISOString());
      }
    return s(f).trim() && (w.filename = s(f).trim()), w;
  }
  function C(w) {
    return new Date(w).toLocaleDateString();
  }
  async function L(w) {
    var te;
    const z = !!e.docId && w.uuid === e.docId;
    if ((await as(ss, {
      title: "Confirm Deletion",
      message: z ? `"${w.filename}" is currently open in the editor.

Deleting it will remove it from CoMPAS. The document will stay open locally but its CoMPAS link will be cleared — you will be prompted to save it as a new entry next time.` : `Are you sure you want to delete the resource "${w.filename} (${w.uuid})"? This action cannot be undone.`,
      confirmActionText: "Delete",
      cancelActionText: "Cancel",
      confirmActionColor: "danger"
    })).type === "confirm")
      try {
        if (await u.deleteResource(w.type, w.uuid), Pn.success("Deleted resource", `Resource "${w.filename}" has been deleted.`), z && e.doc) {
          const se = e.docName ?? `${w.filename}.${w.type}`;
          (te = window.document.getElementsByTagName("open-scd")[0]) == null || te.dispatchEvent(new CustomEvent("open-doc", {
            bubbles: !0,
            composed: !0,
            detail: {
              localFile: !0,
              doc: e.doc,
              docName: se,
              docId: ""
            }
          })), Pn.warn("CoMPAS link cleared", `"${w.filename}" was deleted. The document is still open locally and can be saved as a new CoMPAS entry.`);
        }
        I();
      } catch (se) {
        console.error(`Failed to delete resource "${w.filename}":`, se), Pn.error("Deletion failed", `Failed to delete resource "${w.filename}".`);
      }
  }
  async function k(w) {
    var K, te;
    if ((await as(ss, {
      title: "Confirm Archiving",
      message: `Archive latest version "${w.filename}" (v${w.version})? This keeps the file in History and does not delete it.`,
      confirmActionText: "Archive",
      cancelActionText: "Cancel"
    })).type === "confirm")
      try {
        await Sa(l.archiveSclFile(w.uuid, w.version)), Pn.success("Archived resource", `Resource "${w.filename}" has been archived.`), I();
      } catch (se) {
        console.error(`Failed to archive resource "${w.filename}":`, se);
        const ee = se == null ? void 0 : se.response, re = ((te = (K = ee == null ? void 0 : ee.errorMessages) == null ? void 0 : K[0]) == null ? void 0 : te.message) ?? `Failed to archive resource "${w.filename}".`;
        Pn.error("Archiving failed", re);
      }
  }
  async function $(w) {
    try {
      const z = await u.downloadSclData(w.uuid, w.type, w.version), K = URL.createObjectURL(z), te = document.createElement("a");
      te.href = K, te.download = `${w.filename}.${w.type}`, te.style.display = "none", document.body.appendChild(te), te.click(), document.body.removeChild(te), URL.revokeObjectURL(K);
    } catch (z) {
      console.error(`Failed to download "${w.filename}":`, z), Pn.error("Download failed", `Could not download "${w.filename}".`);
    }
  }
  async function V(w) {
    X(g, w, !0), X(d, !1), X(m, !0);
    try {
      const z = await u.getHistoryFiles(w.uuid);
      o().updateData(z);
    } catch (z) {
      console.error(`Failed to load history for "${w.filename}":`, z), Pn.error("History failed", `Could not load history for "${w.filename}".`);
    } finally {
      X(d, !0);
    }
  }
  function W() {
    X(m, !1);
  }
  async function R(w) {
    var K;
    if ((await as(ss, {
      title: "Open File",
      message: `Do you want to open "${w.filename}"?

Any unsaved changes in your current project will be lost.`,
      confirmActionText: "Open",
      cancelActionText: "Cancel"
    })).type === "confirm")
      try {
        const se = await (await u.downloadSclData(w.uuid, w.type, w.version)).text(), ee = `${w.filename}.${w.type}`, re = new DOMParser().parseFromString(se, "application/xml");
        (K = window.document.getElementsByTagName("open-scd")[0]) == null || K.dispatchEvent(new CustomEvent("open-doc", {
          bubbles: !0,
          composed: !0,
          detail: { localFile: !1, doc: re, docName: ee, docId: w.uuid }
        }));
      } catch (te) {
        console.error(`Failed to open "${w.filename}":`, te), Pn.error("Open failed", `Could not open "${w.filename}".`);
      }
  }
  var x = F0(), M = Y(x), P = ce(M), Z = ce(P);
  Lp(Z, {
    onClose: W,
    get open() {
      return s(m);
    },
    set open(te) {
      X(m, te, !0);
    },
    title: (te) => {
      var se = H0(), ee = ce(se);
      xe((re) => ze(ee, re), [
        () => {
          var re;
          return n()("versionHistory.title", { values: { filename: (re = s(g)) == null ? void 0 : re.filename } });
        }
      ]), T(te, se);
    },
    content: (te) => {
      {
        let se = /* @__PURE__ */ fe(() => n()("search"));
        yu(te, {
          get columnDefs() {
            return s(y);
          },
          get store() {
            return o();
          },
          get loadingDone() {
            return s(d);
          },
          get rowActions() {
            return E;
          },
          get searchInputLabel() {
            return s(se);
          }
        });
      }
    },
    actions: (te) => {
      Ps(te, {
        callback: W,
        variant: "raised",
        children: (se, ee) => {
          var re = N0(), Re = Y(re);
          cl(Re, {});
          var Ce = ge(Re, 2);
          Ds(Ce, {
            children: (Ne, Pe) => {
              var Me = vt();
              xe((U) => ze(Me, U), [() => n()("done")]), T(Ne, Me);
            },
            $$slots: { default: !0 }
          }), T(se, re);
        },
        $$slots: { default: !0 }
      });
    },
    $$slots: { title: !0, content: !0, actions: !0 }
  });
  var ne = ge(Z, 2), N = ce(ne);
  cy(N, {
    searchLabel: "Search file name...",
    onFilterChange: () => A(),
    onSearchInput: () => A(),
    get filters() {
      return s(h);
    },
    set filters(w) {
      X(h, w, !0);
    },
    get searchText() {
      return s(f);
    },
    set searchText(w) {
      X(f, w, !0);
    }
  });
  var D = ge(ne, 2), j = ce(D);
  {
    let w = /* @__PURE__ */ fe(() => !s(c));
    Ps(j, {
      callback: () => I(),
      variant: "outlined",
      get disabled() {
        return s(w);
      },
      children: (z, K) => {
        var te = U0(), se = Y(te);
        od(se, {});
        var ee = ge(se, 2);
        Ds(ee, {
          children: (re, Re) => {
            var Ce = vt("Refresh");
            T(re, Ce);
          },
          $$slots: { default: !0 }
        }), T(z, te);
      },
      $$slots: { default: !0 }
    });
  }
  var Ee = ge(D, 2), _e = ce(Ee);
  {
    let w = /* @__PURE__ */ fe(() => n()("search"));
    yu(_e, {
      emptyText: "No resources found.",
      get columnDefs() {
        return s(b);
      },
      get store() {
        return a();
      },
      get loadingDone() {
        return s(c);
      },
      get rowActions() {
        return S;
      },
      get searchInputLabel() {
        return s(w);
      }
    });
  }
  var G = ge(M, 2);
  C_(G, {});
  var q = ge(G, 2);
  Rp(q, {}), T(t, x), Le(), i();
}
const Dd = "version-editor", Md = "0.0.1";
var B0 = /* @__PURE__ */ de('<!> <input type="hidden" name="package-name"/> <input type="hidden" name="package-version"/>', 1);
function V0(t, e) {
  we(e, !0);
  let n = v(e, "editCount", 19, () => -1), r = v(e, "dev", 3, !1);
  var i = B0(), a = Y(i);
  {
    var o = (c) => {
      k0(c, {
        get doc() {
          return e.doc;
        },
        get editCount() {
          return n();
        },
        get docName() {
          return e.docName;
        },
        get docId() {
          return e.docId;
        },
        get host() {
          return e.host;
        },
        get locale() {
          return e.locale;
        }
      });
    };
    oe(a, (c) => {
      (e.doc || r()) && c(o);
    });
  }
  var u = ge(a, 2), l = ge(u, 2);
  xe(() => {
    Hl(u, Dd), Hl(l, Md);
  }), T(t, i), Le();
}
var Vi;
class X0 extends HTMLElement {
  constructor() {
    super();
    rt(this, Vi);
    Ve(this, Vi, /* @__PURE__ */ he(Ie({
      doc: void 0,
      editCount: -1,
      host: this,
      locale: navigator.language ?? "en-US"
    })));
  }
  get _props() {
    return s(le(this, Vi));
  }
  set _props(n) {
    X(le(this, Vi), n, !0);
  }
  connectedCallback() {
    if (this.shadowRoot) return;
    this.attachShadow({ mode: "open" });
    const n = this.shadowRoot, r = G0();
    n.appendChild(r);
    const i = document.createElement("style");
    i.textContent = ":host { --primary-base: var(--primary); --white: #ffffff; --danger: var(--red); }", n.appendChild(i);
    const a = () => Zf(V0, { target: n, props: this._props });
    r.addEventListener("load", a, { once: !0 }), r.addEventListener("error", a, { once: !0 });
  }
  set doc(n) {
    this._props.doc = n;
  }
  set editCount(n) {
    this._props.editCount = n;
  }
  set docName(n) {
    this._props.docName = n;
  }
  set docId(n) {
    this._props.docId = n;
  }
  set locale(n) {
    this._props.locale = n;
  }
}
Vi = new WeakMap();
function G0() {
  const t = document.createElement("link");
  return t.rel = "stylesheet", t.type = "text/css", t.href = new URL("./style.css", import.meta.url).href, t.id = `${Dd}-v${Md}-style`, t;
}
export {
  X0 as default
};
