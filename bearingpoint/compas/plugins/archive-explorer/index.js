var Nd = Object.defineProperty;
var pl = (t) => {
  throw TypeError(t);
};
var Ud = (t, e, n) => e in t ? Nd(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var yi = (t, e, n) => Ud(t, typeof e != "symbol" ? e + "" : e, n), Wo = (t, e, n) => e.has(t) || pl("Cannot " + n);
var J = (t, e, n) => (Wo(t, e, "read from private field"), n ? n.call(t) : e.get(t)), Ze = (t, e, n) => e.has(t) ? pl("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, n), Ne = (t, e, n, r) => (Wo(t, e, "write to private field"), r ? r.call(t, n) : e.set(t, n), n), jt = (t, e, n) => (Wo(t, e, "access private method"), n);
const Pt = Symbol(), Hd = "http://www.w3.org/1999/xhtml", Fd = "http://www.w3.org/2000/svg", Bd = "@attach", Lu = !1;
var Eo = Array.isArray, kd = Array.prototype.indexOf, Fs = Array.from, so = Object.defineProperty, Cr = Object.getOwnPropertyDescriptor, Ou = Object.getOwnPropertyDescriptors, Vd = Object.prototype, Gd = Array.prototype, Bs = Object.getPrototypeOf, ml = Object.isExtensible;
function da(t) {
  return typeof t == "function";
}
const ge = () => {
};
function Ru(t) {
  for (var e = 0; e < t.length; e++)
    t[e]();
}
function Mu() {
  var t, e, n = new Promise((r, i) => {
    t = r, e = i;
  });
  return { promise: n, resolve: t, reject: e };
}
const nn = 2, ks = 4, Vs = 8, li = 16, or = 32, ui = 64, Gs = 128, Tn = 256, lo = 512, zt = 1024, gn = 2048, Dr = 4096, Un = 8192, ci = 16384, js = 32768, di = 65536, gl = 1 << 17, jd = 1 << 18, na = 1 << 19, qd = 1 << 20, cs = 1 << 21, Ao = 1 << 22, ri = 1 << 23, Kn = Symbol("$state"), Du = Symbol("legacy props"), Wd = Symbol(""), Ci = new class extends Error {
  constructor() {
    super(...arguments);
    yi(this, "name", "StaleReactionError");
    yi(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
function qs(t) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function Kd() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function zd(t) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Xd() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Yd(t) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Zd() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Qd(t) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Jd() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function $d() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function ef() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function tf() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
function nf() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function rf() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let af = !1;
function Pu(t) {
  return t === this.v;
}
function Ws(t, e) {
  return t != t ? e == e : t !== e || t !== null && typeof t == "object" || typeof t == "function";
}
function Nu(t) {
  return !Ws(t, this.v);
}
let ra = !1, of = !1;
function sf() {
  ra = !0;
}
let ut = null;
function Ki(t) {
  ut = t;
}
function oe(t) {
  return (
    /** @type {T} */
    Uu().get(t)
  );
}
function ne(t, e) {
  return Uu().set(t, e), e;
}
function Le(t, e = !1, n) {
  ut = {
    p: ut,
    c: null,
    e: null,
    s: t,
    x: null,
    l: ra && !e ? { s: null, u: null, $: [] } : null
  };
}
function Oe(t) {
  var e = (
    /** @type {ComponentContext} */
    ut
  ), n = e.e;
  if (n !== null) {
    e.e = null;
    for (var r of n)
      Ju(r);
  }
  return t !== void 0 && (e.x = t), ut = e.p, t ?? /** @type {T} */
  {};
}
function Fa() {
  return !ra || ut !== null && ut.l === null;
}
function Uu(t) {
  return ut === null && qs(), ut.c ?? (ut.c = new Map(lf(ut) || void 0));
}
function lf(t) {
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
function Hu() {
  var t = Zr;
  Zr = [], Ru(t);
}
function Lr(t) {
  if (Zr.length === 0 && !Ca) {
    var e = Zr;
    queueMicrotask(() => {
      e === Zr && Hu();
    });
  }
  Zr.push(t);
}
function uf() {
  for (; Zr.length > 0; )
    Hu();
}
const cf = /* @__PURE__ */ new WeakMap();
function Fu(t) {
  var e = je;
  if (e === null)
    return Ve.f |= ri, t;
  if (e.f & js)
    zi(t, e);
  else {
    if (!(e.f & Gs))
      throw !e.parent && t instanceof Error && Bu(t), t;
    e.b.error(t);
  }
}
function zi(t, e) {
  for (; e !== null; ) {
    if (e.f & Gs)
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
  const e = cf.get(t);
  e && (so(t, "message", {
    value: e.message
  }), so(t, "stack", {
    value: e.stack
  }));
}
const Ka = /* @__PURE__ */ new Set();
let ot = null, to = null, Ft = null, ds = /* @__PURE__ */ new Set(), qn = [], Co = null, fs = !1, Ca = !1;
var Hi, Fi, Jr, Pa, Bi, ki, $r, Vi, Na, Ua, wn, hs, no, vs;
const yo = class yo {
  constructor() {
    Ze(this, wn);
    /**
     * The current values of any sources that are updated in this batch
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Source, any>}
     */
    yi(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any sources that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Source, any>}
     */
    Ze(this, Hi, /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<() => void>}
     */
    Ze(this, Fi, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    Ze(this, Jr, 0);
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    Ze(this, Pa, null);
    /**
     * Async effects inside a newly-created `<svelte:boundary>`
     * — these do not prevent the batch from committing
     * @type {Effect[]}
     */
    Ze(this, Bi, []);
    /**
     * Template effects and `$effect.pre` effects, which run when
     * a batch is committed
     * @type {Effect[]}
     */
    Ze(this, ki, []);
    /**
     * The same as `#render_effects`, but for `$effect` (which runs after)
     * @type {Effect[]}
     */
    Ze(this, $r, []);
    /**
     * Block effects, which may need to re-run on subsequent flushes
     * in order to update internal sources (e.g. each block items)
     * @type {Effect[]}
     */
    Ze(this, Vi, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Effect[]}
     */
    Ze(this, Na, []);
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Effect[]}
     */
    Ze(this, Ua, []);
    /**
     * A set of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`
     * @type {Set<Effect>}
     */
    yi(this, "skipped_effects", /* @__PURE__ */ new Set());
  }
  /**
   *
   * @param {Effect[]} root_effects
   */
  process(e) {
    var a;
    qn = [], to = null, this.apply();
    for (const o of e)
      jt(this, wn, hs).call(this, o);
    if (J(this, Jr) === 0) {
      var n = Ft;
      jt(this, wn, vs).call(this);
      var r = J(this, ki), i = J(this, $r);
      Ne(this, ki, []), Ne(this, $r, []), Ne(this, Vi, []), to = this, ot = null, Ft = n, bl(r), bl(i), to = null, (a = J(this, Pa)) == null || a.resolve();
    } else
      jt(this, wn, no).call(this, J(this, ki)), jt(this, wn, no).call(this, J(this, $r)), jt(this, wn, no).call(this, J(this, Vi));
    Ft = null;
    for (const o of J(this, Bi))
      Ta(o);
    Ne(this, Bi, []);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Source} source
   * @param {any} value
   */
  capture(e, n) {
    J(this, Hi).has(e) || J(this, Hi).set(e, n), this.current.set(e, e.v), Ft == null || Ft.set(e, e.v);
  }
  activate() {
    ot = this;
  }
  deactivate() {
    ot = null, Ft = null;
  }
  flush() {
    if (qn.length > 0) {
      if (this.activate(), ku(), ot !== null && ot !== this)
        return;
    } else J(this, Jr) === 0 && jt(this, wn, vs).call(this);
    this.deactivate();
    for (const e of ds)
      if (ds.delete(e), e(), ot !== null)
        break;
  }
  increment() {
    Ne(this, Jr, J(this, Jr) + 1);
  }
  decrement() {
    Ne(this, Jr, J(this, Jr) - 1);
    for (const e of J(this, Na))
      en(e, gn), oi(e);
    for (const e of J(this, Ua))
      en(e, Dr), oi(e);
    this.flush();
  }
  /** @param {() => void} fn */
  add_callback(e) {
    J(this, Fi).add(e);
  }
  settled() {
    return (J(this, Pa) ?? Ne(this, Pa, Mu())).promise;
  }
  static ensure() {
    if (ot === null) {
      const e = ot = new yo();
      Ka.add(ot), Ca || yo.enqueue(() => {
        ot === e && e.flush();
      });
    }
    return ot;
  }
  /** @param {() => void} task */
  static enqueue(e) {
    Lr(e);
  }
  apply() {
  }
};
Hi = new WeakMap(), Fi = new WeakMap(), Jr = new WeakMap(), Pa = new WeakMap(), Bi = new WeakMap(), ki = new WeakMap(), $r = new WeakMap(), Vi = new WeakMap(), Na = new WeakMap(), Ua = new WeakMap(), wn = new WeakSet(), /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 */
hs = function(e) {
  var u;
  e.f ^= zt;
  for (var n = e.first; n !== null; ) {
    var r = n.f, i = (r & (or | ui)) !== 0, a = i && (r & zt) !== 0, o = a || (r & Un) !== 0 || this.skipped_effects.has(n);
    if (!o && n.fn !== null) {
      i ? n.f ^= zt : r & ks ? J(this, $r).push(n) : r & zt || (r & Ao && ((u = n.b) != null && u.is_pending()) ? J(this, Bi).push(n) : Oo(n) && (n.f & li && J(this, Vi).push(n), Ta(n)));
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
no = function(e) {
  for (const n of e)
    (n.f & gn ? J(this, Na) : J(this, Ua)).push(n), en(n, zt);
  e.length = 0;
}, /**
 * Append and remove branches to/from the DOM
 */
vs = function() {
  var e;
  for (const n of J(this, Fi))
    n();
  if (J(this, Fi).clear(), Ka.size > 1) {
    J(this, Hi).clear();
    let n = !0;
    for (const r of Ka) {
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
        if (qn.length > 0) {
          ot = r, r.apply();
          for (const o of qn)
            jt(e = r, wn, hs).call(e, o);
          qn = [], r.deactivate();
        }
      }
    }
    ot = null;
  }
  Ka.delete(this);
};
let ar = yo;
function df(t) {
  var e = Ca;
  Ca = !0;
  try {
    for (var n; ; ) {
      if (uf(), qn.length === 0 && (ot == null || ot.flush(), qn.length === 0))
        return Co = null, /** @type {T} */
        n;
      ku();
    }
  } finally {
    Ca = e;
  }
}
function ku() {
  var t = Pi;
  fs = !0;
  try {
    var e = 0;
    for (El(!0); qn.length > 0; ) {
      var n = ar.ensure();
      if (e++ > 1e3) {
        var r, i;
        ff();
      }
      n.process(qn), Sr.clear();
    }
  } finally {
    fs = !1, El(t), Co = null;
  }
}
function ff() {
  try {
    Zd();
  } catch (t) {
    zi(t, Co);
  }
}
let nr = null;
function bl(t) {
  var e = t.length;
  if (e !== 0) {
    for (var n = 0; n < e; ) {
      var r = t[n++];
      if (!(r.f & (ci | Un)) && Oo(r) && (nr = [], Ta(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null && r.ac === null ? tc(r) : r.fn = null), (nr == null ? void 0 : nr.length) > 0)) {
        Sr.clear();
        for (const i of nr)
          Ta(i);
        nr = [];
      }
    }
    nr = null;
  }
}
function Vu(t, e) {
  if (t.reactions !== null)
    for (const n of t.reactions) {
      const r = n.f;
      r & nn ? Vu(
        /** @type {Derived} */
        n,
        e
      ) : r & (Ao | li) && Gu(n, e) && (en(n, gn), oi(
        /** @type {Effect} */
        n
      ));
    }
}
function Gu(t, e) {
  if (t.deps !== null) {
    for (const n of t.deps)
      if (e.includes(n) || n.f & nn && Gu(
        /** @type {Derived} */
        n,
        e
      ))
        return !0;
  }
  return !1;
}
function oi(t) {
  for (var e = Co = t; e.parent !== null; ) {
    e = e.parent;
    var n = e.f;
    if (fs && e === je && n & li)
      return;
    if (n & (ui | or)) {
      if (!(n & zt)) return;
      e.f ^= zt;
    }
  }
  qn.push(e);
}
function hf(t) {
  let e = 0, n = si(0), r;
  return () => {
    Rf() && (s(n), wo(() => (e === 0 && (r = Ur(() => t(() => Sa(n)))), e += 1, () => {
      Lr(() => {
        e -= 1, e === 0 && (r == null || r(), r = void 0, Sa(n));
      });
    })));
  };
}
var vf = di | na | Gs;
function pf(t, e, n) {
  new mf(t, e, n);
}
var Dn, Cn, Hs, Vn, ei, Gn, Sn, ln, jn, yr, ti, Ir, ni, _r, Io, _o, tn, gf, bf, ro, io, ps;
class mf {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   */
  constructor(e, n, r) {
    Ze(this, tn);
    /** @type {Boundary | null} */
    yi(this, "parent");
    Ze(this, Dn, !1);
    /** @type {TemplateNode} */
    Ze(this, Cn);
    /** @type {TemplateNode | null} */
    Ze(this, Hs, null);
    /** @type {BoundaryProps} */
    Ze(this, Vn);
    /** @type {((anchor: Node) => void)} */
    Ze(this, ei);
    /** @type {Effect} */
    Ze(this, Gn);
    /** @type {Effect | null} */
    Ze(this, Sn, null);
    /** @type {Effect | null} */
    Ze(this, ln, null);
    /** @type {Effect | null} */
    Ze(this, jn, null);
    /** @type {DocumentFragment | null} */
    Ze(this, yr, null);
    Ze(this, ti, 0);
    Ze(this, Ir, 0);
    Ze(this, ni, !1);
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    Ze(this, _r, null);
    Ze(this, Io, () => {
      J(this, _r) && Xi(J(this, _r), J(this, ti));
    });
    Ze(this, _o, hf(() => (Ne(this, _r, si(J(this, ti))), () => {
      Ne(this, _r, null);
    })));
    Ne(this, Cn, e), Ne(this, Vn, n), Ne(this, ei, r), this.parent = /** @type {Effect} */
    je.b, Ne(this, Dn, !!J(this, Vn).pending), Ne(this, Gn, Nr(() => {
      je.b = this;
      {
        try {
          Ne(this, Sn, qt(() => r(J(this, Cn))));
        } catch (i) {
          this.error(i);
        }
        J(this, Ir) > 0 ? jt(this, tn, io).call(this) : Ne(this, Dn, !1);
      }
    }, vf));
  }
  /**
   * Returns `true` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_pending() {
    return J(this, Dn) || !!this.parent && this.parent.is_pending();
  }
  has_pending_snippet() {
    return !!J(this, Vn).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   */
  update_pending_count(e) {
    jt(this, tn, ps).call(this, e), Ne(this, ti, J(this, ti) + e), ds.add(J(this, Io));
  }
  get_effect_pending() {
    return J(this, _o).call(this), s(
      /** @type {Source<number>} */
      J(this, _r)
    );
  }
  /** @param {unknown} error */
  error(e) {
    var n = J(this, Vn).onerror;
    let r = J(this, Vn).failed;
    if (J(this, ni) || !n && !r)
      throw e;
    J(this, Sn) && (Bt(J(this, Sn)), Ne(this, Sn, null)), J(this, ln) && (Bt(J(this, ln)), Ne(this, ln, null)), J(this, jn) && (Bt(J(this, jn)), Ne(this, jn, null));
    var i = !1, a = !1;
    const o = () => {
      if (i) {
        rf();
        return;
      }
      i = !0, a && tf(), ar.ensure(), Ne(this, ti, 0), J(this, jn) !== null && xr(J(this, jn), () => {
        Ne(this, jn, null);
      }), Ne(this, Dn, this.has_pending_snippet()), Ne(this, Sn, jt(this, tn, ro).call(this, () => (Ne(this, ni, !1), qt(() => J(this, ei).call(this, J(this, Cn)))))), J(this, Ir) > 0 ? jt(this, tn, io).call(this) : Ne(this, Dn, !1);
    };
    var c = Ve;
    try {
      cn(null), a = !0, n == null || n(e, o), a = !1;
    } catch (l) {
      zi(l, J(this, Gn) && J(this, Gn).parent);
    } finally {
      cn(c);
    }
    r && Lr(() => {
      Ne(this, jn, jt(this, tn, ro).call(this, () => {
        Ne(this, ni, !0);
        try {
          return qt(() => {
            r(
              J(this, Cn),
              () => e,
              () => o
            );
          });
        } catch (l) {
          return zi(
            l,
            /** @type {Effect} */
            J(this, Gn).parent
          ), null;
        } finally {
          Ne(this, ni, !1);
        }
      }));
    });
  }
}
Dn = new WeakMap(), Cn = new WeakMap(), Hs = new WeakMap(), Vn = new WeakMap(), ei = new WeakMap(), Gn = new WeakMap(), Sn = new WeakMap(), ln = new WeakMap(), jn = new WeakMap(), yr = new WeakMap(), ti = new WeakMap(), Ir = new WeakMap(), ni = new WeakMap(), _r = new WeakMap(), Io = new WeakMap(), _o = new WeakMap(), tn = new WeakSet(), gf = function() {
  try {
    Ne(this, Sn, qt(() => J(this, ei).call(this, J(this, Cn))));
  } catch (e) {
    this.error(e);
  }
  Ne(this, Dn, !1);
}, bf = function() {
  const e = J(this, Vn).pending;
  e && (Ne(this, ln, qt(() => e(J(this, Cn)))), ar.enqueue(() => {
    Ne(this, Sn, jt(this, tn, ro).call(this, () => (ar.ensure(), qt(() => J(this, ei).call(this, J(this, Cn)))))), J(this, Ir) > 0 ? jt(this, tn, io).call(this) : (xr(
      /** @type {Effect} */
      J(this, ln),
      () => {
        Ne(this, ln, null);
      }
    ), Ne(this, Dn, !1));
  }));
}, /**
 * @param {() => Effect | null} fn
 */
ro = function(e) {
  var n = je, r = Ve, i = ut;
  Xn(J(this, Gn)), cn(J(this, Gn)), Ki(J(this, Gn).ctx);
  try {
    return e();
  } catch (a) {
    return Fu(a), null;
  } finally {
    Xn(n), cn(r), Ki(i);
  }
}, io = function() {
  const e = (
    /** @type {(anchor: Node) => void} */
    J(this, Vn).pending
  );
  J(this, Sn) !== null && (Ne(this, yr, document.createDocumentFragment()), yf(J(this, Sn), J(this, yr))), J(this, ln) === null && Ne(this, ln, qt(() => e(J(this, Cn))));
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 */
ps = function(e) {
  var n;
  if (!this.has_pending_snippet()) {
    this.parent && jt(n = this.parent, tn, ps).call(n, e);
    return;
  }
  Ne(this, Ir, J(this, Ir) + e), J(this, Ir) === 0 && (Ne(this, Dn, !1), J(this, ln) && xr(J(this, ln), () => {
    Ne(this, ln, null);
  }), J(this, yr) && (J(this, Cn).before(J(this, yr)), Ne(this, yr, null)), Lr(() => {
    ar.ensure().flush();
  }));
};
function yf(t, e) {
  for (var n = t.nodes_start, r = t.nodes_end; n !== null; ) {
    var i = n === r ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Ba(n)
    );
    e.append(n), n = i;
  }
}
function ju(t, e, n) {
  const r = Fa() ? So : Ks;
  if (e.length === 0) {
    n(t.map(r));
    return;
  }
  var i = ot, a = (
    /** @type {Effect} */
    je
  ), o = If();
  Promise.all(e.map((c) => /* @__PURE__ */ _f(c))).then((c) => {
    o();
    try {
      n([...t.map(r), ...c]);
    } catch (l) {
      a.f & ci || zi(l, a);
    }
    i == null || i.deactivate(), ms();
  }).catch((c) => {
    zi(c, a);
  });
}
function If() {
  var t = je, e = Ve, n = ut, r = ot;
  return function() {
    Xn(t), cn(e), Ki(n), r == null || r.activate();
  };
}
function ms() {
  Xn(null), cn(null), Ki(null);
}
// @__NO_SIDE_EFFECTS__
function So(t) {
  var e = nn | gn, n = Ve !== null && Ve.f & nn ? (
    /** @type {Derived} */
    Ve
  ) : null;
  return je === null || n !== null && n.f & Tn ? e |= Tn : je.f |= na, {
    ctx: ut,
    deps: null,
    effects: null,
    equals: Pu,
    f: e,
    fn: t,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      Pt
    ),
    wv: 0,
    parent: n ?? je,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function _f(t, e) {
  let n = (
    /** @type {Effect | null} */
    je
  );
  n === null && Kd();
  var r = (
    /** @type {Boundary} */
    n.b
  ), i = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), a = si(
    /** @type {V} */
    Pt
  ), o = !Ve, c = /* @__PURE__ */ new Map();
  return Df(() => {
    var f;
    var l = Mu();
    i = l.promise;
    try {
      Promise.resolve(t()).then(l.resolve, l.reject).then(ms);
    } catch (v) {
      l.reject(v), ms();
    }
    var u = (
      /** @type {Batch} */
      ot
    ), d = r.is_pending();
    o && (r.update_pending_count(1), d || (u.increment(), (f = c.get(u)) == null || f.reject(Ci), c.delete(u), c.set(u, l)));
    const h = (v, m = void 0) => {
      if (d || u.activate(), m)
        m !== Ci && (a.f |= ri, Xi(a, m));
      else {
        a.f & ri && (a.f ^= ri), Xi(a, v);
        for (const [g, I] of c) {
          if (c.delete(g), g === u) break;
          I.reject(Ci);
        }
      }
      o && (r.update_pending_count(-1), d || u.decrement());
    };
    l.promise.then(h, (v) => h(null, v || "unknown"));
  }), To(() => {
    for (const l of c.values())
      l.reject(Ci);
  }), new Promise((l) => {
    function u(d) {
      function h() {
        d === i ? l(a) : u(i);
      }
      d.then(h, h);
    }
    u(i);
  });
}
// @__NO_SIDE_EFFECTS__
function ae(t) {
  const e = /* @__PURE__ */ So(t);
  return ic(e), e;
}
// @__NO_SIDE_EFFECTS__
function Ks(t) {
  const e = /* @__PURE__ */ So(t);
  return e.equals = Nu, e;
}
function qu(t) {
  var e = t.effects;
  if (e !== null) {
    t.effects = null;
    for (var n = 0; n < e.length; n += 1)
      Bt(
        /** @type {Effect} */
        e[n]
      );
  }
}
function Ef(t) {
  for (var e = t.parent; e !== null; ) {
    if (!(e.f & nn))
      return (
        /** @type {Effect} */
        e
      );
    e = e.parent;
  }
  return null;
}
function zs(t) {
  var e, n = je;
  Xn(Ef(t));
  try {
    qu(t), e = lc(t);
  } finally {
    Xn(n);
  }
  return e;
}
function Wu(t) {
  var e = zs(t);
  if (t.equals(e) || (t.v = e, t.wv = oc()), !fi)
    if (Ft !== null)
      Ft.set(t, t.v);
    else {
      var n = (Er || t.f & Tn) && t.deps !== null ? Dr : zt;
      en(t, n);
    }
}
const Sr = /* @__PURE__ */ new Map();
function si(t, e) {
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
function be(t, e) {
  const n = si(t);
  return ic(n), n;
}
// @__NO_SIDE_EFFECTS__
function Ku(t, e = !1, n = !0) {
  var i;
  const r = si(t);
  return e || (r.equals = Nu), ra && n && ut !== null && ut.l !== null && ((i = ut.l).s ?? (i.s = [])).push(r), r;
}
function Q(t, e, n = !1) {
  Ve !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Pn || Ve.f & gl) && Fa() && Ve.f & (nn | li | Ao | gl) && !($t != null && $t.includes(t)) && ef();
  let r = n ? ye(e) : e;
  return Xi(t, r);
}
function Xi(t, e) {
  if (!t.equals(e)) {
    var n = t.v;
    fi ? Sr.set(t, e) : Sr.set(t, n), t.v = e;
    var r = ar.ensure();
    r.capture(t, n), t.f & nn && (t.f & gn && zs(
      /** @type {Derived} */
      t
    ), en(t, t.f & Tn ? Dr : zt)), t.wv = oc(), zu(t, gn), Fa() && je !== null && je.f & zt && !(je.f & (or | ui)) && (An === null ? Uf([t]) : An.push(t));
  }
  return e;
}
function Sa(t) {
  Q(t, t.v + 1);
}
function zu(t, e) {
  var n = t.reactions;
  if (n !== null)
    for (var r = Fa(), i = n.length, a = 0; a < i; a++) {
      var o = n[a], c = o.f;
      if (!(!r && o === je)) {
        var l = (c & gn) === 0;
        l && en(o, e), c & nn ? zu(
          /** @type {Derived} */
          o,
          Dr
        ) : l && (c & li && nr !== null && nr.push(
          /** @type {Effect} */
          o
        ), oi(
          /** @type {Effect} */
          o
        ));
      }
    }
}
function ye(t) {
  if (typeof t != "object" || t === null || Kn in t)
    return t;
  const e = Bs(t);
  if (e !== Vd && e !== Gd)
    return t;
  var n = /* @__PURE__ */ new Map(), r = Eo(t), i = /* @__PURE__ */ be(0), a = ii, o = (c) => {
    if (ii === a)
      return c();
    var l = Ve, u = ii;
    cn(null), Cl(a);
    var d = c();
    return cn(l), Cl(u), d;
  };
  return r && n.set("length", /* @__PURE__ */ be(
    /** @type {any[]} */
    t.length
  )), new Proxy(
    /** @type {any} */
    t,
    {
      defineProperty(c, l, u) {
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && Jd();
        var d = n.get(l);
        return d === void 0 ? d = o(() => {
          var h = /* @__PURE__ */ be(u.value);
          return n.set(l, h), h;
        }) : Q(d, u.value, !0), !0;
      },
      deleteProperty(c, l) {
        var u = n.get(l);
        if (u === void 0) {
          if (l in c) {
            const d = o(() => /* @__PURE__ */ be(Pt));
            n.set(l, d), Sa(i);
          }
        } else
          Q(u, Pt), Sa(i);
        return !0;
      },
      get(c, l, u) {
        var v;
        if (l === Kn)
          return t;
        var d = n.get(l), h = l in c;
        if (d === void 0 && (!h || (v = Cr(c, l)) != null && v.writable) && (d = o(() => {
          var m = ye(h ? c[l] : Pt), g = /* @__PURE__ */ be(m);
          return g;
        }), n.set(l, d)), d !== void 0) {
          var f = s(d);
          return f === Pt ? void 0 : f;
        }
        return Reflect.get(c, l, u);
      },
      getOwnPropertyDescriptor(c, l) {
        var u = Reflect.getOwnPropertyDescriptor(c, l);
        if (u && "value" in u) {
          var d = n.get(l);
          d && (u.value = s(d));
        } else if (u === void 0) {
          var h = n.get(l), f = h == null ? void 0 : h.v;
          if (h !== void 0 && f !== Pt)
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
        if (l === Kn)
          return !0;
        var u = n.get(l), d = u !== void 0 && u.v !== Pt || Reflect.has(c, l);
        if (u !== void 0 || je !== null && (!d || (f = Cr(c, l)) != null && f.writable)) {
          u === void 0 && (u = o(() => {
            var v = d ? ye(c[l]) : Pt, m = /* @__PURE__ */ be(v);
            return m;
          }), n.set(l, u));
          var h = s(u);
          if (h === Pt)
            return !1;
        }
        return d;
      },
      set(c, l, u, d) {
        var S;
        var h = n.get(l), f = l in c;
        if (r && l === "length")
          for (var v = u; v < /** @type {Source<number>} */
          h.v; v += 1) {
            var m = n.get(v + "");
            m !== void 0 ? Q(m, Pt) : v in c && (m = o(() => /* @__PURE__ */ be(Pt)), n.set(v + "", m));
          }
        if (h === void 0)
          (!f || (S = Cr(c, l)) != null && S.writable) && (h = o(() => /* @__PURE__ */ be(void 0)), Q(h, ye(u)), n.set(l, h));
        else {
          f = h.v !== Pt;
          var g = o(() => ye(u));
          Q(h, g);
        }
        var I = Reflect.getOwnPropertyDescriptor(c, l);
        if (I != null && I.set && I.set.call(d, u), !f) {
          if (r && typeof l == "string") {
            var E = (
              /** @type {Source<number>} */
              n.get("length")
            ), T = Number(l);
            Number.isInteger(T) && T >= E.v && Q(E, T + 1);
          }
          Sa(i);
        }
        return !0;
      },
      ownKeys(c) {
        s(i);
        var l = Reflect.ownKeys(c).filter((h) => {
          var f = n.get(h);
          return f === void 0 || f.v !== Pt;
        });
        for (var [u, d] of n)
          d.v !== Pt && !(u in c) && l.push(u);
        return l;
      },
      setPrototypeOf() {
        $d();
      }
    }
  );
}
function yl(t) {
  try {
    if (t !== null && typeof t == "object" && Kn in t)
      return t[Kn];
  } catch {
  }
  return t;
}
function Af(t, e) {
  return Object.is(yl(t), yl(e));
}
var Il, Xu, Yu, Zu, Qu;
function Cf() {
  if (Il === void 0) {
    Il = window, Xu = document, Yu = /Firefox/.test(navigator.userAgent);
    var t = Element.prototype, e = Node.prototype, n = Text.prototype;
    Zu = Cr(e, "firstChild").get, Qu = Cr(e, "nextSibling").get, ml(t) && (t.__click = void 0, t.__className = void 0, t.__attributes = null, t.__style = void 0, t.__e = void 0), ml(n) && (n.__t = void 0);
  }
}
function Pr(t = "") {
  return document.createTextNode(t);
}
// @__NO_SIDE_EFFECTS__
function Yi(t) {
  return Zu.call(t);
}
// @__NO_SIDE_EFFECTS__
function Ba(t) {
  return Qu.call(t);
}
function Ie(t, e) {
  return /* @__PURE__ */ Yi(t);
}
function Y(t, e = !1) {
  {
    var n = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ Yi(
        /** @type {Node} */
        t
      )
    );
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ Ba(n) : n;
  }
}
function Ee(t, e = 1, n = !1) {
  let r = t;
  for (; e--; )
    r = /** @type {TemplateNode} */
    /* @__PURE__ */ Ba(r);
  return r;
}
function Sf(t) {
  t.textContent = "";
}
function Xs() {
  return !1;
}
function xf(t, e) {
  if (e) {
    const n = document.body;
    t.autofocus = !0, Lr(() => {
      document.activeElement === n && t.focus();
    });
  }
}
let _l = !1;
function Tf() {
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
function xo(t) {
  var e = Ve, n = je;
  cn(null), Xn(null);
  try {
    return t();
  } finally {
    cn(e), Xn(n);
  }
}
function wf(t, e, n, r = n) {
  t.addEventListener(e, () => xo(n));
  const i = t.__on_r;
  i ? t.__on_r = () => {
    i(), r(!0);
  } : t.__on_r = () => r(!0), Tf();
}
function Lf(t) {
  je === null && Ve === null && Yd(), Ve !== null && Ve.f & Tn && je === null && Xd(), fi && zd();
}
function Of(t, e) {
  var n = e.last;
  n === null ? e.last = e.first = t : (n.next = t, t.prev = n, e.last = t);
}
function sr(t, e, n, r = !0) {
  var i = je;
  i !== null && i.f & Un && (t |= Un);
  var a = {
    ctx: ut,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: t | gn,
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
      Ta(a), a.f |= js;
    } catch (l) {
      throw Bt(a), l;
    }
  else e !== null && oi(a);
  if (r) {
    var o = a;
    if (n && o.deps === null && o.teardown === null && o.nodes_start === null && o.first === o.last && // either `null`, or a singular child
    !(o.f & na) && (o = o.first), o !== null && (o.parent = i, i !== null && Of(o, i), Ve !== null && Ve.f & nn && !(t & ui))) {
      var c = (
        /** @type {Derived} */
        Ve
      );
      (c.effects ?? (c.effects = [])).push(o);
    }
  }
  return a;
}
function Rf() {
  return Ve !== null && !Pn;
}
function To(t) {
  const e = sr(Vs, null, !1);
  return en(e, zt), e.teardown = t, e;
}
function xe(t) {
  Lf();
  var e = (
    /** @type {Effect} */
    je.f
  ), n = !Ve && (e & or) !== 0 && (e & js) === 0;
  if (n) {
    var r = (
      /** @type {ComponentContext} */
      ut
    );
    (r.e ?? (r.e = [])).push(t);
  } else
    return Ju(t);
}
function Ju(t) {
  return sr(ks | qd, t, !1);
}
function Mf(t) {
  ar.ensure();
  const e = sr(ui | na, t, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? xr(e, () => {
      Bt(e), r(void 0);
    }) : (Bt(e), r(void 0));
  });
}
function ka(t) {
  return sr(ks, t, !1);
}
function Df(t) {
  return sr(Ao | na, t, !0);
}
function wo(t, e = 0) {
  return sr(Vs | e, t, !0);
}
function Fe(t, e = [], n = []) {
  ju(e, n, (r) => {
    sr(Vs, () => t(...r.map(s)), !0);
  });
}
function Nr(t, e = 0) {
  var n = sr(li | e, t, !0);
  return n;
}
function qt(t, e = !0) {
  return sr(or | na, t, !0, e);
}
function $u(t) {
  var e = t.teardown;
  if (e !== null) {
    const n = fi, r = Ve;
    Al(!0), cn(null);
    try {
      e.call(null);
    } finally {
      Al(n), cn(r);
    }
  }
}
function ec(t, e = !1) {
  var n = t.first;
  for (t.first = t.last = null; n !== null; ) {
    const i = n.ac;
    i !== null && xo(() => {
      i.abort(Ci);
    });
    var r = n.next;
    n.f & ui ? n.parent = null : Bt(n, e), n = r;
  }
}
function Pf(t) {
  for (var e = t.first; e !== null; ) {
    var n = e.next;
    e.f & or || Bt(e), e = n;
  }
}
function Bt(t, e = !0) {
  var n = !1;
  (e || t.f & jd) && t.nodes_start !== null && t.nodes_end !== null && (Nf(
    t.nodes_start,
    /** @type {TemplateNode} */
    t.nodes_end
  ), n = !0), ec(t, e && !n), uo(t, 0), en(t, ci);
  var r = t.transitions;
  if (r !== null)
    for (const a of r)
      a.stop();
  $u(t);
  var i = t.parent;
  i !== null && i.first !== null && tc(t), t.next = t.prev = t.teardown = t.ctx = t.deps = t.fn = t.nodes_start = t.nodes_end = t.ac = null;
}
function Nf(t, e) {
  for (; t !== null; ) {
    var n = t === e ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Ba(t)
    );
    t.remove(), t = n;
  }
}
function tc(t) {
  var e = t.parent, n = t.prev, r = t.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), e !== null && (e.first === t && (e.first = r), e.last === t && (e.last = n));
}
function xr(t, e) {
  var n = [];
  Ys(t, n, !0), nc(n, () => {
    Bt(t), e && e();
  });
}
function nc(t, e) {
  var n = t.length;
  if (n > 0) {
    var r = () => --n || e();
    for (var i of t)
      i.out(r);
  } else
    e();
}
function Ys(t, e, n) {
  if (!(t.f & Un)) {
    if (t.f ^= Un, t.transitions !== null)
      for (const o of t.transitions)
        (o.is_global || n) && e.push(o);
    for (var r = t.first; r !== null; ) {
      var i = r.next, a = (r.f & di) !== 0 || (r.f & or) !== 0;
      Ys(r, e, a ? n : !1), r = i;
    }
  }
}
function Lo(t) {
  rc(t, !0);
}
function rc(t, e) {
  if (t.f & Un) {
    t.f ^= Un, t.f & zt || (en(t, gn), oi(t));
    for (var n = t.first; n !== null; ) {
      var r = n.next, i = (n.f & di) !== 0 || (n.f & or) !== 0;
      rc(n, i ? e : !1), n = r;
    }
    if (t.transitions !== null)
      for (const a of t.transitions)
        (a.is_global || e) && a.in();
  }
}
let Pi = !1;
function El(t) {
  Pi = t;
}
let fi = !1;
function Al(t) {
  fi = t;
}
let Ve = null, Pn = !1;
function cn(t) {
  Ve = t;
}
let je = null;
function Xn(t) {
  je = t;
}
let $t = null;
function ic(t) {
  Ve !== null && ($t === null ? $t = [t] : $t.push(t));
}
let Jt = null, vn = 0, An = null;
function Uf(t) {
  An = t;
}
let ac = 1, xa = 0, ii = xa;
function Cl(t) {
  ii = t;
}
let Er = !1;
function oc() {
  return ++ac;
}
function Oo(t) {
  var h;
  var e = t.f;
  if (e & gn)
    return !0;
  if (e & Dr) {
    var n = t.deps, r = (e & Tn) !== 0;
    if (n !== null) {
      var i, a, o = (e & lo) !== 0, c = r && je !== null && !Er, l = n.length;
      if ((o || c) && (je === null || !(je.f & ci))) {
        var u = (
          /** @type {Derived} */
          t
        ), d = u.parent;
        for (i = 0; i < l; i++)
          a = n[i], (o || !((h = a == null ? void 0 : a.reactions) != null && h.includes(u))) && (a.reactions ?? (a.reactions = [])).push(u);
        o && (u.f ^= lo), c && d !== null && !(d.f & Tn) && (u.f ^= Tn);
      }
      for (i = 0; i < l; i++)
        if (a = n[i], Oo(
          /** @type {Derived} */
          a
        ) && Wu(
          /** @type {Derived} */
          a
        ), a.wv > t.wv)
          return !0;
    }
    (!r || je !== null && !Er) && en(t, zt);
  }
  return !1;
}
function sc(t, e, n = !0) {
  var r = t.reactions;
  if (r !== null && !($t != null && $t.includes(t)))
    for (var i = 0; i < r.length; i++) {
      var a = r[i];
      a.f & nn ? sc(
        /** @type {Derived} */
        a,
        e,
        !1
      ) : e === a && (n ? en(a, gn) : a.f & zt && en(a, Dr), oi(
        /** @type {Effect} */
        a
      ));
    }
}
function lc(t) {
  var g;
  var e = Jt, n = vn, r = An, i = Ve, a = Er, o = $t, c = ut, l = Pn, u = ii, d = t.f;
  Jt = /** @type {null | Value[]} */
  null, vn = 0, An = null, Er = (d & Tn) !== 0 && (Pn || !Pi || Ve === null), Ve = d & (or | ui) ? null : t, $t = null, Ki(t.ctx), Pn = !1, ii = ++xa, t.ac !== null && (xo(() => {
    t.ac.abort(Ci);
  }), t.ac = null);
  try {
    t.f |= cs;
    var h = (
      /** @type {Function} */
      t.fn
    ), f = h(), v = t.deps;
    if (Jt !== null) {
      var m;
      if (uo(t, vn), v !== null && vn > 0)
        for (v.length = vn + Jt.length, m = 0; m < Jt.length; m++)
          v[vn + m] = Jt[m];
      else
        t.deps = v = Jt;
      if (!Er || // Deriveds that already have reactions can cleanup, so we still add them as reactions
      d & nn && /** @type {import('#client').Derived} */
      t.reactions !== null)
        for (m = vn; m < v.length; m++)
          ((g = v[m]).reactions ?? (g.reactions = [])).push(t);
    } else v !== null && vn < v.length && (uo(t, vn), v.length = vn);
    if (Fa() && An !== null && !Pn && v !== null && !(t.f & (nn | Dr | gn)))
      for (m = 0; m < /** @type {Source[]} */
      An.length; m++)
        sc(
          An[m],
          /** @type {Effect} */
          t
        );
    return i !== null && i !== t && (xa++, An !== null && (r === null ? r = An : r.push(.../** @type {Source[]} */
    An))), t.f & ri && (t.f ^= ri), f;
  } catch (I) {
    return Fu(I);
  } finally {
    t.f ^= cs, Jt = e, vn = n, An = r, Ve = i, Er = a, $t = o, Ki(c), Pn = l, ii = u;
  }
}
function Hf(t, e) {
  let n = e.reactions;
  if (n !== null) {
    var r = kd.call(n, t);
    if (r !== -1) {
      var i = n.length - 1;
      i === 0 ? n = e.reactions = null : (n[r] = n[i], n.pop());
    }
  }
  n === null && e.f & nn && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Jt === null || !Jt.includes(e)) && (en(e, Dr), e.f & (Tn | lo) || (e.f ^= lo), qu(
    /** @type {Derived} **/
    e
  ), uo(
    /** @type {Derived} **/
    e,
    0
  ));
}
function uo(t, e) {
  var n = t.deps;
  if (n !== null)
    for (var r = e; r < n.length; r++)
      Hf(t, n[r]);
}
function Ta(t) {
  var e = t.f;
  if (!(e & ci)) {
    en(t, zt);
    var n = je, r = Pi;
    je = t, Pi = !0;
    try {
      e & li ? Pf(t) : ec(t), $u(t);
      var i = lc(t);
      t.teardown = typeof i == "function" ? i : null, t.wv = ac;
      var a;
      Lu && of && t.f & gn && t.deps;
    } finally {
      Pi = r, je = n;
    }
  }
}
async function Ro() {
  await Promise.resolve(), df();
}
function s(t) {
  var e = t.f, n = (e & nn) !== 0;
  if (Ve !== null && !Pn) {
    var r = je !== null && (je.f & ci) !== 0;
    if (!r && !($t != null && $t.includes(t))) {
      var i = Ve.deps;
      if (Ve.f & cs)
        t.rv < xa && (t.rv = xa, Jt === null && i !== null && i[vn] === t ? vn++ : Jt === null ? Jt = [t] : (!Er || !Jt.includes(t)) && Jt.push(t));
      else {
        (Ve.deps ?? (Ve.deps = [])).push(t);
        var a = t.reactions;
        a === null ? t.reactions = [Ve] : a.includes(Ve) || a.push(Ve);
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
    if (Sr.has(t))
      return Sr.get(t);
    if (n) {
      o = /** @type {Derived} */
      t;
      var l = o.v;
      return (!(o.f & zt) && o.reactions !== null || uc(o)) && (l = zs(o)), Sr.set(o, l), l;
    }
  } else if (n) {
    if (o = /** @type {Derived} */
    t, Ft != null && Ft.has(o))
      return Ft.get(o);
    Oo(o) && Wu(o);
  }
  if (Ft != null && Ft.has(t))
    return Ft.get(t);
  if (t.f & ri)
    throw t.v;
  return t.v;
}
function uc(t) {
  if (t.v === Pt) return !0;
  if (t.deps === null) return !1;
  for (const e of t.deps)
    if (Sr.has(e) || e.f & nn && uc(
      /** @type {Derived} */
      e
    ))
      return !0;
  return !1;
}
function Ur(t) {
  var e = Pn;
  try {
    return Pn = !0, t();
  } finally {
    Pn = e;
  }
}
const Ff = -7169;
function en(t, e) {
  t.f = t.f & Ff | e;
}
function Bf(t) {
  if (!(typeof t != "object" || !t || t instanceof EventTarget)) {
    if (Kn in t)
      gs(t);
    else if (!Array.isArray(t))
      for (let e in t) {
        const n = t[e];
        typeof n == "object" && n && Kn in n && gs(n);
      }
  }
}
function gs(t, e = /* @__PURE__ */ new Set()) {
  if (typeof t == "object" && t !== null && // We don't want to traverse DOM elements
  !(t instanceof EventTarget) && !e.has(t)) {
    e.add(t), t instanceof Date && t.getTime();
    for (let r in t)
      try {
        gs(t[r], e);
      } catch {
      }
    const n = Bs(t);
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
const cc = /* @__PURE__ */ new Set(), bs = /* @__PURE__ */ new Set();
function Zs(t, e, n, r = {}) {
  function i(a) {
    if (r.capture || ya.call(e, a), !a.cancelBubble)
      return xo(() => n == null ? void 0 : n.call(this, a));
  }
  return t.startsWith("pointer") || t.startsWith("touch") || t === "wheel" ? Lr(() => {
    e.addEventListener(t, i, r);
  }) : e.addEventListener(t, i, r), i;
}
function kf(t, e, n, r = {}) {
  var i = Zs(e, t, n, r);
  return () => {
    t.removeEventListener(e, i, r);
  };
}
function ba(t, e, n, r, i) {
  var a = { capture: r, passive: i }, o = Zs(t, e, n, a);
  (e === document.body || // @ts-ignore
  e === window || // @ts-ignore
  e === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  e instanceof HTMLMediaElement) && To(() => {
    e.removeEventListener(t, o, a);
  });
}
function lr(t) {
  for (var e = 0; e < t.length; e++)
    cc.add(t[e]);
  for (var n of bs)
    n(t);
}
let Sl = null;
function ya(t) {
  var T;
  var e = this, n = (
    /** @type {Node} */
    e.ownerDocument
  ), r = t.type, i = ((T = t.composedPath) == null ? void 0 : T.call(t)) || [], a = (
    /** @type {null | Element} */
    i[0] || t.target
  );
  Sl = t;
  var o = 0, c = Sl === t && t.__root;
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
    var d = Ve, h = je;
    cn(null), Xn(null);
    try {
      for (var f, v = []; a !== null; ) {
        var m = a.assignedSlot || a.parentNode || /** @type {any} */
        a.host || null;
        try {
          var g = a["__" + r];
          if (g != null && (!/** @type {any} */
          a.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          t.target === a))
            if (Eo(g)) {
              var [I, ...E] = g;
              I.apply(a, [t, ...E]);
            } else
              g.call(a, t);
        } catch (S) {
          f ? v.push(S) : f = S;
        }
        if (t.cancelBubble || m === e || m === null)
          break;
        a = m;
      }
      if (f) {
        for (let S of v)
          queueMicrotask(() => {
            throw S;
          });
        throw f;
      }
    } finally {
      t.__root = e, delete t.currentTarget, cn(d), Xn(h);
    }
  }
}
function dc(t) {
  var e = document.createElement("template");
  return e.innerHTML = t.replaceAll("<!>", "<!---->"), e.content;
}
function Zi(t, e) {
  var n = (
    /** @type {Effect} */
    je
  );
  n.nodes_start === null && (n.nodes_start = t, n.nodes_end = e);
}
// @__NO_SIDE_EFFECTS__
function ve(t, e) {
  var n = (e & 1) !== 0, r = (e & 2) !== 0, i, a = !t.startsWith("<!>");
  return () => {
    i === void 0 && (i = dc(a ? t : "<!>" + t), n || (i = /** @type {Node} */
    /* @__PURE__ */ Yi(i)));
    var o = (
      /** @type {TemplateNode} */
      r || Yu ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (n) {
      var c = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Yi(o)
      ), l = (
        /** @type {TemplateNode} */
        o.lastChild
      );
      Zi(c, l);
    } else
      Zi(o, o);
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
        dc(i)
      ), c = (
        /** @type {Element} */
        /* @__PURE__ */ Yi(o)
      );
      a = /** @type {Element} */
      /* @__PURE__ */ Yi(c);
    }
    var l = (
      /** @type {TemplateNode} */
      a.cloneNode(!0)
    );
    return Zi(l, l), l;
  };
}
// @__NO_SIDE_EFFECTS__
function dn(t, e) {
  return /* @__PURE__ */ Vf(t, e, "svg");
}
function Xt(t = "") {
  {
    var e = Pr(t + "");
    return Zi(e, e), e;
  }
}
function re() {
  var t = document.createDocumentFragment(), e = document.createComment(""), n = Pr();
  return t.append(e, n), Zi(e, n), t;
}
function O(t, e) {
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
function Kf(t) {
  return t = t.toLowerCase(), Wf[t] ?? t;
}
const zf = ["touchstart", "touchmove"];
function Xf(t) {
  return zf.includes(t);
}
function vt(t, e) {
  var n = e == null ? "" : typeof e == "object" ? e + "" : e;
  n !== (t.__t ?? (t.__t = t.nodeValue)) && (t.__t = n, t.nodeValue = n + "");
}
function Yf(t, e) {
  return Zf(t, e);
}
const Ii = /* @__PURE__ */ new Map();
function Zf(t, { target: e, anchor: n, props: r = {}, events: i, context: a, intro: o = !0 }) {
  Cf();
  var c = /* @__PURE__ */ new Set(), l = (h) => {
    for (var f = 0; f < h.length; f++) {
      var v = h[f];
      if (!c.has(v)) {
        c.add(v);
        var m = Xf(v);
        e.addEventListener(v, ya, { passive: m });
        var g = Ii.get(v);
        g === void 0 ? (document.addEventListener(v, ya, { passive: m }), Ii.set(v, 1)) : Ii.set(v, g + 1);
      }
    }
  };
  l(Fs(cc)), bs.add(l);
  var u = void 0, d = Mf(() => {
    var h = n ?? e.appendChild(Pr());
    return pf(
      /** @type {TemplateNode} */
      h,
      {
        pending: () => {
        }
      },
      (f) => {
        if (a) {
          Le({});
          var v = (
            /** @type {ComponentContext} */
            ut
          );
          v.c = a;
        }
        i && (r.$$events = i), u = t(f, r) || {}, a && Oe();
      }
    ), () => {
      var m;
      for (var f of c) {
        e.removeEventListener(f, ya);
        var v = (
          /** @type {number} */
          Ii.get(f)
        );
        --v === 0 ? (document.removeEventListener(f, ya), Ii.delete(f)) : Ii.set(f, v);
      }
      bs.delete(l), h !== n && ((m = h.parentNode) == null || m.removeChild(h));
    };
  });
  return Qf.set(u, d), u;
}
let Qf = /* @__PURE__ */ new WeakMap();
function Ae(t, e, ...n) {
  var r = t, i = ge, a;
  Nr(() => {
    i !== (i = e()) && (a && (Bt(a), a = null), a = qt(() => (
      /** @type {SnippetFn} */
      i(r, ...n)
    )));
  }, di);
}
function st(t) {
  ut === null && qs(), ra && ut.l !== null ? Jf(ut).m.push(t) : xe(() => {
    const e = Ur(t);
    if (typeof e == "function") return (
      /** @type {() => void} */
      e
    );
  });
}
function Hn(t) {
  ut === null && qs(), st(() => () => Ur(t));
}
function Jf(t) {
  var e = (
    /** @type {ComponentContextLegacy} */
    t.l
  );
  return e.u ?? (e.u = { a: [], b: [], m: [] });
}
function le(t, e, n = !1) {
  var r = t, i = null, a = null, o = Pt, c = n ? di : 0, l = !1;
  const u = (v, m = !0) => {
    l = !0, f(m, v);
  };
  var d = null;
  function h() {
    d !== null && (d.lastChild.remove(), r.before(d), d = null);
    var v = o ? i : a, m = o ? a : i;
    v && Lo(v), m && xr(m, () => {
      o ? a = null : i = null;
    });
  }
  const f = (v, m) => {
    if (o !== (o = v)) {
      var g = Xs(), I = r;
      if (g && (d = document.createDocumentFragment(), d.append(I = Pr())), o ? i ?? (i = m && qt(() => m(I))) : a ?? (a = m && qt(() => m(I))), g) {
        var E = (
          /** @type {Batch} */
          ot
        ), T = o ? i : a, S = o ? a : i;
        T && E.skipped_effects.delete(T), S && E.skipped_effects.add(S), E.add_callback(h);
      } else
        h();
    }
  };
  Nr(() => {
    l = !1, e(u), l || f(null, null);
  }, c);
}
function Ia(t, e) {
  return e;
}
function $f(t, e, n) {
  for (var r = t.items, i = [], a = e.length, o = 0; o < a; o++)
    Ys(e[o].e, i, !0);
  var c = a > 0 && i.length === 0 && n !== null;
  if (c) {
    var l = (
      /** @type {Element} */
      /** @type {Element} */
      n.parentNode
    );
    Sf(l), l.append(
      /** @type {Element} */
      n
    ), r.clear(), kn(t, e[0].prev, e[a - 1].next);
  }
  nc(i, () => {
    for (var u = 0; u < a; u++) {
      var d = e[u];
      c || (r.delete(d.k), kn(t, d.prev, d.next)), Bt(d.e, !c);
    }
  });
}
function rr(t, e, n, r, i, a = null) {
  var o = t, c = { flags: e, items: /* @__PURE__ */ new Map(), first: null }, l = (e & 4) !== 0;
  if (l) {
    var u = (
      /** @type {Element} */
      t
    );
    o = u.appendChild(Pr());
  }
  var d = null, h = !1, f = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ Ks(() => {
    var E = n();
    return Eo(E) ? E : E == null ? [] : Fs(E);
  }), m, g;
  function I() {
    eh(
      g,
      m,
      c,
      f,
      o,
      i,
      e,
      r,
      n
    ), a !== null && (m.length === 0 ? d ? Lo(d) : d = qt(() => a(o)) : d !== null && xr(d, () => {
      d = null;
    }));
  }
  Nr(() => {
    g ?? (g = /** @type {Effect} */
    je), m = /** @type {V[]} */
    s(v);
    var E = m.length;
    if (!(h && E === 0)) {
      h = E === 0;
      var T, S, b, _;
      if (Xs()) {
        var x = /* @__PURE__ */ new Set(), w = (
          /** @type {Batch} */
          ot
        );
        for (S = 0; S < E; S += 1) {
          b = m[S], _ = r(b, S);
          var A = c.items.get(_) ?? f.get(_);
          A ? e & 3 && fc(A, b, S, e) : (T = hc(
            null,
            c,
            null,
            null,
            b,
            _,
            S,
            i,
            e,
            n,
            !0
          ), f.set(_, T)), x.add(_);
        }
        for (const [C, P] of c.items)
          x.has(C) || w.skipped_effects.add(P.e);
        w.add_callback(I);
      } else
        I();
      s(v);
    }
  });
}
function eh(t, e, n, r, i, a, o, c, l) {
  var ee, R, y, L;
  var u = (o & 8) !== 0, d = (o & 3) !== 0, h = e.length, f = n.items, v = n.first, m = v, g, I = null, E, T = [], S = [], b, _, x, w;
  if (u)
    for (w = 0; w < h; w += 1)
      b = e[w], _ = c(b, w), x = f.get(_), x !== void 0 && ((ee = x.a) == null || ee.measure(), (E ?? (E = /* @__PURE__ */ new Set())).add(x));
  for (w = 0; w < h; w += 1) {
    if (b = e[w], _ = c(b, w), x = f.get(_), x === void 0) {
      var A = r.get(_);
      if (A !== void 0) {
        r.delete(_), f.set(_, A);
        var C = I ? I.next : m;
        kn(n, I, A), kn(n, A, C), Ko(A, C, i), I = A;
      } else {
        var P = m ? (
          /** @type {TemplateNode} */
          m.e.nodes_start
        ) : i;
        I = hc(
          P,
          n,
          I,
          I === null ? n.first : I.next,
          b,
          _,
          w,
          a,
          o,
          l
        );
      }
      f.set(_, I), T = [], S = [], m = I.next;
      continue;
    }
    if (d && fc(x, b, w, o), x.e.f & Un && (Lo(x.e), u && ((R = x.a) == null || R.unfix(), (E ?? (E = /* @__PURE__ */ new Set())).delete(x))), x !== m) {
      if (g !== void 0 && g.has(x)) {
        if (T.length < S.length) {
          var K = S[0], H;
          I = K.prev;
          var F = T[0], _e = T[T.length - 1];
          for (H = 0; H < T.length; H += 1)
            Ko(T[H], K, i);
          for (H = 0; H < S.length; H += 1)
            g.delete(S[H]);
          kn(n, F.prev, _e.next), kn(n, I, F), kn(n, _e, K), m = K, I = _e, w -= 1, T = [], S = [];
        } else
          g.delete(x), Ko(x, m, i), kn(n, x.prev, x.next), kn(n, x, I === null ? n.first : I.next), kn(n, I, x), I = x;
        continue;
      }
      for (T = [], S = []; m !== null && m.k !== _; )
        m.e.f & Un || (g ?? (g = /* @__PURE__ */ new Set())).add(m), S.push(m), m = m.next;
      if (m === null)
        continue;
      x = m;
    }
    T.push(x), I = x, m = x.next;
  }
  if (m !== null || g !== void 0) {
    for (var k = g === void 0 ? [] : Fs(g); m !== null; )
      m.e.f & Un || k.push(m), m = m.next;
    var B = k.length;
    if (B > 0) {
      var U = o & 4 && h === 0 ? i : null;
      if (u) {
        for (w = 0; w < B; w += 1)
          (y = k[w].a) == null || y.measure();
        for (w = 0; w < B; w += 1)
          (L = k[w].a) == null || L.fix();
      }
      $f(n, k, U);
    }
  }
  u && Lr(() => {
    var $;
    if (E !== void 0)
      for (x of E)
        ($ = x.a) == null || $.apply();
  }), t.first = n.first && n.first.e, t.last = I && I.e;
  for (var G of r.values())
    Bt(G.e);
  r.clear();
}
function fc(t, e, n, r) {
  r & 1 && Xi(t.v, e), r & 2 ? Xi(
    /** @type {Value<number>} */
    t.i,
    n
  ) : t.i = n;
}
function hc(t, e, n, r, i, a, o, c, l, u, d) {
  var h = (l & 1) !== 0, f = (l & 16) === 0, v = h ? f ? /* @__PURE__ */ Ku(i, !1, !1) : si(i) : i, m = l & 2 ? si(o) : o, g = {
    i: m,
    v,
    k: a,
    a: null,
    // @ts-expect-error
    e: null,
    prev: n,
    next: r
  };
  try {
    if (t === null) {
      var I = document.createDocumentFragment();
      I.append(t = Pr());
    }
    return g.e = qt(() => c(
      /** @type {Node} */
      t,
      v,
      m,
      u
    ), af), g.e.prev = n && n.e, g.e.next = r && r.e, n === null ? d || (e.first = g) : (n.next = g, n.e.next = g.e), r !== null && (r.prev = g, r.e.prev = g.e), g;
  } finally {
  }
}
function Ko(t, e, n) {
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
      /* @__PURE__ */ Ba(a)
    );
    i.before(a), a = o;
  }
}
function kn(t, e, n) {
  e === null ? t.first = n : (e.next = n, e.e.next = n && n.e), n !== null && (n.prev = e, n.e.prev = e && e.e);
}
function ur(t, e, n) {
  var r = t, i, a, o = null, c = null;
  function l() {
    a && (xr(a), a = null), o && (o.lastChild.remove(), r.before(o), o = null), a = c, c = null;
  }
  Nr(() => {
    if (i !== (i = e())) {
      var u = Xs();
      if (i) {
        var d = r;
        u && (o = document.createDocumentFragment(), o.append(d = Pr()), a && ot.skipped_effects.add(a)), c = qt(() => n(d, i));
      }
      u ? ot.add_callback(l) : l();
    }
  }, di);
}
function xl(t, e, n, r, i, a) {
  var o, c, l = null, u = (
    /** @type {TemplateNode} */
    t
  ), d;
  Nr(() => {
    const h = e() || null;
    var f = h === "svg" ? Fd : null;
    h !== o && (d && (h === null ? xr(d, () => {
      d = null, c = null;
    }) : h === c ? Lo(d) : Bt(d)), h && h !== c && (d = qt(() => {
      if (l = f ? document.createElementNS(f, h) : document.createElement(h), Zi(l, l), r) {
        var v = (
          /** @type {TemplateNode} */
          l.appendChild(Pr())
        );
        r(l, v);
      }
      je.nodes_end = l, u.before(l);
    })), o = h, o && (c = o));
  }, di);
}
function Be(t, e, n) {
  ka(() => {
    var r = Ur(() => e(t, n == null ? void 0 : n()) || {});
    if (n && (r != null && r.update)) {
      var i = !1, a = (
        /** @type {any} */
        {}
      );
      wo(() => {
        var o = n();
        Bf(o), i && Ws(a, o) && (a = o, r.update(o));
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
  Nr(() => {
    n !== (n = e()) && (r && (Bt(r), r = null), n && (r = qt(() => {
      ka(() => (
        /** @type {(node: Element) => void} */
        n(t)
      ));
    })));
  });
}
function vc(t) {
  var e, n, r = "";
  if (typeof t == "string" || typeof t == "number") r += t;
  else if (typeof t == "object") if (Array.isArray(t)) {
    var i = t.length;
    for (e = 0; e < i; e++) t[e] && (n = vc(t[e])) && (r && (r += " "), r += n);
  } else for (n in t) t[n] && (r && (r += " "), r += n);
  return r;
}
function nh() {
  for (var t, e, n = 0, r = "", i = arguments.length; n < i; n++) (t = arguments[n]) && (e = vc(t)) && (r && (r += " "), r += e);
  return r;
}
function pc(t) {
  return typeof t == "object" ? nh(t) : t ?? "";
}
const Tl = [...` 	
\r\f \v\uFEFF`];
function rh(t, e, n) {
  var r = t == null ? "" : "" + t;
  if (n) {
    for (var i in n)
      if (n[i])
        r = r ? r + " " + i : i;
      else if (r.length)
        for (var a = i.length, o = 0; (o = r.indexOf(i, o)) >= 0; ) {
          var c = o + a;
          (o === 0 || Tl.includes(r[o - 1])) && (c === r.length || Tl.includes(r[c])) ? r = (o === 0 ? "" : r.substring(0, o)) + r.substring(c + 1) : o = c;
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
function zo(t) {
  return t[0] !== "-" || t[1] !== "-" ? t.toLowerCase() : t;
}
function ih(t, e) {
  if (e) {
    var n = "", r, i;
    if (Array.isArray(e) ? (r = e[0], i = e[1]) : r = e, t) {
      t = String(t).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var a = !1, o = 0, c = !1, l = [];
      r && l.push(...Object.keys(r).map(zo)), i && l.push(...Object.keys(i).map(zo));
      var u = 0, d = -1;
      const g = t.length;
      for (var h = 0; h < g; h++) {
        var f = t[h];
        if (c ? f === "/" && t[h - 1] === "*" && (c = !1) : a ? a === f && (a = !1) : f === "/" && t[h + 1] === "*" ? c = !0 : f === '"' || f === "'" ? a = f : f === "(" ? o++ : f === ")" && o--, !c && a === !1 && o === 0) {
          if (f === ":" && d === -1)
            d = h;
          else if (f === ";" || h === g - 1) {
            if (d !== -1) {
              var v = zo(t.substring(u, d).trim());
              if (!l.includes(v)) {
                f !== ";" && h++;
                var m = t.substring(u, h).trim();
                n += " " + m + ";";
              }
            }
            u = h + 1, d = -1;
          }
        }
      }
    }
    return r && (n += wl(r)), i && (n += wl(i, !0)), n = n.trim(), n === "" ? null : n;
  }
  return t == null ? null : String(t);
}
function mc(t, e, n, r, i, a) {
  var o = t.__className;
  if (o !== n || o === void 0) {
    var c = rh(n, r, a);
    c == null ? t.removeAttribute("class") : e ? t.className = c : t.setAttribute("class", c), t.__className = n;
  } else if (a && i !== a)
    for (var l in a) {
      var u = !!a[l];
      (i == null || u !== !!i[l]) && t.classList.toggle(l, u);
    }
  return a;
}
function Xo(t, e = {}, n, r) {
  for (var i in n) {
    var a = n[i];
    e[i] !== a && (n[i] == null ? t.style.removeProperty(i) : t.style.setProperty(i, a, r));
  }
}
function rn(t, e, n, r) {
  var i = t.__style;
  if (i !== e) {
    var a = ih(e, r);
    a == null ? t.removeAttribute("style") : t.style.cssText = a, t.__style = e;
  } else r && (Array.isArray(r) ? (Xo(t, n == null ? void 0 : n[0], r[0]), Xo(t, n == null ? void 0 : n[1], r[1], "important")) : Xo(t, n, r));
  return r;
}
function ys(t, e, n = !1) {
  if (t.multiple) {
    if (e == null)
      return;
    if (!Eo(e))
      return nf();
    for (var r of t.options)
      r.selected = e.includes(Ll(r));
    return;
  }
  for (r of t.options) {
    var i = Ll(r);
    if (Af(i, e)) {
      r.selected = !0;
      return;
    }
  }
  (!n || e !== void 0) && (t.selectedIndex = -1);
}
function ah(t) {
  var e = new MutationObserver(() => {
    ys(t, t.__value);
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
  }), To(() => {
    e.disconnect();
  });
}
function Ll(t) {
  return "__value" in t ? t.__value : t.value;
}
const fa = Symbol("class"), ha = Symbol("style"), gc = Symbol("is custom element"), bc = Symbol("is html");
function Ol(t, e) {
  var n = Qs(t);
  n.value === (n.value = // treat null and undefined the same for the initial value
  e ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  t.value === e && (e !== 0 || t.nodeName !== "PROGRESS") || (t.value = e ?? "");
}
function oh(t, e) {
  e ? t.hasAttribute("selected") || t.setAttribute("selected", "") : t.removeAttribute("selected");
}
function Tr(t, e, n, r) {
  var i = Qs(t);
  i[e] !== (i[e] = n) && (e === "loading" && (t[Wd] = n), n == null ? t.removeAttribute(e) : typeof n != "string" && yc(t).includes(e) ? t[e] = n : t.setAttribute(e, n));
}
function sh(t, e, n, r, i = !1, a = !1) {
  var o = Qs(t), c = o[gc], l = !o[bc], u = e || {}, d = t.tagName === "OPTION";
  for (var h in e)
    h in n || (n[h] = null);
  n.class ? n.class = pc(n.class) : n[fa] && (n.class = null), n[ha] && (n.style ?? (n.style = null));
  var f = yc(t);
  for (const S in n) {
    let b = n[S];
    if (d && S === "value" && b == null) {
      t.value = t.__value = "", u[S] = b;
      continue;
    }
    if (S === "class") {
      var v = t.namespaceURI === "http://www.w3.org/1999/xhtml";
      mc(t, v, b, r, e == null ? void 0 : e[fa], n[fa]), u[S] = b, u[fa] = n[fa];
      continue;
    }
    if (S === "style") {
      rn(t, b, e == null ? void 0 : e[ha], n[ha]), u[S] = b, u[ha] = n[ha];
      continue;
    }
    var m = u[S];
    if (!(b === m && !(b === void 0 && t.hasAttribute(S)))) {
      u[S] = b;
      var g = S[0] + S[1];
      if (g !== "$$")
        if (g === "on") {
          const _ = {}, x = "$$" + S;
          let w = S.slice(2);
          var I = qf(w);
          if (Gf(w) && (w = w.slice(0, -7), _.capture = !0), !I && m) {
            if (b != null) continue;
            t.removeEventListener(w, u[x], _), u[x] = null;
          }
          if (b != null)
            if (I)
              t[`__${w}`] = b, lr([w]);
            else {
              let A = function(C) {
                u[S].call(this, C);
              };
              u[x] = Zs(w, t, A, _);
            }
          else I && (t[`__${w}`] = void 0);
        } else if (S === "style")
          Tr(t, S, b);
        else if (S === "autofocus")
          xf(
            /** @type {HTMLElement} */
            t,
            !!b
          );
        else if (!c && (S === "__value" || S === "value" && b != null))
          t.value = t.__value = b;
        else if (S === "selected" && d)
          oh(
            /** @type {HTMLOptionElement} */
            t,
            b
          );
        else {
          var E = S;
          l || (E = Kf(E));
          var T = E === "defaultValue" || E === "defaultChecked";
          if (b == null && !c && !T)
            if (o[S] = null, E === "value" || E === "checked") {
              let _ = (
                /** @type {HTMLInputElement} */
                t
              );
              const x = e === void 0;
              if (E === "value") {
                let w = _.defaultValue;
                _.removeAttribute(E), _.defaultValue = w, _.value = _.__value = x ? w : null;
              } else {
                let w = _.defaultChecked;
                _.removeAttribute(E), _.defaultChecked = w, _.checked = x ? w : !1;
              }
            } else
              t.removeAttribute(S);
          else T || f.includes(E) && (c || typeof b != "string") ? (t[E] = b, E in o && (o[E] = Pt)) : typeof b != "function" && Tr(t, E, b);
        }
    }
  }
  return u;
}
function ke(t, e, n = [], r = [], i, a = !1, o = !1) {
  ju(n, r, (c) => {
    var l = void 0, u = {}, d = t.nodeName === "SELECT", h = !1;
    if (Nr(() => {
      var v = e(...c.map(s)), m = sh(
        t,
        l,
        v,
        i,
        a,
        o
      );
      h && d && "value" in v && ys(
        /** @type {HTMLSelectElement} */
        t,
        v.value
      );
      for (let I of Object.getOwnPropertySymbols(u))
        v[I] || Bt(u[I]);
      for (let I of Object.getOwnPropertySymbols(v)) {
        var g = v[I];
        I.description === Bd && (!l || g !== l[I]) && (u[I] && Bt(u[I]), u[I] = qt(() => th(t, () => g))), m[I] = g;
      }
      l = m;
    }), d) {
      var f = (
        /** @type {HTMLSelectElement} */
        t
      );
      ka(() => {
        ys(
          f,
          /** @type {Record<string | symbol, any>} */
          l.value,
          !0
        ), ah(f);
      });
    }
    h = !0;
  });
}
function Qs(t) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    t.__attributes ?? (t.__attributes = {
      [gc]: t.nodeName.includes("-"),
      [bc]: t.namespaceURI === Hd
    })
  );
}
var Rl = /* @__PURE__ */ new Map();
function yc(t) {
  var e = t.getAttribute("is") || t.nodeName, n = Rl.get(e);
  if (n) return n;
  Rl.set(e, n = []);
  for (var r, i = t, a = Element.prototype; a !== i; ) {
    r = Ou(i);
    for (var o in r)
      r[o].set && n.push(o);
    i = Bs(i);
  }
  return n;
}
function wa(t, e, n = e) {
  var r = /* @__PURE__ */ new WeakSet();
  wf(t, "input", async (i) => {
    var a = i ? t.defaultValue : t.value;
    if (a = Yo(t) ? Zo(a) : a, n(a), ot !== null && r.add(ot), await Ro(), a !== (a = e())) {
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
  Ur(e) == null && t.value && (n(Yo(t) ? Zo(t.value) : t.value), ot !== null && r.add(ot)), wo(() => {
    var i = e();
    if (t === document.activeElement) {
      var a = (
        /** @type {Batch} */
        to ?? ot
      );
      if (r.has(a))
        return;
    }
    Yo(t) && i === Zo(t.value) || t.type === "date" && !i && !t.value || i !== t.value && (t.value = i ?? "");
  });
}
function Yo(t) {
  var e = t.type;
  return e === "number" || e === "range";
}
function Zo(t) {
  return t === "" ? null : +t;
}
function Ml(t, e) {
  return t === e || (t == null ? void 0 : t[Kn]) === e;
}
function Te(t = {}, e, n, r) {
  return ka(() => {
    var i, a;
    return wo(() => {
      i = a, a = [], Ur(() => {
        t !== n(...a) && (e(t, ...a), i && Ml(n(...i), t) && e(null, ...i));
      });
    }), () => {
      Lr(() => {
        a && Ml(n(...a), t) && e(null, ...a);
      });
    };
  }), t;
}
function Js(t, e, n) {
  if (t == null)
    return e(void 0), n && n(void 0), ge;
  const r = Ur(
    () => t.subscribe(
      e,
      // @ts-expect-error
      n
    )
  );
  return r.unsubscribe ? () => r.unsubscribe() : r;
}
const _i = [];
function lh(t, e) {
  return {
    subscribe: dt(t, e).subscribe
  };
}
function dt(t, e = ge) {
  let n = null;
  const r = /* @__PURE__ */ new Set();
  function i(c) {
    if (Ws(t, c) && (t = c, n)) {
      const l = !_i.length;
      for (const u of r)
        u[1](), _i.push(u, t);
      if (l) {
        for (let u = 0; u < _i.length; u += 2)
          _i[u][0](_i[u + 1]);
        _i.length = 0;
      }
    }
  }
  function a(c) {
    i(c(
      /** @type {T} */
      t
    ));
  }
  function o(c, l = ge) {
    const u = [c, l];
    return r.add(u), r.size === 1 && (n = e(i, a) || ge), c(
      /** @type {T} */
      t
    ), () => {
      r.delete(u), r.size === 0 && n && (n(), n = null);
    };
  }
  return { set: i, update: a, subscribe: o };
}
function ia(t, e, n) {
  const r = !Array.isArray(t), i = r ? [t] : t;
  if (!i.every(Boolean))
    throw new Error("derived() expects stores as input, got a falsy value");
  const a = e.length < 2;
  return lh(n, (o, c) => {
    let l = !1;
    const u = [];
    let d = 0, h = ge;
    const f = () => {
      if (d)
        return;
      h();
      const m = e(r ? u[0] : u, o, c);
      a ? o(m) : h = typeof m == "function" ? m : ge;
    }, v = i.map(
      (m, g) => Js(
        m,
        (I) => {
          u[g] = I, d &= ~(1 << g), l && f();
        },
        () => {
          d |= 1 << g;
        }
      )
    );
    return l = !0, f(), function() {
      Ru(v), h(), l = !1;
    };
  });
}
function Mo(t) {
  let e;
  return Js(t, (n) => e = n)(), e;
}
let za = !1, Is = Symbol();
function Nt(t, e, n) {
  const r = n[e] ?? (n[e] = {
    store: null,
    source: /* @__PURE__ */ Ku(void 0),
    unsubscribe: ge
  });
  if (r.store !== t && !(Is in n))
    if (r.unsubscribe(), r.store = t ?? null, t == null)
      r.source.v = void 0, r.unsubscribe = ge;
    else {
      var i = !0;
      r.unsubscribe = Js(t, (a) => {
        i ? r.source.v = a : Q(r.source, a);
      }), i = !1;
    }
  return t && Is in n ? Mo(t) : s(r.source);
}
function mn(t, e) {
  return t.set(e), e;
}
function Ln() {
  const t = {};
  function e() {
    To(() => {
      for (var n in t)
        t[n].unsubscribe();
      so(t, Is, {
        enumerable: !1,
        value: !0
      });
    });
  }
  return [t, e];
}
function uh(t) {
  var e = za;
  try {
    return za = !1, [t(), za];
  } finally {
    za = e;
  }
}
const ch = {
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
function ze(t, e, n) {
  return new Proxy(
    { props: t, exclude: e },
    ch
  );
}
const dh = {
  get(t, e) {
    let n = t.props.length;
    for (; n--; ) {
      let r = t.props[n];
      if (da(r) && (r = r()), typeof r == "object" && r !== null && e in r) return r[e];
    }
  },
  set(t, e, n) {
    let r = t.props.length;
    for (; r--; ) {
      let i = t.props[r];
      da(i) && (i = i());
      const a = Cr(i, e);
      if (a && a.set)
        return a.set(n), !0;
    }
    return !1;
  },
  getOwnPropertyDescriptor(t, e) {
    let n = t.props.length;
    for (; n--; ) {
      let r = t.props[n];
      if (da(r) && (r = r()), typeof r == "object" && r !== null && e in r) {
        const i = Cr(r, e);
        return i && !i.configurable && (i.configurable = !0), i;
      }
    }
  },
  has(t, e) {
    if (e === Kn || e === Du) return !1;
    for (let n of t.props)
      if (da(n) && (n = n()), n != null && e in n) return !0;
    return !1;
  },
  ownKeys(t) {
    const e = [];
    for (let n of t.props)
      if (da(n) && (n = n()), !!n) {
        for (const r in n)
          e.includes(r) || e.push(r);
        for (const r of Object.getOwnPropertySymbols(n))
          e.includes(r) || e.push(r);
      }
    return e;
  }
};
function it(...t) {
  return new Proxy({ props: t }, dh);
}
function p(t, e, n, r) {
  var S;
  var i = !ra || (n & 2) !== 0, a = (n & 8) !== 0, o = (n & 16) !== 0, c = (
    /** @type {V} */
    r
  ), l = !0, u = () => (l && (l = !1, c = o ? Ur(
    /** @type {() => V} */
    r
  ) : (
    /** @type {V} */
    r
  )), c), d;
  if (a) {
    var h = Kn in t || Du in t;
    d = ((S = Cr(t, e)) == null ? void 0 : S.set) ?? (h && e in t ? (b) => t[e] = b : void 0);
  }
  var f, v = !1;
  a ? [f, v] = uh(() => (
    /** @type {V} */
    t[e]
  )) : f = /** @type {V} */
  t[e], f === void 0 && r !== void 0 && (f = u(), d && (i && Qd(), d(f)));
  var m;
  if (i ? m = () => {
    var b = (
      /** @type {V} */
      t[e]
    );
    return b === void 0 ? u() : (l = !0, b);
  } : m = () => {
    var b = (
      /** @type {V} */
      t[e]
    );
    return b !== void 0 && (c = /** @type {V} */
    void 0), b === void 0 ? c : b;
  }, i && !(n & 4))
    return m;
  if (d) {
    var g = t.$$legacy;
    return (
      /** @type {() => V} */
      function(b, _) {
        return arguments.length > 0 ? ((!i || !_ || g || v) && d(_ ? m() : b), b) : m();
      }
    );
  }
  var I = !1, E = (n & 1 ? So : Ks)(() => (I = !1, m()));
  a && s(E);
  var T = (
    /** @type {Effect} */
    je
  );
  return (
    /** @type {() => V} */
    function(b, _) {
      if (arguments.length > 0) {
        const x = _ ? s(E) : i && a ? ye(b) : b;
        return Q(E, x), I = !0, c !== void 0 && (c = x), b;
      }
      return fi && I || T.f & ci ? E.v : s(E);
    }
  );
}
const fh = "5";
var wu;
typeof window < "u" && ((wu = window.__svelte ?? (window.__svelte = {})).v ?? (wu.v = /* @__PURE__ */ new Set())).add(fh);
function hh(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var vh = function(e) {
  return ph(e) && !mh(e);
};
function ph(t) {
  return !!t && typeof t == "object";
}
function mh(t) {
  var e = Object.prototype.toString.call(t);
  return e === "[object RegExp]" || e === "[object Date]" || yh(t);
}
var gh = typeof Symbol == "function" && Symbol.for, bh = gh ? Symbol.for("react.element") : 60103;
function yh(t) {
  return t.$$typeof === bh;
}
function Ih(t) {
  return Array.isArray(t) ? [] : {};
}
function La(t, e) {
  return e.clone !== !1 && e.isMergeableObject(t) ? Qi(Ih(t), t, e) : t;
}
function _h(t, e, n) {
  return t.concat(e).map(function(r) {
    return La(r, n);
  });
}
function Eh(t, e) {
  if (!e.customMerge)
    return Qi;
  var n = e.customMerge(t);
  return typeof n == "function" ? n : Qi;
}
function Ah(t) {
  return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(t).filter(function(e) {
    return Object.propertyIsEnumerable.call(t, e);
  }) : [];
}
function Dl(t) {
  return Object.keys(t).concat(Ah(t));
}
function Ic(t, e) {
  try {
    return e in t;
  } catch {
    return !1;
  }
}
function Ch(t, e) {
  return Ic(t, e) && !(Object.hasOwnProperty.call(t, e) && Object.propertyIsEnumerable.call(t, e));
}
function Sh(t, e, n) {
  var r = {};
  return n.isMergeableObject(t) && Dl(t).forEach(function(i) {
    r[i] = La(t[i], n);
  }), Dl(e).forEach(function(i) {
    Ch(t, i) || (Ic(t, i) && n.isMergeableObject(e[i]) ? r[i] = Eh(i, n)(t[i], e[i], n) : r[i] = La(e[i], n));
  }), r;
}
function Qi(t, e, n) {
  n = n || {}, n.arrayMerge = n.arrayMerge || _h, n.isMergeableObject = n.isMergeableObject || vh, n.cloneUnlessOtherwiseSpecified = La;
  var r = Array.isArray(e), i = Array.isArray(t), a = r === i;
  return a ? r ? n.arrayMerge(t, e, n) : Sh(t, e, n) : La(e, n);
}
Qi.all = function(e, n) {
  if (!Array.isArray(e))
    throw new Error("first argument should be an array");
  return e.reduce(function(r, i) {
    return Qi(r, i, n);
  }, {});
};
var xh = Qi, Th = xh;
const wh = /* @__PURE__ */ hh(Th);
var _s = function(t, e) {
  return _s = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, r) {
    n.__proto__ = r;
  } || function(n, r) {
    for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (n[i] = r[i]);
  }, _s(t, e);
};
function $e(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  _s(t, e);
  function n() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : (n.prototype = e.prototype, new n());
}
var fe = function() {
  return fe = Object.assign || function(e) {
    for (var n, r = 1, i = arguments.length; r < i; r++) {
      n = arguments[r];
      for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, fe.apply(this, arguments);
};
function Lh(t, e) {
  var n = {};
  for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(t); i < r.length; i++)
      e.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[i]) && (n[r[i]] = t[r[i]]);
  return n;
}
function _c(t, e, n, r) {
  function i(a) {
    return a instanceof n ? a : new n(function(o) {
      o(a);
    });
  }
  return new (n || (n = Promise))(function(a, o) {
    function c(d) {
      try {
        u(r.next(d));
      } catch (h) {
        o(h);
      }
    }
    function l(d) {
      try {
        u(r.throw(d));
      } catch (h) {
        o(h);
      }
    }
    function u(d) {
      d.done ? a(d.value) : i(d.value).then(c, l);
    }
    u((r = r.apply(t, e || [])).next());
  });
}
function $s(t, e) {
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
function Lt(t) {
  var e = typeof Symbol == "function" && Symbol.iterator, n = e && t[e], r = 0;
  if (n) return n.call(t);
  if (t && typeof t.length == "number") return {
    next: function() {
      return t && r >= t.length && (t = void 0), { value: t && t[r++], done: !t };
    }
  };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function Or(t, e) {
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
function zn(t, e, n) {
  if (n || arguments.length === 2) for (var r = 0, i = e.length, a; r < i; r++)
    (a || !(r in e)) && (a || (a = Array.prototype.slice.call(e, 0, r)), a[r] = e[r]);
  return t.concat(a || Array.prototype.slice.call(e));
}
function Ni(t) {
  return this instanceof Ni ? (this.v = t, this) : new Ni(t);
}
function Oh(t, e, n) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var r = n.apply(t, e || []), i, a = [];
  return i = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype), c("next"), c("throw"), c("return", o), i[Symbol.asyncIterator] = function() {
    return this;
  }, i;
  function o(v) {
    return function(m) {
      return Promise.resolve(m).then(v, h);
    };
  }
  function c(v, m) {
    r[v] && (i[v] = function(g) {
      return new Promise(function(I, E) {
        a.push([v, g, I, E]) > 1 || l(v, g);
      });
    }, m && (i[v] = m(i[v])));
  }
  function l(v, m) {
    try {
      u(r[v](m));
    } catch (g) {
      f(a[0][3], g);
    }
  }
  function u(v) {
    v.value instanceof Ni ? Promise.resolve(v.value.v).then(d, h) : f(a[0][2], v);
  }
  function d(v) {
    l("next", v);
  }
  function h(v) {
    l("throw", v);
  }
  function f(v, m) {
    v(m), a.shift(), a.length && l(a[0][0], a[0][1]);
  }
}
function Rh(t) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var e = t[Symbol.asyncIterator], n;
  return e ? e.call(t) : (t = typeof Lt == "function" ? Lt(t) : t[Symbol.iterator](), n = {}, r("next"), r("throw"), r("return"), n[Symbol.asyncIterator] = function() {
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
function Qo(t, e) {
  var n = e && e.cache ? e.cache : Fh, r = e && e.serializer ? e.serializer : Uh, i = e && e.strategy ? e.strategy : Ph;
  return i(t, {
    cache: n,
    serializer: r
  });
}
function Mh(t) {
  return t == null || typeof t == "number" || typeof t == "boolean";
}
function Dh(t, e, n, r) {
  var i = Mh(r) ? r : n(r), a = e.get(i);
  return typeof a > "u" && (a = t.call(this, r), e.set(i, a)), a;
}
function Ec(t, e, n) {
  var r = Array.prototype.slice.call(arguments, 3), i = n(r), a = e.get(i);
  return typeof a > "u" && (a = t.apply(this, r), e.set(i, a)), a;
}
function Ac(t, e, n, r, i) {
  return n.bind(e, t, r, i);
}
function Ph(t, e) {
  var n = t.length === 1 ? Dh : Ec;
  return Ac(t, this, n, e.cache.create(), e.serializer);
}
function Nh(t, e) {
  return Ac(t, this, Ec, e.cache.create(), e.serializer);
}
var Uh = function() {
  return JSON.stringify(arguments);
}, Hh = (
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
), Fh = {
  create: function() {
    return new Hh();
  }
}, Jo = {
  variadic: Nh
}, Ye;
(function(t) {
  t[t.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", t[t.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", t[t.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", t[t.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", t[t.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", t[t.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", t[t.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", t[t.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", t[t.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", t[t.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", t[t.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", t[t.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", t[t.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", t[t.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", t[t.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", t[t.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", t[t.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", t[t.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", t[t.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", t[t.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", t[t.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", t[t.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", t[t.INVALID_TAG = 23] = "INVALID_TAG", t[t.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", t[t.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", t[t.UNCLOSED_TAG = 27] = "UNCLOSED_TAG";
})(Ye || (Ye = {}));
var ht;
(function(t) {
  t[t.literal = 0] = "literal", t[t.argument = 1] = "argument", t[t.number = 2] = "number", t[t.date = 3] = "date", t[t.time = 4] = "time", t[t.select = 5] = "select", t[t.plural = 6] = "plural", t[t.pound = 7] = "pound", t[t.tag = 8] = "tag";
})(ht || (ht = {}));
var Ji;
(function(t) {
  t[t.number = 0] = "number", t[t.dateTime = 1] = "dateTime";
})(Ji || (Ji = {}));
function Pl(t) {
  return t.type === ht.literal;
}
function Bh(t) {
  return t.type === ht.argument;
}
function Cc(t) {
  return t.type === ht.number;
}
function Sc(t) {
  return t.type === ht.date;
}
function xc(t) {
  return t.type === ht.time;
}
function Tc(t) {
  return t.type === ht.select;
}
function wc(t) {
  return t.type === ht.plural;
}
function kh(t) {
  return t.type === ht.pound;
}
function Lc(t) {
  return t.type === ht.tag;
}
function Oc(t) {
  return !!(t && typeof t == "object" && t.type === Ji.number);
}
function Es(t) {
  return !!(t && typeof t == "object" && t.type === Ji.dateTime);
}
var Rc = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/, Vh = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
function Gh(t) {
  var e = {};
  return t.replace(Vh, function(n) {
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
var jh = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
function qh(t) {
  if (t.length === 0)
    throw new Error("Number skeleton cannot be empty");
  for (var e = t.split(jh).filter(function(f) {
    return f.length > 0;
  }), n = [], r = 0, i = e; r < i.length; r++) {
    var a = i[r], o = a.split("/");
    if (o.length === 0)
      throw new Error("Invalid number skeleton");
    for (var c = o[0], l = o.slice(1), u = 0, d = l; u < d.length; u++) {
      var h = d[u];
      if (h.length === 0)
        throw new Error("Invalid number skeleton");
    }
    n.push({ stem: c, options: l });
  }
  return n;
}
function Wh(t) {
  return t.replace(/^(.*?)-/, "");
}
var Nl = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g, Mc = /^(@+)?(\+|#+)?[rs]?$/g, Kh = /(\*)(0+)|(#+)(0+)|(0+)/g, Dc = /^(0+)$/;
function Ul(t) {
  var e = {};
  return t[t.length - 1] === "r" ? e.roundingPriority = "morePrecision" : t[t.length - 1] === "s" && (e.roundingPriority = "lessPrecision"), t.replace(Mc, function(n, r, i) {
    return typeof i != "string" ? (e.minimumSignificantDigits = r.length, e.maximumSignificantDigits = r.length) : i === "+" ? e.minimumSignificantDigits = r.length : r[0] === "#" ? e.maximumSignificantDigits = r.length : (e.minimumSignificantDigits = r.length, e.maximumSignificantDigits = r.length + (typeof i == "string" ? i.length : 0)), "";
  }), e;
}
function Pc(t) {
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
function zh(t) {
  var e;
  if (t[0] === "E" && t[1] === "E" ? (e = {
    notation: "engineering"
  }, t = t.slice(2)) : t[0] === "E" && (e = {
    notation: "scientific"
  }, t = t.slice(1)), e) {
    var n = t.slice(0, 2);
    if (n === "+!" ? (e.signDisplay = "always", t = t.slice(2)) : n === "+?" && (e.signDisplay = "exceptZero", t = t.slice(2)), !Dc.test(t))
      throw new Error("Malformed concise eng/scientific notation");
    e.minimumIntegerDigits = t.length;
  }
  return e;
}
function Hl(t) {
  var e = {}, n = Pc(t);
  return n || e;
}
function Xh(t) {
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
        e.style = "unit", e.unit = Wh(i.options[0]);
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
        e = fe(fe(fe({}, e), { notation: "scientific" }), i.options.reduce(function(l, u) {
          return fe(fe({}, l), Hl(u));
        }, {}));
        continue;
      case "engineering":
        e = fe(fe(fe({}, e), { notation: "engineering" }), i.options.reduce(function(l, u) {
          return fe(fe({}, l), Hl(u));
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
        i.options[0].replace(Kh, function(l, u, d, h, f, v) {
          if (u)
            e.minimumIntegerDigits = d.length;
          else {
            if (h && f)
              throw new Error("We currently do not support maximum integer digits");
            if (v)
              throw new Error("We currently do not support exact integer digits");
          }
          return "";
        });
        continue;
    }
    if (Dc.test(i.stem)) {
      e.minimumIntegerDigits = i.stem.length;
      continue;
    }
    if (Nl.test(i.stem)) {
      if (i.options.length > 1)
        throw new RangeError("Fraction-precision stems only accept a single optional option");
      i.stem.replace(Nl, function(l, u, d, h, f, v) {
        return d === "*" ? e.minimumFractionDigits = u.length : h && h[0] === "#" ? e.maximumFractionDigits = h.length : f && v ? (e.minimumFractionDigits = f.length, e.maximumFractionDigits = f.length + v.length) : (e.minimumFractionDigits = u.length, e.maximumFractionDigits = u.length), "";
      });
      var a = i.options[0];
      a === "w" ? e = fe(fe({}, e), { trailingZeroDisplay: "stripIfInteger" }) : a && (e = fe(fe({}, e), Ul(a)));
      continue;
    }
    if (Mc.test(i.stem)) {
      e = fe(fe({}, e), Ul(i.stem));
      continue;
    }
    var o = Pc(i.stem);
    o && (e = fe(fe({}, e), o));
    var c = zh(i.stem);
    c && (e = fe(fe({}, e), c));
  }
  return e;
}
var Xa = {
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
function Yh(t, e) {
  for (var n = "", r = 0; r < t.length; r++) {
    var i = t.charAt(r);
    if (i === "j") {
      for (var a = 0; r + 1 < t.length && t.charAt(r + 1) === i; )
        a++, r++;
      var o = 1 + (a & 1), c = a < 2 ? 1 : 3 + (a >> 1), l = "a", u = Zh(e);
      for ((u == "H" || u == "k") && (c = 0); c-- > 0; )
        n += l;
      for (; o-- > 0; )
        n = u + n;
    } else i === "J" ? n += "H" : n += i;
  }
  return n;
}
function Zh(t) {
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
  var i = Xa[r || ""] || Xa[n || ""] || Xa["".concat(n, "-001")] || Xa["001"];
  return i[0];
}
var $o, Qh = new RegExp("^".concat(Rc.source, "*")), Jh = new RegExp("".concat(Rc.source, "*$"));
function Qe(t, e) {
  return { start: t, end: e };
}
var $h = !!String.prototype.startsWith && "_a".startsWith("a", 1), ev = !!String.fromCodePoint, tv = !!Object.fromEntries, nv = !!String.prototype.codePointAt, rv = !!String.prototype.trimStart, iv = !!String.prototype.trimEnd, av = !!Number.isSafeInteger, ov = av ? Number.isSafeInteger : function(t) {
  return typeof t == "number" && isFinite(t) && Math.floor(t) === t && Math.abs(t) <= 9007199254740991;
}, As = !0;
try {
  var sv = Uc("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  As = (($o = sv.exec("a")) === null || $o === void 0 ? void 0 : $o[0]) === "a";
} catch {
  As = !1;
}
var Fl = $h ? (
  // Native
  function(e, n, r) {
    return e.startsWith(n, r);
  }
) : (
  // For IE11
  function(e, n, r) {
    return e.slice(r, r + n.length) === n;
  }
), Cs = ev ? String.fromCodePoint : (
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
), Bl = (
  // native
  tv ? Object.fromEntries : (
    // Ponyfill
    function(e) {
      for (var n = {}, r = 0, i = e; r < i.length; r++) {
        var a = i[r], o = a[0], c = a[1];
        n[o] = c;
      }
      return n;
    }
  )
), Nc = nv ? (
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
), lv = rv ? (
  // Native
  function(e) {
    return e.trimStart();
  }
) : (
  // Ponyfill
  function(e) {
    return e.replace(Qh, "");
  }
), uv = iv ? (
  // Native
  function(e) {
    return e.trimEnd();
  }
) : (
  // Ponyfill
  function(e) {
    return e.replace(Jh, "");
  }
);
function Uc(t, e) {
  return new RegExp(t, e);
}
var Ss;
if (As) {
  var kl = Uc("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  Ss = function(e, n) {
    var r;
    kl.lastIndex = n;
    var i = kl.exec(e);
    return (r = i[1]) !== null && r !== void 0 ? r : "";
  };
} else
  Ss = function(e, n) {
    for (var r = []; ; ) {
      var i = Nc(e, n);
      if (i === void 0 || Hc(i) || hv(i))
        break;
      r.push(i), n += i >= 65536 ? 2 : 1;
    }
    return Cs.apply(void 0, r);
  };
var cv = (
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
              type: ht.pound,
              location: Qe(c, this.clonePosition())
            });
          } else if (a === 60 && !this.ignoreTag && this.peek() === 47) {
            if (r)
              break;
            return this.error(Ye.UNMATCHED_CLOSING_TAG, Qe(this.clonePosition(), this.clonePosition()));
          } else if (a === 60 && !this.ignoreTag && xs(this.peek() || 0)) {
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
            type: ht.literal,
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
          if (this.isEOF() || !xs(this.char()))
            return this.error(Ye.INVALID_TAG, Qe(c, this.clonePosition()));
          var l = this.clonePosition(), u = this.parseTagName();
          return i !== u ? this.error(Ye.UNMATCHED_CLOSING_TAG, Qe(l, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
            val: {
              type: ht.tag,
              value: i,
              children: o,
              location: Qe(r, this.clonePosition())
            },
            err: null
          } : this.error(Ye.INVALID_TAG, Qe(c, this.clonePosition())));
        } else
          return this.error(Ye.UNCLOSED_TAG, Qe(r, this.clonePosition()));
      } else
        return this.error(Ye.INVALID_TAG, Qe(r, this.clonePosition()));
    }, t.prototype.parseTagName = function() {
      var e = this.offset();
      for (this.bump(); !this.isEOF() && fv(this.char()); )
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
        val: { type: ht.literal, value: i, location: l },
        err: null
      };
    }, t.prototype.tryParseLeftAngleBracket = function() {
      return !this.isEOF() && this.char() === 60 && (this.ignoreTag || // If at the opening tag or closing tag position, bail.
      !dv(this.peek() || 0)) ? (this.bump(), "<") : null;
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
      return Cs.apply(void 0, n);
    }, t.prototype.tryParseUnquoted = function(e, n) {
      if (this.isEOF())
        return null;
      var r = this.char();
      return r === 60 || r === 123 || r === 35 && (n === "plural" || n === "selectordinal") || r === 125 && e > 0 ? null : (this.bump(), Cs(r));
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
              type: ht.argument,
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
      var e = this.clonePosition(), n = this.offset(), r = Ss(this.message, n), i = n + r.length;
      this.bumpTo(i);
      var a = this.clonePosition(), o = Qe(e, a);
      return { value: r, location: o };
    }, t.prototype.parseArgumentOptions = function(e, n, r, i) {
      var a, o = this.clonePosition(), c = this.parseIdentifierIfPossible().value, l = this.clonePosition();
      switch (c) {
        case "":
          return this.error(Ye.EXPECT_ARGUMENT_TYPE, Qe(o, l));
        case "number":
        case "date":
        case "time": {
          this.bumpSpace();
          var u = null;
          if (this.bumpIf(",")) {
            this.bumpSpace();
            var d = this.clonePosition(), h = this.parseSimpleArgStyleIfPossible();
            if (h.err)
              return h;
            var f = uv(h.val);
            if (f.length === 0)
              return this.error(Ye.EXPECT_ARGUMENT_STYLE, Qe(this.clonePosition(), this.clonePosition()));
            var v = Qe(d, this.clonePosition());
            u = { style: f, styleLocation: v };
          }
          var m = this.tryParseArgumentClose(i);
          if (m.err)
            return m;
          var g = Qe(i, this.clonePosition());
          if (u && Fl(u == null ? void 0 : u.style, "::", 0)) {
            var I = lv(u.style.slice(2));
            if (c === "number") {
              var h = this.parseNumberSkeletonFromString(I, u.styleLocation);
              return h.err ? h : {
                val: { type: ht.number, value: r, location: g, style: h.val },
                err: null
              };
            } else {
              if (I.length === 0)
                return this.error(Ye.EXPECT_DATE_TIME_SKELETON, g);
              var E = I;
              this.locale && (E = Yh(I, this.locale));
              var f = {
                type: Ji.dateTime,
                pattern: E,
                location: u.styleLocation,
                parsedOptions: this.shouldParseSkeletons ? Gh(E) : {}
              }, T = c === "date" ? ht.date : ht.time;
              return {
                val: { type: T, value: r, location: g, style: f },
                err: null
              };
            }
          }
          return {
            val: {
              type: c === "number" ? ht.number : c === "date" ? ht.date : ht.time,
              value: r,
              location: g,
              style: (a = u == null ? void 0 : u.style) !== null && a !== void 0 ? a : null
            },
            err: null
          };
        }
        case "plural":
        case "selectordinal":
        case "select": {
          var S = this.clonePosition();
          if (this.bumpSpace(), !this.bumpIf(","))
            return this.error(Ye.EXPECT_SELECT_ARGUMENT_OPTIONS, Qe(S, fe({}, S)));
          this.bumpSpace();
          var b = this.parseIdentifierIfPossible(), _ = 0;
          if (c !== "select" && b.value === "offset") {
            if (!this.bumpIf(":"))
              return this.error(Ye.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, Qe(this.clonePosition(), this.clonePosition()));
            this.bumpSpace();
            var h = this.tryParseDecimalInteger(Ye.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, Ye.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);
            if (h.err)
              return h;
            this.bumpSpace(), b = this.parseIdentifierIfPossible(), _ = h.val;
          }
          var x = this.tryParsePluralOrSelectOptions(e, c, n, b);
          if (x.err)
            return x;
          var m = this.tryParseArgumentClose(i);
          if (m.err)
            return m;
          var w = Qe(i, this.clonePosition());
          return c === "select" ? {
            val: {
              type: ht.select,
              value: r,
              options: Bl(x.val),
              location: w
            },
            err: null
          } : {
            val: {
              type: ht.plural,
              value: r,
              options: Bl(x.val),
              offset: _,
              pluralType: c === "plural" ? "cardinal" : "ordinal",
              location: w
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
        r = qh(e);
      } catch {
        return this.error(Ye.INVALID_NUMBER_SKELETON, n);
      }
      return {
        val: {
          type: Ji.number,
          tokens: r,
          location: n,
          parsedOptions: this.shouldParseSkeletons ? Xh(r) : {}
        },
        err: null
      };
    }, t.prototype.tryParsePluralOrSelectOptions = function(e, n, r, i) {
      for (var a, o = !1, c = [], l = /* @__PURE__ */ new Set(), u = i.value, d = i.location; ; ) {
        if (u.length === 0) {
          var h = this.clonePosition();
          if (n !== "select" && this.bumpIf("=")) {
            var f = this.tryParseDecimalInteger(Ye.EXPECT_PLURAL_ARGUMENT_SELECTOR, Ye.INVALID_PLURAL_ARGUMENT_SELECTOR);
            if (f.err)
              return f;
            d = Qe(h, this.clonePosition()), u = this.message.slice(h.offset, this.offset());
          } else
            break;
        }
        if (l.has(u))
          return this.error(n === "select" ? Ye.DUPLICATE_SELECT_ARGUMENT_SELECTOR : Ye.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, d);
        u === "other" && (o = !0), this.bumpSpace();
        var v = this.clonePosition();
        if (!this.bumpIf("{"))
          return this.error(n === "select" ? Ye.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : Ye.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, Qe(this.clonePosition(), this.clonePosition()));
        var m = this.parseMessage(e + 1, n, r);
        if (m.err)
          return m;
        var g = this.tryParseArgumentClose(v);
        if (g.err)
          return g;
        c.push([
          u,
          {
            value: m.val,
            location: Qe(v, this.clonePosition())
          }
        ]), l.add(u), this.bumpSpace(), a = this.parseIdentifierIfPossible(), u = a.value, d = a.location;
      }
      return c.length === 0 ? this.error(n === "select" ? Ye.EXPECT_SELECT_ARGUMENT_SELECTOR : Ye.EXPECT_PLURAL_ARGUMENT_SELECTOR, Qe(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !o ? this.error(Ye.MISSING_OTHER_CLAUSE, Qe(this.clonePosition(), this.clonePosition())) : { val: c, err: null };
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
      return a ? (o *= r, ov(o) ? { val: o, err: null } : this.error(n, l)) : this.error(e, l);
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
      var n = Nc(this.message, e);
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
      for (; !this.isEOF() && Hc(this.char()); )
        this.bump();
    }, t.prototype.peek = function() {
      if (this.isEOF())
        return null;
      var e = this.char(), n = this.offset(), r = this.message.charCodeAt(n + (e >= 65536 ? 2 : 1));
      return r ?? null;
    }, t;
  }()
);
function xs(t) {
  return t >= 97 && t <= 122 || t >= 65 && t <= 90;
}
function dv(t) {
  return xs(t) || t === 47;
}
function fv(t) {
  return t === 45 || t === 46 || t >= 48 && t <= 57 || t === 95 || t >= 97 && t <= 122 || t >= 65 && t <= 90 || t == 183 || t >= 192 && t <= 214 || t >= 216 && t <= 246 || t >= 248 && t <= 893 || t >= 895 && t <= 8191 || t >= 8204 && t <= 8205 || t >= 8255 && t <= 8256 || t >= 8304 && t <= 8591 || t >= 11264 && t <= 12271 || t >= 12289 && t <= 55295 || t >= 63744 && t <= 64975 || t >= 65008 && t <= 65533 || t >= 65536 && t <= 983039;
}
function Hc(t) {
  return t >= 9 && t <= 13 || t === 32 || t === 133 || t >= 8206 && t <= 8207 || t === 8232 || t === 8233;
}
function hv(t) {
  return t >= 33 && t <= 35 || t === 36 || t >= 37 && t <= 39 || t === 40 || t === 41 || t === 42 || t === 43 || t === 44 || t === 45 || t >= 46 && t <= 47 || t >= 58 && t <= 59 || t >= 60 && t <= 62 || t >= 63 && t <= 64 || t === 91 || t === 92 || t === 93 || t === 94 || t === 96 || t === 123 || t === 124 || t === 125 || t === 126 || t === 161 || t >= 162 && t <= 165 || t === 166 || t === 167 || t === 169 || t === 171 || t === 172 || t === 174 || t === 176 || t === 177 || t === 182 || t === 187 || t === 191 || t === 215 || t === 247 || t >= 8208 && t <= 8213 || t >= 8214 && t <= 8215 || t === 8216 || t === 8217 || t === 8218 || t >= 8219 && t <= 8220 || t === 8221 || t === 8222 || t === 8223 || t >= 8224 && t <= 8231 || t >= 8240 && t <= 8248 || t === 8249 || t === 8250 || t >= 8251 && t <= 8254 || t >= 8257 && t <= 8259 || t === 8260 || t === 8261 || t === 8262 || t >= 8263 && t <= 8273 || t === 8274 || t === 8275 || t >= 8277 && t <= 8286 || t >= 8592 && t <= 8596 || t >= 8597 && t <= 8601 || t >= 8602 && t <= 8603 || t >= 8604 && t <= 8607 || t === 8608 || t >= 8609 && t <= 8610 || t === 8611 || t >= 8612 && t <= 8613 || t === 8614 || t >= 8615 && t <= 8621 || t === 8622 || t >= 8623 && t <= 8653 || t >= 8654 && t <= 8655 || t >= 8656 && t <= 8657 || t === 8658 || t === 8659 || t === 8660 || t >= 8661 && t <= 8691 || t >= 8692 && t <= 8959 || t >= 8960 && t <= 8967 || t === 8968 || t === 8969 || t === 8970 || t === 8971 || t >= 8972 && t <= 8991 || t >= 8992 && t <= 8993 || t >= 8994 && t <= 9e3 || t === 9001 || t === 9002 || t >= 9003 && t <= 9083 || t === 9084 || t >= 9085 && t <= 9114 || t >= 9115 && t <= 9139 || t >= 9140 && t <= 9179 || t >= 9180 && t <= 9185 || t >= 9186 && t <= 9254 || t >= 9255 && t <= 9279 || t >= 9280 && t <= 9290 || t >= 9291 && t <= 9311 || t >= 9472 && t <= 9654 || t === 9655 || t >= 9656 && t <= 9664 || t === 9665 || t >= 9666 && t <= 9719 || t >= 9720 && t <= 9727 || t >= 9728 && t <= 9838 || t === 9839 || t >= 9840 && t <= 10087 || t === 10088 || t === 10089 || t === 10090 || t === 10091 || t === 10092 || t === 10093 || t === 10094 || t === 10095 || t === 10096 || t === 10097 || t === 10098 || t === 10099 || t === 10100 || t === 10101 || t >= 10132 && t <= 10175 || t >= 10176 && t <= 10180 || t === 10181 || t === 10182 || t >= 10183 && t <= 10213 || t === 10214 || t === 10215 || t === 10216 || t === 10217 || t === 10218 || t === 10219 || t === 10220 || t === 10221 || t === 10222 || t === 10223 || t >= 10224 && t <= 10239 || t >= 10240 && t <= 10495 || t >= 10496 && t <= 10626 || t === 10627 || t === 10628 || t === 10629 || t === 10630 || t === 10631 || t === 10632 || t === 10633 || t === 10634 || t === 10635 || t === 10636 || t === 10637 || t === 10638 || t === 10639 || t === 10640 || t === 10641 || t === 10642 || t === 10643 || t === 10644 || t === 10645 || t === 10646 || t === 10647 || t === 10648 || t >= 10649 && t <= 10711 || t === 10712 || t === 10713 || t === 10714 || t === 10715 || t >= 10716 && t <= 10747 || t === 10748 || t === 10749 || t >= 10750 && t <= 11007 || t >= 11008 && t <= 11055 || t >= 11056 && t <= 11076 || t >= 11077 && t <= 11078 || t >= 11079 && t <= 11084 || t >= 11085 && t <= 11123 || t >= 11124 && t <= 11125 || t >= 11126 && t <= 11157 || t === 11158 || t >= 11159 && t <= 11263 || t >= 11776 && t <= 11777 || t === 11778 || t === 11779 || t === 11780 || t === 11781 || t >= 11782 && t <= 11784 || t === 11785 || t === 11786 || t === 11787 || t === 11788 || t === 11789 || t >= 11790 && t <= 11798 || t === 11799 || t >= 11800 && t <= 11801 || t === 11802 || t === 11803 || t === 11804 || t === 11805 || t >= 11806 && t <= 11807 || t === 11808 || t === 11809 || t === 11810 || t === 11811 || t === 11812 || t === 11813 || t === 11814 || t === 11815 || t === 11816 || t === 11817 || t >= 11818 && t <= 11822 || t === 11823 || t >= 11824 && t <= 11833 || t >= 11834 && t <= 11835 || t >= 11836 && t <= 11839 || t === 11840 || t === 11841 || t === 11842 || t >= 11843 && t <= 11855 || t >= 11856 && t <= 11857 || t === 11858 || t >= 11859 && t <= 11903 || t >= 12289 && t <= 12291 || t === 12296 || t === 12297 || t === 12298 || t === 12299 || t === 12300 || t === 12301 || t === 12302 || t === 12303 || t === 12304 || t === 12305 || t >= 12306 && t <= 12307 || t === 12308 || t === 12309 || t === 12310 || t === 12311 || t === 12312 || t === 12313 || t === 12314 || t === 12315 || t === 12316 || t === 12317 || t >= 12318 && t <= 12319 || t === 12320 || t === 12336 || t === 64830 || t === 64831 || t >= 65093 && t <= 65094;
}
function Ts(t) {
  t.forEach(function(e) {
    if (delete e.location, Tc(e) || wc(e))
      for (var n in e.options)
        delete e.options[n].location, Ts(e.options[n].value);
    else Cc(e) && Oc(e.style) || (Sc(e) || xc(e)) && Es(e.style) ? delete e.style.location : Lc(e) && Ts(e.children);
  });
}
function vv(t, e) {
  e === void 0 && (e = {}), e = fe({ shouldParseSkeletons: !0, requiresOtherClause: !0 }, e);
  var n = new cv(t, e).parse();
  if (n.err) {
    var r = SyntaxError(Ye[n.err.kind]);
    throw r.location = n.err.location, r.originalMessage = n.err.message, r;
  }
  return e != null && e.captureLocation || Ts(n.val), n.val;
}
var $i;
(function(t) {
  t.MISSING_VALUE = "MISSING_VALUE", t.INVALID_VALUE = "INVALID_VALUE", t.MISSING_INTL_API = "MISSING_INTL_API";
})($i || ($i = {}));
var Do = (
  /** @class */
  function(t) {
    $e(e, t);
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
    $e(e, t);
    function e(n, r, i, a) {
      return t.call(this, 'Invalid values for "'.concat(n, '": "').concat(r, '". Options are "').concat(Object.keys(i).join('", "'), '"'), $i.INVALID_VALUE, a) || this;
    }
    return e;
  }(Do)
), pv = (
  /** @class */
  function(t) {
    $e(e, t);
    function e(n, r, i) {
      return t.call(this, 'Value for "'.concat(n, '" must be of type ').concat(r), $i.INVALID_VALUE, i) || this;
    }
    return e;
  }(Do)
), mv = (
  /** @class */
  function(t) {
    $e(e, t);
    function e(n, r) {
      return t.call(this, 'The intl string context variable "'.concat(n, '" was not provided to the string "').concat(r, '"'), $i.MISSING_VALUE, r) || this;
    }
    return e;
  }(Do)
), Qt;
(function(t) {
  t[t.literal = 0] = "literal", t[t.object = 1] = "object";
})(Qt || (Qt = {}));
function gv(t) {
  return t.length < 2 ? t : t.reduce(function(e, n) {
    var r = e[e.length - 1];
    return !r || r.type !== Qt.literal || n.type !== Qt.literal ? e.push(n) : r.value += n.value, e;
  }, []);
}
function bv(t) {
  return typeof t == "function";
}
function ao(t, e, n, r, i, a, o) {
  if (t.length === 1 && Pl(t[0]))
    return [
      {
        type: Qt.literal,
        value: t[0].value
      }
    ];
  for (var c = [], l = 0, u = t; l < u.length; l++) {
    var d = u[l];
    if (Pl(d)) {
      c.push({
        type: Qt.literal,
        value: d.value
      });
      continue;
    }
    if (kh(d)) {
      typeof a == "number" && c.push({
        type: Qt.literal,
        value: n.getNumberFormat(e).format(a)
      });
      continue;
    }
    var h = d.value;
    if (!(i && h in i))
      throw new mv(h, o);
    var f = i[h];
    if (Bh(d)) {
      (!f || typeof f == "string" || typeof f == "number") && (f = typeof f == "string" || typeof f == "number" ? String(f) : ""), c.push({
        type: typeof f == "string" ? Qt.literal : Qt.object,
        value: f
      });
      continue;
    }
    if (Sc(d)) {
      var v = typeof d.style == "string" ? r.date[d.style] : Es(d.style) ? d.style.parsedOptions : void 0;
      c.push({
        type: Qt.literal,
        value: n.getDateTimeFormat(e, v).format(f)
      });
      continue;
    }
    if (xc(d)) {
      var v = typeof d.style == "string" ? r.time[d.style] : Es(d.style) ? d.style.parsedOptions : r.time.medium;
      c.push({
        type: Qt.literal,
        value: n.getDateTimeFormat(e, v).format(f)
      });
      continue;
    }
    if (Cc(d)) {
      var v = typeof d.style == "string" ? r.number[d.style] : Oc(d.style) ? d.style.parsedOptions : void 0;
      v && v.scale && (f = f * (v.scale || 1)), c.push({
        type: Qt.literal,
        value: n.getNumberFormat(e, v).format(f)
      });
      continue;
    }
    if (Lc(d)) {
      var m = d.children, g = d.value, I = i[g];
      if (!bv(I))
        throw new pv(g, "function", o);
      var E = ao(m, e, n, r, i, a), T = I(E.map(function(_) {
        return _.value;
      }));
      Array.isArray(T) || (T = [T]), c.push.apply(c, T.map(function(_) {
        return {
          type: typeof _ == "string" ? Qt.literal : Qt.object,
          value: _
        };
      }));
    }
    if (Tc(d)) {
      var S = d.options[f] || d.options.other;
      if (!S)
        throw new Vl(d.value, f, Object.keys(d.options), o);
      c.push.apply(c, ao(S.value, e, n, r, i));
      continue;
    }
    if (wc(d)) {
      var S = d.options["=".concat(f)];
      if (!S) {
        if (!Intl.PluralRules)
          throw new Do(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`, $i.MISSING_INTL_API, o);
        var b = n.getPluralRules(e, { type: d.pluralType }).select(f - (d.offset || 0));
        S = d.options[b] || d.options.other;
      }
      if (!S)
        throw new Vl(d.value, f, Object.keys(d.options), o);
      c.push.apply(c, ao(S.value, e, n, r, i, f - (d.offset || 0)));
      continue;
    }
  }
  return gv(c);
}
function yv(t, e) {
  return e ? fe(fe(fe({}, t || {}), e || {}), Object.keys(t).reduce(function(n, r) {
    return n[r] = fe(fe({}, t[r]), e[r] || {}), n;
  }, {})) : t;
}
function Iv(t, e) {
  return e ? Object.keys(t).reduce(function(n, r) {
    return n[r] = yv(t[r], e[r]), n;
  }, fe({}, t)) : t;
}
function es(t) {
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
function _v(t) {
  return t === void 0 && (t = {
    number: {},
    dateTime: {},
    pluralRules: {}
  }), {
    getNumberFormat: Qo(function() {
      for (var e, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((e = Intl.NumberFormat).bind.apply(e, zn([void 0], n, !1)))();
    }, {
      cache: es(t.number),
      strategy: Jo.variadic
    }),
    getDateTimeFormat: Qo(function() {
      for (var e, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((e = Intl.DateTimeFormat).bind.apply(e, zn([void 0], n, !1)))();
    }, {
      cache: es(t.dateTime),
      strategy: Jo.variadic
    }),
    getPluralRules: Qo(function() {
      for (var e, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((e = Intl.PluralRules).bind.apply(e, zn([void 0], n, !1)))();
    }, {
      cache: es(t.pluralRules),
      strategy: Jo.variadic
    })
  };
}
var Fc = (
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
        var d = u.reduce(function(h, f) {
          return !h.length || f.type !== Qt.literal || typeof h[h.length - 1] != "string" ? h.push(f.value) : h[h.length - 1] += f.value, h;
        }, []);
        return d.length <= 1 ? d[0] || "" : d;
      }, this.formatToParts = function(l) {
        return ao(a.ast, a.locales, a.formatters, a.formats, l, void 0, a.message);
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
        var c = Lh(o, ["formatters"]);
        this.ast = t.__parse(e, fe(fe({}, c), { locale: this.resolvedLocale }));
      } else
        this.ast = e;
      if (!Array.isArray(this.ast))
        throw new TypeError("A message must be provided as a String or AST.");
      this.formats = Iv(t.formats, r), this.formatters = i && i.formatters || _v(this.formatterCache);
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
    }, t.__parse = vv, t.formats = {
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
function Ev(t, e) {
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
const Ar = {}, Av = (t, e, n) => n && (e in Ar || (Ar[e] = {}), t in Ar[e] || (Ar[e][t] = n), n), Bc = (t, e) => {
  if (e == null)
    return;
  if (e in Ar && t in Ar[e])
    return Ar[e][t];
  const n = Ga(e);
  for (let r = 0; r < n.length; r++) {
    const i = n[r], a = Sv(i, t);
    if (a)
      return Av(t, e, a);
  }
};
let el;
const Va = dt({});
function Cv(t) {
  return el[t] || null;
}
function kc(t) {
  return t in el;
}
function Sv(t, e) {
  if (!kc(t))
    return null;
  const n = Cv(t);
  return Ev(n, e);
}
function xv(t) {
  if (t == null)
    return;
  const e = Ga(t);
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    if (kc(r))
      return r;
  }
}
function Vc(t, ...e) {
  delete Ar[t], Va.update((n) => (n[t] = wh.all([n[t] || {}, ...e]), n));
}
ia(
  [Va],
  ([t]) => Object.keys(t)
);
Va.subscribe((t) => el = t);
const oo = {};
function Tv(t, e) {
  oo[t].delete(e), oo[t].size === 0 && delete oo[t];
}
function Gc(t) {
  return oo[t];
}
function wv(t) {
  return Ga(t).map((e) => {
    const n = Gc(e);
    return [e, n ? [...n] : []];
  }).filter(([, e]) => e.length > 0);
}
function co(t) {
  return t == null ? !1 : Ga(t).some(
    (e) => {
      var n;
      return (n = Gc(e)) == null ? void 0 : n.size;
    }
  );
}
function Lv(t, e) {
  return Promise.all(
    e.map((r) => (Tv(t, r), r().then((i) => i.default || i)))
  ).then((r) => Vc(t, ...r));
}
const va = {};
function jc(t) {
  if (!co(t))
    return t in va ? va[t] : Promise.resolve();
  const e = wv(t);
  return va[t] = Promise.all(
    e.map(
      ([n, r]) => Lv(n, r)
    )
  ).then(() => {
    if (co(t))
      return jc(t);
    delete va[t];
  }), va[t];
}
var Gl = Object.getOwnPropertySymbols, Ov = Object.prototype.hasOwnProperty, Rv = Object.prototype.propertyIsEnumerable, Mv = (t, e) => {
  var n = {};
  for (var r in t)
    Ov.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && Gl)
    for (var r of Gl(t))
      e.indexOf(r) < 0 && Rv.call(t, r) && (n[r] = t[r]);
  return n;
};
const Dv = {
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
function Pv({ locale: t, id: e }) {
  console.warn(
    `[svelte-i18n] The message "${e}" was not found in "${Ga(
      t
    ).join('", "')}".${co(Hr()) ? `

Note: there are at least one loader still registered to this locale that wasn't executed.` : ""}`
  );
}
const Nv = {
  fallbackLocale: null,
  loadingDelay: 200,
  formats: Dv,
  warnOnMissingMessages: !0,
  handleMissingMessage: void 0,
  ignoreTag: !0
}, _a = Nv;
function ea() {
  return _a;
}
function Uv(t) {
  const e = t, { formats: n } = e, r = Mv(e, ["formats"]);
  let i = t.fallbackLocale;
  if (t.initialLocale)
    try {
      Fc.resolveLocale(t.initialLocale) && (i = t.initialLocale);
    } catch {
      console.warn(
        `[svelte-i18n] The initial locale "${t.initialLocale}" is not a valid locale.`
      );
    }
  return r.warnOnMissingMessages && (delete r.warnOnMissingMessages, r.handleMissingMessage == null ? r.handleMissingMessage = Pv : console.warn(
    '[svelte-i18n] The "warnOnMissingMessages" option is deprecated. Please use the "handleMissingMessage" option instead.'
  )), Object.assign(_a, r, { initialLocale: i }), n && ("number" in n && Object.assign(_a.formats.number, n.number), "date" in n && Object.assign(_a.formats.date, n.date), "time" in n && Object.assign(_a.formats.time, n.time)), hi.set(i);
}
const ts = dt(!1);
var Hv = Object.defineProperty, Fv = Object.defineProperties, Bv = Object.getOwnPropertyDescriptors, jl = Object.getOwnPropertySymbols, kv = Object.prototype.hasOwnProperty, Vv = Object.prototype.propertyIsEnumerable, ql = (t, e, n) => e in t ? Hv(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n, Gv = (t, e) => {
  for (var n in e || (e = {}))
    kv.call(e, n) && ql(t, n, e[n]);
  if (jl)
    for (var n of jl(e))
      Vv.call(e, n) && ql(t, n, e[n]);
  return t;
}, jv = (t, e) => Fv(t, Bv(e));
let ws;
const fo = dt(null);
function Wl(t) {
  return t.split("-").map((e, n, r) => r.slice(0, n + 1).join("-")).reverse();
}
function Ga(t, e = ea().fallbackLocale) {
  const n = Wl(t);
  return e ? [.../* @__PURE__ */ new Set([...n, ...Wl(e)])] : n;
}
function Hr() {
  return ws ?? void 0;
}
fo.subscribe((t) => {
  ws = t ?? void 0, typeof window < "u" && t != null && document.documentElement.setAttribute("lang", t);
});
const qv = (t) => {
  if (t && xv(t) && co(t)) {
    const { loadingDelay: e } = ea();
    let n;
    return typeof window < "u" && Hr() != null && e ? n = window.setTimeout(
      () => ts.set(!0),
      e
    ) : ts.set(!0), jc(t).then(() => {
      fo.set(t);
    }).finally(() => {
      clearTimeout(n), ts.set(!1);
    });
  }
  return fo.set(t);
}, hi = jv(Gv({}, fo), {
  set: qv
}), Wv = () => typeof window > "u" ? null : window.navigator.language || window.navigator.languages[0], Po = (t) => {
  const e = /* @__PURE__ */ Object.create(null);
  return (r) => {
    const i = JSON.stringify(r);
    return i in e ? e[i] : e[i] = t(r);
  };
};
var Kv = Object.defineProperty, ho = Object.getOwnPropertySymbols, qc = Object.prototype.hasOwnProperty, Wc = Object.prototype.propertyIsEnumerable, Kl = (t, e, n) => e in t ? Kv(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n, tl = (t, e) => {
  for (var n in e || (e = {}))
    qc.call(e, n) && Kl(t, n, e[n]);
  if (ho)
    for (var n of ho(e))
      Wc.call(e, n) && Kl(t, n, e[n]);
  return t;
}, aa = (t, e) => {
  var n = {};
  for (var r in t)
    qc.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && ho)
    for (var r of ho(t))
      e.indexOf(r) < 0 && Wc.call(t, r) && (n[r] = t[r]);
  return n;
};
const Oa = (t, e) => {
  const { formats: n } = ea();
  if (t in n && e in n[t])
    return n[t][e];
  throw new Error(`[svelte-i18n] Unknown "${e}" ${t} format.`);
}, zv = Po(
  (t) => {
    var e = t, { locale: n, format: r } = e, i = aa(e, ["locale", "format"]);
    if (n == null)
      throw new Error('[svelte-i18n] A "locale" must be set to format numbers');
    return r && (i = Oa("number", r)), new Intl.NumberFormat(n, i);
  }
), Xv = Po(
  (t) => {
    var e = t, { locale: n, format: r } = e, i = aa(e, ["locale", "format"]);
    if (n == null)
      throw new Error('[svelte-i18n] A "locale" must be set to format dates');
    return r ? i = Oa("date", r) : Object.keys(i).length === 0 && (i = Oa("date", "short")), new Intl.DateTimeFormat(n, i);
  }
), Yv = Po(
  (t) => {
    var e = t, { locale: n, format: r } = e, i = aa(e, ["locale", "format"]);
    if (n == null)
      throw new Error(
        '[svelte-i18n] A "locale" must be set to format time values'
      );
    return r ? i = Oa("time", r) : Object.keys(i).length === 0 && (i = Oa("time", "short")), new Intl.DateTimeFormat(n, i);
  }
), Zv = (t = {}) => {
  var e = t, {
    locale: n = Hr()
  } = e, r = aa(e, [
    "locale"
  ]);
  return zv(tl({ locale: n }, r));
}, Qv = (t = {}) => {
  var e = t, {
    locale: n = Hr()
  } = e, r = aa(e, [
    "locale"
  ]);
  return Xv(tl({ locale: n }, r));
}, Jv = (t = {}) => {
  var e = t, {
    locale: n = Hr()
  } = e, r = aa(e, [
    "locale"
  ]);
  return Yv(tl({ locale: n }, r));
}, $v = Po(
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  (t, e = Hr()) => new Fc(t, e, ea().formats, {
    ignoreTag: ea().ignoreTag
  })
), ep = (t, e = {}) => {
  var n, r, i, a;
  let o = e;
  typeof t == "object" && (o = t, t = o.id);
  const {
    values: c,
    locale: l = Hr(),
    default: u
  } = o;
  if (l == null)
    throw new Error(
      "[svelte-i18n] Cannot format a message without first setting the initial locale."
    );
  let d = Bc(t, l);
  if (!d)
    d = (a = (i = (r = (n = ea()).handleMissingMessage) == null ? void 0 : r.call(n, { locale: l, id: t, defaultValue: u })) != null ? i : u) != null ? a : t;
  else if (typeof d != "string")
    return console.warn(
      `[svelte-i18n] Message with id "${t}" must be of type "string", found: "${typeof d}". Gettin its value through the "$format" method is deprecated; use the "json" method instead.`
    ), d;
  if (!c)
    return d;
  let h = d;
  try {
    h = $v(d, l).format(c);
  } catch (f) {
    f instanceof Error && console.warn(
      `[svelte-i18n] Message "${t}" has syntax error:`,
      f.message
    );
  }
  return h;
}, tp = (t, e) => Jv(e).format(t), np = (t, e) => Qv(e).format(t), rp = (t, e) => Zv(e).format(t), ip = (t, e = Hr()) => Bc(t, e), ap = ia([hi, Va], () => ep);
ia([hi], () => tp);
ia([hi], () => np);
ia([hi], () => rp);
ia([hi, Va], () => ip);
function op(t, e) {
  Object.entries(t).forEach(([a, o]) => {
    Vc(a, o);
  });
  const n = localStorage.getItem("language"), r = "en", i = n ?? Wv();
  console.log("Initial: Setting the language to", i), Uv({
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
const sp = "Suche", lp = "Filtertypen", up = "Filter hinzufügen", cp = "Keine Ressourcen gefunden.", dp = "Loading...", fp = {
  search: sp,
  filter_types: lp,
  add_filter: up,
  no_resources_found: cp,
  loading: dp
}, hp = "Search", vp = "Filter Types", pp = "Add Filter", mp = "No resources found.", gp = "Loading...", bp = {
  search: hp,
  filter_types: vp,
  add_filter: pp,
  no_resources_found: mp,
  loading: gp
};
function yp(t, e = {}) {
  const n = e.priority || "polite", r = e.ownerDocument || document, i = r.querySelectorAll("[data-smui-dom-announce]");
  i.length && i.forEach((o) => {
    var c;
    (c = o.parentNode) === null || c === void 0 || c.removeChild(o);
  });
  const a = r.createElement("div");
  a.style.position = "absolute", a.style.top = "-9999px", a.style.left = "-9999px", a.style.height = "1px", a.style.overflow = "hidden", a.setAttribute("aria-atomic", "true"), a.setAttribute("aria-live", n), a.setAttribute("data-mdc-dom-announce", "true"), a.setAttribute("data-smui-dom-announce", "true"), r.body.appendChild(a), window.setTimeout(() => {
    a.textContent = t;
    const o = () => {
      a.textContent = "", a.removeEventListener("click", o);
    };
    a.addEventListener("click", o, { once: !0 });
  }, 100);
}
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
function ta(t, e) {
  let n = Object.getOwnPropertyNames(t);
  const r = {};
  for (let i = 0; i < n.length; i++) {
    const a = n[i], o = a.indexOf("$");
    o !== -1 && e.indexOf(a.substring(0, o + 1)) !== -1 || e.indexOf(a) === -1 && (r[a] = t[a]);
  }
  return r;
}
function lt(t, e) {
  let n = Object.getOwnPropertyNames(t);
  const r = {};
  for (let i = 0; i < n.length; i++) {
    const a = n[i];
    a.substring(0, e.length) === e && (r[a.substring(e.length)] = t[a]);
  }
  return r;
}
class ja {
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
    n in a || (a[n] = /* @__PURE__ */ new Map()), a[n].set(r, kf(e, n, r, i));
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
function z(t, e) {
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
var Ya;
function Kc(t, e) {
  e === void 0 && (e = !1);
  var n = t.CSS, r = Ya;
  if (typeof Ya == "boolean" && !e)
    return Ya;
  var i = n && typeof n.supports == "function";
  if (!i)
    return !1;
  var a = n.supports("--css-vars", "yes"), o = n.supports("(--css-vars: yes)") && n.supports("color", "#00000000");
  return r = a || o, e || (Ya = r), r;
}
function Ip(t, e, n) {
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
var Ut = (
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
var No = (
  /** @class */
  function() {
    function t(e, n) {
      for (var r = [], i = 2; i < arguments.length; i++)
        r[i - 2] = arguments[i];
      this.root = e, this.initialize.apply(this, zn([], Or(r))), this.foundation = n === void 0 ? this.getDefaultFoundation() : n, this.foundation.init(), this.initialSyncWithDOM();
    }
    return t.attachTo = function(e) {
      return new t(e, new Ut({}));
    }, t.prototype.initialize = function() {
    }, t.prototype.getDefaultFoundation = function() {
      throw new Error("Subclasses must override getDefaultFoundation to return a properly configured foundation class");
    }, t.prototype.initialSyncWithDOM = function() {
    }, t.prototype.destroy = function() {
      this.foundation.destroy();
    }, t.prototype.listen = function(e, n, r) {
      this.root.addEventListener(e, n, r);
    }, t.prototype.unlisten = function(e, n, r) {
      this.root.removeEventListener(e, n, r);
    }, t.prototype.emit = function(e, n, r) {
      r === void 0 && (r = !1);
      var i;
      typeof CustomEvent == "function" ? i = new CustomEvent(e, {
        bubbles: r,
        detail: n
      }) : (i = document.createEvent("CustomEvent"), i.initCustomEvent(e, r, !1, n)), this.root.dispatchEvent(i);
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
function Ea(t) {
  return t === void 0 && (t = window), _p(t) ? { passive: !0 } : !1;
}
function _p(t) {
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
const zc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  applyPassive: Ea
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
function Ep(t, e) {
  if (t.closest)
    return t.closest(e);
  for (var n = t; n; ) {
    if (nl(n, e))
      return n;
    n = n.parentElement;
  }
  return null;
}
function nl(t, e) {
  var n = t.matches || t.webkitMatchesSelector || t.msMatchesSelector;
  return n.call(t, e);
}
function Ap(t) {
  var e = t;
  if (e.offsetParent !== null)
    return e.scrollWidth;
  var n = e.cloneNode(!0);
  n.style.setProperty("position", "absolute"), n.style.setProperty("transform", "translate(-9999px, -9999px)"), document.documentElement.appendChild(n);
  var r = n.scrollWidth;
  return document.documentElement.removeChild(n), r;
}
const Uo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  closest: Ep,
  estimateScrollWidth: Ap,
  matches: nl
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
var Cp = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  BG_FOCUSED: "mdc-ripple-upgraded--background-focused",
  FG_ACTIVATION: "mdc-ripple-upgraded--foreground-activation",
  FG_DEACTIVATION: "mdc-ripple-upgraded--foreground-deactivation",
  ROOT: "mdc-ripple-upgraded",
  UNBOUNDED: "mdc-ripple-upgraded--unbounded"
}, Sp = {
  VAR_FG_SCALE: "--mdc-ripple-fg-scale",
  VAR_FG_SIZE: "--mdc-ripple-fg-size",
  VAR_FG_TRANSLATE_END: "--mdc-ripple-fg-translate-end",
  VAR_FG_TRANSLATE_START: "--mdc-ripple-fg-translate-start",
  VAR_LEFT: "--mdc-ripple-left",
  VAR_TOP: "--mdc-ripple-top"
}, zl = {
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
], Za = [], Ho = (
  /** @class */
  function(t) {
    $e(e, t);
    function e(n) {
      var r = t.call(this, fe(fe({}, e.defaultAdapter), n)) || this;
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
        return Cp;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Sp;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return zl;
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
          for (var a = Lt(Xl), o = a.next(); !o.done; o = a.next()) {
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
          for (var a = Lt(Yl), o = a.next(); !o.done; o = a.next()) {
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
        for (var i = Lt(Xl), a = i.next(); !a.done; a = i.next()) {
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
        for (var i = Lt(Yl), a = i.next(); !a.done; a = i.next()) {
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
            var c = n !== void 0 && Za.length > 0 && Za.some(function(l) {
              return r.adapter.containsEventTarget(l);
            });
            if (c) {
              this.resetActivationState();
              return;
            }
            n !== void 0 && (Za.push(n.target), this.registerDeactivationHandlers(n)), i.wasElementMadeActive = this.checkElementMadeActive(n), i.wasElementMadeActive && this.animateActivation(), requestAnimationFrame(function() {
              Za = [], !i.wasElementMadeActive && n !== void 0 && (n.key === " " || n.keyCode === 32) && (i.wasElementMadeActive = r.checkElementMadeActive(n), i.wasElementMadeActive && r.animateActivation()), i.wasElementMadeActive || (r.activationState = r.defaultActivationState());
            });
          }
        }
      }
    }, e.prototype.checkElementMadeActive = function(n) {
      return n !== void 0 && n.type === "keydown" ? this.adapter.isSurfaceActive() : !0;
    }, e.prototype.animateActivation = function() {
      var n = this, r = e.strings, i = r.VAR_FG_TRANSLATE_START, a = r.VAR_FG_TRANSLATE_END, o = e.cssClasses, c = o.FG_DEACTIVATION, l = o.FG_ACTIVATION, u = e.numbers.DEACTIVATION_TIMEOUT_MS;
      this.layoutInternal();
      var d = "", h = "";
      if (!this.adapter.isUnbounded()) {
        var f = this.getFgTranslationCoordinates(), v = f.startPoint, m = f.endPoint;
        d = v.x + "px, " + v.y + "px", h = m.x + "px, " + m.y + "px";
      }
      this.adapter.updateCssVariable(i, d), this.adapter.updateCssVariable(a, h), clearTimeout(this.activationTimer), clearTimeout(this.fgDeactivationRemovalTimer), this.rmBoundedActivationClasses(), this.adapter.removeClass(c), this.adapter.computeBoundingRect(), this.adapter.addClass(l), this.activationTimer = setTimeout(function() {
        n.activationTimerCallback();
      }, u);
    }, e.prototype.getFgTranslationCoordinates = function() {
      var n = this.activationState, r = n.activationEvent, i = n.wasActivatedByPointer, a;
      i ? a = Ip(r, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect()) : a = {
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
      }, zl.FG_DEACTIVATION_MS));
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
        var i = fe({}, r);
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
  }(Ut)
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
var vo = (
  /** @class */
  function(t) {
    $e(e, t);
    function e() {
      var n = t !== null && t.apply(this, arguments) || this;
      return n.disabled = !1, n;
    }
    return e.attachTo = function(n, r) {
      r === void 0 && (r = {
        isUnbounded: void 0
      });
      var i = new e(n);
      return r.isUnbounded !== void 0 && (i.unbounded = r.isUnbounded), i;
    }, e.createAdapter = function(n) {
      return {
        addClass: function(r) {
          return n.root.classList.add(r);
        },
        browserSupportsCssVars: function() {
          return Kc(window);
        },
        computeBoundingRect: function() {
          return n.root.getBoundingClientRect();
        },
        containsEventTarget: function(r) {
          return n.root.contains(r);
        },
        deregisterDocumentInteractionHandler: function(r, i) {
          return document.documentElement.removeEventListener(r, i, Ea());
        },
        deregisterInteractionHandler: function(r, i) {
          return n.root.removeEventListener(r, i, Ea());
        },
        deregisterResizeHandler: function(r) {
          return window.removeEventListener("resize", r);
        },
        getWindowPageOffset: function() {
          return { x: window.pageXOffset, y: window.pageYOffset };
        },
        isSurfaceActive: function() {
          return nl(n.root, ":active");
        },
        isSurfaceDisabled: function() {
          return !!n.disabled;
        },
        isUnbounded: function() {
          return !!n.unbounded;
        },
        registerDocumentInteractionHandler: function(r, i) {
          return document.documentElement.addEventListener(r, i, Ea());
        },
        registerInteractionHandler: function(r, i) {
          return n.root.addEventListener(r, i, Ea());
        },
        registerResizeHandler: function(r) {
          return window.addEventListener("resize", r);
        },
        removeClass: function(r) {
          return n.root.classList.remove(r);
        },
        updateCssVariable: function(r, i) {
          return n.root.style.setProperty(r, i);
        }
      };
    }, Object.defineProperty(e.prototype, "unbounded", {
      get: function() {
        return !!this.isUnbounded;
      },
      set: function(n) {
        this.isUnbounded = !!n, this.setUnbounded();
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.activate = function() {
      this.foundation.activate();
    }, e.prototype.deactivate = function() {
      this.foundation.deactivate();
    }, e.prototype.layout = function() {
      this.foundation.layout();
    }, e.prototype.getDefaultFoundation = function() {
      return new Ho(e.createAdapter(this));
    }, e.prototype.initialSyncWithDOM = function() {
      var n = this.root;
      this.isUnbounded = "mdcRippleIsUnbounded" in n.dataset;
    }, e.prototype.setUnbounded = function() {
      this.foundation.setUnbounded(!!this.isUnbounded);
    }, e;
  }(No)
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
var Re = {
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
}, an = /* @__PURE__ */ new Set();
an.add(Re.BACKSPACE);
an.add(Re.ENTER);
an.add(Re.SPACEBAR);
an.add(Re.PAGE_UP);
an.add(Re.PAGE_DOWN);
an.add(Re.END);
an.add(Re.HOME);
an.add(Re.ARROW_LEFT);
an.add(Re.ARROW_UP);
an.add(Re.ARROW_RIGHT);
an.add(Re.ARROW_DOWN);
an.add(Re.DELETE);
an.add(Re.ESCAPE);
an.add(Re.TAB);
var fn = {
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
}, on = /* @__PURE__ */ new Map();
on.set(fn.BACKSPACE, Re.BACKSPACE);
on.set(fn.ENTER, Re.ENTER);
on.set(fn.SPACEBAR, Re.SPACEBAR);
on.set(fn.PAGE_UP, Re.PAGE_UP);
on.set(fn.PAGE_DOWN, Re.PAGE_DOWN);
on.set(fn.END, Re.END);
on.set(fn.HOME, Re.HOME);
on.set(fn.ARROW_LEFT, Re.ARROW_LEFT);
on.set(fn.ARROW_UP, Re.ARROW_UP);
on.set(fn.ARROW_RIGHT, Re.ARROW_RIGHT);
on.set(fn.ARROW_DOWN, Re.ARROW_DOWN);
on.set(fn.DELETE, Re.DELETE);
on.set(fn.ESCAPE, Re.ESCAPE);
on.set(fn.TAB, Re.TAB);
var cr = /* @__PURE__ */ new Set();
cr.add(Re.PAGE_UP);
cr.add(Re.PAGE_DOWN);
cr.add(Re.END);
cr.add(Re.HOME);
cr.add(Re.ARROW_LEFT);
cr.add(Re.ARROW_UP);
cr.add(Re.ARROW_RIGHT);
cr.add(Re.ARROW_DOWN);
function gt(t) {
  var e = t.key;
  if (an.has(e))
    return e;
  var n = on.get(t.keyCode);
  return n || Re.UNKNOWN;
}
function xp(t) {
  return cr.has(gt(t));
}
const { applyPassive: Zl } = zc, { matches: Tp } = Uo;
function Kt(t, { ripple: e = !0, surface: n = !1, unbounded: r = !1, disabled: i = !1, color: a, active: o, rippleElement: c, eventTarget: l, activeTarget: u, addClass: d = (m) => t.classList.add(m), removeClass: h = (m) => t.classList.remove(m), addStyle: f = (m, g) => t.style.setProperty(m, g), initPromise: v = Promise.resolve() } = {}) {
  let m, g = new ja(), I = oe("SMUI:addLayoutListener"), E, T = o, S = l, b = u;
  function _() {
    n ? (d("mdc-ripple-surface"), a === "primary" ? (d("smui-ripple-surface--primary"), h("smui-ripple-surface--secondary")) : a === "secondary" ? (h("smui-ripple-surface--primary"), d("smui-ripple-surface--secondary")) : (h("smui-ripple-surface--primary"), h("smui-ripple-surface--secondary"))) : (h("mdc-ripple-surface"), h("smui-ripple-surface--primary"), h("smui-ripple-surface--secondary")), m && T !== o && (T = o, o ? m.activate() : o === !1 && m.deactivate()), e && !m ? (m = new Ho({
      addClass: d,
      browserSupportsCssVars: () => Kc(window),
      computeBoundingRect: () => (c || t).getBoundingClientRect(),
      containsEventTarget: (w) => t.contains(w),
      deregisterDocumentInteractionHandler: (w, A) => g.off(document.documentElement, w, A),
      deregisterInteractionHandler: (w, A) => g.off(l || t, w, A),
      deregisterResizeHandler: (w) => window.removeEventListener("resize", w),
      getWindowPageOffset: () => {
        var w, A;
        return {
          x: (w = window.pageXOffset) !== null && w !== void 0 ? w : window.scrollX,
          y: (A = window.pageYOffset) !== null && A !== void 0 ? A : window.scrollY
        };
      },
      isSurfaceActive: () => o ?? Tp(u || t, ":active"),
      isSurfaceDisabled: () => !!i,
      isUnbounded: () => !!r,
      registerDocumentInteractionHandler: (w, A) => {
        const C = Zl();
        g.on(document.documentElement, w, A, typeof C == "boolean" ? { capture: C } : C);
      },
      registerInteractionHandler: (w, A) => {
        const C = Zl();
        g.on(l || t, w, A, typeof C == "boolean" ? { capture: C } : C);
      },
      registerResizeHandler: (w) => g.on(window, "resize", w),
      removeClass: h,
      updateCssVariable: f
    }), v.then(() => {
      m && (m.init(), m.setUnbounded(r));
    })) : m && !e && v.then(() => {
      m && (m.destroy(), m = void 0, g.clear());
    }), m && (S !== l || b !== u) && (S = l, b = u, m.destroy(), requestAnimationFrame(() => {
      m && (m.init(), m.setUnbounded(r));
    })), !e && r && d("mdc-ripple-upgraded--unbounded");
  }
  _(), I && (E = I(x));
  function x() {
    m && m.layout();
  }
  return {
    update(w) {
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
        removeClass: h,
        addStyle: f,
        initPromise: v
      } = Object.assign({ ripple: !0, surface: !1, unbounded: !1, disabled: !1, color: void 0, active: void 0, rippleElement: void 0, eventTarget: void 0, activeTarget: void 0, addClass: (A) => t.classList.add(A), removeClass: (A) => t.classList.remove(A), addStyle: (A, C) => t.style.setProperty(A, C), initPromise: Promise.resolve() }, w)), _();
    },
    destroy() {
      m && (m.destroy(), m = void 0, g.clear(), h("mdc-ripple-surface"), h("smui-ripple-surface--primary"), h("smui-ripple-surface--secondary")), E && E();
    }
  };
}
function wp(t, e) {
  Le(e, !0);
  let n = p(e, "use", 19, () => []), r = p(e, "class", 3, ""), i = p(e, "component", 3, Fr), a = p(e, "tag", 3, "span"), o = /* @__PURE__ */ ze(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "component",
    "tag",
    "children"
  ]), c;
  const l = oe("SMUI:label:context"), u = oe("SMUI:label:tabindex");
  function d() {
    return c.getElement();
  }
  var h = { getElement: d }, f = re(), v = Y(f);
  {
    let m = /* @__PURE__ */ ae(() => He({
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
    ur(v, i, (g, I) => {
      Te(
        I(g, it(
          {
            get tag() {
              return a();
            },
            get use() {
              return n();
            },
            get class() {
              return s(m);
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
            children: (E, T) => {
              var S = re(), b = Y(S);
              Ae(b, () => e.children ?? ge), O(E, S);
            },
            $$slots: { default: !0 }
          }
        )),
        (E) => c = E,
        () => c
      );
    });
  }
  return O(t, f), Oe(h);
}
function Lp(t, e) {
  Le(e, !0);
  let n = p(e, "use", 19, () => []), r = p(e, "class", 3, ""), i = p(e, "on", 3, !1), a = p(e, "component", 3, Fr), o = p(e, "tag", 3, "i"), c = /* @__PURE__ */ ze(e, [
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
  const u = /* @__PURE__ */ ae(() => o() === "svg" || a() === Mp), d = oe("SMUI:icon:context");
  function h() {
    return l.getElement();
  }
  var f = { getElement: h }, v = re(), m = Y(v);
  {
    let g = /* @__PURE__ */ ae(() => He({
      "mdc-button__icon": d === "button",
      "mdc-fab__icon": d === "fab",
      "mdc-icon-button__icon": d === "icon-button",
      "mdc-icon-button__icon--on": d === "icon-button" && i(),
      "mdc-tab__icon": d === "tab",
      "mdc-banner__icon": d === "banner",
      "mdc-segmented-button__icon": d === "segmented-button",
      [r()]: !0
    }));
    ur(m, a, (I, E) => {
      Te(
        E(I, it(
          {
            get tag() {
              return o();
            },
            get use() {
              return n();
            },
            get class() {
              return s(g);
            },
            "aria-hidden": "true"
          },
          () => s(u) ? { focusable: "false", tabindex: "-1" } : {},
          () => c,
          {
            children: (T, S) => {
              var b = re(), _ = Y(b);
              Ae(_, () => e.children ?? ge), O(T, b);
            },
            $$slots: { default: !0 }
          }
        )),
        (T) => l = T,
        () => l
      );
    });
  }
  return O(t, v), Oe(f);
}
var Op = /* @__PURE__ */ dn("<svg><!></svg>");
function Fr(t, e) {
  Le(e, !0);
  let n = p(e, "use", 19, () => []), r = p(e, "tag", 3, "div"), i = /* @__PURE__ */ ze(e, ["$$slots", "$$events", "$$legacy", "use", "tag", "children"]);
  const a = /* @__PURE__ */ ae(() => [
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
  var l = { getElement: c }, u = re(), d = Y(u);
  {
    var h = (v) => {
      var m = Op();
      ke(m, () => ({ ...i }));
      var g = Ie(m);
      Ae(g, () => e.children ?? ge), Te(m, (I) => o = I, () => o), Be(m, (I, E) => z == null ? void 0 : z(I, E), n), O(v, m);
    }, f = (v) => {
      var m = re(), g = Y(m);
      {
        var I = (T) => {
          var S = re(), b = Y(S);
          xl(b, r, !1, (_, x) => {
            Te(_, (w) => o = w, () => o), Be(_, (w, A) => z == null ? void 0 : z(w, A), n), ke(_, () => ({ ...i }));
          }), O(T, S);
        }, E = (T) => {
          var S = re(), b = Y(S);
          xl(b, r, !1, (_, x) => {
            Te(_, (C) => o = C, () => o), Be(_, (C, P) => z == null ? void 0 : z(C, P), n), ke(_, () => ({ ...i }));
            var w = re(), A = Y(w);
            Ae(A, () => e.children ?? ge), O(x, w);
          }), O(T, S);
        };
        le(
          g,
          (T) => {
            s(a) ? T(I) : T(E, !1);
          },
          !0
        );
      }
      O(v, m);
    };
    le(d, (v) => {
      r() === "svg" ? v(h) : v(f, !1);
    });
  }
  return O(t, u), Oe(l);
}
var Rp = /* @__PURE__ */ dn("<svg><!></svg>");
function Mp(t, e) {
  Le(e, !0), console && console.warn && console.warn('The @smui/common Svg component is deprecated. You can use `tag="svg"` now.');
  let n = p(e, "use", 19, () => []), r = /* @__PURE__ */ ze(e, ["$$slots", "$$events", "$$legacy", "use", "children"]), i;
  function a() {
    return i;
  }
  var o = { getElement: a }, c = Rp();
  ke(c, () => ({ ...r }));
  var l = Ie(c);
  return Ae(l, () => e.children ?? ge), Te(c, (u) => i = u, () => i), Be(c, (u, d) => z == null ? void 0 : z(u, d), n), O(t, c), Oe(o);
}
function Si(t, e) {
  Le(e, !0);
  const [n, r] = Ln(), i = dt(e.value);
  ne(e.key, i), xe(() => {
    mn(i, e.value);
  }), Hn(() => {
    i.set(void 0);
  });
  var a = re(), o = Y(a);
  Ae(o, () => e.children ?? ge), O(t, a), Oe(), r();
}
var Dp = /* @__PURE__ */ ve('<div class="mdc-button__touch"></div>'), Pp = /* @__PURE__ */ ve('<div class="mdc-button__ripple"></div> <!><!>', 1);
function Np(t, e) {
  Le(e, !0);
  let n = p(e, "use", 19, () => []), r = p(e, "class", 3, ""), i = p(e, "style", 3, ""), a = p(e, "ripple", 3, !0), o = p(e, "color", 3, "primary"), c = p(e, "variant", 3, "text"), l = p(e, "touch", 3, !1), u = p(e, "action", 3, "close"), d = p(e, "defaultAction", 3, !1), h = p(e, "secondary", 3, !1), f = p(e, "component", 3, Fr), v = p(e, "tag", 19, () => e.href == null ? "button" : "a"), m = /* @__PURE__ */ ze(e, [
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
  ]), g, I = ye({}), E = ye({}), T = oe("SMUI:button:context");
  const S = /* @__PURE__ */ ae(() => T === "dialog:action" && u() != null ? { "data-mdc-dialog-action": u() } : { action: u() }), b = /* @__PURE__ */ ae(() => T === "dialog:action" && d() ? { "data-mdc-dialog-button-default": "" } : {}), _ = /* @__PURE__ */ ae(() => T === "banner" ? {} : { secondary: h() });
  let x = e.disabled;
  xe(() => {
    if (x !== e.disabled) {
      if (g) {
        const k = K();
        "blur" in k && k.blur();
      }
      x = m.disabled;
    }
  }), ne("SMUI:label:context", "button"), ne("SMUI:icon:context", "button");
  function w(k) {
    I[k] || (I[k] = !0);
  }
  function A(k) {
    (!(k in I) || I[k]) && (I[k] = !1);
  }
  function C(k, B) {
    E[k] != B && (B === "" || B == null ? delete E[k] : E[k] = B);
  }
  function P() {
    T === "banner" && Ke(K(), h() ? "SMUIBannerButtonSecondaryActionClick" : "SMUIBannerButtonPrimaryActionClick");
  }
  function K() {
    return g.getElement();
  }
  var H = { getElement: K }, F = re(), _e = Y(F);
  {
    let k = /* @__PURE__ */ ae(() => [
      [
        Kt,
        {
          ripple: a(),
          unbounded: !1,
          color: o(),
          disabled: !!e.disabled,
          addClass: w,
          removeClass: A,
          addStyle: C
        }
      ],
      ...n()
    ]), B = /* @__PURE__ */ ae(() => He({
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
      "mdc-banner__secondary-action": T === "banner" && h(),
      "mdc-banner__primary-action": T === "banner" && !h(),
      "mdc-tooltip__action": T === "tooltip:rich-actions",
      ...I,
      [r()]: !0
    })), U = /* @__PURE__ */ ae(() => Object.entries(E).map(([G, ee]) => `${G}: ${ee};`).concat([i()]).join(" "));
    ur(_e, f, (G, ee) => {
      Te(
        ee(G, it(
          {
            get tag() {
              return v();
            },
            get use() {
              return s(k);
            },
            get class() {
              return s(B);
            },
            get style() {
              return s(U);
            }
          },
          () => s(S),
          () => s(b),
          () => s(_),
          {
            get href() {
              return e.href;
            }
          },
          () => m,
          {
            onclick: (R) => {
              var y;
              P(), (y = e.onclick) == null || y.call(e, R);
            },
            children: (R, y) => {
              var L = Pp(), $ = Ee(Y(L), 2);
              Ae($, () => e.children ?? ge);
              var N = Ee($);
              {
                var j = (de) => {
                  var V = Dp();
                  O(de, V);
                };
                le(N, (de) => {
                  l() && de(j);
                });
              }
              O(R, L);
            },
            $$slots: { default: !0 }
          }
        )),
        (R) => g = R,
        () => g
      );
    });
  }
  return O(t, F), Oe(H);
}
function rl(t, e) {
  Le(e, !0);
  let n = p(e, "callback", 3, () => {
  }), r = p(e, "disabled", 3, !1), i = p(e, "variant", 3, "default"), a = p(e, "isAbortAction", 3, !1), o = p(e, "backgroundColor", 3, void 0);
  {
    let c = /* @__PURE__ */ ae(() => a() ? "background-color: #ff3e00;" : "background-color: " + o());
    Np(t, {
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
        var d = re(), h = Y(d);
        Ae(h, () => e.children ?? ge), O(l, d);
      },
      $$slots: { default: !0 }
    });
  }
  Oe();
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
}, Jn = {
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
var Up = (
  /** @class */
  function(t) {
    $e(e, t);
    function e(n) {
      var r = t.call(this, fe(fe({}, e.defaultAdapter), n)) || this;
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
        return Jn;
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
      var n = this.adapter.getAttr(Jn.DATA_ARIA_LABEL_ON), r = this.adapter.getAttr(Jn.DATA_ARIA_LABEL_OFF);
      if (n && r) {
        if (this.adapter.getAttr(Jn.ARIA_PRESSED) !== null)
          throw new Error("MDCIconButtonToggleFoundation: Button should not set `aria-pressed` if it has a toggled aria label.");
        this.hasToggledAriaLabel = !0;
      } else
        this.adapter.setAttr(Jn.ARIA_PRESSED, String(this.isOn()));
    }, e.prototype.handleClick = function() {
      this.toggle(), this.adapter.notifyChange({ isOn: this.isOn() });
    }, e.prototype.isOn = function() {
      return this.adapter.hasClass(Qa.ICON_BUTTON_ON);
    }, e.prototype.toggle = function(n) {
      if (n === void 0 && (n = !this.isOn()), n ? this.adapter.addClass(Qa.ICON_BUTTON_ON) : this.adapter.removeClass(Qa.ICON_BUTTON_ON), this.hasToggledAriaLabel) {
        var r = n ? this.adapter.getAttr(Jn.DATA_ARIA_LABEL_ON) : this.adapter.getAttr(Jn.DATA_ARIA_LABEL_OFF);
        this.adapter.setAttr(Jn.ARIA_LABEL, r || "");
      } else
        this.adapter.setAttr(Jn.ARIA_PRESSED, "" + n);
    }, e;
  }(Ut)
), Hp = /* @__PURE__ */ ve('<div class="mdc-icon-button__touch"></div>'), Fp = /* @__PURE__ */ ve('<div class="mdc-icon-button__ripple"></div> <!><!>', 1);
function Bp(t, e) {
  Le(e, !0);
  let n = () => {
  };
  function r(y) {
    return y === n;
  }
  let i = p(e, "use", 19, () => []), a = p(e, "class", 3, ""), o = p(e, "style", 3, ""), c = p(e, "ripple", 3, !0), l = p(e, "toggle", 3, !1), u = p(e, "pressed", 15, n), d = p(e, "touch", 3, !1), h = p(e, "displayFlex", 3, !0), f = p(e, "size", 3, "normal"), v = p(e, "component", 3, Fr), m = p(e, "tag", 19, () => e.href == null ? "button" : "a"), g = /* @__PURE__ */ ze(e, [
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
  ]), I, E, T = /* @__PURE__ */ be(ye({})), S = ye({}), b = /* @__PURE__ */ be(ye({})), _ = oe("SMUI:icon-button:context"), x = oe("SMUI:icon-button:aria-describedby");
  const w = /* @__PURE__ */ ae(() => {
    if (_ === "data-table:pagination")
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
    else return _ === "dialog:header" || _ === "dialog:sheet" ? { "data-mdc-dialog-action": e.action } : { action: e.action };
  });
  let A = !!e.disabled;
  xe(() => {
    if (A != !!e.disabled) {
      if (I) {
        const y = U();
        "blur" in y && y.blur();
      }
      A = !!e.disabled;
    }
  }), ne("SMUI:icon:context", "icon-button");
  let C = null;
  xe(() => {
    I && U() && l() !== C && (l() && !E ? (E = new Up({
      addClass: K,
      hasClass: P,
      notifyChange: (y) => {
        B(y), Ke(U(), "SMUIIconButtonToggleChange", y);
      },
      removeClass: H,
      getAttr: _e,
      setAttr: k
    }), E.init()) : !l() && E && (E.destroy(), E = void 0, Q(T, {}, !0), Q(b, {}, !0)), C = l());
  }), xe(() => {
    E && !r(u()) && E.isOn() !== u() && E.toggle(u());
  }), Hn(() => {
    E && E.destroy();
  });
  function P(y) {
    return y in s(T) ? s(T)[y] : U().classList.contains(y);
  }
  function K(y) {
    s(T)[y] || (s(T)[y] = !0);
  }
  function H(y) {
    (!(y in s(T)) || s(T)[y]) && (s(T)[y] = !1);
  }
  function F(y, L) {
    S[y] != L && (L === "" || L == null ? delete S[y] : S[y] = L);
  }
  function _e(y) {
    return y in s(b) ? s(b)[y] ?? null : U().getAttribute(y);
  }
  function k(y, L) {
    s(b)[y] !== L && (s(b)[y] = L);
  }
  function B(y) {
    u(y.isOn);
  }
  function U() {
    return I.getElement();
  }
  var G = { getElement: U }, ee = re(), R = Y(ee);
  {
    let y = /* @__PURE__ */ ae(() => [
      [
        Kt,
        {
          ripple: c(),
          unbounded: !0,
          color: e.color,
          disabled: !!e.disabled,
          addClass: K,
          removeClass: H,
          addStyle: F
        }
      ],
      ...i()
    ]), L = /* @__PURE__ */ ae(() => He({
      "mdc-icon-button": !0,
      "mdc-icon-button--on": !r(u()) && u(),
      "mdc-icon-button--touch": d(),
      "mdc-icon-button--display-flex": h(),
      "smui-icon-button--size-button": f() === "button",
      "smui-icon-button--size-mini": f() === "mini",
      "mdc-icon-button--reduced-size": f() === "mini" || f() === "button",
      "mdc-card__action": _ === "card:action",
      "mdc-card__action--icon": _ === "card:action",
      "mdc-top-app-bar__navigation-icon": _ === "top-app-bar:navigation",
      "mdc-top-app-bar__action-item": _ === "top-app-bar:action",
      "mdc-snackbar__dismiss": _ === "snackbar:actions",
      "mdc-data-table__pagination-button": _ === "data-table:pagination",
      "mdc-data-table__sort-icon-button": _ === "data-table:sortable-header-cell",
      "mdc-dialog__close": (_ === "dialog:header" || _ === "dialog:sheet") && e.action === "close",
      ...s(T),
      [a()]: !0
    })), $ = /* @__PURE__ */ ae(() => Object.entries(S).map(([de, V]) => `${de}: ${V};`).concat([o()]).join(" ")), N = /* @__PURE__ */ ae(() => r(u()) ? null : u() ? "true" : "false"), j = /* @__PURE__ */ ae(() => u() ? e.ariaLabelOn : e.ariaLabelOff);
    ur(R, v, (de, V) => {
      Te(
        V(de, it(
          {
            get tag() {
              return m();
            },
            get use() {
              return s(y);
            },
            get class() {
              return s(L);
            },
            get style() {
              return s($);
            },
            get "aria-pressed"() {
              return s(N);
            },
            get "aria-label"() {
              return s(j);
            },
            get "data-aria-label-on"() {
              return e.ariaLabelOn;
            },
            get "data-aria-label-off"() {
              return e.ariaLabelOff;
            },
            get "aria-describedby"() {
              return x;
            },
            get href() {
              return e.href;
            }
          },
          () => s(w),
          () => s(b),
          () => g,
          {
            onclick: (se) => {
              var X;
              E && E.handleClick(), _ === "top-app-bar:navigation" && Ke(U(), "SMUITopAppBarIconButtonNav"), (X = e.onclick) == null || X.call(e, se);
            },
            children: (se, X) => {
              var he = Fp(), ie = Ee(Y(he), 2);
              Ae(ie, () => e.children ?? ge);
              var qe = Ee(ie);
              {
                var Ue = (Xe) => {
                  var De = Hp();
                  O(Xe, De);
                };
                le(qe, (Xe) => {
                  d() && Xe(Ue);
                });
              }
              O(se, he);
            },
            $$slots: { default: !0 }
          }
        )),
        (se) => I = se,
        () => I
      );
    });
  }
  return O(t, ee), Oe(G);
}
function kp(t, e) {
  let n = p(e, "callback", 3, () => {
  }), r = p(e, "icon", 3, ""), i = p(e, "disabled", 3, !1);
  Bp(t, {
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
      Lp(a, {
        class: "material-icons",
        children: (c, l) => {
          var u = Xt();
          Fe(() => vt(u, r())), O(c, u);
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
var Vp = {
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
var Gp = (
  /** @class */
  function(t) {
    $e(e, t);
    function e(n) {
      var r = t.call(this, fe(fe({}, e.defaultAdapter), n)) || this;
      return r.shakeAnimationEndHandler = function() {
        r.handleShakeAnimationEnd();
      }, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Vp;
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
  }(Ut)
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
var jp = (
  /** @class */
  function(t) {
    $e(e, t);
    function e(n) {
      var r = t.call(this, fe(fe({}, e.defaultAdapter), n)) || this;
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
  }(Ut)
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
var qp = {
  NOTCH_ELEMENT_SELECTOR: ".mdc-notched-outline__notch"
}, Ql = {
  // This should stay in sync with $mdc-notched-outline-padding * 2.
  NOTCH_ELEMENT_PADDING: 8
}, Wp = {
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
var Kp = (
  /** @class */
  function(t) {
    $e(e, t);
    function e(n) {
      return t.call(this, fe(fe({}, e.defaultAdapter), n)) || this;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return qp;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Wp;
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
  }(Ut)
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
var ns = {
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
}, zp = {
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
}, Xp = [
  "pattern",
  "min",
  "max",
  "required",
  "step",
  "minlength",
  "maxlength"
], Yp = [
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
var $l = ["mousedown", "touchstart"], eu = ["click", "keydown"], Zp = (
  /** @class */
  function(t) {
    $e(e, t);
    function e(n, r) {
      r === void 0 && (r = {});
      var i = t.call(this, fe(fe({}, e.defaultAdapter), n)) || this;
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
        return zp;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return ns;
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
        return Yp.indexOf(n) >= 0;
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
        for (var o = Lt($l), c = o.next(); !c.done; c = o.next()) {
          var l = c.value;
          this.adapter.registerInputInteractionHandler(l, this.setPointerXOffset);
        }
      } catch (h) {
        n = { error: h };
      } finally {
        try {
          c && !c.done && (r = o.return) && r.call(o);
        } finally {
          if (n) throw n.error;
        }
      }
      try {
        for (var u = Lt(eu), d = u.next(); !d.done; d = u.next()) {
          var l = d.value;
          this.adapter.registerTextFieldInteractionHandler(l, this.textFieldInteractionHandler);
        }
      } catch (h) {
        i = { error: h };
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
        for (var o = Lt($l), c = o.next(); !c.done; c = o.next()) {
          var l = c.value;
          this.adapter.deregisterInputInteractionHandler(l, this.setPointerXOffset);
        }
      } catch (h) {
        n = { error: h };
      } finally {
        try {
          c && !c.done && (r = o.return) && r.call(o);
        } finally {
          if (n) throw n.error;
        }
      }
      try {
        for (var u = Lt(eu), d = u.next(); !d.done; d = u.next()) {
          var l = d.value;
          this.adapter.deregisterTextFieldInteractionHandler(l, this.textFieldInteractionHandler);
        }
      } catch (h) {
        i = { error: h };
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
        return Xp.indexOf(i) > -1 ? (r.styleValidity(!0), r.adapter.setLabelRequired(r.getNativeInput().required), !0) : !1;
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
        a && o ? this.adapter.setInputAttr(ns.ARIA_DESCRIBEDBY, o) : this.adapter.removeInputAttr(ns.ARIA_DESCRIBEDBY);
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
  }(Ut)
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
}, Qp = {
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
var nu = ["click", "keydown"], Jp = (
  /** @class */
  function(t) {
    $e(e, t);
    function e(n) {
      var r = t.call(this, fe(fe({}, e.defaultAdapter), n)) || this;
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
        return Qp;
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
        for (var i = Lt(nu), a = i.next(); !a.done; a = i.next()) {
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
        for (var i = Lt(nu), a = i.next(); !a.done; a = i.next()) {
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
  }(Ut)
), $p = /* @__PURE__ */ ve("<span><!></span>"), em = /* @__PURE__ */ ve("<label><!></label>");
function po(t, e) {
  Le(e, !0);
  let n = p(e, "use", 19, () => []), r = p(e, "class", 3, ""), i = p(e, "style", 3, ""), a = p(e, "floatAbove", 15, !1), o = p(e, "required", 15, !1), c = p(e, "wrapped", 3, !1), l = /* @__PURE__ */ ze(e, [
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
  ]), u, d = /* @__PURE__ */ be(void 0), h = new ja(), f = ye({}), v = ye({}), m = oe("SMUI:generic:input:props") ?? {}, g = a();
  xe(() => {
    s(d) && g !== a() && (g = a(), s(d).float(a()));
  });
  let I = o();
  xe(() => {
    s(d) && I !== o() && (I = o(), s(d).setRequired(o()));
  });
  const E = oe("SMUI:floating-label:mount"), T = oe("SMUI:floating-label:unmount");
  st(() => {
    Q(
      d,
      new Gp({
        addClass: S,
        removeClass: b,
        getWidth: () => {
          var y, L;
          const G = K(), ee = G.cloneNode(!0);
          (y = G.parentNode) == null || y.appendChild(ee), ee.classList.add("smui-floating-label--remove-transition"), ee.classList.add("smui-floating-label--force-size"), ee.classList.remove("mdc-floating-label--float-above");
          const R = ee.scrollWidth;
          return (L = G.parentNode) == null || L.removeChild(ee), R;
        },
        registerInteractionHandler: (G, ee) => h.on(K(), G, ee),
        deregisterInteractionHandler: (G, ee) => h.off(K(), G, ee)
      }),
      !0
    );
    const U = {
      get element() {
        return K();
      },
      addStyle: _,
      removeStyle: x
    };
    return E && E(U), s(d).init(), () => {
      var G;
      T && T(U), (G = s(d)) == null || G.destroy(), h.clear();
    };
  });
  function S(U) {
    f[U] || (f[U] = !0);
  }
  function b(U) {
    (!(U in f) || f[U]) && (f[U] = !1);
  }
  function _(U, G) {
    v[U] != G && (G === "" || G == null ? delete v[U] : v[U] = G);
  }
  function x(U) {
    U in v && delete v[U];
  }
  function w(U) {
    var G;
    (G = s(d)) == null || G.shake(U);
  }
  function A(U) {
    a(U);
  }
  function C(U) {
    o(U);
  }
  function P() {
    if (s(d) == null)
      throw new Error("Instance is undefined.");
    return s(d).getWidth();
  }
  function K() {
    return u;
  }
  var H = { shake: w, float: A, setRequired: C, getWidth: P, getElement: K }, F = re(), _e = Y(F);
  {
    var k = (U) => {
      var G = $p();
      ke(G, (R, y) => ({ class: R, style: y, ...l }), [
        () => He({
          "mdc-floating-label": !0,
          "mdc-floating-label--float-above": a(),
          "mdc-floating-label--required": o(),
          ...f,
          [r()]: !0
        }),
        () => Object.entries(v).map(([R, y]) => `${R}: ${y};`).concat([i()]).join(" ")
      ]);
      var ee = Ie(G);
      Ae(ee, () => e.children ?? ge), Te(G, (R) => u = R, () => u), Be(G, (R, y) => z == null ? void 0 : z(R, y), n), O(U, G);
    }, B = (U) => {
      var G = em();
      ke(
        G,
        (R, y) => ({
          class: R,
          style: y,
          for: e.for || (m ? m.id : void 0),
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
          () => Object.entries(v).map(([R, y]) => `${R}: ${y};`).concat([i()]).join(" ")
        ]
      );
      var ee = Ie(G);
      Ae(ee, () => e.children ?? ge), Te(G, (R) => u = R, () => u), Be(G, (R, y) => z == null ? void 0 : z(R, y), n), O(U, G);
    };
    le(_e, (U) => {
      c() ? U(k) : U(B, !1);
    });
  }
  return O(t, F), Oe(H);
}
var tm = /* @__PURE__ */ ve("<div></div>");
function Xc(t, e) {
  Le(e, !0);
  let n = p(e, "use", 19, () => []), r = p(e, "class", 3, ""), i = p(e, "style", 3, ""), a = p(e, "active", 3, !1), o = /* @__PURE__ */ ze(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "style",
    "active"
  ]), c, l = /* @__PURE__ */ be(void 0), u = new ja(), d = ye({}), h = ye({});
  st(() => (Q(
    l,
    new jp({
      addClass: v,
      removeClass: m,
      hasClass: f,
      setStyle: g,
      registerEventHandler: (x, w) => u.on(S(), x, w),
      deregisterEventHandler: (x, w) => u.off(S(), x, w)
    }),
    !0
  ), s(l).init(), () => {
    var x;
    (x = s(l)) == null || x.destroy(), u.clear();
  }));
  function f(x) {
    return x in d ? d[x] : S().classList.contains(x);
  }
  function v(x) {
    d[x] || (d[x] = !0);
  }
  function m(x) {
    (!(x in d) || d[x]) && (d[x] = !1);
  }
  function g(x, w) {
    h[x] != w && (w === "" || w == null ? delete h[x] : h[x] = w);
  }
  function I() {
    var x;
    (x = s(l)) == null || x.activate();
  }
  function E() {
    var x;
    (x = s(l)) == null || x.deactivate();
  }
  function T(x) {
    var w;
    (w = s(l)) == null || w.setRippleCenter(x);
  }
  function S() {
    return c;
  }
  var b = { activate: I, deactivate: E, setRippleCenter: T, getElement: S }, _ = tm();
  return ke(_, (x, w) => ({ class: x, style: w, ...o }), [
    () => He({
      "mdc-line-ripple": !0,
      "mdc-line-ripple--active": a(),
      ...d,
      [r()]: !0
    }),
    () => Object.entries(h).map(([x, w]) => `${x}: ${w};`).concat([i()]).join(" ")
  ]), Te(_, (x) => c = x, () => c), Be(_, (x, w) => z == null ? void 0 : z(x, w), n), O(t, _), Oe(b);
}
var nm = /* @__PURE__ */ ve('<div class="mdc-notched-outline__notch"><!></div>'), rm = /* @__PURE__ */ ve('<div><div class="mdc-notched-outline__leading"></div> <!> <div class="mdc-notched-outline__trailing"></div></div>');
function Yc(t, e) {
  Le(e, !0);
  let n = p(e, "use", 19, () => []), r = p(e, "class", 3, ""), i = p(e, "notched", 3, !1), a = p(e, "noLabel", 3, !1), o = /* @__PURE__ */ ze(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "notched",
    "noLabel",
    "children"
  ]), c, l = /* @__PURE__ */ be(void 0), u = /* @__PURE__ */ be(void 0), d = ye({}), h = ye({}), f;
  xe(() => {
    s(u) !== f && (s(u) ? (s(u).addStyle("transition-duration", "0s"), v("mdc-notched-outline--upgraded"), requestAnimationFrame(() => {
      s(u) && s(u).removeStyle("transition-duration");
    })) : m("mdc-notched-outline--upgraded"), f = s(u));
  }), ne("SMUI:floating-label:mount", (A) => {
    Q(u, A, !0);
  }), ne("SMUI:floating-label:unmount", () => {
    Q(u, void 0);
  }), st(() => (Q(
    l,
    new Kp({
      addClass: v,
      removeClass: m,
      setNotchWidthProperty: (A) => g("width", A + "px"),
      removeNotchWidthProperty: () => I("width")
    }),
    !0
  ), s(l).init(), () => {
    var A;
    (A = s(l)) == null || A.destroy();
  }));
  function v(A) {
    d[A] || (d[A] = !0);
  }
  function m(A) {
    (!(A in d) || d[A]) && (d[A] = !1);
  }
  function g(A, C) {
    h[A] != C && (C === "" || C == null ? delete h[A] : h[A] = C);
  }
  function I(A) {
    A in h && delete h[A];
  }
  function E(A) {
    var C;
    (C = s(l)) == null || C.notch(A);
  }
  function T() {
    var A;
    (A = s(l)) == null || A.closeNotch();
  }
  function S() {
    return c;
  }
  var b = { notch: E, closeNotch: T, getElement: S }, _ = rm();
  ke(_, (A) => ({ class: A, ...o }), [
    () => He({
      "mdc-notched-outline": !0,
      "mdc-notched-outline--notched": i(),
      "mdc-notched-outline--no-label": a(),
      ...d,
      [r()]: !0
    })
  ]);
  var x = Ee(Ie(_), 2);
  {
    var w = (A) => {
      var C = nm(), P = Ie(C);
      Ae(P, () => e.children ?? ge), Fe((K) => rn(C, K), [
        () => Object.entries(h).map(([K, H]) => `${K}: ${H};`).join(" ")
      ]), O(A, C);
    };
    le(x, (A) => {
      a() || A(w);
    });
  }
  return Te(_, (A) => c = A, () => c), Be(_, (A, C) => z == null ? void 0 : z(A, C), n), O(t, _), Oe(b);
}
function il(t, e) {
  Le(e, !0);
  let n = p(e, "use", 19, () => []), r = p(e, "class", 3, ""), i = p(e, "component", 3, Fr), a = p(e, "tag", 3, "div"), o = p(e, "_smuiClass", 3, ""), c = p(e, "_smuiClassMap", 23, () => ({})), l = p(e, "_smuiContexts", 19, () => ({})), u = p(e, "_smuiProps", 19, () => ({})), d = /* @__PURE__ */ ze(e, [
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
  ]), h;
  const f = [];
  Object.entries(c()).forEach(([E, T]) => {
    const S = oe(T);
    S && "subscribe" in S && f.push(S.subscribe((b) => {
      c()[E] = b;
    }));
  });
  for (let E in l())
    l().hasOwnProperty(E) && ne(E, l()[E]);
  Hn(() => {
    for (const E of f)
      E();
  });
  function v() {
    return h.getElement();
  }
  var m = { getElement: v }, g = re(), I = Y(g);
  {
    let E = /* @__PURE__ */ ae(() => He({
      [o()]: !0,
      ...c(),
      [r()]: !0
    }));
    ur(I, i, (T, S) => {
      Te(
        S(T, it(
          {
            get tag() {
              return a();
            },
            get use() {
              return n();
            },
            get class() {
              return s(E);
            }
          },
          u,
          () => d,
          {
            children: (b, _) => {
              var x = re(), w = Y(x);
              Ae(w, () => e.children ?? ge), O(b, x);
            },
            $$slots: { default: !0 }
          }
        )),
        (b) => h = b,
        () => h
      );
    });
  }
  return O(t, g), Oe(m);
}
function im(t, e) {
  Le(e, !0);
  let n = /* @__PURE__ */ ze(e, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return Te(
    il(t, it({ _smuiClass: "mdc-text-field-helper-line", tag: "div" }, () => n, {
      children: (o, c) => {
        var l = re(), u = Y(l);
        Ae(u, () => e.children ?? ge), O(o, l);
      },
      $$slots: { default: !0 }
    })),
    (o) => r = o,
    () => r
  ), Oe(a);
}
function am(t, e) {
  Le(e, !0);
  let n = /* @__PURE__ */ ze(e, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return Te(
    il(t, it(
      {
        _smuiClass: "mdc-text-field__affix mdc-text-field__affix--prefix",
        tag: "span"
      },
      () => n,
      {
        children: (o, c) => {
          var l = re(), u = Y(l);
          Ae(u, () => e.children ?? ge), O(o, l);
        },
        $$slots: { default: !0 }
      }
    )),
    (o) => r = o,
    () => r
  ), Oe(a);
}
function om(t, e) {
  Le(e, !0);
  let n = /* @__PURE__ */ ze(e, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return Te(
    il(t, it(
      {
        _smuiClass: "mdc-text-field__affix mdc-text-field__affix--suffix",
        tag: "span"
      },
      () => n,
      {
        children: (o, c) => {
          var l = re(), u = Y(l);
          Ae(u, () => e.children ?? ge), O(o, l);
        },
        $$slots: { default: !0 }
      }
    )),
    (o) => r = o,
    () => r
  ), Oe(a);
}
var sm = /* @__PURE__ */ ve("<input/>");
function lm(t, e) {
  Le(e, !0);
  let n = p(e, "use", 19, () => []), r = p(e, "class", 3, ""), i = p(e, "type", 3, "text"), a = p(e, "placeholder", 3, " "), o = p(e, "value", 15), c = p(e, "files", 15, null), l = p(e, "dirty", 15, !1), u = p(e, "invalid", 15, !1), d = p(e, "updateInvalid", 3, !0), h = p(e, "initialInvalid", 3, !1), f = p(e, "emptyValueNull", 19, () => o() === null), v = p(e, "emptyValueUndefined", 19, () => o() === void 0), m = /* @__PURE__ */ ze(e, [
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
  ]), g, I = ye({}), E = ye({});
  xe(() => {
    i() === "file" ? delete E.value : E.value = o() == null ? "" : o();
  }), st(() => {
    d() && h() && u(P().matches(":invalid"));
  });
  function T(k) {
    return k === "" ? Number.NaN : +k;
  }
  function S(k) {
    if (i() === "file") {
      c(k.currentTarget.files);
      return;
    }
    if (k.currentTarget.value === "" && f()) {
      o(null);
      return;
    }
    if (k.currentTarget.value === "" && v()) {
      o(void 0);
      return;
    }
    switch (i()) {
      case "number":
      case "range":
        o(T(k.currentTarget.value));
        break;
      default:
        o(k.currentTarget.value);
        break;
    }
  }
  function b(k) {
    (i() === "file" || i() === "range") && S(k), l(!0), d() && u(P().matches(":invalid"));
  }
  function _(k) {
    return k in I ? I[k] ?? null : P().getAttribute(k);
  }
  function x(k, B) {
    I[k] !== B && (I[k] = B);
  }
  function w(k) {
    (!(k in I) || I[k] != null) && (I[k] = void 0);
  }
  function A() {
    P().focus();
  }
  function C() {
    P().blur();
  }
  function P() {
    return g;
  }
  var K = { getAttr: _, addAttr: x, removeAttr: w, focus: A, blur: C, getElement: P }, H = sm(), F = (k) => {
    var B;
    i() !== "file" && S(k), (B = e.oninput) == null || B.call(e, k);
  }, _e = (k) => {
    var B;
    b(k), (B = e.onchange) == null || B.call(e, k);
  };
  return ke(
    H,
    (k) => ({
      class: k,
      type: i(),
      placeholder: a(),
      ...E,
      ...I,
      ...m,
      oninput: F,
      onchange: _e
    }),
    [
      () => He({ "mdc-text-field__input": !0, [r()]: !0 })
    ],
    void 0,
    void 0,
    !0
  ), Te(H, (k) => g = k, () => g), Be(H, (k, B) => z == null ? void 0 : z(k, B), n), O(t, H), Oe(K);
}
var um = /* @__PURE__ */ ve("<textarea></textarea>");
function cm(t, e) {
  Le(e, !0);
  let n = p(e, "use", 19, () => []), r = p(e, "class", 3, ""), i = p(e, "style", 3, ""), a = p(e, "value", 15, ""), o = p(e, "dirty", 15, !1), c = p(e, "invalid", 15, !1), l = p(e, "updateInvalid", 3, !0), u = p(e, "initialInvalid", 3, !1), d = p(e, "resizable", 3, !0), h = /* @__PURE__ */ ze(e, [
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
  ]), f, v = ye({});
  st(() => {
    l() && u() && c(b().matches(":invalid"));
  });
  function m() {
    o(!0), l() && c(b().matches(":invalid"));
  }
  function g(A) {
    return A in v ? v[A] ?? null : b().getAttribute(A);
  }
  function I(A, C) {
    v[A] !== C && (v[A] = C);
  }
  function E(A) {
    (!(A in v) || v[A] != null) && (v[A] = void 0);
  }
  function T() {
    b().focus();
  }
  function S() {
    b().blur();
  }
  function b() {
    return f;
  }
  var _ = { getAttr: g, addAttr: I, removeAttr: E, focus: T, blur: S, getElement: b }, x = um(), w = (A) => {
    var C;
    m(), (C = e.onchange) == null || C.call(e, A);
  };
  return ke(
    x,
    (A) => ({
      class: A,
      style: `${d() ? "" : "resize: none; "}${i()}`,
      ...v,
      ...h,
      onchange: w
    }),
    [
      () => He({ "mdc-text-field__input": !0, [r()]: !0 })
    ]
  ), Te(x, (A) => f = A, () => f), Be(x, (A, C) => z == null ? void 0 : z(A, C), n), ka(() => wa(x, a)), O(t, x), Oe(_);
}
var dm = /* @__PURE__ */ ve('<span class="mdc-text-field__ripple"></span>'), fm = /* @__PURE__ */ ve("<!> <!>", 1), hm = /* @__PURE__ */ ve("<span><!> <!></span>"), vm = /* @__PURE__ */ ve("<!> <!> <!>", 1), pm = /* @__PURE__ */ ve("<label><!> <!> <!> <!> <!> <!> <!></label>"), mm = /* @__PURE__ */ ve("<div><!> <!> <!> <!> <!></div>"), gm = /* @__PURE__ */ ve("<!> <!>", 1);
function ru(t, e) {
  Le(e, !0);
  const { applyPassive: n } = zc;
  let r = () => {
  };
  function i(W) {
    return W === r;
  }
  let a = p(e, "use", 19, () => []), o = p(e, "class", 3, ""), c = p(e, "style", 3, ""), l = p(e, "ripple", 3, !0), u = p(e, "disabled", 3, !1), d = p(e, "required", 3, !1), h = p(e, "textarea", 3, !1), f = p(e, "variant", 19, () => h() ? "outlined" : "standard"), v = p(e, "noLabel", 3, !1), m = p(e, "type", 3, "text"), g = p(e, "value", 15), I = p(e, "files", 15, r), E = p(e, "invalid", 15, r), T = p(e, "updateInvalid", 19, () => i(E())), S = p(e, "initialInvalid", 3, !1), b = p(e, "dirty", 15, !1), _ = p(e, "validateOnValueChange", 19, T), x = p(e, "useNativeValidation", 19, T), w = p(e, "withLeadingIcon", 3, r), A = p(e, "withTrailingIcon", 3, r), C = p(e, "input", 7), P = p(e, "floatingLabel", 7), K = p(e, "lineRipple", 7), H = p(e, "notchedOutline", 7), F = /* @__PURE__ */ ze(e, [
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
  const _e = g() !== void 0 || g() === void 0 && e.input$emptyValueUndefined || !i(I());
  i(I()) && I(null), i(E()) && E(!1);
  let k, B = /* @__PURE__ */ be(void 0), U = new ja(), G = ye({}), ee = ye({}), R = /* @__PURE__ */ be(void 0), y = /* @__PURE__ */ be(!1), L = /* @__PURE__ */ be(ye(S())), $ = oe("SMUI:addLayoutListener"), N, j, de = new Promise((W) => j = W), V, se, X, he;
  const ie = /* @__PURE__ */ ae(() => C() && C().getElement());
  xe(() => {
    (b() || s(L) || !T()) && s(B) && s(B).isValid() !== !E() && (T() ? E(!s(B).isValid()) : s(B).setValid(!E()));
  }), xe(() => {
    s(B) && s(B).getValidateOnValueChange() !== _() && s(B).setValidateOnValueChange(i(_()) ? !1 : _());
  }), xe(() => {
    s(B) && s(B).setUseNativeValidation(i(x()) ? !0 : x());
  }), xe(() => {
    s(B) && s(B).setDisabled(u());
  });
  let qe = g();
  xe(() => {
    if (s(B) && _e && qe !== g()) {
      qe = g();
      const W = `${g() == null ? "" : g()}`;
      s(B).getValue() !== W && s(B).setValue(W);
    }
  }), $ && (N = $(M)), ne("SMUI:textfield:leading-icon:mount", (W) => {
    V = W;
  }), ne("SMUI:textfield:leading-icon:unmount", () => {
    V = void 0;
  }), ne("SMUI:textfield:trailing-icon:mount", (W) => {
    se = W;
  }), ne("SMUI:textfield:trailing-icon:unmount", () => {
    se = void 0;
  }), ne("SMUI:textfield:helper-text:id", (W) => {
    Q(R, W, !0);
  }), ne("SMUI:textfield:helper-text:mount", (W) => {
    X = W;
  }), ne("SMUI:textfield:helper-text:unmount", () => {
    Q(R, void 0), X = void 0;
  }), ne("SMUI:textfield:character-counter:mount", (W) => {
    he = W;
  }), ne("SMUI:textfield:character-counter:unmount", () => {
    he = void 0;
  }), st(() => {
    var W;
    if (Q(
      B,
      new Zp(
        {
          // getRootAdapterMethods_
          addClass: Xe,
          removeClass: De,
          hasClass: Ue,
          registerTextFieldInteractionHandler: (Z, Me) => U.on(q(), Z, Me),
          deregisterTextFieldInteractionHandler: (Z, Me) => U.off(q(), Z, Me),
          registerValidationAttributeChangeHandler: (Z) => {
            const Me = (Ot) => Ot.map((Vt) => Vt.attributeName).filter((Vt) => Vt), et = new MutationObserver((Ot) => {
              x() && Z(Me(Ot));
            }), pt = { attributes: !0 };
            return C() && et.observe(C().getElement(), pt), et;
          },
          deregisterValidationAttributeChangeHandler: (Z) => {
            Z.disconnect();
          },
          // getInputAdapterMethods_
          getNativeInput: () => {
            var Z;
            return ((Z = C()) == null ? void 0 : Z.getElement()) ?? null;
          },
          setInputAttr: (Z, Me) => {
            var et;
            (et = C()) == null || et.addAttr(Z, Me);
          },
          removeInputAttr: (Z) => {
            var Me;
            (Me = C()) == null || Me.removeAttr(Z);
          },
          isFocused: () => {
            var Z;
            return document.activeElement === ((Z = C()) == null ? void 0 : Z.getElement());
          },
          registerInputInteractionHandler: (Z, Me) => {
            var pt;
            const et = (pt = C()) == null ? void 0 : pt.getElement();
            if (et) {
              const Ot = n();
              U.on(et, Z, Me, typeof Ot == "boolean" ? { capture: Ot } : Ot);
            }
          },
          deregisterInputInteractionHandler: (Z, Me) => {
            var pt;
            const et = (pt = C()) == null ? void 0 : pt.getElement();
            et && U.off(et, Z, Me);
          },
          // getLabelAdapterMethods_
          floatLabel: (Z) => P() && P().float(Z),
          getLabelWidth: () => P() ? P().getWidth() : 0,
          hasLabel: () => !!P(),
          shakeLabel: (Z) => P() && P().shake(Z),
          setLabelRequired: (Z) => P() && P().setRequired(Z),
          // getLineRippleAdapterMethods_
          activateLineRipple: () => K() && K().activate(),
          deactivateLineRipple: () => K() && K().deactivate(),
          setLineRippleTransformOrigin: (Z) => K() && K().setRippleCenter(Z),
          // getOutlineAdapterMethods_
          closeOutline: () => H() && H().closeNotch(),
          hasOutline: () => !!H(),
          notchOutline: (Z) => H() && H().notch(Z)
        },
        {
          get helperText() {
            return X;
          },
          get characterCounter() {
            return he;
          },
          get leadingIcon() {
            return V;
          },
          get trailingIcon() {
            return se;
          }
        }
      ),
      !0
    ), _e) {
      if (C() == null)
        throw new Error("SMUI Textfield must be initialized with either a non-undefined initial value or an Input component.");
      (W = s(B)) == null || W.init();
    } else
      Ro().then(() => {
        var Z;
        if (C() == null)
          throw new Error("SMUI Textfield must be initialized with either a non-undefined initial value or an Input component.");
        (Z = s(B)) == null || Z.init();
      });
    return j(), () => {
      var Z;
      (Z = s(B)) == null || Z.destroy(), U.clear();
    };
  }), Hn(() => {
    N && N();
  });
  function Ue(W) {
    return W in G ? G[W] ?? null : q().classList.contains(W);
  }
  function Xe(W) {
    G[W] || (G[W] = !0);
  }
  function De(W) {
    (!(W in G) || G[W]) && (G[W] = !1);
  }
  function ue(W, Z) {
    ee[W] != Z && (Z === "" || Z == null ? delete ee[W] : ee[W] = Z);
  }
  function we() {
    var W;
    (W = C()) == null || W.focus();
  }
  function Pe() {
    var W;
    (W = C()) == null || W.blur();
  }
  function M() {
    if (s(B)) {
      const W = s(B).shouldFloat;
      s(B).notchOutline(W);
    }
  }
  function q() {
    return k;
  }
  var te = { focus: we, blur: Pe, layout: M, getElement: q }, Ce = gm(), Ct = Y(Ce);
  {
    var kt = (W) => {
      var Z = pm();
      ke(Z, (Ge, at, tt) => ({ class: Ge, style: at, for: void 0, ...tt }), [
        () => He({
          "mdc-text-field": !0,
          "mdc-text-field--disabled": u(),
          "mdc-text-field--textarea": h(),
          "mdc-text-field--filled": f() === "filled",
          "mdc-text-field--outlined": f() === "outlined",
          "smui-text-field--standard": f() === "standard" && !h(),
          "mdc-text-field--no-label": v() || e.label == null,
          "mdc-text-field--label-floating": s(y) || g() != null && g() !== "",
          "mdc-text-field--with-leading-icon": i(w()) ? e.leadingIcon : w(),
          "mdc-text-field--with-trailing-icon": i(A()) ? e.trailingIcon : A(),
          "mdc-text-field--with-internal-counter": h() && e.internalCounter,
          "mdc-text-field--invalid": E(),
          ...G,
          [o()]: !0
        }),
        () => Object.entries(ee).map(([Ge, at]) => `${Ge}: ${at};`).concat([c()]).join(" "),
        () => ta(F, ["input$", "label$", "ripple$", "outline$", "helperLine$"])
      ]);
      var Me = Ie(Z);
      {
        var et = (Ge) => {
          var at = fm(), tt = Y(at);
          {
            var Rt = (yt) => {
              var xt = dm();
              O(yt, xt);
            };
            le(tt, (yt) => {
              f() === "filled" && yt(Rt);
            });
          }
          var Mt = Ee(tt, 2);
          {
            var rt = (yt) => {
              {
                let xt = /* @__PURE__ */ ae(() => s(y) || g() != null && g() !== "" && (typeof g() != "number" || !isNaN(g()))), Je = /* @__PURE__ */ ae(() => lt(F, "label$"));
                Te(
                  po(yt, it(
                    {
                      get floatAbove() {
                        return s(xt);
                      },
                      get required() {
                        return d();
                      },
                      wrapped: !0
                    },
                    () => s(Je),
                    {
                      children: (ft, yn) => {
                        var sn = re(), It = Y(sn);
                        {
                          var Dt = (Zt) => {
                          }, Tt = (Zt) => {
                            var Vr = re(), In = Y(Vr);
                            {
                              var hr = (_n) => {
                                var Yn = Xt();
                                Fe(() => vt(Yn, e.label)), O(_n, Yn);
                              }, oa = (_n) => {
                                var Yn = re(), Bn = Y(Yn);
                                Ae(Bn, () => e.label), O(_n, Yn);
                              };
                              le(
                                In,
                                (_n) => {
                                  typeof e.label == "string" ? _n(hr) : _n(oa, !1);
                                },
                                !0
                              );
                            }
                            O(Zt, Vr);
                          };
                          le(It, (Zt) => {
                            e.label == null ? Zt(Dt) : Zt(Tt, !1);
                          });
                        }
                        O(ft, sn);
                      },
                      $$slots: { default: !0 }
                    }
                  )),
                  (ft) => P(ft),
                  () => P()
                );
              }
            };
            le(Mt, (yt) => {
              !v() && e.label != null && yt(rt);
            });
          }
          O(Ge, at);
        };
        le(Me, (Ge) => {
          !h() && f() !== "outlined" && Ge(et);
        });
      }
      var pt = Ee(Me, 2);
      {
        var Ot = (Ge) => {
          {
            let at = /* @__PURE__ */ ae(() => v() || e.label == null), tt = /* @__PURE__ */ ae(() => lt(F, "outline$"));
            Te(
              Yc(Ge, it(
                {
                  get noLabel() {
                    return s(at);
                  }
                },
                () => s(tt),
                {
                  children: (Rt, Mt) => {
                    var rt = re(), yt = Y(rt);
                    {
                      var xt = (Je) => {
                        {
                          let ft = /* @__PURE__ */ ae(() => s(y) || g() != null && g() !== "" && (typeof g() != "number" || !isNaN(g()))), yn = /* @__PURE__ */ ae(() => lt(F, "label$"));
                          Te(
                            po(Je, it(
                              {
                                get floatAbove() {
                                  return s(ft);
                                },
                                get required() {
                                  return d();
                                },
                                wrapped: !0
                              },
                              () => s(yn),
                              {
                                children: (sn, It) => {
                                  var Dt = re(), Tt = Y(Dt);
                                  {
                                    var Zt = (In) => {
                                    }, Vr = (In) => {
                                      var hr = re(), oa = Y(hr);
                                      {
                                        var _n = (Bn) => {
                                          var Gr = Xt();
                                          Fe(() => vt(Gr, e.label)), O(Bn, Gr);
                                        }, Yn = (Bn) => {
                                          var Gr = re(), Go = Y(Gr);
                                          Ae(Go, () => e.label), O(Bn, Gr);
                                        };
                                        le(
                                          oa,
                                          (Bn) => {
                                            typeof e.label == "string" ? Bn(_n) : Bn(Yn, !1);
                                          },
                                          !0
                                        );
                                      }
                                      O(In, hr);
                                    };
                                    le(Tt, (In) => {
                                      e.label == null ? In(Zt) : In(Vr, !1);
                                    });
                                  }
                                  O(sn, Dt);
                                },
                                $$slots: { default: !0 }
                              }
                            )),
                            (sn) => P(sn),
                            () => P()
                          );
                        }
                      };
                      le(yt, (Je) => {
                        !v() && e.label != null && Je(xt);
                      });
                    }
                    O(Rt, rt);
                  },
                  $$slots: { default: !0 }
                }
              )),
              (Rt) => H(Rt),
              () => H()
            );
          }
        };
        le(pt, (Ge) => {
          (h() || f() === "outlined") && Ge(Ot);
        });
      }
      var Vt = Ee(pt, 2);
      Si(Vt, {
        key: "SMUI:textfield:icon:leading",
        value: !0,
        children: (Ge, at) => {
          var tt = re(), Rt = Y(tt);
          Ae(Rt, () => e.leadingIcon ?? ge), O(Ge, tt);
        },
        $$slots: { default: !0 }
      });
      var fr = Ee(Vt, 2);
      Ae(fr, () => e.children ?? ge);
      var nt = Ee(fr, 2);
      {
        var St = (Ge) => {
          var at = hm(), tt = Ie(at);
          {
            let Mt = /* @__PURE__ */ ae(() => lt(F, "input$"));
            Te(
              cm(tt, it(
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
                    return s(L);
                  },
                  get "aria-controls"() {
                    return s(R);
                  },
                  get "aria-describedby"() {
                    return s(R);
                  }
                },
                () => s(Mt),
                {
                  onblur: (rt) => {
                    var yt;
                    Q(y, !1), Q(L, !0), Ke(q(), "blur", rt), (yt = e.input$onblur) == null || yt.call(e, rt);
                  },
                  onfocus: (rt) => {
                    var yt;
                    Q(y, !0), Ke(q(), "focus", rt), (yt = e.input$onfocus) == null || yt.call(e, rt);
                  },
                  get value() {
                    return g();
                  },
                  set value(rt) {
                    g(rt);
                  },
                  get dirty() {
                    return b();
                  },
                  set dirty(rt) {
                    b(rt);
                  },
                  get invalid() {
                    return E();
                  },
                  set invalid(rt) {
                    E(rt);
                  }
                }
              )),
              (rt) => C(rt),
              () => C()
            );
          }
          var Rt = Ee(tt, 2);
          Ae(Rt, () => e.internalCounter ?? ge), Fe((Mt) => mc(at, 1, Mt), [
            () => pc(He({
              "mdc-text-field__resizer": !("input$resizable" in F) || e.input$resizable
            }))
          ]), O(Ge, at);
        }, Gt = (Ge) => {
          var at = vm(), tt = Y(at);
          {
            var Rt = (xt) => {
              var Je = re(), ft = Y(Je);
              {
                var yn = (It) => {
                  am(It, {
                    children: (Dt, Tt) => {
                      var Zt = Xt();
                      Fe(() => vt(Zt, e.prefix)), O(Dt, Zt);
                    },
                    $$slots: { default: !0 }
                  });
                }, sn = (It) => {
                  var Dt = re(), Tt = Y(Dt);
                  Ae(Tt, () => e.prefix ?? ge), O(It, Dt);
                };
                le(ft, (It) => {
                  typeof e.prefix == "string" ? It(yn) : It(sn, !1);
                });
              }
              O(xt, Je);
            };
            le(tt, (xt) => {
              e.prefix != null && xt(Rt);
            });
          }
          var Mt = Ee(tt, 2);
          {
            let xt = /* @__PURE__ */ ae(() => lt(F, "input$"));
            Te(
              lm(Mt, it(
                {
                  get type() {
                    return m();
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
                    return s(L);
                  },
                  get "aria-controls"() {
                    return s(R);
                  },
                  get "aria-describedby"() {
                    return s(R);
                  }
                },
                () => v() && e.label != null && typeof e.label == "string" ? { placeholder: e.label } : {},
                () => s(xt),
                {
                  onblur: (Je) => {
                    var ft;
                    Q(y, !1), Q(L, !0), Ke(q(), "blur", Je), (ft = e.input$onblur) == null || ft.call(e, Je);
                  },
                  onfocus: (Je) => {
                    var ft;
                    Q(y, !0), Ke(q(), "focus", Je), (ft = e.input$onfocus) == null || ft.call(e, Je);
                  },
                  get value() {
                    return g();
                  },
                  set value(Je) {
                    g(Je);
                  },
                  get files() {
                    return I();
                  },
                  set files(Je) {
                    I(Je);
                  },
                  get dirty() {
                    return b();
                  },
                  set dirty(Je) {
                    b(Je);
                  },
                  get invalid() {
                    return E();
                  },
                  set invalid(Je) {
                    E(Je);
                  }
                }
              )),
              (Je) => C(Je),
              () => C()
            );
          }
          var rt = Ee(Mt, 2);
          {
            var yt = (xt) => {
              var Je = re(), ft = Y(Je);
              {
                var yn = (It) => {
                  om(It, {
                    children: (Dt, Tt) => {
                      var Zt = Xt();
                      Fe(() => vt(Zt, e.suffix)), O(Dt, Zt);
                    },
                    $$slots: { default: !0 }
                  });
                }, sn = (It) => {
                  var Dt = re(), Tt = Y(Dt);
                  Ae(Tt, () => e.suffix ?? ge), O(It, Dt);
                };
                le(ft, (It) => {
                  typeof e.suffix == "string" ? It(yn) : It(sn, !1);
                });
              }
              O(xt, Je);
            };
            le(rt, (xt) => {
              e.suffix != null && xt(yt);
            });
          }
          O(Ge, at);
        };
        le(nt, (Ge) => {
          h() && typeof g() == "string" ? Ge(St) : Ge(Gt, !1);
        });
      }
      var Fn = Ee(nt, 2);
      Si(Fn, {
        key: "SMUI:textfield:icon:leading",
        value: !1,
        children: (Ge, at) => {
          var tt = re(), Rt = Y(tt);
          Ae(Rt, () => e.trailingIcon ?? ge), O(Ge, tt);
        },
        $$slots: { default: !0 }
      });
      var mi = Ee(Fn, 2);
      {
        var Yt = (Ge) => {
          {
            let at = /* @__PURE__ */ ae(() => lt(F, "ripple$"));
            Te(Xc(Ge, it(() => s(at))), (tt) => K(tt), () => K());
          }
        };
        le(mi, (Ge) => {
          !h() && f() !== "outlined" && l() && Ge(Yt);
        });
      }
      Te(Z, (Ge) => k = Ge, () => k), Be(Z, (Ge, at) => Kt == null ? void 0 : Kt(Ge, at), () => ({
        ripple: !h() && f() === "filled",
        unbounded: !1,
        addClass: Xe,
        removeClass: De,
        addStyle: ue,
        eventTarget: s(ie),
        activeTarget: s(ie),
        initPromise: de
      })), Be(Z, (Ge, at) => z == null ? void 0 : z(Ge, at), a), O(W, Z);
    }, Rn = (W) => {
      var Z = mm();
      ke(Z, (nt, St, Gt) => ({ class: nt, style: St, ...Gt }), [
        () => He({
          "mdc-text-field": !0,
          "mdc-text-field--disabled": u(),
          "mdc-text-field--textarea": h(),
          "mdc-text-field--filled": f() === "filled",
          "mdc-text-field--outlined": f() === "outlined",
          "smui-text-field--standard": f() === "standard" && !h(),
          "mdc-text-field--no-label": v() || e.label == null,
          "mdc-text-field--with-leading-icon": e.leadingIcon,
          "mdc-text-field--with-trailing-icon": e.trailingIcon,
          "mdc-text-field--invalid": E(),
          ...G,
          [o()]: !0
        }),
        () => Object.entries(ee).map(([nt, St]) => `${nt}: ${St};`).concat([c()]).join(" "),
        () => ta(F, ["input$", "label$", "ripple$", "outline$", "helperLine$"])
      ]);
      var Me = Ie(Z);
      {
        var et = (nt) => {
          var St = re(), Gt = Y(St);
          Ae(Gt, () => e.label ?? ge), O(nt, St);
        };
        le(Me, (nt) => {
          typeof e.label != "string" && nt(et);
        });
      }
      var pt = Ee(Me, 2);
      Si(pt, {
        key: "SMUI:textfield:icon:leading",
        value: !0,
        children: (nt, St) => {
          var Gt = re(), Fn = Y(Gt);
          Ae(Fn, () => e.leadingIcon ?? ge), O(nt, Gt);
        },
        $$slots: { default: !0 }
      });
      var Ot = Ee(pt, 2);
      Ae(Ot, () => e.children ?? ge);
      var Vt = Ee(Ot, 2);
      Si(Vt, {
        key: "SMUI:textfield:icon:leading",
        value: !1,
        children: (nt, St) => {
          var Gt = re(), Fn = Y(Gt);
          Ae(Fn, () => e.trailingIcon ?? ge), O(nt, Gt);
        },
        $$slots: { default: !0 }
      });
      var fr = Ee(Vt, 2);
      Ae(fr, () => e.line ?? ge), Te(Z, (nt) => k = nt, () => k), Be(Z, (nt, St) => Kt == null ? void 0 : Kt(nt, St), () => ({
        ripple: l(),
        unbounded: !1,
        addClass: Xe,
        removeClass: De,
        addStyle: ue
      })), Be(Z, (nt, St) => z == null ? void 0 : z(nt, St), a), O(W, Z);
    };
    le(Ct, (W) => {
      _e ? W(kt) : W(Rn, !1);
    });
  }
  var ce = Ee(Ct, 2);
  {
    var me = (W) => {
      {
        let Z = /* @__PURE__ */ ae(() => lt(F, "helperLine$"));
        im(W, it(() => s(Z), {
          children: (Me, et) => {
            var pt = re(), Ot = Y(pt);
            Ae(Ot, () => e.helper ?? ge), O(Me, pt);
          },
          $$slots: { default: !0 }
        }));
      }
    };
    le(ce, (W) => {
      e.helper && W(me);
    });
  }
  return O(t, Ce), Oe(te);
}
var bm = /* @__PURE__ */ ve("<i><!></i>");
function ym(t, e) {
  Le(e, !0);
  const n = () => Nt(m, "$leadingStore", r), [r, i] = Ln();
  let a = p(e, "use", 19, () => []), o = p(e, "class", 3, ""), c = p(e, "tabindex", 19, () => e.role === "button" ? 0 : -1), l = p(e, "disabled", 3, !1), u = /* @__PURE__ */ ze(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "role",
    "tabindex",
    "disabled",
    "children"
  ]), d, h = /* @__PURE__ */ be(void 0), f = new ja(), v = ye({});
  const m = oe("SMUI:textfield:icon:leading"), g = n();
  let I = /* @__PURE__ */ be(void 0);
  const E = /* @__PURE__ */ ae(() => ({ role: e.role, tabindex: c() })), T = oe("SMUI:textfield:leading-icon:mount"), S = oe("SMUI:textfield:leading-icon:unmount"), b = oe("SMUI:textfield:trailing-icon:mount"), _ = oe("SMUI:textfield:trailing-icon:unmount");
  st(() => (Q(
    h,
    new Jp({
      getAttr: x,
      setAttr: w,
      removeAttr: A,
      setContent: (B) => {
        Q(I, B, !0);
      },
      registerInteractionHandler: (B, U) => f.on(C(), B, U),
      deregisterInteractionHandler: (B, U) => f.off(C(), B, U),
      notifyIconAction: () => Ke(C(), "SMUITextFieldIcon")
    }),
    !0
  ), g ? T && T(s(h)) : b && b(s(h)), s(h).init(), () => {
    var B;
    s(h) && (g ? S && S(s(h)) : _ && _(s(h))), (B = s(h)) == null || B.destroy(), f.clear();
  }));
  function x(B) {
    return B in v ? v[B] ?? null : C().getAttribute(B);
  }
  function w(B, U) {
    v[B] !== U && (v[B] = U);
  }
  function A(B) {
    (!(B in v) || v[B] != null) && (v[B] = void 0);
  }
  function C() {
    return d;
  }
  var P = { getElement: C }, K = bm();
  ke(
    K,
    (B) => ({
      class: B,
      "aria-hidden": c() === -1 ? "true" : "false",
      "aria-disabled": e.role === "button" ? l() ? "true" : "false" : void 0,
      ...s(E),
      ...v,
      ...u
    }),
    [
      () => He({
        "mdc-text-field__icon": !0,
        "mdc-text-field__icon--leading": g,
        "mdc-text-field__icon--trailing": !g,
        [o()]: !0
      })
    ]
  );
  var H = Ie(K);
  {
    var F = (B) => {
      var U = re(), G = Y(U);
      Ae(G, () => e.children ?? ge), O(B, U);
    }, _e = (B) => {
      var U = Xt();
      Fe(() => vt(U, s(I))), O(B, U);
    };
    le(H, (B) => {
      s(I) == null ? B(F) : B(_e, !1);
    });
  }
  Te(K, (B) => d = B, () => d), Be(K, (B, U) => z == null ? void 0 : z(B, U), a), O(t, K);
  var k = Oe(P);
  return i(), k;
}
function Im(t, e) {
  Le(e, !0);
  let n = p(e, "placeholder", 3, ""), r = p(e, "label", 3, ""), i = p(e, "icon", 3, ""), a = p(e, "value", 15, ""), o = p(e, "variant", 3, "standard"), c = p(e, "styles", 3, ""), l = p(e, "required", 3, !1);
  var u = re(), d = Y(u);
  {
    var h = (v) => {
      {
        const m = (I) => {
          ym(I, {
            class: "material-icons",
            children: (E, T) => {
              var S = Xt();
              Fe(() => vt(S, i())), O(E, S);
            },
            $$slots: { default: !0 }
          });
        };
        let g = /* @__PURE__ */ ae(() => `width: 100%; ${c()}`);
        ru(v, {
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
            return s(g);
          },
          get variant() {
            return o();
          },
          get value() {
            return a();
          },
          set value(I) {
            a(I);
          },
          leadingIcon: m,
          $$slots: { leadingIcon: !0 }
        });
      }
    }, f = (v) => {
      ru(v, {
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
        get value() {
          return a();
        },
        set value(m) {
          a(m);
        }
      });
    };
    le(d, (v) => {
      i() ? v(h) : v(f, !1);
    });
  }
  O(t, u), Oe();
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
var _m = {
  ANCHOR: "mdc-menu-surface--anchor",
  ANIMATING_CLOSED: "mdc-menu-surface--animating-closed",
  ANIMATING_OPEN: "mdc-menu-surface--animating-open",
  FIXED: "mdc-menu-surface--fixed",
  IS_OPEN_BELOW: "mdc-menu-surface--is-open-below",
  OPEN: "mdc-menu-surface--open",
  ROOT: "mdc-menu-surface"
}, Em = {
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
}, pa = {
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
}, At;
(function(t) {
  t[t.BOTTOM = 1] = "BOTTOM", t[t.CENTER = 2] = "CENTER", t[t.RIGHT = 4] = "RIGHT", t[t.FLIP_RTL = 8] = "FLIP_RTL";
})(At || (At = {}));
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
var pr, $n, We = {
  LIST_ITEM_ACTIVATED_CLASS: "mdc-list-item--activated",
  LIST_ITEM_CLASS: "mdc-list-item",
  LIST_ITEM_DISABLED_CLASS: "mdc-list-item--disabled",
  LIST_ITEM_SELECTED_CLASS: "mdc-list-item--selected",
  LIST_ITEM_TEXT_CLASS: "mdc-list-item__text",
  LIST_ITEM_PRIMARY_TEXT_CLASS: "mdc-list-item__primary-text",
  ROOT: "mdc-list"
};
pr = {}, pr["" + We.LIST_ITEM_ACTIVATED_CLASS] = "mdc-list-item--activated", pr["" + We.LIST_ITEM_CLASS] = "mdc-list-item", pr["" + We.LIST_ITEM_DISABLED_CLASS] = "mdc-list-item--disabled", pr["" + We.LIST_ITEM_SELECTED_CLASS] = "mdc-list-item--selected", pr["" + We.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-list-item__primary-text", pr["" + We.ROOT] = "mdc-list";
var Ei = ($n = {}, $n["" + We.LIST_ITEM_ACTIVATED_CLASS] = "mdc-deprecated-list-item--activated", $n["" + We.LIST_ITEM_CLASS] = "mdc-deprecated-list-item", $n["" + We.LIST_ITEM_DISABLED_CLASS] = "mdc-deprecated-list-item--disabled", $n["" + We.LIST_ITEM_SELECTED_CLASS] = "mdc-deprecated-list-item--selected", $n["" + We.LIST_ITEM_TEXT_CLASS] = "mdc-deprecated-list-item__text", $n["" + We.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-deprecated-list-item__primary-text", $n["" + We.ROOT] = "mdc-deprecated-list", $n), mr = {
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
    .` + We.LIST_ITEM_CLASS + ` button:not(:disabled),
    .` + We.LIST_ITEM_CLASS + ` a,
    .` + Ei[We.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + Ei[We.LIST_ITEM_CLASS] + ` a
  `,
  DEPRECATED_SELECTOR: ".mdc-deprecated-list",
  FOCUSABLE_CHILD_ELEMENTS: `
    .` + We.LIST_ITEM_CLASS + ` button:not(:disabled),
    .` + We.LIST_ITEM_CLASS + ` a,
    .` + We.LIST_ITEM_CLASS + ` input[type="radio"]:not(:disabled),
    .` + We.LIST_ITEM_CLASS + ` input[type="checkbox"]:not(:disabled),
    .` + Ei[We.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + Ei[We.LIST_ITEM_CLASS] + ` a,
    .` + Ei[We.LIST_ITEM_CLASS] + ` input[type="radio"]:not(:disabled),
    .` + Ei[We.LIST_ITEM_CLASS] + ` input[type="checkbox"]:not(:disabled)
  `,
  RADIO_SELECTOR: 'input[type="radio"]',
  SELECTED_ITEM_SELECTOR: '[aria-selected="true"], [aria-current="true"]'
}, _t = {
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
var Am = ["input", "button", "textarea", "select"], En = function(t) {
  var e = t.target;
  if (e) {
    var n = ("" + e.tagName).toLowerCase();
    Am.indexOf(n) === -1 && t.preventDefault();
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
function Cm() {
  var t = {
    bufferClearTimeout: 0,
    currentFirstChar: "",
    sortedIndexCursor: 0,
    typeaheadBuffer: ""
  };
  return t;
}
function Sm(t, e) {
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
function Ls(t, e) {
  var n = t.nextChar, r = t.focusItemAtIndex, i = t.sortedIndexByFirstChar, a = t.focusedItemIndex, o = t.skipFocus, c = t.isItemAtIndexDisabled;
  clearTimeout(e.bufferClearTimeout), e.bufferClearTimeout = setTimeout(function() {
    Qc(e);
  }, _t.TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS), e.typeaheadBuffer = e.typeaheadBuffer + n;
  var l;
  return e.typeaheadBuffer.length === 1 ? l = xm(i, a, c, e) : l = Tm(i, c, e), l !== -1 && !o && r(l), l;
}
function xm(t, e, n, r) {
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
function Tm(t, e, n) {
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
function Zc(t) {
  return t.typeaheadBuffer.length > 0;
}
function Qc(t) {
  t.typeaheadBuffer = "";
}
function iu(t, e) {
  var n = t.event, r = t.isTargetListItem, i = t.focusedItemIndex, a = t.focusItemAtIndex, o = t.sortedIndexByFirstChar, c = t.isItemAtIndexDisabled, l = gt(n) === "ArrowLeft", u = gt(n) === "ArrowUp", d = gt(n) === "ArrowRight", h = gt(n) === "ArrowDown", f = gt(n) === "Home", v = gt(n) === "End", m = gt(n) === "Enter", g = gt(n) === "Spacebar";
  if (n.altKey || n.ctrlKey || n.metaKey || l || u || d || h || f || v || m)
    return -1;
  var I = !g && n.key.length === 1;
  if (I) {
    En(n);
    var E = {
      focusItemAtIndex: a,
      focusedItemIndex: i,
      nextChar: n.key.toLowerCase(),
      sortedIndexByFirstChar: o,
      skipFocus: !1,
      isItemAtIndexDisabled: c
    };
    return Ls(E, e);
  }
  if (!g)
    return -1;
  r && En(n);
  var T = r && Zc(e);
  if (T) {
    var E = {
      focusItemAtIndex: a,
      focusedItemIndex: i,
      nextChar: " ",
      sortedIndexByFirstChar: o,
      skipFocus: !1,
      isItemAtIndexDisabled: c
    };
    return Ls(E, e);
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
function wm(t) {
  return t instanceof Array;
}
var Lm = ["Alt", "Control", "Meta", "Shift"];
function au(t) {
  var e = new Set(t ? Lm.filter(function(n) {
    return t.getModifierState(n);
  }) : []);
  return function(n) {
    return n.every(function(r) {
      return e.has(r);
    }) && n.length === e.size;
  };
}
var Om = (
  /** @class */
  function(t) {
    $e(e, t);
    function e(n) {
      var r = t.call(this, fe(fe({}, e.defaultAdapter), n)) || this;
      return r.wrapFocus = !1, r.isVertical = !0, r.isSingleSelectionList = !1, r.areDisabledItemsFocusable = !0, r.selectedIndex = _t.UNSET_INDEX, r.focusedItemIndex = _t.UNSET_INDEX, r.useActivatedClass = !1, r.useSelectedAttr = !1, r.ariaCurrentAttrValue = null, r.isCheckboxList = !1, r.isRadioList = !1, r.lastSelectedIndex = null, r.hasTypeahead = !1, r.typeaheadState = Cm(), r.sortedIndexByFirstChar = /* @__PURE__ */ new Map(), r;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return mr;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return We;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return _t;
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
      if (n !== _t.UNSET_INDEX) {
        var r = this.adapter.listItemAtIndexHasClass(n, We.LIST_ITEM_ACTIVATED_CLASS);
        r && this.setUseActivatedClass(!0), this.isSingleSelectionList = !0, this.selectedIndex = n;
      }
    }, e.prototype.getSelectedIndexFromDOM = function() {
      for (var n = _t.UNSET_INDEX, r = this.adapter.getListItemCount(), i = 0; i < r; i++) {
        var a = this.adapter.listItemAtIndexHasClass(i, We.LIST_ITEM_SELECTED_CLASS), o = this.adapter.listItemAtIndexHasClass(i, We.LIST_ITEM_ACTIVATED_CLASS);
        if (a || o) {
          n = i;
          break;
        }
      }
      return n;
    }, e.prototype.setHasTypeahead = function(n) {
      this.hasTypeahead = n, n && (this.sortedIndexByFirstChar = this.typeaheadInitSortedIndex());
    }, e.prototype.isTypeaheadInProgress = function() {
      return this.hasTypeahead && Zc(this.typeaheadState);
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
      return this.adapter.listItemAtIndexHasClass(n, We.LIST_ITEM_DISABLED_CLASS);
    }, e.prototype.handleKeydown = function(n, r, i) {
      var a = this, o, c = gt(n) === "ArrowLeft", l = gt(n) === "ArrowUp", u = gt(n) === "ArrowRight", d = gt(n) === "ArrowDown", h = gt(n) === "Home", f = gt(n) === "End", v = gt(n) === "Enter", m = gt(n) === "Spacebar", g = this.isVertical && d || !this.isVertical && u, I = this.isVertical && l || !this.isVertical && c, E = n.key === "A" || n.key === "a", T = au(n);
      if (this.adapter.isRootFocused()) {
        if ((I || f) && T([]))
          n.preventDefault(), this.focusLastElement();
        else if ((g || h) && T([]))
          n.preventDefault(), this.focusFirstElement();
        else if (I && T(["Shift"]) && this.isCheckboxList) {
          n.preventDefault();
          var S = this.focusLastElement();
          S !== -1 && this.setSelectedIndexOnAction(S, !1);
        } else if (g && T(["Shift"]) && this.isCheckboxList) {
          n.preventDefault();
          var S = this.focusFirstElement();
          S !== -1 && this.setSelectedIndexOnAction(S, !1);
        }
        if (this.hasTypeahead) {
          var b = {
            event: n,
            focusItemAtIndex: function(w) {
              a.focusItemAtIndex(w);
            },
            focusedItemIndex: -1,
            isTargetListItem: r,
            sortedIndexByFirstChar: this.sortedIndexByFirstChar,
            isItemAtIndexDisabled: function(w) {
              return a.isIndexDisabled(w);
            }
          };
          iu(b, this.typeaheadState);
        }
        return;
      }
      var _ = this.adapter.getFocusedElementIndex();
      if (!(_ === -1 && (_ = i, _ < 0))) {
        if (g && T([]))
          En(n), this.focusNextElement(_);
        else if (I && T([]))
          En(n), this.focusPrevElement(_);
        else if (g && T(["Shift"]) && this.isCheckboxList) {
          En(n);
          var S = this.focusNextElement(_);
          S !== -1 && this.setSelectedIndexOnAction(S, !1);
        } else if (I && T(["Shift"]) && this.isCheckboxList) {
          En(n);
          var S = this.focusPrevElement(_);
          S !== -1 && this.setSelectedIndexOnAction(S, !1);
        } else if (h && T([]))
          En(n), this.focusFirstElement();
        else if (f && T([]))
          En(n), this.focusLastElement();
        else if (h && T(["Control", "Shift"]) && this.isCheckboxList) {
          if (En(n), this.isIndexDisabled(_))
            return;
          this.focusFirstElement(), this.toggleCheckboxRange(0, _, _);
        } else if (f && T(["Control", "Shift"]) && this.isCheckboxList) {
          if (En(n), this.isIndexDisabled(_))
            return;
          this.focusLastElement(), this.toggleCheckboxRange(_, this.adapter.getListItemCount() - 1, _);
        } else if (E && T(["Control"]) && this.isCheckboxList)
          n.preventDefault(), this.checkboxListToggleAll(this.selectedIndex === _t.UNSET_INDEX ? [] : this.selectedIndex, !0);
        else if ((v || m) && T([])) {
          if (r) {
            var x = n.target;
            if (x && x.tagName === "A" && v || (En(n), this.isIndexDisabled(_)))
              return;
            this.isTypeaheadInProgress() || (this.isSelectableList() && this.setSelectedIndexOnAction(_, !1), this.adapter.notifyAction(_));
          }
        } else if ((v || m) && T(["Shift"]) && this.isCheckboxList) {
          var x = n.target;
          if (x && x.tagName === "A" && v || (En(n), this.isIndexDisabled(_)))
            return;
          this.isTypeaheadInProgress() || (this.toggleCheckboxRange((o = this.lastSelectedIndex) !== null && o !== void 0 ? o : _, _, _), this.adapter.notifyAction(_));
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
          iu(b, this.typeaheadState);
        }
      }
    }, e.prototype.handleClick = function(n, r, i) {
      var a, o = au(i);
      n !== _t.UNSET_INDEX && (this.isIndexDisabled(n) || (o([]) ? (this.isSelectableList() && this.setSelectedIndexOnAction(n, r), this.adapter.notifyAction(n)) : this.isCheckboxList && o(["Shift"]) && (this.toggleCheckboxRange((a = this.lastSelectedIndex) !== null && a !== void 0 ? a : n, n, n), this.adapter.notifyAction(n))));
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
      this.isIndexValid(n, !1) && (r ? (this.adapter.removeClassForElementIndex(n, We.LIST_ITEM_DISABLED_CLASS), this.adapter.setAttributeForElementIndex(n, mr.ARIA_DISABLED, "false")) : (this.adapter.addClassForElementIndex(n, We.LIST_ITEM_DISABLED_CLASS), this.adapter.setAttributeForElementIndex(n, mr.ARIA_DISABLED, "true")));
    }, e.prototype.setSingleSelectionAtIndex = function(n, r) {
      if (r === void 0 && (r = {}), !(this.selectedIndex === n && !r.forceUpdate)) {
        var i = We.LIST_ITEM_SELECTED_CLASS;
        this.useActivatedClass && (i = We.LIST_ITEM_ACTIVATED_CLASS), this.selectedIndex !== _t.UNSET_INDEX && this.adapter.removeClassForElementIndex(this.selectedIndex, i), this.setAriaForSingleSelectionAtIndex(n), this.setTabindexAtIndex(n), n !== _t.UNSET_INDEX && this.adapter.addClassForElementIndex(n, i), this.selectedIndex = n, r.isUserInteraction && !r.forceUpdate && this.adapter.notifySelectionChange([n]);
      }
    }, e.prototype.setAriaForSingleSelectionAtIndex = function(n) {
      this.selectedIndex === _t.UNSET_INDEX && (this.ariaCurrentAttrValue = this.adapter.getAttributeForElementIndex(n, mr.ARIA_CURRENT));
      var r = this.ariaCurrentAttrValue !== null, i = r ? mr.ARIA_CURRENT : mr.ARIA_SELECTED;
      if (this.selectedIndex !== _t.UNSET_INDEX && this.adapter.setAttributeForElementIndex(this.selectedIndex, i, "false"), n !== _t.UNSET_INDEX) {
        var a = r ? this.ariaCurrentAttrValue : "true";
        this.adapter.setAttributeForElementIndex(n, i, a);
      }
    }, e.prototype.getSelectionAttribute = function() {
      return this.useSelectedAttr ? mr.ARIA_SELECTED : mr.ARIA_CHECKED;
    }, e.prototype.setRadioAtIndex = function(n, r) {
      r === void 0 && (r = {});
      var i = this.getSelectionAttribute();
      this.adapter.setCheckedCheckboxOrRadioAtIndex(n, !0), !(this.selectedIndex === n && !r.forceUpdate) && (this.selectedIndex !== _t.UNSET_INDEX && this.adapter.setAttributeForElementIndex(this.selectedIndex, i, "false"), this.adapter.setAttributeForElementIndex(n, i, "true"), this.selectedIndex = n, r.isUserInteraction && !r.forceUpdate && this.adapter.notifySelectionChange([n]));
    }, e.prototype.setCheckboxAtIndex = function(n, r) {
      r === void 0 && (r = {});
      for (var i = this.selectedIndex, a = r.isUserInteraction ? new Set(i === _t.UNSET_INDEX ? [] : i) : null, o = this.getSelectionAttribute(), c = [], l = 0; l < this.adapter.getListItemCount(); l++) {
        var u = a == null ? void 0 : a.has(l), d = n.indexOf(l) >= 0;
        d !== u && c.push(l), this.adapter.setCheckedCheckboxOrRadioAtIndex(l, d), this.adapter.setAttributeForElementIndex(l, o, d ? "true" : "false");
      }
      this.selectedIndex = n, r.isUserInteraction && c.length && this.adapter.notifySelectionChange(c);
    }, e.prototype.toggleCheckboxRange = function(n, r, i) {
      this.lastSelectedIndex = i;
      for (var a = new Set(this.selectedIndex === _t.UNSET_INDEX ? [] : this.selectedIndex), o = !(a != null && a.has(i)), c = Or([n, r].sort(), 2), l = c[0], u = c[1], d = this.getSelectionAttribute(), h = [], f = l; f <= u; f++)
        if (!this.isIndexDisabled(f)) {
          var v = a.has(f);
          o !== v && (h.push(f), this.adapter.setCheckedCheckboxOrRadioAtIndex(f, o), this.adapter.setAttributeForElementIndex(f, d, "" + o), o ? a.add(f) : a.delete(f));
        }
      h.length && (this.selectedIndex = zn([], Or(a)), this.adapter.notifySelectionChange(h));
    }, e.prototype.setTabindexAtIndex = function(n) {
      this.focusedItemIndex === _t.UNSET_INDEX && n !== 0 ? this.adapter.setAttributeForElementIndex(0, "tabindex", "-1") : this.focusedItemIndex >= 0 && this.focusedItemIndex !== n && this.adapter.setAttributeForElementIndex(this.focusedItemIndex, "tabindex", "-1"), !(this.selectedIndex instanceof Array) && this.selectedIndex !== n && this.adapter.setAttributeForElementIndex(this.selectedIndex, "tabindex", "-1"), n !== _t.UNSET_INDEX && this.adapter.setAttributeForElementIndex(n, "tabindex", "0");
    }, e.prototype.isSelectableList = function() {
      return this.isSingleSelectionList || this.isCheckboxList || this.isRadioList;
    }, e.prototype.setTabindexToFirstSelectedOrFocusedItem = function() {
      var n = this.getFirstSelectedOrFocusedItemIndex();
      this.setTabindexAtIndex(n);
    }, e.prototype.getFirstSelectedOrFocusedItemIndex = function() {
      return this.isSelectableList() ? typeof this.selectedIndex == "number" && this.selectedIndex !== _t.UNSET_INDEX ? this.selectedIndex : wm(this.selectedIndex) && this.selectedIndex.length > 0 ? this.selectedIndex.reduce(function(n, r) {
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
        return this.isIndexInRange(n) || this.isSingleSelectionList && n === _t.UNSET_INDEX;
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
      var c = this.selectedIndex === _t.UNSET_INDEX ? [] : this.selectedIndex.slice();
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
      return Ls(o, this.typeaheadState);
    }, e.prototype.typeaheadInitSortedIndex = function() {
      return Sm(this.adapter.getListItemCount(), this.adapter.getPrimaryTextAtIndex);
    }, e.prototype.clearTypeaheadBuffer = function() {
      Qc(this.typeaheadState);
    }, e;
  }(Ut)
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
var Jc = (
  /** @class */
  function(t) {
    $e(e, t);
    function e(n) {
      var r = t.call(this, fe(fe({}, e.defaultAdapter), n)) || this;
      return r.isSurfaceOpen = !1, r.isQuickOpen = !1, r.isHoistedElement = !1, r.isFixedPosition = !1, r.isHorizontallyCenteredOnViewport = !1, r.maxHeight = 0, r.openBottomBias = 0, r.openAnimationEndTimerId = 0, r.closeAnimationEndTimerId = 0, r.animationRequestId = 0, r.anchorCorner = ai.TOP_START, r.originCorner = ai.TOP_START, r.anchorMargin = { top: 0, right: 0, bottom: 0, left: 0 }, r.position = { x: 0, y: 0 }, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return _m;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Em;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return pa;
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
      this.originCorner = this.originCorner ^ At.RIGHT;
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
        }, pa.TRANSITION_OPEN_DURATION);
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
          }, pa.TRANSITION_CLOSE_DURATION);
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
      var r = this.getoriginCorner(), i = this.getMenuSurfaceMaxHeight(r), a = this.hasBit(r, At.BOTTOM) ? "bottom" : "top", o = this.hasBit(r, At.RIGHT) ? "right" : "left", c = this.getHorizontalOriginOffset(r), l = this.getVerticalOriginOffset(r), u = this.measurements, d = u.anchorSize, h = u.surfaceSize, f = (n = {}, n[o] = c, n[a] = l, n);
      d.width / h.width > pa.ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO && (o = "center"), (this.isHoistedElement || this.isFixedPosition) && this.adjustPositionForHoistedElement(f), this.adapter.setTransformOrigin(o + " " + a), this.adapter.setPosition(f), this.adapter.setMaxHeight(i ? i + "px" : ""), this.hasBit(r, At.BOTTOM) || this.adapter.addClass(e.cssClasses.IS_OPEN_BELOW);
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
      var n = this.originCorner, r = this.measurements, i = r.viewportDistance, a = r.anchorSize, o = r.surfaceSize, c = e.numbers.MARGIN_TO_EDGE, l = this.hasBit(this.anchorCorner, At.BOTTOM), u, d;
      l ? (u = i.top - c + this.anchorMargin.bottom, d = i.bottom - c - this.anchorMargin.bottom) : (u = i.top - c + this.anchorMargin.top, d = i.bottom - c + a.height - this.anchorMargin.top);
      var h = d - o.height > 0;
      !h && u > d + this.openBottomBias && (n = this.setBit(n, At.BOTTOM));
      var f = this.adapter.isRtl(), v = this.hasBit(this.anchorCorner, At.FLIP_RTL), m = this.hasBit(this.anchorCorner, At.RIGHT) || this.hasBit(n, At.RIGHT), g = !1;
      f && v ? g = !m : g = m;
      var I, E;
      g ? (I = i.left + a.width + this.anchorMargin.right, E = i.right - this.anchorMargin.right) : (I = i.left + this.anchorMargin.left, E = i.right + a.width - this.anchorMargin.left);
      var T = I - o.width > 0, S = E - o.width > 0, b = this.hasBit(n, At.FLIP_RTL) && this.hasBit(n, At.RIGHT);
      return S && b && f || !T && b ? n = this.unsetBit(n, At.RIGHT) : (T && g && f || T && !g && m || !S && I >= E) && (n = this.setBit(n, At.RIGHT)), n;
    }, e.prototype.getMenuSurfaceMaxHeight = function(n) {
      if (this.maxHeight > 0)
        return this.maxHeight;
      var r = this.measurements.viewportDistance, i = 0, a = this.hasBit(n, At.BOTTOM), o = this.hasBit(this.anchorCorner, At.BOTTOM), c = e.numbers.MARGIN_TO_EDGE;
      return a ? (i = r.top + this.anchorMargin.top - c, o || (i += this.measurements.anchorSize.height)) : (i = r.bottom - this.anchorMargin.bottom + this.measurements.anchorSize.height - c, o && (i -= this.measurements.anchorSize.height)), i;
    }, e.prototype.getHorizontalOriginOffset = function(n) {
      var r = this.measurements.anchorSize, i = this.hasBit(n, At.RIGHT), a = this.hasBit(this.anchorCorner, At.RIGHT);
      if (i) {
        var o = a ? r.width - this.anchorMargin.left : this.anchorMargin.right;
        return this.isHoistedElement || this.isFixedPosition ? o - (this.measurements.viewportSize.width - this.measurements.bodySize.width) : o;
      }
      return a ? r.width - this.anchorMargin.right : this.anchorMargin.left;
    }, e.prototype.getVerticalOriginOffset = function(n) {
      var r = this.measurements.anchorSize, i = this.hasBit(n, At.BOTTOM), a = this.hasBit(this.anchorCorner, At.BOTTOM), o = 0;
      return i ? o = a ? r.height - this.anchorMargin.top : -this.anchorMargin.bottom : o = a ? r.height + this.anchorMargin.bottom : this.anchorMargin.top, o;
    }, e.prototype.adjustPositionForHoistedElement = function(n) {
      var r, i, a = this.measurements, o = a.windowScroll, c = a.viewportDistance, l = a.surfaceSize, u = a.viewportSize, d = Object.keys(n);
      try {
        for (var h = Lt(d), f = h.next(); !f.done; f = h.next()) {
          var v = f.value, m = n[v] || 0;
          if (this.isHorizontallyCenteredOnViewport && (v === "left" || v === "right")) {
            n[v] = (u.width - l.width) / 2;
            continue;
          }
          m += c[v], this.isFixedPosition || (v === "top" ? m += o.y : v === "bottom" ? m -= o.y : v === "left" ? m += o.x : m -= o.x), n[v] = m;
        }
      } catch (g) {
        r = { error: g };
      } finally {
        try {
          f && !f.done && (i = h.return) && i.call(h);
        } finally {
          if (r) throw r.error;
        }
      }
    }, e.prototype.maybeRestoreFocus = function() {
      var n = this, r = this.adapter.isFocused(), i = this.adapter.getOwnerDocument ? this.adapter.getOwnerDocument() : document, a = i.activeElement && this.adapter.isElementInContainer(i.activeElement);
      (r || a) && setTimeout(function() {
        n.adapter.restoreFocus();
      }, pa.TOUCH_EVENT_WAIT_MS);
    }, e.prototype.hasBit = function(n, r) {
      return !!(n & r);
    }, e.prototype.setBit = function(n, r) {
      return n | r;
    }, e.prototype.unsetBit = function(n, r) {
      return n ^ r;
    }, e.prototype.isFinite = function(n) {
      return typeof n == "number" && isFinite(n);
    }, e;
  }(Ut)
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
var ou = {
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
function Rm(t) {
  return !!t.document && typeof t.document.createElement == "function";
}
function Mm(t, e) {
  if (Rm(t) && e in ou) {
    var n = t.document.createElement("div"), r = ou[e], i = r.standard, a = r.prefixed, o = i in n.style;
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
var Ui = {
  MENU_SELECTED_LIST_ITEM: "mdc-menu-item--selected",
  MENU_SELECTION_GROUP: "mdc-menu__selection-group",
  ROOT: "mdc-menu"
}, Ai = {
  ARIA_CHECKED_ATTR: "aria-checked",
  ARIA_DISABLED_ATTR: "aria-disabled",
  CHECKBOX_SELECTOR: 'input[type="checkbox"]',
  LIST_SELECTOR: ".mdc-list,.mdc-deprecated-list",
  SELECTED_EVENT: "MDCMenu:selected",
  SKIP_RESTORE_FOCUS: "data-menu-item-skip-restore-focus"
}, Dm = {
  FOCUS_ROOT_INDEX: -1
}, xi;
(function(t) {
  t[t.NONE = 0] = "NONE", t[t.LIST_ROOT = 1] = "LIST_ROOT", t[t.FIRST_ITEM = 2] = "FIRST_ITEM", t[t.LAST_ITEM = 3] = "LAST_ITEM";
})(xi || (xi = {}));
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
var Pm = (
  /** @class */
  function(t) {
    $e(e, t);
    function e(n) {
      var r = t.call(this, fe(fe({}, e.defaultAdapter), n)) || this;
      return r.closeAnimationEndTimerId = 0, r.defaultFocusState = xi.LIST_ROOT, r.selectedIndex = -1, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Ui;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Ai;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return Dm;
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
        var a = this.adapter.getAttributeFromElementAtIndex(i, Ai.SKIP_RESTORE_FOCUS) === "true";
        this.adapter.closeSurface(a), this.closeAnimationEndTimerId = setTimeout(function() {
          var o = r.adapter.getElementIndex(n);
          o >= 0 && r.adapter.isSelectableItemAtIndex(o) && r.setSelectedIndex(o);
        }, Jc.numbers.TRANSITION_CLOSE_DURATION);
      }
    }, e.prototype.handleMenuSurfaceOpened = function() {
      switch (this.defaultFocusState) {
        case xi.FIRST_ITEM:
          this.adapter.focusItemAtIndex(0);
          break;
        case xi.LAST_ITEM:
          this.adapter.focusItemAtIndex(this.adapter.getMenuItemCount() - 1);
          break;
        case xi.NONE:
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
      r >= 0 && (this.adapter.removeAttributeFromElementAtIndex(r, Ai.ARIA_CHECKED_ATTR), this.adapter.removeClassFromElementAtIndex(r, Ui.MENU_SELECTED_LIST_ITEM)), this.adapter.addClassToElementAtIndex(n, Ui.MENU_SELECTED_LIST_ITEM), this.adapter.addAttributeToElementAtIndex(n, Ai.ARIA_CHECKED_ATTR, "true"), this.selectedIndex = n;
    }, e.prototype.setEnabled = function(n, r) {
      this.validatedIndex(n), r ? (this.adapter.removeClassFromElementAtIndex(n, We.LIST_ITEM_DISABLED_CLASS), this.adapter.addAttributeToElementAtIndex(n, Ai.ARIA_DISABLED_ATTR, "false")) : (this.adapter.addClassToElementAtIndex(n, We.LIST_ITEM_DISABLED_CLASS), this.adapter.addAttributeToElementAtIndex(n, Ai.ARIA_DISABLED_ATTR, "true"));
    }, e.prototype.validatedIndex = function(n) {
      var r = this.adapter.getMenuItemCount(), i = n >= 0 && n < r;
      if (!i)
        throw new Error("MDCMenuFoundation: No list item at specified index.");
    }, e;
  }(Ut)
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
var mt = {
  ACTIVATED: "mdc-select--activated",
  DISABLED: "mdc-select--disabled",
  FOCUSED: "mdc-select--focused",
  INVALID: "mdc-select--invalid",
  MENU_INVALID: "mdc-select__menu--invalid",
  OUTLINED: "mdc-select--outlined",
  REQUIRED: "mdc-select--required",
  ROOT: "mdc-select",
  WITH_LEADING_ICON: "mdc-select--with-leading-icon"
}, rs = {
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
}, zr = {
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
var Nm = (
  /** @class */
  function(t) {
    $e(e, t);
    function e(n, r) {
      r === void 0 && (r = {});
      var i = t.call(this, fe(fe({}, e.defaultAdapter), n)) || this;
      return i.disabled = !1, i.isMenuOpen = !1, i.useDefaultValidation = !0, i.customValidity = !0, i.lastSelectedIndex = zr.UNSET_INDEX, i.clickDebounceTimeout = 0, i.recentlyClicked = !1, i.leadingIcon = r.leadingIcon, i.helperText = r.helperText, i;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return mt;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return zr;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return rs;
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
      r === void 0 && (r = !1), i === void 0 && (i = !1), !(n >= this.adapter.getMenuItemCount()) && (n === zr.UNSET_INDEX ? this.adapter.setSelectedText("") : this.adapter.setSelectedText(this.adapter.getMenuItemTextAtIndex(n).trim()), this.adapter.setSelectedIndex(n), r && this.adapter.closeMenu(), !i && this.lastSelectedIndex !== n && this.handleChange(), this.lastSelectedIndex = n);
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
      return n !== zr.UNSET_INDEX ? r[n] : "";
    }, e.prototype.getDisabled = function() {
      return this.disabled;
    }, e.prototype.setDisabled = function(n) {
      this.disabled = n, this.disabled ? (this.adapter.addClass(mt.DISABLED), this.adapter.closeMenu()) : this.adapter.removeClass(mt.DISABLED), this.leadingIcon && this.leadingIcon.setDisabled(this.disabled), this.disabled ? this.adapter.removeSelectAnchorAttr("tabindex") : this.adapter.setSelectAnchorAttr("tabindex", "0"), this.adapter.setSelectAnchorAttr("aria-disabled", this.disabled.toString());
    }, e.prototype.openMenu = function() {
      this.adapter.addClass(mt.ACTIVATED), this.adapter.openMenu(), this.isMenuOpen = !0, this.adapter.setSelectAnchorAttr("aria-expanded", "true");
    }, e.prototype.setHelperTextContent = function(n) {
      this.helperText && this.helperText.setContent(n);
    }, e.prototype.layout = function() {
      if (this.adapter.hasLabel()) {
        var n = this.getValue().length > 0, r = this.adapter.hasClass(mt.FOCUSED), i = n || r, a = this.adapter.hasClass(mt.REQUIRED);
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
      this.adapter.removeClass(mt.ACTIVATED), this.isMenuOpen = !1, this.adapter.isSelectAnchorFocused() || this.blur();
    }, e.prototype.handleChange = function() {
      this.layout(), this.adapter.notifyChange(this.getValue());
      var n = this.adapter.hasClass(mt.REQUIRED);
      n && this.useDefaultValidation && this.setValid(this.isValid());
    }, e.prototype.handleMenuItemAction = function(n) {
      this.setSelectedIndex(
        n,
        /** closeMenu */
        !0
      );
    }, e.prototype.handleFocus = function() {
      this.adapter.addClass(mt.FOCUSED), this.layout(), this.adapter.activateBottomLine();
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
      if (!(this.isMenuOpen || !this.adapter.hasClass(mt.FOCUSED))) {
        var r = gt(n) === Re.ENTER, i = gt(n) === Re.SPACEBAR, a = gt(n) === Re.ARROW_UP, o = gt(n) === Re.ARROW_DOWN, c = n.ctrlKey || n.metaKey;
        if (!c && (!i && n.key && n.key.length === 1 || i && this.adapter.isTypeaheadInProgress())) {
          var l = i ? " " : n.key, u = this.adapter.typeaheadMatchItem(l, this.getSelectedIndex());
          u >= 0 && this.setSelectedIndex(u), n.preventDefault();
          return;
        }
        !r && !i && !a && !o || (this.openMenu(), n.preventDefault());
      }
    }, e.prototype.notchOutline = function(n) {
      if (this.adapter.hasOutline()) {
        var r = this.adapter.hasClass(mt.FOCUSED);
        if (n) {
          var i = zr.LABEL_SCALE, a = this.adapter.getLabelWidth() * i;
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
      this.useDefaultValidation || (this.customValidity = n), this.adapter.setSelectAnchorAttr("aria-invalid", (!n).toString()), n ? (this.adapter.removeClass(mt.INVALID), this.adapter.removeMenuClass(mt.MENU_INVALID)) : (this.adapter.addClass(mt.INVALID), this.adapter.addMenuClass(mt.MENU_INVALID)), this.syncHelperTextValidity(n);
    }, e.prototype.isValid = function() {
      return this.useDefaultValidation && this.adapter.hasClass(mt.REQUIRED) && !this.adapter.hasClass(mt.DISABLED) ? this.getSelectedIndex() !== zr.UNSET_INDEX && (this.getSelectedIndex() !== 0 || !!this.getValue()) : this.customValidity;
    }, e.prototype.setRequired = function(n) {
      n ? this.adapter.addClass(mt.REQUIRED) : this.adapter.removeClass(mt.REQUIRED), this.adapter.setSelectAnchorAttr("aria-required", n.toString()), this.adapter.setLabelRequired(n);
    }, e.prototype.getRequired = function() {
      return this.adapter.getSelectAnchorAttr("aria-required") === "true";
    }, e.prototype.init = function() {
      var n = this.adapter.getAnchorElement();
      n && (this.adapter.setMenuAnchorElement(n), this.adapter.setMenuAnchorCorner(ai.BOTTOM_START)), this.adapter.setMenuWrapFocus(!1), this.setDisabled(this.adapter.hasClass(mt.DISABLED)), this.syncHelperTextValidity(!this.adapter.hasClass(mt.INVALID)), this.layout(), this.layoutOptions();
    }, e.prototype.blur = function() {
      this.adapter.removeClass(mt.FOCUSED), this.layout(), this.adapter.deactivateBottomLine();
      var n = this.adapter.hasClass(mt.REQUIRED);
      n && this.useDefaultValidation && this.setValid(this.isValid());
    }, e.prototype.syncHelperTextValidity = function(n) {
      if (this.helperText) {
        this.helperText.setValidity(n);
        var r = this.helperText.isVisible(), i = this.helperText.getId();
        r && i ? this.adapter.setSelectAnchorAttr(rs.ARIA_DESCRIBEDBY, i) : this.adapter.removeSelectAnchorAttr(rs.ARIA_DESCRIBEDBY);
      }
    }, e.prototype.setClickDebounceTimeout = function() {
      var n = this;
      clearTimeout(this.clickDebounceTimeout), this.clickDebounceTimeout = setTimeout(function() {
        n.recentlyClicked = !1;
      }, zr.CLICK_DEBOUNCE_TIMEOUT_MS), this.recentlyClicked = !0;
    }, e;
  }(Ut)
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
}, er = {
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
var Um = (
  /** @class */
  function(t) {
    $e(e, t);
    function e(n) {
      return t.call(this, fe(fe({}, e.defaultAdapter), n)) || this;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return er;
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
      n ? this.adapter.addClass(er.HELPER_TEXT_VALIDATION_MSG) : this.adapter.removeClass(er.HELPER_TEXT_VALIDATION_MSG);
    }, e.prototype.setValidationMsgPersistent = function(n) {
      n ? this.adapter.addClass(er.HELPER_TEXT_VALIDATION_MSG_PERSISTENT) : this.adapter.removeClass(er.HELPER_TEXT_VALIDATION_MSG_PERSISTENT);
    }, e.prototype.getIsValidation = function() {
      return this.adapter.hasClass(er.HELPER_TEXT_VALIDATION_MSG);
    }, e.prototype.getIsValidationMsgPersistent = function() {
      return this.adapter.hasClass(er.HELPER_TEXT_VALIDATION_MSG_PERSISTENT);
    }, e.prototype.setValidity = function(n) {
      var r = this.adapter.hasClass(er.HELPER_TEXT_VALIDATION_MSG);
      if (r) {
        var i = this.adapter.hasClass(er.HELPER_TEXT_VALIDATION_MSG_PERSISTENT), a = !n || i;
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
  }(Ut)
), Hm = /* @__PURE__ */ ve("<div><!></div>");
function Fm(t, e) {
  Le(e, !0);
  let n = p(e, "use", 19, () => []), r = p(e, "class", 3, ""), i = p(e, "style", 3, ""), a = p(e, "static", 3, !1), o = p(e, "anchor", 3, !0), c = p(e, "fixed", 3, !1), l = p(e, "open", 31, () => ye(a())), u = p(e, "managed", 3, !1), d = p(e, "fullWidth", 3, !1), h = p(e, "quickOpen", 3, !1), f = p(e, "anchorElement", 15), v = p(e, "anchorMargin", 19, () => ({ top: 0, right: 0, bottom: 0, left: 0 })), m = p(e, "maxHeight", 3, 0), g = p(e, "horizontallyCenteredOnViewport", 3, !1), I = p(e, "openBottomBias", 3, 0), E = p(e, "neverRestoreFocus", 3, !1), T = /* @__PURE__ */ ze(e, [
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
  ]), S, b = /* @__PURE__ */ be(void 0), _ = ye({}), x = ye({}), w = /* @__PURE__ */ be(void 0);
  ne("SMUI:list:role", "menu"), ne("SMUI:list:item:role", "menuitem"), xe(() => {
    var V, se;
    S && o() && !((V = S.parentElement) != null && V.classList.contains("mdc-menu-surface--anchor")) && ((se = S.parentElement) == null || se.classList.add("mdc-menu-surface--anchor"), f(S.parentElement ?? void 0));
  }), xe(() => {
    s(b) && s(b).isOpen() !== l() && (l() ? s(b).open() : s(b).close());
  }), xe(() => {
    s(b) && s(b).setQuickOpen(h());
  }), xe(() => {
    s(b) && s(b).setFixedPosition(c());
  }), xe(() => {
    s(b) && s(b).setMaxHeight(m());
  }), xe(() => {
    s(b) && s(b).setIsHorizontallyCenteredOnViewport(g());
  });
  const A = ai;
  xe(() => {
    s(b) && e.anchorCorner != null && (typeof e.anchorCorner == "string" ? s(b).setAnchorCorner(A[e.anchorCorner]) : s(b).setAnchorCorner(e.anchorCorner));
  }), xe(() => {
    s(b) && s(b).setAnchorMargin(v());
  }), xe(() => {
    s(b) && s(b).setOpenBottomBias(I());
  });
  const C = oe("SMUI:menu-surface:mount"), P = oe("SMUI:menu-surface:unmount");
  st(() => {
    Q(
      b,
      new Jc({
        addClass: H,
        removeClass: F,
        hasClass: K,
        hasAnchor: () => !!f(),
        notifyClose: () => {
          u() || l(a()), l() || Ke(L(), "SMUIMenuSurfaceClosed");
        },
        notifyClosing: () => {
          u() || l(a()), l() || Ke(L(), "SMUIMenuSurfaceClosing");
        },
        notifyOpen: () => {
          u() || l(!0), l() && Ke(L(), "SMUIMenuSurfaceOpened");
        },
        notifyOpening: () => {
          l() || Ke(L(), "SMUIMenuSurfaceOpening");
        },
        isElementInContainer: (se) => L().contains(se),
        isRtl: () => getComputedStyle(L()).getPropertyValue("direction") === "rtl",
        setTransformOrigin: (se) => {
          x["transform-origin"] = se;
        },
        isFocused: () => document.activeElement === L(),
        saveFocus: () => {
          Q(w, document.activeElement ?? void 0, !0);
        },
        restoreFocus: () => {
          !E() && (!S || L().contains(document.activeElement)) && s(w) && document.contains(s(w)) && "focus" in s(w) && s(w).focus();
        },
        getInnerDimensions: () => ({
          width: L().offsetWidth,
          height: L().offsetHeight
        }),
        getAnchorDimensions: () => f() ? f().getBoundingClientRect() : null,
        getWindowDimensions: () => ({ width: window.innerWidth, height: window.innerHeight }),
        getBodyDimensions: () => ({
          width: document.body.clientWidth,
          height: document.body.clientHeight
        }),
        getWindowScroll: () => ({ x: window.pageXOffset, y: window.pageYOffset }),
        setPosition: (se) => {
          x.left = "left" in se ? `${se.left}px` : "", x.right = "right" in se ? `${se.right}px` : "", x.top = "top" in se ? `${se.top}px` : "", x.bottom = "bottom" in se ? `${se.bottom}px` : "";
        },
        setMaxHeight: (se) => {
          x["max-height"] = se;
        }
      }),
      !0
    );
    const V = {
      get open() {
        return l();
      },
      set open(se) {
        l(se);
      },
      closeProgrammatic: _e
    };
    return C && C(V), s(b).init(), () => {
      var X, he;
      P && P(V);
      const se = s(b).isHoistedElement;
      (X = s(b)) == null || X.destroy(), se && ((he = L().parentNode) == null || he.removeChild(L()));
    };
  }), Hn(() => {
    var V;
    o() && L() && ((V = L().parentElement) == null || V.classList.remove("mdc-menu-surface--anchor"));
  });
  function K(V) {
    return V in _ ? _[V] : L().classList.contains(V);
  }
  function H(V) {
    _[V] || (_[V] = !0);
  }
  function F(V) {
    (!(V in _) || _[V]) && (_[V] = !1);
  }
  function _e(V) {
    var se;
    (se = s(b)) == null || se.close(V), l(!1);
  }
  function k(V) {
    s(b) && l() && !u() && s(b).handleBodyClick(V);
  }
  function B() {
    return l();
  }
  function U(V) {
    l(V);
  }
  function G(V, se) {
    if (s(b) == null)
      throw new Error("Instance is not defined.");
    return s(b).setAbsolutePosition(V, se);
  }
  function ee(V) {
    if (s(b) == null)
      throw new Error("Instance is not defined.");
    return s(b).setIsHoisted(V);
  }
  function R() {
    if (s(b) == null)
      throw new Error("Instance is not defined.");
    return s(b).isFixed();
  }
  function y() {
    if (s(b) == null)
      throw new Error("Instance is not defined.");
    return s(b).flipCornerHorizontally();
  }
  function L() {
    return S;
  }
  var $ = {
    isOpen: B,
    setOpen: U,
    setAbsolutePosition: G,
    setIsHoisted: ee,
    isFixed: R,
    flipCornerHorizontally: y,
    getElement: L
  }, N = Hm();
  ba("click", Xu.body, k, !0);
  var j = (V) => {
    var se;
    s(b) && !u() && s(b).handleKeydown(V), (se = e.onkeydown) == null || se.call(e, V);
  };
  ke(
    N,
    (V, se) => ({
      class: V,
      style: se,
      role: "dialog",
      ...T,
      onkeydown: j
    }),
    [
      () => He({
        "mdc-menu-surface": !0,
        "mdc-menu-surface--fixed": c(),
        "mdc-menu-surface--open": a(),
        "smui-menu-surface--static": a(),
        "mdc-menu-surface--fullwidth": d(),
        ..._,
        [r()]: !0
      }),
      () => Object.entries(x).map(([V, se]) => `${V}: ${se};`).concat([i()]).join(" ")
    ]
  );
  var de = Ie(N);
  return Ae(de, () => e.children ?? ge), Te(N, (V) => S = V, () => S), Be(N, (V, se) => z == null ? void 0 : z(V, se), n), O(t, N), Oe($);
}
function is(t, { addClass: e = (r) => t.classList.add(r), removeClass: n = (r) => t.classList.remove(r) } = {}) {
  return e("mdc-menu-surface--anchor"), {
    destroy() {
      n("mdc-menu-surface--anchor");
    }
  };
}
function Bm(t, e) {
  Le(e, !0);
  const { closest: n } = Uo;
  let r = p(e, "use", 19, () => []), i = p(e, "class", 3, ""), a = p(e, "open", 15, !1), o = p(e, "anchorElement", 15), c = p(e, "managed", 3, !1), l = /* @__PURE__ */ ze(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "open",
    "anchorElement",
    "managed",
    "children"
  ]), u, d = /* @__PURE__ */ be(void 0), h = /* @__PURE__ */ be(void 0), f = /* @__PURE__ */ be(void 0);
  ne("SMUI:menu-surface:mount", (A) => {
    s(h) || Q(h, A, !0);
  });
  const v = oe("SMUI:list:mount");
  ne("SMUI:list:mount", (A) => {
    s(f) || Q(f, A, !0), v && v(A);
  });
  const m = oe("SMUI:menu:mount"), g = oe("SMUI:menu:unmount");
  st(() => (Q(
    d,
    new Pm({
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
        c() || ((C = s(h)) == null || C.closeProgrammatic(A), Ke(x(), "SMUIMenuClosedProgrammatically"));
      },
      getElementIndex: (A) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        return s(f).getOrderedList().map((C) => C.element).indexOf(A);
      },
      notifySelected: (A) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        Ke(x(), "SMUIMenuSelected", {
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
        return !!n(s(f).getOrderedList()[A].element, `.${Ui.MENU_SELECTION_GROUP}`);
      },
      getSelectedSiblingOfItemAtIndex: (A) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        const C = s(f).getOrderedList(), P = n(C[A].element, `.${Ui.MENU_SELECTION_GROUP}`), K = P == null ? void 0 : P.querySelector(`.${Ui.MENU_SELECTED_LIST_ITEM}`);
        return K ? C.map((H) => H.element).indexOf(K) : -1;
      }
    }),
    !0
  ), m && m(s(d)), s(d).init(), () => {
    var A;
    g && s(d) && g(s(d)), (A = s(d)) == null || A.destroy();
  }));
  function I(A) {
    s(d) && s(d).handleKeydown(A);
  }
  function E() {
    return a();
  }
  function T(A) {
    a(A);
  }
  function S(A) {
    if (s(d) == null)
      throw new Error("Instance is undefined.");
    s(d).setDefaultFocusState(A);
  }
  function b() {
    if (s(d) == null)
      throw new Error("Instance is undefined.");
    return s(d).getSelectedIndex();
  }
  function _() {
    return u;
  }
  function x() {
    return u.getElement();
  }
  var w = {
    isOpen: E,
    setOpen: T,
    setDefaultFocusState: S,
    getSelectedIndex: b,
    getMenuSurface: _,
    getElement: x
  };
  {
    let A = /* @__PURE__ */ ae(() => He({ "mdc-menu": !0, [i()]: !0 }));
    Te(
      Fm(t, it(
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
            I(C), (P = e.onkeydown) == null || P.call(e, C);
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
            var K = re(), H = Y(K);
            Ae(H, () => e.children ?? ge), O(C, K);
          },
          $$slots: { default: !0 }
        }
      )),
      (C) => u = C,
      () => u
    );
  }
  return Oe(w);
}
function km(t, e) {
  Le(e, !0);
  const { closest: n, matches: r } = Uo;
  let i = oe("SMUI:list:nav"), a = p(e, "use", 19, () => []), o = p(e, "class", 3, ""), c = p(e, "nonInteractive", 3, !1), l = p(e, "dense", 3, !1), u = p(e, "textualList", 3, !1), d = p(e, "avatarList", 3, !1), h = p(e, "iconList", 3, !1), f = p(e, "imageList", 3, !1), v = p(e, "thumbnailList", 3, !1), m = p(e, "videoList", 3, !1), g = p(e, "twoLine", 3, !1), I = p(e, "threeLine", 3, !1), E = p(e, "vertical", 3, !0), T = p(e, "wrapFocus", 19, () => oe("SMUI:list:wrapFocus") ?? !1), S = p(e, "singleSelection", 3, !1), b = p(e, "disabledItemsFocusable", 3, !1), _ = p(e, "selectedIndex", 31, () => -1), x = p(e, "radioList", 3, !1), w = p(e, "checkList", 3, !1), A = p(e, "hasTypeahead", 3, !1), C = p(e, "component", 3, Fr), P = p(e, "tag", 3, i ? "nav" : "ul"), K = /* @__PURE__ */ ze(e, [
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
  ]), H, F = /* @__PURE__ */ be(void 0), _e = [], k = oe("SMUI:list:role");
  const B = /* @__PURE__ */ new WeakMap();
  let U = oe("SMUI:dialog:selection"), G = oe("SMUI:addLayoutListener"), ee;
  ne("SMUI:list:nonInteractive", c()), ne("SMUI:separator:context", "list"), k || (S() ? (k = "listbox", ne("SMUI:list:item:role", "option")) : x() ? (k = "radiogroup", ne("SMUI:list:item:role", "radio")) : w() ? (k = "group", ne("SMUI:list:item:role", "checkbox")) : (k = "list", ne("SMUI:list:item:role", void 0))), xe(() => {
    s(F) && s(F).setVerticalOrientation(E());
  }), xe(() => {
    s(F) && s(F).setWrapFocus(T());
  }), xe(() => {
    s(F) && s(F).setHasTypeahead(A());
  }), xe(() => {
    s(F) && s(F).setSingleSelection(S());
  }), xe(() => {
    s(F) && s(F).setDisabledItemsFocusable(b());
  }), xe(() => {
    s(F) && S() && M() !== _() && s(F).setSelectedIndex(_());
  }), G && (ee = G(ue)), ne("SMUI:list:item:mount", (ce) => {
    _e.push(ce), B.set(ce.element, ce), S() && ce.selected && _(De(ce.element));
  }), ne("SMUI:list:item:unmount", (ce) => {
    const me = (ce && _e.findIndex((W) => W === ce)) ?? -1;
    me !== -1 && (_e.splice(me, 1), B.delete(ce.element));
  });
  const R = oe("SMUI:list:mount"), y = oe("SMUI:list:unmount");
  st(() => {
    Q(
      F,
      new Om({
        addClassForElementIndex: X,
        focusItemAtIndex: te,
        getAttributeForElementIndex: (me, W) => {
          var Z;
          return ((Z = V()[me]) == null ? void 0 : Z.getAttr(W)) ?? null;
        },
        getFocusedElementIndex: () => document.activeElement ? V().map((me) => me.element).indexOf(document.activeElement) : -1,
        getListItemCount: () => _e.length,
        getPrimaryTextAtIndex: Xe,
        hasCheckboxAtIndex: (me) => {
          var W;
          return ((W = V()[me]) == null ? void 0 : W.hasCheckbox) ?? !1;
        },
        hasRadioAtIndex: (me) => {
          var W;
          return ((W = V()[me]) == null ? void 0 : W.hasRadio) ?? !1;
        },
        isCheckboxCheckedAtIndex: (me) => {
          const W = V()[me];
          return ((W == null ? void 0 : W.hasCheckbox) && W.checked) ?? !1;
        },
        isFocusInsideList: () => H != null && Ce() !== document.activeElement && Ce().contains(document.activeElement),
        isRootFocused: () => H != null && document.activeElement === Ce(),
        listItemAtIndexHasClass: se,
        notifyAction: (me) => {
          _(me), H != null && Ke(Ce(), "SMUIListAction", { index: me });
        },
        notifySelectionChange: (me) => {
          H != null && Ke(Ce(), "SMUIListSelectionChange", { changedIndices: me });
        },
        removeClassForElementIndex: he,
        setAttributeForElementIndex: ie,
        setCheckedCheckboxOrRadioAtIndex: (me, W) => {
          V()[me].checked = W;
        },
        setTabIndexForListItemChildren: (me, W) => {
          const Z = V()[me];
          Array.prototype.forEach.call(Z.element.querySelectorAll("button:not(:disabled), a"), (et) => {
            et.setAttribute("tabindex", W);
          });
        }
      }),
      !0
    );
    const ce = {
      get element() {
        return Ce();
      },
      get items() {
        return _e;
      },
      get typeaheadInProgress() {
        if (!s(F))
          throw new Error("Instance is undefined.");
        return s(F).isTypeaheadInProgress();
      },
      typeaheadMatchItem(me, W) {
        if (!s(F))
          throw new Error("Instance is undefined.");
        return s(F).typeaheadMatchItem(
          me,
          W,
          /** skipFocus */
          !0
        );
      },
      getOrderedList: V,
      focusItemAtIndex: te,
      addClassForElementIndex: X,
      removeClassForElementIndex: he,
      setAttributeForElementIndex: ie,
      removeAttributeForElementIndex: qe,
      getAttributeFromElementIndex: Ue,
      getPrimaryTextAtIndex: Xe
    };
    return R && R(ce), s(F).init(), s(F).layout(), () => {
      var me;
      y && y(ce), (me = s(F)) == null || me.destroy();
    };
  }), Hn(() => {
    ee && ee();
  });
  function L(ce) {
    s(F) && ce.target && s(F).handleKeydown(ce, ce.target.classList.contains("mdc-deprecated-list-item"), De(ce.target));
  }
  function $(ce) {
    s(F) && ce.target && s(F).handleFocusIn(De(ce.target));
  }
  function N(ce) {
    s(F) && ce.target && s(F).handleFocusOut(De(ce.target));
  }
  function j(ce) {
    s(F) && ce.target && s(F).handleClick(De(ce.target), !r(ce.target, 'input[type="checkbox"], input[type="radio"]'), ce);
  }
  function de(ce) {
    if (x() || w()) {
      const me = De(ce.target);
      if (me !== -1) {
        const W = V()[me];
        W && (x() && !W.checked || w()) && (r(ce.detail.target, 'input[type="checkbox"], input[type="radio"]') || (W.checked = !W.checked), W.activateRipple(), window.requestAnimationFrame(() => {
          W.deactivateRipple();
        }));
      }
    }
  }
  function V() {
    return H == null ? [] : [...Ce().children].map((ce) => B.get(ce)).filter((ce) => ce && ce._smui_list_item_accessor);
  }
  function se(ce, me) {
    const W = V()[ce];
    return (W && W.hasClass(me)) ?? !1;
  }
  function X(ce, me) {
    const W = V()[ce];
    W && W.addClass(me);
  }
  function he(ce, me) {
    const W = V()[ce];
    W && W.removeClass(me);
  }
  function ie(ce, me, W) {
    const Z = V()[ce];
    Z && Z.addAttr(me, W);
  }
  function qe(ce, me) {
    const W = V()[ce];
    W && W.removeAttr(me);
  }
  function Ue(ce, me) {
    const W = V()[ce];
    return W ? W.getAttr(me) : null;
  }
  function Xe(ce) {
    const me = V()[ce];
    return (me && me.getPrimaryText()) ?? "";
  }
  function De(ce) {
    const me = n(ce, ".mdc-deprecated-list-item, .mdc-deprecated-list");
    return me && r(me, ".mdc-deprecated-list-item") ? V().map((W) => W == null ? void 0 : W.element).indexOf(me) : -1;
  }
  function ue() {
    if (!s(F))
      throw new Error("Instance is undefined.");
    return s(F).layout();
  }
  function we(ce, me) {
    if (!s(F))
      throw new Error("Instance is undefined.");
    return s(F).setEnabled(ce, me);
  }
  function Pe() {
    if (!s(F))
      throw new Error("Instance is undefined.");
    return s(F).isTypeaheadInProgress();
  }
  function M() {
    if (!s(F))
      throw new Error("Instance is undefined.");
    return s(F).getSelectedIndex();
  }
  function q() {
    if (!s(F))
      throw new Error("Instance is undefined.");
    return s(F).getFocusedItemIndex();
  }
  function te(ce) {
    const me = V()[ce];
    me && "focus" in me.element && me.element.focus();
  }
  function Ce() {
    return H.getElement();
  }
  var Ct = {
    layout: ue,
    setEnabled: we,
    getTypeaheadInProgress: Pe,
    getSelectedIndex: M,
    getFocusedItemIndex: q,
    focusItemAtIndex: te,
    getElement: Ce
  }, kt = re(), Rn = Y(kt);
  {
    let ce = /* @__PURE__ */ ae(() => He({
      "mdc-deprecated-list": !0,
      "mdc-deprecated-list--non-interactive": c(),
      "mdc-deprecated-list--dense": l(),
      "mdc-deprecated-list--textual-list": u(),
      "mdc-deprecated-list--avatar-list": d() || U,
      "mdc-deprecated-list--icon-list": h(),
      "mdc-deprecated-list--image-list": f(),
      "mdc-deprecated-list--thumbnail-list": v(),
      "mdc-deprecated-list--video-list": m(),
      "mdc-deprecated-list--two-line": g(),
      "smui-list--three-line": I() && !g(),
      [o()]: !0
    }));
    ur(Rn, C, (me, W) => {
      Te(
        W(me, it(
          {
            get tag() {
              return P();
            },
            get use() {
              return a();
            },
            get class() {
              return s(ce);
            },
            get role() {
              return k;
            }
          },
          () => K,
          {
            onkeydown: (Z) => {
              var Me;
              L(Z), (Me = e.onkeydown) == null || Me.call(e, Z);
            },
            onfocusin: (Z) => {
              var Me;
              $(Z), (Me = e.onfocusin) == null || Me.call(e, Z);
            },
            onfocusout: (Z) => {
              var Me;
              N(Z), (Me = e.onfocusout) == null || Me.call(e, Z);
            },
            onclick: (Z) => {
              var Me;
              j(Z), (Me = e.onclick) == null || Me.call(e, Z);
            },
            onSMUIAction: (Z) => {
              var Me;
              de(Z), (Me = e.onSMUIAction) == null || Me.call(e, Z);
            },
            children: (Z, Me) => {
              var et = re(), pt = Y(et);
              Ae(pt, () => e.children ?? ge), O(Z, et);
            },
            $$slots: { default: !0 }
          }
        )),
        (Z) => H = Z,
        () => H
      );
    });
  }
  return O(t, kt), Oe(Ct);
}
let Vm = 0;
var Gm = /* @__PURE__ */ ve('<span class="mdc-deprecated-list-item__ripple"></span>'), jm = /* @__PURE__ */ ve("<!><!>", 1);
function qm(t, e) {
  Le(e, !0);
  let n = () => {
  };
  function r(X) {
    return X === n;
  }
  let i = oe("SMUI:list:item:nav"), a = p(e, "use", 19, () => []), o = p(e, "class", 3, ""), c = p(e, "style", 3, ""), l = p(e, "nonInteractive", 19, () => oe("SMUI:list:nonInteractive") ?? !1), u = p(e, "ripple", 19, () => !l()), d = p(e, "wrapper", 3, !1), h = p(e, "activated", 15, !1), f = p(e, "role", 19, () => d() ? "presentation" : oe("SMUI:list:item:role")), v = p(e, "selected", 15, !1), m = p(e, "disabled", 3, !1), g = p(e, "skipRestoreFocus", 3, !1), I = p(e, "tabindex", 15, n), E = p(e, "inputId", 19, () => "SMUI-form-field-list-" + Vm++), T = p(e, "component", 3, Fr), S = p(e, "tag", 19, () => i ? e.href ? "a" : "span" : "li"), b = /* @__PURE__ */ ze(e, [
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
  ne("SMUI:list:nonInteractive", void 0), ne("SMUI:list:item:role", void 0);
  let _, x = ye({}), w = ye({}), A = ye({}), C = /* @__PURE__ */ be(void 0), P = /* @__PURE__ */ be(void 0);
  const K = /* @__PURE__ */ ae(() => r(I()) ? !l() && !m() && (v() || s(C) && s(C).checked) ? 0 : -1 : I());
  ne("SMUI:generic:input:props", { id: E() }), ne("SMUI:separator:context", void 0), ne("SMUI:generic:input:mount", (X) => {
    ("_smui_checkbox_accessor" in X || "_smui_radio_accessor" in X) && Q(C, X, !0);
  }), ne("SMUI:generic:input:unmount", () => {
    Q(C, void 0);
  });
  const H = oe("SMUI:list:item:mount"), F = oe("SMUI:list:item:unmount");
  st(() => {
    if (!v() && !l()) {
      let he = !0, ie = _.getElement();
      for (; ie.previousElementSibling; )
        if (ie = ie.previousElementSibling, ie.nodeType === 1 && ie.classList.contains("mdc-deprecated-list-item") && !ie.classList.contains("mdc-deprecated-list-item--disabled")) {
          he = !1;
          break;
        }
      he && Q(P, window.requestAnimationFrame(() => y(ie)), !0);
    }
    const X = {
      _smui_list_item_accessor: !0,
      get element() {
        return j();
      },
      get selected() {
        return v();
      },
      set selected(he) {
        v(he);
      },
      hasClass: _e,
      addClass: k,
      removeClass: B,
      getAttr: G,
      addAttr: ee,
      removeAttr: R,
      getPrimaryText: N,
      // For inputs within item.
      get checked() {
        return (s(C) && s(C).checked) ?? !1;
      },
      set checked(he) {
        s(C) && (s(C).checked = !!he);
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
      action: $,
      get tabindex() {
        return s(K);
      },
      set tabindex(he) {
        I(he);
      },
      get disabled() {
        return m();
      },
      get activated() {
        return h();
      },
      set activated(he) {
        h(he);
      }
    };
    return H && H(X), () => {
      F && F(X);
    };
  }), Hn(() => {
    s(P) && window.cancelAnimationFrame(s(P));
  });
  function _e(X) {
    return X in x ? x[X] : j().classList.contains(X);
  }
  function k(X) {
    x[X] || (x[X] = !0);
  }
  function B(X) {
    (!(X in x) || x[X]) && (x[X] = !1);
  }
  function U(X, he) {
    w[X] != he && (he === "" || he == null ? delete w[X] : w[X] = he);
  }
  function G(X) {
    return X in A ? A[X] ?? null : j().getAttribute(X);
  }
  function ee(X, he) {
    A[X] !== he && (A[X] = he);
  }
  function R(X) {
    (!(X in A) || A[X] != null) && (A[X] = void 0);
  }
  function y(X) {
    let he = !0;
    for (; X.nextElementSibling; )
      if (X = X.nextElementSibling, X.nodeType === 1 && X.classList.contains("mdc-deprecated-list-item")) {
        const ie = X.attributes.getNamedItem("tabindex");
        if (ie && ie.value === "0") {
          he = !1;
          break;
        }
      }
    he && I(0);
  }
  function L(X) {
    const he = X.key === "Enter", ie = X.key === "Space";
    (he || ie) && $(X);
  }
  function $(X) {
    m() || Ke(j(), "SMUIAction", X);
  }
  function N() {
    const X = j(), he = X.querySelector(".mdc-deprecated-list-item__primary-text");
    if (he)
      return he.textContent ?? "";
    const ie = X.querySelector(".mdc-deprecated-list-item__text");
    return ie ? ie.textContent ?? "" : X.textContent ?? "";
  }
  function j() {
    return _.getElement();
  }
  var de = { action: $, getPrimaryText: N, getElement: j }, V = re(), se = Y(V);
  {
    let X = /* @__PURE__ */ ae(() => [
      ...l() ? [] : [
        [
          Kt,
          {
            ripple: !s(C),
            unbounded: !1,
            color: (h() || v()) && e.color == null ? "primary" : e.color,
            disabled: m(),
            addClass: k,
            removeClass: B,
            addStyle: U
          }
        ]
      ],
      ...a()
    ]), he = /* @__PURE__ */ ae(() => He({
      "mdc-deprecated-list-item": !d(),
      "mdc-deprecated-list-item__wrapper": d(),
      "mdc-deprecated-list-item--activated": h(),
      "mdc-deprecated-list-item--selected": v(),
      "mdc-deprecated-list-item--disabled": m(),
      "mdc-menu-item--selected": !i && f() === "menuitem" && v(),
      "smui-menu-item--non-interactive": l(),
      ...x,
      [o()]: !0
    })), ie = /* @__PURE__ */ ae(() => Object.entries(w).map(([Ue, Xe]) => `${Ue}: ${Xe};`).concat([c()]).join(" ")), qe = /* @__PURE__ */ ae(() => g() || void 0);
    ur(se, T, (Ue, Xe) => {
      Te(
        Xe(Ue, it(
          {
            get tag() {
              return S();
            },
            get use() {
              return s(X);
            },
            get class() {
              return s(he);
            },
            get style() {
              return s(ie);
            }
          },
          () => i && h() ? { "aria-current": "page" } : {},
          () => !i || d() ? { role: f() } : {},
          () => !i && f() === "option" ? { "aria-selected": v() ? "true" : "false" } : {},
          () => !i && (f() === "radio" || f() === "checkbox") ? {
            "aria-checked": s(C) && s(C).checked ? "true" : "false"
          } : {},
          () => i ? {} : { "aria-disabled": m() ? "true" : "false" },
          {
            get "data-menu-item-skip-restore-focus"() {
              return s(qe);
            },
            get tabindex() {
              return s(K);
            },
            get href() {
              return e.href;
            }
          },
          () => A,
          () => b,
          {
            onclick: (De) => {
              var ue;
              $(De), (ue = e.onclick) == null || ue.call(e, De);
            },
            onkeydown: (De) => {
              var ue;
              L(De), (ue = e.onkeydown) == null || ue.call(e, De);
            },
            children: (De, ue) => {
              var we = jm(), Pe = Y(we);
              {
                var M = (te) => {
                  var Ce = Gm();
                  O(te, Ce);
                };
                le(Pe, (te) => {
                  u() && te(M);
                });
              }
              var q = Ee(Pe);
              Ae(q, () => e.children ?? ge), O(De, we);
            },
            $$slots: { default: !0 }
          }
        )),
        (De) => _ = De,
        () => _
      );
    });
  }
  return O(t, V), Oe(de);
}
let Wm = 0;
var Km = /* @__PURE__ */ ve("<div><!></div>");
function zm(t, e) {
  Le(e, !0);
  let n = p(e, "use", 19, () => []), r = p(e, "class", 3, ""), i = p(e, "id", 19, () => "SMUI-select-helper-text-" + Wm++), a = p(e, "persistent", 3, !1), o = p(e, "validationMsg", 3, !1), c = /* @__PURE__ */ ze(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "id",
    "persistent",
    "validationMsg",
    "children"
  ]), l, u = /* @__PURE__ */ be(void 0), d = ye({}), h = ye({}), f = /* @__PURE__ */ be(void 0);
  const v = oe("SMUI:select:helper-text:id"), m = oe("SMUI:select:helper-text:mount"), g = oe("SMUI:select:helper-text:unmount");
  st(() => (Q(
    u,
    new Um({
      addClass: E,
      removeClass: T,
      hasClass: I,
      getAttr: S,
      setAttr: b,
      removeAttr: _,
      setContent: (H) => {
        Q(f, H, !0);
      }
    }),
    !0
  ), v && v(i()), m && m(s(u)), s(u).init(), () => {
    var H;
    g && s(u) && g(s(u)), (H = s(u)) == null || H.destroy();
  }));
  function I(H) {
    return H in d ? d[H] : x().classList.contains(H);
  }
  function E(H) {
    d[H] || (d[H] = !0);
  }
  function T(H) {
    (!(H in d) || d[H]) && (d[H] = !1);
  }
  function S(H) {
    return H in h ? h[H] ?? null : x().getAttribute(H);
  }
  function b(H, F) {
    h[H] !== F && (h[H] = F);
  }
  function _(H) {
    (!(H in h) || h[H] != null) && (h[H] = void 0);
  }
  function x() {
    return l;
  }
  var w = { getElement: x }, A = Km();
  ke(
    A,
    (H) => ({
      class: H,
      "aria-hidden": a() ? void 0 : "true",
      id: i(),
      ...h,
      ...c
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
  var C = Ie(A);
  {
    var P = (H) => {
      var F = re(), _e = Y(F);
      Ae(_e, () => e.children ?? ge), O(H, F);
    }, K = (H) => {
      var F = Xt();
      Fe(() => vt(F, s(f))), O(H, F);
    };
    le(C, (H) => {
      s(f) == null ? H(P) : H(K, !1);
    });
  }
  return Te(A, (H) => l = H, () => l), Be(A, (H, F) => z == null ? void 0 : z(H, F), n), O(t, A), Oe(w);
}
let Xm = 0;
var Ym = /* @__PURE__ */ ve("<input/>"), Zm = /* @__PURE__ */ ve('<span class="mdc-select__ripple"></span>'), Qm = /* @__PURE__ */ ve('<div><!> <div><!> <!> <!> <!> <span><span> </span></span> <span><svg class="mdc-select__dropdown-icon-graphic" viewBox="7 10 10 5" focusable="false"><polygon class="mdc-select__dropdown-icon-inactive" stroke="none" fill-rule="evenodd" points="7 10 12 15 17 10"></polygon><polygon class="mdc-select__dropdown-icon-active" stroke="none" fill-rule="evenodd" points="7 15 12 10 17 15"></polygon></svg></span> <!></div> <!></div> <!>', 1);
function Jm(t, e) {
  Le(e, !0);
  const n = () => Nt(Ce, "$selectedTextStore", r), [r, i] = Ln();
  let a = () => {
  };
  function o(D) {
    return D === a;
  }
  let c = p(e, "use", 19, () => []), l = p(e, "class", 3, ""), u = p(e, "style", 3, ""), d = p(e, "ripple", 3, !0), h = p(e, "disabled", 3, !1), f = p(e, "variant", 3, "standard"), v = p(e, "noLabel", 3, !1), m = p(e, "label", 3, void 0), g = p(e, "value", 15), I = p(e, "key", 3, (D) => D), E = p(e, "dirty", 15, !1), T = p(e, "invalid", 15, a), S = p(e, "updateInvalid", 19, () => o(T())), b = p(e, "required", 3, !1), _ = p(e, "inputId", 19, () => "SMUI-select-" + Xm++), x = p(e, "hiddenInput", 3, !1), w = p(e, "withLeadingIcon", 3, a), A = p(e, "anchor$use", 19, () => []), C = p(e, "anchor$class", 3, ""), P = p(e, "selectedTextContainer$use", 19, () => []), K = p(e, "selectedTextContainer$class", 3, ""), H = p(e, "selectedText$use", 19, () => []), F = p(e, "selectedText$class", 3, ""), _e = p(e, "dropdownIcon$use", 19, () => []), k = p(e, "dropdownIcon$class", 3, ""), B = p(e, "menu$class", 3, ""), U = /* @__PURE__ */ ze(e, [
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
  const G = o(T());
  o(T()) && T(!1);
  let ee, R = /* @__PURE__ */ be(void 0), y = ye({}), L = ye({}), $, N = ye({}), j = /* @__PURE__ */ be(-1);
  const de = /* @__PURE__ */ ae(() => U.menu$id ?? _() + "-menu");
  let V = /* @__PURE__ */ be(void 0), se = oe("SMUI:addLayoutListener"), X, he = /* @__PURE__ */ be(!1), ie = ye({}), qe = /* @__PURE__ */ be(void 0), Ue = /* @__PURE__ */ be(void 0), Xe = /* @__PURE__ */ be(!1), De, ue = oe("SMUI:select:context"), we, Pe, M, q, te;
  ne("SMUI:list:role", ""), ne("SMUI:list:nav", !1);
  const Ce = dt("");
  ne("SMUI:select:selectedText", Ce);
  const Ct = dt(g());
  xe(() => {
    mn(Ct, g());
  }), ne("SMUI:select:value", Ct), xe(() => {
    s(R) && s(R).getValue() !== I()(g()) && s(R).setValue(I()(g()));
  });
  let kt = s(j);
  xe(() => {
    if (kt !== s(j))
      if (kt = s(j), s(R))
        s(R).setSelectedIndex(
          s(j),
          /* closeMenu */
          !1,
          /* skipNotify */
          !0
        );
      else {
        const D = Vt();
        g() !== D[s(j)] && g(D[s(j)]);
      }
  }), xe(() => {
    s(R) && s(R).getDisabled() !== h() && s(R).setDisabled(h());
  }), xe(() => {
    s(R) && E() && s(R).isValid() !== !T() && (S() ? T(!s(R).isValid()) : s(R).setValid(!T()));
  }), xe(() => {
    s(R) && s(R).getRequired() !== b() && s(R).setRequired(b());
  }), se && (X = se(mi)), ne("SMUI:select:leading-icon:mount", (D) => {
    we = D;
  }), ne("SMUI:select:leading-icon:unmount", () => {
    we = void 0;
  }), ne("SMUI:list:mount", (D) => {
    De = D;
  }), ne("SMUI:select:helper-text:id", (D) => {
    Q(V, D, !0);
  }), ne("SMUI:select:helper-text:mount", (D) => {
    Pe = D;
  }), ne("SMUI:select:helper-text:unmount", () => {
    Q(V, void 0), Pe = void 0;
  }), st(() => (Q(
    R,
    new Nm(
      {
        // getSelectAdapterMethods
        // getMenuItemAttr: (menuItem: Element, attr: string) =>
        //   menuItem.getAttribute(attr),
        setSelectedText: (D) => {
          mn(Ce, D);
        },
        isSelectAnchorFocused: () => document.activeElement === $,
        getSelectAnchorAttr: et,
        setSelectAnchorAttr: pt,
        removeSelectAnchorAttr: Ot,
        addMenuClass: Z,
        removeMenuClass: Me,
        openMenu: () => {
          Q(he, !0);
        },
        closeMenu: () => {
          Q(he, !1);
        },
        getAnchorElement: () => $,
        setMenuAnchorElement: (D) => {
          Q(qe, D, !0);
        },
        setMenuAnchorCorner: (D) => {
          Q(Ue, D, !0);
        },
        setMenuWrapFocus: (D) => {
          Q(Xe, D, !0);
        },
        getSelectedIndex: () => s(j),
        setSelectedIndex: (D) => {
          kt = D, Q(j, D, !0), g(Vt()[s(j)]);
        },
        focusMenuItemAtIndex: (D) => {
          De.focusItemAtIndex(D);
        },
        getMenuItemCount: () => De.items.length,
        getMenuItemValues: () => Vt().map(I()),
        getMenuItemTextAtIndex: (D) => De.getPrimaryTextAtIndex(D),
        isTypeaheadInProgress: () => De.typeaheadInProgress,
        typeaheadMatchItem: (D, pe) => De.typeaheadMatchItem(D, pe),
        // getCommonAdapterMethods
        addClass: ce,
        removeClass: me,
        hasClass: Rn,
        setRippleCenter: (D) => q && q.setRippleCenter(D),
        activateBottomLine: () => q && q.activate(),
        deactivateBottomLine: () => q && q.deactivate(),
        notifyChange: (D) => {
          var pe;
          E(!0), S() && T(!((pe = s(R)) != null && pe.isValid())), Ke(Yt(), "SMUISelectChange", { value: g(), index: s(j) });
        },
        // getOutlineAdapterMethods
        hasOutline: () => !!te,
        notchOutline: (D) => te && te.notch(D),
        closeOutline: () => te && te.closeNotch(),
        // getLabelAdapterMethods
        hasLabel: () => !!M,
        floatLabel: (D) => M && M.float(D),
        getLabelWidth: () => M ? M.getWidth() : 0,
        setLabelRequired: (D) => M && M.setRequired(D)
      },
      {
        get helperText() {
          return Pe;
        },
        get leadingIcon() {
          return we;
        }
      }
    ),
    !0
  ), Q(j, Vt().indexOf(g()), !0), s(R).init(), Gt(G), () => {
    var D;
    (D = s(R)) == null || D.destroy();
  })), Hn(() => {
    X && X();
  });
  function Rn(D) {
    return D in y ? y[D] : Yt().classList.contains(D);
  }
  function ce(D) {
    y[D] || (y[D] = !0);
  }
  function me(D) {
    (!(D in y) || y[D]) && (y[D] = !1);
  }
  function W(D, pe) {
    L[D] != pe && (pe === "" || pe == null ? delete L[D] : L[D] = pe);
  }
  function Z(D) {
    ie[D] || (ie[D] = !0);
  }
  function Me(D) {
    (!(D in ie) || ie[D]) && (ie[D] = !1);
  }
  function et(D) {
    return D in N ? N[D] ?? null : Yt().getAttribute(D);
  }
  function pt(D, pe) {
    N[D] !== pe && (N[D] = pe);
  }
  function Ot(D) {
    (!(D in N) || N[D] != null) && (N[D] = void 0);
  }
  function Vt() {
    return De.getOrderedList().map((D) => D.getValue());
  }
  function fr(D) {
    const pe = D.currentTarget.getBoundingClientRect();
    return (nt(D) ? D.touches[0].clientX : D.clientX) - pe.left;
  }
  function nt(D) {
    return "touches" in D;
  }
  function St() {
    if (s(R) == null)
      throw new Error("Instance is undefined.");
    return s(R).getUseDefaultValidation();
  }
  function Gt(D) {
    var pe;
    (pe = s(R)) == null || pe.setUseDefaultValidation(D);
  }
  function Fn() {
    $.focus();
  }
  function mi() {
    var D;
    (D = s(R)) == null || D.layout();
  }
  function Yt() {
    return ee;
  }
  var Ge = {
    getUseDefaultValidation: St,
    setUseDefaultValidation: Gt,
    focus: Fn,
    layout: mi,
    getElement: Yt
  }, at = Qm(), tt = Y(at);
  ke(tt, (D, pe, ct) => ({ class: D, style: pe, ...ct }), [
    () => He({
      "mdc-select": !0,
      "mdc-select--required": b(),
      "mdc-select--disabled": h(),
      "mdc-select--filled": f() === "filled",
      "mdc-select--outlined": f() === "outlined",
      "smui-select--standard": f() === "standard",
      "mdc-select--with-leading-icon": o(w()) ? e.leadingIcon : w(),
      "mdc-select--no-label": v() || m() == null,
      "mdc-select--invalid": T(),
      "mdc-select--activated": s(he),
      "mdc-data-table__pagination-rows-per-page-select": ue === "data-table:pagination",
      ...y,
      [l()]: !0
    }),
    () => Object.entries(L).map(([D, pe]) => `${D}: ${pe};`).concat([u()]).join(" "),
    () => ta(U, [
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
  var Rt = Ie(tt);
  {
    var Mt = (D) => {
      var pe = Ym();
      ke(
        pe,
        (ct) => ({
          type: "hidden",
          required: b(),
          disabled: h(),
          value: g(),
          ...ct
        }),
        [() => lt(U, "input$")],
        void 0,
        void 0,
        !0
      ), O(D, pe);
    };
    le(Rt, (D) => {
      x() && D(Mt);
    });
  }
  var rt = Ee(Rt, 2), yt = (D) => {
    var pe;
    $.focus(), s(R) && s(R).handleClick(fr(D)), (pe = e.anchor$onclick) == null || pe.call(e, D);
  }, xt = (D) => {
    var pe;
    s(R) && s(R).handleKeydown(D), (pe = e.onkeydown) == null || pe.call(e, D);
  }, Je = (D) => {
    var pe;
    s(R) && s(R).handleBlur(), Ke(Yt(), "blur", D), (pe = e.anchor$onblur) == null || pe.call(e, D);
  }, ft = (D) => {
    var pe;
    s(R) && s(R).handleFocus(), Ke(Yt(), "focus", D), (pe = e.anchor$onfocus) == null || pe.call(e, D);
  };
  ke(
    rt,
    (D, pe) => ({
      class: D,
      "aria-required": b() ? "true" : void 0,
      "aria-disabled": h() ? "true" : void 0,
      "aria-controls": s(de),
      "aria-expanded": s(he) ? "true" : "false",
      "aria-describedby": s(V),
      role: "combobox",
      tabindex: "0",
      ...N,
      ...pe,
      onclick: yt,
      onkeydown: xt,
      onblur: Je,
      onfocus: ft
    }),
    [
      () => He({ "mdc-select__anchor": !0, [C()]: !0 }),
      () => lt(U, "anchor$")
    ]
  );
  var yn = Ie(rt);
  {
    var sn = (D) => {
      var pe = Zm();
      O(D, pe);
    };
    le(yn, (D) => {
      f() === "filled" && D(sn);
    });
  }
  var It = Ee(yn, 2);
  {
    var Dt = (D) => {
      {
        let pe = /* @__PURE__ */ ae(() => _() + "-smui-label"), ct = /* @__PURE__ */ ae(() => n() !== ""), wt = /* @__PURE__ */ ae(() => lt(U, "label$"));
        Te(
          po(D, it(
            {
              get id() {
                return s(pe);
              },
              get floatAbove() {
                return s(ct);
              },
              get required() {
                return b();
              }
            },
            () => s(wt),
            {
              children: (Zn, Qn) => {
                var sa = re(), gi = Y(sa);
                {
                  var jr = (qr) => {
                  }, jo = (qr) => {
                    var qa = re(), la = Y(qa);
                    {
                      var hl = (vr) => {
                        var Wr = Xt();
                        Fe(() => vt(Wr, m())), O(vr, Wr);
                      }, Wa = (vr) => {
                        var Wr = re(), qo = Y(Wr);
                        Ae(qo, m), O(vr, Wr);
                      };
                      le(
                        la,
                        (vr) => {
                          typeof m() == "string" ? vr(hl) : vr(Wa, !1);
                        },
                        !0
                      );
                    }
                    O(qr, qa);
                  };
                  le(gi, (qr) => {
                    m() == null ? qr(jr) : qr(jo, !1);
                  });
                }
                O(Zn, sa);
              },
              $$slots: { default: !0 }
            }
          )),
          (Zn) => M = Zn,
          () => M
        );
      }
    };
    le(It, (D) => {
      f() !== "outlined" && !v() && m() != null && D(Dt);
    });
  }
  var Tt = Ee(It, 2);
  {
    var Zt = (D) => {
      {
        let pe = /* @__PURE__ */ ae(() => v() || m() == null), ct = /* @__PURE__ */ ae(() => lt(U, "outline$"));
        Te(
          Yc(D, it(
            {
              get noLabel() {
                return s(pe);
              }
            },
            () => s(ct),
            {
              children: (wt, Zn) => {
                var Qn = re(), sa = Y(Qn);
                {
                  var gi = (jr) => {
                    {
                      let jo = /* @__PURE__ */ ae(() => _() + "-smui-label"), qr = /* @__PURE__ */ ae(() => n() !== ""), qa = /* @__PURE__ */ ae(() => lt(U, "label$"));
                      Te(
                        po(jr, it(
                          {
                            get id() {
                              return s(jo);
                            },
                            get floatAbove() {
                              return s(qr);
                            },
                            get required() {
                              return b();
                            }
                          },
                          () => s(qa),
                          {
                            children: (la, hl) => {
                              var Wa = re(), vr = Y(Wa);
                              {
                                var Wr = (ua) => {
                                }, qo = (ua) => {
                                  var vl = re(), Rd = Y(vl);
                                  {
                                    var Md = (bi) => {
                                      var ca = Xt();
                                      Fe(() => vt(ca, m())), O(bi, ca);
                                    }, Dd = (bi) => {
                                      var ca = re(), Pd = Y(ca);
                                      Ae(Pd, m), O(bi, ca);
                                    };
                                    le(
                                      Rd,
                                      (bi) => {
                                        typeof m() == "string" ? bi(Md) : bi(Dd, !1);
                                      },
                                      !0
                                    );
                                  }
                                  O(ua, vl);
                                };
                                le(vr, (ua) => {
                                  m() == null ? ua(Wr) : ua(qo, !1);
                                });
                              }
                              O(la, Wa);
                            },
                            $$slots: { default: !0 }
                          }
                        )),
                        (la) => M = la,
                        () => M
                      );
                    }
                  };
                  le(sa, (jr) => {
                    !v() && m() != null && jr(gi);
                  });
                }
                O(wt, Qn);
              },
              $$slots: { default: !0 }
            }
          )),
          (wt) => te = wt,
          () => te
        );
      }
    };
    le(Tt, (D) => {
      f() === "outlined" && D(Zt);
    });
  }
  var Vr = Ee(Tt, 2);
  Ae(Vr, () => e.leadingIcon ?? ge);
  var In = Ee(Vr, 2);
  ke(In, (D, pe) => ({ class: D, ...pe }), [
    () => He({
      "mdc-select__selected-text-container": !0,
      [K()]: !0
    }),
    () => lt(U, "selectedTextContainer$")
  ]);
  var hr = Ie(In);
  ke(
    hr,
    (D, pe) => ({
      id: _() + "-smui-selected-text",
      class: D,
      role: "button",
      "aria-haspopup": "listbox",
      "aria-labelledby": _() + "-smui-label",
      ...pe
    }),
    [
      () => He({
        "mdc-select__selected-text": !0,
        [F()]: !0
      }),
      () => lt(U, "selectedText$")
    ]
  );
  var oa = Ie(hr);
  Be(hr, (D, pe) => z == null ? void 0 : z(D, pe), H), Be(In, (D, pe) => z == null ? void 0 : z(D, pe), P);
  var _n = Ee(In, 2);
  ke(_n, (D, pe) => ({ class: D, ...pe }), [
    () => He({
      "mdc-select__dropdown-icon": !0,
      [k()]: !0
    }),
    () => lt(U, "dropdownIcon$")
  ]), Be(_n, (D, pe) => z == null ? void 0 : z(D, pe), _e);
  var Yn = Ee(_n, 2);
  {
    var Bn = (D) => {
      {
        let pe = /* @__PURE__ */ ae(() => lt(U, "ripple$"));
        Te(Xc(D, it(() => s(pe))), (ct) => q = ct, () => q);
      }
    };
    le(Yn, (D) => {
      f() !== "outlined" && d() && D(Bn);
    });
  }
  Te(rt, (D) => $ = D, () => $), Be(rt, (D, pe) => z == null ? void 0 : z(D, pe), A);
  var Gr = Ee(rt, 2);
  {
    let D = /* @__PURE__ */ ae(() => He({
      "mdc-select__menu": !0,
      ...ie,
      [B()]: !0
    })), pe = /* @__PURE__ */ ae(() => lt(U, "menu$"));
    Bm(Gr, it(
      {
        get class() {
          return s(D);
        },
        get id() {
          return s(de);
        },
        fullWidth: !0,
        anchor: !1,
        get anchorElement() {
          return s(qe);
        },
        get anchorCorner() {
          return s(Ue);
        }
      },
      () => s(pe),
      {
        onSMUIMenuSelected: (ct) => {
          var wt;
          s(R) && s(R).handleMenuItemAction(ct.detail.index), (wt = e.onSMUIMenuSelected) == null || wt.call(e, ct);
        },
        onSMUIMenuSurfaceClosing: (ct) => {
          var wt;
          s(R) && s(R).handleMenuClosing(), (wt = e.onSMUIMenuSurfaceClosing) == null || wt.call(e, ct);
        },
        onSMUIMenuSurfaceClosed: (ct) => {
          var wt;
          s(R) && s(R).handleMenuClosed(), (wt = e.onSMUIMenuSurfaceClosed) == null || wt.call(e, ct);
        },
        onSMUIMenuSurfaceOpened: (ct) => {
          var wt;
          s(R) && s(R).handleMenuOpened(), (wt = e.onSMUIMenuSurfaceOpened) == null || wt.call(e, ct);
        },
        get open() {
          return s(he);
        },
        set open(ct) {
          Q(he, ct, !0);
        },
        children: (ct, wt) => {
          {
            let Zn = /* @__PURE__ */ ae(() => lt(U, "list$"));
            km(ct, it(
              {
                role: "listbox",
                get wrapFocus() {
                  return s(Xe);
                }
              },
              () => s(Zn),
              {
                get selectedIndex() {
                  return s(j);
                },
                set selectedIndex(Qn) {
                  Q(j, Qn, !0);
                },
                children: (Qn, sa) => {
                  var gi = re(), jr = Y(gi);
                  Ae(jr, () => e.children ?? ge), O(Qn, gi);
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
  Te(tt, (D) => ee = D, () => ee), Be(tt, (D, pe) => Kt == null ? void 0 : Kt(D, pe), () => ({
    ripple: f() === "filled",
    unbounded: !1,
    addClass: ce,
    removeClass: me,
    addStyle: W
  })), Be(tt, (D, pe) => is == null ? void 0 : is(D, pe), () => ({ addClass: ce, removeClass: me })), Be(tt, (D, pe) => z == null ? void 0 : z(D, pe), c);
  var Go = Ee(tt, 2);
  {
    var Ld = (D) => {
      {
        let pe = /* @__PURE__ */ ae(() => lt(U, "helperText$"));
        zm(D, it(() => s(pe), {
          children: (ct, wt) => {
            var Zn = re(), Qn = Y(Zn);
            Ae(Qn, () => e.helperText ?? ge), O(ct, Zn);
          },
          $$slots: { default: !0 }
        }));
      }
    };
    le(Go, (D) => {
      e.helperText && D(Ld);
    });
  }
  Fe(() => vt(oa, n())), O(t, at);
  var Od = Oe(Ge);
  return i(), Od;
}
function $m(t, e) {
  Le(e, !0);
  const n = () => Nt(d, "$selectedValue", r), [r, i] = Ln();
  let a = p(e, "use", 19, () => []);
  p(e, "class", 3, "");
  let o = p(e, "value", 3, ""), c = /* @__PURE__ */ ze(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "value",
    "children"
  ]), l;
  const u = oe("SMUI:select:selectedText"), d = oe("SMUI:select:value");
  ne("SMUI:list:item:role", "option");
  const h = /* @__PURE__ */ ae(() => o() != null && o() !== "" && n() === o());
  st(f), Hn(f);
  function f() {
    s(h) && l && mn(u, l.getPrimaryText());
  }
  function v() {
    return l.getElement();
  }
  var m = { getElement: v };
  Te(
    qm(t, it(
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
          return s(h);
        }
      },
      () => c,
      {
        children: (I, E) => {
          var T = re(), S = Y(T);
          Ae(S, () => e.children ?? ge), O(I, T);
        },
        $$slots: { default: !0 }
      }
    )),
    (I) => l = I,
    () => l
  );
  var g = Oe(m);
  return i(), g;
}
function su(t, e) {
  Le(e, !0);
  let n = p(e, "data", 19, () => []);
  p(e, "placeholder", 3, "");
  let r = p(e, "label", 3, "");
  p(e, "description", 3, "");
  let i = p(e, "value", 15), a = p(e, "required", 3, !1);
  p(e, "size", 3, "sm");
  let o = p(e, "variant", 3, "standard"), c = p(e, "selectedOptionIndex", 31, () => -1), l = p(e, "disabled", 3, !1);
  function u(d) {
    return () => c(d);
  }
  Jm(t, {
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
    children: (d, h) => {
      var f = re(), v = Y(f);
      rr(v, 17, n, Ia, (m, g, I) => {
        {
          let E = /* @__PURE__ */ ae(() => u(I));
          $m(m, {
            get onclick() {
              return s(E);
            },
            get value() {
              return s(g).value;
            },
            children: (T, S) => {
              var b = Xt();
              Fe(() => vt(b, s(g).label)), O(T, b);
            },
            $$slots: { default: !0 }
          });
        }
      }), O(d, f);
    },
    $$slots: { default: !0 }
  }), Oe();
}
var eg = /* @__PURE__ */ ve("<div><!></div>");
function $c(t, e) {
  Le(e, !0);
  let n = p(e, "use", 19, () => []), r = p(e, "class", 3, ""), i = p(e, "variant", 3, "raised"), a = p(e, "square", 3, !1), o = p(e, "color", 3, "default"), c = p(e, "elevation", 3, 1), l = p(e, "transition", 3, !1), u = /* @__PURE__ */ ze(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "variant",
    "square",
    "color",
    "elevation",
    "transition",
    "children"
  ]), d;
  function h() {
    return d;
  }
  var f = { getElement: h }, v = eg();
  ke(v, (g) => ({ class: g, ...u }), [
    () => He({
      "smui-paper": !0,
      "smui-paper--raised": i() === "raised",
      "smui-paper--unelevated": i() === "unelevated",
      "smui-paper--outlined": i() === "outlined",
      ["smui-paper--elevation-z" + c()]: c() !== 0 && i() === "raised",
      "smui-paper--rounded": !a(),
      ["smui-paper--color-" + o()]: o() !== "default",
      "smui-paper-transition": l(),
      [r()]: !0
    })
  ]);
  var m = Ie(v);
  return Ae(m, () => e.children ?? ge), Te(v, (g) => d = g, () => d), Be(v, (g, I) => z == null ? void 0 : z(g, I), n), O(t, v), Oe(f);
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
var Os;
(function(t) {
  t.POLITE = "polite", t.ASSERTIVE = "assertive";
})(Os || (Os = {}));
var tg = "data-mdc-dom-announce";
function ng(t, e) {
  rg.getInstance().say(t, e);
}
var rg = (
  /** @class */
  function() {
    function t() {
      this.liveRegions = /* @__PURE__ */ new Map();
    }
    return t.getInstance = function() {
      return t.instance || (t.instance = new t()), t.instance;
    }, t.prototype.say = function(e, n) {
      var r, i, a = (r = n == null ? void 0 : n.priority) !== null && r !== void 0 ? r : Os.POLITE, o = (i = n == null ? void 0 : n.ownerDocument) !== null && i !== void 0 ? i : document, c = this.getLiveRegion(a, o);
      c.textContent = "", setTimeout(function() {
        c.textContent = e, o.addEventListener("click", l);
      }, 1);
      function l() {
        c.textContent = "", o.removeEventListener("click", l);
      }
    }, t.prototype.getLiveRegion = function(e, n) {
      var r = this.liveRegions.get(n);
      r || (r = /* @__PURE__ */ new Map(), this.liveRegions.set(n, r));
      var i = r.get(e);
      if (i && n.body.contains(i))
        return i;
      var a = this.createLiveRegion(e, n);
      return r.set(e, a), a;
    }, t.prototype.createLiveRegion = function(e, n) {
      var r = n.createElement("div");
      return r.style.position = "absolute", r.style.top = "-9999px", r.style.left = "-9999px", r.style.height = "1px", r.style.overflow = "hidden", r.setAttribute("aria-atomic", "true"), r.setAttribute("aria-live", e), r.setAttribute(tg, "true"), n.body.appendChild(r), r;
    }, t;
  }()
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
var gr;
(function(t) {
  t[t.UNSPECIFIED = 0] = "UNSPECIFIED", t[t.CLICK = 1] = "CLICK", t[t.BACKSPACE_KEY = 2] = "BACKSPACE_KEY", t[t.DELETE_KEY = 3] = "DELETE_KEY", t[t.SPACEBAR_KEY = 4] = "SPACEBAR_KEY", t[t.ENTER_KEY = 5] = "ENTER_KEY";
})(gr || (gr = {}));
var Nn = {
  ARIA_HIDDEN: "aria-hidden",
  INTERACTION_EVENT: "MDCChipTrailingAction:interaction",
  NAVIGATION_EVENT: "MDCChipTrailingAction:navigation",
  TAB_INDEX: "tabindex"
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
var ed = (
  /** @class */
  function(t) {
    $e(e, t);
    function e(n) {
      return t.call(this, fe(fe({}, e.defaultAdapter), n)) || this;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return Nn;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
      get: function() {
        return {
          focus: function() {
          },
          getAttribute: function() {
            return null;
          },
          setAttribute: function() {
          },
          notifyInteraction: function() {
          },
          notifyNavigation: function() {
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.handleClick = function(n) {
      n.stopPropagation(), this.adapter.notifyInteraction(gr.CLICK);
    }, e.prototype.handleKeydown = function(n) {
      n.stopPropagation();
      var r = gt(n);
      if (this.shouldNotifyInteractionFromKey(r)) {
        var i = this.getTriggerFromKey(r);
        this.adapter.notifyInteraction(i);
        return;
      }
      if (xp(n)) {
        this.adapter.notifyNavigation(r);
        return;
      }
    }, e.prototype.removeFocus = function() {
      this.adapter.setAttribute(Nn.TAB_INDEX, "-1");
    }, e.prototype.focus = function() {
      this.adapter.setAttribute(Nn.TAB_INDEX, "0"), this.adapter.focus();
    }, e.prototype.isNavigable = function() {
      return this.adapter.getAttribute(Nn.ARIA_HIDDEN) !== "true";
    }, e.prototype.shouldNotifyInteractionFromKey = function(n) {
      var r = n === Re.ENTER || n === Re.SPACEBAR, i = n === Re.BACKSPACE || n === Re.DELETE;
      return r || i;
    }, e.prototype.getTriggerFromKey = function(n) {
      return n === Re.SPACEBAR ? gr.SPACEBAR_KEY : n === Re.ENTER ? gr.ENTER_KEY : n === Re.DELETE ? gr.DELETE_KEY : n === Re.BACKSPACE ? gr.BACKSPACE_KEY : gr.UNSPECIFIED;
    }, e;
  }(Ut)
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
var td = (
  /** @class */
  function(t) {
    $e(e, t);
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return Object.defineProperty(e.prototype, "ripple", {
      get: function() {
        return this.rippleSurface;
      },
      enumerable: !1,
      configurable: !0
    }), e.attachTo = function(n) {
      return new e(n);
    }, e.prototype.initialize = function(n) {
      n === void 0 && (n = function(i, a) {
        return new vo(i, a);
      });
      var r = vo.createAdapter(this);
      this.rippleSurface = n(this.root, new Ho(r));
    }, e.prototype.initialSyncWithDOM = function() {
      var n = this;
      this.handleClick = function(r) {
        n.foundation.handleClick(r);
      }, this.handleKeydown = function(r) {
        n.foundation.handleKeydown(r);
      }, this.listen("click", this.handleClick), this.listen("keydown", this.handleKeydown);
    }, e.prototype.destroy = function() {
      this.rippleSurface.destroy(), this.unlisten("click", this.handleClick), this.unlisten("keydown", this.handleKeydown), t.prototype.destroy.call(this);
    }, e.prototype.getDefaultFoundation = function() {
      var n = this, r = {
        focus: function() {
          n.root.focus();
        },
        getAttribute: function(i) {
          return n.root.getAttribute(i);
        },
        notifyInteraction: function(i) {
          return n.emit(
            Nn.INTERACTION_EVENT,
            { trigger: i },
            !0
            /* shouldBubble */
          );
        },
        notifyNavigation: function(i) {
          n.emit(
            Nn.NAVIGATION_EVENT,
            { key: i },
            !0
            /* shouldBubble */
          );
        },
        setAttribute: function(i, a) {
          n.root.setAttribute(i, a);
        }
      };
      return new ed(r);
    }, e.prototype.isNavigable = function() {
      return this.foundation.isNavigable();
    }, e.prototype.focus = function() {
      this.foundation.focus();
    }, e.prototype.removeFocus = function() {
      this.foundation.removeFocus();
    }, e;
  }(No)
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
var Wn;
(function(t) {
  t.LEFT = "left", t.RIGHT = "right";
})(Wn || (Wn = {}));
var ir;
(function(t) {
  t.PRIMARY = "primary", t.TRAILING = "trailing", t.NONE = "none";
})(ir || (ir = {}));
var Se = {
  ADDED_ANNOUNCEMENT_ATTRIBUTE: "data-mdc-chip-added-announcement",
  ARIA_CHECKED: "aria-checked",
  ARROW_DOWN_KEY: "ArrowDown",
  ARROW_LEFT_KEY: "ArrowLeft",
  ARROW_RIGHT_KEY: "ArrowRight",
  ARROW_UP_KEY: "ArrowUp",
  BACKSPACE_KEY: "Backspace",
  CHECKMARK_SELECTOR: ".mdc-chip__checkmark",
  DELETE_KEY: "Delete",
  END_KEY: "End",
  ENTER_KEY: "Enter",
  ENTRY_ANIMATION_NAME: "mdc-chip-entry",
  HOME_KEY: "Home",
  IE_ARROW_DOWN_KEY: "Down",
  IE_ARROW_LEFT_KEY: "Left",
  IE_ARROW_RIGHT_KEY: "Right",
  IE_ARROW_UP_KEY: "Up",
  IE_DELETE_KEY: "Del",
  INTERACTION_EVENT: "MDCChip:interaction",
  LEADING_ICON_SELECTOR: ".mdc-chip__icon--leading",
  NAVIGATION_EVENT: "MDCChip:navigation",
  PRIMARY_ACTION_SELECTOR: ".mdc-chip__primary-action",
  REMOVED_ANNOUNCEMENT_ATTRIBUTE: "data-mdc-chip-removed-announcement",
  REMOVAL_EVENT: "MDCChip:removal",
  SELECTION_EVENT: "MDCChip:selection",
  SPACEBAR_KEY: " ",
  TAB_INDEX: "tabindex",
  TRAILING_ACTION_SELECTOR: ".mdc-chip-trailing-action",
  TRAILING_ICON_INTERACTION_EVENT: "MDCChip:trailingIconInteraction",
  TRAILING_ICON_SELECTOR: ".mdc-chip__icon--trailing"
}, Et = {
  CHECKMARK: "mdc-chip__checkmark",
  CHIP_EXIT: "mdc-chip--exit",
  DELETABLE: "mdc-chip--deletable",
  EDITABLE: "mdc-chip--editable",
  EDITING: "mdc-chip--editing",
  HIDDEN_LEADING_ICON: "mdc-chip__icon--leading-hidden",
  LEADING_ICON: "mdc-chip__icon--leading",
  PRIMARY_ACTION: "mdc-chip__primary-action",
  PRIMARY_ACTION_FOCUSED: "mdc-chip--primary-action-focused",
  SELECTED: "mdc-chip--selected",
  TEXT: "mdc-chip__text",
  TRAILING_ACTION: "mdc-chip__trailing-action",
  TRAILING_ICON: "mdc-chip__icon--trailing"
}, On = /* @__PURE__ */ new Set();
On.add(Se.ARROW_LEFT_KEY);
On.add(Se.ARROW_RIGHT_KEY);
On.add(Se.ARROW_DOWN_KEY);
On.add(Se.ARROW_UP_KEY);
On.add(Se.END_KEY);
On.add(Se.HOME_KEY);
On.add(Se.IE_ARROW_LEFT_KEY);
On.add(Se.IE_ARROW_RIGHT_KEY);
On.add(Se.IE_ARROW_DOWN_KEY);
On.add(Se.IE_ARROW_UP_KEY);
var Br = /* @__PURE__ */ new Set();
Br.add(Se.ARROW_UP_KEY);
Br.add(Se.ARROW_DOWN_KEY);
Br.add(Se.HOME_KEY);
Br.add(Se.END_KEY);
Br.add(Se.IE_ARROW_UP_KEY);
Br.add(Se.IE_ARROW_DOWN_KEY);
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
  bottom: 0,
  height: 0,
  left: 0,
  right: 0,
  top: 0,
  width: 0
}, Ti;
(function(t) {
  t[t.SHOULD_FOCUS = 0] = "SHOULD_FOCUS", t[t.SHOULD_NOT_FOCUS = 1] = "SHOULD_NOT_FOCUS";
})(Ti || (Ti = {}));
var al = (
  /** @class */
  function(t) {
    $e(e, t);
    function e(n) {
      var r = t.call(this, fe(fe({}, e.defaultAdapter), n)) || this;
      return r.shouldRemoveOnTrailingIconClick = !0, r.shouldFocusPrimaryActionOnClick = !0, r;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return Se;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Et;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
      get: function() {
        return {
          addClass: function() {
          },
          addClassToLeadingIcon: function() {
          },
          eventTargetHasClass: function() {
            return !1;
          },
          focusPrimaryAction: function() {
          },
          focusTrailingAction: function() {
          },
          getAttribute: function() {
            return null;
          },
          getCheckmarkBoundingClientRect: function() {
            return lu;
          },
          getComputedStyleValue: function() {
            return "";
          },
          getRootBoundingClientRect: function() {
            return lu;
          },
          hasClass: function() {
            return !1;
          },
          hasLeadingIcon: function() {
            return !1;
          },
          isRTL: function() {
            return !1;
          },
          isTrailingActionNavigable: function() {
            return !1;
          },
          notifyEditFinish: function() {
          },
          notifyEditStart: function() {
          },
          notifyInteraction: function() {
          },
          notifyNavigation: function() {
          },
          notifyRemoval: function() {
          },
          notifySelection: function() {
          },
          notifyTrailingIconInteraction: function() {
          },
          removeClass: function() {
          },
          removeClassFromLeadingIcon: function() {
          },
          removeTrailingActionFocus: function() {
          },
          setPrimaryActionAttr: function() {
          },
          setStyleProperty: function() {
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.isSelected = function() {
      return this.adapter.hasClass(Et.SELECTED);
    }, e.prototype.isEditable = function() {
      return this.adapter.hasClass(Et.EDITABLE);
    }, e.prototype.isEditing = function() {
      return this.adapter.hasClass(Et.EDITING);
    }, e.prototype.setSelected = function(n) {
      this.setSelectedImpl(n), this.notifySelection(n);
    }, e.prototype.setSelectedFromChipSet = function(n, r) {
      this.setSelectedImpl(n), r && this.notifyIgnoredSelection(n);
    }, e.prototype.getShouldRemoveOnTrailingIconClick = function() {
      return this.shouldRemoveOnTrailingIconClick;
    }, e.prototype.setShouldRemoveOnTrailingIconClick = function(n) {
      this.shouldRemoveOnTrailingIconClick = n;
    }, e.prototype.setShouldFocusPrimaryActionOnClick = function(n) {
      this.shouldFocusPrimaryActionOnClick = n;
    }, e.prototype.getDimensions = function() {
      var n = this, r = function() {
        return n.adapter.getRootBoundingClientRect();
      }, i = function() {
        return n.adapter.getCheckmarkBoundingClientRect();
      };
      if (!this.adapter.hasLeadingIcon()) {
        var a = i();
        if (a) {
          var o = r();
          return {
            bottom: o.bottom,
            height: o.height,
            left: o.left,
            right: o.right,
            top: o.top,
            width: o.width + a.height
          };
        }
      }
      return r();
    }, e.prototype.beginExit = function() {
      this.adapter.addClass(Et.CHIP_EXIT);
    }, e.prototype.handleClick = function() {
      this.adapter.notifyInteraction(), this.setPrimaryActionFocusable(this.getFocusBehavior());
    }, e.prototype.handleDoubleClick = function() {
      this.isEditable() && this.startEditing();
    }, e.prototype.handleTransitionEnd = function(n) {
      var r = this, i = this.adapter.eventTargetHasClass(n.target, Et.CHIP_EXIT), a = n.propertyName === "width", o = n.propertyName === "opacity";
      if (i && o) {
        var c = this.adapter.getComputedStyleValue("width");
        requestAnimationFrame(function() {
          r.adapter.setStyleProperty("width", c), r.adapter.setStyleProperty("padding", "0"), r.adapter.setStyleProperty("margin", "0"), requestAnimationFrame(function() {
            r.adapter.setStyleProperty("width", "0");
          });
        });
        return;
      }
      if (i && a) {
        this.removeFocus();
        var l = this.adapter.getAttribute(Se.REMOVED_ANNOUNCEMENT_ATTRIBUTE);
        this.adapter.notifyRemoval(l);
      }
      if (o) {
        var u = this.adapter.eventTargetHasClass(n.target, Et.LEADING_ICON) && this.adapter.hasClass(Et.SELECTED), d = this.adapter.eventTargetHasClass(n.target, Et.CHECKMARK) && !this.adapter.hasClass(Et.SELECTED);
        if (u) {
          this.adapter.addClassToLeadingIcon(Et.HIDDEN_LEADING_ICON);
          return;
        }
        if (d) {
          this.adapter.removeClassFromLeadingIcon(Et.HIDDEN_LEADING_ICON);
          return;
        }
      }
    }, e.prototype.handleFocusIn = function(n) {
      this.eventFromPrimaryAction(n) && this.adapter.addClass(Et.PRIMARY_ACTION_FOCUSED);
    }, e.prototype.handleFocusOut = function(n) {
      this.eventFromPrimaryAction(n) && (this.isEditing() && this.finishEditing(), this.adapter.removeClass(Et.PRIMARY_ACTION_FOCUSED));
    }, e.prototype.handleTrailingActionInteraction = function() {
      this.adapter.notifyTrailingIconInteraction(), this.removeChip();
    }, e.prototype.handleKeydown = function(n) {
      if (this.isEditing()) {
        this.shouldFinishEditing(n) && (n.preventDefault(), this.finishEditing());
        return;
      }
      if (this.isEditable() && this.shouldStartEditing(n) && (n.preventDefault(), this.startEditing()), this.shouldNotifyInteraction(n)) {
        this.adapter.notifyInteraction(), this.setPrimaryActionFocusable(this.getFocusBehavior());
        return;
      }
      if (this.isDeleteAction(n)) {
        n.preventDefault(), this.removeChip();
        return;
      }
      On.has(n.key) && (n.preventDefault(), this.focusNextAction(n.key, ir.PRIMARY));
    }, e.prototype.handleTrailingActionNavigation = function(n) {
      this.focusNextAction(n.detail.key, ir.TRAILING);
    }, e.prototype.removeFocus = function() {
      this.adapter.setPrimaryActionAttr(Se.TAB_INDEX, "-1"), this.adapter.removeTrailingActionFocus();
    }, e.prototype.focusPrimaryAction = function() {
      this.setPrimaryActionFocusable(Ti.SHOULD_FOCUS);
    }, e.prototype.focusTrailingAction = function() {
      var n = this.adapter.isTrailingActionNavigable();
      if (n) {
        this.adapter.setPrimaryActionAttr(Se.TAB_INDEX, "-1"), this.adapter.focusTrailingAction();
        return;
      }
      this.focusPrimaryAction();
    }, e.prototype.setPrimaryActionFocusable = function(n) {
      this.adapter.setPrimaryActionAttr(Se.TAB_INDEX, "0"), n === Ti.SHOULD_FOCUS && this.adapter.focusPrimaryAction(), this.adapter.removeTrailingActionFocus();
    }, e.prototype.getFocusBehavior = function() {
      return this.shouldFocusPrimaryActionOnClick ? Ti.SHOULD_FOCUS : Ti.SHOULD_NOT_FOCUS;
    }, e.prototype.focusNextAction = function(n, r) {
      var i = this.adapter.isTrailingActionNavigable(), a = this.getDirection(n);
      if (Br.has(n) || !i) {
        this.adapter.notifyNavigation(n, r);
        return;
      }
      if (r === ir.PRIMARY && a === Wn.RIGHT) {
        this.focusTrailingAction();
        return;
      }
      if (r === ir.TRAILING && a === Wn.LEFT) {
        this.focusPrimaryAction();
        return;
      }
      this.adapter.notifyNavigation(n, ir.NONE);
    }, e.prototype.getDirection = function(n) {
      var r = this.adapter.isRTL(), i = n === Se.ARROW_LEFT_KEY || n === Se.IE_ARROW_LEFT_KEY, a = n === Se.ARROW_RIGHT_KEY || n === Se.IE_ARROW_RIGHT_KEY;
      return !r && i || r && a ? Wn.LEFT : Wn.RIGHT;
    }, e.prototype.removeChip = function() {
      this.shouldRemoveOnTrailingIconClick && this.beginExit();
    }, e.prototype.shouldStartEditing = function(n) {
      return this.eventFromPrimaryAction(n) && n.key === Se.ENTER_KEY;
    }, e.prototype.shouldFinishEditing = function(n) {
      return n.key === Se.ENTER_KEY;
    }, e.prototype.shouldNotifyInteraction = function(n) {
      return n.key === Se.ENTER_KEY || n.key === Se.SPACEBAR_KEY;
    }, e.prototype.isDeleteAction = function(n) {
      var r = this.adapter.hasClass(Et.DELETABLE);
      return r && (n.key === Se.BACKSPACE_KEY || n.key === Se.DELETE_KEY || n.key === Se.IE_DELETE_KEY);
    }, e.prototype.setSelectedImpl = function(n) {
      n ? (this.adapter.addClass(Et.SELECTED), this.adapter.setPrimaryActionAttr(Se.ARIA_CHECKED, "true")) : (this.adapter.removeClass(Et.SELECTED), this.adapter.setPrimaryActionAttr(Se.ARIA_CHECKED, "false"));
    }, e.prototype.notifySelection = function(n) {
      this.adapter.notifySelection(n, !1);
    }, e.prototype.notifyIgnoredSelection = function(n) {
      this.adapter.notifySelection(n, !0);
    }, e.prototype.eventFromPrimaryAction = function(n) {
      return this.adapter.eventTargetHasClass(n.target, Et.PRIMARY_ACTION);
    }, e.prototype.startEditing = function() {
      this.adapter.addClass(Et.EDITING), this.adapter.notifyEditStart();
    }, e.prototype.finishEditing = function() {
      this.adapter.removeClass(Et.EDITING), this.adapter.notifyEditFinish();
    }, e;
  }(Ut)
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
var nd = (
  /** @class */
  function(t) {
    $e(e, t);
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return Object.defineProperty(e.prototype, "selected", {
      /**
       * @return Whether the chip is selected.
       */
      get: function() {
        return this.foundation.isSelected();
      },
      /**
       * Sets selected state on the chip.
       */
      set: function(n) {
        this.foundation.setSelected(n);
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "shouldRemoveOnTrailingIconClick", {
      /**
       * @return Whether a trailing icon click should trigger exit/removal of the chip.
       */
      get: function() {
        return this.foundation.getShouldRemoveOnTrailingIconClick();
      },
      /**
       * Sets whether a trailing icon click should trigger exit/removal of the chip.
       */
      set: function(n) {
        this.foundation.setShouldRemoveOnTrailingIconClick(n);
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "setShouldFocusPrimaryActionOnClick", {
      /**
       * Sets whether a clicking on the chip should focus the primary action.
       */
      set: function(n) {
        this.foundation.setShouldFocusPrimaryActionOnClick(n);
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "ripple", {
      get: function() {
        return this.rippleSurface;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "id", {
      get: function() {
        return this.root.id;
      },
      enumerable: !1,
      configurable: !0
    }), e.attachTo = function(n) {
      return new e(n);
    }, e.prototype.initialize = function(n, r) {
      var i = this;
      n === void 0 && (n = function(c, l) {
        return new vo(c, l);
      }), r === void 0 && (r = function(c) {
        return new td(c);
      }), this.leadingIcon = this.root.querySelector(Se.LEADING_ICON_SELECTOR), this.checkmark = this.root.querySelector(Se.CHECKMARK_SELECTOR), this.primaryAction = this.root.querySelector(Se.PRIMARY_ACTION_SELECTOR);
      var a = this.root.querySelector(Se.TRAILING_ACTION_SELECTOR);
      a && (this.trailingAction = r(a));
      var o = fe(fe({}, vo.createAdapter(this)), { computeBoundingRect: function() {
        return i.foundation.getDimensions();
      } });
      this.rippleSurface = n(this.root, new Ho(o));
    }, e.prototype.initialSyncWithDOM = function() {
      var n = this;
      this.handleTrailingActionInteraction = function() {
        n.foundation.handleTrailingActionInteraction();
      }, this.handleTrailingActionNavigation = function(r) {
        n.foundation.handleTrailingActionNavigation(r);
      }, this.handleClick = function() {
        n.foundation.handleClick();
      }, this.handleKeydown = function(r) {
        n.foundation.handleKeydown(r);
      }, this.handleTransitionEnd = function(r) {
        n.foundation.handleTransitionEnd(r);
      }, this.handleFocusIn = function(r) {
        n.foundation.handleFocusIn(r);
      }, this.handleFocusOut = function(r) {
        n.foundation.handleFocusOut(r);
      }, this.listen("transitionend", this.handleTransitionEnd), this.listen("click", this.handleClick), this.listen("keydown", this.handleKeydown), this.listen("focusin", this.handleFocusIn), this.listen("focusout", this.handleFocusOut), this.trailingAction && (this.listen(Nn.INTERACTION_EVENT, this.handleTrailingActionInteraction), this.listen(Nn.NAVIGATION_EVENT, this.handleTrailingActionNavigation));
    }, e.prototype.destroy = function() {
      this.rippleSurface.destroy(), this.unlisten("transitionend", this.handleTransitionEnd), this.unlisten("keydown", this.handleKeydown), this.unlisten("click", this.handleClick), this.unlisten("focusin", this.handleFocusIn), this.unlisten("focusout", this.handleFocusOut), this.trailingAction && (this.unlisten(Nn.INTERACTION_EVENT, this.handleTrailingActionInteraction), this.unlisten(Nn.NAVIGATION_EVENT, this.handleTrailingActionNavigation)), t.prototype.destroy.call(this);
    }, e.prototype.beginExit = function() {
      this.foundation.beginExit();
    }, e.prototype.getDefaultFoundation = function() {
      var n = this, r = {
        addClass: function(i) {
          return n.root.classList.add(i);
        },
        addClassToLeadingIcon: function(i) {
          n.leadingIcon && n.leadingIcon.classList.add(i);
        },
        eventTargetHasClass: function(i, a) {
          return i ? i.classList.contains(a) : !1;
        },
        focusPrimaryAction: function() {
          n.primaryAction && n.primaryAction.focus();
        },
        focusTrailingAction: function() {
          n.trailingAction && n.trailingAction.focus();
        },
        getAttribute: function(i) {
          return n.root.getAttribute(i);
        },
        getCheckmarkBoundingClientRect: function() {
          return n.checkmark ? n.checkmark.getBoundingClientRect() : null;
        },
        getComputedStyleValue: function(i) {
          return window.getComputedStyle(n.root).getPropertyValue(i);
        },
        getRootBoundingClientRect: function() {
          return n.root.getBoundingClientRect();
        },
        hasClass: function(i) {
          return n.root.classList.contains(i);
        },
        hasLeadingIcon: function() {
          return !!n.leadingIcon;
        },
        isRTL: function() {
          return window.getComputedStyle(n.root).getPropertyValue("direction") === "rtl";
        },
        isTrailingActionNavigable: function() {
          return n.trailingAction ? n.trailingAction.isNavigable() : !1;
        },
        notifyInteraction: function() {
          return n.emit(
            Se.INTERACTION_EVENT,
            { chipId: n.id },
            !0
            /* shouldBubble */
          );
        },
        notifyNavigation: function(i, a) {
          return n.emit(
            Se.NAVIGATION_EVENT,
            { chipId: n.id, key: i, source: a },
            !0
            /* shouldBubble */
          );
        },
        notifyRemoval: function(i) {
          n.emit(
            Se.REMOVAL_EVENT,
            { chipId: n.id, removedAnnouncement: i },
            !0
            /* shouldBubble */
          );
        },
        notifySelection: function(i, a) {
          return n.emit(
            Se.SELECTION_EVENT,
            { chipId: n.id, selected: i, shouldIgnore: a },
            !0
            /* shouldBubble */
          );
        },
        notifyTrailingIconInteraction: function() {
          return n.emit(
            Se.TRAILING_ICON_INTERACTION_EVENT,
            { chipId: n.id },
            !0
            /* shouldBubble */
          );
        },
        notifyEditStart: function() {
        },
        notifyEditFinish: function() {
        },
        removeClass: function(i) {
          return n.root.classList.remove(i);
        },
        removeClassFromLeadingIcon: function(i) {
          n.leadingIcon && n.leadingIcon.classList.remove(i);
        },
        removeTrailingActionFocus: function() {
          n.trailingAction && n.trailingAction.removeFocus();
        },
        setPrimaryActionAttr: function(i, a) {
          n.primaryAction && n.primaryAction.setAttribute(i, a);
        },
        setStyleProperty: function(i, a) {
          return n.root.style.setProperty(i, a);
        }
      };
      return new al(r);
    }, e.prototype.setSelectedFromChipSet = function(n, r) {
      this.foundation.setSelectedFromChipSet(n, r);
    }, e.prototype.focusPrimaryAction = function() {
      this.foundation.focusPrimaryAction();
    }, e.prototype.focusTrailingAction = function() {
      this.foundation.focusTrailingAction();
    }, e.prototype.removeFocus = function() {
      this.foundation.removeFocus();
    }, e.prototype.remove = function() {
      var n = this.root.parentNode;
      n !== null && n.removeChild(this.root);
    }, e;
  }(No)
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
var rd = {
  CHIP_SELECTOR: ".mdc-chip"
}, Aa = {
  CHOICE: "mdc-chip-set--choice",
  FILTER: "mdc-chip-set--filter"
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
var ol = (
  /** @class */
  function(t) {
    $e(e, t);
    function e(n) {
      var r = t.call(this, fe(fe({}, e.defaultAdapter), n)) || this;
      return r.selectedChipIds = [], r;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return rd;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Aa;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
      get: function() {
        return {
          announceMessage: function() {
          },
          focusChipPrimaryActionAtIndex: function() {
          },
          focusChipTrailingActionAtIndex: function() {
          },
          getChipListCount: function() {
            return -1;
          },
          getIndexOfChipById: function() {
            return -1;
          },
          hasClass: function() {
            return !1;
          },
          isRTL: function() {
            return !1;
          },
          removeChipAtIndex: function() {
          },
          removeFocusFromChipAtIndex: function() {
          },
          selectChipAtIndex: function() {
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.getSelectedChipIds = function() {
      return this.selectedChipIds.slice();
    }, e.prototype.select = function(n) {
      this.selectImpl(n, !1);
    }, e.prototype.handleChipInteraction = function(n) {
      var r = n.chipId, i = this.adapter.getIndexOfChipById(r);
      this.removeFocusFromChipsExcept(i), (this.adapter.hasClass(Aa.CHOICE) || this.adapter.hasClass(Aa.FILTER)) && this.toggleSelect(r);
    }, e.prototype.handleChipSelection = function(n) {
      var r = n.chipId, i = n.selected, a = n.shouldIgnore;
      if (!a) {
        var o = this.selectedChipIds.indexOf(r) >= 0;
        i && !o ? this.select(r) : !i && o && this.deselectImpl(r);
      }
    }, e.prototype.handleChipRemoval = function(n) {
      var r = n.chipId, i = n.removedAnnouncement;
      i && this.adapter.announceMessage(i);
      var a = this.adapter.getIndexOfChipById(r);
      this.deselectAndNotifyClients(r), this.adapter.removeChipAtIndex(a);
      var o = this.adapter.getChipListCount() - 1;
      if (!(o < 0)) {
        var c = Math.min(a, o);
        this.removeFocusFromChipsExcept(c), this.adapter.focusChipTrailingActionAtIndex(c);
      }
    }, e.prototype.handleChipNavigation = function(n) {
      var r = n.chipId, i = n.key, a = n.source, o = this.adapter.getChipListCount() - 1, c = this.adapter.getIndexOfChipById(r);
      if (!(c === -1 || !On.has(i))) {
        var l = this.adapter.isRTL(), u = i === Se.ARROW_LEFT_KEY || i === Se.IE_ARROW_LEFT_KEY, d = i === Se.ARROW_RIGHT_KEY || i === Se.IE_ARROW_RIGHT_KEY, h = i === Se.ARROW_DOWN_KEY || i === Se.IE_ARROW_DOWN_KEY, f = !l && d || l && u || h, v = i === Se.HOME_KEY, m = i === Se.END_KEY;
        f ? c++ : v ? c = 0 : m ? c = o : c--, !(c < 0 || c > o) && (this.removeFocusFromChipsExcept(c), this.focusChipAction(c, i, a));
      }
    }, e.prototype.focusChipAction = function(n, r, i) {
      var a = Br.has(r);
      if (a && i === ir.PRIMARY)
        return this.adapter.focusChipPrimaryActionAtIndex(n);
      if (a && i === ir.TRAILING)
        return this.adapter.focusChipTrailingActionAtIndex(n);
      var o = this.getDirection(r);
      if (o === Wn.LEFT)
        return this.adapter.focusChipTrailingActionAtIndex(n);
      if (o === Wn.RIGHT)
        return this.adapter.focusChipPrimaryActionAtIndex(n);
    }, e.prototype.getDirection = function(n) {
      var r = this.adapter.isRTL(), i = n === Se.ARROW_LEFT_KEY || n === Se.IE_ARROW_LEFT_KEY, a = n === Se.ARROW_RIGHT_KEY || n === Se.IE_ARROW_RIGHT_KEY;
      return !r && i || r && a ? Wn.LEFT : Wn.RIGHT;
    }, e.prototype.deselectImpl = function(n, r) {
      r === void 0 && (r = !1);
      var i = this.selectedChipIds.indexOf(n);
      if (i >= 0) {
        this.selectedChipIds.splice(i, 1);
        var a = this.adapter.getIndexOfChipById(n);
        this.adapter.selectChipAtIndex(
          a,
          /** isSelected */
          !1,
          r
        );
      }
    }, e.prototype.deselectAndNotifyClients = function(n) {
      this.deselectImpl(n, !0);
    }, e.prototype.toggleSelect = function(n) {
      this.selectedChipIds.indexOf(n) >= 0 ? this.deselectAndNotifyClients(n) : this.selectAndNotifyClients(n);
    }, e.prototype.removeFocusFromChipsExcept = function(n) {
      for (var r = this.adapter.getChipListCount(), i = 0; i < r; i++)
        i !== n && this.adapter.removeFocusFromChipAtIndex(i);
    }, e.prototype.selectAndNotifyClients = function(n) {
      this.selectImpl(n, !0);
    }, e.prototype.selectImpl = function(n, r) {
      if (!(this.selectedChipIds.indexOf(n) >= 0)) {
        if (this.adapter.hasClass(Aa.CHOICE) && this.selectedChipIds.length > 0) {
          var i = this.selectedChipIds[0], a = this.adapter.getIndexOfChipById(i);
          this.selectedChipIds = [], this.adapter.selectChipAtIndex(
            a,
            /** isSelected */
            !1,
            r
          );
        }
        this.selectedChipIds.push(n);
        var o = this.adapter.getIndexOfChipById(n);
        this.adapter.selectChipAtIndex(
          o,
          /** isSelected */
          !0,
          r
        );
      }
    }, e;
  }(Ut)
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
var Fo = al.strings, uu = Fo.INTERACTION_EVENT, cu = Fo.SELECTION_EVENT, du = Fo.REMOVAL_EVENT, fu = Fo.NAVIGATION_EVENT, ig = ol.strings.CHIP_SELECTOR, hu = 0, ag = (
  /** @class */
  function(t) {
    $e(e, t);
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return e.attachTo = function(n) {
      return new e(n);
    }, Object.defineProperty(e.prototype, "chips", {
      get: function() {
        return this.chipsList.slice();
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "selectedChipIds", {
      /**
       * @return An array of the IDs of all selected chips.
       */
      get: function() {
        return this.foundation.getSelectedChipIds();
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.initialize = function(n) {
      n === void 0 && (n = function(r) {
        return new nd(r);
      }), this.chipFactory = n, this.chipsList = this.instantiateChips(this.chipFactory);
    }, e.prototype.initialSyncWithDOM = function() {
      var n, r, i = this;
      try {
        for (var a = Lt(this.chipsList), o = a.next(); !o.done; o = a.next()) {
          var c = o.value;
          c.id && c.selected && this.foundation.select(c.id);
        }
      } catch (l) {
        n = { error: l };
      } finally {
        try {
          o && !o.done && (r = a.return) && r.call(a);
        } finally {
          if (n) throw n.error;
        }
      }
      this.handleChipInteraction = function(l) {
        return i.foundation.handleChipInteraction(l.detail);
      }, this.handleChipSelection = function(l) {
        return i.foundation.handleChipSelection(l.detail);
      }, this.handleChipRemoval = function(l) {
        return i.foundation.handleChipRemoval(l.detail);
      }, this.handleChipNavigation = function(l) {
        return i.foundation.handleChipNavigation(l.detail);
      }, this.listen(uu, this.handleChipInteraction), this.listen(cu, this.handleChipSelection), this.listen(du, this.handleChipRemoval), this.listen(fu, this.handleChipNavigation);
    }, e.prototype.destroy = function() {
      var n, r;
      try {
        for (var i = Lt(this.chipsList), a = i.next(); !a.done; a = i.next()) {
          var o = a.value;
          o.destroy();
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
      this.unlisten(uu, this.handleChipInteraction), this.unlisten(cu, this.handleChipSelection), this.unlisten(du, this.handleChipRemoval), this.unlisten(fu, this.handleChipNavigation), t.prototype.destroy.call(this);
    }, e.prototype.addChip = function(n) {
      n.id = n.id || "mdc-chip-" + ++hu, this.chipsList.push(this.chipFactory(n));
    }, e.prototype.getDefaultFoundation = function() {
      var n = this, r = {
        announceMessage: function(i) {
          ng(i);
        },
        focusChipPrimaryActionAtIndex: function(i) {
          n.chipsList[i].focusPrimaryAction();
        },
        focusChipTrailingActionAtIndex: function(i) {
          n.chipsList[i].focusTrailingAction();
        },
        getChipListCount: function() {
          return n.chips.length;
        },
        getIndexOfChipById: function(i) {
          return n.findChipIndex(i);
        },
        hasClass: function(i) {
          return n.root.classList.contains(i);
        },
        isRTL: function() {
          return window.getComputedStyle(n.root).getPropertyValue("direction") === "rtl";
        },
        removeChipAtIndex: function(i) {
          i >= 0 && i < n.chips.length && (n.chipsList[i].destroy(), n.chipsList[i].remove(), n.chipsList.splice(i, 1));
        },
        removeFocusFromChipAtIndex: function(i) {
          n.chipsList[i].removeFocus();
        },
        selectChipAtIndex: function(i, a, o) {
          i >= 0 && i < n.chips.length && n.chipsList[i].setSelectedFromChipSet(a, o);
        }
      };
      return new ol(r);
    }, e.prototype.instantiateChips = function(n) {
      var r = [].slice.call(this.root.querySelectorAll(ig));
      return r.map(function(i) {
        return i.id = i.id || "mdc-chip-" + ++hu, n(i);
      });
    }, e.prototype.findChipIndex = function(n) {
      for (var r = 0; r < this.chips.length; r++)
        if (this.chipsList[r].id === n)
          return r;
      return -1;
    }, e;
  }(No)
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
const sl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  MDCChip: nd,
  MDCChipFoundation: al,
  MDCChipSet: ag,
  MDCChipSetFoundation: ol,
  MDCChipTrailingAction: td,
  MDCChipTrailingActionFoundation: ed,
  chipCssClasses: Et,
  chipSetCssClasses: Aa,
  chipSetStrings: rd,
  chipStrings: Se,
  trailingActionStrings: Nn
}, Symbol.toStringTag, { value: "Module" }));
var og = /* @__PURE__ */ ve('<div class="mdc-chip__ripple"></div>'), sg = /* @__PURE__ */ ve('<div class="mdc-chip__touch"></div>'), lg = /* @__PURE__ */ ve("<!> <!> <!>", 1);
function ug(t, e) {
  Le(e, !0);
  const n = () => Nt(A, "$initialSelectedStore", o), r = () => Nt(F, "$choice", o), i = () => Nt(_e, "$index", o), a = () => Nt(H, "$nonInteractive", o), [o, c] = Ln(), { MDCChipFoundation: l } = sl;
  let u = p(e, "use", 19, () => []), d = p(e, "class", 3, ""), h = p(e, "style", 3, ""), f = p(e, "ripple", 3, !0), v = p(e, "touch", 3, !1), m = p(e, "shouldRemoveOnTrailingIconClick", 3, !0), g = p(e, "shouldFocusPrimaryActionOnClick", 3, !0), I = p(e, "component", 3, Fr), E = p(e, "tag", 3, "div"), T = /* @__PURE__ */ ze(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "style",
    "chip",
    "ripple",
    "touch",
    "shouldRemoveOnTrailingIconClick",
    "shouldFocusPrimaryActionOnClick",
    "component",
    "tag",
    "children"
  ]), S, b = /* @__PURE__ */ be(void 0), _ = ye({}), x = ye({}), w = ye({});
  const A = oe("SMUI:chips:chip:initialSelected");
  let C = /* @__PURE__ */ be(ye(n())), P, K;
  const H = oe("SMUI:chips:nonInteractive"), F = oe("SMUI:chips:choice"), _e = oe("SMUI:chips:chip:index"), k = dt(m());
  xe(() => {
    mn(k, m());
  }), ne("SMUI:chips:chip:shouldRemoveOnTrailingIconClick", k);
  const B = dt(s(C));
  xe(() => {
    mn(B, s(C));
  }), ne("SMUI:chips:chip:isSelected", B);
  const U = dt(x);
  xe(() => {
    mn(U, x);
  }), ne("SMUI:chips:chip:leadingIconClasses", U), ne("SMUI:chips:chip:focusable", r() && s(C) || i() === 0), xe(() => {
    s(b) && s(b).getShouldRemoveOnTrailingIconClick() !== m() && s(b).setShouldRemoveOnTrailingIconClick(m());
  }), xe(() => {
    s(b) && s(b).setShouldFocusPrimaryActionOnClick(g());
  }), ne("SMUI:chips:primary-action:mount", (ue) => {
    P = ue;
  }), ne("SMUI:chips:primary-action:unmount", () => {
    P = void 0;
  }), ne("SMUI:chips:trailing-action:mount", (ue) => {
    K = ue;
  }), ne("SMUI:chips:trailing-action:unmount", () => {
    K = void 0;
  });
  const G = oe("SMUI:chips:chip:mount"), ee = oe("SMUI:chips:chip:unmount");
  st(() => {
    Q(
      b,
      new l({
        addClass: y,
        addClassToLeadingIcon: $,
        eventTargetHasClass: (we, Pe) => we && "classList" in we ? we.classList.contains(Pe) : !1,
        focusPrimaryAction: () => {
          P && P.focus();
        },
        focusTrailingAction: () => {
          K && K.focus();
        },
        getAttribute: (we) => ie().getAttribute(we),
        getCheckmarkBoundingClientRect: () => {
          const we = ie().querySelector(".mdc-chip__checkmark");
          return we ? we.getBoundingClientRect() : null;
        },
        getComputedStyleValue: de,
        getRootBoundingClientRect: () => ie().getBoundingClientRect(),
        hasClass: R,
        hasLeadingIcon: () => !!ie().querySelector(".mdc-chip__icon--leading"),
        isRTL: () => getComputedStyle(ie()).getPropertyValue("direction") === "rtl",
        isTrailingActionNavigable: () => K ? K.isNavigable() : !1,
        notifyInteraction: () => Ke(ie(), "SMUIChipInteraction", { chipId: e.chip }),
        notifyNavigation: (we, Pe) => Ke(ie(), "SMUIChipNavigation", { chipId: e.chip, key: we, source: Pe }),
        notifyRemoval: (we) => Ke(ie(), "SMUIChipRemoval", { chipId: e.chip, removedAnnouncement: we }),
        notifySelection: (we, Pe) => Ke(ie(), "SMUIChipSelection", { chipId: e.chip, selected: we, shouldIgnore: Pe }),
        notifyTrailingIconInteraction: () => Ke(ie(), "SMUIChipTrailingIconInteraction", { chipId: e.chip }),
        notifyEditStart: () => {
        },
        notifyEditFinish: () => {
        },
        removeClass: L,
        removeClassFromLeadingIcon: N,
        removeTrailingActionFocus: () => {
          K && K.removeFocus();
        },
        setPrimaryActionAttr: (we, Pe) => {
          P && P.addAttr(we, Pe);
        },
        setStyleProperty: j
      }),
      !0
    );
    const ue = {
      chipId: e.chip,
      get selected() {
        return s(C);
      },
      focusPrimaryAction: se,
      focusTrailingAction: X,
      removeFocus: he,
      setSelectedFromChipSet: V
    };
    return G && G(ue), s(b).init(), () => {
      var we;
      ee && ee(ue), (we = s(b)) == null || we.destroy();
    };
  });
  function R(ue) {
    return ue in _ ? _[ue] : ie().classList.contains(ue);
  }
  function y(ue) {
    _[ue] || (_[ue] = !0);
  }
  function L(ue) {
    (!(ue in _) || _[ue]) && (_[ue] = !1);
  }
  function $(ue) {
    x[ue] || (x[ue] = !0);
  }
  function N(ue) {
    (!(ue in x) || x[ue]) && (x[ue] = !1);
  }
  function j(ue, we) {
    w[ue] != we && (we === "" || we == null ? delete w[ue] : w[ue] = we);
  }
  function de(ue) {
    return ue in w ? w[ue] : getComputedStyle(ie()).getPropertyValue(ue);
  }
  function V(ue, we) {
    var Pe;
    Q(C, ue, !0), (Pe = s(b)) == null || Pe.setSelectedFromChipSet(s(C), we);
  }
  function se() {
    var ue;
    (ue = s(b)) == null || ue.focusPrimaryAction();
  }
  function X() {
    var ue;
    (ue = s(b)) == null || ue.focusTrailingAction();
  }
  function he() {
    var ue;
    (ue = s(b)) == null || ue.removeFocus();
  }
  function ie() {
    return S.getElement();
  }
  var qe = { getElement: ie }, Ue = re(), Xe = Y(Ue);
  {
    let ue = /* @__PURE__ */ ae(() => [
      [
        Kt,
        {
          ripple: f() && !a(),
          unbounded: !1,
          addClass: y,
          removeClass: L,
          addStyle: j
        }
      ],
      ...u()
    ]), we = /* @__PURE__ */ ae(() => He({
      "mdc-chip": !0,
      "mdc-chip--selected": s(C),
      "mdc-chip--touch": v(),
      ..._,
      [d()]: !0
    })), Pe = /* @__PURE__ */ ae(() => Object.entries(w).map(([M, q]) => `${M}: ${q};`).concat([h()]).join(" "));
    ur(Xe, I, (M, q) => {
      Te(
        q(M, it(
          {
            get tag() {
              return E();
            },
            get use() {
              return s(ue);
            },
            get class() {
              return s(we);
            },
            get style() {
              return s(Pe);
            },
            role: "row"
          },
          () => T,
          {
            ontransitionend: (te) => {
              var Ce;
              s(b) && s(b).handleTransitionEnd(te), (Ce = e.ontransitionend) == null || Ce.call(e, te);
            },
            onclick: (te) => {
              var Ce;
              s(b) && s(b).handleClick(), (Ce = e.onclick) == null || Ce.call(e, te);
            },
            onkeydown: (te) => {
              var Ce;
              s(b) && s(b).handleKeydown(te), (Ce = e.onkeydown) == null || Ce.call(e, te);
            },
            onfocusin: (te) => {
              var Ce;
              s(b) && s(b).handleFocusIn(te), (Ce = e.onfocusin) == null || Ce.call(e, te);
            },
            onfocusout: (te) => {
              var Ce;
              s(b) && s(b).handleFocusOut(te), (Ce = e.onfocusout) == null || Ce.call(e, te);
            },
            onSMUIChipTrailingActionInteraction: (te) => {
              var Ce;
              s(b) && s(b).handleTrailingActionInteraction(), (Ce = e.onSMUIChipTrailingActionInteraction) == null || Ce.call(e, te);
            },
            onSMUIChipTrailingActionNavigation: (te) => {
              var Ce;
              s(b) && s(b).handleTrailingActionNavigation(te), (Ce = e.onSMUIChipTrailingActionNavigation) == null || Ce.call(e, te);
            },
            children: (te, Ce) => {
              var Ct = lg(), kt = Y(Ct);
              {
                var Rn = (Z) => {
                  var Me = og();
                  O(Z, Me);
                };
                le(kt, (Z) => {
                  f() && !a() && Z(Rn);
                });
              }
              var ce = Ee(kt, 2);
              Ae(ce, () => e.children ?? ge);
              var me = Ee(ce, 2);
              {
                var W = (Z) => {
                  var Me = sg();
                  O(Z, Me);
                };
                le(me, (Z) => {
                  v() && Z(W);
                });
              }
              O(te, Ct);
            },
            $$slots: { default: !0 }
          }
        )),
        (te) => S = te,
        () => S
      );
    });
  }
  O(t, Ue);
  var De = Oe(qe);
  return c(), De;
}
var cg = /* @__PURE__ */ ve("<div></div>");
function dg(t, e) {
  Le(e, !0);
  const [n, r] = Ln(), { MDCChipSetFoundation: i } = sl;
  let a = p(e, "use", 19, () => []), o = p(e, "class", 3, ""), c = p(e, "chips", 27, () => ye([])), l = p(e, "key", 3, (N) => `${N}`), u = p(e, "selected", 15), d = p(e, "nonInteractive", 3, !1), h = p(e, "choice", 3, !1), f = p(e, "filter", 3, !1), v = p(e, "input", 3, !1), m = /* @__PURE__ */ ze(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "chips",
    "key",
    "selected",
    "nonInteractive",
    "choice",
    "filter",
    "input",
    "chip"
  ]);
  if (f() && h())
    throw new Error("Chip sets can be either filter or choice, but not both.");
  if (h() && typeof u() == "object" && "findIndex" in u())
    throw new Error("Choice chips must not be given multiple selected chips.");
  if (f() && u() !== void 0 && (typeof u() != "object" || !("findIndex" in u())))
    throw new Error("Filter chips must be given an array of selected chips.");
  let g, I = /* @__PURE__ */ be(void 0), E = {}, T = /* @__PURE__ */ new WeakMap(), S = c().map((N) => h() && u() != null && l()(u()) === l()(N) || f() && u() != null && u().findIndex((j) => l()(j) === l()(N)) !== -1);
  ne("SMUI:chips:key", l());
  const b = dt(d());
  xe(() => {
    mn(b, d());
  }), ne("SMUI:chips:nonInteractive", b);
  const _ = dt(h());
  xe(() => {
    mn(_, h());
  }), ne("SMUI:chips:choice", _);
  const x = dt(f());
  xe(() => {
    mn(x, f());
  }), ne("SMUI:chips:filter", x);
  let w = f() ? new Set(u() ?? []) : u();
  xe(() => {
    if (s(I) && h() && w !== u()) {
      const N = w;
      w = u(), u() != null ? s(I).select(l()(u())) : s(I).handleChipSelection({
        chipId: l()(N),
        selected: !1,
        shouldIgnore: !1
      });
    }
  }), xe(() => {
    if (s(I) && f()) {
      const N = new Set(u() ?? []), j = A(w, N), de = A(N, w);
      if (j.size || de.size) {
        w = N;
        for (let V of j)
          c().findIndex((se) => l()(se) === l()(V)) !== -1 && s(I).handleChipSelection({ chipId: l()(V), selected: !1, shouldIgnore: !1 });
        for (let V of de)
          s(I).handleChipSelection({ chipId: l()(V), selected: !0, shouldIgnore: !1 });
      }
    }
  });
  function A(N, j) {
    let de = new Set(N);
    for (let V of j)
      de.delete(V);
    return de;
  }
  ne("SMUI:chips:chip:mount", (N) => {
    _e(N.chipId, N);
  }), ne("SMUI:chips:chip:unmount", (N) => {
    k(N.chipId);
  }), st(() => {
    if (Q(
      I,
      new i({
        announceMessage: yp,
        focusChipPrimaryActionAtIndex: (N) => {
          var j;
          (j = F(c()[N])) == null || j.focusPrimaryAction();
        },
        focusChipTrailingActionAtIndex: (N) => {
          var j;
          (j = F(c()[N])) == null || j.focusTrailingAction();
        },
        getChipListCount: () => c().length,
        getIndexOfChipById: (N) => c().findIndex((j) => l()(j) === N),
        hasClass: (N) => B().classList.contains(N),
        isRTL: () => getComputedStyle(B()).getPropertyValue("direction") === "rtl",
        removeChipAtIndex: (N) => {
          if (N >= 0 && N < c().length) {
            const j = l()(c()[N]);
            if (h() && u() != null && l()(u()) === j)
              u(void 0);
            else if (f() && u() != null) {
              const de = u().findIndex((V) => l()(V) === j);
              de !== -1 && u().splice(de, 1);
            }
            c().splice(N, 1);
          }
        },
        removeFocusFromChipAtIndex: (N) => {
          var j;
          (j = F(c()[N])) == null || j.removeFocus();
        },
        selectChipAtIndex: (N, j, de) => {
          var V;
          if (N >= 0 && N < c().length) {
            if (f()) {
              u() == null && u([]);
              const se = l()(c()[N]), X = u().findIndex((he) => l()(he) === se);
              j && X === -1 ? u().push(c()[N]) : !j && X !== -1 && u().splice(X, 1);
            } else h() && (j || l()(u()) === l()(c()[N])) && u(j ? c()[N] : void 0);
            (V = F(c()[N])) == null || V.setSelectedFromChipSet(j, de);
          }
        }
      }),
      !0
    ), s(I).init(), h() && u() != null)
      s(I).select(l()(u()));
    else if (f() && u() != null && u().length)
      for (const N of u())
        s(I).select(l()(N));
    return () => {
      var N;
      (N = s(I)) == null || N.destroy();
    };
  });
  function C(N) {
    s(I) && s(I).handleChipInteraction({ chipId: l()(N.detail.chipId) });
  }
  function P(N) {
    s(I) && s(I).handleChipSelection({
      chipId: l()(N.detail.chipId),
      selected: N.detail.selected,
      shouldIgnore: N.detail.shouldIgnore
    });
  }
  function K(N) {
    s(I) && s(I).handleChipRemoval({
      chipId: l()(N.detail.chipId),
      removedAnnouncement: N.detail.removedAnnouncement
    });
  }
  function H(N) {
    s(I) && s(I).handleChipNavigation({
      chipId: l()(N.detail.chipId),
      key: N.detail.key,
      source: N.detail.source
    });
  }
  function F(N) {
    return N instanceof Object ? T.get(N) : E[N];
  }
  function _e(N, j) {
    N instanceof Object ? T.set(N, j) : E[N] = j;
  }
  function k(N) {
    N instanceof Object ? T.delete(N) : delete E[N];
  }
  function B() {
    return g;
  }
  var U = { getElement: B }, G = cg(), ee = (N) => {
    var j;
    C(N), (j = e.onSMUIChipInteraction) == null || j.call(e, N);
  }, R = (N) => {
    var j;
    P(N), (j = e.onSMUIChipSelection) == null || j.call(e, N);
  }, y = (N) => {
    var j;
    K(N), (j = e.onSMUIChipRemoval) == null || j.call(e, N);
  }, L = (N) => {
    var j;
    H(N), (j = e.onSMUIChipNavigation) == null || j.call(e, N);
  };
  ke(
    G,
    (N) => ({
      class: N,
      role: "grid",
      ...m,
      onSMUIChipInteraction: ee,
      onSMUIChipSelection: R,
      onSMUIChipRemoval: y,
      onSMUIChipNavigation: L
    }),
    [
      () => He({
        "mdc-chip-set": !0,
        "smui-chip-set--non-interactive": d(),
        "mdc-chip-set--choice": h(),
        "mdc-chip-set--filter": f(),
        "mdc-chip-set--input": v(),
        [o()]: !0
      })
    ]
  ), rr(G, 23, c, (N) => l()(N), (N, j, de) => {
    Si(N, {
      key: "SMUI:chips:chip:index",
      get value() {
        return s(de);
      },
      children: (V, se) => {
        Si(V, {
          key: "SMUI:chips:chip:initialSelected",
          get value() {
            return S[s(de)];
          },
          children: (X, he) => {
            var ie = re(), qe = Y(ie);
            Ae(qe, () => e.chip, () => s(j)), O(X, ie);
          },
          $$slots: { default: !0 }
        });
      },
      $$slots: { default: !0 }
    });
  }), Te(G, (N) => g = N, () => g), Be(G, (N, j) => z == null ? void 0 : z(N, j), a), O(t, G);
  var $ = Oe(U);
  return r(), $;
}
var fg = /* @__PURE__ */ dn('<svg class="mdc-chip__checkmark-svg" viewBox="-2 -3 30 30"><path class="mdc-chip__checkmark-path" fill="none" stroke="black" d="M1.73,12.91 8.1,19.28 22.79,4.59"></path></svg>'), hg = /* @__PURE__ */ ve("<span><!></span>");
function vg(t, e) {
  Le(e, !0);
  let n = p(e, "use", 19, () => []), r = p(e, "class", 3, ""), i = /* @__PURE__ */ ze(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "children"
  ]), a;
  function o() {
    return a;
  }
  var c = { getElement: o }, l = hg();
  ke(l, (f) => ({ class: f, ...i }), [
    () => He({ "mdc-chip__checkmark": !0, [r()]: !0 })
  ]);
  var u = Ie(l);
  {
    var d = (f) => {
      var v = re(), m = Y(v);
      Ae(m, () => e.children ?? ge), O(f, v);
    }, h = (f) => {
      var v = fg();
      O(f, v);
    };
    le(u, (f) => {
      e.children ? f(d) : f(h, !1);
    });
  }
  return Te(l, (f) => a = f, () => a), Be(l, (f, v) => z == null ? void 0 : z(f, v), n), O(t, l), Oe(c);
}
var pg = /* @__PURE__ */ ve("<span><!></span>"), mg = /* @__PURE__ */ ve("<span><span><!></span></span>"), gg = /* @__PURE__ */ ve("<!> <span><!></span>", 1);
function bg(t, e) {
  Le(e, !0);
  const n = () => Nt(T, "$filter", o), r = () => Nt(E, "$choice", o), i = () => Nt(I, "$nonInteractive", o), a = () => Nt(S, "$isSelected", o), [o, c] = Ln();
  let l = p(e, "use", 19, () => []), u = p(e, "class", 3, ""), d = p(e, "tabindex", 19, () => oe("SMUI:chips:chip:focusable") ? 0 : -1), h = /* @__PURE__ */ ze(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "tabindex",
    "children",
    "checkbox"
  ]), f, v, m, g = ye({});
  const I = oe("SMUI:chips:nonInteractive"), E = oe("SMUI:chips:choice"), T = oe("SMUI:chips:filter"), S = oe("SMUI:chips:chip:isSelected"), b = /* @__PURE__ */ ae(() => ({
    role: n() ? "checkbox" : r() ? "radio" : "button",
    tabindex: d()
  })), _ = oe("SMUI:chips:primary-action:mount"), x = oe("SMUI:chips:primary-action:unmount");
  st(() => {
    let y = { focus: C, addAttr: w };
    return _ && _(y), () => {
      x && x(y);
    };
  });
  function w(y, L) {
    g[y] !== L && (g[y] = L);
  }
  function A(y) {
    g.tabindex !== K().getAttribute("tabindex") ? Ro().then(y) : y();
  }
  function C() {
    A(() => {
      m && m.focus();
    });
  }
  function P() {
    return v && v.getElement();
  }
  function K() {
    return f;
  }
  var H = { focus: C, getInput: P, getElement: K }, F = gg(), _e = Y(F);
  {
    var k = (y) => {
      {
        let L = /* @__PURE__ */ ae(() => lt(h, "checkmark$"));
        Te(
          vg(y, it(
            {
              get children() {
                return e.checkbox;
              }
            },
            () => s(L)
          )),
          ($) => v = $,
          () => v
        );
      }
    };
    le(_e, (y) => {
      n() && y(k);
    });
  }
  var B = Ee(_e, 2);
  ke(B, (y) => ({ role: "gridcell", ...y }), [() => lt(h, "container$")]);
  var U = Ie(B);
  {
    var G = (y) => {
      var L = pg();
      ke(L, (N) => ({ class: "mdc-chip__text", ...N }), [() => lt(h, "text$")]);
      var $ = Ie(L);
      Ae($, () => e.children ?? ge), O(y, L);
    }, ee = (y) => {
      var L = mg();
      ke(
        L,
        (j, de) => ({
          class: j,
          ...n() || r() ? { "aria-selected": a() ? "true" : "false" } : {},
          ...s(b),
          ...g,
          ...de
        }),
        [
          () => He({ "mdc-chip__primary-action": !0, [u()]: !0 }),
          () => ta(h, ["checkmark$", "container$", "text$"])
        ]
      );
      var $ = Ie(L);
      ke($, (j) => ({ class: "mdc-chip__text", ...j }), [() => lt(h, "text$")]);
      var N = Ie($);
      Ae(N, () => e.children ?? ge), Te(L, (j) => m = j, () => m), O(y, L);
    };
    le(U, (y) => {
      i() ? y(G) : y(ee, !1);
    });
  }
  Te(B, (y) => f = y, () => f), Be(B, (y, L) => z == null ? void 0 : z(y, L), l), O(t, F);
  var R = Oe(H);
  return c(), R;
}
var yg = /* @__PURE__ */ ve('<span class="mdc-deprecated-chip-trailing-action__touch"></span>'), Ig = /* @__PURE__ */ ve('<button><span class="mdc-deprecated-chip-trailing-action__ripple"></span> <!> <span><!></span></button>');
function _g(t, e) {
  Le(e, !0);
  const { MDCChipTrailingActionFoundation: n } = sl;
  let r = p(e, "use", 19, () => []), i = p(e, "class", 3, ""), a = p(e, "style", 3, ""), o = p(e, "ripple", 3, !0), c = p(e, "touch", 3, !1), l = p(e, "nonNavigable", 3, !1), u = p(e, "icon$use", 19, () => []), d = p(e, "icon$class", 3, ""), h = /* @__PURE__ */ ze(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "style",
    "ripple",
    "touch",
    "nonNavigable",
    "icon$use",
    "icon$class",
    "children"
  ]), f, v = /* @__PURE__ */ be(void 0), m = ye({}), g = ye({}), I = ye({});
  const E = oe("SMUI:chips:trailing-action:mount"), T = oe("SMUI:chips:trailing-action:unmount");
  st(() => {
    Q(
      v,
      new n({
        focus: () => {
          const L = H();
          A(() => {
            L.focus();
          });
        },
        getAttribute: x,
        notifyInteraction: (L) => Ke(H(), "SMUIChipTrailingActionInteraction", { trigger: L }),
        notifyNavigation: (L) => Ke(H(), "SMUIChipTrailingActionNavigation", { key: L }),
        setAttribute: w
      }),
      !0
    );
    const y = { isNavigable: C, focus: P, removeFocus: K };
    return E && E(y), s(v).init(), () => {
      var L;
      T && T(y), (L = s(v)) == null || L.destroy();
    };
  });
  function S(y) {
    m[y] || (m[y] = !0);
  }
  function b(y) {
    (!(y in m) || m[y]) && (m[y] = !1);
  }
  function _(y, L) {
    g[y] != L && (L === "" || L == null ? delete g[y] : g[y] = L);
  }
  function x(y) {
    return y in I ? I[y] ?? null : H().getAttribute(y);
  }
  function w(y, L) {
    I[y] !== L && (I[y] = L);
  }
  function A(y) {
    I.tabindex !== H().getAttribute("tabindex") ? Ro().then(y) : y();
  }
  function C() {
    if (s(v) == null)
      throw new Error("Instance is undefined.");
    return s(v).isNavigable();
  }
  function P() {
    var y;
    (y = s(v)) == null || y.focus();
  }
  function K() {
    var y;
    (y = s(v)) == null || y.removeFocus();
  }
  function H() {
    return f;
  }
  var F = { isNavigable: C, focus: P, removeFocus: K, getElement: H }, _e = Ig(), k = (y) => {
    var L;
    s(v) && s(v).handleClick(y), (L = e.onclick) == null || L.call(e, y);
  }, B = (y) => {
    var L;
    s(v) && s(v).handleKeydown(y), (L = e.onkeydown) == null || L.call(e, y);
  };
  ke(
    _e,
    (y, L, $) => ({
      type: "button",
      class: y,
      style: L,
      "aria-hidden": l() ? "true" : void 0,
      tabindex: "-1",
      ...I,
      ...$,
      onclick: k,
      onkeydown: B
    }),
    [
      () => He({
        "mdc-deprecated-chip-trailing-action": !0,
        ...m,
        [i()]: !0
      }),
      () => Object.entries(g).map(([y, L]) => `${y}: ${L};`).concat([a()]).join(" "),
      () => ta(h, ["icon$"])
    ]
  );
  var U = Ee(Ie(_e), 2);
  {
    var G = (y) => {
      var L = yg();
      O(y, L);
    };
    le(U, (y) => {
      c() && y(G);
    });
  }
  var ee = Ee(U, 2);
  ke(ee, (y, L) => ({ class: y, ...L }), [
    () => He({
      "mdc-deprecated-chip-trailing-action__icon": !0,
      [d()]: !0
    }),
    () => lt(h, "icon$")
  ]);
  var R = Ie(ee);
  return Ae(R, () => e.children ?? ge), Be(ee, (y, L) => z == null ? void 0 : z(y, L), u), Te(_e, (y) => f = y, () => f), Be(_e, (y, L) => Kt == null ? void 0 : Kt(y, L), () => ({
    ripple: o(),
    unbounded: !1,
    addClass: S,
    removeClass: b,
    addStyle: _
  })), Be(_e, (y, L) => z == null ? void 0 : z(y, L), r), O(t, _e), Oe(F);
}
const Ht = [];
for (let t = 0; t < 256; ++t)
  Ht.push((t + 256).toString(16).slice(1));
function Eg(t, e = 0) {
  return (Ht[t[e + 0]] + Ht[t[e + 1]] + Ht[t[e + 2]] + Ht[t[e + 3]] + "-" + Ht[t[e + 4]] + Ht[t[e + 5]] + "-" + Ht[t[e + 6]] + Ht[t[e + 7]] + "-" + Ht[t[e + 8]] + Ht[t[e + 9]] + "-" + Ht[t[e + 10]] + Ht[t[e + 11]] + Ht[t[e + 12]] + Ht[t[e + 13]] + Ht[t[e + 14]] + Ht[t[e + 15]]).toLowerCase();
}
let as;
const Ag = new Uint8Array(16);
function Cg() {
  if (!as) {
    if (typeof crypto > "u" || !crypto.getRandomValues)
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    as = crypto.getRandomValues.bind(crypto);
  }
  return as(Ag);
}
const Sg = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), vu = { randomUUID: Sg };
function br(t, e, n) {
  var i;
  if (vu.randomUUID && !e && !t)
    return vu.randomUUID();
  t = t || {};
  const r = t.random ?? ((i = t.rng) == null ? void 0 : i.call(t)) ?? Cg();
  if (r.length < 16)
    throw new Error("Random bytes length must be >= 16");
  if (r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, e) {
    if (n = n || 0, n < 0 || n + 16 > e.length)
      throw new RangeError(`UUID byte range ${n}:${n + 15} is out of buffer bounds`);
    for (let a = 0; a < 16; ++a)
      e[n + a] = r[a];
    return e;
  }
  return Eg(r);
}
var xg = /* @__PURE__ */ ve('<span class="oscd-icon"><!></span>');
function dr(t, e) {
  var n = xg(), r = Ie(n);
  Ae(r, () => e.children ?? ge), O(t, n);
}
var Tg = /* @__PURE__ */ dn('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"></path></svg>');
function wg(t, e) {
  let n = p(e, "svgStyles", 3, "");
  dr(t, {
    children: (r, i) => {
      var a = Tg();
      Fe(() => rn(a, n())), O(r, a);
    }
  });
}
var Lg = /* @__PURE__ */ dn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="24px"><path d="m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"></path></svg>');
function id(t, e) {
  let n = p(e, "svgStyles", 3, "");
  dr(t, {
    children: (r, i) => {
      var a = Lg();
      Fe(() => rn(a, n())), O(r, a);
    }
  });
}
var Og = /* @__PURE__ */ dn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z"></path></svg>');
function Rg(t, e) {
  let n = p(e, "svgStyles", 3, "");
  dr(t, {
    children: (r, i) => {
      var a = Og();
      Fe(() => rn(a, n())), O(r, a);
    }
  });
}
var Mg = /* @__PURE__ */ dn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="m590-160 80 80H240q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h360l200 240v480q0 20-8.5 36.5T768-96L560-302q-17 11-37 16.5t-43 5.5q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 23-5.5 43T618-360l102 104v-356L562-800H240v640h350ZM480-360q33 0 56.5-23.5T560-440q0-33-23.5-56.5T480-520q-33 0-56.5 23.5T400-440q0 33 23.5 56.5T480-360Zm0-80Zm0 0Z"></path></svg>');
function Dg(t, e) {
  let n = p(e, "svgStyles", 3, "");
  dr(t, {
    children: (r, i) => {
      var a = Mg();
      Fe(() => rn(a, n())), O(r, a);
    }
  });
}
var Pg = /* @__PURE__ */ dn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-160q-134 0-227-93t-93-227q0-134 93-227t227-93q69 0 132 28.5T720-690v-110h80v280H520v-80h168q-32-56-87.5-88T480-720q-100 0-170 70t-70 170q0 100 70 170t170 70q77 0 139-44t87-116h84q-28 106-114 173t-196 67Z"></path></svg>');
function Ng(t, e) {
  let n = p(e, "svgStyles", 3, "");
  dr(t, {
    children: (r, i) => {
      var a = Pg();
      Fe(() => rn(a, n())), O(r, a);
    }
  });
}
var Ug = /* @__PURE__ */ dn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"></path></svg>');
function Hg(t, e) {
  let n = p(e, "svgStyles", 3, "");
  dr(t, {
    children: (r, i) => {
      var a = Ug();
      Fe(() => rn(a, n())), O(r, a);
    }
  });
}
var Fg = /* @__PURE__ */ dn('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M200-440v-80h560v80H200Z"></path></svg>');
function Bg(t, e) {
  let n = p(e, "svgStyles", 3, "");
  dr(t, {
    children: (r, i) => {
      var a = Fg();
      Fe(() => rn(a, n())), O(r, a);
    }
  });
}
var kg = /* @__PURE__ */ dn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"></path></svg>');
function Vg(t, e) {
  let n = p(e, "svgStyles", 3, "");
  dr(t, {
    children: (r, i) => {
      var a = kg();
      Fe(() => rn(a, n())), O(r, a);
    }
  });
}
var Gg = /* @__PURE__ */ dn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"></path></svg>');
function jg(t, e) {
  let n = p(e, "svgStyles", 3, "");
  dr(t, {
    children: (r, i) => {
      var a = Gg();
      Fe(() => rn(a, n())), O(r, a);
    }
  });
}
sf();
var qg = /* @__PURE__ */ ve("<!> <!>", 1);
function Wg(t, e) {
  let n = p(e, "title", 3, ""), r = p(e, "closeable", 3, !0), i = p(e, "disabled", 3, !1);
  {
    let a = /* @__PURE__ */ ae(() => i() ? "disabled" : "");
    ug(t, {
      get chip() {
        return n();
      },
      nonInteractive: !0,
      disabled: !0,
      get class() {
        return s(a);
      },
      children: (o, c) => {
        var l = qg(), u = Y(l);
        bg(u, {
          children: (f, v) => {
            var m = Xt();
            Fe(() => vt(m, n())), O(f, m);
          },
          $$slots: { default: !0 }
        });
        var d = Ee(u, 2);
        {
          var h = (f) => {
            _g(f, {
              get onclick() {
                return e.callback;
              },
              children: (v, m) => {
                id(v, { svgStyles: "margin-left: 0; fill: unset;" });
              },
              $$slots: { default: !0 }
            });
          };
          le(d, (f) => {
            r() && !i() && f(h);
          });
        }
        O(o, l);
      },
      $$slots: { default: !0 }
    });
  }
}
function Kg(t, e) {
  e(t.target.value);
}
var zg = /* @__PURE__ */ ve('<div class="custom-text-field svelte-1719vm0"><input type="date" id="datetime-picker" class="custom-text-field__input svelte-1719vm0" placeholder=""/> <label for="datetime-picker" class="custom-floating-label svelte-1719vm0"> </label> <span class="custom-line svelte-1719vm0"></span></div>');
function Xg(t, e) {
  Le(e, !0);
  let n = p(e, "label", 3, ""), r = p(e, "value", 15, "");
  var i = zg(), a = Ie(i);
  a.__change = [Kg, r];
  var o = Ee(a, 2), c = Ie(o);
  Fe(() => vt(c, n())), wa(a, r), O(t, i), Oe();
}
lr(["change"]);
var Yg = /* @__PURE__ */ ve('<div class="filter-box-container"><div class="input-section"><div class="filter-input-controls svelte-xdvqlf"><!> <!> <!> <!> <!></div> <div class="filter-button-controls"><!> <!></div></div> <div class="separator"></div> <div class="chip-section"><!></div></div>');
function pu(t, e) {
  Le(e, !0);
  let n = p(e, "filterTypes", 19, () => []), r = p(e, "activeFilters", 31, () => ye([])), i = p(e, "useOptionLabelInChipText", 3, !1), a = p(e, "selectedOptionIndex", 31, () => -1), o = p(e, "disabled", 3, !1), c = p(e, "addFilterLabel", 3, "Add Filter"), l = p(e, "selectFilterLabel", 3, "Filter Types"), u = /* @__PURE__ */ be(""), d = /* @__PURE__ */ be(void 0), h = /* @__PURE__ */ ae(() => n().map((T) => ({ value: T.label, label: T.label }))), f = /* @__PURE__ */ ae(() => !s(d) || !s(u)), v = /* @__PURE__ */ ae(() => n().find((T) => T.label === s(d)));
  function m() {
    var S, b;
    if (!s(d) || !s(u)) {
      console.warn("Filter type or input value is empty");
      return;
    }
    if (!s(v)) {
      console.warn("Filter type not found");
      return;
    }
    const T = [
      ...r(),
      {
        id: br(),
        key: s(v).key,
        value: s(u),
        operation: "=",
        text: `${s(d)}: ${i() && ((S = s(v).inputType.options) != null && S.length) ? (b = s(v).inputType.options[a()]) == null ? void 0 : b.label : s(u)}`,
        disabled: !1
      }
    ];
    r(T), E(), I();
  }
  function g(T) {
    setTimeout(
      () => {
        r(r().filter((S) => S.id !== T)), E();
      },
      0
    );
  }
  function I() {
    Q(u, ""), Q(d, void 0);
  }
  function E() {
    const T = r().map((S) => ({ ...S }));
    T.find((S) => S.key === "uuid") ? T.filter((S) => S.key !== "uuid").forEach((S) => {
      S.disabled = !0;
    }) : T.forEach((S) => {
      S.disabled = !1;
    }), r(T);
  }
  $c(t, {
    children: (T, S) => {
      var b = Yg(), _ = Ie(b), x = Ie(_), w = Ie(x);
      su(w, {
        get disabled() {
          return o();
        },
        get label() {
          return l();
        },
        get data() {
          return s(h);
        },
        get value() {
          return s(d);
        },
        set value(y) {
          Q(d, y, !0);
        }
      });
      var A = Ee(w, 2);
      {
        var C = (y) => {
          Im(y, {
            label: "Input",
            get value() {
              return s(u);
            },
            set value(L) {
              Q(u, L, !0);
            }
          });
        };
        le(A, (y) => {
          var L, $;
          (($ = (L = s(v)) == null ? void 0 : L.inputType) == null ? void 0 : $.type) === "string" && y(C);
        });
      }
      var P = Ee(A, 2);
      {
        var K = (y) => {
          {
            let L = /* @__PURE__ */ ae(() => {
              var $;
              return ($ = s(v).inputType) == null ? void 0 : $.options;
            });
            su(y, {
              label: "Input",
              get data() {
                return s(L);
              },
              get value() {
                return s(u);
              },
              set value($) {
                Q(u, $, !0);
              },
              get selectedOptionIndex() {
                return a();
              },
              set selectedOptionIndex($) {
                a($);
              }
            });
          }
        };
        le(P, (y) => {
          var L, $;
          (($ = (L = s(v)) == null ? void 0 : L.inputType) == null ? void 0 : $.type) === "select" && y(K);
        });
      }
      var H = Ee(P, 2);
      {
        var F = (y) => {
          Xg(y, {
            get value() {
              return s(u);
            },
            set value(L) {
              Q(u, L, !0);
            }
          });
        };
        le(H, (y) => {
          var L, $;
          (($ = (L = s(v)) == null ? void 0 : L.inputType) == null ? void 0 : $.type) === "datepicker" && y(F);
        });
      }
      var _e = Ee(H, 2);
      {
        var k = (y) => {
          eb(y, {
            get value() {
              return s(u);
            },
            set value(L) {
              Q(u, L, !0);
            }
          });
        };
        le(_e, (y) => {
          var L, $;
          (($ = (L = s(v)) == null ? void 0 : L.inputType) == null ? void 0 : $.type) === "timepicker" && y(k);
        });
      }
      var B = Ee(x, 2), U = Ie(B);
      rl(U, {
        callback: m,
        get disabled() {
          return s(f);
        },
        children: (y, L) => {
          var $ = Xt();
          Fe(() => vt($, c())), O(y, $);
        },
        $$slots: { default: !0 }
      });
      var G = Ee(U, 2);
      Ae(G, () => e.filterControls ?? ge);
      var ee = Ee(_, 4), R = Ie(ee);
      dg(R, {
        get chips() {
          return r();
        },
        key: (L) => L.id,
        chip: (L, $ = ge) => {
          Wg(L, {
            get title() {
              return $().text;
            },
            callback: () => g($().id),
            get disabled() {
              return $().disabled;
            }
          });
        },
        $$slots: { chip: !0 }
      }), O(T, b);
    },
    $$slots: { default: !0 }
  }), Oe();
}
var Zg = /* @__PURE__ */ ve('<div class="overlay svelte-14uvd2z"><div class="loading-spinner-container svelte-14uvd2z"><div class="loading-spinner svelte-14uvd2z"></div> <span class="loading-message svelte-14uvd2z"> </span></div></div>'), Qg = /* @__PURE__ */ ve('<div class="svelte-14uvd2z"><!></div>');
function mu(t, e) {
  let n = p(e, "loadingDone", 3, !0), r = p(e, "message", 3, "Loading...");
  var i = Qg(), a = Ie(i);
  {
    var o = (c) => {
      var l = Zg(), u = Ie(l), d = Ee(Ie(u), 2), h = Ie(d);
      Fe(() => vt(h, r())), O(c, l);
    };
    le(a, (c) => {
      n() || c(o);
    });
  }
  O(t, i);
}
function Jg(t, e) {
  e(t.target.value);
}
var $g = /* @__PURE__ */ ve('<div class="custom-text-field svelte-6wdfbb"><input type="datetime-local" id="datetime-picker" class="custom-text-field__input svelte-6wdfbb" placeholder=""/> <label for="datetime-picker" class="custom-floating-label svelte-6wdfbb"> </label> <span class="custom-line svelte-6wdfbb"></span></div>');
function eb(t, e) {
  Le(e, !0);
  let n = p(e, "label", 3, ""), r = p(e, "value", 15, "");
  var i = $g(), a = Ie(i);
  a.__change = [Jg, r];
  var o = Ee(a, 2), c = Ie(o);
  Fe(() => vt(c, n())), wa(a, r), O(t, i), Oe();
}
lr(["change"]);
var tb = /* @__PURE__ */ ve('<details class="svelte-1sq8fnx"><summary class="svelte-1sq8fnx"> </summary> <div class="expandable-content svelte-1sq8fnx"><!></div></details>');
function ad(t, e) {
  Le(e, !0);
  let n = p(e, "title", 3, ""), r = p(e, "open", 11, !1);
  $c(t, {
    children: (i, a) => {
      var o = tb(), c = Ie(o), l = Ie(c), u = Ee(c, 2), d = Ie(u);
      Ae(d, () => e.content ?? ge), Fe(() => {
        o.open = r(), vt(l, n());
      }), O(i, o);
    },
    $$slots: { default: !0 }
  }), Oe();
}
function nb(t, e, n, r) {
  e() && ((t.key === "Enter" || t.key === " ") && (t.preventDefault(), n()), t.key === "Escape" && (t.preventDefault(), r()));
}
var rb = /* @__PURE__ */ ve('<span role="button" tabindex="0" aria-labelledby="tooltip"><!></span>');
function gu(t, e) {
  Le(e, !0);
  let n = p(e, "content", 3, ""), r = p(e, "side", 3, "top"), i = p(e, "hoverDelay", 3, 0), a = p(e, "transitionDuration", 3, 80), o = p(e, "disabled", 3, !1);
  const c = `tt-${Math.random().toString(36).slice(2)}`;
  let l = /* @__PURE__ */ be(null), u = /* @__PURE__ */ be(null), d = /* @__PURE__ */ be(null), h = /* @__PURE__ */ be(null), f = /* @__PURE__ */ be(!1), v = /* @__PURE__ */ be(null), m = /* @__PURE__ */ be(null);
  function g() {
    !n() || o() || (s(v) && clearTimeout(s(v)), i() > 0 ? Q(v, setTimeout(() => Q(f, !0), i()), !0) : Q(f, !0));
  }
  function I() {
    s(v) && clearTimeout(s(v)), Q(f, !1);
  }
  function E() {
    g();
  }
  function T() {
    I();
  }
  function S() {
    g();
  }
  function b() {
    I();
  }
  function _() {
    if (!s(u) || !s(h) || !s(l) || o()) return;
    const C = s(l).getBoundingClientRect(), P = s(h).getBoundingClientRect();
    let K = 0, H = 0;
    const F = 8;
    switch (r()) {
      case "top":
        K = C.top - P.height - F, H = C.left + C.width / 2 - P.width / 2;
        break;
      case "bottom":
        K = C.bottom + F, H = C.left + C.width / 2 - P.width / 2;
        break;
      case "left":
        K = C.top + C.height / 2 - P.height / 2, H = C.left - P.width - F;
        break;
      case "right":
        K = C.top + C.height / 2 - P.height / 2, H = C.right + F;
        break;
    }
    s(u).style.top = `${K + window.scrollY}px`, s(u).style.left = `${H + window.scrollX}px`;
  }
  function x() {
    var C;
    (C = s(m)) == null || C.disconnect(), Q(m, null), s(u) && s(u).parentNode && s(u).parentNode.removeChild(s(u)), Q(u, null), Q(h, null), Q(d, null), s(v) && clearTimeout(s(v));
  }
  Hn(x), xe(() => {
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
      `, s(d).appendChild(C), Q(h, document.createElement("div"), !0), s(d).appendChild(s(h)), Q(
          m,
          new MutationObserver(() => {
            s(f) && _();
          }),
          !0
        ), s(m).observe(document.body, { childList: !0, subtree: !0 });
      }
      s(h) && (s(h).className = `bubble ${r()}`, s(h).innerHTML = n()), s(u) && (s(u).style.opacity = "1", _());
    }
  }), xe(() => {
    if (s(f) || !s(u))
      return;
    s(u).style.opacity = "0";
    const C = s(u), P = setTimeout(
      () => {
        C && C.parentNode && C.parentNode.removeChild(C), s(u) === C && x();
      },
      a()
    );
    return () => clearTimeout(P);
  });
  var w = rb();
  w.__keydown = [nb, n, g, I];
  var A = Ie(w);
  Ae(A, () => e.children ?? ge), Te(w, (C) => Q(l, C), () => s(l)), Fe(() => {
    Tr(w, "aria-describedby", n() && !o() ? c : void 0), Tr(w, "aria-haspopup", n() ? "true" : void 0), Tr(w, "aria-expanded", n() ? s(f) ? "true" : "false" : void 0);
  }), ba("mouseenter", w, E), ba("mouseleave", w, T), ba("focus", w, S), ba("blur", w, b), O(t, w), Oe();
}
lr(["keydown"]);
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
var hn = {
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
var ib = (
  /** @class */
  function(t) {
    $e(e, t);
    function e(n) {
      var r = t.call(this, fe(fe({}, e.defaultAdapter), n)) || this;
      return r.observer = null, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return hn;
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
      this.determinate = !this.adapter.hasClass(hn.INDETERMINATE_CLASS), this.adapter.addClass(hn.ANIMATION_READY_CLASS), this.progress = 0, this.buffer = 1, this.observer = this.adapter.attachResizeObserver(function(r) {
        var i, a;
        if (!n.determinate)
          try {
            for (var o = Lt(r), c = o.next(); !c.done; c = o.next()) {
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
        this.adapter.removeClass(hn.INDETERMINATE_CLASS), this.adapter.setAttribute(Mn.ARIA_VALUENOW, this.progress.toString()), this.adapter.setAttribute(Mn.ARIA_VALUEMAX, "1"), this.adapter.setAttribute(Mn.ARIA_VALUEMIN, "0"), this.setPrimaryBarProgress(this.progress), this.setBufferBarProgress(this.buffer);
        return;
      }
      this.observer && this.calculateAndSetDimensions(this.adapter.getWidth()), this.adapter.addClass(hn.INDETERMINATE_CLASS), this.adapter.removeAttribute(Mn.ARIA_VALUENOW), this.adapter.removeAttribute(Mn.ARIA_VALUEMAX), this.adapter.removeAttribute(Mn.ARIA_VALUEMIN), this.setPrimaryBarProgress(1), this.setBufferBarProgress(1);
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
      this.adapter.removeClass(hn.CLOSED_CLASS), this.adapter.removeClass(hn.CLOSED_ANIMATION_OFF_CLASS), this.adapter.removeAttribute(Mn.ARIA_HIDDEN);
    }, e.prototype.close = function() {
      this.adapter.addClass(hn.CLOSED_CLASS), this.adapter.setAttribute(Mn.ARIA_HIDDEN, "true");
    }, e.prototype.isClosed = function() {
      return this.adapter.hasClass(hn.CLOSED_CLASS);
    }, e.prototype.handleTransitionEnd = function() {
      this.adapter.hasClass(hn.CLOSED_CLASS) && this.adapter.addClass(hn.CLOSED_ANIMATION_OFF_CLASS);
    }, e.prototype.destroy = function() {
      t.prototype.destroy.call(this), this.observer && this.observer.disconnect();
    }, e.prototype.restartAnimation = function() {
      this.adapter.removeClass(hn.ANIMATION_READY_CLASS), this.adapter.forceLayout(), this.adapter.addClass(hn.ANIMATION_READY_CLASS);
    }, e.prototype.setPrimaryBarProgress = function(n) {
      var r = "scaleX(" + n + ")", i = typeof window < "u" ? Mm(window, "transform") : "transform";
      this.adapter.setPrimaryBarStyle(i, r);
    }, e.prototype.setBufferBarProgress = function(n) {
      var r = n * 100 + "%";
      this.adapter.setBufferBarStyle(Mn.FLEX_BASIS, r);
    }, e.prototype.calculateAndSetDimensions = function(n) {
      var r = n * ma.PRIMARY_HALF, i = n * ma.PRIMARY_FULL, a = n * ma.SECONDARY_QUARTER, o = n * ma.SECONDARY_HALF, c = n * ma.SECONDARY_FULL;
      this.adapter.setStyle("--mdc-linear-progress-primary-half", r + "px"), this.adapter.setStyle("--mdc-linear-progress-primary-half-neg", -r + "px"), this.adapter.setStyle("--mdc-linear-progress-primary-full", i + "px"), this.adapter.setStyle("--mdc-linear-progress-primary-full-neg", -i + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-quarter", a + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-quarter-neg", -a + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-half", o + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-half-neg", -o + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-full", c + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-full-neg", -c + "px"), this.restartAnimation();
    }, e;
  }(Ut)
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
var tr = {
  HEADER_CELL_SORTED: "mdc-data-table__header-cell--sorted",
  HEADER_CELL_SORTED_DESCENDING: "mdc-data-table__header-cell--sorted-descending",
  IN_PROGRESS: "mdc-data-table--in-progress",
  ROW_SELECTED: "mdc-data-table__row--selected"
}, bu = {
  ARIA_SELECTED: "aria-selected",
  ARIA_SORT: "aria-sort"
}, Yr = {
  ARIA_SELECTED: bu.ARIA_SELECTED,
  ARIA_SORT: bu.ARIA_SORT
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
var ab = (
  /** @class */
  function(t) {
    $e(e, t);
    function e(n) {
      return t.call(this, fe(fe({}, e.defaultAdapter), n)) || this;
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
      return _c(this, void 0, void 0, function() {
        return $s(this, function(n) {
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
        o !== i && (this.adapter.removeClassNameByHeaderCellIndex(o, tr.HEADER_CELL_SORTED), this.adapter.removeClassNameByHeaderCellIndex(o, tr.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(o, Yr.ARIA_SORT, pn.NONE), this.adapter.setSortStatusLabelByHeaderCellIndex(o, pn.NONE));
      this.adapter.setClassNameByHeaderCellIndex(i, tr.HEADER_CELL_SORTED);
      var c = this.adapter.getAttributeByHeaderCellIndex(i, Yr.ARIA_SORT), l = pn.NONE;
      c === pn.ASCENDING ? (this.adapter.setClassNameByHeaderCellIndex(i, tr.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(i, Yr.ARIA_SORT, pn.DESCENDING), l = pn.DESCENDING) : c === pn.DESCENDING ? (this.adapter.removeClassNameByHeaderCellIndex(i, tr.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(i, Yr.ARIA_SORT, pn.ASCENDING), l = pn.ASCENDING) : (this.adapter.setAttributeByHeaderCellIndex(i, Yr.ARIA_SORT, pn.ASCENDING), l = pn.ASCENDING), this.adapter.setSortStatusLabelByHeaderCellIndex(i, l), this.adapter.notifySortAction({
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
      }), this.adapter.addClass(tr.IN_PROGRESS);
    }, e.prototype.hideProgress = function() {
      this.adapter.removeClass(tr.IN_PROGRESS);
    }, e.prototype.setHeaderRowCheckboxState = function() {
      this.adapter.getSelectedRowCount() === 0 ? (this.adapter.setHeaderRowCheckboxChecked(!1), this.adapter.setHeaderRowCheckboxIndeterminate(!1)) : this.adapter.getSelectedRowCount() === this.adapter.getRowCount() ? (this.adapter.setHeaderRowCheckboxChecked(!0), this.adapter.setHeaderRowCheckboxIndeterminate(!1)) : (this.adapter.setHeaderRowCheckboxIndeterminate(!0), this.adapter.setHeaderRowCheckboxChecked(!1));
    }, e.prototype.selectRowAtIndex = function(n, r) {
      r ? (this.adapter.addClassAtRowIndex(n, tr.ROW_SELECTED), this.adapter.setAttributeAtRowIndex(n, Yr.ARIA_SELECTED, "true")) : (this.adapter.removeClassAtRowIndex(n, tr.ROW_SELECTED), this.adapter.setAttributeAtRowIndex(n, Yr.ARIA_SELECTED, "false"));
    }, e;
  }(Ut)
), ob = /* @__PURE__ */ ve('<div class="mdc-data-table__progress-indicator"><div class="mdc-data-table__scrim"></div> <!></div>'), sb = /* @__PURE__ */ ve("<div><div><table><!></table></div> <!> <!></div>");
function lb(t, e) {
  Le(e, !0);
  const n = () => Nt(F, "$progressClosed", r), [r, i] = Ln(), { closest: a } = Uo;
  let o = p(e, "use", 19, () => []), c = p(e, "class", 3, ""), l = p(e, "stickyHeader", 3, !1), u = p(e, "sortable", 3, !1), d = p(e, "sort", 15, null), h = p(e, "sortDirection", 15, "ascending"), f = p(e, "sortAscendingAriaLabel", 3, "sorted, ascending"), v = p(e, "sortDescendingAriaLabel", 3, "sorted, descending"), m = p(e, "container$use", 19, () => []), g = p(e, "container$class", 3, ""), I = p(e, "table$use", 19, () => []), E = p(e, "table$class", 3, ""), T = /* @__PURE__ */ ze(e, [
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
  ]), S, b = /* @__PURE__ */ be(void 0), _, x = /* @__PURE__ */ be(void 0), w = /* @__PURE__ */ be(void 0), A = ye({}), C = /* @__PURE__ */ be(ye({ height: "auto", top: "initial" })), P = oe("SMUI:addLayoutListener"), K, H = !1, F = dt(!1), _e = dt(d());
  xe(() => {
    mn(_e, d());
  });
  let k = dt(h());
  xe(() => {
    mn(k, h());
  }), ne("SMUI:checkbox:context", "data-table"), ne("SMUI:linear-progress:context", "data-table"), ne("SMUI:linear-progress:closed", F), ne("SMUI:data-table:sortable", u()), ne("SMUI:data-table:sort", _e), ne("SMUI:data-table:sortDirection", k), ne("SMUI:data-table:sortAscendingAriaLabel", f()), ne("SMUI:data-table:sortDescendingAriaLabel", v()), P && (K = P(N));
  let B;
  xe(() => {
    e.progress && s(b) && B !== n() && (B = n(), n() ? s(b).hideProgress() : s(b).showProgress());
  }), ne("SMUI:checkbox:mount", () => {
    s(b) && H && s(b).layout();
  }), ne("SMUI:data-table:header:mount", (M) => {
    Q(x, M, !0);
  }), ne("SMUI:data-table:header:unmount", () => {
    Q(x, void 0);
  }), ne("SMUI:data-table:body:mount", (M) => {
    Q(w, M, !0);
  }), ne("SMUI:data-table:body:unmount", () => {
    Q(w, void 0);
  }), st(() => (Q(
    b,
    new ab({
      addClass: G,
      removeClass: ee,
      getHeaderCellElements: () => {
        var M;
        return ((M = s(x)) == null ? void 0 : M.cells.map((q) => q.element)) ?? [];
      },
      getHeaderCellCount: () => {
        var M;
        return ((M = s(x)) == null ? void 0 : M.cells.length) ?? 0;
      },
      getAttributeByHeaderCellIndex: (M, q) => {
        var te;
        return ((te = s(x)) == null ? void 0 : te.orderedCells[M].getAttr(q)) ?? null;
      },
      setAttributeByHeaderCellIndex: (M, q, te) => {
        var Ce;
        (Ce = s(x)) == null || Ce.orderedCells[M].addAttr(q, te);
      },
      setClassNameByHeaderCellIndex: (M, q) => {
        var te;
        (te = s(x)) == null || te.orderedCells[M].addClass(q);
      },
      removeClassNameByHeaderCellIndex: (M, q) => {
        var te;
        (te = s(x)) == null || te.orderedCells[M].removeClass(q);
      },
      notifySortAction: (M) => {
        d(M.columnId), h(M.sortValue), Ke(j(), "SMUIDataTableSorted", M);
      },
      getTableContainerHeight: () => _.getBoundingClientRect().height,
      getTableHeaderHeight: () => {
        const M = j().querySelector(".mdc-data-table__header-row");
        if (!M)
          throw new Error("MDCDataTable: Table header element not found.");
        return M.getBoundingClientRect().height;
      },
      setProgressIndicatorStyles: (M) => {
        Q(C, M, !0);
      },
      addClassAtRowIndex: (M, q) => {
        var te;
        (te = s(w)) == null || te.orderedRows[M].addClass(q);
      },
      getRowCount: () => {
        var M;
        return ((M = s(w)) == null ? void 0 : M.rows.length) ?? 0;
      },
      getRowElements: () => {
        var M;
        return ((M = s(w)) == null ? void 0 : M.rows.map((q) => q.element)) ?? [];
      },
      getRowIdAtIndex: (M) => {
        var q;
        return ((q = s(w)) == null ? void 0 : q.orderedRows[M].rowId) ?? null;
      },
      getRowIndexByChildElement: (M) => {
        var q;
        return ((q = s(w)) == null ? void 0 : q.orderedRows.map((te) => te.element).indexOf(a(M, ".mdc-data-table__row"))) ?? -1;
      },
      getSelectedRowCount: () => {
        var M;
        return ((M = s(w)) == null ? void 0 : M.rows.filter((q) => q.selected).length) ?? 0;
      },
      isCheckboxAtRowIndexChecked: (M) => {
        var te;
        const q = (te = s(w)) == null ? void 0 : te.orderedRows[M].checkbox;
        return q ? q.checked : !1;
      },
      isHeaderRowCheckboxChecked: () => {
        var q;
        const M = (q = s(x)) == null ? void 0 : q.checkbox;
        return M ? M.checked : !1;
      },
      isRowsSelectable: () => !!j().querySelector(".mdc-data-table__row-checkbox") || !!j().querySelector(".mdc-data-table__header-row-checkbox"),
      notifyRowSelectionChanged: (M) => {
        var te;
        const q = (te = s(w)) == null ? void 0 : te.orderedRows[M.rowIndex];
        q && Ke(j(), "SMUIDataTableSelectionChanged", {
          row: q.element,
          rowId: q.rowId,
          rowIndex: M.rowIndex,
          selected: M.selected
        });
      },
      notifySelectedAll: () => {
        R(!1), Ke(j(), "SMUIDataTableSelectedAll");
      },
      notifyUnselectedAll: () => {
        R(!1), Ke(j(), "SMUIDataTableUnselectedAll");
      },
      notifyRowClick: (M) => Ke(j(), "SMUIDataTableClickRow", M),
      registerHeaderRowCheckbox: () => {
      },
      registerRowCheckboxes: () => {
      },
      removeClassAtRowIndex: (M, q) => {
        var te;
        (te = s(w)) == null || te.orderedRows[M].removeClass(q);
      },
      setAttributeAtRowIndex: (M, q, te) => {
        var Ce;
        (Ce = s(w)) == null || Ce.orderedRows[M].addAttr(q, te);
      },
      setHeaderRowCheckboxChecked: (M) => {
        var te;
        const q = (te = s(x)) == null ? void 0 : te.checkbox;
        q && (q.checked = M);
      },
      setHeaderRowCheckboxIndeterminate: R,
      setRowCheckboxCheckedAtIndex: (M, q) => {
        var Ce;
        const te = (Ce = s(w)) == null ? void 0 : Ce.orderedRows[M].checkbox;
        te && (te.checked = q);
      },
      setSortStatusLabelByHeaderCellIndex: (M, q) => {
      }
    }),
    !0
  ), s(b).init(), s(b).layout(), H = !0, () => {
    var M;
    (M = s(b)) == null || M.destroy();
  })), Hn(() => {
    K && K();
  });
  function U(M) {
    s(b) && s(b).handleRowCheckboxChange(M);
  }
  function G(M) {
    A[M] || (A[M] = !0);
  }
  function ee(M) {
    (!(M in A) || A[M]) && (A[M] = !1);
  }
  function R(M) {
    var te;
    const q = (te = s(x)) == null ? void 0 : te.checkbox;
    q && (q.indeterminate = M);
  }
  function y(M) {
    if (!s(b) || !M.detail.target)
      return;
    const q = a(M.detail.target, ".mdc-data-table__header-cell--with-sort");
    q && $(q);
  }
  function L(M) {
    if (!s(b) || !M.detail.target)
      return;
    const q = a(M.detail.target, ".mdc-data-table__row");
    q && s(b) && s(b).handleRowClick({ rowId: M.detail.rowId, row: q });
  }
  function $(M) {
    var Ct, kt;
    const q = ((Ct = s(x)) == null ? void 0 : Ct.orderedCells) ?? [], te = q.map((Rn) => Rn.element).indexOf(M);
    if (te === -1)
      return;
    const Ce = q[te].columnId ?? null;
    (kt = s(b)) == null || kt.handleSortAction({ columnId: Ce, columnIndex: te, headerCell: M });
  }
  function N() {
    var M;
    return (M = s(b)) == null ? void 0 : M.layout();
  }
  function j() {
    return S;
  }
  var de = { layout: N, getElement: j }, V = sb(), se = (M) => {
    var q;
    s(b) && s(b).handleHeaderRowCheckboxChange(), (q = e.onSMUIDataTableHeaderCheckboxChange) == null || q.call(e, M);
  }, X = (M) => {
    var q;
    y(M), (q = e.onSMUIDataTableHeaderClick) == null || q.call(e, M);
  }, he = (M) => {
    var q;
    L(M), (q = e.onSMUIDataTableRowClick) == null || q.call(e, M);
  }, ie = (M) => {
    var q;
    U(M), (q = e.onSMUIDataTableBodyCheckboxChange) == null || q.call(e, M);
  };
  ke(
    V,
    (M, q) => ({
      class: M,
      ...q,
      onSMUIDataTableHeaderCheckboxChange: se,
      onSMUIDataTableHeaderClick: X,
      onSMUIDataTableRowClick: he,
      onSMUIDataTableBodyCheckboxChange: ie
    }),
    [
      () => He({
        "mdc-data-table": !0,
        "mdc-data-table--sticky-header": l(),
        ...A,
        [c()]: !0
      }),
      () => ta(T, ["container$", "table$"])
    ]
  );
  var qe = Ie(V);
  ke(qe, (M, q) => ({ class: M, ...q }), [
    () => He({
      "mdc-data-table__table-container": !0,
      [g()]: !0
    }),
    () => lt(T, "container$")
  ]);
  var Ue = Ie(qe);
  ke(Ue, (M, q) => ({ class: M, ...q }), [
    () => He({ "mdc-data-table__table": !0, [E()]: !0 }),
    () => lt(T, "table$")
  ]);
  var Xe = Ie(Ue);
  Ae(Xe, () => e.children ?? ge), Be(Ue, (M, q) => z == null ? void 0 : z(M, q), I), Te(qe, (M) => _ = M, () => _), Be(qe, (M, q) => z == null ? void 0 : z(M, q), m);
  var De = Ee(qe, 2);
  {
    var ue = (M) => {
      var q = ob(), te = Ee(Ie(q), 2);
      Ae(te, () => e.progress ?? ge), Fe((Ce) => rn(q, Ce), [
        () => Object.entries(s(C)).map(([Ce, Ct]) => `${Ce}: ${Ct};`).join(" ")
      ]), O(M, q);
    };
    le(De, (M) => {
      e.progress && M(ue);
    });
  }
  var we = Ee(De, 2);
  Ae(we, () => e.paginate ?? ge), Te(V, (M) => S = M, () => S), Be(V, (M, q) => z == null ? void 0 : z(M, q), o), O(t, V);
  var Pe = Oe(de);
  return i(), Pe;
}
var ub = /* @__PURE__ */ ve("<thead><!></thead>");
function cb(t, e) {
  Le(e, !0);
  let n = p(e, "use", 19, () => []), r = /* @__PURE__ */ ze(e, ["$$slots", "$$events", "$$legacy", "use", "children"]), i, a = /* @__PURE__ */ be(void 0), o = [];
  const c = /* @__PURE__ */ new WeakMap();
  ne("SMUI:data-table:row:header", !0);
  const l = oe("SMUI:checkbox:mount");
  ne("SMUI:checkbox:mount", (E) => {
    Q(a, E, !0), l && l(E);
  });
  const u = oe("SMUI:checkbox:unmount");
  ne("SMUI:checkbox:unmount", (E) => {
    Q(a, void 0), u && u(E);
  }), ne("SMUI:data-table:cell:mount", (E) => {
    o.push(E), c.set(E.element, E);
  }), ne("SMUI:data-table:cell:unmount", (E) => {
    const T = o.findIndex((S) => S === E);
    T !== -1 && o.splice(T, 1), c.delete(E.element);
  });
  const d = oe("SMUI:data-table:header:mount"), h = oe("SMUI:data-table:header:unmount");
  st(() => {
    const E = {
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
    return d && d(E), () => {
      h && h(E);
    };
  });
  function f() {
    return [
      ...v().querySelectorAll(".mdc-data-table__header-cell")
    ].map((E) => c.get(E)).filter((E) => E && E._smui_data_table_header_cell_accessor);
  }
  function v() {
    return i;
  }
  var m = { getElement: v }, g = ub();
  ke(g, () => ({ ...r }));
  var I = Ie(g);
  return Ae(I, () => e.children ?? ge), Te(g, (E) => i = E, () => i), Be(g, (E, T) => z == null ? void 0 : z(E, T), n), O(t, g), Oe(m);
}
var db = /* @__PURE__ */ ve("<tbody><!></tbody>");
function fb(t, e) {
  Le(e, !0);
  let n = p(e, "use", 19, () => []), r = p(e, "class", 3, ""), i = /* @__PURE__ */ ze(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "children"
  ]), a, o = [];
  const c = /* @__PURE__ */ new WeakMap();
  ne("SMUI:data-table:row:header", !1), ne("SMUI:data-table:row:mount", (g) => {
    o.push(g), c.set(g.element, g);
  }), ne("SMUI:data-table:row:unmount", (g) => {
    const I = o.findIndex((E) => E === g);
    I !== -1 && o.splice(I, 1), c.delete(g.element);
  });
  const l = oe("SMUI:data-table:body:mount"), u = oe("SMUI:data-table:body:unmount");
  st(() => {
    const g = {
      get rows() {
        return o;
      },
      get orderedRows() {
        return d();
      }
    };
    return l && l(g), () => {
      u && u(g);
    };
  });
  function d() {
    return [...h().querySelectorAll(".mdc-data-table__row")].map((g) => c.get(g)).filter((g) => g && g._smui_data_table_row_accessor);
  }
  function h() {
    return a;
  }
  var f = { getElement: h }, v = db();
  ke(v, (g) => ({ class: g, ...i }), [
    () => He({ "mdc-data-table__content": !0, [r()]: !0 })
  ]);
  var m = Ie(v);
  return Ae(m, () => e.children ?? ge), Te(v, (g) => a = g, () => a), Be(v, (g, I) => z == null ? void 0 : z(g, I), n), O(t, v), Oe(f);
}
let hb = 0;
var vb = /* @__PURE__ */ ve("<tr><!></tr>");
function os(t, e) {
  Le(e, !0);
  let n = p(e, "use", 19, () => []), r = p(e, "class", 3, ""), i = p(e, "rowId", 19, () => "SMUI-data-table-row-" + hb++), a = /* @__PURE__ */ ze(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "rowId",
    "children"
  ]), o, c = /* @__PURE__ */ be(void 0), l = ye({}), u = ye({}), d = oe("SMUI:data-table:row:header");
  const h = oe("SMUI:checkbox:mount");
  ne("SMUI:checkbox:mount", (P) => {
    Q(c, P, !0), h && h(P);
  });
  const f = oe("SMUI:checkbox:unmount");
  ne("SMUI:checkbox:unmount", (P) => {
    Q(c, void 0), f && f(P);
  });
  const v = oe("SMUI:data-table:row:mount"), m = oe("SMUI:data-table:row:unmount");
  st(() => {
    const P = d ? {
      _smui_data_table_row_accessor: !1,
      get element() {
        return _();
      },
      get checkbox() {
        return s(c);
      },
      get rowId() {
      },
      get selected() {
        return (s(c) && s(c).checked) ?? !1;
      },
      addClass: g,
      removeClass: I,
      getAttr: E,
      addAttr: T
    } : {
      _smui_data_table_row_accessor: !0,
      get element() {
        return _();
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
      addClass: g,
      removeClass: I,
      getAttr: E,
      addAttr: T
    };
    return v && v(P), () => {
      m && m(P);
    };
  });
  function g(P) {
    l[P] || (l[P] = !0);
  }
  function I(P) {
    (!(P in l) || l[P]) && (l[P] = !1);
  }
  function E(P) {
    return P in u ? u[P] ?? null : _().getAttribute(P);
  }
  function T(P, K) {
    u[P] !== K && (u[P] = K);
  }
  function S(P) {
    Ke(_(), "SMUIDataTableHeaderClick", P);
  }
  function b(P) {
    Ke(_(), "SMUIDataTableRowClick", { rowId: i(), target: P.target });
  }
  function _() {
    return o;
  }
  var x = { getElement: _ }, w = vb(), A = (P) => {
    var K;
    d ? S(P) : b(P), (K = e.onclick) == null || K.call(e, P);
  };
  ke(
    w,
    (P) => ({
      class: P,
      "aria-selected": s(c) ? s(c).checked ? "true" : "false" : void 0,
      ...u,
      ...a,
      onclick: A
    }),
    [
      () => He({
        "mdc-data-table__header-row": d,
        "mdc-data-table__row": !d,
        "mdc-data-table__row--selected": !d && s(c) && s(c).checked,
        ...l,
        [r()]: !0
      })
    ]
  );
  var C = Ie(w);
  return Ae(C, () => e.children ?? ge), Te(w, (P) => o = P, () => o), Be(w, (P, K) => z == null ? void 0 : z(P, K), n), O(t, w), Oe(x);
}
let pb = 0;
var mb = /* @__PURE__ */ ve('<div class="mdc-data-table__header-cell-wrapper"><!> <div class="mdc-data-table__sort-status-label" aria-hidden="true"> </div></div>'), gb = /* @__PURE__ */ ve("<th><!></th>"), bb = /* @__PURE__ */ ve("<td><!></td>");
function Ja(t, e) {
  Le(e, !0);
  const n = () => Nt(E, "$sort", i), r = () => Nt(T, "$sortDirection", i), [i, a] = Ln();
  let o = oe("SMUI:data-table:row:header"), c = p(e, "use", 19, () => []), l = p(e, "class", 3, ""), u = p(e, "numeric", 3, !1), d = p(e, "checkbox", 3, !1), h = p(e, "columnId", 19, () => o ? "SMUI-data-table-column-" + pb++ : "SMUI-data-table-unused"), f = p(e, "sortable", 19, () => oe("SMUI:data-table:sortable")), v = /* @__PURE__ */ ze(e, [
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
  ]), m, g = ye({}), I = ye({}), E = oe("SMUI:data-table:sort"), T = oe("SMUI:data-table:sortDirection"), S = oe("SMUI:data-table:sortAscendingAriaLabel"), b = oe("SMUI:data-table:sortDescendingAriaLabel");
  f() && (ne("SMUI:label:context", "data-table:sortable-header-cell"), ne("SMUI:icon-button:context", "data-table:sortable-header-cell"), ne("SMUI:icon-button:aria-describedby", h() + "-status-label"));
  const _ = oe("SMUI:data-table:cell:mount"), x = oe("SMUI:data-table:cell:unmount");
  st(() => {
    const R = o ? {
      _smui_data_table_header_cell_accessor: !0,
      get element() {
        return F();
      },
      get columnId() {
        return h();
      },
      addClass: w,
      removeClass: A,
      getAttr: C,
      addAttr: P
    } : {
      _smui_data_table_header_cell_accessor: !1,
      get element() {
        return F();
      },
      get columnId() {
      },
      addClass: w,
      removeClass: A,
      getAttr: C,
      addAttr: P
    };
    return _ && _(R), () => {
      x && x(R);
    };
  });
  function w(R) {
    g[R] || (g[R] = !0);
  }
  function A(R) {
    (!(R in g) || g[R]) && (g[R] = !1);
  }
  function C(R) {
    return R in I ? I[R] ?? null : F().getAttribute(R);
  }
  function P(R, y) {
    I[R] !== y && (I[R] = y);
  }
  function K(R) {
    Ke(F(), "SMUIDataTableHeaderCheckboxChange", R);
  }
  function H(R) {
    Ke(F(), "SMUIDataTableBodyCheckboxChange", R);
  }
  function F() {
    return m;
  }
  var _e = { getElement: F }, k = re(), B = Y(k);
  {
    var U = (R) => {
      var y = gb(), L = (de) => {
        var V;
        d() && K(de), (V = e.onchange) == null || V.call(e, de);
      };
      ke(
        y,
        (de) => ({
          class: de,
          role: "columnheader",
          scope: "col",
          "data-column-id": h(),
          "aria-sort": f() ? n() === h() ? r() : "none" : void 0,
          ...I,
          ...v,
          onchange: L
        }),
        [
          () => He({
            "mdc-data-table__header-cell": !0,
            "mdc-data-table__header-cell--numeric": u(),
            "mdc-data-table__header-cell--checkbox": d(),
            "mdc-data-table__header-cell--with-sort": f(),
            "mdc-data-table__header-cell--sorted": f() && n() === h(),
            ...g,
            [l()]: !0
          })
        ]
      );
      var $ = Ie(y);
      {
        var N = (de) => {
          var V = mb(), se = Ie(V);
          Ae(se, () => e.children ?? ge);
          var X = Ee(se, 2), he = Ie(X);
          Fe(() => {
            Tr(X, "id", `${h() ?? ""}-status-label`), vt(he, n() === h() ? r() === "ascending" ? S : b : "");
          }), O(de, V);
        }, j = (de) => {
          var V = re(), se = Y(V);
          Ae(se, () => e.children ?? ge), O(de, V);
        };
        le($, (de) => {
          f() ? de(N) : de(j, !1);
        });
      }
      Te(y, (de) => m = de, () => m), Be(y, (de, V) => z == null ? void 0 : z(de, V), c), O(R, y);
    }, G = (R) => {
      var y = bb(), L = (N) => {
        var j;
        d() && H(N), (j = e.onchange) == null || j.call(e, N);
      };
      ke(
        y,
        (N) => ({
          class: N,
          ...I,
          ...v,
          onchange: L
        }),
        [
          () => He({
            "mdc-data-table__cell": !0,
            "mdc-data-table__cell--numeric": u(),
            "mdc-data-table__cell--checkbox": d(),
            ...g,
            [l()]: !0
          })
        ]
      );
      var $ = Ie(y);
      Ae($, () => e.children ?? ge), Te(y, (N) => m = N, () => m), Be(y, (N, j) => z == null ? void 0 : z(N, j), c), O(R, y);
    };
    le(B, (R) => {
      o ? R(U) : R(G, !1);
    });
  }
  O(t, k);
  var ee = Oe(_e);
  return a(), ee;
}
lr(["click"]);
lr(["click"]);
function Rs(t, e, n) {
  return e in t ? Object.defineProperty(t, e, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = n, t;
}
var yb = Object.freeze({
  // This flag exists as a workaround for issue 454 (basically a browser bug) - seems like these rect values take time to update when in grid layout. Setting it to true can cause strange behaviour in the REPL for non-grid zones, see issue 470
  USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT: "USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT"
});
Rs({}, yb.USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT, !1);
var $a, yu = {
  DND_ZONE_ACTIVE: "dnd-zone-active",
  DND_ZONE_DRAG_DISABLED: "dnd-zone-drag-disabled"
};
$a = {}, Rs($a, yu.DND_ZONE_ACTIVE, "Tab to one the items and press space-bar or enter to start dragging it"), Rs($a, yu.DND_ZONE_DRAG_DISABLED, "This is a disabled drag and drop list");
const Ib = dt([]);
Ib.subscribe;
lr([
  "click",
  "keydown",
  "pointerdown",
  "pointerup",
  "pointermove"
]);
lr(["click"]);
const _b = 4e3;
function Eb() {
  let t = ye({ items: [] }), e = 0;
  const n = (i) => {
    t.items = t.items.filter((a) => a.id !== i);
  }, r = (i, a, o, c = _b) => {
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
Eb();
var Ab = /* @__PURE__ */ ve('<div><div class="mdc-linear-progress__buffer"><div class="mdc-linear-progress__buffer-bar"></div> <div class="mdc-linear-progress__buffer-dots"></div></div> <div class="mdc-linear-progress__bar mdc-linear-progress__primary-bar"><span class="mdc-linear-progress__bar-inner"></span></div> <div class="mdc-linear-progress__bar mdc-linear-progress__secondary-bar"><span class="mdc-linear-progress__bar-inner"></span></div></div>');
function Cb(t, e) {
  Le(e, !0);
  const [n, r] = Ln();
  let i = p(e, "use", 19, () => []), a = p(e, "class", 3, ""), o = p(e, "style", 3, ""), c = p(e, "indeterminate", 3, !1), l = p(e, "closed", 3, !1), u = p(e, "progress", 3, 0), d = p(e, "buffer", 3, void 0), h = /* @__PURE__ */ ze(e, [
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
  ]), f, v = /* @__PURE__ */ be(void 0), m = ye({}), g = ye({}), I = ye({}), E = ye({}), T = ye({}), S = oe("SMUI:linear-progress:context"), b = oe("SMUI:linear-progress:closed");
  xe(() => {
    b && mn(b, l());
  }), xe(() => {
    s(v) && s(v).isDeterminate() !== !c() && s(v).setDeterminate(!c());
  }), xe(() => {
    s(v) && s(v).getProgress() !== u() && s(v).setProgress(u());
  }), xe(() => {
    s(v) && (d() == null ? s(v).setBuffer(1) : s(v).setBuffer(d()));
  }), xe(() => {
    s(v) && (l() ? s(v).close() : s(v).open());
  }), st(() => (Q(
    v,
    new ib({
      addClass: x,
      forceLayout: () => {
        F().getBoundingClientRect();
      },
      setBufferBarStyle: K,
      setPrimaryBarStyle: H,
      hasClass: _,
      removeAttribute: C,
      removeClass: w,
      setAttribute: A,
      setStyle: P,
      attachResizeObserver: (y) => {
        const L = window.ResizeObserver;
        if (L) {
          const $ = new L(y);
          return $.observe(F()), $;
        }
        return null;
      },
      getWidth: () => F().offsetWidth
    }),
    !0
  ), s(v).init(), () => {
    var y;
    (y = s(v)) == null || y.destroy();
  }));
  function _(y) {
    return y in m ? m[y] : F().classList.contains(y);
  }
  function x(y) {
    m[y] || (m[y] = !0);
  }
  function w(y) {
    (!(y in m) || m[y]) && (m[y] = !1);
  }
  function A(y, L) {
    g[y] !== L && (g[y] = L);
  }
  function C(y) {
    (!(y in g) || g[y] != null) && (g[y] = void 0);
  }
  function P(y, L) {
    I[y] != L && (L === "" || L == null ? delete I[y] : I[y] = L);
  }
  function K(y, L) {
    E[y] != L && (L === "" || L == null ? delete E[y] : E[y] = L);
  }
  function H(y, L) {
    T[y] != L && (L === "" || L == null ? delete T[y] : T[y] = L);
  }
  function F() {
    return f;
  }
  var _e = { getElement: F }, k = Ab(), B = (y) => {
    var L;
    s(v) && s(v).handleTransitionEnd(), (L = e.ontransitionend) == null || L.call(e, y);
  };
  ke(
    k,
    (y, L) => ({
      class: y,
      style: L,
      role: "progressbar",
      "aria-valuemin": 0,
      "aria-valuemax": 1,
      "aria-valuenow": c() ? void 0 : u(),
      ...g,
      ...h,
      ontransitionend: B
    }),
    [
      () => He({
        "mdc-linear-progress": !0,
        "mdc-linear-progress--indeterminate": c(),
        "mdc-linear-progress--closed": l(),
        "mdc-data-table__linear-progress": S === "data-table",
        ...m,
        [a()]: !0
      }),
      () => Object.entries(I).map(([y, L]) => `${y}: ${L};`).concat([o()]).join(" ")
    ]
  );
  var U = Ie(k), G = Ie(U), ee = Ee(U, 2);
  Te(k, (y) => f = y, () => f), Be(k, (y, L) => z == null ? void 0 : z(y, L), i), Fe(
    (y, L) => {
      rn(G, y), rn(ee, L);
    },
    [
      () => Object.entries(E).map(([y, L]) => `${y}: ${L};`).join(" "),
      () => Object.entries(T).map(([y, L]) => `${y}: ${L};`).join(" ")
    ]
  ), O(t, k);
  var R = Oe(_e);
  return r(), R;
}
var Sb = /* @__PURE__ */ dn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor" class="svelte-1mj71p3"><path d="M12 4l-8 8h16l-8-8z"></path></svg>'), xb = /* @__PURE__ */ dn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor" class="svelte-1mj71p3"><path d="M12 20l8-8H4l8 8z"></path></svg>'), Tb = /* @__PURE__ */ ve('<div class="custom-cell-container svelte-1mj71p3"><div class="cell-header svelte-1mj71p3"><span class="header-title svelte-1mj71p3"> </span> <!></div></div>'), wb = (t, e) => e(), Lb = /* @__PURE__ */ ve('<input type="text" class="svelte-1mj71p3"/>'), Ob = (t, e) => e(), Rb = /* @__PURE__ */ ve('<input type="number" class="svelte-1mj71p3"/>'), Mb = /* @__PURE__ */ ve("<!> <!>", 1), Db = /* @__PURE__ */ ve("<!> <!>", 1), Pb = /* @__PURE__ */ ve('<div class="cell-actions svelte-1mj71p3"></div>'), Nb = /* @__PURE__ */ ve("<!> <!>", 1);
function Ub(t, e) {
  Le(e, !0);
  const n = () => Nt(g, "$sortColumn", a), r = () => Nt(I, "$sortDirection", a), i = () => Nt(m, "$filteredData", a), [a, o] = Ln();
  let c = p(e, "loadingDone", 15, !0), l = p(e, "label", 19, br), u = p(e, "columnDefs", 19, () => []), d = p(e, "rowData", 31, () => ye([])), h = p(e, "rowActions", 19, () => []), f = p(e, "searchInputLabel", 3, "Search"), v = ye({ name: "", color: "", number: "" }), m = dt([]), g = dt(null), I = dt(null);
  e.store.store.subscribe((b) => {
    d([...b]), E();
  });
  function E() {
    let b = d().filter((_) => u().every((x) => {
      const w = v[x.field], A = x.filterValueGetter ? x.filterValueGetter(_) : _[x.field];
      return w ? x.filterType === "number" ? A == w : A.toString().toLowerCase().includes(w.toLowerCase()) : !0;
    }));
    b = T(b), m.set(b);
  }
  function T(b) {
    let _, x;
    return g.subscribe((w) => _ = w), I.subscribe((w) => x = w), !_ || !x ? b : b.sort((w, A) => {
      let C = w[_], P = A[_];
      return C == null && (C = ""), P == null && (P = ""), x === "asc" ? C.toString().localeCompare(P.toString()) : P.toString().localeCompare(C.toString());
    });
  }
  function S(b) {
    g.update((_) => {
      if (_ === b)
        I.update((x) => x === "asc" ? "desc" : x === "desc" ? null : "asc");
      else
        return I.set("asc"), b;
      return b;
    }), E();
  }
  m.set(d()), lb(t, {
    get "table$aria-label"() {
      return l();
    },
    style: "max-width: 100%; width: 100%;",
    progress: (_) => {
      Cb(_, {
        indeterminate: !0,
        "aria-label": "Data is being loaded...",
        get closed() {
          return c();
        },
        set closed(x) {
          c(x);
        }
      });
    },
    children: (_, x) => {
      var w = Nb(), A = Y(w);
      cb(A, {
        children: (P, K) => {
          var H = Db(), F = Y(H);
          os(F, {
            class: "header-title-row",
            children: (k, B) => {
              var U = re(), G = Y(U);
              rr(G, 17, u, Ia, (ee, R) => {
                Ja(ee, {
                  onclick: () => s(R).sortable && S(s(R).field),
                  get style() {
                    return s(R).headerStyle;
                  },
                  children: (y, L) => {
                    var $ = Tb(), N = Ie($), j = Ie(N), de = Ie(j), V = Ee(j, 2);
                    {
                      var se = (X) => {
                        var he = re(), ie = Y(he);
                        {
                          var qe = (Ue) => {
                            var Xe = re(), De = Y(Xe);
                            {
                              var ue = (Pe) => {
                                var M = Sb();
                                O(Pe, M);
                              }, we = (Pe) => {
                                var M = re(), q = Y(M);
                                {
                                  var te = (Ce) => {
                                    var Ct = xb();
                                    O(Ce, Ct);
                                  };
                                  le(
                                    q,
                                    (Ce) => {
                                      r() === "desc" && Ce(te);
                                    },
                                    !0
                                  );
                                }
                                O(Pe, M);
                              };
                              le(De, (Pe) => {
                                r() === "asc" ? Pe(ue) : Pe(we, !1);
                              });
                            }
                            O(Ue, Xe);
                          };
                          le(ie, (Ue) => {
                            n() === s(R).field && r() !== null && Ue(qe);
                          });
                        }
                        O(X, he);
                      };
                      le(V, (X) => {
                        s(R).sortable && X(se);
                      });
                    }
                    Fe(() => {
                      rn($, `min-width: ${s(R).minWidth ?? 0 ?? ""}`), vt(de, s(R).headerName);
                    }), O(y, $);
                  },
                  $$slots: { default: !0 }
                });
              }), O(k, U);
            },
            $$slots: { default: !0 }
          });
          var _e = Ee(F, 2);
          os(_e, {
            class: "header-filter-row",
            children: (k, B) => {
              var U = re(), G = Y(U);
              rr(G, 17, u, Ia, (ee, R) => {
                Ja(ee, {
                  children: (y, L) => {
                    var $ = re(), N = Y($);
                    {
                      var j = (de) => {
                        var V = Mb(), se = Y(V);
                        {
                          var X = (qe) => {
                            var Ue = Lb();
                            Ue.__input = [wb, E], Fe(() => Tr(Ue, "placeholder", `${f()} ${s(R).headerName}`)), wa(Ue, () => v[s(R).field], (Xe) => v[s(R).field] = Xe), O(qe, Ue);
                          };
                          le(se, (qe) => {
                            s(R).filterType === "text" && qe(X);
                          });
                        }
                        var he = Ee(se, 2);
                        {
                          var ie = (qe) => {
                            var Ue = Rb();
                            Ue.__input = [Ob, E], Fe(() => Tr(Ue, "placeholder", `${f()} ${s(R).headerName}`)), wa(Ue, () => v[s(R).field], (Xe) => v[s(R).field] = Xe), O(qe, Ue);
                          };
                          le(he, (qe) => {
                            s(R).filterType === "number" && qe(ie);
                          });
                        }
                        O(de, V);
                      };
                      le(N, (de) => {
                        s(R).filter && de(j);
                      });
                    }
                    O(y, $);
                  },
                  $$slots: { default: !0 }
                });
              }), O(k, U);
            },
            $$slots: { default: !0 }
          }), O(P, H);
        },
        $$slots: { default: !0 }
      });
      var C = Ee(A, 2);
      fb(C, {
        children: (P, K) => {
          var H = re(), F = Y(H);
          rr(F, 1, i, Ia, (_e, k) => {
            os(_e, {
              children: (B, U) => {
                var G = re(), ee = Y(G);
                rr(ee, 17, u, (R) => R.field, (R, y) => {
                  var L = re(), $ = Y(L);
                  {
                    var N = (de) => {
                      Ja(de, {
                        children: (V, se) => {
                          var X = Pb();
                          rr(X, 21, h, Ia, (he, ie) => {
                            var qe = re(), Ue = Y(qe);
                            {
                              var Xe = (ue) => {
                                gu(ue, {
                                  get content() {
                                    return s(ie).tooltip;
                                  },
                                  hoverDelay: 500,
                                  children: (we, Pe) => {
                                    {
                                      let M = /* @__PURE__ */ ae(() => s(ie).disabled(s(k)));
                                      kp(we, {
                                        get iconComponent() {
                                          return s(ie).iconComponent;
                                        },
                                        get iconStyles() {
                                          return s(ie).iconStyles;
                                        },
                                        callback: () => s(ie).callback(s(k)),
                                        get disabled() {
                                          return s(M);
                                        }
                                      });
                                    }
                                  },
                                  $$slots: { default: !0 }
                                });
                              }, De = (ue) => {
                                gu(ue, {
                                  get content() {
                                    return s(ie).tooltip;
                                  },
                                  hoverDelay: 500,
                                  children: (we, Pe) => {
                                    {
                                      let M = /* @__PURE__ */ ae(() => s(ie).disabled(s(k)));
                                      rl(we, {
                                        class: "button",
                                        variant: "raised",
                                        callback: () => s(ie).callback(s(k)),
                                        get disabled() {
                                          return s(M);
                                        },
                                        children: (q, te) => {
                                          var Ce = re(), Ct = Y(Ce);
                                          {
                                            var kt = (ce) => {
                                              wg(ce, { svgStyles: "margin: unset" });
                                            }, Rn = (ce) => {
                                              var me = re(), W = Y(me);
                                              {
                                                var Z = (et) => {
                                                  id(et, { svgStyles: "margin: unset" });
                                                }, Me = (et) => {
                                                  var pt = re(), Ot = Y(pt);
                                                  {
                                                    var Vt = (nt) => {
                                                      Rg(nt, { svgStyles: "margin: unset" });
                                                    }, fr = (nt) => {
                                                      var St = re(), Gt = Y(St);
                                                      {
                                                        var Fn = (Yt) => {
                                                          Dg(Yt, { svgStyles: "margin: unset" });
                                                        }, mi = (Yt) => {
                                                          var Ge = re(), at = Y(Ge);
                                                          {
                                                            var tt = (Mt) => {
                                                              Bg(Mt, { svgStyles: "margin: unset" });
                                                            }, Rt = (Mt) => {
                                                              var rt = re(), yt = Y(rt);
                                                              {
                                                                var xt = (ft) => {
                                                                  Vg(ft, { svgStyles: "margin: unset" });
                                                                }, Je = (ft) => {
                                                                  var yn = re(), sn = Y(yn);
                                                                  {
                                                                    var It = (Tt) => {
                                                                      jg(Tt, { svgStyles: "margin: unset" });
                                                                    }, Dt = (Tt) => {
                                                                      Ng(Tt, { svgStyles: "margin: unset" });
                                                                    };
                                                                    le(
                                                                      sn,
                                                                      (Tt) => {
                                                                        s(ie).icon === "delete" ? Tt(It) : Tt(Dt, !1);
                                                                      },
                                                                      !0
                                                                    );
                                                                  }
                                                                  O(ft, yn);
                                                                };
                                                                le(
                                                                  yt,
                                                                  (ft) => {
                                                                    s(ie).icon === "edit" ? ft(xt) : ft(Je, !1);
                                                                  },
                                                                  !0
                                                                );
                                                              }
                                                              O(Mt, rt);
                                                            };
                                                            le(
                                                              at,
                                                              (Mt) => {
                                                                s(ie).icon === "remove" ? Mt(tt) : Mt(Rt, !1);
                                                              },
                                                              !0
                                                            );
                                                          }
                                                          O(Yt, Ge);
                                                        };
                                                        le(
                                                          Gt,
                                                          (Yt) => {
                                                            s(ie).icon === "find-in-page" ? Yt(Fn) : Yt(mi, !1);
                                                          },
                                                          !0
                                                        );
                                                      }
                                                      O(nt, St);
                                                    };
                                                    le(
                                                      Ot,
                                                      (nt) => {
                                                        s(ie).icon === "download" ? nt(Vt) : nt(fr, !1);
                                                      },
                                                      !0
                                                    );
                                                  }
                                                  O(et, pt);
                                                };
                                                le(
                                                  W,
                                                  (et) => {
                                                    s(ie).icon === "cancel" ? et(Z) : et(Me, !1);
                                                  },
                                                  !0
                                                );
                                              }
                                              O(ce, me);
                                            };
                                            le(Ct, (ce) => {
                                              s(ie).icon === "add" ? ce(kt) : ce(Rn, !1);
                                            });
                                          }
                                          O(q, Ce);
                                        },
                                        $$slots: { default: !0 }
                                      });
                                    }
                                  },
                                  $$slots: { default: !0 }
                                });
                              };
                              le(Ue, (ue) => {
                                s(ie).iconComponent ? ue(Xe) : ue(De, !1);
                              });
                            }
                            O(he, qe);
                          }), O(V, X);
                        },
                        $$slots: { default: !0 }
                      });
                    }, j = (de) => {
                      Ja(de, {
                        get numeric() {
                          return s(y).numeric;
                        },
                        get style() {
                          return s(y).cellStyle;
                        },
                        children: (V, se) => {
                          var X = re(), he = Y(X);
                          {
                            var ie = (Ue) => {
                              const Xe = /* @__PURE__ */ ae(() => s(y).cellRenderer);
                              var De = re(), ue = Y(De);
                              ur(ue, () => s(Xe), (we, Pe) => {
                                Pe(we, it(
                                  {
                                    get row() {
                                      return s(k);
                                    },
                                    get value() {
                                      return s(k)[s(y).field];
                                    },
                                    get col() {
                                      return s(y);
                                    }
                                  },
                                  () => s(y).cellRendererProps ?? {}
                                ));
                              }), O(Ue, De);
                            }, qe = (Ue) => {
                              var Xe = re(), De = Y(Xe);
                              {
                                var ue = (Pe) => {
                                  var M = Xt();
                                  Fe((q) => vt(M, q), [
                                    () => s(y).valueFormatter(s(k)[s(y).field])
                                  ]), O(Pe, M);
                                }, we = (Pe) => {
                                  var M = Xt();
                                  Fe(() => vt(M, s(k)[s(y).field] ?? "")), O(Pe, M);
                                };
                                le(
                                  De,
                                  (Pe) => {
                                    s(y).valueFormatter ? Pe(ue) : Pe(we, !1);
                                  },
                                  !0
                                );
                              }
                              O(Ue, Xe);
                            };
                            le(he, (Ue) => {
                              s(y).cellRenderer ? Ue(ie) : Ue(qe, !1);
                            });
                          }
                          O(V, X);
                        },
                        $$slots: { default: !0 }
                      });
                    };
                    le($, (de) => {
                      s(y).field === "actions" ? de(N) : de(j, !1);
                    });
                  }
                  O(R, L);
                }), O(B, G);
              },
              $$slots: { default: !0 }
            });
          }), O(P, H);
        },
        $$slots: { default: !0 }
      }), O(_, w);
    },
    $$slots: { progress: !0, default: !0 }
  }), Oe(), o();
}
lr(["input"]);
function bt(t) {
  return typeof t == "function";
}
function ll(t) {
  var e = function(r) {
    Error.call(r), r.stack = new Error().stack;
  }, n = t(e);
  return n.prototype = Object.create(Error.prototype), n.prototype.constructor = n, n;
}
var ss = ll(function(t) {
  return function(n) {
    t(this), this.message = n ? n.length + ` errors occurred during unsubscription:
` + n.map(function(r, i) {
      return i + 1 + ") " + r.toString();
    }).join(`
  `) : "", this.name = "UnsubscriptionError", this.errors = n;
  };
});
function Ms(t, e) {
  if (t) {
    var n = t.indexOf(e);
    0 <= n && t.splice(n, 1);
  }
}
var Bo = function() {
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
            for (var c = Lt(o), l = c.next(); !l.done; l = c.next()) {
              var u = l.value;
              u.remove(this);
            }
          } catch (g) {
            e = { error: g };
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
      if (bt(d))
        try {
          d();
        } catch (g) {
          a = g instanceof ss ? g.errors : [g];
        }
      var h = this._finalizers;
      if (h) {
        this._finalizers = null;
        try {
          for (var f = Lt(h), v = f.next(); !v.done; v = f.next()) {
            var m = v.value;
            try {
              Iu(m);
            } catch (g) {
              a = a ?? [], g instanceof ss ? a = zn(zn([], Or(a)), Or(g.errors)) : a.push(g);
            }
          }
        } catch (g) {
          r = { error: g };
        } finally {
          try {
            v && !v.done && (i = f.return) && i.call(f);
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
        Iu(e);
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
    n === e ? this._parentage = null : Array.isArray(n) && Ms(n, e);
  }, t.prototype.remove = function(e) {
    var n = this._finalizers;
    n && Ms(n, e), e instanceof t && e._removeParent(this);
  }, t.EMPTY = function() {
    var e = new t();
    return e.closed = !0, e;
  }(), t;
}();
Bo.EMPTY;
function od(t) {
  return t instanceof Bo || t && "closed" in t && bt(t.remove) && bt(t.add) && bt(t.unsubscribe);
}
function Iu(t) {
  bt(t) ? t() : t.unsubscribe();
}
var Hb = {
  Promise: void 0
}, Fb = {
  setTimeout: function(t, e) {
    for (var n = [], r = 2; r < arguments.length; r++)
      n[r - 2] = arguments[r];
    return setTimeout.apply(void 0, zn([t, e], Or(n)));
  },
  clearTimeout: function(t) {
    return clearTimeout(t);
  },
  delegate: void 0
};
function sd(t) {
  Fb.setTimeout(function() {
    throw t;
  });
}
function _u() {
}
function Bb(t) {
  t();
}
var ul = function(t) {
  $e(e, t);
  function e(n) {
    var r = t.call(this) || this;
    return r.isStopped = !1, n ? (r.destination = n, od(n) && n.add(r)) : r.destination = Gb, r;
  }
  return e.create = function(n, r, i) {
    return new Ds(n, r, i);
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
}(Bo), kb = function() {
  function t(e) {
    this.partialObserver = e;
  }
  return t.prototype.next = function(e) {
    var n = this.partialObserver;
    if (n.next)
      try {
        n.next(e);
      } catch (r) {
        eo(r);
      }
  }, t.prototype.error = function(e) {
    var n = this.partialObserver;
    if (n.error)
      try {
        n.error(e);
      } catch (r) {
        eo(r);
      }
    else
      eo(e);
  }, t.prototype.complete = function() {
    var e = this.partialObserver;
    if (e.complete)
      try {
        e.complete();
      } catch (n) {
        eo(n);
      }
  }, t;
}(), Ds = function(t) {
  $e(e, t);
  function e(n, r, i) {
    var a = t.call(this) || this, o;
    return bt(n) || !n ? o = {
      next: n ?? void 0,
      error: r ?? void 0,
      complete: i ?? void 0
    } : o = n, a.destination = new kb(o), a;
  }
  return e;
}(ul);
function eo(t) {
  sd(t);
}
function Vb(t) {
  throw t;
}
var Gb = {
  closed: !0,
  next: _u,
  error: Vb,
  complete: _u
}, cl = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}();
function ko(t) {
  return t;
}
function jb(t) {
  return t.length === 0 ? ko : t.length === 1 ? t[0] : function(n) {
    return t.reduce(function(r, i) {
      return i(r);
    }, n);
  };
}
var bn = function() {
  function t(e) {
    e && (this._subscribe = e);
  }
  return t.prototype.lift = function(e) {
    var n = new t();
    return n.source = this, n.operator = e, n;
  }, t.prototype.subscribe = function(e, n, r) {
    var i = this, a = Wb(e) ? e : new Ds(e, n, r);
    return Bb(function() {
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
    return n = Eu(n), new n(function(i, a) {
      var o = new Ds({
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
  }, t.prototype[cl] = function() {
    return this;
  }, t.prototype.pipe = function() {
    for (var e = [], n = 0; n < arguments.length; n++)
      e[n] = arguments[n];
    return jb(e)(this);
  }, t.prototype.toPromise = function(e) {
    var n = this;
    return e = Eu(e), new e(function(r, i) {
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
function Eu(t) {
  var e;
  return (e = t ?? Hb.Promise) !== null && e !== void 0 ? e : Promise;
}
function qb(t) {
  return t && bt(t.next) && bt(t.error) && bt(t.complete);
}
function Wb(t) {
  return t && t instanceof ul || qb(t) && od(t);
}
function Kb(t) {
  return bt(t == null ? void 0 : t.lift);
}
function kr(t) {
  return function(e) {
    if (Kb(e))
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
function Rr(t, e, n, r, i) {
  return new zb(t, e, n, r, i);
}
var zb = function(t) {
  $e(e, t);
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
}(ul), Xb = {
  now: function() {
    return Date.now();
  }
}, Yb = function(t) {
  $e(e, t);
  function e(n, r) {
    return t.call(this) || this;
  }
  return e.prototype.schedule = function(n, r) {
    return this;
  }, e;
}(Bo), Au = {
  setInterval: function(t, e) {
    for (var n = [], r = 2; r < arguments.length; r++)
      n[r - 2] = arguments[r];
    return setInterval.apply(void 0, zn([t, e], Or(n)));
  },
  clearInterval: function(t) {
    return clearInterval(t);
  },
  delegate: void 0
}, Zb = function(t) {
  $e(e, t);
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
    return i === void 0 && (i = 0), Au.setInterval(n.flush.bind(n, this), i);
  }, e.prototype.recycleAsyncId = function(n, r, i) {
    if (i === void 0 && (i = 0), i != null && this.delay === i && this.pending === !1)
      return r;
    r != null && Au.clearInterval(r);
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
      this.work = this.state = this.scheduler = null, this.pending = !1, Ms(a, this), r != null && (this.id = this.recycleAsyncId(i, r, null)), this.delay = null, t.prototype.unsubscribe.call(this);
    }
  }, e;
}(Yb), Cu = function() {
  function t(e, n) {
    n === void 0 && (n = t.now), this.schedulerActionCtor = e, this.now = n;
  }
  return t.prototype.schedule = function(e, n, r) {
    return n === void 0 && (n = 0), new this.schedulerActionCtor(this, e).schedule(r, n);
  }, t.now = Xb.now, t;
}(), Qb = function(t) {
  $e(e, t);
  function e(n, r) {
    r === void 0 && (r = Cu.now);
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
}(Cu), ld = new Qb(Zb), Jb = ld, $b = new bn(function(t) {
  return t.complete();
});
function ud(t) {
  return t && bt(t.schedule);
}
function cd(t) {
  return t[t.length - 1];
}
function ey(t) {
  return bt(cd(t)) ? t.pop() : void 0;
}
function dd(t) {
  return ud(cd(t)) ? t.pop() : void 0;
}
var fd = function(t) {
  return t && typeof t.length == "number" && typeof t != "function";
};
function hd(t) {
  return bt(t == null ? void 0 : t.then);
}
function vd(t) {
  return bt(t[cl]);
}
function pd(t) {
  return Symbol.asyncIterator && bt(t == null ? void 0 : t[Symbol.asyncIterator]);
}
function md(t) {
  return new TypeError("You provided " + (t !== null && typeof t == "object" ? "an invalid object" : "'" + t + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
}
function ty() {
  return typeof Symbol != "function" || !Symbol.iterator ? "@@iterator" : Symbol.iterator;
}
var gd = ty();
function bd(t) {
  return bt(t == null ? void 0 : t[gd]);
}
function yd(t) {
  return Oh(this, arguments, function() {
    var n, r, i, a;
    return $s(this, function(o) {
      switch (o.label) {
        case 0:
          n = t.getReader(), o.label = 1;
        case 1:
          o.trys.push([1, , 9, 10]), o.label = 2;
        case 2:
          return [4, Ni(n.read())];
        case 3:
          return r = o.sent(), i = r.value, a = r.done, a ? [4, Ni(void 0)] : [3, 5];
        case 4:
          return [2, o.sent()];
        case 5:
          return [4, Ni(i)];
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
  return bt(t == null ? void 0 : t.getReader);
}
function vi(t) {
  if (t instanceof bn)
    return t;
  if (t != null) {
    if (vd(t))
      return ny(t);
    if (fd(t))
      return ry(t);
    if (hd(t))
      return iy(t);
    if (pd(t))
      return _d(t);
    if (bd(t))
      return ay(t);
    if (Id(t))
      return oy(t);
  }
  throw md(t);
}
function ny(t) {
  return new bn(function(e) {
    var n = t[cl]();
    if (bt(n.subscribe))
      return n.subscribe(e);
    throw new TypeError("Provided object does not correctly implement Symbol.observable");
  });
}
function ry(t) {
  return new bn(function(e) {
    for (var n = 0; n < t.length && !e.closed; n++)
      e.next(t[n]);
    e.complete();
  });
}
function iy(t) {
  return new bn(function(e) {
    t.then(function(n) {
      e.closed || (e.next(n), e.complete());
    }, function(n) {
      return e.error(n);
    }).then(null, sd);
  });
}
function ay(t) {
  return new bn(function(e) {
    var n, r;
    try {
      for (var i = Lt(t), a = i.next(); !a.done; a = i.next()) {
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
function _d(t) {
  return new bn(function(e) {
    sy(t, e).catch(function(n) {
      return e.error(n);
    });
  });
}
function oy(t) {
  return _d(yd(t));
}
function sy(t, e) {
  var n, r, i, a;
  return _c(this, void 0, void 0, function() {
    var o, c;
    return $s(this, function(l) {
      switch (l.label) {
        case 0:
          l.trys.push([0, 5, 6, 11]), n = Rh(t), l.label = 1;
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
function wr(t, e, n, r, i) {
  r === void 0 && (r = 0), i === void 0 && (i = !1);
  var a = e.schedule(function() {
    n(), i ? t.add(this.schedule(null, r)) : this.unsubscribe();
  }, r);
  if (t.add(a), !i)
    return a;
}
function Ed(t, e) {
  return e === void 0 && (e = 0), kr(function(n, r) {
    n.subscribe(Rr(r, function(i) {
      return wr(r, t, function() {
        return r.next(i);
      }, e);
    }, function() {
      return wr(r, t, function() {
        return r.complete();
      }, e);
    }, function(i) {
      return wr(r, t, function() {
        return r.error(i);
      }, e);
    }));
  });
}
function Ad(t, e) {
  return e === void 0 && (e = 0), kr(function(n, r) {
    r.add(t.schedule(function() {
      return n.subscribe(r);
    }, e));
  });
}
function ly(t, e) {
  return vi(t).pipe(Ad(e), Ed(e));
}
function uy(t, e) {
  return vi(t).pipe(Ad(e), Ed(e));
}
function cy(t, e) {
  return new bn(function(n) {
    var r = 0;
    return e.schedule(function() {
      r === t.length ? n.complete() : (n.next(t[r++]), n.closed || this.schedule());
    });
  });
}
function dy(t, e) {
  return new bn(function(n) {
    var r;
    return wr(n, e, function() {
      r = t[gd](), wr(n, e, function() {
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
      return bt(r == null ? void 0 : r.return) && r.return();
    };
  });
}
function Cd(t, e) {
  if (!t)
    throw new Error("Iterable cannot be null");
  return new bn(function(n) {
    wr(n, e, function() {
      var r = t[Symbol.asyncIterator]();
      wr(n, e, function() {
        r.next().then(function(i) {
          i.done ? n.complete() : n.next(i.value);
        });
      }, 0, !0);
    });
  });
}
function fy(t, e) {
  return Cd(yd(t), e);
}
function hy(t, e) {
  if (t != null) {
    if (vd(t))
      return ly(t, e);
    if (fd(t))
      return cy(t, e);
    if (hd(t))
      return uy(t, e);
    if (pd(t))
      return Cd(t, e);
    if (bd(t))
      return dy(t, e);
    if (Id(t))
      return fy(t, e);
  }
  throw md(t);
}
function Vo(t, e) {
  return e ? hy(t, e) : vi(t);
}
function Ra() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  var n = dd(t);
  return Vo(t, n);
}
var vy = ll(function(t) {
  return function() {
    t(this), this.name = "EmptyError", this.message = "no elements in sequence";
  };
});
function py(t, e) {
  return new Promise(function(n, r) {
    var i = !1, a;
    t.subscribe({
      next: function(o) {
        a = o, i = !0;
      },
      error: r,
      complete: function() {
        i ? n(a) : r(new vy());
      }
    });
  });
}
function my(t) {
  return t instanceof Date && !isNaN(t);
}
function xn(t, e) {
  return kr(function(n, r) {
    var i = 0;
    n.subscribe(Rr(r, function(a) {
      r.next(t.call(e, a, i++));
    }));
  });
}
var gy = Array.isArray;
function by(t, e) {
  return gy(e) ? t.apply(void 0, zn([], Or(e))) : t(e);
}
function yy(t) {
  return xn(function(e) {
    return by(t, e);
  });
}
var Iy = Array.isArray, _y = Object.getPrototypeOf, Ey = Object.prototype, Ay = Object.keys;
function Cy(t) {
  if (t.length === 1) {
    var e = t[0];
    if (Iy(e))
      return { args: e, keys: null };
    if (Sy(e)) {
      var n = Ay(e);
      return {
        args: n.map(function(r) {
          return e[r];
        }),
        keys: n
      };
    }
  }
  return { args: t, keys: null };
}
function Sy(t) {
  return t && typeof t == "object" && _y(t) === Ey;
}
function xy(t, e) {
  return t.reduce(function(n, r, i) {
    return n[r] = e[i], n;
  }, {});
}
function Ty() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  var n = dd(t), r = ey(t), i = Cy(t), a = i.args, o = i.keys;
  if (a.length === 0)
    return Vo([], n);
  var c = new bn(wy(a, n, o ? function(l) {
    return xy(o, l);
  } : ko));
  return r ? c.pipe(yy(r)) : c;
}
function wy(t, e, n) {
  return n === void 0 && (n = ko), function(r) {
    Su(e, function() {
      for (var i = t.length, a = new Array(i), o = i, c = i, l = function(d) {
        Su(e, function() {
          var h = Vo(t[d], e), f = !1;
          h.subscribe(Rr(r, function(v) {
            a[d] = v, f || (f = !0, c--), c || r.next(n(a.slice()));
          }, function() {
            --o || r.complete();
          }));
        }, r);
      }, u = 0; u < i; u++)
        l(u);
    }, r);
  };
}
function Su(t, e, n) {
  t ? wr(n, t, e) : e();
}
function Ly(t, e, n, r, i, a, o, c) {
  var l = [], u = 0, d = 0, h = !1, f = function() {
    h && !l.length && !u && e.complete();
  }, v = function(g) {
    return u < r ? m(g) : l.push(g);
  }, m = function(g) {
    u++;
    var I = !1;
    vi(n(g, d++)).subscribe(Rr(e, function(E) {
      e.next(E);
    }, function() {
      I = !0;
    }, void 0, function() {
      if (I)
        try {
          u--;
          for (var E = function() {
            var T = l.shift();
            o || m(T);
          }; l.length && u < r; )
            E();
          f();
        } catch (T) {
          e.error(T);
        }
    }));
  };
  return t.subscribe(Rr(e, v, function() {
    h = !0, f();
  })), function() {
  };
}
function mo(t, e, n) {
  return n === void 0 && (n = 1 / 0), bt(e) ? mo(function(r, i) {
    return xn(function(a, o) {
      return e(r, a, i, o);
    })(vi(t(r, i)));
  }, n) : (typeof e == "number" && (n = e), kr(function(r, i) {
    return Ly(r, i, t, n);
  }));
}
function Oy(t, e, n) {
  n === void 0 && (n = Jb);
  var r = -1;
  return e != null && (ud(e) ? n = e : r = e), new bn(function(i) {
    var a = my(t) ? +t - n.now() : t;
    a < 0 && (a = 0);
    var o = 0;
    return n.schedule(function() {
      i.closed || (i.next(o++), 0 <= r ? this.schedule(void 0, r) : i.complete());
    }, a);
  });
}
function Ma(t) {
  return kr(function(e, n) {
    var r = null, i = !1, a;
    r = e.subscribe(Rr(n, void 0, void 0, function(o) {
      a = vi(t(o, Ma(t)(e))), r ? (r.unsubscribe(), r = null, a.subscribe(n)) : i = !0;
    })), i && (r.unsubscribe(), r = null, a.subscribe(n));
  });
}
function Ry(t, e) {
  return bt(e) ? mo(t, e, 1) : mo(t, 1);
}
function Mr(t) {
  return t <= 0 ? function() {
    return $b;
  } : kr(function(e, n) {
    var r = 0;
    e.subscribe(Rr(n, function(i) {
      ++r <= t && (n.next(i), t <= r && n.complete());
    }));
  });
}
function My(t) {
  return xn(function() {
    return t;
  });
}
function Dy(t, e) {
  return mo(function(n, r) {
    return vi(t(n, r)).pipe(Mr(1), My(n));
  });
}
function Py(t, e) {
  e === void 0 && (e = ld);
  var n = Oy(t, e);
  return Dy(function() {
    return n;
  });
}
function Ny(t) {
  return kr(function(e, n) {
    try {
      e.subscribe(n);
    } finally {
      n.add(t);
    }
  });
}
function Da(t, e, n) {
  var r = bt(t) || e || n ? { next: t, error: e, complete: n } : t;
  return r ? kr(function(i, a) {
    var o;
    (o = r.subscribe) === null || o === void 0 || o.call(r);
    var c = !0;
    i.subscribe(Rr(a, function(l) {
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
  }) : ko;
}
function Sd(t) {
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
var Uy = /* @__PURE__ */ function() {
  function t(e, n, r, i) {
    i === void 0 && (i = "download_load"), this.originalEvent = e, this.xhr = n, this.request = r, this.type = i;
    var a = n.status, o = n.responseType;
    this.status = a ?? 0, this.responseType = o ?? "";
    var c = n.getAllResponseHeaders();
    this.responseHeaders = c ? c.split(`
`).reduce(function(d, h) {
      var f = h.indexOf(": ");
      return d[h.slice(0, f)] = h.slice(f + 2), d;
    }, {}) : {}, this.response = Sd(n);
    var l = e.loaded, u = e.total;
    this.loaded = l, this.total = u;
  }
  return t;
}(), go = ll(function(t) {
  return function(n, r, i) {
    this.message = n, this.name = "AjaxError", this.xhr = r, this.request = i, this.status = r.status, this.responseType = r.responseType;
    var a;
    try {
      a = Sd(r);
    } catch {
      a = r.responseText;
    }
    this.response = a;
  };
}), Hy = function() {
  function t(e, n) {
    return go.call(this, "ajax timeout", e, n), this.name = "AjaxTimeoutError", this;
  }
  return t.prototype = Object.create(go.prototype), t;
}();
function Fy(t, e) {
  return pi({ method: "GET", url: t, headers: e });
}
function By(t, e, n) {
  return pi({ method: "POST", url: t, body: e, headers: n });
}
function ky(t, e) {
  return pi({ method: "DELETE", url: t, headers: e });
}
function Vy(t, e, n) {
  return pi({ method: "PUT", url: t, body: e, headers: n });
}
function Gy(t, e, n) {
  return pi({ method: "PATCH", url: t, body: e, headers: n });
}
var jy = xn(function(t) {
  return t.response;
});
function qy(t, e) {
  return jy(pi({
    method: "GET",
    url: t,
    headers: e
  }));
}
var pi = function() {
  var t = function(e) {
    var n = typeof e == "string" ? {
      url: e
    } : e;
    return Ky(n);
  };
  return t.get = Fy, t.post = By, t.delete = ky, t.put = Vy, t.patch = Gy, t.getJSON = qy, t;
}(), Wy = "upload", xu = "download", ls = "loadstart", us = "progress", Tu = "load";
function Ky(t) {
  return new bn(function(e) {
    var n, r, i = fe({ async: !0, crossDomain: !1, withCredentials: !1, method: "GET", timeout: 0, responseType: "json" }, t), a = i.queryParams, o = i.body, c = i.headers, l = i.url;
    if (!l)
      throw new TypeError("url is required");
    if (a) {
      var u;
      if (l.includes("?")) {
        var d = l.split("?");
        if (2 < d.length)
          throw new TypeError("invalid url");
        u = new URLSearchParams(d[1]), new URLSearchParams(a).forEach(function(U, G) {
          return u.set(G, U);
        }), l = d[0] + "?" + u;
      } else
        u = new URLSearchParams(a), l = l + "?" + u;
    }
    var h = {};
    if (c)
      for (var f in c)
        c.hasOwnProperty(f) && (h[f.toLowerCase()] = c[f]);
    var v = i.crossDomain;
    !v && !("x-requested-with" in h) && (h["x-requested-with"] = "XMLHttpRequest");
    var m = i.withCredentials, g = i.xsrfCookieName, I = i.xsrfHeaderName;
    if ((m || !v) && g && I) {
      var E = (r = (n = document == null ? void 0 : document.cookie.match(new RegExp("(^|;\\s*)(" + g + ")=([^;]*)"))) === null || n === void 0 ? void 0 : n.pop()) !== null && r !== void 0 ? r : "";
      E && (h[I] = E);
    }
    var T = zy(o, h), S = fe(fe({}, i), {
      url: l,
      headers: h,
      body: T
    }), b;
    b = t.createXHR ? t.createXHR() : new XMLHttpRequest();
    {
      var _ = t.progressSubscriber, x = t.includeDownloadProgress, w = x === void 0 ? !1 : x, A = t.includeUploadProgress, C = A === void 0 ? !1 : A, P = function(U, G) {
        b.addEventListener(U, function() {
          var ee, R = G();
          (ee = _ == null ? void 0 : _.error) === null || ee === void 0 || ee.call(_, R), e.error(R);
        });
      };
      P("timeout", function() {
        return new Hy(b, S);
      }), P("abort", function() {
        return new go("aborted", b, S);
      });
      var K = function(U, G) {
        return new Uy(G, b, S, U + "_" + G.type);
      }, H = function(U, G, ee) {
        U.addEventListener(G, function(R) {
          e.next(K(ee, R));
        });
      };
      C && [ls, us, Tu].forEach(function(U) {
        return H(b.upload, U, Wy);
      }), _ && [ls, us].forEach(function(U) {
        return b.upload.addEventListener(U, function(G) {
          var ee;
          return (ee = _ == null ? void 0 : _.next) === null || ee === void 0 ? void 0 : ee.call(_, G);
        });
      }), w && [ls, us].forEach(function(U) {
        return H(b, U, xu);
      });
      var F = function(U) {
        var G = "ajax error" + (U ? " " + U : "");
        e.error(new go(G, b, S));
      };
      b.addEventListener("error", function(U) {
        var G;
        (G = _ == null ? void 0 : _.error) === null || G === void 0 || G.call(_, U), F();
      }), b.addEventListener(Tu, function(U) {
        var G, ee, R = b.status;
        if (R < 400) {
          (G = _ == null ? void 0 : _.complete) === null || G === void 0 || G.call(_);
          var y = void 0;
          try {
            y = K(xu, U);
          } catch (L) {
            e.error(L);
            return;
          }
          e.next(y), e.complete();
        } else
          (ee = _ == null ? void 0 : _.error) === null || ee === void 0 || ee.call(_, U), F(R);
      });
    }
    var _e = S.user, k = S.method, B = S.async;
    _e ? b.open(k, l, B, _e, S.password) : b.open(k, l, B), B && (b.timeout = S.timeout, b.responseType = S.responseType), "withCredentials" in b && (b.withCredentials = S.withCredentials);
    for (var f in h)
      h.hasOwnProperty(f) && b.setRequestHeader(f, h[f]);
    return T ? b.send(T) : b.send(), function() {
      b && b.readyState !== 4 && b.abort();
    };
  });
}
function zy(t, e) {
  var n;
  if (!t || typeof t == "string" || $y(t) || eI(t) || Yy(t) || Zy(t) || Qy(t) || tI(t))
    return t;
  if (Jy(t))
    return t.buffer;
  if (typeof t == "object")
    return e["content-type"] = (n = e["content-type"]) !== null && n !== void 0 ? n : "application/json;charset=utf-8", JSON.stringify(t);
  throw new TypeError("Unknown body type");
}
var Xy = Object.prototype.toString;
function dl(t, e) {
  return Xy.call(t) === "[object " + e + "]";
}
function Yy(t) {
  return dl(t, "ArrayBuffer");
}
function Zy(t) {
  return dl(t, "File");
}
function Qy(t) {
  return dl(t, "Blob");
}
function Jy(t) {
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView(t);
}
function $y(t) {
  return typeof FormData < "u" && t instanceof FormData;
}
function eI(t) {
  return typeof URLSearchParams < "u" && t instanceof URLSearchParams;
}
function tI(t) {
  return typeof ReadableStream < "u" && t instanceof ReadableStream;
}
class nI {
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
const rI = new nI("https://demo.compas.energy", {}, "DSOM Versatel Production URL"), iI = [rI], aI = iI[0].getUrl();
class fl {
  constructor(e = {}) {
    this.configuration = e;
  }
  get basePath() {
    return this.configuration.basePath ?? aI;
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
class xd {
  constructor(e = new fl()) {
    this.configuration = e, this.middleware = [], this.withMiddleware = (n) => {
      const r = this.clone();
      return r.middleware = r.middleware.concat(n), r;
    }, this.withPreMiddleware = (n) => this.withMiddleware(n.map((r) => ({ pre: r }))), this.withPostMiddleware = (n) => this.withMiddleware(n.map((r) => ({ post: r }))), this.createRequestArgs = ({ url: n, query: r, method: i, headers: a, body: o, responseType: c }) => ({
      url: `${this.configuration.basePath}${n}${r && Object.keys(r).length ? `?${oI(r)}` : ""}`,
      method: i,
      headers: a,
      body: o instanceof FormData ? o : JSON.stringify(o),
      responseType: c ?? "json"
    }), this.rxjsRequest = (n) => Ra(n).pipe(
      xn((r) => (this.middleware.filter((i) => i.pre).forEach((i) => r = i.pre(r)), r)),
      Ry(
        (r) => pi(r).pipe(
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
const Wt = (t) => encodeURIComponent(`${t}`), oI = (t) => Object.entries(t).map(
  ([e, n]) => n instanceof Array ? n.map((r) => `${Wt(e)}=${Wt(r)}`).join("&") : `${Wt(e)}=${Wt(n)}`
).join("&"), un = (t, e, n) => {
  if (t == null)
    throw new Error(`Parameter "${e}" was null or undefined when calling "${n}".`);
};
class sI extends xd {
  archiveResource({ id: e, version: n, xAuthor: r, xApprover: i, contentType: a, xFilename: o, body: c }, l) {
    un(e, "id", "archiveResource"), un(n, "version", "archiveResource");
    const u = {
      "Content-Type": "application/octet-stream",
      ...r != null ? { "X-author": String(r) } : void 0,
      ...i != null ? { "X-approver": String(i) } : void 0,
      ...a != null ? { "Content-Type": String(a) } : void 0,
      ...o != null ? { "X-filename": String(o) } : void 0
    };
    return this.request({
      url: "/api/archive/referenced-resource/{id}/versions/{version}".replace("{id}", Wt(e)).replace("{version}", Wt(n)),
      method: "POST",
      headers: u,
      body: c
    }, l == null ? void 0 : l.responseOpts);
  }
  archiveSclResource({ id: e, version: n }, r) {
    un(e, "id", "archiveSclResource"), un(n, "version", "archiveSclResource");
    const i = {};
    return this.request({
      url: "/api/archive/scl/{id}/versions/{version}".replace("{id}", Wt(e)).replace("{version}", Wt(n)),
      method: "POST",
      headers: i
    }, r == null ? void 0 : r.responseOpts);
  }
  retrieveArchivedResourceHistory({ id: e }, n) {
    un(e, "id", "retrieveArchivedResourceHistory");
    const r = {};
    return this.request({
      url: "/api/archive/resources/{id}/versions".replace("{id}", Wt(e)),
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
class lI extends xd {
  assignResourceToLocation({ locationId: e, uuid: n }, r) {
    un(e, "locationId", "assignResourceToLocation"), un(n, "uuid", "assignResourceToLocation");
    const i = {};
    return this.request({
      url: "/api/locations/{locationId}/resources/{uuid}/assign".replace("{locationId}", Wt(e)).replace("{uuid}", Wt(n)),
      method: "POST",
      headers: i
    }, r == null ? void 0 : r.responseOpts);
  }
  createLocation({ location: e }, n) {
    un(e, "location", "createLocation");
    const r = {
      "Content-Type": "application/json"
    };
    return this.request({
      url: "/api/locations",
      method: "POST",
      headers: r,
      body: e
    }, n == null ? void 0 : n.responseOpts);
  }
  deleteLocation({ locationId: e }, n) {
    un(e, "locationId", "deleteLocation");
    const r = {};
    return this.request({
      url: "/api/locations/{locationId}".replace("{locationId}", Wt(e)),
      method: "DELETE",
      headers: r
    }, n == null ? void 0 : n.responseOpts);
  }
  getLocation({ locationId: e }, n) {
    un(e, "locationId", "getLocation");
    const r = {};
    return this.request({
      url: "/api/locations/{locationId}".replace("{locationId}", Wt(e)),
      method: "GET",
      headers: r
    }, n == null ? void 0 : n.responseOpts);
  }
  getLocations({ page: e, pageSize: n }, r) {
    const i = {}, a = {};
    return e != null && (a.page = e), n != null && (a.pageSize = n), this.request({
      url: "/api/locations",
      method: "GET",
      headers: i,
      query: a
    }, r == null ? void 0 : r.responseOpts);
  }
  unassignResourceFromLocation({ locationId: e, uuid: n }, r) {
    un(e, "locationId", "unassignResourceFromLocation"), un(n, "uuid", "unassignResourceFromLocation");
    const i = {};
    return this.request({
      url: "/api/locations/{locationId}/resources/{uuid}/unassign".replace("{locationId}", Wt(e)).replace("{uuid}", Wt(n)),
      method: "POST",
      headers: i
    }, r == null ? void 0 : r.responseOpts);
  }
  updateLocation({ locationId: e, location: n }, r) {
    un(e, "locationId", "updateLocation"), un(n, "location", "updateLocation");
    const i = {
      "Content-Type": "application/json"
    };
    return this.request({
      url: "/api/locations/{locationId}".replace("{locationId}", Wt(e)),
      method: "PUT",
      headers: i,
      body: n
    }, r == null ? void 0 : r.responseOpts);
  }
}
class ga {
  constructor(e, n, r, i, a, o, c, l, u, d, h, f) {
    this._uuid = e, this._name = n, this._note = r, this._author = i, this._approver = a, this._type = o, this._voltage = c, this._modifiedAt = l, this._archivedAt = u, this._contentType = d, this._version = h, this._fields = f;
  }
  get uuid() {
    return this._uuid;
  }
  get filename() {
    return this._name;
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
class Qr {
  constructor() {
    this.baseUrl = "/compas-scl-data-service", this.dummySearchResults = [
      new ga(
        br(),
        "Dummy name",
        "My Note",
        "Jane Doe",
        "John Doe",
        "SCD",
        "220",
        this.formatDate((/* @__PURE__ */ new Date()).toISOString()),
        this.formatDate((/* @__PURE__ */ new Date()).toISOString()),
        "application/xml",
        "1.0.0",
        [{ key: "SOURCE_RESOURCE_ID", value: "GUID_FROM_FIELD :)" }]
      ),
      new ga(
        br(),
        "Dummy name 2",
        "My Note 2",
        "Jane Doe",
        "John Doe",
        "SCD",
        "220",
        this.formatDate((/* @__PURE__ */ new Date()).toISOString()),
        this.formatDate((/* @__PURE__ */ new Date()).toISOString()),
        "application/xml",
        "4.1.0",
        [{ key: "SOURCE_RESOURCE_ID", value: "GUID2_FROM_FIELD :)" }]
      )
    ];
  }
  static getInstance() {
    return Qr.instance || (Qr.instance = new Qr()), Qr.instance;
  }
  searchArchive(e) {
    return this.generateApiClient().searchArchivedResources({ archivedResourcesSearch: e }).pipe(
      Mr(1),
      xn((n) => n.resources),
      xn(
        (n) => n.map((r) => this.mapToArchiveSearchResult(r))
      ),
      Ma(() => Ra(this.dummySearchResults)),
      Py(500)
    );
  }
  retrieveArchivedResourceHistory(e) {
    return this.generateApiClient().retrieveArchivedResourceHistory({ id: e }).pipe(
      Mr(1),
      xn((n) => n.versions),
      xn(
        (n) => n.map((r) => this.mapToArchiveSearchResult(r))
      ),
      Ma(() => Ra([
        new ga(
          br(),
          "Dummy name",
          "My Note",
          "Jane Doe",
          "John Doe",
          "SCD",
          "220",
          (/* @__PURE__ */ new Date()).toDateString(),
          (/* @__PURE__ */ new Date()).toDateString(),
          "application/xml",
          "2.0.0",
          [{ key: "SOURCE_RESOURCE_ID", value: br() }]
        ),
        new ga(
          br(),
          "Dummy name",
          "My Note 2",
          "Jane Doe",
          "John Doe",
          "SCD",
          "220",
          (/* @__PURE__ */ new Date()).toDateString(),
          (/* @__PURE__ */ new Date()).toDateString(),
          "application/xml",
          "5.1.0",
          [{ key: "SOURCE_RESOURCE_ID", value: br() }]
        )
      ]))
    );
  }
  findByUUIDAndVersion(e, n, r) {
    return Vo(
      fetch(`${this.baseUrl}/scl/v1/${n}/${e}/${r}`).then((i) => {
        if (i.status >= 200 && i.status < 300)
          return i.blob();
        throw new Error(
          "Unable to download resource: " + i.status + " " + i.statusText
        );
      })
    );
  }
  mapToArchiveSearchResult(e) {
    return new ga(
      e.uuid,
      e.name,
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
  formatDate(e) {
    if (!e)
      return "";
    const n = new Date(e);
    return isNaN(n.getTime()) ? "" : Intl.DateTimeFormat("de-DE", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    }).format(n);
  }
  generateApiClient() {
    const e = new fl({
      basePath: this.baseUrl
      // accessToken: authInfo.token,
    });
    return new sI(e);
  }
}
class wi {
  constructor() {
    this.baseUrl = "/compas-scl-data-service";
  }
  static getInstance() {
    return wi.instance || (wi.instance = new wi()), wi.instance;
  }
  listLocations() {
    return this.generateApiClient().getLocations({}).pipe(
      Mr(1),
      Ma(() => Ra([
        {
          uuid: "912e83a1-f84e-4d0d-9432-b5381e2b9e0d",
          name: "Location 1",
          description: "",
          key: ""
        },
        {
          uuid: "b9d01044-7bc7-4430-93b3-86ff093319e6",
          name: "Location 2",
          description: "",
          key: ""
        },
        {
          uuid: "f8435ba3-0c92-4ea3-ade0-5d72458c95c7",
          name: "Location 3",
          description: "",
          key: ""
        }
      ]))
    );
  }
  generateApiClient() {
    const e = new fl({
      basePath: this.baseUrl
      // accessToken: authInfo.token,
    });
    return new lI(e);
  }
}
var Ha;
const Oi = class Oi {
  constructor() {
    Ze(this, Ha, dt(/* @__PURE__ */ new Map()));
  }
  static getInstance() {
    return Oi.instance || (Oi.instance = new Oi()), Oi.instance;
  }
  get store() {
    return J(this, Ha);
  }
  updateData(e) {
    J(this, Ha).set(e);
  }
};
Ha = new WeakMap();
let Ps = Oi;
var Gi;
const Ri = class Ri {
  constructor() {
    Ze(this, Gi, dt(/* @__PURE__ */ new Map()));
  }
  static getInstance() {
    return Ri.instance || (Ri.instance = new Ri()), Ri.instance;
  }
  get store() {
    return J(this, Gi);
  }
  updateData(e) {
    J(this, Gi).set(e);
  }
  getLocationNameByUuid(e) {
    return Mo(J(this, Gi)).get(e);
  }
};
Gi = new WeakMap();
let bo = Ri;
var ji;
const Mi = class Mi {
  constructor() {
    Ze(this, ji, dt([]));
  }
  static getInstance() {
    return Mi.instance || (Mi.instance = new Mi()), Mi.instance;
  }
  get store() {
    return J(this, ji);
  }
  get currentData() {
    return Mo(J(this, ji));
  }
  updateData(e) {
    J(this, ji).set(e);
  }
};
ji = new WeakMap();
let Ns = Mi;
var qi;
const Di = class Di {
  constructor() {
    Ze(this, qi, dt([]));
  }
  static getInstance() {
    return Di.instance || (Di.instance = new Di()), Di.instance;
  }
  get store() {
    return J(this, qi);
  }
  get currentData() {
    return Mo(J(this, qi));
  }
  updateData(e) {
    J(this, qi).set(e);
  }
};
qi = new WeakMap();
let Us = Di;
class Li {
  constructor() {
    this.locationService = wi.getInstance(), this.archiveExplorerLocationStore = bo.getInstance();
  }
  static getInstance() {
    return Li.instance || (Li.instance = new Li()), Li.instance;
  }
  convertFilterToSearchParams(e) {
    const n = {
      uuid: null,
      type: null,
      contentType: null,
      name: null,
      location: null,
      approver: null,
      voltage: null,
      from: null,
      to: null
    };
    return e.filter((r) => !r.disabled).forEach((r) => {
      console.log("KEY:", r.key), r.key === "from" || r.key === "to" ? n[r.key] = new Date(r.value).toISOString() : n[r.key] = r.value;
    }), n;
  }
  createLocationFilter() {
    return py(
      this.locationService.listLocations().pipe(
        Mr(1),
        Da((e) => {
          const n = /* @__PURE__ */ new Map();
          e.forEach((r) => {
            n.set(r.uuid, r.name);
          }), this.archiveExplorerLocationStore.updateData(n);
        }),
        xn((e) => [
          {
            id: 1,
            key: "location",
            label: "Location",
            inputType: {
              id: 2,
              type: "select",
              validatorFn: () => !0,
              options: (e == null ? void 0 : e.map((n) => ({
                value: n.uuid,
                label: n.name
              }))) || []
            },
            allowedOperations: ["="]
          }
        ])
      )
    );
  }
  createArchiveFilter() {
    return [
      {
        id: 2,
        label: "UUID",
        inputType: {
          id: 1,
          type: "string",
          validatorFn: () => !0,
          options: []
        },
        allowedOperations: ["="]
      },
      {
        id: 4,
        label: "Approver",
        inputType: {
          id: 1,
          type: "string",
          validatorFn: () => !0,
          options: []
        },
        allowedOperations: ["="]
      },
      {
        id: 3,
        label: "Type",
        inputType: {
          id: 2,
          type: "select",
          validatorFn: () => !0,
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
        allowedOperations: ["="]
      }
      // {
      //   id: 4,
      //   label: 'Type',
      //   inputType: {
      //     id: 2,
      //     type: 'select',
      //     validatorFn: () => true,
      //     options: [
      //       { value: 'Schütz', label: 'Schütz' },
      //       { value: 'Leittechnik', label: 'Leittechnik' },
      //     ],
      //   },
      //   allowedOperations: ['='],
      // },
      // {
      //   id: 5,
      //   label: 'Voltage',
      //   inputType: {
      //     id: 2,
      //     type: 'select',
      //     validatorFn: () => true,
      //     options: [
      //       { value: '380', label: '380' },
      //       { value: '220', label: '220' },
      //       { value: '110', label: '110' },
      //     ],
      //   },
      //   allowedOperations: ['='],
      // },
    ];
  }
}
function uI(t, e) {
  Le(e, !0);
  const n = Qr.getInstance(), r = { store: dt([]) };
  let i = /* @__PURE__ */ be(!1);
  const a = [
    {
      headerName: "Type",
      field: "type",
      numeric: !1,
      filter: !0,
      filterType: "text",
      sortable: !0
    },
    {
      headerName: "Content type",
      field: "contentType",
      numeric: !1,
      filter: !0,
      filterType: "text",
      sortable: !0
    },
    {
      headerName: "Approver",
      field: "approver",
      numeric: !1,
      filter: !0,
      filterType: "text",
      sortable: !0
    },
    {
      headerName: "Author",
      field: "author",
      numeric: !1,
      filter: !0,
      filterType: "text",
      sortable: !0
    },
    {
      headerName: "Modifed",
      field: "modifiedAt",
      numeric: !1,
      filter: !0,
      filterType: "text",
      sortable: !0,
      valueFormatter: c
    },
    {
      headerName: "Note",
      field: "note",
      numeric: !1,
      filter: !0,
      filterType: "text",
      sortable: !0
    },
    {
      headerName: "Version",
      field: "version",
      numeric: !1,
      filter: !0,
      filterType: "text",
      sortable: !0
    },
    {
      headerName: "UUID",
      field: "uuid",
      numeric: !1,
      filter: !0,
      filterType: "text",
      sortable: !1,
      cellStyle: "font-weight: bold;",
      headerStyle: "font-weight: bold;"
    },
    {
      headerName: "",
      field: "actions",
      numeric: !1,
      filter: !1,
      filterType: "text",
      minWidth: "100px",
      sortable: !1
    }
  ], o = [
    {
      icon: "download",
      callback: (u) => l(u),
      disabled: () => !1
    }
  ];
  function c(u) {
    return new Date(u).toLocaleDateString();
  }
  st(() => {
    e.searchResult && n.retrieveArchivedResourceHistory(e.searchResult.uuid).pipe(Mr(1), Da((u) => {
      r.store.set(u), Q(i, !0);
    })).subscribe();
  });
  function l(u) {
    var h;
    let d;
    u.fields && u.fields.length && (d = (h = u.fields.find((f) => f.key === "SOURCE_RESOURCE_ID")) == null ? void 0 : h.value), n.findByUUIDAndVersion(d, u.type, u.version).pipe(
      Mr(1),
      Da((f) => {
        const v = window.URL.createObjectURL(f), m = document.createElement("a");
        m.href = v, m.download = u.filename, m.style.display = "none", document.body.appendChild(m), m.click(), document.body.removeChild(m), window.URL.revokeObjectURL(v);
      }),
      Ma((f) => (console.error(f), alert(f), Ra(void 0)))
    ).subscribe();
  }
  Ub(t, {
    get columnDefs() {
      return a;
    },
    get store() {
      return r;
    },
    get loadingDone() {
      return s(i);
    },
    get rowActions() {
      return o;
    }
  }), Oe();
}
var cI = /* @__PURE__ */ ve("<span><!></span>"), dI = /* @__PURE__ */ ve("<!> <br/>", 1), fI = /* @__PURE__ */ ve("<i> </i>"), hI = /* @__PURE__ */ ve('<div class="result-container"><div class="content"><!></div></div>');
function vI(t, e) {
  Le(e, !0);
  let n = p(e, "searchResults", 19, () => []), r = p(e, "noResourcesLabel", 3, "No resources found.");
  var i = hI(), a = Ie(i), o = Ie(a);
  {
    var c = (u) => {
      var d = re(), h = Y(d);
      rr(h, 17, n, (f) => f.uuid, (f, v) => {
        var m = dI(), g = Y(m);
        ad(g, {
          get title() {
            return s(v).name;
          },
          content: (E) => {
            var T = cI(), S = Ie(T);
            uI(S, {
              get searchResult() {
                return s(v);
              }
            }), O(E, T);
          },
          $$slots: { content: !0 }
        }), O(f, m);
      }), O(u, d);
    }, l = (u) => {
      var d = fI(), h = Ie(d);
      Fe(() => vt(h, r())), O(u, d);
    };
    le(o, (u) => {
      n().length ? u(c) : u(l, !1);
    });
  }
  O(t, i), Oe();
}
op({ en: bp, de: fp });
var pI = /* @__PURE__ */ ve("<!> <!>", 1), mI = /* @__PURE__ */ ve("<span><!></span>"), gI = /* @__PURE__ */ ve('<!> <div class="separator svelte-1gp5xzm"></div>', 1), bI = /* @__PURE__ */ ve('<div class="archive-explorer-container svelte-1gp5xzm" style="display: none;"><!> <div class="search-filter svelte-1gp5xzm"><!> <!></div> <div class="content-container svelte-1gp5xzm"><!></div></div>');
function yI(t, e) {
  Le(e, !0);
  const n = () => Nt(ap, "$_", r), [r, i] = Ln(), a = Qr.getInstance(), o = Li.getInstance(), c = Ps.getInstance(), l = Ns.getInstance(), u = Us.getInstance(), d = bo.getInstance();
  let h = /* @__PURE__ */ be(ye([])), f = /* @__PURE__ */ be(ye([])), v = /* @__PURE__ */ be(ye(l.currentData)), m = /* @__PURE__ */ be(ye(u.currentData)), g = /* @__PURE__ */ be(ye(/* @__PURE__ */ new Map())), I = /* @__PURE__ */ be(!1), E = /* @__PURE__ */ be(!0);
  st(() => {
    setTimeout(
      () => {
        Q(E, !1);
      },
      1e3
    );
  });
  let T = /* @__PURE__ */ ae(() => {
    var A;
    return s(v).length && !!((A = s(v)) != null && A.find((C) => C.key === "uuid"));
  });
  st(async () => {
    Q(h, o.createArchiveFilter(), !0), Q(f, await o.createLocationFilter(), !0), Q(I, !0);
  });
  function S() {
    Q(I, !1);
    const A = [], C = /* @__PURE__ */ new Map();
    s(m).forEach((P) => {
      const K = o.convertFilterToSearchParams(s(v));
      K.location = P.value, A.push(a.searchArchive(K).pipe(Mr(1), Da((H) => C.set(P.value, H)), Ny(() => Q(I, !0))));
    }), l.updateData(s(v)), u.updateData(s(m)), Ty(A).pipe(Da(() => {
      c.updateData(C), Q(g, C, !0);
    })).subscribe();
  }
  var b = re(), _ = Y(b);
  {
    var x = (A) => {
      {
        let C = /* @__PURE__ */ ae(() => !s(E));
        mu(A, {
          get loadingDone() {
            return s(C);
          }
        });
      }
    }, w = (A) => {
      var C = bI(), P = Ie(C);
      mu(P, {
        get loadingDone() {
          return s(I);
        }
      });
      var K = Ee(P, 2), H = Ie(K);
      {
        let U = /* @__PURE__ */ ae(() => n()("add_filter")), G = /* @__PURE__ */ ae(() => n()("filter_types"));
        pu(H, {
          get filterTypes() {
            return s(f);
          },
          useOptionLabelInChipText: !0,
          get addFilterLabel() {
            return s(U);
          },
          get selectFilterLabel() {
            return s(G);
          },
          get activeFilters() {
            return s(m);
          },
          set activeFilters(ee) {
            Q(m, ee, !0);
          }
        });
      }
      var F = Ee(H, 2);
      {
        const U = (y) => {
          {
            let L = /* @__PURE__ */ ae(() => !s(m).length);
            rl(y, {
              variant: "raised",
              callback: S,
              get disabled() {
                return s(L);
              },
              children: ($, N) => {
                var j = pI(), de = Y(j);
                Hg(de, {});
                var V = Ee(de, 2);
                wp(V, {
                  children: (se, X) => {
                    var he = Xt();
                    Fe((ie) => vt(he, ie), [() => n()("search")]), O(se, he);
                  },
                  $$slots: { default: !0 }
                }), O($, j);
              },
              $$slots: { default: !0 }
            });
          }
        };
        let G = /* @__PURE__ */ ae(() => s(T) || !s(m).length), ee = /* @__PURE__ */ ae(() => n()("add_filter")), R = /* @__PURE__ */ ae(() => n()("filter_types"));
        pu(F, {
          get disabled() {
            return s(G);
          },
          get filterTypes() {
            return s(h);
          },
          get addFilterLabel() {
            return s(ee);
          },
          get selectFilterLabel() {
            return s(R);
          },
          get activeFilters() {
            return s(v);
          },
          set activeFilters(y) {
            Q(v, y, !0);
          },
          filterControls: U,
          $$slots: { filterControls: !0 }
        });
      }
      var _e = Ee(K, 2), k = Ie(_e);
      {
        var B = (U) => {
          var G = re(), ee = Y(G);
          rr(ee, 18, () => s(g), (R) => R, (R, y, L) => {
            var $ = gI(), N = Y($);
            {
              const j = (se) => {
                var X = mI(), he = Ie(X);
                {
                  let ie = /* @__PURE__ */ ae(() => n()("no_resources_found"));
                  vI(he, {
                    get searchResults() {
                      return y[1];
                    },
                    get noResourcesLabel() {
                      return s(ie);
                    }
                  });
                }
                O(se, X);
              };
              let de = /* @__PURE__ */ ae(() => s(L) === 0), V = /* @__PURE__ */ ae(() => d.getLocationNameByUuid(y[0]));
              ad(N, {
                get open() {
                  return s(de);
                },
                get title() {
                  return s(V);
                },
                content: j,
                $$slots: { content: !0 }
              });
            }
            O(R, $);
          }), O(U, G);
        };
        le(k, (U) => {
          s(g).size && U(B);
        });
      }
      O(A, C);
    };
    le(_, (A) => {
      s(E) ? A(x) : A(w, !1);
    });
  }
  O(t, b), Oe(), i();
}
const Td = "archive-explorer", wd = "0.0.1";
var II = /* @__PURE__ */ ve('<!> <input type="hidden" name="package-name"/> <input type="hidden" name="package-version"/>', 1);
function _I(t, e) {
  Le(e, !0);
  let n = p(e, "dev", 3, !1);
  var r = II(), i = Y(r);
  {
    var a = (l) => {
      yI(l, {});
    };
    le(i, (l) => {
      (e.doc || n()) && l(a);
    });
  }
  var o = Ee(i, 2), c = Ee(o, 2);
  Fe(() => {
    Ol(o, Td), Ol(c, wd);
  }), O(t, r), Oe();
}
var Wi;
class xI extends HTMLElement {
  constructor() {
    super();
    Ze(this, Wi);
    Ne(this, Wi, /* @__PURE__ */ be(ye({ doc: void 0, editCount: void 0 })));
  }
  get props() {
    return s(J(this, Wi));
  }
  set props(n) {
    Q(J(this, Wi), n, !0);
  }
  connectedCallback() {
    var r;
    this.attachShadow({ mode: "open" }), this.props.doc = this._doc, this.props.editCount = this.editCount, Yf(_I, { target: this.shadowRoot, props: this.props });
    const n = EI();
    (r = this.shadowRoot) == null || r.appendChild(n);
  }
  set doc(n) {
    this._doc = n, this.props.doc = n;
  }
  set editCount(n) {
    this._editCount = n, this.props.editCount = n;
  }
}
Wi = new WeakMap();
function EI() {
  const t = `${Td}-v${wd}-style`, e = AI(), n = document.createElement("link");
  return n.rel = "stylesheet", n.type = "text/css", n.href = e, n.id = t, n;
}
function AI() {
  const t = new URL(import.meta.url), e = t.origin, n = t.pathname.split("/").slice(0, -1).filter(Boolean).join("/");
  return [e, n, "style.css"].filter(Boolean).join("/");
}
export {
  xI as default
};
