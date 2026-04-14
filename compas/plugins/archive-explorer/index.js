var Nd = Object.defineProperty;
var cl = (t) => {
  throw TypeError(t);
};
var Hd = (t, e, n) => e in t ? Nd(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var Ai = (t, e, n) => Hd(t, typeof e != "symbol" ? e + "" : e, n), zo = (t, e, n) => e.has(t) || cl("Cannot " + n);
var re = (t, e, n) => (zo(t, e, "read from private field"), n ? n.call(t) : e.get(t)), tt = (t, e, n) => e.has(t) ? cl("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, n), He = (t, e, n, r) => (zo(t, e, "write to private field"), r ? r.call(t, n) : e.set(t, n), n), Wt = (t, e, n) => (zo(t, e, "access private method"), n);
const Nt = Symbol(), Ud = "http://www.w3.org/1999/xhtml", kd = "http://www.w3.org/2000/svg", Bd = "@attach", wu = !1;
var Ro = Array.isArray, Fd = Array.prototype.indexOf, Hs = Array.from, ho = Object.defineProperty, Lr = Object.getOwnPropertyDescriptor, Lu = Object.getOwnPropertyDescriptors, Vd = Object.prototype, Gd = Array.prototype, Us = Object.getPrototypeOf, dl = Object.isExtensible;
function Li(t) {
  return typeof t == "function";
}
const pe = () => {
};
function jd(t) {
  return t();
}
function vo(t) {
  for (var e = 0; e < t.length; e++)
    t[e]();
}
function Ou() {
  var t, e, n = new Promise((r, i) => {
    t = r, e = i;
  });
  return { promise: n, resolve: t, reject: e };
}
const rn = 2, ks = 4, Mo = 8, Pr = 16, gr = 32, hi = 64, Bs = 128, Ln = 256, mo = 512, Kt = 1024, In = 2048, Nr = 4096, Fn = 8192, vi = 16384, Do = 32768, Hr = 65536, fl = 1 << 17, Wd = 1 << 18, $i = 1 << 19, Ru = 1 << 20, fs = 1 << 21, Po = 1 << 22, ii = 1 << 23, Zn = Symbol("$state"), Mu = Symbol("legacy props"), qd = Symbol(""), Oi = new class extends Error {
  constructor() {
    super(...arguments);
    Ai(this, "name", "StaleReactionError");
    Ai(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
function Fs(t) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function zd() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function Xd(t) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Kd() {
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
function Du(t) {
  return t === this.v;
}
function Vs(t, e) {
  return t != t ? e == e : t !== e || t !== null && typeof t == "object" || typeof t == "function";
}
function Pu(t) {
  return !Vs(t, this.v);
}
let ea = !1, of = !1;
function sf() {
  ea = !0;
}
let lt = null;
function ji(t) {
  lt = t;
}
function me(t) {
  return (
    /** @type {T} */
    Nu().get(t)
  );
}
function oe(t, e) {
  return Nu().set(t, e), e;
}
function Ce(t, e = !1, n) {
  lt = {
    p: lt,
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
    lt
  ), n = e.e;
  if (n !== null) {
    e.e = null;
    for (var r of n)
      $u(r);
  }
  return t !== void 0 && (e.x = t), lt = e.p, t ?? /** @type {T} */
  {};
}
function Ha() {
  return !ea || lt !== null && lt.l === null;
}
function Nu(t) {
  return lt === null && Fs(), lt.c ?? (lt.c = new Map(lf(lt) || void 0));
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
let Qr = [];
function Hu() {
  var t = Qr;
  Qr = [], vo(t);
}
function vr(t) {
  if (Qr.length === 0 && !Sa) {
    var e = Qr;
    queueMicrotask(() => {
      e === Qr && Hu();
    });
  }
  Qr.push(t);
}
function uf() {
  for (; Qr.length > 0; )
    Hu();
}
const cf = /* @__PURE__ */ new WeakMap();
function Uu(t) {
  var e = je;
  if (e === null)
    return Ge.f |= ii, t;
  if (e.f & Do)
    Wi(t, e);
  else {
    if (!(e.f & Bs))
      throw !e.parent && t instanceof Error && ku(t), t;
    e.b.error(t);
  }
}
function Wi(t, e) {
  for (; e !== null; ) {
    if (e.f & Bs)
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
  const e = cf.get(t);
  e && (ho(t, "message", {
    value: e.message
  }), ho(t, "stack", {
    value: e.stack
  }));
}
const Xa = /* @__PURE__ */ new Set();
let st = null, ao = null, Vt = null, hs = /* @__PURE__ */ new Set(), Yn = [], No = null, vs = !1, Sa = !1;
var Ui, ki, $r, Da, Bi, Fi, ei, Vi, Pa, Na, On, ms, oo, gs;
const wo = class wo {
  constructor() {
    tt(this, On);
    /**
     * The current values of any sources that are updated in this batch
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Source, any>}
     */
    Ai(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any sources that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Source, any>}
     */
    tt(this, Ui, /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<() => void>}
     */
    tt(this, ki, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    tt(this, $r, 0);
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    tt(this, Da, null);
    /**
     * Async effects inside a newly-created `<svelte:boundary>`
     * — these do not prevent the batch from committing
     * @type {Effect[]}
     */
    tt(this, Bi, []);
    /**
     * Template effects and `$effect.pre` effects, which run when
     * a batch is committed
     * @type {Effect[]}
     */
    tt(this, Fi, []);
    /**
     * The same as `#render_effects`, but for `$effect` (which runs after)
     * @type {Effect[]}
     */
    tt(this, ei, []);
    /**
     * Block effects, which may need to re-run on subsequent flushes
     * in order to update internal sources (e.g. each block items)
     * @type {Effect[]}
     */
    tt(this, Vi, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Effect[]}
     */
    tt(this, Pa, []);
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Effect[]}
     */
    tt(this, Na, []);
    /**
     * A set of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`
     * @type {Set<Effect>}
     */
    Ai(this, "skipped_effects", /* @__PURE__ */ new Set());
  }
  /**
   *
   * @param {Effect[]} root_effects
   */
  process(e) {
    var a;
    Yn = [], ao = null, this.apply();
    for (const o of e)
      Wt(this, On, ms).call(this, o);
    if (re(this, $r) === 0) {
      var n = Vt;
      Wt(this, On, gs).call(this);
      var r = re(this, Fi), i = re(this, ei);
      He(this, Fi, []), He(this, ei, []), He(this, Vi, []), ao = this, st = null, Vt = n, hl(r), hl(i), ao = null, (a = re(this, Da)) == null || a.resolve();
    } else
      Wt(this, On, oo).call(this, re(this, Fi)), Wt(this, On, oo).call(this, re(this, ei)), Wt(this, On, oo).call(this, re(this, Vi));
    Vt = null;
    for (const o of re(this, Bi))
      xa(o);
    He(this, Bi, []);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Source} source
   * @param {any} value
   */
  capture(e, n) {
    re(this, Ui).has(e) || re(this, Ui).set(e, n), this.current.set(e, e.v), Vt == null || Vt.set(e, e.v);
  }
  activate() {
    st = this;
  }
  deactivate() {
    st = null, Vt = null;
  }
  flush() {
    if (Yn.length > 0) {
      if (this.activate(), Bu(), st !== null && st !== this)
        return;
    } else re(this, $r) === 0 && Wt(this, On, gs).call(this);
    this.deactivate();
    for (const e of hs)
      if (hs.delete(e), e(), st !== null)
        break;
  }
  increment() {
    He(this, $r, re(this, $r) + 1);
  }
  decrement() {
    He(this, $r, re(this, $r) - 1);
    for (const e of re(this, Pa))
      en(e, In), li(e);
    for (const e of re(this, Na))
      en(e, Nr), li(e);
    this.flush();
  }
  /** @param {() => void} fn */
  add_callback(e) {
    re(this, ki).add(e);
  }
  settled() {
    return (re(this, Da) ?? He(this, Da, Ou())).promise;
  }
  static ensure() {
    if (st === null) {
      const e = st = new wo();
      Xa.add(st), Sa || wo.enqueue(() => {
        st === e && e.flush();
      });
    }
    return st;
  }
  /** @param {() => void} task */
  static enqueue(e) {
    vr(e);
  }
  apply() {
  }
};
Ui = new WeakMap(), ki = new WeakMap(), $r = new WeakMap(), Da = new WeakMap(), Bi = new WeakMap(), Fi = new WeakMap(), ei = new WeakMap(), Vi = new WeakMap(), Pa = new WeakMap(), Na = new WeakMap(), On = new WeakSet(), /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 */
ms = function(e) {
  var c;
  e.f ^= Kt;
  for (var n = e.first; n !== null; ) {
    var r = n.f, i = (r & (gr | hi)) !== 0, a = i && (r & Kt) !== 0, o = a || (r & Fn) !== 0 || this.skipped_effects.has(n);
    if (!o && n.fn !== null) {
      i ? n.f ^= Kt : r & ks ? re(this, ei).push(n) : r & Kt || (r & Po && ((c = n.b) != null && c.is_pending()) ? re(this, Bi).push(n) : ko(n) && (n.f & Pr && re(this, Vi).push(n), xa(n)));
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
    (n.f & In ? re(this, Pa) : re(this, Na)).push(n), en(n, Kt);
  e.length = 0;
}, /**
 * Append and remove branches to/from the DOM
 */
gs = function() {
  var e;
  for (const n of re(this, ki))
    n();
  if (re(this, ki).clear(), Xa.size > 1) {
    re(this, Ui).clear();
    let n = !0;
    for (const r of Xa) {
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
          Fu(o, a);
        if (Yn.length > 0) {
          st = r, r.apply();
          for (const o of Yn)
            Wt(e = r, On, ms).call(e, o);
          Yn = [], r.deactivate();
        }
      }
    }
    st = null;
  }
  Xa.delete(this);
};
let hr = wo;
function df(t) {
  var e = Sa;
  Sa = !0;
  try {
    for (var n; ; ) {
      if (uf(), Yn.length === 0 && (st == null || st.flush(), Yn.length === 0))
        return No = null, /** @type {T} */
        n;
      Bu();
    }
  } finally {
    Sa = e;
  }
}
function Bu() {
  var t = Pi;
  vs = !0;
  try {
    var e = 0;
    for (pl(!0); Yn.length > 0; ) {
      var n = hr.ensure();
      if (e++ > 1e3) {
        var r, i;
        ff();
      }
      n.process(Yn), Or.clear();
    }
  } finally {
    vs = !1, pl(t), No = null;
  }
}
function ff() {
  try {
    Zd();
  } catch (t) {
    Wi(t, No);
  }
}
let cr = null;
function hl(t) {
  var e = t.length;
  if (e !== 0) {
    for (var n = 0; n < e; ) {
      var r = t[n++];
      if (!(r.f & (vi | Fn)) && ko(r) && (cr = [], xa(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null && r.ac === null ? rc(r) : r.fn = null), (cr == null ? void 0 : cr.length) > 0)) {
        Or.clear();
        for (const i of cr)
          xa(i);
        cr = [];
      }
    }
    cr = null;
  }
}
function Fu(t, e) {
  if (t.reactions !== null)
    for (const n of t.reactions) {
      const r = n.f;
      r & rn ? Fu(
        /** @type {Derived} */
        n,
        e
      ) : r & (Po | Pr) && Vu(n, e) && (en(n, In), li(
        /** @type {Effect} */
        n
      ));
    }
}
function Vu(t, e) {
  if (t.deps !== null) {
    for (const n of t.deps)
      if (e.includes(n) || n.f & rn && Vu(
        /** @type {Derived} */
        n,
        e
      ))
        return !0;
  }
  return !1;
}
function li(t) {
  for (var e = No = t; e.parent !== null; ) {
    e = e.parent;
    var n = e.f;
    if (vs && e === je && n & Pr)
      return;
    if (n & (hi | gr)) {
      if (!(n & Kt)) return;
      e.f ^= Kt;
    }
  }
  Yn.push(e);
}
function hf(t) {
  let e = 0, n = ui(0), r;
  return () => {
    Lf() && (s(n), Ba(() => (e === 0 && (r = Vn(() => t(() => Aa(n)))), e += 1, () => {
      vr(() => {
        e -= 1, e === 0 && (r == null || r(), r = void 0, Aa(n));
      });
    })));
  };
}
var vf = Hr | $i | Bs;
function mf(t, e, n) {
  new gf(t, e, n);
}
var Un, xn, Ns, zn, ti, Xn, Tn, fn, Kn, Ar, ni, Cr, ri, xr, Lo, Oo, nn, pf, bf, so, lo, ps;
class gf {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   */
  constructor(e, n, r) {
    tt(this, nn);
    /** @type {Boundary | null} */
    Ai(this, "parent");
    tt(this, Un, !1);
    /** @type {TemplateNode} */
    tt(this, xn);
    /** @type {TemplateNode | null} */
    tt(this, Ns, null);
    /** @type {BoundaryProps} */
    tt(this, zn);
    /** @type {((anchor: Node) => void)} */
    tt(this, ti);
    /** @type {Effect} */
    tt(this, Xn);
    /** @type {Effect | null} */
    tt(this, Tn, null);
    /** @type {Effect | null} */
    tt(this, fn, null);
    /** @type {Effect | null} */
    tt(this, Kn, null);
    /** @type {DocumentFragment | null} */
    tt(this, Ar, null);
    tt(this, ni, 0);
    tt(this, Cr, 0);
    tt(this, ri, !1);
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    tt(this, xr, null);
    tt(this, Lo, () => {
      re(this, xr) && qi(re(this, xr), re(this, ni));
    });
    tt(this, Oo, hf(() => (He(this, xr, ui(re(this, ni))), () => {
      He(this, xr, null);
    })));
    He(this, xn, e), He(this, zn, n), He(this, ti, r), this.parent = /** @type {Effect} */
    je.b, He(this, Un, !!re(this, zn).pending), He(this, Xn, kr(() => {
      je.b = this;
      {
        try {
          He(this, Tn, qt(() => r(re(this, xn))));
        } catch (i) {
          this.error(i);
        }
        re(this, Cr) > 0 ? Wt(this, nn, lo).call(this) : He(this, Un, !1);
      }
    }, vf));
  }
  /**
   * Returns `true` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_pending() {
    return re(this, Un) || !!this.parent && this.parent.is_pending();
  }
  has_pending_snippet() {
    return !!re(this, zn).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   */
  update_pending_count(e) {
    Wt(this, nn, ps).call(this, e), He(this, ni, re(this, ni) + e), hs.add(re(this, Lo));
  }
  get_effect_pending() {
    return re(this, Oo).call(this), s(
      /** @type {Source<number>} */
      re(this, xr)
    );
  }
  /** @param {unknown} error */
  error(e) {
    var n = re(this, zn).onerror;
    let r = re(this, zn).failed;
    if (re(this, ri) || !n && !r)
      throw e;
    re(this, Tn) && (Gt(re(this, Tn)), He(this, Tn, null)), re(this, fn) && (Gt(re(this, fn)), He(this, fn, null)), re(this, Kn) && (Gt(re(this, Kn)), He(this, Kn, null));
    var i = !1, a = !1;
    const o = () => {
      if (i) {
        rf();
        return;
      }
      i = !0, a && tf(), hr.ensure(), He(this, ni, 0), re(this, Kn) !== null && Rr(re(this, Kn), () => {
        He(this, Kn, null);
      }), He(this, Un, this.has_pending_snippet()), He(this, Tn, Wt(this, nn, so).call(this, () => (He(this, ri, !1), qt(() => re(this, ti).call(this, re(this, xn)))))), re(this, Cr) > 0 ? Wt(this, nn, lo).call(this) : He(this, Un, !1);
    };
    var u = Ge;
    try {
      vn(null), a = !0, n == null || n(e, o), a = !1;
    } catch (l) {
      Wi(l, re(this, Xn) && re(this, Xn).parent);
    } finally {
      vn(u);
    }
    r && vr(() => {
      He(this, Kn, Wt(this, nn, so).call(this, () => {
        He(this, ri, !0);
        try {
          return qt(() => {
            r(
              re(this, xn),
              () => e,
              () => o
            );
          });
        } catch (l) {
          return Wi(
            l,
            /** @type {Effect} */
            re(this, Xn).parent
          ), null;
        } finally {
          He(this, ri, !1);
        }
      }));
    });
  }
}
Un = new WeakMap(), xn = new WeakMap(), Ns = new WeakMap(), zn = new WeakMap(), ti = new WeakMap(), Xn = new WeakMap(), Tn = new WeakMap(), fn = new WeakMap(), Kn = new WeakMap(), Ar = new WeakMap(), ni = new WeakMap(), Cr = new WeakMap(), ri = new WeakMap(), xr = new WeakMap(), Lo = new WeakMap(), Oo = new WeakMap(), nn = new WeakSet(), pf = function() {
  try {
    He(this, Tn, qt(() => re(this, ti).call(this, re(this, xn))));
  } catch (e) {
    this.error(e);
  }
  He(this, Un, !1);
}, bf = function() {
  const e = re(this, zn).pending;
  e && (He(this, fn, qt(() => e(re(this, xn)))), hr.enqueue(() => {
    He(this, Tn, Wt(this, nn, so).call(this, () => (hr.ensure(), qt(() => re(this, ti).call(this, re(this, xn)))))), re(this, Cr) > 0 ? Wt(this, nn, lo).call(this) : (Rr(
      /** @type {Effect} */
      re(this, fn),
      () => {
        He(this, fn, null);
      }
    ), He(this, Un, !1));
  }));
}, /**
 * @param {() => Effect | null} fn
 */
so = function(e) {
  var n = je, r = Ge, i = lt;
  $n(re(this, Xn)), vn(re(this, Xn)), ji(re(this, Xn).ctx);
  try {
    return e();
  } catch (a) {
    return Uu(a), null;
  } finally {
    $n(n), vn(r), ji(i);
  }
}, lo = function() {
  const e = (
    /** @type {(anchor: Node) => void} */
    re(this, zn).pending
  );
  re(this, Tn) !== null && (He(this, Ar, document.createDocumentFragment()), _f(re(this, Tn), re(this, Ar))), re(this, fn) === null && He(this, fn, qt(() => e(re(this, xn))));
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 */
ps = function(e) {
  var n;
  if (!this.has_pending_snippet()) {
    this.parent && Wt(n = this.parent, nn, ps).call(n, e);
    return;
  }
  He(this, Cr, re(this, Cr) + e), re(this, Cr) === 0 && (He(this, Un, !1), re(this, fn) && Rr(re(this, fn), () => {
    He(this, fn, null);
  }), re(this, Ar) && (re(this, xn).before(re(this, Ar)), He(this, Ar, null)), vr(() => {
    hr.ensure().flush();
  }));
};
function _f(t, e) {
  for (var n = t.nodes_start, r = t.nodes_end; n !== null; ) {
    var i = n === r ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ ka(n)
    );
    e.append(n), n = i;
  }
}
function Gu(t, e, n) {
  const r = Ha() ? Ua : Gs;
  if (e.length === 0) {
    n(t.map(r));
    return;
  }
  var i = st, a = (
    /** @type {Effect} */
    je
  ), o = yf();
  Promise.all(e.map((u) => /* @__PURE__ */ If(u))).then((u) => {
    o();
    try {
      n([...t.map(r), ...u]);
    } catch (l) {
      a.f & vi || Wi(l, a);
    }
    i == null || i.deactivate(), bs();
  }).catch((u) => {
    Wi(u, a);
  });
}
function yf() {
  var t = je, e = Ge, n = lt, r = st;
  return function() {
    $n(t), vn(e), ji(n), r == null || r.activate();
  };
}
function bs() {
  $n(null), vn(null), ji(null);
}
// @__NO_SIDE_EFFECTS__
function Ua(t) {
  var e = rn | In, n = Ge !== null && Ge.f & rn ? (
    /** @type {Derived} */
    Ge
  ) : null;
  return je === null || n !== null && n.f & Ln ? e |= Ln : je.f |= $i, {
    ctx: lt,
    deps: null,
    effects: null,
    equals: Du,
    f: e,
    fn: t,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      Nt
    ),
    wv: 0,
    parent: n ?? je,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function If(t, e) {
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
  ), a = ui(
    /** @type {V} */
    Nt
  ), o = !Ge, u = /* @__PURE__ */ new Map();
  return Rf(() => {
    var f;
    var l = Ou();
    i = l.promise;
    try {
      Promise.resolve(t()).then(l.resolve, l.reject).then(bs);
    } catch (m) {
      l.reject(m), bs();
    }
    var c = (
      /** @type {Batch} */
      st
    ), d = r.is_pending();
    o && (r.update_pending_count(1), d || (c.increment(), (f = u.get(c)) == null || f.reject(Oi), u.delete(c), u.set(c, l)));
    const v = (m, h = void 0) => {
      if (d || c.activate(), h)
        h !== Oi && (a.f |= ii, qi(a, h));
      else {
        a.f & ii && (a.f ^= ii), qi(a, m);
        for (const [g, b] of u) {
          if (u.delete(g), g === c) break;
          b.reject(Oi);
        }
      }
      o && (r.update_pending_count(-1), d || c.decrement());
    };
    l.promise.then(v, (m) => v(null, m || "unknown"));
  }), Ho(() => {
    for (const l of u.values())
      l.reject(Oi);
  }), new Promise((l) => {
    function c(d) {
      function v() {
        d === i ? l(a) : c(i);
      }
      d.then(v, v);
    }
    c(i);
  });
}
// @__NO_SIDE_EFFECTS__
function ge(t) {
  const e = /* @__PURE__ */ Ua(t);
  return oc(e), e;
}
// @__NO_SIDE_EFFECTS__
function Gs(t) {
  const e = /* @__PURE__ */ Ua(t);
  return e.equals = Pu, e;
}
function ju(t) {
  var e = t.effects;
  if (e !== null) {
    t.effects = null;
    for (var n = 0; n < e.length; n += 1)
      Gt(
        /** @type {Effect} */
        e[n]
      );
  }
}
function Ef(t) {
  for (var e = t.parent; e !== null; ) {
    if (!(e.f & rn))
      return (
        /** @type {Effect} */
        e
      );
    e = e.parent;
  }
  return null;
}
function js(t) {
  var e, n = je;
  $n(Ef(t));
  try {
    ju(t), e = cc(t);
  } finally {
    $n(n);
  }
  return e;
}
function Wu(t) {
  var e = js(t);
  if (t.equals(e) || (t.v = e, t.wv = lc()), !gi)
    if (Vt !== null)
      Vt.set(t, t.v);
    else {
      var n = (Tr || t.f & Ln) && t.deps !== null ? Nr : Kt;
      en(t, n);
    }
}
const Or = /* @__PURE__ */ new Map();
function ui(t, e) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: t,
    reactions: null,
    equals: Du,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function ve(t, e) {
  const n = ui(t);
  return oc(n), n;
}
// @__NO_SIDE_EFFECTS__
function qu(t, e = !1, n = !0) {
  var i;
  const r = ui(t);
  return e || (r.equals = Pu), ea && n && lt !== null && lt.l !== null && ((i = lt.l).s ?? (i.s = [])).push(r), r;
}
function X(t, e, n = !1) {
  Ge !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!kn || Ge.f & fl) && Ha() && Ge.f & (rn | Pr | Po | fl) && !($t != null && $t.includes(t)) && ef();
  let r = n ? ce(e) : e;
  return qi(t, r);
}
function qi(t, e) {
  if (!t.equals(e)) {
    var n = t.v;
    gi ? Or.set(t, e) : Or.set(t, n), t.v = e;
    var r = hr.ensure();
    r.capture(t, n), t.f & rn && (t.f & In && js(
      /** @type {Derived} */
      t
    ), en(t, t.f & Ln ? Nr : Kt)), t.wv = lc(), zu(t, In), Ha() && je !== null && je.f & Kt && !(je.f & (gr | hi)) && (Cn === null ? Pf([t]) : Cn.push(t));
  }
  return e;
}
function Aa(t) {
  X(t, t.v + 1);
}
function zu(t, e) {
  var n = t.reactions;
  if (n !== null)
    for (var r = Ha(), i = n.length, a = 0; a < i; a++) {
      var o = n[a], u = o.f;
      if (!(!r && o === je)) {
        var l = (u & In) === 0;
        l && en(o, e), u & rn ? zu(
          /** @type {Derived} */
          o,
          Nr
        ) : l && (u & Pr && cr !== null && cr.push(
          /** @type {Effect} */
          o
        ), li(
          /** @type {Effect} */
          o
        ));
      }
    }
}
function ce(t) {
  if (typeof t != "object" || t === null || Zn in t)
    return t;
  const e = Us(t);
  if (e !== Vd && e !== Gd)
    return t;
  var n = /* @__PURE__ */ new Map(), r = Ro(t), i = /* @__PURE__ */ ve(0), a = ai, o = (u) => {
    if (ai === a)
      return u();
    var l = Ge, c = ai;
    vn(null), _l(a);
    var d = u();
    return vn(l), _l(c), d;
  };
  return r && n.set("length", /* @__PURE__ */ ve(
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
          var v = /* @__PURE__ */ ve(c.value);
          return n.set(l, v), v;
        }) : X(d, c.value, !0), !0;
      },
      deleteProperty(u, l) {
        var c = n.get(l);
        if (c === void 0) {
          if (l in u) {
            const d = o(() => /* @__PURE__ */ ve(Nt));
            n.set(l, d), Aa(i);
          }
        } else
          X(c, Nt), Aa(i);
        return !0;
      },
      get(u, l, c) {
        var m;
        if (l === Zn)
          return t;
        var d = n.get(l), v = l in u;
        if (d === void 0 && (!v || (m = Lr(u, l)) != null && m.writable) && (d = o(() => {
          var h = ce(v ? u[l] : Nt), g = /* @__PURE__ */ ve(h);
          return g;
        }), n.set(l, d)), d !== void 0) {
          var f = s(d);
          return f === Nt ? void 0 : f;
        }
        return Reflect.get(u, l, c);
      },
      getOwnPropertyDescriptor(u, l) {
        var c = Reflect.getOwnPropertyDescriptor(u, l);
        if (c && "value" in c) {
          var d = n.get(l);
          d && (c.value = s(d));
        } else if (c === void 0) {
          var v = n.get(l), f = v == null ? void 0 : v.v;
          if (v !== void 0 && f !== Nt)
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
        if (l === Zn)
          return !0;
        var c = n.get(l), d = c !== void 0 && c.v !== Nt || Reflect.has(u, l);
        if (c !== void 0 || je !== null && (!d || (f = Lr(u, l)) != null && f.writable)) {
          c === void 0 && (c = o(() => {
            var m = d ? ce(u[l]) : Nt, h = /* @__PURE__ */ ve(m);
            return h;
          }), n.set(l, c));
          var v = s(c);
          if (v === Nt)
            return !1;
        }
        return d;
      },
      set(u, l, c, d) {
        var I;
        var v = n.get(l), f = l in u;
        if (r && l === "length")
          for (var m = c; m < /** @type {Source<number>} */
          v.v; m += 1) {
            var h = n.get(m + "");
            h !== void 0 ? X(h, Nt) : m in u && (h = o(() => /* @__PURE__ */ ve(Nt)), n.set(m + "", h));
          }
        if (v === void 0)
          (!f || (I = Lr(u, l)) != null && I.writable) && (v = o(() => /* @__PURE__ */ ve(void 0)), X(v, ce(c)), n.set(l, v));
        else {
          f = v.v !== Nt;
          var g = o(() => ce(c));
          X(v, g);
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
          Aa(i);
        }
        return !0;
      },
      ownKeys(u) {
        s(i);
        var l = Reflect.ownKeys(u).filter((v) => {
          var f = n.get(v);
          return f === void 0 || f.v !== Nt;
        });
        for (var [c, d] of n)
          d.v !== Nt && !(c in u) && l.push(c);
        return l;
      },
      setPrototypeOf() {
        $d();
      }
    }
  );
}
function vl(t) {
  try {
    if (t !== null && typeof t == "object" && Zn in t)
      return t[Zn];
  } catch {
  }
  return t;
}
function Sf(t, e) {
  return Object.is(vl(t), vl(e));
}
var ml, Xu, Ku, Yu, Zu;
function Af() {
  if (ml === void 0) {
    ml = window, Xu = document, Ku = /Firefox/.test(navigator.userAgent);
    var t = Element.prototype, e = Node.prototype, n = Text.prototype;
    Yu = Lr(e, "firstChild").get, Zu = Lr(e, "nextSibling").get, dl(t) && (t.__click = void 0, t.__className = void 0, t.__attributes = null, t.__style = void 0, t.__e = void 0), dl(n) && (n.__t = void 0);
  }
}
function Ur(t = "") {
  return document.createTextNode(t);
}
// @__NO_SIDE_EFFECTS__
function zi(t) {
  return Yu.call(t);
}
// @__NO_SIDE_EFFECTS__
function ka(t) {
  return Zu.call(t);
}
function se(t, e) {
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
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ ka(n) : n;
  }
}
function Ie(t, e = 1, n = !1) {
  let r = t;
  for (; e--; )
    r = /** @type {TemplateNode} */
    /* @__PURE__ */ ka(r);
  return r;
}
function Cf(t) {
  t.textContent = "";
}
function Ws() {
  return !1;
}
function xf(t, e) {
  if (e) {
    const n = document.body;
    t.autofocus = !0, vr(() => {
      document.activeElement === n && t.focus();
    });
  }
}
let gl = !1;
function Tf() {
  gl || (gl = !0, document.addEventListener(
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
  var e = Ge, n = je;
  vn(null), $n(null);
  try {
    return t();
  } finally {
    vn(e), $n(n);
  }
}
function Qu(t, e, n, r = n) {
  t.addEventListener(e, () => ta(n));
  const i = t.__on_r;
  i ? t.__on_r = () => {
    i(), r(!0);
  } : t.__on_r = () => r(!0), Tf();
}
function Ju(t) {
  je === null && Ge === null && Yd(), Ge !== null && Ge.f & Ln && je === null && Kd(), gi && Xd();
}
function wf(t, e) {
  var n = e.last;
  n === null ? e.last = e.first = t : (n.next = t, t.prev = n, e.last = t);
}
function tr(t, e, n, r = !0) {
  var i = je;
  i !== null && i.f & Fn && (t |= Fn);
  var a = {
    ctx: lt,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: t | In,
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
      xa(a), a.f |= Do;
    } catch (l) {
      throw Gt(a), l;
    }
  else e !== null && li(a);
  if (r) {
    var o = a;
    if (n && o.deps === null && o.teardown === null && o.nodes_start === null && o.first === o.last && // either `null`, or a singular child
    !(o.f & $i) && (o = o.first), o !== null && (o.parent = i, i !== null && wf(o, i), Ge !== null && Ge.f & rn && !(t & hi))) {
      var u = (
        /** @type {Derived} */
        Ge
      );
      (u.effects ?? (u.effects = [])).push(o);
    }
  }
  return a;
}
function Lf() {
  return Ge !== null && !kn;
}
function Ho(t) {
  const e = tr(Mo, null, !1);
  return en(e, Kt), e.teardown = t, e;
}
function Te(t) {
  Ju();
  var e = (
    /** @type {Effect} */
    je.f
  ), n = !Ge && (e & gr) !== 0 && (e & Do) === 0;
  if (n) {
    var r = (
      /** @type {ComponentContext} */
      lt
    );
    (r.e ?? (r.e = [])).push(t);
  } else
    return $u(t);
}
function $u(t) {
  return tr(ks | Ru, t, !1);
}
function ec(t) {
  return Ju(), tr(Mo | Ru, t, !0);
}
function Of(t) {
  hr.ensure();
  const e = tr(hi | $i, t, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? Rr(e, () => {
      Gt(e), r(void 0);
    }) : (Gt(e), r(void 0));
  });
}
function mi(t) {
  return tr(ks, t, !1);
}
function Rf(t) {
  return tr(Po | $i, t, !0);
}
function Ba(t, e = 0) {
  return tr(Mo | e, t, !0);
}
function Oe(t, e = [], n = []) {
  Gu(e, n, (r) => {
    tr(Mo, () => t(...r.map(s)), !0);
  });
}
function kr(t, e = 0) {
  var n = tr(Pr | e, t, !0);
  return n;
}
function qt(t, e = !0) {
  return tr(gr | $i, t, !0, e);
}
function tc(t) {
  var e = t.teardown;
  if (e !== null) {
    const n = gi, r = Ge;
    bl(!0), vn(null);
    try {
      e.call(null);
    } finally {
      bl(n), vn(r);
    }
  }
}
function nc(t, e = !1) {
  var n = t.first;
  for (t.first = t.last = null; n !== null; ) {
    const i = n.ac;
    i !== null && ta(() => {
      i.abort(Oi);
    });
    var r = n.next;
    n.f & hi ? n.parent = null : Gt(n, e), n = r;
  }
}
function Mf(t) {
  for (var e = t.first; e !== null; ) {
    var n = e.next;
    e.f & gr || Gt(e), e = n;
  }
}
function Gt(t, e = !0) {
  var n = !1;
  (e || t.f & Wd) && t.nodes_start !== null && t.nodes_end !== null && (Df(
    t.nodes_start,
    /** @type {TemplateNode} */
    t.nodes_end
  ), n = !0), nc(t, e && !n), go(t, 0), en(t, vi);
  var r = t.transitions;
  if (r !== null)
    for (const a of r)
      a.stop();
  tc(t);
  var i = t.parent;
  i !== null && i.first !== null && rc(t), t.next = t.prev = t.teardown = t.ctx = t.deps = t.fn = t.nodes_start = t.nodes_end = t.ac = null;
}
function Df(t, e) {
  for (; t !== null; ) {
    var n = t === e ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ ka(t)
    );
    t.remove(), t = n;
  }
}
function rc(t) {
  var e = t.parent, n = t.prev, r = t.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), e !== null && (e.first === t && (e.first = r), e.last === t && (e.last = n));
}
function Rr(t, e) {
  var n = [];
  qs(t, n, !0), ic(n, () => {
    Gt(t), e && e();
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
function qs(t, e, n) {
  if (!(t.f & Fn)) {
    if (t.f ^= Fn, t.transitions !== null)
      for (const o of t.transitions)
        (o.is_global || n) && e.push(o);
    for (var r = t.first; r !== null; ) {
      var i = r.next, a = (r.f & Hr) !== 0 || (r.f & gr) !== 0;
      qs(r, e, a ? n : !1), r = i;
    }
  }
}
function Uo(t) {
  ac(t, !0);
}
function ac(t, e) {
  if (t.f & Fn) {
    t.f ^= Fn, t.f & Kt || (en(t, In), li(t));
    for (var n = t.first; n !== null; ) {
      var r = n.next, i = (n.f & Hr) !== 0 || (n.f & gr) !== 0;
      ac(n, i ? e : !1), n = r;
    }
    if (t.transitions !== null)
      for (const a of t.transitions)
        (a.is_global || e) && a.in();
  }
}
let Pi = !1;
function pl(t) {
  Pi = t;
}
let gi = !1;
function bl(t) {
  gi = t;
}
let Ge = null, kn = !1;
function vn(t) {
  Ge = t;
}
let je = null;
function $n(t) {
  je = t;
}
let $t = null;
function oc(t) {
  Ge !== null && ($t === null ? $t = [t] : $t.push(t));
}
let Qt = null, _n = 0, Cn = null;
function Pf(t) {
  Cn = t;
}
let sc = 1, Ca = 0, ai = Ca;
function _l(t) {
  ai = t;
}
let Tr = !1;
function lc() {
  return ++sc;
}
function ko(t) {
  var v;
  var e = t.f;
  if (e & In)
    return !0;
  if (e & Nr) {
    var n = t.deps, r = (e & Ln) !== 0;
    if (n !== null) {
      var i, a, o = (e & mo) !== 0, u = r && je !== null && !Tr, l = n.length;
      if ((o || u) && (je === null || !(je.f & vi))) {
        var c = (
          /** @type {Derived} */
          t
        ), d = c.parent;
        for (i = 0; i < l; i++)
          a = n[i], (o || !((v = a == null ? void 0 : a.reactions) != null && v.includes(c))) && (a.reactions ?? (a.reactions = [])).push(c);
        o && (c.f ^= mo), u && d !== null && !(d.f & Ln) && (c.f ^= Ln);
      }
      for (i = 0; i < l; i++)
        if (a = n[i], ko(
          /** @type {Derived} */
          a
        ) && Wu(
          /** @type {Derived} */
          a
        ), a.wv > t.wv)
          return !0;
    }
    (!r || je !== null && !Tr) && en(t, Kt);
  }
  return !1;
}
function uc(t, e, n = !0) {
  var r = t.reactions;
  if (r !== null && !($t != null && $t.includes(t)))
    for (var i = 0; i < r.length; i++) {
      var a = r[i];
      a.f & rn ? uc(
        /** @type {Derived} */
        a,
        e,
        !1
      ) : e === a && (n ? en(a, In) : a.f & Kt && en(a, Nr), li(
        /** @type {Effect} */
        a
      ));
    }
}
function cc(t) {
  var g;
  var e = Qt, n = _n, r = Cn, i = Ge, a = Tr, o = $t, u = lt, l = kn, c = ai, d = t.f;
  Qt = /** @type {null | Value[]} */
  null, _n = 0, Cn = null, Tr = (d & Ln) !== 0 && (kn || !Pi || Ge === null), Ge = d & (gr | hi) ? null : t, $t = null, ji(t.ctx), kn = !1, ai = ++Ca, t.ac !== null && (ta(() => {
    t.ac.abort(Oi);
  }), t.ac = null);
  try {
    t.f |= fs;
    var v = (
      /** @type {Function} */
      t.fn
    ), f = v(), m = t.deps;
    if (Qt !== null) {
      var h;
      if (go(t, _n), m !== null && _n > 0)
        for (m.length = _n + Qt.length, h = 0; h < Qt.length; h++)
          m[_n + h] = Qt[h];
      else
        t.deps = m = Qt;
      if (!Tr || // Deriveds that already have reactions can cleanup, so we still add them as reactions
      d & rn && /** @type {import('#client').Derived} */
      t.reactions !== null)
        for (h = _n; h < m.length; h++)
          ((g = m[h]).reactions ?? (g.reactions = [])).push(t);
    } else m !== null && _n < m.length && (go(t, _n), m.length = _n);
    if (Ha() && Cn !== null && !kn && m !== null && !(t.f & (rn | Nr | In)))
      for (h = 0; h < /** @type {Source[]} */
      Cn.length; h++)
        uc(
          Cn[h],
          /** @type {Effect} */
          t
        );
    return i !== null && i !== t && (Ca++, Cn !== null && (r === null ? r = Cn : r.push(.../** @type {Source[]} */
    Cn))), t.f & ii && (t.f ^= ii), f;
  } catch (b) {
    return Uu(b);
  } finally {
    t.f ^= fs, Qt = e, _n = n, Cn = r, Ge = i, Tr = a, $t = o, ji(u), kn = l, ai = c;
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
  n === null && e.f & rn && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Qt === null || !Qt.includes(e)) && (en(e, Nr), e.f & (Ln | mo) || (e.f ^= mo), ju(
    /** @type {Derived} **/
    e
  ), go(
    /** @type {Derived} **/
    e,
    0
  ));
}
function go(t, e) {
  var n = t.deps;
  if (n !== null)
    for (var r = e; r < n.length; r++)
      Nf(t, n[r]);
}
function xa(t) {
  var e = t.f;
  if (!(e & vi)) {
    en(t, Kt);
    var n = je, r = Pi;
    je = t, Pi = !0;
    try {
      e & Pr ? Mf(t) : nc(t), tc(t);
      var i = cc(t);
      t.teardown = typeof i == "function" ? i : null, t.wv = sc;
      var a;
      wu && of && t.f & In && t.deps;
    } finally {
      Pi = r, je = n;
    }
  }
}
async function dc() {
  await Promise.resolve(), df();
}
function s(t) {
  var e = t.f, n = (e & rn) !== 0;
  if (Ge !== null && !kn) {
    var r = je !== null && (je.f & vi) !== 0;
    if (!r && !($t != null && $t.includes(t))) {
      var i = Ge.deps;
      if (Ge.f & fs)
        t.rv < Ca && (t.rv = Ca, Qt === null && i !== null && i[_n] === t ? _n++ : Qt === null ? Qt = [t] : (!Tr || !Qt.includes(t)) && Qt.push(t));
      else {
        (Ge.deps ?? (Ge.deps = [])).push(t);
        var a = t.reactions;
        a === null ? t.reactions = [Ge] : a.includes(Ge) || a.push(Ge);
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
  if (gi) {
    if (Or.has(t))
      return Or.get(t);
    if (n) {
      o = /** @type {Derived} */
      t;
      var l = o.v;
      return (!(o.f & Kt) && o.reactions !== null || fc(o)) && (l = js(o)), Or.set(o, l), l;
    }
  } else if (n) {
    if (o = /** @type {Derived} */
    t, Vt != null && Vt.has(o))
      return Vt.get(o);
    ko(o) && Wu(o);
  }
  if (Vt != null && Vt.has(t))
    return Vt.get(t);
  if (t.f & ii)
    throw t.v;
  return t.v;
}
function fc(t) {
  if (t.v === Nt) return !0;
  if (t.deps === null) return !1;
  for (const e of t.deps)
    if (Or.has(e) || e.f & rn && fc(
      /** @type {Derived} */
      e
    ))
      return !0;
  return !1;
}
function Vn(t) {
  var e = kn;
  try {
    return kn = !0, t();
  } finally {
    kn = e;
  }
}
const Hf = -7169;
function en(t, e) {
  t.f = t.f & Hf | e;
}
function hc(t) {
  if (!(typeof t != "object" || !t || t instanceof EventTarget)) {
    if (Zn in t)
      _s(t);
    else if (!Array.isArray(t))
      for (let e in t) {
        const n = t[e];
        typeof n == "object" && n && Zn in n && _s(n);
      }
  }
}
function _s(t, e = /* @__PURE__ */ new Set()) {
  if (typeof t == "object" && t !== null && // We don't want to traverse DOM elements
  !(t instanceof EventTarget) && !e.has(t)) {
    e.add(t), t instanceof Date && t.getTime();
    for (let r in t)
      try {
        _s(t[r], e);
      } catch {
      }
    const n = Us(t);
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
const vc = /* @__PURE__ */ new Set(), ys = /* @__PURE__ */ new Set();
function zs(t, e, n, r = {}) {
  function i(a) {
    if (r.capture || Ia.call(e, a), !a.cancelBubble)
      return ta(() => n == null ? void 0 : n.call(this, a));
  }
  return t.startsWith("pointer") || t.startsWith("touch") || t === "wheel" ? vr(() => {
    e.addEventListener(t, i, r);
  }) : e.addEventListener(t, i, r), i;
}
function Uf(t, e, n, r = {}) {
  var i = zs(e, t, n, r);
  return () => {
    t.removeEventListener(e, i, r);
  };
}
function ya(t, e, n, r, i) {
  var a = { capture: r, passive: i }, o = zs(t, e, n, a);
  (e === document.body || // @ts-ignore
  e === window || // @ts-ignore
  e === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  e instanceof HTMLMediaElement) && Ho(() => {
    e.removeEventListener(t, o, a);
  });
}
function En(t) {
  for (var e = 0; e < t.length; e++)
    vc.add(t[e]);
  for (var n of ys)
    n(t);
}
let yl = null;
function Ia(t) {
  var S;
  var e = this, n = (
    /** @type {Node} */
    e.ownerDocument
  ), r = t.type, i = ((S = t.composedPath) == null ? void 0 : S.call(t)) || [], a = (
    /** @type {null | Element} */
    i[0] || t.target
  );
  yl = t;
  var o = 0, u = yl === t && t.__root;
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
    ho(t, "currentTarget", {
      configurable: !0,
      get() {
        return a || n;
      }
    });
    var d = Ge, v = je;
    vn(null), $n(null);
    try {
      for (var f, m = []; a !== null; ) {
        var h = a.assignedSlot || a.parentNode || /** @type {any} */
        a.host || null;
        try {
          var g = a["__" + r];
          if (g != null && (!/** @type {any} */
          a.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          t.target === a))
            if (Ro(g)) {
              var [b, ...y] = g;
              b.apply(a, [t, ...y]);
            } else
              g.call(a, t);
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
      t.__root = e, delete t.currentTarget, vn(d), $n(v);
    }
  }
}
function mc(t) {
  var e = document.createElement("template");
  return e.innerHTML = t.replaceAll("<!>", "<!---->"), e.content;
}
function Xi(t, e) {
  var n = (
    /** @type {Effect} */
    je
  );
  n.nodes_start === null && (n.nodes_start = t, n.nodes_end = e);
}
// @__NO_SIDE_EFFECTS__
function de(t, e) {
  var n = (e & 1) !== 0, r = (e & 2) !== 0, i, a = !t.startsWith("<!>");
  return () => {
    i === void 0 && (i = mc(a ? t : "<!>" + t), n || (i = /** @type {Node} */
    /* @__PURE__ */ zi(i)));
    var o = (
      /** @type {TemplateNode} */
      r || Ku ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (n) {
      var u = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ zi(o)
      ), l = (
        /** @type {TemplateNode} */
        o.lastChild
      );
      Xi(u, l);
    } else
      Xi(o, o);
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
        mc(i)
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
    return Xi(l, l), l;
  };
}
// @__NO_SIDE_EFFECTS__
function on(t, e) {
  return /* @__PURE__ */ kf(t, e, "svg");
}
function Rt(t = "") {
  {
    var e = Ur(t + "");
    return Xi(e, e), e;
  }
}
function ne() {
  var t = document.createDocumentFragment(), e = document.createComment(""), n = Ur();
  return t.append(e, n), Xi(e, n), t;
}
function L(t, e) {
  t !== null && t.before(
    /** @type {Node} */
    e
  );
}
function Bf(t) {
  return t.endsWith("capture") && t !== "gotpointercapture" && t !== "lostpointercapture";
}
const Ff = [
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
function Vf(t) {
  return Ff.includes(t);
}
const Gf = {
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
function jf(t) {
  return t = t.toLowerCase(), Gf[t] ?? t;
}
const Wf = ["touchstart", "touchmove"];
function qf(t) {
  return Wf.includes(t);
}
let po = !0;
function Il(t) {
  po = t;
}
function at(t, e) {
  var n = e == null ? "" : typeof e == "object" ? e + "" : e;
  n !== (t.__t ?? (t.__t = t.nodeValue)) && (t.__t = n, t.nodeValue = n + "");
}
function zf(t, e) {
  return Xf(t, e);
}
const Ci = /* @__PURE__ */ new Map();
function Xf(t, { target: e, anchor: n, props: r = {}, events: i, context: a, intro: o = !0 }) {
  Af();
  var u = /* @__PURE__ */ new Set(), l = (v) => {
    for (var f = 0; f < v.length; f++) {
      var m = v[f];
      if (!u.has(m)) {
        u.add(m);
        var h = qf(m);
        e.addEventListener(m, Ia, { passive: h });
        var g = Ci.get(m);
        g === void 0 ? (document.addEventListener(m, Ia, { passive: h }), Ci.set(m, 1)) : Ci.set(m, g + 1);
      }
    }
  };
  l(Hs(vc)), ys.add(l);
  var c = void 0, d = Of(() => {
    var v = n ?? e.appendChild(Ur());
    return mf(
      /** @type {TemplateNode} */
      v,
      {
        pending: () => {
        }
      },
      (f) => {
        if (a) {
          Ce({});
          var m = (
            /** @type {ComponentContext} */
            lt
          );
          m.c = a;
        }
        i && (r.$$events = i), po = o, c = t(f, r) || {}, po = !0, a && xe();
      }
    ), () => {
      var h;
      for (var f of u) {
        e.removeEventListener(f, Ia);
        var m = (
          /** @type {number} */
          Ci.get(f)
        );
        --m === 0 ? (document.removeEventListener(f, Ia), Ci.delete(f)) : Ci.set(f, m);
      }
      ys.delete(l), v !== n && ((h = v.parentNode) == null || h.removeChild(v));
    };
  });
  return Kf.set(c, d), c;
}
let Kf = /* @__PURE__ */ new WeakMap();
function Se(t, e, ...n) {
  var r = t, i = pe, a;
  kr(() => {
    i !== (i = e()) && (a && (Gt(a), a = null), a = qt(() => (
      /** @type {SnippetFn} */
      i(r, ...n)
    )));
  }, Hr);
}
function rt(t) {
  lt === null && Fs(), ea && lt.l !== null ? Yf(lt).m.push(t) : Te(() => {
    const e = Vn(t);
    if (typeof e == "function") return (
      /** @type {() => void} */
      e
    );
  });
}
function Mn(t) {
  lt === null && Fs(), rt(() => () => Vn(t));
}
function Yf(t) {
  var e = (
    /** @type {ComponentContextLegacy} */
    t.l
  );
  return e.u ?? (e.u = { a: [], b: [], m: [] });
}
function ae(t, e, n = !1) {
  var r = t, i = null, a = null, o = Nt, u = n ? Hr : 0, l = !1;
  const c = (m, h = !0) => {
    l = !0, f(h, m);
  };
  var d = null;
  function v() {
    d !== null && (d.lastChild.remove(), r.before(d), d = null);
    var m = o ? i : a, h = o ? a : i;
    m && Uo(m), h && Rr(h, () => {
      o ? a = null : i = null;
    });
  }
  const f = (m, h) => {
    if (o !== (o = m)) {
      var g = Ws(), b = r;
      if (g && (d = document.createDocumentFragment(), d.append(b = Ur())), o ? i ?? (i = h && qt(() => h(b))) : a ?? (a = h && qt(() => h(b))), g) {
        var y = (
          /** @type {Batch} */
          st
        ), S = o ? i : a, I = o ? a : i;
        S && y.skipped_effects.delete(S), I && y.skipped_effects.add(I), y.add_callback(v);
      } else
        v();
    }
  };
  kr(() => {
    l = !1, e(c), l || f(null, null);
  }, u);
}
let oi = null;
function El(t) {
  oi = t;
}
function Ri(t, e) {
  return e;
}
function Zf(t, e, n) {
  for (var r = t.items, i = [], a = e.length, o = 0; o < a; o++)
    qs(e[o].e, i, !0);
  var u = a > 0 && i.length === 0 && n !== null;
  if (u) {
    var l = (
      /** @type {Element} */
      /** @type {Element} */
      n.parentNode
    );
    Cf(l), l.append(
      /** @type {Element} */
      n
    ), r.clear(), qn(t, e[0].prev, e[a - 1].next);
  }
  ic(i, () => {
    for (var c = 0; c < a; c++) {
      var d = e[c];
      u || (r.delete(d.k), qn(t, d.prev, d.next)), Gt(d.e, !u);
    }
  });
}
function wn(t, e, n, r, i, a = null) {
  var o = t, u = { flags: e, items: /* @__PURE__ */ new Map(), first: null }, l = (e & 4) !== 0;
  if (l) {
    var c = (
      /** @type {Element} */
      t
    );
    o = c.appendChild(Ur());
  }
  var d = null, v = !1, f = /* @__PURE__ */ new Map(), m = /* @__PURE__ */ Gs(() => {
    var y = n();
    return Ro(y) ? y : y == null ? [] : Hs(y);
  }), h, g;
  function b() {
    Qf(
      g,
      h,
      u,
      f,
      o,
      i,
      e,
      r,
      n
    ), a !== null && (h.length === 0 ? d ? Uo(d) : d = qt(() => a(o)) : d !== null && Rr(d, () => {
      d = null;
    }));
  }
  kr(() => {
    g ?? (g = /** @type {Effect} */
    je), h = /** @type {V[]} */
    s(m);
    var y = h.length;
    if (!(v && y === 0)) {
      v = y === 0;
      var S, I, _, E;
      if (Ws()) {
        var C = /* @__PURE__ */ new Set(), w = (
          /** @type {Batch} */
          st
        );
        for (I = 0; I < y; I += 1) {
          _ = h[I], E = r(_, I);
          var x = u.items.get(E) ?? f.get(E);
          x ? e & 3 && gc(x, _, I, e) : (S = pc(
            null,
            u,
            null,
            null,
            _,
            E,
            I,
            i,
            e,
            n,
            !0
          ), f.set(E, S)), C.add(E);
        }
        for (const [T, B] of u.items)
          C.has(T) || w.skipped_effects.add(B.e);
        w.add_callback(b);
      } else
        b();
      s(m);
    }
  });
}
function Qf(t, e, n, r, i, a, o, u, l) {
  var J, H, R, j;
  var c = (o & 8) !== 0, d = (o & 3) !== 0, v = e.length, f = n.items, m = n.first, h = m, g, b = null, y, S = [], I = [], _, E, C, w;
  if (c)
    for (w = 0; w < v; w += 1)
      _ = e[w], E = u(_, w), C = f.get(E), C !== void 0 && ((J = C.a) == null || J.measure(), (y ?? (y = /* @__PURE__ */ new Set())).add(C));
  for (w = 0; w < v; w += 1) {
    if (_ = e[w], E = u(_, w), C = f.get(E), C === void 0) {
      var x = r.get(E);
      if (x !== void 0) {
        r.delete(E), f.set(E, x);
        var T = b ? b.next : h;
        qn(n, b, x), qn(n, x, T), Xo(x, T, i), b = x;
      } else {
        var B = h ? (
          /** @type {TemplateNode} */
          h.e.nodes_start
        ) : i;
        b = pc(
          B,
          n,
          b,
          b === null ? n.first : b.next,
          _,
          E,
          w,
          a,
          o,
          l
        );
      }
      f.set(E, b), S = [], I = [], h = b.next;
      continue;
    }
    if (d && gc(C, _, w, o), C.e.f & Fn && (Uo(C.e), c && ((H = C.a) == null || H.unfix(), (y ?? (y = /* @__PURE__ */ new Set())).delete(C))), C !== h) {
      if (g !== void 0 && g.has(C)) {
        if (S.length < I.length) {
          var K = I[0], M;
          b = K.prev;
          var P = S[0], O = S[S.length - 1];
          for (M = 0; M < S.length; M += 1)
            Xo(S[M], K, i);
          for (M = 0; M < I.length; M += 1)
            g.delete(I[M]);
          qn(n, P.prev, O.next), qn(n, b, P), qn(n, O, K), h = K, b = O, w -= 1, S = [], I = [];
        } else
          g.delete(C), Xo(C, h, i), qn(n, C.prev, C.next), qn(n, C, b === null ? n.first : b.next), qn(n, b, C), b = C;
        continue;
      }
      for (S = [], I = []; h !== null && h.k !== E; )
        h.e.f & Fn || (g ?? (g = /* @__PURE__ */ new Set())).add(h), I.push(h), h = h.next;
      if (h === null)
        continue;
      C = h;
    }
    S.push(C), b = C, h = C.next;
  }
  if (h !== null || g !== void 0) {
    for (var A = g === void 0 ? [] : Hs(g); h !== null; )
      h.e.f & Fn || A.push(h), h = h.next;
    var N = A.length;
    if (N > 0) {
      var U = o & 4 && v === 0 ? i : null;
      if (c) {
        for (w = 0; w < N; w += 1)
          (R = A[w].a) == null || R.measure();
        for (w = 0; w < N; w += 1)
          (j = A[w].a) == null || j.fix();
      }
      Zf(n, A, U);
    }
  }
  c && vr(() => {
    var Ae;
    if (y !== void 0)
      for (C of y)
        (Ae = C.a) == null || Ae.apply();
  }), t.first = n.first && n.first.e, t.last = b && b.e;
  for (var q of r.values())
    Gt(q.e);
  r.clear();
}
function gc(t, e, n, r) {
  r & 1 && qi(t.v, e), r & 2 ? qi(
    /** @type {Value<number>} */
    t.i,
    n
  ) : t.i = n;
}
function pc(t, e, n, r, i, a, o, u, l, c, d) {
  var v = oi, f = (l & 1) !== 0, m = (l & 16) === 0, h = f ? m ? /* @__PURE__ */ qu(i, !1, !1) : ui(i) : i, g = l & 2 ? ui(o) : o, b = {
    i: g,
    v: h,
    k: a,
    a: null,
    // @ts-expect-error
    e: null,
    prev: n,
    next: r
  };
  oi = b;
  try {
    if (t === null) {
      var y = document.createDocumentFragment();
      y.append(t = Ur());
    }
    return b.e = qt(() => u(
      /** @type {Node} */
      t,
      h,
      g,
      c
    ), af), b.e.prev = n && n.e, b.e.next = r && r.e, n === null ? d || (e.first = b) : (n.next = b, n.e.next = b.e), r !== null && (r.prev = b, r.e.prev = b.e), b;
  } finally {
    oi = v;
  }
}
function Xo(t, e, n) {
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
function qn(t, e, n) {
  e === null ? t.first = n : (e.next = n, e.e.next = n && n.e), n !== null && (n.prev = e, n.e.prev = e && e.e);
}
function pr(t, e, n) {
  var r = t, i, a, o = null, u = null;
  function l() {
    a && (Rr(a), a = null), o && (o.lastChild.remove(), r.before(o), o = null), a = u, u = null;
  }
  kr(() => {
    if (i !== (i = e())) {
      var c = Ws();
      if (i) {
        var d = r;
        c && (o = document.createDocumentFragment(), o.append(d = Ur()), a && st.skipped_effects.add(a)), u = qt(() => n(d, i));
      }
      c ? st.add_callback(l) : l();
    }
  }, Hr);
}
function Sl(t, e, n, r, i, a) {
  var o, u, l = null, c = (
    /** @type {TemplateNode} */
    t
  ), d, v = oi;
  kr(() => {
    const f = e() || null;
    var m = f === "svg" ? kd : null;
    if (f !== o) {
      var h = oi;
      El(v), d && (f === null ? Rr(d, () => {
        d = null, u = null;
      }) : f === u ? Uo(d) : (Gt(d), Il(!1))), f && f !== u && (d = qt(() => {
        if (l = m ? document.createElementNS(m, f) : document.createElement(f), Xi(l, l), r) {
          var g = (
            /** @type {TemplateNode} */
            l.appendChild(Ur())
          );
          r(l, g);
        }
        je.nodes_end = l, c.before(l);
      })), o = f, o && (u = o), Il(!0), El(h);
    }
  }, Hr);
}
function Me(t, e, n) {
  mi(() => {
    var r = Vn(() => e(t, n == null ? void 0 : n()) || {});
    if (n && (r != null && r.update)) {
      var i = !1, a = (
        /** @type {any} */
        {}
      );
      Ba(() => {
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
function Jf(t, e) {
  var n = void 0, r;
  kr(() => {
    n !== (n = e()) && (r && (Gt(r), r = null), n && (r = qt(() => {
      mi(() => (
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
function $f() {
  for (var t, e, n = 0, r = "", i = arguments.length; n < i; n++) (t = arguments[n]) && (e = bc(t)) && (r && (r += " "), r += e);
  return r;
}
function _c(t) {
  return typeof t == "object" ? $f(t) : t ?? "";
}
const Al = [...` 	
\r\f \v\uFEFF`];
function eh(t, e, n) {
  var r = t == null ? "" : "" + t;
  if (e && (r = r ? r + " " + e : e), n) {
    for (var i in n)
      if (n[i])
        r = r ? r + " " + i : i;
      else if (r.length)
        for (var a = i.length, o = 0; (o = r.indexOf(i, o)) >= 0; ) {
          var u = o + a;
          (o === 0 || Al.includes(r[o - 1])) && (u === r.length || Al.includes(r[u])) ? r = (o === 0 ? "" : r.substring(0, o)) + r.substring(u + 1) : o = u;
        }
  }
  return r === "" ? null : r;
}
function Cl(t, e = !1) {
  var n = e ? " !important;" : ";", r = "";
  for (var i in t) {
    var a = t[i];
    a != null && a !== "" && (r += " " + i + ": " + a + n);
  }
  return r;
}
function Ko(t) {
  return t[0] !== "-" || t[1] !== "-" ? t.toLowerCase() : t;
}
function th(t, e) {
  if (e) {
    var n = "", r, i;
    if (Array.isArray(e) ? (r = e[0], i = e[1]) : r = e, t) {
      t = String(t).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var a = !1, o = 0, u = !1, l = [];
      r && l.push(...Object.keys(r).map(Ko)), i && l.push(...Object.keys(i).map(Ko));
      var c = 0, d = -1;
      const g = t.length;
      for (var v = 0; v < g; v++) {
        var f = t[v];
        if (u ? f === "/" && t[v - 1] === "*" && (u = !1) : a ? a === f && (a = !1) : f === "/" && t[v + 1] === "*" ? u = !0 : f === '"' || f === "'" ? a = f : f === "(" ? o++ : f === ")" && o--, !u && a === !1 && o === 0) {
          if (f === ":" && d === -1)
            d = v;
          else if (f === ";" || v === g - 1) {
            if (d !== -1) {
              var m = Ko(t.substring(c, d).trim());
              if (!l.includes(m)) {
                f !== ";" && v++;
                var h = t.substring(c, v).trim();
                n += " " + h + ";";
              }
            }
            c = v + 1, d = -1;
          }
        }
      }
    }
    return r && (n += Cl(r)), i && (n += Cl(i, !0)), n = n.trim(), n === "" ? null : n;
  }
  return t == null ? null : String(t);
}
function Xs(t, e, n, r, i, a) {
  var o = t.__className;
  if (o !== n || o === void 0) {
    var u = eh(n, r, a);
    u == null ? t.removeAttribute("class") : e ? t.className = u : t.setAttribute("class", u), t.__className = n;
  } else if (a && i !== a)
    for (var l in a) {
      var c = !!a[l];
      (i == null || c !== !!i[l]) && t.classList.toggle(l, c);
    }
  return a;
}
function Yo(t, e = {}, n, r) {
  for (var i in n) {
    var a = n[i];
    e[i] !== a && (n[i] == null ? t.style.removeProperty(i) : t.style.setProperty(i, a, r));
  }
}
function Ut(t, e, n, r) {
  var i = t.__style;
  if (i !== e) {
    var a = th(e, r);
    a == null ? t.removeAttribute("style") : t.style.cssText = a, t.__style = e;
  } else r && (Array.isArray(r) ? (Yo(t, n == null ? void 0 : n[0], r[0]), Yo(t, n == null ? void 0 : n[1], r[1], "important")) : Yo(t, n, r));
  return r;
}
function Is(t, e, n = !1) {
  if (t.multiple) {
    if (e == null)
      return;
    if (!Ro(e))
      return nf();
    for (var r of t.options)
      r.selected = e.includes(xl(r));
    return;
  }
  for (r of t.options) {
    var i = xl(r);
    if (Sf(i, e)) {
      r.selected = !0;
      return;
    }
  }
  (!n || e !== void 0) && (t.selectedIndex = -1);
}
function nh(t) {
  var e = new MutationObserver(() => {
    Is(t, t.__value);
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
function xl(t) {
  return "__value" in t ? t.__value : t.value;
}
const da = Symbol("class"), fa = Symbol("style"), yc = Symbol("is custom element"), Ic = Symbol("is html");
function Tl(t, e) {
  var n = Ks(t);
  n.value === (n.value = // treat null and undefined the same for the initial value
  e ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  t.value === e && (e !== 0 || t.nodeName !== "PROGRESS") || (t.value = e ?? "");
}
function rh(t, e) {
  e ? t.hasAttribute("selected") || t.setAttribute("selected", "") : t.removeAttribute("selected");
}
function Mr(t, e, n, r) {
  var i = Ks(t);
  i[e] !== (i[e] = n) && (e === "loading" && (t[qd] = n), n == null ? t.removeAttribute(e) : typeof n != "string" && Ec(t).includes(e) ? t[e] = n : t.setAttribute(e, n));
}
function ih(t, e, n, r, i = !1, a = !1) {
  var o = Ks(t), u = o[yc], l = !o[Ic], c = e || {}, d = t.tagName === "OPTION";
  for (var v in e)
    v in n || (n[v] = null);
  n.class ? n.class = _c(n.class) : n[da] && (n.class = null), n[fa] && (n.style ?? (n.style = null));
  var f = Ec(t);
  for (const I in n) {
    let _ = n[I];
    if (d && I === "value" && _ == null) {
      t.value = t.__value = "", c[I] = _;
      continue;
    }
    if (I === "class") {
      var m = t.namespaceURI === "http://www.w3.org/1999/xhtml";
      Xs(t, m, _, r, e == null ? void 0 : e[da], n[da]), c[I] = _, c[da] = n[da];
      continue;
    }
    if (I === "style") {
      Ut(t, _, e == null ? void 0 : e[fa], n[fa]), c[I] = _, c[fa] = n[fa];
      continue;
    }
    var h = c[I];
    if (!(_ === h && !(_ === void 0 && t.hasAttribute(I)))) {
      c[I] = _;
      var g = I[0] + I[1];
      if (g !== "$$")
        if (g === "on") {
          const E = {}, C = "$$" + I;
          let w = I.slice(2);
          var b = Vf(w);
          if (Bf(w) && (w = w.slice(0, -7), E.capture = !0), !b && h) {
            if (_ != null) continue;
            t.removeEventListener(w, c[C], E), c[C] = null;
          }
          if (_ != null)
            if (b)
              t[`__${w}`] = _, En([w]);
            else {
              let x = function(T) {
                c[I].call(this, T);
              };
              c[C] = zs(w, t, x, E);
            }
          else b && (t[`__${w}`] = void 0);
        } else if (I === "style")
          Mr(t, I, _);
        else if (I === "autofocus")
          xf(
            /** @type {HTMLElement} */
            t,
            !!_
          );
        else if (!u && (I === "__value" || I === "value" && _ != null))
          t.value = t.__value = _;
        else if (I === "selected" && d)
          rh(
            /** @type {HTMLOptionElement} */
            t,
            _
          );
        else {
          var y = I;
          l || (y = jf(y));
          var S = y === "defaultValue" || y === "defaultChecked";
          if (_ == null && !u && !S)
            if (o[I] = null, y === "value" || y === "checked") {
              let E = (
                /** @type {HTMLInputElement} */
                t
              );
              const C = e === void 0;
              if (y === "value") {
                let w = E.defaultValue;
                E.removeAttribute(y), E.defaultValue = w, E.value = E.__value = C ? w : null;
              } else {
                let w = E.defaultChecked;
                E.removeAttribute(y), E.defaultChecked = w, E.checked = C ? w : !1;
              }
            } else
              t.removeAttribute(I);
          else S || f.includes(y) && (u || typeof _ != "string") ? (t[y] = _, y in o && (o[y] = Nt)) : typeof _ != "function" && Mr(t, y, _);
        }
    }
  }
  return c;
}
function Ue(t, e, n = [], r = [], i, a = !1, o = !1) {
  Gu(n, r, (u) => {
    var l = void 0, c = {}, d = t.nodeName === "SELECT", v = !1;
    if (kr(() => {
      var m = e(...u.map(s)), h = ih(
        t,
        l,
        m,
        i,
        a,
        o
      );
      v && d && "value" in m && Is(
        /** @type {HTMLSelectElement} */
        t,
        m.value
      );
      for (let b of Object.getOwnPropertySymbols(c))
        m[b] || Gt(c[b]);
      for (let b of Object.getOwnPropertySymbols(m)) {
        var g = m[b];
        b.description === Bd && (!l || g !== l[b]) && (c[b] && Gt(c[b]), c[b] = qt(() => Jf(t, () => g))), h[b] = g;
      }
      l = h;
    }), d) {
      var f = (
        /** @type {HTMLSelectElement} */
        t
      );
      mi(() => {
        Is(
          f,
          /** @type {Record<string | symbol, any>} */
          l.value,
          !0
        ), nh(f);
      });
    }
    v = !0;
  });
}
function Ks(t) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    t.__attributes ?? (t.__attributes = {
      [yc]: t.nodeName.includes("-"),
      [Ic]: t.namespaceURI === Ud
    })
  );
}
var wl = /* @__PURE__ */ new Map();
function Ec(t) {
  var e = t.getAttribute("is") || t.nodeName, n = wl.get(e);
  if (n) return n;
  wl.set(e, n = []);
  for (var r, i = t, a = Element.prototype; a !== i; ) {
    r = Lu(i);
    for (var o in r)
      r[o].set && n.push(o);
    i = Us(i);
  }
  return n;
}
const ah = () => performance.now(), fr = {
  // don't access requestAnimationFrame eagerly outside method
  // this allows basic testing of user code without JSDOM
  // bunder will eval and remove ternary when the user's app is built
  tick: (
    /** @param {any} _ */
    (t) => requestAnimationFrame(t)
  ),
  now: () => ah(),
  tasks: /* @__PURE__ */ new Set()
};
function Sc() {
  const t = fr.now();
  fr.tasks.forEach((e) => {
    e.c(t) || (fr.tasks.delete(e), e.f());
  }), fr.tasks.size !== 0 && fr.tick(Sc);
}
function oh(t) {
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
function Ka(t, e) {
  ta(() => {
    t.dispatchEvent(new CustomEvent(e));
  });
}
function sh(t) {
  if (t === "float") return "cssFloat";
  if (t === "offset") return "cssOffset";
  if (t.startsWith("--")) return t;
  const e = t.split("-");
  return e.length === 1 ? e[0] : e[0] + e.slice(1).map(
    /** @param {any} word */
    (n) => n[0].toUpperCase() + n.slice(1)
  ).join("");
}
function Ll(t) {
  const e = {}, n = t.split(";");
  for (const r of n) {
    const [i, a] = r.split(":");
    if (!i || a === void 0) break;
    const o = sh(i.trim());
    e[o] = a.trim();
  }
  return e;
}
const lh = (t) => t;
function uh(t, e, n) {
  var r = (
    /** @type {EachItem} */
    oi
  ), i, a, o, u = null;
  r.a ?? (r.a = {
    element: t,
    measure() {
      i = this.element.getBoundingClientRect();
    },
    apply() {
      if (o == null || o.abort(), a = this.element.getBoundingClientRect(), i.left !== a.left || i.right !== a.right || i.top !== a.top || i.bottom !== a.bottom) {
        const l = e()(this.element, { from: i, to: a }, n == null ? void 0 : n());
        o = _o(this.element, l, void 0, 1, () => {
          o == null || o.abort(), o = void 0;
        });
      }
    },
    fix() {
      if (!t.getAnimations().length) {
        var { position: l, width: c, height: d } = getComputedStyle(t);
        if (l !== "absolute" && l !== "fixed") {
          var v = (
            /** @type {HTMLElement | SVGElement} */
            t.style
          );
          u = {
            position: v.position,
            width: v.width,
            height: v.height,
            transform: v.transform
          }, v.position = "absolute", v.width = c, v.height = d;
          var f = t.getBoundingClientRect();
          if (i.left !== f.left || i.top !== f.top) {
            var m = `translate(${i.left - f.left}px, ${i.top - f.top}px)`;
            v.transform = v.transform ? `${v.transform} ${m}` : m;
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
function bo(t, e, n, r) {
  var i = (t & 1) !== 0, a = (t & 2) !== 0, o = i && a, u = (t & 4) !== 0, l = o ? "both" : i ? "in" : "out", c, d = e.inert, v = e.style.overflow, f, m;
  function h() {
    return ta(() => c ?? (c = n()(e, (r == null ? void 0 : r()) ?? /** @type {P} */
    {}, {
      direction: l
    })));
  }
  var g = {
    is_global: u,
    in() {
      var I;
      if (e.inert = d, !i) {
        m == null || m.abort(), (I = m == null ? void 0 : m.reset) == null || I.call(m);
        return;
      }
      a || f == null || f.abort(), Ka(e, "introstart"), f = _o(e, h(), m, 1, () => {
        Ka(e, "introend"), f == null || f.abort(), f = c = void 0, e.style.overflow = v;
      });
    },
    out(I) {
      if (!a) {
        I == null || I(), c = void 0;
        return;
      }
      e.inert = !0, Ka(e, "outrostart"), m = _o(e, h(), f, 0, () => {
        Ka(e, "outroend"), I == null || I();
      });
    },
    stop: () => {
      f == null || f.abort(), m == null || m.abort();
    }
  }, b = (
    /** @type {Effect} */
    je
  );
  if ((b.transitions ?? (b.transitions = [])).push(g), i && po) {
    var y = u;
    if (!y) {
      for (var S = (
        /** @type {Effect | null} */
        b.parent
      ); S && S.f & Hr; )
        for (; (S = S.parent) && !(S.f & Pr); )
          ;
      y = !S || (S.f & Do) !== 0;
    }
    y && mi(() => {
      Vn(() => g.in());
    });
  }
}
function _o(t, e, n, r, i) {
  var a = r === 1;
  if (Li(e)) {
    var o, u = !1;
    return vr(() => {
      if (!u) {
        var b = e({ direction: a ? "in" : "out" });
        o = _o(t, b, n, r, i);
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
  const { delay: l = 0, css: c, tick: d, easing: v = lh } = e;
  var f = [];
  if (a && n === void 0 && (d && d(0, 1), c)) {
    var m = Ll(c(0, 1));
    f.push(m, m);
  }
  var h = () => 1 - r, g = t.animate(f, { duration: l, fill: "forwards" });
  return g.onfinish = () => {
    g.cancel();
    var b = (n == null ? void 0 : n.t()) ?? 1 - r;
    n == null || n.abort();
    var y = r - b, S = (
      /** @type {number} */
      e.duration * Math.abs(y)
    ), I = [];
    if (S > 0) {
      var _ = !1;
      if (c)
        for (var E = Math.ceil(S / 16.666666666666668), C = 0; C <= E; C += 1) {
          var w = b + y * v(C / E), x = Ll(c(w, 1 - w));
          I.push(x), _ || (_ = x.overflow === "hidden");
        }
      _ && (t.style.overflow = "hidden"), h = () => {
        var T = (
          /** @type {number} */
          /** @type {globalThis.Animation} */
          g.currentTime
        );
        return b + y * v(T / S);
      }, d && oh(() => {
        if (g.playState !== "running") return !1;
        var T = h();
        return d(T, 1 - T), !0;
      });
    }
    g = t.animate(I, { duration: S, fill: "forwards" }), g.onfinish = () => {
      h = () => r, d == null || d(r, 1 - r), i();
    };
  }, {
    abort: () => {
      g && (g.cancel(), g.effect = null, g.onfinish = pe);
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
function Ta(t, e, n = e) {
  var r = /* @__PURE__ */ new WeakSet();
  Qu(t, "input", async (i) => {
    var a = i ? t.defaultValue : t.value;
    if (a = Zo(t) ? Qo(a) : a, n(a), st !== null && r.add(st), await dc(), a !== (a = e())) {
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
  Vn(e) == null && t.value && (n(Zo(t) ? Qo(t.value) : t.value), st !== null && r.add(st)), Ba(() => {
    var i = e();
    if (t === document.activeElement) {
      var a = (
        /** @type {Batch} */
        ao ?? st
      );
      if (r.has(a))
        return;
    }
    Zo(t) && i === Qo(t.value) || t.type === "date" && !i && !t.value || i !== t.value && (t.value = i ?? "");
  });
}
function ch(t, e, n = e) {
  Qu(t, "change", (r) => {
    var i = r ? t.defaultChecked : t.checked;
    n(i);
  }), // If we are hydrating and the value has since changed,
  // then use the update value from the input instead.
  // If defaultChecked is set, then checked == defaultChecked
  Vn(e) == null && n(t.checked), Ba(() => {
    var r = e();
    t.checked = !!r;
  });
}
function Zo(t) {
  var e = t.type;
  return e === "number" || e === "range";
}
function Qo(t) {
  return t === "" ? null : +t;
}
function Ol(t, e) {
  return t === e || (t == null ? void 0 : t[Zn]) === e;
}
function Ee(t = {}, e, n, r) {
  return mi(() => {
    var i, a;
    return Ba(() => {
      i = a, a = (r == null ? void 0 : r()) || [], Vn(() => {
        t !== n(...a) && (e(t, ...a), i && Ol(n(...i), t) && e(null, ...i));
      });
    }), () => {
      vr(() => {
        a && Ol(n(...a), t) && e(null, ...a);
      });
    };
  }), t;
}
function dh(t = !1) {
  const e = (
    /** @type {ComponentContextLegacy} */
    lt
  ), n = e.l.u;
  if (!n) return;
  let r = () => hc(e.s);
  if (t) {
    let i = 0, a = (
      /** @type {Record<string, any>} */
      {}
    );
    const o = /* @__PURE__ */ Ua(() => {
      let u = !1;
      const l = e.s;
      for (const c in l)
        l[c] !== a[c] && (a[c] = l[c], u = !0);
      return u && i++, i;
    });
    r = () => s(o);
  }
  n.b.length && ec(() => {
    Rl(e, r), vo(n.b);
  }), Te(() => {
    const i = Vn(() => n.m.map(jd));
    return () => {
      for (const a of i)
        typeof a == "function" && a();
    };
  }), n.a.length && Te(() => {
    Rl(e, r), vo(n.a);
  });
}
function Rl(t, e) {
  if (t.l.s)
    for (const n of t.l.s) s(n);
  e();
}
function Ys(t, e, n) {
  if (t == null)
    return e(void 0), n && n(void 0), pe;
  const r = Vn(
    () => t.subscribe(
      e,
      // @ts-expect-error
      n
    )
  );
  return r.unsubscribe ? () => r.unsubscribe() : r;
}
const xi = [];
function fh(t, e) {
  return {
    subscribe: tn(t, e).subscribe
  };
}
function tn(t, e = pe) {
  let n = null;
  const r = /* @__PURE__ */ new Set();
  function i(u) {
    if (Vs(t, u) && (t = u, n)) {
      const l = !xi.length;
      for (const c of r)
        c[1](), xi.push(c, t);
      if (l) {
        for (let c = 0; c < xi.length; c += 2)
          xi[c][0](xi[c + 1]);
        xi.length = 0;
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
  return fh(n, (o, u) => {
    let l = !1;
    const c = [];
    let d = 0, v = pe;
    const f = () => {
      if (d)
        return;
      v();
      const h = e(r ? c[0] : c, o, u);
      a ? o(h) : v = typeof h == "function" ? h : pe;
    }, m = i.map(
      (h, g) => Ys(
        h,
        (b) => {
          c[g] = b, d &= ~(1 << g), l && f();
        },
        () => {
          d |= 1 << g;
        }
      )
    );
    return l = !0, f(), function() {
      vo(m), v(), l = !1;
    };
  });
}
function hh(t) {
  let e;
  return Ys(t, (n) => e = n)(), e;
}
let Ya = !1, Es = Symbol();
function Qn(t, e, n) {
  const r = n[e] ?? (n[e] = {
    store: null,
    source: /* @__PURE__ */ qu(void 0),
    unsubscribe: pe
  });
  if (r.store !== t && !(Es in n))
    if (r.unsubscribe(), r.store = t ?? null, t == null)
      r.source.v = void 0, r.unsubscribe = pe;
    else {
      var i = !0;
      r.unsubscribe = Ys(t, (a) => {
        i ? r.source.v = a : X(r.source, a);
      }), i = !1;
    }
  return t && Es in n ? hh(t) : s(r.source);
}
function ci(t, e) {
  return t.set(e), e;
}
function br() {
  const t = {};
  function e() {
    Ho(() => {
      for (var n in t)
        t[n].unsubscribe();
      ho(t, Es, {
        enumerable: !1,
        value: !0
      });
    });
  }
  return [t, e];
}
function vh(t) {
  var e = Ya;
  try {
    return Ya = !1, [t(), Ya];
  } finally {
    Ya = e;
  }
}
const mh = {
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
function qe(t, e, n) {
  return new Proxy(
    { props: t, exclude: e },
    mh
  );
}
const gh = {
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
      const a = Lr(i, e);
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
        const i = Lr(r, e);
        return i && !i.configurable && (i.configurable = !0), i;
      }
    }
  },
  has(t, e) {
    if (e === Zn || e === Mu) return !1;
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
function nt(...t) {
  return new Proxy({ props: t }, gh);
}
function p(t, e, n, r) {
  var I;
  var i = !ea || (n & 2) !== 0, a = (n & 8) !== 0, o = (n & 16) !== 0, u = (
    /** @type {V} */
    r
  ), l = !0, c = () => (l && (l = !1, u = o ? Vn(
    /** @type {() => V} */
    r
  ) : (
    /** @type {V} */
    r
  )), u), d;
  if (a) {
    var v = Zn in t || Mu in t;
    d = ((I = Lr(t, e)) == null ? void 0 : I.set) ?? (v && e in t ? (_) => t[e] = _ : void 0);
  }
  var f, m = !1;
  a ? [f, m] = vh(() => (
    /** @type {V} */
    t[e]
  )) : f = /** @type {V} */
  t[e], f === void 0 && r !== void 0 && (f = c(), d && (i && Qd(), d(f)));
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
    var g = t.$$legacy;
    return (
      /** @type {() => V} */
      function(_, E) {
        return arguments.length > 0 ? ((!i || !E || g || m) && d(E ? h() : _), _) : h();
      }
    );
  }
  var b = !1, y = (n & 1 ? Ua : Gs)(() => (b = !1, h()));
  a && s(y);
  var S = (
    /** @type {Effect} */
    je
  );
  return (
    /** @type {() => V} */
    function(_, E) {
      if (arguments.length > 0) {
        const C = E ? s(y) : i && a ? ce(_) : _;
        return X(y, C), b = !0, u !== void 0 && (u = C), _;
      }
      return gi && b || S.f & vi ? y.v : s(y);
    }
  );
}
const ph = "5";
var Tu;
typeof window < "u" && ((Tu = window.__svelte ?? (window.__svelte = {})).v ?? (Tu.v = /* @__PURE__ */ new Set())).add(ph);
function bh(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var _h = function(e) {
  return yh(e) && !Ih(e);
};
function yh(t) {
  return !!t && typeof t == "object";
}
function Ih(t) {
  var e = Object.prototype.toString.call(t);
  return e === "[object RegExp]" || e === "[object Date]" || Ah(t);
}
var Eh = typeof Symbol == "function" && Symbol.for, Sh = Eh ? Symbol.for("react.element") : 60103;
function Ah(t) {
  return t.$$typeof === Sh;
}
function Ch(t) {
  return Array.isArray(t) ? [] : {};
}
function wa(t, e) {
  return e.clone !== !1 && e.isMergeableObject(t) ? Ki(Ch(t), t, e) : t;
}
function xh(t, e, n) {
  return t.concat(e).map(function(r) {
    return wa(r, n);
  });
}
function Th(t, e) {
  if (!e.customMerge)
    return Ki;
  var n = e.customMerge(t);
  return typeof n == "function" ? n : Ki;
}
function wh(t) {
  return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(t).filter(function(e) {
    return Object.propertyIsEnumerable.call(t, e);
  }) : [];
}
function Ml(t) {
  return Object.keys(t).concat(wh(t));
}
function Ac(t, e) {
  try {
    return e in t;
  } catch {
    return !1;
  }
}
function Lh(t, e) {
  return Ac(t, e) && !(Object.hasOwnProperty.call(t, e) && Object.propertyIsEnumerable.call(t, e));
}
function Oh(t, e, n) {
  var r = {};
  return n.isMergeableObject(t) && Ml(t).forEach(function(i) {
    r[i] = wa(t[i], n);
  }), Ml(e).forEach(function(i) {
    Lh(t, i) || (Ac(t, i) && n.isMergeableObject(e[i]) ? r[i] = Th(i, n)(t[i], e[i], n) : r[i] = wa(e[i], n));
  }), r;
}
function Ki(t, e, n) {
  n = n || {}, n.arrayMerge = n.arrayMerge || xh, n.isMergeableObject = n.isMergeableObject || _h, n.cloneUnlessOtherwiseSpecified = wa;
  var r = Array.isArray(e), i = Array.isArray(t), a = r === i;
  return a ? r ? n.arrayMerge(t, e, n) : Oh(t, e, n) : wa(e, n);
}
Ki.all = function(e, n) {
  if (!Array.isArray(e))
    throw new Error("first argument should be an array");
  return e.reduce(function(r, i) {
    return Ki(r, i, n);
  }, {});
};
var Rh = Ki, Mh = Rh;
const Dh = /* @__PURE__ */ bh(Mh);
var Ss = function(t, e) {
  return Ss = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, r) {
    n.__proto__ = r;
  } || function(n, r) {
    for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (n[i] = r[i]);
  }, Ss(t, e);
};
function Ve(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  Ss(t, e);
  function n() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : (n.prototype = e.prototype, new n());
}
var ue = function() {
  return ue = Object.assign || function(e) {
    for (var n, r = 1, i = arguments.length; r < i; r++) {
      n = arguments[r];
      for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, ue.apply(this, arguments);
};
function Ph(t, e) {
  var n = {};
  for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(t); i < r.length; i++)
      e.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[i]) && (n[r[i]] = t[r[i]]);
  return n;
}
function Cc(t, e, n, r) {
  function i(a) {
    return a instanceof n ? a : new n(function(o) {
      o(a);
    });
  }
  return new (n || (n = Promise))(function(a, o) {
    function u(d) {
      try {
        c(r.next(d));
      } catch (v) {
        o(v);
      }
    }
    function l(d) {
      try {
        c(r.throw(d));
      } catch (v) {
        o(v);
      }
    }
    function c(d) {
      d.done ? a(d.value) : i(d.value).then(u, l);
    }
    c((r = r.apply(t, e || [])).next());
  });
}
function Zs(t, e) {
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
function Ht(t) {
  var e = typeof Symbol == "function" && Symbol.iterator, n = e && t[e], r = 0;
  if (n) return n.call(t);
  if (t && typeof t.length == "number") return {
    next: function() {
      return t && r >= t.length && (t = void 0), { value: t && t[r++], done: !t };
    }
  };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function mr(t, e) {
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
function Jn(t, e, n) {
  if (n || arguments.length === 2) for (var r = 0, i = e.length, a; r < i; r++)
    (a || !(r in e)) && (a || (a = Array.prototype.slice.call(e, 0, r)), a[r] = e[r]);
  return t.concat(a || Array.prototype.slice.call(e));
}
function Ni(t) {
  return this instanceof Ni ? (this.v = t, this) : new Ni(t);
}
function Nh(t, e, n) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var r = n.apply(t, e || []), i, a = [];
  return i = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype), u("next"), u("throw"), u("return", o), i[Symbol.asyncIterator] = function() {
    return this;
  }, i;
  function o(m) {
    return function(h) {
      return Promise.resolve(h).then(m, v);
    };
  }
  function u(m, h) {
    r[m] && (i[m] = function(g) {
      return new Promise(function(b, y) {
        a.push([m, g, b, y]) > 1 || l(m, g);
      });
    }, h && (i[m] = h(i[m])));
  }
  function l(m, h) {
    try {
      c(r[m](h));
    } catch (g) {
      f(a[0][3], g);
    }
  }
  function c(m) {
    m.value instanceof Ni ? Promise.resolve(m.value.v).then(d, v) : f(a[0][2], m);
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
function Hh(t) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var e = t[Symbol.asyncIterator], n;
  return e ? e.call(t) : (t = typeof Ht == "function" ? Ht(t) : t[Symbol.iterator](), n = {}, r("next"), r("throw"), r("return"), n[Symbol.asyncIterator] = function() {
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
function Jo(t, e) {
  var n = e && e.cache ? e.cache : jh, r = e && e.serializer ? e.serializer : Vh, i = e && e.strategy ? e.strategy : Bh;
  return i(t, {
    cache: n,
    serializer: r
  });
}
function Uh(t) {
  return t == null || typeof t == "number" || typeof t == "boolean";
}
function kh(t, e, n, r) {
  var i = Uh(r) ? r : n(r), a = e.get(i);
  return typeof a > "u" && (a = t.call(this, r), e.set(i, a)), a;
}
function xc(t, e, n) {
  var r = Array.prototype.slice.call(arguments, 3), i = n(r), a = e.get(i);
  return typeof a > "u" && (a = t.apply(this, r), e.set(i, a)), a;
}
function Tc(t, e, n, r, i) {
  return n.bind(e, t, r, i);
}
function Bh(t, e) {
  var n = t.length === 1 ? kh : xc;
  return Tc(t, this, n, e.cache.create(), e.serializer);
}
function Fh(t, e) {
  return Tc(t, this, xc, e.cache.create(), e.serializer);
}
var Vh = function() {
  return JSON.stringify(arguments);
}, Gh = (
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
), jh = {
  create: function() {
    return new Gh();
  }
}, $o = {
  variadic: Fh
}, Ye;
(function(t) {
  t[t.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", t[t.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", t[t.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", t[t.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", t[t.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", t[t.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", t[t.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", t[t.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", t[t.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", t[t.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", t[t.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", t[t.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", t[t.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", t[t.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", t[t.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", t[t.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", t[t.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", t[t.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", t[t.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", t[t.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", t[t.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", t[t.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", t[t.INVALID_TAG = 23] = "INVALID_TAG", t[t.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", t[t.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", t[t.UNCLOSED_TAG = 27] = "UNCLOSED_TAG";
})(Ye || (Ye = {}));
var vt;
(function(t) {
  t[t.literal = 0] = "literal", t[t.argument = 1] = "argument", t[t.number = 2] = "number", t[t.date = 3] = "date", t[t.time = 4] = "time", t[t.select = 5] = "select", t[t.plural = 6] = "plural", t[t.pound = 7] = "pound", t[t.tag = 8] = "tag";
})(vt || (vt = {}));
var Yi;
(function(t) {
  t[t.number = 0] = "number", t[t.dateTime = 1] = "dateTime";
})(Yi || (Yi = {}));
function Dl(t) {
  return t.type === vt.literal;
}
function Wh(t) {
  return t.type === vt.argument;
}
function wc(t) {
  return t.type === vt.number;
}
function Lc(t) {
  return t.type === vt.date;
}
function Oc(t) {
  return t.type === vt.time;
}
function Rc(t) {
  return t.type === vt.select;
}
function Mc(t) {
  return t.type === vt.plural;
}
function qh(t) {
  return t.type === vt.pound;
}
function Dc(t) {
  return t.type === vt.tag;
}
function Pc(t) {
  return !!(t && typeof t == "object" && t.type === Yi.number);
}
function As(t) {
  return !!(t && typeof t == "object" && t.type === Yi.dateTime);
}
var Nc = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/, zh = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
function Xh(t) {
  var e = {};
  return t.replace(zh, function(n) {
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
var Kh = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
function Yh(t) {
  if (t.length === 0)
    throw new Error("Number skeleton cannot be empty");
  for (var e = t.split(Kh).filter(function(f) {
    return f.length > 0;
  }), n = [], r = 0, i = e; r < i.length; r++) {
    var a = i[r], o = a.split("/");
    if (o.length === 0)
      throw new Error("Invalid number skeleton");
    for (var u = o[0], l = o.slice(1), c = 0, d = l; c < d.length; c++) {
      var v = d[c];
      if (v.length === 0)
        throw new Error("Invalid number skeleton");
    }
    n.push({ stem: u, options: l });
  }
  return n;
}
function Zh(t) {
  return t.replace(/^(.*?)-/, "");
}
var Pl = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g, Hc = /^(@+)?(\+|#+)?[rs]?$/g, Qh = /(\*)(0+)|(#+)(0+)|(0+)/g, Uc = /^(0+)$/;
function Nl(t) {
  var e = {};
  return t[t.length - 1] === "r" ? e.roundingPriority = "morePrecision" : t[t.length - 1] === "s" && (e.roundingPriority = "lessPrecision"), t.replace(Hc, function(n, r, i) {
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
function Jh(t) {
  var e;
  if (t[0] === "E" && t[1] === "E" ? (e = {
    notation: "engineering"
  }, t = t.slice(2)) : t[0] === "E" && (e = {
    notation: "scientific"
  }, t = t.slice(1)), e) {
    var n = t.slice(0, 2);
    if (n === "+!" ? (e.signDisplay = "always", t = t.slice(2)) : n === "+?" && (e.signDisplay = "exceptZero", t = t.slice(2)), !Uc.test(t))
      throw new Error("Malformed concise eng/scientific notation");
    e.minimumIntegerDigits = t.length;
  }
  return e;
}
function Hl(t) {
  var e = {}, n = kc(t);
  return n || e;
}
function $h(t) {
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
        e.style = "unit", e.unit = Zh(i.options[0]);
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
        e = ue(ue(ue({}, e), { notation: "scientific" }), i.options.reduce(function(l, c) {
          return ue(ue({}, l), Hl(c));
        }, {}));
        continue;
      case "engineering":
        e = ue(ue(ue({}, e), { notation: "engineering" }), i.options.reduce(function(l, c) {
          return ue(ue({}, l), Hl(c));
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
        i.options[0].replace(Qh, function(l, c, d, v, f, m) {
          if (c)
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
    if (Uc.test(i.stem)) {
      e.minimumIntegerDigits = i.stem.length;
      continue;
    }
    if (Pl.test(i.stem)) {
      if (i.options.length > 1)
        throw new RangeError("Fraction-precision stems only accept a single optional option");
      i.stem.replace(Pl, function(l, c, d, v, f, m) {
        return d === "*" ? e.minimumFractionDigits = c.length : v && v[0] === "#" ? e.maximumFractionDigits = v.length : f && m ? (e.minimumFractionDigits = f.length, e.maximumFractionDigits = f.length + m.length) : (e.minimumFractionDigits = c.length, e.maximumFractionDigits = c.length), "";
      });
      var a = i.options[0];
      a === "w" ? e = ue(ue({}, e), { trailingZeroDisplay: "stripIfInteger" }) : a && (e = ue(ue({}, e), Nl(a)));
      continue;
    }
    if (Hc.test(i.stem)) {
      e = ue(ue({}, e), Nl(i.stem));
      continue;
    }
    var o = kc(i.stem);
    o && (e = ue(ue({}, e), o));
    var u = Jh(i.stem);
    u && (e = ue(ue({}, e), u));
  }
  return e;
}
var Za = {
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
function ev(t, e) {
  for (var n = "", r = 0; r < t.length; r++) {
    var i = t.charAt(r);
    if (i === "j") {
      for (var a = 0; r + 1 < t.length && t.charAt(r + 1) === i; )
        a++, r++;
      var o = 1 + (a & 1), u = a < 2 ? 1 : 3 + (a >> 1), l = "a", c = tv(e);
      for ((c == "H" || c == "k") && (u = 0); u-- > 0; )
        n += l;
      for (; o-- > 0; )
        n = c + n;
    } else i === "J" ? n += "H" : n += i;
  }
  return n;
}
function tv(t) {
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
  var i = Za[r || ""] || Za[n || ""] || Za["".concat(n, "-001")] || Za["001"];
  return i[0];
}
var es, nv = new RegExp("^".concat(Nc.source, "*")), rv = new RegExp("".concat(Nc.source, "*$"));
function Ze(t, e) {
  return { start: t, end: e };
}
var iv = !!String.prototype.startsWith && "_a".startsWith("a", 1), av = !!String.fromCodePoint, ov = !!Object.fromEntries, sv = !!String.prototype.codePointAt, lv = !!String.prototype.trimStart, uv = !!String.prototype.trimEnd, cv = !!Number.isSafeInteger, dv = cv ? Number.isSafeInteger : function(t) {
  return typeof t == "number" && isFinite(t) && Math.floor(t) === t && Math.abs(t) <= 9007199254740991;
}, Cs = !0;
try {
  var fv = Fc("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  Cs = ((es = fv.exec("a")) === null || es === void 0 ? void 0 : es[0]) === "a";
} catch {
  Cs = !1;
}
var Ul = iv ? (
  // Native
  function(e, n, r) {
    return e.startsWith(n, r);
  }
) : (
  // For IE11
  function(e, n, r) {
    return e.slice(r, r + n.length) === n;
  }
), xs = av ? String.fromCodePoint : (
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
  ov ? Object.fromEntries : (
    // Ponyfill
    function(e) {
      for (var n = {}, r = 0, i = e; r < i.length; r++) {
        var a = i[r], o = a[0], u = a[1];
        n[o] = u;
      }
      return n;
    }
  )
), Bc = sv ? (
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
), hv = lv ? (
  // Native
  function(e) {
    return e.trimStart();
  }
) : (
  // Ponyfill
  function(e) {
    return e.replace(nv, "");
  }
), vv = uv ? (
  // Native
  function(e) {
    return e.trimEnd();
  }
) : (
  // Ponyfill
  function(e) {
    return e.replace(rv, "");
  }
);
function Fc(t, e) {
  return new RegExp(t, e);
}
var Ts;
if (Cs) {
  var Bl = Fc("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  Ts = function(e, n) {
    var r;
    Bl.lastIndex = n;
    var i = Bl.exec(e);
    return (r = i[1]) !== null && r !== void 0 ? r : "";
  };
} else
  Ts = function(e, n) {
    for (var r = []; ; ) {
      var i = Bc(e, n);
      if (i === void 0 || Vc(i) || bv(i))
        break;
      r.push(i), n += i >= 65536 ? 2 : 1;
    }
    return xs.apply(void 0, r);
  };
var mv = (
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
              location: Ze(u, this.clonePosition())
            });
          } else if (a === 60 && !this.ignoreTag && this.peek() === 47) {
            if (r)
              break;
            return this.error(Ye.UNMATCHED_CLOSING_TAG, Ze(this.clonePosition(), this.clonePosition()));
          } else if (a === 60 && !this.ignoreTag && ws(this.peek() || 0)) {
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
            location: Ze(r, this.clonePosition())
          },
          err: null
        };
      if (this.bumpIf(">")) {
        var a = this.parseMessage(e + 1, n, !0);
        if (a.err)
          return a;
        var o = a.val, u = this.clonePosition();
        if (this.bumpIf("</")) {
          if (this.isEOF() || !ws(this.char()))
            return this.error(Ye.INVALID_TAG, Ze(u, this.clonePosition()));
          var l = this.clonePosition(), c = this.parseTagName();
          return i !== c ? this.error(Ye.UNMATCHED_CLOSING_TAG, Ze(l, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
            val: {
              type: vt.tag,
              value: i,
              children: o,
              location: Ze(r, this.clonePosition())
            },
            err: null
          } : this.error(Ye.INVALID_TAG, Ze(u, this.clonePosition())));
        } else
          return this.error(Ye.UNCLOSED_TAG, Ze(r, this.clonePosition()));
      } else
        return this.error(Ye.INVALID_TAG, Ze(r, this.clonePosition()));
    }, t.prototype.parseTagName = function() {
      var e = this.offset();
      for (this.bump(); !this.isEOF() && pv(this.char()); )
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
      var l = Ze(r, this.clonePosition());
      return {
        val: { type: vt.literal, value: i, location: l },
        err: null
      };
    }, t.prototype.tryParseLeftAngleBracket = function() {
      return !this.isEOF() && this.char() === 60 && (this.ignoreTag || // If at the opening tag or closing tag position, bail.
      !gv(this.peek() || 0)) ? (this.bump(), "<") : null;
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
        return this.error(Ye.EXPECT_ARGUMENT_CLOSING_BRACE, Ze(r, this.clonePosition()));
      if (this.char() === 125)
        return this.bump(), this.error(Ye.EMPTY_ARGUMENT, Ze(r, this.clonePosition()));
      var i = this.parseIdentifierIfPossible().value;
      if (!i)
        return this.error(Ye.MALFORMED_ARGUMENT, Ze(r, this.clonePosition()));
      if (this.bumpSpace(), this.isEOF())
        return this.error(Ye.EXPECT_ARGUMENT_CLOSING_BRACE, Ze(r, this.clonePosition()));
      switch (this.char()) {
        case 125:
          return this.bump(), {
            val: {
              type: vt.argument,
              // value does not include the opening and closing braces.
              value: i,
              location: Ze(r, this.clonePosition())
            },
            err: null
          };
        case 44:
          return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(Ye.EXPECT_ARGUMENT_CLOSING_BRACE, Ze(r, this.clonePosition())) : this.parseArgumentOptions(e, n, i, r);
        default:
          return this.error(Ye.MALFORMED_ARGUMENT, Ze(r, this.clonePosition()));
      }
    }, t.prototype.parseIdentifierIfPossible = function() {
      var e = this.clonePosition(), n = this.offset(), r = Ts(this.message, n), i = n + r.length;
      this.bumpTo(i);
      var a = this.clonePosition(), o = Ze(e, a);
      return { value: r, location: o };
    }, t.prototype.parseArgumentOptions = function(e, n, r, i) {
      var a, o = this.clonePosition(), u = this.parseIdentifierIfPossible().value, l = this.clonePosition();
      switch (u) {
        case "":
          return this.error(Ye.EXPECT_ARGUMENT_TYPE, Ze(o, l));
        case "number":
        case "date":
        case "time": {
          this.bumpSpace();
          var c = null;
          if (this.bumpIf(",")) {
            this.bumpSpace();
            var d = this.clonePosition(), v = this.parseSimpleArgStyleIfPossible();
            if (v.err)
              return v;
            var f = vv(v.val);
            if (f.length === 0)
              return this.error(Ye.EXPECT_ARGUMENT_STYLE, Ze(this.clonePosition(), this.clonePosition()));
            var m = Ze(d, this.clonePosition());
            c = { style: f, styleLocation: m };
          }
          var h = this.tryParseArgumentClose(i);
          if (h.err)
            return h;
          var g = Ze(i, this.clonePosition());
          if (c && Ul(c == null ? void 0 : c.style, "::", 0)) {
            var b = hv(c.style.slice(2));
            if (u === "number") {
              var v = this.parseNumberSkeletonFromString(b, c.styleLocation);
              return v.err ? v : {
                val: { type: vt.number, value: r, location: g, style: v.val },
                err: null
              };
            } else {
              if (b.length === 0)
                return this.error(Ye.EXPECT_DATE_TIME_SKELETON, g);
              var y = b;
              this.locale && (y = ev(b, this.locale));
              var f = {
                type: Yi.dateTime,
                pattern: y,
                location: c.styleLocation,
                parsedOptions: this.shouldParseSkeletons ? Xh(y) : {}
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
          var I = this.clonePosition();
          if (this.bumpSpace(), !this.bumpIf(","))
            return this.error(Ye.EXPECT_SELECT_ARGUMENT_OPTIONS, Ze(I, ue({}, I)));
          this.bumpSpace();
          var _ = this.parseIdentifierIfPossible(), E = 0;
          if (u !== "select" && _.value === "offset") {
            if (!this.bumpIf(":"))
              return this.error(Ye.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, Ze(this.clonePosition(), this.clonePosition()));
            this.bumpSpace();
            var v = this.tryParseDecimalInteger(Ye.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, Ye.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);
            if (v.err)
              return v;
            this.bumpSpace(), _ = this.parseIdentifierIfPossible(), E = v.val;
          }
          var C = this.tryParsePluralOrSelectOptions(e, u, n, _);
          if (C.err)
            return C;
          var h = this.tryParseArgumentClose(i);
          if (h.err)
            return h;
          var w = Ze(i, this.clonePosition());
          return u === "select" ? {
            val: {
              type: vt.select,
              value: r,
              options: kl(C.val),
              location: w
            },
            err: null
          } : {
            val: {
              type: vt.plural,
              value: r,
              options: kl(C.val),
              offset: E,
              pluralType: u === "plural" ? "cardinal" : "ordinal",
              location: w
            },
            err: null
          };
        }
        default:
          return this.error(Ye.INVALID_ARGUMENT_TYPE, Ze(o, l));
      }
    }, t.prototype.tryParseArgumentClose = function(e) {
      return this.isEOF() || this.char() !== 125 ? this.error(Ye.EXPECT_ARGUMENT_CLOSING_BRACE, Ze(e, this.clonePosition())) : (this.bump(), { val: !0, err: null });
    }, t.prototype.parseSimpleArgStyleIfPossible = function() {
      for (var e = 0, n = this.clonePosition(); !this.isEOF(); ) {
        var r = this.char();
        switch (r) {
          case 39: {
            this.bump();
            var i = this.clonePosition();
            if (!this.bumpUntil("'"))
              return this.error(Ye.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, Ze(i, this.clonePosition()));
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
        r = Yh(e);
      } catch {
        return this.error(Ye.INVALID_NUMBER_SKELETON, n);
      }
      return {
        val: {
          type: Yi.number,
          tokens: r,
          location: n,
          parsedOptions: this.shouldParseSkeletons ? $h(r) : {}
        },
        err: null
      };
    }, t.prototype.tryParsePluralOrSelectOptions = function(e, n, r, i) {
      for (var a, o = !1, u = [], l = /* @__PURE__ */ new Set(), c = i.value, d = i.location; ; ) {
        if (c.length === 0) {
          var v = this.clonePosition();
          if (n !== "select" && this.bumpIf("=")) {
            var f = this.tryParseDecimalInteger(Ye.EXPECT_PLURAL_ARGUMENT_SELECTOR, Ye.INVALID_PLURAL_ARGUMENT_SELECTOR);
            if (f.err)
              return f;
            d = Ze(v, this.clonePosition()), c = this.message.slice(v.offset, this.offset());
          } else
            break;
        }
        if (l.has(c))
          return this.error(n === "select" ? Ye.DUPLICATE_SELECT_ARGUMENT_SELECTOR : Ye.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, d);
        c === "other" && (o = !0), this.bumpSpace();
        var m = this.clonePosition();
        if (!this.bumpIf("{"))
          return this.error(n === "select" ? Ye.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : Ye.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, Ze(this.clonePosition(), this.clonePosition()));
        var h = this.parseMessage(e + 1, n, r);
        if (h.err)
          return h;
        var g = this.tryParseArgumentClose(m);
        if (g.err)
          return g;
        u.push([
          c,
          {
            value: h.val,
            location: Ze(m, this.clonePosition())
          }
        ]), l.add(c), this.bumpSpace(), a = this.parseIdentifierIfPossible(), c = a.value, d = a.location;
      }
      return u.length === 0 ? this.error(n === "select" ? Ye.EXPECT_SELECT_ARGUMENT_SELECTOR : Ye.EXPECT_PLURAL_ARGUMENT_SELECTOR, Ze(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !o ? this.error(Ye.MISSING_OTHER_CLAUSE, Ze(this.clonePosition(), this.clonePosition())) : { val: u, err: null };
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
      var l = Ze(i, this.clonePosition());
      return a ? (o *= r, dv(o) ? { val: o, err: null } : this.error(n, l)) : this.error(e, l);
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
      for (; !this.isEOF() && Vc(this.char()); )
        this.bump();
    }, t.prototype.peek = function() {
      if (this.isEOF())
        return null;
      var e = this.char(), n = this.offset(), r = this.message.charCodeAt(n + (e >= 65536 ? 2 : 1));
      return r ?? null;
    }, t;
  }()
);
function ws(t) {
  return t >= 97 && t <= 122 || t >= 65 && t <= 90;
}
function gv(t) {
  return ws(t) || t === 47;
}
function pv(t) {
  return t === 45 || t === 46 || t >= 48 && t <= 57 || t === 95 || t >= 97 && t <= 122 || t >= 65 && t <= 90 || t == 183 || t >= 192 && t <= 214 || t >= 216 && t <= 246 || t >= 248 && t <= 893 || t >= 895 && t <= 8191 || t >= 8204 && t <= 8205 || t >= 8255 && t <= 8256 || t >= 8304 && t <= 8591 || t >= 11264 && t <= 12271 || t >= 12289 && t <= 55295 || t >= 63744 && t <= 64975 || t >= 65008 && t <= 65533 || t >= 65536 && t <= 983039;
}
function Vc(t) {
  return t >= 9 && t <= 13 || t === 32 || t === 133 || t >= 8206 && t <= 8207 || t === 8232 || t === 8233;
}
function bv(t) {
  return t >= 33 && t <= 35 || t === 36 || t >= 37 && t <= 39 || t === 40 || t === 41 || t === 42 || t === 43 || t === 44 || t === 45 || t >= 46 && t <= 47 || t >= 58 && t <= 59 || t >= 60 && t <= 62 || t >= 63 && t <= 64 || t === 91 || t === 92 || t === 93 || t === 94 || t === 96 || t === 123 || t === 124 || t === 125 || t === 126 || t === 161 || t >= 162 && t <= 165 || t === 166 || t === 167 || t === 169 || t === 171 || t === 172 || t === 174 || t === 176 || t === 177 || t === 182 || t === 187 || t === 191 || t === 215 || t === 247 || t >= 8208 && t <= 8213 || t >= 8214 && t <= 8215 || t === 8216 || t === 8217 || t === 8218 || t >= 8219 && t <= 8220 || t === 8221 || t === 8222 || t === 8223 || t >= 8224 && t <= 8231 || t >= 8240 && t <= 8248 || t === 8249 || t === 8250 || t >= 8251 && t <= 8254 || t >= 8257 && t <= 8259 || t === 8260 || t === 8261 || t === 8262 || t >= 8263 && t <= 8273 || t === 8274 || t === 8275 || t >= 8277 && t <= 8286 || t >= 8592 && t <= 8596 || t >= 8597 && t <= 8601 || t >= 8602 && t <= 8603 || t >= 8604 && t <= 8607 || t === 8608 || t >= 8609 && t <= 8610 || t === 8611 || t >= 8612 && t <= 8613 || t === 8614 || t >= 8615 && t <= 8621 || t === 8622 || t >= 8623 && t <= 8653 || t >= 8654 && t <= 8655 || t >= 8656 && t <= 8657 || t === 8658 || t === 8659 || t === 8660 || t >= 8661 && t <= 8691 || t >= 8692 && t <= 8959 || t >= 8960 && t <= 8967 || t === 8968 || t === 8969 || t === 8970 || t === 8971 || t >= 8972 && t <= 8991 || t >= 8992 && t <= 8993 || t >= 8994 && t <= 9e3 || t === 9001 || t === 9002 || t >= 9003 && t <= 9083 || t === 9084 || t >= 9085 && t <= 9114 || t >= 9115 && t <= 9139 || t >= 9140 && t <= 9179 || t >= 9180 && t <= 9185 || t >= 9186 && t <= 9254 || t >= 9255 && t <= 9279 || t >= 9280 && t <= 9290 || t >= 9291 && t <= 9311 || t >= 9472 && t <= 9654 || t === 9655 || t >= 9656 && t <= 9664 || t === 9665 || t >= 9666 && t <= 9719 || t >= 9720 && t <= 9727 || t >= 9728 && t <= 9838 || t === 9839 || t >= 9840 && t <= 10087 || t === 10088 || t === 10089 || t === 10090 || t === 10091 || t === 10092 || t === 10093 || t === 10094 || t === 10095 || t === 10096 || t === 10097 || t === 10098 || t === 10099 || t === 10100 || t === 10101 || t >= 10132 && t <= 10175 || t >= 10176 && t <= 10180 || t === 10181 || t === 10182 || t >= 10183 && t <= 10213 || t === 10214 || t === 10215 || t === 10216 || t === 10217 || t === 10218 || t === 10219 || t === 10220 || t === 10221 || t === 10222 || t === 10223 || t >= 10224 && t <= 10239 || t >= 10240 && t <= 10495 || t >= 10496 && t <= 10626 || t === 10627 || t === 10628 || t === 10629 || t === 10630 || t === 10631 || t === 10632 || t === 10633 || t === 10634 || t === 10635 || t === 10636 || t === 10637 || t === 10638 || t === 10639 || t === 10640 || t === 10641 || t === 10642 || t === 10643 || t === 10644 || t === 10645 || t === 10646 || t === 10647 || t === 10648 || t >= 10649 && t <= 10711 || t === 10712 || t === 10713 || t === 10714 || t === 10715 || t >= 10716 && t <= 10747 || t === 10748 || t === 10749 || t >= 10750 && t <= 11007 || t >= 11008 && t <= 11055 || t >= 11056 && t <= 11076 || t >= 11077 && t <= 11078 || t >= 11079 && t <= 11084 || t >= 11085 && t <= 11123 || t >= 11124 && t <= 11125 || t >= 11126 && t <= 11157 || t === 11158 || t >= 11159 && t <= 11263 || t >= 11776 && t <= 11777 || t === 11778 || t === 11779 || t === 11780 || t === 11781 || t >= 11782 && t <= 11784 || t === 11785 || t === 11786 || t === 11787 || t === 11788 || t === 11789 || t >= 11790 && t <= 11798 || t === 11799 || t >= 11800 && t <= 11801 || t === 11802 || t === 11803 || t === 11804 || t === 11805 || t >= 11806 && t <= 11807 || t === 11808 || t === 11809 || t === 11810 || t === 11811 || t === 11812 || t === 11813 || t === 11814 || t === 11815 || t === 11816 || t === 11817 || t >= 11818 && t <= 11822 || t === 11823 || t >= 11824 && t <= 11833 || t >= 11834 && t <= 11835 || t >= 11836 && t <= 11839 || t === 11840 || t === 11841 || t === 11842 || t >= 11843 && t <= 11855 || t >= 11856 && t <= 11857 || t === 11858 || t >= 11859 && t <= 11903 || t >= 12289 && t <= 12291 || t === 12296 || t === 12297 || t === 12298 || t === 12299 || t === 12300 || t === 12301 || t === 12302 || t === 12303 || t === 12304 || t === 12305 || t >= 12306 && t <= 12307 || t === 12308 || t === 12309 || t === 12310 || t === 12311 || t === 12312 || t === 12313 || t === 12314 || t === 12315 || t === 12316 || t === 12317 || t >= 12318 && t <= 12319 || t === 12320 || t === 12336 || t === 64830 || t === 64831 || t >= 65093 && t <= 65094;
}
function Ls(t) {
  t.forEach(function(e) {
    if (delete e.location, Rc(e) || Mc(e))
      for (var n in e.options)
        delete e.options[n].location, Ls(e.options[n].value);
    else wc(e) && Pc(e.style) || (Lc(e) || Oc(e)) && As(e.style) ? delete e.style.location : Dc(e) && Ls(e.children);
  });
}
function _v(t, e) {
  e === void 0 && (e = {}), e = ue({ shouldParseSkeletons: !0, requiresOtherClause: !0 }, e);
  var n = new mv(t, e).parse();
  if (n.err) {
    var r = SyntaxError(Ye[n.err.kind]);
    throw r.location = n.err.location, r.originalMessage = n.err.message, r;
  }
  return e != null && e.captureLocation || Ls(n.val), n.val;
}
var Zi;
(function(t) {
  t.MISSING_VALUE = "MISSING_VALUE", t.INVALID_VALUE = "INVALID_VALUE", t.MISSING_INTL_API = "MISSING_INTL_API";
})(Zi || (Zi = {}));
var Bo = (
  /** @class */
  function(t) {
    Ve(e, t);
    function e(n, r, i) {
      var a = t.call(this, n) || this;
      return a.code = r, a.originalMessage = i, a;
    }
    return e.prototype.toString = function() {
      return "[formatjs Error: ".concat(this.code, "] ").concat(this.message);
    }, e;
  }(Error)
), Fl = (
  /** @class */
  function(t) {
    Ve(e, t);
    function e(n, r, i, a) {
      return t.call(this, 'Invalid values for "'.concat(n, '": "').concat(r, '". Options are "').concat(Object.keys(i).join('", "'), '"'), Zi.INVALID_VALUE, a) || this;
    }
    return e;
  }(Bo)
), yv = (
  /** @class */
  function(t) {
    Ve(e, t);
    function e(n, r, i) {
      return t.call(this, 'Value for "'.concat(n, '" must be of type ').concat(r), Zi.INVALID_VALUE, i) || this;
    }
    return e;
  }(Bo)
), Iv = (
  /** @class */
  function(t) {
    Ve(e, t);
    function e(n, r) {
      return t.call(this, 'The intl string context variable "'.concat(n, '" was not provided to the string "').concat(r, '"'), Zi.MISSING_VALUE, r) || this;
    }
    return e;
  }(Bo)
), Zt;
(function(t) {
  t[t.literal = 0] = "literal", t[t.object = 1] = "object";
})(Zt || (Zt = {}));
function Ev(t) {
  return t.length < 2 ? t : t.reduce(function(e, n) {
    var r = e[e.length - 1];
    return !r || r.type !== Zt.literal || n.type !== Zt.literal ? e.push(n) : r.value += n.value, e;
  }, []);
}
function Sv(t) {
  return typeof t == "function";
}
function uo(t, e, n, r, i, a, o) {
  if (t.length === 1 && Dl(t[0]))
    return [
      {
        type: Zt.literal,
        value: t[0].value
      }
    ];
  for (var u = [], l = 0, c = t; l < c.length; l++) {
    var d = c[l];
    if (Dl(d)) {
      u.push({
        type: Zt.literal,
        value: d.value
      });
      continue;
    }
    if (qh(d)) {
      typeof a == "number" && u.push({
        type: Zt.literal,
        value: n.getNumberFormat(e).format(a)
      });
      continue;
    }
    var v = d.value;
    if (!(i && v in i))
      throw new Iv(v, o);
    var f = i[v];
    if (Wh(d)) {
      (!f || typeof f == "string" || typeof f == "number") && (f = typeof f == "string" || typeof f == "number" ? String(f) : ""), u.push({
        type: typeof f == "string" ? Zt.literal : Zt.object,
        value: f
      });
      continue;
    }
    if (Lc(d)) {
      var m = typeof d.style == "string" ? r.date[d.style] : As(d.style) ? d.style.parsedOptions : void 0;
      u.push({
        type: Zt.literal,
        value: n.getDateTimeFormat(e, m).format(f)
      });
      continue;
    }
    if (Oc(d)) {
      var m = typeof d.style == "string" ? r.time[d.style] : As(d.style) ? d.style.parsedOptions : r.time.medium;
      u.push({
        type: Zt.literal,
        value: n.getDateTimeFormat(e, m).format(f)
      });
      continue;
    }
    if (wc(d)) {
      var m = typeof d.style == "string" ? r.number[d.style] : Pc(d.style) ? d.style.parsedOptions : void 0;
      m && m.scale && (f = f * (m.scale || 1)), u.push({
        type: Zt.literal,
        value: n.getNumberFormat(e, m).format(f)
      });
      continue;
    }
    if (Dc(d)) {
      var h = d.children, g = d.value, b = i[g];
      if (!Sv(b))
        throw new yv(g, "function", o);
      var y = uo(h, e, n, r, i, a), S = b(y.map(function(E) {
        return E.value;
      }));
      Array.isArray(S) || (S = [S]), u.push.apply(u, S.map(function(E) {
        return {
          type: typeof E == "string" ? Zt.literal : Zt.object,
          value: E
        };
      }));
    }
    if (Rc(d)) {
      var I = d.options[f] || d.options.other;
      if (!I)
        throw new Fl(d.value, f, Object.keys(d.options), o);
      u.push.apply(u, uo(I.value, e, n, r, i));
      continue;
    }
    if (Mc(d)) {
      var I = d.options["=".concat(f)];
      if (!I) {
        if (!Intl.PluralRules)
          throw new Bo(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`, Zi.MISSING_INTL_API, o);
        var _ = n.getPluralRules(e, { type: d.pluralType }).select(f - (d.offset || 0));
        I = d.options[_] || d.options.other;
      }
      if (!I)
        throw new Fl(d.value, f, Object.keys(d.options), o);
      u.push.apply(u, uo(I.value, e, n, r, i, f - (d.offset || 0)));
      continue;
    }
  }
  return Ev(u);
}
function Av(t, e) {
  return e ? ue(ue(ue({}, t || {}), e || {}), Object.keys(t).reduce(function(n, r) {
    return n[r] = ue(ue({}, t[r]), e[r] || {}), n;
  }, {})) : t;
}
function Cv(t, e) {
  return e ? Object.keys(t).reduce(function(n, r) {
    return n[r] = Av(t[r], e[r]), n;
  }, ue({}, t)) : t;
}
function ts(t) {
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
function xv(t) {
  return t === void 0 && (t = {
    number: {},
    dateTime: {},
    pluralRules: {}
  }), {
    getNumberFormat: Jo(function() {
      for (var e, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((e = Intl.NumberFormat).bind.apply(e, Jn([void 0], n, !1)))();
    }, {
      cache: ts(t.number),
      strategy: $o.variadic
    }),
    getDateTimeFormat: Jo(function() {
      for (var e, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((e = Intl.DateTimeFormat).bind.apply(e, Jn([void 0], n, !1)))();
    }, {
      cache: ts(t.dateTime),
      strategy: $o.variadic
    }),
    getPluralRules: Jo(function() {
      for (var e, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((e = Intl.PluralRules).bind.apply(e, Jn([void 0], n, !1)))();
    }, {
      cache: ts(t.pluralRules),
      strategy: $o.variadic
    })
  };
}
var Gc = (
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
        var d = c.reduce(function(v, f) {
          return !v.length || f.type !== Zt.literal || typeof v[v.length - 1] != "string" ? v.push(f.value) : v[v.length - 1] += f.value, v;
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
        var u = Ph(o, ["formatters"]);
        this.ast = t.__parse(e, ue(ue({}, u), { locale: this.resolvedLocale }));
      } else
        this.ast = e;
      if (!Array.isArray(this.ast))
        throw new TypeError("A message must be provided as a String or AST.");
      this.formats = Cv(t.formats, r), this.formatters = i && i.formatters || xv(this.formatterCache);
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
    }, t.__parse = _v, t.formats = {
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
function Tv(t, e) {
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
const wr = {}, wv = (t, e, n) => n && (e in wr || (wr[e] = {}), t in wr[e] || (wr[e][t] = n), n), jc = (t, e) => {
  if (e == null)
    return;
  if (e in wr && t in wr[e])
    return wr[e][t];
  const n = Va(e);
  for (let r = 0; r < n.length; r++) {
    const i = n[r], a = Ov(i, t);
    if (a)
      return wv(t, e, a);
  }
};
let Qs;
const Fa = tn({});
function Lv(t) {
  return Qs[t] || null;
}
function Wc(t) {
  return t in Qs;
}
function Ov(t, e) {
  if (!Wc(t))
    return null;
  const n = Lv(t);
  return Tv(n, e);
}
function Rv(t) {
  if (t == null)
    return;
  const e = Va(t);
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    if (Wc(r))
      return r;
  }
}
function qc(t, ...e) {
  delete wr[t], Fa.update((n) => (n[t] = Dh.all([n[t] || {}, ...e]), n));
}
na(
  [Fa],
  ([t]) => Object.keys(t)
);
Fa.subscribe((t) => Qs = t);
const co = {};
function Mv(t, e) {
  co[t].delete(e), co[t].size === 0 && delete co[t];
}
function zc(t) {
  return co[t];
}
function Dv(t) {
  return Va(t).map((e) => {
    const n = zc(e);
    return [e, n ? [...n] : []];
  }).filter(([, e]) => e.length > 0);
}
function yo(t) {
  return t == null ? !1 : Va(t).some(
    (e) => {
      var n;
      return (n = zc(e)) == null ? void 0 : n.size;
    }
  );
}
function Pv(t, e) {
  return Promise.all(
    e.map((r) => (Mv(t, r), r().then((i) => i.default || i)))
  ).then((r) => qc(t, ...r));
}
const ha = {};
function Xc(t) {
  if (!yo(t))
    return t in ha ? ha[t] : Promise.resolve();
  const e = Dv(t);
  return ha[t] = Promise.all(
    e.map(
      ([n, r]) => Pv(n, r)
    )
  ).then(() => {
    if (yo(t))
      return Xc(t);
    delete ha[t];
  }), ha[t];
}
var Vl = Object.getOwnPropertySymbols, Nv = Object.prototype.hasOwnProperty, Hv = Object.prototype.propertyIsEnumerable, Uv = (t, e) => {
  var n = {};
  for (var r in t)
    Nv.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && Vl)
    for (var r of Vl(t))
      e.indexOf(r) < 0 && Hv.call(t, r) && (n[r] = t[r]);
  return n;
};
const kv = {
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
function Bv({ locale: t, id: e }) {
  console.warn(
    `[svelte-i18n] The message "${e}" was not found in "${Va(
      t
    ).join('", "')}".${yo(Br()) ? `

Note: there are at least one loader still registered to this locale that wasn't executed.` : ""}`
  );
}
const Fv = {
  fallbackLocale: null,
  loadingDelay: 200,
  formats: kv,
  warnOnMissingMessages: !0,
  handleMissingMessage: void 0,
  ignoreTag: !0
}, Ea = Fv;
function Qi() {
  return Ea;
}
function Vv(t) {
  const e = t, { formats: n } = e, r = Uv(e, ["formats"]);
  let i = t.fallbackLocale;
  if (t.initialLocale)
    try {
      Gc.resolveLocale(t.initialLocale) && (i = t.initialLocale);
    } catch {
      console.warn(
        `[svelte-i18n] The initial locale "${t.initialLocale}" is not a valid locale.`
      );
    }
  return r.warnOnMissingMessages && (delete r.warnOnMissingMessages, r.handleMissingMessage == null ? r.handleMissingMessage = Bv : console.warn(
    '[svelte-i18n] The "warnOnMissingMessages" option is deprecated. Please use the "handleMissingMessage" option instead.'
  )), Object.assign(Ea, r, { initialLocale: i }), n && ("number" in n && Object.assign(Ea.formats.number, n.number), "date" in n && Object.assign(Ea.formats.date, n.date), "time" in n && Object.assign(Ea.formats.time, n.time)), pi.set(i);
}
const ns = tn(!1);
var Gv = Object.defineProperty, jv = Object.defineProperties, Wv = Object.getOwnPropertyDescriptors, Gl = Object.getOwnPropertySymbols, qv = Object.prototype.hasOwnProperty, zv = Object.prototype.propertyIsEnumerable, jl = (t, e, n) => e in t ? Gv(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n, Xv = (t, e) => {
  for (var n in e || (e = {}))
    qv.call(e, n) && jl(t, n, e[n]);
  if (Gl)
    for (var n of Gl(e))
      zv.call(e, n) && jl(t, n, e[n]);
  return t;
}, Kv = (t, e) => jv(t, Wv(e));
let Os;
const Io = tn(null);
function Wl(t) {
  return t.split("-").map((e, n, r) => r.slice(0, n + 1).join("-")).reverse();
}
function Va(t, e = Qi().fallbackLocale) {
  const n = Wl(t);
  return e ? [.../* @__PURE__ */ new Set([...n, ...Wl(e)])] : n;
}
function Br() {
  return Os ?? void 0;
}
Io.subscribe((t) => {
  Os = t ?? void 0, typeof window < "u" && t != null && document.documentElement.setAttribute("lang", t);
});
const Yv = (t) => {
  if (t && Rv(t) && yo(t)) {
    const { loadingDelay: e } = Qi();
    let n;
    return typeof window < "u" && Br() != null && e ? n = window.setTimeout(
      () => ns.set(!0),
      e
    ) : ns.set(!0), Xc(t).then(() => {
      Io.set(t);
    }).finally(() => {
      clearTimeout(n), ns.set(!1);
    });
  }
  return Io.set(t);
}, pi = Kv(Xv({}, Io), {
  set: Yv
}), Zv = () => typeof window > "u" ? null : window.navigator.language || window.navigator.languages[0], Fo = (t) => {
  const e = /* @__PURE__ */ Object.create(null);
  return (r) => {
    const i = JSON.stringify(r);
    return i in e ? e[i] : e[i] = t(r);
  };
};
var Qv = Object.defineProperty, Eo = Object.getOwnPropertySymbols, Kc = Object.prototype.hasOwnProperty, Yc = Object.prototype.propertyIsEnumerable, ql = (t, e, n) => e in t ? Qv(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n, Js = (t, e) => {
  for (var n in e || (e = {}))
    Kc.call(e, n) && ql(t, n, e[n]);
  if (Eo)
    for (var n of Eo(e))
      Yc.call(e, n) && ql(t, n, e[n]);
  return t;
}, ra = (t, e) => {
  var n = {};
  for (var r in t)
    Kc.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && Eo)
    for (var r of Eo(t))
      e.indexOf(r) < 0 && Yc.call(t, r) && (n[r] = t[r]);
  return n;
};
const La = (t, e) => {
  const { formats: n } = Qi();
  if (t in n && e in n[t])
    return n[t][e];
  throw new Error(`[svelte-i18n] Unknown "${e}" ${t} format.`);
}, Jv = Fo(
  (t) => {
    var e = t, { locale: n, format: r } = e, i = ra(e, ["locale", "format"]);
    if (n == null)
      throw new Error('[svelte-i18n] A "locale" must be set to format numbers');
    return r && (i = La("number", r)), new Intl.NumberFormat(n, i);
  }
), $v = Fo(
  (t) => {
    var e = t, { locale: n, format: r } = e, i = ra(e, ["locale", "format"]);
    if (n == null)
      throw new Error('[svelte-i18n] A "locale" must be set to format dates');
    return r ? i = La("date", r) : Object.keys(i).length === 0 && (i = La("date", "short")), new Intl.DateTimeFormat(n, i);
  }
), em = Fo(
  (t) => {
    var e = t, { locale: n, format: r } = e, i = ra(e, ["locale", "format"]);
    if (n == null)
      throw new Error(
        '[svelte-i18n] A "locale" must be set to format time values'
      );
    return r ? i = La("time", r) : Object.keys(i).length === 0 && (i = La("time", "short")), new Intl.DateTimeFormat(n, i);
  }
), tm = (t = {}) => {
  var e = t, {
    locale: n = Br()
  } = e, r = ra(e, [
    "locale"
  ]);
  return Jv(Js({ locale: n }, r));
}, nm = (t = {}) => {
  var e = t, {
    locale: n = Br()
  } = e, r = ra(e, [
    "locale"
  ]);
  return $v(Js({ locale: n }, r));
}, rm = (t = {}) => {
  var e = t, {
    locale: n = Br()
  } = e, r = ra(e, [
    "locale"
  ]);
  return em(Js({ locale: n }, r));
}, im = Fo(
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  (t, e = Br()) => new Gc(t, e, Qi().formats, {
    ignoreTag: Qi().ignoreTag
  })
), am = (t, e = {}) => {
  var n, r, i, a;
  let o = e;
  typeof t == "object" && (o = t, t = o.id);
  const {
    values: u,
    locale: l = Br(),
    default: c
  } = o;
  if (l == null)
    throw new Error(
      "[svelte-i18n] Cannot format a message without first setting the initial locale."
    );
  let d = jc(t, l);
  if (!d)
    d = (a = (i = (r = (n = Qi()).handleMissingMessage) == null ? void 0 : r.call(n, { locale: l, id: t, defaultValue: c })) != null ? i : c) != null ? a : t;
  else if (typeof d != "string")
    return console.warn(
      `[svelte-i18n] Message with id "${t}" must be of type "string", found: "${typeof d}". Gettin its value through the "$format" method is deprecated; use the "json" method instead.`
    ), d;
  if (!u)
    return d;
  let v = d;
  try {
    v = im(d, l).format(u);
  } catch (f) {
    f instanceof Error && console.warn(
      `[svelte-i18n] Message "${t}" has syntax error:`,
      f.message
    );
  }
  return v;
}, om = (t, e) => rm(e).format(t), sm = (t, e) => nm(e).format(t), lm = (t, e) => tm(e).format(t), um = (t, e = Br()) => jc(t, e), cm = na([pi, Fa], () => am);
na([pi], () => om);
na([pi], () => sm);
na([pi], () => lm);
na([pi, Fa], () => um);
function dm(t, e) {
  Object.entries(t).forEach(([a, o]) => {
    qc(a, o);
  });
  const n = localStorage.getItem("language"), r = "en", i = n ?? Zv();
  console.log("Initial: Setting the language to", i), Vv({
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
const fm = "Suche", hm = "Filtertypen", vm = "Filter hinzufügen", mm = "Keine Ressourcen gefunden.", gm = "Loading...", pm = {
  search: fm,
  filter_types: hm,
  add_filter: vm,
  no_resources_found: mm,
  loading: gm
}, bm = "Search", _m = "Filter Types", ym = "Add Filter", Im = "No resources found.", Em = "Loading...", Sm = {
  search: bm,
  filter_types: _m,
  add_filter: ym,
  no_resources_found: Im,
  loading: Em
};
function De(t) {
  return Object.entries(t).filter(([e, n]) => e !== "" && n).map(([e]) => e).join(" ");
}
function Je(t, e, n, r = { bubbles: !0 }) {
  if (typeof Event > "u")
    throw new Error("Event not defined.");
  if (!t)
    throw new Error("Tried to dispatch event without element.");
  const i = new CustomEvent(e, Object.assign(Object.assign({}, r), { detail: n }));
  return t == null || t.dispatchEvent(i), i;
}
function er(t, e) {
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
class ia {
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
    n in a || (a[n] = /* @__PURE__ */ new Map()), a[n].set(r, Uf(e, n, r, i));
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
function W(t, e) {
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
function Am(t, e) {
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
function Cm(t, e, n) {
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
var Tt = (
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
function xm(t) {
  return t === void 0 && (t = window), Tm(t) ? { passive: !0 } : !1;
}
function Tm(t) {
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
const Zc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  applyPassive: xm
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
function wm(t, e) {
  if (t.closest)
    return t.closest(e);
  for (var n = t; n; ) {
    if (Qc(n, e))
      return n;
    n = n.parentElement;
  }
  return null;
}
function Qc(t, e) {
  var n = t.matches || t.webkitMatchesSelector || t.msMatchesSelector;
  return n.call(t, e);
}
function Lm(t) {
  var e = t;
  if (e.offsetParent !== null)
    return e.scrollWidth;
  var n = e.cloneNode(!0);
  n.style.setProperty("position", "absolute"), n.style.setProperty("transform", "translate(-9999px, -9999px)"), document.documentElement.appendChild(n);
  var r = n.scrollWidth;
  return document.documentElement.removeChild(n), r;
}
const Ga = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  closest: wm,
  estimateScrollWidth: Lm,
  matches: Qc
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
var Om = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  BG_FOCUSED: "mdc-ripple-upgraded--background-focused",
  FG_ACTIVATION: "mdc-ripple-upgraded--foreground-activation",
  FG_DEACTIVATION: "mdc-ripple-upgraded--foreground-deactivation",
  ROOT: "mdc-ripple-upgraded",
  UNBOUNDED: "mdc-ripple-upgraded--unbounded"
}, Rm = {
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
], Kl = [
  "touchend",
  "pointerup",
  "mouseup",
  "contextmenu"
], Ja = [], Mm = (
  /** @class */
  function(t) {
    Ve(e, t);
    function e(n) {
      var r = t.call(this, ue(ue({}, e.defaultAdapter), n)) || this;
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
        return Om;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Rm;
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
          for (var a = Ht(Xl), o = a.next(); !o.done; o = a.next()) {
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
          for (var a = Ht(Kl), o = a.next(); !o.done; o = a.next()) {
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
        for (var i = Ht(Xl), a = i.next(); !a.done; a = i.next()) {
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
        for (var i = Ht(Kl), a = i.next(); !a.done; a = i.next()) {
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
      var d = "", v = "";
      if (!this.adapter.isUnbounded()) {
        var f = this.getFgTranslationCoordinates(), m = f.startPoint, h = f.endPoint;
        d = m.x + "px, " + m.y + "px", v = h.x + "px, " + h.y + "px";
      }
      this.adapter.updateCssVariable(i, d), this.adapter.updateCssVariable(a, v), clearTimeout(this.activationTimer), clearTimeout(this.fgDeactivationRemovalTimer), this.rmBoundedActivationClasses(), this.adapter.removeClass(u), this.adapter.computeBoundingRect(), this.adapter.addClass(l), this.activationTimer = setTimeout(function() {
        n.activationTimerCallback();
      }, c);
    }, e.prototype.getFgTranslationCoordinates = function() {
      var n = this.activationState, r = n.activationEvent, i = n.wasActivatedByPointer, a;
      i ? a = Cm(r, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect()) : a = {
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
        var i = ue({}, r);
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
  }(Tt)
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
var Be = {
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
sn.add(Be.BACKSPACE);
sn.add(Be.ENTER);
sn.add(Be.SPACEBAR);
sn.add(Be.PAGE_UP);
sn.add(Be.PAGE_DOWN);
sn.add(Be.END);
sn.add(Be.HOME);
sn.add(Be.ARROW_LEFT);
sn.add(Be.ARROW_UP);
sn.add(Be.ARROW_RIGHT);
sn.add(Be.ARROW_DOWN);
sn.add(Be.DELETE);
sn.add(Be.ESCAPE);
sn.add(Be.TAB);
var mn = {
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
ln.set(mn.BACKSPACE, Be.BACKSPACE);
ln.set(mn.ENTER, Be.ENTER);
ln.set(mn.SPACEBAR, Be.SPACEBAR);
ln.set(mn.PAGE_UP, Be.PAGE_UP);
ln.set(mn.PAGE_DOWN, Be.PAGE_DOWN);
ln.set(mn.END, Be.END);
ln.set(mn.HOME, Be.HOME);
ln.set(mn.ARROW_LEFT, Be.ARROW_LEFT);
ln.set(mn.ARROW_UP, Be.ARROW_UP);
ln.set(mn.ARROW_RIGHT, Be.ARROW_RIGHT);
ln.set(mn.ARROW_DOWN, Be.ARROW_DOWN);
ln.set(mn.DELETE, Be.DELETE);
ln.set(mn.ESCAPE, Be.ESCAPE);
ln.set(mn.TAB, Be.TAB);
var Fr = /* @__PURE__ */ new Set();
Fr.add(Be.PAGE_UP);
Fr.add(Be.PAGE_DOWN);
Fr.add(Be.END);
Fr.add(Be.HOME);
Fr.add(Be.ARROW_LEFT);
Fr.add(Be.ARROW_UP);
Fr.add(Be.ARROW_RIGHT);
Fr.add(Be.ARROW_DOWN);
function Ct(t) {
  var e = t.key;
  if (sn.has(e))
    return e;
  var n = ln.get(t.keyCode);
  return n || Be.UNKNOWN;
}
const { applyPassive: Yl } = Zc, { matches: Dm } = Ga;
function Xt(t, { ripple: e = !0, surface: n = !1, unbounded: r = !1, disabled: i = !1, color: a, active: o, rippleElement: u, eventTarget: l, activeTarget: c, addClass: d = (h) => t.classList.add(h), removeClass: v = (h) => t.classList.remove(h), addStyle: f = (h, g) => t.style.setProperty(h, g), initPromise: m = Promise.resolve() } = {}) {
  let h, g = new ia(), b = me("SMUI:addLayoutListener"), y, S = o, I = l, _ = c;
  function E() {
    n ? (d("mdc-ripple-surface"), a === "primary" ? (d("smui-ripple-surface--primary"), v("smui-ripple-surface--secondary")) : a === "secondary" ? (v("smui-ripple-surface--primary"), d("smui-ripple-surface--secondary")) : (v("smui-ripple-surface--primary"), v("smui-ripple-surface--secondary"))) : (v("mdc-ripple-surface"), v("smui-ripple-surface--primary"), v("smui-ripple-surface--secondary")), h && S !== o && (S = o, o ? h.activate() : o === !1 && h.deactivate()), e && !h ? (h = new Mm({
      addClass: d,
      browserSupportsCssVars: () => Am(window),
      computeBoundingRect: () => (u || t).getBoundingClientRect(),
      containsEventTarget: (w) => t.contains(w),
      deregisterDocumentInteractionHandler: (w, x) => g.off(document.documentElement, w, x),
      deregisterInteractionHandler: (w, x) => g.off(l || t, w, x),
      deregisterResizeHandler: (w) => window.removeEventListener("resize", w),
      getWindowPageOffset: () => {
        var w, x;
        return {
          x: (w = window.pageXOffset) !== null && w !== void 0 ? w : window.scrollX,
          y: (x = window.pageYOffset) !== null && x !== void 0 ? x : window.scrollY
        };
      },
      isSurfaceActive: () => o ?? Dm(c || t, ":active"),
      isSurfaceDisabled: () => !!i,
      isUnbounded: () => !!r,
      registerDocumentInteractionHandler: (w, x) => {
        const T = Yl();
        g.on(document.documentElement, w, x, typeof T == "boolean" ? { capture: T } : T);
      },
      registerInteractionHandler: (w, x) => {
        const T = Yl();
        g.on(l || t, w, x, typeof T == "boolean" ? { capture: T } : T);
      },
      registerResizeHandler: (w) => g.on(window, "resize", w),
      removeClass: v,
      updateCssVariable: f
    }), m.then(() => {
      h && (h.init(), h.setUnbounded(r));
    })) : h && !e && m.then(() => {
      h && (h.destroy(), h = void 0, g.clear());
    }), h && (I !== l || _ !== c) && (I = l, _ = c, h.destroy(), requestAnimationFrame(() => {
      h && (h.init(), h.setUnbounded(r));
    })), !e && r && d("mdc-ripple-upgraded--unbounded");
  }
  E(), b && (y = b(C));
  function C() {
    h && h.layout();
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
        rippleElement: u,
        eventTarget: l,
        activeTarget: c,
        addClass: d,
        removeClass: v,
        addStyle: f,
        initPromise: m
      } = Object.assign({ ripple: !0, surface: !1, unbounded: !1, disabled: !1, color: void 0, active: void 0, rippleElement: void 0, eventTarget: void 0, activeTarget: void 0, addClass: (x) => t.classList.add(x), removeClass: (x) => t.classList.remove(x), addStyle: (x, T) => t.style.setProperty(x, T), initPromise: Promise.resolve() }, w)), E();
    },
    destroy() {
      h && (h.destroy(), h = void 0, g.clear(), v("mdc-ripple-surface"), v("smui-ripple-surface--primary"), v("smui-ripple-surface--secondary")), y && y();
    }
  };
}
function Pm(t, e) {
  Ce(e, !0);
  let n = p(e, "use", 19, () => []), r = p(e, "class", 3, ""), i = p(e, "component", 3, Vr), a = p(e, "tag", 3, "span"), o = /* @__PURE__ */ qe(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "component",
    "tag",
    "children"
  ]), u;
  const l = me("SMUI:label:context"), c = me("SMUI:label:tabindex");
  function d() {
    return u.getElement();
  }
  var v = { getElement: d }, f = ne(), m = Z(f);
  {
    let h = /* @__PURE__ */ ge(() => De({
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
    pr(m, i, (g, b) => {
      Ee(
        b(g, nt(
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
              var I = ne(), _ = Z(I);
              Se(_, () => e.children ?? pe), L(y, I);
            },
            $$slots: { default: !0 }
          }
        )),
        (y) => u = y,
        () => u
      );
    });
  }
  return L(t, f), xe(v);
}
function Rs(t, e) {
  Ce(e, !0);
  let n = p(e, "use", 19, () => []), r = p(e, "class", 3, ""), i = p(e, "on", 3, !1), a = p(e, "component", 3, Vr), o = p(e, "tag", 3, "i"), u = /* @__PURE__ */ qe(e, [
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
  const c = /* @__PURE__ */ ge(() => o() === "svg" || a() === Um), d = me("SMUI:icon:context");
  function v() {
    return l.getElement();
  }
  var f = { getElement: v }, m = ne(), h = Z(m);
  {
    let g = /* @__PURE__ */ ge(() => De({
      "mdc-button__icon": d === "button",
      "mdc-fab__icon": d === "fab",
      "mdc-icon-button__icon": d === "icon-button",
      "mdc-icon-button__icon--on": d === "icon-button" && i(),
      "mdc-tab__icon": d === "tab",
      "mdc-banner__icon": d === "banner",
      "mdc-segmented-button__icon": d === "segmented-button",
      [r()]: !0
    }));
    pr(h, a, (b, y) => {
      Ee(
        y(b, nt(
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
            children: (S, I) => {
              var _ = ne(), E = Z(_);
              Se(E, () => e.children ?? pe), L(S, _);
            },
            $$slots: { default: !0 }
          }
        )),
        (S) => l = S,
        () => l
      );
    });
  }
  return L(t, m), xe(f);
}
var Nm = /* @__PURE__ */ on("<svg><!></svg>");
function Vr(t, e) {
  Ce(e, !0);
  let n = p(e, "use", 19, () => []), r = p(e, "tag", 3, "div"), i = /* @__PURE__ */ qe(e, ["$$slots", "$$events", "$$legacy", "use", "tag", "children"]);
  const a = /* @__PURE__ */ ge(() => [
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
  var l = { getElement: u }, c = ne(), d = Z(c);
  {
    var v = (m) => {
      var h = Nm();
      Ue(h, () => ({ ...i }));
      var g = se(h);
      Se(g, () => e.children ?? pe), Ee(h, (b) => o = b, () => o), Me(h, (b, y) => W == null ? void 0 : W(b, y), n), L(m, h);
    }, f = (m) => {
      var h = ne(), g = Z(h);
      {
        var b = (S) => {
          var I = ne(), _ = Z(I);
          Sl(_, r, !1, (E, C) => {
            Ee(E, (w) => o = w, () => o), Me(E, (w, x) => W == null ? void 0 : W(w, x), n), Ue(E, () => ({ ...i }));
          }), L(S, I);
        }, y = (S) => {
          var I = ne(), _ = Z(I);
          Sl(_, r, !1, (E, C) => {
            Ee(E, (T) => o = T, () => o), Me(E, (T, B) => W == null ? void 0 : W(T, B), n), Ue(E, () => ({ ...i }));
            var w = ne(), x = Z(w);
            Se(x, () => e.children ?? pe), L(C, w);
          }), L(S, I);
        };
        ae(
          g,
          (S) => {
            s(a) ? S(b) : S(y, !1);
          },
          !0
        );
      }
      L(m, h);
    };
    ae(d, (m) => {
      r() === "svg" ? m(v) : m(f, !1);
    });
  }
  return L(t, c), xe(l);
}
var Hm = /* @__PURE__ */ on("<svg><!></svg>");
function Um(t, e) {
  Ce(e, !0), console && console.warn && console.warn('The @smui/common Svg component is deprecated. You can use `tag="svg"` now.');
  let n = p(e, "use", 19, () => []), r = /* @__PURE__ */ qe(e, ["$$slots", "$$events", "$$legacy", "use", "children"]), i;
  function a() {
    return i;
  }
  var o = { getElement: a }, u = Hm();
  Ue(u, () => ({ ...r }));
  var l = se(u);
  return Se(l, () => e.children ?? pe), Ee(u, (c) => i = c, () => i), Me(u, (c, d) => W == null ? void 0 : W(c, d), n), L(t, u), xe(o);
}
function $a(t, e) {
  Ce(e, !0);
  const [n, r] = br(), i = tn(e.value);
  oe(e.key, i), Te(() => {
    ci(i, e.value);
  }), Mn(() => {
    i.set(void 0);
  });
  var a = ne(), o = Z(a);
  Se(o, () => e.children ?? pe), L(t, a), xe(), r();
}
var km = /* @__PURE__ */ de('<div class="mdc-button__touch"></div>'), Bm = /* @__PURE__ */ de('<div class="mdc-button__ripple"></div> <!><!>', 1);
function Jc(t, e) {
  Ce(e, !0);
  let n = p(e, "use", 19, () => []), r = p(e, "class", 3, ""), i = p(e, "style", 3, ""), a = p(e, "ripple", 3, !0), o = p(e, "color", 3, "primary"), u = p(e, "variant", 3, "text"), l = p(e, "touch", 3, !1), c = p(e, "action", 3, "close"), d = p(e, "defaultAction", 3, !1), v = p(e, "secondary", 3, !1), f = p(e, "component", 3, Vr), m = p(e, "tag", 19, () => e.href == null ? "button" : "a"), h = /* @__PURE__ */ qe(e, [
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
  ]), g, b = ce({}), y = ce({}), S = me("SMUI:button:context");
  const I = /* @__PURE__ */ ge(() => S === "dialog:action" && c() != null ? { "data-mdc-dialog-action": c() } : { action: c() }), _ = /* @__PURE__ */ ge(() => S === "dialog:action" && d() ? { "data-mdc-dialog-button-default": "" } : {}), E = /* @__PURE__ */ ge(() => S === "banner" ? {} : { secondary: v() });
  let C = e.disabled;
  Te(() => {
    if (C !== e.disabled) {
      if (g) {
        const A = K();
        "blur" in A && A.blur();
      }
      C = h.disabled;
    }
  }), oe("SMUI:label:context", "button"), oe("SMUI:icon:context", "button");
  function w(A) {
    b[A] || (b[A] = !0);
  }
  function x(A) {
    (!(A in b) || b[A]) && (b[A] = !1);
  }
  function T(A, N) {
    y[A] != N && (N === "" || N == null ? delete y[A] : y[A] = N);
  }
  function B() {
    S === "banner" && Je(K(), v() ? "SMUIBannerButtonSecondaryActionClick" : "SMUIBannerButtonPrimaryActionClick");
  }
  function K() {
    return g.getElement();
  }
  var M = { getElement: K }, P = ne(), O = Z(P);
  {
    let A = /* @__PURE__ */ ge(() => [
      [
        Xt,
        {
          ripple: a(),
          unbounded: !1,
          color: o(),
          disabled: !!e.disabled,
          addClass: w,
          removeClass: x,
          addStyle: T
        }
      ],
      ...n()
    ]), N = /* @__PURE__ */ ge(() => De({
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
      "mdc-banner__secondary-action": S === "banner" && v(),
      "mdc-banner__primary-action": S === "banner" && !v(),
      "mdc-tooltip__action": S === "tooltip:rich-actions",
      ...b,
      [r()]: !0
    })), U = /* @__PURE__ */ ge(() => Object.entries(y).map(([q, J]) => `${q}: ${J};`).concat([i()]).join(" "));
    pr(O, f, (q, J) => {
      Ee(
        J(q, nt(
          {
            get tag() {
              return m();
            },
            get use() {
              return s(A);
            },
            get class() {
              return s(N);
            },
            get style() {
              return s(U);
            }
          },
          () => s(I),
          () => s(_),
          () => s(E),
          {
            get href() {
              return e.href;
            }
          },
          () => h,
          {
            onclick: (H) => {
              var R;
              B(), (R = e.onclick) == null || R.call(e, H);
            },
            children: (H, R) => {
              var j = Bm(), Ae = Ie(Z(j), 2);
              Se(Ae, () => e.children ?? pe);
              var be = Ie(Ae);
              {
                var V = (G) => {
                  var F = km();
                  L(G, F);
                };
                ae(be, (G) => {
                  l() && G(V);
                });
              }
              L(H, j);
            },
            $$slots: { default: !0 }
          }
        )),
        (H) => g = H,
        () => g
      );
    });
  }
  return L(t, P), xe(M);
}
function Fm(t, e) {
  Ce(e, !0);
  let n = p(e, "callback", 3, () => {
  }), r = p(e, "disabled", 3, !1), i = p(e, "variant", 3, "default"), a = p(e, "isAbortAction", 3, !1), o = p(e, "backgroundColor", 3, void 0);
  {
    let u = /* @__PURE__ */ ge(() => a() ? "background-color: #ff3e00;" : "background-color: " + o());
    Jc(t, {
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
        var d = ne(), v = Z(d);
        Se(v, () => e.children ?? pe), L(l, d);
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
var eo = {
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
var Vm = (
  /** @class */
  function(t) {
    Ve(e, t);
    function e(n) {
      var r = t.call(this, ue(ue({}, e.defaultAdapter), n)) || this;
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
      return this.adapter.hasClass(eo.ICON_BUTTON_ON);
    }, e.prototype.toggle = function(n) {
      if (n === void 0 && (n = !this.isOn()), n ? this.adapter.addClass(eo.ICON_BUTTON_ON) : this.adapter.removeClass(eo.ICON_BUTTON_ON), this.hasToggledAriaLabel) {
        var r = n ? this.adapter.getAttr(or.DATA_ARIA_LABEL_ON) : this.adapter.getAttr(or.DATA_ARIA_LABEL_OFF);
        this.adapter.setAttr(or.ARIA_LABEL, r || "");
      } else
        this.adapter.setAttr(or.ARIA_PRESSED, "" + n);
    }, e;
  }(Tt)
), Gm = /* @__PURE__ */ de('<div class="mdc-icon-button__touch"></div>'), jm = /* @__PURE__ */ de('<div class="mdc-icon-button__ripple"></div> <!><!>', 1);
function Wm(t, e) {
  Ce(e, !0);
  let n = () => {
  };
  function r(R) {
    return R === n;
  }
  let i = p(e, "use", 19, () => []), a = p(e, "class", 3, ""), o = p(e, "style", 3, ""), u = p(e, "ripple", 3, !0), l = p(e, "toggle", 3, !1), c = p(e, "pressed", 15, n), d = p(e, "touch", 3, !1), v = p(e, "displayFlex", 3, !0), f = p(e, "size", 3, "normal"), m = p(e, "component", 3, Vr), h = p(e, "tag", 19, () => e.href == null ? "button" : "a"), g = /* @__PURE__ */ qe(e, [
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
  ]), b, y, S = /* @__PURE__ */ ve(ce({})), I = ce({}), _ = /* @__PURE__ */ ve(ce({})), E = me("SMUI:icon-button:context"), C = me("SMUI:icon-button:aria-describedby");
  const w = /* @__PURE__ */ ge(() => {
    if (E === "data-table:pagination")
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
    else return E === "dialog:header" || E === "dialog:sheet" ? { "data-mdc-dialog-action": e.action } : { action: e.action };
  });
  let x = !!e.disabled;
  Te(() => {
    if (x != !!e.disabled) {
      if (b) {
        const R = U();
        "blur" in R && R.blur();
      }
      x = !!e.disabled;
    }
  }), oe("SMUI:icon:context", "icon-button");
  let T = null;
  Te(() => {
    b && U() && l() !== T && (l() && !y ? (y = new Vm({
      addClass: K,
      hasClass: B,
      notifyChange: (R) => {
        N(R), Je(U(), "SMUIIconButtonToggleChange", R);
      },
      removeClass: M,
      getAttr: O,
      setAttr: A
    }), y.init()) : !l() && y && (y.destroy(), y = void 0, X(S, {}, !0), X(_, {}, !0)), T = l());
  }), Te(() => {
    y && !r(c()) && y.isOn() !== c() && y.toggle(c());
  }), Mn(() => {
    y && y.destroy();
  });
  function B(R) {
    return R in s(S) ? s(S)[R] : U().classList.contains(R);
  }
  function K(R) {
    s(S)[R] || (s(S)[R] = !0);
  }
  function M(R) {
    (!(R in s(S)) || s(S)[R]) && (s(S)[R] = !1);
  }
  function P(R, j) {
    I[R] != j && (j === "" || j == null ? delete I[R] : I[R] = j);
  }
  function O(R) {
    return R in s(_) ? s(_)[R] ?? null : U().getAttribute(R);
  }
  function A(R, j) {
    s(_)[R] !== j && (s(_)[R] = j);
  }
  function N(R) {
    c(R.isOn);
  }
  function U() {
    return b.getElement();
  }
  var q = { getElement: U }, J = ne(), H = Z(J);
  {
    let R = /* @__PURE__ */ ge(() => [
      [
        Xt,
        {
          ripple: u(),
          unbounded: !0,
          color: e.color,
          disabled: !!e.disabled,
          addClass: K,
          removeClass: M,
          addStyle: P
        }
      ],
      ...i()
    ]), j = /* @__PURE__ */ ge(() => De({
      "mdc-icon-button": !0,
      "mdc-icon-button--on": !r(c()) && c(),
      "mdc-icon-button--touch": d(),
      "mdc-icon-button--display-flex": v(),
      "smui-icon-button--size-button": f() === "button",
      "smui-icon-button--size-mini": f() === "mini",
      "mdc-icon-button--reduced-size": f() === "mini" || f() === "button",
      "mdc-card__action": E === "card:action",
      "mdc-card__action--icon": E === "card:action",
      "mdc-top-app-bar__navigation-icon": E === "top-app-bar:navigation",
      "mdc-top-app-bar__action-item": E === "top-app-bar:action",
      "mdc-snackbar__dismiss": E === "snackbar:actions",
      "mdc-data-table__pagination-button": E === "data-table:pagination",
      "mdc-data-table__sort-icon-button": E === "data-table:sortable-header-cell",
      "mdc-dialog__close": (E === "dialog:header" || E === "dialog:sheet") && e.action === "close",
      ...s(S),
      [a()]: !0
    })), Ae = /* @__PURE__ */ ge(() => Object.entries(I).map(([G, F]) => `${G}: ${F};`).concat([o()]).join(" ")), be = /* @__PURE__ */ ge(() => r(c()) ? null : c() ? "true" : "false"), V = /* @__PURE__ */ ge(() => c() ? e.ariaLabelOn : e.ariaLabelOff);
    pr(H, m, (G, F) => {
      Ee(
        F(G, nt(
          {
            get tag() {
              return h();
            },
            get use() {
              return s(R);
            },
            get class() {
              return s(j);
            },
            get style() {
              return s(Ae);
            },
            get "aria-pressed"() {
              return s(be);
            },
            get "aria-label"() {
              return s(V);
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
          () => s(w),
          () => s(_),
          () => g,
          {
            onclick: (ee) => {
              var Q;
              y && y.handleClick(), E === "top-app-bar:navigation" && Je(U(), "SMUITopAppBarIconButtonNav"), (Q = e.onclick) == null || Q.call(e, ee);
            },
            children: (ee, Q) => {
              var fe = jm(), we = Ie(Z(fe), 2);
              Se(we, () => e.children ?? pe);
              var $ = Ie(we);
              {
                var ie = (Pe) => {
                  var Le = Gm();
                  L(Pe, Le);
                };
                ae($, (Pe) => {
                  d() && Pe(ie);
                });
              }
              L(ee, fe);
            },
            $$slots: { default: !0 }
          }
        )),
        (ee) => b = ee,
        () => b
      );
    });
  }
  return L(t, J), xe(q);
}
function qm(t, e) {
  let n = p(e, "callback", 3, () => {
  }), r = p(e, "icon", 3, ""), i = p(e, "disabled", 3, !1);
  Wm(t, {
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
      Rs(a, {
        class: "material-icons",
        children: (u, l) => {
          var c = Rt();
          Oe(() => at(c, r())), L(u, c);
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
var zm = {
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
var Xm = (
  /** @class */
  function(t) {
    Ve(e, t);
    function e(n) {
      var r = t.call(this, ue(ue({}, e.defaultAdapter), n)) || this;
      return r.shakeAnimationEndHandler = function() {
        r.handleShakeAnimationEnd();
      }, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return zm;
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
  }(Tt)
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
var Km = (
  /** @class */
  function(t) {
    Ve(e, t);
    function e(n) {
      var r = t.call(this, ue(ue({}, e.defaultAdapter), n)) || this;
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
  }(Tt)
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
var Ym = {
  NOTCH_ELEMENT_SELECTOR: ".mdc-notched-outline__notch"
}, Zl = {
  // This should stay in sync with $mdc-notched-outline-padding * 2.
  NOTCH_ELEMENT_PADDING: 8
}, Zm = {
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
var Qm = (
  /** @class */
  function(t) {
    Ve(e, t);
    function e(n) {
      return t.call(this, ue(ue({}, e.defaultAdapter), n)) || this;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return Ym;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Zm;
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
  }(Tt)
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
var rs = {
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
}, Jm = {
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
}, $m = [
  "pattern",
  "min",
  "max",
  "required",
  "step",
  "minlength",
  "maxlength"
], eg = [
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
var Jl = ["mousedown", "touchstart"], $l = ["click", "keydown"], tg = (
  /** @class */
  function(t) {
    Ve(e, t);
    function e(n, r) {
      r === void 0 && (r = {});
      var i = t.call(this, ue(ue({}, e.defaultAdapter), n)) || this;
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
        return Jm;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return rs;
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
        return eg.indexOf(n) >= 0;
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
        for (var o = Ht(Jl), u = o.next(); !u.done; u = o.next()) {
          var l = u.value;
          this.adapter.registerInputInteractionHandler(l, this.setPointerXOffset);
        }
      } catch (v) {
        n = { error: v };
      } finally {
        try {
          u && !u.done && (r = o.return) && r.call(o);
        } finally {
          if (n) throw n.error;
        }
      }
      try {
        for (var c = Ht($l), d = c.next(); !d.done; d = c.next()) {
          var l = d.value;
          this.adapter.registerTextFieldInteractionHandler(l, this.textFieldInteractionHandler);
        }
      } catch (v) {
        i = { error: v };
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
        for (var o = Ht(Jl), u = o.next(); !u.done; u = o.next()) {
          var l = u.value;
          this.adapter.deregisterInputInteractionHandler(l, this.setPointerXOffset);
        }
      } catch (v) {
        n = { error: v };
      } finally {
        try {
          u && !u.done && (r = o.return) && r.call(o);
        } finally {
          if (n) throw n.error;
        }
      }
      try {
        for (var c = Ht($l), d = c.next(); !d.done; d = c.next()) {
          var l = d.value;
          this.adapter.deregisterTextFieldInteractionHandler(l, this.textFieldInteractionHandler);
        }
      } catch (v) {
        i = { error: v };
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
        return $m.indexOf(i) > -1 ? (r.styleValidity(!0), r.adapter.setLabelRequired(r.getNativeInput().required), !0) : !1;
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
        a && o ? this.adapter.setInputAttr(rs.ARIA_DESCRIBEDBY, o) : this.adapter.removeInputAttr(rs.ARIA_DESCRIBEDBY);
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
  }(Tt)
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
}, ng = {
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
var tu = ["click", "keydown"], rg = (
  /** @class */
  function(t) {
    Ve(e, t);
    function e(n) {
      var r = t.call(this, ue(ue({}, e.defaultAdapter), n)) || this;
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
        return ng;
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
        for (var i = Ht(tu), a = i.next(); !a.done; a = i.next()) {
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
        for (var i = Ht(tu), a = i.next(); !a.done; a = i.next()) {
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
  }(Tt)
), ig = /* @__PURE__ */ de("<span><!></span>"), ag = /* @__PURE__ */ de("<label><!></label>");
function So(t, e) {
  Ce(e, !0);
  let n = p(e, "use", 19, () => []), r = p(e, "class", 3, ""), i = p(e, "style", 3, ""), a = p(e, "floatAbove", 15, !1), o = p(e, "required", 15, !1), u = p(e, "wrapped", 3, !1), l = /* @__PURE__ */ qe(e, [
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
  ]), c, d = /* @__PURE__ */ ve(void 0), v = new ia(), f = ce({}), m = ce({}), h = me("SMUI:generic:input:props") ?? {}, g = a();
  Te(() => {
    s(d) && g !== a() && (g = a(), s(d).float(a()));
  });
  let b = o();
  Te(() => {
    s(d) && b !== o() && (b = o(), s(d).setRequired(o()));
  });
  const y = me("SMUI:floating-label:mount"), S = me("SMUI:floating-label:unmount");
  rt(() => {
    X(
      d,
      new Xm({
        addClass: I,
        removeClass: _,
        getWidth: () => {
          var R, j;
          const q = K(), J = q.cloneNode(!0);
          (R = q.parentNode) == null || R.appendChild(J), J.classList.add("smui-floating-label--remove-transition"), J.classList.add("smui-floating-label--force-size"), J.classList.remove("mdc-floating-label--float-above");
          const H = J.scrollWidth;
          return (j = q.parentNode) == null || j.removeChild(J), H;
        },
        registerInteractionHandler: (q, J) => v.on(K(), q, J),
        deregisterInteractionHandler: (q, J) => v.off(K(), q, J)
      }),
      !0
    );
    const U = {
      get element() {
        return K();
      },
      addStyle: E,
      removeStyle: C
    };
    return y && y(U), s(d).init(), () => {
      var q;
      S && S(U), (q = s(d)) == null || q.destroy(), v.clear();
    };
  });
  function I(U) {
    f[U] || (f[U] = !0);
  }
  function _(U) {
    (!(U in f) || f[U]) && (f[U] = !1);
  }
  function E(U, q) {
    m[U] != q && (q === "" || q == null ? delete m[U] : m[U] = q);
  }
  function C(U) {
    U in m && delete m[U];
  }
  function w(U) {
    var q;
    (q = s(d)) == null || q.shake(U);
  }
  function x(U) {
    a(U);
  }
  function T(U) {
    o(U);
  }
  function B() {
    if (s(d) == null)
      throw new Error("Instance is undefined.");
    return s(d).getWidth();
  }
  function K() {
    return c;
  }
  var M = { shake: w, float: x, setRequired: T, getWidth: B, getElement: K }, P = ne(), O = Z(P);
  {
    var A = (U) => {
      var q = ig();
      Ue(q, (H, R) => ({ class: H, style: R, ...l }), [
        () => De({
          "mdc-floating-label": !0,
          "mdc-floating-label--float-above": a(),
          "mdc-floating-label--required": o(),
          ...f,
          [r()]: !0
        }),
        () => Object.entries(m).map(([H, R]) => `${H}: ${R};`).concat([i()]).join(" ")
      ]);
      var J = se(q);
      Se(J, () => e.children ?? pe), Ee(q, (H) => c = H, () => c), Me(q, (H, R) => W == null ? void 0 : W(H, R), n), L(U, q);
    }, N = (U) => {
      var q = ag();
      Ue(
        q,
        (H, R) => ({
          class: H,
          style: R,
          for: e.for || (h ? h.id : void 0),
          ...l
        }),
        [
          () => De({
            "mdc-floating-label": !0,
            "mdc-floating-label--float-above": a(),
            "mdc-floating-label--required": o(),
            ...f,
            [r()]: !0
          }),
          () => Object.entries(m).map(([H, R]) => `${H}: ${R};`).concat([i()]).join(" ")
        ]
      );
      var J = se(q);
      Se(J, () => e.children ?? pe), Ee(q, (H) => c = H, () => c), Me(q, (H, R) => W == null ? void 0 : W(H, R), n), L(U, q);
    };
    ae(O, (U) => {
      u() ? U(A) : U(N, !1);
    });
  }
  return L(t, P), xe(M);
}
var og = /* @__PURE__ */ de("<div></div>");
function $c(t, e) {
  Ce(e, !0);
  let n = p(e, "use", 19, () => []), r = p(e, "class", 3, ""), i = p(e, "style", 3, ""), a = p(e, "active", 3, !1), o = /* @__PURE__ */ qe(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "style",
    "active"
  ]), u, l = /* @__PURE__ */ ve(void 0), c = new ia(), d = ce({}), v = ce({});
  rt(() => (X(
    l,
    new Km({
      addClass: m,
      removeClass: h,
      hasClass: f,
      setStyle: g,
      registerEventHandler: (C, w) => c.on(I(), C, w),
      deregisterEventHandler: (C, w) => c.off(I(), C, w)
    }),
    !0
  ), s(l).init(), () => {
    var C;
    (C = s(l)) == null || C.destroy(), c.clear();
  }));
  function f(C) {
    return C in d ? d[C] : I().classList.contains(C);
  }
  function m(C) {
    d[C] || (d[C] = !0);
  }
  function h(C) {
    (!(C in d) || d[C]) && (d[C] = !1);
  }
  function g(C, w) {
    v[C] != w && (w === "" || w == null ? delete v[C] : v[C] = w);
  }
  function b() {
    var C;
    (C = s(l)) == null || C.activate();
  }
  function y() {
    var C;
    (C = s(l)) == null || C.deactivate();
  }
  function S(C) {
    var w;
    (w = s(l)) == null || w.setRippleCenter(C);
  }
  function I() {
    return u;
  }
  var _ = { activate: b, deactivate: y, setRippleCenter: S, getElement: I }, E = og();
  return Ue(E, (C, w) => ({ class: C, style: w, ...o }), [
    () => De({
      "mdc-line-ripple": !0,
      "mdc-line-ripple--active": a(),
      ...d,
      [r()]: !0
    }),
    () => Object.entries(v).map(([C, w]) => `${C}: ${w};`).concat([i()]).join(" ")
  ]), Ee(E, (C) => u = C, () => u), Me(E, (C, w) => W == null ? void 0 : W(C, w), n), L(t, E), xe(_);
}
var sg = /* @__PURE__ */ de('<div class="mdc-notched-outline__notch"><!></div>'), lg = /* @__PURE__ */ de('<div><div class="mdc-notched-outline__leading"></div> <!> <div class="mdc-notched-outline__trailing"></div></div>');
function ed(t, e) {
  Ce(e, !0);
  let n = p(e, "use", 19, () => []), r = p(e, "class", 3, ""), i = p(e, "notched", 3, !1), a = p(e, "noLabel", 3, !1), o = /* @__PURE__ */ qe(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "notched",
    "noLabel",
    "children"
  ]), u, l = /* @__PURE__ */ ve(void 0), c = /* @__PURE__ */ ve(void 0), d = ce({}), v = ce({}), f;
  Te(() => {
    s(c) !== f && (s(c) ? (s(c).addStyle("transition-duration", "0s"), m("mdc-notched-outline--upgraded"), requestAnimationFrame(() => {
      s(c) && s(c).removeStyle("transition-duration");
    })) : h("mdc-notched-outline--upgraded"), f = s(c));
  }), oe("SMUI:floating-label:mount", (x) => {
    X(c, x, !0);
  }), oe("SMUI:floating-label:unmount", () => {
    X(c, void 0);
  }), rt(() => (X(
    l,
    new Qm({
      addClass: m,
      removeClass: h,
      setNotchWidthProperty: (x) => g("width", x + "px"),
      removeNotchWidthProperty: () => b("width")
    }),
    !0
  ), s(l).init(), () => {
    var x;
    (x = s(l)) == null || x.destroy();
  }));
  function m(x) {
    d[x] || (d[x] = !0);
  }
  function h(x) {
    (!(x in d) || d[x]) && (d[x] = !1);
  }
  function g(x, T) {
    v[x] != T && (T === "" || T == null ? delete v[x] : v[x] = T);
  }
  function b(x) {
    x in v && delete v[x];
  }
  function y(x) {
    var T;
    (T = s(l)) == null || T.notch(x);
  }
  function S() {
    var x;
    (x = s(l)) == null || x.closeNotch();
  }
  function I() {
    return u;
  }
  var _ = { notch: y, closeNotch: S, getElement: I }, E = lg();
  Ue(E, (x) => ({ class: x, ...o }), [
    () => De({
      "mdc-notched-outline": !0,
      "mdc-notched-outline--notched": i(),
      "mdc-notched-outline--no-label": a(),
      ...d,
      [r()]: !0
    })
  ]);
  var C = Ie(se(E), 2);
  {
    var w = (x) => {
      var T = sg(), B = se(T);
      Se(B, () => e.children ?? pe), Oe((K) => Ut(T, K), [
        () => Object.entries(v).map(([K, M]) => `${K}: ${M};`).join(" ")
      ]), L(x, T);
    };
    ae(C, (x) => {
      a() || x(w);
    });
  }
  return Ee(E, (x) => u = x, () => u), Me(E, (x, T) => W == null ? void 0 : W(x, T), n), L(t, E), xe(_);
}
function $s(t, e) {
  Ce(e, !0);
  let n = p(e, "use", 19, () => []), r = p(e, "class", 3, ""), i = p(e, "component", 3, Vr), a = p(e, "tag", 3, "div"), o = p(e, "_smuiClass", 3, ""), u = p(e, "_smuiClassMap", 23, () => ({})), l = p(e, "_smuiContexts", 19, () => ({})), c = p(e, "_smuiProps", 19, () => ({})), d = /* @__PURE__ */ qe(e, [
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
  Object.entries(u()).forEach(([y, S]) => {
    const I = me(S);
    I && "subscribe" in I && f.push(I.subscribe((_) => {
      u()[y] = _;
    }));
  });
  for (let y in l())
    l().hasOwnProperty(y) && oe(y, l()[y]);
  Mn(() => {
    for (const y of f)
      y();
  });
  function m() {
    return v.getElement();
  }
  var h = { getElement: m }, g = ne(), b = Z(g);
  {
    let y = /* @__PURE__ */ ge(() => De({
      [o()]: !0,
      ...u(),
      [r()]: !0
    }));
    pr(b, i, (S, I) => {
      Ee(
        I(S, nt(
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
            children: (_, E) => {
              var C = ne(), w = Z(C);
              Se(w, () => e.children ?? pe), L(_, C);
            },
            $$slots: { default: !0 }
          }
        )),
        (_) => v = _,
        () => v
      );
    });
  }
  return L(t, g), xe(h);
}
function ug(t, e) {
  Ce(e, !0);
  let n = /* @__PURE__ */ qe(e, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return Ee(
    $s(t, nt({ _smuiClass: "mdc-text-field-helper-line", tag: "div" }, () => n, {
      children: (o, u) => {
        var l = ne(), c = Z(l);
        Se(c, () => e.children ?? pe), L(o, l);
      },
      $$slots: { default: !0 }
    })),
    (o) => r = o,
    () => r
  ), xe(a);
}
function cg(t, e) {
  Ce(e, !0);
  let n = /* @__PURE__ */ qe(e, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return Ee(
    $s(t, nt(
      {
        _smuiClass: "mdc-text-field__affix mdc-text-field__affix--prefix",
        tag: "span"
      },
      () => n,
      {
        children: (o, u) => {
          var l = ne(), c = Z(l);
          Se(c, () => e.children ?? pe), L(o, l);
        },
        $$slots: { default: !0 }
      }
    )),
    (o) => r = o,
    () => r
  ), xe(a);
}
function dg(t, e) {
  Ce(e, !0);
  let n = /* @__PURE__ */ qe(e, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return Ee(
    $s(t, nt(
      {
        _smuiClass: "mdc-text-field__affix mdc-text-field__affix--suffix",
        tag: "span"
      },
      () => n,
      {
        children: (o, u) => {
          var l = ne(), c = Z(l);
          Se(c, () => e.children ?? pe), L(o, l);
        },
        $$slots: { default: !0 }
      }
    )),
    (o) => r = o,
    () => r
  ), xe(a);
}
var fg = /* @__PURE__ */ de("<input/>");
function hg(t, e) {
  Ce(e, !0);
  let n = p(e, "use", 19, () => []), r = p(e, "class", 3, ""), i = p(e, "type", 3, "text"), a = p(e, "placeholder", 3, " "), o = p(e, "value", 15), u = p(e, "files", 15, null), l = p(e, "dirty", 15, !1), c = p(e, "invalid", 15, !1), d = p(e, "updateInvalid", 3, !0), v = p(e, "initialInvalid", 3, !1), f = p(e, "emptyValueNull", 19, () => o() === null), m = p(e, "emptyValueUndefined", 19, () => o() === void 0), h = /* @__PURE__ */ qe(e, [
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
  ]), g, b = ce({}), y = ce({});
  Te(() => {
    i() === "file" ? delete y.value : y.value = o() == null ? "" : o();
  }), rt(() => {
    d() && v() && c(B().matches(":invalid"));
  });
  function S(A) {
    return A === "" ? Number.NaN : +A;
  }
  function I(A) {
    if (i() === "file") {
      u(A.currentTarget.files);
      return;
    }
    if (A.currentTarget.value === "" && f()) {
      o(null);
      return;
    }
    if (A.currentTarget.value === "" && m()) {
      o(void 0);
      return;
    }
    switch (i()) {
      case "number":
      case "range":
        o(S(A.currentTarget.value));
        break;
      default:
        o(A.currentTarget.value);
        break;
    }
  }
  function _(A) {
    (i() === "file" || i() === "range") && I(A), l(!0), d() && c(B().matches(":invalid"));
  }
  function E(A) {
    return A in b ? b[A] ?? null : B().getAttribute(A);
  }
  function C(A, N) {
    b[A] !== N && (b[A] = N);
  }
  function w(A) {
    (!(A in b) || b[A] != null) && (b[A] = void 0);
  }
  function x() {
    B().focus();
  }
  function T() {
    B().blur();
  }
  function B() {
    return g;
  }
  var K = { getAttr: E, addAttr: C, removeAttr: w, focus: x, blur: T, getElement: B }, M = fg(), P = (A) => {
    var N;
    i() !== "file" && I(A), (N = e.oninput) == null || N.call(e, A);
  }, O = (A) => {
    var N;
    _(A), (N = e.onchange) == null || N.call(e, A);
  };
  return Ue(
    M,
    (A) => ({
      class: A,
      type: i(),
      placeholder: a(),
      ...y,
      ...b,
      ...h,
      oninput: P,
      onchange: O
    }),
    [
      () => De({ "mdc-text-field__input": !0, [r()]: !0 })
    ],
    void 0,
    void 0,
    !0
  ), Ee(M, (A) => g = A, () => g), Me(M, (A, N) => W == null ? void 0 : W(A, N), n), L(t, M), xe(K);
}
var vg = /* @__PURE__ */ de("<textarea></textarea>");
function mg(t, e) {
  Ce(e, !0);
  let n = p(e, "use", 19, () => []), r = p(e, "class", 3, ""), i = p(e, "style", 3, ""), a = p(e, "value", 15, ""), o = p(e, "dirty", 15, !1), u = p(e, "invalid", 15, !1), l = p(e, "updateInvalid", 3, !0), c = p(e, "initialInvalid", 3, !1), d = p(e, "resizable", 3, !0), v = /* @__PURE__ */ qe(e, [
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
  ]), f, m = ce({});
  rt(() => {
    l() && c() && u(_().matches(":invalid"));
  });
  function h() {
    o(!0), l() && u(_().matches(":invalid"));
  }
  function g(x) {
    return x in m ? m[x] ?? null : _().getAttribute(x);
  }
  function b(x, T) {
    m[x] !== T && (m[x] = T);
  }
  function y(x) {
    (!(x in m) || m[x] != null) && (m[x] = void 0);
  }
  function S() {
    _().focus();
  }
  function I() {
    _().blur();
  }
  function _() {
    return f;
  }
  var E = { getAttr: g, addAttr: b, removeAttr: y, focus: S, blur: I, getElement: _ }, C = vg(), w = (x) => {
    var T;
    h(), (T = e.onchange) == null || T.call(e, x);
  };
  return Ue(
    C,
    (x) => ({
      class: x,
      style: `${d() ? "" : "resize: none; "}${i()}`,
      ...m,
      ...v,
      onchange: w
    }),
    [
      () => De({ "mdc-text-field__input": !0, [r()]: !0 })
    ]
  ), Ee(C, (x) => f = x, () => f), Me(C, (x, T) => W == null ? void 0 : W(x, T), n), mi(() => Ta(C, a)), L(t, C), xe(E);
}
var gg = /* @__PURE__ */ de('<span class="mdc-text-field__ripple"></span>'), pg = /* @__PURE__ */ de("<!> <!>", 1), bg = /* @__PURE__ */ de("<span><!> <!></span>"), _g = /* @__PURE__ */ de("<!> <!> <!>", 1), yg = /* @__PURE__ */ de("<label><!> <!> <!> <!> <!> <!> <!></label>"), Ig = /* @__PURE__ */ de("<div><!> <!> <!> <!> <!></div>"), Eg = /* @__PURE__ */ de("<!> <!>", 1);
function Ms(t, e) {
  Ce(e, !0);
  const { applyPassive: n } = Zc;
  let r = () => {
  };
  function i(Y) {
    return Y === r;
  }
  let a = p(e, "use", 19, () => []), o = p(e, "class", 3, ""), u = p(e, "style", 3, ""), l = p(e, "ripple", 3, !0), c = p(e, "disabled", 3, !1), d = p(e, "required", 3, !1), v = p(e, "textarea", 3, !1), f = p(e, "variant", 19, () => v() ? "outlined" : "standard"), m = p(e, "noLabel", 3, !1), h = p(e, "type", 3, "text"), g = p(e, "value", 15), b = p(e, "files", 15, r), y = p(e, "invalid", 15, r), S = p(e, "updateInvalid", 19, () => i(y())), I = p(e, "initialInvalid", 3, !1), _ = p(e, "dirty", 15, !1), E = p(e, "validateOnValueChange", 19, S), C = p(e, "useNativeValidation", 19, S), w = p(e, "withLeadingIcon", 3, r), x = p(e, "withTrailingIcon", 3, r), T = p(e, "input", 7), B = p(e, "floatingLabel", 7), K = p(e, "lineRipple", 7), M = p(e, "notchedOutline", 7), P = /* @__PURE__ */ qe(e, [
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
  const O = g() !== void 0 || g() === void 0 && e.input$emptyValueUndefined || !i(b());
  i(b()) && b(null), i(y()) && y(!1);
  let A, N = /* @__PURE__ */ ve(void 0), U = new ia(), q = ce({}), J = ce({}), H = /* @__PURE__ */ ve(void 0), R = /* @__PURE__ */ ve(!1), j = /* @__PURE__ */ ve(ce(I())), Ae = me("SMUI:addLayoutListener"), be, V, G = new Promise((Y) => V = Y), F, ee, Q, fe;
  const we = /* @__PURE__ */ ge(() => T() && T().getElement());
  Te(() => {
    (_() || s(j) || !S()) && s(N) && s(N).isValid() !== !y() && (S() ? y(!s(N).isValid()) : s(N).setValid(!y()));
  }), Te(() => {
    s(N) && s(N).getValidateOnValueChange() !== E() && s(N).setValidateOnValueChange(i(E()) ? !1 : E());
  }), Te(() => {
    s(N) && s(N).setUseNativeValidation(i(C()) ? !0 : C());
  }), Te(() => {
    s(N) && s(N).setDisabled(c());
  });
  let $ = g();
  Te(() => {
    if (s(N) && O && $ !== g()) {
      $ = g();
      const Y = `${g() == null ? "" : g()}`;
      s(N).getValue() !== Y && s(N).setValue(Y);
    }
  }), Ae && (be = Ae(k)), oe("SMUI:textfield:leading-icon:mount", (Y) => {
    F = Y;
  }), oe("SMUI:textfield:leading-icon:unmount", () => {
    F = void 0;
  }), oe("SMUI:textfield:trailing-icon:mount", (Y) => {
    ee = Y;
  }), oe("SMUI:textfield:trailing-icon:unmount", () => {
    ee = void 0;
  }), oe("SMUI:textfield:helper-text:id", (Y) => {
    X(H, Y, !0);
  }), oe("SMUI:textfield:helper-text:mount", (Y) => {
    Q = Y;
  }), oe("SMUI:textfield:helper-text:unmount", () => {
    X(H, void 0), Q = void 0;
  }), oe("SMUI:textfield:character-counter:mount", (Y) => {
    fe = Y;
  }), oe("SMUI:textfield:character-counter:unmount", () => {
    fe = void 0;
  }), rt(() => {
    var Y;
    if (X(
      N,
      new tg(
        {
          // getRootAdapterMethods_
          addClass: Pe,
          removeClass: Le,
          hasClass: ie,
          registerTextFieldInteractionHandler: (te, Ne) => U.on(z(), te, Ne),
          deregisterTextFieldInteractionHandler: (te, Ne) => U.off(z(), te, Ne),
          registerValidationAttributeChangeHandler: (te) => {
            const Ne = (mt) => mt.map((kt) => kt.attributeName).filter((kt) => kt), dt = new MutationObserver((mt) => {
              C() && te(Ne(mt));
            }), bt = { attributes: !0 };
            return T() && dt.observe(T().getElement(), bt), dt;
          },
          deregisterValidationAttributeChangeHandler: (te) => {
            te.disconnect();
          },
          // getInputAdapterMethods_
          getNativeInput: () => {
            var te;
            return ((te = T()) == null ? void 0 : te.getElement()) ?? null;
          },
          setInputAttr: (te, Ne) => {
            var dt;
            (dt = T()) == null || dt.addAttr(te, Ne);
          },
          removeInputAttr: (te) => {
            var Ne;
            (Ne = T()) == null || Ne.removeAttr(te);
          },
          isFocused: () => {
            var te;
            return document.activeElement === ((te = T()) == null ? void 0 : te.getElement());
          },
          registerInputInteractionHandler: (te, Ne) => {
            var bt;
            const dt = (bt = T()) == null ? void 0 : bt.getElement();
            if (dt) {
              const mt = n();
              U.on(dt, te, Ne, typeof mt == "boolean" ? { capture: mt } : mt);
            }
          },
          deregisterInputInteractionHandler: (te, Ne) => {
            var bt;
            const dt = (bt = T()) == null ? void 0 : bt.getElement();
            dt && U.off(dt, te, Ne);
          },
          // getLabelAdapterMethods_
          floatLabel: (te) => B() && B().float(te),
          getLabelWidth: () => B() ? B().getWidth() : 0,
          hasLabel: () => !!B(),
          shakeLabel: (te) => B() && B().shake(te),
          setLabelRequired: (te) => B() && B().setRequired(te),
          // getLineRippleAdapterMethods_
          activateLineRipple: () => K() && K().activate(),
          deactivateLineRipple: () => K() && K().deactivate(),
          setLineRippleTransformOrigin: (te) => K() && K().setRippleCenter(te),
          // getOutlineAdapterMethods_
          closeOutline: () => M() && M().closeNotch(),
          hasOutline: () => !!M(),
          notchOutline: (te) => M() && M().notch(te)
        },
        {
          get helperText() {
            return Q;
          },
          get characterCounter() {
            return fe;
          },
          get leadingIcon() {
            return F;
          },
          get trailingIcon() {
            return ee;
          }
        }
      ),
      !0
    ), O) {
      if (T() == null)
        throw new Error("SMUI Textfield must be initialized with either a non-undefined initial value or an Input component.");
      (Y = s(N)) == null || Y.init();
    } else
      dc().then(() => {
        var te;
        if (T() == null)
          throw new Error("SMUI Textfield must be initialized with either a non-undefined initial value or an Input component.");
        (te = s(N)) == null || te.init();
      });
    return V(), () => {
      var te;
      (te = s(N)) == null || te.destroy(), U.clear();
    };
  }), Mn(() => {
    be && be();
  });
  function ie(Y) {
    return Y in q ? q[Y] ?? null : z().classList.contains(Y);
  }
  function Pe(Y) {
    q[Y] || (q[Y] = !0);
  }
  function Le(Y) {
    (!(Y in q) || q[Y]) && (q[Y] = !1);
  }
  function We(Y, te) {
    J[Y] != te && (te === "" || te == null ? delete J[Y] : J[Y] = te);
  }
  function Ke() {
    var Y;
    (Y = T()) == null || Y.focus();
  }
  function ke() {
    var Y;
    (Y = T()) == null || Y.blur();
  }
  function k() {
    if (s(N)) {
      const Y = s(N).shouldFloat;
      s(N).notchOutline(Y);
    }
  }
  function z() {
    return A;
  }
  var he = { focus: Ke, blur: ke, layout: k, getElement: z }, Re = Eg(), Fe = Z(Re);
  {
    var ct = (Y) => {
      var te = yg();
      Ue(te, (ze, Qe, $e) => ({ class: ze, style: Qe, for: void 0, ...$e }), [
        () => De({
          "mdc-text-field": !0,
          "mdc-text-field--disabled": c(),
          "mdc-text-field--textarea": v(),
          "mdc-text-field--filled": f() === "filled",
          "mdc-text-field--outlined": f() === "outlined",
          "smui-text-field--standard": f() === "standard" && !v(),
          "mdc-text-field--no-label": m() || e.label == null,
          "mdc-text-field--label-floating": s(R) || g() != null && g() !== "",
          "mdc-text-field--with-leading-icon": i(w()) ? e.leadingIcon : w(),
          "mdc-text-field--with-trailing-icon": i(x()) ? e.trailingIcon : x(),
          "mdc-text-field--with-internal-counter": v() && e.internalCounter,
          "mdc-text-field--invalid": y(),
          ...q,
          [o()]: !0
        }),
        () => Object.entries(J).map(([ze, Qe]) => `${ze}: ${Qe};`).concat([u()]).join(" "),
        () => er(P, ["input$", "label$", "ripple$", "outline$", "helperLine$"])
      ]);
      var Ne = se(te);
      {
        var dt = (ze) => {
          var Qe = pg(), $e = Z(Qe);
          {
            var Dt = (ut) => {
              var At = gg();
              L(ut, At);
            };
            ae($e, (ut) => {
              f() === "filled" && ut(Dt);
            });
          }
          var gn = Ie($e, 2);
          {
            var ot = (ut) => {
              {
                let At = /* @__PURE__ */ ge(() => s(R) || g() != null && g() !== "" && (typeof g() != "number" || !isNaN(g()))), et = /* @__PURE__ */ ge(() => it(P, "label$"));
                Ee(
                  So(ut, nt(
                    {
                      get floatAbove() {
                        return s(At);
                      },
                      get required() {
                        return d();
                      },
                      wrapped: !0
                    },
                    () => s(et),
                    {
                      children: (wt, Nn) => {
                        var Lt = ne(), _t = Z(Lt);
                        {
                          var Pt = (Bt) => {
                          }, un = (Bt) => {
                            var cn = ne(), Yt = Z(cn);
                            {
                              var Wn = (dn) => {
                                var jt = Rt();
                                Oe(() => at(jt, e.label)), L(dn, jt);
                              }, Gr = (dn) => {
                                var jt = ne(), pn = Z(jt);
                                Se(pn, () => e.label), L(dn, jt);
                              };
                              ae(
                                Yt,
                                (dn) => {
                                  typeof e.label == "string" ? dn(Wn) : dn(Gr, !1);
                                },
                                !0
                              );
                            }
                            L(Bt, cn);
                          };
                          ae(_t, (Bt) => {
                            e.label == null ? Bt(Pt) : Bt(un, !1);
                          });
                        }
                        L(wt, Lt);
                      },
                      $$slots: { default: !0 }
                    }
                  )),
                  (wt) => B(wt),
                  () => B()
                );
              }
            };
            ae(gn, (ut) => {
              !m() && e.label != null && ut(ot);
            });
          }
          L(ze, Qe);
        };
        ae(Ne, (ze) => {
          !v() && f() !== "outlined" && ze(dt);
        });
      }
      var bt = Ie(Ne, 2);
      {
        var mt = (ze) => {
          {
            let Qe = /* @__PURE__ */ ge(() => m() || e.label == null), $e = /* @__PURE__ */ ge(() => it(P, "outline$"));
            Ee(
              ed(ze, nt(
                {
                  get noLabel() {
                    return s(Qe);
                  }
                },
                () => s($e),
                {
                  children: (Dt, gn) => {
                    var ot = ne(), ut = Z(ot);
                    {
                      var At = (et) => {
                        {
                          let wt = /* @__PURE__ */ ge(() => s(R) || g() != null && g() !== "" && (typeof g() != "number" || !isNaN(g()))), Nn = /* @__PURE__ */ ge(() => it(P, "label$"));
                          Ee(
                            So(et, nt(
                              {
                                get floatAbove() {
                                  return s(wt);
                                },
                                get required() {
                                  return d();
                                },
                                wrapped: !0
                              },
                              () => s(Nn),
                              {
                                children: (Lt, _t) => {
                                  var Pt = ne(), un = Z(Pt);
                                  {
                                    var Bt = (Yt) => {
                                    }, cn = (Yt) => {
                                      var Wn = ne(), Gr = Z(Wn);
                                      {
                                        var dn = (pn) => {
                                          var rr = Rt();
                                          Oe(() => at(rr, e.label)), L(pn, rr);
                                        }, jt = (pn) => {
                                          var rr = ne(), oa = Z(rr);
                                          Se(oa, () => e.label), L(pn, rr);
                                        };
                                        ae(
                                          Gr,
                                          (pn) => {
                                            typeof e.label == "string" ? pn(dn) : pn(jt, !1);
                                          },
                                          !0
                                        );
                                      }
                                      L(Yt, Wn);
                                    };
                                    ae(un, (Yt) => {
                                      e.label == null ? Yt(Bt) : Yt(cn, !1);
                                    });
                                  }
                                  L(Lt, Pt);
                                },
                                $$slots: { default: !0 }
                              }
                            )),
                            (Lt) => B(Lt),
                            () => B()
                          );
                        }
                      };
                      ae(ut, (et) => {
                        !m() && e.label != null && et(At);
                      });
                    }
                    L(Dt, ot);
                  },
                  $$slots: { default: !0 }
                }
              )),
              (Dt) => M(Dt),
              () => M()
            );
          }
        };
        ae(bt, (ze) => {
          (v() || f() === "outlined") && ze(mt);
        });
      }
      var kt = Ie(bt, 2);
      $a(kt, {
        key: "SMUI:textfield:icon:leading",
        value: !0,
        children: (ze, Qe) => {
          var $e = ne(), Dt = Z($e);
          Se(Dt, () => e.leadingIcon ?? pe), L(ze, $e);
        },
        $$slots: { default: !0 }
      });
      var _r = Ie(kt, 2);
      Se(_r, () => e.children ?? pe);
      var ht = Ie(_r, 2);
      {
        var Mt = (ze) => {
          var Qe = bg(), $e = se(Qe);
          {
            let gn = /* @__PURE__ */ ge(() => it(P, "input$"));
            Ee(
              mg($e, nt(
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
                    return s(H);
                  },
                  get "aria-describedby"() {
                    return s(H);
                  }
                },
                () => s(gn),
                {
                  onblur: (ot) => {
                    var ut;
                    X(R, !1), X(j, !0), Je(z(), "blur", ot), (ut = e.input$onblur) == null || ut.call(e, ot);
                  },
                  onfocus: (ot) => {
                    var ut;
                    X(R, !0), Je(z(), "focus", ot), (ut = e.input$onfocus) == null || ut.call(e, ot);
                  },
                  get value() {
                    return g();
                  },
                  set value(ot) {
                    g(ot);
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
              (ot) => T(ot),
              () => T()
            );
          }
          var Dt = Ie($e, 2);
          Se(Dt, () => e.internalCounter ?? pe), Oe((gn) => Xs(Qe, 1, gn), [
            () => _c(De({
              "mdc-text-field__resizer": !("input$resizable" in P) || e.input$resizable
            }))
          ]), L(ze, Qe);
        }, It = (ze) => {
          var Qe = _g(), $e = Z(Qe);
          {
            var Dt = (At) => {
              var et = ne(), wt = Z(et);
              {
                var Nn = (_t) => {
                  cg(_t, {
                    children: (Pt, un) => {
                      var Bt = Rt();
                      Oe(() => at(Bt, e.prefix)), L(Pt, Bt);
                    },
                    $$slots: { default: !0 }
                  });
                }, Lt = (_t) => {
                  var Pt = ne(), un = Z(Pt);
                  Se(un, () => e.prefix ?? pe), L(_t, Pt);
                };
                ae(wt, (_t) => {
                  typeof e.prefix == "string" ? _t(Nn) : _t(Lt, !1);
                });
              }
              L(At, et);
            };
            ae($e, (At) => {
              e.prefix != null && At(Dt);
            });
          }
          var gn = Ie($e, 2);
          {
            let At = /* @__PURE__ */ ge(() => it(P, "input$"));
            Ee(
              hg(gn, nt(
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
                    return s(H);
                  },
                  get "aria-describedby"() {
                    return s(H);
                  }
                },
                () => m() && e.label != null && typeof e.label == "string" ? { placeholder: e.label } : {},
                () => s(At),
                {
                  onblur: (et) => {
                    var wt;
                    X(R, !1), X(j, !0), Je(z(), "blur", et), (wt = e.input$onblur) == null || wt.call(e, et);
                  },
                  onfocus: (et) => {
                    var wt;
                    X(R, !0), Je(z(), "focus", et), (wt = e.input$onfocus) == null || wt.call(e, et);
                  },
                  get value() {
                    return g();
                  },
                  set value(et) {
                    g(et);
                  },
                  get files() {
                    return b();
                  },
                  set files(et) {
                    b(et);
                  },
                  get dirty() {
                    return _();
                  },
                  set dirty(et) {
                    _(et);
                  },
                  get invalid() {
                    return y();
                  },
                  set invalid(et) {
                    y(et);
                  }
                }
              )),
              (et) => T(et),
              () => T()
            );
          }
          var ot = Ie(gn, 2);
          {
            var ut = (At) => {
              var et = ne(), wt = Z(et);
              {
                var Nn = (_t) => {
                  dg(_t, {
                    children: (Pt, un) => {
                      var Bt = Rt();
                      Oe(() => at(Bt, e.suffix)), L(Pt, Bt);
                    },
                    $$slots: { default: !0 }
                  });
                }, Lt = (_t) => {
                  var Pt = ne(), un = Z(Pt);
                  Se(un, () => e.suffix ?? pe), L(_t, Pt);
                };
                ae(wt, (_t) => {
                  typeof e.suffix == "string" ? _t(Nn) : _t(Lt, !1);
                });
              }
              L(At, et);
            };
            ae(ot, (At) => {
              e.suffix != null && At(ut);
            });
          }
          L(ze, Qe);
        };
        ae(ht, (ze) => {
          v() && typeof g() == "string" ? ze(Mt) : ze(It, !1);
        });
      }
      var Pn = Ie(ht, 2);
      $a(Pn, {
        key: "SMUI:textfield:icon:leading",
        value: !1,
        children: (ze, Qe) => {
          var $e = ne(), Dt = Z($e);
          Se(Dt, () => e.trailingIcon ?? pe), L(ze, $e);
        },
        $$slots: { default: !0 }
      });
      var Ii = Ie(Pn, 2);
      {
        var jn = (ze) => {
          {
            let Qe = /* @__PURE__ */ ge(() => it(P, "ripple$"));
            Ee($c(ze, nt(() => s(Qe))), ($e) => K($e), () => K());
          }
        };
        ae(Ii, (ze) => {
          !v() && f() !== "outlined" && l() && ze(jn);
        });
      }
      Ee(te, (ze) => A = ze, () => A), Me(te, (ze, Qe) => Xt == null ? void 0 : Xt(ze, Qe), () => ({
        ripple: !v() && f() === "filled",
        unbounded: !1,
        addClass: Pe,
        removeClass: Le,
        addStyle: We,
        eventTarget: s(we),
        activeTarget: s(we),
        initPromise: G
      })), Me(te, (ze, Qe) => W == null ? void 0 : W(ze, Qe), a), L(Y, te);
    }, pt = (Y) => {
      var te = Ig();
      Ue(te, (ht, Mt, It) => ({ class: ht, style: Mt, ...It }), [
        () => De({
          "mdc-text-field": !0,
          "mdc-text-field--disabled": c(),
          "mdc-text-field--textarea": v(),
          "mdc-text-field--filled": f() === "filled",
          "mdc-text-field--outlined": f() === "outlined",
          "smui-text-field--standard": f() === "standard" && !v(),
          "mdc-text-field--no-label": m() || e.label == null,
          "mdc-text-field--with-leading-icon": e.leadingIcon,
          "mdc-text-field--with-trailing-icon": e.trailingIcon,
          "mdc-text-field--invalid": y(),
          ...q,
          [o()]: !0
        }),
        () => Object.entries(J).map(([ht, Mt]) => `${ht}: ${Mt};`).concat([u()]).join(" "),
        () => er(P, ["input$", "label$", "ripple$", "outline$", "helperLine$"])
      ]);
      var Ne = se(te);
      {
        var dt = (ht) => {
          var Mt = ne(), It = Z(Mt);
          Se(It, () => e.label ?? pe), L(ht, Mt);
        };
        ae(Ne, (ht) => {
          typeof e.label != "string" && ht(dt);
        });
      }
      var bt = Ie(Ne, 2);
      $a(bt, {
        key: "SMUI:textfield:icon:leading",
        value: !0,
        children: (ht, Mt) => {
          var It = ne(), Pn = Z(It);
          Se(Pn, () => e.leadingIcon ?? pe), L(ht, It);
        },
        $$slots: { default: !0 }
      });
      var mt = Ie(bt, 2);
      Se(mt, () => e.children ?? pe);
      var kt = Ie(mt, 2);
      $a(kt, {
        key: "SMUI:textfield:icon:leading",
        value: !1,
        children: (ht, Mt) => {
          var It = ne(), Pn = Z(It);
          Se(Pn, () => e.trailingIcon ?? pe), L(ht, It);
        },
        $$slots: { default: !0 }
      });
      var _r = Ie(kt, 2);
      Se(_r, () => e.line ?? pe), Ee(te, (ht) => A = ht, () => A), Me(te, (ht, Mt) => Xt == null ? void 0 : Xt(ht, Mt), () => ({
        ripple: l(),
        unbounded: !1,
        addClass: Pe,
        removeClass: Le,
        addStyle: We
      })), Me(te, (ht, Mt) => W == null ? void 0 : W(ht, Mt), a), L(Y, te);
    };
    ae(Fe, (Y) => {
      O ? Y(ct) : Y(pt, !1);
    });
  }
  var le = Ie(Fe, 2);
  {
    var ye = (Y) => {
      {
        let te = /* @__PURE__ */ ge(() => it(P, "helperLine$"));
        ug(Y, nt(() => s(te), {
          children: (Ne, dt) => {
            var bt = ne(), mt = Z(bt);
            Se(mt, () => e.helper ?? pe), L(Ne, bt);
          },
          $$slots: { default: !0 }
        }));
      }
    };
    ae(le, (Y) => {
      e.helper && Y(ye);
    });
  }
  return L(t, Re), xe(he);
}
var Sg = /* @__PURE__ */ de("<i><!></i>");
function Ag(t, e) {
  Ce(e, !0);
  const n = () => Qn(h, "$leadingStore", r), [r, i] = br();
  let a = p(e, "use", 19, () => []), o = p(e, "class", 3, ""), u = p(e, "tabindex", 19, () => e.role === "button" ? 0 : -1), l = p(e, "disabled", 3, !1), c = /* @__PURE__ */ qe(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "role",
    "tabindex",
    "disabled",
    "children"
  ]), d, v = /* @__PURE__ */ ve(void 0), f = new ia(), m = ce({});
  const h = me("SMUI:textfield:icon:leading"), g = n();
  let b = /* @__PURE__ */ ve(void 0);
  const y = /* @__PURE__ */ ge(() => ({ role: e.role, tabindex: u() })), S = me("SMUI:textfield:leading-icon:mount"), I = me("SMUI:textfield:leading-icon:unmount"), _ = me("SMUI:textfield:trailing-icon:mount"), E = me("SMUI:textfield:trailing-icon:unmount");
  rt(() => (X(
    v,
    new rg({
      getAttr: C,
      setAttr: w,
      removeAttr: x,
      setContent: (N) => {
        X(b, N, !0);
      },
      registerInteractionHandler: (N, U) => f.on(T(), N, U),
      deregisterInteractionHandler: (N, U) => f.off(T(), N, U),
      notifyIconAction: () => Je(T(), "SMUITextFieldIcon")
    }),
    !0
  ), g ? S && S(s(v)) : _ && _(s(v)), s(v).init(), () => {
    var N;
    s(v) && (g ? I && I(s(v)) : E && E(s(v))), (N = s(v)) == null || N.destroy(), f.clear();
  }));
  function C(N) {
    return N in m ? m[N] ?? null : T().getAttribute(N);
  }
  function w(N, U) {
    m[N] !== U && (m[N] = U);
  }
  function x(N) {
    (!(N in m) || m[N] != null) && (m[N] = void 0);
  }
  function T() {
    return d;
  }
  var B = { getElement: T }, K = Sg();
  Ue(
    K,
    (N) => ({
      class: N,
      "aria-hidden": u() === -1 ? "true" : "false",
      "aria-disabled": e.role === "button" ? l() ? "true" : "false" : void 0,
      ...s(y),
      ...m,
      ...c
    }),
    [
      () => De({
        "mdc-text-field__icon": !0,
        "mdc-text-field__icon--leading": g,
        "mdc-text-field__icon--trailing": !g,
        [o()]: !0
      })
    ]
  );
  var M = se(K);
  {
    var P = (N) => {
      var U = ne(), q = Z(U);
      Se(q, () => e.children ?? pe), L(N, U);
    }, O = (N) => {
      var U = Rt();
      Oe(() => at(U, s(b))), L(N, U);
    };
    ae(M, (N) => {
      s(b) == null ? N(P) : N(O, !1);
    });
  }
  Ee(K, (N) => d = N, () => d), Me(K, (N, U) => W == null ? void 0 : W(N, U), a), L(t, K);
  var A = xe(B);
  return i(), A;
}
function Cg(t, e) {
  Ce(e, !0);
  let n = p(e, "placeholder", 3, ""), r = p(e, "label", 3, ""), i = p(e, "icon", 3, ""), a = p(e, "value", 15, ""), o = p(e, "variant", 3, "standard"), u = p(e, "styles", 3, ""), l = p(e, "required", 3, !1), c = p(e, "invalid", 3, !1), d = p(e, "oninput", 3, () => {
  });
  var v = ne(), f = Z(v);
  {
    var m = (g) => {
      {
        const b = (S) => {
          Ag(S, {
            class: "material-icons",
            children: (I, _) => {
              var E = Rt();
              Oe(() => at(E, i())), L(I, E);
            },
            $$slots: { default: !0 }
          });
        };
        let y = /* @__PURE__ */ ge(() => `width: 100%; ${u()}`);
        Ms(g, {
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
    }, h = (g) => {
      Ms(g, {
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
    ae(f, (g) => {
      i() ? g(m) : g(h, !1);
    });
  }
  L(t, v), xe();
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
var xg = {
  ANCHOR: "mdc-menu-surface--anchor",
  ANIMATING_CLOSED: "mdc-menu-surface--animating-closed",
  ANIMATING_OPEN: "mdc-menu-surface--animating-open",
  FIXED: "mdc-menu-surface--fixed",
  IS_OPEN_BELOW: "mdc-menu-surface--is-open-below",
  OPEN: "mdc-menu-surface--open",
  ROOT: "mdc-menu-surface"
}, Tg = {
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
var si;
(function(t) {
  t[t.TOP_LEFT = 0] = "TOP_LEFT", t[t.TOP_RIGHT = 4] = "TOP_RIGHT", t[t.BOTTOM_LEFT = 1] = "BOTTOM_LEFT", t[t.BOTTOM_RIGHT = 5] = "BOTTOM_RIGHT", t[t.TOP_START = 8] = "TOP_START", t[t.TOP_END = 12] = "TOP_END", t[t.BOTTOM_START = 9] = "BOTTOM_START", t[t.BOTTOM_END = 13] = "BOTTOM_END";
})(si || (si = {}));
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
var Er, sr, Xe = {
  LIST_ITEM_ACTIVATED_CLASS: "mdc-list-item--activated",
  LIST_ITEM_CLASS: "mdc-list-item",
  LIST_ITEM_DISABLED_CLASS: "mdc-list-item--disabled",
  LIST_ITEM_SELECTED_CLASS: "mdc-list-item--selected",
  LIST_ITEM_TEXT_CLASS: "mdc-list-item__text",
  LIST_ITEM_PRIMARY_TEXT_CLASS: "mdc-list-item__primary-text",
  ROOT: "mdc-list"
};
Er = {}, Er["" + Xe.LIST_ITEM_ACTIVATED_CLASS] = "mdc-list-item--activated", Er["" + Xe.LIST_ITEM_CLASS] = "mdc-list-item", Er["" + Xe.LIST_ITEM_DISABLED_CLASS] = "mdc-list-item--disabled", Er["" + Xe.LIST_ITEM_SELECTED_CLASS] = "mdc-list-item--selected", Er["" + Xe.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-list-item__primary-text", Er["" + Xe.ROOT] = "mdc-list";
var Ti = (sr = {}, sr["" + Xe.LIST_ITEM_ACTIVATED_CLASS] = "mdc-deprecated-list-item--activated", sr["" + Xe.LIST_ITEM_CLASS] = "mdc-deprecated-list-item", sr["" + Xe.LIST_ITEM_DISABLED_CLASS] = "mdc-deprecated-list-item--disabled", sr["" + Xe.LIST_ITEM_SELECTED_CLASS] = "mdc-deprecated-list-item--selected", sr["" + Xe.LIST_ITEM_TEXT_CLASS] = "mdc-deprecated-list-item__text", sr["" + Xe.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-deprecated-list-item__primary-text", sr["" + Xe.ROOT] = "mdc-deprecated-list", sr), Sr = {
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
    .` + Xe.LIST_ITEM_CLASS + ` button:not(:disabled),
    .` + Xe.LIST_ITEM_CLASS + ` a,
    .` + Ti[Xe.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + Ti[Xe.LIST_ITEM_CLASS] + ` a
  `,
  DEPRECATED_SELECTOR: ".mdc-deprecated-list",
  FOCUSABLE_CHILD_ELEMENTS: `
    .` + Xe.LIST_ITEM_CLASS + ` button:not(:disabled),
    .` + Xe.LIST_ITEM_CLASS + ` a,
    .` + Xe.LIST_ITEM_CLASS + ` input[type="radio"]:not(:disabled),
    .` + Xe.LIST_ITEM_CLASS + ` input[type="checkbox"]:not(:disabled),
    .` + Ti[Xe.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + Ti[Xe.LIST_ITEM_CLASS] + ` a,
    .` + Ti[Xe.LIST_ITEM_CLASS] + ` input[type="radio"]:not(:disabled),
    .` + Ti[Xe.LIST_ITEM_CLASS] + ` input[type="checkbox"]:not(:disabled)
  `,
  RADIO_SELECTOR: 'input[type="radio"]',
  SELECTED_ITEM_SELECTOR: '[aria-selected="true"], [aria-current="true"]'
}, Et = {
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
var wg = ["input", "button", "textarea", "select"], An = function(t) {
  var e = t.target;
  if (e) {
    var n = ("" + e.tagName).toLowerCase();
    wg.indexOf(n) === -1 && t.preventDefault();
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
function Lg() {
  var t = {
    bufferClearTimeout: 0,
    currentFirstChar: "",
    sortedIndexCursor: 0,
    typeaheadBuffer: ""
  };
  return t;
}
function Og(t, e) {
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
function Ds(t, e) {
  var n = t.nextChar, r = t.focusItemAtIndex, i = t.sortedIndexByFirstChar, a = t.focusedItemIndex, o = t.skipFocus, u = t.isItemAtIndexDisabled;
  clearTimeout(e.bufferClearTimeout), e.bufferClearTimeout = setTimeout(function() {
    nd(e);
  }, Et.TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS), e.typeaheadBuffer = e.typeaheadBuffer + n;
  var l;
  return e.typeaheadBuffer.length === 1 ? l = Rg(i, a, u, e) : l = Mg(i, u, e), l !== -1 && !o && r(l), l;
}
function Rg(t, e, n, r) {
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
function Mg(t, e, n) {
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
function td(t) {
  return t.typeaheadBuffer.length > 0;
}
function nd(t) {
  t.typeaheadBuffer = "";
}
function nu(t, e) {
  var n = t.event, r = t.isTargetListItem, i = t.focusedItemIndex, a = t.focusItemAtIndex, o = t.sortedIndexByFirstChar, u = t.isItemAtIndexDisabled, l = Ct(n) === "ArrowLeft", c = Ct(n) === "ArrowUp", d = Ct(n) === "ArrowRight", v = Ct(n) === "ArrowDown", f = Ct(n) === "Home", m = Ct(n) === "End", h = Ct(n) === "Enter", g = Ct(n) === "Spacebar";
  if (n.altKey || n.ctrlKey || n.metaKey || l || c || d || v || f || m || h)
    return -1;
  var b = !g && n.key.length === 1;
  if (b) {
    An(n);
    var y = {
      focusItemAtIndex: a,
      focusedItemIndex: i,
      nextChar: n.key.toLowerCase(),
      sortedIndexByFirstChar: o,
      skipFocus: !1,
      isItemAtIndexDisabled: u
    };
    return Ds(y, e);
  }
  if (!g)
    return -1;
  r && An(n);
  var S = r && td(e);
  if (S) {
    var y = {
      focusItemAtIndex: a,
      focusedItemIndex: i,
      nextChar: " ",
      sortedIndexByFirstChar: o,
      skipFocus: !1,
      isItemAtIndexDisabled: u
    };
    return Ds(y, e);
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
function Dg(t) {
  return t instanceof Array;
}
var Pg = ["Alt", "Control", "Meta", "Shift"];
function ru(t) {
  var e = new Set(t ? Pg.filter(function(n) {
    return t.getModifierState(n);
  }) : []);
  return function(n) {
    return n.every(function(r) {
      return e.has(r);
    }) && n.length === e.size;
  };
}
var Ng = (
  /** @class */
  function(t) {
    Ve(e, t);
    function e(n) {
      var r = t.call(this, ue(ue({}, e.defaultAdapter), n)) || this;
      return r.wrapFocus = !1, r.isVertical = !0, r.isSingleSelectionList = !1, r.areDisabledItemsFocusable = !0, r.selectedIndex = Et.UNSET_INDEX, r.focusedItemIndex = Et.UNSET_INDEX, r.useActivatedClass = !1, r.useSelectedAttr = !1, r.ariaCurrentAttrValue = null, r.isCheckboxList = !1, r.isRadioList = !1, r.lastSelectedIndex = null, r.hasTypeahead = !1, r.typeaheadState = Lg(), r.sortedIndexByFirstChar = /* @__PURE__ */ new Map(), r;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return Sr;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Xe;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return Et;
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
      if (n !== Et.UNSET_INDEX) {
        var r = this.adapter.listItemAtIndexHasClass(n, Xe.LIST_ITEM_ACTIVATED_CLASS);
        r && this.setUseActivatedClass(!0), this.isSingleSelectionList = !0, this.selectedIndex = n;
      }
    }, e.prototype.getSelectedIndexFromDOM = function() {
      for (var n = Et.UNSET_INDEX, r = this.adapter.getListItemCount(), i = 0; i < r; i++) {
        var a = this.adapter.listItemAtIndexHasClass(i, Xe.LIST_ITEM_SELECTED_CLASS), o = this.adapter.listItemAtIndexHasClass(i, Xe.LIST_ITEM_ACTIVATED_CLASS);
        if (a || o) {
          n = i;
          break;
        }
      }
      return n;
    }, e.prototype.setHasTypeahead = function(n) {
      this.hasTypeahead = n, n && (this.sortedIndexByFirstChar = this.typeaheadInitSortedIndex());
    }, e.prototype.isTypeaheadInProgress = function() {
      return this.hasTypeahead && td(this.typeaheadState);
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
      return this.adapter.listItemAtIndexHasClass(n, Xe.LIST_ITEM_DISABLED_CLASS);
    }, e.prototype.handleKeydown = function(n, r, i) {
      var a = this, o, u = Ct(n) === "ArrowLeft", l = Ct(n) === "ArrowUp", c = Ct(n) === "ArrowRight", d = Ct(n) === "ArrowDown", v = Ct(n) === "Home", f = Ct(n) === "End", m = Ct(n) === "Enter", h = Ct(n) === "Spacebar", g = this.isVertical && d || !this.isVertical && c, b = this.isVertical && l || !this.isVertical && u, y = n.key === "A" || n.key === "a", S = ru(n);
      if (this.adapter.isRootFocused()) {
        if ((b || f) && S([]))
          n.preventDefault(), this.focusLastElement();
        else if ((g || v) && S([]))
          n.preventDefault(), this.focusFirstElement();
        else if (b && S(["Shift"]) && this.isCheckboxList) {
          n.preventDefault();
          var I = this.focusLastElement();
          I !== -1 && this.setSelectedIndexOnAction(I, !1);
        } else if (g && S(["Shift"]) && this.isCheckboxList) {
          n.preventDefault();
          var I = this.focusFirstElement();
          I !== -1 && this.setSelectedIndexOnAction(I, !1);
        }
        if (this.hasTypeahead) {
          var _ = {
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
          nu(_, this.typeaheadState);
        }
        return;
      }
      var E = this.adapter.getFocusedElementIndex();
      if (!(E === -1 && (E = i, E < 0))) {
        if (g && S([]))
          An(n), this.focusNextElement(E);
        else if (b && S([]))
          An(n), this.focusPrevElement(E);
        else if (g && S(["Shift"]) && this.isCheckboxList) {
          An(n);
          var I = this.focusNextElement(E);
          I !== -1 && this.setSelectedIndexOnAction(I, !1);
        } else if (b && S(["Shift"]) && this.isCheckboxList) {
          An(n);
          var I = this.focusPrevElement(E);
          I !== -1 && this.setSelectedIndexOnAction(I, !1);
        } else if (v && S([]))
          An(n), this.focusFirstElement();
        else if (f && S([]))
          An(n), this.focusLastElement();
        else if (v && S(["Control", "Shift"]) && this.isCheckboxList) {
          if (An(n), this.isIndexDisabled(E))
            return;
          this.focusFirstElement(), this.toggleCheckboxRange(0, E, E);
        } else if (f && S(["Control", "Shift"]) && this.isCheckboxList) {
          if (An(n), this.isIndexDisabled(E))
            return;
          this.focusLastElement(), this.toggleCheckboxRange(E, this.adapter.getListItemCount() - 1, E);
        } else if (y && S(["Control"]) && this.isCheckboxList)
          n.preventDefault(), this.checkboxListToggleAll(this.selectedIndex === Et.UNSET_INDEX ? [] : this.selectedIndex, !0);
        else if ((m || h) && S([])) {
          if (r) {
            var C = n.target;
            if (C && C.tagName === "A" && m || (An(n), this.isIndexDisabled(E)))
              return;
            this.isTypeaheadInProgress() || (this.isSelectableList() && this.setSelectedIndexOnAction(E, !1), this.adapter.notifyAction(E));
          }
        } else if ((m || h) && S(["Shift"]) && this.isCheckboxList) {
          var C = n.target;
          if (C && C.tagName === "A" && m || (An(n), this.isIndexDisabled(E)))
            return;
          this.isTypeaheadInProgress() || (this.toggleCheckboxRange((o = this.lastSelectedIndex) !== null && o !== void 0 ? o : E, E, E), this.adapter.notifyAction(E));
        }
        if (this.hasTypeahead) {
          var _ = {
            event: n,
            focusItemAtIndex: function(x) {
              a.focusItemAtIndex(x);
            },
            focusedItemIndex: this.focusedItemIndex,
            isTargetListItem: r,
            sortedIndexByFirstChar: this.sortedIndexByFirstChar,
            isItemAtIndexDisabled: function(x) {
              return a.isIndexDisabled(x);
            }
          };
          nu(_, this.typeaheadState);
        }
      }
    }, e.prototype.handleClick = function(n, r, i) {
      var a, o = ru(i);
      n !== Et.UNSET_INDEX && (this.isIndexDisabled(n) || (o([]) ? (this.isSelectableList() && this.setSelectedIndexOnAction(n, r), this.adapter.notifyAction(n)) : this.isCheckboxList && o(["Shift"]) && (this.toggleCheckboxRange((a = this.lastSelectedIndex) !== null && a !== void 0 ? a : n, n, n), this.adapter.notifyAction(n))));
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
      this.isIndexValid(n, !1) && (r ? (this.adapter.removeClassForElementIndex(n, Xe.LIST_ITEM_DISABLED_CLASS), this.adapter.setAttributeForElementIndex(n, Sr.ARIA_DISABLED, "false")) : (this.adapter.addClassForElementIndex(n, Xe.LIST_ITEM_DISABLED_CLASS), this.adapter.setAttributeForElementIndex(n, Sr.ARIA_DISABLED, "true")));
    }, e.prototype.setSingleSelectionAtIndex = function(n, r) {
      if (r === void 0 && (r = {}), !(this.selectedIndex === n && !r.forceUpdate)) {
        var i = Xe.LIST_ITEM_SELECTED_CLASS;
        this.useActivatedClass && (i = Xe.LIST_ITEM_ACTIVATED_CLASS), this.selectedIndex !== Et.UNSET_INDEX && this.adapter.removeClassForElementIndex(this.selectedIndex, i), this.setAriaForSingleSelectionAtIndex(n), this.setTabindexAtIndex(n), n !== Et.UNSET_INDEX && this.adapter.addClassForElementIndex(n, i), this.selectedIndex = n, r.isUserInteraction && !r.forceUpdate && this.adapter.notifySelectionChange([n]);
      }
    }, e.prototype.setAriaForSingleSelectionAtIndex = function(n) {
      this.selectedIndex === Et.UNSET_INDEX && (this.ariaCurrentAttrValue = this.adapter.getAttributeForElementIndex(n, Sr.ARIA_CURRENT));
      var r = this.ariaCurrentAttrValue !== null, i = r ? Sr.ARIA_CURRENT : Sr.ARIA_SELECTED;
      if (this.selectedIndex !== Et.UNSET_INDEX && this.adapter.setAttributeForElementIndex(this.selectedIndex, i, "false"), n !== Et.UNSET_INDEX) {
        var a = r ? this.ariaCurrentAttrValue : "true";
        this.adapter.setAttributeForElementIndex(n, i, a);
      }
    }, e.prototype.getSelectionAttribute = function() {
      return this.useSelectedAttr ? Sr.ARIA_SELECTED : Sr.ARIA_CHECKED;
    }, e.prototype.setRadioAtIndex = function(n, r) {
      r === void 0 && (r = {});
      var i = this.getSelectionAttribute();
      this.adapter.setCheckedCheckboxOrRadioAtIndex(n, !0), !(this.selectedIndex === n && !r.forceUpdate) && (this.selectedIndex !== Et.UNSET_INDEX && this.adapter.setAttributeForElementIndex(this.selectedIndex, i, "false"), this.adapter.setAttributeForElementIndex(n, i, "true"), this.selectedIndex = n, r.isUserInteraction && !r.forceUpdate && this.adapter.notifySelectionChange([n]));
    }, e.prototype.setCheckboxAtIndex = function(n, r) {
      r === void 0 && (r = {});
      for (var i = this.selectedIndex, a = r.isUserInteraction ? new Set(i === Et.UNSET_INDEX ? [] : i) : null, o = this.getSelectionAttribute(), u = [], l = 0; l < this.adapter.getListItemCount(); l++) {
        var c = a == null ? void 0 : a.has(l), d = n.indexOf(l) >= 0;
        d !== c && u.push(l), this.adapter.setCheckedCheckboxOrRadioAtIndex(l, d), this.adapter.setAttributeForElementIndex(l, o, d ? "true" : "false");
      }
      this.selectedIndex = n, r.isUserInteraction && u.length && this.adapter.notifySelectionChange(u);
    }, e.prototype.toggleCheckboxRange = function(n, r, i) {
      this.lastSelectedIndex = i;
      for (var a = new Set(this.selectedIndex === Et.UNSET_INDEX ? [] : this.selectedIndex), o = !(a != null && a.has(i)), u = mr([n, r].sort(), 2), l = u[0], c = u[1], d = this.getSelectionAttribute(), v = [], f = l; f <= c; f++)
        if (!this.isIndexDisabled(f)) {
          var m = a.has(f);
          o !== m && (v.push(f), this.adapter.setCheckedCheckboxOrRadioAtIndex(f, o), this.adapter.setAttributeForElementIndex(f, d, "" + o), o ? a.add(f) : a.delete(f));
        }
      v.length && (this.selectedIndex = Jn([], mr(a)), this.adapter.notifySelectionChange(v));
    }, e.prototype.setTabindexAtIndex = function(n) {
      this.focusedItemIndex === Et.UNSET_INDEX && n !== 0 ? this.adapter.setAttributeForElementIndex(0, "tabindex", "-1") : this.focusedItemIndex >= 0 && this.focusedItemIndex !== n && this.adapter.setAttributeForElementIndex(this.focusedItemIndex, "tabindex", "-1"), !(this.selectedIndex instanceof Array) && this.selectedIndex !== n && this.adapter.setAttributeForElementIndex(this.selectedIndex, "tabindex", "-1"), n !== Et.UNSET_INDEX && this.adapter.setAttributeForElementIndex(n, "tabindex", "0");
    }, e.prototype.isSelectableList = function() {
      return this.isSingleSelectionList || this.isCheckboxList || this.isRadioList;
    }, e.prototype.setTabindexToFirstSelectedOrFocusedItem = function() {
      var n = this.getFirstSelectedOrFocusedItemIndex();
      this.setTabindexAtIndex(n);
    }, e.prototype.getFirstSelectedOrFocusedItemIndex = function() {
      return this.isSelectableList() ? typeof this.selectedIndex == "number" && this.selectedIndex !== Et.UNSET_INDEX ? this.selectedIndex : Dg(this.selectedIndex) && this.selectedIndex.length > 0 ? this.selectedIndex.reduce(function(n, r) {
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
        return this.isIndexInRange(n) || this.isSingleSelectionList && n === Et.UNSET_INDEX;
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
      var u = this.selectedIndex === Et.UNSET_INDEX ? [] : this.selectedIndex.slice();
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
      return Ds(o, this.typeaheadState);
    }, e.prototype.typeaheadInitSortedIndex = function() {
      return Og(this.adapter.getListItemCount(), this.adapter.getPrimaryTextAtIndex);
    }, e.prototype.clearTypeaheadBuffer = function() {
      nd(this.typeaheadState);
    }, e;
  }(Tt)
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
var rd = (
  /** @class */
  function(t) {
    Ve(e, t);
    function e(n) {
      var r = t.call(this, ue(ue({}, e.defaultAdapter), n)) || this;
      return r.isSurfaceOpen = !1, r.isQuickOpen = !1, r.isHoistedElement = !1, r.isFixedPosition = !1, r.isHorizontallyCenteredOnViewport = !1, r.maxHeight = 0, r.openBottomBias = 0, r.openAnimationEndTimerId = 0, r.closeAnimationEndTimerId = 0, r.animationRequestId = 0, r.anchorCorner = si.TOP_START, r.originCorner = si.TOP_START, r.anchorMargin = { top: 0, right: 0, bottom: 0, left: 0 }, r.position = { x: 0, y: 0 }, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return xg;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Tg;
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
        return si;
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
      var r = this.getoriginCorner(), i = this.getMenuSurfaceMaxHeight(r), a = this.hasBit(r, St.BOTTOM) ? "bottom" : "top", o = this.hasBit(r, St.RIGHT) ? "right" : "left", u = this.getHorizontalOriginOffset(r), l = this.getVerticalOriginOffset(r), c = this.measurements, d = c.anchorSize, v = c.surfaceSize, f = (n = {}, n[o] = u, n[a] = l, n);
      d.width / v.width > va.ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO && (o = "center"), (this.isHoistedElement || this.isFixedPosition) && this.adjustPositionForHoistedElement(f), this.adapter.setTransformOrigin(o + " " + a), this.adapter.setPosition(f), this.adapter.setMaxHeight(i ? i + "px" : ""), this.hasBit(r, St.BOTTOM) || this.adapter.addClass(e.cssClasses.IS_OPEN_BELOW);
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
      var v = d - o.height > 0;
      !v && c > d + this.openBottomBias && (n = this.setBit(n, St.BOTTOM));
      var f = this.adapter.isRtl(), m = this.hasBit(this.anchorCorner, St.FLIP_RTL), h = this.hasBit(this.anchorCorner, St.RIGHT) || this.hasBit(n, St.RIGHT), g = !1;
      f && m ? g = !h : g = h;
      var b, y;
      g ? (b = i.left + a.width + this.anchorMargin.right, y = i.right - this.anchorMargin.right) : (b = i.left + this.anchorMargin.left, y = i.right + a.width - this.anchorMargin.left);
      var S = b - o.width > 0, I = y - o.width > 0, _ = this.hasBit(n, St.FLIP_RTL) && this.hasBit(n, St.RIGHT);
      return I && _ && f || !S && _ ? n = this.unsetBit(n, St.RIGHT) : (S && g && f || S && !g && h || !I && b >= y) && (n = this.setBit(n, St.RIGHT)), n;
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
        for (var v = Ht(d), f = v.next(); !f.done; f = v.next()) {
          var m = f.value, h = n[m] || 0;
          if (this.isHorizontallyCenteredOnViewport && (m === "left" || m === "right")) {
            n[m] = (c.width - l.width) / 2;
            continue;
          }
          h += u[m], this.isFixedPosition || (m === "top" ? h += o.y : m === "bottom" ? h -= o.y : m === "left" ? h += o.x : h -= o.x), n[m] = h;
        }
      } catch (g) {
        r = { error: g };
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
  }(Tt)
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
function Hg(t) {
  return !!t.document && typeof t.document.createElement == "function";
}
function Ug(t, e) {
  if (Hg(t) && e in iu) {
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
var Hi = {
  MENU_SELECTED_LIST_ITEM: "mdc-menu-item--selected",
  MENU_SELECTION_GROUP: "mdc-menu__selection-group",
  ROOT: "mdc-menu"
}, wi = {
  ARIA_CHECKED_ATTR: "aria-checked",
  ARIA_DISABLED_ATTR: "aria-disabled",
  CHECKBOX_SELECTOR: 'input[type="checkbox"]',
  LIST_SELECTOR: ".mdc-list,.mdc-deprecated-list",
  SELECTED_EVENT: "MDCMenu:selected",
  SKIP_RESTORE_FOCUS: "data-menu-item-skip-restore-focus"
}, kg = {
  FOCUS_ROOT_INDEX: -1
}, Mi;
(function(t) {
  t[t.NONE = 0] = "NONE", t[t.LIST_ROOT = 1] = "LIST_ROOT", t[t.FIRST_ITEM = 2] = "FIRST_ITEM", t[t.LAST_ITEM = 3] = "LAST_ITEM";
})(Mi || (Mi = {}));
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
var Bg = (
  /** @class */
  function(t) {
    Ve(e, t);
    function e(n) {
      var r = t.call(this, ue(ue({}, e.defaultAdapter), n)) || this;
      return r.closeAnimationEndTimerId = 0, r.defaultFocusState = Mi.LIST_ROOT, r.selectedIndex = -1, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Hi;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return wi;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return kg;
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
        var a = this.adapter.getAttributeFromElementAtIndex(i, wi.SKIP_RESTORE_FOCUS) === "true";
        this.adapter.closeSurface(a), this.closeAnimationEndTimerId = setTimeout(function() {
          var o = r.adapter.getElementIndex(n);
          o >= 0 && r.adapter.isSelectableItemAtIndex(o) && r.setSelectedIndex(o);
        }, rd.numbers.TRANSITION_CLOSE_DURATION);
      }
    }, e.prototype.handleMenuSurfaceOpened = function() {
      switch (this.defaultFocusState) {
        case Mi.FIRST_ITEM:
          this.adapter.focusItemAtIndex(0);
          break;
        case Mi.LAST_ITEM:
          this.adapter.focusItemAtIndex(this.adapter.getMenuItemCount() - 1);
          break;
        case Mi.NONE:
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
      r >= 0 && (this.adapter.removeAttributeFromElementAtIndex(r, wi.ARIA_CHECKED_ATTR), this.adapter.removeClassFromElementAtIndex(r, Hi.MENU_SELECTED_LIST_ITEM)), this.adapter.addClassToElementAtIndex(n, Hi.MENU_SELECTED_LIST_ITEM), this.adapter.addAttributeToElementAtIndex(n, wi.ARIA_CHECKED_ATTR, "true"), this.selectedIndex = n;
    }, e.prototype.setEnabled = function(n, r) {
      this.validatedIndex(n), r ? (this.adapter.removeClassFromElementAtIndex(n, Xe.LIST_ITEM_DISABLED_CLASS), this.adapter.addAttributeToElementAtIndex(n, wi.ARIA_DISABLED_ATTR, "false")) : (this.adapter.addClassToElementAtIndex(n, Xe.LIST_ITEM_DISABLED_CLASS), this.adapter.addAttributeToElementAtIndex(n, wi.ARIA_DISABLED_ATTR, "true"));
    }, e.prototype.validatedIndex = function(n) {
      var r = this.adapter.getMenuItemCount(), i = n >= 0 && n < r;
      if (!i)
        throw new Error("MDCMenuFoundation: No list item at specified index.");
    }, e;
  }(Tt)
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
var gt = {
  ACTIVATED: "mdc-select--activated",
  DISABLED: "mdc-select--disabled",
  FOCUSED: "mdc-select--focused",
  INVALID: "mdc-select--invalid",
  MENU_INVALID: "mdc-select__menu--invalid",
  OUTLINED: "mdc-select--outlined",
  REQUIRED: "mdc-select--required",
  ROOT: "mdc-select",
  WITH_LEADING_ICON: "mdc-select--with-leading-icon"
}, is = {
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
var Fg = (
  /** @class */
  function(t) {
    Ve(e, t);
    function e(n, r) {
      r === void 0 && (r = {});
      var i = t.call(this, ue(ue({}, e.defaultAdapter), n)) || this;
      return i.disabled = !1, i.isMenuOpen = !1, i.useDefaultValidation = !0, i.customValidity = !0, i.lastSelectedIndex = Xr.UNSET_INDEX, i.clickDebounceTimeout = 0, i.recentlyClicked = !1, i.leadingIcon = r.leadingIcon, i.helperText = r.helperText, i;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return gt;
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
        return is;
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
      this.disabled = n, this.disabled ? (this.adapter.addClass(gt.DISABLED), this.adapter.closeMenu()) : this.adapter.removeClass(gt.DISABLED), this.leadingIcon && this.leadingIcon.setDisabled(this.disabled), this.disabled ? this.adapter.removeSelectAnchorAttr("tabindex") : this.adapter.setSelectAnchorAttr("tabindex", "0"), this.adapter.setSelectAnchorAttr("aria-disabled", this.disabled.toString());
    }, e.prototype.openMenu = function() {
      this.adapter.addClass(gt.ACTIVATED), this.adapter.openMenu(), this.isMenuOpen = !0, this.adapter.setSelectAnchorAttr("aria-expanded", "true");
    }, e.prototype.setHelperTextContent = function(n) {
      this.helperText && this.helperText.setContent(n);
    }, e.prototype.layout = function() {
      if (this.adapter.hasLabel()) {
        var n = this.getValue().length > 0, r = this.adapter.hasClass(gt.FOCUSED), i = n || r, a = this.adapter.hasClass(gt.REQUIRED);
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
      this.adapter.removeClass(gt.ACTIVATED), this.isMenuOpen = !1, this.adapter.isSelectAnchorFocused() || this.blur();
    }, e.prototype.handleChange = function() {
      this.layout(), this.adapter.notifyChange(this.getValue());
      var n = this.adapter.hasClass(gt.REQUIRED);
      n && this.useDefaultValidation && this.setValid(this.isValid());
    }, e.prototype.handleMenuItemAction = function(n) {
      this.setSelectedIndex(
        n,
        /** closeMenu */
        !0
      );
    }, e.prototype.handleFocus = function() {
      this.adapter.addClass(gt.FOCUSED), this.layout(), this.adapter.activateBottomLine();
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
      if (!(this.isMenuOpen || !this.adapter.hasClass(gt.FOCUSED))) {
        var r = Ct(n) === Be.ENTER, i = Ct(n) === Be.SPACEBAR, a = Ct(n) === Be.ARROW_UP, o = Ct(n) === Be.ARROW_DOWN, u = n.ctrlKey || n.metaKey;
        if (!u && (!i && n.key && n.key.length === 1 || i && this.adapter.isTypeaheadInProgress())) {
          var l = i ? " " : n.key, c = this.adapter.typeaheadMatchItem(l, this.getSelectedIndex());
          c >= 0 && this.setSelectedIndex(c), n.preventDefault();
          return;
        }
        !r && !i && !a && !o || (this.openMenu(), n.preventDefault());
      }
    }, e.prototype.notchOutline = function(n) {
      if (this.adapter.hasOutline()) {
        var r = this.adapter.hasClass(gt.FOCUSED);
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
      this.useDefaultValidation || (this.customValidity = n), this.adapter.setSelectAnchorAttr("aria-invalid", (!n).toString()), n ? (this.adapter.removeClass(gt.INVALID), this.adapter.removeMenuClass(gt.MENU_INVALID)) : (this.adapter.addClass(gt.INVALID), this.adapter.addMenuClass(gt.MENU_INVALID)), this.syncHelperTextValidity(n);
    }, e.prototype.isValid = function() {
      return this.useDefaultValidation && this.adapter.hasClass(gt.REQUIRED) && !this.adapter.hasClass(gt.DISABLED) ? this.getSelectedIndex() !== Xr.UNSET_INDEX && (this.getSelectedIndex() !== 0 || !!this.getValue()) : this.customValidity;
    }, e.prototype.setRequired = function(n) {
      n ? this.adapter.addClass(gt.REQUIRED) : this.adapter.removeClass(gt.REQUIRED), this.adapter.setSelectAnchorAttr("aria-required", n.toString()), this.adapter.setLabelRequired(n);
    }, e.prototype.getRequired = function() {
      return this.adapter.getSelectAnchorAttr("aria-required") === "true";
    }, e.prototype.init = function() {
      var n = this.adapter.getAnchorElement();
      n && (this.adapter.setMenuAnchorElement(n), this.adapter.setMenuAnchorCorner(si.BOTTOM_START)), this.adapter.setMenuWrapFocus(!1), this.setDisabled(this.adapter.hasClass(gt.DISABLED)), this.syncHelperTextValidity(!this.adapter.hasClass(gt.INVALID)), this.layout(), this.layoutOptions();
    }, e.prototype.blur = function() {
      this.adapter.removeClass(gt.FOCUSED), this.layout(), this.adapter.deactivateBottomLine();
      var n = this.adapter.hasClass(gt.REQUIRED);
      n && this.useDefaultValidation && this.setValid(this.isValid());
    }, e.prototype.syncHelperTextValidity = function(n) {
      if (this.helperText) {
        this.helperText.setValidity(n);
        var r = this.helperText.isVisible(), i = this.helperText.getId();
        r && i ? this.adapter.setSelectAnchorAttr(is.ARIA_DESCRIBEDBY, i) : this.adapter.removeSelectAnchorAttr(is.ARIA_DESCRIBEDBY);
      }
    }, e.prototype.setClickDebounceTimeout = function() {
      var n = this;
      clearTimeout(this.clickDebounceTimeout), this.clickDebounceTimeout = setTimeout(function() {
        n.recentlyClicked = !1;
      }, Xr.CLICK_DEBOUNCE_TIMEOUT_MS), this.recentlyClicked = !0;
    }, e;
  }(Tt)
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
var Vg = (
  /** @class */
  function(t) {
    Ve(e, t);
    function e(n) {
      return t.call(this, ue(ue({}, e.defaultAdapter), n)) || this;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return lr;
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
  }(Tt)
), Gg = /* @__PURE__ */ de("<div><!></div>");
function jg(t, e) {
  Ce(e, !0);
  let n = p(e, "use", 19, () => []), r = p(e, "class", 3, ""), i = p(e, "style", 3, ""), a = p(e, "static", 3, !1), o = p(e, "anchor", 3, !0), u = p(e, "fixed", 3, !1), l = p(e, "open", 31, () => ce(a())), c = p(e, "managed", 3, !1), d = p(e, "fullWidth", 3, !1), v = p(e, "quickOpen", 3, !1), f = p(e, "anchorElement", 15), m = p(e, "anchorMargin", 19, () => ({ top: 0, right: 0, bottom: 0, left: 0 })), h = p(e, "maxHeight", 3, 0), g = p(e, "horizontallyCenteredOnViewport", 3, !1), b = p(e, "openBottomBias", 3, 0), y = p(e, "neverRestoreFocus", 3, !1), S = /* @__PURE__ */ qe(e, [
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
  ]), I, _ = /* @__PURE__ */ ve(void 0), E = ce({}), C = ce({}), w = /* @__PURE__ */ ve(void 0);
  oe("SMUI:list:role", "menu"), oe("SMUI:list:item:role", "menuitem"), Te(() => {
    var F, ee;
    I && o() && !((F = I.parentElement) != null && F.classList.contains("mdc-menu-surface--anchor")) && ((ee = I.parentElement) == null || ee.classList.add("mdc-menu-surface--anchor"), f(I.parentElement ?? void 0));
  }), Te(() => {
    s(_) && s(_).isOpen() !== l() && (l() ? s(_).open() : s(_).close());
  }), Te(() => {
    s(_) && s(_).setQuickOpen(v());
  }), Te(() => {
    s(_) && s(_).setFixedPosition(u());
  }), Te(() => {
    s(_) && s(_).setMaxHeight(h());
  }), Te(() => {
    s(_) && s(_).setIsHorizontallyCenteredOnViewport(g());
  });
  const x = si;
  Te(() => {
    s(_) && e.anchorCorner != null && (typeof e.anchorCorner == "string" ? s(_).setAnchorCorner(x[e.anchorCorner]) : s(_).setAnchorCorner(e.anchorCorner));
  }), Te(() => {
    s(_) && s(_).setAnchorMargin(m());
  }), Te(() => {
    s(_) && s(_).setOpenBottomBias(b());
  });
  const T = me("SMUI:menu-surface:mount"), B = me("SMUI:menu-surface:unmount");
  rt(() => {
    X(
      _,
      new rd({
        addClass: M,
        removeClass: P,
        hasClass: K,
        hasAnchor: () => !!f(),
        notifyClose: () => {
          c() || l(a()), l() || Je(j(), "SMUIMenuSurfaceClosed");
        },
        notifyClosing: () => {
          c() || l(a()), l() || Je(j(), "SMUIMenuSurfaceClosing");
        },
        notifyOpen: () => {
          c() || l(!0), l() && Je(j(), "SMUIMenuSurfaceOpened");
        },
        notifyOpening: () => {
          l() || Je(j(), "SMUIMenuSurfaceOpening");
        },
        isElementInContainer: (ee) => j().contains(ee),
        isRtl: () => getComputedStyle(j()).getPropertyValue("direction") === "rtl",
        setTransformOrigin: (ee) => {
          C["transform-origin"] = ee;
        },
        isFocused: () => document.activeElement === j(),
        saveFocus: () => {
          X(w, document.activeElement ?? void 0, !0);
        },
        restoreFocus: () => {
          !y() && (!I || j().contains(document.activeElement)) && s(w) && document.contains(s(w)) && "focus" in s(w) && s(w).focus();
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
        setPosition: (ee) => {
          C.left = "left" in ee ? `${ee.left}px` : "", C.right = "right" in ee ? `${ee.right}px` : "", C.top = "top" in ee ? `${ee.top}px` : "", C.bottom = "bottom" in ee ? `${ee.bottom}px` : "";
        },
        setMaxHeight: (ee) => {
          C["max-height"] = ee;
        }
      }),
      !0
    );
    const F = {
      get open() {
        return l();
      },
      set open(ee) {
        l(ee);
      },
      closeProgrammatic: O
    };
    return T && T(F), s(_).init(), () => {
      var Q, fe;
      B && B(F);
      const ee = s(_).isHoistedElement;
      (Q = s(_)) == null || Q.destroy(), ee && ((fe = j().parentNode) == null || fe.removeChild(j()));
    };
  }), Mn(() => {
    var F;
    o() && j() && ((F = j().parentElement) == null || F.classList.remove("mdc-menu-surface--anchor"));
  });
  function K(F) {
    return F in E ? E[F] : j().classList.contains(F);
  }
  function M(F) {
    E[F] || (E[F] = !0);
  }
  function P(F) {
    (!(F in E) || E[F]) && (E[F] = !1);
  }
  function O(F) {
    var ee;
    (ee = s(_)) == null || ee.close(F), l(!1);
  }
  function A(F) {
    s(_) && l() && !c() && s(_).handleBodyClick(F);
  }
  function N() {
    return l();
  }
  function U(F) {
    l(F);
  }
  function q(F, ee) {
    if (s(_) == null)
      throw new Error("Instance is not defined.");
    return s(_).setAbsolutePosition(F, ee);
  }
  function J(F) {
    if (s(_) == null)
      throw new Error("Instance is not defined.");
    return s(_).setIsHoisted(F);
  }
  function H() {
    if (s(_) == null)
      throw new Error("Instance is not defined.");
    return s(_).isFixed();
  }
  function R() {
    if (s(_) == null)
      throw new Error("Instance is not defined.");
    return s(_).flipCornerHorizontally();
  }
  function j() {
    return I;
  }
  var Ae = {
    isOpen: N,
    setOpen: U,
    setAbsolutePosition: q,
    setIsHoisted: J,
    isFixed: H,
    flipCornerHorizontally: R,
    getElement: j
  }, be = Gg();
  ya("click", Xu.body, A, !0);
  var V = (F) => {
    var ee;
    s(_) && !c() && s(_).handleKeydown(F), (ee = e.onkeydown) == null || ee.call(e, F);
  };
  Ue(
    be,
    (F, ee) => ({
      class: F,
      style: ee,
      role: "dialog",
      ...S,
      onkeydown: V
    }),
    [
      () => De({
        "mdc-menu-surface": !0,
        "mdc-menu-surface--fixed": u(),
        "mdc-menu-surface--open": a(),
        "smui-menu-surface--static": a(),
        "mdc-menu-surface--fullwidth": d(),
        ...E,
        [r()]: !0
      }),
      () => Object.entries(C).map(([F, ee]) => `${F}: ${ee};`).concat([i()]).join(" ")
    ]
  );
  var G = se(be);
  return Se(G, () => e.children ?? pe), Ee(be, (F) => I = F, () => I), Me(be, (F, ee) => W == null ? void 0 : W(F, ee), n), L(t, be), xe(Ae);
}
function as(t, { addClass: e = (r) => t.classList.add(r), removeClass: n = (r) => t.classList.remove(r) } = {}) {
  return e("mdc-menu-surface--anchor"), {
    destroy() {
      n("mdc-menu-surface--anchor");
    }
  };
}
function Wg(t, e) {
  Ce(e, !0);
  const { closest: n } = Ga;
  let r = p(e, "use", 19, () => []), i = p(e, "class", 3, ""), a = p(e, "open", 15, !1), o = p(e, "anchorElement", 15), u = p(e, "managed", 3, !1), l = /* @__PURE__ */ qe(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "open",
    "anchorElement",
    "managed",
    "children"
  ]), c, d = /* @__PURE__ */ ve(void 0), v = /* @__PURE__ */ ve(void 0), f = /* @__PURE__ */ ve(void 0);
  oe("SMUI:menu-surface:mount", (x) => {
    s(v) || X(v, x, !0);
  });
  const m = me("SMUI:list:mount");
  oe("SMUI:list:mount", (x) => {
    s(f) || X(f, x, !0), m && m(x);
  });
  const h = me("SMUI:menu:mount"), g = me("SMUI:menu:unmount");
  rt(() => (X(
    d,
    new Bg({
      addClassToElementAtIndex: (x, T) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        s(f).addClassForElementIndex(x, T);
      },
      removeClassFromElementAtIndex: (x, T) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        s(f).removeClassForElementIndex(x, T);
      },
      addAttributeToElementAtIndex: (x, T, B) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        s(f).setAttributeForElementIndex(x, T, B);
      },
      removeAttributeFromElementAtIndex: (x, T) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        s(f).removeAttributeForElementIndex(x, T);
      },
      getAttributeFromElementAtIndex: (x, T) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        return s(f).getAttributeFromElementIndex(x, T);
      },
      elementContainsClass: (x, T) => x.classList.contains(T),
      closeSurface: (x) => {
        var T;
        u() || ((T = s(v)) == null || T.closeProgrammatic(x), Je(C(), "SMUIMenuClosedProgrammatically"));
      },
      getElementIndex: (x) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        return s(f).getOrderedList().map((T) => T.element).indexOf(x);
      },
      notifySelected: (x) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        Je(C(), "SMUIMenuSelected", {
          index: x.index,
          item: s(f).getOrderedList()[x.index].element
        });
      },
      getMenuItemCount: () => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        return s(f).items.length;
      },
      focusItemAtIndex: (x) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        s(f).focusItemAtIndex(x);
      },
      focusListRoot: () => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        "focus" in s(f).element && s(f).element.focus();
      },
      isSelectableItemAtIndex: (x) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        return !!n(s(f).getOrderedList()[x].element, `.${Hi.MENU_SELECTION_GROUP}`);
      },
      getSelectedSiblingOfItemAtIndex: (x) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        const T = s(f).getOrderedList(), B = n(T[x].element, `.${Hi.MENU_SELECTION_GROUP}`), K = B == null ? void 0 : B.querySelector(`.${Hi.MENU_SELECTED_LIST_ITEM}`);
        return K ? T.map((M) => M.element).indexOf(K) : -1;
      }
    }),
    !0
  ), h && h(s(d)), s(d).init(), () => {
    var x;
    g && s(d) && g(s(d)), (x = s(d)) == null || x.destroy();
  }));
  function b(x) {
    s(d) && s(d).handleKeydown(x);
  }
  function y() {
    return a();
  }
  function S(x) {
    a(x);
  }
  function I(x) {
    if (s(d) == null)
      throw new Error("Instance is undefined.");
    s(d).setDefaultFocusState(x);
  }
  function _() {
    if (s(d) == null)
      throw new Error("Instance is undefined.");
    return s(d).getSelectedIndex();
  }
  function E() {
    return c;
  }
  function C() {
    return c.getElement();
  }
  var w = {
    isOpen: y,
    setOpen: S,
    setDefaultFocusState: I,
    getSelectedIndex: _,
    getMenuSurface: E,
    getElement: C
  };
  {
    let x = /* @__PURE__ */ ge(() => De({ "mdc-menu": !0, [i()]: !0 }));
    Ee(
      jg(t, nt(
        {
          get use() {
            return r();
          },
          get class() {
            return s(x);
          },
          get managed() {
            return u();
          }
        },
        () => l,
        {
          onkeydown: (T) => {
            var B;
            b(T), (B = e.onkeydown) == null || B.call(e, T);
          },
          onSMUIMenuSurfaceOpened: (T) => {
            var B;
            s(d) && s(d).handleMenuSurfaceOpened(), (B = e.onSMUIMenuSurfaceOpened) == null || B.call(e, T);
          },
          onSMUIListAction: (T) => {
            var B;
            s(d) && s(f) && s(d).handleItemAction(s(f).getOrderedList()[T.detail.index].element), (B = e.onSMUIListAction) == null || B.call(e, T);
          },
          get open() {
            return a();
          },
          set open(T) {
            a(T);
          },
          get anchorElement() {
            return o();
          },
          set anchorElement(T) {
            o(T);
          },
          children: (T, B) => {
            var K = ne(), M = Z(K);
            Se(M, () => e.children ?? pe), L(T, K);
          },
          $$slots: { default: !0 }
        }
      )),
      (T) => c = T,
      () => c
    );
  }
  return xe(w);
}
function qg(t, e) {
  Ce(e, !0);
  const { closest: n, matches: r } = Ga;
  let i = me("SMUI:list:nav"), a = p(e, "use", 19, () => []), o = p(e, "class", 3, ""), u = p(e, "nonInteractive", 3, !1), l = p(e, "dense", 3, !1), c = p(e, "textualList", 3, !1), d = p(e, "avatarList", 3, !1), v = p(e, "iconList", 3, !1), f = p(e, "imageList", 3, !1), m = p(e, "thumbnailList", 3, !1), h = p(e, "videoList", 3, !1), g = p(e, "twoLine", 3, !1), b = p(e, "threeLine", 3, !1), y = p(e, "vertical", 3, !0), S = p(e, "wrapFocus", 19, () => me("SMUI:list:wrapFocus") ?? !1), I = p(e, "singleSelection", 3, !1), _ = p(e, "disabledItemsFocusable", 3, !1), E = p(e, "selectedIndex", 31, () => -1), C = p(e, "radioList", 3, !1), w = p(e, "checkList", 3, !1), x = p(e, "hasTypeahead", 3, !1), T = p(e, "component", 3, Vr), B = p(e, "tag", 3, i ? "nav" : "ul"), K = /* @__PURE__ */ qe(e, [
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
  ]), M, P = /* @__PURE__ */ ve(void 0), O = [], A = me("SMUI:list:role");
  const N = /* @__PURE__ */ new WeakMap();
  let U = me("SMUI:dialog:selection"), q = me("SMUI:addLayoutListener"), J;
  oe("SMUI:list:nonInteractive", u()), oe("SMUI:separator:context", "list"), A || (I() ? (A = "listbox", oe("SMUI:list:item:role", "option")) : C() ? (A = "radiogroup", oe("SMUI:list:item:role", "radio")) : w() ? (A = "group", oe("SMUI:list:item:role", "checkbox")) : (A = "list", oe("SMUI:list:item:role", void 0))), Te(() => {
    s(P) && s(P).setVerticalOrientation(y());
  }), Te(() => {
    s(P) && s(P).setWrapFocus(S());
  }), Te(() => {
    s(P) && s(P).setHasTypeahead(x());
  }), Te(() => {
    s(P) && s(P).setSingleSelection(I());
  }), Te(() => {
    s(P) && s(P).setDisabledItemsFocusable(_());
  }), Te(() => {
    s(P) && I() && k() !== E() && s(P).setSelectedIndex(E());
  }), q && (J = q(We)), oe("SMUI:list:item:mount", (le) => {
    O.push(le), N.set(le.element, le), I() && le.selected && E(Le(le.element));
  }), oe("SMUI:list:item:unmount", (le) => {
    const ye = (le && O.findIndex((Y) => Y === le)) ?? -1;
    ye !== -1 && (O.splice(ye, 1), N.delete(le.element));
  });
  const H = me("SMUI:list:mount"), R = me("SMUI:list:unmount");
  rt(() => {
    X(
      P,
      new Ng({
        addClassForElementIndex: Q,
        focusItemAtIndex: he,
        getAttributeForElementIndex: (ye, Y) => {
          var te;
          return ((te = F()[ye]) == null ? void 0 : te.getAttr(Y)) ?? null;
        },
        getFocusedElementIndex: () => document.activeElement ? F().map((ye) => ye.element).indexOf(document.activeElement) : -1,
        getListItemCount: () => O.length,
        getPrimaryTextAtIndex: Pe,
        hasCheckboxAtIndex: (ye) => {
          var Y;
          return ((Y = F()[ye]) == null ? void 0 : Y.hasCheckbox) ?? !1;
        },
        hasRadioAtIndex: (ye) => {
          var Y;
          return ((Y = F()[ye]) == null ? void 0 : Y.hasRadio) ?? !1;
        },
        isCheckboxCheckedAtIndex: (ye) => {
          const Y = F()[ye];
          return ((Y == null ? void 0 : Y.hasCheckbox) && Y.checked) ?? !1;
        },
        isFocusInsideList: () => M != null && Re() !== document.activeElement && Re().contains(document.activeElement),
        isRootFocused: () => M != null && document.activeElement === Re(),
        listItemAtIndexHasClass: ee,
        notifyAction: (ye) => {
          E(ye), M != null && Je(Re(), "SMUIListAction", { index: ye });
        },
        notifySelectionChange: (ye) => {
          M != null && Je(Re(), "SMUIListSelectionChange", { changedIndices: ye });
        },
        removeClassForElementIndex: fe,
        setAttributeForElementIndex: we,
        setCheckedCheckboxOrRadioAtIndex: (ye, Y) => {
          F()[ye].checked = Y;
        },
        setTabIndexForListItemChildren: (ye, Y) => {
          const te = F()[ye];
          Array.prototype.forEach.call(te.element.querySelectorAll("button:not(:disabled), a"), (dt) => {
            dt.setAttribute("tabindex", Y);
          });
        }
      }),
      !0
    );
    const le = {
      get element() {
        return Re();
      },
      get items() {
        return O;
      },
      get typeaheadInProgress() {
        if (!s(P))
          throw new Error("Instance is undefined.");
        return s(P).isTypeaheadInProgress();
      },
      typeaheadMatchItem(ye, Y) {
        if (!s(P))
          throw new Error("Instance is undefined.");
        return s(P).typeaheadMatchItem(
          ye,
          Y,
          /** skipFocus */
          !0
        );
      },
      getOrderedList: F,
      focusItemAtIndex: he,
      addClassForElementIndex: Q,
      removeClassForElementIndex: fe,
      setAttributeForElementIndex: we,
      removeAttributeForElementIndex: $,
      getAttributeFromElementIndex: ie,
      getPrimaryTextAtIndex: Pe
    };
    return H && H(le), s(P).init(), s(P).layout(), () => {
      var ye;
      R && R(le), (ye = s(P)) == null || ye.destroy();
    };
  }), Mn(() => {
    J && J();
  });
  function j(le) {
    s(P) && le.target && s(P).handleKeydown(le, le.target.classList.contains("mdc-deprecated-list-item"), Le(le.target));
  }
  function Ae(le) {
    s(P) && le.target && s(P).handleFocusIn(Le(le.target));
  }
  function be(le) {
    s(P) && le.target && s(P).handleFocusOut(Le(le.target));
  }
  function V(le) {
    s(P) && le.target && s(P).handleClick(Le(le.target), !r(le.target, 'input[type="checkbox"], input[type="radio"]'), le);
  }
  function G(le) {
    if (C() || w()) {
      const ye = Le(le.target);
      if (ye !== -1) {
        const Y = F()[ye];
        Y && (C() && !Y.checked || w()) && (r(le.detail.target, 'input[type="checkbox"], input[type="radio"]') || (Y.checked = !Y.checked), Y.activateRipple(), window.requestAnimationFrame(() => {
          Y.deactivateRipple();
        }));
      }
    }
  }
  function F() {
    return M == null ? [] : [...Re().children].map((le) => N.get(le)).filter((le) => le && le._smui_list_item_accessor);
  }
  function ee(le, ye) {
    const Y = F()[le];
    return (Y && Y.hasClass(ye)) ?? !1;
  }
  function Q(le, ye) {
    const Y = F()[le];
    Y && Y.addClass(ye);
  }
  function fe(le, ye) {
    const Y = F()[le];
    Y && Y.removeClass(ye);
  }
  function we(le, ye, Y) {
    const te = F()[le];
    te && te.addAttr(ye, Y);
  }
  function $(le, ye) {
    const Y = F()[le];
    Y && Y.removeAttr(ye);
  }
  function ie(le, ye) {
    const Y = F()[le];
    return Y ? Y.getAttr(ye) : null;
  }
  function Pe(le) {
    const ye = F()[le];
    return (ye && ye.getPrimaryText()) ?? "";
  }
  function Le(le) {
    const ye = n(le, ".mdc-deprecated-list-item, .mdc-deprecated-list");
    return ye && r(ye, ".mdc-deprecated-list-item") ? F().map((Y) => Y == null ? void 0 : Y.element).indexOf(ye) : -1;
  }
  function We() {
    if (!s(P))
      throw new Error("Instance is undefined.");
    return s(P).layout();
  }
  function Ke(le, ye) {
    if (!s(P))
      throw new Error("Instance is undefined.");
    return s(P).setEnabled(le, ye);
  }
  function ke() {
    if (!s(P))
      throw new Error("Instance is undefined.");
    return s(P).isTypeaheadInProgress();
  }
  function k() {
    if (!s(P))
      throw new Error("Instance is undefined.");
    return s(P).getSelectedIndex();
  }
  function z() {
    if (!s(P))
      throw new Error("Instance is undefined.");
    return s(P).getFocusedItemIndex();
  }
  function he(le) {
    const ye = F()[le];
    ye && "focus" in ye.element && ye.element.focus();
  }
  function Re() {
    return M.getElement();
  }
  var Fe = {
    layout: We,
    setEnabled: Ke,
    getTypeaheadInProgress: ke,
    getSelectedIndex: k,
    getFocusedItemIndex: z,
    focusItemAtIndex: he,
    getElement: Re
  }, ct = ne(), pt = Z(ct);
  {
    let le = /* @__PURE__ */ ge(() => De({
      "mdc-deprecated-list": !0,
      "mdc-deprecated-list--non-interactive": u(),
      "mdc-deprecated-list--dense": l(),
      "mdc-deprecated-list--textual-list": c(),
      "mdc-deprecated-list--avatar-list": d() || U,
      "mdc-deprecated-list--icon-list": v(),
      "mdc-deprecated-list--image-list": f(),
      "mdc-deprecated-list--thumbnail-list": m(),
      "mdc-deprecated-list--video-list": h(),
      "mdc-deprecated-list--two-line": g(),
      "smui-list--three-line": b() && !g(),
      [o()]: !0
    }));
    pr(pt, T, (ye, Y) => {
      Ee(
        Y(ye, nt(
          {
            get tag() {
              return B();
            },
            get use() {
              return a();
            },
            get class() {
              return s(le);
            },
            get role() {
              return A;
            }
          },
          () => K,
          {
            onkeydown: (te) => {
              var Ne;
              j(te), (Ne = e.onkeydown) == null || Ne.call(e, te);
            },
            onfocusin: (te) => {
              var Ne;
              Ae(te), (Ne = e.onfocusin) == null || Ne.call(e, te);
            },
            onfocusout: (te) => {
              var Ne;
              be(te), (Ne = e.onfocusout) == null || Ne.call(e, te);
            },
            onclick: (te) => {
              var Ne;
              V(te), (Ne = e.onclick) == null || Ne.call(e, te);
            },
            onSMUIAction: (te) => {
              var Ne;
              G(te), (Ne = e.onSMUIAction) == null || Ne.call(e, te);
            },
            children: (te, Ne) => {
              var dt = ne(), bt = Z(dt);
              Se(bt, () => e.children ?? pe), L(te, dt);
            },
            $$slots: { default: !0 }
          }
        )),
        (te) => M = te,
        () => M
      );
    });
  }
  return L(t, ct), xe(Fe);
}
let zg = 0;
var Xg = /* @__PURE__ */ de('<span class="mdc-deprecated-list-item__ripple"></span>'), Kg = /* @__PURE__ */ de("<!><!>", 1);
function Yg(t, e) {
  Ce(e, !0);
  let n = () => {
  };
  function r(Q) {
    return Q === n;
  }
  let i = me("SMUI:list:item:nav"), a = p(e, "use", 19, () => []), o = p(e, "class", 3, ""), u = p(e, "style", 3, ""), l = p(e, "nonInteractive", 19, () => me("SMUI:list:nonInteractive") ?? !1), c = p(e, "ripple", 19, () => !l()), d = p(e, "wrapper", 3, !1), v = p(e, "activated", 15, !1), f = p(e, "role", 19, () => d() ? "presentation" : me("SMUI:list:item:role")), m = p(e, "selected", 15, !1), h = p(e, "disabled", 3, !1), g = p(e, "skipRestoreFocus", 3, !1), b = p(e, "tabindex", 15, n), y = p(e, "inputId", 19, () => "SMUI-form-field-list-" + zg++), S = p(e, "component", 3, Vr), I = p(e, "tag", 19, () => i ? e.href ? "a" : "span" : "li"), _ = /* @__PURE__ */ qe(e, [
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
  oe("SMUI:list:nonInteractive", void 0), oe("SMUI:list:item:role", void 0);
  let E, C = ce({}), w = ce({}), x = ce({}), T = /* @__PURE__ */ ve(void 0), B = /* @__PURE__ */ ve(void 0);
  const K = /* @__PURE__ */ ge(() => r(b()) ? !l() && !h() && (m() || s(T) && s(T).checked) ? 0 : -1 : b());
  oe("SMUI:generic:input:props", { id: y() }), oe("SMUI:separator:context", void 0), oe("SMUI:generic:input:mount", (Q) => {
    ("_smui_checkbox_accessor" in Q || "_smui_radio_accessor" in Q) && X(T, Q, !0);
  }), oe("SMUI:generic:input:unmount", () => {
    X(T, void 0);
  });
  const M = me("SMUI:list:item:mount"), P = me("SMUI:list:item:unmount");
  rt(() => {
    if (!m() && !l()) {
      let fe = !0, we = E.getElement();
      for (; we.previousElementSibling; )
        if (we = we.previousElementSibling, we.nodeType === 1 && we.classList.contains("mdc-deprecated-list-item") && !we.classList.contains("mdc-deprecated-list-item--disabled")) {
          fe = !1;
          break;
        }
      fe && X(B, window.requestAnimationFrame(() => R(we)), !0);
    }
    const Q = {
      _smui_list_item_accessor: !0,
      get element() {
        return V();
      },
      get selected() {
        return m();
      },
      set selected(fe) {
        m(fe);
      },
      hasClass: O,
      addClass: A,
      removeClass: N,
      getAttr: q,
      addAttr: J,
      removeAttr: H,
      getPrimaryText: be,
      // For inputs within item.
      get checked() {
        return (s(T) && s(T).checked) ?? !1;
      },
      set checked(fe) {
        s(T) && (s(T).checked = !!fe);
      },
      get hasCheckbox() {
        return !!(s(T) && "_smui_checkbox_accessor" in s(T));
      },
      get hasRadio() {
        return !!(s(T) && "_smui_radio_accessor" in s(T));
      },
      activateRipple() {
        s(T) && s(T).activateRipple();
      },
      deactivateRipple() {
        s(T) && s(T).deactivateRipple();
      },
      // For select options.
      getValue() {
        return e.value;
      },
      // For autocomplete
      action: Ae,
      get tabindex() {
        return s(K);
      },
      set tabindex(fe) {
        b(fe);
      },
      get disabled() {
        return h();
      },
      get activated() {
        return v();
      },
      set activated(fe) {
        v(fe);
      }
    };
    return M && M(Q), () => {
      P && P(Q);
    };
  }), Mn(() => {
    s(B) && window.cancelAnimationFrame(s(B));
  });
  function O(Q) {
    return Q in C ? C[Q] : V().classList.contains(Q);
  }
  function A(Q) {
    C[Q] || (C[Q] = !0);
  }
  function N(Q) {
    (!(Q in C) || C[Q]) && (C[Q] = !1);
  }
  function U(Q, fe) {
    w[Q] != fe && (fe === "" || fe == null ? delete w[Q] : w[Q] = fe);
  }
  function q(Q) {
    return Q in x ? x[Q] ?? null : V().getAttribute(Q);
  }
  function J(Q, fe) {
    x[Q] !== fe && (x[Q] = fe);
  }
  function H(Q) {
    (!(Q in x) || x[Q] != null) && (x[Q] = void 0);
  }
  function R(Q) {
    let fe = !0;
    for (; Q.nextElementSibling; )
      if (Q = Q.nextElementSibling, Q.nodeType === 1 && Q.classList.contains("mdc-deprecated-list-item")) {
        const we = Q.attributes.getNamedItem("tabindex");
        if (we && we.value === "0") {
          fe = !1;
          break;
        }
      }
    fe && b(0);
  }
  function j(Q) {
    const fe = Q.key === "Enter", we = Q.key === "Space";
    (fe || we) && Ae(Q);
  }
  function Ae(Q) {
    h() || Je(V(), "SMUIAction", Q);
  }
  function be() {
    const Q = V(), fe = Q.querySelector(".mdc-deprecated-list-item__primary-text");
    if (fe)
      return fe.textContent ?? "";
    const we = Q.querySelector(".mdc-deprecated-list-item__text");
    return we ? we.textContent ?? "" : Q.textContent ?? "";
  }
  function V() {
    return E.getElement();
  }
  var G = { action: Ae, getPrimaryText: be, getElement: V }, F = ne(), ee = Z(F);
  {
    let Q = /* @__PURE__ */ ge(() => [
      ...l() ? [] : [
        [
          Xt,
          {
            ripple: !s(T),
            unbounded: !1,
            color: (v() || m()) && e.color == null ? "primary" : e.color,
            disabled: h(),
            addClass: A,
            removeClass: N,
            addStyle: U
          }
        ]
      ],
      ...a()
    ]), fe = /* @__PURE__ */ ge(() => De({
      "mdc-deprecated-list-item": !d(),
      "mdc-deprecated-list-item__wrapper": d(),
      "mdc-deprecated-list-item--activated": v(),
      "mdc-deprecated-list-item--selected": m(),
      "mdc-deprecated-list-item--disabled": h(),
      "mdc-menu-item--selected": !i && f() === "menuitem" && m(),
      "smui-menu-item--non-interactive": l(),
      ...C,
      [o()]: !0
    })), we = /* @__PURE__ */ ge(() => Object.entries(w).map(([ie, Pe]) => `${ie}: ${Pe};`).concat([u()]).join(" ")), $ = /* @__PURE__ */ ge(() => g() || void 0);
    pr(ee, S, (ie, Pe) => {
      Ee(
        Pe(ie, nt(
          {
            get tag() {
              return I();
            },
            get use() {
              return s(Q);
            },
            get class() {
              return s(fe);
            },
            get style() {
              return s(we);
            }
          },
          () => i && v() ? { "aria-current": "page" } : {},
          () => !i || d() ? { role: f() } : {},
          () => !i && f() === "option" ? { "aria-selected": m() ? "true" : "false" } : {},
          () => !i && (f() === "radio" || f() === "checkbox") ? {
            "aria-checked": s(T) && s(T).checked ? "true" : "false"
          } : {},
          () => i ? {} : { "aria-disabled": h() ? "true" : "false" },
          {
            get "data-menu-item-skip-restore-focus"() {
              return s($);
            },
            get tabindex() {
              return s(K);
            },
            get href() {
              return e.href;
            }
          },
          () => x,
          () => _,
          {
            onclick: (Le) => {
              var We;
              Ae(Le), (We = e.onclick) == null || We.call(e, Le);
            },
            onkeydown: (Le) => {
              var We;
              j(Le), (We = e.onkeydown) == null || We.call(e, Le);
            },
            children: (Le, We) => {
              var Ke = Kg(), ke = Z(Ke);
              {
                var k = (he) => {
                  var Re = Xg();
                  L(he, Re);
                };
                ae(ke, (he) => {
                  c() && he(k);
                });
              }
              var z = Ie(ke);
              Se(z, () => e.children ?? pe), L(Le, Ke);
            },
            $$slots: { default: !0 }
          }
        )),
        (Le) => E = Le,
        () => E
      );
    });
  }
  return L(t, F), xe(G);
}
let Zg = 0;
var Qg = /* @__PURE__ */ de("<div><!></div>");
function Jg(t, e) {
  Ce(e, !0);
  let n = p(e, "use", 19, () => []), r = p(e, "class", 3, ""), i = p(e, "id", 19, () => "SMUI-select-helper-text-" + Zg++), a = p(e, "persistent", 3, !1), o = p(e, "validationMsg", 3, !1), u = /* @__PURE__ */ qe(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "id",
    "persistent",
    "validationMsg",
    "children"
  ]), l, c = /* @__PURE__ */ ve(void 0), d = ce({}), v = ce({}), f = /* @__PURE__ */ ve(void 0);
  const m = me("SMUI:select:helper-text:id"), h = me("SMUI:select:helper-text:mount"), g = me("SMUI:select:helper-text:unmount");
  rt(() => (X(
    c,
    new Vg({
      addClass: y,
      removeClass: S,
      hasClass: b,
      getAttr: I,
      setAttr: _,
      removeAttr: E,
      setContent: (M) => {
        X(f, M, !0);
      }
    }),
    !0
  ), m && m(i()), h && h(s(c)), s(c).init(), () => {
    var M;
    g && s(c) && g(s(c)), (M = s(c)) == null || M.destroy();
  }));
  function b(M) {
    return M in d ? d[M] : C().classList.contains(M);
  }
  function y(M) {
    d[M] || (d[M] = !0);
  }
  function S(M) {
    (!(M in d) || d[M]) && (d[M] = !1);
  }
  function I(M) {
    return M in v ? v[M] ?? null : C().getAttribute(M);
  }
  function _(M, P) {
    v[M] !== P && (v[M] = P);
  }
  function E(M) {
    (!(M in v) || v[M] != null) && (v[M] = void 0);
  }
  function C() {
    return l;
  }
  var w = { getElement: C }, x = Qg();
  Ue(
    x,
    (M) => ({
      class: M,
      "aria-hidden": a() ? void 0 : "true",
      id: i(),
      ...v,
      ...u
    }),
    [
      () => De({
        "mdc-select-helper-text": !0,
        "mdc-select-helper-text--validation-msg": o(),
        "mdc-select-helper-text--validation-msg-persistent": a(),
        ...d,
        [r()]: !0
      })
    ]
  );
  var T = se(x);
  {
    var B = (M) => {
      var P = ne(), O = Z(P);
      Se(O, () => e.children ?? pe), L(M, P);
    }, K = (M) => {
      var P = Rt();
      Oe(() => at(P, s(f))), L(M, P);
    };
    ae(T, (M) => {
      s(f) == null ? M(B) : M(K, !1);
    });
  }
  return Ee(x, (M) => l = M, () => l), Me(x, (M, P) => W == null ? void 0 : W(M, P), n), L(t, x), xe(w);
}
let $g = 0;
var ep = /* @__PURE__ */ de("<input/>"), tp = /* @__PURE__ */ de('<span class="mdc-select__ripple"></span>'), np = /* @__PURE__ */ de('<div><!> <div><!> <!> <!> <!> <span><span> </span></span> <span><svg class="mdc-select__dropdown-icon-graphic" viewBox="7 10 10 5" focusable="false"><polygon class="mdc-select__dropdown-icon-inactive" stroke="none" fill-rule="evenodd" points="7 10 12 15 17 10"></polygon><polygon class="mdc-select__dropdown-icon-active" stroke="none" fill-rule="evenodd" points="7 15 12 10 17 15"></polygon></svg></span> <!></div> <!></div> <!>', 1);
function rp(t, e) {
  Ce(e, !0);
  const n = () => Qn(Re, "$selectedTextStore", r), [r, i] = br();
  let a = () => {
  };
  function o(D) {
    return D === a;
  }
  let u = p(e, "use", 19, () => []), l = p(e, "class", 3, ""), c = p(e, "style", 3, ""), d = p(e, "ripple", 3, !0), v = p(e, "disabled", 3, !1), f = p(e, "variant", 3, "standard"), m = p(e, "noLabel", 3, !1), h = p(e, "label", 3, void 0), g = p(e, "value", 15), b = p(e, "key", 3, (D) => D), y = p(e, "dirty", 15, !1), S = p(e, "invalid", 15, a), I = p(e, "updateInvalid", 19, () => o(S())), _ = p(e, "required", 3, !1), E = p(e, "inputId", 19, () => "SMUI-select-" + $g++), C = p(e, "hiddenInput", 3, !1), w = p(e, "withLeadingIcon", 3, a), x = p(e, "anchor$use", 19, () => []), T = p(e, "anchor$class", 3, ""), B = p(e, "selectedTextContainer$use", 19, () => []), K = p(e, "selectedTextContainer$class", 3, ""), M = p(e, "selectedText$use", 19, () => []), P = p(e, "selectedText$class", 3, ""), O = p(e, "dropdownIcon$use", 19, () => []), A = p(e, "dropdownIcon$class", 3, ""), N = p(e, "menu$class", 3, ""), U = /* @__PURE__ */ qe(e, [
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
  const q = o(S());
  o(S()) && S(!1);
  let J, H = /* @__PURE__ */ ve(void 0), R = ce({}), j = ce({}), Ae, be = ce({}), V = /* @__PURE__ */ ve(-1);
  const G = /* @__PURE__ */ ge(() => U.menu$id ?? E() + "-menu");
  let F = /* @__PURE__ */ ve(void 0), ee = me("SMUI:addLayoutListener"), Q, fe = /* @__PURE__ */ ve(!1), we = ce({}), $ = /* @__PURE__ */ ve(void 0), ie = /* @__PURE__ */ ve(void 0), Pe = /* @__PURE__ */ ve(!1), Le, We = me("SMUI:select:context"), Ke, ke, k, z, he;
  oe("SMUI:list:role", ""), oe("SMUI:list:nav", !1);
  const Re = tn("");
  oe("SMUI:select:selectedText", Re);
  const Fe = tn(g());
  Te(() => {
    ci(Fe, g());
  }), oe("SMUI:select:value", Fe), Te(() => {
    s(H) && s(H).getValue() !== b()(g()) && s(H).setValue(b()(g()));
  });
  let ct = s(V);
  Te(() => {
    if (ct !== s(V))
      if (ct = s(V), s(H))
        s(H).setSelectedIndex(
          s(V),
          /* closeMenu */
          !1,
          /* skipNotify */
          !0
        );
      else {
        const D = kt();
        g() !== D[s(V)] && g(D[s(V)]);
      }
  }), Te(() => {
    s(H) && s(H).getDisabled() !== v() && s(H).setDisabled(v());
  }), Te(() => {
    s(H) && y() && s(H).isValid() !== !S() && (I() ? S(!s(H).isValid()) : s(H).setValid(!S()));
  }), Te(() => {
    s(H) && s(H).getRequired() !== _() && s(H).setRequired(_());
  }), ee && (Q = ee(Ii)), oe("SMUI:select:leading-icon:mount", (D) => {
    Ke = D;
  }), oe("SMUI:select:leading-icon:unmount", () => {
    Ke = void 0;
  }), oe("SMUI:list:mount", (D) => {
    Le = D;
  }), oe("SMUI:select:helper-text:id", (D) => {
    X(F, D, !0);
  }), oe("SMUI:select:helper-text:mount", (D) => {
    ke = D;
  }), oe("SMUI:select:helper-text:unmount", () => {
    X(F, void 0), ke = void 0;
  }), rt(() => (X(
    H,
    new Fg(
      {
        // getSelectAdapterMethods
        // getMenuItemAttr: (menuItem: Element, attr: string) =>
        //   menuItem.getAttribute(attr),
        setSelectedText: (D) => {
          ci(Re, D);
        },
        isSelectAnchorFocused: () => document.activeElement === Ae,
        getSelectAnchorAttr: dt,
        setSelectAnchorAttr: bt,
        removeSelectAnchorAttr: mt,
        addMenuClass: te,
        removeMenuClass: Ne,
        openMenu: () => {
          X(fe, !0);
        },
        closeMenu: () => {
          X(fe, !1);
        },
        getAnchorElement: () => Ae,
        setMenuAnchorElement: (D) => {
          X($, D, !0);
        },
        setMenuAnchorCorner: (D) => {
          X(ie, D, !0);
        },
        setMenuWrapFocus: (D) => {
          X(Pe, D, !0);
        },
        getSelectedIndex: () => s(V),
        setSelectedIndex: (D) => {
          ct = D, X(V, D, !0), g(kt()[s(V)]);
        },
        focusMenuItemAtIndex: (D) => {
          Le.focusItemAtIndex(D);
        },
        getMenuItemCount: () => Le.items.length,
        getMenuItemValues: () => kt().map(b()),
        getMenuItemTextAtIndex: (D) => Le.getPrimaryTextAtIndex(D),
        isTypeaheadInProgress: () => Le.typeaheadInProgress,
        typeaheadMatchItem: (D, _e) => Le.typeaheadMatchItem(D, _e),
        // getCommonAdapterMethods
        addClass: le,
        removeClass: ye,
        hasClass: pt,
        setRippleCenter: (D) => z && z.setRippleCenter(D),
        activateBottomLine: () => z && z.activate(),
        deactivateBottomLine: () => z && z.deactivate(),
        notifyChange: (D) => {
          var _e;
          y(!0), I() && S(!((_e = s(H)) != null && _e.isValid())), Je(jn(), "SMUISelectChange", { value: g(), index: s(V) });
        },
        // getOutlineAdapterMethods
        hasOutline: () => !!he,
        notchOutline: (D) => he && he.notch(D),
        closeOutline: () => he && he.closeNotch(),
        // getLabelAdapterMethods
        hasLabel: () => !!k,
        floatLabel: (D) => k && k.float(D),
        getLabelWidth: () => k ? k.getWidth() : 0,
        setLabelRequired: (D) => k && k.setRequired(D)
      },
      {
        get helperText() {
          return ke;
        },
        get leadingIcon() {
          return Ke;
        }
      }
    ),
    !0
  ), X(V, kt().indexOf(g()), !0), s(H).init(), It(q), () => {
    var D;
    (D = s(H)) == null || D.destroy();
  })), Mn(() => {
    Q && Q();
  });
  function pt(D) {
    return D in R ? R[D] : jn().classList.contains(D);
  }
  function le(D) {
    R[D] || (R[D] = !0);
  }
  function ye(D) {
    (!(D in R) || R[D]) && (R[D] = !1);
  }
  function Y(D, _e) {
    j[D] != _e && (_e === "" || _e == null ? delete j[D] : j[D] = _e);
  }
  function te(D) {
    we[D] || (we[D] = !0);
  }
  function Ne(D) {
    (!(D in we) || we[D]) && (we[D] = !1);
  }
  function dt(D) {
    return D in be ? be[D] ?? null : jn().getAttribute(D);
  }
  function bt(D, _e) {
    be[D] !== _e && (be[D] = _e);
  }
  function mt(D) {
    (!(D in be) || be[D] != null) && (be[D] = void 0);
  }
  function kt() {
    return Le.getOrderedList().map((D) => D.getValue());
  }
  function _r(D) {
    const _e = D.currentTarget.getBoundingClientRect();
    return (ht(D) ? D.touches[0].clientX : D.clientX) - _e.left;
  }
  function ht(D) {
    return "touches" in D;
  }
  function Mt() {
    if (s(H) == null)
      throw new Error("Instance is undefined.");
    return s(H).getUseDefaultValidation();
  }
  function It(D) {
    var _e;
    (_e = s(H)) == null || _e.setUseDefaultValidation(D);
  }
  function Pn() {
    Ae.focus();
  }
  function Ii() {
    var D;
    (D = s(H)) == null || D.layout();
  }
  function jn() {
    return J;
  }
  var ze = {
    getUseDefaultValidation: Mt,
    setUseDefaultValidation: It,
    focus: Pn,
    layout: Ii,
    getElement: jn
  }, Qe = np(), $e = Z(Qe);
  Ue($e, (D, _e, ft) => ({ class: D, style: _e, ...ft }), [
    () => De({
      "mdc-select": !0,
      "mdc-select--required": _(),
      "mdc-select--disabled": v(),
      "mdc-select--filled": f() === "filled",
      "mdc-select--outlined": f() === "outlined",
      "smui-select--standard": f() === "standard",
      "mdc-select--with-leading-icon": o(w()) ? e.leadingIcon : w(),
      "mdc-select--no-label": m() || h() == null,
      "mdc-select--invalid": S(),
      "mdc-select--activated": s(fe),
      "mdc-data-table__pagination-rows-per-page-select": We === "data-table:pagination",
      ...R,
      [l()]: !0
    }),
    () => Object.entries(j).map(([D, _e]) => `${D}: ${_e};`).concat([c()]).join(" "),
    () => er(U, [
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
  var Dt = se($e);
  {
    var gn = (D) => {
      var _e = ep();
      Ue(
        _e,
        (ft) => ({
          type: "hidden",
          required: _(),
          disabled: v(),
          value: g(),
          ...ft
        }),
        [() => it(U, "input$")],
        void 0,
        void 0,
        !0
      ), L(D, _e);
    };
    ae(Dt, (D) => {
      C() && D(gn);
    });
  }
  var ot = Ie(Dt, 2), ut = (D) => {
    var _e;
    Ae.focus(), s(H) && s(H).handleClick(_r(D)), (_e = e.anchor$onclick) == null || _e.call(e, D);
  }, At = (D) => {
    var _e;
    s(H) && s(H).handleKeydown(D), (_e = e.onkeydown) == null || _e.call(e, D);
  }, et = (D) => {
    var _e;
    s(H) && s(H).handleBlur(), Je(jn(), "blur", D), (_e = e.anchor$onblur) == null || _e.call(e, D);
  }, wt = (D) => {
    var _e;
    s(H) && s(H).handleFocus(), Je(jn(), "focus", D), (_e = e.anchor$onfocus) == null || _e.call(e, D);
  };
  Ue(
    ot,
    (D, _e) => ({
      class: D,
      "aria-required": _() ? "true" : void 0,
      "aria-disabled": v() ? "true" : void 0,
      "aria-controls": s(G),
      "aria-expanded": s(fe) ? "true" : "false",
      "aria-describedby": s(F),
      role: "combobox",
      tabindex: "0",
      ...be,
      ..._e,
      onclick: ut,
      onkeydown: At,
      onblur: et,
      onfocus: wt
    }),
    [
      () => De({ "mdc-select__anchor": !0, [T()]: !0 }),
      () => it(U, "anchor$")
    ]
  );
  var Nn = se(ot);
  {
    var Lt = (D) => {
      var _e = tp();
      L(D, _e);
    };
    ae(Nn, (D) => {
      f() === "filled" && D(Lt);
    });
  }
  var _t = Ie(Nn, 2);
  {
    var Pt = (D) => {
      {
        let _e = /* @__PURE__ */ ge(() => E() + "-smui-label"), ft = /* @__PURE__ */ ge(() => n() !== ""), Ot = /* @__PURE__ */ ge(() => it(U, "label$"));
        Ee(
          So(D, nt(
            {
              get id() {
                return s(_e);
              },
              get floatAbove() {
                return s(ft);
              },
              get required() {
                return _();
              }
            },
            () => s(Ot),
            {
              children: (ir, ar) => {
                var sa = ne(), Ei = Z(sa);
                {
                  var jr = (Wr) => {
                  }, Wo = (Wr) => {
                    var qa = ne(), la = Z(qa);
                    {
                      var ll = (Ir) => {
                        var qr = Rt();
                        Oe(() => at(qr, h())), L(Ir, qr);
                      }, za = (Ir) => {
                        var qr = ne(), qo = Z(qr);
                        Se(qo, h), L(Ir, qr);
                      };
                      ae(
                        la,
                        (Ir) => {
                          typeof h() == "string" ? Ir(ll) : Ir(za, !1);
                        },
                        !0
                      );
                    }
                    L(Wr, qa);
                  };
                  ae(Ei, (Wr) => {
                    h() == null ? Wr(jr) : Wr(Wo, !1);
                  });
                }
                L(ir, sa);
              },
              $$slots: { default: !0 }
            }
          )),
          (ir) => k = ir,
          () => k
        );
      }
    };
    ae(_t, (D) => {
      f() !== "outlined" && !m() && h() != null && D(Pt);
    });
  }
  var un = Ie(_t, 2);
  {
    var Bt = (D) => {
      {
        let _e = /* @__PURE__ */ ge(() => m() || h() == null), ft = /* @__PURE__ */ ge(() => it(U, "outline$"));
        Ee(
          ed(D, nt(
            {
              get noLabel() {
                return s(_e);
              }
            },
            () => s(ft),
            {
              children: (Ot, ir) => {
                var ar = ne(), sa = Z(ar);
                {
                  var Ei = (jr) => {
                    {
                      let Wo = /* @__PURE__ */ ge(() => E() + "-smui-label"), Wr = /* @__PURE__ */ ge(() => n() !== ""), qa = /* @__PURE__ */ ge(() => it(U, "label$"));
                      Ee(
                        So(jr, nt(
                          {
                            get id() {
                              return s(Wo);
                            },
                            get floatAbove() {
                              return s(Wr);
                            },
                            get required() {
                              return _();
                            }
                          },
                          () => s(qa),
                          {
                            children: (la, ll) => {
                              var za = ne(), Ir = Z(za);
                              {
                                var qr = (ua) => {
                                }, qo = (ua) => {
                                  var ul = ne(), Rd = Z(ul);
                                  {
                                    var Md = (Si) => {
                                      var ca = Rt();
                                      Oe(() => at(ca, h())), L(Si, ca);
                                    }, Dd = (Si) => {
                                      var ca = ne(), Pd = Z(ca);
                                      Se(Pd, h), L(Si, ca);
                                    };
                                    ae(
                                      Rd,
                                      (Si) => {
                                        typeof h() == "string" ? Si(Md) : Si(Dd, !1);
                                      },
                                      !0
                                    );
                                  }
                                  L(ua, ul);
                                };
                                ae(Ir, (ua) => {
                                  h() == null ? ua(qr) : ua(qo, !1);
                                });
                              }
                              L(la, za);
                            },
                            $$slots: { default: !0 }
                          }
                        )),
                        (la) => k = la,
                        () => k
                      );
                    }
                  };
                  ae(sa, (jr) => {
                    !m() && h() != null && jr(Ei);
                  });
                }
                L(Ot, ar);
              },
              $$slots: { default: !0 }
            }
          )),
          (Ot) => he = Ot,
          () => he
        );
      }
    };
    ae(un, (D) => {
      f() === "outlined" && D(Bt);
    });
  }
  var cn = Ie(un, 2);
  Se(cn, () => e.leadingIcon ?? pe);
  var Yt = Ie(cn, 2);
  Ue(Yt, (D, _e) => ({ class: D, ..._e }), [
    () => De({
      "mdc-select__selected-text-container": !0,
      [K()]: !0
    }),
    () => it(U, "selectedTextContainer$")
  ]);
  var Wn = se(Yt);
  Ue(
    Wn,
    (D, _e) => ({
      id: E() + "-smui-selected-text",
      class: D,
      role: "button",
      "aria-haspopup": "listbox",
      "aria-labelledby": E() + "-smui-label",
      ..._e
    }),
    [
      () => De({
        "mdc-select__selected-text": !0,
        [P()]: !0
      }),
      () => it(U, "selectedText$")
    ]
  );
  var Gr = se(Wn);
  Me(Wn, (D, _e) => W == null ? void 0 : W(D, _e), M), Me(Yt, (D, _e) => W == null ? void 0 : W(D, _e), B);
  var dn = Ie(Yt, 2);
  Ue(dn, (D, _e) => ({ class: D, ..._e }), [
    () => De({
      "mdc-select__dropdown-icon": !0,
      [A()]: !0
    }),
    () => it(U, "dropdownIcon$")
  ]), Me(dn, (D, _e) => W == null ? void 0 : W(D, _e), O);
  var jt = Ie(dn, 2);
  {
    var pn = (D) => {
      {
        let _e = /* @__PURE__ */ ge(() => it(U, "ripple$"));
        Ee($c(D, nt(() => s(_e))), (ft) => z = ft, () => z);
      }
    };
    ae(jt, (D) => {
      f() !== "outlined" && d() && D(pn);
    });
  }
  Ee(ot, (D) => Ae = D, () => Ae), Me(ot, (D, _e) => W == null ? void 0 : W(D, _e), x);
  var rr = Ie(ot, 2);
  {
    let D = /* @__PURE__ */ ge(() => De({
      "mdc-select__menu": !0,
      ...we,
      [N()]: !0
    })), _e = /* @__PURE__ */ ge(() => it(U, "menu$"));
    Wg(rr, nt(
      {
        get class() {
          return s(D);
        },
        get id() {
          return s(G);
        },
        fullWidth: !0,
        anchor: !1,
        get anchorElement() {
          return s($);
        },
        get anchorCorner() {
          return s(ie);
        }
      },
      () => s(_e),
      {
        onSMUIMenuSelected: (ft) => {
          var Ot;
          s(H) && s(H).handleMenuItemAction(ft.detail.index), (Ot = e.onSMUIMenuSelected) == null || Ot.call(e, ft);
        },
        onSMUIMenuSurfaceClosing: (ft) => {
          var Ot;
          s(H) && s(H).handleMenuClosing(), (Ot = e.onSMUIMenuSurfaceClosing) == null || Ot.call(e, ft);
        },
        onSMUIMenuSurfaceClosed: (ft) => {
          var Ot;
          s(H) && s(H).handleMenuClosed(), (Ot = e.onSMUIMenuSurfaceClosed) == null || Ot.call(e, ft);
        },
        onSMUIMenuSurfaceOpened: (ft) => {
          var Ot;
          s(H) && s(H).handleMenuOpened(), (Ot = e.onSMUIMenuSurfaceOpened) == null || Ot.call(e, ft);
        },
        get open() {
          return s(fe);
        },
        set open(ft) {
          X(fe, ft, !0);
        },
        children: (ft, Ot) => {
          {
            let ir = /* @__PURE__ */ ge(() => it(U, "list$"));
            qg(ft, nt(
              {
                role: "listbox",
                get wrapFocus() {
                  return s(Pe);
                }
              },
              () => s(ir),
              {
                get selectedIndex() {
                  return s(V);
                },
                set selectedIndex(ar) {
                  X(V, ar, !0);
                },
                children: (ar, sa) => {
                  var Ei = ne(), jr = Z(Ei);
                  Se(jr, () => e.children ?? pe), L(ar, Ei);
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
  Ee($e, (D) => J = D, () => J), Me($e, (D, _e) => Xt == null ? void 0 : Xt(D, _e), () => ({
    ripple: f() === "filled",
    unbounded: !1,
    addClass: le,
    removeClass: ye,
    addStyle: Y
  })), Me($e, (D, _e) => as == null ? void 0 : as(D, _e), () => ({ addClass: le, removeClass: ye })), Me($e, (D, _e) => W == null ? void 0 : W(D, _e), u);
  var oa = Ie($e, 2);
  {
    var jo = (D) => {
      {
        let _e = /* @__PURE__ */ ge(() => it(U, "helperText$"));
        Jg(D, nt(() => s(_e), {
          children: (ft, Ot) => {
            var ir = ne(), ar = Z(ir);
            Se(ar, () => e.helperText ?? pe), L(ft, ir);
          },
          $$slots: { default: !0 }
        }));
      }
    };
    ae(oa, (D) => {
      e.helperText && D(jo);
    });
  }
  Oe(() => at(Gr, n())), L(t, Qe);
  var yr = xe(ze);
  return i(), yr;
}
function ip(t, e) {
  Ce(e, !0);
  const n = () => Qn(d, "$selectedValue", r), [r, i] = br();
  let a = p(e, "use", 19, () => []);
  p(e, "class", 3, "");
  let o = p(e, "value", 3, ""), u = /* @__PURE__ */ qe(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "value",
    "children"
  ]), l;
  const c = me("SMUI:select:selectedText"), d = me("SMUI:select:value");
  oe("SMUI:list:item:role", "option");
  const v = /* @__PURE__ */ ge(() => o() != null && o() !== "" && n() === o());
  rt(f), Mn(f);
  function f() {
    s(v) && l && ci(c, l.getPrimaryText());
  }
  function m() {
    return l.getElement();
  }
  var h = { getElement: m };
  Ee(
    Yg(t, nt(
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
      () => u,
      {
        children: (b, y) => {
          var S = ne(), I = Z(S);
          Se(I, () => e.children ?? pe), L(b, S);
        },
        $$slots: { default: !0 }
      }
    )),
    (b) => l = b,
    () => l
  );
  var g = xe(h);
  return i(), g;
}
function ap(t, e) {
  Ce(e, !0);
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
  rp(t, {
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
      var f = ne(), m = Z(f);
      wn(m, 17, n, Ri, (h, g, b) => {
        {
          let y = /* @__PURE__ */ ge(() => c(b));
          ip(h, {
            get onclick() {
              return s(y);
            },
            get value() {
              return s(g).value;
            },
            children: (S, I) => {
              var _ = Rt();
              Oe(() => at(_, s(g).label)), L(S, _);
            },
            $$slots: { default: !0 }
          });
        }
      }), L(d, f);
    },
    $$slots: { default: !0 }
  }), xe();
}
const op = tn([]);
op.subscribe;
ce({ freeze: !1 });
var sp = /* @__PURE__ */ de("<div><!></div>");
function lp(t, e) {
  Ce(e, !0);
  let n = p(e, "use", 19, () => []), r = p(e, "class", 3, ""), i = p(e, "variant", 3, "raised"), a = p(e, "square", 3, !1), o = p(e, "color", 3, "default"), u = p(e, "elevation", 3, 1), l = p(e, "transition", 3, !1), c = /* @__PURE__ */ qe(e, [
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
  function v() {
    return d;
  }
  var f = { getElement: v }, m = sp();
  Ue(m, (g) => ({ class: g, ...c }), [
    () => De({
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
  var h = se(m);
  return Se(h, () => e.children ?? pe), Ee(m, (g) => d = g, () => d), Me(m, (g, b) => W == null ? void 0 : W(g, b), n), L(t, m), xe(f);
}
const Ft = [];
for (let t = 0; t < 256; ++t)
  Ft.push((t + 256).toString(16).slice(1));
function up(t, e = 0) {
  return (Ft[t[e + 0]] + Ft[t[e + 1]] + Ft[t[e + 2]] + Ft[t[e + 3]] + "-" + Ft[t[e + 4]] + Ft[t[e + 5]] + "-" + Ft[t[e + 6]] + Ft[t[e + 7]] + "-" + Ft[t[e + 8]] + Ft[t[e + 9]] + "-" + Ft[t[e + 10]] + Ft[t[e + 11]] + Ft[t[e + 12]] + Ft[t[e + 13]] + Ft[t[e + 14]] + Ft[t[e + 15]]).toLowerCase();
}
let os;
const cp = new Uint8Array(16);
function dp() {
  if (!os) {
    if (typeof crypto > "u" || !crypto.getRandomValues)
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    os = crypto.getRandomValues.bind(crypto);
  }
  return os(cp);
}
const fp = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), au = { randomUUID: fp };
function Zr(t, e, n) {
  var i;
  if (au.randomUUID && !e && !t)
    return au.randomUUID();
  t = t || {};
  const r = t.random ?? ((i = t.rng) == null ? void 0 : i.call(t)) ?? dp();
  if (r.length < 16)
    throw new Error("Random bytes length must be >= 16");
  if (r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, e) {
    if (n = n || 0, n < 0 || n + 16 > e.length)
      throw new RangeError(`UUID byte range ${n}:${n + 15} is out of buffer bounds`);
    for (let a = 0; a < 16; ++a)
      e[n + a] = r[a];
    return e;
  }
  return up(r);
}
var hp = /* @__PURE__ */ de('<span class="oscd-icon"><!></span>');
function Gn(t, e) {
  var n = hp(), r = se(n);
  Se(r, () => e.children ?? pe), L(t, n);
}
var vp = /* @__PURE__ */ on('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"></path></svg>');
function mp(t, e) {
  let n = p(e, "svgStyles", 3, "");
  Gn(t, {
    children: (r, i) => {
      var a = vp();
      Oe(() => Ut(a, n())), L(r, a);
    }
  });
}
var gp = /* @__PURE__ */ on('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"></path></svg>');
function id(t, e) {
  let n = p(e, "svgStyles", 3, "");
  Gn(t, {
    children: (r, i) => {
      var a = gp();
      Oe(() => Ut(a, n())), L(r, a);
    }
  });
}
var pp = /* @__PURE__ */ on('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z"></path></svg>');
function bp(t, e) {
  let n = p(e, "svgStyles", 3, "");
  Gn(t, {
    children: (r, i) => {
      var a = pp();
      Oe(() => Ut(a, n())), L(r, a);
    }
  });
}
var _p = /* @__PURE__ */ on('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="m590-160 80 80H240q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h360l200 240v480q0 20-8.5 36.5T768-96L560-302q-17 11-37 16.5t-43 5.5q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 23-5.5 43T618-360l102 104v-356L562-800H240v640h350ZM480-360q33 0 56.5-23.5T560-440q0-33-23.5-56.5T480-520q-33 0-56.5 23.5T400-440q0 33 23.5 56.5T480-360Zm0-80Zm0 0Z"></path></svg>');
function yp(t, e) {
  let n = p(e, "svgStyles", 3, "");
  Gn(t, {
    children: (r, i) => {
      var a = _p();
      Oe(() => Ut(a, n())), L(r, a);
    }
  });
}
var Ip = /* @__PURE__ */ on('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-160q-134 0-227-93t-93-227q0-134 93-227t227-93q69 0 132 28.5T720-690v-110h80v280H520v-80h168q-32-56-87.5-88T480-720q-100 0-170 70t-70 170q0 100 70 170t170 70q77 0 139-44t87-116h84q-28 106-114 173t-196 67Z"></path></svg>');
function Ep(t, e) {
  let n = p(e, "svgStyles", 3, "");
  Gn(t, {
    children: (r, i) => {
      var a = Ip();
      Oe(() => Ut(a, n())), L(r, a);
    }
  });
}
var Sp = /* @__PURE__ */ on('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M200-440v-80h560v80H200Z"></path></svg>');
function Ap(t, e) {
  let n = p(e, "svgStyles", 3, "");
  Gn(t, {
    children: (r, i) => {
      var a = Sp();
      Oe(() => Ut(a, n())), L(r, a);
    }
  });
}
var Cp = /* @__PURE__ */ on('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"></path></svg>');
function xp(t, e) {
  let n = p(e, "svgStyles", 3, "");
  Gn(t, {
    children: (r, i) => {
      var a = Cp();
      Oe(() => Ut(a, n())), L(r, a);
    }
  });
}
var Tp = /* @__PURE__ */ on('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"></path></svg>');
function wp(t, e) {
  let n = p(e, "svgStyles", 3, "");
  Gn(t, {
    children: (r, i) => {
      var a = Tp();
      Oe(() => Ut(a, n())), L(r, a);
    }
  });
}
sf();
var Lp = /* @__PURE__ */ on('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"></path></svg>');
function Op(t, e) {
  let n = p(e, "svgStyles", 3, "");
  Gn(t, {
    children: (r, i) => {
      var a = Lp();
      Oe(() => Ut(a, n())), L(r, a);
    }
  });
}
var Rp = /* @__PURE__ */ on('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3" cursor="pointer"><path d="M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160Zm40 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"></path></svg>');
function Mp(t, e) {
  let n = p(e, "svgStyles", 8, "");
  Gn(t, {
    children: (r, i) => {
      var a = Rp();
      Oe(() => Ut(a, n())), L(r, a);
    }
  });
}
var Dp = /* @__PURE__ */ on('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m480-240 160-160-56-56-64 64v-168h-80v168l-64-64-56 56 160 160ZM200-640v440h560v-440H200Zm0 520q-33 0-56.5-23.5T120-200v-499q0-14 4.5-27t13.5-24l50-61q11-14 27.5-21.5T250-840h460q18 0 34.5 7.5T772-811l50 61q9 11 13.5 24t4.5 27v499q0 33-23.5 56.5T760-120H200Zm16-600h528l-34-40H250l-34 40Zm264 300Z"></path></svg>');
function Pp(t, e) {
  let n = p(e, "svgStyles", 8, "");
  Gn(t, {
    children: (r, i) => {
      var a = Dp();
      Oe(() => Ut(a, n())), L(r, a);
    }
  });
}
function Np(t, e) {
  e(t.target.value);
}
var Hp = /* @__PURE__ */ de('<div class="custom-text-field svelte-1719vm0"><input type="date" id="datetime-picker" class="custom-text-field__input svelte-1719vm0" placeholder=""/> <label for="datetime-picker" class="custom-floating-label svelte-1719vm0"> </label> <span class="custom-line svelte-1719vm0"></span></div>');
function Up(t, e) {
  Ce(e, !0);
  let n = p(e, "label", 3, ""), r = p(e, "value", 15, "");
  var i = Hp(), a = se(i);
  a.__change = [Np, r];
  var o = Ie(a, 2), u = se(o);
  Oe(() => at(u, n())), Ta(a, r), L(t, i), xe();
}
En(["change"]);
function kp(t, e) {
  e(t.target.value);
}
var Bp = /* @__PURE__ */ de('<div class="custom-text-field svelte-6wdfbb"><input type="datetime-local" id="datetime-picker" class="custom-text-field__input svelte-6wdfbb" placeholder=""/> <label for="datetime-picker" class="custom-floating-label svelte-6wdfbb"> </label> <span class="custom-line svelte-6wdfbb"></span></div>');
function Fp(t, e) {
  Ce(e, !0);
  let n = p(e, "label", 3, ""), r = p(e, "value", 15, "");
  var i = Bp(), a = se(i);
  a.__change = [kp, r];
  var o = Ie(a, 2), u = se(o);
  Oe(() => at(u, n())), Ta(a, r), L(t, i), xe();
}
En(["change"]);
var Vp = /* @__PURE__ */ de('<details class="svelte-1sq8fnx"><summary class="svelte-1sq8fnx"> </summary> <div class="expandable-content svelte-1sq8fnx"><!></div></details>');
function ad(t, e) {
  Ce(e, !0);
  let n = p(e, "title", 3, ""), r = p(e, "open", 11, !1);
  lp(t, {
    children: (i, a) => {
      var o = Vp(), u = se(o), l = se(u), c = Ie(u, 2), d = se(c);
      Se(d, () => e.content ?? pe), Oe(() => {
        o.open = r(), at(l, n());
      }), L(i, o);
    },
    $$slots: { default: !0 }
  }), xe();
}
function Gp(t, e, n, r) {
  e() && ((t.key === "Enter" || t.key === " ") && (t.preventDefault(), n()), t.key === "Escape" && (t.preventDefault(), r()));
}
var jp = /* @__PURE__ */ de('<span role="button" tabindex="0" aria-labelledby="tooltip"><!></span>');
function Ao(t, e) {
  Ce(e, !0);
  let n = p(e, "content", 3, ""), r = p(e, "side", 3, "top"), i = p(e, "hoverDelay", 3, 0), a = p(e, "transitionDuration", 3, 80), o = p(e, "disabled", 3, !1), u = p(e, "offset", 3, 8), l = p(e, "backgroundColor", 3, "#000"), c = p(e, "paddingY", 3, 6), d = p(e, "paddingX", 3, 10), v = p(e, "textColor", 3, "#fff");
  const f = `tt-${Math.random().toString(36).slice(2)}`;
  let m = /* @__PURE__ */ ve(null), h = /* @__PURE__ */ ve(null), g = /* @__PURE__ */ ve(null), b = /* @__PURE__ */ ve(null), y = /* @__PURE__ */ ve(!1), S = /* @__PURE__ */ ve(null), I = /* @__PURE__ */ ve(null);
  function _(A) {
    var j;
    if (!A || !A.trim().startsWith("var(")) return A;
    const N = A.match(/^var\(\s*([^,\s)]+)\s*(?:,\s*([^)]+)\s*)?\)$/);
    if (!N) return A;
    const U = N[1], q = (j = N[2]) == null ? void 0 : j.trim(), J = s(m) ? getComputedStyle(s(m)).getPropertyValue(U) : "", H = getComputedStyle(document.documentElement).getPropertyValue(U), R = (J || H).trim();
    return R || q || A;
  }
  function E() {
    !n() || o() || (s(S) && clearTimeout(s(S)), i() > 0 ? X(S, setTimeout(() => X(y, !0), i()), !0) : X(y, !0));
  }
  function C() {
    s(S) && clearTimeout(s(S)), X(y, !1);
  }
  function w() {
    E();
  }
  function x() {
    C();
  }
  function T() {
    E();
  }
  function B() {
    C();
  }
  function K() {
    if (!s(h) || !s(b) || !s(m) || o()) return;
    const A = s(m).getBoundingClientRect(), N = s(b).getBoundingClientRect();
    let U = 0, q = 0;
    const J = u();
    switch (r()) {
      case "top":
        U = A.top - N.height - J, q = A.left + A.width / 2 - N.width / 2;
        break;
      case "bottom":
        U = A.bottom + J, q = A.left + A.width / 2 - N.width / 2;
        break;
      case "left":
        U = A.top + A.height / 2 - N.height / 2, q = A.left - N.width - J;
        break;
      case "right":
        U = A.top + A.height / 2 - N.height / 2, q = A.right + J;
        break;
    }
    s(h).style.top = `${U + window.scrollY}px`, s(h).style.left = `${q + window.scrollX}px`;
  }
  function M() {
    var A;
    (A = s(I)) == null || A.disconnect(), X(I, null), s(h) && s(h).parentNode && s(h).parentNode.removeChild(s(h)), X(h, null), X(b, null), X(g, null), s(S) && clearTimeout(s(S));
  }
  Mn(M), Te(() => {
    if (!(!s(y) || !n() || o())) {
      if (!s(h)) {
        X(h, document.createElement("div"), !0), s(h).style.position = "absolute", s(h).style.zIndex = "9999", s(h).style.pointerEvents = "none", s(h).style.opacity = "0", s(h).style.transition = `opacity ${a()}ms ease`, s(h).id = f, s(h).setAttribute("role", "tooltip"), document.body.appendChild(s(h)), X(g, s(h).attachShadow({ mode: "open" }), !0);
        const A = document.createElement("style"), N = _(l()), U = _(v());
        A.textContent = `
        .bubble {
          --pad-y: ${c()}px;
          --pad-x: ${d()}px;
          --radius: 4px;
          --bg: ${N};
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
      `, s(g).appendChild(A), X(b, document.createElement("div"), !0), s(g).appendChild(s(b)), X(
          I,
          new MutationObserver(() => {
            s(y) && K();
          }),
          !0
        ), s(I).observe(document.body, { childList: !0, subtree: !0 });
      }
      s(b) && (s(b).className = `bubble ${r()}`, s(b).innerHTML = n()), s(h) && (s(h).style.opacity = "1", K());
    }
  }), Te(() => {
    if (s(y) || !s(h))
      return;
    s(h).style.opacity = "0";
    const A = s(h), N = setTimeout(
      () => {
        A && A.parentNode && A.parentNode.removeChild(A), s(h) === A && M();
      },
      a()
    );
    return () => clearTimeout(N);
  });
  var P = jp();
  P.__keydown = [Gp, n, E, C];
  var O = se(P);
  Se(O, () => e.children ?? pe), Ee(P, (A) => X(m, A), () => s(m)), Oe(() => {
    Mr(P, "aria-describedby", n() && !o() ? f : void 0), Mr(P, "aria-haspopup", n() ? "true" : void 0), Mr(P, "aria-expanded", n() ? s(y) ? "true" : "false" : void 0);
  }), ya("mouseenter", P, w), ya("mouseleave", P, x), ya("focus", P, T), ya("blur", P, B), L(t, P), xe();
}
En(["keydown"]);
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
}, Sn = {
  ARIA_CHECKED_ATTR: "aria-checked",
  ARIA_CHECKED_INDETERMINATE_VALUE: "mixed",
  DATA_INDETERMINATE_ATTR: "data-indeterminate",
  NATIVE_CONTROL_SELECTOR: ".mdc-checkbox__native-control",
  TRANSITION_STATE_CHECKED: "checked",
  TRANSITION_STATE_INDETERMINATE: "indeterminate",
  TRANSITION_STATE_INIT: "init",
  TRANSITION_STATE_UNCHECKED: "unchecked"
}, ou = {
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
var Wp = (
  /** @class */
  function(t) {
    Ve(e, t);
    function e(n) {
      var r = t.call(this, ue(ue({}, e.defaultAdapter), n)) || this;
      return r.currentCheckState = Sn.TRANSITION_STATE_INIT, r.currentAnimationClass = "", r.animEndLatchTimer = 0, r.enableAnimationEndHandler = !1, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return ma;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Sn;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return ou;
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
      }, ou.ANIM_END_LATCH_MS));
    }, e.prototype.handleChange = function() {
      this.transitionCheckState();
    }, e.prototype.transitionCheckState = function() {
      if (this.adapter.hasNativeControl()) {
        var n = this.currentCheckState, r = this.determineCheckState();
        if (n !== r) {
          this.updateAriaChecked();
          var i = Sn.TRANSITION_STATE_UNCHECKED, a = ma.SELECTED;
          r === i ? this.adapter.removeClass(a) : this.adapter.addClass(a), this.currentAnimationClass.length > 0 && (clearTimeout(this.animEndLatchTimer), this.adapter.forceLayout(), this.adapter.removeClass(this.currentAnimationClass)), this.currentAnimationClass = this.getTransitionAnimationClass(n, r), this.currentCheckState = r, this.adapter.isAttachedToDOM() && this.currentAnimationClass.length > 0 && (this.adapter.addClass(this.currentAnimationClass), this.enableAnimationEndHandler = !0);
        }
      }
    }, e.prototype.determineCheckState = function() {
      var n = Sn.TRANSITION_STATE_INDETERMINATE, r = Sn.TRANSITION_STATE_CHECKED, i = Sn.TRANSITION_STATE_UNCHECKED;
      return this.adapter.isIndeterminate() ? n : this.adapter.isChecked() ? r : i;
    }, e.prototype.getTransitionAnimationClass = function(n, r) {
      var i = Sn.TRANSITION_STATE_INIT, a = Sn.TRANSITION_STATE_CHECKED, o = Sn.TRANSITION_STATE_UNCHECKED, u = e.cssClasses, l = u.ANIM_UNCHECKED_CHECKED, c = u.ANIM_UNCHECKED_INDETERMINATE, d = u.ANIM_CHECKED_UNCHECKED, v = u.ANIM_CHECKED_INDETERMINATE, f = u.ANIM_INDETERMINATE_CHECKED, m = u.ANIM_INDETERMINATE_UNCHECKED;
      switch (n) {
        case i:
          return r === o ? "" : r === a ? f : m;
        case o:
          return r === a ? l : c;
        case a:
          return r === o ? d : v;
        default:
          return r === a ? f : m;
      }
    }, e.prototype.updateAriaChecked = function() {
      this.adapter.isIndeterminate() ? this.adapter.setNativeControlAttr(Sn.ARIA_CHECKED_ATTR, Sn.ARIA_CHECKED_INDETERMINATE_VALUE) : this.adapter.removeNativeControlAttr(Sn.ARIA_CHECKED_ATTR);
    }, e;
  }(Tt)
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
var bn = {
  CLOSED_CLASS: "mdc-linear-progress--closed",
  CLOSED_ANIMATION_OFF_CLASS: "mdc-linear-progress--closed-animation-off",
  INDETERMINATE_CLASS: "mdc-linear-progress--indeterminate",
  REVERSED_CLASS: "mdc-linear-progress--reversed",
  ANIMATION_READY_CLASS: "mdc-linear-progress--animation-ready"
}, Hn = {
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
var qp = (
  /** @class */
  function(t) {
    Ve(e, t);
    function e(n) {
      var r = t.call(this, ue(ue({}, e.defaultAdapter), n)) || this;
      return r.observer = null, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return bn;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Hn;
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
      this.determinate = !this.adapter.hasClass(bn.INDETERMINATE_CLASS), this.adapter.addClass(bn.ANIMATION_READY_CLASS), this.progress = 0, this.buffer = 1, this.observer = this.adapter.attachResizeObserver(function(r) {
        var i, a;
        if (!n.determinate)
          try {
            for (var o = Ht(r), u = o.next(); !u.done; u = o.next()) {
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
        this.adapter.removeClass(bn.INDETERMINATE_CLASS), this.adapter.setAttribute(Hn.ARIA_VALUENOW, this.progress.toString()), this.adapter.setAttribute(Hn.ARIA_VALUEMAX, "1"), this.adapter.setAttribute(Hn.ARIA_VALUEMIN, "0"), this.setPrimaryBarProgress(this.progress), this.setBufferBarProgress(this.buffer);
        return;
      }
      this.observer && this.calculateAndSetDimensions(this.adapter.getWidth()), this.adapter.addClass(bn.INDETERMINATE_CLASS), this.adapter.removeAttribute(Hn.ARIA_VALUENOW), this.adapter.removeAttribute(Hn.ARIA_VALUEMAX), this.adapter.removeAttribute(Hn.ARIA_VALUEMIN), this.setPrimaryBarProgress(1), this.setBufferBarProgress(1);
    }, e.prototype.isDeterminate = function() {
      return this.determinate;
    }, e.prototype.setProgress = function(n) {
      this.progress = n, this.determinate && (this.setPrimaryBarProgress(n), this.adapter.setAttribute(Hn.ARIA_VALUENOW, n.toString()));
    }, e.prototype.getProgress = function() {
      return this.progress;
    }, e.prototype.setBuffer = function(n) {
      this.buffer = n, this.determinate && this.setBufferBarProgress(n);
    }, e.prototype.getBuffer = function() {
      return this.buffer;
    }, e.prototype.open = function() {
      this.adapter.removeClass(bn.CLOSED_CLASS), this.adapter.removeClass(bn.CLOSED_ANIMATION_OFF_CLASS), this.adapter.removeAttribute(Hn.ARIA_HIDDEN);
    }, e.prototype.close = function() {
      this.adapter.addClass(bn.CLOSED_CLASS), this.adapter.setAttribute(Hn.ARIA_HIDDEN, "true");
    }, e.prototype.isClosed = function() {
      return this.adapter.hasClass(bn.CLOSED_CLASS);
    }, e.prototype.handleTransitionEnd = function() {
      this.adapter.hasClass(bn.CLOSED_CLASS) && this.adapter.addClass(bn.CLOSED_ANIMATION_OFF_CLASS);
    }, e.prototype.destroy = function() {
      t.prototype.destroy.call(this), this.observer && this.observer.disconnect();
    }, e.prototype.restartAnimation = function() {
      this.adapter.removeClass(bn.ANIMATION_READY_CLASS), this.adapter.forceLayout(), this.adapter.addClass(bn.ANIMATION_READY_CLASS);
    }, e.prototype.setPrimaryBarProgress = function(n) {
      var r = "scaleX(" + n + ")", i = typeof window < "u" ? Ug(window, "transform") : "transform";
      this.adapter.setPrimaryBarStyle(i, r);
    }, e.prototype.setBufferBarProgress = function(n) {
      var r = n * 100 + "%";
      this.adapter.setBufferBarStyle(Hn.FLEX_BASIS, r);
    }, e.prototype.calculateAndSetDimensions = function(n) {
      var r = n * ga.PRIMARY_HALF, i = n * ga.PRIMARY_FULL, a = n * ga.SECONDARY_QUARTER, o = n * ga.SECONDARY_HALF, u = n * ga.SECONDARY_FULL;
      this.adapter.setStyle("--mdc-linear-progress-primary-half", r + "px"), this.adapter.setStyle("--mdc-linear-progress-primary-half-neg", -r + "px"), this.adapter.setStyle("--mdc-linear-progress-primary-full", i + "px"), this.adapter.setStyle("--mdc-linear-progress-primary-full-neg", -i + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-quarter", a + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-quarter-neg", -a + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-half", o + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-half-neg", -o + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-full", u + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-full-neg", -u + "px"), this.restartAnimation();
    }, e;
  }(Tt)
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
}, su = {
  ARIA_SELECTED: "aria-selected",
  ARIA_SORT: "aria-sort"
}, Yr = {
  ARIA_SELECTED: su.ARIA_SELECTED,
  ARIA_SORT: su.ARIA_SORT
}, yn;
(function(t) {
  t.ASCENDING = "ascending", t.DESCENDING = "descending", t.NONE = "none", t.OTHER = "other";
})(yn || (yn = {}));
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
var zp = (
  /** @class */
  function(t) {
    Ve(e, t);
    function e(n) {
      return t.call(this, ue(ue({}, e.defaultAdapter), n)) || this;
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
      return Cc(this, void 0, void 0, function() {
        return Zs(this, function(n) {
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
        o !== i && (this.adapter.removeClassNameByHeaderCellIndex(o, ur.HEADER_CELL_SORTED), this.adapter.removeClassNameByHeaderCellIndex(o, ur.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(o, Yr.ARIA_SORT, yn.NONE), this.adapter.setSortStatusLabelByHeaderCellIndex(o, yn.NONE));
      this.adapter.setClassNameByHeaderCellIndex(i, ur.HEADER_CELL_SORTED);
      var u = this.adapter.getAttributeByHeaderCellIndex(i, Yr.ARIA_SORT), l = yn.NONE;
      u === yn.ASCENDING ? (this.adapter.setClassNameByHeaderCellIndex(i, ur.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(i, Yr.ARIA_SORT, yn.DESCENDING), l = yn.DESCENDING) : u === yn.DESCENDING ? (this.adapter.removeClassNameByHeaderCellIndex(i, ur.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(i, Yr.ARIA_SORT, yn.ASCENDING), l = yn.ASCENDING) : (this.adapter.setAttributeByHeaderCellIndex(i, Yr.ARIA_SORT, yn.ASCENDING), l = yn.ASCENDING), this.adapter.setSortStatusLabelByHeaderCellIndex(i, l), this.adapter.notifySortAction({
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
  }(Tt)
), Xp = /* @__PURE__ */ de('<div class="mdc-data-table__progress-indicator"><div class="mdc-data-table__scrim"></div> <!></div>'), Kp = /* @__PURE__ */ de("<div><div><table><!></table></div> <!> <!></div>");
function Yp(t, e) {
  Ce(e, !0);
  const n = () => Qn(P, "$progressClosed", r), [r, i] = br(), { closest: a } = Ga;
  let o = p(e, "use", 19, () => []), u = p(e, "class", 3, ""), l = p(e, "stickyHeader", 3, !1), c = p(e, "sortable", 3, !1), d = p(e, "sort", 15, null), v = p(e, "sortDirection", 15, "ascending"), f = p(e, "sortAscendingAriaLabel", 3, "sorted, ascending"), m = p(e, "sortDescendingAriaLabel", 3, "sorted, descending"), h = p(e, "container$use", 19, () => []), g = p(e, "container$class", 3, ""), b = p(e, "table$use", 19, () => []), y = p(e, "table$class", 3, ""), S = /* @__PURE__ */ qe(e, [
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
  ]), I, _ = /* @__PURE__ */ ve(void 0), E, C = /* @__PURE__ */ ve(void 0), w = /* @__PURE__ */ ve(void 0), x = ce({}), T = /* @__PURE__ */ ve(ce({ height: "auto", top: "initial" })), B = me("SMUI:addLayoutListener"), K, M = !1, P = tn(!1), O = tn(d());
  Te(() => {
    ci(O, d());
  });
  let A = tn(v());
  Te(() => {
    ci(A, v());
  }), oe("SMUI:checkbox:context", "data-table"), oe("SMUI:linear-progress:context", "data-table"), oe("SMUI:linear-progress:closed", P), oe("SMUI:data-table:sortable", c()), oe("SMUI:data-table:sort", O), oe("SMUI:data-table:sortDirection", A), oe("SMUI:data-table:sortAscendingAriaLabel", f()), oe("SMUI:data-table:sortDescendingAriaLabel", m()), B && (K = B(be));
  let N;
  Te(() => {
    e.progress && s(_) && N !== n() && (N = n(), n() ? s(_).hideProgress() : s(_).showProgress());
  }), oe("SMUI:checkbox:mount", () => {
    s(_) && M && s(_).layout();
  }), oe("SMUI:data-table:header:mount", (k) => {
    X(C, k, !0);
  }), oe("SMUI:data-table:header:unmount", () => {
    X(C, void 0);
  }), oe("SMUI:data-table:body:mount", (k) => {
    X(w, k, !0);
  }), oe("SMUI:data-table:body:unmount", () => {
    X(w, void 0);
  }), rt(() => (X(
    _,
    new zp({
      addClass: q,
      removeClass: J,
      getHeaderCellElements: () => {
        var k;
        return ((k = s(C)) == null ? void 0 : k.cells.map((z) => z.element)) ?? [];
      },
      getHeaderCellCount: () => {
        var k;
        return ((k = s(C)) == null ? void 0 : k.cells.length) ?? 0;
      },
      getAttributeByHeaderCellIndex: (k, z) => {
        var he;
        return ((he = s(C)) == null ? void 0 : he.orderedCells[k].getAttr(z)) ?? null;
      },
      setAttributeByHeaderCellIndex: (k, z, he) => {
        var Re;
        (Re = s(C)) == null || Re.orderedCells[k].addAttr(z, he);
      },
      setClassNameByHeaderCellIndex: (k, z) => {
        var he;
        (he = s(C)) == null || he.orderedCells[k].addClass(z);
      },
      removeClassNameByHeaderCellIndex: (k, z) => {
        var he;
        (he = s(C)) == null || he.orderedCells[k].removeClass(z);
      },
      notifySortAction: (k) => {
        d(k.columnId), v(k.sortValue), Je(V(), "SMUIDataTableSorted", k);
      },
      getTableContainerHeight: () => E.getBoundingClientRect().height,
      getTableHeaderHeight: () => {
        const k = V().querySelector(".mdc-data-table__header-row");
        if (!k)
          throw new Error("MDCDataTable: Table header element not found.");
        return k.getBoundingClientRect().height;
      },
      setProgressIndicatorStyles: (k) => {
        X(T, k, !0);
      },
      addClassAtRowIndex: (k, z) => {
        var he;
        (he = s(w)) == null || he.orderedRows[k].addClass(z);
      },
      getRowCount: () => {
        var k;
        return ((k = s(w)) == null ? void 0 : k.rows.length) ?? 0;
      },
      getRowElements: () => {
        var k;
        return ((k = s(w)) == null ? void 0 : k.rows.map((z) => z.element)) ?? [];
      },
      getRowIdAtIndex: (k) => {
        var z;
        return ((z = s(w)) == null ? void 0 : z.orderedRows[k].rowId) ?? null;
      },
      getRowIndexByChildElement: (k) => {
        var z;
        return ((z = s(w)) == null ? void 0 : z.orderedRows.map((he) => he.element).indexOf(a(k, ".mdc-data-table__row"))) ?? -1;
      },
      getSelectedRowCount: () => {
        var k;
        return ((k = s(w)) == null ? void 0 : k.rows.filter((z) => z.selected).length) ?? 0;
      },
      isCheckboxAtRowIndexChecked: (k) => {
        var he;
        const z = (he = s(w)) == null ? void 0 : he.orderedRows[k].checkbox;
        return z ? z.checked : !1;
      },
      isHeaderRowCheckboxChecked: () => {
        var z;
        const k = (z = s(C)) == null ? void 0 : z.checkbox;
        return k ? k.checked : !1;
      },
      isRowsSelectable: () => !!V().querySelector(".mdc-data-table__row-checkbox") || !!V().querySelector(".mdc-data-table__header-row-checkbox"),
      notifyRowSelectionChanged: (k) => {
        var he;
        const z = (he = s(w)) == null ? void 0 : he.orderedRows[k.rowIndex];
        z && Je(V(), "SMUIDataTableSelectionChanged", {
          row: z.element,
          rowId: z.rowId,
          rowIndex: k.rowIndex,
          selected: k.selected
        });
      },
      notifySelectedAll: () => {
        H(!1), Je(V(), "SMUIDataTableSelectedAll");
      },
      notifyUnselectedAll: () => {
        H(!1), Je(V(), "SMUIDataTableUnselectedAll");
      },
      notifyRowClick: (k) => Je(V(), "SMUIDataTableClickRow", k),
      registerHeaderRowCheckbox: () => {
      },
      registerRowCheckboxes: () => {
      },
      removeClassAtRowIndex: (k, z) => {
        var he;
        (he = s(w)) == null || he.orderedRows[k].removeClass(z);
      },
      setAttributeAtRowIndex: (k, z, he) => {
        var Re;
        (Re = s(w)) == null || Re.orderedRows[k].addAttr(z, he);
      },
      setHeaderRowCheckboxChecked: (k) => {
        var he;
        const z = (he = s(C)) == null ? void 0 : he.checkbox;
        z && (z.checked = k);
      },
      setHeaderRowCheckboxIndeterminate: H,
      setRowCheckboxCheckedAtIndex: (k, z) => {
        var Re;
        const he = (Re = s(w)) == null ? void 0 : Re.orderedRows[k].checkbox;
        he && (he.checked = z);
      },
      setSortStatusLabelByHeaderCellIndex: (k, z) => {
      }
    }),
    !0
  ), s(_).init(), s(_).layout(), M = !0, () => {
    var k;
    (k = s(_)) == null || k.destroy();
  })), Mn(() => {
    K && K();
  });
  function U(k) {
    s(_) && s(_).handleRowCheckboxChange(k);
  }
  function q(k) {
    x[k] || (x[k] = !0);
  }
  function J(k) {
    (!(k in x) || x[k]) && (x[k] = !1);
  }
  function H(k) {
    var he;
    const z = (he = s(C)) == null ? void 0 : he.checkbox;
    z && (z.indeterminate = k);
  }
  function R(k) {
    if (!s(_) || !k.detail.target)
      return;
    const z = a(k.detail.target, ".mdc-data-table__header-cell--with-sort");
    z && Ae(z);
  }
  function j(k) {
    if (!s(_) || !k.detail.target)
      return;
    const z = a(k.detail.target, ".mdc-data-table__row");
    z && s(_) && s(_).handleRowClick({ rowId: k.detail.rowId, row: z });
  }
  function Ae(k) {
    var Fe, ct;
    const z = ((Fe = s(C)) == null ? void 0 : Fe.orderedCells) ?? [], he = z.map((pt) => pt.element).indexOf(k);
    if (he === -1)
      return;
    const Re = z[he].columnId ?? null;
    (ct = s(_)) == null || ct.handleSortAction({ columnId: Re, columnIndex: he, headerCell: k });
  }
  function be() {
    var k;
    return (k = s(_)) == null ? void 0 : k.layout();
  }
  function V() {
    return I;
  }
  var G = { layout: be, getElement: V }, F = Kp(), ee = (k) => {
    var z;
    s(_) && s(_).handleHeaderRowCheckboxChange(), (z = e.onSMUIDataTableHeaderCheckboxChange) == null || z.call(e, k);
  }, Q = (k) => {
    var z;
    R(k), (z = e.onSMUIDataTableHeaderClick) == null || z.call(e, k);
  }, fe = (k) => {
    var z;
    j(k), (z = e.onSMUIDataTableRowClick) == null || z.call(e, k);
  }, we = (k) => {
    var z;
    U(k), (z = e.onSMUIDataTableBodyCheckboxChange) == null || z.call(e, k);
  };
  Ue(
    F,
    (k, z) => ({
      class: k,
      ...z,
      onSMUIDataTableHeaderCheckboxChange: ee,
      onSMUIDataTableHeaderClick: Q,
      onSMUIDataTableRowClick: fe,
      onSMUIDataTableBodyCheckboxChange: we
    }),
    [
      () => De({
        "mdc-data-table": !0,
        "mdc-data-table--sticky-header": l(),
        ...x,
        [u()]: !0
      }),
      () => er(S, ["container$", "table$"])
    ]
  );
  var $ = se(F);
  Ue($, (k, z) => ({ class: k, ...z }), [
    () => De({
      "mdc-data-table__table-container": !0,
      [g()]: !0
    }),
    () => it(S, "container$")
  ]);
  var ie = se($);
  Ue(ie, (k, z) => ({ class: k, ...z }), [
    () => De({ "mdc-data-table__table": !0, [y()]: !0 }),
    () => it(S, "table$")
  ]);
  var Pe = se(ie);
  Se(Pe, () => e.children ?? pe), Me(ie, (k, z) => W == null ? void 0 : W(k, z), b), Ee($, (k) => E = k, () => E), Me($, (k, z) => W == null ? void 0 : W(k, z), h);
  var Le = Ie($, 2);
  {
    var We = (k) => {
      var z = Xp(), he = Ie(se(z), 2);
      Se(he, () => e.progress ?? pe), Oe((Re) => Ut(z, Re), [
        () => Object.entries(s(T)).map(([Re, Fe]) => `${Re}: ${Fe};`).join(" ")
      ]), L(k, z);
    };
    ae(Le, (k) => {
      e.progress && k(We);
    });
  }
  var Ke = Ie(Le, 2);
  Se(Ke, () => e.paginate ?? pe), Ee(F, (k) => I = k, () => I), Me(F, (k, z) => W == null ? void 0 : W(k, z), o), L(t, F);
  var ke = xe(G);
  return i(), ke;
}
var Zp = /* @__PURE__ */ de("<thead><!></thead>");
function Qp(t, e) {
  Ce(e, !0);
  let n = p(e, "use", 19, () => []), r = /* @__PURE__ */ qe(e, ["$$slots", "$$events", "$$legacy", "use", "children"]), i, a = /* @__PURE__ */ ve(void 0), o = [];
  const u = /* @__PURE__ */ new WeakMap();
  oe("SMUI:data-table:row:header", !0);
  const l = me("SMUI:checkbox:mount");
  oe("SMUI:checkbox:mount", (y) => {
    X(a, y, !0), l && l(y);
  });
  const c = me("SMUI:checkbox:unmount");
  oe("SMUI:checkbox:unmount", (y) => {
    X(a, void 0), c && c(y);
  }), oe("SMUI:data-table:cell:mount", (y) => {
    o.push(y), u.set(y.element, y);
  }), oe("SMUI:data-table:cell:unmount", (y) => {
    const S = o.findIndex((I) => I === y);
    S !== -1 && o.splice(S, 1), u.delete(y.element);
  });
  const d = me("SMUI:data-table:header:mount"), v = me("SMUI:data-table:header:unmount");
  rt(() => {
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
    ].map((y) => u.get(y)).filter((y) => y && y._smui_data_table_header_cell_accessor);
  }
  function m() {
    return i;
  }
  var h = { getElement: m }, g = Zp();
  Ue(g, () => ({ ...r }));
  var b = se(g);
  return Se(b, () => e.children ?? pe), Ee(g, (y) => i = y, () => i), Me(g, (y, S) => W == null ? void 0 : W(y, S), n), L(t, g), xe(h);
}
var Jp = /* @__PURE__ */ de("<tbody><!></tbody>");
function $p(t, e) {
  Ce(e, !0);
  let n = p(e, "use", 19, () => []), r = p(e, "class", 3, ""), i = /* @__PURE__ */ qe(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "children"
  ]), a, o = [];
  const u = /* @__PURE__ */ new WeakMap();
  oe("SMUI:data-table:row:header", !1), oe("SMUI:data-table:row:mount", (g) => {
    o.push(g), u.set(g.element, g);
  }), oe("SMUI:data-table:row:unmount", (g) => {
    const b = o.findIndex((y) => y === g);
    b !== -1 && o.splice(b, 1), u.delete(g.element);
  });
  const l = me("SMUI:data-table:body:mount"), c = me("SMUI:data-table:body:unmount");
  rt(() => {
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
    return [...v().querySelectorAll(".mdc-data-table__row")].map((g) => u.get(g)).filter((g) => g && g._smui_data_table_row_accessor);
  }
  function v() {
    return a;
  }
  var f = { getElement: v }, m = Jp();
  Ue(m, (g) => ({ class: g, ...i }), [
    () => De({ "mdc-data-table__content": !0, [r()]: !0 })
  ]);
  var h = se(m);
  return Se(h, () => e.children ?? pe), Ee(m, (g) => a = g, () => a), Me(m, (g, b) => W == null ? void 0 : W(g, b), n), L(t, m), xe(f);
}
let eb = 0;
var tb = /* @__PURE__ */ de("<tr><!></tr>");
function to(t, e) {
  Ce(e, !0);
  let n = p(e, "use", 19, () => []), r = p(e, "class", 3, ""), i = p(e, "rowId", 19, () => "SMUI-data-table-row-" + eb++), a = /* @__PURE__ */ qe(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "rowId",
    "children"
  ]), o, u = /* @__PURE__ */ ve(void 0), l = ce({}), c = ce({}), d = me("SMUI:data-table:row:header");
  const v = me("SMUI:checkbox:mount");
  oe("SMUI:checkbox:mount", (B) => {
    X(u, B, !0), v && v(B);
  });
  const f = me("SMUI:checkbox:unmount");
  oe("SMUI:checkbox:unmount", (B) => {
    X(u, void 0), f && f(B);
  });
  const m = me("SMUI:data-table:row:mount"), h = me("SMUI:data-table:row:unmount");
  rt(() => {
    const B = d ? {
      _smui_data_table_row_accessor: !1,
      get element() {
        return E();
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
      removeClass: b,
      getAttr: y,
      addAttr: S
    } : {
      _smui_data_table_row_accessor: !0,
      get element() {
        return E();
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
      removeClass: b,
      getAttr: y,
      addAttr: S
    };
    return m && m(B), () => {
      h && h(B);
    };
  });
  function g(B) {
    l[B] || (l[B] = !0);
  }
  function b(B) {
    (!(B in l) || l[B]) && (l[B] = !1);
  }
  function y(B) {
    return B in c ? c[B] ?? null : E().getAttribute(B);
  }
  function S(B, K) {
    c[B] !== K && (c[B] = K);
  }
  function I(B) {
    Je(E(), "SMUIDataTableHeaderClick", B);
  }
  function _(B) {
    Je(E(), "SMUIDataTableRowClick", { rowId: i(), target: B.target });
  }
  function E() {
    return o;
  }
  var C = { getElement: E }, w = tb(), x = (B) => {
    var K;
    d ? I(B) : _(B), (K = e.onclick) == null || K.call(e, B);
  };
  Ue(
    w,
    (B) => ({
      class: B,
      "aria-selected": s(u) ? s(u).checked ? "true" : "false" : void 0,
      ...c,
      ...a,
      onclick: x
    }),
    [
      () => De({
        "mdc-data-table__header-row": d,
        "mdc-data-table__row": !d,
        "mdc-data-table__row--selected": !d && s(u) && s(u).checked,
        ...l,
        [r()]: !0
      })
    ]
  );
  var T = se(w);
  return Se(T, () => e.children ?? pe), Ee(w, (B) => o = B, () => o), Me(w, (B, K) => W == null ? void 0 : W(B, K), n), L(t, w), xe(C);
}
let nb = 0;
var rb = /* @__PURE__ */ de('<div class="mdc-data-table__header-cell-wrapper"><!> <div class="mdc-data-table__sort-status-label" aria-hidden="true"> </div></div>'), ib = /* @__PURE__ */ de("<th><!></th>"), ab = /* @__PURE__ */ de("<td><!></td>");
function pa(t, e) {
  Ce(e, !0);
  const n = () => Qn(y, "$sort", i), r = () => Qn(S, "$sortDirection", i), [i, a] = br();
  let o = me("SMUI:data-table:row:header"), u = p(e, "use", 19, () => []), l = p(e, "class", 3, ""), c = p(e, "numeric", 3, !1), d = p(e, "checkbox", 3, !1), v = p(e, "columnId", 19, () => o ? "SMUI-data-table-column-" + nb++ : "SMUI-data-table-unused"), f = p(e, "sortable", 19, () => me("SMUI:data-table:sortable")), m = /* @__PURE__ */ qe(e, [
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
  ]), h, g = ce({}), b = ce({}), y = me("SMUI:data-table:sort"), S = me("SMUI:data-table:sortDirection"), I = me("SMUI:data-table:sortAscendingAriaLabel"), _ = me("SMUI:data-table:sortDescendingAriaLabel");
  f() && (oe("SMUI:label:context", "data-table:sortable-header-cell"), oe("SMUI:icon-button:context", "data-table:sortable-header-cell"), oe("SMUI:icon-button:aria-describedby", v() + "-status-label"));
  const E = me("SMUI:data-table:cell:mount"), C = me("SMUI:data-table:cell:unmount");
  rt(() => {
    const H = o ? {
      _smui_data_table_header_cell_accessor: !0,
      get element() {
        return P();
      },
      get columnId() {
        return v();
      },
      addClass: w,
      removeClass: x,
      getAttr: T,
      addAttr: B
    } : {
      _smui_data_table_header_cell_accessor: !1,
      get element() {
        return P();
      },
      get columnId() {
      },
      addClass: w,
      removeClass: x,
      getAttr: T,
      addAttr: B
    };
    return E && E(H), () => {
      C && C(H);
    };
  });
  function w(H) {
    g[H] || (g[H] = !0);
  }
  function x(H) {
    (!(H in g) || g[H]) && (g[H] = !1);
  }
  function T(H) {
    return H in b ? b[H] ?? null : P().getAttribute(H);
  }
  function B(H, R) {
    b[H] !== R && (b[H] = R);
  }
  function K(H) {
    Je(P(), "SMUIDataTableHeaderCheckboxChange", H);
  }
  function M(H) {
    Je(P(), "SMUIDataTableBodyCheckboxChange", H);
  }
  function P() {
    return h;
  }
  var O = { getElement: P }, A = ne(), N = Z(A);
  {
    var U = (H) => {
      var R = ib(), j = (G) => {
        var F;
        d() && K(G), (F = e.onchange) == null || F.call(e, G);
      };
      Ue(
        R,
        (G) => ({
          class: G,
          role: "columnheader",
          scope: "col",
          "data-column-id": v(),
          "aria-sort": f() ? n() === v() ? r() : "none" : void 0,
          ...b,
          ...m,
          onchange: j
        }),
        [
          () => De({
            "mdc-data-table__header-cell": !0,
            "mdc-data-table__header-cell--numeric": c(),
            "mdc-data-table__header-cell--checkbox": d(),
            "mdc-data-table__header-cell--with-sort": f(),
            "mdc-data-table__header-cell--sorted": f() && n() === v(),
            ...g,
            [l()]: !0
          })
        ]
      );
      var Ae = se(R);
      {
        var be = (G) => {
          var F = rb(), ee = se(F);
          Se(ee, () => e.children ?? pe);
          var Q = Ie(ee, 2), fe = se(Q);
          Oe(() => {
            Mr(Q, "id", `${v() ?? ""}-status-label`), at(fe, n() === v() ? r() === "ascending" ? I : _ : "");
          }), L(G, F);
        }, V = (G) => {
          var F = ne(), ee = Z(F);
          Se(ee, () => e.children ?? pe), L(G, F);
        };
        ae(Ae, (G) => {
          f() ? G(be) : G(V, !1);
        });
      }
      Ee(R, (G) => h = G, () => h), Me(R, (G, F) => W == null ? void 0 : W(G, F), u), L(H, R);
    }, q = (H) => {
      var R = ab(), j = (be) => {
        var V;
        d() && M(be), (V = e.onchange) == null || V.call(e, be);
      };
      Ue(
        R,
        (be) => ({
          class: be,
          ...b,
          ...m,
          onchange: j
        }),
        [
          () => De({
            "mdc-data-table__cell": !0,
            "mdc-data-table__cell--numeric": c(),
            "mdc-data-table__cell--checkbox": d(),
            ...g,
            [l()]: !0
          })
        ]
      );
      var Ae = se(R);
      Se(Ae, () => e.children ?? pe), Ee(R, (be) => h = be, () => h), Me(R, (be, V) => W == null ? void 0 : W(be, V), u), L(H, R);
    };
    ae(N, (H) => {
      o ? H(U) : H(q, !1);
    });
  }
  L(t, A);
  var J = xe(O);
  return a(), J;
}
En(["click"]);
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
var ob = {
  ROOT: "mdc-form-field"
}, sb = {
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
var lb = (
  /** @class */
  function(t) {
    Ve(e, t);
    function e(n) {
      var r = t.call(this, ue(ue({}, e.defaultAdapter), n)) || this;
      return r.click = function() {
        r.handleClick();
      }, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return ob;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return sb;
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
  }(Tt)
);
let ub = 0;
var cb = /* @__PURE__ */ de("<div><!> <label><!></label></div>");
function db(t, e) {
  Ce(e, !0);
  let n = p(e, "use", 19, () => []), r = p(e, "class", 3, ""), i = p(e, "align", 3, "start"), a = p(e, "noWrap", 3, !1), o = p(e, "inputId", 19, () => "SMUI-form-field-" + ub++), u = p(e, "label$use", 19, () => []), l = /* @__PURE__ */ qe(e, [
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
  ]), c, d = /* @__PURE__ */ ve(void 0), v = new ia(), f, m = /* @__PURE__ */ ve(void 0);
  oe("SMUI:generic:input:props", { id: o() }), oe("SMUI:generic:input:mount", (_) => {
    X(m, _, !0);
  }), oe("SMUI:generic:input:unmount", () => {
    X(m, void 0);
  }), rt(() => (X(
    d,
    new lb({
      activateInputRipple: () => {
        s(m) && s(m).activateRipple();
      },
      deactivateInputRipple: () => {
        s(m) && s(m).deactivateRipple();
      },
      deregisterInteractionHandler: (_, E) => v.off(f, _, E),
      registerInteractionHandler: (_, E) => v.on(f, _, E)
    }),
    !0
  ), s(d).init(), () => {
    var _;
    (_ = s(d)) == null || _.destroy(), v.clear();
  }));
  function h() {
    return c;
  }
  var g = { getElement: h }, b = cb();
  Ue(b, (_, E) => ({ class: _, ...E }), [
    () => De({
      "mdc-form-field": !0,
      "mdc-form-field--align-end": i() === "end",
      "mdc-form-field--nowrap": a(),
      [r()]: !0
    }),
    () => er(l, ["label$"])
  ]);
  var y = se(b);
  Se(y, () => e.children ?? pe);
  var S = Ie(y, 2);
  Ue(S, (_) => ({ for: o(), ..._ }), [() => it(l, "label$")]);
  var I = se(S);
  return Se(I, () => e.label ?? pe), Ee(S, (_) => f = _, () => f), Me(S, (_, E) => W == null ? void 0 : W(_, E), u), Ee(b, (_) => c = _, () => c), Me(b, (_, E) => W == null ? void 0 : W(_, E), n), L(t, b), xe(g);
}
En(["click"]);
function Ps(t, e, n) {
  return e in t ? Object.defineProperty(t, e, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = n, t;
}
var fb = Object.freeze({
  // This flag exists as a workaround for issue 454 (basically a browser bug) - seems like these rect values take time to update when in grid layout. Setting it to true can cause strange behaviour in the REPL for non-grid zones, see issue 470
  USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT: "USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT"
});
Ps({}, fb.USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT, !1);
var no, lu = {
  DND_ZONE_ACTIVE: "dnd-zone-active",
  DND_ZONE_DRAG_DISABLED: "dnd-zone-drag-disabled"
};
no = {}, Ps(no, lu.DND_ZONE_ACTIVE, "Tab to one the items and press space-bar or enter to start dragging it"), Ps(no, lu.DND_ZONE_DRAG_DISABLED, "This is a disabled drag and drop list");
function hb(t) {
  return t * t * t;
}
function od(t) {
  const e = t - 1;
  return e * e * e + 1;
}
function vb(t, { from: e, to: n }, r = {}) {
  var { delay: i = 0, duration: a = (C) => Math.sqrt(C) * 120, easing: o = od } = r, u = getComputedStyle(t), l = u.transform === "none" ? "" : u.transform, [c, d] = u.transformOrigin.split(" ").map(parseFloat);
  c /= t.clientWidth, d /= t.clientHeight;
  var v = mb(t), f = t.clientWidth / n.width / v, m = t.clientHeight / n.height / v, h = e.left + e.width * c, g = e.top + e.height * d, b = n.left + n.width * c, y = n.top + n.height * d, S = (h - b) * f, I = (g - y) * m, _ = e.width / n.width, E = e.height / n.height;
  return {
    delay: i,
    duration: typeof a == "function" ? a(Math.sqrt(S * S + I * I)) : a,
    easing: o,
    css: (C, w) => {
      var x = w * S, T = w * I, B = C + w * _, K = C + w * E;
      return `transform: ${l} translate(${x}px, ${T}px) scale(${B}, ${K});`;
    }
  };
}
function mb(t) {
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
function gb(t) {
  const e = t - 1;
  return e * e * e + 1;
}
function uu(t) {
  const e = typeof t == "string" && t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
  return e ? [parseFloat(e[1]), e[2] || "px"] : [
    /** @type {number} */
    t,
    "px"
  ];
}
function Co(t, { delay: e = 0, duration: n = 400, easing: r = gb, x: i = 0, y: a = 0, opacity: o = 0 } = {}) {
  const u = getComputedStyle(t), l = +u.opacity, c = u.transform === "none" ? "" : u.transform, d = l * (1 - o), [v, f] = uu(i), [m, h] = uu(a);
  return {
    delay: e,
    duration: n,
    easing: r,
    css: (g, b) => `
			transform: ${c} translate(${(1 - g) * v}${f}, ${(1 - g) * m}${h});
			opacity: ${l - d * b}`
  };
}
En([
  "click",
  "keydown",
  "pointerdown",
  "pointerup",
  "pointermove"
]);
function pb(t, e) {
  var n;
  (n = e()) == null || n();
}
var bb = /* @__PURE__ */ de('<div class="detail svelte-4xu36c"> </div>'), _b = /* @__PURE__ */ de('<div class="toast-card svelte-4xu36c"><div class="icon svelte-4xu36c"><!></div> <div class="content svelte-4xu36c"><div class="summary svelte-4xu36c"> </div> <!></div> <button class="close svelte-4xu36c"><!></button></div>');
function yb(t, e) {
  Ce(e, !0);
  let n = p(e, "onClose", 3, () => {
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
  var a = _b(), o = se(a), u = se(o);
  Rs(u, {
    class: "material-icons",
    children: (g, b) => {
      var y = Rt();
      Oe(() => at(y, r[e.type])), L(g, y);
    },
    $$slots: { default: !0 }
  });
  var l = Ie(o, 2), c = se(l), d = se(c), v = Ie(c, 2);
  {
    var f = (g) => {
      var b = bb(), y = se(b);
      Oe(() => at(y, e.detail)), L(g, b);
    };
    ae(v, (g) => {
      e.detail && g(f);
    });
  }
  var m = Ie(l, 2);
  m.__click = [pb, n];
  var h = se(m);
  Rs(h, {
    class: "material-icons",
    children: (g, b) => {
      var y = Rt("close");
      L(g, y);
    },
    $$slots: { default: !0 }
  }), Oe(() => {
    Ut(a, `--color:${i[e.type] ?? ""}`), at(d, e.summary);
  }), bo(1, a, () => Co, () => ({ x: 0, y: 30, duration: 150, easing: hb })), bo(2, a, () => Co, () => ({ x: 50, y: 0, duration: 150, easing: od })), L(t, a), xe();
}
En(["click"]);
const Ib = 4e3;
function Eb() {
  let t = ce({ items: [] }), e = 0;
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
const Oa = Eb();
var Sb = /* @__PURE__ */ de("<div><!></div>"), Ab = /* @__PURE__ */ de('<div class="toast-host svelte-11vwiay"></div>');
function Cb(t, e) {
  Ce(e, !1);
  const n = Oa.toasts;
  dh();
  var r = Ab();
  wn(r, 13, () => n.items, (i) => i.id, (i, a) => {
    var o = Sb(), u = se(o);
    yb(u, {
      get summary() {
        return s(a).summary;
      },
      get detail() {
        return s(a).detail;
      },
      get type() {
        return s(a).type;
      },
      onClose: () => Oa.remove(s(a).id)
    }), uh(o, () => vb, null), L(i, o);
  }), L(t, r), xe();
}
var xb = (t, e) => {
  t.stopPropagation(), e.onOpen();
}, Tb = (t, e) => {
  t.stopPropagation(), e.onRemove();
}, wb = /* @__PURE__ */ de('<button type="button" style="all: unset; display: flex; align-items: center; justify-content: center;" class="svelte-1mybgc7"><!></button>'), Lb = /* @__PURE__ */ de('<span class="filter-badge__seperator svelte-1mybgc7">|</span> <span class="filter-badge__value svelte-1mybgc7"> </span> <span class="filter-badge__arrow-down"><!></span>', 1), Ob = /* @__PURE__ */ de('<button type="button"><div class="filter-badge__icon svelte-1mybgc7"><!></div> <span class="filter-badge__label svelte-1mybgc7"> </span> <!></button>');
function Rb(t, e) {
  Ce(e, !0);
  let n = /* @__PURE__ */ ge(() => !!e.value);
  var r = Ob();
  r.__click = [xb, e];
  var i = se(r), a = se(i);
  {
    var o = (f) => {
      Ao(f, {
        content: "Remove Filter",
        hoverDelay: 500,
        side: "top",
        children: (m, h) => {
          var g = wb();
          g.__click = [Tb, e];
          var b = se(g);
          id(b, {
            svgStyles: "fill: grey; height: filt-content; width: fit-content;"
          }), L(m, g);
        },
        $$slots: { default: !0 }
      });
    }, u = (f) => {
      Ao(f, {
        content: "Add Filter",
        hoverDelay: 501,
        side: "top",
        children: (m, h) => {
          Mp(m, {
            svgStyles: "fill: grey; height: filt-content; width: fit-content;"
          });
        },
        $$slots: { default: !0 }
      });
    };
    ae(a, (f) => {
      s(n) ? f(o) : f(u, !1);
    });
  }
  var l = Ie(i, 2), c = se(l), d = Ie(l, 2);
  {
    var v = (f) => {
      var m = Lb(), h = Ie(Z(m), 2), g = se(h), b = Ie(h, 2), y = se(b);
      Op(y, { svgStyles: "fill: gray;" }), Oe(() => at(g, e.value)), L(f, m);
    };
    ae(d, (f) => {
      s(n) && f(v);
    });
  }
  Oe(() => {
    Xs(r, 1, `filter-badge ${s(n) ? "filter-badge--active" : "filter-badge--inactive"}`, "svelte-1mybgc7"), at(c, e.label);
  }), L(t, r), xe();
}
En(["click"]);
var Mb = /* @__PURE__ */ de('<div><input/> <div class="mdc-checkbox__background"><svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24"><path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"></path></svg> <div class="mdc-checkbox__mixedmark"></div></div> <div class="mdc-checkbox__ripple"></div></div>');
function Db(t, e) {
  Ce(e, !0);
  let n = () => {
  };
  function r($) {
    return $ === n;
  }
  let i = p(e, "use", 19, () => []), a = p(e, "class", 3, ""), o = p(e, "style", 3, ""), u = p(e, "disabled", 15, !1), l = p(e, "touch", 3, !1), c = p(e, "indeterminate", 15, n), d = p(e, "group", 11, n), v = p(e, "checked", 15, n), f = p(e, "value", 3, null), m = p(e, "valueKey", 3, n), h = p(e, "input$use", 19, () => []), g = p(e, "input$class", 3, ""), b = /* @__PURE__ */ qe(e, [
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
  ]), y, S = /* @__PURE__ */ ve(void 0), I = /* @__PURE__ */ ve(void 0), _ = ce({}), E = ce({}), C = ce({}), w = /* @__PURE__ */ ve(!1), x = ce(me("SMUI:generic:input:props") ?? {}), T = /* @__PURE__ */ ve(ce(r(d()) ? r(v()) ? !1 : !!v() : d().findIndex(($) => $ === f()) !== -1)), B = me("SMUI:checkbox:context"), K = me("SMUI:data-table:row:header"), M = v(), P = r(d()) ? [] : [...d()], O = s(T);
  Te(() => {
    let $ = !1;
    if (!r(d()))
      if (O !== s(T)) {
        const ie = d().findIndex((Pe) => Pe === f());
        s(T) && ie === -1 ? d().push(f()) : !s(T) && ie !== -1 && d().splice(ie, 1), $ = !0;
      } else {
        const ie = P.findIndex((Le) => Le === f()), Pe = d().findIndex((Le) => Le === f());
        ie > -1 && Pe === -1 ? (X(T, !1), $ = !0) : Pe > -1 && ie === -1 && (X(T, !0), $ = !0);
      }
    r(v()) ? O !== s(T) && ($ = !0) : (v() !== (c() ? null : s(T)) || s(T) !== O) && (v() === M && s(T) !== O ? (v(s(T)), r(c()) || c(!1)) : X(T, !!v()), $ = !0), s(I) && (r(c()) ? s(I).indeterminate && (s(I).indeterminate = !1, $ = !0) : !c() && s(I).indeterminate ? (s(I).indeterminate = !1, $ = !0) : c() && !s(I).indeterminate && (s(I).indeterminate = !0, X(T, !1), $ = !0)), M = v(), P = r(d()) ? [] : [...d()], O = s(T), $ && s(S) && s(S).handleChange();
  });
  const A = me("SMUI:generic:input:mount"), N = me("SMUI:generic:input:unmount"), U = me("SMUI:checkbox:mount"), q = me("SMUI:checkbox:unmount");
  rt(() => {
    if (s(I) == null)
      throw new Error("Checkbox is not defined.");
    s(I).indeterminate = !r(c()) && c(), X(
      S,
      new Wp({
        addClass: J,
        forceLayout: () => V().offsetWidth,
        hasNativeControl: () => !0,
        isAttachedToDOM: () => !!V().parentNode,
        isChecked: () => s(T),
        isIndeterminate: () => r(c()) ? !1 : c(),
        removeClass: H,
        removeNativeControlAttr: Ae,
        setNativeControlAttr: j,
        setNativeControlDisabled: (ie) => u(ie)
      }),
      !0
    );
    const $ = {
      _smui_checkbox_accessor: !0,
      get element() {
        return V();
      },
      get checked() {
        return s(T);
      },
      set checked(ie) {
        s(T) !== ie && X(T, ie, !0);
      },
      get indeterminate() {
        return r(c()) ? !1 : c();
      },
      set indeterminate(ie) {
        c(ie);
      },
      activateRipple() {
        u() || X(w, !0);
      },
      deactivateRipple() {
        X(w, !1);
      }
    };
    return A && A($), U && U($), s(S).init(), () => {
      var ie;
      N && N($), q && q($), (ie = s(S)) == null || ie.destroy();
    };
  });
  function J($) {
    _[$] || (_[$] = !0);
  }
  function H($) {
    (!($ in _) || _[$]) && (_[$] = !1);
  }
  function R($, ie) {
    E[$] != ie && (ie === "" || ie == null ? delete E[$] : E[$] = ie);
  }
  function j($, ie) {
    C[$] !== ie && (C[$] = ie);
  }
  function Ae($) {
    (!($ in C) || C[$] != null) && (C[$] = void 0);
  }
  function be() {
    return x && x.id;
  }
  function V() {
    return y;
  }
  var G = { getId: be, getElement: V }, F = Mb(), ee = ($) => {
    var ie;
    s(S) && s(S).handleAnimationEnd(), (ie = e.onanimationend) == null || ie.call(e, $);
  };
  Ue(F, ($, ie, Pe) => ({ class: $, style: ie, ...Pe, onanimationend: ee }), [
    () => De({
      "mdc-checkbox": !0,
      "mdc-checkbox--disabled": u(),
      "mdc-checkbox--touch": l(),
      "mdc-data-table__header-row-checkbox": B === "data-table" && K,
      "mdc-data-table__row-checkbox": B === "data-table" && !K,
      ..._,
      [a()]: !0
    }),
    () => Object.entries(E).map(([$, ie]) => `${$}: ${ie};`).concat([o()]).join(" "),
    () => er(b, ["input$"])
  ]);
  var Q = se(F), fe = ($) => {
    var ie;
    Je(V(), "blur", $), (ie = e.input$onblur) == null || ie.call(e, $);
  }, we = ($) => {
    var ie;
    Je(V(), "focus", $), (ie = e.input$onfocus) == null || ie.call(e, $);
  };
  return Ue(
    Q,
    ($, ie, Pe, Le) => ({
      class: $,
      type: "checkbox",
      ...x,
      disabled: u(),
      value: ie,
      "data-indeterminate": Pe,
      ...C,
      ...Le,
      onblur: fe,
      onfocus: we
    }),
    [
      () => De({ "mdc-checkbox__native-control": !0, [g()]: !0 }),
      () => r(m()) ? f() : m(),
      () => !r(c()) && c() ? "true" : void 0,
      () => it(b, "input$")
    ],
    void 0,
    void 0,
    !0
  ), Ee(Q, ($) => X(I, $), () => s(I)), Me(Q, ($, ie) => W == null ? void 0 : W($, ie), h), mi(() => ch(Q, () => s(T), ($) => X(T, $))), Ee(F, ($) => y = $, () => y), Me(F, ($, ie) => W == null ? void 0 : W($, ie), i), Me(F, ($, ie) => Xt == null ? void 0 : Xt($, ie), () => ({
    unbounded: !0,
    addClass: J,
    removeClass: H,
    addStyle: R,
    active: s(w),
    eventTarget: s(I)
  })), L(t, F), xe(G);
}
var Pb = /* @__PURE__ */ de('<div style="display: flex; flex-direction: column;"></div>');
function Nb(t, e) {
  Ce(e, !0);
  let n = p(e, "data", 19, () => []), r = p(e, "values", 31, () => ce([]));
  var i = Pb();
  wn(i, 21, n, Ri, (a, o) => {
    db(a, {
      label: (l) => {
        var c = Rt();
        Oe(() => at(c, s(o).label)), L(l, c);
      },
      children: (l, c) => {
        Db(l, {
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
  }), L(t, i), xe();
}
var Hb = (t) => t.stopPropagation(), Ub = /* @__PURE__ */ de('<div class="custom-menu svelte-58jwwf"><div class="menu-arrow svelte-58jwwf"></div> <h4 class="svelte-58jwwf"> </h4> <div class="custom-menu__content"><!></div> <!></div>'), kb = /* @__PURE__ */ de('<div class="filter-wrapper svelte-58jwwf"><!> <!></div>'), Bb = /* @__PURE__ */ de('<div class="oscd-filters svelte-58jwwf"></div>');
function Fb(t, e) {
  Ce(e, !0);
  let n = p(e, "filters", 15), r = /* @__PURE__ */ ve(null), i = [], a = [];
  function o(h) {
    var g;
    if (!(h.value === void 0 || h.value === null || h.value === ""))
      switch (h.type) {
        case "text":
          return String(h.value);
        case "number":
          return String(h.value);
        case "select":
          const b = (g = h.options) == null ? void 0 : g.find((I) => I.value === h.value);
          return b ? b.label : String(h.value);
        case "multiselect":
          if (!Array.isArray(h.value) || h.value.length === 0) return;
          const y = h.value.map((I) => {
            var E;
            const _ = (E = h.options) == null ? void 0 : E.find((C) => C.value === I);
            return _ ? _.label : String(I);
          }), S = 1;
          return y.length <= S ? y.join(", ") : `${y.slice(0, S).join(", ")} +${y.length - S} more`;
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
    s(r) === h ? X(r, null) : (X(r, h, !0), a[h] = u(n()[h]));
  }
  function c() {
    X(r, null), a[s(r)] = void 0;
  }
  function d(h) {
    var g;
    n(n().map((b, y) => y === h ? { ...b, value: a[h] } : b)), (g = e.onfiltersChanged) == null || g.call(e, [...n()]), X(r, null);
  }
  function v(h) {
    var g;
    n(n().map((b, y) => y === h ? { ...b, value: void 0 } : b)), a[h] = void 0, (g = e.onfiltersChanged) == null || g.call(e, [...n()]), c();
  }
  function f(h) {
    i.some((b) => b && b.contains(h.target)) || c();
  }
  rt(() => {
    document.addEventListener("click", f);
  }), Mn(() => {
    document.removeEventListener("click", f);
  }), Te(() => {
  });
  var m = Bb();
  wn(m, 23, n, (h) => h.key, (h, g, b) => {
    var y = kb(), S = se(y);
    {
      let E = /* @__PURE__ */ ge(() => o(s(g)));
      Rb(S, {
        get label() {
          return s(g).label;
        },
        get value() {
          return s(E);
        },
        onOpen: () => l(s(b)),
        onRemove: () => v(s(b))
      });
    }
    var I = Ie(S, 2);
    {
      var _ = (E) => {
        var C = Ub();
        C.__click = [Hb];
        var w = Ie(se(C), 2), x = se(w), T = Ie(w, 2), B = se(T);
        {
          var K = (O) => {
            Ms(O, {
              get label() {
                return s(g).label;
              },
              get placeholder() {
                return s(g).placeholder;
              },
              get type() {
                return s(g).type;
              },
              style: "width: 100%;",
              get value() {
                return a[s(b)];
              },
              set value(A) {
                a[s(b)] = A;
              }
            });
          }, M = (O) => {
            var A = ne(), N = Z(A);
            {
              var U = (J) => {
                {
                  let H = /* @__PURE__ */ ge(() => {
                    var R;
                    return (R = s(g)) == null ? void 0 : R.options;
                  });
                  ap(J, {
                    get label() {
                      return s(g).label;
                    },
                    get data() {
                      return s(H);
                    },
                    get value() {
                      return a[s(b)];
                    },
                    set value(R) {
                      a[s(b)] = R;
                    }
                  });
                }
              }, q = (J) => {
                var H = ne(), R = Z(H);
                {
                  var j = (be) => {
                    {
                      let V = /* @__PURE__ */ ge(() => {
                        var G;
                        return (G = s(g)) == null ? void 0 : G.options;
                      });
                      Nb(be, {
                        get data() {
                          return s(V);
                        },
                        get values() {
                          return a[s(b)];
                        },
                        set values(G) {
                          a[s(b)] = G;
                        }
                      });
                    }
                  }, Ae = (be) => {
                    var V = ne(), G = Z(V);
                    {
                      var F = (Q) => {
                        Up(Q, {
                          get value() {
                            return a[s(b)];
                          },
                          set value(fe) {
                            a[s(b)] = fe;
                          }
                        });
                      }, ee = (Q) => {
                        var fe = ne(), we = Z(fe);
                        {
                          var $ = (ie) => {
                            Fp(ie, {
                              get value() {
                                return a[s(b)];
                              },
                              set value(Pe) {
                                a[s(b)] = Pe;
                              }
                            });
                          };
                          ae(
                            we,
                            (ie) => {
                              s(g).type === "datetime" && ie($);
                            },
                            !0
                          );
                        }
                        L(Q, fe);
                      };
                      ae(
                        G,
                        (Q) => {
                          s(g).type === "date" ? Q(F) : Q(ee, !1);
                        },
                        !0
                      );
                    }
                    L(be, V);
                  };
                  ae(
                    R,
                    (be) => {
                      s(g).type === "multiselect" ? be(j) : be(Ae, !1);
                    },
                    !0
                  );
                }
                L(J, H);
              };
              ae(
                N,
                (J) => {
                  s(g).type === "select" ? J(U) : J(q, !1);
                },
                !0
              );
            }
            L(O, A);
          };
          ae(B, (O) => {
            s(g).type === "text" || s(g).type === "number" ? O(K) : O(M, !1);
          });
        }
        var P = Ie(T, 2);
        Jc(P, {
          variant: "unelevated",
          style: "background: var(--secondary); color: white; width: 100%;",
          onclick: () => d(s(b)),
          children: (O, A) => {
            var N = Rt("Apply");
            L(O, N);
          },
          $$slots: { default: !0 }
        }), Oe(() => at(x, `Filter by ${s(g).label ?? ""}`)), bo(2, C, () => Co, () => ({ y: 5, duration: 120 })), bo(1, C, () => Co, () => ({ y: -5, duration: 120 })), L(E, C);
      };
      ae(I, (E) => {
        s(r) === s(b) && E(_);
      });
    }
    Ee(y, (E, C) => i[C] = E, (E) => i == null ? void 0 : i[E], () => [s(b)]), L(h, y);
  }), L(t, m), xe();
}
En(["click"]);
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
var sd = {
  ANIMATING: "mdc-tab-scroller--animating",
  SCROLL_AREA_SCROLL: "mdc-tab-scroller__scroll-area--scroll",
  SCROLL_TEST: "mdc-tab-scroller__test"
}, Vb = {
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
var el = (
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
var Gb = (
  /** @class */
  function(t) {
    Ve(e, t);
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
  }(el)
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
var jb = (
  /** @class */
  function(t) {
    Ve(e, t);
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
  }(el)
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
var Wb = (
  /** @class */
  function(t) {
    Ve(e, t);
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
  }(el)
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
var qb = (
  /** @class */
  function(t) {
    Ve(e, t);
    function e(n) {
      var r = t.call(this, ue(ue({}, e.defaultAdapter), n)) || this;
      return r.isAnimating = !1, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return sd;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Vb;
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
      var i = r[1], a = mr(i.split(","), 6);
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
        return this.adapter.setScrollAreaScrollLeft(n), new jb(this.adapter);
      var i = this.adapter.computeScrollAreaClientRect(), a = this.adapter.computeScrollContentClientRect(), o = Math.round(a.right - i.right);
      return this.adapter.setScrollAreaScrollLeft(n), o === r ? new Wb(this.adapter) : new Gb(this.adapter);
    }, e.prototype.isRTL = function() {
      return this.adapter.getScrollContentStyleValue("direction") === "rtl";
    }, e;
  }(Tt)
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
var ss;
function zb(t, e) {
  if (e === void 0 && (e = !0), e && typeof ss < "u")
    return ss;
  var n = t.createElement("div");
  n.classList.add(sd.SCROLL_TEST), t.body.appendChild(n);
  var r = n.offsetHeight - n.clientHeight;
  return t.body.removeChild(n), e && (ss = r), r;
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
var Xb = {
  ACTIVE: "mdc-tab-indicator--active",
  FADE: "mdc-tab-indicator--fade",
  NO_TRANSITION: "mdc-tab-indicator--no-transition"
}, Kb = {
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
    Ve(e, t);
    function e(n) {
      return t.call(this, ue(ue({}, e.defaultAdapter), n)) || this;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Xb;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Kb;
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
  }(Tt)
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
var Yb = (
  /** @class */
  function(t) {
    Ve(e, t);
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
var cu = (
  /** @class */
  function(t) {
    Ve(e, t);
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
var ro = {
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
var Zb = (
  /** @class */
  function(t) {
    Ve(e, t);
    function e(n) {
      var r = t.call(this, ue(ue({}, e.defaultAdapter), n)) || this;
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
      return this.adapter.hasClass(ro.ACTIVE);
    }, e.prototype.setFocusOnActivate = function(n) {
      this.focusOnActivate = n;
    }, e.prototype.activate = function(n) {
      this.adapter.addClass(ro.ACTIVE), this.adapter.setAttr(ba.ARIA_SELECTED, "true"), this.adapter.setAttr(ba.TABINDEX, "0"), this.adapter.activateIndicator(n), this.focusOnActivate && this.adapter.focus();
    }, e.prototype.deactivate = function() {
      this.isActive() && (this.adapter.removeClass(ro.ACTIVE), this.adapter.setAttr(ba.ARIA_SELECTED, "false"), this.adapter.setAttr(ba.TABINDEX, "-1"), this.adapter.deactivateIndicator());
    }, e.prototype.computeDimensions = function() {
      var n = this.adapter.getOffsetWidth(), r = this.adapter.getOffsetLeft(), i = this.adapter.getContentOffsetWidth(), a = this.adapter.getContentOffsetLeft();
      return {
        contentLeft: r + a,
        contentRight: r + a + i,
        rootLeft: r,
        rootRight: r + n
      };
    }, e;
  }(Tt)
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
var xt = {
  ARROW_LEFT_KEY: "ArrowLeft",
  ARROW_RIGHT_KEY: "ArrowRight",
  END_KEY: "End",
  ENTER_KEY: "Enter",
  HOME_KEY: "Home",
  SPACE_KEY: "Space",
  TAB_ACTIVATED_EVENT: "MDCTabBar:activated",
  TAB_SCROLLER_SELECTOR: ".mdc-tab-scroller",
  TAB_SELECTOR: ".mdc-tab"
}, Bn = {
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
var bi = /* @__PURE__ */ new Set();
bi.add(xt.ARROW_LEFT_KEY);
bi.add(xt.ARROW_RIGHT_KEY);
bi.add(xt.END_KEY);
bi.add(xt.HOME_KEY);
bi.add(xt.ENTER_KEY);
bi.add(xt.SPACE_KEY);
var _i = /* @__PURE__ */ new Map();
_i.set(Bn.ARROW_LEFT_KEYCODE, xt.ARROW_LEFT_KEY);
_i.set(Bn.ARROW_RIGHT_KEYCODE, xt.ARROW_RIGHT_KEY);
_i.set(Bn.END_KEYCODE, xt.END_KEY);
_i.set(Bn.HOME_KEYCODE, xt.HOME_KEY);
_i.set(Bn.ENTER_KEYCODE, xt.ENTER_KEY);
_i.set(Bn.SPACE_KEYCODE, xt.SPACE_KEY);
var Qb = (
  /** @class */
  function(t) {
    Ve(e, t);
    function e(n) {
      var r = t.call(this, ue(ue({}, e.defaultAdapter), n)) || this;
      return r.useAutomaticActivation = !1, r;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return xt;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return Bn;
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
      var i = this.isRTL(), a = this.adapter.getTabListLength() - 1, o = r === xt.END_KEY, u = r === xt.ARROW_LEFT_KEY && !i || r === xt.ARROW_RIGHT_KEY && i, l = r === xt.ARROW_RIGHT_KEY && !i || r === xt.ARROW_LEFT_KEY && i, c = n;
      return o ? c = a : u ? c -= 1 : l ? c += 1 : c = 0, c < 0 ? c = a : c > a && (c = 0), c;
    }, e.prototype.calculateScrollIncrement = function(n, r, i, a) {
      var o = this.adapter.getTabDimensionsAtIndex(r), u = o.contentLeft - i - a, l = o.contentRight - i, c = l - Bn.EXTRA_SCROLL_AMOUNT, d = u + Bn.EXTRA_SCROLL_AMOUNT;
      return r < n ? Math.min(c, 0) : Math.max(d, 0);
    }, e.prototype.calculateScrollIncrementRTL = function(n, r, i, a, o) {
      var u = this.adapter.getTabDimensionsAtIndex(r), l = o - u.contentLeft - i, c = o - u.contentRight - i - a, d = c + Bn.EXTRA_SCROLL_AMOUNT, v = l - Bn.EXTRA_SCROLL_AMOUNT;
      return r > n ? Math.max(d, 0) : Math.min(v, 0);
    }, e.prototype.findAdjacentTabIndexClosestToEdge = function(n, r, i, a) {
      var o = r.rootLeft - i, u = r.rootRight - i - a, l = o + u, c = o < 0 || l < 0, d = u > 0 || l > 0;
      return c ? n - 1 : d ? n + 1 : -1;
    }, e.prototype.findAdjacentTabIndexClosestToEdgeRTL = function(n, r, i, a, o) {
      var u = o - r.rootLeft - a - i, l = o - r.rootRight - i, c = u + l, d = u > 0 || c > 0, v = l < 0 || c < 0;
      return d ? n + 1 : v ? n - 1 : -1;
    }, e.prototype.getKeyFromEvent = function(n) {
      return bi.has(n.key) ? n.key : _i.get(n.keyCode);
    }, e.prototype.isActivationKey = function(n) {
      return n === xt.SPACE_KEY || n === xt.ENTER_KEY;
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
  }(Tt)
), Jb = /* @__PURE__ */ de("<div><div><div><!></div></div></div>");
function $b(t, e) {
  Ce(e, !0);
  const { matches: n } = Ga;
  let r = p(e, "use", 19, () => []), i = p(e, "class", 3, ""), a = p(e, "align", 3, void 0), o = p(e, "scrollArea$use", 19, () => []), u = p(e, "scrollArea$class", 3, ""), l = p(e, "scrollContent$use", 19, () => []), c = p(e, "scrollContent$class", 3, ""), d = /* @__PURE__ */ qe(e, [
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
  ]), v, f = /* @__PURE__ */ ve(void 0), m, h, g = ce({}), b = ce({}), y = ce({}), S = ce({});
  rt(() => (X(
    f,
    new qb({
      eventTargetMatchesSelector: (V, G) => n(V, G),
      addClass: I,
      removeClass: _,
      addScrollAreaClass: E,
      setScrollAreaStyleProperty: C,
      setScrollContentStyleProperty: w,
      getScrollContentStyleValue: x,
      setScrollAreaScrollLeft: (V) => m.scrollLeft = V,
      getScrollAreaScrollLeft: () => m.scrollLeft,
      getScrollContentOffsetWidth: () => h.offsetWidth,
      getScrollAreaOffsetWidth: () => m.offsetWidth,
      computeScrollAreaClientRect: () => m.getBoundingClientRect(),
      computeScrollContentClientRect: () => h.getBoundingClientRect(),
      computeHorizontalScrollbarHeight: () => zb(document)
    }),
    !0
  ), s(f).init(), () => {
    var V;
    (V = s(f)) == null || V.destroy();
  }));
  function I(V) {
    g[V] || (g[V] = !0);
  }
  function _(V) {
    (!(V in g) || g[V]) && (g[V] = !1);
  }
  function E(V) {
    b[V] || (b[V] = !0);
  }
  function C(V, G) {
    y[V] != G && (G === "" || G == null ? delete y[V] : y[V] = G);
  }
  function w(V, G) {
    S[V] != G && (G === "" || G == null ? delete S[V] : S[V] = G);
  }
  function x(V) {
    return V in S ? S[V] : getComputedStyle(h).getPropertyValue(V);
  }
  function T() {
    if (s(f) == null)
      throw new Error("Instance is undefined.");
    return s(f).getScrollPosition();
  }
  function B() {
    return h.offsetWidth;
  }
  function K(V) {
    var G;
    (G = s(f)) == null || G.incrementScroll(V);
  }
  function M(V) {
    var G;
    (G = s(f)) == null || G.scrollTo(V);
  }
  function P() {
    return v;
  }
  var O = {
    getScrollPosition: T,
    getScrollContentWidth: B,
    incrementScroll: K,
    scrollTo: M,
    getElement: P
  }, A = Jb();
  Ue(A, (V, G) => ({ class: V, ...G }), [
    () => De({
      "mdc-tab-scroller": !0,
      "mdc-tab-scroller--align-start": a() === "start",
      "mdc-tab-scroller--align-end": a() === "end",
      "mdc-tab-scroller--align-center": a() === "center",
      ...g,
      [i()]: !0
    }),
    () => er(d, ["scrollArea$", "scrollContent$"])
  ]);
  var N = se(A), U = (V) => {
    var G;
    s(f) && s(f).handleInteraction(), (G = e.scrollArea$onwheel) == null || G.call(e, V);
  }, q = (V) => {
    var G;
    s(f) && s(f).handleInteraction(), (G = e.scrollArea$ontouchstart) == null || G.call(e, V);
  }, J = (V) => {
    var G;
    s(f) && s(f).handleInteraction(), (G = e.scrollArea$onpointerdown) == null || G.call(e, V);
  }, H = (V) => {
    var G;
    s(f) && s(f).handleInteraction(), (G = e.scrollArea$onmousedown) == null || G.call(e, V);
  }, R = (V) => {
    var G;
    s(f) && s(f).handleInteraction(), (G = e.scrollArea$onkeydown) == null || G.call(e, V);
  };
  Ue(
    N,
    (V, G, F) => ({
      class: V,
      style: G,
      ...F,
      onwheel: U,
      ontouchstart: q,
      onpointerdown: J,
      onmousedown: H,
      onkeydown: R
    }),
    [
      () => De({
        "mdc-tab-scroller__scroll-area": !0,
        ...b,
        [u()]: !0
      }),
      () => Object.entries(y).map(([V, G]) => `${V}: ${G};`).join(" "),
      () => it(d, "scrollArea$")
    ]
  );
  var j = se(N), Ae = (V) => {
    var G;
    s(f) && s(f).handleTransitionEnd(V), (G = e.scrollContent$ontransitionend) == null || G.call(e, V);
  };
  Ue(
    j,
    (V, G, F) => ({
      class: V,
      style: G,
      ...F,
      ontransitionend: Ae
    }),
    [
      () => De({
        "mdc-tab-scroller__scroll-content": !0,
        [c()]: !0
      }),
      () => Object.entries(S).map(([V, G]) => `${V}: ${G};`).join(" "),
      () => it(d, "scrollContent$")
    ]
  );
  var be = se(j);
  return Se(be, () => e.children ?? pe), Ee(j, (V) => h = V, () => h), Me(j, (V, G) => W == null ? void 0 : W(V, G), l), Ee(N, (V) => m = V, () => m), Me(N, (V, G) => W == null ? void 0 : W(V, G), o), Ee(A, (V) => v = V, () => v), Me(A, (V, G) => W == null ? void 0 : W(V, G), r), L(t, A), xe(O);
}
var e_ = /* @__PURE__ */ de("<div><!></div>");
function t_(t, e) {
  Ce(e, !0);
  let n = p(e, "use", 19, () => []), r = p(e, "class", 3, ""), i = p(e, "tabs", 19, () => []), a = p(e, "key", 3, (O) => O), o = p(e, "focusOnActivate", 3, !0), u = p(e, "focusOnProgrammatic", 3, !1), l = p(e, "useAutomaticActivation", 3, !0), c = p(e, "active", 15), d = p(e, "tabindex", 3, 0), v = /* @__PURE__ */ qe(e, [
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
  ]), f, m = /* @__PURE__ */ ve(void 0), h, g = /* @__PURE__ */ ve(ce(c() == null ? -1 : i().findIndex((O) => c() && a()(O) === a()(c())))), b = ce({}), y = /* @__PURE__ */ ve(/* @__PURE__ */ new WeakMap()), S = !1;
  oe("SMUI:tab:focusOnActivate", o()), oe("SMUI:tab:initialActive", {
    active: c() == null ? null : a()(c()),
    key: a()
  }), Te(() => {
    (c() == null && s(g) !== -1 || c() != null && s(g) === -1 || c() != null && a()(c()) !== a()(i()[s(g)])) && (X(g, i().findIndex((O) => c() && a()(O) === a()(c())), !0), s(m) && (S = !u(), s(m).activateTab(s(g)), S = !1));
  }), Te(() => {
    if (i().length) {
      const O = i()[0] instanceof Object ? s(y).get(i()[0]) : b[i()[0]];
      O && O.forceAccessible(s(g) === -1);
    }
  });
  let I = !1;
  Te(() => {
    if (!s(m)) {
      I = !1;
      return;
    }
    I || (I = !0, s(m).setUseAutomaticActivation(l()));
  }), oe("SMUI:tab:mount", (O) => {
    E(O.tabId, O);
  }), oe("SMUI:tab:unmount", (O) => {
    C(O.tabId);
  }), rt(() => (X(
    m,
    new Qb({
      scrollTo: (O) => h.scrollTo(O),
      incrementScroll: (O) => h.incrementScroll(O),
      getScrollPosition: () => h.getScrollPosition(),
      getScrollContentWidth: () => h.getScrollContentWidth(),
      getOffsetWidth: () => x().offsetWidth,
      isRTL: () => getComputedStyle(x()).getPropertyValue("direction") === "rtl",
      setActiveTab: (O) => {
        var A;
        c(i()[O]), X(g, O, !0), (A = s(m)) == null || A.activateTab(O);
      },
      activateTabAtIndex: (O, A) => {
        var N;
        return (N = _(i()[O])) == null ? void 0 : N.activate(A, S);
      },
      deactivateTabAtIndex: (O) => {
        var A;
        return (A = _(i()[O])) == null ? void 0 : A.deactivate();
      },
      focusTabAtIndex: (O) => {
        var A;
        return (A = _(i()[O])) == null ? void 0 : A.focus();
      },
      getTabIndicatorClientRectAtIndex: (O) => {
        var A;
        return ((A = _(i()[O])) == null ? void 0 : A.computeIndicatorClientRect()) ?? new DOMRect();
      },
      getTabDimensionsAtIndex: (O) => {
        var A;
        return ((A = _(i()[O])) == null ? void 0 : A.computeDimensions()) ?? { rootLeft: 0, rootRight: 0, contentLeft: 0, contentRight: 0 };
      },
      getPreviousActiveTabIndex: () => {
        var O;
        for (let A = 0; A < i().length; A++)
          if ((O = _(i()[A])) != null && O.active)
            return A;
        return -1;
      },
      getFocusedTabIndex: () => {
        const O = i().map((N) => {
          var U;
          return (U = _(N)) == null ? void 0 : U.element;
        }), A = document.activeElement;
        return O.indexOf(A);
      },
      getIndexOfTabById: (O) => i().findIndex((A) => a()(A) === a()(O)),
      getTabListLength: () => i().length,
      notifyTabActivated: (O) => Je(x(), "SMUITabBarActivated", { index: O })
    }),
    !0
  ), s(m).init(), () => {
    var O;
    (O = s(m)) == null || O.destroy();
  }));
  function _(O) {
    return O instanceof Object ? s(y).get(O) : b[O];
  }
  function E(O, A) {
    O instanceof Object ? (s(y).set(O, A), X(y, s(y))) : b[O] = A;
  }
  function C(O) {
    O instanceof Object ? (s(y).delete(O), X(y, s(y))) : delete b[O];
  }
  function w(O) {
    var A;
    (A = s(m)) == null || A.scrollIntoView(O);
  }
  function x() {
    return f;
  }
  var T = { scrollIntoView: w, getElement: x }, B = e_(), K = (O) => {
    var A;
    s(m) && s(m).handleKeyDown(O), (A = e.onkeydown) == null || A.call(e, O);
  }, M = (O) => {
    var A;
    s(m) && s(m).handleTabInteraction(O), (A = e.onSMUITabInteracted) == null || A.call(e, O);
  };
  Ue(
    B,
    (O, A) => ({
      class: O,
      role: "tablist",
      tabindex: d(),
      ...A,
      onkeydown: K,
      onSMUITabInteracted: M
    }),
    [
      () => De({ "mdc-tab-bar": !0, [r()]: !0 }),
      () => er(v, ["tabScroller$"])
    ]
  );
  var P = se(B);
  {
    let O = /* @__PURE__ */ ge(() => it(v, "tabScroller$"));
    Ee(
      $b(P, nt(() => s(O), {
        children: (A, N) => {
          var U = ne(), q = Z(U);
          wn(q, 17, i, (J) => a()(J), (J, H) => {
            var R = ne(), j = Z(R);
            Se(j, () => e.tab, () => s(H)), L(J, R);
          }), L(A, U);
        },
        $$slots: { default: !0 }
      })),
      (A) => h = A,
      () => h
    );
  }
  return Ee(B, (O) => f = O, () => f), Me(B, (O, A) => W == null ? void 0 : W(O, A), n), L(t, B), xe(T);
}
var n_ = /* @__PURE__ */ de("<span><span><!></span></span>");
function r_(t, e) {
  Ce(e, !0);
  let n = p(e, "use", 19, () => []), r = p(e, "class", 3, ""), i = p(e, "active", 15, !1), a = p(e, "type", 3, "underline"), o = p(e, "transition", 3, "slide"), u = p(e, "content$use", 19, () => []), l = p(e, "content$class", 3, ""), c = /* @__PURE__ */ qe(e, [
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
  ]), d, v = /* @__PURE__ */ ve(void 0), f, m = /* @__PURE__ */ ve(ce({})), h = /* @__PURE__ */ ve(ce({})), g = ce([]), b = o();
  Te(() => {
    b !== o() && (b = o(), s(v) && s(v).destroy(), X(m, {}, !0), X(h, {}, !0), X(v, y(), !0), s(v).init());
  }), ec(() => {
    g.length && requestAnimationFrame(() => {
      const O = g.shift() ?? [];
      for (const A of O)
        A();
    });
  }), rt(() => (X(v, y(), !0), s(v).init(), () => {
    var O;
    (O = s(v)) == null || O.destroy();
  }));
  function y() {
    const O = {
      fade: Yb,
      slide: cu
    }[o()] || cu;
    return new O({
      addClass: (...A) => S(() => I(...A)),
      removeClass: (...A) => S(() => _(...A)),
      computeContentClientRect: x,
      setContentStyleProperty: (...A) => S(() => E(...A))
    });
  }
  function S(O) {
    g.length ? g[g.length - 1].push(O) : O();
  }
  function I(O) {
    s(m)[O] || (s(m)[O] = !0);
  }
  function _(O) {
    (!(O in s(m)) || s(m)[O]) && (s(m)[O] = !1);
  }
  function E(O, A) {
    s(h)[O] != A && (A === "" || A == null ? delete s(h)[O] : s(h)[O] = A);
  }
  function C(O) {
    var A;
    i(!0), (A = s(v)) == null || A.activate(O);
  }
  function w() {
    var O;
    i(!1), (O = s(v)) == null || O.deactivate();
  }
  function x() {
    return g.push([]), f.getBoundingClientRect();
  }
  function T() {
    return d;
  }
  var B = { activate: C, deactivate: w, computeContentClientRect: x, getElement: T }, K = n_();
  Ue(K, (O, A) => ({ class: O, ...A }), [
    () => De({
      "mdc-tab-indicator": !0,
      "mdc-tab-indicator--active": i(),
      "mdc-tab-indicator--fade": o() === "fade",
      ...s(m),
      [r()]: !0
    }),
    () => er(c, ["content$"])
  ]);
  var M = se(K);
  Ue(
    M,
    (O, A, N) => ({
      class: O,
      style: A,
      "aria-hidden": a() === "icon" ? "true" : void 0,
      ...N
    }),
    [
      () => De({
        "mdc-tab-indicator__content": !0,
        "mdc-tab-indicator__content--underline": a() === "underline",
        "mdc-tab-indicator__content--icon": a() === "icon",
        [l()]: !0
      }),
      () => Object.entries(s(h)).map(([O, A]) => `${O}: ${A};`).join(" "),
      () => it(c, "content$")
    ]
  );
  var P = se(M);
  return Se(P, () => e.children ?? pe), Ee(M, (O) => f = O, () => f), Me(M, (O, A) => W == null ? void 0 : W(O, A), u), Ee(K, (O) => d = O, () => d), Me(K, (O, A) => W == null ? void 0 : W(O, A), n), L(t, K), xe(B);
}
var i_ = /* @__PURE__ */ de('<span><!> <!></span> <!> <span class="mdc-tab__ripple"></span>', 1);
function a_(t, e) {
  Ce(e, !0);
  const n = (G) => {
    {
      let F = /* @__PURE__ */ ge(() => it(g, "tabIndicator$"));
      Ee(
        r_(G, nt(() => s(F), {
          get active() {
            return s(T);
          },
          set active(ee) {
            X(T, ee, !0);
          },
          children: (ee, Q) => {
            var fe = ne(), we = Z(fe);
            Se(we, () => e.tabIndicator ?? pe), L(ee, fe);
          },
          $$slots: { default: !0 }
        })),
        (ee) => I = ee,
        () => I
      );
    }
  };
  let r = p(e, "use", 19, () => []), i = p(e, "class", 3, ""), a = p(e, "style", 3, ""), o = p(e, "ripple", 3, !0), u = p(e, "stacked", 3, !1), l = p(e, "minWidth", 3, !1), c = p(e, "indicatorSpanOnlyContent", 3, !1), d = p(e, "href", 3, void 0), v = p(e, "content$use", 19, () => []), f = p(e, "content$class", 3, ""), m = p(e, "component", 3, Vr), h = p(e, "tag", 19, () => d() == null ? "button" : "a"), g = /* @__PURE__ */ qe(e, [
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
  ]), b, y = /* @__PURE__ */ ve(void 0), S, I, _ = ce({}), E = ce({}), C = ce({}), w = me("SMUI:tab:focusOnActivate");
  const x = me("SMUI:tab:initialActive");
  let T = /* @__PURE__ */ ve(ce(x.active != null && x.key(e.tab) === x.active)), B = /* @__PURE__ */ ve(!1);
  if (oe("SMUI:label:context", "tab"), oe("SMUI:icon:context", "tab"), !e.tab)
    throw new Error("The tab property is required! It should be passed down from the TabBar to the Tab.");
  let K = !1;
  Te(() => {
    if (!s(y)) {
      K = !1;
      return;
    }
    K || (K = !0, s(y).setFocusOnActivate(w));
  });
  const M = me("SMUI:tab:mount"), P = me("SMUI:tab:unmount");
  rt(() => {
    X(
      y,
      new Zb({
        setAttr: q,
        addClass: A,
        removeClass: N,
        hasClass: O,
        activateIndicator: (F) => I.activate(F),
        deactivateIndicator: () => I.deactivate(),
        notifyInteracted: () => Je(j(), "SMUITabInteracted", { tabId: e.tab }),
        getOffsetLeft: () => j().offsetLeft,
        getOffsetWidth: () => j().offsetWidth,
        getContentOffsetLeft: () => S.offsetLeft,
        getContentOffsetWidth: () => S.offsetWidth,
        focus: R
      }),
      !0
    );
    const G = {
      tabId: e.tab,
      get element() {
        return j();
      },
      get active() {
        return s(T);
      },
      forceAccessible(F) {
        X(B, F, !0);
      },
      computeIndicatorClientRect: () => I.computeContentClientRect(),
      computeDimensions: () => {
        if (s(y) == null)
          throw new Error("Instance is undefined.");
        return s(y).computeDimensions();
      },
      focus: R,
      activate: J,
      deactivate: H
    };
    return M && M(G), s(y).init(), () => {
      var F;
      P && P(G), (F = s(y)) == null || F.destroy();
    };
  });
  function O(G) {
    return G in _ ? _[G] : j().classList.contains(G);
  }
  function A(G) {
    _[G] || (_[G] = !0);
  }
  function N(G) {
    (!(G in _) || _[G]) && (_[G] = !1);
  }
  function U(G, F) {
    E[G] != F && (F === "" || F == null ? delete E[G] : E[G] = F);
  }
  function q(G, F) {
    C[G] !== F && (C[G] = F);
  }
  function J(G, F) {
    var ee, Q, fe;
    X(T, !0), F && ((ee = s(y)) == null || ee.setFocusOnActivate(!1)), (Q = s(y)) == null || Q.activate(G), F && ((fe = s(y)) == null || fe.setFocusOnActivate(w));
  }
  function H() {
    var G;
    X(T, !1), (G = s(y)) == null || G.deactivate();
  }
  function R() {
    j().focus();
  }
  function j() {
    return b.getElement();
  }
  var Ae = { activate: J, deactivate: H, focus: R, getElement: j }, be = ne(), V = Z(be);
  {
    let G = /* @__PURE__ */ ge(() => [
      [
        Xt,
        {
          ripple: o(),
          unbounded: !1,
          addClass: A,
          removeClass: N,
          addStyle: U
        }
      ],
      ...r()
    ]), F = /* @__PURE__ */ ge(() => De({
      "mdc-tab": !0,
      "mdc-tab--active": s(T),
      "mdc-tab--stacked": u(),
      "mdc-tab--min-width": l(),
      ..._,
      [i()]: !0
    })), ee = /* @__PURE__ */ ge(() => Object.entries(E).map(([$, ie]) => `${$}: ${ie};`).concat([a()]).join(" ")), Q = /* @__PURE__ */ ge(() => s(T) ? "true" : "false"), fe = /* @__PURE__ */ ge(() => s(T) || s(B) ? "0" : "-1"), we = /* @__PURE__ */ ge(() => er(g, ["content$", "tabIndicator$"]));
    pr(V, m, ($, ie) => {
      Ee(
        ie($, nt(
          {
            get tag() {
              return h();
            },
            get use() {
              return s(G);
            },
            get class() {
              return s(F);
            },
            get style() {
              return s(ee);
            },
            role: "tab",
            get "aria-selected"() {
              return s(Q);
            },
            get tabindex() {
              return s(fe);
            },
            get href() {
              return d();
            }
          },
          () => C,
          () => s(we),
          {
            onclick: (Pe) => {
              var Le;
              (Le = e.onclick) == null || Le.call(e, Pe), !Pe.defaultPrevented && s(y) && s(y).handleClick();
            },
            children: (Pe, Le) => {
              var We = i_(), Ke = Z(We);
              Ue(Ke, (Fe, ct) => ({ class: Fe, ...ct }), [
                () => De({ "mdc-tab__content": !0, [f()]: !0 }),
                () => it(g, "content$")
              ]);
              var ke = se(Ke);
              Se(ke, () => e.children ?? pe);
              var k = Ie(ke, 2);
              {
                var z = (Fe) => {
                  n(Fe);
                };
                ae(k, (Fe) => {
                  c() && Fe(z);
                });
              }
              Ee(Ke, (Fe) => S = Fe, () => S), Me(Ke, (Fe, ct) => W == null ? void 0 : W(Fe, ct), v);
              var he = Ie(Ke, 2);
              {
                var Re = (Fe) => {
                  n(Fe);
                };
                ae(he, (Fe) => {
                  c() || Fe(Re);
                });
              }
              L(Pe, We);
            },
            $$slots: { default: !0 }
          }
        )),
        (Pe) => b = Pe,
        () => b
      );
    });
  }
  return L(t, be), xe(Ae);
}
var o_ = (t, e) => e(), s_ = /* @__PURE__ */ de('<button class="filter-tab__tabs__clear svelte-nj6sif">Clear Filters</button>'), l_ = /* @__PURE__ */ de('<div class="filter-tab__tabs svelte-nj6sif"><h4 style="all:unset; font-weight: bold; font-size: 1rem;">Filter by</h4> <!> <!></div>'), u_ = /* @__PURE__ */ de('<div class="filter-tab svelte-nj6sif"><!> <!> <!></div>');
function c_(t, e) {
  Ce(e, !0);
  let n = p(e, "filters", 31, () => ce([])), r = p(e, "onFilterChange", 3, (I) => {
  }), i = p(e, "activeNavigationTab", 31, () => ce(e.navigationTabs ? e.navigationTabs[0] : void 0)), a = p(e, "searchText", 15, ""), o = p(e, "searchLabel", 3, "Search"), u = p(e, "searchPlaceholder", 3, "Type to search..."), l = p(e, "onSearchInput", 3, () => {
  }), c = p(e, "searchDisabled", 3, !1), d = /* @__PURE__ */ ge(() => n().some((I) => I.value !== void 0 && I.value !== null && I.value !== "")), v = () => {
    n(n().map((I) => ({ ...I, value: void 0 }))), r()(n());
  };
  var f = u_(), m = se(f);
  {
    var h = (I) => {
      Cg(I, {
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
    ae(m, (I) => {
      c() || I(h);
    });
  }
  var g = Ie(m, 2);
  {
    var b = (I) => {
      t_(I, {
        get tabs() {
          return e.navigationTabs;
        },
        get active() {
          return i();
        },
        set active(E) {
          i(E);
        },
        tab: (E, C = pe) => {
          a_(E, {
            get tab() {
              return C();
            },
            minWidth: !0,
            children: (w, x) => {
              Pm(w, {
                children: (T, B) => {
                  var K = Rt();
                  Oe(() => at(K, C())), L(T, K);
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
    ae(g, (I) => {
      e.navigationTabs && I(b);
    });
  }
  var y = Ie(g, 2);
  {
    var S = (I) => {
      var _ = l_(), E = Ie(se(_), 2);
      Fb(E, {
        onfiltersChanged: (x) => r()(x),
        get filters() {
          return n();
        },
        set filters(x) {
          n(x);
        }
      });
      var C = Ie(E, 2);
      {
        var w = (x) => {
          var T = s_();
          T.__click = [o_, v], L(x, T);
        };
        ae(C, (x) => {
          s(d) && x(w);
        });
      }
      L(I, _);
    };
    ae(y, (I) => {
      n() && n().length > 0 && I(S);
    });
  }
  L(t, f), xe();
}
En(["click"]);
En(["change", "click"]);
var d_ = /* @__PURE__ */ de('<div><div class="mdc-linear-progress__buffer"><div class="mdc-linear-progress__buffer-bar"></div> <div class="mdc-linear-progress__buffer-dots"></div></div> <div class="mdc-linear-progress__bar mdc-linear-progress__primary-bar"><span class="mdc-linear-progress__bar-inner"></span></div> <div class="mdc-linear-progress__bar mdc-linear-progress__secondary-bar"><span class="mdc-linear-progress__bar-inner"></span></div></div>');
function ld(t, e) {
  Ce(e, !0);
  const [n, r] = br();
  let i = p(e, "use", 19, () => []), a = p(e, "class", 3, ""), o = p(e, "style", 3, ""), u = p(e, "indeterminate", 3, !1), l = p(e, "closed", 3, !1), c = p(e, "progress", 3, 0), d = p(e, "buffer", 3, void 0), v = /* @__PURE__ */ qe(e, [
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
  ]), f, m = /* @__PURE__ */ ve(void 0), h = ce({}), g = ce({}), b = ce({}), y = ce({}), S = ce({}), I = me("SMUI:linear-progress:context"), _ = me("SMUI:linear-progress:closed");
  Te(() => {
    _ && ci(_, l());
  }), Te(() => {
    s(m) && s(m).isDeterminate() !== !u() && s(m).setDeterminate(!u());
  }), Te(() => {
    s(m) && s(m).getProgress() !== c() && s(m).setProgress(c());
  }), Te(() => {
    s(m) && (d() == null ? s(m).setBuffer(1) : s(m).setBuffer(d()));
  }), Te(() => {
    s(m) && (l() ? s(m).close() : s(m).open());
  }), rt(() => (X(
    m,
    new qp({
      addClass: C,
      forceLayout: () => {
        P().getBoundingClientRect();
      },
      setBufferBarStyle: K,
      setPrimaryBarStyle: M,
      hasClass: E,
      removeAttribute: T,
      removeClass: w,
      setAttribute: x,
      setStyle: B,
      attachResizeObserver: (R) => {
        const j = window.ResizeObserver;
        if (j) {
          const Ae = new j(R);
          return Ae.observe(P()), Ae;
        }
        return null;
      },
      getWidth: () => P().offsetWidth
    }),
    !0
  ), s(m).init(), () => {
    var R;
    (R = s(m)) == null || R.destroy();
  }));
  function E(R) {
    return R in h ? h[R] : P().classList.contains(R);
  }
  function C(R) {
    h[R] || (h[R] = !0);
  }
  function w(R) {
    (!(R in h) || h[R]) && (h[R] = !1);
  }
  function x(R, j) {
    g[R] !== j && (g[R] = j);
  }
  function T(R) {
    (!(R in g) || g[R] != null) && (g[R] = void 0);
  }
  function B(R, j) {
    b[R] != j && (j === "" || j == null ? delete b[R] : b[R] = j);
  }
  function K(R, j) {
    y[R] != j && (j === "" || j == null ? delete y[R] : y[R] = j);
  }
  function M(R, j) {
    S[R] != j && (j === "" || j == null ? delete S[R] : S[R] = j);
  }
  function P() {
    return f;
  }
  var O = { getElement: P }, A = d_(), N = (R) => {
    var j;
    s(m) && s(m).handleTransitionEnd(), (j = e.ontransitionend) == null || j.call(e, R);
  };
  Ue(
    A,
    (R, j) => ({
      class: R,
      style: j,
      role: "progressbar",
      "aria-valuemin": 0,
      "aria-valuemax": 1,
      "aria-valuenow": u() ? void 0 : c(),
      ...g,
      ...v,
      ontransitionend: N
    }),
    [
      () => De({
        "mdc-linear-progress": !0,
        "mdc-linear-progress--indeterminate": u(),
        "mdc-linear-progress--closed": l(),
        "mdc-data-table__linear-progress": I === "data-table",
        ...h,
        [a()]: !0
      }),
      () => Object.entries(b).map(([R, j]) => `${R}: ${j};`).concat([o()]).join(" ")
    ]
  );
  var U = se(A), q = se(U), J = Ie(U, 2);
  Ee(A, (R) => f = R, () => f), Me(A, (R, j) => W == null ? void 0 : W(R, j), i), Oe(
    (R, j) => {
      Ut(q, R), Ut(J, j);
    },
    [
      () => Object.entries(y).map(([R, j]) => `${R}: ${j};`).join(" "),
      () => Object.entries(S).map(([R, j]) => `${R}: ${j};`).join(" ")
    ]
  ), L(t, A);
  var H = xe(O);
  return r(), H;
}
var f_ = /* @__PURE__ */ on('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor" class="svelte-1mj71p3"><path d="M12 4l-8 8h16l-8-8z"></path></svg>'), h_ = /* @__PURE__ */ on('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor" class="svelte-1mj71p3"><path d="M12 20l8-8H4l8 8z"></path></svg>'), v_ = /* @__PURE__ */ de('<div class="custom-cell-container svelte-1mj71p3"><div class="cell-header svelte-1mj71p3"><span class="header-title svelte-1mj71p3"> </span> <!></div></div>'), m_ = (t, e) => e(), g_ = /* @__PURE__ */ de('<input type="text" class="svelte-1mj71p3"/>'), p_ = (t, e) => e(), b_ = /* @__PURE__ */ de('<input type="number" class="svelte-1mj71p3"/>'), __ = /* @__PURE__ */ de("<!> <!>", 1), y_ = /* @__PURE__ */ de("<!> <!>", 1), I_ = /* @__PURE__ */ de('<div class="cell-actions svelte-1mj71p3"></div>'), E_ = /* @__PURE__ */ de("<!> <!>", 1);
function S_(t, e) {
  Ce(e, !0);
  const n = () => Qn(b, "$sortColumn", a), r = () => Qn(y, "$sortDirection", a), i = () => Qn(g, "$filteredData", a), [a, o] = br();
  let u = p(e, "loadingDone", 15, !0), l = p(e, "label", 19, Zr), c = p(e, "columnDefs", 19, () => []), d = p(e, "rowData", 31, () => ce([])), v = p(e, "rowActions", 19, () => []), f = p(e, "searchInputLabel", 3, "Search"), m = p(e, "emptyText", 3, "No data available"), h = ce({ name: "", color: "", number: "" }), g = tn([]), b = tn(null), y = tn(null), S = /* @__PURE__ */ ge(() => c().some((C) => C.filter));
  e.store.store.subscribe((C) => {
    d([...C]), I();
  });
  function I() {
    let C = d().filter((w) => c().every((x) => {
      const T = h[x.field], B = x.filterValueGetter ? x.filterValueGetter(w) : w[x.field];
      return T ? x.filterType === "number" ? B == T : B.toString().toLowerCase().includes(T.toLowerCase()) : !0;
    }));
    C = _(C), g.set(C);
  }
  function _(C) {
    let w, x;
    return b.subscribe((T) => w = T), y.subscribe((T) => x = T), !w || !x ? C : C.sort((T, B) => {
      let K = T[w], M = B[w];
      return K == null && (K = ""), M == null && (M = ""), x === "asc" ? K.toString().localeCompare(M.toString()) : M.toString().localeCompare(K.toString());
    });
  }
  function E(C) {
    b.update((w) => {
      if (w === C)
        y.update((x) => x === "asc" ? "desc" : x === "desc" ? null : "asc");
      else
        return y.set("asc"), C;
      return C;
    }), I();
  }
  g.set(d()), Yp(t, {
    get "table$aria-label"() {
      return l();
    },
    style: "max-width: 100%; width: 100%;",
    progress: (w) => {
      ld(w, {
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
    children: (w, x) => {
      var T = E_(), B = Z(T);
      Qp(B, {
        children: (M, P) => {
          var O = y_(), A = Z(O);
          to(A, {
            class: "header-title-row",
            children: (q, J) => {
              var H = ne(), R = Z(H);
              wn(R, 17, c, Ri, (j, Ae) => {
                pa(j, {
                  onclick: () => s(Ae).sortable && E(s(Ae).field),
                  get style() {
                    return s(Ae).headerStyle;
                  },
                  children: (be, V) => {
                    var G = v_(), F = se(G), ee = se(F), Q = se(ee), fe = Ie(ee, 2);
                    {
                      var we = ($) => {
                        var ie = ne(), Pe = Z(ie);
                        {
                          var Le = (We) => {
                            var Ke = ne(), ke = Z(Ke);
                            {
                              var k = (he) => {
                                var Re = f_();
                                L(he, Re);
                              }, z = (he) => {
                                var Re = ne(), Fe = Z(Re);
                                {
                                  var ct = (pt) => {
                                    var le = h_();
                                    L(pt, le);
                                  };
                                  ae(
                                    Fe,
                                    (pt) => {
                                      r() === "desc" && pt(ct);
                                    },
                                    !0
                                  );
                                }
                                L(he, Re);
                              };
                              ae(ke, (he) => {
                                r() === "asc" ? he(k) : he(z, !1);
                              });
                            }
                            L(We, Ke);
                          };
                          ae(Pe, (We) => {
                            n() === s(Ae).field && r() !== null && We(Le);
                          });
                        }
                        L($, ie);
                      };
                      ae(fe, ($) => {
                        s(Ae).sortable && $(we);
                      });
                    }
                    Oe(() => {
                      Ut(G, `min-width: ${s(Ae).minWidth ?? 0 ?? ""}`), at(Q, s(Ae).headerName);
                    }), L(be, G);
                  },
                  $$slots: { default: !0 }
                });
              }), L(q, H);
            },
            $$slots: { default: !0 }
          });
          var N = Ie(A, 2);
          {
            var U = (q) => {
              to(q, {
                class: "header-filter-row",
                children: (J, H) => {
                  var R = ne(), j = Z(R);
                  wn(j, 17, c, Ri, (Ae, be) => {
                    pa(Ae, {
                      children: (V, G) => {
                        var F = ne(), ee = Z(F);
                        {
                          var Q = (fe) => {
                            var we = __(), $ = Z(we);
                            {
                              var ie = (We) => {
                                var Ke = g_();
                                Ke.__input = [m_, I], Oe(() => Mr(Ke, "placeholder", `${f()} ${s(be).headerName}`)), Ta(Ke, () => h[s(be).field], (ke) => h[s(be).field] = ke), L(We, Ke);
                              };
                              ae($, (We) => {
                                s(be).filterType === "text" && We(ie);
                              });
                            }
                            var Pe = Ie($, 2);
                            {
                              var Le = (We) => {
                                var Ke = b_();
                                Ke.__input = [p_, I], Oe(() => Mr(Ke, "placeholder", `${f()} ${s(be).headerName}`)), Ta(Ke, () => h[s(be).field], (ke) => h[s(be).field] = ke), L(We, Ke);
                              };
                              ae(Pe, (We) => {
                                s(be).filterType === "number" && We(Le);
                              });
                            }
                            L(fe, we);
                          };
                          ae(ee, (fe) => {
                            s(be).filter && fe(Q);
                          });
                        }
                        L(V, F);
                      },
                      $$slots: { default: !0 }
                    });
                  }), L(J, R);
                },
                $$slots: { default: !0 }
              });
            };
            ae(N, (q) => {
              s(S) && q(U);
            });
          }
          L(M, O);
        },
        $$slots: { default: !0 }
      });
      var K = Ie(B, 2);
      $p(K, {
        children: (M, P) => {
          var O = ne(), A = Z(O);
          {
            var N = (q) => {
              to(q, {
                children: (J, H) => {
                  pa(J, {
                    class: "oscd-basic-table__empty-row",
                    get colspan() {
                      return c().length;
                    },
                    style: "text-align:center; padding: 24px; opacity: 0.6; background: rgba(0,0,0,0.05);",
                    children: (R, j) => {
                      var Ae = Rt();
                      Oe(() => at(Ae, m())), L(R, Ae);
                    },
                    $$slots: { default: !0 }
                  });
                },
                $$slots: { default: !0 }
              });
            }, U = (q) => {
              var J = ne(), H = Z(J);
              wn(H, 1, i, Ri, (R, j) => {
                to(R, {
                  children: (Ae, be) => {
                    var V = ne(), G = Z(V);
                    wn(G, 17, c, (F) => F.field, (F, ee) => {
                      var Q = ne(), fe = Z(Q);
                      {
                        var we = (ie) => {
                          pa(ie, {
                            children: (Pe, Le) => {
                              var We = I_();
                              wn(We, 21, v, Ri, (Ke, ke) => {
                                var k = ne(), z = Z(k);
                                {
                                  var he = (Fe) => {
                                    Ao(Fe, {
                                      get content() {
                                        return s(ke).tooltip;
                                      },
                                      hoverDelay: 500,
                                      children: (ct, pt) => {
                                        {
                                          let le = /* @__PURE__ */ ge(() => s(ke).disabled(s(j)));
                                          qm(ct, {
                                            get iconComponent() {
                                              return s(ke).iconComponent;
                                            },
                                            get iconStyles() {
                                              return s(ke).iconStyles;
                                            },
                                            callback: () => s(ke).callback(s(j)),
                                            get disabled() {
                                              return s(le);
                                            }
                                          });
                                        }
                                      },
                                      $$slots: { default: !0 }
                                    });
                                  }, Re = (Fe) => {
                                    Ao(Fe, {
                                      get content() {
                                        return s(ke).tooltip;
                                      },
                                      hoverDelay: 500,
                                      children: (ct, pt) => {
                                        {
                                          let le = /* @__PURE__ */ ge(() => s(ke).disabled(s(j)));
                                          Fm(ct, {
                                            class: "button",
                                            variant: "raised",
                                            callback: () => s(ke).callback(s(j)),
                                            get disabled() {
                                              return s(le);
                                            },
                                            children: (ye, Y) => {
                                              var te = ne(), Ne = Z(te);
                                              {
                                                var dt = (mt) => {
                                                  mp(mt, { svgStyles: "margin: unset" });
                                                }, bt = (mt) => {
                                                  var kt = ne(), _r = Z(kt);
                                                  {
                                                    var ht = (It) => {
                                                      id(It, { svgStyles: "margin: unset" });
                                                    }, Mt = (It) => {
                                                      var Pn = ne(), Ii = Z(Pn);
                                                      {
                                                        var jn = (Qe) => {
                                                          bp(Qe, { svgStyles: "margin: unset" });
                                                        }, ze = (Qe) => {
                                                          var $e = ne(), Dt = Z($e);
                                                          {
                                                            var gn = (ut) => {
                                                              yp(ut, { svgStyles: "margin: unset" });
                                                            }, ot = (ut) => {
                                                              var At = ne(), et = Z(At);
                                                              {
                                                                var wt = (Lt) => {
                                                                  Ap(Lt, { svgStyles: "margin: unset" });
                                                                }, Nn = (Lt) => {
                                                                  var _t = ne(), Pt = Z(_t);
                                                                  {
                                                                    var un = (cn) => {
                                                                      xp(cn, { svgStyles: "margin: unset" });
                                                                    }, Bt = (cn) => {
                                                                      var Yt = ne(), Wn = Z(Yt);
                                                                      {
                                                                        var Gr = (jt) => {
                                                                          wp(jt, { svgStyles: "margin: unset" });
                                                                        }, dn = (jt) => {
                                                                          var pn = ne(), rr = Z(pn);
                                                                          {
                                                                            var oa = (yr) => {
                                                                              Pp(yr, { svgStyles: "margin: unset" });
                                                                            }, jo = (yr) => {
                                                                              Ep(yr, { svgStyles: "margin: unset" });
                                                                            };
                                                                            ae(
                                                                              rr,
                                                                              (yr) => {
                                                                                s(ke).icon === "archive" ? yr(oa) : yr(jo, !1);
                                                                              },
                                                                              !0
                                                                            );
                                                                          }
                                                                          L(jt, pn);
                                                                        };
                                                                        ae(
                                                                          Wn,
                                                                          (jt) => {
                                                                            s(ke).icon === "delete" ? jt(Gr) : jt(dn, !1);
                                                                          },
                                                                          !0
                                                                        );
                                                                      }
                                                                      L(cn, Yt);
                                                                    };
                                                                    ae(
                                                                      Pt,
                                                                      (cn) => {
                                                                        s(ke).icon === "edit" ? cn(un) : cn(Bt, !1);
                                                                      },
                                                                      !0
                                                                    );
                                                                  }
                                                                  L(Lt, _t);
                                                                };
                                                                ae(
                                                                  et,
                                                                  (Lt) => {
                                                                    s(ke).icon === "remove" ? Lt(wt) : Lt(Nn, !1);
                                                                  },
                                                                  !0
                                                                );
                                                              }
                                                              L(ut, At);
                                                            };
                                                            ae(
                                                              Dt,
                                                              (ut) => {
                                                                s(ke).icon === "find-in-page" ? ut(gn) : ut(ot, !1);
                                                              },
                                                              !0
                                                            );
                                                          }
                                                          L(Qe, $e);
                                                        };
                                                        ae(
                                                          Ii,
                                                          (Qe) => {
                                                            s(ke).icon === "download" ? Qe(jn) : Qe(ze, !1);
                                                          },
                                                          !0
                                                        );
                                                      }
                                                      L(It, Pn);
                                                    };
                                                    ae(
                                                      _r,
                                                      (It) => {
                                                        s(ke).icon === "cancel" ? It(ht) : It(Mt, !1);
                                                      },
                                                      !0
                                                    );
                                                  }
                                                  L(mt, kt);
                                                };
                                                ae(Ne, (mt) => {
                                                  s(ke).icon === "add" ? mt(dt) : mt(bt, !1);
                                                });
                                              }
                                              L(ye, te);
                                            },
                                            $$slots: { default: !0 }
                                          });
                                        }
                                      },
                                      $$slots: { default: !0 }
                                    });
                                  };
                                  ae(z, (Fe) => {
                                    s(ke).iconComponent ? Fe(he) : Fe(Re, !1);
                                  });
                                }
                                L(Ke, k);
                              }), L(Pe, We);
                            },
                            $$slots: { default: !0 }
                          });
                        }, $ = (ie) => {
                          pa(ie, {
                            get numeric() {
                              return s(ee).numeric;
                            },
                            get style() {
                              return s(ee).cellStyle;
                            },
                            children: (Pe, Le) => {
                              var We = ne(), Ke = Z(We);
                              {
                                var ke = (z) => {
                                  const he = /* @__PURE__ */ ge(() => s(ee).cellRenderer);
                                  var Re = ne(), Fe = Z(Re);
                                  pr(Fe, () => s(he), (ct, pt) => {
                                    pt(ct, nt(
                                      {
                                        get row() {
                                          return s(j);
                                        },
                                        get value() {
                                          return s(j)[s(ee).field];
                                        },
                                        get col() {
                                          return s(ee);
                                        }
                                      },
                                      () => s(ee).cellRendererProps ?? {}
                                    ));
                                  }), L(z, Re);
                                }, k = (z) => {
                                  var he = ne(), Re = Z(he);
                                  {
                                    var Fe = (pt) => {
                                      var le = Rt();
                                      Oe((ye) => at(le, ye), [
                                        () => s(ee).valueFormatter(s(j)[s(ee).field])
                                      ]), L(pt, le);
                                    }, ct = (pt) => {
                                      var le = Rt();
                                      Oe(() => at(le, s(j)[s(ee).field] ?? "")), L(pt, le);
                                    };
                                    ae(
                                      Re,
                                      (pt) => {
                                        s(ee).valueFormatter ? pt(Fe) : pt(ct, !1);
                                      },
                                      !0
                                    );
                                  }
                                  L(z, he);
                                };
                                ae(Ke, (z) => {
                                  s(ee).cellRenderer ? z(ke) : z(k, !1);
                                });
                              }
                              L(Pe, We);
                            },
                            $$slots: { default: !0 }
                          });
                        };
                        ae(fe, (ie) => {
                          s(ee).field === "actions" ? ie(we) : ie($, !1);
                        });
                      }
                      L(F, Q);
                    }), L(Ae, V);
                  },
                  $$slots: { default: !0 }
                });
              }), L(q, J);
            };
            ae(A, (q) => {
              i().length === 0 ? q(N) : q(U, !1);
            });
          }
          L(M, O);
        },
        $$slots: { default: !0 }
      }), L(w, T);
    },
    $$slots: { progress: !0, default: !0 }
  }), xe(), o();
}
En(["input"]);
function yt(t) {
  return typeof t == "function";
}
function tl(t) {
  var e = function(r) {
    Error.call(r), r.stack = new Error().stack;
  }, n = t(e);
  return n.prototype = Object.create(Error.prototype), n.prototype.constructor = n, n;
}
var ls = tl(function(t) {
  return function(n) {
    t(this), this.message = n ? n.length + ` errors occurred during unsubscription:
` + n.map(function(r, i) {
      return i + 1 + ") " + r.toString();
    }).join(`
  `) : "", this.name = "UnsubscriptionError", this.errors = n;
  };
});
function xo(t, e) {
  if (t) {
    var n = t.indexOf(e);
    0 <= n && t.splice(n, 1);
  }
}
var ja = function() {
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
            for (var u = Ht(o), l = u.next(); !l.done; l = u.next()) {
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
      if (yt(d))
        try {
          d();
        } catch (g) {
          a = g instanceof ls ? g.errors : [g];
        }
      var v = this._finalizers;
      if (v) {
        this._finalizers = null;
        try {
          for (var f = Ht(v), m = f.next(); !m.done; m = f.next()) {
            var h = m.value;
            try {
              du(h);
            } catch (g) {
              a = a ?? [], g instanceof ls ? a = Jn(Jn([], mr(a)), mr(g.errors)) : a.push(g);
            }
          }
        } catch (g) {
          r = { error: g };
        } finally {
          try {
            m && !m.done && (i = f.return) && i.call(f);
          } finally {
            if (r) throw r.error;
          }
        }
      }
      if (a)
        throw new ls(a);
    }
  }, t.prototype.add = function(e) {
    var n;
    if (e && e !== this)
      if (this.closed)
        du(e);
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
    n === e ? this._parentage = null : Array.isArray(n) && xo(n, e);
  }, t.prototype.remove = function(e) {
    var n = this._finalizers;
    n && xo(n, e), e instanceof t && e._removeParent(this);
  }, t.EMPTY = function() {
    var e = new t();
    return e.closed = !0, e;
  }(), t;
}(), ud = ja.EMPTY;
function cd(t) {
  return t instanceof ja || t && "closed" in t && yt(t.remove) && yt(t.add) && yt(t.unsubscribe);
}
function du(t) {
  yt(t) ? t() : t.unsubscribe();
}
var A_ = {
  Promise: void 0
}, C_ = {
  setTimeout: function(t, e) {
    for (var n = [], r = 2; r < arguments.length; r++)
      n[r - 2] = arguments[r];
    return setTimeout.apply(void 0, Jn([t, e], mr(n)));
  },
  clearTimeout: function(t) {
    return clearTimeout(t);
  },
  delegate: void 0
};
function dd(t) {
  C_.setTimeout(function() {
    throw t;
  });
}
function fu() {
}
function fo(t) {
  t();
}
var nl = function(t) {
  Ve(e, t);
  function e(n) {
    var r = t.call(this) || this;
    return r.isStopped = !1, n ? (r.destination = n, cd(n) && n.add(r)) : r.destination = w_, r;
  }
  return e.create = function(n, r, i) {
    return new Ra(n, r, i);
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
}(ja), x_ = function() {
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
}(), Ra = function(t) {
  Ve(e, t);
  function e(n, r, i) {
    var a = t.call(this) || this, o;
    return yt(n) || !n ? o = {
      next: n ?? void 0,
      error: r ?? void 0,
      complete: i ?? void 0
    } : o = n, a.destination = new x_(o), a;
  }
  return e;
}(nl);
function io(t) {
  dd(t);
}
function T_(t) {
  throw t;
}
var w_ = {
  closed: !0,
  next: fu,
  error: T_,
  complete: fu
}, rl = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}();
function aa(t) {
  return t;
}
function L_(t) {
  return t.length === 0 ? aa : t.length === 1 ? t[0] : function(n) {
    return t.reduce(function(r, i) {
      return i(r);
    }, n);
  };
}
var an = function() {
  function t(e) {
    e && (this._subscribe = e);
  }
  return t.prototype.lift = function(e) {
    var n = new t();
    return n.source = this, n.operator = e, n;
  }, t.prototype.subscribe = function(e, n, r) {
    var i = this, a = R_(e) ? e : new Ra(e, n, r);
    return fo(function() {
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
    return n = hu(n), new n(function(i, a) {
      var o = new Ra({
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
  }, t.prototype[rl] = function() {
    return this;
  }, t.prototype.pipe = function() {
    for (var e = [], n = 0; n < arguments.length; n++)
      e[n] = arguments[n];
    return L_(e)(this);
  }, t.prototype.toPromise = function(e) {
    var n = this;
    return e = hu(e), new e(function(r, i) {
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
function hu(t) {
  var e;
  return (e = t ?? A_.Promise) !== null && e !== void 0 ? e : Promise;
}
function O_(t) {
  return t && yt(t.next) && yt(t.error) && yt(t.complete);
}
function R_(t) {
  return t && t instanceof nl || O_(t) && cd(t);
}
function M_(t) {
  return yt(t == null ? void 0 : t.lift);
}
function Dn(t) {
  return function(e) {
    if (M_(e))
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
function Rn(t, e, n, r, i) {
  return new D_(t, e, n, r, i);
}
var D_ = function(t) {
  Ve(e, t);
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
}(nl), P_ = tl(function(t) {
  return function() {
    t(this), this.name = "ObjectUnsubscribedError", this.message = "object unsubscribed";
  };
}), Vo = function(t) {
  Ve(e, t);
  function e() {
    var n = t.call(this) || this;
    return n.closed = !1, n.currentObservers = null, n.observers = [], n.isStopped = !1, n.hasError = !1, n.thrownError = null, n;
  }
  return e.prototype.lift = function(n) {
    var r = new vu(this, this);
    return r.operator = n, r;
  }, e.prototype._throwIfClosed = function() {
    if (this.closed)
      throw new P_();
  }, e.prototype.next = function(n) {
    var r = this;
    fo(function() {
      var i, a;
      if (r._throwIfClosed(), !r.isStopped) {
        r.currentObservers || (r.currentObservers = Array.from(r.observers));
        try {
          for (var o = Ht(r.currentObservers), u = o.next(); !u.done; u = o.next()) {
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
    fo(function() {
      if (r._throwIfClosed(), !r.isStopped) {
        r.hasError = r.isStopped = !0, r.thrownError = n;
        for (var i = r.observers; i.length; )
          i.shift().error(n);
      }
    });
  }, e.prototype.complete = function() {
    var n = this;
    fo(function() {
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
    return a || o ? ud : (this.currentObservers = null, u.push(n), new ja(function() {
      r.currentObservers = null, xo(u, n);
    }));
  }, e.prototype._checkFinalizedStatuses = function(n) {
    var r = this, i = r.hasError, a = r.thrownError, o = r.isStopped;
    i ? n.error(a) : o && n.complete();
  }, e.prototype.asObservable = function() {
    var n = new an();
    return n.source = this, n;
  }, e.create = function(n, r) {
    return new vu(n, r);
  }, e;
}(an), vu = function(t) {
  Ve(e, t);
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
    return (i = (r = this.source) === null || r === void 0 ? void 0 : r.subscribe(n)) !== null && i !== void 0 ? i : ud;
  }, e;
}(Vo), mu = function(t) {
  Ve(e, t);
  function e(n) {
    var r = t.call(this) || this;
    return r._value = n, r;
  }
  return Object.defineProperty(e.prototype, "value", {
    get: function() {
      return this.getValue();
    },
    enumerable: !1,
    configurable: !0
  }), e.prototype._subscribe = function(n) {
    var r = t.prototype._subscribe.call(this, n);
    return !r.closed && n.next(this._value), r;
  }, e.prototype.getValue = function() {
    var n = this, r = n.hasError, i = n.thrownError, a = n._value;
    if (r)
      throw i;
    return this._throwIfClosed(), a;
  }, e.prototype.next = function(n) {
    t.prototype.next.call(this, this._value = n);
  }, e;
}(Vo), il = {
  now: function() {
    return (il.delegate || Date).now();
  },
  delegate: void 0
}, N_ = function(t) {
  Ve(e, t);
  function e(n, r, i) {
    n === void 0 && (n = 1 / 0), r === void 0 && (r = 1 / 0), i === void 0 && (i = il);
    var a = t.call(this) || this;
    return a._bufferSize = n, a._windowTime = r, a._timestampProvider = i, a._buffer = [], a._infiniteTimeWindow = !0, a._infiniteTimeWindow = r === 1 / 0, a._bufferSize = Math.max(1, n), a._windowTime = Math.max(1, r), a;
  }
  return e.prototype.next = function(n) {
    var r = this, i = r.isStopped, a = r._buffer, o = r._infiniteTimeWindow, u = r._timestampProvider, l = r._windowTime;
    i || (a.push(n), !o && a.push(u.now() + l)), this._trimBuffer(), t.prototype.next.call(this, n);
  }, e.prototype._subscribe = function(n) {
    this._throwIfClosed(), this._trimBuffer();
    for (var r = this._innerSubscribe(n), i = this, a = i._infiniteTimeWindow, o = i._buffer, u = o.slice(), l = 0; l < u.length && !n.closed; l += a ? 1 : 2)
      n.next(u[l]);
    return this._checkFinalizedStatuses(n), r;
  }, e.prototype._trimBuffer = function() {
    var n = this, r = n._bufferSize, i = n._timestampProvider, a = n._buffer, o = n._infiniteTimeWindow, u = (o ? 1 : 2) * r;
    if (r < 1 / 0 && u < a.length && a.splice(0, a.length - u), !o) {
      for (var l = i.now(), c = 0, d = 1; d < a.length && a[d] <= l; d += 2)
        c = d;
      c && a.splice(0, c + 1);
    }
  }, e;
}(Vo), H_ = function(t) {
  Ve(e, t);
  function e(n, r) {
    return t.call(this) || this;
  }
  return e.prototype.schedule = function(n, r) {
    return this;
  }, e;
}(ja), gu = {
  setInterval: function(t, e) {
    for (var n = [], r = 2; r < arguments.length; r++)
      n[r - 2] = arguments[r];
    return setInterval.apply(void 0, Jn([t, e], mr(n)));
  },
  clearInterval: function(t) {
    return clearInterval(t);
  },
  delegate: void 0
}, U_ = function(t) {
  Ve(e, t);
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
    return i === void 0 && (i = 0), gu.setInterval(n.flush.bind(n, this), i);
  }, e.prototype.recycleAsyncId = function(n, r, i) {
    if (i === void 0 && (i = 0), i != null && this.delay === i && this.pending === !1)
      return r;
    r != null && gu.clearInterval(r);
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
      this.work = this.state = this.scheduler = null, this.pending = !1, xo(a, this), r != null && (this.id = this.recycleAsyncId(i, r, null)), this.delay = null, t.prototype.unsubscribe.call(this);
    }
  }, e;
}(H_), pu = function() {
  function t(e, n) {
    n === void 0 && (n = t.now), this.schedulerActionCtor = e, this.now = n;
  }
  return t.prototype.schedule = function(e, n, r) {
    return n === void 0 && (n = 0), new this.schedulerActionCtor(this, e).schedule(r, n);
  }, t.now = il.now, t;
}(), k_ = function(t) {
  Ve(e, t);
  function e(n, r) {
    r === void 0 && (r = pu.now);
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
}(pu), al = new k_(U_), B_ = al, F_ = new an(function(t) {
  return t.complete();
});
function fd(t) {
  return t && yt(t.schedule);
}
function hd(t) {
  return t[t.length - 1];
}
function V_(t) {
  return yt(hd(t)) ? t.pop() : void 0;
}
function Go(t) {
  return fd(hd(t)) ? t.pop() : void 0;
}
var vd = function(t) {
  return t && typeof t.length == "number" && typeof t != "function";
};
function md(t) {
  return yt(t == null ? void 0 : t.then);
}
function gd(t) {
  return yt(t[rl]);
}
function pd(t) {
  return Symbol.asyncIterator && yt(t == null ? void 0 : t[Symbol.asyncIterator]);
}
function bd(t) {
  return new TypeError("You provided " + (t !== null && typeof t == "object" ? "an invalid object" : "'" + t + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
}
function G_() {
  return typeof Symbol != "function" || !Symbol.iterator ? "@@iterator" : Symbol.iterator;
}
var _d = G_();
function yd(t) {
  return yt(t == null ? void 0 : t[_d]);
}
function Id(t) {
  return Nh(this, arguments, function() {
    var n, r, i, a;
    return Zs(this, function(o) {
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
function Ed(t) {
  return yt(t == null ? void 0 : t.getReader);
}
function nr(t) {
  if (t instanceof an)
    return t;
  if (t != null) {
    if (gd(t))
      return j_(t);
    if (vd(t))
      return W_(t);
    if (md(t))
      return q_(t);
    if (pd(t))
      return Sd(t);
    if (yd(t))
      return z_(t);
    if (Ed(t))
      return X_(t);
  }
  throw bd(t);
}
function j_(t) {
  return new an(function(e) {
    var n = t[rl]();
    if (yt(n.subscribe))
      return n.subscribe(e);
    throw new TypeError("Provided object does not correctly implement Symbol.observable");
  });
}
function W_(t) {
  return new an(function(e) {
    for (var n = 0; n < t.length && !e.closed; n++)
      e.next(t[n]);
    e.complete();
  });
}
function q_(t) {
  return new an(function(e) {
    t.then(function(n) {
      e.closed || (e.next(n), e.complete());
    }, function(n) {
      return e.error(n);
    }).then(null, dd);
  });
}
function z_(t) {
  return new an(function(e) {
    var n, r;
    try {
      for (var i = Ht(t), a = i.next(); !a.done; a = i.next()) {
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
function Sd(t) {
  return new an(function(e) {
    K_(t, e).catch(function(n) {
      return e.error(n);
    });
  });
}
function X_(t) {
  return Sd(Id(t));
}
function K_(t, e) {
  var n, r, i, a;
  return Cc(this, void 0, void 0, function() {
    var o, u;
    return Zs(this, function(l) {
      switch (l.label) {
        case 0:
          l.trys.push([0, 5, 6, 11]), n = Hh(t), l.label = 1;
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
function Dr(t, e, n, r, i) {
  r === void 0 && (r = 0), i === void 0 && (i = !1);
  var a = e.schedule(function() {
    n(), i ? t.add(this.schedule(null, r)) : this.unsubscribe();
  }, r);
  if (t.add(a), !i)
    return a;
}
function Ad(t, e) {
  return e === void 0 && (e = 0), Dn(function(n, r) {
    n.subscribe(Rn(r, function(i) {
      return Dr(r, t, function() {
        return r.next(i);
      }, e);
    }, function() {
      return Dr(r, t, function() {
        return r.complete();
      }, e);
    }, function(i) {
      return Dr(r, t, function() {
        return r.error(i);
      }, e);
    }));
  });
}
function Cd(t, e) {
  return e === void 0 && (e = 0), Dn(function(n, r) {
    r.add(t.schedule(function() {
      return n.subscribe(r);
    }, e));
  });
}
function Y_(t, e) {
  return nr(t).pipe(Cd(e), Ad(e));
}
function Z_(t, e) {
  return nr(t).pipe(Cd(e), Ad(e));
}
function Q_(t, e) {
  return new an(function(n) {
    var r = 0;
    return e.schedule(function() {
      r === t.length ? n.complete() : (n.next(t[r++]), n.closed || this.schedule());
    });
  });
}
function J_(t, e) {
  return new an(function(n) {
    var r;
    return Dr(n, e, function() {
      r = t[_d](), Dr(n, e, function() {
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
      return yt(r == null ? void 0 : r.return) && r.return();
    };
  });
}
function xd(t, e) {
  if (!t)
    throw new Error("Iterable cannot be null");
  return new an(function(n) {
    Dr(n, e, function() {
      var r = t[Symbol.asyncIterator]();
      Dr(n, e, function() {
        r.next().then(function(i) {
          i.done ? n.complete() : n.next(i.value);
        });
      }, 0, !0);
    });
  });
}
function $_(t, e) {
  return xd(Id(t), e);
}
function ey(t, e) {
  if (t != null) {
    if (gd(t))
      return Y_(t, e);
    if (vd(t))
      return Q_(t, e);
    if (md(t))
      return Z_(t, e);
    if (pd(t))
      return xd(t, e);
    if (yd(t))
      return J_(t, e);
    if (Ed(t))
      return $_(t, e);
  }
  throw bd(t);
}
function Wa(t, e) {
  return e ? ey(t, e) : nr(t);
}
function di() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  var n = Go(t);
  return Wa(t, n);
}
function ty(t) {
  return t instanceof Date && !isNaN(t);
}
function Jt(t, e) {
  return Dn(function(n, r) {
    var i = 0;
    n.subscribe(Rn(r, function(a) {
      r.next(t.call(e, a, i++));
    }));
  });
}
var ny = Array.isArray;
function ry(t, e) {
  return ny(e) ? t.apply(void 0, Jn([], mr(e))) : t(e);
}
function iy(t) {
  return Jt(function(e) {
    return ry(t, e);
  });
}
var ay = Array.isArray, oy = Object.getPrototypeOf, sy = Object.prototype, ly = Object.keys;
function uy(t) {
  if (t.length === 1) {
    var e = t[0];
    if (ay(e))
      return { args: e, keys: null };
    if (cy(e)) {
      var n = ly(e);
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
function cy(t) {
  return t && typeof t == "object" && oy(t) === sy;
}
function dy(t, e) {
  return t.reduce(function(n, r, i) {
    return n[r] = e[i], n;
  }, {});
}
function bu() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  var n = Go(t), r = V_(t), i = uy(t), a = i.args, o = i.keys;
  if (a.length === 0)
    return Wa([], n);
  var u = new an(fy(a, n, o ? function(l) {
    return dy(o, l);
  } : aa));
  return r ? u.pipe(iy(r)) : u;
}
function fy(t, e, n) {
  return n === void 0 && (n = aa), function(r) {
    _u(e, function() {
      for (var i = t.length, a = new Array(i), o = i, u = i, l = function(d) {
        _u(e, function() {
          var v = Wa(t[d], e), f = !1;
          v.subscribe(Rn(r, function(m) {
            a[d] = m, f || (f = !0, u--), u || r.next(n(a.slice()));
          }, function() {
            --o || r.complete();
          }));
        }, r);
      }, c = 0; c < i; c++)
        l(c);
    }, r);
  };
}
function _u(t, e, n) {
  t ? Dr(n, t, e) : e();
}
function hy(t, e, n, r, i, a, o, u) {
  var l = [], c = 0, d = 0, v = !1, f = function() {
    v && !l.length && !c && e.complete();
  }, m = function(g) {
    return c < r ? h(g) : l.push(g);
  }, h = function(g) {
    c++;
    var b = !1;
    nr(n(g, d++)).subscribe(Rn(e, function(y) {
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
  return t.subscribe(Rn(e, m, function() {
    v = !0, f();
  })), function() {
  };
}
function Ma(t, e, n) {
  return n === void 0 && (n = 1 / 0), yt(e) ? Ma(function(r, i) {
    return Jt(function(a, o) {
      return e(r, a, i, o);
    })(nr(t(r, i)));
  }, n) : (typeof e == "number" && (n = e), Dn(function(r, i) {
    return hy(r, i, t, n);
  }));
}
function vy(t) {
  return Ma(aa, t);
}
function my() {
  return vy(1);
}
function yu() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  return my()(Wa(t, Go(t)));
}
function gy(t, e, n) {
  n === void 0 && (n = B_);
  var r = -1;
  return e != null && (fd(e) ? n = e : r = e), new an(function(i) {
    var a = ty(t) ? +t - n.now() : t;
    a < 0 && (a = 0);
    var o = 0;
    return n.schedule(function() {
      i.closed || (i.next(o++), 0 <= r ? this.schedule(void 0, r) : i.complete());
    }, a);
  });
}
function fi(t) {
  return Dn(function(e, n) {
    var r = null, i = !1, a;
    r = e.subscribe(Rn(n, void 0, void 0, function(o) {
      a = nr(t(o, fi(t)(e))), r ? (r.unsubscribe(), r = null, a.subscribe(n)) : i = !0;
    })), i && (r.unsubscribe(), r = null, a.subscribe(n));
  });
}
function py(t, e) {
  return yt(e) ? Ma(t, e, 1) : Ma(t, 1);
}
function by(t, e) {
  return e === void 0 && (e = al), Dn(function(n, r) {
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
    n.subscribe(Rn(r, function(c) {
      a = c, o = e.now(), i || (i = e.schedule(l, t), r.add(i));
    }, function() {
      u(), r.complete();
    }, void 0, function() {
      a = i = null;
    }));
  });
}
function Ji(t) {
  return t <= 0 ? function() {
    return F_;
  } : Dn(function(e, n) {
    var r = 0;
    e.subscribe(Rn(n, function(i) {
      ++r <= t && (n.next(i), t <= r && n.complete());
    }));
  });
}
function _y(t) {
  return Jt(function() {
    return t;
  });
}
function yy(t, e) {
  return Ma(function(n, r) {
    return nr(t(n, r)).pipe(Ji(1), _y(n));
  });
}
function Iy(t, e) {
  e === void 0 && (e = al);
  var n = gy(t, e);
  return yy(function() {
    return n;
  });
}
function Ey(t, e) {
  return e === void 0 && (e = aa), t = t ?? Sy, Dn(function(n, r) {
    var i, a = !0;
    n.subscribe(Rn(r, function(o) {
      var u = e(o);
      (a || !t(i, u)) && (a = !1, i = u, r.next(o));
    }));
  });
}
function Sy(t, e) {
  return t === e;
}
function Ay(t) {
  t === void 0 && (t = {});
  var e = t.connector, n = e === void 0 ? function() {
    return new Vo();
  } : e, r = t.resetOnError, i = r === void 0 ? !0 : r, a = t.resetOnComplete, o = a === void 0 ? !0 : a, u = t.resetOnRefCountZero, l = u === void 0 ? !0 : u;
  return function(c) {
    var d, v, f, m = 0, h = !1, g = !1, b = function() {
      v == null || v.unsubscribe(), v = void 0;
    }, y = function() {
      b(), d = f = void 0, h = g = !1;
    }, S = function() {
      var I = d;
      y(), I == null || I.unsubscribe();
    };
    return Dn(function(I, _) {
      m++, !g && !h && b();
      var E = f = f ?? n();
      _.add(function() {
        m--, m === 0 && !g && !h && (v = us(S, l));
      }), E.subscribe(_), !d && m > 0 && (d = new Ra({
        next: function(C) {
          return E.next(C);
        },
        error: function(C) {
          g = !0, b(), v = us(y, i, C), E.error(C);
        },
        complete: function() {
          h = !0, b(), v = us(y, o), E.complete();
        }
      }), nr(I).subscribe(d));
    })(c);
  };
}
function us(t, e) {
  for (var n = [], r = 2; r < arguments.length; r++)
    n[r - 2] = arguments[r];
  if (e === !0) {
    t();
    return;
  }
  if (e !== !1) {
    var i = new Ra({
      next: function() {
        i.unsubscribe(), t();
      }
    });
    return nr(e.apply(void 0, Jn([], mr(n)))).subscribe(i);
  }
}
function Iu(t, e, n) {
  var r, i = !1;
  return r = t, Ay({
    connector: function() {
      return new N_(r, e, n);
    },
    resetOnError: !0,
    resetOnComplete: !1,
    resetOnRefCountZero: i
  });
}
function Eu() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  var n = Go(t);
  return Dn(function(r, i) {
    (n ? yu(t, r, n) : yu(t, r)).subscribe(i);
  });
}
function Su(t, e) {
  return Dn(function(n, r) {
    var i = null, a = 0, o = !1, u = function() {
      return o && !i && r.complete();
    };
    n.subscribe(Rn(r, function(l) {
      i == null || i.unsubscribe();
      var c = 0, d = a++;
      nr(t(l, d)).subscribe(i = Rn(r, function(v) {
        return r.next(e ? e(l, v, d, c++) : v);
      }, function() {
        i = null, u();
      }));
    }, function() {
      o = !0, u();
    }));
  });
}
function Au(t, e, n) {
  var r = yt(t) || e || n ? { next: t, error: e, complete: n } : t;
  return r ? Dn(function(i, a) {
    var o;
    (o = r.subscribe) === null || o === void 0 || o.call(r);
    var u = !0;
    i.subscribe(Rn(a, function(l) {
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
  }) : aa;
}
function Td(t) {
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
var Cy = /* @__PURE__ */ function() {
  function t(e, n, r, i) {
    i === void 0 && (i = "download_load"), this.originalEvent = e, this.xhr = n, this.request = r, this.type = i;
    var a = n.status, o = n.responseType;
    this.status = a ?? 0, this.responseType = o ?? "";
    var u = n.getAllResponseHeaders();
    this.responseHeaders = u ? u.split(`
`).reduce(function(d, v) {
      var f = v.indexOf(": ");
      return d[v.slice(0, f)] = v.slice(f + 2), d;
    }, {}) : {}, this.response = Td(n);
    var l = e.loaded, c = e.total;
    this.loaded = l, this.total = c;
  }
  return t;
}(), To = tl(function(t) {
  return function(n, r, i) {
    this.message = n, this.name = "AjaxError", this.xhr = r, this.request = i, this.status = r.status, this.responseType = r.responseType;
    var a;
    try {
      a = Td(r);
    } catch {
      a = r.responseText;
    }
    this.response = a;
  };
}), xy = function() {
  function t(e, n) {
    return To.call(this, "ajax timeout", e, n), this.name = "AjaxTimeoutError", this;
  }
  return t.prototype = Object.create(To.prototype), t;
}();
function Ty(t, e) {
  return yi({ method: "GET", url: t, headers: e });
}
function wy(t, e, n) {
  return yi({ method: "POST", url: t, body: e, headers: n });
}
function Ly(t, e) {
  return yi({ method: "DELETE", url: t, headers: e });
}
function Oy(t, e, n) {
  return yi({ method: "PUT", url: t, body: e, headers: n });
}
function Ry(t, e, n) {
  return yi({ method: "PATCH", url: t, body: e, headers: n });
}
var My = Jt(function(t) {
  return t.response;
});
function Dy(t, e) {
  return My(yi({
    method: "GET",
    url: t,
    headers: e
  }));
}
var yi = function() {
  var t = function(e) {
    var n = typeof e == "string" ? {
      url: e
    } : e;
    return Ny(n);
  };
  return t.get = Ty, t.post = wy, t.delete = Ly, t.put = Oy, t.patch = Ry, t.getJSON = Dy, t;
}(), Py = "upload", Cu = "download", cs = "loadstart", ds = "progress", xu = "load";
function Ny(t) {
  return new an(function(e) {
    var n, r, i = ue({ async: !0, crossDomain: !1, withCredentials: !1, method: "GET", timeout: 0, responseType: "json" }, t), a = i.queryParams, o = i.body, u = i.headers, l = i.url;
    if (!l)
      throw new TypeError("url is required");
    if (a) {
      var c;
      if (l.includes("?")) {
        var d = l.split("?");
        if (2 < d.length)
          throw new TypeError("invalid url");
        c = new URLSearchParams(d[1]), new URLSearchParams(a).forEach(function(U, q) {
          return c.set(q, U);
        }), l = d[0] + "?" + c;
      } else
        c = new URLSearchParams(a), l = l + "?" + c;
    }
    var v = {};
    if (u)
      for (var f in u)
        u.hasOwnProperty(f) && (v[f.toLowerCase()] = u[f]);
    var m = i.crossDomain;
    !m && !("x-requested-with" in v) && (v["x-requested-with"] = "XMLHttpRequest");
    var h = i.withCredentials, g = i.xsrfCookieName, b = i.xsrfHeaderName;
    if ((h || !m) && g && b) {
      var y = (r = (n = document == null ? void 0 : document.cookie.match(new RegExp("(^|;\\s*)(" + g + ")=([^;]*)"))) === null || n === void 0 ? void 0 : n.pop()) !== null && r !== void 0 ? r : "";
      y && (v[b] = y);
    }
    var S = Hy(o, v), I = ue(ue({}, i), {
      url: l,
      headers: v,
      body: S
    }), _;
    _ = t.createXHR ? t.createXHR() : new XMLHttpRequest();
    {
      var E = t.progressSubscriber, C = t.includeDownloadProgress, w = C === void 0 ? !1 : C, x = t.includeUploadProgress, T = x === void 0 ? !1 : x, B = function(U, q) {
        _.addEventListener(U, function() {
          var J, H = q();
          (J = E == null ? void 0 : E.error) === null || J === void 0 || J.call(E, H), e.error(H);
        });
      };
      B("timeout", function() {
        return new xy(_, I);
      }), B("abort", function() {
        return new To("aborted", _, I);
      });
      var K = function(U, q) {
        return new Cy(q, _, I, U + "_" + q.type);
      }, M = function(U, q, J) {
        U.addEventListener(q, function(H) {
          e.next(K(J, H));
        });
      };
      T && [cs, ds, xu].forEach(function(U) {
        return M(_.upload, U, Py);
      }), E && [cs, ds].forEach(function(U) {
        return _.upload.addEventListener(U, function(q) {
          var J;
          return (J = E == null ? void 0 : E.next) === null || J === void 0 ? void 0 : J.call(E, q);
        });
      }), w && [cs, ds].forEach(function(U) {
        return M(_, U, Cu);
      });
      var P = function(U) {
        var q = "ajax error" + (U ? " " + U : "");
        e.error(new To(q, _, I));
      };
      _.addEventListener("error", function(U) {
        var q;
        (q = E == null ? void 0 : E.error) === null || q === void 0 || q.call(E, U), P();
      }), _.addEventListener(xu, function(U) {
        var q, J, H = _.status;
        if (H < 400) {
          (q = E == null ? void 0 : E.complete) === null || q === void 0 || q.call(E);
          var R = void 0;
          try {
            R = K(Cu, U);
          } catch (j) {
            e.error(j);
            return;
          }
          e.next(R), e.complete();
        } else
          (J = E == null ? void 0 : E.error) === null || J === void 0 || J.call(E, U), P(H);
      });
    }
    var O = I.user, A = I.method, N = I.async;
    O ? _.open(A, l, N, O, I.password) : _.open(A, l, N), N && (_.timeout = I.timeout, _.responseType = I.responseType), "withCredentials" in _ && (_.withCredentials = I.withCredentials);
    for (var f in v)
      v.hasOwnProperty(f) && _.setRequestHeader(f, v[f]);
    return S ? _.send(S) : _.send(), function() {
      _ && _.readyState !== 4 && _.abort();
    };
  });
}
function Hy(t, e) {
  var n;
  if (!t || typeof t == "string" || Gy(t) || jy(t) || ky(t) || By(t) || Fy(t) || Wy(t))
    return t;
  if (Vy(t))
    return t.buffer;
  if (typeof t == "object")
    return e["content-type"] = (n = e["content-type"]) !== null && n !== void 0 ? n : "application/json;charset=utf-8", JSON.stringify(t);
  throw new TypeError("Unknown body type");
}
var Uy = Object.prototype.toString;
function ol(t, e) {
  return Uy.call(t) === "[object " + e + "]";
}
function ky(t) {
  return ol(t, "ArrayBuffer");
}
function By(t) {
  return ol(t, "File");
}
function Fy(t) {
  return ol(t, "Blob");
}
function Vy(t) {
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView(t);
}
function Gy(t) {
  return typeof FormData < "u" && t instanceof FormData;
}
function jy(t) {
  return typeof URLSearchParams < "u" && t instanceof URLSearchParams;
}
function Wy(t) {
  return typeof ReadableStream < "u" && t instanceof ReadableStream;
}
class qy {
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
const zy = new qy("https://demo.compas.energy", {}, "DSOM Versatel Production URL"), Xy = [zy], Ky = Xy[0].getUrl();
class sl {
  constructor(e = {}) {
    this.configuration = e;
  }
  get basePath() {
    return this.configuration.basePath ?? Ky;
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
class wd {
  constructor(e = new sl()) {
    this.configuration = e, this.middleware = [], this.withMiddleware = (n) => {
      const r = this.clone();
      return r.middleware = r.middleware.concat(n), r;
    }, this.withPreMiddleware = (n) => this.withMiddleware(n.map((r) => ({ pre: r }))), this.withPostMiddleware = (n) => this.withMiddleware(n.map((r) => ({ post: r }))), this.createRequestArgs = ({ url: n, query: r, method: i, headers: a, body: o, responseType: u }) => ({
      url: `${this.configuration.basePath}${n}${r && Object.keys(r).length ? `?${Yy(r)}` : ""}`,
      method: i,
      headers: a,
      body: o instanceof FormData ? o : JSON.stringify(o),
      responseType: u ?? "json"
    }), this.rxjsRequest = (n) => di(n).pipe(
      Jt((r) => (this.middleware.filter((i) => i.pre).forEach((i) => r = i.pre(r)), r)),
      py(
        (r) => yi(r).pipe(
          Jt((i) => (this.middleware.filter((a) => a.post).forEach((a) => i = a.post(i)), i))
        )
      )
    ), this.clone = () => Object.assign(Object.create(Object.getPrototypeOf(this)), this), this.middleware = e.middleware;
  }
  request(e, n) {
    return this.rxjsRequest(this.createRequestArgs(e)).pipe(
      Jt((r) => {
        const { status: i, response: a } = r;
        if (i >= 200 && i < 300)
          return (n == null ? void 0 : n.response) === "raw" ? r : a;
        throw r;
      })
    );
  }
}
const zt = (t) => encodeURIComponent(`${t}`), Yy = (t) => Object.entries(t).map(
  ([e, n]) => n instanceof Array ? n.map((r) => `${zt(e)}=${zt(r)}`).join("&") : `${zt(e)}=${zt(n)}`
).join("&"), hn = (t, e, n) => {
  if (t == null)
    throw new Error(`Parameter "${e}" was null or undefined when calling "${n}".`);
};
class Zy extends wd {
  archiveResource({ id: e, version: n, xAuthor: r, xApprover: i, contentType: a, xFilename: o, body: u }, l) {
    hn(e, "id", "archiveResource"), hn(n, "version", "archiveResource");
    const c = {
      "Content-Type": "application/octet-stream",
      ...r != null ? { "X-author": String(r) } : void 0,
      ...i != null ? { "X-approver": String(i) } : void 0,
      ...a != null ? { "Content-Type": String(a) } : void 0,
      ...o != null ? { "X-filename": String(o) } : void 0
    };
    return this.request({
      url: "/api/archive/referenced-resource/{id}/versions/{version}".replace("{id}", zt(e)).replace("{version}", zt(n)),
      method: "POST",
      headers: c,
      body: u
    }, l == null ? void 0 : l.responseOpts);
  }
  archiveSclResource({ id: e, version: n }, r) {
    hn(e, "id", "archiveSclResource"), hn(n, "version", "archiveSclResource");
    const i = {};
    return this.request({
      url: "/api/archive/scl/{id}/versions/{version}".replace("{id}", zt(e)).replace("{version}", zt(n)),
      method: "POST",
      headers: i
    }, r == null ? void 0 : r.responseOpts);
  }
  retrieveArchivedResourceHistory({ id: e }, n) {
    hn(e, "id", "retrieveArchivedResourceHistory");
    const r = {};
    return this.request({
      url: "/api/archive/resources/{id}/versions".replace("{id}", zt(e)),
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
class Qy extends wd {
  assignResourceToLocation({ locationId: e, uuid: n }, r) {
    hn(e, "locationId", "assignResourceToLocation"), hn(n, "uuid", "assignResourceToLocation");
    const i = {};
    return this.request({
      url: "/api/locations/{locationId}/resources/{uuid}/assign".replace("{locationId}", zt(e)).replace("{uuid}", zt(n)),
      method: "POST",
      headers: i
    }, r == null ? void 0 : r.responseOpts);
  }
  createLocation({ location: e }, n) {
    hn(e, "location", "createLocation");
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
    hn(e, "locationId", "deleteLocation");
    const r = {};
    return this.request({
      url: "/api/locations/{locationId}".replace("{locationId}", zt(e)),
      method: "DELETE",
      headers: r
    }, n == null ? void 0 : n.responseOpts);
  }
  getLocation({ locationId: e }, n) {
    hn(e, "locationId", "getLocation");
    const r = {};
    return this.request({
      url: "/api/locations/{locationId}".replace("{locationId}", zt(e)),
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
    hn(e, "locationId", "unassignResourceFromLocation"), hn(n, "uuid", "unassignResourceFromLocation");
    const i = {};
    return this.request({
      url: "/api/locations/{locationId}/resources/{uuid}/unassign".replace("{locationId}", zt(e)).replace("{uuid}", zt(n)),
      method: "POST",
      headers: i
    }, r == null ? void 0 : r.responseOpts);
  }
  updateLocation({ locationId: e, location: n }, r) {
    hn(e, "locationId", "updateLocation"), hn(n, "location", "updateLocation");
    const i = {
      "Content-Type": "application/json"
    };
    return this.request({
      url: "/api/locations/{locationId}".replace("{locationId}", zt(e)),
      method: "PUT",
      headers: i,
      body: n
    }, r == null ? void 0 : r.responseOpts);
  }
}
class _a {
  constructor(e, n, r, i, a, o, u, l, c, d, v, f, m) {
    this._uuid = e, this._name = n, this._location = r, this._note = i, this._author = a, this._approver = o, this._type = u, this._voltage = l, this._modifiedAt = c, this._archivedAt = d, this._contentType = v, this._version = f, this._fields = m;
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
class Jr {
  constructor() {
    this.baseUrl = "/compas-scl-data-service", this.dummySearchResults = [
      new _a(
        Zr(),
        "Dummy name",
        "z1b2c3d4-e5f6-7890-1234-56789abcdef1",
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
      new _a(
        Zr(),
        "Dummy name 2",
        "e1b2c3d4-e5f6-7890-1234-56789abcdef1",
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
    return Jr.instance || (Jr.instance = new Jr()), Jr.instance;
  }
  searchArchive(e) {
    return this.generateApiClient().searchArchivedResources({ archivedResourcesSearch: e }).pipe(
      Ji(1),
      Jt((n) => n.resources),
      Jt(
        (n) => n.map((r) => this.mapToArchiveSearchResult(r))
      ),
      fi(() => di(this.dummySearchResults)),
      Iy(500)
    );
  }
  retrieveArchivedResourceHistory(e) {
    return this.generateApiClient().retrieveArchivedResourceHistory({ id: e }).pipe(
      Ji(1),
      Jt((n) => n.versions),
      Jt(
        (n) => n.map((r) => this.mapToArchiveSearchResult(r))
      ),
      fi(() => di([
        new _a(
          Zr(),
          "Dummy name",
          "e1b2c3d4-e5f6-7890-1234-56789abcdef1",
          "My Note",
          "Jane Doe",
          "John Doe",
          "SCD",
          "220",
          (/* @__PURE__ */ new Date()).toDateString(),
          (/* @__PURE__ */ new Date()).toDateString(),
          "application/xml",
          "2.0.0",
          [{ key: "SOURCE_RESOURCE_ID", value: Zr() }]
        ),
        new _a(
          Zr(),
          "Dummy name",
          "3c4b2a7e-4c8b-49da-9627-5b783d85745f",
          "My Note 2",
          "Jane Doe",
          "John Doe",
          "SCD",
          "220",
          (/* @__PURE__ */ new Date()).toDateString(),
          (/* @__PURE__ */ new Date()).toDateString(),
          "application/xml",
          "5.1.0",
          [{ key: "SOURCE_RESOURCE_ID", value: Zr() }]
        )
      ]))
    );
  }
  findByUUIDAndVersion(e, n, r) {
    return Wa(
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
    return this.generateApiClient().archiveSclResource({ id: e, version: n });
  }
  mapToArchiveSearchResult(e) {
    return new _a(
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
    const e = new sl({
      basePath: this.baseUrl
      // accessToken: authInfo.token,
    });
    return new Zy(e);
  }
}
class Di {
  constructor() {
    this.baseUrl = "/compas-scl-data-service";
  }
  static getInstance() {
    return Di.instance || (Di.instance = new Di()), Di.instance;
  }
  listLocations() {
    return this.generateApiClient().getLocations({}).pipe(
      Ji(1),
      fi(() => di([
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
    const e = new sl({
      basePath: this.baseUrl
      // accessToken: authInfo.token,
    });
    return new Qy(e);
  }
}
function Jy(t, e) {
  Ce(e, !0);
  const n = Jr.getInstance(), r = { store: tn([]) };
  let i = /* @__PURE__ */ ve(!1);
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
  rt(() => {
    e.searchResult && n.retrieveArchivedResourceHistory(e.searchResult.uuid).pipe(Ji(1), Au((c) => {
      r.store.set(c), X(i, !0);
    })).subscribe();
  });
  function l(c) {
    var v;
    let d;
    c.fields && c.fields.length && (d = (v = c.fields.find((f) => f.key === "SOURCE_RESOURCE_ID")) == null ? void 0 : v.value), n.findByUUIDAndVersion(d, c.type, c.version).pipe(
      Ji(1),
      Au((f) => {
        const m = window.URL.createObjectURL(f), h = document.createElement("a");
        h.href = m, h.download = c.filename, h.style.display = "none", document.body.appendChild(h), h.click(), document.body.removeChild(h), window.URL.revokeObjectURL(m);
      }),
      fi((f) => (console.error(f), Oa.error("Download failed", "An error occurred while trying to download the resource.", 5e3), di(void 0)))
    ).subscribe();
  }
  S_(t, {
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
  }), xe();
}
var $y = /* @__PURE__ */ de("<span><!></span>"), eI = /* @__PURE__ */ de("<!> <br/>", 1), tI = /* @__PURE__ */ de("<i> </i>"), nI = /* @__PURE__ */ de('<div class="result-container"><div class="content"><!></div></div>');
function rI(t, e) {
  Ce(e, !0);
  let n = p(e, "searchResults", 19, () => []), r = p(e, "noResourcesLabel", 3, "No resources found.");
  var i = nI(), a = se(i), o = se(a);
  {
    var u = (c) => {
      var d = ne(), v = Z(d);
      wn(v, 17, n, (f) => f.uuid, (f, m) => {
        var h = eI(), g = Z(h);
        ad(g, {
          get title() {
            return s(m).name;
          },
          open: !0,
          content: (y) => {
            var S = $y(), I = se(S);
            Jy(I, {
              get searchResult() {
                return s(m);
              }
            }), L(y, S);
          },
          $$slots: { content: !0 }
        }), L(f, h);
      }), L(c, d);
    }, l = (c) => {
      var d = tI(), v = se(d);
      Oe(() => at(v, r())), L(c, d);
    };
    ae(o, (c) => {
      n().length ? c(u) : c(l, !1);
    });
  }
  L(t, i), xe();
}
dm({ en: Sm, de: pm });
var iI = /* @__PURE__ */ de("<span><!></span>"), aI = /* @__PURE__ */ de('<!> <div class="separator svelte-1gp5xzm"></div>', 1), oI = /* @__PURE__ */ de('<div class="oscd-app"><div class="search-filter svelte-1gp5xzm"><!></div> <div class="content-container svelte-1gp5xzm"><!></div></div> <!>', 1);
function sI(t, e) {
  Ce(e, !0);
  const n = () => Qn(cm, "$_", r), [r, i] = br(), a = Jr.getInstance(), o = Di.getInstance();
  let u = /* @__PURE__ */ ve(ce(/* @__PURE__ */ new Map())), l = /* @__PURE__ */ ve(!0), c = /* @__PURE__ */ ve(ce(/* @__PURE__ */ new Map())), d = /* @__PURE__ */ ve(ce([
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
    { key: "to", label: "Date to", type: "date" },
    { key: "location", label: "Location", type: "select" }
  ])), v = /* @__PURE__ */ ve("");
  const f = new mu([]), m = new mu(""), h = m.pipe(
    Eu(),
    // emit the initial value immediately
    Su((M, P) => P === 0 ? [M] : m.pipe(by(300)))
  ), g = o.listLocations().pipe(
    Jt((M) => {
      const P = new Map(M.map((A) => [A.uuid, A.name])), O = s(d).find((A) => A.key === "location");
      return O && (O.options = M.map((A) => ({ value: A.uuid, label: A.name }))), X(c, P, !0), P;
    }),
    fi((M) => (console.error("Error fetching locations:", M), Oa.error("Failed to load locations."), di(/* @__PURE__ */ new Map()))),
    Iu(1)
  );
  function b(M, P) {
    const O = {
      uuid: null,
      type: null,
      name: null,
      location: null,
      from: null,
      to: null
    };
    return M.forEach((A) => {
      if (A.value) {
        if (A.type === "date") {
          const N = new Date(A.value);
          A.key === "from" && (O.from = N.toISOString()), A.key === "to" && (N.setHours(23, 59, 59, 999), O.to = N.toISOString());
          return;
        }
        A.key in O && (O[A.key] = A.value);
      }
    }), P && P.trim() !== "" && (O.name = P.trim()), O;
  }
  const S = bu([f, h]).pipe(Ey((M, P) => JSON.stringify(M) === JSON.stringify(P)), Jt(([M, P]) => b(M, P))).pipe(
    Su((M) => bu({
      results: a.searchArchive(M).pipe(fi((P) => (console.error("Search error:", P), Oa.error("Search failed. Please try again later."), di([])))),
      locations: g
    }).pipe(
      Jt(({ results: P, locations: O }) => {
        const A = /* @__PURE__ */ new Map();
        for (const N of P) {
          const U = N.location ?? "Default";
          A.has(U) || A.set(U, []), A.get(U).push(N);
        }
        return { grouped: A, locations: O };
      }),
      Jt((P) => ({ loading: !1, ...P })),
      Eu({ loading: !0 })
      // loading state at start of each search
    )),
    Iu(1)
  );
  rt(() => {
    const M = S.subscribe((P) => {
      X(l, P.loading, !0), P.loading || (X(u, P.grouped, !0), X(c, P.locations, !0));
    });
    return () => M.unsubscribe();
  });
  var I = oI(), _ = Z(I), E = se(_), C = se(E);
  c_(C, {
    searchLabel: "Search file name...",
    onFilterChange: () => f.next(s(d)),
    onSearchInput: () => m.next(s(v)),
    get filters() {
      return s(d);
    },
    set filters(M) {
      X(d, M, !0);
    },
    get searchText() {
      return s(v);
    },
    set searchText(M) {
      X(v, M, !0);
    }
  });
  var w = Ie(E, 2), x = se(w);
  {
    var T = (M) => {
      ld(M, { indeterminate: !0 });
    }, B = (M) => {
      var P = ne(), O = Z(P);
      {
        var A = (N) => {
          var U = ne(), q = Z(U);
          wn(q, 18, () => s(u), (J) => J, (J, H) => {
            var R = aI(), j = Z(R);
            {
              const Ae = (V) => {
                var G = iI(), F = se(G);
                {
                  let ee = /* @__PURE__ */ ge(() => n()("no_resources_found"));
                  rI(F, {
                    get searchResults() {
                      return H[1];
                    },
                    get noResourcesLabel() {
                      return s(ee);
                    }
                  });
                }
                L(V, G);
              };
              let be = /* @__PURE__ */ ge(() => s(c).get(H[0]) ?? "Unknown");
              ad(j, {
                open: !0,
                get title() {
                  return s(be);
                },
                content: Ae,
                $$slots: { content: !0 }
              });
            }
            L(J, R);
          }), L(N, U);
        };
        ae(O, (N) => {
          s(u).size && N(A);
        });
      }
      L(M, P);
    };
    ae(x, (M) => {
      s(l) ? M(T) : M(B, !1);
    });
  }
  var K = Ie(_, 2);
  Cb(K, {}), L(t, I), xe(), i();
}
const Ld = "archive-explorer", Od = "0.0.1";
var lI = /* @__PURE__ */ de('<!> <input type="hidden" name="package-name"/> <input type="hidden" name="package-version"/>', 1);
function uI(t, e) {
  Ce(e, !0);
  let n = p(e, "dev", 3, !1);
  var r = lI(), i = Z(r);
  {
    var a = (l) => {
      sI(l, {});
    };
    ae(i, (l) => {
      (e.doc || n()) && l(a);
    });
  }
  var o = Ie(i, 2), u = Ie(o, 2);
  Oe(() => {
    Tl(o, Ld), Tl(u, Od);
  }), L(t, r), xe();
}
var Gi;
class vI extends HTMLElement {
  constructor() {
    super();
    tt(this, Gi);
    He(this, Gi, /* @__PURE__ */ ve(ce({ doc: void 0, editCount: void 0 })));
  }
  get props() {
    return s(re(this, Gi));
  }
  set props(n) {
    X(re(this, Gi), n, !0);
  }
  connectedCallback() {
    this.attachShadow({ mode: "open" }), this.props.doc = this._doc, this.props.editCount = this.editCount;
    const n = cI();
    this.shadowRoot.appendChild(n);
    const r = () => zf(uI, { target: this.shadowRoot, props: this.props });
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
function cI() {
  const t = `${Ld}-v${Od}-style`, e = dI(), n = document.createElement("link");
  return n.rel = "stylesheet", n.type = "text/css", n.href = e, n.id = t, n;
}
function dI() {
  const t = new URL(import.meta.url), e = t.origin, n = t.pathname.split("/").slice(0, -1).filter(Boolean).join("/");
  return [e, n, "style.css"].filter(Boolean).join("/");
}
export {
  vI as default
};
