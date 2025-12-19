var Nd = Object.defineProperty;
var vl = (t) => {
  throw TypeError(t);
};
var Ud = (t, e, n) => e in t ? Nd(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var bi = (t, e, n) => Ud(t, typeof e != "symbol" ? e + "" : e, n), jo = (t, e, n) => e.has(t) || vl("Cannot " + n);
var J = (t, e, n) => (jo(t, e, "read from private field"), n ? n.call(t) : e.get(t)), Xe = (t, e, n) => e.has(t) ? vl("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, n), Pe = (t, e, n, r) => (jo(t, e, "write to private field"), r ? r.call(t, n) : e.set(t, n), n), jt = (t, e, n) => (jo(t, e, "access private method"), n);
const Dt = Symbol(), Hd = "http://www.w3.org/1999/xhtml", Fd = "http://www.w3.org/2000/svg", Bd = "@attach", Lu = !1;
var Io = Array.isArray, kd = Array.prototype.indexOf, Hs = Array.from, ao = Object.defineProperty, Ar = Object.getOwnPropertyDescriptor, Ou = Object.getOwnPropertyDescriptors, Vd = Object.prototype, Gd = Array.prototype, Fs = Object.getPrototypeOf, pl = Object.isExtensible;
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
const nn = 2, Bs = 4, ks = 8, si = 16, ar = 32, li = 64, Vs = 128, Tn = 256, oo = 512, Kt = 1024, gn = 2048, Rr = 4096, Un = 8192, ui = 16384, Gs = 32768, ci = 65536, ml = 1 << 17, jd = 1 << 18, na = 1 << 19, qd = 1 << 20, ls = 1 << 21, _o = 1 << 22, ni = 1 << 23, zn = Symbol("$state"), Du = Symbol("legacy props"), Wd = Symbol(""), Ai = new class extends Error {
  constructor() {
    super(...arguments);
    bi(this, "name", "StaleReactionError");
    bi(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
function js(t) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function zd() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function Kd(t) {
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
function qs(t, e) {
  return t != t ? e == e : t !== e || t !== null && typeof t == "object" || typeof t == "function";
}
function Nu(t) {
  return !qs(t, this.v);
}
let ra = !1, of = !1;
function sf() {
  ra = !0;
}
let ut = null;
function Wi(t) {
  ut = t;
}
function le(t) {
  return (
    /** @type {T} */
    Uu().get(t)
  );
}
function ee(t, e) {
  return Uu().set(t, e), e;
}
function Oe(t, e = !1, n) {
  ut = {
    p: ut,
    c: null,
    e: null,
    s: t,
    x: null,
    l: ra && !e ? { s: null, u: null, $: [] } : null
  };
}
function Re(t) {
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
function Ua() {
  return !ra || ut !== null && ut.l === null;
}
function Uu(t) {
  return ut === null && js(), ut.c ?? (ut.c = new Map(lf(ut) || void 0));
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
let Yr = [];
function Hu() {
  var t = Yr;
  Yr = [], Ru(t);
}
function Tr(t) {
  if (Yr.length === 0 && !Ea) {
    var e = Yr;
    queueMicrotask(() => {
      e === Yr && Hu();
    });
  }
  Yr.push(t);
}
function uf() {
  for (; Yr.length > 0; )
    Hu();
}
const cf = /* @__PURE__ */ new WeakMap();
function Fu(t) {
  var e = je;
  if (e === null)
    return Ve.f |= ni, t;
  if (e.f & Gs)
    zi(t, e);
  else {
    if (!(e.f & Vs))
      throw !e.parent && t instanceof Error && Bu(t), t;
    e.b.error(t);
  }
}
function zi(t, e) {
  for (; e !== null; ) {
    if (e.f & Vs)
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
  e && (ao(t, "message", {
    value: e.message
  }), ao(t, "stack", {
    value: e.stack
  }));
}
const qa = /* @__PURE__ */ new Set();
let ot = null, Ja = null, Ft = null, us = /* @__PURE__ */ new Set(), qn = [], Eo = null, cs = !1, Ea = !1;
var Ui, Hi, Qr, Ma, Fi, Bi, Jr, ki, Da, Pa, wn, ds, $a, fs;
const go = class go {
  constructor() {
    Xe(this, wn);
    /**
     * The current values of any sources that are updated in this batch
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Source, any>}
     */
    bi(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any sources that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Source, any>}
     */
    Xe(this, Ui, /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<() => void>}
     */
    Xe(this, Hi, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    Xe(this, Qr, 0);
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    Xe(this, Ma, null);
    /**
     * Async effects inside a newly-created `<svelte:boundary>`
     * — these do not prevent the batch from committing
     * @type {Effect[]}
     */
    Xe(this, Fi, []);
    /**
     * Template effects and `$effect.pre` effects, which run when
     * a batch is committed
     * @type {Effect[]}
     */
    Xe(this, Bi, []);
    /**
     * The same as `#render_effects`, but for `$effect` (which runs after)
     * @type {Effect[]}
     */
    Xe(this, Jr, []);
    /**
     * Block effects, which may need to re-run on subsequent flushes
     * in order to update internal sources (e.g. each block items)
     * @type {Effect[]}
     */
    Xe(this, ki, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Effect[]}
     */
    Xe(this, Da, []);
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Effect[]}
     */
    Xe(this, Pa, []);
    /**
     * A set of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`
     * @type {Set<Effect>}
     */
    bi(this, "skipped_effects", /* @__PURE__ */ new Set());
  }
  /**
   *
   * @param {Effect[]} root_effects
   */
  process(e) {
    var a;
    qn = [], Ja = null, this.apply();
    for (const o of e)
      jt(this, wn, ds).call(this, o);
    if (J(this, Qr) === 0) {
      var n = Ft;
      jt(this, wn, fs).call(this);
      var r = J(this, Bi), i = J(this, Jr);
      Pe(this, Bi, []), Pe(this, Jr, []), Pe(this, ki, []), Ja = this, ot = null, Ft = n, gl(r), gl(i), Ja = null, (a = J(this, Ma)) == null || a.resolve();
    } else
      jt(this, wn, $a).call(this, J(this, Bi)), jt(this, wn, $a).call(this, J(this, Jr)), jt(this, wn, $a).call(this, J(this, ki));
    Ft = null;
    for (const o of J(this, Fi))
      Sa(o);
    Pe(this, Fi, []);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Source} source
   * @param {any} value
   */
  capture(e, n) {
    J(this, Ui).has(e) || J(this, Ui).set(e, n), this.current.set(e, e.v), Ft == null || Ft.set(e, e.v);
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
    } else J(this, Qr) === 0 && jt(this, wn, fs).call(this);
    this.deactivate();
    for (const e of us)
      if (us.delete(e), e(), ot !== null)
        break;
  }
  increment() {
    Pe(this, Qr, J(this, Qr) + 1);
  }
  decrement() {
    Pe(this, Qr, J(this, Qr) - 1);
    for (const e of J(this, Da))
      en(e, gn), ai(e);
    for (const e of J(this, Pa))
      en(e, Rr), ai(e);
    this.flush();
  }
  /** @param {() => void} fn */
  add_callback(e) {
    J(this, Hi).add(e);
  }
  settled() {
    return (J(this, Ma) ?? Pe(this, Ma, Mu())).promise;
  }
  static ensure() {
    if (ot === null) {
      const e = ot = new go();
      qa.add(ot), Ea || go.enqueue(() => {
        ot === e && e.flush();
      });
    }
    return ot;
  }
  /** @param {() => void} task */
  static enqueue(e) {
    Tr(e);
  }
  apply() {
  }
};
Ui = new WeakMap(), Hi = new WeakMap(), Qr = new WeakMap(), Ma = new WeakMap(), Fi = new WeakMap(), Bi = new WeakMap(), Jr = new WeakMap(), ki = new WeakMap(), Da = new WeakMap(), Pa = new WeakMap(), wn = new WeakSet(), /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 */
ds = function(e) {
  var c;
  e.f ^= Kt;
  for (var n = e.first; n !== null; ) {
    var r = n.f, i = (r & (ar | li)) !== 0, a = i && (r & Kt) !== 0, o = a || (r & Un) !== 0 || this.skipped_effects.has(n);
    if (!o && n.fn !== null) {
      i ? n.f ^= Kt : r & Bs ? J(this, Jr).push(n) : r & Kt || (r & _o && ((c = n.b) != null && c.is_pending()) ? J(this, Fi).push(n) : wo(n) && (n.f & si && J(this, ki).push(n), Sa(n)));
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
$a = function(e) {
  for (const n of e)
    (n.f & gn ? J(this, Da) : J(this, Pa)).push(n), en(n, Kt);
  e.length = 0;
}, /**
 * Append and remove branches to/from the DOM
 */
fs = function() {
  var e;
  for (const n of J(this, Hi))
    n();
  if (J(this, Hi).clear(), qa.size > 1) {
    J(this, Ui).clear();
    let n = !0;
    for (const r of qa) {
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
          Vu(o, a);
        if (qn.length > 0) {
          ot = r, r.apply();
          for (const o of qn)
            jt(e = r, wn, ds).call(e, o);
          qn = [], r.deactivate();
        }
      }
    }
    ot = null;
  }
  qa.delete(this);
};
let ir = go;
function df(t) {
  var e = Ea;
  Ea = !0;
  try {
    for (var n; ; ) {
      if (uf(), qn.length === 0 && (ot == null || ot.flush(), qn.length === 0))
        return Eo = null, /** @type {T} */
        n;
      ku();
    }
  } finally {
    Ea = e;
  }
}
function ku() {
  var t = Di;
  cs = !0;
  try {
    var e = 0;
    for (_l(!0); qn.length > 0; ) {
      var n = ir.ensure();
      if (e++ > 1e3) {
        var r, i;
        ff();
      }
      n.process(qn), Cr.clear();
    }
  } finally {
    cs = !1, _l(t), Eo = null;
  }
}
function ff() {
  try {
    Zd();
  } catch (t) {
    zi(t, Eo);
  }
}
let nr = null;
function gl(t) {
  var e = t.length;
  if (e !== 0) {
    for (var n = 0; n < e; ) {
      var r = t[n++];
      if (!(r.f & (ui | Un)) && wo(r) && (nr = [], Sa(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null && r.ac === null ? tc(r) : r.fn = null), (nr == null ? void 0 : nr.length) > 0)) {
        Cr.clear();
        for (const i of nr)
          Sa(i);
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
      ) : r & (_o | si) && Gu(n, e) && (en(n, gn), ai(
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
function ai(t) {
  for (var e = Eo = t; e.parent !== null; ) {
    e = e.parent;
    var n = e.f;
    if (cs && e === je && n & si)
      return;
    if (n & (li | ar)) {
      if (!(n & Kt)) return;
      e.f ^= Kt;
    }
  }
  qn.push(e);
}
function hf(t) {
  let e = 0, n = oi(0), r;
  return () => {
    Rf() && (s(n), xo(() => (e === 0 && (r = Pr(() => t(() => Aa(n)))), e += 1, () => {
      Tr(() => {
        e -= 1, e === 0 && (r == null || r(), r = void 0, Aa(n));
      });
    })));
  };
}
var vf = ci | na | Vs;
function pf(t, e, n) {
  new mf(t, e, n);
}
var Dn, Cn, Us, Vn, $r, Gn, Sn, ln, jn, gr, ei, br, ti, yr, bo, yo, tn, gf, bf, eo, to, hs;
class mf {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   */
  constructor(e, n, r) {
    Xe(this, tn);
    /** @type {Boundary | null} */
    bi(this, "parent");
    Xe(this, Dn, !1);
    /** @type {TemplateNode} */
    Xe(this, Cn);
    /** @type {TemplateNode | null} */
    Xe(this, Us, null);
    /** @type {BoundaryProps} */
    Xe(this, Vn);
    /** @type {((anchor: Node) => void)} */
    Xe(this, $r);
    /** @type {Effect} */
    Xe(this, Gn);
    /** @type {Effect | null} */
    Xe(this, Sn, null);
    /** @type {Effect | null} */
    Xe(this, ln, null);
    /** @type {Effect | null} */
    Xe(this, jn, null);
    /** @type {DocumentFragment | null} */
    Xe(this, gr, null);
    Xe(this, ei, 0);
    Xe(this, br, 0);
    Xe(this, ti, !1);
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    Xe(this, yr, null);
    Xe(this, bo, () => {
      J(this, yr) && Ki(J(this, yr), J(this, ei));
    });
    Xe(this, yo, hf(() => (Pe(this, yr, oi(J(this, ei))), () => {
      Pe(this, yr, null);
    })));
    Pe(this, Cn, e), Pe(this, Vn, n), Pe(this, $r, r), this.parent = /** @type {Effect} */
    je.b, Pe(this, Dn, !!J(this, Vn).pending), Pe(this, Gn, Dr(() => {
      je.b = this;
      {
        try {
          Pe(this, Sn, qt(() => r(J(this, Cn))));
        } catch (i) {
          this.error(i);
        }
        J(this, br) > 0 ? jt(this, tn, to).call(this) : Pe(this, Dn, !1);
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
    jt(this, tn, hs).call(this, e), Pe(this, ei, J(this, ei) + e), us.add(J(this, bo));
  }
  get_effect_pending() {
    return J(this, yo).call(this), s(
      /** @type {Source<number>} */
      J(this, yr)
    );
  }
  /** @param {unknown} error */
  error(e) {
    var n = J(this, Vn).onerror;
    let r = J(this, Vn).failed;
    if (J(this, ti) || !n && !r)
      throw e;
    J(this, Sn) && (Bt(J(this, Sn)), Pe(this, Sn, null)), J(this, ln) && (Bt(J(this, ln)), Pe(this, ln, null)), J(this, jn) && (Bt(J(this, jn)), Pe(this, jn, null));
    var i = !1, a = !1;
    const o = () => {
      if (i) {
        rf();
        return;
      }
      i = !0, a && tf(), ir.ensure(), Pe(this, ei, 0), J(this, jn) !== null && Sr(J(this, jn), () => {
        Pe(this, jn, null);
      }), Pe(this, Dn, this.has_pending_snippet()), Pe(this, Sn, jt(this, tn, eo).call(this, () => (Pe(this, ti, !1), qt(() => J(this, $r).call(this, J(this, Cn)))))), J(this, br) > 0 ? jt(this, tn, to).call(this) : Pe(this, Dn, !1);
    };
    var u = Ve;
    try {
      cn(null), a = !0, n == null || n(e, o), a = !1;
    } catch (l) {
      zi(l, J(this, Gn) && J(this, Gn).parent);
    } finally {
      cn(u);
    }
    r && Tr(() => {
      Pe(this, jn, jt(this, tn, eo).call(this, () => {
        Pe(this, ti, !0);
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
          Pe(this, ti, !1);
        }
      }));
    });
  }
}
Dn = new WeakMap(), Cn = new WeakMap(), Us = new WeakMap(), Vn = new WeakMap(), $r = new WeakMap(), Gn = new WeakMap(), Sn = new WeakMap(), ln = new WeakMap(), jn = new WeakMap(), gr = new WeakMap(), ei = new WeakMap(), br = new WeakMap(), ti = new WeakMap(), yr = new WeakMap(), bo = new WeakMap(), yo = new WeakMap(), tn = new WeakSet(), gf = function() {
  try {
    Pe(this, Sn, qt(() => J(this, $r).call(this, J(this, Cn))));
  } catch (e) {
    this.error(e);
  }
  Pe(this, Dn, !1);
}, bf = function() {
  const e = J(this, Vn).pending;
  e && (Pe(this, ln, qt(() => e(J(this, Cn)))), ir.enqueue(() => {
    Pe(this, Sn, jt(this, tn, eo).call(this, () => (ir.ensure(), qt(() => J(this, $r).call(this, J(this, Cn)))))), J(this, br) > 0 ? jt(this, tn, to).call(this) : (Sr(
      /** @type {Effect} */
      J(this, ln),
      () => {
        Pe(this, ln, null);
      }
    ), Pe(this, Dn, !1));
  }));
}, /**
 * @param {() => Effect | null} fn
 */
eo = function(e) {
  var n = je, r = Ve, i = ut;
  Xn(J(this, Gn)), cn(J(this, Gn)), Wi(J(this, Gn).ctx);
  try {
    return e();
  } catch (a) {
    return Fu(a), null;
  } finally {
    Xn(n), cn(r), Wi(i);
  }
}, to = function() {
  const e = (
    /** @type {(anchor: Node) => void} */
    J(this, Vn).pending
  );
  J(this, Sn) !== null && (Pe(this, gr, document.createDocumentFragment()), yf(J(this, Sn), J(this, gr))), J(this, ln) === null && Pe(this, ln, qt(() => e(J(this, Cn))));
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 */
hs = function(e) {
  var n;
  if (!this.has_pending_snippet()) {
    this.parent && jt(n = this.parent, tn, hs).call(n, e);
    return;
  }
  Pe(this, br, J(this, br) + e), J(this, br) === 0 && (Pe(this, Dn, !1), J(this, ln) && Sr(J(this, ln), () => {
    Pe(this, ln, null);
  }), J(this, gr) && (J(this, Cn).before(J(this, gr)), Pe(this, gr, null)), Tr(() => {
    ir.ensure().flush();
  }));
};
function yf(t, e) {
  for (var n = t.nodes_start, r = t.nodes_end; n !== null; ) {
    var i = n === r ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Ha(n)
    );
    e.append(n), n = i;
  }
}
function ju(t, e, n) {
  const r = Ua() ? Ao : Ws;
  if (e.length === 0) {
    n(t.map(r));
    return;
  }
  var i = ot, a = (
    /** @type {Effect} */
    je
  ), o = If();
  Promise.all(e.map((u) => /* @__PURE__ */ _f(u))).then((u) => {
    o();
    try {
      n([...t.map(r), ...u]);
    } catch (l) {
      a.f & ui || zi(l, a);
    }
    i == null || i.deactivate(), vs();
  }).catch((u) => {
    zi(u, a);
  });
}
function If() {
  var t = je, e = Ve, n = ut, r = ot;
  return function() {
    Xn(t), cn(e), Wi(n), r == null || r.activate();
  };
}
function vs() {
  Xn(null), cn(null), Wi(null);
}
// @__NO_SIDE_EFFECTS__
function Ao(t) {
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
      Dt
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
  n === null && zd();
  var r = (
    /** @type {Boundary} */
    n.b
  ), i = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), a = oi(
    /** @type {V} */
    Dt
  ), o = !Ve, u = /* @__PURE__ */ new Map();
  return Df(() => {
    var f;
    var l = Mu();
    i = l.promise;
    try {
      Promise.resolve(t()).then(l.resolve, l.reject).then(vs);
    } catch (v) {
      l.reject(v), vs();
    }
    var c = (
      /** @type {Batch} */
      ot
    ), d = r.is_pending();
    o && (r.update_pending_count(1), d || (c.increment(), (f = u.get(c)) == null || f.reject(Ai), u.delete(c), u.set(c, l)));
    const h = (v, m = void 0) => {
      if (d || c.activate(), m)
        m !== Ai && (a.f |= ni, Ki(a, m));
      else {
        a.f & ni && (a.f ^= ni), Ki(a, v);
        for (const [b, I] of u) {
          if (u.delete(b), b === c) break;
          I.reject(Ai);
        }
      }
      o && (r.update_pending_count(-1), d || c.decrement());
    };
    l.promise.then(h, (v) => h(null, v || "unknown"));
  }), So(() => {
    for (const l of u.values())
      l.reject(Ai);
  }), new Promise((l) => {
    function c(d) {
      function h() {
        d === i ? l(a) : c(i);
      }
      d.then(h, h);
    }
    c(i);
  });
}
// @__NO_SIDE_EFFECTS__
function se(t) {
  const e = /* @__PURE__ */ Ao(t);
  return ic(e), e;
}
// @__NO_SIDE_EFFECTS__
function Ws(t) {
  const e = /* @__PURE__ */ Ao(t);
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
  if (t.equals(e) || (t.v = e, t.wv = oc()), !di)
    if (Ft !== null)
      Ft.set(t, t.v);
    else {
      var n = (Ir || t.f & Tn) && t.deps !== null ? Rr : Kt;
      en(t, n);
    }
}
const Cr = /* @__PURE__ */ new Map();
function oi(t, e) {
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
  const n = oi(t);
  return ic(n), n;
}
// @__NO_SIDE_EFFECTS__
function zu(t, e = !1, n = !0) {
  var i;
  const r = oi(t);
  return e || (r.equals = Nu), ra && n && ut !== null && ut.l !== null && ((i = ut.l).s ?? (i.s = [])).push(r), r;
}
function Q(t, e, n = !1) {
  Ve !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Pn || Ve.f & ml) && Ua() && Ve.f & (nn | si | _o | ml) && !($t != null && $t.includes(t)) && ef();
  let r = n ? ye(e) : e;
  return Ki(t, r);
}
function Ki(t, e) {
  if (!t.equals(e)) {
    var n = t.v;
    di ? Cr.set(t, e) : Cr.set(t, n), t.v = e;
    var r = ir.ensure();
    r.capture(t, n), t.f & nn && (t.f & gn && zs(
      /** @type {Derived} */
      t
    ), en(t, t.f & Tn ? Rr : Kt)), t.wv = oc(), Ku(t, gn), Ua() && je !== null && je.f & Kt && !(je.f & (ar | li)) && (An === null ? Uf([t]) : An.push(t));
  }
  return e;
}
function Aa(t) {
  Q(t, t.v + 1);
}
function Ku(t, e) {
  var n = t.reactions;
  if (n !== null)
    for (var r = Ua(), i = n.length, a = 0; a < i; a++) {
      var o = n[a], u = o.f;
      if (!(!r && o === je)) {
        var l = (u & gn) === 0;
        l && en(o, e), u & nn ? Ku(
          /** @type {Derived} */
          o,
          Rr
        ) : l && (u & si && nr !== null && nr.push(
          /** @type {Effect} */
          o
        ), ai(
          /** @type {Effect} */
          o
        ));
      }
    }
}
function ye(t) {
  if (typeof t != "object" || t === null || zn in t)
    return t;
  const e = Fs(t);
  if (e !== Vd && e !== Gd)
    return t;
  var n = /* @__PURE__ */ new Map(), r = Io(t), i = /* @__PURE__ */ be(0), a = ri, o = (u) => {
    if (ri === a)
      return u();
    var l = Ve, c = ri;
    cn(null), Al(a);
    var d = u();
    return cn(l), Al(c), d;
  };
  return r && n.set("length", /* @__PURE__ */ be(
    /** @type {any[]} */
    t.length
  )), new Proxy(
    /** @type {any} */
    t,
    {
      defineProperty(u, l, c) {
        (!("value" in c) || c.configurable === !1 || c.enumerable === !1 || c.writable === !1) && Jd();
        var d = n.get(l);
        return d === void 0 ? d = o(() => {
          var h = /* @__PURE__ */ be(c.value);
          return n.set(l, h), h;
        }) : Q(d, c.value, !0), !0;
      },
      deleteProperty(u, l) {
        var c = n.get(l);
        if (c === void 0) {
          if (l in u) {
            const d = o(() => /* @__PURE__ */ be(Dt));
            n.set(l, d), Aa(i);
          }
        } else
          Q(c, Dt), Aa(i);
        return !0;
      },
      get(u, l, c) {
        var v;
        if (l === zn)
          return t;
        var d = n.get(l), h = l in u;
        if (d === void 0 && (!h || (v = Ar(u, l)) != null && v.writable) && (d = o(() => {
          var m = ye(h ? u[l] : Dt), b = /* @__PURE__ */ be(m);
          return b;
        }), n.set(l, d)), d !== void 0) {
          var f = s(d);
          return f === Dt ? void 0 : f;
        }
        return Reflect.get(u, l, c);
      },
      getOwnPropertyDescriptor(u, l) {
        var c = Reflect.getOwnPropertyDescriptor(u, l);
        if (c && "value" in c) {
          var d = n.get(l);
          d && (c.value = s(d));
        } else if (c === void 0) {
          var h = n.get(l), f = h == null ? void 0 : h.v;
          if (h !== void 0 && f !== Dt)
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
        if (l === zn)
          return !0;
        var c = n.get(l), d = c !== void 0 && c.v !== Dt || Reflect.has(u, l);
        if (c !== void 0 || je !== null && (!d || (f = Ar(u, l)) != null && f.writable)) {
          c === void 0 && (c = o(() => {
            var v = d ? ye(u[l]) : Dt, m = /* @__PURE__ */ be(v);
            return m;
          }), n.set(l, c));
          var h = s(c);
          if (h === Dt)
            return !1;
        }
        return d;
      },
      set(u, l, c, d) {
        var x;
        var h = n.get(l), f = l in u;
        if (r && l === "length")
          for (var v = c; v < /** @type {Source<number>} */
          h.v; v += 1) {
            var m = n.get(v + "");
            m !== void 0 ? Q(m, Dt) : v in u && (m = o(() => /* @__PURE__ */ be(Dt)), n.set(v + "", m));
          }
        if (h === void 0)
          (!f || (x = Ar(u, l)) != null && x.writable) && (h = o(() => /* @__PURE__ */ be(void 0)), Q(h, ye(c)), n.set(l, h));
        else {
          f = h.v !== Dt;
          var b = o(() => ye(c));
          Q(h, b);
        }
        var I = Reflect.getOwnPropertyDescriptor(u, l);
        if (I != null && I.set && I.set.call(d, c), !f) {
          if (r && typeof l == "string") {
            var E = (
              /** @type {Source<number>} */
              n.get("length")
            ), S = Number(l);
            Number.isInteger(S) && S >= E.v && Q(E, S + 1);
          }
          Aa(i);
        }
        return !0;
      },
      ownKeys(u) {
        s(i);
        var l = Reflect.ownKeys(u).filter((h) => {
          var f = n.get(h);
          return f === void 0 || f.v !== Dt;
        });
        for (var [c, d] of n)
          d.v !== Dt && !(c in u) && l.push(c);
        return l;
      },
      setPrototypeOf() {
        $d();
      }
    }
  );
}
function bl(t) {
  try {
    if (t !== null && typeof t == "object" && zn in t)
      return t[zn];
  } catch {
  }
  return t;
}
function Af(t, e) {
  return Object.is(bl(t), bl(e));
}
var yl, Xu, Yu, Zu, Qu;
function Cf() {
  if (yl === void 0) {
    yl = window, Xu = document, Yu = /Firefox/.test(navigator.userAgent);
    var t = Element.prototype, e = Node.prototype, n = Text.prototype;
    Zu = Ar(e, "firstChild").get, Qu = Ar(e, "nextSibling").get, pl(t) && (t.__click = void 0, t.__className = void 0, t.__attributes = null, t.__style = void 0, t.__e = void 0), pl(n) && (n.__t = void 0);
  }
}
function Mr(t = "") {
  return document.createTextNode(t);
}
// @__NO_SIDE_EFFECTS__
function Xi(t) {
  return Zu.call(t);
}
// @__NO_SIDE_EFFECTS__
function Ha(t) {
  return Qu.call(t);
}
function Ie(t, e) {
  return /* @__PURE__ */ Xi(t);
}
function Z(t, e = !1) {
  {
    var n = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ Xi(
        /** @type {Node} */
        t
      )
    );
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ Ha(n) : n;
  }
}
function Ee(t, e = 1, n = !1) {
  let r = t;
  for (; e--; )
    r = /** @type {TemplateNode} */
    /* @__PURE__ */ Ha(r);
  return r;
}
function Sf(t) {
  t.textContent = "";
}
function Ks() {
  return !1;
}
function xf(t, e) {
  if (e) {
    const n = document.body;
    t.autofocus = !0, Tr(() => {
      document.activeElement === n && t.focus();
    });
  }
}
let Il = !1;
function Tf() {
  Il || (Il = !0, document.addEventListener(
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
function Co(t) {
  var e = Ve, n = je;
  cn(null), Xn(null);
  try {
    return t();
  } finally {
    cn(e), Xn(n);
  }
}
function wf(t, e, n, r = n) {
  t.addEventListener(e, () => Co(n));
  const i = t.__on_r;
  i ? t.__on_r = () => {
    i(), r(!0);
  } : t.__on_r = () => r(!0), Tf();
}
function Lf(t) {
  je === null && Ve === null && Yd(), Ve !== null && Ve.f & Tn && je === null && Xd(), di && Kd();
}
function Of(t, e) {
  var n = e.last;
  n === null ? e.last = e.first = t : (n.next = t, t.prev = n, e.last = t);
}
function or(t, e, n, r = !0) {
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
      Sa(a), a.f |= Gs;
    } catch (l) {
      throw Bt(a), l;
    }
  else e !== null && ai(a);
  if (r) {
    var o = a;
    if (n && o.deps === null && o.teardown === null && o.nodes_start === null && o.first === o.last && // either `null`, or a singular child
    !(o.f & na) && (o = o.first), o !== null && (o.parent = i, i !== null && Of(o, i), Ve !== null && Ve.f & nn && !(t & li))) {
      var u = (
        /** @type {Derived} */
        Ve
      );
      (u.effects ?? (u.effects = [])).push(o);
    }
  }
  return a;
}
function Rf() {
  return Ve !== null && !Pn;
}
function So(t) {
  const e = or(ks, null, !1);
  return en(e, Kt), e.teardown = t, e;
}
function Te(t) {
  Lf();
  var e = (
    /** @type {Effect} */
    je.f
  ), n = !Ve && (e & ar) !== 0 && (e & Gs) === 0;
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
  return or(Bs | qd, t, !1);
}
function Mf(t) {
  ir.ensure();
  const e = or(li | na, t, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? Sr(e, () => {
      Bt(e), r(void 0);
    }) : (Bt(e), r(void 0));
  });
}
function Fa(t) {
  return or(Bs, t, !1);
}
function Df(t) {
  return or(_o | na, t, !0);
}
function xo(t, e = 0) {
  return or(ks | e, t, !0);
}
function He(t, e = [], n = []) {
  ju(e, n, (r) => {
    or(ks, () => t(...r.map(s)), !0);
  });
}
function Dr(t, e = 0) {
  var n = or(si | e, t, !0);
  return n;
}
function qt(t, e = !0) {
  return or(ar | na, t, !0, e);
}
function $u(t) {
  var e = t.teardown;
  if (e !== null) {
    const n = di, r = Ve;
    El(!0), cn(null);
    try {
      e.call(null);
    } finally {
      El(n), cn(r);
    }
  }
}
function ec(t, e = !1) {
  var n = t.first;
  for (t.first = t.last = null; n !== null; ) {
    const i = n.ac;
    i !== null && Co(() => {
      i.abort(Ai);
    });
    var r = n.next;
    n.f & li ? n.parent = null : Bt(n, e), n = r;
  }
}
function Pf(t) {
  for (var e = t.first; e !== null; ) {
    var n = e.next;
    e.f & ar || Bt(e), e = n;
  }
}
function Bt(t, e = !0) {
  var n = !1;
  (e || t.f & jd) && t.nodes_start !== null && t.nodes_end !== null && (Nf(
    t.nodes_start,
    /** @type {TemplateNode} */
    t.nodes_end
  ), n = !0), ec(t, e && !n), so(t, 0), en(t, ui);
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
      /* @__PURE__ */ Ha(t)
    );
    t.remove(), t = n;
  }
}
function tc(t) {
  var e = t.parent, n = t.prev, r = t.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), e !== null && (e.first === t && (e.first = r), e.last === t && (e.last = n));
}
function Sr(t, e) {
  var n = [];
  Xs(t, n, !0), nc(n, () => {
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
function Xs(t, e, n) {
  if (!(t.f & Un)) {
    if (t.f ^= Un, t.transitions !== null)
      for (const o of t.transitions)
        (o.is_global || n) && e.push(o);
    for (var r = t.first; r !== null; ) {
      var i = r.next, a = (r.f & ci) !== 0 || (r.f & ar) !== 0;
      Xs(r, e, a ? n : !1), r = i;
    }
  }
}
function To(t) {
  rc(t, !0);
}
function rc(t, e) {
  if (t.f & Un) {
    t.f ^= Un, t.f & Kt || (en(t, gn), ai(t));
    for (var n = t.first; n !== null; ) {
      var r = n.next, i = (n.f & ci) !== 0 || (n.f & ar) !== 0;
      rc(n, i ? e : !1), n = r;
    }
    if (t.transitions !== null)
      for (const a of t.transitions)
        (a.is_global || e) && a.in();
  }
}
let Di = !1;
function _l(t) {
  Di = t;
}
let di = !1;
function El(t) {
  di = t;
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
let ac = 1, Ca = 0, ri = Ca;
function Al(t) {
  ri = t;
}
let Ir = !1;
function oc() {
  return ++ac;
}
function wo(t) {
  var h;
  var e = t.f;
  if (e & gn)
    return !0;
  if (e & Rr) {
    var n = t.deps, r = (e & Tn) !== 0;
    if (n !== null) {
      var i, a, o = (e & oo) !== 0, u = r && je !== null && !Ir, l = n.length;
      if ((o || u) && (je === null || !(je.f & ui))) {
        var c = (
          /** @type {Derived} */
          t
        ), d = c.parent;
        for (i = 0; i < l; i++)
          a = n[i], (o || !((h = a == null ? void 0 : a.reactions) != null && h.includes(c))) && (a.reactions ?? (a.reactions = [])).push(c);
        o && (c.f ^= oo), u && d !== null && !(d.f & Tn) && (c.f ^= Tn);
      }
      for (i = 0; i < l; i++)
        if (a = n[i], wo(
          /** @type {Derived} */
          a
        ) && Wu(
          /** @type {Derived} */
          a
        ), a.wv > t.wv)
          return !0;
    }
    (!r || je !== null && !Ir) && en(t, Kt);
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
      ) : e === a && (n ? en(a, gn) : a.f & Kt && en(a, Rr), ai(
        /** @type {Effect} */
        a
      ));
    }
}
function lc(t) {
  var b;
  var e = Jt, n = vn, r = An, i = Ve, a = Ir, o = $t, u = ut, l = Pn, c = ri, d = t.f;
  Jt = /** @type {null | Value[]} */
  null, vn = 0, An = null, Ir = (d & Tn) !== 0 && (Pn || !Di || Ve === null), Ve = d & (ar | li) ? null : t, $t = null, Wi(t.ctx), Pn = !1, ri = ++Ca, t.ac !== null && (Co(() => {
    t.ac.abort(Ai);
  }), t.ac = null);
  try {
    t.f |= ls;
    var h = (
      /** @type {Function} */
      t.fn
    ), f = h(), v = t.deps;
    if (Jt !== null) {
      var m;
      if (so(t, vn), v !== null && vn > 0)
        for (v.length = vn + Jt.length, m = 0; m < Jt.length; m++)
          v[vn + m] = Jt[m];
      else
        t.deps = v = Jt;
      if (!Ir || // Deriveds that already have reactions can cleanup, so we still add them as reactions
      d & nn && /** @type {import('#client').Derived} */
      t.reactions !== null)
        for (m = vn; m < v.length; m++)
          ((b = v[m]).reactions ?? (b.reactions = [])).push(t);
    } else v !== null && vn < v.length && (so(t, vn), v.length = vn);
    if (Ua() && An !== null && !Pn && v !== null && !(t.f & (nn | Rr | gn)))
      for (m = 0; m < /** @type {Source[]} */
      An.length; m++)
        sc(
          An[m],
          /** @type {Effect} */
          t
        );
    return i !== null && i !== t && (Ca++, An !== null && (r === null ? r = An : r.push(.../** @type {Source[]} */
    An))), t.f & ni && (t.f ^= ni), f;
  } catch (I) {
    return Fu(I);
  } finally {
    t.f ^= ls, Jt = e, vn = n, An = r, Ve = i, Ir = a, $t = o, Wi(u), Pn = l, ri = c;
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
  (Jt === null || !Jt.includes(e)) && (en(e, Rr), e.f & (Tn | oo) || (e.f ^= oo), qu(
    /** @type {Derived} **/
    e
  ), so(
    /** @type {Derived} **/
    e,
    0
  ));
}
function so(t, e) {
  var n = t.deps;
  if (n !== null)
    for (var r = e; r < n.length; r++)
      Hf(t, n[r]);
}
function Sa(t) {
  var e = t.f;
  if (!(e & ui)) {
    en(t, Kt);
    var n = je, r = Di;
    je = t, Di = !0;
    try {
      e & si ? Pf(t) : ec(t), $u(t);
      var i = lc(t);
      t.teardown = typeof i == "function" ? i : null, t.wv = ac;
      var a;
      Lu && of && t.f & gn && t.deps;
    } finally {
      Di = r, je = n;
    }
  }
}
async function Lo() {
  await Promise.resolve(), df();
}
function s(t) {
  var e = t.f, n = (e & nn) !== 0;
  if (Ve !== null && !Pn) {
    var r = je !== null && (je.f & ui) !== 0;
    if (!r && !($t != null && $t.includes(t))) {
      var i = Ve.deps;
      if (Ve.f & ls)
        t.rv < Ca && (t.rv = Ca, Jt === null && i !== null && i[vn] === t ? vn++ : Jt === null ? Jt = [t] : (!Ir || !Jt.includes(t)) && Jt.push(t));
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
    ), u = o.parent;
    u !== null && !(u.f & Tn) && (o.f ^= Tn);
  }
  if (di) {
    if (Cr.has(t))
      return Cr.get(t);
    if (n) {
      o = /** @type {Derived} */
      t;
      var l = o.v;
      return (!(o.f & Kt) && o.reactions !== null || uc(o)) && (l = zs(o)), Cr.set(o, l), l;
    }
  } else if (n) {
    if (o = /** @type {Derived} */
    t, Ft != null && Ft.has(o))
      return Ft.get(o);
    wo(o) && Wu(o);
  }
  if (Ft != null && Ft.has(t))
    return Ft.get(t);
  if (t.f & ni)
    throw t.v;
  return t.v;
}
function uc(t) {
  if (t.v === Dt) return !0;
  if (t.deps === null) return !1;
  for (const e of t.deps)
    if (Cr.has(e) || e.f & nn && uc(
      /** @type {Derived} */
      e
    ))
      return !0;
  return !1;
}
function Pr(t) {
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
    if (zn in t)
      ps(t);
    else if (!Array.isArray(t))
      for (let e in t) {
        const n = t[e];
        typeof n == "object" && n && zn in n && ps(n);
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
    const n = Fs(t);
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
const cc = /* @__PURE__ */ new Set(), ms = /* @__PURE__ */ new Set();
function Ys(t, e, n, r = {}) {
  function i(a) {
    if (r.capture || ba.call(e, a), !a.cancelBubble)
      return Co(() => n == null ? void 0 : n.call(this, a));
  }
  return t.startsWith("pointer") || t.startsWith("touch") || t === "wheel" ? Tr(() => {
    e.addEventListener(t, i, r);
  }) : e.addEventListener(t, i, r), i;
}
function kf(t, e, n, r = {}) {
  var i = Ys(e, t, n, r);
  return () => {
    t.removeEventListener(e, i, r);
  };
}
function gs(t, e, n, r, i) {
  var a = { capture: r, passive: i }, o = Ys(t, e, n, a);
  (e === document.body || // @ts-ignore
  e === window || // @ts-ignore
  e === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  e instanceof HTMLMediaElement) && So(() => {
    e.removeEventListener(t, o, a);
  });
}
function Nr(t) {
  for (var e = 0; e < t.length; e++)
    cc.add(t[e]);
  for (var n of ms)
    n(t);
}
let Cl = null;
function ba(t) {
  var S;
  var e = this, n = (
    /** @type {Node} */
    e.ownerDocument
  ), r = t.type, i = ((S = t.composedPath) == null ? void 0 : S.call(t)) || [], a = (
    /** @type {null | Element} */
    i[0] || t.target
  );
  Cl = t;
  var o = 0, u = Cl === t && t.__root;
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
    ao(t, "currentTarget", {
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
          var b = a["__" + r];
          if (b != null && (!/** @type {any} */
          a.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          t.target === a))
            if (Io(b)) {
              var [I, ...E] = b;
              I.apply(a, [t, ...E]);
            } else
              b.call(a, t);
        } catch (x) {
          f ? v.push(x) : f = x;
        }
        if (t.cancelBubble || m === e || m === null)
          break;
        a = m;
      }
      if (f) {
        for (let x of v)
          queueMicrotask(() => {
            throw x;
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
function Yi(t, e) {
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
    /* @__PURE__ */ Xi(i)));
    var o = (
      /** @type {TemplateNode} */
      r || Yu ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (n) {
      var u = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Xi(o)
      ), l = (
        /** @type {TemplateNode} */
        o.lastChild
      );
      Yi(u, l);
    } else
      Yi(o, o);
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
      ), u = (
        /** @type {Element} */
        /* @__PURE__ */ Xi(o)
      );
      a = /** @type {Element} */
      /* @__PURE__ */ Xi(u);
    }
    var l = (
      /** @type {TemplateNode} */
      a.cloneNode(!0)
    );
    return Yi(l, l), l;
  };
}
// @__NO_SIDE_EFFECTS__
function dn(t, e) {
  return /* @__PURE__ */ Vf(t, e, "svg");
}
function Xt(t = "") {
  {
    var e = Mr(t + "");
    return Yi(e, e), e;
  }
}
function ie() {
  var t = document.createDocumentFragment(), e = document.createComment(""), n = Mr();
  return t.append(e, n), Yi(e, n), t;
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
function zf(t) {
  return t = t.toLowerCase(), Wf[t] ?? t;
}
const Kf = ["touchstart", "touchmove"];
function Xf(t) {
  return Kf.includes(t);
}
function vt(t, e) {
  var n = e == null ? "" : typeof e == "object" ? e + "" : e;
  n !== (t.__t ?? (t.__t = t.nodeValue)) && (t.__t = n, t.nodeValue = n + "");
}
function Yf(t, e) {
  return Zf(t, e);
}
const yi = /* @__PURE__ */ new Map();
function Zf(t, { target: e, anchor: n, props: r = {}, events: i, context: a, intro: o = !0 }) {
  Cf();
  var u = /* @__PURE__ */ new Set(), l = (h) => {
    for (var f = 0; f < h.length; f++) {
      var v = h[f];
      if (!u.has(v)) {
        u.add(v);
        var m = Xf(v);
        e.addEventListener(v, ba, { passive: m });
        var b = yi.get(v);
        b === void 0 ? (document.addEventListener(v, ba, { passive: m }), yi.set(v, 1)) : yi.set(v, b + 1);
      }
    }
  };
  l(Hs(cc)), ms.add(l);
  var c = void 0, d = Mf(() => {
    var h = n ?? e.appendChild(Mr());
    return pf(
      /** @type {TemplateNode} */
      h,
      {
        pending: () => {
        }
      },
      (f) => {
        if (a) {
          Oe({});
          var v = (
            /** @type {ComponentContext} */
            ut
          );
          v.c = a;
        }
        i && (r.$$events = i), c = t(f, r) || {}, a && Re();
      }
    ), () => {
      var m;
      for (var f of u) {
        e.removeEventListener(f, ba);
        var v = (
          /** @type {number} */
          yi.get(f)
        );
        --v === 0 ? (document.removeEventListener(f, ba), yi.delete(f)) : yi.set(f, v);
      }
      ms.delete(l), h !== n && ((m = h.parentNode) == null || m.removeChild(h));
    };
  });
  return Qf.set(c, d), c;
}
let Qf = /* @__PURE__ */ new WeakMap();
function Ae(t, e, ...n) {
  var r = t, i = ge, a;
  Dr(() => {
    i !== (i = e()) && (a && (Bt(a), a = null), a = qt(() => (
      /** @type {SnippetFn} */
      i(r, ...n)
    )));
  }, ci);
}
function st(t) {
  ut === null && js(), ra && ut.l !== null ? Jf(ut).m.push(t) : Te(() => {
    const e = Pr(t);
    if (typeof e == "function") return (
      /** @type {() => void} */
      e
    );
  });
}
function Hn(t) {
  ut === null && js(), st(() => () => Pr(t));
}
function Jf(t) {
  var e = (
    /** @type {ComponentContextLegacy} */
    t.l
  );
  return e.u ?? (e.u = { a: [], b: [], m: [] });
}
function ue(t, e, n = !1) {
  var r = t, i = null, a = null, o = Dt, u = n ? ci : 0, l = !1;
  const c = (v, m = !0) => {
    l = !0, f(m, v);
  };
  var d = null;
  function h() {
    d !== null && (d.lastChild.remove(), r.before(d), d = null);
    var v = o ? i : a, m = o ? a : i;
    v && To(v), m && Sr(m, () => {
      o ? a = null : i = null;
    });
  }
  const f = (v, m) => {
    if (o !== (o = v)) {
      var b = Ks(), I = r;
      if (b && (d = document.createDocumentFragment(), d.append(I = Mr())), o ? i ?? (i = m && qt(() => m(I))) : a ?? (a = m && qt(() => m(I))), b) {
        var E = (
          /** @type {Batch} */
          ot
        ), S = o ? i : a, x = o ? a : i;
        S && E.skipped_effects.delete(S), x && E.skipped_effects.add(x), E.add_callback(h);
      } else
        h();
    }
  };
  Dr(() => {
    l = !1, e(c), l || f(null, null);
  }, u);
}
function no(t, e) {
  return e;
}
function $f(t, e, n) {
  for (var r = t.items, i = [], a = e.length, o = 0; o < a; o++)
    Xs(e[o].e, i, !0);
  var u = a > 0 && i.length === 0 && n !== null;
  if (u) {
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
    for (var c = 0; c < a; c++) {
      var d = e[c];
      u || (r.delete(d.k), kn(t, d.prev, d.next)), Bt(d.e, !u);
    }
  });
}
function _r(t, e, n, r, i, a = null) {
  var o = t, u = { flags: e, items: /* @__PURE__ */ new Map(), first: null }, l = (e & 4) !== 0;
  if (l) {
    var c = (
      /** @type {Element} */
      t
    );
    o = c.appendChild(Mr());
  }
  var d = null, h = !1, f = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ Ws(() => {
    var E = n();
    return Io(E) ? E : E == null ? [] : Hs(E);
  }), m, b;
  function I() {
    eh(
      b,
      m,
      u,
      f,
      o,
      i,
      e,
      r,
      n
    ), a !== null && (m.length === 0 ? d ? To(d) : d = qt(() => a(o)) : d !== null && Sr(d, () => {
      d = null;
    }));
  }
  Dr(() => {
    b ?? (b = /** @type {Effect} */
    je), m = /** @type {V[]} */
    s(v);
    var E = m.length;
    if (!(h && E === 0)) {
      h = E === 0;
      var S, x, g, _;
      if (Ks()) {
        var C = /* @__PURE__ */ new Set(), T = (
          /** @type {Batch} */
          ot
        );
        for (x = 0; x < E; x += 1) {
          g = m[x], _ = r(g, x);
          var A = u.items.get(_) ?? f.get(_);
          A ? e & 3 && fc(A, g, x, e) : (S = hc(
            null,
            u,
            null,
            null,
            g,
            _,
            x,
            i,
            e,
            n,
            !0
          ), f.set(_, S)), C.add(_);
        }
        for (const [w, U] of u.items)
          C.has(w) || T.skipped_effects.add(U.e);
        T.add_callback(I);
      } else
        I();
      s(v);
    }
  });
}
function eh(t, e, n, r, i, a, o, u, l) {
  var te, P, y, L;
  var c = (o & 8) !== 0, d = (o & 3) !== 0, h = e.length, f = n.items, v = n.first, m = v, b, I = null, E, S = [], x = [], g, _, C, T;
  if (c)
    for (T = 0; T < h; T += 1)
      g = e[T], _ = u(g, T), C = f.get(_), C !== void 0 && ((te = C.a) == null || te.measure(), (E ?? (E = /* @__PURE__ */ new Set())).add(C));
  for (T = 0; T < h; T += 1) {
    if (g = e[T], _ = u(g, T), C = f.get(_), C === void 0) {
      var A = r.get(_);
      if (A !== void 0) {
        r.delete(_), f.set(_, A);
        var w = I ? I.next : m;
        kn(n, I, A), kn(n, A, w), qo(A, w, i), I = A;
      } else {
        var U = m ? (
          /** @type {TemplateNode} */
          m.e.nodes_start
        ) : i;
        I = hc(
          U,
          n,
          I,
          I === null ? n.first : I.next,
          g,
          _,
          T,
          a,
          o,
          l
        );
      }
      f.set(_, I), S = [], x = [], m = I.next;
      continue;
    }
    if (d && fc(C, g, T, o), C.e.f & Un && (To(C.e), c && ((P = C.a) == null || P.unfix(), (E ?? (E = /* @__PURE__ */ new Set())).delete(C))), C !== m) {
      if (b !== void 0 && b.has(C)) {
        if (S.length < x.length) {
          var K = x[0], H;
          I = K.prev;
          var B = S[0], _e = S[S.length - 1];
          for (H = 0; H < S.length; H += 1)
            qo(S[H], K, i);
          for (H = 0; H < x.length; H += 1)
            b.delete(x[H]);
          kn(n, B.prev, _e.next), kn(n, I, B), kn(n, _e, K), m = K, I = _e, T -= 1, S = [], x = [];
        } else
          b.delete(C), qo(C, m, i), kn(n, C.prev, C.next), kn(n, C, I === null ? n.first : I.next), kn(n, I, C), I = C;
        continue;
      }
      for (S = [], x = []; m !== null && m.k !== _; )
        m.e.f & Un || (b ?? (b = /* @__PURE__ */ new Set())).add(m), x.push(m), m = m.next;
      if (m === null)
        continue;
      C = m;
    }
    S.push(C), I = C, m = C.next;
  }
  if (m !== null || b !== void 0) {
    for (var k = b === void 0 ? [] : Hs(b); m !== null; )
      m.e.f & Un || k.push(m), m = m.next;
    var F = k.length;
    if (F > 0) {
      var D = o & 4 && h === 0 ? i : null;
      if (c) {
        for (T = 0; T < F; T += 1)
          (y = k[T].a) == null || y.measure();
        for (T = 0; T < F; T += 1)
          (L = k[T].a) == null || L.fix();
      }
      $f(n, k, D);
    }
  }
  c && Tr(() => {
    var ne;
    if (E !== void 0)
      for (C of E)
        (ne = C.a) == null || ne.apply();
  }), t.first = n.first && n.first.e, t.last = I && I.e;
  for (var G of r.values())
    Bt(G.e);
  r.clear();
}
function fc(t, e, n, r) {
  r & 1 && Ki(t.v, e), r & 2 ? Ki(
    /** @type {Value<number>} */
    t.i,
    n
  ) : t.i = n;
}
function hc(t, e, n, r, i, a, o, u, l, c, d) {
  var h = (l & 1) !== 0, f = (l & 16) === 0, v = h ? f ? /* @__PURE__ */ zu(i, !1, !1) : oi(i) : i, m = l & 2 ? oi(o) : o, b = {
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
      I.append(t = Mr());
    }
    return b.e = qt(() => u(
      /** @type {Node} */
      t,
      v,
      m,
      c
    ), af), b.e.prev = n && n.e, b.e.next = r && r.e, n === null ? d || (e.first = b) : (n.next = b, n.e.next = b.e), r !== null && (r.prev = b, r.e.prev = b.e), b;
  } finally {
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
      /* @__PURE__ */ Ha(a)
    );
    i.before(a), a = o;
  }
}
function kn(t, e, n) {
  e === null ? t.first = n : (e.next = n, e.e.next = n && n.e), n !== null && (n.prev = e, n.e.prev = e && e.e);
}
function sr(t, e, n) {
  var r = t, i, a, o = null, u = null;
  function l() {
    a && (Sr(a), a = null), o && (o.lastChild.remove(), r.before(o), o = null), a = u, u = null;
  }
  Dr(() => {
    if (i !== (i = e())) {
      var c = Ks();
      if (i) {
        var d = r;
        c && (o = document.createDocumentFragment(), o.append(d = Mr()), a && ot.skipped_effects.add(a)), u = qt(() => n(d, i));
      }
      c ? ot.add_callback(l) : l();
    }
  }, ci);
}
function Sl(t, e, n, r, i, a) {
  var o, u, l = null, c = (
    /** @type {TemplateNode} */
    t
  ), d;
  Dr(() => {
    const h = e() || null;
    var f = h === "svg" ? Fd : null;
    h !== o && (d && (h === null ? Sr(d, () => {
      d = null, u = null;
    }) : h === u ? To(d) : Bt(d)), h && h !== u && (d = qt(() => {
      if (l = f ? document.createElementNS(f, h) : document.createElement(h), Yi(l, l), r) {
        var v = (
          /** @type {TemplateNode} */
          l.appendChild(Mr())
        );
        r(l, v);
      }
      je.nodes_end = l, c.before(l);
    })), o = h, o && (u = o));
  }, ci);
}
function Fe(t, e, n) {
  Fa(() => {
    var r = Pr(() => e(t, n == null ? void 0 : n()) || {});
    if (n && (r != null && r.update)) {
      var i = !1, a = (
        /** @type {any} */
        {}
      );
      xo(() => {
        var o = n();
        Bf(o), i && qs(a, o) && (a = o, r.update(o));
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
  Dr(() => {
    n !== (n = e()) && (r && (Bt(r), r = null), n && (r = qt(() => {
      Fa(() => (
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
const xl = [...` 	
\r\f \v\uFEFF`];
function rh(t, e, n) {
  var r = t == null ? "" : "" + t;
  if (n) {
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
function ih(t, e) {
  if (e) {
    var n = "", r, i;
    if (Array.isArray(e) ? (r = e[0], i = e[1]) : r = e, t) {
      t = String(t).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var a = !1, o = 0, u = !1, l = [];
      r && l.push(...Object.keys(r).map(Wo)), i && l.push(...Object.keys(i).map(Wo));
      var c = 0, d = -1;
      const b = t.length;
      for (var h = 0; h < b; h++) {
        var f = t[h];
        if (u ? f === "/" && t[h - 1] === "*" && (u = !1) : a ? a === f && (a = !1) : f === "/" && t[h + 1] === "*" ? u = !0 : f === '"' || f === "'" ? a = f : f === "(" ? o++ : f === ")" && o--, !u && a === !1 && o === 0) {
          if (f === ":" && d === -1)
            d = h;
          else if (f === ";" || h === b - 1) {
            if (d !== -1) {
              var v = Wo(t.substring(c, d).trim());
              if (!l.includes(v)) {
                f !== ";" && h++;
                var m = t.substring(c, h).trim();
                n += " " + m + ";";
              }
            }
            c = h + 1, d = -1;
          }
        }
      }
    }
    return r && (n += Tl(r)), i && (n += Tl(i, !0)), n = n.trim(), n === "" ? null : n;
  }
  return t == null ? null : String(t);
}
function mc(t, e, n, r, i, a) {
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
function rn(t, e, n, r) {
  var i = t.__style;
  if (i !== e) {
    var a = ih(e, r);
    a == null ? t.removeAttribute("style") : t.style.cssText = a, t.__style = e;
  } else r && (Array.isArray(r) ? (zo(t, n == null ? void 0 : n[0], r[0]), zo(t, n == null ? void 0 : n[1], r[1], "important")) : zo(t, n, r));
  return r;
}
function bs(t, e, n = !1) {
  if (t.multiple) {
    if (e == null)
      return;
    if (!Io(e))
      return nf();
    for (var r of t.options)
      r.selected = e.includes(wl(r));
    return;
  }
  for (r of t.options) {
    var i = wl(r);
    if (Af(i, e)) {
      r.selected = !0;
      return;
    }
  }
  (!n || e !== void 0) && (t.selectedIndex = -1);
}
function ah(t) {
  var e = new MutationObserver(() => {
    bs(t, t.__value);
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
  }), So(() => {
    e.disconnect();
  });
}
function wl(t) {
  return "__value" in t ? t.__value : t.value;
}
const fa = Symbol("class"), ha = Symbol("style"), gc = Symbol("is custom element"), bc = Symbol("is html");
function Ll(t, e) {
  var n = Zs(t);
  n.value === (n.value = // treat null and undefined the same for the initial value
  e ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  t.value === e && (e !== 0 || t.nodeName !== "PROGRESS") || (t.value = e ?? "");
}
function oh(t, e) {
  e ? t.hasAttribute("selected") || t.setAttribute("selected", "") : t.removeAttribute("selected");
}
function Zi(t, e, n, r) {
  var i = Zs(t);
  i[e] !== (i[e] = n) && (e === "loading" && (t[Wd] = n), n == null ? t.removeAttribute(e) : typeof n != "string" && yc(t).includes(e) ? t[e] = n : t.setAttribute(e, n));
}
function sh(t, e, n, r, i = !1, a = !1) {
  var o = Zs(t), u = o[gc], l = !o[bc], c = e || {}, d = t.tagName === "OPTION";
  for (var h in e)
    h in n || (n[h] = null);
  n.class ? n.class = pc(n.class) : n[fa] && (n.class = null), n[ha] && (n.style ?? (n.style = null));
  var f = yc(t);
  for (const x in n) {
    let g = n[x];
    if (d && x === "value" && g == null) {
      t.value = t.__value = "", c[x] = g;
      continue;
    }
    if (x === "class") {
      var v = t.namespaceURI === "http://www.w3.org/1999/xhtml";
      mc(t, v, g, r, e == null ? void 0 : e[fa], n[fa]), c[x] = g, c[fa] = n[fa];
      continue;
    }
    if (x === "style") {
      rn(t, g, e == null ? void 0 : e[ha], n[ha]), c[x] = g, c[ha] = n[ha];
      continue;
    }
    var m = c[x];
    if (!(g === m && !(g === void 0 && t.hasAttribute(x)))) {
      c[x] = g;
      var b = x[0] + x[1];
      if (b !== "$$")
        if (b === "on") {
          const _ = {}, C = "$$" + x;
          let T = x.slice(2);
          var I = qf(T);
          if (Gf(T) && (T = T.slice(0, -7), _.capture = !0), !I && m) {
            if (g != null) continue;
            t.removeEventListener(T, c[C], _), c[C] = null;
          }
          if (g != null)
            if (I)
              t[`__${T}`] = g, Nr([T]);
            else {
              let A = function(w) {
                c[x].call(this, w);
              };
              c[C] = Ys(T, t, A, _);
            }
          else I && (t[`__${T}`] = void 0);
        } else if (x === "style")
          Zi(t, x, g);
        else if (x === "autofocus")
          xf(
            /** @type {HTMLElement} */
            t,
            !!g
          );
        else if (!u && (x === "__value" || x === "value" && g != null))
          t.value = t.__value = g;
        else if (x === "selected" && d)
          oh(
            /** @type {HTMLOptionElement} */
            t,
            g
          );
        else {
          var E = x;
          l || (E = zf(E));
          var S = E === "defaultValue" || E === "defaultChecked";
          if (g == null && !u && !S)
            if (o[x] = null, E === "value" || E === "checked") {
              let _ = (
                /** @type {HTMLInputElement} */
                t
              );
              const C = e === void 0;
              if (E === "value") {
                let T = _.defaultValue;
                _.removeAttribute(E), _.defaultValue = T, _.value = _.__value = C ? T : null;
              } else {
                let T = _.defaultChecked;
                _.removeAttribute(E), _.defaultChecked = T, _.checked = C ? T : !1;
              }
            } else
              t.removeAttribute(x);
          else S || f.includes(E) && (u || typeof g != "string") ? (t[E] = g, E in o && (o[E] = Dt)) : typeof g != "function" && Zi(t, E, g);
        }
    }
  }
  return c;
}
function Be(t, e, n = [], r = [], i, a = !1, o = !1) {
  ju(n, r, (u) => {
    var l = void 0, c = {}, d = t.nodeName === "SELECT", h = !1;
    if (Dr(() => {
      var v = e(...u.map(s)), m = sh(
        t,
        l,
        v,
        i,
        a,
        o
      );
      h && d && "value" in v && bs(
        /** @type {HTMLSelectElement} */
        t,
        v.value
      );
      for (let I of Object.getOwnPropertySymbols(c))
        v[I] || Bt(c[I]);
      for (let I of Object.getOwnPropertySymbols(v)) {
        var b = v[I];
        I.description === Bd && (!l || b !== l[I]) && (c[I] && Bt(c[I]), c[I] = qt(() => th(t, () => b))), m[I] = b;
      }
      l = m;
    }), d) {
      var f = (
        /** @type {HTMLSelectElement} */
        t
      );
      Fa(() => {
        bs(
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
function Zs(t) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    t.__attributes ?? (t.__attributes = {
      [gc]: t.nodeName.includes("-"),
      [bc]: t.namespaceURI === Hd
    })
  );
}
var Ol = /* @__PURE__ */ new Map();
function yc(t) {
  var e = t.getAttribute("is") || t.nodeName, n = Ol.get(e);
  if (n) return n;
  Ol.set(e, n = []);
  for (var r, i = t, a = Element.prototype; a !== i; ) {
    r = Ou(i);
    for (var o in r)
      r[o].set && n.push(o);
    i = Fs(i);
  }
  return n;
}
function xa(t, e, n = e) {
  var r = /* @__PURE__ */ new WeakSet();
  wf(t, "input", async (i) => {
    var a = i ? t.defaultValue : t.value;
    if (a = Ko(t) ? Xo(a) : a, n(a), ot !== null && r.add(ot), await Lo(), a !== (a = e())) {
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
  Pr(e) == null && t.value && (n(Ko(t) ? Xo(t.value) : t.value), ot !== null && r.add(ot)), xo(() => {
    var i = e();
    if (t === document.activeElement) {
      var a = (
        /** @type {Batch} */
        Ja ?? ot
      );
      if (r.has(a))
        return;
    }
    Ko(t) && i === Xo(t.value) || t.type === "date" && !i && !t.value || i !== t.value && (t.value = i ?? "");
  });
}
function Ko(t) {
  var e = t.type;
  return e === "number" || e === "range";
}
function Xo(t) {
  return t === "" ? null : +t;
}
function Rl(t, e) {
  return t === e || (t == null ? void 0 : t[zn]) === e;
}
function we(t = {}, e, n, r) {
  return Fa(() => {
    var i, a;
    return xo(() => {
      i = a, a = [], Pr(() => {
        t !== n(...a) && (e(t, ...a), i && Rl(n(...i), t) && e(null, ...i));
      });
    }), () => {
      Tr(() => {
        a && Rl(n(...a), t) && e(null, ...a);
      });
    };
  }), t;
}
function Qs(t, e, n) {
  if (t == null)
    return e(void 0), n && n(void 0), ge;
  const r = Pr(
    () => t.subscribe(
      e,
      // @ts-expect-error
      n
    )
  );
  return r.unsubscribe ? () => r.unsubscribe() : r;
}
const Ii = [];
function lh(t, e) {
  return {
    subscribe: dt(t, e).subscribe
  };
}
function dt(t, e = ge) {
  let n = null;
  const r = /* @__PURE__ */ new Set();
  function i(u) {
    if (qs(t, u) && (t = u, n)) {
      const l = !Ii.length;
      for (const c of r)
        c[1](), Ii.push(c, t);
      if (l) {
        for (let c = 0; c < Ii.length; c += 2)
          Ii[c][0](Ii[c + 1]);
        Ii.length = 0;
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
function ia(t, e, n) {
  const r = !Array.isArray(t), i = r ? [t] : t;
  if (!i.every(Boolean))
    throw new Error("derived() expects stores as input, got a falsy value");
  const a = e.length < 2;
  return lh(n, (o, u) => {
    let l = !1;
    const c = [];
    let d = 0, h = ge;
    const f = () => {
      if (d)
        return;
      h();
      const m = e(r ? c[0] : c, o, u);
      a ? o(m) : h = typeof m == "function" ? m : ge;
    }, v = i.map(
      (m, b) => Qs(
        m,
        (I) => {
          c[b] = I, d &= ~(1 << b), l && f();
        },
        () => {
          d |= 1 << b;
        }
      )
    );
    return l = !0, f(), function() {
      Ru(v), h(), l = !1;
    };
  });
}
function Oo(t) {
  let e;
  return Qs(t, (n) => e = n)(), e;
}
let Wa = !1, ys = Symbol();
function Pt(t, e, n) {
  const r = n[e] ?? (n[e] = {
    store: null,
    source: /* @__PURE__ */ zu(void 0),
    unsubscribe: ge
  });
  if (r.store !== t && !(ys in n))
    if (r.unsubscribe(), r.store = t ?? null, t == null)
      r.source.v = void 0, r.unsubscribe = ge;
    else {
      var i = !0;
      r.unsubscribe = Qs(t, (a) => {
        i ? r.source.v = a : Q(r.source, a);
      }), i = !1;
    }
  return t && ys in n ? Oo(t) : s(r.source);
}
function mn(t, e) {
  return t.set(e), e;
}
function Ln() {
  const t = {};
  function e() {
    So(() => {
      for (var n in t)
        t[n].unsubscribe();
      ao(t, ys, {
        enumerable: !1,
        value: !0
      });
    });
  }
  return [t, e];
}
function uh(t) {
  var e = Wa;
  try {
    return Wa = !1, [t(), Wa];
  } finally {
    Wa = e;
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
      const a = Ar(i, e);
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
        const i = Ar(r, e);
        return i && !i.configurable && (i.configurable = !0), i;
      }
    }
  },
  has(t, e) {
    if (e === zn || e === Du) return !1;
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
  var x;
  var i = !ra || (n & 2) !== 0, a = (n & 8) !== 0, o = (n & 16) !== 0, u = (
    /** @type {V} */
    r
  ), l = !0, c = () => (l && (l = !1, u = o ? Pr(
    /** @type {() => V} */
    r
  ) : (
    /** @type {V} */
    r
  )), u), d;
  if (a) {
    var h = zn in t || Du in t;
    d = ((x = Ar(t, e)) == null ? void 0 : x.set) ?? (h && e in t ? (g) => t[e] = g : void 0);
  }
  var f, v = !1;
  a ? [f, v] = uh(() => (
    /** @type {V} */
    t[e]
  )) : f = /** @type {V} */
  t[e], f === void 0 && r !== void 0 && (f = c(), d && (i && Qd(), d(f)));
  var m;
  if (i ? m = () => {
    var g = (
      /** @type {V} */
      t[e]
    );
    return g === void 0 ? c() : (l = !0, g);
  } : m = () => {
    var g = (
      /** @type {V} */
      t[e]
    );
    return g !== void 0 && (u = /** @type {V} */
    void 0), g === void 0 ? u : g;
  }, i && !(n & 4))
    return m;
  if (d) {
    var b = t.$$legacy;
    return (
      /** @type {() => V} */
      function(g, _) {
        return arguments.length > 0 ? ((!i || !_ || b || v) && d(_ ? m() : g), g) : m();
      }
    );
  }
  var I = !1, E = (n & 1 ? Ao : Ws)(() => (I = !1, m()));
  a && s(E);
  var S = (
    /** @type {Effect} */
    je
  );
  return (
    /** @type {() => V} */
    function(g, _) {
      if (arguments.length > 0) {
        const C = _ ? s(E) : i && a ? ye(g) : g;
        return Q(E, C), I = !0, u !== void 0 && (u = C), g;
      }
      return di && I || S.f & ui ? E.v : s(E);
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
function Ta(t, e) {
  return e.clone !== !1 && e.isMergeableObject(t) ? Qi(Ih(t), t, e) : t;
}
function _h(t, e, n) {
  return t.concat(e).map(function(r) {
    return Ta(r, n);
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
function Ml(t) {
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
  return n.isMergeableObject(t) && Ml(t).forEach(function(i) {
    r[i] = Ta(t[i], n);
  }), Ml(e).forEach(function(i) {
    Ch(t, i) || (Ic(t, i) && n.isMergeableObject(e[i]) ? r[i] = Eh(i, n)(t[i], e[i], n) : r[i] = Ta(e[i], n));
  }), r;
}
function Qi(t, e, n) {
  n = n || {}, n.arrayMerge = n.arrayMerge || _h, n.isMergeableObject = n.isMergeableObject || vh, n.cloneUnlessOtherwiseSpecified = Ta;
  var r = Array.isArray(e), i = Array.isArray(t), a = r === i;
  return a ? r ? n.arrayMerge(t, e, n) : Sh(t, e, n) : Ta(e, n);
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
var Is = function(t, e) {
  return Is = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, r) {
    n.__proto__ = r;
  } || function(n, r) {
    for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (n[i] = r[i]);
  }, Is(t, e);
};
function $e(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  Is(t, e);
  function n() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : (n.prototype = e.prototype, new n());
}
var de = function() {
  return de = Object.assign || function(e) {
    for (var n, r = 1, i = arguments.length; r < i; r++) {
      n = arguments[r];
      for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, de.apply(this, arguments);
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
    function u(d) {
      try {
        c(r.next(d));
      } catch (h) {
        o(h);
      }
    }
    function l(d) {
      try {
        c(r.throw(d));
      } catch (h) {
        o(h);
      }
    }
    function c(d) {
      d.done ? a(d.value) : i(d.value).then(u, l);
    }
    c((r = r.apply(t, e || [])).next());
  });
}
function Js(t, e) {
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
function wt(t) {
  var e = typeof Symbol == "function" && Symbol.iterator, n = e && t[e], r = 0;
  if (n) return n.call(t);
  if (t && typeof t.length == "number") return {
    next: function() {
      return t && r >= t.length && (t = void 0), { value: t && t[r++], done: !t };
    }
  };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function wr(t, e) {
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
function Kn(t, e, n) {
  if (n || arguments.length === 2) for (var r = 0, i = e.length, a; r < i; r++)
    (a || !(r in e)) && (a || (a = Array.prototype.slice.call(e, 0, r)), a[r] = e[r]);
  return t.concat(a || Array.prototype.slice.call(e));
}
function Pi(t) {
  return this instanceof Pi ? (this.v = t, this) : new Pi(t);
}
function Oh(t, e, n) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var r = n.apply(t, e || []), i, a = [];
  return i = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype), u("next"), u("throw"), u("return", o), i[Symbol.asyncIterator] = function() {
    return this;
  }, i;
  function o(v) {
    return function(m) {
      return Promise.resolve(m).then(v, h);
    };
  }
  function u(v, m) {
    r[v] && (i[v] = function(b) {
      return new Promise(function(I, E) {
        a.push([v, b, I, E]) > 1 || l(v, b);
      });
    }, m && (i[v] = m(i[v])));
  }
  function l(v, m) {
    try {
      c(r[v](m));
    } catch (b) {
      f(a[0][3], b);
    }
  }
  function c(v) {
    v.value instanceof Pi ? Promise.resolve(v.value.v).then(d, h) : f(a[0][2], v);
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
  return e ? e.call(t) : (t = typeof wt == "function" ? wt(t) : t[Symbol.iterator](), n = {}, r("next"), r("throw"), r("return"), n[Symbol.asyncIterator] = function() {
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
function Yo(t, e) {
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
}, Zo = {
  variadic: Nh
}, Ke;
(function(t) {
  t[t.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", t[t.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", t[t.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", t[t.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", t[t.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", t[t.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", t[t.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", t[t.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", t[t.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", t[t.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", t[t.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", t[t.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", t[t.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", t[t.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", t[t.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", t[t.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", t[t.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", t[t.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", t[t.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", t[t.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", t[t.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", t[t.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", t[t.INVALID_TAG = 23] = "INVALID_TAG", t[t.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", t[t.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", t[t.UNCLOSED_TAG = 27] = "UNCLOSED_TAG";
})(Ke || (Ke = {}));
var ht;
(function(t) {
  t[t.literal = 0] = "literal", t[t.argument = 1] = "argument", t[t.number = 2] = "number", t[t.date = 3] = "date", t[t.time = 4] = "time", t[t.select = 5] = "select", t[t.plural = 6] = "plural", t[t.pound = 7] = "pound", t[t.tag = 8] = "tag";
})(ht || (ht = {}));
var Ji;
(function(t) {
  t[t.number = 0] = "number", t[t.dateTime = 1] = "dateTime";
})(Ji || (Ji = {}));
function Dl(t) {
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
function _s(t) {
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
    for (var u = o[0], l = o.slice(1), c = 0, d = l; c < d.length; c++) {
      var h = d[c];
      if (h.length === 0)
        throw new Error("Invalid number skeleton");
    }
    n.push({ stem: u, options: l });
  }
  return n;
}
function Wh(t) {
  return t.replace(/^(.*?)-/, "");
}
var Pl = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g, Mc = /^(@+)?(\+|#+)?[rs]?$/g, zh = /(\*)(0+)|(#+)(0+)|(0+)/g, Dc = /^(0+)$/;
function Nl(t) {
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
function Kh(t) {
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
function Ul(t) {
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
        e = de(de(de({}, e), { notation: "scientific" }), i.options.reduce(function(l, c) {
          return de(de({}, l), Ul(c));
        }, {}));
        continue;
      case "engineering":
        e = de(de(de({}, e), { notation: "engineering" }), i.options.reduce(function(l, c) {
          return de(de({}, l), Ul(c));
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
        i.options[0].replace(zh, function(l, c, d, h, f, v) {
          if (c)
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
    if (Pl.test(i.stem)) {
      if (i.options.length > 1)
        throw new RangeError("Fraction-precision stems only accept a single optional option");
      i.stem.replace(Pl, function(l, c, d, h, f, v) {
        return d === "*" ? e.minimumFractionDigits = c.length : h && h[0] === "#" ? e.maximumFractionDigits = h.length : f && v ? (e.minimumFractionDigits = f.length, e.maximumFractionDigits = f.length + v.length) : (e.minimumFractionDigits = c.length, e.maximumFractionDigits = c.length), "";
      });
      var a = i.options[0];
      a === "w" ? e = de(de({}, e), { trailingZeroDisplay: "stripIfInteger" }) : a && (e = de(de({}, e), Nl(a)));
      continue;
    }
    if (Mc.test(i.stem)) {
      e = de(de({}, e), Nl(i.stem));
      continue;
    }
    var o = Pc(i.stem);
    o && (e = de(de({}, e), o));
    var u = Kh(i.stem);
    u && (e = de(de({}, e), u));
  }
  return e;
}
var za = {
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
      var o = 1 + (a & 1), u = a < 2 ? 1 : 3 + (a >> 1), l = "a", c = Zh(e);
      for ((c == "H" || c == "k") && (u = 0); u-- > 0; )
        n += l;
      for (; o-- > 0; )
        n = c + n;
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
  var i = za[r || ""] || za[n || ""] || za["".concat(n, "-001")] || za["001"];
  return i[0];
}
var Qo, Qh = new RegExp("^".concat(Rc.source, "*")), Jh = new RegExp("".concat(Rc.source, "*$"));
function Ye(t, e) {
  return { start: t, end: e };
}
var $h = !!String.prototype.startsWith && "_a".startsWith("a", 1), ev = !!String.fromCodePoint, tv = !!Object.fromEntries, nv = !!String.prototype.codePointAt, rv = !!String.prototype.trimStart, iv = !!String.prototype.trimEnd, av = !!Number.isSafeInteger, ov = av ? Number.isSafeInteger : function(t) {
  return typeof t == "number" && isFinite(t) && Math.floor(t) === t && Math.abs(t) <= 9007199254740991;
}, Es = !0;
try {
  var sv = Uc("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  Es = ((Qo = sv.exec("a")) === null || Qo === void 0 ? void 0 : Qo[0]) === "a";
} catch {
  Es = !1;
}
var Hl = $h ? (
  // Native
  function(e, n, r) {
    return e.startsWith(n, r);
  }
) : (
  // For IE11
  function(e, n, r) {
    return e.slice(r, r + n.length) === n;
  }
), As = ev ? String.fromCodePoint : (
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
), Fl = (
  // native
  tv ? Object.fromEntries : (
    // Ponyfill
    function(e) {
      for (var n = {}, r = 0, i = e; r < i.length; r++) {
        var a = i[r], o = a[0], u = a[1];
        n[o] = u;
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
var Cs;
if (Es) {
  var Bl = Uc("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  Cs = function(e, n) {
    var r;
    Bl.lastIndex = n;
    var i = Bl.exec(e);
    return (r = i[1]) !== null && r !== void 0 ? r : "";
  };
} else
  Cs = function(e, n) {
    for (var r = []; ; ) {
      var i = Nc(e, n);
      if (i === void 0 || Hc(i) || hv(i))
        break;
      r.push(i), n += i >= 65536 ? 2 : 1;
    }
    return As.apply(void 0, r);
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
            var u = this.clonePosition();
            this.bump(), i.push({
              type: ht.pound,
              location: Ye(u, this.clonePosition())
            });
          } else if (a === 60 && !this.ignoreTag && this.peek() === 47) {
            if (r)
              break;
            return this.error(Ke.UNMATCHED_CLOSING_TAG, Ye(this.clonePosition(), this.clonePosition()));
          } else if (a === 60 && !this.ignoreTag && Ss(this.peek() || 0)) {
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
            location: Ye(r, this.clonePosition())
          },
          err: null
        };
      if (this.bumpIf(">")) {
        var a = this.parseMessage(e + 1, n, !0);
        if (a.err)
          return a;
        var o = a.val, u = this.clonePosition();
        if (this.bumpIf("</")) {
          if (this.isEOF() || !Ss(this.char()))
            return this.error(Ke.INVALID_TAG, Ye(u, this.clonePosition()));
          var l = this.clonePosition(), c = this.parseTagName();
          return i !== c ? this.error(Ke.UNMATCHED_CLOSING_TAG, Ye(l, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
            val: {
              type: ht.tag,
              value: i,
              children: o,
              location: Ye(r, this.clonePosition())
            },
            err: null
          } : this.error(Ke.INVALID_TAG, Ye(u, this.clonePosition())));
        } else
          return this.error(Ke.UNCLOSED_TAG, Ye(r, this.clonePosition()));
      } else
        return this.error(Ke.INVALID_TAG, Ye(r, this.clonePosition()));
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
        var u = this.tryParseLeftAngleBracket();
        if (u) {
          i += u;
          continue;
        }
        break;
      }
      var l = Ye(r, this.clonePosition());
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
      return As.apply(void 0, n);
    }, t.prototype.tryParseUnquoted = function(e, n) {
      if (this.isEOF())
        return null;
      var r = this.char();
      return r === 60 || r === 123 || r === 35 && (n === "plural" || n === "selectordinal") || r === 125 && e > 0 ? null : (this.bump(), As(r));
    }, t.prototype.parseArgument = function(e, n) {
      var r = this.clonePosition();
      if (this.bump(), this.bumpSpace(), this.isEOF())
        return this.error(Ke.EXPECT_ARGUMENT_CLOSING_BRACE, Ye(r, this.clonePosition()));
      if (this.char() === 125)
        return this.bump(), this.error(Ke.EMPTY_ARGUMENT, Ye(r, this.clonePosition()));
      var i = this.parseIdentifierIfPossible().value;
      if (!i)
        return this.error(Ke.MALFORMED_ARGUMENT, Ye(r, this.clonePosition()));
      if (this.bumpSpace(), this.isEOF())
        return this.error(Ke.EXPECT_ARGUMENT_CLOSING_BRACE, Ye(r, this.clonePosition()));
      switch (this.char()) {
        case 125:
          return this.bump(), {
            val: {
              type: ht.argument,
              // value does not include the opening and closing braces.
              value: i,
              location: Ye(r, this.clonePosition())
            },
            err: null
          };
        case 44:
          return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(Ke.EXPECT_ARGUMENT_CLOSING_BRACE, Ye(r, this.clonePosition())) : this.parseArgumentOptions(e, n, i, r);
        default:
          return this.error(Ke.MALFORMED_ARGUMENT, Ye(r, this.clonePosition()));
      }
    }, t.prototype.parseIdentifierIfPossible = function() {
      var e = this.clonePosition(), n = this.offset(), r = Cs(this.message, n), i = n + r.length;
      this.bumpTo(i);
      var a = this.clonePosition(), o = Ye(e, a);
      return { value: r, location: o };
    }, t.prototype.parseArgumentOptions = function(e, n, r, i) {
      var a, o = this.clonePosition(), u = this.parseIdentifierIfPossible().value, l = this.clonePosition();
      switch (u) {
        case "":
          return this.error(Ke.EXPECT_ARGUMENT_TYPE, Ye(o, l));
        case "number":
        case "date":
        case "time": {
          this.bumpSpace();
          var c = null;
          if (this.bumpIf(",")) {
            this.bumpSpace();
            var d = this.clonePosition(), h = this.parseSimpleArgStyleIfPossible();
            if (h.err)
              return h;
            var f = uv(h.val);
            if (f.length === 0)
              return this.error(Ke.EXPECT_ARGUMENT_STYLE, Ye(this.clonePosition(), this.clonePosition()));
            var v = Ye(d, this.clonePosition());
            c = { style: f, styleLocation: v };
          }
          var m = this.tryParseArgumentClose(i);
          if (m.err)
            return m;
          var b = Ye(i, this.clonePosition());
          if (c && Hl(c == null ? void 0 : c.style, "::", 0)) {
            var I = lv(c.style.slice(2));
            if (u === "number") {
              var h = this.parseNumberSkeletonFromString(I, c.styleLocation);
              return h.err ? h : {
                val: { type: ht.number, value: r, location: b, style: h.val },
                err: null
              };
            } else {
              if (I.length === 0)
                return this.error(Ke.EXPECT_DATE_TIME_SKELETON, b);
              var E = I;
              this.locale && (E = Yh(I, this.locale));
              var f = {
                type: Ji.dateTime,
                pattern: E,
                location: c.styleLocation,
                parsedOptions: this.shouldParseSkeletons ? Gh(E) : {}
              }, S = u === "date" ? ht.date : ht.time;
              return {
                val: { type: S, value: r, location: b, style: f },
                err: null
              };
            }
          }
          return {
            val: {
              type: u === "number" ? ht.number : u === "date" ? ht.date : ht.time,
              value: r,
              location: b,
              style: (a = c == null ? void 0 : c.style) !== null && a !== void 0 ? a : null
            },
            err: null
          };
        }
        case "plural":
        case "selectordinal":
        case "select": {
          var x = this.clonePosition();
          if (this.bumpSpace(), !this.bumpIf(","))
            return this.error(Ke.EXPECT_SELECT_ARGUMENT_OPTIONS, Ye(x, de({}, x)));
          this.bumpSpace();
          var g = this.parseIdentifierIfPossible(), _ = 0;
          if (u !== "select" && g.value === "offset") {
            if (!this.bumpIf(":"))
              return this.error(Ke.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, Ye(this.clonePosition(), this.clonePosition()));
            this.bumpSpace();
            var h = this.tryParseDecimalInteger(Ke.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, Ke.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);
            if (h.err)
              return h;
            this.bumpSpace(), g = this.parseIdentifierIfPossible(), _ = h.val;
          }
          var C = this.tryParsePluralOrSelectOptions(e, u, n, g);
          if (C.err)
            return C;
          var m = this.tryParseArgumentClose(i);
          if (m.err)
            return m;
          var T = Ye(i, this.clonePosition());
          return u === "select" ? {
            val: {
              type: ht.select,
              value: r,
              options: Fl(C.val),
              location: T
            },
            err: null
          } : {
            val: {
              type: ht.plural,
              value: r,
              options: Fl(C.val),
              offset: _,
              pluralType: u === "plural" ? "cardinal" : "ordinal",
              location: T
            },
            err: null
          };
        }
        default:
          return this.error(Ke.INVALID_ARGUMENT_TYPE, Ye(o, l));
      }
    }, t.prototype.tryParseArgumentClose = function(e) {
      return this.isEOF() || this.char() !== 125 ? this.error(Ke.EXPECT_ARGUMENT_CLOSING_BRACE, Ye(e, this.clonePosition())) : (this.bump(), { val: !0, err: null });
    }, t.prototype.parseSimpleArgStyleIfPossible = function() {
      for (var e = 0, n = this.clonePosition(); !this.isEOF(); ) {
        var r = this.char();
        switch (r) {
          case 39: {
            this.bump();
            var i = this.clonePosition();
            if (!this.bumpUntil("'"))
              return this.error(Ke.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, Ye(i, this.clonePosition()));
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
        return this.error(Ke.INVALID_NUMBER_SKELETON, n);
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
      for (var a, o = !1, u = [], l = /* @__PURE__ */ new Set(), c = i.value, d = i.location; ; ) {
        if (c.length === 0) {
          var h = this.clonePosition();
          if (n !== "select" && this.bumpIf("=")) {
            var f = this.tryParseDecimalInteger(Ke.EXPECT_PLURAL_ARGUMENT_SELECTOR, Ke.INVALID_PLURAL_ARGUMENT_SELECTOR);
            if (f.err)
              return f;
            d = Ye(h, this.clonePosition()), c = this.message.slice(h.offset, this.offset());
          } else
            break;
        }
        if (l.has(c))
          return this.error(n === "select" ? Ke.DUPLICATE_SELECT_ARGUMENT_SELECTOR : Ke.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, d);
        c === "other" && (o = !0), this.bumpSpace();
        var v = this.clonePosition();
        if (!this.bumpIf("{"))
          return this.error(n === "select" ? Ke.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : Ke.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, Ye(this.clonePosition(), this.clonePosition()));
        var m = this.parseMessage(e + 1, n, r);
        if (m.err)
          return m;
        var b = this.tryParseArgumentClose(v);
        if (b.err)
          return b;
        u.push([
          c,
          {
            value: m.val,
            location: Ye(v, this.clonePosition())
          }
        ]), l.add(c), this.bumpSpace(), a = this.parseIdentifierIfPossible(), c = a.value, d = a.location;
      }
      return u.length === 0 ? this.error(n === "select" ? Ke.EXPECT_SELECT_ARGUMENT_SELECTOR : Ke.EXPECT_PLURAL_ARGUMENT_SELECTOR, Ye(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !o ? this.error(Ke.MISSING_OTHER_CLAUSE, Ye(this.clonePosition(), this.clonePosition())) : { val: u, err: null };
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
      var l = Ye(i, this.clonePosition());
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
      if (Hl(this.message, e, this.offset())) {
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
function Ss(t) {
  return t >= 97 && t <= 122 || t >= 65 && t <= 90;
}
function dv(t) {
  return Ss(t) || t === 47;
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
function xs(t) {
  t.forEach(function(e) {
    if (delete e.location, Tc(e) || wc(e))
      for (var n in e.options)
        delete e.options[n].location, xs(e.options[n].value);
    else Cc(e) && Oc(e.style) || (Sc(e) || xc(e)) && _s(e.style) ? delete e.style.location : Lc(e) && xs(e.children);
  });
}
function vv(t, e) {
  e === void 0 && (e = {}), e = de({ shouldParseSkeletons: !0, requiresOtherClause: !0 }, e);
  var n = new cv(t, e).parse();
  if (n.err) {
    var r = SyntaxError(Ke[n.err.kind]);
    throw r.location = n.err.location, r.originalMessage = n.err.message, r;
  }
  return e != null && e.captureLocation || xs(n.val), n.val;
}
var $i;
(function(t) {
  t.MISSING_VALUE = "MISSING_VALUE", t.INVALID_VALUE = "INVALID_VALUE", t.MISSING_INTL_API = "MISSING_INTL_API";
})($i || ($i = {}));
var Ro = (
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
), kl = (
  /** @class */
  function(t) {
    $e(e, t);
    function e(n, r, i, a) {
      return t.call(this, 'Invalid values for "'.concat(n, '": "').concat(r, '". Options are "').concat(Object.keys(i).join('", "'), '"'), $i.INVALID_VALUE, a) || this;
    }
    return e;
  }(Ro)
), pv = (
  /** @class */
  function(t) {
    $e(e, t);
    function e(n, r, i) {
      return t.call(this, 'Value for "'.concat(n, '" must be of type ').concat(r), $i.INVALID_VALUE, i) || this;
    }
    return e;
  }(Ro)
), mv = (
  /** @class */
  function(t) {
    $e(e, t);
    function e(n, r) {
      return t.call(this, 'The intl string context variable "'.concat(n, '" was not provided to the string "').concat(r, '"'), $i.MISSING_VALUE, r) || this;
    }
    return e;
  }(Ro)
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
function ro(t, e, n, r, i, a, o) {
  if (t.length === 1 && Dl(t[0]))
    return [
      {
        type: Qt.literal,
        value: t[0].value
      }
    ];
  for (var u = [], l = 0, c = t; l < c.length; l++) {
    var d = c[l];
    if (Dl(d)) {
      u.push({
        type: Qt.literal,
        value: d.value
      });
      continue;
    }
    if (kh(d)) {
      typeof a == "number" && u.push({
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
      (!f || typeof f == "string" || typeof f == "number") && (f = typeof f == "string" || typeof f == "number" ? String(f) : ""), u.push({
        type: typeof f == "string" ? Qt.literal : Qt.object,
        value: f
      });
      continue;
    }
    if (Sc(d)) {
      var v = typeof d.style == "string" ? r.date[d.style] : _s(d.style) ? d.style.parsedOptions : void 0;
      u.push({
        type: Qt.literal,
        value: n.getDateTimeFormat(e, v).format(f)
      });
      continue;
    }
    if (xc(d)) {
      var v = typeof d.style == "string" ? r.time[d.style] : _s(d.style) ? d.style.parsedOptions : r.time.medium;
      u.push({
        type: Qt.literal,
        value: n.getDateTimeFormat(e, v).format(f)
      });
      continue;
    }
    if (Cc(d)) {
      var v = typeof d.style == "string" ? r.number[d.style] : Oc(d.style) ? d.style.parsedOptions : void 0;
      v && v.scale && (f = f * (v.scale || 1)), u.push({
        type: Qt.literal,
        value: n.getNumberFormat(e, v).format(f)
      });
      continue;
    }
    if (Lc(d)) {
      var m = d.children, b = d.value, I = i[b];
      if (!bv(I))
        throw new pv(b, "function", o);
      var E = ro(m, e, n, r, i, a), S = I(E.map(function(_) {
        return _.value;
      }));
      Array.isArray(S) || (S = [S]), u.push.apply(u, S.map(function(_) {
        return {
          type: typeof _ == "string" ? Qt.literal : Qt.object,
          value: _
        };
      }));
    }
    if (Tc(d)) {
      var x = d.options[f] || d.options.other;
      if (!x)
        throw new kl(d.value, f, Object.keys(d.options), o);
      u.push.apply(u, ro(x.value, e, n, r, i));
      continue;
    }
    if (wc(d)) {
      var x = d.options["=".concat(f)];
      if (!x) {
        if (!Intl.PluralRules)
          throw new Ro(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`, $i.MISSING_INTL_API, o);
        var g = n.getPluralRules(e, { type: d.pluralType }).select(f - (d.offset || 0));
        x = d.options[g] || d.options.other;
      }
      if (!x)
        throw new kl(d.value, f, Object.keys(d.options), o);
      u.push.apply(u, ro(x.value, e, n, r, i, f - (d.offset || 0)));
      continue;
    }
  }
  return gv(u);
}
function yv(t, e) {
  return e ? de(de(de({}, t || {}), e || {}), Object.keys(t).reduce(function(n, r) {
    return n[r] = de(de({}, t[r]), e[r] || {}), n;
  }, {})) : t;
}
function Iv(t, e) {
  return e ? Object.keys(t).reduce(function(n, r) {
    return n[r] = yv(t[r], e[r]), n;
  }, de({}, t)) : t;
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
function _v(t) {
  return t === void 0 && (t = {
    number: {},
    dateTime: {},
    pluralRules: {}
  }), {
    getNumberFormat: Yo(function() {
      for (var e, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((e = Intl.NumberFormat).bind.apply(e, Kn([void 0], n, !1)))();
    }, {
      cache: Jo(t.number),
      strategy: Zo.variadic
    }),
    getDateTimeFormat: Yo(function() {
      for (var e, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((e = Intl.DateTimeFormat).bind.apply(e, Kn([void 0], n, !1)))();
    }, {
      cache: Jo(t.dateTime),
      strategy: Zo.variadic
    }),
    getPluralRules: Yo(function() {
      for (var e, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((e = Intl.PluralRules).bind.apply(e, Kn([void 0], n, !1)))();
    }, {
      cache: Jo(t.pluralRules),
      strategy: Zo.variadic
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
        var c = a.formatToParts(l);
        if (c.length === 1)
          return c[0].value;
        var d = c.reduce(function(h, f) {
          return !h.length || f.type !== Qt.literal || typeof h[h.length - 1] != "string" ? h.push(f.value) : h[h.length - 1] += f.value, h;
        }, []);
        return d.length <= 1 ? d[0] || "" : d;
      }, this.formatToParts = function(l) {
        return ro(a.ast, a.locales, a.formatters, a.formats, l, void 0, a.message);
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
        var u = Lh(o, ["formatters"]);
        this.ast = t.__parse(e, de(de({}, u), { locale: this.resolvedLocale }));
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
const Er = {}, Av = (t, e, n) => n && (e in Er || (Er[e] = {}), t in Er[e] || (Er[e][t] = n), n), Bc = (t, e) => {
  if (e == null)
    return;
  if (e in Er && t in Er[e])
    return Er[e][t];
  const n = ka(e);
  for (let r = 0; r < n.length; r++) {
    const i = n[r], a = Sv(i, t);
    if (a)
      return Av(t, e, a);
  }
};
let $s;
const Ba = dt({});
function Cv(t) {
  return $s[t] || null;
}
function kc(t) {
  return t in $s;
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
  const e = ka(t);
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    if (kc(r))
      return r;
  }
}
function Vc(t, ...e) {
  delete Er[t], Ba.update((n) => (n[t] = wh.all([n[t] || {}, ...e]), n));
}
ia(
  [Ba],
  ([t]) => Object.keys(t)
);
Ba.subscribe((t) => $s = t);
const io = {};
function Tv(t, e) {
  io[t].delete(e), io[t].size === 0 && delete io[t];
}
function Gc(t) {
  return io[t];
}
function wv(t) {
  return ka(t).map((e) => {
    const n = Gc(e);
    return [e, n ? [...n] : []];
  }).filter(([, e]) => e.length > 0);
}
function lo(t) {
  return t == null ? !1 : ka(t).some(
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
  if (!lo(t))
    return t in va ? va[t] : Promise.resolve();
  const e = wv(t);
  return va[t] = Promise.all(
    e.map(
      ([n, r]) => Lv(n, r)
    )
  ).then(() => {
    if (lo(t))
      return jc(t);
    delete va[t];
  }), va[t];
}
var Vl = Object.getOwnPropertySymbols, Ov = Object.prototype.hasOwnProperty, Rv = Object.prototype.propertyIsEnumerable, Mv = (t, e) => {
  var n = {};
  for (var r in t)
    Ov.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && Vl)
    for (var r of Vl(t))
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
    `[svelte-i18n] The message "${e}" was not found in "${ka(
      t
    ).join('", "')}".${lo(Ur()) ? `

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
}, ya = Nv;
function ea() {
  return ya;
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
  )), Object.assign(ya, r, { initialLocale: i }), n && ("number" in n && Object.assign(ya.formats.number, n.number), "date" in n && Object.assign(ya.formats.date, n.date), "time" in n && Object.assign(ya.formats.time, n.time)), fi.set(i);
}
const $o = dt(!1);
var Hv = Object.defineProperty, Fv = Object.defineProperties, Bv = Object.getOwnPropertyDescriptors, Gl = Object.getOwnPropertySymbols, kv = Object.prototype.hasOwnProperty, Vv = Object.prototype.propertyIsEnumerable, jl = (t, e, n) => e in t ? Hv(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n, Gv = (t, e) => {
  for (var n in e || (e = {}))
    kv.call(e, n) && jl(t, n, e[n]);
  if (Gl)
    for (var n of Gl(e))
      Vv.call(e, n) && jl(t, n, e[n]);
  return t;
}, jv = (t, e) => Fv(t, Bv(e));
let Ts;
const uo = dt(null);
function ql(t) {
  return t.split("-").map((e, n, r) => r.slice(0, n + 1).join("-")).reverse();
}
function ka(t, e = ea().fallbackLocale) {
  const n = ql(t);
  return e ? [.../* @__PURE__ */ new Set([...n, ...ql(e)])] : n;
}
function Ur() {
  return Ts ?? void 0;
}
uo.subscribe((t) => {
  Ts = t ?? void 0, typeof window < "u" && t != null && document.documentElement.setAttribute("lang", t);
});
const qv = (t) => {
  if (t && xv(t) && lo(t)) {
    const { loadingDelay: e } = ea();
    let n;
    return typeof window < "u" && Ur() != null && e ? n = window.setTimeout(
      () => $o.set(!0),
      e
    ) : $o.set(!0), jc(t).then(() => {
      uo.set(t);
    }).finally(() => {
      clearTimeout(n), $o.set(!1);
    });
  }
  return uo.set(t);
}, fi = jv(Gv({}, uo), {
  set: qv
}), Wv = () => typeof window > "u" ? null : window.navigator.language || window.navigator.languages[0], Mo = (t) => {
  const e = /* @__PURE__ */ Object.create(null);
  return (r) => {
    const i = JSON.stringify(r);
    return i in e ? e[i] : e[i] = t(r);
  };
};
var zv = Object.defineProperty, co = Object.getOwnPropertySymbols, qc = Object.prototype.hasOwnProperty, Wc = Object.prototype.propertyIsEnumerable, Wl = (t, e, n) => e in t ? zv(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n, el = (t, e) => {
  for (var n in e || (e = {}))
    qc.call(e, n) && Wl(t, n, e[n]);
  if (co)
    for (var n of co(e))
      Wc.call(e, n) && Wl(t, n, e[n]);
  return t;
}, aa = (t, e) => {
  var n = {};
  for (var r in t)
    qc.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && co)
    for (var r of co(t))
      e.indexOf(r) < 0 && Wc.call(t, r) && (n[r] = t[r]);
  return n;
};
const wa = (t, e) => {
  const { formats: n } = ea();
  if (t in n && e in n[t])
    return n[t][e];
  throw new Error(`[svelte-i18n] Unknown "${e}" ${t} format.`);
}, Kv = Mo(
  (t) => {
    var e = t, { locale: n, format: r } = e, i = aa(e, ["locale", "format"]);
    if (n == null)
      throw new Error('[svelte-i18n] A "locale" must be set to format numbers');
    return r && (i = wa("number", r)), new Intl.NumberFormat(n, i);
  }
), Xv = Mo(
  (t) => {
    var e = t, { locale: n, format: r } = e, i = aa(e, ["locale", "format"]);
    if (n == null)
      throw new Error('[svelte-i18n] A "locale" must be set to format dates');
    return r ? i = wa("date", r) : Object.keys(i).length === 0 && (i = wa("date", "short")), new Intl.DateTimeFormat(n, i);
  }
), Yv = Mo(
  (t) => {
    var e = t, { locale: n, format: r } = e, i = aa(e, ["locale", "format"]);
    if (n == null)
      throw new Error(
        '[svelte-i18n] A "locale" must be set to format time values'
      );
    return r ? i = wa("time", r) : Object.keys(i).length === 0 && (i = wa("time", "short")), new Intl.DateTimeFormat(n, i);
  }
), Zv = (t = {}) => {
  var e = t, {
    locale: n = Ur()
  } = e, r = aa(e, [
    "locale"
  ]);
  return Kv(el({ locale: n }, r));
}, Qv = (t = {}) => {
  var e = t, {
    locale: n = Ur()
  } = e, r = aa(e, [
    "locale"
  ]);
  return Xv(el({ locale: n }, r));
}, Jv = (t = {}) => {
  var e = t, {
    locale: n = Ur()
  } = e, r = aa(e, [
    "locale"
  ]);
  return Yv(el({ locale: n }, r));
}, $v = Mo(
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  (t, e = Ur()) => new Fc(t, e, ea().formats, {
    ignoreTag: ea().ignoreTag
  })
), ep = (t, e = {}) => {
  var n, r, i, a;
  let o = e;
  typeof t == "object" && (o = t, t = o.id);
  const {
    values: u,
    locale: l = Ur(),
    default: c
  } = o;
  if (l == null)
    throw new Error(
      "[svelte-i18n] Cannot format a message without first setting the initial locale."
    );
  let d = Bc(t, l);
  if (!d)
    d = (a = (i = (r = (n = ea()).handleMissingMessage) == null ? void 0 : r.call(n, { locale: l, id: t, defaultValue: c })) != null ? i : c) != null ? a : t;
  else if (typeof d != "string")
    return console.warn(
      `[svelte-i18n] Message with id "${t}" must be of type "string", found: "${typeof d}". Gettin its value through the "$format" method is deprecated; use the "json" method instead.`
    ), d;
  if (!u)
    return d;
  let h = d;
  try {
    h = $v(d, l).format(u);
  } catch (f) {
    f instanceof Error && console.warn(
      `[svelte-i18n] Message "${t}" has syntax error:`,
      f.message
    );
  }
  return h;
}, tp = (t, e) => Jv(e).format(t), np = (t, e) => Qv(e).format(t), rp = (t, e) => Zv(e).format(t), ip = (t, e = Ur()) => Bc(t, e), ap = ia([fi, Ba], () => ep);
ia([fi], () => tp);
ia([fi], () => np);
ia([fi], () => rp);
ia([fi, Ba], () => ip);
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
    console.log("Updating the language to", o.detail.language), fi.set(o.detail.language);
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
    var u;
    (u = o.parentNode) === null || u === void 0 || u.removeChild(o);
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
function Ue(t) {
  return Object.entries(t).filter(([e, n]) => e !== "" && n).map(([e]) => e).join(" ");
}
function We(t, e, n, r = { bubbles: !0 }) {
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
class Va {
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
var Ka;
function zc(t, e) {
  e === void 0 && (e = !1);
  var n = t.CSS, r = Ka;
  if (typeof Ka == "boolean" && !e)
    return Ka;
  var i = n && typeof n.supports == "function";
  if (!i)
    return !1;
  var a = n.supports("--css-vars", "yes"), o = n.supports("(--css-vars: yes)") && n.supports("color", "#00000000");
  return r = a || o, e || (Ka = r), r;
}
function Ip(t, e, n) {
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
var Nt = (
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
var Do = (
  /** @class */
  function() {
    function t(e, n) {
      for (var r = [], i = 2; i < arguments.length; i++)
        r[i - 2] = arguments[i];
      this.root = e, this.initialize.apply(this, Kn([], wr(r))), this.foundation = n === void 0 ? this.getDefaultFoundation() : n, this.foundation.init(), this.initialSyncWithDOM();
    }
    return t.attachTo = function(e) {
      return new t(e, new Nt({}));
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
function Ia(t) {
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
const Kc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  applyPassive: Ia
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
    if (tl(n, e))
      return n;
    n = n.parentElement;
  }
  return null;
}
function tl(t, e) {
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
const Po = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  closest: Ep,
  estimateScrollWidth: Ap,
  matches: tl
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
var Kl = [
  "touchstart",
  "pointerdown",
  "mousedown",
  "keydown"
], Xl = [
  "touchend",
  "pointerup",
  "mouseup",
  "contextmenu"
], Xa = [], No = (
  /** @class */
  function(t) {
    $e(e, t);
    function e(n) {
      var r = t.call(this, de(de({}, e.defaultAdapter), n)) || this;
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
          for (var a = wt(Kl), o = a.next(); !o.done; o = a.next()) {
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
          for (var a = wt(Xl), o = a.next(); !o.done; o = a.next()) {
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
        for (var i = wt(Kl), a = i.next(); !a.done; a = i.next()) {
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
        for (var i = wt(Xl), a = i.next(); !a.done; a = i.next()) {
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
            var u = n !== void 0 && Xa.length > 0 && Xa.some(function(l) {
              return r.adapter.containsEventTarget(l);
            });
            if (u) {
              this.resetActivationState();
              return;
            }
            n !== void 0 && (Xa.push(n.target), this.registerDeactivationHandlers(n)), i.wasElementMadeActive = this.checkElementMadeActive(n), i.wasElementMadeActive && this.animateActivation(), requestAnimationFrame(function() {
              Xa = [], !i.wasElementMadeActive && n !== void 0 && (n.key === " " || n.keyCode === 32) && (i.wasElementMadeActive = r.checkElementMadeActive(n), i.wasElementMadeActive && r.animateActivation()), i.wasElementMadeActive || (r.activationState = r.defaultActivationState());
            });
          }
        }
      }
    }, e.prototype.checkElementMadeActive = function(n) {
      return n !== void 0 && n.type === "keydown" ? this.adapter.isSurfaceActive() : !0;
    }, e.prototype.animateActivation = function() {
      var n = this, r = e.strings, i = r.VAR_FG_TRANSLATE_START, a = r.VAR_FG_TRANSLATE_END, o = e.cssClasses, u = o.FG_DEACTIVATION, l = o.FG_ACTIVATION, c = e.numbers.DEACTIVATION_TIMEOUT_MS;
      this.layoutInternal();
      var d = "", h = "";
      if (!this.adapter.isUnbounded()) {
        var f = this.getFgTranslationCoordinates(), v = f.startPoint, m = f.endPoint;
        d = v.x + "px, " + v.y + "px", h = m.x + "px, " + m.y + "px";
      }
      this.adapter.updateCssVariable(i, d), this.adapter.updateCssVariable(a, h), clearTimeout(this.activationTimer), clearTimeout(this.fgDeactivationRemovalTimer), this.rmBoundedActivationClasses(), this.adapter.removeClass(u), this.adapter.computeBoundingRect(), this.adapter.addClass(l), this.activationTimer = setTimeout(function() {
        n.activationTimerCallback();
      }, c);
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
      var n = this, r = e.cssClasses.FG_DEACTIVATION, i = this.activationState, a = i.hasDeactivationUXRun, o = i.isActivated, u = a || !o;
      u && this.activationAnimationHasEnded && (this.rmBoundedActivationClasses(), this.adapter.addClass(r), this.fgDeactivationRemovalTimer = setTimeout(function() {
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
        var i = de({}, r);
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
  }(Nt)
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
var fo = (
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
          return zc(window);
        },
        computeBoundingRect: function() {
          return n.root.getBoundingClientRect();
        },
        containsEventTarget: function(r) {
          return n.root.contains(r);
        },
        deregisterDocumentInteractionHandler: function(r, i) {
          return document.documentElement.removeEventListener(r, i, Ia());
        },
        deregisterInteractionHandler: function(r, i) {
          return n.root.removeEventListener(r, i, Ia());
        },
        deregisterResizeHandler: function(r) {
          return window.removeEventListener("resize", r);
        },
        getWindowPageOffset: function() {
          return { x: window.pageXOffset, y: window.pageYOffset };
        },
        isSurfaceActive: function() {
          return tl(n.root, ":active");
        },
        isSurfaceDisabled: function() {
          return !!n.disabled;
        },
        isUnbounded: function() {
          return !!n.unbounded;
        },
        registerDocumentInteractionHandler: function(r, i) {
          return document.documentElement.addEventListener(r, i, Ia());
        },
        registerInteractionHandler: function(r, i) {
          return n.root.addEventListener(r, i, Ia());
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
      return new No(e.createAdapter(this));
    }, e.prototype.initialSyncWithDOM = function() {
      var n = this.root;
      this.isUnbounded = "mdcRippleIsUnbounded" in n.dataset;
    }, e.prototype.setUnbounded = function() {
      this.foundation.setUnbounded(!!this.isUnbounded);
    }, e;
  }(Do)
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
var Me = {
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
an.add(Me.BACKSPACE);
an.add(Me.ENTER);
an.add(Me.SPACEBAR);
an.add(Me.PAGE_UP);
an.add(Me.PAGE_DOWN);
an.add(Me.END);
an.add(Me.HOME);
an.add(Me.ARROW_LEFT);
an.add(Me.ARROW_UP);
an.add(Me.ARROW_RIGHT);
an.add(Me.ARROW_DOWN);
an.add(Me.DELETE);
an.add(Me.ESCAPE);
an.add(Me.TAB);
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
on.set(fn.BACKSPACE, Me.BACKSPACE);
on.set(fn.ENTER, Me.ENTER);
on.set(fn.SPACEBAR, Me.SPACEBAR);
on.set(fn.PAGE_UP, Me.PAGE_UP);
on.set(fn.PAGE_DOWN, Me.PAGE_DOWN);
on.set(fn.END, Me.END);
on.set(fn.HOME, Me.HOME);
on.set(fn.ARROW_LEFT, Me.ARROW_LEFT);
on.set(fn.ARROW_UP, Me.ARROW_UP);
on.set(fn.ARROW_RIGHT, Me.ARROW_RIGHT);
on.set(fn.ARROW_DOWN, Me.ARROW_DOWN);
on.set(fn.DELETE, Me.DELETE);
on.set(fn.ESCAPE, Me.ESCAPE);
on.set(fn.TAB, Me.TAB);
var lr = /* @__PURE__ */ new Set();
lr.add(Me.PAGE_UP);
lr.add(Me.PAGE_DOWN);
lr.add(Me.END);
lr.add(Me.HOME);
lr.add(Me.ARROW_LEFT);
lr.add(Me.ARROW_UP);
lr.add(Me.ARROW_RIGHT);
lr.add(Me.ARROW_DOWN);
function gt(t) {
  var e = t.key;
  if (an.has(e))
    return e;
  var n = on.get(t.keyCode);
  return n || Me.UNKNOWN;
}
function xp(t) {
  return lr.has(gt(t));
}
const { applyPassive: Yl } = Kc, { matches: Tp } = Po;
function zt(t, { ripple: e = !0, surface: n = !1, unbounded: r = !1, disabled: i = !1, color: a, active: o, rippleElement: u, eventTarget: l, activeTarget: c, addClass: d = (m) => t.classList.add(m), removeClass: h = (m) => t.classList.remove(m), addStyle: f = (m, b) => t.style.setProperty(m, b), initPromise: v = Promise.resolve() } = {}) {
  let m, b = new Va(), I = le("SMUI:addLayoutListener"), E, S = o, x = l, g = c;
  function _() {
    n ? (d("mdc-ripple-surface"), a === "primary" ? (d("smui-ripple-surface--primary"), h("smui-ripple-surface--secondary")) : a === "secondary" ? (h("smui-ripple-surface--primary"), d("smui-ripple-surface--secondary")) : (h("smui-ripple-surface--primary"), h("smui-ripple-surface--secondary"))) : (h("mdc-ripple-surface"), h("smui-ripple-surface--primary"), h("smui-ripple-surface--secondary")), m && S !== o && (S = o, o ? m.activate() : o === !1 && m.deactivate()), e && !m ? (m = new No({
      addClass: d,
      browserSupportsCssVars: () => zc(window),
      computeBoundingRect: () => (u || t).getBoundingClientRect(),
      containsEventTarget: (T) => t.contains(T),
      deregisterDocumentInteractionHandler: (T, A) => b.off(document.documentElement, T, A),
      deregisterInteractionHandler: (T, A) => b.off(l || t, T, A),
      deregisterResizeHandler: (T) => window.removeEventListener("resize", T),
      getWindowPageOffset: () => {
        var T, A;
        return {
          x: (T = window.pageXOffset) !== null && T !== void 0 ? T : window.scrollX,
          y: (A = window.pageYOffset) !== null && A !== void 0 ? A : window.scrollY
        };
      },
      isSurfaceActive: () => o ?? Tp(c || t, ":active"),
      isSurfaceDisabled: () => !!i,
      isUnbounded: () => !!r,
      registerDocumentInteractionHandler: (T, A) => {
        const w = Yl();
        b.on(document.documentElement, T, A, typeof w == "boolean" ? { capture: w } : w);
      },
      registerInteractionHandler: (T, A) => {
        const w = Yl();
        b.on(l || t, T, A, typeof w == "boolean" ? { capture: w } : w);
      },
      registerResizeHandler: (T) => b.on(window, "resize", T),
      removeClass: h,
      updateCssVariable: f
    }), v.then(() => {
      m && (m.init(), m.setUnbounded(r));
    })) : m && !e && v.then(() => {
      m && (m.destroy(), m = void 0, b.clear());
    }), m && (x !== l || g !== c) && (x = l, g = c, m.destroy(), requestAnimationFrame(() => {
      m && (m.init(), m.setUnbounded(r));
    })), !e && r && d("mdc-ripple-upgraded--unbounded");
  }
  _(), I && (E = I(C));
  function C() {
    m && m.layout();
  }
  return {
    update(T) {
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
        removeClass: h,
        addStyle: f,
        initPromise: v
      } = Object.assign({ ripple: !0, surface: !1, unbounded: !1, disabled: !1, color: void 0, active: void 0, rippleElement: void 0, eventTarget: void 0, activeTarget: void 0, addClass: (A) => t.classList.add(A), removeClass: (A) => t.classList.remove(A), addStyle: (A, w) => t.style.setProperty(A, w), initPromise: Promise.resolve() }, T)), _();
    },
    destroy() {
      m && (m.destroy(), m = void 0, b.clear(), h("mdc-ripple-surface"), h("smui-ripple-surface--primary"), h("smui-ripple-surface--secondary")), E && E();
    }
  };
}
function wp(t, e) {
  Oe(e, !0);
  let n = p(e, "use", 19, () => []), r = p(e, "class", 3, ""), i = p(e, "component", 3, Hr), a = p(e, "tag", 3, "span"), o = /* @__PURE__ */ ze(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "component",
    "tag",
    "children"
  ]), u;
  const l = le("SMUI:label:context"), c = le("SMUI:label:tabindex");
  function d() {
    return u.getElement();
  }
  var h = { getElement: d }, f = ie(), v = Z(f);
  {
    let m = /* @__PURE__ */ se(() => Ue({
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
    sr(v, i, (b, I) => {
      we(
        I(b, it(
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
              return c;
            }
          },
          () => o,
          {
            children: (E, S) => {
              var x = ie(), g = Z(x);
              Ae(g, () => e.children ?? ge), O(E, x);
            },
            $$slots: { default: !0 }
          }
        )),
        (E) => u = E,
        () => u
      );
    });
  }
  return O(t, f), Re(h);
}
function Lp(t, e) {
  Oe(e, !0);
  let n = p(e, "use", 19, () => []), r = p(e, "class", 3, ""), i = p(e, "on", 3, !1), a = p(e, "component", 3, Hr), o = p(e, "tag", 3, "i"), u = /* @__PURE__ */ ze(e, [
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
  const c = /* @__PURE__ */ se(() => o() === "svg" || a() === Mp), d = le("SMUI:icon:context");
  function h() {
    return l.getElement();
  }
  var f = { getElement: h }, v = ie(), m = Z(v);
  {
    let b = /* @__PURE__ */ se(() => Ue({
      "mdc-button__icon": d === "button",
      "mdc-fab__icon": d === "fab",
      "mdc-icon-button__icon": d === "icon-button",
      "mdc-icon-button__icon--on": d === "icon-button" && i(),
      "mdc-tab__icon": d === "tab",
      "mdc-banner__icon": d === "banner",
      "mdc-segmented-button__icon": d === "segmented-button",
      [r()]: !0
    }));
    sr(m, a, (I, E) => {
      we(
        E(I, it(
          {
            get tag() {
              return o();
            },
            get use() {
              return n();
            },
            get class() {
              return s(b);
            },
            "aria-hidden": "true"
          },
          () => s(c) ? { focusable: "false", tabindex: "-1" } : {},
          () => u,
          {
            children: (S, x) => {
              var g = ie(), _ = Z(g);
              Ae(_, () => e.children ?? ge), O(S, g);
            },
            $$slots: { default: !0 }
          }
        )),
        (S) => l = S,
        () => l
      );
    });
  }
  return O(t, v), Re(f);
}
var Op = /* @__PURE__ */ dn("<svg><!></svg>");
function Hr(t, e) {
  Oe(e, !0);
  let n = p(e, "use", 19, () => []), r = p(e, "tag", 3, "div"), i = /* @__PURE__ */ ze(e, ["$$slots", "$$events", "$$legacy", "use", "tag", "children"]);
  const a = /* @__PURE__ */ se(() => [
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
  var l = { getElement: u }, c = ie(), d = Z(c);
  {
    var h = (v) => {
      var m = Op();
      Be(m, () => ({ ...i }));
      var b = Ie(m);
      Ae(b, () => e.children ?? ge), we(m, (I) => o = I, () => o), Fe(m, (I, E) => z == null ? void 0 : z(I, E), n), O(v, m);
    }, f = (v) => {
      var m = ie(), b = Z(m);
      {
        var I = (S) => {
          var x = ie(), g = Z(x);
          Sl(g, r, !1, (_, C) => {
            we(_, (T) => o = T, () => o), Fe(_, (T, A) => z == null ? void 0 : z(T, A), n), Be(_, () => ({ ...i }));
          }), O(S, x);
        }, E = (S) => {
          var x = ie(), g = Z(x);
          Sl(g, r, !1, (_, C) => {
            we(_, (w) => o = w, () => o), Fe(_, (w, U) => z == null ? void 0 : z(w, U), n), Be(_, () => ({ ...i }));
            var T = ie(), A = Z(T);
            Ae(A, () => e.children ?? ge), O(C, T);
          }), O(S, x);
        };
        ue(
          b,
          (S) => {
            s(a) ? S(I) : S(E, !1);
          },
          !0
        );
      }
      O(v, m);
    };
    ue(d, (v) => {
      r() === "svg" ? v(h) : v(f, !1);
    });
  }
  return O(t, c), Re(l);
}
var Rp = /* @__PURE__ */ dn("<svg><!></svg>");
function Mp(t, e) {
  Oe(e, !0), console && console.warn && console.warn('The @smui/common Svg component is deprecated. You can use `tag="svg"` now.');
  let n = p(e, "use", 19, () => []), r = /* @__PURE__ */ ze(e, ["$$slots", "$$events", "$$legacy", "use", "children"]), i;
  function a() {
    return i;
  }
  var o = { getElement: a }, u = Rp();
  Be(u, () => ({ ...r }));
  var l = Ie(u);
  return Ae(l, () => e.children ?? ge), we(u, (c) => i = c, () => i), Fe(u, (c, d) => z == null ? void 0 : z(c, d), n), O(t, u), Re(o);
}
function Ci(t, e) {
  Oe(e, !0);
  const [n, r] = Ln(), i = dt(e.value);
  ee(e.key, i), Te(() => {
    mn(i, e.value);
  }), Hn(() => {
    i.set(void 0);
  });
  var a = ie(), o = Z(a);
  Ae(o, () => e.children ?? ge), O(t, a), Re(), r();
}
var Dp = /* @__PURE__ */ ve('<div class="mdc-button__touch"></div>'), Pp = /* @__PURE__ */ ve('<div class="mdc-button__ripple"></div> <!><!>', 1);
function Np(t, e) {
  Oe(e, !0);
  let n = p(e, "use", 19, () => []), r = p(e, "class", 3, ""), i = p(e, "style", 3, ""), a = p(e, "ripple", 3, !0), o = p(e, "color", 3, "primary"), u = p(e, "variant", 3, "text"), l = p(e, "touch", 3, !1), c = p(e, "action", 3, "close"), d = p(e, "defaultAction", 3, !1), h = p(e, "secondary", 3, !1), f = p(e, "component", 3, Hr), v = p(e, "tag", 19, () => e.href == null ? "button" : "a"), m = /* @__PURE__ */ ze(e, [
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
  ]), b, I = ye({}), E = ye({}), S = le("SMUI:button:context");
  const x = /* @__PURE__ */ se(() => S === "dialog:action" && c() != null ? { "data-mdc-dialog-action": c() } : { action: c() }), g = /* @__PURE__ */ se(() => S === "dialog:action" && d() ? { "data-mdc-dialog-button-default": "" } : {}), _ = /* @__PURE__ */ se(() => S === "banner" ? {} : { secondary: h() });
  let C = e.disabled;
  Te(() => {
    if (C !== e.disabled) {
      if (b) {
        const k = K();
        "blur" in k && k.blur();
      }
      C = m.disabled;
    }
  }), ee("SMUI:label:context", "button"), ee("SMUI:icon:context", "button");
  function T(k) {
    I[k] || (I[k] = !0);
  }
  function A(k) {
    (!(k in I) || I[k]) && (I[k] = !1);
  }
  function w(k, F) {
    E[k] != F && (F === "" || F == null ? delete E[k] : E[k] = F);
  }
  function U() {
    S === "banner" && We(K(), h() ? "SMUIBannerButtonSecondaryActionClick" : "SMUIBannerButtonPrimaryActionClick");
  }
  function K() {
    return b.getElement();
  }
  var H = { getElement: K }, B = ie(), _e = Z(B);
  {
    let k = /* @__PURE__ */ se(() => [
      [
        zt,
        {
          ripple: a(),
          unbounded: !1,
          color: o(),
          disabled: !!e.disabled,
          addClass: T,
          removeClass: A,
          addStyle: w
        }
      ],
      ...n()
    ]), F = /* @__PURE__ */ se(() => Ue({
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
      "mdc-banner__secondary-action": S === "banner" && h(),
      "mdc-banner__primary-action": S === "banner" && !h(),
      "mdc-tooltip__action": S === "tooltip:rich-actions",
      ...I,
      [r()]: !0
    })), D = /* @__PURE__ */ se(() => Object.entries(E).map(([G, te]) => `${G}: ${te};`).concat([i()]).join(" "));
    sr(_e, f, (G, te) => {
      we(
        te(G, it(
          {
            get tag() {
              return v();
            },
            get use() {
              return s(k);
            },
            get class() {
              return s(F);
            },
            get style() {
              return s(D);
            }
          },
          () => s(x),
          () => s(g),
          () => s(_),
          {
            get href() {
              return e.href;
            }
          },
          () => m,
          {
            onclick: (P) => {
              var y;
              U(), (y = e.onclick) == null || y.call(e, P);
            },
            children: (P, y) => {
              var L = Pp(), ne = Ee(Z(L), 2);
              Ae(ne, () => e.children ?? ge);
              var N = Ee(ne);
              {
                var q = (pe) => {
                  var V = Dp();
                  O(pe, V);
                };
                ue(N, (pe) => {
                  l() && pe(q);
                });
              }
              O(P, L);
            },
            $$slots: { default: !0 }
          }
        )),
        (P) => b = P,
        () => b
      );
    });
  }
  return O(t, B), Re(H);
}
function nl(t, e) {
  Oe(e, !0);
  let n = p(e, "callback", 3, () => {
  }), r = p(e, "disabled", 3, !1), i = p(e, "variant", 3, "default"), a = p(e, "isAbortAction", 3, !1), o = p(e, "backgroundColor", 3, void 0);
  {
    let u = /* @__PURE__ */ se(() => a() ? "background-color: #ff3e00;" : "background-color: " + o());
    Np(t, {
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
        var d = ie(), h = Z(d);
        Ae(h, () => e.children ?? ge), O(l, d);
      },
      $$slots: { default: !0 }
    });
  }
  Re();
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
      var r = t.call(this, de(de({}, e.defaultAdapter), n)) || this;
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
      return this.adapter.hasClass(Ya.ICON_BUTTON_ON);
    }, e.prototype.toggle = function(n) {
      if (n === void 0 && (n = !this.isOn()), n ? this.adapter.addClass(Ya.ICON_BUTTON_ON) : this.adapter.removeClass(Ya.ICON_BUTTON_ON), this.hasToggledAriaLabel) {
        var r = n ? this.adapter.getAttr(Jn.DATA_ARIA_LABEL_ON) : this.adapter.getAttr(Jn.DATA_ARIA_LABEL_OFF);
        this.adapter.setAttr(Jn.ARIA_LABEL, r || "");
      } else
        this.adapter.setAttr(Jn.ARIA_PRESSED, "" + n);
    }, e;
  }(Nt)
), Hp = /* @__PURE__ */ ve('<div class="mdc-icon-button__touch"></div>'), Fp = /* @__PURE__ */ ve('<div class="mdc-icon-button__ripple"></div> <!><!>', 1);
function Bp(t, e) {
  Oe(e, !0);
  let n = () => {
  };
  function r(y) {
    return y === n;
  }
  let i = p(e, "use", 19, () => []), a = p(e, "class", 3, ""), o = p(e, "style", 3, ""), u = p(e, "ripple", 3, !0), l = p(e, "toggle", 3, !1), c = p(e, "pressed", 15, n), d = p(e, "touch", 3, !1), h = p(e, "displayFlex", 3, !0), f = p(e, "size", 3, "normal"), v = p(e, "component", 3, Hr), m = p(e, "tag", 19, () => e.href == null ? "button" : "a"), b = /* @__PURE__ */ ze(e, [
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
  ]), I, E, S = /* @__PURE__ */ be(ye({})), x = ye({}), g = /* @__PURE__ */ be(ye({})), _ = le("SMUI:icon-button:context"), C = le("SMUI:icon-button:aria-describedby");
  const T = /* @__PURE__ */ se(() => {
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
  Te(() => {
    if (A != !!e.disabled) {
      if (I) {
        const y = D();
        "blur" in y && y.blur();
      }
      A = !!e.disabled;
    }
  }), ee("SMUI:icon:context", "icon-button");
  let w = null;
  Te(() => {
    I && D() && l() !== w && (l() && !E ? (E = new Up({
      addClass: K,
      hasClass: U,
      notifyChange: (y) => {
        F(y), We(D(), "SMUIIconButtonToggleChange", y);
      },
      removeClass: H,
      getAttr: _e,
      setAttr: k
    }), E.init()) : !l() && E && (E.destroy(), E = void 0, Q(S, {}, !0), Q(g, {}, !0)), w = l());
  }), Te(() => {
    E && !r(c()) && E.isOn() !== c() && E.toggle(c());
  }), Hn(() => {
    E && E.destroy();
  });
  function U(y) {
    return y in s(S) ? s(S)[y] : D().classList.contains(y);
  }
  function K(y) {
    s(S)[y] || (s(S)[y] = !0);
  }
  function H(y) {
    (!(y in s(S)) || s(S)[y]) && (s(S)[y] = !1);
  }
  function B(y, L) {
    x[y] != L && (L === "" || L == null ? delete x[y] : x[y] = L);
  }
  function _e(y) {
    return y in s(g) ? s(g)[y] ?? null : D().getAttribute(y);
  }
  function k(y, L) {
    s(g)[y] !== L && (s(g)[y] = L);
  }
  function F(y) {
    c(y.isOn);
  }
  function D() {
    return I.getElement();
  }
  var G = { getElement: D }, te = ie(), P = Z(te);
  {
    let y = /* @__PURE__ */ se(() => [
      [
        zt,
        {
          ripple: u(),
          unbounded: !0,
          color: e.color,
          disabled: !!e.disabled,
          addClass: K,
          removeClass: H,
          addStyle: B
        }
      ],
      ...i()
    ]), L = /* @__PURE__ */ se(() => Ue({
      "mdc-icon-button": !0,
      "mdc-icon-button--on": !r(c()) && c(),
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
      ...s(S),
      [a()]: !0
    })), ne = /* @__PURE__ */ se(() => Object.entries(x).map(([pe, V]) => `${pe}: ${V};`).concat([o()]).join(" ")), N = /* @__PURE__ */ se(() => r(c()) ? null : c() ? "true" : "false"), q = /* @__PURE__ */ se(() => c() ? e.ariaLabelOn : e.ariaLabelOff);
    sr(P, v, (pe, V) => {
      we(
        V(pe, it(
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
              return s(ne);
            },
            get "aria-pressed"() {
              return s(N);
            },
            get "aria-label"() {
              return s(q);
            },
            get "data-aria-label-on"() {
              return e.ariaLabelOn;
            },
            get "data-aria-label-off"() {
              return e.ariaLabelOff;
            },
            get "aria-describedby"() {
              return C;
            },
            get href() {
              return e.href;
            }
          },
          () => s(T),
          () => s(g),
          () => b,
          {
            onclick: (re) => {
              var X;
              E && E.handleClick(), _ === "top-app-bar:navigation" && We(D(), "SMUITopAppBarIconButtonNav"), (X = e.onclick) == null || X.call(e, re);
            },
            children: (re, X) => {
              var fe = Fp(), ae = Ee(Z(fe), 2);
              Ae(ae, () => e.children ?? ge);
              var Qe = Ee(ae);
              {
                var Ze = (ke) => {
                  var Le = Hp();
                  O(ke, Le);
                };
                ue(Qe, (ke) => {
                  d() && ke(Ze);
                });
              }
              O(re, fe);
            },
            $$slots: { default: !0 }
          }
        )),
        (re) => I = re,
        () => I
      );
    });
  }
  return O(t, te), Re(G);
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
        children: (u, l) => {
          var c = Xt();
          He(() => vt(c, r())), O(u, c);
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
      var r = t.call(this, de(de({}, e.defaultAdapter), n)) || this;
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
  }(Nt)
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
var Wr = {
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
      var r = t.call(this, de(de({}, e.defaultAdapter), n)) || this;
      return r.transitionEndHandler = function(i) {
        r.handleTransitionEnd(i);
      }, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Wr;
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
      this.adapter.removeClass(Wr.LINE_RIPPLE_DEACTIVATING), this.adapter.addClass(Wr.LINE_RIPPLE_ACTIVE);
    }, e.prototype.setRippleCenter = function(n) {
      this.adapter.setStyle("transform-origin", n + "px center");
    }, e.prototype.deactivate = function() {
      this.adapter.addClass(Wr.LINE_RIPPLE_DEACTIVATING);
    }, e.prototype.handleTransitionEnd = function(n) {
      var r = this.adapter.hasClass(Wr.LINE_RIPPLE_DEACTIVATING);
      n.propertyName === "opacity" && r && (this.adapter.removeClass(Wr.LINE_RIPPLE_ACTIVE), this.adapter.removeClass(Wr.LINE_RIPPLE_DEACTIVATING));
    }, e;
  }(Nt)
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
}, Zl = {
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
var zp = (
  /** @class */
  function(t) {
    $e(e, t);
    function e(n) {
      return t.call(this, de(de({}, e.defaultAdapter), n)) || this;
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
        return Zl;
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
      n > 0 && (n += Zl.NOTCH_ELEMENT_PADDING), this.adapter.setNotchWidthProperty(n), this.adapter.addClass(r);
    }, e.prototype.closeNotch = function() {
      var n = e.cssClasses.OUTLINE_NOTCHED;
      this.adapter.removeClass(n), this.adapter.removeNotchWidthProperty();
    }, e;
  }(Nt)
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
}, Kp = {
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
}, Ql = {
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
var Jl = ["mousedown", "touchstart"], $l = ["click", "keydown"], Zp = (
  /** @class */
  function(t) {
    $e(e, t);
    function e(n, r) {
      r === void 0 && (r = {});
      var i = t.call(this, de(de({}, e.defaultAdapter), n)) || this;
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
        return Kp;
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
        return Ql;
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
        for (var o = wt(Jl), u = o.next(); !u.done; u = o.next()) {
          var l = u.value;
          this.adapter.registerInputInteractionHandler(l, this.setPointerXOffset);
        }
      } catch (h) {
        n = { error: h };
      } finally {
        try {
          u && !u.done && (r = o.return) && r.call(o);
        } finally {
          if (n) throw n.error;
        }
      }
      try {
        for (var c = wt($l), d = c.next(); !d.done; d = c.next()) {
          var l = d.value;
          this.adapter.registerTextFieldInteractionHandler(l, this.textFieldInteractionHandler);
        }
      } catch (h) {
        i = { error: h };
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
        for (var o = wt(Jl), u = o.next(); !u.done; u = o.next()) {
          var l = u.value;
          this.adapter.deregisterInputInteractionHandler(l, this.setPointerXOffset);
        }
      } catch (h) {
        n = { error: h };
      } finally {
        try {
          u && !u.done && (r = o.return) && r.call(o);
        } finally {
          if (n) throw n.error;
        }
      }
      try {
        for (var c = wt($l), d = c.next(); !d.done; d = c.next()) {
          var l = d.value;
          this.adapter.deregisterTextFieldInteractionHandler(l, this.textFieldInteractionHandler);
        }
      } catch (h) {
        i = { error: h };
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
        return Xp.indexOf(i) > -1 ? (r.styleValidity(!0), r.adapter.setLabelRequired(r.getNativeInput().required), !0) : !1;
      }), n.indexOf("maxlength") > -1 && this.setcharacterCounter(this.getValue().length);
    }, e.prototype.notchOutline = function(n) {
      if (!(!this.adapter.hasOutline() || !this.adapter.hasLabel()))
        if (n) {
          var r = this.adapter.getLabelWidth() * Ql.LABEL_SCALE;
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
  }(Nt)
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
var eu = {
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
var tu = ["click", "keydown"], Jp = (
  /** @class */
  function(t) {
    $e(e, t);
    function e(n) {
      var r = t.call(this, de(de({}, e.defaultAdapter), n)) || this;
      return r.savedTabIndex = null, r.interactionHandler = function(i) {
        r.handleInteraction(i);
      }, r;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return eu;
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
        for (var i = wt(tu), a = i.next(); !a.done; a = i.next()) {
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
        for (var i = wt(tu), a = i.next(); !a.done; a = i.next()) {
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
      this.savedTabIndex && (n ? (this.adapter.setAttr("tabindex", "-1"), this.adapter.removeAttr("role")) : (this.adapter.setAttr("tabindex", this.savedTabIndex), this.adapter.setAttr("role", eu.ICON_ROLE)));
    }, e.prototype.setAriaLabel = function(n) {
      this.adapter.setAttr("aria-label", n);
    }, e.prototype.setContent = function(n) {
      this.adapter.setContent(n);
    }, e.prototype.handleInteraction = function(n) {
      var r = n.key === "Enter" || n.keyCode === 13;
      (n.type === "click" || r) && (n.preventDefault(), this.adapter.notifyIconAction());
    }, e;
  }(Nt)
), $p = /* @__PURE__ */ ve("<span><!></span>"), em = /* @__PURE__ */ ve("<label><!></label>");
function ho(t, e) {
  Oe(e, !0);
  let n = p(e, "use", 19, () => []), r = p(e, "class", 3, ""), i = p(e, "style", 3, ""), a = p(e, "floatAbove", 15, !1), o = p(e, "required", 15, !1), u = p(e, "wrapped", 3, !1), l = /* @__PURE__ */ ze(e, [
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
  ]), c, d = /* @__PURE__ */ be(void 0), h = new Va(), f = ye({}), v = ye({}), m = le("SMUI:generic:input:props") ?? {}, b = a();
  Te(() => {
    s(d) && b !== a() && (b = a(), s(d).float(a()));
  });
  let I = o();
  Te(() => {
    s(d) && I !== o() && (I = o(), s(d).setRequired(o()));
  });
  const E = le("SMUI:floating-label:mount"), S = le("SMUI:floating-label:unmount");
  st(() => {
    Q(
      d,
      new Gp({
        addClass: x,
        removeClass: g,
        getWidth: () => {
          var y, L;
          const G = K(), te = G.cloneNode(!0);
          (y = G.parentNode) == null || y.appendChild(te), te.classList.add("smui-floating-label--remove-transition"), te.classList.add("smui-floating-label--force-size"), te.classList.remove("mdc-floating-label--float-above");
          const P = te.scrollWidth;
          return (L = G.parentNode) == null || L.removeChild(te), P;
        },
        registerInteractionHandler: (G, te) => h.on(K(), G, te),
        deregisterInteractionHandler: (G, te) => h.off(K(), G, te)
      }),
      !0
    );
    const D = {
      get element() {
        return K();
      },
      addStyle: _,
      removeStyle: C
    };
    return E && E(D), s(d).init(), () => {
      var G;
      S && S(D), (G = s(d)) == null || G.destroy(), h.clear();
    };
  });
  function x(D) {
    f[D] || (f[D] = !0);
  }
  function g(D) {
    (!(D in f) || f[D]) && (f[D] = !1);
  }
  function _(D, G) {
    v[D] != G && (G === "" || G == null ? delete v[D] : v[D] = G);
  }
  function C(D) {
    D in v && delete v[D];
  }
  function T(D) {
    var G;
    (G = s(d)) == null || G.shake(D);
  }
  function A(D) {
    a(D);
  }
  function w(D) {
    o(D);
  }
  function U() {
    if (s(d) == null)
      throw new Error("Instance is undefined.");
    return s(d).getWidth();
  }
  function K() {
    return c;
  }
  var H = { shake: T, float: A, setRequired: w, getWidth: U, getElement: K }, B = ie(), _e = Z(B);
  {
    var k = (D) => {
      var G = $p();
      Be(G, (P, y) => ({ class: P, style: y, ...l }), [
        () => Ue({
          "mdc-floating-label": !0,
          "mdc-floating-label--float-above": a(),
          "mdc-floating-label--required": o(),
          ...f,
          [r()]: !0
        }),
        () => Object.entries(v).map(([P, y]) => `${P}: ${y};`).concat([i()]).join(" ")
      ]);
      var te = Ie(G);
      Ae(te, () => e.children ?? ge), we(G, (P) => c = P, () => c), Fe(G, (P, y) => z == null ? void 0 : z(P, y), n), O(D, G);
    }, F = (D) => {
      var G = em();
      Be(
        G,
        (P, y) => ({
          class: P,
          style: y,
          for: e.for || (m ? m.id : void 0),
          ...l
        }),
        [
          () => Ue({
            "mdc-floating-label": !0,
            "mdc-floating-label--float-above": a(),
            "mdc-floating-label--required": o(),
            ...f,
            [r()]: !0
          }),
          () => Object.entries(v).map(([P, y]) => `${P}: ${y};`).concat([i()]).join(" ")
        ]
      );
      var te = Ie(G);
      Ae(te, () => e.children ?? ge), we(G, (P) => c = P, () => c), Fe(G, (P, y) => z == null ? void 0 : z(P, y), n), O(D, G);
    };
    ue(_e, (D) => {
      u() ? D(k) : D(F, !1);
    });
  }
  return O(t, B), Re(H);
}
var tm = /* @__PURE__ */ ve("<div></div>");
function Xc(t, e) {
  Oe(e, !0);
  let n = p(e, "use", 19, () => []), r = p(e, "class", 3, ""), i = p(e, "style", 3, ""), a = p(e, "active", 3, !1), o = /* @__PURE__ */ ze(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "style",
    "active"
  ]), u, l = /* @__PURE__ */ be(void 0), c = new Va(), d = ye({}), h = ye({});
  st(() => (Q(
    l,
    new jp({
      addClass: v,
      removeClass: m,
      hasClass: f,
      setStyle: b,
      registerEventHandler: (C, T) => c.on(x(), C, T),
      deregisterEventHandler: (C, T) => c.off(x(), C, T)
    }),
    !0
  ), s(l).init(), () => {
    var C;
    (C = s(l)) == null || C.destroy(), c.clear();
  }));
  function f(C) {
    return C in d ? d[C] : x().classList.contains(C);
  }
  function v(C) {
    d[C] || (d[C] = !0);
  }
  function m(C) {
    (!(C in d) || d[C]) && (d[C] = !1);
  }
  function b(C, T) {
    h[C] != T && (T === "" || T == null ? delete h[C] : h[C] = T);
  }
  function I() {
    var C;
    (C = s(l)) == null || C.activate();
  }
  function E() {
    var C;
    (C = s(l)) == null || C.deactivate();
  }
  function S(C) {
    var T;
    (T = s(l)) == null || T.setRippleCenter(C);
  }
  function x() {
    return u;
  }
  var g = { activate: I, deactivate: E, setRippleCenter: S, getElement: x }, _ = tm();
  return Be(_, (C, T) => ({ class: C, style: T, ...o }), [
    () => Ue({
      "mdc-line-ripple": !0,
      "mdc-line-ripple--active": a(),
      ...d,
      [r()]: !0
    }),
    () => Object.entries(h).map(([C, T]) => `${C}: ${T};`).concat([i()]).join(" ")
  ]), we(_, (C) => u = C, () => u), Fe(_, (C, T) => z == null ? void 0 : z(C, T), n), O(t, _), Re(g);
}
var nm = /* @__PURE__ */ ve('<div class="mdc-notched-outline__notch"><!></div>'), rm = /* @__PURE__ */ ve('<div><div class="mdc-notched-outline__leading"></div> <!> <div class="mdc-notched-outline__trailing"></div></div>');
function Yc(t, e) {
  Oe(e, !0);
  let n = p(e, "use", 19, () => []), r = p(e, "class", 3, ""), i = p(e, "notched", 3, !1), a = p(e, "noLabel", 3, !1), o = /* @__PURE__ */ ze(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "notched",
    "noLabel",
    "children"
  ]), u, l = /* @__PURE__ */ be(void 0), c = /* @__PURE__ */ be(void 0), d = ye({}), h = ye({}), f;
  Te(() => {
    s(c) !== f && (s(c) ? (s(c).addStyle("transition-duration", "0s"), v("mdc-notched-outline--upgraded"), requestAnimationFrame(() => {
      s(c) && s(c).removeStyle("transition-duration");
    })) : m("mdc-notched-outline--upgraded"), f = s(c));
  }), ee("SMUI:floating-label:mount", (A) => {
    Q(c, A, !0);
  }), ee("SMUI:floating-label:unmount", () => {
    Q(c, void 0);
  }), st(() => (Q(
    l,
    new zp({
      addClass: v,
      removeClass: m,
      setNotchWidthProperty: (A) => b("width", A + "px"),
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
  function b(A, w) {
    h[A] != w && (w === "" || w == null ? delete h[A] : h[A] = w);
  }
  function I(A) {
    A in h && delete h[A];
  }
  function E(A) {
    var w;
    (w = s(l)) == null || w.notch(A);
  }
  function S() {
    var A;
    (A = s(l)) == null || A.closeNotch();
  }
  function x() {
    return u;
  }
  var g = { notch: E, closeNotch: S, getElement: x }, _ = rm();
  Be(_, (A) => ({ class: A, ...o }), [
    () => Ue({
      "mdc-notched-outline": !0,
      "mdc-notched-outline--notched": i(),
      "mdc-notched-outline--no-label": a(),
      ...d,
      [r()]: !0
    })
  ]);
  var C = Ee(Ie(_), 2);
  {
    var T = (A) => {
      var w = nm(), U = Ie(w);
      Ae(U, () => e.children ?? ge), He((K) => rn(w, K), [
        () => Object.entries(h).map(([K, H]) => `${K}: ${H};`).join(" ")
      ]), O(A, w);
    };
    ue(C, (A) => {
      a() || A(T);
    });
  }
  return we(_, (A) => u = A, () => u), Fe(_, (A, w) => z == null ? void 0 : z(A, w), n), O(t, _), Re(g);
}
function rl(t, e) {
  Oe(e, !0);
  let n = p(e, "use", 19, () => []), r = p(e, "class", 3, ""), i = p(e, "component", 3, Hr), a = p(e, "tag", 3, "div"), o = p(e, "_smuiClass", 3, ""), u = p(e, "_smuiClassMap", 23, () => ({})), l = p(e, "_smuiContexts", 19, () => ({})), c = p(e, "_smuiProps", 19, () => ({})), d = /* @__PURE__ */ ze(e, [
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
  Object.entries(u()).forEach(([E, S]) => {
    const x = le(S);
    x && "subscribe" in x && f.push(x.subscribe((g) => {
      u()[E] = g;
    }));
  });
  for (let E in l())
    l().hasOwnProperty(E) && ee(E, l()[E]);
  Hn(() => {
    for (const E of f)
      E();
  });
  function v() {
    return h.getElement();
  }
  var m = { getElement: v }, b = ie(), I = Z(b);
  {
    let E = /* @__PURE__ */ se(() => Ue({
      [o()]: !0,
      ...u(),
      [r()]: !0
    }));
    sr(I, i, (S, x) => {
      we(
        x(S, it(
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
          c,
          () => d,
          {
            children: (g, _) => {
              var C = ie(), T = Z(C);
              Ae(T, () => e.children ?? ge), O(g, C);
            },
            $$slots: { default: !0 }
          }
        )),
        (g) => h = g,
        () => h
      );
    });
  }
  return O(t, b), Re(m);
}
function im(t, e) {
  Oe(e, !0);
  let n = /* @__PURE__ */ ze(e, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return we(
    rl(t, it({ _smuiClass: "mdc-text-field-helper-line", tag: "div" }, () => n, {
      children: (o, u) => {
        var l = ie(), c = Z(l);
        Ae(c, () => e.children ?? ge), O(o, l);
      },
      $$slots: { default: !0 }
    })),
    (o) => r = o,
    () => r
  ), Re(a);
}
function am(t, e) {
  Oe(e, !0);
  let n = /* @__PURE__ */ ze(e, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return we(
    rl(t, it(
      {
        _smuiClass: "mdc-text-field__affix mdc-text-field__affix--prefix",
        tag: "span"
      },
      () => n,
      {
        children: (o, u) => {
          var l = ie(), c = Z(l);
          Ae(c, () => e.children ?? ge), O(o, l);
        },
        $$slots: { default: !0 }
      }
    )),
    (o) => r = o,
    () => r
  ), Re(a);
}
function om(t, e) {
  Oe(e, !0);
  let n = /* @__PURE__ */ ze(e, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return we(
    rl(t, it(
      {
        _smuiClass: "mdc-text-field__affix mdc-text-field__affix--suffix",
        tag: "span"
      },
      () => n,
      {
        children: (o, u) => {
          var l = ie(), c = Z(l);
          Ae(c, () => e.children ?? ge), O(o, l);
        },
        $$slots: { default: !0 }
      }
    )),
    (o) => r = o,
    () => r
  ), Re(a);
}
var sm = /* @__PURE__ */ ve("<input/>");
function lm(t, e) {
  Oe(e, !0);
  let n = p(e, "use", 19, () => []), r = p(e, "class", 3, ""), i = p(e, "type", 3, "text"), a = p(e, "placeholder", 3, " "), o = p(e, "value", 15), u = p(e, "files", 15, null), l = p(e, "dirty", 15, !1), c = p(e, "invalid", 15, !1), d = p(e, "updateInvalid", 3, !0), h = p(e, "initialInvalid", 3, !1), f = p(e, "emptyValueNull", 19, () => o() === null), v = p(e, "emptyValueUndefined", 19, () => o() === void 0), m = /* @__PURE__ */ ze(e, [
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
  ]), b, I = ye({}), E = ye({});
  Te(() => {
    i() === "file" ? delete E.value : E.value = o() == null ? "" : o();
  }), st(() => {
    d() && h() && c(U().matches(":invalid"));
  });
  function S(k) {
    return k === "" ? Number.NaN : +k;
  }
  function x(k) {
    if (i() === "file") {
      u(k.currentTarget.files);
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
        o(S(k.currentTarget.value));
        break;
      default:
        o(k.currentTarget.value);
        break;
    }
  }
  function g(k) {
    (i() === "file" || i() === "range") && x(k), l(!0), d() && c(U().matches(":invalid"));
  }
  function _(k) {
    return k in I ? I[k] ?? null : U().getAttribute(k);
  }
  function C(k, F) {
    I[k] !== F && (I[k] = F);
  }
  function T(k) {
    (!(k in I) || I[k] != null) && (I[k] = void 0);
  }
  function A() {
    U().focus();
  }
  function w() {
    U().blur();
  }
  function U() {
    return b;
  }
  var K = { getAttr: _, addAttr: C, removeAttr: T, focus: A, blur: w, getElement: U }, H = sm(), B = (k) => {
    var F;
    i() !== "file" && x(k), (F = e.oninput) == null || F.call(e, k);
  }, _e = (k) => {
    var F;
    g(k), (F = e.onchange) == null || F.call(e, k);
  };
  return Be(
    H,
    (k) => ({
      class: k,
      type: i(),
      placeholder: a(),
      ...E,
      ...I,
      ...m,
      oninput: B,
      onchange: _e
    }),
    [
      () => Ue({ "mdc-text-field__input": !0, [r()]: !0 })
    ],
    void 0,
    void 0,
    !0
  ), we(H, (k) => b = k, () => b), Fe(H, (k, F) => z == null ? void 0 : z(k, F), n), O(t, H), Re(K);
}
var um = /* @__PURE__ */ ve("<textarea></textarea>");
function cm(t, e) {
  Oe(e, !0);
  let n = p(e, "use", 19, () => []), r = p(e, "class", 3, ""), i = p(e, "style", 3, ""), a = p(e, "value", 15, ""), o = p(e, "dirty", 15, !1), u = p(e, "invalid", 15, !1), l = p(e, "updateInvalid", 3, !0), c = p(e, "initialInvalid", 3, !1), d = p(e, "resizable", 3, !0), h = /* @__PURE__ */ ze(e, [
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
    l() && c() && u(g().matches(":invalid"));
  });
  function m() {
    o(!0), l() && u(g().matches(":invalid"));
  }
  function b(A) {
    return A in v ? v[A] ?? null : g().getAttribute(A);
  }
  function I(A, w) {
    v[A] !== w && (v[A] = w);
  }
  function E(A) {
    (!(A in v) || v[A] != null) && (v[A] = void 0);
  }
  function S() {
    g().focus();
  }
  function x() {
    g().blur();
  }
  function g() {
    return f;
  }
  var _ = { getAttr: b, addAttr: I, removeAttr: E, focus: S, blur: x, getElement: g }, C = um(), T = (A) => {
    var w;
    m(), (w = e.onchange) == null || w.call(e, A);
  };
  return Be(
    C,
    (A) => ({
      class: A,
      style: `${d() ? "" : "resize: none; "}${i()}`,
      ...v,
      ...h,
      onchange: T
    }),
    [
      () => Ue({ "mdc-text-field__input": !0, [r()]: !0 })
    ]
  ), we(C, (A) => f = A, () => f), Fe(C, (A, w) => z == null ? void 0 : z(A, w), n), Fa(() => xa(C, a)), O(t, C), Re(_);
}
var dm = /* @__PURE__ */ ve('<span class="mdc-text-field__ripple"></span>'), fm = /* @__PURE__ */ ve("<!> <!>", 1), hm = /* @__PURE__ */ ve("<span><!> <!></span>"), vm = /* @__PURE__ */ ve("<!> <!> <!>", 1), pm = /* @__PURE__ */ ve("<label><!> <!> <!> <!> <!> <!> <!></label>"), mm = /* @__PURE__ */ ve("<div><!> <!> <!> <!> <!></div>"), gm = /* @__PURE__ */ ve("<!> <!>", 1);
function nu(t, e) {
  Oe(e, !0);
  const { applyPassive: n } = Kc;
  let r = () => {
  };
  function i(W) {
    return W === r;
  }
  let a = p(e, "use", 19, () => []), o = p(e, "class", 3, ""), u = p(e, "style", 3, ""), l = p(e, "ripple", 3, !0), c = p(e, "disabled", 3, !1), d = p(e, "required", 3, !1), h = p(e, "textarea", 3, !1), f = p(e, "variant", 19, () => h() ? "outlined" : "standard"), v = p(e, "noLabel", 3, !1), m = p(e, "type", 3, "text"), b = p(e, "value", 15), I = p(e, "files", 15, r), E = p(e, "invalid", 15, r), S = p(e, "updateInvalid", 19, () => i(E())), x = p(e, "initialInvalid", 3, !1), g = p(e, "dirty", 15, !1), _ = p(e, "validateOnValueChange", 19, S), C = p(e, "useNativeValidation", 19, S), T = p(e, "withLeadingIcon", 3, r), A = p(e, "withTrailingIcon", 3, r), w = p(e, "input", 7), U = p(e, "floatingLabel", 7), K = p(e, "lineRipple", 7), H = p(e, "notchedOutline", 7), B = /* @__PURE__ */ ze(e, [
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
  const _e = b() !== void 0 || b() === void 0 && e.input$emptyValueUndefined || !i(I());
  i(I()) && I(null), i(E()) && E(!1);
  let k, F = /* @__PURE__ */ be(void 0), D = new Va(), G = ye({}), te = ye({}), P = /* @__PURE__ */ be(void 0), y = /* @__PURE__ */ be(!1), L = /* @__PURE__ */ be(ye(x())), ne = le("SMUI:addLayoutListener"), N, q, pe = new Promise((W) => q = W), V, re, X, fe;
  const ae = /* @__PURE__ */ se(() => w() && w().getElement());
  Te(() => {
    (g() || s(L) || !S()) && s(F) && s(F).isValid() !== !E() && (S() ? E(!s(F).isValid()) : s(F).setValid(!E()));
  }), Te(() => {
    s(F) && s(F).getValidateOnValueChange() !== _() && s(F).setValidateOnValueChange(i(_()) ? !1 : _());
  }), Te(() => {
    s(F) && s(F).setUseNativeValidation(i(C()) ? !0 : C());
  }), Te(() => {
    s(F) && s(F).setDisabled(c());
  });
  let Qe = b();
  Te(() => {
    if (s(F) && _e && Qe !== b()) {
      Qe = b();
      const W = `${b() == null ? "" : b()}`;
      s(F).getValue() !== W && s(F).setValue(W);
    }
  }), ne && (N = ne(M)), ee("SMUI:textfield:leading-icon:mount", (W) => {
    V = W;
  }), ee("SMUI:textfield:leading-icon:unmount", () => {
    V = void 0;
  }), ee("SMUI:textfield:trailing-icon:mount", (W) => {
    re = W;
  }), ee("SMUI:textfield:trailing-icon:unmount", () => {
    re = void 0;
  }), ee("SMUI:textfield:helper-text:id", (W) => {
    Q(P, W, !0);
  }), ee("SMUI:textfield:helper-text:mount", (W) => {
    X = W;
  }), ee("SMUI:textfield:helper-text:unmount", () => {
    Q(P, void 0), X = void 0;
  }), ee("SMUI:textfield:character-counter:mount", (W) => {
    fe = W;
  }), ee("SMUI:textfield:character-counter:unmount", () => {
    fe = void 0;
  }), st(() => {
    var W;
    if (Q(
      F,
      new Zp(
        {
          // getRootAdapterMethods_
          addClass: ke,
          removeClass: Le,
          hasClass: Ze,
          registerTextFieldInteractionHandler: (Y, De) => D.on(j(), Y, De),
          deregisterTextFieldInteractionHandler: (Y, De) => D.off(j(), Y, De),
          registerValidationAttributeChangeHandler: (Y) => {
            const De = (Lt) => Lt.map((Vt) => Vt.attributeName).filter((Vt) => Vt), et = new MutationObserver((Lt) => {
              C() && Y(De(Lt));
            }), pt = { attributes: !0 };
            return w() && et.observe(w().getElement(), pt), et;
          },
          deregisterValidationAttributeChangeHandler: (Y) => {
            Y.disconnect();
          },
          // getInputAdapterMethods_
          getNativeInput: () => {
            var Y;
            return ((Y = w()) == null ? void 0 : Y.getElement()) ?? null;
          },
          setInputAttr: (Y, De) => {
            var et;
            (et = w()) == null || et.addAttr(Y, De);
          },
          removeInputAttr: (Y) => {
            var De;
            (De = w()) == null || De.removeAttr(Y);
          },
          isFocused: () => {
            var Y;
            return document.activeElement === ((Y = w()) == null ? void 0 : Y.getElement());
          },
          registerInputInteractionHandler: (Y, De) => {
            var pt;
            const et = (pt = w()) == null ? void 0 : pt.getElement();
            if (et) {
              const Lt = n();
              D.on(et, Y, De, typeof Lt == "boolean" ? { capture: Lt } : Lt);
            }
          },
          deregisterInputInteractionHandler: (Y, De) => {
            var pt;
            const et = (pt = w()) == null ? void 0 : pt.getElement();
            et && D.off(et, Y, De);
          },
          // getLabelAdapterMethods_
          floatLabel: (Y) => U() && U().float(Y),
          getLabelWidth: () => U() ? U().getWidth() : 0,
          hasLabel: () => !!U(),
          shakeLabel: (Y) => U() && U().shake(Y),
          setLabelRequired: (Y) => U() && U().setRequired(Y),
          // getLineRippleAdapterMethods_
          activateLineRipple: () => K() && K().activate(),
          deactivateLineRipple: () => K() && K().deactivate(),
          setLineRippleTransformOrigin: (Y) => K() && K().setRippleCenter(Y),
          // getOutlineAdapterMethods_
          closeOutline: () => H() && H().closeNotch(),
          hasOutline: () => !!H(),
          notchOutline: (Y) => H() && H().notch(Y)
        },
        {
          get helperText() {
            return X;
          },
          get characterCounter() {
            return fe;
          },
          get leadingIcon() {
            return V;
          },
          get trailingIcon() {
            return re;
          }
        }
      ),
      !0
    ), _e) {
      if (w() == null)
        throw new Error("SMUI Textfield must be initialized with either a non-undefined initial value or an Input component.");
      (W = s(F)) == null || W.init();
    } else
      Lo().then(() => {
        var Y;
        if (w() == null)
          throw new Error("SMUI Textfield must be initialized with either a non-undefined initial value or an Input component.");
        (Y = s(F)) == null || Y.init();
      });
    return q(), () => {
      var Y;
      (Y = s(F)) == null || Y.destroy(), D.clear();
    };
  }), Hn(() => {
    N && N();
  });
  function Ze(W) {
    return W in G ? G[W] ?? null : j().classList.contains(W);
  }
  function ke(W) {
    G[W] || (G[W] = !0);
  }
  function Le(W) {
    (!(W in G) || G[W]) && (G[W] = !1);
  }
  function oe(W, Y) {
    te[W] != Y && (Y === "" || Y == null ? delete te[W] : te[W] = Y);
  }
  function Se() {
    var W;
    (W = w()) == null || W.focus();
  }
  function Ne() {
    var W;
    (W = w()) == null || W.blur();
  }
  function M() {
    if (s(F)) {
      const W = s(F).shouldFloat;
      s(F).notchOutline(W);
    }
  }
  function j() {
    return k;
  }
  var $ = { focus: Se, blur: Ne, layout: M, getElement: j }, Ce = gm(), Ut = Z(Ce);
  {
    var kt = (W) => {
      var Y = pm();
      Be(Y, (Ge, at, tt) => ({ class: Ge, style: at, for: void 0, ...tt }), [
        () => Ue({
          "mdc-text-field": !0,
          "mdc-text-field--disabled": c(),
          "mdc-text-field--textarea": h(),
          "mdc-text-field--filled": f() === "filled",
          "mdc-text-field--outlined": f() === "outlined",
          "smui-text-field--standard": f() === "standard" && !h(),
          "mdc-text-field--no-label": v() || e.label == null,
          "mdc-text-field--label-floating": s(y) || b() != null && b() !== "",
          "mdc-text-field--with-leading-icon": i(T()) ? e.leadingIcon : T(),
          "mdc-text-field--with-trailing-icon": i(A()) ? e.trailingIcon : A(),
          "mdc-text-field--with-internal-counter": h() && e.internalCounter,
          "mdc-text-field--invalid": E(),
          ...G,
          [o()]: !0
        }),
        () => Object.entries(te).map(([Ge, at]) => `${Ge}: ${at};`).concat([u()]).join(" "),
        () => ta(B, ["input$", "label$", "ripple$", "outline$", "helperLine$"])
      ]);
      var De = Ie(Y);
      {
        var et = (Ge) => {
          var at = fm(), tt = Z(at);
          {
            var Ot = (yt) => {
              var St = dm();
              O(yt, St);
            };
            ue(tt, (yt) => {
              f() === "filled" && yt(Ot);
            });
          }
          var Rt = Ee(tt, 2);
          {
            var rt = (yt) => {
              {
                let St = /* @__PURE__ */ se(() => s(y) || b() != null && b() !== "" && (typeof b() != "number" || !isNaN(b()))), Je = /* @__PURE__ */ se(() => lt(B, "label$"));
                we(
                  ho(yt, it(
                    {
                      get floatAbove() {
                        return s(St);
                      },
                      get required() {
                        return d();
                      },
                      wrapped: !0
                    },
                    () => s(Je),
                    {
                      children: (ft, yn) => {
                        var sn = ie(), It = Z(sn);
                        {
                          var Mt = (Zt) => {
                          }, xt = (Zt) => {
                            var kr = ie(), In = Z(kr);
                            {
                              var dr = (_n) => {
                                var Yn = Xt();
                                He(() => vt(Yn, e.label)), O(_n, Yn);
                              }, oa = (_n) => {
                                var Yn = ie(), Bn = Z(Yn);
                                Ae(Bn, () => e.label), O(_n, Yn);
                              };
                              ue(
                                In,
                                (_n) => {
                                  typeof e.label == "string" ? _n(dr) : _n(oa, !1);
                                },
                                !0
                              );
                            }
                            O(Zt, kr);
                          };
                          ue(It, (Zt) => {
                            e.label == null ? Zt(Mt) : Zt(xt, !1);
                          });
                        }
                        O(ft, sn);
                      },
                      $$slots: { default: !0 }
                    }
                  )),
                  (ft) => U(ft),
                  () => U()
                );
              }
            };
            ue(Rt, (yt) => {
              !v() && e.label != null && yt(rt);
            });
          }
          O(Ge, at);
        };
        ue(De, (Ge) => {
          !h() && f() !== "outlined" && Ge(et);
        });
      }
      var pt = Ee(De, 2);
      {
        var Lt = (Ge) => {
          {
            let at = /* @__PURE__ */ se(() => v() || e.label == null), tt = /* @__PURE__ */ se(() => lt(B, "outline$"));
            we(
              Yc(Ge, it(
                {
                  get noLabel() {
                    return s(at);
                  }
                },
                () => s(tt),
                {
                  children: (Ot, Rt) => {
                    var rt = ie(), yt = Z(rt);
                    {
                      var St = (Je) => {
                        {
                          let ft = /* @__PURE__ */ se(() => s(y) || b() != null && b() !== "" && (typeof b() != "number" || !isNaN(b()))), yn = /* @__PURE__ */ se(() => lt(B, "label$"));
                          we(
                            ho(Je, it(
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
                                  var Mt = ie(), xt = Z(Mt);
                                  {
                                    var Zt = (In) => {
                                    }, kr = (In) => {
                                      var dr = ie(), oa = Z(dr);
                                      {
                                        var _n = (Bn) => {
                                          var Vr = Xt();
                                          He(() => vt(Vr, e.label)), O(Bn, Vr);
                                        }, Yn = (Bn) => {
                                          var Vr = ie(), ko = Z(Vr);
                                          Ae(ko, () => e.label), O(Bn, Vr);
                                        };
                                        ue(
                                          oa,
                                          (Bn) => {
                                            typeof e.label == "string" ? Bn(_n) : Bn(Yn, !1);
                                          },
                                          !0
                                        );
                                      }
                                      O(In, dr);
                                    };
                                    ue(xt, (In) => {
                                      e.label == null ? In(Zt) : In(kr, !1);
                                    });
                                  }
                                  O(sn, Mt);
                                },
                                $$slots: { default: !0 }
                              }
                            )),
                            (sn) => U(sn),
                            () => U()
                          );
                        }
                      };
                      ue(yt, (Je) => {
                        !v() && e.label != null && Je(St);
                      });
                    }
                    O(Ot, rt);
                  },
                  $$slots: { default: !0 }
                }
              )),
              (Ot) => H(Ot),
              () => H()
            );
          }
        };
        ue(pt, (Ge) => {
          (h() || f() === "outlined") && Ge(Lt);
        });
      }
      var Vt = Ee(pt, 2);
      Ci(Vt, {
        key: "SMUI:textfield:icon:leading",
        value: !0,
        children: (Ge, at) => {
          var tt = ie(), Ot = Z(tt);
          Ae(Ot, () => e.leadingIcon ?? ge), O(Ge, tt);
        },
        $$slots: { default: !0 }
      });
      var cr = Ee(Vt, 2);
      Ae(cr, () => e.children ?? ge);
      var nt = Ee(cr, 2);
      {
        var Ct = (Ge) => {
          var at = hm(), tt = Ie(at);
          {
            let Rt = /* @__PURE__ */ se(() => lt(B, "input$"));
            we(
              cm(tt, it(
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
                    return s(L);
                  },
                  get "aria-controls"() {
                    return s(P);
                  },
                  get "aria-describedby"() {
                    return s(P);
                  }
                },
                () => s(Rt),
                {
                  onblur: (rt) => {
                    var yt;
                    Q(y, !1), Q(L, !0), We(j(), "blur", rt), (yt = e.input$onblur) == null || yt.call(e, rt);
                  },
                  onfocus: (rt) => {
                    var yt;
                    Q(y, !0), We(j(), "focus", rt), (yt = e.input$onfocus) == null || yt.call(e, rt);
                  },
                  get value() {
                    return b();
                  },
                  set value(rt) {
                    b(rt);
                  },
                  get dirty() {
                    return g();
                  },
                  set dirty(rt) {
                    g(rt);
                  },
                  get invalid() {
                    return E();
                  },
                  set invalid(rt) {
                    E(rt);
                  }
                }
              )),
              (rt) => w(rt),
              () => w()
            );
          }
          var Ot = Ee(tt, 2);
          Ae(Ot, () => e.internalCounter ?? ge), He((Rt) => mc(at, 1, Rt), [
            () => pc(Ue({
              "mdc-text-field__resizer": !("input$resizable" in B) || e.input$resizable
            }))
          ]), O(Ge, at);
        }, Gt = (Ge) => {
          var at = vm(), tt = Z(at);
          {
            var Ot = (St) => {
              var Je = ie(), ft = Z(Je);
              {
                var yn = (It) => {
                  am(It, {
                    children: (Mt, xt) => {
                      var Zt = Xt();
                      He(() => vt(Zt, e.prefix)), O(Mt, Zt);
                    },
                    $$slots: { default: !0 }
                  });
                }, sn = (It) => {
                  var Mt = ie(), xt = Z(Mt);
                  Ae(xt, () => e.prefix ?? ge), O(It, Mt);
                };
                ue(ft, (It) => {
                  typeof e.prefix == "string" ? It(yn) : It(sn, !1);
                });
              }
              O(St, Je);
            };
            ue(tt, (St) => {
              e.prefix != null && St(Ot);
            });
          }
          var Rt = Ee(tt, 2);
          {
            let St = /* @__PURE__ */ se(() => lt(B, "input$"));
            we(
              lm(Rt, it(
                {
                  get type() {
                    return m();
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
                    return s(L);
                  },
                  get "aria-controls"() {
                    return s(P);
                  },
                  get "aria-describedby"() {
                    return s(P);
                  }
                },
                () => v() && e.label != null && typeof e.label == "string" ? { placeholder: e.label } : {},
                () => s(St),
                {
                  onblur: (Je) => {
                    var ft;
                    Q(y, !1), Q(L, !0), We(j(), "blur", Je), (ft = e.input$onblur) == null || ft.call(e, Je);
                  },
                  onfocus: (Je) => {
                    var ft;
                    Q(y, !0), We(j(), "focus", Je), (ft = e.input$onfocus) == null || ft.call(e, Je);
                  },
                  get value() {
                    return b();
                  },
                  set value(Je) {
                    b(Je);
                  },
                  get files() {
                    return I();
                  },
                  set files(Je) {
                    I(Je);
                  },
                  get dirty() {
                    return g();
                  },
                  set dirty(Je) {
                    g(Je);
                  },
                  get invalid() {
                    return E();
                  },
                  set invalid(Je) {
                    E(Je);
                  }
                }
              )),
              (Je) => w(Je),
              () => w()
            );
          }
          var rt = Ee(Rt, 2);
          {
            var yt = (St) => {
              var Je = ie(), ft = Z(Je);
              {
                var yn = (It) => {
                  om(It, {
                    children: (Mt, xt) => {
                      var Zt = Xt();
                      He(() => vt(Zt, e.suffix)), O(Mt, Zt);
                    },
                    $$slots: { default: !0 }
                  });
                }, sn = (It) => {
                  var Mt = ie(), xt = Z(Mt);
                  Ae(xt, () => e.suffix ?? ge), O(It, Mt);
                };
                ue(ft, (It) => {
                  typeof e.suffix == "string" ? It(yn) : It(sn, !1);
                });
              }
              O(St, Je);
            };
            ue(rt, (St) => {
              e.suffix != null && St(yt);
            });
          }
          O(Ge, at);
        };
        ue(nt, (Ge) => {
          h() && typeof b() == "string" ? Ge(Ct) : Ge(Gt, !1);
        });
      }
      var Fn = Ee(nt, 2);
      Ci(Fn, {
        key: "SMUI:textfield:icon:leading",
        value: !1,
        children: (Ge, at) => {
          var tt = ie(), Ot = Z(tt);
          Ae(Ot, () => e.trailingIcon ?? ge), O(Ge, tt);
        },
        $$slots: { default: !0 }
      });
      var pi = Ee(Fn, 2);
      {
        var Yt = (Ge) => {
          {
            let at = /* @__PURE__ */ se(() => lt(B, "ripple$"));
            we(Xc(Ge, it(() => s(at))), (tt) => K(tt), () => K());
          }
        };
        ue(pi, (Ge) => {
          !h() && f() !== "outlined" && l() && Ge(Yt);
        });
      }
      we(Y, (Ge) => k = Ge, () => k), Fe(Y, (Ge, at) => zt == null ? void 0 : zt(Ge, at), () => ({
        ripple: !h() && f() === "filled",
        unbounded: !1,
        addClass: ke,
        removeClass: Le,
        addStyle: oe,
        eventTarget: s(ae),
        activeTarget: s(ae),
        initPromise: pe
      })), Fe(Y, (Ge, at) => z == null ? void 0 : z(Ge, at), a), O(W, Y);
    }, Rn = (W) => {
      var Y = mm();
      Be(Y, (nt, Ct, Gt) => ({ class: nt, style: Ct, ...Gt }), [
        () => Ue({
          "mdc-text-field": !0,
          "mdc-text-field--disabled": c(),
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
        () => Object.entries(te).map(([nt, Ct]) => `${nt}: ${Ct};`).concat([u()]).join(" "),
        () => ta(B, ["input$", "label$", "ripple$", "outline$", "helperLine$"])
      ]);
      var De = Ie(Y);
      {
        var et = (nt) => {
          var Ct = ie(), Gt = Z(Ct);
          Ae(Gt, () => e.label ?? ge), O(nt, Ct);
        };
        ue(De, (nt) => {
          typeof e.label != "string" && nt(et);
        });
      }
      var pt = Ee(De, 2);
      Ci(pt, {
        key: "SMUI:textfield:icon:leading",
        value: !0,
        children: (nt, Ct) => {
          var Gt = ie(), Fn = Z(Gt);
          Ae(Fn, () => e.leadingIcon ?? ge), O(nt, Gt);
        },
        $$slots: { default: !0 }
      });
      var Lt = Ee(pt, 2);
      Ae(Lt, () => e.children ?? ge);
      var Vt = Ee(Lt, 2);
      Ci(Vt, {
        key: "SMUI:textfield:icon:leading",
        value: !1,
        children: (nt, Ct) => {
          var Gt = ie(), Fn = Z(Gt);
          Ae(Fn, () => e.trailingIcon ?? ge), O(nt, Gt);
        },
        $$slots: { default: !0 }
      });
      var cr = Ee(Vt, 2);
      Ae(cr, () => e.line ?? ge), we(Y, (nt) => k = nt, () => k), Fe(Y, (nt, Ct) => zt == null ? void 0 : zt(nt, Ct), () => ({
        ripple: l(),
        unbounded: !1,
        addClass: ke,
        removeClass: Le,
        addStyle: oe
      })), Fe(Y, (nt, Ct) => z == null ? void 0 : z(nt, Ct), a), O(W, Y);
    };
    ue(Ut, (W) => {
      _e ? W(kt) : W(Rn, !1);
    });
  }
  var ce = Ee(Ut, 2);
  {
    var me = (W) => {
      {
        let Y = /* @__PURE__ */ se(() => lt(B, "helperLine$"));
        im(W, it(() => s(Y), {
          children: (De, et) => {
            var pt = ie(), Lt = Z(pt);
            Ae(Lt, () => e.helper ?? ge), O(De, pt);
          },
          $$slots: { default: !0 }
        }));
      }
    };
    ue(ce, (W) => {
      e.helper && W(me);
    });
  }
  return O(t, Ce), Re($);
}
var bm = /* @__PURE__ */ ve("<i><!></i>");
function ym(t, e) {
  Oe(e, !0);
  const n = () => Pt(m, "$leadingStore", r), [r, i] = Ln();
  let a = p(e, "use", 19, () => []), o = p(e, "class", 3, ""), u = p(e, "tabindex", 19, () => e.role === "button" ? 0 : -1), l = p(e, "disabled", 3, !1), c = /* @__PURE__ */ ze(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "role",
    "tabindex",
    "disabled",
    "children"
  ]), d, h = /* @__PURE__ */ be(void 0), f = new Va(), v = ye({});
  const m = le("SMUI:textfield:icon:leading"), b = n();
  let I = /* @__PURE__ */ be(void 0);
  const E = /* @__PURE__ */ se(() => ({ role: e.role, tabindex: u() })), S = le("SMUI:textfield:leading-icon:mount"), x = le("SMUI:textfield:leading-icon:unmount"), g = le("SMUI:textfield:trailing-icon:mount"), _ = le("SMUI:textfield:trailing-icon:unmount");
  st(() => (Q(
    h,
    new Jp({
      getAttr: C,
      setAttr: T,
      removeAttr: A,
      setContent: (F) => {
        Q(I, F, !0);
      },
      registerInteractionHandler: (F, D) => f.on(w(), F, D),
      deregisterInteractionHandler: (F, D) => f.off(w(), F, D),
      notifyIconAction: () => We(w(), "SMUITextFieldIcon")
    }),
    !0
  ), b ? S && S(s(h)) : g && g(s(h)), s(h).init(), () => {
    var F;
    s(h) && (b ? x && x(s(h)) : _ && _(s(h))), (F = s(h)) == null || F.destroy(), f.clear();
  }));
  function C(F) {
    return F in v ? v[F] ?? null : w().getAttribute(F);
  }
  function T(F, D) {
    v[F] !== D && (v[F] = D);
  }
  function A(F) {
    (!(F in v) || v[F] != null) && (v[F] = void 0);
  }
  function w() {
    return d;
  }
  var U = { getElement: w }, K = bm();
  Be(
    K,
    (F) => ({
      class: F,
      "aria-hidden": u() === -1 ? "true" : "false",
      "aria-disabled": e.role === "button" ? l() ? "true" : "false" : void 0,
      ...s(E),
      ...v,
      ...c
    }),
    [
      () => Ue({
        "mdc-text-field__icon": !0,
        "mdc-text-field__icon--leading": b,
        "mdc-text-field__icon--trailing": !b,
        [o()]: !0
      })
    ]
  );
  var H = Ie(K);
  {
    var B = (F) => {
      var D = ie(), G = Z(D);
      Ae(G, () => e.children ?? ge), O(F, D);
    }, _e = (F) => {
      var D = Xt();
      He(() => vt(D, s(I))), O(F, D);
    };
    ue(H, (F) => {
      s(I) == null ? F(B) : F(_e, !1);
    });
  }
  we(K, (F) => d = F, () => d), Fe(K, (F, D) => z == null ? void 0 : z(F, D), a), O(t, K);
  var k = Re(U);
  return i(), k;
}
function Im(t, e) {
  Oe(e, !0);
  let n = p(e, "placeholder", 3, ""), r = p(e, "label", 3, ""), i = p(e, "icon", 3, ""), a = p(e, "value", 15, ""), o = p(e, "variant", 3, "standard"), u = p(e, "styles", 3, ""), l = p(e, "required", 3, !1);
  var c = ie(), d = Z(c);
  {
    var h = (v) => {
      {
        const m = (I) => {
          ym(I, {
            class: "material-icons",
            children: (E, S) => {
              var x = Xt();
              He(() => vt(x, i())), O(E, x);
            },
            $$slots: { default: !0 }
          });
        };
        let b = /* @__PURE__ */ se(() => `width: 100%; ${u()}`);
        nu(v, {
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
            return s(b);
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
      nu(v, {
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
    ue(d, (v) => {
      i() ? v(h) : v(f, !1);
    });
  }
  O(t, c), Re();
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
var ii;
(function(t) {
  t[t.TOP_LEFT = 0] = "TOP_LEFT", t[t.TOP_RIGHT = 4] = "TOP_RIGHT", t[t.BOTTOM_LEFT = 1] = "BOTTOM_LEFT", t[t.BOTTOM_RIGHT = 5] = "BOTTOM_RIGHT", t[t.TOP_START = 8] = "TOP_START", t[t.TOP_END = 12] = "TOP_END", t[t.BOTTOM_START = 9] = "BOTTOM_START", t[t.BOTTOM_END = 13] = "BOTTOM_END";
})(ii || (ii = {}));
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
var hr, $n, qe = {
  LIST_ITEM_ACTIVATED_CLASS: "mdc-list-item--activated",
  LIST_ITEM_CLASS: "mdc-list-item",
  LIST_ITEM_DISABLED_CLASS: "mdc-list-item--disabled",
  LIST_ITEM_SELECTED_CLASS: "mdc-list-item--selected",
  LIST_ITEM_TEXT_CLASS: "mdc-list-item__text",
  LIST_ITEM_PRIMARY_TEXT_CLASS: "mdc-list-item__primary-text",
  ROOT: "mdc-list"
};
hr = {}, hr["" + qe.LIST_ITEM_ACTIVATED_CLASS] = "mdc-list-item--activated", hr["" + qe.LIST_ITEM_CLASS] = "mdc-list-item", hr["" + qe.LIST_ITEM_DISABLED_CLASS] = "mdc-list-item--disabled", hr["" + qe.LIST_ITEM_SELECTED_CLASS] = "mdc-list-item--selected", hr["" + qe.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-list-item__primary-text", hr["" + qe.ROOT] = "mdc-list";
var _i = ($n = {}, $n["" + qe.LIST_ITEM_ACTIVATED_CLASS] = "mdc-deprecated-list-item--activated", $n["" + qe.LIST_ITEM_CLASS] = "mdc-deprecated-list-item", $n["" + qe.LIST_ITEM_DISABLED_CLASS] = "mdc-deprecated-list-item--disabled", $n["" + qe.LIST_ITEM_SELECTED_CLASS] = "mdc-deprecated-list-item--selected", $n["" + qe.LIST_ITEM_TEXT_CLASS] = "mdc-deprecated-list-item__text", $n["" + qe.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-deprecated-list-item__primary-text", $n["" + qe.ROOT] = "mdc-deprecated-list", $n), vr = {
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
    .` + qe.LIST_ITEM_CLASS + ` button:not(:disabled),
    .` + qe.LIST_ITEM_CLASS + ` a,
    .` + _i[qe.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + _i[qe.LIST_ITEM_CLASS] + ` a
  `,
  DEPRECATED_SELECTOR: ".mdc-deprecated-list",
  FOCUSABLE_CHILD_ELEMENTS: `
    .` + qe.LIST_ITEM_CLASS + ` button:not(:disabled),
    .` + qe.LIST_ITEM_CLASS + ` a,
    .` + qe.LIST_ITEM_CLASS + ` input[type="radio"]:not(:disabled),
    .` + qe.LIST_ITEM_CLASS + ` input[type="checkbox"]:not(:disabled),
    .` + _i[qe.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + _i[qe.LIST_ITEM_CLASS] + ` a,
    .` + _i[qe.LIST_ITEM_CLASS] + ` input[type="radio"]:not(:disabled),
    .` + _i[qe.LIST_ITEM_CLASS] + ` input[type="checkbox"]:not(:disabled)
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
    o.sort(function(u, l) {
      return u.index - l.index;
    });
  }), n;
}
function ws(t, e) {
  var n = t.nextChar, r = t.focusItemAtIndex, i = t.sortedIndexByFirstChar, a = t.focusedItemIndex, o = t.skipFocus, u = t.isItemAtIndexDisabled;
  clearTimeout(e.bufferClearTimeout), e.bufferClearTimeout = setTimeout(function() {
    Qc(e);
  }, _t.TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS), e.typeaheadBuffer = e.typeaheadBuffer + n;
  var l;
  return e.typeaheadBuffer.length === 1 ? l = xm(i, a, u, e) : l = Tm(i, u, e), l !== -1 && !o && r(l), l;
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
function Tm(t, e, n) {
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
function Zc(t) {
  return t.typeaheadBuffer.length > 0;
}
function Qc(t) {
  t.typeaheadBuffer = "";
}
function ru(t, e) {
  var n = t.event, r = t.isTargetListItem, i = t.focusedItemIndex, a = t.focusItemAtIndex, o = t.sortedIndexByFirstChar, u = t.isItemAtIndexDisabled, l = gt(n) === "ArrowLeft", c = gt(n) === "ArrowUp", d = gt(n) === "ArrowRight", h = gt(n) === "ArrowDown", f = gt(n) === "Home", v = gt(n) === "End", m = gt(n) === "Enter", b = gt(n) === "Spacebar";
  if (n.altKey || n.ctrlKey || n.metaKey || l || c || d || h || f || v || m)
    return -1;
  var I = !b && n.key.length === 1;
  if (I) {
    En(n);
    var E = {
      focusItemAtIndex: a,
      focusedItemIndex: i,
      nextChar: n.key.toLowerCase(),
      sortedIndexByFirstChar: o,
      skipFocus: !1,
      isItemAtIndexDisabled: u
    };
    return ws(E, e);
  }
  if (!b)
    return -1;
  r && En(n);
  var S = r && Zc(e);
  if (S) {
    var E = {
      focusItemAtIndex: a,
      focusedItemIndex: i,
      nextChar: " ",
      sortedIndexByFirstChar: o,
      skipFocus: !1,
      isItemAtIndexDisabled: u
    };
    return ws(E, e);
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
function iu(t) {
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
      var r = t.call(this, de(de({}, e.defaultAdapter), n)) || this;
      return r.wrapFocus = !1, r.isVertical = !0, r.isSingleSelectionList = !1, r.areDisabledItemsFocusable = !0, r.selectedIndex = _t.UNSET_INDEX, r.focusedItemIndex = _t.UNSET_INDEX, r.useActivatedClass = !1, r.useSelectedAttr = !1, r.ariaCurrentAttrValue = null, r.isCheckboxList = !1, r.isRadioList = !1, r.lastSelectedIndex = null, r.hasTypeahead = !1, r.typeaheadState = Cm(), r.sortedIndexByFirstChar = /* @__PURE__ */ new Map(), r;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return vr;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return qe;
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
        var r = this.adapter.listItemAtIndexHasClass(n, qe.LIST_ITEM_ACTIVATED_CLASS);
        r && this.setUseActivatedClass(!0), this.isSingleSelectionList = !0, this.selectedIndex = n;
      }
    }, e.prototype.getSelectedIndexFromDOM = function() {
      for (var n = _t.UNSET_INDEX, r = this.adapter.getListItemCount(), i = 0; i < r; i++) {
        var a = this.adapter.listItemAtIndexHasClass(i, qe.LIST_ITEM_SELECTED_CLASS), o = this.adapter.listItemAtIndexHasClass(i, qe.LIST_ITEM_ACTIVATED_CLASS);
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
      return this.adapter.listItemAtIndexHasClass(n, qe.LIST_ITEM_DISABLED_CLASS);
    }, e.prototype.handleKeydown = function(n, r, i) {
      var a = this, o, u = gt(n) === "ArrowLeft", l = gt(n) === "ArrowUp", c = gt(n) === "ArrowRight", d = gt(n) === "ArrowDown", h = gt(n) === "Home", f = gt(n) === "End", v = gt(n) === "Enter", m = gt(n) === "Spacebar", b = this.isVertical && d || !this.isVertical && c, I = this.isVertical && l || !this.isVertical && u, E = n.key === "A" || n.key === "a", S = iu(n);
      if (this.adapter.isRootFocused()) {
        if ((I || f) && S([]))
          n.preventDefault(), this.focusLastElement();
        else if ((b || h) && S([]))
          n.preventDefault(), this.focusFirstElement();
        else if (I && S(["Shift"]) && this.isCheckboxList) {
          n.preventDefault();
          var x = this.focusLastElement();
          x !== -1 && this.setSelectedIndexOnAction(x, !1);
        } else if (b && S(["Shift"]) && this.isCheckboxList) {
          n.preventDefault();
          var x = this.focusFirstElement();
          x !== -1 && this.setSelectedIndexOnAction(x, !1);
        }
        if (this.hasTypeahead) {
          var g = {
            event: n,
            focusItemAtIndex: function(T) {
              a.focusItemAtIndex(T);
            },
            focusedItemIndex: -1,
            isTargetListItem: r,
            sortedIndexByFirstChar: this.sortedIndexByFirstChar,
            isItemAtIndexDisabled: function(T) {
              return a.isIndexDisabled(T);
            }
          };
          ru(g, this.typeaheadState);
        }
        return;
      }
      var _ = this.adapter.getFocusedElementIndex();
      if (!(_ === -1 && (_ = i, _ < 0))) {
        if (b && S([]))
          En(n), this.focusNextElement(_);
        else if (I && S([]))
          En(n), this.focusPrevElement(_);
        else if (b && S(["Shift"]) && this.isCheckboxList) {
          En(n);
          var x = this.focusNextElement(_);
          x !== -1 && this.setSelectedIndexOnAction(x, !1);
        } else if (I && S(["Shift"]) && this.isCheckboxList) {
          En(n);
          var x = this.focusPrevElement(_);
          x !== -1 && this.setSelectedIndexOnAction(x, !1);
        } else if (h && S([]))
          En(n), this.focusFirstElement();
        else if (f && S([]))
          En(n), this.focusLastElement();
        else if (h && S(["Control", "Shift"]) && this.isCheckboxList) {
          if (En(n), this.isIndexDisabled(_))
            return;
          this.focusFirstElement(), this.toggleCheckboxRange(0, _, _);
        } else if (f && S(["Control", "Shift"]) && this.isCheckboxList) {
          if (En(n), this.isIndexDisabled(_))
            return;
          this.focusLastElement(), this.toggleCheckboxRange(_, this.adapter.getListItemCount() - 1, _);
        } else if (E && S(["Control"]) && this.isCheckboxList)
          n.preventDefault(), this.checkboxListToggleAll(this.selectedIndex === _t.UNSET_INDEX ? [] : this.selectedIndex, !0);
        else if ((v || m) && S([])) {
          if (r) {
            var C = n.target;
            if (C && C.tagName === "A" && v || (En(n), this.isIndexDisabled(_)))
              return;
            this.isTypeaheadInProgress() || (this.isSelectableList() && this.setSelectedIndexOnAction(_, !1), this.adapter.notifyAction(_));
          }
        } else if ((v || m) && S(["Shift"]) && this.isCheckboxList) {
          var C = n.target;
          if (C && C.tagName === "A" && v || (En(n), this.isIndexDisabled(_)))
            return;
          this.isTypeaheadInProgress() || (this.toggleCheckboxRange((o = this.lastSelectedIndex) !== null && o !== void 0 ? o : _, _, _), this.adapter.notifyAction(_));
        }
        if (this.hasTypeahead) {
          var g = {
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
          ru(g, this.typeaheadState);
        }
      }
    }, e.prototype.handleClick = function(n, r, i) {
      var a, o = iu(i);
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
      this.isIndexValid(n, !1) && (r ? (this.adapter.removeClassForElementIndex(n, qe.LIST_ITEM_DISABLED_CLASS), this.adapter.setAttributeForElementIndex(n, vr.ARIA_DISABLED, "false")) : (this.adapter.addClassForElementIndex(n, qe.LIST_ITEM_DISABLED_CLASS), this.adapter.setAttributeForElementIndex(n, vr.ARIA_DISABLED, "true")));
    }, e.prototype.setSingleSelectionAtIndex = function(n, r) {
      if (r === void 0 && (r = {}), !(this.selectedIndex === n && !r.forceUpdate)) {
        var i = qe.LIST_ITEM_SELECTED_CLASS;
        this.useActivatedClass && (i = qe.LIST_ITEM_ACTIVATED_CLASS), this.selectedIndex !== _t.UNSET_INDEX && this.adapter.removeClassForElementIndex(this.selectedIndex, i), this.setAriaForSingleSelectionAtIndex(n), this.setTabindexAtIndex(n), n !== _t.UNSET_INDEX && this.adapter.addClassForElementIndex(n, i), this.selectedIndex = n, r.isUserInteraction && !r.forceUpdate && this.adapter.notifySelectionChange([n]);
      }
    }, e.prototype.setAriaForSingleSelectionAtIndex = function(n) {
      this.selectedIndex === _t.UNSET_INDEX && (this.ariaCurrentAttrValue = this.adapter.getAttributeForElementIndex(n, vr.ARIA_CURRENT));
      var r = this.ariaCurrentAttrValue !== null, i = r ? vr.ARIA_CURRENT : vr.ARIA_SELECTED;
      if (this.selectedIndex !== _t.UNSET_INDEX && this.adapter.setAttributeForElementIndex(this.selectedIndex, i, "false"), n !== _t.UNSET_INDEX) {
        var a = r ? this.ariaCurrentAttrValue : "true";
        this.adapter.setAttributeForElementIndex(n, i, a);
      }
    }, e.prototype.getSelectionAttribute = function() {
      return this.useSelectedAttr ? vr.ARIA_SELECTED : vr.ARIA_CHECKED;
    }, e.prototype.setRadioAtIndex = function(n, r) {
      r === void 0 && (r = {});
      var i = this.getSelectionAttribute();
      this.adapter.setCheckedCheckboxOrRadioAtIndex(n, !0), !(this.selectedIndex === n && !r.forceUpdate) && (this.selectedIndex !== _t.UNSET_INDEX && this.adapter.setAttributeForElementIndex(this.selectedIndex, i, "false"), this.adapter.setAttributeForElementIndex(n, i, "true"), this.selectedIndex = n, r.isUserInteraction && !r.forceUpdate && this.adapter.notifySelectionChange([n]));
    }, e.prototype.setCheckboxAtIndex = function(n, r) {
      r === void 0 && (r = {});
      for (var i = this.selectedIndex, a = r.isUserInteraction ? new Set(i === _t.UNSET_INDEX ? [] : i) : null, o = this.getSelectionAttribute(), u = [], l = 0; l < this.adapter.getListItemCount(); l++) {
        var c = a == null ? void 0 : a.has(l), d = n.indexOf(l) >= 0;
        d !== c && u.push(l), this.adapter.setCheckedCheckboxOrRadioAtIndex(l, d), this.adapter.setAttributeForElementIndex(l, o, d ? "true" : "false");
      }
      this.selectedIndex = n, r.isUserInteraction && u.length && this.adapter.notifySelectionChange(u);
    }, e.prototype.toggleCheckboxRange = function(n, r, i) {
      this.lastSelectedIndex = i;
      for (var a = new Set(this.selectedIndex === _t.UNSET_INDEX ? [] : this.selectedIndex), o = !(a != null && a.has(i)), u = wr([n, r].sort(), 2), l = u[0], c = u[1], d = this.getSelectionAttribute(), h = [], f = l; f <= c; f++)
        if (!this.isIndexDisabled(f)) {
          var v = a.has(f);
          o !== v && (h.push(f), this.adapter.setCheckedCheckboxOrRadioAtIndex(f, o), this.adapter.setAttributeForElementIndex(f, d, "" + o), o ? a.add(f) : a.delete(f));
        }
      h.length && (this.selectedIndex = Kn([], wr(a)), this.adapter.notifySelectionChange(h));
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
      var u = this.selectedIndex === _t.UNSET_INDEX ? [] : this.selectedIndex.slice();
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
      return ws(o, this.typeaheadState);
    }, e.prototype.typeaheadInitSortedIndex = function() {
      return Sm(this.adapter.getListItemCount(), this.adapter.getPrimaryTextAtIndex);
    }, e.prototype.clearTypeaheadBuffer = function() {
      Qc(this.typeaheadState);
    }, e;
  }(Nt)
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
      var r = t.call(this, de(de({}, e.defaultAdapter), n)) || this;
      return r.isSurfaceOpen = !1, r.isQuickOpen = !1, r.isHoistedElement = !1, r.isFixedPosition = !1, r.isHorizontallyCenteredOnViewport = !1, r.maxHeight = 0, r.openBottomBias = 0, r.openAnimationEndTimerId = 0, r.closeAnimationEndTimerId = 0, r.animationRequestId = 0, r.anchorCorner = ii.TOP_START, r.originCorner = ii.TOP_START, r.anchorMargin = { top: 0, right: 0, bottom: 0, left: 0 }, r.position = { x: 0, y: 0 }, r;
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
        return ii;
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
      var r = this.getoriginCorner(), i = this.getMenuSurfaceMaxHeight(r), a = this.hasBit(r, At.BOTTOM) ? "bottom" : "top", o = this.hasBit(r, At.RIGHT) ? "right" : "left", u = this.getHorizontalOriginOffset(r), l = this.getVerticalOriginOffset(r), c = this.measurements, d = c.anchorSize, h = c.surfaceSize, f = (n = {}, n[o] = u, n[a] = l, n);
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
      var n = this.originCorner, r = this.measurements, i = r.viewportDistance, a = r.anchorSize, o = r.surfaceSize, u = e.numbers.MARGIN_TO_EDGE, l = this.hasBit(this.anchorCorner, At.BOTTOM), c, d;
      l ? (c = i.top - u + this.anchorMargin.bottom, d = i.bottom - u - this.anchorMargin.bottom) : (c = i.top - u + this.anchorMargin.top, d = i.bottom - u + a.height - this.anchorMargin.top);
      var h = d - o.height > 0;
      !h && c > d + this.openBottomBias && (n = this.setBit(n, At.BOTTOM));
      var f = this.adapter.isRtl(), v = this.hasBit(this.anchorCorner, At.FLIP_RTL), m = this.hasBit(this.anchorCorner, At.RIGHT) || this.hasBit(n, At.RIGHT), b = !1;
      f && v ? b = !m : b = m;
      var I, E;
      b ? (I = i.left + a.width + this.anchorMargin.right, E = i.right - this.anchorMargin.right) : (I = i.left + this.anchorMargin.left, E = i.right + a.width - this.anchorMargin.left);
      var S = I - o.width > 0, x = E - o.width > 0, g = this.hasBit(n, At.FLIP_RTL) && this.hasBit(n, At.RIGHT);
      return x && g && f || !S && g ? n = this.unsetBit(n, At.RIGHT) : (S && b && f || S && !b && m || !x && I >= E) && (n = this.setBit(n, At.RIGHT)), n;
    }, e.prototype.getMenuSurfaceMaxHeight = function(n) {
      if (this.maxHeight > 0)
        return this.maxHeight;
      var r = this.measurements.viewportDistance, i = 0, a = this.hasBit(n, At.BOTTOM), o = this.hasBit(this.anchorCorner, At.BOTTOM), u = e.numbers.MARGIN_TO_EDGE;
      return a ? (i = r.top + this.anchorMargin.top - u, o || (i += this.measurements.anchorSize.height)) : (i = r.bottom - this.anchorMargin.bottom + this.measurements.anchorSize.height - u, o && (i -= this.measurements.anchorSize.height)), i;
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
      var r, i, a = this.measurements, o = a.windowScroll, u = a.viewportDistance, l = a.surfaceSize, c = a.viewportSize, d = Object.keys(n);
      try {
        for (var h = wt(d), f = h.next(); !f.done; f = h.next()) {
          var v = f.value, m = n[v] || 0;
          if (this.isHorizontallyCenteredOnViewport && (v === "left" || v === "right")) {
            n[v] = (c.width - l.width) / 2;
            continue;
          }
          m += u[v], this.isFixedPosition || (v === "top" ? m += o.y : v === "bottom" ? m -= o.y : v === "left" ? m += o.x : m -= o.x), n[v] = m;
        }
      } catch (b) {
        r = { error: b };
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
  }(Nt)
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
function Rm(t) {
  return !!t.document && typeof t.document.createElement == "function";
}
function Mm(t, e) {
  if (Rm(t) && e in au) {
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
}, Ei = {
  ARIA_CHECKED_ATTR: "aria-checked",
  ARIA_DISABLED_ATTR: "aria-disabled",
  CHECKBOX_SELECTOR: 'input[type="checkbox"]',
  LIST_SELECTOR: ".mdc-list,.mdc-deprecated-list",
  SELECTED_EVENT: "MDCMenu:selected",
  SKIP_RESTORE_FOCUS: "data-menu-item-skip-restore-focus"
}, Dm = {
  FOCUS_ROOT_INDEX: -1
}, Si;
(function(t) {
  t[t.NONE = 0] = "NONE", t[t.LIST_ROOT = 1] = "LIST_ROOT", t[t.FIRST_ITEM = 2] = "FIRST_ITEM", t[t.LAST_ITEM = 3] = "LAST_ITEM";
})(Si || (Si = {}));
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
      var r = t.call(this, de(de({}, e.defaultAdapter), n)) || this;
      return r.closeAnimationEndTimerId = 0, r.defaultFocusState = Si.LIST_ROOT, r.selectedIndex = -1, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Ni;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Ei;
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
        var a = this.adapter.getAttributeFromElementAtIndex(i, Ei.SKIP_RESTORE_FOCUS) === "true";
        this.adapter.closeSurface(a), this.closeAnimationEndTimerId = setTimeout(function() {
          var o = r.adapter.getElementIndex(n);
          o >= 0 && r.adapter.isSelectableItemAtIndex(o) && r.setSelectedIndex(o);
        }, Jc.numbers.TRANSITION_CLOSE_DURATION);
      }
    }, e.prototype.handleMenuSurfaceOpened = function() {
      switch (this.defaultFocusState) {
        case Si.FIRST_ITEM:
          this.adapter.focusItemAtIndex(0);
          break;
        case Si.LAST_ITEM:
          this.adapter.focusItemAtIndex(this.adapter.getMenuItemCount() - 1);
          break;
        case Si.NONE:
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
      r >= 0 && (this.adapter.removeAttributeFromElementAtIndex(r, Ei.ARIA_CHECKED_ATTR), this.adapter.removeClassFromElementAtIndex(r, Ni.MENU_SELECTED_LIST_ITEM)), this.adapter.addClassToElementAtIndex(n, Ni.MENU_SELECTED_LIST_ITEM), this.adapter.addAttributeToElementAtIndex(n, Ei.ARIA_CHECKED_ATTR, "true"), this.selectedIndex = n;
    }, e.prototype.setEnabled = function(n, r) {
      this.validatedIndex(n), r ? (this.adapter.removeClassFromElementAtIndex(n, qe.LIST_ITEM_DISABLED_CLASS), this.adapter.addAttributeToElementAtIndex(n, Ei.ARIA_DISABLED_ATTR, "false")) : (this.adapter.addClassToElementAtIndex(n, qe.LIST_ITEM_DISABLED_CLASS), this.adapter.addAttributeToElementAtIndex(n, Ei.ARIA_DISABLED_ATTR, "true"));
    }, e.prototype.validatedIndex = function(n) {
      var r = this.adapter.getMenuItemCount(), i = n >= 0 && n < r;
      if (!i)
        throw new Error("MDCMenuFoundation: No list item at specified index.");
    }, e;
  }(Nt)
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
      var i = t.call(this, de(de({}, e.defaultAdapter), n)) || this;
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
        var r = gt(n) === Me.ENTER, i = gt(n) === Me.SPACEBAR, a = gt(n) === Me.ARROW_UP, o = gt(n) === Me.ARROW_DOWN, u = n.ctrlKey || n.metaKey;
        if (!u && (!i && n.key && n.key.length === 1 || i && this.adapter.isTypeaheadInProgress())) {
          var l = i ? " " : n.key, c = this.adapter.typeaheadMatchItem(l, this.getSelectedIndex());
          c >= 0 && this.setSelectedIndex(c), n.preventDefault();
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
      n && (this.adapter.setMenuAnchorElement(n), this.adapter.setMenuAnchorCorner(ii.BOTTOM_START)), this.adapter.setMenuWrapFocus(!1), this.setDisabled(this.adapter.hasClass(mt.DISABLED)), this.syncHelperTextValidity(!this.adapter.hasClass(mt.INVALID)), this.layout(), this.layoutOptions();
    }, e.prototype.blur = function() {
      this.adapter.removeClass(mt.FOCUSED), this.layout(), this.adapter.deactivateBottomLine();
      var n = this.adapter.hasClass(mt.REQUIRED);
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
      }, zr.CLICK_DEBOUNCE_TIMEOUT_MS), this.recentlyClicked = !0;
    }, e;
  }(Nt)
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
      return t.call(this, de(de({}, e.defaultAdapter), n)) || this;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return er;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Kr;
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
      return this.adapter.getAttr(Kr.ARIA_HIDDEN) !== "true";
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
          this.showToScreenReader(), n ? this.adapter.removeAttr(Kr.ROLE) : this.adapter.setAttr(Kr.ROLE, "alert");
          return;
        }
        this.adapter.removeAttr(Kr.ROLE), this.hide();
      }
    }, e.prototype.showToScreenReader = function() {
      this.adapter.removeAttr(Kr.ARIA_HIDDEN);
    }, e.prototype.hide = function() {
      this.adapter.setAttr(Kr.ARIA_HIDDEN, "true");
    }, e;
  }(Nt)
), Hm = /* @__PURE__ */ ve("<div><!></div>");
function Fm(t, e) {
  Oe(e, !0);
  let n = p(e, "use", 19, () => []), r = p(e, "class", 3, ""), i = p(e, "style", 3, ""), a = p(e, "static", 3, !1), o = p(e, "anchor", 3, !0), u = p(e, "fixed", 3, !1), l = p(e, "open", 31, () => ye(a())), c = p(e, "managed", 3, !1), d = p(e, "fullWidth", 3, !1), h = p(e, "quickOpen", 3, !1), f = p(e, "anchorElement", 15), v = p(e, "anchorMargin", 19, () => ({ top: 0, right: 0, bottom: 0, left: 0 })), m = p(e, "maxHeight", 3, 0), b = p(e, "horizontallyCenteredOnViewport", 3, !1), I = p(e, "openBottomBias", 3, 0), E = p(e, "neverRestoreFocus", 3, !1), S = /* @__PURE__ */ ze(e, [
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
  ]), x, g = /* @__PURE__ */ be(void 0), _ = ye({}), C = ye({}), T = /* @__PURE__ */ be(void 0);
  ee("SMUI:list:role", "menu"), ee("SMUI:list:item:role", "menuitem"), Te(() => {
    var V, re;
    x && o() && !((V = x.parentElement) != null && V.classList.contains("mdc-menu-surface--anchor")) && ((re = x.parentElement) == null || re.classList.add("mdc-menu-surface--anchor"), f(x.parentElement ?? void 0));
  }), Te(() => {
    s(g) && s(g).isOpen() !== l() && (l() ? s(g).open() : s(g).close());
  }), Te(() => {
    s(g) && s(g).setQuickOpen(h());
  }), Te(() => {
    s(g) && s(g).setFixedPosition(u());
  }), Te(() => {
    s(g) && s(g).setMaxHeight(m());
  }), Te(() => {
    s(g) && s(g).setIsHorizontallyCenteredOnViewport(b());
  });
  const A = ii;
  Te(() => {
    s(g) && e.anchorCorner != null && (typeof e.anchorCorner == "string" ? s(g).setAnchorCorner(A[e.anchorCorner]) : s(g).setAnchorCorner(e.anchorCorner));
  }), Te(() => {
    s(g) && s(g).setAnchorMargin(v());
  }), Te(() => {
    s(g) && s(g).setOpenBottomBias(I());
  });
  const w = le("SMUI:menu-surface:mount"), U = le("SMUI:menu-surface:unmount");
  st(() => {
    Q(
      g,
      new Jc({
        addClass: H,
        removeClass: B,
        hasClass: K,
        hasAnchor: () => !!f(),
        notifyClose: () => {
          c() || l(a()), l() || We(L(), "SMUIMenuSurfaceClosed");
        },
        notifyClosing: () => {
          c() || l(a()), l() || We(L(), "SMUIMenuSurfaceClosing");
        },
        notifyOpen: () => {
          c() || l(!0), l() && We(L(), "SMUIMenuSurfaceOpened");
        },
        notifyOpening: () => {
          l() || We(L(), "SMUIMenuSurfaceOpening");
        },
        isElementInContainer: (re) => L().contains(re),
        isRtl: () => getComputedStyle(L()).getPropertyValue("direction") === "rtl",
        setTransformOrigin: (re) => {
          C["transform-origin"] = re;
        },
        isFocused: () => document.activeElement === L(),
        saveFocus: () => {
          Q(T, document.activeElement ?? void 0, !0);
        },
        restoreFocus: () => {
          !E() && (!x || L().contains(document.activeElement)) && s(T) && document.contains(s(T)) && "focus" in s(T) && s(T).focus();
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
        setPosition: (re) => {
          C.left = "left" in re ? `${re.left}px` : "", C.right = "right" in re ? `${re.right}px` : "", C.top = "top" in re ? `${re.top}px` : "", C.bottom = "bottom" in re ? `${re.bottom}px` : "";
        },
        setMaxHeight: (re) => {
          C["max-height"] = re;
        }
      }),
      !0
    );
    const V = {
      get open() {
        return l();
      },
      set open(re) {
        l(re);
      },
      closeProgrammatic: _e
    };
    return w && w(V), s(g).init(), () => {
      var X, fe;
      U && U(V);
      const re = s(g).isHoistedElement;
      (X = s(g)) == null || X.destroy(), re && ((fe = L().parentNode) == null || fe.removeChild(L()));
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
  function B(V) {
    (!(V in _) || _[V]) && (_[V] = !1);
  }
  function _e(V) {
    var re;
    (re = s(g)) == null || re.close(V), l(!1);
  }
  function k(V) {
    s(g) && l() && !c() && s(g).handleBodyClick(V);
  }
  function F() {
    return l();
  }
  function D(V) {
    l(V);
  }
  function G(V, re) {
    if (s(g) == null)
      throw new Error("Instance is not defined.");
    return s(g).setAbsolutePosition(V, re);
  }
  function te(V) {
    if (s(g) == null)
      throw new Error("Instance is not defined.");
    return s(g).setIsHoisted(V);
  }
  function P() {
    if (s(g) == null)
      throw new Error("Instance is not defined.");
    return s(g).isFixed();
  }
  function y() {
    if (s(g) == null)
      throw new Error("Instance is not defined.");
    return s(g).flipCornerHorizontally();
  }
  function L() {
    return x;
  }
  var ne = {
    isOpen: F,
    setOpen: D,
    setAbsolutePosition: G,
    setIsHoisted: te,
    isFixed: P,
    flipCornerHorizontally: y,
    getElement: L
  }, N = Hm();
  gs("click", Xu.body, k, !0);
  var q = (V) => {
    var re;
    s(g) && !c() && s(g).handleKeydown(V), (re = e.onkeydown) == null || re.call(e, V);
  };
  Be(
    N,
    (V, re) => ({
      class: V,
      style: re,
      role: "dialog",
      ...S,
      onkeydown: q
    }),
    [
      () => Ue({
        "mdc-menu-surface": !0,
        "mdc-menu-surface--fixed": u(),
        "mdc-menu-surface--open": a(),
        "smui-menu-surface--static": a(),
        "mdc-menu-surface--fullwidth": d(),
        ..._,
        [r()]: !0
      }),
      () => Object.entries(C).map(([V, re]) => `${V}: ${re};`).concat([i()]).join(" ")
    ]
  );
  var pe = Ie(N);
  return Ae(pe, () => e.children ?? ge), we(N, (V) => x = V, () => x), Fe(N, (V, re) => z == null ? void 0 : z(V, re), n), O(t, N), Re(ne);
}
function ns(t, { addClass: e = (r) => t.classList.add(r), removeClass: n = (r) => t.classList.remove(r) } = {}) {
  return e("mdc-menu-surface--anchor"), {
    destroy() {
      n("mdc-menu-surface--anchor");
    }
  };
}
function Bm(t, e) {
  Oe(e, !0);
  const { closest: n } = Po;
  let r = p(e, "use", 19, () => []), i = p(e, "class", 3, ""), a = p(e, "open", 15, !1), o = p(e, "anchorElement", 15), u = p(e, "managed", 3, !1), l = /* @__PURE__ */ ze(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "open",
    "anchorElement",
    "managed",
    "children"
  ]), c, d = /* @__PURE__ */ be(void 0), h = /* @__PURE__ */ be(void 0), f = /* @__PURE__ */ be(void 0);
  ee("SMUI:menu-surface:mount", (A) => {
    s(h) || Q(h, A, !0);
  });
  const v = le("SMUI:list:mount");
  ee("SMUI:list:mount", (A) => {
    s(f) || Q(f, A, !0), v && v(A);
  });
  const m = le("SMUI:menu:mount"), b = le("SMUI:menu:unmount");
  st(() => (Q(
    d,
    new Pm({
      addClassToElementAtIndex: (A, w) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        s(f).addClassForElementIndex(A, w);
      },
      removeClassFromElementAtIndex: (A, w) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        s(f).removeClassForElementIndex(A, w);
      },
      addAttributeToElementAtIndex: (A, w, U) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        s(f).setAttributeForElementIndex(A, w, U);
      },
      removeAttributeFromElementAtIndex: (A, w) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        s(f).removeAttributeForElementIndex(A, w);
      },
      getAttributeFromElementAtIndex: (A, w) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        return s(f).getAttributeFromElementIndex(A, w);
      },
      elementContainsClass: (A, w) => A.classList.contains(w),
      closeSurface: (A) => {
        var w;
        u() || ((w = s(h)) == null || w.closeProgrammatic(A), We(C(), "SMUIMenuClosedProgrammatically"));
      },
      getElementIndex: (A) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        return s(f).getOrderedList().map((w) => w.element).indexOf(A);
      },
      notifySelected: (A) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        We(C(), "SMUIMenuSelected", {
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
        const w = s(f).getOrderedList(), U = n(w[A].element, `.${Ni.MENU_SELECTION_GROUP}`), K = U == null ? void 0 : U.querySelector(`.${Ni.MENU_SELECTED_LIST_ITEM}`);
        return K ? w.map((H) => H.element).indexOf(K) : -1;
      }
    }),
    !0
  ), m && m(s(d)), s(d).init(), () => {
    var A;
    b && s(d) && b(s(d)), (A = s(d)) == null || A.destroy();
  }));
  function I(A) {
    s(d) && s(d).handleKeydown(A);
  }
  function E() {
    return a();
  }
  function S(A) {
    a(A);
  }
  function x(A) {
    if (s(d) == null)
      throw new Error("Instance is undefined.");
    s(d).setDefaultFocusState(A);
  }
  function g() {
    if (s(d) == null)
      throw new Error("Instance is undefined.");
    return s(d).getSelectedIndex();
  }
  function _() {
    return c;
  }
  function C() {
    return c.getElement();
  }
  var T = {
    isOpen: E,
    setOpen: S,
    setDefaultFocusState: x,
    getSelectedIndex: g,
    getMenuSurface: _,
    getElement: C
  };
  {
    let A = /* @__PURE__ */ se(() => Ue({ "mdc-menu": !0, [i()]: !0 }));
    we(
      Fm(t, it(
        {
          get use() {
            return r();
          },
          get class() {
            return s(A);
          },
          get managed() {
            return u();
          }
        },
        () => l,
        {
          onkeydown: (w) => {
            var U;
            I(w), (U = e.onkeydown) == null || U.call(e, w);
          },
          onSMUIMenuSurfaceOpened: (w) => {
            var U;
            s(d) && s(d).handleMenuSurfaceOpened(), (U = e.onSMUIMenuSurfaceOpened) == null || U.call(e, w);
          },
          onSMUIListAction: (w) => {
            var U;
            s(d) && s(f) && s(d).handleItemAction(s(f).getOrderedList()[w.detail.index].element), (U = e.onSMUIListAction) == null || U.call(e, w);
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
          children: (w, U) => {
            var K = ie(), H = Z(K);
            Ae(H, () => e.children ?? ge), O(w, K);
          },
          $$slots: { default: !0 }
        }
      )),
      (w) => c = w,
      () => c
    );
  }
  return Re(T);
}
function km(t, e) {
  Oe(e, !0);
  const { closest: n, matches: r } = Po;
  let i = le("SMUI:list:nav"), a = p(e, "use", 19, () => []), o = p(e, "class", 3, ""), u = p(e, "nonInteractive", 3, !1), l = p(e, "dense", 3, !1), c = p(e, "textualList", 3, !1), d = p(e, "avatarList", 3, !1), h = p(e, "iconList", 3, !1), f = p(e, "imageList", 3, !1), v = p(e, "thumbnailList", 3, !1), m = p(e, "videoList", 3, !1), b = p(e, "twoLine", 3, !1), I = p(e, "threeLine", 3, !1), E = p(e, "vertical", 3, !0), S = p(e, "wrapFocus", 19, () => le("SMUI:list:wrapFocus") ?? !1), x = p(e, "singleSelection", 3, !1), g = p(e, "disabledItemsFocusable", 3, !1), _ = p(e, "selectedIndex", 31, () => -1), C = p(e, "radioList", 3, !1), T = p(e, "checkList", 3, !1), A = p(e, "hasTypeahead", 3, !1), w = p(e, "component", 3, Hr), U = p(e, "tag", 3, i ? "nav" : "ul"), K = /* @__PURE__ */ ze(e, [
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
  ]), H, B = /* @__PURE__ */ be(void 0), _e = [], k = le("SMUI:list:role");
  const F = /* @__PURE__ */ new WeakMap();
  let D = le("SMUI:dialog:selection"), G = le("SMUI:addLayoutListener"), te;
  ee("SMUI:list:nonInteractive", u()), ee("SMUI:separator:context", "list"), k || (x() ? (k = "listbox", ee("SMUI:list:item:role", "option")) : C() ? (k = "radiogroup", ee("SMUI:list:item:role", "radio")) : T() ? (k = "group", ee("SMUI:list:item:role", "checkbox")) : (k = "list", ee("SMUI:list:item:role", void 0))), Te(() => {
    s(B) && s(B).setVerticalOrientation(E());
  }), Te(() => {
    s(B) && s(B).setWrapFocus(S());
  }), Te(() => {
    s(B) && s(B).setHasTypeahead(A());
  }), Te(() => {
    s(B) && s(B).setSingleSelection(x());
  }), Te(() => {
    s(B) && s(B).setDisabledItemsFocusable(g());
  }), Te(() => {
    s(B) && x() && M() !== _() && s(B).setSelectedIndex(_());
  }), G && (te = G(oe)), ee("SMUI:list:item:mount", (ce) => {
    _e.push(ce), F.set(ce.element, ce), x() && ce.selected && _(Le(ce.element));
  }), ee("SMUI:list:item:unmount", (ce) => {
    const me = (ce && _e.findIndex((W) => W === ce)) ?? -1;
    me !== -1 && (_e.splice(me, 1), F.delete(ce.element));
  });
  const P = le("SMUI:list:mount"), y = le("SMUI:list:unmount");
  st(() => {
    Q(
      B,
      new Om({
        addClassForElementIndex: X,
        focusItemAtIndex: $,
        getAttributeForElementIndex: (me, W) => {
          var Y;
          return ((Y = V()[me]) == null ? void 0 : Y.getAttr(W)) ?? null;
        },
        getFocusedElementIndex: () => document.activeElement ? V().map((me) => me.element).indexOf(document.activeElement) : -1,
        getListItemCount: () => _e.length,
        getPrimaryTextAtIndex: ke,
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
        listItemAtIndexHasClass: re,
        notifyAction: (me) => {
          _(me), H != null && We(Ce(), "SMUIListAction", { index: me });
        },
        notifySelectionChange: (me) => {
          H != null && We(Ce(), "SMUIListSelectionChange", { changedIndices: me });
        },
        removeClassForElementIndex: fe,
        setAttributeForElementIndex: ae,
        setCheckedCheckboxOrRadioAtIndex: (me, W) => {
          V()[me].checked = W;
        },
        setTabIndexForListItemChildren: (me, W) => {
          const Y = V()[me];
          Array.prototype.forEach.call(Y.element.querySelectorAll("button:not(:disabled), a"), (et) => {
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
        if (!s(B))
          throw new Error("Instance is undefined.");
        return s(B).isTypeaheadInProgress();
      },
      typeaheadMatchItem(me, W) {
        if (!s(B))
          throw new Error("Instance is undefined.");
        return s(B).typeaheadMatchItem(
          me,
          W,
          /** skipFocus */
          !0
        );
      },
      getOrderedList: V,
      focusItemAtIndex: $,
      addClassForElementIndex: X,
      removeClassForElementIndex: fe,
      setAttributeForElementIndex: ae,
      removeAttributeForElementIndex: Qe,
      getAttributeFromElementIndex: Ze,
      getPrimaryTextAtIndex: ke
    };
    return P && P(ce), s(B).init(), s(B).layout(), () => {
      var me;
      y && y(ce), (me = s(B)) == null || me.destroy();
    };
  }), Hn(() => {
    te && te();
  });
  function L(ce) {
    s(B) && ce.target && s(B).handleKeydown(ce, ce.target.classList.contains("mdc-deprecated-list-item"), Le(ce.target));
  }
  function ne(ce) {
    s(B) && ce.target && s(B).handleFocusIn(Le(ce.target));
  }
  function N(ce) {
    s(B) && ce.target && s(B).handleFocusOut(Le(ce.target));
  }
  function q(ce) {
    s(B) && ce.target && s(B).handleClick(Le(ce.target), !r(ce.target, 'input[type="checkbox"], input[type="radio"]'), ce);
  }
  function pe(ce) {
    if (C() || T()) {
      const me = Le(ce.target);
      if (me !== -1) {
        const W = V()[me];
        W && (C() && !W.checked || T()) && (r(ce.detail.target, 'input[type="checkbox"], input[type="radio"]') || (W.checked = !W.checked), W.activateRipple(), window.requestAnimationFrame(() => {
          W.deactivateRipple();
        }));
      }
    }
  }
  function V() {
    return H == null ? [] : [...Ce().children].map((ce) => F.get(ce)).filter((ce) => ce && ce._smui_list_item_accessor);
  }
  function re(ce, me) {
    const W = V()[ce];
    return (W && W.hasClass(me)) ?? !1;
  }
  function X(ce, me) {
    const W = V()[ce];
    W && W.addClass(me);
  }
  function fe(ce, me) {
    const W = V()[ce];
    W && W.removeClass(me);
  }
  function ae(ce, me, W) {
    const Y = V()[ce];
    Y && Y.addAttr(me, W);
  }
  function Qe(ce, me) {
    const W = V()[ce];
    W && W.removeAttr(me);
  }
  function Ze(ce, me) {
    const W = V()[ce];
    return W ? W.getAttr(me) : null;
  }
  function ke(ce) {
    const me = V()[ce];
    return (me && me.getPrimaryText()) ?? "";
  }
  function Le(ce) {
    const me = n(ce, ".mdc-deprecated-list-item, .mdc-deprecated-list");
    return me && r(me, ".mdc-deprecated-list-item") ? V().map((W) => W == null ? void 0 : W.element).indexOf(me) : -1;
  }
  function oe() {
    if (!s(B))
      throw new Error("Instance is undefined.");
    return s(B).layout();
  }
  function Se(ce, me) {
    if (!s(B))
      throw new Error("Instance is undefined.");
    return s(B).setEnabled(ce, me);
  }
  function Ne() {
    if (!s(B))
      throw new Error("Instance is undefined.");
    return s(B).isTypeaheadInProgress();
  }
  function M() {
    if (!s(B))
      throw new Error("Instance is undefined.");
    return s(B).getSelectedIndex();
  }
  function j() {
    if (!s(B))
      throw new Error("Instance is undefined.");
    return s(B).getFocusedItemIndex();
  }
  function $(ce) {
    const me = V()[ce];
    me && "focus" in me.element && me.element.focus();
  }
  function Ce() {
    return H.getElement();
  }
  var Ut = {
    layout: oe,
    setEnabled: Se,
    getTypeaheadInProgress: Ne,
    getSelectedIndex: M,
    getFocusedItemIndex: j,
    focusItemAtIndex: $,
    getElement: Ce
  }, kt = ie(), Rn = Z(kt);
  {
    let ce = /* @__PURE__ */ se(() => Ue({
      "mdc-deprecated-list": !0,
      "mdc-deprecated-list--non-interactive": u(),
      "mdc-deprecated-list--dense": l(),
      "mdc-deprecated-list--textual-list": c(),
      "mdc-deprecated-list--avatar-list": d() || D,
      "mdc-deprecated-list--icon-list": h(),
      "mdc-deprecated-list--image-list": f(),
      "mdc-deprecated-list--thumbnail-list": v(),
      "mdc-deprecated-list--video-list": m(),
      "mdc-deprecated-list--two-line": b(),
      "smui-list--three-line": I() && !b(),
      [o()]: !0
    }));
    sr(Rn, w, (me, W) => {
      we(
        W(me, it(
          {
            get tag() {
              return U();
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
            onkeydown: (Y) => {
              var De;
              L(Y), (De = e.onkeydown) == null || De.call(e, Y);
            },
            onfocusin: (Y) => {
              var De;
              ne(Y), (De = e.onfocusin) == null || De.call(e, Y);
            },
            onfocusout: (Y) => {
              var De;
              N(Y), (De = e.onfocusout) == null || De.call(e, Y);
            },
            onclick: (Y) => {
              var De;
              q(Y), (De = e.onclick) == null || De.call(e, Y);
            },
            onSMUIAction: (Y) => {
              var De;
              pe(Y), (De = e.onSMUIAction) == null || De.call(e, Y);
            },
            children: (Y, De) => {
              var et = ie(), pt = Z(et);
              Ae(pt, () => e.children ?? ge), O(Y, et);
            },
            $$slots: { default: !0 }
          }
        )),
        (Y) => H = Y,
        () => H
      );
    });
  }
  return O(t, kt), Re(Ut);
}
let Vm = 0;
var Gm = /* @__PURE__ */ ve('<span class="mdc-deprecated-list-item__ripple"></span>'), jm = /* @__PURE__ */ ve("<!><!>", 1);
function qm(t, e) {
  Oe(e, !0);
  let n = () => {
  };
  function r(X) {
    return X === n;
  }
  let i = le("SMUI:list:item:nav"), a = p(e, "use", 19, () => []), o = p(e, "class", 3, ""), u = p(e, "style", 3, ""), l = p(e, "nonInteractive", 19, () => le("SMUI:list:nonInteractive") ?? !1), c = p(e, "ripple", 19, () => !l()), d = p(e, "wrapper", 3, !1), h = p(e, "activated", 15, !1), f = p(e, "role", 19, () => d() ? "presentation" : le("SMUI:list:item:role")), v = p(e, "selected", 15, !1), m = p(e, "disabled", 3, !1), b = p(e, "skipRestoreFocus", 3, !1), I = p(e, "tabindex", 15, n), E = p(e, "inputId", 19, () => "SMUI-form-field-list-" + Vm++), S = p(e, "component", 3, Hr), x = p(e, "tag", 19, () => i ? e.href ? "a" : "span" : "li"), g = /* @__PURE__ */ ze(e, [
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
  ee("SMUI:list:nonInteractive", void 0), ee("SMUI:list:item:role", void 0);
  let _, C = ye({}), T = ye({}), A = ye({}), w = /* @__PURE__ */ be(void 0), U = /* @__PURE__ */ be(void 0);
  const K = /* @__PURE__ */ se(() => r(I()) ? !l() && !m() && (v() || s(w) && s(w).checked) ? 0 : -1 : I());
  ee("SMUI:generic:input:props", { id: E() }), ee("SMUI:separator:context", void 0), ee("SMUI:generic:input:mount", (X) => {
    ("_smui_checkbox_accessor" in X || "_smui_radio_accessor" in X) && Q(w, X, !0);
  }), ee("SMUI:generic:input:unmount", () => {
    Q(w, void 0);
  });
  const H = le("SMUI:list:item:mount"), B = le("SMUI:list:item:unmount");
  st(() => {
    if (!v() && !l()) {
      let fe = !0, ae = _.getElement();
      for (; ae.previousElementSibling; )
        if (ae = ae.previousElementSibling, ae.nodeType === 1 && ae.classList.contains("mdc-deprecated-list-item") && !ae.classList.contains("mdc-deprecated-list-item--disabled")) {
          fe = !1;
          break;
        }
      fe && Q(U, window.requestAnimationFrame(() => y(ae)), !0);
    }
    const X = {
      _smui_list_item_accessor: !0,
      get element() {
        return q();
      },
      get selected() {
        return v();
      },
      set selected(fe) {
        v(fe);
      },
      hasClass: _e,
      addClass: k,
      removeClass: F,
      getAttr: G,
      addAttr: te,
      removeAttr: P,
      getPrimaryText: N,
      // For inputs within item.
      get checked() {
        return (s(w) && s(w).checked) ?? !1;
      },
      set checked(fe) {
        s(w) && (s(w).checked = !!fe);
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
      action: ne,
      get tabindex() {
        return s(K);
      },
      set tabindex(fe) {
        I(fe);
      },
      get disabled() {
        return m();
      },
      get activated() {
        return h();
      },
      set activated(fe) {
        h(fe);
      }
    };
    return H && H(X), () => {
      B && B(X);
    };
  }), Hn(() => {
    s(U) && window.cancelAnimationFrame(s(U));
  });
  function _e(X) {
    return X in C ? C[X] : q().classList.contains(X);
  }
  function k(X) {
    C[X] || (C[X] = !0);
  }
  function F(X) {
    (!(X in C) || C[X]) && (C[X] = !1);
  }
  function D(X, fe) {
    T[X] != fe && (fe === "" || fe == null ? delete T[X] : T[X] = fe);
  }
  function G(X) {
    return X in A ? A[X] ?? null : q().getAttribute(X);
  }
  function te(X, fe) {
    A[X] !== fe && (A[X] = fe);
  }
  function P(X) {
    (!(X in A) || A[X] != null) && (A[X] = void 0);
  }
  function y(X) {
    let fe = !0;
    for (; X.nextElementSibling; )
      if (X = X.nextElementSibling, X.nodeType === 1 && X.classList.contains("mdc-deprecated-list-item")) {
        const ae = X.attributes.getNamedItem("tabindex");
        if (ae && ae.value === "0") {
          fe = !1;
          break;
        }
      }
    fe && I(0);
  }
  function L(X) {
    const fe = X.key === "Enter", ae = X.key === "Space";
    (fe || ae) && ne(X);
  }
  function ne(X) {
    m() || We(q(), "SMUIAction", X);
  }
  function N() {
    const X = q(), fe = X.querySelector(".mdc-deprecated-list-item__primary-text");
    if (fe)
      return fe.textContent ?? "";
    const ae = X.querySelector(".mdc-deprecated-list-item__text");
    return ae ? ae.textContent ?? "" : X.textContent ?? "";
  }
  function q() {
    return _.getElement();
  }
  var pe = { action: ne, getPrimaryText: N, getElement: q }, V = ie(), re = Z(V);
  {
    let X = /* @__PURE__ */ se(() => [
      ...l() ? [] : [
        [
          zt,
          {
            ripple: !s(w),
            unbounded: !1,
            color: (h() || v()) && e.color == null ? "primary" : e.color,
            disabled: m(),
            addClass: k,
            removeClass: F,
            addStyle: D
          }
        ]
      ],
      ...a()
    ]), fe = /* @__PURE__ */ se(() => Ue({
      "mdc-deprecated-list-item": !d(),
      "mdc-deprecated-list-item__wrapper": d(),
      "mdc-deprecated-list-item--activated": h(),
      "mdc-deprecated-list-item--selected": v(),
      "mdc-deprecated-list-item--disabled": m(),
      "mdc-menu-item--selected": !i && f() === "menuitem" && v(),
      "smui-menu-item--non-interactive": l(),
      ...C,
      [o()]: !0
    })), ae = /* @__PURE__ */ se(() => Object.entries(T).map(([Ze, ke]) => `${Ze}: ${ke};`).concat([u()]).join(" ")), Qe = /* @__PURE__ */ se(() => b() || void 0);
    sr(re, S, (Ze, ke) => {
      we(
        ke(Ze, it(
          {
            get tag() {
              return x();
            },
            get use() {
              return s(X);
            },
            get class() {
              return s(fe);
            },
            get style() {
              return s(ae);
            }
          },
          () => i && h() ? { "aria-current": "page" } : {},
          () => !i || d() ? { role: f() } : {},
          () => !i && f() === "option" ? { "aria-selected": v() ? "true" : "false" } : {},
          () => !i && (f() === "radio" || f() === "checkbox") ? {
            "aria-checked": s(w) && s(w).checked ? "true" : "false"
          } : {},
          () => i ? {} : { "aria-disabled": m() ? "true" : "false" },
          {
            get "data-menu-item-skip-restore-focus"() {
              return s(Qe);
            },
            get tabindex() {
              return s(K);
            },
            get href() {
              return e.href;
            }
          },
          () => A,
          () => g,
          {
            onclick: (Le) => {
              var oe;
              ne(Le), (oe = e.onclick) == null || oe.call(e, Le);
            },
            onkeydown: (Le) => {
              var oe;
              L(Le), (oe = e.onkeydown) == null || oe.call(e, Le);
            },
            children: (Le, oe) => {
              var Se = jm(), Ne = Z(Se);
              {
                var M = ($) => {
                  var Ce = Gm();
                  O($, Ce);
                };
                ue(Ne, ($) => {
                  c() && $(M);
                });
              }
              var j = Ee(Ne);
              Ae(j, () => e.children ?? ge), O(Le, Se);
            },
            $$slots: { default: !0 }
          }
        )),
        (Le) => _ = Le,
        () => _
      );
    });
  }
  return O(t, V), Re(pe);
}
let Wm = 0;
var zm = /* @__PURE__ */ ve("<div><!></div>");
function Km(t, e) {
  Oe(e, !0);
  let n = p(e, "use", 19, () => []), r = p(e, "class", 3, ""), i = p(e, "id", 19, () => "SMUI-select-helper-text-" + Wm++), a = p(e, "persistent", 3, !1), o = p(e, "validationMsg", 3, !1), u = /* @__PURE__ */ ze(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "id",
    "persistent",
    "validationMsg",
    "children"
  ]), l, c = /* @__PURE__ */ be(void 0), d = ye({}), h = ye({}), f = /* @__PURE__ */ be(void 0);
  const v = le("SMUI:select:helper-text:id"), m = le("SMUI:select:helper-text:mount"), b = le("SMUI:select:helper-text:unmount");
  st(() => (Q(
    c,
    new Um({
      addClass: E,
      removeClass: S,
      hasClass: I,
      getAttr: x,
      setAttr: g,
      removeAttr: _,
      setContent: (H) => {
        Q(f, H, !0);
      }
    }),
    !0
  ), v && v(i()), m && m(s(c)), s(c).init(), () => {
    var H;
    b && s(c) && b(s(c)), (H = s(c)) == null || H.destroy();
  }));
  function I(H) {
    return H in d ? d[H] : C().classList.contains(H);
  }
  function E(H) {
    d[H] || (d[H] = !0);
  }
  function S(H) {
    (!(H in d) || d[H]) && (d[H] = !1);
  }
  function x(H) {
    return H in h ? h[H] ?? null : C().getAttribute(H);
  }
  function g(H, B) {
    h[H] !== B && (h[H] = B);
  }
  function _(H) {
    (!(H in h) || h[H] != null) && (h[H] = void 0);
  }
  function C() {
    return l;
  }
  var T = { getElement: C }, A = zm();
  Be(
    A,
    (H) => ({
      class: H,
      "aria-hidden": a() ? void 0 : "true",
      id: i(),
      ...h,
      ...u
    }),
    [
      () => Ue({
        "mdc-select-helper-text": !0,
        "mdc-select-helper-text--validation-msg": o(),
        "mdc-select-helper-text--validation-msg-persistent": a(),
        ...d,
        [r()]: !0
      })
    ]
  );
  var w = Ie(A);
  {
    var U = (H) => {
      var B = ie(), _e = Z(B);
      Ae(_e, () => e.children ?? ge), O(H, B);
    }, K = (H) => {
      var B = Xt();
      He(() => vt(B, s(f))), O(H, B);
    };
    ue(w, (H) => {
      s(f) == null ? H(U) : H(K, !1);
    });
  }
  return we(A, (H) => l = H, () => l), Fe(A, (H, B) => z == null ? void 0 : z(H, B), n), O(t, A), Re(T);
}
let Xm = 0;
var Ym = /* @__PURE__ */ ve("<input/>"), Zm = /* @__PURE__ */ ve('<span class="mdc-select__ripple"></span>'), Qm = /* @__PURE__ */ ve('<div><!> <div><!> <!> <!> <!> <span><span> </span></span> <span><svg class="mdc-select__dropdown-icon-graphic" viewBox="7 10 10 5" focusable="false"><polygon class="mdc-select__dropdown-icon-inactive" stroke="none" fill-rule="evenodd" points="7 10 12 15 17 10"></polygon><polygon class="mdc-select__dropdown-icon-active" stroke="none" fill-rule="evenodd" points="7 15 12 10 17 15"></polygon></svg></span> <!></div> <!></div> <!>', 1);
function Jm(t, e) {
  Oe(e, !0);
  const n = () => Pt(Ce, "$selectedTextStore", r), [r, i] = Ln();
  let a = () => {
  };
  function o(R) {
    return R === a;
  }
  let u = p(e, "use", 19, () => []), l = p(e, "class", 3, ""), c = p(e, "style", 3, ""), d = p(e, "ripple", 3, !0), h = p(e, "disabled", 3, !1), f = p(e, "variant", 3, "standard"), v = p(e, "noLabel", 3, !1), m = p(e, "label", 3, void 0), b = p(e, "value", 15), I = p(e, "key", 3, (R) => R), E = p(e, "dirty", 15, !1), S = p(e, "invalid", 15, a), x = p(e, "updateInvalid", 19, () => o(S())), g = p(e, "required", 3, !1), _ = p(e, "inputId", 19, () => "SMUI-select-" + Xm++), C = p(e, "hiddenInput", 3, !1), T = p(e, "withLeadingIcon", 3, a), A = p(e, "anchor$use", 19, () => []), w = p(e, "anchor$class", 3, ""), U = p(e, "selectedTextContainer$use", 19, () => []), K = p(e, "selectedTextContainer$class", 3, ""), H = p(e, "selectedText$use", 19, () => []), B = p(e, "selectedText$class", 3, ""), _e = p(e, "dropdownIcon$use", 19, () => []), k = p(e, "dropdownIcon$class", 3, ""), F = p(e, "menu$class", 3, ""), D = /* @__PURE__ */ ze(e, [
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
  const G = o(S());
  o(S()) && S(!1);
  let te, P = /* @__PURE__ */ be(void 0), y = ye({}), L = ye({}), ne, N = ye({}), q = /* @__PURE__ */ be(-1);
  const pe = /* @__PURE__ */ se(() => D.menu$id ?? _() + "-menu");
  let V = /* @__PURE__ */ be(void 0), re = le("SMUI:addLayoutListener"), X, fe = /* @__PURE__ */ be(!1), ae = ye({}), Qe = /* @__PURE__ */ be(void 0), Ze = /* @__PURE__ */ be(void 0), ke = /* @__PURE__ */ be(!1), Le, oe = le("SMUI:select:context"), Se, Ne, M, j, $;
  ee("SMUI:list:role", ""), ee("SMUI:list:nav", !1);
  const Ce = dt("");
  ee("SMUI:select:selectedText", Ce);
  const Ut = dt(b());
  Te(() => {
    mn(Ut, b());
  }), ee("SMUI:select:value", Ut), Te(() => {
    s(P) && s(P).getValue() !== I()(b()) && s(P).setValue(I()(b()));
  });
  let kt = s(q);
  Te(() => {
    if (kt !== s(q))
      if (kt = s(q), s(P))
        s(P).setSelectedIndex(
          s(q),
          /* closeMenu */
          !1,
          /* skipNotify */
          !0
        );
      else {
        const R = Vt();
        b() !== R[s(q)] && b(R[s(q)]);
      }
  }), Te(() => {
    s(P) && s(P).getDisabled() !== h() && s(P).setDisabled(h());
  }), Te(() => {
    s(P) && E() && s(P).isValid() !== !S() && (x() ? S(!s(P).isValid()) : s(P).setValid(!S()));
  }), Te(() => {
    s(P) && s(P).getRequired() !== g() && s(P).setRequired(g());
  }), re && (X = re(pi)), ee("SMUI:select:leading-icon:mount", (R) => {
    Se = R;
  }), ee("SMUI:select:leading-icon:unmount", () => {
    Se = void 0;
  }), ee("SMUI:list:mount", (R) => {
    Le = R;
  }), ee("SMUI:select:helper-text:id", (R) => {
    Q(V, R, !0);
  }), ee("SMUI:select:helper-text:mount", (R) => {
    Ne = R;
  }), ee("SMUI:select:helper-text:unmount", () => {
    Q(V, void 0), Ne = void 0;
  }), st(() => (Q(
    P,
    new Nm(
      {
        // getSelectAdapterMethods
        // getMenuItemAttr: (menuItem: Element, attr: string) =>
        //   menuItem.getAttribute(attr),
        setSelectedText: (R) => {
          mn(Ce, R);
        },
        isSelectAnchorFocused: () => document.activeElement === ne,
        getSelectAnchorAttr: et,
        setSelectAnchorAttr: pt,
        removeSelectAnchorAttr: Lt,
        addMenuClass: Y,
        removeMenuClass: De,
        openMenu: () => {
          Q(fe, !0);
        },
        closeMenu: () => {
          Q(fe, !1);
        },
        getAnchorElement: () => ne,
        setMenuAnchorElement: (R) => {
          Q(Qe, R, !0);
        },
        setMenuAnchorCorner: (R) => {
          Q(Ze, R, !0);
        },
        setMenuWrapFocus: (R) => {
          Q(ke, R, !0);
        },
        getSelectedIndex: () => s(q),
        setSelectedIndex: (R) => {
          kt = R, Q(q, R, !0), b(Vt()[s(q)]);
        },
        focusMenuItemAtIndex: (R) => {
          Le.focusItemAtIndex(R);
        },
        getMenuItemCount: () => Le.items.length,
        getMenuItemValues: () => Vt().map(I()),
        getMenuItemTextAtIndex: (R) => Le.getPrimaryTextAtIndex(R),
        isTypeaheadInProgress: () => Le.typeaheadInProgress,
        typeaheadMatchItem: (R, he) => Le.typeaheadMatchItem(R, he),
        // getCommonAdapterMethods
        addClass: ce,
        removeClass: me,
        hasClass: Rn,
        setRippleCenter: (R) => j && j.setRippleCenter(R),
        activateBottomLine: () => j && j.activate(),
        deactivateBottomLine: () => j && j.deactivate(),
        notifyChange: (R) => {
          var he;
          E(!0), x() && S(!((he = s(P)) != null && he.isValid())), We(Yt(), "SMUISelectChange", { value: b(), index: s(q) });
        },
        // getOutlineAdapterMethods
        hasOutline: () => !!$,
        notchOutline: (R) => $ && $.notch(R),
        closeOutline: () => $ && $.closeNotch(),
        // getLabelAdapterMethods
        hasLabel: () => !!M,
        floatLabel: (R) => M && M.float(R),
        getLabelWidth: () => M ? M.getWidth() : 0,
        setLabelRequired: (R) => M && M.setRequired(R)
      },
      {
        get helperText() {
          return Ne;
        },
        get leadingIcon() {
          return Se;
        }
      }
    ),
    !0
  ), Q(q, Vt().indexOf(b()), !0), s(P).init(), Gt(G), () => {
    var R;
    (R = s(P)) == null || R.destroy();
  })), Hn(() => {
    X && X();
  });
  function Rn(R) {
    return R in y ? y[R] : Yt().classList.contains(R);
  }
  function ce(R) {
    y[R] || (y[R] = !0);
  }
  function me(R) {
    (!(R in y) || y[R]) && (y[R] = !1);
  }
  function W(R, he) {
    L[R] != he && (he === "" || he == null ? delete L[R] : L[R] = he);
  }
  function Y(R) {
    ae[R] || (ae[R] = !0);
  }
  function De(R) {
    (!(R in ae) || ae[R]) && (ae[R] = !1);
  }
  function et(R) {
    return R in N ? N[R] ?? null : Yt().getAttribute(R);
  }
  function pt(R, he) {
    N[R] !== he && (N[R] = he);
  }
  function Lt(R) {
    (!(R in N) || N[R] != null) && (N[R] = void 0);
  }
  function Vt() {
    return Le.getOrderedList().map((R) => R.getValue());
  }
  function cr(R) {
    const he = R.currentTarget.getBoundingClientRect();
    return (nt(R) ? R.touches[0].clientX : R.clientX) - he.left;
  }
  function nt(R) {
    return "touches" in R;
  }
  function Ct() {
    if (s(P) == null)
      throw new Error("Instance is undefined.");
    return s(P).getUseDefaultValidation();
  }
  function Gt(R) {
    var he;
    (he = s(P)) == null || he.setUseDefaultValidation(R);
  }
  function Fn() {
    ne.focus();
  }
  function pi() {
    var R;
    (R = s(P)) == null || R.layout();
  }
  function Yt() {
    return te;
  }
  var Ge = {
    getUseDefaultValidation: Ct,
    setUseDefaultValidation: Gt,
    focus: Fn,
    layout: pi,
    getElement: Yt
  }, at = Qm(), tt = Z(at);
  Be(tt, (R, he, ct) => ({ class: R, style: he, ...ct }), [
    () => Ue({
      "mdc-select": !0,
      "mdc-select--required": g(),
      "mdc-select--disabled": h(),
      "mdc-select--filled": f() === "filled",
      "mdc-select--outlined": f() === "outlined",
      "smui-select--standard": f() === "standard",
      "mdc-select--with-leading-icon": o(T()) ? e.leadingIcon : T(),
      "mdc-select--no-label": v() || m() == null,
      "mdc-select--invalid": S(),
      "mdc-select--activated": s(fe),
      "mdc-data-table__pagination-rows-per-page-select": oe === "data-table:pagination",
      ...y,
      [l()]: !0
    }),
    () => Object.entries(L).map(([R, he]) => `${R}: ${he};`).concat([c()]).join(" "),
    () => ta(D, [
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
  var Ot = Ie(tt);
  {
    var Rt = (R) => {
      var he = Ym();
      Be(
        he,
        (ct) => ({
          type: "hidden",
          required: g(),
          disabled: h(),
          value: b(),
          ...ct
        }),
        [() => lt(D, "input$")],
        void 0,
        void 0,
        !0
      ), O(R, he);
    };
    ue(Ot, (R) => {
      C() && R(Rt);
    });
  }
  var rt = Ee(Ot, 2), yt = (R) => {
    var he;
    ne.focus(), s(P) && s(P).handleClick(cr(R)), (he = e.anchor$onclick) == null || he.call(e, R);
  }, St = (R) => {
    var he;
    s(P) && s(P).handleKeydown(R), (he = e.onkeydown) == null || he.call(e, R);
  }, Je = (R) => {
    var he;
    s(P) && s(P).handleBlur(), We(Yt(), "blur", R), (he = e.anchor$onblur) == null || he.call(e, R);
  }, ft = (R) => {
    var he;
    s(P) && s(P).handleFocus(), We(Yt(), "focus", R), (he = e.anchor$onfocus) == null || he.call(e, R);
  };
  Be(
    rt,
    (R, he) => ({
      class: R,
      "aria-required": g() ? "true" : void 0,
      "aria-disabled": h() ? "true" : void 0,
      "aria-controls": s(pe),
      "aria-expanded": s(fe) ? "true" : "false",
      "aria-describedby": s(V),
      role: "combobox",
      tabindex: "0",
      ...N,
      ...he,
      onclick: yt,
      onkeydown: St,
      onblur: Je,
      onfocus: ft
    }),
    [
      () => Ue({ "mdc-select__anchor": !0, [w()]: !0 }),
      () => lt(D, "anchor$")
    ]
  );
  var yn = Ie(rt);
  {
    var sn = (R) => {
      var he = Zm();
      O(R, he);
    };
    ue(yn, (R) => {
      f() === "filled" && R(sn);
    });
  }
  var It = Ee(yn, 2);
  {
    var Mt = (R) => {
      {
        let he = /* @__PURE__ */ se(() => _() + "-smui-label"), ct = /* @__PURE__ */ se(() => n() !== ""), Tt = /* @__PURE__ */ se(() => lt(D, "label$"));
        we(
          ho(R, it(
            {
              get id() {
                return s(he);
              },
              get floatAbove() {
                return s(ct);
              },
              get required() {
                return g();
              }
            },
            () => s(Tt),
            {
              children: (Zn, Qn) => {
                var sa = ie(), mi = Z(sa);
                {
                  var Gr = (jr) => {
                  }, Vo = (jr) => {
                    var Ga = ie(), la = Z(Ga);
                    {
                      var fl = (fr) => {
                        var qr = Xt();
                        He(() => vt(qr, m())), O(fr, qr);
                      }, ja = (fr) => {
                        var qr = ie(), Go = Z(qr);
                        Ae(Go, m), O(fr, qr);
                      };
                      ue(
                        la,
                        (fr) => {
                          typeof m() == "string" ? fr(fl) : fr(ja, !1);
                        },
                        !0
                      );
                    }
                    O(jr, Ga);
                  };
                  ue(mi, (jr) => {
                    m() == null ? jr(Gr) : jr(Vo, !1);
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
    ue(It, (R) => {
      f() !== "outlined" && !v() && m() != null && R(Mt);
    });
  }
  var xt = Ee(It, 2);
  {
    var Zt = (R) => {
      {
        let he = /* @__PURE__ */ se(() => v() || m() == null), ct = /* @__PURE__ */ se(() => lt(D, "outline$"));
        we(
          Yc(R, it(
            {
              get noLabel() {
                return s(he);
              }
            },
            () => s(ct),
            {
              children: (Tt, Zn) => {
                var Qn = ie(), sa = Z(Qn);
                {
                  var mi = (Gr) => {
                    {
                      let Vo = /* @__PURE__ */ se(() => _() + "-smui-label"), jr = /* @__PURE__ */ se(() => n() !== ""), Ga = /* @__PURE__ */ se(() => lt(D, "label$"));
                      we(
                        ho(Gr, it(
                          {
                            get id() {
                              return s(Vo);
                            },
                            get floatAbove() {
                              return s(jr);
                            },
                            get required() {
                              return g();
                            }
                          },
                          () => s(Ga),
                          {
                            children: (la, fl) => {
                              var ja = ie(), fr = Z(ja);
                              {
                                var qr = (ua) => {
                                }, Go = (ua) => {
                                  var hl = ie(), Rd = Z(hl);
                                  {
                                    var Md = (gi) => {
                                      var ca = Xt();
                                      He(() => vt(ca, m())), O(gi, ca);
                                    }, Dd = (gi) => {
                                      var ca = ie(), Pd = Z(ca);
                                      Ae(Pd, m), O(gi, ca);
                                    };
                                    ue(
                                      Rd,
                                      (gi) => {
                                        typeof m() == "string" ? gi(Md) : gi(Dd, !1);
                                      },
                                      !0
                                    );
                                  }
                                  O(ua, hl);
                                };
                                ue(fr, (ua) => {
                                  m() == null ? ua(qr) : ua(Go, !1);
                                });
                              }
                              O(la, ja);
                            },
                            $$slots: { default: !0 }
                          }
                        )),
                        (la) => M = la,
                        () => M
                      );
                    }
                  };
                  ue(sa, (Gr) => {
                    !v() && m() != null && Gr(mi);
                  });
                }
                O(Tt, Qn);
              },
              $$slots: { default: !0 }
            }
          )),
          (Tt) => $ = Tt,
          () => $
        );
      }
    };
    ue(xt, (R) => {
      f() === "outlined" && R(Zt);
    });
  }
  var kr = Ee(xt, 2);
  Ae(kr, () => e.leadingIcon ?? ge);
  var In = Ee(kr, 2);
  Be(In, (R, he) => ({ class: R, ...he }), [
    () => Ue({
      "mdc-select__selected-text-container": !0,
      [K()]: !0
    }),
    () => lt(D, "selectedTextContainer$")
  ]);
  var dr = Ie(In);
  Be(
    dr,
    (R, he) => ({
      id: _() + "-smui-selected-text",
      class: R,
      role: "button",
      "aria-haspopup": "listbox",
      "aria-labelledby": _() + "-smui-label",
      ...he
    }),
    [
      () => Ue({
        "mdc-select__selected-text": !0,
        [B()]: !0
      }),
      () => lt(D, "selectedText$")
    ]
  );
  var oa = Ie(dr);
  Fe(dr, (R, he) => z == null ? void 0 : z(R, he), H), Fe(In, (R, he) => z == null ? void 0 : z(R, he), U);
  var _n = Ee(In, 2);
  Be(_n, (R, he) => ({ class: R, ...he }), [
    () => Ue({
      "mdc-select__dropdown-icon": !0,
      [k()]: !0
    }),
    () => lt(D, "dropdownIcon$")
  ]), Fe(_n, (R, he) => z == null ? void 0 : z(R, he), _e);
  var Yn = Ee(_n, 2);
  {
    var Bn = (R) => {
      {
        let he = /* @__PURE__ */ se(() => lt(D, "ripple$"));
        we(Xc(R, it(() => s(he))), (ct) => j = ct, () => j);
      }
    };
    ue(Yn, (R) => {
      f() !== "outlined" && d() && R(Bn);
    });
  }
  we(rt, (R) => ne = R, () => ne), Fe(rt, (R, he) => z == null ? void 0 : z(R, he), A);
  var Vr = Ee(rt, 2);
  {
    let R = /* @__PURE__ */ se(() => Ue({
      "mdc-select__menu": !0,
      ...ae,
      [F()]: !0
    })), he = /* @__PURE__ */ se(() => lt(D, "menu$"));
    Bm(Vr, it(
      {
        get class() {
          return s(R);
        },
        get id() {
          return s(pe);
        },
        fullWidth: !0,
        anchor: !1,
        get anchorElement() {
          return s(Qe);
        },
        get anchorCorner() {
          return s(Ze);
        }
      },
      () => s(he),
      {
        onSMUIMenuSelected: (ct) => {
          var Tt;
          s(P) && s(P).handleMenuItemAction(ct.detail.index), (Tt = e.onSMUIMenuSelected) == null || Tt.call(e, ct);
        },
        onSMUIMenuSurfaceClosing: (ct) => {
          var Tt;
          s(P) && s(P).handleMenuClosing(), (Tt = e.onSMUIMenuSurfaceClosing) == null || Tt.call(e, ct);
        },
        onSMUIMenuSurfaceClosed: (ct) => {
          var Tt;
          s(P) && s(P).handleMenuClosed(), (Tt = e.onSMUIMenuSurfaceClosed) == null || Tt.call(e, ct);
        },
        onSMUIMenuSurfaceOpened: (ct) => {
          var Tt;
          s(P) && s(P).handleMenuOpened(), (Tt = e.onSMUIMenuSurfaceOpened) == null || Tt.call(e, ct);
        },
        get open() {
          return s(fe);
        },
        set open(ct) {
          Q(fe, ct, !0);
        },
        children: (ct, Tt) => {
          {
            let Zn = /* @__PURE__ */ se(() => lt(D, "list$"));
            km(ct, it(
              {
                role: "listbox",
                get wrapFocus() {
                  return s(ke);
                }
              },
              () => s(Zn),
              {
                get selectedIndex() {
                  return s(q);
                },
                set selectedIndex(Qn) {
                  Q(q, Qn, !0);
                },
                children: (Qn, sa) => {
                  var mi = ie(), Gr = Z(mi);
                  Ae(Gr, () => e.children ?? ge), O(Qn, mi);
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
  we(tt, (R) => te = R, () => te), Fe(tt, (R, he) => zt == null ? void 0 : zt(R, he), () => ({
    ripple: f() === "filled",
    unbounded: !1,
    addClass: ce,
    removeClass: me,
    addStyle: W
  })), Fe(tt, (R, he) => ns == null ? void 0 : ns(R, he), () => ({ addClass: ce, removeClass: me })), Fe(tt, (R, he) => z == null ? void 0 : z(R, he), u);
  var ko = Ee(tt, 2);
  {
    var Ld = (R) => {
      {
        let he = /* @__PURE__ */ se(() => lt(D, "helperText$"));
        Km(R, it(() => s(he), {
          children: (ct, Tt) => {
            var Zn = ie(), Qn = Z(Zn);
            Ae(Qn, () => e.helperText ?? ge), O(ct, Zn);
          },
          $$slots: { default: !0 }
        }));
      }
    };
    ue(ko, (R) => {
      e.helperText && R(Ld);
    });
  }
  He(() => vt(oa, n())), O(t, at);
  var Od = Re(Ge);
  return i(), Od;
}
function $m(t, e) {
  Oe(e, !0);
  const n = () => Pt(d, "$selectedValue", r), [r, i] = Ln();
  let a = p(e, "use", 19, () => []);
  p(e, "class", 3, "");
  let o = p(e, "value", 3, ""), u = /* @__PURE__ */ ze(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "value",
    "children"
  ]), l;
  const c = le("SMUI:select:selectedText"), d = le("SMUI:select:value");
  ee("SMUI:list:item:role", "option");
  const h = /* @__PURE__ */ se(() => o() != null && o() !== "" && n() === o());
  st(f), Hn(f);
  function f() {
    s(h) && l && mn(c, l.getPrimaryText());
  }
  function v() {
    return l.getElement();
  }
  var m = { getElement: v };
  we(
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
      () => u,
      {
        children: (I, E) => {
          var S = ie(), x = Z(S);
          Ae(x, () => e.children ?? ge), O(I, S);
        },
        $$slots: { default: !0 }
      }
    )),
    (I) => l = I,
    () => l
  );
  var b = Re(m);
  return i(), b;
}
function ou(t, e) {
  Oe(e, !0);
  let n = p(e, "data", 19, () => []);
  p(e, "placeholder", 3, "");
  let r = p(e, "label", 3, "");
  p(e, "description", 3, "");
  let i = p(e, "value", 15), a = p(e, "required", 3, !1);
  p(e, "size", 3, "sm");
  let o = p(e, "variant", 3, "standard"), u = p(e, "selectedOptionIndex", 31, () => -1), l = p(e, "disabled", 3, !1);
  function c(d) {
    return () => u(d);
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
      var f = ie(), v = Z(f);
      _r(v, 17, n, no, (m, b, I) => {
        {
          let E = /* @__PURE__ */ se(() => c(I));
          $m(m, {
            get onclick() {
              return s(E);
            },
            get value() {
              return s(b).value;
            },
            children: (S, x) => {
              var g = Xt();
              He(() => vt(g, s(b).label)), O(S, g);
            },
            $$slots: { default: !0 }
          });
        }
      }), O(d, f);
    },
    $$slots: { default: !0 }
  }), Re();
}
var eg = /* @__PURE__ */ ve("<div><!></div>");
function $c(t, e) {
  Oe(e, !0);
  let n = p(e, "use", 19, () => []), r = p(e, "class", 3, ""), i = p(e, "variant", 3, "raised"), a = p(e, "square", 3, !1), o = p(e, "color", 3, "default"), u = p(e, "elevation", 3, 1), l = p(e, "transition", 3, !1), c = /* @__PURE__ */ ze(e, [
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
  Be(v, (b) => ({ class: b, ...c }), [
    () => Ue({
      "smui-paper": !0,
      "smui-paper--raised": i() === "raised",
      "smui-paper--unelevated": i() === "unelevated",
      "smui-paper--outlined": i() === "outlined",
      ["smui-paper--elevation-z" + u()]: u() !== 0 && i() === "raised",
      "smui-paper--rounded": !a(),
      ["smui-paper--color-" + o()]: o() !== "default",
      "smui-paper-transition": l(),
      [r()]: !0
    })
  ]);
  var m = Ie(v);
  return Ae(m, () => e.children ?? ge), we(v, (b) => d = b, () => d), Fe(v, (b, I) => z == null ? void 0 : z(b, I), n), O(t, v), Re(f);
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
var Ls;
(function(t) {
  t.POLITE = "polite", t.ASSERTIVE = "assertive";
})(Ls || (Ls = {}));
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
      var r, i, a = (r = n == null ? void 0 : n.priority) !== null && r !== void 0 ? r : Ls.POLITE, o = (i = n == null ? void 0 : n.ownerDocument) !== null && i !== void 0 ? i : document, u = this.getLiveRegion(a, o);
      u.textContent = "", setTimeout(function() {
        u.textContent = e, o.addEventListener("click", l);
      }, 1);
      function l() {
        u.textContent = "", o.removeEventListener("click", l);
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
var pr;
(function(t) {
  t[t.UNSPECIFIED = 0] = "UNSPECIFIED", t[t.CLICK = 1] = "CLICK", t[t.BACKSPACE_KEY = 2] = "BACKSPACE_KEY", t[t.DELETE_KEY = 3] = "DELETE_KEY", t[t.SPACEBAR_KEY = 4] = "SPACEBAR_KEY", t[t.ENTER_KEY = 5] = "ENTER_KEY";
})(pr || (pr = {}));
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
      return t.call(this, de(de({}, e.defaultAdapter), n)) || this;
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
      n.stopPropagation(), this.adapter.notifyInteraction(pr.CLICK);
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
      var r = n === Me.ENTER || n === Me.SPACEBAR, i = n === Me.BACKSPACE || n === Me.DELETE;
      return r || i;
    }, e.prototype.getTriggerFromKey = function(n) {
      return n === Me.SPACEBAR ? pr.SPACEBAR_KEY : n === Me.ENTER ? pr.ENTER_KEY : n === Me.DELETE ? pr.DELETE_KEY : n === Me.BACKSPACE ? pr.BACKSPACE_KEY : pr.UNSPECIFIED;
    }, e;
  }(Nt)
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
        return new fo(i, a);
      });
      var r = fo.createAdapter(this);
      this.rippleSurface = n(this.root, new No(r));
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
  }(Do)
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
var rr;
(function(t) {
  t.PRIMARY = "primary", t.TRAILING = "trailing", t.NONE = "none";
})(rr || (rr = {}));
var xe = {
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
On.add(xe.ARROW_LEFT_KEY);
On.add(xe.ARROW_RIGHT_KEY);
On.add(xe.ARROW_DOWN_KEY);
On.add(xe.ARROW_UP_KEY);
On.add(xe.END_KEY);
On.add(xe.HOME_KEY);
On.add(xe.IE_ARROW_LEFT_KEY);
On.add(xe.IE_ARROW_RIGHT_KEY);
On.add(xe.IE_ARROW_DOWN_KEY);
On.add(xe.IE_ARROW_UP_KEY);
var Fr = /* @__PURE__ */ new Set();
Fr.add(xe.ARROW_UP_KEY);
Fr.add(xe.ARROW_DOWN_KEY);
Fr.add(xe.HOME_KEY);
Fr.add(xe.END_KEY);
Fr.add(xe.IE_ARROW_UP_KEY);
Fr.add(xe.IE_ARROW_DOWN_KEY);
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
  bottom: 0,
  height: 0,
  left: 0,
  right: 0,
  top: 0,
  width: 0
}, xi;
(function(t) {
  t[t.SHOULD_FOCUS = 0] = "SHOULD_FOCUS", t[t.SHOULD_NOT_FOCUS = 1] = "SHOULD_NOT_FOCUS";
})(xi || (xi = {}));
var il = (
  /** @class */
  function(t) {
    $e(e, t);
    function e(n) {
      var r = t.call(this, de(de({}, e.defaultAdapter), n)) || this;
      return r.shouldRemoveOnTrailingIconClick = !0, r.shouldFocusPrimaryActionOnClick = !0, r;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return xe;
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
            return su;
          },
          getComputedStyleValue: function() {
            return "";
          },
          getRootBoundingClientRect: function() {
            return su;
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
        var u = this.adapter.getComputedStyleValue("width");
        requestAnimationFrame(function() {
          r.adapter.setStyleProperty("width", u), r.adapter.setStyleProperty("padding", "0"), r.adapter.setStyleProperty("margin", "0"), requestAnimationFrame(function() {
            r.adapter.setStyleProperty("width", "0");
          });
        });
        return;
      }
      if (i && a) {
        this.removeFocus();
        var l = this.adapter.getAttribute(xe.REMOVED_ANNOUNCEMENT_ATTRIBUTE);
        this.adapter.notifyRemoval(l);
      }
      if (o) {
        var c = this.adapter.eventTargetHasClass(n.target, Et.LEADING_ICON) && this.adapter.hasClass(Et.SELECTED), d = this.adapter.eventTargetHasClass(n.target, Et.CHECKMARK) && !this.adapter.hasClass(Et.SELECTED);
        if (c) {
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
      On.has(n.key) && (n.preventDefault(), this.focusNextAction(n.key, rr.PRIMARY));
    }, e.prototype.handleTrailingActionNavigation = function(n) {
      this.focusNextAction(n.detail.key, rr.TRAILING);
    }, e.prototype.removeFocus = function() {
      this.adapter.setPrimaryActionAttr(xe.TAB_INDEX, "-1"), this.adapter.removeTrailingActionFocus();
    }, e.prototype.focusPrimaryAction = function() {
      this.setPrimaryActionFocusable(xi.SHOULD_FOCUS);
    }, e.prototype.focusTrailingAction = function() {
      var n = this.adapter.isTrailingActionNavigable();
      if (n) {
        this.adapter.setPrimaryActionAttr(xe.TAB_INDEX, "-1"), this.adapter.focusTrailingAction();
        return;
      }
      this.focusPrimaryAction();
    }, e.prototype.setPrimaryActionFocusable = function(n) {
      this.adapter.setPrimaryActionAttr(xe.TAB_INDEX, "0"), n === xi.SHOULD_FOCUS && this.adapter.focusPrimaryAction(), this.adapter.removeTrailingActionFocus();
    }, e.prototype.getFocusBehavior = function() {
      return this.shouldFocusPrimaryActionOnClick ? xi.SHOULD_FOCUS : xi.SHOULD_NOT_FOCUS;
    }, e.prototype.focusNextAction = function(n, r) {
      var i = this.adapter.isTrailingActionNavigable(), a = this.getDirection(n);
      if (Fr.has(n) || !i) {
        this.adapter.notifyNavigation(n, r);
        return;
      }
      if (r === rr.PRIMARY && a === Wn.RIGHT) {
        this.focusTrailingAction();
        return;
      }
      if (r === rr.TRAILING && a === Wn.LEFT) {
        this.focusPrimaryAction();
        return;
      }
      this.adapter.notifyNavigation(n, rr.NONE);
    }, e.prototype.getDirection = function(n) {
      var r = this.adapter.isRTL(), i = n === xe.ARROW_LEFT_KEY || n === xe.IE_ARROW_LEFT_KEY, a = n === xe.ARROW_RIGHT_KEY || n === xe.IE_ARROW_RIGHT_KEY;
      return !r && i || r && a ? Wn.LEFT : Wn.RIGHT;
    }, e.prototype.removeChip = function() {
      this.shouldRemoveOnTrailingIconClick && this.beginExit();
    }, e.prototype.shouldStartEditing = function(n) {
      return this.eventFromPrimaryAction(n) && n.key === xe.ENTER_KEY;
    }, e.prototype.shouldFinishEditing = function(n) {
      return n.key === xe.ENTER_KEY;
    }, e.prototype.shouldNotifyInteraction = function(n) {
      return n.key === xe.ENTER_KEY || n.key === xe.SPACEBAR_KEY;
    }, e.prototype.isDeleteAction = function(n) {
      var r = this.adapter.hasClass(Et.DELETABLE);
      return r && (n.key === xe.BACKSPACE_KEY || n.key === xe.DELETE_KEY || n.key === xe.IE_DELETE_KEY);
    }, e.prototype.setSelectedImpl = function(n) {
      n ? (this.adapter.addClass(Et.SELECTED), this.adapter.setPrimaryActionAttr(xe.ARIA_CHECKED, "true")) : (this.adapter.removeClass(Et.SELECTED), this.adapter.setPrimaryActionAttr(xe.ARIA_CHECKED, "false"));
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
  }(Nt)
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
      n === void 0 && (n = function(u, l) {
        return new fo(u, l);
      }), r === void 0 && (r = function(u) {
        return new td(u);
      }), this.leadingIcon = this.root.querySelector(xe.LEADING_ICON_SELECTOR), this.checkmark = this.root.querySelector(xe.CHECKMARK_SELECTOR), this.primaryAction = this.root.querySelector(xe.PRIMARY_ACTION_SELECTOR);
      var a = this.root.querySelector(xe.TRAILING_ACTION_SELECTOR);
      a && (this.trailingAction = r(a));
      var o = de(de({}, fo.createAdapter(this)), { computeBoundingRect: function() {
        return i.foundation.getDimensions();
      } });
      this.rippleSurface = n(this.root, new No(o));
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
            xe.INTERACTION_EVENT,
            { chipId: n.id },
            !0
            /* shouldBubble */
          );
        },
        notifyNavigation: function(i, a) {
          return n.emit(
            xe.NAVIGATION_EVENT,
            { chipId: n.id, key: i, source: a },
            !0
            /* shouldBubble */
          );
        },
        notifyRemoval: function(i) {
          n.emit(
            xe.REMOVAL_EVENT,
            { chipId: n.id, removedAnnouncement: i },
            !0
            /* shouldBubble */
          );
        },
        notifySelection: function(i, a) {
          return n.emit(
            xe.SELECTION_EVENT,
            { chipId: n.id, selected: i, shouldIgnore: a },
            !0
            /* shouldBubble */
          );
        },
        notifyTrailingIconInteraction: function() {
          return n.emit(
            xe.TRAILING_ICON_INTERACTION_EVENT,
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
      return new il(r);
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
  }(Do)
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
}, _a = {
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
var al = (
  /** @class */
  function(t) {
    $e(e, t);
    function e(n) {
      var r = t.call(this, de(de({}, e.defaultAdapter), n)) || this;
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
        return _a;
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
      this.removeFocusFromChipsExcept(i), (this.adapter.hasClass(_a.CHOICE) || this.adapter.hasClass(_a.FILTER)) && this.toggleSelect(r);
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
        var u = Math.min(a, o);
        this.removeFocusFromChipsExcept(u), this.adapter.focusChipTrailingActionAtIndex(u);
      }
    }, e.prototype.handleChipNavigation = function(n) {
      var r = n.chipId, i = n.key, a = n.source, o = this.adapter.getChipListCount() - 1, u = this.adapter.getIndexOfChipById(r);
      if (!(u === -1 || !On.has(i))) {
        var l = this.adapter.isRTL(), c = i === xe.ARROW_LEFT_KEY || i === xe.IE_ARROW_LEFT_KEY, d = i === xe.ARROW_RIGHT_KEY || i === xe.IE_ARROW_RIGHT_KEY, h = i === xe.ARROW_DOWN_KEY || i === xe.IE_ARROW_DOWN_KEY, f = !l && d || l && c || h, v = i === xe.HOME_KEY, m = i === xe.END_KEY;
        f ? u++ : v ? u = 0 : m ? u = o : u--, !(u < 0 || u > o) && (this.removeFocusFromChipsExcept(u), this.focusChipAction(u, i, a));
      }
    }, e.prototype.focusChipAction = function(n, r, i) {
      var a = Fr.has(r);
      if (a && i === rr.PRIMARY)
        return this.adapter.focusChipPrimaryActionAtIndex(n);
      if (a && i === rr.TRAILING)
        return this.adapter.focusChipTrailingActionAtIndex(n);
      var o = this.getDirection(r);
      if (o === Wn.LEFT)
        return this.adapter.focusChipTrailingActionAtIndex(n);
      if (o === Wn.RIGHT)
        return this.adapter.focusChipPrimaryActionAtIndex(n);
    }, e.prototype.getDirection = function(n) {
      var r = this.adapter.isRTL(), i = n === xe.ARROW_LEFT_KEY || n === xe.IE_ARROW_LEFT_KEY, a = n === xe.ARROW_RIGHT_KEY || n === xe.IE_ARROW_RIGHT_KEY;
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
        if (this.adapter.hasClass(_a.CHOICE) && this.selectedChipIds.length > 0) {
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
  }(Nt)
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
var Uo = il.strings, lu = Uo.INTERACTION_EVENT, uu = Uo.SELECTION_EVENT, cu = Uo.REMOVAL_EVENT, du = Uo.NAVIGATION_EVENT, ig = al.strings.CHIP_SELECTOR, fu = 0, ag = (
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
        for (var a = wt(this.chipsList), o = a.next(); !o.done; o = a.next()) {
          var u = o.value;
          u.id && u.selected && this.foundation.select(u.id);
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
      }, this.listen(lu, this.handleChipInteraction), this.listen(uu, this.handleChipSelection), this.listen(cu, this.handleChipRemoval), this.listen(du, this.handleChipNavigation);
    }, e.prototype.destroy = function() {
      var n, r;
      try {
        for (var i = wt(this.chipsList), a = i.next(); !a.done; a = i.next()) {
          var o = a.value;
          o.destroy();
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
      this.unlisten(lu, this.handleChipInteraction), this.unlisten(uu, this.handleChipSelection), this.unlisten(cu, this.handleChipRemoval), this.unlisten(du, this.handleChipNavigation), t.prototype.destroy.call(this);
    }, e.prototype.addChip = function(n) {
      n.id = n.id || "mdc-chip-" + ++fu, this.chipsList.push(this.chipFactory(n));
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
      return new al(r);
    }, e.prototype.instantiateChips = function(n) {
      var r = [].slice.call(this.root.querySelectorAll(ig));
      return r.map(function(i) {
        return i.id = i.id || "mdc-chip-" + ++fu, n(i);
      });
    }, e.prototype.findChipIndex = function(n) {
      for (var r = 0; r < this.chips.length; r++)
        if (this.chipsList[r].id === n)
          return r;
      return -1;
    }, e;
  }(Do)
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
const ol = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  MDCChip: nd,
  MDCChipFoundation: il,
  MDCChipSet: ag,
  MDCChipSetFoundation: al,
  MDCChipTrailingAction: td,
  MDCChipTrailingActionFoundation: ed,
  chipCssClasses: Et,
  chipSetCssClasses: _a,
  chipSetStrings: rd,
  chipStrings: xe,
  trailingActionStrings: Nn
}, Symbol.toStringTag, { value: "Module" }));
var og = /* @__PURE__ */ ve('<div class="mdc-chip__ripple"></div>'), sg = /* @__PURE__ */ ve('<div class="mdc-chip__touch"></div>'), lg = /* @__PURE__ */ ve("<!> <!> <!>", 1);
function ug(t, e) {
  Oe(e, !0);
  const n = () => Pt(A, "$initialSelectedStore", o), r = () => Pt(B, "$choice", o), i = () => Pt(_e, "$index", o), a = () => Pt(H, "$nonInteractive", o), [o, u] = Ln(), { MDCChipFoundation: l } = ol;
  let c = p(e, "use", 19, () => []), d = p(e, "class", 3, ""), h = p(e, "style", 3, ""), f = p(e, "ripple", 3, !0), v = p(e, "touch", 3, !1), m = p(e, "shouldRemoveOnTrailingIconClick", 3, !0), b = p(e, "shouldFocusPrimaryActionOnClick", 3, !0), I = p(e, "component", 3, Hr), E = p(e, "tag", 3, "div"), S = /* @__PURE__ */ ze(e, [
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
  ]), x, g = /* @__PURE__ */ be(void 0), _ = ye({}), C = ye({}), T = ye({});
  const A = le("SMUI:chips:chip:initialSelected");
  let w = /* @__PURE__ */ be(ye(n())), U, K;
  const H = le("SMUI:chips:nonInteractive"), B = le("SMUI:chips:choice"), _e = le("SMUI:chips:chip:index"), k = dt(m());
  Te(() => {
    mn(k, m());
  }), ee("SMUI:chips:chip:shouldRemoveOnTrailingIconClick", k);
  const F = dt(s(w));
  Te(() => {
    mn(F, s(w));
  }), ee("SMUI:chips:chip:isSelected", F);
  const D = dt(C);
  Te(() => {
    mn(D, C);
  }), ee("SMUI:chips:chip:leadingIconClasses", D), ee("SMUI:chips:chip:focusable", r() && s(w) || i() === 0), Te(() => {
    s(g) && s(g).getShouldRemoveOnTrailingIconClick() !== m() && s(g).setShouldRemoveOnTrailingIconClick(m());
  }), Te(() => {
    s(g) && s(g).setShouldFocusPrimaryActionOnClick(b());
  }), ee("SMUI:chips:primary-action:mount", (oe) => {
    U = oe;
  }), ee("SMUI:chips:primary-action:unmount", () => {
    U = void 0;
  }), ee("SMUI:chips:trailing-action:mount", (oe) => {
    K = oe;
  }), ee("SMUI:chips:trailing-action:unmount", () => {
    K = void 0;
  });
  const G = le("SMUI:chips:chip:mount"), te = le("SMUI:chips:chip:unmount");
  st(() => {
    Q(
      g,
      new l({
        addClass: y,
        addClassToLeadingIcon: ne,
        eventTargetHasClass: (Se, Ne) => Se && "classList" in Se ? Se.classList.contains(Ne) : !1,
        focusPrimaryAction: () => {
          U && U.focus();
        },
        focusTrailingAction: () => {
          K && K.focus();
        },
        getAttribute: (Se) => ae().getAttribute(Se),
        getCheckmarkBoundingClientRect: () => {
          const Se = ae().querySelector(".mdc-chip__checkmark");
          return Se ? Se.getBoundingClientRect() : null;
        },
        getComputedStyleValue: pe,
        getRootBoundingClientRect: () => ae().getBoundingClientRect(),
        hasClass: P,
        hasLeadingIcon: () => !!ae().querySelector(".mdc-chip__icon--leading"),
        isRTL: () => getComputedStyle(ae()).getPropertyValue("direction") === "rtl",
        isTrailingActionNavigable: () => K ? K.isNavigable() : !1,
        notifyInteraction: () => We(ae(), "SMUIChipInteraction", { chipId: e.chip }),
        notifyNavigation: (Se, Ne) => We(ae(), "SMUIChipNavigation", { chipId: e.chip, key: Se, source: Ne }),
        notifyRemoval: (Se) => We(ae(), "SMUIChipRemoval", { chipId: e.chip, removedAnnouncement: Se }),
        notifySelection: (Se, Ne) => We(ae(), "SMUIChipSelection", { chipId: e.chip, selected: Se, shouldIgnore: Ne }),
        notifyTrailingIconInteraction: () => We(ae(), "SMUIChipTrailingIconInteraction", { chipId: e.chip }),
        notifyEditStart: () => {
        },
        notifyEditFinish: () => {
        },
        removeClass: L,
        removeClassFromLeadingIcon: N,
        removeTrailingActionFocus: () => {
          K && K.removeFocus();
        },
        setPrimaryActionAttr: (Se, Ne) => {
          U && U.addAttr(Se, Ne);
        },
        setStyleProperty: q
      }),
      !0
    );
    const oe = {
      chipId: e.chip,
      get selected() {
        return s(w);
      },
      focusPrimaryAction: re,
      focusTrailingAction: X,
      removeFocus: fe,
      setSelectedFromChipSet: V
    };
    return G && G(oe), s(g).init(), () => {
      var Se;
      te && te(oe), (Se = s(g)) == null || Se.destroy();
    };
  });
  function P(oe) {
    return oe in _ ? _[oe] : ae().classList.contains(oe);
  }
  function y(oe) {
    _[oe] || (_[oe] = !0);
  }
  function L(oe) {
    (!(oe in _) || _[oe]) && (_[oe] = !1);
  }
  function ne(oe) {
    C[oe] || (C[oe] = !0);
  }
  function N(oe) {
    (!(oe in C) || C[oe]) && (C[oe] = !1);
  }
  function q(oe, Se) {
    T[oe] != Se && (Se === "" || Se == null ? delete T[oe] : T[oe] = Se);
  }
  function pe(oe) {
    return oe in T ? T[oe] : getComputedStyle(ae()).getPropertyValue(oe);
  }
  function V(oe, Se) {
    var Ne;
    Q(w, oe, !0), (Ne = s(g)) == null || Ne.setSelectedFromChipSet(s(w), Se);
  }
  function re() {
    var oe;
    (oe = s(g)) == null || oe.focusPrimaryAction();
  }
  function X() {
    var oe;
    (oe = s(g)) == null || oe.focusTrailingAction();
  }
  function fe() {
    var oe;
    (oe = s(g)) == null || oe.removeFocus();
  }
  function ae() {
    return x.getElement();
  }
  var Qe = { getElement: ae }, Ze = ie(), ke = Z(Ze);
  {
    let oe = /* @__PURE__ */ se(() => [
      [
        zt,
        {
          ripple: f() && !a(),
          unbounded: !1,
          addClass: y,
          removeClass: L,
          addStyle: q
        }
      ],
      ...c()
    ]), Se = /* @__PURE__ */ se(() => Ue({
      "mdc-chip": !0,
      "mdc-chip--selected": s(w),
      "mdc-chip--touch": v(),
      ..._,
      [d()]: !0
    })), Ne = /* @__PURE__ */ se(() => Object.entries(T).map(([M, j]) => `${M}: ${j};`).concat([h()]).join(" "));
    sr(ke, I, (M, j) => {
      we(
        j(M, it(
          {
            get tag() {
              return E();
            },
            get use() {
              return s(oe);
            },
            get class() {
              return s(Se);
            },
            get style() {
              return s(Ne);
            },
            role: "row"
          },
          () => S,
          {
            ontransitionend: ($) => {
              var Ce;
              s(g) && s(g).handleTransitionEnd($), (Ce = e.ontransitionend) == null || Ce.call(e, $);
            },
            onclick: ($) => {
              var Ce;
              s(g) && s(g).handleClick(), (Ce = e.onclick) == null || Ce.call(e, $);
            },
            onkeydown: ($) => {
              var Ce;
              s(g) && s(g).handleKeydown($), (Ce = e.onkeydown) == null || Ce.call(e, $);
            },
            onfocusin: ($) => {
              var Ce;
              s(g) && s(g).handleFocusIn($), (Ce = e.onfocusin) == null || Ce.call(e, $);
            },
            onfocusout: ($) => {
              var Ce;
              s(g) && s(g).handleFocusOut($), (Ce = e.onfocusout) == null || Ce.call(e, $);
            },
            onSMUIChipTrailingActionInteraction: ($) => {
              var Ce;
              s(g) && s(g).handleTrailingActionInteraction(), (Ce = e.onSMUIChipTrailingActionInteraction) == null || Ce.call(e, $);
            },
            onSMUIChipTrailingActionNavigation: ($) => {
              var Ce;
              s(g) && s(g).handleTrailingActionNavigation($), (Ce = e.onSMUIChipTrailingActionNavigation) == null || Ce.call(e, $);
            },
            children: ($, Ce) => {
              var Ut = lg(), kt = Z(Ut);
              {
                var Rn = (Y) => {
                  var De = og();
                  O(Y, De);
                };
                ue(kt, (Y) => {
                  f() && !a() && Y(Rn);
                });
              }
              var ce = Ee(kt, 2);
              Ae(ce, () => e.children ?? ge);
              var me = Ee(ce, 2);
              {
                var W = (Y) => {
                  var De = sg();
                  O(Y, De);
                };
                ue(me, (Y) => {
                  v() && Y(W);
                });
              }
              O($, Ut);
            },
            $$slots: { default: !0 }
          }
        )),
        ($) => x = $,
        () => x
      );
    });
  }
  O(t, Ze);
  var Le = Re(Qe);
  return u(), Le;
}
var cg = /* @__PURE__ */ ve("<div></div>");
function dg(t, e) {
  Oe(e, !0);
  const [n, r] = Ln(), { MDCChipSetFoundation: i } = ol;
  let a = p(e, "use", 19, () => []), o = p(e, "class", 3, ""), u = p(e, "chips", 27, () => ye([])), l = p(e, "key", 3, (N) => `${N}`), c = p(e, "selected", 15), d = p(e, "nonInteractive", 3, !1), h = p(e, "choice", 3, !1), f = p(e, "filter", 3, !1), v = p(e, "input", 3, !1), m = /* @__PURE__ */ ze(e, [
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
  if (h() && typeof c() == "object" && "findIndex" in c())
    throw new Error("Choice chips must not be given multiple selected chips.");
  if (f() && c() !== void 0 && (typeof c() != "object" || !("findIndex" in c())))
    throw new Error("Filter chips must be given an array of selected chips.");
  let b, I = /* @__PURE__ */ be(void 0), E = {}, S = /* @__PURE__ */ new WeakMap(), x = u().map((N) => h() && c() != null && l()(c()) === l()(N) || f() && c() != null && c().findIndex((q) => l()(q) === l()(N)) !== -1);
  ee("SMUI:chips:key", l());
  const g = dt(d());
  Te(() => {
    mn(g, d());
  }), ee("SMUI:chips:nonInteractive", g);
  const _ = dt(h());
  Te(() => {
    mn(_, h());
  }), ee("SMUI:chips:choice", _);
  const C = dt(f());
  Te(() => {
    mn(C, f());
  }), ee("SMUI:chips:filter", C);
  let T = f() ? new Set(c() ?? []) : c();
  Te(() => {
    if (s(I) && h() && T !== c()) {
      const N = T;
      T = c(), c() != null ? s(I).select(l()(c())) : s(I).handleChipSelection({
        chipId: l()(N),
        selected: !1,
        shouldIgnore: !1
      });
    }
  }), Te(() => {
    if (s(I) && f()) {
      const N = new Set(c() ?? []), q = A(T, N), pe = A(N, T);
      if (q.size || pe.size) {
        T = N;
        for (let V of q)
          u().findIndex((re) => l()(re) === l()(V)) !== -1 && s(I).handleChipSelection({ chipId: l()(V), selected: !1, shouldIgnore: !1 });
        for (let V of pe)
          s(I).handleChipSelection({ chipId: l()(V), selected: !0, shouldIgnore: !1 });
      }
    }
  });
  function A(N, q) {
    let pe = new Set(N);
    for (let V of q)
      pe.delete(V);
    return pe;
  }
  ee("SMUI:chips:chip:mount", (N) => {
    _e(N.chipId, N);
  }), ee("SMUI:chips:chip:unmount", (N) => {
    k(N.chipId);
  }), st(() => {
    if (Q(
      I,
      new i({
        announceMessage: yp,
        focusChipPrimaryActionAtIndex: (N) => {
          var q;
          (q = B(u()[N])) == null || q.focusPrimaryAction();
        },
        focusChipTrailingActionAtIndex: (N) => {
          var q;
          (q = B(u()[N])) == null || q.focusTrailingAction();
        },
        getChipListCount: () => u().length,
        getIndexOfChipById: (N) => u().findIndex((q) => l()(q) === N),
        hasClass: (N) => F().classList.contains(N),
        isRTL: () => getComputedStyle(F()).getPropertyValue("direction") === "rtl",
        removeChipAtIndex: (N) => {
          if (N >= 0 && N < u().length) {
            const q = l()(u()[N]);
            if (h() && c() != null && l()(c()) === q)
              c(void 0);
            else if (f() && c() != null) {
              const pe = c().findIndex((V) => l()(V) === q);
              pe !== -1 && c().splice(pe, 1);
            }
            u().splice(N, 1);
          }
        },
        removeFocusFromChipAtIndex: (N) => {
          var q;
          (q = B(u()[N])) == null || q.removeFocus();
        },
        selectChipAtIndex: (N, q, pe) => {
          var V;
          if (N >= 0 && N < u().length) {
            if (f()) {
              c() == null && c([]);
              const re = l()(u()[N]), X = c().findIndex((fe) => l()(fe) === re);
              q && X === -1 ? c().push(u()[N]) : !q && X !== -1 && c().splice(X, 1);
            } else h() && (q || l()(c()) === l()(u()[N])) && c(q ? u()[N] : void 0);
            (V = B(u()[N])) == null || V.setSelectedFromChipSet(q, pe);
          }
        }
      }),
      !0
    ), s(I).init(), h() && c() != null)
      s(I).select(l()(c()));
    else if (f() && c() != null && c().length)
      for (const N of c())
        s(I).select(l()(N));
    return () => {
      var N;
      (N = s(I)) == null || N.destroy();
    };
  });
  function w(N) {
    s(I) && s(I).handleChipInteraction({ chipId: l()(N.detail.chipId) });
  }
  function U(N) {
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
  function B(N) {
    return N instanceof Object ? S.get(N) : E[N];
  }
  function _e(N, q) {
    N instanceof Object ? S.set(N, q) : E[N] = q;
  }
  function k(N) {
    N instanceof Object ? S.delete(N) : delete E[N];
  }
  function F() {
    return b;
  }
  var D = { getElement: F }, G = cg(), te = (N) => {
    var q;
    w(N), (q = e.onSMUIChipInteraction) == null || q.call(e, N);
  }, P = (N) => {
    var q;
    U(N), (q = e.onSMUIChipSelection) == null || q.call(e, N);
  }, y = (N) => {
    var q;
    K(N), (q = e.onSMUIChipRemoval) == null || q.call(e, N);
  }, L = (N) => {
    var q;
    H(N), (q = e.onSMUIChipNavigation) == null || q.call(e, N);
  };
  Be(
    G,
    (N) => ({
      class: N,
      role: "grid",
      ...m,
      onSMUIChipInteraction: te,
      onSMUIChipSelection: P,
      onSMUIChipRemoval: y,
      onSMUIChipNavigation: L
    }),
    [
      () => Ue({
        "mdc-chip-set": !0,
        "smui-chip-set--non-interactive": d(),
        "mdc-chip-set--choice": h(),
        "mdc-chip-set--filter": f(),
        "mdc-chip-set--input": v(),
        [o()]: !0
      })
    ]
  ), _r(G, 23, u, (N) => l()(N), (N, q, pe) => {
    Ci(N, {
      key: "SMUI:chips:chip:index",
      get value() {
        return s(pe);
      },
      children: (V, re) => {
        Ci(V, {
          key: "SMUI:chips:chip:initialSelected",
          get value() {
            return x[s(pe)];
          },
          children: (X, fe) => {
            var ae = ie(), Qe = Z(ae);
            Ae(Qe, () => e.chip, () => s(q)), O(X, ae);
          },
          $$slots: { default: !0 }
        });
      },
      $$slots: { default: !0 }
    });
  }), we(G, (N) => b = N, () => b), Fe(G, (N, q) => z == null ? void 0 : z(N, q), a), O(t, G);
  var ne = Re(D);
  return r(), ne;
}
var fg = /* @__PURE__ */ dn('<svg class="mdc-chip__checkmark-svg" viewBox="-2 -3 30 30"><path class="mdc-chip__checkmark-path" fill="none" stroke="black" d="M1.73,12.91 8.1,19.28 22.79,4.59"></path></svg>'), hg = /* @__PURE__ */ ve("<span><!></span>");
function vg(t, e) {
  Oe(e, !0);
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
  var u = { getElement: o }, l = hg();
  Be(l, (f) => ({ class: f, ...i }), [
    () => Ue({ "mdc-chip__checkmark": !0, [r()]: !0 })
  ]);
  var c = Ie(l);
  {
    var d = (f) => {
      var v = ie(), m = Z(v);
      Ae(m, () => e.children ?? ge), O(f, v);
    }, h = (f) => {
      var v = fg();
      O(f, v);
    };
    ue(c, (f) => {
      e.children ? f(d) : f(h, !1);
    });
  }
  return we(l, (f) => a = f, () => a), Fe(l, (f, v) => z == null ? void 0 : z(f, v), n), O(t, l), Re(u);
}
var pg = /* @__PURE__ */ ve("<span><!></span>"), mg = /* @__PURE__ */ ve("<span><span><!></span></span>"), gg = /* @__PURE__ */ ve("<!> <span><!></span>", 1);
function bg(t, e) {
  Oe(e, !0);
  const n = () => Pt(S, "$filter", o), r = () => Pt(E, "$choice", o), i = () => Pt(I, "$nonInteractive", o), a = () => Pt(x, "$isSelected", o), [o, u] = Ln();
  let l = p(e, "use", 19, () => []), c = p(e, "class", 3, ""), d = p(e, "tabindex", 19, () => le("SMUI:chips:chip:focusable") ? 0 : -1), h = /* @__PURE__ */ ze(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "tabindex",
    "children",
    "checkbox"
  ]), f, v, m, b = ye({});
  const I = le("SMUI:chips:nonInteractive"), E = le("SMUI:chips:choice"), S = le("SMUI:chips:filter"), x = le("SMUI:chips:chip:isSelected"), g = /* @__PURE__ */ se(() => ({
    role: n() ? "checkbox" : r() ? "radio" : "button",
    tabindex: d()
  })), _ = le("SMUI:chips:primary-action:mount"), C = le("SMUI:chips:primary-action:unmount");
  st(() => {
    let y = { focus: w, addAttr: T };
    return _ && _(y), () => {
      C && C(y);
    };
  });
  function T(y, L) {
    b[y] !== L && (b[y] = L);
  }
  function A(y) {
    b.tabindex !== K().getAttribute("tabindex") ? Lo().then(y) : y();
  }
  function w() {
    A(() => {
      m && m.focus();
    });
  }
  function U() {
    return v && v.getElement();
  }
  function K() {
    return f;
  }
  var H = { focus: w, getInput: U, getElement: K }, B = gg(), _e = Z(B);
  {
    var k = (y) => {
      {
        let L = /* @__PURE__ */ se(() => lt(h, "checkmark$"));
        we(
          vg(y, it(
            {
              get children() {
                return e.checkbox;
              }
            },
            () => s(L)
          )),
          (ne) => v = ne,
          () => v
        );
      }
    };
    ue(_e, (y) => {
      n() && y(k);
    });
  }
  var F = Ee(_e, 2);
  Be(F, (y) => ({ role: "gridcell", ...y }), [() => lt(h, "container$")]);
  var D = Ie(F);
  {
    var G = (y) => {
      var L = pg();
      Be(L, (N) => ({ class: "mdc-chip__text", ...N }), [() => lt(h, "text$")]);
      var ne = Ie(L);
      Ae(ne, () => e.children ?? ge), O(y, L);
    }, te = (y) => {
      var L = mg();
      Be(
        L,
        (q, pe) => ({
          class: q,
          ...n() || r() ? { "aria-selected": a() ? "true" : "false" } : {},
          ...s(g),
          ...b,
          ...pe
        }),
        [
          () => Ue({ "mdc-chip__primary-action": !0, [c()]: !0 }),
          () => ta(h, ["checkmark$", "container$", "text$"])
        ]
      );
      var ne = Ie(L);
      Be(ne, (q) => ({ class: "mdc-chip__text", ...q }), [() => lt(h, "text$")]);
      var N = Ie(ne);
      Ae(N, () => e.children ?? ge), we(L, (q) => m = q, () => m), O(y, L);
    };
    ue(D, (y) => {
      i() ? y(G) : y(te, !1);
    });
  }
  we(F, (y) => f = y, () => f), Fe(F, (y, L) => z == null ? void 0 : z(y, L), l), O(t, B);
  var P = Re(H);
  return u(), P;
}
var yg = /* @__PURE__ */ ve('<span class="mdc-deprecated-chip-trailing-action__touch"></span>'), Ig = /* @__PURE__ */ ve('<button><span class="mdc-deprecated-chip-trailing-action__ripple"></span> <!> <span><!></span></button>');
function _g(t, e) {
  Oe(e, !0);
  const { MDCChipTrailingActionFoundation: n } = ol;
  let r = p(e, "use", 19, () => []), i = p(e, "class", 3, ""), a = p(e, "style", 3, ""), o = p(e, "ripple", 3, !0), u = p(e, "touch", 3, !1), l = p(e, "nonNavigable", 3, !1), c = p(e, "icon$use", 19, () => []), d = p(e, "icon$class", 3, ""), h = /* @__PURE__ */ ze(e, [
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
  ]), f, v = /* @__PURE__ */ be(void 0), m = ye({}), b = ye({}), I = ye({});
  const E = le("SMUI:chips:trailing-action:mount"), S = le("SMUI:chips:trailing-action:unmount");
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
        getAttribute: C,
        notifyInteraction: (L) => We(H(), "SMUIChipTrailingActionInteraction", { trigger: L }),
        notifyNavigation: (L) => We(H(), "SMUIChipTrailingActionNavigation", { key: L }),
        setAttribute: T
      }),
      !0
    );
    const y = { isNavigable: w, focus: U, removeFocus: K };
    return E && E(y), s(v).init(), () => {
      var L;
      S && S(y), (L = s(v)) == null || L.destroy();
    };
  });
  function x(y) {
    m[y] || (m[y] = !0);
  }
  function g(y) {
    (!(y in m) || m[y]) && (m[y] = !1);
  }
  function _(y, L) {
    b[y] != L && (L === "" || L == null ? delete b[y] : b[y] = L);
  }
  function C(y) {
    return y in I ? I[y] ?? null : H().getAttribute(y);
  }
  function T(y, L) {
    I[y] !== L && (I[y] = L);
  }
  function A(y) {
    I.tabindex !== H().getAttribute("tabindex") ? Lo().then(y) : y();
  }
  function w() {
    if (s(v) == null)
      throw new Error("Instance is undefined.");
    return s(v).isNavigable();
  }
  function U() {
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
  var B = { isNavigable: w, focus: U, removeFocus: K, getElement: H }, _e = Ig(), k = (y) => {
    var L;
    s(v) && s(v).handleClick(y), (L = e.onclick) == null || L.call(e, y);
  }, F = (y) => {
    var L;
    s(v) && s(v).handleKeydown(y), (L = e.onkeydown) == null || L.call(e, y);
  };
  Be(
    _e,
    (y, L, ne) => ({
      type: "button",
      class: y,
      style: L,
      "aria-hidden": l() ? "true" : void 0,
      tabindex: "-1",
      ...I,
      ...ne,
      onclick: k,
      onkeydown: F
    }),
    [
      () => Ue({
        "mdc-deprecated-chip-trailing-action": !0,
        ...m,
        [i()]: !0
      }),
      () => Object.entries(b).map(([y, L]) => `${y}: ${L};`).concat([a()]).join(" "),
      () => ta(h, ["icon$"])
    ]
  );
  var D = Ee(Ie(_e), 2);
  {
    var G = (y) => {
      var L = yg();
      O(y, L);
    };
    ue(D, (y) => {
      u() && y(G);
    });
  }
  var te = Ee(D, 2);
  Be(te, (y, L) => ({ class: y, ...L }), [
    () => Ue({
      "mdc-deprecated-chip-trailing-action__icon": !0,
      [d()]: !0
    }),
    () => lt(h, "icon$")
  ]);
  var P = Ie(te);
  return Ae(P, () => e.children ?? ge), Fe(te, (y, L) => z == null ? void 0 : z(y, L), c), we(_e, (y) => f = y, () => f), Fe(_e, (y, L) => zt == null ? void 0 : zt(y, L), () => ({
    ripple: o(),
    unbounded: !1,
    addClass: x,
    removeClass: g,
    addStyle: _
  })), Fe(_e, (y, L) => z == null ? void 0 : z(y, L), r), O(t, _e), Re(B);
}
const Ht = [];
for (let t = 0; t < 256; ++t)
  Ht.push((t + 256).toString(16).slice(1));
function Eg(t, e = 0) {
  return (Ht[t[e + 0]] + Ht[t[e + 1]] + Ht[t[e + 2]] + Ht[t[e + 3]] + "-" + Ht[t[e + 4]] + Ht[t[e + 5]] + "-" + Ht[t[e + 6]] + Ht[t[e + 7]] + "-" + Ht[t[e + 8]] + Ht[t[e + 9]] + "-" + Ht[t[e + 10]] + Ht[t[e + 11]] + Ht[t[e + 12]] + Ht[t[e + 13]] + Ht[t[e + 14]] + Ht[t[e + 15]]).toLowerCase();
}
let rs;
const Ag = new Uint8Array(16);
function Cg() {
  if (!rs) {
    if (typeof crypto > "u" || !crypto.getRandomValues)
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    rs = crypto.getRandomValues.bind(crypto);
  }
  return rs(Ag);
}
const Sg = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), hu = { randomUUID: Sg };
function mr(t, e, n) {
  var i;
  if (hu.randomUUID && !e && !t)
    return hu.randomUUID();
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
function ur(t, e) {
  var n = xg(), r = Ie(n);
  Ae(r, () => e.children ?? ge), O(t, n);
}
var Tg = /* @__PURE__ */ dn('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"></path></svg>');
function wg(t, e) {
  let n = p(e, "svgStyles", 3, "");
  ur(t, {
    children: (r, i) => {
      var a = Tg();
      He(() => rn(a, n())), O(r, a);
    }
  });
}
var Lg = /* @__PURE__ */ dn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="24px"><path d="m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"></path></svg>');
function id(t, e) {
  let n = p(e, "svgStyles", 3, "");
  ur(t, {
    children: (r, i) => {
      var a = Lg();
      He(() => rn(a, n())), O(r, a);
    }
  });
}
var Og = /* @__PURE__ */ dn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z"></path></svg>');
function Rg(t, e) {
  let n = p(e, "svgStyles", 3, "");
  ur(t, {
    children: (r, i) => {
      var a = Og();
      He(() => rn(a, n())), O(r, a);
    }
  });
}
var Mg = /* @__PURE__ */ dn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="m590-160 80 80H240q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h360l200 240v480q0 20-8.5 36.5T768-96L560-302q-17 11-37 16.5t-43 5.5q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 23-5.5 43T618-360l102 104v-356L562-800H240v640h350ZM480-360q33 0 56.5-23.5T560-440q0-33-23.5-56.5T480-520q-33 0-56.5 23.5T400-440q0 33 23.5 56.5T480-360Zm0-80Zm0 0Z"></path></svg>');
function Dg(t, e) {
  let n = p(e, "svgStyles", 3, "");
  ur(t, {
    children: (r, i) => {
      var a = Mg();
      He(() => rn(a, n())), O(r, a);
    }
  });
}
var Pg = /* @__PURE__ */ dn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-160q-134 0-227-93t-93-227q0-134 93-227t227-93q69 0 132 28.5T720-690v-110h80v280H520v-80h168q-32-56-87.5-88T480-720q-100 0-170 70t-70 170q0 100 70 170t170 70q77 0 139-44t87-116h84q-28 106-114 173t-196 67Z"></path></svg>');
function Ng(t, e) {
  let n = p(e, "svgStyles", 3, "");
  ur(t, {
    children: (r, i) => {
      var a = Pg();
      He(() => rn(a, n())), O(r, a);
    }
  });
}
var Ug = /* @__PURE__ */ dn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"></path></svg>');
function Hg(t, e) {
  let n = p(e, "svgStyles", 3, "");
  ur(t, {
    children: (r, i) => {
      var a = Ug();
      He(() => rn(a, n())), O(r, a);
    }
  });
}
var Fg = /* @__PURE__ */ dn('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M200-440v-80h560v80H200Z"></path></svg>');
function Bg(t, e) {
  let n = p(e, "svgStyles", 3, "");
  ur(t, {
    children: (r, i) => {
      var a = Fg();
      He(() => rn(a, n())), O(r, a);
    }
  });
}
var kg = /* @__PURE__ */ dn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"></path></svg>');
function Vg(t, e) {
  let n = p(e, "svgStyles", 3, "");
  ur(t, {
    children: (r, i) => {
      var a = kg();
      He(() => rn(a, n())), O(r, a);
    }
  });
}
var Gg = /* @__PURE__ */ dn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"></path></svg>');
function jg(t, e) {
  let n = p(e, "svgStyles", 3, "");
  ur(t, {
    children: (r, i) => {
      var a = Gg();
      He(() => rn(a, n())), O(r, a);
    }
  });
}
sf();
var qg = /* @__PURE__ */ ve("<!> <!>", 1);
function Wg(t, e) {
  let n = p(e, "title", 3, ""), r = p(e, "closeable", 3, !0), i = p(e, "disabled", 3, !1);
  {
    let a = /* @__PURE__ */ se(() => i() ? "disabled" : "");
    ug(t, {
      get chip() {
        return n();
      },
      nonInteractive: !0,
      disabled: !0,
      get class() {
        return s(a);
      },
      children: (o, u) => {
        var l = qg(), c = Z(l);
        bg(c, {
          children: (f, v) => {
            var m = Xt();
            He(() => vt(m, n())), O(f, m);
          },
          $$slots: { default: !0 }
        });
        var d = Ee(c, 2);
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
          ue(d, (f) => {
            r() && !i() && f(h);
          });
        }
        O(o, l);
      },
      $$slots: { default: !0 }
    });
  }
}
function zg(t, e) {
  e(t.target.value);
}
var Kg = /* @__PURE__ */ ve('<div class="custom-text-field svelte-1719vm0"><input type="date" id="datetime-picker" class="custom-text-field__input svelte-1719vm0" placeholder=""/> <label for="datetime-picker" class="custom-floating-label svelte-1719vm0"> </label> <span class="custom-line svelte-1719vm0"></span></div>');
function Xg(t, e) {
  Oe(e, !0);
  let n = p(e, "label", 3, ""), r = p(e, "value", 15, "");
  var i = Kg(), a = Ie(i);
  a.__change = [zg, r];
  var o = Ee(a, 2), u = Ie(o);
  He(() => vt(u, n())), xa(a, r), O(t, i), Re();
}
Nr(["change"]);
var Yg = /* @__PURE__ */ ve('<div class="filter-box-container"><div class="input-section"><div class="filter-input-controls svelte-xdvqlf"><!> <!> <!> <!> <!></div> <div class="filter-button-controls"><!> <!></div></div> <div class="separator"></div> <div class="chip-section"><!></div></div>');
function vu(t, e) {
  Oe(e, !0);
  let n = p(e, "filterTypes", 19, () => []), r = p(e, "activeFilters", 31, () => ye([])), i = p(e, "useOptionLabelInChipText", 3, !1), a = p(e, "selectedOptionIndex", 31, () => -1), o = p(e, "disabled", 3, !1), u = p(e, "addFilterLabel", 3, "Add Filter"), l = p(e, "selectFilterLabel", 3, "Filter Types"), c = /* @__PURE__ */ be(""), d = /* @__PURE__ */ be(void 0), h = /* @__PURE__ */ se(() => n().map((S) => ({ value: S.label, label: S.label }))), f = /* @__PURE__ */ se(() => !s(d) || !s(c)), v = /* @__PURE__ */ se(() => n().find((S) => S.label === s(d)));
  function m() {
    var x, g;
    if (!s(d) || !s(c)) {
      console.warn("Filter type or input value is empty");
      return;
    }
    if (!s(v)) {
      console.warn("Filter type not found");
      return;
    }
    const S = [
      ...r(),
      {
        id: mr(),
        key: s(v).key,
        value: s(c),
        operation: "=",
        text: `${s(d)}: ${i() && ((x = s(v).inputType.options) != null && x.length) ? (g = s(v).inputType.options[a()]) == null ? void 0 : g.label : s(c)}`,
        disabled: !1
      }
    ];
    r(S), E(), I();
  }
  function b(S) {
    setTimeout(
      () => {
        r(r().filter((x) => x.id !== S)), E();
      },
      0
    );
  }
  function I() {
    Q(c, ""), Q(d, void 0);
  }
  function E() {
    const S = r().map((x) => ({ ...x }));
    S.find((x) => x.key === "uuid") ? S.filter((x) => x.key !== "uuid").forEach((x) => {
      x.disabled = !0;
    }) : S.forEach((x) => {
      x.disabled = !1;
    }), r(S);
  }
  $c(t, {
    children: (S, x) => {
      var g = Yg(), _ = Ie(g), C = Ie(_), T = Ie(C);
      ou(T, {
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
      var A = Ee(T, 2);
      {
        var w = (y) => {
          Im(y, {
            label: "Input",
            get value() {
              return s(c);
            },
            set value(L) {
              Q(c, L, !0);
            }
          });
        };
        ue(A, (y) => {
          var L, ne;
          ((ne = (L = s(v)) == null ? void 0 : L.inputType) == null ? void 0 : ne.type) === "string" && y(w);
        });
      }
      var U = Ee(A, 2);
      {
        var K = (y) => {
          {
            let L = /* @__PURE__ */ se(() => {
              var ne;
              return (ne = s(v).inputType) == null ? void 0 : ne.options;
            });
            ou(y, {
              label: "Input",
              get data() {
                return s(L);
              },
              get value() {
                return s(c);
              },
              set value(ne) {
                Q(c, ne, !0);
              },
              get selectedOptionIndex() {
                return a();
              },
              set selectedOptionIndex(ne) {
                a(ne);
              }
            });
          }
        };
        ue(U, (y) => {
          var L, ne;
          ((ne = (L = s(v)) == null ? void 0 : L.inputType) == null ? void 0 : ne.type) === "select" && y(K);
        });
      }
      var H = Ee(U, 2);
      {
        var B = (y) => {
          Xg(y, {
            get value() {
              return s(c);
            },
            set value(L) {
              Q(c, L, !0);
            }
          });
        };
        ue(H, (y) => {
          var L, ne;
          ((ne = (L = s(v)) == null ? void 0 : L.inputType) == null ? void 0 : ne.type) === "datepicker" && y(B);
        });
      }
      var _e = Ee(H, 2);
      {
        var k = (y) => {
          eb(y, {
            get value() {
              return s(c);
            },
            set value(L) {
              Q(c, L, !0);
            }
          });
        };
        ue(_e, (y) => {
          var L, ne;
          ((ne = (L = s(v)) == null ? void 0 : L.inputType) == null ? void 0 : ne.type) === "timepicker" && y(k);
        });
      }
      var F = Ee(C, 2), D = Ie(F);
      nl(D, {
        callback: m,
        get disabled() {
          return s(f);
        },
        children: (y, L) => {
          var ne = Xt();
          He(() => vt(ne, u())), O(y, ne);
        },
        $$slots: { default: !0 }
      });
      var G = Ee(D, 2);
      Ae(G, () => e.filterControls ?? ge);
      var te = Ee(_, 4), P = Ie(te);
      dg(P, {
        get chips() {
          return r();
        },
        key: (L) => L.id,
        chip: (L, ne = ge) => {
          Wg(L, {
            get title() {
              return ne().text;
            },
            callback: () => b(ne().id),
            get disabled() {
              return ne().disabled;
            }
          });
        },
        $$slots: { chip: !0 }
      }), O(S, g);
    },
    $$slots: { default: !0 }
  }), Re();
}
var Zg = /* @__PURE__ */ ve('<div class="overlay svelte-14uvd2z"><div class="loading-spinner-container svelte-14uvd2z"><div class="loading-spinner svelte-14uvd2z"></div> <span class="loading-message svelte-14uvd2z"> </span></div></div>'), Qg = /* @__PURE__ */ ve('<div class="svelte-14uvd2z"><!></div>');
function pu(t, e) {
  let n = p(e, "loadingDone", 3, !0), r = p(e, "message", 3, "Loading...");
  var i = Qg(), a = Ie(i);
  {
    var o = (u) => {
      var l = Zg(), c = Ie(l), d = Ee(Ie(c), 2), h = Ie(d);
      He(() => vt(h, r())), O(u, l);
    };
    ue(a, (u) => {
      n() || u(o);
    });
  }
  O(t, i);
}
function Jg(t, e) {
  e(t.target.value);
}
var $g = /* @__PURE__ */ ve('<div class="custom-text-field svelte-6wdfbb"><input type="datetime-local" id="datetime-picker" class="custom-text-field__input svelte-6wdfbb" placeholder=""/> <label for="datetime-picker" class="custom-floating-label svelte-6wdfbb"> </label> <span class="custom-line svelte-6wdfbb"></span></div>');
function eb(t, e) {
  Oe(e, !0);
  let n = p(e, "label", 3, ""), r = p(e, "value", 15, "");
  var i = $g(), a = Ie(i);
  a.__change = [Jg, r];
  var o = Ee(a, 2), u = Ie(o);
  He(() => vt(u, n())), xa(a, r), O(t, i), Re();
}
Nr(["change"]);
var tb = /* @__PURE__ */ ve('<details class="svelte-1sq8fnx"><summary class="svelte-1sq8fnx"> </summary> <div class="expandable-content svelte-1sq8fnx"><!></div></details>');
function ad(t, e) {
  Oe(e, !0);
  let n = p(e, "title", 3, ""), r = p(e, "open", 11, !1);
  $c(t, {
    children: (i, a) => {
      var o = tb(), u = Ie(o), l = Ie(u), c = Ee(u, 2), d = Ie(c);
      Ae(d, () => e.content ?? ge), He(() => {
        o.open = r(), vt(l, n());
      }), O(i, o);
    },
    $$slots: { default: !0 }
  }), Re();
}
var nb = /* @__PURE__ */ ve('<span role="tooltip" aria-labelledby="tooltip"><!></span>');
function mu(t, e) {
  Oe(e, !0);
  let n = p(e, "content", 3, ""), r = p(e, "side", 3, "top"), i = p(e, "hoverDelay", 3, 0), a = p(e, "transitionDuration", 3, 80);
  const o = `tt-${Math.random().toString(36).slice(2)}`;
  let u = /* @__PURE__ */ be(null), l = /* @__PURE__ */ be(null), c = /* @__PURE__ */ be(null), d = /* @__PURE__ */ be(null), h = /* @__PURE__ */ be(!1), f = /* @__PURE__ */ be(null), v = /* @__PURE__ */ be(null);
  function m() {
    n() && (i() > 0 ? Q(f, setTimeout(() => Q(h, !0), i()), !0) : Q(h, !0));
  }
  function b() {
    s(f) && clearTimeout(s(f)), Q(h, !1);
  }
  function I() {
    if (!s(l) || !s(d) || !s(u)) return;
    const g = s(u).getBoundingClientRect(), _ = s(d).getBoundingClientRect();
    let C = 0, T = 0;
    const A = 8;
    switch (r()) {
      case "top":
        C = g.top - _.height - A, T = g.left + g.width / 2 - _.width / 2;
        break;
      case "bottom":
        C = g.bottom + A, T = g.left + g.width / 2 - _.width / 2;
        break;
      case "left":
        C = g.top + g.height / 2 - _.height / 2, T = g.left - _.width - A;
        break;
      case "right":
        C = g.top + g.height / 2 - _.height / 2, T = g.right + A;
        break;
    }
    s(l).style.top = `${C + window.scrollY}px`, s(l).style.left = `${T + window.scrollX}px`;
  }
  function E() {
    var g;
    (g = s(v)) == null || g.disconnect(), Q(v, null), s(l) && s(l).parentNode && s(l).parentNode.removeChild(s(l)), Q(l, null), Q(d, null), Q(c, null), s(f) && clearTimeout(s(f));
  }
  Hn(E), Te(() => {
    if (!(!s(h) || !n())) {
      if (!s(l)) {
        Q(l, document.createElement("div"), !0), s(l).style.position = "absolute", s(l).style.zIndex = "9999", s(l).style.pointerEvents = "none", s(l).style.opacity = "0", s(l).style.transition = `opacity ${a()}ms ease`, s(l).id = o, s(l).setAttribute("role", "tooltip"), document.body.appendChild(s(l)), Q(c, s(l).attachShadow({ mode: "open" }), !0);
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
      `, s(c).appendChild(g), Q(d, document.createElement("div"), !0), s(c).appendChild(s(d)), Q(
          v,
          new MutationObserver(() => {
            s(h) && I();
          }),
          !0
        ), s(v).observe(document.body, { childList: !0, subtree: !0 });
      }
      s(d) && (s(d).className = `bubble ${r()}`, s(d).innerHTML = n()), s(l) && (s(l).style.opacity = "1", I());
    }
  }), Te(() => {
    if (s(h) || !s(l))
      return;
    s(l).style.opacity = "0";
    const g = s(l), _ = setTimeout(
      () => {
        g && g.parentNode && g.parentNode.removeChild(g), s(l) === g && E();
      },
      a()
    );
    return () => clearTimeout(_);
  });
  var S = nb(), x = Ie(S);
  Ae(x, () => e.children ?? ge), we(S, (g) => Q(u, g), () => s(u)), He(() => Zi(S, "aria-describedby", n() ? o : void 0)), gs("mouseenter", S, m), gs("mouseleave", S, b), O(t, S), Re();
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
var rb = (
  /** @class */
  function(t) {
    $e(e, t);
    function e(n) {
      var r = t.call(this, de(de({}, e.defaultAdapter), n)) || this;
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
            for (var o = wt(r), u = o.next(); !u.done; u = o.next()) {
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
      var r = n * ma.PRIMARY_HALF, i = n * ma.PRIMARY_FULL, a = n * ma.SECONDARY_QUARTER, o = n * ma.SECONDARY_HALF, u = n * ma.SECONDARY_FULL;
      this.adapter.setStyle("--mdc-linear-progress-primary-half", r + "px"), this.adapter.setStyle("--mdc-linear-progress-primary-half-neg", -r + "px"), this.adapter.setStyle("--mdc-linear-progress-primary-full", i + "px"), this.adapter.setStyle("--mdc-linear-progress-primary-full-neg", -i + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-quarter", a + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-quarter-neg", -a + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-half", o + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-half-neg", -o + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-full", u + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-full-neg", -u + "px"), this.restartAnimation();
    }, e;
  }(Nt)
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
}, gu = {
  ARIA_SELECTED: "aria-selected",
  ARIA_SORT: "aria-sort"
}, Xr = {
  ARIA_SELECTED: gu.ARIA_SELECTED,
  ARIA_SORT: gu.ARIA_SORT
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
var ib = (
  /** @class */
  function(t) {
    $e(e, t);
    function e(n) {
      return t.call(this, de(de({}, e.defaultAdapter), n)) || this;
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
        return Js(this, function(n) {
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
        o !== i && (this.adapter.removeClassNameByHeaderCellIndex(o, tr.HEADER_CELL_SORTED), this.adapter.removeClassNameByHeaderCellIndex(o, tr.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(o, Xr.ARIA_SORT, pn.NONE), this.adapter.setSortStatusLabelByHeaderCellIndex(o, pn.NONE));
      this.adapter.setClassNameByHeaderCellIndex(i, tr.HEADER_CELL_SORTED);
      var u = this.adapter.getAttributeByHeaderCellIndex(i, Xr.ARIA_SORT), l = pn.NONE;
      u === pn.ASCENDING ? (this.adapter.setClassNameByHeaderCellIndex(i, tr.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(i, Xr.ARIA_SORT, pn.DESCENDING), l = pn.DESCENDING) : u === pn.DESCENDING ? (this.adapter.removeClassNameByHeaderCellIndex(i, tr.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(i, Xr.ARIA_SORT, pn.ASCENDING), l = pn.ASCENDING) : (this.adapter.setAttributeByHeaderCellIndex(i, Xr.ARIA_SORT, pn.ASCENDING), l = pn.ASCENDING), this.adapter.setSortStatusLabelByHeaderCellIndex(i, l), this.adapter.notifySortAction({
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
      r ? (this.adapter.addClassAtRowIndex(n, tr.ROW_SELECTED), this.adapter.setAttributeAtRowIndex(n, Xr.ARIA_SELECTED, "true")) : (this.adapter.removeClassAtRowIndex(n, tr.ROW_SELECTED), this.adapter.setAttributeAtRowIndex(n, Xr.ARIA_SELECTED, "false"));
    }, e;
  }(Nt)
), ab = /* @__PURE__ */ ve('<div class="mdc-data-table__progress-indicator"><div class="mdc-data-table__scrim"></div> <!></div>'), ob = /* @__PURE__ */ ve("<div><div><table><!></table></div> <!> <!></div>");
function sb(t, e) {
  Oe(e, !0);
  const n = () => Pt(B, "$progressClosed", r), [r, i] = Ln(), { closest: a } = Po;
  let o = p(e, "use", 19, () => []), u = p(e, "class", 3, ""), l = p(e, "stickyHeader", 3, !1), c = p(e, "sortable", 3, !1), d = p(e, "sort", 15, null), h = p(e, "sortDirection", 15, "ascending"), f = p(e, "sortAscendingAriaLabel", 3, "sorted, ascending"), v = p(e, "sortDescendingAriaLabel", 3, "sorted, descending"), m = p(e, "container$use", 19, () => []), b = p(e, "container$class", 3, ""), I = p(e, "table$use", 19, () => []), E = p(e, "table$class", 3, ""), S = /* @__PURE__ */ ze(e, [
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
  ]), x, g = /* @__PURE__ */ be(void 0), _, C = /* @__PURE__ */ be(void 0), T = /* @__PURE__ */ be(void 0), A = ye({}), w = /* @__PURE__ */ be(ye({ height: "auto", top: "initial" })), U = le("SMUI:addLayoutListener"), K, H = !1, B = dt(!1), _e = dt(d());
  Te(() => {
    mn(_e, d());
  });
  let k = dt(h());
  Te(() => {
    mn(k, h());
  }), ee("SMUI:checkbox:context", "data-table"), ee("SMUI:linear-progress:context", "data-table"), ee("SMUI:linear-progress:closed", B), ee("SMUI:data-table:sortable", c()), ee("SMUI:data-table:sort", _e), ee("SMUI:data-table:sortDirection", k), ee("SMUI:data-table:sortAscendingAriaLabel", f()), ee("SMUI:data-table:sortDescendingAriaLabel", v()), U && (K = U(N));
  let F;
  Te(() => {
    e.progress && s(g) && F !== n() && (F = n(), n() ? s(g).hideProgress() : s(g).showProgress());
  }), ee("SMUI:checkbox:mount", () => {
    s(g) && H && s(g).layout();
  }), ee("SMUI:data-table:header:mount", (M) => {
    Q(C, M, !0);
  }), ee("SMUI:data-table:header:unmount", () => {
    Q(C, void 0);
  }), ee("SMUI:data-table:body:mount", (M) => {
    Q(T, M, !0);
  }), ee("SMUI:data-table:body:unmount", () => {
    Q(T, void 0);
  }), st(() => (Q(
    g,
    new ib({
      addClass: G,
      removeClass: te,
      getHeaderCellElements: () => {
        var M;
        return ((M = s(C)) == null ? void 0 : M.cells.map((j) => j.element)) ?? [];
      },
      getHeaderCellCount: () => {
        var M;
        return ((M = s(C)) == null ? void 0 : M.cells.length) ?? 0;
      },
      getAttributeByHeaderCellIndex: (M, j) => {
        var $;
        return (($ = s(C)) == null ? void 0 : $.orderedCells[M].getAttr(j)) ?? null;
      },
      setAttributeByHeaderCellIndex: (M, j, $) => {
        var Ce;
        (Ce = s(C)) == null || Ce.orderedCells[M].addAttr(j, $);
      },
      setClassNameByHeaderCellIndex: (M, j) => {
        var $;
        ($ = s(C)) == null || $.orderedCells[M].addClass(j);
      },
      removeClassNameByHeaderCellIndex: (M, j) => {
        var $;
        ($ = s(C)) == null || $.orderedCells[M].removeClass(j);
      },
      notifySortAction: (M) => {
        d(M.columnId), h(M.sortValue), We(q(), "SMUIDataTableSorted", M);
      },
      getTableContainerHeight: () => _.getBoundingClientRect().height,
      getTableHeaderHeight: () => {
        const M = q().querySelector(".mdc-data-table__header-row");
        if (!M)
          throw new Error("MDCDataTable: Table header element not found.");
        return M.getBoundingClientRect().height;
      },
      setProgressIndicatorStyles: (M) => {
        Q(w, M, !0);
      },
      addClassAtRowIndex: (M, j) => {
        var $;
        ($ = s(T)) == null || $.orderedRows[M].addClass(j);
      },
      getRowCount: () => {
        var M;
        return ((M = s(T)) == null ? void 0 : M.rows.length) ?? 0;
      },
      getRowElements: () => {
        var M;
        return ((M = s(T)) == null ? void 0 : M.rows.map((j) => j.element)) ?? [];
      },
      getRowIdAtIndex: (M) => {
        var j;
        return ((j = s(T)) == null ? void 0 : j.orderedRows[M].rowId) ?? null;
      },
      getRowIndexByChildElement: (M) => {
        var j;
        return ((j = s(T)) == null ? void 0 : j.orderedRows.map(($) => $.element).indexOf(a(M, ".mdc-data-table__row"))) ?? -1;
      },
      getSelectedRowCount: () => {
        var M;
        return ((M = s(T)) == null ? void 0 : M.rows.filter((j) => j.selected).length) ?? 0;
      },
      isCheckboxAtRowIndexChecked: (M) => {
        var $;
        const j = ($ = s(T)) == null ? void 0 : $.orderedRows[M].checkbox;
        return j ? j.checked : !1;
      },
      isHeaderRowCheckboxChecked: () => {
        var j;
        const M = (j = s(C)) == null ? void 0 : j.checkbox;
        return M ? M.checked : !1;
      },
      isRowsSelectable: () => !!q().querySelector(".mdc-data-table__row-checkbox") || !!q().querySelector(".mdc-data-table__header-row-checkbox"),
      notifyRowSelectionChanged: (M) => {
        var $;
        const j = ($ = s(T)) == null ? void 0 : $.orderedRows[M.rowIndex];
        j && We(q(), "SMUIDataTableSelectionChanged", {
          row: j.element,
          rowId: j.rowId,
          rowIndex: M.rowIndex,
          selected: M.selected
        });
      },
      notifySelectedAll: () => {
        P(!1), We(q(), "SMUIDataTableSelectedAll");
      },
      notifyUnselectedAll: () => {
        P(!1), We(q(), "SMUIDataTableUnselectedAll");
      },
      notifyRowClick: (M) => We(q(), "SMUIDataTableClickRow", M),
      registerHeaderRowCheckbox: () => {
      },
      registerRowCheckboxes: () => {
      },
      removeClassAtRowIndex: (M, j) => {
        var $;
        ($ = s(T)) == null || $.orderedRows[M].removeClass(j);
      },
      setAttributeAtRowIndex: (M, j, $) => {
        var Ce;
        (Ce = s(T)) == null || Ce.orderedRows[M].addAttr(j, $);
      },
      setHeaderRowCheckboxChecked: (M) => {
        var $;
        const j = ($ = s(C)) == null ? void 0 : $.checkbox;
        j && (j.checked = M);
      },
      setHeaderRowCheckboxIndeterminate: P,
      setRowCheckboxCheckedAtIndex: (M, j) => {
        var Ce;
        const $ = (Ce = s(T)) == null ? void 0 : Ce.orderedRows[M].checkbox;
        $ && ($.checked = j);
      },
      setSortStatusLabelByHeaderCellIndex: (M, j) => {
      }
    }),
    !0
  ), s(g).init(), s(g).layout(), H = !0, () => {
    var M;
    (M = s(g)) == null || M.destroy();
  })), Hn(() => {
    K && K();
  });
  function D(M) {
    s(g) && s(g).handleRowCheckboxChange(M);
  }
  function G(M) {
    A[M] || (A[M] = !0);
  }
  function te(M) {
    (!(M in A) || A[M]) && (A[M] = !1);
  }
  function P(M) {
    var $;
    const j = ($ = s(C)) == null ? void 0 : $.checkbox;
    j && (j.indeterminate = M);
  }
  function y(M) {
    if (!s(g) || !M.detail.target)
      return;
    const j = a(M.detail.target, ".mdc-data-table__header-cell--with-sort");
    j && ne(j);
  }
  function L(M) {
    if (!s(g) || !M.detail.target)
      return;
    const j = a(M.detail.target, ".mdc-data-table__row");
    j && s(g) && s(g).handleRowClick({ rowId: M.detail.rowId, row: j });
  }
  function ne(M) {
    var Ut, kt;
    const j = ((Ut = s(C)) == null ? void 0 : Ut.orderedCells) ?? [], $ = j.map((Rn) => Rn.element).indexOf(M);
    if ($ === -1)
      return;
    const Ce = j[$].columnId ?? null;
    (kt = s(g)) == null || kt.handleSortAction({ columnId: Ce, columnIndex: $, headerCell: M });
  }
  function N() {
    var M;
    return (M = s(g)) == null ? void 0 : M.layout();
  }
  function q() {
    return x;
  }
  var pe = { layout: N, getElement: q }, V = ob(), re = (M) => {
    var j;
    s(g) && s(g).handleHeaderRowCheckboxChange(), (j = e.onSMUIDataTableHeaderCheckboxChange) == null || j.call(e, M);
  }, X = (M) => {
    var j;
    y(M), (j = e.onSMUIDataTableHeaderClick) == null || j.call(e, M);
  }, fe = (M) => {
    var j;
    L(M), (j = e.onSMUIDataTableRowClick) == null || j.call(e, M);
  }, ae = (M) => {
    var j;
    D(M), (j = e.onSMUIDataTableBodyCheckboxChange) == null || j.call(e, M);
  };
  Be(
    V,
    (M, j) => ({
      class: M,
      ...j,
      onSMUIDataTableHeaderCheckboxChange: re,
      onSMUIDataTableHeaderClick: X,
      onSMUIDataTableRowClick: fe,
      onSMUIDataTableBodyCheckboxChange: ae
    }),
    [
      () => Ue({
        "mdc-data-table": !0,
        "mdc-data-table--sticky-header": l(),
        ...A,
        [u()]: !0
      }),
      () => ta(S, ["container$", "table$"])
    ]
  );
  var Qe = Ie(V);
  Be(Qe, (M, j) => ({ class: M, ...j }), [
    () => Ue({
      "mdc-data-table__table-container": !0,
      [b()]: !0
    }),
    () => lt(S, "container$")
  ]);
  var Ze = Ie(Qe);
  Be(Ze, (M, j) => ({ class: M, ...j }), [
    () => Ue({ "mdc-data-table__table": !0, [E()]: !0 }),
    () => lt(S, "table$")
  ]);
  var ke = Ie(Ze);
  Ae(ke, () => e.children ?? ge), Fe(Ze, (M, j) => z == null ? void 0 : z(M, j), I), we(Qe, (M) => _ = M, () => _), Fe(Qe, (M, j) => z == null ? void 0 : z(M, j), m);
  var Le = Ee(Qe, 2);
  {
    var oe = (M) => {
      var j = ab(), $ = Ee(Ie(j), 2);
      Ae($, () => e.progress ?? ge), He((Ce) => rn(j, Ce), [
        () => Object.entries(s(w)).map(([Ce, Ut]) => `${Ce}: ${Ut};`).join(" ")
      ]), O(M, j);
    };
    ue(Le, (M) => {
      e.progress && M(oe);
    });
  }
  var Se = Ee(Le, 2);
  Ae(Se, () => e.paginate ?? ge), we(V, (M) => x = M, () => x), Fe(V, (M, j) => z == null ? void 0 : z(M, j), o), O(t, V);
  var Ne = Re(pe);
  return i(), Ne;
}
var lb = /* @__PURE__ */ ve("<thead><!></thead>");
function ub(t, e) {
  Oe(e, !0);
  let n = p(e, "use", 19, () => []), r = /* @__PURE__ */ ze(e, ["$$slots", "$$events", "$$legacy", "use", "children"]), i, a = /* @__PURE__ */ be(void 0), o = [];
  const u = /* @__PURE__ */ new WeakMap();
  ee("SMUI:data-table:row:header", !0);
  const l = le("SMUI:checkbox:mount");
  ee("SMUI:checkbox:mount", (E) => {
    Q(a, E, !0), l && l(E);
  });
  const c = le("SMUI:checkbox:unmount");
  ee("SMUI:checkbox:unmount", (E) => {
    Q(a, void 0), c && c(E);
  }), ee("SMUI:data-table:cell:mount", (E) => {
    o.push(E), u.set(E.element, E);
  }), ee("SMUI:data-table:cell:unmount", (E) => {
    const S = o.findIndex((x) => x === E);
    S !== -1 && o.splice(S, 1), u.delete(E.element);
  });
  const d = le("SMUI:data-table:header:mount"), h = le("SMUI:data-table:header:unmount");
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
    ].map((E) => u.get(E)).filter((E) => E && E._smui_data_table_header_cell_accessor);
  }
  function v() {
    return i;
  }
  var m = { getElement: v }, b = lb();
  Be(b, () => ({ ...r }));
  var I = Ie(b);
  return Ae(I, () => e.children ?? ge), we(b, (E) => i = E, () => i), Fe(b, (E, S) => z == null ? void 0 : z(E, S), n), O(t, b), Re(m);
}
var cb = /* @__PURE__ */ ve("<tbody><!></tbody>");
function db(t, e) {
  Oe(e, !0);
  let n = p(e, "use", 19, () => []), r = p(e, "class", 3, ""), i = /* @__PURE__ */ ze(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "children"
  ]), a, o = [];
  const u = /* @__PURE__ */ new WeakMap();
  ee("SMUI:data-table:row:header", !1), ee("SMUI:data-table:row:mount", (b) => {
    o.push(b), u.set(b.element, b);
  }), ee("SMUI:data-table:row:unmount", (b) => {
    const I = o.findIndex((E) => E === b);
    I !== -1 && o.splice(I, 1), u.delete(b.element);
  });
  const l = le("SMUI:data-table:body:mount"), c = le("SMUI:data-table:body:unmount");
  st(() => {
    const b = {
      get rows() {
        return o;
      },
      get orderedRows() {
        return d();
      }
    };
    return l && l(b), () => {
      c && c(b);
    };
  });
  function d() {
    return [...h().querySelectorAll(".mdc-data-table__row")].map((b) => u.get(b)).filter((b) => b && b._smui_data_table_row_accessor);
  }
  function h() {
    return a;
  }
  var f = { getElement: h }, v = cb();
  Be(v, (b) => ({ class: b, ...i }), [
    () => Ue({ "mdc-data-table__content": !0, [r()]: !0 })
  ]);
  var m = Ie(v);
  return Ae(m, () => e.children ?? ge), we(v, (b) => a = b, () => a), Fe(v, (b, I) => z == null ? void 0 : z(b, I), n), O(t, v), Re(f);
}
let fb = 0;
var hb = /* @__PURE__ */ ve("<tr><!></tr>");
function bu(t, e) {
  Oe(e, !0);
  let n = p(e, "use", 19, () => []), r = p(e, "class", 3, ""), i = p(e, "rowId", 19, () => "SMUI-data-table-row-" + fb++), a = /* @__PURE__ */ ze(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "rowId",
    "children"
  ]), o, u = /* @__PURE__ */ be(void 0), l = ye({}), c = ye({}), d = le("SMUI:data-table:row:header");
  const h = le("SMUI:checkbox:mount");
  ee("SMUI:checkbox:mount", (U) => {
    Q(u, U, !0), h && h(U);
  });
  const f = le("SMUI:checkbox:unmount");
  ee("SMUI:checkbox:unmount", (U) => {
    Q(u, void 0), f && f(U);
  });
  const v = le("SMUI:data-table:row:mount"), m = le("SMUI:data-table:row:unmount");
  st(() => {
    const U = d ? {
      _smui_data_table_row_accessor: !1,
      get element() {
        return _();
      },
      get checkbox() {
        return s(u);
      },
      get rowId() {
      },
      get selected() {
        return (s(u) && s(u).checked) ?? !1;
      },
      addClass: b,
      removeClass: I,
      getAttr: E,
      addAttr: S
    } : {
      _smui_data_table_row_accessor: !0,
      get element() {
        return _();
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
      addClass: b,
      removeClass: I,
      getAttr: E,
      addAttr: S
    };
    return v && v(U), () => {
      m && m(U);
    };
  });
  function b(U) {
    l[U] || (l[U] = !0);
  }
  function I(U) {
    (!(U in l) || l[U]) && (l[U] = !1);
  }
  function E(U) {
    return U in c ? c[U] ?? null : _().getAttribute(U);
  }
  function S(U, K) {
    c[U] !== K && (c[U] = K);
  }
  function x(U) {
    We(_(), "SMUIDataTableHeaderClick", U);
  }
  function g(U) {
    We(_(), "SMUIDataTableRowClick", { rowId: i(), target: U.target });
  }
  function _() {
    return o;
  }
  var C = { getElement: _ }, T = hb(), A = (U) => {
    var K;
    d ? x(U) : g(U), (K = e.onclick) == null || K.call(e, U);
  };
  Be(
    T,
    (U) => ({
      class: U,
      "aria-selected": s(u) ? s(u).checked ? "true" : "false" : void 0,
      ...c,
      ...a,
      onclick: A
    }),
    [
      () => Ue({
        "mdc-data-table__header-row": d,
        "mdc-data-table__row": !d,
        "mdc-data-table__row--selected": !d && s(u) && s(u).checked,
        ...l,
        [r()]: !0
      })
    ]
  );
  var w = Ie(T);
  return Ae(w, () => e.children ?? ge), we(T, (U) => o = U, () => o), Fe(T, (U, K) => z == null ? void 0 : z(U, K), n), O(t, T), Re(C);
}
let vb = 0;
var pb = /* @__PURE__ */ ve('<div class="mdc-data-table__header-cell-wrapper"><!> <div class="mdc-data-table__sort-status-label" aria-hidden="true"> </div></div>'), mb = /* @__PURE__ */ ve("<th><!></th>"), gb = /* @__PURE__ */ ve("<td><!></td>");
function is(t, e) {
  Oe(e, !0);
  const n = () => Pt(E, "$sort", i), r = () => Pt(S, "$sortDirection", i), [i, a] = Ln();
  let o = le("SMUI:data-table:row:header"), u = p(e, "use", 19, () => []), l = p(e, "class", 3, ""), c = p(e, "numeric", 3, !1), d = p(e, "checkbox", 3, !1), h = p(e, "columnId", 19, () => o ? "SMUI-data-table-column-" + vb++ : "SMUI-data-table-unused"), f = p(e, "sortable", 19, () => le("SMUI:data-table:sortable")), v = /* @__PURE__ */ ze(e, [
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
  ]), m, b = ye({}), I = ye({}), E = le("SMUI:data-table:sort"), S = le("SMUI:data-table:sortDirection"), x = le("SMUI:data-table:sortAscendingAriaLabel"), g = le("SMUI:data-table:sortDescendingAriaLabel");
  f() && (ee("SMUI:label:context", "data-table:sortable-header-cell"), ee("SMUI:icon-button:context", "data-table:sortable-header-cell"), ee("SMUI:icon-button:aria-describedby", h() + "-status-label"));
  const _ = le("SMUI:data-table:cell:mount"), C = le("SMUI:data-table:cell:unmount");
  st(() => {
    const P = o ? {
      _smui_data_table_header_cell_accessor: !0,
      get element() {
        return B();
      },
      get columnId() {
        return h();
      },
      addClass: T,
      removeClass: A,
      getAttr: w,
      addAttr: U
    } : {
      _smui_data_table_header_cell_accessor: !1,
      get element() {
        return B();
      },
      get columnId() {
      },
      addClass: T,
      removeClass: A,
      getAttr: w,
      addAttr: U
    };
    return _ && _(P), () => {
      C && C(P);
    };
  });
  function T(P) {
    b[P] || (b[P] = !0);
  }
  function A(P) {
    (!(P in b) || b[P]) && (b[P] = !1);
  }
  function w(P) {
    return P in I ? I[P] ?? null : B().getAttribute(P);
  }
  function U(P, y) {
    I[P] !== y && (I[P] = y);
  }
  function K(P) {
    We(B(), "SMUIDataTableHeaderCheckboxChange", P);
  }
  function H(P) {
    We(B(), "SMUIDataTableBodyCheckboxChange", P);
  }
  function B() {
    return m;
  }
  var _e = { getElement: B }, k = ie(), F = Z(k);
  {
    var D = (P) => {
      var y = mb(), L = (pe) => {
        var V;
        d() && K(pe), (V = e.onchange) == null || V.call(e, pe);
      };
      Be(
        y,
        (pe) => ({
          class: pe,
          role: "columnheader",
          scope: "col",
          "data-column-id": h(),
          "aria-sort": f() ? n() === h() ? r() : "none" : void 0,
          ...I,
          ...v,
          onchange: L
        }),
        [
          () => Ue({
            "mdc-data-table__header-cell": !0,
            "mdc-data-table__header-cell--numeric": c(),
            "mdc-data-table__header-cell--checkbox": d(),
            "mdc-data-table__header-cell--with-sort": f(),
            "mdc-data-table__header-cell--sorted": f() && n() === h(),
            ...b,
            [l()]: !0
          })
        ]
      );
      var ne = Ie(y);
      {
        var N = (pe) => {
          var V = pb(), re = Ie(V);
          Ae(re, () => e.children ?? ge);
          var X = Ee(re, 2), fe = Ie(X);
          He(() => {
            Zi(X, "id", `${h() ?? ""}-status-label`), vt(fe, n() === h() ? r() === "ascending" ? x : g : "");
          }), O(pe, V);
        }, q = (pe) => {
          var V = ie(), re = Z(V);
          Ae(re, () => e.children ?? ge), O(pe, V);
        };
        ue(ne, (pe) => {
          f() ? pe(N) : pe(q, !1);
        });
      }
      we(y, (pe) => m = pe, () => m), Fe(y, (pe, V) => z == null ? void 0 : z(pe, V), u), O(P, y);
    }, G = (P) => {
      var y = gb(), L = (N) => {
        var q;
        d() && H(N), (q = e.onchange) == null || q.call(e, N);
      };
      Be(
        y,
        (N) => ({
          class: N,
          ...I,
          ...v,
          onchange: L
        }),
        [
          () => Ue({
            "mdc-data-table__cell": !0,
            "mdc-data-table__cell--numeric": c(),
            "mdc-data-table__cell--checkbox": d(),
            ...b,
            [l()]: !0
          })
        ]
      );
      var ne = Ie(y);
      Ae(ne, () => e.children ?? ge), we(y, (N) => m = N, () => m), Fe(y, (N, q) => z == null ? void 0 : z(N, q), u), O(P, y);
    };
    ue(F, (P) => {
      o ? P(D) : P(G, !1);
    });
  }
  O(t, k);
  var te = Re(_e);
  return a(), te;
}
Nr(["click"]);
Nr(["click"]);
function Os(t, e, n) {
  return e in t ? Object.defineProperty(t, e, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = n, t;
}
var bb = Object.freeze({
  // This flag exists as a workaround for issue 454 (basically a browser bug) - seems like these rect values take time to update when in grid layout. Setting it to true can cause strange behaviour in the REPL for non-grid zones, see issue 470
  USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT: "USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT"
});
Os({}, bb.USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT, !1);
var Za, yu = {
  DND_ZONE_ACTIVE: "dnd-zone-active",
  DND_ZONE_DRAG_DISABLED: "dnd-zone-drag-disabled"
};
Za = {}, Os(Za, yu.DND_ZONE_ACTIVE, "Tab to one the items and press space-bar or enter to start dragging it"), Os(Za, yu.DND_ZONE_DRAG_DISABLED, "This is a disabled drag and drop list");
const yb = dt([]);
yb.subscribe;
Nr(["click", "pointerdown", "pointerup", "pointermove"]);
Nr(["click"]);
const Ib = 4e3;
function _b() {
  let t = ye({ items: [] }), e = 0;
  const n = (i) => {
    t.items = t.items.filter((a) => a.id !== i);
  }, r = (i, a, o, u = Ib) => {
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
_b();
var Eb = /* @__PURE__ */ ve('<div><div class="mdc-linear-progress__buffer"><div class="mdc-linear-progress__buffer-bar"></div> <div class="mdc-linear-progress__buffer-dots"></div></div> <div class="mdc-linear-progress__bar mdc-linear-progress__primary-bar"><span class="mdc-linear-progress__bar-inner"></span></div> <div class="mdc-linear-progress__bar mdc-linear-progress__secondary-bar"><span class="mdc-linear-progress__bar-inner"></span></div></div>');
function Ab(t, e) {
  Oe(e, !0);
  const [n, r] = Ln();
  let i = p(e, "use", 19, () => []), a = p(e, "class", 3, ""), o = p(e, "style", 3, ""), u = p(e, "indeterminate", 3, !1), l = p(e, "closed", 3, !1), c = p(e, "progress", 3, 0), d = p(e, "buffer", 3, void 0), h = /* @__PURE__ */ ze(e, [
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
  ]), f, v = /* @__PURE__ */ be(void 0), m = ye({}), b = ye({}), I = ye({}), E = ye({}), S = ye({}), x = le("SMUI:linear-progress:context"), g = le("SMUI:linear-progress:closed");
  Te(() => {
    g && mn(g, l());
  }), Te(() => {
    s(v) && s(v).isDeterminate() !== !u() && s(v).setDeterminate(!u());
  }), Te(() => {
    s(v) && s(v).getProgress() !== c() && s(v).setProgress(c());
  }), Te(() => {
    s(v) && (d() == null ? s(v).setBuffer(1) : s(v).setBuffer(d()));
  }), Te(() => {
    s(v) && (l() ? s(v).close() : s(v).open());
  }), st(() => (Q(
    v,
    new rb({
      addClass: C,
      forceLayout: () => {
        B().getBoundingClientRect();
      },
      setBufferBarStyle: K,
      setPrimaryBarStyle: H,
      hasClass: _,
      removeAttribute: w,
      removeClass: T,
      setAttribute: A,
      setStyle: U,
      attachResizeObserver: (y) => {
        const L = window.ResizeObserver;
        if (L) {
          const ne = new L(y);
          return ne.observe(B()), ne;
        }
        return null;
      },
      getWidth: () => B().offsetWidth
    }),
    !0
  ), s(v).init(), () => {
    var y;
    (y = s(v)) == null || y.destroy();
  }));
  function _(y) {
    return y in m ? m[y] : B().classList.contains(y);
  }
  function C(y) {
    m[y] || (m[y] = !0);
  }
  function T(y) {
    (!(y in m) || m[y]) && (m[y] = !1);
  }
  function A(y, L) {
    b[y] !== L && (b[y] = L);
  }
  function w(y) {
    (!(y in b) || b[y] != null) && (b[y] = void 0);
  }
  function U(y, L) {
    I[y] != L && (L === "" || L == null ? delete I[y] : I[y] = L);
  }
  function K(y, L) {
    E[y] != L && (L === "" || L == null ? delete E[y] : E[y] = L);
  }
  function H(y, L) {
    S[y] != L && (L === "" || L == null ? delete S[y] : S[y] = L);
  }
  function B() {
    return f;
  }
  var _e = { getElement: B }, k = Eb(), F = (y) => {
    var L;
    s(v) && s(v).handleTransitionEnd(), (L = e.ontransitionend) == null || L.call(e, y);
  };
  Be(
    k,
    (y, L) => ({
      class: y,
      style: L,
      role: "progressbar",
      "aria-valuemin": 0,
      "aria-valuemax": 1,
      "aria-valuenow": u() ? void 0 : c(),
      ...b,
      ...h,
      ontransitionend: F
    }),
    [
      () => Ue({
        "mdc-linear-progress": !0,
        "mdc-linear-progress--indeterminate": u(),
        "mdc-linear-progress--closed": l(),
        "mdc-data-table__linear-progress": x === "data-table",
        ...m,
        [a()]: !0
      }),
      () => Object.entries(I).map(([y, L]) => `${y}: ${L};`).concat([o()]).join(" ")
    ]
  );
  var D = Ie(k), G = Ie(D), te = Ee(D, 2);
  we(k, (y) => f = y, () => f), Fe(k, (y, L) => z == null ? void 0 : z(y, L), i), He(
    (y, L) => {
      rn(G, y), rn(te, L);
    },
    [
      () => Object.entries(E).map(([y, L]) => `${y}: ${L};`).join(" "),
      () => Object.entries(S).map(([y, L]) => `${y}: ${L};`).join(" ")
    ]
  ), O(t, k);
  var P = Re(_e);
  return r(), P;
}
var Cb = /* @__PURE__ */ dn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor" class="svelte-1mj71p3"><path d="M12 4l-8 8h16l-8-8z"></path></svg>'), Sb = /* @__PURE__ */ dn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor" class="svelte-1mj71p3"><path d="M12 20l8-8H4l8 8z"></path></svg>'), xb = (t, e) => e(), Tb = /* @__PURE__ */ ve('<input type="text" class="svelte-1mj71p3"/>'), wb = (t, e) => e(), Lb = /* @__PURE__ */ ve('<input type="number" class="svelte-1mj71p3"/>'), Ob = /* @__PURE__ */ ve("<!> <!>", 1), Rb = /* @__PURE__ */ ve('<div class="custom-cell-container svelte-1mj71p3"><div class="cell-header svelte-1mj71p3"><span class="header-title svelte-1mj71p3"> </span> <!></div> <!></div>'), Mb = /* @__PURE__ */ ve('<div class="cell-actions svelte-1mj71p3"></div>'), Db = /* @__PURE__ */ ve("<!> <!>", 1);
function Pb(t, e) {
  Oe(e, !0);
  const n = () => Pt(b, "$sortColumn", a), r = () => Pt(I, "$sortDirection", a), i = () => Pt(m, "$filteredData", a), [a, o] = Ln();
  let u = p(e, "loadingDone", 15, !0), l = p(e, "label", 19, mr), c = p(e, "columnDefs", 19, () => []), d = p(e, "rowData", 31, () => ye([])), h = p(e, "rowActions", 19, () => []), f = p(e, "searchInputLabel", 3, "Search"), v = ye({ name: "", color: "", number: "" }), m = dt([]), b = dt(null), I = dt(null);
  e.store.store.subscribe((g) => {
    d([...g]), E();
  });
  function E() {
    let g = d().filter((_) => c().every((C) => {
      const T = v[C.field], A = C.filterValueGetter ? C.filterValueGetter(_) : _[C.field];
      return T ? C.filterType === "number" ? A == T : A.toString().toLowerCase().includes(T.toLowerCase()) : !0;
    }));
    g = S(g), m.set(g);
  }
  function S(g) {
    let _, C;
    return b.subscribe((T) => _ = T), I.subscribe((T) => C = T), !_ || !C ? g : g.sort((T, A) => {
      let w = T[_], U = A[_];
      return w == null && (w = ""), U == null && (U = ""), C === "asc" ? w.toString().localeCompare(U.toString()) : U.toString().localeCompare(w.toString());
    });
  }
  function x(g) {
    b.update((_) => {
      if (_ === g)
        I.update((C) => C === "asc" ? "desc" : C === "desc" ? null : "asc");
      else
        return I.set("asc"), g;
      return g;
    }), E();
  }
  m.set(d()), sb(t, {
    get "table$aria-label"() {
      return l();
    },
    style: "max-width: 100%; width: 100%;",
    progress: (_) => {
      Ab(_, {
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
    children: (_, C) => {
      var T = Db(), A = Z(T);
      ub(A, {
        children: (U, K) => {
          bu(U, {
            class: "header-row",
            children: (H, B) => {
              var _e = ie(), k = Z(_e);
              _r(k, 17, c, no, (F, D) => {
                is(F, {
                  onclick: () => s(D).sortable && x(s(D).field),
                  get style() {
                    return s(D).headerStyle;
                  },
                  children: (G, te) => {
                    var P = Rb(), y = Ie(P), L = Ie(y), ne = Ie(L), N = Ee(L, 2);
                    {
                      var q = (re) => {
                        var X = ie(), fe = Z(X);
                        {
                          var ae = (Qe) => {
                            var Ze = ie(), ke = Z(Ze);
                            {
                              var Le = (Se) => {
                                var Ne = Cb();
                                O(Se, Ne);
                              }, oe = (Se) => {
                                var Ne = ie(), M = Z(Ne);
                                {
                                  var j = ($) => {
                                    var Ce = Sb();
                                    O($, Ce);
                                  };
                                  ue(
                                    M,
                                    ($) => {
                                      r() === "desc" && $(j);
                                    },
                                    !0
                                  );
                                }
                                O(Se, Ne);
                              };
                              ue(ke, (Se) => {
                                r() === "asc" ? Se(Le) : Se(oe, !1);
                              });
                            }
                            O(Qe, Ze);
                          };
                          ue(fe, (Qe) => {
                            n() === s(D).field && r() !== null && Qe(ae);
                          });
                        }
                        O(re, X);
                      };
                      ue(N, (re) => {
                        s(D).sortable && re(q);
                      });
                    }
                    var pe = Ee(y, 2);
                    {
                      var V = (re) => {
                        var X = Ob(), fe = Z(X);
                        {
                          var ae = (ke) => {
                            var Le = Tb();
                            Le.__input = [xb, E], He(() => Zi(Le, "placeholder", `${f()} ${s(D).headerName}`)), xa(Le, () => v[s(D).field], (oe) => v[s(D).field] = oe), O(ke, Le);
                          };
                          ue(fe, (ke) => {
                            s(D).filterType === "text" && ke(ae);
                          });
                        }
                        var Qe = Ee(fe, 2);
                        {
                          var Ze = (ke) => {
                            var Le = Lb();
                            Le.__input = [wb, E], He(() => Zi(Le, "placeholder", `${f()} ${s(D).headerName}`)), xa(Le, () => v[s(D).field], (oe) => v[s(D).field] = oe), O(ke, Le);
                          };
                          ue(Qe, (ke) => {
                            s(D).filterType === "number" && ke(Ze);
                          });
                        }
                        O(re, X);
                      };
                      ue(pe, (re) => {
                        s(D).filter && re(V);
                      });
                    }
                    He(() => {
                      rn(P, `min-width: ${s(D).minWidth ?? 0 ?? ""}`), vt(ne, s(D).headerName);
                    }), O(G, P);
                  },
                  $$slots: { default: !0 }
                });
              }), O(H, _e);
            },
            $$slots: { default: !0 }
          });
        },
        $$slots: { default: !0 }
      });
      var w = Ee(A, 2);
      db(w, {
        children: (U, K) => {
          var H = ie(), B = Z(H);
          _r(B, 1, i, no, (_e, k) => {
            bu(_e, {
              children: (F, D) => {
                var G = ie(), te = Z(G);
                _r(te, 17, c, (P) => P.field, (P, y) => {
                  var L = ie(), ne = Z(L);
                  {
                    var N = (pe) => {
                      is(pe, {
                        children: (V, re) => {
                          var X = Mb();
                          _r(X, 21, h, no, (fe, ae) => {
                            var Qe = ie(), Ze = Z(Qe);
                            {
                              var ke = (oe) => {
                                mu(oe, {
                                  get content() {
                                    return s(ae).tooltip;
                                  },
                                  hoverDelay: 500,
                                  children: (Se, Ne) => {
                                    {
                                      let M = /* @__PURE__ */ se(() => s(ae).disabled(s(k)));
                                      kp(Se, {
                                        get iconComponent() {
                                          return s(ae).iconComponent;
                                        },
                                        get iconStyles() {
                                          return s(ae).iconStyles;
                                        },
                                        callback: () => s(ae).callback(s(k)),
                                        get disabled() {
                                          return s(M);
                                        }
                                      });
                                    }
                                  },
                                  $$slots: { default: !0 }
                                });
                              }, Le = (oe) => {
                                mu(oe, {
                                  get content() {
                                    return s(ae).tooltip;
                                  },
                                  hoverDelay: 500,
                                  children: (Se, Ne) => {
                                    {
                                      let M = /* @__PURE__ */ se(() => s(ae).disabled(s(k)));
                                      nl(Se, {
                                        class: "button",
                                        variant: "raised",
                                        callback: () => s(ae).callback(s(k)),
                                        get disabled() {
                                          return s(M);
                                        },
                                        children: (j, $) => {
                                          var Ce = ie(), Ut = Z(Ce);
                                          {
                                            var kt = (ce) => {
                                              wg(ce, { svgStyles: "margin: unset" });
                                            }, Rn = (ce) => {
                                              var me = ie(), W = Z(me);
                                              {
                                                var Y = (et) => {
                                                  id(et, { svgStyles: "margin: unset" });
                                                }, De = (et) => {
                                                  var pt = ie(), Lt = Z(pt);
                                                  {
                                                    var Vt = (nt) => {
                                                      Rg(nt, { svgStyles: "margin: unset" });
                                                    }, cr = (nt) => {
                                                      var Ct = ie(), Gt = Z(Ct);
                                                      {
                                                        var Fn = (Yt) => {
                                                          Dg(Yt, { svgStyles: "margin: unset" });
                                                        }, pi = (Yt) => {
                                                          var Ge = ie(), at = Z(Ge);
                                                          {
                                                            var tt = (Rt) => {
                                                              Bg(Rt, { svgStyles: "margin: unset" });
                                                            }, Ot = (Rt) => {
                                                              var rt = ie(), yt = Z(rt);
                                                              {
                                                                var St = (ft) => {
                                                                  Vg(ft, { svgStyles: "margin: unset" });
                                                                }, Je = (ft) => {
                                                                  var yn = ie(), sn = Z(yn);
                                                                  {
                                                                    var It = (xt) => {
                                                                      jg(xt, { svgStyles: "margin: unset" });
                                                                    }, Mt = (xt) => {
                                                                      Ng(xt, { svgStyles: "margin: unset" });
                                                                    };
                                                                    ue(
                                                                      sn,
                                                                      (xt) => {
                                                                        s(ae).icon === "delete" ? xt(It) : xt(Mt, !1);
                                                                      },
                                                                      !0
                                                                    );
                                                                  }
                                                                  O(ft, yn);
                                                                };
                                                                ue(
                                                                  yt,
                                                                  (ft) => {
                                                                    s(ae).icon === "edit" ? ft(St) : ft(Je, !1);
                                                                  },
                                                                  !0
                                                                );
                                                              }
                                                              O(Rt, rt);
                                                            };
                                                            ue(
                                                              at,
                                                              (Rt) => {
                                                                s(ae).icon === "remove" ? Rt(tt) : Rt(Ot, !1);
                                                              },
                                                              !0
                                                            );
                                                          }
                                                          O(Yt, Ge);
                                                        };
                                                        ue(
                                                          Gt,
                                                          (Yt) => {
                                                            s(ae).icon === "find-in-page" ? Yt(Fn) : Yt(pi, !1);
                                                          },
                                                          !0
                                                        );
                                                      }
                                                      O(nt, Ct);
                                                    };
                                                    ue(
                                                      Lt,
                                                      (nt) => {
                                                        s(ae).icon === "download" ? nt(Vt) : nt(cr, !1);
                                                      },
                                                      !0
                                                    );
                                                  }
                                                  O(et, pt);
                                                };
                                                ue(
                                                  W,
                                                  (et) => {
                                                    s(ae).icon === "cancel" ? et(Y) : et(De, !1);
                                                  },
                                                  !0
                                                );
                                              }
                                              O(ce, me);
                                            };
                                            ue(Ut, (ce) => {
                                              s(ae).icon === "add" ? ce(kt) : ce(Rn, !1);
                                            });
                                          }
                                          O(j, Ce);
                                        },
                                        $$slots: { default: !0 }
                                      });
                                    }
                                  },
                                  $$slots: { default: !0 }
                                });
                              };
                              ue(Ze, (oe) => {
                                s(ae).iconComponent ? oe(ke) : oe(Le, !1);
                              });
                            }
                            O(fe, Qe);
                          }), O(V, X);
                        },
                        $$slots: { default: !0 }
                      });
                    }, q = (pe) => {
                      is(pe, {
                        get numeric() {
                          return s(y).numeric;
                        },
                        get style() {
                          return s(y).cellStyle;
                        },
                        children: (V, re) => {
                          var X = ie(), fe = Z(X);
                          {
                            var ae = (Ze) => {
                              const ke = /* @__PURE__ */ se(() => s(y).cellRenderer);
                              var Le = ie(), oe = Z(Le);
                              sr(oe, () => s(ke), (Se, Ne) => {
                                Ne(Se, it(
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
                              }), O(Ze, Le);
                            }, Qe = (Ze) => {
                              var ke = ie(), Le = Z(ke);
                              {
                                var oe = (Ne) => {
                                  var M = Xt();
                                  He((j) => vt(M, j), [
                                    () => s(y).valueFormatter(s(k)[s(y).field])
                                  ]), O(Ne, M);
                                }, Se = (Ne) => {
                                  var M = Xt();
                                  He(() => vt(M, s(k)[s(y).field] ?? "")), O(Ne, M);
                                };
                                ue(
                                  Le,
                                  (Ne) => {
                                    s(y).valueFormatter ? Ne(oe) : Ne(Se, !1);
                                  },
                                  !0
                                );
                              }
                              O(Ze, ke);
                            };
                            ue(fe, (Ze) => {
                              s(y).cellRenderer ? Ze(ae) : Ze(Qe, !1);
                            });
                          }
                          O(V, X);
                        },
                        $$slots: { default: !0 }
                      });
                    };
                    ue(ne, (pe) => {
                      s(y).field === "actions" ? pe(N) : pe(q, !1);
                    });
                  }
                  O(P, L);
                }), O(F, G);
              },
              $$slots: { default: !0 }
            });
          }), O(U, H);
        },
        $$slots: { default: !0 }
      }), O(_, T);
    },
    $$slots: { progress: !0, default: !0 }
  }), Re(), o();
}
Nr(["input"]);
function bt(t) {
  return typeof t == "function";
}
function sl(t) {
  var e = function(r) {
    Error.call(r), r.stack = new Error().stack;
  }, n = t(e);
  return n.prototype = Object.create(Error.prototype), n.prototype.constructor = n, n;
}
var as = sl(function(t) {
  return function(n) {
    t(this), this.message = n ? n.length + ` errors occurred during unsubscription:
` + n.map(function(r, i) {
      return i + 1 + ") " + r.toString();
    }).join(`
  `) : "", this.name = "UnsubscriptionError", this.errors = n;
  };
});
function Rs(t, e) {
  if (t) {
    var n = t.indexOf(e);
    0 <= n && t.splice(n, 1);
  }
}
var Ho = function() {
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
            for (var u = wt(o), l = u.next(); !l.done; l = u.next()) {
              var c = l.value;
              c.remove(this);
            }
          } catch (b) {
            e = { error: b };
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
      if (bt(d))
        try {
          d();
        } catch (b) {
          a = b instanceof as ? b.errors : [b];
        }
      var h = this._finalizers;
      if (h) {
        this._finalizers = null;
        try {
          for (var f = wt(h), v = f.next(); !v.done; v = f.next()) {
            var m = v.value;
            try {
              Iu(m);
            } catch (b) {
              a = a ?? [], b instanceof as ? a = Kn(Kn([], wr(a)), wr(b.errors)) : a.push(b);
            }
          }
        } catch (b) {
          r = { error: b };
        } finally {
          try {
            v && !v.done && (i = f.return) && i.call(f);
          } finally {
            if (r) throw r.error;
          }
        }
      }
      if (a)
        throw new as(a);
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
    n === e ? this._parentage = null : Array.isArray(n) && Rs(n, e);
  }, t.prototype.remove = function(e) {
    var n = this._finalizers;
    n && Rs(n, e), e instanceof t && e._removeParent(this);
  }, t.EMPTY = function() {
    var e = new t();
    return e.closed = !0, e;
  }(), t;
}();
Ho.EMPTY;
function od(t) {
  return t instanceof Ho || t && "closed" in t && bt(t.remove) && bt(t.add) && bt(t.unsubscribe);
}
function Iu(t) {
  bt(t) ? t() : t.unsubscribe();
}
var Nb = {
  Promise: void 0
}, Ub = {
  setTimeout: function(t, e) {
    for (var n = [], r = 2; r < arguments.length; r++)
      n[r - 2] = arguments[r];
    return setTimeout.apply(void 0, Kn([t, e], wr(n)));
  },
  clearTimeout: function(t) {
    return clearTimeout(t);
  },
  delegate: void 0
};
function sd(t) {
  Ub.setTimeout(function() {
    throw t;
  });
}
function _u() {
}
function Hb(t) {
  t();
}
var ll = function(t) {
  $e(e, t);
  function e(n) {
    var r = t.call(this) || this;
    return r.isStopped = !1, n ? (r.destination = n, od(n) && n.add(r)) : r.destination = kb, r;
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
}(Ho), Fb = function() {
  function t(e) {
    this.partialObserver = e;
  }
  return t.prototype.next = function(e) {
    var n = this.partialObserver;
    if (n.next)
      try {
        n.next(e);
      } catch (r) {
        Qa(r);
      }
  }, t.prototype.error = function(e) {
    var n = this.partialObserver;
    if (n.error)
      try {
        n.error(e);
      } catch (r) {
        Qa(r);
      }
    else
      Qa(e);
  }, t.prototype.complete = function() {
    var e = this.partialObserver;
    if (e.complete)
      try {
        e.complete();
      } catch (n) {
        Qa(n);
      }
  }, t;
}(), Ms = function(t) {
  $e(e, t);
  function e(n, r, i) {
    var a = t.call(this) || this, o;
    return bt(n) || !n ? o = {
      next: n ?? void 0,
      error: r ?? void 0,
      complete: i ?? void 0
    } : o = n, a.destination = new Fb(o), a;
  }
  return e;
}(ll);
function Qa(t) {
  sd(t);
}
function Bb(t) {
  throw t;
}
var kb = {
  closed: !0,
  next: _u,
  error: Bb,
  complete: _u
}, ul = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}();
function Fo(t) {
  return t;
}
function Vb(t) {
  return t.length === 0 ? Fo : t.length === 1 ? t[0] : function(n) {
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
    var i = this, a = jb(e) ? e : new Ms(e, n, r);
    return Hb(function() {
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
    return n = Eu(n), new n(function(i, a) {
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
  }, t.prototype[ul] = function() {
    return this;
  }, t.prototype.pipe = function() {
    for (var e = [], n = 0; n < arguments.length; n++)
      e[n] = arguments[n];
    return Vb(e)(this);
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
  return (e = t ?? Nb.Promise) !== null && e !== void 0 ? e : Promise;
}
function Gb(t) {
  return t && bt(t.next) && bt(t.error) && bt(t.complete);
}
function jb(t) {
  return t && t instanceof ll || Gb(t) && od(t);
}
function qb(t) {
  return bt(t == null ? void 0 : t.lift);
}
function Br(t) {
  return function(e) {
    if (qb(e))
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
function Lr(t, e, n, r, i) {
  return new Wb(t, e, n, r, i);
}
var Wb = function(t) {
  $e(e, t);
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
}(ll), zb = {
  now: function() {
    return Date.now();
  }
}, Kb = function(t) {
  $e(e, t);
  function e(n, r) {
    return t.call(this) || this;
  }
  return e.prototype.schedule = function(n, r) {
    return this;
  }, e;
}(Ho), Au = {
  setInterval: function(t, e) {
    for (var n = [], r = 2; r < arguments.length; r++)
      n[r - 2] = arguments[r];
    return setInterval.apply(void 0, Kn([t, e], wr(n)));
  },
  clearInterval: function(t) {
    return clearInterval(t);
  },
  delegate: void 0
}, Xb = function(t) {
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
      this.work = this.state = this.scheduler = null, this.pending = !1, Rs(a, this), r != null && (this.id = this.recycleAsyncId(i, r, null)), this.delay = null, t.prototype.unsubscribe.call(this);
    }
  }, e;
}(Kb), Cu = function() {
  function t(e, n) {
    n === void 0 && (n = t.now), this.schedulerActionCtor = e, this.now = n;
  }
  return t.prototype.schedule = function(e, n, r) {
    return n === void 0 && (n = 0), new this.schedulerActionCtor(this, e).schedule(r, n);
  }, t.now = zb.now, t;
}(), Yb = function(t) {
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
}(Cu), ld = new Yb(Xb), Zb = ld, Qb = new bn(function(t) {
  return t.complete();
});
function ud(t) {
  return t && bt(t.schedule);
}
function cd(t) {
  return t[t.length - 1];
}
function Jb(t) {
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
  return bt(t[ul]);
}
function pd(t) {
  return Symbol.asyncIterator && bt(t == null ? void 0 : t[Symbol.asyncIterator]);
}
function md(t) {
  return new TypeError("You provided " + (t !== null && typeof t == "object" ? "an invalid object" : "'" + t + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
}
function $b() {
  return typeof Symbol != "function" || !Symbol.iterator ? "@@iterator" : Symbol.iterator;
}
var gd = $b();
function bd(t) {
  return bt(t == null ? void 0 : t[gd]);
}
function yd(t) {
  return Oh(this, arguments, function() {
    var n, r, i, a;
    return Js(this, function(o) {
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
  return bt(t == null ? void 0 : t.getReader);
}
function hi(t) {
  if (t instanceof bn)
    return t;
  if (t != null) {
    if (vd(t))
      return ey(t);
    if (fd(t))
      return ty(t);
    if (hd(t))
      return ny(t);
    if (pd(t))
      return _d(t);
    if (bd(t))
      return ry(t);
    if (Id(t))
      return iy(t);
  }
  throw md(t);
}
function ey(t) {
  return new bn(function(e) {
    var n = t[ul]();
    if (bt(n.subscribe))
      return n.subscribe(e);
    throw new TypeError("Provided object does not correctly implement Symbol.observable");
  });
}
function ty(t) {
  return new bn(function(e) {
    for (var n = 0; n < t.length && !e.closed; n++)
      e.next(t[n]);
    e.complete();
  });
}
function ny(t) {
  return new bn(function(e) {
    t.then(function(n) {
      e.closed || (e.next(n), e.complete());
    }, function(n) {
      return e.error(n);
    }).then(null, sd);
  });
}
function ry(t) {
  return new bn(function(e) {
    var n, r;
    try {
      for (var i = wt(t), a = i.next(); !a.done; a = i.next()) {
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
function _d(t) {
  return new bn(function(e) {
    ay(t, e).catch(function(n) {
      return e.error(n);
    });
  });
}
function iy(t) {
  return _d(yd(t));
}
function ay(t, e) {
  var n, r, i, a;
  return _c(this, void 0, void 0, function() {
    var o, u;
    return Js(this, function(l) {
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
function xr(t, e, n, r, i) {
  r === void 0 && (r = 0), i === void 0 && (i = !1);
  var a = e.schedule(function() {
    n(), i ? t.add(this.schedule(null, r)) : this.unsubscribe();
  }, r);
  if (t.add(a), !i)
    return a;
}
function Ed(t, e) {
  return e === void 0 && (e = 0), Br(function(n, r) {
    n.subscribe(Lr(r, function(i) {
      return xr(r, t, function() {
        return r.next(i);
      }, e);
    }, function() {
      return xr(r, t, function() {
        return r.complete();
      }, e);
    }, function(i) {
      return xr(r, t, function() {
        return r.error(i);
      }, e);
    }));
  });
}
function Ad(t, e) {
  return e === void 0 && (e = 0), Br(function(n, r) {
    r.add(t.schedule(function() {
      return n.subscribe(r);
    }, e));
  });
}
function oy(t, e) {
  return hi(t).pipe(Ad(e), Ed(e));
}
function sy(t, e) {
  return hi(t).pipe(Ad(e), Ed(e));
}
function ly(t, e) {
  return new bn(function(n) {
    var r = 0;
    return e.schedule(function() {
      r === t.length ? n.complete() : (n.next(t[r++]), n.closed || this.schedule());
    });
  });
}
function uy(t, e) {
  return new bn(function(n) {
    var r;
    return xr(n, e, function() {
      r = t[gd](), xr(n, e, function() {
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
      return bt(r == null ? void 0 : r.return) && r.return();
    };
  });
}
function Cd(t, e) {
  if (!t)
    throw new Error("Iterable cannot be null");
  return new bn(function(n) {
    xr(n, e, function() {
      var r = t[Symbol.asyncIterator]();
      xr(n, e, function() {
        r.next().then(function(i) {
          i.done ? n.complete() : n.next(i.value);
        });
      }, 0, !0);
    });
  });
}
function cy(t, e) {
  return Cd(yd(t), e);
}
function dy(t, e) {
  if (t != null) {
    if (vd(t))
      return oy(t, e);
    if (fd(t))
      return ly(t, e);
    if (hd(t))
      return sy(t, e);
    if (pd(t))
      return Cd(t, e);
    if (bd(t))
      return uy(t, e);
    if (Id(t))
      return cy(t, e);
  }
  throw md(t);
}
function Bo(t, e) {
  return e ? dy(t, e) : hi(t);
}
function La() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  var n = dd(t);
  return Bo(t, n);
}
var fy = sl(function(t) {
  return function() {
    t(this), this.name = "EmptyError", this.message = "no elements in sequence";
  };
});
function hy(t, e) {
  return new Promise(function(n, r) {
    var i = !1, a;
    t.subscribe({
      next: function(o) {
        a = o, i = !0;
      },
      error: r,
      complete: function() {
        i ? n(a) : r(new fy());
      }
    });
  });
}
function vy(t) {
  return t instanceof Date && !isNaN(t);
}
function xn(t, e) {
  return Br(function(n, r) {
    var i = 0;
    n.subscribe(Lr(r, function(a) {
      r.next(t.call(e, a, i++));
    }));
  });
}
var py = Array.isArray;
function my(t, e) {
  return py(e) ? t.apply(void 0, Kn([], wr(e))) : t(e);
}
function gy(t) {
  return xn(function(e) {
    return my(t, e);
  });
}
var by = Array.isArray, yy = Object.getPrototypeOf, Iy = Object.prototype, _y = Object.keys;
function Ey(t) {
  if (t.length === 1) {
    var e = t[0];
    if (by(e))
      return { args: e, keys: null };
    if (Ay(e)) {
      var n = _y(e);
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
function Ay(t) {
  return t && typeof t == "object" && yy(t) === Iy;
}
function Cy(t, e) {
  return t.reduce(function(n, r, i) {
    return n[r] = e[i], n;
  }, {});
}
function Sy() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  var n = dd(t), r = Jb(t), i = Ey(t), a = i.args, o = i.keys;
  if (a.length === 0)
    return Bo([], n);
  var u = new bn(xy(a, n, o ? function(l) {
    return Cy(o, l);
  } : Fo));
  return r ? u.pipe(gy(r)) : u;
}
function xy(t, e, n) {
  return n === void 0 && (n = Fo), function(r) {
    Su(e, function() {
      for (var i = t.length, a = new Array(i), o = i, u = i, l = function(d) {
        Su(e, function() {
          var h = Bo(t[d], e), f = !1;
          h.subscribe(Lr(r, function(v) {
            a[d] = v, f || (f = !0, u--), u || r.next(n(a.slice()));
          }, function() {
            --o || r.complete();
          }));
        }, r);
      }, c = 0; c < i; c++)
        l(c);
    }, r);
  };
}
function Su(t, e, n) {
  t ? xr(n, t, e) : e();
}
function Ty(t, e, n, r, i, a, o, u) {
  var l = [], c = 0, d = 0, h = !1, f = function() {
    h && !l.length && !c && e.complete();
  }, v = function(b) {
    return c < r ? m(b) : l.push(b);
  }, m = function(b) {
    c++;
    var I = !1;
    hi(n(b, d++)).subscribe(Lr(e, function(E) {
      e.next(E);
    }, function() {
      I = !0;
    }, void 0, function() {
      if (I)
        try {
          c--;
          for (var E = function() {
            var S = l.shift();
            o || m(S);
          }; l.length && c < r; )
            E();
          f();
        } catch (S) {
          e.error(S);
        }
    }));
  };
  return t.subscribe(Lr(e, v, function() {
    h = !0, f();
  })), function() {
  };
}
function vo(t, e, n) {
  return n === void 0 && (n = 1 / 0), bt(e) ? vo(function(r, i) {
    return xn(function(a, o) {
      return e(r, a, i, o);
    })(hi(t(r, i)));
  }, n) : (typeof e == "number" && (n = e), Br(function(r, i) {
    return Ty(r, i, t, n);
  }));
}
function wy(t, e, n) {
  n === void 0 && (n = Zb);
  var r = -1;
  return e != null && (ud(e) ? n = e : r = e), new bn(function(i) {
    var a = vy(t) ? +t - n.now() : t;
    a < 0 && (a = 0);
    var o = 0;
    return n.schedule(function() {
      i.closed || (i.next(o++), 0 <= r ? this.schedule(void 0, r) : i.complete());
    }, a);
  });
}
function Oa(t) {
  return Br(function(e, n) {
    var r = null, i = !1, a;
    r = e.subscribe(Lr(n, void 0, void 0, function(o) {
      a = hi(t(o, Oa(t)(e))), r ? (r.unsubscribe(), r = null, a.subscribe(n)) : i = !0;
    })), i && (r.unsubscribe(), r = null, a.subscribe(n));
  });
}
function Ly(t, e) {
  return bt(e) ? vo(t, e, 1) : vo(t, 1);
}
function Or(t) {
  return t <= 0 ? function() {
    return Qb;
  } : Br(function(e, n) {
    var r = 0;
    e.subscribe(Lr(n, function(i) {
      ++r <= t && (n.next(i), t <= r && n.complete());
    }));
  });
}
function Oy(t) {
  return xn(function() {
    return t;
  });
}
function Ry(t, e) {
  return vo(function(n, r) {
    return hi(t(n, r)).pipe(Or(1), Oy(n));
  });
}
function My(t, e) {
  e === void 0 && (e = ld);
  var n = wy(t, e);
  return Ry(function() {
    return n;
  });
}
function Dy(t) {
  return Br(function(e, n) {
    try {
      e.subscribe(n);
    } finally {
      n.add(t);
    }
  });
}
function Ra(t, e, n) {
  var r = bt(t) || e || n ? { next: t, error: e, complete: n } : t;
  return r ? Br(function(i, a) {
    var o;
    (o = r.subscribe) === null || o === void 0 || o.call(r);
    var u = !0;
    i.subscribe(Lr(a, function(l) {
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
  }) : Fo;
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
var Py = /* @__PURE__ */ function() {
  function t(e, n, r, i) {
    i === void 0 && (i = "download_load"), this.originalEvent = e, this.xhr = n, this.request = r, this.type = i;
    var a = n.status, o = n.responseType;
    this.status = a ?? 0, this.responseType = o ?? "";
    var u = n.getAllResponseHeaders();
    this.responseHeaders = u ? u.split(`
`).reduce(function(d, h) {
      var f = h.indexOf(": ");
      return d[h.slice(0, f)] = h.slice(f + 2), d;
    }, {}) : {}, this.response = Sd(n);
    var l = e.loaded, c = e.total;
    this.loaded = l, this.total = c;
  }
  return t;
}(), po = sl(function(t) {
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
}), Ny = function() {
  function t(e, n) {
    return po.call(this, "ajax timeout", e, n), this.name = "AjaxTimeoutError", this;
  }
  return t.prototype = Object.create(po.prototype), t;
}();
function Uy(t, e) {
  return vi({ method: "GET", url: t, headers: e });
}
function Hy(t, e, n) {
  return vi({ method: "POST", url: t, body: e, headers: n });
}
function Fy(t, e) {
  return vi({ method: "DELETE", url: t, headers: e });
}
function By(t, e, n) {
  return vi({ method: "PUT", url: t, body: e, headers: n });
}
function ky(t, e, n) {
  return vi({ method: "PATCH", url: t, body: e, headers: n });
}
var Vy = xn(function(t) {
  return t.response;
});
function Gy(t, e) {
  return Vy(vi({
    method: "GET",
    url: t,
    headers: e
  }));
}
var vi = function() {
  var t = function(e) {
    var n = typeof e == "string" ? {
      url: e
    } : e;
    return qy(n);
  };
  return t.get = Uy, t.post = Hy, t.delete = Fy, t.put = By, t.patch = ky, t.getJSON = Gy, t;
}(), jy = "upload", xu = "download", os = "loadstart", ss = "progress", Tu = "load";
function qy(t) {
  return new bn(function(e) {
    var n, r, i = de({ async: !0, crossDomain: !1, withCredentials: !1, method: "GET", timeout: 0, responseType: "json" }, t), a = i.queryParams, o = i.body, u = i.headers, l = i.url;
    if (!l)
      throw new TypeError("url is required");
    if (a) {
      var c;
      if (l.includes("?")) {
        var d = l.split("?");
        if (2 < d.length)
          throw new TypeError("invalid url");
        c = new URLSearchParams(d[1]), new URLSearchParams(a).forEach(function(D, G) {
          return c.set(G, D);
        }), l = d[0] + "?" + c;
      } else
        c = new URLSearchParams(a), l = l + "?" + c;
    }
    var h = {};
    if (u)
      for (var f in u)
        u.hasOwnProperty(f) && (h[f.toLowerCase()] = u[f]);
    var v = i.crossDomain;
    !v && !("x-requested-with" in h) && (h["x-requested-with"] = "XMLHttpRequest");
    var m = i.withCredentials, b = i.xsrfCookieName, I = i.xsrfHeaderName;
    if ((m || !v) && b && I) {
      var E = (r = (n = document == null ? void 0 : document.cookie.match(new RegExp("(^|;\\s*)(" + b + ")=([^;]*)"))) === null || n === void 0 ? void 0 : n.pop()) !== null && r !== void 0 ? r : "";
      E && (h[I] = E);
    }
    var S = Wy(o, h), x = de(de({}, i), {
      url: l,
      headers: h,
      body: S
    }), g;
    g = t.createXHR ? t.createXHR() : new XMLHttpRequest();
    {
      var _ = t.progressSubscriber, C = t.includeDownloadProgress, T = C === void 0 ? !1 : C, A = t.includeUploadProgress, w = A === void 0 ? !1 : A, U = function(D, G) {
        g.addEventListener(D, function() {
          var te, P = G();
          (te = _ == null ? void 0 : _.error) === null || te === void 0 || te.call(_, P), e.error(P);
        });
      };
      U("timeout", function() {
        return new Ny(g, x);
      }), U("abort", function() {
        return new po("aborted", g, x);
      });
      var K = function(D, G) {
        return new Py(G, g, x, D + "_" + G.type);
      }, H = function(D, G, te) {
        D.addEventListener(G, function(P) {
          e.next(K(te, P));
        });
      };
      w && [os, ss, Tu].forEach(function(D) {
        return H(g.upload, D, jy);
      }), _ && [os, ss].forEach(function(D) {
        return g.upload.addEventListener(D, function(G) {
          var te;
          return (te = _ == null ? void 0 : _.next) === null || te === void 0 ? void 0 : te.call(_, G);
        });
      }), T && [os, ss].forEach(function(D) {
        return H(g, D, xu);
      });
      var B = function(D) {
        var G = "ajax error" + (D ? " " + D : "");
        e.error(new po(G, g, x));
      };
      g.addEventListener("error", function(D) {
        var G;
        (G = _ == null ? void 0 : _.error) === null || G === void 0 || G.call(_, D), B();
      }), g.addEventListener(Tu, function(D) {
        var G, te, P = g.status;
        if (P < 400) {
          (G = _ == null ? void 0 : _.complete) === null || G === void 0 || G.call(_);
          var y = void 0;
          try {
            y = K(xu, D);
          } catch (L) {
            e.error(L);
            return;
          }
          e.next(y), e.complete();
        } else
          (te = _ == null ? void 0 : _.error) === null || te === void 0 || te.call(_, D), B(P);
      });
    }
    var _e = x.user, k = x.method, F = x.async;
    _e ? g.open(k, l, F, _e, x.password) : g.open(k, l, F), F && (g.timeout = x.timeout, g.responseType = x.responseType), "withCredentials" in g && (g.withCredentials = x.withCredentials);
    for (var f in h)
      h.hasOwnProperty(f) && g.setRequestHeader(f, h[f]);
    return S ? g.send(S) : g.send(), function() {
      g && g.readyState !== 4 && g.abort();
    };
  });
}
function Wy(t, e) {
  var n;
  if (!t || typeof t == "string" || Qy(t) || Jy(t) || Ky(t) || Xy(t) || Yy(t) || $y(t))
    return t;
  if (Zy(t))
    return t.buffer;
  if (typeof t == "object")
    return e["content-type"] = (n = e["content-type"]) !== null && n !== void 0 ? n : "application/json;charset=utf-8", JSON.stringify(t);
  throw new TypeError("Unknown body type");
}
var zy = Object.prototype.toString;
function cl(t, e) {
  return zy.call(t) === "[object " + e + "]";
}
function Ky(t) {
  return cl(t, "ArrayBuffer");
}
function Xy(t) {
  return cl(t, "File");
}
function Yy(t) {
  return cl(t, "Blob");
}
function Zy(t) {
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView(t);
}
function Qy(t) {
  return typeof FormData < "u" && t instanceof FormData;
}
function Jy(t) {
  return typeof URLSearchParams < "u" && t instanceof URLSearchParams;
}
function $y(t) {
  return typeof ReadableStream < "u" && t instanceof ReadableStream;
}
class eI {
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
const tI = new eI("https://demo.compas.energy", {}, "DSOM Versatel Production URL"), nI = [tI], rI = nI[0].getUrl();
class dl {
  constructor(e = {}) {
    this.configuration = e;
  }
  get basePath() {
    return this.configuration.basePath ?? rI;
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
  constructor(e = new dl()) {
    this.configuration = e, this.middleware = [], this.withMiddleware = (n) => {
      const r = this.clone();
      return r.middleware = r.middleware.concat(n), r;
    }, this.withPreMiddleware = (n) => this.withMiddleware(n.map((r) => ({ pre: r }))), this.withPostMiddleware = (n) => this.withMiddleware(n.map((r) => ({ post: r }))), this.createRequestArgs = ({ url: n, query: r, method: i, headers: a, body: o, responseType: u }) => ({
      url: `${this.configuration.basePath}${n}${r && Object.keys(r).length ? `?${iI(r)}` : ""}`,
      method: i,
      headers: a,
      body: o instanceof FormData ? o : JSON.stringify(o),
      responseType: u ?? "json"
    }), this.rxjsRequest = (n) => La(n).pipe(
      xn((r) => (this.middleware.filter((i) => i.pre).forEach((i) => r = i.pre(r)), r)),
      Ly(
        (r) => vi(r).pipe(
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
const Wt = (t) => encodeURIComponent(`${t}`), iI = (t) => Object.entries(t).map(
  ([e, n]) => n instanceof Array ? n.map((r) => `${Wt(e)}=${Wt(r)}`).join("&") : `${Wt(e)}=${Wt(n)}`
).join("&"), un = (t, e, n) => {
  if (t == null)
    throw new Error(`Parameter "${e}" was null or undefined when calling "${n}".`);
};
class aI extends xd {
  archiveResource({ id: e, version: n, xAuthor: r, xApprover: i, contentType: a, xFilename: o, body: u }, l) {
    un(e, "id", "archiveResource"), un(n, "version", "archiveResource");
    const c = {
      "Content-Type": "application/octet-stream",
      ...r != null ? { "X-author": String(r) } : void 0,
      ...i != null ? { "X-approver": String(i) } : void 0,
      ...a != null ? { "Content-Type": String(a) } : void 0,
      ...o != null ? { "X-filename": String(o) } : void 0
    };
    return this.request({
      url: "/api/archive/referenced-resource/{id}/versions/{version}".replace("{id}", Wt(e)).replace("{version}", Wt(n)),
      method: "POST",
      headers: c,
      body: u
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
class oI extends xd {
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
  constructor(e, n, r, i, a, o, u, l, c, d, h, f) {
    this._uuid = e, this._name = n, this._note = r, this._author = i, this._approver = a, this._type = o, this._voltage = u, this._modifiedAt = l, this._archivedAt = c, this._contentType = d, this._version = h, this._fields = f;
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
class Zr {
  constructor() {
    this.baseUrl = "/compas-scl-data-service", this.dummySearchResults = [
      new ga(
        mr(),
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
        mr(),
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
    return Zr.instance || (Zr.instance = new Zr()), Zr.instance;
  }
  searchArchive(e) {
    return this.generateApiClient().searchArchivedResources({ archivedResourcesSearch: e }).pipe(
      Or(1),
      xn((n) => n.resources),
      xn(
        (n) => n.map((r) => this.mapToArchiveSearchResult(r))
      ),
      Oa(() => La(this.dummySearchResults)),
      My(500)
    );
  }
  retrieveArchivedResourceHistory(e) {
    return this.generateApiClient().retrieveArchivedResourceHistory({ id: e }).pipe(
      Or(1),
      xn((n) => n.versions),
      xn(
        (n) => n.map((r) => this.mapToArchiveSearchResult(r))
      ),
      Oa(() => La([
        new ga(
          mr(),
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
          [{ key: "SOURCE_RESOURCE_ID", value: mr() }]
        ),
        new ga(
          mr(),
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
          [{ key: "SOURCE_RESOURCE_ID", value: mr() }]
        )
      ]))
    );
  }
  findByUUIDAndVersion(e, n, r) {
    return Bo(
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
    const e = new dl({
      basePath: this.baseUrl
      // accessToken: authInfo.token,
    });
    return new aI(e);
  }
}
class Ti {
  constructor() {
    this.baseUrl = "/compas-scl-data-service";
  }
  static getInstance() {
    return Ti.instance || (Ti.instance = new Ti()), Ti.instance;
  }
  listLocations() {
    return this.generateApiClient().getLocations({}).pipe(
      Or(1),
      Oa(() => La([
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
    const e = new dl({
      basePath: this.baseUrl
      // accessToken: authInfo.token,
    });
    return new oI(e);
  }
}
var Na;
const Li = class Li {
  constructor() {
    Xe(this, Na, dt(/* @__PURE__ */ new Map()));
  }
  static getInstance() {
    return Li.instance || (Li.instance = new Li()), Li.instance;
  }
  get store() {
    return J(this, Na);
  }
  updateData(e) {
    J(this, Na).set(e);
  }
};
Na = new WeakMap();
let Ds = Li;
var Vi;
const Oi = class Oi {
  constructor() {
    Xe(this, Vi, dt(/* @__PURE__ */ new Map()));
  }
  static getInstance() {
    return Oi.instance || (Oi.instance = new Oi()), Oi.instance;
  }
  get store() {
    return J(this, Vi);
  }
  updateData(e) {
    J(this, Vi).set(e);
  }
  getLocationNameByUuid(e) {
    return Oo(J(this, Vi)).get(e);
  }
};
Vi = new WeakMap();
let mo = Oi;
var Gi;
const Ri = class Ri {
  constructor() {
    Xe(this, Gi, dt([]));
  }
  static getInstance() {
    return Ri.instance || (Ri.instance = new Ri()), Ri.instance;
  }
  get store() {
    return J(this, Gi);
  }
  get currentData() {
    return Oo(J(this, Gi));
  }
  updateData(e) {
    J(this, Gi).set(e);
  }
};
Gi = new WeakMap();
let Ps = Ri;
var ji;
const Mi = class Mi {
  constructor() {
    Xe(this, ji, dt([]));
  }
  static getInstance() {
    return Mi.instance || (Mi.instance = new Mi()), Mi.instance;
  }
  get store() {
    return J(this, ji);
  }
  get currentData() {
    return Oo(J(this, ji));
  }
  updateData(e) {
    J(this, ji).set(e);
  }
};
ji = new WeakMap();
let Ns = Mi;
class wi {
  constructor() {
    this.locationService = Ti.getInstance(), this.archiveExplorerLocationStore = mo.getInstance();
  }
  static getInstance() {
    return wi.instance || (wi.instance = new wi()), wi.instance;
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
    return hy(
      this.locationService.listLocations().pipe(
        Or(1),
        Ra((e) => {
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
function sI(t, e) {
  Oe(e, !0);
  const n = Zr.getInstance(), r = { store: dt([]) };
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
      valueFormatter: u
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
      callback: (c) => l(c),
      disabled: () => !1
    }
  ];
  function u(c) {
    return new Date(c).toLocaleDateString();
  }
  st(() => {
    e.searchResult && n.retrieveArchivedResourceHistory(e.searchResult.uuid).pipe(Or(1), Ra((c) => {
      r.store.set(c), Q(i, !0);
    })).subscribe();
  });
  function l(c) {
    var h;
    let d;
    c.fields && c.fields.length && (d = (h = c.fields.find((f) => f.key === "SOURCE_RESOURCE_ID")) == null ? void 0 : h.value), n.findByUUIDAndVersion(d, c.type, c.version).pipe(
      Or(1),
      Ra((f) => {
        const v = window.URL.createObjectURL(f), m = document.createElement("a");
        m.href = v, m.download = c.filename, m.style.display = "none", document.body.appendChild(m), m.click(), document.body.removeChild(m), window.URL.revokeObjectURL(v);
      }),
      Oa((f) => (console.error(f), alert(f), La(void 0)))
    ).subscribe();
  }
  Pb(t, {
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
  }), Re();
}
var lI = /* @__PURE__ */ ve("<span><!></span>"), uI = /* @__PURE__ */ ve("<!> <br/>", 1), cI = /* @__PURE__ */ ve("<i> </i>"), dI = /* @__PURE__ */ ve('<div class="result-container"><div class="content"><!></div></div>');
function fI(t, e) {
  Oe(e, !0);
  let n = p(e, "searchResults", 19, () => []), r = p(e, "noResourcesLabel", 3, "No resources found.");
  var i = dI(), a = Ie(i), o = Ie(a);
  {
    var u = (c) => {
      var d = ie(), h = Z(d);
      _r(h, 17, n, (f) => f.uuid, (f, v) => {
        var m = uI(), b = Z(m);
        ad(b, {
          get title() {
            return s(v).name;
          },
          content: (E) => {
            var S = lI(), x = Ie(S);
            sI(x, {
              get searchResult() {
                return s(v);
              }
            }), O(E, S);
          },
          $$slots: { content: !0 }
        }), O(f, m);
      }), O(c, d);
    }, l = (c) => {
      var d = cI(), h = Ie(d);
      He(() => vt(h, r())), O(c, d);
    };
    ue(o, (c) => {
      n().length ? c(u) : c(l, !1);
    });
  }
  O(t, i), Re();
}
op({ en: bp, de: fp });
var hI = /* @__PURE__ */ ve("<!> <!>", 1), vI = /* @__PURE__ */ ve("<span><!></span>"), pI = /* @__PURE__ */ ve('<!> <div class="separator svelte-1gp5xzm"></div>', 1), mI = /* @__PURE__ */ ve('<div class="archive-explorer-container svelte-1gp5xzm" style="display: none;"><!> <div class="search-filter svelte-1gp5xzm"><!> <!></div> <div class="content-container svelte-1gp5xzm"><!></div></div>');
function gI(t, e) {
  Oe(e, !0);
  const n = () => Pt(ap, "$_", r), [r, i] = Ln(), a = Zr.getInstance(), o = wi.getInstance(), u = Ds.getInstance(), l = Ps.getInstance(), c = Ns.getInstance(), d = mo.getInstance();
  let h = /* @__PURE__ */ be(ye([])), f = /* @__PURE__ */ be(ye([])), v = /* @__PURE__ */ be(ye(l.currentData)), m = /* @__PURE__ */ be(ye(c.currentData)), b = /* @__PURE__ */ be(ye(/* @__PURE__ */ new Map())), I = /* @__PURE__ */ be(!1), E = /* @__PURE__ */ be(!0);
  st(() => {
    setTimeout(
      () => {
        Q(E, !1);
      },
      1e3
    );
  });
  let S = /* @__PURE__ */ se(() => {
    var A;
    return s(v).length && !!((A = s(v)) != null && A.find((w) => w.key === "uuid"));
  });
  st(async () => {
    Q(h, o.createArchiveFilter(), !0), Q(f, await o.createLocationFilter(), !0), Q(I, !0);
  });
  function x() {
    Q(I, !1);
    const A = [], w = /* @__PURE__ */ new Map();
    s(m).forEach((U) => {
      const K = o.convertFilterToSearchParams(s(v));
      K.location = U.value, A.push(a.searchArchive(K).pipe(Or(1), Ra((H) => w.set(U.value, H)), Dy(() => Q(I, !0))));
    }), l.updateData(s(v)), c.updateData(s(m)), Sy(A).pipe(Ra(() => {
      u.updateData(w), Q(b, w, !0);
    })).subscribe();
  }
  var g = ie(), _ = Z(g);
  {
    var C = (A) => {
      {
        let w = /* @__PURE__ */ se(() => !s(E));
        pu(A, {
          get loadingDone() {
            return s(w);
          }
        });
      }
    }, T = (A) => {
      var w = mI(), U = Ie(w);
      pu(U, {
        get loadingDone() {
          return s(I);
        }
      });
      var K = Ee(U, 2), H = Ie(K);
      {
        let D = /* @__PURE__ */ se(() => n()("add_filter")), G = /* @__PURE__ */ se(() => n()("filter_types"));
        vu(H, {
          get filterTypes() {
            return s(f);
          },
          useOptionLabelInChipText: !0,
          get addFilterLabel() {
            return s(D);
          },
          get selectFilterLabel() {
            return s(G);
          },
          get activeFilters() {
            return s(m);
          },
          set activeFilters(te) {
            Q(m, te, !0);
          }
        });
      }
      var B = Ee(H, 2);
      {
        const D = (y) => {
          {
            let L = /* @__PURE__ */ se(() => !s(m).length);
            nl(y, {
              variant: "raised",
              callback: x,
              get disabled() {
                return s(L);
              },
              children: (ne, N) => {
                var q = hI(), pe = Z(q);
                Hg(pe, {});
                var V = Ee(pe, 2);
                wp(V, {
                  children: (re, X) => {
                    var fe = Xt();
                    He((ae) => vt(fe, ae), [() => n()("search")]), O(re, fe);
                  },
                  $$slots: { default: !0 }
                }), O(ne, q);
              },
              $$slots: { default: !0 }
            });
          }
        };
        let G = /* @__PURE__ */ se(() => s(S) || !s(m).length), te = /* @__PURE__ */ se(() => n()("add_filter")), P = /* @__PURE__ */ se(() => n()("filter_types"));
        vu(B, {
          get disabled() {
            return s(G);
          },
          get filterTypes() {
            return s(h);
          },
          get addFilterLabel() {
            return s(te);
          },
          get selectFilterLabel() {
            return s(P);
          },
          get activeFilters() {
            return s(v);
          },
          set activeFilters(y) {
            Q(v, y, !0);
          },
          filterControls: D,
          $$slots: { filterControls: !0 }
        });
      }
      var _e = Ee(K, 2), k = Ie(_e);
      {
        var F = (D) => {
          var G = ie(), te = Z(G);
          _r(te, 18, () => s(b), (P) => P, (P, y, L) => {
            var ne = pI(), N = Z(ne);
            {
              const q = (re) => {
                var X = vI(), fe = Ie(X);
                {
                  let ae = /* @__PURE__ */ se(() => n()("no_resources_found"));
                  fI(fe, {
                    get searchResults() {
                      return y[1];
                    },
                    get noResourcesLabel() {
                      return s(ae);
                    }
                  });
                }
                O(re, X);
              };
              let pe = /* @__PURE__ */ se(() => s(L) === 0), V = /* @__PURE__ */ se(() => d.getLocationNameByUuid(y[0]));
              ad(N, {
                get open() {
                  return s(pe);
                },
                get title() {
                  return s(V);
                },
                content: q,
                $$slots: { content: !0 }
              });
            }
            O(P, ne);
          }), O(D, G);
        };
        ue(k, (D) => {
          s(b).size && D(F);
        });
      }
      O(A, w);
    };
    ue(_, (A) => {
      s(E) ? A(C) : A(T, !1);
    });
  }
  O(t, g), Re(), i();
}
const Td = "archive-explorer", wd = "0.0.1";
var bI = /* @__PURE__ */ ve('<!> <input type="hidden" name="package-name"/> <input type="hidden" name="package-version"/>', 1);
function yI(t, e) {
  Oe(e, !0);
  let n = p(e, "dev", 3, !1);
  var r = bI(), i = Z(r);
  {
    var a = (l) => {
      gI(l, {});
    };
    ue(i, (l) => {
      (e.doc || n()) && l(a);
    });
  }
  var o = Ee(i, 2), u = Ee(o, 2);
  He(() => {
    Ll(o, Td), Ll(u, wd);
  }), O(t, r), Re();
}
var qi;
class CI extends HTMLElement {
  constructor() {
    super();
    Xe(this, qi);
    Pe(this, qi, /* @__PURE__ */ be(ye({ doc: void 0, editCount: void 0 })));
  }
  get props() {
    return s(J(this, qi));
  }
  set props(n) {
    Q(J(this, qi), n, !0);
  }
  connectedCallback() {
    var r;
    this.attachShadow({ mode: "open" }), this.props.doc = this._doc, this.props.editCount = this.editCount, Yf(yI, { target: this.shadowRoot, props: this.props });
    const n = II();
    (r = this.shadowRoot) == null || r.appendChild(n);
  }
  set doc(n) {
    this._doc = n, this.props.doc = n;
  }
  set editCount(n) {
    this._editCount = n, this.props.editCount = n;
  }
}
qi = new WeakMap();
function II() {
  const t = `${Td}-v${wd}-style`, e = _I(), n = document.createElement("link");
  return n.rel = "stylesheet", n.type = "text/css", n.href = e, n.id = t, n;
}
function _I() {
  const t = new URL(import.meta.url), e = t.origin, n = t.pathname.split("/").slice(0, -1).filter(Boolean).join("/");
  return [e, n, "style.css"].filter(Boolean).join("/");
}
export {
  CI as default
};
