var Gd = Object.defineProperty;
var fl = (t) => {
  throw TypeError(t);
};
var jd = (t, e, n) => e in t ? Gd(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var Ei = (t, e, n) => jd(t, typeof e != "symbol" ? e + "" : e, n), Go = (t, e, n) => e.has(t) || fl("Cannot " + n);
var se = (t, e, n) => (Go(t, e, "read from private field"), n ? n.call(t) : e.get(t)), rt = (t, e, n) => e.has(t) ? fl("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, n), Ue = (t, e, n, r) => (Go(t, e, "write to private field"), r ? r.call(t, n) : e.set(t, n), n), Kt = (t, e, n) => (Go(t, e, "access private method"), n);
const Ft = Symbol(), Wd = "http://www.w3.org/1999/xhtml", qd = "http://www.w3.org/2000/svg", zd = "@attach", Lu = !1;
var Lo = Array.isArray, Kd = Array.prototype.indexOf, Ns = Array.from, so = Object.defineProperty, Or = Object.getOwnPropertyDescriptor, Ou = Object.getOwnPropertyDescriptors, Xd = Object.prototype, Yd = Array.prototype, Us = Object.getPrototypeOf, hl = Object.isExtensible;
function Li(t) {
  return typeof t == "function";
}
const he = () => {
};
function Zd(t) {
  return t();
}
function lo(t) {
  for (var e = 0; e < t.length; e++)
    t[e]();
}
function Ru() {
  var t, e, n = new Promise((r, i) => {
    t = r, e = i;
  });
  return { promise: n, resolve: t, reject: e };
}
const an = 2, Fs = 4, Oo = 8, Mr = 16, _r = 32, ui = 64, ks = 128, Tn = 256, uo = 512, Zt = 1024, bn = 2048, Pr = 4096, Fn = 8192, ci = 16384, Ro = 32768, Hr = 65536, vl = 1 << 17, Qd = 1 << 18, Ji = 1 << 19, Du = 1 << 20, cs = 1 << 21, Do = 1 << 22, ni = 1 << 23, Jn = Symbol("$state"), Mu = Symbol("legacy props"), Jd = Symbol(""), Oi = new class extends Error {
  constructor() {
    super(...arguments);
    Ei(this, "name", "StaleReactionError");
    Ei(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
function Bs(t) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function $d() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function ef(t) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function tf() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function nf(t) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function rf() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function af(t) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function of() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function sf() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function lf() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function uf() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
function cf() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function df() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let ff = !1;
function Pu(t) {
  return t === this.v;
}
function Vs(t, e) {
  return t != t ? e == e : t !== e || t !== null && typeof t == "object" || typeof t == "function";
}
function Hu(t) {
  return !Vs(t, this.v);
}
let $i = !1, hf = !1;
function vf() {
  $i = !0;
}
let ct = null;
function ji(t) {
  ct = t;
}
function be(t) {
  return (
    /** @type {T} */
    Nu().get(t)
  );
}
function ue(t, e) {
  return Nu().set(t, e), e;
}
function xe(t, e = !1, n) {
  ct = {
    p: ct,
    c: null,
    e: null,
    s: t,
    x: null,
    l: $i && !e ? { s: null, u: null, $: [] } : null
  };
}
function we(t) {
  var e = (
    /** @type {ComponentContext} */
    ct
  ), n = e.e;
  if (n !== null) {
    e.e = null;
    for (var r of n)
      $u(r);
  }
  return t !== void 0 && (e.x = t), ct = e.p, t ?? /** @type {T} */
  {};
}
function Ma() {
  return !$i || ct !== null && ct.l === null;
}
function Nu(t) {
  return ct === null && Bs(), ct.c ?? (ct.c = new Map(mf(ct) || void 0));
}
function mf(t) {
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
function Uu() {
  var t = Zr;
  Zr = [], lo(t);
}
function pr(t) {
  if (Zr.length === 0 && !Ia) {
    var e = Zr;
    queueMicrotask(() => {
      e === Zr && Uu();
    });
  }
  Zr.push(t);
}
function gf() {
  for (; Zr.length > 0; )
    Uu();
}
const pf = /* @__PURE__ */ new WeakMap();
function Fu(t) {
  var e = We;
  if (e === null)
    return je.f |= ni, t;
  if (e.f & Ro)
    Wi(t, e);
  else {
    if (!(e.f & ks))
      throw !e.parent && t instanceof Error && ku(t), t;
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
  throw t instanceof Error && ku(t), t;
}
function ku(t) {
  const e = pf.get(t);
  e && (so(t, "message", {
    value: e.message
  }), so(t, "stack", {
    value: e.stack
  }));
}
const Ga = /* @__PURE__ */ new Set();
let lt = null, eo = null, Wt = null, ds = /* @__PURE__ */ new Set(), Zn = [], Mo = null, fs = !1, Ia = !1;
var Ui, Fi, Qr, Oa, ki, Bi, Jr, Vi, Ra, Da, xn, hs, to, vs;
const To = class To {
  constructor() {
    rt(this, xn);
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
    rt(this, Oa, null);
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
    rt(this, Ra, []);
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Effect[]}
     */
    rt(this, Da, []);
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
    Zn = [], eo = null, this.apply();
    for (const o of e)
      Kt(this, xn, hs).call(this, o);
    if (se(this, Qr) === 0) {
      var n = Wt;
      Kt(this, xn, vs).call(this);
      var r = se(this, Bi), i = se(this, Jr);
      Ue(this, Bi, []), Ue(this, Jr, []), Ue(this, Vi, []), eo = this, lt = null, Wt = n, ml(r), ml(i), eo = null, (a = se(this, Oa)) == null || a.resolve();
    } else
      Kt(this, xn, to).call(this, se(this, Bi)), Kt(this, xn, to).call(this, se(this, Jr)), Kt(this, xn, to).call(this, se(this, Vi));
    Wt = null;
    for (const o of se(this, ki))
      Ca(o);
    Ue(this, ki, []);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Source} source
   * @param {any} value
   */
  capture(e, n) {
    se(this, Ui).has(e) || se(this, Ui).set(e, n), this.current.set(e, e.v), Wt == null || Wt.set(e, e.v);
  }
  activate() {
    lt = this;
  }
  deactivate() {
    lt = null, Wt = null;
  }
  flush() {
    if (Zn.length > 0) {
      if (this.activate(), Bu(), lt !== null && lt !== this)
        return;
    } else se(this, Qr) === 0 && Kt(this, xn, vs).call(this);
    this.deactivate();
    for (const e of ds)
      if (ds.delete(e), e(), lt !== null)
        break;
  }
  increment() {
    Ue(this, Qr, se(this, Qr) + 1);
  }
  decrement() {
    Ue(this, Qr, se(this, Qr) - 1);
    for (const e of se(this, Ra))
      nn(e, bn), si(e);
    for (const e of se(this, Da))
      nn(e, Pr), si(e);
    this.flush();
  }
  /** @param {() => void} fn */
  add_callback(e) {
    se(this, Fi).add(e);
  }
  settled() {
    return (se(this, Oa) ?? Ue(this, Oa, Ru())).promise;
  }
  static ensure() {
    if (lt === null) {
      const e = lt = new To();
      Ga.add(lt), Ia || To.enqueue(() => {
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
Ui = new WeakMap(), Fi = new WeakMap(), Qr = new WeakMap(), Oa = new WeakMap(), ki = new WeakMap(), Bi = new WeakMap(), Jr = new WeakMap(), Vi = new WeakMap(), Ra = new WeakMap(), Da = new WeakMap(), xn = new WeakSet(), /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 */
hs = function(e) {
  var u;
  e.f ^= Zt;
  for (var n = e.first; n !== null; ) {
    var r = n.f, i = (r & (_r | ui)) !== 0, a = i && (r & Zt) !== 0, o = a || (r & Fn) !== 0 || this.skipped_effects.has(n);
    if (!o && n.fn !== null) {
      i ? n.f ^= Zt : r & Fs ? se(this, Jr).push(n) : r & Zt || (r & Do && ((u = n.b) != null && u.is_pending()) ? se(this, ki).push(n) : No(n) && (n.f & Mr && se(this, Vi).push(n), Ca(n)));
      var c = n.first;
      if (c !== null) {
        n = c;
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
to = function(e) {
  for (const n of e)
    (n.f & bn ? se(this, Ra) : se(this, Da)).push(n), nn(n, Zt);
  e.length = 0;
}, /**
 * Append and remove branches to/from the DOM
 */
vs = function() {
  var e;
  for (const n of se(this, Fi))
    n();
  if (se(this, Fi).clear(), Ga.size > 1) {
    se(this, Ui).clear();
    let n = !0;
    for (const r of Ga) {
      if (r === this) {
        n = !1;
        continue;
      }
      const i = [];
      for (const [o, c] of this.current) {
        if (r.current.has(o))
          if (n && c !== r.current.get(o))
            r.current.set(o, c);
          else
            continue;
        i.push(o);
      }
      if (i.length === 0)
        continue;
      const a = [...r.current.keys()].filter((o) => !this.current.has(o));
      if (a.length > 0) {
        for (const o of i)
          Vu(o, a);
        if (Zn.length > 0) {
          lt = r, r.apply();
          for (const o of Zn)
            Kt(e = r, xn, hs).call(e, o);
          Zn = [], r.deactivate();
        }
      }
    }
    lt = null;
  }
  Ga.delete(this);
};
let vr = To;
function bf(t) {
  var e = Ia;
  Ia = !0;
  try {
    for (var n; ; ) {
      if (gf(), Zn.length === 0 && (lt == null || lt.flush(), Zn.length === 0))
        return Mo = null, /** @type {T} */
        n;
      Bu();
    }
  } finally {
    Ia = e;
  }
}
function Bu() {
  var t = Pi;
  fs = !0;
  try {
    var e = 0;
    for (bl(!0); Zn.length > 0; ) {
      var n = vr.ensure();
      if (e++ > 1e3) {
        var r, i;
        _f();
      }
      n.process(Zn), Rr.clear();
    }
  } finally {
    fs = !1, bl(t), Mo = null;
  }
}
function _f() {
  try {
    rf();
  } catch (t) {
    Wi(t, Mo);
  }
}
let cr = null;
function ml(t) {
  var e = t.length;
  if (e !== 0) {
    for (var n = 0; n < e; ) {
      var r = t[n++];
      if (!(r.f & (ci | Fn)) && No(r) && (cr = [], Ca(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null && r.ac === null ? rc(r) : r.fn = null), (cr == null ? void 0 : cr.length) > 0)) {
        Rr.clear();
        for (const i of cr)
          Ca(i);
        cr = [];
      }
    }
    cr = null;
  }
}
function Vu(t, e) {
  if (t.reactions !== null)
    for (const n of t.reactions) {
      const r = n.f;
      r & an ? Vu(
        /** @type {Derived} */
        n,
        e
      ) : r & (Do | Mr) && Gu(n, e) && (nn(n, bn), si(
        /** @type {Effect} */
        n
      ));
    }
}
function Gu(t, e) {
  if (t.deps !== null) {
    for (const n of t.deps)
      if (e.includes(n) || n.f & an && Gu(
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
    if (fs && e === We && n & Mr)
      return;
    if (n & (ui | _r)) {
      if (!(n & Zt)) return;
      e.f ^= Zt;
    }
  }
  Zn.push(e);
}
function yf(t) {
  let e = 0, n = li(0), r;
  return () => {
    Nf() && (s(n), Na(() => (e === 0 && (r = Gn(() => t(() => Ea(n)))), e += 1, () => {
      pr(() => {
        e -= 1, e === 0 && (r == null || r(), r = void 0, Ea(n));
      });
    })));
  };
}
var If = Hr | Ji | ks;
function Ef(t, e, n) {
  new Sf(t, e, n);
}
var Mn, An, Hs, Kn, $r, Xn, Cn, dn, Yn, Ar, ei, Cr, ti, Tr, xo, wo, rn, Af, Cf, no, ro, ms;
class Sf {
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
    rt(this, An);
    /** @type {TemplateNode | null} */
    rt(this, Hs, null);
    /** @type {BoundaryProps} */
    rt(this, Kn);
    /** @type {((anchor: Node) => void)} */
    rt(this, $r);
    /** @type {Effect} */
    rt(this, Xn);
    /** @type {Effect | null} */
    rt(this, Cn, null);
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
      se(this, Tr) && qi(se(this, Tr), se(this, ei));
    });
    rt(this, wo, yf(() => (Ue(this, Tr, li(se(this, ei))), () => {
      Ue(this, Tr, null);
    })));
    Ue(this, An, e), Ue(this, Kn, n), Ue(this, $r, r), this.parent = /** @type {Effect} */
    We.b, Ue(this, Mn, !!se(this, Kn).pending), Ue(this, Xn, Ur(() => {
      We.b = this;
      {
        try {
          Ue(this, Cn, Xt(() => r(se(this, An))));
        } catch (i) {
          this.error(i);
        }
        se(this, Cr) > 0 ? Kt(this, rn, ro).call(this) : Ue(this, Mn, !1);
      }
    }, If));
  }
  /**
   * Returns `true` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_pending() {
    return se(this, Mn) || !!this.parent && this.parent.is_pending();
  }
  has_pending_snippet() {
    return !!se(this, Kn).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   */
  update_pending_count(e) {
    Kt(this, rn, ms).call(this, e), Ue(this, ei, se(this, ei) + e), ds.add(se(this, xo));
  }
  get_effect_pending() {
    return se(this, wo).call(this), s(
      /** @type {Source<number>} */
      se(this, Tr)
    );
  }
  /** @param {unknown} error */
  error(e) {
    var n = se(this, Kn).onerror;
    let r = se(this, Kn).failed;
    if (se(this, ti) || !n && !r)
      throw e;
    se(this, Cn) && (qt(se(this, Cn)), Ue(this, Cn, null)), se(this, dn) && (qt(se(this, dn)), Ue(this, dn, null)), se(this, Yn) && (qt(se(this, Yn)), Ue(this, Yn, null));
    var i = !1, a = !1;
    const o = () => {
      if (i) {
        df();
        return;
      }
      i = !0, a && uf(), vr.ensure(), Ue(this, ei, 0), se(this, Yn) !== null && Dr(se(this, Yn), () => {
        Ue(this, Yn, null);
      }), Ue(this, Mn, this.has_pending_snippet()), Ue(this, Cn, Kt(this, rn, no).call(this, () => (Ue(this, ti, !1), Xt(() => se(this, $r).call(this, se(this, An)))))), se(this, Cr) > 0 ? Kt(this, rn, ro).call(this) : Ue(this, Mn, !1);
    };
    var c = je;
    try {
      fn(null), a = !0, n == null || n(e, o), a = !1;
    } catch (l) {
      Wi(l, se(this, Xn) && se(this, Xn).parent);
    } finally {
      fn(c);
    }
    r && pr(() => {
      Ue(this, Yn, Kt(this, rn, no).call(this, () => {
        Ue(this, ti, !0);
        try {
          return Xt(() => {
            r(
              se(this, An),
              () => e,
              () => o
            );
          });
        } catch (l) {
          return Wi(
            l,
            /** @type {Effect} */
            se(this, Xn).parent
          ), null;
        } finally {
          Ue(this, ti, !1);
        }
      }));
    });
  }
}
Mn = new WeakMap(), An = new WeakMap(), Hs = new WeakMap(), Kn = new WeakMap(), $r = new WeakMap(), Xn = new WeakMap(), Cn = new WeakMap(), dn = new WeakMap(), Yn = new WeakMap(), Ar = new WeakMap(), ei = new WeakMap(), Cr = new WeakMap(), ti = new WeakMap(), Tr = new WeakMap(), xo = new WeakMap(), wo = new WeakMap(), rn = new WeakSet(), Af = function() {
  try {
    Ue(this, Cn, Xt(() => se(this, $r).call(this, se(this, An))));
  } catch (e) {
    this.error(e);
  }
  Ue(this, Mn, !1);
}, Cf = function() {
  const e = se(this, Kn).pending;
  e && (Ue(this, dn, Xt(() => e(se(this, An)))), vr.enqueue(() => {
    Ue(this, Cn, Kt(this, rn, no).call(this, () => (vr.ensure(), Xt(() => se(this, $r).call(this, se(this, An)))))), se(this, Cr) > 0 ? Kt(this, rn, ro).call(this) : (Dr(
      /** @type {Effect} */
      se(this, dn),
      () => {
        Ue(this, dn, null);
      }
    ), Ue(this, Mn, !1));
  }));
}, /**
 * @param {() => Effect | null} fn
 */
no = function(e) {
  var n = We, r = je, i = ct;
  er(se(this, Xn)), fn(se(this, Xn)), ji(se(this, Xn).ctx);
  try {
    return e();
  } catch (a) {
    return Fu(a), null;
  } finally {
    er(n), fn(r), ji(i);
  }
}, ro = function() {
  const e = (
    /** @type {(anchor: Node) => void} */
    se(this, Kn).pending
  );
  se(this, Cn) !== null && (Ue(this, Ar, document.createDocumentFragment()), Tf(se(this, Cn), se(this, Ar))), se(this, dn) === null && Ue(this, dn, Xt(() => e(se(this, An))));
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
  Ue(this, Cr, se(this, Cr) + e), se(this, Cr) === 0 && (Ue(this, Mn, !1), se(this, dn) && Dr(se(this, dn), () => {
    Ue(this, dn, null);
  }), se(this, Ar) && (se(this, An).before(se(this, Ar)), Ue(this, Ar, null)), pr(() => {
    vr.ensure().flush();
  }));
};
function Tf(t, e) {
  for (var n = t.nodes_start, r = t.nodes_end; n !== null; ) {
    var i = n === r ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Ha(n)
    );
    e.append(n), n = i;
  }
}
function ju(t, e, n) {
  const r = Ma() ? Pa : Gs;
  if (e.length === 0) {
    n(t.map(r));
    return;
  }
  var i = lt, a = (
    /** @type {Effect} */
    We
  ), o = xf();
  Promise.all(e.map((c) => /* @__PURE__ */ wf(c))).then((c) => {
    o();
    try {
      n([...t.map(r), ...c]);
    } catch (l) {
      a.f & ci || Wi(l, a);
    }
    i == null || i.deactivate(), gs();
  }).catch((c) => {
    Wi(c, a);
  });
}
function xf() {
  var t = We, e = je, n = ct, r = lt;
  return function() {
    er(t), fn(e), ji(n), r == null || r.activate();
  };
}
function gs() {
  er(null), fn(null), ji(null);
}
// @__NO_SIDE_EFFECTS__
function Pa(t) {
  var e = an | bn, n = je !== null && je.f & an ? (
    /** @type {Derived} */
    je
  ) : null;
  return We === null || n !== null && n.f & Tn ? e |= Tn : We.f |= Ji, {
    ctx: ct,
    deps: null,
    effects: null,
    equals: Pu,
    f: e,
    fn: t,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      Ft
    ),
    wv: 0,
    parent: n ?? We,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function wf(t, e) {
  let n = (
    /** @type {Effect | null} */
    We
  );
  n === null && $d();
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
  ), o = !je, c = /* @__PURE__ */ new Map();
  return Ff(() => {
    var f;
    var l = Ru();
    i = l.promise;
    try {
      Promise.resolve(t()).then(l.resolve, l.reject).then(gs);
    } catch (m) {
      l.reject(m), gs();
    }
    var u = (
      /** @type {Batch} */
      lt
    ), d = r.is_pending();
    o && (r.update_pending_count(1), d || (u.increment(), (f = c.get(u)) == null || f.reject(Oi), c.delete(u), c.set(u, l)));
    const v = (m, h = void 0) => {
      if (d || u.activate(), h)
        h !== Oi && (a.f |= ni, qi(a, h));
      else {
        a.f & ni && (a.f ^= ni), qi(a, m);
        for (const [p, _] of c) {
          if (c.delete(p), p === u) break;
          _.reject(Oi);
        }
      }
      o && (r.update_pending_count(-1), d || u.decrement());
    };
    l.promise.then(v, (m) => v(null, m || "unknown"));
  }), Po(() => {
    for (const l of c.values())
      l.reject(Oi);
  }), new Promise((l) => {
    function u(d) {
      function v() {
        d === i ? l(a) : u(i);
      }
      d.then(v, v);
    }
    u(i);
  });
}
// @__NO_SIDE_EFFECTS__
function pe(t) {
  const e = /* @__PURE__ */ Pa(t);
  return oc(e), e;
}
// @__NO_SIDE_EFFECTS__
function Gs(t) {
  const e = /* @__PURE__ */ Pa(t);
  return e.equals = Hu, e;
}
function Wu(t) {
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
function Lf(t) {
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
  var e, n = We;
  er(Lf(t));
  try {
    Wu(t), e = cc(t);
  } finally {
    er(n);
  }
  return e;
}
function qu(t) {
  var e = js(t);
  if (t.equals(e) || (t.v = e, t.wv = lc()), !fi)
    if (Wt !== null)
      Wt.set(t, t.v);
    else {
      var n = (wr || t.f & Tn) && t.deps !== null ? Pr : Zt;
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
    equals: Pu,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function _e(t, e) {
  const n = li(t);
  return oc(n), n;
}
// @__NO_SIDE_EFFECTS__
function zu(t, e = !1, n = !0) {
  var i;
  const r = li(t);
  return e || (r.equals = Hu), $i && n && ct !== null && ct.l !== null && ((i = ct.l).s ?? (i.s = [])).push(r), r;
}
function Q(t, e, n = !1) {
  je !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Pn || je.f & vl) && Ma() && je.f & (an | Mr | Do | vl) && !(tn != null && tn.includes(t)) && lf();
  let r = n ? ye(e) : e;
  return qi(t, r);
}
function qi(t, e) {
  if (!t.equals(e)) {
    var n = t.v;
    fi ? Rr.set(t, e) : Rr.set(t, n), t.v = e;
    var r = vr.ensure();
    r.capture(t, n), t.f & an && (t.f & bn && js(
      /** @type {Derived} */
      t
    ), nn(t, t.f & Tn ? Pr : Zt)), t.wv = lc(), Ku(t, bn), Ma() && We !== null && We.f & Zt && !(We.f & (_r | ui)) && (Sn === null ? Vf([t]) : Sn.push(t));
  }
  return e;
}
function Ea(t) {
  Q(t, t.v + 1);
}
function Ku(t, e) {
  var n = t.reactions;
  if (n !== null)
    for (var r = Ma(), i = n.length, a = 0; a < i; a++) {
      var o = n[a], c = o.f;
      if (!(!r && o === We)) {
        var l = (c & bn) === 0;
        l && nn(o, e), c & an ? Ku(
          /** @type {Derived} */
          o,
          Pr
        ) : l && (c & Mr && cr !== null && cr.push(
          /** @type {Effect} */
          o
        ), si(
          /** @type {Effect} */
          o
        ));
      }
    }
}
function ye(t) {
  if (typeof t != "object" || t === null || Jn in t)
    return t;
  const e = Us(t);
  if (e !== Xd && e !== Yd)
    return t;
  var n = /* @__PURE__ */ new Map(), r = Lo(t), i = /* @__PURE__ */ _e(0), a = ri, o = (c) => {
    if (ri === a)
      return c();
    var l = je, u = ri;
    fn(null), yl(a);
    var d = c();
    return fn(l), yl(u), d;
  };
  return r && n.set("length", /* @__PURE__ */ _e(
    /** @type {any[]} */
    t.length
  )), new Proxy(
    /** @type {any} */
    t,
    {
      defineProperty(c, l, u) {
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && of();
        var d = n.get(l);
        return d === void 0 ? d = o(() => {
          var v = /* @__PURE__ */ _e(u.value);
          return n.set(l, v), v;
        }) : Q(d, u.value, !0), !0;
      },
      deleteProperty(c, l) {
        var u = n.get(l);
        if (u === void 0) {
          if (l in c) {
            const d = o(() => /* @__PURE__ */ _e(Ft));
            n.set(l, d), Ea(i);
          }
        } else
          Q(u, Ft), Ea(i);
        return !0;
      },
      get(c, l, u) {
        var m;
        if (l === Jn)
          return t;
        var d = n.get(l), v = l in c;
        if (d === void 0 && (!v || (m = Or(c, l)) != null && m.writable) && (d = o(() => {
          var h = ye(v ? c[l] : Ft), p = /* @__PURE__ */ _e(h);
          return p;
        }), n.set(l, d)), d !== void 0) {
          var f = s(d);
          return f === Ft ? void 0 : f;
        }
        return Reflect.get(c, l, u);
      },
      getOwnPropertyDescriptor(c, l) {
        var u = Reflect.getOwnPropertyDescriptor(c, l);
        if (u && "value" in u) {
          var d = n.get(l);
          d && (u.value = s(d));
        } else if (u === void 0) {
          var v = n.get(l), f = v == null ? void 0 : v.v;
          if (v !== void 0 && f !== Ft)
            return {
              enumerable: !0,
              configurable: !0,
              value: f,
              writable: !0
            };
        }
        return u;
      },
      has(c, l) {
        var f;
        if (l === Jn)
          return !0;
        var u = n.get(l), d = u !== void 0 && u.v !== Ft || Reflect.has(c, l);
        if (u !== void 0 || We !== null && (!d || (f = Or(c, l)) != null && f.writable)) {
          u === void 0 && (u = o(() => {
            var m = d ? ye(c[l]) : Ft, h = /* @__PURE__ */ _e(m);
            return h;
          }), n.set(l, u));
          var v = s(u);
          if (v === Ft)
            return !1;
        }
        return d;
      },
      set(c, l, u, d) {
        var I;
        var v = n.get(l), f = l in c;
        if (r && l === "length")
          for (var m = u; m < /** @type {Source<number>} */
          v.v; m += 1) {
            var h = n.get(m + "");
            h !== void 0 ? Q(h, Ft) : m in c && (h = o(() => /* @__PURE__ */ _e(Ft)), n.set(m + "", h));
          }
        if (v === void 0)
          (!f || (I = Or(c, l)) != null && I.writable) && (v = o(() => /* @__PURE__ */ _e(void 0)), Q(v, ye(u)), n.set(l, v));
        else {
          f = v.v !== Ft;
          var p = o(() => ye(u));
          Q(v, p);
        }
        var _ = Reflect.getOwnPropertyDescriptor(c, l);
        if (_ != null && _.set && _.set.call(d, u), !f) {
          if (r && typeof l == "string") {
            var y = (
              /** @type {Source<number>} */
              n.get("length")
            ), T = Number(l);
            Number.isInteger(T) && T >= y.v && Q(y, T + 1);
          }
          Ea(i);
        }
        return !0;
      },
      ownKeys(c) {
        s(i);
        var l = Reflect.ownKeys(c).filter((v) => {
          var f = n.get(v);
          return f === void 0 || f.v !== Ft;
        });
        for (var [u, d] of n)
          d.v !== Ft && !(u in c) && l.push(u);
        return l;
      },
      setPrototypeOf() {
        sf();
      }
    }
  );
}
function gl(t) {
  try {
    if (t !== null && typeof t == "object" && Jn in t)
      return t[Jn];
  } catch {
  }
  return t;
}
function Of(t, e) {
  return Object.is(gl(t), gl(e));
}
var co, Ws, Xu, Yu, Zu;
function Rf() {
  if (co === void 0) {
    co = window, Ws = document, Xu = /Firefox/.test(navigator.userAgent);
    var t = Element.prototype, e = Node.prototype, n = Text.prototype;
    Yu = Or(e, "firstChild").get, Zu = Or(e, "nextSibling").get, hl(t) && (t.__click = void 0, t.__className = void 0, t.__attributes = null, t.__style = void 0, t.__e = void 0), hl(n) && (n.__t = void 0);
  }
}
function Nr(t = "") {
  return document.createTextNode(t);
}
// @__NO_SIDE_EFFECTS__
function zi(t) {
  return Yu.call(t);
}
// @__NO_SIDE_EFFECTS__
function Ha(t) {
  return Zu.call(t);
}
function de(t, e) {
  return /* @__PURE__ */ zi(t);
}
function Z(t, e = !1) {
  {
    var n = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ zi(
        /** @type {Node} */
        t
      )
    );
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ Ha(n) : n;
  }
}
function Ie(t, e = 1, n = !1) {
  let r = t;
  for (; e--; )
    r = /** @type {TemplateNode} */
    /* @__PURE__ */ Ha(r);
  return r;
}
function Df(t) {
  t.textContent = "";
}
function qs() {
  return !1;
}
function Mf(t, e) {
  if (e) {
    const n = document.body;
    t.autofocus = !0, pr(() => {
      document.activeElement === n && t.focus();
    });
  }
}
let pl = !1;
function Pf() {
  pl || (pl = !0, document.addEventListener(
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
function ea(t) {
  var e = je, n = We;
  fn(null), er(null);
  try {
    return t();
  } finally {
    fn(e), er(n);
  }
}
function Qu(t, e, n, r = n) {
  t.addEventListener(e, () => ea(n));
  const i = t.__on_r;
  i ? t.__on_r = () => {
    i(), r(!0);
  } : t.__on_r = () => r(!0), Pf();
}
function Ju(t) {
  We === null && je === null && nf(), je !== null && je.f & Tn && We === null && tf(), fi && ef();
}
function Hf(t, e) {
  var n = e.last;
  n === null ? e.last = e.first = t : (n.next = t, t.prev = n, e.last = t);
}
function tr(t, e, n, r = !0) {
  var i = We;
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
      Ca(a), a.f |= Ro;
    } catch (l) {
      throw qt(a), l;
    }
  else e !== null && si(a);
  if (r) {
    var o = a;
    if (n && o.deps === null && o.teardown === null && o.nodes_start === null && o.first === o.last && // either `null`, or a singular child
    !(o.f & Ji) && (o = o.first), o !== null && (o.parent = i, i !== null && Hf(o, i), je !== null && je.f & an && !(t & ui))) {
      var c = (
        /** @type {Derived} */
        je
      );
      (c.effects ?? (c.effects = [])).push(o);
    }
  }
  return a;
}
function Nf() {
  return je !== null && !Pn;
}
function Po(t) {
  const e = tr(Oo, null, !1);
  return nn(e, Zt), e.teardown = t, e;
}
function Te(t) {
  Ju();
  var e = (
    /** @type {Effect} */
    We.f
  ), n = !je && (e & _r) !== 0 && (e & Ro) === 0;
  if (n) {
    var r = (
      /** @type {ComponentContext} */
      ct
    );
    (r.e ?? (r.e = [])).push(t);
  } else
    return $u(t);
}
function $u(t) {
  return tr(Fs | Du, t, !1);
}
function ec(t) {
  return Ju(), tr(Oo | Du, t, !0);
}
function Uf(t) {
  vr.ensure();
  const e = tr(ui | Ji, t, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? Dr(e, () => {
      qt(e), r(void 0);
    }) : (qt(e), r(void 0));
  });
}
function di(t) {
  return tr(Fs, t, !1);
}
function Ff(t) {
  return tr(Do | Ji, t, !0);
}
function Na(t, e = 0) {
  return tr(Oo | e, t, !0);
}
function Le(t, e = [], n = []) {
  ju(e, n, (r) => {
    tr(Oo, () => t(...r.map(s)), !0);
  });
}
function Ur(t, e = 0) {
  var n = tr(Mr | e, t, !0);
  return n;
}
function Xt(t, e = !0) {
  return tr(_r | Ji, t, !0, e);
}
function tc(t) {
  var e = t.teardown;
  if (e !== null) {
    const n = fi, r = je;
    _l(!0), fn(null);
    try {
      e.call(null);
    } finally {
      _l(n), fn(r);
    }
  }
}
function nc(t, e = !1) {
  var n = t.first;
  for (t.first = t.last = null; n !== null; ) {
    const i = n.ac;
    i !== null && ea(() => {
      i.abort(Oi);
    });
    var r = n.next;
    n.f & ui ? n.parent = null : qt(n, e), n = r;
  }
}
function kf(t) {
  for (var e = t.first; e !== null; ) {
    var n = e.next;
    e.f & _r || qt(e), e = n;
  }
}
function qt(t, e = !0) {
  var n = !1;
  (e || t.f & Qd) && t.nodes_start !== null && t.nodes_end !== null && (Bf(
    t.nodes_start,
    /** @type {TemplateNode} */
    t.nodes_end
  ), n = !0), nc(t, e && !n), fo(t, 0), nn(t, ci);
  var r = t.transitions;
  if (r !== null)
    for (const a of r)
      a.stop();
  tc(t);
  var i = t.parent;
  i !== null && i.first !== null && rc(t), t.next = t.prev = t.teardown = t.ctx = t.deps = t.fn = t.nodes_start = t.nodes_end = t.ac = null;
}
function Bf(t, e) {
  for (; t !== null; ) {
    var n = t === e ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Ha(t)
    );
    t.remove(), t = n;
  }
}
function rc(t) {
  var e = t.parent, n = t.prev, r = t.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), e !== null && (e.first === t && (e.first = r), e.last === t && (e.last = n));
}
function Dr(t, e) {
  var n = [];
  zs(t, n, !0), ic(n, () => {
    qt(t), e && e();
  });
}
function ic(t, e) {
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
  ac(t, !0);
}
function ac(t, e) {
  if (t.f & Fn) {
    t.f ^= Fn, t.f & Zt || (nn(t, bn), si(t));
    for (var n = t.first; n !== null; ) {
      var r = n.next, i = (n.f & Hr) !== 0 || (n.f & _r) !== 0;
      ac(n, i ? e : !1), n = r;
    }
    if (t.transitions !== null)
      for (const a of t.transitions)
        (a.is_global || e) && a.in();
  }
}
let Pi = !1;
function bl(t) {
  Pi = t;
}
let fi = !1;
function _l(t) {
  fi = t;
}
let je = null, Pn = !1;
function fn(t) {
  je = t;
}
let We = null;
function er(t) {
  We = t;
}
let tn = null;
function oc(t) {
  je !== null && (tn === null ? tn = [t] : tn.push(t));
}
let en = null, gn = 0, Sn = null;
function Vf(t) {
  Sn = t;
}
let sc = 1, Aa = 0, ri = Aa;
function yl(t) {
  ri = t;
}
let wr = !1;
function lc() {
  return ++sc;
}
function No(t) {
  var v;
  var e = t.f;
  if (e & bn)
    return !0;
  if (e & Pr) {
    var n = t.deps, r = (e & Tn) !== 0;
    if (n !== null) {
      var i, a, o = (e & uo) !== 0, c = r && We !== null && !wr, l = n.length;
      if ((o || c) && (We === null || !(We.f & ci))) {
        var u = (
          /** @type {Derived} */
          t
        ), d = u.parent;
        for (i = 0; i < l; i++)
          a = n[i], (o || !((v = a == null ? void 0 : a.reactions) != null && v.includes(u))) && (a.reactions ?? (a.reactions = [])).push(u);
        o && (u.f ^= uo), c && d !== null && !(d.f & Tn) && (u.f ^= Tn);
      }
      for (i = 0; i < l; i++)
        if (a = n[i], No(
          /** @type {Derived} */
          a
        ) && qu(
          /** @type {Derived} */
          a
        ), a.wv > t.wv)
          return !0;
    }
    (!r || We !== null && !wr) && nn(t, Zt);
  }
  return !1;
}
function uc(t, e, n = !0) {
  var r = t.reactions;
  if (r !== null && !(tn != null && tn.includes(t)))
    for (var i = 0; i < r.length; i++) {
      var a = r[i];
      a.f & an ? uc(
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
function cc(t) {
  var p;
  var e = en, n = gn, r = Sn, i = je, a = wr, o = tn, c = ct, l = Pn, u = ri, d = t.f;
  en = /** @type {null | Value[]} */
  null, gn = 0, Sn = null, wr = (d & Tn) !== 0 && (Pn || !Pi || je === null), je = d & (_r | ui) ? null : t, tn = null, ji(t.ctx), Pn = !1, ri = ++Aa, t.ac !== null && (ea(() => {
    t.ac.abort(Oi);
  }), t.ac = null);
  try {
    t.f |= cs;
    var v = (
      /** @type {Function} */
      t.fn
    ), f = v(), m = t.deps;
    if (en !== null) {
      var h;
      if (fo(t, gn), m !== null && gn > 0)
        for (m.length = gn + en.length, h = 0; h < en.length; h++)
          m[gn + h] = en[h];
      else
        t.deps = m = en;
      if (!wr || // Deriveds that already have reactions can cleanup, so we still add them as reactions
      d & an && /** @type {import('#client').Derived} */
      t.reactions !== null)
        for (h = gn; h < m.length; h++)
          ((p = m[h]).reactions ?? (p.reactions = [])).push(t);
    } else m !== null && gn < m.length && (fo(t, gn), m.length = gn);
    if (Ma() && Sn !== null && !Pn && m !== null && !(t.f & (an | Pr | bn)))
      for (h = 0; h < /** @type {Source[]} */
      Sn.length; h++)
        uc(
          Sn[h],
          /** @type {Effect} */
          t
        );
    return i !== null && i !== t && (Aa++, Sn !== null && (r === null ? r = Sn : r.push(.../** @type {Source[]} */
    Sn))), t.f & ni && (t.f ^= ni), f;
  } catch (_) {
    return Fu(_);
  } finally {
    t.f ^= cs, en = e, gn = n, Sn = r, je = i, wr = a, tn = o, ji(c), Pn = l, ri = u;
  }
}
function Gf(t, e) {
  let n = e.reactions;
  if (n !== null) {
    var r = Kd.call(n, t);
    if (r !== -1) {
      var i = n.length - 1;
      i === 0 ? n = e.reactions = null : (n[r] = n[i], n.pop());
    }
  }
  n === null && e.f & an && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (en === null || !en.includes(e)) && (nn(e, Pr), e.f & (Tn | uo) || (e.f ^= uo), Wu(
    /** @type {Derived} **/
    e
  ), fo(
    /** @type {Derived} **/
    e,
    0
  ));
}
function fo(t, e) {
  var n = t.deps;
  if (n !== null)
    for (var r = e; r < n.length; r++)
      Gf(t, n[r]);
}
function Ca(t) {
  var e = t.f;
  if (!(e & ci)) {
    nn(t, Zt);
    var n = We, r = Pi;
    We = t, Pi = !0;
    try {
      e & Mr ? kf(t) : nc(t), tc(t);
      var i = cc(t);
      t.teardown = typeof i == "function" ? i : null, t.wv = sc;
      var a;
      Lu && hf && t.f & bn && t.deps;
    } finally {
      Pi = r, We = n;
    }
  }
}
async function dc() {
  await Promise.resolve(), bf();
}
function s(t) {
  var e = t.f, n = (e & an) !== 0;
  if (je !== null && !Pn) {
    var r = We !== null && (We.f & ci) !== 0;
    if (!r && !(tn != null && tn.includes(t))) {
      var i = je.deps;
      if (je.f & cs)
        t.rv < Aa && (t.rv = Aa, en === null && i !== null && i[gn] === t ? gn++ : en === null ? en = [t] : (!wr || !en.includes(t)) && en.push(t));
      else {
        (je.deps ?? (je.deps = [])).push(t);
        var a = t.reactions;
        a === null ? t.reactions = [je] : a.includes(je) || a.push(je);
      }
    }
  } else if (n && /** @type {Derived} */
  t.deps === null && /** @type {Derived} */
  t.effects === null) {
    var o = (
      /** @type {Derived} */
      t
    ), c = o.parent;
    c !== null && !(c.f & Tn) && (o.f ^= Tn);
  }
  if (fi) {
    if (Rr.has(t))
      return Rr.get(t);
    if (n) {
      o = /** @type {Derived} */
      t;
      var l = o.v;
      return (!(o.f & Zt) && o.reactions !== null || fc(o)) && (l = js(o)), Rr.set(o, l), l;
    }
  } else if (n) {
    if (o = /** @type {Derived} */
    t, Wt != null && Wt.has(o))
      return Wt.get(o);
    No(o) && qu(o);
  }
  if (Wt != null && Wt.has(t))
    return Wt.get(t);
  if (t.f & ni)
    throw t.v;
  return t.v;
}
function fc(t) {
  if (t.v === Ft) return !0;
  if (t.deps === null) return !1;
  for (const e of t.deps)
    if (Rr.has(e) || e.f & an && fc(
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
const jf = -7169;
function nn(t, e) {
  t.f = t.f & jf | e;
}
function hc(t) {
  if (!(typeof t != "object" || !t || t instanceof EventTarget)) {
    if (Jn in t)
      ps(t);
    else if (!Array.isArray(t))
      for (let e in t) {
        const n = t[e];
        typeof n == "object" && n && Jn in n && ps(n);
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
      const r = Ou(n);
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
const vc = /* @__PURE__ */ new Set(), bs = /* @__PURE__ */ new Set();
function Ks(t, e, n, r = {}) {
  function i(a) {
    if (r.capture || _a.call(e, a), !a.cancelBubble)
      return ea(() => n == null ? void 0 : n.call(this, a));
  }
  return t.startsWith("pointer") || t.startsWith("touch") || t === "wheel" ? pr(() => {
    e.addEventListener(t, i, r);
  }) : e.addEventListener(t, i, r), i;
}
function Wf(t, e, n, r = {}) {
  var i = Ks(e, t, n, r);
  return () => {
    t.removeEventListener(e, i, r);
  };
}
function mr(t, e, n, r, i) {
  var a = { capture: r, passive: i }, o = Ks(t, e, n, a);
  (e === document.body || // @ts-ignore
  e === window || // @ts-ignore
  e === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  e instanceof HTMLMediaElement) && Po(() => {
    e.removeEventListener(t, o, a);
  });
}
function wn(t) {
  for (var e = 0; e < t.length; e++)
    vc.add(t[e]);
  for (var n of bs)
    n(t);
}
let Il = null;
function _a(t) {
  var T;
  var e = this, n = (
    /** @type {Node} */
    e.ownerDocument
  ), r = t.type, i = ((T = t.composedPath) == null ? void 0 : T.call(t)) || [], a = (
    /** @type {null | Element} */
    i[0] || t.target
  );
  Il = t;
  var o = 0, c = Il === t && t.__root;
  if (c) {
    var l = i.indexOf(c);
    if (l !== -1 && (e === document || e === /** @type {any} */
    window)) {
      t.__root = e;
      return;
    }
    var u = i.indexOf(e);
    if (u === -1)
      return;
    l <= u && (o = l);
  }
  if (a = /** @type {Element} */
  i[o] || t.target, a !== e) {
    so(t, "currentTarget", {
      configurable: !0,
      get() {
        return a || n;
      }
    });
    var d = je, v = We;
    fn(null), er(null);
    try {
      for (var f, m = []; a !== null; ) {
        var h = a.assignedSlot || a.parentNode || /** @type {any} */
        a.host || null;
        try {
          var p = a["__" + r];
          if (p != null && (!/** @type {any} */
          a.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          t.target === a))
            if (Lo(p)) {
              var [_, ...y] = p;
              _.apply(a, [t, ...y]);
            } else
              p.call(a, t);
        } catch (I) {
          f ? m.push(I) : f = I;
        }
        if (t.cancelBubble || h === e || h === null)
          break;
        a = h;
      }
      if (f) {
        for (let I of m)
          queueMicrotask(() => {
            throw I;
          });
        throw f;
      }
    } finally {
      t.__root = e, delete t.currentTarget, fn(d), er(v);
    }
  }
}
function mc(t) {
  var e = document.createElement("template");
  return e.innerHTML = t.replaceAll("<!>", "<!---->"), e.content;
}
function Ki(t, e) {
  var n = (
    /** @type {Effect} */
    We
  );
  n.nodes_start === null && (n.nodes_start = t, n.nodes_end = e);
}
// @__NO_SIDE_EFFECTS__
function fe(t, e) {
  var n = (e & 1) !== 0, r = (e & 2) !== 0, i, a = !t.startsWith("<!>");
  return () => {
    i === void 0 && (i = mc(a ? t : "<!>" + t), n || (i = /** @type {Node} */
    /* @__PURE__ */ zi(i)));
    var o = (
      /** @type {TemplateNode} */
      r || Xu ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (n) {
      var c = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ zi(o)
      ), l = (
        /** @type {TemplateNode} */
        o.lastChild
      );
      Ki(c, l);
    } else
      Ki(o, o);
    return o;
  };
}
// @__NO_SIDE_EFFECTS__
function qf(t, e, n = "svg") {
  var r = !t.startsWith("<!>"), i = `<${n}>${r ? t : "<!>" + t}</${n}>`, a;
  return () => {
    if (!a) {
      var o = (
        /** @type {DocumentFragment} */
        mc(i)
      ), c = (
        /** @type {Element} */
        /* @__PURE__ */ zi(o)
      );
      a = /** @type {Element} */
      /* @__PURE__ */ zi(c);
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
  return /* @__PURE__ */ qf(t, e, "svg");
}
function yt(t = "") {
  {
    var e = Nr(t + "");
    return Ki(e, e), e;
  }
}
function te() {
  var t = document.createDocumentFragment(), e = document.createComment(""), n = Nr();
  return t.append(e, n), Ki(e, n), t;
}
function w(t, e) {
  t !== null && t.before(
    /** @type {Node} */
    e
  );
}
function zf(t) {
  return t.endsWith("capture") && t !== "gotpointercapture" && t !== "lostpointercapture";
}
const Kf = [
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
function Xf(t) {
  return Kf.includes(t);
}
const Yf = {
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
function Zf(t) {
  return t = t.toLowerCase(), Yf[t] ?? t;
}
const Qf = ["touchstart", "touchmove"];
function Jf(t) {
  return Qf.includes(t);
}
let ho = !0;
function El(t) {
  ho = t;
}
function $e(t, e) {
  var n = e == null ? "" : typeof e == "object" ? e + "" : e;
  n !== (t.__t ?? (t.__t = t.nodeValue)) && (t.__t = n, t.nodeValue = n + "");
}
function $f(t, e) {
  return eh(t, e);
}
const Si = /* @__PURE__ */ new Map();
function eh(t, { target: e, anchor: n, props: r = {}, events: i, context: a, intro: o = !0 }) {
  Rf();
  var c = /* @__PURE__ */ new Set(), l = (v) => {
    for (var f = 0; f < v.length; f++) {
      var m = v[f];
      if (!c.has(m)) {
        c.add(m);
        var h = Jf(m);
        e.addEventListener(m, _a, { passive: h });
        var p = Si.get(m);
        p === void 0 ? (document.addEventListener(m, _a, { passive: h }), Si.set(m, 1)) : Si.set(m, p + 1);
      }
    }
  };
  l(Ns(vc)), bs.add(l);
  var u = void 0, d = Uf(() => {
    var v = n ?? e.appendChild(Nr());
    return Ef(
      /** @type {TemplateNode} */
      v,
      {
        pending: () => {
        }
      },
      (f) => {
        if (a) {
          xe({});
          var m = (
            /** @type {ComponentContext} */
            ct
          );
          m.c = a;
        }
        i && (r.$$events = i), ho = o, u = t(f, r) || {}, ho = !0, a && we();
      }
    ), () => {
      var h;
      for (var f of c) {
        e.removeEventListener(f, _a);
        var m = (
          /** @type {number} */
          Si.get(f)
        );
        --m === 0 ? (document.removeEventListener(f, _a), Si.delete(f)) : Si.set(f, m);
      }
      bs.delete(l), v !== n && ((h = v.parentNode) == null || h.removeChild(v));
    };
  });
  return th.set(u, d), u;
}
let th = /* @__PURE__ */ new WeakMap();
function Se(t, e, ...n) {
  var r = t, i = he, a;
  Ur(() => {
    i !== (i = e()) && (a && (qt(a), a = null), a = Xt(() => (
      /** @type {SnippetFn} */
      i(r, ...n)
    )));
  }, Hr);
}
function at(t) {
  ct === null && Bs(), $i && ct.l !== null ? nh(ct).m.push(t) : Te(() => {
    const e = Gn(t);
    if (typeof e == "function") return (
      /** @type {() => void} */
      e
    );
  });
}
function yn(t) {
  ct === null && Bs(), at(() => () => Gn(t));
}
function nh(t) {
  var e = (
    /** @type {ComponentContextLegacy} */
    t.l
  );
  return e.u ?? (e.u = { a: [], b: [], m: [] });
}
function oe(t, e, n = !1) {
  var r = t, i = null, a = null, o = Ft, c = n ? Hr : 0, l = !1;
  const u = (m, h = !0) => {
    l = !0, f(h, m);
  };
  var d = null;
  function v() {
    d !== null && (d.lastChild.remove(), r.before(d), d = null);
    var m = o ? i : a, h = o ? a : i;
    m && Ho(m), h && Dr(h, () => {
      o ? a = null : i = null;
    });
  }
  const f = (m, h) => {
    if (o !== (o = m)) {
      var p = qs(), _ = r;
      if (p && (d = document.createDocumentFragment(), d.append(_ = Nr())), o ? i ?? (i = h && Xt(() => h(_))) : a ?? (a = h && Xt(() => h(_))), p) {
        var y = (
          /** @type {Batch} */
          lt
        ), T = o ? i : a, I = o ? a : i;
        T && y.skipped_effects.delete(T), I && y.skipped_effects.add(I), y.add_callback(v);
      } else
        v();
    }
  };
  Ur(() => {
    l = !1, e(u), l || f(null, null);
  }, c);
}
let ii = null;
function Sl(t) {
  ii = t;
}
function Ri(t, e) {
  return e;
}
function rh(t, e, n) {
  for (var r = t.items, i = [], a = e.length, o = 0; o < a; o++)
    zs(e[o].e, i, !0);
  var c = a > 0 && i.length === 0 && n !== null;
  if (c) {
    var l = (
      /** @type {Element} */
      /** @type {Element} */
      n.parentNode
    );
    Df(l), l.append(
      /** @type {Element} */
      n
    ), r.clear(), zn(t, e[0].prev, e[a - 1].next);
  }
  ic(i, () => {
    for (var u = 0; u < a; u++) {
      var d = e[u];
      c || (r.delete(d.k), zn(t, d.prev, d.next)), qt(d.e, !c);
    }
  });
}
function Qn(t, e, n, r, i, a = null) {
  var o = t, c = { flags: e, items: /* @__PURE__ */ new Map(), first: null }, l = (e & 4) !== 0;
  if (l) {
    var u = (
      /** @type {Element} */
      t
    );
    o = u.appendChild(Nr());
  }
  var d = null, v = !1, f = /* @__PURE__ */ new Map(), m = /* @__PURE__ */ Gs(() => {
    var y = n();
    return Lo(y) ? y : y == null ? [] : Ns(y);
  }), h, p;
  function _() {
    ih(
      p,
      h,
      c,
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
    We), h = /** @type {V[]} */
    s(m);
    var y = h.length;
    if (!(v && y === 0)) {
      v = y === 0;
      var T, I, b, S;
      if (qs()) {
        var E = /* @__PURE__ */ new Set(), x = (
          /** @type {Batch} */
          lt
        );
        for (I = 0; I < y; I += 1) {
          b = h[I], S = r(b, I);
          var A = c.items.get(S) ?? f.get(S);
          A ? e & 3 && gc(A, b, I, e) : (T = pc(
            null,
            c,
            null,
            null,
            b,
            S,
            I,
            i,
            e,
            n,
            !0
          ), f.set(S, T)), E.add(S);
        }
        for (const [C, P] of c.items)
          E.has(C) || x.skipped_effects.add(P.e);
        x.add_callback(_);
      } else
        _();
      s(m);
    }
  });
}
function ih(t, e, n, r, i, a, o, c, l) {
  var ne, N, D, O;
  var u = (o & 8) !== 0, d = (o & 3) !== 0, v = e.length, f = n.items, m = n.first, h = m, p, _ = null, y, T = [], I = [], b, S, E, x;
  if (u)
    for (x = 0; x < v; x += 1)
      b = e[x], S = c(b, x), E = f.get(S), E !== void 0 && ((ne = E.a) == null || ne.measure(), (y ?? (y = /* @__PURE__ */ new Set())).add(E));
  for (x = 0; x < v; x += 1) {
    if (b = e[x], S = c(b, x), E = f.get(S), E === void 0) {
      var A = r.get(S);
      if (A !== void 0) {
        r.delete(S), f.set(S, A);
        var C = _ ? _.next : h;
        zn(n, _, A), zn(n, A, C), jo(A, C, i), _ = A;
      } else {
        var P = h ? (
          /** @type {TemplateNode} */
          h.e.nodes_start
        ) : i;
        _ = pc(
          P,
          n,
          _,
          _ === null ? n.first : _.next,
          b,
          S,
          x,
          a,
          o,
          l
        );
      }
      f.set(S, _), T = [], I = [], h = _.next;
      continue;
    }
    if (d && gc(E, b, x, o), E.e.f & Fn && (Ho(E.e), u && ((N = E.a) == null || N.unfix(), (y ?? (y = /* @__PURE__ */ new Set())).delete(E))), E !== h) {
      if (p !== void 0 && p.has(E)) {
        if (T.length < I.length) {
          var z = I[0], F;
          _ = z.prev;
          var W = T[0], R = T[T.length - 1];
          for (F = 0; F < T.length; F += 1)
            jo(T[F], z, i);
          for (F = 0; F < I.length; F += 1)
            p.delete(I[F]);
          zn(n, W.prev, R.next), zn(n, _, W), zn(n, R, z), h = z, _ = R, x -= 1, T = [], I = [];
        } else
          p.delete(E), jo(E, h, i), zn(n, E.prev, E.next), zn(n, E, _ === null ? n.first : _.next), zn(n, _, E), _ = E;
        continue;
      }
      for (T = [], I = []; h !== null && h.k !== S; )
        h.e.f & Fn || (p ?? (p = /* @__PURE__ */ new Set())).add(h), I.push(h), h = h.next;
      if (h === null)
        continue;
      E = h;
    }
    T.push(E), _ = E, h = E.next;
  }
  if (h !== null || p !== void 0) {
    for (var L = p === void 0 ? [] : Ns(p); h !== null; )
      h.e.f & Fn || L.push(h), h = h.next;
    var q = L.length;
    if (q > 0) {
      var k = o & 4 && v === 0 ? i : null;
      if (u) {
        for (x = 0; x < q; x += 1)
          (D = L[x].a) == null || D.measure();
        for (x = 0; x < q; x += 1)
          (O = L[x].a) == null || O.fix();
      }
      rh(n, L, k);
    }
  }
  u && pr(() => {
    var le;
    if (y !== void 0)
      for (E of y)
        (le = E.a) == null || le.apply();
  }), t.first = n.first && n.first.e, t.last = _ && _.e;
  for (var K of r.values())
    qt(K.e);
  r.clear();
}
function gc(t, e, n, r) {
  r & 1 && qi(t.v, e), r & 2 ? qi(
    /** @type {Value<number>} */
    t.i,
    n
  ) : t.i = n;
}
function pc(t, e, n, r, i, a, o, c, l, u, d) {
  var v = ii, f = (l & 1) !== 0, m = (l & 16) === 0, h = f ? m ? /* @__PURE__ */ zu(i, !1, !1) : li(i) : i, p = l & 2 ? li(o) : o, _ = {
    i: p,
    v: h,
    k: a,
    a: null,
    // @ts-expect-error
    e: null,
    prev: n,
    next: r
  };
  ii = _;
  try {
    if (t === null) {
      var y = document.createDocumentFragment();
      y.append(t = Nr());
    }
    return _.e = Xt(() => c(
      /** @type {Node} */
      t,
      h,
      p,
      u
    ), ff), _.e.prev = n && n.e, _.e.next = r && r.e, n === null ? d || (e.first = _) : (n.next = _, n.e.next = _.e), r !== null && (r.prev = _, r.e.prev = _.e), _;
  } finally {
    ii = v;
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
      /* @__PURE__ */ Ha(a)
    );
    i.before(a), a = o;
  }
}
function zn(t, e, n) {
  e === null ? t.first = n : (e.next = n, e.e.next = n && n.e), n !== null && (n.prev = e, n.e.prev = e && e.e);
}
function nr(t, e, n) {
  var r = t, i, a, o = null, c = null;
  function l() {
    a && (Dr(a), a = null), o && (o.lastChild.remove(), r.before(o), o = null), a = c, c = null;
  }
  Ur(() => {
    if (i !== (i = e())) {
      var u = qs();
      if (i) {
        var d = r;
        u && (o = document.createDocumentFragment(), o.append(d = Nr()), a && lt.skipped_effects.add(a)), c = Xt(() => n(d, i));
      }
      u ? lt.add_callback(l) : l();
    }
  }, Hr);
}
function Al(t, e, n, r, i, a) {
  var o, c, l = null, u = (
    /** @type {TemplateNode} */
    t
  ), d, v = ii;
  Ur(() => {
    const f = e() || null;
    var m = f === "svg" ? qd : null;
    if (f !== o) {
      var h = ii;
      Sl(v), d && (f === null ? Dr(d, () => {
        d = null, c = null;
      }) : f === c ? Ho(d) : (qt(d), El(!1))), f && f !== c && (d = Xt(() => {
        if (l = m ? document.createElementNS(m, f) : document.createElement(f), Ki(l, l), r) {
          var p = (
            /** @type {TemplateNode} */
            l.appendChild(Nr())
          );
          r(l, p);
        }
        We.nodes_end = l, u.before(l);
      })), o = f, o && (c = o), El(!0), Sl(h);
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
      Na(() => {
        var o = n();
        hc(o), i && Vs(a, o) && (a = o, r.update(o));
      }), i = !0;
    }
    if (r != null && r.destroy)
      return () => (
        /** @type {Function} */
        r.destroy()
      );
  });
}
function ah(t, e) {
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
function bc(t) {
  var e, n, r = "";
  if (typeof t == "string" || typeof t == "number") r += t;
  else if (typeof t == "object") if (Array.isArray(t)) {
    var i = t.length;
    for (e = 0; e < i; e++) t[e] && (n = bc(t[e])) && (r && (r += " "), r += n);
  } else for (n in t) t[n] && (r && (r += " "), r += n);
  return r;
}
function oh() {
  for (var t, e, n = 0, r = "", i = arguments.length; n < i; n++) (t = arguments[n]) && (e = bc(t)) && (r && (r += " "), r += e);
  return r;
}
function _c(t) {
  return typeof t == "object" ? oh(t) : t ?? "";
}
const Cl = [...` 	
\r\f \v\uFEFF`];
function sh(t, e, n) {
  var r = t == null ? "" : "" + t;
  if (e && (r = r ? r + " " + e : e), n) {
    for (var i in n)
      if (n[i])
        r = r ? r + " " + i : i;
      else if (r.length)
        for (var a = i.length, o = 0; (o = r.indexOf(i, o)) >= 0; ) {
          var c = o + a;
          (o === 0 || Cl.includes(r[o - 1])) && (c === r.length || Cl.includes(r[c])) ? r = (o === 0 ? "" : r.substring(0, o)) + r.substring(c + 1) : o = c;
        }
  }
  return r === "" ? null : r;
}
function Tl(t, e = !1) {
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
function lh(t, e) {
  if (e) {
    var n = "", r, i;
    if (Array.isArray(e) ? (r = e[0], i = e[1]) : r = e, t) {
      t = String(t).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var a = !1, o = 0, c = !1, l = [];
      r && l.push(...Object.keys(r).map(Wo)), i && l.push(...Object.keys(i).map(Wo));
      var u = 0, d = -1;
      const p = t.length;
      for (var v = 0; v < p; v++) {
        var f = t[v];
        if (c ? f === "/" && t[v - 1] === "*" && (c = !1) : a ? a === f && (a = !1) : f === "/" && t[v + 1] === "*" ? c = !0 : f === '"' || f === "'" ? a = f : f === "(" ? o++ : f === ")" && o--, !c && a === !1 && o === 0) {
          if (f === ":" && d === -1)
            d = v;
          else if (f === ";" || v === p - 1) {
            if (d !== -1) {
              var m = Wo(t.substring(u, d).trim());
              if (!l.includes(m)) {
                f !== ";" && v++;
                var h = t.substring(u, v).trim();
                n += " " + h + ";";
              }
            }
            u = v + 1, d = -1;
          }
        }
      }
    }
    return r && (n += Tl(r)), i && (n += Tl(i, !0)), n = n.trim(), n === "" ? null : n;
  }
  return t == null ? null : String(t);
}
function Xs(t, e, n, r, i, a) {
  var o = t.__className;
  if (o !== n || o === void 0) {
    var c = sh(n, r, a);
    c == null ? t.removeAttribute("class") : e ? t.className = c : t.setAttribute("class", c), t.__className = n;
  } else if (a && i !== a)
    for (var l in a) {
      var u = !!a[l];
      (i == null || u !== !!i[l]) && t.classList.toggle(l, u);
    }
  return a;
}
function qo(t, e = {}, n, r) {
  for (var i in n) {
    var a = n[i];
    e[i] !== a && (n[i] == null ? t.style.removeProperty(i) : t.style.setProperty(i, a, r));
  }
}
function pt(t, e, n, r) {
  var i = t.__style;
  if (i !== e) {
    var a = lh(e, r);
    a == null ? t.removeAttribute("style") : t.style.cssText = a, t.__style = e;
  } else r && (Array.isArray(r) ? (qo(t, n == null ? void 0 : n[0], r[0]), qo(t, n == null ? void 0 : n[1], r[1], "important")) : qo(t, n, r));
  return r;
}
function _s(t, e, n = !1) {
  if (t.multiple) {
    if (e == null)
      return;
    if (!Lo(e))
      return cf();
    for (var r of t.options)
      r.selected = e.includes(xl(r));
    return;
  }
  for (r of t.options) {
    var i = xl(r);
    if (Of(i, e)) {
      r.selected = !0;
      return;
    }
  }
  (!n || e !== void 0) && (t.selectedIndex = -1);
}
function uh(t) {
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
function xl(t) {
  return "__value" in t ? t.__value : t.value;
}
const ua = Symbol("class"), ca = Symbol("style"), yc = Symbol("is custom element"), Ic = Symbol("is html");
function wl(t, e) {
  var n = Ys(t);
  n.value === (n.value = // treat null and undefined the same for the initial value
  e ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  t.value === e && (e !== 0 || t.nodeName !== "PROGRESS") || (t.value = e ?? "");
}
function ch(t, e) {
  e ? t.hasAttribute("selected") || t.setAttribute("selected", "") : t.removeAttribute("selected");
}
function gr(t, e, n, r) {
  var i = Ys(t);
  i[e] !== (i[e] = n) && (e === "loading" && (t[Jd] = n), n == null ? t.removeAttribute(e) : typeof n != "string" && Ec(t).includes(e) ? t[e] = n : t.setAttribute(e, n));
}
function dh(t, e, n, r, i = !1, a = !1) {
  var o = Ys(t), c = o[yc], l = !o[Ic], u = e || {}, d = t.tagName === "OPTION";
  for (var v in e)
    v in n || (n[v] = null);
  n.class ? n.class = _c(n.class) : n[ua] && (n.class = null), n[ca] && (n.style ?? (n.style = null));
  var f = Ec(t);
  for (const I in n) {
    let b = n[I];
    if (d && I === "value" && b == null) {
      t.value = t.__value = "", u[I] = b;
      continue;
    }
    if (I === "class") {
      var m = t.namespaceURI === "http://www.w3.org/1999/xhtml";
      Xs(t, m, b, r, e == null ? void 0 : e[ua], n[ua]), u[I] = b, u[ua] = n[ua];
      continue;
    }
    if (I === "style") {
      pt(t, b, e == null ? void 0 : e[ca], n[ca]), u[I] = b, u[ca] = n[ca];
      continue;
    }
    var h = u[I];
    if (!(b === h && !(b === void 0 && t.hasAttribute(I)))) {
      u[I] = b;
      var p = I[0] + I[1];
      if (p !== "$$")
        if (p === "on") {
          const S = {}, E = "$$" + I;
          let x = I.slice(2);
          var _ = Xf(x);
          if (zf(x) && (x = x.slice(0, -7), S.capture = !0), !_ && h) {
            if (b != null) continue;
            t.removeEventListener(x, u[E], S), u[E] = null;
          }
          if (b != null)
            if (_)
              t[`__${x}`] = b, wn([x]);
            else {
              let A = function(C) {
                u[I].call(this, C);
              };
              u[E] = Ks(x, t, A, S);
            }
          else _ && (t[`__${x}`] = void 0);
        } else if (I === "style")
          gr(t, I, b);
        else if (I === "autofocus")
          Mf(
            /** @type {HTMLElement} */
            t,
            !!b
          );
        else if (!c && (I === "__value" || I === "value" && b != null))
          t.value = t.__value = b;
        else if (I === "selected" && d)
          ch(
            /** @type {HTMLOptionElement} */
            t,
            b
          );
        else {
          var y = I;
          l || (y = Zf(y));
          var T = y === "defaultValue" || y === "defaultChecked";
          if (b == null && !c && !T)
            if (o[I] = null, y === "value" || y === "checked") {
              let S = (
                /** @type {HTMLInputElement} */
                t
              );
              const E = e === void 0;
              if (y === "value") {
                let x = S.defaultValue;
                S.removeAttribute(y), S.defaultValue = x, S.value = S.__value = E ? x : null;
              } else {
                let x = S.defaultChecked;
                S.removeAttribute(y), S.defaultChecked = x, S.checked = E ? x : !1;
              }
            } else
              t.removeAttribute(I);
          else T || f.includes(y) && (c || typeof b != "string") ? (t[y] = b, y in o && (o[y] = Ft)) : typeof b != "function" && gr(t, y, b);
        }
    }
  }
  return u;
}
function He(t, e, n = [], r = [], i, a = !1, o = !1) {
  ju(n, r, (c) => {
    var l = void 0, u = {}, d = t.nodeName === "SELECT", v = !1;
    if (Ur(() => {
      var m = e(...c.map(s)), h = dh(
        t,
        l,
        m,
        i,
        a,
        o
      );
      v && d && "value" in m && _s(
        /** @type {HTMLSelectElement} */
        t,
        m.value
      );
      for (let _ of Object.getOwnPropertySymbols(u))
        m[_] || qt(u[_]);
      for (let _ of Object.getOwnPropertySymbols(m)) {
        var p = m[_];
        _.description === zd && (!l || p !== l[_]) && (u[_] && qt(u[_]), u[_] = Xt(() => ah(t, () => p))), h[_] = p;
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
        ), uh(f);
      });
    }
    v = !0;
  });
}
function Ys(t) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    t.__attributes ?? (t.__attributes = {
      [yc]: t.nodeName.includes("-"),
      [Ic]: t.namespaceURI === Wd
    })
  );
}
var Ll = /* @__PURE__ */ new Map();
function Ec(t) {
  var e = t.getAttribute("is") || t.nodeName, n = Ll.get(e);
  if (n) return n;
  Ll.set(e, n = []);
  for (var r, i = t, a = Element.prototype; a !== i; ) {
    r = Ou(i);
    for (var o in r)
      r[o].set && n.push(o);
    i = Us(i);
  }
  return n;
}
const fh = () => performance.now(), fr = {
  // don't access requestAnimationFrame eagerly outside method
  // this allows basic testing of user code without JSDOM
  // bunder will eval and remove ternary when the user's app is built
  tick: (
    /** @param {any} _ */
    (t) => requestAnimationFrame(t)
  ),
  now: () => fh(),
  tasks: /* @__PURE__ */ new Set()
};
function Sc() {
  const t = fr.now();
  fr.tasks.forEach((e) => {
    e.c(t) || (fr.tasks.delete(e), e.f());
  }), fr.tasks.size !== 0 && fr.tick(Sc);
}
function hh(t) {
  let e;
  return fr.tasks.size === 0 && fr.tick(Sc), {
    promise: new Promise((n) => {
      fr.tasks.add(e = { c: t, f: n });
    }),
    abort() {
      fr.tasks.delete(e);
    }
  };
}
function ja(t, e) {
  ea(() => {
    t.dispatchEvent(new CustomEvent(e));
  });
}
function vh(t) {
  if (t === "float") return "cssFloat";
  if (t === "offset") return "cssOffset";
  if (t.startsWith("--")) return t;
  const e = t.split("-");
  return e.length === 1 ? e[0] : e[0] + e.slice(1).map(
    /** @param {any} word */
    (n) => n[0].toUpperCase() + n.slice(1)
  ).join("");
}
function Ol(t) {
  const e = {}, n = t.split(";");
  for (const r of n) {
    const [i, a] = r.split(":");
    if (!i || a === void 0) break;
    const o = vh(i.trim());
    e[o] = a.trim();
  }
  return e;
}
const mh = (t) => t;
function gh(t, e, n) {
  var r = (
    /** @type {EachItem} */
    ii
  ), i, a, o, c = null;
  r.a ?? (r.a = {
    element: t,
    measure() {
      i = this.element.getBoundingClientRect();
    },
    apply() {
      if (o == null || o.abort(), a = this.element.getBoundingClientRect(), i.left !== a.left || i.right !== a.right || i.top !== a.top || i.bottom !== a.bottom) {
        const l = e()(this.element, { from: i, to: a }, n == null ? void 0 : n());
        o = mo(this.element, l, void 0, 1, () => {
          o == null || o.abort(), o = void 0;
        });
      }
    },
    fix() {
      if (!t.getAnimations().length) {
        var { position: l, width: u, height: d } = getComputedStyle(t);
        if (l !== "absolute" && l !== "fixed") {
          var v = (
            /** @type {HTMLElement | SVGElement} */
            t.style
          );
          c = {
            position: v.position,
            width: v.width,
            height: v.height,
            transform: v.transform
          }, v.position = "absolute", v.width = u, v.height = d;
          var f = t.getBoundingClientRect();
          if (i.left !== f.left || i.top !== f.top) {
            var m = `translate(${i.left - f.left}px, ${i.top - f.top}px)`;
            v.transform = v.transform ? `${v.transform} ${m}` : m;
          }
        }
      }
    },
    unfix() {
      if (c) {
        var l = (
          /** @type {HTMLElement | SVGElement} */
          t.style
        );
        l.position = c.position, l.width = c.width, l.height = c.height, l.transform = c.transform;
      }
    }
  }), r.a.element = t;
}
function vo(t, e, n, r) {
  var i = (t & 1) !== 0, a = (t & 2) !== 0, o = i && a, c = (t & 4) !== 0, l = o ? "both" : i ? "in" : "out", u, d = e.inert, v = e.style.overflow, f, m;
  function h() {
    return ea(() => u ?? (u = n()(e, (r == null ? void 0 : r()) ?? /** @type {P} */
    {}, {
      direction: l
    })));
  }
  var p = {
    is_global: c,
    in() {
      var I;
      if (e.inert = d, !i) {
        m == null || m.abort(), (I = m == null ? void 0 : m.reset) == null || I.call(m);
        return;
      }
      a || f == null || f.abort(), ja(e, "introstart"), f = mo(e, h(), m, 1, () => {
        ja(e, "introend"), f == null || f.abort(), f = u = void 0, e.style.overflow = v;
      });
    },
    out(I) {
      if (!a) {
        I == null || I(), u = void 0;
        return;
      }
      e.inert = !0, ja(e, "outrostart"), m = mo(e, h(), f, 0, () => {
        ja(e, "outroend"), I == null || I();
      });
    },
    stop: () => {
      f == null || f.abort(), m == null || m.abort();
    }
  }, _ = (
    /** @type {Effect} */
    We
  );
  if ((_.transitions ?? (_.transitions = [])).push(p), i && ho) {
    var y = c;
    if (!y) {
      for (var T = (
        /** @type {Effect | null} */
        _.parent
      ); T && T.f & Hr; )
        for (; (T = T.parent) && !(T.f & Mr); )
          ;
      y = !T || (T.f & Ro) !== 0;
    }
    y && di(() => {
      Gn(() => p.in());
    });
  }
}
function mo(t, e, n, r, i) {
  var a = r === 1;
  if (Li(e)) {
    var o, c = !1;
    return pr(() => {
      if (!c) {
        var _ = e({ direction: a ? "in" : "out" });
        o = mo(t, _, n, r, i);
      }
    }), {
      abort: () => {
        c = !0, o == null || o.abort();
      },
      deactivate: () => o.deactivate(),
      reset: () => o.reset(),
      t: () => o.t()
    };
  }
  if (n == null || n.deactivate(), !(e != null && e.duration))
    return i(), {
      abort: he,
      deactivate: he,
      reset: he,
      t: () => r
    };
  const { delay: l = 0, css: u, tick: d, easing: v = mh } = e;
  var f = [];
  if (a && n === void 0 && (d && d(0, 1), u)) {
    var m = Ol(u(0, 1));
    f.push(m, m);
  }
  var h = () => 1 - r, p = t.animate(f, { duration: l, fill: "forwards" });
  return p.onfinish = () => {
    p.cancel();
    var _ = (n == null ? void 0 : n.t()) ?? 1 - r;
    n == null || n.abort();
    var y = r - _, T = (
      /** @type {number} */
      e.duration * Math.abs(y)
    ), I = [];
    if (T > 0) {
      var b = !1;
      if (u)
        for (var S = Math.ceil(T / 16.666666666666668), E = 0; E <= S; E += 1) {
          var x = _ + y * v(E / S), A = Ol(u(x, 1 - x));
          I.push(A), b || (b = A.overflow === "hidden");
        }
      b && (t.style.overflow = "hidden"), h = () => {
        var C = (
          /** @type {number} */
          /** @type {globalThis.Animation} */
          p.currentTime
        );
        return _ + y * v(C / T);
      }, d && hh(() => {
        if (p.playState !== "running") return !1;
        var C = h();
        return d(C, 1 - C), !0;
      });
    }
    p = t.animate(I, { duration: T, fill: "forwards" }), p.onfinish = () => {
      h = () => r, d == null || d(r, 1 - r), i();
    };
  }, {
    abort: () => {
      p && (p.cancel(), p.effect = null, p.onfinish = he);
    },
    deactivate: () => {
      i = he;
    },
    reset: () => {
      r === 0 && (d == null || d(1, 0));
    },
    t: () => h()
  };
}
function Ta(t, e, n = e) {
  var r = /* @__PURE__ */ new WeakSet();
  Qu(t, "input", async (i) => {
    var a = i ? t.defaultValue : t.value;
    if (a = zo(t) ? Ko(a) : a, n(a), lt !== null && r.add(lt), await dc(), a !== (a = e())) {
      var o = t.selectionStart, c = t.selectionEnd, l = t.value.length;
      if (t.value = a ?? "", c !== null) {
        var u = t.value.length;
        o === c && c === l && u > l ? (t.selectionStart = u, t.selectionEnd = u) : (t.selectionStart = o, t.selectionEnd = Math.min(c, u));
      }
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  Gn(e) == null && t.value && (n(zo(t) ? Ko(t.value) : t.value), lt !== null && r.add(lt)), Na(() => {
    var i = e();
    if (t === document.activeElement) {
      var a = (
        /** @type {Batch} */
        eo ?? lt
      );
      if (r.has(a))
        return;
    }
    zo(t) && i === Ko(t.value) || t.type === "date" && !i && !t.value || i !== t.value && (t.value = i ?? "");
  });
}
function ph(t, e, n = e) {
  Qu(t, "change", (r) => {
    var i = r ? t.defaultChecked : t.checked;
    n(i);
  }), // If we are hydrating and the value has since changed,
  // then use the update value from the input instead.
  // If defaultChecked is set, then checked == defaultChecked
  Gn(e) == null && n(t.checked), Na(() => {
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
function Rl(t, e) {
  return t === e || (t == null ? void 0 : t[Jn]) === e;
}
function Ae(t = {}, e, n, r) {
  return di(() => {
    var i, a;
    return Na(() => {
      i = a, a = (r == null ? void 0 : r()) || [], Gn(() => {
        t !== n(...a) && (e(t, ...a), i && Rl(n(...i), t) && e(null, ...i));
      });
    }), () => {
      pr(() => {
        a && Rl(n(...a), t) && e(null, ...a);
      });
    };
  }), t;
}
function bh(t = !1) {
  const e = (
    /** @type {ComponentContextLegacy} */
    ct
  ), n = e.l.u;
  if (!n) return;
  let r = () => hc(e.s);
  if (t) {
    let i = 0, a = (
      /** @type {Record<string, any>} */
      {}
    );
    const o = /* @__PURE__ */ Pa(() => {
      let c = !1;
      const l = e.s;
      for (const u in l)
        l[u] !== a[u] && (a[u] = l[u], c = !0);
      return c && i++, i;
    });
    r = () => s(o);
  }
  n.b.length && ec(() => {
    Dl(e, r), lo(n.b);
  }), Te(() => {
    const i = Gn(() => n.m.map(Zd));
    return () => {
      for (const a of i)
        typeof a == "function" && a();
    };
  }), n.a.length && Te(() => {
    Dl(e, r), lo(n.a);
  });
}
function Dl(t, e) {
  if (t.l.s)
    for (const n of t.l.s) s(n);
  e();
}
function Zs(t, e, n) {
  if (t == null)
    return e(void 0), n && n(void 0), he;
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
function _h(t, e) {
  return {
    subscribe: Bt(t, e).subscribe
  };
}
function Bt(t, e = he) {
  let n = null;
  const r = /* @__PURE__ */ new Set();
  function i(c) {
    if (Vs(t, c) && (t = c, n)) {
      const l = !Ai.length;
      for (const u of r)
        u[1](), Ai.push(u, t);
      if (l) {
        for (let u = 0; u < Ai.length; u += 2)
          Ai[u][0](Ai[u + 1]);
        Ai.length = 0;
      }
    }
  }
  function a(c) {
    i(c(
      /** @type {T} */
      t
    ));
  }
  function o(c, l = he) {
    const u = [c, l];
    return r.add(u), r.size === 1 && (n = e(i, a) || he), c(
      /** @type {T} */
      t
    ), () => {
      r.delete(u), r.size === 0 && n && (n(), n = null);
    };
  }
  return { set: i, update: a, subscribe: o };
}
function ta(t, e, n) {
  const r = !Array.isArray(t), i = r ? [t] : t;
  if (!i.every(Boolean))
    throw new Error("derived() expects stores as input, got a falsy value");
  const a = e.length < 2;
  return _h(n, (o, c) => {
    let l = !1;
    const u = [];
    let d = 0, v = he;
    const f = () => {
      if (d)
        return;
      v();
      const h = e(r ? u[0] : u, o, c);
      a ? o(h) : v = typeof h == "function" ? h : he;
    }, m = i.map(
      (h, p) => Zs(
        h,
        (_) => {
          u[p] = _, d &= ~(1 << p), l && f();
        },
        () => {
          d |= 1 << p;
        }
      )
    );
    return l = !0, f(), function() {
      lo(m), v(), l = !1;
    };
  });
}
function Ac(t) {
  let e;
  return Zs(t, (n) => e = n)(), e;
}
let Wa = !1, ys = Symbol();
function kn(t, e, n) {
  const r = n[e] ?? (n[e] = {
    store: null,
    source: /* @__PURE__ */ zu(void 0),
    unsubscribe: he
  });
  if (r.store !== t && !(ys in n))
    if (r.unsubscribe(), r.store = t ?? null, t == null)
      r.source.v = void 0, r.unsubscribe = he;
    else {
      var i = !0;
      r.unsubscribe = Zs(t, (a) => {
        i ? r.source.v = a : Q(r.source, a);
      }), i = !1;
    }
  return t && ys in n ? Ac(t) : s(r.source);
}
function Nn(t, e) {
  return t.set(e), e;
}
function rr() {
  const t = {};
  function e() {
    Po(() => {
      for (var n in t)
        t[n].unsubscribe();
      so(t, ys, {
        enumerable: !1,
        value: !0
      });
    });
  }
  return [t, e];
}
function yh(t) {
  var e = Wa;
  try {
    return Wa = !1, [t(), Wa];
  } finally {
    Wa = e;
  }
}
const Ih = {
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
function Ge(t, e, n) {
  return new Proxy(
    { props: t, exclude: e },
    Ih
  );
}
const Eh = {
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
    if (e === Jn || e === Mu) return !1;
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
  return new Proxy({ props: t }, Eh);
}
function g(t, e, n, r) {
  var I;
  var i = !$i || (n & 2) !== 0, a = (n & 8) !== 0, o = (n & 16) !== 0, c = (
    /** @type {V} */
    r
  ), l = !0, u = () => (l && (l = !1, c = o ? Gn(
    /** @type {() => V} */
    r
  ) : (
    /** @type {V} */
    r
  )), c), d;
  if (a) {
    var v = Jn in t || Mu in t;
    d = ((I = Or(t, e)) == null ? void 0 : I.set) ?? (v && e in t ? (b) => t[e] = b : void 0);
  }
  var f, m = !1;
  a ? [f, m] = yh(() => (
    /** @type {V} */
    t[e]
  )) : f = /** @type {V} */
  t[e], f === void 0 && r !== void 0 && (f = u(), d && (i && af(), d(f)));
  var h;
  if (i ? h = () => {
    var b = (
      /** @type {V} */
      t[e]
    );
    return b === void 0 ? u() : (l = !0, b);
  } : h = () => {
    var b = (
      /** @type {V} */
      t[e]
    );
    return b !== void 0 && (c = /** @type {V} */
    void 0), b === void 0 ? c : b;
  }, i && !(n & 4))
    return h;
  if (d) {
    var p = t.$$legacy;
    return (
      /** @type {() => V} */
      function(b, S) {
        return arguments.length > 0 ? ((!i || !S || p || m) && d(S ? h() : b), b) : h();
      }
    );
  }
  var _ = !1, y = (n & 1 ? Pa : Gs)(() => (_ = !1, h()));
  a && s(y);
  var T = (
    /** @type {Effect} */
    We
  );
  return (
    /** @type {() => V} */
    function(b, S) {
      if (arguments.length > 0) {
        const E = S ? s(y) : i && a ? ye(b) : b;
        return Q(y, E), _ = !0, c !== void 0 && (c = E), b;
      }
      return fi && _ || T.f & ci ? y.v : s(y);
    }
  );
}
const Sh = "5";
var wu;
typeof window < "u" && ((wu = window.__svelte ?? (window.__svelte = {})).v ?? (wu.v = /* @__PURE__ */ new Set())).add(Sh);
function Ah(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var Ch = function(e) {
  return Th(e) && !xh(e);
};
function Th(t) {
  return !!t && typeof t == "object";
}
function xh(t) {
  var e = Object.prototype.toString.call(t);
  return e === "[object RegExp]" || e === "[object Date]" || Oh(t);
}
var wh = typeof Symbol == "function" && Symbol.for, Lh = wh ? Symbol.for("react.element") : 60103;
function Oh(t) {
  return t.$$typeof === Lh;
}
function Rh(t) {
  return Array.isArray(t) ? [] : {};
}
function xa(t, e) {
  return e.clone !== !1 && e.isMergeableObject(t) ? Xi(Rh(t), t, e) : t;
}
function Dh(t, e, n) {
  return t.concat(e).map(function(r) {
    return xa(r, n);
  });
}
function Mh(t, e) {
  if (!e.customMerge)
    return Xi;
  var n = e.customMerge(t);
  return typeof n == "function" ? n : Xi;
}
function Ph(t) {
  return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(t).filter(function(e) {
    return Object.propertyIsEnumerable.call(t, e);
  }) : [];
}
function Ml(t) {
  return Object.keys(t).concat(Ph(t));
}
function Cc(t, e) {
  try {
    return e in t;
  } catch {
    return !1;
  }
}
function Hh(t, e) {
  return Cc(t, e) && !(Object.hasOwnProperty.call(t, e) && Object.propertyIsEnumerable.call(t, e));
}
function Nh(t, e, n) {
  var r = {};
  return n.isMergeableObject(t) && Ml(t).forEach(function(i) {
    r[i] = xa(t[i], n);
  }), Ml(e).forEach(function(i) {
    Hh(t, i) || (Cc(t, i) && n.isMergeableObject(e[i]) ? r[i] = Mh(i, n)(t[i], e[i], n) : r[i] = xa(e[i], n));
  }), r;
}
function Xi(t, e, n) {
  n = n || {}, n.arrayMerge = n.arrayMerge || Dh, n.isMergeableObject = n.isMergeableObject || Ch, n.cloneUnlessOtherwiseSpecified = xa;
  var r = Array.isArray(e), i = Array.isArray(t), a = r === i;
  return a ? r ? n.arrayMerge(t, e, n) : Nh(t, e, n) : xa(e, n);
}
Xi.all = function(e, n) {
  if (!Array.isArray(e))
    throw new Error("first argument should be an array");
  return e.reduce(function(r, i) {
    return Xi(r, i, n);
  }, {});
};
var Uh = Xi, Fh = Uh;
const kh = /* @__PURE__ */ Ah(Fh);
var Is = function(t, e) {
  return Is = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, r) {
    n.__proto__ = r;
  } || function(n, r) {
    for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (n[i] = r[i]);
  }, Is(t, e);
};
function qe(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  Is(t, e);
  function n() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : (n.prototype = e.prototype, new n());
}
var ge = function() {
  return ge = Object.assign || function(e) {
    for (var n, r = 1, i = arguments.length; r < i; r++) {
      n = arguments[r];
      for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, ge.apply(this, arguments);
};
function Bh(t, e) {
  var n = {};
  for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(t); i < r.length; i++)
      e.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[i]) && (n[r[i]] = t[r[i]]);
  return n;
}
function Tc(t, e, n, r) {
  function i(a) {
    return a instanceof n ? a : new n(function(o) {
      o(a);
    });
  }
  return new (n || (n = Promise))(function(a, o) {
    function c(d) {
      try {
        u(r.next(d));
      } catch (v) {
        o(v);
      }
    }
    function l(d) {
      try {
        u(r.throw(d));
      } catch (v) {
        o(v);
      }
    }
    function u(d) {
      d.done ? a(d.value) : i(d.value).then(c, l);
    }
    u((r = r.apply(t, e || [])).next());
  });
}
function Qs(t, e) {
  var n = { label: 0, sent: function() {
    if (a[0] & 1) throw a[1];
    return a[1];
  }, trys: [], ops: [] }, r, i, a, o = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
  return o.next = c(0), o.throw = c(1), o.return = c(2), typeof Symbol == "function" && (o[Symbol.iterator] = function() {
    return this;
  }), o;
  function c(u) {
    return function(d) {
      return l([u, d]);
    };
  }
  function l(u) {
    if (r) throw new TypeError("Generator is already executing.");
    for (; o && (o = 0, u[0] && (n = 0)), n; ) try {
      if (r = 1, i && (a = u[0] & 2 ? i.return : u[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, u[1])).done) return a;
      switch (i = 0, a && (u = [u[0] & 2, a.value]), u[0]) {
        case 0:
        case 1:
          a = u;
          break;
        case 4:
          return n.label++, { value: u[1], done: !1 };
        case 5:
          n.label++, i = u[1], u = [0];
          continue;
        case 7:
          u = n.ops.pop(), n.trys.pop();
          continue;
        default:
          if (a = n.trys, !(a = a.length > 0 && a[a.length - 1]) && (u[0] === 6 || u[0] === 2)) {
            n = 0;
            continue;
          }
          if (u[0] === 3 && (!a || u[1] > a[0] && u[1] < a[3])) {
            n.label = u[1];
            break;
          }
          if (u[0] === 6 && n.label < a[1]) {
            n.label = a[1], a = u;
            break;
          }
          if (a && n.label < a[2]) {
            n.label = a[2], n.ops.push(u);
            break;
          }
          a[2] && n.ops.pop(), n.trys.pop();
          continue;
      }
      u = e.call(t, n);
    } catch (d) {
      u = [6, d], i = 0;
    } finally {
      r = a = 0;
    }
    if (u[0] & 5) throw u[1];
    return { value: u[0] ? u[1] : void 0, done: !0 };
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
  } catch (c) {
    o = { error: c };
  } finally {
    try {
      i && !i.done && (n = r.return) && n.call(r);
    } finally {
      if (o) throw o.error;
    }
  }
  return a;
}
function $n(t, e, n) {
  if (n || arguments.length === 2) for (var r = 0, i = e.length, a; r < i; r++)
    (a || !(r in e)) && (a || (a = Array.prototype.slice.call(e, 0, r)), a[r] = e[r]);
  return t.concat(a || Array.prototype.slice.call(e));
}
function Hi(t) {
  return this instanceof Hi ? (this.v = t, this) : new Hi(t);
}
function Vh(t, e, n) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var r = n.apply(t, e || []), i, a = [];
  return i = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype), c("next"), c("throw"), c("return", o), i[Symbol.asyncIterator] = function() {
    return this;
  }, i;
  function o(m) {
    return function(h) {
      return Promise.resolve(h).then(m, v);
    };
  }
  function c(m, h) {
    r[m] && (i[m] = function(p) {
      return new Promise(function(_, y) {
        a.push([m, p, _, y]) > 1 || l(m, p);
      });
    }, h && (i[m] = h(i[m])));
  }
  function l(m, h) {
    try {
      u(r[m](h));
    } catch (p) {
      f(a[0][3], p);
    }
  }
  function u(m) {
    m.value instanceof Hi ? Promise.resolve(m.value.v).then(d, v) : f(a[0][2], m);
  }
  function d(m) {
    l("next", m);
  }
  function v(m) {
    l("throw", m);
  }
  function f(m, h) {
    m(h), a.shift(), a.length && l(a[0][0], a[0][1]);
  }
}
function Gh(t) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var e = t[Symbol.asyncIterator], n;
  return e ? e.call(t) : (t = typeof kt == "function" ? kt(t) : t[Symbol.iterator](), n = {}, r("next"), r("throw"), r("return"), n[Symbol.asyncIterator] = function() {
    return this;
  }, n);
  function r(a) {
    n[a] = t[a] && function(o) {
      return new Promise(function(c, l) {
        o = t[a](o), i(c, l, o.done, o.value);
      });
    };
  }
  function i(a, o, c, l) {
    Promise.resolve(l).then(function(u) {
      a({ value: u, done: c });
    }, o);
  }
}
function Xo(t, e) {
  var n = e && e.cache ? e.cache : Yh, r = e && e.serializer ? e.serializer : Kh, i = e && e.strategy ? e.strategy : qh;
  return i(t, {
    cache: n,
    serializer: r
  });
}
function jh(t) {
  return t == null || typeof t == "number" || typeof t == "boolean";
}
function Wh(t, e, n, r) {
  var i = jh(r) ? r : n(r), a = e.get(i);
  return typeof a > "u" && (a = t.call(this, r), e.set(i, a)), a;
}
function xc(t, e, n) {
  var r = Array.prototype.slice.call(arguments, 3), i = n(r), a = e.get(i);
  return typeof a > "u" && (a = t.apply(this, r), e.set(i, a)), a;
}
function wc(t, e, n, r, i) {
  return n.bind(e, t, r, i);
}
function qh(t, e) {
  var n = t.length === 1 ? Wh : xc;
  return wc(t, this, n, e.cache.create(), e.serializer);
}
function zh(t, e) {
  return wc(t, this, xc, e.cache.create(), e.serializer);
}
var Kh = function() {
  return JSON.stringify(arguments);
}, Xh = (
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
), Yh = {
  create: function() {
    return new Xh();
  }
}, Yo = {
  variadic: zh
}, Ze;
(function(t) {
  t[t.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", t[t.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", t[t.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", t[t.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", t[t.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", t[t.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", t[t.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", t[t.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", t[t.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", t[t.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", t[t.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", t[t.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", t[t.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", t[t.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", t[t.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", t[t.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", t[t.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", t[t.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", t[t.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", t[t.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", t[t.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", t[t.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", t[t.INVALID_TAG = 23] = "INVALID_TAG", t[t.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", t[t.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", t[t.UNCLOSED_TAG = 27] = "UNCLOSED_TAG";
})(Ze || (Ze = {}));
var gt;
(function(t) {
  t[t.literal = 0] = "literal", t[t.argument = 1] = "argument", t[t.number = 2] = "number", t[t.date = 3] = "date", t[t.time = 4] = "time", t[t.select = 5] = "select", t[t.plural = 6] = "plural", t[t.pound = 7] = "pound", t[t.tag = 8] = "tag";
})(gt || (gt = {}));
var Yi;
(function(t) {
  t[t.number = 0] = "number", t[t.dateTime = 1] = "dateTime";
})(Yi || (Yi = {}));
function Pl(t) {
  return t.type === gt.literal;
}
function Zh(t) {
  return t.type === gt.argument;
}
function Lc(t) {
  return t.type === gt.number;
}
function Oc(t) {
  return t.type === gt.date;
}
function Rc(t) {
  return t.type === gt.time;
}
function Dc(t) {
  return t.type === gt.select;
}
function Mc(t) {
  return t.type === gt.plural;
}
function Qh(t) {
  return t.type === gt.pound;
}
function Pc(t) {
  return t.type === gt.tag;
}
function Hc(t) {
  return !!(t && typeof t == "object" && t.type === Yi.number);
}
function Es(t) {
  return !!(t && typeof t == "object" && t.type === Yi.dateTime);
}
var Nc = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/, Jh = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
function $h(t) {
  var e = {};
  return t.replace(Jh, function(n) {
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
var ev = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
function tv(t) {
  if (t.length === 0)
    throw new Error("Number skeleton cannot be empty");
  for (var e = t.split(ev).filter(function(f) {
    return f.length > 0;
  }), n = [], r = 0, i = e; r < i.length; r++) {
    var a = i[r], o = a.split("/");
    if (o.length === 0)
      throw new Error("Invalid number skeleton");
    for (var c = o[0], l = o.slice(1), u = 0, d = l; u < d.length; u++) {
      var v = d[u];
      if (v.length === 0)
        throw new Error("Invalid number skeleton");
    }
    n.push({ stem: c, options: l });
  }
  return n;
}
function nv(t) {
  return t.replace(/^(.*?)-/, "");
}
var Hl = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g, Uc = /^(@+)?(\+|#+)?[rs]?$/g, rv = /(\*)(0+)|(#+)(0+)|(0+)/g, Fc = /^(0+)$/;
function Nl(t) {
  var e = {};
  return t[t.length - 1] === "r" ? e.roundingPriority = "morePrecision" : t[t.length - 1] === "s" && (e.roundingPriority = "lessPrecision"), t.replace(Uc, function(n, r, i) {
    return typeof i != "string" ? (e.minimumSignificantDigits = r.length, e.maximumSignificantDigits = r.length) : i === "+" ? e.minimumSignificantDigits = r.length : r[0] === "#" ? e.maximumSignificantDigits = r.length : (e.minimumSignificantDigits = r.length, e.maximumSignificantDigits = r.length + (typeof i == "string" ? i.length : 0)), "";
  }), e;
}
function kc(t) {
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
function iv(t) {
  var e;
  if (t[0] === "E" && t[1] === "E" ? (e = {
    notation: "engineering"
  }, t = t.slice(2)) : t[0] === "E" && (e = {
    notation: "scientific"
  }, t = t.slice(1)), e) {
    var n = t.slice(0, 2);
    if (n === "+!" ? (e.signDisplay = "always", t = t.slice(2)) : n === "+?" && (e.signDisplay = "exceptZero", t = t.slice(2)), !Fc.test(t))
      throw new Error("Malformed concise eng/scientific notation");
    e.minimumIntegerDigits = t.length;
  }
  return e;
}
function Ul(t) {
  var e = {}, n = kc(t);
  return n || e;
}
function av(t) {
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
        e.style = "unit", e.unit = nv(i.options[0]);
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
        e = ge(ge(ge({}, e), { notation: "scientific" }), i.options.reduce(function(l, u) {
          return ge(ge({}, l), Ul(u));
        }, {}));
        continue;
      case "engineering":
        e = ge(ge(ge({}, e), { notation: "engineering" }), i.options.reduce(function(l, u) {
          return ge(ge({}, l), Ul(u));
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
        i.options[0].replace(rv, function(l, u, d, v, f, m) {
          if (u)
            e.minimumIntegerDigits = d.length;
          else {
            if (v && f)
              throw new Error("We currently do not support maximum integer digits");
            if (m)
              throw new Error("We currently do not support exact integer digits");
          }
          return "";
        });
        continue;
    }
    if (Fc.test(i.stem)) {
      e.minimumIntegerDigits = i.stem.length;
      continue;
    }
    if (Hl.test(i.stem)) {
      if (i.options.length > 1)
        throw new RangeError("Fraction-precision stems only accept a single optional option");
      i.stem.replace(Hl, function(l, u, d, v, f, m) {
        return d === "*" ? e.minimumFractionDigits = u.length : v && v[0] === "#" ? e.maximumFractionDigits = v.length : f && m ? (e.minimumFractionDigits = f.length, e.maximumFractionDigits = f.length + m.length) : (e.minimumFractionDigits = u.length, e.maximumFractionDigits = u.length), "";
      });
      var a = i.options[0];
      a === "w" ? e = ge(ge({}, e), { trailingZeroDisplay: "stripIfInteger" }) : a && (e = ge(ge({}, e), Nl(a)));
      continue;
    }
    if (Uc.test(i.stem)) {
      e = ge(ge({}, e), Nl(i.stem));
      continue;
    }
    var o = kc(i.stem);
    o && (e = ge(ge({}, e), o));
    var c = iv(i.stem);
    c && (e = ge(ge({}, e), c));
  }
  return e;
}
var qa = {
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
function ov(t, e) {
  for (var n = "", r = 0; r < t.length; r++) {
    var i = t.charAt(r);
    if (i === "j") {
      for (var a = 0; r + 1 < t.length && t.charAt(r + 1) === i; )
        a++, r++;
      var o = 1 + (a & 1), c = a < 2 ? 1 : 3 + (a >> 1), l = "a", u = sv(e);
      for ((u == "H" || u == "k") && (c = 0); c-- > 0; )
        n += l;
      for (; o-- > 0; )
        n = u + n;
    } else i === "J" ? n += "H" : n += i;
  }
  return n;
}
function sv(t) {
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
  var i = qa[r || ""] || qa[n || ""] || qa["".concat(n, "-001")] || qa["001"];
  return i[0];
}
var Zo, lv = new RegExp("^".concat(Nc.source, "*")), uv = new RegExp("".concat(Nc.source, "*$"));
function Qe(t, e) {
  return { start: t, end: e };
}
var cv = !!String.prototype.startsWith && "_a".startsWith("a", 1), dv = !!String.fromCodePoint, fv = !!Object.fromEntries, hv = !!String.prototype.codePointAt, vv = !!String.prototype.trimStart, mv = !!String.prototype.trimEnd, gv = !!Number.isSafeInteger, pv = gv ? Number.isSafeInteger : function(t) {
  return typeof t == "number" && isFinite(t) && Math.floor(t) === t && Math.abs(t) <= 9007199254740991;
}, Ss = !0;
try {
  var bv = Vc("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  Ss = ((Zo = bv.exec("a")) === null || Zo === void 0 ? void 0 : Zo[0]) === "a";
} catch {
  Ss = !1;
}
var Fl = cv ? (
  // Native
  function(e, n, r) {
    return e.startsWith(n, r);
  }
) : (
  // For IE11
  function(e, n, r) {
    return e.slice(r, r + n.length) === n;
  }
), As = dv ? String.fromCodePoint : (
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
), kl = (
  // native
  fv ? Object.fromEntries : (
    // Ponyfill
    function(e) {
      for (var n = {}, r = 0, i = e; r < i.length; r++) {
        var a = i[r], o = a[0], c = a[1];
        n[o] = c;
      }
      return n;
    }
  )
), Bc = hv ? (
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
), _v = vv ? (
  // Native
  function(e) {
    return e.trimStart();
  }
) : (
  // Ponyfill
  function(e) {
    return e.replace(lv, "");
  }
), yv = mv ? (
  // Native
  function(e) {
    return e.trimEnd();
  }
) : (
  // Ponyfill
  function(e) {
    return e.replace(uv, "");
  }
);
function Vc(t, e) {
  return new RegExp(t, e);
}
var Cs;
if (Ss) {
  var Bl = Vc("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  Cs = function(e, n) {
    var r;
    Bl.lastIndex = n;
    var i = Bl.exec(e);
    return (r = i[1]) !== null && r !== void 0 ? r : "";
  };
} else
  Cs = function(e, n) {
    for (var r = []; ; ) {
      var i = Bc(e, n);
      if (i === void 0 || Gc(i) || Av(i))
        break;
      r.push(i), n += i >= 65536 ? 2 : 1;
    }
    return As.apply(void 0, r);
  };
var Iv = (
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
            var c = this.clonePosition();
            this.bump(), i.push({
              type: gt.pound,
              location: Qe(c, this.clonePosition())
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
            type: gt.literal,
            value: "<".concat(i, "/>"),
            location: Qe(r, this.clonePosition())
          },
          err: null
        };
      if (this.bumpIf(">")) {
        var a = this.parseMessage(e + 1, n, !0);
        if (a.err)
          return a;
        var o = a.val, c = this.clonePosition();
        if (this.bumpIf("</")) {
          if (this.isEOF() || !Ts(this.char()))
            return this.error(Ze.INVALID_TAG, Qe(c, this.clonePosition()));
          var l = this.clonePosition(), u = this.parseTagName();
          return i !== u ? this.error(Ze.UNMATCHED_CLOSING_TAG, Qe(l, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
            val: {
              type: gt.tag,
              value: i,
              children: o,
              location: Qe(r, this.clonePosition())
            },
            err: null
          } : this.error(Ze.INVALID_TAG, Qe(c, this.clonePosition())));
        } else
          return this.error(Ze.UNCLOSED_TAG, Qe(r, this.clonePosition()));
      } else
        return this.error(Ze.INVALID_TAG, Qe(r, this.clonePosition()));
    }, t.prototype.parseTagName = function() {
      var e = this.offset();
      for (this.bump(); !this.isEOF() && Sv(this.char()); )
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
        var c = this.tryParseLeftAngleBracket();
        if (c) {
          i += c;
          continue;
        }
        break;
      }
      var l = Qe(r, this.clonePosition());
      return {
        val: { type: gt.literal, value: i, location: l },
        err: null
      };
    }, t.prototype.tryParseLeftAngleBracket = function() {
      return !this.isEOF() && this.char() === 60 && (this.ignoreTag || // If at the opening tag or closing tag position, bail.
      !Ev(this.peek() || 0)) ? (this.bump(), "<") : null;
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
              type: gt.argument,
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
      var a, o = this.clonePosition(), c = this.parseIdentifierIfPossible().value, l = this.clonePosition();
      switch (c) {
        case "":
          return this.error(Ze.EXPECT_ARGUMENT_TYPE, Qe(o, l));
        case "number":
        case "date":
        case "time": {
          this.bumpSpace();
          var u = null;
          if (this.bumpIf(",")) {
            this.bumpSpace();
            var d = this.clonePosition(), v = this.parseSimpleArgStyleIfPossible();
            if (v.err)
              return v;
            var f = yv(v.val);
            if (f.length === 0)
              return this.error(Ze.EXPECT_ARGUMENT_STYLE, Qe(this.clonePosition(), this.clonePosition()));
            var m = Qe(d, this.clonePosition());
            u = { style: f, styleLocation: m };
          }
          var h = this.tryParseArgumentClose(i);
          if (h.err)
            return h;
          var p = Qe(i, this.clonePosition());
          if (u && Fl(u == null ? void 0 : u.style, "::", 0)) {
            var _ = _v(u.style.slice(2));
            if (c === "number") {
              var v = this.parseNumberSkeletonFromString(_, u.styleLocation);
              return v.err ? v : {
                val: { type: gt.number, value: r, location: p, style: v.val },
                err: null
              };
            } else {
              if (_.length === 0)
                return this.error(Ze.EXPECT_DATE_TIME_SKELETON, p);
              var y = _;
              this.locale && (y = ov(_, this.locale));
              var f = {
                type: Yi.dateTime,
                pattern: y,
                location: u.styleLocation,
                parsedOptions: this.shouldParseSkeletons ? $h(y) : {}
              }, T = c === "date" ? gt.date : gt.time;
              return {
                val: { type: T, value: r, location: p, style: f },
                err: null
              };
            }
          }
          return {
            val: {
              type: c === "number" ? gt.number : c === "date" ? gt.date : gt.time,
              value: r,
              location: p,
              style: (a = u == null ? void 0 : u.style) !== null && a !== void 0 ? a : null
            },
            err: null
          };
        }
        case "plural":
        case "selectordinal":
        case "select": {
          var I = this.clonePosition();
          if (this.bumpSpace(), !this.bumpIf(","))
            return this.error(Ze.EXPECT_SELECT_ARGUMENT_OPTIONS, Qe(I, ge({}, I)));
          this.bumpSpace();
          var b = this.parseIdentifierIfPossible(), S = 0;
          if (c !== "select" && b.value === "offset") {
            if (!this.bumpIf(":"))
              return this.error(Ze.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, Qe(this.clonePosition(), this.clonePosition()));
            this.bumpSpace();
            var v = this.tryParseDecimalInteger(Ze.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, Ze.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);
            if (v.err)
              return v;
            this.bumpSpace(), b = this.parseIdentifierIfPossible(), S = v.val;
          }
          var E = this.tryParsePluralOrSelectOptions(e, c, n, b);
          if (E.err)
            return E;
          var h = this.tryParseArgumentClose(i);
          if (h.err)
            return h;
          var x = Qe(i, this.clonePosition());
          return c === "select" ? {
            val: {
              type: gt.select,
              value: r,
              options: kl(E.val),
              location: x
            },
            err: null
          } : {
            val: {
              type: gt.plural,
              value: r,
              options: kl(E.val),
              offset: S,
              pluralType: c === "plural" ? "cardinal" : "ordinal",
              location: x
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
        r = tv(e);
      } catch {
        return this.error(Ze.INVALID_NUMBER_SKELETON, n);
      }
      return {
        val: {
          type: Yi.number,
          tokens: r,
          location: n,
          parsedOptions: this.shouldParseSkeletons ? av(r) : {}
        },
        err: null
      };
    }, t.prototype.tryParsePluralOrSelectOptions = function(e, n, r, i) {
      for (var a, o = !1, c = [], l = /* @__PURE__ */ new Set(), u = i.value, d = i.location; ; ) {
        if (u.length === 0) {
          var v = this.clonePosition();
          if (n !== "select" && this.bumpIf("=")) {
            var f = this.tryParseDecimalInteger(Ze.EXPECT_PLURAL_ARGUMENT_SELECTOR, Ze.INVALID_PLURAL_ARGUMENT_SELECTOR);
            if (f.err)
              return f;
            d = Qe(v, this.clonePosition()), u = this.message.slice(v.offset, this.offset());
          } else
            break;
        }
        if (l.has(u))
          return this.error(n === "select" ? Ze.DUPLICATE_SELECT_ARGUMENT_SELECTOR : Ze.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, d);
        u === "other" && (o = !0), this.bumpSpace();
        var m = this.clonePosition();
        if (!this.bumpIf("{"))
          return this.error(n === "select" ? Ze.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : Ze.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, Qe(this.clonePosition(), this.clonePosition()));
        var h = this.parseMessage(e + 1, n, r);
        if (h.err)
          return h;
        var p = this.tryParseArgumentClose(m);
        if (p.err)
          return p;
        c.push([
          u,
          {
            value: h.val,
            location: Qe(m, this.clonePosition())
          }
        ]), l.add(u), this.bumpSpace(), a = this.parseIdentifierIfPossible(), u = a.value, d = a.location;
      }
      return c.length === 0 ? this.error(n === "select" ? Ze.EXPECT_SELECT_ARGUMENT_SELECTOR : Ze.EXPECT_PLURAL_ARGUMENT_SELECTOR, Qe(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !o ? this.error(Ze.MISSING_OTHER_CLAUSE, Qe(this.clonePosition(), this.clonePosition())) : { val: c, err: null };
    }, t.prototype.tryParseDecimalInteger = function(e, n) {
      var r = 1, i = this.clonePosition();
      this.bumpIf("+") || this.bumpIf("-") && (r = -1);
      for (var a = !1, o = 0; !this.isEOF(); ) {
        var c = this.char();
        if (c >= 48 && c <= 57)
          a = !0, o = o * 10 + (c - 48), this.bump();
        else
          break;
      }
      var l = Qe(i, this.clonePosition());
      return a ? (o *= r, pv(o) ? { val: o, err: null } : this.error(n, l)) : this.error(e, l);
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
      var n = Bc(this.message, e);
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
      if (Fl(this.message, e, this.offset())) {
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
      for (; !this.isEOF() && Gc(this.char()); )
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
function Ev(t) {
  return Ts(t) || t === 47;
}
function Sv(t) {
  return t === 45 || t === 46 || t >= 48 && t <= 57 || t === 95 || t >= 97 && t <= 122 || t >= 65 && t <= 90 || t == 183 || t >= 192 && t <= 214 || t >= 216 && t <= 246 || t >= 248 && t <= 893 || t >= 895 && t <= 8191 || t >= 8204 && t <= 8205 || t >= 8255 && t <= 8256 || t >= 8304 && t <= 8591 || t >= 11264 && t <= 12271 || t >= 12289 && t <= 55295 || t >= 63744 && t <= 64975 || t >= 65008 && t <= 65533 || t >= 65536 && t <= 983039;
}
function Gc(t) {
  return t >= 9 && t <= 13 || t === 32 || t === 133 || t >= 8206 && t <= 8207 || t === 8232 || t === 8233;
}
function Av(t) {
  return t >= 33 && t <= 35 || t === 36 || t >= 37 && t <= 39 || t === 40 || t === 41 || t === 42 || t === 43 || t === 44 || t === 45 || t >= 46 && t <= 47 || t >= 58 && t <= 59 || t >= 60 && t <= 62 || t >= 63 && t <= 64 || t === 91 || t === 92 || t === 93 || t === 94 || t === 96 || t === 123 || t === 124 || t === 125 || t === 126 || t === 161 || t >= 162 && t <= 165 || t === 166 || t === 167 || t === 169 || t === 171 || t === 172 || t === 174 || t === 176 || t === 177 || t === 182 || t === 187 || t === 191 || t === 215 || t === 247 || t >= 8208 && t <= 8213 || t >= 8214 && t <= 8215 || t === 8216 || t === 8217 || t === 8218 || t >= 8219 && t <= 8220 || t === 8221 || t === 8222 || t === 8223 || t >= 8224 && t <= 8231 || t >= 8240 && t <= 8248 || t === 8249 || t === 8250 || t >= 8251 && t <= 8254 || t >= 8257 && t <= 8259 || t === 8260 || t === 8261 || t === 8262 || t >= 8263 && t <= 8273 || t === 8274 || t === 8275 || t >= 8277 && t <= 8286 || t >= 8592 && t <= 8596 || t >= 8597 && t <= 8601 || t >= 8602 && t <= 8603 || t >= 8604 && t <= 8607 || t === 8608 || t >= 8609 && t <= 8610 || t === 8611 || t >= 8612 && t <= 8613 || t === 8614 || t >= 8615 && t <= 8621 || t === 8622 || t >= 8623 && t <= 8653 || t >= 8654 && t <= 8655 || t >= 8656 && t <= 8657 || t === 8658 || t === 8659 || t === 8660 || t >= 8661 && t <= 8691 || t >= 8692 && t <= 8959 || t >= 8960 && t <= 8967 || t === 8968 || t === 8969 || t === 8970 || t === 8971 || t >= 8972 && t <= 8991 || t >= 8992 && t <= 8993 || t >= 8994 && t <= 9e3 || t === 9001 || t === 9002 || t >= 9003 && t <= 9083 || t === 9084 || t >= 9085 && t <= 9114 || t >= 9115 && t <= 9139 || t >= 9140 && t <= 9179 || t >= 9180 && t <= 9185 || t >= 9186 && t <= 9254 || t >= 9255 && t <= 9279 || t >= 9280 && t <= 9290 || t >= 9291 && t <= 9311 || t >= 9472 && t <= 9654 || t === 9655 || t >= 9656 && t <= 9664 || t === 9665 || t >= 9666 && t <= 9719 || t >= 9720 && t <= 9727 || t >= 9728 && t <= 9838 || t === 9839 || t >= 9840 && t <= 10087 || t === 10088 || t === 10089 || t === 10090 || t === 10091 || t === 10092 || t === 10093 || t === 10094 || t === 10095 || t === 10096 || t === 10097 || t === 10098 || t === 10099 || t === 10100 || t === 10101 || t >= 10132 && t <= 10175 || t >= 10176 && t <= 10180 || t === 10181 || t === 10182 || t >= 10183 && t <= 10213 || t === 10214 || t === 10215 || t === 10216 || t === 10217 || t === 10218 || t === 10219 || t === 10220 || t === 10221 || t === 10222 || t === 10223 || t >= 10224 && t <= 10239 || t >= 10240 && t <= 10495 || t >= 10496 && t <= 10626 || t === 10627 || t === 10628 || t === 10629 || t === 10630 || t === 10631 || t === 10632 || t === 10633 || t === 10634 || t === 10635 || t === 10636 || t === 10637 || t === 10638 || t === 10639 || t === 10640 || t === 10641 || t === 10642 || t === 10643 || t === 10644 || t === 10645 || t === 10646 || t === 10647 || t === 10648 || t >= 10649 && t <= 10711 || t === 10712 || t === 10713 || t === 10714 || t === 10715 || t >= 10716 && t <= 10747 || t === 10748 || t === 10749 || t >= 10750 && t <= 11007 || t >= 11008 && t <= 11055 || t >= 11056 && t <= 11076 || t >= 11077 && t <= 11078 || t >= 11079 && t <= 11084 || t >= 11085 && t <= 11123 || t >= 11124 && t <= 11125 || t >= 11126 && t <= 11157 || t === 11158 || t >= 11159 && t <= 11263 || t >= 11776 && t <= 11777 || t === 11778 || t === 11779 || t === 11780 || t === 11781 || t >= 11782 && t <= 11784 || t === 11785 || t === 11786 || t === 11787 || t === 11788 || t === 11789 || t >= 11790 && t <= 11798 || t === 11799 || t >= 11800 && t <= 11801 || t === 11802 || t === 11803 || t === 11804 || t === 11805 || t >= 11806 && t <= 11807 || t === 11808 || t === 11809 || t === 11810 || t === 11811 || t === 11812 || t === 11813 || t === 11814 || t === 11815 || t === 11816 || t === 11817 || t >= 11818 && t <= 11822 || t === 11823 || t >= 11824 && t <= 11833 || t >= 11834 && t <= 11835 || t >= 11836 && t <= 11839 || t === 11840 || t === 11841 || t === 11842 || t >= 11843 && t <= 11855 || t >= 11856 && t <= 11857 || t === 11858 || t >= 11859 && t <= 11903 || t >= 12289 && t <= 12291 || t === 12296 || t === 12297 || t === 12298 || t === 12299 || t === 12300 || t === 12301 || t === 12302 || t === 12303 || t === 12304 || t === 12305 || t >= 12306 && t <= 12307 || t === 12308 || t === 12309 || t === 12310 || t === 12311 || t === 12312 || t === 12313 || t === 12314 || t === 12315 || t === 12316 || t === 12317 || t >= 12318 && t <= 12319 || t === 12320 || t === 12336 || t === 64830 || t === 64831 || t >= 65093 && t <= 65094;
}
function xs(t) {
  t.forEach(function(e) {
    if (delete e.location, Dc(e) || Mc(e))
      for (var n in e.options)
        delete e.options[n].location, xs(e.options[n].value);
    else Lc(e) && Hc(e.style) || (Oc(e) || Rc(e)) && Es(e.style) ? delete e.style.location : Pc(e) && xs(e.children);
  });
}
function Cv(t, e) {
  e === void 0 && (e = {}), e = ge({ shouldParseSkeletons: !0, requiresOtherClause: !0 }, e);
  var n = new Iv(t, e).parse();
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
    qe(e, t);
    function e(n, r, i) {
      var a = t.call(this, n) || this;
      return a.code = r, a.originalMessage = i, a;
    }
    return e.prototype.toString = function() {
      return "[formatjs Error: ".concat(this.code, "] ").concat(this.message);
    }, e;
  }(Error)
), Vl = (
  /** @class */
  function(t) {
    qe(e, t);
    function e(n, r, i, a) {
      return t.call(this, 'Invalid values for "'.concat(n, '": "').concat(r, '". Options are "').concat(Object.keys(i).join('", "'), '"'), Zi.INVALID_VALUE, a) || this;
    }
    return e;
  }(Uo)
), Tv = (
  /** @class */
  function(t) {
    qe(e, t);
    function e(n, r, i) {
      return t.call(this, 'Value for "'.concat(n, '" must be of type ').concat(r), Zi.INVALID_VALUE, i) || this;
    }
    return e;
  }(Uo)
), xv = (
  /** @class */
  function(t) {
    qe(e, t);
    function e(n, r) {
      return t.call(this, 'The intl string context variable "'.concat(n, '" was not provided to the string "').concat(r, '"'), Zi.MISSING_VALUE, r) || this;
    }
    return e;
  }(Uo)
), $t;
(function(t) {
  t[t.literal = 0] = "literal", t[t.object = 1] = "object";
})($t || ($t = {}));
function wv(t) {
  return t.length < 2 ? t : t.reduce(function(e, n) {
    var r = e[e.length - 1];
    return !r || r.type !== $t.literal || n.type !== $t.literal ? e.push(n) : r.value += n.value, e;
  }, []);
}
function Lv(t) {
  return typeof t == "function";
}
function io(t, e, n, r, i, a, o) {
  if (t.length === 1 && Pl(t[0]))
    return [
      {
        type: $t.literal,
        value: t[0].value
      }
    ];
  for (var c = [], l = 0, u = t; l < u.length; l++) {
    var d = u[l];
    if (Pl(d)) {
      c.push({
        type: $t.literal,
        value: d.value
      });
      continue;
    }
    if (Qh(d)) {
      typeof a == "number" && c.push({
        type: $t.literal,
        value: n.getNumberFormat(e).format(a)
      });
      continue;
    }
    var v = d.value;
    if (!(i && v in i))
      throw new xv(v, o);
    var f = i[v];
    if (Zh(d)) {
      (!f || typeof f == "string" || typeof f == "number") && (f = typeof f == "string" || typeof f == "number" ? String(f) : ""), c.push({
        type: typeof f == "string" ? $t.literal : $t.object,
        value: f
      });
      continue;
    }
    if (Oc(d)) {
      var m = typeof d.style == "string" ? r.date[d.style] : Es(d.style) ? d.style.parsedOptions : void 0;
      c.push({
        type: $t.literal,
        value: n.getDateTimeFormat(e, m).format(f)
      });
      continue;
    }
    if (Rc(d)) {
      var m = typeof d.style == "string" ? r.time[d.style] : Es(d.style) ? d.style.parsedOptions : r.time.medium;
      c.push({
        type: $t.literal,
        value: n.getDateTimeFormat(e, m).format(f)
      });
      continue;
    }
    if (Lc(d)) {
      var m = typeof d.style == "string" ? r.number[d.style] : Hc(d.style) ? d.style.parsedOptions : void 0;
      m && m.scale && (f = f * (m.scale || 1)), c.push({
        type: $t.literal,
        value: n.getNumberFormat(e, m).format(f)
      });
      continue;
    }
    if (Pc(d)) {
      var h = d.children, p = d.value, _ = i[p];
      if (!Lv(_))
        throw new Tv(p, "function", o);
      var y = io(h, e, n, r, i, a), T = _(y.map(function(S) {
        return S.value;
      }));
      Array.isArray(T) || (T = [T]), c.push.apply(c, T.map(function(S) {
        return {
          type: typeof S == "string" ? $t.literal : $t.object,
          value: S
        };
      }));
    }
    if (Dc(d)) {
      var I = d.options[f] || d.options.other;
      if (!I)
        throw new Vl(d.value, f, Object.keys(d.options), o);
      c.push.apply(c, io(I.value, e, n, r, i));
      continue;
    }
    if (Mc(d)) {
      var I = d.options["=".concat(f)];
      if (!I) {
        if (!Intl.PluralRules)
          throw new Uo(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`, Zi.MISSING_INTL_API, o);
        var b = n.getPluralRules(e, { type: d.pluralType }).select(f - (d.offset || 0));
        I = d.options[b] || d.options.other;
      }
      if (!I)
        throw new Vl(d.value, f, Object.keys(d.options), o);
      c.push.apply(c, io(I.value, e, n, r, i, f - (d.offset || 0)));
      continue;
    }
  }
  return wv(c);
}
function Ov(t, e) {
  return e ? ge(ge(ge({}, t || {}), e || {}), Object.keys(t).reduce(function(n, r) {
    return n[r] = ge(ge({}, t[r]), e[r] || {}), n;
  }, {})) : t;
}
function Rv(t, e) {
  return e ? Object.keys(t).reduce(function(n, r) {
    return n[r] = Ov(t[r], e[r]), n;
  }, ge({}, t)) : t;
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
function Dv(t) {
  return t === void 0 && (t = {
    number: {},
    dateTime: {},
    pluralRules: {}
  }), {
    getNumberFormat: Xo(function() {
      for (var e, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((e = Intl.NumberFormat).bind.apply(e, $n([void 0], n, !1)))();
    }, {
      cache: Qo(t.number),
      strategy: Yo.variadic
    }),
    getDateTimeFormat: Xo(function() {
      for (var e, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((e = Intl.DateTimeFormat).bind.apply(e, $n([void 0], n, !1)))();
    }, {
      cache: Qo(t.dateTime),
      strategy: Yo.variadic
    }),
    getPluralRules: Xo(function() {
      for (var e, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((e = Intl.PluralRules).bind.apply(e, $n([void 0], n, !1)))();
    }, {
      cache: Qo(t.pluralRules),
      strategy: Yo.variadic
    })
  };
}
var jc = (
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
        var u = a.formatToParts(l);
        if (u.length === 1)
          return u[0].value;
        var d = u.reduce(function(v, f) {
          return !v.length || f.type !== $t.literal || typeof v[v.length - 1] != "string" ? v.push(f.value) : v[v.length - 1] += f.value, v;
        }, []);
        return d.length <= 1 ? d[0] || "" : d;
      }, this.formatToParts = function(l) {
        return io(a.ast, a.locales, a.formatters, a.formats, l, void 0, a.message);
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
        var c = Bh(o, ["formatters"]);
        this.ast = t.__parse(e, ge(ge({}, c), { locale: this.resolvedLocale }));
      } else
        this.ast = e;
      if (!Array.isArray(this.ast))
        throw new TypeError("A message must be provided as a String or AST.");
      this.formats = Rv(t.formats, r), this.formatters = i && i.formatters || Dv(this.formatterCache);
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
    }, t.__parse = Cv, t.formats = {
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
function Mv(t, e) {
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
const Lr = {}, Pv = (t, e, n) => n && (e in Lr || (Lr[e] = {}), t in Lr[e] || (Lr[e][t] = n), n), Wc = (t, e) => {
  if (e == null)
    return;
  if (e in Lr && t in Lr[e])
    return Lr[e][t];
  const n = Fa(e);
  for (let r = 0; r < n.length; r++) {
    const i = n[r], a = Nv(i, t);
    if (a)
      return Pv(t, e, a);
  }
};
let Js;
const Ua = Bt({});
function Hv(t) {
  return Js[t] || null;
}
function qc(t) {
  return t in Js;
}
function Nv(t, e) {
  if (!qc(t))
    return null;
  const n = Hv(t);
  return Mv(n, e);
}
function Uv(t) {
  if (t == null)
    return;
  const e = Fa(t);
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    if (qc(r))
      return r;
  }
}
function zc(t, ...e) {
  delete Lr[t], Ua.update((n) => (n[t] = kh.all([n[t] || {}, ...e]), n));
}
ta(
  [Ua],
  ([t]) => Object.keys(t)
);
Ua.subscribe((t) => Js = t);
const ao = {};
function Fv(t, e) {
  ao[t].delete(e), ao[t].size === 0 && delete ao[t];
}
function Kc(t) {
  return ao[t];
}
function kv(t) {
  return Fa(t).map((e) => {
    const n = Kc(e);
    return [e, n ? [...n] : []];
  }).filter(([, e]) => e.length > 0);
}
function go(t) {
  return t == null ? !1 : Fa(t).some(
    (e) => {
      var n;
      return (n = Kc(e)) == null ? void 0 : n.size;
    }
  );
}
function Bv(t, e) {
  return Promise.all(
    e.map((r) => (Fv(t, r), r().then((i) => i.default || i)))
  ).then((r) => zc(t, ...r));
}
const da = {};
function Xc(t) {
  if (!go(t))
    return t in da ? da[t] : Promise.resolve();
  const e = kv(t);
  return da[t] = Promise.all(
    e.map(
      ([n, r]) => Bv(n, r)
    )
  ).then(() => {
    if (go(t))
      return Xc(t);
    delete da[t];
  }), da[t];
}
var Gl = Object.getOwnPropertySymbols, Vv = Object.prototype.hasOwnProperty, Gv = Object.prototype.propertyIsEnumerable, jv = (t, e) => {
  var n = {};
  for (var r in t)
    Vv.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && Gl)
    for (var r of Gl(t))
      e.indexOf(r) < 0 && Gv.call(t, r) && (n[r] = t[r]);
  return n;
};
const Wv = {
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
function qv({ locale: t, id: e }) {
  console.warn(
    `[svelte-i18n] The message "${e}" was not found in "${Fa(
      t
    ).join('", "')}".${go(Fr()) ? `

Note: there are at least one loader still registered to this locale that wasn't executed.` : ""}`
  );
}
const zv = {
  fallbackLocale: null,
  loadingDelay: 200,
  formats: Wv,
  warnOnMissingMessages: !0,
  handleMissingMessage: void 0,
  ignoreTag: !0
}, ya = zv;
function Qi() {
  return ya;
}
function Kv(t) {
  const e = t, { formats: n } = e, r = jv(e, ["formats"]);
  let i = t.fallbackLocale;
  if (t.initialLocale)
    try {
      jc.resolveLocale(t.initialLocale) && (i = t.initialLocale);
    } catch {
      console.warn(
        `[svelte-i18n] The initial locale "${t.initialLocale}" is not a valid locale.`
      );
    }
  return r.warnOnMissingMessages && (delete r.warnOnMissingMessages, r.handleMissingMessage == null ? r.handleMissingMessage = qv : console.warn(
    '[svelte-i18n] The "warnOnMissingMessages" option is deprecated. Please use the "handleMissingMessage" option instead.'
  )), Object.assign(ya, r, { initialLocale: i }), n && ("number" in n && Object.assign(ya.formats.number, n.number), "date" in n && Object.assign(ya.formats.date, n.date), "time" in n && Object.assign(ya.formats.time, n.time)), hi.set(i);
}
const Jo = Bt(!1);
var Xv = Object.defineProperty, Yv = Object.defineProperties, Zv = Object.getOwnPropertyDescriptors, jl = Object.getOwnPropertySymbols, Qv = Object.prototype.hasOwnProperty, Jv = Object.prototype.propertyIsEnumerable, Wl = (t, e, n) => e in t ? Xv(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n, $v = (t, e) => {
  for (var n in e || (e = {}))
    Qv.call(e, n) && Wl(t, n, e[n]);
  if (jl)
    for (var n of jl(e))
      Jv.call(e, n) && Wl(t, n, e[n]);
  return t;
}, em = (t, e) => Yv(t, Zv(e));
let ws;
const po = Bt(null);
function ql(t) {
  return t.split("-").map((e, n, r) => r.slice(0, n + 1).join("-")).reverse();
}
function Fa(t, e = Qi().fallbackLocale) {
  const n = ql(t);
  return e ? [.../* @__PURE__ */ new Set([...n, ...ql(e)])] : n;
}
function Fr() {
  return ws ?? void 0;
}
po.subscribe((t) => {
  ws = t ?? void 0, typeof window < "u" && t != null && document.documentElement.setAttribute("lang", t);
});
const tm = (t) => {
  if (t && Uv(t) && go(t)) {
    const { loadingDelay: e } = Qi();
    let n;
    return typeof window < "u" && Fr() != null && e ? n = window.setTimeout(
      () => Jo.set(!0),
      e
    ) : Jo.set(!0), Xc(t).then(() => {
      po.set(t);
    }).finally(() => {
      clearTimeout(n), Jo.set(!1);
    });
  }
  return po.set(t);
}, hi = em($v({}, po), {
  set: tm
}), nm = () => typeof window > "u" ? null : window.navigator.language || window.navigator.languages[0], Fo = (t) => {
  const e = /* @__PURE__ */ Object.create(null);
  return (r) => {
    const i = JSON.stringify(r);
    return i in e ? e[i] : e[i] = t(r);
  };
};
var rm = Object.defineProperty, bo = Object.getOwnPropertySymbols, Yc = Object.prototype.hasOwnProperty, Zc = Object.prototype.propertyIsEnumerable, zl = (t, e, n) => e in t ? rm(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n, $s = (t, e) => {
  for (var n in e || (e = {}))
    Yc.call(e, n) && zl(t, n, e[n]);
  if (bo)
    for (var n of bo(e))
      Zc.call(e, n) && zl(t, n, e[n]);
  return t;
}, na = (t, e) => {
  var n = {};
  for (var r in t)
    Yc.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && bo)
    for (var r of bo(t))
      e.indexOf(r) < 0 && Zc.call(t, r) && (n[r] = t[r]);
  return n;
};
const wa = (t, e) => {
  const { formats: n } = Qi();
  if (t in n && e in n[t])
    return n[t][e];
  throw new Error(`[svelte-i18n] Unknown "${e}" ${t} format.`);
}, im = Fo(
  (t) => {
    var e = t, { locale: n, format: r } = e, i = na(e, ["locale", "format"]);
    if (n == null)
      throw new Error('[svelte-i18n] A "locale" must be set to format numbers');
    return r && (i = wa("number", r)), new Intl.NumberFormat(n, i);
  }
), am = Fo(
  (t) => {
    var e = t, { locale: n, format: r } = e, i = na(e, ["locale", "format"]);
    if (n == null)
      throw new Error('[svelte-i18n] A "locale" must be set to format dates');
    return r ? i = wa("date", r) : Object.keys(i).length === 0 && (i = wa("date", "short")), new Intl.DateTimeFormat(n, i);
  }
), om = Fo(
  (t) => {
    var e = t, { locale: n, format: r } = e, i = na(e, ["locale", "format"]);
    if (n == null)
      throw new Error(
        '[svelte-i18n] A "locale" must be set to format time values'
      );
    return r ? i = wa("time", r) : Object.keys(i).length === 0 && (i = wa("time", "short")), new Intl.DateTimeFormat(n, i);
  }
), sm = (t = {}) => {
  var e = t, {
    locale: n = Fr()
  } = e, r = na(e, [
    "locale"
  ]);
  return im($s({ locale: n }, r));
}, lm = (t = {}) => {
  var e = t, {
    locale: n = Fr()
  } = e, r = na(e, [
    "locale"
  ]);
  return am($s({ locale: n }, r));
}, um = (t = {}) => {
  var e = t, {
    locale: n = Fr()
  } = e, r = na(e, [
    "locale"
  ]);
  return om($s({ locale: n }, r));
}, cm = Fo(
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  (t, e = Fr()) => new jc(t, e, Qi().formats, {
    ignoreTag: Qi().ignoreTag
  })
), dm = (t, e = {}) => {
  var n, r, i, a;
  let o = e;
  typeof t == "object" && (o = t, t = o.id);
  const {
    values: c,
    locale: l = Fr(),
    default: u
  } = o;
  if (l == null)
    throw new Error(
      "[svelte-i18n] Cannot format a message without first setting the initial locale."
    );
  let d = Wc(t, l);
  if (!d)
    d = (a = (i = (r = (n = Qi()).handleMissingMessage) == null ? void 0 : r.call(n, { locale: l, id: t, defaultValue: u })) != null ? i : u) != null ? a : t;
  else if (typeof d != "string")
    return console.warn(
      `[svelte-i18n] Message with id "${t}" must be of type "string", found: "${typeof d}". Gettin its value through the "$format" method is deprecated; use the "json" method instead.`
    ), d;
  if (!c)
    return d;
  let v = d;
  try {
    v = cm(d, l).format(c);
  } catch (f) {
    f instanceof Error && console.warn(
      `[svelte-i18n] Message "${t}" has syntax error:`,
      f.message
    );
  }
  return v;
}, fm = (t, e) => um(e).format(t), hm = (t, e) => lm(e).format(t), vm = (t, e) => sm(e).format(t), mm = (t, e = Fr()) => Wc(t, e), gm = ta([hi, Ua], () => dm);
ta([hi], () => fm);
ta([hi], () => hm);
ta([hi], () => vm);
ta([hi, Ua], () => mm);
function pm(t, e) {
  Object.entries(t).forEach(([a, o]) => {
    zc(a, o);
  });
  const n = localStorage.getItem("language"), r = "en", i = n ?? nm();
  console.log("Initial: Setting the language to", i), Kv({
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
const bm = "Ort", _m = "Suche", ym = "UUID", Im = "File Name", Em = "Autor", Sm = "Typ", Am = "Version", Cm = "Datum", Tm = "Fertig", xm = "Filtertypen", wm = "Filter Hinzufügen", Lm = {
  location: bm,
  search: _m,
  uuid: ym,
  filename: Im,
  author: Em,
  type: Sm,
  version: Am,
  date: Cm,
  "versionHistory.title": "Versionsverlauf der Datei {filename}",
  "versionTable.heading": "Versionstabelle",
  done: Tm,
  filter_types: xm,
  add_filter: wm
}, Om = "Location", Rm = "Search", Dm = "UUID", Mm = "Filename", Pm = "Author", Hm = "Type", Nm = "Version", Um = "Date", Fm = "Done", km = "Filter Types", Bm = "Add Filter", Vm = {
  location: Om,
  search: Rm,
  uuid: Dm,
  filename: Mm,
  author: Pm,
  type: Hm,
  version: Nm,
  date: Um,
  "versionHistory.title": "Version History of file {filename}",
  "versionTable.heading": "Version Table",
  done: Fm,
  filter_types: km,
  add_filter: Bm
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
    n in a || (a[n] = /* @__PURE__ */ new Map()), a[n].set(r, Wf(e, n, r, i));
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
function X(t, e) {
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
var za;
function Gm(t, e) {
  e === void 0 && (e = !1);
  var n = t.CSS, r = za;
  if (typeof za == "boolean" && !e)
    return za;
  var i = n && typeof n.supports == "function";
  if (!i)
    return !1;
  var a = n.supports("--css-vars", "yes"), o = n.supports("(--css-vars: yes)") && n.supports("color", "#00000000");
  return r = a || o, e || (za = r), r;
}
function jm(t, e, n) {
  if (!t)
    return { x: 0, y: 0 };
  var r = e.x, i = e.y, a = r + n.left, o = i + n.top, c, l;
  if (t.type === "touchstart") {
    var u = t;
    c = u.changedTouches[0].pageX - a, l = u.changedTouches[0].pageY - o;
  } else {
    var d = t;
    c = d.pageX - a, l = d.pageY - o;
  }
  return { x: c, y: l };
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
function Wm(t) {
  return t === void 0 && (t = window), qm(t) ? { passive: !0 } : !1;
}
function qm(t) {
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
const Qc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  applyPassive: Wm
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
function zm(t, e) {
  if (t.closest)
    return t.closest(e);
  for (var n = t; n; ) {
    if (Jc(n, e))
      return n;
    n = n.parentElement;
  }
  return null;
}
function Jc(t, e) {
  var n = t.matches || t.webkitMatchesSelector || t.msMatchesSelector;
  return n.call(t, e);
}
function Km(t) {
  var e = t;
  if (e.offsetParent !== null)
    return e.scrollWidth;
  var n = e.cloneNode(!0);
  n.style.setProperty("position", "absolute"), n.style.setProperty("transform", "translate(-9999px, -9999px)"), document.documentElement.appendChild(n);
  var r = n.scrollWidth;
  return document.documentElement.removeChild(n), r;
}
const ra = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  closest: zm,
  estimateScrollWidth: Km,
  matches: Jc
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
var Xm = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  BG_FOCUSED: "mdc-ripple-upgraded--background-focused",
  FG_ACTIVATION: "mdc-ripple-upgraded--foreground-activation",
  FG_DEACTIVATION: "mdc-ripple-upgraded--foreground-deactivation",
  ROOT: "mdc-ripple-upgraded",
  UNBOUNDED: "mdc-ripple-upgraded--unbounded"
}, Ym = {
  VAR_FG_SCALE: "--mdc-ripple-fg-scale",
  VAR_FG_SIZE: "--mdc-ripple-fg-size",
  VAR_FG_TRANSLATE_END: "--mdc-ripple-fg-translate-end",
  VAR_FG_TRANSLATE_START: "--mdc-ripple-fg-translate-start",
  VAR_LEFT: "--mdc-ripple-left",
  VAR_TOP: "--mdc-ripple-top"
}, Kl = {
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
var Xl = [
  "touchstart",
  "pointerdown",
  "mousedown",
  "keydown"
], Yl = [
  "touchend",
  "pointerup",
  "mouseup",
  "contextmenu"
], Ka = [], Zm = (
  /** @class */
  function(t) {
    qe(e, t);
    function e(n) {
      var r = t.call(this, ge(ge({}, e.defaultAdapter), n)) || this;
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
        return Xm;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Ym;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return Kl;
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
          for (var a = kt(Xl), o = a.next(); !o.done; o = a.next()) {
            var c = o.value;
            this.adapter.registerInteractionHandler(c, this.activateHandler);
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
          for (var a = kt(Yl), o = a.next(); !o.done; o = a.next()) {
            var c = o.value;
            this.adapter.registerDocumentInteractionHandler(c, this.deactivateHandler);
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
        for (var i = kt(Xl), a = i.next(); !a.done; a = i.next()) {
          var o = a.value;
          this.adapter.deregisterInteractionHandler(o, this.activateHandler);
        }
      } catch (c) {
        n = { error: c };
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
        for (var i = kt(Yl), a = i.next(); !a.done; a = i.next()) {
          var o = a.value;
          this.adapter.deregisterDocumentInteractionHandler(o, this.deactivateHandler);
        }
      } catch (c) {
        n = { error: c };
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
            var c = n !== void 0 && Ka.length > 0 && Ka.some(function(l) {
              return r.adapter.containsEventTarget(l);
            });
            if (c) {
              this.resetActivationState();
              return;
            }
            n !== void 0 && (Ka.push(n.target), this.registerDeactivationHandlers(n)), i.wasElementMadeActive = this.checkElementMadeActive(n), i.wasElementMadeActive && this.animateActivation(), requestAnimationFrame(function() {
              Ka = [], !i.wasElementMadeActive && n !== void 0 && (n.key === " " || n.keyCode === 32) && (i.wasElementMadeActive = r.checkElementMadeActive(n), i.wasElementMadeActive && r.animateActivation()), i.wasElementMadeActive || (r.activationState = r.defaultActivationState());
            });
          }
        }
      }
    }, e.prototype.checkElementMadeActive = function(n) {
      return n !== void 0 && n.type === "keydown" ? this.adapter.isSurfaceActive() : !0;
    }, e.prototype.animateActivation = function() {
      var n = this, r = e.strings, i = r.VAR_FG_TRANSLATE_START, a = r.VAR_FG_TRANSLATE_END, o = e.cssClasses, c = o.FG_DEACTIVATION, l = o.FG_ACTIVATION, u = e.numbers.DEACTIVATION_TIMEOUT_MS;
      this.layoutInternal();
      var d = "", v = "";
      if (!this.adapter.isUnbounded()) {
        var f = this.getFgTranslationCoordinates(), m = f.startPoint, h = f.endPoint;
        d = m.x + "px, " + m.y + "px", v = h.x + "px, " + h.y + "px";
      }
      this.adapter.updateCssVariable(i, d), this.adapter.updateCssVariable(a, v), clearTimeout(this.activationTimer), clearTimeout(this.fgDeactivationRemovalTimer), this.rmBoundedActivationClasses(), this.adapter.removeClass(c), this.adapter.computeBoundingRect(), this.adapter.addClass(l), this.activationTimer = setTimeout(function() {
        n.activationTimerCallback();
      }, u);
    }, e.prototype.getFgTranslationCoordinates = function() {
      var n = this.activationState, r = n.activationEvent, i = n.wasActivatedByPointer, a;
      i ? a = jm(r, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect()) : a = {
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
      var n = this, r = e.cssClasses.FG_DEACTIVATION, i = this.activationState, a = i.hasDeactivationUXRun, o = i.isActivated, c = a || !o;
      c && this.activationAnimationHasEnded && (this.rmBoundedActivationClasses(), this.adapter.addClass(r), this.fgDeactivationRemovalTimer = setTimeout(function() {
        n.adapter.removeClass(r);
      }, Kl.FG_DEACTIVATION_MS));
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
        var i = ge({}, r);
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
var $o = "mdc-dom-focus-sentinel", Qm = (
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
          var c = getComputedStyle(r);
          o = c.display === "none" || c.visibility === "hidden";
        }
        return a && !o;
      });
    }, t.prototype.createSentinel = function() {
      var e = document.createElement("div");
      return e.setAttribute("tabindex", "0"), e.setAttribute("aria-hidden", "true"), e.classList.add($o), e;
    }, t;
  }()
);
const Jm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  FocusTrap: Qm
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
const { applyPassive: Zl } = Qc, { matches: $m } = ra;
function Yt(t, { ripple: e = !0, surface: n = !1, unbounded: r = !1, disabled: i = !1, color: a, active: o, rippleElement: c, eventTarget: l, activeTarget: u, addClass: d = (h) => t.classList.add(h), removeClass: v = (h) => t.classList.remove(h), addStyle: f = (h, p) => t.style.setProperty(h, p), initPromise: m = Promise.resolve() } = {}) {
  let h, p = new vi(), _ = be("SMUI:addLayoutListener"), y, T = o, I = l, b = u;
  function S() {
    n ? (d("mdc-ripple-surface"), a === "primary" ? (d("smui-ripple-surface--primary"), v("smui-ripple-surface--secondary")) : a === "secondary" ? (v("smui-ripple-surface--primary"), d("smui-ripple-surface--secondary")) : (v("smui-ripple-surface--primary"), v("smui-ripple-surface--secondary"))) : (v("mdc-ripple-surface"), v("smui-ripple-surface--primary"), v("smui-ripple-surface--secondary")), h && T !== o && (T = o, o ? h.activate() : o === !1 && h.deactivate()), e && !h ? (h = new Zm({
      addClass: d,
      browserSupportsCssVars: () => Gm(window),
      computeBoundingRect: () => (c || t).getBoundingClientRect(),
      containsEventTarget: (x) => t.contains(x),
      deregisterDocumentInteractionHandler: (x, A) => p.off(document.documentElement, x, A),
      deregisterInteractionHandler: (x, A) => p.off(l || t, x, A),
      deregisterResizeHandler: (x) => window.removeEventListener("resize", x),
      getWindowPageOffset: () => {
        var x, A;
        return {
          x: (x = window.pageXOffset) !== null && x !== void 0 ? x : window.scrollX,
          y: (A = window.pageYOffset) !== null && A !== void 0 ? A : window.scrollY
        };
      },
      isSurfaceActive: () => o ?? $m(u || t, ":active"),
      isSurfaceDisabled: () => !!i,
      isUnbounded: () => !!r,
      registerDocumentInteractionHandler: (x, A) => {
        const C = Zl();
        p.on(document.documentElement, x, A, typeof C == "boolean" ? { capture: C } : C);
      },
      registerInteractionHandler: (x, A) => {
        const C = Zl();
        p.on(l || t, x, A, typeof C == "boolean" ? { capture: C } : C);
      },
      registerResizeHandler: (x) => p.on(window, "resize", x),
      removeClass: v,
      updateCssVariable: f
    }), m.then(() => {
      h && (h.init(), h.setUnbounded(r));
    })) : h && !e && m.then(() => {
      h && (h.destroy(), h = void 0, p.clear());
    }), h && (I !== l || b !== u) && (I = l, b = u, h.destroy(), requestAnimationFrame(() => {
      h && (h.init(), h.setUnbounded(r));
    })), !e && r && d("mdc-ripple-upgraded--unbounded");
  }
  S(), _ && (y = _(E));
  function E() {
    h && h.layout();
  }
  return {
    update(x) {
      ({
        ripple: e,
        surface: n,
        unbounded: r,
        disabled: i,
        color: a,
        active: o,
        rippleElement: c,
        eventTarget: l,
        activeTarget: u,
        addClass: d,
        removeClass: v,
        addStyle: f,
        initPromise: m
      } = Object.assign({ ripple: !0, surface: !1, unbounded: !1, disabled: !1, color: void 0, active: void 0, rippleElement: void 0, eventTarget: void 0, activeTarget: void 0, addClass: (A) => t.classList.add(A), removeClass: (A) => t.classList.remove(A), addStyle: (A, C) => t.style.setProperty(A, C), initPromise: Promise.resolve() }, x)), S();
    },
    destroy() {
      h && (h.destroy(), h = void 0, p.clear(), v("mdc-ripple-surface"), v("smui-ripple-surface--primary"), v("smui-ripple-surface--secondary")), y && y();
    }
  };
}
function $c(t, e) {
  xe(e, !0);
  let n = g(e, "use", 19, () => []), r = g(e, "class", 3, ""), i = g(e, "component", 3, Br), a = g(e, "tag", 3, "span"), o = /* @__PURE__ */ Ge(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "component",
    "tag",
    "children"
  ]), c;
  const l = be("SMUI:label:context"), u = be("SMUI:label:tabindex");
  function d() {
    return c.getElement();
  }
  var v = { getElement: d }, f = te(), m = Z(f);
  {
    let h = /* @__PURE__ */ pe(() => Me({
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
    nr(m, i, (p, _) => {
      Ae(
        _(p, Je(
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
              return u;
            }
          },
          () => o,
          {
            children: (y, T) => {
              var I = te(), b = Z(I);
              Se(b, () => e.children ?? he), w(y, I);
            },
            $$slots: { default: !0 }
          }
        )),
        (y) => c = y,
        () => c
      );
    });
  }
  return w(t, f), we(v);
}
function Ls(t, e) {
  xe(e, !0);
  let n = g(e, "use", 19, () => []), r = g(e, "class", 3, ""), i = g(e, "on", 3, !1), a = g(e, "component", 3, Br), o = g(e, "tag", 3, "i"), c = /* @__PURE__ */ Ge(e, [
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
  const u = /* @__PURE__ */ pe(() => o() === "svg" || a() === ng), d = be("SMUI:icon:context");
  function v() {
    return l.getElement();
  }
  var f = { getElement: v }, m = te(), h = Z(m);
  {
    let p = /* @__PURE__ */ pe(() => Me({
      "mdc-button__icon": d === "button",
      "mdc-fab__icon": d === "fab",
      "mdc-icon-button__icon": d === "icon-button",
      "mdc-icon-button__icon--on": d === "icon-button" && i(),
      "mdc-tab__icon": d === "tab",
      "mdc-banner__icon": d === "banner",
      "mdc-segmented-button__icon": d === "segmented-button",
      [r()]: !0
    }));
    nr(h, a, (_, y) => {
      Ae(
        y(_, Je(
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
          () => s(u) ? { focusable: "false", tabindex: "-1" } : {},
          () => c,
          {
            children: (T, I) => {
              var b = te(), S = Z(b);
              Se(S, () => e.children ?? he), w(T, b);
            },
            $$slots: { default: !0 }
          }
        )),
        (T) => l = T,
        () => l
      );
    });
  }
  return w(t, m), we(f);
}
var eg = /* @__PURE__ */ Rt("<svg><!></svg>");
function Br(t, e) {
  xe(e, !0);
  let n = g(e, "use", 19, () => []), r = g(e, "tag", 3, "div"), i = /* @__PURE__ */ Ge(e, ["$$slots", "$$events", "$$legacy", "use", "tag", "children"]);
  const a = /* @__PURE__ */ pe(() => [
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
  function c() {
    return o;
  }
  var l = { getElement: c }, u = te(), d = Z(u);
  {
    var v = (m) => {
      var h = eg();
      He(h, () => ({ ...i }));
      var p = de(h);
      Se(p, () => e.children ?? he), Ae(h, (_) => o = _, () => o), Pe(h, (_, y) => X == null ? void 0 : X(_, y), n), w(m, h);
    }, f = (m) => {
      var h = te(), p = Z(h);
      {
        var _ = (T) => {
          var I = te(), b = Z(I);
          Al(b, r, !1, (S, E) => {
            Ae(S, (x) => o = x, () => o), Pe(S, (x, A) => X == null ? void 0 : X(x, A), n), He(S, () => ({ ...i }));
          }), w(T, I);
        }, y = (T) => {
          var I = te(), b = Z(I);
          Al(b, r, !1, (S, E) => {
            Ae(S, (C) => o = C, () => o), Pe(S, (C, P) => X == null ? void 0 : X(C, P), n), He(S, () => ({ ...i }));
            var x = te(), A = Z(x);
            Se(A, () => e.children ?? he), w(E, x);
          }), w(T, I);
        };
        oe(
          p,
          (T) => {
            s(a) ? T(_) : T(y, !1);
          },
          !0
        );
      }
      w(m, h);
    };
    oe(d, (m) => {
      r() === "svg" ? m(v) : m(f, !1);
    });
  }
  return w(t, u), we(l);
}
var tg = /* @__PURE__ */ Rt("<svg><!></svg>");
function ng(t, e) {
  xe(e, !0), console && console.warn && console.warn('The @smui/common Svg component is deprecated. You can use `tag="svg"` now.');
  let n = g(e, "use", 19, () => []), r = /* @__PURE__ */ Ge(e, ["$$slots", "$$events", "$$legacy", "use", "children"]), i;
  function a() {
    return i;
  }
  var o = { getElement: a }, c = tg();
  He(c, () => ({ ...r }));
  var l = de(c);
  return Se(l, () => e.children ?? he), Ae(c, (u) => i = u, () => i), Pe(c, (u, d) => X == null ? void 0 : X(u, d), n), w(t, c), we(o);
}
function Xa(t, e) {
  xe(e, !0);
  const [n, r] = rr(), i = Bt(e.value);
  ue(e.key, i), Te(() => {
    Nn(i, e.value);
  }), yn(() => {
    i.set(void 0);
  });
  var a = te(), o = Z(a);
  Se(o, () => e.children ?? he), w(t, a), we(), r();
}
var rg = /* @__PURE__ */ fe('<div class="mdc-button__touch"></div>'), ig = /* @__PURE__ */ fe('<div class="mdc-button__ripple"></div> <!><!>', 1);
function _o(t, e) {
  xe(e, !0);
  let n = g(e, "use", 19, () => []), r = g(e, "class", 3, ""), i = g(e, "style", 3, ""), a = g(e, "ripple", 3, !0), o = g(e, "color", 3, "primary"), c = g(e, "variant", 3, "text"), l = g(e, "touch", 3, !1), u = g(e, "action", 3, "close"), d = g(e, "defaultAction", 3, !1), v = g(e, "secondary", 3, !1), f = g(e, "component", 3, Br), m = g(e, "tag", 19, () => e.href == null ? "button" : "a"), h = /* @__PURE__ */ Ge(e, [
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
  ]), p, _ = ye({}), y = ye({}), T = be("SMUI:button:context");
  const I = /* @__PURE__ */ pe(() => T === "dialog:action" && u() != null ? { "data-mdc-dialog-action": u() } : { action: u() }), b = /* @__PURE__ */ pe(() => T === "dialog:action" && d() ? { "data-mdc-dialog-button-default": "" } : {}), S = /* @__PURE__ */ pe(() => T === "banner" ? {} : { secondary: v() });
  let E = e.disabled;
  Te(() => {
    if (E !== e.disabled) {
      if (p) {
        const L = z();
        "blur" in L && L.blur();
      }
      E = h.disabled;
    }
  }), ue("SMUI:label:context", "button"), ue("SMUI:icon:context", "button");
  function x(L) {
    _[L] || (_[L] = !0);
  }
  function A(L) {
    (!(L in _) || _[L]) && (_[L] = !1);
  }
  function C(L, q) {
    y[L] != q && (q === "" || q == null ? delete y[L] : y[L] = q);
  }
  function P() {
    T === "banner" && Ke(z(), v() ? "SMUIBannerButtonSecondaryActionClick" : "SMUIBannerButtonPrimaryActionClick");
  }
  function z() {
    return p.getElement();
  }
  var F = { getElement: z }, W = te(), R = Z(W);
  {
    let L = /* @__PURE__ */ pe(() => [
      [
        Yt,
        {
          ripple: a(),
          unbounded: !1,
          color: o(),
          disabled: !!e.disabled,
          addClass: x,
          removeClass: A,
          addStyle: C
        }
      ],
      ...n()
    ]), q = /* @__PURE__ */ pe(() => Me({
      "mdc-button": !0,
      "mdc-button--raised": c() === "raised",
      "mdc-button--unelevated": c() === "unelevated",
      "mdc-button--outlined": c() === "outlined",
      "smui-button--color-secondary": o() === "secondary",
      "mdc-button--touch": l(),
      "mdc-card__action": T === "card:action",
      "mdc-card__action--button": T === "card:action",
      "mdc-dialog__button": T === "dialog:action",
      "mdc-top-app-bar__navigation-icon": T === "top-app-bar:navigation",
      "mdc-top-app-bar__action-item": T === "top-app-bar:action",
      "mdc-snackbar__action": T === "snackbar:actions",
      "mdc-banner__secondary-action": T === "banner" && v(),
      "mdc-banner__primary-action": T === "banner" && !v(),
      "mdc-tooltip__action": T === "tooltip:rich-actions",
      ..._,
      [r()]: !0
    })), k = /* @__PURE__ */ pe(() => Object.entries(y).map(([K, ne]) => `${K}: ${ne};`).concat([i()]).join(" "));
    nr(R, f, (K, ne) => {
      Ae(
        ne(K, Je(
          {
            get tag() {
              return m();
            },
            get use() {
              return s(L);
            },
            get class() {
              return s(q);
            },
            get style() {
              return s(k);
            }
          },
          () => s(I),
          () => s(b),
          () => s(S),
          {
            get href() {
              return e.href;
            }
          },
          () => h,
          {
            onclick: (N) => {
              var D;
              P(), (D = e.onclick) == null || D.call(e, N);
            },
            children: (N, D) => {
              var O = ig(), le = Ie(Z(O), 2);
              Se(le, () => e.children ?? he);
              var re = Ie(le);
              {
                var M = (V) => {
                  var U = rg();
                  w(V, U);
                };
                oe(re, (V) => {
                  l() && V(M);
                });
              }
              w(N, O);
            },
            $$slots: { default: !0 }
          }
        )),
        (N) => p = N,
        () => p
      );
    });
  }
  return w(t, W), we(F);
}
function ed(t, e) {
  xe(e, !0);
  let n = g(e, "callback", 3, () => {
  }), r = g(e, "disabled", 3, !1), i = g(e, "variant", 3, "default"), a = g(e, "isAbortAction", 3, !1), o = g(e, "backgroundColor", 3, void 0);
  {
    let c = /* @__PURE__ */ pe(() => a() ? "background-color: #ff3e00;" : "background-color: " + o());
    _o(t, {
      onclick: () => n()(),
      get variant() {
        return i();
      },
      get disabled() {
        return r();
      },
      get style() {
        return s(c);
      },
      children: (l, u) => {
        var d = te(), v = Z(d);
        Se(v, () => e.children ?? he), w(l, d);
      },
      $$slots: { default: !0 }
    });
  }
  we();
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
var Ya = {
  ICON_BUTTON_ON: "mdc-icon-button--on",
  ROOT: "mdc-icon-button"
}, or = {
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
var ag = (
  /** @class */
  function(t) {
    qe(e, t);
    function e(n) {
      var r = t.call(this, ge(ge({}, e.defaultAdapter), n)) || this;
      return r.hasToggledAriaLabel = !1, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Ya;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return or;
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
      var n = this.adapter.getAttr(or.DATA_ARIA_LABEL_ON), r = this.adapter.getAttr(or.DATA_ARIA_LABEL_OFF);
      if (n && r) {
        if (this.adapter.getAttr(or.ARIA_PRESSED) !== null)
          throw new Error("MDCIconButtonToggleFoundation: Button should not set `aria-pressed` if it has a toggled aria label.");
        this.hasToggledAriaLabel = !0;
      } else
        this.adapter.setAttr(or.ARIA_PRESSED, String(this.isOn()));
    }, e.prototype.handleClick = function() {
      this.toggle(), this.adapter.notifyChange({ isOn: this.isOn() });
    }, e.prototype.isOn = function() {
      return this.adapter.hasClass(Ya.ICON_BUTTON_ON);
    }, e.prototype.toggle = function(n) {
      if (n === void 0 && (n = !this.isOn()), n ? this.adapter.addClass(Ya.ICON_BUTTON_ON) : this.adapter.removeClass(Ya.ICON_BUTTON_ON), this.hasToggledAriaLabel) {
        var r = n ? this.adapter.getAttr(or.DATA_ARIA_LABEL_ON) : this.adapter.getAttr(or.DATA_ARIA_LABEL_OFF);
        this.adapter.setAttr(or.ARIA_LABEL, r || "");
      } else
        this.adapter.setAttr(or.ARIA_PRESSED, "" + n);
    }, e;
  }(xt)
), og = /* @__PURE__ */ fe('<div class="mdc-icon-button__touch"></div>'), sg = /* @__PURE__ */ fe('<div class="mdc-icon-button__ripple"></div> <!><!>', 1);
function lg(t, e) {
  xe(e, !0);
  let n = () => {
  };
  function r(D) {
    return D === n;
  }
  let i = g(e, "use", 19, () => []), a = g(e, "class", 3, ""), o = g(e, "style", 3, ""), c = g(e, "ripple", 3, !0), l = g(e, "toggle", 3, !1), u = g(e, "pressed", 15, n), d = g(e, "touch", 3, !1), v = g(e, "displayFlex", 3, !0), f = g(e, "size", 3, "normal"), m = g(e, "component", 3, Br), h = g(e, "tag", 19, () => e.href == null ? "button" : "a"), p = /* @__PURE__ */ Ge(e, [
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
  ]), _, y, T = /* @__PURE__ */ _e(ye({})), I = ye({}), b = /* @__PURE__ */ _e(ye({})), S = be("SMUI:icon-button:context"), E = be("SMUI:icon-button:aria-describedby");
  const x = /* @__PURE__ */ pe(() => {
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
  let A = !!e.disabled;
  Te(() => {
    if (A != !!e.disabled) {
      if (_) {
        const D = k();
        "blur" in D && D.blur();
      }
      A = !!e.disabled;
    }
  }), ue("SMUI:icon:context", "icon-button");
  let C = null;
  Te(() => {
    _ && k() && l() !== C && (l() && !y ? (y = new ag({
      addClass: z,
      hasClass: P,
      notifyChange: (D) => {
        q(D), Ke(k(), "SMUIIconButtonToggleChange", D);
      },
      removeClass: F,
      getAttr: R,
      setAttr: L
    }), y.init()) : !l() && y && (y.destroy(), y = void 0, Q(T, {}, !0), Q(b, {}, !0)), C = l());
  }), Te(() => {
    y && !r(u()) && y.isOn() !== u() && y.toggle(u());
  }), yn(() => {
    y && y.destroy();
  });
  function P(D) {
    return D in s(T) ? s(T)[D] : k().classList.contains(D);
  }
  function z(D) {
    s(T)[D] || (s(T)[D] = !0);
  }
  function F(D) {
    (!(D in s(T)) || s(T)[D]) && (s(T)[D] = !1);
  }
  function W(D, O) {
    I[D] != O && (O === "" || O == null ? delete I[D] : I[D] = O);
  }
  function R(D) {
    return D in s(b) ? s(b)[D] ?? null : k().getAttribute(D);
  }
  function L(D, O) {
    s(b)[D] !== O && (s(b)[D] = O);
  }
  function q(D) {
    u(D.isOn);
  }
  function k() {
    return _.getElement();
  }
  var K = { getElement: k }, ne = te(), N = Z(ne);
  {
    let D = /* @__PURE__ */ pe(() => [
      [
        Yt,
        {
          ripple: c(),
          unbounded: !0,
          color: e.color,
          disabled: !!e.disabled,
          addClass: z,
          removeClass: F,
          addStyle: W
        }
      ],
      ...i()
    ]), O = /* @__PURE__ */ pe(() => Me({
      "mdc-icon-button": !0,
      "mdc-icon-button--on": !r(u()) && u(),
      "mdc-icon-button--touch": d(),
      "mdc-icon-button--display-flex": v(),
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
      ...s(T),
      [a()]: !0
    })), le = /* @__PURE__ */ pe(() => Object.entries(I).map(([V, U]) => `${V}: ${U};`).concat([o()]).join(" ")), re = /* @__PURE__ */ pe(() => r(u()) ? null : u() ? "true" : "false"), M = /* @__PURE__ */ pe(() => u() ? e.ariaLabelOn : e.ariaLabelOff);
    nr(N, m, (V, U) => {
      Ae(
        U(V, Je(
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
          () => s(x),
          () => s(b),
          () => p,
          {
            onclick: (J) => {
              var $;
              y && y.handleClick(), S === "top-app-bar:navigation" && Ke(k(), "SMUITopAppBarIconButtonNav"), ($ = e.onclick) == null || $.call(e, J);
            },
            children: (J, $) => {
              var ce = sg(), Ce = Ie(Z(ce), 2);
              Se(Ce, () => e.children ?? he);
              var ee = Ie(Ce);
              {
                var ae = (Re) => {
                  var Oe = og();
                  w(Re, Oe);
                };
                oe(ee, (Re) => {
                  d() && Re(ae);
                });
              }
              w(J, ce);
            },
            $$slots: { default: !0 }
          }
        )),
        (J) => _ = J,
        () => _
      );
    });
  }
  return w(t, ne), we(K);
}
function ug(t, e) {
  let n = g(e, "callback", 3, () => {
  }), r = g(e, "icon", 3, ""), i = g(e, "disabled", 3, !1);
  lg(t, {
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
        children: (c, l) => {
          var u = yt();
          Le(() => $e(u, r())), w(c, u);
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
var cg = {
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
var dg = (
  /** @class */
  function(t) {
    qe(e, t);
    function e(n) {
      var r = t.call(this, ge(ge({}, e.defaultAdapter), n)) || this;
      return r.shakeAnimationEndHandler = function() {
        r.handleShakeAnimationEnd();
      }, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return cg;
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
var fg = (
  /** @class */
  function(t) {
    qe(e, t);
    function e(n) {
      var r = t.call(this, ge(ge({}, e.defaultAdapter), n)) || this;
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
var hg = {
  NOTCH_ELEMENT_SELECTOR: ".mdc-notched-outline__notch"
}, Ql = {
  // This should stay in sync with $mdc-notched-outline-padding * 2.
  NOTCH_ELEMENT_PADDING: 8
}, vg = {
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
var mg = (
  /** @class */
  function(t) {
    qe(e, t);
    function e(n) {
      return t.call(this, ge(ge({}, e.defaultAdapter), n)) || this;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return hg;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return vg;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return Ql;
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
      n > 0 && (n += Ql.NOTCH_ELEMENT_PADDING), this.adapter.setNotchWidthProperty(n), this.adapter.addClass(r);
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
}, gg = {
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
}, Jl = {
  LABEL_SCALE: 0.75
}, pg = [
  "pattern",
  "min",
  "max",
  "required",
  "step",
  "minlength",
  "maxlength"
], bg = [
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
var $l = ["mousedown", "touchstart"], eu = ["click", "keydown"], _g = (
  /** @class */
  function(t) {
    qe(e, t);
    function e(n, r) {
      r === void 0 && (r = {});
      var i = t.call(this, ge(ge({}, e.defaultAdapter), n)) || this;
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
        return gg;
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
        return Jl;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "shouldAlwaysFloat", {
      get: function() {
        var n = this.getNativeInput().type;
        return bg.indexOf(n) >= 0;
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
        for (var o = kt($l), c = o.next(); !c.done; c = o.next()) {
          var l = c.value;
          this.adapter.registerInputInteractionHandler(l, this.setPointerXOffset);
        }
      } catch (v) {
        n = { error: v };
      } finally {
        try {
          c && !c.done && (r = o.return) && r.call(o);
        } finally {
          if (n) throw n.error;
        }
      }
      try {
        for (var u = kt(eu), d = u.next(); !d.done; d = u.next()) {
          var l = d.value;
          this.adapter.registerTextFieldInteractionHandler(l, this.textFieldInteractionHandler);
        }
      } catch (v) {
        i = { error: v };
      } finally {
        try {
          d && !d.done && (a = u.return) && a.call(u);
        } finally {
          if (i) throw i.error;
        }
      }
      this.validationObserver = this.adapter.registerValidationAttributeChangeHandler(this.validationAttributeChangeHandler), this.setcharacterCounter(this.getValue().length);
    }, e.prototype.destroy = function() {
      var n, r, i, a;
      this.adapter.deregisterInputInteractionHandler("focus", this.inputFocusHandler), this.adapter.deregisterInputInteractionHandler("blur", this.inputBlurHandler), this.adapter.deregisterInputInteractionHandler("input", this.inputInputHandler);
      try {
        for (var o = kt($l), c = o.next(); !c.done; c = o.next()) {
          var l = c.value;
          this.adapter.deregisterInputInteractionHandler(l, this.setPointerXOffset);
        }
      } catch (v) {
        n = { error: v };
      } finally {
        try {
          c && !c.done && (r = o.return) && r.call(o);
        } finally {
          if (n) throw n.error;
        }
      }
      try {
        for (var u = kt(eu), d = u.next(); !d.done; d = u.next()) {
          var l = d.value;
          this.adapter.deregisterTextFieldInteractionHandler(l, this.textFieldInteractionHandler);
        }
      } catch (v) {
        i = { error: v };
      } finally {
        try {
          d && !d.done && (a = u.return) && a.call(u);
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
        return pg.indexOf(i) > -1 ? (r.styleValidity(!0), r.adapter.setLabelRequired(r.getNativeInput().required), !0) : !1;
      }), n.indexOf("maxlength") > -1 && this.setcharacterCounter(this.getValue().length);
    }, e.prototype.notchOutline = function(n) {
      if (!(!this.adapter.hasOutline() || !this.adapter.hasLabel()))
        if (n) {
          var r = this.adapter.getLabelWidth() * Jl.LABEL_SCALE;
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
var tu = {
  ICON_EVENT: "MDCTextField:icon",
  ICON_ROLE: "button"
}, yg = {
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
var nu = ["click", "keydown"], Ig = (
  /** @class */
  function(t) {
    qe(e, t);
    function e(n) {
      var r = t.call(this, ge(ge({}, e.defaultAdapter), n)) || this;
      return r.savedTabIndex = null, r.interactionHandler = function(i) {
        r.handleInteraction(i);
      }, r;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return tu;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return yg;
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
        for (var i = kt(nu), a = i.next(); !a.done; a = i.next()) {
          var o = a.value;
          this.adapter.registerInteractionHandler(o, this.interactionHandler);
        }
      } catch (c) {
        n = { error: c };
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
        for (var i = kt(nu), a = i.next(); !a.done; a = i.next()) {
          var o = a.value;
          this.adapter.deregisterInteractionHandler(o, this.interactionHandler);
        }
      } catch (c) {
        n = { error: c };
      } finally {
        try {
          a && !a.done && (r = i.return) && r.call(i);
        } finally {
          if (n) throw n.error;
        }
      }
    }, e.prototype.setDisabled = function(n) {
      this.savedTabIndex && (n ? (this.adapter.setAttr("tabindex", "-1"), this.adapter.removeAttr("role")) : (this.adapter.setAttr("tabindex", this.savedTabIndex), this.adapter.setAttr("role", tu.ICON_ROLE)));
    }, e.prototype.setAriaLabel = function(n) {
      this.adapter.setAttr("aria-label", n);
    }, e.prototype.setContent = function(n) {
      this.adapter.setContent(n);
    }, e.prototype.handleInteraction = function(n) {
      var r = n.key === "Enter" || n.keyCode === 13;
      (n.type === "click" || r) && (n.preventDefault(), this.adapter.notifyIconAction());
    }, e;
  }(xt)
), Eg = /* @__PURE__ */ fe("<span><!></span>"), Sg = /* @__PURE__ */ fe("<label><!></label>");
function yo(t, e) {
  xe(e, !0);
  let n = g(e, "use", 19, () => []), r = g(e, "class", 3, ""), i = g(e, "style", 3, ""), a = g(e, "floatAbove", 15, !1), o = g(e, "required", 15, !1), c = g(e, "wrapped", 3, !1), l = /* @__PURE__ */ Ge(e, [
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
  ]), u, d = /* @__PURE__ */ _e(void 0), v = new vi(), f = ye({}), m = ye({}), h = be("SMUI:generic:input:props") ?? {}, p = a();
  Te(() => {
    s(d) && p !== a() && (p = a(), s(d).float(a()));
  });
  let _ = o();
  Te(() => {
    s(d) && _ !== o() && (_ = o(), s(d).setRequired(o()));
  });
  const y = be("SMUI:floating-label:mount"), T = be("SMUI:floating-label:unmount");
  at(() => {
    Q(
      d,
      new dg({
        addClass: I,
        removeClass: b,
        getWidth: () => {
          var D, O;
          const K = z(), ne = K.cloneNode(!0);
          (D = K.parentNode) == null || D.appendChild(ne), ne.classList.add("smui-floating-label--remove-transition"), ne.classList.add("smui-floating-label--force-size"), ne.classList.remove("mdc-floating-label--float-above");
          const N = ne.scrollWidth;
          return (O = K.parentNode) == null || O.removeChild(ne), N;
        },
        registerInteractionHandler: (K, ne) => v.on(z(), K, ne),
        deregisterInteractionHandler: (K, ne) => v.off(z(), K, ne)
      }),
      !0
    );
    const k = {
      get element() {
        return z();
      },
      addStyle: S,
      removeStyle: E
    };
    return y && y(k), s(d).init(), () => {
      var K;
      T && T(k), (K = s(d)) == null || K.destroy(), v.clear();
    };
  });
  function I(k) {
    f[k] || (f[k] = !0);
  }
  function b(k) {
    (!(k in f) || f[k]) && (f[k] = !1);
  }
  function S(k, K) {
    m[k] != K && (K === "" || K == null ? delete m[k] : m[k] = K);
  }
  function E(k) {
    k in m && delete m[k];
  }
  function x(k) {
    var K;
    (K = s(d)) == null || K.shake(k);
  }
  function A(k) {
    a(k);
  }
  function C(k) {
    o(k);
  }
  function P() {
    if (s(d) == null)
      throw new Error("Instance is undefined.");
    return s(d).getWidth();
  }
  function z() {
    return u;
  }
  var F = { shake: x, float: A, setRequired: C, getWidth: P, getElement: z }, W = te(), R = Z(W);
  {
    var L = (k) => {
      var K = Eg();
      He(K, (N, D) => ({ class: N, style: D, ...l }), [
        () => Me({
          "mdc-floating-label": !0,
          "mdc-floating-label--float-above": a(),
          "mdc-floating-label--required": o(),
          ...f,
          [r()]: !0
        }),
        () => Object.entries(m).map(([N, D]) => `${N}: ${D};`).concat([i()]).join(" ")
      ]);
      var ne = de(K);
      Se(ne, () => e.children ?? he), Ae(K, (N) => u = N, () => u), Pe(K, (N, D) => X == null ? void 0 : X(N, D), n), w(k, K);
    }, q = (k) => {
      var K = Sg();
      He(
        K,
        (N, D) => ({
          class: N,
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
          () => Object.entries(m).map(([N, D]) => `${N}: ${D};`).concat([i()]).join(" ")
        ]
      );
      var ne = de(K);
      Se(ne, () => e.children ?? he), Ae(K, (N) => u = N, () => u), Pe(K, (N, D) => X == null ? void 0 : X(N, D), n), w(k, K);
    };
    oe(R, (k) => {
      c() ? k(L) : k(q, !1);
    });
  }
  return w(t, W), we(F);
}
var Ag = /* @__PURE__ */ fe("<div></div>");
function td(t, e) {
  xe(e, !0);
  let n = g(e, "use", 19, () => []), r = g(e, "class", 3, ""), i = g(e, "style", 3, ""), a = g(e, "active", 3, !1), o = /* @__PURE__ */ Ge(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "style",
    "active"
  ]), c, l = /* @__PURE__ */ _e(void 0), u = new vi(), d = ye({}), v = ye({});
  at(() => (Q(
    l,
    new fg({
      addClass: m,
      removeClass: h,
      hasClass: f,
      setStyle: p,
      registerEventHandler: (E, x) => u.on(I(), E, x),
      deregisterEventHandler: (E, x) => u.off(I(), E, x)
    }),
    !0
  ), s(l).init(), () => {
    var E;
    (E = s(l)) == null || E.destroy(), u.clear();
  }));
  function f(E) {
    return E in d ? d[E] : I().classList.contains(E);
  }
  function m(E) {
    d[E] || (d[E] = !0);
  }
  function h(E) {
    (!(E in d) || d[E]) && (d[E] = !1);
  }
  function p(E, x) {
    v[E] != x && (x === "" || x == null ? delete v[E] : v[E] = x);
  }
  function _() {
    var E;
    (E = s(l)) == null || E.activate();
  }
  function y() {
    var E;
    (E = s(l)) == null || E.deactivate();
  }
  function T(E) {
    var x;
    (x = s(l)) == null || x.setRippleCenter(E);
  }
  function I() {
    return c;
  }
  var b = { activate: _, deactivate: y, setRippleCenter: T, getElement: I }, S = Ag();
  return He(S, (E, x) => ({ class: E, style: x, ...o }), [
    () => Me({
      "mdc-line-ripple": !0,
      "mdc-line-ripple--active": a(),
      ...d,
      [r()]: !0
    }),
    () => Object.entries(v).map(([E, x]) => `${E}: ${x};`).concat([i()]).join(" ")
  ]), Ae(S, (E) => c = E, () => c), Pe(S, (E, x) => X == null ? void 0 : X(E, x), n), w(t, S), we(b);
}
var Cg = /* @__PURE__ */ fe('<div class="mdc-notched-outline__notch"><!></div>'), Tg = /* @__PURE__ */ fe('<div><div class="mdc-notched-outline__leading"></div> <!> <div class="mdc-notched-outline__trailing"></div></div>');
function nd(t, e) {
  xe(e, !0);
  let n = g(e, "use", 19, () => []), r = g(e, "class", 3, ""), i = g(e, "notched", 3, !1), a = g(e, "noLabel", 3, !1), o = /* @__PURE__ */ Ge(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "notched",
    "noLabel",
    "children"
  ]), c, l = /* @__PURE__ */ _e(void 0), u = /* @__PURE__ */ _e(void 0), d = ye({}), v = ye({}), f;
  Te(() => {
    s(u) !== f && (s(u) ? (s(u).addStyle("transition-duration", "0s"), m("mdc-notched-outline--upgraded"), requestAnimationFrame(() => {
      s(u) && s(u).removeStyle("transition-duration");
    })) : h("mdc-notched-outline--upgraded"), f = s(u));
  }), ue("SMUI:floating-label:mount", (A) => {
    Q(u, A, !0);
  }), ue("SMUI:floating-label:unmount", () => {
    Q(u, void 0);
  }), at(() => (Q(
    l,
    new mg({
      addClass: m,
      removeClass: h,
      setNotchWidthProperty: (A) => p("width", A + "px"),
      removeNotchWidthProperty: () => _("width")
    }),
    !0
  ), s(l).init(), () => {
    var A;
    (A = s(l)) == null || A.destroy();
  }));
  function m(A) {
    d[A] || (d[A] = !0);
  }
  function h(A) {
    (!(A in d) || d[A]) && (d[A] = !1);
  }
  function p(A, C) {
    v[A] != C && (C === "" || C == null ? delete v[A] : v[A] = C);
  }
  function _(A) {
    A in v && delete v[A];
  }
  function y(A) {
    var C;
    (C = s(l)) == null || C.notch(A);
  }
  function T() {
    var A;
    (A = s(l)) == null || A.closeNotch();
  }
  function I() {
    return c;
  }
  var b = { notch: y, closeNotch: T, getElement: I }, S = Tg();
  He(S, (A) => ({ class: A, ...o }), [
    () => Me({
      "mdc-notched-outline": !0,
      "mdc-notched-outline--notched": i(),
      "mdc-notched-outline--no-label": a(),
      ...d,
      [r()]: !0
    })
  ]);
  var E = Ie(de(S), 2);
  {
    var x = (A) => {
      var C = Cg(), P = de(C);
      Se(P, () => e.children ?? he), Le((z) => pt(C, z), [
        () => Object.entries(v).map(([z, F]) => `${z}: ${F};`).join(" ")
      ]), w(A, C);
    };
    oe(E, (A) => {
      a() || A(x);
    });
  }
  return Ae(S, (A) => c = A, () => c), Pe(S, (A, C) => X == null ? void 0 : X(A, C), n), w(t, S), we(b);
}
function ia(t, e) {
  xe(e, !0);
  let n = g(e, "use", 19, () => []), r = g(e, "class", 3, ""), i = g(e, "component", 3, Br), a = g(e, "tag", 3, "div"), o = g(e, "_smuiClass", 3, ""), c = g(e, "_smuiClassMap", 23, () => ({})), l = g(e, "_smuiContexts", 19, () => ({})), u = g(e, "_smuiProps", 19, () => ({})), d = /* @__PURE__ */ Ge(e, [
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
  ]), v;
  const f = [];
  Object.entries(c()).forEach(([y, T]) => {
    const I = be(T);
    I && "subscribe" in I && f.push(I.subscribe((b) => {
      c()[y] = b;
    }));
  });
  for (let y in l())
    l().hasOwnProperty(y) && ue(y, l()[y]);
  yn(() => {
    for (const y of f)
      y();
  });
  function m() {
    return v.getElement();
  }
  var h = { getElement: m }, p = te(), _ = Z(p);
  {
    let y = /* @__PURE__ */ pe(() => Me({
      [o()]: !0,
      ...c(),
      [r()]: !0
    }));
    nr(_, i, (T, I) => {
      Ae(
        I(T, Je(
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
          u,
          () => d,
          {
            children: (b, S) => {
              var E = te(), x = Z(E);
              Se(x, () => e.children ?? he), w(b, E);
            },
            $$slots: { default: !0 }
          }
        )),
        (b) => v = b,
        () => v
      );
    });
  }
  return w(t, p), we(h);
}
function xg(t, e) {
  xe(e, !0);
  let n = /* @__PURE__ */ Ge(e, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return Ae(
    ia(t, Je({ _smuiClass: "mdc-text-field-helper-line", tag: "div" }, () => n, {
      children: (o, c) => {
        var l = te(), u = Z(l);
        Se(u, () => e.children ?? he), w(o, l);
      },
      $$slots: { default: !0 }
    })),
    (o) => r = o,
    () => r
  ), we(a);
}
function wg(t, e) {
  xe(e, !0);
  let n = /* @__PURE__ */ Ge(e, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return Ae(
    ia(t, Je(
      {
        _smuiClass: "mdc-text-field__affix mdc-text-field__affix--prefix",
        tag: "span"
      },
      () => n,
      {
        children: (o, c) => {
          var l = te(), u = Z(l);
          Se(u, () => e.children ?? he), w(o, l);
        },
        $$slots: { default: !0 }
      }
    )),
    (o) => r = o,
    () => r
  ), we(a);
}
function Lg(t, e) {
  xe(e, !0);
  let n = /* @__PURE__ */ Ge(e, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return Ae(
    ia(t, Je(
      {
        _smuiClass: "mdc-text-field__affix mdc-text-field__affix--suffix",
        tag: "span"
      },
      () => n,
      {
        children: (o, c) => {
          var l = te(), u = Z(l);
          Se(u, () => e.children ?? he), w(o, l);
        },
        $$slots: { default: !0 }
      }
    )),
    (o) => r = o,
    () => r
  ), we(a);
}
var Og = /* @__PURE__ */ fe("<input/>");
function Rg(t, e) {
  xe(e, !0);
  let n = g(e, "use", 19, () => []), r = g(e, "class", 3, ""), i = g(e, "type", 3, "text"), a = g(e, "placeholder", 3, " "), o = g(e, "value", 15), c = g(e, "files", 15, null), l = g(e, "dirty", 15, !1), u = g(e, "invalid", 15, !1), d = g(e, "updateInvalid", 3, !0), v = g(e, "initialInvalid", 3, !1), f = g(e, "emptyValueNull", 19, () => o() === null), m = g(e, "emptyValueUndefined", 19, () => o() === void 0), h = /* @__PURE__ */ Ge(e, [
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
  ]), p, _ = ye({}), y = ye({});
  Te(() => {
    i() === "file" ? delete y.value : y.value = o() == null ? "" : o();
  }), at(() => {
    d() && v() && u(P().matches(":invalid"));
  });
  function T(L) {
    return L === "" ? Number.NaN : +L;
  }
  function I(L) {
    if (i() === "file") {
      c(L.currentTarget.files);
      return;
    }
    if (L.currentTarget.value === "" && f()) {
      o(null);
      return;
    }
    if (L.currentTarget.value === "" && m()) {
      o(void 0);
      return;
    }
    switch (i()) {
      case "number":
      case "range":
        o(T(L.currentTarget.value));
        break;
      default:
        o(L.currentTarget.value);
        break;
    }
  }
  function b(L) {
    (i() === "file" || i() === "range") && I(L), l(!0), d() && u(P().matches(":invalid"));
  }
  function S(L) {
    return L in _ ? _[L] ?? null : P().getAttribute(L);
  }
  function E(L, q) {
    _[L] !== q && (_[L] = q);
  }
  function x(L) {
    (!(L in _) || _[L] != null) && (_[L] = void 0);
  }
  function A() {
    P().focus();
  }
  function C() {
    P().blur();
  }
  function P() {
    return p;
  }
  var z = { getAttr: S, addAttr: E, removeAttr: x, focus: A, blur: C, getElement: P }, F = Og(), W = (L) => {
    var q;
    i() !== "file" && I(L), (q = e.oninput) == null || q.call(e, L);
  }, R = (L) => {
    var q;
    b(L), (q = e.onchange) == null || q.call(e, L);
  };
  return He(
    F,
    (L) => ({
      class: L,
      type: i(),
      placeholder: a(),
      ...y,
      ..._,
      ...h,
      oninput: W,
      onchange: R
    }),
    [
      () => Me({ "mdc-text-field__input": !0, [r()]: !0 })
    ],
    void 0,
    void 0,
    !0
  ), Ae(F, (L) => p = L, () => p), Pe(F, (L, q) => X == null ? void 0 : X(L, q), n), w(t, F), we(z);
}
var Dg = /* @__PURE__ */ fe("<textarea></textarea>");
function Mg(t, e) {
  xe(e, !0);
  let n = g(e, "use", 19, () => []), r = g(e, "class", 3, ""), i = g(e, "style", 3, ""), a = g(e, "value", 15, ""), o = g(e, "dirty", 15, !1), c = g(e, "invalid", 15, !1), l = g(e, "updateInvalid", 3, !0), u = g(e, "initialInvalid", 3, !1), d = g(e, "resizable", 3, !0), v = /* @__PURE__ */ Ge(e, [
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
  ]), f, m = ye({});
  at(() => {
    l() && u() && c(b().matches(":invalid"));
  });
  function h() {
    o(!0), l() && c(b().matches(":invalid"));
  }
  function p(A) {
    return A in m ? m[A] ?? null : b().getAttribute(A);
  }
  function _(A, C) {
    m[A] !== C && (m[A] = C);
  }
  function y(A) {
    (!(A in m) || m[A] != null) && (m[A] = void 0);
  }
  function T() {
    b().focus();
  }
  function I() {
    b().blur();
  }
  function b() {
    return f;
  }
  var S = { getAttr: p, addAttr: _, removeAttr: y, focus: T, blur: I, getElement: b }, E = Dg(), x = (A) => {
    var C;
    h(), (C = e.onchange) == null || C.call(e, A);
  };
  return He(
    E,
    (A) => ({
      class: A,
      style: `${d() ? "" : "resize: none; "}${i()}`,
      ...m,
      ...v,
      onchange: x
    }),
    [
      () => Me({ "mdc-text-field__input": !0, [r()]: !0 })
    ]
  ), Ae(E, (A) => f = A, () => f), Pe(E, (A, C) => X == null ? void 0 : X(A, C), n), di(() => Ta(E, a)), w(t, E), we(S);
}
var Pg = /* @__PURE__ */ fe('<span class="mdc-text-field__ripple"></span>'), Hg = /* @__PURE__ */ fe("<!> <!>", 1), Ng = /* @__PURE__ */ fe("<span><!> <!></span>"), Ug = /* @__PURE__ */ fe("<!> <!> <!>", 1), Fg = /* @__PURE__ */ fe("<label><!> <!> <!> <!> <!> <!> <!></label>"), kg = /* @__PURE__ */ fe("<div><!> <!> <!> <!> <!></div>"), Bg = /* @__PURE__ */ fe("<!> <!>", 1);
function Os(t, e) {
  xe(e, !0);
  const { applyPassive: n } = Qc;
  let r = () => {
  };
  function i(G) {
    return G === r;
  }
  let a = g(e, "use", 19, () => []), o = g(e, "class", 3, ""), c = g(e, "style", 3, ""), l = g(e, "ripple", 3, !0), u = g(e, "disabled", 3, !1), d = g(e, "required", 3, !1), v = g(e, "textarea", 3, !1), f = g(e, "variant", 19, () => v() ? "outlined" : "standard"), m = g(e, "noLabel", 3, !1), h = g(e, "type", 3, "text"), p = g(e, "value", 15), _ = g(e, "files", 15, r), y = g(e, "invalid", 15, r), T = g(e, "updateInvalid", 19, () => i(y())), I = g(e, "initialInvalid", 3, !1), b = g(e, "dirty", 15, !1), S = g(e, "validateOnValueChange", 19, T), E = g(e, "useNativeValidation", 19, T), x = g(e, "withLeadingIcon", 3, r), A = g(e, "withTrailingIcon", 3, r), C = g(e, "input", 7), P = g(e, "floatingLabel", 7), z = g(e, "lineRipple", 7), F = g(e, "notchedOutline", 7), W = /* @__PURE__ */ Ge(e, [
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
  const R = p() !== void 0 || p() === void 0 && e.input$emptyValueUndefined || !i(_());
  i(_()) && _(null), i(y()) && y(!1);
  let L, q = /* @__PURE__ */ _e(void 0), k = new vi(), K = ye({}), ne = ye({}), N = /* @__PURE__ */ _e(void 0), D = /* @__PURE__ */ _e(!1), O = /* @__PURE__ */ _e(ye(I())), le = be("SMUI:addLayoutListener"), re, M, V = new Promise((G) => M = G), U, J, $, ce;
  const Ce = /* @__PURE__ */ pe(() => C() && C().getElement());
  Te(() => {
    (b() || s(O) || !T()) && s(q) && s(q).isValid() !== !y() && (T() ? y(!s(q).isValid()) : s(q).setValid(!y()));
  }), Te(() => {
    s(q) && s(q).getValidateOnValueChange() !== S() && s(q).setValidateOnValueChange(i(S()) ? !1 : S());
  }), Te(() => {
    s(q) && s(q).setUseNativeValidation(i(E()) ? !0 : E());
  }), Te(() => {
    s(q) && s(q).setDisabled(u());
  });
  let ee = p();
  Te(() => {
    if (s(q) && R && ee !== p()) {
      ee = p();
      const G = `${p() == null ? "" : p()}`;
      s(q).getValue() !== G && s(q).setValue(G);
    }
  }), le && (re = le(B)), ue("SMUI:textfield:leading-icon:mount", (G) => {
    U = G;
  }), ue("SMUI:textfield:leading-icon:unmount", () => {
    U = void 0;
  }), ue("SMUI:textfield:trailing-icon:mount", (G) => {
    J = G;
  }), ue("SMUI:textfield:trailing-icon:unmount", () => {
    J = void 0;
  }), ue("SMUI:textfield:helper-text:id", (G) => {
    Q(N, G, !0);
  }), ue("SMUI:textfield:helper-text:mount", (G) => {
    $ = G;
  }), ue("SMUI:textfield:helper-text:unmount", () => {
    Q(N, void 0), $ = void 0;
  }), ue("SMUI:textfield:character-counter:mount", (G) => {
    ce = G;
  }), ue("SMUI:textfield:character-counter:unmount", () => {
    ce = void 0;
  }), at(() => {
    var G;
    if (Q(
      q,
      new _g(
        {
          // getRootAdapterMethods_
          addClass: Re,
          removeClass: Oe,
          hasClass: ae,
          registerTextFieldInteractionHandler: (ie, Ne) => k.on(Y(), ie, Ne),
          deregisterTextFieldInteractionHandler: (ie, Ne) => k.off(Y(), ie, Ne),
          registerValidationAttributeChangeHandler: (ie) => {
            const Ne = (bt) => bt.map((Vt) => Vt.attributeName).filter((Vt) => Vt), ft = new MutationObserver((bt) => {
              E() && ie(Ne(bt));
            }), It = { attributes: !0 };
            return C() && ft.observe(C().getElement(), It), ft;
          },
          deregisterValidationAttributeChangeHandler: (ie) => {
            ie.disconnect();
          },
          // getInputAdapterMethods_
          getNativeInput: () => {
            var ie;
            return ((ie = C()) == null ? void 0 : ie.getElement()) ?? null;
          },
          setInputAttr: (ie, Ne) => {
            var ft;
            (ft = C()) == null || ft.addAttr(ie, Ne);
          },
          removeInputAttr: (ie) => {
            var Ne;
            (Ne = C()) == null || Ne.removeAttr(ie);
          },
          isFocused: () => {
            var ie;
            return document.activeElement === ((ie = C()) == null ? void 0 : ie.getElement());
          },
          registerInputInteractionHandler: (ie, Ne) => {
            var It;
            const ft = (It = C()) == null ? void 0 : It.getElement();
            if (ft) {
              const bt = n();
              k.on(ft, ie, Ne, typeof bt == "boolean" ? { capture: bt } : bt);
            }
          },
          deregisterInputInteractionHandler: (ie, Ne) => {
            var It;
            const ft = (It = C()) == null ? void 0 : It.getElement();
            ft && k.off(ft, ie, Ne);
          },
          // getLabelAdapterMethods_
          floatLabel: (ie) => P() && P().float(ie),
          getLabelWidth: () => P() ? P().getWidth() : 0,
          hasLabel: () => !!P(),
          shakeLabel: (ie) => P() && P().shake(ie),
          setLabelRequired: (ie) => P() && P().setRequired(ie),
          // getLineRippleAdapterMethods_
          activateLineRipple: () => z() && z().activate(),
          deactivateLineRipple: () => z() && z().deactivate(),
          setLineRippleTransformOrigin: (ie) => z() && z().setRippleCenter(ie),
          // getOutlineAdapterMethods_
          closeOutline: () => F() && F().closeNotch(),
          hasOutline: () => !!F(),
          notchOutline: (ie) => F() && F().notch(ie)
        },
        {
          get helperText() {
            return $;
          },
          get characterCounter() {
            return ce;
          },
          get leadingIcon() {
            return U;
          },
          get trailingIcon() {
            return J;
          }
        }
      ),
      !0
    ), R) {
      if (C() == null)
        throw new Error("SMUI Textfield must be initialized with either a non-undefined initial value or an Input component.");
      (G = s(q)) == null || G.init();
    } else
      dc().then(() => {
        var ie;
        if (C() == null)
          throw new Error("SMUI Textfield must be initialized with either a non-undefined initial value or an Input component.");
        (ie = s(q)) == null || ie.init();
      });
    return M(), () => {
      var ie;
      (ie = s(q)) == null || ie.destroy(), k.clear();
    };
  }), yn(() => {
    re && re();
  });
  function ae(G) {
    return G in K ? K[G] ?? null : Y().classList.contains(G);
  }
  function Re(G) {
    K[G] || (K[G] = !0);
  }
  function Oe(G) {
    (!(G in K) || K[G]) && (K[G] = !1);
  }
  function ke(G, ie) {
    ne[G] != ie && (ie === "" || ie == null ? delete ne[G] : ne[G] = ie);
  }
  function ze() {
    var G;
    (G = C()) == null || G.focus();
  }
  function Fe() {
    var G;
    (G = C()) == null || G.blur();
  }
  function B() {
    if (s(q)) {
      const G = s(q).shouldFloat;
      s(q).notchOutline(G);
    }
  }
  function Y() {
    return L;
  }
  var ve = { focus: ze, blur: Fe, layout: B, getElement: Y }, De = Bg(), Be = Z(De);
  {
    var ut = (G) => {
      var ie = Fg();
      He(ie, (Xe, et, tt) => ({ class: Xe, style: et, for: void 0, ...tt }), [
        () => Me({
          "mdc-text-field": !0,
          "mdc-text-field--disabled": u(),
          "mdc-text-field--textarea": v(),
          "mdc-text-field--filled": f() === "filled",
          "mdc-text-field--outlined": f() === "outlined",
          "smui-text-field--standard": f() === "standard" && !v(),
          "mdc-text-field--no-label": m() || e.label == null,
          "mdc-text-field--label-floating": s(D) || p() != null && p() !== "",
          "mdc-text-field--with-leading-icon": i(x()) ? e.leadingIcon : x(),
          "mdc-text-field--with-trailing-icon": i(A()) ? e.trailingIcon : A(),
          "mdc-text-field--with-internal-counter": v() && e.internalCounter,
          "mdc-text-field--invalid": y(),
          ...K,
          [o()]: !0
        }),
        () => Object.entries(ne).map(([Xe, et]) => `${Xe}: ${et};`).concat([c()]).join(" "),
        () => Bn(W, ["input$", "label$", "ripple$", "outline$", "helperLine$"])
      ]);
      var Ne = de(ie);
      {
        var ft = (Xe) => {
          var et = Hg(), tt = Z(et);
          {
            var Nt = (dt) => {
              var wt = Pg();
              w(dt, wt);
            };
            oe(tt, (dt) => {
              f() === "filled" && dt(Nt);
            });
          }
          var vn = Ie(tt, 2);
          {
            var ot = (dt) => {
              {
                let wt = /* @__PURE__ */ pe(() => s(D) || p() != null && p() !== "" && (typeof p() != "number" || !isNaN(p()))), nt = /* @__PURE__ */ pe(() => it(W, "label$"));
                Ae(
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
                        var Mt = te(), Et = Z(Mt);
                        {
                          var Ut = (Gt) => {
                          }, ln = (Gt) => {
                            var un = te(), Jt = Z(un);
                            {
                              var Wn = (cn) => {
                                var zt = yt();
                                Le(() => $e(zt, e.label)), w(cn, zt);
                              }, Vr = (cn) => {
                                var zt = te(), qn = Z(zt);
                                Se(qn, () => e.label), w(cn, zt);
                              };
                              oe(
                                Jt,
                                (cn) => {
                                  typeof e.label == "string" ? cn(Wn) : cn(Vr, !1);
                                },
                                !0
                              );
                            }
                            w(Gt, un);
                          };
                          oe(Et, (Gt) => {
                            e.label == null ? Gt(Ut) : Gt(ln, !1);
                          });
                        }
                        w(Dt, Mt);
                      },
                      $$slots: { default: !0 }
                    }
                  )),
                  (Dt) => P(Dt),
                  () => P()
                );
              }
            };
            oe(vn, (dt) => {
              !m() && e.label != null && dt(ot);
            });
          }
          w(Xe, et);
        };
        oe(Ne, (Xe) => {
          !v() && f() !== "outlined" && Xe(ft);
        });
      }
      var It = Ie(Ne, 2);
      {
        var bt = (Xe) => {
          {
            let et = /* @__PURE__ */ pe(() => m() || e.label == null), tt = /* @__PURE__ */ pe(() => it(W, "outline$"));
            Ae(
              nd(Xe, Je(
                {
                  get noLabel() {
                    return s(et);
                  }
                },
                () => s(tt),
                {
                  children: (Nt, vn) => {
                    var ot = te(), dt = Z(ot);
                    {
                      var wt = (nt) => {
                        {
                          let Dt = /* @__PURE__ */ pe(() => s(D) || p() != null && p() !== "" && (typeof p() != "number" || !isNaN(p()))), Rn = /* @__PURE__ */ pe(() => it(W, "label$"));
                          Ae(
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
                                  var Ut = te(), ln = Z(Ut);
                                  {
                                    var Gt = (Jt) => {
                                    }, un = (Jt) => {
                                      var Wn = te(), Vr = Z(Wn);
                                      {
                                        var cn = (qn) => {
                                          var Gr = yt();
                                          Le(() => $e(Gr, e.label)), w(qn, Gr);
                                        }, zt = (qn) => {
                                          var Gr = te(), ko = Z(Gr);
                                          Se(ko, () => e.label), w(qn, Gr);
                                        };
                                        oe(
                                          Vr,
                                          (qn) => {
                                            typeof e.label == "string" ? qn(cn) : qn(zt, !1);
                                          },
                                          !0
                                        );
                                      }
                                      w(Jt, Wn);
                                    };
                                    oe(ln, (Jt) => {
                                      e.label == null ? Jt(Gt) : Jt(un, !1);
                                    });
                                  }
                                  w(Mt, Ut);
                                },
                                $$slots: { default: !0 }
                              }
                            )),
                            (Mt) => P(Mt),
                            () => P()
                          );
                        }
                      };
                      oe(dt, (nt) => {
                        !m() && e.label != null && nt(wt);
                      });
                    }
                    w(Nt, ot);
                  },
                  $$slots: { default: !0 }
                }
              )),
              (Nt) => F(Nt),
              () => F()
            );
          }
        };
        oe(It, (Xe) => {
          (v() || f() === "outlined") && Xe(bt);
        });
      }
      var Vt = Ie(It, 2);
      Xa(Vt, {
        key: "SMUI:textfield:icon:leading",
        value: !0,
        children: (Xe, et) => {
          var tt = te(), Nt = Z(tt);
          Se(Nt, () => e.leadingIcon ?? he), w(Xe, tt);
        },
        $$slots: { default: !0 }
      });
      var yr = Ie(Vt, 2);
      Se(yr, () => e.children ?? he);
      var mt = Ie(yr, 2);
      {
        var Ht = (Xe) => {
          var et = Ng(), tt = de(et);
          {
            let vn = /* @__PURE__ */ pe(() => it(W, "input$"));
            Ae(
              Mg(tt, Je(
                {
                  get disabled() {
                    return u();
                  },
                  get required() {
                    return d();
                  },
                  get updateInvalid() {
                    return T();
                  },
                  get initialInvalid() {
                    return s(O);
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
                  onblur: (ot) => {
                    var dt;
                    Q(D, !1), Q(O, !0), Ke(Y(), "blur", ot), (dt = e.input$onblur) == null || dt.call(e, ot);
                  },
                  onfocus: (ot) => {
                    var dt;
                    Q(D, !0), Ke(Y(), "focus", ot), (dt = e.input$onfocus) == null || dt.call(e, ot);
                  },
                  get value() {
                    return p();
                  },
                  set value(ot) {
                    p(ot);
                  },
                  get dirty() {
                    return b();
                  },
                  set dirty(ot) {
                    b(ot);
                  },
                  get invalid() {
                    return y();
                  },
                  set invalid(ot) {
                    y(ot);
                  }
                }
              )),
              (ot) => C(ot),
              () => C()
            );
          }
          var Nt = Ie(tt, 2);
          Se(Nt, () => e.internalCounter ?? he), Le((vn) => Xs(et, 1, vn), [
            () => _c(Me({
              "mdc-text-field__resizer": !("input$resizable" in W) || e.input$resizable
            }))
          ]), w(Xe, et);
        }, St = (Xe) => {
          var et = Ug(), tt = Z(et);
          {
            var Nt = (wt) => {
              var nt = te(), Dt = Z(nt);
              {
                var Rn = (Et) => {
                  wg(Et, {
                    children: (Ut, ln) => {
                      var Gt = yt();
                      Le(() => $e(Gt, e.prefix)), w(Ut, Gt);
                    },
                    $$slots: { default: !0 }
                  });
                }, Mt = (Et) => {
                  var Ut = te(), ln = Z(Ut);
                  Se(ln, () => e.prefix ?? he), w(Et, Ut);
                };
                oe(Dt, (Et) => {
                  typeof e.prefix == "string" ? Et(Rn) : Et(Mt, !1);
                });
              }
              w(wt, nt);
            };
            oe(tt, (wt) => {
              e.prefix != null && wt(Nt);
            });
          }
          var vn = Ie(tt, 2);
          {
            let wt = /* @__PURE__ */ pe(() => it(W, "input$"));
            Ae(
              Rg(vn, Je(
                {
                  get type() {
                    return h();
                  },
                  get disabled() {
                    return u();
                  },
                  get required() {
                    return d();
                  },
                  get updateInvalid() {
                    return T();
                  },
                  get initialInvalid() {
                    return s(O);
                  },
                  get "aria-controls"() {
                    return s(N);
                  },
                  get "aria-describedby"() {
                    return s(N);
                  }
                },
                () => m() && e.label != null && typeof e.label == "string" ? { placeholder: e.label } : {},
                () => s(wt),
                {
                  onblur: (nt) => {
                    var Dt;
                    Q(D, !1), Q(O, !0), Ke(Y(), "blur", nt), (Dt = e.input$onblur) == null || Dt.call(e, nt);
                  },
                  onfocus: (nt) => {
                    var Dt;
                    Q(D, !0), Ke(Y(), "focus", nt), (Dt = e.input$onfocus) == null || Dt.call(e, nt);
                  },
                  get value() {
                    return p();
                  },
                  set value(nt) {
                    p(nt);
                  },
                  get files() {
                    return _();
                  },
                  set files(nt) {
                    _(nt);
                  },
                  get dirty() {
                    return b();
                  },
                  set dirty(nt) {
                    b(nt);
                  },
                  get invalid() {
                    return y();
                  },
                  set invalid(nt) {
                    y(nt);
                  }
                }
              )),
              (nt) => C(nt),
              () => C()
            );
          }
          var ot = Ie(vn, 2);
          {
            var dt = (wt) => {
              var nt = te(), Dt = Z(nt);
              {
                var Rn = (Et) => {
                  Lg(Et, {
                    children: (Ut, ln) => {
                      var Gt = yt();
                      Le(() => $e(Gt, e.suffix)), w(Ut, Gt);
                    },
                    $$slots: { default: !0 }
                  });
                }, Mt = (Et) => {
                  var Ut = te(), ln = Z(Ut);
                  Se(ln, () => e.suffix ?? he), w(Et, Ut);
                };
                oe(Dt, (Et) => {
                  typeof e.suffix == "string" ? Et(Rn) : Et(Mt, !1);
                });
              }
              w(wt, nt);
            };
            oe(ot, (wt) => {
              e.suffix != null && wt(dt);
            });
          }
          w(Xe, et);
        };
        oe(mt, (Xe) => {
          v() && typeof p() == "string" ? Xe(Ht) : Xe(St, !1);
        });
      }
      var On = Ie(mt, 2);
      Xa(On, {
        key: "SMUI:textfield:icon:leading",
        value: !1,
        children: (Xe, et) => {
          var tt = te(), Nt = Z(tt);
          Se(Nt, () => e.trailingIcon ?? he), w(Xe, tt);
        },
        $$slots: { default: !0 }
      });
      var _i = Ie(On, 2);
      {
        var jn = (Xe) => {
          {
            let et = /* @__PURE__ */ pe(() => it(W, "ripple$"));
            Ae(td(Xe, Je(() => s(et))), (tt) => z(tt), () => z());
          }
        };
        oe(_i, (Xe) => {
          !v() && f() !== "outlined" && l() && Xe(jn);
        });
      }
      Ae(ie, (Xe) => L = Xe, () => L), Pe(ie, (Xe, et) => Yt == null ? void 0 : Yt(Xe, et), () => ({
        ripple: !v() && f() === "filled",
        unbounded: !1,
        addClass: Re,
        removeClass: Oe,
        addStyle: ke,
        eventTarget: s(Ce),
        activeTarget: s(Ce),
        initPromise: V
      })), Pe(ie, (Xe, et) => X == null ? void 0 : X(Xe, et), a), w(G, ie);
    }, vt = (G) => {
      var ie = kg();
      He(ie, (mt, Ht, St) => ({ class: mt, style: Ht, ...St }), [
        () => Me({
          "mdc-text-field": !0,
          "mdc-text-field--disabled": u(),
          "mdc-text-field--textarea": v(),
          "mdc-text-field--filled": f() === "filled",
          "mdc-text-field--outlined": f() === "outlined",
          "smui-text-field--standard": f() === "standard" && !v(),
          "mdc-text-field--no-label": m() || e.label == null,
          "mdc-text-field--with-leading-icon": e.leadingIcon,
          "mdc-text-field--with-trailing-icon": e.trailingIcon,
          "mdc-text-field--invalid": y(),
          ...K,
          [o()]: !0
        }),
        () => Object.entries(ne).map(([mt, Ht]) => `${mt}: ${Ht};`).concat([c()]).join(" "),
        () => Bn(W, ["input$", "label$", "ripple$", "outline$", "helperLine$"])
      ]);
      var Ne = de(ie);
      {
        var ft = (mt) => {
          var Ht = te(), St = Z(Ht);
          Se(St, () => e.label ?? he), w(mt, Ht);
        };
        oe(Ne, (mt) => {
          typeof e.label != "string" && mt(ft);
        });
      }
      var It = Ie(Ne, 2);
      Xa(It, {
        key: "SMUI:textfield:icon:leading",
        value: !0,
        children: (mt, Ht) => {
          var St = te(), On = Z(St);
          Se(On, () => e.leadingIcon ?? he), w(mt, St);
        },
        $$slots: { default: !0 }
      });
      var bt = Ie(It, 2);
      Se(bt, () => e.children ?? he);
      var Vt = Ie(bt, 2);
      Xa(Vt, {
        key: "SMUI:textfield:icon:leading",
        value: !1,
        children: (mt, Ht) => {
          var St = te(), On = Z(St);
          Se(On, () => e.trailingIcon ?? he), w(mt, St);
        },
        $$slots: { default: !0 }
      });
      var yr = Ie(Vt, 2);
      Se(yr, () => e.line ?? he), Ae(ie, (mt) => L = mt, () => L), Pe(ie, (mt, Ht) => Yt == null ? void 0 : Yt(mt, Ht), () => ({
        ripple: l(),
        unbounded: !1,
        addClass: Re,
        removeClass: Oe,
        addStyle: ke
      })), Pe(ie, (mt, Ht) => X == null ? void 0 : X(mt, Ht), a), w(G, ie);
    };
    oe(Be, (G) => {
      R ? G(ut) : G(vt, !1);
    });
  }
  var me = Ie(Be, 2);
  {
    var j = (G) => {
      {
        let ie = /* @__PURE__ */ pe(() => it(W, "helperLine$"));
        xg(G, Je(() => s(ie), {
          children: (Ne, ft) => {
            var It = te(), bt = Z(It);
            Se(bt, () => e.helper ?? he), w(Ne, It);
          },
          $$slots: { default: !0 }
        }));
      }
    };
    oe(me, (G) => {
      e.helper && G(j);
    });
  }
  return w(t, De), we(ve);
}
var Vg = /* @__PURE__ */ fe("<i><!></i>");
function Gg(t, e) {
  xe(e, !0);
  const n = () => kn(h, "$leadingStore", r), [r, i] = rr();
  let a = g(e, "use", 19, () => []), o = g(e, "class", 3, ""), c = g(e, "tabindex", 19, () => e.role === "button" ? 0 : -1), l = g(e, "disabled", 3, !1), u = /* @__PURE__ */ Ge(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "role",
    "tabindex",
    "disabled",
    "children"
  ]), d, v = /* @__PURE__ */ _e(void 0), f = new vi(), m = ye({});
  const h = be("SMUI:textfield:icon:leading"), p = n();
  let _ = /* @__PURE__ */ _e(void 0);
  const y = /* @__PURE__ */ pe(() => ({ role: e.role, tabindex: c() })), T = be("SMUI:textfield:leading-icon:mount"), I = be("SMUI:textfield:leading-icon:unmount"), b = be("SMUI:textfield:trailing-icon:mount"), S = be("SMUI:textfield:trailing-icon:unmount");
  at(() => (Q(
    v,
    new Ig({
      getAttr: E,
      setAttr: x,
      removeAttr: A,
      setContent: (q) => {
        Q(_, q, !0);
      },
      registerInteractionHandler: (q, k) => f.on(C(), q, k),
      deregisterInteractionHandler: (q, k) => f.off(C(), q, k),
      notifyIconAction: () => Ke(C(), "SMUITextFieldIcon")
    }),
    !0
  ), p ? T && T(s(v)) : b && b(s(v)), s(v).init(), () => {
    var q;
    s(v) && (p ? I && I(s(v)) : S && S(s(v))), (q = s(v)) == null || q.destroy(), f.clear();
  }));
  function E(q) {
    return q in m ? m[q] ?? null : C().getAttribute(q);
  }
  function x(q, k) {
    m[q] !== k && (m[q] = k);
  }
  function A(q) {
    (!(q in m) || m[q] != null) && (m[q] = void 0);
  }
  function C() {
    return d;
  }
  var P = { getElement: C }, z = Vg();
  He(
    z,
    (q) => ({
      class: q,
      "aria-hidden": c() === -1 ? "true" : "false",
      "aria-disabled": e.role === "button" ? l() ? "true" : "false" : void 0,
      ...s(y),
      ...m,
      ...u
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
  var F = de(z);
  {
    var W = (q) => {
      var k = te(), K = Z(k);
      Se(K, () => e.children ?? he), w(q, k);
    }, R = (q) => {
      var k = yt();
      Le(() => $e(k, s(_))), w(q, k);
    };
    oe(F, (q) => {
      s(_) == null ? q(W) : q(R, !1);
    });
  }
  Ae(z, (q) => d = q, () => d), Pe(z, (q, k) => X == null ? void 0 : X(q, k), a), w(t, z);
  var L = we(P);
  return i(), L;
}
function jg(t, e) {
  xe(e, !0);
  let n = g(e, "placeholder", 3, ""), r = g(e, "label", 3, ""), i = g(e, "icon", 3, ""), a = g(e, "value", 15, ""), o = g(e, "variant", 3, "standard"), c = g(e, "styles", 3, ""), l = g(e, "required", 3, !1), u = g(e, "oninput", 3, () => {
  });
  var d = te(), v = Z(d);
  {
    var f = (h) => {
      {
        const p = (y) => {
          Gg(y, {
            class: "material-icons",
            children: (T, I) => {
              var b = yt();
              Le(() => $e(b, i())), w(T, b);
            },
            $$slots: { default: !0 }
          });
        };
        let _ = /* @__PURE__ */ pe(() => `width: 100%; ${c()}`);
        Os(h, {
          get label() {
            return r();
          },
          get required() {
            return l();
          },
          get placeholder() {
            return n();
          },
          get style() {
            return s(_);
          },
          get variant() {
            return o();
          },
          get oninput() {
            return u();
          },
          get value() {
            return a();
          },
          set value(y) {
            a(y);
          },
          leadingIcon: p,
          $$slots: { leadingIcon: !0 }
        });
      }
    }, m = (h) => {
      Os(h, {
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
        get oninput() {
          return u();
        },
        get value() {
          return a();
        },
        set value(p) {
          a(p);
        }
      });
    };
    oe(v, (h) => {
      i() ? h(f) : h(m, !1);
    });
  }
  w(t, d), we();
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
var Wg = {
  ANCHOR: "mdc-menu-surface--anchor",
  ANIMATING_CLOSED: "mdc-menu-surface--animating-closed",
  ANIMATING_OPEN: "mdc-menu-surface--animating-open",
  FIXED: "mdc-menu-surface--fixed",
  IS_OPEN_BELOW: "mdc-menu-surface--is-open-below",
  OPEN: "mdc-menu-surface--open",
  ROOT: "mdc-menu-surface"
}, qg = {
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
}, fa = {
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
var Er, sr, Ye = {
  LIST_ITEM_ACTIVATED_CLASS: "mdc-list-item--activated",
  LIST_ITEM_CLASS: "mdc-list-item",
  LIST_ITEM_DISABLED_CLASS: "mdc-list-item--disabled",
  LIST_ITEM_SELECTED_CLASS: "mdc-list-item--selected",
  LIST_ITEM_TEXT_CLASS: "mdc-list-item__text",
  LIST_ITEM_PRIMARY_TEXT_CLASS: "mdc-list-item__primary-text",
  ROOT: "mdc-list"
};
Er = {}, Er["" + Ye.LIST_ITEM_ACTIVATED_CLASS] = "mdc-list-item--activated", Er["" + Ye.LIST_ITEM_CLASS] = "mdc-list-item", Er["" + Ye.LIST_ITEM_DISABLED_CLASS] = "mdc-list-item--disabled", Er["" + Ye.LIST_ITEM_SELECTED_CLASS] = "mdc-list-item--selected", Er["" + Ye.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-list-item__primary-text", Er["" + Ye.ROOT] = "mdc-list";
var Ci = (sr = {}, sr["" + Ye.LIST_ITEM_ACTIVATED_CLASS] = "mdc-deprecated-list-item--activated", sr["" + Ye.LIST_ITEM_CLASS] = "mdc-deprecated-list-item", sr["" + Ye.LIST_ITEM_DISABLED_CLASS] = "mdc-deprecated-list-item--disabled", sr["" + Ye.LIST_ITEM_SELECTED_CLASS] = "mdc-deprecated-list-item--selected", sr["" + Ye.LIST_ITEM_TEXT_CLASS] = "mdc-deprecated-list-item__text", sr["" + Ye.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-deprecated-list-item__primary-text", sr["" + Ye.ROOT] = "mdc-deprecated-list", sr), Sr = {
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
var zg = ["input", "button", "textarea", "select"], En = function(t) {
  var e = t.target;
  if (e) {
    var n = ("" + e.tagName).toLowerCase();
    zg.indexOf(n) === -1 && t.preventDefault();
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
function Kg() {
  var t = {
    bufferClearTimeout: 0,
    currentFirstChar: "",
    sortedIndexCursor: 0,
    typeaheadBuffer: ""
  };
  return t;
}
function Xg(t, e) {
  for (var n = /* @__PURE__ */ new Map(), r = 0; r < t; r++) {
    var i = e(r).trim();
    if (i) {
      var a = i[0].toLowerCase();
      n.has(a) || n.set(a, []), n.get(a).push({ text: i.toLowerCase(), index: r });
    }
  }
  return n.forEach(function(o) {
    o.sort(function(c, l) {
      return c.index - l.index;
    });
  }), n;
}
function Rs(t, e) {
  var n = t.nextChar, r = t.focusItemAtIndex, i = t.sortedIndexByFirstChar, a = t.focusedItemIndex, o = t.skipFocus, c = t.isItemAtIndexDisabled;
  clearTimeout(e.bufferClearTimeout), e.bufferClearTimeout = setTimeout(function() {
    id(e);
  }, At.TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS), e.typeaheadBuffer = e.typeaheadBuffer + n;
  var l;
  return e.typeaheadBuffer.length === 1 ? l = Yg(i, a, c, e) : l = Zg(i, c, e), l !== -1 && !o && r(l), l;
}
function Yg(t, e, n, r) {
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
  var c = -1, l;
  for (l = 0; l < a.length; l++)
    if (!n(a[l].index)) {
      c = l;
      break;
    }
  for (; l < a.length; l++)
    if (a[l].index > e && !n(a[l].index)) {
      c = l;
      break;
    }
  return c !== -1 ? (r.sortedIndexCursor = c, a[r.sortedIndexCursor].index) : -1;
}
function Zg(t, e, n) {
  var r = n.typeaheadBuffer[0], i = t.get(r);
  if (!i)
    return -1;
  var a = i[n.sortedIndexCursor];
  if (a.text.lastIndexOf(n.typeaheadBuffer, 0) === 0 && !e(a.index))
    return a.index;
  for (var o = (n.sortedIndexCursor + 1) % i.length, c = -1; o !== n.sortedIndexCursor; ) {
    var l = i[o], u = l.text.lastIndexOf(n.typeaheadBuffer, 0) === 0, d = !e(l.index);
    if (u && d) {
      c = o;
      break;
    }
    o = (o + 1) % i.length;
  }
  return c !== -1 ? (n.sortedIndexCursor = c, i[n.sortedIndexCursor].index) : -1;
}
function rd(t) {
  return t.typeaheadBuffer.length > 0;
}
function id(t) {
  t.typeaheadBuffer = "";
}
function ru(t, e) {
  var n = t.event, r = t.isTargetListItem, i = t.focusedItemIndex, a = t.focusItemAtIndex, o = t.sortedIndexByFirstChar, c = t.isItemAtIndexDisabled, l = Lt(n) === "ArrowLeft", u = Lt(n) === "ArrowUp", d = Lt(n) === "ArrowRight", v = Lt(n) === "ArrowDown", f = Lt(n) === "Home", m = Lt(n) === "End", h = Lt(n) === "Enter", p = Lt(n) === "Spacebar";
  if (n.altKey || n.ctrlKey || n.metaKey || l || u || d || v || f || m || h)
    return -1;
  var _ = !p && n.key.length === 1;
  if (_) {
    En(n);
    var y = {
      focusItemAtIndex: a,
      focusedItemIndex: i,
      nextChar: n.key.toLowerCase(),
      sortedIndexByFirstChar: o,
      skipFocus: !1,
      isItemAtIndexDisabled: c
    };
    return Rs(y, e);
  }
  if (!p)
    return -1;
  r && En(n);
  var T = r && rd(e);
  if (T) {
    var y = {
      focusItemAtIndex: a,
      focusedItemIndex: i,
      nextChar: " ",
      sortedIndexByFirstChar: o,
      skipFocus: !1,
      isItemAtIndexDisabled: c
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
function Qg(t) {
  return t instanceof Array;
}
var Jg = ["Alt", "Control", "Meta", "Shift"];
function iu(t) {
  var e = new Set(t ? Jg.filter(function(n) {
    return t.getModifierState(n);
  }) : []);
  return function(n) {
    return n.every(function(r) {
      return e.has(r);
    }) && n.length === e.size;
  };
}
var $g = (
  /** @class */
  function(t) {
    qe(e, t);
    function e(n) {
      var r = t.call(this, ge(ge({}, e.defaultAdapter), n)) || this;
      return r.wrapFocus = !1, r.isVertical = !0, r.isSingleSelectionList = !1, r.areDisabledItemsFocusable = !0, r.selectedIndex = At.UNSET_INDEX, r.focusedItemIndex = At.UNSET_INDEX, r.useActivatedClass = !1, r.useSelectedAttr = !1, r.ariaCurrentAttrValue = null, r.isCheckboxList = !1, r.isRadioList = !1, r.lastSelectedIndex = null, r.hasTypeahead = !1, r.typeaheadState = Kg(), r.sortedIndexByFirstChar = /* @__PURE__ */ new Map(), r;
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
      return this.hasTypeahead && rd(this.typeaheadState);
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
      var a = this, o, c = Lt(n) === "ArrowLeft", l = Lt(n) === "ArrowUp", u = Lt(n) === "ArrowRight", d = Lt(n) === "ArrowDown", v = Lt(n) === "Home", f = Lt(n) === "End", m = Lt(n) === "Enter", h = Lt(n) === "Spacebar", p = this.isVertical && d || !this.isVertical && u, _ = this.isVertical && l || !this.isVertical && c, y = n.key === "A" || n.key === "a", T = iu(n);
      if (this.adapter.isRootFocused()) {
        if ((_ || f) && T([]))
          n.preventDefault(), this.focusLastElement();
        else if ((p || v) && T([]))
          n.preventDefault(), this.focusFirstElement();
        else if (_ && T(["Shift"]) && this.isCheckboxList) {
          n.preventDefault();
          var I = this.focusLastElement();
          I !== -1 && this.setSelectedIndexOnAction(I, !1);
        } else if (p && T(["Shift"]) && this.isCheckboxList) {
          n.preventDefault();
          var I = this.focusFirstElement();
          I !== -1 && this.setSelectedIndexOnAction(I, !1);
        }
        if (this.hasTypeahead) {
          var b = {
            event: n,
            focusItemAtIndex: function(x) {
              a.focusItemAtIndex(x);
            },
            focusedItemIndex: -1,
            isTargetListItem: r,
            sortedIndexByFirstChar: this.sortedIndexByFirstChar,
            isItemAtIndexDisabled: function(x) {
              return a.isIndexDisabled(x);
            }
          };
          ru(b, this.typeaheadState);
        }
        return;
      }
      var S = this.adapter.getFocusedElementIndex();
      if (!(S === -1 && (S = i, S < 0))) {
        if (p && T([]))
          En(n), this.focusNextElement(S);
        else if (_ && T([]))
          En(n), this.focusPrevElement(S);
        else if (p && T(["Shift"]) && this.isCheckboxList) {
          En(n);
          var I = this.focusNextElement(S);
          I !== -1 && this.setSelectedIndexOnAction(I, !1);
        } else if (_ && T(["Shift"]) && this.isCheckboxList) {
          En(n);
          var I = this.focusPrevElement(S);
          I !== -1 && this.setSelectedIndexOnAction(I, !1);
        } else if (v && T([]))
          En(n), this.focusFirstElement();
        else if (f && T([]))
          En(n), this.focusLastElement();
        else if (v && T(["Control", "Shift"]) && this.isCheckboxList) {
          if (En(n), this.isIndexDisabled(S))
            return;
          this.focusFirstElement(), this.toggleCheckboxRange(0, S, S);
        } else if (f && T(["Control", "Shift"]) && this.isCheckboxList) {
          if (En(n), this.isIndexDisabled(S))
            return;
          this.focusLastElement(), this.toggleCheckboxRange(S, this.adapter.getListItemCount() - 1, S);
        } else if (y && T(["Control"]) && this.isCheckboxList)
          n.preventDefault(), this.checkboxListToggleAll(this.selectedIndex === At.UNSET_INDEX ? [] : this.selectedIndex, !0);
        else if ((m || h) && T([])) {
          if (r) {
            var E = n.target;
            if (E && E.tagName === "A" && m || (En(n), this.isIndexDisabled(S)))
              return;
            this.isTypeaheadInProgress() || (this.isSelectableList() && this.setSelectedIndexOnAction(S, !1), this.adapter.notifyAction(S));
          }
        } else if ((m || h) && T(["Shift"]) && this.isCheckboxList) {
          var E = n.target;
          if (E && E.tagName === "A" && m || (En(n), this.isIndexDisabled(S)))
            return;
          this.isTypeaheadInProgress() || (this.toggleCheckboxRange((o = this.lastSelectedIndex) !== null && o !== void 0 ? o : S, S, S), this.adapter.notifyAction(S));
        }
        if (this.hasTypeahead) {
          var b = {
            event: n,
            focusItemAtIndex: function(A) {
              a.focusItemAtIndex(A);
            },
            focusedItemIndex: this.focusedItemIndex,
            isTargetListItem: r,
            sortedIndexByFirstChar: this.sortedIndexByFirstChar,
            isItemAtIndexDisabled: function(A) {
              return a.isIndexDisabled(A);
            }
          };
          ru(b, this.typeaheadState);
        }
      }
    }, e.prototype.handleClick = function(n, r, i) {
      var a, o = iu(i);
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
      for (var i = this.selectedIndex, a = r.isUserInteraction ? new Set(i === At.UNSET_INDEX ? [] : i) : null, o = this.getSelectionAttribute(), c = [], l = 0; l < this.adapter.getListItemCount(); l++) {
        var u = a == null ? void 0 : a.has(l), d = n.indexOf(l) >= 0;
        d !== u && c.push(l), this.adapter.setCheckedCheckboxOrRadioAtIndex(l, d), this.adapter.setAttributeForElementIndex(l, o, d ? "true" : "false");
      }
      this.selectedIndex = n, r.isUserInteraction && c.length && this.adapter.notifySelectionChange(c);
    }, e.prototype.toggleCheckboxRange = function(n, r, i) {
      this.lastSelectedIndex = i;
      for (var a = new Set(this.selectedIndex === At.UNSET_INDEX ? [] : this.selectedIndex), o = !(a != null && a.has(i)), c = br([n, r].sort(), 2), l = c[0], u = c[1], d = this.getSelectionAttribute(), v = [], f = l; f <= u; f++)
        if (!this.isIndexDisabled(f)) {
          var m = a.has(f);
          o !== m && (v.push(f), this.adapter.setCheckedCheckboxOrRadioAtIndex(f, o), this.adapter.setAttributeForElementIndex(f, d, "" + o), o ? a.add(f) : a.delete(f));
        }
      v.length && (this.selectedIndex = $n([], br(a)), this.adapter.notifySelectionChange(v));
    }, e.prototype.setTabindexAtIndex = function(n) {
      this.focusedItemIndex === At.UNSET_INDEX && n !== 0 ? this.adapter.setAttributeForElementIndex(0, "tabindex", "-1") : this.focusedItemIndex >= 0 && this.focusedItemIndex !== n && this.adapter.setAttributeForElementIndex(this.focusedItemIndex, "tabindex", "-1"), !(this.selectedIndex instanceof Array) && this.selectedIndex !== n && this.adapter.setAttributeForElementIndex(this.selectedIndex, "tabindex", "-1"), n !== At.UNSET_INDEX && this.adapter.setAttributeForElementIndex(n, "tabindex", "0");
    }, e.prototype.isSelectableList = function() {
      return this.isSingleSelectionList || this.isCheckboxList || this.isRadioList;
    }, e.prototype.setTabindexToFirstSelectedOrFocusedItem = function() {
      var n = this.getFirstSelectedOrFocusedItemIndex();
      this.setTabindexAtIndex(n);
    }, e.prototype.getFirstSelectedOrFocusedItemIndex = function() {
      return this.isSelectableList() ? typeof this.selectedIndex == "number" && this.selectedIndex !== At.UNSET_INDEX ? this.selectedIndex : Qg(this.selectedIndex) && this.selectedIndex.length > 0 ? this.selectedIndex.reduce(function(n, r) {
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
      var c = this.selectedIndex === At.UNSET_INDEX ? [] : this.selectedIndex.slice();
      o ? c.push(n) : c = c.filter(function(l) {
        return l !== n;
      }), this.selectedIndex = c;
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
        focusItemAtIndex: function(c) {
          a.focusItemAtIndex(c);
        },
        focusedItemIndex: r || this.focusedItemIndex,
        nextChar: n,
        sortedIndexByFirstChar: this.sortedIndexByFirstChar,
        skipFocus: i,
        isItemAtIndexDisabled: function(c) {
          return a.isIndexDisabled(c);
        }
      };
      return Rs(o, this.typeaheadState);
    }, e.prototype.typeaheadInitSortedIndex = function() {
      return Xg(this.adapter.getListItemCount(), this.adapter.getPrimaryTextAtIndex);
    }, e.prototype.clearTypeaheadBuffer = function() {
      id(this.typeaheadState);
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
var ad = (
  /** @class */
  function(t) {
    qe(e, t);
    function e(n) {
      var r = t.call(this, ge(ge({}, e.defaultAdapter), n)) || this;
      return r.isSurfaceOpen = !1, r.isQuickOpen = !1, r.isHoistedElement = !1, r.isFixedPosition = !1, r.isHorizontallyCenteredOnViewport = !1, r.maxHeight = 0, r.openBottomBias = 0, r.openAnimationEndTimerId = 0, r.closeAnimationEndTimerId = 0, r.animationRequestId = 0, r.anchorCorner = ai.TOP_START, r.originCorner = ai.TOP_START, r.anchorMargin = { top: 0, right: 0, bottom: 0, left: 0 }, r.position = { x: 0, y: 0 }, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Wg;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return qg;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return fa;
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
        }, fa.TRANSITION_OPEN_DURATION);
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
          }, fa.TRANSITION_CLOSE_DURATION);
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
      var r = this.getoriginCorner(), i = this.getMenuSurfaceMaxHeight(r), a = this.hasBit(r, Ct.BOTTOM) ? "bottom" : "top", o = this.hasBit(r, Ct.RIGHT) ? "right" : "left", c = this.getHorizontalOriginOffset(r), l = this.getVerticalOriginOffset(r), u = this.measurements, d = u.anchorSize, v = u.surfaceSize, f = (n = {}, n[o] = c, n[a] = l, n);
      d.width / v.width > fa.ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO && (o = "center"), (this.isHoistedElement || this.isFixedPosition) && this.adjustPositionForHoistedElement(f), this.adapter.setTransformOrigin(o + " " + a), this.adapter.setPosition(f), this.adapter.setMaxHeight(i ? i + "px" : ""), this.hasBit(r, Ct.BOTTOM) || this.adapter.addClass(e.cssClasses.IS_OPEN_BELOW);
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
      var n = this.originCorner, r = this.measurements, i = r.viewportDistance, a = r.anchorSize, o = r.surfaceSize, c = e.numbers.MARGIN_TO_EDGE, l = this.hasBit(this.anchorCorner, Ct.BOTTOM), u, d;
      l ? (u = i.top - c + this.anchorMargin.bottom, d = i.bottom - c - this.anchorMargin.bottom) : (u = i.top - c + this.anchorMargin.top, d = i.bottom - c + a.height - this.anchorMargin.top);
      var v = d - o.height > 0;
      !v && u > d + this.openBottomBias && (n = this.setBit(n, Ct.BOTTOM));
      var f = this.adapter.isRtl(), m = this.hasBit(this.anchorCorner, Ct.FLIP_RTL), h = this.hasBit(this.anchorCorner, Ct.RIGHT) || this.hasBit(n, Ct.RIGHT), p = !1;
      f && m ? p = !h : p = h;
      var _, y;
      p ? (_ = i.left + a.width + this.anchorMargin.right, y = i.right - this.anchorMargin.right) : (_ = i.left + this.anchorMargin.left, y = i.right + a.width - this.anchorMargin.left);
      var T = _ - o.width > 0, I = y - o.width > 0, b = this.hasBit(n, Ct.FLIP_RTL) && this.hasBit(n, Ct.RIGHT);
      return I && b && f || !T && b ? n = this.unsetBit(n, Ct.RIGHT) : (T && p && f || T && !p && h || !I && _ >= y) && (n = this.setBit(n, Ct.RIGHT)), n;
    }, e.prototype.getMenuSurfaceMaxHeight = function(n) {
      if (this.maxHeight > 0)
        return this.maxHeight;
      var r = this.measurements.viewportDistance, i = 0, a = this.hasBit(n, Ct.BOTTOM), o = this.hasBit(this.anchorCorner, Ct.BOTTOM), c = e.numbers.MARGIN_TO_EDGE;
      return a ? (i = r.top + this.anchorMargin.top - c, o || (i += this.measurements.anchorSize.height)) : (i = r.bottom - this.anchorMargin.bottom + this.measurements.anchorSize.height - c, o && (i -= this.measurements.anchorSize.height)), i;
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
      var r, i, a = this.measurements, o = a.windowScroll, c = a.viewportDistance, l = a.surfaceSize, u = a.viewportSize, d = Object.keys(n);
      try {
        for (var v = kt(d), f = v.next(); !f.done; f = v.next()) {
          var m = f.value, h = n[m] || 0;
          if (this.isHorizontallyCenteredOnViewport && (m === "left" || m === "right")) {
            n[m] = (u.width - l.width) / 2;
            continue;
          }
          h += c[m], this.isFixedPosition || (m === "top" ? h += o.y : m === "bottom" ? h -= o.y : m === "left" ? h += o.x : h -= o.x), n[m] = h;
        }
      } catch (p) {
        r = { error: p };
      } finally {
        try {
          f && !f.done && (i = v.return) && i.call(v);
        } finally {
          if (r) throw r.error;
        }
      }
    }, e.prototype.maybeRestoreFocus = function() {
      var n = this, r = this.adapter.isFocused(), i = this.adapter.getOwnerDocument ? this.adapter.getOwnerDocument() : document, a = i.activeElement && this.adapter.isElementInContainer(i.activeElement);
      (r || a) && setTimeout(function() {
        n.adapter.restoreFocus();
      }, fa.TOUCH_EVENT_WAIT_MS);
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
var au = {
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
function ep(t) {
  return !!t.document && typeof t.document.createElement == "function";
}
function tp(t, e) {
  if (ep(t) && e in au) {
    var n = t.document.createElement("div"), r = au[e], i = r.standard, a = r.prefixed, o = i in n.style;
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
}, np = {
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
var rp = (
  /** @class */
  function(t) {
    qe(e, t);
    function e(n) {
      var r = t.call(this, ge(ge({}, e.defaultAdapter), n)) || this;
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
        return np;
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
        }, ad.numbers.TRANSITION_CLOSE_DURATION);
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
var _t = {
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
var ip = (
  /** @class */
  function(t) {
    qe(e, t);
    function e(n, r) {
      r === void 0 && (r = {});
      var i = t.call(this, ge(ge({}, e.defaultAdapter), n)) || this;
      return i.disabled = !1, i.isMenuOpen = !1, i.useDefaultValidation = !0, i.customValidity = !0, i.lastSelectedIndex = Kr.UNSET_INDEX, i.clickDebounceTimeout = 0, i.recentlyClicked = !1, i.leadingIcon = r.leadingIcon, i.helperText = r.helperText, i;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return _t;
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
      this.disabled = n, this.disabled ? (this.adapter.addClass(_t.DISABLED), this.adapter.closeMenu()) : this.adapter.removeClass(_t.DISABLED), this.leadingIcon && this.leadingIcon.setDisabled(this.disabled), this.disabled ? this.adapter.removeSelectAnchorAttr("tabindex") : this.adapter.setSelectAnchorAttr("tabindex", "0"), this.adapter.setSelectAnchorAttr("aria-disabled", this.disabled.toString());
    }, e.prototype.openMenu = function() {
      this.adapter.addClass(_t.ACTIVATED), this.adapter.openMenu(), this.isMenuOpen = !0, this.adapter.setSelectAnchorAttr("aria-expanded", "true");
    }, e.prototype.setHelperTextContent = function(n) {
      this.helperText && this.helperText.setContent(n);
    }, e.prototype.layout = function() {
      if (this.adapter.hasLabel()) {
        var n = this.getValue().length > 0, r = this.adapter.hasClass(_t.FOCUSED), i = n || r, a = this.adapter.hasClass(_t.REQUIRED);
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
      this.adapter.removeClass(_t.ACTIVATED), this.isMenuOpen = !1, this.adapter.isSelectAnchorFocused() || this.blur();
    }, e.prototype.handleChange = function() {
      this.layout(), this.adapter.notifyChange(this.getValue());
      var n = this.adapter.hasClass(_t.REQUIRED);
      n && this.useDefaultValidation && this.setValid(this.isValid());
    }, e.prototype.handleMenuItemAction = function(n) {
      this.setSelectedIndex(
        n,
        /** closeMenu */
        !0
      );
    }, e.prototype.handleFocus = function() {
      this.adapter.addClass(_t.FOCUSED), this.layout(), this.adapter.activateBottomLine();
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
      if (!(this.isMenuOpen || !this.adapter.hasClass(_t.FOCUSED))) {
        var r = Lt(n) === Ve.ENTER, i = Lt(n) === Ve.SPACEBAR, a = Lt(n) === Ve.ARROW_UP, o = Lt(n) === Ve.ARROW_DOWN, c = n.ctrlKey || n.metaKey;
        if (!c && (!i && n.key && n.key.length === 1 || i && this.adapter.isTypeaheadInProgress())) {
          var l = i ? " " : n.key, u = this.adapter.typeaheadMatchItem(l, this.getSelectedIndex());
          u >= 0 && this.setSelectedIndex(u), n.preventDefault();
          return;
        }
        !r && !i && !a && !o || (this.openMenu(), n.preventDefault());
      }
    }, e.prototype.notchOutline = function(n) {
      if (this.adapter.hasOutline()) {
        var r = this.adapter.hasClass(_t.FOCUSED);
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
      this.useDefaultValidation || (this.customValidity = n), this.adapter.setSelectAnchorAttr("aria-invalid", (!n).toString()), n ? (this.adapter.removeClass(_t.INVALID), this.adapter.removeMenuClass(_t.MENU_INVALID)) : (this.adapter.addClass(_t.INVALID), this.adapter.addMenuClass(_t.MENU_INVALID)), this.syncHelperTextValidity(n);
    }, e.prototype.isValid = function() {
      return this.useDefaultValidation && this.adapter.hasClass(_t.REQUIRED) && !this.adapter.hasClass(_t.DISABLED) ? this.getSelectedIndex() !== Kr.UNSET_INDEX && (this.getSelectedIndex() !== 0 || !!this.getValue()) : this.customValidity;
    }, e.prototype.setRequired = function(n) {
      n ? this.adapter.addClass(_t.REQUIRED) : this.adapter.removeClass(_t.REQUIRED), this.adapter.setSelectAnchorAttr("aria-required", n.toString()), this.adapter.setLabelRequired(n);
    }, e.prototype.getRequired = function() {
      return this.adapter.getSelectAnchorAttr("aria-required") === "true";
    }, e.prototype.init = function() {
      var n = this.adapter.getAnchorElement();
      n && (this.adapter.setMenuAnchorElement(n), this.adapter.setMenuAnchorCorner(ai.BOTTOM_START)), this.adapter.setMenuWrapFocus(!1), this.setDisabled(this.adapter.hasClass(_t.DISABLED)), this.syncHelperTextValidity(!this.adapter.hasClass(_t.INVALID)), this.layout(), this.layoutOptions();
    }, e.prototype.blur = function() {
      this.adapter.removeClass(_t.FOCUSED), this.layout(), this.adapter.deactivateBottomLine();
      var n = this.adapter.hasClass(_t.REQUIRED);
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
}, lr = {
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
var ap = (
  /** @class */
  function(t) {
    qe(e, t);
    function e(n) {
      return t.call(this, ge(ge({}, e.defaultAdapter), n)) || this;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return lr;
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
      n ? this.adapter.addClass(lr.HELPER_TEXT_VALIDATION_MSG) : this.adapter.removeClass(lr.HELPER_TEXT_VALIDATION_MSG);
    }, e.prototype.setValidationMsgPersistent = function(n) {
      n ? this.adapter.addClass(lr.HELPER_TEXT_VALIDATION_MSG_PERSISTENT) : this.adapter.removeClass(lr.HELPER_TEXT_VALIDATION_MSG_PERSISTENT);
    }, e.prototype.getIsValidation = function() {
      return this.adapter.hasClass(lr.HELPER_TEXT_VALIDATION_MSG);
    }, e.prototype.getIsValidationMsgPersistent = function() {
      return this.adapter.hasClass(lr.HELPER_TEXT_VALIDATION_MSG_PERSISTENT);
    }, e.prototype.setValidity = function(n) {
      var r = this.adapter.hasClass(lr.HELPER_TEXT_VALIDATION_MSG);
      if (r) {
        var i = this.adapter.hasClass(lr.HELPER_TEXT_VALIDATION_MSG_PERSISTENT), a = !n || i;
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
), op = /* @__PURE__ */ fe("<div><!></div>");
function sp(t, e) {
  xe(e, !0);
  let n = g(e, "use", 19, () => []), r = g(e, "class", 3, ""), i = g(e, "style", 3, ""), a = g(e, "static", 3, !1), o = g(e, "anchor", 3, !0), c = g(e, "fixed", 3, !1), l = g(e, "open", 31, () => ye(a())), u = g(e, "managed", 3, !1), d = g(e, "fullWidth", 3, !1), v = g(e, "quickOpen", 3, !1), f = g(e, "anchorElement", 15), m = g(e, "anchorMargin", 19, () => ({ top: 0, right: 0, bottom: 0, left: 0 })), h = g(e, "maxHeight", 3, 0), p = g(e, "horizontallyCenteredOnViewport", 3, !1), _ = g(e, "openBottomBias", 3, 0), y = g(e, "neverRestoreFocus", 3, !1), T = /* @__PURE__ */ Ge(e, [
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
  ]), I, b = /* @__PURE__ */ _e(void 0), S = ye({}), E = ye({}), x = /* @__PURE__ */ _e(void 0);
  ue("SMUI:list:role", "menu"), ue("SMUI:list:item:role", "menuitem"), Te(() => {
    var U, J;
    I && o() && !((U = I.parentElement) != null && U.classList.contains("mdc-menu-surface--anchor")) && ((J = I.parentElement) == null || J.classList.add("mdc-menu-surface--anchor"), f(I.parentElement ?? void 0));
  }), Te(() => {
    s(b) && s(b).isOpen() !== l() && (l() ? s(b).open() : s(b).close());
  }), Te(() => {
    s(b) && s(b).setQuickOpen(v());
  }), Te(() => {
    s(b) && s(b).setFixedPosition(c());
  }), Te(() => {
    s(b) && s(b).setMaxHeight(h());
  }), Te(() => {
    s(b) && s(b).setIsHorizontallyCenteredOnViewport(p());
  });
  const A = ai;
  Te(() => {
    s(b) && e.anchorCorner != null && (typeof e.anchorCorner == "string" ? s(b).setAnchorCorner(A[e.anchorCorner]) : s(b).setAnchorCorner(e.anchorCorner));
  }), Te(() => {
    s(b) && s(b).setAnchorMargin(m());
  }), Te(() => {
    s(b) && s(b).setOpenBottomBias(_());
  });
  const C = be("SMUI:menu-surface:mount"), P = be("SMUI:menu-surface:unmount");
  at(() => {
    Q(
      b,
      new ad({
        addClass: F,
        removeClass: W,
        hasClass: z,
        hasAnchor: () => !!f(),
        notifyClose: () => {
          u() || l(a()), l() || Ke(O(), "SMUIMenuSurfaceClosed");
        },
        notifyClosing: () => {
          u() || l(a()), l() || Ke(O(), "SMUIMenuSurfaceClosing");
        },
        notifyOpen: () => {
          u() || l(!0), l() && Ke(O(), "SMUIMenuSurfaceOpened");
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
          Q(x, document.activeElement ?? void 0, !0);
        },
        restoreFocus: () => {
          !y() && (!I || O().contains(document.activeElement)) && s(x) && document.contains(s(x)) && "focus" in s(x) && s(x).focus();
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
    const U = {
      get open() {
        return l();
      },
      set open(J) {
        l(J);
      },
      closeProgrammatic: R
    };
    return C && C(U), s(b).init(), () => {
      var $, ce;
      P && P(U);
      const J = s(b).isHoistedElement;
      ($ = s(b)) == null || $.destroy(), J && ((ce = O().parentNode) == null || ce.removeChild(O()));
    };
  }), yn(() => {
    var U;
    o() && O() && ((U = O().parentElement) == null || U.classList.remove("mdc-menu-surface--anchor"));
  });
  function z(U) {
    return U in S ? S[U] : O().classList.contains(U);
  }
  function F(U) {
    S[U] || (S[U] = !0);
  }
  function W(U) {
    (!(U in S) || S[U]) && (S[U] = !1);
  }
  function R(U) {
    var J;
    (J = s(b)) == null || J.close(U), l(!1);
  }
  function L(U) {
    s(b) && l() && !u() && s(b).handleBodyClick(U);
  }
  function q() {
    return l();
  }
  function k(U) {
    l(U);
  }
  function K(U, J) {
    if (s(b) == null)
      throw new Error("Instance is not defined.");
    return s(b).setAbsolutePosition(U, J);
  }
  function ne(U) {
    if (s(b) == null)
      throw new Error("Instance is not defined.");
    return s(b).setIsHoisted(U);
  }
  function N() {
    if (s(b) == null)
      throw new Error("Instance is not defined.");
    return s(b).isFixed();
  }
  function D() {
    if (s(b) == null)
      throw new Error("Instance is not defined.");
    return s(b).flipCornerHorizontally();
  }
  function O() {
    return I;
  }
  var le = {
    isOpen: q,
    setOpen: k,
    setAbsolutePosition: K,
    setIsHoisted: ne,
    isFixed: N,
    flipCornerHorizontally: D,
    getElement: O
  }, re = op();
  mr("click", Ws.body, L, !0);
  var M = (U) => {
    var J;
    s(b) && !u() && s(b).handleKeydown(U), (J = e.onkeydown) == null || J.call(e, U);
  };
  He(
    re,
    (U, J) => ({
      class: U,
      style: J,
      role: "dialog",
      ...T,
      onkeydown: M
    }),
    [
      () => Me({
        "mdc-menu-surface": !0,
        "mdc-menu-surface--fixed": c(),
        "mdc-menu-surface--open": a(),
        "smui-menu-surface--static": a(),
        "mdc-menu-surface--fullwidth": d(),
        ...S,
        [r()]: !0
      }),
      () => Object.entries(E).map(([U, J]) => `${U}: ${J};`).concat([i()]).join(" ")
    ]
  );
  var V = de(re);
  return Se(V, () => e.children ?? he), Ae(re, (U) => I = U, () => I), Pe(re, (U, J) => X == null ? void 0 : X(U, J), n), w(t, re), we(le);
}
function ns(t, { addClass: e = (r) => t.classList.add(r), removeClass: n = (r) => t.classList.remove(r) } = {}) {
  return e("mdc-menu-surface--anchor"), {
    destroy() {
      n("mdc-menu-surface--anchor");
    }
  };
}
function lp(t, e) {
  xe(e, !0);
  const { closest: n } = ra;
  let r = g(e, "use", 19, () => []), i = g(e, "class", 3, ""), a = g(e, "open", 15, !1), o = g(e, "anchorElement", 15), c = g(e, "managed", 3, !1), l = /* @__PURE__ */ Ge(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "open",
    "anchorElement",
    "managed",
    "children"
  ]), u, d = /* @__PURE__ */ _e(void 0), v = /* @__PURE__ */ _e(void 0), f = /* @__PURE__ */ _e(void 0);
  ue("SMUI:menu-surface:mount", (A) => {
    s(v) || Q(v, A, !0);
  });
  const m = be("SMUI:list:mount");
  ue("SMUI:list:mount", (A) => {
    s(f) || Q(f, A, !0), m && m(A);
  });
  const h = be("SMUI:menu:mount"), p = be("SMUI:menu:unmount");
  at(() => (Q(
    d,
    new rp({
      addClassToElementAtIndex: (A, C) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        s(f).addClassForElementIndex(A, C);
      },
      removeClassFromElementAtIndex: (A, C) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        s(f).removeClassForElementIndex(A, C);
      },
      addAttributeToElementAtIndex: (A, C, P) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        s(f).setAttributeForElementIndex(A, C, P);
      },
      removeAttributeFromElementAtIndex: (A, C) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        s(f).removeAttributeForElementIndex(A, C);
      },
      getAttributeFromElementAtIndex: (A, C) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        return s(f).getAttributeFromElementIndex(A, C);
      },
      elementContainsClass: (A, C) => A.classList.contains(C),
      closeSurface: (A) => {
        var C;
        c() || ((C = s(v)) == null || C.closeProgrammatic(A), Ke(E(), "SMUIMenuClosedProgrammatically"));
      },
      getElementIndex: (A) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        return s(f).getOrderedList().map((C) => C.element).indexOf(A);
      },
      notifySelected: (A) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        Ke(E(), "SMUIMenuSelected", {
          index: A.index,
          item: s(f).getOrderedList()[A.index].element
        });
      },
      getMenuItemCount: () => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        return s(f).items.length;
      },
      focusItemAtIndex: (A) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        s(f).focusItemAtIndex(A);
      },
      focusListRoot: () => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        "focus" in s(f).element && s(f).element.focus();
      },
      isSelectableItemAtIndex: (A) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        return !!n(s(f).getOrderedList()[A].element, `.${Ni.MENU_SELECTION_GROUP}`);
      },
      getSelectedSiblingOfItemAtIndex: (A) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        const C = s(f).getOrderedList(), P = n(C[A].element, `.${Ni.MENU_SELECTION_GROUP}`), z = P == null ? void 0 : P.querySelector(`.${Ni.MENU_SELECTED_LIST_ITEM}`);
        return z ? C.map((F) => F.element).indexOf(z) : -1;
      }
    }),
    !0
  ), h && h(s(d)), s(d).init(), () => {
    var A;
    p && s(d) && p(s(d)), (A = s(d)) == null || A.destroy();
  }));
  function _(A) {
    s(d) && s(d).handleKeydown(A);
  }
  function y() {
    return a();
  }
  function T(A) {
    a(A);
  }
  function I(A) {
    if (s(d) == null)
      throw new Error("Instance is undefined.");
    s(d).setDefaultFocusState(A);
  }
  function b() {
    if (s(d) == null)
      throw new Error("Instance is undefined.");
    return s(d).getSelectedIndex();
  }
  function S() {
    return u;
  }
  function E() {
    return u.getElement();
  }
  var x = {
    isOpen: y,
    setOpen: T,
    setDefaultFocusState: I,
    getSelectedIndex: b,
    getMenuSurface: S,
    getElement: E
  };
  {
    let A = /* @__PURE__ */ pe(() => Me({ "mdc-menu": !0, [i()]: !0 }));
    Ae(
      sp(t, Je(
        {
          get use() {
            return r();
          },
          get class() {
            return s(A);
          },
          get managed() {
            return c();
          }
        },
        () => l,
        {
          onkeydown: (C) => {
            var P;
            _(C), (P = e.onkeydown) == null || P.call(e, C);
          },
          onSMUIMenuSurfaceOpened: (C) => {
            var P;
            s(d) && s(d).handleMenuSurfaceOpened(), (P = e.onSMUIMenuSurfaceOpened) == null || P.call(e, C);
          },
          onSMUIListAction: (C) => {
            var P;
            s(d) && s(f) && s(d).handleItemAction(s(f).getOrderedList()[C.detail.index].element), (P = e.onSMUIListAction) == null || P.call(e, C);
          },
          get open() {
            return a();
          },
          set open(C) {
            a(C);
          },
          get anchorElement() {
            return o();
          },
          set anchorElement(C) {
            o(C);
          },
          children: (C, P) => {
            var z = te(), F = Z(z);
            Se(F, () => e.children ?? he), w(C, z);
          },
          $$slots: { default: !0 }
        }
      )),
      (C) => u = C,
      () => u
    );
  }
  return we(x);
}
function up(t, e) {
  xe(e, !0);
  const { closest: n, matches: r } = ra;
  let i = be("SMUI:list:nav"), a = g(e, "use", 19, () => []), o = g(e, "class", 3, ""), c = g(e, "nonInteractive", 3, !1), l = g(e, "dense", 3, !1), u = g(e, "textualList", 3, !1), d = g(e, "avatarList", 3, !1), v = g(e, "iconList", 3, !1), f = g(e, "imageList", 3, !1), m = g(e, "thumbnailList", 3, !1), h = g(e, "videoList", 3, !1), p = g(e, "twoLine", 3, !1), _ = g(e, "threeLine", 3, !1), y = g(e, "vertical", 3, !0), T = g(e, "wrapFocus", 19, () => be("SMUI:list:wrapFocus") ?? !1), I = g(e, "singleSelection", 3, !1), b = g(e, "disabledItemsFocusable", 3, !1), S = g(e, "selectedIndex", 31, () => -1), E = g(e, "radioList", 3, !1), x = g(e, "checkList", 3, !1), A = g(e, "hasTypeahead", 3, !1), C = g(e, "component", 3, Br), P = g(e, "tag", 3, i ? "nav" : "ul"), z = /* @__PURE__ */ Ge(e, [
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
  ]), F, W = /* @__PURE__ */ _e(void 0), R = [], L = be("SMUI:list:role");
  const q = /* @__PURE__ */ new WeakMap();
  let k = be("SMUI:dialog:selection"), K = be("SMUI:addLayoutListener"), ne;
  ue("SMUI:list:nonInteractive", c()), ue("SMUI:separator:context", "list"), L || (I() ? (L = "listbox", ue("SMUI:list:item:role", "option")) : E() ? (L = "radiogroup", ue("SMUI:list:item:role", "radio")) : x() ? (L = "group", ue("SMUI:list:item:role", "checkbox")) : (L = "list", ue("SMUI:list:item:role", void 0))), Te(() => {
    s(W) && s(W).setVerticalOrientation(y());
  }), Te(() => {
    s(W) && s(W).setWrapFocus(T());
  }), Te(() => {
    s(W) && s(W).setHasTypeahead(A());
  }), Te(() => {
    s(W) && s(W).setSingleSelection(I());
  }), Te(() => {
    s(W) && s(W).setDisabledItemsFocusable(b());
  }), Te(() => {
    s(W) && I() && B() !== S() && s(W).setSelectedIndex(S());
  }), K && (ne = K(ke)), ue("SMUI:list:item:mount", (me) => {
    R.push(me), q.set(me.element, me), I() && me.selected && S(Oe(me.element));
  }), ue("SMUI:list:item:unmount", (me) => {
    const j = (me && R.findIndex((G) => G === me)) ?? -1;
    j !== -1 && (R.splice(j, 1), q.delete(me.element));
  });
  const N = be("SMUI:list:mount"), D = be("SMUI:list:unmount");
  at(() => {
    Q(
      W,
      new $g({
        addClassForElementIndex: $,
        focusItemAtIndex: ve,
        getAttributeForElementIndex: (j, G) => {
          var ie;
          return ((ie = U()[j]) == null ? void 0 : ie.getAttr(G)) ?? null;
        },
        getFocusedElementIndex: () => document.activeElement ? U().map((j) => j.element).indexOf(document.activeElement) : -1,
        getListItemCount: () => R.length,
        getPrimaryTextAtIndex: Re,
        hasCheckboxAtIndex: (j) => {
          var G;
          return ((G = U()[j]) == null ? void 0 : G.hasCheckbox) ?? !1;
        },
        hasRadioAtIndex: (j) => {
          var G;
          return ((G = U()[j]) == null ? void 0 : G.hasRadio) ?? !1;
        },
        isCheckboxCheckedAtIndex: (j) => {
          const G = U()[j];
          return ((G == null ? void 0 : G.hasCheckbox) && G.checked) ?? !1;
        },
        isFocusInsideList: () => F != null && De() !== document.activeElement && De().contains(document.activeElement),
        isRootFocused: () => F != null && document.activeElement === De(),
        listItemAtIndexHasClass: J,
        notifyAction: (j) => {
          S(j), F != null && Ke(De(), "SMUIListAction", { index: j });
        },
        notifySelectionChange: (j) => {
          F != null && Ke(De(), "SMUIListSelectionChange", { changedIndices: j });
        },
        removeClassForElementIndex: ce,
        setAttributeForElementIndex: Ce,
        setCheckedCheckboxOrRadioAtIndex: (j, G) => {
          U()[j].checked = G;
        },
        setTabIndexForListItemChildren: (j, G) => {
          const ie = U()[j];
          Array.prototype.forEach.call(ie.element.querySelectorAll("button:not(:disabled), a"), (ft) => {
            ft.setAttribute("tabindex", G);
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
      typeaheadMatchItem(j, G) {
        if (!s(W))
          throw new Error("Instance is undefined.");
        return s(W).typeaheadMatchItem(
          j,
          G,
          /** skipFocus */
          !0
        );
      },
      getOrderedList: U,
      focusItemAtIndex: ve,
      addClassForElementIndex: $,
      removeClassForElementIndex: ce,
      setAttributeForElementIndex: Ce,
      removeAttributeForElementIndex: ee,
      getAttributeFromElementIndex: ae,
      getPrimaryTextAtIndex: Re
    };
    return N && N(me), s(W).init(), s(W).layout(), () => {
      var j;
      D && D(me), (j = s(W)) == null || j.destroy();
    };
  }), yn(() => {
    ne && ne();
  });
  function O(me) {
    s(W) && me.target && s(W).handleKeydown(me, me.target.classList.contains("mdc-deprecated-list-item"), Oe(me.target));
  }
  function le(me) {
    s(W) && me.target && s(W).handleFocusIn(Oe(me.target));
  }
  function re(me) {
    s(W) && me.target && s(W).handleFocusOut(Oe(me.target));
  }
  function M(me) {
    s(W) && me.target && s(W).handleClick(Oe(me.target), !r(me.target, 'input[type="checkbox"], input[type="radio"]'), me);
  }
  function V(me) {
    if (E() || x()) {
      const j = Oe(me.target);
      if (j !== -1) {
        const G = U()[j];
        G && (E() && !G.checked || x()) && (r(me.detail.target, 'input[type="checkbox"], input[type="radio"]') || (G.checked = !G.checked), G.activateRipple(), window.requestAnimationFrame(() => {
          G.deactivateRipple();
        }));
      }
    }
  }
  function U() {
    return F == null ? [] : [...De().children].map((me) => q.get(me)).filter((me) => me && me._smui_list_item_accessor);
  }
  function J(me, j) {
    const G = U()[me];
    return (G && G.hasClass(j)) ?? !1;
  }
  function $(me, j) {
    const G = U()[me];
    G && G.addClass(j);
  }
  function ce(me, j) {
    const G = U()[me];
    G && G.removeClass(j);
  }
  function Ce(me, j, G) {
    const ie = U()[me];
    ie && ie.addAttr(j, G);
  }
  function ee(me, j) {
    const G = U()[me];
    G && G.removeAttr(j);
  }
  function ae(me, j) {
    const G = U()[me];
    return G ? G.getAttr(j) : null;
  }
  function Re(me) {
    const j = U()[me];
    return (j && j.getPrimaryText()) ?? "";
  }
  function Oe(me) {
    const j = n(me, ".mdc-deprecated-list-item, .mdc-deprecated-list");
    return j && r(j, ".mdc-deprecated-list-item") ? U().map((G) => G == null ? void 0 : G.element).indexOf(j) : -1;
  }
  function ke() {
    if (!s(W))
      throw new Error("Instance is undefined.");
    return s(W).layout();
  }
  function ze(me, j) {
    if (!s(W))
      throw new Error("Instance is undefined.");
    return s(W).setEnabled(me, j);
  }
  function Fe() {
    if (!s(W))
      throw new Error("Instance is undefined.");
    return s(W).isTypeaheadInProgress();
  }
  function B() {
    if (!s(W))
      throw new Error("Instance is undefined.");
    return s(W).getSelectedIndex();
  }
  function Y() {
    if (!s(W))
      throw new Error("Instance is undefined.");
    return s(W).getFocusedItemIndex();
  }
  function ve(me) {
    const j = U()[me];
    j && "focus" in j.element && j.element.focus();
  }
  function De() {
    return F.getElement();
  }
  var Be = {
    layout: ke,
    setEnabled: ze,
    getTypeaheadInProgress: Fe,
    getSelectedIndex: B,
    getFocusedItemIndex: Y,
    focusItemAtIndex: ve,
    getElement: De
  }, ut = te(), vt = Z(ut);
  {
    let me = /* @__PURE__ */ pe(() => Me({
      "mdc-deprecated-list": !0,
      "mdc-deprecated-list--non-interactive": c(),
      "mdc-deprecated-list--dense": l(),
      "mdc-deprecated-list--textual-list": u(),
      "mdc-deprecated-list--avatar-list": d() || k,
      "mdc-deprecated-list--icon-list": v(),
      "mdc-deprecated-list--image-list": f(),
      "mdc-deprecated-list--thumbnail-list": m(),
      "mdc-deprecated-list--video-list": h(),
      "mdc-deprecated-list--two-line": p(),
      "smui-list--three-line": _() && !p(),
      [o()]: !0
    }));
    nr(vt, C, (j, G) => {
      Ae(
        G(j, Je(
          {
            get tag() {
              return P();
            },
            get use() {
              return a();
            },
            get class() {
              return s(me);
            },
            get role() {
              return L;
            }
          },
          () => z,
          {
            onkeydown: (ie) => {
              var Ne;
              O(ie), (Ne = e.onkeydown) == null || Ne.call(e, ie);
            },
            onfocusin: (ie) => {
              var Ne;
              le(ie), (Ne = e.onfocusin) == null || Ne.call(e, ie);
            },
            onfocusout: (ie) => {
              var Ne;
              re(ie), (Ne = e.onfocusout) == null || Ne.call(e, ie);
            },
            onclick: (ie) => {
              var Ne;
              M(ie), (Ne = e.onclick) == null || Ne.call(e, ie);
            },
            onSMUIAction: (ie) => {
              var Ne;
              V(ie), (Ne = e.onSMUIAction) == null || Ne.call(e, ie);
            },
            children: (ie, Ne) => {
              var ft = te(), It = Z(ft);
              Se(It, () => e.children ?? he), w(ie, ft);
            },
            $$slots: { default: !0 }
          }
        )),
        (ie) => F = ie,
        () => F
      );
    });
  }
  return w(t, ut), we(Be);
}
let cp = 0;
var dp = /* @__PURE__ */ fe('<span class="mdc-deprecated-list-item__ripple"></span>'), fp = /* @__PURE__ */ fe("<!><!>", 1);
function hp(t, e) {
  xe(e, !0);
  let n = () => {
  };
  function r($) {
    return $ === n;
  }
  let i = be("SMUI:list:item:nav"), a = g(e, "use", 19, () => []), o = g(e, "class", 3, ""), c = g(e, "style", 3, ""), l = g(e, "nonInteractive", 19, () => be("SMUI:list:nonInteractive") ?? !1), u = g(e, "ripple", 19, () => !l()), d = g(e, "wrapper", 3, !1), v = g(e, "activated", 15, !1), f = g(e, "role", 19, () => d() ? "presentation" : be("SMUI:list:item:role")), m = g(e, "selected", 15, !1), h = g(e, "disabled", 3, !1), p = g(e, "skipRestoreFocus", 3, !1), _ = g(e, "tabindex", 15, n), y = g(e, "inputId", 19, () => "SMUI-form-field-list-" + cp++), T = g(e, "component", 3, Br), I = g(e, "tag", 19, () => i ? e.href ? "a" : "span" : "li"), b = /* @__PURE__ */ Ge(e, [
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
  let S, E = ye({}), x = ye({}), A = ye({}), C = /* @__PURE__ */ _e(void 0), P = /* @__PURE__ */ _e(void 0);
  const z = /* @__PURE__ */ pe(() => r(_()) ? !l() && !h() && (m() || s(C) && s(C).checked) ? 0 : -1 : _());
  ue("SMUI:generic:input:props", { id: y() }), ue("SMUI:separator:context", void 0), ue("SMUI:generic:input:mount", ($) => {
    ("_smui_checkbox_accessor" in $ || "_smui_radio_accessor" in $) && Q(C, $, !0);
  }), ue("SMUI:generic:input:unmount", () => {
    Q(C, void 0);
  });
  const F = be("SMUI:list:item:mount"), W = be("SMUI:list:item:unmount");
  at(() => {
    if (!m() && !l()) {
      let ce = !0, Ce = S.getElement();
      for (; Ce.previousElementSibling; )
        if (Ce = Ce.previousElementSibling, Ce.nodeType === 1 && Ce.classList.contains("mdc-deprecated-list-item") && !Ce.classList.contains("mdc-deprecated-list-item--disabled")) {
          ce = !1;
          break;
        }
      ce && Q(P, window.requestAnimationFrame(() => D(Ce)), !0);
    }
    const $ = {
      _smui_list_item_accessor: !0,
      get element() {
        return M();
      },
      get selected() {
        return m();
      },
      set selected(ce) {
        m(ce);
      },
      hasClass: R,
      addClass: L,
      removeClass: q,
      getAttr: K,
      addAttr: ne,
      removeAttr: N,
      getPrimaryText: re,
      // For inputs within item.
      get checked() {
        return (s(C) && s(C).checked) ?? !1;
      },
      set checked(ce) {
        s(C) && (s(C).checked = !!ce);
      },
      get hasCheckbox() {
        return !!(s(C) && "_smui_checkbox_accessor" in s(C));
      },
      get hasRadio() {
        return !!(s(C) && "_smui_radio_accessor" in s(C));
      },
      activateRipple() {
        s(C) && s(C).activateRipple();
      },
      deactivateRipple() {
        s(C) && s(C).deactivateRipple();
      },
      // For select options.
      getValue() {
        return e.value;
      },
      // For autocomplete
      action: le,
      get tabindex() {
        return s(z);
      },
      set tabindex(ce) {
        _(ce);
      },
      get disabled() {
        return h();
      },
      get activated() {
        return v();
      },
      set activated(ce) {
        v(ce);
      }
    };
    return F && F($), () => {
      W && W($);
    };
  }), yn(() => {
    s(P) && window.cancelAnimationFrame(s(P));
  });
  function R($) {
    return $ in E ? E[$] : M().classList.contains($);
  }
  function L($) {
    E[$] || (E[$] = !0);
  }
  function q($) {
    (!($ in E) || E[$]) && (E[$] = !1);
  }
  function k($, ce) {
    x[$] != ce && (ce === "" || ce == null ? delete x[$] : x[$] = ce);
  }
  function K($) {
    return $ in A ? A[$] ?? null : M().getAttribute($);
  }
  function ne($, ce) {
    A[$] !== ce && (A[$] = ce);
  }
  function N($) {
    (!($ in A) || A[$] != null) && (A[$] = void 0);
  }
  function D($) {
    let ce = !0;
    for (; $.nextElementSibling; )
      if ($ = $.nextElementSibling, $.nodeType === 1 && $.classList.contains("mdc-deprecated-list-item")) {
        const Ce = $.attributes.getNamedItem("tabindex");
        if (Ce && Ce.value === "0") {
          ce = !1;
          break;
        }
      }
    ce && _(0);
  }
  function O($) {
    const ce = $.key === "Enter", Ce = $.key === "Space";
    (ce || Ce) && le($);
  }
  function le($) {
    h() || Ke(M(), "SMUIAction", $);
  }
  function re() {
    const $ = M(), ce = $.querySelector(".mdc-deprecated-list-item__primary-text");
    if (ce)
      return ce.textContent ?? "";
    const Ce = $.querySelector(".mdc-deprecated-list-item__text");
    return Ce ? Ce.textContent ?? "" : $.textContent ?? "";
  }
  function M() {
    return S.getElement();
  }
  var V = { action: le, getPrimaryText: re, getElement: M }, U = te(), J = Z(U);
  {
    let $ = /* @__PURE__ */ pe(() => [
      ...l() ? [] : [
        [
          Yt,
          {
            ripple: !s(C),
            unbounded: !1,
            color: (v() || m()) && e.color == null ? "primary" : e.color,
            disabled: h(),
            addClass: L,
            removeClass: q,
            addStyle: k
          }
        ]
      ],
      ...a()
    ]), ce = /* @__PURE__ */ pe(() => Me({
      "mdc-deprecated-list-item": !d(),
      "mdc-deprecated-list-item__wrapper": d(),
      "mdc-deprecated-list-item--activated": v(),
      "mdc-deprecated-list-item--selected": m(),
      "mdc-deprecated-list-item--disabled": h(),
      "mdc-menu-item--selected": !i && f() === "menuitem" && m(),
      "smui-menu-item--non-interactive": l(),
      ...E,
      [o()]: !0
    })), Ce = /* @__PURE__ */ pe(() => Object.entries(x).map(([ae, Re]) => `${ae}: ${Re};`).concat([c()]).join(" ")), ee = /* @__PURE__ */ pe(() => p() || void 0);
    nr(J, T, (ae, Re) => {
      Ae(
        Re(ae, Je(
          {
            get tag() {
              return I();
            },
            get use() {
              return s($);
            },
            get class() {
              return s(ce);
            },
            get style() {
              return s(Ce);
            }
          },
          () => i && v() ? { "aria-current": "page" } : {},
          () => !i || d() ? { role: f() } : {},
          () => !i && f() === "option" ? { "aria-selected": m() ? "true" : "false" } : {},
          () => !i && (f() === "radio" || f() === "checkbox") ? {
            "aria-checked": s(C) && s(C).checked ? "true" : "false"
          } : {},
          () => i ? {} : { "aria-disabled": h() ? "true" : "false" },
          {
            get "data-menu-item-skip-restore-focus"() {
              return s(ee);
            },
            get tabindex() {
              return s(z);
            },
            get href() {
              return e.href;
            }
          },
          () => A,
          () => b,
          {
            onclick: (Oe) => {
              var ke;
              le(Oe), (ke = e.onclick) == null || ke.call(e, Oe);
            },
            onkeydown: (Oe) => {
              var ke;
              O(Oe), (ke = e.onkeydown) == null || ke.call(e, Oe);
            },
            children: (Oe, ke) => {
              var ze = fp(), Fe = Z(ze);
              {
                var B = (ve) => {
                  var De = dp();
                  w(ve, De);
                };
                oe(Fe, (ve) => {
                  u() && ve(B);
                });
              }
              var Y = Ie(Fe);
              Se(Y, () => e.children ?? he), w(Oe, ze);
            },
            $$slots: { default: !0 }
          }
        )),
        (Oe) => S = Oe,
        () => S
      );
    });
  }
  return w(t, U), we(V);
}
let vp = 0;
var mp = /* @__PURE__ */ fe("<div><!></div>");
function gp(t, e) {
  xe(e, !0);
  let n = g(e, "use", 19, () => []), r = g(e, "class", 3, ""), i = g(e, "id", 19, () => "SMUI-select-helper-text-" + vp++), a = g(e, "persistent", 3, !1), o = g(e, "validationMsg", 3, !1), c = /* @__PURE__ */ Ge(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "id",
    "persistent",
    "validationMsg",
    "children"
  ]), l, u = /* @__PURE__ */ _e(void 0), d = ye({}), v = ye({}), f = /* @__PURE__ */ _e(void 0);
  const m = be("SMUI:select:helper-text:id"), h = be("SMUI:select:helper-text:mount"), p = be("SMUI:select:helper-text:unmount");
  at(() => (Q(
    u,
    new ap({
      addClass: y,
      removeClass: T,
      hasClass: _,
      getAttr: I,
      setAttr: b,
      removeAttr: S,
      setContent: (F) => {
        Q(f, F, !0);
      }
    }),
    !0
  ), m && m(i()), h && h(s(u)), s(u).init(), () => {
    var F;
    p && s(u) && p(s(u)), (F = s(u)) == null || F.destroy();
  }));
  function _(F) {
    return F in d ? d[F] : E().classList.contains(F);
  }
  function y(F) {
    d[F] || (d[F] = !0);
  }
  function T(F) {
    (!(F in d) || d[F]) && (d[F] = !1);
  }
  function I(F) {
    return F in v ? v[F] ?? null : E().getAttribute(F);
  }
  function b(F, W) {
    v[F] !== W && (v[F] = W);
  }
  function S(F) {
    (!(F in v) || v[F] != null) && (v[F] = void 0);
  }
  function E() {
    return l;
  }
  var x = { getElement: E }, A = mp();
  He(
    A,
    (F) => ({
      class: F,
      "aria-hidden": a() ? void 0 : "true",
      id: i(),
      ...v,
      ...c
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
  var C = de(A);
  {
    var P = (F) => {
      var W = te(), R = Z(W);
      Se(R, () => e.children ?? he), w(F, W);
    }, z = (F) => {
      var W = yt();
      Le(() => $e(W, s(f))), w(F, W);
    };
    oe(C, (F) => {
      s(f) == null ? F(P) : F(z, !1);
    });
  }
  return Ae(A, (F) => l = F, () => l), Pe(A, (F, W) => X == null ? void 0 : X(F, W), n), w(t, A), we(x);
}
let pp = 0;
var bp = /* @__PURE__ */ fe("<input/>"), _p = /* @__PURE__ */ fe('<span class="mdc-select__ripple"></span>'), yp = /* @__PURE__ */ fe('<div><!> <div><!> <!> <!> <!> <span><span> </span></span> <span><svg class="mdc-select__dropdown-icon-graphic" viewBox="7 10 10 5" focusable="false"><polygon class="mdc-select__dropdown-icon-inactive" stroke="none" fill-rule="evenodd" points="7 10 12 15 17 10"></polygon><polygon class="mdc-select__dropdown-icon-active" stroke="none" fill-rule="evenodd" points="7 15 12 10 17 15"></polygon></svg></span> <!></div> <!></div> <!>', 1);
function Ip(t, e) {
  xe(e, !0);
  const n = () => kn(De, "$selectedTextStore", r), [r, i] = rr();
  let a = () => {
  };
  function o(H) {
    return H === a;
  }
  let c = g(e, "use", 19, () => []), l = g(e, "class", 3, ""), u = g(e, "style", 3, ""), d = g(e, "ripple", 3, !0), v = g(e, "disabled", 3, !1), f = g(e, "variant", 3, "standard"), m = g(e, "noLabel", 3, !1), h = g(e, "label", 3, void 0), p = g(e, "value", 15), _ = g(e, "key", 3, (H) => H), y = g(e, "dirty", 15, !1), T = g(e, "invalid", 15, a), I = g(e, "updateInvalid", 19, () => o(T())), b = g(e, "required", 3, !1), S = g(e, "inputId", 19, () => "SMUI-select-" + pp++), E = g(e, "hiddenInput", 3, !1), x = g(e, "withLeadingIcon", 3, a), A = g(e, "anchor$use", 19, () => []), C = g(e, "anchor$class", 3, ""), P = g(e, "selectedTextContainer$use", 19, () => []), z = g(e, "selectedTextContainer$class", 3, ""), F = g(e, "selectedText$use", 19, () => []), W = g(e, "selectedText$class", 3, ""), R = g(e, "dropdownIcon$use", 19, () => []), L = g(e, "dropdownIcon$class", 3, ""), q = g(e, "menu$class", 3, ""), k = /* @__PURE__ */ Ge(e, [
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
  const K = o(T());
  o(T()) && T(!1);
  let ne, N = /* @__PURE__ */ _e(void 0), D = ye({}), O = ye({}), le, re = ye({}), M = /* @__PURE__ */ _e(-1);
  const V = /* @__PURE__ */ pe(() => k.menu$id ?? S() + "-menu");
  let U = /* @__PURE__ */ _e(void 0), J = be("SMUI:addLayoutListener"), $, ce = /* @__PURE__ */ _e(!1), Ce = ye({}), ee = /* @__PURE__ */ _e(void 0), ae = /* @__PURE__ */ _e(void 0), Re = /* @__PURE__ */ _e(!1), Oe, ke = be("SMUI:select:context"), ze, Fe, B, Y, ve;
  ue("SMUI:list:role", ""), ue("SMUI:list:nav", !1);
  const De = Bt("");
  ue("SMUI:select:selectedText", De);
  const Be = Bt(p());
  Te(() => {
    Nn(Be, p());
  }), ue("SMUI:select:value", Be), Te(() => {
    s(N) && s(N).getValue() !== _()(p()) && s(N).setValue(_()(p()));
  });
  let ut = s(M);
  Te(() => {
    if (ut !== s(M))
      if (ut = s(M), s(N))
        s(N).setSelectedIndex(
          s(M),
          /* closeMenu */
          !1,
          /* skipNotify */
          !0
        );
      else {
        const H = Vt();
        p() !== H[s(M)] && p(H[s(M)]);
      }
  }), Te(() => {
    s(N) && s(N).getDisabled() !== v() && s(N).setDisabled(v());
  }), Te(() => {
    s(N) && y() && s(N).isValid() !== !T() && (I() ? T(!s(N).isValid()) : s(N).setValid(!T()));
  }), Te(() => {
    s(N) && s(N).getRequired() !== b() && s(N).setRequired(b());
  }), J && ($ = J(_i)), ue("SMUI:select:leading-icon:mount", (H) => {
    ze = H;
  }), ue("SMUI:select:leading-icon:unmount", () => {
    ze = void 0;
  }), ue("SMUI:list:mount", (H) => {
    Oe = H;
  }), ue("SMUI:select:helper-text:id", (H) => {
    Q(U, H, !0);
  }), ue("SMUI:select:helper-text:mount", (H) => {
    Fe = H;
  }), ue("SMUI:select:helper-text:unmount", () => {
    Q(U, void 0), Fe = void 0;
  }), at(() => (Q(
    N,
    new ip(
      {
        // getSelectAdapterMethods
        // getMenuItemAttr: (menuItem: Element, attr: string) =>
        //   menuItem.getAttribute(attr),
        setSelectedText: (H) => {
          Nn(De, H);
        },
        isSelectAnchorFocused: () => document.activeElement === le,
        getSelectAnchorAttr: ft,
        setSelectAnchorAttr: It,
        removeSelectAnchorAttr: bt,
        addMenuClass: ie,
        removeMenuClass: Ne,
        openMenu: () => {
          Q(ce, !0);
        },
        closeMenu: () => {
          Q(ce, !1);
        },
        getAnchorElement: () => le,
        setMenuAnchorElement: (H) => {
          Q(ee, H, !0);
        },
        setMenuAnchorCorner: (H) => {
          Q(ae, H, !0);
        },
        setMenuWrapFocus: (H) => {
          Q(Re, H, !0);
        },
        getSelectedIndex: () => s(M),
        setSelectedIndex: (H) => {
          ut = H, Q(M, H, !0), p(Vt()[s(M)]);
        },
        focusMenuItemAtIndex: (H) => {
          Oe.focusItemAtIndex(H);
        },
        getMenuItemCount: () => Oe.items.length,
        getMenuItemValues: () => Vt().map(_()),
        getMenuItemTextAtIndex: (H) => Oe.getPrimaryTextAtIndex(H),
        isTypeaheadInProgress: () => Oe.typeaheadInProgress,
        typeaheadMatchItem: (H, Ee) => Oe.typeaheadMatchItem(H, Ee),
        // getCommonAdapterMethods
        addClass: me,
        removeClass: j,
        hasClass: vt,
        setRippleCenter: (H) => Y && Y.setRippleCenter(H),
        activateBottomLine: () => Y && Y.activate(),
        deactivateBottomLine: () => Y && Y.deactivate(),
        notifyChange: (H) => {
          var Ee;
          y(!0), I() && T(!((Ee = s(N)) != null && Ee.isValid())), Ke(jn(), "SMUISelectChange", { value: p(), index: s(M) });
        },
        // getOutlineAdapterMethods
        hasOutline: () => !!ve,
        notchOutline: (H) => ve && ve.notch(H),
        closeOutline: () => ve && ve.closeNotch(),
        // getLabelAdapterMethods
        hasLabel: () => !!B,
        floatLabel: (H) => B && B.float(H),
        getLabelWidth: () => B ? B.getWidth() : 0,
        setLabelRequired: (H) => B && B.setRequired(H)
      },
      {
        get helperText() {
          return Fe;
        },
        get leadingIcon() {
          return ze;
        }
      }
    ),
    !0
  ), Q(M, Vt().indexOf(p()), !0), s(N).init(), St(K), () => {
    var H;
    (H = s(N)) == null || H.destroy();
  })), yn(() => {
    $ && $();
  });
  function vt(H) {
    return H in D ? D[H] : jn().classList.contains(H);
  }
  function me(H) {
    D[H] || (D[H] = !0);
  }
  function j(H) {
    (!(H in D) || D[H]) && (D[H] = !1);
  }
  function G(H, Ee) {
    O[H] != Ee && (Ee === "" || Ee == null ? delete O[H] : O[H] = Ee);
  }
  function ie(H) {
    Ce[H] || (Ce[H] = !0);
  }
  function Ne(H) {
    (!(H in Ce) || Ce[H]) && (Ce[H] = !1);
  }
  function ft(H) {
    return H in re ? re[H] ?? null : jn().getAttribute(H);
  }
  function It(H, Ee) {
    re[H] !== Ee && (re[H] = Ee);
  }
  function bt(H) {
    (!(H in re) || re[H] != null) && (re[H] = void 0);
  }
  function Vt() {
    return Oe.getOrderedList().map((H) => H.getValue());
  }
  function yr(H) {
    const Ee = H.currentTarget.getBoundingClientRect();
    return (mt(H) ? H.touches[0].clientX : H.clientX) - Ee.left;
  }
  function mt(H) {
    return "touches" in H;
  }
  function Ht() {
    if (s(N) == null)
      throw new Error("Instance is undefined.");
    return s(N).getUseDefaultValidation();
  }
  function St(H) {
    var Ee;
    (Ee = s(N)) == null || Ee.setUseDefaultValidation(H);
  }
  function On() {
    le.focus();
  }
  function _i() {
    var H;
    (H = s(N)) == null || H.layout();
  }
  function jn() {
    return ne;
  }
  var Xe = {
    getUseDefaultValidation: Ht,
    setUseDefaultValidation: St,
    focus: On,
    layout: _i,
    getElement: jn
  }, et = yp(), tt = Z(et);
  He(tt, (H, Ee, ht) => ({ class: H, style: Ee, ...ht }), [
    () => Me({
      "mdc-select": !0,
      "mdc-select--required": b(),
      "mdc-select--disabled": v(),
      "mdc-select--filled": f() === "filled",
      "mdc-select--outlined": f() === "outlined",
      "smui-select--standard": f() === "standard",
      "mdc-select--with-leading-icon": o(x()) ? e.leadingIcon : x(),
      "mdc-select--no-label": m() || h() == null,
      "mdc-select--invalid": T(),
      "mdc-select--activated": s(ce),
      "mdc-data-table__pagination-rows-per-page-select": ke === "data-table:pagination",
      ...D,
      [l()]: !0
    }),
    () => Object.entries(O).map(([H, Ee]) => `${H}: ${Ee};`).concat([u()]).join(" "),
    () => Bn(k, [
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
  var Nt = de(tt);
  {
    var vn = (H) => {
      var Ee = bp();
      He(
        Ee,
        (ht) => ({
          type: "hidden",
          required: b(),
          disabled: v(),
          value: p(),
          ...ht
        }),
        [() => it(k, "input$")],
        void 0,
        void 0,
        !0
      ), w(H, Ee);
    };
    oe(Nt, (H) => {
      E() && H(vn);
    });
  }
  var ot = Ie(Nt, 2), dt = (H) => {
    var Ee;
    le.focus(), s(N) && s(N).handleClick(yr(H)), (Ee = e.anchor$onclick) == null || Ee.call(e, H);
  }, wt = (H) => {
    var Ee;
    s(N) && s(N).handleKeydown(H), (Ee = e.onkeydown) == null || Ee.call(e, H);
  }, nt = (H) => {
    var Ee;
    s(N) && s(N).handleBlur(), Ke(jn(), "blur", H), (Ee = e.anchor$onblur) == null || Ee.call(e, H);
  }, Dt = (H) => {
    var Ee;
    s(N) && s(N).handleFocus(), Ke(jn(), "focus", H), (Ee = e.anchor$onfocus) == null || Ee.call(e, H);
  };
  He(
    ot,
    (H, Ee) => ({
      class: H,
      "aria-required": b() ? "true" : void 0,
      "aria-disabled": v() ? "true" : void 0,
      "aria-controls": s(V),
      "aria-expanded": s(ce) ? "true" : "false",
      "aria-describedby": s(U),
      role: "combobox",
      tabindex: "0",
      ...re,
      ...Ee,
      onclick: dt,
      onkeydown: wt,
      onblur: nt,
      onfocus: Dt
    }),
    [
      () => Me({ "mdc-select__anchor": !0, [C()]: !0 }),
      () => it(k, "anchor$")
    ]
  );
  var Rn = de(ot);
  {
    var Mt = (H) => {
      var Ee = _p();
      w(H, Ee);
    };
    oe(Rn, (H) => {
      f() === "filled" && H(Mt);
    });
  }
  var Et = Ie(Rn, 2);
  {
    var Ut = (H) => {
      {
        let Ee = /* @__PURE__ */ pe(() => S() + "-smui-label"), ht = /* @__PURE__ */ pe(() => n() !== ""), Pt = /* @__PURE__ */ pe(() => it(k, "label$"));
        Ae(
          yo(H, Je(
            {
              get id() {
                return s(Ee);
              },
              get floatAbove() {
                return s(ht);
              },
              get required() {
                return b();
              }
            },
            () => s(Pt),
            {
              children: (ir, ar) => {
                var aa = te(), yi = Z(aa);
                {
                  var jr = (Wr) => {
                  }, Bo = (Wr) => {
                    var Ba = te(), oa = Z(Ba);
                    {
                      var cl = (Ir) => {
                        var qr = yt();
                        Le(() => $e(qr, h())), w(Ir, qr);
                      }, Va = (Ir) => {
                        var qr = te(), Vo = Z(qr);
                        Se(Vo, h), w(Ir, qr);
                      };
                      oe(
                        oa,
                        (Ir) => {
                          typeof h() == "string" ? Ir(cl) : Ir(Va, !1);
                        },
                        !0
                      );
                    }
                    w(Wr, Ba);
                  };
                  oe(yi, (Wr) => {
                    h() == null ? Wr(jr) : Wr(Bo, !1);
                  });
                }
                w(ir, aa);
              },
              $$slots: { default: !0 }
            }
          )),
          (ir) => B = ir,
          () => B
        );
      }
    };
    oe(Et, (H) => {
      f() !== "outlined" && !m() && h() != null && H(Ut);
    });
  }
  var ln = Ie(Et, 2);
  {
    var Gt = (H) => {
      {
        let Ee = /* @__PURE__ */ pe(() => m() || h() == null), ht = /* @__PURE__ */ pe(() => it(k, "outline$"));
        Ae(
          nd(H, Je(
            {
              get noLabel() {
                return s(Ee);
              }
            },
            () => s(ht),
            {
              children: (Pt, ir) => {
                var ar = te(), aa = Z(ar);
                {
                  var yi = (jr) => {
                    {
                      let Bo = /* @__PURE__ */ pe(() => S() + "-smui-label"), Wr = /* @__PURE__ */ pe(() => n() !== ""), Ba = /* @__PURE__ */ pe(() => it(k, "label$"));
                      Ae(
                        yo(jr, Je(
                          {
                            get id() {
                              return s(Bo);
                            },
                            get floatAbove() {
                              return s(Wr);
                            },
                            get required() {
                              return b();
                            }
                          },
                          () => s(Ba),
                          {
                            children: (oa, cl) => {
                              var Va = te(), Ir = Z(Va);
                              {
                                var qr = (sa) => {
                                }, Vo = (sa) => {
                                  var dl = te(), Fd = Z(dl);
                                  {
                                    var kd = (Ii) => {
                                      var la = yt();
                                      Le(() => $e(la, h())), w(Ii, la);
                                    }, Bd = (Ii) => {
                                      var la = te(), Vd = Z(la);
                                      Se(Vd, h), w(Ii, la);
                                    };
                                    oe(
                                      Fd,
                                      (Ii) => {
                                        typeof h() == "string" ? Ii(kd) : Ii(Bd, !1);
                                      },
                                      !0
                                    );
                                  }
                                  w(sa, dl);
                                };
                                oe(Ir, (sa) => {
                                  h() == null ? sa(qr) : sa(Vo, !1);
                                });
                              }
                              w(oa, Va);
                            },
                            $$slots: { default: !0 }
                          }
                        )),
                        (oa) => B = oa,
                        () => B
                      );
                    }
                  };
                  oe(aa, (jr) => {
                    !m() && h() != null && jr(yi);
                  });
                }
                w(Pt, ar);
              },
              $$slots: { default: !0 }
            }
          )),
          (Pt) => ve = Pt,
          () => ve
        );
      }
    };
    oe(ln, (H) => {
      f() === "outlined" && H(Gt);
    });
  }
  var un = Ie(ln, 2);
  Se(un, () => e.leadingIcon ?? he);
  var Jt = Ie(un, 2);
  He(Jt, (H, Ee) => ({ class: H, ...Ee }), [
    () => Me({
      "mdc-select__selected-text-container": !0,
      [z()]: !0
    }),
    () => it(k, "selectedTextContainer$")
  ]);
  var Wn = de(Jt);
  He(
    Wn,
    (H, Ee) => ({
      id: S() + "-smui-selected-text",
      class: H,
      role: "button",
      "aria-haspopup": "listbox",
      "aria-labelledby": S() + "-smui-label",
      ...Ee
    }),
    [
      () => Me({
        "mdc-select__selected-text": !0,
        [W()]: !0
      }),
      () => it(k, "selectedText$")
    ]
  );
  var Vr = de(Wn);
  Pe(Wn, (H, Ee) => X == null ? void 0 : X(H, Ee), F), Pe(Jt, (H, Ee) => X == null ? void 0 : X(H, Ee), P);
  var cn = Ie(Jt, 2);
  He(cn, (H, Ee) => ({ class: H, ...Ee }), [
    () => Me({
      "mdc-select__dropdown-icon": !0,
      [L()]: !0
    }),
    () => it(k, "dropdownIcon$")
  ]), Pe(cn, (H, Ee) => X == null ? void 0 : X(H, Ee), R);
  var zt = Ie(cn, 2);
  {
    var qn = (H) => {
      {
        let Ee = /* @__PURE__ */ pe(() => it(k, "ripple$"));
        Ae(td(H, Je(() => s(Ee))), (ht) => Y = ht, () => Y);
      }
    };
    oe(zt, (H) => {
      f() !== "outlined" && d() && H(qn);
    });
  }
  Ae(ot, (H) => le = H, () => le), Pe(ot, (H, Ee) => X == null ? void 0 : X(H, Ee), A);
  var Gr = Ie(ot, 2);
  {
    let H = /* @__PURE__ */ pe(() => Me({
      "mdc-select__menu": !0,
      ...Ce,
      [q()]: !0
    })), Ee = /* @__PURE__ */ pe(() => it(k, "menu$"));
    lp(Gr, Je(
      {
        get class() {
          return s(H);
        },
        get id() {
          return s(V);
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
      () => s(Ee),
      {
        onSMUIMenuSelected: (ht) => {
          var Pt;
          s(N) && s(N).handleMenuItemAction(ht.detail.index), (Pt = e.onSMUIMenuSelected) == null || Pt.call(e, ht);
        },
        onSMUIMenuSurfaceClosing: (ht) => {
          var Pt;
          s(N) && s(N).handleMenuClosing(), (Pt = e.onSMUIMenuSurfaceClosing) == null || Pt.call(e, ht);
        },
        onSMUIMenuSurfaceClosed: (ht) => {
          var Pt;
          s(N) && s(N).handleMenuClosed(), (Pt = e.onSMUIMenuSurfaceClosed) == null || Pt.call(e, ht);
        },
        onSMUIMenuSurfaceOpened: (ht) => {
          var Pt;
          s(N) && s(N).handleMenuOpened(), (Pt = e.onSMUIMenuSurfaceOpened) == null || Pt.call(e, ht);
        },
        get open() {
          return s(ce);
        },
        set open(ht) {
          Q(ce, ht, !0);
        },
        children: (ht, Pt) => {
          {
            let ir = /* @__PURE__ */ pe(() => it(k, "list$"));
            up(ht, Je(
              {
                role: "listbox",
                get wrapFocus() {
                  return s(Re);
                }
              },
              () => s(ir),
              {
                get selectedIndex() {
                  return s(M);
                },
                set selectedIndex(ar) {
                  Q(M, ar, !0);
                },
                children: (ar, aa) => {
                  var yi = te(), jr = Z(yi);
                  Se(jr, () => e.children ?? he), w(ar, yi);
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
  Ae(tt, (H) => ne = H, () => ne), Pe(tt, (H, Ee) => Yt == null ? void 0 : Yt(H, Ee), () => ({
    ripple: f() === "filled",
    unbounded: !1,
    addClass: me,
    removeClass: j,
    addStyle: G
  })), Pe(tt, (H, Ee) => ns == null ? void 0 : ns(H, Ee), () => ({ addClass: me, removeClass: j })), Pe(tt, (H, Ee) => X == null ? void 0 : X(H, Ee), c);
  var ko = Ie(tt, 2);
  {
    var Nd = (H) => {
      {
        let Ee = /* @__PURE__ */ pe(() => it(k, "helperText$"));
        gp(H, Je(() => s(Ee), {
          children: (ht, Pt) => {
            var ir = te(), ar = Z(ir);
            Se(ar, () => e.helperText ?? he), w(ht, ir);
          },
          $$slots: { default: !0 }
        }));
      }
    };
    oe(ko, (H) => {
      e.helperText && H(Nd);
    });
  }
  Le(() => $e(Vr, n())), w(t, et);
  var Ud = we(Xe);
  return i(), Ud;
}
function Ep(t, e) {
  xe(e, !0);
  const n = () => kn(d, "$selectedValue", r), [r, i] = rr();
  let a = g(e, "use", 19, () => []);
  g(e, "class", 3, "");
  let o = g(e, "value", 3, ""), c = /* @__PURE__ */ Ge(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "value",
    "children"
  ]), l;
  const u = be("SMUI:select:selectedText"), d = be("SMUI:select:value");
  ue("SMUI:list:item:role", "option");
  const v = /* @__PURE__ */ pe(() => o() != null && o() !== "" && n() === o());
  at(f), yn(f);
  function f() {
    s(v) && l && Nn(u, l.getPrimaryText());
  }
  function m() {
    return l.getElement();
  }
  var h = { getElement: m };
  Ae(
    hp(t, Je(
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
          return s(v);
        }
      },
      () => c,
      {
        children: (_, y) => {
          var T = te(), I = Z(T);
          Se(I, () => e.children ?? he), w(_, T);
        },
        $$slots: { default: !0 }
      }
    )),
    (_) => l = _,
    () => l
  );
  var p = we(h);
  return i(), p;
}
function Sp(t, e) {
  xe(e, !0);
  let n = g(e, "data", 19, () => []);
  g(e, "placeholder", 3, "");
  let r = g(e, "label", 3, "");
  g(e, "description", 3, "");
  let i = g(e, "value", 15), a = g(e, "required", 3, !1);
  g(e, "size", 3, "sm");
  let o = g(e, "variant", 3, "standard"), c = g(e, "selectedOptionIndex", 31, () => -1), l = g(e, "disabled", 3, !1);
  function u(d) {
    return () => c(d);
  }
  Ip(t, {
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
    children: (d, v) => {
      var f = te(), m = Z(f);
      Qn(m, 17, n, Ri, (h, p, _) => {
        {
          let y = /* @__PURE__ */ pe(() => u(_));
          Ep(h, {
            get onclick() {
              return s(y);
            },
            get value() {
              return s(p).value;
            },
            children: (T, I) => {
              var b = yt();
              Le(() => $e(b, s(p).label)), w(T, b);
            },
            $$slots: { default: !0 }
          });
        }
      }), w(d, f);
    },
    $$slots: { default: !0 }
  }), we();
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
function Ap(t) {
  return t ? t.scrollHeight > t.offsetHeight : !1;
}
function Cp(t) {
  return t ? t.scrollTop === 0 : !1;
}
function Tp(t) {
  return t ? Math.ceil(t.scrollHeight - t.scrollTop) === t.clientHeight : !1;
}
function xp(t) {
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
var wp = (
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
}, ha = {
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
var Lp = (
  /** @class */
  function(t) {
    qe(e, t);
    function e(n) {
      var r = t.call(this, ge(ge({}, e.defaultAdapter), n)) || this;
      return r.dialogOpen = !1, r.isFullscreen = !1, r.animationFrame = 0, r.animationTimer = 0, r.escapeKeyAction = ha.CLOSE_ACTION, r.scrimClickAction = ha.CLOSE_ACTION, r.autoStackButtons = !0, r.areButtonsStacked = !1, r.suppressDefaultPressSelector = ha.SUPPRESS_DEFAULT_PRESS_SELECTOR, r.animFrame = new wp(), r.contentScrollHandler = function() {
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
        return ha;
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
      var r = this.adapter.eventTargetMatches(n.target, ha.SCRIM_SELECTOR);
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
), Op = /* @__PURE__ */ fe('<div class="mdc-dialog__surface-scrim"></div>'), Rp = /* @__PURE__ */ fe('<div><div><div><!> <!></div></div> <div class="mdc-dialog__scrim"></div></div> <!>', 1);
function od(t, e) {
  xe(e, !0);
  const n = () => kn(F, "$aboveFullscreenShown", r), [r, i] = rr(), { FocusTrap: a } = Jm, { closest: o, matches: c } = ra;
  let l = g(e, "use", 19, () => []), u = g(e, "class", 3, ""), d = g(e, "open", 15, !1), v = g(e, "selection", 3, !1), f = g(e, "escapeKeyAction", 3, "close"), m = g(e, "scrimClickAction", 3, "close"), h = g(e, "autoStackButtons", 3, !0), p = g(e, "fullscreen", 3, !1), _ = g(e, "sheet", 3, !1), y = g(e, "noContentPadding", 3, !1), T = g(e, "container$class", 3, ""), I = g(e, "surface$class", 3, ""), b = /* @__PURE__ */ Ge(e, [
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
  ]), S, E = /* @__PURE__ */ _e(void 0), x = new vi(), A = ye({}), C, P = Bt(!1), z = be("SMUI:dialog:aboveFullscreen"), F = be("SMUI:dialog:aboveFullscreenShown") ?? Bt(!1), W = be("SMUI:addLayoutListener"), R, L = [], q = (j) => (L.push(j), () => {
    const G = L.indexOf(j);
    G >= 0 && L.splice(G, 1);
  });
  ue("SMUI:dialog:actions:reversed", P), ue("SMUI:addLayoutListener", q), ue("SMUI:dialog:selection", v()), ue("SMUI:dialog:aboveFullscreen", z || p()), ue("SMUI:dialog:aboveFullscreenShown", F), _() && ue("SMUI:icon-button:context", "dialog:sheet"), Te(() => {
    s(E) && s(E).getEscapeKeyAction() !== f() && s(E).setEscapeKeyAction(f());
  }), Te(() => {
    s(E) && s(E).getScrimClickAction() !== m() && s(E).setScrimClickAction(m());
  }), Te(() => {
    s(E) && s(E).getAutoStackButtons() !== h() && s(E).setAutoStackButtons(h());
  }), Te(() => {
    h() || Nn(P, !0);
  }), W && (R = W(ce)), Te(() => {
    s(E) && s(E).isOpen() !== d() && (d() ? s(E).open({ isAboveFullscreenDialog: !!z }) : s(E).close());
  });
  let k = n();
  Te(() => {
    p() && s(E) && k !== n() && (k = n(), n() ? s(E).showSurfaceScrim() : s(E).hideSurfaceScrim());
  }), at(() => (C = new a(S, { initialFocusEl: re() ?? void 0 }), Q(
    E,
    new Lp({
      addBodyClass: (j) => document.body.classList.add(j),
      addClass: ne,
      areButtonsStacked: () => xp(D()),
      clickDefaultButton: () => {
        const j = O();
        j && j.click();
      },
      eventTargetMatches: (j, G) => j ? c(j, G) : !1,
      getActionFromEvent: (j) => {
        if (!j.target)
          return "";
        const G = o(j.target, "[data-mdc-dialog-action]");
        return G && G.getAttribute("data-mdc-dialog-action");
      },
      getInitialFocusEl: re,
      hasClass: K,
      isContentScrollable: () => Ap(le()),
      notifyClosed: (j) => {
        d(!1), Ke(Ce(), "SMUIDialogClosed", j ? { action: j } : {});
      },
      notifyClosing: (j) => Ke(Ce(), "SMUIDialogClosing", j ? { action: j } : {}),
      notifyOpened: () => Ke(Ce(), "SMUIDialogOpened", {}),
      notifyOpening: () => Ke(Ce(), "SMUIDialogOpening", {}),
      releaseFocus: () => C.releaseFocus(),
      removeBodyClass: (j) => document.body.classList.remove(j),
      removeClass: N,
      reverseButtons: () => {
        Nn(P, !0);
      },
      trapFocus: () => C.trapFocus(),
      registerContentEventHandler: (j, G) => {
        const ie = le();
        ie instanceof HTMLElement && x.on(ie, j, G);
      },
      deregisterContentEventHandler: (j, G) => {
        const ie = le();
        ie instanceof HTMLElement && x.off(ie, j, G);
      },
      isScrollableContentAtTop: () => Cp(le()),
      isScrollableContentAtBottom: () => Tp(le()),
      registerWindowEventHandler: (j, G) => x.on(window, j, G),
      deregisterWindowEventHandler: (j, G) => x.off(window, j, G)
    }),
    !0
  ), s(E).init(), () => {
    var j;
    (j = s(E)) == null || j.destroy(), x.clear();
  })), yn(() => {
    R && R();
  });
  function K(j) {
    return j in A ? A[j] : Ce().classList.contains(j);
  }
  function ne(j) {
    A[j] || (A[j] = !0);
  }
  function N(j) {
    (!(j in A) || A[j]) && (A[j] = !1);
  }
  function D() {
    return [].slice.call(Ce().querySelectorAll(".mdc-dialog__button"));
  }
  function O() {
    return Ce().querySelector("[data-mdc-dialog-button-default]");
  }
  function le() {
    return Ce().querySelector(".mdc-dialog__content");
  }
  function re() {
    return Ce().querySelector("[data-mdc-dialog-initial-focus]");
  }
  function M() {
    z && Nn(F, !0), requestAnimationFrame(() => {
      L.forEach((j) => j());
    });
  }
  function V() {
    L.forEach((j) => j());
  }
  function U() {
    z && Nn(F, !1);
  }
  function J() {
    return d();
  }
  function $(j) {
    d(j);
  }
  function ce() {
    var j;
    return (j = s(E)) == null ? void 0 : j.layout();
  }
  function Ce() {
    return S;
  }
  var ee = { isOpen: J, setOpen: $, layout: ce, getElement: Ce }, ae = Rp();
  mr("resize", co, () => d() && s(E) && s(E).layout()), mr("orientationchange", co, () => d() && s(E) && s(E).layout()), mr("keydown", Ws.body, (j) => s(E) && s(E).handleDocumentKeydown(j));
  var Re = Z(ae), Oe = (j) => {
    var G;
    M(), (G = e.onSMUIDialogOpening) == null || G.call(e, j);
  }, ke = (j) => {
    var G;
    V(), (G = e.onSMUIDialogOpened) == null || G.call(e, j);
  }, ze = (j) => {
    var G;
    U(), (G = e.onSMUIDialogClosed) == null || G.call(e, j);
  }, Fe = (j) => {
    var G;
    s(E) && s(E).handleClick(j), (G = e.onclick) == null || G.call(e, j);
  }, B = (j) => {
    var G;
    s(E) && s(E).handleKeydown(j), (G = e.onkeydown) == null || G.call(e, j);
  };
  He(
    Re,
    (j, G) => ({
      class: j,
      role: "alertdialog",
      "aria-modal": "true",
      ...G,
      onSMUIDialogOpening: Oe,
      onSMUIDialogOpened: ke,
      onSMUIDialogClosed: ze,
      onclick: Fe,
      onkeydown: B
    }),
    [
      () => Me({
        "mdc-dialog": !0,
        "mdc-dialog--stacked": !h(),
        "mdc-dialog--fullscreen": p(),
        "mdc-dialog--sheet": _(),
        "mdc-dialog--no-content-padding": y(),
        "smui-dialog--selection": v(),
        ...A,
        [u()]: !0
      }),
      () => Bn(b, ["container$", "surface$"])
    ]
  );
  var Y = de(Re);
  He(Y, (j, G) => ({ class: j, ...G }), [
    () => Me({ "mdc-dialog__container": !0, [T()]: !0 }),
    () => it(b, "container$")
  ]);
  var ve = de(Y);
  He(ve, (j, G) => ({ class: j, role: "alertdialog", "aria-modal": "true", ...G }), [
    () => Me({ "mdc-dialog__surface": !0, [I()]: !0 }),
    () => it(b, "surface$")
  ]);
  var De = de(ve);
  Se(De, () => e.children ?? he);
  var Be = Ie(De, 2);
  {
    var ut = (j) => {
      var G = Op();
      mr("transitionend", G, () => s(E) && s(E).handleSurfaceScrimTransitionEnd()), w(j, G);
    };
    oe(Be, (j) => {
      p() && j(ut);
    });
  }
  Ae(Re, (j) => S = j, () => S), Pe(Re, (j, G) => X == null ? void 0 : X(j, G), l);
  var vt = Ie(Re, 2);
  Se(vt, () => e.over ?? he), w(t, ae);
  var me = we(ee);
  return i(), me;
}
function Dp(t, e) {
  xe(e, !0);
  let n = /* @__PURE__ */ Ge(e, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return Ae(
    ia(t, Je(
      {
        _smuiClass: "mdc-dialog__header",
        _smuiContexts: { "SMUI:icon-button:context": "dialog:header" },
        tag: "div"
      },
      () => n,
      {
        children: (o, c) => {
          var l = te(), u = Z(l);
          Se(u, () => e.children ?? he), w(o, l);
        },
        $$slots: { default: !0 }
      }
    )),
    (o) => r = o,
    () => r
  ), we(a);
}
function el(t, e) {
  xe(e, !0);
  let n = /* @__PURE__ */ Ge(e, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return Ae(
    ia(t, Je({ _smuiClass: "mdc-dialog__content", tag: "div" }, () => n, {
      children: (o, c) => {
        var l = te(), u = Z(l);
        Se(u, () => e.children ?? he), w(o, l);
      },
      $$slots: { default: !0 }
    })),
    (o) => r = o,
    () => r
  ), we(a);
}
function sd(t, e) {
  xe(e, !0);
  let n = /* @__PURE__ */ Ge(e, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return Ae(
    ia(t, Je(
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
        children: (o, c) => {
          var l = te(), u = Z(l);
          Se(u, () => e.children ?? he), w(o, l);
        },
        $$slots: { default: !0 }
      }
    )),
    (o) => r = o,
    () => r
  ), we(a);
}
var Mp = /* @__PURE__ */ fe('<div class="dialog-title svelte-187m1sc"><!></div> <!> <!>', 1);
function Pp(t, e) {
  xe(e, !0);
  let n = g(e, "open", 15, !1), r = g(e, "onClose", 3, () => {
  });
  od(t, {
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
      var o = Mp(), c = Z(o), l = de(c);
      Se(l, () => e.title ?? he);
      var u = Ie(c, 2);
      el(u, {
        id: "large-scroll-content",
        children: (v, f) => {
          var m = te(), h = Z(m);
          Se(h, () => e.content ?? he), w(v, m);
        },
        $$slots: { default: !0 }
      });
      var d = Ie(u, 2);
      sd(d, {
        children: (v, f) => {
          var m = te(), h = Z(m);
          Se(h, () => e.actions ?? he), w(v, m);
        },
        $$slots: { default: !0 }
      }), w(i, o);
    },
    $$slots: { default: !0 }
  }), we();
}
const tl = Bt({
  component: null,
  props: {},
  isOpen: !1
}), Hp = Bt([]);
Hp.subscribe;
const ou = ye({ freeze: !1 });
function Np(t, e) {
  xe(e, !0);
  let n = /* @__PURE__ */ _e(void 0), r = /* @__PURE__ */ _e(!1);
  const i = tl.subscribe((l) => {
    Q(n, l, !0), Q(r, l.isOpen, !0), ou.freeze = !1;
  });
  at(() => () => i()), Te(() => {
    ou.freeze = s(
      r
      // freeze drawer controls when dialog is open
    );
  });
  var a = te(), o = Z(a);
  {
    var c = (l) => {
      var u = te(), d = Z(u);
      nr(d, () => s(n).component, (v, f) => {
        f(v, Je(() => s(n).props, {
          get open() {
            return s(r);
          },
          set open(m) {
            Q(r, m, !0);
          }
        }));
      }), w(l, u);
    };
    oe(o, (l) => {
      s(n).isOpen && s(n).component && l(c);
    });
  }
  w(t, a), we();
}
function su(t, e = {}) {
  return new Promise((n) => {
    tl.set({
      component: t,
      props: e,
      isOpen: !0,
      resolve: n
    });
  });
}
function is(t, e) {
  tl.update((n) => {
    var r;
    return (r = n.resolve) == null || r.call(n, { type: t, data: e }), { component: null, props: {}, isOpen: !1 };
  });
}
var Up = /* @__PURE__ */ fe('<div class="oscd-confirm-dialog__content svelte-1eipd40"> </div>');
function lu(t, e) {
  xe(e, !0);
  let n = g(e, "open", 15, !1), r = g(e, "title", 3, ""), i = g(e, "message", 3, ""), a = g(e, "confirmActionText", 3, "OK"), o = g(e, "confirmActionColor", 3, "primary"), c = g(e, "cancelActionText", 3, "Cancel"), l = g(e, "color", 3, "var(--mdc-theme-primary, #ff3e00)");
  function u() {
    is("confirm");
  }
  function d() {
    is("cancel");
  }
  Vp(t, {
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
      return c();
    },
    get color() {
      return l();
    },
    onConfirm: () => u(),
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
      el(f, {
        children: (m, h) => {
          var p = Up(), _ = de(p);
          Le(() => $e(_, i())), w(m, p);
        },
        $$slots: { default: !0 }
      });
    },
    $$slots: { content: !0 }
  }), we();
}
var Fp = /* @__PURE__ */ fe('<div class="dialog__title svelte-ec2c4h"><h4 class="svelte-ec2c4h"> </h4> <!></div>'), kp = /* @__PURE__ */ fe("<!> <!>", 1), Bp = /* @__PURE__ */ fe('<!> <!> <div class="dialog__actions svelte-ec2c4h"><!></div>', 1);
function Vp(t, e) {
  xe(e, !0);
  let n = g(e, "open", 15, !1), r = g(e, "title", 3, ""), i = g(e, "confirmActionText", 3, "Confirm"), a = g(e, "confirmActionColor", 3, "primary"), o = g(e, "cancelActionText", 3, "Cancel"), c = g(e, "width", 3, "80vw"), l = g(e, "maxWidth", 3, "85vw"), u = g(e, "height", 3, "85vh"), d = g(e, "maxHeight", 3, "85vh"), v = g(e, "confirmDisabled", 3, !1), f = g(e, "color", 3, "var(--mdc-theme-primary, #ff3e00)"), m = g(e, "showCloseButton", 3, !0), h = g(e, "onClose", 3, () => {
  }), p = g(e, "onCancel", 3, () => {
  }), _ = g(e, "onConfirm", 3, () => {
  });
  function y(I) {
    I.detail.action === "cancel" ? p()() : I.detail.action === "confirm" ? _()() : (I.detail.action, h()());
  }
  let T = /* @__PURE__ */ pe(() => {
    let I;
    return a() === "primary" ? I = f() : I = "#FF203A", v() ? "" : `background-color: ${I}; color: white;`;
  });
  {
    let I = /* @__PURE__ */ pe(() => `width: ${c()}; max-width: ${l()}; height: ${u()}; max-height: ${d()};`);
    od(t, {
      "aria-labelledby": "large-scroll-title",
      "aria-describedby": "large-scroll-content",
      onSMUIDialogClosed: y,
      get surface$style() {
        return s(I);
      },
      get open() {
        return n();
      },
      set open(b) {
        n(b);
      },
      children: (b, S) => {
        var E = Bp(), x = Z(E);
        Dp(x, {
          children: (z, F) => {
            var W = Fp(), R = de(W), L = de(R), q = Ie(R, 2);
            {
              var k = (K) => {
                t_(K, {
                  tabindex: "-1",
                  onClick: () => {
                    n(!1), h()();
                  },
                  tooltip: "Close",
                  tooltipSide: "left",
                  type: "close",
                  fillColor: "white"
                });
              };
              oe(q, (K) => {
                m() && K(k);
              });
            }
            Le(() => {
              pt(W, `background-color: ${f()};`), $e(L, r());
            }), w(z, W);
          },
          $$slots: { default: !0 }
        });
        var A = Ie(x, 2);
        el(A, {
          id: "dialog__content",
          children: (z, F) => {
            var W = te(), R = Z(W);
            Se(R, () => e.content ?? he), w(z, W);
          },
          $$slots: { default: !0 }
        });
        var C = Ie(A, 2), P = de(C);
        sd(P, {
          class: "oscd-dialog__actions",
          children: (z, F) => {
            var W = kp(), R = Z(W);
            {
              var L = (k) => {
                _o(k, {
                  type: "button",
                  action: "cancel",
                  color: "secondary",
                  children: (K, ne) => {
                    var N = yt();
                    Le(() => $e(N, o())), w(K, N);
                  },
                  $$slots: { default: !0 }
                });
              };
              oe(R, (k) => {
                o() && k(L);
              });
            }
            var q = Ie(R, 2);
            _o(q, {
              type: "button",
              action: "confirm",
              get disabled() {
                return v();
              },
              get style() {
                return s(T);
              },
              children: (k, K) => {
                var ne = yt();
                Le(() => $e(ne, i())), w(k, ne);
              },
              $$slots: { default: !0 }
            }), w(z, W);
          },
          $$slots: { default: !0 }
        }), w(b, E);
      },
      $$slots: { default: !0 }
    });
  }
  we();
}
const jt = [];
for (let t = 0; t < 256; ++t)
  jt.push((t + 256).toString(16).slice(1));
function Gp(t, e = 0) {
  return (jt[t[e + 0]] + jt[t[e + 1]] + jt[t[e + 2]] + jt[t[e + 3]] + "-" + jt[t[e + 4]] + jt[t[e + 5]] + "-" + jt[t[e + 6]] + jt[t[e + 7]] + "-" + jt[t[e + 8]] + jt[t[e + 9]] + "-" + jt[t[e + 10]] + jt[t[e + 11]] + jt[t[e + 12]] + jt[t[e + 13]] + jt[t[e + 14]] + jt[t[e + 15]]).toLowerCase();
}
let as;
const jp = new Uint8Array(16);
function Wp() {
  if (!as) {
    if (typeof crypto > "u" || !crypto.getRandomValues)
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    as = crypto.getRandomValues.bind(crypto);
  }
  return as(jp);
}
const qp = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), uu = { randomUUID: qp };
function zp(t, e, n) {
  var i;
  if (uu.randomUUID && !e && !t)
    return uu.randomUUID();
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
  return Gp(r);
}
var Kp = /* @__PURE__ */ fe('<span class="oscd-icon"><!></span>');
function Qt(t, e) {
  var n = Kp(), r = de(n);
  Se(r, () => e.children ?? he), w(t, n);
}
var Xp = /* @__PURE__ */ Rt('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"></path></svg>');
function Yp(t, e) {
  let n = g(e, "svgStyles", 3, "");
  Qt(t, {
    children: (r, i) => {
      var a = Xp();
      Le(() => pt(a, n())), w(r, a);
    }
  });
}
var Zp = /* @__PURE__ */ Rt('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"></path></svg>');
function nl(t, e) {
  let n = g(e, "svgStyles", 3, "");
  Qt(t, {
    children: (r, i) => {
      var a = Zp();
      Le(() => pt(a, n())), w(r, a);
    }
  });
}
var Qp = /* @__PURE__ */ Rt('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z"></path></svg>');
function Jp(t, e) {
  let n = g(e, "svgStyles", 3, "");
  Qt(t, {
    children: (r, i) => {
      var a = Qp();
      Le(() => pt(a, n())), w(r, a);
    }
  });
}
var $p = /* @__PURE__ */ Rt('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="m590-160 80 80H240q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h360l200 240v480q0 20-8.5 36.5T768-96L560-302q-17 11-37 16.5t-43 5.5q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 23-5.5 43T618-360l102 104v-356L562-800H240v640h350ZM480-360q33 0 56.5-23.5T560-440q0-33-23.5-56.5T480-520q-33 0-56.5 23.5T400-440q0 33 23.5 56.5T480-360Zm0-80Zm0 0Z"></path></svg>');
function eb(t, e) {
  let n = g(e, "svgStyles", 3, "");
  Qt(t, {
    children: (r, i) => {
      var a = $p();
      Le(() => pt(a, n())), w(r, a);
    }
  });
}
var tb = /* @__PURE__ */ Rt('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-160q-134 0-227-93t-93-227q0-134 93-227t227-93q69 0 132 28.5T720-690v-110h80v280H520v-80h168q-32-56-87.5-88T480-720q-100 0-170 70t-70 170q0 100 70 170t170 70q77 0 139-44t87-116h84q-28 106-114 173t-196 67Z"></path></svg>');
function nb(t, e) {
  let n = g(e, "svgStyles", 3, "");
  Qt(t, {
    children: (r, i) => {
      var a = tb();
      Le(() => pt(a, n())), w(r, a);
    }
  });
}
var rb = /* @__PURE__ */ Rt('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M200-440v-80h560v80H200Z"></path></svg>');
function ib(t, e) {
  let n = g(e, "svgStyles", 3, "");
  Qt(t, {
    children: (r, i) => {
      var a = rb();
      Le(() => pt(a, n())), w(r, a);
    }
  });
}
var ab = /* @__PURE__ */ Rt('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"></path></svg>');
function ld(t, e) {
  let n = g(e, "svgStyles", 3, "");
  Qt(t, {
    children: (r, i) => {
      var a = ab();
      Le(() => pt(a, n())), w(r, a);
    }
  });
}
var ob = /* @__PURE__ */ Rt('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"></path></svg>');
function ud(t, e) {
  let n = g(e, "svgStyles", 3, "");
  Qt(t, {
    children: (r, i) => {
      var a = ob();
      Le(() => pt(a, n())), w(r, a);
    }
  });
}
var sb = /* @__PURE__ */ Rt('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z"></path></svg>');
function lb(t, e) {
  let n = g(e, "svgStyles", 3, "");
  Qt(t, {
    children: (r, i) => {
      var a = sb();
      Le(() => pt(a, n())), w(r, a);
    }
  });
}
var ub = /* @__PURE__ */ Rt('<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"></path><path d="M16 8h-2v3h-3v2h3v3h2v-3h3v-2h-3zM2 12c0-2.79 1.64-5.2 4.01-6.32V3.52C2.52 4.76 0 8.09 0 12s2.52 7.24 6.01 8.48v-2.16C3.64 17.2 2 14.79 2 12zm13-9c-4.96 0-9 4.04-9 9s4.04 9 9 9 9-4.04 9-9-4.04-9-9-9zm0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7z"></path></svg>');
function cb(t, e) {
  let n = g(e, "svgStyles", 3, "");
  Qt(t, {
    children: (r, i) => {
      var a = ub();
      Le(() => pt(a, n())), w(r, a);
    }
  });
}
vf();
var db = /* @__PURE__ */ Rt('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"></path></svg>');
function fb(t, e) {
  let n = g(e, "svgStyles", 3, "");
  Qt(t, {
    children: (r, i) => {
      var a = db();
      Le(() => pt(a, n())), w(r, a);
    }
  });
}
var hb = /* @__PURE__ */ Rt('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960"><path d="m176-120-56-56 301-302-181-45 198-123-17-234 179 151 216-88-87 217 151 178-234-16-124 198-45-181-301 301Zm24-520-80-80 80-80 80 80-80 80Zm355 197 48-79 93 7-60-71 35-86-86 35-71-59 7 92-79 49 90 22 23 90Zm165 323-80-80 80-80 80 80-80 80ZM569-570Z"></path></svg>');
function vb(t, e) {
  let n = g(e, "svgStyles", 3, "");
  Qt(t, {
    children: (r, i) => {
      var a = hb();
      Le(() => pt(a, n())), w(r, a);
    }
  });
}
var mb = /* @__PURE__ */ Rt('<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m770-302-60-62q40-11 65-42.5t25-73.5q0-50-35-85t-85-35H520v-80h160q83 0 141.5 58.5T880-480q0 57-29.5 105T770-302ZM634-440l-80-80h86v80h-6ZM792-56 56-792l56-56 736 736-56 56ZM440-280H280q-83 0-141.5-58.5T80-480q0-69 42-123t108-71l74 74h-24q-50 0-85 35t-35 85q0 50 35 85t85 35h160v80ZM320-440v-80h65l79 80H320Z"></path></svg>');
function gb(t, e) {
  let n = g(e, "svgStyles", 3, "");
  Qt(t, {
    children: (r, i) => {
      var a = mb();
      Le(() => pt(a, n())), w(r, a);
    }
  });
}
var pb = /* @__PURE__ */ Rt('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"></path></svg>');
function bb(t, e) {
  let n = g(e, "svgStyles", 3, "");
  Qt(t, {
    children: (r, i) => {
      var a = pb();
      Le(() => pt(a, n())), w(r, a);
    }
  });
}
var _b = /* @__PURE__ */ Rt('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" height="24px"><path d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z"></path></svg>');
function yb(t, e) {
  let n = g(e, "svgStyles", 8, "");
  Qt(t, {
    children: (r, i) => {
      var a = _b();
      Le(() => pt(a, n())), w(r, a);
    }
  });
}
var Ib = /* @__PURE__ */ Rt('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3" cursor="pointer"><path d="M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160Zm40 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"></path></svg>');
function Eb(t, e) {
  let n = g(e, "svgStyles", 8, "");
  Qt(t, {
    children: (r, i) => {
      var a = Ib();
      Le(() => pt(a, n())), w(r, a);
    }
  });
}
function Sb(t, e) {
  e(t.target.value);
}
var Ab = /* @__PURE__ */ fe('<div class="custom-text-field svelte-1719vm0"><input type="date" id="datetime-picker" class="custom-text-field__input svelte-1719vm0" placeholder=""/> <label for="datetime-picker" class="custom-floating-label svelte-1719vm0"> </label> <span class="custom-line svelte-1719vm0"></span></div>');
function Cb(t, e) {
  xe(e, !0);
  let n = g(e, "label", 3, ""), r = g(e, "value", 15, "");
  var i = Ab(), a = de(i);
  a.__change = [Sb, r];
  var o = Ie(a, 2), c = de(o);
  Le(() => $e(c, n())), Ta(a, r), w(t, i), we();
}
wn(["change"]);
function Tb(t, e) {
  e(t.target.value);
}
var xb = /* @__PURE__ */ fe('<div class="custom-text-field svelte-6wdfbb"><input type="datetime-local" id="datetime-picker" class="custom-text-field__input svelte-6wdfbb" placeholder=""/> <label for="datetime-picker" class="custom-floating-label svelte-6wdfbb"> </label> <span class="custom-line svelte-6wdfbb"></span></div>');
function wb(t, e) {
  xe(e, !0);
  let n = g(e, "label", 3, ""), r = g(e, "value", 15, "");
  var i = xb(), a = de(i);
  a.__change = [Tb, r];
  var o = Ie(a, 2), c = de(o);
  Le(() => $e(c, n())), Ta(a, r), w(t, i), we();
}
wn(["change"]);
function Lb(t, e, n, r) {
  e() && ((t.key === "Enter" || t.key === " ") && (t.preventDefault(), n()), t.key === "Escape" && (t.preventDefault(), r()));
}
var Ob = /* @__PURE__ */ fe('<span role="button" tabindex="0" aria-labelledby="tooltip"><!></span>');
function La(t, e) {
  xe(e, !0);
  let n = g(e, "content", 3, ""), r = g(e, "side", 3, "top"), i = g(e, "hoverDelay", 3, 0), a = g(e, "transitionDuration", 3, 80), o = g(e, "disabled", 3, !1);
  const c = `tt-${Math.random().toString(36).slice(2)}`;
  let l = /* @__PURE__ */ _e(null), u = /* @__PURE__ */ _e(null), d = /* @__PURE__ */ _e(null), v = /* @__PURE__ */ _e(null), f = /* @__PURE__ */ _e(!1), m = /* @__PURE__ */ _e(null), h = /* @__PURE__ */ _e(null);
  function p() {
    !n() || o() || (s(m) && clearTimeout(s(m)), i() > 0 ? Q(m, setTimeout(() => Q(f, !0), i()), !0) : Q(f, !0));
  }
  function _() {
    s(m) && clearTimeout(s(m)), Q(f, !1);
  }
  function y() {
    p();
  }
  function T() {
    _();
  }
  function I() {
    p();
  }
  function b() {
    _();
  }
  function S() {
    if (!s(u) || !s(v) || !s(l) || o()) return;
    const C = s(l).getBoundingClientRect(), P = s(v).getBoundingClientRect();
    let z = 0, F = 0;
    const W = 8;
    switch (r()) {
      case "top":
        z = C.top - P.height - W, F = C.left + C.width / 2 - P.width / 2;
        break;
      case "bottom":
        z = C.bottom + W, F = C.left + C.width / 2 - P.width / 2;
        break;
      case "left":
        z = C.top + C.height / 2 - P.height / 2, F = C.left - P.width - W;
        break;
      case "right":
        z = C.top + C.height / 2 - P.height / 2, F = C.right + W;
        break;
    }
    s(u).style.top = `${z + window.scrollY}px`, s(u).style.left = `${F + window.scrollX}px`;
  }
  function E() {
    var C;
    (C = s(h)) == null || C.disconnect(), Q(h, null), s(u) && s(u).parentNode && s(u).parentNode.removeChild(s(u)), Q(u, null), Q(v, null), Q(d, null), s(m) && clearTimeout(s(m));
  }
  yn(E), Te(() => {
    if (!(!s(f) || !n() || o())) {
      if (!s(u)) {
        Q(u, document.createElement("div"), !0), s(u).style.position = "absolute", s(u).style.zIndex = "9999", s(u).style.pointerEvents = "none", s(u).style.opacity = "0", s(u).style.transition = `opacity ${a()}ms ease`, s(u).id = c, s(u).setAttribute("role", "tooltip"), document.body.appendChild(s(u)), Q(d, s(u).attachShadow({ mode: "open" }), !0);
        const C = document.createElement("style");
        C.textContent = `
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
      `, s(d).appendChild(C), Q(v, document.createElement("div"), !0), s(d).appendChild(s(v)), Q(
          h,
          new MutationObserver(() => {
            s(f) && S();
          }),
          !0
        ), s(h).observe(document.body, { childList: !0, subtree: !0 });
      }
      s(v) && (s(v).className = `bubble ${r()}`, s(v).innerHTML = n()), s(u) && (s(u).style.opacity = "1", S());
    }
  }), Te(() => {
    if (s(f) || !s(u))
      return;
    s(u).style.opacity = "0";
    const C = s(u), P = setTimeout(
      () => {
        C && C.parentNode && C.parentNode.removeChild(C), s(u) === C && E();
      },
      a()
    );
    return () => clearTimeout(P);
  });
  var x = Ob();
  x.__keydown = [Lb, n, p, _];
  var A = de(x);
  Se(A, () => e.children ?? he), Ae(x, (C) => Q(l, C), () => s(l)), Le(() => {
    gr(x, "aria-describedby", n() && !o() ? c : void 0), gr(x, "aria-haspopup", n() ? "true" : void 0), gr(x, "aria-expanded", n() ? s(f) ? "true" : "false" : void 0);
  }), mr("mouseenter", x, y), mr("mouseleave", x, T), mr("focus", x, I), mr("blur", x, b), w(t, x), we();
}
wn(["keydown"]);
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
var va = {
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
}, In = {
  ARIA_CHECKED_ATTR: "aria-checked",
  ARIA_CHECKED_INDETERMINATE_VALUE: "mixed",
  DATA_INDETERMINATE_ATTR: "data-indeterminate",
  NATIVE_CONTROL_SELECTOR: ".mdc-checkbox__native-control",
  TRANSITION_STATE_CHECKED: "checked",
  TRANSITION_STATE_INDETERMINATE: "indeterminate",
  TRANSITION_STATE_INIT: "init",
  TRANSITION_STATE_UNCHECKED: "unchecked"
}, cu = {
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
var Rb = (
  /** @class */
  function(t) {
    qe(e, t);
    function e(n) {
      var r = t.call(this, ge(ge({}, e.defaultAdapter), n)) || this;
      return r.currentCheckState = In.TRANSITION_STATE_INIT, r.currentAnimationClass = "", r.animEndLatchTimer = 0, r.enableAnimationEndHandler = !1, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return va;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return In;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return cu;
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
      this.currentCheckState = this.determineCheckState(), this.updateAriaChecked(), this.adapter.addClass(va.UPGRADED);
    }, e.prototype.destroy = function() {
      clearTimeout(this.animEndLatchTimer);
    }, e.prototype.setDisabled = function(n) {
      this.adapter.setNativeControlDisabled(n), n ? this.adapter.addClass(va.DISABLED) : this.adapter.removeClass(va.DISABLED);
    }, e.prototype.handleAnimationEnd = function() {
      var n = this;
      this.enableAnimationEndHandler && (clearTimeout(this.animEndLatchTimer), this.animEndLatchTimer = setTimeout(function() {
        n.adapter.removeClass(n.currentAnimationClass), n.enableAnimationEndHandler = !1;
      }, cu.ANIM_END_LATCH_MS));
    }, e.prototype.handleChange = function() {
      this.transitionCheckState();
    }, e.prototype.transitionCheckState = function() {
      if (this.adapter.hasNativeControl()) {
        var n = this.currentCheckState, r = this.determineCheckState();
        if (n !== r) {
          this.updateAriaChecked();
          var i = In.TRANSITION_STATE_UNCHECKED, a = va.SELECTED;
          r === i ? this.adapter.removeClass(a) : this.adapter.addClass(a), this.currentAnimationClass.length > 0 && (clearTimeout(this.animEndLatchTimer), this.adapter.forceLayout(), this.adapter.removeClass(this.currentAnimationClass)), this.currentAnimationClass = this.getTransitionAnimationClass(n, r), this.currentCheckState = r, this.adapter.isAttachedToDOM() && this.currentAnimationClass.length > 0 && (this.adapter.addClass(this.currentAnimationClass), this.enableAnimationEndHandler = !0);
        }
      }
    }, e.prototype.determineCheckState = function() {
      var n = In.TRANSITION_STATE_INDETERMINATE, r = In.TRANSITION_STATE_CHECKED, i = In.TRANSITION_STATE_UNCHECKED;
      return this.adapter.isIndeterminate() ? n : this.adapter.isChecked() ? r : i;
    }, e.prototype.getTransitionAnimationClass = function(n, r) {
      var i = In.TRANSITION_STATE_INIT, a = In.TRANSITION_STATE_CHECKED, o = In.TRANSITION_STATE_UNCHECKED, c = e.cssClasses, l = c.ANIM_UNCHECKED_CHECKED, u = c.ANIM_UNCHECKED_INDETERMINATE, d = c.ANIM_CHECKED_UNCHECKED, v = c.ANIM_CHECKED_INDETERMINATE, f = c.ANIM_INDETERMINATE_CHECKED, m = c.ANIM_INDETERMINATE_UNCHECKED;
      switch (n) {
        case i:
          return r === o ? "" : r === a ? f : m;
        case o:
          return r === a ? l : u;
        case a:
          return r === o ? d : v;
        default:
          return r === a ? f : m;
      }
    }, e.prototype.updateAriaChecked = function() {
      this.adapter.isIndeterminate() ? this.adapter.setNativeControlAttr(In.ARIA_CHECKED_ATTR, In.ARIA_CHECKED_INDETERMINATE_VALUE) : this.adapter.removeNativeControlAttr(In.ARIA_CHECKED_ATTR);
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
}, ma = {
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
var Db = (
  /** @class */
  function(t) {
    qe(e, t);
    function e(n) {
      var r = t.call(this, ge(ge({}, e.defaultAdapter), n)) || this;
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
            for (var o = kt(r), c = o.next(); !c.done; c = o.next()) {
              var l = c.value;
              l.contentRect && n.calculateAndSetDimensions(l.contentRect.width);
            }
          } catch (u) {
            i = { error: u };
          } finally {
            try {
              c && !c.done && (a = o.return) && a.call(o);
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
      var r = "scaleX(" + n + ")", i = typeof window < "u" ? tp(window, "transform") : "transform";
      this.adapter.setPrimaryBarStyle(i, r);
    }, e.prototype.setBufferBarProgress = function(n) {
      var r = n * 100 + "%";
      this.adapter.setBufferBarStyle(Dn.FLEX_BASIS, r);
    }, e.prototype.calculateAndSetDimensions = function(n) {
      var r = n * ma.PRIMARY_HALF, i = n * ma.PRIMARY_FULL, a = n * ma.SECONDARY_QUARTER, o = n * ma.SECONDARY_HALF, c = n * ma.SECONDARY_FULL;
      this.adapter.setStyle("--mdc-linear-progress-primary-half", r + "px"), this.adapter.setStyle("--mdc-linear-progress-primary-half-neg", -r + "px"), this.adapter.setStyle("--mdc-linear-progress-primary-full", i + "px"), this.adapter.setStyle("--mdc-linear-progress-primary-full-neg", -i + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-quarter", a + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-quarter-neg", -a + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-half", o + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-half-neg", -o + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-full", c + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-full-neg", -c + "px"), this.restartAnimation();
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
var ur = {
  HEADER_CELL_SORTED: "mdc-data-table__header-cell--sorted",
  HEADER_CELL_SORTED_DESCENDING: "mdc-data-table__header-cell--sorted-descending",
  IN_PROGRESS: "mdc-data-table--in-progress",
  ROW_SELECTED: "mdc-data-table__row--selected"
}, du = {
  ARIA_SELECTED: "aria-selected",
  ARIA_SORT: "aria-sort"
}, Yr = {
  ARIA_SELECTED: du.ARIA_SELECTED,
  ARIA_SORT: du.ARIA_SORT
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
var Mb = (
  /** @class */
  function(t) {
    qe(e, t);
    function e(n) {
      return t.call(this, ge(ge({}, e.defaultAdapter), n)) || this;
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
      return Tc(this, void 0, void 0, function() {
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
        o !== i && (this.adapter.removeClassNameByHeaderCellIndex(o, ur.HEADER_CELL_SORTED), this.adapter.removeClassNameByHeaderCellIndex(o, ur.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(o, Yr.ARIA_SORT, pn.NONE), this.adapter.setSortStatusLabelByHeaderCellIndex(o, pn.NONE));
      this.adapter.setClassNameByHeaderCellIndex(i, ur.HEADER_CELL_SORTED);
      var c = this.adapter.getAttributeByHeaderCellIndex(i, Yr.ARIA_SORT), l = pn.NONE;
      c === pn.ASCENDING ? (this.adapter.setClassNameByHeaderCellIndex(i, ur.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(i, Yr.ARIA_SORT, pn.DESCENDING), l = pn.DESCENDING) : c === pn.DESCENDING ? (this.adapter.removeClassNameByHeaderCellIndex(i, ur.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(i, Yr.ARIA_SORT, pn.ASCENDING), l = pn.ASCENDING) : (this.adapter.setAttributeByHeaderCellIndex(i, Yr.ARIA_SORT, pn.ASCENDING), l = pn.ASCENDING), this.adapter.setSortStatusLabelByHeaderCellIndex(i, l), this.adapter.notifySortAction({
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
      }), this.adapter.addClass(ur.IN_PROGRESS);
    }, e.prototype.hideProgress = function() {
      this.adapter.removeClass(ur.IN_PROGRESS);
    }, e.prototype.setHeaderRowCheckboxState = function() {
      this.adapter.getSelectedRowCount() === 0 ? (this.adapter.setHeaderRowCheckboxChecked(!1), this.adapter.setHeaderRowCheckboxIndeterminate(!1)) : this.adapter.getSelectedRowCount() === this.adapter.getRowCount() ? (this.adapter.setHeaderRowCheckboxChecked(!0), this.adapter.setHeaderRowCheckboxIndeterminate(!1)) : (this.adapter.setHeaderRowCheckboxIndeterminate(!0), this.adapter.setHeaderRowCheckboxChecked(!1));
    }, e.prototype.selectRowAtIndex = function(n, r) {
      r ? (this.adapter.addClassAtRowIndex(n, ur.ROW_SELECTED), this.adapter.setAttributeAtRowIndex(n, Yr.ARIA_SELECTED, "true")) : (this.adapter.removeClassAtRowIndex(n, ur.ROW_SELECTED), this.adapter.setAttributeAtRowIndex(n, Yr.ARIA_SELECTED, "false"));
    }, e;
  }(xt)
), Pb = /* @__PURE__ */ fe('<div class="mdc-data-table__progress-indicator"><div class="mdc-data-table__scrim"></div> <!></div>'), Hb = /* @__PURE__ */ fe("<div><div><table><!></table></div> <!> <!></div>");
function Nb(t, e) {
  xe(e, !0);
  const n = () => kn(W, "$progressClosed", r), [r, i] = rr(), { closest: a } = ra;
  let o = g(e, "use", 19, () => []), c = g(e, "class", 3, ""), l = g(e, "stickyHeader", 3, !1), u = g(e, "sortable", 3, !1), d = g(e, "sort", 15, null), v = g(e, "sortDirection", 15, "ascending"), f = g(e, "sortAscendingAriaLabel", 3, "sorted, ascending"), m = g(e, "sortDescendingAriaLabel", 3, "sorted, descending"), h = g(e, "container$use", 19, () => []), p = g(e, "container$class", 3, ""), _ = g(e, "table$use", 19, () => []), y = g(e, "table$class", 3, ""), T = /* @__PURE__ */ Ge(e, [
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
  ]), I, b = /* @__PURE__ */ _e(void 0), S, E = /* @__PURE__ */ _e(void 0), x = /* @__PURE__ */ _e(void 0), A = ye({}), C = /* @__PURE__ */ _e(ye({ height: "auto", top: "initial" })), P = be("SMUI:addLayoutListener"), z, F = !1, W = Bt(!1), R = Bt(d());
  Te(() => {
    Nn(R, d());
  });
  let L = Bt(v());
  Te(() => {
    Nn(L, v());
  }), ue("SMUI:checkbox:context", "data-table"), ue("SMUI:linear-progress:context", "data-table"), ue("SMUI:linear-progress:closed", W), ue("SMUI:data-table:sortable", u()), ue("SMUI:data-table:sort", R), ue("SMUI:data-table:sortDirection", L), ue("SMUI:data-table:sortAscendingAriaLabel", f()), ue("SMUI:data-table:sortDescendingAriaLabel", m()), P && (z = P(re));
  let q;
  Te(() => {
    e.progress && s(b) && q !== n() && (q = n(), n() ? s(b).hideProgress() : s(b).showProgress());
  }), ue("SMUI:checkbox:mount", () => {
    s(b) && F && s(b).layout();
  }), ue("SMUI:data-table:header:mount", (B) => {
    Q(E, B, !0);
  }), ue("SMUI:data-table:header:unmount", () => {
    Q(E, void 0);
  }), ue("SMUI:data-table:body:mount", (B) => {
    Q(x, B, !0);
  }), ue("SMUI:data-table:body:unmount", () => {
    Q(x, void 0);
  }), at(() => (Q(
    b,
    new Mb({
      addClass: K,
      removeClass: ne,
      getHeaderCellElements: () => {
        var B;
        return ((B = s(E)) == null ? void 0 : B.cells.map((Y) => Y.element)) ?? [];
      },
      getHeaderCellCount: () => {
        var B;
        return ((B = s(E)) == null ? void 0 : B.cells.length) ?? 0;
      },
      getAttributeByHeaderCellIndex: (B, Y) => {
        var ve;
        return ((ve = s(E)) == null ? void 0 : ve.orderedCells[B].getAttr(Y)) ?? null;
      },
      setAttributeByHeaderCellIndex: (B, Y, ve) => {
        var De;
        (De = s(E)) == null || De.orderedCells[B].addAttr(Y, ve);
      },
      setClassNameByHeaderCellIndex: (B, Y) => {
        var ve;
        (ve = s(E)) == null || ve.orderedCells[B].addClass(Y);
      },
      removeClassNameByHeaderCellIndex: (B, Y) => {
        var ve;
        (ve = s(E)) == null || ve.orderedCells[B].removeClass(Y);
      },
      notifySortAction: (B) => {
        d(B.columnId), v(B.sortValue), Ke(M(), "SMUIDataTableSorted", B);
      },
      getTableContainerHeight: () => S.getBoundingClientRect().height,
      getTableHeaderHeight: () => {
        const B = M().querySelector(".mdc-data-table__header-row");
        if (!B)
          throw new Error("MDCDataTable: Table header element not found.");
        return B.getBoundingClientRect().height;
      },
      setProgressIndicatorStyles: (B) => {
        Q(C, B, !0);
      },
      addClassAtRowIndex: (B, Y) => {
        var ve;
        (ve = s(x)) == null || ve.orderedRows[B].addClass(Y);
      },
      getRowCount: () => {
        var B;
        return ((B = s(x)) == null ? void 0 : B.rows.length) ?? 0;
      },
      getRowElements: () => {
        var B;
        return ((B = s(x)) == null ? void 0 : B.rows.map((Y) => Y.element)) ?? [];
      },
      getRowIdAtIndex: (B) => {
        var Y;
        return ((Y = s(x)) == null ? void 0 : Y.orderedRows[B].rowId) ?? null;
      },
      getRowIndexByChildElement: (B) => {
        var Y;
        return ((Y = s(x)) == null ? void 0 : Y.orderedRows.map((ve) => ve.element).indexOf(a(B, ".mdc-data-table__row"))) ?? -1;
      },
      getSelectedRowCount: () => {
        var B;
        return ((B = s(x)) == null ? void 0 : B.rows.filter((Y) => Y.selected).length) ?? 0;
      },
      isCheckboxAtRowIndexChecked: (B) => {
        var ve;
        const Y = (ve = s(x)) == null ? void 0 : ve.orderedRows[B].checkbox;
        return Y ? Y.checked : !1;
      },
      isHeaderRowCheckboxChecked: () => {
        var Y;
        const B = (Y = s(E)) == null ? void 0 : Y.checkbox;
        return B ? B.checked : !1;
      },
      isRowsSelectable: () => !!M().querySelector(".mdc-data-table__row-checkbox") || !!M().querySelector(".mdc-data-table__header-row-checkbox"),
      notifyRowSelectionChanged: (B) => {
        var ve;
        const Y = (ve = s(x)) == null ? void 0 : ve.orderedRows[B.rowIndex];
        Y && Ke(M(), "SMUIDataTableSelectionChanged", {
          row: Y.element,
          rowId: Y.rowId,
          rowIndex: B.rowIndex,
          selected: B.selected
        });
      },
      notifySelectedAll: () => {
        N(!1), Ke(M(), "SMUIDataTableSelectedAll");
      },
      notifyUnselectedAll: () => {
        N(!1), Ke(M(), "SMUIDataTableUnselectedAll");
      },
      notifyRowClick: (B) => Ke(M(), "SMUIDataTableClickRow", B),
      registerHeaderRowCheckbox: () => {
      },
      registerRowCheckboxes: () => {
      },
      removeClassAtRowIndex: (B, Y) => {
        var ve;
        (ve = s(x)) == null || ve.orderedRows[B].removeClass(Y);
      },
      setAttributeAtRowIndex: (B, Y, ve) => {
        var De;
        (De = s(x)) == null || De.orderedRows[B].addAttr(Y, ve);
      },
      setHeaderRowCheckboxChecked: (B) => {
        var ve;
        const Y = (ve = s(E)) == null ? void 0 : ve.checkbox;
        Y && (Y.checked = B);
      },
      setHeaderRowCheckboxIndeterminate: N,
      setRowCheckboxCheckedAtIndex: (B, Y) => {
        var De;
        const ve = (De = s(x)) == null ? void 0 : De.orderedRows[B].checkbox;
        ve && (ve.checked = Y);
      },
      setSortStatusLabelByHeaderCellIndex: (B, Y) => {
      }
    }),
    !0
  ), s(b).init(), s(b).layout(), F = !0, () => {
    var B;
    (B = s(b)) == null || B.destroy();
  })), yn(() => {
    z && z();
  });
  function k(B) {
    s(b) && s(b).handleRowCheckboxChange(B);
  }
  function K(B) {
    A[B] || (A[B] = !0);
  }
  function ne(B) {
    (!(B in A) || A[B]) && (A[B] = !1);
  }
  function N(B) {
    var ve;
    const Y = (ve = s(E)) == null ? void 0 : ve.checkbox;
    Y && (Y.indeterminate = B);
  }
  function D(B) {
    if (!s(b) || !B.detail.target)
      return;
    const Y = a(B.detail.target, ".mdc-data-table__header-cell--with-sort");
    Y && le(Y);
  }
  function O(B) {
    if (!s(b) || !B.detail.target)
      return;
    const Y = a(B.detail.target, ".mdc-data-table__row");
    Y && s(b) && s(b).handleRowClick({ rowId: B.detail.rowId, row: Y });
  }
  function le(B) {
    var Be, ut;
    const Y = ((Be = s(E)) == null ? void 0 : Be.orderedCells) ?? [], ve = Y.map((vt) => vt.element).indexOf(B);
    if (ve === -1)
      return;
    const De = Y[ve].columnId ?? null;
    (ut = s(b)) == null || ut.handleSortAction({ columnId: De, columnIndex: ve, headerCell: B });
  }
  function re() {
    var B;
    return (B = s(b)) == null ? void 0 : B.layout();
  }
  function M() {
    return I;
  }
  var V = { layout: re, getElement: M }, U = Hb(), J = (B) => {
    var Y;
    s(b) && s(b).handleHeaderRowCheckboxChange(), (Y = e.onSMUIDataTableHeaderCheckboxChange) == null || Y.call(e, B);
  }, $ = (B) => {
    var Y;
    D(B), (Y = e.onSMUIDataTableHeaderClick) == null || Y.call(e, B);
  }, ce = (B) => {
    var Y;
    O(B), (Y = e.onSMUIDataTableRowClick) == null || Y.call(e, B);
  }, Ce = (B) => {
    var Y;
    k(B), (Y = e.onSMUIDataTableBodyCheckboxChange) == null || Y.call(e, B);
  };
  He(
    U,
    (B, Y) => ({
      class: B,
      ...Y,
      onSMUIDataTableHeaderCheckboxChange: J,
      onSMUIDataTableHeaderClick: $,
      onSMUIDataTableRowClick: ce,
      onSMUIDataTableBodyCheckboxChange: Ce
    }),
    [
      () => Me({
        "mdc-data-table": !0,
        "mdc-data-table--sticky-header": l(),
        ...A,
        [c()]: !0
      }),
      () => Bn(T, ["container$", "table$"])
    ]
  );
  var ee = de(U);
  He(ee, (B, Y) => ({ class: B, ...Y }), [
    () => Me({
      "mdc-data-table__table-container": !0,
      [p()]: !0
    }),
    () => it(T, "container$")
  ]);
  var ae = de(ee);
  He(ae, (B, Y) => ({ class: B, ...Y }), [
    () => Me({ "mdc-data-table__table": !0, [y()]: !0 }),
    () => it(T, "table$")
  ]);
  var Re = de(ae);
  Se(Re, () => e.children ?? he), Pe(ae, (B, Y) => X == null ? void 0 : X(B, Y), _), Ae(ee, (B) => S = B, () => S), Pe(ee, (B, Y) => X == null ? void 0 : X(B, Y), h);
  var Oe = Ie(ee, 2);
  {
    var ke = (B) => {
      var Y = Pb(), ve = Ie(de(Y), 2);
      Se(ve, () => e.progress ?? he), Le((De) => pt(Y, De), [
        () => Object.entries(s(C)).map(([De, Be]) => `${De}: ${Be};`).join(" ")
      ]), w(B, Y);
    };
    oe(Oe, (B) => {
      e.progress && B(ke);
    });
  }
  var ze = Ie(Oe, 2);
  Se(ze, () => e.paginate ?? he), Ae(U, (B) => I = B, () => I), Pe(U, (B, Y) => X == null ? void 0 : X(B, Y), o), w(t, U);
  var Fe = we(V);
  return i(), Fe;
}
var Ub = /* @__PURE__ */ fe("<thead><!></thead>");
function Fb(t, e) {
  xe(e, !0);
  let n = g(e, "use", 19, () => []), r = /* @__PURE__ */ Ge(e, ["$$slots", "$$events", "$$legacy", "use", "children"]), i, a = /* @__PURE__ */ _e(void 0), o = [];
  const c = /* @__PURE__ */ new WeakMap();
  ue("SMUI:data-table:row:header", !0);
  const l = be("SMUI:checkbox:mount");
  ue("SMUI:checkbox:mount", (y) => {
    Q(a, y, !0), l && l(y);
  });
  const u = be("SMUI:checkbox:unmount");
  ue("SMUI:checkbox:unmount", (y) => {
    Q(a, void 0), u && u(y);
  }), ue("SMUI:data-table:cell:mount", (y) => {
    o.push(y), c.set(y.element, y);
  }), ue("SMUI:data-table:cell:unmount", (y) => {
    const T = o.findIndex((I) => I === y);
    T !== -1 && o.splice(T, 1), c.delete(y.element);
  });
  const d = be("SMUI:data-table:header:mount"), v = be("SMUI:data-table:header:unmount");
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
      v && v(y);
    };
  });
  function f() {
    return [
      ...m().querySelectorAll(".mdc-data-table__header-cell")
    ].map((y) => c.get(y)).filter((y) => y && y._smui_data_table_header_cell_accessor);
  }
  function m() {
    return i;
  }
  var h = { getElement: m }, p = Ub();
  He(p, () => ({ ...r }));
  var _ = de(p);
  return Se(_, () => e.children ?? he), Ae(p, (y) => i = y, () => i), Pe(p, (y, T) => X == null ? void 0 : X(y, T), n), w(t, p), we(h);
}
var kb = /* @__PURE__ */ fe("<tbody><!></tbody>");
function Bb(t, e) {
  xe(e, !0);
  let n = g(e, "use", 19, () => []), r = g(e, "class", 3, ""), i = /* @__PURE__ */ Ge(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "children"
  ]), a, o = [];
  const c = /* @__PURE__ */ new WeakMap();
  ue("SMUI:data-table:row:header", !1), ue("SMUI:data-table:row:mount", (p) => {
    o.push(p), c.set(p.element, p);
  }), ue("SMUI:data-table:row:unmount", (p) => {
    const _ = o.findIndex((y) => y === p);
    _ !== -1 && o.splice(_, 1), c.delete(p.element);
  });
  const l = be("SMUI:data-table:body:mount"), u = be("SMUI:data-table:body:unmount");
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
      u && u(p);
    };
  });
  function d() {
    return [...v().querySelectorAll(".mdc-data-table__row")].map((p) => c.get(p)).filter((p) => p && p._smui_data_table_row_accessor);
  }
  function v() {
    return a;
  }
  var f = { getElement: v }, m = kb();
  He(m, (p) => ({ class: p, ...i }), [
    () => Me({ "mdc-data-table__content": !0, [r()]: !0 })
  ]);
  var h = de(m);
  return Se(h, () => e.children ?? he), Ae(m, (p) => a = p, () => a), Pe(m, (p, _) => X == null ? void 0 : X(p, _), n), w(t, m), we(f);
}
let Vb = 0;
var Gb = /* @__PURE__ */ fe("<tr><!></tr>");
function Za(t, e) {
  xe(e, !0);
  let n = g(e, "use", 19, () => []), r = g(e, "class", 3, ""), i = g(e, "rowId", 19, () => "SMUI-data-table-row-" + Vb++), a = /* @__PURE__ */ Ge(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "rowId",
    "children"
  ]), o, c = /* @__PURE__ */ _e(void 0), l = ye({}), u = ye({}), d = be("SMUI:data-table:row:header");
  const v = be("SMUI:checkbox:mount");
  ue("SMUI:checkbox:mount", (P) => {
    Q(c, P, !0), v && v(P);
  });
  const f = be("SMUI:checkbox:unmount");
  ue("SMUI:checkbox:unmount", (P) => {
    Q(c, void 0), f && f(P);
  });
  const m = be("SMUI:data-table:row:mount"), h = be("SMUI:data-table:row:unmount");
  at(() => {
    const P = d ? {
      _smui_data_table_row_accessor: !1,
      get element() {
        return S();
      },
      get checkbox() {
        return s(c);
      },
      get rowId() {
      },
      get selected() {
        return (s(c) && s(c).checked) ?? !1;
      },
      addClass: p,
      removeClass: _,
      getAttr: y,
      addAttr: T
    } : {
      _smui_data_table_row_accessor: !0,
      get element() {
        return S();
      },
      get checkbox() {
        return s(c);
      },
      get rowId() {
        return i();
      },
      get selected() {
        return (s(c) && s(c).checked) ?? !1;
      },
      addClass: p,
      removeClass: _,
      getAttr: y,
      addAttr: T
    };
    return m && m(P), () => {
      h && h(P);
    };
  });
  function p(P) {
    l[P] || (l[P] = !0);
  }
  function _(P) {
    (!(P in l) || l[P]) && (l[P] = !1);
  }
  function y(P) {
    return P in u ? u[P] ?? null : S().getAttribute(P);
  }
  function T(P, z) {
    u[P] !== z && (u[P] = z);
  }
  function I(P) {
    Ke(S(), "SMUIDataTableHeaderClick", P);
  }
  function b(P) {
    Ke(S(), "SMUIDataTableRowClick", { rowId: i(), target: P.target });
  }
  function S() {
    return o;
  }
  var E = { getElement: S }, x = Gb(), A = (P) => {
    var z;
    d ? I(P) : b(P), (z = e.onclick) == null || z.call(e, P);
  };
  He(
    x,
    (P) => ({
      class: P,
      "aria-selected": s(c) ? s(c).checked ? "true" : "false" : void 0,
      ...u,
      ...a,
      onclick: A
    }),
    [
      () => Me({
        "mdc-data-table__header-row": d,
        "mdc-data-table__row": !d,
        "mdc-data-table__row--selected": !d && s(c) && s(c).checked,
        ...l,
        [r()]: !0
      })
    ]
  );
  var C = de(x);
  return Se(C, () => e.children ?? he), Ae(x, (P) => o = P, () => o), Pe(x, (P, z) => X == null ? void 0 : X(P, z), n), w(t, x), we(E);
}
let jb = 0;
var Wb = /* @__PURE__ */ fe('<div class="mdc-data-table__header-cell-wrapper"><!> <div class="mdc-data-table__sort-status-label" aria-hidden="true"> </div></div>'), qb = /* @__PURE__ */ fe("<th><!></th>"), zb = /* @__PURE__ */ fe("<td><!></td>");
function ga(t, e) {
  xe(e, !0);
  const n = () => kn(y, "$sort", i), r = () => kn(T, "$sortDirection", i), [i, a] = rr();
  let o = be("SMUI:data-table:row:header"), c = g(e, "use", 19, () => []), l = g(e, "class", 3, ""), u = g(e, "numeric", 3, !1), d = g(e, "checkbox", 3, !1), v = g(e, "columnId", 19, () => o ? "SMUI-data-table-column-" + jb++ : "SMUI-data-table-unused"), f = g(e, "sortable", 19, () => be("SMUI:data-table:sortable")), m = /* @__PURE__ */ Ge(e, [
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
  ]), h, p = ye({}), _ = ye({}), y = be("SMUI:data-table:sort"), T = be("SMUI:data-table:sortDirection"), I = be("SMUI:data-table:sortAscendingAriaLabel"), b = be("SMUI:data-table:sortDescendingAriaLabel");
  f() && (ue("SMUI:label:context", "data-table:sortable-header-cell"), ue("SMUI:icon-button:context", "data-table:sortable-header-cell"), ue("SMUI:icon-button:aria-describedby", v() + "-status-label"));
  const S = be("SMUI:data-table:cell:mount"), E = be("SMUI:data-table:cell:unmount");
  at(() => {
    const N = o ? {
      _smui_data_table_header_cell_accessor: !0,
      get element() {
        return W();
      },
      get columnId() {
        return v();
      },
      addClass: x,
      removeClass: A,
      getAttr: C,
      addAttr: P
    } : {
      _smui_data_table_header_cell_accessor: !1,
      get element() {
        return W();
      },
      get columnId() {
      },
      addClass: x,
      removeClass: A,
      getAttr: C,
      addAttr: P
    };
    return S && S(N), () => {
      E && E(N);
    };
  });
  function x(N) {
    p[N] || (p[N] = !0);
  }
  function A(N) {
    (!(N in p) || p[N]) && (p[N] = !1);
  }
  function C(N) {
    return N in _ ? _[N] ?? null : W().getAttribute(N);
  }
  function P(N, D) {
    _[N] !== D && (_[N] = D);
  }
  function z(N) {
    Ke(W(), "SMUIDataTableHeaderCheckboxChange", N);
  }
  function F(N) {
    Ke(W(), "SMUIDataTableBodyCheckboxChange", N);
  }
  function W() {
    return h;
  }
  var R = { getElement: W }, L = te(), q = Z(L);
  {
    var k = (N) => {
      var D = qb(), O = (V) => {
        var U;
        d() && z(V), (U = e.onchange) == null || U.call(e, V);
      };
      He(
        D,
        (V) => ({
          class: V,
          role: "columnheader",
          scope: "col",
          "data-column-id": v(),
          "aria-sort": f() ? n() === v() ? r() : "none" : void 0,
          ..._,
          ...m,
          onchange: O
        }),
        [
          () => Me({
            "mdc-data-table__header-cell": !0,
            "mdc-data-table__header-cell--numeric": u(),
            "mdc-data-table__header-cell--checkbox": d(),
            "mdc-data-table__header-cell--with-sort": f(),
            "mdc-data-table__header-cell--sorted": f() && n() === v(),
            ...p,
            [l()]: !0
          })
        ]
      );
      var le = de(D);
      {
        var re = (V) => {
          var U = Wb(), J = de(U);
          Se(J, () => e.children ?? he);
          var $ = Ie(J, 2), ce = de($);
          Le(() => {
            gr($, "id", `${v() ?? ""}-status-label`), $e(ce, n() === v() ? r() === "ascending" ? I : b : "");
          }), w(V, U);
        }, M = (V) => {
          var U = te(), J = Z(U);
          Se(J, () => e.children ?? he), w(V, U);
        };
        oe(le, (V) => {
          f() ? V(re) : V(M, !1);
        });
      }
      Ae(D, (V) => h = V, () => h), Pe(D, (V, U) => X == null ? void 0 : X(V, U), c), w(N, D);
    }, K = (N) => {
      var D = zb(), O = (re) => {
        var M;
        d() && F(re), (M = e.onchange) == null || M.call(e, re);
      };
      He(
        D,
        (re) => ({
          class: re,
          ..._,
          ...m,
          onchange: O
        }),
        [
          () => Me({
            "mdc-data-table__cell": !0,
            "mdc-data-table__cell--numeric": u(),
            "mdc-data-table__cell--checkbox": d(),
            ...p,
            [l()]: !0
          })
        ]
      );
      var le = de(D);
      Se(le, () => e.children ?? he), Ae(D, (re) => h = re, () => h), Pe(D, (re, M) => X == null ? void 0 : X(re, M), c), w(N, D);
    };
    oe(q, (N) => {
      o ? N(k) : N(K, !1);
    });
  }
  w(t, L);
  var ne = we(R);
  return a(), ne;
}
wn(["click"]);
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
var Kb = {
  ROOT: "mdc-form-field"
}, Xb = {
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
var Yb = (
  /** @class */
  function(t) {
    qe(e, t);
    function e(n) {
      var r = t.call(this, ge(ge({}, e.defaultAdapter), n)) || this;
      return r.click = function() {
        r.handleClick();
      }, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Kb;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Xb;
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
let Zb = 0;
var Qb = /* @__PURE__ */ fe("<div><!> <label><!></label></div>");
function Jb(t, e) {
  xe(e, !0);
  let n = g(e, "use", 19, () => []), r = g(e, "class", 3, ""), i = g(e, "align", 3, "start"), a = g(e, "noWrap", 3, !1), o = g(e, "inputId", 19, () => "SMUI-form-field-" + Zb++), c = g(e, "label$use", 19, () => []), l = /* @__PURE__ */ Ge(e, [
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
  ]), u, d = /* @__PURE__ */ _e(void 0), v = new vi(), f, m = /* @__PURE__ */ _e(void 0);
  ue("SMUI:generic:input:props", { id: o() }), ue("SMUI:generic:input:mount", (b) => {
    Q(m, b, !0);
  }), ue("SMUI:generic:input:unmount", () => {
    Q(m, void 0);
  }), at(() => (Q(
    d,
    new Yb({
      activateInputRipple: () => {
        s(m) && s(m).activateRipple();
      },
      deactivateInputRipple: () => {
        s(m) && s(m).deactivateRipple();
      },
      deregisterInteractionHandler: (b, S) => v.off(f, b, S),
      registerInteractionHandler: (b, S) => v.on(f, b, S)
    }),
    !0
  ), s(d).init(), () => {
    var b;
    (b = s(d)) == null || b.destroy(), v.clear();
  }));
  function h() {
    return u;
  }
  var p = { getElement: h }, _ = Qb();
  He(_, (b, S) => ({ class: b, ...S }), [
    () => Me({
      "mdc-form-field": !0,
      "mdc-form-field--align-end": i() === "end",
      "mdc-form-field--nowrap": a(),
      [r()]: !0
    }),
    () => Bn(l, ["label$"])
  ]);
  var y = de(_);
  Se(y, () => e.children ?? he);
  var T = Ie(y, 2);
  He(T, (b) => ({ for: o(), ...b }), [() => it(l, "label$")]);
  var I = de(T);
  return Se(I, () => e.label ?? he), Ae(T, (b) => f = b, () => f), Pe(T, (b, S) => X == null ? void 0 : X(b, S), c), Ae(_, (b) => u = b, () => u), Pe(_, (b, S) => X == null ? void 0 : X(b, S), n), w(t, _), we(p);
}
var $b = (t, e) => {
  var n;
  t.stopPropagation(), (n = e.onClick) == null || n.call(e, t);
}, e_ = /* @__PURE__ */ fe('<button class="icon-button svelte-jv2py4"><!></button>');
function t_(t, e) {
  xe(e, !0);
  let n = g(e, "tooltipSide", 3, "top"), r = g(e, "showDelay", 3, 1e3), i = g(e, "fillColor", 3, "var(--mdc-theme-primary)"), a = g(e, "size", 3, "25px"), o = /* @__PURE__ */ pe(() => `fill: ${i()}; margin: 0; width: ${a()}; height: ${a()};`);
  La(t, {
    get content() {
      return e.tooltip;
    },
    get hoverDelay() {
      return r();
    },
    get side() {
      return n();
    },
    children: (c, l) => {
      var u = e_();
      u.__click = [$b, e];
      var d = de(u);
      {
        var v = (m) => {
          ud(m, {
            get svgStyles() {
              return s(o);
            }
          });
        }, f = (m) => {
          var h = te(), p = Z(h);
          {
            var _ = (T) => {
              cb(T, {
                get svgStyles() {
                  return s(o);
                }
              });
            }, y = (T) => {
              var I = te(), b = Z(I);
              {
                var S = (x) => {
                  ld(x, {
                    get svgStyles() {
                      return s(o);
                    }
                  });
                }, E = (x) => {
                  var A = te(), C = Z(A);
                  {
                    var P = (F) => {
                      lb(F, {
                        get svgStyles() {
                          return s(o);
                        }
                      });
                    }, z = (F) => {
                      var W = te(), R = Z(W);
                      {
                        var L = (k) => {
                          vb(k, {
                            get svgStyles() {
                              return s(o);
                            }
                          });
                        }, q = (k) => {
                          var K = te(), ne = Z(K);
                          {
                            var N = (O) => {
                              gb(O, {
                                get svgStyles() {
                                  return s(o);
                                }
                              });
                            }, D = (O) => {
                              var le = te(), re = Z(le);
                              {
                                var M = (U) => {
                                  bb(U, {
                                    get svgStyles() {
                                      return s(o);
                                    }
                                  });
                                }, V = (U) => {
                                  var J = te(), $ = Z(J);
                                  {
                                    var ce = (ee) => {
                                      yb(ee, {
                                        get svgStyles() {
                                          return s(o);
                                        }
                                      });
                                    }, Ce = (ee) => {
                                      var ae = yt();
                                      Le(() => $e(ae, `Unsupported supported type: ${e.type ?? ""}`)), w(ee, ae);
                                    };
                                    oe(
                                      $,
                                      (ee) => {
                                        e.type === "star" ? ee(ce) : ee(Ce, !1);
                                      },
                                      !0
                                    );
                                  }
                                  w(U, J);
                                };
                                oe(
                                  re,
                                  (U) => {
                                    e.type === "close" ? U(M) : U(V, !1);
                                  },
                                  !0
                                );
                              }
                              w(O, le);
                            };
                            oe(
                              ne,
                              (O) => {
                                e.type === "link-off" ? O(N) : O(D, !1);
                              },
                              !0
                            );
                          }
                          w(k, K);
                        };
                        oe(
                          R,
                          (k) => {
                            e.type === "wand-stars" ? k(L) : k(q, !1);
                          },
                          !0
                        );
                      }
                      w(F, W);
                    };
                    oe(
                      C,
                      (F) => {
                        e.type === "visibility" ? F(P) : F(z, !1);
                      },
                      !0
                    );
                  }
                  w(x, A);
                };
                oe(
                  b,
                  (x) => {
                    e.type === "edit" ? x(S) : x(E, !1);
                  },
                  !0
                );
              }
              w(T, I);
            };
            oe(
              p,
              (T) => {
                e.type === "duplicate" ? T(_) : T(y, !1);
              },
              !0
            );
          }
          w(m, h);
        };
        oe(d, (m) => {
          e.type === "delete" ? m(v) : m(f, !1);
        });
      }
      Le(() => gr(u, "aria-label", e.tooltip)), w(c, u);
    },
    $$slots: { default: !0 }
  }), we();
}
wn(["click"]);
function Ds(t, e, n) {
  return e in t ? Object.defineProperty(t, e, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = n, t;
}
var n_ = Object.freeze({
  // This flag exists as a workaround for issue 454 (basically a browser bug) - seems like these rect values take time to update when in grid layout. Setting it to true can cause strange behaviour in the REPL for non-grid zones, see issue 470
  USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT: "USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT"
});
Ds({}, n_.USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT, !1);
var Qa, fu = {
  DND_ZONE_ACTIVE: "dnd-zone-active",
  DND_ZONE_DRAG_DISABLED: "dnd-zone-drag-disabled"
};
Qa = {}, Ds(Qa, fu.DND_ZONE_ACTIVE, "Tab to one the items and press space-bar or enter to start dragging it"), Ds(Qa, fu.DND_ZONE_DRAG_DISABLED, "This is a disabled drag and drop list");
function r_(t) {
  return t * t * t;
}
function cd(t) {
  const e = t - 1;
  return e * e * e + 1;
}
function i_(t, { from: e, to: n }, r = {}) {
  var { delay: i = 0, duration: a = (E) => Math.sqrt(E) * 120, easing: o = cd } = r, c = getComputedStyle(t), l = c.transform === "none" ? "" : c.transform, [u, d] = c.transformOrigin.split(" ").map(parseFloat);
  u /= t.clientWidth, d /= t.clientHeight;
  var v = a_(t), f = t.clientWidth / n.width / v, m = t.clientHeight / n.height / v, h = e.left + e.width * u, p = e.top + e.height * d, _ = n.left + n.width * u, y = n.top + n.height * d, T = (h - _) * f, I = (p - y) * m, b = e.width / n.width, S = e.height / n.height;
  return {
    delay: i,
    duration: typeof a == "function" ? a(Math.sqrt(T * T + I * I)) : a,
    easing: o,
    css: (E, x) => {
      var A = x * T, C = x * I, P = E + x * b, z = E + x * S;
      return `transform: ${l} translate(${A}px, ${C}px) scale(${P}, ${z});`;
    }
  };
}
function a_(t) {
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
function o_(t) {
  const e = t - 1;
  return e * e * e + 1;
}
function hu(t) {
  const e = typeof t == "string" && t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
  return e ? [parseFloat(e[1]), e[2] || "px"] : [
    /** @type {number} */
    t,
    "px"
  ];
}
function Eo(t, { delay: e = 0, duration: n = 400, easing: r = o_, x: i = 0, y: a = 0, opacity: o = 0 } = {}) {
  const c = getComputedStyle(t), l = +c.opacity, u = c.transform === "none" ? "" : c.transform, d = l * (1 - o), [v, f] = hu(i), [m, h] = hu(a);
  return {
    delay: e,
    duration: n,
    easing: r,
    css: (p, _) => `
			transform: ${u} translate(${(1 - p) * v}${f}, ${(1 - p) * m}${h});
			opacity: ${l - d * _}`
  };
}
wn([
  "click",
  "keydown",
  "pointerdown",
  "pointerup",
  "pointermove"
]);
function s_(t, e) {
  var n;
  (n = e()) == null || n();
}
var l_ = /* @__PURE__ */ fe('<div class="detail svelte-4xu36c"> </div>'), u_ = /* @__PURE__ */ fe('<div class="toast-card svelte-4xu36c"><div class="icon svelte-4xu36c"><!></div> <div class="content svelte-4xu36c"><div class="summary svelte-4xu36c"> </div> <!></div> <button class="close svelte-4xu36c"><!></button></div>');
function c_(t, e) {
  xe(e, !0);
  let n = g(e, "onClose", 3, () => {
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
  var a = u_(), o = de(a), c = de(o);
  Ls(c, {
    class: "material-icons",
    children: (p, _) => {
      var y = yt();
      Le(() => $e(y, r[e.type])), w(p, y);
    },
    $$slots: { default: !0 }
  });
  var l = Ie(o, 2), u = de(l), d = de(u), v = Ie(u, 2);
  {
    var f = (p) => {
      var _ = l_(), y = de(_);
      Le(() => $e(y, e.detail)), w(p, _);
    };
    oe(v, (p) => {
      e.detail && p(f);
    });
  }
  var m = Ie(l, 2);
  m.__click = [s_, n];
  var h = de(m);
  Ls(h, {
    class: "material-icons",
    children: (p, _) => {
      var y = yt("close");
      w(p, y);
    },
    $$slots: { default: !0 }
  }), Le(() => {
    pt(a, `--color:${i[e.type] ?? ""}`), $e(d, e.summary);
  }), vo(1, a, () => Eo, () => ({ x: 0, y: 30, duration: 150, easing: r_ })), vo(2, a, () => Eo, () => ({ x: 50, y: 0, duration: 150, easing: cd })), w(t, a), we();
}
wn(["click"]);
const d_ = 4e3;
function f_() {
  let t = ye({ items: [] }), e = 0;
  const n = (i) => {
    t.items = t.items.filter((a) => a.id !== i);
  }, r = (i, a, o, c = d_) => {
    const l = e++, u = { id: l, summary: a, detail: o, type: i };
    return t.items = [...t.items, u], setTimeout(
      () => {
        n(l);
      },
      c
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
const Sa = f_();
var h_ = /* @__PURE__ */ fe("<div><!></div>"), v_ = /* @__PURE__ */ fe('<div class="toast-host svelte-11vwiay"></div>');
function m_(t, e) {
  xe(e, !1);
  const n = Sa.toasts;
  bh();
  var r = v_();
  Qn(r, 13, () => n.items, (i) => i.id, (i, a) => {
    var o = h_(), c = de(o);
    c_(c, {
      get summary() {
        return s(a).summary;
      },
      get detail() {
        return s(a).detail;
      },
      get type() {
        return s(a).type;
      },
      onClose: () => Sa.remove(s(a).id)
    }), gh(o, () => i_, null), w(i, o);
  }), w(t, r), we();
}
var g_ = (t, e) => {
  t.stopPropagation(), e.onOpen();
}, p_ = (t, e) => {
  t.stopPropagation(), e.onRemove();
}, b_ = /* @__PURE__ */ fe('<button type="button" style="all: unset; display: flex; align-items: center; justify-content: center;" class="svelte-1mybgc7"><!></button>'), __ = /* @__PURE__ */ fe('<span class="filter-badge__seperator svelte-1mybgc7">|</span> <span class="filter-badge__value svelte-1mybgc7"> </span> <span class="filter-badge__arrow-down"><!></span>', 1), y_ = /* @__PURE__ */ fe('<button type="button"><div class="filter-badge__icon svelte-1mybgc7"><!></div> <span class="filter-badge__label svelte-1mybgc7"> </span> <!></button>');
function I_(t, e) {
  xe(e, !0);
  let n = /* @__PURE__ */ pe(() => !!e.value);
  var r = y_();
  r.__click = [g_, e];
  var i = de(r), a = de(i);
  {
    var o = (f) => {
      La(f, {
        content: "Remove Filter",
        hoverDelay: 500,
        side: "top",
        children: (m, h) => {
          var p = b_();
          p.__click = [p_, e];
          var _ = de(p);
          nl(_, {
            svgStyles: "fill: grey; height: filt-content; width: fit-content;"
          }), w(m, p);
        },
        $$slots: { default: !0 }
      });
    }, c = (f) => {
      La(f, {
        content: "Add Filter",
        hoverDelay: 501,
        side: "top",
        children: (m, h) => {
          Eb(m, {
            svgStyles: "fill: grey; height: filt-content; width: fit-content;"
          });
        },
        $$slots: { default: !0 }
      });
    };
    oe(a, (f) => {
      s(n) ? f(o) : f(c, !1);
    });
  }
  var l = Ie(i, 2), u = de(l), d = Ie(l, 2);
  {
    var v = (f) => {
      var m = __(), h = Ie(Z(m), 2), p = de(h), _ = Ie(h, 2), y = de(_);
      fb(y, { svgStyles: "fill: gray;" }), Le(() => $e(p, e.value)), w(f, m);
    };
    oe(d, (f) => {
      s(n) && f(v);
    });
  }
  Le(() => {
    Xs(r, 1, `filter-badge ${s(n) ? "filter-badge--active" : "filter-badge--inactive"}`, "svelte-1mybgc7"), $e(u, e.label);
  }), w(t, r), we();
}
wn(["click"]);
var E_ = /* @__PURE__ */ fe('<div><input/> <div class="mdc-checkbox__background"><svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24"><path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"></path></svg> <div class="mdc-checkbox__mixedmark"></div></div> <div class="mdc-checkbox__ripple"></div></div>');
function S_(t, e) {
  xe(e, !0);
  let n = () => {
  };
  function r(ee) {
    return ee === n;
  }
  let i = g(e, "use", 19, () => []), a = g(e, "class", 3, ""), o = g(e, "style", 3, ""), c = g(e, "disabled", 15, !1), l = g(e, "touch", 3, !1), u = g(e, "indeterminate", 15, n), d = g(e, "group", 11, n), v = g(e, "checked", 15, n), f = g(e, "value", 3, null), m = g(e, "valueKey", 3, n), h = g(e, "input$use", 19, () => []), p = g(e, "input$class", 3, ""), _ = /* @__PURE__ */ Ge(e, [
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
  ]), y, T = /* @__PURE__ */ _e(void 0), I = /* @__PURE__ */ _e(void 0), b = ye({}), S = ye({}), E = ye({}), x = /* @__PURE__ */ _e(!1), A = ye(be("SMUI:generic:input:props") ?? {}), C = /* @__PURE__ */ _e(ye(r(d()) ? r(v()) ? !1 : !!v() : d().findIndex((ee) => ee === f()) !== -1)), P = be("SMUI:checkbox:context"), z = be("SMUI:data-table:row:header"), F = v(), W = r(d()) ? [] : [...d()], R = s(C);
  Te(() => {
    let ee = !1;
    if (!r(d()))
      if (R !== s(C)) {
        const ae = d().findIndex((Re) => Re === f());
        s(C) && ae === -1 ? d().push(f()) : !s(C) && ae !== -1 && d().splice(ae, 1), ee = !0;
      } else {
        const ae = W.findIndex((Oe) => Oe === f()), Re = d().findIndex((Oe) => Oe === f());
        ae > -1 && Re === -1 ? (Q(C, !1), ee = !0) : Re > -1 && ae === -1 && (Q(C, !0), ee = !0);
      }
    r(v()) ? R !== s(C) && (ee = !0) : (v() !== (u() ? null : s(C)) || s(C) !== R) && (v() === F && s(C) !== R ? (v(s(C)), r(u()) || u(!1)) : Q(C, !!v()), ee = !0), s(I) && (r(u()) ? s(I).indeterminate && (s(I).indeterminate = !1, ee = !0) : !u() && s(I).indeterminate ? (s(I).indeterminate = !1, ee = !0) : u() && !s(I).indeterminate && (s(I).indeterminate = !0, Q(C, !1), ee = !0)), F = v(), W = r(d()) ? [] : [...d()], R = s(C), ee && s(T) && s(T).handleChange();
  });
  const L = be("SMUI:generic:input:mount"), q = be("SMUI:generic:input:unmount"), k = be("SMUI:checkbox:mount"), K = be("SMUI:checkbox:unmount");
  at(() => {
    if (s(I) == null)
      throw new Error("Checkbox is not defined.");
    s(I).indeterminate = !r(u()) && u(), Q(
      T,
      new Rb({
        addClass: ne,
        forceLayout: () => M().offsetWidth,
        hasNativeControl: () => !0,
        isAttachedToDOM: () => !!M().parentNode,
        isChecked: () => s(C),
        isIndeterminate: () => r(u()) ? !1 : u(),
        removeClass: N,
        removeNativeControlAttr: le,
        setNativeControlAttr: O,
        setNativeControlDisabled: (ae) => c(ae)
      }),
      !0
    );
    const ee = {
      _smui_checkbox_accessor: !0,
      get element() {
        return M();
      },
      get checked() {
        return s(C);
      },
      set checked(ae) {
        s(C) !== ae && Q(C, ae, !0);
      },
      get indeterminate() {
        return r(u()) ? !1 : u();
      },
      set indeterminate(ae) {
        u(ae);
      },
      activateRipple() {
        c() || Q(x, !0);
      },
      deactivateRipple() {
        Q(x, !1);
      }
    };
    return L && L(ee), k && k(ee), s(T).init(), () => {
      var ae;
      q && q(ee), K && K(ee), (ae = s(T)) == null || ae.destroy();
    };
  });
  function ne(ee) {
    b[ee] || (b[ee] = !0);
  }
  function N(ee) {
    (!(ee in b) || b[ee]) && (b[ee] = !1);
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
    return A && A.id;
  }
  function M() {
    return y;
  }
  var V = { getId: re, getElement: M }, U = E_(), J = (ee) => {
    var ae;
    s(T) && s(T).handleAnimationEnd(), (ae = e.onanimationend) == null || ae.call(e, ee);
  };
  He(U, (ee, ae, Re) => ({ class: ee, style: ae, ...Re, onanimationend: J }), [
    () => Me({
      "mdc-checkbox": !0,
      "mdc-checkbox--disabled": c(),
      "mdc-checkbox--touch": l(),
      "mdc-data-table__header-row-checkbox": P === "data-table" && z,
      "mdc-data-table__row-checkbox": P === "data-table" && !z,
      ...b,
      [a()]: !0
    }),
    () => Object.entries(S).map(([ee, ae]) => `${ee}: ${ae};`).concat([o()]).join(" "),
    () => Bn(_, ["input$"])
  ]);
  var $ = de(U), ce = (ee) => {
    var ae;
    Ke(M(), "blur", ee), (ae = e.input$onblur) == null || ae.call(e, ee);
  }, Ce = (ee) => {
    var ae;
    Ke(M(), "focus", ee), (ae = e.input$onfocus) == null || ae.call(e, ee);
  };
  return He(
    $,
    (ee, ae, Re, Oe) => ({
      class: ee,
      type: "checkbox",
      ...A,
      disabled: c(),
      value: ae,
      "data-indeterminate": Re,
      ...E,
      ...Oe,
      onblur: ce,
      onfocus: Ce
    }),
    [
      () => Me({ "mdc-checkbox__native-control": !0, [p()]: !0 }),
      () => r(m()) ? f() : m(),
      () => !r(u()) && u() ? "true" : void 0,
      () => it(_, "input$")
    ],
    void 0,
    void 0,
    !0
  ), Ae($, (ee) => Q(I, ee), () => s(I)), Pe($, (ee, ae) => X == null ? void 0 : X(ee, ae), h), di(() => ph($, () => s(C), (ee) => Q(C, ee))), Ae(U, (ee) => y = ee, () => y), Pe(U, (ee, ae) => X == null ? void 0 : X(ee, ae), i), Pe(U, (ee, ae) => Yt == null ? void 0 : Yt(ee, ae), () => ({
    unbounded: !0,
    addClass: ne,
    removeClass: N,
    addStyle: D,
    active: s(x),
    eventTarget: s(I)
  })), w(t, U), we(V);
}
var A_ = /* @__PURE__ */ fe('<div style="display: flex; flex-direction: column;"></div>');
function C_(t, e) {
  xe(e, !0);
  let n = g(e, "data", 19, () => []), r = g(e, "values", 31, () => ye([]));
  var i = A_();
  Qn(i, 21, n, Ri, (a, o) => {
    Jb(a, {
      label: (l) => {
        var u = yt();
        Le(() => $e(u, s(o).label)), w(l, u);
      },
      children: (l, u) => {
        S_(l, {
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
  }), w(t, i), we();
}
var T_ = (t) => t.stopPropagation(), x_ = /* @__PURE__ */ fe('<div class="custom-menu svelte-58jwwf"><div class="menu-arrow svelte-58jwwf"></div> <h4 class="svelte-58jwwf"> </h4> <div class="custom-menu__content"><!></div> <!></div>'), w_ = /* @__PURE__ */ fe('<div class="filter-wrapper svelte-58jwwf"><!> <!></div>'), L_ = /* @__PURE__ */ fe('<div class="oscd-filters svelte-58jwwf"></div>');
function O_(t, e) {
  xe(e, !0);
  let n = g(e, "filters", 15), r = /* @__PURE__ */ _e(null), i = [], a = [];
  function o(h) {
    var p;
    if (!(h.value === void 0 || h.value === null || h.value === ""))
      switch (h.type) {
        case "text":
          return String(h.value);
        case "number":
          return String(h.value);
        case "select":
          const _ = (p = h.options) == null ? void 0 : p.find((I) => I.value === h.value);
          return _ ? _.label : String(h.value);
        case "multiselect":
          if (!Array.isArray(h.value) || h.value.length === 0) return;
          const y = h.value.map((I) => {
            var S;
            const b = (S = h.options) == null ? void 0 : S.find((E) => E.value === I);
            return b ? b.label : String(I);
          }), T = 1;
          return y.length <= T ? y.join(", ") : `${y.slice(0, T).join(", ")} +${y.length - T} more`;
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
  function c(h) {
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
    s(r) === h ? Q(r, null) : (Q(r, h, !0), a[h] = c(n()[h]));
  }
  function u() {
    Q(r, null), a[s(r)] = void 0;
  }
  function d(h) {
    var p;
    n(n().map((_, y) => y === h ? { ..._, value: a[h] } : _)), (p = e.onfiltersChanged) == null || p.call(e, [...n()]), Q(r, null);
  }
  function v(h) {
    var p;
    n(n().map((_, y) => y === h ? { ..._, value: void 0 } : _)), a[h] = void 0, (p = e.onfiltersChanged) == null || p.call(e, [...n()]), u();
  }
  function f(h) {
    i.some((_) => _ && _.contains(h.target)) || u();
  }
  at(() => {
    document.addEventListener("click", f);
  }), yn(() => {
    document.removeEventListener("click", f);
  }), Te(() => {
  });
  var m = L_();
  Qn(m, 23, n, (h) => h.key, (h, p, _) => {
    var y = w_(), T = de(y);
    {
      let S = /* @__PURE__ */ pe(() => o(s(p)));
      I_(T, {
        get label() {
          return s(p).label;
        },
        get value() {
          return s(S);
        },
        onOpen: () => l(s(_)),
        onRemove: () => v(s(_))
      });
    }
    var I = Ie(T, 2);
    {
      var b = (S) => {
        var E = x_();
        E.__click = [T_];
        var x = Ie(de(E), 2), A = de(x), C = Ie(x, 2), P = de(C);
        {
          var z = (R) => {
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
                return a[s(_)];
              },
              set value(L) {
                a[s(_)] = L;
              }
            });
          }, F = (R) => {
            var L = te(), q = Z(L);
            {
              var k = (ne) => {
                {
                  let N = /* @__PURE__ */ pe(() => {
                    var D;
                    return (D = s(p)) == null ? void 0 : D.options;
                  });
                  Sp(ne, {
                    get label() {
                      return s(p).label;
                    },
                    get data() {
                      return s(N);
                    },
                    get value() {
                      return a[s(_)];
                    },
                    set value(D) {
                      a[s(_)] = D;
                    }
                  });
                }
              }, K = (ne) => {
                var N = te(), D = Z(N);
                {
                  var O = (re) => {
                    {
                      let M = /* @__PURE__ */ pe(() => {
                        var V;
                        return (V = s(p)) == null ? void 0 : V.options;
                      });
                      C_(re, {
                        get data() {
                          return s(M);
                        },
                        get values() {
                          return a[s(_)];
                        },
                        set values(V) {
                          a[s(_)] = V;
                        }
                      });
                    }
                  }, le = (re) => {
                    var M = te(), V = Z(M);
                    {
                      var U = ($) => {
                        Cb($, {
                          get value() {
                            return a[s(_)];
                          },
                          set value(ce) {
                            a[s(_)] = ce;
                          }
                        });
                      }, J = ($) => {
                        var ce = te(), Ce = Z(ce);
                        {
                          var ee = (ae) => {
                            wb(ae, {
                              get value() {
                                return a[s(_)];
                              },
                              set value(Re) {
                                a[s(_)] = Re;
                              }
                            });
                          };
                          oe(
                            Ce,
                            (ae) => {
                              s(p).type === "datetime" && ae(ee);
                            },
                            !0
                          );
                        }
                        w($, ce);
                      };
                      oe(
                        V,
                        ($) => {
                          s(p).type === "date" ? $(U) : $(J, !1);
                        },
                        !0
                      );
                    }
                    w(re, M);
                  };
                  oe(
                    D,
                    (re) => {
                      s(p).type === "multiselect" ? re(O) : re(le, !1);
                    },
                    !0
                  );
                }
                w(ne, N);
              };
              oe(
                q,
                (ne) => {
                  s(p).type === "select" ? ne(k) : ne(K, !1);
                },
                !0
              );
            }
            w(R, L);
          };
          oe(P, (R) => {
            s(p).type === "text" || s(p).type === "number" ? R(z) : R(F, !1);
          });
        }
        var W = Ie(C, 2);
        _o(W, {
          variant: "unelevated",
          style: "background: var(--secondary); color: white; width: 100%;",
          onclick: () => d(s(_)),
          children: (R, L) => {
            var q = yt("Apply");
            w(R, q);
          },
          $$slots: { default: !0 }
        }), Le(() => $e(A, `Filter by ${s(p).label ?? ""}`)), vo(2, E, () => Eo, () => ({ y: 5, duration: 120 })), vo(1, E, () => Eo, () => ({ y: -5, duration: 120 })), w(S, E);
      };
      oe(I, (S) => {
        s(r) === s(_) && S(b);
      });
    }
    Ae(y, (S, E) => i[E] = S, (S) => i == null ? void 0 : i[S], () => [s(_)]), w(h, y);
  }), w(t, m), we();
}
wn(["click"]);
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
var dd = {
  ANIMATING: "mdc-tab-scroller--animating",
  SCROLL_AREA_SCROLL: "mdc-tab-scroller__scroll-area--scroll",
  SCROLL_TEST: "mdc-tab-scroller__test"
}, R_ = {
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
var rl = (
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
var D_ = (
  /** @class */
  function(t) {
    qe(e, t);
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
  }(rl)
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
var M_ = (
  /** @class */
  function(t) {
    qe(e, t);
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
  }(rl)
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
var P_ = (
  /** @class */
  function(t) {
    qe(e, t);
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
  }(rl)
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
var H_ = (
  /** @class */
  function(t) {
    qe(e, t);
    function e(n) {
      var r = t.call(this, ge(ge({}, e.defaultAdapter), n)) || this;
      return r.isAnimating = !1, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return dd;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return R_;
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
        return this.adapter.setScrollAreaScrollLeft(n), new M_(this.adapter);
      var i = this.adapter.computeScrollAreaClientRect(), a = this.adapter.computeScrollContentClientRect(), o = Math.round(a.right - i.right);
      return this.adapter.setScrollAreaScrollLeft(n), o === r ? new P_(this.adapter) : new D_(this.adapter);
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
function N_(t, e) {
  if (e === void 0 && (e = !0), e && typeof os < "u")
    return os;
  var n = t.createElement("div");
  n.classList.add(dd.SCROLL_TEST), t.body.appendChild(n);
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
var U_ = {
  ACTIVE: "mdc-tab-indicator--active",
  FADE: "mdc-tab-indicator--fade",
  NO_TRANSITION: "mdc-tab-indicator--no-transition"
}, F_ = {
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
var dr = (
  /** @class */
  function(t) {
    qe(e, t);
    function e(n) {
      return t.call(this, ge(ge({}, e.defaultAdapter), n)) || this;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return U_;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return F_;
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
var k_ = (
  /** @class */
  function(t) {
    qe(e, t);
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return e.prototype.activate = function() {
      this.adapter.addClass(dr.cssClasses.ACTIVE);
    }, e.prototype.deactivate = function() {
      this.adapter.removeClass(dr.cssClasses.ACTIVE);
    }, e;
  }(dr)
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
var vu = (
  /** @class */
  function(t) {
    qe(e, t);
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return e.prototype.activate = function(n) {
      if (!n) {
        this.adapter.addClass(dr.cssClasses.ACTIVE);
        return;
      }
      var r = this.computeContentClientRect(), i = n.width / r.width, a = n.left - r.left;
      this.adapter.addClass(dr.cssClasses.NO_TRANSITION), this.adapter.setContentStyleProperty("transform", "translateX(" + a + "px) scaleX(" + i + ")"), this.computeContentClientRect(), this.adapter.removeClass(dr.cssClasses.NO_TRANSITION), this.adapter.addClass(dr.cssClasses.ACTIVE), this.adapter.setContentStyleProperty("transform", "");
    }, e.prototype.deactivate = function() {
      this.adapter.removeClass(dr.cssClasses.ACTIVE);
    }, e;
  }(dr)
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
var Ja = {
  ACTIVE: "mdc-tab--active"
}, pa = {
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
var B_ = (
  /** @class */
  function(t) {
    qe(e, t);
    function e(n) {
      var r = t.call(this, ge(ge({}, e.defaultAdapter), n)) || this;
      return r.focusOnActivate = !0, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Ja;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return pa;
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
      return this.adapter.hasClass(Ja.ACTIVE);
    }, e.prototype.setFocusOnActivate = function(n) {
      this.focusOnActivate = n;
    }, e.prototype.activate = function(n) {
      this.adapter.addClass(Ja.ACTIVE), this.adapter.setAttr(pa.ARIA_SELECTED, "true"), this.adapter.setAttr(pa.TABINDEX, "0"), this.adapter.activateIndicator(n), this.focusOnActivate && this.adapter.focus();
    }, e.prototype.deactivate = function() {
      this.isActive() && (this.adapter.removeClass(Ja.ACTIVE), this.adapter.setAttr(pa.ARIA_SELECTED, "false"), this.adapter.setAttr(pa.TABINDEX, "-1"), this.adapter.deactivateIndicator());
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
var V_ = (
  /** @class */
  function(t) {
    qe(e, t);
    function e(n) {
      var r = t.call(this, ge(ge({}, e.defaultAdapter), n)) || this;
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
      var i = this.isRTL(), a = this.adapter.getTabListLength() - 1, o = r === Ot.END_KEY, c = r === Ot.ARROW_LEFT_KEY && !i || r === Ot.ARROW_RIGHT_KEY && i, l = r === Ot.ARROW_RIGHT_KEY && !i || r === Ot.ARROW_LEFT_KEY && i, u = n;
      return o ? u = a : c ? u -= 1 : l ? u += 1 : u = 0, u < 0 ? u = a : u > a && (u = 0), u;
    }, e.prototype.calculateScrollIncrement = function(n, r, i, a) {
      var o = this.adapter.getTabDimensionsAtIndex(r), c = o.contentLeft - i - a, l = o.contentRight - i, u = l - Hn.EXTRA_SCROLL_AMOUNT, d = c + Hn.EXTRA_SCROLL_AMOUNT;
      return r < n ? Math.min(u, 0) : Math.max(d, 0);
    }, e.prototype.calculateScrollIncrementRTL = function(n, r, i, a, o) {
      var c = this.adapter.getTabDimensionsAtIndex(r), l = o - c.contentLeft - i, u = o - c.contentRight - i - a, d = u + Hn.EXTRA_SCROLL_AMOUNT, v = l - Hn.EXTRA_SCROLL_AMOUNT;
      return r > n ? Math.max(d, 0) : Math.min(v, 0);
    }, e.prototype.findAdjacentTabIndexClosestToEdge = function(n, r, i, a) {
      var o = r.rootLeft - i, c = r.rootRight - i - a, l = o + c, u = o < 0 || l < 0, d = c > 0 || l > 0;
      return u ? n - 1 : d ? n + 1 : -1;
    }, e.prototype.findAdjacentTabIndexClosestToEdgeRTL = function(n, r, i, a, o) {
      var c = o - r.rootLeft - a - i, l = o - r.rootRight - i, u = c + l, d = c > 0 || u > 0, v = l < 0 || u < 0;
      return d ? n + 1 : v ? n - 1 : -1;
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
        var c = this.calculateScrollIncrement(n, o, r, i);
        this.adapter.incrementScroll(c);
      }
    }, e.prototype.scrollIntoViewImplRTL = function(n) {
      var r = this.adapter.getScrollPosition(), i = this.adapter.getOffsetWidth(), a = this.adapter.getTabDimensionsAtIndex(n), o = this.adapter.getScrollContentWidth(), c = this.findAdjacentTabIndexClosestToEdgeRTL(n, a, r, i, o);
      if (this.indexIsInRange(c)) {
        var l = this.calculateScrollIncrementRTL(n, c, r, i, o);
        this.adapter.incrementScroll(l);
      }
    }, e;
  }(xt)
), G_ = /* @__PURE__ */ fe("<div><div><div><!></div></div></div>");
function j_(t, e) {
  xe(e, !0);
  const { matches: n } = ra;
  let r = g(e, "use", 19, () => []), i = g(e, "class", 3, ""), a = g(e, "align", 3, void 0), o = g(e, "scrollArea$use", 19, () => []), c = g(e, "scrollArea$class", 3, ""), l = g(e, "scrollContent$use", 19, () => []), u = g(e, "scrollContent$class", 3, ""), d = /* @__PURE__ */ Ge(e, [
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
  ]), v, f = /* @__PURE__ */ _e(void 0), m, h, p = ye({}), _ = ye({}), y = ye({}), T = ye({});
  at(() => (Q(
    f,
    new H_({
      eventTargetMatchesSelector: (M, V) => n(M, V),
      addClass: I,
      removeClass: b,
      addScrollAreaClass: S,
      setScrollAreaStyleProperty: E,
      setScrollContentStyleProperty: x,
      getScrollContentStyleValue: A,
      setScrollAreaScrollLeft: (M) => m.scrollLeft = M,
      getScrollAreaScrollLeft: () => m.scrollLeft,
      getScrollContentOffsetWidth: () => h.offsetWidth,
      getScrollAreaOffsetWidth: () => m.offsetWidth,
      computeScrollAreaClientRect: () => m.getBoundingClientRect(),
      computeScrollContentClientRect: () => h.getBoundingClientRect(),
      computeHorizontalScrollbarHeight: () => N_(document)
    }),
    !0
  ), s(f).init(), () => {
    var M;
    (M = s(f)) == null || M.destroy();
  }));
  function I(M) {
    p[M] || (p[M] = !0);
  }
  function b(M) {
    (!(M in p) || p[M]) && (p[M] = !1);
  }
  function S(M) {
    _[M] || (_[M] = !0);
  }
  function E(M, V) {
    y[M] != V && (V === "" || V == null ? delete y[M] : y[M] = V);
  }
  function x(M, V) {
    T[M] != V && (V === "" || V == null ? delete T[M] : T[M] = V);
  }
  function A(M) {
    return M in T ? T[M] : getComputedStyle(h).getPropertyValue(M);
  }
  function C() {
    if (s(f) == null)
      throw new Error("Instance is undefined.");
    return s(f).getScrollPosition();
  }
  function P() {
    return h.offsetWidth;
  }
  function z(M) {
    var V;
    (V = s(f)) == null || V.incrementScroll(M);
  }
  function F(M) {
    var V;
    (V = s(f)) == null || V.scrollTo(M);
  }
  function W() {
    return v;
  }
  var R = {
    getScrollPosition: C,
    getScrollContentWidth: P,
    incrementScroll: z,
    scrollTo: F,
    getElement: W
  }, L = G_();
  He(L, (M, V) => ({ class: M, ...V }), [
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
  var q = de(L), k = (M) => {
    var V;
    s(f) && s(f).handleInteraction(), (V = e.scrollArea$onwheel) == null || V.call(e, M);
  }, K = (M) => {
    var V;
    s(f) && s(f).handleInteraction(), (V = e.scrollArea$ontouchstart) == null || V.call(e, M);
  }, ne = (M) => {
    var V;
    s(f) && s(f).handleInteraction(), (V = e.scrollArea$onpointerdown) == null || V.call(e, M);
  }, N = (M) => {
    var V;
    s(f) && s(f).handleInteraction(), (V = e.scrollArea$onmousedown) == null || V.call(e, M);
  }, D = (M) => {
    var V;
    s(f) && s(f).handleInteraction(), (V = e.scrollArea$onkeydown) == null || V.call(e, M);
  };
  He(
    q,
    (M, V, U) => ({
      class: M,
      style: V,
      ...U,
      onwheel: k,
      ontouchstart: K,
      onpointerdown: ne,
      onmousedown: N,
      onkeydown: D
    }),
    [
      () => Me({
        "mdc-tab-scroller__scroll-area": !0,
        ..._,
        [c()]: !0
      }),
      () => Object.entries(y).map(([M, V]) => `${M}: ${V};`).join(" "),
      () => it(d, "scrollArea$")
    ]
  );
  var O = de(q), le = (M) => {
    var V;
    s(f) && s(f).handleTransitionEnd(M), (V = e.scrollContent$ontransitionend) == null || V.call(e, M);
  };
  He(
    O,
    (M, V, U) => ({
      class: M,
      style: V,
      ...U,
      ontransitionend: le
    }),
    [
      () => Me({
        "mdc-tab-scroller__scroll-content": !0,
        [u()]: !0
      }),
      () => Object.entries(T).map(([M, V]) => `${M}: ${V};`).join(" "),
      () => it(d, "scrollContent$")
    ]
  );
  var re = de(O);
  return Se(re, () => e.children ?? he), Ae(O, (M) => h = M, () => h), Pe(O, (M, V) => X == null ? void 0 : X(M, V), l), Ae(q, (M) => m = M, () => m), Pe(q, (M, V) => X == null ? void 0 : X(M, V), o), Ae(L, (M) => v = M, () => v), Pe(L, (M, V) => X == null ? void 0 : X(M, V), r), w(t, L), we(R);
}
var W_ = /* @__PURE__ */ fe("<div><!></div>");
function q_(t, e) {
  xe(e, !0);
  let n = g(e, "use", 19, () => []), r = g(e, "class", 3, ""), i = g(e, "tabs", 19, () => []), a = g(e, "key", 3, (R) => R), o = g(e, "focusOnActivate", 3, !0), c = g(e, "focusOnProgrammatic", 3, !1), l = g(e, "useAutomaticActivation", 3, !0), u = g(e, "active", 15), d = g(e, "tabindex", 3, 0), v = /* @__PURE__ */ Ge(e, [
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
  ]), f, m = /* @__PURE__ */ _e(void 0), h, p = /* @__PURE__ */ _e(ye(u() == null ? -1 : i().findIndex((R) => u() && a()(R) === a()(u())))), _ = ye({}), y = /* @__PURE__ */ _e(/* @__PURE__ */ new WeakMap()), T = !1;
  ue("SMUI:tab:focusOnActivate", o()), ue("SMUI:tab:initialActive", {
    active: u() == null ? null : a()(u()),
    key: a()
  }), Te(() => {
    (u() == null && s(p) !== -1 || u() != null && s(p) === -1 || u() != null && a()(u()) !== a()(i()[s(p)])) && (Q(p, i().findIndex((R) => u() && a()(R) === a()(u())), !0), s(m) && (T = !c(), s(m).activateTab(s(p)), T = !1));
  }), Te(() => {
    if (i().length) {
      const R = i()[0] instanceof Object ? s(y).get(i()[0]) : _[i()[0]];
      R && R.forceAccessible(s(p) === -1);
    }
  });
  let I = !1;
  Te(() => {
    if (!s(m)) {
      I = !1;
      return;
    }
    I || (I = !0, s(m).setUseAutomaticActivation(l()));
  }), ue("SMUI:tab:mount", (R) => {
    S(R.tabId, R);
  }), ue("SMUI:tab:unmount", (R) => {
    E(R.tabId);
  }), at(() => (Q(
    m,
    new V_({
      scrollTo: (R) => h.scrollTo(R),
      incrementScroll: (R) => h.incrementScroll(R),
      getScrollPosition: () => h.getScrollPosition(),
      getScrollContentWidth: () => h.getScrollContentWidth(),
      getOffsetWidth: () => A().offsetWidth,
      isRTL: () => getComputedStyle(A()).getPropertyValue("direction") === "rtl",
      setActiveTab: (R) => {
        var L;
        u(i()[R]), Q(p, R, !0), (L = s(m)) == null || L.activateTab(R);
      },
      activateTabAtIndex: (R, L) => {
        var q;
        return (q = b(i()[R])) == null ? void 0 : q.activate(L, T);
      },
      deactivateTabAtIndex: (R) => {
        var L;
        return (L = b(i()[R])) == null ? void 0 : L.deactivate();
      },
      focusTabAtIndex: (R) => {
        var L;
        return (L = b(i()[R])) == null ? void 0 : L.focus();
      },
      getTabIndicatorClientRectAtIndex: (R) => {
        var L;
        return ((L = b(i()[R])) == null ? void 0 : L.computeIndicatorClientRect()) ?? new DOMRect();
      },
      getTabDimensionsAtIndex: (R) => {
        var L;
        return ((L = b(i()[R])) == null ? void 0 : L.computeDimensions()) ?? { rootLeft: 0, rootRight: 0, contentLeft: 0, contentRight: 0 };
      },
      getPreviousActiveTabIndex: () => {
        var R;
        for (let L = 0; L < i().length; L++)
          if ((R = b(i()[L])) != null && R.active)
            return L;
        return -1;
      },
      getFocusedTabIndex: () => {
        const R = i().map((q) => {
          var k;
          return (k = b(q)) == null ? void 0 : k.element;
        }), L = document.activeElement;
        return R.indexOf(L);
      },
      getIndexOfTabById: (R) => i().findIndex((L) => a()(L) === a()(R)),
      getTabListLength: () => i().length,
      notifyTabActivated: (R) => Ke(A(), "SMUITabBarActivated", { index: R })
    }),
    !0
  ), s(m).init(), () => {
    var R;
    (R = s(m)) == null || R.destroy();
  }));
  function b(R) {
    return R instanceof Object ? s(y).get(R) : _[R];
  }
  function S(R, L) {
    R instanceof Object ? (s(y).set(R, L), Q(y, s(y))) : _[R] = L;
  }
  function E(R) {
    R instanceof Object ? (s(y).delete(R), Q(y, s(y))) : delete _[R];
  }
  function x(R) {
    var L;
    (L = s(m)) == null || L.scrollIntoView(R);
  }
  function A() {
    return f;
  }
  var C = { scrollIntoView: x, getElement: A }, P = W_(), z = (R) => {
    var L;
    s(m) && s(m).handleKeyDown(R), (L = e.onkeydown) == null || L.call(e, R);
  }, F = (R) => {
    var L;
    s(m) && s(m).handleTabInteraction(R), (L = e.onSMUITabInteracted) == null || L.call(e, R);
  };
  He(
    P,
    (R, L) => ({
      class: R,
      role: "tablist",
      tabindex: d(),
      ...L,
      onkeydown: z,
      onSMUITabInteracted: F
    }),
    [
      () => Me({ "mdc-tab-bar": !0, [r()]: !0 }),
      () => Bn(v, ["tabScroller$"])
    ]
  );
  var W = de(P);
  {
    let R = /* @__PURE__ */ pe(() => it(v, "tabScroller$"));
    Ae(
      j_(W, Je(() => s(R), {
        children: (L, q) => {
          var k = te(), K = Z(k);
          Qn(K, 17, i, (ne) => a()(ne), (ne, N) => {
            var D = te(), O = Z(D);
            Se(O, () => e.tab, () => s(N)), w(ne, D);
          }), w(L, k);
        },
        $$slots: { default: !0 }
      })),
      (L) => h = L,
      () => h
    );
  }
  return Ae(P, (R) => f = R, () => f), Pe(P, (R, L) => X == null ? void 0 : X(R, L), n), w(t, P), we(C);
}
var z_ = /* @__PURE__ */ fe("<span><span><!></span></span>");
function K_(t, e) {
  xe(e, !0);
  let n = g(e, "use", 19, () => []), r = g(e, "class", 3, ""), i = g(e, "active", 15, !1), a = g(e, "type", 3, "underline"), o = g(e, "transition", 3, "slide"), c = g(e, "content$use", 19, () => []), l = g(e, "content$class", 3, ""), u = /* @__PURE__ */ Ge(e, [
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
  ]), d, v = /* @__PURE__ */ _e(void 0), f, m = /* @__PURE__ */ _e(ye({})), h = /* @__PURE__ */ _e(ye({})), p = ye([]), _ = o();
  Te(() => {
    _ !== o() && (_ = o(), s(v) && s(v).destroy(), Q(m, {}, !0), Q(h, {}, !0), Q(v, y(), !0), s(v).init());
  }), ec(() => {
    p.length && requestAnimationFrame(() => {
      const R = p.shift() ?? [];
      for (const L of R)
        L();
    });
  }), at(() => (Q(v, y(), !0), s(v).init(), () => {
    var R;
    (R = s(v)) == null || R.destroy();
  }));
  function y() {
    const R = {
      fade: k_,
      slide: vu
    }[o()] || vu;
    return new R({
      addClass: (...L) => T(() => I(...L)),
      removeClass: (...L) => T(() => b(...L)),
      computeContentClientRect: A,
      setContentStyleProperty: (...L) => T(() => S(...L))
    });
  }
  function T(R) {
    p.length ? p[p.length - 1].push(R) : R();
  }
  function I(R) {
    s(m)[R] || (s(m)[R] = !0);
  }
  function b(R) {
    (!(R in s(m)) || s(m)[R]) && (s(m)[R] = !1);
  }
  function S(R, L) {
    s(h)[R] != L && (L === "" || L == null ? delete s(h)[R] : s(h)[R] = L);
  }
  function E(R) {
    var L;
    i(!0), (L = s(v)) == null || L.activate(R);
  }
  function x() {
    var R;
    i(!1), (R = s(v)) == null || R.deactivate();
  }
  function A() {
    return p.push([]), f.getBoundingClientRect();
  }
  function C() {
    return d;
  }
  var P = { activate: E, deactivate: x, computeContentClientRect: A, getElement: C }, z = z_();
  He(z, (R, L) => ({ class: R, ...L }), [
    () => Me({
      "mdc-tab-indicator": !0,
      "mdc-tab-indicator--active": i(),
      "mdc-tab-indicator--fade": o() === "fade",
      ...s(m),
      [r()]: !0
    }),
    () => Bn(u, ["content$"])
  ]);
  var F = de(z);
  He(
    F,
    (R, L, q) => ({
      class: R,
      style: L,
      "aria-hidden": a() === "icon" ? "true" : void 0,
      ...q
    }),
    [
      () => Me({
        "mdc-tab-indicator__content": !0,
        "mdc-tab-indicator__content--underline": a() === "underline",
        "mdc-tab-indicator__content--icon": a() === "icon",
        [l()]: !0
      }),
      () => Object.entries(s(h)).map(([R, L]) => `${R}: ${L};`).join(" "),
      () => it(u, "content$")
    ]
  );
  var W = de(F);
  return Se(W, () => e.children ?? he), Ae(F, (R) => f = R, () => f), Pe(F, (R, L) => X == null ? void 0 : X(R, L), c), Ae(z, (R) => d = R, () => d), Pe(z, (R, L) => X == null ? void 0 : X(R, L), n), w(t, z), we(P);
}
var X_ = /* @__PURE__ */ fe('<span><!> <!></span> <!> <span class="mdc-tab__ripple"></span>', 1);
function Y_(t, e) {
  xe(e, !0);
  const n = (V) => {
    {
      let U = /* @__PURE__ */ pe(() => it(p, "tabIndicator$"));
      Ae(
        K_(V, Je(() => s(U), {
          get active() {
            return s(C);
          },
          set active(J) {
            Q(C, J, !0);
          },
          children: (J, $) => {
            var ce = te(), Ce = Z(ce);
            Se(Ce, () => e.tabIndicator ?? he), w(J, ce);
          },
          $$slots: { default: !0 }
        })),
        (J) => I = J,
        () => I
      );
    }
  };
  let r = g(e, "use", 19, () => []), i = g(e, "class", 3, ""), a = g(e, "style", 3, ""), o = g(e, "ripple", 3, !0), c = g(e, "stacked", 3, !1), l = g(e, "minWidth", 3, !1), u = g(e, "indicatorSpanOnlyContent", 3, !1), d = g(e, "href", 3, void 0), v = g(e, "content$use", 19, () => []), f = g(e, "content$class", 3, ""), m = g(e, "component", 3, Br), h = g(e, "tag", 19, () => d() == null ? "button" : "a"), p = /* @__PURE__ */ Ge(e, [
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
  ]), _, y = /* @__PURE__ */ _e(void 0), T, I, b = ye({}), S = ye({}), E = ye({}), x = be("SMUI:tab:focusOnActivate");
  const A = be("SMUI:tab:initialActive");
  let C = /* @__PURE__ */ _e(ye(A.active != null && A.key(e.tab) === A.active)), P = /* @__PURE__ */ _e(!1);
  if (ue("SMUI:label:context", "tab"), ue("SMUI:icon:context", "tab"), !e.tab)
    throw new Error("The tab property is required! It should be passed down from the TabBar to the Tab.");
  let z = !1;
  Te(() => {
    if (!s(y)) {
      z = !1;
      return;
    }
    z || (z = !0, s(y).setFocusOnActivate(x));
  });
  const F = be("SMUI:tab:mount"), W = be("SMUI:tab:unmount");
  at(() => {
    Q(
      y,
      new B_({
        setAttr: K,
        addClass: L,
        removeClass: q,
        hasClass: R,
        activateIndicator: (U) => I.activate(U),
        deactivateIndicator: () => I.deactivate(),
        notifyInteracted: () => Ke(O(), "SMUITabInteracted", { tabId: e.tab }),
        getOffsetLeft: () => O().offsetLeft,
        getOffsetWidth: () => O().offsetWidth,
        getContentOffsetLeft: () => T.offsetLeft,
        getContentOffsetWidth: () => T.offsetWidth,
        focus: D
      }),
      !0
    );
    const V = {
      tabId: e.tab,
      get element() {
        return O();
      },
      get active() {
        return s(C);
      },
      forceAccessible(U) {
        Q(P, U, !0);
      },
      computeIndicatorClientRect: () => I.computeContentClientRect(),
      computeDimensions: () => {
        if (s(y) == null)
          throw new Error("Instance is undefined.");
        return s(y).computeDimensions();
      },
      focus: D,
      activate: ne,
      deactivate: N
    };
    return F && F(V), s(y).init(), () => {
      var U;
      W && W(V), (U = s(y)) == null || U.destroy();
    };
  });
  function R(V) {
    return V in b ? b[V] : O().classList.contains(V);
  }
  function L(V) {
    b[V] || (b[V] = !0);
  }
  function q(V) {
    (!(V in b) || b[V]) && (b[V] = !1);
  }
  function k(V, U) {
    S[V] != U && (U === "" || U == null ? delete S[V] : S[V] = U);
  }
  function K(V, U) {
    E[V] !== U && (E[V] = U);
  }
  function ne(V, U) {
    var J, $, ce;
    Q(C, !0), U && ((J = s(y)) == null || J.setFocusOnActivate(!1)), ($ = s(y)) == null || $.activate(V), U && ((ce = s(y)) == null || ce.setFocusOnActivate(x));
  }
  function N() {
    var V;
    Q(C, !1), (V = s(y)) == null || V.deactivate();
  }
  function D() {
    O().focus();
  }
  function O() {
    return _.getElement();
  }
  var le = { activate: ne, deactivate: N, focus: D, getElement: O }, re = te(), M = Z(re);
  {
    let V = /* @__PURE__ */ pe(() => [
      [
        Yt,
        {
          ripple: o(),
          unbounded: !1,
          addClass: L,
          removeClass: q,
          addStyle: k
        }
      ],
      ...r()
    ]), U = /* @__PURE__ */ pe(() => Me({
      "mdc-tab": !0,
      "mdc-tab--active": s(C),
      "mdc-tab--stacked": c(),
      "mdc-tab--min-width": l(),
      ...b,
      [i()]: !0
    })), J = /* @__PURE__ */ pe(() => Object.entries(S).map(([ee, ae]) => `${ee}: ${ae};`).concat([a()]).join(" ")), $ = /* @__PURE__ */ pe(() => s(C) ? "true" : "false"), ce = /* @__PURE__ */ pe(() => s(C) || s(P) ? "0" : "-1"), Ce = /* @__PURE__ */ pe(() => Bn(p, ["content$", "tabIndicator$"]));
    nr(M, m, (ee, ae) => {
      Ae(
        ae(ee, Je(
          {
            get tag() {
              return h();
            },
            get use() {
              return s(V);
            },
            get class() {
              return s(U);
            },
            get style() {
              return s(J);
            },
            role: "tab",
            get "aria-selected"() {
              return s($);
            },
            get tabindex() {
              return s(ce);
            },
            get href() {
              return d();
            }
          },
          () => E,
          () => s(Ce),
          {
            onclick: (Re) => {
              var Oe;
              (Oe = e.onclick) == null || Oe.call(e, Re), !Re.defaultPrevented && s(y) && s(y).handleClick();
            },
            children: (Re, Oe) => {
              var ke = X_(), ze = Z(ke);
              He(ze, (Be, ut) => ({ class: Be, ...ut }), [
                () => Me({ "mdc-tab__content": !0, [f()]: !0 }),
                () => it(p, "content$")
              ]);
              var Fe = de(ze);
              Se(Fe, () => e.children ?? he);
              var B = Ie(Fe, 2);
              {
                var Y = (Be) => {
                  n(Be);
                };
                oe(B, (Be) => {
                  u() && Be(Y);
                });
              }
              Ae(ze, (Be) => T = Be, () => T), Pe(ze, (Be, ut) => X == null ? void 0 : X(Be, ut), v);
              var ve = Ie(ze, 2);
              {
                var De = (Be) => {
                  n(Be);
                };
                oe(ve, (Be) => {
                  u() || Be(De);
                });
              }
              w(Re, ke);
            },
            $$slots: { default: !0 }
          }
        )),
        (Re) => _ = Re,
        () => _
      );
    });
  }
  return w(t, re), we(le);
}
var Z_ = (t, e) => e(), Q_ = /* @__PURE__ */ fe('<button class="filter-tab__tabs__clear svelte-nj6sif">Clear Filters</button>'), J_ = /* @__PURE__ */ fe('<div class="filter-tab__tabs svelte-nj6sif"><h4 style="all:unset; font-weight: bold; font-size: 1rem;">Filter by</h4> <!> <!></div>'), $_ = /* @__PURE__ */ fe('<div class="filter-tab svelte-nj6sif"><!> <!> <!></div>');
function ey(t, e) {
  xe(e, !0);
  let n = g(e, "filters", 31, () => ye([])), r = g(e, "onFilterChange", 3, (I) => {
  }), i = g(e, "activeNavigationTab", 31, () => ye(e.navigationTabs ? e.navigationTabs[0] : void 0)), a = g(e, "searchText", 15, ""), o = g(e, "searchLabel", 3, "Search"), c = g(e, "searchPlaceholder", 3, "Type to search..."), l = g(e, "onSearchInput", 3, () => {
  }), u = g(e, "searchDisabled", 3, !1), d = /* @__PURE__ */ pe(() => n().some((I) => I.value !== void 0 && I.value !== null && I.value !== "")), v = () => {
    n(n().map((I) => ({ ...I, value: void 0 }))), r()(n());
  };
  var f = $_(), m = de(f);
  {
    var h = (I) => {
      jg(I, {
        oninput: () => l()(),
        icon: "search",
        get label() {
          return o();
        },
        get placeholder() {
          return c();
        },
        variant: "outlined",
        styles: "background: var(--oscd-base2,#fff); max-width: 650px;",
        get value() {
          return a();
        },
        set value(b) {
          a(b);
        }
      });
    };
    oe(m, (I) => {
      u() || I(h);
    });
  }
  var p = Ie(m, 2);
  {
    var _ = (I) => {
      q_(I, {
        get tabs() {
          return e.navigationTabs;
        },
        get active() {
          return i();
        },
        set active(S) {
          i(S);
        },
        tab: (S, E = he) => {
          Y_(S, {
            get tab() {
              return E();
            },
            minWidth: !0,
            children: (x, A) => {
              $c(x, {
                children: (C, P) => {
                  var z = yt();
                  Le(() => $e(z, E())), w(C, z);
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
      e.navigationTabs && I(_);
    });
  }
  var y = Ie(p, 2);
  {
    var T = (I) => {
      var b = J_(), S = Ie(de(b), 2);
      O_(S, {
        onfiltersChanged: (A) => r()(A),
        get filters() {
          return n();
        },
        set filters(A) {
          n(A);
        }
      });
      var E = Ie(S, 2);
      {
        var x = (A) => {
          var C = Q_();
          C.__click = [Z_, v], w(A, C);
        };
        oe(E, (A) => {
          s(d) && A(x);
        });
      }
      w(I, b);
    };
    oe(y, (I) => {
      n() && n().length > 0 && I(T);
    });
  }
  w(t, f), we();
}
wn(["click"]);
var ty = /* @__PURE__ */ fe('<div><div class="mdc-linear-progress__buffer"><div class="mdc-linear-progress__buffer-bar"></div> <div class="mdc-linear-progress__buffer-dots"></div></div> <div class="mdc-linear-progress__bar mdc-linear-progress__primary-bar"><span class="mdc-linear-progress__bar-inner"></span></div> <div class="mdc-linear-progress__bar mdc-linear-progress__secondary-bar"><span class="mdc-linear-progress__bar-inner"></span></div></div>');
function ny(t, e) {
  xe(e, !0);
  const [n, r] = rr();
  let i = g(e, "use", 19, () => []), a = g(e, "class", 3, ""), o = g(e, "style", 3, ""), c = g(e, "indeterminate", 3, !1), l = g(e, "closed", 3, !1), u = g(e, "progress", 3, 0), d = g(e, "buffer", 3, void 0), v = /* @__PURE__ */ Ge(e, [
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
  ]), f, m = /* @__PURE__ */ _e(void 0), h = ye({}), p = ye({}), _ = ye({}), y = ye({}), T = ye({}), I = be("SMUI:linear-progress:context"), b = be("SMUI:linear-progress:closed");
  Te(() => {
    b && Nn(b, l());
  }), Te(() => {
    s(m) && s(m).isDeterminate() !== !c() && s(m).setDeterminate(!c());
  }), Te(() => {
    s(m) && s(m).getProgress() !== u() && s(m).setProgress(u());
  }), Te(() => {
    s(m) && (d() == null ? s(m).setBuffer(1) : s(m).setBuffer(d()));
  }), Te(() => {
    s(m) && (l() ? s(m).close() : s(m).open());
  }), at(() => (Q(
    m,
    new Db({
      addClass: E,
      forceLayout: () => {
        W().getBoundingClientRect();
      },
      setBufferBarStyle: z,
      setPrimaryBarStyle: F,
      hasClass: S,
      removeAttribute: C,
      removeClass: x,
      setAttribute: A,
      setStyle: P,
      attachResizeObserver: (D) => {
        const O = window.ResizeObserver;
        if (O) {
          const le = new O(D);
          return le.observe(W()), le;
        }
        return null;
      },
      getWidth: () => W().offsetWidth
    }),
    !0
  ), s(m).init(), () => {
    var D;
    (D = s(m)) == null || D.destroy();
  }));
  function S(D) {
    return D in h ? h[D] : W().classList.contains(D);
  }
  function E(D) {
    h[D] || (h[D] = !0);
  }
  function x(D) {
    (!(D in h) || h[D]) && (h[D] = !1);
  }
  function A(D, O) {
    p[D] !== O && (p[D] = O);
  }
  function C(D) {
    (!(D in p) || p[D] != null) && (p[D] = void 0);
  }
  function P(D, O) {
    _[D] != O && (O === "" || O == null ? delete _[D] : _[D] = O);
  }
  function z(D, O) {
    y[D] != O && (O === "" || O == null ? delete y[D] : y[D] = O);
  }
  function F(D, O) {
    T[D] != O && (O === "" || O == null ? delete T[D] : T[D] = O);
  }
  function W() {
    return f;
  }
  var R = { getElement: W }, L = ty(), q = (D) => {
    var O;
    s(m) && s(m).handleTransitionEnd(), (O = e.ontransitionend) == null || O.call(e, D);
  };
  He(
    L,
    (D, O) => ({
      class: D,
      style: O,
      role: "progressbar",
      "aria-valuemin": 0,
      "aria-valuemax": 1,
      "aria-valuenow": c() ? void 0 : u(),
      ...p,
      ...v,
      ontransitionend: q
    }),
    [
      () => Me({
        "mdc-linear-progress": !0,
        "mdc-linear-progress--indeterminate": c(),
        "mdc-linear-progress--closed": l(),
        "mdc-data-table__linear-progress": I === "data-table",
        ...h,
        [a()]: !0
      }),
      () => Object.entries(_).map(([D, O]) => `${D}: ${O};`).concat([o()]).join(" ")
    ]
  );
  var k = de(L), K = de(k), ne = Ie(k, 2);
  Ae(L, (D) => f = D, () => f), Pe(L, (D, O) => X == null ? void 0 : X(D, O), i), Le(
    (D, O) => {
      pt(K, D), pt(ne, O);
    },
    [
      () => Object.entries(y).map(([D, O]) => `${D}: ${O};`).join(" "),
      () => Object.entries(T).map(([D, O]) => `${D}: ${O};`).join(" ")
    ]
  ), w(t, L);
  var N = we(R);
  return r(), N;
}
var ry = /* @__PURE__ */ Rt('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor" class="svelte-1mj71p3"><path d="M12 4l-8 8h16l-8-8z"></path></svg>'), iy = /* @__PURE__ */ Rt('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor" class="svelte-1mj71p3"><path d="M12 20l8-8H4l8 8z"></path></svg>'), ay = /* @__PURE__ */ fe('<div class="custom-cell-container svelte-1mj71p3"><div class="cell-header svelte-1mj71p3"><span class="header-title svelte-1mj71p3"> </span> <!></div></div>'), oy = (t, e) => e(), sy = /* @__PURE__ */ fe('<input type="text" class="svelte-1mj71p3"/>'), ly = (t, e) => e(), uy = /* @__PURE__ */ fe('<input type="number" class="svelte-1mj71p3"/>'), cy = /* @__PURE__ */ fe("<!> <!>", 1), dy = /* @__PURE__ */ fe("<!> <!>", 1), fy = /* @__PURE__ */ fe('<div class="cell-actions svelte-1mj71p3"></div>'), hy = /* @__PURE__ */ fe("<!> <!>", 1);
function mu(t, e) {
  xe(e, !0);
  const n = () => kn(_, "$sortColumn", a), r = () => kn(y, "$sortDirection", a), i = () => kn(p, "$filteredData", a), [a, o] = rr();
  let c = g(e, "loadingDone", 15, !0), l = g(e, "label", 19, zp), u = g(e, "columnDefs", 19, () => []), d = g(e, "rowData", 31, () => ye([])), v = g(e, "rowActions", 19, () => []), f = g(e, "searchInputLabel", 3, "Search"), m = g(e, "emptyText", 3, "No data available"), h = ye({ name: "", color: "", number: "" }), p = Bt([]), _ = Bt(null), y = Bt(null), T = /* @__PURE__ */ pe(() => u().some((E) => E.filter));
  e.store.store.subscribe((E) => {
    d([...E]), I();
  });
  function I() {
    let E = d().filter((x) => u().every((A) => {
      const C = h[A.field], P = A.filterValueGetter ? A.filterValueGetter(x) : x[A.field];
      return C ? A.filterType === "number" ? P == C : P.toString().toLowerCase().includes(C.toLowerCase()) : !0;
    }));
    E = b(E), p.set(E);
  }
  function b(E) {
    let x, A;
    return _.subscribe((C) => x = C), y.subscribe((C) => A = C), !x || !A ? E : E.sort((C, P) => {
      let z = C[x], F = P[x];
      return z == null && (z = ""), F == null && (F = ""), A === "asc" ? z.toString().localeCompare(F.toString()) : F.toString().localeCompare(z.toString());
    });
  }
  function S(E) {
    _.update((x) => {
      if (x === E)
        y.update((A) => A === "asc" ? "desc" : A === "desc" ? null : "asc");
      else
        return y.set("asc"), E;
      return E;
    }), I();
  }
  p.set(d()), Nb(t, {
    get "table$aria-label"() {
      return l();
    },
    style: "max-width: 100%; width: 100%;",
    progress: (x) => {
      ny(x, {
        indeterminate: !0,
        "aria-label": "Data is being loaded...",
        get closed() {
          return c();
        },
        set closed(A) {
          c(A);
        }
      });
    },
    children: (x, A) => {
      var C = hy(), P = Z(C);
      Fb(P, {
        children: (F, W) => {
          var R = dy(), L = Z(R);
          Za(L, {
            class: "header-title-row",
            children: (K, ne) => {
              var N = te(), D = Z(N);
              Qn(D, 17, u, Ri, (O, le) => {
                ga(O, {
                  onclick: () => s(le).sortable && S(s(le).field),
                  get style() {
                    return s(le).headerStyle;
                  },
                  children: (re, M) => {
                    var V = ay(), U = de(V), J = de(U), $ = de(J), ce = Ie(J, 2);
                    {
                      var Ce = (ee) => {
                        var ae = te(), Re = Z(ae);
                        {
                          var Oe = (ke) => {
                            var ze = te(), Fe = Z(ze);
                            {
                              var B = (ve) => {
                                var De = ry();
                                w(ve, De);
                              }, Y = (ve) => {
                                var De = te(), Be = Z(De);
                                {
                                  var ut = (vt) => {
                                    var me = iy();
                                    w(vt, me);
                                  };
                                  oe(
                                    Be,
                                    (vt) => {
                                      r() === "desc" && vt(ut);
                                    },
                                    !0
                                  );
                                }
                                w(ve, De);
                              };
                              oe(Fe, (ve) => {
                                r() === "asc" ? ve(B) : ve(Y, !1);
                              });
                            }
                            w(ke, ze);
                          };
                          oe(Re, (ke) => {
                            n() === s(le).field && r() !== null && ke(Oe);
                          });
                        }
                        w(ee, ae);
                      };
                      oe(ce, (ee) => {
                        s(le).sortable && ee(Ce);
                      });
                    }
                    Le(() => {
                      pt(V, `min-width: ${s(le).minWidth ?? 0 ?? ""}`), $e($, s(le).headerName);
                    }), w(re, V);
                  },
                  $$slots: { default: !0 }
                });
              }), w(K, N);
            },
            $$slots: { default: !0 }
          });
          var q = Ie(L, 2);
          {
            var k = (K) => {
              Za(K, {
                class: "header-filter-row",
                children: (ne, N) => {
                  var D = te(), O = Z(D);
                  Qn(O, 17, u, Ri, (le, re) => {
                    ga(le, {
                      children: (M, V) => {
                        var U = te(), J = Z(U);
                        {
                          var $ = (ce) => {
                            var Ce = cy(), ee = Z(Ce);
                            {
                              var ae = (ke) => {
                                var ze = sy();
                                ze.__input = [oy, I], Le(() => gr(ze, "placeholder", `${f()} ${s(re).headerName}`)), Ta(ze, () => h[s(re).field], (Fe) => h[s(re).field] = Fe), w(ke, ze);
                              };
                              oe(ee, (ke) => {
                                s(re).filterType === "text" && ke(ae);
                              });
                            }
                            var Re = Ie(ee, 2);
                            {
                              var Oe = (ke) => {
                                var ze = uy();
                                ze.__input = [ly, I], Le(() => gr(ze, "placeholder", `${f()} ${s(re).headerName}`)), Ta(ze, () => h[s(re).field], (Fe) => h[s(re).field] = Fe), w(ke, ze);
                              };
                              oe(Re, (ke) => {
                                s(re).filterType === "number" && ke(Oe);
                              });
                            }
                            w(ce, Ce);
                          };
                          oe(J, (ce) => {
                            s(re).filter && ce($);
                          });
                        }
                        w(M, U);
                      },
                      $$slots: { default: !0 }
                    });
                  }), w(ne, D);
                },
                $$slots: { default: !0 }
              });
            };
            oe(q, (K) => {
              s(T) && K(k);
            });
          }
          w(F, R);
        },
        $$slots: { default: !0 }
      });
      var z = Ie(P, 2);
      Bb(z, {
        children: (F, W) => {
          var R = te(), L = Z(R);
          {
            var q = (K) => {
              Za(K, {
                children: (ne, N) => {
                  ga(ne, {
                    class: "oscd-basic-table__empty-row",
                    get colspan() {
                      return u().length;
                    },
                    style: "text-align:center; padding: 24px; opacity: 0.6; background: rgba(0,0,0,0.05);",
                    children: (D, O) => {
                      var le = yt();
                      Le(() => $e(le, m())), w(D, le);
                    },
                    $$slots: { default: !0 }
                  });
                },
                $$slots: { default: !0 }
              });
            }, k = (K) => {
              var ne = te(), N = Z(ne);
              Qn(N, 1, i, Ri, (D, O) => {
                Za(D, {
                  children: (le, re) => {
                    var M = te(), V = Z(M);
                    Qn(V, 17, u, (U) => U.field, (U, J) => {
                      var $ = te(), ce = Z($);
                      {
                        var Ce = (ae) => {
                          ga(ae, {
                            children: (Re, Oe) => {
                              var ke = fy();
                              Qn(ke, 21, v, Ri, (ze, Fe) => {
                                var B = te(), Y = Z(B);
                                {
                                  var ve = (Be) => {
                                    La(Be, {
                                      get content() {
                                        return s(Fe).tooltip;
                                      },
                                      hoverDelay: 500,
                                      children: (ut, vt) => {
                                        {
                                          let me = /* @__PURE__ */ pe(() => s(Fe).disabled(s(O)));
                                          ug(ut, {
                                            get iconComponent() {
                                              return s(Fe).iconComponent;
                                            },
                                            get iconStyles() {
                                              return s(Fe).iconStyles;
                                            },
                                            callback: () => s(Fe).callback(s(O)),
                                            get disabled() {
                                              return s(me);
                                            }
                                          });
                                        }
                                      },
                                      $$slots: { default: !0 }
                                    });
                                  }, De = (Be) => {
                                    La(Be, {
                                      get content() {
                                        return s(Fe).tooltip;
                                      },
                                      hoverDelay: 500,
                                      children: (ut, vt) => {
                                        {
                                          let me = /* @__PURE__ */ pe(() => s(Fe).disabled(s(O)));
                                          ed(ut, {
                                            class: "button",
                                            variant: "raised",
                                            callback: () => s(Fe).callback(s(O)),
                                            get disabled() {
                                              return s(me);
                                            },
                                            children: (j, G) => {
                                              var ie = te(), Ne = Z(ie);
                                              {
                                                var ft = (bt) => {
                                                  Yp(bt, { svgStyles: "margin: unset" });
                                                }, It = (bt) => {
                                                  var Vt = te(), yr = Z(Vt);
                                                  {
                                                    var mt = (St) => {
                                                      nl(St, { svgStyles: "margin: unset" });
                                                    }, Ht = (St) => {
                                                      var On = te(), _i = Z(On);
                                                      {
                                                        var jn = (et) => {
                                                          Jp(et, { svgStyles: "margin: unset" });
                                                        }, Xe = (et) => {
                                                          var tt = te(), Nt = Z(tt);
                                                          {
                                                            var vn = (dt) => {
                                                              eb(dt, { svgStyles: "margin: unset" });
                                                            }, ot = (dt) => {
                                                              var wt = te(), nt = Z(wt);
                                                              {
                                                                var Dt = (Mt) => {
                                                                  ib(Mt, { svgStyles: "margin: unset" });
                                                                }, Rn = (Mt) => {
                                                                  var Et = te(), Ut = Z(Et);
                                                                  {
                                                                    var ln = (un) => {
                                                                      ld(un, { svgStyles: "margin: unset" });
                                                                    }, Gt = (un) => {
                                                                      var Jt = te(), Wn = Z(Jt);
                                                                      {
                                                                        var Vr = (zt) => {
                                                                          ud(zt, { svgStyles: "margin: unset" });
                                                                        }, cn = (zt) => {
                                                                          nb(zt, { svgStyles: "margin: unset" });
                                                                        };
                                                                        oe(
                                                                          Wn,
                                                                          (zt) => {
                                                                            s(Fe).icon === "delete" ? zt(Vr) : zt(cn, !1);
                                                                          },
                                                                          !0
                                                                        );
                                                                      }
                                                                      w(un, Jt);
                                                                    };
                                                                    oe(
                                                                      Ut,
                                                                      (un) => {
                                                                        s(Fe).icon === "edit" ? un(ln) : un(Gt, !1);
                                                                      },
                                                                      !0
                                                                    );
                                                                  }
                                                                  w(Mt, Et);
                                                                };
                                                                oe(
                                                                  nt,
                                                                  (Mt) => {
                                                                    s(Fe).icon === "remove" ? Mt(Dt) : Mt(Rn, !1);
                                                                  },
                                                                  !0
                                                                );
                                                              }
                                                              w(dt, wt);
                                                            };
                                                            oe(
                                                              Nt,
                                                              (dt) => {
                                                                s(Fe).icon === "find-in-page" ? dt(vn) : dt(ot, !1);
                                                              },
                                                              !0
                                                            );
                                                          }
                                                          w(et, tt);
                                                        };
                                                        oe(
                                                          _i,
                                                          (et) => {
                                                            s(Fe).icon === "download" ? et(jn) : et(Xe, !1);
                                                          },
                                                          !0
                                                        );
                                                      }
                                                      w(St, On);
                                                    };
                                                    oe(
                                                      yr,
                                                      (St) => {
                                                        s(Fe).icon === "cancel" ? St(mt) : St(Ht, !1);
                                                      },
                                                      !0
                                                    );
                                                  }
                                                  w(bt, Vt);
                                                };
                                                oe(Ne, (bt) => {
                                                  s(Fe).icon === "add" ? bt(ft) : bt(It, !1);
                                                });
                                              }
                                              w(j, ie);
                                            },
                                            $$slots: { default: !0 }
                                          });
                                        }
                                      },
                                      $$slots: { default: !0 }
                                    });
                                  };
                                  oe(Y, (Be) => {
                                    s(Fe).iconComponent ? Be(ve) : Be(De, !1);
                                  });
                                }
                                w(ze, B);
                              }), w(Re, ke);
                            },
                            $$slots: { default: !0 }
                          });
                        }, ee = (ae) => {
                          ga(ae, {
                            get numeric() {
                              return s(J).numeric;
                            },
                            get style() {
                              return s(J).cellStyle;
                            },
                            children: (Re, Oe) => {
                              var ke = te(), ze = Z(ke);
                              {
                                var Fe = (Y) => {
                                  const ve = /* @__PURE__ */ pe(() => s(J).cellRenderer);
                                  var De = te(), Be = Z(De);
                                  nr(Be, () => s(ve), (ut, vt) => {
                                    vt(ut, Je(
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
                                  }), w(Y, De);
                                }, B = (Y) => {
                                  var ve = te(), De = Z(ve);
                                  {
                                    var Be = (vt) => {
                                      var me = yt();
                                      Le((j) => $e(me, j), [
                                        () => s(J).valueFormatter(s(O)[s(J).field])
                                      ]), w(vt, me);
                                    }, ut = (vt) => {
                                      var me = yt();
                                      Le(() => $e(me, s(O)[s(J).field] ?? "")), w(vt, me);
                                    };
                                    oe(
                                      De,
                                      (vt) => {
                                        s(J).valueFormatter ? vt(Be) : vt(ut, !1);
                                      },
                                      !0
                                    );
                                  }
                                  w(Y, ve);
                                };
                                oe(ze, (Y) => {
                                  s(J).cellRenderer ? Y(Fe) : Y(B, !1);
                                });
                              }
                              w(Re, ke);
                            },
                            $$slots: { default: !0 }
                          });
                        };
                        oe(ce, (ae) => {
                          s(J).field === "actions" ? ae(Ce) : ae(ee, !1);
                        });
                      }
                      w(U, $);
                    }), w(le, M);
                  },
                  $$slots: { default: !0 }
                });
              }), w(K, ne);
            };
            oe(L, (K) => {
              i().length === 0 ? K(q) : K(k, !1);
            });
          }
          w(F, R);
        },
        $$slots: { default: !0 }
      }), w(x, C);
    },
    $$slots: { progress: !0, default: !0 }
  }), we(), o();
}
wn(["input"]);
function Tt(t) {
  return typeof t == "function";
}
function il(t) {
  var e = function(r) {
    Error.call(r), r.stack = new Error().stack;
  }, n = t(e);
  return n.prototype = Object.create(Error.prototype), n.prototype.constructor = n, n;
}
var ss = il(function(t) {
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
var ka = function() {
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
            for (var c = kt(o), l = c.next(); !l.done; l = c.next()) {
              var u = l.value;
              u.remove(this);
            }
          } catch (p) {
            e = { error: p };
          } finally {
            try {
              l && !l.done && (n = c.return) && n.call(c);
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
      var v = this._finalizers;
      if (v) {
        this._finalizers = null;
        try {
          for (var f = kt(v), m = f.next(); !m.done; m = f.next()) {
            var h = m.value;
            try {
              gu(h);
            } catch (p) {
              a = a ?? [], p instanceof ss ? a = $n($n([], br(a)), br(p.errors)) : a.push(p);
            }
          }
        } catch (p) {
          r = { error: p };
        } finally {
          try {
            m && !m.done && (i = f.return) && i.call(f);
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
        gu(e);
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
}(), fd = ka.EMPTY;
function hd(t) {
  return t instanceof ka || t && "closed" in t && Tt(t.remove) && Tt(t.add) && Tt(t.unsubscribe);
}
function gu(t) {
  Tt(t) ? t() : t.unsubscribe();
}
var vy = {
  Promise: void 0
}, my = {
  setTimeout: function(t, e) {
    for (var n = [], r = 2; r < arguments.length; r++)
      n[r - 2] = arguments[r];
    return setTimeout.apply(void 0, $n([t, e], br(n)));
  },
  clearTimeout: function(t) {
    return clearTimeout(t);
  },
  delegate: void 0
};
function vd(t) {
  my.setTimeout(function() {
    throw t;
  });
}
function pu() {
}
function oo(t) {
  t();
}
var al = function(t) {
  qe(e, t);
  function e(n) {
    var r = t.call(this) || this;
    return r.isStopped = !1, n ? (r.destination = n, hd(n) && n.add(r)) : r.destination = by, r;
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
}(ka), gy = function() {
  function t(e) {
    this.partialObserver = e;
  }
  return t.prototype.next = function(e) {
    var n = this.partialObserver;
    if (n.next)
      try {
        n.next(e);
      } catch (r) {
        $a(r);
      }
  }, t.prototype.error = function(e) {
    var n = this.partialObserver;
    if (n.error)
      try {
        n.error(e);
      } catch (r) {
        $a(r);
      }
    else
      $a(e);
  }, t.prototype.complete = function() {
    var e = this.partialObserver;
    if (e.complete)
      try {
        e.complete();
      } catch (n) {
        $a(n);
      }
  }, t;
}(), Ms = function(t) {
  qe(e, t);
  function e(n, r, i) {
    var a = t.call(this) || this, o;
    return Tt(n) || !n ? o = {
      next: n ?? void 0,
      error: r ?? void 0,
      complete: i ?? void 0
    } : o = n, a.destination = new gy(o), a;
  }
  return e;
}(al);
function $a(t) {
  vd(t);
}
function py(t) {
  throw t;
}
var by = {
  closed: !0,
  next: pu,
  error: py,
  complete: pu
}, ol = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}();
function sl(t) {
  return t;
}
function _y(t) {
  return t.length === 0 ? sl : t.length === 1 ? t[0] : function(n) {
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
    var i = this, a = Iy(e) ? e : new Ms(e, n, r);
    return oo(function() {
      var o = i, c = o.operator, l = o.source;
      a.add(c ? c.call(a, l) : l ? i._subscribe(a) : i._trySubscribe(a));
    }), a;
  }, t.prototype._trySubscribe = function(e) {
    try {
      return this._subscribe(e);
    } catch (n) {
      e.error(n);
    }
  }, t.prototype.forEach = function(e, n) {
    var r = this;
    return n = bu(n), new n(function(i, a) {
      var o = new Ms({
        next: function(c) {
          try {
            e(c);
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
  }, t.prototype[ol] = function() {
    return this;
  }, t.prototype.pipe = function() {
    for (var e = [], n = 0; n < arguments.length; n++)
      e[n] = arguments[n];
    return _y(e)(this);
  }, t.prototype.toPromise = function(e) {
    var n = this;
    return e = bu(e), new e(function(r, i) {
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
function bu(t) {
  var e;
  return (e = t ?? vy.Promise) !== null && e !== void 0 ? e : Promise;
}
function yy(t) {
  return t && Tt(t.next) && Tt(t.error) && Tt(t.complete);
}
function Iy(t) {
  return t && t instanceof al || yy(t) && hd(t);
}
function Ey(t) {
  return Tt(t == null ? void 0 : t.lift);
}
function Ln(t) {
  return function(e) {
    if (Ey(e))
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
  return new Sy(t, e, n, r, i);
}
var Sy = function(t) {
  qe(e, t);
  function e(n, r, i, a, o, c) {
    var l = t.call(this, n) || this;
    return l.onFinalize = o, l.shouldUnsubscribe = c, l._next = r ? function(u) {
      try {
        r(u);
      } catch (d) {
        n.error(d);
      }
    } : t.prototype._next, l._error = a ? function(u) {
      try {
        a(u);
      } catch (d) {
        n.error(d);
      } finally {
        this.unsubscribe();
      }
    } : t.prototype._error, l._complete = i ? function() {
      try {
        i();
      } catch (u) {
        n.error(u);
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
}(al), Ay = il(function(t) {
  return function() {
    t(this), this.name = "ObjectUnsubscribedError", this.message = "object unsubscribed";
  };
}), Ps = function(t) {
  qe(e, t);
  function e() {
    var n = t.call(this) || this;
    return n.closed = !1, n.currentObservers = null, n.observers = [], n.isStopped = !1, n.hasError = !1, n.thrownError = null, n;
  }
  return e.prototype.lift = function(n) {
    var r = new _u(this, this);
    return r.operator = n, r;
  }, e.prototype._throwIfClosed = function() {
    if (this.closed)
      throw new Ay();
  }, e.prototype.next = function(n) {
    var r = this;
    oo(function() {
      var i, a;
      if (r._throwIfClosed(), !r.isStopped) {
        r.currentObservers || (r.currentObservers = Array.from(r.observers));
        try {
          for (var o = kt(r.currentObservers), c = o.next(); !c.done; c = o.next()) {
            var l = c.value;
            l.next(n);
          }
        } catch (u) {
          i = { error: u };
        } finally {
          try {
            c && !c.done && (a = o.return) && a.call(o);
          } finally {
            if (i) throw i.error;
          }
        }
      }
    });
  }, e.prototype.error = function(n) {
    var r = this;
    oo(function() {
      if (r._throwIfClosed(), !r.isStopped) {
        r.hasError = r.isStopped = !0, r.thrownError = n;
        for (var i = r.observers; i.length; )
          i.shift().error(n);
      }
    });
  }, e.prototype.complete = function() {
    var n = this;
    oo(function() {
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
    var r = this, i = this, a = i.hasError, o = i.isStopped, c = i.observers;
    return a || o ? fd : (this.currentObservers = null, c.push(n), new ka(function() {
      r.currentObservers = null, So(c, n);
    }));
  }, e.prototype._checkFinalizedStatuses = function(n) {
    var r = this, i = r.hasError, a = r.thrownError, o = r.isStopped;
    i ? n.error(a) : o && n.complete();
  }, e.prototype.asObservable = function() {
    var n = new _n();
    return n.source = this, n;
  }, e.create = function(n, r) {
    return new _u(n, r);
  }, e;
}(_n), _u = function(t) {
  qe(e, t);
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
    return (i = (r = this.source) === null || r === void 0 ? void 0 : r.subscribe(n)) !== null && i !== void 0 ? i : fd;
  }, e;
}(Ps), Cy = {
  now: function() {
    return Date.now();
  }
}, Ty = function(t) {
  qe(e, t);
  function e(n, r) {
    return t.call(this) || this;
  }
  return e.prototype.schedule = function(n, r) {
    return this;
  }, e;
}(ka), yu = {
  setInterval: function(t, e) {
    for (var n = [], r = 2; r < arguments.length; r++)
      n[r - 2] = arguments[r];
    return setInterval.apply(void 0, $n([t, e], br(n)));
  },
  clearInterval: function(t) {
    return clearInterval(t);
  },
  delegate: void 0
}, xy = function(t) {
  qe(e, t);
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
    return i === void 0 && (i = 0), yu.setInterval(n.flush.bind(n, this), i);
  }, e.prototype.recycleAsyncId = function(n, r, i) {
    if (i === void 0 && (i = 0), i != null && this.delay === i && this.pending === !1)
      return r;
    r != null && yu.clearInterval(r);
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
}(Ty), Iu = function() {
  function t(e, n) {
    n === void 0 && (n = t.now), this.schedulerActionCtor = e, this.now = n;
  }
  return t.prototype.schedule = function(e, n, r) {
    return n === void 0 && (n = 0), new this.schedulerActionCtor(this, e).schedule(r, n);
  }, t.now = Cy.now, t;
}(), wy = function(t) {
  qe(e, t);
  function e(n, r) {
    r === void 0 && (r = Iu.now);
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
}(Iu), Ly = new wy(xy), Oy = new _n(function(t) {
  return t.complete();
});
function Ry(t) {
  return t && Tt(t.schedule);
}
function md(t) {
  return t[t.length - 1];
}
function gd(t) {
  return Ry(md(t)) ? t.pop() : void 0;
}
function Dy(t, e) {
  return typeof md(t) == "number" ? t.pop() : e;
}
var pd = function(t) {
  return t && typeof t.length == "number" && typeof t != "function";
};
function bd(t) {
  return Tt(t == null ? void 0 : t.then);
}
function _d(t) {
  return Tt(t[ol]);
}
function yd(t) {
  return Symbol.asyncIterator && Tt(t == null ? void 0 : t[Symbol.asyncIterator]);
}
function Id(t) {
  return new TypeError("You provided " + (t !== null && typeof t == "object" ? "an invalid object" : "'" + t + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
}
function My() {
  return typeof Symbol != "function" || !Symbol.iterator ? "@@iterator" : Symbol.iterator;
}
var Ed = My();
function Sd(t) {
  return Tt(t == null ? void 0 : t[Ed]);
}
function Ad(t) {
  return Vh(this, arguments, function() {
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
function Cd(t) {
  return Tt(t == null ? void 0 : t.getReader);
}
function pi(t) {
  if (t instanceof _n)
    return t;
  if (t != null) {
    if (_d(t))
      return Py(t);
    if (pd(t))
      return Hy(t);
    if (bd(t))
      return Ny(t);
    if (yd(t))
      return Td(t);
    if (Sd(t))
      return Uy(t);
    if (Cd(t))
      return Fy(t);
  }
  throw Id(t);
}
function Py(t) {
  return new _n(function(e) {
    var n = t[ol]();
    if (Tt(n.subscribe))
      return n.subscribe(e);
    throw new TypeError("Provided object does not correctly implement Symbol.observable");
  });
}
function Hy(t) {
  return new _n(function(e) {
    for (var n = 0; n < t.length && !e.closed; n++)
      e.next(t[n]);
    e.complete();
  });
}
function Ny(t) {
  return new _n(function(e) {
    t.then(function(n) {
      e.closed || (e.next(n), e.complete());
    }, function(n) {
      return e.error(n);
    }).then(null, vd);
  });
}
function Uy(t) {
  return new _n(function(e) {
    var n, r;
    try {
      for (var i = kt(t), a = i.next(); !a.done; a = i.next()) {
        var o = a.value;
        if (e.next(o), e.closed)
          return;
      }
    } catch (c) {
      n = { error: c };
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
function Td(t) {
  return new _n(function(e) {
    ky(t, e).catch(function(n) {
      return e.error(n);
    });
  });
}
function Fy(t) {
  return Td(Ad(t));
}
function ky(t, e) {
  var n, r, i, a;
  return Tc(this, void 0, void 0, function() {
    var o, c;
    return Qs(this, function(l) {
      switch (l.label) {
        case 0:
          l.trys.push([0, 5, 6, 11]), n = Gh(t), l.label = 1;
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
          return c = l.sent(), i = { error: c }, [3, 11];
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
function xd(t, e) {
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
function wd(t, e) {
  return e === void 0 && (e = 0), Ln(function(n, r) {
    r.add(t.schedule(function() {
      return n.subscribe(r);
    }, e));
  });
}
function By(t, e) {
  return pi(t).pipe(wd(e), xd(e));
}
function Vy(t, e) {
  return pi(t).pipe(wd(e), xd(e));
}
function Gy(t, e) {
  return new _n(function(n) {
    var r = 0;
    return e.schedule(function() {
      r === t.length ? n.complete() : (n.next(t[r++]), n.closed || this.schedule());
    });
  });
}
function jy(t, e) {
  return new _n(function(n) {
    var r;
    return oi(n, e, function() {
      r = t[Ed](), oi(n, e, function() {
        var i, a, o;
        try {
          i = r.next(), a = i.value, o = i.done;
        } catch (c) {
          n.error(c);
          return;
        }
        o ? n.complete() : n.next(a);
      }, 0, !0);
    }), function() {
      return Tt(r == null ? void 0 : r.return) && r.return();
    };
  });
}
function Ld(t, e) {
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
function Wy(t, e) {
  return Ld(Ad(t), e);
}
function qy(t, e) {
  if (t != null) {
    if (_d(t))
      return By(t, e);
    if (pd(t))
      return Gy(t, e);
    if (bd(t))
      return Vy(t, e);
    if (yd(t))
      return Ld(t, e);
    if (Sd(t))
      return jy(t, e);
    if (Cd(t))
      return Wy(t, e);
  }
  throw Id(t);
}
function ll(t, e) {
  return e ? qy(t, e) : pi(t);
}
function Od() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  var n = gd(t);
  return ll(t, n);
}
function Un(t, e) {
  return Ln(function(n, r) {
    var i = 0;
    n.subscribe(Vn(r, function(a) {
      r.next(t.call(e, a, i++));
    }));
  });
}
function zy(t, e, n, r, i, a, o, c) {
  var l = [], u = 0, d = 0, v = !1, f = function() {
    v && !l.length && !u && e.complete();
  }, m = function(p) {
    return u < r ? h(p) : l.push(p);
  }, h = function(p) {
    u++;
    var _ = !1;
    pi(n(p, d++)).subscribe(Vn(e, function(y) {
      e.next(y);
    }, function() {
      _ = !0;
    }, void 0, function() {
      if (_)
        try {
          u--;
          for (var y = function() {
            var T = l.shift();
            o || h(T);
          }; l.length && u < r; )
            y();
          f();
        } catch (T) {
          e.error(T);
        }
    }));
  };
  return t.subscribe(Vn(e, m, function() {
    v = !0, f();
  })), function() {
  };
}
function Ao(t, e, n) {
  return n === void 0 && (n = 1 / 0), Tt(e) ? Ao(function(r, i) {
    return Un(function(a, o) {
      return e(r, a, i, o);
    })(pi(t(r, i)));
  }, n) : (typeof e == "number" && (n = e), Ln(function(r, i) {
    return zy(r, i, t, n);
  }));
}
function Ky(t) {
  return t === void 0 && (t = 1 / 0), Ao(sl, t);
}
function Eu(t, e) {
  return Ln(function(n, r) {
    var i = 0;
    n.subscribe(Vn(r, function(a) {
      return t.call(e, a, i++) && r.next(a);
    }));
  });
}
function Rd(t) {
  return Ln(function(e, n) {
    var r = null, i = !1, a;
    r = e.subscribe(Vn(n, void 0, void 0, function(o) {
      a = pi(t(o, Rd(t)(e))), r ? (r.unsubscribe(), r = null, a.subscribe(n)) : i = !0;
    })), i && (r.unsubscribe(), r = null, a.subscribe(n));
  });
}
function Xy(t, e) {
  return Tt(e) ? Ao(t, e, 1) : Ao(t, 1);
}
function Yy(t, e) {
  return e === void 0 && (e = Ly), Ln(function(n, r) {
    var i = null, a = null, o = null, c = function() {
      if (i) {
        i.unsubscribe(), i = null;
        var u = a;
        a = null, r.next(u);
      }
    };
    function l() {
      var u = o + t, d = e.now();
      if (d < u) {
        i = this.schedule(void 0, u - d), r.add(i);
        return;
      }
      c();
    }
    n.subscribe(Vn(r, function(u) {
      a = u, o = e.now(), i || (i = e.schedule(l, t), r.add(i));
    }, function() {
      c(), r.complete();
    }, void 0, function() {
      a = i = null;
    }));
  });
}
function ba(t) {
  return t <= 0 ? function() {
    return Oy;
  } : Ln(function(e, n) {
    var r = 0;
    e.subscribe(Vn(n, function(i) {
      ++r <= t && (n.next(i), t <= r && n.complete());
    }));
  });
}
function Su(t) {
  return Ln(function(e, n) {
    try {
      e.subscribe(n);
    } finally {
      n.add(t);
    }
  });
}
function Zy() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  var n = gd(t), r = Dy(t, 1 / 0);
  return Ln(function(i, a) {
    Ky(r)(ll($n([i], br(t)), n)).subscribe(a);
  });
}
function Qy() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  return Zy.apply(void 0, $n([], br(t)));
}
function Au(t, e) {
  return Ln(function(n, r) {
    var i = null, a = 0, o = !1, c = function() {
      return o && !i && r.complete();
    };
    n.subscribe(Vn(r, function(l) {
      i == null || i.unsubscribe();
      var u = 0, d = a++;
      pi(t(l, d)).subscribe(i = Vn(r, function(v) {
        return r.next(e ? e(l, v, d, u++) : v);
      }, function() {
        i = null, c();
      }));
    }, function() {
      o = !0, c();
    }));
  });
}
function xi(t, e, n) {
  var r = Tt(t) || e || n ? { next: t, error: e, complete: n } : t;
  return r ? Ln(function(i, a) {
    var o;
    (o = r.subscribe) === null || o === void 0 || o.call(r);
    var c = !0;
    i.subscribe(Vn(a, function(l) {
      var u;
      (u = r.next) === null || u === void 0 || u.call(r, l), a.next(l);
    }, function() {
      var l;
      c = !1, (l = r.complete) === null || l === void 0 || l.call(r), a.complete();
    }, function(l) {
      var u;
      c = !1, (u = r.error) === null || u === void 0 || u.call(r, l), a.error(l);
    }, function() {
      var l, u;
      c && ((l = r.unsubscribe) === null || l === void 0 || l.call(r)), (u = r.finalize) === null || u === void 0 || u.call(r);
    }));
  }) : sl;
}
class Jy {
  constructor(e, n, r, i, a, o, c, l, u, d) {
    this._uuid = e, this._filename = n, this._author = r, this._type = i, this._date = a, this._version = o, this._comment = c, this._archived = l, this._available = u, this._deleted = d;
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
function Dd(t) {
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
var $y = /* @__PURE__ */ function() {
  function t(e, n, r, i) {
    i === void 0 && (i = "download_load"), this.originalEvent = e, this.xhr = n, this.request = r, this.type = i;
    var a = n.status, o = n.responseType;
    this.status = a ?? 0, this.responseType = o ?? "";
    var c = n.getAllResponseHeaders();
    this.responseHeaders = c ? c.split(`
`).reduce(function(d, v) {
      var f = v.indexOf(": ");
      return d[v.slice(0, f)] = v.slice(f + 2), d;
    }, {}) : {}, this.response = Dd(n);
    var l = e.loaded, u = e.total;
    this.loaded = l, this.total = u;
  }
  return t;
}(), Co = il(function(t) {
  return function(n, r, i) {
    this.message = n, this.name = "AjaxError", this.xhr = r, this.request = i, this.status = r.status, this.responseType = r.responseType;
    var a;
    try {
      a = Dd(r);
    } catch {
      a = r.responseText;
    }
    this.response = a;
  };
}), eI = function() {
  function t(e, n) {
    return Co.call(this, "ajax timeout", e, n), this.name = "AjaxTimeoutError", this;
  }
  return t.prototype = Object.create(Co.prototype), t;
}();
function tI(t, e) {
  return bi({ method: "GET", url: t, headers: e });
}
function nI(t, e, n) {
  return bi({ method: "POST", url: t, body: e, headers: n });
}
function rI(t, e) {
  return bi({ method: "DELETE", url: t, headers: e });
}
function iI(t, e, n) {
  return bi({ method: "PUT", url: t, body: e, headers: n });
}
function aI(t, e, n) {
  return bi({ method: "PATCH", url: t, body: e, headers: n });
}
var oI = Un(function(t) {
  return t.response;
});
function sI(t, e) {
  return oI(bi({
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
    return uI(n);
  };
  return t.get = tI, t.post = nI, t.delete = rI, t.put = iI, t.patch = aI, t.getJSON = sI, t;
}(), lI = "upload", Cu = "download", ls = "loadstart", us = "progress", Tu = "load";
function uI(t) {
  return new _n(function(e) {
    var n, r, i = ge({ async: !0, crossDomain: !1, withCredentials: !1, method: "GET", timeout: 0, responseType: "json" }, t), a = i.queryParams, o = i.body, c = i.headers, l = i.url;
    if (!l)
      throw new TypeError("url is required");
    if (a) {
      var u;
      if (l.includes("?")) {
        var d = l.split("?");
        if (2 < d.length)
          throw new TypeError("invalid url");
        u = new URLSearchParams(d[1]), new URLSearchParams(a).forEach(function(k, K) {
          return u.set(K, k);
        }), l = d[0] + "?" + u;
      } else
        u = new URLSearchParams(a), l = l + "?" + u;
    }
    var v = {};
    if (c)
      for (var f in c)
        c.hasOwnProperty(f) && (v[f.toLowerCase()] = c[f]);
    var m = i.crossDomain;
    !m && !("x-requested-with" in v) && (v["x-requested-with"] = "XMLHttpRequest");
    var h = i.withCredentials, p = i.xsrfCookieName, _ = i.xsrfHeaderName;
    if ((h || !m) && p && _) {
      var y = (r = (n = document == null ? void 0 : document.cookie.match(new RegExp("(^|;\\s*)(" + p + ")=([^;]*)"))) === null || n === void 0 ? void 0 : n.pop()) !== null && r !== void 0 ? r : "";
      y && (v[_] = y);
    }
    var T = cI(o, v), I = ge(ge({}, i), {
      url: l,
      headers: v,
      body: T
    }), b;
    b = t.createXHR ? t.createXHR() : new XMLHttpRequest();
    {
      var S = t.progressSubscriber, E = t.includeDownloadProgress, x = E === void 0 ? !1 : E, A = t.includeUploadProgress, C = A === void 0 ? !1 : A, P = function(k, K) {
        b.addEventListener(k, function() {
          var ne, N = K();
          (ne = S == null ? void 0 : S.error) === null || ne === void 0 || ne.call(S, N), e.error(N);
        });
      };
      P("timeout", function() {
        return new eI(b, I);
      }), P("abort", function() {
        return new Co("aborted", b, I);
      });
      var z = function(k, K) {
        return new $y(K, b, I, k + "_" + K.type);
      }, F = function(k, K, ne) {
        k.addEventListener(K, function(N) {
          e.next(z(ne, N));
        });
      };
      C && [ls, us, Tu].forEach(function(k) {
        return F(b.upload, k, lI);
      }), S && [ls, us].forEach(function(k) {
        return b.upload.addEventListener(k, function(K) {
          var ne;
          return (ne = S == null ? void 0 : S.next) === null || ne === void 0 ? void 0 : ne.call(S, K);
        });
      }), x && [ls, us].forEach(function(k) {
        return F(b, k, Cu);
      });
      var W = function(k) {
        var K = "ajax error" + (k ? " " + k : "");
        e.error(new Co(K, b, I));
      };
      b.addEventListener("error", function(k) {
        var K;
        (K = S == null ? void 0 : S.error) === null || K === void 0 || K.call(S, k), W();
      }), b.addEventListener(Tu, function(k) {
        var K, ne, N = b.status;
        if (N < 400) {
          (K = S == null ? void 0 : S.complete) === null || K === void 0 || K.call(S);
          var D = void 0;
          try {
            D = z(Cu, k);
          } catch (O) {
            e.error(O);
            return;
          }
          e.next(D), e.complete();
        } else
          (ne = S == null ? void 0 : S.error) === null || ne === void 0 || ne.call(S, k), W(N);
      });
    }
    var R = I.user, L = I.method, q = I.async;
    R ? b.open(L, l, q, R, I.password) : b.open(L, l, q), q && (b.timeout = I.timeout, b.responseType = I.responseType), "withCredentials" in b && (b.withCredentials = I.withCredentials);
    for (var f in v)
      v.hasOwnProperty(f) && b.setRequestHeader(f, v[f]);
    return T ? b.send(T) : b.send(), function() {
      b && b.readyState !== 4 && b.abort();
    };
  });
}
function cI(t, e) {
  var n;
  if (!t || typeof t == "string" || gI(t) || pI(t) || fI(t) || hI(t) || vI(t) || bI(t))
    return t;
  if (mI(t))
    return t.buffer;
  if (typeof t == "object")
    return e["content-type"] = (n = e["content-type"]) !== null && n !== void 0 ? n : "application/json;charset=utf-8", JSON.stringify(t);
  throw new TypeError("Unknown body type");
}
var dI = Object.prototype.toString;
function ul(t, e) {
  return dI.call(t) === "[object " + e + "]";
}
function fI(t) {
  return ul(t, "ArrayBuffer");
}
function hI(t) {
  return ul(t, "File");
}
function vI(t) {
  return ul(t, "Blob");
}
function mI(t) {
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView(t);
}
function gI(t) {
  return typeof FormData < "u" && t instanceof FormData;
}
function pI(t) {
  return typeof URLSearchParams < "u" && t instanceof URLSearchParams;
}
function bI(t) {
  return typeof ReadableStream < "u" && t instanceof ReadableStream;
}
class _I {
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
const yI = new _I("https://demo.compas.energy", {}, "DSOM Versatel Production URL"), II = [yI], EI = II[0].getUrl();
class Md {
  constructor(e = {}) {
    this.configuration = e;
  }
  get basePath() {
    return this.configuration.basePath ?? EI;
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
class SI {
  constructor(e = new Md()) {
    this.configuration = e, this.middleware = [], this.withMiddleware = (n) => {
      const r = this.clone();
      return r.middleware = r.middleware.concat(n), r;
    }, this.withPreMiddleware = (n) => this.withMiddleware(n.map((r) => ({ pre: r }))), this.withPostMiddleware = (n) => this.withMiddleware(n.map((r) => ({ post: r }))), this.createRequestArgs = ({ url: n, query: r, method: i, headers: a, body: o, responseType: c }) => ({
      url: `${this.configuration.basePath}${n}${r && Object.keys(r).length ? `?${AI(r)}` : ""}`,
      method: i,
      headers: a,
      body: o instanceof FormData ? o : JSON.stringify(o),
      responseType: c ?? "json"
    }), this.rxjsRequest = (n) => Od(n).pipe(
      Un((r) => (this.middleware.filter((i) => i.pre).forEach((i) => r = i.pre(r)), r)),
      Xy(
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
const hr = (t) => encodeURIComponent(`${t}`), AI = (t) => Object.entries(t).map(
  ([e, n]) => n instanceof Array ? n.map((r) => `${hr(e)}=${hr(r)}`).join("&") : `${hr(e)}=${hr(n)}`
).join("&"), wi = (t, e, n) => {
  if (t == null)
    throw new Error(`Parameter "${e}" was null or undefined when calling "${n}".`);
};
class CI extends SI {
  deleteAllSclFileVersions({ id: e, type: n }, r) {
    wi(e, "id", "deleteAllSclFileVersions"), wi(n, "type", "deleteAllSclFileVersions");
    const i = {};
    return this.request({
      url: "/scl/v1/{type}/{id}".replace("{id}", hr(e)).replace("{type}", hr(n)),
      method: "DELETE",
      headers: i
    }, r == null ? void 0 : r.responseOpts);
  }
  retrieveDataResourceByVersion({ id: e, version: n }, r) {
    wi(e, "id", "retrieveDataResourceByVersion"), wi(n, "version", "retrieveDataResourceByVersion");
    const i = {};
    return this.request({
      url: "/api/scl/{id}/version/{version}".replace("{id}", hr(e)).replace("{version}", hr(n)),
      method: "GET",
      headers: i,
      responseType: "blob"
    }, r == null ? void 0 : r.responseOpts);
  }
  retrieveDataResourceHistory({ id: e }, n) {
    wi(e, "id", "retrieveDataResourceHistory");
    const r = {};
    return this.request({
      url: "/api/scl/{id}/versions".replace("{id}", hr(e)),
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
      Eu((r) => !!r || !!r.results),
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
      Eu((r) => !!r || !!r.versions),
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
    return new Jy(
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
    const n = new Md({
      basePath: e
      // accessToken: authInfo.token,
    });
    return new CI(n);
  }
}
var xr;
class xu {
  constructor() {
    rt(this, xr, Bt([]));
  }
  get store() {
    return se(this, xr);
  }
  updateData(e) {
    se(this, xr).set(e);
  }
  addData(e) {
    se(this, xr).update((n) => [...n, e]);
  }
  removeData(e) {
    se(this, xr).update((n) => n.filter((r) => r.uuid !== e));
  }
  getData(e) {
    return Ac(se(this, xr)).find((n) => n.uuid === e);
  }
}
xr = new WeakMap();
pm({ en: Vm, de: Lm });
var TI = /* @__PURE__ */ fe("<h3> </h3>"), xI = /* @__PURE__ */ fe("<div><!></div>"), wI = /* @__PURE__ */ fe("<!> <!>", 1), LI = /* @__PURE__ */ fe("<div><!></div>"), OI = /* @__PURE__ */ fe('<div class="oscd-app"><div class="version-editor-container svelte-vqh57v"><!> <div class="search-filter svelte-vqh57v"><!></div> <div class="table-container svelte-vqh57v"><!></div></div></div> <!> <!>', 1);
function RI(t, e) {
  xe(e, !0);
  const n = () => kn(gm, "$_", r), [r, i] = rr(), a = Mi.getInstance();
  let o = /* @__PURE__ */ _e(void 0);
  const c = new Ps(), l = new Ps(), u = l.pipe(
    Qy(c.pipe(Yy(200))),
    Un(() => A(s(S))),
    xi(() => {
      Q(f, !1);
    }),
    Au((O) => a.searchFiles(O).pipe(
      Un((le) => le.filter((re) => !re.deleted)),
      xi((le) => {
        [...le], d().updateData(le);
      }),
      Su(() => {
        Q(f, !0);
      })
    ))
  );
  let d = g(e, "dataStore", 19, () => new xu()), v = g(e, "historyStore", 19, () => new xu()), f = /* @__PURE__ */ _e(!0), m = /* @__PURE__ */ _e(!1), h = /* @__PURE__ */ _e("");
  at(() => {
    const O = u.subscribe();
    return l.next(), () => O.unsubscribe();
  });
  function p(O) {
    return new Date(O).toLocaleDateString();
  }
  const _ = {
    headerName: "",
    field: "actions",
    numeric: !1,
    filter: !1,
    filterType: "text",
    minWidth: "100px",
    sortable: !1
  };
  let y = /* @__PURE__ */ pe(() => [
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
    _
  ]), T = /* @__PURE__ */ pe(() => [
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
      callback: (O) => z(O),
      disabled: (O) => !O.available
    },
    {
      icon: "find-in-page",
      tooltip: "View History",
      callback: (O) => C(O),
      disabled: () => !1
    },
    {
      icon: "download",
      tooltip: "Download",
      callback: (O) => x(O),
      disabled: (O) => !O.available
    },
    {
      icon: "delete",
      tooltip: "Delete",
      callback: (O) => E(O),
      disabled: () => !1
    }
  ], b = [
    {
      icon: "download",
      tooltip: "Download",
      callback: (O) => x(O),
      disabled: (O) => !O.available
    }
  ];
  let S = /* @__PURE__ */ _e(ye([
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
    console.debug("deleteResource: ", O), (await su(lu, {
      title: "Confirm Deletion",
      message: `Are you sure you want to delete the resource "${O.filename} (${O.uuid})"? This action cannot be undone.`,
      confirmActionText: "Delete",
      cancelActionText: "Cancel",
      confirmActionColor: "danger"
    })).type === "confirm" && a.deleteResource(O.type, O.uuid).pipe(ba(1)).subscribe({
      next: () => {
        c.next(null), Sa.success("Deleted resource", `Resource "${O.filename} (${O.uuid})" has been deleted.`);
      },
      error: (re) => {
        console.error(`Failed to delete resource "${O.filename} (${O.uuid})":`, re), Sa.error("Deletion failed", `Failed to delete resource "${O.filename} (${O.uuid})".`);
      }
    });
  }
  function x(O) {
    console.log("Download file: ", O), a.downloadSclData(O.uuid, O.type, O.version).pipe(ba(1), xi((le) => {
      const re = window.URL.createObjectURL(le), M = document.createElement("a");
      M.href = re, M.download = `${O.filename}.${O.type.toLowerCase()}`, M.style.display = "none", document.body.appendChild(M), M.click(), document.body.removeChild(M), window.URL.revokeObjectURL(re);
    })).subscribe();
  }
  function A(O) {
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
  function C(O) {
    Q(o, O, !0), a.getHistoryFiles(O.uuid).pipe(ba(1), xi((le) => {
      Q(m, !0), [...le], v().updateData(le);
    })).subscribe();
  }
  function P(O) {
    console.log("Dialog closed with result: ", O), Q(m, !1);
  }
  async function z(O) {
    if ((await su(lu, {
      title: "Open File",
      message: `Do you want to open "${O.filename}"? 

Any unsaved changes in your current project will be lost.`,
      confirmActionText: "Open",
      cancelActionText: "Cancel"
    })).type !== "confirm")
      return;
    let re = "";
    a.downloadSclData(O.uuid, O.type, O.version).pipe(
      ba(1),
      xi((M) => {
        re = window.URL.createObjectURL(M);
      }),
      Au(() => ll(fetch(re).then((M) => {
        if (M.status === 200)
          return M.text();
        throw new Error(`Failed to load ${O.filename}: ${M.status} ${M.statusText}`);
      }))),
      ba(1),
      Rd((M) => (Sa.error("Open Document Failed", `Failed to open document "${O.filename}".`), console.error(M), Od(void 0))),
      xi((M) => {
        var J;
        if (!M)
          return;
        const V = O.filename, U = new DOMParser().parseFromString(M, "application/xml");
        (J = window.document.getElementsByTagName("open-scd")[0]) == null || J.dispatchEvent(new CustomEvent("open-doc", {
          bubbles: !0,
          composed: !0,
          detail: { localFile: !1, doc: U, docName: V }
        }));
      }),
      Su(() => re && window.URL.revokeObjectURL(re))
    ).subscribe();
  }
  var F = OI(), W = Z(F), R = de(W), L = de(R);
  Pp(L, {
    onClose: P,
    get open() {
      return s(m);
    },
    set open(M) {
      Q(m, M, !0);
    },
    title: (M) => {
      var V = TI(), U = de(V);
      Le((J) => $e(U, J), [
        () => {
          var J;
          return n()("versionHistory.title", { values: { filename: (J = s(o)) == null ? void 0 : J.filename } });
        }
      ]), w(M, V);
    },
    content: (M) => {
      var V = xI(), U = de(V);
      {
        let J = /* @__PURE__ */ pe(() => n()("search"));
        mu(U, {
          get columnDefs() {
            return s(T);
          },
          get store() {
            return v();
          },
          get loadingDone() {
            return s(f);
          },
          get rowActions() {
            return b;
          },
          get searchInputLabel() {
            return s(J);
          }
        });
      }
      w(M, V);
    },
    actions: (M) => {
      var V = LI(), U = de(V);
      ed(U, {
        callback: P,
        variant: "raised",
        children: (J, $) => {
          var ce = wI(), Ce = Z(ce);
          nl(Ce, {});
          var ee = Ie(Ce, 2);
          $c(ee, {
            children: (ae, Re) => {
              var Oe = yt();
              Le((ke) => $e(Oe, ke), [() => n()("done")]), w(ae, Oe);
            },
            $$slots: { default: !0 }
          }), w(J, ce);
        },
        $$slots: { default: !0 }
      }), w(M, V);
    },
    $$slots: { title: !0, content: !0, actions: !0 }
  });
  var q = Ie(L, 2), k = de(q);
  ey(k, {
    searchLabel: "Search file name...",
    onFilterChange: () => c.next(null),
    onSearchInput: () => c.next(null),
    get filters() {
      return s(S);
    },
    set filters(O) {
      Q(S, O, !0);
    },
    get searchText() {
      return s(h);
    },
    set searchText(O) {
      Q(h, O, !0);
    }
  });
  var K = Ie(q, 2), ne = de(K);
  {
    let O = /* @__PURE__ */ pe(() => n()("search"));
    mu(ne, {
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
  var N = Ie(W, 2);
  m_(N, {});
  var D = Ie(N, 2);
  Np(D, {}), w(t, F), we(), i();
}
const Pd = "version-editor", Hd = "0.0.1";
var DI = /* @__PURE__ */ fe('<!> <input type="hidden" name="package-name"/> <input type="hidden" name="package-version"/>', 1);
function MI(t, e) {
  xe(e, !0);
  let n = g(e, "dev", 3, !1);
  var r = DI(), i = Z(r);
  {
    var a = (l) => {
      RI(l, {});
    };
    oe(i, (l) => {
      (e.doc || n()) && l(a);
    });
  }
  var o = Ie(i, 2), c = Ie(o, 2);
  Le(() => {
    wl(o, Pd), wl(c, Hd);
  }), w(t, r), we();
}
var Gi;
class FI extends HTMLElement {
  constructor() {
    super();
    rt(this, Gi);
    Ue(this, Gi, /* @__PURE__ */ _e(ye({ doc: void 0, editCount: void 0 })));
  }
  get props() {
    return s(se(this, Gi));
  }
  set props(n) {
    Q(se(this, Gi), n, !0);
  }
  connectedCallback() {
    var r;
    this.attachShadow({ mode: "open" }), this.props.doc = this._doc, this.props.editCount = this.editCount, $f(MI, { target: this.shadowRoot, props: this.props });
    const n = PI();
    (r = this.shadowRoot) == null || r.appendChild(n);
  }
  set doc(n) {
    this._doc = n, this.props.doc = n;
  }
  set editCount(n) {
    this.props.editCount = n;
  }
}
Gi = new WeakMap();
function PI() {
  const t = `${Pd}-v${Hd}-style`, e = HI(), n = document.createElement("link");
  return n.rel = "stylesheet", n.type = "text/css", n.href = e, n.id = t, n;
}
function HI() {
  const t = new URL(import.meta.url), e = t.origin, n = t.pathname.split("/").slice(0, -1).filter(Boolean).join("/");
  return [e, n, "style.css"].filter(Boolean).join("/");
}
export {
  FI as default
};
