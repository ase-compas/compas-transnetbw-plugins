var jd = Object.defineProperty;
var vl = (t) => {
  throw TypeError(t);
};
var Wd = (t, e, n) => e in t ? jd(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var Ei = (t, e, n) => Wd(t, typeof e != "symbol" ? e + "" : e, n), Go = (t, e, n) => e.has(t) || vl("Cannot " + n);
var ue = (t, e, n) => (Go(t, e, "read from private field"), n ? n.call(t) : e.get(t)), rt = (t, e, n) => e.has(t) ? vl("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, n), Fe = (t, e, n, r) => (Go(t, e, "write to private field"), r ? r.call(t, n) : e.set(t, n), n), Kt = (t, e, n) => (Go(t, e, "access private method"), n);
const Ft = Symbol(), qd = "http://www.w3.org/1999/xhtml", zd = "http://www.w3.org/2000/svg", Kd = "@attach", Ru = !1;
var Lo = Array.isArray, Xd = Array.prototype.indexOf, Ns = Array.from, uo = Object.defineProperty, Or = Object.getOwnPropertyDescriptor, Du = Object.getOwnPropertyDescriptors, Yd = Object.prototype, Zd = Array.prototype, Us = Object.getPrototypeOf, ml = Object.isExtensible;
function Li(t) {
  return typeof t == "function";
}
const me = () => {
};
function Qd(t) {
  return t();
}
function co(t) {
  for (var e = 0; e < t.length; e++)
    t[e]();
}
function Mu() {
  var t, e, n = new Promise((r, i) => {
    t = r, e = i;
  });
  return { promise: n, resolve: t, reject: e };
}
const an = 2, Fs = 4, Oo = 8, Mr = 16, _r = 32, ui = 64, ks = 128, xn = 256, fo = 512, Zt = 1024, bn = 2048, Pr = 4096, Fn = 8192, ci = 16384, Ro = 32768, Hr = 65536, gl = 1 << 17, Jd = 1 << 18, $i = 1 << 19, Pu = 1 << 20, cs = 1 << 21, Do = 1 << 22, ni = 1 << 23, $n = Symbol("$state"), Hu = Symbol("legacy props"), $d = Symbol(""), Oi = new class extends Error {
  constructor() {
    super(...arguments);
    Ei(this, "name", "StaleReactionError");
    Ei(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
function Bs(t) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function ef() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function tf(t) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function nf() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function rf(t) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function af() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function of(t) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function sf() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function lf() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function uf() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function cf() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
function df() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function ff() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let hf = !1;
function Nu(t) {
  return t === this.v;
}
function Vs(t, e) {
  return t != t ? e == e : t !== e || t !== null && typeof t == "object" || typeof t == "function";
}
function Uu(t) {
  return !Vs(t, this.v);
}
let ea = !1, vf = !1;
function mf() {
  ea = !0;
}
let ct = null;
function ji(t) {
  ct = t;
}
function ye(t) {
  return (
    /** @type {T} */
    Fu().get(t)
  );
}
function ce(t, e) {
  return Fu().set(t, e), e;
}
function Te(t, e = !1, n) {
  ct = {
    p: ct,
    c: null,
    e: null,
    s: t,
    x: null,
    l: ea && !e ? { s: null, u: null, $: [] } : null
  };
}
function xe(t) {
  var e = (
    /** @type {ComponentContext} */
    ct
  ), n = e.e;
  if (n !== null) {
    e.e = null;
    for (var r of n)
      tc(r);
  }
  return t !== void 0 && (e.x = t), ct = e.p, t ?? /** @type {T} */
  {};
}
function Ha() {
  return !ea || ct !== null && ct.l === null;
}
function Fu(t) {
  return ct === null && Bs(), ct.c ?? (ct.c = new Map(gf(ct) || void 0));
}
function gf(t) {
  let e = t.p;
  for (; e !== null; ) {
    const n = e.c;
    if (n !== null)
      return n;
    e = e.p;
  }
  return null;
}
let Zr = [];
function ku() {
  var t = Zr;
  Zr = [], co(t);
}
function pr(t) {
  if (Zr.length === 0 && !Ea) {
    var e = Zr;
    queueMicrotask(() => {
      e === Zr && ku();
    });
  }
  Zr.push(t);
}
function pf() {
  for (; Zr.length > 0; )
    ku();
}
const bf = /* @__PURE__ */ new WeakMap();
function Bu(t) {
  var e = qe;
  if (e === null)
    return We.f |= ni, t;
  if (e.f & Ro)
    Wi(t, e);
  else {
    if (!(e.f & ks))
      throw !e.parent && t instanceof Error && Vu(t), t;
    e.b.error(t);
  }
}
function Wi(t, e) {
  for (; e !== null; ) {
    if (e.f & ks)
      try {
        e.b.error(t);
        return;
      } catch (n) {
        t = n;
      }
    e = e.parent;
  }
  throw t instanceof Error && Vu(t), t;
}
function Vu(t) {
  const e = bf.get(t);
  e && (uo(t, "message", {
    value: e.message
  }), uo(t, "stack", {
    value: e.stack
  }));
}
const Wa = /* @__PURE__ */ new Set();
let lt = null, no = null, Wt = null, ds = /* @__PURE__ */ new Set(), Zn = [], Mo = null, fs = !1, Ea = !1;
var Ui, Fi, Qr, Da, ki, Bi, Jr, Vi, Ma, Pa, wn, hs, ro, vs;
const To = class To {
  constructor() {
    rt(this, wn);
    /**
     * The current values of any sources that are updated in this batch
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Source, any>}
     */
    Ei(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any sources that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Source, any>}
     */
    rt(this, Ui, /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<() => void>}
     */
    rt(this, Fi, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    rt(this, Qr, 0);
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    rt(this, Da, null);
    /**
     * Async effects inside a newly-created `<svelte:boundary>`
     * — these do not prevent the batch from committing
     * @type {Effect[]}
     */
    rt(this, ki, []);
    /**
     * Template effects and `$effect.pre` effects, which run when
     * a batch is committed
     * @type {Effect[]}
     */
    rt(this, Bi, []);
    /**
     * The same as `#render_effects`, but for `$effect` (which runs after)
     * @type {Effect[]}
     */
    rt(this, Jr, []);
    /**
     * Block effects, which may need to re-run on subsequent flushes
     * in order to update internal sources (e.g. each block items)
     * @type {Effect[]}
     */
    rt(this, Vi, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Effect[]}
     */
    rt(this, Ma, []);
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Effect[]}
     */
    rt(this, Pa, []);
    /**
     * A set of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`
     * @type {Set<Effect>}
     */
    Ei(this, "skipped_effects", /* @__PURE__ */ new Set());
  }
  /**
   *
   * @param {Effect[]} root_effects
   */
  process(e) {
    var a;
    Zn = [], no = null, this.apply();
    for (const o of e)
      Kt(this, wn, hs).call(this, o);
    if (ue(this, Qr) === 0) {
      var n = Wt;
      Kt(this, wn, vs).call(this);
      var r = ue(this, Bi), i = ue(this, Jr);
      Fe(this, Bi, []), Fe(this, Jr, []), Fe(this, Vi, []), no = this, lt = null, Wt = n, pl(r), pl(i), no = null, (a = ue(this, Da)) == null || a.resolve();
    } else
      Kt(this, wn, ro).call(this, ue(this, Bi)), Kt(this, wn, ro).call(this, ue(this, Jr)), Kt(this, wn, ro).call(this, ue(this, Vi));
    Wt = null;
    for (const o of ue(this, ki))
      xa(o);
    Fe(this, ki, []);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Source} source
   * @param {any} value
   */
  capture(e, n) {
    ue(this, Ui).has(e) || ue(this, Ui).set(e, n), this.current.set(e, e.v), Wt == null || Wt.set(e, e.v);
  }
  activate() {
    lt = this;
  }
  deactivate() {
    lt = null, Wt = null;
  }
  flush() {
    if (Zn.length > 0) {
      if (this.activate(), Gu(), lt !== null && lt !== this)
        return;
    } else ue(this, Qr) === 0 && Kt(this, wn, vs).call(this);
    this.deactivate();
    for (const e of ds)
      if (ds.delete(e), e(), lt !== null)
        break;
  }
  increment() {
    Fe(this, Qr, ue(this, Qr) + 1);
  }
  decrement() {
    Fe(this, Qr, ue(this, Qr) - 1);
    for (const e of ue(this, Ma))
      nn(e, bn), si(e);
    for (const e of ue(this, Pa))
      nn(e, Pr), si(e);
    this.flush();
  }
  /** @param {() => void} fn */
  add_callback(e) {
    ue(this, Fi).add(e);
  }
  settled() {
    return (ue(this, Da) ?? Fe(this, Da, Mu())).promise;
  }
  static ensure() {
    if (lt === null) {
      const e = lt = new To();
      Wa.add(lt), Ea || To.enqueue(() => {
        lt === e && e.flush();
      });
    }
    return lt;
  }
  /** @param {() => void} task */
  static enqueue(e) {
    pr(e);
  }
  apply() {
  }
};
Ui = new WeakMap(), Fi = new WeakMap(), Qr = new WeakMap(), Da = new WeakMap(), ki = new WeakMap(), Bi = new WeakMap(), Jr = new WeakMap(), Vi = new WeakMap(), Ma = new WeakMap(), Pa = new WeakMap(), wn = new WeakSet(), /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 */
hs = function(e) {
  var c;
  e.f ^= Zt;
  for (var n = e.first; n !== null; ) {
    var r = n.f, i = (r & (_r | ui)) !== 0, a = i && (r & Zt) !== 0, o = a || (r & Fn) !== 0 || this.skipped_effects.has(n);
    if (!o && n.fn !== null) {
      i ? n.f ^= Zt : r & Fs ? ue(this, Jr).push(n) : r & Zt || (r & Do && ((c = n.b) != null && c.is_pending()) ? ue(this, ki).push(n) : No(n) && (n.f & Mr && ue(this, Vi).push(n), xa(n)));
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
ro = function(e) {
  for (const n of e)
    (n.f & bn ? ue(this, Ma) : ue(this, Pa)).push(n), nn(n, Zt);
  e.length = 0;
}, /**
 * Append and remove branches to/from the DOM
 */
vs = function() {
  var e;
  for (const n of ue(this, Fi))
    n();
  if (ue(this, Fi).clear(), Wa.size > 1) {
    ue(this, Ui).clear();
    let n = !0;
    for (const r of Wa) {
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
          ju(o, a);
        if (Zn.length > 0) {
          lt = r, r.apply();
          for (const o of Zn)
            Kt(e = r, wn, hs).call(e, o);
          Zn = [], r.deactivate();
        }
      }
    }
    lt = null;
  }
  Wa.delete(this);
};
let mr = To;
function _f(t) {
  var e = Ea;
  Ea = !0;
  try {
    for (var n; ; ) {
      if (pf(), Zn.length === 0 && (lt == null || lt.flush(), Zn.length === 0))
        return Mo = null, /** @type {T} */
        n;
      Gu();
    }
  } finally {
    Ea = e;
  }
}
function Gu() {
  var t = Pi;
  fs = !0;
  try {
    var e = 0;
    for (yl(!0); Zn.length > 0; ) {
      var n = mr.ensure();
      if (e++ > 1e3) {
        var r, i;
        yf();
      }
      n.process(Zn), Rr.clear();
    }
  } finally {
    fs = !1, yl(t), Mo = null;
  }
}
function yf() {
  try {
    af();
  } catch (t) {
    Wi(t, Mo);
  }
}
let dr = null;
function pl(t) {
  var e = t.length;
  if (e !== 0) {
    for (var n = 0; n < e; ) {
      var r = t[n++];
      if (!(r.f & (ci | Fn)) && No(r) && (dr = [], xa(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null && r.ac === null ? ac(r) : r.fn = null), (dr == null ? void 0 : dr.length) > 0)) {
        Rr.clear();
        for (const i of dr)
          xa(i);
        dr = [];
      }
    }
    dr = null;
  }
}
function ju(t, e) {
  if (t.reactions !== null)
    for (const n of t.reactions) {
      const r = n.f;
      r & an ? ju(
        /** @type {Derived} */
        n,
        e
      ) : r & (Do | Mr) && Wu(n, e) && (nn(n, bn), si(
        /** @type {Effect} */
        n
      ));
    }
}
function Wu(t, e) {
  if (t.deps !== null) {
    for (const n of t.deps)
      if (e.includes(n) || n.f & an && Wu(
        /** @type {Derived} */
        n,
        e
      ))
        return !0;
  }
  return !1;
}
function si(t) {
  for (var e = Mo = t; e.parent !== null; ) {
    e = e.parent;
    var n = e.f;
    if (fs && e === qe && n & Mr)
      return;
    if (n & (ui | _r)) {
      if (!(n & Zt)) return;
      e.f ^= Zt;
    }
  }
  Zn.push(e);
}
function If(t) {
  let e = 0, n = li(0), r;
  return () => {
    Uf() && (s(n), Fa(() => (e === 0 && (r = Gn(() => t(() => Sa(n)))), e += 1, () => {
      pr(() => {
        e -= 1, e === 0 && (r == null || r(), r = void 0, Sa(n));
      });
    })));
  };
}
var Ef = Hr | $i | ks;
function Sf(t, e, n) {
  new Af(t, e, n);
}
var Mn, Cn, Hs, Kn, $r, Xn, Tn, dn, Yn, Ar, ei, Cr, ti, Tr, xo, wo, rn, Cf, Tf, io, ao, ms;
class Af {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   */
  constructor(e, n, r) {
    rt(this, rn);
    /** @type {Boundary | null} */
    Ei(this, "parent");
    rt(this, Mn, !1);
    /** @type {TemplateNode} */
    rt(this, Cn);
    /** @type {TemplateNode | null} */
    rt(this, Hs, null);
    /** @type {BoundaryProps} */
    rt(this, Kn);
    /** @type {((anchor: Node) => void)} */
    rt(this, $r);
    /** @type {Effect} */
    rt(this, Xn);
    /** @type {Effect | null} */
    rt(this, Tn, null);
    /** @type {Effect | null} */
    rt(this, dn, null);
    /** @type {Effect | null} */
    rt(this, Yn, null);
    /** @type {DocumentFragment | null} */
    rt(this, Ar, null);
    rt(this, ei, 0);
    rt(this, Cr, 0);
    rt(this, ti, !1);
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    rt(this, Tr, null);
    rt(this, xo, () => {
      ue(this, Tr) && qi(ue(this, Tr), ue(this, ei));
    });
    rt(this, wo, If(() => (Fe(this, Tr, li(ue(this, ei))), () => {
      Fe(this, Tr, null);
    })));
    Fe(this, Cn, e), Fe(this, Kn, n), Fe(this, $r, r), this.parent = /** @type {Effect} */
    qe.b, Fe(this, Mn, !!ue(this, Kn).pending), Fe(this, Xn, Ur(() => {
      qe.b = this;
      {
        try {
          Fe(this, Tn, Xt(() => r(ue(this, Cn))));
        } catch (i) {
          this.error(i);
        }
        ue(this, Cr) > 0 ? Kt(this, rn, ao).call(this) : Fe(this, Mn, !1);
      }
    }, Ef));
  }
  /**
   * Returns `true` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_pending() {
    return ue(this, Mn) || !!this.parent && this.parent.is_pending();
  }
  has_pending_snippet() {
    return !!ue(this, Kn).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   */
  update_pending_count(e) {
    Kt(this, rn, ms).call(this, e), Fe(this, ei, ue(this, ei) + e), ds.add(ue(this, xo));
  }
  get_effect_pending() {
    return ue(this, wo).call(this), s(
      /** @type {Source<number>} */
      ue(this, Tr)
    );
  }
  /** @param {unknown} error */
  error(e) {
    var n = ue(this, Kn).onerror;
    let r = ue(this, Kn).failed;
    if (ue(this, ti) || !n && !r)
      throw e;
    ue(this, Tn) && (qt(ue(this, Tn)), Fe(this, Tn, null)), ue(this, dn) && (qt(ue(this, dn)), Fe(this, dn, null)), ue(this, Yn) && (qt(ue(this, Yn)), Fe(this, Yn, null));
    var i = !1, a = !1;
    const o = () => {
      if (i) {
        ff();
        return;
      }
      i = !0, a && cf(), mr.ensure(), Fe(this, ei, 0), ue(this, Yn) !== null && Dr(ue(this, Yn), () => {
        Fe(this, Yn, null);
      }), Fe(this, Mn, this.has_pending_snippet()), Fe(this, Tn, Kt(this, rn, io).call(this, () => (Fe(this, ti, !1), Xt(() => ue(this, $r).call(this, ue(this, Cn)))))), ue(this, Cr) > 0 ? Kt(this, rn, ao).call(this) : Fe(this, Mn, !1);
    };
    var u = We;
    try {
      fn(null), a = !0, n == null || n(e, o), a = !1;
    } catch (l) {
      Wi(l, ue(this, Xn) && ue(this, Xn).parent);
    } finally {
      fn(u);
    }
    r && pr(() => {
      Fe(this, Yn, Kt(this, rn, io).call(this, () => {
        Fe(this, ti, !0);
        try {
          return Xt(() => {
            r(
              ue(this, Cn),
              () => e,
              () => o
            );
          });
        } catch (l) {
          return Wi(
            l,
            /** @type {Effect} */
            ue(this, Xn).parent
          ), null;
        } finally {
          Fe(this, ti, !1);
        }
      }));
    });
  }
}
Mn = new WeakMap(), Cn = new WeakMap(), Hs = new WeakMap(), Kn = new WeakMap(), $r = new WeakMap(), Xn = new WeakMap(), Tn = new WeakMap(), dn = new WeakMap(), Yn = new WeakMap(), Ar = new WeakMap(), ei = new WeakMap(), Cr = new WeakMap(), ti = new WeakMap(), Tr = new WeakMap(), xo = new WeakMap(), wo = new WeakMap(), rn = new WeakSet(), Cf = function() {
  try {
    Fe(this, Tn, Xt(() => ue(this, $r).call(this, ue(this, Cn))));
  } catch (e) {
    this.error(e);
  }
  Fe(this, Mn, !1);
}, Tf = function() {
  const e = ue(this, Kn).pending;
  e && (Fe(this, dn, Xt(() => e(ue(this, Cn)))), mr.enqueue(() => {
    Fe(this, Tn, Kt(this, rn, io).call(this, () => (mr.ensure(), Xt(() => ue(this, $r).call(this, ue(this, Cn)))))), ue(this, Cr) > 0 ? Kt(this, rn, ao).call(this) : (Dr(
      /** @type {Effect} */
      ue(this, dn),
      () => {
        Fe(this, dn, null);
      }
    ), Fe(this, Mn, !1));
  }));
}, /**
 * @param {() => Effect | null} fn
 */
io = function(e) {
  var n = qe, r = We, i = ct;
  tr(ue(this, Xn)), fn(ue(this, Xn)), ji(ue(this, Xn).ctx);
  try {
    return e();
  } catch (a) {
    return Bu(a), null;
  } finally {
    tr(n), fn(r), ji(i);
  }
}, ao = function() {
  const e = (
    /** @type {(anchor: Node) => void} */
    ue(this, Kn).pending
  );
  ue(this, Tn) !== null && (Fe(this, Ar, document.createDocumentFragment()), xf(ue(this, Tn), ue(this, Ar))), ue(this, dn) === null && Fe(this, dn, Xt(() => e(ue(this, Cn))));
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 */
ms = function(e) {
  var n;
  if (!this.has_pending_snippet()) {
    this.parent && Kt(n = this.parent, rn, ms).call(n, e);
    return;
  }
  Fe(this, Cr, ue(this, Cr) + e), ue(this, Cr) === 0 && (Fe(this, Mn, !1), ue(this, dn) && Dr(ue(this, dn), () => {
    Fe(this, dn, null);
  }), ue(this, Ar) && (ue(this, Cn).before(ue(this, Ar)), Fe(this, Ar, null)), pr(() => {
    mr.ensure().flush();
  }));
};
function xf(t, e) {
  for (var n = t.nodes_start, r = t.nodes_end; n !== null; ) {
    var i = n === r ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Ua(n)
    );
    e.append(n), n = i;
  }
}
function qu(t, e, n) {
  const r = Ha() ? Na : Gs;
  if (e.length === 0) {
    n(t.map(r));
    return;
  }
  var i = lt, a = (
    /** @type {Effect} */
    qe
  ), o = wf();
  Promise.all(e.map((u) => /* @__PURE__ */ Lf(u))).then((u) => {
    o();
    try {
      n([...t.map(r), ...u]);
    } catch (l) {
      a.f & ci || Wi(l, a);
    }
    i == null || i.deactivate(), gs();
  }).catch((u) => {
    Wi(u, a);
  });
}
function wf() {
  var t = qe, e = We, n = ct, r = lt;
  return function() {
    tr(t), fn(e), ji(n), r == null || r.activate();
  };
}
function gs() {
  tr(null), fn(null), ji(null);
}
// @__NO_SIDE_EFFECTS__
function Na(t) {
  var e = an | bn, n = We !== null && We.f & an ? (
    /** @type {Derived} */
    We
  ) : null;
  return qe === null || n !== null && n.f & xn ? e |= xn : qe.f |= $i, {
    ctx: ct,
    deps: null,
    effects: null,
    equals: Nu,
    f: e,
    fn: t,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      Ft
    ),
    wv: 0,
    parent: n ?? qe,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function Lf(t, e) {
  let n = (
    /** @type {Effect | null} */
    qe
  );
  n === null && ef();
  var r = (
    /** @type {Boundary} */
    n.b
  ), i = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), a = li(
    /** @type {V} */
    Ft
  ), o = !We, u = /* @__PURE__ */ new Map();
  return kf(() => {
    var f;
    var l = Mu();
    i = l.promise;
    try {
      Promise.resolve(t()).then(l.resolve, l.reject).then(gs);
    } catch (g) {
      l.reject(g), gs();
    }
    var c = (
      /** @type {Batch} */
      lt
    ), d = r.is_pending();
    o && (r.update_pending_count(1), d || (c.increment(), (f = u.get(c)) == null || f.reject(Oi), u.delete(c), u.set(c, l)));
    const m = (g, h = void 0) => {
      if (d || c.activate(), h)
        h !== Oi && (a.f |= ni, qi(a, h));
      else {
        a.f & ni && (a.f ^= ni), qi(a, g);
        for (const [p, b] of u) {
          if (u.delete(p), p === c) break;
          b.reject(Oi);
        }
      }
      o && (r.update_pending_count(-1), d || c.decrement());
    };
    l.promise.then(m, (g) => m(null, g || "unknown"));
  }), Po(() => {
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
function he(t) {
  const e = /* @__PURE__ */ Na(t);
  return lc(e), e;
}
// @__NO_SIDE_EFFECTS__
function Gs(t) {
  const e = /* @__PURE__ */ Na(t);
  return e.equals = Uu, e;
}
function zu(t) {
  var e = t.effects;
  if (e !== null) {
    t.effects = null;
    for (var n = 0; n < e.length; n += 1)
      qt(
        /** @type {Effect} */
        e[n]
      );
  }
}
function Of(t) {
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
function js(t) {
  var e, n = qe;
  tr(Of(t));
  try {
    zu(t), e = fc(t);
  } finally {
    tr(n);
  }
  return e;
}
function Ku(t) {
  var e = js(t);
  if (t.equals(e) || (t.v = e, t.wv = cc()), !fi)
    if (Wt !== null)
      Wt.set(t, t.v);
    else {
      var n = (wr || t.f & xn) && t.deps !== null ? Pr : Zt;
      nn(t, n);
    }
}
const Rr = /* @__PURE__ */ new Map();
function li(t, e) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: t,
    reactions: null,
    equals: Nu,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function ve(t, e) {
  const n = li(t);
  return lc(n), n;
}
// @__NO_SIDE_EFFECTS__
function Xu(t, e = !1, n = !0) {
  var i;
  const r = li(t);
  return e || (r.equals = Uu), ea && n && ct !== null && ct.l !== null && ((i = ct.l).s ?? (i.s = [])).push(r), r;
}
function K(t, e, n = !1) {
  We !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Pn || We.f & gl) && Ha() && We.f & (an | Mr | Do | gl) && !(tn != null && tn.includes(t)) && uf();
  let r = n ? Ie(e) : e;
  return qi(t, r);
}
function qi(t, e) {
  if (!t.equals(e)) {
    var n = t.v;
    fi ? Rr.set(t, e) : Rr.set(t, n), t.v = e;
    var r = mr.ensure();
    r.capture(t, n), t.f & an && (t.f & bn && js(
      /** @type {Derived} */
      t
    ), nn(t, t.f & xn ? Pr : Zt)), t.wv = cc(), Yu(t, bn), Ha() && qe !== null && qe.f & Zt && !(qe.f & (_r | ui)) && (An === null ? Gf([t]) : An.push(t));
  }
  return e;
}
function Sa(t) {
  K(t, t.v + 1);
}
function Yu(t, e) {
  var n = t.reactions;
  if (n !== null)
    for (var r = Ha(), i = n.length, a = 0; a < i; a++) {
      var o = n[a], u = o.f;
      if (!(!r && o === qe)) {
        var l = (u & bn) === 0;
        l && nn(o, e), u & an ? Yu(
          /** @type {Derived} */
          o,
          Pr
        ) : l && (u & Mr && dr !== null && dr.push(
          /** @type {Effect} */
          o
        ), si(
          /** @type {Effect} */
          o
        ));
      }
    }
}
function Ie(t) {
  if (typeof t != "object" || t === null || $n in t)
    return t;
  const e = Us(t);
  if (e !== Yd && e !== Zd)
    return t;
  var n = /* @__PURE__ */ new Map(), r = Lo(t), i = /* @__PURE__ */ ve(0), a = ri, o = (u) => {
    if (ri === a)
      return u();
    var l = We, c = ri;
    fn(null), El(a);
    var d = u();
    return fn(l), El(c), d;
  };
  return r && n.set("length", /* @__PURE__ */ ve(
    /** @type {any[]} */
    t.length
  )), new Proxy(
    /** @type {any} */
    t,
    {
      defineProperty(u, l, c) {
        (!("value" in c) || c.configurable === !1 || c.enumerable === !1 || c.writable === !1) && sf();
        var d = n.get(l);
        return d === void 0 ? d = o(() => {
          var m = /* @__PURE__ */ ve(c.value);
          return n.set(l, m), m;
        }) : K(d, c.value, !0), !0;
      },
      deleteProperty(u, l) {
        var c = n.get(l);
        if (c === void 0) {
          if (l in u) {
            const d = o(() => /* @__PURE__ */ ve(Ft));
            n.set(l, d), Sa(i);
          }
        } else
          K(c, Ft), Sa(i);
        return !0;
      },
      get(u, l, c) {
        var g;
        if (l === $n)
          return t;
        var d = n.get(l), m = l in u;
        if (d === void 0 && (!m || (g = Or(u, l)) != null && g.writable) && (d = o(() => {
          var h = Ie(m ? u[l] : Ft), p = /* @__PURE__ */ ve(h);
          return p;
        }), n.set(l, d)), d !== void 0) {
          var f = s(d);
          return f === Ft ? void 0 : f;
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
          if (m !== void 0 && f !== Ft)
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
        var c = n.get(l), d = c !== void 0 && c.v !== Ft || Reflect.has(u, l);
        if (c !== void 0 || qe !== null && (!d || (f = Or(u, l)) != null && f.writable)) {
          c === void 0 && (c = o(() => {
            var g = d ? Ie(u[l]) : Ft, h = /* @__PURE__ */ ve(g);
            return h;
          }), n.set(l, c));
          var m = s(c);
          if (m === Ft)
            return !1;
        }
        return d;
      },
      set(u, l, c, d) {
        var I;
        var m = n.get(l), f = l in u;
        if (r && l === "length")
          for (var g = c; g < /** @type {Source<number>} */
          m.v; g += 1) {
            var h = n.get(g + "");
            h !== void 0 ? K(h, Ft) : g in u && (h = o(() => /* @__PURE__ */ ve(Ft)), n.set(g + "", h));
          }
        if (m === void 0)
          (!f || (I = Or(u, l)) != null && I.writable) && (m = o(() => /* @__PURE__ */ ve(void 0)), K(m, Ie(c)), n.set(l, m));
        else {
          f = m.v !== Ft;
          var p = o(() => Ie(c));
          K(m, p);
        }
        var b = Reflect.getOwnPropertyDescriptor(u, l);
        if (b != null && b.set && b.set.call(d, c), !f) {
          if (r && typeof l == "string") {
            var y = (
              /** @type {Source<number>} */
              n.get("length")
            ), A = Number(l);
            Number.isInteger(A) && A >= y.v && K(y, A + 1);
          }
          Sa(i);
        }
        return !0;
      },
      ownKeys(u) {
        s(i);
        var l = Reflect.ownKeys(u).filter((m) => {
          var f = n.get(m);
          return f === void 0 || f.v !== Ft;
        });
        for (var [c, d] of n)
          d.v !== Ft && !(c in u) && l.push(c);
        return l;
      },
      setPrototypeOf() {
        lf();
      }
    }
  );
}
function bl(t) {
  try {
    if (t !== null && typeof t == "object" && $n in t)
      return t[$n];
  } catch {
  }
  return t;
}
function Rf(t, e) {
  return Object.is(bl(t), bl(e));
}
var Ca, Ws, Zu, Qu, Ju;
function Df() {
  if (Ca === void 0) {
    Ca = window, Ws = document, Zu = /Firefox/.test(navigator.userAgent);
    var t = Element.prototype, e = Node.prototype, n = Text.prototype;
    Qu = Or(e, "firstChild").get, Ju = Or(e, "nextSibling").get, ml(t) && (t.__click = void 0, t.__className = void 0, t.__attributes = null, t.__style = void 0, t.__e = void 0), ml(n) && (n.__t = void 0);
  }
}
function Nr(t = "") {
  return document.createTextNode(t);
}
// @__NO_SIDE_EFFECTS__
function zi(t) {
  return Qu.call(t);
}
// @__NO_SIDE_EFFECTS__
function Ua(t) {
  return Ju.call(t);
}
function fe(t, e) {
  return /* @__PURE__ */ zi(t);
}
function X(t, e = !1) {
  {
    var n = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ zi(
        /** @type {Node} */
        t
      )
    );
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ Ua(n) : n;
  }
}
function _e(t, e = 1, n = !1) {
  let r = t;
  for (; e--; )
    r = /** @type {TemplateNode} */
    /* @__PURE__ */ Ua(r);
  return r;
}
function Mf(t) {
  t.textContent = "";
}
function qs() {
  return !1;
}
function Pf(t, e) {
  if (e) {
    const n = document.body;
    t.autofocus = !0, pr(() => {
      document.activeElement === n && t.focus();
    });
  }
}
let _l = !1;
function Hf() {
  _l || (_l = !0, document.addEventListener(
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
  var e = We, n = qe;
  fn(null), tr(null);
  try {
    return t();
  } finally {
    fn(e), tr(n);
  }
}
function $u(t, e, n, r = n) {
  t.addEventListener(e, () => ta(n));
  const i = t.__on_r;
  i ? t.__on_r = () => {
    i(), r(!0);
  } : t.__on_r = () => r(!0), Hf();
}
function ec(t) {
  qe === null && We === null && rf(), We !== null && We.f & xn && qe === null && nf(), fi && tf();
}
function Nf(t, e) {
  var n = e.last;
  n === null ? e.last = e.first = t : (n.next = t, t.prev = n, e.last = t);
}
function nr(t, e, n, r = !0) {
  var i = qe;
  i !== null && i.f & Fn && (t |= Fn);
  var a = {
    ctx: ct,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: t | bn,
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
      xa(a), a.f |= Ro;
    } catch (l) {
      throw qt(a), l;
    }
  else e !== null && si(a);
  if (r) {
    var o = a;
    if (n && o.deps === null && o.teardown === null && o.nodes_start === null && o.first === o.last && // either `null`, or a singular child
    !(o.f & $i) && (o = o.first), o !== null && (o.parent = i, i !== null && Nf(o, i), We !== null && We.f & an && !(t & ui))) {
      var u = (
        /** @type {Derived} */
        We
      );
      (u.effects ?? (u.effects = [])).push(o);
    }
  }
  return a;
}
function Uf() {
  return We !== null && !Pn;
}
function Po(t) {
  const e = nr(Oo, null, !1);
  return nn(e, Zt), e.teardown = t, e;
}
function Le(t) {
  ec();
  var e = (
    /** @type {Effect} */
    qe.f
  ), n = !We && (e & _r) !== 0 && (e & Ro) === 0;
  if (n) {
    var r = (
      /** @type {ComponentContext} */
      ct
    );
    (r.e ?? (r.e = [])).push(t);
  } else
    return tc(t);
}
function tc(t) {
  return nr(Fs | Pu, t, !1);
}
function nc(t) {
  return ec(), nr(Oo | Pu, t, !0);
}
function Ff(t) {
  mr.ensure();
  const e = nr(ui | $i, t, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? Dr(e, () => {
      qt(e), r(void 0);
    }) : (qt(e), r(void 0));
  });
}
function di(t) {
  return nr(Fs, t, !1);
}
function kf(t) {
  return nr(Do | $i, t, !0);
}
function Fa(t, e = 0) {
  return nr(Oo | e, t, !0);
}
function Oe(t, e = [], n = []) {
  qu(e, n, (r) => {
    nr(Oo, () => t(...r.map(s)), !0);
  });
}
function Ur(t, e = 0) {
  var n = nr(Mr | e, t, !0);
  return n;
}
function Xt(t, e = !0) {
  return nr(_r | $i, t, !0, e);
}
function rc(t) {
  var e = t.teardown;
  if (e !== null) {
    const n = fi, r = We;
    Il(!0), fn(null);
    try {
      e.call(null);
    } finally {
      Il(n), fn(r);
    }
  }
}
function ic(t, e = !1) {
  var n = t.first;
  for (t.first = t.last = null; n !== null; ) {
    const i = n.ac;
    i !== null && ta(() => {
      i.abort(Oi);
    });
    var r = n.next;
    n.f & ui ? n.parent = null : qt(n, e), n = r;
  }
}
function Bf(t) {
  for (var e = t.first; e !== null; ) {
    var n = e.next;
    e.f & _r || qt(e), e = n;
  }
}
function qt(t, e = !0) {
  var n = !1;
  (e || t.f & Jd) && t.nodes_start !== null && t.nodes_end !== null && (Vf(
    t.nodes_start,
    /** @type {TemplateNode} */
    t.nodes_end
  ), n = !0), ic(t, e && !n), ho(t, 0), nn(t, ci);
  var r = t.transitions;
  if (r !== null)
    for (const a of r)
      a.stop();
  rc(t);
  var i = t.parent;
  i !== null && i.first !== null && ac(t), t.next = t.prev = t.teardown = t.ctx = t.deps = t.fn = t.nodes_start = t.nodes_end = t.ac = null;
}
function Vf(t, e) {
  for (; t !== null; ) {
    var n = t === e ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Ua(t)
    );
    t.remove(), t = n;
  }
}
function ac(t) {
  var e = t.parent, n = t.prev, r = t.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), e !== null && (e.first === t && (e.first = r), e.last === t && (e.last = n));
}
function Dr(t, e) {
  var n = [];
  zs(t, n, !0), oc(n, () => {
    qt(t), e && e();
  });
}
function oc(t, e) {
  var n = t.length;
  if (n > 0) {
    var r = () => --n || e();
    for (var i of t)
      i.out(r);
  } else
    e();
}
function zs(t, e, n) {
  if (!(t.f & Fn)) {
    if (t.f ^= Fn, t.transitions !== null)
      for (const o of t.transitions)
        (o.is_global || n) && e.push(o);
    for (var r = t.first; r !== null; ) {
      var i = r.next, a = (r.f & Hr) !== 0 || (r.f & _r) !== 0;
      zs(r, e, a ? n : !1), r = i;
    }
  }
}
function Ho(t) {
  sc(t, !0);
}
function sc(t, e) {
  if (t.f & Fn) {
    t.f ^= Fn, t.f & Zt || (nn(t, bn), si(t));
    for (var n = t.first; n !== null; ) {
      var r = n.next, i = (n.f & Hr) !== 0 || (n.f & _r) !== 0;
      sc(n, i ? e : !1), n = r;
    }
    if (t.transitions !== null)
      for (const a of t.transitions)
        (a.is_global || e) && a.in();
  }
}
let Pi = !1;
function yl(t) {
  Pi = t;
}
let fi = !1;
function Il(t) {
  fi = t;
}
let We = null, Pn = !1;
function fn(t) {
  We = t;
}
let qe = null;
function tr(t) {
  qe = t;
}
let tn = null;
function lc(t) {
  We !== null && (tn === null ? tn = [t] : tn.push(t));
}
let en = null, gn = 0, An = null;
function Gf(t) {
  An = t;
}
let uc = 1, Ta = 0, ri = Ta;
function El(t) {
  ri = t;
}
let wr = !1;
function cc() {
  return ++uc;
}
function No(t) {
  var m;
  var e = t.f;
  if (e & bn)
    return !0;
  if (e & Pr) {
    var n = t.deps, r = (e & xn) !== 0;
    if (n !== null) {
      var i, a, o = (e & fo) !== 0, u = r && qe !== null && !wr, l = n.length;
      if ((o || u) && (qe === null || !(qe.f & ci))) {
        var c = (
          /** @type {Derived} */
          t
        ), d = c.parent;
        for (i = 0; i < l; i++)
          a = n[i], (o || !((m = a == null ? void 0 : a.reactions) != null && m.includes(c))) && (a.reactions ?? (a.reactions = [])).push(c);
        o && (c.f ^= fo), u && d !== null && !(d.f & xn) && (c.f ^= xn);
      }
      for (i = 0; i < l; i++)
        if (a = n[i], No(
          /** @type {Derived} */
          a
        ) && Ku(
          /** @type {Derived} */
          a
        ), a.wv > t.wv)
          return !0;
    }
    (!r || qe !== null && !wr) && nn(t, Zt);
  }
  return !1;
}
function dc(t, e, n = !0) {
  var r = t.reactions;
  if (r !== null && !(tn != null && tn.includes(t)))
    for (var i = 0; i < r.length; i++) {
      var a = r[i];
      a.f & an ? dc(
        /** @type {Derived} */
        a,
        e,
        !1
      ) : e === a && (n ? nn(a, bn) : a.f & Zt && nn(a, Pr), si(
        /** @type {Effect} */
        a
      ));
    }
}
function fc(t) {
  var p;
  var e = en, n = gn, r = An, i = We, a = wr, o = tn, u = ct, l = Pn, c = ri, d = t.f;
  en = /** @type {null | Value[]} */
  null, gn = 0, An = null, wr = (d & xn) !== 0 && (Pn || !Pi || We === null), We = d & (_r | ui) ? null : t, tn = null, ji(t.ctx), Pn = !1, ri = ++Ta, t.ac !== null && (ta(() => {
    t.ac.abort(Oi);
  }), t.ac = null);
  try {
    t.f |= cs;
    var m = (
      /** @type {Function} */
      t.fn
    ), f = m(), g = t.deps;
    if (en !== null) {
      var h;
      if (ho(t, gn), g !== null && gn > 0)
        for (g.length = gn + en.length, h = 0; h < en.length; h++)
          g[gn + h] = en[h];
      else
        t.deps = g = en;
      if (!wr || // Deriveds that already have reactions can cleanup, so we still add them as reactions
      d & an && /** @type {import('#client').Derived} */
      t.reactions !== null)
        for (h = gn; h < g.length; h++)
          ((p = g[h]).reactions ?? (p.reactions = [])).push(t);
    } else g !== null && gn < g.length && (ho(t, gn), g.length = gn);
    if (Ha() && An !== null && !Pn && g !== null && !(t.f & (an | Pr | bn)))
      for (h = 0; h < /** @type {Source[]} */
      An.length; h++)
        dc(
          An[h],
          /** @type {Effect} */
          t
        );
    return i !== null && i !== t && (Ta++, An !== null && (r === null ? r = An : r.push(.../** @type {Source[]} */
    An))), t.f & ni && (t.f ^= ni), f;
  } catch (b) {
    return Bu(b);
  } finally {
    t.f ^= cs, en = e, gn = n, An = r, We = i, wr = a, tn = o, ji(u), Pn = l, ri = c;
  }
}
function jf(t, e) {
  let n = e.reactions;
  if (n !== null) {
    var r = Xd.call(n, t);
    if (r !== -1) {
      var i = n.length - 1;
      i === 0 ? n = e.reactions = null : (n[r] = n[i], n.pop());
    }
  }
  n === null && e.f & an && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (en === null || !en.includes(e)) && (nn(e, Pr), e.f & (xn | fo) || (e.f ^= fo), zu(
    /** @type {Derived} **/
    e
  ), ho(
    /** @type {Derived} **/
    e,
    0
  ));
}
function ho(t, e) {
  var n = t.deps;
  if (n !== null)
    for (var r = e; r < n.length; r++)
      jf(t, n[r]);
}
function xa(t) {
  var e = t.f;
  if (!(e & ci)) {
    nn(t, Zt);
    var n = qe, r = Pi;
    qe = t, Pi = !0;
    try {
      e & Mr ? Bf(t) : ic(t), rc(t);
      var i = fc(t);
      t.teardown = typeof i == "function" ? i : null, t.wv = uc;
      var a;
      Ru && vf && t.f & bn && t.deps;
    } finally {
      Pi = r, qe = n;
    }
  }
}
async function hc() {
  await Promise.resolve(), _f();
}
function s(t) {
  var e = t.f, n = (e & an) !== 0;
  if (We !== null && !Pn) {
    var r = qe !== null && (qe.f & ci) !== 0;
    if (!r && !(tn != null && tn.includes(t))) {
      var i = We.deps;
      if (We.f & cs)
        t.rv < Ta && (t.rv = Ta, en === null && i !== null && i[gn] === t ? gn++ : en === null ? en = [t] : (!wr || !en.includes(t)) && en.push(t));
      else {
        (We.deps ?? (We.deps = [])).push(t);
        var a = t.reactions;
        a === null ? t.reactions = [We] : a.includes(We) || a.push(We);
      }
    }
  } else if (n && /** @type {Derived} */
  t.deps === null && /** @type {Derived} */
  t.effects === null) {
    var o = (
      /** @type {Derived} */
      t
    ), u = o.parent;
    u !== null && !(u.f & xn) && (o.f ^= xn);
  }
  if (fi) {
    if (Rr.has(t))
      return Rr.get(t);
    if (n) {
      o = /** @type {Derived} */
      t;
      var l = o.v;
      return (!(o.f & Zt) && o.reactions !== null || vc(o)) && (l = js(o)), Rr.set(o, l), l;
    }
  } else if (n) {
    if (o = /** @type {Derived} */
    t, Wt != null && Wt.has(o))
      return Wt.get(o);
    No(o) && Ku(o);
  }
  if (Wt != null && Wt.has(t))
    return Wt.get(t);
  if (t.f & ni)
    throw t.v;
  return t.v;
}
function vc(t) {
  if (t.v === Ft) return !0;
  if (t.deps === null) return !1;
  for (const e of t.deps)
    if (Rr.has(e) || e.f & an && vc(
      /** @type {Derived} */
      e
    ))
      return !0;
  return !1;
}
function Gn(t) {
  var e = Pn;
  try {
    return Pn = !0, t();
  } finally {
    Pn = e;
  }
}
const Wf = -7169;
function nn(t, e) {
  t.f = t.f & Wf | e;
}
function mc(t) {
  if (!(typeof t != "object" || !t || t instanceof EventTarget)) {
    if ($n in t)
      ps(t);
    else if (!Array.isArray(t))
      for (let e in t) {
        const n = t[e];
        typeof n == "object" && n && $n in n && ps(n);
      }
  }
}
function ps(t, e = /* @__PURE__ */ new Set()) {
  if (typeof t == "object" && t !== null && // We don't want to traverse DOM elements
  !(t instanceof EventTarget) && !e.has(t)) {
    e.add(t), t instanceof Date && t.getTime();
    for (let r in t)
      try {
        ps(t[r], e);
      } catch {
      }
    const n = Us(t);
    if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
      const r = Du(n);
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
const gc = /* @__PURE__ */ new Set(), bs = /* @__PURE__ */ new Set();
function Ks(t, e, n, r = {}) {
  function i(a) {
    if (r.capture || ya.call(e, a), !a.cancelBubble)
      return ta(() => n == null ? void 0 : n.call(this, a));
  }
  return t.startsWith("pointer") || t.startsWith("touch") || t === "wheel" ? pr(() => {
    e.addEventListener(t, i, r);
  }) : e.addEventListener(t, i, r), i;
}
function qf(t, e, n, r = {}) {
  var i = Ks(e, t, n, r);
  return () => {
    t.removeEventListener(e, i, r);
  };
}
function Jn(t, e, n, r, i) {
  var a = { capture: r, passive: i }, o = Ks(t, e, n, a);
  (e === document.body || // @ts-ignore
  e === window || // @ts-ignore
  e === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  e instanceof HTMLMediaElement) && Po(() => {
    e.removeEventListener(t, o, a);
  });
}
function yn(t) {
  for (var e = 0; e < t.length; e++)
    gc.add(t[e]);
  for (var n of bs)
    n(t);
}
let Sl = null;
function ya(t) {
  var A;
  var e = this, n = (
    /** @type {Node} */
    e.ownerDocument
  ), r = t.type, i = ((A = t.composedPath) == null ? void 0 : A.call(t)) || [], a = (
    /** @type {null | Element} */
    i[0] || t.target
  );
  Sl = t;
  var o = 0, u = Sl === t && t.__root;
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
    uo(t, "currentTarget", {
      configurable: !0,
      get() {
        return a || n;
      }
    });
    var d = We, m = qe;
    fn(null), tr(null);
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
            if (Lo(p)) {
              var [b, ...y] = p;
              b.apply(a, [t, ...y]);
            } else
              p.call(a, t);
        } catch (I) {
          f ? g.push(I) : f = I;
        }
        if (t.cancelBubble || h === e || h === null)
          break;
        a = h;
      }
      if (f) {
        for (let I of g)
          queueMicrotask(() => {
            throw I;
          });
        throw f;
      }
    } finally {
      t.__root = e, delete t.currentTarget, fn(d), tr(m);
    }
  }
}
function pc(t) {
  var e = document.createElement("template");
  return e.innerHTML = t.replaceAll("<!>", "<!---->"), e.content;
}
function Ki(t, e) {
  var n = (
    /** @type {Effect} */
    qe
  );
  n.nodes_start === null && (n.nodes_start = t, n.nodes_end = e);
}
// @__NO_SIDE_EFFECTS__
function de(t, e) {
  var n = (e & 1) !== 0, r = (e & 2) !== 0, i, a = !t.startsWith("<!>");
  return () => {
    i === void 0 && (i = pc(a ? t : "<!>" + t), n || (i = /** @type {Node} */
    /* @__PURE__ */ zi(i)));
    var o = (
      /** @type {TemplateNode} */
      r || Zu ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (n) {
      var u = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ zi(o)
      ), l = (
        /** @type {TemplateNode} */
        o.lastChild
      );
      Ki(u, l);
    } else
      Ki(o, o);
    return o;
  };
}
// @__NO_SIDE_EFFECTS__
function zf(t, e, n = "svg") {
  var r = !t.startsWith("<!>"), i = `<${n}>${r ? t : "<!>" + t}</${n}>`, a;
  return () => {
    if (!a) {
      var o = (
        /** @type {DocumentFragment} */
        pc(i)
      ), u = (
        /** @type {Element} */
        /* @__PURE__ */ zi(o)
      );
      a = /** @type {Element} */
      /* @__PURE__ */ zi(u);
    }
    var l = (
      /** @type {TemplateNode} */
      a.cloneNode(!0)
    );
    return Ki(l, l), l;
  };
}
// @__NO_SIDE_EFFECTS__
function Rt(t, e) {
  return /* @__PURE__ */ zf(t, e, "svg");
}
function vt(t = "") {
  {
    var e = Nr(t + "");
    return Ki(e, e), e;
  }
}
function ne() {
  var t = document.createDocumentFragment(), e = document.createComment(""), n = Nr();
  return t.append(e, n), Ki(e, n), t;
}
function x(t, e) {
  t !== null && t.before(
    /** @type {Node} */
    e
  );
}
function Kf(t) {
  return t.endsWith("capture") && t !== "gotpointercapture" && t !== "lostpointercapture";
}
const Xf = [
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
function Yf(t) {
  return Xf.includes(t);
}
const Zf = {
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
function Qf(t) {
  return t = t.toLowerCase(), Zf[t] ?? t;
}
const Jf = ["touchstart", "touchmove"];
function $f(t) {
  return Jf.includes(t);
}
let vo = !0;
function Al(t) {
  vo = t;
}
function $e(t, e) {
  var n = e == null ? "" : typeof e == "object" ? e + "" : e;
  n !== (t.__t ?? (t.__t = t.nodeValue)) && (t.__t = n, t.nodeValue = n + "");
}
function eh(t, e) {
  return th(t, e);
}
const Si = /* @__PURE__ */ new Map();
function th(t, { target: e, anchor: n, props: r = {}, events: i, context: a, intro: o = !0 }) {
  Df();
  var u = /* @__PURE__ */ new Set(), l = (m) => {
    for (var f = 0; f < m.length; f++) {
      var g = m[f];
      if (!u.has(g)) {
        u.add(g);
        var h = $f(g);
        e.addEventListener(g, ya, { passive: h });
        var p = Si.get(g);
        p === void 0 ? (document.addEventListener(g, ya, { passive: h }), Si.set(g, 1)) : Si.set(g, p + 1);
      }
    }
  };
  l(Ns(gc)), bs.add(l);
  var c = void 0, d = Ff(() => {
    var m = n ?? e.appendChild(Nr());
    return Sf(
      /** @type {TemplateNode} */
      m,
      {
        pending: () => {
        }
      },
      (f) => {
        if (a) {
          Te({});
          var g = (
            /** @type {ComponentContext} */
            ct
          );
          g.c = a;
        }
        i && (r.$$events = i), vo = o, c = t(f, r) || {}, vo = !0, a && xe();
      }
    ), () => {
      var h;
      for (var f of u) {
        e.removeEventListener(f, ya);
        var g = (
          /** @type {number} */
          Si.get(f)
        );
        --g === 0 ? (document.removeEventListener(f, ya), Si.delete(f)) : Si.set(f, g);
      }
      bs.delete(l), m !== n && ((h = m.parentNode) == null || h.removeChild(m));
    };
  });
  return nh.set(c, d), c;
}
let nh = /* @__PURE__ */ new WeakMap();
function Ae(t, e, ...n) {
  var r = t, i = me, a;
  Ur(() => {
    i !== (i = e()) && (a && (qt(a), a = null), a = Xt(() => (
      /** @type {SnippetFn} */
      i(r, ...n)
    )));
  }, Hr);
}
function at(t) {
  ct === null && Bs(), ea && ct.l !== null ? rh(ct).m.push(t) : Le(() => {
    const e = Gn(t);
    if (typeof e == "function") return (
      /** @type {() => void} */
      e
    );
  });
}
function In(t) {
  ct === null && Bs(), at(() => () => Gn(t));
}
function rh(t) {
  var e = (
    /** @type {ComponentContextLegacy} */
    t.l
  );
  return e.u ?? (e.u = { a: [], b: [], m: [] });
}
function oe(t, e, n = !1) {
  var r = t, i = null, a = null, o = Ft, u = n ? Hr : 0, l = !1;
  const c = (g, h = !0) => {
    l = !0, f(h, g);
  };
  var d = null;
  function m() {
    d !== null && (d.lastChild.remove(), r.before(d), d = null);
    var g = o ? i : a, h = o ? a : i;
    g && Ho(g), h && Dr(h, () => {
      o ? a = null : i = null;
    });
  }
  const f = (g, h) => {
    if (o !== (o = g)) {
      var p = qs(), b = r;
      if (p && (d = document.createDocumentFragment(), d.append(b = Nr())), o ? i ?? (i = h && Xt(() => h(b))) : a ?? (a = h && Xt(() => h(b))), p) {
        var y = (
          /** @type {Batch} */
          lt
        ), A = o ? i : a, I = o ? a : i;
        A && y.skipped_effects.delete(A), I && y.skipped_effects.add(I), y.add_callback(m);
      } else
        m();
    }
  };
  Ur(() => {
    l = !1, e(c), l || f(null, null);
  }, u);
}
let ii = null;
function Cl(t) {
  ii = t;
}
function Ri(t, e) {
  return e;
}
function ih(t, e, n) {
  for (var r = t.items, i = [], a = e.length, o = 0; o < a; o++)
    zs(e[o].e, i, !0);
  var u = a > 0 && i.length === 0 && n !== null;
  if (u) {
    var l = (
      /** @type {Element} */
      /** @type {Element} */
      n.parentNode
    );
    Mf(l), l.append(
      /** @type {Element} */
      n
    ), r.clear(), zn(t, e[0].prev, e[a - 1].next);
  }
  oc(i, () => {
    for (var c = 0; c < a; c++) {
      var d = e[c];
      u || (r.delete(d.k), zn(t, d.prev, d.next)), qt(d.e, !u);
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
    o = c.appendChild(Nr());
  }
  var d = null, m = !1, f = /* @__PURE__ */ new Map(), g = /* @__PURE__ */ Gs(() => {
    var y = n();
    return Lo(y) ? y : y == null ? [] : Ns(y);
  }), h, p;
  function b() {
    ah(
      p,
      h,
      u,
      f,
      o,
      i,
      e,
      r,
      n
    ), a !== null && (h.length === 0 ? d ? Ho(d) : d = Xt(() => a(o)) : d !== null && Dr(d, () => {
      d = null;
    }));
  }
  Ur(() => {
    p ?? (p = /** @type {Effect} */
    qe), h = /** @type {V[]} */
    s(g);
    var y = h.length;
    if (!(m && y === 0)) {
      m = y === 0;
      var A, I, _, S;
      if (qs()) {
        var E = /* @__PURE__ */ new Set(), L = (
          /** @type {Batch} */
          lt
        );
        for (I = 0; I < y; I += 1) {
          _ = h[I], S = r(_, I);
          var T = u.items.get(S) ?? f.get(S);
          T ? e & 3 && bc(T, _, I, e) : (A = _c(
            null,
            u,
            null,
            null,
            _,
            S,
            I,
            i,
            e,
            n,
            !0
          ), f.set(S, A)), E.add(S);
        }
        for (const [w, k] of u.items)
          E.has(w) || L.skipped_effects.add(k.e);
        L.add_callback(b);
      } else
        b();
      s(g);
    }
  });
}
function ah(t, e, n, r, i, a, o, u, l) {
  var te, H, D, O;
  var c = (o & 8) !== 0, d = (o & 3) !== 0, m = e.length, f = n.items, g = n.first, h = g, p, b = null, y, A = [], I = [], _, S, E, L;
  if (c)
    for (L = 0; L < m; L += 1)
      _ = e[L], S = u(_, L), E = f.get(S), E !== void 0 && ((te = E.a) == null || te.measure(), (y ?? (y = /* @__PURE__ */ new Set())).add(E));
  for (L = 0; L < m; L += 1) {
    if (_ = e[L], S = u(_, L), E = f.get(S), E === void 0) {
      var T = r.get(S);
      if (T !== void 0) {
        r.delete(S), f.set(S, T);
        var w = b ? b.next : h;
        zn(n, b, T), zn(n, T, w), jo(T, w, i), b = T;
      } else {
        var k = h ? (
          /** @type {TemplateNode} */
          h.e.nodes_start
        ) : i;
        b = _c(
          k,
          n,
          b,
          b === null ? n.first : b.next,
          _,
          S,
          L,
          a,
          o,
          l
        );
      }
      f.set(S, b), A = [], I = [], h = b.next;
      continue;
    }
    if (d && bc(E, _, L, o), E.e.f & Fn && (Ho(E.e), c && ((H = E.a) == null || H.unfix(), (y ?? (y = /* @__PURE__ */ new Set())).delete(E))), E !== h) {
      if (p !== void 0 && p.has(E)) {
        if (A.length < I.length) {
          var Z = I[0], G;
          b = Z.prev;
          var q = A[0], R = A[A.length - 1];
          for (G = 0; G < A.length; G += 1)
            jo(A[G], Z, i);
          for (G = 0; G < I.length; G += 1)
            p.delete(I[G]);
          zn(n, q.prev, R.next), zn(n, b, q), zn(n, R, Z), h = Z, b = R, L -= 1, A = [], I = [];
        } else
          p.delete(E), jo(E, h, i), zn(n, E.prev, E.next), zn(n, E, b === null ? n.first : b.next), zn(n, b, E), b = E;
        continue;
      }
      for (A = [], I = []; h !== null && h.k !== S; )
        h.e.f & Fn || (p ?? (p = /* @__PURE__ */ new Set())).add(h), I.push(h), h = h.next;
      if (h === null)
        continue;
      E = h;
    }
    A.push(E), b = E, h = E.next;
  }
  if (h !== null || p !== void 0) {
    for (var C = p === void 0 ? [] : Ns(p); h !== null; )
      h.e.f & Fn || C.push(h), h = h.next;
    var F = C.length;
    if (F > 0) {
      var U = o & 4 && m === 0 ? i : null;
      if (c) {
        for (L = 0; L < F; L += 1)
          (D = C[L].a) == null || D.measure();
        for (L = 0; L < F; L += 1)
          (O = C[L].a) == null || O.fix();
      }
      ih(n, C, U);
    }
  }
  c && pr(() => {
    var le;
    if (y !== void 0)
      for (E of y)
        (le = E.a) == null || le.apply();
  }), t.first = n.first && n.first.e, t.last = b && b.e;
  for (var z of r.values())
    qt(z.e);
  r.clear();
}
function bc(t, e, n, r) {
  r & 1 && qi(t.v, e), r & 2 ? qi(
    /** @type {Value<number>} */
    t.i,
    n
  ) : t.i = n;
}
function _c(t, e, n, r, i, a, o, u, l, c, d) {
  var m = ii, f = (l & 1) !== 0, g = (l & 16) === 0, h = f ? g ? /* @__PURE__ */ Xu(i, !1, !1) : li(i) : i, p = l & 2 ? li(o) : o, b = {
    i: p,
    v: h,
    k: a,
    a: null,
    // @ts-expect-error
    e: null,
    prev: n,
    next: r
  };
  ii = b;
  try {
    if (t === null) {
      var y = document.createDocumentFragment();
      y.append(t = Nr());
    }
    return b.e = Xt(() => u(
      /** @type {Node} */
      t,
      h,
      p,
      c
    ), hf), b.e.prev = n && n.e, b.e.next = r && r.e, n === null ? d || (e.first = b) : (n.next = b, n.e.next = b.e), r !== null && (r.prev = b, r.e.prev = b.e), b;
  } finally {
    ii = m;
  }
}
function jo(t, e, n) {
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
      /* @__PURE__ */ Ua(a)
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
    a && (Dr(a), a = null), o && (o.lastChild.remove(), r.before(o), o = null), a = u, u = null;
  }
  Ur(() => {
    if (i !== (i = e())) {
      var c = qs();
      if (i) {
        var d = r;
        c && (o = document.createDocumentFragment(), o.append(d = Nr()), a && lt.skipped_effects.add(a)), u = Xt(() => n(d, i));
      }
      c ? lt.add_callback(l) : l();
    }
  }, Hr);
}
function Tl(t, e, n, r, i, a) {
  var o, u, l = null, c = (
    /** @type {TemplateNode} */
    t
  ), d, m = ii;
  Ur(() => {
    const f = e() || null;
    var g = f === "svg" ? zd : null;
    if (f !== o) {
      var h = ii;
      Cl(m), d && (f === null ? Dr(d, () => {
        d = null, u = null;
      }) : f === u ? Ho(d) : (qt(d), Al(!1))), f && f !== u && (d = Xt(() => {
        if (l = g ? document.createElementNS(g, f) : document.createElement(f), Ki(l, l), r) {
          var p = (
            /** @type {TemplateNode} */
            l.appendChild(Nr())
          );
          r(l, p);
        }
        qe.nodes_end = l, c.before(l);
      })), o = f, o && (u = o), Al(!0), Cl(h);
    }
  }, Hr);
}
function Pe(t, e, n) {
  di(() => {
    var r = Gn(() => e(t, n == null ? void 0 : n()) || {});
    if (n && (r != null && r.update)) {
      var i = !1, a = (
        /** @type {any} */
        {}
      );
      Fa(() => {
        var o = n();
        mc(o), i && Vs(a, o) && (a = o, r.update(o));
      }), i = !0;
    }
    if (r != null && r.destroy)
      return () => (
        /** @type {Function} */
        r.destroy()
      );
  });
}
function oh(t, e) {
  var n = void 0, r;
  Ur(() => {
    n !== (n = e()) && (r && (qt(r), r = null), n && (r = Xt(() => {
      di(() => (
        /** @type {(node: Element) => void} */
        n(t)
      ));
    })));
  });
}
function yc(t) {
  var e, n, r = "";
  if (typeof t == "string" || typeof t == "number") r += t;
  else if (typeof t == "object") if (Array.isArray(t)) {
    var i = t.length;
    for (e = 0; e < i; e++) t[e] && (n = yc(t[e])) && (r && (r += " "), r += n);
  } else for (n in t) t[n] && (r && (r += " "), r += n);
  return r;
}
function sh() {
  for (var t, e, n = 0, r = "", i = arguments.length; n < i; n++) (t = arguments[n]) && (e = yc(t)) && (r && (r += " "), r += e);
  return r;
}
function Ic(t) {
  return typeof t == "object" ? sh(t) : t ?? "";
}
const xl = [...` 	
\r\f \v\uFEFF`];
function lh(t, e, n) {
  var r = t == null ? "" : "" + t;
  if (e && (r = r ? r + " " + e : e), n) {
    for (var i in n)
      if (n[i])
        r = r ? r + " " + i : i;
      else if (r.length)
        for (var a = i.length, o = 0; (o = r.indexOf(i, o)) >= 0; ) {
          var u = o + a;
          (o === 0 || xl.includes(r[o - 1])) && (u === r.length || xl.includes(r[u])) ? r = (o === 0 ? "" : r.substring(0, o)) + r.substring(u + 1) : o = u;
        }
  }
  return r === "" ? null : r;
}
function wl(t, e = !1) {
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
function uh(t, e) {
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
    return r && (n += wl(r)), i && (n += wl(i, !0)), n = n.trim(), n === "" ? null : n;
  }
  return t == null ? null : String(t);
}
function Xs(t, e, n, r, i, a) {
  var o = t.__className;
  if (o !== n || o === void 0) {
    var u = lh(n, r, a);
    u == null ? t.removeAttribute("class") : e ? t.className = u : t.setAttribute("class", u), t.__className = n;
  } else if (a && i !== a)
    for (var l in a) {
      var c = !!a[l];
      (i == null || c !== !!i[l]) && t.classList.toggle(l, c);
    }
  return a;
}
function qo(t, e = {}, n, r) {
  for (var i in n) {
    var a = n[i];
    e[i] !== a && (n[i] == null ? t.style.removeProperty(i) : t.style.setProperty(i, a, r));
  }
}
function bt(t, e, n, r) {
  var i = t.__style;
  if (i !== e) {
    var a = uh(e, r);
    a == null ? t.removeAttribute("style") : t.style.cssText = a, t.__style = e;
  } else r && (Array.isArray(r) ? (qo(t, n == null ? void 0 : n[0], r[0]), qo(t, n == null ? void 0 : n[1], r[1], "important")) : qo(t, n, r));
  return r;
}
function _s(t, e, n = !1) {
  if (t.multiple) {
    if (e == null)
      return;
    if (!Lo(e))
      return df();
    for (var r of t.options)
      r.selected = e.includes(Ll(r));
    return;
  }
  for (r of t.options) {
    var i = Ll(r);
    if (Rf(i, e)) {
      r.selected = !0;
      return;
    }
  }
  (!n || e !== void 0) && (t.selectedIndex = -1);
}
function ch(t) {
  var e = new MutationObserver(() => {
    _s(t, t.__value);
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
  }), Po(() => {
    e.disconnect();
  });
}
function Ll(t) {
  return "__value" in t ? t.__value : t.value;
}
const ca = Symbol("class"), da = Symbol("style"), Ec = Symbol("is custom element"), Sc = Symbol("is html");
function Ol(t, e) {
  var n = Ys(t);
  n.value === (n.value = // treat null and undefined the same for the initial value
  e ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  t.value === e && (e !== 0 || t.nodeName !== "PROGRESS") || (t.value = e ?? "");
}
function dh(t, e) {
  e ? t.hasAttribute("selected") || t.setAttribute("selected", "") : t.removeAttribute("selected");
}
function gr(t, e, n, r) {
  var i = Ys(t);
  i[e] !== (i[e] = n) && (e === "loading" && (t[$d] = n), n == null ? t.removeAttribute(e) : typeof n != "string" && Ac(t).includes(e) ? t[e] = n : t.setAttribute(e, n));
}
function fh(t, e, n, r, i = !1, a = !1) {
  var o = Ys(t), u = o[Ec], l = !o[Sc], c = e || {}, d = t.tagName === "OPTION";
  for (var m in e)
    m in n || (n[m] = null);
  n.class ? n.class = Ic(n.class) : n[ca] && (n.class = null), n[da] && (n.style ?? (n.style = null));
  var f = Ac(t);
  for (const I in n) {
    let _ = n[I];
    if (d && I === "value" && _ == null) {
      t.value = t.__value = "", c[I] = _;
      continue;
    }
    if (I === "class") {
      var g = t.namespaceURI === "http://www.w3.org/1999/xhtml";
      Xs(t, g, _, r, e == null ? void 0 : e[ca], n[ca]), c[I] = _, c[ca] = n[ca];
      continue;
    }
    if (I === "style") {
      bt(t, _, e == null ? void 0 : e[da], n[da]), c[I] = _, c[da] = n[da];
      continue;
    }
    var h = c[I];
    if (!(_ === h && !(_ === void 0 && t.hasAttribute(I)))) {
      c[I] = _;
      var p = I[0] + I[1];
      if (p !== "$$")
        if (p === "on") {
          const S = {}, E = "$$" + I;
          let L = I.slice(2);
          var b = Yf(L);
          if (Kf(L) && (L = L.slice(0, -7), S.capture = !0), !b && h) {
            if (_ != null) continue;
            t.removeEventListener(L, c[E], S), c[E] = null;
          }
          if (_ != null)
            if (b)
              t[`__${L}`] = _, yn([L]);
            else {
              let T = function(w) {
                c[I].call(this, w);
              };
              c[E] = Ks(L, t, T, S);
            }
          else b && (t[`__${L}`] = void 0);
        } else if (I === "style")
          gr(t, I, _);
        else if (I === "autofocus")
          Pf(
            /** @type {HTMLElement} */
            t,
            !!_
          );
        else if (!u && (I === "__value" || I === "value" && _ != null))
          t.value = t.__value = _;
        else if (I === "selected" && d)
          dh(
            /** @type {HTMLOptionElement} */
            t,
            _
          );
        else {
          var y = I;
          l || (y = Qf(y));
          var A = y === "defaultValue" || y === "defaultChecked";
          if (_ == null && !u && !A)
            if (o[I] = null, y === "value" || y === "checked") {
              let S = (
                /** @type {HTMLInputElement} */
                t
              );
              const E = e === void 0;
              if (y === "value") {
                let L = S.defaultValue;
                S.removeAttribute(y), S.defaultValue = L, S.value = S.__value = E ? L : null;
              } else {
                let L = S.defaultChecked;
                S.removeAttribute(y), S.defaultChecked = L, S.checked = E ? L : !1;
              }
            } else
              t.removeAttribute(I);
          else A || f.includes(y) && (u || typeof _ != "string") ? (t[y] = _, y in o && (o[y] = Ft)) : typeof _ != "function" && gr(t, y, _);
        }
    }
  }
  return c;
}
function Ne(t, e, n = [], r = [], i, a = !1, o = !1) {
  qu(n, r, (u) => {
    var l = void 0, c = {}, d = t.nodeName === "SELECT", m = !1;
    if (Ur(() => {
      var g = e(...u.map(s)), h = fh(
        t,
        l,
        g,
        i,
        a,
        o
      );
      m && d && "value" in g && _s(
        /** @type {HTMLSelectElement} */
        t,
        g.value
      );
      for (let b of Object.getOwnPropertySymbols(c))
        g[b] || qt(c[b]);
      for (let b of Object.getOwnPropertySymbols(g)) {
        var p = g[b];
        b.description === Kd && (!l || p !== l[b]) && (c[b] && qt(c[b]), c[b] = Xt(() => oh(t, () => p))), h[b] = p;
      }
      l = h;
    }), d) {
      var f = (
        /** @type {HTMLSelectElement} */
        t
      );
      di(() => {
        _s(
          f,
          /** @type {Record<string | symbol, any>} */
          l.value,
          !0
        ), ch(f);
      });
    }
    m = !0;
  });
}
function Ys(t) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    t.__attributes ?? (t.__attributes = {
      [Ec]: t.nodeName.includes("-"),
      [Sc]: t.namespaceURI === qd
    })
  );
}
var Rl = /* @__PURE__ */ new Map();
function Ac(t) {
  var e = t.getAttribute("is") || t.nodeName, n = Rl.get(e);
  if (n) return n;
  Rl.set(e, n = []);
  for (var r, i = t, a = Element.prototype; a !== i; ) {
    r = Du(i);
    for (var o in r)
      r[o].set && n.push(o);
    i = Us(i);
  }
  return n;
}
const hh = () => performance.now(), hr = {
  // don't access requestAnimationFrame eagerly outside method
  // this allows basic testing of user code without JSDOM
  // bunder will eval and remove ternary when the user's app is built
  tick: (
    /** @param {any} _ */
    (t) => requestAnimationFrame(t)
  ),
  now: () => hh(),
  tasks: /* @__PURE__ */ new Set()
};
function Cc() {
  const t = hr.now();
  hr.tasks.forEach((e) => {
    e.c(t) || (hr.tasks.delete(e), e.f());
  }), hr.tasks.size !== 0 && hr.tick(Cc);
}
function vh(t) {
  let e;
  return hr.tasks.size === 0 && hr.tick(Cc), {
    promise: new Promise((n) => {
      hr.tasks.add(e = { c: t, f: n });
    }),
    abort() {
      hr.tasks.delete(e);
    }
  };
}
function qa(t, e) {
  ta(() => {
    t.dispatchEvent(new CustomEvent(e));
  });
}
function mh(t) {
  if (t === "float") return "cssFloat";
  if (t === "offset") return "cssOffset";
  if (t.startsWith("--")) return t;
  const e = t.split("-");
  return e.length === 1 ? e[0] : e[0] + e.slice(1).map(
    /** @param {any} word */
    (n) => n[0].toUpperCase() + n.slice(1)
  ).join("");
}
function Dl(t) {
  const e = {}, n = t.split(";");
  for (const r of n) {
    const [i, a] = r.split(":");
    if (!i || a === void 0) break;
    const o = mh(i.trim());
    e[o] = a.trim();
  }
  return e;
}
const gh = (t) => t;
function ph(t, e, n) {
  var r = (
    /** @type {EachItem} */
    ii
  ), i, a, o, u = null;
  r.a ?? (r.a = {
    element: t,
    measure() {
      i = this.element.getBoundingClientRect();
    },
    apply() {
      if (o == null || o.abort(), a = this.element.getBoundingClientRect(), i.left !== a.left || i.right !== a.right || i.top !== a.top || i.bottom !== a.bottom) {
        const l = e()(this.element, { from: i, to: a }, n == null ? void 0 : n());
        o = go(this.element, l, void 0, 1, () => {
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
function mo(t, e, n, r) {
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
      var I;
      if (e.inert = d, !i) {
        g == null || g.abort(), (I = g == null ? void 0 : g.reset) == null || I.call(g);
        return;
      }
      a || f == null || f.abort(), qa(e, "introstart"), f = go(e, h(), g, 1, () => {
        qa(e, "introend"), f == null || f.abort(), f = c = void 0, e.style.overflow = m;
      });
    },
    out(I) {
      if (!a) {
        I == null || I(), c = void 0;
        return;
      }
      e.inert = !0, qa(e, "outrostart"), g = go(e, h(), f, 0, () => {
        qa(e, "outroend"), I == null || I();
      });
    },
    stop: () => {
      f == null || f.abort(), g == null || g.abort();
    }
  }, b = (
    /** @type {Effect} */
    qe
  );
  if ((b.transitions ?? (b.transitions = [])).push(p), i && vo) {
    var y = u;
    if (!y) {
      for (var A = (
        /** @type {Effect | null} */
        b.parent
      ); A && A.f & Hr; )
        for (; (A = A.parent) && !(A.f & Mr); )
          ;
      y = !A || (A.f & Ro) !== 0;
    }
    y && di(() => {
      Gn(() => p.in());
    });
  }
}
function go(t, e, n, r, i) {
  var a = r === 1;
  if (Li(e)) {
    var o, u = !1;
    return pr(() => {
      if (!u) {
        var b = e({ direction: a ? "in" : "out" });
        o = go(t, b, n, r, i);
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
      abort: me,
      deactivate: me,
      reset: me,
      t: () => r
    };
  const { delay: l = 0, css: c, tick: d, easing: m = gh } = e;
  var f = [];
  if (a && n === void 0 && (d && d(0, 1), c)) {
    var g = Dl(c(0, 1));
    f.push(g, g);
  }
  var h = () => 1 - r, p = t.animate(f, { duration: l, fill: "forwards" });
  return p.onfinish = () => {
    p.cancel();
    var b = (n == null ? void 0 : n.t()) ?? 1 - r;
    n == null || n.abort();
    var y = r - b, A = (
      /** @type {number} */
      e.duration * Math.abs(y)
    ), I = [];
    if (A > 0) {
      var _ = !1;
      if (c)
        for (var S = Math.ceil(A / 16.666666666666668), E = 0; E <= S; E += 1) {
          var L = b + y * m(E / S), T = Dl(c(L, 1 - L));
          I.push(T), _ || (_ = T.overflow === "hidden");
        }
      _ && (t.style.overflow = "hidden"), h = () => {
        var w = (
          /** @type {number} */
          /** @type {globalThis.Animation} */
          p.currentTime
        );
        return b + y * m(w / A);
      }, d && vh(() => {
        if (p.playState !== "running") return !1;
        var w = h();
        return d(w, 1 - w), !0;
      });
    }
    p = t.animate(I, { duration: A, fill: "forwards" }), p.onfinish = () => {
      h = () => r, d == null || d(r, 1 - r), i();
    };
  }, {
    abort: () => {
      p && (p.cancel(), p.effect = null, p.onfinish = me);
    },
    deactivate: () => {
      i = me;
    },
    reset: () => {
      r === 0 && (d == null || d(1, 0));
    },
    t: () => h()
  };
}
function wa(t, e, n = e) {
  var r = /* @__PURE__ */ new WeakSet();
  $u(t, "input", async (i) => {
    var a = i ? t.defaultValue : t.value;
    if (a = zo(t) ? Ko(a) : a, n(a), lt !== null && r.add(lt), await hc(), a !== (a = e())) {
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
  Gn(e) == null && t.value && (n(zo(t) ? Ko(t.value) : t.value), lt !== null && r.add(lt)), Fa(() => {
    var i = e();
    if (t === document.activeElement) {
      var a = (
        /** @type {Batch} */
        no ?? lt
      );
      if (r.has(a))
        return;
    }
    zo(t) && i === Ko(t.value) || t.type === "date" && !i && !t.value || i !== t.value && (t.value = i ?? "");
  });
}
function bh(t, e, n = e) {
  $u(t, "change", (r) => {
    var i = r ? t.defaultChecked : t.checked;
    n(i);
  }), // If we are hydrating and the value has since changed,
  // then use the update value from the input instead.
  // If defaultChecked is set, then checked == defaultChecked
  Gn(e) == null && n(t.checked), Fa(() => {
    var r = e();
    t.checked = !!r;
  });
}
function zo(t) {
  var e = t.type;
  return e === "number" || e === "range";
}
function Ko(t) {
  return t === "" ? null : +t;
}
function Ml(t, e) {
  return t === e || (t == null ? void 0 : t[$n]) === e;
}
function Ce(t = {}, e, n, r) {
  return di(() => {
    var i, a;
    return Fa(() => {
      i = a, a = (r == null ? void 0 : r()) || [], Gn(() => {
        t !== n(...a) && (e(t, ...a), i && Ml(n(...i), t) && e(null, ...i));
      });
    }), () => {
      pr(() => {
        a && Ml(n(...a), t) && e(null, ...a);
      });
    };
  }), t;
}
function _h(t = !1) {
  const e = (
    /** @type {ComponentContextLegacy} */
    ct
  ), n = e.l.u;
  if (!n) return;
  let r = () => mc(e.s);
  if (t) {
    let i = 0, a = (
      /** @type {Record<string, any>} */
      {}
    );
    const o = /* @__PURE__ */ Na(() => {
      let u = !1;
      const l = e.s;
      for (const c in l)
        l[c] !== a[c] && (a[c] = l[c], u = !0);
      return u && i++, i;
    });
    r = () => s(o);
  }
  n.b.length && nc(() => {
    Pl(e, r), co(n.b);
  }), Le(() => {
    const i = Gn(() => n.m.map(Qd));
    return () => {
      for (const a of i)
        typeof a == "function" && a();
    };
  }), n.a.length && Le(() => {
    Pl(e, r), co(n.a);
  });
}
function Pl(t, e) {
  if (t.l.s)
    for (const n of t.l.s) s(n);
  e();
}
function Zs(t, e, n) {
  if (t == null)
    return e(void 0), n && n(void 0), me;
  const r = Gn(
    () => t.subscribe(
      e,
      // @ts-expect-error
      n
    )
  );
  return r.unsubscribe ? () => r.unsubscribe() : r;
}
const Ai = [];
function yh(t, e) {
  return {
    subscribe: Bt(t, e).subscribe
  };
}
function Bt(t, e = me) {
  let n = null;
  const r = /* @__PURE__ */ new Set();
  function i(u) {
    if (Vs(t, u) && (t = u, n)) {
      const l = !Ai.length;
      for (const c of r)
        c[1](), Ai.push(c, t);
      if (l) {
        for (let c = 0; c < Ai.length; c += 2)
          Ai[c][0](Ai[c + 1]);
        Ai.length = 0;
      }
    }
  }
  function a(u) {
    i(u(
      /** @type {T} */
      t
    ));
  }
  function o(u, l = me) {
    const c = [u, l];
    return r.add(c), r.size === 1 && (n = e(i, a) || me), u(
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
  return yh(n, (o, u) => {
    let l = !1;
    const c = [];
    let d = 0, m = me;
    const f = () => {
      if (d)
        return;
      m();
      const h = e(r ? c[0] : c, o, u);
      a ? o(h) : m = typeof h == "function" ? h : me;
    }, g = i.map(
      (h, p) => Zs(
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
      co(g), m(), l = !1;
    };
  });
}
function Tc(t) {
  let e;
  return Zs(t, (n) => e = n)(), e;
}
let za = !1, ys = Symbol();
function kn(t, e, n) {
  const r = n[e] ?? (n[e] = {
    store: null,
    source: /* @__PURE__ */ Xu(void 0),
    unsubscribe: me
  });
  if (r.store !== t && !(ys in n))
    if (r.unsubscribe(), r.store = t ?? null, t == null)
      r.source.v = void 0, r.unsubscribe = me;
    else {
      var i = !0;
      r.unsubscribe = Zs(t, (a) => {
        i ? r.source.v = a : K(r.source, a);
      }), i = !1;
    }
  return t && ys in n ? Tc(t) : s(r.source);
}
function Nn(t, e) {
  return t.set(e), e;
}
function ir() {
  const t = {};
  function e() {
    Po(() => {
      for (var n in t)
        t[n].unsubscribe();
      uo(t, ys, {
        enumerable: !1,
        value: !0
      });
    });
  }
  return [t, e];
}
function Ih(t) {
  var e = za;
  try {
    return za = !1, [t(), za];
  } finally {
    za = e;
  }
}
const Eh = {
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
    Eh
  );
}
const Sh = {
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
      const a = Or(i, e);
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
        const i = Or(r, e);
        return i && !i.configurable && (i.configurable = !0), i;
      }
    }
  },
  has(t, e) {
    if (e === $n || e === Hu) return !1;
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
  return new Proxy({ props: t }, Sh);
}
function v(t, e, n, r) {
  var I;
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
    var m = $n in t || Hu in t;
    d = ((I = Or(t, e)) == null ? void 0 : I.set) ?? (m && e in t ? (_) => t[e] = _ : void 0);
  }
  var f, g = !1;
  a ? [f, g] = Ih(() => (
    /** @type {V} */
    t[e]
  )) : f = /** @type {V} */
  t[e], f === void 0 && r !== void 0 && (f = c(), d && (i && of(), d(f)));
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
      function(_, S) {
        return arguments.length > 0 ? ((!i || !S || p || g) && d(S ? h() : _), _) : h();
      }
    );
  }
  var b = !1, y = (n & 1 ? Na : Gs)(() => (b = !1, h()));
  a && s(y);
  var A = (
    /** @type {Effect} */
    qe
  );
  return (
    /** @type {() => V} */
    function(_, S) {
      if (arguments.length > 0) {
        const E = S ? s(y) : i && a ? Ie(_) : _;
        return K(y, E), b = !0, u !== void 0 && (u = E), _;
      }
      return fi && b || A.f & ci ? y.v : s(y);
    }
  );
}
const Ah = "5";
var Ou;
typeof window < "u" && ((Ou = window.__svelte ?? (window.__svelte = {})).v ?? (Ou.v = /* @__PURE__ */ new Set())).add(Ah);
function Ch(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var Th = function(e) {
  return xh(e) && !wh(e);
};
function xh(t) {
  return !!t && typeof t == "object";
}
function wh(t) {
  var e = Object.prototype.toString.call(t);
  return e === "[object RegExp]" || e === "[object Date]" || Rh(t);
}
var Lh = typeof Symbol == "function" && Symbol.for, Oh = Lh ? Symbol.for("react.element") : 60103;
function Rh(t) {
  return t.$$typeof === Oh;
}
function Dh(t) {
  return Array.isArray(t) ? [] : {};
}
function La(t, e) {
  return e.clone !== !1 && e.isMergeableObject(t) ? Xi(Dh(t), t, e) : t;
}
function Mh(t, e, n) {
  return t.concat(e).map(function(r) {
    return La(r, n);
  });
}
function Ph(t, e) {
  if (!e.customMerge)
    return Xi;
  var n = e.customMerge(t);
  return typeof n == "function" ? n : Xi;
}
function Hh(t) {
  return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(t).filter(function(e) {
    return Object.propertyIsEnumerable.call(t, e);
  }) : [];
}
function Hl(t) {
  return Object.keys(t).concat(Hh(t));
}
function xc(t, e) {
  try {
    return e in t;
  } catch {
    return !1;
  }
}
function Nh(t, e) {
  return xc(t, e) && !(Object.hasOwnProperty.call(t, e) && Object.propertyIsEnumerable.call(t, e));
}
function Uh(t, e, n) {
  var r = {};
  return n.isMergeableObject(t) && Hl(t).forEach(function(i) {
    r[i] = La(t[i], n);
  }), Hl(e).forEach(function(i) {
    Nh(t, i) || (xc(t, i) && n.isMergeableObject(e[i]) ? r[i] = Ph(i, n)(t[i], e[i], n) : r[i] = La(e[i], n));
  }), r;
}
function Xi(t, e, n) {
  n = n || {}, n.arrayMerge = n.arrayMerge || Mh, n.isMergeableObject = n.isMergeableObject || Th, n.cloneUnlessOtherwiseSpecified = La;
  var r = Array.isArray(e), i = Array.isArray(t), a = r === i;
  return a ? r ? n.arrayMerge(t, e, n) : Uh(t, e, n) : La(e, n);
}
Xi.all = function(e, n) {
  if (!Array.isArray(e))
    throw new Error("first argument should be an array");
  return e.reduce(function(r, i) {
    return Xi(r, i, n);
  }, {});
};
var Fh = Xi, kh = Fh;
const Bh = /* @__PURE__ */ Ch(kh);
var Is = function(t, e) {
  return Is = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, r) {
    n.__proto__ = r;
  } || function(n, r) {
    for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (n[i] = r[i]);
  }, Is(t, e);
};
function ze(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  Is(t, e);
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
function Vh(t, e) {
  var n = {};
  for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(t); i < r.length; i++)
      e.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[i]) && (n[r[i]] = t[r[i]]);
  return n;
}
function wc(t, e, n, r) {
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
function Qs(t, e) {
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
function kt(t) {
  var e = typeof Symbol == "function" && Symbol.iterator, n = e && t[e], r = 0;
  if (n) return n.call(t);
  if (t && typeof t.length == "number") return {
    next: function() {
      return t && r >= t.length && (t = void 0), { value: t && t[r++], done: !t };
    }
  };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function br(t, e) {
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
function Hi(t) {
  return this instanceof Hi ? (this.v = t, this) : new Hi(t);
}
function Gh(t, e, n) {
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
    g.value instanceof Hi ? Promise.resolve(g.value.v).then(d, m) : f(a[0][2], g);
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
function jh(t) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var e = t[Symbol.asyncIterator], n;
  return e ? e.call(t) : (t = typeof kt == "function" ? kt(t) : t[Symbol.iterator](), n = {}, r("next"), r("throw"), r("return"), n[Symbol.asyncIterator] = function() {
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
function Xo(t, e) {
  var n = e && e.cache ? e.cache : Zh, r = e && e.serializer ? e.serializer : Xh, i = e && e.strategy ? e.strategy : zh;
  return i(t, {
    cache: n,
    serializer: r
  });
}
function Wh(t) {
  return t == null || typeof t == "number" || typeof t == "boolean";
}
function qh(t, e, n, r) {
  var i = Wh(r) ? r : n(r), a = e.get(i);
  return typeof a > "u" && (a = t.call(this, r), e.set(i, a)), a;
}
function Lc(t, e, n) {
  var r = Array.prototype.slice.call(arguments, 3), i = n(r), a = e.get(i);
  return typeof a > "u" && (a = t.apply(this, r), e.set(i, a)), a;
}
function Oc(t, e, n, r, i) {
  return n.bind(e, t, r, i);
}
function zh(t, e) {
  var n = t.length === 1 ? qh : Lc;
  return Oc(t, this, n, e.cache.create(), e.serializer);
}
function Kh(t, e) {
  return Oc(t, this, Lc, e.cache.create(), e.serializer);
}
var Xh = function() {
  return JSON.stringify(arguments);
}, Yh = (
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
), Zh = {
  create: function() {
    return new Yh();
  }
}, Yo = {
  variadic: Kh
}, Ze;
(function(t) {
  t[t.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", t[t.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", t[t.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", t[t.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", t[t.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", t[t.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", t[t.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", t[t.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", t[t.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", t[t.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", t[t.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", t[t.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", t[t.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", t[t.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", t[t.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", t[t.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", t[t.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", t[t.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", t[t.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", t[t.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", t[t.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", t[t.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", t[t.INVALID_TAG = 23] = "INVALID_TAG", t[t.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", t[t.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", t[t.UNCLOSED_TAG = 27] = "UNCLOSED_TAG";
})(Ze || (Ze = {}));
var pt;
(function(t) {
  t[t.literal = 0] = "literal", t[t.argument = 1] = "argument", t[t.number = 2] = "number", t[t.date = 3] = "date", t[t.time = 4] = "time", t[t.select = 5] = "select", t[t.plural = 6] = "plural", t[t.pound = 7] = "pound", t[t.tag = 8] = "tag";
})(pt || (pt = {}));
var Yi;
(function(t) {
  t[t.number = 0] = "number", t[t.dateTime = 1] = "dateTime";
})(Yi || (Yi = {}));
function Nl(t) {
  return t.type === pt.literal;
}
function Qh(t) {
  return t.type === pt.argument;
}
function Rc(t) {
  return t.type === pt.number;
}
function Dc(t) {
  return t.type === pt.date;
}
function Mc(t) {
  return t.type === pt.time;
}
function Pc(t) {
  return t.type === pt.select;
}
function Hc(t) {
  return t.type === pt.plural;
}
function Jh(t) {
  return t.type === pt.pound;
}
function Nc(t) {
  return t.type === pt.tag;
}
function Uc(t) {
  return !!(t && typeof t == "object" && t.type === Yi.number);
}
function Es(t) {
  return !!(t && typeof t == "object" && t.type === Yi.dateTime);
}
var Fc = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/, $h = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
function ev(t) {
  var e = {};
  return t.replace($h, function(n) {
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
var tv = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
function nv(t) {
  if (t.length === 0)
    throw new Error("Number skeleton cannot be empty");
  for (var e = t.split(tv).filter(function(f) {
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
function rv(t) {
  return t.replace(/^(.*?)-/, "");
}
var Ul = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g, kc = /^(@+)?(\+|#+)?[rs]?$/g, iv = /(\*)(0+)|(#+)(0+)|(0+)/g, Bc = /^(0+)$/;
function Fl(t) {
  var e = {};
  return t[t.length - 1] === "r" ? e.roundingPriority = "morePrecision" : t[t.length - 1] === "s" && (e.roundingPriority = "lessPrecision"), t.replace(kc, function(n, r, i) {
    return typeof i != "string" ? (e.minimumSignificantDigits = r.length, e.maximumSignificantDigits = r.length) : i === "+" ? e.minimumSignificantDigits = r.length : r[0] === "#" ? e.maximumSignificantDigits = r.length : (e.minimumSignificantDigits = r.length, e.maximumSignificantDigits = r.length + (typeof i == "string" ? i.length : 0)), "";
  }), e;
}
function Vc(t) {
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
function av(t) {
  var e;
  if (t[0] === "E" && t[1] === "E" ? (e = {
    notation: "engineering"
  }, t = t.slice(2)) : t[0] === "E" && (e = {
    notation: "scientific"
  }, t = t.slice(1)), e) {
    var n = t.slice(0, 2);
    if (n === "+!" ? (e.signDisplay = "always", t = t.slice(2)) : n === "+?" && (e.signDisplay = "exceptZero", t = t.slice(2)), !Bc.test(t))
      throw new Error("Malformed concise eng/scientific notation");
    e.minimumIntegerDigits = t.length;
  }
  return e;
}
function kl(t) {
  var e = {}, n = Vc(t);
  return n || e;
}
function ov(t) {
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
        e.style = "unit", e.unit = rv(i.options[0]);
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
          return be(be({}, l), kl(c));
        }, {}));
        continue;
      case "engineering":
        e = be(be(be({}, e), { notation: "engineering" }), i.options.reduce(function(l, c) {
          return be(be({}, l), kl(c));
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
        i.options[0].replace(iv, function(l, c, d, m, f, g) {
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
    if (Bc.test(i.stem)) {
      e.minimumIntegerDigits = i.stem.length;
      continue;
    }
    if (Ul.test(i.stem)) {
      if (i.options.length > 1)
        throw new RangeError("Fraction-precision stems only accept a single optional option");
      i.stem.replace(Ul, function(l, c, d, m, f, g) {
        return d === "*" ? e.minimumFractionDigits = c.length : m && m[0] === "#" ? e.maximumFractionDigits = m.length : f && g ? (e.minimumFractionDigits = f.length, e.maximumFractionDigits = f.length + g.length) : (e.minimumFractionDigits = c.length, e.maximumFractionDigits = c.length), "";
      });
      var a = i.options[0];
      a === "w" ? e = be(be({}, e), { trailingZeroDisplay: "stripIfInteger" }) : a && (e = be(be({}, e), Fl(a)));
      continue;
    }
    if (kc.test(i.stem)) {
      e = be(be({}, e), Fl(i.stem));
      continue;
    }
    var o = Vc(i.stem);
    o && (e = be(be({}, e), o));
    var u = av(i.stem);
    u && (e = be(be({}, e), u));
  }
  return e;
}
var Ka = {
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
function sv(t, e) {
  for (var n = "", r = 0; r < t.length; r++) {
    var i = t.charAt(r);
    if (i === "j") {
      for (var a = 0; r + 1 < t.length && t.charAt(r + 1) === i; )
        a++, r++;
      var o = 1 + (a & 1), u = a < 2 ? 1 : 3 + (a >> 1), l = "a", c = lv(e);
      for ((c == "H" || c == "k") && (u = 0); u-- > 0; )
        n += l;
      for (; o-- > 0; )
        n = c + n;
    } else i === "J" ? n += "H" : n += i;
  }
  return n;
}
function lv(t) {
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
  var i = Ka[r || ""] || Ka[n || ""] || Ka["".concat(n, "-001")] || Ka["001"];
  return i[0];
}
var Zo, uv = new RegExp("^".concat(Fc.source, "*")), cv = new RegExp("".concat(Fc.source, "*$"));
function Qe(t, e) {
  return { start: t, end: e };
}
var dv = !!String.prototype.startsWith && "_a".startsWith("a", 1), fv = !!String.fromCodePoint, hv = !!Object.fromEntries, vv = !!String.prototype.codePointAt, mv = !!String.prototype.trimStart, gv = !!String.prototype.trimEnd, pv = !!Number.isSafeInteger, bv = pv ? Number.isSafeInteger : function(t) {
  return typeof t == "number" && isFinite(t) && Math.floor(t) === t && Math.abs(t) <= 9007199254740991;
}, Ss = !0;
try {
  var _v = jc("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  Ss = ((Zo = _v.exec("a")) === null || Zo === void 0 ? void 0 : Zo[0]) === "a";
} catch {
  Ss = !1;
}
var Bl = dv ? (
  // Native
  function(e, n, r) {
    return e.startsWith(n, r);
  }
) : (
  // For IE11
  function(e, n, r) {
    return e.slice(r, r + n.length) === n;
  }
), As = fv ? String.fromCodePoint : (
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
), Vl = (
  // native
  hv ? Object.fromEntries : (
    // Ponyfill
    function(e) {
      for (var n = {}, r = 0, i = e; r < i.length; r++) {
        var a = i[r], o = a[0], u = a[1];
        n[o] = u;
      }
      return n;
    }
  )
), Gc = vv ? (
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
), yv = mv ? (
  // Native
  function(e) {
    return e.trimStart();
  }
) : (
  // Ponyfill
  function(e) {
    return e.replace(uv, "");
  }
), Iv = gv ? (
  // Native
  function(e) {
    return e.trimEnd();
  }
) : (
  // Ponyfill
  function(e) {
    return e.replace(cv, "");
  }
);
function jc(t, e) {
  return new RegExp(t, e);
}
var Cs;
if (Ss) {
  var Gl = jc("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  Cs = function(e, n) {
    var r;
    Gl.lastIndex = n;
    var i = Gl.exec(e);
    return (r = i[1]) !== null && r !== void 0 ? r : "";
  };
} else
  Cs = function(e, n) {
    for (var r = []; ; ) {
      var i = Gc(e, n);
      if (i === void 0 || Wc(i) || Cv(i))
        break;
      r.push(i), n += i >= 65536 ? 2 : 1;
    }
    return As.apply(void 0, r);
  };
var Ev = (
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
              type: pt.pound,
              location: Qe(u, this.clonePosition())
            });
          } else if (a === 60 && !this.ignoreTag && this.peek() === 47) {
            if (r)
              break;
            return this.error(Ze.UNMATCHED_CLOSING_TAG, Qe(this.clonePosition(), this.clonePosition()));
          } else if (a === 60 && !this.ignoreTag && Ts(this.peek() || 0)) {
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
            type: pt.literal,
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
          if (this.isEOF() || !Ts(this.char()))
            return this.error(Ze.INVALID_TAG, Qe(u, this.clonePosition()));
          var l = this.clonePosition(), c = this.parseTagName();
          return i !== c ? this.error(Ze.UNMATCHED_CLOSING_TAG, Qe(l, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
            val: {
              type: pt.tag,
              value: i,
              children: o,
              location: Qe(r, this.clonePosition())
            },
            err: null
          } : this.error(Ze.INVALID_TAG, Qe(u, this.clonePosition())));
        } else
          return this.error(Ze.UNCLOSED_TAG, Qe(r, this.clonePosition()));
      } else
        return this.error(Ze.INVALID_TAG, Qe(r, this.clonePosition()));
    }, t.prototype.parseTagName = function() {
      var e = this.offset();
      for (this.bump(); !this.isEOF() && Av(this.char()); )
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
        val: { type: pt.literal, value: i, location: l },
        err: null
      };
    }, t.prototype.tryParseLeftAngleBracket = function() {
      return !this.isEOF() && this.char() === 60 && (this.ignoreTag || // If at the opening tag or closing tag position, bail.
      !Sv(this.peek() || 0)) ? (this.bump(), "<") : null;
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
      return As.apply(void 0, n);
    }, t.prototype.tryParseUnquoted = function(e, n) {
      if (this.isEOF())
        return null;
      var r = this.char();
      return r === 60 || r === 123 || r === 35 && (n === "plural" || n === "selectordinal") || r === 125 && e > 0 ? null : (this.bump(), As(r));
    }, t.prototype.parseArgument = function(e, n) {
      var r = this.clonePosition();
      if (this.bump(), this.bumpSpace(), this.isEOF())
        return this.error(Ze.EXPECT_ARGUMENT_CLOSING_BRACE, Qe(r, this.clonePosition()));
      if (this.char() === 125)
        return this.bump(), this.error(Ze.EMPTY_ARGUMENT, Qe(r, this.clonePosition()));
      var i = this.parseIdentifierIfPossible().value;
      if (!i)
        return this.error(Ze.MALFORMED_ARGUMENT, Qe(r, this.clonePosition()));
      if (this.bumpSpace(), this.isEOF())
        return this.error(Ze.EXPECT_ARGUMENT_CLOSING_BRACE, Qe(r, this.clonePosition()));
      switch (this.char()) {
        case 125:
          return this.bump(), {
            val: {
              type: pt.argument,
              // value does not include the opening and closing braces.
              value: i,
              location: Qe(r, this.clonePosition())
            },
            err: null
          };
        case 44:
          return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(Ze.EXPECT_ARGUMENT_CLOSING_BRACE, Qe(r, this.clonePosition())) : this.parseArgumentOptions(e, n, i, r);
        default:
          return this.error(Ze.MALFORMED_ARGUMENT, Qe(r, this.clonePosition()));
      }
    }, t.prototype.parseIdentifierIfPossible = function() {
      var e = this.clonePosition(), n = this.offset(), r = Cs(this.message, n), i = n + r.length;
      this.bumpTo(i);
      var a = this.clonePosition(), o = Qe(e, a);
      return { value: r, location: o };
    }, t.prototype.parseArgumentOptions = function(e, n, r, i) {
      var a, o = this.clonePosition(), u = this.parseIdentifierIfPossible().value, l = this.clonePosition();
      switch (u) {
        case "":
          return this.error(Ze.EXPECT_ARGUMENT_TYPE, Qe(o, l));
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
            var f = Iv(m.val);
            if (f.length === 0)
              return this.error(Ze.EXPECT_ARGUMENT_STYLE, Qe(this.clonePosition(), this.clonePosition()));
            var g = Qe(d, this.clonePosition());
            c = { style: f, styleLocation: g };
          }
          var h = this.tryParseArgumentClose(i);
          if (h.err)
            return h;
          var p = Qe(i, this.clonePosition());
          if (c && Bl(c == null ? void 0 : c.style, "::", 0)) {
            var b = yv(c.style.slice(2));
            if (u === "number") {
              var m = this.parseNumberSkeletonFromString(b, c.styleLocation);
              return m.err ? m : {
                val: { type: pt.number, value: r, location: p, style: m.val },
                err: null
              };
            } else {
              if (b.length === 0)
                return this.error(Ze.EXPECT_DATE_TIME_SKELETON, p);
              var y = b;
              this.locale && (y = sv(b, this.locale));
              var f = {
                type: Yi.dateTime,
                pattern: y,
                location: c.styleLocation,
                parsedOptions: this.shouldParseSkeletons ? ev(y) : {}
              }, A = u === "date" ? pt.date : pt.time;
              return {
                val: { type: A, value: r, location: p, style: f },
                err: null
              };
            }
          }
          return {
            val: {
              type: u === "number" ? pt.number : u === "date" ? pt.date : pt.time,
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
          var I = this.clonePosition();
          if (this.bumpSpace(), !this.bumpIf(","))
            return this.error(Ze.EXPECT_SELECT_ARGUMENT_OPTIONS, Qe(I, be({}, I)));
          this.bumpSpace();
          var _ = this.parseIdentifierIfPossible(), S = 0;
          if (u !== "select" && _.value === "offset") {
            if (!this.bumpIf(":"))
              return this.error(Ze.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, Qe(this.clonePosition(), this.clonePosition()));
            this.bumpSpace();
            var m = this.tryParseDecimalInteger(Ze.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, Ze.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);
            if (m.err)
              return m;
            this.bumpSpace(), _ = this.parseIdentifierIfPossible(), S = m.val;
          }
          var E = this.tryParsePluralOrSelectOptions(e, u, n, _);
          if (E.err)
            return E;
          var h = this.tryParseArgumentClose(i);
          if (h.err)
            return h;
          var L = Qe(i, this.clonePosition());
          return u === "select" ? {
            val: {
              type: pt.select,
              value: r,
              options: Vl(E.val),
              location: L
            },
            err: null
          } : {
            val: {
              type: pt.plural,
              value: r,
              options: Vl(E.val),
              offset: S,
              pluralType: u === "plural" ? "cardinal" : "ordinal",
              location: L
            },
            err: null
          };
        }
        default:
          return this.error(Ze.INVALID_ARGUMENT_TYPE, Qe(o, l));
      }
    }, t.prototype.tryParseArgumentClose = function(e) {
      return this.isEOF() || this.char() !== 125 ? this.error(Ze.EXPECT_ARGUMENT_CLOSING_BRACE, Qe(e, this.clonePosition())) : (this.bump(), { val: !0, err: null });
    }, t.prototype.parseSimpleArgStyleIfPossible = function() {
      for (var e = 0, n = this.clonePosition(); !this.isEOF(); ) {
        var r = this.char();
        switch (r) {
          case 39: {
            this.bump();
            var i = this.clonePosition();
            if (!this.bumpUntil("'"))
              return this.error(Ze.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, Qe(i, this.clonePosition()));
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
        r = nv(e);
      } catch {
        return this.error(Ze.INVALID_NUMBER_SKELETON, n);
      }
      return {
        val: {
          type: Yi.number,
          tokens: r,
          location: n,
          parsedOptions: this.shouldParseSkeletons ? ov(r) : {}
        },
        err: null
      };
    }, t.prototype.tryParsePluralOrSelectOptions = function(e, n, r, i) {
      for (var a, o = !1, u = [], l = /* @__PURE__ */ new Set(), c = i.value, d = i.location; ; ) {
        if (c.length === 0) {
          var m = this.clonePosition();
          if (n !== "select" && this.bumpIf("=")) {
            var f = this.tryParseDecimalInteger(Ze.EXPECT_PLURAL_ARGUMENT_SELECTOR, Ze.INVALID_PLURAL_ARGUMENT_SELECTOR);
            if (f.err)
              return f;
            d = Qe(m, this.clonePosition()), c = this.message.slice(m.offset, this.offset());
          } else
            break;
        }
        if (l.has(c))
          return this.error(n === "select" ? Ze.DUPLICATE_SELECT_ARGUMENT_SELECTOR : Ze.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, d);
        c === "other" && (o = !0), this.bumpSpace();
        var g = this.clonePosition();
        if (!this.bumpIf("{"))
          return this.error(n === "select" ? Ze.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : Ze.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, Qe(this.clonePosition(), this.clonePosition()));
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
      return u.length === 0 ? this.error(n === "select" ? Ze.EXPECT_SELECT_ARGUMENT_SELECTOR : Ze.EXPECT_PLURAL_ARGUMENT_SELECTOR, Qe(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !o ? this.error(Ze.MISSING_OTHER_CLAUSE, Qe(this.clonePosition(), this.clonePosition())) : { val: u, err: null };
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
      return a ? (o *= r, bv(o) ? { val: o, err: null } : this.error(n, l)) : this.error(e, l);
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
      var n = Gc(this.message, e);
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
      if (Bl(this.message, e, this.offset())) {
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
      for (; !this.isEOF() && Wc(this.char()); )
        this.bump();
    }, t.prototype.peek = function() {
      if (this.isEOF())
        return null;
      var e = this.char(), n = this.offset(), r = this.message.charCodeAt(n + (e >= 65536 ? 2 : 1));
      return r ?? null;
    }, t;
  }()
);
function Ts(t) {
  return t >= 97 && t <= 122 || t >= 65 && t <= 90;
}
function Sv(t) {
  return Ts(t) || t === 47;
}
function Av(t) {
  return t === 45 || t === 46 || t >= 48 && t <= 57 || t === 95 || t >= 97 && t <= 122 || t >= 65 && t <= 90 || t == 183 || t >= 192 && t <= 214 || t >= 216 && t <= 246 || t >= 248 && t <= 893 || t >= 895 && t <= 8191 || t >= 8204 && t <= 8205 || t >= 8255 && t <= 8256 || t >= 8304 && t <= 8591 || t >= 11264 && t <= 12271 || t >= 12289 && t <= 55295 || t >= 63744 && t <= 64975 || t >= 65008 && t <= 65533 || t >= 65536 && t <= 983039;
}
function Wc(t) {
  return t >= 9 && t <= 13 || t === 32 || t === 133 || t >= 8206 && t <= 8207 || t === 8232 || t === 8233;
}
function Cv(t) {
  return t >= 33 && t <= 35 || t === 36 || t >= 37 && t <= 39 || t === 40 || t === 41 || t === 42 || t === 43 || t === 44 || t === 45 || t >= 46 && t <= 47 || t >= 58 && t <= 59 || t >= 60 && t <= 62 || t >= 63 && t <= 64 || t === 91 || t === 92 || t === 93 || t === 94 || t === 96 || t === 123 || t === 124 || t === 125 || t === 126 || t === 161 || t >= 162 && t <= 165 || t === 166 || t === 167 || t === 169 || t === 171 || t === 172 || t === 174 || t === 176 || t === 177 || t === 182 || t === 187 || t === 191 || t === 215 || t === 247 || t >= 8208 && t <= 8213 || t >= 8214 && t <= 8215 || t === 8216 || t === 8217 || t === 8218 || t >= 8219 && t <= 8220 || t === 8221 || t === 8222 || t === 8223 || t >= 8224 && t <= 8231 || t >= 8240 && t <= 8248 || t === 8249 || t === 8250 || t >= 8251 && t <= 8254 || t >= 8257 && t <= 8259 || t === 8260 || t === 8261 || t === 8262 || t >= 8263 && t <= 8273 || t === 8274 || t === 8275 || t >= 8277 && t <= 8286 || t >= 8592 && t <= 8596 || t >= 8597 && t <= 8601 || t >= 8602 && t <= 8603 || t >= 8604 && t <= 8607 || t === 8608 || t >= 8609 && t <= 8610 || t === 8611 || t >= 8612 && t <= 8613 || t === 8614 || t >= 8615 && t <= 8621 || t === 8622 || t >= 8623 && t <= 8653 || t >= 8654 && t <= 8655 || t >= 8656 && t <= 8657 || t === 8658 || t === 8659 || t === 8660 || t >= 8661 && t <= 8691 || t >= 8692 && t <= 8959 || t >= 8960 && t <= 8967 || t === 8968 || t === 8969 || t === 8970 || t === 8971 || t >= 8972 && t <= 8991 || t >= 8992 && t <= 8993 || t >= 8994 && t <= 9e3 || t === 9001 || t === 9002 || t >= 9003 && t <= 9083 || t === 9084 || t >= 9085 && t <= 9114 || t >= 9115 && t <= 9139 || t >= 9140 && t <= 9179 || t >= 9180 && t <= 9185 || t >= 9186 && t <= 9254 || t >= 9255 && t <= 9279 || t >= 9280 && t <= 9290 || t >= 9291 && t <= 9311 || t >= 9472 && t <= 9654 || t === 9655 || t >= 9656 && t <= 9664 || t === 9665 || t >= 9666 && t <= 9719 || t >= 9720 && t <= 9727 || t >= 9728 && t <= 9838 || t === 9839 || t >= 9840 && t <= 10087 || t === 10088 || t === 10089 || t === 10090 || t === 10091 || t === 10092 || t === 10093 || t === 10094 || t === 10095 || t === 10096 || t === 10097 || t === 10098 || t === 10099 || t === 10100 || t === 10101 || t >= 10132 && t <= 10175 || t >= 10176 && t <= 10180 || t === 10181 || t === 10182 || t >= 10183 && t <= 10213 || t === 10214 || t === 10215 || t === 10216 || t === 10217 || t === 10218 || t === 10219 || t === 10220 || t === 10221 || t === 10222 || t === 10223 || t >= 10224 && t <= 10239 || t >= 10240 && t <= 10495 || t >= 10496 && t <= 10626 || t === 10627 || t === 10628 || t === 10629 || t === 10630 || t === 10631 || t === 10632 || t === 10633 || t === 10634 || t === 10635 || t === 10636 || t === 10637 || t === 10638 || t === 10639 || t === 10640 || t === 10641 || t === 10642 || t === 10643 || t === 10644 || t === 10645 || t === 10646 || t === 10647 || t === 10648 || t >= 10649 && t <= 10711 || t === 10712 || t === 10713 || t === 10714 || t === 10715 || t >= 10716 && t <= 10747 || t === 10748 || t === 10749 || t >= 10750 && t <= 11007 || t >= 11008 && t <= 11055 || t >= 11056 && t <= 11076 || t >= 11077 && t <= 11078 || t >= 11079 && t <= 11084 || t >= 11085 && t <= 11123 || t >= 11124 && t <= 11125 || t >= 11126 && t <= 11157 || t === 11158 || t >= 11159 && t <= 11263 || t >= 11776 && t <= 11777 || t === 11778 || t === 11779 || t === 11780 || t === 11781 || t >= 11782 && t <= 11784 || t === 11785 || t === 11786 || t === 11787 || t === 11788 || t === 11789 || t >= 11790 && t <= 11798 || t === 11799 || t >= 11800 && t <= 11801 || t === 11802 || t === 11803 || t === 11804 || t === 11805 || t >= 11806 && t <= 11807 || t === 11808 || t === 11809 || t === 11810 || t === 11811 || t === 11812 || t === 11813 || t === 11814 || t === 11815 || t === 11816 || t === 11817 || t >= 11818 && t <= 11822 || t === 11823 || t >= 11824 && t <= 11833 || t >= 11834 && t <= 11835 || t >= 11836 && t <= 11839 || t === 11840 || t === 11841 || t === 11842 || t >= 11843 && t <= 11855 || t >= 11856 && t <= 11857 || t === 11858 || t >= 11859 && t <= 11903 || t >= 12289 && t <= 12291 || t === 12296 || t === 12297 || t === 12298 || t === 12299 || t === 12300 || t === 12301 || t === 12302 || t === 12303 || t === 12304 || t === 12305 || t >= 12306 && t <= 12307 || t === 12308 || t === 12309 || t === 12310 || t === 12311 || t === 12312 || t === 12313 || t === 12314 || t === 12315 || t === 12316 || t === 12317 || t >= 12318 && t <= 12319 || t === 12320 || t === 12336 || t === 64830 || t === 64831 || t >= 65093 && t <= 65094;
}
function xs(t) {
  t.forEach(function(e) {
    if (delete e.location, Pc(e) || Hc(e))
      for (var n in e.options)
        delete e.options[n].location, xs(e.options[n].value);
    else Rc(e) && Uc(e.style) || (Dc(e) || Mc(e)) && Es(e.style) ? delete e.style.location : Nc(e) && xs(e.children);
  });
}
function Tv(t, e) {
  e === void 0 && (e = {}), e = be({ shouldParseSkeletons: !0, requiresOtherClause: !0 }, e);
  var n = new Ev(t, e).parse();
  if (n.err) {
    var r = SyntaxError(Ze[n.err.kind]);
    throw r.location = n.err.location, r.originalMessage = n.err.message, r;
  }
  return e != null && e.captureLocation || xs(n.val), n.val;
}
var Zi;
(function(t) {
  t.MISSING_VALUE = "MISSING_VALUE", t.INVALID_VALUE = "INVALID_VALUE", t.MISSING_INTL_API = "MISSING_INTL_API";
})(Zi || (Zi = {}));
var Uo = (
  /** @class */
  function(t) {
    ze(e, t);
    function e(n, r, i) {
      var a = t.call(this, n) || this;
      return a.code = r, a.originalMessage = i, a;
    }
    return e.prototype.toString = function() {
      return "[formatjs Error: ".concat(this.code, "] ").concat(this.message);
    }, e;
  }(Error)
), jl = (
  /** @class */
  function(t) {
    ze(e, t);
    function e(n, r, i, a) {
      return t.call(this, 'Invalid values for "'.concat(n, '": "').concat(r, '". Options are "').concat(Object.keys(i).join('", "'), '"'), Zi.INVALID_VALUE, a) || this;
    }
    return e;
  }(Uo)
), xv = (
  /** @class */
  function(t) {
    ze(e, t);
    function e(n, r, i) {
      return t.call(this, 'Value for "'.concat(n, '" must be of type ').concat(r), Zi.INVALID_VALUE, i) || this;
    }
    return e;
  }(Uo)
), wv = (
  /** @class */
  function(t) {
    ze(e, t);
    function e(n, r) {
      return t.call(this, 'The intl string context variable "'.concat(n, '" was not provided to the string "').concat(r, '"'), Zi.MISSING_VALUE, r) || this;
    }
    return e;
  }(Uo)
), $t;
(function(t) {
  t[t.literal = 0] = "literal", t[t.object = 1] = "object";
})($t || ($t = {}));
function Lv(t) {
  return t.length < 2 ? t : t.reduce(function(e, n) {
    var r = e[e.length - 1];
    return !r || r.type !== $t.literal || n.type !== $t.literal ? e.push(n) : r.value += n.value, e;
  }, []);
}
function Ov(t) {
  return typeof t == "function";
}
function oo(t, e, n, r, i, a, o) {
  if (t.length === 1 && Nl(t[0]))
    return [
      {
        type: $t.literal,
        value: t[0].value
      }
    ];
  for (var u = [], l = 0, c = t; l < c.length; l++) {
    var d = c[l];
    if (Nl(d)) {
      u.push({
        type: $t.literal,
        value: d.value
      });
      continue;
    }
    if (Jh(d)) {
      typeof a == "number" && u.push({
        type: $t.literal,
        value: n.getNumberFormat(e).format(a)
      });
      continue;
    }
    var m = d.value;
    if (!(i && m in i))
      throw new wv(m, o);
    var f = i[m];
    if (Qh(d)) {
      (!f || typeof f == "string" || typeof f == "number") && (f = typeof f == "string" || typeof f == "number" ? String(f) : ""), u.push({
        type: typeof f == "string" ? $t.literal : $t.object,
        value: f
      });
      continue;
    }
    if (Dc(d)) {
      var g = typeof d.style == "string" ? r.date[d.style] : Es(d.style) ? d.style.parsedOptions : void 0;
      u.push({
        type: $t.literal,
        value: n.getDateTimeFormat(e, g).format(f)
      });
      continue;
    }
    if (Mc(d)) {
      var g = typeof d.style == "string" ? r.time[d.style] : Es(d.style) ? d.style.parsedOptions : r.time.medium;
      u.push({
        type: $t.literal,
        value: n.getDateTimeFormat(e, g).format(f)
      });
      continue;
    }
    if (Rc(d)) {
      var g = typeof d.style == "string" ? r.number[d.style] : Uc(d.style) ? d.style.parsedOptions : void 0;
      g && g.scale && (f = f * (g.scale || 1)), u.push({
        type: $t.literal,
        value: n.getNumberFormat(e, g).format(f)
      });
      continue;
    }
    if (Nc(d)) {
      var h = d.children, p = d.value, b = i[p];
      if (!Ov(b))
        throw new xv(p, "function", o);
      var y = oo(h, e, n, r, i, a), A = b(y.map(function(S) {
        return S.value;
      }));
      Array.isArray(A) || (A = [A]), u.push.apply(u, A.map(function(S) {
        return {
          type: typeof S == "string" ? $t.literal : $t.object,
          value: S
        };
      }));
    }
    if (Pc(d)) {
      var I = d.options[f] || d.options.other;
      if (!I)
        throw new jl(d.value, f, Object.keys(d.options), o);
      u.push.apply(u, oo(I.value, e, n, r, i));
      continue;
    }
    if (Hc(d)) {
      var I = d.options["=".concat(f)];
      if (!I) {
        if (!Intl.PluralRules)
          throw new Uo(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`, Zi.MISSING_INTL_API, o);
        var _ = n.getPluralRules(e, { type: d.pluralType }).select(f - (d.offset || 0));
        I = d.options[_] || d.options.other;
      }
      if (!I)
        throw new jl(d.value, f, Object.keys(d.options), o);
      u.push.apply(u, oo(I.value, e, n, r, i, f - (d.offset || 0)));
      continue;
    }
  }
  return Lv(u);
}
function Rv(t, e) {
  return e ? be(be(be({}, t || {}), e || {}), Object.keys(t).reduce(function(n, r) {
    return n[r] = be(be({}, t[r]), e[r] || {}), n;
  }, {})) : t;
}
function Dv(t, e) {
  return e ? Object.keys(t).reduce(function(n, r) {
    return n[r] = Rv(t[r], e[r]), n;
  }, be({}, t)) : t;
}
function Qo(t) {
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
function Mv(t) {
  return t === void 0 && (t = {
    number: {},
    dateTime: {},
    pluralRules: {}
  }), {
    getNumberFormat: Xo(function() {
      for (var e, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((e = Intl.NumberFormat).bind.apply(e, er([void 0], n, !1)))();
    }, {
      cache: Qo(t.number),
      strategy: Yo.variadic
    }),
    getDateTimeFormat: Xo(function() {
      for (var e, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((e = Intl.DateTimeFormat).bind.apply(e, er([void 0], n, !1)))();
    }, {
      cache: Qo(t.dateTime),
      strategy: Yo.variadic
    }),
    getPluralRules: Xo(function() {
      for (var e, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((e = Intl.PluralRules).bind.apply(e, er([void 0], n, !1)))();
    }, {
      cache: Qo(t.pluralRules),
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
        return oo(a.ast, a.locales, a.formatters, a.formats, l, void 0, a.message);
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
        var u = Vh(o, ["formatters"]);
        this.ast = t.__parse(e, be(be({}, u), { locale: this.resolvedLocale }));
      } else
        this.ast = e;
      if (!Array.isArray(this.ast))
        throw new TypeError("A message must be provided as a String or AST.");
      this.formats = Dv(t.formats, r), this.formatters = i && i.formatters || Mv(this.formatterCache);
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
    }, t.__parse = Tv, t.formats = {
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
function Pv(t, e) {
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
const Lr = {}, Hv = (t, e, n) => n && (e in Lr || (Lr[e] = {}), t in Lr[e] || (Lr[e][t] = n), n), zc = (t, e) => {
  if (e == null)
    return;
  if (e in Lr && t in Lr[e])
    return Lr[e][t];
  const n = Ba(e);
  for (let r = 0; r < n.length; r++) {
    const i = n[r], a = Uv(i, t);
    if (a)
      return Hv(t, e, a);
  }
};
let Js;
const ka = Bt({});
function Nv(t) {
  return Js[t] || null;
}
function Kc(t) {
  return t in Js;
}
function Uv(t, e) {
  if (!Kc(t))
    return null;
  const n = Nv(t);
  return Pv(n, e);
}
function Fv(t) {
  if (t == null)
    return;
  const e = Ba(t);
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    if (Kc(r))
      return r;
  }
}
function Xc(t, ...e) {
  delete Lr[t], ka.update((n) => (n[t] = Bh.all([n[t] || {}, ...e]), n));
}
na(
  [ka],
  ([t]) => Object.keys(t)
);
ka.subscribe((t) => Js = t);
const so = {};
function kv(t, e) {
  so[t].delete(e), so[t].size === 0 && delete so[t];
}
function Yc(t) {
  return so[t];
}
function Bv(t) {
  return Ba(t).map((e) => {
    const n = Yc(e);
    return [e, n ? [...n] : []];
  }).filter(([, e]) => e.length > 0);
}
function po(t) {
  return t == null ? !1 : Ba(t).some(
    (e) => {
      var n;
      return (n = Yc(e)) == null ? void 0 : n.size;
    }
  );
}
function Vv(t, e) {
  return Promise.all(
    e.map((r) => (kv(t, r), r().then((i) => i.default || i)))
  ).then((r) => Xc(t, ...r));
}
const fa = {};
function Zc(t) {
  if (!po(t))
    return t in fa ? fa[t] : Promise.resolve();
  const e = Bv(t);
  return fa[t] = Promise.all(
    e.map(
      ([n, r]) => Vv(n, r)
    )
  ).then(() => {
    if (po(t))
      return Zc(t);
    delete fa[t];
  }), fa[t];
}
var Wl = Object.getOwnPropertySymbols, Gv = Object.prototype.hasOwnProperty, jv = Object.prototype.propertyIsEnumerable, Wv = (t, e) => {
  var n = {};
  for (var r in t)
    Gv.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && Wl)
    for (var r of Wl(t))
      e.indexOf(r) < 0 && jv.call(t, r) && (n[r] = t[r]);
  return n;
};
const qv = {
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
function zv({ locale: t, id: e }) {
  console.warn(
    `[svelte-i18n] The message "${e}" was not found in "${Ba(
      t
    ).join('", "')}".${po(Fr()) ? `

Note: there are at least one loader still registered to this locale that wasn't executed.` : ""}`
  );
}
const Kv = {
  fallbackLocale: null,
  loadingDelay: 200,
  formats: qv,
  warnOnMissingMessages: !0,
  handleMissingMessage: void 0,
  ignoreTag: !0
}, Ia = Kv;
function Qi() {
  return Ia;
}
function Xv(t) {
  const e = t, { formats: n } = e, r = Wv(e, ["formats"]);
  let i = t.fallbackLocale;
  if (t.initialLocale)
    try {
      qc.resolveLocale(t.initialLocale) && (i = t.initialLocale);
    } catch {
      console.warn(
        `[svelte-i18n] The initial locale "${t.initialLocale}" is not a valid locale.`
      );
    }
  return r.warnOnMissingMessages && (delete r.warnOnMissingMessages, r.handleMissingMessage == null ? r.handleMissingMessage = zv : console.warn(
    '[svelte-i18n] The "warnOnMissingMessages" option is deprecated. Please use the "handleMissingMessage" option instead.'
  )), Object.assign(Ia, r, { initialLocale: i }), n && ("number" in n && Object.assign(Ia.formats.number, n.number), "date" in n && Object.assign(Ia.formats.date, n.date), "time" in n && Object.assign(Ia.formats.time, n.time)), hi.set(i);
}
const Jo = Bt(!1);
var Yv = Object.defineProperty, Zv = Object.defineProperties, Qv = Object.getOwnPropertyDescriptors, ql = Object.getOwnPropertySymbols, Jv = Object.prototype.hasOwnProperty, $v = Object.prototype.propertyIsEnumerable, zl = (t, e, n) => e in t ? Yv(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n, em = (t, e) => {
  for (var n in e || (e = {}))
    Jv.call(e, n) && zl(t, n, e[n]);
  if (ql)
    for (var n of ql(e))
      $v.call(e, n) && zl(t, n, e[n]);
  return t;
}, tm = (t, e) => Zv(t, Qv(e));
let ws;
const bo = Bt(null);
function Kl(t) {
  return t.split("-").map((e, n, r) => r.slice(0, n + 1).join("-")).reverse();
}
function Ba(t, e = Qi().fallbackLocale) {
  const n = Kl(t);
  return e ? [.../* @__PURE__ */ new Set([...n, ...Kl(e)])] : n;
}
function Fr() {
  return ws ?? void 0;
}
bo.subscribe((t) => {
  ws = t ?? void 0, typeof window < "u" && t != null && document.documentElement.setAttribute("lang", t);
});
const nm = (t) => {
  if (t && Fv(t) && po(t)) {
    const { loadingDelay: e } = Qi();
    let n;
    return typeof window < "u" && Fr() != null && e ? n = window.setTimeout(
      () => Jo.set(!0),
      e
    ) : Jo.set(!0), Zc(t).then(() => {
      bo.set(t);
    }).finally(() => {
      clearTimeout(n), Jo.set(!1);
    });
  }
  return bo.set(t);
}, hi = tm(em({}, bo), {
  set: nm
}), rm = () => typeof window > "u" ? null : window.navigator.language || window.navigator.languages[0], Fo = (t) => {
  const e = /* @__PURE__ */ Object.create(null);
  return (r) => {
    const i = JSON.stringify(r);
    return i in e ? e[i] : e[i] = t(r);
  };
};
var im = Object.defineProperty, _o = Object.getOwnPropertySymbols, Qc = Object.prototype.hasOwnProperty, Jc = Object.prototype.propertyIsEnumerable, Xl = (t, e, n) => e in t ? im(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n, $s = (t, e) => {
  for (var n in e || (e = {}))
    Qc.call(e, n) && Xl(t, n, e[n]);
  if (_o)
    for (var n of _o(e))
      Jc.call(e, n) && Xl(t, n, e[n]);
  return t;
}, ra = (t, e) => {
  var n = {};
  for (var r in t)
    Qc.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && _o)
    for (var r of _o(t))
      e.indexOf(r) < 0 && Jc.call(t, r) && (n[r] = t[r]);
  return n;
};
const Oa = (t, e) => {
  const { formats: n } = Qi();
  if (t in n && e in n[t])
    return n[t][e];
  throw new Error(`[svelte-i18n] Unknown "${e}" ${t} format.`);
}, am = Fo(
  (t) => {
    var e = t, { locale: n, format: r } = e, i = ra(e, ["locale", "format"]);
    if (n == null)
      throw new Error('[svelte-i18n] A "locale" must be set to format numbers');
    return r && (i = Oa("number", r)), new Intl.NumberFormat(n, i);
  }
), om = Fo(
  (t) => {
    var e = t, { locale: n, format: r } = e, i = ra(e, ["locale", "format"]);
    if (n == null)
      throw new Error('[svelte-i18n] A "locale" must be set to format dates');
    return r ? i = Oa("date", r) : Object.keys(i).length === 0 && (i = Oa("date", "short")), new Intl.DateTimeFormat(n, i);
  }
), sm = Fo(
  (t) => {
    var e = t, { locale: n, format: r } = e, i = ra(e, ["locale", "format"]);
    if (n == null)
      throw new Error(
        '[svelte-i18n] A "locale" must be set to format time values'
      );
    return r ? i = Oa("time", r) : Object.keys(i).length === 0 && (i = Oa("time", "short")), new Intl.DateTimeFormat(n, i);
  }
), lm = (t = {}) => {
  var e = t, {
    locale: n = Fr()
  } = e, r = ra(e, [
    "locale"
  ]);
  return am($s({ locale: n }, r));
}, um = (t = {}) => {
  var e = t, {
    locale: n = Fr()
  } = e, r = ra(e, [
    "locale"
  ]);
  return om($s({ locale: n }, r));
}, cm = (t = {}) => {
  var e = t, {
    locale: n = Fr()
  } = e, r = ra(e, [
    "locale"
  ]);
  return sm($s({ locale: n }, r));
}, dm = Fo(
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  (t, e = Fr()) => new qc(t, e, Qi().formats, {
    ignoreTag: Qi().ignoreTag
  })
), fm = (t, e = {}) => {
  var n, r, i, a;
  let o = e;
  typeof t == "object" && (o = t, t = o.id);
  const {
    values: u,
    locale: l = Fr(),
    default: c
  } = o;
  if (l == null)
    throw new Error(
      "[svelte-i18n] Cannot format a message without first setting the initial locale."
    );
  let d = zc(t, l);
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
    m = dm(d, l).format(u);
  } catch (f) {
    f instanceof Error && console.warn(
      `[svelte-i18n] Message "${t}" has syntax error:`,
      f.message
    );
  }
  return m;
}, hm = (t, e) => cm(e).format(t), vm = (t, e) => um(e).format(t), mm = (t, e) => lm(e).format(t), gm = (t, e = Fr()) => zc(t, e), pm = na([hi, ka], () => fm);
na([hi], () => hm);
na([hi], () => vm);
na([hi], () => mm);
na([hi, ka], () => gm);
function bm(t, e) {
  Object.entries(t).forEach(([a, o]) => {
    Xc(a, o);
  });
  const n = localStorage.getItem("language"), r = "en", i = n ?? rm();
  console.log("Initial: Setting the language to", i), Xv({
    fallbackLocale: r,
    initialLocale: i
  }), window.addEventListener("oscd-language-changed", (a) => {
    const o = a;
    if (!o.detail.language) {
      console.error("No translations for language");
      return;
    }
    console.log("Updating the language to", o.detail.language), hi.set(o.detail.language);
  });
}
const _m = "Ort", ym = "Suche", Im = "UUID", Em = "File Name", Sm = "Autor", Am = "Typ", Cm = "Version", Tm = "Datum", xm = "Fertig", wm = "Filtertypen", Lm = "Filter Hinzufügen", Om = {
  location: _m,
  search: ym,
  uuid: Im,
  filename: Em,
  author: Sm,
  type: Am,
  version: Cm,
  date: Tm,
  "versionHistory.title": "Versionsverlauf der Datei {filename}",
  "versionTable.heading": "Versionstabelle",
  done: xm,
  filter_types: wm,
  add_filter: Lm
}, Rm = "Location", Dm = "Search", Mm = "UUID", Pm = "Filename", Hm = "Author", Nm = "Type", Um = "Version", Fm = "Date", km = "Done", Bm = "Filter Types", Vm = "Add Filter", Gm = {
  location: Rm,
  search: Dm,
  uuid: Mm,
  filename: Pm,
  author: Hm,
  type: Nm,
  version: Um,
  date: Fm,
  "versionHistory.title": "Version History of file {filename}",
  "versionTable.heading": "Version Table",
  done: km,
  filter_types: Bm,
  add_filter: Vm
};
function Me(t) {
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
function Bn(t, e) {
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
class vi {
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
    n in a || (a[n] = /* @__PURE__ */ new Map()), a[n].set(r, qf(e, n, r, i));
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
var Xa;
function jm(t, e) {
  e === void 0 && (e = !1);
  var n = t.CSS, r = Xa;
  if (typeof Xa == "boolean" && !e)
    return Xa;
  var i = n && typeof n.supports == "function";
  if (!i)
    return !1;
  var a = n.supports("--css-vars", "yes"), o = n.supports("(--css-vars: yes)") && n.supports("color", "#00000000");
  return r = a || o, e || (Xa = r), r;
}
function Wm(t, e, n) {
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
function qm(t) {
  return t === void 0 && (t = window), zm(t) ? { passive: !0 } : !1;
}
function zm(t) {
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
const $c = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  applyPassive: qm
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
function Km(t, e) {
  if (t.closest)
    return t.closest(e);
  for (var n = t; n; ) {
    if (ed(n, e))
      return n;
    n = n.parentElement;
  }
  return null;
}
function ed(t, e) {
  var n = t.matches || t.webkitMatchesSelector || t.msMatchesSelector;
  return n.call(t, e);
}
function Xm(t) {
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
  closest: Km,
  estimateScrollWidth: Xm,
  matches: ed
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
var Ym = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  BG_FOCUSED: "mdc-ripple-upgraded--background-focused",
  FG_ACTIVATION: "mdc-ripple-upgraded--foreground-activation",
  FG_DEACTIVATION: "mdc-ripple-upgraded--foreground-deactivation",
  ROOT: "mdc-ripple-upgraded",
  UNBOUNDED: "mdc-ripple-upgraded--unbounded"
}, Zm = {
  VAR_FG_SCALE: "--mdc-ripple-fg-scale",
  VAR_FG_SIZE: "--mdc-ripple-fg-size",
  VAR_FG_TRANSLATE_END: "--mdc-ripple-fg-translate-end",
  VAR_FG_TRANSLATE_START: "--mdc-ripple-fg-translate-start",
  VAR_LEFT: "--mdc-ripple-left",
  VAR_TOP: "--mdc-ripple-top"
}, Yl = {
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
var Zl = [
  "touchstart",
  "pointerdown",
  "mousedown",
  "keydown"
], Ql = [
  "touchend",
  "pointerup",
  "mouseup",
  "contextmenu"
], Ya = [], Qm = (
  /** @class */
  function(t) {
    ze(e, t);
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
        return Ym;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Zm;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return Yl;
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
          for (var a = kt(Zl), o = a.next(); !o.done; o = a.next()) {
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
          for (var a = kt(Ql), o = a.next(); !o.done; o = a.next()) {
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
        for (var i = kt(Zl), a = i.next(); !a.done; a = i.next()) {
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
        for (var i = kt(Ql), a = i.next(); !a.done; a = i.next()) {
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
            var u = n !== void 0 && Ya.length > 0 && Ya.some(function(l) {
              return r.adapter.containsEventTarget(l);
            });
            if (u) {
              this.resetActivationState();
              return;
            }
            n !== void 0 && (Ya.push(n.target), this.registerDeactivationHandlers(n)), i.wasElementMadeActive = this.checkElementMadeActive(n), i.wasElementMadeActive && this.animateActivation(), requestAnimationFrame(function() {
              Ya = [], !i.wasElementMadeActive && n !== void 0 && (n.key === " " || n.keyCode === 32) && (i.wasElementMadeActive = r.checkElementMadeActive(n), i.wasElementMadeActive && r.animateActivation()), i.wasElementMadeActive || (r.activationState = r.defaultActivationState());
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
      i ? a = Wm(r, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect()) : a = {
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
      }, Yl.FG_DEACTIVATION_MS));
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
var $o = "mdc-dom-focus-sentinel", Jm = (
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
      [].slice.call(this.root.querySelectorAll("." + $o)).forEach(function(e) {
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
        var i = r.getAttribute("aria-disabled") === "true" || r.getAttribute("disabled") != null || r.getAttribute("hidden") != null || r.getAttribute("aria-hidden") === "true", a = r.tabIndex >= 0 && r.getBoundingClientRect().width > 0 && !r.classList.contains($o) && !i, o = !1;
        if (a) {
          var u = getComputedStyle(r);
          o = u.display === "none" || u.visibility === "hidden";
        }
        return a && !o;
      });
    }, t.prototype.createSentinel = function() {
      var e = document.createElement("div");
      return e.setAttribute("tabindex", "0"), e.setAttribute("aria-hidden", "true"), e.classList.add($o), e;
    }, t;
  }()
);
const $m = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  FocusTrap: Jm
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
var Ve = {
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
on.add(Ve.BACKSPACE);
on.add(Ve.ENTER);
on.add(Ve.SPACEBAR);
on.add(Ve.PAGE_UP);
on.add(Ve.PAGE_DOWN);
on.add(Ve.END);
on.add(Ve.HOME);
on.add(Ve.ARROW_LEFT);
on.add(Ve.ARROW_UP);
on.add(Ve.ARROW_RIGHT);
on.add(Ve.ARROW_DOWN);
on.add(Ve.DELETE);
on.add(Ve.ESCAPE);
on.add(Ve.TAB);
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
sn.set(hn.BACKSPACE, Ve.BACKSPACE);
sn.set(hn.ENTER, Ve.ENTER);
sn.set(hn.SPACEBAR, Ve.SPACEBAR);
sn.set(hn.PAGE_UP, Ve.PAGE_UP);
sn.set(hn.PAGE_DOWN, Ve.PAGE_DOWN);
sn.set(hn.END, Ve.END);
sn.set(hn.HOME, Ve.HOME);
sn.set(hn.ARROW_LEFT, Ve.ARROW_LEFT);
sn.set(hn.ARROW_UP, Ve.ARROW_UP);
sn.set(hn.ARROW_RIGHT, Ve.ARROW_RIGHT);
sn.set(hn.ARROW_DOWN, Ve.ARROW_DOWN);
sn.set(hn.DELETE, Ve.DELETE);
sn.set(hn.ESCAPE, Ve.ESCAPE);
sn.set(hn.TAB, Ve.TAB);
var kr = /* @__PURE__ */ new Set();
kr.add(Ve.PAGE_UP);
kr.add(Ve.PAGE_DOWN);
kr.add(Ve.END);
kr.add(Ve.HOME);
kr.add(Ve.ARROW_LEFT);
kr.add(Ve.ARROW_UP);
kr.add(Ve.ARROW_RIGHT);
kr.add(Ve.ARROW_DOWN);
function Lt(t) {
  var e = t.key;
  if (on.has(e))
    return e;
  var n = sn.get(t.keyCode);
  return n || Ve.UNKNOWN;
}
const { applyPassive: Jl } = $c, { matches: eg } = ia;
function Yt(t, { ripple: e = !0, surface: n = !1, unbounded: r = !1, disabled: i = !1, color: a, active: o, rippleElement: u, eventTarget: l, activeTarget: c, addClass: d = (h) => t.classList.add(h), removeClass: m = (h) => t.classList.remove(h), addStyle: f = (h, p) => t.style.setProperty(h, p), initPromise: g = Promise.resolve() } = {}) {
  let h, p = new vi(), b = ye("SMUI:addLayoutListener"), y, A = o, I = l, _ = c;
  function S() {
    n ? (d("mdc-ripple-surface"), a === "primary" ? (d("smui-ripple-surface--primary"), m("smui-ripple-surface--secondary")) : a === "secondary" ? (m("smui-ripple-surface--primary"), d("smui-ripple-surface--secondary")) : (m("smui-ripple-surface--primary"), m("smui-ripple-surface--secondary"))) : (m("mdc-ripple-surface"), m("smui-ripple-surface--primary"), m("smui-ripple-surface--secondary")), h && A !== o && (A = o, o ? h.activate() : o === !1 && h.deactivate()), e && !h ? (h = new Qm({
      addClass: d,
      browserSupportsCssVars: () => jm(window),
      computeBoundingRect: () => (u || t).getBoundingClientRect(),
      containsEventTarget: (L) => t.contains(L),
      deregisterDocumentInteractionHandler: (L, T) => p.off(document.documentElement, L, T),
      deregisterInteractionHandler: (L, T) => p.off(l || t, L, T),
      deregisterResizeHandler: (L) => window.removeEventListener("resize", L),
      getWindowPageOffset: () => {
        var L, T;
        return {
          x: (L = window.pageXOffset) !== null && L !== void 0 ? L : window.scrollX,
          y: (T = window.pageYOffset) !== null && T !== void 0 ? T : window.scrollY
        };
      },
      isSurfaceActive: () => o ?? eg(c || t, ":active"),
      isSurfaceDisabled: () => !!i,
      isUnbounded: () => !!r,
      registerDocumentInteractionHandler: (L, T) => {
        const w = Jl();
        p.on(document.documentElement, L, T, typeof w == "boolean" ? { capture: w } : w);
      },
      registerInteractionHandler: (L, T) => {
        const w = Jl();
        p.on(l || t, L, T, typeof w == "boolean" ? { capture: w } : w);
      },
      registerResizeHandler: (L) => p.on(window, "resize", L),
      removeClass: m,
      updateCssVariable: f
    }), g.then(() => {
      h && (h.init(), h.setUnbounded(r));
    })) : h && !e && g.then(() => {
      h && (h.destroy(), h = void 0, p.clear());
    }), h && (I !== l || _ !== c) && (I = l, _ = c, h.destroy(), requestAnimationFrame(() => {
      h && (h.init(), h.setUnbounded(r));
    })), !e && r && d("mdc-ripple-upgraded--unbounded");
  }
  S(), b && (y = b(E));
  function E() {
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
      } = Object.assign({ ripple: !0, surface: !1, unbounded: !1, disabled: !1, color: void 0, active: void 0, rippleElement: void 0, eventTarget: void 0, activeTarget: void 0, addClass: (T) => t.classList.add(T), removeClass: (T) => t.classList.remove(T), addStyle: (T, w) => t.style.setProperty(T, w), initPromise: Promise.resolve() }, L)), S();
    },
    destroy() {
      h && (h.destroy(), h = void 0, p.clear(), m("mdc-ripple-surface"), m("smui-ripple-surface--primary"), m("smui-ripple-surface--secondary")), y && y();
    }
  };
}
function td(t, e) {
  Te(e, !0);
  let n = v(e, "use", 19, () => []), r = v(e, "class", 3, ""), i = v(e, "component", 3, Br), a = v(e, "tag", 3, "span"), o = /* @__PURE__ */ je(e, [
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
  var m = { getElement: d }, f = ne(), g = X(f);
  {
    let h = /* @__PURE__ */ he(() => Me({
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
            children: (y, A) => {
              var I = ne(), _ = X(I);
              Ae(_, () => e.children ?? me), x(y, I);
            },
            $$slots: { default: !0 }
          }
        )),
        (y) => u = y,
        () => u
      );
    });
  }
  return x(t, f), xe(m);
}
function Ls(t, e) {
  Te(e, !0);
  let n = v(e, "use", 19, () => []), r = v(e, "class", 3, ""), i = v(e, "on", 3, !1), a = v(e, "component", 3, Br), o = v(e, "tag", 3, "i"), u = /* @__PURE__ */ je(e, [
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
  const c = /* @__PURE__ */ he(() => o() === "svg" || a() === rg), d = ye("SMUI:icon:context");
  function m() {
    return l.getElement();
  }
  var f = { getElement: m }, g = ne(), h = X(g);
  {
    let p = /* @__PURE__ */ he(() => Me({
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
            children: (A, I) => {
              var _ = ne(), S = X(_);
              Ae(S, () => e.children ?? me), x(A, _);
            },
            $$slots: { default: !0 }
          }
        )),
        (A) => l = A,
        () => l
      );
    });
  }
  return x(t, g), xe(f);
}
var tg = /* @__PURE__ */ Rt("<svg><!></svg>");
function Br(t, e) {
  Te(e, !0);
  let n = v(e, "use", 19, () => []), r = v(e, "tag", 3, "div"), i = /* @__PURE__ */ je(e, ["$$slots", "$$events", "$$legacy", "use", "tag", "children"]);
  const a = /* @__PURE__ */ he(() => [
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
  var l = { getElement: u }, c = ne(), d = X(c);
  {
    var m = (g) => {
      var h = tg();
      Ne(h, () => ({ ...i }));
      var p = fe(h);
      Ae(p, () => e.children ?? me), Ce(h, (b) => o = b, () => o), Pe(h, (b, y) => Y == null ? void 0 : Y(b, y), n), x(g, h);
    }, f = (g) => {
      var h = ne(), p = X(h);
      {
        var b = (A) => {
          var I = ne(), _ = X(I);
          Tl(_, r, !1, (S, E) => {
            Ce(S, (L) => o = L, () => o), Pe(S, (L, T) => Y == null ? void 0 : Y(L, T), n), Ne(S, () => ({ ...i }));
          }), x(A, I);
        }, y = (A) => {
          var I = ne(), _ = X(I);
          Tl(_, r, !1, (S, E) => {
            Ce(S, (w) => o = w, () => o), Pe(S, (w, k) => Y == null ? void 0 : Y(w, k), n), Ne(S, () => ({ ...i }));
            var L = ne(), T = X(L);
            Ae(T, () => e.children ?? me), x(E, L);
          }), x(A, I);
        };
        oe(
          p,
          (A) => {
            s(a) ? A(b) : A(y, !1);
          },
          !0
        );
      }
      x(g, h);
    };
    oe(d, (g) => {
      r() === "svg" ? g(m) : g(f, !1);
    });
  }
  return x(t, c), xe(l);
}
var ng = /* @__PURE__ */ Rt("<svg><!></svg>");
function rg(t, e) {
  Te(e, !0), console && console.warn && console.warn('The @smui/common Svg component is deprecated. You can use `tag="svg"` now.');
  let n = v(e, "use", 19, () => []), r = /* @__PURE__ */ je(e, ["$$slots", "$$events", "$$legacy", "use", "children"]), i;
  function a() {
    return i;
  }
  var o = { getElement: a }, u = ng();
  Ne(u, () => ({ ...r }));
  var l = fe(u);
  return Ae(l, () => e.children ?? me), Ce(u, (c) => i = c, () => i), Pe(u, (c, d) => Y == null ? void 0 : Y(c, d), n), x(t, u), xe(o);
}
function Za(t, e) {
  Te(e, !0);
  const [n, r] = ir(), i = Bt(e.value);
  ce(e.key, i), Le(() => {
    Nn(i, e.value);
  }), In(() => {
    i.set(void 0);
  });
  var a = ne(), o = X(a);
  Ae(o, () => e.children ?? me), x(t, a), xe(), r();
}
var ig = /* @__PURE__ */ de('<div class="mdc-button__touch"></div>'), ag = /* @__PURE__ */ de('<div class="mdc-button__ripple"></div> <!><!>', 1);
function Ji(t, e) {
  Te(e, !0);
  let n = v(e, "use", 19, () => []), r = v(e, "class", 3, ""), i = v(e, "style", 3, ""), a = v(e, "ripple", 3, !0), o = v(e, "color", 3, "primary"), u = v(e, "variant", 3, "text"), l = v(e, "touch", 3, !1), c = v(e, "action", 3, "close"), d = v(e, "defaultAction", 3, !1), m = v(e, "secondary", 3, !1), f = v(e, "component", 3, Br), g = v(e, "tag", 19, () => e.href == null ? "button" : "a"), h = /* @__PURE__ */ je(e, [
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
  ]), p, b = Ie({}), y = Ie({}), A = ye("SMUI:button:context");
  const I = /* @__PURE__ */ he(() => A === "dialog:action" && c() != null ? { "data-mdc-dialog-action": c() } : { action: c() }), _ = /* @__PURE__ */ he(() => A === "dialog:action" && d() ? { "data-mdc-dialog-button-default": "" } : {}), S = /* @__PURE__ */ he(() => A === "banner" ? {} : { secondary: m() });
  let E = e.disabled;
  Le(() => {
    if (E !== e.disabled) {
      if (p) {
        const C = Z();
        "blur" in C && C.blur();
      }
      E = h.disabled;
    }
  }), ce("SMUI:label:context", "button"), ce("SMUI:icon:context", "button");
  function L(C) {
    b[C] || (b[C] = !0);
  }
  function T(C) {
    (!(C in b) || b[C]) && (b[C] = !1);
  }
  function w(C, F) {
    y[C] != F && (F === "" || F == null ? delete y[C] : y[C] = F);
  }
  function k() {
    A === "banner" && Ke(Z(), m() ? "SMUIBannerButtonSecondaryActionClick" : "SMUIBannerButtonPrimaryActionClick");
  }
  function Z() {
    return p.getElement();
  }
  var G = { getElement: Z }, q = ne(), R = X(q);
  {
    let C = /* @__PURE__ */ he(() => [
      [
        Yt,
        {
          ripple: a(),
          unbounded: !1,
          color: o(),
          disabled: !!e.disabled,
          addClass: L,
          removeClass: T,
          addStyle: w
        }
      ],
      ...n()
    ]), F = /* @__PURE__ */ he(() => Me({
      "mdc-button": !0,
      "mdc-button--raised": u() === "raised",
      "mdc-button--unelevated": u() === "unelevated",
      "mdc-button--outlined": u() === "outlined",
      "smui-button--color-secondary": o() === "secondary",
      "mdc-button--touch": l(),
      "mdc-card__action": A === "card:action",
      "mdc-card__action--button": A === "card:action",
      "mdc-dialog__button": A === "dialog:action",
      "mdc-top-app-bar__navigation-icon": A === "top-app-bar:navigation",
      "mdc-top-app-bar__action-item": A === "top-app-bar:action",
      "mdc-snackbar__action": A === "snackbar:actions",
      "mdc-banner__secondary-action": A === "banner" && m(),
      "mdc-banner__primary-action": A === "banner" && !m(),
      "mdc-tooltip__action": A === "tooltip:rich-actions",
      ...b,
      [r()]: !0
    })), U = /* @__PURE__ */ he(() => Object.entries(y).map(([z, te]) => `${z}: ${te};`).concat([i()]).join(" "));
    rr(R, f, (z, te) => {
      Ce(
        te(z, Je(
          {
            get tag() {
              return g();
            },
            get use() {
              return s(C);
            },
            get class() {
              return s(F);
            },
            get style() {
              return s(U);
            }
          },
          () => s(I),
          () => s(_),
          () => s(S),
          {
            get href() {
              return e.href;
            }
          },
          () => h,
          {
            onclick: (H) => {
              var D;
              k(), (D = e.onclick) == null || D.call(e, H);
            },
            children: (H, D) => {
              var O = ag(), le = _e(X(O), 2);
              Ae(le, () => e.children ?? me);
              var re = _e(le);
              {
                var M = (B) => {
                  var P = ig();
                  x(B, P);
                };
                oe(re, (B) => {
                  l() && B(M);
                });
              }
              x(H, O);
            },
            $$slots: { default: !0 }
          }
        )),
        (H) => p = H,
        () => p
      );
    });
  }
  return x(t, q), xe(G);
}
function nd(t, e) {
  Te(e, !0);
  let n = v(e, "callback", 3, () => {
  }), r = v(e, "disabled", 3, !1), i = v(e, "variant", 3, "default"), a = v(e, "isAbortAction", 3, !1), o = v(e, "backgroundColor", 3, void 0);
  {
    let u = /* @__PURE__ */ he(() => a() ? "background-color: #ff3e00;" : "background-color: " + o());
    Ji(t, {
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
        var d = ne(), m = X(d);
        Ae(m, () => e.children ?? me), x(l, d);
      },
      $$slots: { default: !0 }
    });
  }
  xe();
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
var Qa = {
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
var og = (
  /** @class */
  function(t) {
    ze(e, t);
    function e(n) {
      var r = t.call(this, be(be({}, e.defaultAdapter), n)) || this;
      return r.hasToggledAriaLabel = !1, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Qa;
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
      return this.adapter.hasClass(Qa.ICON_BUTTON_ON);
    }, e.prototype.toggle = function(n) {
      if (n === void 0 && (n = !this.isOn()), n ? this.adapter.addClass(Qa.ICON_BUTTON_ON) : this.adapter.removeClass(Qa.ICON_BUTTON_ON), this.hasToggledAriaLabel) {
        var r = n ? this.adapter.getAttr(sr.DATA_ARIA_LABEL_ON) : this.adapter.getAttr(sr.DATA_ARIA_LABEL_OFF);
        this.adapter.setAttr(sr.ARIA_LABEL, r || "");
      } else
        this.adapter.setAttr(sr.ARIA_PRESSED, "" + n);
    }, e;
  }(xt)
), sg = /* @__PURE__ */ de('<div class="mdc-icon-button__touch"></div>'), lg = /* @__PURE__ */ de('<div class="mdc-icon-button__ripple"></div> <!><!>', 1);
function ug(t, e) {
  Te(e, !0);
  let n = () => {
  };
  function r(D) {
    return D === n;
  }
  let i = v(e, "use", 19, () => []), a = v(e, "class", 3, ""), o = v(e, "style", 3, ""), u = v(e, "ripple", 3, !0), l = v(e, "toggle", 3, !1), c = v(e, "pressed", 15, n), d = v(e, "touch", 3, !1), m = v(e, "displayFlex", 3, !0), f = v(e, "size", 3, "normal"), g = v(e, "component", 3, Br), h = v(e, "tag", 19, () => e.href == null ? "button" : "a"), p = /* @__PURE__ */ je(e, [
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
  ]), b, y, A = /* @__PURE__ */ ve(Ie({})), I = Ie({}), _ = /* @__PURE__ */ ve(Ie({})), S = ye("SMUI:icon-button:context"), E = ye("SMUI:icon-button:aria-describedby");
  const L = /* @__PURE__ */ he(() => {
    if (S === "data-table:pagination")
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
    else return S === "dialog:header" || S === "dialog:sheet" ? { "data-mdc-dialog-action": e.action } : { action: e.action };
  });
  let T = !!e.disabled;
  Le(() => {
    if (T != !!e.disabled) {
      if (b) {
        const D = U();
        "blur" in D && D.blur();
      }
      T = !!e.disabled;
    }
  }), ce("SMUI:icon:context", "icon-button");
  let w = null;
  Le(() => {
    b && U() && l() !== w && (l() && !y ? (y = new og({
      addClass: Z,
      hasClass: k,
      notifyChange: (D) => {
        F(D), Ke(U(), "SMUIIconButtonToggleChange", D);
      },
      removeClass: G,
      getAttr: R,
      setAttr: C
    }), y.init()) : !l() && y && (y.destroy(), y = void 0, K(A, {}, !0), K(_, {}, !0)), w = l());
  }), Le(() => {
    y && !r(c()) && y.isOn() !== c() && y.toggle(c());
  }), In(() => {
    y && y.destroy();
  });
  function k(D) {
    return D in s(A) ? s(A)[D] : U().classList.contains(D);
  }
  function Z(D) {
    s(A)[D] || (s(A)[D] = !0);
  }
  function G(D) {
    (!(D in s(A)) || s(A)[D]) && (s(A)[D] = !1);
  }
  function q(D, O) {
    I[D] != O && (O === "" || O == null ? delete I[D] : I[D] = O);
  }
  function R(D) {
    return D in s(_) ? s(_)[D] ?? null : U().getAttribute(D);
  }
  function C(D, O) {
    s(_)[D] !== O && (s(_)[D] = O);
  }
  function F(D) {
    c(D.isOn);
  }
  function U() {
    return b.getElement();
  }
  var z = { getElement: U }, te = ne(), H = X(te);
  {
    let D = /* @__PURE__ */ he(() => [
      [
        Yt,
        {
          ripple: u(),
          unbounded: !0,
          color: e.color,
          disabled: !!e.disabled,
          addClass: Z,
          removeClass: G,
          addStyle: q
        }
      ],
      ...i()
    ]), O = /* @__PURE__ */ he(() => Me({
      "mdc-icon-button": !0,
      "mdc-icon-button--on": !r(c()) && c(),
      "mdc-icon-button--touch": d(),
      "mdc-icon-button--display-flex": m(),
      "smui-icon-button--size-button": f() === "button",
      "smui-icon-button--size-mini": f() === "mini",
      "mdc-icon-button--reduced-size": f() === "mini" || f() === "button",
      "mdc-card__action": S === "card:action",
      "mdc-card__action--icon": S === "card:action",
      "mdc-top-app-bar__navigation-icon": S === "top-app-bar:navigation",
      "mdc-top-app-bar__action-item": S === "top-app-bar:action",
      "mdc-snackbar__dismiss": S === "snackbar:actions",
      "mdc-data-table__pagination-button": S === "data-table:pagination",
      "mdc-data-table__sort-icon-button": S === "data-table:sortable-header-cell",
      "mdc-dialog__close": (S === "dialog:header" || S === "dialog:sheet") && e.action === "close",
      ...s(A),
      [a()]: !0
    })), le = /* @__PURE__ */ he(() => Object.entries(I).map(([B, P]) => `${B}: ${P};`).concat([o()]).join(" ")), re = /* @__PURE__ */ he(() => r(c()) ? null : c() ? "true" : "false"), M = /* @__PURE__ */ he(() => c() ? e.ariaLabelOn : e.ariaLabelOff);
    rr(H, g, (B, P) => {
      Ce(
        P(B, Je(
          {
            get tag() {
              return h();
            },
            get use() {
              return s(D);
            },
            get class() {
              return s(O);
            },
            get style() {
              return s(le);
            },
            get "aria-pressed"() {
              return s(re);
            },
            get "aria-label"() {
              return s(M);
            },
            get "data-aria-label-on"() {
              return e.ariaLabelOn;
            },
            get "data-aria-label-off"() {
              return e.ariaLabelOff;
            },
            get "aria-describedby"() {
              return E;
            },
            get href() {
              return e.href;
            }
          },
          () => s(L),
          () => s(_),
          () => p,
          {
            onclick: (J) => {
              var $;
              y && y.handleClick(), S === "top-app-bar:navigation" && Ke(U(), "SMUITopAppBarIconButtonNav"), ($ = e.onclick) == null || $.call(e, J);
            },
            children: (J, $) => {
              var se = lg(), Ee = _e(X(se), 2);
              Ae(Ee, () => e.children ?? me);
              var ee = _e(Ee);
              {
                var ae = (we) => {
                  var Re = sg();
                  x(we, Re);
                };
                oe(ee, (we) => {
                  d() && we(ae);
                });
              }
              x(J, se);
            },
            $$slots: { default: !0 }
          }
        )),
        (J) => b = J,
        () => b
      );
    });
  }
  return x(t, te), xe(z);
}
function cg(t, e) {
  let n = v(e, "callback", 3, () => {
  }), r = v(e, "icon", 3, ""), i = v(e, "disabled", 3, !1);
  ug(t, {
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
      Ls(a, {
        class: "material-icons",
        children: (u, l) => {
          var c = vt();
          Oe(() => $e(c, r())), x(u, c);
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
var dg = {
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
var fg = (
  /** @class */
  function(t) {
    ze(e, t);
    function e(n) {
      var r = t.call(this, be(be({}, e.defaultAdapter), n)) || this;
      return r.shakeAnimationEndHandler = function() {
        r.handleShakeAnimationEnd();
      }, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return dg;
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
var zr = {
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
var hg = (
  /** @class */
  function(t) {
    ze(e, t);
    function e(n) {
      var r = t.call(this, be(be({}, e.defaultAdapter), n)) || this;
      return r.transitionEndHandler = function(i) {
        r.handleTransitionEnd(i);
      }, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return zr;
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
      this.adapter.removeClass(zr.LINE_RIPPLE_DEACTIVATING), this.adapter.addClass(zr.LINE_RIPPLE_ACTIVE);
    }, e.prototype.setRippleCenter = function(n) {
      this.adapter.setStyle("transform-origin", n + "px center");
    }, e.prototype.deactivate = function() {
      this.adapter.addClass(zr.LINE_RIPPLE_DEACTIVATING);
    }, e.prototype.handleTransitionEnd = function(n) {
      var r = this.adapter.hasClass(zr.LINE_RIPPLE_DEACTIVATING);
      n.propertyName === "opacity" && r && (this.adapter.removeClass(zr.LINE_RIPPLE_ACTIVE), this.adapter.removeClass(zr.LINE_RIPPLE_DEACTIVATING));
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
var vg = {
  NOTCH_ELEMENT_SELECTOR: ".mdc-notched-outline__notch"
}, $l = {
  // This should stay in sync with $mdc-notched-outline-padding * 2.
  NOTCH_ELEMENT_PADDING: 8
}, mg = {
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
var gg = (
  /** @class */
  function(t) {
    ze(e, t);
    function e(n) {
      return t.call(this, be(be({}, e.defaultAdapter), n)) || this;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return vg;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return mg;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return $l;
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
      n > 0 && (n += $l.NOTCH_ELEMENT_PADDING), this.adapter.setNotchWidthProperty(n), this.adapter.addClass(r);
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
var es = {
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
}, pg = {
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
}, eu = {
  LABEL_SCALE: 0.75
}, bg = [
  "pattern",
  "min",
  "max",
  "required",
  "step",
  "minlength",
  "maxlength"
], _g = [
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
var tu = ["mousedown", "touchstart"], nu = ["click", "keydown"], yg = (
  /** @class */
  function(t) {
    ze(e, t);
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
        return pg;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return es;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return eu;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "shouldAlwaysFloat", {
      get: function() {
        var n = this.getNativeInput().type;
        return _g.indexOf(n) >= 0;
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
        for (var o = kt(tu), u = o.next(); !u.done; u = o.next()) {
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
        for (var c = kt(nu), d = c.next(); !d.done; d = c.next()) {
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
        for (var o = kt(tu), u = o.next(); !u.done; u = o.next()) {
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
        for (var c = kt(nu), d = c.next(); !d.done; d = c.next()) {
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
        return bg.indexOf(i) > -1 ? (r.styleValidity(!0), r.adapter.setLabelRequired(r.getNativeInput().required), !0) : !1;
      }), n.indexOf("maxlength") > -1 && this.setcharacterCounter(this.getValue().length);
    }, e.prototype.notchOutline = function(n) {
      if (!(!this.adapter.hasOutline() || !this.adapter.hasLabel()))
        if (n) {
          var r = this.adapter.getLabelWidth() * eu.LABEL_SCALE;
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
        a && o ? this.adapter.setInputAttr(es.ARIA_DESCRIBEDBY, o) : this.adapter.removeInputAttr(es.ARIA_DESCRIBEDBY);
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
var ru = {
  ICON_EVENT: "MDCTextField:icon",
  ICON_ROLE: "button"
}, Ig = {
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
var iu = ["click", "keydown"], Eg = (
  /** @class */
  function(t) {
    ze(e, t);
    function e(n) {
      var r = t.call(this, be(be({}, e.defaultAdapter), n)) || this;
      return r.savedTabIndex = null, r.interactionHandler = function(i) {
        r.handleInteraction(i);
      }, r;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return ru;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Ig;
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
        for (var i = kt(iu), a = i.next(); !a.done; a = i.next()) {
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
        for (var i = kt(iu), a = i.next(); !a.done; a = i.next()) {
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
      this.savedTabIndex && (n ? (this.adapter.setAttr("tabindex", "-1"), this.adapter.removeAttr("role")) : (this.adapter.setAttr("tabindex", this.savedTabIndex), this.adapter.setAttr("role", ru.ICON_ROLE)));
    }, e.prototype.setAriaLabel = function(n) {
      this.adapter.setAttr("aria-label", n);
    }, e.prototype.setContent = function(n) {
      this.adapter.setContent(n);
    }, e.prototype.handleInteraction = function(n) {
      var r = n.key === "Enter" || n.keyCode === 13;
      (n.type === "click" || r) && (n.preventDefault(), this.adapter.notifyIconAction());
    }, e;
  }(xt)
), Sg = /* @__PURE__ */ de("<span><!></span>"), Ag = /* @__PURE__ */ de("<label><!></label>");
function yo(t, e) {
  Te(e, !0);
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
  ]), c, d = /* @__PURE__ */ ve(void 0), m = new vi(), f = Ie({}), g = Ie({}), h = ye("SMUI:generic:input:props") ?? {}, p = a();
  Le(() => {
    s(d) && p !== a() && (p = a(), s(d).float(a()));
  });
  let b = o();
  Le(() => {
    s(d) && b !== o() && (b = o(), s(d).setRequired(o()));
  });
  const y = ye("SMUI:floating-label:mount"), A = ye("SMUI:floating-label:unmount");
  at(() => {
    K(
      d,
      new fg({
        addClass: I,
        removeClass: _,
        getWidth: () => {
          var D, O;
          const z = Z(), te = z.cloneNode(!0);
          (D = z.parentNode) == null || D.appendChild(te), te.classList.add("smui-floating-label--remove-transition"), te.classList.add("smui-floating-label--force-size"), te.classList.remove("mdc-floating-label--float-above");
          const H = te.scrollWidth;
          return (O = z.parentNode) == null || O.removeChild(te), H;
        },
        registerInteractionHandler: (z, te) => m.on(Z(), z, te),
        deregisterInteractionHandler: (z, te) => m.off(Z(), z, te)
      }),
      !0
    );
    const U = {
      get element() {
        return Z();
      },
      addStyle: S,
      removeStyle: E
    };
    return y && y(U), s(d).init(), () => {
      var z;
      A && A(U), (z = s(d)) == null || z.destroy(), m.clear();
    };
  });
  function I(U) {
    f[U] || (f[U] = !0);
  }
  function _(U) {
    (!(U in f) || f[U]) && (f[U] = !1);
  }
  function S(U, z) {
    g[U] != z && (z === "" || z == null ? delete g[U] : g[U] = z);
  }
  function E(U) {
    U in g && delete g[U];
  }
  function L(U) {
    var z;
    (z = s(d)) == null || z.shake(U);
  }
  function T(U) {
    a(U);
  }
  function w(U) {
    o(U);
  }
  function k() {
    if (s(d) == null)
      throw new Error("Instance is undefined.");
    return s(d).getWidth();
  }
  function Z() {
    return c;
  }
  var G = { shake: L, float: T, setRequired: w, getWidth: k, getElement: Z }, q = ne(), R = X(q);
  {
    var C = (U) => {
      var z = Sg();
      Ne(z, (H, D) => ({ class: H, style: D, ...l }), [
        () => Me({
          "mdc-floating-label": !0,
          "mdc-floating-label--float-above": a(),
          "mdc-floating-label--required": o(),
          ...f,
          [r()]: !0
        }),
        () => Object.entries(g).map(([H, D]) => `${H}: ${D};`).concat([i()]).join(" ")
      ]);
      var te = fe(z);
      Ae(te, () => e.children ?? me), Ce(z, (H) => c = H, () => c), Pe(z, (H, D) => Y == null ? void 0 : Y(H, D), n), x(U, z);
    }, F = (U) => {
      var z = Ag();
      Ne(
        z,
        (H, D) => ({
          class: H,
          style: D,
          for: e.for || (h ? h.id : void 0),
          ...l
        }),
        [
          () => Me({
            "mdc-floating-label": !0,
            "mdc-floating-label--float-above": a(),
            "mdc-floating-label--required": o(),
            ...f,
            [r()]: !0
          }),
          () => Object.entries(g).map(([H, D]) => `${H}: ${D};`).concat([i()]).join(" ")
        ]
      );
      var te = fe(z);
      Ae(te, () => e.children ?? me), Ce(z, (H) => c = H, () => c), Pe(z, (H, D) => Y == null ? void 0 : Y(H, D), n), x(U, z);
    };
    oe(R, (U) => {
      u() ? U(C) : U(F, !1);
    });
  }
  return x(t, q), xe(G);
}
var Cg = /* @__PURE__ */ de("<div></div>");
function rd(t, e) {
  Te(e, !0);
  let n = v(e, "use", 19, () => []), r = v(e, "class", 3, ""), i = v(e, "style", 3, ""), a = v(e, "active", 3, !1), o = /* @__PURE__ */ je(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "style",
    "active"
  ]), u, l = /* @__PURE__ */ ve(void 0), c = new vi(), d = Ie({}), m = Ie({});
  at(() => (K(
    l,
    new hg({
      addClass: g,
      removeClass: h,
      hasClass: f,
      setStyle: p,
      registerEventHandler: (E, L) => c.on(I(), E, L),
      deregisterEventHandler: (E, L) => c.off(I(), E, L)
    }),
    !0
  ), s(l).init(), () => {
    var E;
    (E = s(l)) == null || E.destroy(), c.clear();
  }));
  function f(E) {
    return E in d ? d[E] : I().classList.contains(E);
  }
  function g(E) {
    d[E] || (d[E] = !0);
  }
  function h(E) {
    (!(E in d) || d[E]) && (d[E] = !1);
  }
  function p(E, L) {
    m[E] != L && (L === "" || L == null ? delete m[E] : m[E] = L);
  }
  function b() {
    var E;
    (E = s(l)) == null || E.activate();
  }
  function y() {
    var E;
    (E = s(l)) == null || E.deactivate();
  }
  function A(E) {
    var L;
    (L = s(l)) == null || L.setRippleCenter(E);
  }
  function I() {
    return u;
  }
  var _ = { activate: b, deactivate: y, setRippleCenter: A, getElement: I }, S = Cg();
  return Ne(S, (E, L) => ({ class: E, style: L, ...o }), [
    () => Me({
      "mdc-line-ripple": !0,
      "mdc-line-ripple--active": a(),
      ...d,
      [r()]: !0
    }),
    () => Object.entries(m).map(([E, L]) => `${E}: ${L};`).concat([i()]).join(" ")
  ]), Ce(S, (E) => u = E, () => u), Pe(S, (E, L) => Y == null ? void 0 : Y(E, L), n), x(t, S), xe(_);
}
var Tg = /* @__PURE__ */ de('<div class="mdc-notched-outline__notch"><!></div>'), xg = /* @__PURE__ */ de('<div><div class="mdc-notched-outline__leading"></div> <!> <div class="mdc-notched-outline__trailing"></div></div>');
function id(t, e) {
  Te(e, !0);
  let n = v(e, "use", 19, () => []), r = v(e, "class", 3, ""), i = v(e, "notched", 3, !1), a = v(e, "noLabel", 3, !1), o = /* @__PURE__ */ je(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "notched",
    "noLabel",
    "children"
  ]), u, l = /* @__PURE__ */ ve(void 0), c = /* @__PURE__ */ ve(void 0), d = Ie({}), m = Ie({}), f;
  Le(() => {
    s(c) !== f && (s(c) ? (s(c).addStyle("transition-duration", "0s"), g("mdc-notched-outline--upgraded"), requestAnimationFrame(() => {
      s(c) && s(c).removeStyle("transition-duration");
    })) : h("mdc-notched-outline--upgraded"), f = s(c));
  }), ce("SMUI:floating-label:mount", (T) => {
    K(c, T, !0);
  }), ce("SMUI:floating-label:unmount", () => {
    K(c, void 0);
  }), at(() => (K(
    l,
    new gg({
      addClass: g,
      removeClass: h,
      setNotchWidthProperty: (T) => p("width", T + "px"),
      removeNotchWidthProperty: () => b("width")
    }),
    !0
  ), s(l).init(), () => {
    var T;
    (T = s(l)) == null || T.destroy();
  }));
  function g(T) {
    d[T] || (d[T] = !0);
  }
  function h(T) {
    (!(T in d) || d[T]) && (d[T] = !1);
  }
  function p(T, w) {
    m[T] != w && (w === "" || w == null ? delete m[T] : m[T] = w);
  }
  function b(T) {
    T in m && delete m[T];
  }
  function y(T) {
    var w;
    (w = s(l)) == null || w.notch(T);
  }
  function A() {
    var T;
    (T = s(l)) == null || T.closeNotch();
  }
  function I() {
    return u;
  }
  var _ = { notch: y, closeNotch: A, getElement: I }, S = xg();
  Ne(S, (T) => ({ class: T, ...o }), [
    () => Me({
      "mdc-notched-outline": !0,
      "mdc-notched-outline--notched": i(),
      "mdc-notched-outline--no-label": a(),
      ...d,
      [r()]: !0
    })
  ]);
  var E = _e(fe(S), 2);
  {
    var L = (T) => {
      var w = Tg(), k = fe(w);
      Ae(k, () => e.children ?? me), Oe((Z) => bt(w, Z), [
        () => Object.entries(m).map(([Z, G]) => `${Z}: ${G};`).join(" ")
      ]), x(T, w);
    };
    oe(E, (T) => {
      a() || T(L);
    });
  }
  return Ce(S, (T) => u = T, () => u), Pe(S, (T, w) => Y == null ? void 0 : Y(T, w), n), x(t, S), xe(_);
}
function aa(t, e) {
  Te(e, !0);
  let n = v(e, "use", 19, () => []), r = v(e, "class", 3, ""), i = v(e, "component", 3, Br), a = v(e, "tag", 3, "div"), o = v(e, "_smuiClass", 3, ""), u = v(e, "_smuiClassMap", 23, () => ({})), l = v(e, "_smuiContexts", 19, () => ({})), c = v(e, "_smuiProps", 19, () => ({})), d = /* @__PURE__ */ je(e, [
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
  Object.entries(u()).forEach(([y, A]) => {
    const I = ye(A);
    I && "subscribe" in I && f.push(I.subscribe((_) => {
      u()[y] = _;
    }));
  });
  for (let y in l())
    l().hasOwnProperty(y) && ce(y, l()[y]);
  In(() => {
    for (const y of f)
      y();
  });
  function g() {
    return m.getElement();
  }
  var h = { getElement: g }, p = ne(), b = X(p);
  {
    let y = /* @__PURE__ */ he(() => Me({
      [o()]: !0,
      ...u(),
      [r()]: !0
    }));
    rr(b, i, (A, I) => {
      Ce(
        I(A, Je(
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
            children: (_, S) => {
              var E = ne(), L = X(E);
              Ae(L, () => e.children ?? me), x(_, E);
            },
            $$slots: { default: !0 }
          }
        )),
        (_) => m = _,
        () => m
      );
    });
  }
  return x(t, p), xe(h);
}
function wg(t, e) {
  Te(e, !0);
  let n = /* @__PURE__ */ je(e, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return Ce(
    aa(t, Je({ _smuiClass: "mdc-text-field-helper-line", tag: "div" }, () => n, {
      children: (o, u) => {
        var l = ne(), c = X(l);
        Ae(c, () => e.children ?? me), x(o, l);
      },
      $$slots: { default: !0 }
    })),
    (o) => r = o,
    () => r
  ), xe(a);
}
function Lg(t, e) {
  Te(e, !0);
  let n = /* @__PURE__ */ je(e, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return Ce(
    aa(t, Je(
      {
        _smuiClass: "mdc-text-field__affix mdc-text-field__affix--prefix",
        tag: "span"
      },
      () => n,
      {
        children: (o, u) => {
          var l = ne(), c = X(l);
          Ae(c, () => e.children ?? me), x(o, l);
        },
        $$slots: { default: !0 }
      }
    )),
    (o) => r = o,
    () => r
  ), xe(a);
}
function Og(t, e) {
  Te(e, !0);
  let n = /* @__PURE__ */ je(e, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return Ce(
    aa(t, Je(
      {
        _smuiClass: "mdc-text-field__affix mdc-text-field__affix--suffix",
        tag: "span"
      },
      () => n,
      {
        children: (o, u) => {
          var l = ne(), c = X(l);
          Ae(c, () => e.children ?? me), x(o, l);
        },
        $$slots: { default: !0 }
      }
    )),
    (o) => r = o,
    () => r
  ), xe(a);
}
var Rg = /* @__PURE__ */ de("<input/>");
function Dg(t, e) {
  Te(e, !0);
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
  Le(() => {
    i() === "file" ? delete y.value : y.value = o() == null ? "" : o();
  }), at(() => {
    d() && m() && c(k().matches(":invalid"));
  });
  function A(C) {
    return C === "" ? Number.NaN : +C;
  }
  function I(C) {
    if (i() === "file") {
      u(C.currentTarget.files);
      return;
    }
    if (C.currentTarget.value === "" && f()) {
      o(null);
      return;
    }
    if (C.currentTarget.value === "" && g()) {
      o(void 0);
      return;
    }
    switch (i()) {
      case "number":
      case "range":
        o(A(C.currentTarget.value));
        break;
      default:
        o(C.currentTarget.value);
        break;
    }
  }
  function _(C) {
    (i() === "file" || i() === "range") && I(C), l(!0), d() && c(k().matches(":invalid"));
  }
  function S(C) {
    return C in b ? b[C] ?? null : k().getAttribute(C);
  }
  function E(C, F) {
    b[C] !== F && (b[C] = F);
  }
  function L(C) {
    (!(C in b) || b[C] != null) && (b[C] = void 0);
  }
  function T() {
    k().focus();
  }
  function w() {
    k().blur();
  }
  function k() {
    return p;
  }
  var Z = { getAttr: S, addAttr: E, removeAttr: L, focus: T, blur: w, getElement: k }, G = Rg(), q = (C) => {
    var F;
    i() !== "file" && I(C), (F = e.oninput) == null || F.call(e, C);
  }, R = (C) => {
    var F;
    _(C), (F = e.onchange) == null || F.call(e, C);
  };
  return Ne(
    G,
    (C) => ({
      class: C,
      type: i(),
      placeholder: a(),
      ...y,
      ...b,
      ...h,
      oninput: q,
      onchange: R
    }),
    [
      () => Me({ "mdc-text-field__input": !0, [r()]: !0 })
    ],
    void 0,
    void 0,
    !0
  ), Ce(G, (C) => p = C, () => p), Pe(G, (C, F) => Y == null ? void 0 : Y(C, F), n), x(t, G), xe(Z);
}
var Mg = /* @__PURE__ */ de("<textarea></textarea>");
function Pg(t, e) {
  Te(e, !0);
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
  function p(T) {
    return T in g ? g[T] ?? null : _().getAttribute(T);
  }
  function b(T, w) {
    g[T] !== w && (g[T] = w);
  }
  function y(T) {
    (!(T in g) || g[T] != null) && (g[T] = void 0);
  }
  function A() {
    _().focus();
  }
  function I() {
    _().blur();
  }
  function _() {
    return f;
  }
  var S = { getAttr: p, addAttr: b, removeAttr: y, focus: A, blur: I, getElement: _ }, E = Mg(), L = (T) => {
    var w;
    h(), (w = e.onchange) == null || w.call(e, T);
  };
  return Ne(
    E,
    (T) => ({
      class: T,
      style: `${d() ? "" : "resize: none; "}${i()}`,
      ...g,
      ...m,
      onchange: L
    }),
    [
      () => Me({ "mdc-text-field__input": !0, [r()]: !0 })
    ]
  ), Ce(E, (T) => f = T, () => f), Pe(E, (T, w) => Y == null ? void 0 : Y(T, w), n), di(() => wa(E, a)), x(t, E), xe(S);
}
var Hg = /* @__PURE__ */ de('<span class="mdc-text-field__ripple"></span>'), Ng = /* @__PURE__ */ de("<!> <!>", 1), Ug = /* @__PURE__ */ de("<span><!> <!></span>"), Fg = /* @__PURE__ */ de("<!> <!> <!>", 1), kg = /* @__PURE__ */ de("<label><!> <!> <!> <!> <!> <!> <!></label>"), Bg = /* @__PURE__ */ de("<div><!> <!> <!> <!> <!></div>"), Vg = /* @__PURE__ */ de("<!> <!>", 1);
function Os(t, e) {
  Te(e, !0);
  const { applyPassive: n } = $c;
  let r = () => {
  };
  function i(j) {
    return j === r;
  }
  let a = v(e, "use", 19, () => []), o = v(e, "class", 3, ""), u = v(e, "style", 3, ""), l = v(e, "ripple", 3, !0), c = v(e, "disabled", 3, !1), d = v(e, "required", 3, !1), m = v(e, "textarea", 3, !1), f = v(e, "variant", 19, () => m() ? "outlined" : "standard"), g = v(e, "noLabel", 3, !1), h = v(e, "type", 3, "text"), p = v(e, "value", 15), b = v(e, "files", 15, r), y = v(e, "invalid", 15, r), A = v(e, "updateInvalid", 19, () => i(y())), I = v(e, "initialInvalid", 3, !1), _ = v(e, "dirty", 15, !1), S = v(e, "validateOnValueChange", 19, A), E = v(e, "useNativeValidation", 19, A), L = v(e, "withLeadingIcon", 3, r), T = v(e, "withTrailingIcon", 3, r), w = v(e, "input", 7), k = v(e, "floatingLabel", 7), Z = v(e, "lineRipple", 7), G = v(e, "notchedOutline", 7), q = /* @__PURE__ */ je(e, [
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
  let C, F = /* @__PURE__ */ ve(void 0), U = new vi(), z = Ie({}), te = Ie({}), H = /* @__PURE__ */ ve(void 0), D = /* @__PURE__ */ ve(!1), O = /* @__PURE__ */ ve(Ie(I())), le = ye("SMUI:addLayoutListener"), re, M, B = new Promise((j) => M = j), P, J, $, se;
  const Ee = /* @__PURE__ */ he(() => w() && w().getElement());
  Le(() => {
    (_() || s(O) || !A()) && s(F) && s(F).isValid() !== !y() && (A() ? y(!s(F).isValid()) : s(F).setValid(!y()));
  }), Le(() => {
    s(F) && s(F).getValidateOnValueChange() !== S() && s(F).setValidateOnValueChange(i(S()) ? !1 : S());
  }), Le(() => {
    s(F) && s(F).setUseNativeValidation(i(E()) ? !0 : E());
  }), Le(() => {
    s(F) && s(F).setDisabled(c());
  });
  let ee = p();
  Le(() => {
    if (s(F) && R && ee !== p()) {
      ee = p();
      const j = `${p() == null ? "" : p()}`;
      s(F).getValue() !== j && s(F).setValue(j);
    }
  }), le && (re = le(V)), ce("SMUI:textfield:leading-icon:mount", (j) => {
    P = j;
  }), ce("SMUI:textfield:leading-icon:unmount", () => {
    P = void 0;
  }), ce("SMUI:textfield:trailing-icon:mount", (j) => {
    J = j;
  }), ce("SMUI:textfield:trailing-icon:unmount", () => {
    J = void 0;
  }), ce("SMUI:textfield:helper-text:id", (j) => {
    K(H, j, !0);
  }), ce("SMUI:textfield:helper-text:mount", (j) => {
    $ = j;
  }), ce("SMUI:textfield:helper-text:unmount", () => {
    K(H, void 0), $ = void 0;
  }), ce("SMUI:textfield:character-counter:mount", (j) => {
    se = j;
  }), ce("SMUI:textfield:character-counter:unmount", () => {
    se = void 0;
  }), at(() => {
    var j;
    if (K(
      F,
      new yg(
        {
          // getRootAdapterMethods_
          addClass: we,
          removeClass: Re,
          hasClass: ae,
          registerTextFieldInteractionHandler: (ie, Ue) => U.on(Q(), ie, Ue),
          deregisterTextFieldInteractionHandler: (ie, Ue) => U.off(Q(), ie, Ue),
          registerValidationAttributeChangeHandler: (ie) => {
            const Ue = (_t) => _t.map((Vt) => Vt.attributeName).filter((Vt) => Vt), ft = new MutationObserver((_t) => {
              E() && ie(Ue(_t));
            }), It = { attributes: !0 };
            return w() && ft.observe(w().getElement(), It), ft;
          },
          deregisterValidationAttributeChangeHandler: (ie) => {
            ie.disconnect();
          },
          // getInputAdapterMethods_
          getNativeInput: () => {
            var ie;
            return ((ie = w()) == null ? void 0 : ie.getElement()) ?? null;
          },
          setInputAttr: (ie, Ue) => {
            var ft;
            (ft = w()) == null || ft.addAttr(ie, Ue);
          },
          removeInputAttr: (ie) => {
            var Ue;
            (Ue = w()) == null || Ue.removeAttr(ie);
          },
          isFocused: () => {
            var ie;
            return document.activeElement === ((ie = w()) == null ? void 0 : ie.getElement());
          },
          registerInputInteractionHandler: (ie, Ue) => {
            var It;
            const ft = (It = w()) == null ? void 0 : It.getElement();
            if (ft) {
              const _t = n();
              U.on(ft, ie, Ue, typeof _t == "boolean" ? { capture: _t } : _t);
            }
          },
          deregisterInputInteractionHandler: (ie, Ue) => {
            var It;
            const ft = (It = w()) == null ? void 0 : It.getElement();
            ft && U.off(ft, ie, Ue);
          },
          // getLabelAdapterMethods_
          floatLabel: (ie) => k() && k().float(ie),
          getLabelWidth: () => k() ? k().getWidth() : 0,
          hasLabel: () => !!k(),
          shakeLabel: (ie) => k() && k().shake(ie),
          setLabelRequired: (ie) => k() && k().setRequired(ie),
          // getLineRippleAdapterMethods_
          activateLineRipple: () => Z() && Z().activate(),
          deactivateLineRipple: () => Z() && Z().deactivate(),
          setLineRippleTransformOrigin: (ie) => Z() && Z().setRippleCenter(ie),
          // getOutlineAdapterMethods_
          closeOutline: () => G() && G().closeNotch(),
          hasOutline: () => !!G(),
          notchOutline: (ie) => G() && G().notch(ie)
        },
        {
          get helperText() {
            return $;
          },
          get characterCounter() {
            return se;
          },
          get leadingIcon() {
            return P;
          },
          get trailingIcon() {
            return J;
          }
        }
      ),
      !0
    ), R) {
      if (w() == null)
        throw new Error("SMUI Textfield must be initialized with either a non-undefined initial value or an Input component.");
      (j = s(F)) == null || j.init();
    } else
      hc().then(() => {
        var ie;
        if (w() == null)
          throw new Error("SMUI Textfield must be initialized with either a non-undefined initial value or an Input component.");
        (ie = s(F)) == null || ie.init();
      });
    return M(), () => {
      var ie;
      (ie = s(F)) == null || ie.destroy(), U.clear();
    };
  }), In(() => {
    re && re();
  });
  function ae(j) {
    return j in z ? z[j] ?? null : Q().classList.contains(j);
  }
  function we(j) {
    z[j] || (z[j] = !0);
  }
  function Re(j) {
    (!(j in z) || z[j]) && (z[j] = !1);
  }
  function He(j, ie) {
    te[j] != ie && (ie === "" || ie == null ? delete te[j] : te[j] = ie);
  }
  function Ge() {
    var j;
    (j = w()) == null || j.focus();
  }
  function ke() {
    var j;
    (j = w()) == null || j.blur();
  }
  function V() {
    if (s(F)) {
      const j = s(F).shouldFloat;
      s(F).notchOutline(j);
    }
  }
  function Q() {
    return C;
  }
  var ge = { focus: Ge, blur: ke, layout: V, getElement: Q }, De = Vg(), Be = X(De);
  {
    var ut = (j) => {
      var ie = kg();
      Ne(ie, (Xe, et, tt) => ({ class: Xe, style: et, for: void 0, ...tt }), [
        () => Me({
          "mdc-text-field": !0,
          "mdc-text-field--disabled": c(),
          "mdc-text-field--textarea": m(),
          "mdc-text-field--filled": f() === "filled",
          "mdc-text-field--outlined": f() === "outlined",
          "smui-text-field--standard": f() === "standard" && !m(),
          "mdc-text-field--no-label": g() || e.label == null,
          "mdc-text-field--label-floating": s(D) || p() != null && p() !== "",
          "mdc-text-field--with-leading-icon": i(L()) ? e.leadingIcon : L(),
          "mdc-text-field--with-trailing-icon": i(T()) ? e.trailingIcon : T(),
          "mdc-text-field--with-internal-counter": m() && e.internalCounter,
          "mdc-text-field--invalid": y(),
          ...z,
          [o()]: !0
        }),
        () => Object.entries(te).map(([Xe, et]) => `${Xe}: ${et};`).concat([u()]).join(" "),
        () => Bn(q, ["input$", "label$", "ripple$", "outline$", "helperLine$"])
      ]);
      var Ue = fe(ie);
      {
        var ft = (Xe) => {
          var et = Ng(), tt = X(et);
          {
            var Nt = (dt) => {
              var wt = Hg();
              x(dt, wt);
            };
            oe(tt, (dt) => {
              f() === "filled" && dt(Nt);
            });
          }
          var vn = _e(tt, 2);
          {
            var ot = (dt) => {
              {
                let wt = /* @__PURE__ */ he(() => s(D) || p() != null && p() !== "" && (typeof p() != "number" || !isNaN(p()))), nt = /* @__PURE__ */ he(() => it(q, "label$"));
                Ce(
                  yo(dt, Je(
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
                      children: (Dt, Rn) => {
                        var Mt = ne(), Et = X(Mt);
                        {
                          var Ut = (Gt) => {
                          }, ln = (Gt) => {
                            var un = ne(), Jt = X(un);
                            {
                              var Wn = (cn) => {
                                var zt = vt();
                                Oe(() => $e(zt, e.label)), x(cn, zt);
                              }, Vr = (cn) => {
                                var zt = ne(), qn = X(zt);
                                Ae(qn, () => e.label), x(cn, zt);
                              };
                              oe(
                                Jt,
                                (cn) => {
                                  typeof e.label == "string" ? cn(Wn) : cn(Vr, !1);
                                },
                                !0
                              );
                            }
                            x(Gt, un);
                          };
                          oe(Et, (Gt) => {
                            e.label == null ? Gt(Ut) : Gt(ln, !1);
                          });
                        }
                        x(Dt, Mt);
                      },
                      $$slots: { default: !0 }
                    }
                  )),
                  (Dt) => k(Dt),
                  () => k()
                );
              }
            };
            oe(vn, (dt) => {
              !g() && e.label != null && dt(ot);
            });
          }
          x(Xe, et);
        };
        oe(Ue, (Xe) => {
          !m() && f() !== "outlined" && Xe(ft);
        });
      }
      var It = _e(Ue, 2);
      {
        var _t = (Xe) => {
          {
            let et = /* @__PURE__ */ he(() => g() || e.label == null), tt = /* @__PURE__ */ he(() => it(q, "outline$"));
            Ce(
              id(Xe, Je(
                {
                  get noLabel() {
                    return s(et);
                  }
                },
                () => s(tt),
                {
                  children: (Nt, vn) => {
                    var ot = ne(), dt = X(ot);
                    {
                      var wt = (nt) => {
                        {
                          let Dt = /* @__PURE__ */ he(() => s(D) || p() != null && p() !== "" && (typeof p() != "number" || !isNaN(p()))), Rn = /* @__PURE__ */ he(() => it(q, "label$"));
                          Ce(
                            yo(nt, Je(
                              {
                                get floatAbove() {
                                  return s(Dt);
                                },
                                get required() {
                                  return d();
                                },
                                wrapped: !0
                              },
                              () => s(Rn),
                              {
                                children: (Mt, Et) => {
                                  var Ut = ne(), ln = X(Ut);
                                  {
                                    var Gt = (Jt) => {
                                    }, un = (Jt) => {
                                      var Wn = ne(), Vr = X(Wn);
                                      {
                                        var cn = (qn) => {
                                          var Gr = vt();
                                          Oe(() => $e(Gr, e.label)), x(qn, Gr);
                                        }, zt = (qn) => {
                                          var Gr = ne(), ko = X(Gr);
                                          Ae(ko, () => e.label), x(qn, Gr);
                                        };
                                        oe(
                                          Vr,
                                          (qn) => {
                                            typeof e.label == "string" ? qn(cn) : qn(zt, !1);
                                          },
                                          !0
                                        );
                                      }
                                      x(Jt, Wn);
                                    };
                                    oe(ln, (Jt) => {
                                      e.label == null ? Jt(Gt) : Jt(un, !1);
                                    });
                                  }
                                  x(Mt, Ut);
                                },
                                $$slots: { default: !0 }
                              }
                            )),
                            (Mt) => k(Mt),
                            () => k()
                          );
                        }
                      };
                      oe(dt, (nt) => {
                        !g() && e.label != null && nt(wt);
                      });
                    }
                    x(Nt, ot);
                  },
                  $$slots: { default: !0 }
                }
              )),
              (Nt) => G(Nt),
              () => G()
            );
          }
        };
        oe(It, (Xe) => {
          (m() || f() === "outlined") && Xe(_t);
        });
      }
      var Vt = _e(It, 2);
      Za(Vt, {
        key: "SMUI:textfield:icon:leading",
        value: !0,
        children: (Xe, et) => {
          var tt = ne(), Nt = X(tt);
          Ae(Nt, () => e.leadingIcon ?? me), x(Xe, tt);
        },
        $$slots: { default: !0 }
      });
      var yr = _e(Vt, 2);
      Ae(yr, () => e.children ?? me);
      var gt = _e(yr, 2);
      {
        var Ht = (Xe) => {
          var et = Ug(), tt = fe(et);
          {
            let vn = /* @__PURE__ */ he(() => it(q, "input$"));
            Ce(
              Pg(tt, Je(
                {
                  get disabled() {
                    return c();
                  },
                  get required() {
                    return d();
                  },
                  get updateInvalid() {
                    return A();
                  },
                  get initialInvalid() {
                    return s(O);
                  },
                  get "aria-controls"() {
                    return s(H);
                  },
                  get "aria-describedby"() {
                    return s(H);
                  }
                },
                () => s(vn),
                {
                  onblur: (ot) => {
                    var dt;
                    K(D, !1), K(O, !0), Ke(Q(), "blur", ot), (dt = e.input$onblur) == null || dt.call(e, ot);
                  },
                  onfocus: (ot) => {
                    var dt;
                    K(D, !0), Ke(Q(), "focus", ot), (dt = e.input$onfocus) == null || dt.call(e, ot);
                  },
                  get value() {
                    return p();
                  },
                  set value(ot) {
                    p(ot);
                  },
                  get dirty() {
                    return _();
                  },
                  set dirty(ot) {
                    _(ot);
                  },
                  get invalid() {
                    return y();
                  },
                  set invalid(ot) {
                    y(ot);
                  }
                }
              )),
              (ot) => w(ot),
              () => w()
            );
          }
          var Nt = _e(tt, 2);
          Ae(Nt, () => e.internalCounter ?? me), Oe((vn) => Xs(et, 1, vn), [
            () => Ic(Me({
              "mdc-text-field__resizer": !("input$resizable" in q) || e.input$resizable
            }))
          ]), x(Xe, et);
        }, St = (Xe) => {
          var et = Fg(), tt = X(et);
          {
            var Nt = (wt) => {
              var nt = ne(), Dt = X(nt);
              {
                var Rn = (Et) => {
                  Lg(Et, {
                    children: (Ut, ln) => {
                      var Gt = vt();
                      Oe(() => $e(Gt, e.prefix)), x(Ut, Gt);
                    },
                    $$slots: { default: !0 }
                  });
                }, Mt = (Et) => {
                  var Ut = ne(), ln = X(Ut);
                  Ae(ln, () => e.prefix ?? me), x(Et, Ut);
                };
                oe(Dt, (Et) => {
                  typeof e.prefix == "string" ? Et(Rn) : Et(Mt, !1);
                });
              }
              x(wt, nt);
            };
            oe(tt, (wt) => {
              e.prefix != null && wt(Nt);
            });
          }
          var vn = _e(tt, 2);
          {
            let wt = /* @__PURE__ */ he(() => it(q, "input$"));
            Ce(
              Dg(vn, Je(
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
                    return A();
                  },
                  get initialInvalid() {
                    return s(O);
                  },
                  get "aria-controls"() {
                    return s(H);
                  },
                  get "aria-describedby"() {
                    return s(H);
                  }
                },
                () => g() && e.label != null && typeof e.label == "string" ? { placeholder: e.label } : {},
                () => s(wt),
                {
                  onblur: (nt) => {
                    var Dt;
                    K(D, !1), K(O, !0), Ke(Q(), "blur", nt), (Dt = e.input$onblur) == null || Dt.call(e, nt);
                  },
                  onfocus: (nt) => {
                    var Dt;
                    K(D, !0), Ke(Q(), "focus", nt), (Dt = e.input$onfocus) == null || Dt.call(e, nt);
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
          var ot = _e(vn, 2);
          {
            var dt = (wt) => {
              var nt = ne(), Dt = X(nt);
              {
                var Rn = (Et) => {
                  Og(Et, {
                    children: (Ut, ln) => {
                      var Gt = vt();
                      Oe(() => $e(Gt, e.suffix)), x(Ut, Gt);
                    },
                    $$slots: { default: !0 }
                  });
                }, Mt = (Et) => {
                  var Ut = ne(), ln = X(Ut);
                  Ae(ln, () => e.suffix ?? me), x(Et, Ut);
                };
                oe(Dt, (Et) => {
                  typeof e.suffix == "string" ? Et(Rn) : Et(Mt, !1);
                });
              }
              x(wt, nt);
            };
            oe(ot, (wt) => {
              e.suffix != null && wt(dt);
            });
          }
          x(Xe, et);
        };
        oe(gt, (Xe) => {
          m() && typeof p() == "string" ? Xe(Ht) : Xe(St, !1);
        });
      }
      var On = _e(gt, 2);
      Za(On, {
        key: "SMUI:textfield:icon:leading",
        value: !1,
        children: (Xe, et) => {
          var tt = ne(), Nt = X(tt);
          Ae(Nt, () => e.trailingIcon ?? me), x(Xe, tt);
        },
        $$slots: { default: !0 }
      });
      var _i = _e(On, 2);
      {
        var jn = (Xe) => {
          {
            let et = /* @__PURE__ */ he(() => it(q, "ripple$"));
            Ce(rd(Xe, Je(() => s(et))), (tt) => Z(tt), () => Z());
          }
        };
        oe(_i, (Xe) => {
          !m() && f() !== "outlined" && l() && Xe(jn);
        });
      }
      Ce(ie, (Xe) => C = Xe, () => C), Pe(ie, (Xe, et) => Yt == null ? void 0 : Yt(Xe, et), () => ({
        ripple: !m() && f() === "filled",
        unbounded: !1,
        addClass: we,
        removeClass: Re,
        addStyle: He,
        eventTarget: s(Ee),
        activeTarget: s(Ee),
        initPromise: B
      })), Pe(ie, (Xe, et) => Y == null ? void 0 : Y(Xe, et), a), x(j, ie);
    }, mt = (j) => {
      var ie = Bg();
      Ne(ie, (gt, Ht, St) => ({ class: gt, style: Ht, ...St }), [
        () => Me({
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
          ...z,
          [o()]: !0
        }),
        () => Object.entries(te).map(([gt, Ht]) => `${gt}: ${Ht};`).concat([u()]).join(" "),
        () => Bn(q, ["input$", "label$", "ripple$", "outline$", "helperLine$"])
      ]);
      var Ue = fe(ie);
      {
        var ft = (gt) => {
          var Ht = ne(), St = X(Ht);
          Ae(St, () => e.label ?? me), x(gt, Ht);
        };
        oe(Ue, (gt) => {
          typeof e.label != "string" && gt(ft);
        });
      }
      var It = _e(Ue, 2);
      Za(It, {
        key: "SMUI:textfield:icon:leading",
        value: !0,
        children: (gt, Ht) => {
          var St = ne(), On = X(St);
          Ae(On, () => e.leadingIcon ?? me), x(gt, St);
        },
        $$slots: { default: !0 }
      });
      var _t = _e(It, 2);
      Ae(_t, () => e.children ?? me);
      var Vt = _e(_t, 2);
      Za(Vt, {
        key: "SMUI:textfield:icon:leading",
        value: !1,
        children: (gt, Ht) => {
          var St = ne(), On = X(St);
          Ae(On, () => e.trailingIcon ?? me), x(gt, St);
        },
        $$slots: { default: !0 }
      });
      var yr = _e(Vt, 2);
      Ae(yr, () => e.line ?? me), Ce(ie, (gt) => C = gt, () => C), Pe(ie, (gt, Ht) => Yt == null ? void 0 : Yt(gt, Ht), () => ({
        ripple: l(),
        unbounded: !1,
        addClass: we,
        removeClass: Re,
        addStyle: He
      })), Pe(ie, (gt, Ht) => Y == null ? void 0 : Y(gt, Ht), a), x(j, ie);
    };
    oe(Be, (j) => {
      R ? j(ut) : j(mt, !1);
    });
  }
  var pe = _e(Be, 2);
  {
    var W = (j) => {
      {
        let ie = /* @__PURE__ */ he(() => it(q, "helperLine$"));
        wg(j, Je(() => s(ie), {
          children: (Ue, ft) => {
            var It = ne(), _t = X(It);
            Ae(_t, () => e.helper ?? me), x(Ue, It);
          },
          $$slots: { default: !0 }
        }));
      }
    };
    oe(pe, (j) => {
      e.helper && j(W);
    });
  }
  return x(t, De), xe(ge);
}
var Gg = /* @__PURE__ */ de("<i><!></i>");
function jg(t, e) {
  Te(e, !0);
  const n = () => kn(h, "$leadingStore", r), [r, i] = ir();
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
  ]), d, m = /* @__PURE__ */ ve(void 0), f = new vi(), g = Ie({});
  const h = ye("SMUI:textfield:icon:leading"), p = n();
  let b = /* @__PURE__ */ ve(void 0);
  const y = /* @__PURE__ */ he(() => ({ role: e.role, tabindex: u() })), A = ye("SMUI:textfield:leading-icon:mount"), I = ye("SMUI:textfield:leading-icon:unmount"), _ = ye("SMUI:textfield:trailing-icon:mount"), S = ye("SMUI:textfield:trailing-icon:unmount");
  at(() => (K(
    m,
    new Eg({
      getAttr: E,
      setAttr: L,
      removeAttr: T,
      setContent: (F) => {
        K(b, F, !0);
      },
      registerInteractionHandler: (F, U) => f.on(w(), F, U),
      deregisterInteractionHandler: (F, U) => f.off(w(), F, U),
      notifyIconAction: () => Ke(w(), "SMUITextFieldIcon")
    }),
    !0
  ), p ? A && A(s(m)) : _ && _(s(m)), s(m).init(), () => {
    var F;
    s(m) && (p ? I && I(s(m)) : S && S(s(m))), (F = s(m)) == null || F.destroy(), f.clear();
  }));
  function E(F) {
    return F in g ? g[F] ?? null : w().getAttribute(F);
  }
  function L(F, U) {
    g[F] !== U && (g[F] = U);
  }
  function T(F) {
    (!(F in g) || g[F] != null) && (g[F] = void 0);
  }
  function w() {
    return d;
  }
  var k = { getElement: w }, Z = Gg();
  Ne(
    Z,
    (F) => ({
      class: F,
      "aria-hidden": u() === -1 ? "true" : "false",
      "aria-disabled": e.role === "button" ? l() ? "true" : "false" : void 0,
      ...s(y),
      ...g,
      ...c
    }),
    [
      () => Me({
        "mdc-text-field__icon": !0,
        "mdc-text-field__icon--leading": p,
        "mdc-text-field__icon--trailing": !p,
        [o()]: !0
      })
    ]
  );
  var G = fe(Z);
  {
    var q = (F) => {
      var U = ne(), z = X(U);
      Ae(z, () => e.children ?? me), x(F, U);
    }, R = (F) => {
      var U = vt();
      Oe(() => $e(U, s(b))), x(F, U);
    };
    oe(G, (F) => {
      s(b) == null ? F(q) : F(R, !1);
    });
  }
  Ce(Z, (F) => d = F, () => d), Pe(Z, (F, U) => Y == null ? void 0 : Y(F, U), a), x(t, Z);
  var C = xe(k);
  return i(), C;
}
function Wg(t, e) {
  Te(e, !0);
  let n = v(e, "placeholder", 3, ""), r = v(e, "label", 3, ""), i = v(e, "icon", 3, ""), a = v(e, "value", 15, ""), o = v(e, "variant", 3, "standard"), u = v(e, "styles", 3, ""), l = v(e, "required", 3, !1), c = v(e, "invalid", 3, !1), d = v(e, "oninput", 3, () => {
  });
  var m = ne(), f = X(m);
  {
    var g = (p) => {
      {
        const b = (A) => {
          jg(A, {
            class: "material-icons",
            children: (I, _) => {
              var S = vt();
              Oe(() => $e(S, i())), x(I, S);
            },
            $$slots: { default: !0 }
          });
        };
        let y = /* @__PURE__ */ he(() => `width: 100%; ${u()}`);
        Os(p, {
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
          set value(A) {
            a(A);
          },
          leadingIcon: b,
          $$slots: { leadingIcon: !0 }
        });
      }
    }, h = (p) => {
      Os(p, {
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
  x(t, m), xe();
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
var qg = {
  ANCHOR: "mdc-menu-surface--anchor",
  ANIMATING_CLOSED: "mdc-menu-surface--animating-closed",
  ANIMATING_OPEN: "mdc-menu-surface--animating-open",
  FIXED: "mdc-menu-surface--fixed",
  IS_OPEN_BELOW: "mdc-menu-surface--is-open-below",
  OPEN: "mdc-menu-surface--open",
  ROOT: "mdc-menu-surface"
}, zg = {
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
}, ha = {
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
}, Ct;
(function(t) {
  t[t.BOTTOM = 1] = "BOTTOM", t[t.CENTER = 2] = "CENTER", t[t.RIGHT = 4] = "RIGHT", t[t.FLIP_RTL = 8] = "FLIP_RTL";
})(Ct || (Ct = {}));
var ai;
(function(t) {
  t[t.TOP_LEFT = 0] = "TOP_LEFT", t[t.TOP_RIGHT = 4] = "TOP_RIGHT", t[t.BOTTOM_LEFT = 1] = "BOTTOM_LEFT", t[t.BOTTOM_RIGHT = 5] = "BOTTOM_RIGHT", t[t.TOP_START = 8] = "TOP_START", t[t.TOP_END = 12] = "TOP_END", t[t.BOTTOM_START = 9] = "BOTTOM_START", t[t.BOTTOM_END = 13] = "BOTTOM_END";
})(ai || (ai = {}));
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
var Er, lr, Ye = {
  LIST_ITEM_ACTIVATED_CLASS: "mdc-list-item--activated",
  LIST_ITEM_CLASS: "mdc-list-item",
  LIST_ITEM_DISABLED_CLASS: "mdc-list-item--disabled",
  LIST_ITEM_SELECTED_CLASS: "mdc-list-item--selected",
  LIST_ITEM_TEXT_CLASS: "mdc-list-item__text",
  LIST_ITEM_PRIMARY_TEXT_CLASS: "mdc-list-item__primary-text",
  ROOT: "mdc-list"
};
Er = {}, Er["" + Ye.LIST_ITEM_ACTIVATED_CLASS] = "mdc-list-item--activated", Er["" + Ye.LIST_ITEM_CLASS] = "mdc-list-item", Er["" + Ye.LIST_ITEM_DISABLED_CLASS] = "mdc-list-item--disabled", Er["" + Ye.LIST_ITEM_SELECTED_CLASS] = "mdc-list-item--selected", Er["" + Ye.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-list-item__primary-text", Er["" + Ye.ROOT] = "mdc-list";
var Ci = (lr = {}, lr["" + Ye.LIST_ITEM_ACTIVATED_CLASS] = "mdc-deprecated-list-item--activated", lr["" + Ye.LIST_ITEM_CLASS] = "mdc-deprecated-list-item", lr["" + Ye.LIST_ITEM_DISABLED_CLASS] = "mdc-deprecated-list-item--disabled", lr["" + Ye.LIST_ITEM_SELECTED_CLASS] = "mdc-deprecated-list-item--selected", lr["" + Ye.LIST_ITEM_TEXT_CLASS] = "mdc-deprecated-list-item__text", lr["" + Ye.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-deprecated-list-item__primary-text", lr["" + Ye.ROOT] = "mdc-deprecated-list", lr), Sr = {
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
    .` + Ci[Ye.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + Ci[Ye.LIST_ITEM_CLASS] + ` a
  `,
  DEPRECATED_SELECTOR: ".mdc-deprecated-list",
  FOCUSABLE_CHILD_ELEMENTS: `
    .` + Ye.LIST_ITEM_CLASS + ` button:not(:disabled),
    .` + Ye.LIST_ITEM_CLASS + ` a,
    .` + Ye.LIST_ITEM_CLASS + ` input[type="radio"]:not(:disabled),
    .` + Ye.LIST_ITEM_CLASS + ` input[type="checkbox"]:not(:disabled),
    .` + Ci[Ye.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + Ci[Ye.LIST_ITEM_CLASS] + ` a,
    .` + Ci[Ye.LIST_ITEM_CLASS] + ` input[type="radio"]:not(:disabled),
    .` + Ci[Ye.LIST_ITEM_CLASS] + ` input[type="checkbox"]:not(:disabled)
  `,
  RADIO_SELECTOR: 'input[type="radio"]',
  SELECTED_ITEM_SELECTOR: '[aria-selected="true"], [aria-current="true"]'
}, At = {
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
var Kg = ["input", "button", "textarea", "select"], Sn = function(t) {
  var e = t.target;
  if (e) {
    var n = ("" + e.tagName).toLowerCase();
    Kg.indexOf(n) === -1 && t.preventDefault();
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
function Xg() {
  var t = {
    bufferClearTimeout: 0,
    currentFirstChar: "",
    sortedIndexCursor: 0,
    typeaheadBuffer: ""
  };
  return t;
}
function Yg(t, e) {
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
function Rs(t, e) {
  var n = t.nextChar, r = t.focusItemAtIndex, i = t.sortedIndexByFirstChar, a = t.focusedItemIndex, o = t.skipFocus, u = t.isItemAtIndexDisabled;
  clearTimeout(e.bufferClearTimeout), e.bufferClearTimeout = setTimeout(function() {
    od(e);
  }, At.TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS), e.typeaheadBuffer = e.typeaheadBuffer + n;
  var l;
  return e.typeaheadBuffer.length === 1 ? l = Zg(i, a, u, e) : l = Qg(i, u, e), l !== -1 && !o && r(l), l;
}
function Zg(t, e, n, r) {
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
function Qg(t, e, n) {
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
function ad(t) {
  return t.typeaheadBuffer.length > 0;
}
function od(t) {
  t.typeaheadBuffer = "";
}
function au(t, e) {
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
    return Rs(y, e);
  }
  if (!p)
    return -1;
  r && Sn(n);
  var A = r && ad(e);
  if (A) {
    var y = {
      focusItemAtIndex: a,
      focusedItemIndex: i,
      nextChar: " ",
      sortedIndexByFirstChar: o,
      skipFocus: !1,
      isItemAtIndexDisabled: u
    };
    return Rs(y, e);
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
function Jg(t) {
  return t instanceof Array;
}
var $g = ["Alt", "Control", "Meta", "Shift"];
function ou(t) {
  var e = new Set(t ? $g.filter(function(n) {
    return t.getModifierState(n);
  }) : []);
  return function(n) {
    return n.every(function(r) {
      return e.has(r);
    }) && n.length === e.size;
  };
}
var ep = (
  /** @class */
  function(t) {
    ze(e, t);
    function e(n) {
      var r = t.call(this, be(be({}, e.defaultAdapter), n)) || this;
      return r.wrapFocus = !1, r.isVertical = !0, r.isSingleSelectionList = !1, r.areDisabledItemsFocusable = !0, r.selectedIndex = At.UNSET_INDEX, r.focusedItemIndex = At.UNSET_INDEX, r.useActivatedClass = !1, r.useSelectedAttr = !1, r.ariaCurrentAttrValue = null, r.isCheckboxList = !1, r.isRadioList = !1, r.lastSelectedIndex = null, r.hasTypeahead = !1, r.typeaheadState = Xg(), r.sortedIndexByFirstChar = /* @__PURE__ */ new Map(), r;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return Sr;
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
        return At;
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
      if (n !== At.UNSET_INDEX) {
        var r = this.adapter.listItemAtIndexHasClass(n, Ye.LIST_ITEM_ACTIVATED_CLASS);
        r && this.setUseActivatedClass(!0), this.isSingleSelectionList = !0, this.selectedIndex = n;
      }
    }, e.prototype.getSelectedIndexFromDOM = function() {
      for (var n = At.UNSET_INDEX, r = this.adapter.getListItemCount(), i = 0; i < r; i++) {
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
      return this.hasTypeahead && ad(this.typeaheadState);
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
      var a = this, o, u = Lt(n) === "ArrowLeft", l = Lt(n) === "ArrowUp", c = Lt(n) === "ArrowRight", d = Lt(n) === "ArrowDown", m = Lt(n) === "Home", f = Lt(n) === "End", g = Lt(n) === "Enter", h = Lt(n) === "Spacebar", p = this.isVertical && d || !this.isVertical && c, b = this.isVertical && l || !this.isVertical && u, y = n.key === "A" || n.key === "a", A = ou(n);
      if (this.adapter.isRootFocused()) {
        if ((b || f) && A([]))
          n.preventDefault(), this.focusLastElement();
        else if ((p || m) && A([]))
          n.preventDefault(), this.focusFirstElement();
        else if (b && A(["Shift"]) && this.isCheckboxList) {
          n.preventDefault();
          var I = this.focusLastElement();
          I !== -1 && this.setSelectedIndexOnAction(I, !1);
        } else if (p && A(["Shift"]) && this.isCheckboxList) {
          n.preventDefault();
          var I = this.focusFirstElement();
          I !== -1 && this.setSelectedIndexOnAction(I, !1);
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
          au(_, this.typeaheadState);
        }
        return;
      }
      var S = this.adapter.getFocusedElementIndex();
      if (!(S === -1 && (S = i, S < 0))) {
        if (p && A([]))
          Sn(n), this.focusNextElement(S);
        else if (b && A([]))
          Sn(n), this.focusPrevElement(S);
        else if (p && A(["Shift"]) && this.isCheckboxList) {
          Sn(n);
          var I = this.focusNextElement(S);
          I !== -1 && this.setSelectedIndexOnAction(I, !1);
        } else if (b && A(["Shift"]) && this.isCheckboxList) {
          Sn(n);
          var I = this.focusPrevElement(S);
          I !== -1 && this.setSelectedIndexOnAction(I, !1);
        } else if (m && A([]))
          Sn(n), this.focusFirstElement();
        else if (f && A([]))
          Sn(n), this.focusLastElement();
        else if (m && A(["Control", "Shift"]) && this.isCheckboxList) {
          if (Sn(n), this.isIndexDisabled(S))
            return;
          this.focusFirstElement(), this.toggleCheckboxRange(0, S, S);
        } else if (f && A(["Control", "Shift"]) && this.isCheckboxList) {
          if (Sn(n), this.isIndexDisabled(S))
            return;
          this.focusLastElement(), this.toggleCheckboxRange(S, this.adapter.getListItemCount() - 1, S);
        } else if (y && A(["Control"]) && this.isCheckboxList)
          n.preventDefault(), this.checkboxListToggleAll(this.selectedIndex === At.UNSET_INDEX ? [] : this.selectedIndex, !0);
        else if ((g || h) && A([])) {
          if (r) {
            var E = n.target;
            if (E && E.tagName === "A" && g || (Sn(n), this.isIndexDisabled(S)))
              return;
            this.isTypeaheadInProgress() || (this.isSelectableList() && this.setSelectedIndexOnAction(S, !1), this.adapter.notifyAction(S));
          }
        } else if ((g || h) && A(["Shift"]) && this.isCheckboxList) {
          var E = n.target;
          if (E && E.tagName === "A" && g || (Sn(n), this.isIndexDisabled(S)))
            return;
          this.isTypeaheadInProgress() || (this.toggleCheckboxRange((o = this.lastSelectedIndex) !== null && o !== void 0 ? o : S, S, S), this.adapter.notifyAction(S));
        }
        if (this.hasTypeahead) {
          var _ = {
            event: n,
            focusItemAtIndex: function(T) {
              a.focusItemAtIndex(T);
            },
            focusedItemIndex: this.focusedItemIndex,
            isTargetListItem: r,
            sortedIndexByFirstChar: this.sortedIndexByFirstChar,
            isItemAtIndexDisabled: function(T) {
              return a.isIndexDisabled(T);
            }
          };
          au(_, this.typeaheadState);
        }
      }
    }, e.prototype.handleClick = function(n, r, i) {
      var a, o = ou(i);
      n !== At.UNSET_INDEX && (this.isIndexDisabled(n) || (o([]) ? (this.isSelectableList() && this.setSelectedIndexOnAction(n, r), this.adapter.notifyAction(n)) : this.isCheckboxList && o(["Shift"]) && (this.toggleCheckboxRange((a = this.lastSelectedIndex) !== null && a !== void 0 ? a : n, n, n), this.adapter.notifyAction(n))));
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
      this.isIndexValid(n, !1) && (r ? (this.adapter.removeClassForElementIndex(n, Ye.LIST_ITEM_DISABLED_CLASS), this.adapter.setAttributeForElementIndex(n, Sr.ARIA_DISABLED, "false")) : (this.adapter.addClassForElementIndex(n, Ye.LIST_ITEM_DISABLED_CLASS), this.adapter.setAttributeForElementIndex(n, Sr.ARIA_DISABLED, "true")));
    }, e.prototype.setSingleSelectionAtIndex = function(n, r) {
      if (r === void 0 && (r = {}), !(this.selectedIndex === n && !r.forceUpdate)) {
        var i = Ye.LIST_ITEM_SELECTED_CLASS;
        this.useActivatedClass && (i = Ye.LIST_ITEM_ACTIVATED_CLASS), this.selectedIndex !== At.UNSET_INDEX && this.adapter.removeClassForElementIndex(this.selectedIndex, i), this.setAriaForSingleSelectionAtIndex(n), this.setTabindexAtIndex(n), n !== At.UNSET_INDEX && this.adapter.addClassForElementIndex(n, i), this.selectedIndex = n, r.isUserInteraction && !r.forceUpdate && this.adapter.notifySelectionChange([n]);
      }
    }, e.prototype.setAriaForSingleSelectionAtIndex = function(n) {
      this.selectedIndex === At.UNSET_INDEX && (this.ariaCurrentAttrValue = this.adapter.getAttributeForElementIndex(n, Sr.ARIA_CURRENT));
      var r = this.ariaCurrentAttrValue !== null, i = r ? Sr.ARIA_CURRENT : Sr.ARIA_SELECTED;
      if (this.selectedIndex !== At.UNSET_INDEX && this.adapter.setAttributeForElementIndex(this.selectedIndex, i, "false"), n !== At.UNSET_INDEX) {
        var a = r ? this.ariaCurrentAttrValue : "true";
        this.adapter.setAttributeForElementIndex(n, i, a);
      }
    }, e.prototype.getSelectionAttribute = function() {
      return this.useSelectedAttr ? Sr.ARIA_SELECTED : Sr.ARIA_CHECKED;
    }, e.prototype.setRadioAtIndex = function(n, r) {
      r === void 0 && (r = {});
      var i = this.getSelectionAttribute();
      this.adapter.setCheckedCheckboxOrRadioAtIndex(n, !0), !(this.selectedIndex === n && !r.forceUpdate) && (this.selectedIndex !== At.UNSET_INDEX && this.adapter.setAttributeForElementIndex(this.selectedIndex, i, "false"), this.adapter.setAttributeForElementIndex(n, i, "true"), this.selectedIndex = n, r.isUserInteraction && !r.forceUpdate && this.adapter.notifySelectionChange([n]));
    }, e.prototype.setCheckboxAtIndex = function(n, r) {
      r === void 0 && (r = {});
      for (var i = this.selectedIndex, a = r.isUserInteraction ? new Set(i === At.UNSET_INDEX ? [] : i) : null, o = this.getSelectionAttribute(), u = [], l = 0; l < this.adapter.getListItemCount(); l++) {
        var c = a == null ? void 0 : a.has(l), d = n.indexOf(l) >= 0;
        d !== c && u.push(l), this.adapter.setCheckedCheckboxOrRadioAtIndex(l, d), this.adapter.setAttributeForElementIndex(l, o, d ? "true" : "false");
      }
      this.selectedIndex = n, r.isUserInteraction && u.length && this.adapter.notifySelectionChange(u);
    }, e.prototype.toggleCheckboxRange = function(n, r, i) {
      this.lastSelectedIndex = i;
      for (var a = new Set(this.selectedIndex === At.UNSET_INDEX ? [] : this.selectedIndex), o = !(a != null && a.has(i)), u = br([n, r].sort(), 2), l = u[0], c = u[1], d = this.getSelectionAttribute(), m = [], f = l; f <= c; f++)
        if (!this.isIndexDisabled(f)) {
          var g = a.has(f);
          o !== g && (m.push(f), this.adapter.setCheckedCheckboxOrRadioAtIndex(f, o), this.adapter.setAttributeForElementIndex(f, d, "" + o), o ? a.add(f) : a.delete(f));
        }
      m.length && (this.selectedIndex = er([], br(a)), this.adapter.notifySelectionChange(m));
    }, e.prototype.setTabindexAtIndex = function(n) {
      this.focusedItemIndex === At.UNSET_INDEX && n !== 0 ? this.adapter.setAttributeForElementIndex(0, "tabindex", "-1") : this.focusedItemIndex >= 0 && this.focusedItemIndex !== n && this.adapter.setAttributeForElementIndex(this.focusedItemIndex, "tabindex", "-1"), !(this.selectedIndex instanceof Array) && this.selectedIndex !== n && this.adapter.setAttributeForElementIndex(this.selectedIndex, "tabindex", "-1"), n !== At.UNSET_INDEX && this.adapter.setAttributeForElementIndex(n, "tabindex", "0");
    }, e.prototype.isSelectableList = function() {
      return this.isSingleSelectionList || this.isCheckboxList || this.isRadioList;
    }, e.prototype.setTabindexToFirstSelectedOrFocusedItem = function() {
      var n = this.getFirstSelectedOrFocusedItemIndex();
      this.setTabindexAtIndex(n);
    }, e.prototype.getFirstSelectedOrFocusedItemIndex = function() {
      return this.isSelectableList() ? typeof this.selectedIndex == "number" && this.selectedIndex !== At.UNSET_INDEX ? this.selectedIndex : Jg(this.selectedIndex) && this.selectedIndex.length > 0 ? this.selectedIndex.reduce(function(n, r) {
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
        return this.isIndexInRange(n) || this.isSingleSelectionList && n === At.UNSET_INDEX;
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
      var u = this.selectedIndex === At.UNSET_INDEX ? [] : this.selectedIndex.slice();
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
      return Rs(o, this.typeaheadState);
    }, e.prototype.typeaheadInitSortedIndex = function() {
      return Yg(this.adapter.getListItemCount(), this.adapter.getPrimaryTextAtIndex);
    }, e.prototype.clearTypeaheadBuffer = function() {
      od(this.typeaheadState);
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
var sd = (
  /** @class */
  function(t) {
    ze(e, t);
    function e(n) {
      var r = t.call(this, be(be({}, e.defaultAdapter), n)) || this;
      return r.isSurfaceOpen = !1, r.isQuickOpen = !1, r.isHoistedElement = !1, r.isFixedPosition = !1, r.isHorizontallyCenteredOnViewport = !1, r.maxHeight = 0, r.openBottomBias = 0, r.openAnimationEndTimerId = 0, r.closeAnimationEndTimerId = 0, r.animationRequestId = 0, r.anchorCorner = ai.TOP_START, r.originCorner = ai.TOP_START, r.anchorMargin = { top: 0, right: 0, bottom: 0, left: 0 }, r.position = { x: 0, y: 0 }, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return qg;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return zg;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return ha;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "Corner", {
      get: function() {
        return ai;
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
      this.originCorner = this.originCorner ^ Ct.RIGHT;
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
        }, ha.TRANSITION_OPEN_DURATION);
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
          }, ha.TRANSITION_CLOSE_DURATION);
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
      var r = this.getoriginCorner(), i = this.getMenuSurfaceMaxHeight(r), a = this.hasBit(r, Ct.BOTTOM) ? "bottom" : "top", o = this.hasBit(r, Ct.RIGHT) ? "right" : "left", u = this.getHorizontalOriginOffset(r), l = this.getVerticalOriginOffset(r), c = this.measurements, d = c.anchorSize, m = c.surfaceSize, f = (n = {}, n[o] = u, n[a] = l, n);
      d.width / m.width > ha.ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO && (o = "center"), (this.isHoistedElement || this.isFixedPosition) && this.adjustPositionForHoistedElement(f), this.adapter.setTransformOrigin(o + " " + a), this.adapter.setPosition(f), this.adapter.setMaxHeight(i ? i + "px" : ""), this.hasBit(r, Ct.BOTTOM) || this.adapter.addClass(e.cssClasses.IS_OPEN_BELOW);
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
      var n = this.originCorner, r = this.measurements, i = r.viewportDistance, a = r.anchorSize, o = r.surfaceSize, u = e.numbers.MARGIN_TO_EDGE, l = this.hasBit(this.anchorCorner, Ct.BOTTOM), c, d;
      l ? (c = i.top - u + this.anchorMargin.bottom, d = i.bottom - u - this.anchorMargin.bottom) : (c = i.top - u + this.anchorMargin.top, d = i.bottom - u + a.height - this.anchorMargin.top);
      var m = d - o.height > 0;
      !m && c > d + this.openBottomBias && (n = this.setBit(n, Ct.BOTTOM));
      var f = this.adapter.isRtl(), g = this.hasBit(this.anchorCorner, Ct.FLIP_RTL), h = this.hasBit(this.anchorCorner, Ct.RIGHT) || this.hasBit(n, Ct.RIGHT), p = !1;
      f && g ? p = !h : p = h;
      var b, y;
      p ? (b = i.left + a.width + this.anchorMargin.right, y = i.right - this.anchorMargin.right) : (b = i.left + this.anchorMargin.left, y = i.right + a.width - this.anchorMargin.left);
      var A = b - o.width > 0, I = y - o.width > 0, _ = this.hasBit(n, Ct.FLIP_RTL) && this.hasBit(n, Ct.RIGHT);
      return I && _ && f || !A && _ ? n = this.unsetBit(n, Ct.RIGHT) : (A && p && f || A && !p && h || !I && b >= y) && (n = this.setBit(n, Ct.RIGHT)), n;
    }, e.prototype.getMenuSurfaceMaxHeight = function(n) {
      if (this.maxHeight > 0)
        return this.maxHeight;
      var r = this.measurements.viewportDistance, i = 0, a = this.hasBit(n, Ct.BOTTOM), o = this.hasBit(this.anchorCorner, Ct.BOTTOM), u = e.numbers.MARGIN_TO_EDGE;
      return a ? (i = r.top + this.anchorMargin.top - u, o || (i += this.measurements.anchorSize.height)) : (i = r.bottom - this.anchorMargin.bottom + this.measurements.anchorSize.height - u, o && (i -= this.measurements.anchorSize.height)), i;
    }, e.prototype.getHorizontalOriginOffset = function(n) {
      var r = this.measurements.anchorSize, i = this.hasBit(n, Ct.RIGHT), a = this.hasBit(this.anchorCorner, Ct.RIGHT);
      if (i) {
        var o = a ? r.width - this.anchorMargin.left : this.anchorMargin.right;
        return this.isHoistedElement || this.isFixedPosition ? o - (this.measurements.viewportSize.width - this.measurements.bodySize.width) : o;
      }
      return a ? r.width - this.anchorMargin.right : this.anchorMargin.left;
    }, e.prototype.getVerticalOriginOffset = function(n) {
      var r = this.measurements.anchorSize, i = this.hasBit(n, Ct.BOTTOM), a = this.hasBit(this.anchorCorner, Ct.BOTTOM), o = 0;
      return i ? o = a ? r.height - this.anchorMargin.top : -this.anchorMargin.bottom : o = a ? r.height + this.anchorMargin.bottom : this.anchorMargin.top, o;
    }, e.prototype.adjustPositionForHoistedElement = function(n) {
      var r, i, a = this.measurements, o = a.windowScroll, u = a.viewportDistance, l = a.surfaceSize, c = a.viewportSize, d = Object.keys(n);
      try {
        for (var m = kt(d), f = m.next(); !f.done; f = m.next()) {
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
      }, ha.TOUCH_EVENT_WAIT_MS);
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
var su = {
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
function tp(t) {
  return !!t.document && typeof t.document.createElement == "function";
}
function np(t, e) {
  if (tp(t) && e in su) {
    var n = t.document.createElement("div"), r = su[e], i = r.standard, a = r.prefixed, o = i in n.style;
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
var Ni = {
  MENU_SELECTED_LIST_ITEM: "mdc-menu-item--selected",
  MENU_SELECTION_GROUP: "mdc-menu__selection-group",
  ROOT: "mdc-menu"
}, Ti = {
  ARIA_CHECKED_ATTR: "aria-checked",
  ARIA_DISABLED_ATTR: "aria-disabled",
  CHECKBOX_SELECTOR: 'input[type="checkbox"]',
  LIST_SELECTOR: ".mdc-list,.mdc-deprecated-list",
  SELECTED_EVENT: "MDCMenu:selected",
  SKIP_RESTORE_FOCUS: "data-menu-item-skip-restore-focus"
}, rp = {
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
var ip = (
  /** @class */
  function(t) {
    ze(e, t);
    function e(n) {
      var r = t.call(this, be(be({}, e.defaultAdapter), n)) || this;
      return r.closeAnimationEndTimerId = 0, r.defaultFocusState = Di.LIST_ROOT, r.selectedIndex = -1, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Ni;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Ti;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return rp;
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
        var a = this.adapter.getAttributeFromElementAtIndex(i, Ti.SKIP_RESTORE_FOCUS) === "true";
        this.adapter.closeSurface(a), this.closeAnimationEndTimerId = setTimeout(function() {
          var o = r.adapter.getElementIndex(n);
          o >= 0 && r.adapter.isSelectableItemAtIndex(o) && r.setSelectedIndex(o);
        }, sd.numbers.TRANSITION_CLOSE_DURATION);
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
      r >= 0 && (this.adapter.removeAttributeFromElementAtIndex(r, Ti.ARIA_CHECKED_ATTR), this.adapter.removeClassFromElementAtIndex(r, Ni.MENU_SELECTED_LIST_ITEM)), this.adapter.addClassToElementAtIndex(n, Ni.MENU_SELECTED_LIST_ITEM), this.adapter.addAttributeToElementAtIndex(n, Ti.ARIA_CHECKED_ATTR, "true"), this.selectedIndex = n;
    }, e.prototype.setEnabled = function(n, r) {
      this.validatedIndex(n), r ? (this.adapter.removeClassFromElementAtIndex(n, Ye.LIST_ITEM_DISABLED_CLASS), this.adapter.addAttributeToElementAtIndex(n, Ti.ARIA_DISABLED_ATTR, "false")) : (this.adapter.addClassToElementAtIndex(n, Ye.LIST_ITEM_DISABLED_CLASS), this.adapter.addAttributeToElementAtIndex(n, Ti.ARIA_DISABLED_ATTR, "true"));
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
var yt = {
  ACTIVATED: "mdc-select--activated",
  DISABLED: "mdc-select--disabled",
  FOCUSED: "mdc-select--focused",
  INVALID: "mdc-select--invalid",
  MENU_INVALID: "mdc-select__menu--invalid",
  OUTLINED: "mdc-select--outlined",
  REQUIRED: "mdc-select--required",
  ROOT: "mdc-select",
  WITH_LEADING_ICON: "mdc-select--with-leading-icon"
}, ts = {
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
}, Kr = {
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
var ap = (
  /** @class */
  function(t) {
    ze(e, t);
    function e(n, r) {
      r === void 0 && (r = {});
      var i = t.call(this, be(be({}, e.defaultAdapter), n)) || this;
      return i.disabled = !1, i.isMenuOpen = !1, i.useDefaultValidation = !0, i.customValidity = !0, i.lastSelectedIndex = Kr.UNSET_INDEX, i.clickDebounceTimeout = 0, i.recentlyClicked = !1, i.leadingIcon = r.leadingIcon, i.helperText = r.helperText, i;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return yt;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return Kr;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return ts;
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
      r === void 0 && (r = !1), i === void 0 && (i = !1), !(n >= this.adapter.getMenuItemCount()) && (n === Kr.UNSET_INDEX ? this.adapter.setSelectedText("") : this.adapter.setSelectedText(this.adapter.getMenuItemTextAtIndex(n).trim()), this.adapter.setSelectedIndex(n), r && this.adapter.closeMenu(), !i && this.lastSelectedIndex !== n && this.handleChange(), this.lastSelectedIndex = n);
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
      return n !== Kr.UNSET_INDEX ? r[n] : "";
    }, e.prototype.getDisabled = function() {
      return this.disabled;
    }, e.prototype.setDisabled = function(n) {
      this.disabled = n, this.disabled ? (this.adapter.addClass(yt.DISABLED), this.adapter.closeMenu()) : this.adapter.removeClass(yt.DISABLED), this.leadingIcon && this.leadingIcon.setDisabled(this.disabled), this.disabled ? this.adapter.removeSelectAnchorAttr("tabindex") : this.adapter.setSelectAnchorAttr("tabindex", "0"), this.adapter.setSelectAnchorAttr("aria-disabled", this.disabled.toString());
    }, e.prototype.openMenu = function() {
      this.adapter.addClass(yt.ACTIVATED), this.adapter.openMenu(), this.isMenuOpen = !0, this.adapter.setSelectAnchorAttr("aria-expanded", "true");
    }, e.prototype.setHelperTextContent = function(n) {
      this.helperText && this.helperText.setContent(n);
    }, e.prototype.layout = function() {
      if (this.adapter.hasLabel()) {
        var n = this.getValue().length > 0, r = this.adapter.hasClass(yt.FOCUSED), i = n || r, a = this.adapter.hasClass(yt.REQUIRED);
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
      this.adapter.removeClass(yt.ACTIVATED), this.isMenuOpen = !1, this.adapter.isSelectAnchorFocused() || this.blur();
    }, e.prototype.handleChange = function() {
      this.layout(), this.adapter.notifyChange(this.getValue());
      var n = this.adapter.hasClass(yt.REQUIRED);
      n && this.useDefaultValidation && this.setValid(this.isValid());
    }, e.prototype.handleMenuItemAction = function(n) {
      this.setSelectedIndex(
        n,
        /** closeMenu */
        !0
      );
    }, e.prototype.handleFocus = function() {
      this.adapter.addClass(yt.FOCUSED), this.layout(), this.adapter.activateBottomLine();
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
      if (!(this.isMenuOpen || !this.adapter.hasClass(yt.FOCUSED))) {
        var r = Lt(n) === Ve.ENTER, i = Lt(n) === Ve.SPACEBAR, a = Lt(n) === Ve.ARROW_UP, o = Lt(n) === Ve.ARROW_DOWN, u = n.ctrlKey || n.metaKey;
        if (!u && (!i && n.key && n.key.length === 1 || i && this.adapter.isTypeaheadInProgress())) {
          var l = i ? " " : n.key, c = this.adapter.typeaheadMatchItem(l, this.getSelectedIndex());
          c >= 0 && this.setSelectedIndex(c), n.preventDefault();
          return;
        }
        !r && !i && !a && !o || (this.openMenu(), n.preventDefault());
      }
    }, e.prototype.notchOutline = function(n) {
      if (this.adapter.hasOutline()) {
        var r = this.adapter.hasClass(yt.FOCUSED);
        if (n) {
          var i = Kr.LABEL_SCALE, a = this.adapter.getLabelWidth() * i;
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
      this.useDefaultValidation || (this.customValidity = n), this.adapter.setSelectAnchorAttr("aria-invalid", (!n).toString()), n ? (this.adapter.removeClass(yt.INVALID), this.adapter.removeMenuClass(yt.MENU_INVALID)) : (this.adapter.addClass(yt.INVALID), this.adapter.addMenuClass(yt.MENU_INVALID)), this.syncHelperTextValidity(n);
    }, e.prototype.isValid = function() {
      return this.useDefaultValidation && this.adapter.hasClass(yt.REQUIRED) && !this.adapter.hasClass(yt.DISABLED) ? this.getSelectedIndex() !== Kr.UNSET_INDEX && (this.getSelectedIndex() !== 0 || !!this.getValue()) : this.customValidity;
    }, e.prototype.setRequired = function(n) {
      n ? this.adapter.addClass(yt.REQUIRED) : this.adapter.removeClass(yt.REQUIRED), this.adapter.setSelectAnchorAttr("aria-required", n.toString()), this.adapter.setLabelRequired(n);
    }, e.prototype.getRequired = function() {
      return this.adapter.getSelectAnchorAttr("aria-required") === "true";
    }, e.prototype.init = function() {
      var n = this.adapter.getAnchorElement();
      n && (this.adapter.setMenuAnchorElement(n), this.adapter.setMenuAnchorCorner(ai.BOTTOM_START)), this.adapter.setMenuWrapFocus(!1), this.setDisabled(this.adapter.hasClass(yt.DISABLED)), this.syncHelperTextValidity(!this.adapter.hasClass(yt.INVALID)), this.layout(), this.layoutOptions();
    }, e.prototype.blur = function() {
      this.adapter.removeClass(yt.FOCUSED), this.layout(), this.adapter.deactivateBottomLine();
      var n = this.adapter.hasClass(yt.REQUIRED);
      n && this.useDefaultValidation && this.setValid(this.isValid());
    }, e.prototype.syncHelperTextValidity = function(n) {
      if (this.helperText) {
        this.helperText.setValidity(n);
        var r = this.helperText.isVisible(), i = this.helperText.getId();
        r && i ? this.adapter.setSelectAnchorAttr(ts.ARIA_DESCRIBEDBY, i) : this.adapter.removeSelectAnchorAttr(ts.ARIA_DESCRIBEDBY);
      }
    }, e.prototype.setClickDebounceTimeout = function() {
      var n = this;
      clearTimeout(this.clickDebounceTimeout), this.clickDebounceTimeout = setTimeout(function() {
        n.recentlyClicked = !1;
      }, Kr.CLICK_DEBOUNCE_TIMEOUT_MS), this.recentlyClicked = !0;
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
var Xr = {
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
var op = (
  /** @class */
  function(t) {
    ze(e, t);
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
        return Xr;
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
      return this.adapter.getAttr(Xr.ARIA_HIDDEN) !== "true";
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
          this.showToScreenReader(), n ? this.adapter.removeAttr(Xr.ROLE) : this.adapter.setAttr(Xr.ROLE, "alert");
          return;
        }
        this.adapter.removeAttr(Xr.ROLE), this.hide();
      }
    }, e.prototype.showToScreenReader = function() {
      this.adapter.removeAttr(Xr.ARIA_HIDDEN);
    }, e.prototype.hide = function() {
      this.adapter.setAttr(Xr.ARIA_HIDDEN, "true");
    }, e;
  }(xt)
), sp = /* @__PURE__ */ de("<div><!></div>");
function lp(t, e) {
  Te(e, !0);
  let n = v(e, "use", 19, () => []), r = v(e, "class", 3, ""), i = v(e, "style", 3, ""), a = v(e, "static", 3, !1), o = v(e, "anchor", 3, !0), u = v(e, "fixed", 3, !1), l = v(e, "open", 31, () => Ie(a())), c = v(e, "managed", 3, !1), d = v(e, "fullWidth", 3, !1), m = v(e, "quickOpen", 3, !1), f = v(e, "anchorElement", 15), g = v(e, "anchorMargin", 19, () => ({ top: 0, right: 0, bottom: 0, left: 0 })), h = v(e, "maxHeight", 3, 0), p = v(e, "horizontallyCenteredOnViewport", 3, !1), b = v(e, "openBottomBias", 3, 0), y = v(e, "neverRestoreFocus", 3, !1), A = /* @__PURE__ */ je(e, [
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
  ]), I, _ = /* @__PURE__ */ ve(void 0), S = Ie({}), E = Ie({}), L = /* @__PURE__ */ ve(void 0);
  ce("SMUI:list:role", "menu"), ce("SMUI:list:item:role", "menuitem"), Le(() => {
    var P, J;
    I && o() && !((P = I.parentElement) != null && P.classList.contains("mdc-menu-surface--anchor")) && ((J = I.parentElement) == null || J.classList.add("mdc-menu-surface--anchor"), f(I.parentElement ?? void 0));
  }), Le(() => {
    s(_) && s(_).isOpen() !== l() && (l() ? s(_).open() : s(_).close());
  }), Le(() => {
    s(_) && s(_).setQuickOpen(m());
  }), Le(() => {
    s(_) && s(_).setFixedPosition(u());
  }), Le(() => {
    s(_) && s(_).setMaxHeight(h());
  }), Le(() => {
    s(_) && s(_).setIsHorizontallyCenteredOnViewport(p());
  });
  const T = ai;
  Le(() => {
    s(_) && e.anchorCorner != null && (typeof e.anchorCorner == "string" ? s(_).setAnchorCorner(T[e.anchorCorner]) : s(_).setAnchorCorner(e.anchorCorner));
  }), Le(() => {
    s(_) && s(_).setAnchorMargin(g());
  }), Le(() => {
    s(_) && s(_).setOpenBottomBias(b());
  });
  const w = ye("SMUI:menu-surface:mount"), k = ye("SMUI:menu-surface:unmount");
  at(() => {
    K(
      _,
      new sd({
        addClass: G,
        removeClass: q,
        hasClass: Z,
        hasAnchor: () => !!f(),
        notifyClose: () => {
          c() || l(a()), l() || Ke(O(), "SMUIMenuSurfaceClosed");
        },
        notifyClosing: () => {
          c() || l(a()), l() || Ke(O(), "SMUIMenuSurfaceClosing");
        },
        notifyOpen: () => {
          c() || l(!0), l() && Ke(O(), "SMUIMenuSurfaceOpened");
        },
        notifyOpening: () => {
          l() || Ke(O(), "SMUIMenuSurfaceOpening");
        },
        isElementInContainer: (J) => O().contains(J),
        isRtl: () => getComputedStyle(O()).getPropertyValue("direction") === "rtl",
        setTransformOrigin: (J) => {
          E["transform-origin"] = J;
        },
        isFocused: () => document.activeElement === O(),
        saveFocus: () => {
          K(L, document.activeElement ?? void 0, !0);
        },
        restoreFocus: () => {
          !y() && (!I || O().contains(document.activeElement)) && s(L) && document.contains(s(L)) && "focus" in s(L) && s(L).focus();
        },
        getInnerDimensions: () => ({
          width: O().offsetWidth,
          height: O().offsetHeight
        }),
        getAnchorDimensions: () => f() ? f().getBoundingClientRect() : null,
        getWindowDimensions: () => ({ width: window.innerWidth, height: window.innerHeight }),
        getBodyDimensions: () => ({
          width: document.body.clientWidth,
          height: document.body.clientHeight
        }),
        getWindowScroll: () => ({ x: window.pageXOffset, y: window.pageYOffset }),
        setPosition: (J) => {
          E.left = "left" in J ? `${J.left}px` : "", E.right = "right" in J ? `${J.right}px` : "", E.top = "top" in J ? `${J.top}px` : "", E.bottom = "bottom" in J ? `${J.bottom}px` : "";
        },
        setMaxHeight: (J) => {
          E["max-height"] = J;
        }
      }),
      !0
    );
    const P = {
      get open() {
        return l();
      },
      set open(J) {
        l(J);
      },
      closeProgrammatic: R
    };
    return w && w(P), s(_).init(), () => {
      var $, se;
      k && k(P);
      const J = s(_).isHoistedElement;
      ($ = s(_)) == null || $.destroy(), J && ((se = O().parentNode) == null || se.removeChild(O()));
    };
  }), In(() => {
    var P;
    o() && O() && ((P = O().parentElement) == null || P.classList.remove("mdc-menu-surface--anchor"));
  });
  function Z(P) {
    return P in S ? S[P] : O().classList.contains(P);
  }
  function G(P) {
    S[P] || (S[P] = !0);
  }
  function q(P) {
    (!(P in S) || S[P]) && (S[P] = !1);
  }
  function R(P) {
    var J;
    (J = s(_)) == null || J.close(P), l(!1);
  }
  function C(P) {
    s(_) && l() && !c() && s(_).handleBodyClick(P);
  }
  function F() {
    return l();
  }
  function U(P) {
    l(P);
  }
  function z(P, J) {
    if (s(_) == null)
      throw new Error("Instance is not defined.");
    return s(_).setAbsolutePosition(P, J);
  }
  function te(P) {
    if (s(_) == null)
      throw new Error("Instance is not defined.");
    return s(_).setIsHoisted(P);
  }
  function H() {
    if (s(_) == null)
      throw new Error("Instance is not defined.");
    return s(_).isFixed();
  }
  function D() {
    if (s(_) == null)
      throw new Error("Instance is not defined.");
    return s(_).flipCornerHorizontally();
  }
  function O() {
    return I;
  }
  var le = {
    isOpen: F,
    setOpen: U,
    setAbsolutePosition: z,
    setIsHoisted: te,
    isFixed: H,
    flipCornerHorizontally: D,
    getElement: O
  }, re = sp();
  Jn("click", Ws.body, C, !0);
  var M = (P) => {
    var J;
    s(_) && !c() && s(_).handleKeydown(P), (J = e.onkeydown) == null || J.call(e, P);
  };
  Ne(
    re,
    (P, J) => ({
      class: P,
      style: J,
      role: "dialog",
      ...A,
      onkeydown: M
    }),
    [
      () => Me({
        "mdc-menu-surface": !0,
        "mdc-menu-surface--fixed": u(),
        "mdc-menu-surface--open": a(),
        "smui-menu-surface--static": a(),
        "mdc-menu-surface--fullwidth": d(),
        ...S,
        [r()]: !0
      }),
      () => Object.entries(E).map(([P, J]) => `${P}: ${J};`).concat([i()]).join(" ")
    ]
  );
  var B = fe(re);
  return Ae(B, () => e.children ?? me), Ce(re, (P) => I = P, () => I), Pe(re, (P, J) => Y == null ? void 0 : Y(P, J), n), x(t, re), xe(le);
}
function ns(t, { addClass: e = (r) => t.classList.add(r), removeClass: n = (r) => t.classList.remove(r) } = {}) {
  return e("mdc-menu-surface--anchor"), {
    destroy() {
      n("mdc-menu-surface--anchor");
    }
  };
}
function up(t, e) {
  Te(e, !0);
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
  ]), c, d = /* @__PURE__ */ ve(void 0), m = /* @__PURE__ */ ve(void 0), f = /* @__PURE__ */ ve(void 0);
  ce("SMUI:menu-surface:mount", (T) => {
    s(m) || K(m, T, !0);
  });
  const g = ye("SMUI:list:mount");
  ce("SMUI:list:mount", (T) => {
    s(f) || K(f, T, !0), g && g(T);
  });
  const h = ye("SMUI:menu:mount"), p = ye("SMUI:menu:unmount");
  at(() => (K(
    d,
    new ip({
      addClassToElementAtIndex: (T, w) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        s(f).addClassForElementIndex(T, w);
      },
      removeClassFromElementAtIndex: (T, w) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        s(f).removeClassForElementIndex(T, w);
      },
      addAttributeToElementAtIndex: (T, w, k) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        s(f).setAttributeForElementIndex(T, w, k);
      },
      removeAttributeFromElementAtIndex: (T, w) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        s(f).removeAttributeForElementIndex(T, w);
      },
      getAttributeFromElementAtIndex: (T, w) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        return s(f).getAttributeFromElementIndex(T, w);
      },
      elementContainsClass: (T, w) => T.classList.contains(w),
      closeSurface: (T) => {
        var w;
        u() || ((w = s(m)) == null || w.closeProgrammatic(T), Ke(E(), "SMUIMenuClosedProgrammatically"));
      },
      getElementIndex: (T) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        return s(f).getOrderedList().map((w) => w.element).indexOf(T);
      },
      notifySelected: (T) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        Ke(E(), "SMUIMenuSelected", {
          index: T.index,
          item: s(f).getOrderedList()[T.index].element
        });
      },
      getMenuItemCount: () => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        return s(f).items.length;
      },
      focusItemAtIndex: (T) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        s(f).focusItemAtIndex(T);
      },
      focusListRoot: () => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        "focus" in s(f).element && s(f).element.focus();
      },
      isSelectableItemAtIndex: (T) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        return !!n(s(f).getOrderedList()[T].element, `.${Ni.MENU_SELECTION_GROUP}`);
      },
      getSelectedSiblingOfItemAtIndex: (T) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        const w = s(f).getOrderedList(), k = n(w[T].element, `.${Ni.MENU_SELECTION_GROUP}`), Z = k == null ? void 0 : k.querySelector(`.${Ni.MENU_SELECTED_LIST_ITEM}`);
        return Z ? w.map((G) => G.element).indexOf(Z) : -1;
      }
    }),
    !0
  ), h && h(s(d)), s(d).init(), () => {
    var T;
    p && s(d) && p(s(d)), (T = s(d)) == null || T.destroy();
  }));
  function b(T) {
    s(d) && s(d).handleKeydown(T);
  }
  function y() {
    return a();
  }
  function A(T) {
    a(T);
  }
  function I(T) {
    if (s(d) == null)
      throw new Error("Instance is undefined.");
    s(d).setDefaultFocusState(T);
  }
  function _() {
    if (s(d) == null)
      throw new Error("Instance is undefined.");
    return s(d).getSelectedIndex();
  }
  function S() {
    return c;
  }
  function E() {
    return c.getElement();
  }
  var L = {
    isOpen: y,
    setOpen: A,
    setDefaultFocusState: I,
    getSelectedIndex: _,
    getMenuSurface: S,
    getElement: E
  };
  {
    let T = /* @__PURE__ */ he(() => Me({ "mdc-menu": !0, [i()]: !0 }));
    Ce(
      lp(t, Je(
        {
          get use() {
            return r();
          },
          get class() {
            return s(T);
          },
          get managed() {
            return u();
          }
        },
        () => l,
        {
          onkeydown: (w) => {
            var k;
            b(w), (k = e.onkeydown) == null || k.call(e, w);
          },
          onSMUIMenuSurfaceOpened: (w) => {
            var k;
            s(d) && s(d).handleMenuSurfaceOpened(), (k = e.onSMUIMenuSurfaceOpened) == null || k.call(e, w);
          },
          onSMUIListAction: (w) => {
            var k;
            s(d) && s(f) && s(d).handleItemAction(s(f).getOrderedList()[w.detail.index].element), (k = e.onSMUIListAction) == null || k.call(e, w);
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
          children: (w, k) => {
            var Z = ne(), G = X(Z);
            Ae(G, () => e.children ?? me), x(w, Z);
          },
          $$slots: { default: !0 }
        }
      )),
      (w) => c = w,
      () => c
    );
  }
  return xe(L);
}
function cp(t, e) {
  Te(e, !0);
  const { closest: n, matches: r } = ia;
  let i = ye("SMUI:list:nav"), a = v(e, "use", 19, () => []), o = v(e, "class", 3, ""), u = v(e, "nonInteractive", 3, !1), l = v(e, "dense", 3, !1), c = v(e, "textualList", 3, !1), d = v(e, "avatarList", 3, !1), m = v(e, "iconList", 3, !1), f = v(e, "imageList", 3, !1), g = v(e, "thumbnailList", 3, !1), h = v(e, "videoList", 3, !1), p = v(e, "twoLine", 3, !1), b = v(e, "threeLine", 3, !1), y = v(e, "vertical", 3, !0), A = v(e, "wrapFocus", 19, () => ye("SMUI:list:wrapFocus") ?? !1), I = v(e, "singleSelection", 3, !1), _ = v(e, "disabledItemsFocusable", 3, !1), S = v(e, "selectedIndex", 31, () => -1), E = v(e, "radioList", 3, !1), L = v(e, "checkList", 3, !1), T = v(e, "hasTypeahead", 3, !1), w = v(e, "component", 3, Br), k = v(e, "tag", 3, i ? "nav" : "ul"), Z = /* @__PURE__ */ je(e, [
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
  ]), G, q = /* @__PURE__ */ ve(void 0), R = [], C = ye("SMUI:list:role");
  const F = /* @__PURE__ */ new WeakMap();
  let U = ye("SMUI:dialog:selection"), z = ye("SMUI:addLayoutListener"), te;
  ce("SMUI:list:nonInteractive", u()), ce("SMUI:separator:context", "list"), C || (I() ? (C = "listbox", ce("SMUI:list:item:role", "option")) : E() ? (C = "radiogroup", ce("SMUI:list:item:role", "radio")) : L() ? (C = "group", ce("SMUI:list:item:role", "checkbox")) : (C = "list", ce("SMUI:list:item:role", void 0))), Le(() => {
    s(q) && s(q).setVerticalOrientation(y());
  }), Le(() => {
    s(q) && s(q).setWrapFocus(A());
  }), Le(() => {
    s(q) && s(q).setHasTypeahead(T());
  }), Le(() => {
    s(q) && s(q).setSingleSelection(I());
  }), Le(() => {
    s(q) && s(q).setDisabledItemsFocusable(_());
  }), Le(() => {
    s(q) && I() && V() !== S() && s(q).setSelectedIndex(S());
  }), z && (te = z(He)), ce("SMUI:list:item:mount", (pe) => {
    R.push(pe), F.set(pe.element, pe), I() && pe.selected && S(Re(pe.element));
  }), ce("SMUI:list:item:unmount", (pe) => {
    const W = (pe && R.findIndex((j) => j === pe)) ?? -1;
    W !== -1 && (R.splice(W, 1), F.delete(pe.element));
  });
  const H = ye("SMUI:list:mount"), D = ye("SMUI:list:unmount");
  at(() => {
    K(
      q,
      new ep({
        addClassForElementIndex: $,
        focusItemAtIndex: ge,
        getAttributeForElementIndex: (W, j) => {
          var ie;
          return ((ie = P()[W]) == null ? void 0 : ie.getAttr(j)) ?? null;
        },
        getFocusedElementIndex: () => document.activeElement ? P().map((W) => W.element).indexOf(document.activeElement) : -1,
        getListItemCount: () => R.length,
        getPrimaryTextAtIndex: we,
        hasCheckboxAtIndex: (W) => {
          var j;
          return ((j = P()[W]) == null ? void 0 : j.hasCheckbox) ?? !1;
        },
        hasRadioAtIndex: (W) => {
          var j;
          return ((j = P()[W]) == null ? void 0 : j.hasRadio) ?? !1;
        },
        isCheckboxCheckedAtIndex: (W) => {
          const j = P()[W];
          return ((j == null ? void 0 : j.hasCheckbox) && j.checked) ?? !1;
        },
        isFocusInsideList: () => G != null && De() !== document.activeElement && De().contains(document.activeElement),
        isRootFocused: () => G != null && document.activeElement === De(),
        listItemAtIndexHasClass: J,
        notifyAction: (W) => {
          S(W), G != null && Ke(De(), "SMUIListAction", { index: W });
        },
        notifySelectionChange: (W) => {
          G != null && Ke(De(), "SMUIListSelectionChange", { changedIndices: W });
        },
        removeClassForElementIndex: se,
        setAttributeForElementIndex: Ee,
        setCheckedCheckboxOrRadioAtIndex: (W, j) => {
          P()[W].checked = j;
        },
        setTabIndexForListItemChildren: (W, j) => {
          const ie = P()[W];
          Array.prototype.forEach.call(ie.element.querySelectorAll("button:not(:disabled), a"), (ft) => {
            ft.setAttribute("tabindex", j);
          });
        }
      }),
      !0
    );
    const pe = {
      get element() {
        return De();
      },
      get items() {
        return R;
      },
      get typeaheadInProgress() {
        if (!s(q))
          throw new Error("Instance is undefined.");
        return s(q).isTypeaheadInProgress();
      },
      typeaheadMatchItem(W, j) {
        if (!s(q))
          throw new Error("Instance is undefined.");
        return s(q).typeaheadMatchItem(
          W,
          j,
          /** skipFocus */
          !0
        );
      },
      getOrderedList: P,
      focusItemAtIndex: ge,
      addClassForElementIndex: $,
      removeClassForElementIndex: se,
      setAttributeForElementIndex: Ee,
      removeAttributeForElementIndex: ee,
      getAttributeFromElementIndex: ae,
      getPrimaryTextAtIndex: we
    };
    return H && H(pe), s(q).init(), s(q).layout(), () => {
      var W;
      D && D(pe), (W = s(q)) == null || W.destroy();
    };
  }), In(() => {
    te && te();
  });
  function O(pe) {
    s(q) && pe.target && s(q).handleKeydown(pe, pe.target.classList.contains("mdc-deprecated-list-item"), Re(pe.target));
  }
  function le(pe) {
    s(q) && pe.target && s(q).handleFocusIn(Re(pe.target));
  }
  function re(pe) {
    s(q) && pe.target && s(q).handleFocusOut(Re(pe.target));
  }
  function M(pe) {
    s(q) && pe.target && s(q).handleClick(Re(pe.target), !r(pe.target, 'input[type="checkbox"], input[type="radio"]'), pe);
  }
  function B(pe) {
    if (E() || L()) {
      const W = Re(pe.target);
      if (W !== -1) {
        const j = P()[W];
        j && (E() && !j.checked || L()) && (r(pe.detail.target, 'input[type="checkbox"], input[type="radio"]') || (j.checked = !j.checked), j.activateRipple(), window.requestAnimationFrame(() => {
          j.deactivateRipple();
        }));
      }
    }
  }
  function P() {
    return G == null ? [] : [...De().children].map((pe) => F.get(pe)).filter((pe) => pe && pe._smui_list_item_accessor);
  }
  function J(pe, W) {
    const j = P()[pe];
    return (j && j.hasClass(W)) ?? !1;
  }
  function $(pe, W) {
    const j = P()[pe];
    j && j.addClass(W);
  }
  function se(pe, W) {
    const j = P()[pe];
    j && j.removeClass(W);
  }
  function Ee(pe, W, j) {
    const ie = P()[pe];
    ie && ie.addAttr(W, j);
  }
  function ee(pe, W) {
    const j = P()[pe];
    j && j.removeAttr(W);
  }
  function ae(pe, W) {
    const j = P()[pe];
    return j ? j.getAttr(W) : null;
  }
  function we(pe) {
    const W = P()[pe];
    return (W && W.getPrimaryText()) ?? "";
  }
  function Re(pe) {
    const W = n(pe, ".mdc-deprecated-list-item, .mdc-deprecated-list");
    return W && r(W, ".mdc-deprecated-list-item") ? P().map((j) => j == null ? void 0 : j.element).indexOf(W) : -1;
  }
  function He() {
    if (!s(q))
      throw new Error("Instance is undefined.");
    return s(q).layout();
  }
  function Ge(pe, W) {
    if (!s(q))
      throw new Error("Instance is undefined.");
    return s(q).setEnabled(pe, W);
  }
  function ke() {
    if (!s(q))
      throw new Error("Instance is undefined.");
    return s(q).isTypeaheadInProgress();
  }
  function V() {
    if (!s(q))
      throw new Error("Instance is undefined.");
    return s(q).getSelectedIndex();
  }
  function Q() {
    if (!s(q))
      throw new Error("Instance is undefined.");
    return s(q).getFocusedItemIndex();
  }
  function ge(pe) {
    const W = P()[pe];
    W && "focus" in W.element && W.element.focus();
  }
  function De() {
    return G.getElement();
  }
  var Be = {
    layout: He,
    setEnabled: Ge,
    getTypeaheadInProgress: ke,
    getSelectedIndex: V,
    getFocusedItemIndex: Q,
    focusItemAtIndex: ge,
    getElement: De
  }, ut = ne(), mt = X(ut);
  {
    let pe = /* @__PURE__ */ he(() => Me({
      "mdc-deprecated-list": !0,
      "mdc-deprecated-list--non-interactive": u(),
      "mdc-deprecated-list--dense": l(),
      "mdc-deprecated-list--textual-list": c(),
      "mdc-deprecated-list--avatar-list": d() || U,
      "mdc-deprecated-list--icon-list": m(),
      "mdc-deprecated-list--image-list": f(),
      "mdc-deprecated-list--thumbnail-list": g(),
      "mdc-deprecated-list--video-list": h(),
      "mdc-deprecated-list--two-line": p(),
      "smui-list--three-line": b() && !p(),
      [o()]: !0
    }));
    rr(mt, w, (W, j) => {
      Ce(
        j(W, Je(
          {
            get tag() {
              return k();
            },
            get use() {
              return a();
            },
            get class() {
              return s(pe);
            },
            get role() {
              return C;
            }
          },
          () => Z,
          {
            onkeydown: (ie) => {
              var Ue;
              O(ie), (Ue = e.onkeydown) == null || Ue.call(e, ie);
            },
            onfocusin: (ie) => {
              var Ue;
              le(ie), (Ue = e.onfocusin) == null || Ue.call(e, ie);
            },
            onfocusout: (ie) => {
              var Ue;
              re(ie), (Ue = e.onfocusout) == null || Ue.call(e, ie);
            },
            onclick: (ie) => {
              var Ue;
              M(ie), (Ue = e.onclick) == null || Ue.call(e, ie);
            },
            onSMUIAction: (ie) => {
              var Ue;
              B(ie), (Ue = e.onSMUIAction) == null || Ue.call(e, ie);
            },
            children: (ie, Ue) => {
              var ft = ne(), It = X(ft);
              Ae(It, () => e.children ?? me), x(ie, ft);
            },
            $$slots: { default: !0 }
          }
        )),
        (ie) => G = ie,
        () => G
      );
    });
  }
  return x(t, ut), xe(Be);
}
let dp = 0;
var fp = /* @__PURE__ */ de('<span class="mdc-deprecated-list-item__ripple"></span>'), hp = /* @__PURE__ */ de("<!><!>", 1);
function vp(t, e) {
  Te(e, !0);
  let n = () => {
  };
  function r($) {
    return $ === n;
  }
  let i = ye("SMUI:list:item:nav"), a = v(e, "use", 19, () => []), o = v(e, "class", 3, ""), u = v(e, "style", 3, ""), l = v(e, "nonInteractive", 19, () => ye("SMUI:list:nonInteractive") ?? !1), c = v(e, "ripple", 19, () => !l()), d = v(e, "wrapper", 3, !1), m = v(e, "activated", 15, !1), f = v(e, "role", 19, () => d() ? "presentation" : ye("SMUI:list:item:role")), g = v(e, "selected", 15, !1), h = v(e, "disabled", 3, !1), p = v(e, "skipRestoreFocus", 3, !1), b = v(e, "tabindex", 15, n), y = v(e, "inputId", 19, () => "SMUI-form-field-list-" + dp++), A = v(e, "component", 3, Br), I = v(e, "tag", 19, () => i ? e.href ? "a" : "span" : "li"), _ = /* @__PURE__ */ je(e, [
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
  ce("SMUI:list:nonInteractive", void 0), ce("SMUI:list:item:role", void 0);
  let S, E = Ie({}), L = Ie({}), T = Ie({}), w = /* @__PURE__ */ ve(void 0), k = /* @__PURE__ */ ve(void 0);
  const Z = /* @__PURE__ */ he(() => r(b()) ? !l() && !h() && (g() || s(w) && s(w).checked) ? 0 : -1 : b());
  ce("SMUI:generic:input:props", { id: y() }), ce("SMUI:separator:context", void 0), ce("SMUI:generic:input:mount", ($) => {
    ("_smui_checkbox_accessor" in $ || "_smui_radio_accessor" in $) && K(w, $, !0);
  }), ce("SMUI:generic:input:unmount", () => {
    K(w, void 0);
  });
  const G = ye("SMUI:list:item:mount"), q = ye("SMUI:list:item:unmount");
  at(() => {
    if (!g() && !l()) {
      let se = !0, Ee = S.getElement();
      for (; Ee.previousElementSibling; )
        if (Ee = Ee.previousElementSibling, Ee.nodeType === 1 && Ee.classList.contains("mdc-deprecated-list-item") && !Ee.classList.contains("mdc-deprecated-list-item--disabled")) {
          se = !1;
          break;
        }
      se && K(k, window.requestAnimationFrame(() => D(Ee)), !0);
    }
    const $ = {
      _smui_list_item_accessor: !0,
      get element() {
        return M();
      },
      get selected() {
        return g();
      },
      set selected(se) {
        g(se);
      },
      hasClass: R,
      addClass: C,
      removeClass: F,
      getAttr: z,
      addAttr: te,
      removeAttr: H,
      getPrimaryText: re,
      // For inputs within item.
      get checked() {
        return (s(w) && s(w).checked) ?? !1;
      },
      set checked(se) {
        s(w) && (s(w).checked = !!se);
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
      action: le,
      get tabindex() {
        return s(Z);
      },
      set tabindex(se) {
        b(se);
      },
      get disabled() {
        return h();
      },
      get activated() {
        return m();
      },
      set activated(se) {
        m(se);
      }
    };
    return G && G($), () => {
      q && q($);
    };
  }), In(() => {
    s(k) && window.cancelAnimationFrame(s(k));
  });
  function R($) {
    return $ in E ? E[$] : M().classList.contains($);
  }
  function C($) {
    E[$] || (E[$] = !0);
  }
  function F($) {
    (!($ in E) || E[$]) && (E[$] = !1);
  }
  function U($, se) {
    L[$] != se && (se === "" || se == null ? delete L[$] : L[$] = se);
  }
  function z($) {
    return $ in T ? T[$] ?? null : M().getAttribute($);
  }
  function te($, se) {
    T[$] !== se && (T[$] = se);
  }
  function H($) {
    (!($ in T) || T[$] != null) && (T[$] = void 0);
  }
  function D($) {
    let se = !0;
    for (; $.nextElementSibling; )
      if ($ = $.nextElementSibling, $.nodeType === 1 && $.classList.contains("mdc-deprecated-list-item")) {
        const Ee = $.attributes.getNamedItem("tabindex");
        if (Ee && Ee.value === "0") {
          se = !1;
          break;
        }
      }
    se && b(0);
  }
  function O($) {
    const se = $.key === "Enter", Ee = $.key === "Space";
    (se || Ee) && le($);
  }
  function le($) {
    h() || Ke(M(), "SMUIAction", $);
  }
  function re() {
    const $ = M(), se = $.querySelector(".mdc-deprecated-list-item__primary-text");
    if (se)
      return se.textContent ?? "";
    const Ee = $.querySelector(".mdc-deprecated-list-item__text");
    return Ee ? Ee.textContent ?? "" : $.textContent ?? "";
  }
  function M() {
    return S.getElement();
  }
  var B = { action: le, getPrimaryText: re, getElement: M }, P = ne(), J = X(P);
  {
    let $ = /* @__PURE__ */ he(() => [
      ...l() ? [] : [
        [
          Yt,
          {
            ripple: !s(w),
            unbounded: !1,
            color: (m() || g()) && e.color == null ? "primary" : e.color,
            disabled: h(),
            addClass: C,
            removeClass: F,
            addStyle: U
          }
        ]
      ],
      ...a()
    ]), se = /* @__PURE__ */ he(() => Me({
      "mdc-deprecated-list-item": !d(),
      "mdc-deprecated-list-item__wrapper": d(),
      "mdc-deprecated-list-item--activated": m(),
      "mdc-deprecated-list-item--selected": g(),
      "mdc-deprecated-list-item--disabled": h(),
      "mdc-menu-item--selected": !i && f() === "menuitem" && g(),
      "smui-menu-item--non-interactive": l(),
      ...E,
      [o()]: !0
    })), Ee = /* @__PURE__ */ he(() => Object.entries(L).map(([ae, we]) => `${ae}: ${we};`).concat([u()]).join(" ")), ee = /* @__PURE__ */ he(() => p() || void 0);
    rr(J, A, (ae, we) => {
      Ce(
        we(ae, Je(
          {
            get tag() {
              return I();
            },
            get use() {
              return s($);
            },
            get class() {
              return s(se);
            },
            get style() {
              return s(Ee);
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
              return s(ee);
            },
            get tabindex() {
              return s(Z);
            },
            get href() {
              return e.href;
            }
          },
          () => T,
          () => _,
          {
            onclick: (Re) => {
              var He;
              le(Re), (He = e.onclick) == null || He.call(e, Re);
            },
            onkeydown: (Re) => {
              var He;
              O(Re), (He = e.onkeydown) == null || He.call(e, Re);
            },
            children: (Re, He) => {
              var Ge = hp(), ke = X(Ge);
              {
                var V = (ge) => {
                  var De = fp();
                  x(ge, De);
                };
                oe(ke, (ge) => {
                  c() && ge(V);
                });
              }
              var Q = _e(ke);
              Ae(Q, () => e.children ?? me), x(Re, Ge);
            },
            $$slots: { default: !0 }
          }
        )),
        (Re) => S = Re,
        () => S
      );
    });
  }
  return x(t, P), xe(B);
}
let mp = 0;
var gp = /* @__PURE__ */ de("<div><!></div>");
function pp(t, e) {
  Te(e, !0);
  let n = v(e, "use", 19, () => []), r = v(e, "class", 3, ""), i = v(e, "id", 19, () => "SMUI-select-helper-text-" + mp++), a = v(e, "persistent", 3, !1), o = v(e, "validationMsg", 3, !1), u = /* @__PURE__ */ je(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "id",
    "persistent",
    "validationMsg",
    "children"
  ]), l, c = /* @__PURE__ */ ve(void 0), d = Ie({}), m = Ie({}), f = /* @__PURE__ */ ve(void 0);
  const g = ye("SMUI:select:helper-text:id"), h = ye("SMUI:select:helper-text:mount"), p = ye("SMUI:select:helper-text:unmount");
  at(() => (K(
    c,
    new op({
      addClass: y,
      removeClass: A,
      hasClass: b,
      getAttr: I,
      setAttr: _,
      removeAttr: S,
      setContent: (G) => {
        K(f, G, !0);
      }
    }),
    !0
  ), g && g(i()), h && h(s(c)), s(c).init(), () => {
    var G;
    p && s(c) && p(s(c)), (G = s(c)) == null || G.destroy();
  }));
  function b(G) {
    return G in d ? d[G] : E().classList.contains(G);
  }
  function y(G) {
    d[G] || (d[G] = !0);
  }
  function A(G) {
    (!(G in d) || d[G]) && (d[G] = !1);
  }
  function I(G) {
    return G in m ? m[G] ?? null : E().getAttribute(G);
  }
  function _(G, q) {
    m[G] !== q && (m[G] = q);
  }
  function S(G) {
    (!(G in m) || m[G] != null) && (m[G] = void 0);
  }
  function E() {
    return l;
  }
  var L = { getElement: E }, T = gp();
  Ne(
    T,
    (G) => ({
      class: G,
      "aria-hidden": a() ? void 0 : "true",
      id: i(),
      ...m,
      ...u
    }),
    [
      () => Me({
        "mdc-select-helper-text": !0,
        "mdc-select-helper-text--validation-msg": o(),
        "mdc-select-helper-text--validation-msg-persistent": a(),
        ...d,
        [r()]: !0
      })
    ]
  );
  var w = fe(T);
  {
    var k = (G) => {
      var q = ne(), R = X(q);
      Ae(R, () => e.children ?? me), x(G, q);
    }, Z = (G) => {
      var q = vt();
      Oe(() => $e(q, s(f))), x(G, q);
    };
    oe(w, (G) => {
      s(f) == null ? G(k) : G(Z, !1);
    });
  }
  return Ce(T, (G) => l = G, () => l), Pe(T, (G, q) => Y == null ? void 0 : Y(G, q), n), x(t, T), xe(L);
}
let bp = 0;
var _p = /* @__PURE__ */ de("<input/>"), yp = /* @__PURE__ */ de('<span class="mdc-select__ripple"></span>'), Ip = /* @__PURE__ */ de('<div><!> <div><!> <!> <!> <!> <span><span> </span></span> <span><svg class="mdc-select__dropdown-icon-graphic" viewBox="7 10 10 5" focusable="false"><polygon class="mdc-select__dropdown-icon-inactive" stroke="none" fill-rule="evenodd" points="7 10 12 15 17 10"></polygon><polygon class="mdc-select__dropdown-icon-active" stroke="none" fill-rule="evenodd" points="7 15 12 10 17 15"></polygon></svg></span> <!></div> <!></div> <!>', 1);
function Ep(t, e) {
  Te(e, !0);
  const n = () => kn(De, "$selectedTextStore", r), [r, i] = ir();
  let a = () => {
  };
  function o(N) {
    return N === a;
  }
  let u = v(e, "use", 19, () => []), l = v(e, "class", 3, ""), c = v(e, "style", 3, ""), d = v(e, "ripple", 3, !0), m = v(e, "disabled", 3, !1), f = v(e, "variant", 3, "standard"), g = v(e, "noLabel", 3, !1), h = v(e, "label", 3, void 0), p = v(e, "value", 15), b = v(e, "key", 3, (N) => N), y = v(e, "dirty", 15, !1), A = v(e, "invalid", 15, a), I = v(e, "updateInvalid", 19, () => o(A())), _ = v(e, "required", 3, !1), S = v(e, "inputId", 19, () => "SMUI-select-" + bp++), E = v(e, "hiddenInput", 3, !1), L = v(e, "withLeadingIcon", 3, a), T = v(e, "anchor$use", 19, () => []), w = v(e, "anchor$class", 3, ""), k = v(e, "selectedTextContainer$use", 19, () => []), Z = v(e, "selectedTextContainer$class", 3, ""), G = v(e, "selectedText$use", 19, () => []), q = v(e, "selectedText$class", 3, ""), R = v(e, "dropdownIcon$use", 19, () => []), C = v(e, "dropdownIcon$class", 3, ""), F = v(e, "menu$class", 3, ""), U = /* @__PURE__ */ je(e, [
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
  const z = o(A());
  o(A()) && A(!1);
  let te, H = /* @__PURE__ */ ve(void 0), D = Ie({}), O = Ie({}), le, re = Ie({}), M = /* @__PURE__ */ ve(-1);
  const B = /* @__PURE__ */ he(() => U.menu$id ?? S() + "-menu");
  let P = /* @__PURE__ */ ve(void 0), J = ye("SMUI:addLayoutListener"), $, se = /* @__PURE__ */ ve(!1), Ee = Ie({}), ee = /* @__PURE__ */ ve(void 0), ae = /* @__PURE__ */ ve(void 0), we = /* @__PURE__ */ ve(!1), Re, He = ye("SMUI:select:context"), Ge, ke, V, Q, ge;
  ce("SMUI:list:role", ""), ce("SMUI:list:nav", !1);
  const De = Bt("");
  ce("SMUI:select:selectedText", De);
  const Be = Bt(p());
  Le(() => {
    Nn(Be, p());
  }), ce("SMUI:select:value", Be), Le(() => {
    s(H) && s(H).getValue() !== b()(p()) && s(H).setValue(b()(p()));
  });
  let ut = s(M);
  Le(() => {
    if (ut !== s(M))
      if (ut = s(M), s(H))
        s(H).setSelectedIndex(
          s(M),
          /* closeMenu */
          !1,
          /* skipNotify */
          !0
        );
      else {
        const N = Vt();
        p() !== N[s(M)] && p(N[s(M)]);
      }
  }), Le(() => {
    s(H) && s(H).getDisabled() !== m() && s(H).setDisabled(m());
  }), Le(() => {
    s(H) && y() && s(H).isValid() !== !A() && (I() ? A(!s(H).isValid()) : s(H).setValid(!A()));
  }), Le(() => {
    s(H) && s(H).getRequired() !== _() && s(H).setRequired(_());
  }), J && ($ = J(_i)), ce("SMUI:select:leading-icon:mount", (N) => {
    Ge = N;
  }), ce("SMUI:select:leading-icon:unmount", () => {
    Ge = void 0;
  }), ce("SMUI:list:mount", (N) => {
    Re = N;
  }), ce("SMUI:select:helper-text:id", (N) => {
    K(P, N, !0);
  }), ce("SMUI:select:helper-text:mount", (N) => {
    ke = N;
  }), ce("SMUI:select:helper-text:unmount", () => {
    K(P, void 0), ke = void 0;
  }), at(() => (K(
    H,
    new ap(
      {
        // getSelectAdapterMethods
        // getMenuItemAttr: (menuItem: Element, attr: string) =>
        //   menuItem.getAttribute(attr),
        setSelectedText: (N) => {
          Nn(De, N);
        },
        isSelectAnchorFocused: () => document.activeElement === le,
        getSelectAnchorAttr: ft,
        setSelectAnchorAttr: It,
        removeSelectAnchorAttr: _t,
        addMenuClass: ie,
        removeMenuClass: Ue,
        openMenu: () => {
          K(se, !0);
        },
        closeMenu: () => {
          K(se, !1);
        },
        getAnchorElement: () => le,
        setMenuAnchorElement: (N) => {
          K(ee, N, !0);
        },
        setMenuAnchorCorner: (N) => {
          K(ae, N, !0);
        },
        setMenuWrapFocus: (N) => {
          K(we, N, !0);
        },
        getSelectedIndex: () => s(M),
        setSelectedIndex: (N) => {
          ut = N, K(M, N, !0), p(Vt()[s(M)]);
        },
        focusMenuItemAtIndex: (N) => {
          Re.focusItemAtIndex(N);
        },
        getMenuItemCount: () => Re.items.length,
        getMenuItemValues: () => Vt().map(b()),
        getMenuItemTextAtIndex: (N) => Re.getPrimaryTextAtIndex(N),
        isTypeaheadInProgress: () => Re.typeaheadInProgress,
        typeaheadMatchItem: (N, Se) => Re.typeaheadMatchItem(N, Se),
        // getCommonAdapterMethods
        addClass: pe,
        removeClass: W,
        hasClass: mt,
        setRippleCenter: (N) => Q && Q.setRippleCenter(N),
        activateBottomLine: () => Q && Q.activate(),
        deactivateBottomLine: () => Q && Q.deactivate(),
        notifyChange: (N) => {
          var Se;
          y(!0), I() && A(!((Se = s(H)) != null && Se.isValid())), Ke(jn(), "SMUISelectChange", { value: p(), index: s(M) });
        },
        // getOutlineAdapterMethods
        hasOutline: () => !!ge,
        notchOutline: (N) => ge && ge.notch(N),
        closeOutline: () => ge && ge.closeNotch(),
        // getLabelAdapterMethods
        hasLabel: () => !!V,
        floatLabel: (N) => V && V.float(N),
        getLabelWidth: () => V ? V.getWidth() : 0,
        setLabelRequired: (N) => V && V.setRequired(N)
      },
      {
        get helperText() {
          return ke;
        },
        get leadingIcon() {
          return Ge;
        }
      }
    ),
    !0
  ), K(M, Vt().indexOf(p()), !0), s(H).init(), St(z), () => {
    var N;
    (N = s(H)) == null || N.destroy();
  })), In(() => {
    $ && $();
  });
  function mt(N) {
    return N in D ? D[N] : jn().classList.contains(N);
  }
  function pe(N) {
    D[N] || (D[N] = !0);
  }
  function W(N) {
    (!(N in D) || D[N]) && (D[N] = !1);
  }
  function j(N, Se) {
    O[N] != Se && (Se === "" || Se == null ? delete O[N] : O[N] = Se);
  }
  function ie(N) {
    Ee[N] || (Ee[N] = !0);
  }
  function Ue(N) {
    (!(N in Ee) || Ee[N]) && (Ee[N] = !1);
  }
  function ft(N) {
    return N in re ? re[N] ?? null : jn().getAttribute(N);
  }
  function It(N, Se) {
    re[N] !== Se && (re[N] = Se);
  }
  function _t(N) {
    (!(N in re) || re[N] != null) && (re[N] = void 0);
  }
  function Vt() {
    return Re.getOrderedList().map((N) => N.getValue());
  }
  function yr(N) {
    const Se = N.currentTarget.getBoundingClientRect();
    return (gt(N) ? N.touches[0].clientX : N.clientX) - Se.left;
  }
  function gt(N) {
    return "touches" in N;
  }
  function Ht() {
    if (s(H) == null)
      throw new Error("Instance is undefined.");
    return s(H).getUseDefaultValidation();
  }
  function St(N) {
    var Se;
    (Se = s(H)) == null || Se.setUseDefaultValidation(N);
  }
  function On() {
    le.focus();
  }
  function _i() {
    var N;
    (N = s(H)) == null || N.layout();
  }
  function jn() {
    return te;
  }
  var Xe = {
    getUseDefaultValidation: Ht,
    setUseDefaultValidation: St,
    focus: On,
    layout: _i,
    getElement: jn
  }, et = Ip(), tt = X(et);
  Ne(tt, (N, Se, ht) => ({ class: N, style: Se, ...ht }), [
    () => Me({
      "mdc-select": !0,
      "mdc-select--required": _(),
      "mdc-select--disabled": m(),
      "mdc-select--filled": f() === "filled",
      "mdc-select--outlined": f() === "outlined",
      "smui-select--standard": f() === "standard",
      "mdc-select--with-leading-icon": o(L()) ? e.leadingIcon : L(),
      "mdc-select--no-label": g() || h() == null,
      "mdc-select--invalid": A(),
      "mdc-select--activated": s(se),
      "mdc-data-table__pagination-rows-per-page-select": He === "data-table:pagination",
      ...D,
      [l()]: !0
    }),
    () => Object.entries(O).map(([N, Se]) => `${N}: ${Se};`).concat([c()]).join(" "),
    () => Bn(U, [
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
  var Nt = fe(tt);
  {
    var vn = (N) => {
      var Se = _p();
      Ne(
        Se,
        (ht) => ({
          type: "hidden",
          required: _(),
          disabled: m(),
          value: p(),
          ...ht
        }),
        [() => it(U, "input$")],
        void 0,
        void 0,
        !0
      ), x(N, Se);
    };
    oe(Nt, (N) => {
      E() && N(vn);
    });
  }
  var ot = _e(Nt, 2), dt = (N) => {
    var Se;
    le.focus(), s(H) && s(H).handleClick(yr(N)), (Se = e.anchor$onclick) == null || Se.call(e, N);
  }, wt = (N) => {
    var Se;
    s(H) && s(H).handleKeydown(N), (Se = e.onkeydown) == null || Se.call(e, N);
  }, nt = (N) => {
    var Se;
    s(H) && s(H).handleBlur(), Ke(jn(), "blur", N), (Se = e.anchor$onblur) == null || Se.call(e, N);
  }, Dt = (N) => {
    var Se;
    s(H) && s(H).handleFocus(), Ke(jn(), "focus", N), (Se = e.anchor$onfocus) == null || Se.call(e, N);
  };
  Ne(
    ot,
    (N, Se) => ({
      class: N,
      "aria-required": _() ? "true" : void 0,
      "aria-disabled": m() ? "true" : void 0,
      "aria-controls": s(B),
      "aria-expanded": s(se) ? "true" : "false",
      "aria-describedby": s(P),
      role: "combobox",
      tabindex: "0",
      ...re,
      ...Se,
      onclick: dt,
      onkeydown: wt,
      onblur: nt,
      onfocus: Dt
    }),
    [
      () => Me({ "mdc-select__anchor": !0, [w()]: !0 }),
      () => it(U, "anchor$")
    ]
  );
  var Rn = fe(ot);
  {
    var Mt = (N) => {
      var Se = yp();
      x(N, Se);
    };
    oe(Rn, (N) => {
      f() === "filled" && N(Mt);
    });
  }
  var Et = _e(Rn, 2);
  {
    var Ut = (N) => {
      {
        let Se = /* @__PURE__ */ he(() => S() + "-smui-label"), ht = /* @__PURE__ */ he(() => n() !== ""), Pt = /* @__PURE__ */ he(() => it(U, "label$"));
        Ce(
          yo(N, Je(
            {
              get id() {
                return s(Se);
              },
              get floatAbove() {
                return s(ht);
              },
              get required() {
                return _();
              }
            },
            () => s(Pt),
            {
              children: (ar, or) => {
                var oa = ne(), yi = X(oa);
                {
                  var jr = (Wr) => {
                  }, Bo = (Wr) => {
                    var Ga = ne(), sa = X(Ga);
                    {
                      var fl = (Ir) => {
                        var qr = vt();
                        Oe(() => $e(qr, h())), x(Ir, qr);
                      }, ja = (Ir) => {
                        var qr = ne(), Vo = X(qr);
                        Ae(Vo, h), x(Ir, qr);
                      };
                      oe(
                        sa,
                        (Ir) => {
                          typeof h() == "string" ? Ir(fl) : Ir(ja, !1);
                        },
                        !0
                      );
                    }
                    x(Wr, Ga);
                  };
                  oe(yi, (Wr) => {
                    h() == null ? Wr(jr) : Wr(Bo, !1);
                  });
                }
                x(ar, oa);
              },
              $$slots: { default: !0 }
            }
          )),
          (ar) => V = ar,
          () => V
        );
      }
    };
    oe(Et, (N) => {
      f() !== "outlined" && !g() && h() != null && N(Ut);
    });
  }
  var ln = _e(Et, 2);
  {
    var Gt = (N) => {
      {
        let Se = /* @__PURE__ */ he(() => g() || h() == null), ht = /* @__PURE__ */ he(() => it(U, "outline$"));
        Ce(
          id(N, Je(
            {
              get noLabel() {
                return s(Se);
              }
            },
            () => s(ht),
            {
              children: (Pt, ar) => {
                var or = ne(), oa = X(or);
                {
                  var yi = (jr) => {
                    {
                      let Bo = /* @__PURE__ */ he(() => S() + "-smui-label"), Wr = /* @__PURE__ */ he(() => n() !== ""), Ga = /* @__PURE__ */ he(() => it(U, "label$"));
                      Ce(
                        yo(jr, Je(
                          {
                            get id() {
                              return s(Bo);
                            },
                            get floatAbove() {
                              return s(Wr);
                            },
                            get required() {
                              return _();
                            }
                          },
                          () => s(Ga),
                          {
                            children: (sa, fl) => {
                              var ja = ne(), Ir = X(ja);
                              {
                                var qr = (la) => {
                                }, Vo = (la) => {
                                  var hl = ne(), kd = X(hl);
                                  {
                                    var Bd = (Ii) => {
                                      var ua = vt();
                                      Oe(() => $e(ua, h())), x(Ii, ua);
                                    }, Vd = (Ii) => {
                                      var ua = ne(), Gd = X(ua);
                                      Ae(Gd, h), x(Ii, ua);
                                    };
                                    oe(
                                      kd,
                                      (Ii) => {
                                        typeof h() == "string" ? Ii(Bd) : Ii(Vd, !1);
                                      },
                                      !0
                                    );
                                  }
                                  x(la, hl);
                                };
                                oe(Ir, (la) => {
                                  h() == null ? la(qr) : la(Vo, !1);
                                });
                              }
                              x(sa, ja);
                            },
                            $$slots: { default: !0 }
                          }
                        )),
                        (sa) => V = sa,
                        () => V
                      );
                    }
                  };
                  oe(oa, (jr) => {
                    !g() && h() != null && jr(yi);
                  });
                }
                x(Pt, or);
              },
              $$slots: { default: !0 }
            }
          )),
          (Pt) => ge = Pt,
          () => ge
        );
      }
    };
    oe(ln, (N) => {
      f() === "outlined" && N(Gt);
    });
  }
  var un = _e(ln, 2);
  Ae(un, () => e.leadingIcon ?? me);
  var Jt = _e(un, 2);
  Ne(Jt, (N, Se) => ({ class: N, ...Se }), [
    () => Me({
      "mdc-select__selected-text-container": !0,
      [Z()]: !0
    }),
    () => it(U, "selectedTextContainer$")
  ]);
  var Wn = fe(Jt);
  Ne(
    Wn,
    (N, Se) => ({
      id: S() + "-smui-selected-text",
      class: N,
      role: "button",
      "aria-haspopup": "listbox",
      "aria-labelledby": S() + "-smui-label",
      ...Se
    }),
    [
      () => Me({
        "mdc-select__selected-text": !0,
        [q()]: !0
      }),
      () => it(U, "selectedText$")
    ]
  );
  var Vr = fe(Wn);
  Pe(Wn, (N, Se) => Y == null ? void 0 : Y(N, Se), G), Pe(Jt, (N, Se) => Y == null ? void 0 : Y(N, Se), k);
  var cn = _e(Jt, 2);
  Ne(cn, (N, Se) => ({ class: N, ...Se }), [
    () => Me({
      "mdc-select__dropdown-icon": !0,
      [C()]: !0
    }),
    () => it(U, "dropdownIcon$")
  ]), Pe(cn, (N, Se) => Y == null ? void 0 : Y(N, Se), R);
  var zt = _e(cn, 2);
  {
    var qn = (N) => {
      {
        let Se = /* @__PURE__ */ he(() => it(U, "ripple$"));
        Ce(rd(N, Je(() => s(Se))), (ht) => Q = ht, () => Q);
      }
    };
    oe(zt, (N) => {
      f() !== "outlined" && d() && N(qn);
    });
  }
  Ce(ot, (N) => le = N, () => le), Pe(ot, (N, Se) => Y == null ? void 0 : Y(N, Se), T);
  var Gr = _e(ot, 2);
  {
    let N = /* @__PURE__ */ he(() => Me({
      "mdc-select__menu": !0,
      ...Ee,
      [F()]: !0
    })), Se = /* @__PURE__ */ he(() => it(U, "menu$"));
    up(Gr, Je(
      {
        get class() {
          return s(N);
        },
        get id() {
          return s(B);
        },
        fullWidth: !0,
        anchor: !1,
        get anchorElement() {
          return s(ee);
        },
        get anchorCorner() {
          return s(ae);
        }
      },
      () => s(Se),
      {
        onSMUIMenuSelected: (ht) => {
          var Pt;
          s(H) && s(H).handleMenuItemAction(ht.detail.index), (Pt = e.onSMUIMenuSelected) == null || Pt.call(e, ht);
        },
        onSMUIMenuSurfaceClosing: (ht) => {
          var Pt;
          s(H) && s(H).handleMenuClosing(), (Pt = e.onSMUIMenuSurfaceClosing) == null || Pt.call(e, ht);
        },
        onSMUIMenuSurfaceClosed: (ht) => {
          var Pt;
          s(H) && s(H).handleMenuClosed(), (Pt = e.onSMUIMenuSurfaceClosed) == null || Pt.call(e, ht);
        },
        onSMUIMenuSurfaceOpened: (ht) => {
          var Pt;
          s(H) && s(H).handleMenuOpened(), (Pt = e.onSMUIMenuSurfaceOpened) == null || Pt.call(e, ht);
        },
        get open() {
          return s(se);
        },
        set open(ht) {
          K(se, ht, !0);
        },
        children: (ht, Pt) => {
          {
            let ar = /* @__PURE__ */ he(() => it(U, "list$"));
            cp(ht, Je(
              {
                role: "listbox",
                get wrapFocus() {
                  return s(we);
                }
              },
              () => s(ar),
              {
                get selectedIndex() {
                  return s(M);
                },
                set selectedIndex(or) {
                  K(M, or, !0);
                },
                children: (or, oa) => {
                  var yi = ne(), jr = X(yi);
                  Ae(jr, () => e.children ?? me), x(or, yi);
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
  Ce(tt, (N) => te = N, () => te), Pe(tt, (N, Se) => Yt == null ? void 0 : Yt(N, Se), () => ({
    ripple: f() === "filled",
    unbounded: !1,
    addClass: pe,
    removeClass: W,
    addStyle: j
  })), Pe(tt, (N, Se) => ns == null ? void 0 : ns(N, Se), () => ({ addClass: pe, removeClass: W })), Pe(tt, (N, Se) => Y == null ? void 0 : Y(N, Se), u);
  var ko = _e(tt, 2);
  {
    var Ud = (N) => {
      {
        let Se = /* @__PURE__ */ he(() => it(U, "helperText$"));
        pp(N, Je(() => s(Se), {
          children: (ht, Pt) => {
            var ar = ne(), or = X(ar);
            Ae(or, () => e.helperText ?? me), x(ht, ar);
          },
          $$slots: { default: !0 }
        }));
      }
    };
    oe(ko, (N) => {
      e.helperText && N(Ud);
    });
  }
  Oe(() => $e(Vr, n())), x(t, et);
  var Fd = xe(Xe);
  return i(), Fd;
}
function Sp(t, e) {
  Te(e, !0);
  const n = () => kn(d, "$selectedValue", r), [r, i] = ir();
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
  ce("SMUI:list:item:role", "option");
  const m = /* @__PURE__ */ he(() => o() != null && o() !== "" && n() === o());
  at(f), In(f);
  function f() {
    s(m) && l && Nn(c, l.getPrimaryText());
  }
  function g() {
    return l.getElement();
  }
  var h = { getElement: g };
  Ce(
    vp(t, Je(
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
          var A = ne(), I = X(A);
          Ae(I, () => e.children ?? me), x(b, A);
        },
        $$slots: { default: !0 }
      }
    )),
    (b) => l = b,
    () => l
  );
  var p = xe(h);
  return i(), p;
}
function Ap(t, e) {
  Te(e, !0);
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
  Ep(t, {
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
      var f = ne(), g = X(f);
      Qn(g, 17, n, Ri, (h, p, b) => {
        {
          let y = /* @__PURE__ */ he(() => c(b));
          Sp(h, {
            get onclick() {
              return s(y);
            },
            get value() {
              return s(p).value;
            },
            children: (A, I) => {
              var _ = vt();
              Oe(() => $e(_, s(p).label)), x(A, _);
            },
            $$slots: { default: !0 }
          });
        }
      }), x(d, f);
    },
    $$slots: { default: !0 }
  }), xe();
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
function Cp(t) {
  return t ? t.scrollHeight > t.offsetHeight : !1;
}
function Tp(t) {
  return t ? t.scrollTop === 0 : !1;
}
function xp(t) {
  return t ? Math.ceil(t.scrollHeight - t.scrollTop) === t.clientHeight : !1;
}
function wp(t) {
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
var Lp = (
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
var st = {
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
}, va = {
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
}, rs = {
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
var Io;
(function(t) {
  t.POLL_SCROLL_POS = "poll_scroll_position", t.POLL_LAYOUT_CHANGE = "poll_layout_change";
})(Io || (Io = {}));
var Op = (
  /** @class */
  function(t) {
    ze(e, t);
    function e(n) {
      var r = t.call(this, be(be({}, e.defaultAdapter), n)) || this;
      return r.dialogOpen = !1, r.isFullscreen = !1, r.animationFrame = 0, r.animationTimer = 0, r.escapeKeyAction = va.CLOSE_ACTION, r.scrimClickAction = va.CLOSE_ACTION, r.autoStackButtons = !0, r.areButtonsStacked = !1, r.suppressDefaultPressSelector = va.SUPPRESS_DEFAULT_PRESS_SELECTOR, r.animFrame = new Lp(), r.contentScrollHandler = function() {
        r.handleScrollEvent();
      }, r.windowResizeHandler = function() {
        r.layout();
      }, r.windowOrientationChangeHandler = function() {
        r.layout();
      }, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return st;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return va;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return rs;
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
      this.adapter.hasClass(st.STACKED) && this.setAutoStackButtons(!1), this.isFullscreen = this.adapter.hasClass(st.FULLSCREEN);
    }, e.prototype.destroy = function() {
      this.animationTimer && (clearTimeout(this.animationTimer), this.handleAnimationTimerEnd()), this.isFullscreen && this.adapter.deregisterContentEventHandler("scroll", this.contentScrollHandler), this.animFrame.cancelAll(), this.adapter.deregisterWindowEventHandler("resize", this.windowResizeHandler), this.adapter.deregisterWindowEventHandler("orientationchange", this.windowOrientationChangeHandler);
    }, e.prototype.open = function(n) {
      var r = this;
      this.dialogOpen = !0, this.adapter.notifyOpening(), this.adapter.addClass(st.OPENING), this.isFullscreen && this.adapter.registerContentEventHandler("scroll", this.contentScrollHandler), n && n.isAboveFullscreenDialog && this.adapter.addClass(st.SCRIM_HIDDEN), this.adapter.registerWindowEventHandler("resize", this.windowResizeHandler), this.adapter.registerWindowEventHandler("orientationchange", this.windowOrientationChangeHandler), this.runNextAnimationFrame(function() {
        r.adapter.addClass(st.OPEN), r.adapter.addBodyClass(st.SCROLL_LOCK), r.layout(), r.animationTimer = setTimeout(function() {
          r.handleAnimationTimerEnd(), r.adapter.trapFocus(r.adapter.getInitialFocusEl()), r.adapter.notifyOpened();
        }, rs.DIALOG_ANIMATION_OPEN_TIME_MS);
      });
    }, e.prototype.close = function(n) {
      var r = this;
      n === void 0 && (n = ""), this.dialogOpen && (this.dialogOpen = !1, this.adapter.notifyClosing(n), this.adapter.addClass(st.CLOSING), this.adapter.removeClass(st.OPEN), this.adapter.removeBodyClass(st.SCROLL_LOCK), this.isFullscreen && this.adapter.deregisterContentEventHandler("scroll", this.contentScrollHandler), this.adapter.deregisterWindowEventHandler("resize", this.windowResizeHandler), this.adapter.deregisterWindowEventHandler("orientationchange", this.windowOrientationChangeHandler), cancelAnimationFrame(this.animationFrame), this.animationFrame = 0, clearTimeout(this.animationTimer), this.animationTimer = setTimeout(function() {
        r.adapter.releaseFocus(), r.handleAnimationTimerEnd(), r.adapter.notifyClosed(n);
      }, rs.DIALOG_ANIMATION_CLOSE_TIME_MS));
    }, e.prototype.showSurfaceScrim = function() {
      var n = this;
      this.adapter.addClass(st.SURFACE_SCRIM_SHOWING), this.runNextAnimationFrame(function() {
        n.adapter.addClass(st.SURFACE_SCRIM_SHOWN);
      });
    }, e.prototype.hideSurfaceScrim = function() {
      this.adapter.removeClass(st.SURFACE_SCRIM_SHOWN), this.adapter.addClass(st.SURFACE_SCRIM_HIDING);
    }, e.prototype.handleSurfaceScrimTransitionEnd = function() {
      this.adapter.removeClass(st.SURFACE_SCRIM_HIDING), this.adapter.removeClass(st.SURFACE_SCRIM_SHOWING);
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
      this.animFrame.request(Io.POLL_LAYOUT_CHANGE, function() {
        n.layoutInternal();
      });
    }, e.prototype.handleClick = function(n) {
      var r = this.adapter.eventTargetMatches(n.target, va.SCRIM_SELECTOR);
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
      this.animFrame.request(Io.POLL_SCROLL_POS, function() {
        n.toggleScrollDividerHeader(), n.toggleScrollDividerFooter();
      });
    }, e.prototype.layoutInternal = function() {
      this.autoStackButtons && this.detectStackedButtons(), this.toggleScrollableClasses();
    }, e.prototype.handleAnimationTimerEnd = function() {
      this.animationTimer = 0, this.adapter.removeClass(st.OPENING), this.adapter.removeClass(st.CLOSING);
    }, e.prototype.runNextAnimationFrame = function(n) {
      var r = this;
      cancelAnimationFrame(this.animationFrame), this.animationFrame = requestAnimationFrame(function() {
        r.animationFrame = 0, clearTimeout(r.animationTimer), r.animationTimer = setTimeout(n, 0);
      });
    }, e.prototype.detectStackedButtons = function() {
      this.adapter.removeClass(st.STACKED);
      var n = this.adapter.areButtonsStacked();
      n && this.adapter.addClass(st.STACKED), n !== this.areButtonsStacked && (this.adapter.reverseButtons(), this.areButtonsStacked = n);
    }, e.prototype.toggleScrollableClasses = function() {
      this.adapter.removeClass(st.SCROLLABLE), this.adapter.isContentScrollable() && (this.adapter.addClass(st.SCROLLABLE), this.isFullscreen && (this.toggleScrollDividerHeader(), this.toggleScrollDividerFooter()));
    }, e.prototype.toggleScrollDividerHeader = function() {
      this.adapter.isScrollableContentAtTop() ? this.adapter.hasClass(st.SCROLL_DIVIDER_HEADER) && this.adapter.removeClass(st.SCROLL_DIVIDER_HEADER) : this.adapter.addClass(st.SCROLL_DIVIDER_HEADER);
    }, e.prototype.toggleScrollDividerFooter = function() {
      this.adapter.isScrollableContentAtBottom() ? this.adapter.hasClass(st.SCROLL_DIVIDER_FOOTER) && this.adapter.removeClass(st.SCROLL_DIVIDER_FOOTER) : this.adapter.addClass(st.SCROLL_DIVIDER_FOOTER);
    }, e;
  }(xt)
), Rp = /* @__PURE__ */ de('<div class="mdc-dialog__surface-scrim"></div>'), Dp = /* @__PURE__ */ de('<div><div><div><!> <!></div></div> <div class="mdc-dialog__scrim"></div></div> <!>', 1);
function el(t, e) {
  Te(e, !0);
  const n = () => kn(G, "$aboveFullscreenShown", r), [r, i] = ir(), { FocusTrap: a } = $m, { closest: o, matches: u } = ia;
  let l = v(e, "use", 19, () => []), c = v(e, "class", 3, ""), d = v(e, "open", 15, !1), m = v(e, "selection", 3, !1), f = v(e, "escapeKeyAction", 3, "close"), g = v(e, "scrimClickAction", 3, "close"), h = v(e, "autoStackButtons", 3, !0), p = v(e, "fullscreen", 3, !1), b = v(e, "sheet", 3, !1), y = v(e, "noContentPadding", 3, !1), A = v(e, "container$class", 3, ""), I = v(e, "surface$class", 3, ""), _ = /* @__PURE__ */ je(e, [
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
  ]), S, E = /* @__PURE__ */ ve(void 0), L = new vi(), T = Ie({}), w, k = Bt(!1), Z = ye("SMUI:dialog:aboveFullscreen"), G = ye("SMUI:dialog:aboveFullscreenShown") ?? Bt(!1), q = ye("SMUI:addLayoutListener"), R, C = [], F = (W) => (C.push(W), () => {
    const j = C.indexOf(W);
    j >= 0 && C.splice(j, 1);
  });
  ce("SMUI:dialog:actions:reversed", k), ce("SMUI:addLayoutListener", F), ce("SMUI:dialog:selection", m()), ce("SMUI:dialog:aboveFullscreen", Z || p()), ce("SMUI:dialog:aboveFullscreenShown", G), b() && ce("SMUI:icon-button:context", "dialog:sheet"), Le(() => {
    s(E) && s(E).getEscapeKeyAction() !== f() && s(E).setEscapeKeyAction(f());
  }), Le(() => {
    s(E) && s(E).getScrimClickAction() !== g() && s(E).setScrimClickAction(g());
  }), Le(() => {
    s(E) && s(E).getAutoStackButtons() !== h() && s(E).setAutoStackButtons(h());
  }), Le(() => {
    h() || Nn(k, !0);
  }), q && (R = q(se)), Le(() => {
    s(E) && s(E).isOpen() !== d() && (d() ? s(E).open({ isAboveFullscreenDialog: !!Z }) : s(E).close());
  });
  let U = n();
  Le(() => {
    p() && s(E) && U !== n() && (U = n(), n() ? s(E).showSurfaceScrim() : s(E).hideSurfaceScrim());
  }), at(() => (w = new a(S, { initialFocusEl: re() ?? void 0 }), K(
    E,
    new Op({
      addBodyClass: (W) => document.body.classList.add(W),
      addClass: te,
      areButtonsStacked: () => wp(D()),
      clickDefaultButton: () => {
        const W = O();
        W && W.click();
      },
      eventTargetMatches: (W, j) => W ? u(W, j) : !1,
      getActionFromEvent: (W) => {
        if (!W.target)
          return "";
        const j = o(W.target, "[data-mdc-dialog-action]");
        return j && j.getAttribute("data-mdc-dialog-action");
      },
      getInitialFocusEl: re,
      hasClass: z,
      isContentScrollable: () => Cp(le()),
      notifyClosed: (W) => {
        d(!1), Ke(Ee(), "SMUIDialogClosed", W ? { action: W } : {});
      },
      notifyClosing: (W) => Ke(Ee(), "SMUIDialogClosing", W ? { action: W } : {}),
      notifyOpened: () => Ke(Ee(), "SMUIDialogOpened", {}),
      notifyOpening: () => Ke(Ee(), "SMUIDialogOpening", {}),
      releaseFocus: () => w.releaseFocus(),
      removeBodyClass: (W) => document.body.classList.remove(W),
      removeClass: H,
      reverseButtons: () => {
        Nn(k, !0);
      },
      trapFocus: () => w.trapFocus(),
      registerContentEventHandler: (W, j) => {
        const ie = le();
        ie instanceof HTMLElement && L.on(ie, W, j);
      },
      deregisterContentEventHandler: (W, j) => {
        const ie = le();
        ie instanceof HTMLElement && L.off(ie, W, j);
      },
      isScrollableContentAtTop: () => Tp(le()),
      isScrollableContentAtBottom: () => xp(le()),
      registerWindowEventHandler: (W, j) => L.on(window, W, j),
      deregisterWindowEventHandler: (W, j) => L.off(window, W, j)
    }),
    !0
  ), s(E).init(), () => {
    var W;
    (W = s(E)) == null || W.destroy(), L.clear();
  })), In(() => {
    R && R();
  });
  function z(W) {
    return W in T ? T[W] : Ee().classList.contains(W);
  }
  function te(W) {
    T[W] || (T[W] = !0);
  }
  function H(W) {
    (!(W in T) || T[W]) && (T[W] = !1);
  }
  function D() {
    return [].slice.call(Ee().querySelectorAll(".mdc-dialog__button"));
  }
  function O() {
    return Ee().querySelector("[data-mdc-dialog-button-default]");
  }
  function le() {
    return Ee().querySelector(".mdc-dialog__content");
  }
  function re() {
    return Ee().querySelector("[data-mdc-dialog-initial-focus]");
  }
  function M() {
    Z && Nn(G, !0), requestAnimationFrame(() => {
      C.forEach((W) => W());
    });
  }
  function B() {
    C.forEach((W) => W());
  }
  function P() {
    Z && Nn(G, !1);
  }
  function J() {
    return d();
  }
  function $(W) {
    d(W);
  }
  function se() {
    var W;
    return (W = s(E)) == null ? void 0 : W.layout();
  }
  function Ee() {
    return S;
  }
  var ee = { isOpen: J, setOpen: $, layout: se, getElement: Ee }, ae = Dp();
  Jn("resize", Ca, () => d() && s(E) && s(E).layout()), Jn("orientationchange", Ca, () => d() && s(E) && s(E).layout()), Jn("keydown", Ws.body, (W) => s(E) && s(E).handleDocumentKeydown(W));
  var we = X(ae), Re = (W) => {
    var j;
    M(), (j = e.onSMUIDialogOpening) == null || j.call(e, W);
  }, He = (W) => {
    var j;
    B(), (j = e.onSMUIDialogOpened) == null || j.call(e, W);
  }, Ge = (W) => {
    var j;
    P(), (j = e.onSMUIDialogClosed) == null || j.call(e, W);
  }, ke = (W) => {
    var j;
    s(E) && s(E).handleClick(W), (j = e.onclick) == null || j.call(e, W);
  }, V = (W) => {
    var j;
    s(E) && s(E).handleKeydown(W), (j = e.onkeydown) == null || j.call(e, W);
  };
  Ne(
    we,
    (W, j) => ({
      class: W,
      role: "alertdialog",
      "aria-modal": "true",
      ...j,
      onSMUIDialogOpening: Re,
      onSMUIDialogOpened: He,
      onSMUIDialogClosed: Ge,
      onclick: ke,
      onkeydown: V
    }),
    [
      () => Me({
        "mdc-dialog": !0,
        "mdc-dialog--stacked": !h(),
        "mdc-dialog--fullscreen": p(),
        "mdc-dialog--sheet": b(),
        "mdc-dialog--no-content-padding": y(),
        "smui-dialog--selection": m(),
        ...T,
        [c()]: !0
      }),
      () => Bn(_, ["container$", "surface$"])
    ]
  );
  var Q = fe(we);
  Ne(Q, (W, j) => ({ class: W, ...j }), [
    () => Me({ "mdc-dialog__container": !0, [A()]: !0 }),
    () => it(_, "container$")
  ]);
  var ge = fe(Q);
  Ne(ge, (W, j) => ({ class: W, role: "alertdialog", "aria-modal": "true", ...j }), [
    () => Me({ "mdc-dialog__surface": !0, [I()]: !0 }),
    () => it(_, "surface$")
  ]);
  var De = fe(ge);
  Ae(De, () => e.children ?? me);
  var Be = _e(De, 2);
  {
    var ut = (W) => {
      var j = Rp();
      Jn("transitionend", j, () => s(E) && s(E).handleSurfaceScrimTransitionEnd()), x(W, j);
    };
    oe(Be, (W) => {
      p() && W(ut);
    });
  }
  Ce(we, (W) => S = W, () => S), Pe(we, (W, j) => Y == null ? void 0 : Y(W, j), l);
  var mt = _e(we, 2);
  Ae(mt, () => e.over ?? me), x(t, ae);
  var pe = xe(ee);
  return i(), pe;
}
function ld(t, e) {
  Te(e, !0);
  let n = /* @__PURE__ */ je(e, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return Ce(
    aa(t, Je(
      {
        _smuiClass: "mdc-dialog__header",
        _smuiContexts: { "SMUI:icon-button:context": "dialog:header" },
        tag: "div"
      },
      () => n,
      {
        children: (o, u) => {
          var l = ne(), c = X(l);
          Ae(c, () => e.children ?? me), x(o, l);
        },
        $$slots: { default: !0 }
      }
    )),
    (o) => r = o,
    () => r
  ), xe(a);
}
function tl(t, e) {
  Te(e, !0);
  let n = /* @__PURE__ */ je(e, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return Ce(
    aa(t, Je({ _smuiClass: "mdc-dialog__content", tag: "div" }, () => n, {
      children: (o, u) => {
        var l = ne(), c = X(l);
        Ae(c, () => e.children ?? me), x(o, l);
      },
      $$slots: { default: !0 }
    })),
    (o) => r = o,
    () => r
  ), xe(a);
}
function nl(t, e) {
  Te(e, !0);
  let n = /* @__PURE__ */ je(e, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return Ce(
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
          var l = ne(), c = X(l);
          Ae(c, () => e.children ?? me), x(o, l);
        },
        $$slots: { default: !0 }
      }
    )),
    (o) => r = o,
    () => r
  ), xe(a);
}
var Mp = /* @__PURE__ */ de('<div class="dialog-title svelte-187m1sc"><!></div> <!> <!>', 1);
function Pp(t, e) {
  Te(e, !0);
  let n = v(e, "open", 15, !1), r = v(e, "onClose", 3, () => {
  });
  el(t, {
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
      var o = Mp(), u = X(o), l = fe(u);
      Ae(l, () => e.title ?? me);
      var c = _e(u, 2);
      tl(c, {
        id: "large-scroll-content",
        children: (m, f) => {
          var g = ne(), h = X(g);
          Ae(h, () => e.content ?? me), x(m, g);
        },
        $$slots: { default: !0 }
      });
      var d = _e(c, 2);
      nl(d, {
        children: (m, f) => {
          var g = ne(), h = X(g);
          Ae(h, () => e.actions ?? me), x(m, g);
        },
        $$slots: { default: !0 }
      }), x(i, o);
    },
    $$slots: { default: !0 }
  }), xe();
}
const rl = Bt({
  component: null,
  props: {},
  isOpen: !1
}), Hp = Bt([]);
Hp.subscribe;
const lu = Ie({ freeze: !1 });
function Np(t, e) {
  Te(e, !0);
  let n = /* @__PURE__ */ ve(void 0), r = /* @__PURE__ */ ve(!1);
  const i = rl.subscribe((l) => {
    K(n, l, !0), K(r, l.isOpen, !0), lu.freeze = !1;
  });
  at(() => () => i()), Le(() => {
    lu.freeze = s(
      r
      // freeze drawer controls when dialog is open
    );
  });
  var a = ne(), o = X(a);
  {
    var u = (l) => {
      var c = ne(), d = X(c);
      rr(d, () => s(n).component, (m, f) => {
        f(m, Je(() => s(n).props, {
          get open() {
            return s(r);
          },
          set open(g) {
            K(r, g, !0);
          }
        }));
      }), x(l, c);
    };
    oe(o, (l) => {
      s(n).isOpen && s(n).component && l(u);
    });
  }
  x(t, a), xe();
}
function uu(t, e = {}) {
  return new Promise((n) => {
    rl.set({
      component: t,
      props: e,
      isOpen: !0,
      resolve: n
    });
  });
}
function is(t, e) {
  rl.update((n) => {
    var r;
    return (r = n.resolve) == null || r.call(n, { type: t, data: e }), { component: null, props: {}, isOpen: !1 };
  });
}
var Up = /* @__PURE__ */ de('<div class="oscd-confirm-dialog__content svelte-1eipd40"> </div>');
function cu(t, e) {
  Te(e, !0);
  let n = v(e, "open", 15, !1), r = v(e, "title", 3, ""), i = v(e, "message", 3, ""), a = v(e, "confirmActionText", 3, "OK"), o = v(e, "confirmActionColor", 3, "primary"), u = v(e, "cancelActionText", 3, "Cancel"), l = v(e, "color", 3, "var(--mdc-theme-primary, #ff3e00)");
  function c() {
    is("confirm");
  }
  function d() {
    is("cancel");
  }
  zp(t, {
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
    onClose: () => is("cancel"),
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
      tl(f, {
        children: (g, h) => {
          var p = Up(), b = fe(p);
          Oe(() => $e(b, i())), x(g, p);
        },
        $$slots: { default: !0 }
      });
    },
    $$slots: { content: !0 }
  }), xe();
}
var Fp = /* @__PURE__ */ de('<div class="header svelte-154fm8w"><h4 id="leave-confirm-title" class="svelte-154fm8w">Discard unsaved data?</h4></div>'), kp = /* @__PURE__ */ de("<!> <!>", 1), Bp = /* @__PURE__ */ de('<!> <p class="message svelte-154fm8w">If you close this dialog now, all entered data will be permanently lost. This action cannot be undone.</p> <!>', 1);
function Vp(t, e) {
  Te(e, !0);
  let n = v(e, "open", 15, !1), r = v(e, "onStay", 3, () => {
  }), i = v(e, "onLeave", 3, () => {
  });
  el(t, {
    class: "leave-confirm-dialog",
    surface$style: "width: 100%; max-width: 420px;",
    "aria-labelledby": "leave-confirm-title",
    "aria-describedby": "leave-confirm-content",
    get open() {
      return n();
    },
    set open(a) {
      n(a);
    },
    children: (a, o) => {
      var u = Bp(), l = X(u);
      ld(l, {
        children: (d, m) => {
          var f = Fp();
          x(d, f);
        },
        $$slots: { default: !0 }
      });
      var c = _e(l, 4);
      nl(c, {
        class: "oscd-dialog__actions",
        children: (d, m) => {
          var f = kp(), g = X(f);
          Ji(g, {
            type: "button",
            get onclick() {
              return r();
            },
            children: (p, b) => {
              var y = vt("Continue editing");
              x(p, y);
            },
            $$slots: { default: !0 }
          });
          var h = _e(g, 2);
          Ji(h, {
            type: "button",
            get onclick() {
              return i();
            },
            style: "background-color: var(--red); color: white;",
            children: (p, b) => {
              var y = vt("Discard data");
              x(p, y);
            },
            $$slots: { default: !0 }
          }), x(d, f);
        },
        $$slots: { default: !0 }
      }), x(a, u);
    },
    $$slots: { default: !0 }
  }), xe();
}
var Gp = /* @__PURE__ */ de('<div class="dialog__title svelte-ec2c4h"><h4 class="svelte-ec2c4h"> </h4> <!></div>'), jp = /* @__PURE__ */ de("<!> <!>", 1), Wp = /* @__PURE__ */ de('<!> <!> <div class="dialog__actions svelte-ec2c4h"><!></div>', 1), qp = /* @__PURE__ */ de("<!> <!>", 1);
function zp(t, e) {
  Te(e, !0);
  let n = v(e, "open", 15, !1), r = v(e, "title", 3, ""), i = v(e, "confirmActionText", 3, "Confirm"), a = v(e, "confirmActionColor", 3, "primary"), o = v(e, "cancelActionText", 3, "Cancel"), u = v(e, "width", 3, "80vw"), l = v(e, "maxWidth", 3, "85vw"), c = v(e, "height", 3, "85vh"), d = v(e, "maxHeight", 3, "85vh"), m = v(e, "confirmDisabled", 3, !1), f = v(e, "color", 3, "var(--mdc-theme-primary, #ff3e00)"), g = v(e, "showCloseButton", 3, !0), h = v(e, "confirmClose", 3, !1), p = v(e, "onClose", 3, () => {
  }), b = v(e, "onCancel", 3, () => {
  }), y = v(e, "onConfirm", 3, () => {
  }), A = /* @__PURE__ */ ve(!1), I = /* @__PURE__ */ ve(null), _ = /* @__PURE__ */ ve(!1);
  function S(C) {
    h() ? (K(I, C, !0), K(A, !0)) : (K(_, !0), C());
  }
  function E(C) {
    if (s(_)) {
      K(_, !1);
      return;
    }
    C.detail.action === "confirm" ? y()() : S(p());
  }
  function L(C) {
    h() && C.target.classList.contains("mdc-dialog__scrim") && S(p());
  }
  function T(C) {
    h() && n() && C.key === "Escape" && !s(A) && (C.preventDefault(), S(p()));
  }
  function w() {
    K(_, !0), K(A, !1);
    const C = s(I) ?? p();
    K(I, null), C();
  }
  const k = /* @__PURE__ */ he(() => m() ? "" : `background-color: ${a() === "primary" ? f() : "#FF203A"}; color: white;`);
  var Z = qp();
  Jn("keydown", Ca, T);
  var G = X(Z);
  {
    let C = /* @__PURE__ */ he(() => h() ? "" : "close"), F = /* @__PURE__ */ he(() => h() ? "" : "close"), U = /* @__PURE__ */ he(() => `width: ${u()}; max-width: ${l()}; height: ${c()}; max-height: ${d()};`);
    el(G, {
      "aria-labelledby": "large-scroll-title",
      "aria-describedby": "large-scroll-content",
      onSMUIDialogClosed: E,
      get escapeKeyAction() {
        return s(C);
      },
      get scrimClickAction() {
        return s(F);
      },
      onclick: L,
      get surface$style() {
        return s(U);
      },
      get open() {
        return n();
      },
      set open(z) {
        n(z);
      },
      children: (z, te) => {
        var H = Wp(), D = X(H);
        ld(D, {
          children: (P, J) => {
            var $ = Gp(), se = fe($), Ee = fe(se), ee = _e(se, 2);
            {
              var ae = (we) => {
                o_(we, {
                  tabindex: "-1",
                  onClick: () => S(p()),
                  tooltip: "Close",
                  tooltipSide: "left",
                  type: "close",
                  fillColor: "white"
                });
              };
              oe(ee, (we) => {
                g() && we(ae);
              });
            }
            Oe(() => {
              bt($, `background-color: ${f()};`), $e(Ee, r());
            }), x(P, $);
          },
          $$slots: { default: !0 }
        });
        var O = _e(D, 2);
        tl(O, {
          id: "dialog__content",
          children: (P, J) => {
            var $ = ne(), se = X($);
            Ae(se, () => e.content ?? me), x(P, $);
          },
          $$slots: { default: !0 }
        });
        var le = _e(O, 2), re = fe(le);
        {
          var M = (P) => {
            var J = ne(), $ = X(J);
            Ae($, () => e.actions, () => ({ requestClose: () => S(b()) })), x(P, J);
          }, B = (P) => {
            nl(P, {
              class: "oscd-dialog__actions",
              children: (J, $) => {
                var se = jp(), Ee = X(se);
                {
                  var ee = (we) => {
                    Ji(we, {
                      type: "button",
                      onclick: () => S(b()),
                      color: "secondary",
                      children: (Re, He) => {
                        var Ge = vt();
                        Oe(() => $e(Ge, o())), x(Re, Ge);
                      },
                      $$slots: { default: !0 }
                    });
                  };
                  oe(Ee, (we) => {
                    o() && we(ee);
                  });
                }
                var ae = _e(Ee, 2);
                Ji(ae, {
                  type: "button",
                  action: "confirm",
                  get disabled() {
                    return m();
                  },
                  get style() {
                    return s(k);
                  },
                  children: (we, Re) => {
                    var He = vt();
                    Oe(() => $e(He, i())), x(we, He);
                  },
                  $$slots: { default: !0 }
                }), x(J, se);
              },
              $$slots: { default: !0 }
            });
          };
          oe(re, (P) => {
            e.actions ? P(M) : P(B, !1);
          });
        }
        x(z, H);
      },
      $$slots: { default: !0 }
    });
  }
  var q = _e(G, 2);
  {
    var R = (C) => {
      Vp(C, {
        onStay: () => {
          K(A, !1);
        },
        onLeave: w,
        get open() {
          return s(A);
        },
        set open(F) {
          K(A, F, !0);
        }
      });
    };
    oe(q, (C) => {
      h() && C(R);
    });
  }
  x(t, Z), xe();
}
const jt = [];
for (let t = 0; t < 256; ++t)
  jt.push((t + 256).toString(16).slice(1));
function Kp(t, e = 0) {
  return (jt[t[e + 0]] + jt[t[e + 1]] + jt[t[e + 2]] + jt[t[e + 3]] + "-" + jt[t[e + 4]] + jt[t[e + 5]] + "-" + jt[t[e + 6]] + jt[t[e + 7]] + "-" + jt[t[e + 8]] + jt[t[e + 9]] + "-" + jt[t[e + 10]] + jt[t[e + 11]] + jt[t[e + 12]] + jt[t[e + 13]] + jt[t[e + 14]] + jt[t[e + 15]]).toLowerCase();
}
let as;
const Xp = new Uint8Array(16);
function Yp() {
  if (!as) {
    if (typeof crypto > "u" || !crypto.getRandomValues)
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    as = crypto.getRandomValues.bind(crypto);
  }
  return as(Xp);
}
const Zp = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), du = { randomUUID: Zp };
function Qp(t, e, n) {
  var i;
  if (du.randomUUID && !e && !t)
    return du.randomUUID();
  t = t || {};
  const r = t.random ?? ((i = t.rng) == null ? void 0 : i.call(t)) ?? Yp();
  if (r.length < 16)
    throw new Error("Random bytes length must be >= 16");
  if (r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, e) {
    if (n = n || 0, n < 0 || n + 16 > e.length)
      throw new RangeError(`UUID byte range ${n}:${n + 15} is out of buffer bounds`);
    for (let a = 0; a < 16; ++a)
      e[n + a] = r[a];
    return e;
  }
  return Kp(r);
}
var Jp = /* @__PURE__ */ de('<span class="oscd-icon"><!></span>');
function Qt(t, e) {
  var n = Jp(), r = fe(n);
  Ae(r, () => e.children ?? me), x(t, n);
}
var $p = /* @__PURE__ */ Rt('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"></path></svg>');
function eb(t, e) {
  let n = v(e, "svgStyles", 3, "");
  Qt(t, {
    children: (r, i) => {
      var a = $p();
      Oe(() => bt(a, n())), x(r, a);
    }
  });
}
var tb = /* @__PURE__ */ Rt('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"></path></svg>');
function il(t, e) {
  let n = v(e, "svgStyles", 3, "");
  Qt(t, {
    children: (r, i) => {
      var a = tb();
      Oe(() => bt(a, n())), x(r, a);
    }
  });
}
var nb = /* @__PURE__ */ Rt('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z"></path></svg>');
function rb(t, e) {
  let n = v(e, "svgStyles", 3, "");
  Qt(t, {
    children: (r, i) => {
      var a = nb();
      Oe(() => bt(a, n())), x(r, a);
    }
  });
}
var ib = /* @__PURE__ */ Rt('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="m590-160 80 80H240q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h360l200 240v480q0 20-8.5 36.5T768-96L560-302q-17 11-37 16.5t-43 5.5q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 23-5.5 43T618-360l102 104v-356L562-800H240v640h350ZM480-360q33 0 56.5-23.5T560-440q0-33-23.5-56.5T480-520q-33 0-56.5 23.5T400-440q0 33 23.5 56.5T480-360Zm0-80Zm0 0Z"></path></svg>');
function ab(t, e) {
  let n = v(e, "svgStyles", 3, "");
  Qt(t, {
    children: (r, i) => {
      var a = ib();
      Oe(() => bt(a, n())), x(r, a);
    }
  });
}
var ob = /* @__PURE__ */ Rt('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-160q-134 0-227-93t-93-227q0-134 93-227t227-93q69 0 132 28.5T720-690v-110h80v280H520v-80h168q-32-56-87.5-88T480-720q-100 0-170 70t-70 170q0 100 70 170t170 70q77 0 139-44t87-116h84q-28 106-114 173t-196 67Z"></path></svg>');
function sb(t, e) {
  let n = v(e, "svgStyles", 3, "");
  Qt(t, {
    children: (r, i) => {
      var a = ob();
      Oe(() => bt(a, n())), x(r, a);
    }
  });
}
var lb = /* @__PURE__ */ Rt('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M200-440v-80h560v80H200Z"></path></svg>');
function ub(t, e) {
  let n = v(e, "svgStyles", 3, "");
  Qt(t, {
    children: (r, i) => {
      var a = lb();
      Oe(() => bt(a, n())), x(r, a);
    }
  });
}
var cb = /* @__PURE__ */ Rt('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"></path></svg>');
function ud(t, e) {
  let n = v(e, "svgStyles", 3, "");
  Qt(t, {
    children: (r, i) => {
      var a = cb();
      Oe(() => bt(a, n())), x(r, a);
    }
  });
}
var db = /* @__PURE__ */ Rt('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"></path></svg>');
function cd(t, e) {
  let n = v(e, "svgStyles", 3, "");
  Qt(t, {
    children: (r, i) => {
      var a = db();
      Oe(() => bt(a, n())), x(r, a);
    }
  });
}
var fb = /* @__PURE__ */ Rt('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z"></path></svg>');
function hb(t, e) {
  let n = v(e, "svgStyles", 3, "");
  Qt(t, {
    children: (r, i) => {
      var a = fb();
      Oe(() => bt(a, n())), x(r, a);
    }
  });
}
var vb = /* @__PURE__ */ Rt('<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"></path><path d="M16 8h-2v3h-3v2h3v3h2v-3h3v-2h-3zM2 12c0-2.79 1.64-5.2 4.01-6.32V3.52C2.52 4.76 0 8.09 0 12s2.52 7.24 6.01 8.48v-2.16C3.64 17.2 2 14.79 2 12zm13-9c-4.96 0-9 4.04-9 9s4.04 9 9 9 9-4.04 9-9-4.04-9-9-9zm0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7z"></path></svg>');
function mb(t, e) {
  let n = v(e, "svgStyles", 3, "");
  Qt(t, {
    children: (r, i) => {
      var a = vb();
      Oe(() => bt(a, n())), x(r, a);
    }
  });
}
mf();
var gb = /* @__PURE__ */ Rt('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"></path></svg>');
function pb(t, e) {
  let n = v(e, "svgStyles", 3, "");
  Qt(t, {
    children: (r, i) => {
      var a = gb();
      Oe(() => bt(a, n())), x(r, a);
    }
  });
}
var bb = /* @__PURE__ */ Rt('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960"><path d="m176-120-56-56 301-302-181-45 198-123-17-234 179 151 216-88-87 217 151 178-234-16-124 198-45-181-301 301Zm24-520-80-80 80-80 80 80-80 80Zm355 197 48-79 93 7-60-71 35-86-86 35-71-59 7 92-79 49 90 22 23 90Zm165 323-80-80 80-80 80 80-80 80ZM569-570Z"></path></svg>');
function _b(t, e) {
  let n = v(e, "svgStyles", 3, "");
  Qt(t, {
    children: (r, i) => {
      var a = bb();
      Oe(() => bt(a, n())), x(r, a);
    }
  });
}
var yb = /* @__PURE__ */ Rt('<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m770-302-60-62q40-11 65-42.5t25-73.5q0-50-35-85t-85-35H520v-80h160q83 0 141.5 58.5T880-480q0 57-29.5 105T770-302ZM634-440l-80-80h86v80h-6ZM792-56 56-792l56-56 736 736-56 56ZM440-280H280q-83 0-141.5-58.5T80-480q0-69 42-123t108-71l74 74h-24q-50 0-85 35t-35 85q0 50 35 85t85 35h160v80ZM320-440v-80h65l79 80H320Z"></path></svg>');
function Ib(t, e) {
  let n = v(e, "svgStyles", 3, "");
  Qt(t, {
    children: (r, i) => {
      var a = yb();
      Oe(() => bt(a, n())), x(r, a);
    }
  });
}
var Eb = /* @__PURE__ */ Rt('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"></path></svg>');
function Sb(t, e) {
  let n = v(e, "svgStyles", 3, "");
  Qt(t, {
    children: (r, i) => {
      var a = Eb();
      Oe(() => bt(a, n())), x(r, a);
    }
  });
}
var Ab = /* @__PURE__ */ Rt('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" height="24px"><path d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z"></path></svg>');
function Cb(t, e) {
  let n = v(e, "svgStyles", 8, "");
  Qt(t, {
    children: (r, i) => {
      var a = Ab();
      Oe(() => bt(a, n())), x(r, a);
    }
  });
}
var Tb = /* @__PURE__ */ Rt('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3" cursor="pointer"><path d="M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160Zm40 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"></path></svg>');
function xb(t, e) {
  let n = v(e, "svgStyles", 8, "");
  Qt(t, {
    children: (r, i) => {
      var a = Tb();
      Oe(() => bt(a, n())), x(r, a);
    }
  });
}
function wb(t, e) {
  e(t.target.value);
}
var Lb = /* @__PURE__ */ de('<div class="custom-text-field svelte-1719vm0"><input type="date" id="datetime-picker" class="custom-text-field__input svelte-1719vm0" placeholder=""/> <label for="datetime-picker" class="custom-floating-label svelte-1719vm0"> </label> <span class="custom-line svelte-1719vm0"></span></div>');
function Ob(t, e) {
  Te(e, !0);
  let n = v(e, "label", 3, ""), r = v(e, "value", 15, "");
  var i = Lb(), a = fe(i);
  a.__change = [wb, r];
  var o = _e(a, 2), u = fe(o);
  Oe(() => $e(u, n())), wa(a, r), x(t, i), xe();
}
yn(["change"]);
function Rb(t, e) {
  e(t.target.value);
}
var Db = /* @__PURE__ */ de('<div class="custom-text-field svelte-6wdfbb"><input type="datetime-local" id="datetime-picker" class="custom-text-field__input svelte-6wdfbb" placeholder=""/> <label for="datetime-picker" class="custom-floating-label svelte-6wdfbb"> </label> <span class="custom-line svelte-6wdfbb"></span></div>');
function Mb(t, e) {
  Te(e, !0);
  let n = v(e, "label", 3, ""), r = v(e, "value", 15, "");
  var i = Db(), a = fe(i);
  a.__change = [Rb, r];
  var o = _e(a, 2), u = fe(o);
  Oe(() => $e(u, n())), wa(a, r), x(t, i), xe();
}
yn(["change"]);
function Pb(t, e, n, r) {
  e() && ((t.key === "Enter" || t.key === " ") && (t.preventDefault(), n()), t.key === "Escape" && (t.preventDefault(), r()));
}
var Hb = /* @__PURE__ */ de('<span role="button" tabindex="0" aria-labelledby="tooltip"><!></span>');
function Ra(t, e) {
  Te(e, !0);
  let n = v(e, "content", 3, ""), r = v(e, "side", 3, "top"), i = v(e, "hoverDelay", 3, 0), a = v(e, "transitionDuration", 3, 80), o = v(e, "disabled", 3, !1), u = v(e, "offset", 3, 8), l = v(e, "backgroundColor", 3, "#000"), c = v(e, "paddingY", 3, 6), d = v(e, "paddingX", 3, 10), m = v(e, "textColor", 3, "#fff");
  const f = `tt-${Math.random().toString(36).slice(2)}`;
  let g = /* @__PURE__ */ ve(null), h = /* @__PURE__ */ ve(null), p = /* @__PURE__ */ ve(null), b = /* @__PURE__ */ ve(null), y = /* @__PURE__ */ ve(!1), A = /* @__PURE__ */ ve(null), I = /* @__PURE__ */ ve(null);
  function _(C) {
    var O;
    if (!C || !C.trim().startsWith("var(")) return C;
    const F = C.match(/^var\(\s*([^,\s)]+)\s*(?:,\s*([^)]+)\s*)?\)$/);
    if (!F) return C;
    const U = F[1], z = (O = F[2]) == null ? void 0 : O.trim(), te = s(g) ? getComputedStyle(s(g)).getPropertyValue(U) : "", H = getComputedStyle(document.documentElement).getPropertyValue(U), D = (te || H).trim();
    return D || z || C;
  }
  function S() {
    !n() || o() || (s(A) && clearTimeout(s(A)), i() > 0 ? K(A, setTimeout(() => K(y, !0), i()), !0) : K(y, !0));
  }
  function E() {
    s(A) && clearTimeout(s(A)), K(y, !1);
  }
  function L() {
    S();
  }
  function T() {
    E();
  }
  function w() {
    S();
  }
  function k() {
    E();
  }
  function Z() {
    if (!s(h) || !s(b) || !s(g) || o()) return;
    const C = s(g).getBoundingClientRect(), F = s(b).getBoundingClientRect();
    let U = 0, z = 0;
    const te = u();
    switch (r()) {
      case "top":
        U = C.top - F.height - te, z = C.left + C.width / 2 - F.width / 2;
        break;
      case "bottom":
        U = C.bottom + te, z = C.left + C.width / 2 - F.width / 2;
        break;
      case "left":
        U = C.top + C.height / 2 - F.height / 2, z = C.left - F.width - te;
        break;
      case "right":
        U = C.top + C.height / 2 - F.height / 2, z = C.right + te;
        break;
    }
    s(h).style.top = `${U + window.scrollY}px`, s(h).style.left = `${z + window.scrollX}px`;
  }
  function G() {
    var C;
    (C = s(I)) == null || C.disconnect(), K(I, null), s(h) && s(h).parentNode && s(h).parentNode.removeChild(s(h)), K(h, null), K(b, null), K(p, null), s(A) && clearTimeout(s(A));
  }
  In(G), Le(() => {
    if (!(!s(y) || !n() || o())) {
      if (!s(h)) {
        K(h, document.createElement("div"), !0), s(h).style.position = "absolute", s(h).style.zIndex = "9999", s(h).style.pointerEvents = "none", s(h).style.opacity = "0", s(h).style.transition = `opacity ${a()}ms ease`, s(h).id = f, s(h).setAttribute("role", "tooltip"), document.body.appendChild(s(h)), K(p, s(h).attachShadow({ mode: "open" }), !0);
        const C = document.createElement("style"), F = _(l()), U = _(m());
        C.textContent = `
        .bubble {
          --pad-y: ${c()}px;
          --pad-x: ${d()}px;
          --radius: 4px;
          --bg: ${F};
          --fg: ${U};
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
      `, s(p).appendChild(C), K(b, document.createElement("div"), !0), s(p).appendChild(s(b)), K(
          I,
          new MutationObserver(() => {
            s(y) && Z();
          }),
          !0
        ), s(I).observe(document.body, { childList: !0, subtree: !0 });
      }
      s(b) && (s(b).className = `bubble ${r()}`, s(b).innerHTML = n()), s(h) && (s(h).style.opacity = "1", Z());
    }
  }), Le(() => {
    if (s(y) || !s(h))
      return;
    s(h).style.opacity = "0";
    const C = s(h), F = setTimeout(
      () => {
        C && C.parentNode && C.parentNode.removeChild(C), s(h) === C && G();
      },
      a()
    );
    return () => clearTimeout(F);
  });
  var q = Hb();
  q.__keydown = [Pb, n, S, E];
  var R = fe(q);
  Ae(R, () => e.children ?? me), Ce(q, (C) => K(g, C), () => s(g)), Oe(() => {
    gr(q, "aria-describedby", n() && !o() ? f : void 0), gr(q, "aria-haspopup", n() ? "true" : void 0), gr(q, "aria-expanded", n() ? s(y) ? "true" : "false" : void 0);
  }), Jn("mouseenter", q, L), Jn("mouseleave", q, T), Jn("focus", q, w), Jn("blur", q, k), x(t, q), xe();
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
var ma = {
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
}, fu = {
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
var Nb = (
  /** @class */
  function(t) {
    ze(e, t);
    function e(n) {
      var r = t.call(this, be(be({}, e.defaultAdapter), n)) || this;
      return r.currentCheckState = En.TRANSITION_STATE_INIT, r.currentAnimationClass = "", r.animEndLatchTimer = 0, r.enableAnimationEndHandler = !1, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return ma;
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
        return fu;
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
      this.currentCheckState = this.determineCheckState(), this.updateAriaChecked(), this.adapter.addClass(ma.UPGRADED);
    }, e.prototype.destroy = function() {
      clearTimeout(this.animEndLatchTimer);
    }, e.prototype.setDisabled = function(n) {
      this.adapter.setNativeControlDisabled(n), n ? this.adapter.addClass(ma.DISABLED) : this.adapter.removeClass(ma.DISABLED);
    }, e.prototype.handleAnimationEnd = function() {
      var n = this;
      this.enableAnimationEndHandler && (clearTimeout(this.animEndLatchTimer), this.animEndLatchTimer = setTimeout(function() {
        n.adapter.removeClass(n.currentAnimationClass), n.enableAnimationEndHandler = !1;
      }, fu.ANIM_END_LATCH_MS));
    }, e.prototype.handleChange = function() {
      this.transitionCheckState();
    }, e.prototype.transitionCheckState = function() {
      if (this.adapter.hasNativeControl()) {
        var n = this.currentCheckState, r = this.determineCheckState();
        if (n !== r) {
          this.updateAriaChecked();
          var i = En.TRANSITION_STATE_UNCHECKED, a = ma.SELECTED;
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
var mn = {
  CLOSED_CLASS: "mdc-linear-progress--closed",
  CLOSED_ANIMATION_OFF_CLASS: "mdc-linear-progress--closed-animation-off",
  INDETERMINATE_CLASS: "mdc-linear-progress--indeterminate",
  REVERSED_CLASS: "mdc-linear-progress--reversed",
  ANIMATION_READY_CLASS: "mdc-linear-progress--animation-ready"
}, Dn = {
  ARIA_HIDDEN: "aria-hidden",
  ARIA_VALUEMAX: "aria-valuemax",
  ARIA_VALUEMIN: "aria-valuemin",
  ARIA_VALUENOW: "aria-valuenow",
  BUFFER_BAR_SELECTOR: ".mdc-linear-progress__buffer-bar",
  FLEX_BASIS: "flex-basis",
  PRIMARY_BAR_SELECTOR: ".mdc-linear-progress__primary-bar"
}, ga = {
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
var Ub = (
  /** @class */
  function(t) {
    ze(e, t);
    function e(n) {
      var r = t.call(this, be(be({}, e.defaultAdapter), n)) || this;
      return r.observer = null, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return mn;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Dn;
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
      this.determinate = !this.adapter.hasClass(mn.INDETERMINATE_CLASS), this.adapter.addClass(mn.ANIMATION_READY_CLASS), this.progress = 0, this.buffer = 1, this.observer = this.adapter.attachResizeObserver(function(r) {
        var i, a;
        if (!n.determinate)
          try {
            for (var o = kt(r), u = o.next(); !u.done; u = o.next()) {
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
        this.adapter.removeClass(mn.INDETERMINATE_CLASS), this.adapter.setAttribute(Dn.ARIA_VALUENOW, this.progress.toString()), this.adapter.setAttribute(Dn.ARIA_VALUEMAX, "1"), this.adapter.setAttribute(Dn.ARIA_VALUEMIN, "0"), this.setPrimaryBarProgress(this.progress), this.setBufferBarProgress(this.buffer);
        return;
      }
      this.observer && this.calculateAndSetDimensions(this.adapter.getWidth()), this.adapter.addClass(mn.INDETERMINATE_CLASS), this.adapter.removeAttribute(Dn.ARIA_VALUENOW), this.adapter.removeAttribute(Dn.ARIA_VALUEMAX), this.adapter.removeAttribute(Dn.ARIA_VALUEMIN), this.setPrimaryBarProgress(1), this.setBufferBarProgress(1);
    }, e.prototype.isDeterminate = function() {
      return this.determinate;
    }, e.prototype.setProgress = function(n) {
      this.progress = n, this.determinate && (this.setPrimaryBarProgress(n), this.adapter.setAttribute(Dn.ARIA_VALUENOW, n.toString()));
    }, e.prototype.getProgress = function() {
      return this.progress;
    }, e.prototype.setBuffer = function(n) {
      this.buffer = n, this.determinate && this.setBufferBarProgress(n);
    }, e.prototype.getBuffer = function() {
      return this.buffer;
    }, e.prototype.open = function() {
      this.adapter.removeClass(mn.CLOSED_CLASS), this.adapter.removeClass(mn.CLOSED_ANIMATION_OFF_CLASS), this.adapter.removeAttribute(Dn.ARIA_HIDDEN);
    }, e.prototype.close = function() {
      this.adapter.addClass(mn.CLOSED_CLASS), this.adapter.setAttribute(Dn.ARIA_HIDDEN, "true");
    }, e.prototype.isClosed = function() {
      return this.adapter.hasClass(mn.CLOSED_CLASS);
    }, e.prototype.handleTransitionEnd = function() {
      this.adapter.hasClass(mn.CLOSED_CLASS) && this.adapter.addClass(mn.CLOSED_ANIMATION_OFF_CLASS);
    }, e.prototype.destroy = function() {
      t.prototype.destroy.call(this), this.observer && this.observer.disconnect();
    }, e.prototype.restartAnimation = function() {
      this.adapter.removeClass(mn.ANIMATION_READY_CLASS), this.adapter.forceLayout(), this.adapter.addClass(mn.ANIMATION_READY_CLASS);
    }, e.prototype.setPrimaryBarProgress = function(n) {
      var r = "scaleX(" + n + ")", i = typeof window < "u" ? np(window, "transform") : "transform";
      this.adapter.setPrimaryBarStyle(i, r);
    }, e.prototype.setBufferBarProgress = function(n) {
      var r = n * 100 + "%";
      this.adapter.setBufferBarStyle(Dn.FLEX_BASIS, r);
    }, e.prototype.calculateAndSetDimensions = function(n) {
      var r = n * ga.PRIMARY_HALF, i = n * ga.PRIMARY_FULL, a = n * ga.SECONDARY_QUARTER, o = n * ga.SECONDARY_HALF, u = n * ga.SECONDARY_FULL;
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
}, hu = {
  ARIA_SELECTED: "aria-selected",
  ARIA_SORT: "aria-sort"
}, Yr = {
  ARIA_SELECTED: hu.ARIA_SELECTED,
  ARIA_SORT: hu.ARIA_SORT
}, pn;
(function(t) {
  t.ASCENDING = "ascending", t.DESCENDING = "descending", t.NONE = "none", t.OTHER = "other";
})(pn || (pn = {}));
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
var Fb = (
  /** @class */
  function(t) {
    ze(e, t);
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
      return wc(this, void 0, void 0, function() {
        return Qs(this, function(n) {
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
        o !== i && (this.adapter.removeClassNameByHeaderCellIndex(o, cr.HEADER_CELL_SORTED), this.adapter.removeClassNameByHeaderCellIndex(o, cr.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(o, Yr.ARIA_SORT, pn.NONE), this.adapter.setSortStatusLabelByHeaderCellIndex(o, pn.NONE));
      this.adapter.setClassNameByHeaderCellIndex(i, cr.HEADER_CELL_SORTED);
      var u = this.adapter.getAttributeByHeaderCellIndex(i, Yr.ARIA_SORT), l = pn.NONE;
      u === pn.ASCENDING ? (this.adapter.setClassNameByHeaderCellIndex(i, cr.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(i, Yr.ARIA_SORT, pn.DESCENDING), l = pn.DESCENDING) : u === pn.DESCENDING ? (this.adapter.removeClassNameByHeaderCellIndex(i, cr.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(i, Yr.ARIA_SORT, pn.ASCENDING), l = pn.ASCENDING) : (this.adapter.setAttributeByHeaderCellIndex(i, Yr.ARIA_SORT, pn.ASCENDING), l = pn.ASCENDING), this.adapter.setSortStatusLabelByHeaderCellIndex(i, l), this.adapter.notifySortAction({
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
), kb = /* @__PURE__ */ de('<div class="mdc-data-table__progress-indicator"><div class="mdc-data-table__scrim"></div> <!></div>'), Bb = /* @__PURE__ */ de("<div><div><table><!></table></div> <!> <!></div>");
function Vb(t, e) {
  Te(e, !0);
  const n = () => kn(q, "$progressClosed", r), [r, i] = ir(), { closest: a } = ia;
  let o = v(e, "use", 19, () => []), u = v(e, "class", 3, ""), l = v(e, "stickyHeader", 3, !1), c = v(e, "sortable", 3, !1), d = v(e, "sort", 15, null), m = v(e, "sortDirection", 15, "ascending"), f = v(e, "sortAscendingAriaLabel", 3, "sorted, ascending"), g = v(e, "sortDescendingAriaLabel", 3, "sorted, descending"), h = v(e, "container$use", 19, () => []), p = v(e, "container$class", 3, ""), b = v(e, "table$use", 19, () => []), y = v(e, "table$class", 3, ""), A = /* @__PURE__ */ je(e, [
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
  ]), I, _ = /* @__PURE__ */ ve(void 0), S, E = /* @__PURE__ */ ve(void 0), L = /* @__PURE__ */ ve(void 0), T = Ie({}), w = /* @__PURE__ */ ve(Ie({ height: "auto", top: "initial" })), k = ye("SMUI:addLayoutListener"), Z, G = !1, q = Bt(!1), R = Bt(d());
  Le(() => {
    Nn(R, d());
  });
  let C = Bt(m());
  Le(() => {
    Nn(C, m());
  }), ce("SMUI:checkbox:context", "data-table"), ce("SMUI:linear-progress:context", "data-table"), ce("SMUI:linear-progress:closed", q), ce("SMUI:data-table:sortable", c()), ce("SMUI:data-table:sort", R), ce("SMUI:data-table:sortDirection", C), ce("SMUI:data-table:sortAscendingAriaLabel", f()), ce("SMUI:data-table:sortDescendingAriaLabel", g()), k && (Z = k(re));
  let F;
  Le(() => {
    e.progress && s(_) && F !== n() && (F = n(), n() ? s(_).hideProgress() : s(_).showProgress());
  }), ce("SMUI:checkbox:mount", () => {
    s(_) && G && s(_).layout();
  }), ce("SMUI:data-table:header:mount", (V) => {
    K(E, V, !0);
  }), ce("SMUI:data-table:header:unmount", () => {
    K(E, void 0);
  }), ce("SMUI:data-table:body:mount", (V) => {
    K(L, V, !0);
  }), ce("SMUI:data-table:body:unmount", () => {
    K(L, void 0);
  }), at(() => (K(
    _,
    new Fb({
      addClass: z,
      removeClass: te,
      getHeaderCellElements: () => {
        var V;
        return ((V = s(E)) == null ? void 0 : V.cells.map((Q) => Q.element)) ?? [];
      },
      getHeaderCellCount: () => {
        var V;
        return ((V = s(E)) == null ? void 0 : V.cells.length) ?? 0;
      },
      getAttributeByHeaderCellIndex: (V, Q) => {
        var ge;
        return ((ge = s(E)) == null ? void 0 : ge.orderedCells[V].getAttr(Q)) ?? null;
      },
      setAttributeByHeaderCellIndex: (V, Q, ge) => {
        var De;
        (De = s(E)) == null || De.orderedCells[V].addAttr(Q, ge);
      },
      setClassNameByHeaderCellIndex: (V, Q) => {
        var ge;
        (ge = s(E)) == null || ge.orderedCells[V].addClass(Q);
      },
      removeClassNameByHeaderCellIndex: (V, Q) => {
        var ge;
        (ge = s(E)) == null || ge.orderedCells[V].removeClass(Q);
      },
      notifySortAction: (V) => {
        d(V.columnId), m(V.sortValue), Ke(M(), "SMUIDataTableSorted", V);
      },
      getTableContainerHeight: () => S.getBoundingClientRect().height,
      getTableHeaderHeight: () => {
        const V = M().querySelector(".mdc-data-table__header-row");
        if (!V)
          throw new Error("MDCDataTable: Table header element not found.");
        return V.getBoundingClientRect().height;
      },
      setProgressIndicatorStyles: (V) => {
        K(w, V, !0);
      },
      addClassAtRowIndex: (V, Q) => {
        var ge;
        (ge = s(L)) == null || ge.orderedRows[V].addClass(Q);
      },
      getRowCount: () => {
        var V;
        return ((V = s(L)) == null ? void 0 : V.rows.length) ?? 0;
      },
      getRowElements: () => {
        var V;
        return ((V = s(L)) == null ? void 0 : V.rows.map((Q) => Q.element)) ?? [];
      },
      getRowIdAtIndex: (V) => {
        var Q;
        return ((Q = s(L)) == null ? void 0 : Q.orderedRows[V].rowId) ?? null;
      },
      getRowIndexByChildElement: (V) => {
        var Q;
        return ((Q = s(L)) == null ? void 0 : Q.orderedRows.map((ge) => ge.element).indexOf(a(V, ".mdc-data-table__row"))) ?? -1;
      },
      getSelectedRowCount: () => {
        var V;
        return ((V = s(L)) == null ? void 0 : V.rows.filter((Q) => Q.selected).length) ?? 0;
      },
      isCheckboxAtRowIndexChecked: (V) => {
        var ge;
        const Q = (ge = s(L)) == null ? void 0 : ge.orderedRows[V].checkbox;
        return Q ? Q.checked : !1;
      },
      isHeaderRowCheckboxChecked: () => {
        var Q;
        const V = (Q = s(E)) == null ? void 0 : Q.checkbox;
        return V ? V.checked : !1;
      },
      isRowsSelectable: () => !!M().querySelector(".mdc-data-table__row-checkbox") || !!M().querySelector(".mdc-data-table__header-row-checkbox"),
      notifyRowSelectionChanged: (V) => {
        var ge;
        const Q = (ge = s(L)) == null ? void 0 : ge.orderedRows[V.rowIndex];
        Q && Ke(M(), "SMUIDataTableSelectionChanged", {
          row: Q.element,
          rowId: Q.rowId,
          rowIndex: V.rowIndex,
          selected: V.selected
        });
      },
      notifySelectedAll: () => {
        H(!1), Ke(M(), "SMUIDataTableSelectedAll");
      },
      notifyUnselectedAll: () => {
        H(!1), Ke(M(), "SMUIDataTableUnselectedAll");
      },
      notifyRowClick: (V) => Ke(M(), "SMUIDataTableClickRow", V),
      registerHeaderRowCheckbox: () => {
      },
      registerRowCheckboxes: () => {
      },
      removeClassAtRowIndex: (V, Q) => {
        var ge;
        (ge = s(L)) == null || ge.orderedRows[V].removeClass(Q);
      },
      setAttributeAtRowIndex: (V, Q, ge) => {
        var De;
        (De = s(L)) == null || De.orderedRows[V].addAttr(Q, ge);
      },
      setHeaderRowCheckboxChecked: (V) => {
        var ge;
        const Q = (ge = s(E)) == null ? void 0 : ge.checkbox;
        Q && (Q.checked = V);
      },
      setHeaderRowCheckboxIndeterminate: H,
      setRowCheckboxCheckedAtIndex: (V, Q) => {
        var De;
        const ge = (De = s(L)) == null ? void 0 : De.orderedRows[V].checkbox;
        ge && (ge.checked = Q);
      },
      setSortStatusLabelByHeaderCellIndex: (V, Q) => {
      }
    }),
    !0
  ), s(_).init(), s(_).layout(), G = !0, () => {
    var V;
    (V = s(_)) == null || V.destroy();
  })), In(() => {
    Z && Z();
  });
  function U(V) {
    s(_) && s(_).handleRowCheckboxChange(V);
  }
  function z(V) {
    T[V] || (T[V] = !0);
  }
  function te(V) {
    (!(V in T) || T[V]) && (T[V] = !1);
  }
  function H(V) {
    var ge;
    const Q = (ge = s(E)) == null ? void 0 : ge.checkbox;
    Q && (Q.indeterminate = V);
  }
  function D(V) {
    if (!s(_) || !V.detail.target)
      return;
    const Q = a(V.detail.target, ".mdc-data-table__header-cell--with-sort");
    Q && le(Q);
  }
  function O(V) {
    if (!s(_) || !V.detail.target)
      return;
    const Q = a(V.detail.target, ".mdc-data-table__row");
    Q && s(_) && s(_).handleRowClick({ rowId: V.detail.rowId, row: Q });
  }
  function le(V) {
    var Be, ut;
    const Q = ((Be = s(E)) == null ? void 0 : Be.orderedCells) ?? [], ge = Q.map((mt) => mt.element).indexOf(V);
    if (ge === -1)
      return;
    const De = Q[ge].columnId ?? null;
    (ut = s(_)) == null || ut.handleSortAction({ columnId: De, columnIndex: ge, headerCell: V });
  }
  function re() {
    var V;
    return (V = s(_)) == null ? void 0 : V.layout();
  }
  function M() {
    return I;
  }
  var B = { layout: re, getElement: M }, P = Bb(), J = (V) => {
    var Q;
    s(_) && s(_).handleHeaderRowCheckboxChange(), (Q = e.onSMUIDataTableHeaderCheckboxChange) == null || Q.call(e, V);
  }, $ = (V) => {
    var Q;
    D(V), (Q = e.onSMUIDataTableHeaderClick) == null || Q.call(e, V);
  }, se = (V) => {
    var Q;
    O(V), (Q = e.onSMUIDataTableRowClick) == null || Q.call(e, V);
  }, Ee = (V) => {
    var Q;
    U(V), (Q = e.onSMUIDataTableBodyCheckboxChange) == null || Q.call(e, V);
  };
  Ne(
    P,
    (V, Q) => ({
      class: V,
      ...Q,
      onSMUIDataTableHeaderCheckboxChange: J,
      onSMUIDataTableHeaderClick: $,
      onSMUIDataTableRowClick: se,
      onSMUIDataTableBodyCheckboxChange: Ee
    }),
    [
      () => Me({
        "mdc-data-table": !0,
        "mdc-data-table--sticky-header": l(),
        ...T,
        [u()]: !0
      }),
      () => Bn(A, ["container$", "table$"])
    ]
  );
  var ee = fe(P);
  Ne(ee, (V, Q) => ({ class: V, ...Q }), [
    () => Me({
      "mdc-data-table__table-container": !0,
      [p()]: !0
    }),
    () => it(A, "container$")
  ]);
  var ae = fe(ee);
  Ne(ae, (V, Q) => ({ class: V, ...Q }), [
    () => Me({ "mdc-data-table__table": !0, [y()]: !0 }),
    () => it(A, "table$")
  ]);
  var we = fe(ae);
  Ae(we, () => e.children ?? me), Pe(ae, (V, Q) => Y == null ? void 0 : Y(V, Q), b), Ce(ee, (V) => S = V, () => S), Pe(ee, (V, Q) => Y == null ? void 0 : Y(V, Q), h);
  var Re = _e(ee, 2);
  {
    var He = (V) => {
      var Q = kb(), ge = _e(fe(Q), 2);
      Ae(ge, () => e.progress ?? me), Oe((De) => bt(Q, De), [
        () => Object.entries(s(w)).map(([De, Be]) => `${De}: ${Be};`).join(" ")
      ]), x(V, Q);
    };
    oe(Re, (V) => {
      e.progress && V(He);
    });
  }
  var Ge = _e(Re, 2);
  Ae(Ge, () => e.paginate ?? me), Ce(P, (V) => I = V, () => I), Pe(P, (V, Q) => Y == null ? void 0 : Y(V, Q), o), x(t, P);
  var ke = xe(B);
  return i(), ke;
}
var Gb = /* @__PURE__ */ de("<thead><!></thead>");
function jb(t, e) {
  Te(e, !0);
  let n = v(e, "use", 19, () => []), r = /* @__PURE__ */ je(e, ["$$slots", "$$events", "$$legacy", "use", "children"]), i, a = /* @__PURE__ */ ve(void 0), o = [];
  const u = /* @__PURE__ */ new WeakMap();
  ce("SMUI:data-table:row:header", !0);
  const l = ye("SMUI:checkbox:mount");
  ce("SMUI:checkbox:mount", (y) => {
    K(a, y, !0), l && l(y);
  });
  const c = ye("SMUI:checkbox:unmount");
  ce("SMUI:checkbox:unmount", (y) => {
    K(a, void 0), c && c(y);
  }), ce("SMUI:data-table:cell:mount", (y) => {
    o.push(y), u.set(y.element, y);
  }), ce("SMUI:data-table:cell:unmount", (y) => {
    const A = o.findIndex((I) => I === y);
    A !== -1 && o.splice(A, 1), u.delete(y.element);
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
  var h = { getElement: g }, p = Gb();
  Ne(p, () => ({ ...r }));
  var b = fe(p);
  return Ae(b, () => e.children ?? me), Ce(p, (y) => i = y, () => i), Pe(p, (y, A) => Y == null ? void 0 : Y(y, A), n), x(t, p), xe(h);
}
var Wb = /* @__PURE__ */ de("<tbody><!></tbody>");
function qb(t, e) {
  Te(e, !0);
  let n = v(e, "use", 19, () => []), r = v(e, "class", 3, ""), i = /* @__PURE__ */ je(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "children"
  ]), a, o = [];
  const u = /* @__PURE__ */ new WeakMap();
  ce("SMUI:data-table:row:header", !1), ce("SMUI:data-table:row:mount", (p) => {
    o.push(p), u.set(p.element, p);
  }), ce("SMUI:data-table:row:unmount", (p) => {
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
  var f = { getElement: m }, g = Wb();
  Ne(g, (p) => ({ class: p, ...i }), [
    () => Me({ "mdc-data-table__content": !0, [r()]: !0 })
  ]);
  var h = fe(g);
  return Ae(h, () => e.children ?? me), Ce(g, (p) => a = p, () => a), Pe(g, (p, b) => Y == null ? void 0 : Y(p, b), n), x(t, g), xe(f);
}
let zb = 0;
var Kb = /* @__PURE__ */ de("<tr><!></tr>");
function Ja(t, e) {
  Te(e, !0);
  let n = v(e, "use", 19, () => []), r = v(e, "class", 3, ""), i = v(e, "rowId", 19, () => "SMUI-data-table-row-" + zb++), a = /* @__PURE__ */ je(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "rowId",
    "children"
  ]), o, u = /* @__PURE__ */ ve(void 0), l = Ie({}), c = Ie({}), d = ye("SMUI:data-table:row:header");
  const m = ye("SMUI:checkbox:mount");
  ce("SMUI:checkbox:mount", (k) => {
    K(u, k, !0), m && m(k);
  });
  const f = ye("SMUI:checkbox:unmount");
  ce("SMUI:checkbox:unmount", (k) => {
    K(u, void 0), f && f(k);
  });
  const g = ye("SMUI:data-table:row:mount"), h = ye("SMUI:data-table:row:unmount");
  at(() => {
    const k = d ? {
      _smui_data_table_row_accessor: !1,
      get element() {
        return S();
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
      addAttr: A
    } : {
      _smui_data_table_row_accessor: !0,
      get element() {
        return S();
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
      addAttr: A
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
    return k in c ? c[k] ?? null : S().getAttribute(k);
  }
  function A(k, Z) {
    c[k] !== Z && (c[k] = Z);
  }
  function I(k) {
    Ke(S(), "SMUIDataTableHeaderClick", k);
  }
  function _(k) {
    Ke(S(), "SMUIDataTableRowClick", { rowId: i(), target: k.target });
  }
  function S() {
    return o;
  }
  var E = { getElement: S }, L = Kb(), T = (k) => {
    var Z;
    d ? I(k) : _(k), (Z = e.onclick) == null || Z.call(e, k);
  };
  Ne(
    L,
    (k) => ({
      class: k,
      "aria-selected": s(u) ? s(u).checked ? "true" : "false" : void 0,
      ...c,
      ...a,
      onclick: T
    }),
    [
      () => Me({
        "mdc-data-table__header-row": d,
        "mdc-data-table__row": !d,
        "mdc-data-table__row--selected": !d && s(u) && s(u).checked,
        ...l,
        [r()]: !0
      })
    ]
  );
  var w = fe(L);
  return Ae(w, () => e.children ?? me), Ce(L, (k) => o = k, () => o), Pe(L, (k, Z) => Y == null ? void 0 : Y(k, Z), n), x(t, L), xe(E);
}
let Xb = 0;
var Yb = /* @__PURE__ */ de('<div class="mdc-data-table__header-cell-wrapper"><!> <div class="mdc-data-table__sort-status-label" aria-hidden="true"> </div></div>'), Zb = /* @__PURE__ */ de("<th><!></th>"), Qb = /* @__PURE__ */ de("<td><!></td>");
function pa(t, e) {
  Te(e, !0);
  const n = () => kn(y, "$sort", i), r = () => kn(A, "$sortDirection", i), [i, a] = ir();
  let o = ye("SMUI:data-table:row:header"), u = v(e, "use", 19, () => []), l = v(e, "class", 3, ""), c = v(e, "numeric", 3, !1), d = v(e, "checkbox", 3, !1), m = v(e, "columnId", 19, () => o ? "SMUI-data-table-column-" + Xb++ : "SMUI-data-table-unused"), f = v(e, "sortable", 19, () => ye("SMUI:data-table:sortable")), g = /* @__PURE__ */ je(e, [
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
  ]), h, p = Ie({}), b = Ie({}), y = ye("SMUI:data-table:sort"), A = ye("SMUI:data-table:sortDirection"), I = ye("SMUI:data-table:sortAscendingAriaLabel"), _ = ye("SMUI:data-table:sortDescendingAriaLabel");
  f() && (ce("SMUI:label:context", "data-table:sortable-header-cell"), ce("SMUI:icon-button:context", "data-table:sortable-header-cell"), ce("SMUI:icon-button:aria-describedby", m() + "-status-label"));
  const S = ye("SMUI:data-table:cell:mount"), E = ye("SMUI:data-table:cell:unmount");
  at(() => {
    const H = o ? {
      _smui_data_table_header_cell_accessor: !0,
      get element() {
        return q();
      },
      get columnId() {
        return m();
      },
      addClass: L,
      removeClass: T,
      getAttr: w,
      addAttr: k
    } : {
      _smui_data_table_header_cell_accessor: !1,
      get element() {
        return q();
      },
      get columnId() {
      },
      addClass: L,
      removeClass: T,
      getAttr: w,
      addAttr: k
    };
    return S && S(H), () => {
      E && E(H);
    };
  });
  function L(H) {
    p[H] || (p[H] = !0);
  }
  function T(H) {
    (!(H in p) || p[H]) && (p[H] = !1);
  }
  function w(H) {
    return H in b ? b[H] ?? null : q().getAttribute(H);
  }
  function k(H, D) {
    b[H] !== D && (b[H] = D);
  }
  function Z(H) {
    Ke(q(), "SMUIDataTableHeaderCheckboxChange", H);
  }
  function G(H) {
    Ke(q(), "SMUIDataTableBodyCheckboxChange", H);
  }
  function q() {
    return h;
  }
  var R = { getElement: q }, C = ne(), F = X(C);
  {
    var U = (H) => {
      var D = Zb(), O = (B) => {
        var P;
        d() && Z(B), (P = e.onchange) == null || P.call(e, B);
      };
      Ne(
        D,
        (B) => ({
          class: B,
          role: "columnheader",
          scope: "col",
          "data-column-id": m(),
          "aria-sort": f() ? n() === m() ? r() : "none" : void 0,
          ...b,
          ...g,
          onchange: O
        }),
        [
          () => Me({
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
      var le = fe(D);
      {
        var re = (B) => {
          var P = Yb(), J = fe(P);
          Ae(J, () => e.children ?? me);
          var $ = _e(J, 2), se = fe($);
          Oe(() => {
            gr($, "id", `${m() ?? ""}-status-label`), $e(se, n() === m() ? r() === "ascending" ? I : _ : "");
          }), x(B, P);
        }, M = (B) => {
          var P = ne(), J = X(P);
          Ae(J, () => e.children ?? me), x(B, P);
        };
        oe(le, (B) => {
          f() ? B(re) : B(M, !1);
        });
      }
      Ce(D, (B) => h = B, () => h), Pe(D, (B, P) => Y == null ? void 0 : Y(B, P), u), x(H, D);
    }, z = (H) => {
      var D = Qb(), O = (re) => {
        var M;
        d() && G(re), (M = e.onchange) == null || M.call(e, re);
      };
      Ne(
        D,
        (re) => ({
          class: re,
          ...b,
          ...g,
          onchange: O
        }),
        [
          () => Me({
            "mdc-data-table__cell": !0,
            "mdc-data-table__cell--numeric": c(),
            "mdc-data-table__cell--checkbox": d(),
            ...p,
            [l()]: !0
          })
        ]
      );
      var le = fe(D);
      Ae(le, () => e.children ?? me), Ce(D, (re) => h = re, () => h), Pe(D, (re, M) => Y == null ? void 0 : Y(re, M), u), x(H, D);
    };
    oe(F, (H) => {
      o ? H(U) : H(z, !1);
    });
  }
  x(t, C);
  var te = xe(R);
  return a(), te;
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
var Jb = {
  ROOT: "mdc-form-field"
}, $b = {
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
var e_ = (
  /** @class */
  function(t) {
    ze(e, t);
    function e(n) {
      var r = t.call(this, be(be({}, e.defaultAdapter), n)) || this;
      return r.click = function() {
        r.handleClick();
      }, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Jb;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return $b;
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
let t_ = 0;
var n_ = /* @__PURE__ */ de("<div><!> <label><!></label></div>");
function r_(t, e) {
  Te(e, !0);
  let n = v(e, "use", 19, () => []), r = v(e, "class", 3, ""), i = v(e, "align", 3, "start"), a = v(e, "noWrap", 3, !1), o = v(e, "inputId", 19, () => "SMUI-form-field-" + t_++), u = v(e, "label$use", 19, () => []), l = /* @__PURE__ */ je(e, [
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
  ]), c, d = /* @__PURE__ */ ve(void 0), m = new vi(), f, g = /* @__PURE__ */ ve(void 0);
  ce("SMUI:generic:input:props", { id: o() }), ce("SMUI:generic:input:mount", (_) => {
    K(g, _, !0);
  }), ce("SMUI:generic:input:unmount", () => {
    K(g, void 0);
  }), at(() => (K(
    d,
    new e_({
      activateInputRipple: () => {
        s(g) && s(g).activateRipple();
      },
      deactivateInputRipple: () => {
        s(g) && s(g).deactivateRipple();
      },
      deregisterInteractionHandler: (_, S) => m.off(f, _, S),
      registerInteractionHandler: (_, S) => m.on(f, _, S)
    }),
    !0
  ), s(d).init(), () => {
    var _;
    (_ = s(d)) == null || _.destroy(), m.clear();
  }));
  function h() {
    return c;
  }
  var p = { getElement: h }, b = n_();
  Ne(b, (_, S) => ({ class: _, ...S }), [
    () => Me({
      "mdc-form-field": !0,
      "mdc-form-field--align-end": i() === "end",
      "mdc-form-field--nowrap": a(),
      [r()]: !0
    }),
    () => Bn(l, ["label$"])
  ]);
  var y = fe(b);
  Ae(y, () => e.children ?? me);
  var A = _e(y, 2);
  Ne(A, (_) => ({ for: o(), ..._ }), [() => it(l, "label$")]);
  var I = fe(A);
  return Ae(I, () => e.label ?? me), Ce(A, (_) => f = _, () => f), Pe(A, (_, S) => Y == null ? void 0 : Y(_, S), u), Ce(b, (_) => c = _, () => c), Pe(b, (_, S) => Y == null ? void 0 : Y(_, S), n), x(t, b), xe(p);
}
var i_ = (t, e) => {
  var n;
  t.stopPropagation(), (n = e.onClick) == null || n.call(e, t);
}, a_ = /* @__PURE__ */ de('<button class="icon-button svelte-jv2py4"><!></button>');
function o_(t, e) {
  Te(e, !0);
  let n = v(e, "tooltipSide", 3, "top"), r = v(e, "showDelay", 3, 1e3), i = v(e, "fillColor", 3, "var(--mdc-theme-primary)"), a = v(e, "size", 3, "25px"), o = /* @__PURE__ */ he(() => `fill: ${i()}; margin: 0; width: ${a()}; height: ${a()};`);
  Ra(t, {
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
      var c = a_();
      c.__click = [i_, e];
      var d = fe(c);
      {
        var m = (g) => {
          cd(g, {
            get svgStyles() {
              return s(o);
            }
          });
        }, f = (g) => {
          var h = ne(), p = X(h);
          {
            var b = (A) => {
              mb(A, {
                get svgStyles() {
                  return s(o);
                }
              });
            }, y = (A) => {
              var I = ne(), _ = X(I);
              {
                var S = (L) => {
                  ud(L, {
                    get svgStyles() {
                      return s(o);
                    }
                  });
                }, E = (L) => {
                  var T = ne(), w = X(T);
                  {
                    var k = (G) => {
                      hb(G, {
                        get svgStyles() {
                          return s(o);
                        }
                      });
                    }, Z = (G) => {
                      var q = ne(), R = X(q);
                      {
                        var C = (U) => {
                          _b(U, {
                            get svgStyles() {
                              return s(o);
                            }
                          });
                        }, F = (U) => {
                          var z = ne(), te = X(z);
                          {
                            var H = (O) => {
                              Ib(O, {
                                get svgStyles() {
                                  return s(o);
                                }
                              });
                            }, D = (O) => {
                              var le = ne(), re = X(le);
                              {
                                var M = (P) => {
                                  Sb(P, {
                                    get svgStyles() {
                                      return s(o);
                                    }
                                  });
                                }, B = (P) => {
                                  var J = ne(), $ = X(J);
                                  {
                                    var se = (ee) => {
                                      Cb(ee, {
                                        get svgStyles() {
                                          return s(o);
                                        }
                                      });
                                    }, Ee = (ee) => {
                                      var ae = vt();
                                      Oe(() => $e(ae, `Unsupported supported type: ${e.type ?? ""}`)), x(ee, ae);
                                    };
                                    oe(
                                      $,
                                      (ee) => {
                                        e.type === "star" ? ee(se) : ee(Ee, !1);
                                      },
                                      !0
                                    );
                                  }
                                  x(P, J);
                                };
                                oe(
                                  re,
                                  (P) => {
                                    e.type === "close" ? P(M) : P(B, !1);
                                  },
                                  !0
                                );
                              }
                              x(O, le);
                            };
                            oe(
                              te,
                              (O) => {
                                e.type === "link-off" ? O(H) : O(D, !1);
                              },
                              !0
                            );
                          }
                          x(U, z);
                        };
                        oe(
                          R,
                          (U) => {
                            e.type === "wand-stars" ? U(C) : U(F, !1);
                          },
                          !0
                        );
                      }
                      x(G, q);
                    };
                    oe(
                      w,
                      (G) => {
                        e.type === "visibility" ? G(k) : G(Z, !1);
                      },
                      !0
                    );
                  }
                  x(L, T);
                };
                oe(
                  _,
                  (L) => {
                    e.type === "edit" ? L(S) : L(E, !1);
                  },
                  !0
                );
              }
              x(A, I);
            };
            oe(
              p,
              (A) => {
                e.type === "duplicate" ? A(b) : A(y, !1);
              },
              !0
            );
          }
          x(g, h);
        };
        oe(d, (g) => {
          e.type === "delete" ? g(m) : g(f, !1);
        });
      }
      Oe(() => gr(c, "aria-label", e.tooltip)), x(u, c);
    },
    $$slots: { default: !0 }
  }), xe();
}
yn(["click"]);
function Ds(t, e, n) {
  return e in t ? Object.defineProperty(t, e, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = n, t;
}
var s_ = Object.freeze({
  // This flag exists as a workaround for issue 454 (basically a browser bug) - seems like these rect values take time to update when in grid layout. Setting it to true can cause strange behaviour in the REPL for non-grid zones, see issue 470
  USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT: "USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT"
});
Ds({}, s_.USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT, !1);
var $a, vu = {
  DND_ZONE_ACTIVE: "dnd-zone-active",
  DND_ZONE_DRAG_DISABLED: "dnd-zone-drag-disabled"
};
$a = {}, Ds($a, vu.DND_ZONE_ACTIVE, "Tab to one the items and press space-bar or enter to start dragging it"), Ds($a, vu.DND_ZONE_DRAG_DISABLED, "This is a disabled drag and drop list");
function l_(t) {
  return t * t * t;
}
function dd(t) {
  const e = t - 1;
  return e * e * e + 1;
}
function u_(t, { from: e, to: n }, r = {}) {
  var { delay: i = 0, duration: a = (E) => Math.sqrt(E) * 120, easing: o = dd } = r, u = getComputedStyle(t), l = u.transform === "none" ? "" : u.transform, [c, d] = u.transformOrigin.split(" ").map(parseFloat);
  c /= t.clientWidth, d /= t.clientHeight;
  var m = c_(t), f = t.clientWidth / n.width / m, g = t.clientHeight / n.height / m, h = e.left + e.width * c, p = e.top + e.height * d, b = n.left + n.width * c, y = n.top + n.height * d, A = (h - b) * f, I = (p - y) * g, _ = e.width / n.width, S = e.height / n.height;
  return {
    delay: i,
    duration: typeof a == "function" ? a(Math.sqrt(A * A + I * I)) : a,
    easing: o,
    css: (E, L) => {
      var T = L * A, w = L * I, k = E + L * _, Z = E + L * S;
      return `transform: ${l} translate(${T}px, ${w}px) scale(${k}, ${Z});`;
    }
  };
}
function c_(t) {
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
function d_(t) {
  const e = t - 1;
  return e * e * e + 1;
}
function mu(t) {
  const e = typeof t == "string" && t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
  return e ? [parseFloat(e[1]), e[2] || "px"] : [
    /** @type {number} */
    t,
    "px"
  ];
}
function Eo(t, { delay: e = 0, duration: n = 400, easing: r = d_, x: i = 0, y: a = 0, opacity: o = 0 } = {}) {
  const u = getComputedStyle(t), l = +u.opacity, c = u.transform === "none" ? "" : u.transform, d = l * (1 - o), [m, f] = mu(i), [g, h] = mu(a);
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
function f_(t, e) {
  var n;
  (n = e()) == null || n();
}
var h_ = /* @__PURE__ */ de('<div class="detail svelte-4xu36c"> </div>'), v_ = /* @__PURE__ */ de('<div class="toast-card svelte-4xu36c"><div class="icon svelte-4xu36c"><!></div> <div class="content svelte-4xu36c"><div class="summary svelte-4xu36c"> </div> <!></div> <button class="close svelte-4xu36c"><!></button></div>');
function m_(t, e) {
  Te(e, !0);
  let n = v(e, "onClose", 3, () => {
  });
  const r = {
    success: "check_circle",
    error: "error",
    info: "info",
    warn: "warning"
  }, i = {
    success: "#4CAF50",
    error: "#F44336",
    info: "#2196F3",
    warn: "#FF9800"
  };
  var a = v_(), o = fe(a), u = fe(o);
  Ls(u, {
    class: "material-icons",
    children: (p, b) => {
      var y = vt();
      Oe(() => $e(y, r[e.type])), x(p, y);
    },
    $$slots: { default: !0 }
  });
  var l = _e(o, 2), c = fe(l), d = fe(c), m = _e(c, 2);
  {
    var f = (p) => {
      var b = h_(), y = fe(b);
      Oe(() => $e(y, e.detail)), x(p, b);
    };
    oe(m, (p) => {
      e.detail && p(f);
    });
  }
  var g = _e(l, 2);
  g.__click = [f_, n];
  var h = fe(g);
  Ls(h, {
    class: "material-icons",
    children: (p, b) => {
      var y = vt("close");
      x(p, y);
    },
    $$slots: { default: !0 }
  }), Oe(() => {
    bt(a, `--color:${i[e.type] ?? ""}`), $e(d, e.summary);
  }), mo(1, a, () => Eo, () => ({ x: 0, y: 30, duration: 150, easing: l_ })), mo(2, a, () => Eo, () => ({ x: 50, y: 0, duration: 150, easing: dd })), x(t, a), xe();
}
yn(["click"]);
const g_ = 4e3;
function p_() {
  let t = Ie({ items: [] }), e = 0;
  const n = (i) => {
    t.items = t.items.filter((a) => a.id !== i);
  }, r = (i, a, o, u = g_) => {
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
const Aa = p_();
var b_ = /* @__PURE__ */ de("<div><!></div>"), __ = /* @__PURE__ */ de('<div class="toast-host svelte-11vwiay"></div>');
function y_(t, e) {
  Te(e, !1);
  const n = Aa.toasts;
  _h();
  var r = __();
  Qn(r, 13, () => n.items, (i) => i.id, (i, a) => {
    var o = b_(), u = fe(o);
    m_(u, {
      get summary() {
        return s(a).summary;
      },
      get detail() {
        return s(a).detail;
      },
      get type() {
        return s(a).type;
      },
      onClose: () => Aa.remove(s(a).id)
    }), ph(o, () => u_, null), x(i, o);
  }), x(t, r), xe();
}
var I_ = (t, e) => {
  t.stopPropagation(), e.onOpen();
}, E_ = (t, e) => {
  t.stopPropagation(), e.onRemove();
}, S_ = /* @__PURE__ */ de('<button type="button" style="all: unset; display: flex; align-items: center; justify-content: center;" class="svelte-1mybgc7"><!></button>'), A_ = /* @__PURE__ */ de('<span class="filter-badge__seperator svelte-1mybgc7">|</span> <span class="filter-badge__value svelte-1mybgc7"> </span> <span class="filter-badge__arrow-down"><!></span>', 1), C_ = /* @__PURE__ */ de('<button type="button"><div class="filter-badge__icon svelte-1mybgc7"><!></div> <span class="filter-badge__label svelte-1mybgc7"> </span> <!></button>');
function T_(t, e) {
  Te(e, !0);
  let n = /* @__PURE__ */ he(() => !!e.value);
  var r = C_();
  r.__click = [I_, e];
  var i = fe(r), a = fe(i);
  {
    var o = (f) => {
      Ra(f, {
        content: "Remove Filter",
        hoverDelay: 500,
        side: "top",
        children: (g, h) => {
          var p = S_();
          p.__click = [E_, e];
          var b = fe(p);
          il(b, {
            svgStyles: "fill: grey; height: filt-content; width: fit-content;"
          }), x(g, p);
        },
        $$slots: { default: !0 }
      });
    }, u = (f) => {
      Ra(f, {
        content: "Add Filter",
        hoverDelay: 501,
        side: "top",
        children: (g, h) => {
          xb(g, {
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
  var l = _e(i, 2), c = fe(l), d = _e(l, 2);
  {
    var m = (f) => {
      var g = A_(), h = _e(X(g), 2), p = fe(h), b = _e(h, 2), y = fe(b);
      pb(y, { svgStyles: "fill: gray;" }), Oe(() => $e(p, e.value)), x(f, g);
    };
    oe(d, (f) => {
      s(n) && f(m);
    });
  }
  Oe(() => {
    Xs(r, 1, `filter-badge ${s(n) ? "filter-badge--active" : "filter-badge--inactive"}`, "svelte-1mybgc7"), $e(c, e.label);
  }), x(t, r), xe();
}
yn(["click"]);
var x_ = /* @__PURE__ */ de('<div><input/> <div class="mdc-checkbox__background"><svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24"><path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"></path></svg> <div class="mdc-checkbox__mixedmark"></div></div> <div class="mdc-checkbox__ripple"></div></div>');
function w_(t, e) {
  Te(e, !0);
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
  ]), y, A = /* @__PURE__ */ ve(void 0), I = /* @__PURE__ */ ve(void 0), _ = Ie({}), S = Ie({}), E = Ie({}), L = /* @__PURE__ */ ve(!1), T = Ie(ye("SMUI:generic:input:props") ?? {}), w = /* @__PURE__ */ ve(Ie(r(d()) ? r(m()) ? !1 : !!m() : d().findIndex((ee) => ee === f()) !== -1)), k = ye("SMUI:checkbox:context"), Z = ye("SMUI:data-table:row:header"), G = m(), q = r(d()) ? [] : [...d()], R = s(w);
  Le(() => {
    let ee = !1;
    if (!r(d()))
      if (R !== s(w)) {
        const ae = d().findIndex((we) => we === f());
        s(w) && ae === -1 ? d().push(f()) : !s(w) && ae !== -1 && d().splice(ae, 1), ee = !0;
      } else {
        const ae = q.findIndex((Re) => Re === f()), we = d().findIndex((Re) => Re === f());
        ae > -1 && we === -1 ? (K(w, !1), ee = !0) : we > -1 && ae === -1 && (K(w, !0), ee = !0);
      }
    r(m()) ? R !== s(w) && (ee = !0) : (m() !== (c() ? null : s(w)) || s(w) !== R) && (m() === G && s(w) !== R ? (m(s(w)), r(c()) || c(!1)) : K(w, !!m()), ee = !0), s(I) && (r(c()) ? s(I).indeterminate && (s(I).indeterminate = !1, ee = !0) : !c() && s(I).indeterminate ? (s(I).indeterminate = !1, ee = !0) : c() && !s(I).indeterminate && (s(I).indeterminate = !0, K(w, !1), ee = !0)), G = m(), q = r(d()) ? [] : [...d()], R = s(w), ee && s(A) && s(A).handleChange();
  });
  const C = ye("SMUI:generic:input:mount"), F = ye("SMUI:generic:input:unmount"), U = ye("SMUI:checkbox:mount"), z = ye("SMUI:checkbox:unmount");
  at(() => {
    if (s(I) == null)
      throw new Error("Checkbox is not defined.");
    s(I).indeterminate = !r(c()) && c(), K(
      A,
      new Nb({
        addClass: te,
        forceLayout: () => M().offsetWidth,
        hasNativeControl: () => !0,
        isAttachedToDOM: () => !!M().parentNode,
        isChecked: () => s(w),
        isIndeterminate: () => r(c()) ? !1 : c(),
        removeClass: H,
        removeNativeControlAttr: le,
        setNativeControlAttr: O,
        setNativeControlDisabled: (ae) => u(ae)
      }),
      !0
    );
    const ee = {
      _smui_checkbox_accessor: !0,
      get element() {
        return M();
      },
      get checked() {
        return s(w);
      },
      set checked(ae) {
        s(w) !== ae && K(w, ae, !0);
      },
      get indeterminate() {
        return r(c()) ? !1 : c();
      },
      set indeterminate(ae) {
        c(ae);
      },
      activateRipple() {
        u() || K(L, !0);
      },
      deactivateRipple() {
        K(L, !1);
      }
    };
    return C && C(ee), U && U(ee), s(A).init(), () => {
      var ae;
      F && F(ee), z && z(ee), (ae = s(A)) == null || ae.destroy();
    };
  });
  function te(ee) {
    _[ee] || (_[ee] = !0);
  }
  function H(ee) {
    (!(ee in _) || _[ee]) && (_[ee] = !1);
  }
  function D(ee, ae) {
    S[ee] != ae && (ae === "" || ae == null ? delete S[ee] : S[ee] = ae);
  }
  function O(ee, ae) {
    E[ee] !== ae && (E[ee] = ae);
  }
  function le(ee) {
    (!(ee in E) || E[ee] != null) && (E[ee] = void 0);
  }
  function re() {
    return T && T.id;
  }
  function M() {
    return y;
  }
  var B = { getId: re, getElement: M }, P = x_(), J = (ee) => {
    var ae;
    s(A) && s(A).handleAnimationEnd(), (ae = e.onanimationend) == null || ae.call(e, ee);
  };
  Ne(P, (ee, ae, we) => ({ class: ee, style: ae, ...we, onanimationend: J }), [
    () => Me({
      "mdc-checkbox": !0,
      "mdc-checkbox--disabled": u(),
      "mdc-checkbox--touch": l(),
      "mdc-data-table__header-row-checkbox": k === "data-table" && Z,
      "mdc-data-table__row-checkbox": k === "data-table" && !Z,
      ..._,
      [a()]: !0
    }),
    () => Object.entries(S).map(([ee, ae]) => `${ee}: ${ae};`).concat([o()]).join(" "),
    () => Bn(b, ["input$"])
  ]);
  var $ = fe(P), se = (ee) => {
    var ae;
    Ke(M(), "blur", ee), (ae = e.input$onblur) == null || ae.call(e, ee);
  }, Ee = (ee) => {
    var ae;
    Ke(M(), "focus", ee), (ae = e.input$onfocus) == null || ae.call(e, ee);
  };
  return Ne(
    $,
    (ee, ae, we, Re) => ({
      class: ee,
      type: "checkbox",
      ...T,
      disabled: u(),
      value: ae,
      "data-indeterminate": we,
      ...E,
      ...Re,
      onblur: se,
      onfocus: Ee
    }),
    [
      () => Me({ "mdc-checkbox__native-control": !0, [p()]: !0 }),
      () => r(g()) ? f() : g(),
      () => !r(c()) && c() ? "true" : void 0,
      () => it(b, "input$")
    ],
    void 0,
    void 0,
    !0
  ), Ce($, (ee) => K(I, ee), () => s(I)), Pe($, (ee, ae) => Y == null ? void 0 : Y(ee, ae), h), di(() => bh($, () => s(w), (ee) => K(w, ee))), Ce(P, (ee) => y = ee, () => y), Pe(P, (ee, ae) => Y == null ? void 0 : Y(ee, ae), i), Pe(P, (ee, ae) => Yt == null ? void 0 : Yt(ee, ae), () => ({
    unbounded: !0,
    addClass: te,
    removeClass: H,
    addStyle: D,
    active: s(L),
    eventTarget: s(I)
  })), x(t, P), xe(B);
}
var L_ = /* @__PURE__ */ de('<div style="display: flex; flex-direction: column;"></div>');
function O_(t, e) {
  Te(e, !0);
  let n = v(e, "data", 19, () => []), r = v(e, "values", 31, () => Ie([]));
  var i = L_();
  Qn(i, 21, n, Ri, (a, o) => {
    r_(a, {
      label: (l) => {
        var c = vt();
        Oe(() => $e(c, s(o).label)), x(l, c);
      },
      children: (l, c) => {
        w_(l, {
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
  }), x(t, i), xe();
}
var R_ = (t) => t.stopPropagation(), D_ = /* @__PURE__ */ de('<div class="custom-menu svelte-58jwwf"><div class="menu-arrow svelte-58jwwf"></div> <h4 class="svelte-58jwwf"> </h4> <div class="custom-menu__content"><!></div> <!></div>'), M_ = /* @__PURE__ */ de('<div class="filter-wrapper svelte-58jwwf"><!> <!></div>'), P_ = /* @__PURE__ */ de('<div class="oscd-filters svelte-58jwwf"></div>');
function H_(t, e) {
  Te(e, !0);
  let n = v(e, "filters", 15), r = /* @__PURE__ */ ve(null), i = [], a = [];
  function o(h) {
    var p;
    if (!(h.value === void 0 || h.value === null || h.value === ""))
      switch (h.type) {
        case "text":
          return String(h.value);
        case "number":
          return String(h.value);
        case "select":
          const b = (p = h.options) == null ? void 0 : p.find((I) => I.value === h.value);
          return b ? b.label : String(h.value);
        case "multiselect":
          if (!Array.isArray(h.value) || h.value.length === 0) return;
          const y = h.value.map((I) => {
            var S;
            const _ = (S = h.options) == null ? void 0 : S.find((E) => E.value === I);
            return _ ? _.label : String(I);
          }), A = 1;
          return y.length <= A ? y.join(", ") : `${y.slice(0, A).join(", ")} +${y.length - A} more`;
        case "date":
          try {
            const I = new Date(h.value);
            return isNaN(I.getTime()) ? String(h.value) : I.toLocaleDateString();
          } catch {
            return String(h.value);
          }
        case "datetime":
          try {
            const I = new Date(h.value);
            return isNaN(I.getTime()) ? String(h.value) : new Intl.DateTimeFormat("default", {
              year: "numeric",
              month: "short",
              day: "numeric",
              hour: "2-digit",
              minute: "2-digit",
              hour12: !1
            }).format(I);
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
    s(r) === h ? K(r, null) : (K(r, h, !0), a[h] = u(n()[h]));
  }
  function c() {
    K(r, null), a[s(r)] = void 0;
  }
  function d(h) {
    var p;
    n(n().map((b, y) => y === h ? { ...b, value: a[h] } : b)), (p = e.onfiltersChanged) == null || p.call(e, [...n()]), K(r, null);
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
  }), Le(() => {
  });
  var g = P_();
  Qn(g, 23, n, (h) => h.key, (h, p, b) => {
    var y = M_(), A = fe(y);
    {
      let S = /* @__PURE__ */ he(() => o(s(p)));
      T_(A, {
        get label() {
          return s(p).label;
        },
        get value() {
          return s(S);
        },
        onOpen: () => l(s(b)),
        onRemove: () => m(s(b))
      });
    }
    var I = _e(A, 2);
    {
      var _ = (S) => {
        var E = D_();
        E.__click = [R_];
        var L = _e(fe(E), 2), T = fe(L), w = _e(L, 2), k = fe(w);
        {
          var Z = (R) => {
            Os(R, {
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
              set value(C) {
                a[s(b)] = C;
              }
            });
          }, G = (R) => {
            var C = ne(), F = X(C);
            {
              var U = (te) => {
                {
                  let H = /* @__PURE__ */ he(() => {
                    var D;
                    return (D = s(p)) == null ? void 0 : D.options;
                  });
                  Ap(te, {
                    get label() {
                      return s(p).label;
                    },
                    get data() {
                      return s(H);
                    },
                    get value() {
                      return a[s(b)];
                    },
                    set value(D) {
                      a[s(b)] = D;
                    }
                  });
                }
              }, z = (te) => {
                var H = ne(), D = X(H);
                {
                  var O = (re) => {
                    {
                      let M = /* @__PURE__ */ he(() => {
                        var B;
                        return (B = s(p)) == null ? void 0 : B.options;
                      });
                      O_(re, {
                        get data() {
                          return s(M);
                        },
                        get values() {
                          return a[s(b)];
                        },
                        set values(B) {
                          a[s(b)] = B;
                        }
                      });
                    }
                  }, le = (re) => {
                    var M = ne(), B = X(M);
                    {
                      var P = ($) => {
                        Ob($, {
                          get value() {
                            return a[s(b)];
                          },
                          set value(se) {
                            a[s(b)] = se;
                          }
                        });
                      }, J = ($) => {
                        var se = ne(), Ee = X(se);
                        {
                          var ee = (ae) => {
                            Mb(ae, {
                              get value() {
                                return a[s(b)];
                              },
                              set value(we) {
                                a[s(b)] = we;
                              }
                            });
                          };
                          oe(
                            Ee,
                            (ae) => {
                              s(p).type === "datetime" && ae(ee);
                            },
                            !0
                          );
                        }
                        x($, se);
                      };
                      oe(
                        B,
                        ($) => {
                          s(p).type === "date" ? $(P) : $(J, !1);
                        },
                        !0
                      );
                    }
                    x(re, M);
                  };
                  oe(
                    D,
                    (re) => {
                      s(p).type === "multiselect" ? re(O) : re(le, !1);
                    },
                    !0
                  );
                }
                x(te, H);
              };
              oe(
                F,
                (te) => {
                  s(p).type === "select" ? te(U) : te(z, !1);
                },
                !0
              );
            }
            x(R, C);
          };
          oe(k, (R) => {
            s(p).type === "text" || s(p).type === "number" ? R(Z) : R(G, !1);
          });
        }
        var q = _e(w, 2);
        Ji(q, {
          variant: "unelevated",
          style: "background: var(--secondary); color: white; width: 100%;",
          onclick: () => d(s(b)),
          children: (R, C) => {
            var F = vt("Apply");
            x(R, F);
          },
          $$slots: { default: !0 }
        }), Oe(() => $e(T, `Filter by ${s(p).label ?? ""}`)), mo(2, E, () => Eo, () => ({ y: 5, duration: 120 })), mo(1, E, () => Eo, () => ({ y: -5, duration: 120 })), x(S, E);
      };
      oe(I, (S) => {
        s(r) === s(b) && S(_);
      });
    }
    Ce(y, (S, E) => i[E] = S, (S) => i == null ? void 0 : i[S], () => [s(b)]), x(h, y);
  }), x(t, g), xe();
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
var fd = {
  ANIMATING: "mdc-tab-scroller--animating",
  SCROLL_AREA_SCROLL: "mdc-tab-scroller__scroll-area--scroll",
  SCROLL_TEST: "mdc-tab-scroller__test"
}, N_ = {
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
var al = (
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
var U_ = (
  /** @class */
  function(t) {
    ze(e, t);
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
  }(al)
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
var F_ = (
  /** @class */
  function(t) {
    ze(e, t);
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
  }(al)
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
var k_ = (
  /** @class */
  function(t) {
    ze(e, t);
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
  }(al)
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
var B_ = (
  /** @class */
  function(t) {
    ze(e, t);
    function e(n) {
      var r = t.call(this, be(be({}, e.defaultAdapter), n)) || this;
      return r.isAnimating = !1, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return fd;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return N_;
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
      var i = r[1], a = br(i.split(","), 6);
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
        return this.adapter.setScrollAreaScrollLeft(n), new F_(this.adapter);
      var i = this.adapter.computeScrollAreaClientRect(), a = this.adapter.computeScrollContentClientRect(), o = Math.round(a.right - i.right);
      return this.adapter.setScrollAreaScrollLeft(n), o === r ? new k_(this.adapter) : new U_(this.adapter);
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
var os;
function V_(t, e) {
  if (e === void 0 && (e = !0), e && typeof os < "u")
    return os;
  var n = t.createElement("div");
  n.classList.add(fd.SCROLL_TEST), t.body.appendChild(n);
  var r = n.offsetHeight - n.clientHeight;
  return t.body.removeChild(n), e && (os = r), r;
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
var G_ = {
  ACTIVE: "mdc-tab-indicator--active",
  FADE: "mdc-tab-indicator--fade",
  NO_TRANSITION: "mdc-tab-indicator--no-transition"
}, j_ = {
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
    ze(e, t);
    function e(n) {
      return t.call(this, be(be({}, e.defaultAdapter), n)) || this;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return G_;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return j_;
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
var W_ = (
  /** @class */
  function(t) {
    ze(e, t);
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
var gu = (
  /** @class */
  function(t) {
    ze(e, t);
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
var eo = {
  ACTIVE: "mdc-tab--active"
}, ba = {
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
var q_ = (
  /** @class */
  function(t) {
    ze(e, t);
    function e(n) {
      var r = t.call(this, be(be({}, e.defaultAdapter), n)) || this;
      return r.focusOnActivate = !0, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return eo;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return ba;
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
      return this.adapter.hasClass(eo.ACTIVE);
    }, e.prototype.setFocusOnActivate = function(n) {
      this.focusOnActivate = n;
    }, e.prototype.activate = function(n) {
      this.adapter.addClass(eo.ACTIVE), this.adapter.setAttr(ba.ARIA_SELECTED, "true"), this.adapter.setAttr(ba.TABINDEX, "0"), this.adapter.activateIndicator(n), this.focusOnActivate && this.adapter.focus();
    }, e.prototype.deactivate = function() {
      this.isActive() && (this.adapter.removeClass(eo.ACTIVE), this.adapter.setAttr(ba.ARIA_SELECTED, "false"), this.adapter.setAttr(ba.TABINDEX, "-1"), this.adapter.deactivateIndicator());
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
}, Hn = {
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
var mi = /* @__PURE__ */ new Set();
mi.add(Ot.ARROW_LEFT_KEY);
mi.add(Ot.ARROW_RIGHT_KEY);
mi.add(Ot.END_KEY);
mi.add(Ot.HOME_KEY);
mi.add(Ot.ENTER_KEY);
mi.add(Ot.SPACE_KEY);
var gi = /* @__PURE__ */ new Map();
gi.set(Hn.ARROW_LEFT_KEYCODE, Ot.ARROW_LEFT_KEY);
gi.set(Hn.ARROW_RIGHT_KEYCODE, Ot.ARROW_RIGHT_KEY);
gi.set(Hn.END_KEYCODE, Ot.END_KEY);
gi.set(Hn.HOME_KEYCODE, Ot.HOME_KEY);
gi.set(Hn.ENTER_KEYCODE, Ot.ENTER_KEY);
gi.set(Hn.SPACE_KEYCODE, Ot.SPACE_KEY);
var z_ = (
  /** @class */
  function(t) {
    ze(e, t);
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
        return Hn;
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
      var o = this.adapter.getTabDimensionsAtIndex(r), u = o.contentLeft - i - a, l = o.contentRight - i, c = l - Hn.EXTRA_SCROLL_AMOUNT, d = u + Hn.EXTRA_SCROLL_AMOUNT;
      return r < n ? Math.min(c, 0) : Math.max(d, 0);
    }, e.prototype.calculateScrollIncrementRTL = function(n, r, i, a, o) {
      var u = this.adapter.getTabDimensionsAtIndex(r), l = o - u.contentLeft - i, c = o - u.contentRight - i - a, d = c + Hn.EXTRA_SCROLL_AMOUNT, m = l - Hn.EXTRA_SCROLL_AMOUNT;
      return r > n ? Math.max(d, 0) : Math.min(m, 0);
    }, e.prototype.findAdjacentTabIndexClosestToEdge = function(n, r, i, a) {
      var o = r.rootLeft - i, u = r.rootRight - i - a, l = o + u, c = o < 0 || l < 0, d = u > 0 || l > 0;
      return c ? n - 1 : d ? n + 1 : -1;
    }, e.prototype.findAdjacentTabIndexClosestToEdgeRTL = function(n, r, i, a, o) {
      var u = o - r.rootLeft - a - i, l = o - r.rootRight - i, c = u + l, d = u > 0 || c > 0, m = l < 0 || c < 0;
      return d ? n + 1 : m ? n - 1 : -1;
    }, e.prototype.getKeyFromEvent = function(n) {
      return mi.has(n.key) ? n.key : gi.get(n.keyCode);
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
), K_ = /* @__PURE__ */ de("<div><div><div><!></div></div></div>");
function X_(t, e) {
  Te(e, !0);
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
  ]), m, f = /* @__PURE__ */ ve(void 0), g, h, p = Ie({}), b = Ie({}), y = Ie({}), A = Ie({});
  at(() => (K(
    f,
    new B_({
      eventTargetMatchesSelector: (M, B) => n(M, B),
      addClass: I,
      removeClass: _,
      addScrollAreaClass: S,
      setScrollAreaStyleProperty: E,
      setScrollContentStyleProperty: L,
      getScrollContentStyleValue: T,
      setScrollAreaScrollLeft: (M) => g.scrollLeft = M,
      getScrollAreaScrollLeft: () => g.scrollLeft,
      getScrollContentOffsetWidth: () => h.offsetWidth,
      getScrollAreaOffsetWidth: () => g.offsetWidth,
      computeScrollAreaClientRect: () => g.getBoundingClientRect(),
      computeScrollContentClientRect: () => h.getBoundingClientRect(),
      computeHorizontalScrollbarHeight: () => V_(document)
    }),
    !0
  ), s(f).init(), () => {
    var M;
    (M = s(f)) == null || M.destroy();
  }));
  function I(M) {
    p[M] || (p[M] = !0);
  }
  function _(M) {
    (!(M in p) || p[M]) && (p[M] = !1);
  }
  function S(M) {
    b[M] || (b[M] = !0);
  }
  function E(M, B) {
    y[M] != B && (B === "" || B == null ? delete y[M] : y[M] = B);
  }
  function L(M, B) {
    A[M] != B && (B === "" || B == null ? delete A[M] : A[M] = B);
  }
  function T(M) {
    return M in A ? A[M] : getComputedStyle(h).getPropertyValue(M);
  }
  function w() {
    if (s(f) == null)
      throw new Error("Instance is undefined.");
    return s(f).getScrollPosition();
  }
  function k() {
    return h.offsetWidth;
  }
  function Z(M) {
    var B;
    (B = s(f)) == null || B.incrementScroll(M);
  }
  function G(M) {
    var B;
    (B = s(f)) == null || B.scrollTo(M);
  }
  function q() {
    return m;
  }
  var R = {
    getScrollPosition: w,
    getScrollContentWidth: k,
    incrementScroll: Z,
    scrollTo: G,
    getElement: q
  }, C = K_();
  Ne(C, (M, B) => ({ class: M, ...B }), [
    () => Me({
      "mdc-tab-scroller": !0,
      "mdc-tab-scroller--align-start": a() === "start",
      "mdc-tab-scroller--align-end": a() === "end",
      "mdc-tab-scroller--align-center": a() === "center",
      ...p,
      [i()]: !0
    }),
    () => Bn(d, ["scrollArea$", "scrollContent$"])
  ]);
  var F = fe(C), U = (M) => {
    var B;
    s(f) && s(f).handleInteraction(), (B = e.scrollArea$onwheel) == null || B.call(e, M);
  }, z = (M) => {
    var B;
    s(f) && s(f).handleInteraction(), (B = e.scrollArea$ontouchstart) == null || B.call(e, M);
  }, te = (M) => {
    var B;
    s(f) && s(f).handleInteraction(), (B = e.scrollArea$onpointerdown) == null || B.call(e, M);
  }, H = (M) => {
    var B;
    s(f) && s(f).handleInteraction(), (B = e.scrollArea$onmousedown) == null || B.call(e, M);
  }, D = (M) => {
    var B;
    s(f) && s(f).handleInteraction(), (B = e.scrollArea$onkeydown) == null || B.call(e, M);
  };
  Ne(
    F,
    (M, B, P) => ({
      class: M,
      style: B,
      ...P,
      onwheel: U,
      ontouchstart: z,
      onpointerdown: te,
      onmousedown: H,
      onkeydown: D
    }),
    [
      () => Me({
        "mdc-tab-scroller__scroll-area": !0,
        ...b,
        [u()]: !0
      }),
      () => Object.entries(y).map(([M, B]) => `${M}: ${B};`).join(" "),
      () => it(d, "scrollArea$")
    ]
  );
  var O = fe(F), le = (M) => {
    var B;
    s(f) && s(f).handleTransitionEnd(M), (B = e.scrollContent$ontransitionend) == null || B.call(e, M);
  };
  Ne(
    O,
    (M, B, P) => ({
      class: M,
      style: B,
      ...P,
      ontransitionend: le
    }),
    [
      () => Me({
        "mdc-tab-scroller__scroll-content": !0,
        [c()]: !0
      }),
      () => Object.entries(A).map(([M, B]) => `${M}: ${B};`).join(" "),
      () => it(d, "scrollContent$")
    ]
  );
  var re = fe(O);
  return Ae(re, () => e.children ?? me), Ce(O, (M) => h = M, () => h), Pe(O, (M, B) => Y == null ? void 0 : Y(M, B), l), Ce(F, (M) => g = M, () => g), Pe(F, (M, B) => Y == null ? void 0 : Y(M, B), o), Ce(C, (M) => m = M, () => m), Pe(C, (M, B) => Y == null ? void 0 : Y(M, B), r), x(t, C), xe(R);
}
var Y_ = /* @__PURE__ */ de("<div><!></div>");
function Z_(t, e) {
  Te(e, !0);
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
  ]), f, g = /* @__PURE__ */ ve(void 0), h, p = /* @__PURE__ */ ve(Ie(c() == null ? -1 : i().findIndex((R) => c() && a()(R) === a()(c())))), b = Ie({}), y = /* @__PURE__ */ ve(/* @__PURE__ */ new WeakMap()), A = !1;
  ce("SMUI:tab:focusOnActivate", o()), ce("SMUI:tab:initialActive", {
    active: c() == null ? null : a()(c()),
    key: a()
  }), Le(() => {
    (c() == null && s(p) !== -1 || c() != null && s(p) === -1 || c() != null && a()(c()) !== a()(i()[s(p)])) && (K(p, i().findIndex((R) => c() && a()(R) === a()(c())), !0), s(g) && (A = !u(), s(g).activateTab(s(p)), A = !1));
  }), Le(() => {
    if (i().length) {
      const R = i()[0] instanceof Object ? s(y).get(i()[0]) : b[i()[0]];
      R && R.forceAccessible(s(p) === -1);
    }
  });
  let I = !1;
  Le(() => {
    if (!s(g)) {
      I = !1;
      return;
    }
    I || (I = !0, s(g).setUseAutomaticActivation(l()));
  }), ce("SMUI:tab:mount", (R) => {
    S(R.tabId, R);
  }), ce("SMUI:tab:unmount", (R) => {
    E(R.tabId);
  }), at(() => (K(
    g,
    new z_({
      scrollTo: (R) => h.scrollTo(R),
      incrementScroll: (R) => h.incrementScroll(R),
      getScrollPosition: () => h.getScrollPosition(),
      getScrollContentWidth: () => h.getScrollContentWidth(),
      getOffsetWidth: () => T().offsetWidth,
      isRTL: () => getComputedStyle(T()).getPropertyValue("direction") === "rtl",
      setActiveTab: (R) => {
        var C;
        c(i()[R]), K(p, R, !0), (C = s(g)) == null || C.activateTab(R);
      },
      activateTabAtIndex: (R, C) => {
        var F;
        return (F = _(i()[R])) == null ? void 0 : F.activate(C, A);
      },
      deactivateTabAtIndex: (R) => {
        var C;
        return (C = _(i()[R])) == null ? void 0 : C.deactivate();
      },
      focusTabAtIndex: (R) => {
        var C;
        return (C = _(i()[R])) == null ? void 0 : C.focus();
      },
      getTabIndicatorClientRectAtIndex: (R) => {
        var C;
        return ((C = _(i()[R])) == null ? void 0 : C.computeIndicatorClientRect()) ?? new DOMRect();
      },
      getTabDimensionsAtIndex: (R) => {
        var C;
        return ((C = _(i()[R])) == null ? void 0 : C.computeDimensions()) ?? { rootLeft: 0, rootRight: 0, contentLeft: 0, contentRight: 0 };
      },
      getPreviousActiveTabIndex: () => {
        var R;
        for (let C = 0; C < i().length; C++)
          if ((R = _(i()[C])) != null && R.active)
            return C;
        return -1;
      },
      getFocusedTabIndex: () => {
        const R = i().map((F) => {
          var U;
          return (U = _(F)) == null ? void 0 : U.element;
        }), C = document.activeElement;
        return R.indexOf(C);
      },
      getIndexOfTabById: (R) => i().findIndex((C) => a()(C) === a()(R)),
      getTabListLength: () => i().length,
      notifyTabActivated: (R) => Ke(T(), "SMUITabBarActivated", { index: R })
    }),
    !0
  ), s(g).init(), () => {
    var R;
    (R = s(g)) == null || R.destroy();
  }));
  function _(R) {
    return R instanceof Object ? s(y).get(R) : b[R];
  }
  function S(R, C) {
    R instanceof Object ? (s(y).set(R, C), K(y, s(y))) : b[R] = C;
  }
  function E(R) {
    R instanceof Object ? (s(y).delete(R), K(y, s(y))) : delete b[R];
  }
  function L(R) {
    var C;
    (C = s(g)) == null || C.scrollIntoView(R);
  }
  function T() {
    return f;
  }
  var w = { scrollIntoView: L, getElement: T }, k = Y_(), Z = (R) => {
    var C;
    s(g) && s(g).handleKeyDown(R), (C = e.onkeydown) == null || C.call(e, R);
  }, G = (R) => {
    var C;
    s(g) && s(g).handleTabInteraction(R), (C = e.onSMUITabInteracted) == null || C.call(e, R);
  };
  Ne(
    k,
    (R, C) => ({
      class: R,
      role: "tablist",
      tabindex: d(),
      ...C,
      onkeydown: Z,
      onSMUITabInteracted: G
    }),
    [
      () => Me({ "mdc-tab-bar": !0, [r()]: !0 }),
      () => Bn(m, ["tabScroller$"])
    ]
  );
  var q = fe(k);
  {
    let R = /* @__PURE__ */ he(() => it(m, "tabScroller$"));
    Ce(
      X_(q, Je(() => s(R), {
        children: (C, F) => {
          var U = ne(), z = X(U);
          Qn(z, 17, i, (te) => a()(te), (te, H) => {
            var D = ne(), O = X(D);
            Ae(O, () => e.tab, () => s(H)), x(te, D);
          }), x(C, U);
        },
        $$slots: { default: !0 }
      })),
      (C) => h = C,
      () => h
    );
  }
  return Ce(k, (R) => f = R, () => f), Pe(k, (R, C) => Y == null ? void 0 : Y(R, C), n), x(t, k), xe(w);
}
var Q_ = /* @__PURE__ */ de("<span><span><!></span></span>");
function J_(t, e) {
  Te(e, !0);
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
  ]), d, m = /* @__PURE__ */ ve(void 0), f, g = /* @__PURE__ */ ve(Ie({})), h = /* @__PURE__ */ ve(Ie({})), p = Ie([]), b = o();
  Le(() => {
    b !== o() && (b = o(), s(m) && s(m).destroy(), K(g, {}, !0), K(h, {}, !0), K(m, y(), !0), s(m).init());
  }), nc(() => {
    p.length && requestAnimationFrame(() => {
      const R = p.shift() ?? [];
      for (const C of R)
        C();
    });
  }), at(() => (K(m, y(), !0), s(m).init(), () => {
    var R;
    (R = s(m)) == null || R.destroy();
  }));
  function y() {
    const R = {
      fade: W_,
      slide: gu
    }[o()] || gu;
    return new R({
      addClass: (...C) => A(() => I(...C)),
      removeClass: (...C) => A(() => _(...C)),
      computeContentClientRect: T,
      setContentStyleProperty: (...C) => A(() => S(...C))
    });
  }
  function A(R) {
    p.length ? p[p.length - 1].push(R) : R();
  }
  function I(R) {
    s(g)[R] || (s(g)[R] = !0);
  }
  function _(R) {
    (!(R in s(g)) || s(g)[R]) && (s(g)[R] = !1);
  }
  function S(R, C) {
    s(h)[R] != C && (C === "" || C == null ? delete s(h)[R] : s(h)[R] = C);
  }
  function E(R) {
    var C;
    i(!0), (C = s(m)) == null || C.activate(R);
  }
  function L() {
    var R;
    i(!1), (R = s(m)) == null || R.deactivate();
  }
  function T() {
    return p.push([]), f.getBoundingClientRect();
  }
  function w() {
    return d;
  }
  var k = { activate: E, deactivate: L, computeContentClientRect: T, getElement: w }, Z = Q_();
  Ne(Z, (R, C) => ({ class: R, ...C }), [
    () => Me({
      "mdc-tab-indicator": !0,
      "mdc-tab-indicator--active": i(),
      "mdc-tab-indicator--fade": o() === "fade",
      ...s(g),
      [r()]: !0
    }),
    () => Bn(c, ["content$"])
  ]);
  var G = fe(Z);
  Ne(
    G,
    (R, C, F) => ({
      class: R,
      style: C,
      "aria-hidden": a() === "icon" ? "true" : void 0,
      ...F
    }),
    [
      () => Me({
        "mdc-tab-indicator__content": !0,
        "mdc-tab-indicator__content--underline": a() === "underline",
        "mdc-tab-indicator__content--icon": a() === "icon",
        [l()]: !0
      }),
      () => Object.entries(s(h)).map(([R, C]) => `${R}: ${C};`).join(" "),
      () => it(c, "content$")
    ]
  );
  var q = fe(G);
  return Ae(q, () => e.children ?? me), Ce(G, (R) => f = R, () => f), Pe(G, (R, C) => Y == null ? void 0 : Y(R, C), u), Ce(Z, (R) => d = R, () => d), Pe(Z, (R, C) => Y == null ? void 0 : Y(R, C), n), x(t, Z), xe(k);
}
var $_ = /* @__PURE__ */ de('<span><!> <!></span> <!> <span class="mdc-tab__ripple"></span>', 1);
function ey(t, e) {
  Te(e, !0);
  const n = (B) => {
    {
      let P = /* @__PURE__ */ he(() => it(p, "tabIndicator$"));
      Ce(
        J_(B, Je(() => s(P), {
          get active() {
            return s(w);
          },
          set active(J) {
            K(w, J, !0);
          },
          children: (J, $) => {
            var se = ne(), Ee = X(se);
            Ae(Ee, () => e.tabIndicator ?? me), x(J, se);
          },
          $$slots: { default: !0 }
        })),
        (J) => I = J,
        () => I
      );
    }
  };
  let r = v(e, "use", 19, () => []), i = v(e, "class", 3, ""), a = v(e, "style", 3, ""), o = v(e, "ripple", 3, !0), u = v(e, "stacked", 3, !1), l = v(e, "minWidth", 3, !1), c = v(e, "indicatorSpanOnlyContent", 3, !1), d = v(e, "href", 3, void 0), m = v(e, "content$use", 19, () => []), f = v(e, "content$class", 3, ""), g = v(e, "component", 3, Br), h = v(e, "tag", 19, () => d() == null ? "button" : "a"), p = /* @__PURE__ */ je(e, [
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
  ]), b, y = /* @__PURE__ */ ve(void 0), A, I, _ = Ie({}), S = Ie({}), E = Ie({}), L = ye("SMUI:tab:focusOnActivate");
  const T = ye("SMUI:tab:initialActive");
  let w = /* @__PURE__ */ ve(Ie(T.active != null && T.key(e.tab) === T.active)), k = /* @__PURE__ */ ve(!1);
  if (ce("SMUI:label:context", "tab"), ce("SMUI:icon:context", "tab"), !e.tab)
    throw new Error("The tab property is required! It should be passed down from the TabBar to the Tab.");
  let Z = !1;
  Le(() => {
    if (!s(y)) {
      Z = !1;
      return;
    }
    Z || (Z = !0, s(y).setFocusOnActivate(L));
  });
  const G = ye("SMUI:tab:mount"), q = ye("SMUI:tab:unmount");
  at(() => {
    K(
      y,
      new q_({
        setAttr: z,
        addClass: C,
        removeClass: F,
        hasClass: R,
        activateIndicator: (P) => I.activate(P),
        deactivateIndicator: () => I.deactivate(),
        notifyInteracted: () => Ke(O(), "SMUITabInteracted", { tabId: e.tab }),
        getOffsetLeft: () => O().offsetLeft,
        getOffsetWidth: () => O().offsetWidth,
        getContentOffsetLeft: () => A.offsetLeft,
        getContentOffsetWidth: () => A.offsetWidth,
        focus: D
      }),
      !0
    );
    const B = {
      tabId: e.tab,
      get element() {
        return O();
      },
      get active() {
        return s(w);
      },
      forceAccessible(P) {
        K(k, P, !0);
      },
      computeIndicatorClientRect: () => I.computeContentClientRect(),
      computeDimensions: () => {
        if (s(y) == null)
          throw new Error("Instance is undefined.");
        return s(y).computeDimensions();
      },
      focus: D,
      activate: te,
      deactivate: H
    };
    return G && G(B), s(y).init(), () => {
      var P;
      q && q(B), (P = s(y)) == null || P.destroy();
    };
  });
  function R(B) {
    return B in _ ? _[B] : O().classList.contains(B);
  }
  function C(B) {
    _[B] || (_[B] = !0);
  }
  function F(B) {
    (!(B in _) || _[B]) && (_[B] = !1);
  }
  function U(B, P) {
    S[B] != P && (P === "" || P == null ? delete S[B] : S[B] = P);
  }
  function z(B, P) {
    E[B] !== P && (E[B] = P);
  }
  function te(B, P) {
    var J, $, se;
    K(w, !0), P && ((J = s(y)) == null || J.setFocusOnActivate(!1)), ($ = s(y)) == null || $.activate(B), P && ((se = s(y)) == null || se.setFocusOnActivate(L));
  }
  function H() {
    var B;
    K(w, !1), (B = s(y)) == null || B.deactivate();
  }
  function D() {
    O().focus();
  }
  function O() {
    return b.getElement();
  }
  var le = { activate: te, deactivate: H, focus: D, getElement: O }, re = ne(), M = X(re);
  {
    let B = /* @__PURE__ */ he(() => [
      [
        Yt,
        {
          ripple: o(),
          unbounded: !1,
          addClass: C,
          removeClass: F,
          addStyle: U
        }
      ],
      ...r()
    ]), P = /* @__PURE__ */ he(() => Me({
      "mdc-tab": !0,
      "mdc-tab--active": s(w),
      "mdc-tab--stacked": u(),
      "mdc-tab--min-width": l(),
      ..._,
      [i()]: !0
    })), J = /* @__PURE__ */ he(() => Object.entries(S).map(([ee, ae]) => `${ee}: ${ae};`).concat([a()]).join(" ")), $ = /* @__PURE__ */ he(() => s(w) ? "true" : "false"), se = /* @__PURE__ */ he(() => s(w) || s(k) ? "0" : "-1"), Ee = /* @__PURE__ */ he(() => Bn(p, ["content$", "tabIndicator$"]));
    rr(M, g, (ee, ae) => {
      Ce(
        ae(ee, Je(
          {
            get tag() {
              return h();
            },
            get use() {
              return s(B);
            },
            get class() {
              return s(P);
            },
            get style() {
              return s(J);
            },
            role: "tab",
            get "aria-selected"() {
              return s($);
            },
            get tabindex() {
              return s(se);
            },
            get href() {
              return d();
            }
          },
          () => E,
          () => s(Ee),
          {
            onclick: (we) => {
              var Re;
              (Re = e.onclick) == null || Re.call(e, we), !we.defaultPrevented && s(y) && s(y).handleClick();
            },
            children: (we, Re) => {
              var He = $_(), Ge = X(He);
              Ne(Ge, (Be, ut) => ({ class: Be, ...ut }), [
                () => Me({ "mdc-tab__content": !0, [f()]: !0 }),
                () => it(p, "content$")
              ]);
              var ke = fe(Ge);
              Ae(ke, () => e.children ?? me);
              var V = _e(ke, 2);
              {
                var Q = (Be) => {
                  n(Be);
                };
                oe(V, (Be) => {
                  c() && Be(Q);
                });
              }
              Ce(Ge, (Be) => A = Be, () => A), Pe(Ge, (Be, ut) => Y == null ? void 0 : Y(Be, ut), m);
              var ge = _e(Ge, 2);
              {
                var De = (Be) => {
                  n(Be);
                };
                oe(ge, (Be) => {
                  c() || Be(De);
                });
              }
              x(we, He);
            },
            $$slots: { default: !0 }
          }
        )),
        (we) => b = we,
        () => b
      );
    });
  }
  return x(t, re), xe(le);
}
var ty = (t, e) => e(), ny = /* @__PURE__ */ de('<button class="filter-tab__tabs__clear svelte-nj6sif">Clear Filters</button>'), ry = /* @__PURE__ */ de('<div class="filter-tab__tabs svelte-nj6sif"><h4 style="all:unset; font-weight: bold; font-size: 1rem;">Filter by</h4> <!> <!></div>'), iy = /* @__PURE__ */ de('<div class="filter-tab svelte-nj6sif"><!> <!> <!></div>');
function ay(t, e) {
  Te(e, !0);
  let n = v(e, "filters", 31, () => Ie([])), r = v(e, "onFilterChange", 3, (I) => {
  }), i = v(e, "activeNavigationTab", 31, () => Ie(e.navigationTabs ? e.navigationTabs[0] : void 0)), a = v(e, "searchText", 15, ""), o = v(e, "searchLabel", 3, "Search"), u = v(e, "searchPlaceholder", 3, "Type to search..."), l = v(e, "onSearchInput", 3, () => {
  }), c = v(e, "searchDisabled", 3, !1), d = /* @__PURE__ */ he(() => n().some((I) => I.value !== void 0 && I.value !== null && I.value !== "")), m = () => {
    n(n().map((I) => ({ ...I, value: void 0 }))), r()(n());
  };
  var f = iy(), g = fe(f);
  {
    var h = (I) => {
      Wg(I, {
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
    oe(g, (I) => {
      c() || I(h);
    });
  }
  var p = _e(g, 2);
  {
    var b = (I) => {
      Z_(I, {
        get tabs() {
          return e.navigationTabs;
        },
        get active() {
          return i();
        },
        set active(S) {
          i(S);
        },
        tab: (S, E = me) => {
          ey(S, {
            get tab() {
              return E();
            },
            minWidth: !0,
            children: (L, T) => {
              td(L, {
                children: (w, k) => {
                  var Z = vt();
                  Oe(() => $e(Z, E())), x(w, Z);
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
    oe(p, (I) => {
      e.navigationTabs && I(b);
    });
  }
  var y = _e(p, 2);
  {
    var A = (I) => {
      var _ = ry(), S = _e(fe(_), 2);
      H_(S, {
        onfiltersChanged: (T) => r()(T),
        get filters() {
          return n();
        },
        set filters(T) {
          n(T);
        }
      });
      var E = _e(S, 2);
      {
        var L = (T) => {
          var w = ny();
          w.__click = [ty, m], x(T, w);
        };
        oe(E, (T) => {
          s(d) && T(L);
        });
      }
      x(I, _);
    };
    oe(y, (I) => {
      n() && n().length > 0 && I(A);
    });
  }
  x(t, f), xe();
}
yn(["click"]);
yn(["change", "click"]);
var oy = /* @__PURE__ */ de('<div><div class="mdc-linear-progress__buffer"><div class="mdc-linear-progress__buffer-bar"></div> <div class="mdc-linear-progress__buffer-dots"></div></div> <div class="mdc-linear-progress__bar mdc-linear-progress__primary-bar"><span class="mdc-linear-progress__bar-inner"></span></div> <div class="mdc-linear-progress__bar mdc-linear-progress__secondary-bar"><span class="mdc-linear-progress__bar-inner"></span></div></div>');
function sy(t, e) {
  Te(e, !0);
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
  ]), f, g = /* @__PURE__ */ ve(void 0), h = Ie({}), p = Ie({}), b = Ie({}), y = Ie({}), A = Ie({}), I = ye("SMUI:linear-progress:context"), _ = ye("SMUI:linear-progress:closed");
  Le(() => {
    _ && Nn(_, l());
  }), Le(() => {
    s(g) && s(g).isDeterminate() !== !u() && s(g).setDeterminate(!u());
  }), Le(() => {
    s(g) && s(g).getProgress() !== c() && s(g).setProgress(c());
  }), Le(() => {
    s(g) && (d() == null ? s(g).setBuffer(1) : s(g).setBuffer(d()));
  }), Le(() => {
    s(g) && (l() ? s(g).close() : s(g).open());
  }), at(() => (K(
    g,
    new Ub({
      addClass: E,
      forceLayout: () => {
        q().getBoundingClientRect();
      },
      setBufferBarStyle: Z,
      setPrimaryBarStyle: G,
      hasClass: S,
      removeAttribute: w,
      removeClass: L,
      setAttribute: T,
      setStyle: k,
      attachResizeObserver: (D) => {
        const O = window.ResizeObserver;
        if (O) {
          const le = new O(D);
          return le.observe(q()), le;
        }
        return null;
      },
      getWidth: () => q().offsetWidth
    }),
    !0
  ), s(g).init(), () => {
    var D;
    (D = s(g)) == null || D.destroy();
  }));
  function S(D) {
    return D in h ? h[D] : q().classList.contains(D);
  }
  function E(D) {
    h[D] || (h[D] = !0);
  }
  function L(D) {
    (!(D in h) || h[D]) && (h[D] = !1);
  }
  function T(D, O) {
    p[D] !== O && (p[D] = O);
  }
  function w(D) {
    (!(D in p) || p[D] != null) && (p[D] = void 0);
  }
  function k(D, O) {
    b[D] != O && (O === "" || O == null ? delete b[D] : b[D] = O);
  }
  function Z(D, O) {
    y[D] != O && (O === "" || O == null ? delete y[D] : y[D] = O);
  }
  function G(D, O) {
    A[D] != O && (O === "" || O == null ? delete A[D] : A[D] = O);
  }
  function q() {
    return f;
  }
  var R = { getElement: q }, C = oy(), F = (D) => {
    var O;
    s(g) && s(g).handleTransitionEnd(), (O = e.ontransitionend) == null || O.call(e, D);
  };
  Ne(
    C,
    (D, O) => ({
      class: D,
      style: O,
      role: "progressbar",
      "aria-valuemin": 0,
      "aria-valuemax": 1,
      "aria-valuenow": u() ? void 0 : c(),
      ...p,
      ...m,
      ontransitionend: F
    }),
    [
      () => Me({
        "mdc-linear-progress": !0,
        "mdc-linear-progress--indeterminate": u(),
        "mdc-linear-progress--closed": l(),
        "mdc-data-table__linear-progress": I === "data-table",
        ...h,
        [a()]: !0
      }),
      () => Object.entries(b).map(([D, O]) => `${D}: ${O};`).concat([o()]).join(" ")
    ]
  );
  var U = fe(C), z = fe(U), te = _e(U, 2);
  Ce(C, (D) => f = D, () => f), Pe(C, (D, O) => Y == null ? void 0 : Y(D, O), i), Oe(
    (D, O) => {
      bt(z, D), bt(te, O);
    },
    [
      () => Object.entries(y).map(([D, O]) => `${D}: ${O};`).join(" "),
      () => Object.entries(A).map(([D, O]) => `${D}: ${O};`).join(" ")
    ]
  ), x(t, C);
  var H = xe(R);
  return r(), H;
}
var ly = /* @__PURE__ */ Rt('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor" class="svelte-1mj71p3"><path d="M12 4l-8 8h16l-8-8z"></path></svg>'), uy = /* @__PURE__ */ Rt('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor" class="svelte-1mj71p3"><path d="M12 20l8-8H4l8 8z"></path></svg>'), cy = /* @__PURE__ */ de('<div class="custom-cell-container svelte-1mj71p3"><div class="cell-header svelte-1mj71p3"><span class="header-title svelte-1mj71p3"> </span> <!></div></div>'), dy = (t, e) => e(), fy = /* @__PURE__ */ de('<input type="text" class="svelte-1mj71p3"/>'), hy = (t, e) => e(), vy = /* @__PURE__ */ de('<input type="number" class="svelte-1mj71p3"/>'), my = /* @__PURE__ */ de("<!> <!>", 1), gy = /* @__PURE__ */ de("<!> <!>", 1), py = /* @__PURE__ */ de('<div class="cell-actions svelte-1mj71p3"></div>'), by = /* @__PURE__ */ de("<!> <!>", 1);
function pu(t, e) {
  Te(e, !0);
  const n = () => kn(b, "$sortColumn", a), r = () => kn(y, "$sortDirection", a), i = () => kn(p, "$filteredData", a), [a, o] = ir();
  let u = v(e, "loadingDone", 15, !0), l = v(e, "label", 19, Qp), c = v(e, "columnDefs", 19, () => []), d = v(e, "rowData", 31, () => Ie([])), m = v(e, "rowActions", 19, () => []), f = v(e, "searchInputLabel", 3, "Search"), g = v(e, "emptyText", 3, "No data available"), h = Ie({ name: "", color: "", number: "" }), p = Bt([]), b = Bt(null), y = Bt(null), A = /* @__PURE__ */ he(() => c().some((E) => E.filter));
  e.store.store.subscribe((E) => {
    d([...E]), I();
  });
  function I() {
    let E = d().filter((L) => c().every((T) => {
      const w = h[T.field], k = T.filterValueGetter ? T.filterValueGetter(L) : L[T.field];
      return w ? T.filterType === "number" ? k == w : k.toString().toLowerCase().includes(w.toLowerCase()) : !0;
    }));
    E = _(E), p.set(E);
  }
  function _(E) {
    let L, T;
    return b.subscribe((w) => L = w), y.subscribe((w) => T = w), !L || !T ? E : E.sort((w, k) => {
      let Z = w[L], G = k[L];
      return Z == null && (Z = ""), G == null && (G = ""), T === "asc" ? Z.toString().localeCompare(G.toString()) : G.toString().localeCompare(Z.toString());
    });
  }
  function S(E) {
    b.update((L) => {
      if (L === E)
        y.update((T) => T === "asc" ? "desc" : T === "desc" ? null : "asc");
      else
        return y.set("asc"), E;
      return E;
    }), I();
  }
  p.set(d()), Vb(t, {
    get "table$aria-label"() {
      return l();
    },
    style: "max-width: 100%; width: 100%;",
    progress: (L) => {
      sy(L, {
        indeterminate: !0,
        "aria-label": "Data is being loaded...",
        get closed() {
          return u();
        },
        set closed(T) {
          u(T);
        }
      });
    },
    children: (L, T) => {
      var w = by(), k = X(w);
      jb(k, {
        children: (G, q) => {
          var R = gy(), C = X(R);
          Ja(C, {
            class: "header-title-row",
            children: (z, te) => {
              var H = ne(), D = X(H);
              Qn(D, 17, c, Ri, (O, le) => {
                pa(O, {
                  onclick: () => s(le).sortable && S(s(le).field),
                  get style() {
                    return s(le).headerStyle;
                  },
                  children: (re, M) => {
                    var B = cy(), P = fe(B), J = fe(P), $ = fe(J), se = _e(J, 2);
                    {
                      var Ee = (ee) => {
                        var ae = ne(), we = X(ae);
                        {
                          var Re = (He) => {
                            var Ge = ne(), ke = X(Ge);
                            {
                              var V = (ge) => {
                                var De = ly();
                                x(ge, De);
                              }, Q = (ge) => {
                                var De = ne(), Be = X(De);
                                {
                                  var ut = (mt) => {
                                    var pe = uy();
                                    x(mt, pe);
                                  };
                                  oe(
                                    Be,
                                    (mt) => {
                                      r() === "desc" && mt(ut);
                                    },
                                    !0
                                  );
                                }
                                x(ge, De);
                              };
                              oe(ke, (ge) => {
                                r() === "asc" ? ge(V) : ge(Q, !1);
                              });
                            }
                            x(He, Ge);
                          };
                          oe(we, (He) => {
                            n() === s(le).field && r() !== null && He(Re);
                          });
                        }
                        x(ee, ae);
                      };
                      oe(se, (ee) => {
                        s(le).sortable && ee(Ee);
                      });
                    }
                    Oe(() => {
                      bt(B, `min-width: ${s(le).minWidth ?? 0 ?? ""}`), $e($, s(le).headerName);
                    }), x(re, B);
                  },
                  $$slots: { default: !0 }
                });
              }), x(z, H);
            },
            $$slots: { default: !0 }
          });
          var F = _e(C, 2);
          {
            var U = (z) => {
              Ja(z, {
                class: "header-filter-row",
                children: (te, H) => {
                  var D = ne(), O = X(D);
                  Qn(O, 17, c, Ri, (le, re) => {
                    pa(le, {
                      children: (M, B) => {
                        var P = ne(), J = X(P);
                        {
                          var $ = (se) => {
                            var Ee = my(), ee = X(Ee);
                            {
                              var ae = (He) => {
                                var Ge = fy();
                                Ge.__input = [dy, I], Oe(() => gr(Ge, "placeholder", `${f()} ${s(re).headerName}`)), wa(Ge, () => h[s(re).field], (ke) => h[s(re).field] = ke), x(He, Ge);
                              };
                              oe(ee, (He) => {
                                s(re).filterType === "text" && He(ae);
                              });
                            }
                            var we = _e(ee, 2);
                            {
                              var Re = (He) => {
                                var Ge = vy();
                                Ge.__input = [hy, I], Oe(() => gr(Ge, "placeholder", `${f()} ${s(re).headerName}`)), wa(Ge, () => h[s(re).field], (ke) => h[s(re).field] = ke), x(He, Ge);
                              };
                              oe(we, (He) => {
                                s(re).filterType === "number" && He(Re);
                              });
                            }
                            x(se, Ee);
                          };
                          oe(J, (se) => {
                            s(re).filter && se($);
                          });
                        }
                        x(M, P);
                      },
                      $$slots: { default: !0 }
                    });
                  }), x(te, D);
                },
                $$slots: { default: !0 }
              });
            };
            oe(F, (z) => {
              s(A) && z(U);
            });
          }
          x(G, R);
        },
        $$slots: { default: !0 }
      });
      var Z = _e(k, 2);
      qb(Z, {
        children: (G, q) => {
          var R = ne(), C = X(R);
          {
            var F = (z) => {
              Ja(z, {
                children: (te, H) => {
                  pa(te, {
                    class: "oscd-basic-table__empty-row",
                    get colspan() {
                      return c().length;
                    },
                    style: "text-align:center; padding: 24px; opacity: 0.6; background: rgba(0,0,0,0.05);",
                    children: (D, O) => {
                      var le = vt();
                      Oe(() => $e(le, g())), x(D, le);
                    },
                    $$slots: { default: !0 }
                  });
                },
                $$slots: { default: !0 }
              });
            }, U = (z) => {
              var te = ne(), H = X(te);
              Qn(H, 1, i, Ri, (D, O) => {
                Ja(D, {
                  children: (le, re) => {
                    var M = ne(), B = X(M);
                    Qn(B, 17, c, (P) => P.field, (P, J) => {
                      var $ = ne(), se = X($);
                      {
                        var Ee = (ae) => {
                          pa(ae, {
                            children: (we, Re) => {
                              var He = py();
                              Qn(He, 21, m, Ri, (Ge, ke) => {
                                var V = ne(), Q = X(V);
                                {
                                  var ge = (Be) => {
                                    Ra(Be, {
                                      get content() {
                                        return s(ke).tooltip;
                                      },
                                      hoverDelay: 500,
                                      children: (ut, mt) => {
                                        {
                                          let pe = /* @__PURE__ */ he(() => s(ke).disabled(s(O)));
                                          cg(ut, {
                                            get iconComponent() {
                                              return s(ke).iconComponent;
                                            },
                                            get iconStyles() {
                                              return s(ke).iconStyles;
                                            },
                                            callback: () => s(ke).callback(s(O)),
                                            get disabled() {
                                              return s(pe);
                                            }
                                          });
                                        }
                                      },
                                      $$slots: { default: !0 }
                                    });
                                  }, De = (Be) => {
                                    Ra(Be, {
                                      get content() {
                                        return s(ke).tooltip;
                                      },
                                      hoverDelay: 500,
                                      children: (ut, mt) => {
                                        {
                                          let pe = /* @__PURE__ */ he(() => s(ke).disabled(s(O)));
                                          nd(ut, {
                                            class: "button",
                                            variant: "raised",
                                            callback: () => s(ke).callback(s(O)),
                                            get disabled() {
                                              return s(pe);
                                            },
                                            children: (W, j) => {
                                              var ie = ne(), Ue = X(ie);
                                              {
                                                var ft = (_t) => {
                                                  eb(_t, { svgStyles: "margin: unset" });
                                                }, It = (_t) => {
                                                  var Vt = ne(), yr = X(Vt);
                                                  {
                                                    var gt = (St) => {
                                                      il(St, { svgStyles: "margin: unset" });
                                                    }, Ht = (St) => {
                                                      var On = ne(), _i = X(On);
                                                      {
                                                        var jn = (et) => {
                                                          rb(et, { svgStyles: "margin: unset" });
                                                        }, Xe = (et) => {
                                                          var tt = ne(), Nt = X(tt);
                                                          {
                                                            var vn = (dt) => {
                                                              ab(dt, { svgStyles: "margin: unset" });
                                                            }, ot = (dt) => {
                                                              var wt = ne(), nt = X(wt);
                                                              {
                                                                var Dt = (Mt) => {
                                                                  ub(Mt, { svgStyles: "margin: unset" });
                                                                }, Rn = (Mt) => {
                                                                  var Et = ne(), Ut = X(Et);
                                                                  {
                                                                    var ln = (un) => {
                                                                      ud(un, { svgStyles: "margin: unset" });
                                                                    }, Gt = (un) => {
                                                                      var Jt = ne(), Wn = X(Jt);
                                                                      {
                                                                        var Vr = (zt) => {
                                                                          cd(zt, { svgStyles: "margin: unset" });
                                                                        }, cn = (zt) => {
                                                                          sb(zt, { svgStyles: "margin: unset" });
                                                                        };
                                                                        oe(
                                                                          Wn,
                                                                          (zt) => {
                                                                            s(ke).icon === "delete" ? zt(Vr) : zt(cn, !1);
                                                                          },
                                                                          !0
                                                                        );
                                                                      }
                                                                      x(un, Jt);
                                                                    };
                                                                    oe(
                                                                      Ut,
                                                                      (un) => {
                                                                        s(ke).icon === "edit" ? un(ln) : un(Gt, !1);
                                                                      },
                                                                      !0
                                                                    );
                                                                  }
                                                                  x(Mt, Et);
                                                                };
                                                                oe(
                                                                  nt,
                                                                  (Mt) => {
                                                                    s(ke).icon === "remove" ? Mt(Dt) : Mt(Rn, !1);
                                                                  },
                                                                  !0
                                                                );
                                                              }
                                                              x(dt, wt);
                                                            };
                                                            oe(
                                                              Nt,
                                                              (dt) => {
                                                                s(ke).icon === "find-in-page" ? dt(vn) : dt(ot, !1);
                                                              },
                                                              !0
                                                            );
                                                          }
                                                          x(et, tt);
                                                        };
                                                        oe(
                                                          _i,
                                                          (et) => {
                                                            s(ke).icon === "download" ? et(jn) : et(Xe, !1);
                                                          },
                                                          !0
                                                        );
                                                      }
                                                      x(St, On);
                                                    };
                                                    oe(
                                                      yr,
                                                      (St) => {
                                                        s(ke).icon === "cancel" ? St(gt) : St(Ht, !1);
                                                      },
                                                      !0
                                                    );
                                                  }
                                                  x(_t, Vt);
                                                };
                                                oe(Ue, (_t) => {
                                                  s(ke).icon === "add" ? _t(ft) : _t(It, !1);
                                                });
                                              }
                                              x(W, ie);
                                            },
                                            $$slots: { default: !0 }
                                          });
                                        }
                                      },
                                      $$slots: { default: !0 }
                                    });
                                  };
                                  oe(Q, (Be) => {
                                    s(ke).iconComponent ? Be(ge) : Be(De, !1);
                                  });
                                }
                                x(Ge, V);
                              }), x(we, He);
                            },
                            $$slots: { default: !0 }
                          });
                        }, ee = (ae) => {
                          pa(ae, {
                            get numeric() {
                              return s(J).numeric;
                            },
                            get style() {
                              return s(J).cellStyle;
                            },
                            children: (we, Re) => {
                              var He = ne(), Ge = X(He);
                              {
                                var ke = (Q) => {
                                  const ge = /* @__PURE__ */ he(() => s(J).cellRenderer);
                                  var De = ne(), Be = X(De);
                                  rr(Be, () => s(ge), (ut, mt) => {
                                    mt(ut, Je(
                                      {
                                        get row() {
                                          return s(O);
                                        },
                                        get value() {
                                          return s(O)[s(J).field];
                                        },
                                        get col() {
                                          return s(J);
                                        }
                                      },
                                      () => s(J).cellRendererProps ?? {}
                                    ));
                                  }), x(Q, De);
                                }, V = (Q) => {
                                  var ge = ne(), De = X(ge);
                                  {
                                    var Be = (mt) => {
                                      var pe = vt();
                                      Oe((W) => $e(pe, W), [
                                        () => s(J).valueFormatter(s(O)[s(J).field])
                                      ]), x(mt, pe);
                                    }, ut = (mt) => {
                                      var pe = vt();
                                      Oe(() => $e(pe, s(O)[s(J).field] ?? "")), x(mt, pe);
                                    };
                                    oe(
                                      De,
                                      (mt) => {
                                        s(J).valueFormatter ? mt(Be) : mt(ut, !1);
                                      },
                                      !0
                                    );
                                  }
                                  x(Q, ge);
                                };
                                oe(Ge, (Q) => {
                                  s(J).cellRenderer ? Q(ke) : Q(V, !1);
                                });
                              }
                              x(we, He);
                            },
                            $$slots: { default: !0 }
                          });
                        };
                        oe(se, (ae) => {
                          s(J).field === "actions" ? ae(Ee) : ae(ee, !1);
                        });
                      }
                      x(P, $);
                    }), x(le, M);
                  },
                  $$slots: { default: !0 }
                });
              }), x(z, te);
            };
            oe(C, (z) => {
              i().length === 0 ? z(F) : z(U, !1);
            });
          }
          x(G, R);
        },
        $$slots: { default: !0 }
      }), x(L, w);
    },
    $$slots: { progress: !0, default: !0 }
  }), xe(), o();
}
yn(["input"]);
function Tt(t) {
  return typeof t == "function";
}
function ol(t) {
  var e = function(r) {
    Error.call(r), r.stack = new Error().stack;
  }, n = t(e);
  return n.prototype = Object.create(Error.prototype), n.prototype.constructor = n, n;
}
var ss = ol(function(t) {
  return function(n) {
    t(this), this.message = n ? n.length + ` errors occurred during unsubscription:
` + n.map(function(r, i) {
      return i + 1 + ") " + r.toString();
    }).join(`
  `) : "", this.name = "UnsubscriptionError", this.errors = n;
  };
});
function So(t, e) {
  if (t) {
    var n = t.indexOf(e);
    0 <= n && t.splice(n, 1);
  }
}
var Va = function() {
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
            for (var u = kt(o), l = u.next(); !l.done; l = u.next()) {
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
      if (Tt(d))
        try {
          d();
        } catch (p) {
          a = p instanceof ss ? p.errors : [p];
        }
      var m = this._finalizers;
      if (m) {
        this._finalizers = null;
        try {
          for (var f = kt(m), g = f.next(); !g.done; g = f.next()) {
            var h = g.value;
            try {
              bu(h);
            } catch (p) {
              a = a ?? [], p instanceof ss ? a = er(er([], br(a)), br(p.errors)) : a.push(p);
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
        throw new ss(a);
    }
  }, t.prototype.add = function(e) {
    var n;
    if (e && e !== this)
      if (this.closed)
        bu(e);
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
    n === e ? this._parentage = null : Array.isArray(n) && So(n, e);
  }, t.prototype.remove = function(e) {
    var n = this._finalizers;
    n && So(n, e), e instanceof t && e._removeParent(this);
  }, t.EMPTY = function() {
    var e = new t();
    return e.closed = !0, e;
  }(), t;
}(), hd = Va.EMPTY;
function vd(t) {
  return t instanceof Va || t && "closed" in t && Tt(t.remove) && Tt(t.add) && Tt(t.unsubscribe);
}
function bu(t) {
  Tt(t) ? t() : t.unsubscribe();
}
var _y = {
  Promise: void 0
}, yy = {
  setTimeout: function(t, e) {
    for (var n = [], r = 2; r < arguments.length; r++)
      n[r - 2] = arguments[r];
    return setTimeout.apply(void 0, er([t, e], br(n)));
  },
  clearTimeout: function(t) {
    return clearTimeout(t);
  },
  delegate: void 0
};
function md(t) {
  yy.setTimeout(function() {
    throw t;
  });
}
function _u() {
}
function lo(t) {
  t();
}
var sl = function(t) {
  ze(e, t);
  function e(n) {
    var r = t.call(this) || this;
    return r.isStopped = !1, n ? (r.destination = n, vd(n) && n.add(r)) : r.destination = Sy, r;
  }
  return e.create = function(n, r, i) {
    return new Ms(n, r, i);
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
}(Va), Iy = function() {
  function t(e) {
    this.partialObserver = e;
  }
  return t.prototype.next = function(e) {
    var n = this.partialObserver;
    if (n.next)
      try {
        n.next(e);
      } catch (r) {
        to(r);
      }
  }, t.prototype.error = function(e) {
    var n = this.partialObserver;
    if (n.error)
      try {
        n.error(e);
      } catch (r) {
        to(r);
      }
    else
      to(e);
  }, t.prototype.complete = function() {
    var e = this.partialObserver;
    if (e.complete)
      try {
        e.complete();
      } catch (n) {
        to(n);
      }
  }, t;
}(), Ms = function(t) {
  ze(e, t);
  function e(n, r, i) {
    var a = t.call(this) || this, o;
    return Tt(n) || !n ? o = {
      next: n ?? void 0,
      error: r ?? void 0,
      complete: i ?? void 0
    } : o = n, a.destination = new Iy(o), a;
  }
  return e;
}(sl);
function to(t) {
  md(t);
}
function Ey(t) {
  throw t;
}
var Sy = {
  closed: !0,
  next: _u,
  error: Ey,
  complete: _u
}, ll = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}();
function ul(t) {
  return t;
}
function Ay(t) {
  return t.length === 0 ? ul : t.length === 1 ? t[0] : function(n) {
    return t.reduce(function(r, i) {
      return i(r);
    }, n);
  };
}
var _n = function() {
  function t(e) {
    e && (this._subscribe = e);
  }
  return t.prototype.lift = function(e) {
    var n = new t();
    return n.source = this, n.operator = e, n;
  }, t.prototype.subscribe = function(e, n, r) {
    var i = this, a = Ty(e) ? e : new Ms(e, n, r);
    return lo(function() {
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
    return n = yu(n), new n(function(i, a) {
      var o = new Ms({
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
  }, t.prototype[ll] = function() {
    return this;
  }, t.prototype.pipe = function() {
    for (var e = [], n = 0; n < arguments.length; n++)
      e[n] = arguments[n];
    return Ay(e)(this);
  }, t.prototype.toPromise = function(e) {
    var n = this;
    return e = yu(e), new e(function(r, i) {
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
function yu(t) {
  var e;
  return (e = t ?? _y.Promise) !== null && e !== void 0 ? e : Promise;
}
function Cy(t) {
  return t && Tt(t.next) && Tt(t.error) && Tt(t.complete);
}
function Ty(t) {
  return t && t instanceof sl || Cy(t) && vd(t);
}
function xy(t) {
  return Tt(t == null ? void 0 : t.lift);
}
function Ln(t) {
  return function(e) {
    if (xy(e))
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
function Vn(t, e, n, r, i) {
  return new wy(t, e, n, r, i);
}
var wy = function(t) {
  ze(e, t);
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
}(sl), Ly = ol(function(t) {
  return function() {
    t(this), this.name = "ObjectUnsubscribedError", this.message = "object unsubscribed";
  };
}), Ps = function(t) {
  ze(e, t);
  function e() {
    var n = t.call(this) || this;
    return n.closed = !1, n.currentObservers = null, n.observers = [], n.isStopped = !1, n.hasError = !1, n.thrownError = null, n;
  }
  return e.prototype.lift = function(n) {
    var r = new Iu(this, this);
    return r.operator = n, r;
  }, e.prototype._throwIfClosed = function() {
    if (this.closed)
      throw new Ly();
  }, e.prototype.next = function(n) {
    var r = this;
    lo(function() {
      var i, a;
      if (r._throwIfClosed(), !r.isStopped) {
        r.currentObservers || (r.currentObservers = Array.from(r.observers));
        try {
          for (var o = kt(r.currentObservers), u = o.next(); !u.done; u = o.next()) {
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
    lo(function() {
      if (r._throwIfClosed(), !r.isStopped) {
        r.hasError = r.isStopped = !0, r.thrownError = n;
        for (var i = r.observers; i.length; )
          i.shift().error(n);
      }
    });
  }, e.prototype.complete = function() {
    var n = this;
    lo(function() {
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
    return a || o ? hd : (this.currentObservers = null, u.push(n), new Va(function() {
      r.currentObservers = null, So(u, n);
    }));
  }, e.prototype._checkFinalizedStatuses = function(n) {
    var r = this, i = r.hasError, a = r.thrownError, o = r.isStopped;
    i ? n.error(a) : o && n.complete();
  }, e.prototype.asObservable = function() {
    var n = new _n();
    return n.source = this, n;
  }, e.create = function(n, r) {
    return new Iu(n, r);
  }, e;
}(_n), Iu = function(t) {
  ze(e, t);
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
    return (i = (r = this.source) === null || r === void 0 ? void 0 : r.subscribe(n)) !== null && i !== void 0 ? i : hd;
  }, e;
}(Ps), Oy = {
  now: function() {
    return Date.now();
  }
}, Ry = function(t) {
  ze(e, t);
  function e(n, r) {
    return t.call(this) || this;
  }
  return e.prototype.schedule = function(n, r) {
    return this;
  }, e;
}(Va), Eu = {
  setInterval: function(t, e) {
    for (var n = [], r = 2; r < arguments.length; r++)
      n[r - 2] = arguments[r];
    return setInterval.apply(void 0, er([t, e], br(n)));
  },
  clearInterval: function(t) {
    return clearInterval(t);
  },
  delegate: void 0
}, Dy = function(t) {
  ze(e, t);
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
    return i === void 0 && (i = 0), Eu.setInterval(n.flush.bind(n, this), i);
  }, e.prototype.recycleAsyncId = function(n, r, i) {
    if (i === void 0 && (i = 0), i != null && this.delay === i && this.pending === !1)
      return r;
    r != null && Eu.clearInterval(r);
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
      this.work = this.state = this.scheduler = null, this.pending = !1, So(a, this), r != null && (this.id = this.recycleAsyncId(i, r, null)), this.delay = null, t.prototype.unsubscribe.call(this);
    }
  }, e;
}(Ry), Su = function() {
  function t(e, n) {
    n === void 0 && (n = t.now), this.schedulerActionCtor = e, this.now = n;
  }
  return t.prototype.schedule = function(e, n, r) {
    return n === void 0 && (n = 0), new this.schedulerActionCtor(this, e).schedule(r, n);
  }, t.now = Oy.now, t;
}(), My = function(t) {
  ze(e, t);
  function e(n, r) {
    r === void 0 && (r = Su.now);
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
}(Su), Py = new My(Dy), Hy = new _n(function(t) {
  return t.complete();
});
function Ny(t) {
  return t && Tt(t.schedule);
}
function gd(t) {
  return t[t.length - 1];
}
function pd(t) {
  return Ny(gd(t)) ? t.pop() : void 0;
}
function Uy(t, e) {
  return typeof gd(t) == "number" ? t.pop() : e;
}
var bd = function(t) {
  return t && typeof t.length == "number" && typeof t != "function";
};
function _d(t) {
  return Tt(t == null ? void 0 : t.then);
}
function yd(t) {
  return Tt(t[ll]);
}
function Id(t) {
  return Symbol.asyncIterator && Tt(t == null ? void 0 : t[Symbol.asyncIterator]);
}
function Ed(t) {
  return new TypeError("You provided " + (t !== null && typeof t == "object" ? "an invalid object" : "'" + t + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
}
function Fy() {
  return typeof Symbol != "function" || !Symbol.iterator ? "@@iterator" : Symbol.iterator;
}
var Sd = Fy();
function Ad(t) {
  return Tt(t == null ? void 0 : t[Sd]);
}
function Cd(t) {
  return Gh(this, arguments, function() {
    var n, r, i, a;
    return Qs(this, function(o) {
      switch (o.label) {
        case 0:
          n = t.getReader(), o.label = 1;
        case 1:
          o.trys.push([1, , 9, 10]), o.label = 2;
        case 2:
          return [4, Hi(n.read())];
        case 3:
          return r = o.sent(), i = r.value, a = r.done, a ? [4, Hi(void 0)] : [3, 5];
        case 4:
          return [2, o.sent()];
        case 5:
          return [4, Hi(i)];
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
function Td(t) {
  return Tt(t == null ? void 0 : t.getReader);
}
function pi(t) {
  if (t instanceof _n)
    return t;
  if (t != null) {
    if (yd(t))
      return ky(t);
    if (bd(t))
      return By(t);
    if (_d(t))
      return Vy(t);
    if (Id(t))
      return xd(t);
    if (Ad(t))
      return Gy(t);
    if (Td(t))
      return jy(t);
  }
  throw Ed(t);
}
function ky(t) {
  return new _n(function(e) {
    var n = t[ll]();
    if (Tt(n.subscribe))
      return n.subscribe(e);
    throw new TypeError("Provided object does not correctly implement Symbol.observable");
  });
}
function By(t) {
  return new _n(function(e) {
    for (var n = 0; n < t.length && !e.closed; n++)
      e.next(t[n]);
    e.complete();
  });
}
function Vy(t) {
  return new _n(function(e) {
    t.then(function(n) {
      e.closed || (e.next(n), e.complete());
    }, function(n) {
      return e.error(n);
    }).then(null, md);
  });
}
function Gy(t) {
  return new _n(function(e) {
    var n, r;
    try {
      for (var i = kt(t), a = i.next(); !a.done; a = i.next()) {
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
function xd(t) {
  return new _n(function(e) {
    Wy(t, e).catch(function(n) {
      return e.error(n);
    });
  });
}
function jy(t) {
  return xd(Cd(t));
}
function Wy(t, e) {
  var n, r, i, a;
  return wc(this, void 0, void 0, function() {
    var o, u;
    return Qs(this, function(l) {
      switch (l.label) {
        case 0:
          l.trys.push([0, 5, 6, 11]), n = jh(t), l.label = 1;
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
function oi(t, e, n, r, i) {
  r === void 0 && (r = 0), i === void 0 && (i = !1);
  var a = e.schedule(function() {
    n(), i ? t.add(this.schedule(null, r)) : this.unsubscribe();
  }, r);
  if (t.add(a), !i)
    return a;
}
function wd(t, e) {
  return e === void 0 && (e = 0), Ln(function(n, r) {
    n.subscribe(Vn(r, function(i) {
      return oi(r, t, function() {
        return r.next(i);
      }, e);
    }, function() {
      return oi(r, t, function() {
        return r.complete();
      }, e);
    }, function(i) {
      return oi(r, t, function() {
        return r.error(i);
      }, e);
    }));
  });
}
function Ld(t, e) {
  return e === void 0 && (e = 0), Ln(function(n, r) {
    r.add(t.schedule(function() {
      return n.subscribe(r);
    }, e));
  });
}
function qy(t, e) {
  return pi(t).pipe(Ld(e), wd(e));
}
function zy(t, e) {
  return pi(t).pipe(Ld(e), wd(e));
}
function Ky(t, e) {
  return new _n(function(n) {
    var r = 0;
    return e.schedule(function() {
      r === t.length ? n.complete() : (n.next(t[r++]), n.closed || this.schedule());
    });
  });
}
function Xy(t, e) {
  return new _n(function(n) {
    var r;
    return oi(n, e, function() {
      r = t[Sd](), oi(n, e, function() {
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
      return Tt(r == null ? void 0 : r.return) && r.return();
    };
  });
}
function Od(t, e) {
  if (!t)
    throw new Error("Iterable cannot be null");
  return new _n(function(n) {
    oi(n, e, function() {
      var r = t[Symbol.asyncIterator]();
      oi(n, e, function() {
        r.next().then(function(i) {
          i.done ? n.complete() : n.next(i.value);
        });
      }, 0, !0);
    });
  });
}
function Yy(t, e) {
  return Od(Cd(t), e);
}
function Zy(t, e) {
  if (t != null) {
    if (yd(t))
      return qy(t, e);
    if (bd(t))
      return Ky(t, e);
    if (_d(t))
      return zy(t, e);
    if (Id(t))
      return Od(t, e);
    if (Ad(t))
      return Xy(t, e);
    if (Td(t))
      return Yy(t, e);
  }
  throw Ed(t);
}
function cl(t, e) {
  return e ? Zy(t, e) : pi(t);
}
function Rd() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  var n = pd(t);
  return cl(t, n);
}
function Un(t, e) {
  return Ln(function(n, r) {
    var i = 0;
    n.subscribe(Vn(r, function(a) {
      r.next(t.call(e, a, i++));
    }));
  });
}
function Qy(t, e, n, r, i, a, o, u) {
  var l = [], c = 0, d = 0, m = !1, f = function() {
    m && !l.length && !c && e.complete();
  }, g = function(p) {
    return c < r ? h(p) : l.push(p);
  }, h = function(p) {
    c++;
    var b = !1;
    pi(n(p, d++)).subscribe(Vn(e, function(y) {
      e.next(y);
    }, function() {
      b = !0;
    }, void 0, function() {
      if (b)
        try {
          c--;
          for (var y = function() {
            var A = l.shift();
            o || h(A);
          }; l.length && c < r; )
            y();
          f();
        } catch (A) {
          e.error(A);
        }
    }));
  };
  return t.subscribe(Vn(e, g, function() {
    m = !0, f();
  })), function() {
  };
}
function Ao(t, e, n) {
  return n === void 0 && (n = 1 / 0), Tt(e) ? Ao(function(r, i) {
    return Un(function(a, o) {
      return e(r, a, i, o);
    })(pi(t(r, i)));
  }, n) : (typeof e == "number" && (n = e), Ln(function(r, i) {
    return Qy(r, i, t, n);
  }));
}
function Jy(t) {
  return t === void 0 && (t = 1 / 0), Ao(ul, t);
}
function Au(t, e) {
  return Ln(function(n, r) {
    var i = 0;
    n.subscribe(Vn(r, function(a) {
      return t.call(e, a, i++) && r.next(a);
    }));
  });
}
function Dd(t) {
  return Ln(function(e, n) {
    var r = null, i = !1, a;
    r = e.subscribe(Vn(n, void 0, void 0, function(o) {
      a = pi(t(o, Dd(t)(e))), r ? (r.unsubscribe(), r = null, a.subscribe(n)) : i = !0;
    })), i && (r.unsubscribe(), r = null, a.subscribe(n));
  });
}
function $y(t, e) {
  return Tt(e) ? Ao(t, e, 1) : Ao(t, 1);
}
function eI(t, e) {
  return e === void 0 && (e = Py), Ln(function(n, r) {
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
    n.subscribe(Vn(r, function(c) {
      a = c, o = e.now(), i || (i = e.schedule(l, t), r.add(i));
    }, function() {
      u(), r.complete();
    }, void 0, function() {
      a = i = null;
    }));
  });
}
function _a(t) {
  return t <= 0 ? function() {
    return Hy;
  } : Ln(function(e, n) {
    var r = 0;
    e.subscribe(Vn(n, function(i) {
      ++r <= t && (n.next(i), t <= r && n.complete());
    }));
  });
}
function Cu(t) {
  return Ln(function(e, n) {
    try {
      e.subscribe(n);
    } finally {
      n.add(t);
    }
  });
}
function tI() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  var n = pd(t), r = Uy(t, 1 / 0);
  return Ln(function(i, a) {
    Jy(r)(cl(er([i], br(t)), n)).subscribe(a);
  });
}
function nI() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  return tI.apply(void 0, er([], br(t)));
}
function Tu(t, e) {
  return Ln(function(n, r) {
    var i = null, a = 0, o = !1, u = function() {
      return o && !i && r.complete();
    };
    n.subscribe(Vn(r, function(l) {
      i == null || i.unsubscribe();
      var c = 0, d = a++;
      pi(t(l, d)).subscribe(i = Vn(r, function(m) {
        return r.next(e ? e(l, m, d, c++) : m);
      }, function() {
        i = null, u();
      }));
    }, function() {
      o = !0, u();
    }));
  });
}
function xi(t, e, n) {
  var r = Tt(t) || e || n ? { next: t, error: e, complete: n } : t;
  return r ? Ln(function(i, a) {
    var o;
    (o = r.subscribe) === null || o === void 0 || o.call(r);
    var u = !0;
    i.subscribe(Vn(a, function(l) {
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
  }) : ul;
}
class rI {
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
function Md(t) {
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
var iI = /* @__PURE__ */ function() {
  function t(e, n, r, i) {
    i === void 0 && (i = "download_load"), this.originalEvent = e, this.xhr = n, this.request = r, this.type = i;
    var a = n.status, o = n.responseType;
    this.status = a ?? 0, this.responseType = o ?? "";
    var u = n.getAllResponseHeaders();
    this.responseHeaders = u ? u.split(`
`).reduce(function(d, m) {
      var f = m.indexOf(": ");
      return d[m.slice(0, f)] = m.slice(f + 2), d;
    }, {}) : {}, this.response = Md(n);
    var l = e.loaded, c = e.total;
    this.loaded = l, this.total = c;
  }
  return t;
}(), Co = ol(function(t) {
  return function(n, r, i) {
    this.message = n, this.name = "AjaxError", this.xhr = r, this.request = i, this.status = r.status, this.responseType = r.responseType;
    var a;
    try {
      a = Md(r);
    } catch {
      a = r.responseText;
    }
    this.response = a;
  };
}), aI = function() {
  function t(e, n) {
    return Co.call(this, "ajax timeout", e, n), this.name = "AjaxTimeoutError", this;
  }
  return t.prototype = Object.create(Co.prototype), t;
}();
function oI(t, e) {
  return bi({ method: "GET", url: t, headers: e });
}
function sI(t, e, n) {
  return bi({ method: "POST", url: t, body: e, headers: n });
}
function lI(t, e) {
  return bi({ method: "DELETE", url: t, headers: e });
}
function uI(t, e, n) {
  return bi({ method: "PUT", url: t, body: e, headers: n });
}
function cI(t, e, n) {
  return bi({ method: "PATCH", url: t, body: e, headers: n });
}
var dI = Un(function(t) {
  return t.response;
});
function fI(t, e) {
  return dI(bi({
    method: "GET",
    url: t,
    headers: e
  }));
}
var bi = function() {
  var t = function(e) {
    var n = typeof e == "string" ? {
      url: e
    } : e;
    return vI(n);
  };
  return t.get = oI, t.post = sI, t.delete = lI, t.put = uI, t.patch = cI, t.getJSON = fI, t;
}(), hI = "upload", xu = "download", ls = "loadstart", us = "progress", wu = "load";
function vI(t) {
  return new _n(function(e) {
    var n, r, i = be({ async: !0, crossDomain: !1, withCredentials: !1, method: "GET", timeout: 0, responseType: "json" }, t), a = i.queryParams, o = i.body, u = i.headers, l = i.url;
    if (!l)
      throw new TypeError("url is required");
    if (a) {
      var c;
      if (l.includes("?")) {
        var d = l.split("?");
        if (2 < d.length)
          throw new TypeError("invalid url");
        c = new URLSearchParams(d[1]), new URLSearchParams(a).forEach(function(U, z) {
          return c.set(z, U);
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
    var A = mI(o, m), I = be(be({}, i), {
      url: l,
      headers: m,
      body: A
    }), _;
    _ = t.createXHR ? t.createXHR() : new XMLHttpRequest();
    {
      var S = t.progressSubscriber, E = t.includeDownloadProgress, L = E === void 0 ? !1 : E, T = t.includeUploadProgress, w = T === void 0 ? !1 : T, k = function(U, z) {
        _.addEventListener(U, function() {
          var te, H = z();
          (te = S == null ? void 0 : S.error) === null || te === void 0 || te.call(S, H), e.error(H);
        });
      };
      k("timeout", function() {
        return new aI(_, I);
      }), k("abort", function() {
        return new Co("aborted", _, I);
      });
      var Z = function(U, z) {
        return new iI(z, _, I, U + "_" + z.type);
      }, G = function(U, z, te) {
        U.addEventListener(z, function(H) {
          e.next(Z(te, H));
        });
      };
      w && [ls, us, wu].forEach(function(U) {
        return G(_.upload, U, hI);
      }), S && [ls, us].forEach(function(U) {
        return _.upload.addEventListener(U, function(z) {
          var te;
          return (te = S == null ? void 0 : S.next) === null || te === void 0 ? void 0 : te.call(S, z);
        });
      }), L && [ls, us].forEach(function(U) {
        return G(_, U, xu);
      });
      var q = function(U) {
        var z = "ajax error" + (U ? " " + U : "");
        e.error(new Co(z, _, I));
      };
      _.addEventListener("error", function(U) {
        var z;
        (z = S == null ? void 0 : S.error) === null || z === void 0 || z.call(S, U), q();
      }), _.addEventListener(wu, function(U) {
        var z, te, H = _.status;
        if (H < 400) {
          (z = S == null ? void 0 : S.complete) === null || z === void 0 || z.call(S);
          var D = void 0;
          try {
            D = Z(xu, U);
          } catch (O) {
            e.error(O);
            return;
          }
          e.next(D), e.complete();
        } else
          (te = S == null ? void 0 : S.error) === null || te === void 0 || te.call(S, U), q(H);
      });
    }
    var R = I.user, C = I.method, F = I.async;
    R ? _.open(C, l, F, R, I.password) : _.open(C, l, F), F && (_.timeout = I.timeout, _.responseType = I.responseType), "withCredentials" in _ && (_.withCredentials = I.withCredentials);
    for (var f in m)
      m.hasOwnProperty(f) && _.setRequestHeader(f, m[f]);
    return A ? _.send(A) : _.send(), function() {
      _ && _.readyState !== 4 && _.abort();
    };
  });
}
function mI(t, e) {
  var n;
  if (!t || typeof t == "string" || II(t) || EI(t) || pI(t) || bI(t) || _I(t) || SI(t))
    return t;
  if (yI(t))
    return t.buffer;
  if (typeof t == "object")
    return e["content-type"] = (n = e["content-type"]) !== null && n !== void 0 ? n : "application/json;charset=utf-8", JSON.stringify(t);
  throw new TypeError("Unknown body type");
}
var gI = Object.prototype.toString;
function dl(t, e) {
  return gI.call(t) === "[object " + e + "]";
}
function pI(t) {
  return dl(t, "ArrayBuffer");
}
function bI(t) {
  return dl(t, "File");
}
function _I(t) {
  return dl(t, "Blob");
}
function yI(t) {
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView(t);
}
function II(t) {
  return typeof FormData < "u" && t instanceof FormData;
}
function EI(t) {
  return typeof URLSearchParams < "u" && t instanceof URLSearchParams;
}
function SI(t) {
  return typeof ReadableStream < "u" && t instanceof ReadableStream;
}
class AI {
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
const CI = new AI("https://demo.compas.energy", {}, "DSOM Versatel Production URL"), TI = [CI], xI = TI[0].getUrl();
class Pd {
  constructor(e = {}) {
    this.configuration = e;
  }
  get basePath() {
    return this.configuration.basePath ?? xI;
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
class wI {
  constructor(e = new Pd()) {
    this.configuration = e, this.middleware = [], this.withMiddleware = (n) => {
      const r = this.clone();
      return r.middleware = r.middleware.concat(n), r;
    }, this.withPreMiddleware = (n) => this.withMiddleware(n.map((r) => ({ pre: r }))), this.withPostMiddleware = (n) => this.withMiddleware(n.map((r) => ({ post: r }))), this.createRequestArgs = ({ url: n, query: r, method: i, headers: a, body: o, responseType: u }) => ({
      url: `${this.configuration.basePath}${n}${r && Object.keys(r).length ? `?${LI(r)}` : ""}`,
      method: i,
      headers: a,
      body: o instanceof FormData ? o : JSON.stringify(o),
      responseType: u ?? "json"
    }), this.rxjsRequest = (n) => Rd(n).pipe(
      Un((r) => (this.middleware.filter((i) => i.pre).forEach((i) => r = i.pre(r)), r)),
      $y(
        (r) => bi(r).pipe(
          Un((i) => (this.middleware.filter((a) => a.post).forEach((a) => i = a.post(i)), i))
        )
      )
    ), this.clone = () => Object.assign(Object.create(Object.getPrototypeOf(this)), this), this.middleware = e.middleware;
  }
  request(e, n) {
    return this.rxjsRequest(this.createRequestArgs(e)).pipe(
      Un((r) => {
        const { status: i, response: a } = r;
        if (i >= 200 && i < 300)
          return (n == null ? void 0 : n.response) === "raw" ? r : a;
        throw r;
      })
    );
  }
}
const vr = (t) => encodeURIComponent(`${t}`), LI = (t) => Object.entries(t).map(
  ([e, n]) => n instanceof Array ? n.map((r) => `${vr(e)}=${vr(r)}`).join("&") : `${vr(e)}=${vr(n)}`
).join("&"), wi = (t, e, n) => {
  if (t == null)
    throw new Error(`Parameter "${e}" was null or undefined when calling "${n}".`);
};
class OI extends wI {
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
class Mi {
  constructor() {
    this.endpoint = "/compas-scl-data-service";
  }
  static getInstance() {
    return Mi.instance || (Mi.instance = new Mi()), Mi.instance;
  }
  searchFiles(e) {
    return this.generateApiClient(this.endpoint).searchForResources({
      dataResourceSearch: this.mapToDataResourceSearch(e)
    }).pipe(
      Au((r) => !!r || !!r.results),
      Un((r) => r.results),
      Un(
        (r) => r.map((i) => this.mapToFileSearchResult(i))
      )
    );
  }
  getHistoryFiles(e) {
    return this.generateApiClient(this.endpoint).retrieveDataResourceHistory({
      id: e
    }).pipe(
      Au((r) => !!r || !!r.versions),
      Un((r) => r.versions),
      Un(
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
    return new rI(
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
    const n = new Pd({
      basePath: e
      // accessToken: authInfo.token,
    });
    return new OI(n);
  }
}
var xr;
class Lu {
  constructor() {
    rt(this, xr, Bt([]));
  }
  get store() {
    return ue(this, xr);
  }
  updateData(e) {
    ue(this, xr).set(e);
  }
  addData(e) {
    ue(this, xr).update((n) => [...n, e]);
  }
  removeData(e) {
    ue(this, xr).update((n) => n.filter((r) => r.uuid !== e));
  }
  getData(e) {
    return Tc(ue(this, xr)).find((n) => n.uuid === e);
  }
}
xr = new WeakMap();
bm({ en: Gm, de: Om });
var RI = /* @__PURE__ */ de("<h3> </h3>"), DI = /* @__PURE__ */ de("<div><!></div>"), MI = /* @__PURE__ */ de("<!> <!>", 1), PI = /* @__PURE__ */ de("<div><!></div>"), HI = /* @__PURE__ */ de('<div class="oscd-app"><div class="version-editor-container svelte-vqh57v"><!> <div class="search-filter svelte-vqh57v"><!></div> <div class="table-container svelte-vqh57v"><!></div></div></div> <!> <!>', 1);
function NI(t, e) {
  Te(e, !0);
  const n = () => kn(pm, "$_", r), [r, i] = ir(), a = Mi.getInstance();
  let o = /* @__PURE__ */ ve(void 0);
  const u = new Ps(), l = new Ps(), c = l.pipe(
    nI(u.pipe(eI(200))),
    Un(() => T(s(S))),
    xi(() => {
      K(f, !1);
    }),
    Tu((O) => a.searchFiles(O).pipe(
      Un((le) => le.filter((re) => !re.deleted)),
      xi((le) => {
        [...le], d().updateData(le);
      }),
      Cu(() => {
        K(f, !0);
      })
    ))
  );
  let d = v(e, "dataStore", 19, () => new Lu()), m = v(e, "historyStore", 19, () => new Lu()), f = /* @__PURE__ */ ve(!0), g = /* @__PURE__ */ ve(!1), h = /* @__PURE__ */ ve("");
  at(() => {
    const O = c.subscribe();
    return l.next(), () => O.unsubscribe();
  });
  function p(O) {
    return new Date(O).toLocaleDateString();
  }
  const b = {
    headerName: "",
    field: "actions",
    numeric: !1,
    filter: !1,
    filterType: "text",
    minWidth: "100px",
    sortable: !1
  };
  let y = /* @__PURE__ */ he(() => [
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
      valueFormatter: p
    },
    {
      headerName: n()("version"),
      field: "version",
      numeric: !1,
      filter: !1,
      filterType: "text",
      sortable: !0
    },
    b
  ]), A = /* @__PURE__ */ he(() => [
    ...s(y),
    {
      headerName: "Comment",
      field: "comment",
      numeric: !1,
      filter: !1,
      filterType: "text",
      sortable: !0
    }
  ]);
  const I = [
    {
      icon: "edit",
      tooltip: "Open",
      callback: (O) => Z(O),
      disabled: (O) => !O.available
    },
    {
      icon: "find-in-page",
      tooltip: "View History",
      callback: (O) => w(O),
      disabled: () => !1
    },
    {
      icon: "download",
      tooltip: "Download",
      callback: (O) => L(O),
      disabled: (O) => !O.available
    },
    {
      icon: "delete",
      tooltip: "Delete",
      callback: (O) => E(O),
      disabled: () => !1
    }
  ], _ = [
    {
      icon: "download",
      tooltip: "Download",
      callback: (O) => L(O),
      disabled: (O) => !O.available
    }
  ];
  let S = /* @__PURE__ */ ve(Ie([
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
  async function E(O) {
    console.debug("deleteResource: ", O), (await uu(cu, {
      title: "Confirm Deletion",
      message: `Are you sure you want to delete the resource "${O.filename} (${O.uuid})"? This action cannot be undone.`,
      confirmActionText: "Delete",
      cancelActionText: "Cancel",
      confirmActionColor: "danger"
    })).type === "confirm" && a.deleteResource(O.type, O.uuid).pipe(_a(1)).subscribe({
      next: () => {
        u.next(null), Aa.success("Deleted resource", `Resource "${O.filename} (${O.uuid})" has been deleted.`);
      },
      error: (re) => {
        console.error(`Failed to delete resource "${O.filename} (${O.uuid})":`, re), Aa.error("Deletion failed", `Failed to delete resource "${O.filename} (${O.uuid})".`);
      }
    });
  }
  function L(O) {
    console.log("Download file: ", O), a.downloadSclData(O.uuid, O.type, O.version).pipe(_a(1), xi((le) => {
      const re = window.URL.createObjectURL(le), M = document.createElement("a");
      M.href = re, M.download = `${O.filename}.${O.type.toLowerCase()}`, M.style.display = "none", document.body.appendChild(M), M.click(), document.body.removeChild(M), window.URL.revokeObjectURL(re);
    })).subscribe();
  }
  function T(O) {
    const le = {
      uuid: null,
      filename: null,
      author: null,
      type: null,
      name: null,
      from: null,
      to: null
    };
    return O.forEach((re) => {
      if (re.key in le && re.type !== "date" && re.value)
        le[re.key] = re.value;
      else if (re.type === "date" && re.value) {
        const M = new Date(re.value);
        re.key === "from" ? le.from = M.toISOString() : re.key === "to" && (M.setHours(23, 59, 59, 999), le.to = M.toISOString());
      }
    }), s(h) && s(h).trim() !== "" && (le.filename = s(h).trim()), le;
  }
  function w(O) {
    K(o, O, !0), a.getHistoryFiles(O.uuid).pipe(_a(1), xi((le) => {
      K(g, !0), [...le], m().updateData(le);
    })).subscribe();
  }
  function k(O) {
    console.log("Dialog closed with result: ", O), K(g, !1);
  }
  async function Z(O) {
    if ((await uu(cu, {
      title: "Open File",
      message: `Do you want to open "${O.filename}"? 

Any unsaved changes in your current project will be lost.`,
      confirmActionText: "Open",
      cancelActionText: "Cancel"
    })).type !== "confirm")
      return;
    let re = "";
    a.downloadSclData(O.uuid, O.type, O.version).pipe(
      _a(1),
      xi((M) => {
        re = window.URL.createObjectURL(M);
      }),
      Tu(() => cl(fetch(re).then((M) => {
        if (M.status === 200)
          return M.text();
        throw new Error(`Failed to load ${O.filename}: ${M.status} ${M.statusText}`);
      }))),
      _a(1),
      Dd((M) => (Aa.error("Open Document Failed", `Failed to open document "${O.filename}".`), console.error(M), Rd(void 0))),
      xi((M) => {
        var J;
        if (!M)
          return;
        const B = O.filename, P = new DOMParser().parseFromString(M, "application/xml");
        (J = window.document.getElementsByTagName("open-scd")[0]) == null || J.dispatchEvent(new CustomEvent("open-doc", {
          bubbles: !0,
          composed: !0,
          detail: { localFile: !1, doc: P, docName: B }
        }));
      }),
      Cu(() => re && window.URL.revokeObjectURL(re))
    ).subscribe();
  }
  var G = HI(), q = X(G), R = fe(q), C = fe(R);
  Pp(C, {
    onClose: k,
    get open() {
      return s(g);
    },
    set open(M) {
      K(g, M, !0);
    },
    title: (M) => {
      var B = RI(), P = fe(B);
      Oe((J) => $e(P, J), [
        () => {
          var J;
          return n()("versionHistory.title", { values: { filename: (J = s(o)) == null ? void 0 : J.filename } });
        }
      ]), x(M, B);
    },
    content: (M) => {
      var B = DI(), P = fe(B);
      {
        let J = /* @__PURE__ */ he(() => n()("search"));
        pu(P, {
          get columnDefs() {
            return s(A);
          },
          get store() {
            return m();
          },
          get loadingDone() {
            return s(f);
          },
          get rowActions() {
            return _;
          },
          get searchInputLabel() {
            return s(J);
          }
        });
      }
      x(M, B);
    },
    actions: (M) => {
      var B = PI(), P = fe(B);
      nd(P, {
        callback: k,
        variant: "raised",
        children: (J, $) => {
          var se = MI(), Ee = X(se);
          il(Ee, {});
          var ee = _e(Ee, 2);
          td(ee, {
            children: (ae, we) => {
              var Re = vt();
              Oe((He) => $e(Re, He), [() => n()("done")]), x(ae, Re);
            },
            $$slots: { default: !0 }
          }), x(J, se);
        },
        $$slots: { default: !0 }
      }), x(M, B);
    },
    $$slots: { title: !0, content: !0, actions: !0 }
  });
  var F = _e(C, 2), U = fe(F);
  ay(U, {
    searchLabel: "Search file name...",
    onFilterChange: () => u.next(null),
    onSearchInput: () => u.next(null),
    get filters() {
      return s(S);
    },
    set filters(O) {
      K(S, O, !0);
    },
    get searchText() {
      return s(h);
    },
    set searchText(O) {
      K(h, O, !0);
    }
  });
  var z = _e(F, 2), te = fe(z);
  {
    let O = /* @__PURE__ */ he(() => n()("search"));
    pu(te, {
      emptyText: "No resources found.",
      get columnDefs() {
        return s(y);
      },
      get store() {
        return d();
      },
      get loadingDone() {
        return s(f);
      },
      get rowActions() {
        return I;
      },
      get searchInputLabel() {
        return s(O);
      }
    });
  }
  var H = _e(q, 2);
  y_(H, {});
  var D = _e(H, 2);
  Np(D, {}), x(t, G), xe(), i();
}
const Hd = "version-editor", Nd = "0.0.1";
var UI = /* @__PURE__ */ de('<!> <input type="hidden" name="package-name"/> <input type="hidden" name="package-version"/>', 1);
function FI(t, e) {
  Te(e, !0);
  let n = v(e, "dev", 3, !1);
  var r = UI(), i = X(r);
  {
    var a = (l) => {
      NI(l, {});
    };
    oe(i, (l) => {
      (e.doc || n()) && l(a);
    });
  }
  var o = _e(i, 2), u = _e(o, 2);
  Oe(() => {
    Ol(o, Hd), Ol(u, Nd);
  }), x(t, r), xe();
}
var Gi;
class jI extends HTMLElement {
  constructor() {
    super();
    rt(this, Gi);
    Fe(this, Gi, /* @__PURE__ */ ve(Ie({ doc: void 0, editCount: void 0 })));
  }
  get props() {
    return s(ue(this, Gi));
  }
  set props(n) {
    K(ue(this, Gi), n, !0);
  }
  connectedCallback() {
    this.attachShadow({ mode: "open" }), this.props.doc = this._doc, this.props.editCount = this._editCount;
    const n = kI();
    this.shadowRoot.appendChild(n);
    const r = () => eh(FI, { target: this.shadowRoot, props: this.props });
    n.addEventListener("load", r, { once: !0 }), n.addEventListener("error", r, { once: !0 });
  }
  set doc(n) {
    this._doc = n, this.props.doc = n;
  }
  set editCount(n) {
    this._editCount = n, this.props.editCount = n;
  }
}
Gi = new WeakMap();
function kI() {
  const t = `${Hd}-v${Nd}-style`, e = BI(), n = document.createElement("link");
  return n.rel = "stylesheet", n.type = "text/css", n.href = e, n.id = t, n;
}
function BI() {
  const t = new URL(import.meta.url), e = t.origin, n = t.pathname.split("/").slice(0, -1).filter(Boolean).join("/");
  return [e, n, "style.css"].filter(Boolean).join("/");
}
export {
  jI as default
};
