var Dd = Object.defineProperty;
var hl = (t) => {
  throw TypeError(t);
};
var Pd = (t, e, n) => e in t ? Dd(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var bi = (t, e, n) => Pd(t, typeof e != "symbol" ? e + "" : e, n), jo = (t, e, n) => e.has(t) || hl("Cannot " + n);
var Z = (t, e, n) => (jo(t, e, "read from private field"), n ? n.call(t) : e.get(t)), Xe = (t, e, n) => e.has(t) ? hl("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, n), Pe = (t, e, n, r) => (jo(t, e, "write to private field"), r ? r.call(t, n) : e.set(t, n), n), Vt = (t, e, n) => (jo(t, e, "access private method"), n);
const Mt = Symbol(), Nd = "http://www.w3.org/1999/xhtml", Ud = "http://www.w3.org/2000/svg", Hd = "@attach", Tu = !1;
var yo = Array.isArray, Fd = Array.prototype.indexOf, Us = Array.from, ao = Object.defineProperty, Er = Object.getOwnPropertyDescriptor, Lu = Object.getOwnPropertyDescriptors, Bd = Object.prototype, kd = Array.prototype, Hs = Object.getPrototypeOf, vl = Object.isExtensible;
function ca(t) {
  return typeof t == "function";
}
const ge = () => {
};
function wu(t) {
  for (var e = 0; e < t.length; e++)
    t[e]();
}
function Ou() {
  var t, e, n = new Promise((r, i) => {
    t = r, e = i;
  });
  return { promise: n, resolve: t, reject: e };
}
const en = 2, Fs = 4, Bs = 8, li = 16, or = 32, ui = 64, ks = 128, Tn = 256, oo = 512, Wt = 1024, mn = 2048, Or = 4096, Un = 8192, ci = 16384, Vs = 32768, di = 65536, pl = 1 << 17, Vd = 1 << 18, ta = 1 << 19, Gd = 1 << 20, ls = 1 << 21, _o = 1 << 22, ri = 1 << 23, Wn = Symbol("$state"), Ru = Symbol("legacy props"), jd = Symbol(""), Ai = new class extends Error {
  constructor() {
    super(...arguments);
    bi(this, "name", "StaleReactionError");
    bi(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
function Gs(t) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function qd() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function Wd(t) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Kd() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function zd(t) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Xd() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Yd(t) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Zd() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Qd() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Jd() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function $d() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
function ef() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function tf() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let nf = !1;
function Mu(t) {
  return t === this.v;
}
function js(t, e) {
  return t != t ? e == e : t !== e || t !== null && typeof t == "object" || typeof t == "function";
}
function Du(t) {
  return !js(t, this.v);
}
let na = !1, rf = !1;
function af() {
  na = !0;
}
let lt = null;
function Wi(t) {
  lt = t;
}
function ae(t) {
  return (
    /** @type {T} */
    Pu().get(t)
  );
}
function $(t, e) {
  return Pu().set(t, e), e;
}
function Oe(t, e = !1, n) {
  lt = {
    p: lt,
    c: null,
    e: null,
    s: t,
    x: null,
    l: na && !e ? { s: null, u: null, $: [] } : null
  };
}
function Re(t) {
  var e = (
    /** @type {ComponentContext} */
    lt
  ), n = e.e;
  if (n !== null) {
    e.e = null;
    for (var r of n)
      Zu(r);
  }
  return t !== void 0 && (e.x = t), lt = e.p, t ?? /** @type {T} */
  {};
}
function Ua() {
  return !na || lt !== null && lt.l === null;
}
function Pu(t) {
  return lt === null && Gs(), lt.c ?? (lt.c = new Map(of(lt) || void 0));
}
function of(t) {
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
function Nu() {
  var t = Zr;
  Zr = [], wu(t);
}
function xr(t) {
  if (Zr.length === 0 && !_a) {
    var e = Zr;
    queueMicrotask(() => {
      e === Zr && Nu();
    });
  }
  Zr.push(t);
}
function sf() {
  for (; Zr.length > 0; )
    Nu();
}
const lf = /* @__PURE__ */ new WeakMap();
function Uu(t) {
  var e = Ve;
  if (e === null)
    return ke.f |= ri, t;
  if (e.f & Vs)
    Ki(t, e);
  else {
    if (!(e.f & ks))
      throw !e.parent && t instanceof Error && Hu(t), t;
    e.b.error(t);
  }
}
function Ki(t, e) {
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
  throw t instanceof Error && Hu(t), t;
}
function Hu(t) {
  const e = lf.get(t);
  e && (ao(t, "message", {
    value: e.message
  }), ao(t, "stack", {
    value: e.stack
  }));
}
const qa = /* @__PURE__ */ new Set();
let rt = null, Ja = null, Ht = null, us = /* @__PURE__ */ new Set(), jn = [], Eo = null, cs = !1, _a = !1;
var Ui, Hi, Jr, Ma, Fi, Bi, $r, ki, Da, Pa, Ln, ds, $a, fs;
const go = class go {
  constructor() {
    Xe(this, Ln);
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
    Xe(this, Jr, 0);
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
    Xe(this, $r, []);
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
    jn = [], Ja = null, this.apply();
    for (const o of e)
      Vt(this, Ln, ds).call(this, o);
    if (Z(this, Jr) === 0) {
      var n = Ht;
      Vt(this, Ln, fs).call(this);
      var r = Z(this, Bi), i = Z(this, $r);
      Pe(this, Bi, []), Pe(this, $r, []), Pe(this, ki, []), Ja = this, rt = null, Ht = n, ml(r), ml(i), Ja = null, (a = Z(this, Ma)) == null || a.resolve();
    } else
      Vt(this, Ln, $a).call(this, Z(this, Bi)), Vt(this, Ln, $a).call(this, Z(this, $r)), Vt(this, Ln, $a).call(this, Z(this, ki));
    Ht = null;
    for (const o of Z(this, Fi))
      Ca(o);
    Pe(this, Fi, []);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Source} source
   * @param {any} value
   */
  capture(e, n) {
    Z(this, Ui).has(e) || Z(this, Ui).set(e, n), this.current.set(e, e.v), Ht == null || Ht.set(e, e.v);
  }
  activate() {
    rt = this;
  }
  deactivate() {
    rt = null, Ht = null;
  }
  flush() {
    if (jn.length > 0) {
      if (this.activate(), Fu(), rt !== null && rt !== this)
        return;
    } else Z(this, Jr) === 0 && Vt(this, Ln, fs).call(this);
    this.deactivate();
    for (const e of us)
      if (us.delete(e), e(), rt !== null)
        break;
  }
  increment() {
    Pe(this, Jr, Z(this, Jr) + 1);
  }
  decrement() {
    Pe(this, Jr, Z(this, Jr) - 1);
    for (const e of Z(this, Da))
      Jt(e, mn), oi(e);
    for (const e of Z(this, Pa))
      Jt(e, Or), oi(e);
    this.flush();
  }
  /** @param {() => void} fn */
  add_callback(e) {
    Z(this, Hi).add(e);
  }
  settled() {
    return (Z(this, Ma) ?? Pe(this, Ma, Ou())).promise;
  }
  static ensure() {
    if (rt === null) {
      const e = rt = new go();
      qa.add(rt), _a || go.enqueue(() => {
        rt === e && e.flush();
      });
    }
    return rt;
  }
  /** @param {() => void} task */
  static enqueue(e) {
    xr(e);
  }
  apply() {
  }
};
Ui = new WeakMap(), Hi = new WeakMap(), Jr = new WeakMap(), Ma = new WeakMap(), Fi = new WeakMap(), Bi = new WeakMap(), $r = new WeakMap(), ki = new WeakMap(), Da = new WeakMap(), Pa = new WeakMap(), Ln = new WeakSet(), /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 */
ds = function(e) {
  var c;
  e.f ^= Wt;
  for (var n = e.first; n !== null; ) {
    var r = n.f, i = (r & (or | ui)) !== 0, a = i && (r & Wt) !== 0, o = a || (r & Un) !== 0 || this.skipped_effects.has(n);
    if (!o && n.fn !== null) {
      i ? n.f ^= Wt : r & Fs ? Z(this, $r).push(n) : r & Wt || (r & _o && ((c = n.b) != null && c.is_pending()) ? Z(this, Fi).push(n) : Lo(n) && (n.f & li && Z(this, ki).push(n), Ca(n)));
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
    (n.f & mn ? Z(this, Da) : Z(this, Pa)).push(n), Jt(n, Wt);
  e.length = 0;
}, /**
 * Append and remove branches to/from the DOM
 */
fs = function() {
  var e;
  for (const n of Z(this, Hi))
    n();
  if (Z(this, Hi).clear(), qa.size > 1) {
    Z(this, Ui).clear();
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
          Bu(o, a);
        if (jn.length > 0) {
          rt = r, r.apply();
          for (const o of jn)
            Vt(e = r, Ln, ds).call(e, o);
          jn = [], r.deactivate();
        }
      }
    }
    rt = null;
  }
  qa.delete(this);
};
let ar = go;
function uf(t) {
  var e = _a;
  _a = !0;
  try {
    for (var n; ; ) {
      if (sf(), jn.length === 0 && (rt == null || rt.flush(), jn.length === 0))
        return Eo = null, /** @type {T} */
        n;
      Fu();
    }
  } finally {
    _a = e;
  }
}
function Fu() {
  var t = Di;
  cs = !0;
  try {
    var e = 0;
    for (yl(!0); jn.length > 0; ) {
      var n = ar.ensure();
      if (e++ > 1e3) {
        var r, i;
        cf();
      }
      n.process(jn), Ar.clear();
    }
  } finally {
    cs = !1, yl(t), Eo = null;
  }
}
function cf() {
  try {
    Xd();
  } catch (t) {
    Ki(t, Eo);
  }
}
let rr = null;
function ml(t) {
  var e = t.length;
  if (e !== 0) {
    for (var n = 0; n < e; ) {
      var r = t[n++];
      if (!(r.f & (ci | Un)) && Lo(r) && (rr = [], Ca(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null && r.ac === null ? $u(r) : r.fn = null), (rr == null ? void 0 : rr.length) > 0)) {
        Ar.clear();
        for (const i of rr)
          Ca(i);
        rr = [];
      }
    }
    rr = null;
  }
}
function Bu(t, e) {
  if (t.reactions !== null)
    for (const n of t.reactions) {
      const r = n.f;
      r & en ? Bu(
        /** @type {Derived} */
        n,
        e
      ) : r & (_o | li) && ku(n, e) && (Jt(n, mn), oi(
        /** @type {Effect} */
        n
      ));
    }
}
function ku(t, e) {
  if (t.deps !== null) {
    for (const n of t.deps)
      if (e.includes(n) || n.f & en && ku(
        /** @type {Derived} */
        n,
        e
      ))
        return !0;
  }
  return !1;
}
function oi(t) {
  for (var e = Eo = t; e.parent !== null; ) {
    e = e.parent;
    var n = e.f;
    if (cs && e === Ve && n & li)
      return;
    if (n & (ui | or)) {
      if (!(n & Wt)) return;
      e.f ^= Wt;
    }
  }
  jn.push(e);
}
function df(t) {
  let e = 0, n = si(0), r;
  return () => {
    wf() && (s(n), xo(() => (e === 0 && (r = Dr(() => t(() => Ea(n)))), e += 1, () => {
      xr(() => {
        e -= 1, e === 0 && (r == null || r(), r = void 0, Ea(n));
      });
    })));
  };
}
var ff = di | ta | ks;
function hf(t, e, n) {
  new vf(t, e, n);
}
var Dn, Cn, Ns, kn, ei, Vn, Sn, on, Gn, mr, ti, gr, ni, br, bo, Io, $t, pf, mf, eo, to, hs;
class vf {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   */
  constructor(e, n, r) {
    Xe(this, $t);
    /** @type {Boundary | null} */
    bi(this, "parent");
    Xe(this, Dn, !1);
    /** @type {TemplateNode} */
    Xe(this, Cn);
    /** @type {TemplateNode | null} */
    Xe(this, Ns, null);
    /** @type {BoundaryProps} */
    Xe(this, kn);
    /** @type {((anchor: Node) => void)} */
    Xe(this, ei);
    /** @type {Effect} */
    Xe(this, Vn);
    /** @type {Effect | null} */
    Xe(this, Sn, null);
    /** @type {Effect | null} */
    Xe(this, on, null);
    /** @type {Effect | null} */
    Xe(this, Gn, null);
    /** @type {DocumentFragment | null} */
    Xe(this, mr, null);
    Xe(this, ti, 0);
    Xe(this, gr, 0);
    Xe(this, ni, !1);
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    Xe(this, br, null);
    Xe(this, bo, () => {
      Z(this, br) && zi(Z(this, br), Z(this, ti));
    });
    Xe(this, Io, df(() => (Pe(this, br, si(Z(this, ti))), () => {
      Pe(this, br, null);
    })));
    Pe(this, Cn, e), Pe(this, kn, n), Pe(this, ei, r), this.parent = /** @type {Effect} */
    Ve.b, Pe(this, Dn, !!Z(this, kn).pending), Pe(this, Vn, Mr(() => {
      Ve.b = this;
      {
        try {
          Pe(this, Sn, Gt(() => r(Z(this, Cn))));
        } catch (i) {
          this.error(i);
        }
        Z(this, gr) > 0 ? Vt(this, $t, to).call(this) : Pe(this, Dn, !1);
      }
    }, ff));
  }
  /**
   * Returns `true` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_pending() {
    return Z(this, Dn) || !!this.parent && this.parent.is_pending();
  }
  has_pending_snippet() {
    return !!Z(this, kn).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   */
  update_pending_count(e) {
    Vt(this, $t, hs).call(this, e), Pe(this, ti, Z(this, ti) + e), us.add(Z(this, bo));
  }
  get_effect_pending() {
    return Z(this, Io).call(this), s(
      /** @type {Source<number>} */
      Z(this, br)
    );
  }
  /** @param {unknown} error */
  error(e) {
    var n = Z(this, kn).onerror;
    let r = Z(this, kn).failed;
    if (Z(this, ni) || !n && !r)
      throw e;
    Z(this, Sn) && (Ft(Z(this, Sn)), Pe(this, Sn, null)), Z(this, on) && (Ft(Z(this, on)), Pe(this, on, null)), Z(this, Gn) && (Ft(Z(this, Gn)), Pe(this, Gn, null));
    var i = !1, a = !1;
    const o = () => {
      if (i) {
        tf();
        return;
      }
      i = !0, a && $d(), ar.ensure(), Pe(this, ti, 0), Z(this, Gn) !== null && Cr(Z(this, Gn), () => {
        Pe(this, Gn, null);
      }), Pe(this, Dn, this.has_pending_snippet()), Pe(this, Sn, Vt(this, $t, eo).call(this, () => (Pe(this, ni, !1), Gt(() => Z(this, ei).call(this, Z(this, Cn)))))), Z(this, gr) > 0 ? Vt(this, $t, to).call(this) : Pe(this, Dn, !1);
    };
    var u = ke;
    try {
      ln(null), a = !0, n == null || n(e, o), a = !1;
    } catch (l) {
      Ki(l, Z(this, Vn) && Z(this, Vn).parent);
    } finally {
      ln(u);
    }
    r && xr(() => {
      Pe(this, Gn, Vt(this, $t, eo).call(this, () => {
        Pe(this, ni, !0);
        try {
          return Gt(() => {
            r(
              Z(this, Cn),
              () => e,
              () => o
            );
          });
        } catch (l) {
          return Ki(
            l,
            /** @type {Effect} */
            Z(this, Vn).parent
          ), null;
        } finally {
          Pe(this, ni, !1);
        }
      }));
    });
  }
}
Dn = new WeakMap(), Cn = new WeakMap(), Ns = new WeakMap(), kn = new WeakMap(), ei = new WeakMap(), Vn = new WeakMap(), Sn = new WeakMap(), on = new WeakMap(), Gn = new WeakMap(), mr = new WeakMap(), ti = new WeakMap(), gr = new WeakMap(), ni = new WeakMap(), br = new WeakMap(), bo = new WeakMap(), Io = new WeakMap(), $t = new WeakSet(), pf = function() {
  try {
    Pe(this, Sn, Gt(() => Z(this, ei).call(this, Z(this, Cn))));
  } catch (e) {
    this.error(e);
  }
  Pe(this, Dn, !1);
}, mf = function() {
  const e = Z(this, kn).pending;
  e && (Pe(this, on, Gt(() => e(Z(this, Cn)))), ar.enqueue(() => {
    Pe(this, Sn, Vt(this, $t, eo).call(this, () => (ar.ensure(), Gt(() => Z(this, ei).call(this, Z(this, Cn)))))), Z(this, gr) > 0 ? Vt(this, $t, to).call(this) : (Cr(
      /** @type {Effect} */
      Z(this, on),
      () => {
        Pe(this, on, null);
      }
    ), Pe(this, Dn, !1));
  }));
}, /**
 * @param {() => Effect | null} fn
 */
eo = function(e) {
  var n = Ve, r = ke, i = lt;
  zn(Z(this, Vn)), ln(Z(this, Vn)), Wi(Z(this, Vn).ctx);
  try {
    return e();
  } catch (a) {
    return Uu(a), null;
  } finally {
    zn(n), ln(r), Wi(i);
  }
}, to = function() {
  const e = (
    /** @type {(anchor: Node) => void} */
    Z(this, kn).pending
  );
  Z(this, Sn) !== null && (Pe(this, mr, document.createDocumentFragment()), gf(Z(this, Sn), Z(this, mr))), Z(this, on) === null && Pe(this, on, Gt(() => e(Z(this, Cn))));
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 */
hs = function(e) {
  var n;
  if (!this.has_pending_snippet()) {
    this.parent && Vt(n = this.parent, $t, hs).call(n, e);
    return;
  }
  Pe(this, gr, Z(this, gr) + e), Z(this, gr) === 0 && (Pe(this, Dn, !1), Z(this, on) && Cr(Z(this, on), () => {
    Pe(this, on, null);
  }), Z(this, mr) && (Z(this, Cn).before(Z(this, mr)), Pe(this, mr, null)), xr(() => {
    ar.ensure().flush();
  }));
};
function gf(t, e) {
  for (var n = t.nodes_start, r = t.nodes_end; n !== null; ) {
    var i = n === r ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Ha(n)
    );
    e.append(n), n = i;
  }
}
function Vu(t, e, n) {
  const r = Ua() ? Ao : qs;
  if (e.length === 0) {
    n(t.map(r));
    return;
  }
  var i = rt, a = (
    /** @type {Effect} */
    Ve
  ), o = bf();
  Promise.all(e.map((u) => /* @__PURE__ */ If(u))).then((u) => {
    o();
    try {
      n([...t.map(r), ...u]);
    } catch (l) {
      a.f & ci || Ki(l, a);
    }
    i == null || i.deactivate(), vs();
  }).catch((u) => {
    Ki(u, a);
  });
}
function bf() {
  var t = Ve, e = ke, n = lt, r = rt;
  return function() {
    zn(t), ln(e), Wi(n), r == null || r.activate();
  };
}
function vs() {
  zn(null), ln(null), Wi(null);
}
// @__NO_SIDE_EFFECTS__
function Ao(t) {
  var e = en | mn, n = ke !== null && ke.f & en ? (
    /** @type {Derived} */
    ke
  ) : null;
  return Ve === null || n !== null && n.f & Tn ? e |= Tn : Ve.f |= ta, {
    ctx: lt,
    deps: null,
    effects: null,
    equals: Mu,
    f: e,
    fn: t,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      Mt
    ),
    wv: 0,
    parent: n ?? Ve,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function If(t, e) {
  let n = (
    /** @type {Effect | null} */
    Ve
  );
  n === null && qd();
  var r = (
    /** @type {Boundary} */
    n.b
  ), i = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), a = si(
    /** @type {V} */
    Mt
  ), o = !ke, u = /* @__PURE__ */ new Map();
  return Rf(() => {
    var f;
    var l = Ou();
    i = l.promise;
    try {
      Promise.resolve(t()).then(l.resolve, l.reject).then(vs);
    } catch (v) {
      l.reject(v), vs();
    }
    var c = (
      /** @type {Batch} */
      rt
    ), d = r.is_pending();
    o && (r.update_pending_count(1), d || (c.increment(), (f = u.get(c)) == null || f.reject(Ai), u.delete(c), u.set(c, l)));
    const h = (v, p = void 0) => {
      if (d || c.activate(), p)
        p !== Ai && (a.f |= ri, zi(a, p));
      else {
        a.f & ri && (a.f ^= ri), zi(a, v);
        for (const [g, y] of u) {
          if (u.delete(g), g === c) break;
          y.reject(Ai);
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
  return nc(e), e;
}
// @__NO_SIDE_EFFECTS__
function qs(t) {
  const e = /* @__PURE__ */ Ao(t);
  return e.equals = Du, e;
}
function Gu(t) {
  var e = t.effects;
  if (e !== null) {
    t.effects = null;
    for (var n = 0; n < e.length; n += 1)
      Ft(
        /** @type {Effect} */
        e[n]
      );
  }
}
function yf(t) {
  for (var e = t.parent; e !== null; ) {
    if (!(e.f & en))
      return (
        /** @type {Effect} */
        e
      );
    e = e.parent;
  }
  return null;
}
function Ws(t) {
  var e, n = Ve;
  zn(yf(t));
  try {
    Gu(t), e = oc(t);
  } finally {
    zn(n);
  }
  return e;
}
function ju(t) {
  var e = Ws(t);
  if (t.equals(e) || (t.v = e, t.wv = ic()), !fi)
    if (Ht !== null)
      Ht.set(t, t.v);
    else {
      var n = (Ir || t.f & Tn) && t.deps !== null ? Or : Wt;
      Jt(t, n);
    }
}
const Ar = /* @__PURE__ */ new Map();
function si(t, e) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: t,
    reactions: null,
    equals: Mu,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function Ae(t, e) {
  const n = si(t);
  return nc(n), n;
}
// @__NO_SIDE_EFFECTS__
function qu(t, e = !1, n = !0) {
  var i;
  const r = si(t);
  return e || (r.equals = Du), na && n && lt !== null && lt.l !== null && ((i = lt.l).s ?? (i.s = [])).push(r), r;
}
function ne(t, e, n = !1) {
  ke !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Pn || ke.f & pl) && Ua() && ke.f & (en | li | _o | pl) && !(Qt != null && Qt.includes(t)) && Jd();
  let r = n ? be(e) : e;
  return zi(t, r);
}
function zi(t, e) {
  if (!t.equals(e)) {
    var n = t.v;
    fi ? Ar.set(t, e) : Ar.set(t, n), t.v = e;
    var r = ar.ensure();
    r.capture(t, n), t.f & en && (t.f & mn && Ws(
      /** @type {Derived} */
      t
    ), Jt(t, t.f & Tn ? Or : Wt)), t.wv = ic(), Wu(t, mn), Ua() && Ve !== null && Ve.f & Wt && !(Ve.f & (or | ui)) && (An === null ? Pf([t]) : An.push(t));
  }
  return e;
}
function Ea(t) {
  ne(t, t.v + 1);
}
function Wu(t, e) {
  var n = t.reactions;
  if (n !== null)
    for (var r = Ua(), i = n.length, a = 0; a < i; a++) {
      var o = n[a], u = o.f;
      if (!(!r && o === Ve)) {
        var l = (u & mn) === 0;
        l && Jt(o, e), u & en ? Wu(
          /** @type {Derived} */
          o,
          Or
        ) : l && (u & li && rr !== null && rr.push(
          /** @type {Effect} */
          o
        ), oi(
          /** @type {Effect} */
          o
        ));
      }
    }
}
function be(t) {
  if (typeof t != "object" || t === null || Wn in t)
    return t;
  const e = Hs(t);
  if (e !== Bd && e !== kd)
    return t;
  var n = /* @__PURE__ */ new Map(), r = yo(t), i = /* @__PURE__ */ Ae(0), a = ii, o = (u) => {
    if (ii === a)
      return u();
    var l = ke, c = ii;
    ln(null), El(a);
    var d = u();
    return ln(l), El(c), d;
  };
  return r && n.set("length", /* @__PURE__ */ Ae(
    /** @type {any[]} */
    t.length
  )), new Proxy(
    /** @type {any} */
    t,
    {
      defineProperty(u, l, c) {
        (!("value" in c) || c.configurable === !1 || c.enumerable === !1 || c.writable === !1) && Zd();
        var d = n.get(l);
        return d === void 0 ? d = o(() => {
          var h = /* @__PURE__ */ Ae(c.value);
          return n.set(l, h), h;
        }) : ne(d, c.value, !0), !0;
      },
      deleteProperty(u, l) {
        var c = n.get(l);
        if (c === void 0) {
          if (l in u) {
            const d = o(() => /* @__PURE__ */ Ae(Mt));
            n.set(l, d), Ea(i);
          }
        } else
          ne(c, Mt), Ea(i);
        return !0;
      },
      get(u, l, c) {
        var v;
        if (l === Wn)
          return t;
        var d = n.get(l), h = l in u;
        if (d === void 0 && (!h || (v = Er(u, l)) != null && v.writable) && (d = o(() => {
          var p = be(h ? u[l] : Mt), g = /* @__PURE__ */ Ae(p);
          return g;
        }), n.set(l, d)), d !== void 0) {
          var f = s(d);
          return f === Mt ? void 0 : f;
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
          if (h !== void 0 && f !== Mt)
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
        if (l === Wn)
          return !0;
        var c = n.get(l), d = c !== void 0 && c.v !== Mt || Reflect.has(u, l);
        if (c !== void 0 || Ve !== null && (!d || (f = Er(u, l)) != null && f.writable)) {
          c === void 0 && (c = o(() => {
            var v = d ? be(u[l]) : Mt, p = /* @__PURE__ */ Ae(v);
            return p;
          }), n.set(l, c));
          var h = s(c);
          if (h === Mt)
            return !1;
        }
        return d;
      },
      set(u, l, c, d) {
        var C;
        var h = n.get(l), f = l in u;
        if (r && l === "length")
          for (var v = c; v < /** @type {Source<number>} */
          h.v; v += 1) {
            var p = n.get(v + "");
            p !== void 0 ? ne(p, Mt) : v in u && (p = o(() => /* @__PURE__ */ Ae(Mt)), n.set(v + "", p));
          }
        if (h === void 0)
          (!f || (C = Er(u, l)) != null && C.writable) && (h = o(() => /* @__PURE__ */ Ae(void 0)), ne(h, be(c)), n.set(l, h));
        else {
          f = h.v !== Mt;
          var g = o(() => be(c));
          ne(h, g);
        }
        var y = Reflect.getOwnPropertyDescriptor(u, l);
        if (y != null && y.set && y.set.call(d, c), !f) {
          if (r && typeof l == "string") {
            var E = (
              /** @type {Source<number>} */
              n.get("length")
            ), S = Number(l);
            Number.isInteger(S) && S >= E.v && ne(E, S + 1);
          }
          Ea(i);
        }
        return !0;
      },
      ownKeys(u) {
        s(i);
        var l = Reflect.ownKeys(u).filter((h) => {
          var f = n.get(h);
          return f === void 0 || f.v !== Mt;
        });
        for (var [c, d] of n)
          d.v !== Mt && !(c in u) && l.push(c);
        return l;
      },
      setPrototypeOf() {
        Qd();
      }
    }
  );
}
function gl(t) {
  try {
    if (t !== null && typeof t == "object" && Wn in t)
      return t[Wn];
  } catch {
  }
  return t;
}
function _f(t, e) {
  return Object.is(gl(t), gl(e));
}
var bl, Ku, zu, Xu, Yu;
function Ef() {
  if (bl === void 0) {
    bl = window, Ku = document, zu = /Firefox/.test(navigator.userAgent);
    var t = Element.prototype, e = Node.prototype, n = Text.prototype;
    Xu = Er(e, "firstChild").get, Yu = Er(e, "nextSibling").get, vl(t) && (t.__click = void 0, t.__className = void 0, t.__attributes = null, t.__style = void 0, t.__e = void 0), vl(n) && (n.__t = void 0);
  }
}
function Rr(t = "") {
  return document.createTextNode(t);
}
// @__NO_SIDE_EFFECTS__
function Xi(t) {
  return Xu.call(t);
}
// @__NO_SIDE_EFFECTS__
function Ha(t) {
  return Yu.call(t);
}
function Ie(t, e) {
  return /* @__PURE__ */ Xi(t);
}
function Q(t, e = !1) {
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
function _e(t, e = 1, n = !1) {
  let r = t;
  for (; e--; )
    r = /** @type {TemplateNode} */
    /* @__PURE__ */ Ha(r);
  return r;
}
function Af(t) {
  t.textContent = "";
}
function Ks() {
  return !1;
}
function Cf(t, e) {
  if (e) {
    const n = document.body;
    t.autofocus = !0, xr(() => {
      document.activeElement === n && t.focus();
    });
  }
}
let Il = !1;
function Sf() {
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
  var e = ke, n = Ve;
  ln(null), zn(null);
  try {
    return t();
  } finally {
    ln(e), zn(n);
  }
}
function xf(t, e, n, r = n) {
  t.addEventListener(e, () => Co(n));
  const i = t.__on_r;
  i ? t.__on_r = () => {
    i(), r(!0);
  } : t.__on_r = () => r(!0), Sf();
}
function Tf(t) {
  Ve === null && ke === null && zd(), ke !== null && ke.f & Tn && Ve === null && Kd(), fi && Wd();
}
function Lf(t, e) {
  var n = e.last;
  n === null ? e.last = e.first = t : (n.next = t, t.prev = n, e.last = t);
}
function sr(t, e, n, r = !0) {
  var i = Ve;
  i !== null && i.f & Un && (t |= Un);
  var a = {
    ctx: lt,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: t | mn,
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
      Ca(a), a.f |= Vs;
    } catch (l) {
      throw Ft(a), l;
    }
  else e !== null && oi(a);
  if (r) {
    var o = a;
    if (n && o.deps === null && o.teardown === null && o.nodes_start === null && o.first === o.last && // either `null`, or a singular child
    !(o.f & ta) && (o = o.first), o !== null && (o.parent = i, i !== null && Lf(o, i), ke !== null && ke.f & en && !(t & ui))) {
      var u = (
        /** @type {Derived} */
        ke
      );
      (u.effects ?? (u.effects = [])).push(o);
    }
  }
  return a;
}
function wf() {
  return ke !== null && !Pn;
}
function So(t) {
  const e = sr(Bs, null, !1);
  return Jt(e, Wt), e.teardown = t, e;
}
function Te(t) {
  Tf();
  var e = (
    /** @type {Effect} */
    Ve.f
  ), n = !ke && (e & or) !== 0 && (e & Vs) === 0;
  if (n) {
    var r = (
      /** @type {ComponentContext} */
      lt
    );
    (r.e ?? (r.e = [])).push(t);
  } else
    return Zu(t);
}
function Zu(t) {
  return sr(Fs | Gd, t, !1);
}
function Of(t) {
  ar.ensure();
  const e = sr(ui | ta, t, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? Cr(e, () => {
      Ft(e), r(void 0);
    }) : (Ft(e), r(void 0));
  });
}
function Fa(t) {
  return sr(Fs, t, !1);
}
function Rf(t) {
  return sr(_o | ta, t, !0);
}
function xo(t, e = 0) {
  return sr(Bs | e, t, !0);
}
function He(t, e = [], n = []) {
  Vu(e, n, (r) => {
    sr(Bs, () => t(...r.map(s)), !0);
  });
}
function Mr(t, e = 0) {
  var n = sr(li | e, t, !0);
  return n;
}
function Gt(t, e = !0) {
  return sr(or | ta, t, !0, e);
}
function Qu(t) {
  var e = t.teardown;
  if (e !== null) {
    const n = fi, r = ke;
    _l(!0), ln(null);
    try {
      e.call(null);
    } finally {
      _l(n), ln(r);
    }
  }
}
function Ju(t, e = !1) {
  var n = t.first;
  for (t.first = t.last = null; n !== null; ) {
    const i = n.ac;
    i !== null && Co(() => {
      i.abort(Ai);
    });
    var r = n.next;
    n.f & ui ? n.parent = null : Ft(n, e), n = r;
  }
}
function Mf(t) {
  for (var e = t.first; e !== null; ) {
    var n = e.next;
    e.f & or || Ft(e), e = n;
  }
}
function Ft(t, e = !0) {
  var n = !1;
  (e || t.f & Vd) && t.nodes_start !== null && t.nodes_end !== null && (Df(
    t.nodes_start,
    /** @type {TemplateNode} */
    t.nodes_end
  ), n = !0), Ju(t, e && !n), so(t, 0), Jt(t, ci);
  var r = t.transitions;
  if (r !== null)
    for (const a of r)
      a.stop();
  Qu(t);
  var i = t.parent;
  i !== null && i.first !== null && $u(t), t.next = t.prev = t.teardown = t.ctx = t.deps = t.fn = t.nodes_start = t.nodes_end = t.ac = null;
}
function Df(t, e) {
  for (; t !== null; ) {
    var n = t === e ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Ha(t)
    );
    t.remove(), t = n;
  }
}
function $u(t) {
  var e = t.parent, n = t.prev, r = t.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), e !== null && (e.first === t && (e.first = r), e.last === t && (e.last = n));
}
function Cr(t, e) {
  var n = [];
  zs(t, n, !0), ec(n, () => {
    Ft(t), e && e();
  });
}
function ec(t, e) {
  var n = t.length;
  if (n > 0) {
    var r = () => --n || e();
    for (var i of t)
      i.out(r);
  } else
    e();
}
function zs(t, e, n) {
  if (!(t.f & Un)) {
    if (t.f ^= Un, t.transitions !== null)
      for (const o of t.transitions)
        (o.is_global || n) && e.push(o);
    for (var r = t.first; r !== null; ) {
      var i = r.next, a = (r.f & di) !== 0 || (r.f & or) !== 0;
      zs(r, e, a ? n : !1), r = i;
    }
  }
}
function To(t) {
  tc(t, !0);
}
function tc(t, e) {
  if (t.f & Un) {
    t.f ^= Un, t.f & Wt || (Jt(t, mn), oi(t));
    for (var n = t.first; n !== null; ) {
      var r = n.next, i = (n.f & di) !== 0 || (n.f & or) !== 0;
      tc(n, i ? e : !1), n = r;
    }
    if (t.transitions !== null)
      for (const a of t.transitions)
        (a.is_global || e) && a.in();
  }
}
let Di = !1;
function yl(t) {
  Di = t;
}
let fi = !1;
function _l(t) {
  fi = t;
}
let ke = null, Pn = !1;
function ln(t) {
  ke = t;
}
let Ve = null;
function zn(t) {
  Ve = t;
}
let Qt = null;
function nc(t) {
  ke !== null && (Qt === null ? Qt = [t] : Qt.push(t));
}
let Zt = null, hn = 0, An = null;
function Pf(t) {
  An = t;
}
let rc = 1, Aa = 0, ii = Aa;
function El(t) {
  ii = t;
}
let Ir = !1;
function ic() {
  return ++rc;
}
function Lo(t) {
  var h;
  var e = t.f;
  if (e & mn)
    return !0;
  if (e & Or) {
    var n = t.deps, r = (e & Tn) !== 0;
    if (n !== null) {
      var i, a, o = (e & oo) !== 0, u = r && Ve !== null && !Ir, l = n.length;
      if ((o || u) && (Ve === null || !(Ve.f & ci))) {
        var c = (
          /** @type {Derived} */
          t
        ), d = c.parent;
        for (i = 0; i < l; i++)
          a = n[i], (o || !((h = a == null ? void 0 : a.reactions) != null && h.includes(c))) && (a.reactions ?? (a.reactions = [])).push(c);
        o && (c.f ^= oo), u && d !== null && !(d.f & Tn) && (c.f ^= Tn);
      }
      for (i = 0; i < l; i++)
        if (a = n[i], Lo(
          /** @type {Derived} */
          a
        ) && ju(
          /** @type {Derived} */
          a
        ), a.wv > t.wv)
          return !0;
    }
    (!r || Ve !== null && !Ir) && Jt(t, Wt);
  }
  return !1;
}
function ac(t, e, n = !0) {
  var r = t.reactions;
  if (r !== null && !(Qt != null && Qt.includes(t)))
    for (var i = 0; i < r.length; i++) {
      var a = r[i];
      a.f & en ? ac(
        /** @type {Derived} */
        a,
        e,
        !1
      ) : e === a && (n ? Jt(a, mn) : a.f & Wt && Jt(a, Or), oi(
        /** @type {Effect} */
        a
      ));
    }
}
function oc(t) {
  var g;
  var e = Zt, n = hn, r = An, i = ke, a = Ir, o = Qt, u = lt, l = Pn, c = ii, d = t.f;
  Zt = /** @type {null | Value[]} */
  null, hn = 0, An = null, Ir = (d & Tn) !== 0 && (Pn || !Di || ke === null), ke = d & (or | ui) ? null : t, Qt = null, Wi(t.ctx), Pn = !1, ii = ++Aa, t.ac !== null && (Co(() => {
    t.ac.abort(Ai);
  }), t.ac = null);
  try {
    t.f |= ls;
    var h = (
      /** @type {Function} */
      t.fn
    ), f = h(), v = t.deps;
    if (Zt !== null) {
      var p;
      if (so(t, hn), v !== null && hn > 0)
        for (v.length = hn + Zt.length, p = 0; p < Zt.length; p++)
          v[hn + p] = Zt[p];
      else
        t.deps = v = Zt;
      if (!Ir || // Deriveds that already have reactions can cleanup, so we still add them as reactions
      d & en && /** @type {import('#client').Derived} */
      t.reactions !== null)
        for (p = hn; p < v.length; p++)
          ((g = v[p]).reactions ?? (g.reactions = [])).push(t);
    } else v !== null && hn < v.length && (so(t, hn), v.length = hn);
    if (Ua() && An !== null && !Pn && v !== null && !(t.f & (en | Or | mn)))
      for (p = 0; p < /** @type {Source[]} */
      An.length; p++)
        ac(
          An[p],
          /** @type {Effect} */
          t
        );
    return i !== null && i !== t && (Aa++, An !== null && (r === null ? r = An : r.push(.../** @type {Source[]} */
    An))), t.f & ri && (t.f ^= ri), f;
  } catch (y) {
    return Uu(y);
  } finally {
    t.f ^= ls, Zt = e, hn = n, An = r, ke = i, Ir = a, Qt = o, Wi(u), Pn = l, ii = c;
  }
}
function Nf(t, e) {
  let n = e.reactions;
  if (n !== null) {
    var r = Fd.call(n, t);
    if (r !== -1) {
      var i = n.length - 1;
      i === 0 ? n = e.reactions = null : (n[r] = n[i], n.pop());
    }
  }
  n === null && e.f & en && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Zt === null || !Zt.includes(e)) && (Jt(e, Or), e.f & (Tn | oo) || (e.f ^= oo), Gu(
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
      Nf(t, n[r]);
}
function Ca(t) {
  var e = t.f;
  if (!(e & ci)) {
    Jt(t, Wt);
    var n = Ve, r = Di;
    Ve = t, Di = !0;
    try {
      e & li ? Mf(t) : Ju(t), Qu(t);
      var i = oc(t);
      t.teardown = typeof i == "function" ? i : null, t.wv = rc;
      var a;
      Tu && rf && t.f & mn && t.deps;
    } finally {
      Di = r, Ve = n;
    }
  }
}
async function wo() {
  await Promise.resolve(), uf();
}
function s(t) {
  var e = t.f, n = (e & en) !== 0;
  if (ke !== null && !Pn) {
    var r = Ve !== null && (Ve.f & ci) !== 0;
    if (!r && !(Qt != null && Qt.includes(t))) {
      var i = ke.deps;
      if (ke.f & ls)
        t.rv < Aa && (t.rv = Aa, Zt === null && i !== null && i[hn] === t ? hn++ : Zt === null ? Zt = [t] : (!Ir || !Zt.includes(t)) && Zt.push(t));
      else {
        (ke.deps ?? (ke.deps = [])).push(t);
        var a = t.reactions;
        a === null ? t.reactions = [ke] : a.includes(ke) || a.push(ke);
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
  if (fi) {
    if (Ar.has(t))
      return Ar.get(t);
    if (n) {
      o = /** @type {Derived} */
      t;
      var l = o.v;
      return (!(o.f & Wt) && o.reactions !== null || sc(o)) && (l = Ws(o)), Ar.set(o, l), l;
    }
  } else if (n) {
    if (o = /** @type {Derived} */
    t, Ht != null && Ht.has(o))
      return Ht.get(o);
    Lo(o) && ju(o);
  }
  if (Ht != null && Ht.has(t))
    return Ht.get(t);
  if (t.f & ri)
    throw t.v;
  return t.v;
}
function sc(t) {
  if (t.v === Mt) return !0;
  if (t.deps === null) return !1;
  for (const e of t.deps)
    if (Ar.has(e) || e.f & en && sc(
      /** @type {Derived} */
      e
    ))
      return !0;
  return !1;
}
function Dr(t) {
  var e = Pn;
  try {
    return Pn = !0, t();
  } finally {
    Pn = e;
  }
}
const Uf = -7169;
function Jt(t, e) {
  t.f = t.f & Uf | e;
}
function Hf(t) {
  if (!(typeof t != "object" || !t || t instanceof EventTarget)) {
    if (Wn in t)
      ps(t);
    else if (!Array.isArray(t))
      for (let e in t) {
        const n = t[e];
        typeof n == "object" && n && Wn in n && ps(n);
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
    const n = Hs(t);
    if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
      const r = Lu(n);
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
const lc = /* @__PURE__ */ new Set(), ms = /* @__PURE__ */ new Set();
function Xs(t, e, n, r = {}) {
  function i(a) {
    if (r.capture || ga.call(e, a), !a.cancelBubble)
      return Co(() => n == null ? void 0 : n.call(this, a));
  }
  return t.startsWith("pointer") || t.startsWith("touch") || t === "wheel" ? xr(() => {
    e.addEventListener(t, i, r);
  }) : e.addEventListener(t, i, r), i;
}
function Ff(t, e, n, r = {}) {
  var i = Xs(e, t, n, r);
  return () => {
    t.removeEventListener(e, i, r);
  };
}
function Bf(t, e, n, r, i) {
  var a = { capture: r, passive: i }, o = Xs(t, e, n, a);
  (e === document.body || // @ts-ignore
  e === window || // @ts-ignore
  e === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  e instanceof HTMLMediaElement) && So(() => {
    e.removeEventListener(t, o, a);
  });
}
function Pr(t) {
  for (var e = 0; e < t.length; e++)
    lc.add(t[e]);
  for (var n of ms)
    n(t);
}
let Al = null;
function ga(t) {
  var S;
  var e = this, n = (
    /** @type {Node} */
    e.ownerDocument
  ), r = t.type, i = ((S = t.composedPath) == null ? void 0 : S.call(t)) || [], a = (
    /** @type {null | Element} */
    i[0] || t.target
  );
  Al = t;
  var o = 0, u = Al === t && t.__root;
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
    var d = ke, h = Ve;
    ln(null), zn(null);
    try {
      for (var f, v = []; a !== null; ) {
        var p = a.assignedSlot || a.parentNode || /** @type {any} */
        a.host || null;
        try {
          var g = a["__" + r];
          if (g != null && (!/** @type {any} */
          a.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          t.target === a))
            if (yo(g)) {
              var [y, ...E] = g;
              y.apply(a, [t, ...E]);
            } else
              g.call(a, t);
        } catch (C) {
          f ? v.push(C) : f = C;
        }
        if (t.cancelBubble || p === e || p === null)
          break;
        a = p;
      }
      if (f) {
        for (let C of v)
          queueMicrotask(() => {
            throw C;
          });
        throw f;
      }
    } finally {
      t.__root = e, delete t.currentTarget, ln(d), zn(h);
    }
  }
}
function uc(t) {
  var e = document.createElement("template");
  return e.innerHTML = t.replaceAll("<!>", "<!---->"), e.content;
}
function Yi(t, e) {
  var n = (
    /** @type {Effect} */
    Ve
  );
  n.nodes_start === null && (n.nodes_start = t, n.nodes_end = e);
}
// @__NO_SIDE_EFFECTS__
function ve(t, e) {
  var n = (e & 1) !== 0, r = (e & 2) !== 0, i, a = !t.startsWith("<!>");
  return () => {
    i === void 0 && (i = uc(a ? t : "<!>" + t), n || (i = /** @type {Node} */
    /* @__PURE__ */ Xi(i)));
    var o = (
      /** @type {TemplateNode} */
      r || zu ? document.importNode(i, !0) : i.cloneNode(!0)
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
function kf(t, e, n = "svg") {
  var r = !t.startsWith("<!>"), i = `<${n}>${r ? t : "<!>" + t}</${n}>`, a;
  return () => {
    if (!a) {
      var o = (
        /** @type {DocumentFragment} */
        uc(i)
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
function un(t, e) {
  return /* @__PURE__ */ kf(t, e, "svg");
}
function Kt(t = "") {
  {
    var e = Rr(t + "");
    return Yi(e, e), e;
  }
}
function ie() {
  var t = document.createDocumentFragment(), e = document.createComment(""), n = Rr();
  return t.append(e, n), Yi(e, n), t;
}
function O(t, e) {
  t !== null && t.before(
    /** @type {Node} */
    e
  );
}
function Vf(t) {
  return t.endsWith("capture") && t !== "gotpointercapture" && t !== "lostpointercapture";
}
const Gf = [
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
function jf(t) {
  return Gf.includes(t);
}
const qf = {
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
function Wf(t) {
  return t = t.toLowerCase(), qf[t] ?? t;
}
const Kf = ["touchstart", "touchmove"];
function zf(t) {
  return Kf.includes(t);
}
function pt(t, e) {
  var n = e == null ? "" : typeof e == "object" ? e + "" : e;
  n !== (t.__t ?? (t.__t = t.nodeValue)) && (t.__t = n, t.nodeValue = n + "");
}
function Xf(t, e) {
  return Yf(t, e);
}
const Ii = /* @__PURE__ */ new Map();
function Yf(t, { target: e, anchor: n, props: r = {}, events: i, context: a, intro: o = !0 }) {
  Ef();
  var u = /* @__PURE__ */ new Set(), l = (h) => {
    for (var f = 0; f < h.length; f++) {
      var v = h[f];
      if (!u.has(v)) {
        u.add(v);
        var p = zf(v);
        e.addEventListener(v, ga, { passive: p });
        var g = Ii.get(v);
        g === void 0 ? (document.addEventListener(v, ga, { passive: p }), Ii.set(v, 1)) : Ii.set(v, g + 1);
      }
    }
  };
  l(Us(lc)), ms.add(l);
  var c = void 0, d = Of(() => {
    var h = n ?? e.appendChild(Rr());
    return hf(
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
            lt
          );
          v.c = a;
        }
        i && (r.$$events = i), c = t(f, r) || {}, a && Re();
      }
    ), () => {
      var p;
      for (var f of u) {
        e.removeEventListener(f, ga);
        var v = (
          /** @type {number} */
          Ii.get(f)
        );
        --v === 0 ? (document.removeEventListener(f, ga), Ii.delete(f)) : Ii.set(f, v);
      }
      ms.delete(l), h !== n && ((p = h.parentNode) == null || p.removeChild(h));
    };
  });
  return Zf.set(c, d), c;
}
let Zf = /* @__PURE__ */ new WeakMap();
function Ee(t, e, ...n) {
  var r = t, i = ge, a;
  Mr(() => {
    i !== (i = e()) && (a && (Ft(a), a = null), a = Gt(() => (
      /** @type {SnippetFn} */
      i(r, ...n)
    )));
  }, di);
}
function at(t) {
  lt === null && Gs(), na && lt.l !== null ? Qf(lt).m.push(t) : Te(() => {
    const e = Dr(t);
    if (typeof e == "function") return (
      /** @type {() => void} */
      e
    );
  });
}
function Xn(t) {
  lt === null && Gs(), at(() => () => Dr(t));
}
function Qf(t) {
  var e = (
    /** @type {ComponentContextLegacy} */
    t.l
  );
  return e.u ?? (e.u = { a: [], b: [], m: [] });
}
function ue(t, e, n = !1) {
  var r = t, i = null, a = null, o = Mt, u = n ? di : 0, l = !1;
  const c = (v, p = !0) => {
    l = !0, f(p, v);
  };
  var d = null;
  function h() {
    d !== null && (d.lastChild.remove(), r.before(d), d = null);
    var v = o ? i : a, p = o ? a : i;
    v && To(v), p && Cr(p, () => {
      o ? a = null : i = null;
    });
  }
  const f = (v, p) => {
    if (o !== (o = v)) {
      var g = Ks(), y = r;
      if (g && (d = document.createDocumentFragment(), d.append(y = Rr())), o ? i ?? (i = p && Gt(() => p(y))) : a ?? (a = p && Gt(() => p(y))), g) {
        var E = (
          /** @type {Batch} */
          rt
        ), S = o ? i : a, C = o ? a : i;
        S && E.skipped_effects.delete(S), C && E.skipped_effects.add(C), E.add_callback(h);
      } else
        h();
    }
  };
  Mr(() => {
    l = !1, e(c), l || f(null, null);
  }, u);
}
function no(t, e) {
  return e;
}
function Jf(t, e, n) {
  for (var r = t.items, i = [], a = e.length, o = 0; o < a; o++)
    zs(e[o].e, i, !0);
  var u = a > 0 && i.length === 0 && n !== null;
  if (u) {
    var l = (
      /** @type {Element} */
      /** @type {Element} */
      n.parentNode
    );
    Af(l), l.append(
      /** @type {Element} */
      n
    ), r.clear(), Bn(t, e[0].prev, e[a - 1].next);
  }
  ec(i, () => {
    for (var c = 0; c < a; c++) {
      var d = e[c];
      u || (r.delete(d.k), Bn(t, d.prev, d.next)), Ft(d.e, !u);
    }
  });
}
function yr(t, e, n, r, i, a = null) {
  var o = t, u = { flags: e, items: /* @__PURE__ */ new Map(), first: null }, l = (e & 4) !== 0;
  if (l) {
    var c = (
      /** @type {Element} */
      t
    );
    o = c.appendChild(Rr());
  }
  var d = null, h = !1, f = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ qs(() => {
    var E = n();
    return yo(E) ? E : E == null ? [] : Us(E);
  }), p, g;
  function y() {
    $f(
      g,
      p,
      u,
      f,
      o,
      i,
      e,
      r,
      n
    ), a !== null && (p.length === 0 ? d ? To(d) : d = Gt(() => a(o)) : d !== null && Cr(d, () => {
      d = null;
    }));
  }
  Mr(() => {
    g ?? (g = /** @type {Effect} */
    Ve), p = /** @type {V[]} */
    s(v);
    var E = p.length;
    if (!(h && E === 0)) {
      h = E === 0;
      var S, C, b, _;
      if (Ks()) {
        var x = /* @__PURE__ */ new Set(), T = (
          /** @type {Batch} */
          rt
        );
        for (C = 0; C < E; C += 1) {
          b = p[C], _ = r(b, C);
          var A = u.items.get(_) ?? f.get(_);
          A ? e & 3 && cc(A, b, C, e) : (S = dc(
            null,
            u,
            null,
            null,
            b,
            _,
            C,
            i,
            e,
            n,
            !0
          ), f.set(_, S)), x.add(_);
        }
        for (const [L, U] of u.items)
          x.has(L) || T.skipped_effects.add(U.e);
        T.add_callback(y);
      } else
        y();
      s(v);
    }
  });
}
function $f(t, e, n, r, i, a, o, u, l) {
  var ee, D, I, w;
  var c = (o & 8) !== 0, d = (o & 3) !== 0, h = e.length, f = n.items, v = n.first, p = v, g, y = null, E, S = [], C = [], b, _, x, T;
  if (c)
    for (T = 0; T < h; T += 1)
      b = e[T], _ = u(b, T), x = f.get(_), x !== void 0 && ((ee = x.a) == null || ee.measure(), (E ?? (E = /* @__PURE__ */ new Set())).add(x));
  for (T = 0; T < h; T += 1) {
    if (b = e[T], _ = u(b, T), x = f.get(_), x === void 0) {
      var A = r.get(_);
      if (A !== void 0) {
        r.delete(_), f.set(_, A);
        var L = y ? y.next : p;
        Bn(n, y, A), Bn(n, A, L), qo(A, L, i), y = A;
      } else {
        var U = p ? (
          /** @type {TemplateNode} */
          p.e.nodes_start
        ) : i;
        y = dc(
          U,
          n,
          y,
          y === null ? n.first : y.next,
          b,
          _,
          T,
          a,
          o,
          l
        );
      }
      f.set(_, y), S = [], C = [], p = y.next;
      continue;
    }
    if (d && cc(x, b, T, o), x.e.f & Un && (To(x.e), c && ((D = x.a) == null || D.unfix(), (E ?? (E = /* @__PURE__ */ new Set())).delete(x))), x !== p) {
      if (g !== void 0 && g.has(x)) {
        if (S.length < C.length) {
          var X = C[0], H;
          y = X.prev;
          var B = S[0], ye = S[S.length - 1];
          for (H = 0; H < S.length; H += 1)
            qo(S[H], X, i);
          for (H = 0; H < C.length; H += 1)
            g.delete(C[H]);
          Bn(n, B.prev, ye.next), Bn(n, y, B), Bn(n, ye, X), p = X, y = ye, T -= 1, S = [], C = [];
        } else
          g.delete(x), qo(x, p, i), Bn(n, x.prev, x.next), Bn(n, x, y === null ? n.first : y.next), Bn(n, y, x), y = x;
        continue;
      }
      for (S = [], C = []; p !== null && p.k !== _; )
        p.e.f & Un || (g ?? (g = /* @__PURE__ */ new Set())).add(p), C.push(p), p = p.next;
      if (p === null)
        continue;
      x = p;
    }
    S.push(x), y = x, p = x.next;
  }
  if (p !== null || g !== void 0) {
    for (var V = g === void 0 ? [] : Us(g); p !== null; )
      p.e.f & Un || V.push(p), p = p.next;
    var F = V.length;
    if (F > 0) {
      var M = o & 4 && h === 0 ? i : null;
      if (c) {
        for (T = 0; T < F; T += 1)
          (I = V[T].a) == null || I.measure();
        for (T = 0; T < F; T += 1)
          (w = V[T].a) == null || w.fix();
      }
      Jf(n, V, M);
    }
  }
  c && xr(() => {
    var te;
    if (E !== void 0)
      for (x of E)
        (te = x.a) == null || te.apply();
  }), t.first = n.first && n.first.e, t.last = y && y.e;
  for (var G of r.values())
    Ft(G.e);
  r.clear();
}
function cc(t, e, n, r) {
  r & 1 && zi(t.v, e), r & 2 ? zi(
    /** @type {Value<number>} */
    t.i,
    n
  ) : t.i = n;
}
function dc(t, e, n, r, i, a, o, u, l, c, d) {
  var h = (l & 1) !== 0, f = (l & 16) === 0, v = h ? f ? /* @__PURE__ */ qu(i, !1, !1) : si(i) : i, p = l & 2 ? si(o) : o, g = {
    i: p,
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
      var y = document.createDocumentFragment();
      y.append(t = Rr());
    }
    return g.e = Gt(() => u(
      /** @type {Node} */
      t,
      v,
      p,
      c
    ), nf), g.e.prev = n && n.e, g.e.next = r && r.e, n === null ? d || (e.first = g) : (n.next = g, n.e.next = g.e), r !== null && (r.prev = g, r.e.prev = g.e), g;
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
function Bn(t, e, n) {
  e === null ? t.first = n : (e.next = n, e.e.next = n && n.e), n !== null && (n.prev = e, n.e.prev = e && e.e);
}
function Nr(t, e, n) {
  var r = t, i, a, o = null, u = null;
  function l() {
    a && (Cr(a), a = null), o && (o.lastChild.remove(), r.before(o), o = null), a = u, u = null;
  }
  Mr(() => {
    if (i !== (i = e())) {
      var c = Ks();
      if (i) {
        var d = r;
        c && (o = document.createDocumentFragment(), o.append(d = Rr()), a && rt.skipped_effects.add(a)), u = Gt(() => n(d, i));
      }
      c ? rt.add_callback(l) : l();
    }
  }, di);
}
function Cl(t, e, n, r, i, a) {
  var o, u, l = null, c = (
    /** @type {TemplateNode} */
    t
  ), d;
  Mr(() => {
    const h = e() || null;
    var f = h === "svg" ? Ud : null;
    h !== o && (d && (h === null ? Cr(d, () => {
      d = null, u = null;
    }) : h === u ? To(d) : Ft(d)), h && h !== u && (d = Gt(() => {
      if (l = f ? document.createElementNS(f, h) : document.createElement(h), Yi(l, l), r) {
        var v = (
          /** @type {TemplateNode} */
          l.appendChild(Rr())
        );
        r(l, v);
      }
      Ve.nodes_end = l, c.before(l);
    })), o = h, o && (u = o));
  }, di);
}
function Ue(t, e, n) {
  Fa(() => {
    var r = Dr(() => e(t, n == null ? void 0 : n()) || {});
    if (n && (r != null && r.update)) {
      var i = !1, a = (
        /** @type {any} */
        {}
      );
      xo(() => {
        var o = n();
        Hf(o), i && js(a, o) && (a = o, r.update(o));
      }), i = !0;
    }
    if (r != null && r.destroy)
      return () => (
        /** @type {Function} */
        r.destroy()
      );
  });
}
function eh(t, e) {
  var n = void 0, r;
  Mr(() => {
    n !== (n = e()) && (r && (Ft(r), r = null), n && (r = Gt(() => {
      Fa(() => (
        /** @type {(node: Element) => void} */
        n(t)
      ));
    })));
  });
}
function fc(t) {
  var e, n, r = "";
  if (typeof t == "string" || typeof t == "number") r += t;
  else if (typeof t == "object") if (Array.isArray(t)) {
    var i = t.length;
    for (e = 0; e < i; e++) t[e] && (n = fc(t[e])) && (r && (r += " "), r += n);
  } else for (n in t) t[n] && (r && (r += " "), r += n);
  return r;
}
function th() {
  for (var t, e, n = 0, r = "", i = arguments.length; n < i; n++) (t = arguments[n]) && (e = fc(t)) && (r && (r += " "), r += e);
  return r;
}
function hc(t) {
  return typeof t == "object" ? th(t) : t ?? "";
}
const Sl = [...` 	
\r\f \v\uFEFF`];
function nh(t, e, n) {
  var r = t == null ? "" : "" + t;
  if (n) {
    for (var i in n)
      if (n[i])
        r = r ? r + " " + i : i;
      else if (r.length)
        for (var a = i.length, o = 0; (o = r.indexOf(i, o)) >= 0; ) {
          var u = o + a;
          (o === 0 || Sl.includes(r[o - 1])) && (u === r.length || Sl.includes(r[u])) ? r = (o === 0 ? "" : r.substring(0, o)) + r.substring(u + 1) : o = u;
        }
  }
  return r === "" ? null : r;
}
function xl(t, e = !1) {
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
function rh(t, e) {
  if (e) {
    var n = "", r, i;
    if (Array.isArray(e) ? (r = e[0], i = e[1]) : r = e, t) {
      t = String(t).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var a = !1, o = 0, u = !1, l = [];
      r && l.push(...Object.keys(r).map(Wo)), i && l.push(...Object.keys(i).map(Wo));
      var c = 0, d = -1;
      const g = t.length;
      for (var h = 0; h < g; h++) {
        var f = t[h];
        if (u ? f === "/" && t[h - 1] === "*" && (u = !1) : a ? a === f && (a = !1) : f === "/" && t[h + 1] === "*" ? u = !0 : f === '"' || f === "'" ? a = f : f === "(" ? o++ : f === ")" && o--, !u && a === !1 && o === 0) {
          if (f === ":" && d === -1)
            d = h;
          else if (f === ";" || h === g - 1) {
            if (d !== -1) {
              var v = Wo(t.substring(c, d).trim());
              if (!l.includes(v)) {
                f !== ";" && h++;
                var p = t.substring(c, h).trim();
                n += " " + p + ";";
              }
            }
            c = h + 1, d = -1;
          }
        }
      }
    }
    return r && (n += xl(r)), i && (n += xl(i, !0)), n = n.trim(), n === "" ? null : n;
  }
  return t == null ? null : String(t);
}
function vc(t, e, n, r, i, a) {
  var o = t.__className;
  if (o !== n || o === void 0) {
    var u = nh(n, r, a);
    u == null ? t.removeAttribute("class") : e ? t.className = u : t.setAttribute("class", u), t.__className = n;
  } else if (a && i !== a)
    for (var l in a) {
      var c = !!a[l];
      (i == null || c !== !!i[l]) && t.classList.toggle(l, c);
    }
  return a;
}
function Ko(t, e = {}, n, r) {
  for (var i in n) {
    var a = n[i];
    e[i] !== a && (n[i] == null ? t.style.removeProperty(i) : t.style.setProperty(i, a, r));
  }
}
function tn(t, e, n, r) {
  var i = t.__style;
  if (i !== e) {
    var a = rh(e, r);
    a == null ? t.removeAttribute("style") : t.style.cssText = a, t.__style = e;
  } else r && (Array.isArray(r) ? (Ko(t, n == null ? void 0 : n[0], r[0]), Ko(t, n == null ? void 0 : n[1], r[1], "important")) : Ko(t, n, r));
  return r;
}
function gs(t, e, n = !1) {
  if (t.multiple) {
    if (e == null)
      return;
    if (!yo(e))
      return ef();
    for (var r of t.options)
      r.selected = e.includes(Tl(r));
    return;
  }
  for (r of t.options) {
    var i = Tl(r);
    if (_f(i, e)) {
      r.selected = !0;
      return;
    }
  }
  (!n || e !== void 0) && (t.selectedIndex = -1);
}
function ih(t) {
  var e = new MutationObserver(() => {
    gs(t, t.__value);
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
function Tl(t) {
  return "__value" in t ? t.__value : t.value;
}
const da = Symbol("class"), fa = Symbol("style"), pc = Symbol("is custom element"), mc = Symbol("is html");
function Ll(t, e) {
  var n = Ys(t);
  n.value === (n.value = // treat null and undefined the same for the initial value
  e ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  t.value === e && (e !== 0 || t.nodeName !== "PROGRESS") || (t.value = e ?? "");
}
function ah(t, e) {
  e ? t.hasAttribute("selected") || t.setAttribute("selected", "") : t.removeAttribute("selected");
}
function Sa(t, e, n, r) {
  var i = Ys(t);
  i[e] !== (i[e] = n) && (e === "loading" && (t[jd] = n), n == null ? t.removeAttribute(e) : typeof n != "string" && gc(t).includes(e) ? t[e] = n : t.setAttribute(e, n));
}
function oh(t, e, n, r, i = !1, a = !1) {
  var o = Ys(t), u = o[pc], l = !o[mc], c = e || {}, d = t.tagName === "OPTION";
  for (var h in e)
    h in n || (n[h] = null);
  n.class ? n.class = hc(n.class) : n[da] && (n.class = null), n[fa] && (n.style ?? (n.style = null));
  var f = gc(t);
  for (const C in n) {
    let b = n[C];
    if (d && C === "value" && b == null) {
      t.value = t.__value = "", c[C] = b;
      continue;
    }
    if (C === "class") {
      var v = t.namespaceURI === "http://www.w3.org/1999/xhtml";
      vc(t, v, b, r, e == null ? void 0 : e[da], n[da]), c[C] = b, c[da] = n[da];
      continue;
    }
    if (C === "style") {
      tn(t, b, e == null ? void 0 : e[fa], n[fa]), c[C] = b, c[fa] = n[fa];
      continue;
    }
    var p = c[C];
    if (!(b === p && !(b === void 0 && t.hasAttribute(C)))) {
      c[C] = b;
      var g = C[0] + C[1];
      if (g !== "$$")
        if (g === "on") {
          const _ = {}, x = "$$" + C;
          let T = C.slice(2);
          var y = jf(T);
          if (Vf(T) && (T = T.slice(0, -7), _.capture = !0), !y && p) {
            if (b != null) continue;
            t.removeEventListener(T, c[x], _), c[x] = null;
          }
          if (b != null)
            if (y)
              t[`__${T}`] = b, Pr([T]);
            else {
              let A = function(L) {
                c[C].call(this, L);
              };
              c[x] = Xs(T, t, A, _);
            }
          else y && (t[`__${T}`] = void 0);
        } else if (C === "style")
          Sa(t, C, b);
        else if (C === "autofocus")
          Cf(
            /** @type {HTMLElement} */
            t,
            !!b
          );
        else if (!u && (C === "__value" || C === "value" && b != null))
          t.value = t.__value = b;
        else if (C === "selected" && d)
          ah(
            /** @type {HTMLOptionElement} */
            t,
            b
          );
        else {
          var E = C;
          l || (E = Wf(E));
          var S = E === "defaultValue" || E === "defaultChecked";
          if (b == null && !u && !S)
            if (o[C] = null, E === "value" || E === "checked") {
              let _ = (
                /** @type {HTMLInputElement} */
                t
              );
              const x = e === void 0;
              if (E === "value") {
                let T = _.defaultValue;
                _.removeAttribute(E), _.defaultValue = T, _.value = _.__value = x ? T : null;
              } else {
                let T = _.defaultChecked;
                _.removeAttribute(E), _.defaultChecked = T, _.checked = x ? T : !1;
              }
            } else
              t.removeAttribute(C);
          else S || f.includes(E) && (u || typeof b != "string") ? (t[E] = b, E in o && (o[E] = Mt)) : typeof b != "function" && Sa(t, E, b);
        }
    }
  }
  return c;
}
function Be(t, e, n = [], r = [], i, a = !1, o = !1) {
  Vu(n, r, (u) => {
    var l = void 0, c = {}, d = t.nodeName === "SELECT", h = !1;
    if (Mr(() => {
      var v = e(...u.map(s)), p = oh(
        t,
        l,
        v,
        i,
        a,
        o
      );
      h && d && "value" in v && gs(
        /** @type {HTMLSelectElement} */
        t,
        v.value
      );
      for (let y of Object.getOwnPropertySymbols(c))
        v[y] || Ft(c[y]);
      for (let y of Object.getOwnPropertySymbols(v)) {
        var g = v[y];
        y.description === Hd && (!l || g !== l[y]) && (c[y] && Ft(c[y]), c[y] = Gt(() => eh(t, () => g))), p[y] = g;
      }
      l = p;
    }), d) {
      var f = (
        /** @type {HTMLSelectElement} */
        t
      );
      Fa(() => {
        gs(
          f,
          /** @type {Record<string | symbol, any>} */
          l.value,
          !0
        ), ih(f);
      });
    }
    h = !0;
  });
}
function Ys(t) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    t.__attributes ?? (t.__attributes = {
      [pc]: t.nodeName.includes("-"),
      [mc]: t.namespaceURI === Nd
    })
  );
}
var wl = /* @__PURE__ */ new Map();
function gc(t) {
  var e = t.getAttribute("is") || t.nodeName, n = wl.get(e);
  if (n) return n;
  wl.set(e, n = []);
  for (var r, i = t, a = Element.prototype; a !== i; ) {
    r = Lu(i);
    for (var o in r)
      r[o].set && n.push(o);
    i = Hs(i);
  }
  return n;
}
function xa(t, e, n = e) {
  var r = /* @__PURE__ */ new WeakSet();
  xf(t, "input", async (i) => {
    var a = i ? t.defaultValue : t.value;
    if (a = zo(t) ? Xo(a) : a, n(a), rt !== null && r.add(rt), await wo(), a !== (a = e())) {
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
  Dr(e) == null && t.value && (n(zo(t) ? Xo(t.value) : t.value), rt !== null && r.add(rt)), xo(() => {
    var i = e();
    if (t === document.activeElement) {
      var a = (
        /** @type {Batch} */
        Ja ?? rt
      );
      if (r.has(a))
        return;
    }
    zo(t) && i === Xo(t.value) || t.type === "date" && !i && !t.value || i !== t.value && (t.value = i ?? "");
  });
}
function zo(t) {
  var e = t.type;
  return e === "number" || e === "range";
}
function Xo(t) {
  return t === "" ? null : +t;
}
function Ol(t, e) {
  return t === e || (t == null ? void 0 : t[Wn]) === e;
}
function xe(t = {}, e, n, r) {
  return Fa(() => {
    var i, a;
    return xo(() => {
      i = a, a = [], Dr(() => {
        t !== n(...a) && (e(t, ...a), i && Ol(n(...i), t) && e(null, ...i));
      });
    }), () => {
      xr(() => {
        a && Ol(n(...a), t) && e(null, ...a);
      });
    };
  }), t;
}
function Zs(t, e, n) {
  if (t == null)
    return e(void 0), n && n(void 0), ge;
  const r = Dr(
    () => t.subscribe(
      e,
      // @ts-expect-error
      n
    )
  );
  return r.unsubscribe ? () => r.unsubscribe() : r;
}
const yi = [];
function sh(t, e) {
  return {
    subscribe: dt(t, e).subscribe
  };
}
function dt(t, e = ge) {
  let n = null;
  const r = /* @__PURE__ */ new Set();
  function i(u) {
    if (js(t, u) && (t = u, n)) {
      const l = !yi.length;
      for (const c of r)
        c[1](), yi.push(c, t);
      if (l) {
        for (let c = 0; c < yi.length; c += 2)
          yi[c][0](yi[c + 1]);
        yi.length = 0;
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
function ra(t, e, n) {
  const r = !Array.isArray(t), i = r ? [t] : t;
  if (!i.every(Boolean))
    throw new Error("derived() expects stores as input, got a falsy value");
  const a = e.length < 2;
  return sh(n, (o, u) => {
    let l = !1;
    const c = [];
    let d = 0, h = ge;
    const f = () => {
      if (d)
        return;
      h();
      const p = e(r ? c[0] : c, o, u);
      a ? o(p) : h = typeof p == "function" ? p : ge;
    }, v = i.map(
      (p, g) => Zs(
        p,
        (y) => {
          c[g] = y, d &= ~(1 << g), l && f();
        },
        () => {
          d |= 1 << g;
        }
      )
    );
    return l = !0, f(), function() {
      wu(v), h(), l = !1;
    };
  });
}
function Oo(t) {
  let e;
  return Zs(t, (n) => e = n)(), e;
}
let Wa = !1, bs = Symbol();
function Dt(t, e, n) {
  const r = n[e] ?? (n[e] = {
    store: null,
    source: /* @__PURE__ */ qu(void 0),
    unsubscribe: ge
  });
  if (r.store !== t && !(bs in n))
    if (r.unsubscribe(), r.store = t ?? null, t == null)
      r.source.v = void 0, r.unsubscribe = ge;
    else {
      var i = !0;
      r.unsubscribe = Zs(t, (a) => {
        i ? r.source.v = a : ne(r.source, a);
      }), i = !1;
    }
  return t && bs in n ? Oo(t) : s(r.source);
}
function pn(t, e) {
  return t.set(e), e;
}
function wn() {
  const t = {};
  function e() {
    So(() => {
      for (var n in t)
        t[n].unsubscribe();
      ao(t, bs, {
        enumerable: !1,
        value: !0
      });
    });
  }
  return [t, e];
}
function lh(t) {
  var e = Wa;
  try {
    return Wa = !1, [t(), Wa];
  } finally {
    Wa = e;
  }
}
const uh = {
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
function We(t, e, n) {
  return new Proxy(
    { props: t, exclude: e },
    uh
  );
}
const ch = {
  get(t, e) {
    let n = t.props.length;
    for (; n--; ) {
      let r = t.props[n];
      if (ca(r) && (r = r()), typeof r == "object" && r !== null && e in r) return r[e];
    }
  },
  set(t, e, n) {
    let r = t.props.length;
    for (; r--; ) {
      let i = t.props[r];
      ca(i) && (i = i());
      const a = Er(i, e);
      if (a && a.set)
        return a.set(n), !0;
    }
    return !1;
  },
  getOwnPropertyDescriptor(t, e) {
    let n = t.props.length;
    for (; n--; ) {
      let r = t.props[n];
      if (ca(r) && (r = r()), typeof r == "object" && r !== null && e in r) {
        const i = Er(r, e);
        return i && !i.configurable && (i.configurable = !0), i;
      }
    }
  },
  has(t, e) {
    if (e === Wn || e === Ru) return !1;
    for (let n of t.props)
      if (ca(n) && (n = n()), n != null && e in n) return !0;
    return !1;
  },
  ownKeys(t) {
    const e = [];
    for (let n of t.props)
      if (ca(n) && (n = n()), !!n) {
        for (const r in n)
          e.includes(r) || e.push(r);
        for (const r of Object.getOwnPropertySymbols(n))
          e.includes(r) || e.push(r);
      }
    return e;
  }
};
function it(...t) {
  return new Proxy({ props: t }, ch);
}
function m(t, e, n, r) {
  var C;
  var i = !na || (n & 2) !== 0, a = (n & 8) !== 0, o = (n & 16) !== 0, u = (
    /** @type {V} */
    r
  ), l = !0, c = () => (l && (l = !1, u = o ? Dr(
    /** @type {() => V} */
    r
  ) : (
    /** @type {V} */
    r
  )), u), d;
  if (a) {
    var h = Wn in t || Ru in t;
    d = ((C = Er(t, e)) == null ? void 0 : C.set) ?? (h && e in t ? (b) => t[e] = b : void 0);
  }
  var f, v = !1;
  a ? [f, v] = lh(() => (
    /** @type {V} */
    t[e]
  )) : f = /** @type {V} */
  t[e], f === void 0 && r !== void 0 && (f = c(), d && (i && Yd(), d(f)));
  var p;
  if (i ? p = () => {
    var b = (
      /** @type {V} */
      t[e]
    );
    return b === void 0 ? c() : (l = !0, b);
  } : p = () => {
    var b = (
      /** @type {V} */
      t[e]
    );
    return b !== void 0 && (u = /** @type {V} */
    void 0), b === void 0 ? u : b;
  }, i && !(n & 4))
    return p;
  if (d) {
    var g = t.$$legacy;
    return (
      /** @type {() => V} */
      function(b, _) {
        return arguments.length > 0 ? ((!i || !_ || g || v) && d(_ ? p() : b), b) : p();
      }
    );
  }
  var y = !1, E = (n & 1 ? Ao : qs)(() => (y = !1, p()));
  a && s(E);
  var S = (
    /** @type {Effect} */
    Ve
  );
  return (
    /** @type {() => V} */
    function(b, _) {
      if (arguments.length > 0) {
        const x = _ ? s(E) : i && a ? be(b) : b;
        return ne(E, x), y = !0, u !== void 0 && (u = x), b;
      }
      return fi && y || S.f & ci ? E.v : s(E);
    }
  );
}
const dh = "5";
var xu;
typeof window < "u" && ((xu = window.__svelte ?? (window.__svelte = {})).v ?? (xu.v = /* @__PURE__ */ new Set())).add(dh);
function fh(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var hh = function(e) {
  return vh(e) && !ph(e);
};
function vh(t) {
  return !!t && typeof t == "object";
}
function ph(t) {
  var e = Object.prototype.toString.call(t);
  return e === "[object RegExp]" || e === "[object Date]" || bh(t);
}
var mh = typeof Symbol == "function" && Symbol.for, gh = mh ? Symbol.for("react.element") : 60103;
function bh(t) {
  return t.$$typeof === gh;
}
function Ih(t) {
  return Array.isArray(t) ? [] : {};
}
function Ta(t, e) {
  return e.clone !== !1 && e.isMergeableObject(t) ? Zi(Ih(t), t, e) : t;
}
function yh(t, e, n) {
  return t.concat(e).map(function(r) {
    return Ta(r, n);
  });
}
function _h(t, e) {
  if (!e.customMerge)
    return Zi;
  var n = e.customMerge(t);
  return typeof n == "function" ? n : Zi;
}
function Eh(t) {
  return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(t).filter(function(e) {
    return Object.propertyIsEnumerable.call(t, e);
  }) : [];
}
function Rl(t) {
  return Object.keys(t).concat(Eh(t));
}
function bc(t, e) {
  try {
    return e in t;
  } catch {
    return !1;
  }
}
function Ah(t, e) {
  return bc(t, e) && !(Object.hasOwnProperty.call(t, e) && Object.propertyIsEnumerable.call(t, e));
}
function Ch(t, e, n) {
  var r = {};
  return n.isMergeableObject(t) && Rl(t).forEach(function(i) {
    r[i] = Ta(t[i], n);
  }), Rl(e).forEach(function(i) {
    Ah(t, i) || (bc(t, i) && n.isMergeableObject(e[i]) ? r[i] = _h(i, n)(t[i], e[i], n) : r[i] = Ta(e[i], n));
  }), r;
}
function Zi(t, e, n) {
  n = n || {}, n.arrayMerge = n.arrayMerge || yh, n.isMergeableObject = n.isMergeableObject || hh, n.cloneUnlessOtherwiseSpecified = Ta;
  var r = Array.isArray(e), i = Array.isArray(t), a = r === i;
  return a ? r ? n.arrayMerge(t, e, n) : Ch(t, e, n) : Ta(e, n);
}
Zi.all = function(e, n) {
  if (!Array.isArray(e))
    throw new Error("first argument should be an array");
  return e.reduce(function(r, i) {
    return Zi(r, i, n);
  }, {});
};
var Sh = Zi, xh = Sh;
const Th = /* @__PURE__ */ fh(xh);
var Is = function(t, e) {
  return Is = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, r) {
    n.__proto__ = r;
  } || function(n, r) {
    for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (n[i] = r[i]);
  }, Is(t, e);
};
function et(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  Is(t, e);
  function n() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : (n.prototype = e.prototype, new n());
}
var ce = function() {
  return ce = Object.assign || function(e) {
    for (var n, r = 1, i = arguments.length; r < i; r++) {
      n = arguments[r];
      for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, ce.apply(this, arguments);
};
function Lh(t, e) {
  var n = {};
  for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(t); i < r.length; i++)
      e.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[i]) && (n[r[i]] = t[r[i]]);
  return n;
}
function Ic(t, e, n, r) {
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
function Tr(t, e) {
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
function wh(t, e, n) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var r = n.apply(t, e || []), i, a = [];
  return i = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype), u("next"), u("throw"), u("return", o), i[Symbol.asyncIterator] = function() {
    return this;
  }, i;
  function o(v) {
    return function(p) {
      return Promise.resolve(p).then(v, h);
    };
  }
  function u(v, p) {
    r[v] && (i[v] = function(g) {
      return new Promise(function(y, E) {
        a.push([v, g, y, E]) > 1 || l(v, g);
      });
    }, p && (i[v] = p(i[v])));
  }
  function l(v, p) {
    try {
      c(r[v](p));
    } catch (g) {
      f(a[0][3], g);
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
  function f(v, p) {
    v(p), a.shift(), a.length && l(a[0][0], a[0][1]);
  }
}
function Oh(t) {
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
  var n = e && e.cache ? e.cache : Hh, r = e && e.serializer ? e.serializer : Nh, i = e && e.strategy ? e.strategy : Dh;
  return i(t, {
    cache: n,
    serializer: r
  });
}
function Rh(t) {
  return t == null || typeof t == "number" || typeof t == "boolean";
}
function Mh(t, e, n, r) {
  var i = Rh(r) ? r : n(r), a = e.get(i);
  return typeof a > "u" && (a = t.call(this, r), e.set(i, a)), a;
}
function yc(t, e, n) {
  var r = Array.prototype.slice.call(arguments, 3), i = n(r), a = e.get(i);
  return typeof a > "u" && (a = t.apply(this, r), e.set(i, a)), a;
}
function _c(t, e, n, r, i) {
  return n.bind(e, t, r, i);
}
function Dh(t, e) {
  var n = t.length === 1 ? Mh : yc;
  return _c(t, this, n, e.cache.create(), e.serializer);
}
function Ph(t, e) {
  return _c(t, this, yc, e.cache.create(), e.serializer);
}
var Nh = function() {
  return JSON.stringify(arguments);
}, Uh = (
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
), Hh = {
  create: function() {
    return new Uh();
  }
}, Zo = {
  variadic: Ph
}, ze;
(function(t) {
  t[t.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", t[t.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", t[t.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", t[t.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", t[t.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", t[t.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", t[t.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", t[t.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", t[t.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", t[t.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", t[t.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", t[t.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", t[t.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", t[t.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", t[t.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", t[t.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", t[t.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", t[t.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", t[t.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", t[t.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", t[t.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", t[t.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", t[t.INVALID_TAG = 23] = "INVALID_TAG", t[t.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", t[t.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", t[t.UNCLOSED_TAG = 27] = "UNCLOSED_TAG";
})(ze || (ze = {}));
var vt;
(function(t) {
  t[t.literal = 0] = "literal", t[t.argument = 1] = "argument", t[t.number = 2] = "number", t[t.date = 3] = "date", t[t.time = 4] = "time", t[t.select = 5] = "select", t[t.plural = 6] = "plural", t[t.pound = 7] = "pound", t[t.tag = 8] = "tag";
})(vt || (vt = {}));
var Qi;
(function(t) {
  t[t.number = 0] = "number", t[t.dateTime = 1] = "dateTime";
})(Qi || (Qi = {}));
function Ml(t) {
  return t.type === vt.literal;
}
function Fh(t) {
  return t.type === vt.argument;
}
function Ec(t) {
  return t.type === vt.number;
}
function Ac(t) {
  return t.type === vt.date;
}
function Cc(t) {
  return t.type === vt.time;
}
function Sc(t) {
  return t.type === vt.select;
}
function xc(t) {
  return t.type === vt.plural;
}
function Bh(t) {
  return t.type === vt.pound;
}
function Tc(t) {
  return t.type === vt.tag;
}
function Lc(t) {
  return !!(t && typeof t == "object" && t.type === Qi.number);
}
function ys(t) {
  return !!(t && typeof t == "object" && t.type === Qi.dateTime);
}
var wc = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/, kh = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
function Vh(t) {
  var e = {};
  return t.replace(kh, function(n) {
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
var Gh = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
function jh(t) {
  if (t.length === 0)
    throw new Error("Number skeleton cannot be empty");
  for (var e = t.split(Gh).filter(function(f) {
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
function qh(t) {
  return t.replace(/^(.*?)-/, "");
}
var Dl = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g, Oc = /^(@+)?(\+|#+)?[rs]?$/g, Wh = /(\*)(0+)|(#+)(0+)|(0+)/g, Rc = /^(0+)$/;
function Pl(t) {
  var e = {};
  return t[t.length - 1] === "r" ? e.roundingPriority = "morePrecision" : t[t.length - 1] === "s" && (e.roundingPriority = "lessPrecision"), t.replace(Oc, function(n, r, i) {
    return typeof i != "string" ? (e.minimumSignificantDigits = r.length, e.maximumSignificantDigits = r.length) : i === "+" ? e.minimumSignificantDigits = r.length : r[0] === "#" ? e.maximumSignificantDigits = r.length : (e.minimumSignificantDigits = r.length, e.maximumSignificantDigits = r.length + (typeof i == "string" ? i.length : 0)), "";
  }), e;
}
function Mc(t) {
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
    if (n === "+!" ? (e.signDisplay = "always", t = t.slice(2)) : n === "+?" && (e.signDisplay = "exceptZero", t = t.slice(2)), !Rc.test(t))
      throw new Error("Malformed concise eng/scientific notation");
    e.minimumIntegerDigits = t.length;
  }
  return e;
}
function Nl(t) {
  var e = {}, n = Mc(t);
  return n || e;
}
function zh(t) {
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
        e.style = "unit", e.unit = qh(i.options[0]);
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
        e = ce(ce(ce({}, e), { notation: "scientific" }), i.options.reduce(function(l, c) {
          return ce(ce({}, l), Nl(c));
        }, {}));
        continue;
      case "engineering":
        e = ce(ce(ce({}, e), { notation: "engineering" }), i.options.reduce(function(l, c) {
          return ce(ce({}, l), Nl(c));
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
        i.options[0].replace(Wh, function(l, c, d, h, f, v) {
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
    if (Rc.test(i.stem)) {
      e.minimumIntegerDigits = i.stem.length;
      continue;
    }
    if (Dl.test(i.stem)) {
      if (i.options.length > 1)
        throw new RangeError("Fraction-precision stems only accept a single optional option");
      i.stem.replace(Dl, function(l, c, d, h, f, v) {
        return d === "*" ? e.minimumFractionDigits = c.length : h && h[0] === "#" ? e.maximumFractionDigits = h.length : f && v ? (e.minimumFractionDigits = f.length, e.maximumFractionDigits = f.length + v.length) : (e.minimumFractionDigits = c.length, e.maximumFractionDigits = c.length), "";
      });
      var a = i.options[0];
      a === "w" ? e = ce(ce({}, e), { trailingZeroDisplay: "stripIfInteger" }) : a && (e = ce(ce({}, e), Pl(a)));
      continue;
    }
    if (Oc.test(i.stem)) {
      e = ce(ce({}, e), Pl(i.stem));
      continue;
    }
    var o = Mc(i.stem);
    o && (e = ce(ce({}, e), o));
    var u = Kh(i.stem);
    u && (e = ce(ce({}, e), u));
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
function Xh(t, e) {
  for (var n = "", r = 0; r < t.length; r++) {
    var i = t.charAt(r);
    if (i === "j") {
      for (var a = 0; r + 1 < t.length && t.charAt(r + 1) === i; )
        a++, r++;
      var o = 1 + (a & 1), u = a < 2 ? 1 : 3 + (a >> 1), l = "a", c = Yh(e);
      for ((c == "H" || c == "k") && (u = 0); u-- > 0; )
        n += l;
      for (; o-- > 0; )
        n = c + n;
    } else i === "J" ? n += "H" : n += i;
  }
  return n;
}
function Yh(t) {
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
var Qo, Zh = new RegExp("^".concat(wc.source, "*")), Qh = new RegExp("".concat(wc.source, "*$"));
function Ye(t, e) {
  return { start: t, end: e };
}
var Jh = !!String.prototype.startsWith && "_a".startsWith("a", 1), $h = !!String.fromCodePoint, ev = !!Object.fromEntries, tv = !!String.prototype.codePointAt, nv = !!String.prototype.trimStart, rv = !!String.prototype.trimEnd, iv = !!Number.isSafeInteger, av = iv ? Number.isSafeInteger : function(t) {
  return typeof t == "number" && isFinite(t) && Math.floor(t) === t && Math.abs(t) <= 9007199254740991;
}, _s = !0;
try {
  var ov = Pc("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  _s = ((Qo = ov.exec("a")) === null || Qo === void 0 ? void 0 : Qo[0]) === "a";
} catch {
  _s = !1;
}
var Ul = Jh ? (
  // Native
  function(e, n, r) {
    return e.startsWith(n, r);
  }
) : (
  // For IE11
  function(e, n, r) {
    return e.slice(r, r + n.length) === n;
  }
), Es = $h ? String.fromCodePoint : (
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
), Hl = (
  // native
  ev ? Object.fromEntries : (
    // Ponyfill
    function(e) {
      for (var n = {}, r = 0, i = e; r < i.length; r++) {
        var a = i[r], o = a[0], u = a[1];
        n[o] = u;
      }
      return n;
    }
  )
), Dc = tv ? (
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
), sv = nv ? (
  // Native
  function(e) {
    return e.trimStart();
  }
) : (
  // Ponyfill
  function(e) {
    return e.replace(Zh, "");
  }
), lv = rv ? (
  // Native
  function(e) {
    return e.trimEnd();
  }
) : (
  // Ponyfill
  function(e) {
    return e.replace(Qh, "");
  }
);
function Pc(t, e) {
  return new RegExp(t, e);
}
var As;
if (_s) {
  var Fl = Pc("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  As = function(e, n) {
    var r;
    Fl.lastIndex = n;
    var i = Fl.exec(e);
    return (r = i[1]) !== null && r !== void 0 ? r : "";
  };
} else
  As = function(e, n) {
    for (var r = []; ; ) {
      var i = Dc(e, n);
      if (i === void 0 || Nc(i) || fv(i))
        break;
      r.push(i), n += i >= 65536 ? 2 : 1;
    }
    return Es.apply(void 0, r);
  };
var uv = (
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
              type: vt.pound,
              location: Ye(u, this.clonePosition())
            });
          } else if (a === 60 && !this.ignoreTag && this.peek() === 47) {
            if (r)
              break;
            return this.error(ze.UNMATCHED_CLOSING_TAG, Ye(this.clonePosition(), this.clonePosition()));
          } else if (a === 60 && !this.ignoreTag && Cs(this.peek() || 0)) {
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
            type: vt.literal,
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
          if (this.isEOF() || !Cs(this.char()))
            return this.error(ze.INVALID_TAG, Ye(u, this.clonePosition()));
          var l = this.clonePosition(), c = this.parseTagName();
          return i !== c ? this.error(ze.UNMATCHED_CLOSING_TAG, Ye(l, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
            val: {
              type: vt.tag,
              value: i,
              children: o,
              location: Ye(r, this.clonePosition())
            },
            err: null
          } : this.error(ze.INVALID_TAG, Ye(u, this.clonePosition())));
        } else
          return this.error(ze.UNCLOSED_TAG, Ye(r, this.clonePosition()));
      } else
        return this.error(ze.INVALID_TAG, Ye(r, this.clonePosition()));
    }, t.prototype.parseTagName = function() {
      var e = this.offset();
      for (this.bump(); !this.isEOF() && dv(this.char()); )
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
        val: { type: vt.literal, value: i, location: l },
        err: null
      };
    }, t.prototype.tryParseLeftAngleBracket = function() {
      return !this.isEOF() && this.char() === 60 && (this.ignoreTag || // If at the opening tag or closing tag position, bail.
      !cv(this.peek() || 0)) ? (this.bump(), "<") : null;
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
      return Es.apply(void 0, n);
    }, t.prototype.tryParseUnquoted = function(e, n) {
      if (this.isEOF())
        return null;
      var r = this.char();
      return r === 60 || r === 123 || r === 35 && (n === "plural" || n === "selectordinal") || r === 125 && e > 0 ? null : (this.bump(), Es(r));
    }, t.prototype.parseArgument = function(e, n) {
      var r = this.clonePosition();
      if (this.bump(), this.bumpSpace(), this.isEOF())
        return this.error(ze.EXPECT_ARGUMENT_CLOSING_BRACE, Ye(r, this.clonePosition()));
      if (this.char() === 125)
        return this.bump(), this.error(ze.EMPTY_ARGUMENT, Ye(r, this.clonePosition()));
      var i = this.parseIdentifierIfPossible().value;
      if (!i)
        return this.error(ze.MALFORMED_ARGUMENT, Ye(r, this.clonePosition()));
      if (this.bumpSpace(), this.isEOF())
        return this.error(ze.EXPECT_ARGUMENT_CLOSING_BRACE, Ye(r, this.clonePosition()));
      switch (this.char()) {
        case 125:
          return this.bump(), {
            val: {
              type: vt.argument,
              // value does not include the opening and closing braces.
              value: i,
              location: Ye(r, this.clonePosition())
            },
            err: null
          };
        case 44:
          return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(ze.EXPECT_ARGUMENT_CLOSING_BRACE, Ye(r, this.clonePosition())) : this.parseArgumentOptions(e, n, i, r);
        default:
          return this.error(ze.MALFORMED_ARGUMENT, Ye(r, this.clonePosition()));
      }
    }, t.prototype.parseIdentifierIfPossible = function() {
      var e = this.clonePosition(), n = this.offset(), r = As(this.message, n), i = n + r.length;
      this.bumpTo(i);
      var a = this.clonePosition(), o = Ye(e, a);
      return { value: r, location: o };
    }, t.prototype.parseArgumentOptions = function(e, n, r, i) {
      var a, o = this.clonePosition(), u = this.parseIdentifierIfPossible().value, l = this.clonePosition();
      switch (u) {
        case "":
          return this.error(ze.EXPECT_ARGUMENT_TYPE, Ye(o, l));
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
            var f = lv(h.val);
            if (f.length === 0)
              return this.error(ze.EXPECT_ARGUMENT_STYLE, Ye(this.clonePosition(), this.clonePosition()));
            var v = Ye(d, this.clonePosition());
            c = { style: f, styleLocation: v };
          }
          var p = this.tryParseArgumentClose(i);
          if (p.err)
            return p;
          var g = Ye(i, this.clonePosition());
          if (c && Ul(c == null ? void 0 : c.style, "::", 0)) {
            var y = sv(c.style.slice(2));
            if (u === "number") {
              var h = this.parseNumberSkeletonFromString(y, c.styleLocation);
              return h.err ? h : {
                val: { type: vt.number, value: r, location: g, style: h.val },
                err: null
              };
            } else {
              if (y.length === 0)
                return this.error(ze.EXPECT_DATE_TIME_SKELETON, g);
              var E = y;
              this.locale && (E = Xh(y, this.locale));
              var f = {
                type: Qi.dateTime,
                pattern: E,
                location: c.styleLocation,
                parsedOptions: this.shouldParseSkeletons ? Vh(E) : {}
              }, S = u === "date" ? vt.date : vt.time;
              return {
                val: { type: S, value: r, location: g, style: f },
                err: null
              };
            }
          }
          return {
            val: {
              type: u === "number" ? vt.number : u === "date" ? vt.date : vt.time,
              value: r,
              location: g,
              style: (a = c == null ? void 0 : c.style) !== null && a !== void 0 ? a : null
            },
            err: null
          };
        }
        case "plural":
        case "selectordinal":
        case "select": {
          var C = this.clonePosition();
          if (this.bumpSpace(), !this.bumpIf(","))
            return this.error(ze.EXPECT_SELECT_ARGUMENT_OPTIONS, Ye(C, ce({}, C)));
          this.bumpSpace();
          var b = this.parseIdentifierIfPossible(), _ = 0;
          if (u !== "select" && b.value === "offset") {
            if (!this.bumpIf(":"))
              return this.error(ze.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, Ye(this.clonePosition(), this.clonePosition()));
            this.bumpSpace();
            var h = this.tryParseDecimalInteger(ze.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, ze.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);
            if (h.err)
              return h;
            this.bumpSpace(), b = this.parseIdentifierIfPossible(), _ = h.val;
          }
          var x = this.tryParsePluralOrSelectOptions(e, u, n, b);
          if (x.err)
            return x;
          var p = this.tryParseArgumentClose(i);
          if (p.err)
            return p;
          var T = Ye(i, this.clonePosition());
          return u === "select" ? {
            val: {
              type: vt.select,
              value: r,
              options: Hl(x.val),
              location: T
            },
            err: null
          } : {
            val: {
              type: vt.plural,
              value: r,
              options: Hl(x.val),
              offset: _,
              pluralType: u === "plural" ? "cardinal" : "ordinal",
              location: T
            },
            err: null
          };
        }
        default:
          return this.error(ze.INVALID_ARGUMENT_TYPE, Ye(o, l));
      }
    }, t.prototype.tryParseArgumentClose = function(e) {
      return this.isEOF() || this.char() !== 125 ? this.error(ze.EXPECT_ARGUMENT_CLOSING_BRACE, Ye(e, this.clonePosition())) : (this.bump(), { val: !0, err: null });
    }, t.prototype.parseSimpleArgStyleIfPossible = function() {
      for (var e = 0, n = this.clonePosition(); !this.isEOF(); ) {
        var r = this.char();
        switch (r) {
          case 39: {
            this.bump();
            var i = this.clonePosition();
            if (!this.bumpUntil("'"))
              return this.error(ze.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, Ye(i, this.clonePosition()));
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
        r = jh(e);
      } catch {
        return this.error(ze.INVALID_NUMBER_SKELETON, n);
      }
      return {
        val: {
          type: Qi.number,
          tokens: r,
          location: n,
          parsedOptions: this.shouldParseSkeletons ? zh(r) : {}
        },
        err: null
      };
    }, t.prototype.tryParsePluralOrSelectOptions = function(e, n, r, i) {
      for (var a, o = !1, u = [], l = /* @__PURE__ */ new Set(), c = i.value, d = i.location; ; ) {
        if (c.length === 0) {
          var h = this.clonePosition();
          if (n !== "select" && this.bumpIf("=")) {
            var f = this.tryParseDecimalInteger(ze.EXPECT_PLURAL_ARGUMENT_SELECTOR, ze.INVALID_PLURAL_ARGUMENT_SELECTOR);
            if (f.err)
              return f;
            d = Ye(h, this.clonePosition()), c = this.message.slice(h.offset, this.offset());
          } else
            break;
        }
        if (l.has(c))
          return this.error(n === "select" ? ze.DUPLICATE_SELECT_ARGUMENT_SELECTOR : ze.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, d);
        c === "other" && (o = !0), this.bumpSpace();
        var v = this.clonePosition();
        if (!this.bumpIf("{"))
          return this.error(n === "select" ? ze.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : ze.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, Ye(this.clonePosition(), this.clonePosition()));
        var p = this.parseMessage(e + 1, n, r);
        if (p.err)
          return p;
        var g = this.tryParseArgumentClose(v);
        if (g.err)
          return g;
        u.push([
          c,
          {
            value: p.val,
            location: Ye(v, this.clonePosition())
          }
        ]), l.add(c), this.bumpSpace(), a = this.parseIdentifierIfPossible(), c = a.value, d = a.location;
      }
      return u.length === 0 ? this.error(n === "select" ? ze.EXPECT_SELECT_ARGUMENT_SELECTOR : ze.EXPECT_PLURAL_ARGUMENT_SELECTOR, Ye(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !o ? this.error(ze.MISSING_OTHER_CLAUSE, Ye(this.clonePosition(), this.clonePosition())) : { val: u, err: null };
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
      return a ? (o *= r, av(o) ? { val: o, err: null } : this.error(n, l)) : this.error(e, l);
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
      var n = Dc(this.message, e);
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
      if (Ul(this.message, e, this.offset())) {
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
      for (; !this.isEOF() && Nc(this.char()); )
        this.bump();
    }, t.prototype.peek = function() {
      if (this.isEOF())
        return null;
      var e = this.char(), n = this.offset(), r = this.message.charCodeAt(n + (e >= 65536 ? 2 : 1));
      return r ?? null;
    }, t;
  }()
);
function Cs(t) {
  return t >= 97 && t <= 122 || t >= 65 && t <= 90;
}
function cv(t) {
  return Cs(t) || t === 47;
}
function dv(t) {
  return t === 45 || t === 46 || t >= 48 && t <= 57 || t === 95 || t >= 97 && t <= 122 || t >= 65 && t <= 90 || t == 183 || t >= 192 && t <= 214 || t >= 216 && t <= 246 || t >= 248 && t <= 893 || t >= 895 && t <= 8191 || t >= 8204 && t <= 8205 || t >= 8255 && t <= 8256 || t >= 8304 && t <= 8591 || t >= 11264 && t <= 12271 || t >= 12289 && t <= 55295 || t >= 63744 && t <= 64975 || t >= 65008 && t <= 65533 || t >= 65536 && t <= 983039;
}
function Nc(t) {
  return t >= 9 && t <= 13 || t === 32 || t === 133 || t >= 8206 && t <= 8207 || t === 8232 || t === 8233;
}
function fv(t) {
  return t >= 33 && t <= 35 || t === 36 || t >= 37 && t <= 39 || t === 40 || t === 41 || t === 42 || t === 43 || t === 44 || t === 45 || t >= 46 && t <= 47 || t >= 58 && t <= 59 || t >= 60 && t <= 62 || t >= 63 && t <= 64 || t === 91 || t === 92 || t === 93 || t === 94 || t === 96 || t === 123 || t === 124 || t === 125 || t === 126 || t === 161 || t >= 162 && t <= 165 || t === 166 || t === 167 || t === 169 || t === 171 || t === 172 || t === 174 || t === 176 || t === 177 || t === 182 || t === 187 || t === 191 || t === 215 || t === 247 || t >= 8208 && t <= 8213 || t >= 8214 && t <= 8215 || t === 8216 || t === 8217 || t === 8218 || t >= 8219 && t <= 8220 || t === 8221 || t === 8222 || t === 8223 || t >= 8224 && t <= 8231 || t >= 8240 && t <= 8248 || t === 8249 || t === 8250 || t >= 8251 && t <= 8254 || t >= 8257 && t <= 8259 || t === 8260 || t === 8261 || t === 8262 || t >= 8263 && t <= 8273 || t === 8274 || t === 8275 || t >= 8277 && t <= 8286 || t >= 8592 && t <= 8596 || t >= 8597 && t <= 8601 || t >= 8602 && t <= 8603 || t >= 8604 && t <= 8607 || t === 8608 || t >= 8609 && t <= 8610 || t === 8611 || t >= 8612 && t <= 8613 || t === 8614 || t >= 8615 && t <= 8621 || t === 8622 || t >= 8623 && t <= 8653 || t >= 8654 && t <= 8655 || t >= 8656 && t <= 8657 || t === 8658 || t === 8659 || t === 8660 || t >= 8661 && t <= 8691 || t >= 8692 && t <= 8959 || t >= 8960 && t <= 8967 || t === 8968 || t === 8969 || t === 8970 || t === 8971 || t >= 8972 && t <= 8991 || t >= 8992 && t <= 8993 || t >= 8994 && t <= 9e3 || t === 9001 || t === 9002 || t >= 9003 && t <= 9083 || t === 9084 || t >= 9085 && t <= 9114 || t >= 9115 && t <= 9139 || t >= 9140 && t <= 9179 || t >= 9180 && t <= 9185 || t >= 9186 && t <= 9254 || t >= 9255 && t <= 9279 || t >= 9280 && t <= 9290 || t >= 9291 && t <= 9311 || t >= 9472 && t <= 9654 || t === 9655 || t >= 9656 && t <= 9664 || t === 9665 || t >= 9666 && t <= 9719 || t >= 9720 && t <= 9727 || t >= 9728 && t <= 9838 || t === 9839 || t >= 9840 && t <= 10087 || t === 10088 || t === 10089 || t === 10090 || t === 10091 || t === 10092 || t === 10093 || t === 10094 || t === 10095 || t === 10096 || t === 10097 || t === 10098 || t === 10099 || t === 10100 || t === 10101 || t >= 10132 && t <= 10175 || t >= 10176 && t <= 10180 || t === 10181 || t === 10182 || t >= 10183 && t <= 10213 || t === 10214 || t === 10215 || t === 10216 || t === 10217 || t === 10218 || t === 10219 || t === 10220 || t === 10221 || t === 10222 || t === 10223 || t >= 10224 && t <= 10239 || t >= 10240 && t <= 10495 || t >= 10496 && t <= 10626 || t === 10627 || t === 10628 || t === 10629 || t === 10630 || t === 10631 || t === 10632 || t === 10633 || t === 10634 || t === 10635 || t === 10636 || t === 10637 || t === 10638 || t === 10639 || t === 10640 || t === 10641 || t === 10642 || t === 10643 || t === 10644 || t === 10645 || t === 10646 || t === 10647 || t === 10648 || t >= 10649 && t <= 10711 || t === 10712 || t === 10713 || t === 10714 || t === 10715 || t >= 10716 && t <= 10747 || t === 10748 || t === 10749 || t >= 10750 && t <= 11007 || t >= 11008 && t <= 11055 || t >= 11056 && t <= 11076 || t >= 11077 && t <= 11078 || t >= 11079 && t <= 11084 || t >= 11085 && t <= 11123 || t >= 11124 && t <= 11125 || t >= 11126 && t <= 11157 || t === 11158 || t >= 11159 && t <= 11263 || t >= 11776 && t <= 11777 || t === 11778 || t === 11779 || t === 11780 || t === 11781 || t >= 11782 && t <= 11784 || t === 11785 || t === 11786 || t === 11787 || t === 11788 || t === 11789 || t >= 11790 && t <= 11798 || t === 11799 || t >= 11800 && t <= 11801 || t === 11802 || t === 11803 || t === 11804 || t === 11805 || t >= 11806 && t <= 11807 || t === 11808 || t === 11809 || t === 11810 || t === 11811 || t === 11812 || t === 11813 || t === 11814 || t === 11815 || t === 11816 || t === 11817 || t >= 11818 && t <= 11822 || t === 11823 || t >= 11824 && t <= 11833 || t >= 11834 && t <= 11835 || t >= 11836 && t <= 11839 || t === 11840 || t === 11841 || t === 11842 || t >= 11843 && t <= 11855 || t >= 11856 && t <= 11857 || t === 11858 || t >= 11859 && t <= 11903 || t >= 12289 && t <= 12291 || t === 12296 || t === 12297 || t === 12298 || t === 12299 || t === 12300 || t === 12301 || t === 12302 || t === 12303 || t === 12304 || t === 12305 || t >= 12306 && t <= 12307 || t === 12308 || t === 12309 || t === 12310 || t === 12311 || t === 12312 || t === 12313 || t === 12314 || t === 12315 || t === 12316 || t === 12317 || t >= 12318 && t <= 12319 || t === 12320 || t === 12336 || t === 64830 || t === 64831 || t >= 65093 && t <= 65094;
}
function Ss(t) {
  t.forEach(function(e) {
    if (delete e.location, Sc(e) || xc(e))
      for (var n in e.options)
        delete e.options[n].location, Ss(e.options[n].value);
    else Ec(e) && Lc(e.style) || (Ac(e) || Cc(e)) && ys(e.style) ? delete e.style.location : Tc(e) && Ss(e.children);
  });
}
function hv(t, e) {
  e === void 0 && (e = {}), e = ce({ shouldParseSkeletons: !0, requiresOtherClause: !0 }, e);
  var n = new uv(t, e).parse();
  if (n.err) {
    var r = SyntaxError(ze[n.err.kind]);
    throw r.location = n.err.location, r.originalMessage = n.err.message, r;
  }
  return e != null && e.captureLocation || Ss(n.val), n.val;
}
var Ji;
(function(t) {
  t.MISSING_VALUE = "MISSING_VALUE", t.INVALID_VALUE = "INVALID_VALUE", t.MISSING_INTL_API = "MISSING_INTL_API";
})(Ji || (Ji = {}));
var Ro = (
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
), Bl = (
  /** @class */
  function(t) {
    et(e, t);
    function e(n, r, i, a) {
      return t.call(this, 'Invalid values for "'.concat(n, '": "').concat(r, '". Options are "').concat(Object.keys(i).join('", "'), '"'), Ji.INVALID_VALUE, a) || this;
    }
    return e;
  }(Ro)
), vv = (
  /** @class */
  function(t) {
    et(e, t);
    function e(n, r, i) {
      return t.call(this, 'Value for "'.concat(n, '" must be of type ').concat(r), Ji.INVALID_VALUE, i) || this;
    }
    return e;
  }(Ro)
), pv = (
  /** @class */
  function(t) {
    et(e, t);
    function e(n, r) {
      return t.call(this, 'The intl string context variable "'.concat(n, '" was not provided to the string "').concat(r, '"'), Ji.MISSING_VALUE, r) || this;
    }
    return e;
  }(Ro)
), Yt;
(function(t) {
  t[t.literal = 0] = "literal", t[t.object = 1] = "object";
})(Yt || (Yt = {}));
function mv(t) {
  return t.length < 2 ? t : t.reduce(function(e, n) {
    var r = e[e.length - 1];
    return !r || r.type !== Yt.literal || n.type !== Yt.literal ? e.push(n) : r.value += n.value, e;
  }, []);
}
function gv(t) {
  return typeof t == "function";
}
function ro(t, e, n, r, i, a, o) {
  if (t.length === 1 && Ml(t[0]))
    return [
      {
        type: Yt.literal,
        value: t[0].value
      }
    ];
  for (var u = [], l = 0, c = t; l < c.length; l++) {
    var d = c[l];
    if (Ml(d)) {
      u.push({
        type: Yt.literal,
        value: d.value
      });
      continue;
    }
    if (Bh(d)) {
      typeof a == "number" && u.push({
        type: Yt.literal,
        value: n.getNumberFormat(e).format(a)
      });
      continue;
    }
    var h = d.value;
    if (!(i && h in i))
      throw new pv(h, o);
    var f = i[h];
    if (Fh(d)) {
      (!f || typeof f == "string" || typeof f == "number") && (f = typeof f == "string" || typeof f == "number" ? String(f) : ""), u.push({
        type: typeof f == "string" ? Yt.literal : Yt.object,
        value: f
      });
      continue;
    }
    if (Ac(d)) {
      var v = typeof d.style == "string" ? r.date[d.style] : ys(d.style) ? d.style.parsedOptions : void 0;
      u.push({
        type: Yt.literal,
        value: n.getDateTimeFormat(e, v).format(f)
      });
      continue;
    }
    if (Cc(d)) {
      var v = typeof d.style == "string" ? r.time[d.style] : ys(d.style) ? d.style.parsedOptions : r.time.medium;
      u.push({
        type: Yt.literal,
        value: n.getDateTimeFormat(e, v).format(f)
      });
      continue;
    }
    if (Ec(d)) {
      var v = typeof d.style == "string" ? r.number[d.style] : Lc(d.style) ? d.style.parsedOptions : void 0;
      v && v.scale && (f = f * (v.scale || 1)), u.push({
        type: Yt.literal,
        value: n.getNumberFormat(e, v).format(f)
      });
      continue;
    }
    if (Tc(d)) {
      var p = d.children, g = d.value, y = i[g];
      if (!gv(y))
        throw new vv(g, "function", o);
      var E = ro(p, e, n, r, i, a), S = y(E.map(function(_) {
        return _.value;
      }));
      Array.isArray(S) || (S = [S]), u.push.apply(u, S.map(function(_) {
        return {
          type: typeof _ == "string" ? Yt.literal : Yt.object,
          value: _
        };
      }));
    }
    if (Sc(d)) {
      var C = d.options[f] || d.options.other;
      if (!C)
        throw new Bl(d.value, f, Object.keys(d.options), o);
      u.push.apply(u, ro(C.value, e, n, r, i));
      continue;
    }
    if (xc(d)) {
      var C = d.options["=".concat(f)];
      if (!C) {
        if (!Intl.PluralRules)
          throw new Ro(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`, Ji.MISSING_INTL_API, o);
        var b = n.getPluralRules(e, { type: d.pluralType }).select(f - (d.offset || 0));
        C = d.options[b] || d.options.other;
      }
      if (!C)
        throw new Bl(d.value, f, Object.keys(d.options), o);
      u.push.apply(u, ro(C.value, e, n, r, i, f - (d.offset || 0)));
      continue;
    }
  }
  return mv(u);
}
function bv(t, e) {
  return e ? ce(ce(ce({}, t || {}), e || {}), Object.keys(t).reduce(function(n, r) {
    return n[r] = ce(ce({}, t[r]), e[r] || {}), n;
  }, {})) : t;
}
function Iv(t, e) {
  return e ? Object.keys(t).reduce(function(n, r) {
    return n[r] = bv(t[r], e[r]), n;
  }, ce({}, t)) : t;
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
function yv(t) {
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
var Uc = (
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
          return !h.length || f.type !== Yt.literal || typeof h[h.length - 1] != "string" ? h.push(f.value) : h[h.length - 1] += f.value, h;
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
        this.ast = t.__parse(e, ce(ce({}, u), { locale: this.resolvedLocale }));
      } else
        this.ast = e;
      if (!Array.isArray(this.ast))
        throw new TypeError("A message must be provided as a String or AST.");
      this.formats = Iv(t.formats, r), this.formatters = i && i.formatters || yv(this.formatterCache);
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
    }, t.__parse = hv, t.formats = {
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
function _v(t, e) {
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
const _r = {}, Ev = (t, e, n) => n && (e in _r || (_r[e] = {}), t in _r[e] || (_r[e][t] = n), n), Hc = (t, e) => {
  if (e == null)
    return;
  if (e in _r && t in _r[e])
    return _r[e][t];
  const n = ka(e);
  for (let r = 0; r < n.length; r++) {
    const i = n[r], a = Cv(i, t);
    if (a)
      return Ev(t, e, a);
  }
};
let Js;
const Ba = dt({});
function Av(t) {
  return Js[t] || null;
}
function Fc(t) {
  return t in Js;
}
function Cv(t, e) {
  if (!Fc(t))
    return null;
  const n = Av(t);
  return _v(n, e);
}
function Sv(t) {
  if (t == null)
    return;
  const e = ka(t);
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    if (Fc(r))
      return r;
  }
}
function Bc(t, ...e) {
  delete _r[t], Ba.update((n) => (n[t] = Th.all([n[t] || {}, ...e]), n));
}
ra(
  [Ba],
  ([t]) => Object.keys(t)
);
Ba.subscribe((t) => Js = t);
const io = {};
function xv(t, e) {
  io[t].delete(e), io[t].size === 0 && delete io[t];
}
function kc(t) {
  return io[t];
}
function Tv(t) {
  return ka(t).map((e) => {
    const n = kc(e);
    return [e, n ? [...n] : []];
  }).filter(([, e]) => e.length > 0);
}
function lo(t) {
  return t == null ? !1 : ka(t).some(
    (e) => {
      var n;
      return (n = kc(e)) == null ? void 0 : n.size;
    }
  );
}
function Lv(t, e) {
  return Promise.all(
    e.map((r) => (xv(t, r), r().then((i) => i.default || i)))
  ).then((r) => Bc(t, ...r));
}
const ha = {};
function Vc(t) {
  if (!lo(t))
    return t in ha ? ha[t] : Promise.resolve();
  const e = Tv(t);
  return ha[t] = Promise.all(
    e.map(
      ([n, r]) => Lv(n, r)
    )
  ).then(() => {
    if (lo(t))
      return Vc(t);
    delete ha[t];
  }), ha[t];
}
var kl = Object.getOwnPropertySymbols, wv = Object.prototype.hasOwnProperty, Ov = Object.prototype.propertyIsEnumerable, Rv = (t, e) => {
  var n = {};
  for (var r in t)
    wv.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && kl)
    for (var r of kl(t))
      e.indexOf(r) < 0 && Ov.call(t, r) && (n[r] = t[r]);
  return n;
};
const Mv = {
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
function Dv({ locale: t, id: e }) {
  console.warn(
    `[svelte-i18n] The message "${e}" was not found in "${ka(
      t
    ).join('", "')}".${lo(Ur()) ? `

Note: there are at least one loader still registered to this locale that wasn't executed.` : ""}`
  );
}
const Pv = {
  fallbackLocale: null,
  loadingDelay: 200,
  formats: Mv,
  warnOnMissingMessages: !0,
  handleMissingMessage: void 0,
  ignoreTag: !0
}, ba = Pv;
function $i() {
  return ba;
}
function Nv(t) {
  const e = t, { formats: n } = e, r = Rv(e, ["formats"]);
  let i = t.fallbackLocale;
  if (t.initialLocale)
    try {
      Uc.resolveLocale(t.initialLocale) && (i = t.initialLocale);
    } catch {
      console.warn(
        `[svelte-i18n] The initial locale "${t.initialLocale}" is not a valid locale.`
      );
    }
  return r.warnOnMissingMessages && (delete r.warnOnMissingMessages, r.handleMissingMessage == null ? r.handleMissingMessage = Dv : console.warn(
    '[svelte-i18n] The "warnOnMissingMessages" option is deprecated. Please use the "handleMissingMessage" option instead.'
  )), Object.assign(ba, r, { initialLocale: i }), n && ("number" in n && Object.assign(ba.formats.number, n.number), "date" in n && Object.assign(ba.formats.date, n.date), "time" in n && Object.assign(ba.formats.time, n.time)), hi.set(i);
}
const $o = dt(!1);
var Uv = Object.defineProperty, Hv = Object.defineProperties, Fv = Object.getOwnPropertyDescriptors, Vl = Object.getOwnPropertySymbols, Bv = Object.prototype.hasOwnProperty, kv = Object.prototype.propertyIsEnumerable, Gl = (t, e, n) => e in t ? Uv(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n, Vv = (t, e) => {
  for (var n in e || (e = {}))
    Bv.call(e, n) && Gl(t, n, e[n]);
  if (Vl)
    for (var n of Vl(e))
      kv.call(e, n) && Gl(t, n, e[n]);
  return t;
}, Gv = (t, e) => Hv(t, Fv(e));
let xs;
const uo = dt(null);
function jl(t) {
  return t.split("-").map((e, n, r) => r.slice(0, n + 1).join("-")).reverse();
}
function ka(t, e = $i().fallbackLocale) {
  const n = jl(t);
  return e ? [.../* @__PURE__ */ new Set([...n, ...jl(e)])] : n;
}
function Ur() {
  return xs ?? void 0;
}
uo.subscribe((t) => {
  xs = t ?? void 0, typeof window < "u" && t != null && document.documentElement.setAttribute("lang", t);
});
const jv = (t) => {
  if (t && Sv(t) && lo(t)) {
    const { loadingDelay: e } = $i();
    let n;
    return typeof window < "u" && Ur() != null && e ? n = window.setTimeout(
      () => $o.set(!0),
      e
    ) : $o.set(!0), Vc(t).then(() => {
      uo.set(t);
    }).finally(() => {
      clearTimeout(n), $o.set(!1);
    });
  }
  return uo.set(t);
}, hi = Gv(Vv({}, uo), {
  set: jv
}), qv = () => typeof window > "u" ? null : window.navigator.language || window.navigator.languages[0], Mo = (t) => {
  const e = /* @__PURE__ */ Object.create(null);
  return (r) => {
    const i = JSON.stringify(r);
    return i in e ? e[i] : e[i] = t(r);
  };
};
var Wv = Object.defineProperty, co = Object.getOwnPropertySymbols, Gc = Object.prototype.hasOwnProperty, jc = Object.prototype.propertyIsEnumerable, ql = (t, e, n) => e in t ? Wv(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n, $s = (t, e) => {
  for (var n in e || (e = {}))
    Gc.call(e, n) && ql(t, n, e[n]);
  if (co)
    for (var n of co(e))
      jc.call(e, n) && ql(t, n, e[n]);
  return t;
}, ia = (t, e) => {
  var n = {};
  for (var r in t)
    Gc.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && co)
    for (var r of co(t))
      e.indexOf(r) < 0 && jc.call(t, r) && (n[r] = t[r]);
  return n;
};
const La = (t, e) => {
  const { formats: n } = $i();
  if (t in n && e in n[t])
    return n[t][e];
  throw new Error(`[svelte-i18n] Unknown "${e}" ${t} format.`);
}, Kv = Mo(
  (t) => {
    var e = t, { locale: n, format: r } = e, i = ia(e, ["locale", "format"]);
    if (n == null)
      throw new Error('[svelte-i18n] A "locale" must be set to format numbers');
    return r && (i = La("number", r)), new Intl.NumberFormat(n, i);
  }
), zv = Mo(
  (t) => {
    var e = t, { locale: n, format: r } = e, i = ia(e, ["locale", "format"]);
    if (n == null)
      throw new Error('[svelte-i18n] A "locale" must be set to format dates');
    return r ? i = La("date", r) : Object.keys(i).length === 0 && (i = La("date", "short")), new Intl.DateTimeFormat(n, i);
  }
), Xv = Mo(
  (t) => {
    var e = t, { locale: n, format: r } = e, i = ia(e, ["locale", "format"]);
    if (n == null)
      throw new Error(
        '[svelte-i18n] A "locale" must be set to format time values'
      );
    return r ? i = La("time", r) : Object.keys(i).length === 0 && (i = La("time", "short")), new Intl.DateTimeFormat(n, i);
  }
), Yv = (t = {}) => {
  var e = t, {
    locale: n = Ur()
  } = e, r = ia(e, [
    "locale"
  ]);
  return Kv($s({ locale: n }, r));
}, Zv = (t = {}) => {
  var e = t, {
    locale: n = Ur()
  } = e, r = ia(e, [
    "locale"
  ]);
  return zv($s({ locale: n }, r));
}, Qv = (t = {}) => {
  var e = t, {
    locale: n = Ur()
  } = e, r = ia(e, [
    "locale"
  ]);
  return Xv($s({ locale: n }, r));
}, Jv = Mo(
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  (t, e = Ur()) => new Uc(t, e, $i().formats, {
    ignoreTag: $i().ignoreTag
  })
), $v = (t, e = {}) => {
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
  let d = Hc(t, l);
  if (!d)
    d = (a = (i = (r = (n = $i()).handleMissingMessage) == null ? void 0 : r.call(n, { locale: l, id: t, defaultValue: c })) != null ? i : c) != null ? a : t;
  else if (typeof d != "string")
    return console.warn(
      `[svelte-i18n] Message with id "${t}" must be of type "string", found: "${typeof d}". Gettin its value through the "$format" method is deprecated; use the "json" method instead.`
    ), d;
  if (!u)
    return d;
  let h = d;
  try {
    h = Jv(d, l).format(u);
  } catch (f) {
    f instanceof Error && console.warn(
      `[svelte-i18n] Message "${t}" has syntax error:`,
      f.message
    );
  }
  return h;
}, ep = (t, e) => Qv(e).format(t), tp = (t, e) => Zv(e).format(t), np = (t, e) => Yv(e).format(t), rp = (t, e = Ur()) => Hc(t, e), ip = ra([hi, Ba], () => $v);
ra([hi], () => ep);
ra([hi], () => tp);
ra([hi], () => np);
ra([hi, Ba], () => rp);
function ap(t, e) {
  Object.entries(t).forEach(([a, o]) => {
    Bc(a, o);
  });
  const n = localStorage.getItem("language"), r = "en", i = n ?? qv();
  console.log("Initial: Setting the language to", i), Nv({
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
const op = "Suche", sp = "Filtertypen", lp = "Filter hinzufügen", up = "Keine Ressourcen gefunden.", cp = "Loading...", dp = {
  search: op,
  filter_types: sp,
  add_filter: lp,
  no_resources_found: up,
  loading: cp
}, fp = "Search", hp = "Filter Types", vp = "Add Filter", pp = "No resources found.", mp = "Loading...", gp = {
  search: fp,
  filter_types: hp,
  add_filter: vp,
  no_resources_found: pp,
  loading: mp
};
function bp(t, e = {}) {
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
function Ne(t) {
  return Object.entries(t).filter(([e, n]) => e !== "" && n).map(([e]) => e).join(" ");
}
function qe(t, e, n, r = { bubbles: !0 }) {
  if (typeof Event > "u")
    throw new Error("Event not defined.");
  if (!t)
    throw new Error("Tried to dispatch event without element.");
  const i = new CustomEvent(e, Object.assign(Object.assign({}, r), { detail: n }));
  return t == null || t.dispatchEvent(i), i;
}
function ea(t, e) {
  let n = Object.getOwnPropertyNames(t);
  const r = {};
  for (let i = 0; i < n.length; i++) {
    const a = n[i], o = a.indexOf("$");
    o !== -1 && e.indexOf(a.substring(0, o + 1)) !== -1 || e.indexOf(a) === -1 && (r[a] = t[a]);
  }
  return r;
}
function st(t, e) {
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
    n in a || (a[n] = /* @__PURE__ */ new Map()), a[n].set(r, Ff(e, n, r, i));
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
function K(t, e) {
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
function qc(t, e) {
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
var Pt = (
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
      this.root = e, this.initialize.apply(this, Kn([], Tr(r))), this.foundation = n === void 0 ? this.getDefaultFoundation() : n, this.foundation.init(), this.initialSyncWithDOM();
    }
    return t.attachTo = function(e) {
      return new t(e, new Pt({}));
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
  return t === void 0 && (t = window), yp(t) ? { passive: !0 } : !1;
}
function yp(t) {
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
const Wc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
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
function _p(t, e) {
  if (t.closest)
    return t.closest(e);
  for (var n = t; n; ) {
    if (el(n, e))
      return n;
    n = n.parentElement;
  }
  return null;
}
function el(t, e) {
  var n = t.matches || t.webkitMatchesSelector || t.msMatchesSelector;
  return n.call(t, e);
}
function Ep(t) {
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
  closest: _p,
  estimateScrollWidth: Ep,
  matches: el
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
var Ap = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  BG_FOCUSED: "mdc-ripple-upgraded--background-focused",
  FG_ACTIVATION: "mdc-ripple-upgraded--foreground-activation",
  FG_DEACTIVATION: "mdc-ripple-upgraded--foreground-deactivation",
  ROOT: "mdc-ripple-upgraded",
  UNBOUNDED: "mdc-ripple-upgraded--unbounded"
}, Cp = {
  VAR_FG_SCALE: "--mdc-ripple-fg-scale",
  VAR_FG_SIZE: "--mdc-ripple-fg-size",
  VAR_FG_TRANSLATE_END: "--mdc-ripple-fg-translate-end",
  VAR_FG_TRANSLATE_START: "--mdc-ripple-fg-translate-start",
  VAR_LEFT: "--mdc-ripple-left",
  VAR_TOP: "--mdc-ripple-top"
}, Wl = {
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
], zl = [
  "touchend",
  "pointerup",
  "mouseup",
  "contextmenu"
], Xa = [], No = (
  /** @class */
  function(t) {
    et(e, t);
    function e(n) {
      var r = t.call(this, ce(ce({}, e.defaultAdapter), n)) || this;
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
        return Ap;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Cp;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return Wl;
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
          for (var a = wt(zl), o = a.next(); !o.done; o = a.next()) {
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
        for (var i = wt(zl), a = i.next(); !a.done; a = i.next()) {
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
        var f = this.getFgTranslationCoordinates(), v = f.startPoint, p = f.endPoint;
        d = v.x + "px, " + v.y + "px", h = p.x + "px, " + p.y + "px";
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
      }, Wl.FG_DEACTIVATION_MS));
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
        var i = ce({}, r);
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
  }(Pt)
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
    et(e, t);
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
          return qc(window);
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
          return el(n.root, ":active");
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
}, nn = /* @__PURE__ */ new Set();
nn.add(Me.BACKSPACE);
nn.add(Me.ENTER);
nn.add(Me.SPACEBAR);
nn.add(Me.PAGE_UP);
nn.add(Me.PAGE_DOWN);
nn.add(Me.END);
nn.add(Me.HOME);
nn.add(Me.ARROW_LEFT);
nn.add(Me.ARROW_UP);
nn.add(Me.ARROW_RIGHT);
nn.add(Me.ARROW_DOWN);
nn.add(Me.DELETE);
nn.add(Me.ESCAPE);
nn.add(Me.TAB);
var cn = {
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
}, rn = /* @__PURE__ */ new Map();
rn.set(cn.BACKSPACE, Me.BACKSPACE);
rn.set(cn.ENTER, Me.ENTER);
rn.set(cn.SPACEBAR, Me.SPACEBAR);
rn.set(cn.PAGE_UP, Me.PAGE_UP);
rn.set(cn.PAGE_DOWN, Me.PAGE_DOWN);
rn.set(cn.END, Me.END);
rn.set(cn.HOME, Me.HOME);
rn.set(cn.ARROW_LEFT, Me.ARROW_LEFT);
rn.set(cn.ARROW_UP, Me.ARROW_UP);
rn.set(cn.ARROW_RIGHT, Me.ARROW_RIGHT);
rn.set(cn.ARROW_DOWN, Me.ARROW_DOWN);
rn.set(cn.DELETE, Me.DELETE);
rn.set(cn.ESCAPE, Me.ESCAPE);
rn.set(cn.TAB, Me.TAB);
var lr = /* @__PURE__ */ new Set();
lr.add(Me.PAGE_UP);
lr.add(Me.PAGE_DOWN);
lr.add(Me.END);
lr.add(Me.HOME);
lr.add(Me.ARROW_LEFT);
lr.add(Me.ARROW_UP);
lr.add(Me.ARROW_RIGHT);
lr.add(Me.ARROW_DOWN);
function bt(t) {
  var e = t.key;
  if (nn.has(e))
    return e;
  var n = rn.get(t.keyCode);
  return n || Me.UNKNOWN;
}
function Sp(t) {
  return lr.has(bt(t));
}
const { applyPassive: Xl } = Wc, { matches: xp } = Po;
function qt(t, { ripple: e = !0, surface: n = !1, unbounded: r = !1, disabled: i = !1, color: a, active: o, rippleElement: u, eventTarget: l, activeTarget: c, addClass: d = (p) => t.classList.add(p), removeClass: h = (p) => t.classList.remove(p), addStyle: f = (p, g) => t.style.setProperty(p, g), initPromise: v = Promise.resolve() } = {}) {
  let p, g = new Va(), y = ae("SMUI:addLayoutListener"), E, S = o, C = l, b = c;
  function _() {
    n ? (d("mdc-ripple-surface"), a === "primary" ? (d("smui-ripple-surface--primary"), h("smui-ripple-surface--secondary")) : a === "secondary" ? (h("smui-ripple-surface--primary"), d("smui-ripple-surface--secondary")) : (h("smui-ripple-surface--primary"), h("smui-ripple-surface--secondary"))) : (h("mdc-ripple-surface"), h("smui-ripple-surface--primary"), h("smui-ripple-surface--secondary")), p && S !== o && (S = o, o ? p.activate() : o === !1 && p.deactivate()), e && !p ? (p = new No({
      addClass: d,
      browserSupportsCssVars: () => qc(window),
      computeBoundingRect: () => (u || t).getBoundingClientRect(),
      containsEventTarget: (T) => t.contains(T),
      deregisterDocumentInteractionHandler: (T, A) => g.off(document.documentElement, T, A),
      deregisterInteractionHandler: (T, A) => g.off(l || t, T, A),
      deregisterResizeHandler: (T) => window.removeEventListener("resize", T),
      getWindowPageOffset: () => {
        var T, A;
        return {
          x: (T = window.pageXOffset) !== null && T !== void 0 ? T : window.scrollX,
          y: (A = window.pageYOffset) !== null && A !== void 0 ? A : window.scrollY
        };
      },
      isSurfaceActive: () => o ?? xp(c || t, ":active"),
      isSurfaceDisabled: () => !!i,
      isUnbounded: () => !!r,
      registerDocumentInteractionHandler: (T, A) => {
        const L = Xl();
        g.on(document.documentElement, T, A, typeof L == "boolean" ? { capture: L } : L);
      },
      registerInteractionHandler: (T, A) => {
        const L = Xl();
        g.on(l || t, T, A, typeof L == "boolean" ? { capture: L } : L);
      },
      registerResizeHandler: (T) => g.on(window, "resize", T),
      removeClass: h,
      updateCssVariable: f
    }), v.then(() => {
      p && (p.init(), p.setUnbounded(r));
    })) : p && !e && v.then(() => {
      p && (p.destroy(), p = void 0, g.clear());
    }), p && (C !== l || b !== c) && (C = l, b = c, p.destroy(), requestAnimationFrame(() => {
      p && (p.init(), p.setUnbounded(r));
    })), !e && r && d("mdc-ripple-upgraded--unbounded");
  }
  _(), y && (E = y(x));
  function x() {
    p && p.layout();
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
      } = Object.assign({ ripple: !0, surface: !1, unbounded: !1, disabled: !1, color: void 0, active: void 0, rippleElement: void 0, eventTarget: void 0, activeTarget: void 0, addClass: (A) => t.classList.add(A), removeClass: (A) => t.classList.remove(A), addStyle: (A, L) => t.style.setProperty(A, L), initPromise: Promise.resolve() }, T)), _();
    },
    destroy() {
      p && (p.destroy(), p = void 0, g.clear(), h("mdc-ripple-surface"), h("smui-ripple-surface--primary"), h("smui-ripple-surface--secondary")), E && E();
    }
  };
}
function Tp(t, e) {
  Oe(e, !0);
  let n = m(e, "use", 19, () => []), r = m(e, "class", 3, ""), i = m(e, "component", 3, Hr), a = m(e, "tag", 3, "span"), o = /* @__PURE__ */ We(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "component",
    "tag",
    "children"
  ]), u;
  const l = ae("SMUI:label:context"), c = ae("SMUI:label:tabindex");
  function d() {
    return u.getElement();
  }
  var h = { getElement: d }, f = ie(), v = Q(f);
  {
    let p = /* @__PURE__ */ se(() => Ne({
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
    Nr(v, i, (g, y) => {
      xe(
        y(g, it(
          {
            get tag() {
              return a();
            },
            get use() {
              return n();
            },
            get class() {
              return s(p);
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
              var C = ie(), b = Q(C);
              Ee(b, () => e.children ?? ge), O(E, C);
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
  let n = m(e, "use", 19, () => []), r = m(e, "class", 3, ""), i = m(e, "on", 3, !1), a = m(e, "component", 3, Hr), o = m(e, "tag", 3, "i"), u = /* @__PURE__ */ We(e, [
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
  const c = /* @__PURE__ */ se(() => o() === "svg" || a() === Rp), d = ae("SMUI:icon:context");
  function h() {
    return l.getElement();
  }
  var f = { getElement: h }, v = ie(), p = Q(v);
  {
    let g = /* @__PURE__ */ se(() => Ne({
      "mdc-button__icon": d === "button",
      "mdc-fab__icon": d === "fab",
      "mdc-icon-button__icon": d === "icon-button",
      "mdc-icon-button__icon--on": d === "icon-button" && i(),
      "mdc-tab__icon": d === "tab",
      "mdc-banner__icon": d === "banner",
      "mdc-segmented-button__icon": d === "segmented-button",
      [r()]: !0
    }));
    Nr(p, a, (y, E) => {
      xe(
        E(y, it(
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
          () => s(c) ? { focusable: "false", tabindex: "-1" } : {},
          () => u,
          {
            children: (S, C) => {
              var b = ie(), _ = Q(b);
              Ee(_, () => e.children ?? ge), O(S, b);
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
var wp = /* @__PURE__ */ un("<svg><!></svg>");
function Hr(t, e) {
  Oe(e, !0);
  let n = m(e, "use", 19, () => []), r = m(e, "tag", 3, "div"), i = /* @__PURE__ */ We(e, ["$$slots", "$$events", "$$legacy", "use", "tag", "children"]);
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
  var l = { getElement: u }, c = ie(), d = Q(c);
  {
    var h = (v) => {
      var p = wp();
      Be(p, () => ({ ...i }));
      var g = Ie(p);
      Ee(g, () => e.children ?? ge), xe(p, (y) => o = y, () => o), Ue(p, (y, E) => K == null ? void 0 : K(y, E), n), O(v, p);
    }, f = (v) => {
      var p = ie(), g = Q(p);
      {
        var y = (S) => {
          var C = ie(), b = Q(C);
          Cl(b, r, !1, (_, x) => {
            xe(_, (T) => o = T, () => o), Ue(_, (T, A) => K == null ? void 0 : K(T, A), n), Be(_, () => ({ ...i }));
          }), O(S, C);
        }, E = (S) => {
          var C = ie(), b = Q(C);
          Cl(b, r, !1, (_, x) => {
            xe(_, (L) => o = L, () => o), Ue(_, (L, U) => K == null ? void 0 : K(L, U), n), Be(_, () => ({ ...i }));
            var T = ie(), A = Q(T);
            Ee(A, () => e.children ?? ge), O(x, T);
          }), O(S, C);
        };
        ue(
          g,
          (S) => {
            s(a) ? S(y) : S(E, !1);
          },
          !0
        );
      }
      O(v, p);
    };
    ue(d, (v) => {
      r() === "svg" ? v(h) : v(f, !1);
    });
  }
  return O(t, c), Re(l);
}
var Op = /* @__PURE__ */ un("<svg><!></svg>");
function Rp(t, e) {
  Oe(e, !0), console && console.warn && console.warn('The @smui/common Svg component is deprecated. You can use `tag="svg"` now.');
  let n = m(e, "use", 19, () => []), r = /* @__PURE__ */ We(e, ["$$slots", "$$events", "$$legacy", "use", "children"]), i;
  function a() {
    return i;
  }
  var o = { getElement: a }, u = Op();
  Be(u, () => ({ ...r }));
  var l = Ie(u);
  return Ee(l, () => e.children ?? ge), xe(u, (c) => i = c, () => i), Ue(u, (c, d) => K == null ? void 0 : K(c, d), n), O(t, u), Re(o);
}
function Ci(t, e) {
  Oe(e, !0);
  const [n, r] = wn(), i = dt(e.value);
  $(e.key, i), Te(() => {
    pn(i, e.value);
  }), Xn(() => {
    i.set(void 0);
  });
  var a = ie(), o = Q(a);
  Ee(o, () => e.children ?? ge), O(t, a), Re(), r();
}
var Mp = /* @__PURE__ */ ve('<div class="mdc-button__touch"></div>'), Dp = /* @__PURE__ */ ve('<div class="mdc-button__ripple"></div> <!><!>', 1);
function Pp(t, e) {
  Oe(e, !0);
  let n = m(e, "use", 19, () => []), r = m(e, "class", 3, ""), i = m(e, "style", 3, ""), a = m(e, "ripple", 3, !0), o = m(e, "color", 3, "primary"), u = m(e, "variant", 3, "text"), l = m(e, "touch", 3, !1), c = m(e, "action", 3, "close"), d = m(e, "defaultAction", 3, !1), h = m(e, "secondary", 3, !1), f = m(e, "component", 3, Hr), v = m(e, "tag", 19, () => e.href == null ? "button" : "a"), p = /* @__PURE__ */ We(e, [
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
  ]), g, y = be({}), E = be({}), S = ae("SMUI:button:context");
  const C = /* @__PURE__ */ se(() => S === "dialog:action" && c() != null ? { "data-mdc-dialog-action": c() } : { action: c() }), b = /* @__PURE__ */ se(() => S === "dialog:action" && d() ? { "data-mdc-dialog-button-default": "" } : {}), _ = /* @__PURE__ */ se(() => S === "banner" ? {} : { secondary: h() });
  let x = e.disabled;
  Te(() => {
    if (x !== e.disabled) {
      if (g) {
        const V = X();
        "blur" in V && V.blur();
      }
      x = p.disabled;
    }
  }), $("SMUI:label:context", "button"), $("SMUI:icon:context", "button");
  function T(V) {
    y[V] || (y[V] = !0);
  }
  function A(V) {
    (!(V in y) || y[V]) && (y[V] = !1);
  }
  function L(V, F) {
    E[V] != F && (F === "" || F == null ? delete E[V] : E[V] = F);
  }
  function U() {
    S === "banner" && qe(X(), h() ? "SMUIBannerButtonSecondaryActionClick" : "SMUIBannerButtonPrimaryActionClick");
  }
  function X() {
    return g.getElement();
  }
  var H = { getElement: X }, B = ie(), ye = Q(B);
  {
    let V = /* @__PURE__ */ se(() => [
      [
        qt,
        {
          ripple: a(),
          unbounded: !1,
          color: o(),
          disabled: !!e.disabled,
          addClass: T,
          removeClass: A,
          addStyle: L
        }
      ],
      ...n()
    ]), F = /* @__PURE__ */ se(() => Ne({
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
      ...y,
      [r()]: !0
    })), M = /* @__PURE__ */ se(() => Object.entries(E).map(([G, ee]) => `${G}: ${ee};`).concat([i()]).join(" "));
    Nr(ye, f, (G, ee) => {
      xe(
        ee(G, it(
          {
            get tag() {
              return v();
            },
            get use() {
              return s(V);
            },
            get class() {
              return s(F);
            },
            get style() {
              return s(M);
            }
          },
          () => s(C),
          () => s(b),
          () => s(_),
          {
            get href() {
              return e.href;
            }
          },
          () => p,
          {
            onclick: (D) => {
              var I;
              U(), (I = e.onclick) == null || I.call(e, D);
            },
            children: (D, I) => {
              var w = Dp(), te = _e(Q(w), 2);
              Ee(te, () => e.children ?? ge);
              var P = _e(te);
              {
                var j = (pe) => {
                  var k = Mp();
                  O(pe, k);
                };
                ue(P, (pe) => {
                  l() && pe(j);
                });
              }
              O(D, w);
            },
            $$slots: { default: !0 }
          }
        )),
        (D) => g = D,
        () => g
      );
    });
  }
  return O(t, B), Re(H);
}
function tl(t, e) {
  Oe(e, !0);
  let n = m(e, "callback", 3, () => {
  }), r = m(e, "disabled", 3, !1), i = m(e, "variant", 3, "default"), a = m(e, "isAbortAction", 3, !1), o = m(e, "backgroundColor", 3, void 0);
  {
    let u = /* @__PURE__ */ se(() => a() ? "background-color: #ff3e00;" : "background-color: " + o());
    Pp(t, {
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
        var d = ie(), h = Q(d);
        Ee(h, () => e.children ?? ge), O(l, d);
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
}, $n = {
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
var Np = (
  /** @class */
  function(t) {
    et(e, t);
    function e(n) {
      var r = t.call(this, ce(ce({}, e.defaultAdapter), n)) || this;
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
        return $n;
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
      var n = this.adapter.getAttr($n.DATA_ARIA_LABEL_ON), r = this.adapter.getAttr($n.DATA_ARIA_LABEL_OFF);
      if (n && r) {
        if (this.adapter.getAttr($n.ARIA_PRESSED) !== null)
          throw new Error("MDCIconButtonToggleFoundation: Button should not set `aria-pressed` if it has a toggled aria label.");
        this.hasToggledAriaLabel = !0;
      } else
        this.adapter.setAttr($n.ARIA_PRESSED, String(this.isOn()));
    }, e.prototype.handleClick = function() {
      this.toggle(), this.adapter.notifyChange({ isOn: this.isOn() });
    }, e.prototype.isOn = function() {
      return this.adapter.hasClass(Ya.ICON_BUTTON_ON);
    }, e.prototype.toggle = function(n) {
      if (n === void 0 && (n = !this.isOn()), n ? this.adapter.addClass(Ya.ICON_BUTTON_ON) : this.adapter.removeClass(Ya.ICON_BUTTON_ON), this.hasToggledAriaLabel) {
        var r = n ? this.adapter.getAttr($n.DATA_ARIA_LABEL_ON) : this.adapter.getAttr($n.DATA_ARIA_LABEL_OFF);
        this.adapter.setAttr($n.ARIA_LABEL, r || "");
      } else
        this.adapter.setAttr($n.ARIA_PRESSED, "" + n);
    }, e;
  }(Pt)
), Up = /* @__PURE__ */ ve('<div class="mdc-icon-button__touch"></div>'), Hp = /* @__PURE__ */ ve('<div class="mdc-icon-button__ripple"></div> <!><!>', 1);
function Fp(t, e) {
  Oe(e, !0);
  let n = () => {
  };
  function r(I) {
    return I === n;
  }
  let i = m(e, "use", 19, () => []), a = m(e, "class", 3, ""), o = m(e, "style", 3, ""), u = m(e, "ripple", 3, !0), l = m(e, "toggle", 3, !1), c = m(e, "pressed", 15, n), d = m(e, "touch", 3, !1), h = m(e, "displayFlex", 3, !0), f = m(e, "size", 3, "normal"), v = m(e, "component", 3, Hr), p = m(e, "tag", 19, () => e.href == null ? "button" : "a"), g = /* @__PURE__ */ We(e, [
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
  ]), y, E, S = /* @__PURE__ */ Ae(be({})), C = be({}), b = /* @__PURE__ */ Ae(be({})), _ = ae("SMUI:icon-button:context"), x = ae("SMUI:icon-button:aria-describedby");
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
      if (y) {
        const I = M();
        "blur" in I && I.blur();
      }
      A = !!e.disabled;
    }
  }), $("SMUI:icon:context", "icon-button");
  let L = null;
  Te(() => {
    y && M() && l() !== L && (l() && !E ? (E = new Np({
      addClass: X,
      hasClass: U,
      notifyChange: (I) => {
        F(I), qe(M(), "SMUIIconButtonToggleChange", I);
      },
      removeClass: H,
      getAttr: ye,
      setAttr: V
    }), E.init()) : !l() && E && (E.destroy(), E = void 0, ne(S, {}, !0), ne(b, {}, !0)), L = l());
  }), Te(() => {
    E && !r(c()) && E.isOn() !== c() && E.toggle(c());
  }), Xn(() => {
    E && E.destroy();
  });
  function U(I) {
    return I in s(S) ? s(S)[I] : M().classList.contains(I);
  }
  function X(I) {
    s(S)[I] || (s(S)[I] = !0);
  }
  function H(I) {
    (!(I in s(S)) || s(S)[I]) && (s(S)[I] = !1);
  }
  function B(I, w) {
    C[I] != w && (w === "" || w == null ? delete C[I] : C[I] = w);
  }
  function ye(I) {
    return I in s(b) ? s(b)[I] ?? null : M().getAttribute(I);
  }
  function V(I, w) {
    s(b)[I] !== w && (s(b)[I] = w);
  }
  function F(I) {
    c(I.isOn);
  }
  function M() {
    return y.getElement();
  }
  var G = { getElement: M }, ee = ie(), D = Q(ee);
  {
    let I = /* @__PURE__ */ se(() => [
      [
        qt,
        {
          ripple: u(),
          unbounded: !0,
          color: e.color,
          disabled: !!e.disabled,
          addClass: X,
          removeClass: H,
          addStyle: B
        }
      ],
      ...i()
    ]), w = /* @__PURE__ */ se(() => Ne({
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
    })), te = /* @__PURE__ */ se(() => Object.entries(C).map(([pe, k]) => `${pe}: ${k};`).concat([o()]).join(" ")), P = /* @__PURE__ */ se(() => r(c()) ? null : c() ? "true" : "false"), j = /* @__PURE__ */ se(() => c() ? e.ariaLabelOn : e.ariaLabelOff);
    Nr(D, v, (pe, k) => {
      xe(
        k(pe, it(
          {
            get tag() {
              return p();
            },
            get use() {
              return s(I);
            },
            get class() {
              return s(w);
            },
            get style() {
              return s(te);
            },
            get "aria-pressed"() {
              return s(P);
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
          () => s(T),
          () => s(b),
          () => g,
          {
            onclick: (re) => {
              var Y;
              E && E.handleClick(), _ === "top-app-bar:navigation" && qe(M(), "SMUITopAppBarIconButtonNav"), (Y = e.onclick) == null || Y.call(e, re);
            },
            children: (re, Y) => {
              var de = Hp(), oe = _e(Q(de), 2);
              Ee(oe, () => e.children ?? ge);
              var Qe = _e(oe);
              {
                var Ze = (Fe) => {
                  var we = Up();
                  O(Fe, we);
                };
                ue(Qe, (Fe) => {
                  d() && Fe(Ze);
                });
              }
              O(re, de);
            },
            $$slots: { default: !0 }
          }
        )),
        (re) => y = re,
        () => y
      );
    });
  }
  return O(t, ee), Re(G);
}
function Bp(t, e) {
  let n = m(e, "callback", 3, () => {
  }), r = m(e, "icon", 3, ""), i = m(e, "disabled", 3, !1);
  Fp(t, {
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
          var c = Kt();
          He(() => pt(c, r())), O(u, c);
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
var kp = {
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
var Vp = (
  /** @class */
  function(t) {
    et(e, t);
    function e(n) {
      var r = t.call(this, ce(ce({}, e.defaultAdapter), n)) || this;
      return r.shakeAnimationEndHandler = function() {
        r.handleShakeAnimationEnd();
      }, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return kp;
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
  }(Pt)
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
var Gp = (
  /** @class */
  function(t) {
    et(e, t);
    function e(n) {
      var r = t.call(this, ce(ce({}, e.defaultAdapter), n)) || this;
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
  }(Pt)
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
var jp = {
  NOTCH_ELEMENT_SELECTOR: ".mdc-notched-outline__notch"
}, Yl = {
  // This should stay in sync with $mdc-notched-outline-padding * 2.
  NOTCH_ELEMENT_PADDING: 8
}, qp = {
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
var Wp = (
  /** @class */
  function(t) {
    et(e, t);
    function e(n) {
      return t.call(this, ce(ce({}, e.defaultAdapter), n)) || this;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return jp;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return qp;
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
      n > 0 && (n += Yl.NOTCH_ELEMENT_PADDING), this.adapter.setNotchWidthProperty(n), this.adapter.addClass(r);
    }, e.prototype.closeNotch = function() {
      var n = e.cssClasses.OUTLINE_NOTCHED;
      this.adapter.removeClass(n), this.adapter.removeNotchWidthProperty();
    }, e;
  }(Pt)
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
}, Zl = {
  LABEL_SCALE: 0.75
}, zp = [
  "pattern",
  "min",
  "max",
  "required",
  "step",
  "minlength",
  "maxlength"
], Xp = [
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
var Ql = ["mousedown", "touchstart"], Jl = ["click", "keydown"], Yp = (
  /** @class */
  function(t) {
    et(e, t);
    function e(n, r) {
      r === void 0 && (r = {});
      var i = t.call(this, ce(ce({}, e.defaultAdapter), n)) || this;
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
        return Zl;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "shouldAlwaysFloat", {
      get: function() {
        var n = this.getNativeInput().type;
        return Xp.indexOf(n) >= 0;
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
        for (var o = wt(Ql), u = o.next(); !u.done; u = o.next()) {
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
        for (var c = wt(Jl), d = c.next(); !d.done; d = c.next()) {
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
        for (var o = wt(Ql), u = o.next(); !u.done; u = o.next()) {
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
        for (var c = wt(Jl), d = c.next(); !d.done; d = c.next()) {
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
        return zp.indexOf(i) > -1 ? (r.styleValidity(!0), r.adapter.setLabelRequired(r.getNativeInput().required), !0) : !1;
      }), n.indexOf("maxlength") > -1 && this.setcharacterCounter(this.getValue().length);
    }, e.prototype.notchOutline = function(n) {
      if (!(!this.adapter.hasOutline() || !this.adapter.hasLabel()))
        if (n) {
          var r = this.adapter.getLabelWidth() * Zl.LABEL_SCALE;
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
  }(Pt)
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
var $l = {
  ICON_EVENT: "MDCTextField:icon",
  ICON_ROLE: "button"
}, Zp = {
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
var eu = ["click", "keydown"], Qp = (
  /** @class */
  function(t) {
    et(e, t);
    function e(n) {
      var r = t.call(this, ce(ce({}, e.defaultAdapter), n)) || this;
      return r.savedTabIndex = null, r.interactionHandler = function(i) {
        r.handleInteraction(i);
      }, r;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return $l;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Zp;
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
        for (var i = wt(eu), a = i.next(); !a.done; a = i.next()) {
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
        for (var i = wt(eu), a = i.next(); !a.done; a = i.next()) {
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
      this.savedTabIndex && (n ? (this.adapter.setAttr("tabindex", "-1"), this.adapter.removeAttr("role")) : (this.adapter.setAttr("tabindex", this.savedTabIndex), this.adapter.setAttr("role", $l.ICON_ROLE)));
    }, e.prototype.setAriaLabel = function(n) {
      this.adapter.setAttr("aria-label", n);
    }, e.prototype.setContent = function(n) {
      this.adapter.setContent(n);
    }, e.prototype.handleInteraction = function(n) {
      var r = n.key === "Enter" || n.keyCode === 13;
      (n.type === "click" || r) && (n.preventDefault(), this.adapter.notifyIconAction());
    }, e;
  }(Pt)
), Jp = /* @__PURE__ */ ve("<span><!></span>"), $p = /* @__PURE__ */ ve("<label><!></label>");
function ho(t, e) {
  Oe(e, !0);
  let n = m(e, "use", 19, () => []), r = m(e, "class", 3, ""), i = m(e, "style", 3, ""), a = m(e, "floatAbove", 15, !1), o = m(e, "required", 15, !1), u = m(e, "wrapped", 3, !1), l = /* @__PURE__ */ We(e, [
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
  ]), c, d = /* @__PURE__ */ Ae(void 0), h = new Va(), f = be({}), v = be({}), p = ae("SMUI:generic:input:props") ?? {}, g = a();
  Te(() => {
    s(d) && g !== a() && (g = a(), s(d).float(a()));
  });
  let y = o();
  Te(() => {
    s(d) && y !== o() && (y = o(), s(d).setRequired(o()));
  });
  const E = ae("SMUI:floating-label:mount"), S = ae("SMUI:floating-label:unmount");
  at(() => {
    ne(
      d,
      new Vp({
        addClass: C,
        removeClass: b,
        getWidth: () => {
          var I, w;
          const G = X(), ee = G.cloneNode(!0);
          (I = G.parentNode) == null || I.appendChild(ee), ee.classList.add("smui-floating-label--remove-transition"), ee.classList.add("smui-floating-label--force-size"), ee.classList.remove("mdc-floating-label--float-above");
          const D = ee.scrollWidth;
          return (w = G.parentNode) == null || w.removeChild(ee), D;
        },
        registerInteractionHandler: (G, ee) => h.on(X(), G, ee),
        deregisterInteractionHandler: (G, ee) => h.off(X(), G, ee)
      }),
      !0
    );
    const M = {
      get element() {
        return X();
      },
      addStyle: _,
      removeStyle: x
    };
    return E && E(M), s(d).init(), () => {
      var G;
      S && S(M), (G = s(d)) == null || G.destroy(), h.clear();
    };
  });
  function C(M) {
    f[M] || (f[M] = !0);
  }
  function b(M) {
    (!(M in f) || f[M]) && (f[M] = !1);
  }
  function _(M, G) {
    v[M] != G && (G === "" || G == null ? delete v[M] : v[M] = G);
  }
  function x(M) {
    M in v && delete v[M];
  }
  function T(M) {
    var G;
    (G = s(d)) == null || G.shake(M);
  }
  function A(M) {
    a(M);
  }
  function L(M) {
    o(M);
  }
  function U() {
    if (s(d) == null)
      throw new Error("Instance is undefined.");
    return s(d).getWidth();
  }
  function X() {
    return c;
  }
  var H = { shake: T, float: A, setRequired: L, getWidth: U, getElement: X }, B = ie(), ye = Q(B);
  {
    var V = (M) => {
      var G = Jp();
      Be(G, (D, I) => ({ class: D, style: I, ...l }), [
        () => Ne({
          "mdc-floating-label": !0,
          "mdc-floating-label--float-above": a(),
          "mdc-floating-label--required": o(),
          ...f,
          [r()]: !0
        }),
        () => Object.entries(v).map(([D, I]) => `${D}: ${I};`).concat([i()]).join(" ")
      ]);
      var ee = Ie(G);
      Ee(ee, () => e.children ?? ge), xe(G, (D) => c = D, () => c), Ue(G, (D, I) => K == null ? void 0 : K(D, I), n), O(M, G);
    }, F = (M) => {
      var G = $p();
      Be(
        G,
        (D, I) => ({
          class: D,
          style: I,
          for: e.for || (p ? p.id : void 0),
          ...l
        }),
        [
          () => Ne({
            "mdc-floating-label": !0,
            "mdc-floating-label--float-above": a(),
            "mdc-floating-label--required": o(),
            ...f,
            [r()]: !0
          }),
          () => Object.entries(v).map(([D, I]) => `${D}: ${I};`).concat([i()]).join(" ")
        ]
      );
      var ee = Ie(G);
      Ee(ee, () => e.children ?? ge), xe(G, (D) => c = D, () => c), Ue(G, (D, I) => K == null ? void 0 : K(D, I), n), O(M, G);
    };
    ue(ye, (M) => {
      u() ? M(V) : M(F, !1);
    });
  }
  return O(t, B), Re(H);
}
var em = /* @__PURE__ */ ve("<div></div>");
function Kc(t, e) {
  Oe(e, !0);
  let n = m(e, "use", 19, () => []), r = m(e, "class", 3, ""), i = m(e, "style", 3, ""), a = m(e, "active", 3, !1), o = /* @__PURE__ */ We(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "style",
    "active"
  ]), u, l = /* @__PURE__ */ Ae(void 0), c = new Va(), d = be({}), h = be({});
  at(() => (ne(
    l,
    new Gp({
      addClass: v,
      removeClass: p,
      hasClass: f,
      setStyle: g,
      registerEventHandler: (x, T) => c.on(C(), x, T),
      deregisterEventHandler: (x, T) => c.off(C(), x, T)
    }),
    !0
  ), s(l).init(), () => {
    var x;
    (x = s(l)) == null || x.destroy(), c.clear();
  }));
  function f(x) {
    return x in d ? d[x] : C().classList.contains(x);
  }
  function v(x) {
    d[x] || (d[x] = !0);
  }
  function p(x) {
    (!(x in d) || d[x]) && (d[x] = !1);
  }
  function g(x, T) {
    h[x] != T && (T === "" || T == null ? delete h[x] : h[x] = T);
  }
  function y() {
    var x;
    (x = s(l)) == null || x.activate();
  }
  function E() {
    var x;
    (x = s(l)) == null || x.deactivate();
  }
  function S(x) {
    var T;
    (T = s(l)) == null || T.setRippleCenter(x);
  }
  function C() {
    return u;
  }
  var b = { activate: y, deactivate: E, setRippleCenter: S, getElement: C }, _ = em();
  return Be(_, (x, T) => ({ class: x, style: T, ...o }), [
    () => Ne({
      "mdc-line-ripple": !0,
      "mdc-line-ripple--active": a(),
      ...d,
      [r()]: !0
    }),
    () => Object.entries(h).map(([x, T]) => `${x}: ${T};`).concat([i()]).join(" ")
  ]), xe(_, (x) => u = x, () => u), Ue(_, (x, T) => K == null ? void 0 : K(x, T), n), O(t, _), Re(b);
}
var tm = /* @__PURE__ */ ve('<div class="mdc-notched-outline__notch"><!></div>'), nm = /* @__PURE__ */ ve('<div><div class="mdc-notched-outline__leading"></div> <!> <div class="mdc-notched-outline__trailing"></div></div>');
function zc(t, e) {
  Oe(e, !0);
  let n = m(e, "use", 19, () => []), r = m(e, "class", 3, ""), i = m(e, "notched", 3, !1), a = m(e, "noLabel", 3, !1), o = /* @__PURE__ */ We(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "notched",
    "noLabel",
    "children"
  ]), u, l = /* @__PURE__ */ Ae(void 0), c = /* @__PURE__ */ Ae(void 0), d = be({}), h = be({}), f;
  Te(() => {
    s(c) !== f && (s(c) ? (s(c).addStyle("transition-duration", "0s"), v("mdc-notched-outline--upgraded"), requestAnimationFrame(() => {
      s(c) && s(c).removeStyle("transition-duration");
    })) : p("mdc-notched-outline--upgraded"), f = s(c));
  }), $("SMUI:floating-label:mount", (A) => {
    ne(c, A, !0);
  }), $("SMUI:floating-label:unmount", () => {
    ne(c, void 0);
  }), at(() => (ne(
    l,
    new Wp({
      addClass: v,
      removeClass: p,
      setNotchWidthProperty: (A) => g("width", A + "px"),
      removeNotchWidthProperty: () => y("width")
    }),
    !0
  ), s(l).init(), () => {
    var A;
    (A = s(l)) == null || A.destroy();
  }));
  function v(A) {
    d[A] || (d[A] = !0);
  }
  function p(A) {
    (!(A in d) || d[A]) && (d[A] = !1);
  }
  function g(A, L) {
    h[A] != L && (L === "" || L == null ? delete h[A] : h[A] = L);
  }
  function y(A) {
    A in h && delete h[A];
  }
  function E(A) {
    var L;
    (L = s(l)) == null || L.notch(A);
  }
  function S() {
    var A;
    (A = s(l)) == null || A.closeNotch();
  }
  function C() {
    return u;
  }
  var b = { notch: E, closeNotch: S, getElement: C }, _ = nm();
  Be(_, (A) => ({ class: A, ...o }), [
    () => Ne({
      "mdc-notched-outline": !0,
      "mdc-notched-outline--notched": i(),
      "mdc-notched-outline--no-label": a(),
      ...d,
      [r()]: !0
    })
  ]);
  var x = _e(Ie(_), 2);
  {
    var T = (A) => {
      var L = tm(), U = Ie(L);
      Ee(U, () => e.children ?? ge), He((X) => tn(L, X), [
        () => Object.entries(h).map(([X, H]) => `${X}: ${H};`).join(" ")
      ]), O(A, L);
    };
    ue(x, (A) => {
      a() || A(T);
    });
  }
  return xe(_, (A) => u = A, () => u), Ue(_, (A, L) => K == null ? void 0 : K(A, L), n), O(t, _), Re(b);
}
function nl(t, e) {
  Oe(e, !0);
  let n = m(e, "use", 19, () => []), r = m(e, "class", 3, ""), i = m(e, "component", 3, Hr), a = m(e, "tag", 3, "div"), o = m(e, "_smuiClass", 3, ""), u = m(e, "_smuiClassMap", 23, () => ({})), l = m(e, "_smuiContexts", 19, () => ({})), c = m(e, "_smuiProps", 19, () => ({})), d = /* @__PURE__ */ We(e, [
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
    const C = ae(S);
    C && "subscribe" in C && f.push(C.subscribe((b) => {
      u()[E] = b;
    }));
  });
  for (let E in l())
    l().hasOwnProperty(E) && $(E, l()[E]);
  Xn(() => {
    for (const E of f)
      E();
  });
  function v() {
    return h.getElement();
  }
  var p = { getElement: v }, g = ie(), y = Q(g);
  {
    let E = /* @__PURE__ */ se(() => Ne({
      [o()]: !0,
      ...u(),
      [r()]: !0
    }));
    Nr(y, i, (S, C) => {
      xe(
        C(S, it(
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
            children: (b, _) => {
              var x = ie(), T = Q(x);
              Ee(T, () => e.children ?? ge), O(b, x);
            },
            $$slots: { default: !0 }
          }
        )),
        (b) => h = b,
        () => h
      );
    });
  }
  return O(t, g), Re(p);
}
function rm(t, e) {
  Oe(e, !0);
  let n = /* @__PURE__ */ We(e, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return xe(
    nl(t, it({ _smuiClass: "mdc-text-field-helper-line", tag: "div" }, () => n, {
      children: (o, u) => {
        var l = ie(), c = Q(l);
        Ee(c, () => e.children ?? ge), O(o, l);
      },
      $$slots: { default: !0 }
    })),
    (o) => r = o,
    () => r
  ), Re(a);
}
function im(t, e) {
  Oe(e, !0);
  let n = /* @__PURE__ */ We(e, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return xe(
    nl(t, it(
      {
        _smuiClass: "mdc-text-field__affix mdc-text-field__affix--prefix",
        tag: "span"
      },
      () => n,
      {
        children: (o, u) => {
          var l = ie(), c = Q(l);
          Ee(c, () => e.children ?? ge), O(o, l);
        },
        $$slots: { default: !0 }
      }
    )),
    (o) => r = o,
    () => r
  ), Re(a);
}
function am(t, e) {
  Oe(e, !0);
  let n = /* @__PURE__ */ We(e, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return xe(
    nl(t, it(
      {
        _smuiClass: "mdc-text-field__affix mdc-text-field__affix--suffix",
        tag: "span"
      },
      () => n,
      {
        children: (o, u) => {
          var l = ie(), c = Q(l);
          Ee(c, () => e.children ?? ge), O(o, l);
        },
        $$slots: { default: !0 }
      }
    )),
    (o) => r = o,
    () => r
  ), Re(a);
}
var om = /* @__PURE__ */ ve("<input/>");
function sm(t, e) {
  Oe(e, !0);
  let n = m(e, "use", 19, () => []), r = m(e, "class", 3, ""), i = m(e, "type", 3, "text"), a = m(e, "placeholder", 3, " "), o = m(e, "value", 15), u = m(e, "files", 15, null), l = m(e, "dirty", 15, !1), c = m(e, "invalid", 15, !1), d = m(e, "updateInvalid", 3, !0), h = m(e, "initialInvalid", 3, !1), f = m(e, "emptyValueNull", 19, () => o() === null), v = m(e, "emptyValueUndefined", 19, () => o() === void 0), p = /* @__PURE__ */ We(e, [
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
  ]), g, y = be({}), E = be({});
  Te(() => {
    i() === "file" ? delete E.value : E.value = o() == null ? "" : o();
  }), at(() => {
    d() && h() && c(U().matches(":invalid"));
  });
  function S(V) {
    return V === "" ? Number.NaN : +V;
  }
  function C(V) {
    if (i() === "file") {
      u(V.currentTarget.files);
      return;
    }
    if (V.currentTarget.value === "" && f()) {
      o(null);
      return;
    }
    if (V.currentTarget.value === "" && v()) {
      o(void 0);
      return;
    }
    switch (i()) {
      case "number":
      case "range":
        o(S(V.currentTarget.value));
        break;
      default:
        o(V.currentTarget.value);
        break;
    }
  }
  function b(V) {
    (i() === "file" || i() === "range") && C(V), l(!0), d() && c(U().matches(":invalid"));
  }
  function _(V) {
    return V in y ? y[V] ?? null : U().getAttribute(V);
  }
  function x(V, F) {
    y[V] !== F && (y[V] = F);
  }
  function T(V) {
    (!(V in y) || y[V] != null) && (y[V] = void 0);
  }
  function A() {
    U().focus();
  }
  function L() {
    U().blur();
  }
  function U() {
    return g;
  }
  var X = { getAttr: _, addAttr: x, removeAttr: T, focus: A, blur: L, getElement: U }, H = om(), B = (V) => {
    var F;
    i() !== "file" && C(V), (F = e.oninput) == null || F.call(e, V);
  }, ye = (V) => {
    var F;
    b(V), (F = e.onchange) == null || F.call(e, V);
  };
  return Be(
    H,
    (V) => ({
      class: V,
      type: i(),
      placeholder: a(),
      ...E,
      ...y,
      ...p,
      oninput: B,
      onchange: ye
    }),
    [
      () => Ne({ "mdc-text-field__input": !0, [r()]: !0 })
    ],
    void 0,
    void 0,
    !0
  ), xe(H, (V) => g = V, () => g), Ue(H, (V, F) => K == null ? void 0 : K(V, F), n), O(t, H), Re(X);
}
var lm = /* @__PURE__ */ ve("<textarea></textarea>");
function um(t, e) {
  Oe(e, !0);
  let n = m(e, "use", 19, () => []), r = m(e, "class", 3, ""), i = m(e, "style", 3, ""), a = m(e, "value", 15, ""), o = m(e, "dirty", 15, !1), u = m(e, "invalid", 15, !1), l = m(e, "updateInvalid", 3, !0), c = m(e, "initialInvalid", 3, !1), d = m(e, "resizable", 3, !0), h = /* @__PURE__ */ We(e, [
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
  ]), f, v = be({});
  at(() => {
    l() && c() && u(b().matches(":invalid"));
  });
  function p() {
    o(!0), l() && u(b().matches(":invalid"));
  }
  function g(A) {
    return A in v ? v[A] ?? null : b().getAttribute(A);
  }
  function y(A, L) {
    v[A] !== L && (v[A] = L);
  }
  function E(A) {
    (!(A in v) || v[A] != null) && (v[A] = void 0);
  }
  function S() {
    b().focus();
  }
  function C() {
    b().blur();
  }
  function b() {
    return f;
  }
  var _ = { getAttr: g, addAttr: y, removeAttr: E, focus: S, blur: C, getElement: b }, x = lm(), T = (A) => {
    var L;
    p(), (L = e.onchange) == null || L.call(e, A);
  };
  return Be(
    x,
    (A) => ({
      class: A,
      style: `${d() ? "" : "resize: none; "}${i()}`,
      ...v,
      ...h,
      onchange: T
    }),
    [
      () => Ne({ "mdc-text-field__input": !0, [r()]: !0 })
    ]
  ), xe(x, (A) => f = A, () => f), Ue(x, (A, L) => K == null ? void 0 : K(A, L), n), Fa(() => xa(x, a)), O(t, x), Re(_);
}
var cm = /* @__PURE__ */ ve('<span class="mdc-text-field__ripple"></span>'), dm = /* @__PURE__ */ ve("<!> <!>", 1), fm = /* @__PURE__ */ ve("<span><!> <!></span>"), hm = /* @__PURE__ */ ve("<!> <!> <!>", 1), vm = /* @__PURE__ */ ve("<label><!> <!> <!> <!> <!> <!> <!></label>"), pm = /* @__PURE__ */ ve("<div><!> <!> <!> <!> <!></div>"), mm = /* @__PURE__ */ ve("<!> <!>", 1);
function tu(t, e) {
  Oe(e, !0);
  const { applyPassive: n } = Wc;
  let r = () => {
  };
  function i(W) {
    return W === r;
  }
  let a = m(e, "use", 19, () => []), o = m(e, "class", 3, ""), u = m(e, "style", 3, ""), l = m(e, "ripple", 3, !0), c = m(e, "disabled", 3, !1), d = m(e, "required", 3, !1), h = m(e, "textarea", 3, !1), f = m(e, "variant", 19, () => h() ? "outlined" : "standard"), v = m(e, "noLabel", 3, !1), p = m(e, "type", 3, "text"), g = m(e, "value", 15), y = m(e, "files", 15, r), E = m(e, "invalid", 15, r), S = m(e, "updateInvalid", 19, () => i(E())), C = m(e, "initialInvalid", 3, !1), b = m(e, "dirty", 15, !1), _ = m(e, "validateOnValueChange", 19, S), x = m(e, "useNativeValidation", 19, S), T = m(e, "withLeadingIcon", 3, r), A = m(e, "withTrailingIcon", 3, r), L = m(e, "input", 7), U = m(e, "floatingLabel", 7), X = m(e, "lineRipple", 7), H = m(e, "notchedOutline", 7), B = /* @__PURE__ */ We(e, [
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
  const ye = g() !== void 0 || g() === void 0 && e.input$emptyValueUndefined || !i(y());
  i(y()) && y(null), i(E()) && E(!1);
  let V, F = /* @__PURE__ */ Ae(void 0), M = new Va(), G = be({}), ee = be({}), D = /* @__PURE__ */ Ae(void 0), I = /* @__PURE__ */ Ae(!1), w = /* @__PURE__ */ Ae(be(C())), te = ae("SMUI:addLayoutListener"), P, j, pe = new Promise((W) => j = W), k, re, Y, de;
  const oe = /* @__PURE__ */ se(() => L() && L().getElement());
  Te(() => {
    (b() || s(w) || !S()) && s(F) && s(F).isValid() !== !E() && (S() ? E(!s(F).isValid()) : s(F).setValid(!E()));
  }), Te(() => {
    s(F) && s(F).getValidateOnValueChange() !== _() && s(F).setValidateOnValueChange(i(_()) ? !1 : _());
  }), Te(() => {
    s(F) && s(F).setUseNativeValidation(i(x()) ? !0 : x());
  }), Te(() => {
    s(F) && s(F).setDisabled(c());
  });
  let Qe = g();
  Te(() => {
    if (s(F) && ye && Qe !== g()) {
      Qe = g();
      const W = `${g() == null ? "" : g()}`;
      s(F).getValue() !== W && s(F).setValue(W);
    }
  }), te && (P = te(N)), $("SMUI:textfield:leading-icon:mount", (W) => {
    k = W;
  }), $("SMUI:textfield:leading-icon:unmount", () => {
    k = void 0;
  }), $("SMUI:textfield:trailing-icon:mount", (W) => {
    re = W;
  }), $("SMUI:textfield:trailing-icon:unmount", () => {
    re = void 0;
  }), $("SMUI:textfield:helper-text:id", (W) => {
    ne(D, W, !0);
  }), $("SMUI:textfield:helper-text:mount", (W) => {
    Y = W;
  }), $("SMUI:textfield:helper-text:unmount", () => {
    ne(D, void 0), Y = void 0;
  }), $("SMUI:textfield:character-counter:mount", (W) => {
    de = W;
  }), $("SMUI:textfield:character-counter:unmount", () => {
    de = void 0;
  }), at(() => {
    var W;
    if (ne(
      F,
      new Yp(
        {
          // getRootAdapterMethods_
          addClass: Fe,
          removeClass: we,
          hasClass: Ze,
          registerTextFieldInteractionHandler: (z, De) => M.on(q(), z, De),
          deregisterTextFieldInteractionHandler: (z, De) => M.off(q(), z, De),
          registerValidationAttributeChangeHandler: (z) => {
            const De = (Ot) => Ot.map((_t) => _t.attributeName).filter((_t) => _t), ut = new MutationObserver((Ot) => {
              x() && z(De(Ot));
            }), gt = { attributes: !0 };
            return L() && ut.observe(L().getElement(), gt), ut;
          },
          deregisterValidationAttributeChangeHandler: (z) => {
            z.disconnect();
          },
          // getInputAdapterMethods_
          getNativeInput: () => {
            var z;
            return ((z = L()) == null ? void 0 : z.getElement()) ?? null;
          },
          setInputAttr: (z, De) => {
            var ut;
            (ut = L()) == null || ut.addAttr(z, De);
          },
          removeInputAttr: (z) => {
            var De;
            (De = L()) == null || De.removeAttr(z);
          },
          isFocused: () => {
            var z;
            return document.activeElement === ((z = L()) == null ? void 0 : z.getElement());
          },
          registerInputInteractionHandler: (z, De) => {
            var gt;
            const ut = (gt = L()) == null ? void 0 : gt.getElement();
            if (ut) {
              const Ot = n();
              M.on(ut, z, De, typeof Ot == "boolean" ? { capture: Ot } : Ot);
            }
          },
          deregisterInputInteractionHandler: (z, De) => {
            var gt;
            const ut = (gt = L()) == null ? void 0 : gt.getElement();
            ut && M.off(ut, z, De);
          },
          // getLabelAdapterMethods_
          floatLabel: (z) => U() && U().float(z),
          getLabelWidth: () => U() ? U().getWidth() : 0,
          hasLabel: () => !!U(),
          shakeLabel: (z) => U() && U().shake(z),
          setLabelRequired: (z) => U() && U().setRequired(z),
          // getLineRippleAdapterMethods_
          activateLineRipple: () => X() && X().activate(),
          deactivateLineRipple: () => X() && X().deactivate(),
          setLineRippleTransformOrigin: (z) => X() && X().setRippleCenter(z),
          // getOutlineAdapterMethods_
          closeOutline: () => H() && H().closeNotch(),
          hasOutline: () => !!H(),
          notchOutline: (z) => H() && H().notch(z)
        },
        {
          get helperText() {
            return Y;
          },
          get characterCounter() {
            return de;
          },
          get leadingIcon() {
            return k;
          },
          get trailingIcon() {
            return re;
          }
        }
      ),
      !0
    ), ye) {
      if (L() == null)
        throw new Error("SMUI Textfield must be initialized with either a non-undefined initial value or an Input component.");
      (W = s(F)) == null || W.init();
    } else
      wo().then(() => {
        var z;
        if (L() == null)
          throw new Error("SMUI Textfield must be initialized with either a non-undefined initial value or an Input component.");
        (z = s(F)) == null || z.init();
      });
    return j(), () => {
      var z;
      (z = s(F)) == null || z.destroy(), M.clear();
    };
  }), Xn(() => {
    P && P();
  });
  function Ze(W) {
    return W in G ? G[W] ?? null : q().classList.contains(W);
  }
  function Fe(W) {
    G[W] || (G[W] = !0);
  }
  function we(W) {
    (!(W in G) || G[W]) && (G[W] = !1);
  }
  function le(W, z) {
    ee[W] != z && (z === "" || z == null ? delete ee[W] : ee[W] = z);
  }
  function Le() {
    var W;
    (W = L()) == null || W.focus();
  }
  function Je() {
    var W;
    (W = L()) == null || W.blur();
  }
  function N() {
    if (s(F)) {
      const W = s(F).shouldFloat;
      s(F).notchOutline(W);
    }
  }
  function q() {
    return V;
  }
  var J = { focus: Le, blur: Je, layout: N, getElement: q }, Ce = mm(), Nt = Q(Ce);
  {
    var yt = (W) => {
      var z = vm();
      Be(z, (Ge, tt, Ke) => ({ class: Ge, style: tt, for: void 0, ...Ke }), [
        () => Ne({
          "mdc-text-field": !0,
          "mdc-text-field--disabled": c(),
          "mdc-text-field--textarea": h(),
          "mdc-text-field--filled": f() === "filled",
          "mdc-text-field--outlined": f() === "outlined",
          "smui-text-field--standard": f() === "standard" && !h(),
          "mdc-text-field--no-label": v() || e.label == null,
          "mdc-text-field--label-floating": s(I) || g() != null && g() !== "",
          "mdc-text-field--with-leading-icon": i(T()) ? e.leadingIcon : T(),
          "mdc-text-field--with-trailing-icon": i(A()) ? e.trailingIcon : A(),
          "mdc-text-field--with-internal-counter": h() && e.internalCounter,
          "mdc-text-field--invalid": E(),
          ...G,
          [o()]: !0
        }),
        () => Object.entries(ee).map(([Ge, tt]) => `${Ge}: ${tt};`).concat([u()]).join(" "),
        () => ea(B, ["input$", "label$", "ripple$", "outline$", "helperLine$"])
      ]);
      var De = Ie(z);
      {
        var ut = (Ge) => {
          var tt = dm(), Ke = Q(tt);
          {
            var xt = (Et) => {
              var ht = cm();
              O(Et, ht);
            };
            ue(Ke, (Et) => {
              f() === "filled" && Et(xt);
            });
          }
          var dn = _e(Ke, 2);
          {
            var nt = (Et) => {
              {
                let ht = /* @__PURE__ */ se(() => s(I) || g() != null && g() !== "" && (typeof g() != "number" || !isNaN(g()))), $e = /* @__PURE__ */ se(() => st(B, "label$"));
                xe(
                  ho(Et, it(
                    {
                      get floatAbove() {
                        return s(ht);
                      },
                      get required() {
                        return d();
                      },
                      wrapped: !0
                    },
                    () => s($e),
                    {
                      children: (Tt, Rn) => {
                        var an = ie(), ot = Q(an);
                        {
                          var kt = (Xt) => {
                          }, In = (Xt) => {
                            var Vr = ie(), yn = Q(Vr);
                            {
                              var cr = (_n) => {
                                var Zn = Kt();
                                He(() => pt(Zn, e.label)), O(_n, Zn);
                              }, aa = (_n) => {
                                var Zn = ie(), Fn = Q(Zn);
                                Ee(Fn, () => e.label), O(_n, Zn);
                              };
                              ue(
                                yn,
                                (_n) => {
                                  typeof e.label == "string" ? _n(cr) : _n(aa, !1);
                                },
                                !0
                              );
                            }
                            O(Xt, Vr);
                          };
                          ue(ot, (Xt) => {
                            e.label == null ? Xt(kt) : Xt(In, !1);
                          });
                        }
                        O(Tt, an);
                      },
                      $$slots: { default: !0 }
                    }
                  )),
                  (Tt) => U(Tt),
                  () => U()
                );
              }
            };
            ue(dn, (Et) => {
              !v() && e.label != null && Et(nt);
            });
          }
          O(Ge, tt);
        };
        ue(De, (Ge) => {
          !h() && f() !== "outlined" && Ge(ut);
        });
      }
      var gt = _e(De, 2);
      {
        var Ot = (Ge) => {
          {
            let tt = /* @__PURE__ */ se(() => v() || e.label == null), Ke = /* @__PURE__ */ se(() => st(B, "outline$"));
            xe(
              zc(Ge, it(
                {
                  get noLabel() {
                    return s(tt);
                  }
                },
                () => s(Ke),
                {
                  children: (xt, dn) => {
                    var nt = ie(), Et = Q(nt);
                    {
                      var ht = ($e) => {
                        {
                          let Tt = /* @__PURE__ */ se(() => s(I) || g() != null && g() !== "" && (typeof g() != "number" || !isNaN(g()))), Rn = /* @__PURE__ */ se(() => st(B, "label$"));
                          xe(
                            ho($e, it(
                              {
                                get floatAbove() {
                                  return s(Tt);
                                },
                                get required() {
                                  return d();
                                },
                                wrapped: !0
                              },
                              () => s(Rn),
                              {
                                children: (an, ot) => {
                                  var kt = ie(), In = Q(kt);
                                  {
                                    var Xt = (yn) => {
                                    }, Vr = (yn) => {
                                      var cr = ie(), aa = Q(cr);
                                      {
                                        var _n = (Fn) => {
                                          var Gr = Kt();
                                          He(() => pt(Gr, e.label)), O(Fn, Gr);
                                        }, Zn = (Fn) => {
                                          var Gr = ie(), ko = Q(Gr);
                                          Ee(ko, () => e.label), O(Fn, Gr);
                                        };
                                        ue(
                                          aa,
                                          (Fn) => {
                                            typeof e.label == "string" ? Fn(_n) : Fn(Zn, !1);
                                          },
                                          !0
                                        );
                                      }
                                      O(yn, cr);
                                    };
                                    ue(In, (yn) => {
                                      e.label == null ? yn(Xt) : yn(Vr, !1);
                                    });
                                  }
                                  O(an, kt);
                                },
                                $$slots: { default: !0 }
                              }
                            )),
                            (an) => U(an),
                            () => U()
                          );
                        }
                      };
                      ue(Et, ($e) => {
                        !v() && e.label != null && $e(ht);
                      });
                    }
                    O(xt, nt);
                  },
                  $$slots: { default: !0 }
                }
              )),
              (xt) => H(xt),
              () => H()
            );
          }
        };
        ue(gt, (Ge) => {
          (h() || f() === "outlined") && Ge(Ot);
        });
      }
      var _t = _e(gt, 2);
      Ci(_t, {
        key: "SMUI:textfield:icon:leading",
        value: !0,
        children: (Ge, tt) => {
          var Ke = ie(), xt = Q(Ke);
          Ee(xt, () => e.leadingIcon ?? ge), O(Ge, Ke);
        },
        $$slots: { default: !0 }
      });
      var Yn = _e(_t, 2);
      Ee(Yn, () => e.children ?? ge);
      var ft = _e(Yn, 2);
      {
        var Rt = (Ge) => {
          var tt = fm(), Ke = Ie(tt);
          {
            let dn = /* @__PURE__ */ se(() => st(B, "input$"));
            xe(
              um(Ke, it(
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
                    return s(w);
                  },
                  get "aria-controls"() {
                    return s(D);
                  },
                  get "aria-describedby"() {
                    return s(D);
                  }
                },
                () => s(dn),
                {
                  onblur: (nt) => {
                    var Et;
                    ne(I, !1), ne(w, !0), qe(q(), "blur", nt), (Et = e.input$onblur) == null || Et.call(e, nt);
                  },
                  onfocus: (nt) => {
                    var Et;
                    ne(I, !0), qe(q(), "focus", nt), (Et = e.input$onfocus) == null || Et.call(e, nt);
                  },
                  get value() {
                    return g();
                  },
                  set value(nt) {
                    g(nt);
                  },
                  get dirty() {
                    return b();
                  },
                  set dirty(nt) {
                    b(nt);
                  },
                  get invalid() {
                    return E();
                  },
                  set invalid(nt) {
                    E(nt);
                  }
                }
              )),
              (nt) => L(nt),
              () => L()
            );
          }
          var xt = _e(Ke, 2);
          Ee(xt, () => e.internalCounter ?? ge), He((dn) => vc(tt, 1, dn), [
            () => hc(Ne({
              "mdc-text-field__resizer": !("input$resizable" in B) || e.input$resizable
            }))
          ]), O(Ge, tt);
        }, Bt = (Ge) => {
          var tt = hm(), Ke = Q(tt);
          {
            var xt = (ht) => {
              var $e = ie(), Tt = Q($e);
              {
                var Rn = (ot) => {
                  im(ot, {
                    children: (kt, In) => {
                      var Xt = Kt();
                      He(() => pt(Xt, e.prefix)), O(kt, Xt);
                    },
                    $$slots: { default: !0 }
                  });
                }, an = (ot) => {
                  var kt = ie(), In = Q(kt);
                  Ee(In, () => e.prefix ?? ge), O(ot, kt);
                };
                ue(Tt, (ot) => {
                  typeof e.prefix == "string" ? ot(Rn) : ot(an, !1);
                });
              }
              O(ht, $e);
            };
            ue(Ke, (ht) => {
              e.prefix != null && ht(xt);
            });
          }
          var dn = _e(Ke, 2);
          {
            let ht = /* @__PURE__ */ se(() => st(B, "input$"));
            xe(
              sm(dn, it(
                {
                  get type() {
                    return p();
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
                    return s(w);
                  },
                  get "aria-controls"() {
                    return s(D);
                  },
                  get "aria-describedby"() {
                    return s(D);
                  }
                },
                () => v() && e.label != null && typeof e.label == "string" ? { placeholder: e.label } : {},
                () => s(ht),
                {
                  onblur: ($e) => {
                    var Tt;
                    ne(I, !1), ne(w, !0), qe(q(), "blur", $e), (Tt = e.input$onblur) == null || Tt.call(e, $e);
                  },
                  onfocus: ($e) => {
                    var Tt;
                    ne(I, !0), qe(q(), "focus", $e), (Tt = e.input$onfocus) == null || Tt.call(e, $e);
                  },
                  get value() {
                    return g();
                  },
                  set value($e) {
                    g($e);
                  },
                  get files() {
                    return y();
                  },
                  set files($e) {
                    y($e);
                  },
                  get dirty() {
                    return b();
                  },
                  set dirty($e) {
                    b($e);
                  },
                  get invalid() {
                    return E();
                  },
                  set invalid($e) {
                    E($e);
                  }
                }
              )),
              ($e) => L($e),
              () => L()
            );
          }
          var nt = _e(dn, 2);
          {
            var Et = (ht) => {
              var $e = ie(), Tt = Q($e);
              {
                var Rn = (ot) => {
                  am(ot, {
                    children: (kt, In) => {
                      var Xt = Kt();
                      He(() => pt(Xt, e.suffix)), O(kt, Xt);
                    },
                    $$slots: { default: !0 }
                  });
                }, an = (ot) => {
                  var kt = ie(), In = Q(kt);
                  Ee(In, () => e.suffix ?? ge), O(ot, kt);
                };
                ue(Tt, (ot) => {
                  typeof e.suffix == "string" ? ot(Rn) : ot(an, !1);
                });
              }
              O(ht, $e);
            };
            ue(nt, (ht) => {
              e.suffix != null && ht(Et);
            });
          }
          O(Ge, tt);
        };
        ue(ft, (Ge) => {
          h() && typeof g() == "string" ? Ge(Rt) : Ge(Bt, !1);
        });
      }
      var zt = _e(ft, 2);
      Ci(zt, {
        key: "SMUI:textfield:icon:leading",
        value: !1,
        children: (Ge, tt) => {
          var Ke = ie(), xt = Q(Ke);
          Ee(xt, () => e.trailingIcon ?? ge), O(Ge, Ke);
        },
        $$slots: { default: !0 }
      });
      var kr = _e(zt, 2);
      {
        var Hn = (Ge) => {
          {
            let tt = /* @__PURE__ */ se(() => st(B, "ripple$"));
            xe(Kc(Ge, it(() => s(tt))), (Ke) => X(Ke), () => X());
          }
        };
        ue(kr, (Ge) => {
          !h() && f() !== "outlined" && l() && Ge(Hn);
        });
      }
      xe(z, (Ge) => V = Ge, () => V), Ue(z, (Ge, tt) => qt == null ? void 0 : qt(Ge, tt), () => ({
        ripple: !h() && f() === "filled",
        unbounded: !1,
        addClass: Fe,
        removeClass: we,
        addStyle: le,
        eventTarget: s(oe),
        activeTarget: s(oe),
        initPromise: pe
      })), Ue(z, (Ge, tt) => K == null ? void 0 : K(Ge, tt), a), O(W, z);
    }, bn = (W) => {
      var z = pm();
      Be(z, (ft, Rt, Bt) => ({ class: ft, style: Rt, ...Bt }), [
        () => Ne({
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
        () => Object.entries(ee).map(([ft, Rt]) => `${ft}: ${Rt};`).concat([u()]).join(" "),
        () => ea(B, ["input$", "label$", "ripple$", "outline$", "helperLine$"])
      ]);
      var De = Ie(z);
      {
        var ut = (ft) => {
          var Rt = ie(), Bt = Q(Rt);
          Ee(Bt, () => e.label ?? ge), O(ft, Rt);
        };
        ue(De, (ft) => {
          typeof e.label != "string" && ft(ut);
        });
      }
      var gt = _e(De, 2);
      Ci(gt, {
        key: "SMUI:textfield:icon:leading",
        value: !0,
        children: (ft, Rt) => {
          var Bt = ie(), zt = Q(Bt);
          Ee(zt, () => e.leadingIcon ?? ge), O(ft, Bt);
        },
        $$slots: { default: !0 }
      });
      var Ot = _e(gt, 2);
      Ee(Ot, () => e.children ?? ge);
      var _t = _e(Ot, 2);
      Ci(_t, {
        key: "SMUI:textfield:icon:leading",
        value: !1,
        children: (ft, Rt) => {
          var Bt = ie(), zt = Q(Bt);
          Ee(zt, () => e.trailingIcon ?? ge), O(ft, Bt);
        },
        $$slots: { default: !0 }
      });
      var Yn = _e(_t, 2);
      Ee(Yn, () => e.line ?? ge), xe(z, (ft) => V = ft, () => V), Ue(z, (ft, Rt) => qt == null ? void 0 : qt(ft, Rt), () => ({
        ripple: l(),
        unbounded: !1,
        addClass: Fe,
        removeClass: we,
        addStyle: le
      })), Ue(z, (ft, Rt) => K == null ? void 0 : K(ft, Rt), a), O(W, z);
    };
    ue(Nt, (W) => {
      ye ? W(yt) : W(bn, !1);
    });
  }
  var he = _e(Nt, 2);
  {
    var me = (W) => {
      {
        let z = /* @__PURE__ */ se(() => st(B, "helperLine$"));
        rm(W, it(() => s(z), {
          children: (De, ut) => {
            var gt = ie(), Ot = Q(gt);
            Ee(Ot, () => e.helper ?? ge), O(De, gt);
          },
          $$slots: { default: !0 }
        }));
      }
    };
    ue(he, (W) => {
      e.helper && W(me);
    });
  }
  return O(t, Ce), Re(J);
}
var gm = /* @__PURE__ */ ve("<i><!></i>");
function bm(t, e) {
  Oe(e, !0);
  const n = () => Dt(p, "$leadingStore", r), [r, i] = wn();
  let a = m(e, "use", 19, () => []), o = m(e, "class", 3, ""), u = m(e, "tabindex", 19, () => e.role === "button" ? 0 : -1), l = m(e, "disabled", 3, !1), c = /* @__PURE__ */ We(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "role",
    "tabindex",
    "disabled",
    "children"
  ]), d, h = /* @__PURE__ */ Ae(void 0), f = new Va(), v = be({});
  const p = ae("SMUI:textfield:icon:leading"), g = n();
  let y = /* @__PURE__ */ Ae(void 0);
  const E = /* @__PURE__ */ se(() => ({ role: e.role, tabindex: u() })), S = ae("SMUI:textfield:leading-icon:mount"), C = ae("SMUI:textfield:leading-icon:unmount"), b = ae("SMUI:textfield:trailing-icon:mount"), _ = ae("SMUI:textfield:trailing-icon:unmount");
  at(() => (ne(
    h,
    new Qp({
      getAttr: x,
      setAttr: T,
      removeAttr: A,
      setContent: (F) => {
        ne(y, F, !0);
      },
      registerInteractionHandler: (F, M) => f.on(L(), F, M),
      deregisterInteractionHandler: (F, M) => f.off(L(), F, M),
      notifyIconAction: () => qe(L(), "SMUITextFieldIcon")
    }),
    !0
  ), g ? S && S(s(h)) : b && b(s(h)), s(h).init(), () => {
    var F;
    s(h) && (g ? C && C(s(h)) : _ && _(s(h))), (F = s(h)) == null || F.destroy(), f.clear();
  }));
  function x(F) {
    return F in v ? v[F] ?? null : L().getAttribute(F);
  }
  function T(F, M) {
    v[F] !== M && (v[F] = M);
  }
  function A(F) {
    (!(F in v) || v[F] != null) && (v[F] = void 0);
  }
  function L() {
    return d;
  }
  var U = { getElement: L }, X = gm();
  Be(
    X,
    (F) => ({
      class: F,
      "aria-hidden": u() === -1 ? "true" : "false",
      "aria-disabled": e.role === "button" ? l() ? "true" : "false" : void 0,
      ...s(E),
      ...v,
      ...c
    }),
    [
      () => Ne({
        "mdc-text-field__icon": !0,
        "mdc-text-field__icon--leading": g,
        "mdc-text-field__icon--trailing": !g,
        [o()]: !0
      })
    ]
  );
  var H = Ie(X);
  {
    var B = (F) => {
      var M = ie(), G = Q(M);
      Ee(G, () => e.children ?? ge), O(F, M);
    }, ye = (F) => {
      var M = Kt();
      He(() => pt(M, s(y))), O(F, M);
    };
    ue(H, (F) => {
      s(y) == null ? F(B) : F(ye, !1);
    });
  }
  xe(X, (F) => d = F, () => d), Ue(X, (F, M) => K == null ? void 0 : K(F, M), a), O(t, X);
  var V = Re(U);
  return i(), V;
}
function Im(t, e) {
  Oe(e, !0);
  let n = m(e, "placeholder", 3, ""), r = m(e, "label", 3, ""), i = m(e, "icon", 3, ""), a = m(e, "value", 15, ""), o = m(e, "variant", 3, "standard"), u = m(e, "styles", 3, "");
  var l = ie(), c = Q(l);
  {
    var d = (f) => {
      {
        const v = (g) => {
          bm(g, {
            class: "material-icons",
            children: (y, E) => {
              var S = Kt();
              He(() => pt(S, i())), O(y, S);
            },
            $$slots: { default: !0 }
          });
        };
        let p = /* @__PURE__ */ se(() => `width: 100%; ${u()}`);
        tu(f, {
          get label() {
            return r();
          },
          get placeholder() {
            return n();
          },
          get style() {
            return s(p);
          },
          get variant() {
            return o();
          },
          get value() {
            return a();
          },
          set value(g) {
            a(g);
          },
          leadingIcon: v,
          $$slots: { leadingIcon: !0 }
        });
      }
    }, h = (f) => {
      tu(f, {
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
        get value() {
          return a();
        },
        set value(v) {
          a(v);
        }
      });
    };
    ue(c, (f) => {
      i() ? f(d) : f(h, !1);
    });
  }
  O(t, l), Re();
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
var ym = {
  ANCHOR: "mdc-menu-surface--anchor",
  ANIMATING_CLOSED: "mdc-menu-surface--animating-closed",
  ANIMATING_OPEN: "mdc-menu-surface--animating-open",
  FIXED: "mdc-menu-surface--fixed",
  IS_OPEN_BELOW: "mdc-menu-surface--is-open-below",
  OPEN: "mdc-menu-surface--open",
  ROOT: "mdc-menu-surface"
}, _m = {
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
}, St;
(function(t) {
  t[t.BOTTOM = 1] = "BOTTOM", t[t.CENTER = 2] = "CENTER", t[t.RIGHT = 4] = "RIGHT", t[t.FLIP_RTL = 8] = "FLIP_RTL";
})(St || (St = {}));
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
var fr, er, je = {
  LIST_ITEM_ACTIVATED_CLASS: "mdc-list-item--activated",
  LIST_ITEM_CLASS: "mdc-list-item",
  LIST_ITEM_DISABLED_CLASS: "mdc-list-item--disabled",
  LIST_ITEM_SELECTED_CLASS: "mdc-list-item--selected",
  LIST_ITEM_TEXT_CLASS: "mdc-list-item__text",
  LIST_ITEM_PRIMARY_TEXT_CLASS: "mdc-list-item__primary-text",
  ROOT: "mdc-list"
};
fr = {}, fr["" + je.LIST_ITEM_ACTIVATED_CLASS] = "mdc-list-item--activated", fr["" + je.LIST_ITEM_CLASS] = "mdc-list-item", fr["" + je.LIST_ITEM_DISABLED_CLASS] = "mdc-list-item--disabled", fr["" + je.LIST_ITEM_SELECTED_CLASS] = "mdc-list-item--selected", fr["" + je.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-list-item__primary-text", fr["" + je.ROOT] = "mdc-list";
var _i = (er = {}, er["" + je.LIST_ITEM_ACTIVATED_CLASS] = "mdc-deprecated-list-item--activated", er["" + je.LIST_ITEM_CLASS] = "mdc-deprecated-list-item", er["" + je.LIST_ITEM_DISABLED_CLASS] = "mdc-deprecated-list-item--disabled", er["" + je.LIST_ITEM_SELECTED_CLASS] = "mdc-deprecated-list-item--selected", er["" + je.LIST_ITEM_TEXT_CLASS] = "mdc-deprecated-list-item__text", er["" + je.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-deprecated-list-item__primary-text", er["" + je.ROOT] = "mdc-deprecated-list", er), hr = {
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
    .` + je.LIST_ITEM_CLASS + ` button:not(:disabled),
    .` + je.LIST_ITEM_CLASS + ` a,
    .` + _i[je.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + _i[je.LIST_ITEM_CLASS] + ` a
  `,
  DEPRECATED_SELECTOR: ".mdc-deprecated-list",
  FOCUSABLE_CHILD_ELEMENTS: `
    .` + je.LIST_ITEM_CLASS + ` button:not(:disabled),
    .` + je.LIST_ITEM_CLASS + ` a,
    .` + je.LIST_ITEM_CLASS + ` input[type="radio"]:not(:disabled),
    .` + je.LIST_ITEM_CLASS + ` input[type="checkbox"]:not(:disabled),
    .` + _i[je.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + _i[je.LIST_ITEM_CLASS] + ` a,
    .` + _i[je.LIST_ITEM_CLASS] + ` input[type="radio"]:not(:disabled),
    .` + _i[je.LIST_ITEM_CLASS] + ` input[type="checkbox"]:not(:disabled)
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
var Em = ["input", "button", "textarea", "select"], En = function(t) {
  var e = t.target;
  if (e) {
    var n = ("" + e.tagName).toLowerCase();
    Em.indexOf(n) === -1 && t.preventDefault();
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
function Am() {
  var t = {
    bufferClearTimeout: 0,
    currentFirstChar: "",
    sortedIndexCursor: 0,
    typeaheadBuffer: ""
  };
  return t;
}
function Cm(t, e) {
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
function Ts(t, e) {
  var n = t.nextChar, r = t.focusItemAtIndex, i = t.sortedIndexByFirstChar, a = t.focusedItemIndex, o = t.skipFocus, u = t.isItemAtIndexDisabled;
  clearTimeout(e.bufferClearTimeout), e.bufferClearTimeout = setTimeout(function() {
    Yc(e);
  }, At.TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS), e.typeaheadBuffer = e.typeaheadBuffer + n;
  var l;
  return e.typeaheadBuffer.length === 1 ? l = Sm(i, a, u, e) : l = xm(i, u, e), l !== -1 && !o && r(l), l;
}
function Sm(t, e, n, r) {
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
function xm(t, e, n) {
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
function Xc(t) {
  return t.typeaheadBuffer.length > 0;
}
function Yc(t) {
  t.typeaheadBuffer = "";
}
function nu(t, e) {
  var n = t.event, r = t.isTargetListItem, i = t.focusedItemIndex, a = t.focusItemAtIndex, o = t.sortedIndexByFirstChar, u = t.isItemAtIndexDisabled, l = bt(n) === "ArrowLeft", c = bt(n) === "ArrowUp", d = bt(n) === "ArrowRight", h = bt(n) === "ArrowDown", f = bt(n) === "Home", v = bt(n) === "End", p = bt(n) === "Enter", g = bt(n) === "Spacebar";
  if (n.altKey || n.ctrlKey || n.metaKey || l || c || d || h || f || v || p)
    return -1;
  var y = !g && n.key.length === 1;
  if (y) {
    En(n);
    var E = {
      focusItemAtIndex: a,
      focusedItemIndex: i,
      nextChar: n.key.toLowerCase(),
      sortedIndexByFirstChar: o,
      skipFocus: !1,
      isItemAtIndexDisabled: u
    };
    return Ts(E, e);
  }
  if (!g)
    return -1;
  r && En(n);
  var S = r && Xc(e);
  if (S) {
    var E = {
      focusItemAtIndex: a,
      focusedItemIndex: i,
      nextChar: " ",
      sortedIndexByFirstChar: o,
      skipFocus: !1,
      isItemAtIndexDisabled: u
    };
    return Ts(E, e);
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
function Tm(t) {
  return t instanceof Array;
}
var Lm = ["Alt", "Control", "Meta", "Shift"];
function ru(t) {
  var e = new Set(t ? Lm.filter(function(n) {
    return t.getModifierState(n);
  }) : []);
  return function(n) {
    return n.every(function(r) {
      return e.has(r);
    }) && n.length === e.size;
  };
}
var wm = (
  /** @class */
  function(t) {
    et(e, t);
    function e(n) {
      var r = t.call(this, ce(ce({}, e.defaultAdapter), n)) || this;
      return r.wrapFocus = !1, r.isVertical = !0, r.isSingleSelectionList = !1, r.areDisabledItemsFocusable = !0, r.selectedIndex = At.UNSET_INDEX, r.focusedItemIndex = At.UNSET_INDEX, r.useActivatedClass = !1, r.useSelectedAttr = !1, r.ariaCurrentAttrValue = null, r.isCheckboxList = !1, r.isRadioList = !1, r.lastSelectedIndex = null, r.hasTypeahead = !1, r.typeaheadState = Am(), r.sortedIndexByFirstChar = /* @__PURE__ */ new Map(), r;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return hr;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return je;
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
        var r = this.adapter.listItemAtIndexHasClass(n, je.LIST_ITEM_ACTIVATED_CLASS);
        r && this.setUseActivatedClass(!0), this.isSingleSelectionList = !0, this.selectedIndex = n;
      }
    }, e.prototype.getSelectedIndexFromDOM = function() {
      for (var n = At.UNSET_INDEX, r = this.adapter.getListItemCount(), i = 0; i < r; i++) {
        var a = this.adapter.listItemAtIndexHasClass(i, je.LIST_ITEM_SELECTED_CLASS), o = this.adapter.listItemAtIndexHasClass(i, je.LIST_ITEM_ACTIVATED_CLASS);
        if (a || o) {
          n = i;
          break;
        }
      }
      return n;
    }, e.prototype.setHasTypeahead = function(n) {
      this.hasTypeahead = n, n && (this.sortedIndexByFirstChar = this.typeaheadInitSortedIndex());
    }, e.prototype.isTypeaheadInProgress = function() {
      return this.hasTypeahead && Xc(this.typeaheadState);
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
      return this.adapter.listItemAtIndexHasClass(n, je.LIST_ITEM_DISABLED_CLASS);
    }, e.prototype.handleKeydown = function(n, r, i) {
      var a = this, o, u = bt(n) === "ArrowLeft", l = bt(n) === "ArrowUp", c = bt(n) === "ArrowRight", d = bt(n) === "ArrowDown", h = bt(n) === "Home", f = bt(n) === "End", v = bt(n) === "Enter", p = bt(n) === "Spacebar", g = this.isVertical && d || !this.isVertical && c, y = this.isVertical && l || !this.isVertical && u, E = n.key === "A" || n.key === "a", S = ru(n);
      if (this.adapter.isRootFocused()) {
        if ((y || f) && S([]))
          n.preventDefault(), this.focusLastElement();
        else if ((g || h) && S([]))
          n.preventDefault(), this.focusFirstElement();
        else if (y && S(["Shift"]) && this.isCheckboxList) {
          n.preventDefault();
          var C = this.focusLastElement();
          C !== -1 && this.setSelectedIndexOnAction(C, !1);
        } else if (g && S(["Shift"]) && this.isCheckboxList) {
          n.preventDefault();
          var C = this.focusFirstElement();
          C !== -1 && this.setSelectedIndexOnAction(C, !1);
        }
        if (this.hasTypeahead) {
          var b = {
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
          nu(b, this.typeaheadState);
        }
        return;
      }
      var _ = this.adapter.getFocusedElementIndex();
      if (!(_ === -1 && (_ = i, _ < 0))) {
        if (g && S([]))
          En(n), this.focusNextElement(_);
        else if (y && S([]))
          En(n), this.focusPrevElement(_);
        else if (g && S(["Shift"]) && this.isCheckboxList) {
          En(n);
          var C = this.focusNextElement(_);
          C !== -1 && this.setSelectedIndexOnAction(C, !1);
        } else if (y && S(["Shift"]) && this.isCheckboxList) {
          En(n);
          var C = this.focusPrevElement(_);
          C !== -1 && this.setSelectedIndexOnAction(C, !1);
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
          n.preventDefault(), this.checkboxListToggleAll(this.selectedIndex === At.UNSET_INDEX ? [] : this.selectedIndex, !0);
        else if ((v || p) && S([])) {
          if (r) {
            var x = n.target;
            if (x && x.tagName === "A" && v || (En(n), this.isIndexDisabled(_)))
              return;
            this.isTypeaheadInProgress() || (this.isSelectableList() && this.setSelectedIndexOnAction(_, !1), this.adapter.notifyAction(_));
          }
        } else if ((v || p) && S(["Shift"]) && this.isCheckboxList) {
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
          nu(b, this.typeaheadState);
        }
      }
    }, e.prototype.handleClick = function(n, r, i) {
      var a, o = ru(i);
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
      this.isIndexValid(n, !1) && (r ? (this.adapter.removeClassForElementIndex(n, je.LIST_ITEM_DISABLED_CLASS), this.adapter.setAttributeForElementIndex(n, hr.ARIA_DISABLED, "false")) : (this.adapter.addClassForElementIndex(n, je.LIST_ITEM_DISABLED_CLASS), this.adapter.setAttributeForElementIndex(n, hr.ARIA_DISABLED, "true")));
    }, e.prototype.setSingleSelectionAtIndex = function(n, r) {
      if (r === void 0 && (r = {}), !(this.selectedIndex === n && !r.forceUpdate)) {
        var i = je.LIST_ITEM_SELECTED_CLASS;
        this.useActivatedClass && (i = je.LIST_ITEM_ACTIVATED_CLASS), this.selectedIndex !== At.UNSET_INDEX && this.adapter.removeClassForElementIndex(this.selectedIndex, i), this.setAriaForSingleSelectionAtIndex(n), this.setTabindexAtIndex(n), n !== At.UNSET_INDEX && this.adapter.addClassForElementIndex(n, i), this.selectedIndex = n, r.isUserInteraction && !r.forceUpdate && this.adapter.notifySelectionChange([n]);
      }
    }, e.prototype.setAriaForSingleSelectionAtIndex = function(n) {
      this.selectedIndex === At.UNSET_INDEX && (this.ariaCurrentAttrValue = this.adapter.getAttributeForElementIndex(n, hr.ARIA_CURRENT));
      var r = this.ariaCurrentAttrValue !== null, i = r ? hr.ARIA_CURRENT : hr.ARIA_SELECTED;
      if (this.selectedIndex !== At.UNSET_INDEX && this.adapter.setAttributeForElementIndex(this.selectedIndex, i, "false"), n !== At.UNSET_INDEX) {
        var a = r ? this.ariaCurrentAttrValue : "true";
        this.adapter.setAttributeForElementIndex(n, i, a);
      }
    }, e.prototype.getSelectionAttribute = function() {
      return this.useSelectedAttr ? hr.ARIA_SELECTED : hr.ARIA_CHECKED;
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
      for (var a = new Set(this.selectedIndex === At.UNSET_INDEX ? [] : this.selectedIndex), o = !(a != null && a.has(i)), u = Tr([n, r].sort(), 2), l = u[0], c = u[1], d = this.getSelectionAttribute(), h = [], f = l; f <= c; f++)
        if (!this.isIndexDisabled(f)) {
          var v = a.has(f);
          o !== v && (h.push(f), this.adapter.setCheckedCheckboxOrRadioAtIndex(f, o), this.adapter.setAttributeForElementIndex(f, d, "" + o), o ? a.add(f) : a.delete(f));
        }
      h.length && (this.selectedIndex = Kn([], Tr(a)), this.adapter.notifySelectionChange(h));
    }, e.prototype.setTabindexAtIndex = function(n) {
      this.focusedItemIndex === At.UNSET_INDEX && n !== 0 ? this.adapter.setAttributeForElementIndex(0, "tabindex", "-1") : this.focusedItemIndex >= 0 && this.focusedItemIndex !== n && this.adapter.setAttributeForElementIndex(this.focusedItemIndex, "tabindex", "-1"), !(this.selectedIndex instanceof Array) && this.selectedIndex !== n && this.adapter.setAttributeForElementIndex(this.selectedIndex, "tabindex", "-1"), n !== At.UNSET_INDEX && this.adapter.setAttributeForElementIndex(n, "tabindex", "0");
    }, e.prototype.isSelectableList = function() {
      return this.isSingleSelectionList || this.isCheckboxList || this.isRadioList;
    }, e.prototype.setTabindexToFirstSelectedOrFocusedItem = function() {
      var n = this.getFirstSelectedOrFocusedItemIndex();
      this.setTabindexAtIndex(n);
    }, e.prototype.getFirstSelectedOrFocusedItemIndex = function() {
      return this.isSelectableList() ? typeof this.selectedIndex == "number" && this.selectedIndex !== At.UNSET_INDEX ? this.selectedIndex : Tm(this.selectedIndex) && this.selectedIndex.length > 0 ? this.selectedIndex.reduce(function(n, r) {
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
      return Ts(o, this.typeaheadState);
    }, e.prototype.typeaheadInitSortedIndex = function() {
      return Cm(this.adapter.getListItemCount(), this.adapter.getPrimaryTextAtIndex);
    }, e.prototype.clearTypeaheadBuffer = function() {
      Yc(this.typeaheadState);
    }, e;
  }(Pt)
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
var Zc = (
  /** @class */
  function(t) {
    et(e, t);
    function e(n) {
      var r = t.call(this, ce(ce({}, e.defaultAdapter), n)) || this;
      return r.isSurfaceOpen = !1, r.isQuickOpen = !1, r.isHoistedElement = !1, r.isFixedPosition = !1, r.isHorizontallyCenteredOnViewport = !1, r.maxHeight = 0, r.openBottomBias = 0, r.openAnimationEndTimerId = 0, r.closeAnimationEndTimerId = 0, r.animationRequestId = 0, r.anchorCorner = ai.TOP_START, r.originCorner = ai.TOP_START, r.anchorMargin = { top: 0, right: 0, bottom: 0, left: 0 }, r.position = { x: 0, y: 0 }, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return ym;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return _m;
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
      this.originCorner = this.originCorner ^ St.RIGHT;
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
      var r = this.getoriginCorner(), i = this.getMenuSurfaceMaxHeight(r), a = this.hasBit(r, St.BOTTOM) ? "bottom" : "top", o = this.hasBit(r, St.RIGHT) ? "right" : "left", u = this.getHorizontalOriginOffset(r), l = this.getVerticalOriginOffset(r), c = this.measurements, d = c.anchorSize, h = c.surfaceSize, f = (n = {}, n[o] = u, n[a] = l, n);
      d.width / h.width > va.ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO && (o = "center"), (this.isHoistedElement || this.isFixedPosition) && this.adjustPositionForHoistedElement(f), this.adapter.setTransformOrigin(o + " " + a), this.adapter.setPosition(f), this.adapter.setMaxHeight(i ? i + "px" : ""), this.hasBit(r, St.BOTTOM) || this.adapter.addClass(e.cssClasses.IS_OPEN_BELOW);
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
      var n = this.originCorner, r = this.measurements, i = r.viewportDistance, a = r.anchorSize, o = r.surfaceSize, u = e.numbers.MARGIN_TO_EDGE, l = this.hasBit(this.anchorCorner, St.BOTTOM), c, d;
      l ? (c = i.top - u + this.anchorMargin.bottom, d = i.bottom - u - this.anchorMargin.bottom) : (c = i.top - u + this.anchorMargin.top, d = i.bottom - u + a.height - this.anchorMargin.top);
      var h = d - o.height > 0;
      !h && c > d + this.openBottomBias && (n = this.setBit(n, St.BOTTOM));
      var f = this.adapter.isRtl(), v = this.hasBit(this.anchorCorner, St.FLIP_RTL), p = this.hasBit(this.anchorCorner, St.RIGHT) || this.hasBit(n, St.RIGHT), g = !1;
      f && v ? g = !p : g = p;
      var y, E;
      g ? (y = i.left + a.width + this.anchorMargin.right, E = i.right - this.anchorMargin.right) : (y = i.left + this.anchorMargin.left, E = i.right + a.width - this.anchorMargin.left);
      var S = y - o.width > 0, C = E - o.width > 0, b = this.hasBit(n, St.FLIP_RTL) && this.hasBit(n, St.RIGHT);
      return C && b && f || !S && b ? n = this.unsetBit(n, St.RIGHT) : (S && g && f || S && !g && p || !C && y >= E) && (n = this.setBit(n, St.RIGHT)), n;
    }, e.prototype.getMenuSurfaceMaxHeight = function(n) {
      if (this.maxHeight > 0)
        return this.maxHeight;
      var r = this.measurements.viewportDistance, i = 0, a = this.hasBit(n, St.BOTTOM), o = this.hasBit(this.anchorCorner, St.BOTTOM), u = e.numbers.MARGIN_TO_EDGE;
      return a ? (i = r.top + this.anchorMargin.top - u, o || (i += this.measurements.anchorSize.height)) : (i = r.bottom - this.anchorMargin.bottom + this.measurements.anchorSize.height - u, o && (i -= this.measurements.anchorSize.height)), i;
    }, e.prototype.getHorizontalOriginOffset = function(n) {
      var r = this.measurements.anchorSize, i = this.hasBit(n, St.RIGHT), a = this.hasBit(this.anchorCorner, St.RIGHT);
      if (i) {
        var o = a ? r.width - this.anchorMargin.left : this.anchorMargin.right;
        return this.isHoistedElement || this.isFixedPosition ? o - (this.measurements.viewportSize.width - this.measurements.bodySize.width) : o;
      }
      return a ? r.width - this.anchorMargin.right : this.anchorMargin.left;
    }, e.prototype.getVerticalOriginOffset = function(n) {
      var r = this.measurements.anchorSize, i = this.hasBit(n, St.BOTTOM), a = this.hasBit(this.anchorCorner, St.BOTTOM), o = 0;
      return i ? o = a ? r.height - this.anchorMargin.top : -this.anchorMargin.bottom : o = a ? r.height + this.anchorMargin.bottom : this.anchorMargin.top, o;
    }, e.prototype.adjustPositionForHoistedElement = function(n) {
      var r, i, a = this.measurements, o = a.windowScroll, u = a.viewportDistance, l = a.surfaceSize, c = a.viewportSize, d = Object.keys(n);
      try {
        for (var h = wt(d), f = h.next(); !f.done; f = h.next()) {
          var v = f.value, p = n[v] || 0;
          if (this.isHorizontallyCenteredOnViewport && (v === "left" || v === "right")) {
            n[v] = (c.width - l.width) / 2;
            continue;
          }
          p += u[v], this.isFixedPosition || (v === "top" ? p += o.y : v === "bottom" ? p -= o.y : v === "left" ? p += o.x : p -= o.x), n[v] = p;
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
  }(Pt)
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
var iu = {
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
function Om(t) {
  return !!t.document && typeof t.document.createElement == "function";
}
function Rm(t, e) {
  if (Om(t) && e in iu) {
    var n = t.document.createElement("div"), r = iu[e], i = r.standard, a = r.prefixed, o = i in n.style;
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
}, Mm = {
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
var Dm = (
  /** @class */
  function(t) {
    et(e, t);
    function e(n) {
      var r = t.call(this, ce(ce({}, e.defaultAdapter), n)) || this;
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
        return Mm;
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
        }, Zc.numbers.TRANSITION_CLOSE_DURATION);
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
      this.validatedIndex(n), r ? (this.adapter.removeClassFromElementAtIndex(n, je.LIST_ITEM_DISABLED_CLASS), this.adapter.addAttributeToElementAtIndex(n, Ei.ARIA_DISABLED_ATTR, "false")) : (this.adapter.addClassToElementAtIndex(n, je.LIST_ITEM_DISABLED_CLASS), this.adapter.addAttributeToElementAtIndex(n, Ei.ARIA_DISABLED_ATTR, "true"));
    }, e.prototype.validatedIndex = function(n) {
      var r = this.adapter.getMenuItemCount(), i = n >= 0 && n < r;
      if (!i)
        throw new Error("MDCMenuFoundation: No list item at specified index.");
    }, e;
  }(Pt)
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
var Pm = (
  /** @class */
  function(t) {
    et(e, t);
    function e(n, r) {
      r === void 0 && (r = {});
      var i = t.call(this, ce(ce({}, e.defaultAdapter), n)) || this;
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
        var r = bt(n) === Me.ENTER, i = bt(n) === Me.SPACEBAR, a = bt(n) === Me.ARROW_UP, o = bt(n) === Me.ARROW_DOWN, u = n.ctrlKey || n.metaKey;
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
      n && (this.adapter.setMenuAnchorElement(n), this.adapter.setMenuAnchorCorner(ai.BOTTOM_START)), this.adapter.setMenuWrapFocus(!1), this.setDisabled(this.adapter.hasClass(mt.DISABLED)), this.syncHelperTextValidity(!this.adapter.hasClass(mt.INVALID)), this.layout(), this.layoutOptions();
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
  }(Pt)
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
}, tr = {
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
var Nm = (
  /** @class */
  function(t) {
    et(e, t);
    function e(n) {
      return t.call(this, ce(ce({}, e.defaultAdapter), n)) || this;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return tr;
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
      n ? this.adapter.addClass(tr.HELPER_TEXT_VALIDATION_MSG) : this.adapter.removeClass(tr.HELPER_TEXT_VALIDATION_MSG);
    }, e.prototype.setValidationMsgPersistent = function(n) {
      n ? this.adapter.addClass(tr.HELPER_TEXT_VALIDATION_MSG_PERSISTENT) : this.adapter.removeClass(tr.HELPER_TEXT_VALIDATION_MSG_PERSISTENT);
    }, e.prototype.getIsValidation = function() {
      return this.adapter.hasClass(tr.HELPER_TEXT_VALIDATION_MSG);
    }, e.prototype.getIsValidationMsgPersistent = function() {
      return this.adapter.hasClass(tr.HELPER_TEXT_VALIDATION_MSG_PERSISTENT);
    }, e.prototype.setValidity = function(n) {
      var r = this.adapter.hasClass(tr.HELPER_TEXT_VALIDATION_MSG);
      if (r) {
        var i = this.adapter.hasClass(tr.HELPER_TEXT_VALIDATION_MSG_PERSISTENT), a = !n || i;
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
  }(Pt)
), Um = /* @__PURE__ */ ve("<div><!></div>");
function Hm(t, e) {
  Oe(e, !0);
  let n = m(e, "use", 19, () => []), r = m(e, "class", 3, ""), i = m(e, "style", 3, ""), a = m(e, "static", 3, !1), o = m(e, "anchor", 3, !0), u = m(e, "fixed", 3, !1), l = m(e, "open", 31, () => be(a())), c = m(e, "managed", 3, !1), d = m(e, "fullWidth", 3, !1), h = m(e, "quickOpen", 3, !1), f = m(e, "anchorElement", 15), v = m(e, "anchorMargin", 19, () => ({ top: 0, right: 0, bottom: 0, left: 0 })), p = m(e, "maxHeight", 3, 0), g = m(e, "horizontallyCenteredOnViewport", 3, !1), y = m(e, "openBottomBias", 3, 0), E = m(e, "neverRestoreFocus", 3, !1), S = /* @__PURE__ */ We(e, [
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
  ]), C, b = /* @__PURE__ */ Ae(void 0), _ = be({}), x = be({}), T = /* @__PURE__ */ Ae(void 0);
  $("SMUI:list:role", "menu"), $("SMUI:list:item:role", "menuitem"), Te(() => {
    var k, re;
    C && o() && !((k = C.parentElement) != null && k.classList.contains("mdc-menu-surface--anchor")) && ((re = C.parentElement) == null || re.classList.add("mdc-menu-surface--anchor"), f(C.parentElement ?? void 0));
  }), Te(() => {
    s(b) && s(b).isOpen() !== l() && (l() ? s(b).open() : s(b).close());
  }), Te(() => {
    s(b) && s(b).setQuickOpen(h());
  }), Te(() => {
    s(b) && s(b).setFixedPosition(u());
  }), Te(() => {
    s(b) && s(b).setMaxHeight(p());
  }), Te(() => {
    s(b) && s(b).setIsHorizontallyCenteredOnViewport(g());
  });
  const A = ai;
  Te(() => {
    s(b) && e.anchorCorner != null && (typeof e.anchorCorner == "string" ? s(b).setAnchorCorner(A[e.anchorCorner]) : s(b).setAnchorCorner(e.anchorCorner));
  }), Te(() => {
    s(b) && s(b).setAnchorMargin(v());
  }), Te(() => {
    s(b) && s(b).setOpenBottomBias(y());
  });
  const L = ae("SMUI:menu-surface:mount"), U = ae("SMUI:menu-surface:unmount");
  at(() => {
    ne(
      b,
      new Zc({
        addClass: H,
        removeClass: B,
        hasClass: X,
        hasAnchor: () => !!f(),
        notifyClose: () => {
          c() || l(a()), l() || qe(w(), "SMUIMenuSurfaceClosed");
        },
        notifyClosing: () => {
          c() || l(a()), l() || qe(w(), "SMUIMenuSurfaceClosing");
        },
        notifyOpen: () => {
          c() || l(!0), l() && qe(w(), "SMUIMenuSurfaceOpened");
        },
        notifyOpening: () => {
          l() || qe(w(), "SMUIMenuSurfaceOpening");
        },
        isElementInContainer: (re) => w().contains(re),
        isRtl: () => getComputedStyle(w()).getPropertyValue("direction") === "rtl",
        setTransformOrigin: (re) => {
          x["transform-origin"] = re;
        },
        isFocused: () => document.activeElement === w(),
        saveFocus: () => {
          ne(T, document.activeElement ?? void 0, !0);
        },
        restoreFocus: () => {
          !E() && (!C || w().contains(document.activeElement)) && s(T) && document.contains(s(T)) && "focus" in s(T) && s(T).focus();
        },
        getInnerDimensions: () => ({
          width: w().offsetWidth,
          height: w().offsetHeight
        }),
        getAnchorDimensions: () => f() ? f().getBoundingClientRect() : null,
        getWindowDimensions: () => ({ width: window.innerWidth, height: window.innerHeight }),
        getBodyDimensions: () => ({
          width: document.body.clientWidth,
          height: document.body.clientHeight
        }),
        getWindowScroll: () => ({ x: window.pageXOffset, y: window.pageYOffset }),
        setPosition: (re) => {
          x.left = "left" in re ? `${re.left}px` : "", x.right = "right" in re ? `${re.right}px` : "", x.top = "top" in re ? `${re.top}px` : "", x.bottom = "bottom" in re ? `${re.bottom}px` : "";
        },
        setMaxHeight: (re) => {
          x["max-height"] = re;
        }
      }),
      !0
    );
    const k = {
      get open() {
        return l();
      },
      set open(re) {
        l(re);
      },
      closeProgrammatic: ye
    };
    return L && L(k), s(b).init(), () => {
      var Y, de;
      U && U(k);
      const re = s(b).isHoistedElement;
      (Y = s(b)) == null || Y.destroy(), re && ((de = w().parentNode) == null || de.removeChild(w()));
    };
  }), Xn(() => {
    var k;
    o() && w() && ((k = w().parentElement) == null || k.classList.remove("mdc-menu-surface--anchor"));
  });
  function X(k) {
    return k in _ ? _[k] : w().classList.contains(k);
  }
  function H(k) {
    _[k] || (_[k] = !0);
  }
  function B(k) {
    (!(k in _) || _[k]) && (_[k] = !1);
  }
  function ye(k) {
    var re;
    (re = s(b)) == null || re.close(k), l(!1);
  }
  function V(k) {
    s(b) && l() && !c() && s(b).handleBodyClick(k);
  }
  function F() {
    return l();
  }
  function M(k) {
    l(k);
  }
  function G(k, re) {
    if (s(b) == null)
      throw new Error("Instance is not defined.");
    return s(b).setAbsolutePosition(k, re);
  }
  function ee(k) {
    if (s(b) == null)
      throw new Error("Instance is not defined.");
    return s(b).setIsHoisted(k);
  }
  function D() {
    if (s(b) == null)
      throw new Error("Instance is not defined.");
    return s(b).isFixed();
  }
  function I() {
    if (s(b) == null)
      throw new Error("Instance is not defined.");
    return s(b).flipCornerHorizontally();
  }
  function w() {
    return C;
  }
  var te = {
    isOpen: F,
    setOpen: M,
    setAbsolutePosition: G,
    setIsHoisted: ee,
    isFixed: D,
    flipCornerHorizontally: I,
    getElement: w
  }, P = Um();
  Bf("click", Ku.body, V, !0);
  var j = (k) => {
    var re;
    s(b) && !c() && s(b).handleKeydown(k), (re = e.onkeydown) == null || re.call(e, k);
  };
  Be(
    P,
    (k, re) => ({
      class: k,
      style: re,
      role: "dialog",
      ...S,
      onkeydown: j
    }),
    [
      () => Ne({
        "mdc-menu-surface": !0,
        "mdc-menu-surface--fixed": u(),
        "mdc-menu-surface--open": a(),
        "smui-menu-surface--static": a(),
        "mdc-menu-surface--fullwidth": d(),
        ..._,
        [r()]: !0
      }),
      () => Object.entries(x).map(([k, re]) => `${k}: ${re};`).concat([i()]).join(" ")
    ]
  );
  var pe = Ie(P);
  return Ee(pe, () => e.children ?? ge), xe(P, (k) => C = k, () => C), Ue(P, (k, re) => K == null ? void 0 : K(k, re), n), O(t, P), Re(te);
}
function ns(t, { addClass: e = (r) => t.classList.add(r), removeClass: n = (r) => t.classList.remove(r) } = {}) {
  return e("mdc-menu-surface--anchor"), {
    destroy() {
      n("mdc-menu-surface--anchor");
    }
  };
}
function Fm(t, e) {
  Oe(e, !0);
  const { closest: n } = Po;
  let r = m(e, "use", 19, () => []), i = m(e, "class", 3, ""), a = m(e, "open", 15, !1), o = m(e, "anchorElement", 15), u = m(e, "managed", 3, !1), l = /* @__PURE__ */ We(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "open",
    "anchorElement",
    "managed",
    "children"
  ]), c, d = /* @__PURE__ */ Ae(void 0), h = /* @__PURE__ */ Ae(void 0), f = /* @__PURE__ */ Ae(void 0);
  $("SMUI:menu-surface:mount", (A) => {
    s(h) || ne(h, A, !0);
  });
  const v = ae("SMUI:list:mount");
  $("SMUI:list:mount", (A) => {
    s(f) || ne(f, A, !0), v && v(A);
  });
  const p = ae("SMUI:menu:mount"), g = ae("SMUI:menu:unmount");
  at(() => (ne(
    d,
    new Dm({
      addClassToElementAtIndex: (A, L) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        s(f).addClassForElementIndex(A, L);
      },
      removeClassFromElementAtIndex: (A, L) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        s(f).removeClassForElementIndex(A, L);
      },
      addAttributeToElementAtIndex: (A, L, U) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        s(f).setAttributeForElementIndex(A, L, U);
      },
      removeAttributeFromElementAtIndex: (A, L) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        s(f).removeAttributeForElementIndex(A, L);
      },
      getAttributeFromElementAtIndex: (A, L) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        return s(f).getAttributeFromElementIndex(A, L);
      },
      elementContainsClass: (A, L) => A.classList.contains(L),
      closeSurface: (A) => {
        var L;
        u() || ((L = s(h)) == null || L.closeProgrammatic(A), qe(x(), "SMUIMenuClosedProgrammatically"));
      },
      getElementIndex: (A) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        return s(f).getOrderedList().map((L) => L.element).indexOf(A);
      },
      notifySelected: (A) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        qe(x(), "SMUIMenuSelected", {
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
        const L = s(f).getOrderedList(), U = n(L[A].element, `.${Ni.MENU_SELECTION_GROUP}`), X = U == null ? void 0 : U.querySelector(`.${Ni.MENU_SELECTED_LIST_ITEM}`);
        return X ? L.map((H) => H.element).indexOf(X) : -1;
      }
    }),
    !0
  ), p && p(s(d)), s(d).init(), () => {
    var A;
    g && s(d) && g(s(d)), (A = s(d)) == null || A.destroy();
  }));
  function y(A) {
    s(d) && s(d).handleKeydown(A);
  }
  function E() {
    return a();
  }
  function S(A) {
    a(A);
  }
  function C(A) {
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
    return c;
  }
  function x() {
    return c.getElement();
  }
  var T = {
    isOpen: E,
    setOpen: S,
    setDefaultFocusState: C,
    getSelectedIndex: b,
    getMenuSurface: _,
    getElement: x
  };
  {
    let A = /* @__PURE__ */ se(() => Ne({ "mdc-menu": !0, [i()]: !0 }));
    xe(
      Hm(t, it(
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
          onkeydown: (L) => {
            var U;
            y(L), (U = e.onkeydown) == null || U.call(e, L);
          },
          onSMUIMenuSurfaceOpened: (L) => {
            var U;
            s(d) && s(d).handleMenuSurfaceOpened(), (U = e.onSMUIMenuSurfaceOpened) == null || U.call(e, L);
          },
          onSMUIListAction: (L) => {
            var U;
            s(d) && s(f) && s(d).handleItemAction(s(f).getOrderedList()[L.detail.index].element), (U = e.onSMUIListAction) == null || U.call(e, L);
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
          children: (L, U) => {
            var X = ie(), H = Q(X);
            Ee(H, () => e.children ?? ge), O(L, X);
          },
          $$slots: { default: !0 }
        }
      )),
      (L) => c = L,
      () => c
    );
  }
  return Re(T);
}
function Bm(t, e) {
  Oe(e, !0);
  const { closest: n, matches: r } = Po;
  let i = ae("SMUI:list:nav"), a = m(e, "use", 19, () => []), o = m(e, "class", 3, ""), u = m(e, "nonInteractive", 3, !1), l = m(e, "dense", 3, !1), c = m(e, "textualList", 3, !1), d = m(e, "avatarList", 3, !1), h = m(e, "iconList", 3, !1), f = m(e, "imageList", 3, !1), v = m(e, "thumbnailList", 3, !1), p = m(e, "videoList", 3, !1), g = m(e, "twoLine", 3, !1), y = m(e, "threeLine", 3, !1), E = m(e, "vertical", 3, !0), S = m(e, "wrapFocus", 19, () => ae("SMUI:list:wrapFocus") ?? !1), C = m(e, "singleSelection", 3, !1), b = m(e, "disabledItemsFocusable", 3, !1), _ = m(e, "selectedIndex", 31, () => -1), x = m(e, "radioList", 3, !1), T = m(e, "checkList", 3, !1), A = m(e, "hasTypeahead", 3, !1), L = m(e, "component", 3, Hr), U = m(e, "tag", 3, i ? "nav" : "ul"), X = /* @__PURE__ */ We(e, [
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
  ]), H, B = /* @__PURE__ */ Ae(void 0), ye = [], V = ae("SMUI:list:role");
  const F = /* @__PURE__ */ new WeakMap();
  let M = ae("SMUI:dialog:selection"), G = ae("SMUI:addLayoutListener"), ee;
  $("SMUI:list:nonInteractive", u()), $("SMUI:separator:context", "list"), V || (C() ? (V = "listbox", $("SMUI:list:item:role", "option")) : x() ? (V = "radiogroup", $("SMUI:list:item:role", "radio")) : T() ? (V = "group", $("SMUI:list:item:role", "checkbox")) : (V = "list", $("SMUI:list:item:role", void 0))), Te(() => {
    s(B) && s(B).setVerticalOrientation(E());
  }), Te(() => {
    s(B) && s(B).setWrapFocus(S());
  }), Te(() => {
    s(B) && s(B).setHasTypeahead(A());
  }), Te(() => {
    s(B) && s(B).setSingleSelection(C());
  }), Te(() => {
    s(B) && s(B).setDisabledItemsFocusable(b());
  }), Te(() => {
    s(B) && C() && N() !== _() && s(B).setSelectedIndex(_());
  }), G && (ee = G(le)), $("SMUI:list:item:mount", (he) => {
    ye.push(he), F.set(he.element, he), C() && he.selected && _(we(he.element));
  }), $("SMUI:list:item:unmount", (he) => {
    const me = (he && ye.findIndex((W) => W === he)) ?? -1;
    me !== -1 && (ye.splice(me, 1), F.delete(he.element));
  });
  const D = ae("SMUI:list:mount"), I = ae("SMUI:list:unmount");
  at(() => {
    ne(
      B,
      new wm({
        addClassForElementIndex: Y,
        focusItemAtIndex: J,
        getAttributeForElementIndex: (me, W) => {
          var z;
          return ((z = k()[me]) == null ? void 0 : z.getAttr(W)) ?? null;
        },
        getFocusedElementIndex: () => document.activeElement ? k().map((me) => me.element).indexOf(document.activeElement) : -1,
        getListItemCount: () => ye.length,
        getPrimaryTextAtIndex: Fe,
        hasCheckboxAtIndex: (me) => {
          var W;
          return ((W = k()[me]) == null ? void 0 : W.hasCheckbox) ?? !1;
        },
        hasRadioAtIndex: (me) => {
          var W;
          return ((W = k()[me]) == null ? void 0 : W.hasRadio) ?? !1;
        },
        isCheckboxCheckedAtIndex: (me) => {
          const W = k()[me];
          return ((W == null ? void 0 : W.hasCheckbox) && W.checked) ?? !1;
        },
        isFocusInsideList: () => H != null && Ce() !== document.activeElement && Ce().contains(document.activeElement),
        isRootFocused: () => H != null && document.activeElement === Ce(),
        listItemAtIndexHasClass: re,
        notifyAction: (me) => {
          _(me), H != null && qe(Ce(), "SMUIListAction", { index: me });
        },
        notifySelectionChange: (me) => {
          H != null && qe(Ce(), "SMUIListSelectionChange", { changedIndices: me });
        },
        removeClassForElementIndex: de,
        setAttributeForElementIndex: oe,
        setCheckedCheckboxOrRadioAtIndex: (me, W) => {
          k()[me].checked = W;
        },
        setTabIndexForListItemChildren: (me, W) => {
          const z = k()[me];
          Array.prototype.forEach.call(z.element.querySelectorAll("button:not(:disabled), a"), (ut) => {
            ut.setAttribute("tabindex", W);
          });
        }
      }),
      !0
    );
    const he = {
      get element() {
        return Ce();
      },
      get items() {
        return ye;
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
      getOrderedList: k,
      focusItemAtIndex: J,
      addClassForElementIndex: Y,
      removeClassForElementIndex: de,
      setAttributeForElementIndex: oe,
      removeAttributeForElementIndex: Qe,
      getAttributeFromElementIndex: Ze,
      getPrimaryTextAtIndex: Fe
    };
    return D && D(he), s(B).init(), s(B).layout(), () => {
      var me;
      I && I(he), (me = s(B)) == null || me.destroy();
    };
  }), Xn(() => {
    ee && ee();
  });
  function w(he) {
    s(B) && he.target && s(B).handleKeydown(he, he.target.classList.contains("mdc-deprecated-list-item"), we(he.target));
  }
  function te(he) {
    s(B) && he.target && s(B).handleFocusIn(we(he.target));
  }
  function P(he) {
    s(B) && he.target && s(B).handleFocusOut(we(he.target));
  }
  function j(he) {
    s(B) && he.target && s(B).handleClick(we(he.target), !r(he.target, 'input[type="checkbox"], input[type="radio"]'), he);
  }
  function pe(he) {
    if (x() || T()) {
      const me = we(he.target);
      if (me !== -1) {
        const W = k()[me];
        W && (x() && !W.checked || T()) && (r(he.detail.target, 'input[type="checkbox"], input[type="radio"]') || (W.checked = !W.checked), W.activateRipple(), window.requestAnimationFrame(() => {
          W.deactivateRipple();
        }));
      }
    }
  }
  function k() {
    return H == null ? [] : [...Ce().children].map((he) => F.get(he)).filter((he) => he && he._smui_list_item_accessor);
  }
  function re(he, me) {
    const W = k()[he];
    return (W && W.hasClass(me)) ?? !1;
  }
  function Y(he, me) {
    const W = k()[he];
    W && W.addClass(me);
  }
  function de(he, me) {
    const W = k()[he];
    W && W.removeClass(me);
  }
  function oe(he, me, W) {
    const z = k()[he];
    z && z.addAttr(me, W);
  }
  function Qe(he, me) {
    const W = k()[he];
    W && W.removeAttr(me);
  }
  function Ze(he, me) {
    const W = k()[he];
    return W ? W.getAttr(me) : null;
  }
  function Fe(he) {
    const me = k()[he];
    return (me && me.getPrimaryText()) ?? "";
  }
  function we(he) {
    const me = n(he, ".mdc-deprecated-list-item, .mdc-deprecated-list");
    return me && r(me, ".mdc-deprecated-list-item") ? k().map((W) => W == null ? void 0 : W.element).indexOf(me) : -1;
  }
  function le() {
    if (!s(B))
      throw new Error("Instance is undefined.");
    return s(B).layout();
  }
  function Le(he, me) {
    if (!s(B))
      throw new Error("Instance is undefined.");
    return s(B).setEnabled(he, me);
  }
  function Je() {
    if (!s(B))
      throw new Error("Instance is undefined.");
    return s(B).isTypeaheadInProgress();
  }
  function N() {
    if (!s(B))
      throw new Error("Instance is undefined.");
    return s(B).getSelectedIndex();
  }
  function q() {
    if (!s(B))
      throw new Error("Instance is undefined.");
    return s(B).getFocusedItemIndex();
  }
  function J(he) {
    const me = k()[he];
    me && "focus" in me.element && me.element.focus();
  }
  function Ce() {
    return H.getElement();
  }
  var Nt = {
    layout: le,
    setEnabled: Le,
    getTypeaheadInProgress: Je,
    getSelectedIndex: N,
    getFocusedItemIndex: q,
    focusItemAtIndex: J,
    getElement: Ce
  }, yt = ie(), bn = Q(yt);
  {
    let he = /* @__PURE__ */ se(() => Ne({
      "mdc-deprecated-list": !0,
      "mdc-deprecated-list--non-interactive": u(),
      "mdc-deprecated-list--dense": l(),
      "mdc-deprecated-list--textual-list": c(),
      "mdc-deprecated-list--avatar-list": d() || M,
      "mdc-deprecated-list--icon-list": h(),
      "mdc-deprecated-list--image-list": f(),
      "mdc-deprecated-list--thumbnail-list": v(),
      "mdc-deprecated-list--video-list": p(),
      "mdc-deprecated-list--two-line": g(),
      "smui-list--three-line": y() && !g(),
      [o()]: !0
    }));
    Nr(bn, L, (me, W) => {
      xe(
        W(me, it(
          {
            get tag() {
              return U();
            },
            get use() {
              return a();
            },
            get class() {
              return s(he);
            },
            get role() {
              return V;
            }
          },
          () => X,
          {
            onkeydown: (z) => {
              var De;
              w(z), (De = e.onkeydown) == null || De.call(e, z);
            },
            onfocusin: (z) => {
              var De;
              te(z), (De = e.onfocusin) == null || De.call(e, z);
            },
            onfocusout: (z) => {
              var De;
              P(z), (De = e.onfocusout) == null || De.call(e, z);
            },
            onclick: (z) => {
              var De;
              j(z), (De = e.onclick) == null || De.call(e, z);
            },
            onSMUIAction: (z) => {
              var De;
              pe(z), (De = e.onSMUIAction) == null || De.call(e, z);
            },
            children: (z, De) => {
              var ut = ie(), gt = Q(ut);
              Ee(gt, () => e.children ?? ge), O(z, ut);
            },
            $$slots: { default: !0 }
          }
        )),
        (z) => H = z,
        () => H
      );
    });
  }
  return O(t, yt), Re(Nt);
}
let km = 0;
var Vm = /* @__PURE__ */ ve('<span class="mdc-deprecated-list-item__ripple"></span>'), Gm = /* @__PURE__ */ ve("<!><!>", 1);
function jm(t, e) {
  Oe(e, !0);
  let n = () => {
  };
  function r(Y) {
    return Y === n;
  }
  let i = ae("SMUI:list:item:nav"), a = m(e, "use", 19, () => []), o = m(e, "class", 3, ""), u = m(e, "style", 3, ""), l = m(e, "nonInteractive", 19, () => ae("SMUI:list:nonInteractive") ?? !1), c = m(e, "ripple", 19, () => !l()), d = m(e, "wrapper", 3, !1), h = m(e, "activated", 15, !1), f = m(e, "role", 19, () => d() ? "presentation" : ae("SMUI:list:item:role")), v = m(e, "selected", 15, !1), p = m(e, "disabled", 3, !1), g = m(e, "skipRestoreFocus", 3, !1), y = m(e, "tabindex", 15, n), E = m(e, "inputId", 19, () => "SMUI-form-field-list-" + km++), S = m(e, "component", 3, Hr), C = m(e, "tag", 19, () => i ? e.href ? "a" : "span" : "li"), b = /* @__PURE__ */ We(e, [
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
  $("SMUI:list:nonInteractive", void 0), $("SMUI:list:item:role", void 0);
  let _, x = be({}), T = be({}), A = be({}), L = /* @__PURE__ */ Ae(void 0), U = /* @__PURE__ */ Ae(void 0);
  const X = /* @__PURE__ */ se(() => r(y()) ? !l() && !p() && (v() || s(L) && s(L).checked) ? 0 : -1 : y());
  $("SMUI:generic:input:props", { id: E() }), $("SMUI:separator:context", void 0), $("SMUI:generic:input:mount", (Y) => {
    ("_smui_checkbox_accessor" in Y || "_smui_radio_accessor" in Y) && ne(L, Y, !0);
  }), $("SMUI:generic:input:unmount", () => {
    ne(L, void 0);
  });
  const H = ae("SMUI:list:item:mount"), B = ae("SMUI:list:item:unmount");
  at(() => {
    if (!v() && !l()) {
      let de = !0, oe = _.getElement();
      for (; oe.previousElementSibling; )
        if (oe = oe.previousElementSibling, oe.nodeType === 1 && oe.classList.contains("mdc-deprecated-list-item") && !oe.classList.contains("mdc-deprecated-list-item--disabled")) {
          de = !1;
          break;
        }
      de && ne(U, window.requestAnimationFrame(() => I(oe)), !0);
    }
    const Y = {
      _smui_list_item_accessor: !0,
      get element() {
        return j();
      },
      get selected() {
        return v();
      },
      set selected(de) {
        v(de);
      },
      hasClass: ye,
      addClass: V,
      removeClass: F,
      getAttr: G,
      addAttr: ee,
      removeAttr: D,
      getPrimaryText: P,
      // For inputs within item.
      get checked() {
        return (s(L) && s(L).checked) ?? !1;
      },
      set checked(de) {
        s(L) && (s(L).checked = !!de);
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
      action: te,
      get tabindex() {
        return s(X);
      },
      set tabindex(de) {
        y(de);
      },
      get disabled() {
        return p();
      },
      get activated() {
        return h();
      },
      set activated(de) {
        h(de);
      }
    };
    return H && H(Y), () => {
      B && B(Y);
    };
  }), Xn(() => {
    s(U) && window.cancelAnimationFrame(s(U));
  });
  function ye(Y) {
    return Y in x ? x[Y] : j().classList.contains(Y);
  }
  function V(Y) {
    x[Y] || (x[Y] = !0);
  }
  function F(Y) {
    (!(Y in x) || x[Y]) && (x[Y] = !1);
  }
  function M(Y, de) {
    T[Y] != de && (de === "" || de == null ? delete T[Y] : T[Y] = de);
  }
  function G(Y) {
    return Y in A ? A[Y] ?? null : j().getAttribute(Y);
  }
  function ee(Y, de) {
    A[Y] !== de && (A[Y] = de);
  }
  function D(Y) {
    (!(Y in A) || A[Y] != null) && (A[Y] = void 0);
  }
  function I(Y) {
    let de = !0;
    for (; Y.nextElementSibling; )
      if (Y = Y.nextElementSibling, Y.nodeType === 1 && Y.classList.contains("mdc-deprecated-list-item")) {
        const oe = Y.attributes.getNamedItem("tabindex");
        if (oe && oe.value === "0") {
          de = !1;
          break;
        }
      }
    de && y(0);
  }
  function w(Y) {
    const de = Y.key === "Enter", oe = Y.key === "Space";
    (de || oe) && te(Y);
  }
  function te(Y) {
    p() || qe(j(), "SMUIAction", Y);
  }
  function P() {
    const Y = j(), de = Y.querySelector(".mdc-deprecated-list-item__primary-text");
    if (de)
      return de.textContent ?? "";
    const oe = Y.querySelector(".mdc-deprecated-list-item__text");
    return oe ? oe.textContent ?? "" : Y.textContent ?? "";
  }
  function j() {
    return _.getElement();
  }
  var pe = { action: te, getPrimaryText: P, getElement: j }, k = ie(), re = Q(k);
  {
    let Y = /* @__PURE__ */ se(() => [
      ...l() ? [] : [
        [
          qt,
          {
            ripple: !s(L),
            unbounded: !1,
            color: (h() || v()) && e.color == null ? "primary" : e.color,
            disabled: p(),
            addClass: V,
            removeClass: F,
            addStyle: M
          }
        ]
      ],
      ...a()
    ]), de = /* @__PURE__ */ se(() => Ne({
      "mdc-deprecated-list-item": !d(),
      "mdc-deprecated-list-item__wrapper": d(),
      "mdc-deprecated-list-item--activated": h(),
      "mdc-deprecated-list-item--selected": v(),
      "mdc-deprecated-list-item--disabled": p(),
      "mdc-menu-item--selected": !i && f() === "menuitem" && v(),
      "smui-menu-item--non-interactive": l(),
      ...x,
      [o()]: !0
    })), oe = /* @__PURE__ */ se(() => Object.entries(T).map(([Ze, Fe]) => `${Ze}: ${Fe};`).concat([u()]).join(" ")), Qe = /* @__PURE__ */ se(() => g() || void 0);
    Nr(re, S, (Ze, Fe) => {
      xe(
        Fe(Ze, it(
          {
            get tag() {
              return C();
            },
            get use() {
              return s(Y);
            },
            get class() {
              return s(de);
            },
            get style() {
              return s(oe);
            }
          },
          () => i && h() ? { "aria-current": "page" } : {},
          () => !i || d() ? { role: f() } : {},
          () => !i && f() === "option" ? { "aria-selected": v() ? "true" : "false" } : {},
          () => !i && (f() === "radio" || f() === "checkbox") ? {
            "aria-checked": s(L) && s(L).checked ? "true" : "false"
          } : {},
          () => i ? {} : { "aria-disabled": p() ? "true" : "false" },
          {
            get "data-menu-item-skip-restore-focus"() {
              return s(Qe);
            },
            get tabindex() {
              return s(X);
            },
            get href() {
              return e.href;
            }
          },
          () => A,
          () => b,
          {
            onclick: (we) => {
              var le;
              te(we), (le = e.onclick) == null || le.call(e, we);
            },
            onkeydown: (we) => {
              var le;
              w(we), (le = e.onkeydown) == null || le.call(e, we);
            },
            children: (we, le) => {
              var Le = Gm(), Je = Q(Le);
              {
                var N = (J) => {
                  var Ce = Vm();
                  O(J, Ce);
                };
                ue(Je, (J) => {
                  c() && J(N);
                });
              }
              var q = _e(Je);
              Ee(q, () => e.children ?? ge), O(we, Le);
            },
            $$slots: { default: !0 }
          }
        )),
        (we) => _ = we,
        () => _
      );
    });
  }
  return O(t, k), Re(pe);
}
let qm = 0;
var Wm = /* @__PURE__ */ ve("<div><!></div>");
function Km(t, e) {
  Oe(e, !0);
  let n = m(e, "use", 19, () => []), r = m(e, "class", 3, ""), i = m(e, "id", 19, () => "SMUI-select-helper-text-" + qm++), a = m(e, "persistent", 3, !1), o = m(e, "validationMsg", 3, !1), u = /* @__PURE__ */ We(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "id",
    "persistent",
    "validationMsg",
    "children"
  ]), l, c = /* @__PURE__ */ Ae(void 0), d = be({}), h = be({}), f = /* @__PURE__ */ Ae(void 0);
  const v = ae("SMUI:select:helper-text:id"), p = ae("SMUI:select:helper-text:mount"), g = ae("SMUI:select:helper-text:unmount");
  at(() => (ne(
    c,
    new Nm({
      addClass: E,
      removeClass: S,
      hasClass: y,
      getAttr: C,
      setAttr: b,
      removeAttr: _,
      setContent: (H) => {
        ne(f, H, !0);
      }
    }),
    !0
  ), v && v(i()), p && p(s(c)), s(c).init(), () => {
    var H;
    g && s(c) && g(s(c)), (H = s(c)) == null || H.destroy();
  }));
  function y(H) {
    return H in d ? d[H] : x().classList.contains(H);
  }
  function E(H) {
    d[H] || (d[H] = !0);
  }
  function S(H) {
    (!(H in d) || d[H]) && (d[H] = !1);
  }
  function C(H) {
    return H in h ? h[H] ?? null : x().getAttribute(H);
  }
  function b(H, B) {
    h[H] !== B && (h[H] = B);
  }
  function _(H) {
    (!(H in h) || h[H] != null) && (h[H] = void 0);
  }
  function x() {
    return l;
  }
  var T = { getElement: x }, A = Wm();
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
      () => Ne({
        "mdc-select-helper-text": !0,
        "mdc-select-helper-text--validation-msg": o(),
        "mdc-select-helper-text--validation-msg-persistent": a(),
        ...d,
        [r()]: !0
      })
    ]
  );
  var L = Ie(A);
  {
    var U = (H) => {
      var B = ie(), ye = Q(B);
      Ee(ye, () => e.children ?? ge), O(H, B);
    }, X = (H) => {
      var B = Kt();
      He(() => pt(B, s(f))), O(H, B);
    };
    ue(L, (H) => {
      s(f) == null ? H(U) : H(X, !1);
    });
  }
  return xe(A, (H) => l = H, () => l), Ue(A, (H, B) => K == null ? void 0 : K(H, B), n), O(t, A), Re(T);
}
let zm = 0;
var Xm = /* @__PURE__ */ ve("<input/>"), Ym = /* @__PURE__ */ ve('<span class="mdc-select__ripple"></span>'), Zm = /* @__PURE__ */ ve('<div><!> <div><!> <!> <!> <!> <span><span> </span></span> <span><svg class="mdc-select__dropdown-icon-graphic" viewBox="7 10 10 5" focusable="false"><polygon class="mdc-select__dropdown-icon-inactive" stroke="none" fill-rule="evenodd" points="7 10 12 15 17 10"></polygon><polygon class="mdc-select__dropdown-icon-active" stroke="none" fill-rule="evenodd" points="7 15 12 10 17 15"></polygon></svg></span> <!></div> <!></div> <!>', 1);
function Qm(t, e) {
  Oe(e, !0);
  const n = () => Dt(Ce, "$selectedTextStore", r), [r, i] = wn();
  let a = () => {
  };
  function o(R) {
    return R === a;
  }
  let u = m(e, "use", 19, () => []), l = m(e, "class", 3, ""), c = m(e, "style", 3, ""), d = m(e, "ripple", 3, !0), h = m(e, "disabled", 3, !1), f = m(e, "variant", 3, "standard"), v = m(e, "noLabel", 3, !1), p = m(e, "label", 3, void 0), g = m(e, "value", 15), y = m(e, "key", 3, (R) => R), E = m(e, "dirty", 15, !1), S = m(e, "invalid", 15, a), C = m(e, "updateInvalid", 19, () => o(S())), b = m(e, "required", 3, !1), _ = m(e, "inputId", 19, () => "SMUI-select-" + zm++), x = m(e, "hiddenInput", 3, !1), T = m(e, "withLeadingIcon", 3, a), A = m(e, "anchor$use", 19, () => []), L = m(e, "anchor$class", 3, ""), U = m(e, "selectedTextContainer$use", 19, () => []), X = m(e, "selectedTextContainer$class", 3, ""), H = m(e, "selectedText$use", 19, () => []), B = m(e, "selectedText$class", 3, ""), ye = m(e, "dropdownIcon$use", 19, () => []), V = m(e, "dropdownIcon$class", 3, ""), F = m(e, "menu$class", 3, ""), M = /* @__PURE__ */ We(e, [
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
  let ee, D = /* @__PURE__ */ Ae(void 0), I = be({}), w = be({}), te, P = be({}), j = /* @__PURE__ */ Ae(-1);
  const pe = /* @__PURE__ */ se(() => M.menu$id ?? _() + "-menu");
  let k = /* @__PURE__ */ Ae(void 0), re = ae("SMUI:addLayoutListener"), Y, de = /* @__PURE__ */ Ae(!1), oe = be({}), Qe = /* @__PURE__ */ Ae(void 0), Ze = /* @__PURE__ */ Ae(void 0), Fe = /* @__PURE__ */ Ae(!1), we, le = ae("SMUI:select:context"), Le, Je, N, q, J;
  $("SMUI:list:role", ""), $("SMUI:list:nav", !1);
  const Ce = dt("");
  $("SMUI:select:selectedText", Ce);
  const Nt = dt(g());
  Te(() => {
    pn(Nt, g());
  }), $("SMUI:select:value", Nt), Te(() => {
    s(D) && s(D).getValue() !== y()(g()) && s(D).setValue(y()(g()));
  });
  let yt = s(j);
  Te(() => {
    if (yt !== s(j))
      if (yt = s(j), s(D))
        s(D).setSelectedIndex(
          s(j),
          /* closeMenu */
          !1,
          /* skipNotify */
          !0
        );
      else {
        const R = _t();
        g() !== R[s(j)] && g(R[s(j)]);
      }
  }), Te(() => {
    s(D) && s(D).getDisabled() !== h() && s(D).setDisabled(h());
  }), Te(() => {
    s(D) && E() && s(D).isValid() !== !S() && (C() ? S(!s(D).isValid()) : s(D).setValid(!S()));
  }), Te(() => {
    s(D) && s(D).getRequired() !== b() && s(D).setRequired(b());
  }), re && (Y = re(kr)), $("SMUI:select:leading-icon:mount", (R) => {
    Le = R;
  }), $("SMUI:select:leading-icon:unmount", () => {
    Le = void 0;
  }), $("SMUI:list:mount", (R) => {
    we = R;
  }), $("SMUI:select:helper-text:id", (R) => {
    ne(k, R, !0);
  }), $("SMUI:select:helper-text:mount", (R) => {
    Je = R;
  }), $("SMUI:select:helper-text:unmount", () => {
    ne(k, void 0), Je = void 0;
  }), at(() => (ne(
    D,
    new Pm(
      {
        // getSelectAdapterMethods
        // getMenuItemAttr: (menuItem: Element, attr: string) =>
        //   menuItem.getAttribute(attr),
        setSelectedText: (R) => {
          pn(Ce, R);
        },
        isSelectAnchorFocused: () => document.activeElement === te,
        getSelectAnchorAttr: ut,
        setSelectAnchorAttr: gt,
        removeSelectAnchorAttr: Ot,
        addMenuClass: z,
        removeMenuClass: De,
        openMenu: () => {
          ne(de, !0);
        },
        closeMenu: () => {
          ne(de, !1);
        },
        getAnchorElement: () => te,
        setMenuAnchorElement: (R) => {
          ne(Qe, R, !0);
        },
        setMenuAnchorCorner: (R) => {
          ne(Ze, R, !0);
        },
        setMenuWrapFocus: (R) => {
          ne(Fe, R, !0);
        },
        getSelectedIndex: () => s(j),
        setSelectedIndex: (R) => {
          yt = R, ne(j, R, !0), g(_t()[s(j)]);
        },
        focusMenuItemAtIndex: (R) => {
          we.focusItemAtIndex(R);
        },
        getMenuItemCount: () => we.items.length,
        getMenuItemValues: () => _t().map(y()),
        getMenuItemTextAtIndex: (R) => we.getPrimaryTextAtIndex(R),
        isTypeaheadInProgress: () => we.typeaheadInProgress,
        typeaheadMatchItem: (R, fe) => we.typeaheadMatchItem(R, fe),
        // getCommonAdapterMethods
        addClass: he,
        removeClass: me,
        hasClass: bn,
        setRippleCenter: (R) => q && q.setRippleCenter(R),
        activateBottomLine: () => q && q.activate(),
        deactivateBottomLine: () => q && q.deactivate(),
        notifyChange: (R) => {
          var fe;
          E(!0), C() && S(!((fe = s(D)) != null && fe.isValid())), qe(Hn(), "SMUISelectChange", { value: g(), index: s(j) });
        },
        // getOutlineAdapterMethods
        hasOutline: () => !!J,
        notchOutline: (R) => J && J.notch(R),
        closeOutline: () => J && J.closeNotch(),
        // getLabelAdapterMethods
        hasLabel: () => !!N,
        floatLabel: (R) => N && N.float(R),
        getLabelWidth: () => N ? N.getWidth() : 0,
        setLabelRequired: (R) => N && N.setRequired(R)
      },
      {
        get helperText() {
          return Je;
        },
        get leadingIcon() {
          return Le;
        }
      }
    ),
    !0
  ), ne(j, _t().indexOf(g()), !0), s(D).init(), Bt(G), () => {
    var R;
    (R = s(D)) == null || R.destroy();
  })), Xn(() => {
    Y && Y();
  });
  function bn(R) {
    return R in I ? I[R] : Hn().classList.contains(R);
  }
  function he(R) {
    I[R] || (I[R] = !0);
  }
  function me(R) {
    (!(R in I) || I[R]) && (I[R] = !1);
  }
  function W(R, fe) {
    w[R] != fe && (fe === "" || fe == null ? delete w[R] : w[R] = fe);
  }
  function z(R) {
    oe[R] || (oe[R] = !0);
  }
  function De(R) {
    (!(R in oe) || oe[R]) && (oe[R] = !1);
  }
  function ut(R) {
    return R in P ? P[R] ?? null : Hn().getAttribute(R);
  }
  function gt(R, fe) {
    P[R] !== fe && (P[R] = fe);
  }
  function Ot(R) {
    (!(R in P) || P[R] != null) && (P[R] = void 0);
  }
  function _t() {
    return we.getOrderedList().map((R) => R.getValue());
  }
  function Yn(R) {
    const fe = R.currentTarget.getBoundingClientRect();
    return (ft(R) ? R.touches[0].clientX : R.clientX) - fe.left;
  }
  function ft(R) {
    return "touches" in R;
  }
  function Rt() {
    if (s(D) == null)
      throw new Error("Instance is undefined.");
    return s(D).getUseDefaultValidation();
  }
  function Bt(R) {
    var fe;
    (fe = s(D)) == null || fe.setUseDefaultValidation(R);
  }
  function zt() {
    te.focus();
  }
  function kr() {
    var R;
    (R = s(D)) == null || R.layout();
  }
  function Hn() {
    return ee;
  }
  var Ge = {
    getUseDefaultValidation: Rt,
    setUseDefaultValidation: Bt,
    focus: zt,
    layout: kr,
    getElement: Hn
  }, tt = Zm(), Ke = Q(tt);
  Be(Ke, (R, fe, ct) => ({ class: R, style: fe, ...ct }), [
    () => Ne({
      "mdc-select": !0,
      "mdc-select--required": b(),
      "mdc-select--disabled": h(),
      "mdc-select--filled": f() === "filled",
      "mdc-select--outlined": f() === "outlined",
      "smui-select--standard": f() === "standard",
      "mdc-select--with-leading-icon": o(T()) ? e.leadingIcon : T(),
      "mdc-select--no-label": v() || p() == null,
      "mdc-select--invalid": S(),
      "mdc-select--activated": s(de),
      "mdc-data-table__pagination-rows-per-page-select": le === "data-table:pagination",
      ...I,
      [l()]: !0
    }),
    () => Object.entries(w).map(([R, fe]) => `${R}: ${fe};`).concat([c()]).join(" "),
    () => ea(M, [
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
  var xt = Ie(Ke);
  {
    var dn = (R) => {
      var fe = Xm();
      Be(
        fe,
        (ct) => ({
          type: "hidden",
          required: b(),
          disabled: h(),
          value: g(),
          ...ct
        }),
        [() => st(M, "input$")],
        void 0,
        void 0,
        !0
      ), O(R, fe);
    };
    ue(xt, (R) => {
      x() && R(dn);
    });
  }
  var nt = _e(xt, 2), Et = (R) => {
    var fe;
    te.focus(), s(D) && s(D).handleClick(Yn(R)), (fe = e.anchor$onclick) == null || fe.call(e, R);
  }, ht = (R) => {
    var fe;
    s(D) && s(D).handleKeydown(R), (fe = e.onkeydown) == null || fe.call(e, R);
  }, $e = (R) => {
    var fe;
    s(D) && s(D).handleBlur(), qe(Hn(), "blur", R), (fe = e.anchor$onblur) == null || fe.call(e, R);
  }, Tt = (R) => {
    var fe;
    s(D) && s(D).handleFocus(), qe(Hn(), "focus", R), (fe = e.anchor$onfocus) == null || fe.call(e, R);
  };
  Be(
    nt,
    (R, fe) => ({
      class: R,
      "aria-required": b() ? "true" : void 0,
      "aria-disabled": h() ? "true" : void 0,
      "aria-controls": s(pe),
      "aria-expanded": s(de) ? "true" : "false",
      "aria-describedby": s(k),
      role: "combobox",
      tabindex: "0",
      ...P,
      ...fe,
      onclick: Et,
      onkeydown: ht,
      onblur: $e,
      onfocus: Tt
    }),
    [
      () => Ne({ "mdc-select__anchor": !0, [L()]: !0 }),
      () => st(M, "anchor$")
    ]
  );
  var Rn = Ie(nt);
  {
    var an = (R) => {
      var fe = Ym();
      O(R, fe);
    };
    ue(Rn, (R) => {
      f() === "filled" && R(an);
    });
  }
  var ot = _e(Rn, 2);
  {
    var kt = (R) => {
      {
        let fe = /* @__PURE__ */ se(() => _() + "-smui-label"), ct = /* @__PURE__ */ se(() => n() !== ""), Lt = /* @__PURE__ */ se(() => st(M, "label$"));
        xe(
          ho(R, it(
            {
              get id() {
                return s(fe);
              },
              get floatAbove() {
                return s(ct);
              },
              get required() {
                return b();
              }
            },
            () => s(Lt),
            {
              children: (Qn, Jn) => {
                var oa = ie(), mi = Q(oa);
                {
                  var jr = (qr) => {
                  }, Vo = (qr) => {
                    var Ga = ie(), sa = Q(Ga);
                    {
                      var dl = (dr) => {
                        var Wr = Kt();
                        He(() => pt(Wr, p())), O(dr, Wr);
                      }, ja = (dr) => {
                        var Wr = ie(), Go = Q(Wr);
                        Ee(Go, p), O(dr, Wr);
                      };
                      ue(
                        sa,
                        (dr) => {
                          typeof p() == "string" ? dr(dl) : dr(ja, !1);
                        },
                        !0
                      );
                    }
                    O(qr, Ga);
                  };
                  ue(mi, (qr) => {
                    p() == null ? qr(jr) : qr(Vo, !1);
                  });
                }
                O(Qn, oa);
              },
              $$slots: { default: !0 }
            }
          )),
          (Qn) => N = Qn,
          () => N
        );
      }
    };
    ue(ot, (R) => {
      f() !== "outlined" && !v() && p() != null && R(kt);
    });
  }
  var In = _e(ot, 2);
  {
    var Xt = (R) => {
      {
        let fe = /* @__PURE__ */ se(() => v() || p() == null), ct = /* @__PURE__ */ se(() => st(M, "outline$"));
        xe(
          zc(R, it(
            {
              get noLabel() {
                return s(fe);
              }
            },
            () => s(ct),
            {
              children: (Lt, Qn) => {
                var Jn = ie(), oa = Q(Jn);
                {
                  var mi = (jr) => {
                    {
                      let Vo = /* @__PURE__ */ se(() => _() + "-smui-label"), qr = /* @__PURE__ */ se(() => n() !== ""), Ga = /* @__PURE__ */ se(() => st(M, "label$"));
                      xe(
                        ho(jr, it(
                          {
                            get id() {
                              return s(Vo);
                            },
                            get floatAbove() {
                              return s(qr);
                            },
                            get required() {
                              return b();
                            }
                          },
                          () => s(Ga),
                          {
                            children: (sa, dl) => {
                              var ja = ie(), dr = Q(ja);
                              {
                                var Wr = (la) => {
                                }, Go = (la) => {
                                  var fl = ie(), wd = Q(fl);
                                  {
                                    var Od = (gi) => {
                                      var ua = Kt();
                                      He(() => pt(ua, p())), O(gi, ua);
                                    }, Rd = (gi) => {
                                      var ua = ie(), Md = Q(ua);
                                      Ee(Md, p), O(gi, ua);
                                    };
                                    ue(
                                      wd,
                                      (gi) => {
                                        typeof p() == "string" ? gi(Od) : gi(Rd, !1);
                                      },
                                      !0
                                    );
                                  }
                                  O(la, fl);
                                };
                                ue(dr, (la) => {
                                  p() == null ? la(Wr) : la(Go, !1);
                                });
                              }
                              O(sa, ja);
                            },
                            $$slots: { default: !0 }
                          }
                        )),
                        (sa) => N = sa,
                        () => N
                      );
                    }
                  };
                  ue(oa, (jr) => {
                    !v() && p() != null && jr(mi);
                  });
                }
                O(Lt, Jn);
              },
              $$slots: { default: !0 }
            }
          )),
          (Lt) => J = Lt,
          () => J
        );
      }
    };
    ue(In, (R) => {
      f() === "outlined" && R(Xt);
    });
  }
  var Vr = _e(In, 2);
  Ee(Vr, () => e.leadingIcon ?? ge);
  var yn = _e(Vr, 2);
  Be(yn, (R, fe) => ({ class: R, ...fe }), [
    () => Ne({
      "mdc-select__selected-text-container": !0,
      [X()]: !0
    }),
    () => st(M, "selectedTextContainer$")
  ]);
  var cr = Ie(yn);
  Be(
    cr,
    (R, fe) => ({
      id: _() + "-smui-selected-text",
      class: R,
      role: "button",
      "aria-haspopup": "listbox",
      "aria-labelledby": _() + "-smui-label",
      ...fe
    }),
    [
      () => Ne({
        "mdc-select__selected-text": !0,
        [B()]: !0
      }),
      () => st(M, "selectedText$")
    ]
  );
  var aa = Ie(cr);
  Ue(cr, (R, fe) => K == null ? void 0 : K(R, fe), H), Ue(yn, (R, fe) => K == null ? void 0 : K(R, fe), U);
  var _n = _e(yn, 2);
  Be(_n, (R, fe) => ({ class: R, ...fe }), [
    () => Ne({
      "mdc-select__dropdown-icon": !0,
      [V()]: !0
    }),
    () => st(M, "dropdownIcon$")
  ]), Ue(_n, (R, fe) => K == null ? void 0 : K(R, fe), ye);
  var Zn = _e(_n, 2);
  {
    var Fn = (R) => {
      {
        let fe = /* @__PURE__ */ se(() => st(M, "ripple$"));
        xe(Kc(R, it(() => s(fe))), (ct) => q = ct, () => q);
      }
    };
    ue(Zn, (R) => {
      f() !== "outlined" && d() && R(Fn);
    });
  }
  xe(nt, (R) => te = R, () => te), Ue(nt, (R, fe) => K == null ? void 0 : K(R, fe), A);
  var Gr = _e(nt, 2);
  {
    let R = /* @__PURE__ */ se(() => Ne({
      "mdc-select__menu": !0,
      ...oe,
      [F()]: !0
    })), fe = /* @__PURE__ */ se(() => st(M, "menu$"));
    Fm(Gr, it(
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
      () => s(fe),
      {
        onSMUIMenuSelected: (ct) => {
          var Lt;
          s(D) && s(D).handleMenuItemAction(ct.detail.index), (Lt = e.onSMUIMenuSelected) == null || Lt.call(e, ct);
        },
        onSMUIMenuSurfaceClosing: (ct) => {
          var Lt;
          s(D) && s(D).handleMenuClosing(), (Lt = e.onSMUIMenuSurfaceClosing) == null || Lt.call(e, ct);
        },
        onSMUIMenuSurfaceClosed: (ct) => {
          var Lt;
          s(D) && s(D).handleMenuClosed(), (Lt = e.onSMUIMenuSurfaceClosed) == null || Lt.call(e, ct);
        },
        onSMUIMenuSurfaceOpened: (ct) => {
          var Lt;
          s(D) && s(D).handleMenuOpened(), (Lt = e.onSMUIMenuSurfaceOpened) == null || Lt.call(e, ct);
        },
        get open() {
          return s(de);
        },
        set open(ct) {
          ne(de, ct, !0);
        },
        children: (ct, Lt) => {
          {
            let Qn = /* @__PURE__ */ se(() => st(M, "list$"));
            Bm(ct, it(
              {
                role: "listbox",
                get wrapFocus() {
                  return s(Fe);
                }
              },
              () => s(Qn),
              {
                get selectedIndex() {
                  return s(j);
                },
                set selectedIndex(Jn) {
                  ne(j, Jn, !0);
                },
                children: (Jn, oa) => {
                  var mi = ie(), jr = Q(mi);
                  Ee(jr, () => e.children ?? ge), O(Jn, mi);
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
  xe(Ke, (R) => ee = R, () => ee), Ue(Ke, (R, fe) => qt == null ? void 0 : qt(R, fe), () => ({
    ripple: f() === "filled",
    unbounded: !1,
    addClass: he,
    removeClass: me,
    addStyle: W
  })), Ue(Ke, (R, fe) => ns == null ? void 0 : ns(R, fe), () => ({ addClass: he, removeClass: me })), Ue(Ke, (R, fe) => K == null ? void 0 : K(R, fe), u);
  var ko = _e(Ke, 2);
  {
    var Td = (R) => {
      {
        let fe = /* @__PURE__ */ se(() => st(M, "helperText$"));
        Km(R, it(() => s(fe), {
          children: (ct, Lt) => {
            var Qn = ie(), Jn = Q(Qn);
            Ee(Jn, () => e.helperText ?? ge), O(ct, Qn);
          },
          $$slots: { default: !0 }
        }));
      }
    };
    ue(ko, (R) => {
      e.helperText && R(Td);
    });
  }
  He(() => pt(aa, n())), O(t, tt);
  var Ld = Re(Ge);
  return i(), Ld;
}
function Jm(t, e) {
  Oe(e, !0);
  const n = () => Dt(d, "$selectedValue", r), [r, i] = wn();
  let a = m(e, "use", 19, () => []);
  m(e, "class", 3, "");
  let o = m(e, "value", 3, ""), u = /* @__PURE__ */ We(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "value",
    "children"
  ]), l;
  const c = ae("SMUI:select:selectedText"), d = ae("SMUI:select:value");
  $("SMUI:list:item:role", "option");
  const h = /* @__PURE__ */ se(() => o() != null && o() !== "" && n() === o());
  at(f), Xn(f);
  function f() {
    s(h) && l && pn(c, l.getPrimaryText());
  }
  function v() {
    return l.getElement();
  }
  var p = { getElement: v };
  xe(
    jm(t, it(
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
        children: (y, E) => {
          var S = ie(), C = Q(S);
          Ee(C, () => e.children ?? ge), O(y, S);
        },
        $$slots: { default: !0 }
      }
    )),
    (y) => l = y,
    () => l
  );
  var g = Re(p);
  return i(), g;
}
function au(t, e) {
  Oe(e, !0);
  let n = m(e, "data", 19, () => []);
  m(e, "placeholder", 3, "");
  let r = m(e, "label", 3, "");
  m(e, "description", 3, "");
  let i = m(e, "value", 15), a = m(e, "required", 3, !1);
  m(e, "size", 3, "sm");
  let o = m(e, "selectedOptionIndex", 31, () => -1), u = m(e, "disabled", 3, !1);
  function l(c) {
    return () => o(c);
  }
  Qm(t, {
    get disabled() {
      return u();
    },
    key: (c) => `${c ?? ""}`,
    get label() {
      return r();
    },
    style: "width: 100%;",
    get required() {
      return a();
    },
    get value() {
      return i();
    },
    set value(c) {
      i(c);
    },
    children: (c, d) => {
      var h = ie(), f = Q(h);
      yr(f, 17, n, no, (v, p, g) => {
        {
          let y = /* @__PURE__ */ se(() => l(g));
          Jm(v, {
            get onclick() {
              return s(y);
            },
            get value() {
              return s(p).value;
            },
            children: (E, S) => {
              var C = Kt();
              He(() => pt(C, s(p).label)), O(E, C);
            },
            $$slots: { default: !0 }
          });
        }
      }), O(c, h);
    },
    $$slots: { default: !0 }
  }), Re();
}
var $m = /* @__PURE__ */ ve("<div><!></div>");
function Qc(t, e) {
  Oe(e, !0);
  let n = m(e, "use", 19, () => []), r = m(e, "class", 3, ""), i = m(e, "variant", 3, "raised"), a = m(e, "square", 3, !1), o = m(e, "color", 3, "default"), u = m(e, "elevation", 3, 1), l = m(e, "transition", 3, !1), c = /* @__PURE__ */ We(e, [
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
  var f = { getElement: h }, v = $m();
  Be(v, (g) => ({ class: g, ...c }), [
    () => Ne({
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
  var p = Ie(v);
  return Ee(p, () => e.children ?? ge), xe(v, (g) => d = g, () => d), Ue(v, (g, y) => K == null ? void 0 : K(g, y), n), O(t, v), Re(f);
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
var eg = "data-mdc-dom-announce";
function tg(t, e) {
  ng.getInstance().say(t, e);
}
var ng = (
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
      return r.style.position = "absolute", r.style.top = "-9999px", r.style.left = "-9999px", r.style.height = "1px", r.style.overflow = "hidden", r.setAttribute("aria-atomic", "true"), r.setAttribute("aria-live", e), r.setAttribute(eg, "true"), n.body.appendChild(r), r;
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
var vr;
(function(t) {
  t[t.UNSPECIFIED = 0] = "UNSPECIFIED", t[t.CLICK = 1] = "CLICK", t[t.BACKSPACE_KEY = 2] = "BACKSPACE_KEY", t[t.DELETE_KEY = 3] = "DELETE_KEY", t[t.SPACEBAR_KEY = 4] = "SPACEBAR_KEY", t[t.ENTER_KEY = 5] = "ENTER_KEY";
})(vr || (vr = {}));
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
var Jc = (
  /** @class */
  function(t) {
    et(e, t);
    function e(n) {
      return t.call(this, ce(ce({}, e.defaultAdapter), n)) || this;
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
      n.stopPropagation(), this.adapter.notifyInteraction(vr.CLICK);
    }, e.prototype.handleKeydown = function(n) {
      n.stopPropagation();
      var r = bt(n);
      if (this.shouldNotifyInteractionFromKey(r)) {
        var i = this.getTriggerFromKey(r);
        this.adapter.notifyInteraction(i);
        return;
      }
      if (Sp(n)) {
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
      return n === Me.SPACEBAR ? vr.SPACEBAR_KEY : n === Me.ENTER ? vr.ENTER_KEY : n === Me.DELETE ? vr.DELETE_KEY : n === Me.BACKSPACE ? vr.BACKSPACE_KEY : vr.UNSPECIFIED;
    }, e;
  }(Pt)
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
var $c = (
  /** @class */
  function(t) {
    et(e, t);
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
      return new Jc(r);
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
var qn;
(function(t) {
  t.LEFT = "left", t.RIGHT = "right";
})(qn || (qn = {}));
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
}, Ct = {
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
var Fr = /* @__PURE__ */ new Set();
Fr.add(Se.ARROW_UP_KEY);
Fr.add(Se.ARROW_DOWN_KEY);
Fr.add(Se.HOME_KEY);
Fr.add(Se.END_KEY);
Fr.add(Se.IE_ARROW_UP_KEY);
Fr.add(Se.IE_ARROW_DOWN_KEY);
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
var rl = (
  /** @class */
  function(t) {
    et(e, t);
    function e(n) {
      var r = t.call(this, ce(ce({}, e.defaultAdapter), n)) || this;
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
        return Ct;
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
            return ou;
          },
          getComputedStyleValue: function() {
            return "";
          },
          getRootBoundingClientRect: function() {
            return ou;
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
      return this.adapter.hasClass(Ct.SELECTED);
    }, e.prototype.isEditable = function() {
      return this.adapter.hasClass(Ct.EDITABLE);
    }, e.prototype.isEditing = function() {
      return this.adapter.hasClass(Ct.EDITING);
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
      this.adapter.addClass(Ct.CHIP_EXIT);
    }, e.prototype.handleClick = function() {
      this.adapter.notifyInteraction(), this.setPrimaryActionFocusable(this.getFocusBehavior());
    }, e.prototype.handleDoubleClick = function() {
      this.isEditable() && this.startEditing();
    }, e.prototype.handleTransitionEnd = function(n) {
      var r = this, i = this.adapter.eventTargetHasClass(n.target, Ct.CHIP_EXIT), a = n.propertyName === "width", o = n.propertyName === "opacity";
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
        var l = this.adapter.getAttribute(Se.REMOVED_ANNOUNCEMENT_ATTRIBUTE);
        this.adapter.notifyRemoval(l);
      }
      if (o) {
        var c = this.adapter.eventTargetHasClass(n.target, Ct.LEADING_ICON) && this.adapter.hasClass(Ct.SELECTED), d = this.adapter.eventTargetHasClass(n.target, Ct.CHECKMARK) && !this.adapter.hasClass(Ct.SELECTED);
        if (c) {
          this.adapter.addClassToLeadingIcon(Ct.HIDDEN_LEADING_ICON);
          return;
        }
        if (d) {
          this.adapter.removeClassFromLeadingIcon(Ct.HIDDEN_LEADING_ICON);
          return;
        }
      }
    }, e.prototype.handleFocusIn = function(n) {
      this.eventFromPrimaryAction(n) && this.adapter.addClass(Ct.PRIMARY_ACTION_FOCUSED);
    }, e.prototype.handleFocusOut = function(n) {
      this.eventFromPrimaryAction(n) && (this.isEditing() && this.finishEditing(), this.adapter.removeClass(Ct.PRIMARY_ACTION_FOCUSED));
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
      this.setPrimaryActionFocusable(xi.SHOULD_FOCUS);
    }, e.prototype.focusTrailingAction = function() {
      var n = this.adapter.isTrailingActionNavigable();
      if (n) {
        this.adapter.setPrimaryActionAttr(Se.TAB_INDEX, "-1"), this.adapter.focusTrailingAction();
        return;
      }
      this.focusPrimaryAction();
    }, e.prototype.setPrimaryActionFocusable = function(n) {
      this.adapter.setPrimaryActionAttr(Se.TAB_INDEX, "0"), n === xi.SHOULD_FOCUS && this.adapter.focusPrimaryAction(), this.adapter.removeTrailingActionFocus();
    }, e.prototype.getFocusBehavior = function() {
      return this.shouldFocusPrimaryActionOnClick ? xi.SHOULD_FOCUS : xi.SHOULD_NOT_FOCUS;
    }, e.prototype.focusNextAction = function(n, r) {
      var i = this.adapter.isTrailingActionNavigable(), a = this.getDirection(n);
      if (Fr.has(n) || !i) {
        this.adapter.notifyNavigation(n, r);
        return;
      }
      if (r === ir.PRIMARY && a === qn.RIGHT) {
        this.focusTrailingAction();
        return;
      }
      if (r === ir.TRAILING && a === qn.LEFT) {
        this.focusPrimaryAction();
        return;
      }
      this.adapter.notifyNavigation(n, ir.NONE);
    }, e.prototype.getDirection = function(n) {
      var r = this.adapter.isRTL(), i = n === Se.ARROW_LEFT_KEY || n === Se.IE_ARROW_LEFT_KEY, a = n === Se.ARROW_RIGHT_KEY || n === Se.IE_ARROW_RIGHT_KEY;
      return !r && i || r && a ? qn.LEFT : qn.RIGHT;
    }, e.prototype.removeChip = function() {
      this.shouldRemoveOnTrailingIconClick && this.beginExit();
    }, e.prototype.shouldStartEditing = function(n) {
      return this.eventFromPrimaryAction(n) && n.key === Se.ENTER_KEY;
    }, e.prototype.shouldFinishEditing = function(n) {
      return n.key === Se.ENTER_KEY;
    }, e.prototype.shouldNotifyInteraction = function(n) {
      return n.key === Se.ENTER_KEY || n.key === Se.SPACEBAR_KEY;
    }, e.prototype.isDeleteAction = function(n) {
      var r = this.adapter.hasClass(Ct.DELETABLE);
      return r && (n.key === Se.BACKSPACE_KEY || n.key === Se.DELETE_KEY || n.key === Se.IE_DELETE_KEY);
    }, e.prototype.setSelectedImpl = function(n) {
      n ? (this.adapter.addClass(Ct.SELECTED), this.adapter.setPrimaryActionAttr(Se.ARIA_CHECKED, "true")) : (this.adapter.removeClass(Ct.SELECTED), this.adapter.setPrimaryActionAttr(Se.ARIA_CHECKED, "false"));
    }, e.prototype.notifySelection = function(n) {
      this.adapter.notifySelection(n, !1);
    }, e.prototype.notifyIgnoredSelection = function(n) {
      this.adapter.notifySelection(n, !0);
    }, e.prototype.eventFromPrimaryAction = function(n) {
      return this.adapter.eventTargetHasClass(n.target, Ct.PRIMARY_ACTION);
    }, e.prototype.startEditing = function() {
      this.adapter.addClass(Ct.EDITING), this.adapter.notifyEditStart();
    }, e.prototype.finishEditing = function() {
      this.adapter.removeClass(Ct.EDITING), this.adapter.notifyEditFinish();
    }, e;
  }(Pt)
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
var ed = (
  /** @class */
  function(t) {
    et(e, t);
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
        return new $c(u);
      }), this.leadingIcon = this.root.querySelector(Se.LEADING_ICON_SELECTOR), this.checkmark = this.root.querySelector(Se.CHECKMARK_SELECTOR), this.primaryAction = this.root.querySelector(Se.PRIMARY_ACTION_SELECTOR);
      var a = this.root.querySelector(Se.TRAILING_ACTION_SELECTOR);
      a && (this.trailingAction = r(a));
      var o = ce(ce({}, fo.createAdapter(this)), { computeBoundingRect: function() {
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
      return new rl(r);
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
var td = {
  CHIP_SELECTOR: ".mdc-chip"
}, ya = {
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
var il = (
  /** @class */
  function(t) {
    et(e, t);
    function e(n) {
      var r = t.call(this, ce(ce({}, e.defaultAdapter), n)) || this;
      return r.selectedChipIds = [], r;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return td;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return ya;
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
      this.removeFocusFromChipsExcept(i), (this.adapter.hasClass(ya.CHOICE) || this.adapter.hasClass(ya.FILTER)) && this.toggleSelect(r);
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
        var l = this.adapter.isRTL(), c = i === Se.ARROW_LEFT_KEY || i === Se.IE_ARROW_LEFT_KEY, d = i === Se.ARROW_RIGHT_KEY || i === Se.IE_ARROW_RIGHT_KEY, h = i === Se.ARROW_DOWN_KEY || i === Se.IE_ARROW_DOWN_KEY, f = !l && d || l && c || h, v = i === Se.HOME_KEY, p = i === Se.END_KEY;
        f ? u++ : v ? u = 0 : p ? u = o : u--, !(u < 0 || u > o) && (this.removeFocusFromChipsExcept(u), this.focusChipAction(u, i, a));
      }
    }, e.prototype.focusChipAction = function(n, r, i) {
      var a = Fr.has(r);
      if (a && i === ir.PRIMARY)
        return this.adapter.focusChipPrimaryActionAtIndex(n);
      if (a && i === ir.TRAILING)
        return this.adapter.focusChipTrailingActionAtIndex(n);
      var o = this.getDirection(r);
      if (o === qn.LEFT)
        return this.adapter.focusChipTrailingActionAtIndex(n);
      if (o === qn.RIGHT)
        return this.adapter.focusChipPrimaryActionAtIndex(n);
    }, e.prototype.getDirection = function(n) {
      var r = this.adapter.isRTL(), i = n === Se.ARROW_LEFT_KEY || n === Se.IE_ARROW_LEFT_KEY, a = n === Se.ARROW_RIGHT_KEY || n === Se.IE_ARROW_RIGHT_KEY;
      return !r && i || r && a ? qn.LEFT : qn.RIGHT;
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
        if (this.adapter.hasClass(ya.CHOICE) && this.selectedChipIds.length > 0) {
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
  }(Pt)
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
var Uo = rl.strings, su = Uo.INTERACTION_EVENT, lu = Uo.SELECTION_EVENT, uu = Uo.REMOVAL_EVENT, cu = Uo.NAVIGATION_EVENT, rg = il.strings.CHIP_SELECTOR, du = 0, ig = (
  /** @class */
  function(t) {
    et(e, t);
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
        return new ed(r);
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
      }, this.listen(su, this.handleChipInteraction), this.listen(lu, this.handleChipSelection), this.listen(uu, this.handleChipRemoval), this.listen(cu, this.handleChipNavigation);
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
      this.unlisten(su, this.handleChipInteraction), this.unlisten(lu, this.handleChipSelection), this.unlisten(uu, this.handleChipRemoval), this.unlisten(cu, this.handleChipNavigation), t.prototype.destroy.call(this);
    }, e.prototype.addChip = function(n) {
      n.id = n.id || "mdc-chip-" + ++du, this.chipsList.push(this.chipFactory(n));
    }, e.prototype.getDefaultFoundation = function() {
      var n = this, r = {
        announceMessage: function(i) {
          tg(i);
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
      return new il(r);
    }, e.prototype.instantiateChips = function(n) {
      var r = [].slice.call(this.root.querySelectorAll(rg));
      return r.map(function(i) {
        return i.id = i.id || "mdc-chip-" + ++du, n(i);
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
const al = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  MDCChip: ed,
  MDCChipFoundation: rl,
  MDCChipSet: ig,
  MDCChipSetFoundation: il,
  MDCChipTrailingAction: $c,
  MDCChipTrailingActionFoundation: Jc,
  chipCssClasses: Ct,
  chipSetCssClasses: ya,
  chipSetStrings: td,
  chipStrings: Se,
  trailingActionStrings: Nn
}, Symbol.toStringTag, { value: "Module" }));
var ag = /* @__PURE__ */ ve('<div class="mdc-chip__ripple"></div>'), og = /* @__PURE__ */ ve('<div class="mdc-chip__touch"></div>'), sg = /* @__PURE__ */ ve("<!> <!> <!>", 1);
function lg(t, e) {
  Oe(e, !0);
  const n = () => Dt(A, "$initialSelectedStore", o), r = () => Dt(B, "$choice", o), i = () => Dt(ye, "$index", o), a = () => Dt(H, "$nonInteractive", o), [o, u] = wn(), { MDCChipFoundation: l } = al;
  let c = m(e, "use", 19, () => []), d = m(e, "class", 3, ""), h = m(e, "style", 3, ""), f = m(e, "ripple", 3, !0), v = m(e, "touch", 3, !1), p = m(e, "shouldRemoveOnTrailingIconClick", 3, !0), g = m(e, "shouldFocusPrimaryActionOnClick", 3, !0), y = m(e, "component", 3, Hr), E = m(e, "tag", 3, "div"), S = /* @__PURE__ */ We(e, [
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
  ]), C, b = /* @__PURE__ */ Ae(void 0), _ = be({}), x = be({}), T = be({});
  const A = ae("SMUI:chips:chip:initialSelected");
  let L = /* @__PURE__ */ Ae(be(n())), U, X;
  const H = ae("SMUI:chips:nonInteractive"), B = ae("SMUI:chips:choice"), ye = ae("SMUI:chips:chip:index"), V = dt(p());
  Te(() => {
    pn(V, p());
  }), $("SMUI:chips:chip:shouldRemoveOnTrailingIconClick", V);
  const F = dt(s(L));
  Te(() => {
    pn(F, s(L));
  }), $("SMUI:chips:chip:isSelected", F);
  const M = dt(x);
  Te(() => {
    pn(M, x);
  }), $("SMUI:chips:chip:leadingIconClasses", M), $("SMUI:chips:chip:focusable", r() && s(L) || i() === 0), Te(() => {
    s(b) && s(b).getShouldRemoveOnTrailingIconClick() !== p() && s(b).setShouldRemoveOnTrailingIconClick(p());
  }), Te(() => {
    s(b) && s(b).setShouldFocusPrimaryActionOnClick(g());
  }), $("SMUI:chips:primary-action:mount", (le) => {
    U = le;
  }), $("SMUI:chips:primary-action:unmount", () => {
    U = void 0;
  }), $("SMUI:chips:trailing-action:mount", (le) => {
    X = le;
  }), $("SMUI:chips:trailing-action:unmount", () => {
    X = void 0;
  });
  const G = ae("SMUI:chips:chip:mount"), ee = ae("SMUI:chips:chip:unmount");
  at(() => {
    ne(
      b,
      new l({
        addClass: I,
        addClassToLeadingIcon: te,
        eventTargetHasClass: (Le, Je) => Le && "classList" in Le ? Le.classList.contains(Je) : !1,
        focusPrimaryAction: () => {
          U && U.focus();
        },
        focusTrailingAction: () => {
          X && X.focus();
        },
        getAttribute: (Le) => oe().getAttribute(Le),
        getCheckmarkBoundingClientRect: () => {
          const Le = oe().querySelector(".mdc-chip__checkmark");
          return Le ? Le.getBoundingClientRect() : null;
        },
        getComputedStyleValue: pe,
        getRootBoundingClientRect: () => oe().getBoundingClientRect(),
        hasClass: D,
        hasLeadingIcon: () => !!oe().querySelector(".mdc-chip__icon--leading"),
        isRTL: () => getComputedStyle(oe()).getPropertyValue("direction") === "rtl",
        isTrailingActionNavigable: () => X ? X.isNavigable() : !1,
        notifyInteraction: () => qe(oe(), "SMUIChipInteraction", { chipId: e.chip }),
        notifyNavigation: (Le, Je) => qe(oe(), "SMUIChipNavigation", { chipId: e.chip, key: Le, source: Je }),
        notifyRemoval: (Le) => qe(oe(), "SMUIChipRemoval", { chipId: e.chip, removedAnnouncement: Le }),
        notifySelection: (Le, Je) => qe(oe(), "SMUIChipSelection", { chipId: e.chip, selected: Le, shouldIgnore: Je }),
        notifyTrailingIconInteraction: () => qe(oe(), "SMUIChipTrailingIconInteraction", { chipId: e.chip }),
        notifyEditStart: () => {
        },
        notifyEditFinish: () => {
        },
        removeClass: w,
        removeClassFromLeadingIcon: P,
        removeTrailingActionFocus: () => {
          X && X.removeFocus();
        },
        setPrimaryActionAttr: (Le, Je) => {
          U && U.addAttr(Le, Je);
        },
        setStyleProperty: j
      }),
      !0
    );
    const le = {
      chipId: e.chip,
      get selected() {
        return s(L);
      },
      focusPrimaryAction: re,
      focusTrailingAction: Y,
      removeFocus: de,
      setSelectedFromChipSet: k
    };
    return G && G(le), s(b).init(), () => {
      var Le;
      ee && ee(le), (Le = s(b)) == null || Le.destroy();
    };
  });
  function D(le) {
    return le in _ ? _[le] : oe().classList.contains(le);
  }
  function I(le) {
    _[le] || (_[le] = !0);
  }
  function w(le) {
    (!(le in _) || _[le]) && (_[le] = !1);
  }
  function te(le) {
    x[le] || (x[le] = !0);
  }
  function P(le) {
    (!(le in x) || x[le]) && (x[le] = !1);
  }
  function j(le, Le) {
    T[le] != Le && (Le === "" || Le == null ? delete T[le] : T[le] = Le);
  }
  function pe(le) {
    return le in T ? T[le] : getComputedStyle(oe()).getPropertyValue(le);
  }
  function k(le, Le) {
    var Je;
    ne(L, le, !0), (Je = s(b)) == null || Je.setSelectedFromChipSet(s(L), Le);
  }
  function re() {
    var le;
    (le = s(b)) == null || le.focusPrimaryAction();
  }
  function Y() {
    var le;
    (le = s(b)) == null || le.focusTrailingAction();
  }
  function de() {
    var le;
    (le = s(b)) == null || le.removeFocus();
  }
  function oe() {
    return C.getElement();
  }
  var Qe = { getElement: oe }, Ze = ie(), Fe = Q(Ze);
  {
    let le = /* @__PURE__ */ se(() => [
      [
        qt,
        {
          ripple: f() && !a(),
          unbounded: !1,
          addClass: I,
          removeClass: w,
          addStyle: j
        }
      ],
      ...c()
    ]), Le = /* @__PURE__ */ se(() => Ne({
      "mdc-chip": !0,
      "mdc-chip--selected": s(L),
      "mdc-chip--touch": v(),
      ..._,
      [d()]: !0
    })), Je = /* @__PURE__ */ se(() => Object.entries(T).map(([N, q]) => `${N}: ${q};`).concat([h()]).join(" "));
    Nr(Fe, y, (N, q) => {
      xe(
        q(N, it(
          {
            get tag() {
              return E();
            },
            get use() {
              return s(le);
            },
            get class() {
              return s(Le);
            },
            get style() {
              return s(Je);
            },
            role: "row"
          },
          () => S,
          {
            ontransitionend: (J) => {
              var Ce;
              s(b) && s(b).handleTransitionEnd(J), (Ce = e.ontransitionend) == null || Ce.call(e, J);
            },
            onclick: (J) => {
              var Ce;
              s(b) && s(b).handleClick(), (Ce = e.onclick) == null || Ce.call(e, J);
            },
            onkeydown: (J) => {
              var Ce;
              s(b) && s(b).handleKeydown(J), (Ce = e.onkeydown) == null || Ce.call(e, J);
            },
            onfocusin: (J) => {
              var Ce;
              s(b) && s(b).handleFocusIn(J), (Ce = e.onfocusin) == null || Ce.call(e, J);
            },
            onfocusout: (J) => {
              var Ce;
              s(b) && s(b).handleFocusOut(J), (Ce = e.onfocusout) == null || Ce.call(e, J);
            },
            onSMUIChipTrailingActionInteraction: (J) => {
              var Ce;
              s(b) && s(b).handleTrailingActionInteraction(), (Ce = e.onSMUIChipTrailingActionInteraction) == null || Ce.call(e, J);
            },
            onSMUIChipTrailingActionNavigation: (J) => {
              var Ce;
              s(b) && s(b).handleTrailingActionNavigation(J), (Ce = e.onSMUIChipTrailingActionNavigation) == null || Ce.call(e, J);
            },
            children: (J, Ce) => {
              var Nt = sg(), yt = Q(Nt);
              {
                var bn = (z) => {
                  var De = ag();
                  O(z, De);
                };
                ue(yt, (z) => {
                  f() && !a() && z(bn);
                });
              }
              var he = _e(yt, 2);
              Ee(he, () => e.children ?? ge);
              var me = _e(he, 2);
              {
                var W = (z) => {
                  var De = og();
                  O(z, De);
                };
                ue(me, (z) => {
                  v() && z(W);
                });
              }
              O(J, Nt);
            },
            $$slots: { default: !0 }
          }
        )),
        (J) => C = J,
        () => C
      );
    });
  }
  O(t, Ze);
  var we = Re(Qe);
  return u(), we;
}
var ug = /* @__PURE__ */ ve("<div></div>");
function cg(t, e) {
  Oe(e, !0);
  const [n, r] = wn(), { MDCChipSetFoundation: i } = al;
  let a = m(e, "use", 19, () => []), o = m(e, "class", 3, ""), u = m(e, "chips", 27, () => be([])), l = m(e, "key", 3, (P) => `${P}`), c = m(e, "selected", 15), d = m(e, "nonInteractive", 3, !1), h = m(e, "choice", 3, !1), f = m(e, "filter", 3, !1), v = m(e, "input", 3, !1), p = /* @__PURE__ */ We(e, [
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
  let g, y = /* @__PURE__ */ Ae(void 0), E = {}, S = /* @__PURE__ */ new WeakMap(), C = u().map((P) => h() && c() != null && l()(c()) === l()(P) || f() && c() != null && c().findIndex((j) => l()(j) === l()(P)) !== -1);
  $("SMUI:chips:key", l());
  const b = dt(d());
  Te(() => {
    pn(b, d());
  }), $("SMUI:chips:nonInteractive", b);
  const _ = dt(h());
  Te(() => {
    pn(_, h());
  }), $("SMUI:chips:choice", _);
  const x = dt(f());
  Te(() => {
    pn(x, f());
  }), $("SMUI:chips:filter", x);
  let T = f() ? new Set(c() ?? []) : c();
  Te(() => {
    if (s(y) && h() && T !== c()) {
      const P = T;
      T = c(), c() != null ? s(y).select(l()(c())) : s(y).handleChipSelection({
        chipId: l()(P),
        selected: !1,
        shouldIgnore: !1
      });
    }
  }), Te(() => {
    if (s(y) && f()) {
      const P = new Set(c() ?? []), j = A(T, P), pe = A(P, T);
      if (j.size || pe.size) {
        T = P;
        for (let k of j)
          u().findIndex((re) => l()(re) === l()(k)) !== -1 && s(y).handleChipSelection({ chipId: l()(k), selected: !1, shouldIgnore: !1 });
        for (let k of pe)
          s(y).handleChipSelection({ chipId: l()(k), selected: !0, shouldIgnore: !1 });
      }
    }
  });
  function A(P, j) {
    let pe = new Set(P);
    for (let k of j)
      pe.delete(k);
    return pe;
  }
  $("SMUI:chips:chip:mount", (P) => {
    ye(P.chipId, P);
  }), $("SMUI:chips:chip:unmount", (P) => {
    V(P.chipId);
  }), at(() => {
    if (ne(
      y,
      new i({
        announceMessage: bp,
        focusChipPrimaryActionAtIndex: (P) => {
          var j;
          (j = B(u()[P])) == null || j.focusPrimaryAction();
        },
        focusChipTrailingActionAtIndex: (P) => {
          var j;
          (j = B(u()[P])) == null || j.focusTrailingAction();
        },
        getChipListCount: () => u().length,
        getIndexOfChipById: (P) => u().findIndex((j) => l()(j) === P),
        hasClass: (P) => F().classList.contains(P),
        isRTL: () => getComputedStyle(F()).getPropertyValue("direction") === "rtl",
        removeChipAtIndex: (P) => {
          if (P >= 0 && P < u().length) {
            const j = l()(u()[P]);
            if (h() && c() != null && l()(c()) === j)
              c(void 0);
            else if (f() && c() != null) {
              const pe = c().findIndex((k) => l()(k) === j);
              pe !== -1 && c().splice(pe, 1);
            }
            u().splice(P, 1);
          }
        },
        removeFocusFromChipAtIndex: (P) => {
          var j;
          (j = B(u()[P])) == null || j.removeFocus();
        },
        selectChipAtIndex: (P, j, pe) => {
          var k;
          if (P >= 0 && P < u().length) {
            if (f()) {
              c() == null && c([]);
              const re = l()(u()[P]), Y = c().findIndex((de) => l()(de) === re);
              j && Y === -1 ? c().push(u()[P]) : !j && Y !== -1 && c().splice(Y, 1);
            } else h() && (j || l()(c()) === l()(u()[P])) && c(j ? u()[P] : void 0);
            (k = B(u()[P])) == null || k.setSelectedFromChipSet(j, pe);
          }
        }
      }),
      !0
    ), s(y).init(), h() && c() != null)
      s(y).select(l()(c()));
    else if (f() && c() != null && c().length)
      for (const P of c())
        s(y).select(l()(P));
    return () => {
      var P;
      (P = s(y)) == null || P.destroy();
    };
  });
  function L(P) {
    s(y) && s(y).handleChipInteraction({ chipId: l()(P.detail.chipId) });
  }
  function U(P) {
    s(y) && s(y).handleChipSelection({
      chipId: l()(P.detail.chipId),
      selected: P.detail.selected,
      shouldIgnore: P.detail.shouldIgnore
    });
  }
  function X(P) {
    s(y) && s(y).handleChipRemoval({
      chipId: l()(P.detail.chipId),
      removedAnnouncement: P.detail.removedAnnouncement
    });
  }
  function H(P) {
    s(y) && s(y).handleChipNavigation({
      chipId: l()(P.detail.chipId),
      key: P.detail.key,
      source: P.detail.source
    });
  }
  function B(P) {
    return P instanceof Object ? S.get(P) : E[P];
  }
  function ye(P, j) {
    P instanceof Object ? S.set(P, j) : E[P] = j;
  }
  function V(P) {
    P instanceof Object ? S.delete(P) : delete E[P];
  }
  function F() {
    return g;
  }
  var M = { getElement: F }, G = ug(), ee = (P) => {
    var j;
    L(P), (j = e.onSMUIChipInteraction) == null || j.call(e, P);
  }, D = (P) => {
    var j;
    U(P), (j = e.onSMUIChipSelection) == null || j.call(e, P);
  }, I = (P) => {
    var j;
    X(P), (j = e.onSMUIChipRemoval) == null || j.call(e, P);
  }, w = (P) => {
    var j;
    H(P), (j = e.onSMUIChipNavigation) == null || j.call(e, P);
  };
  Be(
    G,
    (P) => ({
      class: P,
      role: "grid",
      ...p,
      onSMUIChipInteraction: ee,
      onSMUIChipSelection: D,
      onSMUIChipRemoval: I,
      onSMUIChipNavigation: w
    }),
    [
      () => Ne({
        "mdc-chip-set": !0,
        "smui-chip-set--non-interactive": d(),
        "mdc-chip-set--choice": h(),
        "mdc-chip-set--filter": f(),
        "mdc-chip-set--input": v(),
        [o()]: !0
      })
    ]
  ), yr(G, 23, u, (P) => l()(P), (P, j, pe) => {
    Ci(P, {
      key: "SMUI:chips:chip:index",
      get value() {
        return s(pe);
      },
      children: (k, re) => {
        Ci(k, {
          key: "SMUI:chips:chip:initialSelected",
          get value() {
            return C[s(pe)];
          },
          children: (Y, de) => {
            var oe = ie(), Qe = Q(oe);
            Ee(Qe, () => e.chip, () => s(j)), O(Y, oe);
          },
          $$slots: { default: !0 }
        });
      },
      $$slots: { default: !0 }
    });
  }), xe(G, (P) => g = P, () => g), Ue(G, (P, j) => K == null ? void 0 : K(P, j), a), O(t, G);
  var te = Re(M);
  return r(), te;
}
var dg = /* @__PURE__ */ un('<svg class="mdc-chip__checkmark-svg" viewBox="-2 -3 30 30"><path class="mdc-chip__checkmark-path" fill="none" stroke="black" d="M1.73,12.91 8.1,19.28 22.79,4.59"></path></svg>'), fg = /* @__PURE__ */ ve("<span><!></span>");
function hg(t, e) {
  Oe(e, !0);
  let n = m(e, "use", 19, () => []), r = m(e, "class", 3, ""), i = /* @__PURE__ */ We(e, [
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
  var u = { getElement: o }, l = fg();
  Be(l, (f) => ({ class: f, ...i }), [
    () => Ne({ "mdc-chip__checkmark": !0, [r()]: !0 })
  ]);
  var c = Ie(l);
  {
    var d = (f) => {
      var v = ie(), p = Q(v);
      Ee(p, () => e.children ?? ge), O(f, v);
    }, h = (f) => {
      var v = dg();
      O(f, v);
    };
    ue(c, (f) => {
      e.children ? f(d) : f(h, !1);
    });
  }
  return xe(l, (f) => a = f, () => a), Ue(l, (f, v) => K == null ? void 0 : K(f, v), n), O(t, l), Re(u);
}
var vg = /* @__PURE__ */ ve("<span><!></span>"), pg = /* @__PURE__ */ ve("<span><span><!></span></span>"), mg = /* @__PURE__ */ ve("<!> <span><!></span>", 1);
function gg(t, e) {
  Oe(e, !0);
  const n = () => Dt(S, "$filter", o), r = () => Dt(E, "$choice", o), i = () => Dt(y, "$nonInteractive", o), a = () => Dt(C, "$isSelected", o), [o, u] = wn();
  let l = m(e, "use", 19, () => []), c = m(e, "class", 3, ""), d = m(e, "tabindex", 19, () => ae("SMUI:chips:chip:focusable") ? 0 : -1), h = /* @__PURE__ */ We(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "tabindex",
    "children",
    "checkbox"
  ]), f, v, p, g = be({});
  const y = ae("SMUI:chips:nonInteractive"), E = ae("SMUI:chips:choice"), S = ae("SMUI:chips:filter"), C = ae("SMUI:chips:chip:isSelected"), b = /* @__PURE__ */ se(() => ({
    role: n() ? "checkbox" : r() ? "radio" : "button",
    tabindex: d()
  })), _ = ae("SMUI:chips:primary-action:mount"), x = ae("SMUI:chips:primary-action:unmount");
  at(() => {
    let I = { focus: L, addAttr: T };
    return _ && _(I), () => {
      x && x(I);
    };
  });
  function T(I, w) {
    g[I] !== w && (g[I] = w);
  }
  function A(I) {
    g.tabindex !== X().getAttribute("tabindex") ? wo().then(I) : I();
  }
  function L() {
    A(() => {
      p && p.focus();
    });
  }
  function U() {
    return v && v.getElement();
  }
  function X() {
    return f;
  }
  var H = { focus: L, getInput: U, getElement: X }, B = mg(), ye = Q(B);
  {
    var V = (I) => {
      {
        let w = /* @__PURE__ */ se(() => st(h, "checkmark$"));
        xe(
          hg(I, it(
            {
              get children() {
                return e.checkbox;
              }
            },
            () => s(w)
          )),
          (te) => v = te,
          () => v
        );
      }
    };
    ue(ye, (I) => {
      n() && I(V);
    });
  }
  var F = _e(ye, 2);
  Be(F, (I) => ({ role: "gridcell", ...I }), [() => st(h, "container$")]);
  var M = Ie(F);
  {
    var G = (I) => {
      var w = vg();
      Be(w, (P) => ({ class: "mdc-chip__text", ...P }), [() => st(h, "text$")]);
      var te = Ie(w);
      Ee(te, () => e.children ?? ge), O(I, w);
    }, ee = (I) => {
      var w = pg();
      Be(
        w,
        (j, pe) => ({
          class: j,
          ...n() || r() ? { "aria-selected": a() ? "true" : "false" } : {},
          ...s(b),
          ...g,
          ...pe
        }),
        [
          () => Ne({ "mdc-chip__primary-action": !0, [c()]: !0 }),
          () => ea(h, ["checkmark$", "container$", "text$"])
        ]
      );
      var te = Ie(w);
      Be(te, (j) => ({ class: "mdc-chip__text", ...j }), [() => st(h, "text$")]);
      var P = Ie(te);
      Ee(P, () => e.children ?? ge), xe(w, (j) => p = j, () => p), O(I, w);
    };
    ue(M, (I) => {
      i() ? I(G) : I(ee, !1);
    });
  }
  xe(F, (I) => f = I, () => f), Ue(F, (I, w) => K == null ? void 0 : K(I, w), l), O(t, B);
  var D = Re(H);
  return u(), D;
}
var bg = /* @__PURE__ */ ve('<span class="mdc-deprecated-chip-trailing-action__touch"></span>'), Ig = /* @__PURE__ */ ve('<button><span class="mdc-deprecated-chip-trailing-action__ripple"></span> <!> <span><!></span></button>');
function yg(t, e) {
  Oe(e, !0);
  const { MDCChipTrailingActionFoundation: n } = al;
  let r = m(e, "use", 19, () => []), i = m(e, "class", 3, ""), a = m(e, "style", 3, ""), o = m(e, "ripple", 3, !0), u = m(e, "touch", 3, !1), l = m(e, "nonNavigable", 3, !1), c = m(e, "icon$use", 19, () => []), d = m(e, "icon$class", 3, ""), h = /* @__PURE__ */ We(e, [
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
  ]), f, v = /* @__PURE__ */ Ae(void 0), p = be({}), g = be({}), y = be({});
  const E = ae("SMUI:chips:trailing-action:mount"), S = ae("SMUI:chips:trailing-action:unmount");
  at(() => {
    ne(
      v,
      new n({
        focus: () => {
          const w = H();
          A(() => {
            w.focus();
          });
        },
        getAttribute: x,
        notifyInteraction: (w) => qe(H(), "SMUIChipTrailingActionInteraction", { trigger: w }),
        notifyNavigation: (w) => qe(H(), "SMUIChipTrailingActionNavigation", { key: w }),
        setAttribute: T
      }),
      !0
    );
    const I = { isNavigable: L, focus: U, removeFocus: X };
    return E && E(I), s(v).init(), () => {
      var w;
      S && S(I), (w = s(v)) == null || w.destroy();
    };
  });
  function C(I) {
    p[I] || (p[I] = !0);
  }
  function b(I) {
    (!(I in p) || p[I]) && (p[I] = !1);
  }
  function _(I, w) {
    g[I] != w && (w === "" || w == null ? delete g[I] : g[I] = w);
  }
  function x(I) {
    return I in y ? y[I] ?? null : H().getAttribute(I);
  }
  function T(I, w) {
    y[I] !== w && (y[I] = w);
  }
  function A(I) {
    y.tabindex !== H().getAttribute("tabindex") ? wo().then(I) : I();
  }
  function L() {
    if (s(v) == null)
      throw new Error("Instance is undefined.");
    return s(v).isNavigable();
  }
  function U() {
    var I;
    (I = s(v)) == null || I.focus();
  }
  function X() {
    var I;
    (I = s(v)) == null || I.removeFocus();
  }
  function H() {
    return f;
  }
  var B = { isNavigable: L, focus: U, removeFocus: X, getElement: H }, ye = Ig(), V = (I) => {
    var w;
    s(v) && s(v).handleClick(I), (w = e.onclick) == null || w.call(e, I);
  }, F = (I) => {
    var w;
    s(v) && s(v).handleKeydown(I), (w = e.onkeydown) == null || w.call(e, I);
  };
  Be(
    ye,
    (I, w, te) => ({
      type: "button",
      class: I,
      style: w,
      "aria-hidden": l() ? "true" : void 0,
      tabindex: "-1",
      ...y,
      ...te,
      onclick: V,
      onkeydown: F
    }),
    [
      () => Ne({
        "mdc-deprecated-chip-trailing-action": !0,
        ...p,
        [i()]: !0
      }),
      () => Object.entries(g).map(([I, w]) => `${I}: ${w};`).concat([a()]).join(" "),
      () => ea(h, ["icon$"])
    ]
  );
  var M = _e(Ie(ye), 2);
  {
    var G = (I) => {
      var w = bg();
      O(I, w);
    };
    ue(M, (I) => {
      u() && I(G);
    });
  }
  var ee = _e(M, 2);
  Be(ee, (I, w) => ({ class: I, ...w }), [
    () => Ne({
      "mdc-deprecated-chip-trailing-action__icon": !0,
      [d()]: !0
    }),
    () => st(h, "icon$")
  ]);
  var D = Ie(ee);
  return Ee(D, () => e.children ?? ge), Ue(ee, (I, w) => K == null ? void 0 : K(I, w), c), xe(ye, (I) => f = I, () => f), Ue(ye, (I, w) => qt == null ? void 0 : qt(I, w), () => ({
    ripple: o(),
    unbounded: !1,
    addClass: C,
    removeClass: b,
    addStyle: _
  })), Ue(ye, (I, w) => K == null ? void 0 : K(I, w), r), O(t, ye), Re(B);
}
const Ut = [];
for (let t = 0; t < 256; ++t)
  Ut.push((t + 256).toString(16).slice(1));
function _g(t, e = 0) {
  return (Ut[t[e + 0]] + Ut[t[e + 1]] + Ut[t[e + 2]] + Ut[t[e + 3]] + "-" + Ut[t[e + 4]] + Ut[t[e + 5]] + "-" + Ut[t[e + 6]] + Ut[t[e + 7]] + "-" + Ut[t[e + 8]] + Ut[t[e + 9]] + "-" + Ut[t[e + 10]] + Ut[t[e + 11]] + Ut[t[e + 12]] + Ut[t[e + 13]] + Ut[t[e + 14]] + Ut[t[e + 15]]).toLowerCase();
}
let rs;
const Eg = new Uint8Array(16);
function Ag() {
  if (!rs) {
    if (typeof crypto > "u" || !crypto.getRandomValues)
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    rs = crypto.getRandomValues.bind(crypto);
  }
  return rs(Eg);
}
const Cg = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), fu = { randomUUID: Cg };
function pr(t, e, n) {
  var i;
  if (fu.randomUUID && !e && !t)
    return fu.randomUUID();
  t = t || {};
  const r = t.random ?? ((i = t.rng) == null ? void 0 : i.call(t)) ?? Ag();
  if (r.length < 16)
    throw new Error("Random bytes length must be >= 16");
  if (r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, e) {
    if (n = n || 0, n < 0 || n + 16 > e.length)
      throw new RangeError(`UUID byte range ${n}:${n + 15} is out of buffer bounds`);
    for (let a = 0; a < 16; ++a)
      e[n + a] = r[a];
    return e;
  }
  return _g(r);
}
var Sg = /* @__PURE__ */ ve('<span class="oscd-icon"><!></span>');
function ur(t, e) {
  var n = Sg(), r = Ie(n);
  Ee(r, () => e.children ?? ge), O(t, n);
}
var xg = /* @__PURE__ */ un('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"></path></svg>');
function Tg(t, e) {
  let n = m(e, "svgStyles", 3, "");
  ur(t, {
    children: (r, i) => {
      var a = xg();
      He(() => tn(a, n())), O(r, a);
    }
  });
}
var Lg = /* @__PURE__ */ un('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="24px"><path d="m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"></path></svg>');
function nd(t, e) {
  let n = m(e, "svgStyles", 3, "");
  ur(t, {
    children: (r, i) => {
      var a = Lg();
      He(() => tn(a, n())), O(r, a);
    }
  });
}
var wg = /* @__PURE__ */ un('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z"></path></svg>');
function Og(t, e) {
  let n = m(e, "svgStyles", 3, "");
  ur(t, {
    children: (r, i) => {
      var a = wg();
      He(() => tn(a, n())), O(r, a);
    }
  });
}
var Rg = /* @__PURE__ */ un('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="m590-160 80 80H240q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h360l200 240v480q0 20-8.5 36.5T768-96L560-302q-17 11-37 16.5t-43 5.5q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 23-5.5 43T618-360l102 104v-356L562-800H240v640h350ZM480-360q33 0 56.5-23.5T560-440q0-33-23.5-56.5T480-520q-33 0-56.5 23.5T400-440q0 33 23.5 56.5T480-360Zm0-80Zm0 0Z"></path></svg>');
function Mg(t, e) {
  let n = m(e, "svgStyles", 3, "");
  ur(t, {
    children: (r, i) => {
      var a = Rg();
      He(() => tn(a, n())), O(r, a);
    }
  });
}
var Dg = /* @__PURE__ */ un('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-160q-134 0-227-93t-93-227q0-134 93-227t227-93q69 0 132 28.5T720-690v-110h80v280H520v-80h168q-32-56-87.5-88T480-720q-100 0-170 70t-70 170q0 100 70 170t170 70q77 0 139-44t87-116h84q-28 106-114 173t-196 67Z"></path></svg>');
function Pg(t, e) {
  let n = m(e, "svgStyles", 3, "");
  ur(t, {
    children: (r, i) => {
      var a = Dg();
      He(() => tn(a, n())), O(r, a);
    }
  });
}
var Ng = /* @__PURE__ */ un('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"></path></svg>');
function Ug(t, e) {
  let n = m(e, "svgStyles", 3, "");
  ur(t, {
    children: (r, i) => {
      var a = Ng();
      He(() => tn(a, n())), O(r, a);
    }
  });
}
var Hg = /* @__PURE__ */ un('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M200-440v-80h560v80H200Z"></path></svg>');
function Fg(t, e) {
  let n = m(e, "svgStyles", 3, "");
  ur(t, {
    children: (r, i) => {
      var a = Hg();
      He(() => tn(a, n())), O(r, a);
    }
  });
}
var Bg = /* @__PURE__ */ un('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"></path></svg>');
function kg(t, e) {
  let n = m(e, "svgStyles", 3, "");
  ur(t, {
    children: (r, i) => {
      var a = Bg();
      He(() => tn(a, n())), O(r, a);
    }
  });
}
var Vg = /* @__PURE__ */ un('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"></path></svg>');
function Gg(t, e) {
  let n = m(e, "svgStyles", 3, "");
  ur(t, {
    children: (r, i) => {
      var a = Vg();
      He(() => tn(a, n())), O(r, a);
    }
  });
}
af();
var jg = /* @__PURE__ */ ve("<!> <!>", 1);
function qg(t, e) {
  let n = m(e, "title", 3, ""), r = m(e, "closeable", 3, !0), i = m(e, "disabled", 3, !1);
  {
    let a = /* @__PURE__ */ se(() => i() ? "disabled" : "");
    lg(t, {
      get chip() {
        return n();
      },
      nonInteractive: !0,
      disabled: !0,
      get class() {
        return s(a);
      },
      children: (o, u) => {
        var l = jg(), c = Q(l);
        gg(c, {
          children: (f, v) => {
            var p = Kt();
            He(() => pt(p, n())), O(f, p);
          },
          $$slots: { default: !0 }
        });
        var d = _e(c, 2);
        {
          var h = (f) => {
            yg(f, {
              get onclick() {
                return e.callback;
              },
              children: (v, p) => {
                nd(v, { svgStyles: "margin-left: 0; fill: unset;" });
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
function Wg(t, e) {
  e(t.target.value);
}
var Kg = /* @__PURE__ */ ve('<div class="custom-text-field svelte-1719vm0"><input type="date" id="datetime-picker" class="custom-text-field__input svelte-1719vm0" placeholder=""/> <label for="datetime-picker" class="custom-floating-label svelte-1719vm0"> </label> <span class="custom-line svelte-1719vm0"></span></div>');
function zg(t, e) {
  Oe(e, !0);
  let n = m(e, "label", 3, ""), r = m(e, "value", 15, "");
  var i = Kg(), a = Ie(i);
  a.__change = [Wg, r];
  var o = _e(a, 2), u = Ie(o);
  He(() => pt(u, n())), xa(a, r), O(t, i), Re();
}
Pr(["change"]);
var Xg = /* @__PURE__ */ ve('<div class="filter-box-container"><div class="input-section"><div class="filter-input-controls svelte-xdvqlf"><!> <!> <!> <!> <!></div> <div class="filter-button-controls"><!> <!></div></div> <div class="separator"></div> <div class="chip-section"><!></div></div>');
function hu(t, e) {
  Oe(e, !0);
  let n = m(e, "filterTypes", 19, () => []), r = m(e, "activeFilters", 31, () => be([])), i = m(e, "useOptionLabelInChipText", 3, !1), a = m(e, "selectedOptionIndex", 31, () => -1), o = m(e, "disabled", 3, !1), u = m(e, "addFilterLabel", 3, "Add Filter"), l = m(e, "selectFilterLabel", 3, "Filter Types"), c = /* @__PURE__ */ Ae(""), d = /* @__PURE__ */ Ae(void 0), h = /* @__PURE__ */ se(() => n().map((S) => ({ value: S.label, label: S.label }))), f = /* @__PURE__ */ se(() => !s(d) || !s(c)), v = /* @__PURE__ */ se(() => n().find((S) => S.label === s(d)));
  function p() {
    var C, b;
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
        id: pr(),
        key: s(v).key,
        value: s(c),
        operation: "=",
        text: `${s(d)}: ${i() && ((C = s(v).inputType.options) != null && C.length) ? (b = s(v).inputType.options[a()]) == null ? void 0 : b.label : s(c)}`,
        disabled: !1
      }
    ];
    r(S), E(), y();
  }
  function g(S) {
    setTimeout(
      () => {
        r(r().filter((C) => C.id !== S)), E();
      },
      0
    );
  }
  function y() {
    ne(c, ""), ne(d, void 0);
  }
  function E() {
    const S = r().map((C) => ({ ...C }));
    S.find((C) => C.key === "uuid") ? S.filter((C) => C.key !== "uuid").forEach((C) => {
      C.disabled = !0;
    }) : S.forEach((C) => {
      C.disabled = !1;
    }), r(S);
  }
  Qc(t, {
    children: (S, C) => {
      var b = Xg(), _ = Ie(b), x = Ie(_), T = Ie(x);
      au(T, {
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
        set value(I) {
          ne(d, I, !0);
        }
      });
      var A = _e(T, 2);
      {
        var L = (I) => {
          Im(I, {
            label: "Input",
            get value() {
              return s(c);
            },
            set value(w) {
              ne(c, w, !0);
            }
          });
        };
        ue(A, (I) => {
          var w, te;
          ((te = (w = s(v)) == null ? void 0 : w.inputType) == null ? void 0 : te.type) === "string" && I(L);
        });
      }
      var U = _e(A, 2);
      {
        var X = (I) => {
          {
            let w = /* @__PURE__ */ se(() => {
              var te;
              return (te = s(v).inputType) == null ? void 0 : te.options;
            });
            au(I, {
              label: "Input",
              get data() {
                return s(w);
              },
              get value() {
                return s(c);
              },
              set value(te) {
                ne(c, te, !0);
              },
              get selectedOptionIndex() {
                return a();
              },
              set selectedOptionIndex(te) {
                a(te);
              }
            });
          }
        };
        ue(U, (I) => {
          var w, te;
          ((te = (w = s(v)) == null ? void 0 : w.inputType) == null ? void 0 : te.type) === "select" && I(X);
        });
      }
      var H = _e(U, 2);
      {
        var B = (I) => {
          zg(I, {
            get value() {
              return s(c);
            },
            set value(w) {
              ne(c, w, !0);
            }
          });
        };
        ue(H, (I) => {
          var w, te;
          ((te = (w = s(v)) == null ? void 0 : w.inputType) == null ? void 0 : te.type) === "datepicker" && I(B);
        });
      }
      var ye = _e(H, 2);
      {
        var V = (I) => {
          $g(I, {
            get value() {
              return s(c);
            },
            set value(w) {
              ne(c, w, !0);
            }
          });
        };
        ue(ye, (I) => {
          var w, te;
          ((te = (w = s(v)) == null ? void 0 : w.inputType) == null ? void 0 : te.type) === "timepicker" && I(V);
        });
      }
      var F = _e(x, 2), M = Ie(F);
      tl(M, {
        callback: p,
        get disabled() {
          return s(f);
        },
        children: (I, w) => {
          var te = Kt();
          He(() => pt(te, u())), O(I, te);
        },
        $$slots: { default: !0 }
      });
      var G = _e(M, 2);
      Ee(G, () => e.filterControls ?? ge);
      var ee = _e(_, 4), D = Ie(ee);
      cg(D, {
        get chips() {
          return r();
        },
        key: (w) => w.id,
        chip: (w, te = ge) => {
          qg(w, {
            get title() {
              return te().text;
            },
            callback: () => g(te().id),
            get disabled() {
              return te().disabled;
            }
          });
        },
        $$slots: { chip: !0 }
      }), O(S, b);
    },
    $$slots: { default: !0 }
  }), Re();
}
var Yg = /* @__PURE__ */ ve('<div class="overlay svelte-14uvd2z"><div class="loading-spinner-container svelte-14uvd2z"><div class="loading-spinner svelte-14uvd2z"></div> <span class="loading-message svelte-14uvd2z"> </span></div></div>'), Zg = /* @__PURE__ */ ve('<div class="svelte-14uvd2z"><!></div>');
function vu(t, e) {
  let n = m(e, "loadingDone", 3, !0), r = m(e, "message", 3, "Loading...");
  var i = Zg(), a = Ie(i);
  {
    var o = (u) => {
      var l = Yg(), c = Ie(l), d = _e(Ie(c), 2), h = Ie(d);
      He(() => pt(h, r())), O(u, l);
    };
    ue(a, (u) => {
      n() || u(o);
    });
  }
  O(t, i);
}
function Qg(t, e) {
  e(t.target.value);
}
var Jg = /* @__PURE__ */ ve('<div class="custom-text-field svelte-6wdfbb"><input type="datetime-local" id="datetime-picker" class="custom-text-field__input svelte-6wdfbb" placeholder=""/> <label for="datetime-picker" class="custom-floating-label svelte-6wdfbb"> </label> <span class="custom-line svelte-6wdfbb"></span></div>');
function $g(t, e) {
  Oe(e, !0);
  let n = m(e, "label", 3, ""), r = m(e, "value", 15, "");
  var i = Jg(), a = Ie(i);
  a.__change = [Qg, r];
  var o = _e(a, 2), u = Ie(o);
  He(() => pt(u, n())), xa(a, r), O(t, i), Re();
}
Pr(["change"]);
var eb = /* @__PURE__ */ ve('<details class="svelte-1sq8fnx"><summary class="svelte-1sq8fnx"> </summary> <div class="expandable-content svelte-1sq8fnx"><!></div></details>');
function rd(t, e) {
  Oe(e, !0);
  let n = m(e, "title", 3, ""), r = m(e, "open", 11, !1);
  Qc(t, {
    children: (i, a) => {
      var o = eb(), u = Ie(o), l = Ie(u), c = _e(u, 2), d = Ie(c);
      Ee(d, () => e.content ?? ge), He(() => {
        o.open = r(), pt(l, n());
      }), O(i, o);
    },
    $$slots: { default: !0 }
  }), Re();
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
var fn = {
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
var tb = (
  /** @class */
  function(t) {
    et(e, t);
    function e(n) {
      var r = t.call(this, ce(ce({}, e.defaultAdapter), n)) || this;
      return r.observer = null, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return fn;
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
      this.determinate = !this.adapter.hasClass(fn.INDETERMINATE_CLASS), this.adapter.addClass(fn.ANIMATION_READY_CLASS), this.progress = 0, this.buffer = 1, this.observer = this.adapter.attachResizeObserver(function(r) {
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
        this.adapter.removeClass(fn.INDETERMINATE_CLASS), this.adapter.setAttribute(Mn.ARIA_VALUENOW, this.progress.toString()), this.adapter.setAttribute(Mn.ARIA_VALUEMAX, "1"), this.adapter.setAttribute(Mn.ARIA_VALUEMIN, "0"), this.setPrimaryBarProgress(this.progress), this.setBufferBarProgress(this.buffer);
        return;
      }
      this.observer && this.calculateAndSetDimensions(this.adapter.getWidth()), this.adapter.addClass(fn.INDETERMINATE_CLASS), this.adapter.removeAttribute(Mn.ARIA_VALUENOW), this.adapter.removeAttribute(Mn.ARIA_VALUEMAX), this.adapter.removeAttribute(Mn.ARIA_VALUEMIN), this.setPrimaryBarProgress(1), this.setBufferBarProgress(1);
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
      this.adapter.removeClass(fn.CLOSED_CLASS), this.adapter.removeClass(fn.CLOSED_ANIMATION_OFF_CLASS), this.adapter.removeAttribute(Mn.ARIA_HIDDEN);
    }, e.prototype.close = function() {
      this.adapter.addClass(fn.CLOSED_CLASS), this.adapter.setAttribute(Mn.ARIA_HIDDEN, "true");
    }, e.prototype.isClosed = function() {
      return this.adapter.hasClass(fn.CLOSED_CLASS);
    }, e.prototype.handleTransitionEnd = function() {
      this.adapter.hasClass(fn.CLOSED_CLASS) && this.adapter.addClass(fn.CLOSED_ANIMATION_OFF_CLASS);
    }, e.prototype.destroy = function() {
      t.prototype.destroy.call(this), this.observer && this.observer.disconnect();
    }, e.prototype.restartAnimation = function() {
      this.adapter.removeClass(fn.ANIMATION_READY_CLASS), this.adapter.forceLayout(), this.adapter.addClass(fn.ANIMATION_READY_CLASS);
    }, e.prototype.setPrimaryBarProgress = function(n) {
      var r = "scaleX(" + n + ")", i = typeof window < "u" ? Rm(window, "transform") : "transform";
      this.adapter.setPrimaryBarStyle(i, r);
    }, e.prototype.setBufferBarProgress = function(n) {
      var r = n * 100 + "%";
      this.adapter.setBufferBarStyle(Mn.FLEX_BASIS, r);
    }, e.prototype.calculateAndSetDimensions = function(n) {
      var r = n * pa.PRIMARY_HALF, i = n * pa.PRIMARY_FULL, a = n * pa.SECONDARY_QUARTER, o = n * pa.SECONDARY_HALF, u = n * pa.SECONDARY_FULL;
      this.adapter.setStyle("--mdc-linear-progress-primary-half", r + "px"), this.adapter.setStyle("--mdc-linear-progress-primary-half-neg", -r + "px"), this.adapter.setStyle("--mdc-linear-progress-primary-full", i + "px"), this.adapter.setStyle("--mdc-linear-progress-primary-full-neg", -i + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-quarter", a + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-quarter-neg", -a + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-half", o + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-half-neg", -o + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-full", u + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-full-neg", -u + "px"), this.restartAnimation();
    }, e;
  }(Pt)
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
var nr = {
  HEADER_CELL_SORTED: "mdc-data-table__header-cell--sorted",
  HEADER_CELL_SORTED_DESCENDING: "mdc-data-table__header-cell--sorted-descending",
  IN_PROGRESS: "mdc-data-table--in-progress",
  ROW_SELECTED: "mdc-data-table__row--selected"
}, pu = {
  ARIA_SELECTED: "aria-selected",
  ARIA_SORT: "aria-sort"
}, Yr = {
  ARIA_SELECTED: pu.ARIA_SELECTED,
  ARIA_SORT: pu.ARIA_SORT
}, vn;
(function(t) {
  t.ASCENDING = "ascending", t.DESCENDING = "descending", t.NONE = "none", t.OTHER = "other";
})(vn || (vn = {}));
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
var nb = (
  /** @class */
  function(t) {
    et(e, t);
    function e(n) {
      return t.call(this, ce(ce({}, e.defaultAdapter), n)) || this;
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
      return Ic(this, void 0, void 0, function() {
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
        o !== i && (this.adapter.removeClassNameByHeaderCellIndex(o, nr.HEADER_CELL_SORTED), this.adapter.removeClassNameByHeaderCellIndex(o, nr.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(o, Yr.ARIA_SORT, vn.NONE), this.adapter.setSortStatusLabelByHeaderCellIndex(o, vn.NONE));
      this.adapter.setClassNameByHeaderCellIndex(i, nr.HEADER_CELL_SORTED);
      var u = this.adapter.getAttributeByHeaderCellIndex(i, Yr.ARIA_SORT), l = vn.NONE;
      u === vn.ASCENDING ? (this.adapter.setClassNameByHeaderCellIndex(i, nr.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(i, Yr.ARIA_SORT, vn.DESCENDING), l = vn.DESCENDING) : u === vn.DESCENDING ? (this.adapter.removeClassNameByHeaderCellIndex(i, nr.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(i, Yr.ARIA_SORT, vn.ASCENDING), l = vn.ASCENDING) : (this.adapter.setAttributeByHeaderCellIndex(i, Yr.ARIA_SORT, vn.ASCENDING), l = vn.ASCENDING), this.adapter.setSortStatusLabelByHeaderCellIndex(i, l), this.adapter.notifySortAction({
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
      }), this.adapter.addClass(nr.IN_PROGRESS);
    }, e.prototype.hideProgress = function() {
      this.adapter.removeClass(nr.IN_PROGRESS);
    }, e.prototype.setHeaderRowCheckboxState = function() {
      this.adapter.getSelectedRowCount() === 0 ? (this.adapter.setHeaderRowCheckboxChecked(!1), this.adapter.setHeaderRowCheckboxIndeterminate(!1)) : this.adapter.getSelectedRowCount() === this.adapter.getRowCount() ? (this.adapter.setHeaderRowCheckboxChecked(!0), this.adapter.setHeaderRowCheckboxIndeterminate(!1)) : (this.adapter.setHeaderRowCheckboxIndeterminate(!0), this.adapter.setHeaderRowCheckboxChecked(!1));
    }, e.prototype.selectRowAtIndex = function(n, r) {
      r ? (this.adapter.addClassAtRowIndex(n, nr.ROW_SELECTED), this.adapter.setAttributeAtRowIndex(n, Yr.ARIA_SELECTED, "true")) : (this.adapter.removeClassAtRowIndex(n, nr.ROW_SELECTED), this.adapter.setAttributeAtRowIndex(n, Yr.ARIA_SELECTED, "false"));
    }, e;
  }(Pt)
), rb = /* @__PURE__ */ ve('<div class="mdc-data-table__progress-indicator"><div class="mdc-data-table__scrim"></div> <!></div>'), ib = /* @__PURE__ */ ve("<div><div><table><!></table></div> <!> <!></div>");
function ab(t, e) {
  Oe(e, !0);
  const n = () => Dt(B, "$progressClosed", r), [r, i] = wn(), { closest: a } = Po;
  let o = m(e, "use", 19, () => []), u = m(e, "class", 3, ""), l = m(e, "stickyHeader", 3, !1), c = m(e, "sortable", 3, !1), d = m(e, "sort", 15, null), h = m(e, "sortDirection", 15, "ascending"), f = m(e, "sortAscendingAriaLabel", 3, "sorted, ascending"), v = m(e, "sortDescendingAriaLabel", 3, "sorted, descending"), p = m(e, "container$use", 19, () => []), g = m(e, "container$class", 3, ""), y = m(e, "table$use", 19, () => []), E = m(e, "table$class", 3, ""), S = /* @__PURE__ */ We(e, [
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
  ]), C, b = /* @__PURE__ */ Ae(void 0), _, x = /* @__PURE__ */ Ae(void 0), T = /* @__PURE__ */ Ae(void 0), A = be({}), L = /* @__PURE__ */ Ae(be({ height: "auto", top: "initial" })), U = ae("SMUI:addLayoutListener"), X, H = !1, B = dt(!1), ye = dt(d());
  Te(() => {
    pn(ye, d());
  });
  let V = dt(h());
  Te(() => {
    pn(V, h());
  }), $("SMUI:checkbox:context", "data-table"), $("SMUI:linear-progress:context", "data-table"), $("SMUI:linear-progress:closed", B), $("SMUI:data-table:sortable", c()), $("SMUI:data-table:sort", ye), $("SMUI:data-table:sortDirection", V), $("SMUI:data-table:sortAscendingAriaLabel", f()), $("SMUI:data-table:sortDescendingAriaLabel", v()), U && (X = U(P));
  let F;
  Te(() => {
    e.progress && s(b) && F !== n() && (F = n(), n() ? s(b).hideProgress() : s(b).showProgress());
  }), $("SMUI:checkbox:mount", () => {
    s(b) && H && s(b).layout();
  }), $("SMUI:data-table:header:mount", (N) => {
    ne(x, N, !0);
  }), $("SMUI:data-table:header:unmount", () => {
    ne(x, void 0);
  }), $("SMUI:data-table:body:mount", (N) => {
    ne(T, N, !0);
  }), $("SMUI:data-table:body:unmount", () => {
    ne(T, void 0);
  }), at(() => (ne(
    b,
    new nb({
      addClass: G,
      removeClass: ee,
      getHeaderCellElements: () => {
        var N;
        return ((N = s(x)) == null ? void 0 : N.cells.map((q) => q.element)) ?? [];
      },
      getHeaderCellCount: () => {
        var N;
        return ((N = s(x)) == null ? void 0 : N.cells.length) ?? 0;
      },
      getAttributeByHeaderCellIndex: (N, q) => {
        var J;
        return ((J = s(x)) == null ? void 0 : J.orderedCells[N].getAttr(q)) ?? null;
      },
      setAttributeByHeaderCellIndex: (N, q, J) => {
        var Ce;
        (Ce = s(x)) == null || Ce.orderedCells[N].addAttr(q, J);
      },
      setClassNameByHeaderCellIndex: (N, q) => {
        var J;
        (J = s(x)) == null || J.orderedCells[N].addClass(q);
      },
      removeClassNameByHeaderCellIndex: (N, q) => {
        var J;
        (J = s(x)) == null || J.orderedCells[N].removeClass(q);
      },
      notifySortAction: (N) => {
        d(N.columnId), h(N.sortValue), qe(j(), "SMUIDataTableSorted", N);
      },
      getTableContainerHeight: () => _.getBoundingClientRect().height,
      getTableHeaderHeight: () => {
        const N = j().querySelector(".mdc-data-table__header-row");
        if (!N)
          throw new Error("MDCDataTable: Table header element not found.");
        return N.getBoundingClientRect().height;
      },
      setProgressIndicatorStyles: (N) => {
        ne(L, N, !0);
      },
      addClassAtRowIndex: (N, q) => {
        var J;
        (J = s(T)) == null || J.orderedRows[N].addClass(q);
      },
      getRowCount: () => {
        var N;
        return ((N = s(T)) == null ? void 0 : N.rows.length) ?? 0;
      },
      getRowElements: () => {
        var N;
        return ((N = s(T)) == null ? void 0 : N.rows.map((q) => q.element)) ?? [];
      },
      getRowIdAtIndex: (N) => {
        var q;
        return ((q = s(T)) == null ? void 0 : q.orderedRows[N].rowId) ?? null;
      },
      getRowIndexByChildElement: (N) => {
        var q;
        return ((q = s(T)) == null ? void 0 : q.orderedRows.map((J) => J.element).indexOf(a(N, ".mdc-data-table__row"))) ?? -1;
      },
      getSelectedRowCount: () => {
        var N;
        return ((N = s(T)) == null ? void 0 : N.rows.filter((q) => q.selected).length) ?? 0;
      },
      isCheckboxAtRowIndexChecked: (N) => {
        var J;
        const q = (J = s(T)) == null ? void 0 : J.orderedRows[N].checkbox;
        return q ? q.checked : !1;
      },
      isHeaderRowCheckboxChecked: () => {
        var q;
        const N = (q = s(x)) == null ? void 0 : q.checkbox;
        return N ? N.checked : !1;
      },
      isRowsSelectable: () => !!j().querySelector(".mdc-data-table__row-checkbox") || !!j().querySelector(".mdc-data-table__header-row-checkbox"),
      notifyRowSelectionChanged: (N) => {
        var J;
        const q = (J = s(T)) == null ? void 0 : J.orderedRows[N.rowIndex];
        q && qe(j(), "SMUIDataTableSelectionChanged", {
          row: q.element,
          rowId: q.rowId,
          rowIndex: N.rowIndex,
          selected: N.selected
        });
      },
      notifySelectedAll: () => {
        D(!1), qe(j(), "SMUIDataTableSelectedAll");
      },
      notifyUnselectedAll: () => {
        D(!1), qe(j(), "SMUIDataTableUnselectedAll");
      },
      notifyRowClick: (N) => qe(j(), "SMUIDataTableClickRow", N),
      registerHeaderRowCheckbox: () => {
      },
      registerRowCheckboxes: () => {
      },
      removeClassAtRowIndex: (N, q) => {
        var J;
        (J = s(T)) == null || J.orderedRows[N].removeClass(q);
      },
      setAttributeAtRowIndex: (N, q, J) => {
        var Ce;
        (Ce = s(T)) == null || Ce.orderedRows[N].addAttr(q, J);
      },
      setHeaderRowCheckboxChecked: (N) => {
        var J;
        const q = (J = s(x)) == null ? void 0 : J.checkbox;
        q && (q.checked = N);
      },
      setHeaderRowCheckboxIndeterminate: D,
      setRowCheckboxCheckedAtIndex: (N, q) => {
        var Ce;
        const J = (Ce = s(T)) == null ? void 0 : Ce.orderedRows[N].checkbox;
        J && (J.checked = q);
      },
      setSortStatusLabelByHeaderCellIndex: (N, q) => {
      }
    }),
    !0
  ), s(b).init(), s(b).layout(), H = !0, () => {
    var N;
    (N = s(b)) == null || N.destroy();
  })), Xn(() => {
    X && X();
  });
  function M(N) {
    s(b) && s(b).handleRowCheckboxChange(N);
  }
  function G(N) {
    A[N] || (A[N] = !0);
  }
  function ee(N) {
    (!(N in A) || A[N]) && (A[N] = !1);
  }
  function D(N) {
    var J;
    const q = (J = s(x)) == null ? void 0 : J.checkbox;
    q && (q.indeterminate = N);
  }
  function I(N) {
    if (!s(b) || !N.detail.target)
      return;
    const q = a(N.detail.target, ".mdc-data-table__header-cell--with-sort");
    q && te(q);
  }
  function w(N) {
    if (!s(b) || !N.detail.target)
      return;
    const q = a(N.detail.target, ".mdc-data-table__row");
    q && s(b) && s(b).handleRowClick({ rowId: N.detail.rowId, row: q });
  }
  function te(N) {
    var Nt, yt;
    const q = ((Nt = s(x)) == null ? void 0 : Nt.orderedCells) ?? [], J = q.map((bn) => bn.element).indexOf(N);
    if (J === -1)
      return;
    const Ce = q[J].columnId ?? null;
    (yt = s(b)) == null || yt.handleSortAction({ columnId: Ce, columnIndex: J, headerCell: N });
  }
  function P() {
    var N;
    return (N = s(b)) == null ? void 0 : N.layout();
  }
  function j() {
    return C;
  }
  var pe = { layout: P, getElement: j }, k = ib(), re = (N) => {
    var q;
    s(b) && s(b).handleHeaderRowCheckboxChange(), (q = e.onSMUIDataTableHeaderCheckboxChange) == null || q.call(e, N);
  }, Y = (N) => {
    var q;
    I(N), (q = e.onSMUIDataTableHeaderClick) == null || q.call(e, N);
  }, de = (N) => {
    var q;
    w(N), (q = e.onSMUIDataTableRowClick) == null || q.call(e, N);
  }, oe = (N) => {
    var q;
    M(N), (q = e.onSMUIDataTableBodyCheckboxChange) == null || q.call(e, N);
  };
  Be(
    k,
    (N, q) => ({
      class: N,
      ...q,
      onSMUIDataTableHeaderCheckboxChange: re,
      onSMUIDataTableHeaderClick: Y,
      onSMUIDataTableRowClick: de,
      onSMUIDataTableBodyCheckboxChange: oe
    }),
    [
      () => Ne({
        "mdc-data-table": !0,
        "mdc-data-table--sticky-header": l(),
        ...A,
        [u()]: !0
      }),
      () => ea(S, ["container$", "table$"])
    ]
  );
  var Qe = Ie(k);
  Be(Qe, (N, q) => ({ class: N, ...q }), [
    () => Ne({
      "mdc-data-table__table-container": !0,
      [g()]: !0
    }),
    () => st(S, "container$")
  ]);
  var Ze = Ie(Qe);
  Be(Ze, (N, q) => ({ class: N, ...q }), [
    () => Ne({ "mdc-data-table__table": !0, [E()]: !0 }),
    () => st(S, "table$")
  ]);
  var Fe = Ie(Ze);
  Ee(Fe, () => e.children ?? ge), Ue(Ze, (N, q) => K == null ? void 0 : K(N, q), y), xe(Qe, (N) => _ = N, () => _), Ue(Qe, (N, q) => K == null ? void 0 : K(N, q), p);
  var we = _e(Qe, 2);
  {
    var le = (N) => {
      var q = rb(), J = _e(Ie(q), 2);
      Ee(J, () => e.progress ?? ge), He((Ce) => tn(q, Ce), [
        () => Object.entries(s(L)).map(([Ce, Nt]) => `${Ce}: ${Nt};`).join(" ")
      ]), O(N, q);
    };
    ue(we, (N) => {
      e.progress && N(le);
    });
  }
  var Le = _e(we, 2);
  Ee(Le, () => e.paginate ?? ge), xe(k, (N) => C = N, () => C), Ue(k, (N, q) => K == null ? void 0 : K(N, q), o), O(t, k);
  var Je = Re(pe);
  return i(), Je;
}
var ob = /* @__PURE__ */ ve("<thead><!></thead>");
function sb(t, e) {
  Oe(e, !0);
  let n = m(e, "use", 19, () => []), r = /* @__PURE__ */ We(e, ["$$slots", "$$events", "$$legacy", "use", "children"]), i, a = /* @__PURE__ */ Ae(void 0), o = [];
  const u = /* @__PURE__ */ new WeakMap();
  $("SMUI:data-table:row:header", !0);
  const l = ae("SMUI:checkbox:mount");
  $("SMUI:checkbox:mount", (E) => {
    ne(a, E, !0), l && l(E);
  });
  const c = ae("SMUI:checkbox:unmount");
  $("SMUI:checkbox:unmount", (E) => {
    ne(a, void 0), c && c(E);
  }), $("SMUI:data-table:cell:mount", (E) => {
    o.push(E), u.set(E.element, E);
  }), $("SMUI:data-table:cell:unmount", (E) => {
    const S = o.findIndex((C) => C === E);
    S !== -1 && o.splice(S, 1), u.delete(E.element);
  });
  const d = ae("SMUI:data-table:header:mount"), h = ae("SMUI:data-table:header:unmount");
  at(() => {
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
  var p = { getElement: v }, g = ob();
  Be(g, () => ({ ...r }));
  var y = Ie(g);
  return Ee(y, () => e.children ?? ge), xe(g, (E) => i = E, () => i), Ue(g, (E, S) => K == null ? void 0 : K(E, S), n), O(t, g), Re(p);
}
var lb = /* @__PURE__ */ ve("<tbody><!></tbody>");
function ub(t, e) {
  Oe(e, !0);
  let n = m(e, "use", 19, () => []), r = m(e, "class", 3, ""), i = /* @__PURE__ */ We(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "children"
  ]), a, o = [];
  const u = /* @__PURE__ */ new WeakMap();
  $("SMUI:data-table:row:header", !1), $("SMUI:data-table:row:mount", (g) => {
    o.push(g), u.set(g.element, g);
  }), $("SMUI:data-table:row:unmount", (g) => {
    const y = o.findIndex((E) => E === g);
    y !== -1 && o.splice(y, 1), u.delete(g.element);
  });
  const l = ae("SMUI:data-table:body:mount"), c = ae("SMUI:data-table:body:unmount");
  at(() => {
    const g = {
      get rows() {
        return o;
      },
      get orderedRows() {
        return d();
      }
    };
    return l && l(g), () => {
      c && c(g);
    };
  });
  function d() {
    return [...h().querySelectorAll(".mdc-data-table__row")].map((g) => u.get(g)).filter((g) => g && g._smui_data_table_row_accessor);
  }
  function h() {
    return a;
  }
  var f = { getElement: h }, v = lb();
  Be(v, (g) => ({ class: g, ...i }), [
    () => Ne({ "mdc-data-table__content": !0, [r()]: !0 })
  ]);
  var p = Ie(v);
  return Ee(p, () => e.children ?? ge), xe(v, (g) => a = g, () => a), Ue(v, (g, y) => K == null ? void 0 : K(g, y), n), O(t, v), Re(f);
}
let cb = 0;
var db = /* @__PURE__ */ ve("<tr><!></tr>");
function mu(t, e) {
  Oe(e, !0);
  let n = m(e, "use", 19, () => []), r = m(e, "class", 3, ""), i = m(e, "rowId", 19, () => "SMUI-data-table-row-" + cb++), a = /* @__PURE__ */ We(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "rowId",
    "children"
  ]), o, u = /* @__PURE__ */ Ae(void 0), l = be({}), c = be({}), d = ae("SMUI:data-table:row:header");
  const h = ae("SMUI:checkbox:mount");
  $("SMUI:checkbox:mount", (U) => {
    ne(u, U, !0), h && h(U);
  });
  const f = ae("SMUI:checkbox:unmount");
  $("SMUI:checkbox:unmount", (U) => {
    ne(u, void 0), f && f(U);
  });
  const v = ae("SMUI:data-table:row:mount"), p = ae("SMUI:data-table:row:unmount");
  at(() => {
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
      addClass: g,
      removeClass: y,
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
      addClass: g,
      removeClass: y,
      getAttr: E,
      addAttr: S
    };
    return v && v(U), () => {
      p && p(U);
    };
  });
  function g(U) {
    l[U] || (l[U] = !0);
  }
  function y(U) {
    (!(U in l) || l[U]) && (l[U] = !1);
  }
  function E(U) {
    return U in c ? c[U] ?? null : _().getAttribute(U);
  }
  function S(U, X) {
    c[U] !== X && (c[U] = X);
  }
  function C(U) {
    qe(_(), "SMUIDataTableHeaderClick", U);
  }
  function b(U) {
    qe(_(), "SMUIDataTableRowClick", { rowId: i(), target: U.target });
  }
  function _() {
    return o;
  }
  var x = { getElement: _ }, T = db(), A = (U) => {
    var X;
    d ? C(U) : b(U), (X = e.onclick) == null || X.call(e, U);
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
      () => Ne({
        "mdc-data-table__header-row": d,
        "mdc-data-table__row": !d,
        "mdc-data-table__row--selected": !d && s(u) && s(u).checked,
        ...l,
        [r()]: !0
      })
    ]
  );
  var L = Ie(T);
  return Ee(L, () => e.children ?? ge), xe(T, (U) => o = U, () => o), Ue(T, (U, X) => K == null ? void 0 : K(U, X), n), O(t, T), Re(x);
}
let fb = 0;
var hb = /* @__PURE__ */ ve('<div class="mdc-data-table__header-cell-wrapper"><!> <div class="mdc-data-table__sort-status-label" aria-hidden="true"> </div></div>'), vb = /* @__PURE__ */ ve("<th><!></th>"), pb = /* @__PURE__ */ ve("<td><!></td>");
function is(t, e) {
  Oe(e, !0);
  const n = () => Dt(E, "$sort", i), r = () => Dt(S, "$sortDirection", i), [i, a] = wn();
  let o = ae("SMUI:data-table:row:header"), u = m(e, "use", 19, () => []), l = m(e, "class", 3, ""), c = m(e, "numeric", 3, !1), d = m(e, "checkbox", 3, !1), h = m(e, "columnId", 19, () => o ? "SMUI-data-table-column-" + fb++ : "SMUI-data-table-unused"), f = m(e, "sortable", 19, () => ae("SMUI:data-table:sortable")), v = /* @__PURE__ */ We(e, [
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
  ]), p, g = be({}), y = be({}), E = ae("SMUI:data-table:sort"), S = ae("SMUI:data-table:sortDirection"), C = ae("SMUI:data-table:sortAscendingAriaLabel"), b = ae("SMUI:data-table:sortDescendingAriaLabel");
  f() && ($("SMUI:label:context", "data-table:sortable-header-cell"), $("SMUI:icon-button:context", "data-table:sortable-header-cell"), $("SMUI:icon-button:aria-describedby", h() + "-status-label"));
  const _ = ae("SMUI:data-table:cell:mount"), x = ae("SMUI:data-table:cell:unmount");
  at(() => {
    const D = o ? {
      _smui_data_table_header_cell_accessor: !0,
      get element() {
        return B();
      },
      get columnId() {
        return h();
      },
      addClass: T,
      removeClass: A,
      getAttr: L,
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
      getAttr: L,
      addAttr: U
    };
    return _ && _(D), () => {
      x && x(D);
    };
  });
  function T(D) {
    g[D] || (g[D] = !0);
  }
  function A(D) {
    (!(D in g) || g[D]) && (g[D] = !1);
  }
  function L(D) {
    return D in y ? y[D] ?? null : B().getAttribute(D);
  }
  function U(D, I) {
    y[D] !== I && (y[D] = I);
  }
  function X(D) {
    qe(B(), "SMUIDataTableHeaderCheckboxChange", D);
  }
  function H(D) {
    qe(B(), "SMUIDataTableBodyCheckboxChange", D);
  }
  function B() {
    return p;
  }
  var ye = { getElement: B }, V = ie(), F = Q(V);
  {
    var M = (D) => {
      var I = vb(), w = (pe) => {
        var k;
        d() && X(pe), (k = e.onchange) == null || k.call(e, pe);
      };
      Be(
        I,
        (pe) => ({
          class: pe,
          role: "columnheader",
          scope: "col",
          "data-column-id": h(),
          "aria-sort": f() ? n() === h() ? r() : "none" : void 0,
          ...y,
          ...v,
          onchange: w
        }),
        [
          () => Ne({
            "mdc-data-table__header-cell": !0,
            "mdc-data-table__header-cell--numeric": c(),
            "mdc-data-table__header-cell--checkbox": d(),
            "mdc-data-table__header-cell--with-sort": f(),
            "mdc-data-table__header-cell--sorted": f() && n() === h(),
            ...g,
            [l()]: !0
          })
        ]
      );
      var te = Ie(I);
      {
        var P = (pe) => {
          var k = hb(), re = Ie(k);
          Ee(re, () => e.children ?? ge);
          var Y = _e(re, 2), de = Ie(Y);
          He(() => {
            Sa(Y, "id", `${h() ?? ""}-status-label`), pt(de, n() === h() ? r() === "ascending" ? C : b : "");
          }), O(pe, k);
        }, j = (pe) => {
          var k = ie(), re = Q(k);
          Ee(re, () => e.children ?? ge), O(pe, k);
        };
        ue(te, (pe) => {
          f() ? pe(P) : pe(j, !1);
        });
      }
      xe(I, (pe) => p = pe, () => p), Ue(I, (pe, k) => K == null ? void 0 : K(pe, k), u), O(D, I);
    }, G = (D) => {
      var I = pb(), w = (P) => {
        var j;
        d() && H(P), (j = e.onchange) == null || j.call(e, P);
      };
      Be(
        I,
        (P) => ({
          class: P,
          ...y,
          ...v,
          onchange: w
        }),
        [
          () => Ne({
            "mdc-data-table__cell": !0,
            "mdc-data-table__cell--numeric": c(),
            "mdc-data-table__cell--checkbox": d(),
            ...g,
            [l()]: !0
          })
        ]
      );
      var te = Ie(I);
      Ee(te, () => e.children ?? ge), xe(I, (P) => p = P, () => p), Ue(I, (P, j) => K == null ? void 0 : K(P, j), u), O(D, I);
    };
    ue(F, (D) => {
      o ? D(M) : D(G, !1);
    });
  }
  O(t, V);
  var ee = Re(ye);
  return a(), ee;
}
Pr(["click"]);
Pr(["click"]);
function ws(t, e, n) {
  return e in t ? Object.defineProperty(t, e, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = n, t;
}
var mb = Object.freeze({
  // This flag exists as a workaround for issue 454 (basically a browser bug) - seems like these rect values take time to update when in grid layout. Setting it to true can cause strange behaviour in the REPL for non-grid zones, see issue 470
  USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT: "USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT"
});
ws({}, mb.USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT, !1);
var Za, gu = {
  DND_ZONE_ACTIVE: "dnd-zone-active",
  DND_ZONE_DRAG_DISABLED: "dnd-zone-drag-disabled"
};
Za = {}, ws(Za, gu.DND_ZONE_ACTIVE, "Tab to one the items and press space-bar or enter to start dragging it"), ws(Za, gu.DND_ZONE_DRAG_DISABLED, "This is a disabled drag and drop list");
const gb = dt([]);
gb.subscribe;
Pr(["click", "pointerdown", "pointerup", "pointermove"]);
Pr(["click"]);
const bb = 4e3;
function Ib() {
  let t = be({ items: [] }), e = 0;
  const n = (i) => {
    t.items = t.items.filter((a) => a.id !== i);
  }, r = (i, a, o, u = bb) => {
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
Ib();
var yb = /* @__PURE__ */ ve('<div><div class="mdc-linear-progress__buffer"><div class="mdc-linear-progress__buffer-bar"></div> <div class="mdc-linear-progress__buffer-dots"></div></div> <div class="mdc-linear-progress__bar mdc-linear-progress__primary-bar"><span class="mdc-linear-progress__bar-inner"></span></div> <div class="mdc-linear-progress__bar mdc-linear-progress__secondary-bar"><span class="mdc-linear-progress__bar-inner"></span></div></div>');
function _b(t, e) {
  Oe(e, !0);
  const [n, r] = wn();
  let i = m(e, "use", 19, () => []), a = m(e, "class", 3, ""), o = m(e, "style", 3, ""), u = m(e, "indeterminate", 3, !1), l = m(e, "closed", 3, !1), c = m(e, "progress", 3, 0), d = m(e, "buffer", 3, void 0), h = /* @__PURE__ */ We(e, [
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
  ]), f, v = /* @__PURE__ */ Ae(void 0), p = be({}), g = be({}), y = be({}), E = be({}), S = be({}), C = ae("SMUI:linear-progress:context"), b = ae("SMUI:linear-progress:closed");
  Te(() => {
    b && pn(b, l());
  }), Te(() => {
    s(v) && s(v).isDeterminate() !== !u() && s(v).setDeterminate(!u());
  }), Te(() => {
    s(v) && s(v).getProgress() !== c() && s(v).setProgress(c());
  }), Te(() => {
    s(v) && (d() == null ? s(v).setBuffer(1) : s(v).setBuffer(d()));
  }), Te(() => {
    s(v) && (l() ? s(v).close() : s(v).open());
  }), at(() => (ne(
    v,
    new tb({
      addClass: x,
      forceLayout: () => {
        B().getBoundingClientRect();
      },
      setBufferBarStyle: X,
      setPrimaryBarStyle: H,
      hasClass: _,
      removeAttribute: L,
      removeClass: T,
      setAttribute: A,
      setStyle: U,
      attachResizeObserver: (I) => {
        const w = window.ResizeObserver;
        if (w) {
          const te = new w(I);
          return te.observe(B()), te;
        }
        return null;
      },
      getWidth: () => B().offsetWidth
    }),
    !0
  ), s(v).init(), () => {
    var I;
    (I = s(v)) == null || I.destroy();
  }));
  function _(I) {
    return I in p ? p[I] : B().classList.contains(I);
  }
  function x(I) {
    p[I] || (p[I] = !0);
  }
  function T(I) {
    (!(I in p) || p[I]) && (p[I] = !1);
  }
  function A(I, w) {
    g[I] !== w && (g[I] = w);
  }
  function L(I) {
    (!(I in g) || g[I] != null) && (g[I] = void 0);
  }
  function U(I, w) {
    y[I] != w && (w === "" || w == null ? delete y[I] : y[I] = w);
  }
  function X(I, w) {
    E[I] != w && (w === "" || w == null ? delete E[I] : E[I] = w);
  }
  function H(I, w) {
    S[I] != w && (w === "" || w == null ? delete S[I] : S[I] = w);
  }
  function B() {
    return f;
  }
  var ye = { getElement: B }, V = yb(), F = (I) => {
    var w;
    s(v) && s(v).handleTransitionEnd(), (w = e.ontransitionend) == null || w.call(e, I);
  };
  Be(
    V,
    (I, w) => ({
      class: I,
      style: w,
      role: "progressbar",
      "aria-valuemin": 0,
      "aria-valuemax": 1,
      "aria-valuenow": u() ? void 0 : c(),
      ...g,
      ...h,
      ontransitionend: F
    }),
    [
      () => Ne({
        "mdc-linear-progress": !0,
        "mdc-linear-progress--indeterminate": u(),
        "mdc-linear-progress--closed": l(),
        "mdc-data-table__linear-progress": C === "data-table",
        ...p,
        [a()]: !0
      }),
      () => Object.entries(y).map(([I, w]) => `${I}: ${w};`).concat([o()]).join(" ")
    ]
  );
  var M = Ie(V), G = Ie(M), ee = _e(M, 2);
  xe(V, (I) => f = I, () => f), Ue(V, (I, w) => K == null ? void 0 : K(I, w), i), He(
    (I, w) => {
      tn(G, I), tn(ee, w);
    },
    [
      () => Object.entries(E).map(([I, w]) => `${I}: ${w};`).join(" "),
      () => Object.entries(S).map(([I, w]) => `${I}: ${w};`).join(" ")
    ]
  ), O(t, V);
  var D = Re(ye);
  return r(), D;
}
var Eb = /* @__PURE__ */ un('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor" class="svelte-1mj71p3"><path d="M12 4l-8 8h16l-8-8z"></path></svg>'), Ab = /* @__PURE__ */ un('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor" class="svelte-1mj71p3"><path d="M12 20l8-8H4l8 8z"></path></svg>'), Cb = (t, e) => e(), Sb = /* @__PURE__ */ ve('<input type="text" class="svelte-1mj71p3"/>'), xb = (t, e) => e(), Tb = /* @__PURE__ */ ve('<input type="number" class="svelte-1mj71p3"/>'), Lb = /* @__PURE__ */ ve("<!> <!>", 1), wb = /* @__PURE__ */ ve('<div class="custom-cell-container svelte-1mj71p3"><div class="cell-header svelte-1mj71p3"><span class="header-title svelte-1mj71p3"> </span> <!></div> <!></div>'), Ob = /* @__PURE__ */ ve('<div class="cell-actions svelte-1mj71p3"></div>'), Rb = /* @__PURE__ */ ve("<!> <!>", 1);
function Mb(t, e) {
  Oe(e, !0);
  const n = () => Dt(g, "$sortColumn", a), r = () => Dt(y, "$sortDirection", a), i = () => Dt(p, "$filteredData", a), [a, o] = wn();
  let u = m(e, "loadingDone", 15, !0), l = m(e, "label", 19, pr), c = m(e, "columnDefs", 19, () => []), d = m(e, "rowData", 31, () => be([])), h = m(e, "rowActions", 19, () => []), f = m(e, "searchInputLabel", 3, "Search"), v = be({ name: "", color: "", number: "" }), p = dt([]), g = dt(null), y = dt(null);
  e.store.store.subscribe((b) => {
    d([...b]), E();
  });
  function E() {
    let b = d().filter((_) => c().every((x) => {
      const T = v[x.field], A = _[x.field];
      return T ? x.filterType === "number" ? A == T : A.toString().toLowerCase().includes(T.toLowerCase()) : !0;
    }));
    b = S(b), p.set(b);
  }
  function S(b) {
    let _, x;
    return g.subscribe((T) => _ = T), y.subscribe((T) => x = T), !_ || !x ? b : b.sort((T, A) => {
      let L = T[_], U = A[_];
      return L == null && (L = ""), U == null && (U = ""), x === "asc" ? L.toString().localeCompare(U.toString()) : U.toString().localeCompare(L.toString());
    });
  }
  function C(b) {
    g.update((_) => {
      if (_ === b)
        y.update((x) => x === "asc" ? "desc" : x === "desc" ? null : "asc");
      else
        return y.set("asc"), b;
      return b;
    }), E();
  }
  p.set(d()), ab(t, {
    get "table$aria-label"() {
      return l();
    },
    style: "max-width: 100%; width: 100%;",
    progress: (_) => {
      _b(_, {
        indeterminate: !0,
        "aria-label": "Data is being loaded...",
        get closed() {
          return u();
        },
        set closed(x) {
          u(x);
        }
      });
    },
    children: (_, x) => {
      var T = Rb(), A = Q(T);
      sb(A, {
        children: (U, X) => {
          mu(U, {
            class: "header-row",
            children: (H, B) => {
              var ye = ie(), V = Q(ye);
              yr(V, 17, c, no, (F, M) => {
                is(F, {
                  get style() {
                    return s(M).headerStyle;
                  },
                  $$events: {
                    click: () => s(M).sortable && C(s(M).field)
                  },
                  children: (G, ee) => {
                    var D = wb(), I = Ie(D), w = Ie(I), te = Ie(w), P = _e(w, 2);
                    {
                      var j = (re) => {
                        var Y = ie(), de = Q(Y);
                        {
                          var oe = (Qe) => {
                            var Ze = ie(), Fe = Q(Ze);
                            {
                              var we = (Le) => {
                                var Je = Eb();
                                O(Le, Je);
                              }, le = (Le) => {
                                var Je = ie(), N = Q(Je);
                                {
                                  var q = (J) => {
                                    var Ce = Ab();
                                    O(J, Ce);
                                  };
                                  ue(
                                    N,
                                    (J) => {
                                      r() === "desc" && J(q);
                                    },
                                    !0
                                  );
                                }
                                O(Le, Je);
                              };
                              ue(Fe, (Le) => {
                                r() === "asc" ? Le(we) : Le(le, !1);
                              });
                            }
                            O(Qe, Ze);
                          };
                          ue(de, (Qe) => {
                            n() === s(M).field && r() !== null && Qe(oe);
                          });
                        }
                        O(re, Y);
                      };
                      ue(P, (re) => {
                        s(M).sortable && re(j);
                      });
                    }
                    var pe = _e(I, 2);
                    {
                      var k = (re) => {
                        var Y = Lb(), de = Q(Y);
                        {
                          var oe = (Fe) => {
                            var we = Sb();
                            we.__input = [Cb, E], He(() => Sa(we, "placeholder", `${f()} ${s(M).headerName}`)), xa(we, () => v[s(M).field], (le) => v[s(M).field] = le), O(Fe, we);
                          };
                          ue(de, (Fe) => {
                            s(M).filterType === "text" && Fe(oe);
                          });
                        }
                        var Qe = _e(de, 2);
                        {
                          var Ze = (Fe) => {
                            var we = Tb();
                            we.__input = [xb, E], He(() => Sa(we, "placeholder", `${f()} ${s(M).headerName}`)), xa(we, () => v[s(M).field], (le) => v[s(M).field] = le), O(Fe, we);
                          };
                          ue(Qe, (Fe) => {
                            s(M).filterType === "number" && Fe(Ze);
                          });
                        }
                        O(re, Y);
                      };
                      ue(pe, (re) => {
                        s(M).filter && re(k);
                      });
                    }
                    He(() => {
                      tn(D, `min-width: ${s(M).minWidth ?? 0 ?? ""}`), pt(te, s(M).headerName);
                    }), O(G, D);
                  },
                  $$slots: { default: !0 }
                });
              }), O(H, ye);
            },
            $$slots: { default: !0 }
          });
        },
        $$slots: { default: !0 }
      });
      var L = _e(A, 2);
      ub(L, {
        children: (U, X) => {
          var H = ie(), B = Q(H);
          yr(B, 1, i, no, (ye, V) => {
            mu(ye, {
              children: (F, M) => {
                var G = ie(), ee = Q(G);
                yr(ee, 17, c, (D) => D.field, (D, I) => {
                  var w = ie(), te = Q(w);
                  {
                    var P = (pe) => {
                      is(pe, {
                        children: (k, re) => {
                          var Y = Ob();
                          yr(Y, 21, h, no, (de, oe) => {
                            var Qe = ie(), Ze = Q(Qe);
                            {
                              var Fe = (le) => {
                                {
                                  let Le = /* @__PURE__ */ se(() => s(oe).disabled(s(V)));
                                  Bp(le, {
                                    get iconComponent() {
                                      return s(oe).iconComponent;
                                    },
                                    get iconStyles() {
                                      return s(oe).iconStyles;
                                    },
                                    callback: () => s(oe).callback(s(V)),
                                    get disabled() {
                                      return s(Le);
                                    }
                                  });
                                }
                              }, we = (le) => {
                                {
                                  let Le = /* @__PURE__ */ se(() => s(oe).disabled(s(V)));
                                  tl(le, {
                                    class: "button",
                                    variant: "raised",
                                    callback: () => s(oe).callback(s(V)),
                                    get disabled() {
                                      return s(Le);
                                    },
                                    children: (Je, N) => {
                                      var q = ie(), J = Q(q);
                                      {
                                        var Ce = (yt) => {
                                          Tg(yt, { svgStyles: "margin: unset" });
                                        }, Nt = (yt) => {
                                          var bn = ie(), he = Q(bn);
                                          {
                                            var me = (z) => {
                                              nd(z, { svgStyles: "margin: unset" });
                                            }, W = (z) => {
                                              var De = ie(), ut = Q(De);
                                              {
                                                var gt = (_t) => {
                                                  Og(_t, { svgStyles: "margin: unset" });
                                                }, Ot = (_t) => {
                                                  var Yn = ie(), ft = Q(Yn);
                                                  {
                                                    var Rt = (zt) => {
                                                      Mg(zt, { svgStyles: "margin: unset" });
                                                    }, Bt = (zt) => {
                                                      var kr = ie(), Hn = Q(kr);
                                                      {
                                                        var Ge = (Ke) => {
                                                          Fg(Ke, { svgStyles: "margin: unset" });
                                                        }, tt = (Ke) => {
                                                          var xt = ie(), dn = Q(xt);
                                                          {
                                                            var nt = (ht) => {
                                                              kg(ht, { svgStyles: "margin: unset" });
                                                            }, Et = (ht) => {
                                                              var $e = ie(), Tt = Q($e);
                                                              {
                                                                var Rn = (ot) => {
                                                                  Gg(ot, { svgStyles: "margin: unset" });
                                                                }, an = (ot) => {
                                                                  Pg(ot, { svgStyles: "margin: unset" });
                                                                };
                                                                ue(
                                                                  Tt,
                                                                  (ot) => {
                                                                    s(oe).icon === "delete" ? ot(Rn) : ot(an, !1);
                                                                  },
                                                                  !0
                                                                );
                                                              }
                                                              O(ht, $e);
                                                            };
                                                            ue(
                                                              dn,
                                                              (ht) => {
                                                                s(oe).icon === "edit" ? ht(nt) : ht(Et, !1);
                                                              },
                                                              !0
                                                            );
                                                          }
                                                          O(Ke, xt);
                                                        };
                                                        ue(
                                                          Hn,
                                                          (Ke) => {
                                                            s(oe).icon === "remove" ? Ke(Ge) : Ke(tt, !1);
                                                          },
                                                          !0
                                                        );
                                                      }
                                                      O(zt, kr);
                                                    };
                                                    ue(
                                                      ft,
                                                      (zt) => {
                                                        s(oe).icon === "find-in-page" ? zt(Rt) : zt(Bt, !1);
                                                      },
                                                      !0
                                                    );
                                                  }
                                                  O(_t, Yn);
                                                };
                                                ue(
                                                  ut,
                                                  (_t) => {
                                                    s(oe).icon === "download" ? _t(gt) : _t(Ot, !1);
                                                  },
                                                  !0
                                                );
                                              }
                                              O(z, De);
                                            };
                                            ue(
                                              he,
                                              (z) => {
                                                s(oe).icon === "cancel" ? z(me) : z(W, !1);
                                              },
                                              !0
                                            );
                                          }
                                          O(yt, bn);
                                        };
                                        ue(J, (yt) => {
                                          s(oe).icon === "add" ? yt(Ce) : yt(Nt, !1);
                                        });
                                      }
                                      O(Je, q);
                                    },
                                    $$slots: { default: !0 }
                                  });
                                }
                              };
                              ue(Ze, (le) => {
                                s(oe).iconComponent ? le(Fe) : le(we, !1);
                              });
                            }
                            O(de, Qe);
                          }), O(k, Y);
                        },
                        $$slots: { default: !0 }
                      });
                    }, j = (pe) => {
                      is(pe, {
                        get numeric() {
                          return s(I).numeric;
                        },
                        get style() {
                          return s(I).cellStyle;
                        },
                        children: (k, re) => {
                          var Y = ie(), de = Q(Y);
                          {
                            var oe = (Ze) => {
                              var Fe = Kt();
                              He((we) => pt(Fe, we), [
                                () => s(I).valueFormatter(s(V)[s(I).field])
                              ]), O(Ze, Fe);
                            }, Qe = (Ze) => {
                              var Fe = Kt();
                              He(() => pt(Fe, s(V)[s(I).field] ?? "")), O(Ze, Fe);
                            };
                            ue(de, (Ze) => {
                              s(I).valueFormatter ? Ze(oe) : Ze(Qe, !1);
                            });
                          }
                          O(k, Y);
                        },
                        $$slots: { default: !0 }
                      });
                    };
                    ue(te, (pe) => {
                      s(I).field === "actions" ? pe(P) : pe(j, !1);
                    });
                  }
                  O(D, w);
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
Pr(["input"]);
function It(t) {
  return typeof t == "function";
}
function ol(t) {
  var e = function(r) {
    Error.call(r), r.stack = new Error().stack;
  }, n = t(e);
  return n.prototype = Object.create(Error.prototype), n.prototype.constructor = n, n;
}
var as = ol(function(t) {
  return function(n) {
    t(this), this.message = n ? n.length + ` errors occurred during unsubscription:
` + n.map(function(r, i) {
      return i + 1 + ") " + r.toString();
    }).join(`
  `) : "", this.name = "UnsubscriptionError", this.errors = n;
  };
});
function Os(t, e) {
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
          } catch (g) {
            e = { error: g };
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
      if (It(d))
        try {
          d();
        } catch (g) {
          a = g instanceof as ? g.errors : [g];
        }
      var h = this._finalizers;
      if (h) {
        this._finalizers = null;
        try {
          for (var f = wt(h), v = f.next(); !v.done; v = f.next()) {
            var p = v.value;
            try {
              bu(p);
            } catch (g) {
              a = a ?? [], g instanceof as ? a = Kn(Kn([], Tr(a)), Tr(g.errors)) : a.push(g);
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
        throw new as(a);
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
    n === e ? this._parentage = null : Array.isArray(n) && Os(n, e);
  }, t.prototype.remove = function(e) {
    var n = this._finalizers;
    n && Os(n, e), e instanceof t && e._removeParent(this);
  }, t.EMPTY = function() {
    var e = new t();
    return e.closed = !0, e;
  }(), t;
}();
Ho.EMPTY;
function id(t) {
  return t instanceof Ho || t && "closed" in t && It(t.remove) && It(t.add) && It(t.unsubscribe);
}
function bu(t) {
  It(t) ? t() : t.unsubscribe();
}
var Db = {
  Promise: void 0
}, Pb = {
  setTimeout: function(t, e) {
    for (var n = [], r = 2; r < arguments.length; r++)
      n[r - 2] = arguments[r];
    return setTimeout.apply(void 0, Kn([t, e], Tr(n)));
  },
  clearTimeout: function(t) {
    return clearTimeout(t);
  },
  delegate: void 0
};
function ad(t) {
  Pb.setTimeout(function() {
    throw t;
  });
}
function Iu() {
}
function Nb(t) {
  t();
}
var sl = function(t) {
  et(e, t);
  function e(n) {
    var r = t.call(this) || this;
    return r.isStopped = !1, n ? (r.destination = n, id(n) && n.add(r)) : r.destination = Fb, r;
  }
  return e.create = function(n, r, i) {
    return new Rs(n, r, i);
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
}(Ho), Ub = function() {
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
}(), Rs = function(t) {
  et(e, t);
  function e(n, r, i) {
    var a = t.call(this) || this, o;
    return It(n) || !n ? o = {
      next: n ?? void 0,
      error: r ?? void 0,
      complete: i ?? void 0
    } : o = n, a.destination = new Ub(o), a;
  }
  return e;
}(sl);
function Qa(t) {
  ad(t);
}
function Hb(t) {
  throw t;
}
var Fb = {
  closed: !0,
  next: Iu,
  error: Hb,
  complete: Iu
}, ll = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}();
function Fo(t) {
  return t;
}
function Bb(t) {
  return t.length === 0 ? Fo : t.length === 1 ? t[0] : function(n) {
    return t.reduce(function(r, i) {
      return i(r);
    }, n);
  };
}
var gn = function() {
  function t(e) {
    e && (this._subscribe = e);
  }
  return t.prototype.lift = function(e) {
    var n = new t();
    return n.source = this, n.operator = e, n;
  }, t.prototype.subscribe = function(e, n, r) {
    var i = this, a = Vb(e) ? e : new Rs(e, n, r);
    return Nb(function() {
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
      var o = new Rs({
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
    return Bb(e)(this);
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
  return (e = t ?? Db.Promise) !== null && e !== void 0 ? e : Promise;
}
function kb(t) {
  return t && It(t.next) && It(t.error) && It(t.complete);
}
function Vb(t) {
  return t && t instanceof sl || kb(t) && id(t);
}
function Gb(t) {
  return It(t == null ? void 0 : t.lift);
}
function Br(t) {
  return function(e) {
    if (Gb(e))
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
  return new jb(t, e, n, r, i);
}
var jb = function(t) {
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
}(sl), qb = {
  now: function() {
    return Date.now();
  }
}, Wb = function(t) {
  et(e, t);
  function e(n, r) {
    return t.call(this) || this;
  }
  return e.prototype.schedule = function(n, r) {
    return this;
  }, e;
}(Ho), _u = {
  setInterval: function(t, e) {
    for (var n = [], r = 2; r < arguments.length; r++)
      n[r - 2] = arguments[r];
    return setInterval.apply(void 0, Kn([t, e], Tr(n)));
  },
  clearInterval: function(t) {
    return clearInterval(t);
  },
  delegate: void 0
}, Kb = function(t) {
  et(e, t);
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
    return i === void 0 && (i = 0), _u.setInterval(n.flush.bind(n, this), i);
  }, e.prototype.recycleAsyncId = function(n, r, i) {
    if (i === void 0 && (i = 0), i != null && this.delay === i && this.pending === !1)
      return r;
    r != null && _u.clearInterval(r);
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
      this.work = this.state = this.scheduler = null, this.pending = !1, Os(a, this), r != null && (this.id = this.recycleAsyncId(i, r, null)), this.delay = null, t.prototype.unsubscribe.call(this);
    }
  }, e;
}(Wb), Eu = function() {
  function t(e, n) {
    n === void 0 && (n = t.now), this.schedulerActionCtor = e, this.now = n;
  }
  return t.prototype.schedule = function(e, n, r) {
    return n === void 0 && (n = 0), new this.schedulerActionCtor(this, e).schedule(r, n);
  }, t.now = qb.now, t;
}(), zb = function(t) {
  et(e, t);
  function e(n, r) {
    r === void 0 && (r = Eu.now);
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
}(Eu), od = new zb(Kb), Xb = od, Yb = new gn(function(t) {
  return t.complete();
});
function sd(t) {
  return t && It(t.schedule);
}
function ld(t) {
  return t[t.length - 1];
}
function Zb(t) {
  return It(ld(t)) ? t.pop() : void 0;
}
function ud(t) {
  return sd(ld(t)) ? t.pop() : void 0;
}
var cd = function(t) {
  return t && typeof t.length == "number" && typeof t != "function";
};
function dd(t) {
  return It(t == null ? void 0 : t.then);
}
function fd(t) {
  return It(t[ll]);
}
function hd(t) {
  return Symbol.asyncIterator && It(t == null ? void 0 : t[Symbol.asyncIterator]);
}
function vd(t) {
  return new TypeError("You provided " + (t !== null && typeof t == "object" ? "an invalid object" : "'" + t + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
}
function Qb() {
  return typeof Symbol != "function" || !Symbol.iterator ? "@@iterator" : Symbol.iterator;
}
var pd = Qb();
function md(t) {
  return It(t == null ? void 0 : t[pd]);
}
function gd(t) {
  return wh(this, arguments, function() {
    var n, r, i, a;
    return Qs(this, function(o) {
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
function bd(t) {
  return It(t == null ? void 0 : t.getReader);
}
function vi(t) {
  if (t instanceof gn)
    return t;
  if (t != null) {
    if (fd(t))
      return Jb(t);
    if (cd(t))
      return $b(t);
    if (dd(t))
      return eI(t);
    if (hd(t))
      return Id(t);
    if (md(t))
      return tI(t);
    if (bd(t))
      return nI(t);
  }
  throw vd(t);
}
function Jb(t) {
  return new gn(function(e) {
    var n = t[ll]();
    if (It(n.subscribe))
      return n.subscribe(e);
    throw new TypeError("Provided object does not correctly implement Symbol.observable");
  });
}
function $b(t) {
  return new gn(function(e) {
    for (var n = 0; n < t.length && !e.closed; n++)
      e.next(t[n]);
    e.complete();
  });
}
function eI(t) {
  return new gn(function(e) {
    t.then(function(n) {
      e.closed || (e.next(n), e.complete());
    }, function(n) {
      return e.error(n);
    }).then(null, ad);
  });
}
function tI(t) {
  return new gn(function(e) {
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
function Id(t) {
  return new gn(function(e) {
    rI(t, e).catch(function(n) {
      return e.error(n);
    });
  });
}
function nI(t) {
  return Id(gd(t));
}
function rI(t, e) {
  var n, r, i, a;
  return Ic(this, void 0, void 0, function() {
    var o, u;
    return Qs(this, function(l) {
      switch (l.label) {
        case 0:
          l.trys.push([0, 5, 6, 11]), n = Oh(t), l.label = 1;
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
function Sr(t, e, n, r, i) {
  r === void 0 && (r = 0), i === void 0 && (i = !1);
  var a = e.schedule(function() {
    n(), i ? t.add(this.schedule(null, r)) : this.unsubscribe();
  }, r);
  if (t.add(a), !i)
    return a;
}
function yd(t, e) {
  return e === void 0 && (e = 0), Br(function(n, r) {
    n.subscribe(Lr(r, function(i) {
      return Sr(r, t, function() {
        return r.next(i);
      }, e);
    }, function() {
      return Sr(r, t, function() {
        return r.complete();
      }, e);
    }, function(i) {
      return Sr(r, t, function() {
        return r.error(i);
      }, e);
    }));
  });
}
function _d(t, e) {
  return e === void 0 && (e = 0), Br(function(n, r) {
    r.add(t.schedule(function() {
      return n.subscribe(r);
    }, e));
  });
}
function iI(t, e) {
  return vi(t).pipe(_d(e), yd(e));
}
function aI(t, e) {
  return vi(t).pipe(_d(e), yd(e));
}
function oI(t, e) {
  return new gn(function(n) {
    var r = 0;
    return e.schedule(function() {
      r === t.length ? n.complete() : (n.next(t[r++]), n.closed || this.schedule());
    });
  });
}
function sI(t, e) {
  return new gn(function(n) {
    var r;
    return Sr(n, e, function() {
      r = t[pd](), Sr(n, e, function() {
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
      return It(r == null ? void 0 : r.return) && r.return();
    };
  });
}
function Ed(t, e) {
  if (!t)
    throw new Error("Iterable cannot be null");
  return new gn(function(n) {
    Sr(n, e, function() {
      var r = t[Symbol.asyncIterator]();
      Sr(n, e, function() {
        r.next().then(function(i) {
          i.done ? n.complete() : n.next(i.value);
        });
      }, 0, !0);
    });
  });
}
function lI(t, e) {
  return Ed(gd(t), e);
}
function uI(t, e) {
  if (t != null) {
    if (fd(t))
      return iI(t, e);
    if (cd(t))
      return oI(t, e);
    if (dd(t))
      return aI(t, e);
    if (hd(t))
      return Ed(t, e);
    if (md(t))
      return sI(t, e);
    if (bd(t))
      return lI(t, e);
  }
  throw vd(t);
}
function Bo(t, e) {
  return e ? uI(t, e) : vi(t);
}
function wa() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  var n = ud(t);
  return Bo(t, n);
}
var cI = ol(function(t) {
  return function() {
    t(this), this.name = "EmptyError", this.message = "no elements in sequence";
  };
});
function dI(t, e) {
  return new Promise(function(n, r) {
    var i = !1, a;
    t.subscribe({
      next: function(o) {
        a = o, i = !0;
      },
      error: r,
      complete: function() {
        i ? n(a) : r(new cI());
      }
    });
  });
}
function fI(t) {
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
var hI = Array.isArray;
function vI(t, e) {
  return hI(e) ? t.apply(void 0, Kn([], Tr(e))) : t(e);
}
function pI(t) {
  return xn(function(e) {
    return vI(t, e);
  });
}
var mI = Array.isArray, gI = Object.getPrototypeOf, bI = Object.prototype, II = Object.keys;
function yI(t) {
  if (t.length === 1) {
    var e = t[0];
    if (mI(e))
      return { args: e, keys: null };
    if (_I(e)) {
      var n = II(e);
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
function _I(t) {
  return t && typeof t == "object" && gI(t) === bI;
}
function EI(t, e) {
  return t.reduce(function(n, r, i) {
    return n[r] = e[i], n;
  }, {});
}
function AI() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  var n = ud(t), r = Zb(t), i = yI(t), a = i.args, o = i.keys;
  if (a.length === 0)
    return Bo([], n);
  var u = new gn(CI(a, n, o ? function(l) {
    return EI(o, l);
  } : Fo));
  return r ? u.pipe(pI(r)) : u;
}
function CI(t, e, n) {
  return n === void 0 && (n = Fo), function(r) {
    Au(e, function() {
      for (var i = t.length, a = new Array(i), o = i, u = i, l = function(d) {
        Au(e, function() {
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
function Au(t, e, n) {
  t ? Sr(n, t, e) : e();
}
function SI(t, e, n, r, i, a, o, u) {
  var l = [], c = 0, d = 0, h = !1, f = function() {
    h && !l.length && !c && e.complete();
  }, v = function(g) {
    return c < r ? p(g) : l.push(g);
  }, p = function(g) {
    c++;
    var y = !1;
    vi(n(g, d++)).subscribe(Lr(e, function(E) {
      e.next(E);
    }, function() {
      y = !0;
    }, void 0, function() {
      if (y)
        try {
          c--;
          for (var E = function() {
            var S = l.shift();
            o || p(S);
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
  return n === void 0 && (n = 1 / 0), It(e) ? vo(function(r, i) {
    return xn(function(a, o) {
      return e(r, a, i, o);
    })(vi(t(r, i)));
  }, n) : (typeof e == "number" && (n = e), Br(function(r, i) {
    return SI(r, i, t, n);
  }));
}
function xI(t, e, n) {
  n === void 0 && (n = Xb);
  var r = -1;
  return e != null && (sd(e) ? n = e : r = e), new gn(function(i) {
    var a = fI(t) ? +t - n.now() : t;
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
      a = vi(t(o, Oa(t)(e))), r ? (r.unsubscribe(), r = null, a.subscribe(n)) : i = !0;
    })), i && (r.unsubscribe(), r = null, a.subscribe(n));
  });
}
function TI(t, e) {
  return It(e) ? vo(t, e, 1) : vo(t, 1);
}
function wr(t) {
  return t <= 0 ? function() {
    return Yb;
  } : Br(function(e, n) {
    var r = 0;
    e.subscribe(Lr(n, function(i) {
      ++r <= t && (n.next(i), t <= r && n.complete());
    }));
  });
}
function LI(t) {
  return xn(function() {
    return t;
  });
}
function wI(t, e) {
  return vo(function(n, r) {
    return vi(t(n, r)).pipe(wr(1), LI(n));
  });
}
function OI(t, e) {
  e === void 0 && (e = od);
  var n = xI(t, e);
  return wI(function() {
    return n;
  });
}
function RI(t) {
  return Br(function(e, n) {
    try {
      e.subscribe(n);
    } finally {
      n.add(t);
    }
  });
}
function Ra(t, e, n) {
  var r = It(t) || e || n ? { next: t, error: e, complete: n } : t;
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
function Ad(t) {
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
var MI = /* @__PURE__ */ function() {
  function t(e, n, r, i) {
    i === void 0 && (i = "download_load"), this.originalEvent = e, this.xhr = n, this.request = r, this.type = i;
    var a = n.status, o = n.responseType;
    this.status = a ?? 0, this.responseType = o ?? "";
    var u = n.getAllResponseHeaders();
    this.responseHeaders = u ? u.split(`
`).reduce(function(d, h) {
      var f = h.indexOf(": ");
      return d[h.slice(0, f)] = h.slice(f + 2), d;
    }, {}) : {}, this.response = Ad(n);
    var l = e.loaded, c = e.total;
    this.loaded = l, this.total = c;
  }
  return t;
}(), po = ol(function(t) {
  return function(n, r, i) {
    this.message = n, this.name = "AjaxError", this.xhr = r, this.request = i, this.status = r.status, this.responseType = r.responseType;
    var a;
    try {
      a = Ad(r);
    } catch {
      a = r.responseText;
    }
    this.response = a;
  };
}), DI = function() {
  function t(e, n) {
    return po.call(this, "ajax timeout", e, n), this.name = "AjaxTimeoutError", this;
  }
  return t.prototype = Object.create(po.prototype), t;
}();
function PI(t, e) {
  return pi({ method: "GET", url: t, headers: e });
}
function NI(t, e, n) {
  return pi({ method: "POST", url: t, body: e, headers: n });
}
function UI(t, e) {
  return pi({ method: "DELETE", url: t, headers: e });
}
function HI(t, e, n) {
  return pi({ method: "PUT", url: t, body: e, headers: n });
}
function FI(t, e, n) {
  return pi({ method: "PATCH", url: t, body: e, headers: n });
}
var BI = xn(function(t) {
  return t.response;
});
function kI(t, e) {
  return BI(pi({
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
    return GI(n);
  };
  return t.get = PI, t.post = NI, t.delete = UI, t.put = HI, t.patch = FI, t.getJSON = kI, t;
}(), VI = "upload", Cu = "download", os = "loadstart", ss = "progress", Su = "load";
function GI(t) {
  return new gn(function(e) {
    var n, r, i = ce({ async: !0, crossDomain: !1, withCredentials: !1, method: "GET", timeout: 0, responseType: "json" }, t), a = i.queryParams, o = i.body, u = i.headers, l = i.url;
    if (!l)
      throw new TypeError("url is required");
    if (a) {
      var c;
      if (l.includes("?")) {
        var d = l.split("?");
        if (2 < d.length)
          throw new TypeError("invalid url");
        c = new URLSearchParams(d[1]), new URLSearchParams(a).forEach(function(M, G) {
          return c.set(G, M);
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
    var p = i.withCredentials, g = i.xsrfCookieName, y = i.xsrfHeaderName;
    if ((p || !v) && g && y) {
      var E = (r = (n = document == null ? void 0 : document.cookie.match(new RegExp("(^|;\\s*)(" + g + ")=([^;]*)"))) === null || n === void 0 ? void 0 : n.pop()) !== null && r !== void 0 ? r : "";
      E && (h[y] = E);
    }
    var S = jI(o, h), C = ce(ce({}, i), {
      url: l,
      headers: h,
      body: S
    }), b;
    b = t.createXHR ? t.createXHR() : new XMLHttpRequest();
    {
      var _ = t.progressSubscriber, x = t.includeDownloadProgress, T = x === void 0 ? !1 : x, A = t.includeUploadProgress, L = A === void 0 ? !1 : A, U = function(M, G) {
        b.addEventListener(M, function() {
          var ee, D = G();
          (ee = _ == null ? void 0 : _.error) === null || ee === void 0 || ee.call(_, D), e.error(D);
        });
      };
      U("timeout", function() {
        return new DI(b, C);
      }), U("abort", function() {
        return new po("aborted", b, C);
      });
      var X = function(M, G) {
        return new MI(G, b, C, M + "_" + G.type);
      }, H = function(M, G, ee) {
        M.addEventListener(G, function(D) {
          e.next(X(ee, D));
        });
      };
      L && [os, ss, Su].forEach(function(M) {
        return H(b.upload, M, VI);
      }), _ && [os, ss].forEach(function(M) {
        return b.upload.addEventListener(M, function(G) {
          var ee;
          return (ee = _ == null ? void 0 : _.next) === null || ee === void 0 ? void 0 : ee.call(_, G);
        });
      }), T && [os, ss].forEach(function(M) {
        return H(b, M, Cu);
      });
      var B = function(M) {
        var G = "ajax error" + (M ? " " + M : "");
        e.error(new po(G, b, C));
      };
      b.addEventListener("error", function(M) {
        var G;
        (G = _ == null ? void 0 : _.error) === null || G === void 0 || G.call(_, M), B();
      }), b.addEventListener(Su, function(M) {
        var G, ee, D = b.status;
        if (D < 400) {
          (G = _ == null ? void 0 : _.complete) === null || G === void 0 || G.call(_);
          var I = void 0;
          try {
            I = X(Cu, M);
          } catch (w) {
            e.error(w);
            return;
          }
          e.next(I), e.complete();
        } else
          (ee = _ == null ? void 0 : _.error) === null || ee === void 0 || ee.call(_, M), B(D);
      });
    }
    var ye = C.user, V = C.method, F = C.async;
    ye ? b.open(V, l, F, ye, C.password) : b.open(V, l, F), F && (b.timeout = C.timeout, b.responseType = C.responseType), "withCredentials" in b && (b.withCredentials = C.withCredentials);
    for (var f in h)
      h.hasOwnProperty(f) && b.setRequestHeader(f, h[f]);
    return S ? b.send(S) : b.send(), function() {
      b && b.readyState !== 4 && b.abort();
    };
  });
}
function jI(t, e) {
  var n;
  if (!t || typeof t == "string" || YI(t) || ZI(t) || WI(t) || KI(t) || zI(t) || QI(t))
    return t;
  if (XI(t))
    return t.buffer;
  if (typeof t == "object")
    return e["content-type"] = (n = e["content-type"]) !== null && n !== void 0 ? n : "application/json;charset=utf-8", JSON.stringify(t);
  throw new TypeError("Unknown body type");
}
var qI = Object.prototype.toString;
function ul(t, e) {
  return qI.call(t) === "[object " + e + "]";
}
function WI(t) {
  return ul(t, "ArrayBuffer");
}
function KI(t) {
  return ul(t, "File");
}
function zI(t) {
  return ul(t, "Blob");
}
function XI(t) {
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView(t);
}
function YI(t) {
  return typeof FormData < "u" && t instanceof FormData;
}
function ZI(t) {
  return typeof URLSearchParams < "u" && t instanceof URLSearchParams;
}
function QI(t) {
  return typeof ReadableStream < "u" && t instanceof ReadableStream;
}
class JI {
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
const $I = new JI("https://demo.compas.energy", {}, "DSOM Versatel Production URL"), ey = [$I], ty = ey[0].getUrl();
class cl {
  constructor(e = {}) {
    this.configuration = e;
  }
  get basePath() {
    return this.configuration.basePath ?? ty;
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
class Cd {
  constructor(e = new cl()) {
    this.configuration = e, this.middleware = [], this.withMiddleware = (n) => {
      const r = this.clone();
      return r.middleware = r.middleware.concat(n), r;
    }, this.withPreMiddleware = (n) => this.withMiddleware(n.map((r) => ({ pre: r }))), this.withPostMiddleware = (n) => this.withMiddleware(n.map((r) => ({ post: r }))), this.createRequestArgs = ({ url: n, query: r, method: i, headers: a, body: o, responseType: u }) => ({
      url: `${this.configuration.basePath}${n}${r && Object.keys(r).length ? `?${ny(r)}` : ""}`,
      method: i,
      headers: a,
      body: o instanceof FormData ? o : JSON.stringify(o),
      responseType: u ?? "json"
    }), this.rxjsRequest = (n) => wa(n).pipe(
      xn((r) => (this.middleware.filter((i) => i.pre).forEach((i) => r = i.pre(r)), r)),
      TI(
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
const jt = (t) => encodeURIComponent(`${t}`), ny = (t) => Object.entries(t).map(
  ([e, n]) => n instanceof Array ? n.map((r) => `${jt(e)}=${jt(r)}`).join("&") : `${jt(e)}=${jt(n)}`
).join("&"), sn = (t, e, n) => {
  if (t == null)
    throw new Error(`Parameter "${e}" was null or undefined when calling "${n}".`);
};
class ry extends Cd {
  archiveResource({ id: e, version: n, xAuthor: r, xApprover: i, contentType: a, xFilename: o, body: u }, l) {
    sn(e, "id", "archiveResource"), sn(n, "version", "archiveResource");
    const c = {
      "Content-Type": "application/octet-stream",
      ...r != null ? { "X-author": String(r) } : void 0,
      ...i != null ? { "X-approver": String(i) } : void 0,
      ...a != null ? { "Content-Type": String(a) } : void 0,
      ...o != null ? { "X-filename": String(o) } : void 0
    };
    return this.request({
      url: "/api/archive/referenced-resource/{id}/versions/{version}".replace("{id}", jt(e)).replace("{version}", jt(n)),
      method: "POST",
      headers: c,
      body: u
    }, l == null ? void 0 : l.responseOpts);
  }
  archiveSclResource({ id: e, version: n }, r) {
    sn(e, "id", "archiveSclResource"), sn(n, "version", "archiveSclResource");
    const i = {};
    return this.request({
      url: "/api/archive/scl/{id}/versions/{version}".replace("{id}", jt(e)).replace("{version}", jt(n)),
      method: "POST",
      headers: i
    }, r == null ? void 0 : r.responseOpts);
  }
  retrieveArchivedResourceHistory({ id: e }, n) {
    sn(e, "id", "retrieveArchivedResourceHistory");
    const r = {};
    return this.request({
      url: "/api/archive/resources/{id}/versions".replace("{id}", jt(e)),
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
class iy extends Cd {
  assignResourceToLocation({ locationId: e, uuid: n }, r) {
    sn(e, "locationId", "assignResourceToLocation"), sn(n, "uuid", "assignResourceToLocation");
    const i = {};
    return this.request({
      url: "/api/locations/{locationId}/resources/{uuid}/assign".replace("{locationId}", jt(e)).replace("{uuid}", jt(n)),
      method: "POST",
      headers: i
    }, r == null ? void 0 : r.responseOpts);
  }
  createLocation({ location: e }, n) {
    sn(e, "location", "createLocation");
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
    sn(e, "locationId", "deleteLocation");
    const r = {};
    return this.request({
      url: "/api/locations/{locationId}".replace("{locationId}", jt(e)),
      method: "DELETE",
      headers: r
    }, n == null ? void 0 : n.responseOpts);
  }
  getLocation({ locationId: e }, n) {
    sn(e, "locationId", "getLocation");
    const r = {};
    return this.request({
      url: "/api/locations/{locationId}".replace("{locationId}", jt(e)),
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
    sn(e, "locationId", "unassignResourceFromLocation"), sn(n, "uuid", "unassignResourceFromLocation");
    const i = {};
    return this.request({
      url: "/api/locations/{locationId}/resources/{uuid}/unassign".replace("{locationId}", jt(e)).replace("{uuid}", jt(n)),
      method: "POST",
      headers: i
    }, r == null ? void 0 : r.responseOpts);
  }
  updateLocation({ locationId: e, location: n }, r) {
    sn(e, "locationId", "updateLocation"), sn(n, "location", "updateLocation");
    const i = {
      "Content-Type": "application/json"
    };
    return this.request({
      url: "/api/locations/{locationId}".replace("{locationId}", jt(e)),
      method: "PUT",
      headers: i,
      body: n
    }, r == null ? void 0 : r.responseOpts);
  }
}
class ma {
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
class Qr {
  constructor() {
    this.baseUrl = "/compas-scl-data-service", this.dummySearchResults = [
      new ma(
        pr(),
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
      new ma(
        pr(),
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
      wr(1),
      xn((n) => n.resources),
      xn(
        (n) => n.map((r) => this.mapToArchiveSearchResult(r))
      ),
      Oa(() => wa(this.dummySearchResults)),
      OI(500)
    );
  }
  retrieveArchivedResourceHistory(e) {
    return this.generateApiClient().retrieveArchivedResourceHistory({ id: e }).pipe(
      wr(1),
      xn((n) => n.versions),
      xn(
        (n) => n.map((r) => this.mapToArchiveSearchResult(r))
      ),
      Oa(() => wa([
        new ma(
          pr(),
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
          [{ key: "SOURCE_RESOURCE_ID", value: pr() }]
        ),
        new ma(
          pr(),
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
          [{ key: "SOURCE_RESOURCE_ID", value: pr() }]
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
    return new ma(
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
    const e = new cl({
      basePath: this.baseUrl
      // accessToken: authInfo.token,
    });
    return new ry(e);
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
      wr(1),
      Oa(() => wa([
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
    const e = new cl({
      basePath: this.baseUrl
      // accessToken: authInfo.token,
    });
    return new iy(e);
  }
}
var Na;
const wi = class wi {
  constructor() {
    Xe(this, Na, dt(/* @__PURE__ */ new Map()));
  }
  static getInstance() {
    return wi.instance || (wi.instance = new wi()), wi.instance;
  }
  get store() {
    return Z(this, Na);
  }
  updateData(e) {
    Z(this, Na).set(e);
  }
};
Na = new WeakMap();
let Ms = wi;
var Vi;
const Oi = class Oi {
  constructor() {
    Xe(this, Vi, dt(/* @__PURE__ */ new Map()));
  }
  static getInstance() {
    return Oi.instance || (Oi.instance = new Oi()), Oi.instance;
  }
  get store() {
    return Z(this, Vi);
  }
  updateData(e) {
    Z(this, Vi).set(e);
  }
  getLocationNameByUuid(e) {
    return Oo(Z(this, Vi)).get(e);
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
    return Z(this, Gi);
  }
  get currentData() {
    return Oo(Z(this, Gi));
  }
  updateData(e) {
    Z(this, Gi).set(e);
  }
};
Gi = new WeakMap();
let Ds = Ri;
var ji;
const Mi = class Mi {
  constructor() {
    Xe(this, ji, dt([]));
  }
  static getInstance() {
    return Mi.instance || (Mi.instance = new Mi()), Mi.instance;
  }
  get store() {
    return Z(this, ji);
  }
  get currentData() {
    return Oo(Z(this, ji));
  }
  updateData(e) {
    Z(this, ji).set(e);
  }
};
ji = new WeakMap();
let Ps = Mi;
class Li {
  constructor() {
    this.locationService = Ti.getInstance(), this.archiveExplorerLocationStore = mo.getInstance();
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
    return dI(
      this.locationService.listLocations().pipe(
        wr(1),
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
function ay(t, e) {
  Oe(e, !0);
  const n = Qr.getInstance(), r = { store: dt([]) };
  let i = /* @__PURE__ */ Ae(!1);
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
  at(() => {
    e.searchResult && n.retrieveArchivedResourceHistory(e.searchResult.uuid).pipe(wr(1), Ra((c) => {
      r.store.set(c), ne(i, !0);
    })).subscribe();
  });
  function l(c) {
    var h;
    let d;
    c.fields && c.fields.length && (d = (h = c.fields.find((f) => f.key === "SOURCE_RESOURCE_ID")) == null ? void 0 : h.value), n.findByUUIDAndVersion(d, c.type, c.version).pipe(
      wr(1),
      Ra((f) => {
        const v = window.URL.createObjectURL(f), p = document.createElement("a");
        p.href = v, p.download = c.filename, p.style.display = "none", document.body.appendChild(p), p.click(), document.body.removeChild(p), window.URL.revokeObjectURL(v);
      }),
      Oa((f) => (console.error(f), alert(f), wa(void 0)))
    ).subscribe();
  }
  Mb(t, {
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
var oy = /* @__PURE__ */ ve("<span><!></span>"), sy = /* @__PURE__ */ ve("<!> <br/>", 1), ly = /* @__PURE__ */ ve("<i> </i>"), uy = /* @__PURE__ */ ve('<div class="result-container"><div class="content"><!></div></div>');
function cy(t, e) {
  Oe(e, !0);
  let n = m(e, "searchResults", 19, () => []), r = m(e, "noResourcesLabel", 3, "No resources found.");
  var i = uy(), a = Ie(i), o = Ie(a);
  {
    var u = (c) => {
      var d = ie(), h = Q(d);
      yr(h, 17, n, (f) => f.uuid, (f, v) => {
        var p = sy(), g = Q(p);
        rd(g, {
          get title() {
            return s(v).name;
          },
          content: (E) => {
            var S = oy(), C = Ie(S);
            ay(C, {
              get searchResult() {
                return s(v);
              }
            }), O(E, S);
          },
          $$slots: { content: !0 }
        }), O(f, p);
      }), O(c, d);
    }, l = (c) => {
      var d = ly(), h = Ie(d);
      He(() => pt(h, r())), O(c, d);
    };
    ue(o, (c) => {
      n().length ? c(u) : c(l, !1);
    });
  }
  O(t, i), Re();
}
ap({ en: gp, de: dp });
var dy = /* @__PURE__ */ ve("<!> <!>", 1), fy = /* @__PURE__ */ ve("<span><!></span>"), hy = /* @__PURE__ */ ve('<!> <div class="separator svelte-1gp5xzm"></div>', 1), vy = /* @__PURE__ */ ve('<div class="archive-explorer-container svelte-1gp5xzm" style="display: none;"><!> <div class="search-filter svelte-1gp5xzm"><!> <!></div> <div class="content-container svelte-1gp5xzm"><!></div></div>');
function py(t, e) {
  Oe(e, !0);
  const n = () => Dt(ip, "$_", r), [r, i] = wn(), a = Qr.getInstance(), o = Li.getInstance(), u = Ms.getInstance(), l = Ds.getInstance(), c = Ps.getInstance(), d = mo.getInstance();
  let h = /* @__PURE__ */ Ae(be([])), f = /* @__PURE__ */ Ae(be([])), v = /* @__PURE__ */ Ae(be(l.currentData)), p = /* @__PURE__ */ Ae(be(c.currentData)), g = /* @__PURE__ */ Ae(be(/* @__PURE__ */ new Map())), y = /* @__PURE__ */ Ae(!1), E = /* @__PURE__ */ Ae(!0);
  at(() => {
    setTimeout(
      () => {
        ne(E, !1);
      },
      1e3
    );
  });
  let S = /* @__PURE__ */ se(() => {
    var A;
    return s(v).length && !!((A = s(v)) != null && A.find((L) => L.key === "uuid"));
  });
  at(async () => {
    ne(h, o.createArchiveFilter(), !0), ne(f, await o.createLocationFilter(), !0), ne(y, !0);
  });
  function C() {
    ne(y, !1);
    const A = [], L = /* @__PURE__ */ new Map();
    s(p).forEach((U) => {
      const X = o.convertFilterToSearchParams(s(v));
      X.location = U.value, A.push(a.searchArchive(X).pipe(wr(1), Ra((H) => L.set(U.value, H)), RI(() => ne(y, !0))));
    }), l.updateData(s(v)), c.updateData(s(p)), AI(A).pipe(Ra(() => {
      u.updateData(L), ne(g, L, !0);
    })).subscribe();
  }
  var b = ie(), _ = Q(b);
  {
    var x = (A) => {
      {
        let L = /* @__PURE__ */ se(() => !s(E));
        vu(A, {
          get loadingDone() {
            return s(L);
          }
        });
      }
    }, T = (A) => {
      var L = vy(), U = Ie(L);
      vu(U, {
        get loadingDone() {
          return s(y);
        }
      });
      var X = _e(U, 2), H = Ie(X);
      {
        let M = /* @__PURE__ */ se(() => n()("add_filter")), G = /* @__PURE__ */ se(() => n()("filter_types"));
        hu(H, {
          get filterTypes() {
            return s(f);
          },
          useOptionLabelInChipText: !0,
          get addFilterLabel() {
            return s(M);
          },
          get selectFilterLabel() {
            return s(G);
          },
          get activeFilters() {
            return s(p);
          },
          set activeFilters(ee) {
            ne(p, ee, !0);
          }
        });
      }
      var B = _e(H, 2);
      {
        const M = (I) => {
          {
            let w = /* @__PURE__ */ se(() => !s(p).length);
            tl(I, {
              variant: "raised",
              callback: C,
              get disabled() {
                return s(w);
              },
              children: (te, P) => {
                var j = dy(), pe = Q(j);
                Ug(pe, {});
                var k = _e(pe, 2);
                Tp(k, {
                  children: (re, Y) => {
                    var de = Kt();
                    He((oe) => pt(de, oe), [() => n()("search")]), O(re, de);
                  },
                  $$slots: { default: !0 }
                }), O(te, j);
              },
              $$slots: { default: !0 }
            });
          }
        };
        let G = /* @__PURE__ */ se(() => s(S) || !s(p).length), ee = /* @__PURE__ */ se(() => n()("add_filter")), D = /* @__PURE__ */ se(() => n()("filter_types"));
        hu(B, {
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
            return s(D);
          },
          get activeFilters() {
            return s(v);
          },
          set activeFilters(I) {
            ne(v, I, !0);
          },
          filterControls: M,
          $$slots: { filterControls: !0 }
        });
      }
      var ye = _e(X, 2), V = Ie(ye);
      {
        var F = (M) => {
          var G = ie(), ee = Q(G);
          yr(ee, 18, () => s(g), (D) => D, (D, I, w) => {
            var te = hy(), P = Q(te);
            {
              const j = (re) => {
                var Y = fy(), de = Ie(Y);
                {
                  let oe = /* @__PURE__ */ se(() => n()("no_resources_found"));
                  cy(de, {
                    get searchResults() {
                      return I[1];
                    },
                    get noResourcesLabel() {
                      return s(oe);
                    }
                  });
                }
                O(re, Y);
              };
              let pe = /* @__PURE__ */ se(() => s(w) === 0), k = /* @__PURE__ */ se(() => d.getLocationNameByUuid(I[0]));
              rd(P, {
                get open() {
                  return s(pe);
                },
                get title() {
                  return s(k);
                },
                content: j,
                $$slots: { content: !0 }
              });
            }
            O(D, te);
          }), O(M, G);
        };
        ue(V, (M) => {
          s(g).size && M(F);
        });
      }
      O(A, L);
    };
    ue(_, (A) => {
      s(E) ? A(x) : A(T, !1);
    });
  }
  O(t, b), Re(), i();
}
const Sd = "archive-explorer", xd = "0.0.1";
var my = /* @__PURE__ */ ve('<!> <input type="hidden" name="package-name"/> <input type="hidden" name="package-version"/>', 1);
function gy(t, e) {
  Oe(e, !0);
  let n = m(e, "dev", 3, !1);
  var r = my(), i = Q(r);
  {
    var a = (l) => {
      py(l, {});
    };
    ue(i, (l) => {
      (e.doc || n()) && l(a);
    });
  }
  var o = _e(i, 2), u = _e(o, 2);
  He(() => {
    Ll(o, Sd), Ll(u, xd);
  }), O(t, r), Re();
}
var qi;
class Ey extends HTMLElement {
  constructor() {
    super();
    Xe(this, qi);
    Pe(this, qi, /* @__PURE__ */ Ae(be({ doc: void 0, editCount: void 0 })));
  }
  get props() {
    return s(Z(this, qi));
  }
  set props(n) {
    ne(Z(this, qi), n, !0);
  }
  connectedCallback() {
    var r;
    this.attachShadow({ mode: "open" }), this.props.doc = this._doc, this.props.editCount = this.editCount, Xf(gy, { target: this.shadowRoot, props: this.props });
    const n = by();
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
function by() {
  const t = `${Sd}-v${xd}-style`, e = Iy(), n = document.createElement("link");
  return n.rel = "stylesheet", n.type = "text/css", n.href = e, n.id = t, n;
}
function Iy() {
  const t = new URL(import.meta.url), e = t.origin, n = t.pathname.split("/").slice(0, -1).filter(Boolean).join("/");
  return [e, n, "style.css"].filter(Boolean).join("/");
}
export {
  Ey as default
};
