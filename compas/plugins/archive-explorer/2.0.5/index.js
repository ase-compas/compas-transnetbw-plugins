var Dd = Object.defineProperty;
var ul = (t) => {
  throw TypeError(t);
};
var Pd = (t, e, n) => e in t ? Dd(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var bn = (t, e, n) => Pd(t, typeof e != "symbol" ? e + "" : e, n), qo = (t, e, n) => e.has(t) || ul("Cannot " + n);
var re = (t, e, n) => (qo(t, e, "read from private field"), n ? n.call(t) : e.get(t)), tt = (t, e, n) => e.has(t) ? ul("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, n), Ue = (t, e, n, r) => (qo(t, e, "write to private field"), r ? r.call(t, n) : e.set(t, n), n), Wt = (t, e, n) => (qo(t, e, "access private method"), n);
const Nt = Symbol(), Nd = "http://www.w3.org/1999/xhtml", Hd = "http://www.w3.org/2000/svg", Ud = "@attach", Tu = !1;
var Oo = Array.isArray, kd = Array.prototype.indexOf, Hs = Array.from, so = Object.defineProperty, Or = Object.getOwnPropertyDescriptor, wu = Object.getOwnPropertyDescriptors, Bd = Object.prototype, Fd = Array.prototype, Us = Object.getPrototypeOf, cl = Object.isExtensible;
function Ti(t) {
  return typeof t == "function";
}
const pe = () => {
};
function Vd(t) {
  return t();
}
function lo(t) {
  for (var e = 0; e < t.length; e++)
    t[e]();
}
function Lu() {
  var t, e, n = new Promise((r, i) => {
    t = r, e = i;
  });
  return { promise: n, resolve: t, reject: e };
}
const nn = 2, ks = 4, Ro = 8, Nr = 16, gr = 32, fi = 64, Bs = 128, On = 256, uo = 512, Kt = 1024, En = 2048, Hr = 4096, Vn = 8192, hi = 16384, Mo = 32768, Ur = 65536, dl = 1 << 17, jd = 1 << 18, Yi = 1 << 19, Ou = 1 << 20, ds = 1 << 21, Do = 1 << 22, ai = 1 << 23, Qn = Symbol("$state"), Ru = Symbol("legacy props"), Gd = Symbol(""), wi = new class extends Error {
  constructor() {
    super(...arguments);
    bn(this, "name", "StaleReactionError");
    bn(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
function Fs(t) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function Wd() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function qd(t) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function zd() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Xd(t) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Kd() {
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
function Vs(t, e) {
  return t != t ? e == e : t !== e || t !== null && typeof t == "object" || typeof t == "function";
}
function Du(t) {
  return !Vs(t, this.v);
}
let Zi = !1, rf = !1;
function af() {
  Zi = !0;
}
let lt = null;
function Fi(t) {
  lt = t;
}
function me(t) {
  return (
    /** @type {T} */
    Pu().get(t)
  );
}
function oe(t, e) {
  return Pu().set(t, e), e;
}
function Ce(t, e = !1, n) {
  lt = {
    p: lt,
    c: null,
    e: null,
    s: t,
    x: null,
    l: Zi && !e ? { s: null, u: null, $: [] } : null
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
      Ju(r);
  }
  return t !== void 0 && (e.x = t), lt = e.p, t ?? /** @type {T} */
  {};
}
function Ra() {
  return !Zi || lt !== null && lt.l === null;
}
function Pu(t) {
  return lt === null && Fs(), lt.c ?? (lt.c = new Map(of(lt) || void 0));
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
let $r = [];
function Nu() {
  var t = $r;
  $r = [], lo(t);
}
function vr(t) {
  if ($r.length === 0 && !ba) {
    var e = $r;
    queueMicrotask(() => {
      e === $r && Nu();
    });
  }
  $r.push(t);
}
function sf() {
  for (; $r.length > 0; )
    Nu();
}
const lf = /* @__PURE__ */ new WeakMap();
function Hu(t) {
  var e = Ge;
  if (e === null)
    return je.f |= ai, t;
  if (e.f & Mo)
    Vi(t, e);
  else {
    if (!(e.f & Bs))
      throw !e.parent && t instanceof Error && Uu(t), t;
    e.b.error(t);
  }
}
function Vi(t, e) {
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
  throw t instanceof Error && Uu(t), t;
}
function Uu(t) {
  const e = lf.get(t);
  e && (so(t, "message", {
    value: e.message
  }), so(t, "stack", {
    value: e.stack
  }));
}
const ja = /* @__PURE__ */ new Set();
let st = null, eo = null, Vt = null, fs = /* @__PURE__ */ new Set(), Zn = [], Po = null, hs = !1, ba = !1;
var Pi, Ni, ei, wa, Hi, Ui, ti, ki, La, Oa, Rn, vs, to, ms;
const To = class To {
  constructor() {
    tt(this, Rn);
    /**
     * The current values of any sources that are updated in this batch
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Source, any>}
     */
    bn(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any sources that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Source, any>}
     */
    tt(this, Pi, /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<() => void>}
     */
    tt(this, Ni, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    tt(this, ei, 0);
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    tt(this, wa, null);
    /**
     * Async effects inside a newly-created `<svelte:boundary>`
     * — these do not prevent the batch from committing
     * @type {Effect[]}
     */
    tt(this, Hi, []);
    /**
     * Template effects and `$effect.pre` effects, which run when
     * a batch is committed
     * @type {Effect[]}
     */
    tt(this, Ui, []);
    /**
     * The same as `#render_effects`, but for `$effect` (which runs after)
     * @type {Effect[]}
     */
    tt(this, ti, []);
    /**
     * Block effects, which may need to re-run on subsequent flushes
     * in order to update internal sources (e.g. each block items)
     * @type {Effect[]}
     */
    tt(this, ki, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Effect[]}
     */
    tt(this, La, []);
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Effect[]}
     */
    tt(this, Oa, []);
    /**
     * A set of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`
     * @type {Set<Effect>}
     */
    bn(this, "skipped_effects", /* @__PURE__ */ new Set());
  }
  /**
   *
   * @param {Effect[]} root_effects
   */
  process(e) {
    var a;
    Zn = [], eo = null, this.apply();
    for (const o of e)
      Wt(this, Rn, vs).call(this, o);
    if (re(this, ei) === 0) {
      var n = Vt;
      Wt(this, Rn, ms).call(this);
      var r = re(this, Ui), i = re(this, ti);
      Ue(this, Ui, []), Ue(this, ti, []), Ue(this, ki, []), eo = this, st = null, Vt = n, fl(r), fl(i), eo = null, (a = re(this, wa)) == null || a.resolve();
    } else
      Wt(this, Rn, to).call(this, re(this, Ui)), Wt(this, Rn, to).call(this, re(this, ti)), Wt(this, Rn, to).call(this, re(this, ki));
    Vt = null;
    for (const o of re(this, Hi))
      Ia(o);
    Ue(this, Hi, []);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Source} source
   * @param {any} value
   */
  capture(e, n) {
    re(this, Pi).has(e) || re(this, Pi).set(e, n), this.current.set(e, e.v), Vt == null || Vt.set(e, e.v);
  }
  activate() {
    st = this;
  }
  deactivate() {
    st = null, Vt = null;
  }
  flush() {
    if (Zn.length > 0) {
      if (this.activate(), ku(), st !== null && st !== this)
        return;
    } else re(this, ei) === 0 && Wt(this, Rn, ms).call(this);
    this.deactivate();
    for (const e of fs)
      if (fs.delete(e), e(), st !== null)
        break;
  }
  increment() {
    Ue(this, ei, re(this, ei) + 1);
  }
  decrement() {
    Ue(this, ei, re(this, ei) - 1);
    for (const e of re(this, La))
      $t(e, En), ui(e);
    for (const e of re(this, Oa))
      $t(e, Hr), ui(e);
    this.flush();
  }
  /** @param {() => void} fn */
  add_callback(e) {
    re(this, Ni).add(e);
  }
  settled() {
    return (re(this, wa) ?? Ue(this, wa, Lu())).promise;
  }
  static ensure() {
    if (st === null) {
      const e = st = new To();
      ja.add(st), ba || To.enqueue(() => {
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
Pi = new WeakMap(), Ni = new WeakMap(), ei = new WeakMap(), wa = new WeakMap(), Hi = new WeakMap(), Ui = new WeakMap(), ti = new WeakMap(), ki = new WeakMap(), La = new WeakMap(), Oa = new WeakMap(), Rn = new WeakSet(), /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 */
vs = function(e) {
  var c;
  e.f ^= Kt;
  for (var n = e.first; n !== null; ) {
    var r = n.f, i = (r & (gr | fi)) !== 0, a = i && (r & Kt) !== 0, o = a || (r & Vn) !== 0 || this.skipped_effects.has(n);
    if (!o && n.fn !== null) {
      i ? n.f ^= Kt : r & ks ? re(this, ti).push(n) : r & Kt || (r & Do && ((c = n.b) != null && c.is_pending()) ? re(this, Hi).push(n) : Uo(n) && (n.f & Nr && re(this, ki).push(n), Ia(n)));
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
to = function(e) {
  for (const n of e)
    (n.f & En ? re(this, La) : re(this, Oa)).push(n), $t(n, Kt);
  e.length = 0;
}, /**
 * Append and remove branches to/from the DOM
 */
ms = function() {
  var e;
  for (const n of re(this, Ni))
    n();
  if (re(this, Ni).clear(), ja.size > 1) {
    re(this, Pi).clear();
    let n = !0;
    for (const r of ja) {
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
        if (Zn.length > 0) {
          st = r, r.apply();
          for (const o of Zn)
            Wt(e = r, Rn, vs).call(e, o);
          Zn = [], r.deactivate();
        }
      }
    }
    st = null;
  }
  ja.delete(this);
};
let hr = To;
function uf(t) {
  var e = ba;
  ba = !0;
  try {
    for (var n; ; ) {
      if (sf(), Zn.length === 0 && (st == null || st.flush(), Zn.length === 0))
        return Po = null, /** @type {T} */
        n;
      ku();
    }
  } finally {
    ba = e;
  }
}
function ku() {
  var t = Ri;
  hs = !0;
  try {
    var e = 0;
    for (gl(!0); Zn.length > 0; ) {
      var n = hr.ensure();
      if (e++ > 1e3) {
        var r, i;
        cf();
      }
      n.process(Zn), Rr.clear();
    }
  } finally {
    hs = !1, gl(t), Po = null;
  }
}
function cf() {
  try {
    Kd();
  } catch (t) {
    Vi(t, Po);
  }
}
let cr = null;
function fl(t) {
  var e = t.length;
  if (e !== 0) {
    for (var n = 0; n < e; ) {
      var r = t[n++];
      if (!(r.f & (hi | Vn)) && Uo(r) && (cr = [], Ia(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null && r.ac === null ? nc(r) : r.fn = null), (cr == null ? void 0 : cr.length) > 0)) {
        Rr.clear();
        for (const i of cr)
          Ia(i);
        cr = [];
      }
    }
    cr = null;
  }
}
function Bu(t, e) {
  if (t.reactions !== null)
    for (const n of t.reactions) {
      const r = n.f;
      r & nn ? Bu(
        /** @type {Derived} */
        n,
        e
      ) : r & (Do | Nr) && Fu(n, e) && ($t(n, En), ui(
        /** @type {Effect} */
        n
      ));
    }
}
function Fu(t, e) {
  if (t.deps !== null) {
    for (const n of t.deps)
      if (e.includes(n) || n.f & nn && Fu(
        /** @type {Derived} */
        n,
        e
      ))
        return !0;
  }
  return !1;
}
function ui(t) {
  for (var e = Po = t; e.parent !== null; ) {
    e = e.parent;
    var n = e.f;
    if (hs && e === Ge && n & Nr)
      return;
    if (n & (fi | gr)) {
      if (!(n & Kt)) return;
      e.f ^= Kt;
    }
  }
  Zn.push(e);
}
function df(t) {
  let e = 0, n = ci(0), r;
  return () => {
    Tf() && (s(n), Pa(() => (e === 0 && (r = jn(() => t(() => _a(n)))), e += 1, () => {
      vr(() => {
        e -= 1, e === 0 && (r == null || r(), r = void 0, _a(n));
      });
    })));
  };
}
var ff = Ur | Yi | Bs;
function hf(t, e, n) {
  new vf(t, e, n);
}
var kn, Tn, Ns, Xn, ni, Kn, wn, cn, Yn, Cr, ri, xr, ii, Tr, wo, Lo, tn, mf, gf, no, ro, gs;
class vf {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   */
  constructor(e, n, r) {
    tt(this, tn);
    /** @type {Boundary | null} */
    bn(this, "parent");
    tt(this, kn, !1);
    /** @type {TemplateNode} */
    tt(this, Tn);
    /** @type {TemplateNode | null} */
    tt(this, Ns, null);
    /** @type {BoundaryProps} */
    tt(this, Xn);
    /** @type {((anchor: Node) => void)} */
    tt(this, ni);
    /** @type {Effect} */
    tt(this, Kn);
    /** @type {Effect | null} */
    tt(this, wn, null);
    /** @type {Effect | null} */
    tt(this, cn, null);
    /** @type {Effect | null} */
    tt(this, Yn, null);
    /** @type {DocumentFragment | null} */
    tt(this, Cr, null);
    tt(this, ri, 0);
    tt(this, xr, 0);
    tt(this, ii, !1);
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    tt(this, Tr, null);
    tt(this, wo, () => {
      re(this, Tr) && ji(re(this, Tr), re(this, ri));
    });
    tt(this, Lo, df(() => (Ue(this, Tr, ci(re(this, ri))), () => {
      Ue(this, Tr, null);
    })));
    Ue(this, Tn, e), Ue(this, Xn, n), Ue(this, ni, r), this.parent = /** @type {Effect} */
    Ge.b, Ue(this, kn, !!re(this, Xn).pending), Ue(this, Kn, Br(() => {
      Ge.b = this;
      {
        try {
          Ue(this, wn, qt(() => r(re(this, Tn))));
        } catch (i) {
          this.error(i);
        }
        re(this, xr) > 0 ? Wt(this, tn, ro).call(this) : Ue(this, kn, !1);
      }
    }, ff));
  }
  /**
   * Returns `true` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_pending() {
    return re(this, kn) || !!this.parent && this.parent.is_pending();
  }
  has_pending_snippet() {
    return !!re(this, Xn).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   */
  update_pending_count(e) {
    Wt(this, tn, gs).call(this, e), Ue(this, ri, re(this, ri) + e), fs.add(re(this, wo));
  }
  get_effect_pending() {
    return re(this, Lo).call(this), s(
      /** @type {Source<number>} */
      re(this, Tr)
    );
  }
  /** @param {unknown} error */
  error(e) {
    var n = re(this, Xn).onerror;
    let r = re(this, Xn).failed;
    if (re(this, ii) || !n && !r)
      throw e;
    re(this, wn) && (jt(re(this, wn)), Ue(this, wn, null)), re(this, cn) && (jt(re(this, cn)), Ue(this, cn, null)), re(this, Yn) && (jt(re(this, Yn)), Ue(this, Yn, null));
    var i = !1, a = !1;
    const o = () => {
      if (i) {
        tf();
        return;
      }
      i = !0, a && $d(), hr.ensure(), Ue(this, ri, 0), re(this, Yn) !== null && Mr(re(this, Yn), () => {
        Ue(this, Yn, null);
      }), Ue(this, kn, this.has_pending_snippet()), Ue(this, wn, Wt(this, tn, no).call(this, () => (Ue(this, ii, !1), qt(() => re(this, ni).call(this, re(this, Tn)))))), re(this, xr) > 0 ? Wt(this, tn, ro).call(this) : Ue(this, kn, !1);
    };
    var u = je;
    try {
      fn(null), a = !0, n == null || n(e, o), a = !1;
    } catch (l) {
      Vi(l, re(this, Kn) && re(this, Kn).parent);
    } finally {
      fn(u);
    }
    r && vr(() => {
      Ue(this, Yn, Wt(this, tn, no).call(this, () => {
        Ue(this, ii, !0);
        try {
          return qt(() => {
            r(
              re(this, Tn),
              () => e,
              () => o
            );
          });
        } catch (l) {
          return Vi(
            l,
            /** @type {Effect} */
            re(this, Kn).parent
          ), null;
        } finally {
          Ue(this, ii, !1);
        }
      }));
    });
  }
}
kn = new WeakMap(), Tn = new WeakMap(), Ns = new WeakMap(), Xn = new WeakMap(), ni = new WeakMap(), Kn = new WeakMap(), wn = new WeakMap(), cn = new WeakMap(), Yn = new WeakMap(), Cr = new WeakMap(), ri = new WeakMap(), xr = new WeakMap(), ii = new WeakMap(), Tr = new WeakMap(), wo = new WeakMap(), Lo = new WeakMap(), tn = new WeakSet(), mf = function() {
  try {
    Ue(this, wn, qt(() => re(this, ni).call(this, re(this, Tn))));
  } catch (e) {
    this.error(e);
  }
  Ue(this, kn, !1);
}, gf = function() {
  const e = re(this, Xn).pending;
  e && (Ue(this, cn, qt(() => e(re(this, Tn)))), hr.enqueue(() => {
    Ue(this, wn, Wt(this, tn, no).call(this, () => (hr.ensure(), qt(() => re(this, ni).call(this, re(this, Tn)))))), re(this, xr) > 0 ? Wt(this, tn, ro).call(this) : (Mr(
      /** @type {Effect} */
      re(this, cn),
      () => {
        Ue(this, cn, null);
      }
    ), Ue(this, kn, !1));
  }));
}, /**
 * @param {() => Effect | null} fn
 */
no = function(e) {
  var n = Ge, r = je, i = lt;
  er(re(this, Kn)), fn(re(this, Kn)), Fi(re(this, Kn).ctx);
  try {
    return e();
  } catch (a) {
    return Hu(a), null;
  } finally {
    er(n), fn(r), Fi(i);
  }
}, ro = function() {
  const e = (
    /** @type {(anchor: Node) => void} */
    re(this, Xn).pending
  );
  re(this, wn) !== null && (Ue(this, Cr, document.createDocumentFragment()), pf(re(this, wn), re(this, Cr))), re(this, cn) === null && Ue(this, cn, qt(() => e(re(this, Tn))));
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 */
gs = function(e) {
  var n;
  if (!this.has_pending_snippet()) {
    this.parent && Wt(n = this.parent, tn, gs).call(n, e);
    return;
  }
  Ue(this, xr, re(this, xr) + e), re(this, xr) === 0 && (Ue(this, kn, !1), re(this, cn) && Mr(re(this, cn), () => {
    Ue(this, cn, null);
  }), re(this, Cr) && (re(this, Tn).before(re(this, Cr)), Ue(this, Cr, null)), vr(() => {
    hr.ensure().flush();
  }));
};
function pf(t, e) {
  for (var n = t.nodes_start, r = t.nodes_end; n !== null; ) {
    var i = n === r ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Da(n)
    );
    e.append(n), n = i;
  }
}
function Vu(t, e, n) {
  const r = Ra() ? Ma : js;
  if (e.length === 0) {
    n(t.map(r));
    return;
  }
  var i = st, a = (
    /** @type {Effect} */
    Ge
  ), o = bf();
  Promise.all(e.map((u) => /* @__PURE__ */ _f(u))).then((u) => {
    o();
    try {
      n([...t.map(r), ...u]);
    } catch (l) {
      a.f & hi || Vi(l, a);
    }
    i == null || i.deactivate(), ps();
  }).catch((u) => {
    Vi(u, a);
  });
}
function bf() {
  var t = Ge, e = je, n = lt, r = st;
  return function() {
    er(t), fn(e), Fi(n), r == null || r.activate();
  };
}
function ps() {
  er(null), fn(null), Fi(null);
}
// @__NO_SIDE_EFFECTS__
function Ma(t) {
  var e = nn | En, n = je !== null && je.f & nn ? (
    /** @type {Derived} */
    je
  ) : null;
  return Ge === null || n !== null && n.f & On ? e |= On : Ge.f |= Yi, {
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
      Nt
    ),
    wv: 0,
    parent: n ?? Ge,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function _f(t, e) {
  let n = (
    /** @type {Effect | null} */
    Ge
  );
  n === null && Wd();
  var r = (
    /** @type {Boundary} */
    n.b
  ), i = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), a = ci(
    /** @type {V} */
    Nt
  ), o = !je, u = /* @__PURE__ */ new Map();
  return Lf(() => {
    var f;
    var l = Lu();
    i = l.promise;
    try {
      Promise.resolve(t()).then(l.resolve, l.reject).then(ps);
    } catch (m) {
      l.reject(m), ps();
    }
    var c = (
      /** @type {Batch} */
      st
    ), d = r.is_pending();
    o && (r.update_pending_count(1), d || (c.increment(), (f = u.get(c)) == null || f.reject(wi), u.delete(c), u.set(c, l)));
    const v = (m, h = void 0) => {
      if (d || c.activate(), h)
        h !== wi && (a.f |= ai, ji(a, h));
      else {
        a.f & ai && (a.f ^= ai), ji(a, m);
        for (const [g, b] of u) {
          if (u.delete(g), g === c) break;
          b.reject(wi);
        }
      }
      o && (r.update_pending_count(-1), d || c.decrement());
    };
    l.promise.then(v, (m) => v(null, m || "unknown"));
  }), No(() => {
    for (const l of u.values())
      l.reject(wi);
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
  const e = /* @__PURE__ */ Ma(t);
  return ac(e), e;
}
// @__NO_SIDE_EFFECTS__
function js(t) {
  const e = /* @__PURE__ */ Ma(t);
  return e.equals = Du, e;
}
function ju(t) {
  var e = t.effects;
  if (e !== null) {
    t.effects = null;
    for (var n = 0; n < e.length; n += 1)
      jt(
        /** @type {Effect} */
        e[n]
      );
  }
}
function yf(t) {
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
function Gs(t) {
  var e, n = Ge;
  er(yf(t));
  try {
    ju(t), e = uc(t);
  } finally {
    er(n);
  }
  return e;
}
function Gu(t) {
  var e = Gs(t);
  if (t.equals(e) || (t.v = e, t.wv = sc()), !mi)
    if (Vt !== null)
      Vt.set(t, t.v);
    else {
      var n = (wr || t.f & On) && t.deps !== null ? Hr : Kt;
      $t(t, n);
    }
}
const Rr = /* @__PURE__ */ new Map();
function ci(t, e) {
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
function ve(t, e) {
  const n = ci(t);
  return ac(n), n;
}
// @__NO_SIDE_EFFECTS__
function Wu(t, e = !1, n = !0) {
  var i;
  const r = ci(t);
  return e || (r.equals = Du), Zi && n && lt !== null && lt.l !== null && ((i = lt.l).s ?? (i.s = [])).push(r), r;
}
function X(t, e, n = !1) {
  je !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Bn || je.f & dl) && Ra() && je.f & (nn | Nr | Do | dl) && !(Jt != null && Jt.includes(t)) && Jd();
  let r = n ? ce(e) : e;
  return ji(t, r);
}
function ji(t, e) {
  if (!t.equals(e)) {
    var n = t.v;
    mi ? Rr.set(t, e) : Rr.set(t, n), t.v = e;
    var r = hr.ensure();
    r.capture(t, n), t.f & nn && (t.f & En && Gs(
      /** @type {Derived} */
      t
    ), $t(t, t.f & On ? Hr : Kt)), t.wv = sc(), qu(t, En), Ra() && Ge !== null && Ge.f & Kt && !(Ge.f & (gr | fi)) && (xn === null ? Mf([t]) : xn.push(t));
  }
  return e;
}
function _a(t) {
  X(t, t.v + 1);
}
function qu(t, e) {
  var n = t.reactions;
  if (n !== null)
    for (var r = Ra(), i = n.length, a = 0; a < i; a++) {
      var o = n[a], u = o.f;
      if (!(!r && o === Ge)) {
        var l = (u & En) === 0;
        l && $t(o, e), u & nn ? qu(
          /** @type {Derived} */
          o,
          Hr
        ) : l && (u & Nr && cr !== null && cr.push(
          /** @type {Effect} */
          o
        ), ui(
          /** @type {Effect} */
          o
        ));
      }
    }
}
function ce(t) {
  if (typeof t != "object" || t === null || Qn in t)
    return t;
  const e = Us(t);
  if (e !== Bd && e !== Fd)
    return t;
  var n = /* @__PURE__ */ new Map(), r = Oo(t), i = /* @__PURE__ */ ve(0), a = oi, o = (u) => {
    if (oi === a)
      return u();
    var l = je, c = oi;
    fn(null), bl(a);
    var d = u();
    return fn(l), bl(c), d;
  };
  return r && n.set("length", /* @__PURE__ */ ve(
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
          var v = /* @__PURE__ */ ve(c.value);
          return n.set(l, v), v;
        }) : X(d, c.value, !0), !0;
      },
      deleteProperty(u, l) {
        var c = n.get(l);
        if (c === void 0) {
          if (l in u) {
            const d = o(() => /* @__PURE__ */ ve(Nt));
            n.set(l, d), _a(i);
          }
        } else
          X(c, Nt), _a(i);
        return !0;
      },
      get(u, l, c) {
        var m;
        if (l === Qn)
          return t;
        var d = n.get(l), v = l in u;
        if (d === void 0 && (!v || (m = Or(u, l)) != null && m.writable) && (d = o(() => {
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
        if (l === Qn)
          return !0;
        var c = n.get(l), d = c !== void 0 && c.v !== Nt || Reflect.has(u, l);
        if (c !== void 0 || Ge !== null && (!d || (f = Or(u, l)) != null && f.writable)) {
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
          (!f || (I = Or(u, l)) != null && I.writable) && (v = o(() => /* @__PURE__ */ ve(void 0)), X(v, ce(c)), n.set(l, v));
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
          _a(i);
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
        Qd();
      }
    }
  );
}
function hl(t) {
  try {
    if (t !== null && typeof t == "object" && Qn in t)
      return t[Qn];
  } catch {
  }
  return t;
}
function If(t, e) {
  return Object.is(hl(t), hl(e));
}
var vl, zu, Xu, Ku, Yu;
function Ef() {
  if (vl === void 0) {
    vl = window, zu = document, Xu = /Firefox/.test(navigator.userAgent);
    var t = Element.prototype, e = Node.prototype, n = Text.prototype;
    Ku = Or(e, "firstChild").get, Yu = Or(e, "nextSibling").get, cl(t) && (t.__click = void 0, t.__className = void 0, t.__attributes = null, t.__style = void 0, t.__e = void 0), cl(n) && (n.__t = void 0);
  }
}
function kr(t = "") {
  return document.createTextNode(t);
}
// @__NO_SIDE_EFFECTS__
function Gi(t) {
  return Ku.call(t);
}
// @__NO_SIDE_EFFECTS__
function Da(t) {
  return Yu.call(t);
}
function se(t, e) {
  return /* @__PURE__ */ Gi(t);
}
function Z(t, e = !1) {
  {
    var n = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ Gi(
        /** @type {Node} */
        t
      )
    );
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ Da(n) : n;
  }
}
function Ie(t, e = 1, n = !1) {
  let r = t;
  for (; e--; )
    r = /** @type {TemplateNode} */
    /* @__PURE__ */ Da(r);
  return r;
}
function Sf(t) {
  t.textContent = "";
}
function Ws() {
  return !1;
}
function Af(t, e) {
  if (e) {
    const n = document.body;
    t.autofocus = !0, vr(() => {
      document.activeElement === n && t.focus();
    });
  }
}
let ml = !1;
function Cf() {
  ml || (ml = !0, document.addEventListener(
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
function Qi(t) {
  var e = je, n = Ge;
  fn(null), er(null);
  try {
    return t();
  } finally {
    fn(e), er(n);
  }
}
function Zu(t, e, n, r = n) {
  t.addEventListener(e, () => Qi(n));
  const i = t.__on_r;
  i ? t.__on_r = () => {
    i(), r(!0);
  } : t.__on_r = () => r(!0), Cf();
}
function Qu(t) {
  Ge === null && je === null && Xd(), je !== null && je.f & On && Ge === null && zd(), mi && qd();
}
function xf(t, e) {
  var n = e.last;
  n === null ? e.last = e.first = t : (n.next = t, t.prev = n, e.last = t);
}
function nr(t, e, n, r = !0) {
  var i = Ge;
  i !== null && i.f & Vn && (t |= Vn);
  var a = {
    ctx: lt,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: t | En,
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
      Ia(a), a.f |= Mo;
    } catch (l) {
      throw jt(a), l;
    }
  else e !== null && ui(a);
  if (r) {
    var o = a;
    if (n && o.deps === null && o.teardown === null && o.nodes_start === null && o.first === o.last && // either `null`, or a singular child
    !(o.f & Yi) && (o = o.first), o !== null && (o.parent = i, i !== null && xf(o, i), je !== null && je.f & nn && !(t & fi))) {
      var u = (
        /** @type {Derived} */
        je
      );
      (u.effects ?? (u.effects = [])).push(o);
    }
  }
  return a;
}
function Tf() {
  return je !== null && !Bn;
}
function No(t) {
  const e = nr(Ro, null, !1);
  return $t(e, Kt), e.teardown = t, e;
}
function Te(t) {
  Qu();
  var e = (
    /** @type {Effect} */
    Ge.f
  ), n = !je && (e & gr) !== 0 && (e & Mo) === 0;
  if (n) {
    var r = (
      /** @type {ComponentContext} */
      lt
    );
    (r.e ?? (r.e = [])).push(t);
  } else
    return Ju(t);
}
function Ju(t) {
  return nr(ks | Ou, t, !1);
}
function $u(t) {
  return Qu(), nr(Ro | Ou, t, !0);
}
function wf(t) {
  hr.ensure();
  const e = nr(fi | Yi, t, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? Mr(e, () => {
      jt(e), r(void 0);
    }) : (jt(e), r(void 0));
  });
}
function vi(t) {
  return nr(ks, t, !1);
}
function Lf(t) {
  return nr(Do | Yi, t, !0);
}
function Pa(t, e = 0) {
  return nr(Ro | e, t, !0);
}
function Oe(t, e = [], n = []) {
  Vu(e, n, (r) => {
    nr(Ro, () => t(...r.map(s)), !0);
  });
}
function Br(t, e = 0) {
  var n = nr(Nr | e, t, !0);
  return n;
}
function qt(t, e = !0) {
  return nr(gr | Yi, t, !0, e);
}
function ec(t) {
  var e = t.teardown;
  if (e !== null) {
    const n = mi, r = je;
    pl(!0), fn(null);
    try {
      e.call(null);
    } finally {
      pl(n), fn(r);
    }
  }
}
function tc(t, e = !1) {
  var n = t.first;
  for (t.first = t.last = null; n !== null; ) {
    const i = n.ac;
    i !== null && Qi(() => {
      i.abort(wi);
    });
    var r = n.next;
    n.f & fi ? n.parent = null : jt(n, e), n = r;
  }
}
function Of(t) {
  for (var e = t.first; e !== null; ) {
    var n = e.next;
    e.f & gr || jt(e), e = n;
  }
}
function jt(t, e = !0) {
  var n = !1;
  (e || t.f & jd) && t.nodes_start !== null && t.nodes_end !== null && (Rf(
    t.nodes_start,
    /** @type {TemplateNode} */
    t.nodes_end
  ), n = !0), tc(t, e && !n), co(t, 0), $t(t, hi);
  var r = t.transitions;
  if (r !== null)
    for (const a of r)
      a.stop();
  ec(t);
  var i = t.parent;
  i !== null && i.first !== null && nc(t), t.next = t.prev = t.teardown = t.ctx = t.deps = t.fn = t.nodes_start = t.nodes_end = t.ac = null;
}
function Rf(t, e) {
  for (; t !== null; ) {
    var n = t === e ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Da(t)
    );
    t.remove(), t = n;
  }
}
function nc(t) {
  var e = t.parent, n = t.prev, r = t.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), e !== null && (e.first === t && (e.first = r), e.last === t && (e.last = n));
}
function Mr(t, e) {
  var n = [];
  qs(t, n, !0), rc(n, () => {
    jt(t), e && e();
  });
}
function rc(t, e) {
  var n = t.length;
  if (n > 0) {
    var r = () => --n || e();
    for (var i of t)
      i.out(r);
  } else
    e();
}
function qs(t, e, n) {
  if (!(t.f & Vn)) {
    if (t.f ^= Vn, t.transitions !== null)
      for (const o of t.transitions)
        (o.is_global || n) && e.push(o);
    for (var r = t.first; r !== null; ) {
      var i = r.next, a = (r.f & Ur) !== 0 || (r.f & gr) !== 0;
      qs(r, e, a ? n : !1), r = i;
    }
  }
}
function Ho(t) {
  ic(t, !0);
}
function ic(t, e) {
  if (t.f & Vn) {
    t.f ^= Vn, t.f & Kt || ($t(t, En), ui(t));
    for (var n = t.first; n !== null; ) {
      var r = n.next, i = (n.f & Ur) !== 0 || (n.f & gr) !== 0;
      ic(n, i ? e : !1), n = r;
    }
    if (t.transitions !== null)
      for (const a of t.transitions)
        (a.is_global || e) && a.in();
  }
}
let Ri = !1;
function gl(t) {
  Ri = t;
}
let mi = !1;
function pl(t) {
  mi = t;
}
let je = null, Bn = !1;
function fn(t) {
  je = t;
}
let Ge = null;
function er(t) {
  Ge = t;
}
let Jt = null;
function ac(t) {
  je !== null && (Jt === null ? Jt = [t] : Jt.push(t));
}
let Qt = null, yn = 0, xn = null;
function Mf(t) {
  xn = t;
}
let oc = 1, ya = 0, oi = ya;
function bl(t) {
  oi = t;
}
let wr = !1;
function sc() {
  return ++oc;
}
function Uo(t) {
  var v;
  var e = t.f;
  if (e & En)
    return !0;
  if (e & Hr) {
    var n = t.deps, r = (e & On) !== 0;
    if (n !== null) {
      var i, a, o = (e & uo) !== 0, u = r && Ge !== null && !wr, l = n.length;
      if ((o || u) && (Ge === null || !(Ge.f & hi))) {
        var c = (
          /** @type {Derived} */
          t
        ), d = c.parent;
        for (i = 0; i < l; i++)
          a = n[i], (o || !((v = a == null ? void 0 : a.reactions) != null && v.includes(c))) && (a.reactions ?? (a.reactions = [])).push(c);
        o && (c.f ^= uo), u && d !== null && !(d.f & On) && (c.f ^= On);
      }
      for (i = 0; i < l; i++)
        if (a = n[i], Uo(
          /** @type {Derived} */
          a
        ) && Gu(
          /** @type {Derived} */
          a
        ), a.wv > t.wv)
          return !0;
    }
    (!r || Ge !== null && !wr) && $t(t, Kt);
  }
  return !1;
}
function lc(t, e, n = !0) {
  var r = t.reactions;
  if (r !== null && !(Jt != null && Jt.includes(t)))
    for (var i = 0; i < r.length; i++) {
      var a = r[i];
      a.f & nn ? lc(
        /** @type {Derived} */
        a,
        e,
        !1
      ) : e === a && (n ? $t(a, En) : a.f & Kt && $t(a, Hr), ui(
        /** @type {Effect} */
        a
      ));
    }
}
function uc(t) {
  var g;
  var e = Qt, n = yn, r = xn, i = je, a = wr, o = Jt, u = lt, l = Bn, c = oi, d = t.f;
  Qt = /** @type {null | Value[]} */
  null, yn = 0, xn = null, wr = (d & On) !== 0 && (Bn || !Ri || je === null), je = d & (gr | fi) ? null : t, Jt = null, Fi(t.ctx), Bn = !1, oi = ++ya, t.ac !== null && (Qi(() => {
    t.ac.abort(wi);
  }), t.ac = null);
  try {
    t.f |= ds;
    var v = (
      /** @type {Function} */
      t.fn
    ), f = v(), m = t.deps;
    if (Qt !== null) {
      var h;
      if (co(t, yn), m !== null && yn > 0)
        for (m.length = yn + Qt.length, h = 0; h < Qt.length; h++)
          m[yn + h] = Qt[h];
      else
        t.deps = m = Qt;
      if (!wr || // Deriveds that already have reactions can cleanup, so we still add them as reactions
      d & nn && /** @type {import('#client').Derived} */
      t.reactions !== null)
        for (h = yn; h < m.length; h++)
          ((g = m[h]).reactions ?? (g.reactions = [])).push(t);
    } else m !== null && yn < m.length && (co(t, yn), m.length = yn);
    if (Ra() && xn !== null && !Bn && m !== null && !(t.f & (nn | Hr | En)))
      for (h = 0; h < /** @type {Source[]} */
      xn.length; h++)
        lc(
          xn[h],
          /** @type {Effect} */
          t
        );
    return i !== null && i !== t && (ya++, xn !== null && (r === null ? r = xn : r.push(.../** @type {Source[]} */
    xn))), t.f & ai && (t.f ^= ai), f;
  } catch (b) {
    return Hu(b);
  } finally {
    t.f ^= ds, Qt = e, yn = n, xn = r, je = i, wr = a, Jt = o, Fi(u), Bn = l, oi = c;
  }
}
function Df(t, e) {
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
  (Qt === null || !Qt.includes(e)) && ($t(e, Hr), e.f & (On | uo) || (e.f ^= uo), ju(
    /** @type {Derived} **/
    e
  ), co(
    /** @type {Derived} **/
    e,
    0
  ));
}
function co(t, e) {
  var n = t.deps;
  if (n !== null)
    for (var r = e; r < n.length; r++)
      Df(t, n[r]);
}
function Ia(t) {
  var e = t.f;
  if (!(e & hi)) {
    $t(t, Kt);
    var n = Ge, r = Ri;
    Ge = t, Ri = !0;
    try {
      e & Nr ? Of(t) : tc(t), ec(t);
      var i = uc(t);
      t.teardown = typeof i == "function" ? i : null, t.wv = oc;
      var a;
      Tu && rf && t.f & En && t.deps;
    } finally {
      Ri = r, Ge = n;
    }
  }
}
async function cc() {
  await Promise.resolve(), uf();
}
function s(t) {
  var e = t.f, n = (e & nn) !== 0;
  if (je !== null && !Bn) {
    var r = Ge !== null && (Ge.f & hi) !== 0;
    if (!r && !(Jt != null && Jt.includes(t))) {
      var i = je.deps;
      if (je.f & ds)
        t.rv < ya && (t.rv = ya, Qt === null && i !== null && i[yn] === t ? yn++ : Qt === null ? Qt = [t] : (!wr || !Qt.includes(t)) && Qt.push(t));
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
    ), u = o.parent;
    u !== null && !(u.f & On) && (o.f ^= On);
  }
  if (mi) {
    if (Rr.has(t))
      return Rr.get(t);
    if (n) {
      o = /** @type {Derived} */
      t;
      var l = o.v;
      return (!(o.f & Kt) && o.reactions !== null || dc(o)) && (l = Gs(o)), Rr.set(o, l), l;
    }
  } else if (n) {
    if (o = /** @type {Derived} */
    t, Vt != null && Vt.has(o))
      return Vt.get(o);
    Uo(o) && Gu(o);
  }
  if (Vt != null && Vt.has(t))
    return Vt.get(t);
  if (t.f & ai)
    throw t.v;
  return t.v;
}
function dc(t) {
  if (t.v === Nt) return !0;
  if (t.deps === null) return !1;
  for (const e of t.deps)
    if (Rr.has(e) || e.f & nn && dc(
      /** @type {Derived} */
      e
    ))
      return !0;
  return !1;
}
function jn(t) {
  var e = Bn;
  try {
    return Bn = !0, t();
  } finally {
    Bn = e;
  }
}
const Pf = -7169;
function $t(t, e) {
  t.f = t.f & Pf | e;
}
function fc(t) {
  if (!(typeof t != "object" || !t || t instanceof EventTarget)) {
    if (Qn in t)
      bs(t);
    else if (!Array.isArray(t))
      for (let e in t) {
        const n = t[e];
        typeof n == "object" && n && Qn in n && bs(n);
      }
  }
}
function bs(t, e = /* @__PURE__ */ new Set()) {
  if (typeof t == "object" && t !== null && // We don't want to traverse DOM elements
  !(t instanceof EventTarget) && !e.has(t)) {
    e.add(t), t instanceof Date && t.getTime();
    for (let r in t)
      try {
        bs(t[r], e);
      } catch {
      }
    const n = Us(t);
    if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
      const r = wu(n);
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
const hc = /* @__PURE__ */ new Set(), _s = /* @__PURE__ */ new Set();
function zs(t, e, n, r = {}) {
  function i(a) {
    if (r.capture || ga.call(e, a), !a.cancelBubble)
      return Qi(() => n == null ? void 0 : n.call(this, a));
  }
  return t.startsWith("pointer") || t.startsWith("touch") || t === "wheel" ? vr(() => {
    e.addEventListener(t, i, r);
  }) : e.addEventListener(t, i, r), i;
}
function Nf(t, e, n, r = {}) {
  var i = zs(e, t, n, r);
  return () => {
    t.removeEventListener(e, i, r);
  };
}
function ma(t, e, n, r, i) {
  var a = { capture: r, passive: i }, o = zs(t, e, n, a);
  (e === document.body || // @ts-ignore
  e === window || // @ts-ignore
  e === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  e instanceof HTMLMediaElement) && No(() => {
    e.removeEventListener(t, o, a);
  });
}
function Sn(t) {
  for (var e = 0; e < t.length; e++)
    hc.add(t[e]);
  for (var n of _s)
    n(t);
}
let _l = null;
function ga(t) {
  var S;
  var e = this, n = (
    /** @type {Node} */
    e.ownerDocument
  ), r = t.type, i = ((S = t.composedPath) == null ? void 0 : S.call(t)) || [], a = (
    /** @type {null | Element} */
    i[0] || t.target
  );
  _l = t;
  var o = 0, u = _l === t && t.__root;
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
    so(t, "currentTarget", {
      configurable: !0,
      get() {
        return a || n;
      }
    });
    var d = je, v = Ge;
    fn(null), er(null);
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
            if (Oo(g)) {
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
      t.__root = e, delete t.currentTarget, fn(d), er(v);
    }
  }
}
function vc(t) {
  var e = document.createElement("template");
  return e.innerHTML = t.replaceAll("<!>", "<!---->"), e.content;
}
function Wi(t, e) {
  var n = (
    /** @type {Effect} */
    Ge
  );
  n.nodes_start === null && (n.nodes_start = t, n.nodes_end = e);
}
// @__NO_SIDE_EFFECTS__
function de(t, e) {
  var n = (e & 1) !== 0, r = (e & 2) !== 0, i, a = !t.startsWith("<!>");
  return () => {
    i === void 0 && (i = vc(a ? t : "<!>" + t), n || (i = /** @type {Node} */
    /* @__PURE__ */ Gi(i)));
    var o = (
      /** @type {TemplateNode} */
      r || Xu ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (n) {
      var u = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Gi(o)
      ), l = (
        /** @type {TemplateNode} */
        o.lastChild
      );
      Wi(u, l);
    } else
      Wi(o, o);
    return o;
  };
}
// @__NO_SIDE_EFFECTS__
function Hf(t, e, n = "svg") {
  var r = !t.startsWith("<!>"), i = `<${n}>${r ? t : "<!>" + t}</${n}>`, a;
  return () => {
    if (!a) {
      var o = (
        /** @type {DocumentFragment} */
        vc(i)
      ), u = (
        /** @type {Element} */
        /* @__PURE__ */ Gi(o)
      );
      a = /** @type {Element} */
      /* @__PURE__ */ Gi(u);
    }
    var l = (
      /** @type {TemplateNode} */
      a.cloneNode(!0)
    );
    return Wi(l, l), l;
  };
}
// @__NO_SIDE_EFFECTS__
function rn(t, e) {
  return /* @__PURE__ */ Hf(t, e, "svg");
}
function Rt(t = "") {
  {
    var e = kr(t + "");
    return Wi(e, e), e;
  }
}
function ne() {
  var t = document.createDocumentFragment(), e = document.createComment(""), n = kr();
  return t.append(e, n), Wi(e, n), t;
}
function O(t, e) {
  t !== null && t.before(
    /** @type {Node} */
    e
  );
}
function Uf(t) {
  return t.endsWith("capture") && t !== "gotpointercapture" && t !== "lostpointercapture";
}
const kf = [
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
function Bf(t) {
  return kf.includes(t);
}
const Ff = {
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
function Vf(t) {
  return t = t.toLowerCase(), Ff[t] ?? t;
}
const jf = ["touchstart", "touchmove"];
function Gf(t) {
  return jf.includes(t);
}
let fo = !0;
function yl(t) {
  fo = t;
}
function at(t, e) {
  var n = e == null ? "" : typeof e == "object" ? e + "" : e;
  n !== (t.__t ?? (t.__t = t.nodeValue)) && (t.__t = n, t.nodeValue = n + "");
}
function Wf(t, e) {
  return qf(t, e);
}
const Si = /* @__PURE__ */ new Map();
function qf(t, { target: e, anchor: n, props: r = {}, events: i, context: a, intro: o = !0 }) {
  Ef();
  var u = /* @__PURE__ */ new Set(), l = (v) => {
    for (var f = 0; f < v.length; f++) {
      var m = v[f];
      if (!u.has(m)) {
        u.add(m);
        var h = Gf(m);
        e.addEventListener(m, ga, { passive: h });
        var g = Si.get(m);
        g === void 0 ? (document.addEventListener(m, ga, { passive: h }), Si.set(m, 1)) : Si.set(m, g + 1);
      }
    }
  };
  l(Hs(hc)), _s.add(l);
  var c = void 0, d = wf(() => {
    var v = n ?? e.appendChild(kr());
    return hf(
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
        i && (r.$$events = i), fo = o, c = t(f, r) || {}, fo = !0, a && xe();
      }
    ), () => {
      var h;
      for (var f of u) {
        e.removeEventListener(f, ga);
        var m = (
          /** @type {number} */
          Si.get(f)
        );
        --m === 0 ? (document.removeEventListener(f, ga), Si.delete(f)) : Si.set(f, m);
      }
      _s.delete(l), v !== n && ((h = v.parentNode) == null || h.removeChild(v));
    };
  });
  return zf.set(c, d), c;
}
let zf = /* @__PURE__ */ new WeakMap();
function Se(t, e, ...n) {
  var r = t, i = pe, a;
  Br(() => {
    i !== (i = e()) && (a && (jt(a), a = null), a = qt(() => (
      /** @type {SnippetFn} */
      i(r, ...n)
    )));
  }, Ur);
}
function rt(t) {
  lt === null && Fs(), Zi && lt.l !== null ? Xf(lt).m.push(t) : Te(() => {
    const e = jn(t);
    if (typeof e == "function") return (
      /** @type {() => void} */
      e
    );
  });
}
function Dn(t) {
  lt === null && Fs(), rt(() => () => jn(t));
}
function Xf(t) {
  var e = (
    /** @type {ComponentContextLegacy} */
    t.l
  );
  return e.u ?? (e.u = { a: [], b: [], m: [] });
}
function ae(t, e, n = !1) {
  var r = t, i = null, a = null, o = Nt, u = n ? Ur : 0, l = !1;
  const c = (m, h = !0) => {
    l = !0, f(h, m);
  };
  var d = null;
  function v() {
    d !== null && (d.lastChild.remove(), r.before(d), d = null);
    var m = o ? i : a, h = o ? a : i;
    m && Ho(m), h && Mr(h, () => {
      o ? a = null : i = null;
    });
  }
  const f = (m, h) => {
    if (o !== (o = m)) {
      var g = Ws(), b = r;
      if (g && (d = document.createDocumentFragment(), d.append(b = kr())), o ? i ?? (i = h && qt(() => h(b))) : a ?? (a = h && qt(() => h(b))), g) {
        var y = (
          /** @type {Batch} */
          st
        ), S = o ? i : a, I = o ? a : i;
        S && y.skipped_effects.delete(S), I && y.skipped_effects.add(I), y.add_callback(v);
      } else
        v();
    }
  };
  Br(() => {
    l = !1, e(c), l || f(null, null);
  }, u);
}
let si = null;
function Il(t) {
  si = t;
}
function Li(t, e) {
  return e;
}
function Kf(t, e, n) {
  for (var r = t.items, i = [], a = e.length, o = 0; o < a; o++)
    qs(e[o].e, i, !0);
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
    ), r.clear(), zn(t, e[0].prev, e[a - 1].next);
  }
  rc(i, () => {
    for (var c = 0; c < a; c++) {
      var d = e[c];
      u || (r.delete(d.k), zn(t, d.prev, d.next)), jt(d.e, !u);
    }
  });
}
function Ln(t, e, n, r, i, a = null) {
  var o = t, u = { flags: e, items: /* @__PURE__ */ new Map(), first: null }, l = (e & 4) !== 0;
  if (l) {
    var c = (
      /** @type {Element} */
      t
    );
    o = c.appendChild(kr());
  }
  var d = null, v = !1, f = /* @__PURE__ */ new Map(), m = /* @__PURE__ */ js(() => {
    var y = n();
    return Oo(y) ? y : y == null ? [] : Hs(y);
  }), h, g;
  function b() {
    Yf(
      g,
      h,
      u,
      f,
      o,
      i,
      e,
      r,
      n
    ), a !== null && (h.length === 0 ? d ? Ho(d) : d = qt(() => a(o)) : d !== null && Mr(d, () => {
      d = null;
    }));
  }
  Br(() => {
    g ?? (g = /** @type {Effect} */
    Ge), h = /** @type {V[]} */
    s(m);
    var y = h.length;
    if (!(v && y === 0)) {
      v = y === 0;
      var S, I, _, E;
      if (Ws()) {
        var A = /* @__PURE__ */ new Set(), L = (
          /** @type {Batch} */
          st
        );
        for (I = 0; I < y; I += 1) {
          _ = h[I], E = r(_, I);
          var C = u.items.get(E) ?? f.get(E);
          C ? e & 3 && mc(C, _, I, e) : (S = gc(
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
          ), f.set(E, S)), A.add(E);
        }
        for (const [T, k] of u.items)
          A.has(T) || L.skipped_effects.add(k.e);
        L.add_callback(b);
      } else
        b();
      s(m);
    }
  });
}
function Yf(t, e, n, r, i, a, o, u, l) {
  var J, H, R, G;
  var c = (o & 8) !== 0, d = (o & 3) !== 0, v = e.length, f = n.items, m = n.first, h = m, g, b = null, y, S = [], I = [], _, E, A, L;
  if (c)
    for (L = 0; L < v; L += 1)
      _ = e[L], E = u(_, L), A = f.get(E), A !== void 0 && ((J = A.a) == null || J.measure(), (y ?? (y = /* @__PURE__ */ new Set())).add(A));
  for (L = 0; L < v; L += 1) {
    if (_ = e[L], E = u(_, L), A = f.get(E), A === void 0) {
      var C = r.get(E);
      if (C !== void 0) {
        r.delete(E), f.set(E, C);
        var T = b ? b.next : h;
        zn(n, b, C), zn(n, C, T), zo(C, T, i), b = C;
      } else {
        var k = h ? (
          /** @type {TemplateNode} */
          h.e.nodes_start
        ) : i;
        b = gc(
          k,
          n,
          b,
          b === null ? n.first : b.next,
          _,
          E,
          L,
          a,
          o,
          l
        );
      }
      f.set(E, b), S = [], I = [], h = b.next;
      continue;
    }
    if (d && mc(A, _, L, o), A.e.f & Vn && (Ho(A.e), c && ((H = A.a) == null || H.unfix(), (y ?? (y = /* @__PURE__ */ new Set())).delete(A))), A !== h) {
      if (g !== void 0 && g.has(A)) {
        if (S.length < I.length) {
          var K = I[0], j;
          b = K.prev;
          var D = S[0], w = S[S.length - 1];
          for (j = 0; j < S.length; j += 1)
            zo(S[j], K, i);
          for (j = 0; j < I.length; j += 1)
            g.delete(I[j]);
          zn(n, D.prev, w.next), zn(n, b, D), zn(n, w, K), h = K, b = w, L -= 1, S = [], I = [];
        } else
          g.delete(A), zo(A, h, i), zn(n, A.prev, A.next), zn(n, A, b === null ? n.first : b.next), zn(n, b, A), b = A;
        continue;
      }
      for (S = [], I = []; h !== null && h.k !== E; )
        h.e.f & Vn || (g ?? (g = /* @__PURE__ */ new Set())).add(h), I.push(h), h = h.next;
      if (h === null)
        continue;
      A = h;
    }
    S.push(A), b = A, h = A.next;
  }
  if (h !== null || g !== void 0) {
    for (var x = g === void 0 ? [] : Hs(g); h !== null; )
      h.e.f & Vn || x.push(h), h = h.next;
    var M = x.length;
    if (M > 0) {
      var N = o & 4 && v === 0 ? i : null;
      if (c) {
        for (L = 0; L < M; L += 1)
          (R = x[L].a) == null || R.measure();
        for (L = 0; L < M; L += 1)
          (G = x[L].a) == null || G.fix();
      }
      Kf(n, x, N);
    }
  }
  c && vr(() => {
    var Ae;
    if (y !== void 0)
      for (A of y)
        (Ae = A.a) == null || Ae.apply();
  }), t.first = n.first && n.first.e, t.last = b && b.e;
  for (var W of r.values())
    jt(W.e);
  r.clear();
}
function mc(t, e, n, r) {
  r & 1 && ji(t.v, e), r & 2 ? ji(
    /** @type {Value<number>} */
    t.i,
    n
  ) : t.i = n;
}
function gc(t, e, n, r, i, a, o, u, l, c, d) {
  var v = si, f = (l & 1) !== 0, m = (l & 16) === 0, h = f ? m ? /* @__PURE__ */ Wu(i, !1, !1) : ci(i) : i, g = l & 2 ? ci(o) : o, b = {
    i: g,
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
      y.append(t = kr());
    }
    return b.e = qt(() => u(
      /** @type {Node} */
      t,
      h,
      g,
      c
    ), nf), b.e.prev = n && n.e, b.e.next = r && r.e, n === null ? d || (e.first = b) : (n.next = b, n.e.next = b.e), r !== null && (r.prev = b, r.e.prev = b.e), b;
  } finally {
    si = v;
  }
}
function zo(t, e, n) {
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
      /* @__PURE__ */ Da(a)
    );
    i.before(a), a = o;
  }
}
function zn(t, e, n) {
  e === null ? t.first = n : (e.next = n, e.e.next = n && n.e), n !== null && (n.prev = e, n.e.prev = e && e.e);
}
function pr(t, e, n) {
  var r = t, i, a, o = null, u = null;
  function l() {
    a && (Mr(a), a = null), o && (o.lastChild.remove(), r.before(o), o = null), a = u, u = null;
  }
  Br(() => {
    if (i !== (i = e())) {
      var c = Ws();
      if (i) {
        var d = r;
        c && (o = document.createDocumentFragment(), o.append(d = kr()), a && st.skipped_effects.add(a)), u = qt(() => n(d, i));
      }
      c ? st.add_callback(l) : l();
    }
  }, Ur);
}
function El(t, e, n, r, i, a) {
  var o, u, l = null, c = (
    /** @type {TemplateNode} */
    t
  ), d, v = si;
  Br(() => {
    const f = e() || null;
    var m = f === "svg" ? Hd : null;
    if (f !== o) {
      var h = si;
      Il(v), d && (f === null ? Mr(d, () => {
        d = null, u = null;
      }) : f === u ? Ho(d) : (jt(d), yl(!1))), f && f !== u && (d = qt(() => {
        if (l = m ? document.createElementNS(m, f) : document.createElement(f), Wi(l, l), r) {
          var g = (
            /** @type {TemplateNode} */
            l.appendChild(kr())
          );
          r(l, g);
        }
        Ge.nodes_end = l, c.before(l);
      })), o = f, o && (u = o), yl(!0), Il(h);
    }
  }, Ur);
}
function Me(t, e, n) {
  vi(() => {
    var r = jn(() => e(t, n == null ? void 0 : n()) || {});
    if (n && (r != null && r.update)) {
      var i = !1, a = (
        /** @type {any} */
        {}
      );
      Pa(() => {
        var o = n();
        fc(o), i && Vs(a, o) && (a = o, r.update(o));
      }), i = !0;
    }
    if (r != null && r.destroy)
      return () => (
        /** @type {Function} */
        r.destroy()
      );
  });
}
function Zf(t, e) {
  var n = void 0, r;
  Br(() => {
    n !== (n = e()) && (r && (jt(r), r = null), n && (r = qt(() => {
      vi(() => (
        /** @type {(node: Element) => void} */
        n(t)
      ));
    })));
  });
}
function pc(t) {
  var e, n, r = "";
  if (typeof t == "string" || typeof t == "number") r += t;
  else if (typeof t == "object") if (Array.isArray(t)) {
    var i = t.length;
    for (e = 0; e < i; e++) t[e] && (n = pc(t[e])) && (r && (r += " "), r += n);
  } else for (n in t) t[n] && (r && (r += " "), r += n);
  return r;
}
function Qf() {
  for (var t, e, n = 0, r = "", i = arguments.length; n < i; n++) (t = arguments[n]) && (e = pc(t)) && (r && (r += " "), r += e);
  return r;
}
function bc(t) {
  return typeof t == "object" ? Qf(t) : t ?? "";
}
const Sl = [...` 	
\r\f \v\uFEFF`];
function Jf(t, e, n) {
  var r = t == null ? "" : "" + t;
  if (e && (r = r ? r + " " + e : e), n) {
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
function Al(t, e = !1) {
  var n = e ? " !important;" : ";", r = "";
  for (var i in t) {
    var a = t[i];
    a != null && a !== "" && (r += " " + i + ": " + a + n);
  }
  return r;
}
function Xo(t) {
  return t[0] !== "-" || t[1] !== "-" ? t.toLowerCase() : t;
}
function $f(t, e) {
  if (e) {
    var n = "", r, i;
    if (Array.isArray(e) ? (r = e[0], i = e[1]) : r = e, t) {
      t = String(t).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var a = !1, o = 0, u = !1, l = [];
      r && l.push(...Object.keys(r).map(Xo)), i && l.push(...Object.keys(i).map(Xo));
      var c = 0, d = -1;
      const g = t.length;
      for (var v = 0; v < g; v++) {
        var f = t[v];
        if (u ? f === "/" && t[v - 1] === "*" && (u = !1) : a ? a === f && (a = !1) : f === "/" && t[v + 1] === "*" ? u = !0 : f === '"' || f === "'" ? a = f : f === "(" ? o++ : f === ")" && o--, !u && a === !1 && o === 0) {
          if (f === ":" && d === -1)
            d = v;
          else if (f === ";" || v === g - 1) {
            if (d !== -1) {
              var m = Xo(t.substring(c, d).trim());
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
    return r && (n += Al(r)), i && (n += Al(i, !0)), n = n.trim(), n === "" ? null : n;
  }
  return t == null ? null : String(t);
}
function Xs(t, e, n, r, i, a) {
  var o = t.__className;
  if (o !== n || o === void 0) {
    var u = Jf(n, r, a);
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
function Ut(t, e, n, r) {
  var i = t.__style;
  if (i !== e) {
    var a = $f(e, r);
    a == null ? t.removeAttribute("style") : t.style.cssText = a, t.__style = e;
  } else r && (Array.isArray(r) ? (Ko(t, n == null ? void 0 : n[0], r[0]), Ko(t, n == null ? void 0 : n[1], r[1], "important")) : Ko(t, n, r));
  return r;
}
function ys(t, e, n = !1) {
  if (t.multiple) {
    if (e == null)
      return;
    if (!Oo(e))
      return ef();
    for (var r of t.options)
      r.selected = e.includes(Cl(r));
    return;
  }
  for (r of t.options) {
    var i = Cl(r);
    if (If(i, e)) {
      r.selected = !0;
      return;
    }
  }
  (!n || e !== void 0) && (t.selectedIndex = -1);
}
function eh(t) {
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
  }), No(() => {
    e.disconnect();
  });
}
function Cl(t) {
  return "__value" in t ? t.__value : t.value;
}
const sa = Symbol("class"), la = Symbol("style"), _c = Symbol("is custom element"), yc = Symbol("is html");
function xl(t, e) {
  var n = Ks(t);
  n.value === (n.value = // treat null and undefined the same for the initial value
  e ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  t.value === e && (e !== 0 || t.nodeName !== "PROGRESS") || (t.value = e ?? "");
}
function th(t, e) {
  e ? t.hasAttribute("selected") || t.setAttribute("selected", "") : t.removeAttribute("selected");
}
function Dr(t, e, n, r) {
  var i = Ks(t);
  i[e] !== (i[e] = n) && (e === "loading" && (t[Gd] = n), n == null ? t.removeAttribute(e) : typeof n != "string" && Ic(t).includes(e) ? t[e] = n : t.setAttribute(e, n));
}
function nh(t, e, n, r, i = !1, a = !1) {
  var o = Ks(t), u = o[_c], l = !o[yc], c = e || {}, d = t.tagName === "OPTION";
  for (var v in e)
    v in n || (n[v] = null);
  n.class ? n.class = bc(n.class) : n[sa] && (n.class = null), n[la] && (n.style ?? (n.style = null));
  var f = Ic(t);
  for (const I in n) {
    let _ = n[I];
    if (d && I === "value" && _ == null) {
      t.value = t.__value = "", c[I] = _;
      continue;
    }
    if (I === "class") {
      var m = t.namespaceURI === "http://www.w3.org/1999/xhtml";
      Xs(t, m, _, r, e == null ? void 0 : e[sa], n[sa]), c[I] = _, c[sa] = n[sa];
      continue;
    }
    if (I === "style") {
      Ut(t, _, e == null ? void 0 : e[la], n[la]), c[I] = _, c[la] = n[la];
      continue;
    }
    var h = c[I];
    if (!(_ === h && !(_ === void 0 && t.hasAttribute(I)))) {
      c[I] = _;
      var g = I[0] + I[1];
      if (g !== "$$")
        if (g === "on") {
          const E = {}, A = "$$" + I;
          let L = I.slice(2);
          var b = Bf(L);
          if (Uf(L) && (L = L.slice(0, -7), E.capture = !0), !b && h) {
            if (_ != null) continue;
            t.removeEventListener(L, c[A], E), c[A] = null;
          }
          if (_ != null)
            if (b)
              t[`__${L}`] = _, Sn([L]);
            else {
              let C = function(T) {
                c[I].call(this, T);
              };
              c[A] = zs(L, t, C, E);
            }
          else b && (t[`__${L}`] = void 0);
        } else if (I === "style")
          Dr(t, I, _);
        else if (I === "autofocus")
          Af(
            /** @type {HTMLElement} */
            t,
            !!_
          );
        else if (!u && (I === "__value" || I === "value" && _ != null))
          t.value = t.__value = _;
        else if (I === "selected" && d)
          th(
            /** @type {HTMLOptionElement} */
            t,
            _
          );
        else {
          var y = I;
          l || (y = Vf(y));
          var S = y === "defaultValue" || y === "defaultChecked";
          if (_ == null && !u && !S)
            if (o[I] = null, y === "value" || y === "checked") {
              let E = (
                /** @type {HTMLInputElement} */
                t
              );
              const A = e === void 0;
              if (y === "value") {
                let L = E.defaultValue;
                E.removeAttribute(y), E.defaultValue = L, E.value = E.__value = A ? L : null;
              } else {
                let L = E.defaultChecked;
                E.removeAttribute(y), E.defaultChecked = L, E.checked = A ? L : !1;
              }
            } else
              t.removeAttribute(I);
          else S || f.includes(y) && (u || typeof _ != "string") ? (t[y] = _, y in o && (o[y] = Nt)) : typeof _ != "function" && Dr(t, y, _);
        }
    }
  }
  return c;
}
function ke(t, e, n = [], r = [], i, a = !1, o = !1) {
  Vu(n, r, (u) => {
    var l = void 0, c = {}, d = t.nodeName === "SELECT", v = !1;
    if (Br(() => {
      var m = e(...u.map(s)), h = nh(
        t,
        l,
        m,
        i,
        a,
        o
      );
      v && d && "value" in m && ys(
        /** @type {HTMLSelectElement} */
        t,
        m.value
      );
      for (let b of Object.getOwnPropertySymbols(c))
        m[b] || jt(c[b]);
      for (let b of Object.getOwnPropertySymbols(m)) {
        var g = m[b];
        b.description === Ud && (!l || g !== l[b]) && (c[b] && jt(c[b]), c[b] = qt(() => Zf(t, () => g))), h[b] = g;
      }
      l = h;
    }), d) {
      var f = (
        /** @type {HTMLSelectElement} */
        t
      );
      vi(() => {
        ys(
          f,
          /** @type {Record<string | symbol, any>} */
          l.value,
          !0
        ), eh(f);
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
      [_c]: t.nodeName.includes("-"),
      [yc]: t.namespaceURI === Nd
    })
  );
}
var Tl = /* @__PURE__ */ new Map();
function Ic(t) {
  var e = t.getAttribute("is") || t.nodeName, n = Tl.get(e);
  if (n) return n;
  Tl.set(e, n = []);
  for (var r, i = t, a = Element.prototype; a !== i; ) {
    r = wu(i);
    for (var o in r)
      r[o].set && n.push(o);
    i = Us(i);
  }
  return n;
}
const rh = () => performance.now(), fr = {
  // don't access requestAnimationFrame eagerly outside method
  // this allows basic testing of user code without JSDOM
  // bunder will eval and remove ternary when the user's app is built
  tick: (
    /** @param {any} _ */
    (t) => requestAnimationFrame(t)
  ),
  now: () => rh(),
  tasks: /* @__PURE__ */ new Set()
};
function Ec() {
  const t = fr.now();
  fr.tasks.forEach((e) => {
    e.c(t) || (fr.tasks.delete(e), e.f());
  }), fr.tasks.size !== 0 && fr.tick(Ec);
}
function ih(t) {
  let e;
  return fr.tasks.size === 0 && fr.tick(Ec), {
    promise: new Promise((n) => {
      fr.tasks.add(e = { c: t, f: n });
    }),
    abort() {
      fr.tasks.delete(e);
    }
  };
}
function Ga(t, e) {
  Qi(() => {
    t.dispatchEvent(new CustomEvent(e));
  });
}
function ah(t) {
  if (t === "float") return "cssFloat";
  if (t === "offset") return "cssOffset";
  if (t.startsWith("--")) return t;
  const e = t.split("-");
  return e.length === 1 ? e[0] : e[0] + e.slice(1).map(
    /** @param {any} word */
    (n) => n[0].toUpperCase() + n.slice(1)
  ).join("");
}
function wl(t) {
  const e = {}, n = t.split(";");
  for (const r of n) {
    const [i, a] = r.split(":");
    if (!i || a === void 0) break;
    const o = ah(i.trim());
    e[o] = a.trim();
  }
  return e;
}
const oh = (t) => t;
function sh(t, e, n) {
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
        o = vo(this.element, l, void 0, 1, () => {
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
function ho(t, e, n, r) {
  var i = (t & 1) !== 0, a = (t & 2) !== 0, o = i && a, u = (t & 4) !== 0, l = o ? "both" : i ? "in" : "out", c, d = e.inert, v = e.style.overflow, f, m;
  function h() {
    return Qi(() => c ?? (c = n()(e, (r == null ? void 0 : r()) ?? /** @type {P} */
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
      a || f == null || f.abort(), Ga(e, "introstart"), f = vo(e, h(), m, 1, () => {
        Ga(e, "introend"), f == null || f.abort(), f = c = void 0, e.style.overflow = v;
      });
    },
    out(I) {
      if (!a) {
        I == null || I(), c = void 0;
        return;
      }
      e.inert = !0, Ga(e, "outrostart"), m = vo(e, h(), f, 0, () => {
        Ga(e, "outroend"), I == null || I();
      });
    },
    stop: () => {
      f == null || f.abort(), m == null || m.abort();
    }
  }, b = (
    /** @type {Effect} */
    Ge
  );
  if ((b.transitions ?? (b.transitions = [])).push(g), i && fo) {
    var y = u;
    if (!y) {
      for (var S = (
        /** @type {Effect | null} */
        b.parent
      ); S && S.f & Ur; )
        for (; (S = S.parent) && !(S.f & Nr); )
          ;
      y = !S || (S.f & Mo) !== 0;
    }
    y && vi(() => {
      jn(() => g.in());
    });
  }
}
function vo(t, e, n, r, i) {
  var a = r === 1;
  if (Ti(e)) {
    var o, u = !1;
    return vr(() => {
      if (!u) {
        var b = e({ direction: a ? "in" : "out" });
        o = vo(t, b, n, r, i);
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
  const { delay: l = 0, css: c, tick: d, easing: v = oh } = e;
  var f = [];
  if (a && n === void 0 && (d && d(0, 1), c)) {
    var m = wl(c(0, 1));
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
        for (var E = Math.ceil(S / 16.666666666666668), A = 0; A <= E; A += 1) {
          var L = b + y * v(A / E), C = wl(c(L, 1 - L));
          I.push(C), _ || (_ = C.overflow === "hidden");
        }
      _ && (t.style.overflow = "hidden"), h = () => {
        var T = (
          /** @type {number} */
          /** @type {globalThis.Animation} */
          g.currentTime
        );
        return b + y * v(T / S);
      }, d && ih(() => {
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
function Ea(t, e, n = e) {
  var r = /* @__PURE__ */ new WeakSet();
  Zu(t, "input", async (i) => {
    var a = i ? t.defaultValue : t.value;
    if (a = Yo(t) ? Zo(a) : a, n(a), st !== null && r.add(st), await cc(), a !== (a = e())) {
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
  jn(e) == null && t.value && (n(Yo(t) ? Zo(t.value) : t.value), st !== null && r.add(st)), Pa(() => {
    var i = e();
    if (t === document.activeElement) {
      var a = (
        /** @type {Batch} */
        eo ?? st
      );
      if (r.has(a))
        return;
    }
    Yo(t) && i === Zo(t.value) || t.type === "date" && !i && !t.value || i !== t.value && (t.value = i ?? "");
  });
}
function lh(t, e, n = e) {
  Zu(t, "change", (r) => {
    var i = r ? t.defaultChecked : t.checked;
    n(i);
  }), // If we are hydrating and the value has since changed,
  // then use the update value from the input instead.
  // If defaultChecked is set, then checked == defaultChecked
  jn(e) == null && n(t.checked), Pa(() => {
    var r = e();
    t.checked = !!r;
  });
}
function Yo(t) {
  var e = t.type;
  return e === "number" || e === "range";
}
function Zo(t) {
  return t === "" ? null : +t;
}
function Ll(t, e) {
  return t === e || (t == null ? void 0 : t[Qn]) === e;
}
function Ee(t = {}, e, n, r) {
  return vi(() => {
    var i, a;
    return Pa(() => {
      i = a, a = (r == null ? void 0 : r()) || [], jn(() => {
        t !== n(...a) && (e(t, ...a), i && Ll(n(...i), t) && e(null, ...i));
      });
    }), () => {
      vr(() => {
        a && Ll(n(...a), t) && e(null, ...a);
      });
    };
  }), t;
}
function uh(t = !1) {
  const e = (
    /** @type {ComponentContextLegacy} */
    lt
  ), n = e.l.u;
  if (!n) return;
  let r = () => fc(e.s);
  if (t) {
    let i = 0, a = (
      /** @type {Record<string, any>} */
      {}
    );
    const o = /* @__PURE__ */ Ma(() => {
      let u = !1;
      const l = e.s;
      for (const c in l)
        l[c] !== a[c] && (a[c] = l[c], u = !0);
      return u && i++, i;
    });
    r = () => s(o);
  }
  n.b.length && $u(() => {
    Ol(e, r), lo(n.b);
  }), Te(() => {
    const i = jn(() => n.m.map(Vd));
    return () => {
      for (const a of i)
        typeof a == "function" && a();
    };
  }), n.a.length && Te(() => {
    Ol(e, r), lo(n.a);
  });
}
function Ol(t, e) {
  if (t.l.s)
    for (const n of t.l.s) s(n);
  e();
}
function Ys(t, e, n) {
  if (t == null)
    return e(void 0), n && n(void 0), pe;
  const r = jn(
    () => t.subscribe(
      e,
      // @ts-expect-error
      n
    )
  );
  return r.unsubscribe ? () => r.unsubscribe() : r;
}
const Ai = [];
function ch(t, e) {
  return {
    subscribe: en(t, e).subscribe
  };
}
function en(t, e = pe) {
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
function Ji(t, e, n) {
  const r = !Array.isArray(t), i = r ? [t] : t;
  if (!i.every(Boolean))
    throw new Error("derived() expects stores as input, got a falsy value");
  const a = e.length < 2;
  return ch(n, (o, u) => {
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
      lo(m), v(), l = !1;
    };
  });
}
function dh(t) {
  let e;
  return Ys(t, (n) => e = n)(), e;
}
let Wa = !1, Is = Symbol();
function Jn(t, e, n) {
  const r = n[e] ?? (n[e] = {
    store: null,
    source: /* @__PURE__ */ Wu(void 0),
    unsubscribe: pe
  });
  if (r.store !== t && !(Is in n))
    if (r.unsubscribe(), r.store = t ?? null, t == null)
      r.source.v = void 0, r.unsubscribe = pe;
    else {
      var i = !0;
      r.unsubscribe = Ys(t, (a) => {
        i ? r.source.v = a : X(r.source, a);
      }), i = !1;
    }
  return t && Is in n ? dh(t) : s(r.source);
}
function di(t, e) {
  return t.set(e), e;
}
function br() {
  const t = {};
  function e() {
    No(() => {
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
function fh(t) {
  var e = Wa;
  try {
    return Wa = !1, [t(), Wa];
  } finally {
    Wa = e;
  }
}
const hh = {
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
    hh
  );
}
const vh = {
  get(t, e) {
    let n = t.props.length;
    for (; n--; ) {
      let r = t.props[n];
      if (Ti(r) && (r = r()), typeof r == "object" && r !== null && e in r) return r[e];
    }
  },
  set(t, e, n) {
    let r = t.props.length;
    for (; r--; ) {
      let i = t.props[r];
      Ti(i) && (i = i());
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
      if (Ti(r) && (r = r()), typeof r == "object" && r !== null && e in r) {
        const i = Or(r, e);
        return i && !i.configurable && (i.configurable = !0), i;
      }
    }
  },
  has(t, e) {
    if (e === Qn || e === Ru) return !1;
    for (let n of t.props)
      if (Ti(n) && (n = n()), n != null && e in n) return !0;
    return !1;
  },
  ownKeys(t) {
    const e = [];
    for (let n of t.props)
      if (Ti(n) && (n = n()), !!n) {
        for (const r in n)
          e.includes(r) || e.push(r);
        for (const r of Object.getOwnPropertySymbols(n))
          e.includes(r) || e.push(r);
      }
    return e;
  }
};
function nt(...t) {
  return new Proxy({ props: t }, vh);
}
function p(t, e, n, r) {
  var I;
  var i = !Zi || (n & 2) !== 0, a = (n & 8) !== 0, o = (n & 16) !== 0, u = (
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
    var v = Qn in t || Ru in t;
    d = ((I = Or(t, e)) == null ? void 0 : I.set) ?? (v && e in t ? (_) => t[e] = _ : void 0);
  }
  var f, m = !1;
  a ? [f, m] = fh(() => (
    /** @type {V} */
    t[e]
  )) : f = /** @type {V} */
  t[e], f === void 0 && r !== void 0 && (f = c(), d && (i && Yd(), d(f)));
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
  var b = !1, y = (n & 1 ? Ma : js)(() => (b = !1, h()));
  a && s(y);
  var S = (
    /** @type {Effect} */
    Ge
  );
  return (
    /** @type {() => V} */
    function(_, E) {
      if (arguments.length > 0) {
        const A = E ? s(y) : i && a ? ce(_) : _;
        return X(y, A), b = !0, u !== void 0 && (u = A), _;
      }
      return mi && b || S.f & hi ? y.v : s(y);
    }
  );
}
const mh = "5";
var xu;
typeof window < "u" && ((xu = window.__svelte ?? (window.__svelte = {})).v ?? (xu.v = /* @__PURE__ */ new Set())).add(mh);
function gh(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var ph = function(e) {
  return bh(e) && !_h(e);
};
function bh(t) {
  return !!t && typeof t == "object";
}
function _h(t) {
  var e = Object.prototype.toString.call(t);
  return e === "[object RegExp]" || e === "[object Date]" || Eh(t);
}
var yh = typeof Symbol == "function" && Symbol.for, Ih = yh ? Symbol.for("react.element") : 60103;
function Eh(t) {
  return t.$$typeof === Ih;
}
function Sh(t) {
  return Array.isArray(t) ? [] : {};
}
function Sa(t, e) {
  return e.clone !== !1 && e.isMergeableObject(t) ? qi(Sh(t), t, e) : t;
}
function Ah(t, e, n) {
  return t.concat(e).map(function(r) {
    return Sa(r, n);
  });
}
function Ch(t, e) {
  if (!e.customMerge)
    return qi;
  var n = e.customMerge(t);
  return typeof n == "function" ? n : qi;
}
function xh(t) {
  return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(t).filter(function(e) {
    return Object.propertyIsEnumerable.call(t, e);
  }) : [];
}
function Rl(t) {
  return Object.keys(t).concat(xh(t));
}
function Sc(t, e) {
  try {
    return e in t;
  } catch {
    return !1;
  }
}
function Th(t, e) {
  return Sc(t, e) && !(Object.hasOwnProperty.call(t, e) && Object.propertyIsEnumerable.call(t, e));
}
function wh(t, e, n) {
  var r = {};
  return n.isMergeableObject(t) && Rl(t).forEach(function(i) {
    r[i] = Sa(t[i], n);
  }), Rl(e).forEach(function(i) {
    Th(t, i) || (Sc(t, i) && n.isMergeableObject(e[i]) ? r[i] = Ch(i, n)(t[i], e[i], n) : r[i] = Sa(e[i], n));
  }), r;
}
function qi(t, e, n) {
  n = n || {}, n.arrayMerge = n.arrayMerge || Ah, n.isMergeableObject = n.isMergeableObject || ph, n.cloneUnlessOtherwiseSpecified = Sa;
  var r = Array.isArray(e), i = Array.isArray(t), a = r === i;
  return a ? r ? n.arrayMerge(t, e, n) : wh(t, e, n) : Sa(e, n);
}
qi.all = function(e, n) {
  if (!Array.isArray(e))
    throw new Error("first argument should be an array");
  return e.reduce(function(r, i) {
    return qi(r, i, n);
  }, {});
};
var Lh = qi, Oh = Lh;
const Rh = /* @__PURE__ */ gh(Oh);
var Es = function(t, e) {
  return Es = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, r) {
    n.__proto__ = r;
  } || function(n, r) {
    for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (n[i] = r[i]);
  }, Es(t, e);
};
function Ve(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  Es(t, e);
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
function Mh(t, e) {
  var n = {};
  for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(t); i < r.length; i++)
      e.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[i]) && (n[r[i]] = t[r[i]]);
  return n;
}
function Ac(t, e, n, r) {
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
function $n(t, e, n) {
  if (n || arguments.length === 2) for (var r = 0, i = e.length, a; r < i; r++)
    (a || !(r in e)) && (a || (a = Array.prototype.slice.call(e, 0, r)), a[r] = e[r]);
  return t.concat(a || Array.prototype.slice.call(e));
}
function Mi(t) {
  return this instanceof Mi ? (this.v = t, this) : new Mi(t);
}
function Dh(t, e, n) {
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
    m.value instanceof Mi ? Promise.resolve(m.value.v).then(d, v) : f(a[0][2], m);
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
function Ph(t) {
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
function Qo(t, e) {
  var n = e && e.cache ? e.cache : Vh, r = e && e.serializer ? e.serializer : Bh, i = e && e.strategy ? e.strategy : Uh;
  return i(t, {
    cache: n,
    serializer: r
  });
}
function Nh(t) {
  return t == null || typeof t == "number" || typeof t == "boolean";
}
function Hh(t, e, n, r) {
  var i = Nh(r) ? r : n(r), a = e.get(i);
  return typeof a > "u" && (a = t.call(this, r), e.set(i, a)), a;
}
function Cc(t, e, n) {
  var r = Array.prototype.slice.call(arguments, 3), i = n(r), a = e.get(i);
  return typeof a > "u" && (a = t.apply(this, r), e.set(i, a)), a;
}
function xc(t, e, n, r, i) {
  return n.bind(e, t, r, i);
}
function Uh(t, e) {
  var n = t.length === 1 ? Hh : Cc;
  return xc(t, this, n, e.cache.create(), e.serializer);
}
function kh(t, e) {
  return xc(t, this, Cc, e.cache.create(), e.serializer);
}
var Bh = function() {
  return JSON.stringify(arguments);
}, Fh = (
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
), Vh = {
  create: function() {
    return new Fh();
  }
}, Jo = {
  variadic: kh
}, Ye;
(function(t) {
  t[t.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", t[t.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", t[t.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", t[t.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", t[t.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", t[t.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", t[t.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", t[t.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", t[t.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", t[t.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", t[t.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", t[t.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", t[t.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", t[t.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", t[t.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", t[t.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", t[t.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", t[t.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", t[t.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", t[t.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", t[t.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", t[t.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", t[t.INVALID_TAG = 23] = "INVALID_TAG", t[t.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", t[t.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", t[t.UNCLOSED_TAG = 27] = "UNCLOSED_TAG";
})(Ye || (Ye = {}));
var vt;
(function(t) {
  t[t.literal = 0] = "literal", t[t.argument = 1] = "argument", t[t.number = 2] = "number", t[t.date = 3] = "date", t[t.time = 4] = "time", t[t.select = 5] = "select", t[t.plural = 6] = "plural", t[t.pound = 7] = "pound", t[t.tag = 8] = "tag";
})(vt || (vt = {}));
var zi;
(function(t) {
  t[t.number = 0] = "number", t[t.dateTime = 1] = "dateTime";
})(zi || (zi = {}));
function Ml(t) {
  return t.type === vt.literal;
}
function jh(t) {
  return t.type === vt.argument;
}
function Tc(t) {
  return t.type === vt.number;
}
function wc(t) {
  return t.type === vt.date;
}
function Lc(t) {
  return t.type === vt.time;
}
function Oc(t) {
  return t.type === vt.select;
}
function Rc(t) {
  return t.type === vt.plural;
}
function Gh(t) {
  return t.type === vt.pound;
}
function Mc(t) {
  return t.type === vt.tag;
}
function Dc(t) {
  return !!(t && typeof t == "object" && t.type === zi.number);
}
function Ss(t) {
  return !!(t && typeof t == "object" && t.type === zi.dateTime);
}
var Pc = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/, Wh = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
function qh(t) {
  var e = {};
  return t.replace(Wh, function(n) {
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
var zh = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
function Xh(t) {
  if (t.length === 0)
    throw new Error("Number skeleton cannot be empty");
  for (var e = t.split(zh).filter(function(f) {
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
function Kh(t) {
  return t.replace(/^(.*?)-/, "");
}
var Dl = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g, Nc = /^(@+)?(\+|#+)?[rs]?$/g, Yh = /(\*)(0+)|(#+)(0+)|(0+)/g, Hc = /^(0+)$/;
function Pl(t) {
  var e = {};
  return t[t.length - 1] === "r" ? e.roundingPriority = "morePrecision" : t[t.length - 1] === "s" && (e.roundingPriority = "lessPrecision"), t.replace(Nc, function(n, r, i) {
    return typeof i != "string" ? (e.minimumSignificantDigits = r.length, e.maximumSignificantDigits = r.length) : i === "+" ? e.minimumSignificantDigits = r.length : r[0] === "#" ? e.maximumSignificantDigits = r.length : (e.minimumSignificantDigits = r.length, e.maximumSignificantDigits = r.length + (typeof i == "string" ? i.length : 0)), "";
  }), e;
}
function Uc(t) {
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
function Zh(t) {
  var e;
  if (t[0] === "E" && t[1] === "E" ? (e = {
    notation: "engineering"
  }, t = t.slice(2)) : t[0] === "E" && (e = {
    notation: "scientific"
  }, t = t.slice(1)), e) {
    var n = t.slice(0, 2);
    if (n === "+!" ? (e.signDisplay = "always", t = t.slice(2)) : n === "+?" && (e.signDisplay = "exceptZero", t = t.slice(2)), !Hc.test(t))
      throw new Error("Malformed concise eng/scientific notation");
    e.minimumIntegerDigits = t.length;
  }
  return e;
}
function Nl(t) {
  var e = {}, n = Uc(t);
  return n || e;
}
function Qh(t) {
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
        e.style = "unit", e.unit = Kh(i.options[0]);
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
          return ue(ue({}, l), Nl(c));
        }, {}));
        continue;
      case "engineering":
        e = ue(ue(ue({}, e), { notation: "engineering" }), i.options.reduce(function(l, c) {
          return ue(ue({}, l), Nl(c));
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
        i.options[0].replace(Yh, function(l, c, d, v, f, m) {
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
    if (Hc.test(i.stem)) {
      e.minimumIntegerDigits = i.stem.length;
      continue;
    }
    if (Dl.test(i.stem)) {
      if (i.options.length > 1)
        throw new RangeError("Fraction-precision stems only accept a single optional option");
      i.stem.replace(Dl, function(l, c, d, v, f, m) {
        return d === "*" ? e.minimumFractionDigits = c.length : v && v[0] === "#" ? e.maximumFractionDigits = v.length : f && m ? (e.minimumFractionDigits = f.length, e.maximumFractionDigits = f.length + m.length) : (e.minimumFractionDigits = c.length, e.maximumFractionDigits = c.length), "";
      });
      var a = i.options[0];
      a === "w" ? e = ue(ue({}, e), { trailingZeroDisplay: "stripIfInteger" }) : a && (e = ue(ue({}, e), Pl(a)));
      continue;
    }
    if (Nc.test(i.stem)) {
      e = ue(ue({}, e), Pl(i.stem));
      continue;
    }
    var o = Uc(i.stem);
    o && (e = ue(ue({}, e), o));
    var u = Zh(i.stem);
    u && (e = ue(ue({}, e), u));
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
function Jh(t, e) {
  for (var n = "", r = 0; r < t.length; r++) {
    var i = t.charAt(r);
    if (i === "j") {
      for (var a = 0; r + 1 < t.length && t.charAt(r + 1) === i; )
        a++, r++;
      var o = 1 + (a & 1), u = a < 2 ? 1 : 3 + (a >> 1), l = "a", c = $h(e);
      for ((c == "H" || c == "k") && (u = 0); u-- > 0; )
        n += l;
      for (; o-- > 0; )
        n = c + n;
    } else i === "J" ? n += "H" : n += i;
  }
  return n;
}
function $h(t) {
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
var $o, ev = new RegExp("^".concat(Pc.source, "*")), tv = new RegExp("".concat(Pc.source, "*$"));
function Ze(t, e) {
  return { start: t, end: e };
}
var nv = !!String.prototype.startsWith && "_a".startsWith("a", 1), rv = !!String.fromCodePoint, iv = !!Object.fromEntries, av = !!String.prototype.codePointAt, ov = !!String.prototype.trimStart, sv = !!String.prototype.trimEnd, lv = !!Number.isSafeInteger, uv = lv ? Number.isSafeInteger : function(t) {
  return typeof t == "number" && isFinite(t) && Math.floor(t) === t && Math.abs(t) <= 9007199254740991;
}, As = !0;
try {
  var cv = Bc("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  As = (($o = cv.exec("a")) === null || $o === void 0 ? void 0 : $o[0]) === "a";
} catch {
  As = !1;
}
var Hl = nv ? (
  // Native
  function(e, n, r) {
    return e.startsWith(n, r);
  }
) : (
  // For IE11
  function(e, n, r) {
    return e.slice(r, r + n.length) === n;
  }
), Cs = rv ? String.fromCodePoint : (
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
), Ul = (
  // native
  iv ? Object.fromEntries : (
    // Ponyfill
    function(e) {
      for (var n = {}, r = 0, i = e; r < i.length; r++) {
        var a = i[r], o = a[0], u = a[1];
        n[o] = u;
      }
      return n;
    }
  )
), kc = av ? (
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
), dv = ov ? (
  // Native
  function(e) {
    return e.trimStart();
  }
) : (
  // Ponyfill
  function(e) {
    return e.replace(ev, "");
  }
), fv = sv ? (
  // Native
  function(e) {
    return e.trimEnd();
  }
) : (
  // Ponyfill
  function(e) {
    return e.replace(tv, "");
  }
);
function Bc(t, e) {
  return new RegExp(t, e);
}
var xs;
if (As) {
  var kl = Bc("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  xs = function(e, n) {
    var r;
    kl.lastIndex = n;
    var i = kl.exec(e);
    return (r = i[1]) !== null && r !== void 0 ? r : "";
  };
} else
  xs = function(e, n) {
    for (var r = []; ; ) {
      var i = kc(e, n);
      if (i === void 0 || Fc(i) || gv(i))
        break;
      r.push(i), n += i >= 65536 ? 2 : 1;
    }
    return Cs.apply(void 0, r);
  };
var hv = (
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
          if (this.isEOF() || !Ts(this.char()))
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
      for (this.bump(); !this.isEOF() && mv(this.char()); )
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
      !vv(this.peek() || 0)) ? (this.bump(), "<") : null;
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
      var e = this.clonePosition(), n = this.offset(), r = xs(this.message, n), i = n + r.length;
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
            var f = fv(v.val);
            if (f.length === 0)
              return this.error(Ye.EXPECT_ARGUMENT_STYLE, Ze(this.clonePosition(), this.clonePosition()));
            var m = Ze(d, this.clonePosition());
            c = { style: f, styleLocation: m };
          }
          var h = this.tryParseArgumentClose(i);
          if (h.err)
            return h;
          var g = Ze(i, this.clonePosition());
          if (c && Hl(c == null ? void 0 : c.style, "::", 0)) {
            var b = dv(c.style.slice(2));
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
              this.locale && (y = Jh(b, this.locale));
              var f = {
                type: zi.dateTime,
                pattern: y,
                location: c.styleLocation,
                parsedOptions: this.shouldParseSkeletons ? qh(y) : {}
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
          var A = this.tryParsePluralOrSelectOptions(e, u, n, _);
          if (A.err)
            return A;
          var h = this.tryParseArgumentClose(i);
          if (h.err)
            return h;
          var L = Ze(i, this.clonePosition());
          return u === "select" ? {
            val: {
              type: vt.select,
              value: r,
              options: Ul(A.val),
              location: L
            },
            err: null
          } : {
            val: {
              type: vt.plural,
              value: r,
              options: Ul(A.val),
              offset: E,
              pluralType: u === "plural" ? "cardinal" : "ordinal",
              location: L
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
        r = Xh(e);
      } catch {
        return this.error(Ye.INVALID_NUMBER_SKELETON, n);
      }
      return {
        val: {
          type: zi.number,
          tokens: r,
          location: n,
          parsedOptions: this.shouldParseSkeletons ? Qh(r) : {}
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
      return a ? (o *= r, uv(o) ? { val: o, err: null } : this.error(n, l)) : this.error(e, l);
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
      var n = kc(this.message, e);
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
      for (; !this.isEOF() && Fc(this.char()); )
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
function vv(t) {
  return Ts(t) || t === 47;
}
function mv(t) {
  return t === 45 || t === 46 || t >= 48 && t <= 57 || t === 95 || t >= 97 && t <= 122 || t >= 65 && t <= 90 || t == 183 || t >= 192 && t <= 214 || t >= 216 && t <= 246 || t >= 248 && t <= 893 || t >= 895 && t <= 8191 || t >= 8204 && t <= 8205 || t >= 8255 && t <= 8256 || t >= 8304 && t <= 8591 || t >= 11264 && t <= 12271 || t >= 12289 && t <= 55295 || t >= 63744 && t <= 64975 || t >= 65008 && t <= 65533 || t >= 65536 && t <= 983039;
}
function Fc(t) {
  return t >= 9 && t <= 13 || t === 32 || t === 133 || t >= 8206 && t <= 8207 || t === 8232 || t === 8233;
}
function gv(t) {
  return t >= 33 && t <= 35 || t === 36 || t >= 37 && t <= 39 || t === 40 || t === 41 || t === 42 || t === 43 || t === 44 || t === 45 || t >= 46 && t <= 47 || t >= 58 && t <= 59 || t >= 60 && t <= 62 || t >= 63 && t <= 64 || t === 91 || t === 92 || t === 93 || t === 94 || t === 96 || t === 123 || t === 124 || t === 125 || t === 126 || t === 161 || t >= 162 && t <= 165 || t === 166 || t === 167 || t === 169 || t === 171 || t === 172 || t === 174 || t === 176 || t === 177 || t === 182 || t === 187 || t === 191 || t === 215 || t === 247 || t >= 8208 && t <= 8213 || t >= 8214 && t <= 8215 || t === 8216 || t === 8217 || t === 8218 || t >= 8219 && t <= 8220 || t === 8221 || t === 8222 || t === 8223 || t >= 8224 && t <= 8231 || t >= 8240 && t <= 8248 || t === 8249 || t === 8250 || t >= 8251 && t <= 8254 || t >= 8257 && t <= 8259 || t === 8260 || t === 8261 || t === 8262 || t >= 8263 && t <= 8273 || t === 8274 || t === 8275 || t >= 8277 && t <= 8286 || t >= 8592 && t <= 8596 || t >= 8597 && t <= 8601 || t >= 8602 && t <= 8603 || t >= 8604 && t <= 8607 || t === 8608 || t >= 8609 && t <= 8610 || t === 8611 || t >= 8612 && t <= 8613 || t === 8614 || t >= 8615 && t <= 8621 || t === 8622 || t >= 8623 && t <= 8653 || t >= 8654 && t <= 8655 || t >= 8656 && t <= 8657 || t === 8658 || t === 8659 || t === 8660 || t >= 8661 && t <= 8691 || t >= 8692 && t <= 8959 || t >= 8960 && t <= 8967 || t === 8968 || t === 8969 || t === 8970 || t === 8971 || t >= 8972 && t <= 8991 || t >= 8992 && t <= 8993 || t >= 8994 && t <= 9e3 || t === 9001 || t === 9002 || t >= 9003 && t <= 9083 || t === 9084 || t >= 9085 && t <= 9114 || t >= 9115 && t <= 9139 || t >= 9140 && t <= 9179 || t >= 9180 && t <= 9185 || t >= 9186 && t <= 9254 || t >= 9255 && t <= 9279 || t >= 9280 && t <= 9290 || t >= 9291 && t <= 9311 || t >= 9472 && t <= 9654 || t === 9655 || t >= 9656 && t <= 9664 || t === 9665 || t >= 9666 && t <= 9719 || t >= 9720 && t <= 9727 || t >= 9728 && t <= 9838 || t === 9839 || t >= 9840 && t <= 10087 || t === 10088 || t === 10089 || t === 10090 || t === 10091 || t === 10092 || t === 10093 || t === 10094 || t === 10095 || t === 10096 || t === 10097 || t === 10098 || t === 10099 || t === 10100 || t === 10101 || t >= 10132 && t <= 10175 || t >= 10176 && t <= 10180 || t === 10181 || t === 10182 || t >= 10183 && t <= 10213 || t === 10214 || t === 10215 || t === 10216 || t === 10217 || t === 10218 || t === 10219 || t === 10220 || t === 10221 || t === 10222 || t === 10223 || t >= 10224 && t <= 10239 || t >= 10240 && t <= 10495 || t >= 10496 && t <= 10626 || t === 10627 || t === 10628 || t === 10629 || t === 10630 || t === 10631 || t === 10632 || t === 10633 || t === 10634 || t === 10635 || t === 10636 || t === 10637 || t === 10638 || t === 10639 || t === 10640 || t === 10641 || t === 10642 || t === 10643 || t === 10644 || t === 10645 || t === 10646 || t === 10647 || t === 10648 || t >= 10649 && t <= 10711 || t === 10712 || t === 10713 || t === 10714 || t === 10715 || t >= 10716 && t <= 10747 || t === 10748 || t === 10749 || t >= 10750 && t <= 11007 || t >= 11008 && t <= 11055 || t >= 11056 && t <= 11076 || t >= 11077 && t <= 11078 || t >= 11079 && t <= 11084 || t >= 11085 && t <= 11123 || t >= 11124 && t <= 11125 || t >= 11126 && t <= 11157 || t === 11158 || t >= 11159 && t <= 11263 || t >= 11776 && t <= 11777 || t === 11778 || t === 11779 || t === 11780 || t === 11781 || t >= 11782 && t <= 11784 || t === 11785 || t === 11786 || t === 11787 || t === 11788 || t === 11789 || t >= 11790 && t <= 11798 || t === 11799 || t >= 11800 && t <= 11801 || t === 11802 || t === 11803 || t === 11804 || t === 11805 || t >= 11806 && t <= 11807 || t === 11808 || t === 11809 || t === 11810 || t === 11811 || t === 11812 || t === 11813 || t === 11814 || t === 11815 || t === 11816 || t === 11817 || t >= 11818 && t <= 11822 || t === 11823 || t >= 11824 && t <= 11833 || t >= 11834 && t <= 11835 || t >= 11836 && t <= 11839 || t === 11840 || t === 11841 || t === 11842 || t >= 11843 && t <= 11855 || t >= 11856 && t <= 11857 || t === 11858 || t >= 11859 && t <= 11903 || t >= 12289 && t <= 12291 || t === 12296 || t === 12297 || t === 12298 || t === 12299 || t === 12300 || t === 12301 || t === 12302 || t === 12303 || t === 12304 || t === 12305 || t >= 12306 && t <= 12307 || t === 12308 || t === 12309 || t === 12310 || t === 12311 || t === 12312 || t === 12313 || t === 12314 || t === 12315 || t === 12316 || t === 12317 || t >= 12318 && t <= 12319 || t === 12320 || t === 12336 || t === 64830 || t === 64831 || t >= 65093 && t <= 65094;
}
function ws(t) {
  t.forEach(function(e) {
    if (delete e.location, Oc(e) || Rc(e))
      for (var n in e.options)
        delete e.options[n].location, ws(e.options[n].value);
    else Tc(e) && Dc(e.style) || (wc(e) || Lc(e)) && Ss(e.style) ? delete e.style.location : Mc(e) && ws(e.children);
  });
}
function pv(t, e) {
  e === void 0 && (e = {}), e = ue({ shouldParseSkeletons: !0, requiresOtherClause: !0 }, e);
  var n = new hv(t, e).parse();
  if (n.err) {
    var r = SyntaxError(Ye[n.err.kind]);
    throw r.location = n.err.location, r.originalMessage = n.err.message, r;
  }
  return e != null && e.captureLocation || ws(n.val), n.val;
}
var Xi;
(function(t) {
  t.MISSING_VALUE = "MISSING_VALUE", t.INVALID_VALUE = "INVALID_VALUE", t.MISSING_INTL_API = "MISSING_INTL_API";
})(Xi || (Xi = {}));
var ko = (
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
), Bl = (
  /** @class */
  function(t) {
    Ve(e, t);
    function e(n, r, i, a) {
      return t.call(this, 'Invalid values for "'.concat(n, '": "').concat(r, '". Options are "').concat(Object.keys(i).join('", "'), '"'), Xi.INVALID_VALUE, a) || this;
    }
    return e;
  }(ko)
), bv = (
  /** @class */
  function(t) {
    Ve(e, t);
    function e(n, r, i) {
      return t.call(this, 'Value for "'.concat(n, '" must be of type ').concat(r), Xi.INVALID_VALUE, i) || this;
    }
    return e;
  }(ko)
), _v = (
  /** @class */
  function(t) {
    Ve(e, t);
    function e(n, r) {
      return t.call(this, 'The intl string context variable "'.concat(n, '" was not provided to the string "').concat(r, '"'), Xi.MISSING_VALUE, r) || this;
    }
    return e;
  }(ko)
), Zt;
(function(t) {
  t[t.literal = 0] = "literal", t[t.object = 1] = "object";
})(Zt || (Zt = {}));
function yv(t) {
  return t.length < 2 ? t : t.reduce(function(e, n) {
    var r = e[e.length - 1];
    return !r || r.type !== Zt.literal || n.type !== Zt.literal ? e.push(n) : r.value += n.value, e;
  }, []);
}
function Iv(t) {
  return typeof t == "function";
}
function io(t, e, n, r, i, a, o) {
  if (t.length === 1 && Ml(t[0]))
    return [
      {
        type: Zt.literal,
        value: t[0].value
      }
    ];
  for (var u = [], l = 0, c = t; l < c.length; l++) {
    var d = c[l];
    if (Ml(d)) {
      u.push({
        type: Zt.literal,
        value: d.value
      });
      continue;
    }
    if (Gh(d)) {
      typeof a == "number" && u.push({
        type: Zt.literal,
        value: n.getNumberFormat(e).format(a)
      });
      continue;
    }
    var v = d.value;
    if (!(i && v in i))
      throw new _v(v, o);
    var f = i[v];
    if (jh(d)) {
      (!f || typeof f == "string" || typeof f == "number") && (f = typeof f == "string" || typeof f == "number" ? String(f) : ""), u.push({
        type: typeof f == "string" ? Zt.literal : Zt.object,
        value: f
      });
      continue;
    }
    if (wc(d)) {
      var m = typeof d.style == "string" ? r.date[d.style] : Ss(d.style) ? d.style.parsedOptions : void 0;
      u.push({
        type: Zt.literal,
        value: n.getDateTimeFormat(e, m).format(f)
      });
      continue;
    }
    if (Lc(d)) {
      var m = typeof d.style == "string" ? r.time[d.style] : Ss(d.style) ? d.style.parsedOptions : r.time.medium;
      u.push({
        type: Zt.literal,
        value: n.getDateTimeFormat(e, m).format(f)
      });
      continue;
    }
    if (Tc(d)) {
      var m = typeof d.style == "string" ? r.number[d.style] : Dc(d.style) ? d.style.parsedOptions : void 0;
      m && m.scale && (f = f * (m.scale || 1)), u.push({
        type: Zt.literal,
        value: n.getNumberFormat(e, m).format(f)
      });
      continue;
    }
    if (Mc(d)) {
      var h = d.children, g = d.value, b = i[g];
      if (!Iv(b))
        throw new bv(g, "function", o);
      var y = io(h, e, n, r, i, a), S = b(y.map(function(E) {
        return E.value;
      }));
      Array.isArray(S) || (S = [S]), u.push.apply(u, S.map(function(E) {
        return {
          type: typeof E == "string" ? Zt.literal : Zt.object,
          value: E
        };
      }));
    }
    if (Oc(d)) {
      var I = d.options[f] || d.options.other;
      if (!I)
        throw new Bl(d.value, f, Object.keys(d.options), o);
      u.push.apply(u, io(I.value, e, n, r, i));
      continue;
    }
    if (Rc(d)) {
      var I = d.options["=".concat(f)];
      if (!I) {
        if (!Intl.PluralRules)
          throw new ko(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`, Xi.MISSING_INTL_API, o);
        var _ = n.getPluralRules(e, { type: d.pluralType }).select(f - (d.offset || 0));
        I = d.options[_] || d.options.other;
      }
      if (!I)
        throw new Bl(d.value, f, Object.keys(d.options), o);
      u.push.apply(u, io(I.value, e, n, r, i, f - (d.offset || 0)));
      continue;
    }
  }
  return yv(u);
}
function Ev(t, e) {
  return e ? ue(ue(ue({}, t || {}), e || {}), Object.keys(t).reduce(function(n, r) {
    return n[r] = ue(ue({}, t[r]), e[r] || {}), n;
  }, {})) : t;
}
function Sv(t, e) {
  return e ? Object.keys(t).reduce(function(n, r) {
    return n[r] = Ev(t[r], e[r]), n;
  }, ue({}, t)) : t;
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
function Av(t) {
  return t === void 0 && (t = {
    number: {},
    dateTime: {},
    pluralRules: {}
  }), {
    getNumberFormat: Qo(function() {
      for (var e, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((e = Intl.NumberFormat).bind.apply(e, $n([void 0], n, !1)))();
    }, {
      cache: es(t.number),
      strategy: Jo.variadic
    }),
    getDateTimeFormat: Qo(function() {
      for (var e, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((e = Intl.DateTimeFormat).bind.apply(e, $n([void 0], n, !1)))();
    }, {
      cache: es(t.dateTime),
      strategy: Jo.variadic
    }),
    getPluralRules: Qo(function() {
      for (var e, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((e = Intl.PluralRules).bind.apply(e, $n([void 0], n, !1)))();
    }, {
      cache: es(t.pluralRules),
      strategy: Jo.variadic
    })
  };
}
var Vc = (
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
        var u = Mh(o, ["formatters"]);
        this.ast = t.__parse(e, ue(ue({}, u), { locale: this.resolvedLocale }));
      } else
        this.ast = e;
      if (!Array.isArray(this.ast))
        throw new TypeError("A message must be provided as a String or AST.");
      this.formats = Sv(t.formats, r), this.formatters = i && i.formatters || Av(this.formatterCache);
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
    }, t.__parse = pv, t.formats = {
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
function Cv(t, e) {
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
const Lr = {}, xv = (t, e, n) => n && (e in Lr || (Lr[e] = {}), t in Lr[e] || (Lr[e][t] = n), n), jc = (t, e) => {
  if (e == null)
    return;
  if (e in Lr && t in Lr[e])
    return Lr[e][t];
  const n = Ha(e);
  for (let r = 0; r < n.length; r++) {
    const i = n[r], a = wv(i, t);
    if (a)
      return xv(t, e, a);
  }
};
let Qs;
const Na = en({});
function Tv(t) {
  return Qs[t] || null;
}
function Gc(t) {
  return t in Qs;
}
function wv(t, e) {
  if (!Gc(t))
    return null;
  const n = Tv(t);
  return Cv(n, e);
}
function Lv(t) {
  if (t == null)
    return;
  const e = Ha(t);
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    if (Gc(r))
      return r;
  }
}
function Wc(t, ...e) {
  delete Lr[t], Na.update((n) => (n[t] = Rh.all([n[t] || {}, ...e]), n));
}
Ji(
  [Na],
  ([t]) => Object.keys(t)
);
Na.subscribe((t) => Qs = t);
const ao = {};
function Ov(t, e) {
  ao[t].delete(e), ao[t].size === 0 && delete ao[t];
}
function qc(t) {
  return ao[t];
}
function Rv(t) {
  return Ha(t).map((e) => {
    const n = qc(e);
    return [e, n ? [...n] : []];
  }).filter(([, e]) => e.length > 0);
}
function mo(t) {
  return t == null ? !1 : Ha(t).some(
    (e) => {
      var n;
      return (n = qc(e)) == null ? void 0 : n.size;
    }
  );
}
function Mv(t, e) {
  return Promise.all(
    e.map((r) => (Ov(t, r), r().then((i) => i.default || i)))
  ).then((r) => Wc(t, ...r));
}
const ua = {};
function zc(t) {
  if (!mo(t))
    return t in ua ? ua[t] : Promise.resolve();
  const e = Rv(t);
  return ua[t] = Promise.all(
    e.map(
      ([n, r]) => Mv(n, r)
    )
  ).then(() => {
    if (mo(t))
      return zc(t);
    delete ua[t];
  }), ua[t];
}
var Fl = Object.getOwnPropertySymbols, Dv = Object.prototype.hasOwnProperty, Pv = Object.prototype.propertyIsEnumerable, Nv = (t, e) => {
  var n = {};
  for (var r in t)
    Dv.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && Fl)
    for (var r of Fl(t))
      e.indexOf(r) < 0 && Pv.call(t, r) && (n[r] = t[r]);
  return n;
};
const Hv = {
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
function Uv({ locale: t, id: e }) {
  console.warn(
    `[svelte-i18n] The message "${e}" was not found in "${Ha(
      t
    ).join('", "')}".${mo(Fr()) ? `

Note: there are at least one loader still registered to this locale that wasn't executed.` : ""}`
  );
}
const kv = {
  fallbackLocale: null,
  loadingDelay: 200,
  formats: Hv,
  warnOnMissingMessages: !0,
  handleMissingMessage: void 0,
  ignoreTag: !0
}, pa = kv;
function Ki() {
  return pa;
}
function Bv(t) {
  const e = t, { formats: n } = e, r = Nv(e, ["formats"]);
  let i = t.fallbackLocale;
  if (t.initialLocale)
    try {
      Vc.resolveLocale(t.initialLocale) && (i = t.initialLocale);
    } catch {
      console.warn(
        `[svelte-i18n] The initial locale "${t.initialLocale}" is not a valid locale.`
      );
    }
  return r.warnOnMissingMessages && (delete r.warnOnMissingMessages, r.handleMissingMessage == null ? r.handleMissingMessage = Uv : console.warn(
    '[svelte-i18n] The "warnOnMissingMessages" option is deprecated. Please use the "handleMissingMessage" option instead.'
  )), Object.assign(pa, r, { initialLocale: i }), n && ("number" in n && Object.assign(pa.formats.number, n.number), "date" in n && Object.assign(pa.formats.date, n.date), "time" in n && Object.assign(pa.formats.time, n.time)), gi.set(i);
}
const ts = en(!1);
var Fv = Object.defineProperty, Vv = Object.defineProperties, jv = Object.getOwnPropertyDescriptors, Vl = Object.getOwnPropertySymbols, Gv = Object.prototype.hasOwnProperty, Wv = Object.prototype.propertyIsEnumerable, jl = (t, e, n) => e in t ? Fv(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n, qv = (t, e) => {
  for (var n in e || (e = {}))
    Gv.call(e, n) && jl(t, n, e[n]);
  if (Vl)
    for (var n of Vl(e))
      Wv.call(e, n) && jl(t, n, e[n]);
  return t;
}, zv = (t, e) => Vv(t, jv(e));
let Ls;
const go = en(null);
function Gl(t) {
  return t.split("-").map((e, n, r) => r.slice(0, n + 1).join("-")).reverse();
}
function Ha(t, e = Ki().fallbackLocale) {
  const n = Gl(t);
  return e ? [.../* @__PURE__ */ new Set([...n, ...Gl(e)])] : n;
}
function Fr() {
  return Ls ?? void 0;
}
go.subscribe((t) => {
  Ls = t ?? void 0, typeof window < "u" && t != null && document.documentElement.setAttribute("lang", t);
});
const Xv = (t) => {
  if (t && Lv(t) && mo(t)) {
    const { loadingDelay: e } = Ki();
    let n;
    return typeof window < "u" && Fr() != null && e ? n = window.setTimeout(
      () => ts.set(!0),
      e
    ) : ts.set(!0), zc(t).then(() => {
      go.set(t);
    }).finally(() => {
      clearTimeout(n), ts.set(!1);
    });
  }
  return go.set(t);
}, gi = zv(qv({}, go), {
  set: Xv
}), Kv = () => typeof window > "u" ? null : window.navigator.language || window.navigator.languages[0], Bo = (t) => {
  const e = /* @__PURE__ */ Object.create(null);
  return (r) => {
    const i = JSON.stringify(r);
    return i in e ? e[i] : e[i] = t(r);
  };
};
var Yv = Object.defineProperty, po = Object.getOwnPropertySymbols, Xc = Object.prototype.hasOwnProperty, Kc = Object.prototype.propertyIsEnumerable, Wl = (t, e, n) => e in t ? Yv(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n, Js = (t, e) => {
  for (var n in e || (e = {}))
    Xc.call(e, n) && Wl(t, n, e[n]);
  if (po)
    for (var n of po(e))
      Kc.call(e, n) && Wl(t, n, e[n]);
  return t;
}, $i = (t, e) => {
  var n = {};
  for (var r in t)
    Xc.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && po)
    for (var r of po(t))
      e.indexOf(r) < 0 && Kc.call(t, r) && (n[r] = t[r]);
  return n;
};
const Aa = (t, e) => {
  const { formats: n } = Ki();
  if (t in n && e in n[t])
    return n[t][e];
  throw new Error(`[svelte-i18n] Unknown "${e}" ${t} format.`);
}, Zv = Bo(
  (t) => {
    var e = t, { locale: n, format: r } = e, i = $i(e, ["locale", "format"]);
    if (n == null)
      throw new Error('[svelte-i18n] A "locale" must be set to format numbers');
    return r && (i = Aa("number", r)), new Intl.NumberFormat(n, i);
  }
), Qv = Bo(
  (t) => {
    var e = t, { locale: n, format: r } = e, i = $i(e, ["locale", "format"]);
    if (n == null)
      throw new Error('[svelte-i18n] A "locale" must be set to format dates');
    return r ? i = Aa("date", r) : Object.keys(i).length === 0 && (i = Aa("date", "short")), new Intl.DateTimeFormat(n, i);
  }
), Jv = Bo(
  (t) => {
    var e = t, { locale: n, format: r } = e, i = $i(e, ["locale", "format"]);
    if (n == null)
      throw new Error(
        '[svelte-i18n] A "locale" must be set to format time values'
      );
    return r ? i = Aa("time", r) : Object.keys(i).length === 0 && (i = Aa("time", "short")), new Intl.DateTimeFormat(n, i);
  }
), $v = (t = {}) => {
  var e = t, {
    locale: n = Fr()
  } = e, r = $i(e, [
    "locale"
  ]);
  return Zv(Js({ locale: n }, r));
}, em = (t = {}) => {
  var e = t, {
    locale: n = Fr()
  } = e, r = $i(e, [
    "locale"
  ]);
  return Qv(Js({ locale: n }, r));
}, tm = (t = {}) => {
  var e = t, {
    locale: n = Fr()
  } = e, r = $i(e, [
    "locale"
  ]);
  return Jv(Js({ locale: n }, r));
}, nm = Bo(
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  (t, e = Fr()) => new Vc(t, e, Ki().formats, {
    ignoreTag: Ki().ignoreTag
  })
), rm = (t, e = {}) => {
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
  let d = jc(t, l);
  if (!d)
    d = (a = (i = (r = (n = Ki()).handleMissingMessage) == null ? void 0 : r.call(n, { locale: l, id: t, defaultValue: c })) != null ? i : c) != null ? a : t;
  else if (typeof d != "string")
    return console.warn(
      `[svelte-i18n] Message with id "${t}" must be of type "string", found: "${typeof d}". Gettin its value through the "$format" method is deprecated; use the "json" method instead.`
    ), d;
  if (!u)
    return d;
  let v = d;
  try {
    v = nm(d, l).format(u);
  } catch (f) {
    f instanceof Error && console.warn(
      `[svelte-i18n] Message "${t}" has syntax error:`,
      f.message
    );
  }
  return v;
}, im = (t, e) => tm(e).format(t), am = (t, e) => em(e).format(t), om = (t, e) => $v(e).format(t), sm = (t, e = Fr()) => jc(t, e), lm = Ji([gi, Na], () => rm);
Ji([gi], () => im);
Ji([gi], () => am);
Ji([gi], () => om);
Ji([gi, Na], () => sm);
function um(t, e) {
  Object.entries(t).forEach(([a, o]) => {
    Wc(a, o);
  });
  const n = localStorage.getItem("language"), r = "en", i = n ?? Kv();
  console.log("Initial: Setting the language to", i), Bv({
    fallbackLocale: r,
    initialLocale: i
  }), window.addEventListener("oscd-language-changed", (a) => {
    const o = a;
    if (!o.detail.language) {
      console.error("No translations for language");
      return;
    }
    console.log("Updating the language to", o.detail.language), gi.set(o.detail.language);
  });
}
const cm = "Suche", dm = "Filtertypen", fm = "Filter hinzufügen", hm = "Keine Ressourcen gefunden.", vm = "Loading...", mm = {
  search: cm,
  filter_types: dm,
  add_filter: fm,
  no_resources_found: hm,
  loading: vm
}, gm = "Search", pm = "Filter Types", bm = "Add Filter", _m = "No resources found.", ym = "Loading...", Im = {
  search: gm,
  filter_types: pm,
  add_filter: bm,
  no_resources_found: _m,
  loading: ym
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
function tr(t, e) {
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
class ea {
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
    n in a || (a[n] = /* @__PURE__ */ new Map()), a[n].set(r, Nf(e, n, r, i));
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
function q(t, e) {
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
function Em(t, e) {
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
function Sm(t, e, n) {
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
function Am(t) {
  return t === void 0 && (t = window), Cm(t) ? { passive: !0 } : !1;
}
function Cm(t) {
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
const Yc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  applyPassive: Am
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
function xm(t, e) {
  if (t.closest)
    return t.closest(e);
  for (var n = t; n; ) {
    if (Zc(n, e))
      return n;
    n = n.parentElement;
  }
  return null;
}
function Zc(t, e) {
  var n = t.matches || t.webkitMatchesSelector || t.msMatchesSelector;
  return n.call(t, e);
}
function Tm(t) {
  var e = t;
  if (e.offsetParent !== null)
    return e.scrollWidth;
  var n = e.cloneNode(!0);
  n.style.setProperty("position", "absolute"), n.style.setProperty("transform", "translate(-9999px, -9999px)"), document.documentElement.appendChild(n);
  var r = n.scrollWidth;
  return document.documentElement.removeChild(n), r;
}
const Ua = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  closest: xm,
  estimateScrollWidth: Tm,
  matches: Zc
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
var wm = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  BG_FOCUSED: "mdc-ripple-upgraded--background-focused",
  FG_ACTIVATION: "mdc-ripple-upgraded--foreground-activation",
  FG_DEACTIVATION: "mdc-ripple-upgraded--foreground-deactivation",
  ROOT: "mdc-ripple-upgraded",
  UNBOUNDED: "mdc-ripple-upgraded--unbounded"
}, Lm = {
  VAR_FG_SCALE: "--mdc-ripple-fg-scale",
  VAR_FG_SIZE: "--mdc-ripple-fg-size",
  VAR_FG_TRANSLATE_END: "--mdc-ripple-fg-translate-end",
  VAR_FG_TRANSLATE_START: "--mdc-ripple-fg-translate-start",
  VAR_LEFT: "--mdc-ripple-left",
  VAR_TOP: "--mdc-ripple-top"
}, ql = {
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
var zl = [
  "touchstart",
  "pointerdown",
  "mousedown",
  "keydown"
], Xl = [
  "touchend",
  "pointerup",
  "mouseup",
  "contextmenu"
], Xa = [], Om = (
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
        return wm;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Lm;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return ql;
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
          for (var a = Ht(zl), o = a.next(); !o.done; o = a.next()) {
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
          for (var a = Ht(Xl), o = a.next(); !o.done; o = a.next()) {
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
        for (var i = Ht(zl), a = i.next(); !a.done; a = i.next()) {
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
        for (var i = Ht(Xl), a = i.next(); !a.done; a = i.next()) {
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
      i ? a = Sm(r, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect()) : a = {
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
      }, ql.FG_DEACTIVATION_MS));
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
}, an = /* @__PURE__ */ new Set();
an.add(Be.BACKSPACE);
an.add(Be.ENTER);
an.add(Be.SPACEBAR);
an.add(Be.PAGE_UP);
an.add(Be.PAGE_DOWN);
an.add(Be.END);
an.add(Be.HOME);
an.add(Be.ARROW_LEFT);
an.add(Be.ARROW_UP);
an.add(Be.ARROW_RIGHT);
an.add(Be.ARROW_DOWN);
an.add(Be.DELETE);
an.add(Be.ESCAPE);
an.add(Be.TAB);
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
}, on = /* @__PURE__ */ new Map();
on.set(mn.BACKSPACE, Be.BACKSPACE);
on.set(mn.ENTER, Be.ENTER);
on.set(mn.SPACEBAR, Be.SPACEBAR);
on.set(mn.PAGE_UP, Be.PAGE_UP);
on.set(mn.PAGE_DOWN, Be.PAGE_DOWN);
on.set(mn.END, Be.END);
on.set(mn.HOME, Be.HOME);
on.set(mn.ARROW_LEFT, Be.ARROW_LEFT);
on.set(mn.ARROW_UP, Be.ARROW_UP);
on.set(mn.ARROW_RIGHT, Be.ARROW_RIGHT);
on.set(mn.ARROW_DOWN, Be.ARROW_DOWN);
on.set(mn.DELETE, Be.DELETE);
on.set(mn.ESCAPE, Be.ESCAPE);
on.set(mn.TAB, Be.TAB);
var Vr = /* @__PURE__ */ new Set();
Vr.add(Be.PAGE_UP);
Vr.add(Be.PAGE_DOWN);
Vr.add(Be.END);
Vr.add(Be.HOME);
Vr.add(Be.ARROW_LEFT);
Vr.add(Be.ARROW_UP);
Vr.add(Be.ARROW_RIGHT);
Vr.add(Be.ARROW_DOWN);
function Ct(t) {
  var e = t.key;
  if (an.has(e))
    return e;
  var n = on.get(t.keyCode);
  return n || Be.UNKNOWN;
}
const { applyPassive: Kl } = Yc, { matches: Rm } = Ua;
function Xt(t, { ripple: e = !0, surface: n = !1, unbounded: r = !1, disabled: i = !1, color: a, active: o, rippleElement: u, eventTarget: l, activeTarget: c, addClass: d = (h) => t.classList.add(h), removeClass: v = (h) => t.classList.remove(h), addStyle: f = (h, g) => t.style.setProperty(h, g), initPromise: m = Promise.resolve() } = {}) {
  let h, g = new ea(), b = me("SMUI:addLayoutListener"), y, S = o, I = l, _ = c;
  function E() {
    n ? (d("mdc-ripple-surface"), a === "primary" ? (d("smui-ripple-surface--primary"), v("smui-ripple-surface--secondary")) : a === "secondary" ? (v("smui-ripple-surface--primary"), d("smui-ripple-surface--secondary")) : (v("smui-ripple-surface--primary"), v("smui-ripple-surface--secondary"))) : (v("mdc-ripple-surface"), v("smui-ripple-surface--primary"), v("smui-ripple-surface--secondary")), h && S !== o && (S = o, o ? h.activate() : o === !1 && h.deactivate()), e && !h ? (h = new Om({
      addClass: d,
      browserSupportsCssVars: () => Em(window),
      computeBoundingRect: () => (u || t).getBoundingClientRect(),
      containsEventTarget: (L) => t.contains(L),
      deregisterDocumentInteractionHandler: (L, C) => g.off(document.documentElement, L, C),
      deregisterInteractionHandler: (L, C) => g.off(l || t, L, C),
      deregisterResizeHandler: (L) => window.removeEventListener("resize", L),
      getWindowPageOffset: () => {
        var L, C;
        return {
          x: (L = window.pageXOffset) !== null && L !== void 0 ? L : window.scrollX,
          y: (C = window.pageYOffset) !== null && C !== void 0 ? C : window.scrollY
        };
      },
      isSurfaceActive: () => o ?? Rm(c || t, ":active"),
      isSurfaceDisabled: () => !!i,
      isUnbounded: () => !!r,
      registerDocumentInteractionHandler: (L, C) => {
        const T = Kl();
        g.on(document.documentElement, L, C, typeof T == "boolean" ? { capture: T } : T);
      },
      registerInteractionHandler: (L, C) => {
        const T = Kl();
        g.on(l || t, L, C, typeof T == "boolean" ? { capture: T } : T);
      },
      registerResizeHandler: (L) => g.on(window, "resize", L),
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
  E(), b && (y = b(A));
  function A() {
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
        removeClass: v,
        addStyle: f,
        initPromise: m
      } = Object.assign({ ripple: !0, surface: !1, unbounded: !1, disabled: !1, color: void 0, active: void 0, rippleElement: void 0, eventTarget: void 0, activeTarget: void 0, addClass: (C) => t.classList.add(C), removeClass: (C) => t.classList.remove(C), addStyle: (C, T) => t.style.setProperty(C, T), initPromise: Promise.resolve() }, L)), E();
    },
    destroy() {
      h && (h.destroy(), h = void 0, g.clear(), v("mdc-ripple-surface"), v("smui-ripple-surface--primary"), v("smui-ripple-surface--secondary")), y && y();
    }
  };
}
function Mm(t, e) {
  Ce(e, !0);
  let n = p(e, "use", 19, () => []), r = p(e, "class", 3, ""), i = p(e, "component", 3, jr), a = p(e, "tag", 3, "span"), o = /* @__PURE__ */ qe(e, [
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
              Se(_, () => e.children ?? pe), O(y, I);
            },
            $$slots: { default: !0 }
          }
        )),
        (y) => u = y,
        () => u
      );
    });
  }
  return O(t, f), xe(v);
}
function Os(t, e) {
  Ce(e, !0);
  let n = p(e, "use", 19, () => []), r = p(e, "class", 3, ""), i = p(e, "on", 3, !1), a = p(e, "component", 3, jr), o = p(e, "tag", 3, "i"), u = /* @__PURE__ */ qe(e, [
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
  const c = /* @__PURE__ */ ge(() => o() === "svg" || a() === Nm), d = me("SMUI:icon:context");
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
              Se(E, () => e.children ?? pe), O(S, _);
            },
            $$slots: { default: !0 }
          }
        )),
        (S) => l = S,
        () => l
      );
    });
  }
  return O(t, m), xe(f);
}
var Dm = /* @__PURE__ */ rn("<svg><!></svg>");
function jr(t, e) {
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
      var h = Dm();
      ke(h, () => ({ ...i }));
      var g = se(h);
      Se(g, () => e.children ?? pe), Ee(h, (b) => o = b, () => o), Me(h, (b, y) => q == null ? void 0 : q(b, y), n), O(m, h);
    }, f = (m) => {
      var h = ne(), g = Z(h);
      {
        var b = (S) => {
          var I = ne(), _ = Z(I);
          El(_, r, !1, (E, A) => {
            Ee(E, (L) => o = L, () => o), Me(E, (L, C) => q == null ? void 0 : q(L, C), n), ke(E, () => ({ ...i }));
          }), O(S, I);
        }, y = (S) => {
          var I = ne(), _ = Z(I);
          El(_, r, !1, (E, A) => {
            Ee(E, (T) => o = T, () => o), Me(E, (T, k) => q == null ? void 0 : q(T, k), n), ke(E, () => ({ ...i }));
            var L = ne(), C = Z(L);
            Se(C, () => e.children ?? pe), O(A, L);
          }), O(S, I);
        };
        ae(
          g,
          (S) => {
            s(a) ? S(b) : S(y, !1);
          },
          !0
        );
      }
      O(m, h);
    };
    ae(d, (m) => {
      r() === "svg" ? m(v) : m(f, !1);
    });
  }
  return O(t, c), xe(l);
}
var Pm = /* @__PURE__ */ rn("<svg><!></svg>");
function Nm(t, e) {
  Ce(e, !0), console && console.warn && console.warn('The @smui/common Svg component is deprecated. You can use `tag="svg"` now.');
  let n = p(e, "use", 19, () => []), r = /* @__PURE__ */ qe(e, ["$$slots", "$$events", "$$legacy", "use", "children"]), i;
  function a() {
    return i;
  }
  var o = { getElement: a }, u = Pm();
  ke(u, () => ({ ...r }));
  var l = se(u);
  return Se(l, () => e.children ?? pe), Ee(u, (c) => i = c, () => i), Me(u, (c, d) => q == null ? void 0 : q(c, d), n), O(t, u), xe(o);
}
function Ka(t, e) {
  Ce(e, !0);
  const [n, r] = br(), i = en(e.value);
  oe(e.key, i), Te(() => {
    di(i, e.value);
  }), Dn(() => {
    i.set(void 0);
  });
  var a = ne(), o = Z(a);
  Se(o, () => e.children ?? pe), O(t, a), xe(), r();
}
var Hm = /* @__PURE__ */ de('<div class="mdc-button__touch"></div>'), Um = /* @__PURE__ */ de('<div class="mdc-button__ripple"></div> <!><!>', 1);
function Qc(t, e) {
  Ce(e, !0);
  let n = p(e, "use", 19, () => []), r = p(e, "class", 3, ""), i = p(e, "style", 3, ""), a = p(e, "ripple", 3, !0), o = p(e, "color", 3, "primary"), u = p(e, "variant", 3, "text"), l = p(e, "touch", 3, !1), c = p(e, "action", 3, "close"), d = p(e, "defaultAction", 3, !1), v = p(e, "secondary", 3, !1), f = p(e, "component", 3, jr), m = p(e, "tag", 19, () => e.href == null ? "button" : "a"), h = /* @__PURE__ */ qe(e, [
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
  let A = e.disabled;
  Te(() => {
    if (A !== e.disabled) {
      if (g) {
        const x = K();
        "blur" in x && x.blur();
      }
      A = h.disabled;
    }
  }), oe("SMUI:label:context", "button"), oe("SMUI:icon:context", "button");
  function L(x) {
    b[x] || (b[x] = !0);
  }
  function C(x) {
    (!(x in b) || b[x]) && (b[x] = !1);
  }
  function T(x, M) {
    y[x] != M && (M === "" || M == null ? delete y[x] : y[x] = M);
  }
  function k() {
    S === "banner" && Je(K(), v() ? "SMUIBannerButtonSecondaryActionClick" : "SMUIBannerButtonPrimaryActionClick");
  }
  function K() {
    return g.getElement();
  }
  var j = { getElement: K }, D = ne(), w = Z(D);
  {
    let x = /* @__PURE__ */ ge(() => [
      [
        Xt,
        {
          ripple: a(),
          unbounded: !1,
          color: o(),
          disabled: !!e.disabled,
          addClass: L,
          removeClass: C,
          addStyle: T
        }
      ],
      ...n()
    ]), M = /* @__PURE__ */ ge(() => De({
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
    })), N = /* @__PURE__ */ ge(() => Object.entries(y).map(([W, J]) => `${W}: ${J};`).concat([i()]).join(" "));
    pr(w, f, (W, J) => {
      Ee(
        J(W, nt(
          {
            get tag() {
              return m();
            },
            get use() {
              return s(x);
            },
            get class() {
              return s(M);
            },
            get style() {
              return s(N);
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
              k(), (R = e.onclick) == null || R.call(e, H);
            },
            children: (H, R) => {
              var G = Um(), Ae = Ie(Z(G), 2);
              Se(Ae, () => e.children ?? pe);
              var be = Ie(Ae);
              {
                var F = (V) => {
                  var B = Hm();
                  O(V, B);
                };
                ae(be, (V) => {
                  l() && V(F);
                });
              }
              O(H, G);
            },
            $$slots: { default: !0 }
          }
        )),
        (H) => g = H,
        () => g
      );
    });
  }
  return O(t, D), xe(j);
}
function km(t, e) {
  Ce(e, !0);
  let n = p(e, "callback", 3, () => {
  }), r = p(e, "disabled", 3, !1), i = p(e, "variant", 3, "default"), a = p(e, "isAbortAction", 3, !1), o = p(e, "backgroundColor", 3, void 0), u = p(e, "ariaLabel", 3, void 0);
  {
    let l = /* @__PURE__ */ ge(() => a() ? "background-color: #ff3e00;" : "background-color: " + o());
    Qc(t, {
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
        var v = ne(), f = Z(v);
        Se(f, () => e.children ?? pe), O(c, v);
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
var Bm = (
  /** @class */
  function(t) {
    Ve(e, t);
    function e(n) {
      var r = t.call(this, ue(ue({}, e.defaultAdapter), n)) || this;
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
  }(Tt)
), Fm = /* @__PURE__ */ de('<div class="mdc-icon-button__touch"></div>'), Vm = /* @__PURE__ */ de('<div class="mdc-icon-button__ripple"></div> <!><!>', 1);
function jm(t, e) {
  Ce(e, !0);
  let n = () => {
  };
  function r(R) {
    return R === n;
  }
  let i = p(e, "use", 19, () => []), a = p(e, "class", 3, ""), o = p(e, "style", 3, ""), u = p(e, "ripple", 3, !0), l = p(e, "toggle", 3, !1), c = p(e, "pressed", 15, n), d = p(e, "touch", 3, !1), v = p(e, "displayFlex", 3, !0), f = p(e, "size", 3, "normal"), m = p(e, "component", 3, jr), h = p(e, "tag", 19, () => e.href == null ? "button" : "a"), g = /* @__PURE__ */ qe(e, [
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
  ]), b, y, S = /* @__PURE__ */ ve(ce({})), I = ce({}), _ = /* @__PURE__ */ ve(ce({})), E = me("SMUI:icon-button:context"), A = me("SMUI:icon-button:aria-describedby");
  const L = /* @__PURE__ */ ge(() => {
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
  let C = !!e.disabled;
  Te(() => {
    if (C != !!e.disabled) {
      if (b) {
        const R = N();
        "blur" in R && R.blur();
      }
      C = !!e.disabled;
    }
  }), oe("SMUI:icon:context", "icon-button");
  let T = null;
  Te(() => {
    b && N() && l() !== T && (l() && !y ? (y = new Bm({
      addClass: K,
      hasClass: k,
      notifyChange: (R) => {
        M(R), Je(N(), "SMUIIconButtonToggleChange", R);
      },
      removeClass: j,
      getAttr: w,
      setAttr: x
    }), y.init()) : !l() && y && (y.destroy(), y = void 0, X(S, {}, !0), X(_, {}, !0)), T = l());
  }), Te(() => {
    y && !r(c()) && y.isOn() !== c() && y.toggle(c());
  }), Dn(() => {
    y && y.destroy();
  });
  function k(R) {
    return R in s(S) ? s(S)[R] : N().classList.contains(R);
  }
  function K(R) {
    s(S)[R] || (s(S)[R] = !0);
  }
  function j(R) {
    (!(R in s(S)) || s(S)[R]) && (s(S)[R] = !1);
  }
  function D(R, G) {
    I[R] != G && (G === "" || G == null ? delete I[R] : I[R] = G);
  }
  function w(R) {
    return R in s(_) ? s(_)[R] ?? null : N().getAttribute(R);
  }
  function x(R, G) {
    s(_)[R] !== G && (s(_)[R] = G);
  }
  function M(R) {
    c(R.isOn);
  }
  function N() {
    return b.getElement();
  }
  var W = { getElement: N }, J = ne(), H = Z(J);
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
          removeClass: j,
          addStyle: D
        }
      ],
      ...i()
    ]), G = /* @__PURE__ */ ge(() => De({
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
    })), Ae = /* @__PURE__ */ ge(() => Object.entries(I).map(([V, B]) => `${V}: ${B};`).concat([o()]).join(" ")), be = /* @__PURE__ */ ge(() => r(c()) ? null : c() ? "true" : "false"), F = /* @__PURE__ */ ge(() => c() ? e.ariaLabelOn : e.ariaLabelOff);
    pr(H, m, (V, B) => {
      Ee(
        B(V, nt(
          {
            get tag() {
              return h();
            },
            get use() {
              return s(R);
            },
            get class() {
              return s(G);
            },
            get style() {
              return s(Ae);
            },
            get "aria-pressed"() {
              return s(be);
            },
            get "aria-label"() {
              return s(F);
            },
            get "data-aria-label-on"() {
              return e.ariaLabelOn;
            },
            get "data-aria-label-off"() {
              return e.ariaLabelOff;
            },
            get "aria-describedby"() {
              return A;
            },
            get href() {
              return e.href;
            }
          },
          () => s(L),
          () => s(_),
          () => g,
          {
            onclick: (ee) => {
              var Q;
              y && y.handleClick(), E === "top-app-bar:navigation" && Je(N(), "SMUITopAppBarIconButtonNav"), (Q = e.onclick) == null || Q.call(e, ee);
            },
            children: (ee, Q) => {
              var fe = Vm(), we = Ie(Z(fe), 2);
              Se(we, () => e.children ?? pe);
              var $ = Ie(we);
              {
                var ie = (Pe) => {
                  var Le = Fm();
                  O(Pe, Le);
                };
                ae($, (Pe) => {
                  d() && Pe(ie);
                });
              }
              O(ee, fe);
            },
            $$slots: { default: !0 }
          }
        )),
        (ee) => b = ee,
        () => b
      );
    });
  }
  return O(t, J), xe(W);
}
function Gm(t, e) {
  let n = p(e, "callback", 3, () => {
  }), r = p(e, "icon", 3, ""), i = p(e, "disabled", 3, !1), a = p(e, "ariaLabel", 3, void 0);
  jm(t, {
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
      Os(o, {
        class: "material-icons",
        children: (l, c) => {
          var d = Rt();
          Oe(() => at(d, r())), O(l, d);
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
var Wm = {
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
var qm = (
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
        return Wm;
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
var Xr = {
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
var zm = (
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
        return Xr;
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
      this.adapter.removeClass(Xr.LINE_RIPPLE_DEACTIVATING), this.adapter.addClass(Xr.LINE_RIPPLE_ACTIVE);
    }, e.prototype.setRippleCenter = function(n) {
      this.adapter.setStyle("transform-origin", n + "px center");
    }, e.prototype.deactivate = function() {
      this.adapter.addClass(Xr.LINE_RIPPLE_DEACTIVATING);
    }, e.prototype.handleTransitionEnd = function(n) {
      var r = this.adapter.hasClass(Xr.LINE_RIPPLE_DEACTIVATING);
      n.propertyName === "opacity" && r && (this.adapter.removeClass(Xr.LINE_RIPPLE_ACTIVE), this.adapter.removeClass(Xr.LINE_RIPPLE_DEACTIVATING));
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
var Xm = {
  NOTCH_ELEMENT_SELECTOR: ".mdc-notched-outline__notch"
}, Yl = {
  // This should stay in sync with $mdc-notched-outline-padding * 2.
  NOTCH_ELEMENT_PADDING: 8
}, Km = {
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
var Ym = (
  /** @class */
  function(t) {
    Ve(e, t);
    function e(n) {
      return t.call(this, ue(ue({}, e.defaultAdapter), n)) || this;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return Xm;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Km;
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
}, Zm = {
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
}, Qm = [
  "pattern",
  "min",
  "max",
  "required",
  "step",
  "minlength",
  "maxlength"
], Jm = [
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
var Ql = ["mousedown", "touchstart"], Jl = ["click", "keydown"], $m = (
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
        return Zm;
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
        return Zl;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "shouldAlwaysFloat", {
      get: function() {
        var n = this.getNativeInput().type;
        return Jm.indexOf(n) >= 0;
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
        for (var o = Ht(Ql), u = o.next(); !u.done; u = o.next()) {
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
        for (var c = Ht(Jl), d = c.next(); !d.done; d = c.next()) {
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
        for (var o = Ht(Ql), u = o.next(); !u.done; u = o.next()) {
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
        for (var c = Ht(Jl), d = c.next(); !d.done; d = c.next()) {
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
        return Qm.indexOf(i) > -1 ? (r.styleValidity(!0), r.adapter.setLabelRequired(r.getNativeInput().required), !0) : !1;
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
var $l = {
  ICON_EVENT: "MDCTextField:icon",
  ICON_ROLE: "button"
}, eg = {
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
var eu = ["click", "keydown"], tg = (
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
        return $l;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return eg;
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
        for (var i = Ht(eu), a = i.next(); !a.done; a = i.next()) {
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
        for (var i = Ht(eu), a = i.next(); !a.done; a = i.next()) {
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
  }(Tt)
), ng = /* @__PURE__ */ de("<span><!></span>"), rg = /* @__PURE__ */ de("<label><!></label>");
function bo(t, e) {
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
  ]), c, d = /* @__PURE__ */ ve(void 0), v = new ea(), f = ce({}), m = ce({}), h = me("SMUI:generic:input:props") ?? {}, g = a();
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
      new qm({
        addClass: I,
        removeClass: _,
        getWidth: () => {
          var R, G;
          const W = K(), J = W.cloneNode(!0);
          (R = W.parentNode) == null || R.appendChild(J), J.classList.add("smui-floating-label--remove-transition"), J.classList.add("smui-floating-label--force-size"), J.classList.remove("mdc-floating-label--float-above");
          const H = J.scrollWidth;
          return (G = W.parentNode) == null || G.removeChild(J), H;
        },
        registerInteractionHandler: (W, J) => v.on(K(), W, J),
        deregisterInteractionHandler: (W, J) => v.off(K(), W, J)
      }),
      !0
    );
    const N = {
      get element() {
        return K();
      },
      addStyle: E,
      removeStyle: A
    };
    return y && y(N), s(d).init(), () => {
      var W;
      S && S(N), (W = s(d)) == null || W.destroy(), v.clear();
    };
  });
  function I(N) {
    f[N] || (f[N] = !0);
  }
  function _(N) {
    (!(N in f) || f[N]) && (f[N] = !1);
  }
  function E(N, W) {
    m[N] != W && (W === "" || W == null ? delete m[N] : m[N] = W);
  }
  function A(N) {
    N in m && delete m[N];
  }
  function L(N) {
    var W;
    (W = s(d)) == null || W.shake(N);
  }
  function C(N) {
    a(N);
  }
  function T(N) {
    o(N);
  }
  function k() {
    if (s(d) == null)
      throw new Error("Instance is undefined.");
    return s(d).getWidth();
  }
  function K() {
    return c;
  }
  var j = { shake: L, float: C, setRequired: T, getWidth: k, getElement: K }, D = ne(), w = Z(D);
  {
    var x = (N) => {
      var W = ng();
      ke(W, (H, R) => ({ class: H, style: R, ...l }), [
        () => De({
          "mdc-floating-label": !0,
          "mdc-floating-label--float-above": a(),
          "mdc-floating-label--required": o(),
          ...f,
          [r()]: !0
        }),
        () => Object.entries(m).map(([H, R]) => `${H}: ${R};`).concat([i()]).join(" ")
      ]);
      var J = se(W);
      Se(J, () => e.children ?? pe), Ee(W, (H) => c = H, () => c), Me(W, (H, R) => q == null ? void 0 : q(H, R), n), O(N, W);
    }, M = (N) => {
      var W = rg();
      ke(
        W,
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
      var J = se(W);
      Se(J, () => e.children ?? pe), Ee(W, (H) => c = H, () => c), Me(W, (H, R) => q == null ? void 0 : q(H, R), n), O(N, W);
    };
    ae(w, (N) => {
      u() ? N(x) : N(M, !1);
    });
  }
  return O(t, D), xe(j);
}
var ig = /* @__PURE__ */ de("<div></div>");
function Jc(t, e) {
  Ce(e, !0);
  let n = p(e, "use", 19, () => []), r = p(e, "class", 3, ""), i = p(e, "style", 3, ""), a = p(e, "active", 3, !1), o = /* @__PURE__ */ qe(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "style",
    "active"
  ]), u, l = /* @__PURE__ */ ve(void 0), c = new ea(), d = ce({}), v = ce({});
  rt(() => (X(
    l,
    new zm({
      addClass: m,
      removeClass: h,
      hasClass: f,
      setStyle: g,
      registerEventHandler: (A, L) => c.on(I(), A, L),
      deregisterEventHandler: (A, L) => c.off(I(), A, L)
    }),
    !0
  ), s(l).init(), () => {
    var A;
    (A = s(l)) == null || A.destroy(), c.clear();
  }));
  function f(A) {
    return A in d ? d[A] : I().classList.contains(A);
  }
  function m(A) {
    d[A] || (d[A] = !0);
  }
  function h(A) {
    (!(A in d) || d[A]) && (d[A] = !1);
  }
  function g(A, L) {
    v[A] != L && (L === "" || L == null ? delete v[A] : v[A] = L);
  }
  function b() {
    var A;
    (A = s(l)) == null || A.activate();
  }
  function y() {
    var A;
    (A = s(l)) == null || A.deactivate();
  }
  function S(A) {
    var L;
    (L = s(l)) == null || L.setRippleCenter(A);
  }
  function I() {
    return u;
  }
  var _ = { activate: b, deactivate: y, setRippleCenter: S, getElement: I }, E = ig();
  return ke(E, (A, L) => ({ class: A, style: L, ...o }), [
    () => De({
      "mdc-line-ripple": !0,
      "mdc-line-ripple--active": a(),
      ...d,
      [r()]: !0
    }),
    () => Object.entries(v).map(([A, L]) => `${A}: ${L};`).concat([i()]).join(" ")
  ]), Ee(E, (A) => u = A, () => u), Me(E, (A, L) => q == null ? void 0 : q(A, L), n), O(t, E), xe(_);
}
var ag = /* @__PURE__ */ de('<div class="mdc-notched-outline__notch"><!></div>'), og = /* @__PURE__ */ de('<div><div class="mdc-notched-outline__leading"></div> <!> <div class="mdc-notched-outline__trailing"></div></div>');
function $c(t, e) {
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
  }), oe("SMUI:floating-label:mount", (C) => {
    X(c, C, !0);
  }), oe("SMUI:floating-label:unmount", () => {
    X(c, void 0);
  }), rt(() => (X(
    l,
    new Ym({
      addClass: m,
      removeClass: h,
      setNotchWidthProperty: (C) => g("width", C + "px"),
      removeNotchWidthProperty: () => b("width")
    }),
    !0
  ), s(l).init(), () => {
    var C;
    (C = s(l)) == null || C.destroy();
  }));
  function m(C) {
    d[C] || (d[C] = !0);
  }
  function h(C) {
    (!(C in d) || d[C]) && (d[C] = !1);
  }
  function g(C, T) {
    v[C] != T && (T === "" || T == null ? delete v[C] : v[C] = T);
  }
  function b(C) {
    C in v && delete v[C];
  }
  function y(C) {
    var T;
    (T = s(l)) == null || T.notch(C);
  }
  function S() {
    var C;
    (C = s(l)) == null || C.closeNotch();
  }
  function I() {
    return u;
  }
  var _ = { notch: y, closeNotch: S, getElement: I }, E = og();
  ke(E, (C) => ({ class: C, ...o }), [
    () => De({
      "mdc-notched-outline": !0,
      "mdc-notched-outline--notched": i(),
      "mdc-notched-outline--no-label": a(),
      ...d,
      [r()]: !0
    })
  ]);
  var A = Ie(se(E), 2);
  {
    var L = (C) => {
      var T = ag(), k = se(T);
      Se(k, () => e.children ?? pe), Oe((K) => Ut(T, K), [
        () => Object.entries(v).map(([K, j]) => `${K}: ${j};`).join(" ")
      ]), O(C, T);
    };
    ae(A, (C) => {
      a() || C(L);
    });
  }
  return Ee(E, (C) => u = C, () => u), Me(E, (C, T) => q == null ? void 0 : q(C, T), n), O(t, E), xe(_);
}
function $s(t, e) {
  Ce(e, !0);
  let n = p(e, "use", 19, () => []), r = p(e, "class", 3, ""), i = p(e, "component", 3, jr), a = p(e, "tag", 3, "div"), o = p(e, "_smuiClass", 3, ""), u = p(e, "_smuiClassMap", 23, () => ({})), l = p(e, "_smuiContexts", 19, () => ({})), c = p(e, "_smuiProps", 19, () => ({})), d = /* @__PURE__ */ qe(e, [
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
  Dn(() => {
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
              var A = ne(), L = Z(A);
              Se(L, () => e.children ?? pe), O(_, A);
            },
            $$slots: { default: !0 }
          }
        )),
        (_) => v = _,
        () => v
      );
    });
  }
  return O(t, g), xe(h);
}
function sg(t, e) {
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
        Se(c, () => e.children ?? pe), O(o, l);
      },
      $$slots: { default: !0 }
    })),
    (o) => r = o,
    () => r
  ), xe(a);
}
function lg(t, e) {
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
          Se(c, () => e.children ?? pe), O(o, l);
        },
        $$slots: { default: !0 }
      }
    )),
    (o) => r = o,
    () => r
  ), xe(a);
}
function ug(t, e) {
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
          Se(c, () => e.children ?? pe), O(o, l);
        },
        $$slots: { default: !0 }
      }
    )),
    (o) => r = o,
    () => r
  ), xe(a);
}
var cg = /* @__PURE__ */ de("<input/>");
function dg(t, e) {
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
    d() && v() && c(k().matches(":invalid"));
  });
  function S(x) {
    return x === "" ? Number.NaN : +x;
  }
  function I(x) {
    if (i() === "file") {
      u(x.currentTarget.files);
      return;
    }
    if (x.currentTarget.value === "" && f()) {
      o(null);
      return;
    }
    if (x.currentTarget.value === "" && m()) {
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
    (i() === "file" || i() === "range") && I(x), l(!0), d() && c(k().matches(":invalid"));
  }
  function E(x) {
    return x in b ? b[x] ?? null : k().getAttribute(x);
  }
  function A(x, M) {
    b[x] !== M && (b[x] = M);
  }
  function L(x) {
    (!(x in b) || b[x] != null) && (b[x] = void 0);
  }
  function C() {
    k().focus();
  }
  function T() {
    k().blur();
  }
  function k() {
    return g;
  }
  var K = { getAttr: E, addAttr: A, removeAttr: L, focus: C, blur: T, getElement: k }, j = cg(), D = (x) => {
    var M;
    i() !== "file" && I(x), (M = e.oninput) == null || M.call(e, x);
  }, w = (x) => {
    var M;
    _(x), (M = e.onchange) == null || M.call(e, x);
  };
  return ke(
    j,
    (x) => ({
      class: x,
      type: i(),
      placeholder: a(),
      ...y,
      ...b,
      ...h,
      oninput: D,
      onchange: w
    }),
    [
      () => De({ "mdc-text-field__input": !0, [r()]: !0 })
    ],
    void 0,
    void 0,
    !0
  ), Ee(j, (x) => g = x, () => g), Me(j, (x, M) => q == null ? void 0 : q(x, M), n), O(t, j), xe(K);
}
var fg = /* @__PURE__ */ de("<textarea></textarea>");
function hg(t, e) {
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
  function g(C) {
    return C in m ? m[C] ?? null : _().getAttribute(C);
  }
  function b(C, T) {
    m[C] !== T && (m[C] = T);
  }
  function y(C) {
    (!(C in m) || m[C] != null) && (m[C] = void 0);
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
  var E = { getAttr: g, addAttr: b, removeAttr: y, focus: S, blur: I, getElement: _ }, A = fg(), L = (C) => {
    var T;
    h(), (T = e.onchange) == null || T.call(e, C);
  };
  return ke(
    A,
    (C) => ({
      class: C,
      style: `${d() ? "" : "resize: none; "}${i()}`,
      ...m,
      ...v,
      onchange: L
    }),
    [
      () => De({ "mdc-text-field__input": !0, [r()]: !0 })
    ]
  ), Ee(A, (C) => f = C, () => f), Me(A, (C, T) => q == null ? void 0 : q(C, T), n), vi(() => Ea(A, a)), O(t, A), xe(E);
}
var vg = /* @__PURE__ */ de('<span class="mdc-text-field__ripple"></span>'), mg = /* @__PURE__ */ de("<!> <!>", 1), gg = /* @__PURE__ */ de("<span><!> <!></span>"), pg = /* @__PURE__ */ de("<!> <!> <!>", 1), bg = /* @__PURE__ */ de("<label><!> <!> <!> <!> <!> <!> <!></label>"), _g = /* @__PURE__ */ de("<div><!> <!> <!> <!> <!></div>"), yg = /* @__PURE__ */ de("<!> <!>", 1);
function Rs(t, e) {
  Ce(e, !0);
  const { applyPassive: n } = Yc;
  let r = () => {
  };
  function i(Y) {
    return Y === r;
  }
  let a = p(e, "use", 19, () => []), o = p(e, "class", 3, ""), u = p(e, "style", 3, ""), l = p(e, "ripple", 3, !0), c = p(e, "disabled", 3, !1), d = p(e, "required", 3, !1), v = p(e, "textarea", 3, !1), f = p(e, "variant", 19, () => v() ? "outlined" : "standard"), m = p(e, "noLabel", 3, !1), h = p(e, "type", 3, "text"), g = p(e, "value", 15), b = p(e, "files", 15, r), y = p(e, "invalid", 15, r), S = p(e, "updateInvalid", 19, () => i(y())), I = p(e, "initialInvalid", 3, !1), _ = p(e, "dirty", 15, !1), E = p(e, "validateOnValueChange", 19, S), A = p(e, "useNativeValidation", 19, S), L = p(e, "withLeadingIcon", 3, r), C = p(e, "withTrailingIcon", 3, r), T = p(e, "input", 7), k = p(e, "floatingLabel", 7), K = p(e, "lineRipple", 7), j = p(e, "notchedOutline", 7), D = /* @__PURE__ */ qe(e, [
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
  const w = g() !== void 0 || g() === void 0 && e.input$emptyValueUndefined || !i(b());
  i(b()) && b(null), i(y()) && y(!1);
  let x, M = /* @__PURE__ */ ve(void 0), N = new ea(), W = ce({}), J = ce({}), H = /* @__PURE__ */ ve(void 0), R = /* @__PURE__ */ ve(!1), G = /* @__PURE__ */ ve(ce(I())), Ae = me("SMUI:addLayoutListener"), be, F, V = new Promise((Y) => F = Y), B, ee, Q, fe;
  const we = /* @__PURE__ */ ge(() => T() && T().getElement());
  Te(() => {
    (_() || s(G) || !S()) && s(M) && s(M).isValid() !== !y() && (S() ? y(!s(M).isValid()) : s(M).setValid(!y()));
  }), Te(() => {
    s(M) && s(M).getValidateOnValueChange() !== E() && s(M).setValidateOnValueChange(i(E()) ? !1 : E());
  }), Te(() => {
    s(M) && s(M).setUseNativeValidation(i(A()) ? !0 : A());
  }), Te(() => {
    s(M) && s(M).setDisabled(c());
  });
  let $ = g();
  Te(() => {
    if (s(M) && w && $ !== g()) {
      $ = g();
      const Y = `${g() == null ? "" : g()}`;
      s(M).getValue() !== Y && s(M).setValue(Y);
    }
  }), Ae && (be = Ae(U)), oe("SMUI:textfield:leading-icon:mount", (Y) => {
    B = Y;
  }), oe("SMUI:textfield:leading-icon:unmount", () => {
    B = void 0;
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
      M,
      new $m(
        {
          // getRootAdapterMethods_
          addClass: Pe,
          removeClass: Le,
          hasClass: ie,
          registerTextFieldInteractionHandler: (te, He) => N.on(z(), te, He),
          deregisterTextFieldInteractionHandler: (te, He) => N.off(z(), te, He),
          registerValidationAttributeChangeHandler: (te) => {
            const He = (mt) => mt.map((kt) => kt.attributeName).filter((kt) => kt), dt = new MutationObserver((mt) => {
              A() && te(He(mt));
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
          setInputAttr: (te, He) => {
            var dt;
            (dt = T()) == null || dt.addAttr(te, He);
          },
          removeInputAttr: (te) => {
            var He;
            (He = T()) == null || He.removeAttr(te);
          },
          isFocused: () => {
            var te;
            return document.activeElement === ((te = T()) == null ? void 0 : te.getElement());
          },
          registerInputInteractionHandler: (te, He) => {
            var bt;
            const dt = (bt = T()) == null ? void 0 : bt.getElement();
            if (dt) {
              const mt = n();
              N.on(dt, te, He, typeof mt == "boolean" ? { capture: mt } : mt);
            }
          },
          deregisterInputInteractionHandler: (te, He) => {
            var bt;
            const dt = (bt = T()) == null ? void 0 : bt.getElement();
            dt && N.off(dt, te, He);
          },
          // getLabelAdapterMethods_
          floatLabel: (te) => k() && k().float(te),
          getLabelWidth: () => k() ? k().getWidth() : 0,
          hasLabel: () => !!k(),
          shakeLabel: (te) => k() && k().shake(te),
          setLabelRequired: (te) => k() && k().setRequired(te),
          // getLineRippleAdapterMethods_
          activateLineRipple: () => K() && K().activate(),
          deactivateLineRipple: () => K() && K().deactivate(),
          setLineRippleTransformOrigin: (te) => K() && K().setRippleCenter(te),
          // getOutlineAdapterMethods_
          closeOutline: () => j() && j().closeNotch(),
          hasOutline: () => !!j(),
          notchOutline: (te) => j() && j().notch(te)
        },
        {
          get helperText() {
            return Q;
          },
          get characterCounter() {
            return fe;
          },
          get leadingIcon() {
            return B;
          },
          get trailingIcon() {
            return ee;
          }
        }
      ),
      !0
    ), w) {
      if (T() == null)
        throw new Error("SMUI Textfield must be initialized with either a non-undefined initial value or an Input component.");
      (Y = s(M)) == null || Y.init();
    } else
      cc().then(() => {
        var te;
        if (T() == null)
          throw new Error("SMUI Textfield must be initialized with either a non-undefined initial value or an Input component.");
        (te = s(M)) == null || te.init();
      });
    return F(), () => {
      var te;
      (te = s(M)) == null || te.destroy(), N.clear();
    };
  }), Dn(() => {
    be && be();
  });
  function ie(Y) {
    return Y in W ? W[Y] ?? null : z().classList.contains(Y);
  }
  function Pe(Y) {
    W[Y] || (W[Y] = !0);
  }
  function Le(Y) {
    (!(Y in W) || W[Y]) && (W[Y] = !1);
  }
  function We(Y, te) {
    J[Y] != te && (te === "" || te == null ? delete J[Y] : J[Y] = te);
  }
  function Ke() {
    var Y;
    (Y = T()) == null || Y.focus();
  }
  function Ne() {
    var Y;
    (Y = T()) == null || Y.blur();
  }
  function U() {
    if (s(M)) {
      const Y = s(M).shouldFloat;
      s(M).notchOutline(Y);
    }
  }
  function z() {
    return x;
  }
  var he = { focus: Ke, blur: Ne, layout: U, getElement: z }, Re = yg(), Fe = Z(Re);
  {
    var ct = (Y) => {
      var te = bg();
      ke(te, (ze, Qe, $e) => ({ class: ze, style: Qe, for: void 0, ...$e }), [
        () => De({
          "mdc-text-field": !0,
          "mdc-text-field--disabled": c(),
          "mdc-text-field--textarea": v(),
          "mdc-text-field--filled": f() === "filled",
          "mdc-text-field--outlined": f() === "outlined",
          "smui-text-field--standard": f() === "standard" && !v(),
          "mdc-text-field--no-label": m() || e.label == null,
          "mdc-text-field--label-floating": s(R) || g() != null && g() !== "",
          "mdc-text-field--with-leading-icon": i(L()) ? e.leadingIcon : L(),
          "mdc-text-field--with-trailing-icon": i(C()) ? e.trailingIcon : C(),
          "mdc-text-field--with-internal-counter": v() && e.internalCounter,
          "mdc-text-field--invalid": y(),
          ...W,
          [o()]: !0
        }),
        () => Object.entries(J).map(([ze, Qe]) => `${ze}: ${Qe};`).concat([u()]).join(" "),
        () => tr(D, ["input$", "label$", "ripple$", "outline$", "helperLine$"])
      ]);
      var He = se(te);
      {
        var dt = (ze) => {
          var Qe = mg(), $e = Z(Qe);
          {
            var Dt = (ut) => {
              var At = vg();
              O(ut, At);
            };
            ae($e, (ut) => {
              f() === "filled" && ut(Dt);
            });
          }
          var gn = Ie($e, 2);
          {
            var ot = (ut) => {
              {
                let At = /* @__PURE__ */ ge(() => s(R) || g() != null && g() !== "" && (typeof g() != "number" || !isNaN(g()))), et = /* @__PURE__ */ ge(() => it(D, "label$"));
                Ee(
                  bo(ut, nt(
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
                      children: (wt, Hn) => {
                        var Lt = ne(), _t = Z(Lt);
                        {
                          var Pt = (Bt) => {
                          }, sn = (Bt) => {
                            var ln = ne(), Yt = Z(ln);
                            {
                              var qn = (un) => {
                                var Gt = Rt();
                                Oe(() => at(Gt, e.label)), O(un, Gt);
                              }, Gr = (un) => {
                                var Gt = ne(), pn = Z(Gt);
                                Se(pn, () => e.label), O(un, Gt);
                              };
                              ae(
                                Yt,
                                (un) => {
                                  typeof e.label == "string" ? un(qn) : un(Gr, !1);
                                },
                                !0
                              );
                            }
                            O(Bt, ln);
                          };
                          ae(_t, (Bt) => {
                            e.label == null ? Bt(Pt) : Bt(sn, !1);
                          });
                        }
                        O(wt, Lt);
                      },
                      $$slots: { default: !0 }
                    }
                  )),
                  (wt) => k(wt),
                  () => k()
                );
              }
            };
            ae(gn, (ut) => {
              !m() && e.label != null && ut(ot);
            });
          }
          O(ze, Qe);
        };
        ae(He, (ze) => {
          !v() && f() !== "outlined" && ze(dt);
        });
      }
      var bt = Ie(He, 2);
      {
        var mt = (ze) => {
          {
            let Qe = /* @__PURE__ */ ge(() => m() || e.label == null), $e = /* @__PURE__ */ ge(() => it(D, "outline$"));
            Ee(
              $c(ze, nt(
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
                          let wt = /* @__PURE__ */ ge(() => s(R) || g() != null && g() !== "" && (typeof g() != "number" || !isNaN(g()))), Hn = /* @__PURE__ */ ge(() => it(D, "label$"));
                          Ee(
                            bo(et, nt(
                              {
                                get floatAbove() {
                                  return s(wt);
                                },
                                get required() {
                                  return d();
                                },
                                wrapped: !0
                              },
                              () => s(Hn),
                              {
                                children: (Lt, _t) => {
                                  var Pt = ne(), sn = Z(Pt);
                                  {
                                    var Bt = (Yt) => {
                                    }, ln = (Yt) => {
                                      var qn = ne(), Gr = Z(qn);
                                      {
                                        var un = (pn) => {
                                          var rr = Rt();
                                          Oe(() => at(rr, e.label)), O(pn, rr);
                                        }, Gt = (pn) => {
                                          var rr = ne(), na = Z(rr);
                                          Se(na, () => e.label), O(pn, rr);
                                        };
                                        ae(
                                          Gr,
                                          (pn) => {
                                            typeof e.label == "string" ? pn(un) : pn(Gt, !1);
                                          },
                                          !0
                                        );
                                      }
                                      O(Yt, qn);
                                    };
                                    ae(sn, (Yt) => {
                                      e.label == null ? Yt(Bt) : Yt(ln, !1);
                                    });
                                  }
                                  O(Lt, Pt);
                                },
                                $$slots: { default: !0 }
                              }
                            )),
                            (Lt) => k(Lt),
                            () => k()
                          );
                        }
                      };
                      ae(ut, (et) => {
                        !m() && e.label != null && et(At);
                      });
                    }
                    O(Dt, ot);
                  },
                  $$slots: { default: !0 }
                }
              )),
              (Dt) => j(Dt),
              () => j()
            );
          }
        };
        ae(bt, (ze) => {
          (v() || f() === "outlined") && ze(mt);
        });
      }
      var kt = Ie(bt, 2);
      Ka(kt, {
        key: "SMUI:textfield:icon:leading",
        value: !0,
        children: (ze, Qe) => {
          var $e = ne(), Dt = Z($e);
          Se(Dt, () => e.leadingIcon ?? pe), O(ze, $e);
        },
        $$slots: { default: !0 }
      });
      var yr = Ie(kt, 2);
      Se(yr, () => e.children ?? pe);
      var ht = Ie(yr, 2);
      {
        var Mt = (ze) => {
          var Qe = gg(), $e = se(Qe);
          {
            let gn = /* @__PURE__ */ ge(() => it(D, "input$"));
            Ee(
              hg($e, nt(
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
                    return s(G);
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
                    X(R, !1), X(G, !0), Je(z(), "blur", ot), (ut = e.input$onblur) == null || ut.call(e, ot);
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
            () => bc(De({
              "mdc-text-field__resizer": !("input$resizable" in D) || e.input$resizable
            }))
          ]), O(ze, Qe);
        }, It = (ze) => {
          var Qe = pg(), $e = Z(Qe);
          {
            var Dt = (At) => {
              var et = ne(), wt = Z(et);
              {
                var Hn = (_t) => {
                  lg(_t, {
                    children: (Pt, sn) => {
                      var Bt = Rt();
                      Oe(() => at(Bt, e.prefix)), O(Pt, Bt);
                    },
                    $$slots: { default: !0 }
                  });
                }, Lt = (_t) => {
                  var Pt = ne(), sn = Z(Pt);
                  Se(sn, () => e.prefix ?? pe), O(_t, Pt);
                };
                ae(wt, (_t) => {
                  typeof e.prefix == "string" ? _t(Hn) : _t(Lt, !1);
                });
              }
              O(At, et);
            };
            ae($e, (At) => {
              e.prefix != null && At(Dt);
            });
          }
          var gn = Ie($e, 2);
          {
            let At = /* @__PURE__ */ ge(() => it(D, "input$"));
            Ee(
              dg(gn, nt(
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
                    return s(G);
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
                    X(R, !1), X(G, !0), Je(z(), "blur", et), (wt = e.input$onblur) == null || wt.call(e, et);
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
                var Hn = (_t) => {
                  ug(_t, {
                    children: (Pt, sn) => {
                      var Bt = Rt();
                      Oe(() => at(Bt, e.suffix)), O(Pt, Bt);
                    },
                    $$slots: { default: !0 }
                  });
                }, Lt = (_t) => {
                  var Pt = ne(), sn = Z(Pt);
                  Se(sn, () => e.suffix ?? pe), O(_t, Pt);
                };
                ae(wt, (_t) => {
                  typeof e.suffix == "string" ? _t(Hn) : _t(Lt, !1);
                });
              }
              O(At, et);
            };
            ae(ot, (At) => {
              e.suffix != null && At(ut);
            });
          }
          O(ze, Qe);
        };
        ae(ht, (ze) => {
          v() && typeof g() == "string" ? ze(Mt) : ze(It, !1);
        });
      }
      var Nn = Ie(ht, 2);
      Ka(Nn, {
        key: "SMUI:textfield:icon:leading",
        value: !1,
        children: (ze, Qe) => {
          var $e = ne(), Dt = Z($e);
          Se(Dt, () => e.trailingIcon ?? pe), O(ze, $e);
        },
        $$slots: { default: !0 }
      });
      var yi = Ie(Nn, 2);
      {
        var Wn = (ze) => {
          {
            let Qe = /* @__PURE__ */ ge(() => it(D, "ripple$"));
            Ee(Jc(ze, nt(() => s(Qe))), ($e) => K($e), () => K());
          }
        };
        ae(yi, (ze) => {
          !v() && f() !== "outlined" && l() && ze(Wn);
        });
      }
      Ee(te, (ze) => x = ze, () => x), Me(te, (ze, Qe) => Xt == null ? void 0 : Xt(ze, Qe), () => ({
        ripple: !v() && f() === "filled",
        unbounded: !1,
        addClass: Pe,
        removeClass: Le,
        addStyle: We,
        eventTarget: s(we),
        activeTarget: s(we),
        initPromise: V
      })), Me(te, (ze, Qe) => q == null ? void 0 : q(ze, Qe), a), O(Y, te);
    }, pt = (Y) => {
      var te = _g();
      ke(te, (ht, Mt, It) => ({ class: ht, style: Mt, ...It }), [
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
          ...W,
          [o()]: !0
        }),
        () => Object.entries(J).map(([ht, Mt]) => `${ht}: ${Mt};`).concat([u()]).join(" "),
        () => tr(D, ["input$", "label$", "ripple$", "outline$", "helperLine$"])
      ]);
      var He = se(te);
      {
        var dt = (ht) => {
          var Mt = ne(), It = Z(Mt);
          Se(It, () => e.label ?? pe), O(ht, Mt);
        };
        ae(He, (ht) => {
          typeof e.label != "string" && ht(dt);
        });
      }
      var bt = Ie(He, 2);
      Ka(bt, {
        key: "SMUI:textfield:icon:leading",
        value: !0,
        children: (ht, Mt) => {
          var It = ne(), Nn = Z(It);
          Se(Nn, () => e.leadingIcon ?? pe), O(ht, It);
        },
        $$slots: { default: !0 }
      });
      var mt = Ie(bt, 2);
      Se(mt, () => e.children ?? pe);
      var kt = Ie(mt, 2);
      Ka(kt, {
        key: "SMUI:textfield:icon:leading",
        value: !1,
        children: (ht, Mt) => {
          var It = ne(), Nn = Z(It);
          Se(Nn, () => e.trailingIcon ?? pe), O(ht, It);
        },
        $$slots: { default: !0 }
      });
      var yr = Ie(kt, 2);
      Se(yr, () => e.line ?? pe), Ee(te, (ht) => x = ht, () => x), Me(te, (ht, Mt) => Xt == null ? void 0 : Xt(ht, Mt), () => ({
        ripple: l(),
        unbounded: !1,
        addClass: Pe,
        removeClass: Le,
        addStyle: We
      })), Me(te, (ht, Mt) => q == null ? void 0 : q(ht, Mt), a), O(Y, te);
    };
    ae(Fe, (Y) => {
      w ? Y(ct) : Y(pt, !1);
    });
  }
  var le = Ie(Fe, 2);
  {
    var ye = (Y) => {
      {
        let te = /* @__PURE__ */ ge(() => it(D, "helperLine$"));
        sg(Y, nt(() => s(te), {
          children: (He, dt) => {
            var bt = ne(), mt = Z(bt);
            Se(mt, () => e.helper ?? pe), O(He, bt);
          },
          $$slots: { default: !0 }
        }));
      }
    };
    ae(le, (Y) => {
      e.helper && Y(ye);
    });
  }
  return O(t, Re), xe(he);
}
var Ig = /* @__PURE__ */ de("<i><!></i>");
function Eg(t, e) {
  Ce(e, !0);
  const n = () => Jn(h, "$leadingStore", r), [r, i] = br();
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
  ]), d, v = /* @__PURE__ */ ve(void 0), f = new ea(), m = ce({});
  const h = me("SMUI:textfield:icon:leading"), g = n();
  let b = /* @__PURE__ */ ve(void 0);
  const y = /* @__PURE__ */ ge(() => ({ role: e.role, tabindex: u() })), S = me("SMUI:textfield:leading-icon:mount"), I = me("SMUI:textfield:leading-icon:unmount"), _ = me("SMUI:textfield:trailing-icon:mount"), E = me("SMUI:textfield:trailing-icon:unmount");
  rt(() => (X(
    v,
    new tg({
      getAttr: A,
      setAttr: L,
      removeAttr: C,
      setContent: (M) => {
        X(b, M, !0);
      },
      registerInteractionHandler: (M, N) => f.on(T(), M, N),
      deregisterInteractionHandler: (M, N) => f.off(T(), M, N),
      notifyIconAction: () => Je(T(), "SMUITextFieldIcon")
    }),
    !0
  ), g ? S && S(s(v)) : _ && _(s(v)), s(v).init(), () => {
    var M;
    s(v) && (g ? I && I(s(v)) : E && E(s(v))), (M = s(v)) == null || M.destroy(), f.clear();
  }));
  function A(M) {
    return M in m ? m[M] ?? null : T().getAttribute(M);
  }
  function L(M, N) {
    m[M] !== N && (m[M] = N);
  }
  function C(M) {
    (!(M in m) || m[M] != null) && (m[M] = void 0);
  }
  function T() {
    return d;
  }
  var k = { getElement: T }, K = Ig();
  ke(
    K,
    (M) => ({
      class: M,
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
  var j = se(K);
  {
    var D = (M) => {
      var N = ne(), W = Z(N);
      Se(W, () => e.children ?? pe), O(M, N);
    }, w = (M) => {
      var N = Rt();
      Oe(() => at(N, s(b))), O(M, N);
    };
    ae(j, (M) => {
      s(b) == null ? M(D) : M(w, !1);
    });
  }
  Ee(K, (M) => d = M, () => d), Me(K, (M, N) => q == null ? void 0 : q(M, N), a), O(t, K);
  var x = xe(k);
  return i(), x;
}
function Sg(t, e) {
  Ce(e, !0);
  let n = p(e, "placeholder", 3, ""), r = p(e, "label", 3, ""), i = p(e, "icon", 3, ""), a = p(e, "value", 15, ""), o = p(e, "variant", 3, "standard"), u = p(e, "styles", 3, ""), l = p(e, "required", 3, !1), c = p(e, "invalid", 3, !1), d = p(e, "oninput", 3, () => {
  });
  var v = ne(), f = Z(v);
  {
    var m = (g) => {
      {
        const b = (S) => {
          Eg(S, {
            class: "material-icons",
            children: (I, _) => {
              var E = Rt();
              Oe(() => at(E, i())), O(I, E);
            },
            $$slots: { default: !0 }
          });
        };
        let y = /* @__PURE__ */ ge(() => `width: 100%; ${u()}`);
        Rs(g, {
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
      Rs(g, {
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
  O(t, v), xe();
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
var Ag = {
  ANCHOR: "mdc-menu-surface--anchor",
  ANIMATING_CLOSED: "mdc-menu-surface--animating-closed",
  ANIMATING_OPEN: "mdc-menu-surface--animating-open",
  FIXED: "mdc-menu-surface--fixed",
  IS_OPEN_BELOW: "mdc-menu-surface--is-open-below",
  OPEN: "mdc-menu-surface--open",
  ROOT: "mdc-menu-surface"
}, Cg = {
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
}, ca = {
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
var li;
(function(t) {
  t[t.TOP_LEFT = 0] = "TOP_LEFT", t[t.TOP_RIGHT = 4] = "TOP_RIGHT", t[t.BOTTOM_LEFT = 1] = "BOTTOM_LEFT", t[t.BOTTOM_RIGHT = 5] = "BOTTOM_RIGHT", t[t.TOP_START = 8] = "TOP_START", t[t.TOP_END = 12] = "TOP_END", t[t.BOTTOM_START = 9] = "BOTTOM_START", t[t.BOTTOM_END = 13] = "BOTTOM_END";
})(li || (li = {}));
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
var Sr, sr, Xe = {
  LIST_ITEM_ACTIVATED_CLASS: "mdc-list-item--activated",
  LIST_ITEM_CLASS: "mdc-list-item",
  LIST_ITEM_DISABLED_CLASS: "mdc-list-item--disabled",
  LIST_ITEM_SELECTED_CLASS: "mdc-list-item--selected",
  LIST_ITEM_TEXT_CLASS: "mdc-list-item__text",
  LIST_ITEM_PRIMARY_TEXT_CLASS: "mdc-list-item__primary-text",
  ROOT: "mdc-list"
};
Sr = {}, Sr["" + Xe.LIST_ITEM_ACTIVATED_CLASS] = "mdc-list-item--activated", Sr["" + Xe.LIST_ITEM_CLASS] = "mdc-list-item", Sr["" + Xe.LIST_ITEM_DISABLED_CLASS] = "mdc-list-item--disabled", Sr["" + Xe.LIST_ITEM_SELECTED_CLASS] = "mdc-list-item--selected", Sr["" + Xe.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-list-item__primary-text", Sr["" + Xe.ROOT] = "mdc-list";
var Ci = (sr = {}, sr["" + Xe.LIST_ITEM_ACTIVATED_CLASS] = "mdc-deprecated-list-item--activated", sr["" + Xe.LIST_ITEM_CLASS] = "mdc-deprecated-list-item", sr["" + Xe.LIST_ITEM_DISABLED_CLASS] = "mdc-deprecated-list-item--disabled", sr["" + Xe.LIST_ITEM_SELECTED_CLASS] = "mdc-deprecated-list-item--selected", sr["" + Xe.LIST_ITEM_TEXT_CLASS] = "mdc-deprecated-list-item__text", sr["" + Xe.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-deprecated-list-item__primary-text", sr["" + Xe.ROOT] = "mdc-deprecated-list", sr), Ar = {
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
    .` + Ci[Xe.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + Ci[Xe.LIST_ITEM_CLASS] + ` a
  `,
  DEPRECATED_SELECTOR: ".mdc-deprecated-list",
  FOCUSABLE_CHILD_ELEMENTS: `
    .` + Xe.LIST_ITEM_CLASS + ` button:not(:disabled),
    .` + Xe.LIST_ITEM_CLASS + ` a,
    .` + Xe.LIST_ITEM_CLASS + ` input[type="radio"]:not(:disabled),
    .` + Xe.LIST_ITEM_CLASS + ` input[type="checkbox"]:not(:disabled),
    .` + Ci[Xe.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + Ci[Xe.LIST_ITEM_CLASS] + ` a,
    .` + Ci[Xe.LIST_ITEM_CLASS] + ` input[type="radio"]:not(:disabled),
    .` + Ci[Xe.LIST_ITEM_CLASS] + ` input[type="checkbox"]:not(:disabled)
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
var xg = ["input", "button", "textarea", "select"], Cn = function(t) {
  var e = t.target;
  if (e) {
    var n = ("" + e.tagName).toLowerCase();
    xg.indexOf(n) === -1 && t.preventDefault();
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
function Tg() {
  var t = {
    bufferClearTimeout: 0,
    currentFirstChar: "",
    sortedIndexCursor: 0,
    typeaheadBuffer: ""
  };
  return t;
}
function wg(t, e) {
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
function Ms(t, e) {
  var n = t.nextChar, r = t.focusItemAtIndex, i = t.sortedIndexByFirstChar, a = t.focusedItemIndex, o = t.skipFocus, u = t.isItemAtIndexDisabled;
  clearTimeout(e.bufferClearTimeout), e.bufferClearTimeout = setTimeout(function() {
    td(e);
  }, Et.TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS), e.typeaheadBuffer = e.typeaheadBuffer + n;
  var l;
  return e.typeaheadBuffer.length === 1 ? l = Lg(i, a, u, e) : l = Og(i, u, e), l !== -1 && !o && r(l), l;
}
function Lg(t, e, n, r) {
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
function Og(t, e, n) {
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
function ed(t) {
  return t.typeaheadBuffer.length > 0;
}
function td(t) {
  t.typeaheadBuffer = "";
}
function tu(t, e) {
  var n = t.event, r = t.isTargetListItem, i = t.focusedItemIndex, a = t.focusItemAtIndex, o = t.sortedIndexByFirstChar, u = t.isItemAtIndexDisabled, l = Ct(n) === "ArrowLeft", c = Ct(n) === "ArrowUp", d = Ct(n) === "ArrowRight", v = Ct(n) === "ArrowDown", f = Ct(n) === "Home", m = Ct(n) === "End", h = Ct(n) === "Enter", g = Ct(n) === "Spacebar";
  if (n.altKey || n.ctrlKey || n.metaKey || l || c || d || v || f || m || h)
    return -1;
  var b = !g && n.key.length === 1;
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
    return Ms(y, e);
  }
  if (!g)
    return -1;
  r && Cn(n);
  var S = r && ed(e);
  if (S) {
    var y = {
      focusItemAtIndex: a,
      focusedItemIndex: i,
      nextChar: " ",
      sortedIndexByFirstChar: o,
      skipFocus: !1,
      isItemAtIndexDisabled: u
    };
    return Ms(y, e);
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
function Rg(t) {
  return t instanceof Array;
}
var Mg = ["Alt", "Control", "Meta", "Shift"];
function nu(t) {
  var e = new Set(t ? Mg.filter(function(n) {
    return t.getModifierState(n);
  }) : []);
  return function(n) {
    return n.every(function(r) {
      return e.has(r);
    }) && n.length === e.size;
  };
}
var Dg = (
  /** @class */
  function(t) {
    Ve(e, t);
    function e(n) {
      var r = t.call(this, ue(ue({}, e.defaultAdapter), n)) || this;
      return r.wrapFocus = !1, r.isVertical = !0, r.isSingleSelectionList = !1, r.areDisabledItemsFocusable = !0, r.selectedIndex = Et.UNSET_INDEX, r.focusedItemIndex = Et.UNSET_INDEX, r.useActivatedClass = !1, r.useSelectedAttr = !1, r.ariaCurrentAttrValue = null, r.isCheckboxList = !1, r.isRadioList = !1, r.lastSelectedIndex = null, r.hasTypeahead = !1, r.typeaheadState = Tg(), r.sortedIndexByFirstChar = /* @__PURE__ */ new Map(), r;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return Ar;
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
      return this.hasTypeahead && ed(this.typeaheadState);
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
      var a = this, o, u = Ct(n) === "ArrowLeft", l = Ct(n) === "ArrowUp", c = Ct(n) === "ArrowRight", d = Ct(n) === "ArrowDown", v = Ct(n) === "Home", f = Ct(n) === "End", m = Ct(n) === "Enter", h = Ct(n) === "Spacebar", g = this.isVertical && d || !this.isVertical && c, b = this.isVertical && l || !this.isVertical && u, y = n.key === "A" || n.key === "a", S = nu(n);
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
          tu(_, this.typeaheadState);
        }
        return;
      }
      var E = this.adapter.getFocusedElementIndex();
      if (!(E === -1 && (E = i, E < 0))) {
        if (g && S([]))
          Cn(n), this.focusNextElement(E);
        else if (b && S([]))
          Cn(n), this.focusPrevElement(E);
        else if (g && S(["Shift"]) && this.isCheckboxList) {
          Cn(n);
          var I = this.focusNextElement(E);
          I !== -1 && this.setSelectedIndexOnAction(I, !1);
        } else if (b && S(["Shift"]) && this.isCheckboxList) {
          Cn(n);
          var I = this.focusPrevElement(E);
          I !== -1 && this.setSelectedIndexOnAction(I, !1);
        } else if (v && S([]))
          Cn(n), this.focusFirstElement();
        else if (f && S([]))
          Cn(n), this.focusLastElement();
        else if (v && S(["Control", "Shift"]) && this.isCheckboxList) {
          if (Cn(n), this.isIndexDisabled(E))
            return;
          this.focusFirstElement(), this.toggleCheckboxRange(0, E, E);
        } else if (f && S(["Control", "Shift"]) && this.isCheckboxList) {
          if (Cn(n), this.isIndexDisabled(E))
            return;
          this.focusLastElement(), this.toggleCheckboxRange(E, this.adapter.getListItemCount() - 1, E);
        } else if (y && S(["Control"]) && this.isCheckboxList)
          n.preventDefault(), this.checkboxListToggleAll(this.selectedIndex === Et.UNSET_INDEX ? [] : this.selectedIndex, !0);
        else if ((m || h) && S([])) {
          if (r) {
            var A = n.target;
            if (A && A.tagName === "A" && m || (Cn(n), this.isIndexDisabled(E)))
              return;
            this.isTypeaheadInProgress() || (this.isSelectableList() && this.setSelectedIndexOnAction(E, !1), this.adapter.notifyAction(E));
          }
        } else if ((m || h) && S(["Shift"]) && this.isCheckboxList) {
          var A = n.target;
          if (A && A.tagName === "A" && m || (Cn(n), this.isIndexDisabled(E)))
            return;
          this.isTypeaheadInProgress() || (this.toggleCheckboxRange((o = this.lastSelectedIndex) !== null && o !== void 0 ? o : E, E, E), this.adapter.notifyAction(E));
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
          tu(_, this.typeaheadState);
        }
      }
    }, e.prototype.handleClick = function(n, r, i) {
      var a, o = nu(i);
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
      this.isIndexValid(n, !1) && (r ? (this.adapter.removeClassForElementIndex(n, Xe.LIST_ITEM_DISABLED_CLASS), this.adapter.setAttributeForElementIndex(n, Ar.ARIA_DISABLED, "false")) : (this.adapter.addClassForElementIndex(n, Xe.LIST_ITEM_DISABLED_CLASS), this.adapter.setAttributeForElementIndex(n, Ar.ARIA_DISABLED, "true")));
    }, e.prototype.setSingleSelectionAtIndex = function(n, r) {
      if (r === void 0 && (r = {}), !(this.selectedIndex === n && !r.forceUpdate)) {
        var i = Xe.LIST_ITEM_SELECTED_CLASS;
        this.useActivatedClass && (i = Xe.LIST_ITEM_ACTIVATED_CLASS), this.selectedIndex !== Et.UNSET_INDEX && this.adapter.removeClassForElementIndex(this.selectedIndex, i), this.setAriaForSingleSelectionAtIndex(n), this.setTabindexAtIndex(n), n !== Et.UNSET_INDEX && this.adapter.addClassForElementIndex(n, i), this.selectedIndex = n, r.isUserInteraction && !r.forceUpdate && this.adapter.notifySelectionChange([n]);
      }
    }, e.prototype.setAriaForSingleSelectionAtIndex = function(n) {
      this.selectedIndex === Et.UNSET_INDEX && (this.ariaCurrentAttrValue = this.adapter.getAttributeForElementIndex(n, Ar.ARIA_CURRENT));
      var r = this.ariaCurrentAttrValue !== null, i = r ? Ar.ARIA_CURRENT : Ar.ARIA_SELECTED;
      if (this.selectedIndex !== Et.UNSET_INDEX && this.adapter.setAttributeForElementIndex(this.selectedIndex, i, "false"), n !== Et.UNSET_INDEX) {
        var a = r ? this.ariaCurrentAttrValue : "true";
        this.adapter.setAttributeForElementIndex(n, i, a);
      }
    }, e.prototype.getSelectionAttribute = function() {
      return this.useSelectedAttr ? Ar.ARIA_SELECTED : Ar.ARIA_CHECKED;
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
      v.length && (this.selectedIndex = $n([], mr(a)), this.adapter.notifySelectionChange(v));
    }, e.prototype.setTabindexAtIndex = function(n) {
      this.focusedItemIndex === Et.UNSET_INDEX && n !== 0 ? this.adapter.setAttributeForElementIndex(0, "tabindex", "-1") : this.focusedItemIndex >= 0 && this.focusedItemIndex !== n && this.adapter.setAttributeForElementIndex(this.focusedItemIndex, "tabindex", "-1"), !(this.selectedIndex instanceof Array) && this.selectedIndex !== n && this.adapter.setAttributeForElementIndex(this.selectedIndex, "tabindex", "-1"), n !== Et.UNSET_INDEX && this.adapter.setAttributeForElementIndex(n, "tabindex", "0");
    }, e.prototype.isSelectableList = function() {
      return this.isSingleSelectionList || this.isCheckboxList || this.isRadioList;
    }, e.prototype.setTabindexToFirstSelectedOrFocusedItem = function() {
      var n = this.getFirstSelectedOrFocusedItemIndex();
      this.setTabindexAtIndex(n);
    }, e.prototype.getFirstSelectedOrFocusedItemIndex = function() {
      return this.isSelectableList() ? typeof this.selectedIndex == "number" && this.selectedIndex !== Et.UNSET_INDEX ? this.selectedIndex : Rg(this.selectedIndex) && this.selectedIndex.length > 0 ? this.selectedIndex.reduce(function(n, r) {
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
      return Ms(o, this.typeaheadState);
    }, e.prototype.typeaheadInitSortedIndex = function() {
      return wg(this.adapter.getListItemCount(), this.adapter.getPrimaryTextAtIndex);
    }, e.prototype.clearTypeaheadBuffer = function() {
      td(this.typeaheadState);
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
var nd = (
  /** @class */
  function(t) {
    Ve(e, t);
    function e(n) {
      var r = t.call(this, ue(ue({}, e.defaultAdapter), n)) || this;
      return r.isSurfaceOpen = !1, r.isQuickOpen = !1, r.isHoistedElement = !1, r.isFixedPosition = !1, r.isHorizontallyCenteredOnViewport = !1, r.maxHeight = 0, r.openBottomBias = 0, r.openAnimationEndTimerId = 0, r.closeAnimationEndTimerId = 0, r.animationRequestId = 0, r.anchorCorner = li.TOP_START, r.originCorner = li.TOP_START, r.anchorMargin = { top: 0, right: 0, bottom: 0, left: 0 }, r.position = { x: 0, y: 0 }, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Ag;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Cg;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return ca;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "Corner", {
      get: function() {
        return li;
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
        }, ca.TRANSITION_OPEN_DURATION);
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
          }, ca.TRANSITION_CLOSE_DURATION);
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
      d.width / v.width > ca.ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO && (o = "center"), (this.isHoistedElement || this.isFixedPosition) && this.adjustPositionForHoistedElement(f), this.adapter.setTransformOrigin(o + " " + a), this.adapter.setPosition(f), this.adapter.setMaxHeight(i ? i + "px" : ""), this.hasBit(r, St.BOTTOM) || this.adapter.addClass(e.cssClasses.IS_OPEN_BELOW);
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
      }, ca.TOUCH_EVENT_WAIT_MS);
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
var ru = {
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
function Pg(t) {
  return !!t.document && typeof t.document.createElement == "function";
}
function Ng(t, e) {
  if (Pg(t) && e in ru) {
    var n = t.document.createElement("div"), r = ru[e], i = r.standard, a = r.prefixed, o = i in n.style;
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
var Di = {
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
}, Hg = {
  FOCUS_ROOT_INDEX: -1
}, Oi;
(function(t) {
  t[t.NONE = 0] = "NONE", t[t.LIST_ROOT = 1] = "LIST_ROOT", t[t.FIRST_ITEM = 2] = "FIRST_ITEM", t[t.LAST_ITEM = 3] = "LAST_ITEM";
})(Oi || (Oi = {}));
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
var Ug = (
  /** @class */
  function(t) {
    Ve(e, t);
    function e(n) {
      var r = t.call(this, ue(ue({}, e.defaultAdapter), n)) || this;
      return r.closeAnimationEndTimerId = 0, r.defaultFocusState = Oi.LIST_ROOT, r.selectedIndex = -1, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Di;
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
        return Hg;
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
        }, nd.numbers.TRANSITION_CLOSE_DURATION);
      }
    }, e.prototype.handleMenuSurfaceOpened = function() {
      switch (this.defaultFocusState) {
        case Oi.FIRST_ITEM:
          this.adapter.focusItemAtIndex(0);
          break;
        case Oi.LAST_ITEM:
          this.adapter.focusItemAtIndex(this.adapter.getMenuItemCount() - 1);
          break;
        case Oi.NONE:
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
      r >= 0 && (this.adapter.removeAttributeFromElementAtIndex(r, xi.ARIA_CHECKED_ATTR), this.adapter.removeClassFromElementAtIndex(r, Di.MENU_SELECTED_LIST_ITEM)), this.adapter.addClassToElementAtIndex(n, Di.MENU_SELECTED_LIST_ITEM), this.adapter.addAttributeToElementAtIndex(n, xi.ARIA_CHECKED_ATTR, "true"), this.selectedIndex = n;
    }, e.prototype.setEnabled = function(n, r) {
      this.validatedIndex(n), r ? (this.adapter.removeClassFromElementAtIndex(n, Xe.LIST_ITEM_DISABLED_CLASS), this.adapter.addAttributeToElementAtIndex(n, xi.ARIA_DISABLED_ATTR, "false")) : (this.adapter.addClassToElementAtIndex(n, Xe.LIST_ITEM_DISABLED_CLASS), this.adapter.addAttributeToElementAtIndex(n, xi.ARIA_DISABLED_ATTR, "true"));
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
var kg = (
  /** @class */
  function(t) {
    Ve(e, t);
    function e(n, r) {
      r === void 0 && (r = {});
      var i = t.call(this, ue(ue({}, e.defaultAdapter), n)) || this;
      return i.disabled = !1, i.isMenuOpen = !1, i.useDefaultValidation = !0, i.customValidity = !0, i.lastSelectedIndex = Kr.UNSET_INDEX, i.clickDebounceTimeout = 0, i.recentlyClicked = !1, i.leadingIcon = r.leadingIcon, i.helperText = r.helperText, i;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return gt;
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
      this.useDefaultValidation || (this.customValidity = n), this.adapter.setSelectAnchorAttr("aria-invalid", (!n).toString()), n ? (this.adapter.removeClass(gt.INVALID), this.adapter.removeMenuClass(gt.MENU_INVALID)) : (this.adapter.addClass(gt.INVALID), this.adapter.addMenuClass(gt.MENU_INVALID)), this.syncHelperTextValidity(n);
    }, e.prototype.isValid = function() {
      return this.useDefaultValidation && this.adapter.hasClass(gt.REQUIRED) && !this.adapter.hasClass(gt.DISABLED) ? this.getSelectedIndex() !== Kr.UNSET_INDEX && (this.getSelectedIndex() !== 0 || !!this.getValue()) : this.customValidity;
    }, e.prototype.setRequired = function(n) {
      n ? this.adapter.addClass(gt.REQUIRED) : this.adapter.removeClass(gt.REQUIRED), this.adapter.setSelectAnchorAttr("aria-required", n.toString()), this.adapter.setLabelRequired(n);
    }, e.prototype.getRequired = function() {
      return this.adapter.getSelectAnchorAttr("aria-required") === "true";
    }, e.prototype.init = function() {
      var n = this.adapter.getAnchorElement();
      n && (this.adapter.setMenuAnchorElement(n), this.adapter.setMenuAnchorCorner(li.BOTTOM_START)), this.adapter.setMenuWrapFocus(!1), this.setDisabled(this.adapter.hasClass(gt.DISABLED)), this.syncHelperTextValidity(!this.adapter.hasClass(gt.INVALID)), this.layout(), this.layoutOptions();
    }, e.prototype.blur = function() {
      this.adapter.removeClass(gt.FOCUSED), this.layout(), this.adapter.deactivateBottomLine();
      var n = this.adapter.hasClass(gt.REQUIRED);
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
      }, Kr.CLICK_DEBOUNCE_TIMEOUT_MS), this.recentlyClicked = !0;
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
var Yr = {
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
var Bg = (
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
        return Yr;
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
      return this.adapter.getAttr(Yr.ARIA_HIDDEN) !== "true";
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
          this.showToScreenReader(), n ? this.adapter.removeAttr(Yr.ROLE) : this.adapter.setAttr(Yr.ROLE, "alert");
          return;
        }
        this.adapter.removeAttr(Yr.ROLE), this.hide();
      }
    }, e.prototype.showToScreenReader = function() {
      this.adapter.removeAttr(Yr.ARIA_HIDDEN);
    }, e.prototype.hide = function() {
      this.adapter.setAttr(Yr.ARIA_HIDDEN, "true");
    }, e;
  }(Tt)
), Fg = /* @__PURE__ */ de("<div><!></div>");
function Vg(t, e) {
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
  ]), I, _ = /* @__PURE__ */ ve(void 0), E = ce({}), A = ce({}), L = /* @__PURE__ */ ve(void 0);
  oe("SMUI:list:role", "menu"), oe("SMUI:list:item:role", "menuitem"), Te(() => {
    var B, ee;
    I && o() && !((B = I.parentElement) != null && B.classList.contains("mdc-menu-surface--anchor")) && ((ee = I.parentElement) == null || ee.classList.add("mdc-menu-surface--anchor"), f(I.parentElement ?? void 0));
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
  const C = li;
  Te(() => {
    s(_) && e.anchorCorner != null && (typeof e.anchorCorner == "string" ? s(_).setAnchorCorner(C[e.anchorCorner]) : s(_).setAnchorCorner(e.anchorCorner));
  }), Te(() => {
    s(_) && s(_).setAnchorMargin(m());
  }), Te(() => {
    s(_) && s(_).setOpenBottomBias(b());
  });
  const T = me("SMUI:menu-surface:mount"), k = me("SMUI:menu-surface:unmount");
  rt(() => {
    X(
      _,
      new nd({
        addClass: j,
        removeClass: D,
        hasClass: K,
        hasAnchor: () => !!f(),
        notifyClose: () => {
          c() || l(a()), l() || Je(G(), "SMUIMenuSurfaceClosed");
        },
        notifyClosing: () => {
          c() || l(a()), l() || Je(G(), "SMUIMenuSurfaceClosing");
        },
        notifyOpen: () => {
          c() || l(!0), l() && Je(G(), "SMUIMenuSurfaceOpened");
        },
        notifyOpening: () => {
          l() || Je(G(), "SMUIMenuSurfaceOpening");
        },
        isElementInContainer: (ee) => G().contains(ee),
        isRtl: () => getComputedStyle(G()).getPropertyValue("direction") === "rtl",
        setTransformOrigin: (ee) => {
          A["transform-origin"] = ee;
        },
        isFocused: () => document.activeElement === G(),
        saveFocus: () => {
          X(L, document.activeElement ?? void 0, !0);
        },
        restoreFocus: () => {
          !y() && (!I || G().contains(document.activeElement)) && s(L) && document.contains(s(L)) && "focus" in s(L) && s(L).focus();
        },
        getInnerDimensions: () => ({
          width: G().offsetWidth,
          height: G().offsetHeight
        }),
        getAnchorDimensions: () => f() ? f().getBoundingClientRect() : null,
        getWindowDimensions: () => ({ width: window.innerWidth, height: window.innerHeight }),
        getBodyDimensions: () => ({
          width: document.body.clientWidth,
          height: document.body.clientHeight
        }),
        getWindowScroll: () => ({ x: window.pageXOffset, y: window.pageYOffset }),
        setPosition: (ee) => {
          A.left = "left" in ee ? `${ee.left}px` : "", A.right = "right" in ee ? `${ee.right}px` : "", A.top = "top" in ee ? `${ee.top}px` : "", A.bottom = "bottom" in ee ? `${ee.bottom}px` : "";
        },
        setMaxHeight: (ee) => {
          A["max-height"] = ee;
        }
      }),
      !0
    );
    const B = {
      get open() {
        return l();
      },
      set open(ee) {
        l(ee);
      },
      closeProgrammatic: w
    };
    return T && T(B), s(_).init(), () => {
      var Q, fe;
      k && k(B);
      const ee = s(_).isHoistedElement;
      (Q = s(_)) == null || Q.destroy(), ee && ((fe = G().parentNode) == null || fe.removeChild(G()));
    };
  }), Dn(() => {
    var B;
    o() && G() && ((B = G().parentElement) == null || B.classList.remove("mdc-menu-surface--anchor"));
  });
  function K(B) {
    return B in E ? E[B] : G().classList.contains(B);
  }
  function j(B) {
    E[B] || (E[B] = !0);
  }
  function D(B) {
    (!(B in E) || E[B]) && (E[B] = !1);
  }
  function w(B) {
    var ee;
    (ee = s(_)) == null || ee.close(B), l(!1);
  }
  function x(B) {
    s(_) && l() && !c() && s(_).handleBodyClick(B);
  }
  function M() {
    return l();
  }
  function N(B) {
    l(B);
  }
  function W(B, ee) {
    if (s(_) == null)
      throw new Error("Instance is not defined.");
    return s(_).setAbsolutePosition(B, ee);
  }
  function J(B) {
    if (s(_) == null)
      throw new Error("Instance is not defined.");
    return s(_).setIsHoisted(B);
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
  function G() {
    return I;
  }
  var Ae = {
    isOpen: M,
    setOpen: N,
    setAbsolutePosition: W,
    setIsHoisted: J,
    isFixed: H,
    flipCornerHorizontally: R,
    getElement: G
  }, be = Fg();
  ma("click", zu.body, x, !0);
  var F = (B) => {
    var ee;
    s(_) && !c() && s(_).handleKeydown(B), (ee = e.onkeydown) == null || ee.call(e, B);
  };
  ke(
    be,
    (B, ee) => ({
      class: B,
      style: ee,
      role: "dialog",
      ...S,
      onkeydown: F
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
      () => Object.entries(A).map(([B, ee]) => `${B}: ${ee};`).concat([i()]).join(" ")
    ]
  );
  var V = se(be);
  return Se(V, () => e.children ?? pe), Ee(be, (B) => I = B, () => I), Me(be, (B, ee) => q == null ? void 0 : q(B, ee), n), O(t, be), xe(Ae);
}
function is(t, { addClass: e = (r) => t.classList.add(r), removeClass: n = (r) => t.classList.remove(r) } = {}) {
  return e("mdc-menu-surface--anchor"), {
    destroy() {
      n("mdc-menu-surface--anchor");
    }
  };
}
function jg(t, e) {
  Ce(e, !0);
  const { closest: n } = Ua;
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
  oe("SMUI:menu-surface:mount", (C) => {
    s(v) || X(v, C, !0);
  });
  const m = me("SMUI:list:mount");
  oe("SMUI:list:mount", (C) => {
    s(f) || X(f, C, !0), m && m(C);
  });
  const h = me("SMUI:menu:mount"), g = me("SMUI:menu:unmount");
  rt(() => (X(
    d,
    new Ug({
      addClassToElementAtIndex: (C, T) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        s(f).addClassForElementIndex(C, T);
      },
      removeClassFromElementAtIndex: (C, T) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        s(f).removeClassForElementIndex(C, T);
      },
      addAttributeToElementAtIndex: (C, T, k) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        s(f).setAttributeForElementIndex(C, T, k);
      },
      removeAttributeFromElementAtIndex: (C, T) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        s(f).removeAttributeForElementIndex(C, T);
      },
      getAttributeFromElementAtIndex: (C, T) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        return s(f).getAttributeFromElementIndex(C, T);
      },
      elementContainsClass: (C, T) => C.classList.contains(T),
      closeSurface: (C) => {
        var T;
        u() || ((T = s(v)) == null || T.closeProgrammatic(C), Je(A(), "SMUIMenuClosedProgrammatically"));
      },
      getElementIndex: (C) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        return s(f).getOrderedList().map((T) => T.element).indexOf(C);
      },
      notifySelected: (C) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        Je(A(), "SMUIMenuSelected", {
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
        return !!n(s(f).getOrderedList()[C].element, `.${Di.MENU_SELECTION_GROUP}`);
      },
      getSelectedSiblingOfItemAtIndex: (C) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        const T = s(f).getOrderedList(), k = n(T[C].element, `.${Di.MENU_SELECTION_GROUP}`), K = k == null ? void 0 : k.querySelector(`.${Di.MENU_SELECTED_LIST_ITEM}`);
        return K ? T.map((j) => j.element).indexOf(K) : -1;
      }
    }),
    !0
  ), h && h(s(d)), s(d).init(), () => {
    var C;
    g && s(d) && g(s(d)), (C = s(d)) == null || C.destroy();
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
  function I(C) {
    if (s(d) == null)
      throw new Error("Instance is undefined.");
    s(d).setDefaultFocusState(C);
  }
  function _() {
    if (s(d) == null)
      throw new Error("Instance is undefined.");
    return s(d).getSelectedIndex();
  }
  function E() {
    return c;
  }
  function A() {
    return c.getElement();
  }
  var L = {
    isOpen: y,
    setOpen: S,
    setDefaultFocusState: I,
    getSelectedIndex: _,
    getMenuSurface: E,
    getElement: A
  };
  {
    let C = /* @__PURE__ */ ge(() => De({ "mdc-menu": !0, [i()]: !0 }));
    Ee(
      Vg(t, nt(
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
          onkeydown: (T) => {
            var k;
            b(T), (k = e.onkeydown) == null || k.call(e, T);
          },
          onSMUIMenuSurfaceOpened: (T) => {
            var k;
            s(d) && s(d).handleMenuSurfaceOpened(), (k = e.onSMUIMenuSurfaceOpened) == null || k.call(e, T);
          },
          onSMUIListAction: (T) => {
            var k;
            s(d) && s(f) && s(d).handleItemAction(s(f).getOrderedList()[T.detail.index].element), (k = e.onSMUIListAction) == null || k.call(e, T);
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
          children: (T, k) => {
            var K = ne(), j = Z(K);
            Se(j, () => e.children ?? pe), O(T, K);
          },
          $$slots: { default: !0 }
        }
      )),
      (T) => c = T,
      () => c
    );
  }
  return xe(L);
}
function Gg(t, e) {
  Ce(e, !0);
  const { closest: n, matches: r } = Ua;
  let i = me("SMUI:list:nav"), a = p(e, "use", 19, () => []), o = p(e, "class", 3, ""), u = p(e, "nonInteractive", 3, !1), l = p(e, "dense", 3, !1), c = p(e, "textualList", 3, !1), d = p(e, "avatarList", 3, !1), v = p(e, "iconList", 3, !1), f = p(e, "imageList", 3, !1), m = p(e, "thumbnailList", 3, !1), h = p(e, "videoList", 3, !1), g = p(e, "twoLine", 3, !1), b = p(e, "threeLine", 3, !1), y = p(e, "vertical", 3, !0), S = p(e, "wrapFocus", 19, () => me("SMUI:list:wrapFocus") ?? !1), I = p(e, "singleSelection", 3, !1), _ = p(e, "disabledItemsFocusable", 3, !1), E = p(e, "selectedIndex", 31, () => -1), A = p(e, "radioList", 3, !1), L = p(e, "checkList", 3, !1), C = p(e, "hasTypeahead", 3, !1), T = p(e, "component", 3, jr), k = p(e, "tag", 3, i ? "nav" : "ul"), K = /* @__PURE__ */ qe(e, [
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
  ]), j, D = /* @__PURE__ */ ve(void 0), w = [], x = me("SMUI:list:role");
  const M = /* @__PURE__ */ new WeakMap();
  let N = me("SMUI:dialog:selection"), W = me("SMUI:addLayoutListener"), J;
  oe("SMUI:list:nonInteractive", u()), oe("SMUI:separator:context", "list"), x || (I() ? (x = "listbox", oe("SMUI:list:item:role", "option")) : A() ? (x = "radiogroup", oe("SMUI:list:item:role", "radio")) : L() ? (x = "group", oe("SMUI:list:item:role", "checkbox")) : (x = "list", oe("SMUI:list:item:role", void 0))), Te(() => {
    s(D) && s(D).setVerticalOrientation(y());
  }), Te(() => {
    s(D) && s(D).setWrapFocus(S());
  }), Te(() => {
    s(D) && s(D).setHasTypeahead(C());
  }), Te(() => {
    s(D) && s(D).setSingleSelection(I());
  }), Te(() => {
    s(D) && s(D).setDisabledItemsFocusable(_());
  }), Te(() => {
    s(D) && I() && U() !== E() && s(D).setSelectedIndex(E());
  }), W && (J = W(We)), oe("SMUI:list:item:mount", (le) => {
    w.push(le), M.set(le.element, le), I() && le.selected && E(Le(le.element));
  }), oe("SMUI:list:item:unmount", (le) => {
    const ye = (le && w.findIndex((Y) => Y === le)) ?? -1;
    ye !== -1 && (w.splice(ye, 1), M.delete(le.element));
  });
  const H = me("SMUI:list:mount"), R = me("SMUI:list:unmount");
  rt(() => {
    X(
      D,
      new Dg({
        addClassForElementIndex: Q,
        focusItemAtIndex: he,
        getAttributeForElementIndex: (ye, Y) => {
          var te;
          return ((te = B()[ye]) == null ? void 0 : te.getAttr(Y)) ?? null;
        },
        getFocusedElementIndex: () => document.activeElement ? B().map((ye) => ye.element).indexOf(document.activeElement) : -1,
        getListItemCount: () => w.length,
        getPrimaryTextAtIndex: Pe,
        hasCheckboxAtIndex: (ye) => {
          var Y;
          return ((Y = B()[ye]) == null ? void 0 : Y.hasCheckbox) ?? !1;
        },
        hasRadioAtIndex: (ye) => {
          var Y;
          return ((Y = B()[ye]) == null ? void 0 : Y.hasRadio) ?? !1;
        },
        isCheckboxCheckedAtIndex: (ye) => {
          const Y = B()[ye];
          return ((Y == null ? void 0 : Y.hasCheckbox) && Y.checked) ?? !1;
        },
        isFocusInsideList: () => j != null && Re() !== document.activeElement && Re().contains(document.activeElement),
        isRootFocused: () => j != null && document.activeElement === Re(),
        listItemAtIndexHasClass: ee,
        notifyAction: (ye) => {
          E(ye), j != null && Je(Re(), "SMUIListAction", { index: ye });
        },
        notifySelectionChange: (ye) => {
          j != null && Je(Re(), "SMUIListSelectionChange", { changedIndices: ye });
        },
        removeClassForElementIndex: fe,
        setAttributeForElementIndex: we,
        setCheckedCheckboxOrRadioAtIndex: (ye, Y) => {
          B()[ye].checked = Y;
        },
        setTabIndexForListItemChildren: (ye, Y) => {
          const te = B()[ye];
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
        return w;
      },
      get typeaheadInProgress() {
        if (!s(D))
          throw new Error("Instance is undefined.");
        return s(D).isTypeaheadInProgress();
      },
      typeaheadMatchItem(ye, Y) {
        if (!s(D))
          throw new Error("Instance is undefined.");
        return s(D).typeaheadMatchItem(
          ye,
          Y,
          /** skipFocus */
          !0
        );
      },
      getOrderedList: B,
      focusItemAtIndex: he,
      addClassForElementIndex: Q,
      removeClassForElementIndex: fe,
      setAttributeForElementIndex: we,
      removeAttributeForElementIndex: $,
      getAttributeFromElementIndex: ie,
      getPrimaryTextAtIndex: Pe
    };
    return H && H(le), s(D).init(), s(D).layout(), () => {
      var ye;
      R && R(le), (ye = s(D)) == null || ye.destroy();
    };
  }), Dn(() => {
    J && J();
  });
  function G(le) {
    s(D) && le.target && s(D).handleKeydown(le, le.target.classList.contains("mdc-deprecated-list-item"), Le(le.target));
  }
  function Ae(le) {
    s(D) && le.target && s(D).handleFocusIn(Le(le.target));
  }
  function be(le) {
    s(D) && le.target && s(D).handleFocusOut(Le(le.target));
  }
  function F(le) {
    s(D) && le.target && s(D).handleClick(Le(le.target), !r(le.target, 'input[type="checkbox"], input[type="radio"]'), le);
  }
  function V(le) {
    if (A() || L()) {
      const ye = Le(le.target);
      if (ye !== -1) {
        const Y = B()[ye];
        Y && (A() && !Y.checked || L()) && (r(le.detail.target, 'input[type="checkbox"], input[type="radio"]') || (Y.checked = !Y.checked), Y.activateRipple(), window.requestAnimationFrame(() => {
          Y.deactivateRipple();
        }));
      }
    }
  }
  function B() {
    return j == null ? [] : [...Re().children].map((le) => M.get(le)).filter((le) => le && le._smui_list_item_accessor);
  }
  function ee(le, ye) {
    const Y = B()[le];
    return (Y && Y.hasClass(ye)) ?? !1;
  }
  function Q(le, ye) {
    const Y = B()[le];
    Y && Y.addClass(ye);
  }
  function fe(le, ye) {
    const Y = B()[le];
    Y && Y.removeClass(ye);
  }
  function we(le, ye, Y) {
    const te = B()[le];
    te && te.addAttr(ye, Y);
  }
  function $(le, ye) {
    const Y = B()[le];
    Y && Y.removeAttr(ye);
  }
  function ie(le, ye) {
    const Y = B()[le];
    return Y ? Y.getAttr(ye) : null;
  }
  function Pe(le) {
    const ye = B()[le];
    return (ye && ye.getPrimaryText()) ?? "";
  }
  function Le(le) {
    const ye = n(le, ".mdc-deprecated-list-item, .mdc-deprecated-list");
    return ye && r(ye, ".mdc-deprecated-list-item") ? B().map((Y) => Y == null ? void 0 : Y.element).indexOf(ye) : -1;
  }
  function We() {
    if (!s(D))
      throw new Error("Instance is undefined.");
    return s(D).layout();
  }
  function Ke(le, ye) {
    if (!s(D))
      throw new Error("Instance is undefined.");
    return s(D).setEnabled(le, ye);
  }
  function Ne() {
    if (!s(D))
      throw new Error("Instance is undefined.");
    return s(D).isTypeaheadInProgress();
  }
  function U() {
    if (!s(D))
      throw new Error("Instance is undefined.");
    return s(D).getSelectedIndex();
  }
  function z() {
    if (!s(D))
      throw new Error("Instance is undefined.");
    return s(D).getFocusedItemIndex();
  }
  function he(le) {
    const ye = B()[le];
    ye && "focus" in ye.element && ye.element.focus();
  }
  function Re() {
    return j.getElement();
  }
  var Fe = {
    layout: We,
    setEnabled: Ke,
    getTypeaheadInProgress: Ne,
    getSelectedIndex: U,
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
      "mdc-deprecated-list--avatar-list": d() || N,
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
              return k();
            },
            get use() {
              return a();
            },
            get class() {
              return s(le);
            },
            get role() {
              return x;
            }
          },
          () => K,
          {
            onkeydown: (te) => {
              var He;
              G(te), (He = e.onkeydown) == null || He.call(e, te);
            },
            onfocusin: (te) => {
              var He;
              Ae(te), (He = e.onfocusin) == null || He.call(e, te);
            },
            onfocusout: (te) => {
              var He;
              be(te), (He = e.onfocusout) == null || He.call(e, te);
            },
            onclick: (te) => {
              var He;
              F(te), (He = e.onclick) == null || He.call(e, te);
            },
            onSMUIAction: (te) => {
              var He;
              V(te), (He = e.onSMUIAction) == null || He.call(e, te);
            },
            children: (te, He) => {
              var dt = ne(), bt = Z(dt);
              Se(bt, () => e.children ?? pe), O(te, dt);
            },
            $$slots: { default: !0 }
          }
        )),
        (te) => j = te,
        () => j
      );
    });
  }
  return O(t, ct), xe(Fe);
}
let Wg = 0;
var qg = /* @__PURE__ */ de('<span class="mdc-deprecated-list-item__ripple"></span>'), zg = /* @__PURE__ */ de("<!><!>", 1);
function Xg(t, e) {
  Ce(e, !0);
  let n = () => {
  };
  function r(Q) {
    return Q === n;
  }
  let i = me("SMUI:list:item:nav"), a = p(e, "use", 19, () => []), o = p(e, "class", 3, ""), u = p(e, "style", 3, ""), l = p(e, "nonInteractive", 19, () => me("SMUI:list:nonInteractive") ?? !1), c = p(e, "ripple", 19, () => !l()), d = p(e, "wrapper", 3, !1), v = p(e, "activated", 15, !1), f = p(e, "role", 19, () => d() ? "presentation" : me("SMUI:list:item:role")), m = p(e, "selected", 15, !1), h = p(e, "disabled", 3, !1), g = p(e, "skipRestoreFocus", 3, !1), b = p(e, "tabindex", 15, n), y = p(e, "inputId", 19, () => "SMUI-form-field-list-" + Wg++), S = p(e, "component", 3, jr), I = p(e, "tag", 19, () => i ? e.href ? "a" : "span" : "li"), _ = /* @__PURE__ */ qe(e, [
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
  let E, A = ce({}), L = ce({}), C = ce({}), T = /* @__PURE__ */ ve(void 0), k = /* @__PURE__ */ ve(void 0);
  const K = /* @__PURE__ */ ge(() => r(b()) ? !l() && !h() && (m() || s(T) && s(T).checked) ? 0 : -1 : b());
  oe("SMUI:generic:input:props", { id: y() }), oe("SMUI:separator:context", void 0), oe("SMUI:generic:input:mount", (Q) => {
    ("_smui_checkbox_accessor" in Q || "_smui_radio_accessor" in Q) && X(T, Q, !0);
  }), oe("SMUI:generic:input:unmount", () => {
    X(T, void 0);
  });
  const j = me("SMUI:list:item:mount"), D = me("SMUI:list:item:unmount");
  rt(() => {
    if (!m() && !l()) {
      let fe = !0, we = E.getElement();
      for (; we.previousElementSibling; )
        if (we = we.previousElementSibling, we.nodeType === 1 && we.classList.contains("mdc-deprecated-list-item") && !we.classList.contains("mdc-deprecated-list-item--disabled")) {
          fe = !1;
          break;
        }
      fe && X(k, window.requestAnimationFrame(() => R(we)), !0);
    }
    const Q = {
      _smui_list_item_accessor: !0,
      get element() {
        return F();
      },
      get selected() {
        return m();
      },
      set selected(fe) {
        m(fe);
      },
      hasClass: w,
      addClass: x,
      removeClass: M,
      getAttr: W,
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
    return j && j(Q), () => {
      D && D(Q);
    };
  }), Dn(() => {
    s(k) && window.cancelAnimationFrame(s(k));
  });
  function w(Q) {
    return Q in A ? A[Q] : F().classList.contains(Q);
  }
  function x(Q) {
    A[Q] || (A[Q] = !0);
  }
  function M(Q) {
    (!(Q in A) || A[Q]) && (A[Q] = !1);
  }
  function N(Q, fe) {
    L[Q] != fe && (fe === "" || fe == null ? delete L[Q] : L[Q] = fe);
  }
  function W(Q) {
    return Q in C ? C[Q] ?? null : F().getAttribute(Q);
  }
  function J(Q, fe) {
    C[Q] !== fe && (C[Q] = fe);
  }
  function H(Q) {
    (!(Q in C) || C[Q] != null) && (C[Q] = void 0);
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
  function G(Q) {
    const fe = Q.key === "Enter", we = Q.key === "Space";
    (fe || we) && Ae(Q);
  }
  function Ae(Q) {
    h() || Je(F(), "SMUIAction", Q);
  }
  function be() {
    const Q = F(), fe = Q.querySelector(".mdc-deprecated-list-item__primary-text");
    if (fe)
      return fe.textContent ?? "";
    const we = Q.querySelector(".mdc-deprecated-list-item__text");
    return we ? we.textContent ?? "" : Q.textContent ?? "";
  }
  function F() {
    return E.getElement();
  }
  var V = { action: Ae, getPrimaryText: be, getElement: F }, B = ne(), ee = Z(B);
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
            addClass: x,
            removeClass: M,
            addStyle: N
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
      ...A,
      [o()]: !0
    })), we = /* @__PURE__ */ ge(() => Object.entries(L).map(([ie, Pe]) => `${ie}: ${Pe};`).concat([u()]).join(" ")), $ = /* @__PURE__ */ ge(() => g() || void 0);
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
          () => C,
          () => _,
          {
            onclick: (Le) => {
              var We;
              Ae(Le), (We = e.onclick) == null || We.call(e, Le);
            },
            onkeydown: (Le) => {
              var We;
              G(Le), (We = e.onkeydown) == null || We.call(e, Le);
            },
            children: (Le, We) => {
              var Ke = zg(), Ne = Z(Ke);
              {
                var U = (he) => {
                  var Re = qg();
                  O(he, Re);
                };
                ae(Ne, (he) => {
                  c() && he(U);
                });
              }
              var z = Ie(Ne);
              Se(z, () => e.children ?? pe), O(Le, Ke);
            },
            $$slots: { default: !0 }
          }
        )),
        (Le) => E = Le,
        () => E
      );
    });
  }
  return O(t, B), xe(V);
}
let Kg = 0;
var Yg = /* @__PURE__ */ de("<div><!></div>");
function Zg(t, e) {
  Ce(e, !0);
  let n = p(e, "use", 19, () => []), r = p(e, "class", 3, ""), i = p(e, "id", 19, () => "SMUI-select-helper-text-" + Kg++), a = p(e, "persistent", 3, !1), o = p(e, "validationMsg", 3, !1), u = /* @__PURE__ */ qe(e, [
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
    new Bg({
      addClass: y,
      removeClass: S,
      hasClass: b,
      getAttr: I,
      setAttr: _,
      removeAttr: E,
      setContent: (j) => {
        X(f, j, !0);
      }
    }),
    !0
  ), m && m(i()), h && h(s(c)), s(c).init(), () => {
    var j;
    g && s(c) && g(s(c)), (j = s(c)) == null || j.destroy();
  }));
  function b(j) {
    return j in d ? d[j] : A().classList.contains(j);
  }
  function y(j) {
    d[j] || (d[j] = !0);
  }
  function S(j) {
    (!(j in d) || d[j]) && (d[j] = !1);
  }
  function I(j) {
    return j in v ? v[j] ?? null : A().getAttribute(j);
  }
  function _(j, D) {
    v[j] !== D && (v[j] = D);
  }
  function E(j) {
    (!(j in v) || v[j] != null) && (v[j] = void 0);
  }
  function A() {
    return l;
  }
  var L = { getElement: A }, C = Yg();
  ke(
    C,
    (j) => ({
      class: j,
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
  var T = se(C);
  {
    var k = (j) => {
      var D = ne(), w = Z(D);
      Se(w, () => e.children ?? pe), O(j, D);
    }, K = (j) => {
      var D = Rt();
      Oe(() => at(D, s(f))), O(j, D);
    };
    ae(T, (j) => {
      s(f) == null ? j(k) : j(K, !1);
    });
  }
  return Ee(C, (j) => l = j, () => l), Me(C, (j, D) => q == null ? void 0 : q(j, D), n), O(t, C), xe(L);
}
let Qg = 0;
var Jg = /* @__PURE__ */ de("<input/>"), $g = /* @__PURE__ */ de('<span class="mdc-select__ripple"></span>'), ep = /* @__PURE__ */ de('<div><!> <div><!> <!> <!> <!> <span><span> </span></span> <span><svg class="mdc-select__dropdown-icon-graphic" viewBox="7 10 10 5" focusable="false"><polygon class="mdc-select__dropdown-icon-inactive" stroke="none" fill-rule="evenodd" points="7 10 12 15 17 10"></polygon><polygon class="mdc-select__dropdown-icon-active" stroke="none" fill-rule="evenodd" points="7 15 12 10 17 15"></polygon></svg></span> <!></div> <!></div> <!>', 1);
function tp(t, e) {
  Ce(e, !0);
  const n = () => Jn(Re, "$selectedTextStore", r), [r, i] = br();
  let a = () => {
  };
  function o(P) {
    return P === a;
  }
  let u = p(e, "use", 19, () => []), l = p(e, "class", 3, ""), c = p(e, "style", 3, ""), d = p(e, "ripple", 3, !0), v = p(e, "disabled", 3, !1), f = p(e, "variant", 3, "standard"), m = p(e, "noLabel", 3, !1), h = p(e, "label", 3, void 0), g = p(e, "value", 15), b = p(e, "key", 3, (P) => P), y = p(e, "dirty", 15, !1), S = p(e, "invalid", 15, a), I = p(e, "updateInvalid", 19, () => o(S())), _ = p(e, "required", 3, !1), E = p(e, "inputId", 19, () => "SMUI-select-" + Qg++), A = p(e, "hiddenInput", 3, !1), L = p(e, "withLeadingIcon", 3, a), C = p(e, "anchor$use", 19, () => []), T = p(e, "anchor$class", 3, ""), k = p(e, "selectedTextContainer$use", 19, () => []), K = p(e, "selectedTextContainer$class", 3, ""), j = p(e, "selectedText$use", 19, () => []), D = p(e, "selectedText$class", 3, ""), w = p(e, "dropdownIcon$use", 19, () => []), x = p(e, "dropdownIcon$class", 3, ""), M = p(e, "menu$class", 3, ""), N = /* @__PURE__ */ qe(e, [
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
  const W = o(S());
  o(S()) && S(!1);
  let J, H = /* @__PURE__ */ ve(void 0), R = ce({}), G = ce({}), Ae, be = ce({}), F = /* @__PURE__ */ ve(-1);
  const V = /* @__PURE__ */ ge(() => N.menu$id ?? E() + "-menu");
  let B = /* @__PURE__ */ ve(void 0), ee = me("SMUI:addLayoutListener"), Q, fe = /* @__PURE__ */ ve(!1), we = ce({}), $ = /* @__PURE__ */ ve(void 0), ie = /* @__PURE__ */ ve(void 0), Pe = /* @__PURE__ */ ve(!1), Le, We = me("SMUI:select:context"), Ke, Ne, U, z, he;
  oe("SMUI:list:role", ""), oe("SMUI:list:nav", !1);
  const Re = en("");
  oe("SMUI:select:selectedText", Re);
  const Fe = en(g());
  Te(() => {
    di(Fe, g());
  }), oe("SMUI:select:value", Fe), Te(() => {
    s(H) && s(H).getValue() !== b()(g()) && s(H).setValue(b()(g()));
  });
  let ct = s(F);
  Te(() => {
    if (ct !== s(F))
      if (ct = s(F), s(H))
        s(H).setSelectedIndex(
          s(F),
          /* closeMenu */
          !1,
          /* skipNotify */
          !0
        );
      else {
        const P = kt();
        g() !== P[s(F)] && g(P[s(F)]);
      }
  }), Te(() => {
    s(H) && s(H).getDisabled() !== v() && s(H).setDisabled(v());
  }), Te(() => {
    s(H) && y() && s(H).isValid() !== !S() && (I() ? S(!s(H).isValid()) : s(H).setValid(!S()));
  }), Te(() => {
    s(H) && s(H).getRequired() !== _() && s(H).setRequired(_());
  }), ee && (Q = ee(yi)), oe("SMUI:select:leading-icon:mount", (P) => {
    Ke = P;
  }), oe("SMUI:select:leading-icon:unmount", () => {
    Ke = void 0;
  }), oe("SMUI:list:mount", (P) => {
    Le = P;
  }), oe("SMUI:select:helper-text:id", (P) => {
    X(B, P, !0);
  }), oe("SMUI:select:helper-text:mount", (P) => {
    Ne = P;
  }), oe("SMUI:select:helper-text:unmount", () => {
    X(B, void 0), Ne = void 0;
  }), rt(() => (X(
    H,
    new kg(
      {
        // getSelectAdapterMethods
        // getMenuItemAttr: (menuItem: Element, attr: string) =>
        //   menuItem.getAttribute(attr),
        setSelectedText: (P) => {
          di(Re, P);
        },
        isSelectAnchorFocused: () => document.activeElement === Ae,
        getSelectAnchorAttr: dt,
        setSelectAnchorAttr: bt,
        removeSelectAnchorAttr: mt,
        addMenuClass: te,
        removeMenuClass: He,
        openMenu: () => {
          X(fe, !0);
        },
        closeMenu: () => {
          X(fe, !1);
        },
        getAnchorElement: () => Ae,
        setMenuAnchorElement: (P) => {
          X($, P, !0);
        },
        setMenuAnchorCorner: (P) => {
          X(ie, P, !0);
        },
        setMenuWrapFocus: (P) => {
          X(Pe, P, !0);
        },
        getSelectedIndex: () => s(F),
        setSelectedIndex: (P) => {
          ct = P, X(F, P, !0), g(kt()[s(F)]);
        },
        focusMenuItemAtIndex: (P) => {
          Le.focusItemAtIndex(P);
        },
        getMenuItemCount: () => Le.items.length,
        getMenuItemValues: () => kt().map(b()),
        getMenuItemTextAtIndex: (P) => Le.getPrimaryTextAtIndex(P),
        isTypeaheadInProgress: () => Le.typeaheadInProgress,
        typeaheadMatchItem: (P, _e) => Le.typeaheadMatchItem(P, _e),
        // getCommonAdapterMethods
        addClass: le,
        removeClass: ye,
        hasClass: pt,
        setRippleCenter: (P) => z && z.setRippleCenter(P),
        activateBottomLine: () => z && z.activate(),
        deactivateBottomLine: () => z && z.deactivate(),
        notifyChange: (P) => {
          var _e;
          y(!0), I() && S(!((_e = s(H)) != null && _e.isValid())), Je(Wn(), "SMUISelectChange", { value: g(), index: s(F) });
        },
        // getOutlineAdapterMethods
        hasOutline: () => !!he,
        notchOutline: (P) => he && he.notch(P),
        closeOutline: () => he && he.closeNotch(),
        // getLabelAdapterMethods
        hasLabel: () => !!U,
        floatLabel: (P) => U && U.float(P),
        getLabelWidth: () => U ? U.getWidth() : 0,
        setLabelRequired: (P) => U && U.setRequired(P)
      },
      {
        get helperText() {
          return Ne;
        },
        get leadingIcon() {
          return Ke;
        }
      }
    ),
    !0
  ), X(F, kt().indexOf(g()), !0), s(H).init(), It(W), () => {
    var P;
    (P = s(H)) == null || P.destroy();
  })), Dn(() => {
    Q && Q();
  });
  function pt(P) {
    return P in R ? R[P] : Wn().classList.contains(P);
  }
  function le(P) {
    R[P] || (R[P] = !0);
  }
  function ye(P) {
    (!(P in R) || R[P]) && (R[P] = !1);
  }
  function Y(P, _e) {
    G[P] != _e && (_e === "" || _e == null ? delete G[P] : G[P] = _e);
  }
  function te(P) {
    we[P] || (we[P] = !0);
  }
  function He(P) {
    (!(P in we) || we[P]) && (we[P] = !1);
  }
  function dt(P) {
    return P in be ? be[P] ?? null : Wn().getAttribute(P);
  }
  function bt(P, _e) {
    be[P] !== _e && (be[P] = _e);
  }
  function mt(P) {
    (!(P in be) || be[P] != null) && (be[P] = void 0);
  }
  function kt() {
    return Le.getOrderedList().map((P) => P.getValue());
  }
  function yr(P) {
    const _e = P.currentTarget.getBoundingClientRect();
    return (ht(P) ? P.touches[0].clientX : P.clientX) - _e.left;
  }
  function ht(P) {
    return "touches" in P;
  }
  function Mt() {
    if (s(H) == null)
      throw new Error("Instance is undefined.");
    return s(H).getUseDefaultValidation();
  }
  function It(P) {
    var _e;
    (_e = s(H)) == null || _e.setUseDefaultValidation(P);
  }
  function Nn() {
    Ae.focus();
  }
  function yi() {
    var P;
    (P = s(H)) == null || P.layout();
  }
  function Wn() {
    return J;
  }
  var ze = {
    getUseDefaultValidation: Mt,
    setUseDefaultValidation: It,
    focus: Nn,
    layout: yi,
    getElement: Wn
  }, Qe = ep(), $e = Z(Qe);
  ke($e, (P, _e, ft) => ({ class: P, style: _e, ...ft }), [
    () => De({
      "mdc-select": !0,
      "mdc-select--required": _(),
      "mdc-select--disabled": v(),
      "mdc-select--filled": f() === "filled",
      "mdc-select--outlined": f() === "outlined",
      "smui-select--standard": f() === "standard",
      "mdc-select--with-leading-icon": o(L()) ? e.leadingIcon : L(),
      "mdc-select--no-label": m() || h() == null,
      "mdc-select--invalid": S(),
      "mdc-select--activated": s(fe),
      "mdc-data-table__pagination-rows-per-page-select": We === "data-table:pagination",
      ...R,
      [l()]: !0
    }),
    () => Object.entries(G).map(([P, _e]) => `${P}: ${_e};`).concat([c()]).join(" "),
    () => tr(N, [
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
    var gn = (P) => {
      var _e = Jg();
      ke(
        _e,
        (ft) => ({
          type: "hidden",
          required: _(),
          disabled: v(),
          value: g(),
          ...ft
        }),
        [() => it(N, "input$")],
        void 0,
        void 0,
        !0
      ), O(P, _e);
    };
    ae(Dt, (P) => {
      A() && P(gn);
    });
  }
  var ot = Ie(Dt, 2), ut = (P) => {
    var _e;
    Ae.focus(), s(H) && s(H).handleClick(yr(P)), (_e = e.anchor$onclick) == null || _e.call(e, P);
  }, At = (P) => {
    var _e;
    s(H) && s(H).handleKeydown(P), (_e = e.onkeydown) == null || _e.call(e, P);
  }, et = (P) => {
    var _e;
    s(H) && s(H).handleBlur(), Je(Wn(), "blur", P), (_e = e.anchor$onblur) == null || _e.call(e, P);
  }, wt = (P) => {
    var _e;
    s(H) && s(H).handleFocus(), Je(Wn(), "focus", P), (_e = e.anchor$onfocus) == null || _e.call(e, P);
  };
  ke(
    ot,
    (P, _e) => ({
      class: P,
      "aria-required": _() ? "true" : void 0,
      "aria-disabled": v() ? "true" : void 0,
      "aria-controls": s(V),
      "aria-expanded": s(fe) ? "true" : "false",
      "aria-describedby": s(B),
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
      () => it(N, "anchor$")
    ]
  );
  var Hn = se(ot);
  {
    var Lt = (P) => {
      var _e = $g();
      O(P, _e);
    };
    ae(Hn, (P) => {
      f() === "filled" && P(Lt);
    });
  }
  var _t = Ie(Hn, 2);
  {
    var Pt = (P) => {
      {
        let _e = /* @__PURE__ */ ge(() => E() + "-smui-label"), ft = /* @__PURE__ */ ge(() => n() !== ""), Ot = /* @__PURE__ */ ge(() => it(N, "label$"));
        Ee(
          bo(P, nt(
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
                var ra = ne(), Ii = Z(ra);
                {
                  var Wr = (qr) => {
                  }, Go = (qr) => {
                    var Fa = ne(), ia = Z(Fa);
                    {
                      var sl = (Er) => {
                        var zr = Rt();
                        Oe(() => at(zr, h())), O(Er, zr);
                      }, Va = (Er) => {
                        var zr = ne(), Wo = Z(zr);
                        Se(Wo, h), O(Er, zr);
                      };
                      ae(
                        ia,
                        (Er) => {
                          typeof h() == "string" ? Er(sl) : Er(Va, !1);
                        },
                        !0
                      );
                    }
                    O(qr, Fa);
                  };
                  ae(Ii, (qr) => {
                    h() == null ? qr(Wr) : qr(Go, !1);
                  });
                }
                O(ir, ra);
              },
              $$slots: { default: !0 }
            }
          )),
          (ir) => U = ir,
          () => U
        );
      }
    };
    ae(_t, (P) => {
      f() !== "outlined" && !m() && h() != null && P(Pt);
    });
  }
  var sn = Ie(_t, 2);
  {
    var Bt = (P) => {
      {
        let _e = /* @__PURE__ */ ge(() => m() || h() == null), ft = /* @__PURE__ */ ge(() => it(N, "outline$"));
        Ee(
          $c(P, nt(
            {
              get noLabel() {
                return s(_e);
              }
            },
            () => s(ft),
            {
              children: (Ot, ir) => {
                var ar = ne(), ra = Z(ar);
                {
                  var Ii = (Wr) => {
                    {
                      let Go = /* @__PURE__ */ ge(() => E() + "-smui-label"), qr = /* @__PURE__ */ ge(() => n() !== ""), Fa = /* @__PURE__ */ ge(() => it(N, "label$"));
                      Ee(
                        bo(Wr, nt(
                          {
                            get id() {
                              return s(Go);
                            },
                            get floatAbove() {
                              return s(qr);
                            },
                            get required() {
                              return _();
                            }
                          },
                          () => s(Fa),
                          {
                            children: (ia, sl) => {
                              var Va = ne(), Er = Z(Va);
                              {
                                var zr = (aa) => {
                                }, Wo = (aa) => {
                                  var ll = ne(), Ld = Z(ll);
                                  {
                                    var Od = (Ei) => {
                                      var oa = Rt();
                                      Oe(() => at(oa, h())), O(Ei, oa);
                                    }, Rd = (Ei) => {
                                      var oa = ne(), Md = Z(oa);
                                      Se(Md, h), O(Ei, oa);
                                    };
                                    ae(
                                      Ld,
                                      (Ei) => {
                                        typeof h() == "string" ? Ei(Od) : Ei(Rd, !1);
                                      },
                                      !0
                                    );
                                  }
                                  O(aa, ll);
                                };
                                ae(Er, (aa) => {
                                  h() == null ? aa(zr) : aa(Wo, !1);
                                });
                              }
                              O(ia, Va);
                            },
                            $$slots: { default: !0 }
                          }
                        )),
                        (ia) => U = ia,
                        () => U
                      );
                    }
                  };
                  ae(ra, (Wr) => {
                    !m() && h() != null && Wr(Ii);
                  });
                }
                O(Ot, ar);
              },
              $$slots: { default: !0 }
            }
          )),
          (Ot) => he = Ot,
          () => he
        );
      }
    };
    ae(sn, (P) => {
      f() === "outlined" && P(Bt);
    });
  }
  var ln = Ie(sn, 2);
  Se(ln, () => e.leadingIcon ?? pe);
  var Yt = Ie(ln, 2);
  ke(Yt, (P, _e) => ({ class: P, ..._e }), [
    () => De({
      "mdc-select__selected-text-container": !0,
      [K()]: !0
    }),
    () => it(N, "selectedTextContainer$")
  ]);
  var qn = se(Yt);
  ke(
    qn,
    (P, _e) => ({
      id: E() + "-smui-selected-text",
      class: P,
      role: "button",
      "aria-haspopup": "listbox",
      "aria-labelledby": E() + "-smui-label",
      ..._e
    }),
    [
      () => De({
        "mdc-select__selected-text": !0,
        [D()]: !0
      }),
      () => it(N, "selectedText$")
    ]
  );
  var Gr = se(qn);
  Me(qn, (P, _e) => q == null ? void 0 : q(P, _e), j), Me(Yt, (P, _e) => q == null ? void 0 : q(P, _e), k);
  var un = Ie(Yt, 2);
  ke(un, (P, _e) => ({ class: P, ..._e }), [
    () => De({
      "mdc-select__dropdown-icon": !0,
      [x()]: !0
    }),
    () => it(N, "dropdownIcon$")
  ]), Me(un, (P, _e) => q == null ? void 0 : q(P, _e), w);
  var Gt = Ie(un, 2);
  {
    var pn = (P) => {
      {
        let _e = /* @__PURE__ */ ge(() => it(N, "ripple$"));
        Ee(Jc(P, nt(() => s(_e))), (ft) => z = ft, () => z);
      }
    };
    ae(Gt, (P) => {
      f() !== "outlined" && d() && P(pn);
    });
  }
  Ee(ot, (P) => Ae = P, () => Ae), Me(ot, (P, _e) => q == null ? void 0 : q(P, _e), C);
  var rr = Ie(ot, 2);
  {
    let P = /* @__PURE__ */ ge(() => De({
      "mdc-select__menu": !0,
      ...we,
      [M()]: !0
    })), _e = /* @__PURE__ */ ge(() => it(N, "menu$"));
    jg(rr, nt(
      {
        get class() {
          return s(P);
        },
        get id() {
          return s(V);
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
            let ir = /* @__PURE__ */ ge(() => it(N, "list$"));
            Gg(ft, nt(
              {
                role: "listbox",
                get wrapFocus() {
                  return s(Pe);
                }
              },
              () => s(ir),
              {
                get selectedIndex() {
                  return s(F);
                },
                set selectedIndex(ar) {
                  X(F, ar, !0);
                },
                children: (ar, ra) => {
                  var Ii = ne(), Wr = Z(Ii);
                  Se(Wr, () => e.children ?? pe), O(ar, Ii);
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
  Ee($e, (P) => J = P, () => J), Me($e, (P, _e) => Xt == null ? void 0 : Xt(P, _e), () => ({
    ripple: f() === "filled",
    unbounded: !1,
    addClass: le,
    removeClass: ye,
    addStyle: Y
  })), Me($e, (P, _e) => is == null ? void 0 : is(P, _e), () => ({ addClass: le, removeClass: ye })), Me($e, (P, _e) => q == null ? void 0 : q(P, _e), u);
  var na = Ie($e, 2);
  {
    var jo = (P) => {
      {
        let _e = /* @__PURE__ */ ge(() => it(N, "helperText$"));
        Zg(P, nt(() => s(_e), {
          children: (ft, Ot) => {
            var ir = ne(), ar = Z(ir);
            Se(ar, () => e.helperText ?? pe), O(ft, ir);
          },
          $$slots: { default: !0 }
        }));
      }
    };
    ae(na, (P) => {
      e.helperText && P(jo);
    });
  }
  Oe(() => at(Gr, n())), O(t, Qe);
  var Ir = xe(ze);
  return i(), Ir;
}
function np(t, e) {
  Ce(e, !0);
  const n = () => Jn(d, "$selectedValue", r), [r, i] = br();
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
  rt(f), Dn(f);
  function f() {
    s(v) && l && di(c, l.getPrimaryText());
  }
  function m() {
    return l.getElement();
  }
  var h = { getElement: m };
  Ee(
    Xg(t, nt(
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
          Se(I, () => e.children ?? pe), O(b, S);
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
function rp(t, e) {
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
  tp(t, {
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
      Ln(m, 17, n, Li, (h, g, b) => {
        {
          let y = /* @__PURE__ */ ge(() => c(b));
          np(h, {
            get onclick() {
              return s(y);
            },
            get value() {
              return s(g).value;
            },
            children: (S, I) => {
              var _ = Rt();
              Oe(() => at(_, s(g).label)), O(S, _);
            },
            $$slots: { default: !0 }
          });
        }
      }), O(d, f);
    },
    $$slots: { default: !0 }
  }), xe();
}
const ip = en([]);
ip.subscribe;
ce({ freeze: !1 });
var ap = /* @__PURE__ */ de("<div><!></div>");
function op(t, e) {
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
  var f = { getElement: v }, m = ap();
  ke(m, (g) => ({ class: g, ...c }), [
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
  return Se(h, () => e.children ?? pe), Ee(m, (g) => d = g, () => d), Me(m, (g, b) => q == null ? void 0 : q(g, b), n), O(t, m), xe(f);
}
const Ft = [];
for (let t = 0; t < 256; ++t)
  Ft.push((t + 256).toString(16).slice(1));
function sp(t, e = 0) {
  return (Ft[t[e + 0]] + Ft[t[e + 1]] + Ft[t[e + 2]] + Ft[t[e + 3]] + "-" + Ft[t[e + 4]] + Ft[t[e + 5]] + "-" + Ft[t[e + 6]] + Ft[t[e + 7]] + "-" + Ft[t[e + 8]] + Ft[t[e + 9]] + "-" + Ft[t[e + 10]] + Ft[t[e + 11]] + Ft[t[e + 12]] + Ft[t[e + 13]] + Ft[t[e + 14]] + Ft[t[e + 15]]).toLowerCase();
}
let as;
const lp = new Uint8Array(16);
function up() {
  if (!as) {
    if (typeof crypto > "u" || !crypto.getRandomValues)
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    as = crypto.getRandomValues.bind(crypto);
  }
  return as(lp);
}
const cp = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), iu = { randomUUID: cp };
function dp(t, e, n) {
  var i;
  if (iu.randomUUID && !e && !t)
    return iu.randomUUID();
  t = t || {};
  const r = t.random ?? ((i = t.rng) == null ? void 0 : i.call(t)) ?? up();
  if (r.length < 16)
    throw new Error("Random bytes length must be >= 16");
  if (r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, e) {
    if (n = n || 0, n < 0 || n + 16 > e.length)
      throw new RangeError(`UUID byte range ${n}:${n + 15} is out of buffer bounds`);
    for (let a = 0; a < 16; ++a)
      e[n + a] = r[a];
    return e;
  }
  return sp(r);
}
var fp = /* @__PURE__ */ de('<span class="oscd-icon"><!></span>');
function Gn(t, e) {
  var n = fp(), r = se(n);
  Se(r, () => e.children ?? pe), O(t, n);
}
var hp = /* @__PURE__ */ rn('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"></path></svg>');
function vp(t, e) {
  let n = p(e, "svgStyles", 3, "");
  Gn(t, {
    children: (r, i) => {
      var a = hp();
      Oe(() => Ut(a, n())), O(r, a);
    }
  });
}
var mp = /* @__PURE__ */ rn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"></path></svg>');
function rd(t, e) {
  let n = p(e, "svgStyles", 3, "");
  Gn(t, {
    children: (r, i) => {
      var a = mp();
      Oe(() => Ut(a, n())), O(r, a);
    }
  });
}
var gp = /* @__PURE__ */ rn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z"></path></svg>');
function pp(t, e) {
  let n = p(e, "svgStyles", 3, "");
  Gn(t, {
    children: (r, i) => {
      var a = gp();
      Oe(() => Ut(a, n())), O(r, a);
    }
  });
}
var bp = /* @__PURE__ */ rn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="m590-160 80 80H240q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h360l200 240v480q0 20-8.5 36.5T768-96L560-302q-17 11-37 16.5t-43 5.5q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 23-5.5 43T618-360l102 104v-356L562-800H240v640h350ZM480-360q33 0 56.5-23.5T560-440q0-33-23.5-56.5T480-520q-33 0-56.5 23.5T400-440q0 33 23.5 56.5T480-360Zm0-80Zm0 0Z"></path></svg>');
function _p(t, e) {
  let n = p(e, "svgStyles", 3, "");
  Gn(t, {
    children: (r, i) => {
      var a = bp();
      Oe(() => Ut(a, n())), O(r, a);
    }
  });
}
var yp = /* @__PURE__ */ rn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-160q-134 0-227-93t-93-227q0-134 93-227t227-93q69 0 132 28.5T720-690v-110h80v280H520v-80h168q-32-56-87.5-88T480-720q-100 0-170 70t-70 170q0 100 70 170t170 70q77 0 139-44t87-116h84q-28 106-114 173t-196 67Z"></path></svg>');
function Ip(t, e) {
  let n = p(e, "svgStyles", 3, "");
  Gn(t, {
    children: (r, i) => {
      var a = yp();
      Oe(() => Ut(a, n())), O(r, a);
    }
  });
}
var Ep = /* @__PURE__ */ rn('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M200-440v-80h560v80H200Z"></path></svg>');
function Sp(t, e) {
  let n = p(e, "svgStyles", 3, "");
  Gn(t, {
    children: (r, i) => {
      var a = Ep();
      Oe(() => Ut(a, n())), O(r, a);
    }
  });
}
var Ap = /* @__PURE__ */ rn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"></path></svg>');
function Cp(t, e) {
  let n = p(e, "svgStyles", 3, "");
  Gn(t, {
    children: (r, i) => {
      var a = Ap();
      Oe(() => Ut(a, n())), O(r, a);
    }
  });
}
var xp = /* @__PURE__ */ rn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"></path></svg>');
function Tp(t, e) {
  let n = p(e, "svgStyles", 3, "");
  Gn(t, {
    children: (r, i) => {
      var a = xp();
      Oe(() => Ut(a, n())), O(r, a);
    }
  });
}
af();
var wp = /* @__PURE__ */ rn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"></path></svg>');
function Lp(t, e) {
  let n = p(e, "svgStyles", 3, "");
  Gn(t, {
    children: (r, i) => {
      var a = wp();
      Oe(() => Ut(a, n())), O(r, a);
    }
  });
}
var Op = /* @__PURE__ */ rn('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3" cursor="pointer"><path d="M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160Zm40 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"></path></svg>');
function Rp(t, e) {
  let n = p(e, "svgStyles", 8, "");
  Gn(t, {
    children: (r, i) => {
      var a = Op();
      Oe(() => Ut(a, n())), O(r, a);
    }
  });
}
var Mp = /* @__PURE__ */ rn('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m480-240 160-160-56-56-64 64v-168h-80v168l-64-64-56 56 160 160ZM200-640v440h560v-440H200Zm0 520q-33 0-56.5-23.5T120-200v-499q0-14 4.5-27t13.5-24l50-61q11-14 27.5-21.5T250-840h460q18 0 34.5 7.5T772-811l50 61q9 11 13.5 24t4.5 27v499q0 33-23.5 56.5T760-120H200Zm16-600h528l-34-40H250l-34 40Zm264 300Z"></path></svg>');
function Dp(t, e) {
  let n = p(e, "svgStyles", 8, "");
  Gn(t, {
    children: (r, i) => {
      var a = Mp();
      Oe(() => Ut(a, n())), O(r, a);
    }
  });
}
function Pp(t, e) {
  e(t.target.value);
}
var Np = /* @__PURE__ */ de('<div class="custom-text-field svelte-1719vm0"><input type="date" id="datetime-picker" class="custom-text-field__input svelte-1719vm0" placeholder=""/> <label for="datetime-picker" class="custom-floating-label svelte-1719vm0"> </label> <span class="custom-line svelte-1719vm0"></span></div>');
function Hp(t, e) {
  Ce(e, !0);
  let n = p(e, "label", 3, ""), r = p(e, "value", 15, "");
  var i = Np(), a = se(i);
  a.__change = [Pp, r];
  var o = Ie(a, 2), u = se(o);
  Oe(() => at(u, n())), Ea(a, r), O(t, i), xe();
}
Sn(["change"]);
function Up(t, e) {
  e(t.target.value);
}
var kp = /* @__PURE__ */ de('<div class="custom-text-field svelte-6wdfbb"><input type="datetime-local" id="datetime-picker" class="custom-text-field__input svelte-6wdfbb" placeholder=""/> <label for="datetime-picker" class="custom-floating-label svelte-6wdfbb"> </label> <span class="custom-line svelte-6wdfbb"></span></div>');
function Bp(t, e) {
  Ce(e, !0);
  let n = p(e, "label", 3, ""), r = p(e, "value", 15, "");
  var i = kp(), a = se(i);
  a.__change = [Up, r];
  var o = Ie(a, 2), u = se(o);
  Oe(() => at(u, n())), Ea(a, r), O(t, i), xe();
}
Sn(["change"]);
var Fp = /* @__PURE__ */ de('<details class="svelte-1sq8fnx"><summary class="svelte-1sq8fnx"> </summary> <div class="expandable-content svelte-1sq8fnx"><!></div></details>');
function id(t, e) {
  Ce(e, !0);
  let n = p(e, "title", 3, ""), r = p(e, "open", 11, !1);
  op(t, {
    children: (i, a) => {
      var o = Fp(), u = se(o), l = se(u), c = Ie(u, 2), d = se(c);
      Se(d, () => e.content ?? pe), Oe(() => {
        o.open = r(), at(l, n());
      }), O(i, o);
    },
    $$slots: { default: !0 }
  }), xe();
}
function Vp(t, e, n, r) {
  e() && ((t.key === "Enter" || t.key === " ") && (t.preventDefault(), n()), t.key === "Escape" && (t.preventDefault(), r()));
}
var jp = /* @__PURE__ */ de('<span role="button" tabindex="0" aria-labelledby="tooltip"><!></span>');
function _o(t, e) {
  Ce(e, !0);
  let n = p(e, "content", 3, ""), r = p(e, "side", 3, "top"), i = p(e, "hoverDelay", 3, 0), a = p(e, "transitionDuration", 3, 80), o = p(e, "disabled", 3, !1), u = p(e, "offset", 3, 8), l = p(e, "backgroundColor", 3, "#000"), c = p(e, "paddingY", 3, 6), d = p(e, "paddingX", 3, 10), v = p(e, "textColor", 3, "#fff");
  const f = `tt-${Math.random().toString(36).slice(2)}`;
  let m = /* @__PURE__ */ ve(null), h = /* @__PURE__ */ ve(null), g = /* @__PURE__ */ ve(null), b = /* @__PURE__ */ ve(null), y = /* @__PURE__ */ ve(!1), S = /* @__PURE__ */ ve(null), I = /* @__PURE__ */ ve(null);
  function _(x) {
    var G;
    if (!x || !x.trim().startsWith("var(")) return x;
    const M = x.match(/^var\(\s*([^,\s)]+)\s*(?:,\s*([^)]+)\s*)?\)$/);
    if (!M) return x;
    const N = M[1], W = (G = M[2]) == null ? void 0 : G.trim(), J = s(m) ? getComputedStyle(s(m)).getPropertyValue(N) : "", H = getComputedStyle(document.documentElement).getPropertyValue(N), R = (J || H).trim();
    return R || W || x;
  }
  function E() {
    !n() || o() || (s(S) && clearTimeout(s(S)), i() > 0 ? X(S, setTimeout(() => X(y, !0), i()), !0) : X(y, !0));
  }
  function A() {
    s(S) && clearTimeout(s(S)), X(y, !1);
  }
  function L() {
    E();
  }
  function C() {
    A();
  }
  function T() {
    E();
  }
  function k() {
    A();
  }
  function K() {
    if (!s(h) || !s(b) || !s(m) || o()) return;
    const x = s(m).getBoundingClientRect(), M = s(b).getBoundingClientRect();
    let N = 0, W = 0;
    const J = u();
    switch (r()) {
      case "top":
        N = x.top - M.height - J, W = x.left + x.width / 2 - M.width / 2;
        break;
      case "bottom":
        N = x.bottom + J, W = x.left + x.width / 2 - M.width / 2;
        break;
      case "left":
        N = x.top + x.height / 2 - M.height / 2, W = x.left - M.width - J;
        break;
      case "right":
        N = x.top + x.height / 2 - M.height / 2, W = x.right + J;
        break;
    }
    s(h).style.top = `${N + window.scrollY}px`, s(h).style.left = `${W + window.scrollX}px`;
  }
  function j() {
    var x;
    (x = s(I)) == null || x.disconnect(), X(I, null), s(h) && s(h).parentNode && s(h).parentNode.removeChild(s(h)), X(h, null), X(b, null), X(g, null), s(S) && clearTimeout(s(S));
  }
  Dn(j), Te(() => {
    if (!(!s(y) || !n() || o())) {
      if (!s(h)) {
        X(h, document.createElement("div"), !0), s(h).style.position = "absolute", s(h).style.zIndex = "9999", s(h).style.pointerEvents = "none", s(h).style.opacity = "0", s(h).style.transition = `opacity ${a()}ms ease`, s(h).id = f, s(h).setAttribute("role", "tooltip"), document.body.appendChild(s(h)), X(g, s(h).attachShadow({ mode: "open" }), !0);
        const x = document.createElement("style"), M = _(l()), N = _(v());
        x.textContent = `
        .bubble {
          --pad-y: ${c()}px;
          --pad-x: ${d()}px;
          --radius: 4px;
          --bg: ${M};
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
      `, s(g).appendChild(x), X(b, document.createElement("div"), !0), s(g).appendChild(s(b)), X(
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
    const x = s(h), M = setTimeout(
      () => {
        x && x.parentNode && x.parentNode.removeChild(x), s(h) === x && j();
      },
      a()
    );
    return () => clearTimeout(M);
  });
  var D = jp();
  D.__keydown = [Vp, n, E, A];
  var w = se(D);
  Se(w, () => e.children ?? pe), Ee(D, (x) => X(m, x), () => s(m)), Oe(() => {
    Dr(D, "aria-describedby", n() && !o() ? f : void 0), Dr(D, "aria-haspopup", n() ? "true" : void 0), Dr(D, "aria-expanded", n() ? s(y) ? "true" : "false" : void 0);
  }), ma("mouseenter", D, L), ma("mouseleave", D, C), ma("focus", D, T), ma("blur", D, k), O(t, D), xe();
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
var da = {
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
}, au = {
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
var Gp = (
  /** @class */
  function(t) {
    Ve(e, t);
    function e(n) {
      var r = t.call(this, ue(ue({}, e.defaultAdapter), n)) || this;
      return r.currentCheckState = An.TRANSITION_STATE_INIT, r.currentAnimationClass = "", r.animEndLatchTimer = 0, r.enableAnimationEndHandler = !1, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return da;
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
        return au;
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
      this.currentCheckState = this.determineCheckState(), this.updateAriaChecked(), this.adapter.addClass(da.UPGRADED);
    }, e.prototype.destroy = function() {
      clearTimeout(this.animEndLatchTimer);
    }, e.prototype.setDisabled = function(n) {
      this.adapter.setNativeControlDisabled(n), n ? this.adapter.addClass(da.DISABLED) : this.adapter.removeClass(da.DISABLED);
    }, e.prototype.handleAnimationEnd = function() {
      var n = this;
      this.enableAnimationEndHandler && (clearTimeout(this.animEndLatchTimer), this.animEndLatchTimer = setTimeout(function() {
        n.adapter.removeClass(n.currentAnimationClass), n.enableAnimationEndHandler = !1;
      }, au.ANIM_END_LATCH_MS));
    }, e.prototype.handleChange = function() {
      this.transitionCheckState();
    }, e.prototype.transitionCheckState = function() {
      if (this.adapter.hasNativeControl()) {
        var n = this.currentCheckState, r = this.determineCheckState();
        if (n !== r) {
          this.updateAriaChecked();
          var i = An.TRANSITION_STATE_UNCHECKED, a = da.SELECTED;
          r === i ? this.adapter.removeClass(a) : this.adapter.addClass(a), this.currentAnimationClass.length > 0 && (clearTimeout(this.animEndLatchTimer), this.adapter.forceLayout(), this.adapter.removeClass(this.currentAnimationClass)), this.currentAnimationClass = this.getTransitionAnimationClass(n, r), this.currentCheckState = r, this.adapter.isAttachedToDOM() && this.currentAnimationClass.length > 0 && (this.adapter.addClass(this.currentAnimationClass), this.enableAnimationEndHandler = !0);
        }
      }
    }, e.prototype.determineCheckState = function() {
      var n = An.TRANSITION_STATE_INDETERMINATE, r = An.TRANSITION_STATE_CHECKED, i = An.TRANSITION_STATE_UNCHECKED;
      return this.adapter.isIndeterminate() ? n : this.adapter.isChecked() ? r : i;
    }, e.prototype.getTransitionAnimationClass = function(n, r) {
      var i = An.TRANSITION_STATE_INIT, a = An.TRANSITION_STATE_CHECKED, o = An.TRANSITION_STATE_UNCHECKED, u = e.cssClasses, l = u.ANIM_UNCHECKED_CHECKED, c = u.ANIM_UNCHECKED_INDETERMINATE, d = u.ANIM_CHECKED_UNCHECKED, v = u.ANIM_CHECKED_INDETERMINATE, f = u.ANIM_INDETERMINATE_CHECKED, m = u.ANIM_INDETERMINATE_UNCHECKED;
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
      this.adapter.isIndeterminate() ? this.adapter.setNativeControlAttr(An.ARIA_CHECKED_ATTR, An.ARIA_CHECKED_INDETERMINATE_VALUE) : this.adapter.removeNativeControlAttr(An.ARIA_CHECKED_ATTR);
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
var _n = {
  CLOSED_CLASS: "mdc-linear-progress--closed",
  CLOSED_ANIMATION_OFF_CLASS: "mdc-linear-progress--closed-animation-off",
  INDETERMINATE_CLASS: "mdc-linear-progress--indeterminate",
  REVERSED_CLASS: "mdc-linear-progress--reversed",
  ANIMATION_READY_CLASS: "mdc-linear-progress--animation-ready"
}, Un = {
  ARIA_HIDDEN: "aria-hidden",
  ARIA_VALUEMAX: "aria-valuemax",
  ARIA_VALUEMIN: "aria-valuemin",
  ARIA_VALUENOW: "aria-valuenow",
  BUFFER_BAR_SELECTOR: ".mdc-linear-progress__buffer-bar",
  FLEX_BASIS: "flex-basis",
  PRIMARY_BAR_SELECTOR: ".mdc-linear-progress__primary-bar"
}, fa = {
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
var Wp = (
  /** @class */
  function(t) {
    Ve(e, t);
    function e(n) {
      var r = t.call(this, ue(ue({}, e.defaultAdapter), n)) || this;
      return r.observer = null, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return _n;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Un;
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
      this.determinate = !this.adapter.hasClass(_n.INDETERMINATE_CLASS), this.adapter.addClass(_n.ANIMATION_READY_CLASS), this.progress = 0, this.buffer = 1, this.observer = this.adapter.attachResizeObserver(function(r) {
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
        this.adapter.removeClass(_n.INDETERMINATE_CLASS), this.adapter.setAttribute(Un.ARIA_VALUENOW, this.progress.toString()), this.adapter.setAttribute(Un.ARIA_VALUEMAX, "1"), this.adapter.setAttribute(Un.ARIA_VALUEMIN, "0"), this.setPrimaryBarProgress(this.progress), this.setBufferBarProgress(this.buffer);
        return;
      }
      this.observer && this.calculateAndSetDimensions(this.adapter.getWidth()), this.adapter.addClass(_n.INDETERMINATE_CLASS), this.adapter.removeAttribute(Un.ARIA_VALUENOW), this.adapter.removeAttribute(Un.ARIA_VALUEMAX), this.adapter.removeAttribute(Un.ARIA_VALUEMIN), this.setPrimaryBarProgress(1), this.setBufferBarProgress(1);
    }, e.prototype.isDeterminate = function() {
      return this.determinate;
    }, e.prototype.setProgress = function(n) {
      this.progress = n, this.determinate && (this.setPrimaryBarProgress(n), this.adapter.setAttribute(Un.ARIA_VALUENOW, n.toString()));
    }, e.prototype.getProgress = function() {
      return this.progress;
    }, e.prototype.setBuffer = function(n) {
      this.buffer = n, this.determinate && this.setBufferBarProgress(n);
    }, e.prototype.getBuffer = function() {
      return this.buffer;
    }, e.prototype.open = function() {
      this.adapter.removeClass(_n.CLOSED_CLASS), this.adapter.removeClass(_n.CLOSED_ANIMATION_OFF_CLASS), this.adapter.removeAttribute(Un.ARIA_HIDDEN);
    }, e.prototype.close = function() {
      this.adapter.addClass(_n.CLOSED_CLASS), this.adapter.setAttribute(Un.ARIA_HIDDEN, "true");
    }, e.prototype.isClosed = function() {
      return this.adapter.hasClass(_n.CLOSED_CLASS);
    }, e.prototype.handleTransitionEnd = function() {
      this.adapter.hasClass(_n.CLOSED_CLASS) && this.adapter.addClass(_n.CLOSED_ANIMATION_OFF_CLASS);
    }, e.prototype.destroy = function() {
      t.prototype.destroy.call(this), this.observer && this.observer.disconnect();
    }, e.prototype.restartAnimation = function() {
      this.adapter.removeClass(_n.ANIMATION_READY_CLASS), this.adapter.forceLayout(), this.adapter.addClass(_n.ANIMATION_READY_CLASS);
    }, e.prototype.setPrimaryBarProgress = function(n) {
      var r = "scaleX(" + n + ")", i = typeof window < "u" ? Ng(window, "transform") : "transform";
      this.adapter.setPrimaryBarStyle(i, r);
    }, e.prototype.setBufferBarProgress = function(n) {
      var r = n * 100 + "%";
      this.adapter.setBufferBarStyle(Un.FLEX_BASIS, r);
    }, e.prototype.calculateAndSetDimensions = function(n) {
      var r = n * fa.PRIMARY_HALF, i = n * fa.PRIMARY_FULL, a = n * fa.SECONDARY_QUARTER, o = n * fa.SECONDARY_HALF, u = n * fa.SECONDARY_FULL;
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
}, ou = {
  ARIA_SELECTED: "aria-selected",
  ARIA_SORT: "aria-sort"
}, Zr = {
  ARIA_SELECTED: ou.ARIA_SELECTED,
  ARIA_SORT: ou.ARIA_SORT
}, In;
(function(t) {
  t.ASCENDING = "ascending", t.DESCENDING = "descending", t.NONE = "none", t.OTHER = "other";
})(In || (In = {}));
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
var qp = (
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
      return Ac(this, void 0, void 0, function() {
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
        o !== i && (this.adapter.removeClassNameByHeaderCellIndex(o, ur.HEADER_CELL_SORTED), this.adapter.removeClassNameByHeaderCellIndex(o, ur.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(o, Zr.ARIA_SORT, In.NONE), this.adapter.setSortStatusLabelByHeaderCellIndex(o, In.NONE));
      this.adapter.setClassNameByHeaderCellIndex(i, ur.HEADER_CELL_SORTED);
      var u = this.adapter.getAttributeByHeaderCellIndex(i, Zr.ARIA_SORT), l = In.NONE;
      u === In.ASCENDING ? (this.adapter.setClassNameByHeaderCellIndex(i, ur.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(i, Zr.ARIA_SORT, In.DESCENDING), l = In.DESCENDING) : u === In.DESCENDING ? (this.adapter.removeClassNameByHeaderCellIndex(i, ur.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(i, Zr.ARIA_SORT, In.ASCENDING), l = In.ASCENDING) : (this.adapter.setAttributeByHeaderCellIndex(i, Zr.ARIA_SORT, In.ASCENDING), l = In.ASCENDING), this.adapter.setSortStatusLabelByHeaderCellIndex(i, l), this.adapter.notifySortAction({
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
      r ? (this.adapter.addClassAtRowIndex(n, ur.ROW_SELECTED), this.adapter.setAttributeAtRowIndex(n, Zr.ARIA_SELECTED, "true")) : (this.adapter.removeClassAtRowIndex(n, ur.ROW_SELECTED), this.adapter.setAttributeAtRowIndex(n, Zr.ARIA_SELECTED, "false"));
    }, e;
  }(Tt)
), zp = /* @__PURE__ */ de('<div class="mdc-data-table__progress-indicator"><div class="mdc-data-table__scrim"></div> <!></div>'), Xp = /* @__PURE__ */ de("<div><div><table><!></table></div> <!> <!></div>");
function Kp(t, e) {
  Ce(e, !0);
  const n = () => Jn(D, "$progressClosed", r), [r, i] = br(), { closest: a } = Ua;
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
  ]), I, _ = /* @__PURE__ */ ve(void 0), E, A = /* @__PURE__ */ ve(void 0), L = /* @__PURE__ */ ve(void 0), C = ce({}), T = /* @__PURE__ */ ve(ce({ height: "auto", top: "initial" })), k = me("SMUI:addLayoutListener"), K, j = !1, D = en(!1), w = en(d());
  Te(() => {
    di(w, d());
  });
  let x = en(v());
  Te(() => {
    di(x, v());
  }), oe("SMUI:checkbox:context", "data-table"), oe("SMUI:linear-progress:context", "data-table"), oe("SMUI:linear-progress:closed", D), oe("SMUI:data-table:sortable", c()), oe("SMUI:data-table:sort", w), oe("SMUI:data-table:sortDirection", x), oe("SMUI:data-table:sortAscendingAriaLabel", f()), oe("SMUI:data-table:sortDescendingAriaLabel", m()), k && (K = k(be));
  let M;
  Te(() => {
    e.progress && s(_) && M !== n() && (M = n(), n() ? s(_).hideProgress() : s(_).showProgress());
  }), oe("SMUI:checkbox:mount", () => {
    s(_) && j && s(_).layout();
  }), oe("SMUI:data-table:header:mount", (U) => {
    X(A, U, !0);
  }), oe("SMUI:data-table:header:unmount", () => {
    X(A, void 0);
  }), oe("SMUI:data-table:body:mount", (U) => {
    X(L, U, !0);
  }), oe("SMUI:data-table:body:unmount", () => {
    X(L, void 0);
  }), rt(() => (X(
    _,
    new qp({
      addClass: W,
      removeClass: J,
      getHeaderCellElements: () => {
        var U;
        return ((U = s(A)) == null ? void 0 : U.cells.map((z) => z.element)) ?? [];
      },
      getHeaderCellCount: () => {
        var U;
        return ((U = s(A)) == null ? void 0 : U.cells.length) ?? 0;
      },
      getAttributeByHeaderCellIndex: (U, z) => {
        var he;
        return ((he = s(A)) == null ? void 0 : he.orderedCells[U].getAttr(z)) ?? null;
      },
      setAttributeByHeaderCellIndex: (U, z, he) => {
        var Re;
        (Re = s(A)) == null || Re.orderedCells[U].addAttr(z, he);
      },
      setClassNameByHeaderCellIndex: (U, z) => {
        var he;
        (he = s(A)) == null || he.orderedCells[U].addClass(z);
      },
      removeClassNameByHeaderCellIndex: (U, z) => {
        var he;
        (he = s(A)) == null || he.orderedCells[U].removeClass(z);
      },
      notifySortAction: (U) => {
        d(U.columnId), v(U.sortValue), Je(F(), "SMUIDataTableSorted", U);
      },
      getTableContainerHeight: () => E.getBoundingClientRect().height,
      getTableHeaderHeight: () => {
        const U = F().querySelector(".mdc-data-table__header-row");
        if (!U)
          throw new Error("MDCDataTable: Table header element not found.");
        return U.getBoundingClientRect().height;
      },
      setProgressIndicatorStyles: (U) => {
        X(T, U, !0);
      },
      addClassAtRowIndex: (U, z) => {
        var he;
        (he = s(L)) == null || he.orderedRows[U].addClass(z);
      },
      getRowCount: () => {
        var U;
        return ((U = s(L)) == null ? void 0 : U.rows.length) ?? 0;
      },
      getRowElements: () => {
        var U;
        return ((U = s(L)) == null ? void 0 : U.rows.map((z) => z.element)) ?? [];
      },
      getRowIdAtIndex: (U) => {
        var z;
        return ((z = s(L)) == null ? void 0 : z.orderedRows[U].rowId) ?? null;
      },
      getRowIndexByChildElement: (U) => {
        var z;
        return ((z = s(L)) == null ? void 0 : z.orderedRows.map((he) => he.element).indexOf(a(U, ".mdc-data-table__row"))) ?? -1;
      },
      getSelectedRowCount: () => {
        var U;
        return ((U = s(L)) == null ? void 0 : U.rows.filter((z) => z.selected).length) ?? 0;
      },
      isCheckboxAtRowIndexChecked: (U) => {
        var he;
        const z = (he = s(L)) == null ? void 0 : he.orderedRows[U].checkbox;
        return z ? z.checked : !1;
      },
      isHeaderRowCheckboxChecked: () => {
        var z;
        const U = (z = s(A)) == null ? void 0 : z.checkbox;
        return U ? U.checked : !1;
      },
      isRowsSelectable: () => !!F().querySelector(".mdc-data-table__row-checkbox") || !!F().querySelector(".mdc-data-table__header-row-checkbox"),
      notifyRowSelectionChanged: (U) => {
        var he;
        const z = (he = s(L)) == null ? void 0 : he.orderedRows[U.rowIndex];
        z && Je(F(), "SMUIDataTableSelectionChanged", {
          row: z.element,
          rowId: z.rowId,
          rowIndex: U.rowIndex,
          selected: U.selected
        });
      },
      notifySelectedAll: () => {
        H(!1), Je(F(), "SMUIDataTableSelectedAll");
      },
      notifyUnselectedAll: () => {
        H(!1), Je(F(), "SMUIDataTableUnselectedAll");
      },
      notifyRowClick: (U) => Je(F(), "SMUIDataTableClickRow", U),
      registerHeaderRowCheckbox: () => {
      },
      registerRowCheckboxes: () => {
      },
      removeClassAtRowIndex: (U, z) => {
        var he;
        (he = s(L)) == null || he.orderedRows[U].removeClass(z);
      },
      setAttributeAtRowIndex: (U, z, he) => {
        var Re;
        (Re = s(L)) == null || Re.orderedRows[U].addAttr(z, he);
      },
      setHeaderRowCheckboxChecked: (U) => {
        var he;
        const z = (he = s(A)) == null ? void 0 : he.checkbox;
        z && (z.checked = U);
      },
      setHeaderRowCheckboxIndeterminate: H,
      setRowCheckboxCheckedAtIndex: (U, z) => {
        var Re;
        const he = (Re = s(L)) == null ? void 0 : Re.orderedRows[U].checkbox;
        he && (he.checked = z);
      },
      setSortStatusLabelByHeaderCellIndex: (U, z) => {
      }
    }),
    !0
  ), s(_).init(), s(_).layout(), j = !0, () => {
    var U;
    (U = s(_)) == null || U.destroy();
  })), Dn(() => {
    K && K();
  });
  function N(U) {
    s(_) && s(_).handleRowCheckboxChange(U);
  }
  function W(U) {
    C[U] || (C[U] = !0);
  }
  function J(U) {
    (!(U in C) || C[U]) && (C[U] = !1);
  }
  function H(U) {
    var he;
    const z = (he = s(A)) == null ? void 0 : he.checkbox;
    z && (z.indeterminate = U);
  }
  function R(U) {
    if (!s(_) || !U.detail.target)
      return;
    const z = a(U.detail.target, ".mdc-data-table__header-cell--with-sort");
    z && Ae(z);
  }
  function G(U) {
    if (!s(_) || !U.detail.target)
      return;
    const z = a(U.detail.target, ".mdc-data-table__row");
    z && s(_) && s(_).handleRowClick({ rowId: U.detail.rowId, row: z });
  }
  function Ae(U) {
    var Fe, ct;
    const z = ((Fe = s(A)) == null ? void 0 : Fe.orderedCells) ?? [], he = z.map((pt) => pt.element).indexOf(U);
    if (he === -1)
      return;
    const Re = z[he].columnId ?? null;
    (ct = s(_)) == null || ct.handleSortAction({ columnId: Re, columnIndex: he, headerCell: U });
  }
  function be() {
    var U;
    return (U = s(_)) == null ? void 0 : U.layout();
  }
  function F() {
    return I;
  }
  var V = { layout: be, getElement: F }, B = Xp(), ee = (U) => {
    var z;
    s(_) && s(_).handleHeaderRowCheckboxChange(), (z = e.onSMUIDataTableHeaderCheckboxChange) == null || z.call(e, U);
  }, Q = (U) => {
    var z;
    R(U), (z = e.onSMUIDataTableHeaderClick) == null || z.call(e, U);
  }, fe = (U) => {
    var z;
    G(U), (z = e.onSMUIDataTableRowClick) == null || z.call(e, U);
  }, we = (U) => {
    var z;
    N(U), (z = e.onSMUIDataTableBodyCheckboxChange) == null || z.call(e, U);
  };
  ke(
    B,
    (U, z) => ({
      class: U,
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
        ...C,
        [u()]: !0
      }),
      () => tr(S, ["container$", "table$"])
    ]
  );
  var $ = se(B);
  ke($, (U, z) => ({ class: U, ...z }), [
    () => De({
      "mdc-data-table__table-container": !0,
      [g()]: !0
    }),
    () => it(S, "container$")
  ]);
  var ie = se($);
  ke(ie, (U, z) => ({ class: U, ...z }), [
    () => De({ "mdc-data-table__table": !0, [y()]: !0 }),
    () => it(S, "table$")
  ]);
  var Pe = se(ie);
  Se(Pe, () => e.children ?? pe), Me(ie, (U, z) => q == null ? void 0 : q(U, z), b), Ee($, (U) => E = U, () => E), Me($, (U, z) => q == null ? void 0 : q(U, z), h);
  var Le = Ie($, 2);
  {
    var We = (U) => {
      var z = zp(), he = Ie(se(z), 2);
      Se(he, () => e.progress ?? pe), Oe((Re) => Ut(z, Re), [
        () => Object.entries(s(T)).map(([Re, Fe]) => `${Re}: ${Fe};`).join(" ")
      ]), O(U, z);
    };
    ae(Le, (U) => {
      e.progress && U(We);
    });
  }
  var Ke = Ie(Le, 2);
  Se(Ke, () => e.paginate ?? pe), Ee(B, (U) => I = U, () => I), Me(B, (U, z) => q == null ? void 0 : q(U, z), o), O(t, B);
  var Ne = xe(V);
  return i(), Ne;
}
var Yp = /* @__PURE__ */ de("<thead><!></thead>");
function Zp(t, e) {
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
  var h = { getElement: m }, g = Yp();
  ke(g, () => ({ ...r }));
  var b = se(g);
  return Se(b, () => e.children ?? pe), Ee(g, (y) => i = y, () => i), Me(g, (y, S) => q == null ? void 0 : q(y, S), n), O(t, g), xe(h);
}
var Qp = /* @__PURE__ */ de("<tbody><!></tbody>");
function Jp(t, e) {
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
  var f = { getElement: v }, m = Qp();
  ke(m, (g) => ({ class: g, ...i }), [
    () => De({ "mdc-data-table__content": !0, [r()]: !0 })
  ]);
  var h = se(m);
  return Se(h, () => e.children ?? pe), Ee(m, (g) => a = g, () => a), Me(m, (g, b) => q == null ? void 0 : q(g, b), n), O(t, m), xe(f);
}
let $p = 0;
var eb = /* @__PURE__ */ de("<tr><!></tr>");
function Za(t, e) {
  Ce(e, !0);
  let n = p(e, "use", 19, () => []), r = p(e, "class", 3, ""), i = p(e, "rowId", 19, () => "SMUI-data-table-row-" + $p++), a = /* @__PURE__ */ qe(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "rowId",
    "children"
  ]), o, u = /* @__PURE__ */ ve(void 0), l = ce({}), c = ce({}), d = me("SMUI:data-table:row:header");
  const v = me("SMUI:checkbox:mount");
  oe("SMUI:checkbox:mount", (k) => {
    X(u, k, !0), v && v(k);
  });
  const f = me("SMUI:checkbox:unmount");
  oe("SMUI:checkbox:unmount", (k) => {
    X(u, void 0), f && f(k);
  });
  const m = me("SMUI:data-table:row:mount"), h = me("SMUI:data-table:row:unmount");
  rt(() => {
    const k = d ? {
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
    return m && m(k), () => {
      h && h(k);
    };
  });
  function g(k) {
    l[k] || (l[k] = !0);
  }
  function b(k) {
    (!(k in l) || l[k]) && (l[k] = !1);
  }
  function y(k) {
    return k in c ? c[k] ?? null : E().getAttribute(k);
  }
  function S(k, K) {
    c[k] !== K && (c[k] = K);
  }
  function I(k) {
    Je(E(), "SMUIDataTableHeaderClick", k);
  }
  function _(k) {
    Je(E(), "SMUIDataTableRowClick", { rowId: i(), target: k.target });
  }
  function E() {
    return o;
  }
  var A = { getElement: E }, L = eb(), C = (k) => {
    var K;
    d ? I(k) : _(k), (K = e.onclick) == null || K.call(e, k);
  };
  ke(
    L,
    (k) => ({
      class: k,
      "aria-selected": s(u) ? s(u).checked ? "true" : "false" : void 0,
      ...c,
      ...a,
      onclick: C
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
  var T = se(L);
  return Se(T, () => e.children ?? pe), Ee(L, (k) => o = k, () => o), Me(L, (k, K) => q == null ? void 0 : q(k, K), n), O(t, L), xe(A);
}
let tb = 0;
var nb = /* @__PURE__ */ de('<div class="mdc-data-table__header-cell-wrapper"><!> <div class="mdc-data-table__sort-status-label" aria-hidden="true"> </div></div>'), rb = /* @__PURE__ */ de("<th><!></th>"), ib = /* @__PURE__ */ de("<td><!></td>");
function ha(t, e) {
  Ce(e, !0);
  const n = () => Jn(y, "$sort", i), r = () => Jn(S, "$sortDirection", i), [i, a] = br();
  let o = me("SMUI:data-table:row:header"), u = p(e, "use", 19, () => []), l = p(e, "class", 3, ""), c = p(e, "numeric", 3, !1), d = p(e, "checkbox", 3, !1), v = p(e, "columnId", 19, () => o ? "SMUI-data-table-column-" + tb++ : "SMUI-data-table-unused"), f = p(e, "sortable", 19, () => me("SMUI:data-table:sortable")), m = /* @__PURE__ */ qe(e, [
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
  const E = me("SMUI:data-table:cell:mount"), A = me("SMUI:data-table:cell:unmount");
  rt(() => {
    const H = o ? {
      _smui_data_table_header_cell_accessor: !0,
      get element() {
        return D();
      },
      get columnId() {
        return v();
      },
      addClass: L,
      removeClass: C,
      getAttr: T,
      addAttr: k
    } : {
      _smui_data_table_header_cell_accessor: !1,
      get element() {
        return D();
      },
      get columnId() {
      },
      addClass: L,
      removeClass: C,
      getAttr: T,
      addAttr: k
    };
    return E && E(H), () => {
      A && A(H);
    };
  });
  function L(H) {
    g[H] || (g[H] = !0);
  }
  function C(H) {
    (!(H in g) || g[H]) && (g[H] = !1);
  }
  function T(H) {
    return H in b ? b[H] ?? null : D().getAttribute(H);
  }
  function k(H, R) {
    b[H] !== R && (b[H] = R);
  }
  function K(H) {
    Je(D(), "SMUIDataTableHeaderCheckboxChange", H);
  }
  function j(H) {
    Je(D(), "SMUIDataTableBodyCheckboxChange", H);
  }
  function D() {
    return h;
  }
  var w = { getElement: D }, x = ne(), M = Z(x);
  {
    var N = (H) => {
      var R = rb(), G = (V) => {
        var B;
        d() && K(V), (B = e.onchange) == null || B.call(e, V);
      };
      ke(
        R,
        (V) => ({
          class: V,
          role: "columnheader",
          scope: "col",
          "data-column-id": v(),
          "aria-sort": f() ? n() === v() ? r() : "none" : void 0,
          ...b,
          ...m,
          onchange: G
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
        var be = (V) => {
          var B = nb(), ee = se(B);
          Se(ee, () => e.children ?? pe);
          var Q = Ie(ee, 2), fe = se(Q);
          Oe(() => {
            Dr(Q, "id", `${v() ?? ""}-status-label`), at(fe, n() === v() ? r() === "ascending" ? I : _ : "");
          }), O(V, B);
        }, F = (V) => {
          var B = ne(), ee = Z(B);
          Se(ee, () => e.children ?? pe), O(V, B);
        };
        ae(Ae, (V) => {
          f() ? V(be) : V(F, !1);
        });
      }
      Ee(R, (V) => h = V, () => h), Me(R, (V, B) => q == null ? void 0 : q(V, B), u), O(H, R);
    }, W = (H) => {
      var R = ib(), G = (be) => {
        var F;
        d() && j(be), (F = e.onchange) == null || F.call(e, be);
      };
      ke(
        R,
        (be) => ({
          class: be,
          ...b,
          ...m,
          onchange: G
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
      Se(Ae, () => e.children ?? pe), Ee(R, (be) => h = be, () => h), Me(R, (be, F) => q == null ? void 0 : q(be, F), u), O(H, R);
    };
    ae(M, (H) => {
      o ? H(N) : H(W, !1);
    });
  }
  O(t, x);
  var J = xe(w);
  return a(), J;
}
var ab = /* @__PURE__ */ de('<div><div class="mdc-linear-progress__buffer"><div class="mdc-linear-progress__buffer-bar"></div> <div class="mdc-linear-progress__buffer-dots"></div></div> <div class="mdc-linear-progress__bar mdc-linear-progress__primary-bar"><span class="mdc-linear-progress__bar-inner"></span></div> <div class="mdc-linear-progress__bar mdc-linear-progress__secondary-bar"><span class="mdc-linear-progress__bar-inner"></span></div></div>');
function ad(t, e) {
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
    _ && di(_, l());
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
    new Wp({
      addClass: A,
      forceLayout: () => {
        D().getBoundingClientRect();
      },
      setBufferBarStyle: K,
      setPrimaryBarStyle: j,
      hasClass: E,
      removeAttribute: T,
      removeClass: L,
      setAttribute: C,
      setStyle: k,
      attachResizeObserver: (R) => {
        const G = window.ResizeObserver;
        if (G) {
          const Ae = new G(R);
          return Ae.observe(D()), Ae;
        }
        return null;
      },
      getWidth: () => D().offsetWidth
    }),
    !0
  ), s(m).init(), () => {
    var R;
    (R = s(m)) == null || R.destroy();
  }));
  function E(R) {
    return R in h ? h[R] : D().classList.contains(R);
  }
  function A(R) {
    h[R] || (h[R] = !0);
  }
  function L(R) {
    (!(R in h) || h[R]) && (h[R] = !1);
  }
  function C(R, G) {
    g[R] !== G && (g[R] = G);
  }
  function T(R) {
    (!(R in g) || g[R] != null) && (g[R] = void 0);
  }
  function k(R, G) {
    b[R] != G && (G === "" || G == null ? delete b[R] : b[R] = G);
  }
  function K(R, G) {
    y[R] != G && (G === "" || G == null ? delete y[R] : y[R] = G);
  }
  function j(R, G) {
    S[R] != G && (G === "" || G == null ? delete S[R] : S[R] = G);
  }
  function D() {
    return f;
  }
  var w = { getElement: D }, x = ab(), M = (R) => {
    var G;
    s(m) && s(m).handleTransitionEnd(), (G = e.ontransitionend) == null || G.call(e, R);
  };
  ke(
    x,
    (R, G) => ({
      class: R,
      style: G,
      role: "progressbar",
      "aria-valuemin": 0,
      "aria-valuemax": 1,
      "aria-valuenow": u() ? void 0 : c(),
      ...g,
      ...v,
      ontransitionend: M
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
      () => Object.entries(b).map(([R, G]) => `${R}: ${G};`).concat([o()]).join(" ")
    ]
  );
  var N = se(x), W = se(N), J = Ie(N, 2);
  Ee(x, (R) => f = R, () => f), Me(x, (R, G) => q == null ? void 0 : q(R, G), i), Oe(
    (R, G) => {
      Ut(W, R), Ut(J, G);
    },
    [
      () => Object.entries(y).map(([R, G]) => `${R}: ${G};`).join(" "),
      () => Object.entries(S).map(([R, G]) => `${R}: ${G};`).join(" ")
    ]
  ), O(t, x);
  var H = xe(w);
  return r(), H;
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
  ]), c, d = /* @__PURE__ */ ve(void 0), v = new ea(), f, m = /* @__PURE__ */ ve(void 0);
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
  ke(b, (_, E) => ({ class: _, ...E }), [
    () => De({
      "mdc-form-field": !0,
      "mdc-form-field--align-end": i() === "end",
      "mdc-form-field--nowrap": a(),
      [r()]: !0
    }),
    () => tr(l, ["label$"])
  ]);
  var y = se(b);
  Se(y, () => e.children ?? pe);
  var S = Ie(y, 2);
  ke(S, (_) => ({ for: o(), ..._ }), [() => it(l, "label$")]);
  var I = se(S);
  return Se(I, () => e.label ?? pe), Ee(S, (_) => f = _, () => f), Me(S, (_, E) => q == null ? void 0 : q(_, E), u), Ee(b, (_) => c = _, () => c), Me(b, (_, E) => q == null ? void 0 : q(_, E), n), O(t, b), xe(g);
}
Sn(["click"]);
function Ds(t, e, n) {
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
Ds({}, fb.USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT, !1);
var Qa, su = {
  DND_ZONE_ACTIVE: "dnd-zone-active",
  DND_ZONE_DRAG_DISABLED: "dnd-zone-drag-disabled"
};
Qa = {}, Ds(Qa, su.DND_ZONE_ACTIVE, "Tab to one the items and press space-bar or enter to start dragging it"), Ds(Qa, su.DND_ZONE_DRAG_DISABLED, "This is a disabled drag and drop list");
function hb(t) {
  return t * t * t;
}
function od(t) {
  const e = t - 1;
  return e * e * e + 1;
}
function vb(t, { from: e, to: n }, r = {}) {
  var { delay: i = 0, duration: a = (A) => Math.sqrt(A) * 120, easing: o = od } = r, u = getComputedStyle(t), l = u.transform === "none" ? "" : u.transform, [c, d] = u.transformOrigin.split(" ").map(parseFloat);
  c /= t.clientWidth, d /= t.clientHeight;
  var v = mb(t), f = t.clientWidth / n.width / v, m = t.clientHeight / n.height / v, h = e.left + e.width * c, g = e.top + e.height * d, b = n.left + n.width * c, y = n.top + n.height * d, S = (h - b) * f, I = (g - y) * m, _ = e.width / n.width, E = e.height / n.height;
  return {
    delay: i,
    duration: typeof a == "function" ? a(Math.sqrt(S * S + I * I)) : a,
    easing: o,
    css: (A, L) => {
      var C = L * S, T = L * I, k = A + L * _, K = A + L * E;
      return `transform: ${l} translate(${C}px, ${T}px) scale(${k}, ${K});`;
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
function lu(t) {
  const e = typeof t == "string" && t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
  return e ? [parseFloat(e[1]), e[2] || "px"] : [
    /** @type {number} */
    t,
    "px"
  ];
}
function yo(t, { delay: e = 0, duration: n = 400, easing: r = gb, x: i = 0, y: a = 0, opacity: o = 0 } = {}) {
  const u = getComputedStyle(t), l = +u.opacity, c = u.transform === "none" ? "" : u.transform, d = l * (1 - o), [v, f] = lu(i), [m, h] = lu(a);
  return {
    delay: e,
    duration: n,
    easing: r,
    css: (g, b) => `
			transform: ${c} translate(${(1 - g) * v}${f}, ${(1 - g) * m}${h});
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
    success: "var(--oscd-status-success, #4CAF50)",
    error: "var(--oscd-status-error, #F44336)",
    info: "var(--oscd-status-info, #2196F3)",
    warn: "var(--oscd-status-warning, #FF9800)"
  };
  var a = _b(), o = se(a), u = se(o);
  Os(u, {
    class: "material-icons",
    children: (g, b) => {
      var y = Rt();
      Oe(() => at(y, r[e.type])), O(g, y);
    },
    $$slots: { default: !0 }
  });
  var l = Ie(o, 2), c = se(l), d = se(c), v = Ie(c, 2);
  {
    var f = (g) => {
      var b = bb(), y = se(b);
      Oe(() => at(y, e.detail)), O(g, b);
    };
    ae(v, (g) => {
      e.detail && g(f);
    });
  }
  var m = Ie(l, 2);
  m.__click = [pb, n];
  var h = se(m);
  Os(h, {
    class: "material-icons",
    children: (g, b) => {
      var y = Rt("close");
      O(g, y);
    },
    $$slots: { default: !0 }
  }), Oe(() => {
    Ut(a, `--color:${i[e.type] ?? ""}`), at(d, e.summary);
  }), ho(1, a, () => yo, () => ({ x: 0, y: 30, duration: 150, easing: hb })), ho(2, a, () => yo, () => ({ x: 50, y: 0, duration: 150, easing: od })), O(t, a), xe();
}
Sn(["click"]);
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
const Ca = Eb();
var Sb = /* @__PURE__ */ de("<div><!></div>"), Ab = /* @__PURE__ */ de('<div class="toast-host svelte-11vwiay"></div>');
function Cb(t, e) {
  Ce(e, !1);
  const n = Ca.toasts;
  uh();
  var r = Ab();
  Ln(r, 13, () => n.items, (i) => i.id, (i, a) => {
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
      onClose: () => Ca.remove(s(a).id)
    }), sh(o, () => vb, null), O(i, o);
  }), O(t, r), xe();
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
      _o(f, {
        content: "Remove Filter",
        hoverDelay: 500,
        side: "top",
        children: (m, h) => {
          var g = wb();
          g.__click = [Tb, e];
          var b = se(g);
          rd(b, {
            svgStyles: "fill: grey; height: filt-content; width: fit-content;"
          }), O(m, g);
        },
        $$slots: { default: !0 }
      });
    }, u = (f) => {
      _o(f, {
        content: "Add Filter",
        hoverDelay: 501,
        side: "top",
        children: (m, h) => {
          Rp(m, {
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
      Lp(y, { svgStyles: "fill: gray;" }), Oe(() => at(g, e.value)), O(f, m);
    };
    ae(d, (f) => {
      s(n) && f(v);
    });
  }
  Oe(() => {
    Xs(r, 1, `filter-badge ${s(n) ? "filter-badge--active" : "filter-badge--inactive"}`, "svelte-1mybgc7"), at(c, e.label);
  }), O(t, r), xe();
}
Sn(["click"]);
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
  ]), y, S = /* @__PURE__ */ ve(void 0), I = /* @__PURE__ */ ve(void 0), _ = ce({}), E = ce({}), A = ce({}), L = /* @__PURE__ */ ve(!1), C = ce(me("SMUI:generic:input:props") ?? {}), T = /* @__PURE__ */ ve(ce(r(d()) ? r(v()) ? !1 : !!v() : d().findIndex(($) => $ === f()) !== -1)), k = me("SMUI:checkbox:context"), K = me("SMUI:data-table:row:header"), j = v(), D = r(d()) ? [] : [...d()], w = s(T);
  Te(() => {
    let $ = !1;
    if (!r(d()))
      if (w !== s(T)) {
        const ie = d().findIndex((Pe) => Pe === f());
        s(T) && ie === -1 ? d().push(f()) : !s(T) && ie !== -1 && d().splice(ie, 1), $ = !0;
      } else {
        const ie = D.findIndex((Le) => Le === f()), Pe = d().findIndex((Le) => Le === f());
        ie > -1 && Pe === -1 ? (X(T, !1), $ = !0) : Pe > -1 && ie === -1 && (X(T, !0), $ = !0);
      }
    r(v()) ? w !== s(T) && ($ = !0) : (v() !== (c() ? null : s(T)) || s(T) !== w) && (v() === j && s(T) !== w ? (v(s(T)), r(c()) || c(!1)) : X(T, !!v()), $ = !0), s(I) && (r(c()) ? s(I).indeterminate && (s(I).indeterminate = !1, $ = !0) : !c() && s(I).indeterminate ? (s(I).indeterminate = !1, $ = !0) : c() && !s(I).indeterminate && (s(I).indeterminate = !0, X(T, !1), $ = !0)), j = v(), D = r(d()) ? [] : [...d()], w = s(T), $ && s(S) && s(S).handleChange();
  });
  const x = me("SMUI:generic:input:mount"), M = me("SMUI:generic:input:unmount"), N = me("SMUI:checkbox:mount"), W = me("SMUI:checkbox:unmount");
  rt(() => {
    if (s(I) == null)
      throw new Error("Checkbox is not defined.");
    s(I).indeterminate = !r(c()) && c(), X(
      S,
      new Gp({
        addClass: J,
        forceLayout: () => F().offsetWidth,
        hasNativeControl: () => !0,
        isAttachedToDOM: () => !!F().parentNode,
        isChecked: () => s(T),
        isIndeterminate: () => r(c()) ? !1 : c(),
        removeClass: H,
        removeNativeControlAttr: Ae,
        setNativeControlAttr: G,
        setNativeControlDisabled: (ie) => u(ie)
      }),
      !0
    );
    const $ = {
      _smui_checkbox_accessor: !0,
      get element() {
        return F();
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
        u() || X(L, !0);
      },
      deactivateRipple() {
        X(L, !1);
      }
    };
    return x && x($), N && N($), s(S).init(), () => {
      var ie;
      M && M($), W && W($), (ie = s(S)) == null || ie.destroy();
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
  function G($, ie) {
    A[$] !== ie && (A[$] = ie);
  }
  function Ae($) {
    (!($ in A) || A[$] != null) && (A[$] = void 0);
  }
  function be() {
    return C && C.id;
  }
  function F() {
    return y;
  }
  var V = { getId: be, getElement: F }, B = Mb(), ee = ($) => {
    var ie;
    s(S) && s(S).handleAnimationEnd(), (ie = e.onanimationend) == null || ie.call(e, $);
  };
  ke(B, ($, ie, Pe) => ({ class: $, style: ie, ...Pe, onanimationend: ee }), [
    () => De({
      "mdc-checkbox": !0,
      "mdc-checkbox--disabled": u(),
      "mdc-checkbox--touch": l(),
      "mdc-data-table__header-row-checkbox": k === "data-table" && K,
      "mdc-data-table__row-checkbox": k === "data-table" && !K,
      ..._,
      [a()]: !0
    }),
    () => Object.entries(E).map(([$, ie]) => `${$}: ${ie};`).concat([o()]).join(" "),
    () => tr(b, ["input$"])
  ]);
  var Q = se(B), fe = ($) => {
    var ie;
    Je(F(), "blur", $), (ie = e.input$onblur) == null || ie.call(e, $);
  }, we = ($) => {
    var ie;
    Je(F(), "focus", $), (ie = e.input$onfocus) == null || ie.call(e, $);
  };
  return ke(
    Q,
    ($, ie, Pe, Le) => ({
      class: $,
      type: "checkbox",
      ...C,
      disabled: u(),
      value: ie,
      "data-indeterminate": Pe,
      ...A,
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
  ), Ee(Q, ($) => X(I, $), () => s(I)), Me(Q, ($, ie) => q == null ? void 0 : q($, ie), h), vi(() => lh(Q, () => s(T), ($) => X(T, $))), Ee(B, ($) => y = $, () => y), Me(B, ($, ie) => q == null ? void 0 : q($, ie), i), Me(B, ($, ie) => Xt == null ? void 0 : Xt($, ie), () => ({
    unbounded: !0,
    addClass: J,
    removeClass: H,
    addStyle: R,
    active: s(L),
    eventTarget: s(I)
  })), O(t, B), xe(V);
}
var Pb = /* @__PURE__ */ de('<div style="display: flex; flex-direction: column;"></div>');
function Nb(t, e) {
  Ce(e, !0);
  let n = p(e, "data", 19, () => []), r = p(e, "values", 31, () => ce([]));
  var i = Pb();
  Ln(i, 21, n, Li, (a, o) => {
    db(a, {
      label: (l) => {
        var c = Rt();
        Oe(() => at(c, s(o).label)), O(l, c);
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
  }), O(t, i), xe();
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
            const _ = (E = h.options) == null ? void 0 : E.find((A) => A.value === I);
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
  }), Dn(() => {
    document.removeEventListener("click", f);
  }), Te(() => {
  });
  var m = Bb();
  Ln(m, 23, n, (h) => h.key, (h, g, b) => {
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
        var A = Ub();
        A.__click = [Hb];
        var L = Ie(se(A), 2), C = se(L), T = Ie(L, 2), k = se(T);
        {
          var K = (w) => {
            Rs(w, {
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
              set value(x) {
                a[s(b)] = x;
              }
            });
          }, j = (w) => {
            var x = ne(), M = Z(x);
            {
              var N = (J) => {
                {
                  let H = /* @__PURE__ */ ge(() => {
                    var R;
                    return (R = s(g)) == null ? void 0 : R.options;
                  });
                  rp(J, {
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
              }, W = (J) => {
                var H = ne(), R = Z(H);
                {
                  var G = (be) => {
                    {
                      let F = /* @__PURE__ */ ge(() => {
                        var V;
                        return (V = s(g)) == null ? void 0 : V.options;
                      });
                      Nb(be, {
                        get data() {
                          return s(F);
                        },
                        get values() {
                          return a[s(b)];
                        },
                        set values(V) {
                          a[s(b)] = V;
                        }
                      });
                    }
                  }, Ae = (be) => {
                    var F = ne(), V = Z(F);
                    {
                      var B = (Q) => {
                        Hp(Q, {
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
                            Bp(ie, {
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
                        O(Q, fe);
                      };
                      ae(
                        V,
                        (Q) => {
                          s(g).type === "date" ? Q(B) : Q(ee, !1);
                        },
                        !0
                      );
                    }
                    O(be, F);
                  };
                  ae(
                    R,
                    (be) => {
                      s(g).type === "multiselect" ? be(G) : be(Ae, !1);
                    },
                    !0
                  );
                }
                O(J, H);
              };
              ae(
                M,
                (J) => {
                  s(g).type === "select" ? J(N) : J(W, !1);
                },
                !0
              );
            }
            O(w, x);
          };
          ae(k, (w) => {
            s(g).type === "text" || s(g).type === "number" ? w(K) : w(j, !1);
          });
        }
        var D = Ie(T, 2);
        Qc(D, {
          variant: "unelevated",
          style: "background: var(--secondary); color: white; width: 100%;",
          onclick: () => d(s(b)),
          children: (w, x) => {
            var M = Rt("Apply");
            O(w, M);
          },
          $$slots: { default: !0 }
        }), Oe(() => at(C, `Filter by ${s(g).label ?? ""}`)), ho(2, A, () => yo, () => ({ y: 5, duration: 120 })), ho(1, A, () => yo, () => ({ y: -5, duration: 120 })), O(E, A);
      };
      ae(I, (E) => {
        s(r) === s(b) && E(_);
      });
    }
    Ee(y, (E, A) => i[A] = E, (E) => i == null ? void 0 : i[E], () => [s(b)]), O(h, y);
  }), O(t, m), xe();
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
var jb = (
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
var Gb = (
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
        return this.adapter.setScrollAreaScrollLeft(n), new Gb(this.adapter);
      var i = this.adapter.computeScrollAreaClientRect(), a = this.adapter.computeScrollContentClientRect(), o = Math.round(a.right - i.right);
      return this.adapter.setScrollAreaScrollLeft(n), o === r ? new Wb(this.adapter) : new jb(this.adapter);
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
var os;
function zb(t, e) {
  if (e === void 0 && (e = !0), e && typeof os < "u")
    return os;
  var n = t.createElement("div");
  n.classList.add(sd.SCROLL_TEST), t.body.appendChild(n);
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
var uu = (
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
var Ja = {
  ACTIVE: "mdc-tab--active"
}, va = {
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
        return Ja;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return va;
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
      this.adapter.addClass(Ja.ACTIVE), this.adapter.setAttr(va.ARIA_SELECTED, "true"), this.adapter.setAttr(va.TABINDEX, "0"), this.adapter.activateIndicator(n), this.focusOnActivate && this.adapter.focus();
    }, e.prototype.deactivate = function() {
      this.isActive() && (this.adapter.removeClass(Ja.ACTIVE), this.adapter.setAttr(va.ARIA_SELECTED, "false"), this.adapter.setAttr(va.TABINDEX, "-1"), this.adapter.deactivateIndicator());
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
}, Fn = {
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
var pi = /* @__PURE__ */ new Set();
pi.add(xt.ARROW_LEFT_KEY);
pi.add(xt.ARROW_RIGHT_KEY);
pi.add(xt.END_KEY);
pi.add(xt.HOME_KEY);
pi.add(xt.ENTER_KEY);
pi.add(xt.SPACE_KEY);
var bi = /* @__PURE__ */ new Map();
bi.set(Fn.ARROW_LEFT_KEYCODE, xt.ARROW_LEFT_KEY);
bi.set(Fn.ARROW_RIGHT_KEYCODE, xt.ARROW_RIGHT_KEY);
bi.set(Fn.END_KEYCODE, xt.END_KEY);
bi.set(Fn.HOME_KEYCODE, xt.HOME_KEY);
bi.set(Fn.ENTER_KEYCODE, xt.ENTER_KEY);
bi.set(Fn.SPACE_KEYCODE, xt.SPACE_KEY);
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
        return Fn;
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
      var o = this.adapter.getTabDimensionsAtIndex(r), u = o.contentLeft - i - a, l = o.contentRight - i, c = l - Fn.EXTRA_SCROLL_AMOUNT, d = u + Fn.EXTRA_SCROLL_AMOUNT;
      return r < n ? Math.min(c, 0) : Math.max(d, 0);
    }, e.prototype.calculateScrollIncrementRTL = function(n, r, i, a, o) {
      var u = this.adapter.getTabDimensionsAtIndex(r), l = o - u.contentLeft - i, c = o - u.contentRight - i - a, d = c + Fn.EXTRA_SCROLL_AMOUNT, v = l - Fn.EXTRA_SCROLL_AMOUNT;
      return r > n ? Math.max(d, 0) : Math.min(v, 0);
    }, e.prototype.findAdjacentTabIndexClosestToEdge = function(n, r, i, a) {
      var o = r.rootLeft - i, u = r.rootRight - i - a, l = o + u, c = o < 0 || l < 0, d = u > 0 || l > 0;
      return c ? n - 1 : d ? n + 1 : -1;
    }, e.prototype.findAdjacentTabIndexClosestToEdgeRTL = function(n, r, i, a, o) {
      var u = o - r.rootLeft - a - i, l = o - r.rootRight - i, c = u + l, d = u > 0 || c > 0, v = l < 0 || c < 0;
      return d ? n + 1 : v ? n - 1 : -1;
    }, e.prototype.getKeyFromEvent = function(n) {
      return pi.has(n.key) ? n.key : bi.get(n.keyCode);
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
  const { matches: n } = Ua;
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
      eventTargetMatchesSelector: (F, V) => n(F, V),
      addClass: I,
      removeClass: _,
      addScrollAreaClass: E,
      setScrollAreaStyleProperty: A,
      setScrollContentStyleProperty: L,
      getScrollContentStyleValue: C,
      setScrollAreaScrollLeft: (F) => m.scrollLeft = F,
      getScrollAreaScrollLeft: () => m.scrollLeft,
      getScrollContentOffsetWidth: () => h.offsetWidth,
      getScrollAreaOffsetWidth: () => m.offsetWidth,
      computeScrollAreaClientRect: () => m.getBoundingClientRect(),
      computeScrollContentClientRect: () => h.getBoundingClientRect(),
      computeHorizontalScrollbarHeight: () => zb(document)
    }),
    !0
  ), s(f).init(), () => {
    var F;
    (F = s(f)) == null || F.destroy();
  }));
  function I(F) {
    g[F] || (g[F] = !0);
  }
  function _(F) {
    (!(F in g) || g[F]) && (g[F] = !1);
  }
  function E(F) {
    b[F] || (b[F] = !0);
  }
  function A(F, V) {
    y[F] != V && (V === "" || V == null ? delete y[F] : y[F] = V);
  }
  function L(F, V) {
    S[F] != V && (V === "" || V == null ? delete S[F] : S[F] = V);
  }
  function C(F) {
    return F in S ? S[F] : getComputedStyle(h).getPropertyValue(F);
  }
  function T() {
    if (s(f) == null)
      throw new Error("Instance is undefined.");
    return s(f).getScrollPosition();
  }
  function k() {
    return h.offsetWidth;
  }
  function K(F) {
    var V;
    (V = s(f)) == null || V.incrementScroll(F);
  }
  function j(F) {
    var V;
    (V = s(f)) == null || V.scrollTo(F);
  }
  function D() {
    return v;
  }
  var w = {
    getScrollPosition: T,
    getScrollContentWidth: k,
    incrementScroll: K,
    scrollTo: j,
    getElement: D
  }, x = Jb();
  ke(x, (F, V) => ({ class: F, ...V }), [
    () => De({
      "mdc-tab-scroller": !0,
      "mdc-tab-scroller--align-start": a() === "start",
      "mdc-tab-scroller--align-end": a() === "end",
      "mdc-tab-scroller--align-center": a() === "center",
      ...g,
      [i()]: !0
    }),
    () => tr(d, ["scrollArea$", "scrollContent$"])
  ]);
  var M = se(x), N = (F) => {
    var V;
    s(f) && s(f).handleInteraction(), (V = e.scrollArea$onwheel) == null || V.call(e, F);
  }, W = (F) => {
    var V;
    s(f) && s(f).handleInteraction(), (V = e.scrollArea$ontouchstart) == null || V.call(e, F);
  }, J = (F) => {
    var V;
    s(f) && s(f).handleInteraction(), (V = e.scrollArea$onpointerdown) == null || V.call(e, F);
  }, H = (F) => {
    var V;
    s(f) && s(f).handleInteraction(), (V = e.scrollArea$onmousedown) == null || V.call(e, F);
  }, R = (F) => {
    var V;
    s(f) && s(f).handleInteraction(), (V = e.scrollArea$onkeydown) == null || V.call(e, F);
  };
  ke(
    M,
    (F, V, B) => ({
      class: F,
      style: V,
      ...B,
      onwheel: N,
      ontouchstart: W,
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
      () => Object.entries(y).map(([F, V]) => `${F}: ${V};`).join(" "),
      () => it(d, "scrollArea$")
    ]
  );
  var G = se(M), Ae = (F) => {
    var V;
    s(f) && s(f).handleTransitionEnd(F), (V = e.scrollContent$ontransitionend) == null || V.call(e, F);
  };
  ke(
    G,
    (F, V, B) => ({
      class: F,
      style: V,
      ...B,
      ontransitionend: Ae
    }),
    [
      () => De({
        "mdc-tab-scroller__scroll-content": !0,
        [c()]: !0
      }),
      () => Object.entries(S).map(([F, V]) => `${F}: ${V};`).join(" "),
      () => it(d, "scrollContent$")
    ]
  );
  var be = se(G);
  return Se(be, () => e.children ?? pe), Ee(G, (F) => h = F, () => h), Me(G, (F, V) => q == null ? void 0 : q(F, V), l), Ee(M, (F) => m = F, () => m), Me(M, (F, V) => q == null ? void 0 : q(F, V), o), Ee(x, (F) => v = F, () => v), Me(x, (F, V) => q == null ? void 0 : q(F, V), r), O(t, x), xe(w);
}
var e_ = /* @__PURE__ */ de("<div><!></div>");
function t_(t, e) {
  Ce(e, !0);
  let n = p(e, "use", 19, () => []), r = p(e, "class", 3, ""), i = p(e, "tabs", 19, () => []), a = p(e, "key", 3, (w) => w), o = p(e, "focusOnActivate", 3, !0), u = p(e, "focusOnProgrammatic", 3, !1), l = p(e, "useAutomaticActivation", 3, !0), c = p(e, "active", 15), d = p(e, "tabindex", 3, 0), v = /* @__PURE__ */ qe(e, [
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
  ]), f, m = /* @__PURE__ */ ve(void 0), h, g = /* @__PURE__ */ ve(ce(c() == null ? -1 : i().findIndex((w) => c() && a()(w) === a()(c())))), b = ce({}), y = /* @__PURE__ */ ve(/* @__PURE__ */ new WeakMap()), S = !1;
  oe("SMUI:tab:focusOnActivate", o()), oe("SMUI:tab:initialActive", {
    active: c() == null ? null : a()(c()),
    key: a()
  }), Te(() => {
    (c() == null && s(g) !== -1 || c() != null && s(g) === -1 || c() != null && a()(c()) !== a()(i()[s(g)])) && (X(g, i().findIndex((w) => c() && a()(w) === a()(c())), !0), s(m) && (S = !u(), s(m).activateTab(s(g)), S = !1));
  }), Te(() => {
    if (i().length) {
      const w = i()[0] instanceof Object ? s(y).get(i()[0]) : b[i()[0]];
      w && w.forceAccessible(s(g) === -1);
    }
  });
  let I = !1;
  Te(() => {
    if (!s(m)) {
      I = !1;
      return;
    }
    I || (I = !0, s(m).setUseAutomaticActivation(l()));
  }), oe("SMUI:tab:mount", (w) => {
    E(w.tabId, w);
  }), oe("SMUI:tab:unmount", (w) => {
    A(w.tabId);
  }), rt(() => (X(
    m,
    new Qb({
      scrollTo: (w) => h.scrollTo(w),
      incrementScroll: (w) => h.incrementScroll(w),
      getScrollPosition: () => h.getScrollPosition(),
      getScrollContentWidth: () => h.getScrollContentWidth(),
      getOffsetWidth: () => C().offsetWidth,
      isRTL: () => getComputedStyle(C()).getPropertyValue("direction") === "rtl",
      setActiveTab: (w) => {
        var x;
        c(i()[w]), X(g, w, !0), (x = s(m)) == null || x.activateTab(w);
      },
      activateTabAtIndex: (w, x) => {
        var M;
        return (M = _(i()[w])) == null ? void 0 : M.activate(x, S);
      },
      deactivateTabAtIndex: (w) => {
        var x;
        return (x = _(i()[w])) == null ? void 0 : x.deactivate();
      },
      focusTabAtIndex: (w) => {
        var x;
        return (x = _(i()[w])) == null ? void 0 : x.focus();
      },
      getTabIndicatorClientRectAtIndex: (w) => {
        var x;
        return ((x = _(i()[w])) == null ? void 0 : x.computeIndicatorClientRect()) ?? new DOMRect();
      },
      getTabDimensionsAtIndex: (w) => {
        var x;
        return ((x = _(i()[w])) == null ? void 0 : x.computeDimensions()) ?? { rootLeft: 0, rootRight: 0, contentLeft: 0, contentRight: 0 };
      },
      getPreviousActiveTabIndex: () => {
        var w;
        for (let x = 0; x < i().length; x++)
          if ((w = _(i()[x])) != null && w.active)
            return x;
        return -1;
      },
      getFocusedTabIndex: () => {
        const w = i().map((M) => {
          var N;
          return (N = _(M)) == null ? void 0 : N.element;
        }), x = document.activeElement;
        return w.indexOf(x);
      },
      getIndexOfTabById: (w) => i().findIndex((x) => a()(x) === a()(w)),
      getTabListLength: () => i().length,
      notifyTabActivated: (w) => Je(C(), "SMUITabBarActivated", { index: w })
    }),
    !0
  ), s(m).init(), () => {
    var w;
    (w = s(m)) == null || w.destroy();
  }));
  function _(w) {
    return w instanceof Object ? s(y).get(w) : b[w];
  }
  function E(w, x) {
    w instanceof Object ? (s(y).set(w, x), X(y, s(y))) : b[w] = x;
  }
  function A(w) {
    w instanceof Object ? (s(y).delete(w), X(y, s(y))) : delete b[w];
  }
  function L(w) {
    var x;
    (x = s(m)) == null || x.scrollIntoView(w);
  }
  function C() {
    return f;
  }
  var T = { scrollIntoView: L, getElement: C }, k = e_(), K = (w) => {
    var x;
    s(m) && s(m).handleKeyDown(w), (x = e.onkeydown) == null || x.call(e, w);
  }, j = (w) => {
    var x;
    s(m) && s(m).handleTabInteraction(w), (x = e.onSMUITabInteracted) == null || x.call(e, w);
  };
  ke(
    k,
    (w, x) => ({
      class: w,
      role: "tablist",
      tabindex: d(),
      ...x,
      onkeydown: K,
      onSMUITabInteracted: j
    }),
    [
      () => De({ "mdc-tab-bar": !0, [r()]: !0 }),
      () => tr(v, ["tabScroller$"])
    ]
  );
  var D = se(k);
  {
    let w = /* @__PURE__ */ ge(() => it(v, "tabScroller$"));
    Ee(
      $b(D, nt(() => s(w), {
        children: (x, M) => {
          var N = ne(), W = Z(N);
          Ln(W, 17, i, (J) => a()(J), (J, H) => {
            var R = ne(), G = Z(R);
            Se(G, () => e.tab, () => s(H)), O(J, R);
          }), O(x, N);
        },
        $$slots: { default: !0 }
      })),
      (x) => h = x,
      () => h
    );
  }
  return Ee(k, (w) => f = w, () => f), Me(k, (w, x) => q == null ? void 0 : q(w, x), n), O(t, k), xe(T);
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
  }), $u(() => {
    g.length && requestAnimationFrame(() => {
      const w = g.shift() ?? [];
      for (const x of w)
        x();
    });
  }), rt(() => (X(v, y(), !0), s(v).init(), () => {
    var w;
    (w = s(v)) == null || w.destroy();
  }));
  function y() {
    const w = {
      fade: Yb,
      slide: uu
    }[o()] || uu;
    return new w({
      addClass: (...x) => S(() => I(...x)),
      removeClass: (...x) => S(() => _(...x)),
      computeContentClientRect: C,
      setContentStyleProperty: (...x) => S(() => E(...x))
    });
  }
  function S(w) {
    g.length ? g[g.length - 1].push(w) : w();
  }
  function I(w) {
    s(m)[w] || (s(m)[w] = !0);
  }
  function _(w) {
    (!(w in s(m)) || s(m)[w]) && (s(m)[w] = !1);
  }
  function E(w, x) {
    s(h)[w] != x && (x === "" || x == null ? delete s(h)[w] : s(h)[w] = x);
  }
  function A(w) {
    var x;
    i(!0), (x = s(v)) == null || x.activate(w);
  }
  function L() {
    var w;
    i(!1), (w = s(v)) == null || w.deactivate();
  }
  function C() {
    return g.push([]), f.getBoundingClientRect();
  }
  function T() {
    return d;
  }
  var k = { activate: A, deactivate: L, computeContentClientRect: C, getElement: T }, K = n_();
  ke(K, (w, x) => ({ class: w, ...x }), [
    () => De({
      "mdc-tab-indicator": !0,
      "mdc-tab-indicator--active": i(),
      "mdc-tab-indicator--fade": o() === "fade",
      ...s(m),
      [r()]: !0
    }),
    () => tr(c, ["content$"])
  ]);
  var j = se(K);
  ke(
    j,
    (w, x, M) => ({
      class: w,
      style: x,
      "aria-hidden": a() === "icon" ? "true" : void 0,
      ...M
    }),
    [
      () => De({
        "mdc-tab-indicator__content": !0,
        "mdc-tab-indicator__content--underline": a() === "underline",
        "mdc-tab-indicator__content--icon": a() === "icon",
        [l()]: !0
      }),
      () => Object.entries(s(h)).map(([w, x]) => `${w}: ${x};`).join(" "),
      () => it(c, "content$")
    ]
  );
  var D = se(j);
  return Se(D, () => e.children ?? pe), Ee(j, (w) => f = w, () => f), Me(j, (w, x) => q == null ? void 0 : q(w, x), u), Ee(K, (w) => d = w, () => d), Me(K, (w, x) => q == null ? void 0 : q(w, x), n), O(t, K), xe(k);
}
var i_ = /* @__PURE__ */ de('<span><!> <!></span> <!> <span class="mdc-tab__ripple"></span>', 1);
function a_(t, e) {
  Ce(e, !0);
  const n = (V) => {
    {
      let B = /* @__PURE__ */ ge(() => it(g, "tabIndicator$"));
      Ee(
        r_(V, nt(() => s(B), {
          get active() {
            return s(T);
          },
          set active(ee) {
            X(T, ee, !0);
          },
          children: (ee, Q) => {
            var fe = ne(), we = Z(fe);
            Se(we, () => e.tabIndicator ?? pe), O(ee, fe);
          },
          $$slots: { default: !0 }
        })),
        (ee) => I = ee,
        () => I
      );
    }
  };
  let r = p(e, "use", 19, () => []), i = p(e, "class", 3, ""), a = p(e, "style", 3, ""), o = p(e, "ripple", 3, !0), u = p(e, "stacked", 3, !1), l = p(e, "minWidth", 3, !1), c = p(e, "indicatorSpanOnlyContent", 3, !1), d = p(e, "href", 3, void 0), v = p(e, "content$use", 19, () => []), f = p(e, "content$class", 3, ""), m = p(e, "component", 3, jr), h = p(e, "tag", 19, () => d() == null ? "button" : "a"), g = /* @__PURE__ */ qe(e, [
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
  ]), b, y = /* @__PURE__ */ ve(void 0), S, I, _ = ce({}), E = ce({}), A = ce({}), L = me("SMUI:tab:focusOnActivate");
  const C = me("SMUI:tab:initialActive");
  let T = /* @__PURE__ */ ve(ce(C.active != null && C.key(e.tab) === C.active)), k = /* @__PURE__ */ ve(!1);
  if (oe("SMUI:label:context", "tab"), oe("SMUI:icon:context", "tab"), !e.tab)
    throw new Error("The tab property is required! It should be passed down from the TabBar to the Tab.");
  let K = !1;
  Te(() => {
    if (!s(y)) {
      K = !1;
      return;
    }
    K || (K = !0, s(y).setFocusOnActivate(L));
  });
  const j = me("SMUI:tab:mount"), D = me("SMUI:tab:unmount");
  rt(() => {
    X(
      y,
      new Zb({
        setAttr: W,
        addClass: x,
        removeClass: M,
        hasClass: w,
        activateIndicator: (B) => I.activate(B),
        deactivateIndicator: () => I.deactivate(),
        notifyInteracted: () => Je(G(), "SMUITabInteracted", { tabId: e.tab }),
        getOffsetLeft: () => G().offsetLeft,
        getOffsetWidth: () => G().offsetWidth,
        getContentOffsetLeft: () => S.offsetLeft,
        getContentOffsetWidth: () => S.offsetWidth,
        focus: R
      }),
      !0
    );
    const V = {
      tabId: e.tab,
      get element() {
        return G();
      },
      get active() {
        return s(T);
      },
      forceAccessible(B) {
        X(k, B, !0);
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
    return j && j(V), s(y).init(), () => {
      var B;
      D && D(V), (B = s(y)) == null || B.destroy();
    };
  });
  function w(V) {
    return V in _ ? _[V] : G().classList.contains(V);
  }
  function x(V) {
    _[V] || (_[V] = !0);
  }
  function M(V) {
    (!(V in _) || _[V]) && (_[V] = !1);
  }
  function N(V, B) {
    E[V] != B && (B === "" || B == null ? delete E[V] : E[V] = B);
  }
  function W(V, B) {
    A[V] !== B && (A[V] = B);
  }
  function J(V, B) {
    var ee, Q, fe;
    X(T, !0), B && ((ee = s(y)) == null || ee.setFocusOnActivate(!1)), (Q = s(y)) == null || Q.activate(V), B && ((fe = s(y)) == null || fe.setFocusOnActivate(L));
  }
  function H() {
    var V;
    X(T, !1), (V = s(y)) == null || V.deactivate();
  }
  function R() {
    G().focus();
  }
  function G() {
    return b.getElement();
  }
  var Ae = { activate: J, deactivate: H, focus: R, getElement: G }, be = ne(), F = Z(be);
  {
    let V = /* @__PURE__ */ ge(() => [
      [
        Xt,
        {
          ripple: o(),
          unbounded: !1,
          addClass: x,
          removeClass: M,
          addStyle: N
        }
      ],
      ...r()
    ]), B = /* @__PURE__ */ ge(() => De({
      "mdc-tab": !0,
      "mdc-tab--active": s(T),
      "mdc-tab--stacked": u(),
      "mdc-tab--min-width": l(),
      ..._,
      [i()]: !0
    })), ee = /* @__PURE__ */ ge(() => Object.entries(E).map(([$, ie]) => `${$}: ${ie};`).concat([a()]).join(" ")), Q = /* @__PURE__ */ ge(() => s(T) ? "true" : "false"), fe = /* @__PURE__ */ ge(() => s(T) || s(k) ? "0" : "-1"), we = /* @__PURE__ */ ge(() => tr(g, ["content$", "tabIndicator$"]));
    pr(F, m, ($, ie) => {
      Ee(
        ie($, nt(
          {
            get tag() {
              return h();
            },
            get use() {
              return s(V);
            },
            get class() {
              return s(B);
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
          () => A,
          () => s(we),
          {
            onclick: (Pe) => {
              var Le;
              (Le = e.onclick) == null || Le.call(e, Pe), !Pe.defaultPrevented && s(y) && s(y).handleClick();
            },
            children: (Pe, Le) => {
              var We = i_(), Ke = Z(We);
              ke(Ke, (Fe, ct) => ({ class: Fe, ...ct }), [
                () => De({ "mdc-tab__content": !0, [f()]: !0 }),
                () => it(g, "content$")
              ]);
              var Ne = se(Ke);
              Se(Ne, () => e.children ?? pe);
              var U = Ie(Ne, 2);
              {
                var z = (Fe) => {
                  n(Fe);
                };
                ae(U, (Fe) => {
                  c() && Fe(z);
                });
              }
              Ee(Ke, (Fe) => S = Fe, () => S), Me(Ke, (Fe, ct) => q == null ? void 0 : q(Fe, ct), v);
              var he = Ie(Ke, 2);
              {
                var Re = (Fe) => {
                  n(Fe);
                };
                ae(he, (Fe) => {
                  c() || Fe(Re);
                });
              }
              O(Pe, We);
            },
            $$slots: { default: !0 }
          }
        )),
        (Pe) => b = Pe,
        () => b
      );
    });
  }
  return O(t, be), xe(Ae);
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
      Sg(I, {
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
        tab: (E, A = pe) => {
          a_(E, {
            get tab() {
              return A();
            },
            minWidth: !0,
            children: (L, C) => {
              Mm(L, {
                children: (T, k) => {
                  var K = Rt();
                  Oe(() => at(K, A())), O(T, K);
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
        onfiltersChanged: (C) => r()(C),
        get filters() {
          return n();
        },
        set filters(C) {
          n(C);
        }
      });
      var A = Ie(E, 2);
      {
        var L = (C) => {
          var T = s_();
          T.__click = [o_, v], O(C, T);
        };
        ae(A, (C) => {
          s(d) && C(L);
        });
      }
      O(I, _);
    };
    ae(y, (I) => {
      n() && n().length > 0 && I(S);
    });
  }
  O(t, f), xe();
}
Sn(["click"]);
Sn(["change", "click"]);
var d_ = /* @__PURE__ */ rn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor" class="svelte-1mj71p3"><path d="M12 4l-8 8h16l-8-8z"></path></svg>'), f_ = /* @__PURE__ */ rn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor" class="svelte-1mj71p3"><path d="M12 20l8-8H4l8 8z"></path></svg>'), h_ = /* @__PURE__ */ de('<div class="custom-cell-container svelte-1mj71p3"><div class="cell-header svelte-1mj71p3"><span class="header-title svelte-1mj71p3"> </span> <!></div></div>'), v_ = (t, e) => e(), m_ = /* @__PURE__ */ de('<input type="text" class="svelte-1mj71p3"/>'), g_ = (t, e) => e(), p_ = /* @__PURE__ */ de('<input type="number" class="svelte-1mj71p3"/>'), b_ = /* @__PURE__ */ de("<!> <!>", 1), __ = /* @__PURE__ */ de("<!> <!>", 1), y_ = /* @__PURE__ */ de('<div class="cell-actions svelte-1mj71p3"></div>'), I_ = /* @__PURE__ */ de("<!> <!>", 1);
function E_(t, e) {
  Ce(e, !0);
  const n = () => Jn(b, "$sortColumn", a), r = () => Jn(y, "$sortDirection", a), i = () => Jn(g, "$filteredData", a), [a, o] = br();
  let u = p(e, "loadingDone", 15, !0), l = p(e, "label", 19, dp), c = p(e, "columnDefs", 19, () => []), d = p(e, "rowData", 31, () => ce([])), v = p(e, "rowActions", 19, () => []), f = p(e, "searchInputLabel", 3, "Search"), m = p(e, "emptyText", 3, "No data available"), h = ce({ name: "", color: "", number: "" }), g = en([]), b = en(null), y = en(null), S = /* @__PURE__ */ ge(() => c().some((A) => A.filter));
  e.store.store.subscribe((A) => {
    d([...A]), I();
  });
  function I() {
    let A = d().filter((L) => c().every((C) => {
      const T = h[C.field], k = C.filterValueGetter ? C.filterValueGetter(L) : L[C.field];
      return T ? C.filterType === "number" ? k == T : k.toString().toLowerCase().includes(T.toLowerCase()) : !0;
    }));
    A = _(A), g.set(A);
  }
  function _(A) {
    let L, C;
    return b.subscribe((T) => L = T), y.subscribe((T) => C = T), !L || !C ? A : A.sort((T, k) => {
      let K = T[L], j = k[L];
      return K == null && (K = ""), j == null && (j = ""), C === "asc" ? K.toString().localeCompare(j.toString()) : j.toString().localeCompare(K.toString());
    });
  }
  function E(A) {
    b.update((L) => {
      if (L === A)
        y.update((C) => C === "asc" ? "desc" : C === "desc" ? null : "asc");
      else
        return y.set("asc"), A;
      return A;
    }), I();
  }
  g.set(d()), Kp(t, {
    get "table$aria-label"() {
      return l();
    },
    style: "max-width: 100%; width: 100%;",
    progress: (L) => {
      ad(L, {
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
      var T = I_(), k = Z(T);
      Zp(k, {
        children: (j, D) => {
          var w = __(), x = Z(w);
          Za(x, {
            class: "header-title-row",
            children: (W, J) => {
              var H = ne(), R = Z(H);
              Ln(R, 17, c, Li, (G, Ae) => {
                ha(G, {
                  onclick: () => s(Ae).sortable && E(s(Ae).field),
                  get style() {
                    return s(Ae).headerStyle;
                  },
                  children: (be, F) => {
                    var V = h_(), B = se(V), ee = se(B), Q = se(ee), fe = Ie(ee, 2);
                    {
                      var we = ($) => {
                        var ie = ne(), Pe = Z(ie);
                        {
                          var Le = (We) => {
                            var Ke = ne(), Ne = Z(Ke);
                            {
                              var U = (he) => {
                                var Re = d_();
                                O(he, Re);
                              }, z = (he) => {
                                var Re = ne(), Fe = Z(Re);
                                {
                                  var ct = (pt) => {
                                    var le = f_();
                                    O(pt, le);
                                  };
                                  ae(
                                    Fe,
                                    (pt) => {
                                      r() === "desc" && pt(ct);
                                    },
                                    !0
                                  );
                                }
                                O(he, Re);
                              };
                              ae(Ne, (he) => {
                                r() === "asc" ? he(U) : he(z, !1);
                              });
                            }
                            O(We, Ke);
                          };
                          ae(Pe, (We) => {
                            n() === s(Ae).field && r() !== null && We(Le);
                          });
                        }
                        O($, ie);
                      };
                      ae(fe, ($) => {
                        s(Ae).sortable && $(we);
                      });
                    }
                    Oe(() => {
                      Ut(V, `min-width: ${s(Ae).minWidth ?? 0 ?? ""}`), at(Q, s(Ae).headerName);
                    }), O(be, V);
                  },
                  $$slots: { default: !0 }
                });
              }), O(W, H);
            },
            $$slots: { default: !0 }
          });
          var M = Ie(x, 2);
          {
            var N = (W) => {
              Za(W, {
                class: "header-filter-row",
                children: (J, H) => {
                  var R = ne(), G = Z(R);
                  Ln(G, 17, c, Li, (Ae, be) => {
                    ha(Ae, {
                      children: (F, V) => {
                        var B = ne(), ee = Z(B);
                        {
                          var Q = (fe) => {
                            var we = b_(), $ = Z(we);
                            {
                              var ie = (We) => {
                                var Ke = m_();
                                Ke.__input = [v_, I], Oe(() => Dr(Ke, "placeholder", `${f()} ${s(be).headerName}`)), Ea(Ke, () => h[s(be).field], (Ne) => h[s(be).field] = Ne), O(We, Ke);
                              };
                              ae($, (We) => {
                                s(be).filterType === "text" && We(ie);
                              });
                            }
                            var Pe = Ie($, 2);
                            {
                              var Le = (We) => {
                                var Ke = p_();
                                Ke.__input = [g_, I], Oe(() => Dr(Ke, "placeholder", `${f()} ${s(be).headerName}`)), Ea(Ke, () => h[s(be).field], (Ne) => h[s(be).field] = Ne), O(We, Ke);
                              };
                              ae(Pe, (We) => {
                                s(be).filterType === "number" && We(Le);
                              });
                            }
                            O(fe, we);
                          };
                          ae(ee, (fe) => {
                            s(be).filter && fe(Q);
                          });
                        }
                        O(F, B);
                      },
                      $$slots: { default: !0 }
                    });
                  }), O(J, R);
                },
                $$slots: { default: !0 }
              });
            };
            ae(M, (W) => {
              s(S) && W(N);
            });
          }
          O(j, w);
        },
        $$slots: { default: !0 }
      });
      var K = Ie(k, 2);
      Jp(K, {
        children: (j, D) => {
          var w = ne(), x = Z(w);
          {
            var M = (W) => {
              Za(W, {
                children: (J, H) => {
                  ha(J, {
                    class: "oscd-basic-table__empty-row",
                    get colspan() {
                      return c().length;
                    },
                    style: "text-align:center; padding: 24px; opacity: 0.6; background: rgba(0,0,0,0.05);",
                    children: (R, G) => {
                      var Ae = Rt();
                      Oe(() => at(Ae, m())), O(R, Ae);
                    },
                    $$slots: { default: !0 }
                  });
                },
                $$slots: { default: !0 }
              });
            }, N = (W) => {
              var J = ne(), H = Z(J);
              Ln(H, 1, i, Li, (R, G) => {
                Za(R, {
                  children: (Ae, be) => {
                    var F = ne(), V = Z(F);
                    Ln(V, 17, c, (B) => B.field, (B, ee) => {
                      var Q = ne(), fe = Z(Q);
                      {
                        var we = (ie) => {
                          ha(ie, {
                            children: (Pe, Le) => {
                              var We = y_();
                              Ln(We, 21, v, Li, (Ke, Ne) => {
                                var U = ne(), z = Z(U);
                                {
                                  var he = (Fe) => {
                                    _o(Fe, {
                                      get content() {
                                        return s(Ne).tooltip;
                                      },
                                      hoverDelay: 500,
                                      children: (ct, pt) => {
                                        {
                                          let le = /* @__PURE__ */ ge(() => s(Ne).disabled(s(G)));
                                          Gm(ct, {
                                            get iconComponent() {
                                              return s(Ne).iconComponent;
                                            },
                                            get iconStyles() {
                                              return s(Ne).iconStyles;
                                            },
                                            callback: () => s(Ne).callback(s(G)),
                                            get disabled() {
                                              return s(le);
                                            },
                                            get ariaLabel() {
                                              return s(Ne).ariaLabel;
                                            }
                                          });
                                        }
                                      },
                                      $$slots: { default: !0 }
                                    });
                                  }, Re = (Fe) => {
                                    _o(Fe, {
                                      get content() {
                                        return s(Ne).tooltip;
                                      },
                                      hoverDelay: 500,
                                      children: (ct, pt) => {
                                        {
                                          let le = /* @__PURE__ */ ge(() => s(Ne).disabled(s(G)));
                                          km(ct, {
                                            class: "button",
                                            variant: "raised",
                                            callback: () => s(Ne).callback(s(G)),
                                            get disabled() {
                                              return s(le);
                                            },
                                            get ariaLabel() {
                                              return s(Ne).ariaLabel;
                                            },
                                            children: (ye, Y) => {
                                              var te = ne(), He = Z(te);
                                              {
                                                var dt = (mt) => {
                                                  vp(mt, { svgStyles: "margin: unset" });
                                                }, bt = (mt) => {
                                                  var kt = ne(), yr = Z(kt);
                                                  {
                                                    var ht = (It) => {
                                                      rd(It, { svgStyles: "margin: unset" });
                                                    }, Mt = (It) => {
                                                      var Nn = ne(), yi = Z(Nn);
                                                      {
                                                        var Wn = (Qe) => {
                                                          pp(Qe, { svgStyles: "margin: unset" });
                                                        }, ze = (Qe) => {
                                                          var $e = ne(), Dt = Z($e);
                                                          {
                                                            var gn = (ut) => {
                                                              _p(ut, { svgStyles: "margin: unset" });
                                                            }, ot = (ut) => {
                                                              var At = ne(), et = Z(At);
                                                              {
                                                                var wt = (Lt) => {
                                                                  Sp(Lt, { svgStyles: "margin: unset" });
                                                                }, Hn = (Lt) => {
                                                                  var _t = ne(), Pt = Z(_t);
                                                                  {
                                                                    var sn = (ln) => {
                                                                      Cp(ln, { svgStyles: "margin: unset" });
                                                                    }, Bt = (ln) => {
                                                                      var Yt = ne(), qn = Z(Yt);
                                                                      {
                                                                        var Gr = (Gt) => {
                                                                          Tp(Gt, { svgStyles: "margin: unset" });
                                                                        }, un = (Gt) => {
                                                                          var pn = ne(), rr = Z(pn);
                                                                          {
                                                                            var na = (Ir) => {
                                                                              Dp(Ir, { svgStyles: "margin: unset" });
                                                                            }, jo = (Ir) => {
                                                                              Ip(Ir, { svgStyles: "margin: unset" });
                                                                            };
                                                                            ae(
                                                                              rr,
                                                                              (Ir) => {
                                                                                s(Ne).icon === "archive" ? Ir(na) : Ir(jo, !1);
                                                                              },
                                                                              !0
                                                                            );
                                                                          }
                                                                          O(Gt, pn);
                                                                        };
                                                                        ae(
                                                                          qn,
                                                                          (Gt) => {
                                                                            s(Ne).icon === "delete" ? Gt(Gr) : Gt(un, !1);
                                                                          },
                                                                          !0
                                                                        );
                                                                      }
                                                                      O(ln, Yt);
                                                                    };
                                                                    ae(
                                                                      Pt,
                                                                      (ln) => {
                                                                        s(Ne).icon === "edit" ? ln(sn) : ln(Bt, !1);
                                                                      },
                                                                      !0
                                                                    );
                                                                  }
                                                                  O(Lt, _t);
                                                                };
                                                                ae(
                                                                  et,
                                                                  (Lt) => {
                                                                    s(Ne).icon === "remove" ? Lt(wt) : Lt(Hn, !1);
                                                                  },
                                                                  !0
                                                                );
                                                              }
                                                              O(ut, At);
                                                            };
                                                            ae(
                                                              Dt,
                                                              (ut) => {
                                                                s(Ne).icon === "find-in-page" ? ut(gn) : ut(ot, !1);
                                                              },
                                                              !0
                                                            );
                                                          }
                                                          O(Qe, $e);
                                                        };
                                                        ae(
                                                          yi,
                                                          (Qe) => {
                                                            s(Ne).icon === "download" ? Qe(Wn) : Qe(ze, !1);
                                                          },
                                                          !0
                                                        );
                                                      }
                                                      O(It, Nn);
                                                    };
                                                    ae(
                                                      yr,
                                                      (It) => {
                                                        s(Ne).icon === "cancel" ? It(ht) : It(Mt, !1);
                                                      },
                                                      !0
                                                    );
                                                  }
                                                  O(mt, kt);
                                                };
                                                ae(He, (mt) => {
                                                  s(Ne).icon === "add" ? mt(dt) : mt(bt, !1);
                                                });
                                              }
                                              O(ye, te);
                                            },
                                            $$slots: { default: !0 }
                                          });
                                        }
                                      },
                                      $$slots: { default: !0 }
                                    });
                                  };
                                  ae(z, (Fe) => {
                                    s(Ne).iconComponent ? Fe(he) : Fe(Re, !1);
                                  });
                                }
                                O(Ke, U);
                              }), O(Pe, We);
                            },
                            $$slots: { default: !0 }
                          });
                        }, $ = (ie) => {
                          ha(ie, {
                            get numeric() {
                              return s(ee).numeric;
                            },
                            get style() {
                              return s(ee).cellStyle;
                            },
                            children: (Pe, Le) => {
                              var We = ne(), Ke = Z(We);
                              {
                                var Ne = (z) => {
                                  const he = /* @__PURE__ */ ge(() => s(ee).cellRenderer);
                                  var Re = ne(), Fe = Z(Re);
                                  pr(Fe, () => s(he), (ct, pt) => {
                                    pt(ct, nt(
                                      {
                                        get row() {
                                          return s(G);
                                        },
                                        get value() {
                                          return s(G)[s(ee).field];
                                        },
                                        get col() {
                                          return s(ee);
                                        }
                                      },
                                      () => s(ee).cellRendererProps ?? {}
                                    ));
                                  }), O(z, Re);
                                }, U = (z) => {
                                  var he = ne(), Re = Z(he);
                                  {
                                    var Fe = (pt) => {
                                      var le = Rt();
                                      Oe((ye) => at(le, ye), [
                                        () => s(ee).valueFormatter(s(G)[s(ee).field])
                                      ]), O(pt, le);
                                    }, ct = (pt) => {
                                      var le = Rt();
                                      Oe(() => at(le, s(G)[s(ee).field] ?? "")), O(pt, le);
                                    };
                                    ae(
                                      Re,
                                      (pt) => {
                                        s(ee).valueFormatter ? pt(Fe) : pt(ct, !1);
                                      },
                                      !0
                                    );
                                  }
                                  O(z, he);
                                };
                                ae(Ke, (z) => {
                                  s(ee).cellRenderer ? z(Ne) : z(U, !1);
                                });
                              }
                              O(Pe, We);
                            },
                            $$slots: { default: !0 }
                          });
                        };
                        ae(fe, (ie) => {
                          s(ee).field === "actions" ? ie(we) : ie($, !1);
                        });
                      }
                      O(B, Q);
                    }), O(Ae, F);
                  },
                  $$slots: { default: !0 }
                });
              }), O(W, J);
            };
            ae(x, (W) => {
              i().length === 0 ? W(M) : W(N, !1);
            });
          }
          O(j, w);
        },
        $$slots: { default: !0 }
      }), O(L, T);
    },
    $$slots: { progress: !0, default: !0 }
  }), xe(), o();
}
Sn(["input"]);
function yt(t) {
  return typeof t == "function";
}
function tl(t) {
  var e = function(r) {
    Error.call(r), r.stack = new Error().stack;
  }, n = t(e);
  return n.prototype = Object.create(Error.prototype), n.prototype.constructor = n, n;
}
var ss = tl(function(t) {
  return function(n) {
    t(this), this.message = n ? n.length + ` errors occurred during unsubscription:
` + n.map(function(r, i) {
      return i + 1 + ") " + r.toString();
    }).join(`
  `) : "", this.name = "UnsubscriptionError", this.errors = n;
  };
});
function Io(t, e) {
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
          a = g instanceof ss ? g.errors : [g];
        }
      var v = this._finalizers;
      if (v) {
        this._finalizers = null;
        try {
          for (var f = Ht(v), m = f.next(); !m.done; m = f.next()) {
            var h = m.value;
            try {
              cu(h);
            } catch (g) {
              a = a ?? [], g instanceof ss ? a = $n($n([], mr(a)), mr(g.errors)) : a.push(g);
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
        throw new ss(a);
    }
  }, t.prototype.add = function(e) {
    var n;
    if (e && e !== this)
      if (this.closed)
        cu(e);
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
    n === e ? this._parentage = null : Array.isArray(n) && Io(n, e);
  }, t.prototype.remove = function(e) {
    var n = this._finalizers;
    n && Io(n, e), e instanceof t && e._removeParent(this);
  }, t.EMPTY = function() {
    var e = new t();
    return e.closed = !0, e;
  }(), t;
}(), ld = ka.EMPTY;
function ud(t) {
  return t instanceof ka || t && "closed" in t && yt(t.remove) && yt(t.add) && yt(t.unsubscribe);
}
function cu(t) {
  yt(t) ? t() : t.unsubscribe();
}
var S_ = {
  Promise: void 0
}, A_ = {
  setTimeout: function(t, e) {
    for (var n = [], r = 2; r < arguments.length; r++)
      n[r - 2] = arguments[r];
    return setTimeout.apply(void 0, $n([t, e], mr(n)));
  },
  clearTimeout: function(t) {
    return clearTimeout(t);
  },
  delegate: void 0
};
function cd(t) {
  A_.setTimeout(function() {
    throw t;
  });
}
function du() {
}
function oo(t) {
  t();
}
var nl = function(t) {
  Ve(e, t);
  function e(n) {
    var r = t.call(this) || this;
    return r.isStopped = !1, n ? (r.destination = n, ud(n) && n.add(r)) : r.destination = T_, r;
  }
  return e.create = function(n, r, i) {
    return new xa(n, r, i);
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
}(ka), C_ = function() {
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
}(), xa = function(t) {
  Ve(e, t);
  function e(n, r, i) {
    var a = t.call(this) || this, o;
    return yt(n) || !n ? o = {
      next: n ?? void 0,
      error: r ?? void 0,
      complete: i ?? void 0
    } : o = n, a.destination = new C_(o), a;
  }
  return e;
}(nl);
function $a(t) {
  cd(t);
}
function x_(t) {
  throw t;
}
var T_ = {
  closed: !0,
  next: du,
  error: x_,
  complete: du
}, rl = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}();
function ta(t) {
  return t;
}
function w_(t) {
  return t.length === 0 ? ta : t.length === 1 ? t[0] : function(n) {
    return t.reduce(function(r, i) {
      return i(r);
    }, n);
  };
}
var vn = function() {
  function t(e) {
    e && (this._subscribe = e);
  }
  return t.prototype.lift = function(e) {
    var n = new t();
    return n.source = this, n.operator = e, n;
  }, t.prototype.subscribe = function(e, n, r) {
    var i = this, a = O_(e) ? e : new xa(e, n, r);
    return oo(function() {
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
    return n = fu(n), new n(function(i, a) {
      var o = new xa({
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
    return w_(e)(this);
  }, t.prototype.toPromise = function(e) {
    var n = this;
    return e = fu(e), new e(function(r, i) {
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
function fu(t) {
  var e;
  return (e = t ?? S_.Promise) !== null && e !== void 0 ? e : Promise;
}
function L_(t) {
  return t && yt(t.next) && yt(t.error) && yt(t.complete);
}
function O_(t) {
  return t && t instanceof nl || L_(t) && ud(t);
}
function R_(t) {
  return yt(t == null ? void 0 : t.lift);
}
function Pn(t) {
  return function(e) {
    if (R_(e))
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
function Mn(t, e, n, r, i) {
  return new M_(t, e, n, r, i);
}
var M_ = function(t) {
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
}(nl), D_ = tl(function(t) {
  return function() {
    t(this), this.name = "ObjectUnsubscribedError", this.message = "object unsubscribed";
  };
}), Fo = function(t) {
  Ve(e, t);
  function e() {
    var n = t.call(this) || this;
    return n.closed = !1, n.currentObservers = null, n.observers = [], n.isStopped = !1, n.hasError = !1, n.thrownError = null, n;
  }
  return e.prototype.lift = function(n) {
    var r = new hu(this, this);
    return r.operator = n, r;
  }, e.prototype._throwIfClosed = function() {
    if (this.closed)
      throw new D_();
  }, e.prototype.next = function(n) {
    var r = this;
    oo(function() {
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
    var r = this, i = this, a = i.hasError, o = i.isStopped, u = i.observers;
    return a || o ? ld : (this.currentObservers = null, u.push(n), new ka(function() {
      r.currentObservers = null, Io(u, n);
    }));
  }, e.prototype._checkFinalizedStatuses = function(n) {
    var r = this, i = r.hasError, a = r.thrownError, o = r.isStopped;
    i ? n.error(a) : o && n.complete();
  }, e.prototype.asObservable = function() {
    var n = new vn();
    return n.source = this, n;
  }, e.create = function(n, r) {
    return new hu(n, r);
  }, e;
}(vn), hu = function(t) {
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
    return (i = (r = this.source) === null || r === void 0 ? void 0 : r.subscribe(n)) !== null && i !== void 0 ? i : ld;
  }, e;
}(Fo), vu = function(t) {
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
}(Fo), il = {
  now: function() {
    return (il.delegate || Date).now();
  },
  delegate: void 0
}, P_ = function(t) {
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
}(Fo), N_ = function(t) {
  Ve(e, t);
  function e(n, r) {
    return t.call(this) || this;
  }
  return e.prototype.schedule = function(n, r) {
    return this;
  }, e;
}(ka), mu = {
  setInterval: function(t, e) {
    for (var n = [], r = 2; r < arguments.length; r++)
      n[r - 2] = arguments[r];
    return setInterval.apply(void 0, $n([t, e], mr(n)));
  },
  clearInterval: function(t) {
    return clearInterval(t);
  },
  delegate: void 0
}, H_ = function(t) {
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
    return i === void 0 && (i = 0), mu.setInterval(n.flush.bind(n, this), i);
  }, e.prototype.recycleAsyncId = function(n, r, i) {
    if (i === void 0 && (i = 0), i != null && this.delay === i && this.pending === !1)
      return r;
    r != null && mu.clearInterval(r);
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
      this.work = this.state = this.scheduler = null, this.pending = !1, Io(a, this), r != null && (this.id = this.recycleAsyncId(i, r, null)), this.delay = null, t.prototype.unsubscribe.call(this);
    }
  }, e;
}(N_), gu = function() {
  function t(e, n) {
    n === void 0 && (n = t.now), this.schedulerActionCtor = e, this.now = n;
  }
  return t.prototype.schedule = function(e, n, r) {
    return n === void 0 && (n = 0), new this.schedulerActionCtor(this, e).schedule(r, n);
  }, t.now = il.now, t;
}(), U_ = function(t) {
  Ve(e, t);
  function e(n, r) {
    r === void 0 && (r = gu.now);
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
}(gu), k_ = new U_(H_), B_ = new vn(function(t) {
  return t.complete();
});
function F_(t) {
  return t && yt(t.schedule);
}
function dd(t) {
  return t[t.length - 1];
}
function V_(t) {
  return yt(dd(t)) ? t.pop() : void 0;
}
function Vo(t) {
  return F_(dd(t)) ? t.pop() : void 0;
}
var fd = function(t) {
  return t && typeof t.length == "number" && typeof t != "function";
};
function hd(t) {
  return yt(t == null ? void 0 : t.then);
}
function vd(t) {
  return yt(t[rl]);
}
function md(t) {
  return Symbol.asyncIterator && yt(t == null ? void 0 : t[Symbol.asyncIterator]);
}
function gd(t) {
  return new TypeError("You provided " + (t !== null && typeof t == "object" ? "an invalid object" : "'" + t + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
}
function j_() {
  return typeof Symbol != "function" || !Symbol.iterator ? "@@iterator" : Symbol.iterator;
}
var pd = j_();
function bd(t) {
  return yt(t == null ? void 0 : t[pd]);
}
function _d(t) {
  return Dh(this, arguments, function() {
    var n, r, i, a;
    return Zs(this, function(o) {
      switch (o.label) {
        case 0:
          n = t.getReader(), o.label = 1;
        case 1:
          o.trys.push([1, , 9, 10]), o.label = 2;
        case 2:
          return [4, Mi(n.read())];
        case 3:
          return r = o.sent(), i = r.value, a = r.done, a ? [4, Mi(void 0)] : [3, 5];
        case 4:
          return [2, o.sent()];
        case 5:
          return [4, Mi(i)];
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
function yd(t) {
  return yt(t == null ? void 0 : t.getReader);
}
function _r(t) {
  if (t instanceof vn)
    return t;
  if (t != null) {
    if (vd(t))
      return G_(t);
    if (fd(t))
      return W_(t);
    if (hd(t))
      return q_(t);
    if (md(t))
      return Id(t);
    if (bd(t))
      return z_(t);
    if (yd(t))
      return X_(t);
  }
  throw gd(t);
}
function G_(t) {
  return new vn(function(e) {
    var n = t[rl]();
    if (yt(n.subscribe))
      return n.subscribe(e);
    throw new TypeError("Provided object does not correctly implement Symbol.observable");
  });
}
function W_(t) {
  return new vn(function(e) {
    for (var n = 0; n < t.length && !e.closed; n++)
      e.next(t[n]);
    e.complete();
  });
}
function q_(t) {
  return new vn(function(e) {
    t.then(function(n) {
      e.closed || (e.next(n), e.complete());
    }, function(n) {
      return e.error(n);
    }).then(null, cd);
  });
}
function z_(t) {
  return new vn(function(e) {
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
function Id(t) {
  return new vn(function(e) {
    K_(t, e).catch(function(n) {
      return e.error(n);
    });
  });
}
function X_(t) {
  return Id(_d(t));
}
function K_(t, e) {
  var n, r, i, a;
  return Ac(this, void 0, void 0, function() {
    var o, u;
    return Zs(this, function(l) {
      switch (l.label) {
        case 0:
          l.trys.push([0, 5, 6, 11]), n = Ph(t), l.label = 1;
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
function Pr(t, e, n, r, i) {
  r === void 0 && (r = 0), i === void 0 && (i = !1);
  var a = e.schedule(function() {
    n(), i ? t.add(this.schedule(null, r)) : this.unsubscribe();
  }, r);
  if (t.add(a), !i)
    return a;
}
function Ed(t, e) {
  return e === void 0 && (e = 0), Pn(function(n, r) {
    n.subscribe(Mn(r, function(i) {
      return Pr(r, t, function() {
        return r.next(i);
      }, e);
    }, function() {
      return Pr(r, t, function() {
        return r.complete();
      }, e);
    }, function(i) {
      return Pr(r, t, function() {
        return r.error(i);
      }, e);
    }));
  });
}
function Sd(t, e) {
  return e === void 0 && (e = 0), Pn(function(n, r) {
    r.add(t.schedule(function() {
      return n.subscribe(r);
    }, e));
  });
}
function Y_(t, e) {
  return _r(t).pipe(Sd(e), Ed(e));
}
function Z_(t, e) {
  return _r(t).pipe(Sd(e), Ed(e));
}
function Q_(t, e) {
  return new vn(function(n) {
    var r = 0;
    return e.schedule(function() {
      r === t.length ? n.complete() : (n.next(t[r++]), n.closed || this.schedule());
    });
  });
}
function J_(t, e) {
  return new vn(function(n) {
    var r;
    return Pr(n, e, function() {
      r = t[pd](), Pr(n, e, function() {
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
function Ad(t, e) {
  if (!t)
    throw new Error("Iterable cannot be null");
  return new vn(function(n) {
    Pr(n, e, function() {
      var r = t[Symbol.asyncIterator]();
      Pr(n, e, function() {
        r.next().then(function(i) {
          i.done ? n.complete() : n.next(i.value);
        });
      }, 0, !0);
    });
  });
}
function $_(t, e) {
  return Ad(_d(t), e);
}
function ey(t, e) {
  if (t != null) {
    if (vd(t))
      return Y_(t, e);
    if (fd(t))
      return Q_(t, e);
    if (hd(t))
      return Z_(t, e);
    if (md(t))
      return Ad(t, e);
    if (bd(t))
      return J_(t, e);
    if (yd(t))
      return $_(t, e);
  }
  throw gd(t);
}
function Ba(t, e) {
  return e ? ey(t, e) : _r(t);
}
function Eo() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  var n = Vo(t);
  return Ba(t, n);
}
function hn(t, e) {
  return Pn(function(n, r) {
    var i = 0;
    n.subscribe(Mn(r, function(a) {
      r.next(t.call(e, a, i++));
    }));
  });
}
var ty = Array.isArray;
function ny(t, e) {
  return ty(e) ? t.apply(void 0, $n([], mr(e))) : t(e);
}
function ry(t) {
  return hn(function(e) {
    return ny(t, e);
  });
}
var iy = Array.isArray, ay = Object.getPrototypeOf, oy = Object.prototype, sy = Object.keys;
function ly(t) {
  if (t.length === 1) {
    var e = t[0];
    if (iy(e))
      return { args: e, keys: null };
    if (uy(e)) {
      var n = sy(e);
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
function uy(t) {
  return t && typeof t == "object" && ay(t) === oy;
}
function cy(t, e) {
  return t.reduce(function(n, r, i) {
    return n[r] = e[i], n;
  }, {});
}
function pu() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  var n = Vo(t), r = V_(t), i = ly(t), a = i.args, o = i.keys;
  if (a.length === 0)
    return Ba([], n);
  var u = new vn(dy(a, n, o ? function(l) {
    return cy(o, l);
  } : ta));
  return r ? u.pipe(ry(r)) : u;
}
function dy(t, e, n) {
  return n === void 0 && (n = ta), function(r) {
    bu(e, function() {
      for (var i = t.length, a = new Array(i), o = i, u = i, l = function(d) {
        bu(e, function() {
          var v = Ba(t[d], e), f = !1;
          v.subscribe(Mn(r, function(m) {
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
function bu(t, e, n) {
  t ? Pr(n, t, e) : e();
}
function fy(t, e, n, r, i, a, o, u) {
  var l = [], c = 0, d = 0, v = !1, f = function() {
    v && !l.length && !c && e.complete();
  }, m = function(g) {
    return c < r ? h(g) : l.push(g);
  }, h = function(g) {
    c++;
    var b = !1;
    _r(n(g, d++)).subscribe(Mn(e, function(y) {
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
  return t.subscribe(Mn(e, m, function() {
    v = !0, f();
  })), function() {
  };
}
function So(t, e, n) {
  return n === void 0 && (n = 1 / 0), yt(e) ? So(function(r, i) {
    return hn(function(a, o) {
      return e(r, a, i, o);
    })(_r(t(r, i)));
  }, n) : (typeof e == "number" && (n = e), Pn(function(r, i) {
    return fy(r, i, t, n);
  }));
}
function hy(t) {
  return So(ta, t);
}
function vy() {
  return hy(1);
}
function _u() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  return vy()(Ba(t, Vo(t)));
}
function Ao(t) {
  return Pn(function(e, n) {
    var r = null, i = !1, a;
    r = e.subscribe(Mn(n, void 0, void 0, function(o) {
      a = _r(t(o, Ao(t)(e))), r ? (r.unsubscribe(), r = null, a.subscribe(n)) : i = !0;
    })), i && (r.unsubscribe(), r = null, a.subscribe(n));
  });
}
function my(t, e) {
  return yt(e) ? So(t, e, 1) : So(t, 1);
}
function gy(t, e) {
  return e === void 0 && (e = k_), Pn(function(n, r) {
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
    n.subscribe(Mn(r, function(c) {
      a = c, o = e.now(), i || (i = e.schedule(l, t), r.add(i));
    }, function() {
      u(), r.complete();
    }, void 0, function() {
      a = i = null;
    }));
  });
}
function Ta(t) {
  return t <= 0 ? function() {
    return B_;
  } : Pn(function(e, n) {
    var r = 0;
    e.subscribe(Mn(n, function(i) {
      ++r <= t && (n.next(i), t <= r && n.complete());
    }));
  });
}
function py(t, e) {
  return e === void 0 && (e = ta), t = t ?? by, Pn(function(n, r) {
    var i, a = !0;
    n.subscribe(Mn(r, function(o) {
      var u = e(o);
      (a || !t(i, u)) && (a = !1, i = u, r.next(o));
    }));
  });
}
function by(t, e) {
  return t === e;
}
function _y(t) {
  t === void 0 && (t = {});
  var e = t.connector, n = e === void 0 ? function() {
    return new Fo();
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
    return Pn(function(I, _) {
      m++, !g && !h && b();
      var E = f = f ?? n();
      _.add(function() {
        m--, m === 0 && !g && !h && (v = ls(S, l));
      }), E.subscribe(_), !d && m > 0 && (d = new xa({
        next: function(A) {
          return E.next(A);
        },
        error: function(A) {
          g = !0, b(), v = ls(y, i, A), E.error(A);
        },
        complete: function() {
          h = !0, b(), v = ls(y, o), E.complete();
        }
      }), _r(I).subscribe(d));
    })(c);
  };
}
function ls(t, e) {
  for (var n = [], r = 2; r < arguments.length; r++)
    n[r - 2] = arguments[r];
  if (e === !0) {
    t();
    return;
  }
  if (e !== !1) {
    var i = new xa({
      next: function() {
        i.unsubscribe(), t();
      }
    });
    return _r(e.apply(void 0, $n([], mr(n)))).subscribe(i);
  }
}
function yu(t, e, n) {
  var r, i = !1;
  return r = t, _y({
    connector: function() {
      return new P_(r, e, n);
    },
    resetOnError: !0,
    resetOnComplete: !1,
    resetOnRefCountZero: i
  });
}
function Iu() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  var n = Vo(t);
  return Pn(function(r, i) {
    (n ? _u(t, r, n) : _u(t, r)).subscribe(i);
  });
}
function Eu(t, e) {
  return Pn(function(n, r) {
    var i = null, a = 0, o = !1, u = function() {
      return o && !i && r.complete();
    };
    n.subscribe(Mn(r, function(l) {
      i == null || i.unsubscribe();
      var c = 0, d = a++;
      _r(t(l, d)).subscribe(i = Mn(r, function(v) {
        return r.next(e ? e(l, v, d, c++) : v);
      }, function() {
        i = null, u();
      }));
    }, function() {
      o = !0, u();
    }));
  });
}
function Su(t, e, n) {
  var r = yt(t) || e || n ? { next: t, error: e, complete: n } : t;
  return r ? Pn(function(i, a) {
    var o;
    (o = r.subscribe) === null || o === void 0 || o.call(r);
    var u = !0;
    i.subscribe(Mn(a, function(l) {
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
  }) : ta;
}
function Cd(t) {
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
var yy = /* @__PURE__ */ function() {
  function t(e, n, r, i) {
    i === void 0 && (i = "download_load"), this.originalEvent = e, this.xhr = n, this.request = r, this.type = i;
    var a = n.status, o = n.responseType;
    this.status = a ?? 0, this.responseType = o ?? "";
    var u = n.getAllResponseHeaders();
    this.responseHeaders = u ? u.split(`
`).reduce(function(d, v) {
      var f = v.indexOf(": ");
      return d[v.slice(0, f)] = v.slice(f + 2), d;
    }, {}) : {}, this.response = Cd(n);
    var l = e.loaded, c = e.total;
    this.loaded = l, this.total = c;
  }
  return t;
}(), Co = tl(function(t) {
  return function(n, r, i) {
    this.message = n, this.name = "AjaxError", this.xhr = r, this.request = i, this.status = r.status, this.responseType = r.responseType;
    var a;
    try {
      a = Cd(r);
    } catch {
      a = r.responseText;
    }
    this.response = a;
  };
}), Iy = function() {
  function t(e, n) {
    return Co.call(this, "ajax timeout", e, n), this.name = "AjaxTimeoutError", this;
  }
  return t.prototype = Object.create(Co.prototype), t;
}();
function Ey(t, e) {
  return _i({ method: "GET", url: t, headers: e });
}
function Sy(t, e, n) {
  return _i({ method: "POST", url: t, body: e, headers: n });
}
function Ay(t, e) {
  return _i({ method: "DELETE", url: t, headers: e });
}
function Cy(t, e, n) {
  return _i({ method: "PUT", url: t, body: e, headers: n });
}
function xy(t, e, n) {
  return _i({ method: "PATCH", url: t, body: e, headers: n });
}
var Ty = hn(function(t) {
  return t.response;
});
function wy(t, e) {
  return Ty(_i({
    method: "GET",
    url: t,
    headers: e
  }));
}
var _i = function() {
  var t = function(e) {
    var n = typeof e == "string" ? {
      url: e
    } : e;
    return Oy(n);
  };
  return t.get = Ey, t.post = Sy, t.delete = Ay, t.put = Cy, t.patch = xy, t.getJSON = wy, t;
}(), Ly = "upload", Au = "download", us = "loadstart", cs = "progress", Cu = "load";
function Oy(t) {
  return new vn(function(e) {
    var n, r, i = ue({ async: !0, crossDomain: !1, withCredentials: !1, method: "GET", timeout: 0, responseType: "json" }, t), a = i.queryParams, o = i.body, u = i.headers, l = i.url;
    if (!l)
      throw new TypeError("url is required");
    if (a) {
      var c;
      if (l.includes("?")) {
        var d = l.split("?");
        if (2 < d.length)
          throw new TypeError("invalid url");
        c = new URLSearchParams(d[1]), new URLSearchParams(a).forEach(function(N, W) {
          return c.set(W, N);
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
    var S = Ry(o, v), I = ue(ue({}, i), {
      url: l,
      headers: v,
      body: S
    }), _;
    _ = t.createXHR ? t.createXHR() : new XMLHttpRequest();
    {
      var E = t.progressSubscriber, A = t.includeDownloadProgress, L = A === void 0 ? !1 : A, C = t.includeUploadProgress, T = C === void 0 ? !1 : C, k = function(N, W) {
        _.addEventListener(N, function() {
          var J, H = W();
          (J = E == null ? void 0 : E.error) === null || J === void 0 || J.call(E, H), e.error(H);
        });
      };
      k("timeout", function() {
        return new Iy(_, I);
      }), k("abort", function() {
        return new Co("aborted", _, I);
      });
      var K = function(N, W) {
        return new yy(W, _, I, N + "_" + W.type);
      }, j = function(N, W, J) {
        N.addEventListener(W, function(H) {
          e.next(K(J, H));
        });
      };
      T && [us, cs, Cu].forEach(function(N) {
        return j(_.upload, N, Ly);
      }), E && [us, cs].forEach(function(N) {
        return _.upload.addEventListener(N, function(W) {
          var J;
          return (J = E == null ? void 0 : E.next) === null || J === void 0 ? void 0 : J.call(E, W);
        });
      }), L && [us, cs].forEach(function(N) {
        return j(_, N, Au);
      });
      var D = function(N) {
        var W = "ajax error" + (N ? " " + N : "");
        e.error(new Co(W, _, I));
      };
      _.addEventListener("error", function(N) {
        var W;
        (W = E == null ? void 0 : E.error) === null || W === void 0 || W.call(E, N), D();
      }), _.addEventListener(Cu, function(N) {
        var W, J, H = _.status;
        if (H < 400) {
          (W = E == null ? void 0 : E.complete) === null || W === void 0 || W.call(E);
          var R = void 0;
          try {
            R = K(Au, N);
          } catch (G) {
            e.error(G);
            return;
          }
          e.next(R), e.complete();
        } else
          (J = E == null ? void 0 : E.error) === null || J === void 0 || J.call(E, N), D(H);
      });
    }
    var w = I.user, x = I.method, M = I.async;
    w ? _.open(x, l, M, w, I.password) : _.open(x, l, M), M && (_.timeout = I.timeout, _.responseType = I.responseType), "withCredentials" in _ && (_.withCredentials = I.withCredentials);
    for (var f in v)
      v.hasOwnProperty(f) && _.setRequestHeader(f, v[f]);
    return S ? _.send(S) : _.send(), function() {
      _ && _.readyState !== 4 && _.abort();
    };
  });
}
function Ry(t, e) {
  var n;
  if (!t || typeof t == "string" || Uy(t) || ky(t) || Dy(t) || Py(t) || Ny(t) || By(t))
    return t;
  if (Hy(t))
    return t.buffer;
  if (typeof t == "object")
    return e["content-type"] = (n = e["content-type"]) !== null && n !== void 0 ? n : "application/json;charset=utf-8", JSON.stringify(t);
  throw new TypeError("Unknown body type");
}
var My = Object.prototype.toString;
function al(t, e) {
  return My.call(t) === "[object " + e + "]";
}
function Dy(t) {
  return al(t, "ArrayBuffer");
}
function Py(t) {
  return al(t, "File");
}
function Ny(t) {
  return al(t, "Blob");
}
function Hy(t) {
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView(t);
}
function Uy(t) {
  return typeof FormData < "u" && t instanceof FormData;
}
function ky(t) {
  return typeof URLSearchParams < "u" && t instanceof URLSearchParams;
}
function By(t) {
  return typeof ReadableStream < "u" && t instanceof ReadableStream;
}
class Fy {
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
const Vy = new Fy("https://demo.compas.energy", {}, "DSOM Versatel Production URL"), jy = [Vy], Gy = jy[0].getUrl();
class ol {
  constructor(e = {}) {
    this.configuration = e;
  }
  get basePath() {
    return this.configuration.basePath ?? Gy;
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
  constructor(e = new ol()) {
    this.configuration = e, this.middleware = [], this.withMiddleware = (n) => {
      const r = this.clone();
      return r.middleware = r.middleware.concat(n), r;
    }, this.withPreMiddleware = (n) => this.withMiddleware(n.map((r) => ({ pre: r }))), this.withPostMiddleware = (n) => this.withMiddleware(n.map((r) => ({ post: r }))), this.createRequestArgs = ({ url: n, query: r, method: i, headers: a, body: o, responseType: u }) => ({
      url: `${this.configuration.basePath}${n}${r && Object.keys(r).length ? `?${Wy(r)}` : ""}`,
      method: i,
      headers: a,
      body: o instanceof FormData ? o : JSON.stringify(o),
      responseType: u ?? "json"
    }), this.rxjsRequest = (n) => Eo(n).pipe(
      hn((r) => (this.middleware.filter((i) => i.pre).forEach((i) => r = i.pre(r)), r)),
      my(
        (r) => _i(r).pipe(
          hn((i) => (this.middleware.filter((a) => a.post).forEach((a) => i = a.post(i)), i))
        )
      )
    ), this.clone = () => Object.assign(Object.create(Object.getPrototypeOf(this)), this), this.middleware = e.middleware;
  }
  request(e, n) {
    return this.rxjsRequest(this.createRequestArgs(e)).pipe(
      hn((r) => {
        const { status: i, response: a } = r;
        if (i >= 200 && i < 300)
          return (n == null ? void 0 : n.response) === "raw" ? r : a;
        throw r;
      })
    );
  }
}
const zt = (t) => encodeURIComponent(`${t}`), Wy = (t) => Object.entries(t).map(
  ([e, n]) => n instanceof Array ? n.map((r) => `${zt(e)}=${zt(r)}`).join("&") : `${zt(e)}=${zt(n)}`
).join("&"), dn = (t, e, n) => {
  if (t == null)
    throw new Error(`Parameter "${e}" was null or undefined when calling "${n}".`);
};
class qy extends xd {
  archiveResource({ id: e, version: n, xAuthor: r, xApprover: i, contentType: a, xFilename: o, body: u }, l) {
    dn(e, "id", "archiveResource"), dn(n, "version", "archiveResource");
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
    dn(e, "id", "archiveSclResource"), dn(n, "version", "archiveSclResource");
    const i = {};
    return this.request({
      url: "/api/archive/scl/{id}/versions/{version}".replace("{id}", zt(e)).replace("{version}", zt(n)),
      method: "POST",
      headers: i
    }, r == null ? void 0 : r.responseOpts);
  }
  retrieveArchivedResourceHistory({ id: e }, n) {
    dn(e, "id", "retrieveArchivedResourceHistory");
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
class zy extends xd {
  assignResourceToLocation({ locationId: e, uuid: n }, r) {
    dn(e, "locationId", "assignResourceToLocation"), dn(n, "uuid", "assignResourceToLocation");
    const i = {};
    return this.request({
      url: "/api/locations/{locationId}/resources/{uuid}/assign".replace("{locationId}", zt(e)).replace("{uuid}", zt(n)),
      method: "POST",
      headers: i
    }, r == null ? void 0 : r.responseOpts);
  }
  createLocation({ location: e }, n) {
    dn(e, "location", "createLocation");
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
    dn(e, "locationId", "deleteLocation");
    const r = {};
    return this.request({
      url: "/api/locations/{locationId}".replace("{locationId}", zt(e)),
      method: "DELETE",
      headers: r
    }, n == null ? void 0 : n.responseOpts);
  }
  getLocation({ locationId: e }, n) {
    dn(e, "locationId", "getLocation");
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
    dn(e, "locationId", "unassignResourceFromLocation"), dn(n, "uuid", "unassignResourceFromLocation");
    const i = {};
    return this.request({
      url: "/api/locations/{locationId}/resources/{uuid}/unassign".replace("{locationId}", zt(e)).replace("{uuid}", zt(n)),
      method: "POST",
      headers: i
    }, r == null ? void 0 : r.responseOpts);
  }
  updateLocation({ locationId: e, location: n }, r) {
    dn(e, "locationId", "updateLocation"), dn(n, "location", "updateLocation");
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
class Xy {
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
const Qr = class Qr {
  constructor() {
    bn(this, "baseUrl", "/compas-scl-data-service");
    bn(this, "apiClient");
    this.apiClient = this.generateApiClient();
  }
  static getInstance() {
    return Qr.instance || (Qr.instance = new Qr()), Qr.instance;
  }
  searchArchive(e) {
    return this.apiClient.searchArchivedResources({ archivedResourcesSearch: e }).pipe(
      Ta(1),
      hn((n) => n.resources),
      hn((n) => this.mapResourcesToArchiveSearchResults(n))
    );
  }
  retrieveArchivedResourceHistory(e) {
    return this.apiClient.retrieveArchivedResourceHistory({ id: e }).pipe(
      Ta(1),
      hn((n) => n.versions),
      hn((n) => this.mapResourcesToArchiveSearchResults(n))
    );
  }
  findByUUIDAndVersion(e, n, r) {
    return Ba(
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
    return new Xy(
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
    const e = new ol({
      basePath: this.baseUrl
      // accessToken: authInfo.token,
    });
    return new qy(e);
  }
};
bn(Qr, "instance");
let xo = Qr;
const Jr = class Jr {
  constructor() {
    bn(this, "baseUrl", "/compas-scl-data-service");
  }
  static getInstance() {
    return Jr.instance || (Jr.instance = new Jr()), Jr.instance;
  }
  listLocations() {
    return this.generateApiClient().getLocations({}).pipe(
      Ta(1)
    );
  }
  generateApiClient() {
    const e = new ol({
      basePath: this.baseUrl
      // accessToken: authInfo.token,
    });
    return new zy(e);
  }
};
bn(Jr, "instance");
let Ps = Jr;
function Ky(t, e) {
  Ce(e, !0);
  const n = xo.getInstance(), r = { store: en([]) };
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
    e.searchResult && n.retrieveArchivedResourceHistory(e.searchResult.uuid).pipe(Ta(1), Su((c) => {
      r.store.set(c), X(i, !0);
    })).subscribe();
  });
  function l(c) {
    var v;
    let d;
    c.fields && c.fields.length && (d = (v = c.fields.find((f) => f.key === "SOURCE_RESOURCE_ID")) == null ? void 0 : v.value), n.findByUUIDAndVersion(d, c.type, c.version).pipe(
      Ta(1),
      Su((f) => {
        const m = window.URL.createObjectURL(f), h = document.createElement("a");
        h.href = m, h.download = c.filename, h.style.display = "none", document.body.appendChild(h), h.click(), document.body.removeChild(h), window.URL.revokeObjectURL(m);
      }),
      Ao((f) => (console.error(f), Ca.error("Download failed", "An error occurred while trying to download the resource.", 5e3), Eo(void 0)))
    ).subscribe();
  }
  E_(t, {
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
var Yy = /* @__PURE__ */ de("<span><!></span>"), Zy = /* @__PURE__ */ de("<!> <br/>", 1), Qy = /* @__PURE__ */ de("<i> </i>"), Jy = /* @__PURE__ */ de('<div class="result-container"><div class="content"><!></div></div>');
function $y(t, e) {
  Ce(e, !0);
  let n = p(e, "searchResults", 19, () => []), r = p(e, "noResourcesLabel", 3, "No resources found.");
  var i = Jy(), a = se(i), o = se(a);
  {
    var u = (c) => {
      var d = ne(), v = Z(d);
      Ln(v, 17, n, (f) => f.uuid, (f, m) => {
        var h = Zy(), g = Z(h);
        id(g, {
          get title() {
            return s(m).name;
          },
          open: !0,
          content: (y) => {
            var S = Yy(), I = se(S);
            Ky(I, {
              get searchResult() {
                return s(m);
              }
            }), O(y, S);
          },
          $$slots: { content: !0 }
        }), O(f, h);
      }), O(c, d);
    }, l = (c) => {
      var d = Qy(), v = se(d);
      Oe(() => at(v, r())), O(c, d);
    };
    ae(o, (c) => {
      n().length ? c(u) : c(l, !1);
    });
  }
  O(t, i), xe();
}
um({ en: Im, de: mm });
var eI = /* @__PURE__ */ de("<span><!></span>"), tI = /* @__PURE__ */ de('<!> <div class="separator svelte-1gp5xzm"></div>', 1), nI = /* @__PURE__ */ de('<div class="oscd-app"><div class="search-filter svelte-1gp5xzm"><!></div> <div class="content-container svelte-1gp5xzm"><!></div></div> <!>', 1);
function rI(t, e) {
  Ce(e, !0);
  const n = () => Jn(lm, "$_", r), [r, i] = br(), a = xo.getInstance(), o = Ps.getInstance();
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
  const f = new vu([]), m = new vu(""), h = m.pipe(
    Iu(),
    // emit the initial value immediately
    Eu((D, w) => w === 0 ? [D] : m.pipe(gy(300)))
  ), g = o.listLocations().pipe(
    hn((D) => {
      const w = new Map(D.map((M) => [M.key, M.name])), x = s(d).find((M) => M.key === "location");
      return x && (x.options = D.map((M) => ({ value: M.key, label: M.name }))), X(c, w, !0), w;
    }),
    Ao((D) => (console.error("Error fetching locations:", D), Ca.error("Failed to load locations."), Eo(/* @__PURE__ */ new Map()))),
    yu(1)
  );
  function b(D) {
    return D ? s(c).get(D) ?? D ?? "Unknown" : "Unknown";
  }
  function y(D, w) {
    const x = {
      uuid: void 0,
      type: void 0,
      name: void 0,
      location: void 0,
      from: void 0,
      to: void 0
    };
    return D.forEach((M) => {
      if (M.value) {
        if (M.type === "date") {
          const N = new Date(M.value);
          M.key === "from" && (x.from = N.toISOString()), M.key === "to" && (N.setHours(23, 59, 59, 999), x.to = N.toISOString());
          return;
        }
        M.key in x && (x[M.key] = M.value);
      }
    }), w && w.trim() !== "" && (x.name = w.trim()), x;
  }
  const I = pu([f, h]).pipe(py((D, w) => JSON.stringify(D) === JSON.stringify(w)), hn(([D, w]) => y(D, w))).pipe(
    Eu((D) => pu({
      results: a.searchArchive(D).pipe(Ao((w) => (console.error("Search error:", w), Ca.error("Search failed. Please try again later."), Eo([])))),
      locations: g
    }).pipe(
      hn(({ results: w, locations: x }) => {
        const M = /* @__PURE__ */ new Map();
        for (const N of w) {
          const W = N.location ?? "Default";
          M.has(W) || M.set(W, []), M.get(W).push(N);
        }
        return { grouped: M, locations: x };
      }),
      hn((w) => ({ loading: !1, ...w })),
      Iu({ loading: !0 })
      // loading state at start of each search
    )),
    yu(1)
  );
  rt(() => {
    const D = I.subscribe((w) => {
      X(l, w.loading, !0), w.loading || (X(u, w.grouped, !0), X(c, w.locations, !0));
    });
    return () => D.unsubscribe();
  });
  var _ = nI(), E = Z(_), A = se(E), L = se(A);
  c_(L, {
    searchLabel: "Search file name...",
    onFilterChange: () => f.next(s(d)),
    onSearchInput: () => m.next(s(v)),
    get filters() {
      return s(d);
    },
    set filters(D) {
      X(d, D, !0);
    },
    get searchText() {
      return s(v);
    },
    set searchText(D) {
      X(v, D, !0);
    }
  });
  var C = Ie(A, 2), T = se(C);
  {
    var k = (D) => {
      ad(D, { indeterminate: !0 });
    }, K = (D) => {
      var w = ne(), x = Z(w);
      {
        var M = (N) => {
          var W = ne(), J = Z(W);
          Ln(J, 18, () => s(u), (H) => H, (H, R) => {
            var G = tI(), Ae = Z(G);
            {
              const be = (V) => {
                var B = eI(), ee = se(B);
                {
                  let Q = /* @__PURE__ */ ge(() => n()("no_resources_found"));
                  $y(ee, {
                    get searchResults() {
                      return R[1];
                    },
                    get noResourcesLabel() {
                      return s(Q);
                    }
                  });
                }
                O(V, B);
              };
              let F = /* @__PURE__ */ ge(() => b(R[0]));
              id(Ae, {
                open: !0,
                get title() {
                  return s(F);
                },
                content: be,
                $$slots: { content: !0 }
              });
            }
            O(H, G);
          }), O(N, W);
        };
        ae(x, (N) => {
          s(u).size && N(M);
        });
      }
      O(D, w);
    };
    ae(T, (D) => {
      s(l) ? D(k) : D(K, !1);
    });
  }
  var j = Ie(E, 2);
  Cb(j, {}), O(t, _), xe(), i();
}
const Td = "archive-explorer", wd = "0.0.1";
var iI = /* @__PURE__ */ de('<!> <input type="hidden" name="package-name"/> <input type="hidden" name="package-version"/>', 1);
function aI(t, e) {
  Ce(e, !0);
  let n = p(e, "dev", 3, !1);
  var r = iI(), i = Z(r);
  {
    var a = (l) => {
      rI(l, {});
    };
    ae(i, (l) => {
      (e.doc || n()) && l(a);
    });
  }
  var o = Ie(i, 2), u = Ie(o, 2);
  Oe(() => {
    xl(o, Td), xl(u, wd);
  }), O(t, r), xe();
}
var Bi;
class cI extends HTMLElement {
  constructor() {
    super();
    tt(this, Bi);
    bn(this, "_doc");
    bn(this, "_editCount");
    Ue(this, Bi, /* @__PURE__ */ ve(ce({ doc: void 0, editCount: void 0 })));
  }
  get props() {
    return s(re(this, Bi));
  }
  set props(n) {
    X(re(this, Bi), n, !0);
  }
  connectedCallback() {
    this.attachShadow({ mode: "open" }), this.props.doc = this._doc, this.props.editCount = this.editCount;
    const n = oI();
    this.shadowRoot.appendChild(n);
    const r = () => Wf(aI, { target: this.shadowRoot, props: this.props });
    n.addEventListener("load", r, { once: !0 }), n.addEventListener("error", r, { once: !0 });
  }
  set doc(n) {
    this._doc = n, this.props.doc = n;
  }
  set editCount(n) {
    this._editCount = n, this.props.editCount = n;
  }
}
Bi = new WeakMap();
function oI() {
  const t = `${Td}-v${wd}-style`, e = sI(), n = document.createElement("link");
  return n.rel = "stylesheet", n.type = "text/css", n.href = e, n.id = t, n;
}
function sI() {
  const t = new URL(import.meta.url), e = t.origin, n = t.pathname.split("/").slice(0, -1).filter(Boolean).join("/");
  return [e, n, "style.css"].filter(Boolean).join("/");
}
export {
  cI as default
};
