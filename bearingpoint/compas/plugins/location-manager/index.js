var Pu = Object.defineProperty;
var Bo = (e) => {
  throw TypeError(e);
};
var Mu = (e, t, n) => t in e ? Pu(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Er = (e, t, n) => Mu(e, typeof t != "symbol" ? t + "" : t, n), _a = (e, t, n) => t.has(e) || Bo("Cannot " + n);
var F = (e, t, n) => (_a(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Me = (e, t, n) => t.has(e) ? Bo("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), fe = (e, t, n, r) => (_a(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), _t = (e, t, n) => (_a(e, t, "access private method"), n);
const st = Symbol(), Bu = "http://www.w3.org/1999/xhtml", Uu = "http://www.w3.org/2000/svg", Fu = "@attach", Vs = !1;
var oa = Array.isArray, Nu = Array.prototype.indexOf, ho = Array.from, Wi = Object.defineProperty, Fn = Object.getOwnPropertyDescriptor, qs = Object.getOwnPropertyDescriptors, ku = Object.prototype, Gu = Array.prototype, vo = Object.getPrototypeOf, Uo = Object.isExtensible;
function $r(e) {
  return typeof e == "function";
}
const Q = () => {
};
function zs(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function Xs() {
  var e, t, n = new Promise((r, i) => {
    e = r, t = i;
  });
  return { promise: n, resolve: e, reject: t };
}
const Ot = 2, go = 4, po = 8, fr = 16, An = 32, hr = 64, mo = 128, Yt = 256, Zi = 512, St = 1024, Vt = 2048, jn = 4096, an = 8192, vr = 16384, bo = 32768, gr = 65536, Fo = 1 << 17, ju = 1 << 18, zr = 1 << 19, Vu = 1 << 20, ka = 1 << 21, sa = 1 << 22, sr = 1 << 23, hn = Symbol("$state"), Ws = Symbol("legacy props"), qu = Symbol(""), Ar = new class extends Error {
  constructor() {
    super(...arguments);
    Er(this, "name", "StaleReactionError");
    Er(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
function _o(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function zu() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function Xu(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Wu() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Zu(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Yu() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Ku(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Qu() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Ju() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function $u() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function ec() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
function tc() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function nc() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let rc = !1;
function Zs(e) {
  return e === this.v;
}
function yo(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Ys(e) {
  return !yo(e, this.v);
}
let Xr = !1, ic = !1;
function ac() {
  Xr = !0;
}
let qe = null;
function Mr(e) {
  qe = e;
}
function pe(e) {
  return (
    /** @type {T} */
    Ks().get(e)
  );
}
function se(e, t) {
  return Ks().set(e, t), t;
}
function Te(e, t = !1, n) {
  qe = {
    p: qe,
    c: null,
    e: null,
    s: e,
    x: null,
    l: Xr && !t ? { s: null, u: null, $: [] } : null
  };
}
function Oe(e) {
  var t = (
    /** @type {ComponentContext} */
    qe
  ), n = t.e;
  if (n !== null) {
    t.e = null;
    for (var r of n)
      fl(r);
  }
  return e !== void 0 && (t.x = e), qe = t.p, e ?? /** @type {T} */
  {};
}
function bi() {
  return !Xr || qe !== null && qe.l === null;
}
function Ks(e) {
  return qe === null && _o(), qe.c ?? (qe.c = new Map(oc(qe) || void 0));
}
function oc(e) {
  let t = e.p;
  for (; t !== null; ) {
    const n = t.c;
    if (n !== null)
      return n;
    t = t.p;
  }
  return null;
}
let tr = [];
function Qs() {
  var e = tr;
  tr = [], zs(e);
}
function Gn(e) {
  if (tr.length === 0 && !si) {
    var t = tr;
    queueMicrotask(() => {
      t === tr && Qs();
    });
  }
  tr.push(e);
}
function sc() {
  for (; tr.length > 0; )
    Qs();
}
const lc = /* @__PURE__ */ new WeakMap();
function Js(e) {
  var t = Ae;
  if (t === null)
    return Ce.f |= sr, e;
  if (t.f & bo)
    Br(e, t);
  else {
    if (!(t.f & mo))
      throw !t.parent && e instanceof Error && $s(e), e;
    t.b.error(e);
  }
}
function Br(e, t) {
  for (; t !== null; ) {
    if (t.f & mo)
      try {
        t.b.error(e);
        return;
      } catch (n) {
        e = n;
      }
    t = t.parent;
  }
  throw e instanceof Error && $s(e), e;
}
function $s(e) {
  const t = lc.get(e);
  t && (Wi(e, "message", {
    value: t.message
  }), Wi(e, "stack", {
    value: t.stack
  }));
}
const Oi = /* @__PURE__ */ new Set();
let ke = null, Gi = null, ct = null, Ga = /* @__PURE__ */ new Set(), dn = [], la = null, ja = !1, si = !1;
var Tr, Or, nr, gi, Rr, Hr, rr, Dr, pi, mi, Kt, Va, ji, qa;
const ra = class ra {
  constructor() {
    Me(this, Kt);
    /**
     * The current values of any sources that are updated in this batch
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Source, any>}
     */
    Er(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any sources that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Source, any>}
     */
    Me(this, Tr, /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<() => void>}
     */
    Me(this, Or, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    Me(this, nr, 0);
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    Me(this, gi, null);
    /**
     * Async effects inside a newly-created `<svelte:boundary>`
     * — these do not prevent the batch from committing
     * @type {Effect[]}
     */
    Me(this, Rr, []);
    /**
     * Template effects and `$effect.pre` effects, which run when
     * a batch is committed
     * @type {Effect[]}
     */
    Me(this, Hr, []);
    /**
     * The same as `#render_effects`, but for `$effect` (which runs after)
     * @type {Effect[]}
     */
    Me(this, rr, []);
    /**
     * Block effects, which may need to re-run on subsequent flushes
     * in order to update internal sources (e.g. each block items)
     * @type {Effect[]}
     */
    Me(this, Dr, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Effect[]}
     */
    Me(this, pi, []);
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Effect[]}
     */
    Me(this, mi, []);
    /**
     * A set of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`
     * @type {Set<Effect>}
     */
    Er(this, "skipped_effects", /* @__PURE__ */ new Set());
  }
  /**
   *
   * @param {Effect[]} root_effects
   */
  process(t) {
    var a;
    dn = [], Gi = null, this.apply();
    for (const o of t)
      _t(this, Kt, Va).call(this, o);
    if (F(this, nr) === 0) {
      var n = ct;
      _t(this, Kt, qa).call(this);
      var r = F(this, Hr), i = F(this, rr);
      fe(this, Hr, []), fe(this, rr, []), fe(this, Dr, []), Gi = this, ke = null, ct = n, No(r), No(i), Gi = null, (a = F(this, gi)) == null || a.resolve();
    } else
      _t(this, Kt, ji).call(this, F(this, Hr)), _t(this, Kt, ji).call(this, F(this, rr)), _t(this, Kt, ji).call(this, F(this, Dr));
    ct = null;
    for (const o of F(this, Rr))
      di(o);
    fe(this, Rr, []);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Source} source
   * @param {any} value
   */
  capture(t, n) {
    F(this, Tr).has(t) || F(this, Tr).set(t, n), this.current.set(t, t.v), ct == null || ct.set(t, t.v);
  }
  activate() {
    ke = this;
  }
  deactivate() {
    ke = null, ct = null;
  }
  flush() {
    if (dn.length > 0) {
      if (this.activate(), el(), ke !== null && ke !== this)
        return;
    } else F(this, nr) === 0 && _t(this, Kt, qa).call(this);
    this.deactivate();
    for (const t of Ga)
      if (Ga.delete(t), t(), ke !== null)
        break;
  }
  increment() {
    fe(this, nr, F(this, nr) + 1);
  }
  decrement() {
    fe(this, nr, F(this, nr) - 1);
    for (const t of F(this, pi))
      wt(t, Vt), cr(t);
    for (const t of F(this, mi))
      wt(t, jn), cr(t);
    this.flush();
  }
  /** @param {() => void} fn */
  add_callback(t) {
    F(this, Or).add(t);
  }
  settled() {
    return (F(this, gi) ?? fe(this, gi, Xs())).promise;
  }
  static ensure() {
    if (ke === null) {
      const t = ke = new ra();
      Oi.add(ke), si || ra.enqueue(() => {
        ke === t && t.flush();
      });
    }
    return ke;
  }
  /** @param {() => void} task */
  static enqueue(t) {
    Gn(t);
  }
  apply() {
  }
};
Tr = new WeakMap(), Or = new WeakMap(), nr = new WeakMap(), gi = new WeakMap(), Rr = new WeakMap(), Hr = new WeakMap(), rr = new WeakMap(), Dr = new WeakMap(), pi = new WeakMap(), mi = new WeakMap(), Kt = new WeakSet(), /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 */
Va = function(t) {
  var u;
  t.f ^= St;
  for (var n = t.first; n !== null; ) {
    var r = n.f, i = (r & (An | hr)) !== 0, a = i && (r & St) !== 0, o = a || (r & an) !== 0 || this.skipped_effects.has(n);
    if (!o && n.fn !== null) {
      i ? n.f ^= St : r & go ? F(this, rr).push(n) : r & St || (r & sa && ((u = n.b) != null && u.is_pending()) ? F(this, Rr).push(n) : va(n) && (n.f & fr && F(this, Dr).push(n), di(n)));
      var l = n.first;
      if (l !== null) {
        n = l;
        continue;
      }
    }
    var s = n.parent;
    for (n = n.next; n === null && s !== null; )
      n = s.next, s = s.parent;
  }
}, /**
 * @param {Effect[]} effects
 */
ji = function(t) {
  for (const n of t)
    (n.f & Vt ? F(this, pi) : F(this, mi)).push(n), wt(n, St);
  t.length = 0;
}, /**
 * Append and remove branches to/from the DOM
 */
qa = function() {
  var t;
  for (const n of F(this, Or))
    n();
  if (F(this, Or).clear(), Oi.size > 1) {
    F(this, Tr).clear();
    let n = !0;
    for (const r of Oi) {
      if (r === this) {
        n = !1;
        continue;
      }
      const i = [];
      for (const [o, l] of this.current) {
        if (r.current.has(o))
          if (n && l !== r.current.get(o))
            r.current.set(o, l);
          else
            continue;
        i.push(o);
      }
      if (i.length === 0)
        continue;
      const a = [...r.current.keys()].filter((o) => !this.current.has(o));
      if (a.length > 0) {
        for (const o of i)
          tl(o, a);
        if (dn.length > 0) {
          ke = r, r.apply();
          for (const o of dn)
            _t(t = r, Kt, Va).call(t, o);
          dn = [], r.deactivate();
        }
      }
    }
    ke = null;
  }
  Oi.delete(this);
};
let Sn = ra;
function uc(e) {
  var t = si;
  si = !0;
  try {
    for (var n; ; ) {
      if (sc(), dn.length === 0 && (ke == null || ke.flush(), dn.length === 0))
        return la = null, /** @type {T} */
        n;
      el();
    }
  } finally {
    si = t;
  }
}
function el() {
  var e = xr;
  ja = !0;
  try {
    var t = 0;
    for (jo(!0); dn.length > 0; ) {
      var n = Sn.ensure();
      if (t++ > 1e3) {
        var r, i;
        cc();
      }
      n.process(dn), Nn.clear();
    }
  } finally {
    ja = !1, jo(e), la = null;
  }
}
function cc() {
  try {
    Yu();
  } catch (e) {
    Br(e, la);
  }
}
let yn = null;
function No(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t; ) {
      var r = e[n++];
      if (!(r.f & (vr | an)) && va(r) && (yn = [], di(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null && r.ac === null ? gl(r) : r.fn = null), (yn == null ? void 0 : yn.length) > 0)) {
        Nn.clear();
        for (const i of yn)
          di(i);
        yn = [];
      }
    }
    yn = null;
  }
}
function tl(e, t) {
  if (e.reactions !== null)
    for (const n of e.reactions) {
      const r = n.f;
      r & Ot ? tl(
        /** @type {Derived} */
        n,
        t
      ) : r & (sa | fr) && nl(n, t) && (wt(n, Vt), cr(
        /** @type {Effect} */
        n
      ));
    }
}
function nl(e, t) {
  if (e.deps !== null) {
    for (const n of e.deps)
      if (t.includes(n) || n.f & Ot && nl(
        /** @type {Derived} */
        n,
        t
      ))
        return !0;
  }
  return !1;
}
function cr(e) {
  for (var t = la = e; t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if (ja && t === Ae && n & fr)
      return;
    if (n & (hr | An)) {
      if (!(n & St)) return;
      t.f ^= St;
    }
  }
  dn.push(t);
}
function dc(e) {
  let t = 0, n = dr(0), r;
  return () => {
    Tc() && (d(n), fa(() => (t === 0 && (r = zn(() => e(() => li(n)))), t += 1, () => {
      Gn(() => {
        t -= 1, t === 0 && (r == null || r(), r = void 0, li(n));
      });
    })));
  };
}
var fc = gr | zr | mo;
function hc(e, t, n) {
  new vc(e, t, n);
}
var en, Wt, fo, ln, ir, un, Zt, Dt, cn, Hn, ar, Dn, or, Pn, ia, aa, Tt, gc, pc, Vi, qi, za;
class vc {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   */
  constructor(t, n, r) {
    Me(this, Tt);
    /** @type {Boundary | null} */
    Er(this, "parent");
    Me(this, en, !1);
    /** @type {TemplateNode} */
    Me(this, Wt);
    /** @type {TemplateNode | null} */
    Me(this, fo, null);
    /** @type {BoundaryProps} */
    Me(this, ln);
    /** @type {((anchor: Node) => void)} */
    Me(this, ir);
    /** @type {Effect} */
    Me(this, un);
    /** @type {Effect | null} */
    Me(this, Zt, null);
    /** @type {Effect | null} */
    Me(this, Dt, null);
    /** @type {Effect | null} */
    Me(this, cn, null);
    /** @type {DocumentFragment | null} */
    Me(this, Hn, null);
    Me(this, ar, 0);
    Me(this, Dn, 0);
    Me(this, or, !1);
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    Me(this, Pn, null);
    Me(this, ia, () => {
      F(this, Pn) && Ur(F(this, Pn), F(this, ar));
    });
    Me(this, aa, dc(() => (fe(this, Pn, dr(F(this, ar))), () => {
      fe(this, Pn, null);
    })));
    fe(this, Wt, t), fe(this, ln, n), fe(this, ir, r), this.parent = /** @type {Effect} */
    Ae.b, fe(this, en, !!F(this, ln).pending), fe(this, un, qn(() => {
      Ae.b = this;
      {
        try {
          fe(this, Zt, yt(() => r(F(this, Wt))));
        } catch (i) {
          this.error(i);
        }
        F(this, Dn) > 0 ? _t(this, Tt, qi).call(this) : fe(this, en, !1);
      }
    }, fc));
  }
  /**
   * Returns `true` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_pending() {
    return F(this, en) || !!this.parent && this.parent.is_pending();
  }
  has_pending_snippet() {
    return !!F(this, ln).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   */
  update_pending_count(t) {
    _t(this, Tt, za).call(this, t), fe(this, ar, F(this, ar) + t), Ga.add(F(this, ia));
  }
  get_effect_pending() {
    return F(this, aa).call(this), d(
      /** @type {Source<number>} */
      F(this, Pn)
    );
  }
  /** @param {unknown} error */
  error(t) {
    var n = F(this, ln).onerror;
    let r = F(this, ln).failed;
    if (F(this, or) || !n && !r)
      throw t;
    F(this, Zt) && (ft(F(this, Zt)), fe(this, Zt, null)), F(this, Dt) && (ft(F(this, Dt)), fe(this, Dt, null)), F(this, cn) && (ft(F(this, cn)), fe(this, cn, null));
    var i = !1, a = !1;
    const o = () => {
      if (i) {
        nc();
        return;
      }
      i = !0, a && ec(), Sn.ensure(), fe(this, ar, 0), F(this, cn) !== null && kn(F(this, cn), () => {
        fe(this, cn, null);
      }), fe(this, en, this.has_pending_snippet()), fe(this, Zt, _t(this, Tt, Vi).call(this, () => (fe(this, or, !1), yt(() => F(this, ir).call(this, F(this, Wt)))))), F(this, Dn) > 0 ? _t(this, Tt, qi).call(this) : fe(this, en, !1);
    };
    var l = Ce;
    try {
      Pt(null), a = !0, n == null || n(t, o), a = !1;
    } catch (s) {
      Br(s, F(this, un) && F(this, un).parent);
    } finally {
      Pt(l);
    }
    r && Gn(() => {
      fe(this, cn, _t(this, Tt, Vi).call(this, () => {
        fe(this, or, !0);
        try {
          return yt(() => {
            r(
              F(this, Wt),
              () => t,
              () => o
            );
          });
        } catch (s) {
          return Br(
            s,
            /** @type {Effect} */
            F(this, un).parent
          ), null;
        } finally {
          fe(this, or, !1);
        }
      }));
    });
  }
}
en = new WeakMap(), Wt = new WeakMap(), fo = new WeakMap(), ln = new WeakMap(), ir = new WeakMap(), un = new WeakMap(), Zt = new WeakMap(), Dt = new WeakMap(), cn = new WeakMap(), Hn = new WeakMap(), ar = new WeakMap(), Dn = new WeakMap(), or = new WeakMap(), Pn = new WeakMap(), ia = new WeakMap(), aa = new WeakMap(), Tt = new WeakSet(), gc = function() {
  try {
    fe(this, Zt, yt(() => F(this, ir).call(this, F(this, Wt))));
  } catch (t) {
    this.error(t);
  }
  fe(this, en, !1);
}, pc = function() {
  const t = F(this, ln).pending;
  t && (fe(this, Dt, yt(() => t(F(this, Wt)))), Sn.enqueue(() => {
    fe(this, Zt, _t(this, Tt, Vi).call(this, () => (Sn.ensure(), yt(() => F(this, ir).call(this, F(this, Wt)))))), F(this, Dn) > 0 ? _t(this, Tt, qi).call(this) : (kn(
      /** @type {Effect} */
      F(this, Dt),
      () => {
        fe(this, Dt, null);
      }
    ), fe(this, en, !1));
  }));
}, /**
 * @param {() => Effect | null} fn
 */
Vi = function(t) {
  var n = Ae, r = Ce, i = qe;
  vn(F(this, un)), Pt(F(this, un)), Mr(F(this, un).ctx);
  try {
    return t();
  } catch (a) {
    return Js(a), null;
  } finally {
    vn(n), Pt(r), Mr(i);
  }
}, qi = function() {
  const t = (
    /** @type {(anchor: Node) => void} */
    F(this, ln).pending
  );
  F(this, Zt) !== null && (fe(this, Hn, document.createDocumentFragment()), mc(F(this, Zt), F(this, Hn))), F(this, Dt) === null && fe(this, Dt, yt(() => t(F(this, Wt))));
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 */
za = function(t) {
  var n;
  if (!this.has_pending_snippet()) {
    this.parent && _t(n = this.parent, Tt, za).call(n, t);
    return;
  }
  fe(this, Dn, F(this, Dn) + t), F(this, Dn) === 0 && (fe(this, en, !1), F(this, Dt) && kn(F(this, Dt), () => {
    fe(this, Dt, null);
  }), F(this, Hn) && (F(this, Wt).before(F(this, Hn)), fe(this, Hn, null)), Gn(() => {
    Sn.ensure().flush();
  }));
};
function mc(e, t) {
  for (var n = e.nodes_start, r = e.nodes_end; n !== null; ) {
    var i = n === r ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ _i(n)
    );
    t.append(n), n = i;
  }
}
function rl(e, t, n) {
  const r = bi() ? ua : Eo;
  if (t.length === 0) {
    n(e.map(r));
    return;
  }
  var i = ke, a = (
    /** @type {Effect} */
    Ae
  ), o = bc();
  Promise.all(t.map((l) => /* @__PURE__ */ _c(l))).then((l) => {
    o();
    try {
      n([...e.map(r), ...l]);
    } catch (s) {
      a.f & vr || Br(s, a);
    }
    i == null || i.deactivate(), Xa();
  }).catch((l) => {
    Br(l, a);
  });
}
function bc() {
  var e = Ae, t = Ce, n = qe, r = ke;
  return function() {
    vn(e), Pt(t), Mr(n), r == null || r.activate();
  };
}
function Xa() {
  vn(null), Pt(null), Mr(null);
}
// @__NO_SIDE_EFFECTS__
function ua(e) {
  var t = Ot | Vt, n = Ce !== null && Ce.f & Ot ? (
    /** @type {Derived} */
    Ce
  ) : null;
  return Ae === null || n !== null && n.f & Yt ? t |= Yt : Ae.f |= zr, {
    ctx: qe,
    deps: null,
    effects: null,
    equals: Zs,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      st
    ),
    wv: 0,
    parent: n ?? Ae,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function _c(e, t) {
  let n = (
    /** @type {Effect | null} */
    Ae
  );
  n === null && zu();
  var r = (
    /** @type {Boundary} */
    n.b
  ), i = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), a = dr(
    /** @type {V} */
    st
  ), o = !Ce, l = /* @__PURE__ */ new Map();
  return Rc(() => {
    var v;
    var s = Xs();
    i = s.promise;
    try {
      Promise.resolve(e()).then(s.resolve, s.reject).then(Xa);
    } catch (h) {
      s.reject(h), Xa();
    }
    var u = (
      /** @type {Batch} */
      ke
    ), c = r.is_pending();
    o && (r.update_pending_count(1), c || (u.increment(), (v = l.get(u)) == null || v.reject(Ar), l.delete(u), l.set(u, s)));
    const f = (h, g = void 0) => {
      if (c || u.activate(), g)
        g !== Ar && (a.f |= sr, Ur(a, g));
      else {
        a.f & sr && (a.f ^= sr), Ur(a, h);
        for (const [p, E] of l) {
          if (l.delete(p), p === u) break;
          E.reject(Ar);
        }
      }
      o && (r.update_pending_count(-1), c || u.decrement());
    };
    s.promise.then(f, (h) => f(null, h || "unknown"));
  }), da(() => {
    for (const s of l.values())
      s.reject(Ar);
  }), new Promise((s) => {
    function u(c) {
      function f() {
        c === i ? s(a) : u(i);
      }
      c.then(f, f);
    }
    u(i);
  });
}
// @__NO_SIDE_EFFECTS__
function me(e) {
  const t = /* @__PURE__ */ ua(e);
  return bl(t), t;
}
// @__NO_SIDE_EFFECTS__
function Eo(e) {
  const t = /* @__PURE__ */ ua(e);
  return t.equals = Ys, t;
}
function il(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1)
      ft(
        /** @type {Effect} */
        t[n]
      );
  }
}
function yc(e) {
  for (var t = e.parent; t !== null; ) {
    if (!(t.f & Ot))
      return (
        /** @type {Effect} */
        t
      );
    t = t.parent;
  }
  return null;
}
function So(e) {
  var t, n = Ae;
  vn(yc(e));
  try {
    il(e), t = Sl(e);
  } finally {
    vn(n);
  }
  return t;
}
function al(e) {
  var t = So(e);
  if (e.equals(t) || (e.v = t, e.wv = yl()), !pr)
    if (ct !== null)
      ct.set(e, e.v);
    else {
      var n = (Mn || e.f & Yt) && e.deps !== null ? jn : St;
      wt(e, n);
    }
}
const Nn = /* @__PURE__ */ new Map();
function dr(e, t) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: Zs,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function De(e, t) {
  const n = dr(e);
  return bl(n), n;
}
// @__NO_SIDE_EFFECTS__
function ol(e, t = !1, n = !0) {
  var i;
  const r = dr(e);
  return t || (r.equals = Ys), Xr && n && qe !== null && qe.l !== null && ((i = qe.l).s ?? (i.s = [])).push(r), r;
}
function $(e, t, n = !1) {
  Ce !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!rn || Ce.f & Fo) && bi() && Ce.f & (Ot | fr | sa | Fo) && !(xt != null && xt.includes(e)) && $u();
  let r = n ? be(t) : t;
  return Ur(e, r);
}
function Ur(e, t) {
  if (!e.equals(t)) {
    var n = e.v;
    pr ? Nn.set(e, t) : Nn.set(e, n), e.v = t;
    var r = Sn.ensure();
    r.capture(e, n), e.f & Ot && (e.f & Vt && So(
      /** @type {Derived} */
      e
    ), wt(e, e.f & Yt ? jn : St)), e.wv = yl(), sl(e, Vt), bi() && Ae !== null && Ae.f & St && !(Ae.f & (An | hr)) && (Xt === null ? Pc([e]) : Xt.push(e));
  }
  return t;
}
function li(e) {
  $(e, e.v + 1);
}
function sl(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var r = bi(), i = n.length, a = 0; a < i; a++) {
      var o = n[a], l = o.f;
      if (!(!r && o === Ae)) {
        var s = (l & Vt) === 0;
        s && wt(o, t), l & Ot ? sl(
          /** @type {Derived} */
          o,
          jn
        ) : s && (l & fr && yn !== null && yn.push(
          /** @type {Effect} */
          o
        ), cr(
          /** @type {Effect} */
          o
        ));
      }
    }
}
function be(e) {
  if (typeof e != "object" || e === null || hn in e)
    return e;
  const t = vo(e);
  if (t !== ku && t !== Gu)
    return e;
  var n = /* @__PURE__ */ new Map(), r = oa(e), i = /* @__PURE__ */ De(0), a = lr, o = (l) => {
    if (lr === a)
      return l();
    var s = Ce, u = lr;
    Pt(null), qo(a);
    var c = l();
    return Pt(s), qo(u), c;
  };
  return r && n.set("length", /* @__PURE__ */ De(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(l, s, u) {
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && Qu();
        var c = n.get(s);
        return c === void 0 ? c = o(() => {
          var f = /* @__PURE__ */ De(u.value);
          return n.set(s, f), f;
        }) : $(c, u.value, !0), !0;
      },
      deleteProperty(l, s) {
        var u = n.get(s);
        if (u === void 0) {
          if (s in l) {
            const c = o(() => /* @__PURE__ */ De(st));
            n.set(s, c), li(i);
          }
        } else
          $(u, st), li(i);
        return !0;
      },
      get(l, s, u) {
        var h;
        if (s === hn)
          return e;
        var c = n.get(s), f = s in l;
        if (c === void 0 && (!f || (h = Fn(l, s)) != null && h.writable) && (c = o(() => {
          var g = be(f ? l[s] : st), p = /* @__PURE__ */ De(g);
          return p;
        }), n.set(s, c)), c !== void 0) {
          var v = d(c);
          return v === st ? void 0 : v;
        }
        return Reflect.get(l, s, u);
      },
      getOwnPropertyDescriptor(l, s) {
        var u = Reflect.getOwnPropertyDescriptor(l, s);
        if (u && "value" in u) {
          var c = n.get(s);
          c && (u.value = d(c));
        } else if (u === void 0) {
          var f = n.get(s), v = f == null ? void 0 : f.v;
          if (f !== void 0 && v !== st)
            return {
              enumerable: !0,
              configurable: !0,
              value: v,
              writable: !0
            };
        }
        return u;
      },
      has(l, s) {
        var v;
        if (s === hn)
          return !0;
        var u = n.get(s), c = u !== void 0 && u.v !== st || Reflect.has(l, s);
        if (u !== void 0 || Ae !== null && (!c || (v = Fn(l, s)) != null && v.writable)) {
          u === void 0 && (u = o(() => {
            var h = c ? be(l[s]) : st, g = /* @__PURE__ */ De(h);
            return g;
          }), n.set(s, u));
          var f = d(u);
          if (f === st)
            return !1;
        }
        return c;
      },
      set(l, s, u, c) {
        var x;
        var f = n.get(s), v = s in l;
        if (r && s === "length")
          for (var h = u; h < /** @type {Source<number>} */
          f.v; h += 1) {
            var g = n.get(h + "");
            g !== void 0 ? $(g, st) : h in l && (g = o(() => /* @__PURE__ */ De(st)), n.set(h + "", g));
          }
        if (f === void 0)
          (!v || (x = Fn(l, s)) != null && x.writable) && (f = o(() => /* @__PURE__ */ De(void 0)), $(f, be(u)), n.set(s, f));
        else {
          v = f.v !== st;
          var p = o(() => be(u));
          $(f, p);
        }
        var E = Reflect.getOwnPropertyDescriptor(l, s);
        if (E != null && E.set && E.set.call(c, u), !v) {
          if (r && typeof s == "string") {
            var y = (
              /** @type {Source<number>} */
              n.get("length")
            ), L = Number(s);
            Number.isInteger(L) && L >= y.v && $(y, L + 1);
          }
          li(i);
        }
        return !0;
      },
      ownKeys(l) {
        d(i);
        var s = Reflect.ownKeys(l).filter((f) => {
          var v = n.get(f);
          return v === void 0 || v.v !== st;
        });
        for (var [u, c] of n)
          c.v !== st && !(u in l) && s.push(u);
        return s;
      },
      setPrototypeOf() {
        Ju();
      }
    }
  );
}
function ko(e) {
  try {
    if (e !== null && typeof e == "object" && hn in e)
      return e[hn];
  } catch {
  }
  return e;
}
function Ec(e, t) {
  return Object.is(ko(e), ko(t));
}
var Yi, ll, ul, cl, dl;
function Sc() {
  if (Yi === void 0) {
    Yi = window, ll = document, ul = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    cl = Fn(t, "firstChild").get, dl = Fn(t, "nextSibling").get, Uo(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), Uo(n) && (n.__t = void 0);
  }
}
function Vn(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function Fr(e) {
  return cl.call(e);
}
// @__NO_SIDE_EFFECTS__
function _i(e) {
  return dl.call(e);
}
function ce(e, t) {
  return /* @__PURE__ */ Fr(e);
}
function V(e, t = !1) {
  {
    var n = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ Fr(
        /** @type {Node} */
        e
      )
    );
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ _i(n) : n;
  }
}
function re(e, t = 1, n = !1) {
  let r = e;
  for (; t--; )
    r = /** @type {TemplateNode} */
    /* @__PURE__ */ _i(r);
  return r;
}
function Cc(e) {
  e.textContent = "";
}
function Co() {
  return !1;
}
function Ac(e, t) {
  if (t) {
    const n = document.body;
    e.autofocus = !0, Gn(() => {
      document.activeElement === n && e.focus();
    });
  }
}
let Go = !1;
function Ic() {
  Go || (Go = !0, document.addEventListener(
    "reset",
    (e) => {
      Promise.resolve().then(() => {
        var t;
        if (!e.defaultPrevented)
          for (
            const n of
            /**@type {HTMLFormElement} */
            e.target.elements
          )
            (t = n.__on_r) == null || t.call(n);
      });
    },
    // In the capture phase to guarantee we get noticed of it (no possiblity of stopPropagation)
    { capture: !0 }
  ));
}
function ca(e) {
  var t = Ce, n = Ae;
  Pt(null), vn(null);
  try {
    return e();
  } finally {
    Pt(t), vn(n);
  }
}
function xc(e, t, n, r = n) {
  e.addEventListener(t, () => ca(n));
  const i = e.__on_r;
  i ? e.__on_r = () => {
    i(), r(!0);
  } : e.__on_r = () => r(!0), Ic();
}
function wc(e) {
  Ae === null && Ce === null && Zu(), Ce !== null && Ce.f & Yt && Ae === null && Wu(), pr && Xu();
}
function Lc(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function In(e, t, n, r = !0) {
  var i = Ae;
  i !== null && i.f & an && (e |= an);
  var a = {
    ctx: qe,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | Vt,
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
  if (n)
    try {
      di(a), a.f |= bo;
    } catch (s) {
      throw ft(a), s;
    }
  else t !== null && cr(a);
  if (r) {
    var o = a;
    if (n && o.deps === null && o.teardown === null && o.nodes_start === null && o.first === o.last && // either `null`, or a singular child
    !(o.f & zr) && (o = o.first), o !== null && (o.parent = i, i !== null && Lc(o, i), Ce !== null && Ce.f & Ot && !(e & hr))) {
      var l = (
        /** @type {Derived} */
        Ce
      );
      (l.effects ?? (l.effects = [])).push(o);
    }
  }
  return a;
}
function Tc() {
  return Ce !== null && !rn;
}
function da(e) {
  const t = In(po, null, !1);
  return wt(t, St), t.teardown = e, t;
}
function Ue(e) {
  wc();
  var t = (
    /** @type {Effect} */
    Ae.f
  ), n = !Ce && (t & An) !== 0 && (t & bo) === 0;
  if (n) {
    var r = (
      /** @type {ComponentContext} */
      qe
    );
    (r.e ?? (r.e = [])).push(e);
  } else
    return fl(e);
}
function fl(e) {
  return In(go | Vu, e, !1);
}
function Oc(e) {
  Sn.ensure();
  const t = In(hr | zr, e, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? kn(t, () => {
      ft(t), r(void 0);
    }) : (ft(t), r(void 0));
  });
}
function yi(e) {
  return In(go, e, !1);
}
function Rc(e) {
  return In(sa | zr, e, !0);
}
function fa(e, t = 0) {
  return In(po | t, e, !0);
}
function Se(e, t = [], n = []) {
  rl(t, n, (r) => {
    In(po, () => e(...r.map(d)), !0);
  });
}
function qn(e, t = 0) {
  var n = In(fr | t, e, !0);
  return n;
}
function yt(e, t = !0) {
  return In(An | zr, e, !0, t);
}
function hl(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = pr, r = Ce;
    Vo(!0), Pt(null);
    try {
      t.call(null);
    } finally {
      Vo(n), Pt(r);
    }
  }
}
function vl(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    const i = n.ac;
    i !== null && ca(() => {
      i.abort(Ar);
    });
    var r = n.next;
    n.f & hr ? n.parent = null : ft(n, t), n = r;
  }
}
function Hc(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    t.f & An || ft(t), t = n;
  }
}
function ft(e, t = !0) {
  var n = !1;
  (t || e.f & ju) && e.nodes_start !== null && e.nodes_end !== null && (Dc(
    e.nodes_start,
    /** @type {TemplateNode} */
    e.nodes_end
  ), n = !0), vl(e, t && !n), Ki(e, 0), wt(e, vr);
  var r = e.transitions;
  if (r !== null)
    for (const a of r)
      a.stop();
  hl(e);
  var i = e.parent;
  i !== null && i.first !== null && gl(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = e.ac = null;
}
function Dc(e, t) {
  for (; e !== null; ) {
    var n = e === t ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ _i(e)
    );
    e.remove(), e = n;
  }
}
function gl(e) {
  var t = e.parent, n = e.prev, r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function kn(e, t) {
  var n = [];
  Ao(e, n, !0), pl(n, () => {
    ft(e), t && t();
  });
}
function pl(e, t) {
  var n = e.length;
  if (n > 0) {
    var r = () => --n || t();
    for (var i of e)
      i.out(r);
  } else
    t();
}
function Ao(e, t, n) {
  if (!(e.f & an)) {
    if (e.f ^= an, e.transitions !== null)
      for (const o of e.transitions)
        (o.is_global || n) && t.push(o);
    for (var r = e.first; r !== null; ) {
      var i = r.next, a = (r.f & gr) !== 0 || (r.f & An) !== 0;
      Ao(r, t, a ? n : !1), r = i;
    }
  }
}
function ha(e) {
  ml(e, !0);
}
function ml(e, t) {
  if (e.f & an) {
    e.f ^= an, e.f & St || (wt(e, Vt), cr(e));
    for (var n = e.first; n !== null; ) {
      var r = n.next, i = (n.f & gr) !== 0 || (n.f & An) !== 0;
      ml(n, i ? t : !1), n = r;
    }
    if (e.transitions !== null)
      for (const a of e.transitions)
        (a.is_global || t) && a.in();
  }
}
let xr = !1;
function jo(e) {
  xr = e;
}
let pr = !1;
function Vo(e) {
  pr = e;
}
let Ce = null, rn = !1;
function Pt(e) {
  Ce = e;
}
let Ae = null;
function vn(e) {
  Ae = e;
}
let xt = null;
function bl(e) {
  Ce !== null && (xt === null ? xt = [e] : xt.push(e));
}
let It = null, Gt = 0, Xt = null;
function Pc(e) {
  Xt = e;
}
let _l = 1, ci = 0, lr = ci;
function qo(e) {
  lr = e;
}
let Mn = !1;
function yl() {
  return ++_l;
}
function va(e) {
  var f;
  var t = e.f;
  if (t & Vt)
    return !0;
  if (t & jn) {
    var n = e.deps, r = (t & Yt) !== 0;
    if (n !== null) {
      var i, a, o = (t & Zi) !== 0, l = r && Ae !== null && !Mn, s = n.length;
      if ((o || l) && (Ae === null || !(Ae.f & vr))) {
        var u = (
          /** @type {Derived} */
          e
        ), c = u.parent;
        for (i = 0; i < s; i++)
          a = n[i], (o || !((f = a == null ? void 0 : a.reactions) != null && f.includes(u))) && (a.reactions ?? (a.reactions = [])).push(u);
        o && (u.f ^= Zi), l && c !== null && !(c.f & Yt) && (u.f ^= Yt);
      }
      for (i = 0; i < s; i++)
        if (a = n[i], va(
          /** @type {Derived} */
          a
        ) && al(
          /** @type {Derived} */
          a
        ), a.wv > e.wv)
          return !0;
    }
    (!r || Ae !== null && !Mn) && wt(e, St);
  }
  return !1;
}
function El(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null && !(xt != null && xt.includes(e)))
    for (var i = 0; i < r.length; i++) {
      var a = r[i];
      a.f & Ot ? El(
        /** @type {Derived} */
        a,
        t,
        !1
      ) : t === a && (n ? wt(a, Vt) : a.f & St && wt(a, jn), cr(
        /** @type {Effect} */
        a
      ));
    }
}
function Sl(e) {
  var p;
  var t = It, n = Gt, r = Xt, i = Ce, a = Mn, o = xt, l = qe, s = rn, u = lr, c = e.f;
  It = /** @type {null | Value[]} */
  null, Gt = 0, Xt = null, Mn = (c & Yt) !== 0 && (rn || !xr || Ce === null), Ce = c & (An | hr) ? null : e, xt = null, Mr(e.ctx), rn = !1, lr = ++ci, e.ac !== null && (ca(() => {
    e.ac.abort(Ar);
  }), e.ac = null);
  try {
    e.f |= ka;
    var f = (
      /** @type {Function} */
      e.fn
    ), v = f(), h = e.deps;
    if (It !== null) {
      var g;
      if (Ki(e, Gt), h !== null && Gt > 0)
        for (h.length = Gt + It.length, g = 0; g < It.length; g++)
          h[Gt + g] = It[g];
      else
        e.deps = h = It;
      if (!Mn || // Deriveds that already have reactions can cleanup, so we still add them as reactions
      c & Ot && /** @type {import('#client').Derived} */
      e.reactions !== null)
        for (g = Gt; g < h.length; g++)
          ((p = h[g]).reactions ?? (p.reactions = [])).push(e);
    } else h !== null && Gt < h.length && (Ki(e, Gt), h.length = Gt);
    if (bi() && Xt !== null && !rn && h !== null && !(e.f & (Ot | jn | Vt)))
      for (g = 0; g < /** @type {Source[]} */
      Xt.length; g++)
        El(
          Xt[g],
          /** @type {Effect} */
          e
        );
    return i !== null && i !== e && (ci++, Xt !== null && (r === null ? r = Xt : r.push(.../** @type {Source[]} */
    Xt))), e.f & sr && (e.f ^= sr), v;
  } catch (E) {
    return Js(E);
  } finally {
    e.f ^= ka, It = t, Gt = n, Xt = r, Ce = i, Mn = a, xt = o, Mr(l), rn = s, lr = u;
  }
}
function Mc(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = Nu.call(n, e);
    if (r !== -1) {
      var i = n.length - 1;
      i === 0 ? n = t.reactions = null : (n[r] = n[i], n.pop());
    }
  }
  n === null && t.f & Ot && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (It === null || !It.includes(t)) && (wt(t, jn), t.f & (Yt | Zi) || (t.f ^= Zi), il(
    /** @type {Derived} **/
    t
  ), Ki(
    /** @type {Derived} **/
    t,
    0
  ));
}
function Ki(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var r = t; r < n.length; r++)
      Mc(e, n[r]);
}
function di(e) {
  var t = e.f;
  if (!(t & vr)) {
    wt(e, St);
    var n = Ae, r = xr;
    Ae = e, xr = !0;
    try {
      t & fr ? Hc(e) : vl(e), hl(e);
      var i = Sl(e);
      e.teardown = typeof i == "function" ? i : null, e.wv = _l;
      var a;
      Vs && ic && e.f & Vt && e.deps;
    } finally {
      xr = r, Ae = n;
    }
  }
}
async function Cl() {
  await Promise.resolve(), uc();
}
function d(e) {
  var t = e.f, n = (t & Ot) !== 0;
  if (Ce !== null && !rn) {
    var r = Ae !== null && (Ae.f & vr) !== 0;
    if (!r && !(xt != null && xt.includes(e))) {
      var i = Ce.deps;
      if (Ce.f & ka)
        e.rv < ci && (e.rv = ci, It === null && i !== null && i[Gt] === e ? Gt++ : It === null ? It = [e] : (!Mn || !It.includes(e)) && It.push(e));
      else {
        (Ce.deps ?? (Ce.deps = [])).push(e);
        var a = e.reactions;
        a === null ? e.reactions = [Ce] : a.includes(Ce) || a.push(Ce);
      }
    }
  } else if (n && /** @type {Derived} */
  e.deps === null && /** @type {Derived} */
  e.effects === null) {
    var o = (
      /** @type {Derived} */
      e
    ), l = o.parent;
    l !== null && !(l.f & Yt) && (o.f ^= Yt);
  }
  if (pr) {
    if (Nn.has(e))
      return Nn.get(e);
    if (n) {
      o = /** @type {Derived} */
      e;
      var s = o.v;
      return (!(o.f & St) && o.reactions !== null || Al(o)) && (s = So(o)), Nn.set(o, s), s;
    }
  } else if (n) {
    if (o = /** @type {Derived} */
    e, ct != null && ct.has(o))
      return ct.get(o);
    va(o) && al(o);
  }
  if (ct != null && ct.has(e))
    return ct.get(e);
  if (e.f & sr)
    throw e.v;
  return e.v;
}
function Al(e) {
  if (e.v === st) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (Nn.has(t) || t.f & Ot && Al(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function zn(e) {
  var t = rn;
  try {
    return rn = !0, e();
  } finally {
    rn = t;
  }
}
const Bc = -7169;
function wt(e, t) {
  e.f = e.f & Bc | t;
}
function Uc(e) {
  if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
    if (hn in e)
      Wa(e);
    else if (!Array.isArray(e))
      for (let t in e) {
        const n = e[t];
        typeof n == "object" && n && hn in n && Wa(n);
      }
  }
}
function Wa(e, t = /* @__PURE__ */ new Set()) {
  if (typeof e == "object" && e !== null && // We don't want to traverse DOM elements
  !(e instanceof EventTarget) && !t.has(e)) {
    t.add(e), e instanceof Date && e.getTime();
    for (let r in e)
      try {
        Wa(e[r], t);
      } catch {
      }
    const n = vo(e);
    if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
      const r = qs(n);
      for (let i in r) {
        const a = r[i].get;
        if (a)
          try {
            a.call(e);
          } catch {
          }
      }
    }
  }
}
const Il = /* @__PURE__ */ new Set(), Za = /* @__PURE__ */ new Set();
function Io(e, t, n, r = {}) {
  function i(a) {
    if (r.capture || ai.call(t, a), !a.cancelBubble)
      return ca(() => n == null ? void 0 : n.call(this, a));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? Gn(() => {
    t.addEventListener(e, i, r);
  }) : t.addEventListener(e, i, r), i;
}
function Fc(e, t, n, r = {}) {
  var i = Io(t, e, n, r);
  return () => {
    e.removeEventListener(t, i, r);
  };
}
function Ri(e, t, n, r, i) {
  var a = { capture: r, passive: i }, o = Io(e, t, n, a);
  (t === document.body || // @ts-ignore
  t === window || // @ts-ignore
  t === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  t instanceof HTMLMediaElement) && da(() => {
    t.removeEventListener(e, o, a);
  });
}
function mr(e) {
  for (var t = 0; t < e.length; t++)
    Il.add(e[t]);
  for (var n of Za)
    n(e);
}
let zo = null;
function ai(e) {
  var L;
  var t = this, n = (
    /** @type {Node} */
    t.ownerDocument
  ), r = e.type, i = ((L = e.composedPath) == null ? void 0 : L.call(e)) || [], a = (
    /** @type {null | Element} */
    i[0] || e.target
  );
  zo = e;
  var o = 0, l = zo === e && e.__root;
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
    Wi(e, "currentTarget", {
      configurable: !0,
      get() {
        return a || n;
      }
    });
    var c = Ce, f = Ae;
    Pt(null), vn(null);
    try {
      for (var v, h = []; a !== null; ) {
        var g = a.assignedSlot || a.parentNode || /** @type {any} */
        a.host || null;
        try {
          var p = a["__" + r];
          if (p != null && (!/** @type {any} */
          a.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === a))
            if (oa(p)) {
              var [E, ...y] = p;
              E.apply(a, [e, ...y]);
            } else
              p.call(a, e);
        } catch (x) {
          v ? h.push(x) : v = x;
        }
        if (e.cancelBubble || g === t || g === null)
          break;
        a = g;
      }
      if (v) {
        for (let x of h)
          queueMicrotask(() => {
            throw x;
          });
        throw v;
      }
    } finally {
      e.__root = t, delete e.currentTarget, Pt(c), vn(f);
    }
  }
}
function xl(e) {
  var t = document.createElement("template");
  return t.innerHTML = e.replaceAll("<!>", "<!---->"), t.content;
}
function Nr(e, t) {
  var n = (
    /** @type {Effect} */
    Ae
  );
  n.nodes_start === null && (n.nodes_start = e, n.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function J(e, t) {
  var n = (t & 1) !== 0, r = (t & 2) !== 0, i, a = !e.startsWith("<!>");
  return () => {
    i === void 0 && (i = xl(a ? e : "<!>" + e), n || (i = /** @type {Node} */
    /* @__PURE__ */ Fr(i)));
    var o = (
      /** @type {TemplateNode} */
      r || ul ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (n) {
      var l = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Fr(o)
      ), s = (
        /** @type {TemplateNode} */
        o.lastChild
      );
      Nr(l, s);
    } else
      Nr(o, o);
    return o;
  };
}
// @__NO_SIDE_EFFECTS__
function Nc(e, t, n = "svg") {
  var r = !e.startsWith("<!>"), i = `<${n}>${r ? e : "<!>" + e}</${n}>`, a;
  return () => {
    if (!a) {
      var o = (
        /** @type {DocumentFragment} */
        xl(i)
      ), l = (
        /** @type {Element} */
        /* @__PURE__ */ Fr(o)
      );
      a = /** @type {Element} */
      /* @__PURE__ */ Fr(l);
    }
    var s = (
      /** @type {TemplateNode} */
      a.cloneNode(!0)
    );
    return Nr(s, s), s;
  };
}
// @__NO_SIDE_EFFECTS__
function qt(e, t) {
  return /* @__PURE__ */ Nc(e, t, "svg");
}
function Et(e = "") {
  {
    var t = Vn(e + "");
    return Nr(t, t), t;
  }
}
function W() {
  var e = document.createDocumentFragment(), t = document.createComment(""), n = Vn();
  return e.append(t, n), Nr(t, n), e;
}
function I(e, t) {
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function kc(e) {
  return e.endsWith("capture") && e !== "gotpointercapture" && e !== "lostpointercapture";
}
const Gc = [
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
function jc(e) {
  return Gc.includes(e);
}
const Vc = {
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
function qc(e) {
  return e = e.toLowerCase(), Vc[e] ?? e;
}
const zc = ["touchstart", "touchmove"];
function Xc(e) {
  return zc.includes(e);
}
function tt(e, t) {
  var n = t == null ? "" : typeof t == "object" ? t + "" : t;
  n !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = n, e.nodeValue = n + "");
}
function Wc(e, t) {
  return Zc(e, t);
}
const Sr = /* @__PURE__ */ new Map();
function Zc(e, { target: t, anchor: n, props: r = {}, events: i, context: a, intro: o = !0 }) {
  Sc();
  var l = /* @__PURE__ */ new Set(), s = (f) => {
    for (var v = 0; v < f.length; v++) {
      var h = f[v];
      if (!l.has(h)) {
        l.add(h);
        var g = Xc(h);
        t.addEventListener(h, ai, { passive: g });
        var p = Sr.get(h);
        p === void 0 ? (document.addEventListener(h, ai, { passive: g }), Sr.set(h, 1)) : Sr.set(h, p + 1);
      }
    }
  };
  s(ho(Il)), Za.add(s);
  var u = void 0, c = Oc(() => {
    var f = n ?? t.appendChild(Vn());
    return hc(
      /** @type {TemplateNode} */
      f,
      {
        pending: () => {
        }
      },
      (v) => {
        if (a) {
          Te({});
          var h = (
            /** @type {ComponentContext} */
            qe
          );
          h.c = a;
        }
        i && (r.$$events = i), u = e(v, r) || {}, a && Oe();
      }
    ), () => {
      var g;
      for (var v of l) {
        t.removeEventListener(v, ai);
        var h = (
          /** @type {number} */
          Sr.get(v)
        );
        --h === 0 ? (document.removeEventListener(v, ai), Sr.delete(v)) : Sr.set(v, h);
      }
      Za.delete(s), f !== n && ((g = f.parentNode) == null || g.removeChild(f));
    };
  });
  return Yc.set(u, c), u;
}
let Yc = /* @__PURE__ */ new WeakMap();
function oe(e, t, ...n) {
  var r = e, i = Q, a;
  qn(() => {
    i !== (i = t()) && (a && (ft(a), a = null), a = yt(() => (
      /** @type {SnippetFn} */
      i(r, ...n)
    )));
  }, gr);
}
function ht(e) {
  qe === null && _o(), Xr && qe.l !== null ? Kc(qe).m.push(e) : Ue(() => {
    const t = zn(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function Wr(e) {
  qe === null && _o(), ht(() => () => zn(e));
}
function Kc(e) {
  var t = (
    /** @type {ComponentContextLegacy} */
    e.l
  );
  return t.u ?? (t.u = { a: [], b: [], m: [] });
}
function ae(e, t, n = !1) {
  var r = e, i = null, a = null, o = st, l = n ? gr : 0, s = !1;
  const u = (h, g = !0) => {
    s = !0, v(g, h);
  };
  var c = null;
  function f() {
    c !== null && (c.lastChild.remove(), r.before(c), c = null);
    var h = o ? i : a, g = o ? a : i;
    h && ha(h), g && kn(g, () => {
      o ? a = null : i = null;
    });
  }
  const v = (h, g) => {
    if (o !== (o = h)) {
      var p = Co(), E = r;
      if (p && (c = document.createDocumentFragment(), c.append(E = Vn())), o ? i ?? (i = g && yt(() => g(E))) : a ?? (a = g && yt(() => g(E))), p) {
        var y = (
          /** @type {Batch} */
          ke
        ), L = o ? i : a, x = o ? a : i;
        L && y.skipped_effects.delete(L), x && y.skipped_effects.add(x), y.add_callback(f);
      } else
        f();
    }
  };
  qn(() => {
    s = !1, t(u), s || v(null, null);
  }, l);
}
function ya(e, t) {
  return t;
}
function Qc(e, t, n) {
  for (var r = e.items, i = [], a = t.length, o = 0; o < a; o++)
    Ao(t[o].e, i, !0);
  var l = a > 0 && i.length === 0 && n !== null;
  if (l) {
    var s = (
      /** @type {Element} */
      /** @type {Element} */
      n.parentNode
    );
    Cc(s), s.append(
      /** @type {Element} */
      n
    ), r.clear(), sn(e, t[0].prev, t[a - 1].next);
  }
  pl(i, () => {
    for (var u = 0; u < a; u++) {
      var c = t[u];
      l || (r.delete(c.k), sn(e, c.prev, c.next)), ft(c.e, !l);
    }
  });
}
function Hi(e, t, n, r, i, a = null) {
  var o = e, l = { flags: t, items: /* @__PURE__ */ new Map(), first: null }, s = (t & 4) !== 0;
  if (s) {
    var u = (
      /** @type {Element} */
      e
    );
    o = u.appendChild(Vn());
  }
  var c = null, f = !1, v = /* @__PURE__ */ new Map(), h = /* @__PURE__ */ Eo(() => {
    var y = n();
    return oa(y) ? y : y == null ? [] : ho(y);
  }), g, p;
  function E() {
    Jc(
      p,
      g,
      l,
      v,
      o,
      i,
      t,
      r,
      n
    ), a !== null && (g.length === 0 ? c ? ha(c) : c = yt(() => a(o)) : c !== null && kn(c, () => {
      c = null;
    }));
  }
  qn(() => {
    p ?? (p = /** @type {Effect} */
    Ae), g = /** @type {V[]} */
    d(h);
    var y = g.length;
    if (!(f && y === 0)) {
      f = y === 0;
      var L, x, _, S;
      if (Co()) {
        var b = /* @__PURE__ */ new Set(), A = (
          /** @type {Batch} */
          ke
        );
        for (x = 0; x < y; x += 1) {
          _ = g[x], S = r(_, x);
          var w = l.items.get(S) ?? v.get(S);
          w ? t & 3 && wl(w, _, x, t) : (L = Ll(
            null,
            l,
            null,
            null,
            _,
            S,
            x,
            i,
            t,
            n,
            !0
          ), v.set(S, L)), b.add(S);
        }
        for (const [R, P] of l.items)
          b.has(R) || A.skipped_effects.add(P.e);
        A.add_callback(E);
      } else
        E();
      d(h);
    }
  });
}
function Jc(e, t, n, r, i, a, o, l, s) {
  var Y, U, C, j;
  var u = (o & 8) !== 0, c = (o & 3) !== 0, f = t.length, v = n.items, h = n.first, g = h, p, E = null, y, L = [], x = [], _, S, b, A;
  if (u)
    for (A = 0; A < f; A += 1)
      _ = t[A], S = l(_, A), b = v.get(S), b !== void 0 && ((Y = b.a) == null || Y.measure(), (y ?? (y = /* @__PURE__ */ new Set())).add(b));
  for (A = 0; A < f; A += 1) {
    if (_ = t[A], S = l(_, A), b = v.get(S), b === void 0) {
      var w = r.get(S);
      if (w !== void 0) {
        r.delete(S), v.set(S, w);
        var R = E ? E.next : g;
        sn(n, E, w), sn(n, w, R), Ea(w, R, i), E = w;
      } else {
        var P = g ? (
          /** @type {TemplateNode} */
          g.e.nodes_start
        ) : i;
        E = Ll(
          P,
          n,
          E,
          E === null ? n.first : E.next,
          _,
          S,
          A,
          a,
          o,
          s
        );
      }
      v.set(S, E), L = [], x = [], g = E.next;
      continue;
    }
    if (c && wl(b, _, A, o), b.e.f & an && (ha(b.e), u && ((U = b.a) == null || U.unfix(), (y ?? (y = /* @__PURE__ */ new Set())).delete(b))), b !== g) {
      if (p !== void 0 && p.has(b)) {
        if (L.length < x.length) {
          var k = x[0], X;
          E = k.prev;
          var ee = L[0], he = L[L.length - 1];
          for (X = 0; X < L.length; X += 1)
            Ea(L[X], k, i);
          for (X = 0; X < x.length; X += 1)
            p.delete(x[X]);
          sn(n, ee.prev, he.next), sn(n, E, ee), sn(n, he, k), g = k, E = he, A -= 1, L = [], x = [];
        } else
          p.delete(b), Ea(b, g, i), sn(n, b.prev, b.next), sn(n, b, E === null ? n.first : E.next), sn(n, E, b), E = b;
        continue;
      }
      for (L = [], x = []; g !== null && g.k !== S; )
        g.e.f & an || (p ?? (p = /* @__PURE__ */ new Set())).add(g), x.push(g), g = g.next;
      if (g === null)
        continue;
      b = g;
    }
    L.push(b), E = b, g = b.next;
  }
  if (g !== null || p !== void 0) {
    for (var H = p === void 0 ? [] : ho(p); g !== null; )
      g.e.f & an || H.push(g), g = g.next;
    var D = H.length;
    if (D > 0) {
      var O = o & 4 && f === 0 ? i : null;
      if (u) {
        for (A = 0; A < D; A += 1)
          (C = H[A].a) == null || C.measure();
        for (A = 0; A < D; A += 1)
          (j = H[A].a) == null || j.fix();
      }
      Qc(n, H, O);
    }
  }
  u && Gn(() => {
    var ve;
    if (y !== void 0)
      for (b of y)
        (ve = b.a) == null || ve.apply();
  }), e.first = n.first && n.first.e, e.last = E && E.e;
  for (var N of r.values())
    ft(N.e);
  r.clear();
}
function wl(e, t, n, r) {
  r & 1 && Ur(e.v, t), r & 2 ? Ur(
    /** @type {Value<number>} */
    e.i,
    n
  ) : e.i = n;
}
function Ll(e, t, n, r, i, a, o, l, s, u, c) {
  var f = (s & 1) !== 0, v = (s & 16) === 0, h = f ? v ? /* @__PURE__ */ ol(i, !1, !1) : dr(i) : i, g = s & 2 ? dr(o) : o, p = {
    i: g,
    v: h,
    k: a,
    a: null,
    // @ts-expect-error
    e: null,
    prev: n,
    next: r
  };
  try {
    if (e === null) {
      var E = document.createDocumentFragment();
      E.append(e = Vn());
    }
    return p.e = yt(() => l(
      /** @type {Node} */
      e,
      h,
      g,
      u
    ), rc), p.e.prev = n && n.e, p.e.next = r && r.e, n === null ? c || (t.first = p) : (n.next = p, n.e.next = p.e), r !== null && (r.prev = p, r.e.prev = p.e), p;
  } finally {
  }
}
function Ea(e, t, n) {
  for (var r = e.next ? (
    /** @type {TemplateNode} */
    e.next.e.nodes_start
  ) : n, i = t ? (
    /** @type {TemplateNode} */
    t.e.nodes_start
  ) : n, a = (
    /** @type {TemplateNode} */
    e.e.nodes_start
  ); a !== null && a !== r; ) {
    var o = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ _i(a)
    );
    i.before(a), a = o;
  }
}
function sn(e, t, n) {
  t === null ? e.first = n : (t.next = n, t.e.next = n && n.e), n !== null && (n.prev = t, n.e.prev = t && t.e);
}
function Ei(e, t, n) {
  var r = e, i, a, o = null, l = null;
  function s() {
    a && (kn(a), a = null), o && (o.lastChild.remove(), r.before(o), o = null), a = l, l = null;
  }
  qn(() => {
    if (i !== (i = t())) {
      var u = Co();
      if (i) {
        var c = r;
        u && (o = document.createDocumentFragment(), o.append(c = Vn()), a && ke.skipped_effects.add(a)), l = yt(() => n(c, i));
      }
      u ? ke.add_callback(s) : s();
    }
  }, gr);
}
function Xo(e, t, n, r, i, a) {
  var o, l, s = null, u = (
    /** @type {TemplateNode} */
    e
  ), c;
  qn(() => {
    const f = t() || null;
    var v = f === "svg" ? Uu : null;
    f !== o && (c && (f === null ? kn(c, () => {
      c = null, l = null;
    }) : f === l ? ha(c) : ft(c)), f && f !== l && (c = yt(() => {
      if (s = v ? document.createElementNS(v, f) : document.createElement(f), Nr(s, s), r) {
        var h = (
          /** @type {TemplateNode} */
          s.appendChild(Vn())
        );
        r(s, h);
      }
      Ae.nodes_end = s, u.before(s);
    })), o = f, o && (l = o));
  }, gr);
}
function ze(e, t, n) {
  yi(() => {
    var r = zn(() => t(e, n == null ? void 0 : n()) || {});
    if (n && (r != null && r.update)) {
      var i = !1, a = (
        /** @type {any} */
        {}
      );
      fa(() => {
        var o = n();
        Uc(o), i && yo(a, o) && (a = o, r.update(o));
      }), i = !0;
    }
    if (r != null && r.destroy)
      return () => (
        /** @type {Function} */
        r.destroy()
      );
  });
}
function $c(e, t) {
  var n = void 0, r;
  qn(() => {
    n !== (n = t()) && (r && (ft(r), r = null), n && (r = yt(() => {
      yi(() => (
        /** @type {(node: Element) => void} */
        n(e)
      ));
    })));
  });
}
function Tl(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var i = e.length;
    for (t = 0; t < i; t++) e[t] && (n = Tl(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function ed() {
  for (var e, t, n = 0, r = "", i = arguments.length; n < i; n++) (e = arguments[n]) && (t = Tl(e)) && (r && (r += " "), r += t);
  return r;
}
function Ol(e) {
  return typeof e == "object" ? ed(e) : e ?? "";
}
const Wo = [...` 	
\r\f \v\uFEFF`];
function td(e, t, n) {
  var r = e == null ? "" : "" + e;
  if (n) {
    for (var i in n)
      if (n[i])
        r = r ? r + " " + i : i;
      else if (r.length)
        for (var a = i.length, o = 0; (o = r.indexOf(i, o)) >= 0; ) {
          var l = o + a;
          (o === 0 || Wo.includes(r[o - 1])) && (l === r.length || Wo.includes(r[l])) ? r = (o === 0 ? "" : r.substring(0, o)) + r.substring(l + 1) : o = l;
        }
  }
  return r === "" ? null : r;
}
function Zo(e, t = !1) {
  var n = t ? " !important;" : ";", r = "";
  for (var i in e) {
    var a = e[i];
    a != null && a !== "" && (r += " " + i + ": " + a + n);
  }
  return r;
}
function Sa(e) {
  return e[0] !== "-" || e[1] !== "-" ? e.toLowerCase() : e;
}
function nd(e, t) {
  if (t) {
    var n = "", r, i;
    if (Array.isArray(t) ? (r = t[0], i = t[1]) : r = t, e) {
      e = String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var a = !1, o = 0, l = !1, s = [];
      r && s.push(...Object.keys(r).map(Sa)), i && s.push(...Object.keys(i).map(Sa));
      var u = 0, c = -1;
      const p = e.length;
      for (var f = 0; f < p; f++) {
        var v = e[f];
        if (l ? v === "/" && e[f - 1] === "*" && (l = !1) : a ? a === v && (a = !1) : v === "/" && e[f + 1] === "*" ? l = !0 : v === '"' || v === "'" ? a = v : v === "(" ? o++ : v === ")" && o--, !l && a === !1 && o === 0) {
          if (v === ":" && c === -1)
            c = f;
          else if (v === ";" || f === p - 1) {
            if (c !== -1) {
              var h = Sa(e.substring(u, c).trim());
              if (!s.includes(h)) {
                v !== ";" && f++;
                var g = e.substring(u, f).trim();
                n += " " + g + ";";
              }
            }
            u = f + 1, c = -1;
          }
        }
      }
    }
    return r && (n += Zo(r)), i && (n += Zo(i, !0)), n = n.trim(), n === "" ? null : n;
  }
  return e == null ? null : String(e);
}
function Rl(e, t, n, r, i, a) {
  var o = e.__className;
  if (o !== n || o === void 0) {
    var l = td(n, r, a);
    l == null ? e.removeAttribute("class") : t ? e.className = l : e.setAttribute("class", l), e.__className = n;
  } else if (a && i !== a)
    for (var s in a) {
      var u = !!a[s];
      (i == null || u !== !!i[s]) && e.classList.toggle(s, u);
    }
  return a;
}
function Ca(e, t = {}, n, r) {
  for (var i in n) {
    var a = n[i];
    t[i] !== a && (n[i] == null ? e.style.removeProperty(i) : e.style.setProperty(i, a, r));
  }
}
function Rt(e, t, n, r) {
  var i = e.__style;
  if (i !== t) {
    var a = nd(t, r);
    a == null ? e.removeAttribute("style") : e.style.cssText = a, e.__style = t;
  } else r && (Array.isArray(r) ? (Ca(e, n == null ? void 0 : n[0], r[0]), Ca(e, n == null ? void 0 : n[1], r[1], "important")) : Ca(e, n, r));
  return r;
}
function Ya(e, t, n = !1) {
  if (e.multiple) {
    if (t == null)
      return;
    if (!oa(t))
      return tc();
    for (var r of e.options)
      r.selected = t.includes(Yo(r));
    return;
  }
  for (r of e.options) {
    var i = Yo(r);
    if (Ec(i, t)) {
      r.selected = !0;
      return;
    }
  }
  (!n || t !== void 0) && (e.selectedIndex = -1);
}
function rd(e) {
  var t = new MutationObserver(() => {
    Ya(e, e.__value);
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
  }), da(() => {
    t.disconnect();
  });
}
function Yo(e) {
  return "__value" in e ? e.__value : e.value;
}
const ei = Symbol("class"), ti = Symbol("style"), Hl = Symbol("is custom element"), Dl = Symbol("is html");
function Ko(e, t) {
  var n = xo(e);
  n.value === (n.value = // treat null and undefined the same for the initial value
  t ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  e.value === t && (t !== 0 || e.nodeName !== "PROGRESS") || (e.value = t ?? "");
}
function id(e, t) {
  t ? e.hasAttribute("selected") || e.setAttribute("selected", "") : e.removeAttribute("selected");
}
function fi(e, t, n, r) {
  var i = xo(e);
  i[t] !== (i[t] = n) && (t === "loading" && (e[qu] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && Pl(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function ad(e, t, n, r, i = !1, a = !1) {
  var o = xo(e), l = o[Hl], s = !o[Dl], u = t || {}, c = e.tagName === "OPTION";
  for (var f in t)
    f in n || (n[f] = null);
  n.class ? n.class = Ol(n.class) : n[ei] && (n.class = null), n[ti] && (n.style ?? (n.style = null));
  var v = Pl(e);
  for (const x in n) {
    let _ = n[x];
    if (c && x === "value" && _ == null) {
      e.value = e.__value = "", u[x] = _;
      continue;
    }
    if (x === "class") {
      var h = e.namespaceURI === "http://www.w3.org/1999/xhtml";
      Rl(e, h, _, r, t == null ? void 0 : t[ei], n[ei]), u[x] = _, u[ei] = n[ei];
      continue;
    }
    if (x === "style") {
      Rt(e, _, t == null ? void 0 : t[ti], n[ti]), u[x] = _, u[ti] = n[ti];
      continue;
    }
    var g = u[x];
    if (!(_ === g && !(_ === void 0 && e.hasAttribute(x)))) {
      u[x] = _;
      var p = x[0] + x[1];
      if (p !== "$$")
        if (p === "on") {
          const S = {}, b = "$$" + x;
          let A = x.slice(2);
          var E = jc(A);
          if (kc(A) && (A = A.slice(0, -7), S.capture = !0), !E && g) {
            if (_ != null) continue;
            e.removeEventListener(A, u[b], S), u[b] = null;
          }
          if (_ != null)
            if (E)
              e[`__${A}`] = _, mr([A]);
            else {
              let w = function(R) {
                u[x].call(this, R);
              };
              u[b] = Io(A, e, w, S);
            }
          else E && (e[`__${A}`] = void 0);
        } else if (x === "style")
          fi(e, x, _);
        else if (x === "autofocus")
          Ac(
            /** @type {HTMLElement} */
            e,
            !!_
          );
        else if (!l && (x === "__value" || x === "value" && _ != null))
          e.value = e.__value = _;
        else if (x === "selected" && c)
          id(
            /** @type {HTMLOptionElement} */
            e,
            _
          );
        else {
          var y = x;
          s || (y = qc(y));
          var L = y === "defaultValue" || y === "defaultChecked";
          if (_ == null && !l && !L)
            if (o[x] = null, y === "value" || y === "checked") {
              let S = (
                /** @type {HTMLInputElement} */
                e
              );
              const b = t === void 0;
              if (y === "value") {
                let A = S.defaultValue;
                S.removeAttribute(y), S.defaultValue = A, S.value = S.__value = b ? A : null;
              } else {
                let A = S.defaultChecked;
                S.removeAttribute(y), S.defaultChecked = A, S.checked = b ? A : !1;
              }
            } else
              e.removeAttribute(x);
          else L || v.includes(y) && (l || typeof _ != "string") ? (e[y] = _, y in o && (o[y] = st)) : typeof _ != "function" && fi(e, y, _);
        }
    }
  }
  return u;
}
function Xe(e, t, n = [], r = [], i, a = !1, o = !1) {
  rl(n, r, (l) => {
    var s = void 0, u = {}, c = e.nodeName === "SELECT", f = !1;
    if (qn(() => {
      var h = t(...l.map(d)), g = ad(
        e,
        s,
        h,
        i,
        a,
        o
      );
      f && c && "value" in h && Ya(
        /** @type {HTMLSelectElement} */
        e,
        h.value
      );
      for (let E of Object.getOwnPropertySymbols(u))
        h[E] || ft(u[E]);
      for (let E of Object.getOwnPropertySymbols(h)) {
        var p = h[E];
        E.description === Fu && (!s || p !== s[E]) && (u[E] && ft(u[E]), u[E] = yt(() => $c(e, () => p))), g[E] = p;
      }
      s = g;
    }), c) {
      var v = (
        /** @type {HTMLSelectElement} */
        e
      );
      yi(() => {
        Ya(
          v,
          /** @type {Record<string | symbol, any>} */
          s.value,
          !0
        ), rd(v);
      });
    }
    f = !0;
  });
}
function xo(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ?? (e.__attributes = {
      [Hl]: e.nodeName.includes("-"),
      [Dl]: e.namespaceURI === Bu
    })
  );
}
var Qo = /* @__PURE__ */ new Map();
function Pl(e) {
  var t = e.getAttribute("is") || e.nodeName, n = Qo.get(t);
  if (n) return n;
  Qo.set(t, n = []);
  for (var r, i = e, a = Element.prototype; a !== i; ) {
    r = qs(i);
    for (var o in r)
      r[o].set && n.push(o);
    i = vo(i);
  }
  return n;
}
function Ka(e, t, n = t) {
  var r = /* @__PURE__ */ new WeakSet();
  xc(e, "input", async (i) => {
    var a = i ? e.defaultValue : e.value;
    if (a = Aa(e) ? Ia(a) : a, n(a), ke !== null && r.add(ke), await Cl(), a !== (a = t())) {
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
  zn(t) == null && e.value && (n(Aa(e) ? Ia(e.value) : e.value), ke !== null && r.add(ke)), fa(() => {
    var i = t();
    if (e === document.activeElement) {
      var a = (
        /** @type {Batch} */
        Gi ?? ke
      );
      if (r.has(a))
        return;
    }
    Aa(e) && i === Ia(e.value) || e.type === "date" && !i && !e.value || i !== e.value && (e.value = i ?? "");
  });
}
function Aa(e) {
  var t = e.type;
  return t === "number" || t === "range";
}
function Ia(e) {
  return e === "" ? null : +e;
}
function Jo(e, t) {
  return e === t || (e == null ? void 0 : e[hn]) === t;
}
function Ee(e = {}, t, n, r) {
  return yi(() => {
    var i, a;
    return fa(() => {
      i = a, a = [], zn(() => {
        e !== n(...a) && (t(e, ...a), i && Jo(n(...i), e) && t(null, ...i));
      });
    }), () => {
      Gn(() => {
        a && Jo(n(...a), e) && t(null, ...a);
      });
    };
  }), e;
}
function wo(e, t, n) {
  if (e == null)
    return t(void 0), n && n(void 0), Q;
  const r = zn(
    () => e.subscribe(
      t,
      // @ts-expect-error
      n
    )
  );
  return r.unsubscribe ? () => r.unsubscribe() : r;
}
const Cr = [];
function od(e, t) {
  return {
    subscribe: Lt(e, t).subscribe
  };
}
function Lt(e, t = Q) {
  let n = null;
  const r = /* @__PURE__ */ new Set();
  function i(l) {
    if (yo(e, l) && (e = l, n)) {
      const s = !Cr.length;
      for (const u of r)
        u[1](), Cr.push(u, e);
      if (s) {
        for (let u = 0; u < Cr.length; u += 2)
          Cr[u][0](Cr[u + 1]);
        Cr.length = 0;
      }
    }
  }
  function a(l) {
    i(l(
      /** @type {T} */
      e
    ));
  }
  function o(l, s = Q) {
    const u = [l, s];
    return r.add(u), r.size === 1 && (n = t(i, a) || Q), l(
      /** @type {T} */
      e
    ), () => {
      r.delete(u), r.size === 0 && n && (n(), n = null);
    };
  }
  return { set: i, update: a, subscribe: o };
}
function Zr(e, t, n) {
  const r = !Array.isArray(e), i = r ? [e] : e;
  if (!i.every(Boolean))
    throw new Error("derived() expects stores as input, got a falsy value");
  const a = t.length < 2;
  return od(n, (o, l) => {
    let s = !1;
    const u = [];
    let c = 0, f = Q;
    const v = () => {
      if (c)
        return;
      f();
      const g = t(r ? u[0] : u, o, l);
      a ? o(g) : f = typeof g == "function" ? g : Q;
    }, h = i.map(
      (g, p) => wo(
        g,
        (E) => {
          u[p] = E, c &= ~(1 << p), s && v();
        },
        () => {
          c |= 1 << p;
        }
      )
    );
    return s = !0, v(), function() {
      zs(h), f(), s = !1;
    };
  });
}
function Ml(e) {
  let t;
  return wo(e, (n) => t = n)(), t;
}
let Di = !1, Qa = Symbol();
function Cn(e, t, n) {
  const r = n[t] ?? (n[t] = {
    store: null,
    source: /* @__PURE__ */ ol(void 0),
    unsubscribe: Q
  });
  if (r.store !== e && !(Qa in n))
    if (r.unsubscribe(), r.store = e ?? null, e == null)
      r.source.v = void 0, r.unsubscribe = Q;
    else {
      var i = !0;
      r.unsubscribe = wo(e, (a) => {
        i ? r.source.v = a : $(r.source, a);
      }), i = !1;
    }
  return e && Qa in n ? Ml(e) : d(r.source);
}
function Bn(e, t) {
  return e.set(t), t;
}
function Xn() {
  const e = {};
  function t() {
    da(() => {
      for (var n in e)
        e[n].unsubscribe();
      Wi(e, Qa, {
        enumerable: !1,
        value: !0
      });
    });
  }
  return [e, t];
}
function sd(e) {
  var t = Di;
  try {
    return Di = !1, [e(), Di];
  } finally {
    Di = t;
  }
}
const ld = {
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
function Ve(e, t, n) {
  return new Proxy(
    { props: e, exclude: t },
    ld
  );
}
const ud = {
  get(e, t) {
    let n = e.props.length;
    for (; n--; ) {
      let r = e.props[n];
      if ($r(r) && (r = r()), typeof r == "object" && r !== null && t in r) return r[t];
    }
  },
  set(e, t, n) {
    let r = e.props.length;
    for (; r--; ) {
      let i = e.props[r];
      $r(i) && (i = i());
      const a = Fn(i, t);
      if (a && a.set)
        return a.set(n), !0;
    }
    return !1;
  },
  getOwnPropertyDescriptor(e, t) {
    let n = e.props.length;
    for (; n--; ) {
      let r = e.props[n];
      if ($r(r) && (r = r()), typeof r == "object" && r !== null && t in r) {
        const i = Fn(r, t);
        return i && !i.configurable && (i.configurable = !0), i;
      }
    }
  },
  has(e, t) {
    if (t === hn || t === Ws) return !1;
    for (let n of e.props)
      if ($r(n) && (n = n()), n != null && t in n) return !0;
    return !1;
  },
  ownKeys(e) {
    const t = [];
    for (let n of e.props)
      if ($r(n) && (n = n()), !!n) {
        for (const r in n)
          t.includes(r) || t.push(r);
        for (const r of Object.getOwnPropertySymbols(n))
          t.includes(r) || t.push(r);
      }
    return t;
  }
};
function dt(...e) {
  return new Proxy({ props: e }, ud);
}
function m(e, t, n, r) {
  var x;
  var i = !Xr || (n & 2) !== 0, a = (n & 8) !== 0, o = (n & 16) !== 0, l = (
    /** @type {V} */
    r
  ), s = !0, u = () => (s && (s = !1, l = o ? zn(
    /** @type {() => V} */
    r
  ) : (
    /** @type {V} */
    r
  )), l), c;
  if (a) {
    var f = hn in e || Ws in e;
    c = ((x = Fn(e, t)) == null ? void 0 : x.set) ?? (f && t in e ? (_) => e[t] = _ : void 0);
  }
  var v, h = !1;
  a ? [v, h] = sd(() => (
    /** @type {V} */
    e[t]
  )) : v = /** @type {V} */
  e[t], v === void 0 && r !== void 0 && (v = u(), c && (i && Ku(), c(v)));
  var g;
  if (i ? g = () => {
    var _ = (
      /** @type {V} */
      e[t]
    );
    return _ === void 0 ? u() : (s = !0, _);
  } : g = () => {
    var _ = (
      /** @type {V} */
      e[t]
    );
    return _ !== void 0 && (l = /** @type {V} */
    void 0), _ === void 0 ? l : _;
  }, i && !(n & 4))
    return g;
  if (c) {
    var p = e.$$legacy;
    return (
      /** @type {() => V} */
      function(_, S) {
        return arguments.length > 0 ? ((!i || !S || p || h) && c(S ? g() : _), _) : g();
      }
    );
  }
  var E = !1, y = (n & 1 ? ua : Eo)(() => (E = !1, g()));
  a && d(y);
  var L = (
    /** @type {Effect} */
    Ae
  );
  return (
    /** @type {() => V} */
    function(_, S) {
      if (arguments.length > 0) {
        const b = S ? d(y) : i && a ? be(_) : _;
        return $(y, b), E = !0, l !== void 0 && (l = b), _;
      }
      return pr && E || L.f & vr ? y.v : d(y);
    }
  );
}
const cd = "5";
var js;
typeof window < "u" && ((js = window.__svelte ?? (window.__svelte = {})).v ?? (js.v = /* @__PURE__ */ new Set())).add(cd);
function dd(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var fd = function(t) {
  return hd(t) && !vd(t);
};
function hd(e) {
  return !!e && typeof e == "object";
}
function vd(e) {
  var t = Object.prototype.toString.call(e);
  return t === "[object RegExp]" || t === "[object Date]" || md(e);
}
var gd = typeof Symbol == "function" && Symbol.for, pd = gd ? Symbol.for("react.element") : 60103;
function md(e) {
  return e.$$typeof === pd;
}
function bd(e) {
  return Array.isArray(e) ? [] : {};
}
function hi(e, t) {
  return t.clone !== !1 && t.isMergeableObject(e) ? kr(bd(e), e, t) : e;
}
function _d(e, t, n) {
  return e.concat(t).map(function(r) {
    return hi(r, n);
  });
}
function yd(e, t) {
  if (!t.customMerge)
    return kr;
  var n = t.customMerge(e);
  return typeof n == "function" ? n : kr;
}
function Ed(e) {
  return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e).filter(function(t) {
    return Object.propertyIsEnumerable.call(e, t);
  }) : [];
}
function $o(e) {
  return Object.keys(e).concat(Ed(e));
}
function Bl(e, t) {
  try {
    return t in e;
  } catch {
    return !1;
  }
}
function Sd(e, t) {
  return Bl(e, t) && !(Object.hasOwnProperty.call(e, t) && Object.propertyIsEnumerable.call(e, t));
}
function Cd(e, t, n) {
  var r = {};
  return n.isMergeableObject(e) && $o(e).forEach(function(i) {
    r[i] = hi(e[i], n);
  }), $o(t).forEach(function(i) {
    Sd(e, i) || (Bl(e, i) && n.isMergeableObject(t[i]) ? r[i] = yd(i, n)(e[i], t[i], n) : r[i] = hi(t[i], n));
  }), r;
}
function kr(e, t, n) {
  n = n || {}, n.arrayMerge = n.arrayMerge || _d, n.isMergeableObject = n.isMergeableObject || fd, n.cloneUnlessOtherwiseSpecified = hi;
  var r = Array.isArray(t), i = Array.isArray(e), a = r === i;
  return a ? r ? n.arrayMerge(e, t, n) : Cd(e, t, n) : hi(t, n);
}
kr.all = function(t, n) {
  if (!Array.isArray(t))
    throw new Error("first argument should be an array");
  return t.reduce(function(r, i) {
    return kr(r, i, n);
  }, {});
};
var Ad = kr, Id = Ad;
const xd = /* @__PURE__ */ dd(Id);
var Ja = function(e, t) {
  return Ja = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, r) {
    n.__proto__ = r;
  } || function(n, r) {
    for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (n[i] = r[i]);
  }, Ja(e, t);
};
function vt(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  Ja(e, t);
  function n() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
}
var K = function() {
  return K = Object.assign || function(t) {
    for (var n, r = 1, i = arguments.length; r < i; r++) {
      n = arguments[r];
      for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a]);
    }
    return t;
  }, K.apply(this, arguments);
};
function wd(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
  return n;
}
function Ul(e, t, n, r) {
  function i(a) {
    return a instanceof n ? a : new n(function(o) {
      o(a);
    });
  }
  return new (n || (n = Promise))(function(a, o) {
    function l(c) {
      try {
        u(r.next(c));
      } catch (f) {
        o(f);
      }
    }
    function s(c) {
      try {
        u(r.throw(c));
      } catch (f) {
        o(f);
      }
    }
    function u(c) {
      c.done ? a(c.value) : i(c.value).then(l, s);
    }
    u((r = r.apply(e, t || [])).next());
  });
}
function Lo(e, t) {
  var n = { label: 0, sent: function() {
    if (a[0] & 1) throw a[1];
    return a[1];
  }, trys: [], ops: [] }, r, i, a, o = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
  return o.next = l(0), o.throw = l(1), o.return = l(2), typeof Symbol == "function" && (o[Symbol.iterator] = function() {
    return this;
  }), o;
  function l(u) {
    return function(c) {
      return s([u, c]);
    };
  }
  function s(u) {
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
      u = t.call(e, n);
    } catch (c) {
      u = [6, c], i = 0;
    } finally {
      r = a = 0;
    }
    if (u[0] & 5) throw u[1];
    return { value: u[0] ? u[1] : void 0, done: !0 };
  }
}
function Ct(e) {
  var t = typeof Symbol == "function" && Symbol.iterator, n = t && e[t], r = 0;
  if (n) return n.call(e);
  if (e && typeof e.length == "number") return {
    next: function() {
      return e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e };
    }
  };
  throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function $a(e, t) {
  var n = typeof Symbol == "function" && e[Symbol.iterator];
  if (!n) return e;
  var r = n.call(e), i, a = [], o;
  try {
    for (; (t === void 0 || t-- > 0) && !(i = r.next()).done; ) a.push(i.value);
  } catch (l) {
    o = { error: l };
  } finally {
    try {
      i && !i.done && (n = r.return) && n.call(r);
    } finally {
      if (o) throw o.error;
    }
  }
  return a;
}
function wr(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, i = t.length, a; r < i; r++)
    (a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
  return e.concat(a || Array.prototype.slice.call(t));
}
function Lr(e) {
  return this instanceof Lr ? (this.v = e, this) : new Lr(e);
}
function Ld(e, t, n) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var r = n.apply(e, t || []), i, a = [];
  return i = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype), l("next"), l("throw"), l("return", o), i[Symbol.asyncIterator] = function() {
    return this;
  }, i;
  function o(h) {
    return function(g) {
      return Promise.resolve(g).then(h, f);
    };
  }
  function l(h, g) {
    r[h] && (i[h] = function(p) {
      return new Promise(function(E, y) {
        a.push([h, p, E, y]) > 1 || s(h, p);
      });
    }, g && (i[h] = g(i[h])));
  }
  function s(h, g) {
    try {
      u(r[h](g));
    } catch (p) {
      v(a[0][3], p);
    }
  }
  function u(h) {
    h.value instanceof Lr ? Promise.resolve(h.value.v).then(c, f) : v(a[0][2], h);
  }
  function c(h) {
    s("next", h);
  }
  function f(h) {
    s("throw", h);
  }
  function v(h, g) {
    h(g), a.shift(), a.length && s(a[0][0], a[0][1]);
  }
}
function Td(e) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var t = e[Symbol.asyncIterator], n;
  return t ? t.call(e) : (e = typeof Ct == "function" ? Ct(e) : e[Symbol.iterator](), n = {}, r("next"), r("throw"), r("return"), n[Symbol.asyncIterator] = function() {
    return this;
  }, n);
  function r(a) {
    n[a] = e[a] && function(o) {
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
function xa(e, t) {
  var n = t && t.cache ? t.cache : Bd, r = t && t.serializer ? t.serializer : Pd, i = t && t.strategy ? t.strategy : Hd;
  return i(e, {
    cache: n,
    serializer: r
  });
}
function Od(e) {
  return e == null || typeof e == "number" || typeof e == "boolean";
}
function Rd(e, t, n, r) {
  var i = Od(r) ? r : n(r), a = t.get(i);
  return typeof a > "u" && (a = e.call(this, r), t.set(i, a)), a;
}
function Fl(e, t, n) {
  var r = Array.prototype.slice.call(arguments, 3), i = n(r), a = t.get(i);
  return typeof a > "u" && (a = e.apply(this, r), t.set(i, a)), a;
}
function Nl(e, t, n, r, i) {
  return n.bind(t, e, r, i);
}
function Hd(e, t) {
  var n = e.length === 1 ? Rd : Fl;
  return Nl(e, this, n, t.cache.create(), t.serializer);
}
function Dd(e, t) {
  return Nl(e, this, Fl, t.cache.create(), t.serializer);
}
var Pd = function() {
  return JSON.stringify(arguments);
}, Md = (
  /** @class */
  function() {
    function e() {
      this.cache = /* @__PURE__ */ Object.create(null);
    }
    return e.prototype.get = function(t) {
      return this.cache[t];
    }, e.prototype.set = function(t, n) {
      this.cache[t] = n;
    }, e;
  }()
), Bd = {
  create: function() {
    return new Md();
  }
}, wa = {
  variadic: Dd
}, Le;
(function(e) {
  e[e.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", e[e.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", e[e.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", e[e.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", e[e.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", e[e.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", e[e.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", e[e.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", e[e.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", e[e.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", e[e.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", e[e.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", e[e.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", e[e.INVALID_TAG = 23] = "INVALID_TAG", e[e.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", e[e.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", e[e.UNCLOSED_TAG = 27] = "UNCLOSED_TAG";
})(Le || (Le = {}));
var Ke;
(function(e) {
  e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag";
})(Ke || (Ke = {}));
var Gr;
(function(e) {
  e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime";
})(Gr || (Gr = {}));
function es(e) {
  return e.type === Ke.literal;
}
function Ud(e) {
  return e.type === Ke.argument;
}
function kl(e) {
  return e.type === Ke.number;
}
function Gl(e) {
  return e.type === Ke.date;
}
function jl(e) {
  return e.type === Ke.time;
}
function Vl(e) {
  return e.type === Ke.select;
}
function ql(e) {
  return e.type === Ke.plural;
}
function Fd(e) {
  return e.type === Ke.pound;
}
function zl(e) {
  return e.type === Ke.tag;
}
function Xl(e) {
  return !!(e && typeof e == "object" && e.type === Gr.number);
}
function eo(e) {
  return !!(e && typeof e == "object" && e.type === Gr.dateTime);
}
var Wl = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/, Nd = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
function kd(e) {
  var t = {};
  return e.replace(Nd, function(n) {
    var r = n.length;
    switch (n[0]) {
      case "G":
        t.era = r === 4 ? "long" : r === 5 ? "narrow" : "short";
        break;
      case "y":
        t.year = r === 2 ? "2-digit" : "numeric";
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
        t.month = ["numeric", "2-digit", "short", "long", "narrow"][r - 1];
        break;
      case "w":
      case "W":
        throw new RangeError("`w/W` (week) patterns are not supported");
      case "d":
        t.day = ["numeric", "2-digit"][r - 1];
        break;
      case "D":
      case "F":
      case "g":
        throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");
      case "E":
        t.weekday = r === 4 ? "long" : r === 5 ? "narrow" : "short";
        break;
      case "e":
        if (r < 4)
          throw new RangeError("`e..eee` (weekday) patterns are not supported");
        t.weekday = ["short", "long", "narrow", "short"][r - 4];
        break;
      case "c":
        if (r < 4)
          throw new RangeError("`c..ccc` (weekday) patterns are not supported");
        t.weekday = ["short", "long", "narrow", "short"][r - 4];
        break;
      case "a":
        t.hour12 = !0;
        break;
      case "b":
      case "B":
        throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");
      case "h":
        t.hourCycle = "h12", t.hour = ["numeric", "2-digit"][r - 1];
        break;
      case "H":
        t.hourCycle = "h23", t.hour = ["numeric", "2-digit"][r - 1];
        break;
      case "K":
        t.hourCycle = "h11", t.hour = ["numeric", "2-digit"][r - 1];
        break;
      case "k":
        t.hourCycle = "h24", t.hour = ["numeric", "2-digit"][r - 1];
        break;
      case "j":
      case "J":
      case "C":
        throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");
      case "m":
        t.minute = ["numeric", "2-digit"][r - 1];
        break;
      case "s":
        t.second = ["numeric", "2-digit"][r - 1];
        break;
      case "S":
      case "A":
        throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");
      case "z":
        t.timeZoneName = r < 4 ? "short" : "long";
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
var Gd = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
function jd(e) {
  if (e.length === 0)
    throw new Error("Number skeleton cannot be empty");
  for (var t = e.split(Gd).filter(function(v) {
    return v.length > 0;
  }), n = [], r = 0, i = t; r < i.length; r++) {
    var a = i[r], o = a.split("/");
    if (o.length === 0)
      throw new Error("Invalid number skeleton");
    for (var l = o[0], s = o.slice(1), u = 0, c = s; u < c.length; u++) {
      var f = c[u];
      if (f.length === 0)
        throw new Error("Invalid number skeleton");
    }
    n.push({ stem: l, options: s });
  }
  return n;
}
function Vd(e) {
  return e.replace(/^(.*?)-/, "");
}
var ts = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g, Zl = /^(@+)?(\+|#+)?[rs]?$/g, qd = /(\*)(0+)|(#+)(0+)|(0+)/g, Yl = /^(0+)$/;
function ns(e) {
  var t = {};
  return e[e.length - 1] === "r" ? t.roundingPriority = "morePrecision" : e[e.length - 1] === "s" && (t.roundingPriority = "lessPrecision"), e.replace(Zl, function(n, r, i) {
    return typeof i != "string" ? (t.minimumSignificantDigits = r.length, t.maximumSignificantDigits = r.length) : i === "+" ? t.minimumSignificantDigits = r.length : r[0] === "#" ? t.maximumSignificantDigits = r.length : (t.minimumSignificantDigits = r.length, t.maximumSignificantDigits = r.length + (typeof i == "string" ? i.length : 0)), "";
  }), t;
}
function Kl(e) {
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
function zd(e) {
  var t;
  if (e[0] === "E" && e[1] === "E" ? (t = {
    notation: "engineering"
  }, e = e.slice(2)) : e[0] === "E" && (t = {
    notation: "scientific"
  }, e = e.slice(1)), t) {
    var n = e.slice(0, 2);
    if (n === "+!" ? (t.signDisplay = "always", e = e.slice(2)) : n === "+?" && (t.signDisplay = "exceptZero", e = e.slice(2)), !Yl.test(e))
      throw new Error("Malformed concise eng/scientific notation");
    t.minimumIntegerDigits = e.length;
  }
  return t;
}
function rs(e) {
  var t = {}, n = Kl(e);
  return n || t;
}
function Xd(e) {
  for (var t = {}, n = 0, r = e; n < r.length; n++) {
    var i = r[n];
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
        t.style = "unit", t.unit = Vd(i.options[0]);
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
        t = K(K(K({}, t), { notation: "scientific" }), i.options.reduce(function(s, u) {
          return K(K({}, s), rs(u));
        }, {}));
        continue;
      case "engineering":
        t = K(K(K({}, t), { notation: "engineering" }), i.options.reduce(function(s, u) {
          return K(K({}, s), rs(u));
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
        i.options[0].replace(qd, function(s, u, c, f, v, h) {
          if (u)
            t.minimumIntegerDigits = c.length;
          else {
            if (f && v)
              throw new Error("We currently do not support maximum integer digits");
            if (h)
              throw new Error("We currently do not support exact integer digits");
          }
          return "";
        });
        continue;
    }
    if (Yl.test(i.stem)) {
      t.minimumIntegerDigits = i.stem.length;
      continue;
    }
    if (ts.test(i.stem)) {
      if (i.options.length > 1)
        throw new RangeError("Fraction-precision stems only accept a single optional option");
      i.stem.replace(ts, function(s, u, c, f, v, h) {
        return c === "*" ? t.minimumFractionDigits = u.length : f && f[0] === "#" ? t.maximumFractionDigits = f.length : v && h ? (t.minimumFractionDigits = v.length, t.maximumFractionDigits = v.length + h.length) : (t.minimumFractionDigits = u.length, t.maximumFractionDigits = u.length), "";
      });
      var a = i.options[0];
      a === "w" ? t = K(K({}, t), { trailingZeroDisplay: "stripIfInteger" }) : a && (t = K(K({}, t), ns(a)));
      continue;
    }
    if (Zl.test(i.stem)) {
      t = K(K({}, t), ns(i.stem));
      continue;
    }
    var o = Kl(i.stem);
    o && (t = K(K({}, t), o));
    var l = zd(i.stem);
    l && (t = K(K({}, t), l));
  }
  return t;
}
var Pi = {
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
function Wd(e, t) {
  for (var n = "", r = 0; r < e.length; r++) {
    var i = e.charAt(r);
    if (i === "j") {
      for (var a = 0; r + 1 < e.length && e.charAt(r + 1) === i; )
        a++, r++;
      var o = 1 + (a & 1), l = a < 2 ? 1 : 3 + (a >> 1), s = "a", u = Zd(t);
      for ((u == "H" || u == "k") && (l = 0); l-- > 0; )
        n += s;
      for (; o-- > 0; )
        n = u + n;
    } else i === "J" ? n += "H" : n += i;
  }
  return n;
}
function Zd(e) {
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
  var n = e.language, r;
  n !== "root" && (r = e.maximize().region);
  var i = Pi[r || ""] || Pi[n || ""] || Pi["".concat(n, "-001")] || Pi["001"];
  return i[0];
}
var La, Yd = new RegExp("^".concat(Wl.source, "*")), Kd = new RegExp("".concat(Wl.source, "*$"));
function He(e, t) {
  return { start: e, end: t };
}
var Qd = !!String.prototype.startsWith && "_a".startsWith("a", 1), Jd = !!String.fromCodePoint, $d = !!Object.fromEntries, ef = !!String.prototype.codePointAt, tf = !!String.prototype.trimStart, nf = !!String.prototype.trimEnd, rf = !!Number.isSafeInteger, af = rf ? Number.isSafeInteger : function(e) {
  return typeof e == "number" && isFinite(e) && Math.floor(e) === e && Math.abs(e) <= 9007199254740991;
}, to = !0;
try {
  var of = Jl("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  to = ((La = of.exec("a")) === null || La === void 0 ? void 0 : La[0]) === "a";
} catch {
  to = !1;
}
var is = Qd ? (
  // Native
  function(t, n, r) {
    return t.startsWith(n, r);
  }
) : (
  // For IE11
  function(t, n, r) {
    return t.slice(r, r + n.length) === n;
  }
), no = Jd ? String.fromCodePoint : (
  // IE11
  function() {
    for (var t = [], n = 0; n < arguments.length; n++)
      t[n] = arguments[n];
    for (var r = "", i = t.length, a = 0, o; i > a; ) {
      if (o = t[a++], o > 1114111)
        throw RangeError(o + " is not a valid code point");
      r += o < 65536 ? String.fromCharCode(o) : String.fromCharCode(((o -= 65536) >> 10) + 55296, o % 1024 + 56320);
    }
    return r;
  }
), as = (
  // native
  $d ? Object.fromEntries : (
    // Ponyfill
    function(t) {
      for (var n = {}, r = 0, i = t; r < i.length; r++) {
        var a = i[r], o = a[0], l = a[1];
        n[o] = l;
      }
      return n;
    }
  )
), Ql = ef ? (
  // Native
  function(t, n) {
    return t.codePointAt(n);
  }
) : (
  // IE 11
  function(t, n) {
    var r = t.length;
    if (!(n < 0 || n >= r)) {
      var i = t.charCodeAt(n), a;
      return i < 55296 || i > 56319 || n + 1 === r || (a = t.charCodeAt(n + 1)) < 56320 || a > 57343 ? i : (i - 55296 << 10) + (a - 56320) + 65536;
    }
  }
), sf = tf ? (
  // Native
  function(t) {
    return t.trimStart();
  }
) : (
  // Ponyfill
  function(t) {
    return t.replace(Yd, "");
  }
), lf = nf ? (
  // Native
  function(t) {
    return t.trimEnd();
  }
) : (
  // Ponyfill
  function(t) {
    return t.replace(Kd, "");
  }
);
function Jl(e, t) {
  return new RegExp(e, t);
}
var ro;
if (to) {
  var os = Jl("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  ro = function(t, n) {
    var r;
    os.lastIndex = n;
    var i = os.exec(t);
    return (r = i[1]) !== null && r !== void 0 ? r : "";
  };
} else
  ro = function(t, n) {
    for (var r = []; ; ) {
      var i = Ql(t, n);
      if (i === void 0 || $l(i) || ff(i))
        break;
      r.push(i), n += i >= 65536 ? 2 : 1;
    }
    return no.apply(void 0, r);
  };
var uf = (
  /** @class */
  function() {
    function e(t, n) {
      n === void 0 && (n = {}), this.message = t, this.position = { offset: 0, line: 1, column: 1 }, this.ignoreTag = !!n.ignoreTag, this.locale = n.locale, this.requiresOtherClause = !!n.requiresOtherClause, this.shouldParseSkeletons = !!n.shouldParseSkeletons;
    }
    return e.prototype.parse = function() {
      if (this.offset() !== 0)
        throw Error("parser can only be used once");
      return this.parseMessage(0, "", !1);
    }, e.prototype.parseMessage = function(t, n, r) {
      for (var i = []; !this.isEOF(); ) {
        var a = this.char();
        if (a === 123) {
          var o = this.parseArgument(t, r);
          if (o.err)
            return o;
          i.push(o.val);
        } else {
          if (a === 125 && t > 0)
            break;
          if (a === 35 && (n === "plural" || n === "selectordinal")) {
            var l = this.clonePosition();
            this.bump(), i.push({
              type: Ke.pound,
              location: He(l, this.clonePosition())
            });
          } else if (a === 60 && !this.ignoreTag && this.peek() === 47) {
            if (r)
              break;
            return this.error(Le.UNMATCHED_CLOSING_TAG, He(this.clonePosition(), this.clonePosition()));
          } else if (a === 60 && !this.ignoreTag && io(this.peek() || 0)) {
            var o = this.parseTag(t, n);
            if (o.err)
              return o;
            i.push(o.val);
          } else {
            var o = this.parseLiteral(t, n);
            if (o.err)
              return o;
            i.push(o.val);
          }
        }
      }
      return { val: i, err: null };
    }, e.prototype.parseTag = function(t, n) {
      var r = this.clonePosition();
      this.bump();
      var i = this.parseTagName();
      if (this.bumpSpace(), this.bumpIf("/>"))
        return {
          val: {
            type: Ke.literal,
            value: "<".concat(i, "/>"),
            location: He(r, this.clonePosition())
          },
          err: null
        };
      if (this.bumpIf(">")) {
        var a = this.parseMessage(t + 1, n, !0);
        if (a.err)
          return a;
        var o = a.val, l = this.clonePosition();
        if (this.bumpIf("</")) {
          if (this.isEOF() || !io(this.char()))
            return this.error(Le.INVALID_TAG, He(l, this.clonePosition()));
          var s = this.clonePosition(), u = this.parseTagName();
          return i !== u ? this.error(Le.UNMATCHED_CLOSING_TAG, He(s, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
            val: {
              type: Ke.tag,
              value: i,
              children: o,
              location: He(r, this.clonePosition())
            },
            err: null
          } : this.error(Le.INVALID_TAG, He(l, this.clonePosition())));
        } else
          return this.error(Le.UNCLOSED_TAG, He(r, this.clonePosition()));
      } else
        return this.error(Le.INVALID_TAG, He(r, this.clonePosition()));
    }, e.prototype.parseTagName = function() {
      var t = this.offset();
      for (this.bump(); !this.isEOF() && df(this.char()); )
        this.bump();
      return this.message.slice(t, this.offset());
    }, e.prototype.parseLiteral = function(t, n) {
      for (var r = this.clonePosition(), i = ""; ; ) {
        var a = this.tryParseQuote(n);
        if (a) {
          i += a;
          continue;
        }
        var o = this.tryParseUnquoted(t, n);
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
      var s = He(r, this.clonePosition());
      return {
        val: { type: Ke.literal, value: i, location: s },
        err: null
      };
    }, e.prototype.tryParseLeftAngleBracket = function() {
      return !this.isEOF() && this.char() === 60 && (this.ignoreTag || // If at the opening tag or closing tag position, bail.
      !cf(this.peek() || 0)) ? (this.bump(), "<") : null;
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
      return no.apply(void 0, n);
    }, e.prototype.tryParseUnquoted = function(t, n) {
      if (this.isEOF())
        return null;
      var r = this.char();
      return r === 60 || r === 123 || r === 35 && (n === "plural" || n === "selectordinal") || r === 125 && t > 0 ? null : (this.bump(), no(r));
    }, e.prototype.parseArgument = function(t, n) {
      var r = this.clonePosition();
      if (this.bump(), this.bumpSpace(), this.isEOF())
        return this.error(Le.EXPECT_ARGUMENT_CLOSING_BRACE, He(r, this.clonePosition()));
      if (this.char() === 125)
        return this.bump(), this.error(Le.EMPTY_ARGUMENT, He(r, this.clonePosition()));
      var i = this.parseIdentifierIfPossible().value;
      if (!i)
        return this.error(Le.MALFORMED_ARGUMENT, He(r, this.clonePosition()));
      if (this.bumpSpace(), this.isEOF())
        return this.error(Le.EXPECT_ARGUMENT_CLOSING_BRACE, He(r, this.clonePosition()));
      switch (this.char()) {
        case 125:
          return this.bump(), {
            val: {
              type: Ke.argument,
              // value does not include the opening and closing braces.
              value: i,
              location: He(r, this.clonePosition())
            },
            err: null
          };
        case 44:
          return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(Le.EXPECT_ARGUMENT_CLOSING_BRACE, He(r, this.clonePosition())) : this.parseArgumentOptions(t, n, i, r);
        default:
          return this.error(Le.MALFORMED_ARGUMENT, He(r, this.clonePosition()));
      }
    }, e.prototype.parseIdentifierIfPossible = function() {
      var t = this.clonePosition(), n = this.offset(), r = ro(this.message, n), i = n + r.length;
      this.bumpTo(i);
      var a = this.clonePosition(), o = He(t, a);
      return { value: r, location: o };
    }, e.prototype.parseArgumentOptions = function(t, n, r, i) {
      var a, o = this.clonePosition(), l = this.parseIdentifierIfPossible().value, s = this.clonePosition();
      switch (l) {
        case "":
          return this.error(Le.EXPECT_ARGUMENT_TYPE, He(o, s));
        case "number":
        case "date":
        case "time": {
          this.bumpSpace();
          var u = null;
          if (this.bumpIf(",")) {
            this.bumpSpace();
            var c = this.clonePosition(), f = this.parseSimpleArgStyleIfPossible();
            if (f.err)
              return f;
            var v = lf(f.val);
            if (v.length === 0)
              return this.error(Le.EXPECT_ARGUMENT_STYLE, He(this.clonePosition(), this.clonePosition()));
            var h = He(c, this.clonePosition());
            u = { style: v, styleLocation: h };
          }
          var g = this.tryParseArgumentClose(i);
          if (g.err)
            return g;
          var p = He(i, this.clonePosition());
          if (u && is(u == null ? void 0 : u.style, "::", 0)) {
            var E = sf(u.style.slice(2));
            if (l === "number") {
              var f = this.parseNumberSkeletonFromString(E, u.styleLocation);
              return f.err ? f : {
                val: { type: Ke.number, value: r, location: p, style: f.val },
                err: null
              };
            } else {
              if (E.length === 0)
                return this.error(Le.EXPECT_DATE_TIME_SKELETON, p);
              var y = E;
              this.locale && (y = Wd(E, this.locale));
              var v = {
                type: Gr.dateTime,
                pattern: y,
                location: u.styleLocation,
                parsedOptions: this.shouldParseSkeletons ? kd(y) : {}
              }, L = l === "date" ? Ke.date : Ke.time;
              return {
                val: { type: L, value: r, location: p, style: v },
                err: null
              };
            }
          }
          return {
            val: {
              type: l === "number" ? Ke.number : l === "date" ? Ke.date : Ke.time,
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
          var x = this.clonePosition();
          if (this.bumpSpace(), !this.bumpIf(","))
            return this.error(Le.EXPECT_SELECT_ARGUMENT_OPTIONS, He(x, K({}, x)));
          this.bumpSpace();
          var _ = this.parseIdentifierIfPossible(), S = 0;
          if (l !== "select" && _.value === "offset") {
            if (!this.bumpIf(":"))
              return this.error(Le.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, He(this.clonePosition(), this.clonePosition()));
            this.bumpSpace();
            var f = this.tryParseDecimalInteger(Le.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, Le.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);
            if (f.err)
              return f;
            this.bumpSpace(), _ = this.parseIdentifierIfPossible(), S = f.val;
          }
          var b = this.tryParsePluralOrSelectOptions(t, l, n, _);
          if (b.err)
            return b;
          var g = this.tryParseArgumentClose(i);
          if (g.err)
            return g;
          var A = He(i, this.clonePosition());
          return l === "select" ? {
            val: {
              type: Ke.select,
              value: r,
              options: as(b.val),
              location: A
            },
            err: null
          } : {
            val: {
              type: Ke.plural,
              value: r,
              options: as(b.val),
              offset: S,
              pluralType: l === "plural" ? "cardinal" : "ordinal",
              location: A
            },
            err: null
          };
        }
        default:
          return this.error(Le.INVALID_ARGUMENT_TYPE, He(o, s));
      }
    }, e.prototype.tryParseArgumentClose = function(t) {
      return this.isEOF() || this.char() !== 125 ? this.error(Le.EXPECT_ARGUMENT_CLOSING_BRACE, He(t, this.clonePosition())) : (this.bump(), { val: !0, err: null });
    }, e.prototype.parseSimpleArgStyleIfPossible = function() {
      for (var t = 0, n = this.clonePosition(); !this.isEOF(); ) {
        var r = this.char();
        switch (r) {
          case 39: {
            this.bump();
            var i = this.clonePosition();
            if (!this.bumpUntil("'"))
              return this.error(Le.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, He(i, this.clonePosition()));
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
    }, e.prototype.parseNumberSkeletonFromString = function(t, n) {
      var r = [];
      try {
        r = jd(t);
      } catch {
        return this.error(Le.INVALID_NUMBER_SKELETON, n);
      }
      return {
        val: {
          type: Gr.number,
          tokens: r,
          location: n,
          parsedOptions: this.shouldParseSkeletons ? Xd(r) : {}
        },
        err: null
      };
    }, e.prototype.tryParsePluralOrSelectOptions = function(t, n, r, i) {
      for (var a, o = !1, l = [], s = /* @__PURE__ */ new Set(), u = i.value, c = i.location; ; ) {
        if (u.length === 0) {
          var f = this.clonePosition();
          if (n !== "select" && this.bumpIf("=")) {
            var v = this.tryParseDecimalInteger(Le.EXPECT_PLURAL_ARGUMENT_SELECTOR, Le.INVALID_PLURAL_ARGUMENT_SELECTOR);
            if (v.err)
              return v;
            c = He(f, this.clonePosition()), u = this.message.slice(f.offset, this.offset());
          } else
            break;
        }
        if (s.has(u))
          return this.error(n === "select" ? Le.DUPLICATE_SELECT_ARGUMENT_SELECTOR : Le.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, c);
        u === "other" && (o = !0), this.bumpSpace();
        var h = this.clonePosition();
        if (!this.bumpIf("{"))
          return this.error(n === "select" ? Le.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : Le.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, He(this.clonePosition(), this.clonePosition()));
        var g = this.parseMessage(t + 1, n, r);
        if (g.err)
          return g;
        var p = this.tryParseArgumentClose(h);
        if (p.err)
          return p;
        l.push([
          u,
          {
            value: g.val,
            location: He(h, this.clonePosition())
          }
        ]), s.add(u), this.bumpSpace(), a = this.parseIdentifierIfPossible(), u = a.value, c = a.location;
      }
      return l.length === 0 ? this.error(n === "select" ? Le.EXPECT_SELECT_ARGUMENT_SELECTOR : Le.EXPECT_PLURAL_ARGUMENT_SELECTOR, He(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !o ? this.error(Le.MISSING_OTHER_CLAUSE, He(this.clonePosition(), this.clonePosition())) : { val: l, err: null };
    }, e.prototype.tryParseDecimalInteger = function(t, n) {
      var r = 1, i = this.clonePosition();
      this.bumpIf("+") || this.bumpIf("-") && (r = -1);
      for (var a = !1, o = 0; !this.isEOF(); ) {
        var l = this.char();
        if (l >= 48 && l <= 57)
          a = !0, o = o * 10 + (l - 48), this.bump();
        else
          break;
      }
      var s = He(i, this.clonePosition());
      return a ? (o *= r, af(o) ? { val: o, err: null } : this.error(n, s)) : this.error(t, s);
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
      var n = Ql(this.message, t);
      if (n === void 0)
        throw Error("Offset ".concat(t, " is at invalid UTF-16 code unit boundary"));
      return n;
    }, e.prototype.error = function(t, n) {
      return {
        val: null,
        err: {
          kind: t,
          message: this.message,
          location: n
        }
      };
    }, e.prototype.bump = function() {
      if (!this.isEOF()) {
        var t = this.char();
        t === 10 ? (this.position.line += 1, this.position.column = 1, this.position.offset += 1) : (this.position.column += 1, this.position.offset += t < 65536 ? 1 : 2);
      }
    }, e.prototype.bumpIf = function(t) {
      if (is(this.message, t, this.offset())) {
        for (var n = 0; n < t.length; n++)
          this.bump();
        return !0;
      }
      return !1;
    }, e.prototype.bumpUntil = function(t) {
      var n = this.offset(), r = this.message.indexOf(t, n);
      return r >= 0 ? (this.bumpTo(r), !0) : (this.bumpTo(this.message.length), !1);
    }, e.prototype.bumpTo = function(t) {
      if (this.offset() > t)
        throw Error("targetOffset ".concat(t, " must be greater than or equal to the current offset ").concat(this.offset()));
      for (t = Math.min(t, this.message.length); ; ) {
        var n = this.offset();
        if (n === t)
          break;
        if (n > t)
          throw Error("targetOffset ".concat(t, " is at invalid UTF-16 code unit boundary"));
        if (this.bump(), this.isEOF())
          break;
      }
    }, e.prototype.bumpSpace = function() {
      for (; !this.isEOF() && $l(this.char()); )
        this.bump();
    }, e.prototype.peek = function() {
      if (this.isEOF())
        return null;
      var t = this.char(), n = this.offset(), r = this.message.charCodeAt(n + (t >= 65536 ? 2 : 1));
      return r ?? null;
    }, e;
  }()
);
function io(e) {
  return e >= 97 && e <= 122 || e >= 65 && e <= 90;
}
function cf(e) {
  return io(e) || e === 47;
}
function df(e) {
  return e === 45 || e === 46 || e >= 48 && e <= 57 || e === 95 || e >= 97 && e <= 122 || e >= 65 && e <= 90 || e == 183 || e >= 192 && e <= 214 || e >= 216 && e <= 246 || e >= 248 && e <= 893 || e >= 895 && e <= 8191 || e >= 8204 && e <= 8205 || e >= 8255 && e <= 8256 || e >= 8304 && e <= 8591 || e >= 11264 && e <= 12271 || e >= 12289 && e <= 55295 || e >= 63744 && e <= 64975 || e >= 65008 && e <= 65533 || e >= 65536 && e <= 983039;
}
function $l(e) {
  return e >= 9 && e <= 13 || e === 32 || e === 133 || e >= 8206 && e <= 8207 || e === 8232 || e === 8233;
}
function ff(e) {
  return e >= 33 && e <= 35 || e === 36 || e >= 37 && e <= 39 || e === 40 || e === 41 || e === 42 || e === 43 || e === 44 || e === 45 || e >= 46 && e <= 47 || e >= 58 && e <= 59 || e >= 60 && e <= 62 || e >= 63 && e <= 64 || e === 91 || e === 92 || e === 93 || e === 94 || e === 96 || e === 123 || e === 124 || e === 125 || e === 126 || e === 161 || e >= 162 && e <= 165 || e === 166 || e === 167 || e === 169 || e === 171 || e === 172 || e === 174 || e === 176 || e === 177 || e === 182 || e === 187 || e === 191 || e === 215 || e === 247 || e >= 8208 && e <= 8213 || e >= 8214 && e <= 8215 || e === 8216 || e === 8217 || e === 8218 || e >= 8219 && e <= 8220 || e === 8221 || e === 8222 || e === 8223 || e >= 8224 && e <= 8231 || e >= 8240 && e <= 8248 || e === 8249 || e === 8250 || e >= 8251 && e <= 8254 || e >= 8257 && e <= 8259 || e === 8260 || e === 8261 || e === 8262 || e >= 8263 && e <= 8273 || e === 8274 || e === 8275 || e >= 8277 && e <= 8286 || e >= 8592 && e <= 8596 || e >= 8597 && e <= 8601 || e >= 8602 && e <= 8603 || e >= 8604 && e <= 8607 || e === 8608 || e >= 8609 && e <= 8610 || e === 8611 || e >= 8612 && e <= 8613 || e === 8614 || e >= 8615 && e <= 8621 || e === 8622 || e >= 8623 && e <= 8653 || e >= 8654 && e <= 8655 || e >= 8656 && e <= 8657 || e === 8658 || e === 8659 || e === 8660 || e >= 8661 && e <= 8691 || e >= 8692 && e <= 8959 || e >= 8960 && e <= 8967 || e === 8968 || e === 8969 || e === 8970 || e === 8971 || e >= 8972 && e <= 8991 || e >= 8992 && e <= 8993 || e >= 8994 && e <= 9e3 || e === 9001 || e === 9002 || e >= 9003 && e <= 9083 || e === 9084 || e >= 9085 && e <= 9114 || e >= 9115 && e <= 9139 || e >= 9140 && e <= 9179 || e >= 9180 && e <= 9185 || e >= 9186 && e <= 9254 || e >= 9255 && e <= 9279 || e >= 9280 && e <= 9290 || e >= 9291 && e <= 9311 || e >= 9472 && e <= 9654 || e === 9655 || e >= 9656 && e <= 9664 || e === 9665 || e >= 9666 && e <= 9719 || e >= 9720 && e <= 9727 || e >= 9728 && e <= 9838 || e === 9839 || e >= 9840 && e <= 10087 || e === 10088 || e === 10089 || e === 10090 || e === 10091 || e === 10092 || e === 10093 || e === 10094 || e === 10095 || e === 10096 || e === 10097 || e === 10098 || e === 10099 || e === 10100 || e === 10101 || e >= 10132 && e <= 10175 || e >= 10176 && e <= 10180 || e === 10181 || e === 10182 || e >= 10183 && e <= 10213 || e === 10214 || e === 10215 || e === 10216 || e === 10217 || e === 10218 || e === 10219 || e === 10220 || e === 10221 || e === 10222 || e === 10223 || e >= 10224 && e <= 10239 || e >= 10240 && e <= 10495 || e >= 10496 && e <= 10626 || e === 10627 || e === 10628 || e === 10629 || e === 10630 || e === 10631 || e === 10632 || e === 10633 || e === 10634 || e === 10635 || e === 10636 || e === 10637 || e === 10638 || e === 10639 || e === 10640 || e === 10641 || e === 10642 || e === 10643 || e === 10644 || e === 10645 || e === 10646 || e === 10647 || e === 10648 || e >= 10649 && e <= 10711 || e === 10712 || e === 10713 || e === 10714 || e === 10715 || e >= 10716 && e <= 10747 || e === 10748 || e === 10749 || e >= 10750 && e <= 11007 || e >= 11008 && e <= 11055 || e >= 11056 && e <= 11076 || e >= 11077 && e <= 11078 || e >= 11079 && e <= 11084 || e >= 11085 && e <= 11123 || e >= 11124 && e <= 11125 || e >= 11126 && e <= 11157 || e === 11158 || e >= 11159 && e <= 11263 || e >= 11776 && e <= 11777 || e === 11778 || e === 11779 || e === 11780 || e === 11781 || e >= 11782 && e <= 11784 || e === 11785 || e === 11786 || e === 11787 || e === 11788 || e === 11789 || e >= 11790 && e <= 11798 || e === 11799 || e >= 11800 && e <= 11801 || e === 11802 || e === 11803 || e === 11804 || e === 11805 || e >= 11806 && e <= 11807 || e === 11808 || e === 11809 || e === 11810 || e === 11811 || e === 11812 || e === 11813 || e === 11814 || e === 11815 || e === 11816 || e === 11817 || e >= 11818 && e <= 11822 || e === 11823 || e >= 11824 && e <= 11833 || e >= 11834 && e <= 11835 || e >= 11836 && e <= 11839 || e === 11840 || e === 11841 || e === 11842 || e >= 11843 && e <= 11855 || e >= 11856 && e <= 11857 || e === 11858 || e >= 11859 && e <= 11903 || e >= 12289 && e <= 12291 || e === 12296 || e === 12297 || e === 12298 || e === 12299 || e === 12300 || e === 12301 || e === 12302 || e === 12303 || e === 12304 || e === 12305 || e >= 12306 && e <= 12307 || e === 12308 || e === 12309 || e === 12310 || e === 12311 || e === 12312 || e === 12313 || e === 12314 || e === 12315 || e === 12316 || e === 12317 || e >= 12318 && e <= 12319 || e === 12320 || e === 12336 || e === 64830 || e === 64831 || e >= 65093 && e <= 65094;
}
function ao(e) {
  e.forEach(function(t) {
    if (delete t.location, Vl(t) || ql(t))
      for (var n in t.options)
        delete t.options[n].location, ao(t.options[n].value);
    else kl(t) && Xl(t.style) || (Gl(t) || jl(t)) && eo(t.style) ? delete t.style.location : zl(t) && ao(t.children);
  });
}
function hf(e, t) {
  t === void 0 && (t = {}), t = K({ shouldParseSkeletons: !0, requiresOtherClause: !0 }, t);
  var n = new uf(e, t).parse();
  if (n.err) {
    var r = SyntaxError(Le[n.err.kind]);
    throw r.location = n.err.location, r.originalMessage = n.err.message, r;
  }
  return t != null && t.captureLocation || ao(n.val), n.val;
}
var jr;
(function(e) {
  e.MISSING_VALUE = "MISSING_VALUE", e.INVALID_VALUE = "INVALID_VALUE", e.MISSING_INTL_API = "MISSING_INTL_API";
})(jr || (jr = {}));
var ga = (
  /** @class */
  function(e) {
    vt(t, e);
    function t(n, r, i) {
      var a = e.call(this, n) || this;
      return a.code = r, a.originalMessage = i, a;
    }
    return t.prototype.toString = function() {
      return "[formatjs Error: ".concat(this.code, "] ").concat(this.message);
    }, t;
  }(Error)
), ss = (
  /** @class */
  function(e) {
    vt(t, e);
    function t(n, r, i, a) {
      return e.call(this, 'Invalid values for "'.concat(n, '": "').concat(r, '". Options are "').concat(Object.keys(i).join('", "'), '"'), jr.INVALID_VALUE, a) || this;
    }
    return t;
  }(ga)
), vf = (
  /** @class */
  function(e) {
    vt(t, e);
    function t(n, r, i) {
      return e.call(this, 'Value for "'.concat(n, '" must be of type ').concat(r), jr.INVALID_VALUE, i) || this;
    }
    return t;
  }(ga)
), gf = (
  /** @class */
  function(e) {
    vt(t, e);
    function t(n, r) {
      return e.call(this, 'The intl string context variable "'.concat(n, '" was not provided to the string "').concat(r, '"'), jr.MISSING_VALUE, r) || this;
    }
    return t;
  }(ga)
), At;
(function(e) {
  e[e.literal = 0] = "literal", e[e.object = 1] = "object";
})(At || (At = {}));
function pf(e) {
  return e.length < 2 ? e : e.reduce(function(t, n) {
    var r = t[t.length - 1];
    return !r || r.type !== At.literal || n.type !== At.literal ? t.push(n) : r.value += n.value, t;
  }, []);
}
function mf(e) {
  return typeof e == "function";
}
function zi(e, t, n, r, i, a, o) {
  if (e.length === 1 && es(e[0]))
    return [
      {
        type: At.literal,
        value: e[0].value
      }
    ];
  for (var l = [], s = 0, u = e; s < u.length; s++) {
    var c = u[s];
    if (es(c)) {
      l.push({
        type: At.literal,
        value: c.value
      });
      continue;
    }
    if (Fd(c)) {
      typeof a == "number" && l.push({
        type: At.literal,
        value: n.getNumberFormat(t).format(a)
      });
      continue;
    }
    var f = c.value;
    if (!(i && f in i))
      throw new gf(f, o);
    var v = i[f];
    if (Ud(c)) {
      (!v || typeof v == "string" || typeof v == "number") && (v = typeof v == "string" || typeof v == "number" ? String(v) : ""), l.push({
        type: typeof v == "string" ? At.literal : At.object,
        value: v
      });
      continue;
    }
    if (Gl(c)) {
      var h = typeof c.style == "string" ? r.date[c.style] : eo(c.style) ? c.style.parsedOptions : void 0;
      l.push({
        type: At.literal,
        value: n.getDateTimeFormat(t, h).format(v)
      });
      continue;
    }
    if (jl(c)) {
      var h = typeof c.style == "string" ? r.time[c.style] : eo(c.style) ? c.style.parsedOptions : r.time.medium;
      l.push({
        type: At.literal,
        value: n.getDateTimeFormat(t, h).format(v)
      });
      continue;
    }
    if (kl(c)) {
      var h = typeof c.style == "string" ? r.number[c.style] : Xl(c.style) ? c.style.parsedOptions : void 0;
      h && h.scale && (v = v * (h.scale || 1)), l.push({
        type: At.literal,
        value: n.getNumberFormat(t, h).format(v)
      });
      continue;
    }
    if (zl(c)) {
      var g = c.children, p = c.value, E = i[p];
      if (!mf(E))
        throw new vf(p, "function", o);
      var y = zi(g, t, n, r, i, a), L = E(y.map(function(S) {
        return S.value;
      }));
      Array.isArray(L) || (L = [L]), l.push.apply(l, L.map(function(S) {
        return {
          type: typeof S == "string" ? At.literal : At.object,
          value: S
        };
      }));
    }
    if (Vl(c)) {
      var x = c.options[v] || c.options.other;
      if (!x)
        throw new ss(c.value, v, Object.keys(c.options), o);
      l.push.apply(l, zi(x.value, t, n, r, i));
      continue;
    }
    if (ql(c)) {
      var x = c.options["=".concat(v)];
      if (!x) {
        if (!Intl.PluralRules)
          throw new ga(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`, jr.MISSING_INTL_API, o);
        var _ = n.getPluralRules(t, { type: c.pluralType }).select(v - (c.offset || 0));
        x = c.options[_] || c.options.other;
      }
      if (!x)
        throw new ss(c.value, v, Object.keys(c.options), o);
      l.push.apply(l, zi(x.value, t, n, r, i, v - (c.offset || 0)));
      continue;
    }
  }
  return pf(l);
}
function bf(e, t) {
  return t ? K(K(K({}, e || {}), t || {}), Object.keys(e).reduce(function(n, r) {
    return n[r] = K(K({}, e[r]), t[r] || {}), n;
  }, {})) : e;
}
function _f(e, t) {
  return t ? Object.keys(e).reduce(function(n, r) {
    return n[r] = bf(e[r], t[r]), n;
  }, K({}, e)) : e;
}
function Ta(e) {
  return {
    create: function() {
      return {
        get: function(t) {
          return e[t];
        },
        set: function(t, n) {
          e[t] = n;
        }
      };
    }
  };
}
function yf(e) {
  return e === void 0 && (e = {
    number: {},
    dateTime: {},
    pluralRules: {}
  }), {
    getNumberFormat: xa(function() {
      for (var t, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((t = Intl.NumberFormat).bind.apply(t, wr([void 0], n, !1)))();
    }, {
      cache: Ta(e.number),
      strategy: wa.variadic
    }),
    getDateTimeFormat: xa(function() {
      for (var t, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((t = Intl.DateTimeFormat).bind.apply(t, wr([void 0], n, !1)))();
    }, {
      cache: Ta(e.dateTime),
      strategy: wa.variadic
    }),
    getPluralRules: xa(function() {
      for (var t, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((t = Intl.PluralRules).bind.apply(t, wr([void 0], n, !1)))();
    }, {
      cache: Ta(e.pluralRules),
      strategy: wa.variadic
    })
  };
}
var eu = (
  /** @class */
  function() {
    function e(t, n, r, i) {
      n === void 0 && (n = e.defaultLocale);
      var a = this;
      if (this.formatterCache = {
        number: {},
        dateTime: {},
        pluralRules: {}
      }, this.format = function(s) {
        var u = a.formatToParts(s);
        if (u.length === 1)
          return u[0].value;
        var c = u.reduce(function(f, v) {
          return !f.length || v.type !== At.literal || typeof f[f.length - 1] != "string" ? f.push(v.value) : f[f.length - 1] += v.value, f;
        }, []);
        return c.length <= 1 ? c[0] || "" : c;
      }, this.formatToParts = function(s) {
        return zi(a.ast, a.locales, a.formatters, a.formats, s, void 0, a.message);
      }, this.resolvedOptions = function() {
        var s;
        return {
          locale: ((s = a.resolvedLocale) === null || s === void 0 ? void 0 : s.toString()) || Intl.NumberFormat.supportedLocalesOf(a.locales)[0]
        };
      }, this.getAst = function() {
        return a.ast;
      }, this.locales = n, this.resolvedLocale = e.resolveLocale(n), typeof t == "string") {
        if (this.message = t, !e.__parse)
          throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");
        var o = i || {};
        o.formatters;
        var l = wd(o, ["formatters"]);
        this.ast = e.__parse(t, K(K({}, l), { locale: this.resolvedLocale }));
      } else
        this.ast = t;
      if (!Array.isArray(this.ast))
        throw new TypeError("A message must be provided as a String or AST.");
      this.formats = _f(e.formats, r), this.formatters = i && i.formatters || yf(this.formatterCache);
    }
    return Object.defineProperty(e, "defaultLocale", {
      get: function() {
        return e.memoizedDefaultLocale || (e.memoizedDefaultLocale = new Intl.NumberFormat().resolvedOptions().locale), e.memoizedDefaultLocale;
      },
      enumerable: !1,
      configurable: !0
    }), e.memoizedDefaultLocale = null, e.resolveLocale = function(t) {
      if (!(typeof Intl.Locale > "u")) {
        var n = Intl.NumberFormat.supportedLocalesOf(t);
        return n.length > 0 ? new Intl.Locale(n[0]) : new Intl.Locale(typeof t == "string" ? t : t[0]);
      }
    }, e.__parse = hf, e.formats = {
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
function Ef(e, t) {
  if (t == null)
    return;
  if (t in e)
    return e[t];
  const n = t.split(".");
  let r = e;
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
const Un = {}, Sf = (e, t, n) => n && (t in Un || (Un[t] = {}), e in Un[t] || (Un[t][e] = n), n), tu = (e, t) => {
  if (t == null)
    return;
  if (t in Un && e in Un[t])
    return Un[t][e];
  const n = Ci(t);
  for (let r = 0; r < n.length; r++) {
    const i = n[r], a = Af(i, e);
    if (a)
      return Sf(e, t, a);
  }
};
let To;
const Si = Lt({});
function Cf(e) {
  return To[e] || null;
}
function nu(e) {
  return e in To;
}
function Af(e, t) {
  if (!nu(e))
    return null;
  const n = Cf(e);
  return Ef(n, t);
}
function If(e) {
  if (e == null)
    return;
  const t = Ci(e);
  for (let n = 0; n < t.length; n++) {
    const r = t[n];
    if (nu(r))
      return r;
  }
}
function ru(e, ...t) {
  delete Un[e], Si.update((n) => (n[e] = xd.all([n[e] || {}, ...t]), n));
}
Zr(
  [Si],
  ([e]) => Object.keys(e)
);
Si.subscribe((e) => To = e);
const Xi = {};
function xf(e, t) {
  Xi[e].delete(t), Xi[e].size === 0 && delete Xi[e];
}
function iu(e) {
  return Xi[e];
}
function wf(e) {
  return Ci(e).map((t) => {
    const n = iu(t);
    return [t, n ? [...n] : []];
  }).filter(([, t]) => t.length > 0);
}
function Qi(e) {
  return e == null ? !1 : Ci(e).some(
    (t) => {
      var n;
      return (n = iu(t)) == null ? void 0 : n.size;
    }
  );
}
function Lf(e, t) {
  return Promise.all(
    t.map((r) => (xf(e, r), r().then((i) => i.default || i)))
  ).then((r) => ru(e, ...r));
}
const ni = {};
function au(e) {
  if (!Qi(e))
    return e in ni ? ni[e] : Promise.resolve();
  const t = wf(e);
  return ni[e] = Promise.all(
    t.map(
      ([n, r]) => Lf(n, r)
    )
  ).then(() => {
    if (Qi(e))
      return au(e);
    delete ni[e];
  }), ni[e];
}
var ls = Object.getOwnPropertySymbols, Tf = Object.prototype.hasOwnProperty, Of = Object.prototype.propertyIsEnumerable, Rf = (e, t) => {
  var n = {};
  for (var r in e)
    Tf.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && ls)
    for (var r of ls(e))
      t.indexOf(r) < 0 && Of.call(e, r) && (n[r] = e[r]);
  return n;
};
const Hf = {
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
function Df({ locale: e, id: t }) {
  console.warn(
    `[svelte-i18n] The message "${t}" was not found in "${Ci(
      e
    ).join('", "')}".${Qi(Wn()) ? `

Note: there are at least one loader still registered to this locale that wasn't executed.` : ""}`
  );
}
const Pf = {
  fallbackLocale: null,
  loadingDelay: 200,
  formats: Hf,
  warnOnMissingMessages: !0,
  handleMissingMessage: void 0,
  ignoreTag: !0
}, oi = Pf;
function Vr() {
  return oi;
}
function Mf(e) {
  const t = e, { formats: n } = t, r = Rf(t, ["formats"]);
  let i = e.fallbackLocale;
  if (e.initialLocale)
    try {
      eu.resolveLocale(e.initialLocale) && (i = e.initialLocale);
    } catch {
      console.warn(
        `[svelte-i18n] The initial locale "${e.initialLocale}" is not a valid locale.`
      );
    }
  return r.warnOnMissingMessages && (delete r.warnOnMissingMessages, r.handleMissingMessage == null ? r.handleMissingMessage = Df : console.warn(
    '[svelte-i18n] The "warnOnMissingMessages" option is deprecated. Please use the "handleMissingMessage" option instead.'
  )), Object.assign(oi, r, { initialLocale: i }), n && ("number" in n && Object.assign(oi.formats.number, n.number), "date" in n && Object.assign(oi.formats.date, n.date), "time" in n && Object.assign(oi.formats.time, n.time)), br.set(i);
}
const Oa = Lt(!1);
var Bf = Object.defineProperty, Uf = Object.defineProperties, Ff = Object.getOwnPropertyDescriptors, us = Object.getOwnPropertySymbols, Nf = Object.prototype.hasOwnProperty, kf = Object.prototype.propertyIsEnumerable, cs = (e, t, n) => t in e ? Bf(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Gf = (e, t) => {
  for (var n in t || (t = {}))
    Nf.call(t, n) && cs(e, n, t[n]);
  if (us)
    for (var n of us(t))
      kf.call(t, n) && cs(e, n, t[n]);
  return e;
}, jf = (e, t) => Uf(e, Ff(t));
let oo;
const Ji = Lt(null);
function ds(e) {
  return e.split("-").map((t, n, r) => r.slice(0, n + 1).join("-")).reverse();
}
function Ci(e, t = Vr().fallbackLocale) {
  const n = ds(e);
  return t ? [.../* @__PURE__ */ new Set([...n, ...ds(t)])] : n;
}
function Wn() {
  return oo ?? void 0;
}
Ji.subscribe((e) => {
  oo = e ?? void 0, typeof window < "u" && e != null && document.documentElement.setAttribute("lang", e);
});
const Vf = (e) => {
  if (e && If(e) && Qi(e)) {
    const { loadingDelay: t } = Vr();
    let n;
    return typeof window < "u" && Wn() != null && t ? n = window.setTimeout(
      () => Oa.set(!0),
      t
    ) : Oa.set(!0), au(e).then(() => {
      Ji.set(e);
    }).finally(() => {
      clearTimeout(n), Oa.set(!1);
    });
  }
  return Ji.set(e);
}, br = jf(Gf({}, Ji), {
  set: Vf
}), qf = () => typeof window > "u" ? null : window.navigator.language || window.navigator.languages[0], pa = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (r) => {
    const i = JSON.stringify(r);
    return i in t ? t[i] : t[i] = e(r);
  };
};
var zf = Object.defineProperty, $i = Object.getOwnPropertySymbols, ou = Object.prototype.hasOwnProperty, su = Object.prototype.propertyIsEnumerable, fs = (e, t, n) => t in e ? zf(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Oo = (e, t) => {
  for (var n in t || (t = {}))
    ou.call(t, n) && fs(e, n, t[n]);
  if ($i)
    for (var n of $i(t))
      su.call(t, n) && fs(e, n, t[n]);
  return e;
}, Yr = (e, t) => {
  var n = {};
  for (var r in e)
    ou.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && $i)
    for (var r of $i(e))
      t.indexOf(r) < 0 && su.call(e, r) && (n[r] = e[r]);
  return n;
};
const vi = (e, t) => {
  const { formats: n } = Vr();
  if (e in n && t in n[e])
    return n[e][t];
  throw new Error(`[svelte-i18n] Unknown "${t}" ${e} format.`);
}, Xf = pa(
  (e) => {
    var t = e, { locale: n, format: r } = t, i = Yr(t, ["locale", "format"]);
    if (n == null)
      throw new Error('[svelte-i18n] A "locale" must be set to format numbers');
    return r && (i = vi("number", r)), new Intl.NumberFormat(n, i);
  }
), Wf = pa(
  (e) => {
    var t = e, { locale: n, format: r } = t, i = Yr(t, ["locale", "format"]);
    if (n == null)
      throw new Error('[svelte-i18n] A "locale" must be set to format dates');
    return r ? i = vi("date", r) : Object.keys(i).length === 0 && (i = vi("date", "short")), new Intl.DateTimeFormat(n, i);
  }
), Zf = pa(
  (e) => {
    var t = e, { locale: n, format: r } = t, i = Yr(t, ["locale", "format"]);
    if (n == null)
      throw new Error(
        '[svelte-i18n] A "locale" must be set to format time values'
      );
    return r ? i = vi("time", r) : Object.keys(i).length === 0 && (i = vi("time", "short")), new Intl.DateTimeFormat(n, i);
  }
), Yf = (e = {}) => {
  var t = e, {
    locale: n = Wn()
  } = t, r = Yr(t, [
    "locale"
  ]);
  return Xf(Oo({ locale: n }, r));
}, Kf = (e = {}) => {
  var t = e, {
    locale: n = Wn()
  } = t, r = Yr(t, [
    "locale"
  ]);
  return Wf(Oo({ locale: n }, r));
}, Qf = (e = {}) => {
  var t = e, {
    locale: n = Wn()
  } = t, r = Yr(t, [
    "locale"
  ]);
  return Zf(Oo({ locale: n }, r));
}, Jf = pa(
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  (e, t = Wn()) => new eu(e, t, Vr().formats, {
    ignoreTag: Vr().ignoreTag
  })
), $f = (e, t = {}) => {
  var n, r, i, a;
  let o = t;
  typeof e == "object" && (o = e, e = o.id);
  const {
    values: l,
    locale: s = Wn(),
    default: u
  } = o;
  if (s == null)
    throw new Error(
      "[svelte-i18n] Cannot format a message without first setting the initial locale."
    );
  let c = tu(e, s);
  if (!c)
    c = (a = (i = (r = (n = Vr()).handleMissingMessage) == null ? void 0 : r.call(n, { locale: s, id: e, defaultValue: u })) != null ? i : u) != null ? a : e;
  else if (typeof c != "string")
    return console.warn(
      `[svelte-i18n] Message with id "${e}" must be of type "string", found: "${typeof c}". Gettin its value through the "$format" method is deprecated; use the "json" method instead.`
    ), c;
  if (!l)
    return c;
  let f = c;
  try {
    f = Jf(c, s).format(l);
  } catch (v) {
    v instanceof Error && console.warn(
      `[svelte-i18n] Message "${e}" has syntax error:`,
      v.message
    );
  }
  return f;
}, eh = (e, t) => Qf(t).format(e), th = (e, t) => Kf(t).format(e), nh = (e, t) => Yf(t).format(e), rh = (e, t = Wn()) => tu(e, t), ih = Zr([br, Si], () => $f);
Zr([br], () => eh);
Zr([br], () => th);
Zr([br], () => nh);
Zr([br, Si], () => rh);
function ah(e, t) {
  Object.entries(e).forEach(([a, o]) => {
    ru(a, o);
  });
  const n = localStorage.getItem("language"), r = "en", i = n ?? qf();
  console.log("Initial: Setting the language to", i), Mf({
    fallbackLocale: r,
    initialLocale: i
  }), window.addEventListener("oscd-language-changed", (a) => {
    const o = a;
    if (!o.detail.language) {
      console.error("No translations for language");
      return;
    }
    console.log("Updating the language to", o.detail.language), br.set(o.detail.language);
  });
}
const oh = "Suche", sh = "Standort hinzufügen", lh = "Aktualisieren", uh = "Standort {name} löschen?", ch = "Bestätigen", dh = "Abbrechen", fh = "Speichern", hh = "Neuer Standort", vh = "Standort: {name}", gh = "Name", ph = "Schlüssel", mh = "Beschreibung", bh = "Standort-Tabelle", _h = "UUID", yh = "Zugewiesene Ressourcen", Eh = {
  search: oh,
  add_location: sh,
  refresh: lh,
  delete_location: uh,
  confirm: ch,
  cancel: dh,
  save: fh,
  new_location: hh,
  location: vh,
  name: gh,
  key: ph,
  description: mh,
  location_table: bh,
  uuid: _h,
  assigned_resources: yh
}, Sh = "Search", Ch = "Add Location", Ah = "Refresh", Ih = "Delete location {name}?", xh = "Confirm", wh = "Cancel", Lh = "Save", Th = "New Location", Oh = "Location: {name}", Rh = "Name", Hh = "Key", Dh = "Description", Ph = "Location Table", Mh = "UUID", Bh = "Assigned Resources", Uh = {
  search: Sh,
  add_location: Ch,
  refresh: Ah,
  delete_location: Ih,
  confirm: xh,
  cancel: wh,
  save: Lh,
  new_location: Th,
  location: Oh,
  name: Rh,
  key: Hh,
  description: Dh,
  location_table: Ph,
  uuid: Mh,
  assigned_resources: Bh
};
function je(e) {
  return Object.entries(e).filter(([t, n]) => t !== "" && n).map(([t]) => t).join(" ");
}
function nt(e, t, n, r = { bubbles: !0 }) {
  if (typeof Event > "u")
    throw new Error("Event not defined.");
  if (!e)
    throw new Error("Tried to dispatch event without element.");
  const i = new CustomEvent(t, Object.assign(Object.assign({}, r), { detail: n }));
  return e == null || e.dispatchEvent(i), i;
}
function ea(e, t) {
  let n = Object.getOwnPropertyNames(e);
  const r = {};
  for (let i = 0; i < n.length; i++) {
    const a = n[i], o = a.indexOf("$");
    o !== -1 && t.indexOf(a.substring(0, o + 1)) !== -1 || t.indexOf(a) === -1 && (r[a] = e[a]);
  }
  return r;
}
function tn(e, t) {
  let n = Object.getOwnPropertyNames(e);
  const r = {};
  for (let i = 0; i < n.length; i++) {
    const a = n[i];
    a.substring(0, t.length) === t && (r[a.substring(t.length)] = e[a]);
  }
  return r;
}
class Kr {
  constructor() {
    this.elementMap = /* @__PURE__ */ new Map();
  }
  /**
   * Listen to an event on an element.
   */
  on(t, n, r, i) {
    this.elementMap.has(t) || this.elementMap.set(t, {});
    const a = this.elementMap.get(t);
    if (a == null)
      throw new Error("Event map couldn't be created.");
    n in a || (a[n] = /* @__PURE__ */ new Map()), a[n].set(r, Fc(t, n, r, i));
  }
  /**
   * Unlisten to an event on an element.
   */
  off(t, n, r) {
    const i = this.elementMap.get(t);
    if (i == null || !(n in i))
      return;
    const a = i[n], o = a.get(r);
    o != null && (o(), a.delete(r), a.size === 0 && (delete i[n], Object.keys(i).length === 0 && this.elementMap.delete(t)));
  }
  /**
   * Unlisten to all events managed by this instance.
   */
  clear() {
    this.elementMap.forEach((t, n) => {
      for (let [r, i] of Object.entries(t))
        i.forEach((a, o) => {
          a();
        });
    }), this.elementMap.clear();
  }
}
function q(e, t) {
  let n = [];
  if (t)
    for (let r = 0; r < t.length; r++) {
      const i = t[r], a = Array.isArray(i) ? i[0] : i;
      Array.isArray(i) && i.length > 1 ? n.push(a(e, i[1])) : n.push(a(e));
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
var Mi;
function Fh(e, t) {
  t === void 0 && (t = !1);
  var n = e.CSS, r = Mi;
  if (typeof Mi == "boolean" && !t)
    return Mi;
  var i = n && typeof n.supports == "function";
  if (!i)
    return !1;
  var a = n.supports("--css-vars", "yes"), o = n.supports("(--css-vars: yes)") && n.supports("color", "#00000000");
  return r = a || o, t || (Mi = r), r;
}
function Nh(e, t, n) {
  if (!e)
    return { x: 0, y: 0 };
  var r = t.x, i = t.y, a = r + n.left, o = i + n.top, l, s;
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
var gn = (
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
function kh(e) {
  return e === void 0 && (e = window), Gh(e) ? { passive: !0 } : !1;
}
function Gh(e) {
  e === void 0 && (e = window);
  var t = !1;
  try {
    var n = {
      // This function will be called when the browser
      // attempts to access the passive property.
      get passive() {
        return t = !0, !1;
      }
    }, r = function() {
    };
    e.document.addEventListener("test", r, n), e.document.removeEventListener("test", r, n);
  } catch {
    t = !1;
  }
  return t;
}
const lu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  applyPassive: kh
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
function jh(e, t) {
  if (e.closest)
    return e.closest(t);
  for (var n = e; n; ) {
    if (uu(n, t))
      return n;
    n = n.parentElement;
  }
  return null;
}
function uu(e, t) {
  var n = e.matches || e.webkitMatchesSelector || e.msMatchesSelector;
  return n.call(e, t);
}
function Vh(e) {
  var t = e;
  if (t.offsetParent !== null)
    return t.scrollWidth;
  var n = t.cloneNode(!0);
  n.style.setProperty("position", "absolute"), n.style.setProperty("transform", "translate(-9999px, -9999px)"), document.documentElement.appendChild(n);
  var r = n.scrollWidth;
  return document.documentElement.removeChild(n), r;
}
const Ro = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  closest: jh,
  estimateScrollWidth: Vh,
  matches: uu
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
var qh = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  BG_FOCUSED: "mdc-ripple-upgraded--background-focused",
  FG_ACTIVATION: "mdc-ripple-upgraded--foreground-activation",
  FG_DEACTIVATION: "mdc-ripple-upgraded--foreground-deactivation",
  ROOT: "mdc-ripple-upgraded",
  UNBOUNDED: "mdc-ripple-upgraded--unbounded"
}, zh = {
  VAR_FG_SCALE: "--mdc-ripple-fg-scale",
  VAR_FG_SIZE: "--mdc-ripple-fg-size",
  VAR_FG_TRANSLATE_END: "--mdc-ripple-fg-translate-end",
  VAR_FG_TRANSLATE_START: "--mdc-ripple-fg-translate-start",
  VAR_LEFT: "--mdc-ripple-left",
  VAR_TOP: "--mdc-ripple-top"
}, hs = {
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
var vs = [
  "touchstart",
  "pointerdown",
  "mousedown",
  "keydown"
], gs = [
  "touchend",
  "pointerup",
  "mouseup",
  "contextmenu"
], Bi = [], Xh = (
  /** @class */
  function(e) {
    vt(t, e);
    function t(n) {
      var r = e.call(this, K(K({}, t.defaultAdapter), n)) || this;
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
    return Object.defineProperty(t, "cssClasses", {
      get: function() {
        return qh;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t, "strings", {
      get: function() {
        return zh;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t, "numbers", {
      get: function() {
        return hs;
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
      var n = this, r = this.supportsPressRipple();
      if (this.registerRootHandlers(r), r) {
        var i = t.cssClasses, a = i.ROOT, o = i.UNBOUNDED;
        requestAnimationFrame(function() {
          n.adapter.addClass(a), n.adapter.isUnbounded() && (n.adapter.addClass(o), n.layoutInternal());
        });
      }
    }, t.prototype.destroy = function() {
      var n = this;
      if (this.supportsPressRipple()) {
        this.activationTimer && (clearTimeout(this.activationTimer), this.activationTimer = 0, this.adapter.removeClass(t.cssClasses.FG_ACTIVATION)), this.fgDeactivationRemovalTimer && (clearTimeout(this.fgDeactivationRemovalTimer), this.fgDeactivationRemovalTimer = 0, this.adapter.removeClass(t.cssClasses.FG_DEACTIVATION));
        var r = t.cssClasses, i = r.ROOT, a = r.UNBOUNDED;
        requestAnimationFrame(function() {
          n.adapter.removeClass(i), n.adapter.removeClass(a), n.removeCssVars();
        });
      }
      this.deregisterRootHandlers(), this.deregisterDeactivationHandlers();
    }, t.prototype.activate = function(n) {
      this.activateImpl(n);
    }, t.prototype.deactivate = function() {
      this.deactivateImpl();
    }, t.prototype.layout = function() {
      var n = this;
      this.layoutFrame && cancelAnimationFrame(this.layoutFrame), this.layoutFrame = requestAnimationFrame(function() {
        n.layoutInternal(), n.layoutFrame = 0;
      });
    }, t.prototype.setUnbounded = function(n) {
      var r = t.cssClasses.UNBOUNDED;
      n ? this.adapter.addClass(r) : this.adapter.removeClass(r);
    }, t.prototype.handleFocus = function() {
      var n = this;
      requestAnimationFrame(function() {
        return n.adapter.addClass(t.cssClasses.BG_FOCUSED);
      });
    }, t.prototype.handleBlur = function() {
      var n = this;
      requestAnimationFrame(function() {
        return n.adapter.removeClass(t.cssClasses.BG_FOCUSED);
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
    }, t.prototype.registerRootHandlers = function(n) {
      var r, i;
      if (n) {
        try {
          for (var a = Ct(vs), o = a.next(); !o.done; o = a.next()) {
            var l = o.value;
            this.adapter.registerInteractionHandler(l, this.activateHandler);
          }
        } catch (s) {
          r = { error: s };
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
    }, t.prototype.registerDeactivationHandlers = function(n) {
      var r, i;
      if (n.type === "keydown")
        this.adapter.registerInteractionHandler("keyup", this.deactivateHandler);
      else
        try {
          for (var a = Ct(gs), o = a.next(); !o.done; o = a.next()) {
            var l = o.value;
            this.adapter.registerDocumentInteractionHandler(l, this.deactivateHandler);
          }
        } catch (s) {
          r = { error: s };
        } finally {
          try {
            o && !o.done && (i = a.return) && i.call(a);
          } finally {
            if (r) throw r.error;
          }
        }
    }, t.prototype.deregisterRootHandlers = function() {
      var n, r;
      try {
        for (var i = Ct(vs), a = i.next(); !a.done; a = i.next()) {
          var o = a.value;
          this.adapter.deregisterInteractionHandler(o, this.activateHandler);
        }
      } catch (l) {
        n = { error: l };
      } finally {
        try {
          a && !a.done && (r = i.return) && r.call(i);
        } finally {
          if (n) throw n.error;
        }
      }
      this.adapter.deregisterInteractionHandler("focus", this.focusHandler), this.adapter.deregisterInteractionHandler("blur", this.blurHandler), this.adapter.isUnbounded() && this.adapter.deregisterResizeHandler(this.resizeHandler);
    }, t.prototype.deregisterDeactivationHandlers = function() {
      var n, r;
      this.adapter.deregisterInteractionHandler("keyup", this.deactivateHandler);
      try {
        for (var i = Ct(gs), a = i.next(); !a.done; a = i.next()) {
          var o = a.value;
          this.adapter.deregisterDocumentInteractionHandler(o, this.deactivateHandler);
        }
      } catch (l) {
        n = { error: l };
      } finally {
        try {
          a && !a.done && (r = i.return) && r.call(i);
        } finally {
          if (n) throw n.error;
        }
      }
    }, t.prototype.removeCssVars = function() {
      var n = this, r = t.strings, i = Object.keys(r);
      i.forEach(function(a) {
        a.indexOf("VAR_") === 0 && n.adapter.updateCssVariable(r[a], null);
      });
    }, t.prototype.activateImpl = function(n) {
      var r = this;
      if (!this.adapter.isSurfaceDisabled()) {
        var i = this.activationState;
        if (!i.isActivated) {
          var a = this.previousActivationEvent, o = a && n !== void 0 && a.type !== n.type;
          if (!o) {
            i.isActivated = !0, i.isProgrammatic = n === void 0, i.activationEvent = n, i.wasActivatedByPointer = i.isProgrammatic ? !1 : n !== void 0 && (n.type === "mousedown" || n.type === "touchstart" || n.type === "pointerdown");
            var l = n !== void 0 && Bi.length > 0 && Bi.some(function(s) {
              return r.adapter.containsEventTarget(s);
            });
            if (l) {
              this.resetActivationState();
              return;
            }
            n !== void 0 && (Bi.push(n.target), this.registerDeactivationHandlers(n)), i.wasElementMadeActive = this.checkElementMadeActive(n), i.wasElementMadeActive && this.animateActivation(), requestAnimationFrame(function() {
              Bi = [], !i.wasElementMadeActive && n !== void 0 && (n.key === " " || n.keyCode === 32) && (i.wasElementMadeActive = r.checkElementMadeActive(n), i.wasElementMadeActive && r.animateActivation()), i.wasElementMadeActive || (r.activationState = r.defaultActivationState());
            });
          }
        }
      }
    }, t.prototype.checkElementMadeActive = function(n) {
      return n !== void 0 && n.type === "keydown" ? this.adapter.isSurfaceActive() : !0;
    }, t.prototype.animateActivation = function() {
      var n = this, r = t.strings, i = r.VAR_FG_TRANSLATE_START, a = r.VAR_FG_TRANSLATE_END, o = t.cssClasses, l = o.FG_DEACTIVATION, s = o.FG_ACTIVATION, u = t.numbers.DEACTIVATION_TIMEOUT_MS;
      this.layoutInternal();
      var c = "", f = "";
      if (!this.adapter.isUnbounded()) {
        var v = this.getFgTranslationCoordinates(), h = v.startPoint, g = v.endPoint;
        c = h.x + "px, " + h.y + "px", f = g.x + "px, " + g.y + "px";
      }
      this.adapter.updateCssVariable(i, c), this.adapter.updateCssVariable(a, f), clearTimeout(this.activationTimer), clearTimeout(this.fgDeactivationRemovalTimer), this.rmBoundedActivationClasses(), this.adapter.removeClass(l), this.adapter.computeBoundingRect(), this.adapter.addClass(s), this.activationTimer = setTimeout(function() {
        n.activationTimerCallback();
      }, u);
    }, t.prototype.getFgTranslationCoordinates = function() {
      var n = this.activationState, r = n.activationEvent, i = n.wasActivatedByPointer, a;
      i ? a = Nh(r, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect()) : a = {
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
      var n = this, r = t.cssClasses.FG_DEACTIVATION, i = this.activationState, a = i.hasDeactivationUXRun, o = i.isActivated, l = a || !o;
      l && this.activationAnimationHasEnded && (this.rmBoundedActivationClasses(), this.adapter.addClass(r), this.fgDeactivationRemovalTimer = setTimeout(function() {
        n.adapter.removeClass(r);
      }, hs.FG_DEACTIVATION_MS));
    }, t.prototype.rmBoundedActivationClasses = function() {
      var n = t.cssClasses.FG_ACTIVATION;
      this.adapter.removeClass(n), this.activationAnimationHasEnded = !1, this.adapter.computeBoundingRect();
    }, t.prototype.resetActivationState = function() {
      var n = this;
      this.previousActivationEvent = this.activationState.activationEvent, this.activationState = this.defaultActivationState(), setTimeout(function() {
        return n.previousActivationEvent = void 0;
      }, t.numbers.TAP_DELAY_MS);
    }, t.prototype.deactivateImpl = function() {
      var n = this, r = this.activationState;
      if (r.isActivated) {
        var i = K({}, r);
        r.isProgrammatic ? (requestAnimationFrame(function() {
          n.animateDeactivation(i);
        }), this.resetActivationState()) : (this.deregisterDeactivationHandlers(), requestAnimationFrame(function() {
          n.activationState.hasDeactivationUXRun = !0, n.animateDeactivation(i), n.resetActivationState();
        }));
      }
    }, t.prototype.animateDeactivation = function(n) {
      var r = n.wasActivatedByPointer, i = n.wasElementMadeActive;
      (r || i) && this.runDeactivationUXLogicIfReady();
    }, t.prototype.layoutInternal = function() {
      var n = this;
      this.frame = this.adapter.computeBoundingRect();
      var r = Math.max(this.frame.height, this.frame.width), i = function() {
        var o = Math.sqrt(Math.pow(n.frame.width, 2) + Math.pow(n.frame.height, 2));
        return o + t.numbers.PADDING;
      };
      this.maxRadius = this.adapter.isUnbounded() ? r : i();
      var a = Math.floor(r * t.numbers.INITIAL_ORIGIN_SCALE);
      this.adapter.isUnbounded() && a % 2 !== 0 ? this.initialSize = a - 1 : this.initialSize = a, this.fgScale = "" + this.maxRadius / this.initialSize, this.updateLayoutCssVars();
    }, t.prototype.updateLayoutCssVars = function() {
      var n = t.strings, r = n.VAR_FG_SIZE, i = n.VAR_LEFT, a = n.VAR_TOP, o = n.VAR_FG_SCALE;
      this.adapter.updateCssVariable(r, this.initialSize + "px"), this.adapter.updateCssVariable(o, this.fgScale), this.adapter.isUnbounded() && (this.unboundedCoords = {
        left: Math.round(this.frame.width / 2 - this.initialSize / 2),
        top: Math.round(this.frame.height / 2 - this.initialSize / 2)
      }, this.adapter.updateCssVariable(i, this.unboundedCoords.left + "px"), this.adapter.updateCssVariable(a, this.unboundedCoords.top + "px"));
    }, t;
  }(gn)
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
var Ra = "mdc-dom-focus-sentinel", Wh = (
  /** @class */
  function() {
    function e(t, n) {
      n === void 0 && (n = {}), this.root = t, this.options = n, this.elFocusedBeforeTrapFocus = null;
    }
    return e.prototype.trapFocus = function() {
      var t = this.getFocusableElements(this.root);
      if (t.length === 0)
        throw new Error("FocusTrap: Element must have at least one focusable child.");
      this.elFocusedBeforeTrapFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null, this.wrapTabFocus(this.root), this.options.skipInitialFocus || this.focusInitialElement(t, this.options.initialFocusEl);
    }, e.prototype.releaseFocus = function() {
      [].slice.call(this.root.querySelectorAll("." + Ra)).forEach(function(t) {
        t.parentElement.removeChild(t);
      }), !this.options.skipRestoreFocus && this.elFocusedBeforeTrapFocus && this.elFocusedBeforeTrapFocus.focus();
    }, e.prototype.wrapTabFocus = function(t) {
      var n = this, r = this.createSentinel(), i = this.createSentinel();
      r.addEventListener("focus", function() {
        var a = n.getFocusableElements(t);
        a.length > 0 && a[a.length - 1].focus();
      }), i.addEventListener("focus", function() {
        var a = n.getFocusableElements(t);
        a.length > 0 && a[0].focus();
      }), t.insertBefore(r, t.children[0]), t.appendChild(i);
    }, e.prototype.focusInitialElement = function(t, n) {
      var r = 0;
      n && (r = Math.max(t.indexOf(n), 0)), t[r].focus();
    }, e.prototype.getFocusableElements = function(t) {
      var n = [].slice.call(t.querySelectorAll("[autofocus], [tabindex], a, input, textarea, select, button"));
      return n.filter(function(r) {
        var i = r.getAttribute("aria-disabled") === "true" || r.getAttribute("disabled") != null || r.getAttribute("hidden") != null || r.getAttribute("aria-hidden") === "true", a = r.tabIndex >= 0 && r.getBoundingClientRect().width > 0 && !r.classList.contains(Ra) && !i, o = !1;
        if (a) {
          var l = getComputedStyle(r);
          o = l.display === "none" || l.visibility === "hidden";
        }
        return a && !o;
      });
    }, e.prototype.createSentinel = function() {
      var t = document.createElement("div");
      return t.setAttribute("tabindex", "0"), t.setAttribute("aria-hidden", "true"), t.classList.add(Ra), t;
    }, e;
  }()
);
const Zh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  FocusTrap: Wh
}, Symbol.toStringTag, { value: "Module" })), { applyPassive: ps } = lu, { matches: Yh } = Ro;
function Rn(e, { ripple: t = !0, surface: n = !1, unbounded: r = !1, disabled: i = !1, color: a, active: o, rippleElement: l, eventTarget: s, activeTarget: u, addClass: c = (g) => e.classList.add(g), removeClass: f = (g) => e.classList.remove(g), addStyle: v = (g, p) => e.style.setProperty(g, p), initPromise: h = Promise.resolve() } = {}) {
  let g, p = new Kr(), E = pe("SMUI:addLayoutListener"), y, L = o, x = s, _ = u;
  function S() {
    n ? (c("mdc-ripple-surface"), a === "primary" ? (c("smui-ripple-surface--primary"), f("smui-ripple-surface--secondary")) : a === "secondary" ? (f("smui-ripple-surface--primary"), c("smui-ripple-surface--secondary")) : (f("smui-ripple-surface--primary"), f("smui-ripple-surface--secondary"))) : (f("mdc-ripple-surface"), f("smui-ripple-surface--primary"), f("smui-ripple-surface--secondary")), g && L !== o && (L = o, o ? g.activate() : o === !1 && g.deactivate()), t && !g ? (g = new Xh({
      addClass: c,
      browserSupportsCssVars: () => Fh(window),
      computeBoundingRect: () => (l || e).getBoundingClientRect(),
      containsEventTarget: (A) => e.contains(A),
      deregisterDocumentInteractionHandler: (A, w) => p.off(document.documentElement, A, w),
      deregisterInteractionHandler: (A, w) => p.off(s || e, A, w),
      deregisterResizeHandler: (A) => window.removeEventListener("resize", A),
      getWindowPageOffset: () => {
        var A, w;
        return {
          x: (A = window.pageXOffset) !== null && A !== void 0 ? A : window.scrollX,
          y: (w = window.pageYOffset) !== null && w !== void 0 ? w : window.scrollY
        };
      },
      isSurfaceActive: () => o ?? Yh(u || e, ":active"),
      isSurfaceDisabled: () => !!i,
      isUnbounded: () => !!r,
      registerDocumentInteractionHandler: (A, w) => {
        const R = ps();
        p.on(document.documentElement, A, w, typeof R == "boolean" ? { capture: R } : R);
      },
      registerInteractionHandler: (A, w) => {
        const R = ps();
        p.on(s || e, A, w, typeof R == "boolean" ? { capture: R } : R);
      },
      registerResizeHandler: (A) => p.on(window, "resize", A),
      removeClass: f,
      updateCssVariable: v
    }), h.then(() => {
      g && (g.init(), g.setUnbounded(r));
    })) : g && !t && h.then(() => {
      g && (g.destroy(), g = void 0, p.clear());
    }), g && (x !== s || _ !== u) && (x = s, _ = u, g.destroy(), requestAnimationFrame(() => {
      g && (g.init(), g.setUnbounded(r));
    })), !t && r && c("mdc-ripple-upgraded--unbounded");
  }
  S(), E && (y = E(b));
  function b() {
    g && g.layout();
  }
  return {
    update(A) {
      ({
        ripple: t,
        surface: n,
        unbounded: r,
        disabled: i,
        color: a,
        active: o,
        rippleElement: l,
        eventTarget: s,
        activeTarget: u,
        addClass: c,
        removeClass: f,
        addStyle: v,
        initPromise: h
      } = Object.assign({ ripple: !0, surface: !1, unbounded: !1, disabled: !1, color: void 0, active: void 0, rippleElement: void 0, eventTarget: void 0, activeTarget: void 0, addClass: (w) => e.classList.add(w), removeClass: (w) => e.classList.remove(w), addStyle: (w, R) => e.style.setProperty(w, R), initPromise: Promise.resolve() }, A)), S();
    },
    destroy() {
      g && (g.destroy(), g = void 0, p.clear(), f("mdc-ripple-surface"), f("smui-ripple-surface--primary"), f("smui-ripple-surface--secondary")), y && y();
    }
  };
}
function Qn(e, t) {
  Te(t, !0);
  let n = m(t, "use", 19, () => []), r = m(t, "class", 3, ""), i = m(t, "component", 3, Ai), a = m(t, "tag", 3, "span"), o = /* @__PURE__ */ Ve(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "component",
    "tag",
    "children"
  ]), l;
  const s = pe("SMUI:label:context"), u = pe("SMUI:label:tabindex");
  function c() {
    return l.getElement();
  }
  var f = { getElement: c }, v = W(), h = V(v);
  {
    let g = /* @__PURE__ */ me(() => je({
      "mdc-button__label": s === "button",
      "mdc-fab__label": s === "fab",
      "mdc-tab__text-label": s === "tab",
      "mdc-image-list__label": s === "image-list",
      "mdc-snackbar__label": s === "snackbar",
      "mdc-banner__text": s === "banner",
      "mdc-segmented-button__label": s === "segmented-button",
      "mdc-data-table__pagination-rows-per-page-label": s === "data-table:pagination",
      "mdc-data-table__header-cell-label": s === "data-table:sortable-header-cell",
      [r()]: !0
    }));
    Ei(h, i, (p, E) => {
      Ee(
        E(p, dt(
          {
            get tag() {
              return a();
            },
            get use() {
              return n();
            },
            get class() {
              return d(g);
            }
          },
          () => s === "snackbar" ? { "aria-atomic": "false" } : {},
          {
            get tabindex() {
              return u;
            }
          },
          () => o,
          {
            children: (y, L) => {
              var x = W(), _ = V(x);
              oe(_, () => t.children ?? Q), I(y, x);
            },
            $$slots: { default: !0 }
          }
        )),
        (y) => l = y,
        () => l
      );
    });
  }
  return I(e, v), Oe(f);
}
function Kh(e, t) {
  Te(t, !0);
  let n = m(t, "use", 19, () => []), r = m(t, "class", 3, ""), i = m(t, "on", 3, !1), a = m(t, "component", 3, Ai), o = m(t, "tag", 3, "i"), l = /* @__PURE__ */ Ve(t, [
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
  const u = /* @__PURE__ */ me(() => o() === "svg" || a() === $h), c = pe("SMUI:icon:context");
  function f() {
    return s.getElement();
  }
  var v = { getElement: f }, h = W(), g = V(h);
  {
    let p = /* @__PURE__ */ me(() => je({
      "mdc-button__icon": c === "button",
      "mdc-fab__icon": c === "fab",
      "mdc-icon-button__icon": c === "icon-button",
      "mdc-icon-button__icon--on": c === "icon-button" && i(),
      "mdc-tab__icon": c === "tab",
      "mdc-banner__icon": c === "banner",
      "mdc-segmented-button__icon": c === "segmented-button",
      [r()]: !0
    }));
    Ei(g, a, (E, y) => {
      Ee(
        y(E, dt(
          {
            get tag() {
              return o();
            },
            get use() {
              return n();
            },
            get class() {
              return d(p);
            },
            "aria-hidden": "true"
          },
          () => d(u) ? { focusable: "false", tabindex: "-1" } : {},
          () => l,
          {
            children: (L, x) => {
              var _ = W(), S = V(_);
              oe(S, () => t.children ?? Q), I(L, _);
            },
            $$slots: { default: !0 }
          }
        )),
        (L) => s = L,
        () => s
      );
    });
  }
  return I(e, h), Oe(v);
}
var Qh = /* @__PURE__ */ qt("<svg><!></svg>");
function Ai(e, t) {
  Te(t, !0);
  let n = m(t, "use", 19, () => []), r = m(t, "tag", 3, "div"), i = /* @__PURE__ */ Ve(t, ["$$slots", "$$events", "$$legacy", "use", "tag", "children"]);
  const a = /* @__PURE__ */ me(() => [
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
  function l() {
    return o;
  }
  var s = { getElement: l }, u = W(), c = V(u);
  {
    var f = (h) => {
      var g = Qh();
      Xe(g, () => ({ ...i }));
      var p = ce(g);
      oe(p, () => t.children ?? Q), Ee(g, (E) => o = E, () => o), ze(g, (E, y) => q == null ? void 0 : q(E, y), n), I(h, g);
    }, v = (h) => {
      var g = W(), p = V(g);
      {
        var E = (L) => {
          var x = W(), _ = V(x);
          Xo(_, r, !1, (S, b) => {
            Ee(S, (A) => o = A, () => o), ze(S, (A, w) => q == null ? void 0 : q(A, w), n), Xe(S, () => ({ ...i }));
          }), I(L, x);
        }, y = (L) => {
          var x = W(), _ = V(x);
          Xo(_, r, !1, (S, b) => {
            Ee(S, (R) => o = R, () => o), ze(S, (R, P) => q == null ? void 0 : q(R, P), n), Xe(S, () => ({ ...i }));
            var A = W(), w = V(A);
            oe(w, () => t.children ?? Q), I(b, A);
          }), I(L, x);
        };
        ae(
          p,
          (L) => {
            d(a) ? L(E) : L(y, !1);
          },
          !0
        );
      }
      I(h, g);
    };
    ae(c, (h) => {
      r() === "svg" ? h(f) : h(v, !1);
    });
  }
  return I(e, u), Oe(s);
}
var Jh = /* @__PURE__ */ qt("<svg><!></svg>");
function $h(e, t) {
  Te(t, !0), console && console.warn && console.warn('The @smui/common Svg component is deprecated. You can use `tag="svg"` now.');
  let n = m(t, "use", 19, () => []), r = /* @__PURE__ */ Ve(t, ["$$slots", "$$events", "$$legacy", "use", "children"]), i;
  function a() {
    return i;
  }
  var o = { getElement: a }, l = Jh();
  Xe(l, () => ({ ...r }));
  var s = ce(l);
  return oe(s, () => t.children ?? Q), Ee(l, (u) => i = u, () => i), ze(l, (u, c) => q == null ? void 0 : q(u, c), n), I(e, l), Oe(o);
}
function Ui(e, t) {
  Te(t, !0);
  const [n, r] = Xn(), i = Lt(t.value);
  se(t.key, i), Ue(() => {
    Bn(i, t.value);
  }), Wr(() => {
    i.set(void 0);
  });
  var a = W(), o = V(a);
  oe(o, () => t.children ?? Q), I(e, a), Oe(), r();
}
var ev = /* @__PURE__ */ J('<div class="mdc-button__touch"></div>'), tv = /* @__PURE__ */ J('<div class="mdc-button__ripple"></div> <!><!>', 1);
function nv(e, t) {
  Te(t, !0);
  let n = m(t, "use", 19, () => []), r = m(t, "class", 3, ""), i = m(t, "style", 3, ""), a = m(t, "ripple", 3, !0), o = m(t, "color", 3, "primary"), l = m(t, "variant", 3, "text"), s = m(t, "touch", 3, !1), u = m(t, "action", 3, "close"), c = m(t, "defaultAction", 3, !1), f = m(t, "secondary", 3, !1), v = m(t, "component", 3, Ai), h = m(t, "tag", 19, () => t.href == null ? "button" : "a"), g = /* @__PURE__ */ Ve(t, [
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
  ]), p, E = be({}), y = be({}), L = pe("SMUI:button:context");
  const x = /* @__PURE__ */ me(() => L === "dialog:action" && u() != null ? { "data-mdc-dialog-action": u() } : { action: u() }), _ = /* @__PURE__ */ me(() => L === "dialog:action" && c() ? { "data-mdc-dialog-button-default": "" } : {}), S = /* @__PURE__ */ me(() => L === "banner" ? {} : { secondary: f() });
  let b = t.disabled;
  Ue(() => {
    if (b !== t.disabled) {
      if (p) {
        const H = k();
        "blur" in H && H.blur();
      }
      b = g.disabled;
    }
  }), se("SMUI:label:context", "button"), se("SMUI:icon:context", "button");
  function A(H) {
    E[H] || (E[H] = !0);
  }
  function w(H) {
    (!(H in E) || E[H]) && (E[H] = !1);
  }
  function R(H, D) {
    y[H] != D && (D === "" || D == null ? delete y[H] : y[H] = D);
  }
  function P() {
    L === "banner" && nt(k(), f() ? "SMUIBannerButtonSecondaryActionClick" : "SMUIBannerButtonPrimaryActionClick");
  }
  function k() {
    return p.getElement();
  }
  var X = { getElement: k }, ee = W(), he = V(ee);
  {
    let H = /* @__PURE__ */ me(() => [
      [
        Rn,
        {
          ripple: a(),
          unbounded: !1,
          color: o(),
          disabled: !!t.disabled,
          addClass: A,
          removeClass: w,
          addStyle: R
        }
      ],
      ...n()
    ]), D = /* @__PURE__ */ me(() => je({
      "mdc-button": !0,
      "mdc-button--raised": l() === "raised",
      "mdc-button--unelevated": l() === "unelevated",
      "mdc-button--outlined": l() === "outlined",
      "smui-button--color-secondary": o() === "secondary",
      "mdc-button--touch": s(),
      "mdc-card__action": L === "card:action",
      "mdc-card__action--button": L === "card:action",
      "mdc-dialog__button": L === "dialog:action",
      "mdc-top-app-bar__navigation-icon": L === "top-app-bar:navigation",
      "mdc-top-app-bar__action-item": L === "top-app-bar:action",
      "mdc-snackbar__action": L === "snackbar:actions",
      "mdc-banner__secondary-action": L === "banner" && f(),
      "mdc-banner__primary-action": L === "banner" && !f(),
      "mdc-tooltip__action": L === "tooltip:rich-actions",
      ...E,
      [r()]: !0
    })), O = /* @__PURE__ */ me(() => Object.entries(y).map(([N, Y]) => `${N}: ${Y};`).concat([i()]).join(" "));
    Ei(he, v, (N, Y) => {
      Ee(
        Y(N, dt(
          {
            get tag() {
              return h();
            },
            get use() {
              return d(H);
            },
            get class() {
              return d(D);
            },
            get style() {
              return d(O);
            }
          },
          () => d(x),
          () => d(_),
          () => d(S),
          {
            get href() {
              return t.href;
            }
          },
          () => g,
          {
            onclick: (U) => {
              var C;
              P(), (C = t.onclick) == null || C.call(t, U);
            },
            children: (U, C) => {
              var j = tv(), ve = re(V(j), 2);
              oe(ve, () => t.children ?? Q);
              var de = re(ve);
              {
                var le = (Z) => {
                  var te = ev();
                  I(Z, te);
                };
                ae(de, (Z) => {
                  s() && Z(le);
                });
              }
              I(U, j);
            },
            $$slots: { default: !0 }
          }
        )),
        (U) => p = U,
        () => p
      );
    });
  }
  return I(e, ee), Oe(X);
}
function er(e, t) {
  Te(t, !0);
  let n = m(t, "callback", 3, () => {
  }), r = m(t, "disabled", 3, !1), i = m(t, "variant", 3, "default"), a = m(t, "isAbortAction", 3, !1), o = m(t, "backgroundColor", 3, void 0);
  {
    let l = /* @__PURE__ */ me(() => a() ? "background-color: #ff3e00;" : "background-color: " + o());
    nv(e, {
      onclick: () => n()(),
      get variant() {
        return i();
      },
      get disabled() {
        return r();
      },
      get style() {
        return d(l);
      },
      children: (s, u) => {
        var c = W(), f = V(c);
        oe(f, () => t.children ?? Q), I(s, c);
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
var Fi = {
  ICON_BUTTON_ON: "mdc-icon-button--on",
  ROOT: "mdc-icon-button"
}, mn = {
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
var rv = (
  /** @class */
  function(e) {
    vt(t, e);
    function t(n) {
      var r = e.call(this, K(K({}, t.defaultAdapter), n)) || this;
      return r.hasToggledAriaLabel = !1, r;
    }
    return Object.defineProperty(t, "cssClasses", {
      get: function() {
        return Fi;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t, "strings", {
      get: function() {
        return mn;
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
      var n = this.adapter.getAttr(mn.DATA_ARIA_LABEL_ON), r = this.adapter.getAttr(mn.DATA_ARIA_LABEL_OFF);
      if (n && r) {
        if (this.adapter.getAttr(mn.ARIA_PRESSED) !== null)
          throw new Error("MDCIconButtonToggleFoundation: Button should not set `aria-pressed` if it has a toggled aria label.");
        this.hasToggledAriaLabel = !0;
      } else
        this.adapter.setAttr(mn.ARIA_PRESSED, String(this.isOn()));
    }, t.prototype.handleClick = function() {
      this.toggle(), this.adapter.notifyChange({ isOn: this.isOn() });
    }, t.prototype.isOn = function() {
      return this.adapter.hasClass(Fi.ICON_BUTTON_ON);
    }, t.prototype.toggle = function(n) {
      if (n === void 0 && (n = !this.isOn()), n ? this.adapter.addClass(Fi.ICON_BUTTON_ON) : this.adapter.removeClass(Fi.ICON_BUTTON_ON), this.hasToggledAriaLabel) {
        var r = n ? this.adapter.getAttr(mn.DATA_ARIA_LABEL_ON) : this.adapter.getAttr(mn.DATA_ARIA_LABEL_OFF);
        this.adapter.setAttr(mn.ARIA_LABEL, r || "");
      } else
        this.adapter.setAttr(mn.ARIA_PRESSED, "" + n);
    }, t;
  }(gn)
), iv = /* @__PURE__ */ J('<div class="mdc-icon-button__touch"></div>'), av = /* @__PURE__ */ J('<div class="mdc-icon-button__ripple"></div> <!><!>', 1);
function ov(e, t) {
  Te(t, !0);
  let n = () => {
  };
  function r(C) {
    return C === n;
  }
  let i = m(t, "use", 19, () => []), a = m(t, "class", 3, ""), o = m(t, "style", 3, ""), l = m(t, "ripple", 3, !0), s = m(t, "toggle", 3, !1), u = m(t, "pressed", 15, n), c = m(t, "touch", 3, !1), f = m(t, "displayFlex", 3, !0), v = m(t, "size", 3, "normal"), h = m(t, "component", 3, Ai), g = m(t, "tag", 19, () => t.href == null ? "button" : "a"), p = /* @__PURE__ */ Ve(t, [
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
  ]), E, y, L = /* @__PURE__ */ De(be({})), x = be({}), _ = /* @__PURE__ */ De(be({})), S = pe("SMUI:icon-button:context"), b = pe("SMUI:icon-button:aria-describedby");
  const A = /* @__PURE__ */ me(() => {
    if (S === "data-table:pagination")
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
    else return S === "dialog:header" || S === "dialog:sheet" ? { "data-mdc-dialog-action": t.action } : { action: t.action };
  });
  let w = !!t.disabled;
  Ue(() => {
    if (w != !!t.disabled) {
      if (E) {
        const C = O();
        "blur" in C && C.blur();
      }
      w = !!t.disabled;
    }
  }), se("SMUI:icon:context", "icon-button");
  let R = null;
  Ue(() => {
    E && O() && s() !== R && (s() && !y ? (y = new rv({
      addClass: k,
      hasClass: P,
      notifyChange: (C) => {
        D(C), nt(O(), "SMUIIconButtonToggleChange", C);
      },
      removeClass: X,
      getAttr: he,
      setAttr: H
    }), y.init()) : !s() && y && (y.destroy(), y = void 0, $(L, {}, !0), $(_, {}, !0)), R = s());
  }), Ue(() => {
    y && !r(u()) && y.isOn() !== u() && y.toggle(u());
  }), Wr(() => {
    y && y.destroy();
  });
  function P(C) {
    return C in d(L) ? d(L)[C] : O().classList.contains(C);
  }
  function k(C) {
    d(L)[C] || (d(L)[C] = !0);
  }
  function X(C) {
    (!(C in d(L)) || d(L)[C]) && (d(L)[C] = !1);
  }
  function ee(C, j) {
    x[C] != j && (j === "" || j == null ? delete x[C] : x[C] = j);
  }
  function he(C) {
    return C in d(_) ? d(_)[C] ?? null : O().getAttribute(C);
  }
  function H(C, j) {
    d(_)[C] !== j && (d(_)[C] = j);
  }
  function D(C) {
    u(C.isOn);
  }
  function O() {
    return E.getElement();
  }
  var N = { getElement: O }, Y = W(), U = V(Y);
  {
    let C = /* @__PURE__ */ me(() => [
      [
        Rn,
        {
          ripple: l(),
          unbounded: !0,
          color: t.color,
          disabled: !!t.disabled,
          addClass: k,
          removeClass: X,
          addStyle: ee
        }
      ],
      ...i()
    ]), j = /* @__PURE__ */ me(() => je({
      "mdc-icon-button": !0,
      "mdc-icon-button--on": !r(u()) && u(),
      "mdc-icon-button--touch": c(),
      "mdc-icon-button--display-flex": f(),
      "smui-icon-button--size-button": v() === "button",
      "smui-icon-button--size-mini": v() === "mini",
      "mdc-icon-button--reduced-size": v() === "mini" || v() === "button",
      "mdc-card__action": S === "card:action",
      "mdc-card__action--icon": S === "card:action",
      "mdc-top-app-bar__navigation-icon": S === "top-app-bar:navigation",
      "mdc-top-app-bar__action-item": S === "top-app-bar:action",
      "mdc-snackbar__dismiss": S === "snackbar:actions",
      "mdc-data-table__pagination-button": S === "data-table:pagination",
      "mdc-data-table__sort-icon-button": S === "data-table:sortable-header-cell",
      "mdc-dialog__close": (S === "dialog:header" || S === "dialog:sheet") && t.action === "close",
      ...d(L),
      [a()]: !0
    })), ve = /* @__PURE__ */ me(() => Object.entries(x).map(([Z, te]) => `${Z}: ${te};`).concat([o()]).join(" ")), de = /* @__PURE__ */ me(() => r(u()) ? null : u() ? "true" : "false"), le = /* @__PURE__ */ me(() => u() ? t.ariaLabelOn : t.ariaLabelOff);
    Ei(U, h, (Z, te) => {
      Ee(
        te(Z, dt(
          {
            get tag() {
              return g();
            },
            get use() {
              return d(C);
            },
            get class() {
              return d(j);
            },
            get style() {
              return d(ve);
            },
            get "aria-pressed"() {
              return d(de);
            },
            get "aria-label"() {
              return d(le);
            },
            get "data-aria-label-on"() {
              return t.ariaLabelOn;
            },
            get "data-aria-label-off"() {
              return t.ariaLabelOff;
            },
            get "aria-describedby"() {
              return b;
            },
            get href() {
              return t.href;
            }
          },
          () => d(A),
          () => d(_),
          () => p,
          {
            onclick: (ue) => {
              var _e;
              y && y.handleClick(), S === "top-app-bar:navigation" && nt(O(), "SMUITopAppBarIconButtonNav"), (_e = t.onclick) == null || _e.call(t, ue);
            },
            children: (ue, _e) => {
              var Pe = av(), ne = re(V(Pe), 2);
              oe(ne, () => t.children ?? Q);
              var xe = re(ne);
              {
                var we = (ge) => {
                  var Ie = iv();
                  I(ge, Ie);
                };
                ae(xe, (ge) => {
                  c() && ge(we);
                });
              }
              I(ue, Pe);
            },
            $$slots: { default: !0 }
          }
        )),
        (ue) => E = ue,
        () => E
      );
    });
  }
  return I(e, Y), Oe(N);
}
function sv(e, t) {
  let n = m(t, "callback", 3, () => {
  }), r = m(t, "icon", 3, ""), i = m(t, "disabled", 3, !1);
  ov(e, {
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
      Kh(a, {
        class: "material-icons",
        children: (l, s) => {
          var u = Et();
          Se(() => tt(u, r())), I(l, u);
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
var lv = {
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
var uv = (
  /** @class */
  function(e) {
    vt(t, e);
    function t(n) {
      var r = e.call(this, K(K({}, t.defaultAdapter), n)) || this;
      return r.shakeAnimationEndHandler = function() {
        r.handleShakeAnimationEnd();
      }, r;
    }
    return Object.defineProperty(t, "cssClasses", {
      get: function() {
        return lv;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t, "defaultAdapter", {
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
    }), t.prototype.init = function() {
      this.adapter.registerInteractionHandler("animationend", this.shakeAnimationEndHandler);
    }, t.prototype.destroy = function() {
      this.adapter.deregisterInteractionHandler("animationend", this.shakeAnimationEndHandler);
    }, t.prototype.getWidth = function() {
      return this.adapter.getWidth();
    }, t.prototype.shake = function(n) {
      var r = t.cssClasses.LABEL_SHAKE;
      n ? this.adapter.addClass(r) : this.adapter.removeClass(r);
    }, t.prototype.float = function(n) {
      var r = t.cssClasses, i = r.LABEL_FLOAT_ABOVE, a = r.LABEL_SHAKE;
      n ? this.adapter.addClass(i) : (this.adapter.removeClass(i), this.adapter.removeClass(a));
    }, t.prototype.setRequired = function(n) {
      var r = t.cssClasses.LABEL_REQUIRED;
      n ? this.adapter.addClass(r) : this.adapter.removeClass(r);
    }, t.prototype.handleShakeAnimationEnd = function() {
      var n = t.cssClasses.LABEL_SHAKE;
      this.adapter.removeClass(n);
    }, t;
  }(gn)
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
var Jn = {
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
var cv = (
  /** @class */
  function(e) {
    vt(t, e);
    function t(n) {
      var r = e.call(this, K(K({}, t.defaultAdapter), n)) || this;
      return r.transitionEndHandler = function(i) {
        r.handleTransitionEnd(i);
      }, r;
    }
    return Object.defineProperty(t, "cssClasses", {
      get: function() {
        return Jn;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t, "defaultAdapter", {
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
    }), t.prototype.init = function() {
      this.adapter.registerEventHandler("transitionend", this.transitionEndHandler);
    }, t.prototype.destroy = function() {
      this.adapter.deregisterEventHandler("transitionend", this.transitionEndHandler);
    }, t.prototype.activate = function() {
      this.adapter.removeClass(Jn.LINE_RIPPLE_DEACTIVATING), this.adapter.addClass(Jn.LINE_RIPPLE_ACTIVE);
    }, t.prototype.setRippleCenter = function(n) {
      this.adapter.setStyle("transform-origin", n + "px center");
    }, t.prototype.deactivate = function() {
      this.adapter.addClass(Jn.LINE_RIPPLE_DEACTIVATING);
    }, t.prototype.handleTransitionEnd = function(n) {
      var r = this.adapter.hasClass(Jn.LINE_RIPPLE_DEACTIVATING);
      n.propertyName === "opacity" && r && (this.adapter.removeClass(Jn.LINE_RIPPLE_ACTIVE), this.adapter.removeClass(Jn.LINE_RIPPLE_DEACTIVATING));
    }, t;
  }(gn)
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
var dv = {
  NOTCH_ELEMENT_SELECTOR: ".mdc-notched-outline__notch"
}, ms = {
  // This should stay in sync with $mdc-notched-outline-padding * 2.
  NOTCH_ELEMENT_PADDING: 8
}, fv = {
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
var hv = (
  /** @class */
  function(e) {
    vt(t, e);
    function t(n) {
      return e.call(this, K(K({}, t.defaultAdapter), n)) || this;
    }
    return Object.defineProperty(t, "strings", {
      get: function() {
        return dv;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t, "cssClasses", {
      get: function() {
        return fv;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t, "numbers", {
      get: function() {
        return ms;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t, "defaultAdapter", {
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
    }), t.prototype.notch = function(n) {
      var r = t.cssClasses.OUTLINE_NOTCHED;
      n > 0 && (n += ms.NOTCH_ELEMENT_PADDING), this.adapter.setNotchWidthProperty(n), this.adapter.addClass(r);
    }, t.prototype.closeNotch = function() {
      var n = t.cssClasses.OUTLINE_NOTCHED;
      this.adapter.removeClass(n), this.adapter.removeNotchWidthProperty();
    }, t;
  }(gn)
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
var Ha = {
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
}, vv = {
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
}, bs = {
  LABEL_SCALE: 0.75
}, gv = [
  "pattern",
  "min",
  "max",
  "required",
  "step",
  "minlength",
  "maxlength"
], pv = [
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
var _s = ["mousedown", "touchstart"], ys = ["click", "keydown"], mv = (
  /** @class */
  function(e) {
    vt(t, e);
    function t(n, r) {
      r === void 0 && (r = {});
      var i = e.call(this, K(K({}, t.defaultAdapter), n)) || this;
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
    return Object.defineProperty(t, "cssClasses", {
      get: function() {
        return vv;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t, "strings", {
      get: function() {
        return Ha;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t, "numbers", {
      get: function() {
        return bs;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t.prototype, "shouldAlwaysFloat", {
      get: function() {
        var n = this.getNativeInput().type;
        return pv.indexOf(n) >= 0;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t.prototype, "shouldFloat", {
      get: function() {
        return this.shouldAlwaysFloat || this.isFocused || !!this.getValue() || this.isBadInput();
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t.prototype, "shouldShake", {
      get: function() {
        return !this.isFocused && !this.isValid() && !!this.getValue();
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t, "defaultAdapter", {
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
    }), t.prototype.init = function() {
      var n, r, i, a;
      this.adapter.hasLabel() && this.getNativeInput().required && this.adapter.setLabelRequired(!0), this.adapter.isFocused() ? this.inputFocusHandler() : this.adapter.hasLabel() && this.shouldFloat && (this.notchOutline(!0), this.adapter.floatLabel(!0), this.styleFloating(!0)), this.adapter.registerInputInteractionHandler("focus", this.inputFocusHandler), this.adapter.registerInputInteractionHandler("blur", this.inputBlurHandler), this.adapter.registerInputInteractionHandler("input", this.inputInputHandler);
      try {
        for (var o = Ct(_s), l = o.next(); !l.done; l = o.next()) {
          var s = l.value;
          this.adapter.registerInputInteractionHandler(s, this.setPointerXOffset);
        }
      } catch (f) {
        n = { error: f };
      } finally {
        try {
          l && !l.done && (r = o.return) && r.call(o);
        } finally {
          if (n) throw n.error;
        }
      }
      try {
        for (var u = Ct(ys), c = u.next(); !c.done; c = u.next()) {
          var s = c.value;
          this.adapter.registerTextFieldInteractionHandler(s, this.textFieldInteractionHandler);
        }
      } catch (f) {
        i = { error: f };
      } finally {
        try {
          c && !c.done && (a = u.return) && a.call(u);
        } finally {
          if (i) throw i.error;
        }
      }
      this.validationObserver = this.adapter.registerValidationAttributeChangeHandler(this.validationAttributeChangeHandler), this.setcharacterCounter(this.getValue().length);
    }, t.prototype.destroy = function() {
      var n, r, i, a;
      this.adapter.deregisterInputInteractionHandler("focus", this.inputFocusHandler), this.adapter.deregisterInputInteractionHandler("blur", this.inputBlurHandler), this.adapter.deregisterInputInteractionHandler("input", this.inputInputHandler);
      try {
        for (var o = Ct(_s), l = o.next(); !l.done; l = o.next()) {
          var s = l.value;
          this.adapter.deregisterInputInteractionHandler(s, this.setPointerXOffset);
        }
      } catch (f) {
        n = { error: f };
      } finally {
        try {
          l && !l.done && (r = o.return) && r.call(o);
        } finally {
          if (n) throw n.error;
        }
      }
      try {
        for (var u = Ct(ys), c = u.next(); !c.done; c = u.next()) {
          var s = c.value;
          this.adapter.deregisterTextFieldInteractionHandler(s, this.textFieldInteractionHandler);
        }
      } catch (f) {
        i = { error: f };
      } finally {
        try {
          c && !c.done && (a = u.return) && a.call(u);
        } finally {
          if (i) throw i.error;
        }
      }
      this.adapter.deregisterValidationAttributeChangeHandler(this.validationObserver);
    }, t.prototype.handleTextFieldInteraction = function() {
      var n = this.adapter.getNativeInput();
      n && n.disabled || (this.receivedUserInput = !0);
    }, t.prototype.handleValidationAttributeChange = function(n) {
      var r = this;
      n.some(function(i) {
        return gv.indexOf(i) > -1 ? (r.styleValidity(!0), r.adapter.setLabelRequired(r.getNativeInput().required), !0) : !1;
      }), n.indexOf("maxlength") > -1 && this.setcharacterCounter(this.getValue().length);
    }, t.prototype.notchOutline = function(n) {
      if (!(!this.adapter.hasOutline() || !this.adapter.hasLabel()))
        if (n) {
          var r = this.adapter.getLabelWidth() * bs.LABEL_SCALE;
          this.adapter.notchOutline(r);
        } else
          this.adapter.closeOutline();
    }, t.prototype.activateFocus = function() {
      this.isFocused = !0, this.styleFocused(this.isFocused), this.adapter.activateLineRipple(), this.adapter.hasLabel() && (this.notchOutline(this.shouldFloat), this.adapter.floatLabel(this.shouldFloat), this.styleFloating(this.shouldFloat), this.adapter.shakeLabel(this.shouldShake)), this.helperText && (this.helperText.isPersistent() || !this.helperText.isValidation() || !this.valid) && this.helperText.showToScreenReader();
    }, t.prototype.setTransformOrigin = function(n) {
      if (!(this.isDisabled() || this.adapter.hasOutline())) {
        var r = n.touches, i = r ? r[0] : n, a = i.target.getBoundingClientRect(), o = i.clientX - a.left;
        this.adapter.setLineRippleTransformOrigin(o);
      }
    }, t.prototype.handleInput = function() {
      this.autoCompleteFocus(), this.setcharacterCounter(this.getValue().length);
    }, t.prototype.autoCompleteFocus = function() {
      this.receivedUserInput || this.activateFocus();
    }, t.prototype.deactivateFocus = function() {
      this.isFocused = !1, this.adapter.deactivateLineRipple();
      var n = this.isValid();
      this.styleValidity(n), this.styleFocused(this.isFocused), this.adapter.hasLabel() && (this.notchOutline(this.shouldFloat), this.adapter.floatLabel(this.shouldFloat), this.styleFloating(this.shouldFloat), this.adapter.shakeLabel(this.shouldShake)), this.shouldFloat || (this.receivedUserInput = !1);
    }, t.prototype.getValue = function() {
      return this.getNativeInput().value;
    }, t.prototype.setValue = function(n) {
      if (this.getValue() !== n && (this.getNativeInput().value = n), this.setcharacterCounter(n.length), this.validateOnValueChange) {
        var r = this.isValid();
        this.styleValidity(r);
      }
      this.adapter.hasLabel() && (this.notchOutline(this.shouldFloat), this.adapter.floatLabel(this.shouldFloat), this.styleFloating(this.shouldFloat), this.validateOnValueChange && this.adapter.shakeLabel(this.shouldShake));
    }, t.prototype.isValid = function() {
      return this.useNativeValidation ? this.isNativeInputValid() : this.valid;
    }, t.prototype.setValid = function(n) {
      this.valid = n, this.styleValidity(n);
      var r = !n && !this.isFocused && !!this.getValue();
      this.adapter.hasLabel() && this.adapter.shakeLabel(r);
    }, t.prototype.setValidateOnValueChange = function(n) {
      this.validateOnValueChange = n;
    }, t.prototype.getValidateOnValueChange = function() {
      return this.validateOnValueChange;
    }, t.prototype.setUseNativeValidation = function(n) {
      this.useNativeValidation = n;
    }, t.prototype.isDisabled = function() {
      return this.getNativeInput().disabled;
    }, t.prototype.setDisabled = function(n) {
      this.getNativeInput().disabled = n, this.styleDisabled(n);
    }, t.prototype.setHelperTextContent = function(n) {
      this.helperText && this.helperText.setContent(n);
    }, t.prototype.setLeadingIconAriaLabel = function(n) {
      this.leadingIcon && this.leadingIcon.setAriaLabel(n);
    }, t.prototype.setLeadingIconContent = function(n) {
      this.leadingIcon && this.leadingIcon.setContent(n);
    }, t.prototype.setTrailingIconAriaLabel = function(n) {
      this.trailingIcon && this.trailingIcon.setAriaLabel(n);
    }, t.prototype.setTrailingIconContent = function(n) {
      this.trailingIcon && this.trailingIcon.setContent(n);
    }, t.prototype.setcharacterCounter = function(n) {
      if (this.characterCounter) {
        var r = this.getNativeInput().maxLength;
        if (r === -1)
          throw new Error("MDCTextFieldFoundation: Expected maxlength html property on text input or textarea.");
        this.characterCounter.setCounterValue(n, r);
      }
    }, t.prototype.isBadInput = function() {
      return this.getNativeInput().validity.badInput || !1;
    }, t.prototype.isNativeInputValid = function() {
      return this.getNativeInput().validity.valid;
    }, t.prototype.styleValidity = function(n) {
      var r = t.cssClasses.INVALID;
      if (n ? this.adapter.removeClass(r) : this.adapter.addClass(r), this.helperText) {
        this.helperText.setValidity(n);
        var i = this.helperText.isValidation();
        if (!i)
          return;
        var a = this.helperText.isVisible(), o = this.helperText.getId();
        a && o ? this.adapter.setInputAttr(Ha.ARIA_DESCRIBEDBY, o) : this.adapter.removeInputAttr(Ha.ARIA_DESCRIBEDBY);
      }
    }, t.prototype.styleFocused = function(n) {
      var r = t.cssClasses.FOCUSED;
      n ? this.adapter.addClass(r) : this.adapter.removeClass(r);
    }, t.prototype.styleDisabled = function(n) {
      var r = t.cssClasses, i = r.DISABLED, a = r.INVALID;
      n ? (this.adapter.addClass(i), this.adapter.removeClass(a)) : this.adapter.removeClass(i), this.leadingIcon && this.leadingIcon.setDisabled(n), this.trailingIcon && this.trailingIcon.setDisabled(n);
    }, t.prototype.styleFloating = function(n) {
      var r = t.cssClasses.LABEL_FLOATING;
      n ? this.adapter.addClass(r) : this.adapter.removeClass(r);
    }, t.prototype.getNativeInput = function() {
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
    }, t;
  }(gn)
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
var Es = {
  ICON_EVENT: "MDCTextField:icon",
  ICON_ROLE: "button"
}, bv = {
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
var Ss = ["click", "keydown"], _v = (
  /** @class */
  function(e) {
    vt(t, e);
    function t(n) {
      var r = e.call(this, K(K({}, t.defaultAdapter), n)) || this;
      return r.savedTabIndex = null, r.interactionHandler = function(i) {
        r.handleInteraction(i);
      }, r;
    }
    return Object.defineProperty(t, "strings", {
      get: function() {
        return Es;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t, "cssClasses", {
      get: function() {
        return bv;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t, "defaultAdapter", {
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
    }), t.prototype.init = function() {
      var n, r;
      this.savedTabIndex = this.adapter.getAttr("tabindex");
      try {
        for (var i = Ct(Ss), a = i.next(); !a.done; a = i.next()) {
          var o = a.value;
          this.adapter.registerInteractionHandler(o, this.interactionHandler);
        }
      } catch (l) {
        n = { error: l };
      } finally {
        try {
          a && !a.done && (r = i.return) && r.call(i);
        } finally {
          if (n) throw n.error;
        }
      }
    }, t.prototype.destroy = function() {
      var n, r;
      try {
        for (var i = Ct(Ss), a = i.next(); !a.done; a = i.next()) {
          var o = a.value;
          this.adapter.deregisterInteractionHandler(o, this.interactionHandler);
        }
      } catch (l) {
        n = { error: l };
      } finally {
        try {
          a && !a.done && (r = i.return) && r.call(i);
        } finally {
          if (n) throw n.error;
        }
      }
    }, t.prototype.setDisabled = function(n) {
      this.savedTabIndex && (n ? (this.adapter.setAttr("tabindex", "-1"), this.adapter.removeAttr("role")) : (this.adapter.setAttr("tabindex", this.savedTabIndex), this.adapter.setAttr("role", Es.ICON_ROLE)));
    }, t.prototype.setAriaLabel = function(n) {
      this.adapter.setAttr("aria-label", n);
    }, t.prototype.setContent = function(n) {
      this.adapter.setContent(n);
    }, t.prototype.handleInteraction = function(n) {
      var r = n.key === "Enter" || n.keyCode === 13;
      (n.type === "click" || r) && (n.preventDefault(), this.adapter.notifyIconAction());
    }, t;
  }(gn)
), yv = /* @__PURE__ */ J("<span><!></span>"), Ev = /* @__PURE__ */ J("<label><!></label>");
function Cs(e, t) {
  Te(t, !0);
  let n = m(t, "use", 19, () => []), r = m(t, "class", 3, ""), i = m(t, "style", 3, ""), a = m(t, "floatAbove", 15, !1), o = m(t, "required", 15, !1), l = m(t, "wrapped", 3, !1), s = /* @__PURE__ */ Ve(t, [
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
  ]), u, c = /* @__PURE__ */ De(void 0), f = new Kr(), v = be({}), h = be({}), g = pe("SMUI:generic:input:props") ?? {}, p = a();
  Ue(() => {
    d(c) && p !== a() && (p = a(), d(c).float(a()));
  });
  let E = o();
  Ue(() => {
    d(c) && E !== o() && (E = o(), d(c).setRequired(o()));
  });
  const y = pe("SMUI:floating-label:mount"), L = pe("SMUI:floating-label:unmount");
  ht(() => {
    $(
      c,
      new uv({
        addClass: x,
        removeClass: _,
        getWidth: () => {
          var C, j;
          const N = k(), Y = N.cloneNode(!0);
          (C = N.parentNode) == null || C.appendChild(Y), Y.classList.add("smui-floating-label--remove-transition"), Y.classList.add("smui-floating-label--force-size"), Y.classList.remove("mdc-floating-label--float-above");
          const U = Y.scrollWidth;
          return (j = N.parentNode) == null || j.removeChild(Y), U;
        },
        registerInteractionHandler: (N, Y) => f.on(k(), N, Y),
        deregisterInteractionHandler: (N, Y) => f.off(k(), N, Y)
      }),
      !0
    );
    const O = {
      get element() {
        return k();
      },
      addStyle: S,
      removeStyle: b
    };
    return y && y(O), d(c).init(), () => {
      var N;
      L && L(O), (N = d(c)) == null || N.destroy(), f.clear();
    };
  });
  function x(O) {
    v[O] || (v[O] = !0);
  }
  function _(O) {
    (!(O in v) || v[O]) && (v[O] = !1);
  }
  function S(O, N) {
    h[O] != N && (N === "" || N == null ? delete h[O] : h[O] = N);
  }
  function b(O) {
    O in h && delete h[O];
  }
  function A(O) {
    var N;
    (N = d(c)) == null || N.shake(O);
  }
  function w(O) {
    a(O);
  }
  function R(O) {
    o(O);
  }
  function P() {
    if (d(c) == null)
      throw new Error("Instance is undefined.");
    return d(c).getWidth();
  }
  function k() {
    return u;
  }
  var X = { shake: A, float: w, setRequired: R, getWidth: P, getElement: k }, ee = W(), he = V(ee);
  {
    var H = (O) => {
      var N = yv();
      Xe(N, (U, C) => ({ class: U, style: C, ...s }), [
        () => je({
          "mdc-floating-label": !0,
          "mdc-floating-label--float-above": a(),
          "mdc-floating-label--required": o(),
          ...v,
          [r()]: !0
        }),
        () => Object.entries(h).map(([U, C]) => `${U}: ${C};`).concat([i()]).join(" ")
      ]);
      var Y = ce(N);
      oe(Y, () => t.children ?? Q), Ee(N, (U) => u = U, () => u), ze(N, (U, C) => q == null ? void 0 : q(U, C), n), I(O, N);
    }, D = (O) => {
      var N = Ev();
      Xe(
        N,
        (U, C) => ({
          class: U,
          style: C,
          for: t.for || (g ? g.id : void 0),
          ...s
        }),
        [
          () => je({
            "mdc-floating-label": !0,
            "mdc-floating-label--float-above": a(),
            "mdc-floating-label--required": o(),
            ...v,
            [r()]: !0
          }),
          () => Object.entries(h).map(([U, C]) => `${U}: ${C};`).concat([i()]).join(" ")
        ]
      );
      var Y = ce(N);
      oe(Y, () => t.children ?? Q), Ee(N, (U) => u = U, () => u), ze(N, (U, C) => q == null ? void 0 : q(U, C), n), I(O, N);
    };
    ae(he, (O) => {
      l() ? O(H) : O(D, !1);
    });
  }
  return I(e, ee), Oe(X);
}
var Sv = /* @__PURE__ */ J("<div></div>");
function Cv(e, t) {
  Te(t, !0);
  let n = m(t, "use", 19, () => []), r = m(t, "class", 3, ""), i = m(t, "style", 3, ""), a = m(t, "active", 3, !1), o = /* @__PURE__ */ Ve(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "style",
    "active"
  ]), l, s = /* @__PURE__ */ De(void 0), u = new Kr(), c = be({}), f = be({});
  ht(() => ($(
    s,
    new cv({
      addClass: h,
      removeClass: g,
      hasClass: v,
      setStyle: p,
      registerEventHandler: (b, A) => u.on(x(), b, A),
      deregisterEventHandler: (b, A) => u.off(x(), b, A)
    }),
    !0
  ), d(s).init(), () => {
    var b;
    (b = d(s)) == null || b.destroy(), u.clear();
  }));
  function v(b) {
    return b in c ? c[b] : x().classList.contains(b);
  }
  function h(b) {
    c[b] || (c[b] = !0);
  }
  function g(b) {
    (!(b in c) || c[b]) && (c[b] = !1);
  }
  function p(b, A) {
    f[b] != A && (A === "" || A == null ? delete f[b] : f[b] = A);
  }
  function E() {
    var b;
    (b = d(s)) == null || b.activate();
  }
  function y() {
    var b;
    (b = d(s)) == null || b.deactivate();
  }
  function L(b) {
    var A;
    (A = d(s)) == null || A.setRippleCenter(b);
  }
  function x() {
    return l;
  }
  var _ = { activate: E, deactivate: y, setRippleCenter: L, getElement: x }, S = Sv();
  return Xe(S, (b, A) => ({ class: b, style: A, ...o }), [
    () => je({
      "mdc-line-ripple": !0,
      "mdc-line-ripple--active": a(),
      ...c,
      [r()]: !0
    }),
    () => Object.entries(f).map(([b, A]) => `${b}: ${A};`).concat([i()]).join(" ")
  ]), Ee(S, (b) => l = b, () => l), ze(S, (b, A) => q == null ? void 0 : q(b, A), n), I(e, S), Oe(_);
}
var Av = /* @__PURE__ */ J('<div class="mdc-notched-outline__notch"><!></div>'), Iv = /* @__PURE__ */ J('<div><div class="mdc-notched-outline__leading"></div> <!> <div class="mdc-notched-outline__trailing"></div></div>');
function xv(e, t) {
  Te(t, !0);
  let n = m(t, "use", 19, () => []), r = m(t, "class", 3, ""), i = m(t, "notched", 3, !1), a = m(t, "noLabel", 3, !1), o = /* @__PURE__ */ Ve(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "notched",
    "noLabel",
    "children"
  ]), l, s = /* @__PURE__ */ De(void 0), u = /* @__PURE__ */ De(void 0), c = be({}), f = be({}), v;
  Ue(() => {
    d(u) !== v && (d(u) ? (d(u).addStyle("transition-duration", "0s"), h("mdc-notched-outline--upgraded"), requestAnimationFrame(() => {
      d(u) && d(u).removeStyle("transition-duration");
    })) : g("mdc-notched-outline--upgraded"), v = d(u));
  }), se("SMUI:floating-label:mount", (w) => {
    $(u, w, !0);
  }), se("SMUI:floating-label:unmount", () => {
    $(u, void 0);
  }), ht(() => ($(
    s,
    new hv({
      addClass: h,
      removeClass: g,
      setNotchWidthProperty: (w) => p("width", w + "px"),
      removeNotchWidthProperty: () => E("width")
    }),
    !0
  ), d(s).init(), () => {
    var w;
    (w = d(s)) == null || w.destroy();
  }));
  function h(w) {
    c[w] || (c[w] = !0);
  }
  function g(w) {
    (!(w in c) || c[w]) && (c[w] = !1);
  }
  function p(w, R) {
    f[w] != R && (R === "" || R == null ? delete f[w] : f[w] = R);
  }
  function E(w) {
    w in f && delete f[w];
  }
  function y(w) {
    var R;
    (R = d(s)) == null || R.notch(w);
  }
  function L() {
    var w;
    (w = d(s)) == null || w.closeNotch();
  }
  function x() {
    return l;
  }
  var _ = { notch: y, closeNotch: L, getElement: x }, S = Iv();
  Xe(S, (w) => ({ class: w, ...o }), [
    () => je({
      "mdc-notched-outline": !0,
      "mdc-notched-outline--notched": i(),
      "mdc-notched-outline--no-label": a(),
      ...c,
      [r()]: !0
    })
  ]);
  var b = re(ce(S), 2);
  {
    var A = (w) => {
      var R = Av(), P = ce(R);
      oe(P, () => t.children ?? Q), Se((k) => Rt(R, k), [
        () => Object.entries(f).map(([k, X]) => `${k}: ${X};`).join(" ")
      ]), I(w, R);
    };
    ae(b, (w) => {
      a() || w(A);
    });
  }
  return Ee(S, (w) => l = w, () => l), ze(S, (w, R) => q == null ? void 0 : q(w, R), n), I(e, S), Oe(_);
}
function Ii(e, t) {
  Te(t, !0);
  let n = m(t, "use", 19, () => []), r = m(t, "class", 3, ""), i = m(t, "component", 3, Ai), a = m(t, "tag", 3, "div"), o = m(t, "_smuiClass", 3, ""), l = m(t, "_smuiClassMap", 23, () => ({})), s = m(t, "_smuiContexts", 19, () => ({})), u = m(t, "_smuiProps", 19, () => ({})), c = /* @__PURE__ */ Ve(t, [
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
  ]), f;
  const v = [];
  Object.entries(l()).forEach(([y, L]) => {
    const x = pe(L);
    x && "subscribe" in x && v.push(x.subscribe((_) => {
      l()[y] = _;
    }));
  });
  for (let y in s())
    s().hasOwnProperty(y) && se(y, s()[y]);
  Wr(() => {
    for (const y of v)
      y();
  });
  function h() {
    return f.getElement();
  }
  var g = { getElement: h }, p = W(), E = V(p);
  {
    let y = /* @__PURE__ */ me(() => je({
      [o()]: !0,
      ...l(),
      [r()]: !0
    }));
    Ei(E, i, (L, x) => {
      Ee(
        x(L, dt(
          {
            get tag() {
              return a();
            },
            get use() {
              return n();
            },
            get class() {
              return d(y);
            }
          },
          u,
          () => c,
          {
            children: (_, S) => {
              var b = W(), A = V(b);
              oe(A, () => t.children ?? Q), I(_, b);
            },
            $$slots: { default: !0 }
          }
        )),
        (_) => f = _,
        () => f
      );
    });
  }
  return I(e, p), Oe(g);
}
function wv(e, t) {
  Te(t, !0);
  let n = /* @__PURE__ */ Ve(t, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return Ee(
    Ii(e, dt({ _smuiClass: "mdc-text-field-helper-line", tag: "div" }, () => n, {
      children: (o, l) => {
        var s = W(), u = V(s);
        oe(u, () => t.children ?? Q), I(o, s);
      },
      $$slots: { default: !0 }
    })),
    (o) => r = o,
    () => r
  ), Oe(a);
}
function Lv(e, t) {
  Te(t, !0);
  let n = /* @__PURE__ */ Ve(t, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return Ee(
    Ii(e, dt(
      {
        _smuiClass: "mdc-text-field__affix mdc-text-field__affix--prefix",
        tag: "span"
      },
      () => n,
      {
        children: (o, l) => {
          var s = W(), u = V(s);
          oe(u, () => t.children ?? Q), I(o, s);
        },
        $$slots: { default: !0 }
      }
    )),
    (o) => r = o,
    () => r
  ), Oe(a);
}
function Tv(e, t) {
  Te(t, !0);
  let n = /* @__PURE__ */ Ve(t, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return Ee(
    Ii(e, dt(
      {
        _smuiClass: "mdc-text-field__affix mdc-text-field__affix--suffix",
        tag: "span"
      },
      () => n,
      {
        children: (o, l) => {
          var s = W(), u = V(s);
          oe(u, () => t.children ?? Q), I(o, s);
        },
        $$slots: { default: !0 }
      }
    )),
    (o) => r = o,
    () => r
  ), Oe(a);
}
var Ov = /* @__PURE__ */ J("<input/>");
function Rv(e, t) {
  Te(t, !0);
  let n = m(t, "use", 19, () => []), r = m(t, "class", 3, ""), i = m(t, "type", 3, "text"), a = m(t, "placeholder", 3, " "), o = m(t, "value", 15), l = m(t, "files", 15, null), s = m(t, "dirty", 15, !1), u = m(t, "invalid", 15, !1), c = m(t, "updateInvalid", 3, !0), f = m(t, "initialInvalid", 3, !1), v = m(t, "emptyValueNull", 19, () => o() === null), h = m(t, "emptyValueUndefined", 19, () => o() === void 0), g = /* @__PURE__ */ Ve(t, [
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
  ]), p, E = be({}), y = be({});
  Ue(() => {
    i() === "file" ? delete y.value : y.value = o() == null ? "" : o();
  }), ht(() => {
    c() && f() && u(P().matches(":invalid"));
  });
  function L(H) {
    return H === "" ? Number.NaN : +H;
  }
  function x(H) {
    if (i() === "file") {
      l(H.currentTarget.files);
      return;
    }
    if (H.currentTarget.value === "" && v()) {
      o(null);
      return;
    }
    if (H.currentTarget.value === "" && h()) {
      o(void 0);
      return;
    }
    switch (i()) {
      case "number":
      case "range":
        o(L(H.currentTarget.value));
        break;
      default:
        o(H.currentTarget.value);
        break;
    }
  }
  function _(H) {
    (i() === "file" || i() === "range") && x(H), s(!0), c() && u(P().matches(":invalid"));
  }
  function S(H) {
    return H in E ? E[H] ?? null : P().getAttribute(H);
  }
  function b(H, D) {
    E[H] !== D && (E[H] = D);
  }
  function A(H) {
    (!(H in E) || E[H] != null) && (E[H] = void 0);
  }
  function w() {
    P().focus();
  }
  function R() {
    P().blur();
  }
  function P() {
    return p;
  }
  var k = { getAttr: S, addAttr: b, removeAttr: A, focus: w, blur: R, getElement: P }, X = Ov(), ee = (H) => {
    var D;
    i() !== "file" && x(H), (D = t.oninput) == null || D.call(t, H);
  }, he = (H) => {
    var D;
    _(H), (D = t.onchange) == null || D.call(t, H);
  };
  return Xe(
    X,
    (H) => ({
      class: H,
      type: i(),
      placeholder: a(),
      ...y,
      ...E,
      ...g,
      oninput: ee,
      onchange: he
    }),
    [
      () => je({ "mdc-text-field__input": !0, [r()]: !0 })
    ],
    void 0,
    void 0,
    !0
  ), Ee(X, (H) => p = H, () => p), ze(X, (H, D) => q == null ? void 0 : q(H, D), n), I(e, X), Oe(k);
}
var Hv = /* @__PURE__ */ J("<textarea></textarea>");
function Dv(e, t) {
  Te(t, !0);
  let n = m(t, "use", 19, () => []), r = m(t, "class", 3, ""), i = m(t, "style", 3, ""), a = m(t, "value", 15, ""), o = m(t, "dirty", 15, !1), l = m(t, "invalid", 15, !1), s = m(t, "updateInvalid", 3, !0), u = m(t, "initialInvalid", 3, !1), c = m(t, "resizable", 3, !0), f = /* @__PURE__ */ Ve(t, [
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
  ]), v, h = be({});
  ht(() => {
    s() && u() && l(_().matches(":invalid"));
  });
  function g() {
    o(!0), s() && l(_().matches(":invalid"));
  }
  function p(w) {
    return w in h ? h[w] ?? null : _().getAttribute(w);
  }
  function E(w, R) {
    h[w] !== R && (h[w] = R);
  }
  function y(w) {
    (!(w in h) || h[w] != null) && (h[w] = void 0);
  }
  function L() {
    _().focus();
  }
  function x() {
    _().blur();
  }
  function _() {
    return v;
  }
  var S = { getAttr: p, addAttr: E, removeAttr: y, focus: L, blur: x, getElement: _ }, b = Hv(), A = (w) => {
    var R;
    g(), (R = t.onchange) == null || R.call(t, w);
  };
  return Xe(
    b,
    (w) => ({
      class: w,
      style: `${c() ? "" : "resize: none; "}${i()}`,
      ...h,
      ...f,
      onchange: A
    }),
    [
      () => je({ "mdc-text-field__input": !0, [r()]: !0 })
    ]
  ), Ee(b, (w) => v = w, () => v), ze(b, (w, R) => q == null ? void 0 : q(w, R), n), yi(() => Ka(b, a)), I(e, b), Oe(S);
}
var Pv = /* @__PURE__ */ J('<span class="mdc-text-field__ripple"></span>'), Mv = /* @__PURE__ */ J("<!> <!>", 1), Bv = /* @__PURE__ */ J("<span><!> <!></span>"), Uv = /* @__PURE__ */ J("<!> <!> <!>", 1), Fv = /* @__PURE__ */ J("<label><!> <!> <!> <!> <!> <!> <!></label>"), Nv = /* @__PURE__ */ J("<div><!> <!> <!> <!> <!></div>"), kv = /* @__PURE__ */ J("<!> <!>", 1);
function As(e, t) {
  Te(t, !0);
  const { applyPassive: n } = lu;
  let r = () => {
  };
  function i(B) {
    return B === r;
  }
  let a = m(t, "use", 19, () => []), o = m(t, "class", 3, ""), l = m(t, "style", 3, ""), s = m(t, "ripple", 3, !0), u = m(t, "disabled", 3, !1), c = m(t, "required", 3, !1), f = m(t, "textarea", 3, !1), v = m(t, "variant", 19, () => f() ? "outlined" : "standard"), h = m(t, "noLabel", 3, !1), g = m(t, "type", 3, "text"), p = m(t, "value", 15), E = m(t, "files", 15, r), y = m(t, "invalid", 15, r), L = m(t, "updateInvalid", 19, () => i(y())), x = m(t, "initialInvalid", 3, !1), _ = m(t, "dirty", 15, !1), S = m(t, "validateOnValueChange", 19, L), b = m(t, "useNativeValidation", 19, L), A = m(t, "withLeadingIcon", 3, r), w = m(t, "withTrailingIcon", 3, r), R = m(t, "input", 7), P = m(t, "floatingLabel", 7), k = m(t, "lineRipple", 7), X = m(t, "notchedOutline", 7), ee = /* @__PURE__ */ Ve(t, [
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
  const he = p() !== void 0 || p() === void 0 && t.input$emptyValueUndefined || !i(E());
  i(E()) && E(null), i(y()) && y(!1);
  let H, D = /* @__PURE__ */ De(void 0), O = new Kr(), N = be({}), Y = be({}), U = /* @__PURE__ */ De(void 0), C = /* @__PURE__ */ De(!1), j = /* @__PURE__ */ De(be(x())), ve = pe("SMUI:addLayoutListener"), de, le, Z = new Promise((B) => le = B), te, ue, _e, Pe;
  const ne = /* @__PURE__ */ me(() => R() && R().getElement());
  Ue(() => {
    (_() || d(j) || !L()) && d(D) && d(D).isValid() !== !y() && (L() ? y(!d(D).isValid()) : d(D).setValid(!y()));
  }), Ue(() => {
    d(D) && d(D).getValidateOnValueChange() !== S() && d(D).setValidateOnValueChange(i(S()) ? !1 : S());
  }), Ue(() => {
    d(D) && d(D).setUseNativeValidation(i(b()) ? !0 : b());
  }), Ue(() => {
    d(D) && d(D).setDisabled(u());
  });
  let xe = p();
  Ue(() => {
    if (d(D) && he && xe !== p()) {
      xe = p();
      const B = `${p() == null ? "" : p()}`;
      d(D).getValue() !== B && d(D).setValue(B);
    }
  }), ve && (de = ve(T)), se("SMUI:textfield:leading-icon:mount", (B) => {
    te = B;
  }), se("SMUI:textfield:leading-icon:unmount", () => {
    te = void 0;
  }), se("SMUI:textfield:trailing-icon:mount", (B) => {
    ue = B;
  }), se("SMUI:textfield:trailing-icon:unmount", () => {
    ue = void 0;
  }), se("SMUI:textfield:helper-text:id", (B) => {
    $(U, B, !0);
  }), se("SMUI:textfield:helper-text:mount", (B) => {
    _e = B;
  }), se("SMUI:textfield:helper-text:unmount", () => {
    $(U, void 0), _e = void 0;
  }), se("SMUI:textfield:character-counter:mount", (B) => {
    Pe = B;
  }), se("SMUI:textfield:character-counter:unmount", () => {
    Pe = void 0;
  }), ht(() => {
    var B;
    if ($(
      D,
      new mv(
        {
          // getRootAdapterMethods_
          addClass: ge,
          removeClass: Ie,
          hasClass: we,
          registerTextFieldInteractionHandler: (z, We) => O.on(M(), z, We),
          deregisterTextFieldInteractionHandler: (z, We) => O.off(M(), z, We),
          registerValidationAttributeChangeHandler: (z) => {
            const We = (gt) => gt.map((pt) => pt.attributeName).filter((pt) => pt), at = new MutationObserver((gt) => {
              b() && z(We(gt));
            }), ot = { attributes: !0 };
            return R() && at.observe(R().getElement(), ot), at;
          },
          deregisterValidationAttributeChangeHandler: (z) => {
            z.disconnect();
          },
          // getInputAdapterMethods_
          getNativeInput: () => {
            var z;
            return ((z = R()) == null ? void 0 : z.getElement()) ?? null;
          },
          setInputAttr: (z, We) => {
            var at;
            (at = R()) == null || at.addAttr(z, We);
          },
          removeInputAttr: (z) => {
            var We;
            (We = R()) == null || We.removeAttr(z);
          },
          isFocused: () => {
            var z;
            return document.activeElement === ((z = R()) == null ? void 0 : z.getElement());
          },
          registerInputInteractionHandler: (z, We) => {
            var ot;
            const at = (ot = R()) == null ? void 0 : ot.getElement();
            if (at) {
              const gt = n();
              O.on(at, z, We, typeof gt == "boolean" ? { capture: gt } : gt);
            }
          },
          deregisterInputInteractionHandler: (z, We) => {
            var ot;
            const at = (ot = R()) == null ? void 0 : ot.getElement();
            at && O.off(at, z, We);
          },
          // getLabelAdapterMethods_
          floatLabel: (z) => P() && P().float(z),
          getLabelWidth: () => P() ? P().getWidth() : 0,
          hasLabel: () => !!P(),
          shakeLabel: (z) => P() && P().shake(z),
          setLabelRequired: (z) => P() && P().setRequired(z),
          // getLineRippleAdapterMethods_
          activateLineRipple: () => k() && k().activate(),
          deactivateLineRipple: () => k() && k().deactivate(),
          setLineRippleTransformOrigin: (z) => k() && k().setRippleCenter(z),
          // getOutlineAdapterMethods_
          closeOutline: () => X() && X().closeNotch(),
          hasOutline: () => !!X(),
          notchOutline: (z) => X() && X().notch(z)
        },
        {
          get helperText() {
            return _e;
          },
          get characterCounter() {
            return Pe;
          },
          get leadingIcon() {
            return te;
          },
          get trailingIcon() {
            return ue;
          }
        }
      ),
      !0
    ), he) {
      if (R() == null)
        throw new Error("SMUI Textfield must be initialized with either a non-undefined initial value or an Input component.");
      (B = d(D)) == null || B.init();
    } else
      Cl().then(() => {
        var z;
        if (R() == null)
          throw new Error("SMUI Textfield must be initialized with either a non-undefined initial value or an Input component.");
        (z = d(D)) == null || z.init();
      });
    return le(), () => {
      var z;
      (z = d(D)) == null || z.destroy(), O.clear();
    };
  }), Wr(() => {
    de && de();
  });
  function we(B) {
    return B in N ? N[B] ?? null : M().classList.contains(B);
  }
  function ge(B) {
    N[B] || (N[B] = !0);
  }
  function Ie(B) {
    (!(B in N) || N[B]) && (N[B] = !1);
  }
  function ye(B, z) {
    Y[B] != z && (z === "" || z == null ? delete Y[B] : Y[B] = z);
  }
  function Fe() {
    var B;
    (B = R()) == null || B.focus();
  }
  function Mt() {
    var B;
    (B = R()) == null || B.blur();
  }
  function T() {
    if (d(D)) {
      const B = d(D).shouldFloat;
      d(D).notchOutline(B);
    }
  }
  function M() {
    return H;
  }
  var ie = { focus: Fe, blur: Mt, layout: T, getElement: M }, Ye = kv(), Qt = V(Ye);
  {
    var Bt = (B) => {
      var z = Fv();
      Xe(z, (Re, Ze, Ge) => ({ class: Re, style: Ze, for: void 0, ...Ge }), [
        () => je({
          "mdc-text-field": !0,
          "mdc-text-field--disabled": u(),
          "mdc-text-field--textarea": f(),
          "mdc-text-field--filled": v() === "filled",
          "mdc-text-field--outlined": v() === "outlined",
          "smui-text-field--standard": v() === "standard" && !f(),
          "mdc-text-field--no-label": h() || t.label == null,
          "mdc-text-field--label-floating": d(C) || p() != null && p() !== "",
          "mdc-text-field--with-leading-icon": i(A()) ? t.leadingIcon : A(),
          "mdc-text-field--with-trailing-icon": i(w()) ? t.trailingIcon : w(),
          "mdc-text-field--with-internal-counter": f() && t.internalCounter,
          "mdc-text-field--invalid": y(),
          ...N,
          [o()]: !0
        }),
        () => Object.entries(Y).map(([Re, Ze]) => `${Re}: ${Ze};`).concat([l()]).join(" "),
        () => ea(ee, ["input$", "label$", "ripple$", "outline$", "helperLine$"])
      ]);
      var We = ce(z);
      {
        var at = (Re) => {
          var Ze = Mv(), Ge = V(Ze);
          {
            var bt = (it) => {
              var et = Pv();
              I(it, et);
            };
            ae(Ge, (it) => {
              v() === "filled" && it(bt);
            });
          }
          var Jt = re(Ge, 2);
          {
            var $e = (it) => {
              {
                let et = /* @__PURE__ */ me(() => d(C) || p() != null && p() !== "" && (typeof p() != "number" || !isNaN(p()))), Be = /* @__PURE__ */ me(() => tn(ee, "label$"));
                Ee(
                  Cs(it, dt(
                    {
                      get floatAbove() {
                        return d(et);
                      },
                      get required() {
                        return c();
                      },
                      wrapped: !0
                    },
                    () => d(Be),
                    {
                      children: (lt, Ln) => {
                        var zt = W(), Qe = V(zt);
                        {
                          var Ht = (Nt) => {
                          }, pn = (Nt) => {
                            var Li = W(), Yn = V(Li);
                            {
                              var Ti = (Tn) => {
                                var Kn = Et();
                                Se(() => tt(Kn, t.label)), I(Tn, Kn);
                              }, ba = (Tn) => {
                                var Kn = W(), On = V(Kn);
                                oe(On, () => t.label), I(Tn, Kn);
                              };
                              ae(
                                Yn,
                                (Tn) => {
                                  typeof t.label == "string" ? Tn(Ti) : Tn(ba, !1);
                                },
                                !0
                              );
                            }
                            I(Nt, Li);
                          };
                          ae(Qe, (Nt) => {
                            t.label == null ? Nt(Ht) : Nt(pn, !1);
                          });
                        }
                        I(lt, zt);
                      },
                      $$slots: { default: !0 }
                    }
                  )),
                  (lt) => P(lt),
                  () => P()
                );
              }
            };
            ae(Jt, (it) => {
              !h() && t.label != null && it($e);
            });
          }
          I(Re, Ze);
        };
        ae(We, (Re) => {
          !f() && v() !== "outlined" && Re(at);
        });
      }
      var ot = re(We, 2);
      {
        var gt = (Re) => {
          {
            let Ze = /* @__PURE__ */ me(() => h() || t.label == null), Ge = /* @__PURE__ */ me(() => tn(ee, "outline$"));
            Ee(
              xv(Re, dt(
                {
                  get noLabel() {
                    return d(Ze);
                  }
                },
                () => d(Ge),
                {
                  children: (bt, Jt) => {
                    var $e = W(), it = V($e);
                    {
                      var et = (Be) => {
                        {
                          let lt = /* @__PURE__ */ me(() => d(C) || p() != null && p() !== "" && (typeof p() != "number" || !isNaN(p()))), Ln = /* @__PURE__ */ me(() => tn(ee, "label$"));
                          Ee(
                            Cs(Be, dt(
                              {
                                get floatAbove() {
                                  return d(lt);
                                },
                                get required() {
                                  return c();
                                },
                                wrapped: !0
                              },
                              () => d(Ln),
                              {
                                children: (zt, Qe) => {
                                  var Ht = W(), pn = V(Ht);
                                  {
                                    var Nt = (Yn) => {
                                    }, Li = (Yn) => {
                                      var Ti = W(), ba = V(Ti);
                                      {
                                        var Tn = (On) => {
                                          var Jr = Et();
                                          Se(() => tt(Jr, t.label)), I(On, Jr);
                                        }, Kn = (On) => {
                                          var Jr = W(), Du = V(Jr);
                                          oe(Du, () => t.label), I(On, Jr);
                                        };
                                        ae(
                                          ba,
                                          (On) => {
                                            typeof t.label == "string" ? On(Tn) : On(Kn, !1);
                                          },
                                          !0
                                        );
                                      }
                                      I(Yn, Ti);
                                    };
                                    ae(pn, (Yn) => {
                                      t.label == null ? Yn(Nt) : Yn(Li, !1);
                                    });
                                  }
                                  I(zt, Ht);
                                },
                                $$slots: { default: !0 }
                              }
                            )),
                            (zt) => P(zt),
                            () => P()
                          );
                        }
                      };
                      ae(it, (Be) => {
                        !h() && t.label != null && Be(et);
                      });
                    }
                    I(bt, $e);
                  },
                  $$slots: { default: !0 }
                }
              )),
              (bt) => X(bt),
              () => X()
            );
          }
        };
        ae(ot, (Re) => {
          (f() || v() === "outlined") && Re(gt);
        });
      }
      var pt = re(ot, 2);
      Ui(pt, {
        key: "SMUI:textfield:icon:leading",
        value: !0,
        children: (Re, Ze) => {
          var Ge = W(), bt = V(Ge);
          oe(bt, () => t.leadingIcon ?? Q), I(Re, Ge);
        },
        $$slots: { default: !0 }
      });
      var Zn = re(pt, 2);
      oe(Zn, () => t.children ?? Q);
      var Je = re(Zn, 2);
      {
        var mt = (Re) => {
          var Ze = Bv(), Ge = ce(Ze);
          {
            let Jt = /* @__PURE__ */ me(() => tn(ee, "input$"));
            Ee(
              Dv(Ge, dt(
                {
                  get disabled() {
                    return u();
                  },
                  get required() {
                    return c();
                  },
                  get updateInvalid() {
                    return L();
                  },
                  get initialInvalid() {
                    return d(j);
                  },
                  get "aria-controls"() {
                    return d(U);
                  },
                  get "aria-describedby"() {
                    return d(U);
                  }
                },
                () => d(Jt),
                {
                  onblur: ($e) => {
                    var it;
                    $(C, !1), $(j, !0), nt(M(), "blur", $e), (it = t.input$onblur) == null || it.call(t, $e);
                  },
                  onfocus: ($e) => {
                    var it;
                    $(C, !0), nt(M(), "focus", $e), (it = t.input$onfocus) == null || it.call(t, $e);
                  },
                  get value() {
                    return p();
                  },
                  set value($e) {
                    p($e);
                  },
                  get dirty() {
                    return _();
                  },
                  set dirty($e) {
                    _($e);
                  },
                  get invalid() {
                    return y();
                  },
                  set invalid($e) {
                    y($e);
                  }
                }
              )),
              ($e) => R($e),
              () => R()
            );
          }
          var bt = re(Ge, 2);
          oe(bt, () => t.internalCounter ?? Q), Se((Jt) => Rl(Ze, 1, Jt), [
            () => Ol(je({
              "mdc-text-field__resizer": !("input$resizable" in ee) || t.input$resizable
            }))
          ]), I(Re, Ze);
        }, Ut = (Re) => {
          var Ze = Uv(), Ge = V(Ze);
          {
            var bt = (et) => {
              var Be = W(), lt = V(Be);
              {
                var Ln = (Qe) => {
                  Lv(Qe, {
                    children: (Ht, pn) => {
                      var Nt = Et();
                      Se(() => tt(Nt, t.prefix)), I(Ht, Nt);
                    },
                    $$slots: { default: !0 }
                  });
                }, zt = (Qe) => {
                  var Ht = W(), pn = V(Ht);
                  oe(pn, () => t.prefix ?? Q), I(Qe, Ht);
                };
                ae(lt, (Qe) => {
                  typeof t.prefix == "string" ? Qe(Ln) : Qe(zt, !1);
                });
              }
              I(et, Be);
            };
            ae(Ge, (et) => {
              t.prefix != null && et(bt);
            });
          }
          var Jt = re(Ge, 2);
          {
            let et = /* @__PURE__ */ me(() => tn(ee, "input$"));
            Ee(
              Rv(Jt, dt(
                {
                  get type() {
                    return g();
                  },
                  get disabled() {
                    return u();
                  },
                  get required() {
                    return c();
                  },
                  get updateInvalid() {
                    return L();
                  },
                  get initialInvalid() {
                    return d(j);
                  },
                  get "aria-controls"() {
                    return d(U);
                  },
                  get "aria-describedby"() {
                    return d(U);
                  }
                },
                () => h() && t.label != null && typeof t.label == "string" ? { placeholder: t.label } : {},
                () => d(et),
                {
                  onblur: (Be) => {
                    var lt;
                    $(C, !1), $(j, !0), nt(M(), "blur", Be), (lt = t.input$onblur) == null || lt.call(t, Be);
                  },
                  onfocus: (Be) => {
                    var lt;
                    $(C, !0), nt(M(), "focus", Be), (lt = t.input$onfocus) == null || lt.call(t, Be);
                  },
                  get value() {
                    return p();
                  },
                  set value(Be) {
                    p(Be);
                  },
                  get files() {
                    return E();
                  },
                  set files(Be) {
                    E(Be);
                  },
                  get dirty() {
                    return _();
                  },
                  set dirty(Be) {
                    _(Be);
                  },
                  get invalid() {
                    return y();
                  },
                  set invalid(Be) {
                    y(Be);
                  }
                }
              )),
              (Be) => R(Be),
              () => R()
            );
          }
          var $e = re(Jt, 2);
          {
            var it = (et) => {
              var Be = W(), lt = V(Be);
              {
                var Ln = (Qe) => {
                  Tv(Qe, {
                    children: (Ht, pn) => {
                      var Nt = Et();
                      Se(() => tt(Nt, t.suffix)), I(Ht, Nt);
                    },
                    $$slots: { default: !0 }
                  });
                }, zt = (Qe) => {
                  var Ht = W(), pn = V(Ht);
                  oe(pn, () => t.suffix ?? Q), I(Qe, Ht);
                };
                ae(lt, (Qe) => {
                  typeof t.suffix == "string" ? Qe(Ln) : Qe(zt, !1);
                });
              }
              I(et, Be);
            };
            ae($e, (et) => {
              t.suffix != null && et(it);
            });
          }
          I(Re, Ze);
        };
        ae(Je, (Re) => {
          f() && typeof p() == "string" ? Re(mt) : Re(Ut, !1);
        });
      }
      var Ft = re(Je, 2);
      Ui(Ft, {
        key: "SMUI:textfield:icon:leading",
        value: !1,
        children: (Re, Ze) => {
          var Ge = W(), bt = V(Ge);
          oe(bt, () => t.trailingIcon ?? Q), I(Re, Ge);
        },
        $$slots: { default: !0 }
      });
      var wi = re(Ft, 2);
      {
        var ma = (Re) => {
          {
            let Ze = /* @__PURE__ */ me(() => tn(ee, "ripple$"));
            Ee(Cv(Re, dt(() => d(Ze))), (Ge) => k(Ge), () => k());
          }
        };
        ae(wi, (Re) => {
          !f() && v() !== "outlined" && s() && Re(ma);
        });
      }
      Ee(z, (Re) => H = Re, () => H), ze(z, (Re, Ze) => Rn == null ? void 0 : Rn(Re, Ze), () => ({
        ripple: !f() && v() === "filled",
        unbounded: !1,
        addClass: ge,
        removeClass: Ie,
        addStyle: ye,
        eventTarget: d(ne),
        activeTarget: d(ne),
        initPromise: Z
      })), ze(z, (Re, Ze) => q == null ? void 0 : q(Re, Ze), a), I(B, z);
    }, wn = (B) => {
      var z = Nv();
      Xe(z, (Je, mt, Ut) => ({ class: Je, style: mt, ...Ut }), [
        () => je({
          "mdc-text-field": !0,
          "mdc-text-field--disabled": u(),
          "mdc-text-field--textarea": f(),
          "mdc-text-field--filled": v() === "filled",
          "mdc-text-field--outlined": v() === "outlined",
          "smui-text-field--standard": v() === "standard" && !f(),
          "mdc-text-field--no-label": h() || t.label == null,
          "mdc-text-field--with-leading-icon": t.leadingIcon,
          "mdc-text-field--with-trailing-icon": t.trailingIcon,
          "mdc-text-field--invalid": y(),
          ...N,
          [o()]: !0
        }),
        () => Object.entries(Y).map(([Je, mt]) => `${Je}: ${mt};`).concat([l()]).join(" "),
        () => ea(ee, ["input$", "label$", "ripple$", "outline$", "helperLine$"])
      ]);
      var We = ce(z);
      {
        var at = (Je) => {
          var mt = W(), Ut = V(mt);
          oe(Ut, () => t.label ?? Q), I(Je, mt);
        };
        ae(We, (Je) => {
          typeof t.label != "string" && Je(at);
        });
      }
      var ot = re(We, 2);
      Ui(ot, {
        key: "SMUI:textfield:icon:leading",
        value: !0,
        children: (Je, mt) => {
          var Ut = W(), Ft = V(Ut);
          oe(Ft, () => t.leadingIcon ?? Q), I(Je, Ut);
        },
        $$slots: { default: !0 }
      });
      var gt = re(ot, 2);
      oe(gt, () => t.children ?? Q);
      var pt = re(gt, 2);
      Ui(pt, {
        key: "SMUI:textfield:icon:leading",
        value: !1,
        children: (Je, mt) => {
          var Ut = W(), Ft = V(Ut);
          oe(Ft, () => t.trailingIcon ?? Q), I(Je, Ut);
        },
        $$slots: { default: !0 }
      });
      var Zn = re(pt, 2);
      oe(Zn, () => t.line ?? Q), Ee(z, (Je) => H = Je, () => H), ze(z, (Je, mt) => Rn == null ? void 0 : Rn(Je, mt), () => ({
        ripple: s(),
        unbounded: !1,
        addClass: ge,
        removeClass: Ie,
        addStyle: ye
      })), ze(z, (Je, mt) => q == null ? void 0 : q(Je, mt), a), I(B, z);
    };
    ae(Qt, (B) => {
      he ? B(Bt) : B(wn, !1);
    });
  }
  var Qr = re(Qt, 2);
  {
    var G = (B) => {
      {
        let z = /* @__PURE__ */ me(() => tn(ee, "helperLine$"));
        wv(B, dt(() => d(z), {
          children: (We, at) => {
            var ot = W(), gt = V(ot);
            oe(gt, () => t.helper ?? Q), I(We, ot);
          },
          $$slots: { default: !0 }
        }));
      }
    };
    ae(Qr, (B) => {
      t.helper && B(G);
    });
  }
  return I(e, Ye), Oe(ie);
}
var Gv = /* @__PURE__ */ J("<i><!></i>");
function jv(e, t) {
  Te(t, !0);
  const n = () => Cn(g, "$leadingStore", r), [r, i] = Xn();
  let a = m(t, "use", 19, () => []), o = m(t, "class", 3, ""), l = m(t, "tabindex", 19, () => t.role === "button" ? 0 : -1), s = m(t, "disabled", 3, !1), u = /* @__PURE__ */ Ve(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "role",
    "tabindex",
    "disabled",
    "children"
  ]), c, f = /* @__PURE__ */ De(void 0), v = new Kr(), h = be({});
  const g = pe("SMUI:textfield:icon:leading"), p = n();
  let E = /* @__PURE__ */ De(void 0);
  const y = /* @__PURE__ */ me(() => ({ role: t.role, tabindex: l() })), L = pe("SMUI:textfield:leading-icon:mount"), x = pe("SMUI:textfield:leading-icon:unmount"), _ = pe("SMUI:textfield:trailing-icon:mount"), S = pe("SMUI:textfield:trailing-icon:unmount");
  ht(() => ($(
    f,
    new _v({
      getAttr: b,
      setAttr: A,
      removeAttr: w,
      setContent: (D) => {
        $(E, D, !0);
      },
      registerInteractionHandler: (D, O) => v.on(R(), D, O),
      deregisterInteractionHandler: (D, O) => v.off(R(), D, O),
      notifyIconAction: () => nt(R(), "SMUITextFieldIcon")
    }),
    !0
  ), p ? L && L(d(f)) : _ && _(d(f)), d(f).init(), () => {
    var D;
    d(f) && (p ? x && x(d(f)) : S && S(d(f))), (D = d(f)) == null || D.destroy(), v.clear();
  }));
  function b(D) {
    return D in h ? h[D] ?? null : R().getAttribute(D);
  }
  function A(D, O) {
    h[D] !== O && (h[D] = O);
  }
  function w(D) {
    (!(D in h) || h[D] != null) && (h[D] = void 0);
  }
  function R() {
    return c;
  }
  var P = { getElement: R }, k = Gv();
  Xe(
    k,
    (D) => ({
      class: D,
      "aria-hidden": l() === -1 ? "true" : "false",
      "aria-disabled": t.role === "button" ? s() ? "true" : "false" : void 0,
      ...d(y),
      ...h,
      ...u
    }),
    [
      () => je({
        "mdc-text-field__icon": !0,
        "mdc-text-field__icon--leading": p,
        "mdc-text-field__icon--trailing": !p,
        [o()]: !0
      })
    ]
  );
  var X = ce(k);
  {
    var ee = (D) => {
      var O = W(), N = V(O);
      oe(N, () => t.children ?? Q), I(D, O);
    }, he = (D) => {
      var O = Et();
      Se(() => tt(O, d(E))), I(D, O);
    };
    ae(X, (D) => {
      d(E) == null ? D(ee) : D(he, !1);
    });
  }
  Ee(k, (D) => c = D, () => c), ze(k, (D, O) => q == null ? void 0 : q(D, O), a), I(e, k);
  var H = Oe(P);
  return i(), H;
}
function Da(e, t) {
  Te(t, !0);
  let n = m(t, "placeholder", 3, ""), r = m(t, "label", 3, ""), i = m(t, "icon", 3, ""), a = m(t, "value", 15, ""), o = m(t, "variant", 3, "standard"), l = m(t, "styles", 3, "");
  var s = W(), u = V(s);
  {
    var c = (v) => {
      {
        const h = (p) => {
          jv(p, {
            class: "material-icons",
            children: (E, y) => {
              var L = Et();
              Se(() => tt(L, i())), I(E, L);
            },
            $$slots: { default: !0 }
          });
        };
        let g = /* @__PURE__ */ me(() => `width: 100%; ${l()}`);
        As(v, {
          get label() {
            return r();
          },
          get placeholder() {
            return n();
          },
          get style() {
            return d(g);
          },
          get variant() {
            return o();
          },
          get value() {
            return a();
          },
          set value(p) {
            a(p);
          },
          leadingIcon: h,
          $$slots: { leadingIcon: !0 }
        });
      }
    }, f = (v) => {
      As(v, {
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
        set value(h) {
          a(h);
        }
      });
    };
    ae(u, (v) => {
      i() ? v(c) : v(f, !1);
    });
  }
  I(e, s), Oe();
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
var Is = {
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
function Vv(e) {
  return !!e.document && typeof e.document.createElement == "function";
}
function qv(e, t) {
  if (Vv(e) && t in Is) {
    var n = e.document.createElement("div"), r = Is[t], i = r.standard, a = r.prefixed, o = i in n.style;
    return o ? i : a;
  }
  return t;
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
function zv(e) {
  return e ? e.scrollHeight > e.offsetHeight : !1;
}
function Xv(e) {
  return e ? e.scrollTop === 0 : !1;
}
function Wv(e) {
  return e ? Math.ceil(e.scrollHeight - e.scrollTop) === e.clientHeight : !1;
}
function Zv(e) {
  var t = /* @__PURE__ */ new Set();
  return [].forEach.call(e, function(n) {
    return t.add(n.offsetTop);
  }), t.size > 1;
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
var Yv = (
  /** @class */
  function() {
    function e() {
      this.rafIDs = /* @__PURE__ */ new Map();
    }
    return e.prototype.request = function(t, n) {
      var r = this;
      this.cancel(t);
      var i = requestAnimationFrame(function(a) {
        r.rafIDs.delete(t), n(a);
      });
      this.rafIDs.set(t, i);
    }, e.prototype.cancel = function(t) {
      var n = this.rafIDs.get(t);
      n && (cancelAnimationFrame(n), this.rafIDs.delete(t));
    }, e.prototype.cancelAll = function() {
      var t = this;
      this.rafIDs.forEach(function(n, r) {
        t.cancel(r);
      });
    }, e.prototype.getQueue = function() {
      var t = [];
      return this.rafIDs.forEach(function(n, r) {
        t.push(r);
      }), t;
    }, e;
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
var Ne = {
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
}, ri = {
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
}, Pa = {
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
var ta;
(function(e) {
  e.POLL_SCROLL_POS = "poll_scroll_position", e.POLL_LAYOUT_CHANGE = "poll_layout_change";
})(ta || (ta = {}));
var Kv = (
  /** @class */
  function(e) {
    vt(t, e);
    function t(n) {
      var r = e.call(this, K(K({}, t.defaultAdapter), n)) || this;
      return r.dialogOpen = !1, r.isFullscreen = !1, r.animationFrame = 0, r.animationTimer = 0, r.escapeKeyAction = ri.CLOSE_ACTION, r.scrimClickAction = ri.CLOSE_ACTION, r.autoStackButtons = !0, r.areButtonsStacked = !1, r.suppressDefaultPressSelector = ri.SUPPRESS_DEFAULT_PRESS_SELECTOR, r.animFrame = new Yv(), r.contentScrollHandler = function() {
        r.handleScrollEvent();
      }, r.windowResizeHandler = function() {
        r.layout();
      }, r.windowOrientationChangeHandler = function() {
        r.layout();
      }, r;
    }
    return Object.defineProperty(t, "cssClasses", {
      get: function() {
        return Ne;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t, "strings", {
      get: function() {
        return ri;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t, "numbers", {
      get: function() {
        return Pa;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t, "defaultAdapter", {
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
    }), t.prototype.init = function() {
      this.adapter.hasClass(Ne.STACKED) && this.setAutoStackButtons(!1), this.isFullscreen = this.adapter.hasClass(Ne.FULLSCREEN);
    }, t.prototype.destroy = function() {
      this.animationTimer && (clearTimeout(this.animationTimer), this.handleAnimationTimerEnd()), this.isFullscreen && this.adapter.deregisterContentEventHandler("scroll", this.contentScrollHandler), this.animFrame.cancelAll(), this.adapter.deregisterWindowEventHandler("resize", this.windowResizeHandler), this.adapter.deregisterWindowEventHandler("orientationchange", this.windowOrientationChangeHandler);
    }, t.prototype.open = function(n) {
      var r = this;
      this.dialogOpen = !0, this.adapter.notifyOpening(), this.adapter.addClass(Ne.OPENING), this.isFullscreen && this.adapter.registerContentEventHandler("scroll", this.contentScrollHandler), n && n.isAboveFullscreenDialog && this.adapter.addClass(Ne.SCRIM_HIDDEN), this.adapter.registerWindowEventHandler("resize", this.windowResizeHandler), this.adapter.registerWindowEventHandler("orientationchange", this.windowOrientationChangeHandler), this.runNextAnimationFrame(function() {
        r.adapter.addClass(Ne.OPEN), r.adapter.addBodyClass(Ne.SCROLL_LOCK), r.layout(), r.animationTimer = setTimeout(function() {
          r.handleAnimationTimerEnd(), r.adapter.trapFocus(r.adapter.getInitialFocusEl()), r.adapter.notifyOpened();
        }, Pa.DIALOG_ANIMATION_OPEN_TIME_MS);
      });
    }, t.prototype.close = function(n) {
      var r = this;
      n === void 0 && (n = ""), this.dialogOpen && (this.dialogOpen = !1, this.adapter.notifyClosing(n), this.adapter.addClass(Ne.CLOSING), this.adapter.removeClass(Ne.OPEN), this.adapter.removeBodyClass(Ne.SCROLL_LOCK), this.isFullscreen && this.adapter.deregisterContentEventHandler("scroll", this.contentScrollHandler), this.adapter.deregisterWindowEventHandler("resize", this.windowResizeHandler), this.adapter.deregisterWindowEventHandler("orientationchange", this.windowOrientationChangeHandler), cancelAnimationFrame(this.animationFrame), this.animationFrame = 0, clearTimeout(this.animationTimer), this.animationTimer = setTimeout(function() {
        r.adapter.releaseFocus(), r.handleAnimationTimerEnd(), r.adapter.notifyClosed(n);
      }, Pa.DIALOG_ANIMATION_CLOSE_TIME_MS));
    }, t.prototype.showSurfaceScrim = function() {
      var n = this;
      this.adapter.addClass(Ne.SURFACE_SCRIM_SHOWING), this.runNextAnimationFrame(function() {
        n.adapter.addClass(Ne.SURFACE_SCRIM_SHOWN);
      });
    }, t.prototype.hideSurfaceScrim = function() {
      this.adapter.removeClass(Ne.SURFACE_SCRIM_SHOWN), this.adapter.addClass(Ne.SURFACE_SCRIM_HIDING);
    }, t.prototype.handleSurfaceScrimTransitionEnd = function() {
      this.adapter.removeClass(Ne.SURFACE_SCRIM_HIDING), this.adapter.removeClass(Ne.SURFACE_SCRIM_SHOWING);
    }, t.prototype.isOpen = function() {
      return this.dialogOpen;
    }, t.prototype.getEscapeKeyAction = function() {
      return this.escapeKeyAction;
    }, t.prototype.setEscapeKeyAction = function(n) {
      this.escapeKeyAction = n;
    }, t.prototype.getScrimClickAction = function() {
      return this.scrimClickAction;
    }, t.prototype.setScrimClickAction = function(n) {
      this.scrimClickAction = n;
    }, t.prototype.getAutoStackButtons = function() {
      return this.autoStackButtons;
    }, t.prototype.setAutoStackButtons = function(n) {
      this.autoStackButtons = n;
    }, t.prototype.getSuppressDefaultPressSelector = function() {
      return this.suppressDefaultPressSelector;
    }, t.prototype.setSuppressDefaultPressSelector = function(n) {
      this.suppressDefaultPressSelector = n;
    }, t.prototype.layout = function() {
      var n = this;
      this.animFrame.request(ta.POLL_LAYOUT_CHANGE, function() {
        n.layoutInternal();
      });
    }, t.prototype.handleClick = function(n) {
      var r = this.adapter.eventTargetMatches(n.target, ri.SCRIM_SELECTOR);
      if (r && this.scrimClickAction !== "")
        this.close(this.scrimClickAction);
      else {
        var i = this.adapter.getActionFromEvent(n);
        i && this.close(i);
      }
    }, t.prototype.handleKeydown = function(n) {
      var r = n.key === "Enter" || n.keyCode === 13;
      if (r) {
        var i = this.adapter.getActionFromEvent(n);
        if (!i) {
          var a = n.composedPath ? n.composedPath()[0] : n.target, o = this.suppressDefaultPressSelector ? !this.adapter.eventTargetMatches(a, this.suppressDefaultPressSelector) : !0;
          r && o && this.adapter.clickDefaultButton();
        }
      }
    }, t.prototype.handleDocumentKeydown = function(n) {
      var r = n.key === "Escape" || n.keyCode === 27;
      r && this.escapeKeyAction !== "" && this.close(this.escapeKeyAction);
    }, t.prototype.handleScrollEvent = function() {
      var n = this;
      this.animFrame.request(ta.POLL_SCROLL_POS, function() {
        n.toggleScrollDividerHeader(), n.toggleScrollDividerFooter();
      });
    }, t.prototype.layoutInternal = function() {
      this.autoStackButtons && this.detectStackedButtons(), this.toggleScrollableClasses();
    }, t.prototype.handleAnimationTimerEnd = function() {
      this.animationTimer = 0, this.adapter.removeClass(Ne.OPENING), this.adapter.removeClass(Ne.CLOSING);
    }, t.prototype.runNextAnimationFrame = function(n) {
      var r = this;
      cancelAnimationFrame(this.animationFrame), this.animationFrame = requestAnimationFrame(function() {
        r.animationFrame = 0, clearTimeout(r.animationTimer), r.animationTimer = setTimeout(n, 0);
      });
    }, t.prototype.detectStackedButtons = function() {
      this.adapter.removeClass(Ne.STACKED);
      var n = this.adapter.areButtonsStacked();
      n && this.adapter.addClass(Ne.STACKED), n !== this.areButtonsStacked && (this.adapter.reverseButtons(), this.areButtonsStacked = n);
    }, t.prototype.toggleScrollableClasses = function() {
      this.adapter.removeClass(Ne.SCROLLABLE), this.adapter.isContentScrollable() && (this.adapter.addClass(Ne.SCROLLABLE), this.isFullscreen && (this.toggleScrollDividerHeader(), this.toggleScrollDividerFooter()));
    }, t.prototype.toggleScrollDividerHeader = function() {
      this.adapter.isScrollableContentAtTop() ? this.adapter.hasClass(Ne.SCROLL_DIVIDER_HEADER) && this.adapter.removeClass(Ne.SCROLL_DIVIDER_HEADER) : this.adapter.addClass(Ne.SCROLL_DIVIDER_HEADER);
    }, t.prototype.toggleScrollDividerFooter = function() {
      this.adapter.isScrollableContentAtBottom() ? this.adapter.hasClass(Ne.SCROLL_DIVIDER_FOOTER) && this.adapter.removeClass(Ne.SCROLL_DIVIDER_FOOTER) : this.adapter.addClass(Ne.SCROLL_DIVIDER_FOOTER);
    }, t;
  }(gn)
), Qv = /* @__PURE__ */ J('<div class="mdc-dialog__surface-scrim"></div>'), Jv = /* @__PURE__ */ J('<div><div><div><!> <!></div></div> <div class="mdc-dialog__scrim"></div></div> <!>', 1);
function $v(e, t) {
  Te(t, !0);
  const n = () => Cn(X, "$aboveFullscreenShown", r), [r, i] = Xn(), { FocusTrap: a } = Zh, { closest: o, matches: l } = Ro;
  let s = m(t, "use", 19, () => []), u = m(t, "class", 3, ""), c = m(t, "open", 15, !1), f = m(t, "selection", 3, !1), v = m(t, "escapeKeyAction", 3, "close"), h = m(t, "scrimClickAction", 3, "close"), g = m(t, "autoStackButtons", 3, !0), p = m(t, "fullscreen", 3, !1), E = m(t, "sheet", 3, !1), y = m(t, "noContentPadding", 3, !1), L = m(t, "container$class", 3, ""), x = m(t, "surface$class", 3, ""), _ = /* @__PURE__ */ Ve(t, [
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
  ]), S, b = /* @__PURE__ */ De(void 0), A = new Kr(), w = be({}), R, P = Lt(!1), k = pe("SMUI:dialog:aboveFullscreen"), X = pe("SMUI:dialog:aboveFullscreenShown") ?? Lt(!1), ee = pe("SMUI:addLayoutListener"), he, H = [], D = (G) => (H.push(G), () => {
    const B = H.indexOf(G);
    B >= 0 && H.splice(B, 1);
  });
  se("SMUI:dialog:actions:reversed", P), se("SMUI:addLayoutListener", D), se("SMUI:dialog:selection", f()), se("SMUI:dialog:aboveFullscreen", k || p()), se("SMUI:dialog:aboveFullscreenShown", X), E() && se("SMUI:icon-button:context", "dialog:sheet"), Ue(() => {
    d(b) && d(b).getEscapeKeyAction() !== v() && d(b).setEscapeKeyAction(v());
  }), Ue(() => {
    d(b) && d(b).getScrimClickAction() !== h() && d(b).setScrimClickAction(h());
  }), Ue(() => {
    d(b) && d(b).getAutoStackButtons() !== g() && d(b).setAutoStackButtons(g());
  }), Ue(() => {
    g() || Bn(P, !0);
  }), ee && (he = ee(Pe)), Ue(() => {
    d(b) && d(b).isOpen() !== c() && (c() ? d(b).open({ isAboveFullscreenDialog: !!k }) : d(b).close());
  });
  let O = n();
  Ue(() => {
    p() && d(b) && O !== n() && (O = n(), n() ? d(b).showSurfaceScrim() : d(b).hideSurfaceScrim());
  }), ht(() => (R = new a(S, { initialFocusEl: de() ?? void 0 }), $(
    b,
    new Kv({
      addBodyClass: (G) => document.body.classList.add(G),
      addClass: Y,
      areButtonsStacked: () => Zv(C()),
      clickDefaultButton: () => {
        const G = j();
        G && G.click();
      },
      eventTargetMatches: (G, B) => G ? l(G, B) : !1,
      getActionFromEvent: (G) => {
        if (!G.target)
          return "";
        const B = o(G.target, "[data-mdc-dialog-action]");
        return B && B.getAttribute("data-mdc-dialog-action");
      },
      getInitialFocusEl: de,
      hasClass: N,
      isContentScrollable: () => zv(ve()),
      notifyClosed: (G) => {
        c(!1), nt(ne(), "SMUIDialogClosed", G ? { action: G } : {});
      },
      notifyClosing: (G) => nt(ne(), "SMUIDialogClosing", G ? { action: G } : {}),
      notifyOpened: () => nt(ne(), "SMUIDialogOpened", {}),
      notifyOpening: () => nt(ne(), "SMUIDialogOpening", {}),
      releaseFocus: () => R.releaseFocus(),
      removeBodyClass: (G) => document.body.classList.remove(G),
      removeClass: U,
      reverseButtons: () => {
        Bn(P, !0);
      },
      trapFocus: () => R.trapFocus(),
      registerContentEventHandler: (G, B) => {
        const z = ve();
        z instanceof HTMLElement && A.on(z, G, B);
      },
      deregisterContentEventHandler: (G, B) => {
        const z = ve();
        z instanceof HTMLElement && A.off(z, G, B);
      },
      isScrollableContentAtTop: () => Xv(ve()),
      isScrollableContentAtBottom: () => Wv(ve()),
      registerWindowEventHandler: (G, B) => A.on(window, G, B),
      deregisterWindowEventHandler: (G, B) => A.off(window, G, B)
    }),
    !0
  ), d(b).init(), () => {
    var G;
    (G = d(b)) == null || G.destroy(), A.clear();
  })), Wr(() => {
    he && he();
  });
  function N(G) {
    return G in w ? w[G] : ne().classList.contains(G);
  }
  function Y(G) {
    w[G] || (w[G] = !0);
  }
  function U(G) {
    (!(G in w) || w[G]) && (w[G] = !1);
  }
  function C() {
    return [].slice.call(ne().querySelectorAll(".mdc-dialog__button"));
  }
  function j() {
    return ne().querySelector("[data-mdc-dialog-button-default]");
  }
  function ve() {
    return ne().querySelector(".mdc-dialog__content");
  }
  function de() {
    return ne().querySelector("[data-mdc-dialog-initial-focus]");
  }
  function le() {
    k && Bn(X, !0), requestAnimationFrame(() => {
      H.forEach((G) => G());
    });
  }
  function Z() {
    H.forEach((G) => G());
  }
  function te() {
    k && Bn(X, !1);
  }
  function ue() {
    return c();
  }
  function _e(G) {
    c(G);
  }
  function Pe() {
    var G;
    return (G = d(b)) == null ? void 0 : G.layout();
  }
  function ne() {
    return S;
  }
  var xe = { isOpen: ue, setOpen: _e, layout: Pe, getElement: ne }, we = Jv();
  Ri("resize", Yi, () => c() && d(b) && d(b).layout()), Ri("orientationchange", Yi, () => c() && d(b) && d(b).layout()), Ri("keydown", ll.body, (G) => d(b) && d(b).handleDocumentKeydown(G));
  var ge = V(we), Ie = (G) => {
    var B;
    le(), (B = t.onSMUIDialogOpening) == null || B.call(t, G);
  }, ye = (G) => {
    var B;
    Z(), (B = t.onSMUIDialogOpened) == null || B.call(t, G);
  }, Fe = (G) => {
    var B;
    te(), (B = t.onSMUIDialogClosed) == null || B.call(t, G);
  }, Mt = (G) => {
    var B;
    d(b) && d(b).handleClick(G), (B = t.onclick) == null || B.call(t, G);
  }, T = (G) => {
    var B;
    d(b) && d(b).handleKeydown(G), (B = t.onkeydown) == null || B.call(t, G);
  };
  Xe(
    ge,
    (G, B) => ({
      class: G,
      role: "alertdialog",
      "aria-modal": "true",
      ...B,
      onSMUIDialogOpening: Ie,
      onSMUIDialogOpened: ye,
      onSMUIDialogClosed: Fe,
      onclick: Mt,
      onkeydown: T
    }),
    [
      () => je({
        "mdc-dialog": !0,
        "mdc-dialog--stacked": !g(),
        "mdc-dialog--fullscreen": p(),
        "mdc-dialog--sheet": E(),
        "mdc-dialog--no-content-padding": y(),
        "smui-dialog--selection": f(),
        ...w,
        [u()]: !0
      }),
      () => ea(_, ["container$", "surface$"])
    ]
  );
  var M = ce(ge);
  Xe(M, (G, B) => ({ class: G, ...B }), [
    () => je({ "mdc-dialog__container": !0, [L()]: !0 }),
    () => tn(_, "container$")
  ]);
  var ie = ce(M);
  Xe(ie, (G, B) => ({ class: G, role: "alertdialog", "aria-modal": "true", ...B }), [
    () => je({ "mdc-dialog__surface": !0, [x()]: !0 }),
    () => tn(_, "surface$")
  ]);
  var Ye = ce(ie);
  oe(Ye, () => t.children ?? Q);
  var Qt = re(Ye, 2);
  {
    var Bt = (G) => {
      var B = Qv();
      Ri("transitionend", B, () => d(b) && d(b).handleSurfaceScrimTransitionEnd()), I(G, B);
    };
    ae(Qt, (G) => {
      p() && G(Bt);
    });
  }
  Ee(ge, (G) => S = G, () => S), ze(ge, (G, B) => q == null ? void 0 : q(G, B), s);
  var wn = re(ge, 2);
  oe(wn, () => t.over ?? Q), I(e, we);
  var Qr = Oe(xe);
  return i(), Qr;
}
function eg(e, t) {
  Te(t, !0);
  let n = /* @__PURE__ */ Ve(t, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return Ee(
    Ii(e, dt({ _smuiClass: "mdc-dialog__content", tag: "div" }, () => n, {
      children: (o, l) => {
        var s = W(), u = V(s);
        oe(u, () => t.children ?? Q), I(o, s);
      },
      $$slots: { default: !0 }
    })),
    (o) => r = o,
    () => r
  ), Oe(a);
}
function tg(e, t) {
  Te(t, !0);
  let n = /* @__PURE__ */ Ve(t, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return Ee(
    Ii(e, dt(
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
        children: (o, l) => {
          var s = W(), u = V(s);
          oe(u, () => t.children ?? Q), I(o, s);
        },
        $$slots: { default: !0 }
      }
    )),
    (o) => r = o,
    () => r
  ), Oe(a);
}
var ng = /* @__PURE__ */ J('<div class="dialog-title svelte-187m1sc"><!></div> <!> <!>', 1);
function xs(e, t) {
  Te(t, !0);
  let n = m(t, "open", 15, !1), r = m(t, "onClose", 3, () => {
  });
  $v(e, {
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
      var o = ng(), l = V(o), s = ce(l);
      oe(s, () => t.title ?? Q);
      var u = re(l, 2);
      eg(u, {
        id: "large-scroll-content",
        children: (f, v) => {
          var h = W(), g = V(h);
          oe(g, () => t.content ?? Q), I(f, h);
        },
        $$slots: { default: !0 }
      });
      var c = re(u, 2);
      tg(c, {
        children: (f, v) => {
          var h = W(), g = V(h);
          oe(g, () => t.actions ?? Q), I(f, h);
        },
        $$slots: { default: !0 }
      }), I(i, o);
    },
    $$slots: { default: !0 }
  }), Oe();
}
const ut = [];
for (let e = 0; e < 256; ++e)
  ut.push((e + 256).toString(16).slice(1));
function rg(e, t = 0) {
  return (ut[e[t + 0]] + ut[e[t + 1]] + ut[e[t + 2]] + ut[e[t + 3]] + "-" + ut[e[t + 4]] + ut[e[t + 5]] + "-" + ut[e[t + 6]] + ut[e[t + 7]] + "-" + ut[e[t + 8]] + ut[e[t + 9]] + "-" + ut[e[t + 10]] + ut[e[t + 11]] + ut[e[t + 12]] + ut[e[t + 13]] + ut[e[t + 14]] + ut[e[t + 15]]).toLowerCase();
}
let Ma;
const ig = new Uint8Array(16);
function ag() {
  if (!Ma) {
    if (typeof crypto > "u" || !crypto.getRandomValues)
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    Ma = crypto.getRandomValues.bind(crypto);
  }
  return Ma(ig);
}
const og = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), ws = { randomUUID: og };
function sg(e, t, n) {
  var i;
  if (ws.randomUUID && !t && !e)
    return ws.randomUUID();
  e = e || {};
  const r = e.random ?? ((i = e.rng) == null ? void 0 : i.call(e)) ?? ag();
  if (r.length < 16)
    throw new Error("Random bytes length must be >= 16");
  if (r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, t) {
    if (n = n || 0, n < 0 || n + 16 > t.length)
      throw new RangeError(`UUID byte range ${n}:${n + 15} is out of buffer bounds`);
    for (let a = 0; a < 16; ++a)
      t[n + a] = r[a];
    return t;
  }
  return rg(r);
}
var lg = /* @__PURE__ */ J('<span class="oscd-icon"><!></span>');
function xn(e, t) {
  var n = lg(), r = ce(n);
  oe(r, () => t.children ?? Q), I(e, n);
}
var ug = /* @__PURE__ */ qt('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"></path></svg>');
function cu(e, t) {
  let n = m(t, "svgStyles", 3, "");
  xn(e, {
    children: (r, i) => {
      var a = ug();
      Se(() => Rt(a, n())), I(r, a);
    }
  });
}
var cg = /* @__PURE__ */ qt('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="24px"><path d="m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"></path></svg>');
function so(e, t) {
  let n = m(t, "svgStyles", 3, "");
  xn(e, {
    children: (r, i) => {
      var a = cg();
      Se(() => Rt(a, n())), I(r, a);
    }
  });
}
var dg = /* @__PURE__ */ qt('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z"></path></svg>');
function fg(e, t) {
  let n = m(t, "svgStyles", 3, "");
  xn(e, {
    children: (r, i) => {
      var a = dg();
      Se(() => Rt(a, n())), I(r, a);
    }
  });
}
var hg = /* @__PURE__ */ qt('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="m590-160 80 80H240q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h360l200 240v480q0 20-8.5 36.5T768-96L560-302q-17 11-37 16.5t-43 5.5q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 23-5.5 43T618-360l102 104v-356L562-800H240v640h350ZM480-360q33 0 56.5-23.5T560-440q0-33-23.5-56.5T480-520q-33 0-56.5 23.5T400-440q0 33 23.5 56.5T480-360Zm0-80Zm0 0Z"></path></svg>');
function vg(e, t) {
  let n = m(t, "svgStyles", 3, "");
  xn(e, {
    children: (r, i) => {
      var a = hg();
      Se(() => Rt(a, n())), I(r, a);
    }
  });
}
var gg = /* @__PURE__ */ qt('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-160q-134 0-227-93t-93-227q0-134 93-227t227-93q69 0 132 28.5T720-690v-110h80v280H520v-80h168q-32-56-87.5-88T480-720q-100 0-170 70t-70 170q0 100 70 170t170 70q77 0 139-44t87-116h84q-28 106-114 173t-196 67Z"></path></svg>');
function du(e, t) {
  let n = m(t, "svgStyles", 3, "");
  xn(e, {
    children: (r, i) => {
      var a = gg();
      Se(() => Rt(a, n())), I(r, a);
    }
  });
}
var pg = /* @__PURE__ */ qt('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M840-680v480q0 33-23.5 56.5T760-120H200q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h480l160 160Zm-80 34L646-760H200v560h560v-446ZM480-240q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35ZM240-560h360v-160H240v160Zm-40-86v446-560 114Z"></path></svg>');
function Ls(e, t) {
  let n = m(t, "svgStyles", 3, "");
  xn(e, {
    children: (r, i) => {
      var a = pg();
      Se(() => Rt(a, n())), I(r, a);
    }
  });
}
var mg = /* @__PURE__ */ qt('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M200-440v-80h560v80H200Z"></path></svg>');
function bg(e, t) {
  let n = m(t, "svgStyles", 3, "");
  xn(e, {
    children: (r, i) => {
      var a = mg();
      Se(() => Rt(a, n())), I(r, a);
    }
  });
}
var _g = /* @__PURE__ */ qt('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"></path></svg>');
function yg(e, t) {
  let n = m(t, "svgStyles", 3, "");
  xn(e, {
    children: (r, i) => {
      var a = _g();
      Se(() => Rt(a, n())), I(r, a);
    }
  });
}
var Eg = /* @__PURE__ */ qt('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"></path></svg>');
function Sg(e, t) {
  let n = m(t, "svgStyles", 3, "");
  xn(e, {
    children: (r, i) => {
      var a = Eg();
      Se(() => Rt(a, n())), I(r, a);
    }
  });
}
ac();
mr(["change"]);
var Cg = /* @__PURE__ */ J('<div class="overlay svelte-14uvd2z"><div class="loading-spinner-container svelte-14uvd2z"><div class="loading-spinner svelte-14uvd2z"></div> <span class="loading-message svelte-14uvd2z"> </span></div></div>'), Ag = /* @__PURE__ */ J('<div class="svelte-14uvd2z"><!></div>');
function Ts(e, t) {
  let n = m(t, "loadingDone", 3, !0), r = m(t, "message", 3, "Loading...");
  var i = Ag(), a = ce(i);
  {
    var o = (l) => {
      var s = Cg(), u = ce(s), c = re(ce(u), 2), f = ce(c);
      Se(() => tt(f, r())), I(l, s);
    };
    ae(a, (l) => {
      n() || l(o);
    });
  }
  I(e, i);
}
mr(["change"]);
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
var kt = {
  CLOSED_CLASS: "mdc-linear-progress--closed",
  CLOSED_ANIMATION_OFF_CLASS: "mdc-linear-progress--closed-animation-off",
  INDETERMINATE_CLASS: "mdc-linear-progress--indeterminate",
  REVERSED_CLASS: "mdc-linear-progress--reversed",
  ANIMATION_READY_CLASS: "mdc-linear-progress--animation-ready"
}, $t = {
  ARIA_HIDDEN: "aria-hidden",
  ARIA_VALUEMAX: "aria-valuemax",
  ARIA_VALUEMIN: "aria-valuemin",
  ARIA_VALUENOW: "aria-valuenow",
  BUFFER_BAR_SELECTOR: ".mdc-linear-progress__buffer-bar",
  FLEX_BASIS: "flex-basis",
  PRIMARY_BAR_SELECTOR: ".mdc-linear-progress__primary-bar"
}, ii = {
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
var Ig = (
  /** @class */
  function(e) {
    vt(t, e);
    function t(n) {
      var r = e.call(this, K(K({}, t.defaultAdapter), n)) || this;
      return r.observer = null, r;
    }
    return Object.defineProperty(t, "cssClasses", {
      get: function() {
        return kt;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t, "strings", {
      get: function() {
        return $t;
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
      var n = this;
      this.determinate = !this.adapter.hasClass(kt.INDETERMINATE_CLASS), this.adapter.addClass(kt.ANIMATION_READY_CLASS), this.progress = 0, this.buffer = 1, this.observer = this.adapter.attachResizeObserver(function(r) {
        var i, a;
        if (!n.determinate)
          try {
            for (var o = Ct(r), l = o.next(); !l.done; l = o.next()) {
              var s = l.value;
              s.contentRect && n.calculateAndSetDimensions(s.contentRect.width);
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
    }, t.prototype.setDeterminate = function(n) {
      if (this.determinate = n, this.determinate) {
        this.adapter.removeClass(kt.INDETERMINATE_CLASS), this.adapter.setAttribute($t.ARIA_VALUENOW, this.progress.toString()), this.adapter.setAttribute($t.ARIA_VALUEMAX, "1"), this.adapter.setAttribute($t.ARIA_VALUEMIN, "0"), this.setPrimaryBarProgress(this.progress), this.setBufferBarProgress(this.buffer);
        return;
      }
      this.observer && this.calculateAndSetDimensions(this.adapter.getWidth()), this.adapter.addClass(kt.INDETERMINATE_CLASS), this.adapter.removeAttribute($t.ARIA_VALUENOW), this.adapter.removeAttribute($t.ARIA_VALUEMAX), this.adapter.removeAttribute($t.ARIA_VALUEMIN), this.setPrimaryBarProgress(1), this.setBufferBarProgress(1);
    }, t.prototype.isDeterminate = function() {
      return this.determinate;
    }, t.prototype.setProgress = function(n) {
      this.progress = n, this.determinate && (this.setPrimaryBarProgress(n), this.adapter.setAttribute($t.ARIA_VALUENOW, n.toString()));
    }, t.prototype.getProgress = function() {
      return this.progress;
    }, t.prototype.setBuffer = function(n) {
      this.buffer = n, this.determinate && this.setBufferBarProgress(n);
    }, t.prototype.getBuffer = function() {
      return this.buffer;
    }, t.prototype.open = function() {
      this.adapter.removeClass(kt.CLOSED_CLASS), this.adapter.removeClass(kt.CLOSED_ANIMATION_OFF_CLASS), this.adapter.removeAttribute($t.ARIA_HIDDEN);
    }, t.prototype.close = function() {
      this.adapter.addClass(kt.CLOSED_CLASS), this.adapter.setAttribute($t.ARIA_HIDDEN, "true");
    }, t.prototype.isClosed = function() {
      return this.adapter.hasClass(kt.CLOSED_CLASS);
    }, t.prototype.handleTransitionEnd = function() {
      this.adapter.hasClass(kt.CLOSED_CLASS) && this.adapter.addClass(kt.CLOSED_ANIMATION_OFF_CLASS);
    }, t.prototype.destroy = function() {
      e.prototype.destroy.call(this), this.observer && this.observer.disconnect();
    }, t.prototype.restartAnimation = function() {
      this.adapter.removeClass(kt.ANIMATION_READY_CLASS), this.adapter.forceLayout(), this.adapter.addClass(kt.ANIMATION_READY_CLASS);
    }, t.prototype.setPrimaryBarProgress = function(n) {
      var r = "scaleX(" + n + ")", i = typeof window < "u" ? qv(window, "transform") : "transform";
      this.adapter.setPrimaryBarStyle(i, r);
    }, t.prototype.setBufferBarProgress = function(n) {
      var r = n * 100 + "%";
      this.adapter.setBufferBarStyle($t.FLEX_BASIS, r);
    }, t.prototype.calculateAndSetDimensions = function(n) {
      var r = n * ii.PRIMARY_HALF, i = n * ii.PRIMARY_FULL, a = n * ii.SECONDARY_QUARTER, o = n * ii.SECONDARY_HALF, l = n * ii.SECONDARY_FULL;
      this.adapter.setStyle("--mdc-linear-progress-primary-half", r + "px"), this.adapter.setStyle("--mdc-linear-progress-primary-half-neg", -r + "px"), this.adapter.setStyle("--mdc-linear-progress-primary-full", i + "px"), this.adapter.setStyle("--mdc-linear-progress-primary-full-neg", -i + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-quarter", a + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-quarter-neg", -a + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-half", o + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-half-neg", -o + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-full", l + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-full-neg", -l + "px"), this.restartAnimation();
    }, t;
  }(gn)
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
var bn = {
  HEADER_CELL_SORTED: "mdc-data-table__header-cell--sorted",
  HEADER_CELL_SORTED_DESCENDING: "mdc-data-table__header-cell--sorted-descending",
  IN_PROGRESS: "mdc-data-table--in-progress",
  ROW_SELECTED: "mdc-data-table__row--selected"
}, Os = {
  ARIA_SELECTED: "aria-selected",
  ARIA_SORT: "aria-sort"
}, $n = {
  ARIA_SELECTED: Os.ARIA_SELECTED,
  ARIA_SORT: Os.ARIA_SORT
}, jt;
(function(e) {
  e.ASCENDING = "ascending", e.DESCENDING = "descending", e.NONE = "none", e.OTHER = "other";
})(jt || (jt = {}));
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
var xg = (
  /** @class */
  function(e) {
    vt(t, e);
    function t(n) {
      return e.call(this, K(K({}, t.defaultAdapter), n)) || this;
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
      return Ul(this, void 0, void 0, function() {
        return Lo(this, function(n) {
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
    }, t.prototype.getRows = function() {
      return this.adapter.getRowElements();
    }, t.prototype.getHeaderCells = function() {
      return this.adapter.getHeaderCellElements();
    }, t.prototype.setSelectedRowIds = function(n) {
      for (var r = 0; r < this.adapter.getRowCount(); r++) {
        var i = this.adapter.getRowIdAtIndex(r), a = !1;
        i && n.indexOf(i) >= 0 && (a = !0), this.adapter.setRowCheckboxCheckedAtIndex(r, a), this.selectRowAtIndex(r, a);
      }
      this.setHeaderRowCheckboxState();
    }, t.prototype.getRowIds = function() {
      for (var n = [], r = 0; r < this.adapter.getRowCount(); r++)
        n.push(this.adapter.getRowIdAtIndex(r));
      return n;
    }, t.prototype.getSelectedRowIds = function() {
      for (var n = [], r = 0; r < this.adapter.getRowCount(); r++)
        this.adapter.isCheckboxAtRowIndexChecked(r) && n.push(this.adapter.getRowIdAtIndex(r));
      return n;
    }, t.prototype.handleHeaderRowCheckboxChange = function() {
      for (var n = this.adapter.isHeaderRowCheckboxChecked(), r = 0; r < this.adapter.getRowCount(); r++)
        this.adapter.setRowCheckboxCheckedAtIndex(r, n), this.selectRowAtIndex(r, n);
      n ? this.adapter.notifySelectedAll() : this.adapter.notifyUnselectedAll();
    }, t.prototype.handleRowCheckboxChange = function(n) {
      var r = this.adapter.getRowIndexByChildElement(n.target);
      if (r !== -1) {
        var i = this.adapter.isCheckboxAtRowIndexChecked(r);
        this.selectRowAtIndex(r, i), this.setHeaderRowCheckboxState();
        var a = this.adapter.getRowIdAtIndex(r);
        this.adapter.notifyRowSelectionChanged({ rowId: a, rowIndex: r, selected: i });
      }
    }, t.prototype.handleSortAction = function(n) {
      for (var r = n.columnId, i = n.columnIndex, a = n.headerCell, o = 0; o < this.adapter.getHeaderCellCount(); o++)
        o !== i && (this.adapter.removeClassNameByHeaderCellIndex(o, bn.HEADER_CELL_SORTED), this.adapter.removeClassNameByHeaderCellIndex(o, bn.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(o, $n.ARIA_SORT, jt.NONE), this.adapter.setSortStatusLabelByHeaderCellIndex(o, jt.NONE));
      this.adapter.setClassNameByHeaderCellIndex(i, bn.HEADER_CELL_SORTED);
      var l = this.adapter.getAttributeByHeaderCellIndex(i, $n.ARIA_SORT), s = jt.NONE;
      l === jt.ASCENDING ? (this.adapter.setClassNameByHeaderCellIndex(i, bn.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(i, $n.ARIA_SORT, jt.DESCENDING), s = jt.DESCENDING) : l === jt.DESCENDING ? (this.adapter.removeClassNameByHeaderCellIndex(i, bn.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(i, $n.ARIA_SORT, jt.ASCENDING), s = jt.ASCENDING) : (this.adapter.setAttributeByHeaderCellIndex(i, $n.ARIA_SORT, jt.ASCENDING), s = jt.ASCENDING), this.adapter.setSortStatusLabelByHeaderCellIndex(i, s), this.adapter.notifySortAction({
        columnId: r,
        columnIndex: i,
        headerCell: a,
        sortValue: s
      });
    }, t.prototype.handleRowClick = function(n) {
      var r = n.rowId, i = n.row;
      this.adapter.notifyRowClick({
        rowId: r,
        row: i
      });
    }, t.prototype.showProgress = function() {
      var n = this.adapter.getTableHeaderHeight(), r = this.adapter.getTableContainerHeight() - n, i = n;
      this.adapter.setProgressIndicatorStyles({
        height: r + "px",
        top: i + "px"
      }), this.adapter.addClass(bn.IN_PROGRESS);
    }, t.prototype.hideProgress = function() {
      this.adapter.removeClass(bn.IN_PROGRESS);
    }, t.prototype.setHeaderRowCheckboxState = function() {
      this.adapter.getSelectedRowCount() === 0 ? (this.adapter.setHeaderRowCheckboxChecked(!1), this.adapter.setHeaderRowCheckboxIndeterminate(!1)) : this.adapter.getSelectedRowCount() === this.adapter.getRowCount() ? (this.adapter.setHeaderRowCheckboxChecked(!0), this.adapter.setHeaderRowCheckboxIndeterminate(!1)) : (this.adapter.setHeaderRowCheckboxIndeterminate(!0), this.adapter.setHeaderRowCheckboxChecked(!1));
    }, t.prototype.selectRowAtIndex = function(n, r) {
      r ? (this.adapter.addClassAtRowIndex(n, bn.ROW_SELECTED), this.adapter.setAttributeAtRowIndex(n, $n.ARIA_SELECTED, "true")) : (this.adapter.removeClassAtRowIndex(n, bn.ROW_SELECTED), this.adapter.setAttributeAtRowIndex(n, $n.ARIA_SELECTED, "false"));
    }, t;
  }(gn)
), wg = /* @__PURE__ */ J('<div class="mdc-data-table__progress-indicator"><div class="mdc-data-table__scrim"></div> <!></div>'), Lg = /* @__PURE__ */ J("<div><div><table><!></table></div> <!> <!></div>");
function Tg(e, t) {
  Te(t, !0);
  const n = () => Cn(ee, "$progressClosed", r), [r, i] = Xn(), { closest: a } = Ro;
  let o = m(t, "use", 19, () => []), l = m(t, "class", 3, ""), s = m(t, "stickyHeader", 3, !1), u = m(t, "sortable", 3, !1), c = m(t, "sort", 15, null), f = m(t, "sortDirection", 15, "ascending"), v = m(t, "sortAscendingAriaLabel", 3, "sorted, ascending"), h = m(t, "sortDescendingAriaLabel", 3, "sorted, descending"), g = m(t, "container$use", 19, () => []), p = m(t, "container$class", 3, ""), E = m(t, "table$use", 19, () => []), y = m(t, "table$class", 3, ""), L = /* @__PURE__ */ Ve(t, [
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
  ]), x, _ = /* @__PURE__ */ De(void 0), S, b = /* @__PURE__ */ De(void 0), A = /* @__PURE__ */ De(void 0), w = be({}), R = /* @__PURE__ */ De(be({ height: "auto", top: "initial" })), P = pe("SMUI:addLayoutListener"), k, X = !1, ee = Lt(!1), he = Lt(c());
  Ue(() => {
    Bn(he, c());
  });
  let H = Lt(f());
  Ue(() => {
    Bn(H, f());
  }), se("SMUI:checkbox:context", "data-table"), se("SMUI:linear-progress:context", "data-table"), se("SMUI:linear-progress:closed", ee), se("SMUI:data-table:sortable", u()), se("SMUI:data-table:sort", he), se("SMUI:data-table:sortDirection", H), se("SMUI:data-table:sortAscendingAriaLabel", v()), se("SMUI:data-table:sortDescendingAriaLabel", h()), P && (k = P(de));
  let D;
  Ue(() => {
    t.progress && d(_) && D !== n() && (D = n(), n() ? d(_).hideProgress() : d(_).showProgress());
  }), se("SMUI:checkbox:mount", () => {
    d(_) && X && d(_).layout();
  }), se("SMUI:data-table:header:mount", (T) => {
    $(b, T, !0);
  }), se("SMUI:data-table:header:unmount", () => {
    $(b, void 0);
  }), se("SMUI:data-table:body:mount", (T) => {
    $(A, T, !0);
  }), se("SMUI:data-table:body:unmount", () => {
    $(A, void 0);
  }), ht(() => ($(
    _,
    new xg({
      addClass: N,
      removeClass: Y,
      getHeaderCellElements: () => {
        var T;
        return ((T = d(b)) == null ? void 0 : T.cells.map((M) => M.element)) ?? [];
      },
      getHeaderCellCount: () => {
        var T;
        return ((T = d(b)) == null ? void 0 : T.cells.length) ?? 0;
      },
      getAttributeByHeaderCellIndex: (T, M) => {
        var ie;
        return ((ie = d(b)) == null ? void 0 : ie.orderedCells[T].getAttr(M)) ?? null;
      },
      setAttributeByHeaderCellIndex: (T, M, ie) => {
        var Ye;
        (Ye = d(b)) == null || Ye.orderedCells[T].addAttr(M, ie);
      },
      setClassNameByHeaderCellIndex: (T, M) => {
        var ie;
        (ie = d(b)) == null || ie.orderedCells[T].addClass(M);
      },
      removeClassNameByHeaderCellIndex: (T, M) => {
        var ie;
        (ie = d(b)) == null || ie.orderedCells[T].removeClass(M);
      },
      notifySortAction: (T) => {
        c(T.columnId), f(T.sortValue), nt(le(), "SMUIDataTableSorted", T);
      },
      getTableContainerHeight: () => S.getBoundingClientRect().height,
      getTableHeaderHeight: () => {
        const T = le().querySelector(".mdc-data-table__header-row");
        if (!T)
          throw new Error("MDCDataTable: Table header element not found.");
        return T.getBoundingClientRect().height;
      },
      setProgressIndicatorStyles: (T) => {
        $(R, T, !0);
      },
      addClassAtRowIndex: (T, M) => {
        var ie;
        (ie = d(A)) == null || ie.orderedRows[T].addClass(M);
      },
      getRowCount: () => {
        var T;
        return ((T = d(A)) == null ? void 0 : T.rows.length) ?? 0;
      },
      getRowElements: () => {
        var T;
        return ((T = d(A)) == null ? void 0 : T.rows.map((M) => M.element)) ?? [];
      },
      getRowIdAtIndex: (T) => {
        var M;
        return ((M = d(A)) == null ? void 0 : M.orderedRows[T].rowId) ?? null;
      },
      getRowIndexByChildElement: (T) => {
        var M;
        return ((M = d(A)) == null ? void 0 : M.orderedRows.map((ie) => ie.element).indexOf(a(T, ".mdc-data-table__row"))) ?? -1;
      },
      getSelectedRowCount: () => {
        var T;
        return ((T = d(A)) == null ? void 0 : T.rows.filter((M) => M.selected).length) ?? 0;
      },
      isCheckboxAtRowIndexChecked: (T) => {
        var ie;
        const M = (ie = d(A)) == null ? void 0 : ie.orderedRows[T].checkbox;
        return M ? M.checked : !1;
      },
      isHeaderRowCheckboxChecked: () => {
        var M;
        const T = (M = d(b)) == null ? void 0 : M.checkbox;
        return T ? T.checked : !1;
      },
      isRowsSelectable: () => !!le().querySelector(".mdc-data-table__row-checkbox") || !!le().querySelector(".mdc-data-table__header-row-checkbox"),
      notifyRowSelectionChanged: (T) => {
        var ie;
        const M = (ie = d(A)) == null ? void 0 : ie.orderedRows[T.rowIndex];
        M && nt(le(), "SMUIDataTableSelectionChanged", {
          row: M.element,
          rowId: M.rowId,
          rowIndex: T.rowIndex,
          selected: T.selected
        });
      },
      notifySelectedAll: () => {
        U(!1), nt(le(), "SMUIDataTableSelectedAll");
      },
      notifyUnselectedAll: () => {
        U(!1), nt(le(), "SMUIDataTableUnselectedAll");
      },
      notifyRowClick: (T) => nt(le(), "SMUIDataTableClickRow", T),
      registerHeaderRowCheckbox: () => {
      },
      registerRowCheckboxes: () => {
      },
      removeClassAtRowIndex: (T, M) => {
        var ie;
        (ie = d(A)) == null || ie.orderedRows[T].removeClass(M);
      },
      setAttributeAtRowIndex: (T, M, ie) => {
        var Ye;
        (Ye = d(A)) == null || Ye.orderedRows[T].addAttr(M, ie);
      },
      setHeaderRowCheckboxChecked: (T) => {
        var ie;
        const M = (ie = d(b)) == null ? void 0 : ie.checkbox;
        M && (M.checked = T);
      },
      setHeaderRowCheckboxIndeterminate: U,
      setRowCheckboxCheckedAtIndex: (T, M) => {
        var Ye;
        const ie = (Ye = d(A)) == null ? void 0 : Ye.orderedRows[T].checkbox;
        ie && (ie.checked = M);
      },
      setSortStatusLabelByHeaderCellIndex: (T, M) => {
      }
    }),
    !0
  ), d(_).init(), d(_).layout(), X = !0, () => {
    var T;
    (T = d(_)) == null || T.destroy();
  })), Wr(() => {
    k && k();
  });
  function O(T) {
    d(_) && d(_).handleRowCheckboxChange(T);
  }
  function N(T) {
    w[T] || (w[T] = !0);
  }
  function Y(T) {
    (!(T in w) || w[T]) && (w[T] = !1);
  }
  function U(T) {
    var ie;
    const M = (ie = d(b)) == null ? void 0 : ie.checkbox;
    M && (M.indeterminate = T);
  }
  function C(T) {
    if (!d(_) || !T.detail.target)
      return;
    const M = a(T.detail.target, ".mdc-data-table__header-cell--with-sort");
    M && ve(M);
  }
  function j(T) {
    if (!d(_) || !T.detail.target)
      return;
    const M = a(T.detail.target, ".mdc-data-table__row");
    M && d(_) && d(_).handleRowClick({ rowId: T.detail.rowId, row: M });
  }
  function ve(T) {
    var Qt, Bt;
    const M = ((Qt = d(b)) == null ? void 0 : Qt.orderedCells) ?? [], ie = M.map((wn) => wn.element).indexOf(T);
    if (ie === -1)
      return;
    const Ye = M[ie].columnId ?? null;
    (Bt = d(_)) == null || Bt.handleSortAction({ columnId: Ye, columnIndex: ie, headerCell: T });
  }
  function de() {
    var T;
    return (T = d(_)) == null ? void 0 : T.layout();
  }
  function le() {
    return x;
  }
  var Z = { layout: de, getElement: le }, te = Lg(), ue = (T) => {
    var M;
    d(_) && d(_).handleHeaderRowCheckboxChange(), (M = t.onSMUIDataTableHeaderCheckboxChange) == null || M.call(t, T);
  }, _e = (T) => {
    var M;
    C(T), (M = t.onSMUIDataTableHeaderClick) == null || M.call(t, T);
  }, Pe = (T) => {
    var M;
    j(T), (M = t.onSMUIDataTableRowClick) == null || M.call(t, T);
  }, ne = (T) => {
    var M;
    O(T), (M = t.onSMUIDataTableBodyCheckboxChange) == null || M.call(t, T);
  };
  Xe(
    te,
    (T, M) => ({
      class: T,
      ...M,
      onSMUIDataTableHeaderCheckboxChange: ue,
      onSMUIDataTableHeaderClick: _e,
      onSMUIDataTableRowClick: Pe,
      onSMUIDataTableBodyCheckboxChange: ne
    }),
    [
      () => je({
        "mdc-data-table": !0,
        "mdc-data-table--sticky-header": s(),
        ...w,
        [l()]: !0
      }),
      () => ea(L, ["container$", "table$"])
    ]
  );
  var xe = ce(te);
  Xe(xe, (T, M) => ({ class: T, ...M }), [
    () => je({
      "mdc-data-table__table-container": !0,
      [p()]: !0
    }),
    () => tn(L, "container$")
  ]);
  var we = ce(xe);
  Xe(we, (T, M) => ({ class: T, ...M }), [
    () => je({ "mdc-data-table__table": !0, [y()]: !0 }),
    () => tn(L, "table$")
  ]);
  var ge = ce(we);
  oe(ge, () => t.children ?? Q), ze(we, (T, M) => q == null ? void 0 : q(T, M), E), Ee(xe, (T) => S = T, () => S), ze(xe, (T, M) => q == null ? void 0 : q(T, M), g);
  var Ie = re(xe, 2);
  {
    var ye = (T) => {
      var M = wg(), ie = re(ce(M), 2);
      oe(ie, () => t.progress ?? Q), Se((Ye) => Rt(M, Ye), [
        () => Object.entries(d(R)).map(([Ye, Qt]) => `${Ye}: ${Qt};`).join(" ")
      ]), I(T, M);
    };
    ae(Ie, (T) => {
      t.progress && T(ye);
    });
  }
  var Fe = re(Ie, 2);
  oe(Fe, () => t.paginate ?? Q), Ee(te, (T) => x = T, () => x), ze(te, (T, M) => q == null ? void 0 : q(T, M), o), I(e, te);
  var Mt = Oe(Z);
  return i(), Mt;
}
var Og = /* @__PURE__ */ J("<thead><!></thead>");
function Rg(e, t) {
  Te(t, !0);
  let n = m(t, "use", 19, () => []), r = /* @__PURE__ */ Ve(t, ["$$slots", "$$events", "$$legacy", "use", "children"]), i, a = /* @__PURE__ */ De(void 0), o = [];
  const l = /* @__PURE__ */ new WeakMap();
  se("SMUI:data-table:row:header", !0);
  const s = pe("SMUI:checkbox:mount");
  se("SMUI:checkbox:mount", (y) => {
    $(a, y, !0), s && s(y);
  });
  const u = pe("SMUI:checkbox:unmount");
  se("SMUI:checkbox:unmount", (y) => {
    $(a, void 0), u && u(y);
  }), se("SMUI:data-table:cell:mount", (y) => {
    o.push(y), l.set(y.element, y);
  }), se("SMUI:data-table:cell:unmount", (y) => {
    const L = o.findIndex((x) => x === y);
    L !== -1 && o.splice(L, 1), l.delete(y.element);
  });
  const c = pe("SMUI:data-table:header:mount"), f = pe("SMUI:data-table:header:unmount");
  ht(() => {
    const y = {
      get cells() {
        return o;
      },
      get orderedCells() {
        return v();
      },
      get checkbox() {
        return d(a);
      }
    };
    return c && c(y), () => {
      f && f(y);
    };
  });
  function v() {
    return [
      ...h().querySelectorAll(".mdc-data-table__header-cell")
    ].map((y) => l.get(y)).filter((y) => y && y._smui_data_table_header_cell_accessor);
  }
  function h() {
    return i;
  }
  var g = { getElement: h }, p = Og();
  Xe(p, () => ({ ...r }));
  var E = ce(p);
  return oe(E, () => t.children ?? Q), Ee(p, (y) => i = y, () => i), ze(p, (y, L) => q == null ? void 0 : q(y, L), n), I(e, p), Oe(g);
}
var Hg = /* @__PURE__ */ J("<tbody><!></tbody>");
function Dg(e, t) {
  Te(t, !0);
  let n = m(t, "use", 19, () => []), r = m(t, "class", 3, ""), i = /* @__PURE__ */ Ve(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "children"
  ]), a, o = [];
  const l = /* @__PURE__ */ new WeakMap();
  se("SMUI:data-table:row:header", !1), se("SMUI:data-table:row:mount", (p) => {
    o.push(p), l.set(p.element, p);
  }), se("SMUI:data-table:row:unmount", (p) => {
    const E = o.findIndex((y) => y === p);
    E !== -1 && o.splice(E, 1), l.delete(p.element);
  });
  const s = pe("SMUI:data-table:body:mount"), u = pe("SMUI:data-table:body:unmount");
  ht(() => {
    const p = {
      get rows() {
        return o;
      },
      get orderedRows() {
        return c();
      }
    };
    return s && s(p), () => {
      u && u(p);
    };
  });
  function c() {
    return [...f().querySelectorAll(".mdc-data-table__row")].map((p) => l.get(p)).filter((p) => p && p._smui_data_table_row_accessor);
  }
  function f() {
    return a;
  }
  var v = { getElement: f }, h = Hg();
  Xe(h, (p) => ({ class: p, ...i }), [
    () => je({ "mdc-data-table__content": !0, [r()]: !0 })
  ]);
  var g = ce(h);
  return oe(g, () => t.children ?? Q), Ee(h, (p) => a = p, () => a), ze(h, (p, E) => q == null ? void 0 : q(p, E), n), I(e, h), Oe(v);
}
let Pg = 0;
var Mg = /* @__PURE__ */ J("<tr><!></tr>");
function Rs(e, t) {
  Te(t, !0);
  let n = m(t, "use", 19, () => []), r = m(t, "class", 3, ""), i = m(t, "rowId", 19, () => "SMUI-data-table-row-" + Pg++), a = /* @__PURE__ */ Ve(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "rowId",
    "children"
  ]), o, l = /* @__PURE__ */ De(void 0), s = be({}), u = be({}), c = pe("SMUI:data-table:row:header");
  const f = pe("SMUI:checkbox:mount");
  se("SMUI:checkbox:mount", (P) => {
    $(l, P, !0), f && f(P);
  });
  const v = pe("SMUI:checkbox:unmount");
  se("SMUI:checkbox:unmount", (P) => {
    $(l, void 0), v && v(P);
  });
  const h = pe("SMUI:data-table:row:mount"), g = pe("SMUI:data-table:row:unmount");
  ht(() => {
    const P = c ? {
      _smui_data_table_row_accessor: !1,
      get element() {
        return S();
      },
      get checkbox() {
        return d(l);
      },
      get rowId() {
      },
      get selected() {
        return (d(l) && d(l).checked) ?? !1;
      },
      addClass: p,
      removeClass: E,
      getAttr: y,
      addAttr: L
    } : {
      _smui_data_table_row_accessor: !0,
      get element() {
        return S();
      },
      get checkbox() {
        return d(l);
      },
      get rowId() {
        return i();
      },
      get selected() {
        return (d(l) && d(l).checked) ?? !1;
      },
      addClass: p,
      removeClass: E,
      getAttr: y,
      addAttr: L
    };
    return h && h(P), () => {
      g && g(P);
    };
  });
  function p(P) {
    s[P] || (s[P] = !0);
  }
  function E(P) {
    (!(P in s) || s[P]) && (s[P] = !1);
  }
  function y(P) {
    return P in u ? u[P] ?? null : S().getAttribute(P);
  }
  function L(P, k) {
    u[P] !== k && (u[P] = k);
  }
  function x(P) {
    nt(S(), "SMUIDataTableHeaderClick", P);
  }
  function _(P) {
    nt(S(), "SMUIDataTableRowClick", { rowId: i(), target: P.target });
  }
  function S() {
    return o;
  }
  var b = { getElement: S }, A = Mg(), w = (P) => {
    var k;
    c ? x(P) : _(P), (k = t.onclick) == null || k.call(t, P);
  };
  Xe(
    A,
    (P) => ({
      class: P,
      "aria-selected": d(l) ? d(l).checked ? "true" : "false" : void 0,
      ...u,
      ...a,
      onclick: w
    }),
    [
      () => je({
        "mdc-data-table__header-row": c,
        "mdc-data-table__row": !c,
        "mdc-data-table__row--selected": !c && d(l) && d(l).checked,
        ...s,
        [r()]: !0
      })
    ]
  );
  var R = ce(A);
  return oe(R, () => t.children ?? Q), Ee(A, (P) => o = P, () => o), ze(A, (P, k) => q == null ? void 0 : q(P, k), n), I(e, A), Oe(b);
}
let Bg = 0;
var Ug = /* @__PURE__ */ J('<div class="mdc-data-table__header-cell-wrapper"><!> <div class="mdc-data-table__sort-status-label" aria-hidden="true"> </div></div>'), Fg = /* @__PURE__ */ J("<th><!></th>"), Ng = /* @__PURE__ */ J("<td><!></td>");
function Ba(e, t) {
  Te(t, !0);
  const n = () => Cn(y, "$sort", i), r = () => Cn(L, "$sortDirection", i), [i, a] = Xn();
  let o = pe("SMUI:data-table:row:header"), l = m(t, "use", 19, () => []), s = m(t, "class", 3, ""), u = m(t, "numeric", 3, !1), c = m(t, "checkbox", 3, !1), f = m(t, "columnId", 19, () => o ? "SMUI-data-table-column-" + Bg++ : "SMUI-data-table-unused"), v = m(t, "sortable", 19, () => pe("SMUI:data-table:sortable")), h = /* @__PURE__ */ Ve(t, [
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
  ]), g, p = be({}), E = be({}), y = pe("SMUI:data-table:sort"), L = pe("SMUI:data-table:sortDirection"), x = pe("SMUI:data-table:sortAscendingAriaLabel"), _ = pe("SMUI:data-table:sortDescendingAriaLabel");
  v() && (se("SMUI:label:context", "data-table:sortable-header-cell"), se("SMUI:icon-button:context", "data-table:sortable-header-cell"), se("SMUI:icon-button:aria-describedby", f() + "-status-label"));
  const S = pe("SMUI:data-table:cell:mount"), b = pe("SMUI:data-table:cell:unmount");
  ht(() => {
    const U = o ? {
      _smui_data_table_header_cell_accessor: !0,
      get element() {
        return ee();
      },
      get columnId() {
        return f();
      },
      addClass: A,
      removeClass: w,
      getAttr: R,
      addAttr: P
    } : {
      _smui_data_table_header_cell_accessor: !1,
      get element() {
        return ee();
      },
      get columnId() {
      },
      addClass: A,
      removeClass: w,
      getAttr: R,
      addAttr: P
    };
    return S && S(U), () => {
      b && b(U);
    };
  });
  function A(U) {
    p[U] || (p[U] = !0);
  }
  function w(U) {
    (!(U in p) || p[U]) && (p[U] = !1);
  }
  function R(U) {
    return U in E ? E[U] ?? null : ee().getAttribute(U);
  }
  function P(U, C) {
    E[U] !== C && (E[U] = C);
  }
  function k(U) {
    nt(ee(), "SMUIDataTableHeaderCheckboxChange", U);
  }
  function X(U) {
    nt(ee(), "SMUIDataTableBodyCheckboxChange", U);
  }
  function ee() {
    return g;
  }
  var he = { getElement: ee }, H = W(), D = V(H);
  {
    var O = (U) => {
      var C = Fg(), j = (Z) => {
        var te;
        c() && k(Z), (te = t.onchange) == null || te.call(t, Z);
      };
      Xe(
        C,
        (Z) => ({
          class: Z,
          role: "columnheader",
          scope: "col",
          "data-column-id": f(),
          "aria-sort": v() ? n() === f() ? r() : "none" : void 0,
          ...E,
          ...h,
          onchange: j
        }),
        [
          () => je({
            "mdc-data-table__header-cell": !0,
            "mdc-data-table__header-cell--numeric": u(),
            "mdc-data-table__header-cell--checkbox": c(),
            "mdc-data-table__header-cell--with-sort": v(),
            "mdc-data-table__header-cell--sorted": v() && n() === f(),
            ...p,
            [s()]: !0
          })
        ]
      );
      var ve = ce(C);
      {
        var de = (Z) => {
          var te = Ug(), ue = ce(te);
          oe(ue, () => t.children ?? Q);
          var _e = re(ue, 2), Pe = ce(_e);
          Se(() => {
            fi(_e, "id", `${f() ?? ""}-status-label`), tt(Pe, n() === f() ? r() === "ascending" ? x : _ : "");
          }), I(Z, te);
        }, le = (Z) => {
          var te = W(), ue = V(te);
          oe(ue, () => t.children ?? Q), I(Z, te);
        };
        ae(ve, (Z) => {
          v() ? Z(de) : Z(le, !1);
        });
      }
      Ee(C, (Z) => g = Z, () => g), ze(C, (Z, te) => q == null ? void 0 : q(Z, te), l), I(U, C);
    }, N = (U) => {
      var C = Ng(), j = (de) => {
        var le;
        c() && X(de), (le = t.onchange) == null || le.call(t, de);
      };
      Xe(
        C,
        (de) => ({
          class: de,
          ...E,
          ...h,
          onchange: j
        }),
        [
          () => je({
            "mdc-data-table__cell": !0,
            "mdc-data-table__cell--numeric": u(),
            "mdc-data-table__cell--checkbox": c(),
            ...p,
            [s()]: !0
          })
        ]
      );
      var ve = ce(C);
      oe(ve, () => t.children ?? Q), Ee(C, (de) => g = de, () => g), ze(C, (de, le) => q == null ? void 0 : q(de, le), l), I(U, C);
    };
    ae(D, (U) => {
      o ? U(O) : U(N, !1);
    });
  }
  I(e, H);
  var Y = Oe(he);
  return a(), Y;
}
mr(["click"]);
mr(["click"]);
function lo(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
var kg = Object.freeze({
  // This flag exists as a workaround for issue 454 (basically a browser bug) - seems like these rect values take time to update when in grid layout. Setting it to true can cause strange behaviour in the REPL for non-grid zones, see issue 470
  USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT: "USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT"
});
lo({}, kg.USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT, !1);
var Ni, Hs = {
  DND_ZONE_ACTIVE: "dnd-zone-active",
  DND_ZONE_DRAG_DISABLED: "dnd-zone-drag-disabled"
};
Ni = {}, lo(Ni, Hs.DND_ZONE_ACTIVE, "Tab to one the items and press space-bar or enter to start dragging it"), lo(Ni, Hs.DND_ZONE_DRAG_DISABLED, "This is a disabled drag and drop list");
const Gg = Lt([]);
Gg.subscribe;
mr(["click", "pointerdown", "pointerup", "pointermove"]);
var jg = /* @__PURE__ */ J('<div><div class="mdc-linear-progress__buffer"><div class="mdc-linear-progress__buffer-bar"></div> <div class="mdc-linear-progress__buffer-dots"></div></div> <div class="mdc-linear-progress__bar mdc-linear-progress__primary-bar"><span class="mdc-linear-progress__bar-inner"></span></div> <div class="mdc-linear-progress__bar mdc-linear-progress__secondary-bar"><span class="mdc-linear-progress__bar-inner"></span></div></div>');
function Vg(e, t) {
  Te(t, !0);
  const [n, r] = Xn();
  let i = m(t, "use", 19, () => []), a = m(t, "class", 3, ""), o = m(t, "style", 3, ""), l = m(t, "indeterminate", 3, !1), s = m(t, "closed", 3, !1), u = m(t, "progress", 3, 0), c = m(t, "buffer", 3, void 0), f = /* @__PURE__ */ Ve(t, [
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
  ]), v, h = /* @__PURE__ */ De(void 0), g = be({}), p = be({}), E = be({}), y = be({}), L = be({}), x = pe("SMUI:linear-progress:context"), _ = pe("SMUI:linear-progress:closed");
  Ue(() => {
    _ && Bn(_, s());
  }), Ue(() => {
    d(h) && d(h).isDeterminate() !== !l() && d(h).setDeterminate(!l());
  }), Ue(() => {
    d(h) && d(h).getProgress() !== u() && d(h).setProgress(u());
  }), Ue(() => {
    d(h) && (c() == null ? d(h).setBuffer(1) : d(h).setBuffer(c()));
  }), Ue(() => {
    d(h) && (s() ? d(h).close() : d(h).open());
  }), ht(() => ($(
    h,
    new Ig({
      addClass: b,
      forceLayout: () => {
        ee().getBoundingClientRect();
      },
      setBufferBarStyle: k,
      setPrimaryBarStyle: X,
      hasClass: S,
      removeAttribute: R,
      removeClass: A,
      setAttribute: w,
      setStyle: P,
      attachResizeObserver: (C) => {
        const j = window.ResizeObserver;
        if (j) {
          const ve = new j(C);
          return ve.observe(ee()), ve;
        }
        return null;
      },
      getWidth: () => ee().offsetWidth
    }),
    !0
  ), d(h).init(), () => {
    var C;
    (C = d(h)) == null || C.destroy();
  }));
  function S(C) {
    return C in g ? g[C] : ee().classList.contains(C);
  }
  function b(C) {
    g[C] || (g[C] = !0);
  }
  function A(C) {
    (!(C in g) || g[C]) && (g[C] = !1);
  }
  function w(C, j) {
    p[C] !== j && (p[C] = j);
  }
  function R(C) {
    (!(C in p) || p[C] != null) && (p[C] = void 0);
  }
  function P(C, j) {
    E[C] != j && (j === "" || j == null ? delete E[C] : E[C] = j);
  }
  function k(C, j) {
    y[C] != j && (j === "" || j == null ? delete y[C] : y[C] = j);
  }
  function X(C, j) {
    L[C] != j && (j === "" || j == null ? delete L[C] : L[C] = j);
  }
  function ee() {
    return v;
  }
  var he = { getElement: ee }, H = jg(), D = (C) => {
    var j;
    d(h) && d(h).handleTransitionEnd(), (j = t.ontransitionend) == null || j.call(t, C);
  };
  Xe(
    H,
    (C, j) => ({
      class: C,
      style: j,
      role: "progressbar",
      "aria-valuemin": 0,
      "aria-valuemax": 1,
      "aria-valuenow": l() ? void 0 : u(),
      ...p,
      ...f,
      ontransitionend: D
    }),
    [
      () => je({
        "mdc-linear-progress": !0,
        "mdc-linear-progress--indeterminate": l(),
        "mdc-linear-progress--closed": s(),
        "mdc-data-table__linear-progress": x === "data-table",
        ...g,
        [a()]: !0
      }),
      () => Object.entries(E).map(([C, j]) => `${C}: ${j};`).concat([o()]).join(" ")
    ]
  );
  var O = ce(H), N = ce(O), Y = re(O, 2);
  Ee(H, (C) => v = C, () => v), ze(H, (C, j) => q == null ? void 0 : q(C, j), i), Se(
    (C, j) => {
      Rt(N, C), Rt(Y, j);
    },
    [
      () => Object.entries(y).map(([C, j]) => `${C}: ${j};`).join(" "),
      () => Object.entries(L).map(([C, j]) => `${C}: ${j};`).join(" ")
    ]
  ), I(e, H);
  var U = Oe(he);
  return r(), U;
}
var qg = /* @__PURE__ */ qt('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor" class="svelte-1mj71p3"><path d="M12 4l-8 8h16l-8-8z"></path></svg>'), zg = /* @__PURE__ */ qt('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor" class="svelte-1mj71p3"><path d="M12 20l8-8H4l8 8z"></path></svg>'), Xg = (e, t) => t(), Wg = /* @__PURE__ */ J('<input type="text" class="svelte-1mj71p3"/>'), Zg = (e, t) => t(), Yg = /* @__PURE__ */ J('<input type="number" class="svelte-1mj71p3"/>'), Kg = /* @__PURE__ */ J("<!> <!>", 1), Qg = /* @__PURE__ */ J('<div class="custom-cell-container svelte-1mj71p3"><div class="cell-header svelte-1mj71p3"><span class="header-title svelte-1mj71p3"> </span> <!></div> <!></div>'), Jg = /* @__PURE__ */ J('<div class="cell-actions svelte-1mj71p3"></div>'), $g = /* @__PURE__ */ J("<!> <!>", 1);
function ep(e, t) {
  Te(t, !0);
  const n = () => Cn(p, "$sortColumn", a), r = () => Cn(E, "$sortDirection", a), i = () => Cn(g, "$filteredData", a), [a, o] = Xn();
  let l = m(t, "loadingDone", 15, !0), s = m(t, "label", 19, sg), u = m(t, "columnDefs", 19, () => []), c = m(t, "rowData", 31, () => be([])), f = m(t, "rowActions", 19, () => []), v = m(t, "searchInputLabel", 3, "Search"), h = be({ name: "", color: "", number: "" }), g = Lt([]), p = Lt(null), E = Lt(null);
  t.store.store.subscribe((_) => {
    c([..._]), y();
  });
  function y() {
    let _ = c().filter((S) => u().every((b) => {
      const A = h[b.field], w = S[b.field];
      return A ? b.filterType === "number" ? w == A : w.toString().toLowerCase().includes(A.toLowerCase()) : !0;
    }));
    _ = L(_), g.set(_);
  }
  function L(_) {
    let S, b;
    return p.subscribe((A) => S = A), E.subscribe((A) => b = A), !S || !b ? _ : _.sort((A, w) => {
      let R = A[S], P = w[S];
      return R == null && (R = ""), P == null && (P = ""), b === "asc" ? R.toString().localeCompare(P.toString()) : P.toString().localeCompare(R.toString());
    });
  }
  function x(_) {
    p.update((S) => {
      if (S === _)
        E.update((b) => b === "asc" ? "desc" : b === "desc" ? null : "asc");
      else
        return E.set("asc"), _;
      return _;
    }), y();
  }
  g.set(c()), Tg(e, {
    get "table$aria-label"() {
      return s();
    },
    style: "max-width: 100%; width: 100%;",
    progress: (S) => {
      Vg(S, {
        indeterminate: !0,
        "aria-label": "Data is being loaded...",
        get closed() {
          return l();
        },
        set closed(b) {
          l(b);
        }
      });
    },
    children: (S, b) => {
      var A = $g(), w = V(A);
      Rg(w, {
        children: (P, k) => {
          Rs(P, {
            class: "header-row",
            children: (X, ee) => {
              var he = W(), H = V(he);
              Hi(H, 17, u, ya, (D, O) => {
                Ba(D, {
                  get style() {
                    return d(O).headerStyle;
                  },
                  $$events: {
                    click: () => d(O).sortable && x(d(O).field)
                  },
                  children: (N, Y) => {
                    var U = Qg(), C = ce(U), j = ce(C), ve = ce(j), de = re(j, 2);
                    {
                      var le = (ue) => {
                        var _e = W(), Pe = V(_e);
                        {
                          var ne = (xe) => {
                            var we = W(), ge = V(we);
                            {
                              var Ie = (Fe) => {
                                var Mt = qg();
                                I(Fe, Mt);
                              }, ye = (Fe) => {
                                var Mt = W(), T = V(Mt);
                                {
                                  var M = (ie) => {
                                    var Ye = zg();
                                    I(ie, Ye);
                                  };
                                  ae(
                                    T,
                                    (ie) => {
                                      r() === "desc" && ie(M);
                                    },
                                    !0
                                  );
                                }
                                I(Fe, Mt);
                              };
                              ae(ge, (Fe) => {
                                r() === "asc" ? Fe(Ie) : Fe(ye, !1);
                              });
                            }
                            I(xe, we);
                          };
                          ae(Pe, (xe) => {
                            n() === d(O).field && r() !== null && xe(ne);
                          });
                        }
                        I(ue, _e);
                      };
                      ae(de, (ue) => {
                        d(O).sortable && ue(le);
                      });
                    }
                    var Z = re(C, 2);
                    {
                      var te = (ue) => {
                        var _e = Kg(), Pe = V(_e);
                        {
                          var ne = (ge) => {
                            var Ie = Wg();
                            Ie.__input = [Xg, y], Se(() => fi(Ie, "placeholder", `${v()} ${d(O).headerName}`)), Ka(Ie, () => h[d(O).field], (ye) => h[d(O).field] = ye), I(ge, Ie);
                          };
                          ae(Pe, (ge) => {
                            d(O).filterType === "text" && ge(ne);
                          });
                        }
                        var xe = re(Pe, 2);
                        {
                          var we = (ge) => {
                            var Ie = Yg();
                            Ie.__input = [Zg, y], Se(() => fi(Ie, "placeholder", `${v()} ${d(O).headerName}`)), Ka(Ie, () => h[d(O).field], (ye) => h[d(O).field] = ye), I(ge, Ie);
                          };
                          ae(xe, (ge) => {
                            d(O).filterType === "number" && ge(we);
                          });
                        }
                        I(ue, _e);
                      };
                      ae(Z, (ue) => {
                        d(O).filter && ue(te);
                      });
                    }
                    Se(() => {
                      Rt(U, `min-width: ${d(O).minWidth ?? 0 ?? ""}`), tt(ve, d(O).headerName);
                    }), I(N, U);
                  },
                  $$slots: { default: !0 }
                });
              }), I(X, he);
            },
            $$slots: { default: !0 }
          });
        },
        $$slots: { default: !0 }
      });
      var R = re(w, 2);
      Dg(R, {
        children: (P, k) => {
          var X = W(), ee = V(X);
          Hi(ee, 1, i, ya, (he, H) => {
            Rs(he, {
              children: (D, O) => {
                var N = W(), Y = V(N);
                Hi(Y, 17, u, (U) => U.field, (U, C) => {
                  var j = W(), ve = V(j);
                  {
                    var de = (Z) => {
                      Ba(Z, {
                        children: (te, ue) => {
                          var _e = Jg();
                          Hi(_e, 21, f, ya, (Pe, ne) => {
                            var xe = W(), we = V(xe);
                            {
                              var ge = (ye) => {
                                {
                                  let Fe = /* @__PURE__ */ me(() => d(ne).disabled(d(H)));
                                  sv(ye, {
                                    get iconComponent() {
                                      return d(ne).iconComponent;
                                    },
                                    get iconStyles() {
                                      return d(ne).iconStyles;
                                    },
                                    callback: () => d(ne).callback(d(H)),
                                    get disabled() {
                                      return d(Fe);
                                    }
                                  });
                                }
                              }, Ie = (ye) => {
                                {
                                  let Fe = /* @__PURE__ */ me(() => d(ne).disabled(d(H)));
                                  er(ye, {
                                    class: "button",
                                    variant: "raised",
                                    callback: () => d(ne).callback(d(H)),
                                    get disabled() {
                                      return d(Fe);
                                    },
                                    children: (Mt, T) => {
                                      var M = W(), ie = V(M);
                                      {
                                        var Ye = (Bt) => {
                                          cu(Bt, { svgStyles: "margin: unset" });
                                        }, Qt = (Bt) => {
                                          var wn = W(), Qr = V(wn);
                                          {
                                            var G = (z) => {
                                              so(z, { svgStyles: "margin: unset" });
                                            }, B = (z) => {
                                              var We = W(), at = V(We);
                                              {
                                                var ot = (pt) => {
                                                  fg(pt, { svgStyles: "margin: unset" });
                                                }, gt = (pt) => {
                                                  var Zn = W(), Je = V(Zn);
                                                  {
                                                    var mt = (Ft) => {
                                                      vg(Ft, { svgStyles: "margin: unset" });
                                                    }, Ut = (Ft) => {
                                                      var wi = W(), ma = V(wi);
                                                      {
                                                        var Re = (Ge) => {
                                                          bg(Ge, { svgStyles: "margin: unset" });
                                                        }, Ze = (Ge) => {
                                                          var bt = W(), Jt = V(bt);
                                                          {
                                                            var $e = (et) => {
                                                              yg(et, { svgStyles: "margin: unset" });
                                                            }, it = (et) => {
                                                              var Be = W(), lt = V(Be);
                                                              {
                                                                var Ln = (Qe) => {
                                                                  Sg(Qe, { svgStyles: "margin: unset" });
                                                                }, zt = (Qe) => {
                                                                  du(Qe, { svgStyles: "margin: unset" });
                                                                };
                                                                ae(
                                                                  lt,
                                                                  (Qe) => {
                                                                    d(ne).icon === "delete" ? Qe(Ln) : Qe(zt, !1);
                                                                  },
                                                                  !0
                                                                );
                                                              }
                                                              I(et, Be);
                                                            };
                                                            ae(
                                                              Jt,
                                                              (et) => {
                                                                d(ne).icon === "edit" ? et($e) : et(it, !1);
                                                              },
                                                              !0
                                                            );
                                                          }
                                                          I(Ge, bt);
                                                        };
                                                        ae(
                                                          ma,
                                                          (Ge) => {
                                                            d(ne).icon === "remove" ? Ge(Re) : Ge(Ze, !1);
                                                          },
                                                          !0
                                                        );
                                                      }
                                                      I(Ft, wi);
                                                    };
                                                    ae(
                                                      Je,
                                                      (Ft) => {
                                                        d(ne).icon === "find-in-page" ? Ft(mt) : Ft(Ut, !1);
                                                      },
                                                      !0
                                                    );
                                                  }
                                                  I(pt, Zn);
                                                };
                                                ae(
                                                  at,
                                                  (pt) => {
                                                    d(ne).icon === "download" ? pt(ot) : pt(gt, !1);
                                                  },
                                                  !0
                                                );
                                              }
                                              I(z, We);
                                            };
                                            ae(
                                              Qr,
                                              (z) => {
                                                d(ne).icon === "cancel" ? z(G) : z(B, !1);
                                              },
                                              !0
                                            );
                                          }
                                          I(Bt, wn);
                                        };
                                        ae(ie, (Bt) => {
                                          d(ne).icon === "add" ? Bt(Ye) : Bt(Qt, !1);
                                        });
                                      }
                                      I(Mt, M);
                                    },
                                    $$slots: { default: !0 }
                                  });
                                }
                              };
                              ae(we, (ye) => {
                                d(ne).iconComponent ? ye(ge) : ye(Ie, !1);
                              });
                            }
                            I(Pe, xe);
                          }), I(te, _e);
                        },
                        $$slots: { default: !0 }
                      });
                    }, le = (Z) => {
                      Ba(Z, {
                        get numeric() {
                          return d(C).numeric;
                        },
                        get style() {
                          return d(C).cellStyle;
                        },
                        children: (te, ue) => {
                          var _e = W(), Pe = V(_e);
                          {
                            var ne = (we) => {
                              var ge = Et();
                              Se((Ie) => tt(ge, Ie), [
                                () => d(C).valueFormatter(d(H)[d(C).field])
                              ]), I(we, ge);
                            }, xe = (we) => {
                              var ge = Et();
                              Se(() => tt(ge, d(H)[d(C).field] ?? "")), I(we, ge);
                            };
                            ae(Pe, (we) => {
                              d(C).valueFormatter ? we(ne) : we(xe, !1);
                            });
                          }
                          I(te, _e);
                        },
                        $$slots: { default: !0 }
                      });
                    };
                    ae(ve, (Z) => {
                      d(C).field === "actions" ? Z(de) : Z(le, !1);
                    });
                  }
                  I(U, j);
                }), I(D, N);
              },
              $$slots: { default: !0 }
            });
          }), I(P, X);
        },
        $$slots: { default: !0 }
      }), I(S, A);
    },
    $$slots: { progress: !0, default: !0 }
  }), Oe(), o();
}
mr(["input"]);
var tp = /* @__PURE__ */ J("<div><!></div>");
function np(e, t) {
  Te(t, !0);
  let n = m(t, "use", 19, () => []), r = m(t, "class", 3, ""), i = m(t, "variant", 3, "raised"), a = m(t, "padded", 3, !1), o = /* @__PURE__ */ Ve(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "variant",
    "padded",
    "children"
  ]), l;
  function s() {
    return l;
  }
  var u = { getElement: s }, c = tp();
  Xe(c, (v) => ({ class: v, ...o }), [
    () => je({
      "mdc-card": !0,
      "mdc-card--outlined": i() === "outlined",
      "smui-card--padded": a(),
      [r()]: !0
    })
  ]);
  var f = ce(c);
  return oe(f, () => t.children ?? Q), Ee(c, (v) => l = v, () => l), ze(c, (v, h) => q == null ? void 0 : q(v, h), n), I(e, c), Oe(u);
}
function rt(e) {
  return typeof e == "function";
}
function fu(e) {
  var t = function(r) {
    Error.call(r), r.stack = new Error().stack;
  }, n = e(t);
  return n.prototype = Object.create(Error.prototype), n.prototype.constructor = n, n;
}
var Ua = fu(function(e) {
  return function(n) {
    e(this), this.message = n ? n.length + ` errors occurred during unsubscription:
` + n.map(function(r, i) {
      return i + 1 + ") " + r.toString();
    }).join(`
  `) : "", this.name = "UnsubscriptionError", this.errors = n;
  };
});
function Ds(e, t) {
  if (e) {
    var n = e.indexOf(t);
    0 <= n && e.splice(n, 1);
  }
}
var Ho = function() {
  function e(t) {
    this.initialTeardown = t, this.closed = !1, this._parentage = null, this._finalizers = null;
  }
  return e.prototype.unsubscribe = function() {
    var t, n, r, i, a;
    if (!this.closed) {
      this.closed = !0;
      var o = this._parentage;
      if (o)
        if (this._parentage = null, Array.isArray(o))
          try {
            for (var l = Ct(o), s = l.next(); !s.done; s = l.next()) {
              var u = s.value;
              u.remove(this);
            }
          } catch (p) {
            t = { error: p };
          } finally {
            try {
              s && !s.done && (n = l.return) && n.call(l);
            } finally {
              if (t) throw t.error;
            }
          }
        else
          o.remove(this);
      var c = this.initialTeardown;
      if (rt(c))
        try {
          c();
        } catch (p) {
          a = p instanceof Ua ? p.errors : [p];
        }
      var f = this._finalizers;
      if (f) {
        this._finalizers = null;
        try {
          for (var v = Ct(f), h = v.next(); !h.done; h = v.next()) {
            var g = h.value;
            try {
              Ps(g);
            } catch (p) {
              a = a ?? [], p instanceof Ua ? a = wr(wr([], $a(a)), $a(p.errors)) : a.push(p);
            }
          }
        } catch (p) {
          r = { error: p };
        } finally {
          try {
            h && !h.done && (i = v.return) && i.call(v);
          } finally {
            if (r) throw r.error;
          }
        }
      }
      if (a)
        throw new Ua(a);
    }
  }, e.prototype.add = function(t) {
    var n;
    if (t && t !== this)
      if (this.closed)
        Ps(t);
      else {
        if (t instanceof e) {
          if (t.closed || t._hasParent(this))
            return;
          t._addParent(this);
        }
        (this._finalizers = (n = this._finalizers) !== null && n !== void 0 ? n : []).push(t);
      }
  }, e.prototype._hasParent = function(t) {
    var n = this._parentage;
    return n === t || Array.isArray(n) && n.includes(t);
  }, e.prototype._addParent = function(t) {
    var n = this._parentage;
    this._parentage = Array.isArray(n) ? (n.push(t), n) : n ? [n, t] : t;
  }, e.prototype._removeParent = function(t) {
    var n = this._parentage;
    n === t ? this._parentage = null : Array.isArray(n) && Ds(n, t);
  }, e.prototype.remove = function(t) {
    var n = this._finalizers;
    n && Ds(n, t), t instanceof e && t._removeParent(this);
  }, e.EMPTY = function() {
    var t = new e();
    return t.closed = !0, t;
  }(), e;
}();
Ho.EMPTY;
function hu(e) {
  return e instanceof Ho || e && "closed" in e && rt(e.remove) && rt(e.add) && rt(e.unsubscribe);
}
function Ps(e) {
  rt(e) ? e() : e.unsubscribe();
}
var rp = {
  Promise: void 0
}, ip = {
  setTimeout: function(e, t) {
    for (var n = [], r = 2; r < arguments.length; r++)
      n[r - 2] = arguments[r];
    return setTimeout.apply(void 0, wr([e, t], $a(n)));
  },
  clearTimeout: function(e) {
    return clearTimeout(e);
  },
  delegate: void 0
};
function vu(e) {
  ip.setTimeout(function() {
    throw e;
  });
}
function Ms() {
}
function ap(e) {
  e();
}
var Do = function(e) {
  vt(t, e);
  function t(n) {
    var r = e.call(this) || this;
    return r.isStopped = !1, n ? (r.destination = n, hu(n) && n.add(r)) : r.destination = lp, r;
  }
  return t.create = function(n, r, i) {
    return new uo(n, r, i);
  }, t.prototype.next = function(n) {
    this.isStopped || this._next(n);
  }, t.prototype.error = function(n) {
    this.isStopped || (this.isStopped = !0, this._error(n));
  }, t.prototype.complete = function() {
    this.isStopped || (this.isStopped = !0, this._complete());
  }, t.prototype.unsubscribe = function() {
    this.closed || (this.isStopped = !0, e.prototype.unsubscribe.call(this), this.destination = null);
  }, t.prototype._next = function(n) {
    this.destination.next(n);
  }, t.prototype._error = function(n) {
    try {
      this.destination.error(n);
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
}(Ho), op = function() {
  function e(t) {
    this.partialObserver = t;
  }
  return e.prototype.next = function(t) {
    var n = this.partialObserver;
    if (n.next)
      try {
        n.next(t);
      } catch (r) {
        ki(r);
      }
  }, e.prototype.error = function(t) {
    var n = this.partialObserver;
    if (n.error)
      try {
        n.error(t);
      } catch (r) {
        ki(r);
      }
    else
      ki(t);
  }, e.prototype.complete = function() {
    var t = this.partialObserver;
    if (t.complete)
      try {
        t.complete();
      } catch (n) {
        ki(n);
      }
  }, e;
}(), uo = function(e) {
  vt(t, e);
  function t(n, r, i) {
    var a = e.call(this) || this, o;
    return rt(n) || !n ? o = {
      next: n ?? void 0,
      error: r ?? void 0,
      complete: i ?? void 0
    } : o = n, a.destination = new op(o), a;
  }
  return t;
}(Do);
function ki(e) {
  vu(e);
}
function sp(e) {
  throw e;
}
var lp = {
  closed: !0,
  next: Ms,
  error: sp,
  complete: Ms
}, Po = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}();
function gu(e) {
  return e;
}
function up(e) {
  return e.length === 0 ? gu : e.length === 1 ? e[0] : function(n) {
    return e.reduce(function(r, i) {
      return i(r);
    }, n);
  };
}
var on = function() {
  function e(t) {
    t && (this._subscribe = t);
  }
  return e.prototype.lift = function(t) {
    var n = new e();
    return n.source = this, n.operator = t, n;
  }, e.prototype.subscribe = function(t, n, r) {
    var i = this, a = dp(t) ? t : new uo(t, n, r);
    return ap(function() {
      var o = i, l = o.operator, s = o.source;
      a.add(l ? l.call(a, s) : s ? i._subscribe(a) : i._trySubscribe(a));
    }), a;
  }, e.prototype._trySubscribe = function(t) {
    try {
      return this._subscribe(t);
    } catch (n) {
      t.error(n);
    }
  }, e.prototype.forEach = function(t, n) {
    var r = this;
    return n = Bs(n), new n(function(i, a) {
      var o = new uo({
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
      r.subscribe(o);
    });
  }, e.prototype._subscribe = function(t) {
    var n;
    return (n = this.source) === null || n === void 0 ? void 0 : n.subscribe(t);
  }, e.prototype[Po] = function() {
    return this;
  }, e.prototype.pipe = function() {
    for (var t = [], n = 0; n < arguments.length; n++)
      t[n] = arguments[n];
    return up(t)(this);
  }, e.prototype.toPromise = function(t) {
    var n = this;
    return t = Bs(t), new t(function(r, i) {
      var a;
      n.subscribe(function(o) {
        return a = o;
      }, function(o) {
        return i(o);
      }, function() {
        return r(a);
      });
    });
  }, e.create = function(t) {
    return new e(t);
  }, e;
}();
function Bs(e) {
  var t;
  return (t = e ?? rp.Promise) !== null && t !== void 0 ? t : Promise;
}
function cp(e) {
  return e && rt(e.next) && rt(e.error) && rt(e.complete);
}
function dp(e) {
  return e && e instanceof Do || cp(e) && hu(e);
}
function fp(e) {
  return rt(e == null ? void 0 : e.lift);
}
function _r(e) {
  return function(t) {
    if (fp(t))
      return t.lift(function(n) {
        try {
          return e(n, this);
        } catch (r) {
          this.error(r);
        }
      });
    throw new TypeError("Unable to lift unknown Observable type");
  };
}
function qr(e, t, n, r, i) {
  return new hp(e, t, n, r, i);
}
var hp = function(e) {
  vt(t, e);
  function t(n, r, i, a, o, l) {
    var s = e.call(this, n) || this;
    return s.onFinalize = o, s.shouldUnsubscribe = l, s._next = r ? function(u) {
      try {
        r(u);
      } catch (c) {
        n.error(c);
      }
    } : e.prototype._next, s._error = a ? function(u) {
      try {
        a(u);
      } catch (c) {
        n.error(c);
      } finally {
        this.unsubscribe();
      }
    } : e.prototype._error, s._complete = i ? function() {
      try {
        i();
      } catch (u) {
        n.error(u);
      } finally {
        this.unsubscribe();
      }
    } : e.prototype._complete, s;
  }
  return t.prototype.unsubscribe = function() {
    var n;
    if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
      var r = this.closed;
      e.prototype.unsubscribe.call(this), !r && ((n = this.onFinalize) === null || n === void 0 || n.call(this));
    }
  }, t;
}(Do), vp = new on(function(e) {
  return e.complete();
});
function gp(e) {
  return e && rt(e.schedule);
}
function pp(e) {
  return e[e.length - 1];
}
function mp(e) {
  return gp(pp(e)) ? e.pop() : void 0;
}
var pu = function(e) {
  return e && typeof e.length == "number" && typeof e != "function";
};
function mu(e) {
  return rt(e == null ? void 0 : e.then);
}
function bu(e) {
  return rt(e[Po]);
}
function _u(e) {
  return Symbol.asyncIterator && rt(e == null ? void 0 : e[Symbol.asyncIterator]);
}
function yu(e) {
  return new TypeError("You provided " + (e !== null && typeof e == "object" ? "an invalid object" : "'" + e + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
}
function bp() {
  return typeof Symbol != "function" || !Symbol.iterator ? "@@iterator" : Symbol.iterator;
}
var Eu = bp();
function Su(e) {
  return rt(e == null ? void 0 : e[Eu]);
}
function Cu(e) {
  return Ld(this, arguments, function() {
    var n, r, i, a;
    return Lo(this, function(o) {
      switch (o.label) {
        case 0:
          n = e.getReader(), o.label = 1;
        case 1:
          o.trys.push([1, , 9, 10]), o.label = 2;
        case 2:
          return [4, Lr(n.read())];
        case 3:
          return r = o.sent(), i = r.value, a = r.done, a ? [4, Lr(void 0)] : [3, 5];
        case 4:
          return [2, o.sent()];
        case 5:
          return [4, Lr(i)];
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
function Au(e) {
  return rt(e == null ? void 0 : e.getReader);
}
function xi(e) {
  if (e instanceof on)
    return e;
  if (e != null) {
    if (bu(e))
      return _p(e);
    if (pu(e))
      return yp(e);
    if (mu(e))
      return Ep(e);
    if (_u(e))
      return Iu(e);
    if (Su(e))
      return Sp(e);
    if (Au(e))
      return Cp(e);
  }
  throw yu(e);
}
function _p(e) {
  return new on(function(t) {
    var n = e[Po]();
    if (rt(n.subscribe))
      return n.subscribe(t);
    throw new TypeError("Provided object does not correctly implement Symbol.observable");
  });
}
function yp(e) {
  return new on(function(t) {
    for (var n = 0; n < e.length && !t.closed; n++)
      t.next(e[n]);
    t.complete();
  });
}
function Ep(e) {
  return new on(function(t) {
    e.then(function(n) {
      t.closed || (t.next(n), t.complete());
    }, function(n) {
      return t.error(n);
    }).then(null, vu);
  });
}
function Sp(e) {
  return new on(function(t) {
    var n, r;
    try {
      for (var i = Ct(e), a = i.next(); !a.done; a = i.next()) {
        var o = a.value;
        if (t.next(o), t.closed)
          return;
      }
    } catch (l) {
      n = { error: l };
    } finally {
      try {
        a && !a.done && (r = i.return) && r.call(i);
      } finally {
        if (n) throw n.error;
      }
    }
    t.complete();
  });
}
function Iu(e) {
  return new on(function(t) {
    Ap(e, t).catch(function(n) {
      return t.error(n);
    });
  });
}
function Cp(e) {
  return Iu(Cu(e));
}
function Ap(e, t) {
  var n, r, i, a;
  return Ul(this, void 0, void 0, function() {
    var o, l;
    return Lo(this, function(s) {
      switch (s.label) {
        case 0:
          s.trys.push([0, 5, 6, 11]), n = Td(e), s.label = 1;
        case 1:
          return [4, n.next()];
        case 2:
          if (r = s.sent(), !!r.done) return [3, 4];
          if (o = r.value, t.next(o), t.closed)
            return [2];
          s.label = 3;
        case 3:
          return [3, 1];
        case 4:
          return [3, 11];
        case 5:
          return l = s.sent(), i = { error: l }, [3, 11];
        case 6:
          return s.trys.push([6, , 9, 10]), r && !r.done && (a = n.return) ? [4, a.call(n)] : [3, 8];
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
function ur(e, t, n, r, i) {
  r === void 0 && (r = 0), i === void 0 && (i = !1);
  var a = t.schedule(function() {
    n(), i ? e.add(this.schedule(null, r)) : this.unsubscribe();
  }, r);
  if (e.add(a), !i)
    return a;
}
function xu(e, t) {
  return t === void 0 && (t = 0), _r(function(n, r) {
    n.subscribe(qr(r, function(i) {
      return ur(r, e, function() {
        return r.next(i);
      }, t);
    }, function() {
      return ur(r, e, function() {
        return r.complete();
      }, t);
    }, function(i) {
      return ur(r, e, function() {
        return r.error(i);
      }, t);
    }));
  });
}
function wu(e, t) {
  return t === void 0 && (t = 0), _r(function(n, r) {
    r.add(e.schedule(function() {
      return n.subscribe(r);
    }, t));
  });
}
function Ip(e, t) {
  return xi(e).pipe(wu(t), xu(t));
}
function xp(e, t) {
  return xi(e).pipe(wu(t), xu(t));
}
function wp(e, t) {
  return new on(function(n) {
    var r = 0;
    return t.schedule(function() {
      r === e.length ? n.complete() : (n.next(e[r++]), n.closed || this.schedule());
    });
  });
}
function Lp(e, t) {
  return new on(function(n) {
    var r;
    return ur(n, t, function() {
      r = e[Eu](), ur(n, t, function() {
        var i, a, o;
        try {
          i = r.next(), a = i.value, o = i.done;
        } catch (l) {
          n.error(l);
          return;
        }
        o ? n.complete() : n.next(a);
      }, 0, !0);
    }), function() {
      return rt(r == null ? void 0 : r.return) && r.return();
    };
  });
}
function Lu(e, t) {
  if (!e)
    throw new Error("Iterable cannot be null");
  return new on(function(n) {
    ur(n, t, function() {
      var r = e[Symbol.asyncIterator]();
      ur(n, t, function() {
        r.next().then(function(i) {
          i.done ? n.complete() : n.next(i.value);
        });
      }, 0, !0);
    });
  });
}
function Tp(e, t) {
  return Lu(Cu(e), t);
}
function Op(e, t) {
  if (e != null) {
    if (bu(e))
      return Ip(e, t);
    if (pu(e))
      return wp(e, t);
    if (mu(e))
      return xp(e, t);
    if (_u(e))
      return Lu(e, t);
    if (Su(e))
      return Lp(e, t);
    if (Au(e))
      return Tp(e, t);
  }
  throw yu(e);
}
function Rp(e, t) {
  return t ? Op(e, t) : xi(e);
}
function Hp() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t];
  var n = mp(e);
  return Rp(e, n);
}
function fn(e, t) {
  return _r(function(n, r) {
    var i = 0;
    n.subscribe(qr(r, function(a) {
      r.next(e.call(t, a, i++));
    }));
  });
}
function Dp(e, t, n, r, i, a, o, l) {
  var s = [], u = 0, c = 0, f = !1, v = function() {
    f && !s.length && !u && t.complete();
  }, h = function(p) {
    return u < r ? g(p) : s.push(p);
  }, g = function(p) {
    u++;
    var E = !1;
    xi(n(p, c++)).subscribe(qr(t, function(y) {
      t.next(y);
    }, function() {
      E = !0;
    }, void 0, function() {
      if (E)
        try {
          u--;
          for (var y = function() {
            var L = s.shift();
            o || g(L);
          }; s.length && u < r; )
            y();
          v();
        } catch (L) {
          t.error(L);
        }
    }));
  };
  return e.subscribe(qr(t, h, function() {
    f = !0, v();
  })), function() {
  };
}
function co(e, t, n) {
  return n === void 0 && (n = 1 / 0), rt(t) ? co(function(r, i) {
    return fn(function(a, o) {
      return t(r, a, i, o);
    })(xi(e(r, i)));
  }, n) : (typeof t == "number" && (n = t), _r(function(r, i) {
    return Dp(r, i, e, n);
  }));
}
function Pp(e, t) {
  return rt(t) ? co(e, t, 1) : co(e, 1);
}
function Us(e) {
  return e <= 0 ? function() {
    return vp;
  } : _r(function(t, n) {
    var r = 0;
    t.subscribe(qr(n, function(i) {
      ++r <= e && (n.next(i), e <= r && n.complete());
    }));
  });
}
function Fs(e) {
  return _r(function(t, n) {
    try {
      t.subscribe(n);
    } finally {
      n.add(e);
    }
  });
}
function Ns(e, t, n) {
  var r = rt(e) || t || n ? { next: e, error: t, complete: n } : e;
  return r ? _r(function(i, a) {
    var o;
    (o = r.subscribe) === null || o === void 0 || o.call(r);
    var l = !0;
    i.subscribe(qr(a, function(s) {
      var u;
      (u = r.next) === null || u === void 0 || u.call(r, s), a.next(s);
    }, function() {
      var s;
      l = !1, (s = r.complete) === null || s === void 0 || s.call(r), a.complete();
    }, function(s) {
      var u;
      l = !1, (u = r.error) === null || u === void 0 || u.call(r, s), a.error(s);
    }, function() {
      var s, u;
      l && ((s = r.unsubscribe) === null || s === void 0 || s.call(r)), (u = r.finalize) === null || u === void 0 || u.call(r);
    }));
  }) : gu;
}
function Tu(e) {
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
var Mp = /* @__PURE__ */ function() {
  function e(t, n, r, i) {
    i === void 0 && (i = "download_load"), this.originalEvent = t, this.xhr = n, this.request = r, this.type = i;
    var a = n.status, o = n.responseType;
    this.status = a ?? 0, this.responseType = o ?? "";
    var l = n.getAllResponseHeaders();
    this.responseHeaders = l ? l.split(`
`).reduce(function(c, f) {
      var v = f.indexOf(": ");
      return c[f.slice(0, v)] = f.slice(v + 2), c;
    }, {}) : {}, this.response = Tu(n);
    var s = t.loaded, u = t.total;
    this.loaded = s, this.total = u;
  }
  return e;
}(), na = fu(function(e) {
  return function(n, r, i) {
    this.message = n, this.name = "AjaxError", this.xhr = r, this.request = i, this.status = r.status, this.responseType = r.responseType;
    var a;
    try {
      a = Tu(r);
    } catch {
      a = r.responseText;
    }
    this.response = a;
  };
}), Bp = function() {
  function e(t, n) {
    return na.call(this, "ajax timeout", t, n), this.name = "AjaxTimeoutError", this;
  }
  return e.prototype = Object.create(na.prototype), e;
}();
function Up(e, t) {
  return yr({ method: "GET", url: e, headers: t });
}
function Fp(e, t, n) {
  return yr({ method: "POST", url: e, body: t, headers: n });
}
function Np(e, t) {
  return yr({ method: "DELETE", url: e, headers: t });
}
function kp(e, t, n) {
  return yr({ method: "PUT", url: e, body: t, headers: n });
}
function Gp(e, t, n) {
  return yr({ method: "PATCH", url: e, body: t, headers: n });
}
var jp = fn(function(e) {
  return e.response;
});
function Vp(e, t) {
  return jp(yr({
    method: "GET",
    url: e,
    headers: t
  }));
}
var yr = function() {
  var e = function(t) {
    var n = typeof t == "string" ? {
      url: t
    } : t;
    return zp(n);
  };
  return e.get = Up, e.post = Fp, e.delete = Np, e.put = kp, e.patch = Gp, e.getJSON = Vp, e;
}(), qp = "upload", ks = "download", Fa = "loadstart", Na = "progress", Gs = "load";
function zp(e) {
  return new on(function(t) {
    var n, r, i = K({ async: !0, crossDomain: !1, withCredentials: !1, method: "GET", timeout: 0, responseType: "json" }, e), a = i.queryParams, o = i.body, l = i.headers, s = i.url;
    if (!s)
      throw new TypeError("url is required");
    if (a) {
      var u;
      if (s.includes("?")) {
        var c = s.split("?");
        if (2 < c.length)
          throw new TypeError("invalid url");
        u = new URLSearchParams(c[1]), new URLSearchParams(a).forEach(function(O, N) {
          return u.set(N, O);
        }), s = c[0] + "?" + u;
      } else
        u = new URLSearchParams(a), s = s + "?" + u;
    }
    var f = {};
    if (l)
      for (var v in l)
        l.hasOwnProperty(v) && (f[v.toLowerCase()] = l[v]);
    var h = i.crossDomain;
    !h && !("x-requested-with" in f) && (f["x-requested-with"] = "XMLHttpRequest");
    var g = i.withCredentials, p = i.xsrfCookieName, E = i.xsrfHeaderName;
    if ((g || !h) && p && E) {
      var y = (r = (n = document == null ? void 0 : document.cookie.match(new RegExp("(^|;\\s*)(" + p + ")=([^;]*)"))) === null || n === void 0 ? void 0 : n.pop()) !== null && r !== void 0 ? r : "";
      y && (f[E] = y);
    }
    var L = Xp(o, f), x = K(K({}, i), {
      url: s,
      headers: f,
      body: L
    }), _;
    _ = e.createXHR ? e.createXHR() : new XMLHttpRequest();
    {
      var S = e.progressSubscriber, b = e.includeDownloadProgress, A = b === void 0 ? !1 : b, w = e.includeUploadProgress, R = w === void 0 ? !1 : w, P = function(O, N) {
        _.addEventListener(O, function() {
          var Y, U = N();
          (Y = S == null ? void 0 : S.error) === null || Y === void 0 || Y.call(S, U), t.error(U);
        });
      };
      P("timeout", function() {
        return new Bp(_, x);
      }), P("abort", function() {
        return new na("aborted", _, x);
      });
      var k = function(O, N) {
        return new Mp(N, _, x, O + "_" + N.type);
      }, X = function(O, N, Y) {
        O.addEventListener(N, function(U) {
          t.next(k(Y, U));
        });
      };
      R && [Fa, Na, Gs].forEach(function(O) {
        return X(_.upload, O, qp);
      }), S && [Fa, Na].forEach(function(O) {
        return _.upload.addEventListener(O, function(N) {
          var Y;
          return (Y = S == null ? void 0 : S.next) === null || Y === void 0 ? void 0 : Y.call(S, N);
        });
      }), A && [Fa, Na].forEach(function(O) {
        return X(_, O, ks);
      });
      var ee = function(O) {
        var N = "ajax error" + (O ? " " + O : "");
        t.error(new na(N, _, x));
      };
      _.addEventListener("error", function(O) {
        var N;
        (N = S == null ? void 0 : S.error) === null || N === void 0 || N.call(S, O), ee();
      }), _.addEventListener(Gs, function(O) {
        var N, Y, U = _.status;
        if (U < 400) {
          (N = S == null ? void 0 : S.complete) === null || N === void 0 || N.call(S);
          var C = void 0;
          try {
            C = k(ks, O);
          } catch (j) {
            t.error(j);
            return;
          }
          t.next(C), t.complete();
        } else
          (Y = S == null ? void 0 : S.error) === null || Y === void 0 || Y.call(S, O), ee(U);
      });
    }
    var he = x.user, H = x.method, D = x.async;
    he ? _.open(H, s, D, he, x.password) : _.open(H, s, D), D && (_.timeout = x.timeout, _.responseType = x.responseType), "withCredentials" in _ && (_.withCredentials = x.withCredentials);
    for (var v in f)
      f.hasOwnProperty(v) && _.setRequestHeader(v, f[v]);
    return L ? _.send(L) : _.send(), function() {
      _ && _.readyState !== 4 && _.abort();
    };
  });
}
function Xp(e, t) {
  var n;
  if (!e || typeof e == "string" || Jp(e) || $p(e) || Zp(e) || Yp(e) || Kp(e) || em(e))
    return e;
  if (Qp(e))
    return e.buffer;
  if (typeof e == "object")
    return t["content-type"] = (n = t["content-type"]) !== null && n !== void 0 ? n : "application/json;charset=utf-8", JSON.stringify(e);
  throw new TypeError("Unknown body type");
}
var Wp = Object.prototype.toString;
function Mo(e, t) {
  return Wp.call(e) === "[object " + t + "]";
}
function Zp(e) {
  return Mo(e, "ArrayBuffer");
}
function Yp(e) {
  return Mo(e, "File");
}
function Kp(e) {
  return Mo(e, "Blob");
}
function Qp(e) {
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView(e);
}
function Jp(e) {
  return typeof FormData < "u" && e instanceof FormData;
}
function $p(e) {
  return typeof URLSearchParams < "u" && e instanceof URLSearchParams;
}
function em(e) {
  return typeof ReadableStream < "u" && e instanceof ReadableStream;
}
class tm {
  constructor(t, n, r) {
    this.url = t, this.variableConfiguration = n, this.description = r;
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
    for (const n in this.variableConfiguration)
      if (this.variableConfiguration.hasOwnProperty(n)) {
        const r = new RegExp("{" + n + "}", "g");
        t = t.replace(r, this.variableConfiguration[n]);
      }
    return t;
  }
}
const nm = new tm("https://demo.compas.energy", {}, "DSOM Versatel Production URL"), rm = [nm], im = rm[0].getUrl();
class Ou {
  constructor(t = {}) {
    this.configuration = t;
  }
  get basePath() {
    return this.configuration.basePath ?? im;
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
class am {
  constructor(t = new Ou()) {
    this.configuration = t, this.middleware = [], this.withMiddleware = (n) => {
      const r = this.clone();
      return r.middleware = r.middleware.concat(n), r;
    }, this.withPreMiddleware = (n) => this.withMiddleware(n.map((r) => ({ pre: r }))), this.withPostMiddleware = (n) => this.withMiddleware(n.map((r) => ({ post: r }))), this.createRequestArgs = ({ url: n, query: r, method: i, headers: a, body: o, responseType: l }) => ({
      url: `${this.configuration.basePath}${n}${r && Object.keys(r).length ? `?${om(r)}` : ""}`,
      method: i,
      headers: a,
      body: o instanceof FormData ? o : JSON.stringify(o),
      responseType: l ?? "json"
    }), this.rxjsRequest = (n) => Hp(n).pipe(
      fn((r) => (this.middleware.filter((i) => i.pre).forEach((i) => r = i.pre(r)), r)),
      Pp(
        (r) => yr(r).pipe(
          fn((i) => (this.middleware.filter((a) => a.post).forEach((a) => i = a.post(i)), i))
        )
      )
    ), this.clone = () => Object.assign(Object.create(Object.getPrototypeOf(this)), this), this.middleware = t.middleware;
  }
  request(t, n) {
    return this.rxjsRequest(this.createRequestArgs(t)).pipe(
      fn((r) => {
        const { status: i, response: a } = r;
        if (i >= 200 && i < 300)
          return (n == null ? void 0 : n.response) === "raw" ? r : a;
        throw r;
      })
    );
  }
}
const nn = (e) => encodeURIComponent(`${e}`), om = (e) => Object.entries(e).map(
  ([t, n]) => n instanceof Array ? n.map((r) => `${nn(t)}=${nn(r)}`).join("&") : `${nn(t)}=${nn(n)}`
).join("&"), _n = (e, t, n) => {
  if (e == null)
    throw new Error(`Parameter "${t}" was null or undefined when calling "${n}".`);
};
class sm extends am {
  assignResourceToLocation({ locationId: t, uuid: n }, r) {
    _n(t, "locationId", "assignResourceToLocation"), _n(n, "uuid", "assignResourceToLocation");
    const i = {};
    return this.request({
      url: "/api/locations/{locationId}/resources/{uuid}/assign".replace("{locationId}", nn(t)).replace("{uuid}", nn(n)),
      method: "POST",
      headers: i
    }, r == null ? void 0 : r.responseOpts);
  }
  createLocation({ location: t }, n) {
    _n(t, "location", "createLocation");
    const r = {
      "Content-Type": "application/json"
    };
    return this.request({
      url: "/api/locations",
      method: "POST",
      headers: r,
      body: t
    }, n == null ? void 0 : n.responseOpts);
  }
  deleteLocation({ locationId: t }, n) {
    _n(t, "locationId", "deleteLocation");
    const r = {};
    return this.request({
      url: "/api/locations/{locationId}".replace("{locationId}", nn(t)),
      method: "DELETE",
      headers: r
    }, n == null ? void 0 : n.responseOpts);
  }
  getLocation({ locationId: t }, n) {
    _n(t, "locationId", "getLocation");
    const r = {};
    return this.request({
      url: "/api/locations/{locationId}".replace("{locationId}", nn(t)),
      method: "GET",
      headers: r
    }, n == null ? void 0 : n.responseOpts);
  }
  getLocations({ page: t, pageSize: n }, r) {
    const i = {}, a = {};
    return t != null && (a.page = t), n != null && (a.pageSize = n), this.request({
      url: "/api/locations",
      method: "GET",
      headers: i,
      query: a
    }, r == null ? void 0 : r.responseOpts);
  }
  unassignResourceFromLocation({ locationId: t, uuid: n }, r) {
    _n(t, "locationId", "unassignResourceFromLocation"), _n(n, "uuid", "unassignResourceFromLocation");
    const i = {};
    return this.request({
      url: "/api/locations/{locationId}/resources/{uuid}/unassign".replace("{locationId}", nn(t)).replace("{uuid}", nn(n)),
      method: "POST",
      headers: i
    }, r == null ? void 0 : r.responseOpts);
  }
  updateLocation({ locationId: t, location: n }, r) {
    _n(t, "locationId", "updateLocation"), _n(n, "location", "updateLocation");
    const i = {
      "Content-Type": "application/json"
    };
    return this.request({
      url: "/api/locations/{locationId}".replace("{locationId}", nn(t)),
      method: "PUT",
      headers: i,
      body: n
    }, r == null ? void 0 : r.responseOpts);
  }
}
class ui {
  constructor(t, n, r, i, a) {
    this.uuid = a, this.key = t, this.name = n, this.description = r, this.assignedResources = i;
  }
  static from(t) {
    return new ui(t.key, t.name, t.description, t.assignedResources, t.uuid);
  }
}
class Ir {
  constructor() {
    this.endpoint = "/compas-scl-data-service", this.locationsApiClient = this.createApiClient(this.endpoint);
  }
  static getInstance() {
    return Ir.instance || (Ir.instance = new Ir()), Ir.instance;
  }
  getLocations(t) {
    return this.locationsApiClient.getLocations({
      page: t == null ? void 0 : t.page,
      pageSize: t == null ? void 0 : t.pageSize
    }).pipe(
      fn((n) => n || []),
      fn((n) => n.map((r) => ui.from(r)))
    );
  }
  createLocation(t) {
    return this.locationsApiClient.createLocation({ location: t }).pipe(
      fn((n) => ui.from(n))
    );
  }
  deleteLocation(t) {
    return this.locationsApiClient.deleteLocation({ locationId: t }).pipe(fn(() => {
    }));
  }
  updateLocation(t) {
    return this.locationsApiClient.updateLocation({ locationId: t.locationId, location: t.location }).pipe(
      fn((n) => ui.from(n))
    );
  }
  createApiClient(t) {
    const n = new Ou({
      basePath: t
      // accessToken: authInfo.token,
    });
    return new sm(n);
  }
}
var En;
class lm {
  constructor() {
    Me(this, En, Lt([]));
  }
  get store() {
    return F(this, En);
  }
  set(t) {
    F(this, En).set(t);
  }
  update(t) {
    F(this, En).update((n) => n.map((r) => r.uuid === t.uuid ? t : r));
  }
  add(t) {
    F(this, En).update((n) => [...n, t]);
  }
  remove(t) {
    F(this, En).update((n) => n.filter((r) => r.uuid !== t));
  }
  findById(t) {
    return Ml(F(this, En)).find((n) => n.uuid === t);
  }
}
En = new WeakMap();
ah({ en: Uh, de: Eh });
var um = /* @__PURE__ */ J("<h3> </h3>"), cm = /* @__PURE__ */ J("<!> <!>", 1), dm = /* @__PURE__ */ J("<!> <!>", 1), fm = /* @__PURE__ */ J("<div><!> <!></div>"), hm = /* @__PURE__ */ J("<h3> </h3>"), vm = /* @__PURE__ */ J("<!> <!> <!> <!>", 1), gm = /* @__PURE__ */ J("<div><!></div>"), pm = /* @__PURE__ */ J("<!> <!>", 1), mm = /* @__PURE__ */ J("<!> <!>", 1), bm = /* @__PURE__ */ J("<div><!> <!></div>"), _m = /* @__PURE__ */ J("<!> <!>", 1), ym = /* @__PURE__ */ J("<!> <!>", 1), Em = /* @__PURE__ */ J('<h3 style="margin-bottom: 1rem;"> </h3> <!>', 1), Sm = /* @__PURE__ */ J('<div class="location-manager-container"><!> <!> <!> <div style="margin-top: 10px; margin-bottom: 10px"><!> <!></div> <div class="table-container"><!></div></div>');
function Cm(e, t) {
  Te(t, !0);
  const n = () => Cn(ih, "$_", r), [r, i] = Xn(), a = Ir.getInstance(), o = new lm(), l = {
    Closed: "closed",
    Update: "update",
    Create: "create",
    Remove: "remove"
  };
  let s = /* @__PURE__ */ De(!1), u = /* @__PURE__ */ De(be(l.Closed)), c = /* @__PURE__ */ De(!1), f = /* @__PURE__ */ De(be(v()));
  function v() {
    return {
      uuid: void 0,
      key: "",
      name: "",
      description: "",
      assignedResources: void 0
    };
  }
  let h = /* @__PURE__ */ me(() => [
    {
      headerName: n()("uuid"),
      field: "uuid",
      numeric: !1,
      filter: !0,
      filterType: "text",
      sortable: !1
    },
    {
      headerName: n()("key"),
      field: "key",
      numeric: !1,
      filter: !0,
      filterType: "text",
      sortable: !0
    },
    {
      headerName: n()("name"),
      field: "name",
      numeric: !1,
      filter: !0,
      filterType: "text",
      sortable: !0
    },
    {
      headerName: n()("description"),
      field: "description",
      numeric: !1,
      filter: !0,
      filterType: "text",
      sortable: !0
    },
    {
      headerName: n()("assigned_resources"),
      field: "assignedResources",
      numeric: !0,
      filter: !0,
      filterType: "number",
      sortable: !0
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
  ]), g = /* @__PURE__ */ De(!0);
  ht(() => {
    setTimeout(
      () => {
        $(g, !1);
      },
      1e3
    );
  });
  const p = [
    {
      icon: "edit",
      callback: (k) => E(k),
      disabled: () => !1
    },
    {
      icon: "delete",
      callback: (k) => L(k),
      disabled: () => !1
    }
  ];
  function E(k) {
    $(f, { ...k }, !0), $(c, !0), $(u, l.Update, !0);
  }
  function y() {
    $(f, { ...v() }, !0), $(c, !0), $(u, l.Create, !0);
  }
  function L(k) {
    $(f, { ...k }, !0), $(c, !0), $(u, l.Remove, !0);
  }
  function x() {
    var k;
    try {
      const X = ((k = d(f)) == null ? void 0 : k.uuid) !== void 0 && d(f).uuid !== "";
      (X ? a.updateLocation({
        locationId: d(f).uuid,
        location: d(f)
      }) : a.createLocation(d(f))).pipe(
        Us(1),
        Ns((he) => {
          X ? o.update(he) : o.add(he);
        }),
        Fs(S)
      ).subscribe();
    } catch (X) {
      console.error("Error saving location", X);
    }
  }
  function _() {
    a.deleteLocation(d(f).uuid).subscribe({
      next: () => {
        o.remove(d(f).uuid), S();
      }
    });
  }
  function S() {
    $(u, l.Closed, !0), $(c, !1), $(f, { ...v() }, !0);
  }
  function b() {
    $(s, !1), a.getLocations().pipe(
      Us(1),
      Ns((k) => {
        o.set(k);
      }),
      Fs(() => {
        $(s, !0);
      })
    ).subscribe();
  }
  ht(() => {
    b();
  });
  var A = W(), w = V(A);
  {
    var R = (k) => {
      {
        let X = /* @__PURE__ */ me(() => !d(g));
        Ts(k, {
          get loadingDone() {
            return d(X);
          }
        });
      }
    }, P = (k) => {
      var X = Sm(), ee = ce(X);
      Ts(ee, {
        get loadingDone() {
          return d(s);
        }
      });
      var he = re(ee, 2);
      {
        const C = (de) => {
          var le = um(), Z = ce(le);
          Se((te) => tt(Z, te), [
            () => {
              var te;
              return n()("delete_location", { values: { name: (te = d(f)) == null ? void 0 : te.name } });
            }
          ]), I(de, le);
        }, j = (de) => {
          var le = fm(), Z = ce(le);
          er(Z, {
            callback: _,
            variant: "raised",
            children: (ue, _e) => {
              var Pe = cm(), ne = V(Pe);
              Ls(ne, {});
              var xe = re(ne, 2);
              Qn(xe, {
                children: (we, ge) => {
                  var Ie = Et();
                  Se((ye) => tt(Ie, ye), [() => n()("confirm")]), I(we, Ie);
                },
                $$slots: { default: !0 }
              }), I(ue, Pe);
            },
            $$slots: { default: !0 }
          });
          var te = re(Z, 2);
          er(te, {
            callback: S,
            variant: "raised",
            isAbortAction: !0,
            children: (ue, _e) => {
              var Pe = dm(), ne = V(Pe);
              so(ne, {});
              var xe = re(ne, 2);
              Qn(xe, {
                children: (we, ge) => {
                  var Ie = Et();
                  Se((ye) => tt(Ie, ye), [() => n()("cancel")]), I(we, Ie);
                },
                $$slots: { default: !0 }
              }), I(ue, Pe);
            },
            $$slots: { default: !0 }
          }), I(de, le);
        };
        let ve = /* @__PURE__ */ me(() => d(u) === l.Remove);
        xs(he, {
          get open() {
            return d(ve);
          },
          onClose: S,
          title: C,
          actions: j,
          $$slots: { title: !0, actions: !0 }
        });
      }
      var H = re(he, 2);
      {
        const C = (le) => {
          var Z = hm(), te = ce(Z);
          Se((ue) => tt(te, ue), [
            () => {
              var ue;
              return d(u) === l.Update ? n()("location", { values: { name: (ue = d(f)) == null ? void 0 : ue.name } }) : n()("new_location");
            }
          ]), I(le, Z);
        }, j = (le) => {
          var Z = gm(), te = ce(Z);
          {
            var ue = (_e) => {
              var Pe = vm(), ne = V(Pe);
              {
                var xe = (ye) => {
                  Qn(ye, {
                    children: (Fe, Mt) => {
                      var T = Et();
                      Se(() => tt(T, d(f).uuid)), I(Fe, T);
                    },
                    $$slots: { default: !0 }
                  });
                };
                ae(ne, (ye) => {
                  d(u) === l.Update && ye(xe);
                });
              }
              var we = re(ne, 2);
              {
                let ye = /* @__PURE__ */ me(() => n()("name"));
                Da(we, {
                  get label() {
                    return d(ye);
                  },
                  get value() {
                    return d(f).name;
                  },
                  set value(Fe) {
                    d(f).name = Fe;
                  }
                });
              }
              var ge = re(we, 2);
              {
                let ye = /* @__PURE__ */ me(() => n()("key"));
                Da(ge, {
                  get label() {
                    return d(ye);
                  },
                  get value() {
                    return d(f).key;
                  },
                  set value(Fe) {
                    d(f).key = Fe;
                  }
                });
              }
              var Ie = re(ge, 2);
              {
                let ye = /* @__PURE__ */ me(() => n()("description"));
                Da(Ie, {
                  get label() {
                    return d(ye);
                  },
                  get value() {
                    return d(f).description;
                  },
                  set value(Fe) {
                    d(f).description = Fe;
                  }
                });
              }
              I(_e, Pe);
            };
            ae(te, (_e) => {
              d(f) && _e(ue);
            });
          }
          I(le, Z);
        }, ve = (le) => {
          var Z = bm(), te = ce(Z);
          er(te, {
            callback: x,
            variant: "raised",
            children: (_e, Pe) => {
              var ne = pm(), xe = V(ne);
              Ls(xe, {});
              var we = re(xe, 2);
              Qn(we, {
                children: (ge, Ie) => {
                  var ye = Et();
                  Se((Fe) => tt(ye, Fe), [() => n()("save")]), I(ge, ye);
                },
                $$slots: { default: !0 }
              }), I(_e, ne);
            },
            $$slots: { default: !0 }
          });
          var ue = re(te, 2);
          er(ue, {
            callback: S,
            variant: "raised",
            isAbortAction: !0,
            children: (_e, Pe) => {
              var ne = mm(), xe = V(ne);
              so(xe, {});
              var we = re(xe, 2);
              Qn(we, {
                children: (ge, Ie) => {
                  var ye = Et();
                  Se((Fe) => tt(ye, Fe), [() => n()("cancel")]), I(ge, ye);
                },
                $$slots: { default: !0 }
              }), I(_e, ne);
            },
            $$slots: { default: !0 }
          }), I(le, Z);
        };
        let de = /* @__PURE__ */ me(() => d(u) === l.Update || d(u) === l.Create);
        xs(H, {
          get open() {
            return d(de);
          },
          onClose: S,
          title: C,
          content: j,
          actions: ve,
          $$slots: { title: !0, content: !0, actions: !0 }
        });
      }
      var D = re(H, 2), O = ce(D);
      er(O, {
        class: "button",
        callback: y,
        variant: "raised",
        children: (C, j) => {
          var ve = _m(), de = V(ve);
          cu(de, {});
          var le = re(de, 2);
          Qn(le, {
            children: (Z, te) => {
              var ue = Et();
              Se((_e) => tt(ue, _e), [() => n()("add_location")]), I(Z, ue);
            },
            $$slots: { default: !0 }
          }), I(C, ve);
        },
        $$slots: { default: !0 }
      });
      var N = re(O, 2);
      er(N, {
        class: "button",
        callback: b,
        variant: "raised",
        children: (C, j) => {
          var ve = ym(), de = V(ve);
          du(de, {});
          var le = re(de, 2);
          Qn(le, {
            children: (Z, te) => {
              var ue = Et();
              Se((_e) => tt(ue, _e), [() => n()("refresh")]), I(Z, ue);
            },
            $$slots: { default: !0 }
          }), I(C, ve);
        },
        $$slots: { default: !0 }
      });
      var Y = re(D, 2), U = ce(Y);
      np(U, {
        style: "padding: 1rem; width: 100%; height: 100%;",
        children: (C, j) => {
          var ve = Em(), de = V(ve), le = ce(de), Z = re(de, 2);
          {
            let te = /* @__PURE__ */ me(() => n()("search"));
            ep(Z, {
              get columnDefs() {
                return d(h);
              },
              get store() {
                return o;
              },
              get loadingDone() {
                return d(s);
              },
              get rowActions() {
                return p;
              },
              get searchInputLabel() {
                return d(te);
              }
            });
          }
          Se((te) => tt(le, te), [() => n()("location_table")]), I(C, ve);
        },
        $$slots: { default: !0 }
      }), I(k, X);
    };
    ae(w, (k) => {
      d(g) ? k(R) : k(P, !1);
    });
  }
  I(e, A), Oe(), i();
}
const Ru = "location-manager", Hu = "0.0.1";
var Am = /* @__PURE__ */ J('<!> <input type="hidden" name="package-name"/> <input type="hidden" name="package-version"/>', 1);
function Im(e, t) {
  Te(t, !0);
  let n = m(t, "dev", 3, !1);
  var r = Am(), i = V(r);
  {
    var a = (s) => {
      Cm(s, {});
    };
    ae(i, (s) => {
      (t.doc || n()) && s(a);
    });
  }
  var o = re(i, 2), l = re(o, 2);
  Se(() => {
    Ko(o, Ru), Ko(l, Hu);
  }), I(e, r), Oe();
}
var Pr;
class Om extends HTMLElement {
  constructor() {
    super();
    Me(this, Pr);
    fe(this, Pr, /* @__PURE__ */ De(be({ doc: void 0, editCount: void 0 })));
  }
  get props() {
    return d(F(this, Pr));
  }
  set props(n) {
    $(F(this, Pr), n, !0);
  }
  connectedCallback() {
    var r;
    this.attachShadow({ mode: "open" }), this.props.doc = this._doc, this.props.editCount = this.editCount, Wc(Im, { target: this.shadowRoot, props: this.props });
    const n = xm();
    (r = this.shadowRoot) == null || r.appendChild(n);
  }
  set doc(n) {
    this._doc = n, this.props.doc = n;
  }
  set editCount(n) {
    this._editCount = n, this.props.editCount = n;
  }
}
Pr = new WeakMap();
function xm() {
  const e = `${Ru}-v${Hu}-style`, t = wm(), n = document.createElement("link");
  return n.rel = "stylesheet", n.type = "text/css", n.href = t, n.id = e, n;
}
function wm() {
  const e = new URL(import.meta.url), t = e.origin, n = e.pathname.split("/").slice(0, -1).filter(Boolean).join("/");
  return [t, n, "style.css"].filter(Boolean).join("/");
}
export {
  Om as default
};
