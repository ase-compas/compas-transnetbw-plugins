var Mu = Object.defineProperty;
var Uo = (e) => {
  throw TypeError(e);
};
var Bu = (e, t, n) => t in e ? Mu(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Ar = (e, t, n) => Bu(e, typeof t != "symbol" ? t + "" : t, n), Ea = (e, t, n) => t.has(e) || Uo("Cannot " + n);
var k = (e, t, n) => (Ea(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Me = (e, t, n) => t.has(e) ? Uo("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), ge = (e, t, n, r) => (Ea(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), yt = (e, t, n) => (Ea(e, t, "access private method"), n);
const lt = Symbol(), Uu = "http://www.w3.org/1999/xhtml", Fu = "http://www.w3.org/2000/svg", Nu = "@attach", qs = !1;
var sa = Array.isArray, ku = Array.prototype.indexOf, vo = Array.from, Zi = Object.defineProperty, kn = Object.getOwnPropertyDescriptor, zs = Object.getOwnPropertyDescriptors, Gu = Object.prototype, ju = Array.prototype, go = Object.getPrototypeOf, Fo = Object.isExtensible;
function ni(e) {
  return typeof e == "function";
}
const $ = () => {
};
function Xs(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function Ws() {
  var e, t, n = new Promise((r, i) => {
    e = r, t = i;
  });
  return { promise: n, resolve: e, reject: t };
}
const Ht = 2, po = 4, mo = 8, vr = 16, xn = 32, gr = 64, bo = 128, Yt = 256, Yi = 512, Ct = 1024, Vt = 2048, zn = 4096, sn = 8192, pr = 16384, _o = 32768, mr = 65536, No = 1 << 17, Vu = 1 << 18, Zr = 1 << 19, qu = 1 << 20, Ga = 1 << 21, la = 1 << 22, ur = 1 << 23, gn = Symbol("$state"), Zs = Symbol("legacy props"), zu = Symbol(""), wr = new class extends Error {
  constructor() {
    super(...arguments);
    Ar(this, "name", "StaleReactionError");
    Ar(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
function yo(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function Xu() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function Wu(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Zu() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Yu(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Ku() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Qu(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Ju() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function $u() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function ec() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function tc() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
function nc() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function rc() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let ic = !1;
function Ys(e) {
  return e === this.v;
}
function Eo(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Ks(e) {
  return !Eo(e, this.v);
}
let Yr = !1, ac = !1;
function oc() {
  Yr = !0;
}
let ze = null;
function Fr(e) {
  ze = e;
}
function be(e) {
  return (
    /** @type {T} */
    Qs().get(e)
  );
}
function ue(e, t) {
  return Qs().set(e, t), t;
}
function Te(e, t = !1, n) {
  ze = {
    p: ze,
    c: null,
    e: null,
    s: e,
    x: null,
    l: Yr && !t ? { s: null, u: null, $: [] } : null
  };
}
function Oe(e) {
  var t = (
    /** @type {ComponentContext} */
    ze
  ), n = t.e;
  if (n !== null) {
    t.e = null;
    for (var r of n)
      hl(r);
  }
  return e !== void 0 && (t.x = e), ze = t.p, e ?? /** @type {T} */
  {};
}
function Ei() {
  return !Yr || ze !== null && ze.l === null;
}
function Qs(e) {
  return ze === null && yo(), ze.c ?? (ze.c = new Map(sc(ze) || void 0));
}
function sc(e) {
  let t = e.p;
  for (; t !== null; ) {
    const n = t.c;
    if (n !== null)
      return n;
    t = t.p;
  }
  return null;
}
let rr = [];
function Js() {
  var e = rr;
  rr = [], Xs(e);
}
function qn(e) {
  if (rr.length === 0 && !di) {
    var t = rr;
    queueMicrotask(() => {
      t === rr && Js();
    });
  }
  rr.push(e);
}
function lc() {
  for (; rr.length > 0; )
    Js();
}
const uc = /* @__PURE__ */ new WeakMap();
function $s(e) {
  var t = we;
  if (t === null)
    return Ie.f |= ur, e;
  if (t.f & _o)
    Nr(e, t);
  else {
    if (!(t.f & bo))
      throw !t.parent && e instanceof Error && el(e), e;
    t.b.error(e);
  }
}
function Nr(e, t) {
  for (; t !== null; ) {
    if (t.f & bo)
      try {
        t.b.error(e);
        return;
      } catch (n) {
        e = n;
      }
    t = t.parent;
  }
  throw e instanceof Error && el(e), e;
}
function el(e) {
  const t = uc.get(e);
  t && (Zi(e, "message", {
    value: t.message
  }), Zi(e, "stack", {
    value: t.stack
  }));
}
const Ri = /* @__PURE__ */ new Set();
let ke = null, ji = null, vt = null, ja = /* @__PURE__ */ new Set(), hn = [], ua = null, Va = !1, di = !1;
var Hr, Dr, ir, bi, Pr, Mr, ar, Br, _i, yi, Kt, qa, Vi, za;
const ia = class ia {
  constructor() {
    Me(this, Kt);
    /**
     * The current values of any sources that are updated in this batch
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Source, any>}
     */
    Ar(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any sources that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Source, any>}
     */
    Me(this, Hr, /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<() => void>}
     */
    Me(this, Dr, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    Me(this, ir, 0);
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    Me(this, bi, null);
    /**
     * Async effects inside a newly-created `<svelte:boundary>`
     * — these do not prevent the batch from committing
     * @type {Effect[]}
     */
    Me(this, Pr, []);
    /**
     * Template effects and `$effect.pre` effects, which run when
     * a batch is committed
     * @type {Effect[]}
     */
    Me(this, Mr, []);
    /**
     * The same as `#render_effects`, but for `$effect` (which runs after)
     * @type {Effect[]}
     */
    Me(this, ar, []);
    /**
     * Block effects, which may need to re-run on subsequent flushes
     * in order to update internal sources (e.g. each block items)
     * @type {Effect[]}
     */
    Me(this, Br, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Effect[]}
     */
    Me(this, _i, []);
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Effect[]}
     */
    Me(this, yi, []);
    /**
     * A set of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`
     * @type {Set<Effect>}
     */
    Ar(this, "skipped_effects", /* @__PURE__ */ new Set());
  }
  /**
   *
   * @param {Effect[]} root_effects
   */
  process(t) {
    var a;
    hn = [], ji = null, this.apply();
    for (const o of t)
      yt(this, Kt, qa).call(this, o);
    if (k(this, ir) === 0) {
      var n = vt;
      yt(this, Kt, za).call(this);
      var r = k(this, Mr), i = k(this, ar);
      ge(this, Mr, []), ge(this, ar, []), ge(this, Br, []), ji = this, ke = null, vt = n, ko(r), ko(i), ji = null, (a = k(this, bi)) == null || a.resolve();
    } else
      yt(this, Kt, Vi).call(this, k(this, Mr)), yt(this, Kt, Vi).call(this, k(this, ar)), yt(this, Kt, Vi).call(this, k(this, Br));
    vt = null;
    for (const o of k(this, Pr))
      gi(o);
    ge(this, Pr, []);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Source} source
   * @param {any} value
   */
  capture(t, n) {
    k(this, Hr).has(t) || k(this, Hr).set(t, n), this.current.set(t, t.v), vt == null || vt.set(t, t.v);
  }
  activate() {
    ke = this;
  }
  deactivate() {
    ke = null, vt = null;
  }
  flush() {
    if (hn.length > 0) {
      if (this.activate(), tl(), ke !== null && ke !== this)
        return;
    } else k(this, ir) === 0 && yt(this, Kt, za).call(this);
    this.deactivate();
    for (const t of ja)
      if (ja.delete(t), t(), ke !== null)
        break;
  }
  increment() {
    ge(this, ir, k(this, ir) + 1);
  }
  decrement() {
    ge(this, ir, k(this, ir) - 1);
    for (const t of k(this, _i))
      Tt(t, Vt), fr(t);
    for (const t of k(this, yi))
      Tt(t, zn), fr(t);
    this.flush();
  }
  /** @param {() => void} fn */
  add_callback(t) {
    k(this, Dr).add(t);
  }
  settled() {
    return (k(this, bi) ?? ge(this, bi, Ws())).promise;
  }
  static ensure() {
    if (ke === null) {
      const t = ke = new ia();
      Ri.add(ke), di || ia.enqueue(() => {
        ke === t && t.flush();
      });
    }
    return ke;
  }
  /** @param {() => void} task */
  static enqueue(t) {
    qn(t);
  }
  apply() {
  }
};
Hr = new WeakMap(), Dr = new WeakMap(), ir = new WeakMap(), bi = new WeakMap(), Pr = new WeakMap(), Mr = new WeakMap(), ar = new WeakMap(), Br = new WeakMap(), _i = new WeakMap(), yi = new WeakMap(), Kt = new WeakSet(), /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 */
qa = function(t) {
  var s;
  t.f ^= Ct;
  for (var n = t.first; n !== null; ) {
    var r = n.f, i = (r & (xn | gr)) !== 0, a = i && (r & Ct) !== 0, o = a || (r & sn) !== 0 || this.skipped_effects.has(n);
    if (!o && n.fn !== null) {
      i ? n.f ^= Ct : r & po ? k(this, ar).push(n) : r & Ct || (r & la && ((s = n.b) != null && s.is_pending()) ? k(this, Pr).push(n) : ga(n) && (n.f & vr && k(this, Br).push(n), gi(n)));
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
Vi = function(t) {
  for (const n of t)
    (n.f & Vt ? k(this, _i) : k(this, yi)).push(n), Tt(n, Ct);
  t.length = 0;
}, /**
 * Append and remove branches to/from the DOM
 */
za = function() {
  var t;
  for (const n of k(this, Dr))
    n();
  if (k(this, Dr).clear(), Ri.size > 1) {
    k(this, Hr).clear();
    let n = !0;
    for (const r of Ri) {
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
          nl(o, a);
        if (hn.length > 0) {
          ke = r, r.apply();
          for (const o of hn)
            yt(t = r, Kt, qa).call(t, o);
          hn = [], r.deactivate();
        }
      }
    }
    ke = null;
  }
  Ri.delete(this);
};
let An = ia;
function cc(e) {
  var t = di;
  di = !0;
  try {
    for (var n; ; ) {
      if (lc(), hn.length === 0 && (ke == null || ke.flush(), hn.length === 0))
        return ua = null, /** @type {T} */
        n;
      tl();
    }
  } finally {
    di = t;
  }
}
function tl() {
  var e = Tr;
  Va = !0;
  try {
    var t = 0;
    for (Vo(!0); hn.length > 0; ) {
      var n = An.ensure();
      if (t++ > 1e3) {
        var r, i;
        dc();
      }
      n.process(hn), Gn.clear();
    }
  } finally {
    Va = !1, Vo(e), ua = null;
  }
}
function dc() {
  try {
    Ku();
  } catch (e) {
    Nr(e, ua);
  }
}
let Sn = null;
function ko(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t; ) {
      var r = e[n++];
      if (!(r.f & (pr | sn)) && ga(r) && (Sn = [], gi(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null && r.ac === null ? pl(r) : r.fn = null), (Sn == null ? void 0 : Sn.length) > 0)) {
        Gn.clear();
        for (const i of Sn)
          gi(i);
        Sn = [];
      }
    }
    Sn = null;
  }
}
function nl(e, t) {
  if (e.reactions !== null)
    for (const n of e.reactions) {
      const r = n.f;
      r & Ht ? nl(
        /** @type {Derived} */
        n,
        t
      ) : r & (la | vr) && rl(n, t) && (Tt(n, Vt), fr(
        /** @type {Effect} */
        n
      ));
    }
}
function rl(e, t) {
  if (e.deps !== null) {
    for (const n of e.deps)
      if (t.includes(n) || n.f & Ht && rl(
        /** @type {Derived} */
        n,
        t
      ))
        return !0;
  }
  return !1;
}
function fr(e) {
  for (var t = ua = e; t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if (Va && t === we && n & vr)
      return;
    if (n & (gr | xn)) {
      if (!(n & Ct)) return;
      t.f ^= Ct;
    }
  }
  hn.push(t);
}
function fc(e) {
  let t = 0, n = hr(0), r;
  return () => {
    Oc() && (c(n), ha(() => (t === 0 && (r = Zn(() => e(() => fi(n)))), t += 1, () => {
      qn(() => {
        t -= 1, t === 0 && (r == null || r(), r = void 0, fi(n));
      });
    })));
  };
}
var hc = mr | Zr | bo;
function vc(e, t, n) {
  new gc(e, t, n);
}
var nn, Wt, ho, cn, or, dn, Zt, Bt, fn, Dn, sr, Pn, lr, Mn, aa, oa, Rt, pc, mc, qi, zi, Xa;
class gc {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   */
  constructor(t, n, r) {
    Me(this, Rt);
    /** @type {Boundary | null} */
    Ar(this, "parent");
    Me(this, nn, !1);
    /** @type {TemplateNode} */
    Me(this, Wt);
    /** @type {TemplateNode | null} */
    Me(this, ho, null);
    /** @type {BoundaryProps} */
    Me(this, cn);
    /** @type {((anchor: Node) => void)} */
    Me(this, or);
    /** @type {Effect} */
    Me(this, dn);
    /** @type {Effect | null} */
    Me(this, Zt, null);
    /** @type {Effect | null} */
    Me(this, Bt, null);
    /** @type {Effect | null} */
    Me(this, fn, null);
    /** @type {DocumentFragment | null} */
    Me(this, Dn, null);
    Me(this, sr, 0);
    Me(this, Pn, 0);
    Me(this, lr, !1);
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    Me(this, Mn, null);
    Me(this, aa, () => {
      k(this, Mn) && kr(k(this, Mn), k(this, sr));
    });
    Me(this, oa, fc(() => (ge(this, Mn, hr(k(this, sr))), () => {
      ge(this, Mn, null);
    })));
    ge(this, Wt, t), ge(this, cn, n), ge(this, or, r), this.parent = /** @type {Effect} */
    we.b, ge(this, nn, !!k(this, cn).pending), ge(this, dn, Wn(() => {
      we.b = this;
      {
        try {
          ge(this, Zt, Et(() => r(k(this, Wt))));
        } catch (i) {
          this.error(i);
        }
        k(this, Pn) > 0 ? yt(this, Rt, zi).call(this) : ge(this, nn, !1);
      }
    }, hc));
  }
  /**
   * Returns `true` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_pending() {
    return k(this, nn) || !!this.parent && this.parent.is_pending();
  }
  has_pending_snippet() {
    return !!k(this, cn).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   */
  update_pending_count(t) {
    yt(this, Rt, Xa).call(this, t), ge(this, sr, k(this, sr) + t), ja.add(k(this, aa));
  }
  get_effect_pending() {
    return k(this, oa).call(this), c(
      /** @type {Source<number>} */
      k(this, Mn)
    );
  }
  /** @param {unknown} error */
  error(t) {
    var n = k(this, cn).onerror;
    let r = k(this, cn).failed;
    if (k(this, lr) || !n && !r)
      throw t;
    k(this, Zt) && (gt(k(this, Zt)), ge(this, Zt, null)), k(this, Bt) && (gt(k(this, Bt)), ge(this, Bt, null)), k(this, fn) && (gt(k(this, fn)), ge(this, fn, null));
    var i = !1, a = !1;
    const o = () => {
      if (i) {
        rc();
        return;
      }
      i = !0, a && tc(), An.ensure(), ge(this, sr, 0), k(this, fn) !== null && jn(k(this, fn), () => {
        ge(this, fn, null);
      }), ge(this, nn, this.has_pending_snippet()), ge(this, Zt, yt(this, Rt, qi).call(this, () => (ge(this, lr, !1), Et(() => k(this, or).call(this, k(this, Wt)))))), k(this, Pn) > 0 ? yt(this, Rt, zi).call(this) : ge(this, nn, !1);
    };
    var u = Ie;
    try {
      Ut(null), a = !0, n == null || n(t, o), a = !1;
    } catch (l) {
      Nr(l, k(this, dn) && k(this, dn).parent);
    } finally {
      Ut(u);
    }
    r && qn(() => {
      ge(this, fn, yt(this, Rt, qi).call(this, () => {
        ge(this, lr, !0);
        try {
          return Et(() => {
            r(
              k(this, Wt),
              () => t,
              () => o
            );
          });
        } catch (l) {
          return Nr(
            l,
            /** @type {Effect} */
            k(this, dn).parent
          ), null;
        } finally {
          ge(this, lr, !1);
        }
      }));
    });
  }
}
nn = new WeakMap(), Wt = new WeakMap(), ho = new WeakMap(), cn = new WeakMap(), or = new WeakMap(), dn = new WeakMap(), Zt = new WeakMap(), Bt = new WeakMap(), fn = new WeakMap(), Dn = new WeakMap(), sr = new WeakMap(), Pn = new WeakMap(), lr = new WeakMap(), Mn = new WeakMap(), aa = new WeakMap(), oa = new WeakMap(), Rt = new WeakSet(), pc = function() {
  try {
    ge(this, Zt, Et(() => k(this, or).call(this, k(this, Wt))));
  } catch (t) {
    this.error(t);
  }
  ge(this, nn, !1);
}, mc = function() {
  const t = k(this, cn).pending;
  t && (ge(this, Bt, Et(() => t(k(this, Wt)))), An.enqueue(() => {
    ge(this, Zt, yt(this, Rt, qi).call(this, () => (An.ensure(), Et(() => k(this, or).call(this, k(this, Wt)))))), k(this, Pn) > 0 ? yt(this, Rt, zi).call(this) : (jn(
      /** @type {Effect} */
      k(this, Bt),
      () => {
        ge(this, Bt, null);
      }
    ), ge(this, nn, !1));
  }));
}, /**
 * @param {() => Effect | null} fn
 */
qi = function(t) {
  var n = we, r = Ie, i = ze;
  pn(k(this, dn)), Ut(k(this, dn)), Fr(k(this, dn).ctx);
  try {
    return t();
  } catch (a) {
    return $s(a), null;
  } finally {
    pn(n), Ut(r), Fr(i);
  }
}, zi = function() {
  const t = (
    /** @type {(anchor: Node) => void} */
    k(this, cn).pending
  );
  k(this, Zt) !== null && (ge(this, Dn, document.createDocumentFragment()), bc(k(this, Zt), k(this, Dn))), k(this, Bt) === null && ge(this, Bt, Et(() => t(k(this, Wt))));
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 */
Xa = function(t) {
  var n;
  if (!this.has_pending_snippet()) {
    this.parent && yt(n = this.parent, Rt, Xa).call(n, t);
    return;
  }
  ge(this, Pn, k(this, Pn) + t), k(this, Pn) === 0 && (ge(this, nn, !1), k(this, Bt) && jn(k(this, Bt), () => {
    ge(this, Bt, null);
  }), k(this, Dn) && (k(this, Wt).before(k(this, Dn)), ge(this, Dn, null)), qn(() => {
    An.ensure().flush();
  }));
};
function bc(e, t) {
  for (var n = e.nodes_start, r = e.nodes_end; n !== null; ) {
    var i = n === r ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Si(n)
    );
    t.append(n), n = i;
  }
}
function il(e, t, n) {
  const r = Ei() ? ca : So;
  if (t.length === 0) {
    n(e.map(r));
    return;
  }
  var i = ke, a = (
    /** @type {Effect} */
    we
  ), o = _c();
  Promise.all(t.map((u) => /* @__PURE__ */ yc(u))).then((u) => {
    o();
    try {
      n([...e.map(r), ...u]);
    } catch (l) {
      a.f & pr || Nr(l, a);
    }
    i == null || i.deactivate(), Wa();
  }).catch((u) => {
    Nr(u, a);
  });
}
function _c() {
  var e = we, t = Ie, n = ze, r = ke;
  return function() {
    pn(e), Ut(t), Fr(n), r == null || r.activate();
  };
}
function Wa() {
  pn(null), Ut(null), Fr(null);
}
// @__NO_SIDE_EFFECTS__
function ca(e) {
  var t = Ht | Vt, n = Ie !== null && Ie.f & Ht ? (
    /** @type {Derived} */
    Ie
  ) : null;
  return we === null || n !== null && n.f & Yt ? t |= Yt : we.f |= Zr, {
    ctx: ze,
    deps: null,
    effects: null,
    equals: Ys,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      lt
    ),
    wv: 0,
    parent: n ?? we,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function yc(e, t) {
  let n = (
    /** @type {Effect | null} */
    we
  );
  n === null && Xu();
  var r = (
    /** @type {Boundary} */
    n.b
  ), i = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), a = hr(
    /** @type {V} */
    lt
  ), o = !Ie, u = /* @__PURE__ */ new Map();
  return Hc(() => {
    var v;
    var l = Ws();
    i = l.promise;
    try {
      Promise.resolve(e()).then(l.resolve, l.reject).then(Wa);
    } catch (h) {
      l.reject(h), Wa();
    }
    var s = (
      /** @type {Batch} */
      ke
    ), d = r.is_pending();
    o && (r.update_pending_count(1), d || (s.increment(), (v = u.get(s)) == null || v.reject(wr), u.delete(s), u.set(s, l)));
    const f = (h, g = void 0) => {
      if (d || s.activate(), g)
        g !== wr && (a.f |= ur, kr(a, g));
      else {
        a.f & ur && (a.f ^= ur), kr(a, h);
        for (const [p, y] of u) {
          if (u.delete(p), p === s) break;
          y.reject(wr);
        }
      }
      o && (r.update_pending_count(-1), d || s.decrement());
    };
    l.promise.then(f, (h) => f(null, h || "unknown"));
  }), fa(() => {
    for (const l of u.values())
      l.reject(wr);
  }), new Promise((l) => {
    function s(d) {
      function f() {
        d === i ? l(a) : s(i);
      }
      d.then(f, f);
    }
    s(i);
  });
}
// @__NO_SIDE_EFFECTS__
function pe(e) {
  const t = /* @__PURE__ */ ca(e);
  return _l(t), t;
}
// @__NO_SIDE_EFFECTS__
function So(e) {
  const t = /* @__PURE__ */ ca(e);
  return t.equals = Ks, t;
}
function al(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1)
      gt(
        /** @type {Effect} */
        t[n]
      );
  }
}
function Ec(e) {
  for (var t = e.parent; t !== null; ) {
    if (!(t.f & Ht))
      return (
        /** @type {Effect} */
        t
      );
    t = t.parent;
  }
  return null;
}
function Co(e) {
  var t, n = we;
  pn(Ec(e));
  try {
    al(e), t = Cl(e);
  } finally {
    pn(n);
  }
  return t;
}
function ol(e) {
  var t = Co(e);
  if (e.equals(t) || (e.v = t, e.wv = El()), !br)
    if (vt !== null)
      vt.set(e, e.v);
    else {
      var n = (Bn || e.f & Yt) && e.deps !== null ? zn : Ct;
      Tt(e, n);
    }
}
const Gn = /* @__PURE__ */ new Map();
function hr(e, t) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: Ys,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function ye(e, t) {
  const n = hr(e);
  return _l(n), n;
}
// @__NO_SIDE_EFFECTS__
function sl(e, t = !1, n = !0) {
  var i;
  const r = hr(e);
  return t || (r.equals = Ks), Yr && n && ze !== null && ze.l !== null && ((i = ze.l).s ?? (i.s = [])).push(r), r;
}
function z(e, t, n = !1) {
  Ie !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!on || Ie.f & No) && Ei() && Ie.f & (Ht | vr | la | No) && !(Lt != null && Lt.includes(e)) && ec();
  let r = n ? _e(t) : t;
  return kr(e, r);
}
function kr(e, t) {
  if (!e.equals(t)) {
    var n = e.v;
    br ? Gn.set(e, t) : Gn.set(e, n), e.v = t;
    var r = An.ensure();
    r.capture(e, n), e.f & Ht && (e.f & Vt && Co(
      /** @type {Derived} */
      e
    ), Tt(e, e.f & Yt ? zn : Ct)), e.wv = El(), ll(e, Vt), Ei() && we !== null && we.f & Ct && !(we.f & (xn | gr)) && (Xt === null ? Mc([e]) : Xt.push(e));
  }
  return t;
}
function fi(e) {
  z(e, e.v + 1);
}
function ll(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var r = Ei(), i = n.length, a = 0; a < i; a++) {
      var o = n[a], u = o.f;
      if (!(!r && o === we)) {
        var l = (u & Vt) === 0;
        l && Tt(o, t), u & Ht ? ll(
          /** @type {Derived} */
          o,
          zn
        ) : l && (u & vr && Sn !== null && Sn.push(
          /** @type {Effect} */
          o
        ), fr(
          /** @type {Effect} */
          o
        ));
      }
    }
}
function _e(e) {
  if (typeof e != "object" || e === null || gn in e)
    return e;
  const t = go(e);
  if (t !== Gu && t !== ju)
    return e;
  var n = /* @__PURE__ */ new Map(), r = sa(e), i = /* @__PURE__ */ ye(0), a = cr, o = (u) => {
    if (cr === a)
      return u();
    var l = Ie, s = cr;
    Ut(null), zo(a);
    var d = u();
    return Ut(l), zo(s), d;
  };
  return r && n.set("length", /* @__PURE__ */ ye(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(u, l, s) {
        (!("value" in s) || s.configurable === !1 || s.enumerable === !1 || s.writable === !1) && Ju();
        var d = n.get(l);
        return d === void 0 ? d = o(() => {
          var f = /* @__PURE__ */ ye(s.value);
          return n.set(l, f), f;
        }) : z(d, s.value, !0), !0;
      },
      deleteProperty(u, l) {
        var s = n.get(l);
        if (s === void 0) {
          if (l in u) {
            const d = o(() => /* @__PURE__ */ ye(lt));
            n.set(l, d), fi(i);
          }
        } else
          z(s, lt), fi(i);
        return !0;
      },
      get(u, l, s) {
        var h;
        if (l === gn)
          return e;
        var d = n.get(l), f = l in u;
        if (d === void 0 && (!f || (h = kn(u, l)) != null && h.writable) && (d = o(() => {
          var g = _e(f ? u[l] : lt), p = /* @__PURE__ */ ye(g);
          return p;
        }), n.set(l, d)), d !== void 0) {
          var v = c(d);
          return v === lt ? void 0 : v;
        }
        return Reflect.get(u, l, s);
      },
      getOwnPropertyDescriptor(u, l) {
        var s = Reflect.getOwnPropertyDescriptor(u, l);
        if (s && "value" in s) {
          var d = n.get(l);
          d && (s.value = c(d));
        } else if (s === void 0) {
          var f = n.get(l), v = f == null ? void 0 : f.v;
          if (f !== void 0 && v !== lt)
            return {
              enumerable: !0,
              configurable: !0,
              value: v,
              writable: !0
            };
        }
        return s;
      },
      has(u, l) {
        var v;
        if (l === gn)
          return !0;
        var s = n.get(l), d = s !== void 0 && s.v !== lt || Reflect.has(u, l);
        if (s !== void 0 || we !== null && (!d || (v = kn(u, l)) != null && v.writable)) {
          s === void 0 && (s = o(() => {
            var h = d ? _e(u[l]) : lt, g = /* @__PURE__ */ ye(h);
            return g;
          }), n.set(l, s));
          var f = c(s);
          if (f === lt)
            return !1;
        }
        return d;
      },
      set(u, l, s, d) {
        var w;
        var f = n.get(l), v = l in u;
        if (r && l === "length")
          for (var h = s; h < /** @type {Source<number>} */
          f.v; h += 1) {
            var g = n.get(h + "");
            g !== void 0 ? z(g, lt) : h in u && (g = o(() => /* @__PURE__ */ ye(lt)), n.set(h + "", g));
          }
        if (f === void 0)
          (!v || (w = kn(u, l)) != null && w.writable) && (f = o(() => /* @__PURE__ */ ye(void 0)), z(f, _e(s)), n.set(l, f));
        else {
          v = f.v !== lt;
          var p = o(() => _e(s));
          z(f, p);
        }
        var y = Reflect.getOwnPropertyDescriptor(u, l);
        if (y != null && y.set && y.set.call(d, s), !v) {
          if (r && typeof l == "string") {
            var _ = (
              /** @type {Source<number>} */
              n.get("length")
            ), T = Number(l);
            Number.isInteger(T) && T >= _.v && z(_, T + 1);
          }
          fi(i);
        }
        return !0;
      },
      ownKeys(u) {
        c(i);
        var l = Reflect.ownKeys(u).filter((f) => {
          var v = n.get(f);
          return v === void 0 || v.v !== lt;
        });
        for (var [s, d] of n)
          d.v !== lt && !(s in u) && l.push(s);
        return l;
      },
      setPrototypeOf() {
        $u();
      }
    }
  );
}
function Go(e) {
  try {
    if (e !== null && typeof e == "object" && gn in e)
      return e[gn];
  } catch {
  }
  return e;
}
function Sc(e, t) {
  return Object.is(Go(e), Go(t));
}
var Ki, ul, cl, dl, fl;
function Cc() {
  if (Ki === void 0) {
    Ki = window, ul = document, cl = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    dl = kn(t, "firstChild").get, fl = kn(t, "nextSibling").get, Fo(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), Fo(n) && (n.__t = void 0);
  }
}
function Xn(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function Gr(e) {
  return dl.call(e);
}
// @__NO_SIDE_EFFECTS__
function Si(e) {
  return fl.call(e);
}
function de(e, t) {
  return /* @__PURE__ */ Gr(e);
}
function V(e, t = !1) {
  {
    var n = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ Gr(
        /** @type {Node} */
        e
      )
    );
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ Si(n) : n;
  }
}
function ae(e, t = 1, n = !1) {
  let r = e;
  for (; t--; )
    r = /** @type {TemplateNode} */
    /* @__PURE__ */ Si(r);
  return r;
}
function Ac(e) {
  e.textContent = "";
}
function Ao() {
  return !1;
}
function Ic(e, t) {
  if (t) {
    const n = document.body;
    e.autofocus = !0, qn(() => {
      document.activeElement === n && e.focus();
    });
  }
}
let jo = !1;
function xc() {
  jo || (jo = !0, document.addEventListener(
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
function da(e) {
  var t = Ie, n = we;
  Ut(null), pn(null);
  try {
    return e();
  } finally {
    Ut(t), pn(n);
  }
}
function wc(e, t, n, r = n) {
  e.addEventListener(t, () => da(n));
  const i = e.__on_r;
  i ? e.__on_r = () => {
    i(), r(!0);
  } : e.__on_r = () => r(!0), xc();
}
function Lc(e) {
  we === null && Ie === null && Yu(), Ie !== null && Ie.f & Yt && we === null && Zu(), br && Wu();
}
function Tc(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function wn(e, t, n, r = !0) {
  var i = we;
  i !== null && i.f & sn && (e |= sn);
  var a = {
    ctx: ze,
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
      gi(a), a.f |= _o;
    } catch (l) {
      throw gt(a), l;
    }
  else t !== null && fr(a);
  if (r) {
    var o = a;
    if (n && o.deps === null && o.teardown === null && o.nodes_start === null && o.first === o.last && // either `null`, or a singular child
    !(o.f & Zr) && (o = o.first), o !== null && (o.parent = i, i !== null && Tc(o, i), Ie !== null && Ie.f & Ht && !(e & gr))) {
      var u = (
        /** @type {Derived} */
        Ie
      );
      (u.effects ?? (u.effects = [])).push(o);
    }
  }
  return a;
}
function Oc() {
  return Ie !== null && !on;
}
function fa(e) {
  const t = wn(mo, null, !1);
  return Tt(t, Ct), t.teardown = e, t;
}
function Be(e) {
  Lc();
  var t = (
    /** @type {Effect} */
    we.f
  ), n = !Ie && (t & xn) !== 0 && (t & _o) === 0;
  if (n) {
    var r = (
      /** @type {ComponentContext} */
      ze
    );
    (r.e ?? (r.e = [])).push(e);
  } else
    return hl(e);
}
function hl(e) {
  return wn(po | qu, e, !1);
}
function Rc(e) {
  An.ensure();
  const t = wn(gr | Zr, e, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? jn(t, () => {
      gt(t), r(void 0);
    }) : (gt(t), r(void 0));
  });
}
function Ci(e) {
  return wn(po, e, !1);
}
function Hc(e) {
  return wn(la | Zr, e, !0);
}
function ha(e, t = 0) {
  return wn(mo | t, e, !0);
}
function Ae(e, t = [], n = []) {
  il(t, n, (r) => {
    wn(mo, () => e(...r.map(c)), !0);
  });
}
function Wn(e, t = 0) {
  var n = wn(vr | t, e, !0);
  return n;
}
function Et(e, t = !0) {
  return wn(xn | Zr, e, !0, t);
}
function vl(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = br, r = Ie;
    qo(!0), Ut(null);
    try {
      t.call(null);
    } finally {
      qo(n), Ut(r);
    }
  }
}
function gl(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    const i = n.ac;
    i !== null && da(() => {
      i.abort(wr);
    });
    var r = n.next;
    n.f & gr ? n.parent = null : gt(n, t), n = r;
  }
}
function Dc(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    t.f & xn || gt(t), t = n;
  }
}
function gt(e, t = !0) {
  var n = !1;
  (t || e.f & Vu) && e.nodes_start !== null && e.nodes_end !== null && (Pc(
    e.nodes_start,
    /** @type {TemplateNode} */
    e.nodes_end
  ), n = !0), gl(e, t && !n), Qi(e, 0), Tt(e, pr);
  var r = e.transitions;
  if (r !== null)
    for (const a of r)
      a.stop();
  vl(e);
  var i = e.parent;
  i !== null && i.first !== null && pl(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = e.ac = null;
}
function Pc(e, t) {
  for (; e !== null; ) {
    var n = e === t ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Si(e)
    );
    e.remove(), e = n;
  }
}
function pl(e) {
  var t = e.parent, n = e.prev, r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function jn(e, t) {
  var n = [];
  Io(e, n, !0), ml(n, () => {
    gt(e), t && t();
  });
}
function ml(e, t) {
  var n = e.length;
  if (n > 0) {
    var r = () => --n || t();
    for (var i of e)
      i.out(r);
  } else
    t();
}
function Io(e, t, n) {
  if (!(e.f & sn)) {
    if (e.f ^= sn, e.transitions !== null)
      for (const o of e.transitions)
        (o.is_global || n) && t.push(o);
    for (var r = e.first; r !== null; ) {
      var i = r.next, a = (r.f & mr) !== 0 || (r.f & xn) !== 0;
      Io(r, t, a ? n : !1), r = i;
    }
  }
}
function va(e) {
  bl(e, !0);
}
function bl(e, t) {
  if (e.f & sn) {
    e.f ^= sn, e.f & Ct || (Tt(e, Vt), fr(e));
    for (var n = e.first; n !== null; ) {
      var r = n.next, i = (n.f & mr) !== 0 || (n.f & xn) !== 0;
      bl(n, i ? t : !1), n = r;
    }
    if (e.transitions !== null)
      for (const a of e.transitions)
        (a.is_global || t) && a.in();
  }
}
let Tr = !1;
function Vo(e) {
  Tr = e;
}
let br = !1;
function qo(e) {
  br = e;
}
let Ie = null, on = !1;
function Ut(e) {
  Ie = e;
}
let we = null;
function pn(e) {
  we = e;
}
let Lt = null;
function _l(e) {
  Ie !== null && (Lt === null ? Lt = [e] : Lt.push(e));
}
let wt = null, Gt = 0, Xt = null;
function Mc(e) {
  Xt = e;
}
let yl = 1, vi = 0, cr = vi;
function zo(e) {
  cr = e;
}
let Bn = !1;
function El() {
  return ++yl;
}
function ga(e) {
  var f;
  var t = e.f;
  if (t & Vt)
    return !0;
  if (t & zn) {
    var n = e.deps, r = (t & Yt) !== 0;
    if (n !== null) {
      var i, a, o = (t & Yi) !== 0, u = r && we !== null && !Bn, l = n.length;
      if ((o || u) && (we === null || !(we.f & pr))) {
        var s = (
          /** @type {Derived} */
          e
        ), d = s.parent;
        for (i = 0; i < l; i++)
          a = n[i], (o || !((f = a == null ? void 0 : a.reactions) != null && f.includes(s))) && (a.reactions ?? (a.reactions = [])).push(s);
        o && (s.f ^= Yi), u && d !== null && !(d.f & Yt) && (s.f ^= Yt);
      }
      for (i = 0; i < l; i++)
        if (a = n[i], ga(
          /** @type {Derived} */
          a
        ) && ol(
          /** @type {Derived} */
          a
        ), a.wv > e.wv)
          return !0;
    }
    (!r || we !== null && !Bn) && Tt(e, Ct);
  }
  return !1;
}
function Sl(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null && !(Lt != null && Lt.includes(e)))
    for (var i = 0; i < r.length; i++) {
      var a = r[i];
      a.f & Ht ? Sl(
        /** @type {Derived} */
        a,
        t,
        !1
      ) : t === a && (n ? Tt(a, Vt) : a.f & Ct && Tt(a, zn), fr(
        /** @type {Effect} */
        a
      ));
    }
}
function Cl(e) {
  var p;
  var t = wt, n = Gt, r = Xt, i = Ie, a = Bn, o = Lt, u = ze, l = on, s = cr, d = e.f;
  wt = /** @type {null | Value[]} */
  null, Gt = 0, Xt = null, Bn = (d & Yt) !== 0 && (on || !Tr || Ie === null), Ie = d & (xn | gr) ? null : e, Lt = null, Fr(e.ctx), on = !1, cr = ++vi, e.ac !== null && (da(() => {
    e.ac.abort(wr);
  }), e.ac = null);
  try {
    e.f |= Ga;
    var f = (
      /** @type {Function} */
      e.fn
    ), v = f(), h = e.deps;
    if (wt !== null) {
      var g;
      if (Qi(e, Gt), h !== null && Gt > 0)
        for (h.length = Gt + wt.length, g = 0; g < wt.length; g++)
          h[Gt + g] = wt[g];
      else
        e.deps = h = wt;
      if (!Bn || // Deriveds that already have reactions can cleanup, so we still add them as reactions
      d & Ht && /** @type {import('#client').Derived} */
      e.reactions !== null)
        for (g = Gt; g < h.length; g++)
          ((p = h[g]).reactions ?? (p.reactions = [])).push(e);
    } else h !== null && Gt < h.length && (Qi(e, Gt), h.length = Gt);
    if (Ei() && Xt !== null && !on && h !== null && !(e.f & (Ht | zn | Vt)))
      for (g = 0; g < /** @type {Source[]} */
      Xt.length; g++)
        Sl(
          Xt[g],
          /** @type {Effect} */
          e
        );
    return i !== null && i !== e && (vi++, Xt !== null && (r === null ? r = Xt : r.push(.../** @type {Source[]} */
    Xt))), e.f & ur && (e.f ^= ur), v;
  } catch (y) {
    return $s(y);
  } finally {
    e.f ^= Ga, wt = t, Gt = n, Xt = r, Ie = i, Bn = a, Lt = o, Fr(u), on = l, cr = s;
  }
}
function Bc(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = ku.call(n, e);
    if (r !== -1) {
      var i = n.length - 1;
      i === 0 ? n = t.reactions = null : (n[r] = n[i], n.pop());
    }
  }
  n === null && t.f & Ht && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (wt === null || !wt.includes(t)) && (Tt(t, zn), t.f & (Yt | Yi) || (t.f ^= Yi), al(
    /** @type {Derived} **/
    t
  ), Qi(
    /** @type {Derived} **/
    t,
    0
  ));
}
function Qi(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var r = t; r < n.length; r++)
      Bc(e, n[r]);
}
function gi(e) {
  var t = e.f;
  if (!(t & pr)) {
    Tt(e, Ct);
    var n = we, r = Tr;
    we = e, Tr = !0;
    try {
      t & vr ? Dc(e) : gl(e), vl(e);
      var i = Cl(e);
      e.teardown = typeof i == "function" ? i : null, e.wv = yl;
      var a;
      qs && ac && e.f & Vt && e.deps;
    } finally {
      Tr = r, we = n;
    }
  }
}
async function Al() {
  await Promise.resolve(), cc();
}
function c(e) {
  var t = e.f, n = (t & Ht) !== 0;
  if (Ie !== null && !on) {
    var r = we !== null && (we.f & pr) !== 0;
    if (!r && !(Lt != null && Lt.includes(e))) {
      var i = Ie.deps;
      if (Ie.f & Ga)
        e.rv < vi && (e.rv = vi, wt === null && i !== null && i[Gt] === e ? Gt++ : wt === null ? wt = [e] : (!Bn || !wt.includes(e)) && wt.push(e));
      else {
        (Ie.deps ?? (Ie.deps = [])).push(e);
        var a = e.reactions;
        a === null ? e.reactions = [Ie] : a.includes(Ie) || a.push(Ie);
      }
    }
  } else if (n && /** @type {Derived} */
  e.deps === null && /** @type {Derived} */
  e.effects === null) {
    var o = (
      /** @type {Derived} */
      e
    ), u = o.parent;
    u !== null && !(u.f & Yt) && (o.f ^= Yt);
  }
  if (br) {
    if (Gn.has(e))
      return Gn.get(e);
    if (n) {
      o = /** @type {Derived} */
      e;
      var l = o.v;
      return (!(o.f & Ct) && o.reactions !== null || Il(o)) && (l = Co(o)), Gn.set(o, l), l;
    }
  } else if (n) {
    if (o = /** @type {Derived} */
    e, vt != null && vt.has(o))
      return vt.get(o);
    ga(o) && ol(o);
  }
  if (vt != null && vt.has(e))
    return vt.get(e);
  if (e.f & ur)
    throw e.v;
  return e.v;
}
function Il(e) {
  if (e.v === lt) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (Gn.has(t) || t.f & Ht && Il(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function Zn(e) {
  var t = on;
  try {
    return on = !0, e();
  } finally {
    on = t;
  }
}
const Uc = -7169;
function Tt(e, t) {
  e.f = e.f & Uc | t;
}
function Fc(e) {
  if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
    if (gn in e)
      Za(e);
    else if (!Array.isArray(e))
      for (let t in e) {
        const n = e[t];
        typeof n == "object" && n && gn in n && Za(n);
      }
  }
}
function Za(e, t = /* @__PURE__ */ new Set()) {
  if (typeof e == "object" && e !== null && // We don't want to traverse DOM elements
  !(e instanceof EventTarget) && !t.has(e)) {
    t.add(e), e instanceof Date && e.getTime();
    for (let r in e)
      try {
        Za(e[r], t);
      } catch {
      }
    const n = go(e);
    if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
      const r = zs(n);
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
const xl = /* @__PURE__ */ new Set(), Ya = /* @__PURE__ */ new Set();
function xo(e, t, n, r = {}) {
  function i(a) {
    if (r.capture || ui.call(t, a), !a.cancelBubble)
      return da(() => n == null ? void 0 : n.call(this, a));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? qn(() => {
    t.addEventListener(e, i, r);
  }) : t.addEventListener(e, i, r), i;
}
function Nc(e, t, n, r = {}) {
  var i = xo(t, e, n, r);
  return () => {
    e.removeEventListener(t, i, r);
  };
}
function Un(e, t, n, r, i) {
  var a = { capture: r, passive: i }, o = xo(e, t, n, a);
  (t === document.body || // @ts-ignore
  t === window || // @ts-ignore
  t === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  t instanceof HTMLMediaElement) && fa(() => {
    t.removeEventListener(e, o, a);
  });
}
function Qt(e) {
  for (var t = 0; t < e.length; t++)
    xl.add(e[t]);
  for (var n of Ya)
    n(e);
}
let Xo = null;
function ui(e) {
  var T;
  var t = this, n = (
    /** @type {Node} */
    t.ownerDocument
  ), r = e.type, i = ((T = e.composedPath) == null ? void 0 : T.call(e)) || [], a = (
    /** @type {null | Element} */
    i[0] || e.target
  );
  Xo = e;
  var o = 0, u = Xo === e && e.__root;
  if (u) {
    var l = i.indexOf(u);
    if (l !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e.__root = t;
      return;
    }
    var s = i.indexOf(t);
    if (s === -1)
      return;
    l <= s && (o = l);
  }
  if (a = /** @type {Element} */
  i[o] || e.target, a !== t) {
    Zi(e, "currentTarget", {
      configurable: !0,
      get() {
        return a || n;
      }
    });
    var d = Ie, f = we;
    Ut(null), pn(null);
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
            if (sa(p)) {
              var [y, ..._] = p;
              y.apply(a, [e, ..._]);
            } else
              p.call(a, e);
        } catch (w) {
          v ? h.push(w) : v = w;
        }
        if (e.cancelBubble || g === t || g === null)
          break;
        a = g;
      }
      if (v) {
        for (let w of h)
          queueMicrotask(() => {
            throw w;
          });
        throw v;
      }
    } finally {
      e.__root = t, delete e.currentTarget, Ut(d), pn(f);
    }
  }
}
function wl(e) {
  var t = document.createElement("template");
  return t.innerHTML = e.replaceAll("<!>", "<!---->"), t.content;
}
function jr(e, t) {
  var n = (
    /** @type {Effect} */
    we
  );
  n.nodes_start === null && (n.nodes_start = e, n.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function J(e, t) {
  var n = (t & 1) !== 0, r = (t & 2) !== 0, i, a = !e.startsWith("<!>");
  return () => {
    i === void 0 && (i = wl(a ? e : "<!>" + e), n || (i = /** @type {Node} */
    /* @__PURE__ */ Gr(i)));
    var o = (
      /** @type {TemplateNode} */
      r || cl ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (n) {
      var u = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Gr(o)
      ), l = (
        /** @type {TemplateNode} */
        o.lastChild
      );
      jr(u, l);
    } else
      jr(o, o);
    return o;
  };
}
// @__NO_SIDE_EFFECTS__
function kc(e, t, n = "svg") {
  var r = !e.startsWith("<!>"), i = `<${n}>${r ? e : "<!>" + e}</${n}>`, a;
  return () => {
    if (!a) {
      var o = (
        /** @type {DocumentFragment} */
        wl(i)
      ), u = (
        /** @type {Element} */
        /* @__PURE__ */ Gr(o)
      );
      a = /** @type {Element} */
      /* @__PURE__ */ Gr(u);
    }
    var l = (
      /** @type {TemplateNode} */
      a.cloneNode(!0)
    );
    return jr(l, l), l;
  };
}
// @__NO_SIDE_EFFECTS__
function qt(e, t) {
  return /* @__PURE__ */ kc(e, t, "svg");
}
function St(e = "") {
  {
    var t = Xn(e + "");
    return jr(t, t), t;
  }
}
function Z() {
  var e = document.createDocumentFragment(), t = document.createComment(""), n = Xn();
  return e.append(t, n), jr(t, n), e;
}
function I(e, t) {
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function Gc(e) {
  return e.endsWith("capture") && e !== "gotpointercapture" && e !== "lostpointercapture";
}
const jc = [
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
function Vc(e) {
  return jc.includes(e);
}
const qc = {
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
function zc(e) {
  return e = e.toLowerCase(), qc[e] ?? e;
}
const Xc = ["touchstart", "touchmove"];
function Wc(e) {
  return Xc.includes(e);
}
function et(e, t) {
  var n = t == null ? "" : typeof t == "object" ? t + "" : t;
  n !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = n, e.nodeValue = n + "");
}
function Zc(e, t) {
  return Yc(e, t);
}
const Ir = /* @__PURE__ */ new Map();
function Yc(e, { target: t, anchor: n, props: r = {}, events: i, context: a, intro: o = !0 }) {
  Cc();
  var u = /* @__PURE__ */ new Set(), l = (f) => {
    for (var v = 0; v < f.length; v++) {
      var h = f[v];
      if (!u.has(h)) {
        u.add(h);
        var g = Wc(h);
        t.addEventListener(h, ui, { passive: g });
        var p = Ir.get(h);
        p === void 0 ? (document.addEventListener(h, ui, { passive: g }), Ir.set(h, 1)) : Ir.set(h, p + 1);
      }
    }
  };
  l(vo(xl)), Ya.add(l);
  var s = void 0, d = Rc(() => {
    var f = n ?? t.appendChild(Xn());
    return vc(
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
            ze
          );
          h.c = a;
        }
        i && (r.$$events = i), s = e(v, r) || {}, a && Oe();
      }
    ), () => {
      var g;
      for (var v of u) {
        t.removeEventListener(v, ui);
        var h = (
          /** @type {number} */
          Ir.get(v)
        );
        --h === 0 ? (document.removeEventListener(v, ui), Ir.delete(v)) : Ir.set(v, h);
      }
      Ya.delete(l), f !== n && ((g = f.parentNode) == null || g.removeChild(f));
    };
  });
  return Kc.set(s, d), s;
}
let Kc = /* @__PURE__ */ new WeakMap();
function se(e, t, ...n) {
  var r = e, i = $, a;
  Wn(() => {
    i !== (i = t()) && (a && (gt(a), a = null), a = Et(() => (
      /** @type {SnippetFn} */
      i(r, ...n)
    )));
  }, mr);
}
function pt(e) {
  ze === null && yo(), Yr && ze.l !== null ? Qc(ze).m.push(e) : Be(() => {
    const t = Zn(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function _r(e) {
  ze === null && yo(), pt(() => () => Zn(e));
}
function Qc(e) {
  var t = (
    /** @type {ComponentContextLegacy} */
    e.l
  );
  return t.u ?? (t.u = { a: [], b: [], m: [] });
}
function re(e, t, n = !1) {
  var r = e, i = null, a = null, o = lt, u = n ? mr : 0, l = !1;
  const s = (h, g = !0) => {
    l = !0, v(g, h);
  };
  var d = null;
  function f() {
    d !== null && (d.lastChild.remove(), r.before(d), d = null);
    var h = o ? i : a, g = o ? a : i;
    h && va(h), g && jn(g, () => {
      o ? a = null : i = null;
    });
  }
  const v = (h, g) => {
    if (o !== (o = h)) {
      var p = Ao(), y = r;
      if (p && (d = document.createDocumentFragment(), d.append(y = Xn())), o ? i ?? (i = g && Et(() => g(y))) : a ?? (a = g && Et(() => g(y))), p) {
        var _ = (
          /** @type {Batch} */
          ke
        ), T = o ? i : a, w = o ? a : i;
        T && _.skipped_effects.delete(T), w && _.skipped_effects.add(w), _.add_callback(f);
      } else
        f();
    }
  };
  Wn(() => {
    l = !1, t(s), l || v(null, null);
  }, u);
}
function Hi(e, t) {
  return t;
}
function Jc(e, t, n) {
  for (var r = e.items, i = [], a = t.length, o = 0; o < a; o++)
    Io(t[o].e, i, !0);
  var u = a > 0 && i.length === 0 && n !== null;
  if (u) {
    var l = (
      /** @type {Element} */
      /** @type {Element} */
      n.parentNode
    );
    Ac(l), l.append(
      /** @type {Element} */
      n
    ), r.clear(), un(e, t[0].prev, t[a - 1].next);
  }
  ml(i, () => {
    for (var s = 0; s < a; s++) {
      var d = t[s];
      u || (r.delete(d.k), un(e, d.prev, d.next)), gt(d.e, !u);
    }
  });
}
function ri(e, t, n, r, i, a = null) {
  var o = e, u = { flags: t, items: /* @__PURE__ */ new Map(), first: null }, l = (t & 4) !== 0;
  if (l) {
    var s = (
      /** @type {Element} */
      e
    );
    o = s.appendChild(Xn());
  }
  var d = null, f = !1, v = /* @__PURE__ */ new Map(), h = /* @__PURE__ */ So(() => {
    var _ = n();
    return sa(_) ? _ : _ == null ? [] : vo(_);
  }), g, p;
  function y() {
    $c(
      p,
      g,
      u,
      v,
      o,
      i,
      t,
      r,
      n
    ), a !== null && (g.length === 0 ? d ? va(d) : d = Et(() => a(o)) : d !== null && jn(d, () => {
      d = null;
    }));
  }
  Wn(() => {
    p ?? (p = /** @type {Effect} */
    we), g = /** @type {V[]} */
    c(h);
    var _ = g.length;
    if (!(f && _ === 0)) {
      f = _ === 0;
      var T, w, E, C;
      if (Ao()) {
        var b = /* @__PURE__ */ new Set(), S = (
          /** @type {Batch} */
          ke
        );
        for (w = 0; w < _; w += 1) {
          E = g[w], C = r(E, w);
          var x = u.items.get(C) ?? v.get(C);
          x ? t & 3 && Ll(x, E, w, t) : (T = Tl(
            null,
            u,
            null,
            null,
            E,
            C,
            w,
            i,
            t,
            n,
            !0
          ), v.set(C, T)), b.add(C);
        }
        for (const [O, D] of u.items)
          b.has(O) || S.skipped_effects.add(D.e);
        S.add_callback(y);
      } else
        y();
      c(h);
    }
  });
}
function $c(e, t, n, r, i, a, o, u, l) {
  var K, G, A, M;
  var s = (o & 8) !== 0, d = (o & 3) !== 0, f = t.length, v = n.items, h = n.first, g = h, p, y = null, _, T = [], w = [], E, C, b, S;
  if (s)
    for (S = 0; S < f; S += 1)
      E = t[S], C = u(E, S), b = v.get(C), b !== void 0 && ((K = b.a) == null || K.measure(), (_ ?? (_ = /* @__PURE__ */ new Set())).add(b));
  for (S = 0; S < f; S += 1) {
    if (E = t[S], C = u(E, S), b = v.get(C), b === void 0) {
      var x = r.get(C);
      if (x !== void 0) {
        r.delete(C), v.set(C, x);
        var O = y ? y.next : g;
        un(n, y, x), un(n, x, O), Sa(x, O, i), y = x;
      } else {
        var D = g ? (
          /** @type {TemplateNode} */
          g.e.nodes_start
        ) : i;
        y = Tl(
          D,
          n,
          y,
          y === null ? n.first : y.next,
          E,
          C,
          S,
          a,
          o,
          l
        );
      }
      v.set(C, y), T = [], w = [], g = y.next;
      continue;
    }
    if (d && Ll(b, E, S, o), b.e.f & sn && (va(b.e), s && ((G = b.a) == null || G.unfix(), (_ ?? (_ = /* @__PURE__ */ new Set())).delete(b))), b !== g) {
      if (p !== void 0 && p.has(b)) {
        if (T.length < w.length) {
          var U = w[0], W;
          y = U.prev;
          var Y = T[0], me = T[T.length - 1];
          for (W = 0; W < T.length; W += 1)
            Sa(T[W], U, i);
          for (W = 0; W < w.length; W += 1)
            p.delete(w[W]);
          un(n, Y.prev, me.next), un(n, y, Y), un(n, me, U), g = U, y = me, S -= 1, T = [], w = [];
        } else
          p.delete(b), Sa(b, g, i), un(n, b.prev, b.next), un(n, b, y === null ? n.first : y.next), un(n, y, b), y = b;
        continue;
      }
      for (T = [], w = []; g !== null && g.k !== C; )
        g.e.f & sn || (p ?? (p = /* @__PURE__ */ new Set())).add(g), w.push(g), g = g.next;
      if (g === null)
        continue;
      b = g;
    }
    T.push(b), y = b, g = b.next;
  }
  if (g !== null || p !== void 0) {
    for (var F = p === void 0 ? [] : vo(p); g !== null; )
      g.e.f & sn || F.push(g), g = g.next;
    var H = F.length;
    if (H > 0) {
      var P = o & 4 && f === 0 ? i : null;
      if (s) {
        for (S = 0; S < H; S += 1)
          (A = F[S].a) == null || A.measure();
        for (S = 0; S < H; S += 1)
          (M = F[S].a) == null || M.fix();
      }
      Jc(n, F, P);
    }
  }
  s && qn(() => {
    var ie;
    if (_ !== void 0)
      for (b of _)
        (ie = b.a) == null || ie.apply();
  }), e.first = n.first && n.first.e, e.last = y && y.e;
  for (var j of r.values())
    gt(j.e);
  r.clear();
}
function Ll(e, t, n, r) {
  r & 1 && kr(e.v, t), r & 2 ? kr(
    /** @type {Value<number>} */
    e.i,
    n
  ) : e.i = n;
}
function Tl(e, t, n, r, i, a, o, u, l, s, d) {
  var f = (l & 1) !== 0, v = (l & 16) === 0, h = f ? v ? /* @__PURE__ */ sl(i, !1, !1) : hr(i) : i, g = l & 2 ? hr(o) : o, p = {
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
      var y = document.createDocumentFragment();
      y.append(e = Xn());
    }
    return p.e = Et(() => u(
      /** @type {Node} */
      e,
      h,
      g,
      s
    ), ic), p.e.prev = n && n.e, p.e.next = r && r.e, n === null ? d || (t.first = p) : (n.next = p, n.e.next = p.e), r !== null && (r.prev = p, r.e.prev = p.e), p;
  } finally {
  }
}
function Sa(e, t, n) {
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
      /* @__PURE__ */ Si(a)
    );
    i.before(a), a = o;
  }
}
function un(e, t, n) {
  t === null ? e.first = n : (t.next = n, t.e.next = n && n.e), n !== null && (n.prev = t, n.e.prev = t && t.e);
}
function Kr(e, t, n) {
  var r = e, i, a, o = null, u = null;
  function l() {
    a && (jn(a), a = null), o && (o.lastChild.remove(), r.before(o), o = null), a = u, u = null;
  }
  Wn(() => {
    if (i !== (i = t())) {
      var s = Ao();
      if (i) {
        var d = r;
        s && (o = document.createDocumentFragment(), o.append(d = Xn()), a && ke.skipped_effects.add(a)), u = Et(() => n(d, i));
      }
      s ? ke.add_callback(l) : l();
    }
  }, mr);
}
function Wo(e, t, n, r, i, a) {
  var o, u, l = null, s = (
    /** @type {TemplateNode} */
    e
  ), d;
  Wn(() => {
    const f = t() || null;
    var v = f === "svg" ? Fu : null;
    f !== o && (d && (f === null ? jn(d, () => {
      d = null, u = null;
    }) : f === u ? va(d) : gt(d)), f && f !== u && (d = Et(() => {
      if (l = v ? document.createElementNS(v, f) : document.createElement(f), jr(l, l), r) {
        var h = (
          /** @type {TemplateNode} */
          l.appendChild(Xn())
        );
        r(l, h);
      }
      we.nodes_end = l, s.before(l);
    })), o = f, o && (u = o));
  }, mr);
}
function Xe(e, t, n) {
  Ci(() => {
    var r = Zn(() => t(e, n == null ? void 0 : n()) || {});
    if (n && (r != null && r.update)) {
      var i = !1, a = (
        /** @type {any} */
        {}
      );
      ha(() => {
        var o = n();
        Fc(o), i && Eo(a, o) && (a = o, r.update(o));
      }), i = !0;
    }
    if (r != null && r.destroy)
      return () => (
        /** @type {Function} */
        r.destroy()
      );
  });
}
function ed(e, t) {
  var n = void 0, r;
  Wn(() => {
    n !== (n = t()) && (r && (gt(r), r = null), n && (r = Et(() => {
      Ci(() => (
        /** @type {(node: Element) => void} */
        n(e)
      ));
    })));
  });
}
function Ol(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var i = e.length;
    for (t = 0; t < i; t++) e[t] && (n = Ol(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function td() {
  for (var e, t, n = 0, r = "", i = arguments.length; n < i; n++) (e = arguments[n]) && (t = Ol(e)) && (r && (r += " "), r += t);
  return r;
}
function Rl(e) {
  return typeof e == "object" ? td(e) : e ?? "";
}
const Zo = [...` 	
\r\f \v\uFEFF`];
function nd(e, t, n) {
  var r = e == null ? "" : "" + e;
  if (n) {
    for (var i in n)
      if (n[i])
        r = r ? r + " " + i : i;
      else if (r.length)
        for (var a = i.length, o = 0; (o = r.indexOf(i, o)) >= 0; ) {
          var u = o + a;
          (o === 0 || Zo.includes(r[o - 1])) && (u === r.length || Zo.includes(r[u])) ? r = (o === 0 ? "" : r.substring(0, o)) + r.substring(u + 1) : o = u;
        }
  }
  return r === "" ? null : r;
}
function Yo(e, t = !1) {
  var n = t ? " !important;" : ";", r = "";
  for (var i in e) {
    var a = e[i];
    a != null && a !== "" && (r += " " + i + ": " + a + n);
  }
  return r;
}
function Ca(e) {
  return e[0] !== "-" || e[1] !== "-" ? e.toLowerCase() : e;
}
function rd(e, t) {
  if (t) {
    var n = "", r, i;
    if (Array.isArray(t) ? (r = t[0], i = t[1]) : r = t, e) {
      e = String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var a = !1, o = 0, u = !1, l = [];
      r && l.push(...Object.keys(r).map(Ca)), i && l.push(...Object.keys(i).map(Ca));
      var s = 0, d = -1;
      const p = e.length;
      for (var f = 0; f < p; f++) {
        var v = e[f];
        if (u ? v === "/" && e[f - 1] === "*" && (u = !1) : a ? a === v && (a = !1) : v === "/" && e[f + 1] === "*" ? u = !0 : v === '"' || v === "'" ? a = v : v === "(" ? o++ : v === ")" && o--, !u && a === !1 && o === 0) {
          if (v === ":" && d === -1)
            d = f;
          else if (v === ";" || f === p - 1) {
            if (d !== -1) {
              var h = Ca(e.substring(s, d).trim());
              if (!l.includes(h)) {
                v !== ";" && f++;
                var g = e.substring(s, f).trim();
                n += " " + g + ";";
              }
            }
            s = f + 1, d = -1;
          }
        }
      }
    }
    return r && (n += Yo(r)), i && (n += Yo(i, !0)), n = n.trim(), n === "" ? null : n;
  }
  return e == null ? null : String(e);
}
function Hl(e, t, n, r, i, a) {
  var o = e.__className;
  if (o !== n || o === void 0) {
    var u = nd(n, r, a);
    u == null ? e.removeAttribute("class") : t ? e.className = u : e.setAttribute("class", u), e.__className = n;
  } else if (a && i !== a)
    for (var l in a) {
      var s = !!a[l];
      (i == null || s !== !!i[l]) && e.classList.toggle(l, s);
    }
  return a;
}
function Aa(e, t = {}, n, r) {
  for (var i in n) {
    var a = n[i];
    t[i] !== a && (n[i] == null ? e.style.removeProperty(i) : e.style.setProperty(i, a, r));
  }
}
function Dt(e, t, n, r) {
  var i = e.__style;
  if (i !== t) {
    var a = rd(t, r);
    a == null ? e.removeAttribute("style") : e.style.cssText = a, e.__style = t;
  } else r && (Array.isArray(r) ? (Aa(e, n == null ? void 0 : n[0], r[0]), Aa(e, n == null ? void 0 : n[1], r[1], "important")) : Aa(e, n, r));
  return r;
}
function Ka(e, t, n = !1) {
  if (e.multiple) {
    if (t == null)
      return;
    if (!sa(t))
      return nc();
    for (var r of e.options)
      r.selected = t.includes(Ko(r));
    return;
  }
  for (r of e.options) {
    var i = Ko(r);
    if (Sc(i, t)) {
      r.selected = !0;
      return;
    }
  }
  (!n || t !== void 0) && (e.selectedIndex = -1);
}
function id(e) {
  var t = new MutationObserver(() => {
    Ka(e, e.__value);
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
  }), fa(() => {
    t.disconnect();
  });
}
function Ko(e) {
  return "__value" in e ? e.__value : e.value;
}
const ii = Symbol("class"), ai = Symbol("style"), Dl = Symbol("is custom element"), Pl = Symbol("is html");
function Qo(e, t) {
  var n = wo(e);
  n.value === (n.value = // treat null and undefined the same for the initial value
  t ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  e.value === t && (t !== 0 || e.nodeName !== "PROGRESS") || (e.value = t ?? "");
}
function ad(e, t) {
  t ? e.hasAttribute("selected") || e.setAttribute("selected", "") : e.removeAttribute("selected");
}
function Vn(e, t, n, r) {
  var i = wo(e);
  i[t] !== (i[t] = n) && (t === "loading" && (e[zu] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && Ml(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function od(e, t, n, r, i = !1, a = !1) {
  var o = wo(e), u = o[Dl], l = !o[Pl], s = t || {}, d = e.tagName === "OPTION";
  for (var f in t)
    f in n || (n[f] = null);
  n.class ? n.class = Rl(n.class) : n[ii] && (n.class = null), n[ai] && (n.style ?? (n.style = null));
  var v = Ml(e);
  for (const w in n) {
    let E = n[w];
    if (d && w === "value" && E == null) {
      e.value = e.__value = "", s[w] = E;
      continue;
    }
    if (w === "class") {
      var h = e.namespaceURI === "http://www.w3.org/1999/xhtml";
      Hl(e, h, E, r, t == null ? void 0 : t[ii], n[ii]), s[w] = E, s[ii] = n[ii];
      continue;
    }
    if (w === "style") {
      Dt(e, E, t == null ? void 0 : t[ai], n[ai]), s[w] = E, s[ai] = n[ai];
      continue;
    }
    var g = s[w];
    if (!(E === g && !(E === void 0 && e.hasAttribute(w)))) {
      s[w] = E;
      var p = w[0] + w[1];
      if (p !== "$$")
        if (p === "on") {
          const C = {}, b = "$$" + w;
          let S = w.slice(2);
          var y = Vc(S);
          if (Gc(S) && (S = S.slice(0, -7), C.capture = !0), !y && g) {
            if (E != null) continue;
            e.removeEventListener(S, s[b], C), s[b] = null;
          }
          if (E != null)
            if (y)
              e[`__${S}`] = E, Qt([S]);
            else {
              let x = function(O) {
                s[w].call(this, O);
              };
              s[b] = xo(S, e, x, C);
            }
          else y && (e[`__${S}`] = void 0);
        } else if (w === "style")
          Vn(e, w, E);
        else if (w === "autofocus")
          Ic(
            /** @type {HTMLElement} */
            e,
            !!E
          );
        else if (!u && (w === "__value" || w === "value" && E != null))
          e.value = e.__value = E;
        else if (w === "selected" && d)
          ad(
            /** @type {HTMLOptionElement} */
            e,
            E
          );
        else {
          var _ = w;
          l || (_ = zc(_));
          var T = _ === "defaultValue" || _ === "defaultChecked";
          if (E == null && !u && !T)
            if (o[w] = null, _ === "value" || _ === "checked") {
              let C = (
                /** @type {HTMLInputElement} */
                e
              );
              const b = t === void 0;
              if (_ === "value") {
                let S = C.defaultValue;
                C.removeAttribute(_), C.defaultValue = S, C.value = C.__value = b ? S : null;
              } else {
                let S = C.defaultChecked;
                C.removeAttribute(_), C.defaultChecked = S, C.checked = b ? S : !1;
              }
            } else
              e.removeAttribute(w);
          else T || v.includes(_) && (u || typeof E != "string") ? (e[_] = E, _ in o && (o[_] = lt)) : typeof E != "function" && Vn(e, _, E);
        }
    }
  }
  return s;
}
function We(e, t, n = [], r = [], i, a = !1, o = !1) {
  il(n, r, (u) => {
    var l = void 0, s = {}, d = e.nodeName === "SELECT", f = !1;
    if (Wn(() => {
      var h = t(...u.map(c)), g = od(
        e,
        l,
        h,
        i,
        a,
        o
      );
      f && d && "value" in h && Ka(
        /** @type {HTMLSelectElement} */
        e,
        h.value
      );
      for (let y of Object.getOwnPropertySymbols(s))
        h[y] || gt(s[y]);
      for (let y of Object.getOwnPropertySymbols(h)) {
        var p = h[y];
        y.description === Nu && (!l || p !== l[y]) && (s[y] && gt(s[y]), s[y] = Et(() => ed(e, () => p))), g[y] = p;
      }
      l = g;
    }), d) {
      var v = (
        /** @type {HTMLSelectElement} */
        e
      );
      Ci(() => {
        Ka(
          v,
          /** @type {Record<string | symbol, any>} */
          l.value,
          !0
        ), id(v);
      });
    }
    f = !0;
  });
}
function wo(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ?? (e.__attributes = {
      [Dl]: e.nodeName.includes("-"),
      [Pl]: e.namespaceURI === Uu
    })
  );
}
var Jo = /* @__PURE__ */ new Map();
function Ml(e) {
  var t = e.getAttribute("is") || e.nodeName, n = Jo.get(t);
  if (n) return n;
  Jo.set(t, n = []);
  for (var r, i = e, a = Element.prototype; a !== i; ) {
    r = zs(i);
    for (var o in r)
      r[o].set && n.push(o);
    i = go(i);
  }
  return n;
}
function Qa(e, t, n = t) {
  var r = /* @__PURE__ */ new WeakSet();
  wc(e, "input", async (i) => {
    var a = i ? e.defaultValue : e.value;
    if (a = Ia(e) ? xa(a) : a, n(a), ke !== null && r.add(ke), await Al(), a !== (a = t())) {
      var o = e.selectionStart, u = e.selectionEnd, l = e.value.length;
      if (e.value = a ?? "", u !== null) {
        var s = e.value.length;
        o === u && u === l && s > l ? (e.selectionStart = s, e.selectionEnd = s) : (e.selectionStart = o, e.selectionEnd = Math.min(u, s));
      }
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  Zn(t) == null && e.value && (n(Ia(e) ? xa(e.value) : e.value), ke !== null && r.add(ke)), ha(() => {
    var i = t();
    if (e === document.activeElement) {
      var a = (
        /** @type {Batch} */
        ji ?? ke
      );
      if (r.has(a))
        return;
    }
    Ia(e) && i === xa(e.value) || e.type === "date" && !i && !e.value || i !== e.value && (e.value = i ?? "");
  });
}
function Ia(e) {
  var t = e.type;
  return t === "number" || t === "range";
}
function xa(e) {
  return e === "" ? null : +e;
}
function $o(e, t) {
  return e === t || (e == null ? void 0 : e[gn]) === t;
}
function Ee(e = {}, t, n, r) {
  return Ci(() => {
    var i, a;
    return ha(() => {
      i = a, a = [], Zn(() => {
        e !== n(...a) && (t(e, ...a), i && $o(n(...i), e) && t(null, ...i));
      });
    }), () => {
      qn(() => {
        a && $o(n(...a), e) && t(null, ...a);
      });
    };
  }), e;
}
function Lo(e, t, n) {
  if (e == null)
    return t(void 0), n && n(void 0), $;
  const r = Zn(
    () => e.subscribe(
      t,
      // @ts-expect-error
      n
    )
  );
  return r.unsubscribe ? () => r.unsubscribe() : r;
}
const xr = [];
function sd(e, t) {
  return {
    subscribe: Ot(e, t).subscribe
  };
}
function Ot(e, t = $) {
  let n = null;
  const r = /* @__PURE__ */ new Set();
  function i(u) {
    if (Eo(e, u) && (e = u, n)) {
      const l = !xr.length;
      for (const s of r)
        s[1](), xr.push(s, e);
      if (l) {
        for (let s = 0; s < xr.length; s += 2)
          xr[s][0](xr[s + 1]);
        xr.length = 0;
      }
    }
  }
  function a(u) {
    i(u(
      /** @type {T} */
      e
    ));
  }
  function o(u, l = $) {
    const s = [u, l];
    return r.add(s), r.size === 1 && (n = t(i, a) || $), u(
      /** @type {T} */
      e
    ), () => {
      r.delete(s), r.size === 0 && n && (n(), n = null);
    };
  }
  return { set: i, update: a, subscribe: o };
}
function Qr(e, t, n) {
  const r = !Array.isArray(e), i = r ? [e] : e;
  if (!i.every(Boolean))
    throw new Error("derived() expects stores as input, got a falsy value");
  const a = t.length < 2;
  return sd(n, (o, u) => {
    let l = !1;
    const s = [];
    let d = 0, f = $;
    const v = () => {
      if (d)
        return;
      f();
      const g = t(r ? s[0] : s, o, u);
      a ? o(g) : f = typeof g == "function" ? g : $;
    }, h = i.map(
      (g, p) => Lo(
        g,
        (y) => {
          s[p] = y, d &= ~(1 << p), l && v();
        },
        () => {
          d |= 1 << p;
        }
      )
    );
    return l = !0, v(), function() {
      Xs(h), f(), l = !1;
    };
  });
}
function Bl(e) {
  let t;
  return Lo(e, (n) => t = n)(), t;
}
let Di = !1, Ja = Symbol();
function In(e, t, n) {
  const r = n[t] ?? (n[t] = {
    store: null,
    source: /* @__PURE__ */ sl(void 0),
    unsubscribe: $
  });
  if (r.store !== e && !(Ja in n))
    if (r.unsubscribe(), r.store = e ?? null, e == null)
      r.source.v = void 0, r.unsubscribe = $;
    else {
      var i = !0;
      r.unsubscribe = Lo(e, (a) => {
        i ? r.source.v = a : z(r.source, a);
      }), i = !1;
    }
  return e && Ja in n ? Bl(e) : c(r.source);
}
function Fn(e, t) {
  return e.set(t), t;
}
function Yn() {
  const e = {};
  function t() {
    fa(() => {
      for (var n in e)
        e[n].unsubscribe();
      Zi(e, Ja, {
        enumerable: !1,
        value: !0
      });
    });
  }
  return [e, t];
}
function ld(e) {
  var t = Di;
  try {
    return Di = !1, [e(), Di];
  } finally {
    Di = t;
  }
}
const ud = {
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
    ud
  );
}
const cd = {
  get(e, t) {
    let n = e.props.length;
    for (; n--; ) {
      let r = e.props[n];
      if (ni(r) && (r = r()), typeof r == "object" && r !== null && t in r) return r[t];
    }
  },
  set(e, t, n) {
    let r = e.props.length;
    for (; r--; ) {
      let i = e.props[r];
      ni(i) && (i = i());
      const a = kn(i, t);
      if (a && a.set)
        return a.set(n), !0;
    }
    return !1;
  },
  getOwnPropertyDescriptor(e, t) {
    let n = e.props.length;
    for (; n--; ) {
      let r = e.props[n];
      if (ni(r) && (r = r()), typeof r == "object" && r !== null && t in r) {
        const i = kn(r, t);
        return i && !i.configurable && (i.configurable = !0), i;
      }
    }
  },
  has(e, t) {
    if (t === gn || t === Zs) return !1;
    for (let n of e.props)
      if (ni(n) && (n = n()), n != null && t in n) return !0;
    return !1;
  },
  ownKeys(e) {
    const t = [];
    for (let n of e.props)
      if (ni(n) && (n = n()), !!n) {
        for (const r in n)
          t.includes(r) || t.push(r);
        for (const r of Object.getOwnPropertySymbols(n))
          t.includes(r) || t.push(r);
      }
    return t;
  }
};
function ut(...e) {
  return new Proxy({ props: e }, cd);
}
function m(e, t, n, r) {
  var w;
  var i = !Yr || (n & 2) !== 0, a = (n & 8) !== 0, o = (n & 16) !== 0, u = (
    /** @type {V} */
    r
  ), l = !0, s = () => (l && (l = !1, u = o ? Zn(
    /** @type {() => V} */
    r
  ) : (
    /** @type {V} */
    r
  )), u), d;
  if (a) {
    var f = gn in e || Zs in e;
    d = ((w = kn(e, t)) == null ? void 0 : w.set) ?? (f && t in e ? (E) => e[t] = E : void 0);
  }
  var v, h = !1;
  a ? [v, h] = ld(() => (
    /** @type {V} */
    e[t]
  )) : v = /** @type {V} */
  e[t], v === void 0 && r !== void 0 && (v = s(), d && (i && Qu(), d(v)));
  var g;
  if (i ? g = () => {
    var E = (
      /** @type {V} */
      e[t]
    );
    return E === void 0 ? s() : (l = !0, E);
  } : g = () => {
    var E = (
      /** @type {V} */
      e[t]
    );
    return E !== void 0 && (u = /** @type {V} */
    void 0), E === void 0 ? u : E;
  }, i && !(n & 4))
    return g;
  if (d) {
    var p = e.$$legacy;
    return (
      /** @type {() => V} */
      function(E, C) {
        return arguments.length > 0 ? ((!i || !C || p || h) && d(C ? g() : E), E) : g();
      }
    );
  }
  var y = !1, _ = (n & 1 ? ca : So)(() => (y = !1, g()));
  a && c(_);
  var T = (
    /** @type {Effect} */
    we
  );
  return (
    /** @type {() => V} */
    function(E, C) {
      if (arguments.length > 0) {
        const b = C ? c(_) : i && a ? _e(E) : E;
        return z(_, b), y = !0, u !== void 0 && (u = b), E;
      }
      return br && y || T.f & pr ? _.v : c(_);
    }
  );
}
const dd = "5";
var Vs;
typeof window < "u" && ((Vs = window.__svelte ?? (window.__svelte = {})).v ?? (Vs.v = /* @__PURE__ */ new Set())).add(dd);
function fd(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var hd = function(t) {
  return vd(t) && !gd(t);
};
function vd(e) {
  return !!e && typeof e == "object";
}
function gd(e) {
  var t = Object.prototype.toString.call(e);
  return t === "[object RegExp]" || t === "[object Date]" || bd(e);
}
var pd = typeof Symbol == "function" && Symbol.for, md = pd ? Symbol.for("react.element") : 60103;
function bd(e) {
  return e.$$typeof === md;
}
function _d(e) {
  return Array.isArray(e) ? [] : {};
}
function pi(e, t) {
  return t.clone !== !1 && t.isMergeableObject(e) ? Vr(_d(e), e, t) : e;
}
function yd(e, t, n) {
  return e.concat(t).map(function(r) {
    return pi(r, n);
  });
}
function Ed(e, t) {
  if (!t.customMerge)
    return Vr;
  var n = t.customMerge(e);
  return typeof n == "function" ? n : Vr;
}
function Sd(e) {
  return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e).filter(function(t) {
    return Object.propertyIsEnumerable.call(e, t);
  }) : [];
}
function es(e) {
  return Object.keys(e).concat(Sd(e));
}
function Ul(e, t) {
  try {
    return t in e;
  } catch {
    return !1;
  }
}
function Cd(e, t) {
  return Ul(e, t) && !(Object.hasOwnProperty.call(e, t) && Object.propertyIsEnumerable.call(e, t));
}
function Ad(e, t, n) {
  var r = {};
  return n.isMergeableObject(e) && es(e).forEach(function(i) {
    r[i] = pi(e[i], n);
  }), es(t).forEach(function(i) {
    Cd(e, i) || (Ul(e, i) && n.isMergeableObject(t[i]) ? r[i] = Ed(i, n)(e[i], t[i], n) : r[i] = pi(t[i], n));
  }), r;
}
function Vr(e, t, n) {
  n = n || {}, n.arrayMerge = n.arrayMerge || yd, n.isMergeableObject = n.isMergeableObject || hd, n.cloneUnlessOtherwiseSpecified = pi;
  var r = Array.isArray(t), i = Array.isArray(e), a = r === i;
  return a ? r ? n.arrayMerge(e, t, n) : Ad(e, t, n) : pi(t, n);
}
Vr.all = function(t, n) {
  if (!Array.isArray(t))
    throw new Error("first argument should be an array");
  return t.reduce(function(r, i) {
    return Vr(r, i, n);
  }, {});
};
var Id = Vr, xd = Id;
const wd = /* @__PURE__ */ fd(xd);
var $a = function(e, t) {
  return $a = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, r) {
    n.__proto__ = r;
  } || function(n, r) {
    for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (n[i] = r[i]);
  }, $a(e, t);
};
function mt(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  $a(e, t);
  function n() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
}
var te = function() {
  return te = Object.assign || function(t) {
    for (var n, r = 1, i = arguments.length; r < i; r++) {
      n = arguments[r];
      for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a]);
    }
    return t;
  }, te.apply(this, arguments);
};
function Ld(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
  return n;
}
function Fl(e, t, n, r) {
  function i(a) {
    return a instanceof n ? a : new n(function(o) {
      o(a);
    });
  }
  return new (n || (n = Promise))(function(a, o) {
    function u(d) {
      try {
        s(r.next(d));
      } catch (f) {
        o(f);
      }
    }
    function l(d) {
      try {
        s(r.throw(d));
      } catch (f) {
        o(f);
      }
    }
    function s(d) {
      d.done ? a(d.value) : i(d.value).then(u, l);
    }
    s((r = r.apply(e, t || [])).next());
  });
}
function To(e, t) {
  var n = { label: 0, sent: function() {
    if (a[0] & 1) throw a[1];
    return a[1];
  }, trys: [], ops: [] }, r, i, a, o = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
  return o.next = u(0), o.throw = u(1), o.return = u(2), typeof Symbol == "function" && (o[Symbol.iterator] = function() {
    return this;
  }), o;
  function u(s) {
    return function(d) {
      return l([s, d]);
    };
  }
  function l(s) {
    if (r) throw new TypeError("Generator is already executing.");
    for (; o && (o = 0, s[0] && (n = 0)), n; ) try {
      if (r = 1, i && (a = s[0] & 2 ? i.return : s[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, s[1])).done) return a;
      switch (i = 0, a && (s = [s[0] & 2, a.value]), s[0]) {
        case 0:
        case 1:
          a = s;
          break;
        case 4:
          return n.label++, { value: s[1], done: !1 };
        case 5:
          n.label++, i = s[1], s = [0];
          continue;
        case 7:
          s = n.ops.pop(), n.trys.pop();
          continue;
        default:
          if (a = n.trys, !(a = a.length > 0 && a[a.length - 1]) && (s[0] === 6 || s[0] === 2)) {
            n = 0;
            continue;
          }
          if (s[0] === 3 && (!a || s[1] > a[0] && s[1] < a[3])) {
            n.label = s[1];
            break;
          }
          if (s[0] === 6 && n.label < a[1]) {
            n.label = a[1], a = s;
            break;
          }
          if (a && n.label < a[2]) {
            n.label = a[2], n.ops.push(s);
            break;
          }
          a[2] && n.ops.pop(), n.trys.pop();
          continue;
      }
      s = t.call(e, n);
    } catch (d) {
      s = [6, d], i = 0;
    } finally {
      r = a = 0;
    }
    if (s[0] & 5) throw s[1];
    return { value: s[0] ? s[1] : void 0, done: !0 };
  }
}
function At(e) {
  var t = typeof Symbol == "function" && Symbol.iterator, n = t && e[t], r = 0;
  if (n) return n.call(e);
  if (e && typeof e.length == "number") return {
    next: function() {
      return e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e };
    }
  };
  throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function eo(e, t) {
  var n = typeof Symbol == "function" && e[Symbol.iterator];
  if (!n) return e;
  var r = n.call(e), i, a = [], o;
  try {
    for (; (t === void 0 || t-- > 0) && !(i = r.next()).done; ) a.push(i.value);
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
function Or(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, i = t.length, a; r < i; r++)
    (a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
  return e.concat(a || Array.prototype.slice.call(t));
}
function Rr(e) {
  return this instanceof Rr ? (this.v = e, this) : new Rr(e);
}
function Td(e, t, n) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var r = n.apply(e, t || []), i, a = [];
  return i = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype), u("next"), u("throw"), u("return", o), i[Symbol.asyncIterator] = function() {
    return this;
  }, i;
  function o(h) {
    return function(g) {
      return Promise.resolve(g).then(h, f);
    };
  }
  function u(h, g) {
    r[h] && (i[h] = function(p) {
      return new Promise(function(y, _) {
        a.push([h, p, y, _]) > 1 || l(h, p);
      });
    }, g && (i[h] = g(i[h])));
  }
  function l(h, g) {
    try {
      s(r[h](g));
    } catch (p) {
      v(a[0][3], p);
    }
  }
  function s(h) {
    h.value instanceof Rr ? Promise.resolve(h.value.v).then(d, f) : v(a[0][2], h);
  }
  function d(h) {
    l("next", h);
  }
  function f(h) {
    l("throw", h);
  }
  function v(h, g) {
    h(g), a.shift(), a.length && l(a[0][0], a[0][1]);
  }
}
function Od(e) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var t = e[Symbol.asyncIterator], n;
  return t ? t.call(e) : (e = typeof At == "function" ? At(e) : e[Symbol.iterator](), n = {}, r("next"), r("throw"), r("return"), n[Symbol.asyncIterator] = function() {
    return this;
  }, n);
  function r(a) {
    n[a] = e[a] && function(o) {
      return new Promise(function(u, l) {
        o = e[a](o), i(u, l, o.done, o.value);
      });
    };
  }
  function i(a, o, u, l) {
    Promise.resolve(l).then(function(s) {
      a({ value: s, done: u });
    }, o);
  }
}
function wa(e, t) {
  var n = t && t.cache ? t.cache : Ud, r = t && t.serializer ? t.serializer : Md, i = t && t.strategy ? t.strategy : Dd;
  return i(e, {
    cache: n,
    serializer: r
  });
}
function Rd(e) {
  return e == null || typeof e == "number" || typeof e == "boolean";
}
function Hd(e, t, n, r) {
  var i = Rd(r) ? r : n(r), a = t.get(i);
  return typeof a > "u" && (a = e.call(this, r), t.set(i, a)), a;
}
function Nl(e, t, n) {
  var r = Array.prototype.slice.call(arguments, 3), i = n(r), a = t.get(i);
  return typeof a > "u" && (a = e.apply(this, r), t.set(i, a)), a;
}
function kl(e, t, n, r, i) {
  return n.bind(t, e, r, i);
}
function Dd(e, t) {
  var n = e.length === 1 ? Hd : Nl;
  return kl(e, this, n, t.cache.create(), t.serializer);
}
function Pd(e, t) {
  return kl(e, this, Nl, t.cache.create(), t.serializer);
}
var Md = function() {
  return JSON.stringify(arguments);
}, Bd = (
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
), Ud = {
  create: function() {
    return new Bd();
  }
}, La = {
  variadic: Pd
}, He;
(function(e) {
  e[e.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", e[e.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", e[e.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", e[e.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", e[e.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", e[e.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", e[e.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", e[e.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", e[e.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", e[e.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", e[e.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", e[e.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", e[e.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", e[e.INVALID_TAG = 23] = "INVALID_TAG", e[e.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", e[e.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", e[e.UNCLOSED_TAG = 27] = "UNCLOSED_TAG";
})(He || (He = {}));
var Ye;
(function(e) {
  e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag";
})(Ye || (Ye = {}));
var qr;
(function(e) {
  e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime";
})(qr || (qr = {}));
function ts(e) {
  return e.type === Ye.literal;
}
function Fd(e) {
  return e.type === Ye.argument;
}
function Gl(e) {
  return e.type === Ye.number;
}
function jl(e) {
  return e.type === Ye.date;
}
function Vl(e) {
  return e.type === Ye.time;
}
function ql(e) {
  return e.type === Ye.select;
}
function zl(e) {
  return e.type === Ye.plural;
}
function Nd(e) {
  return e.type === Ye.pound;
}
function Xl(e) {
  return e.type === Ye.tag;
}
function Wl(e) {
  return !!(e && typeof e == "object" && e.type === qr.number);
}
function to(e) {
  return !!(e && typeof e == "object" && e.type === qr.dateTime);
}
var Zl = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/, kd = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
function Gd(e) {
  var t = {};
  return e.replace(kd, function(n) {
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
var jd = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
function Vd(e) {
  if (e.length === 0)
    throw new Error("Number skeleton cannot be empty");
  for (var t = e.split(jd).filter(function(v) {
    return v.length > 0;
  }), n = [], r = 0, i = t; r < i.length; r++) {
    var a = i[r], o = a.split("/");
    if (o.length === 0)
      throw new Error("Invalid number skeleton");
    for (var u = o[0], l = o.slice(1), s = 0, d = l; s < d.length; s++) {
      var f = d[s];
      if (f.length === 0)
        throw new Error("Invalid number skeleton");
    }
    n.push({ stem: u, options: l });
  }
  return n;
}
function qd(e) {
  return e.replace(/^(.*?)-/, "");
}
var ns = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g, Yl = /^(@+)?(\+|#+)?[rs]?$/g, zd = /(\*)(0+)|(#+)(0+)|(0+)/g, Kl = /^(0+)$/;
function rs(e) {
  var t = {};
  return e[e.length - 1] === "r" ? t.roundingPriority = "morePrecision" : e[e.length - 1] === "s" && (t.roundingPriority = "lessPrecision"), e.replace(Yl, function(n, r, i) {
    return typeof i != "string" ? (t.minimumSignificantDigits = r.length, t.maximumSignificantDigits = r.length) : i === "+" ? t.minimumSignificantDigits = r.length : r[0] === "#" ? t.maximumSignificantDigits = r.length : (t.minimumSignificantDigits = r.length, t.maximumSignificantDigits = r.length + (typeof i == "string" ? i.length : 0)), "";
  }), t;
}
function Ql(e) {
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
function Xd(e) {
  var t;
  if (e[0] === "E" && e[1] === "E" ? (t = {
    notation: "engineering"
  }, e = e.slice(2)) : e[0] === "E" && (t = {
    notation: "scientific"
  }, e = e.slice(1)), t) {
    var n = e.slice(0, 2);
    if (n === "+!" ? (t.signDisplay = "always", e = e.slice(2)) : n === "+?" && (t.signDisplay = "exceptZero", e = e.slice(2)), !Kl.test(e))
      throw new Error("Malformed concise eng/scientific notation");
    t.minimumIntegerDigits = e.length;
  }
  return t;
}
function is(e) {
  var t = {}, n = Ql(e);
  return n || t;
}
function Wd(e) {
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
        t.style = "unit", t.unit = qd(i.options[0]);
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
        t = te(te(te({}, t), { notation: "scientific" }), i.options.reduce(function(l, s) {
          return te(te({}, l), is(s));
        }, {}));
        continue;
      case "engineering":
        t = te(te(te({}, t), { notation: "engineering" }), i.options.reduce(function(l, s) {
          return te(te({}, l), is(s));
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
        i.options[0].replace(zd, function(l, s, d, f, v, h) {
          if (s)
            t.minimumIntegerDigits = d.length;
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
    if (Kl.test(i.stem)) {
      t.minimumIntegerDigits = i.stem.length;
      continue;
    }
    if (ns.test(i.stem)) {
      if (i.options.length > 1)
        throw new RangeError("Fraction-precision stems only accept a single optional option");
      i.stem.replace(ns, function(l, s, d, f, v, h) {
        return d === "*" ? t.minimumFractionDigits = s.length : f && f[0] === "#" ? t.maximumFractionDigits = f.length : v && h ? (t.minimumFractionDigits = v.length, t.maximumFractionDigits = v.length + h.length) : (t.minimumFractionDigits = s.length, t.maximumFractionDigits = s.length), "";
      });
      var a = i.options[0];
      a === "w" ? t = te(te({}, t), { trailingZeroDisplay: "stripIfInteger" }) : a && (t = te(te({}, t), rs(a)));
      continue;
    }
    if (Yl.test(i.stem)) {
      t = te(te({}, t), rs(i.stem));
      continue;
    }
    var o = Ql(i.stem);
    o && (t = te(te({}, t), o));
    var u = Xd(i.stem);
    u && (t = te(te({}, t), u));
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
function Zd(e, t) {
  for (var n = "", r = 0; r < e.length; r++) {
    var i = e.charAt(r);
    if (i === "j") {
      for (var a = 0; r + 1 < e.length && e.charAt(r + 1) === i; )
        a++, r++;
      var o = 1 + (a & 1), u = a < 2 ? 1 : 3 + (a >> 1), l = "a", s = Yd(t);
      for ((s == "H" || s == "k") && (u = 0); u-- > 0; )
        n += l;
      for (; o-- > 0; )
        n = s + n;
    } else i === "J" ? n += "H" : n += i;
  }
  return n;
}
function Yd(e) {
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
var Ta, Kd = new RegExp("^".concat(Zl.source, "*")), Qd = new RegExp("".concat(Zl.source, "*$"));
function Pe(e, t) {
  return { start: e, end: t };
}
var Jd = !!String.prototype.startsWith && "_a".startsWith("a", 1), $d = !!String.fromCodePoint, ef = !!Object.fromEntries, tf = !!String.prototype.codePointAt, nf = !!String.prototype.trimStart, rf = !!String.prototype.trimEnd, af = !!Number.isSafeInteger, of = af ? Number.isSafeInteger : function(e) {
  return typeof e == "number" && isFinite(e) && Math.floor(e) === e && Math.abs(e) <= 9007199254740991;
}, no = !0;
try {
  var sf = $l("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  no = ((Ta = sf.exec("a")) === null || Ta === void 0 ? void 0 : Ta[0]) === "a";
} catch {
  no = !1;
}
var as = Jd ? (
  // Native
  function(t, n, r) {
    return t.startsWith(n, r);
  }
) : (
  // For IE11
  function(t, n, r) {
    return t.slice(r, r + n.length) === n;
  }
), ro = $d ? String.fromCodePoint : (
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
), os = (
  // native
  ef ? Object.fromEntries : (
    // Ponyfill
    function(t) {
      for (var n = {}, r = 0, i = t; r < i.length; r++) {
        var a = i[r], o = a[0], u = a[1];
        n[o] = u;
      }
      return n;
    }
  )
), Jl = tf ? (
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
), lf = nf ? (
  // Native
  function(t) {
    return t.trimStart();
  }
) : (
  // Ponyfill
  function(t) {
    return t.replace(Kd, "");
  }
), uf = rf ? (
  // Native
  function(t) {
    return t.trimEnd();
  }
) : (
  // Ponyfill
  function(t) {
    return t.replace(Qd, "");
  }
);
function $l(e, t) {
  return new RegExp(e, t);
}
var io;
if (no) {
  var ss = $l("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  io = function(t, n) {
    var r;
    ss.lastIndex = n;
    var i = ss.exec(t);
    return (r = i[1]) !== null && r !== void 0 ? r : "";
  };
} else
  io = function(t, n) {
    for (var r = []; ; ) {
      var i = Jl(t, n);
      if (i === void 0 || eu(i) || hf(i))
        break;
      r.push(i), n += i >= 65536 ? 2 : 1;
    }
    return ro.apply(void 0, r);
  };
var cf = (
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
            var u = this.clonePosition();
            this.bump(), i.push({
              type: Ye.pound,
              location: Pe(u, this.clonePosition())
            });
          } else if (a === 60 && !this.ignoreTag && this.peek() === 47) {
            if (r)
              break;
            return this.error(He.UNMATCHED_CLOSING_TAG, Pe(this.clonePosition(), this.clonePosition()));
          } else if (a === 60 && !this.ignoreTag && ao(this.peek() || 0)) {
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
            type: Ye.literal,
            value: "<".concat(i, "/>"),
            location: Pe(r, this.clonePosition())
          },
          err: null
        };
      if (this.bumpIf(">")) {
        var a = this.parseMessage(t + 1, n, !0);
        if (a.err)
          return a;
        var o = a.val, u = this.clonePosition();
        if (this.bumpIf("</")) {
          if (this.isEOF() || !ao(this.char()))
            return this.error(He.INVALID_TAG, Pe(u, this.clonePosition()));
          var l = this.clonePosition(), s = this.parseTagName();
          return i !== s ? this.error(He.UNMATCHED_CLOSING_TAG, Pe(l, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
            val: {
              type: Ye.tag,
              value: i,
              children: o,
              location: Pe(r, this.clonePosition())
            },
            err: null
          } : this.error(He.INVALID_TAG, Pe(u, this.clonePosition())));
        } else
          return this.error(He.UNCLOSED_TAG, Pe(r, this.clonePosition()));
      } else
        return this.error(He.INVALID_TAG, Pe(r, this.clonePosition()));
    }, e.prototype.parseTagName = function() {
      var t = this.offset();
      for (this.bump(); !this.isEOF() && ff(this.char()); )
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
        var u = this.tryParseLeftAngleBracket();
        if (u) {
          i += u;
          continue;
        }
        break;
      }
      var l = Pe(r, this.clonePosition());
      return {
        val: { type: Ye.literal, value: i, location: l },
        err: null
      };
    }, e.prototype.tryParseLeftAngleBracket = function() {
      return !this.isEOF() && this.char() === 60 && (this.ignoreTag || // If at the opening tag or closing tag position, bail.
      !df(this.peek() || 0)) ? (this.bump(), "<") : null;
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
      return ro.apply(void 0, n);
    }, e.prototype.tryParseUnquoted = function(t, n) {
      if (this.isEOF())
        return null;
      var r = this.char();
      return r === 60 || r === 123 || r === 35 && (n === "plural" || n === "selectordinal") || r === 125 && t > 0 ? null : (this.bump(), ro(r));
    }, e.prototype.parseArgument = function(t, n) {
      var r = this.clonePosition();
      if (this.bump(), this.bumpSpace(), this.isEOF())
        return this.error(He.EXPECT_ARGUMENT_CLOSING_BRACE, Pe(r, this.clonePosition()));
      if (this.char() === 125)
        return this.bump(), this.error(He.EMPTY_ARGUMENT, Pe(r, this.clonePosition()));
      var i = this.parseIdentifierIfPossible().value;
      if (!i)
        return this.error(He.MALFORMED_ARGUMENT, Pe(r, this.clonePosition()));
      if (this.bumpSpace(), this.isEOF())
        return this.error(He.EXPECT_ARGUMENT_CLOSING_BRACE, Pe(r, this.clonePosition()));
      switch (this.char()) {
        case 125:
          return this.bump(), {
            val: {
              type: Ye.argument,
              // value does not include the opening and closing braces.
              value: i,
              location: Pe(r, this.clonePosition())
            },
            err: null
          };
        case 44:
          return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(He.EXPECT_ARGUMENT_CLOSING_BRACE, Pe(r, this.clonePosition())) : this.parseArgumentOptions(t, n, i, r);
        default:
          return this.error(He.MALFORMED_ARGUMENT, Pe(r, this.clonePosition()));
      }
    }, e.prototype.parseIdentifierIfPossible = function() {
      var t = this.clonePosition(), n = this.offset(), r = io(this.message, n), i = n + r.length;
      this.bumpTo(i);
      var a = this.clonePosition(), o = Pe(t, a);
      return { value: r, location: o };
    }, e.prototype.parseArgumentOptions = function(t, n, r, i) {
      var a, o = this.clonePosition(), u = this.parseIdentifierIfPossible().value, l = this.clonePosition();
      switch (u) {
        case "":
          return this.error(He.EXPECT_ARGUMENT_TYPE, Pe(o, l));
        case "number":
        case "date":
        case "time": {
          this.bumpSpace();
          var s = null;
          if (this.bumpIf(",")) {
            this.bumpSpace();
            var d = this.clonePosition(), f = this.parseSimpleArgStyleIfPossible();
            if (f.err)
              return f;
            var v = uf(f.val);
            if (v.length === 0)
              return this.error(He.EXPECT_ARGUMENT_STYLE, Pe(this.clonePosition(), this.clonePosition()));
            var h = Pe(d, this.clonePosition());
            s = { style: v, styleLocation: h };
          }
          var g = this.tryParseArgumentClose(i);
          if (g.err)
            return g;
          var p = Pe(i, this.clonePosition());
          if (s && as(s == null ? void 0 : s.style, "::", 0)) {
            var y = lf(s.style.slice(2));
            if (u === "number") {
              var f = this.parseNumberSkeletonFromString(y, s.styleLocation);
              return f.err ? f : {
                val: { type: Ye.number, value: r, location: p, style: f.val },
                err: null
              };
            } else {
              if (y.length === 0)
                return this.error(He.EXPECT_DATE_TIME_SKELETON, p);
              var _ = y;
              this.locale && (_ = Zd(y, this.locale));
              var v = {
                type: qr.dateTime,
                pattern: _,
                location: s.styleLocation,
                parsedOptions: this.shouldParseSkeletons ? Gd(_) : {}
              }, T = u === "date" ? Ye.date : Ye.time;
              return {
                val: { type: T, value: r, location: p, style: v },
                err: null
              };
            }
          }
          return {
            val: {
              type: u === "number" ? Ye.number : u === "date" ? Ye.date : Ye.time,
              value: r,
              location: p,
              style: (a = s == null ? void 0 : s.style) !== null && a !== void 0 ? a : null
            },
            err: null
          };
        }
        case "plural":
        case "selectordinal":
        case "select": {
          var w = this.clonePosition();
          if (this.bumpSpace(), !this.bumpIf(","))
            return this.error(He.EXPECT_SELECT_ARGUMENT_OPTIONS, Pe(w, te({}, w)));
          this.bumpSpace();
          var E = this.parseIdentifierIfPossible(), C = 0;
          if (u !== "select" && E.value === "offset") {
            if (!this.bumpIf(":"))
              return this.error(He.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, Pe(this.clonePosition(), this.clonePosition()));
            this.bumpSpace();
            var f = this.tryParseDecimalInteger(He.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, He.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);
            if (f.err)
              return f;
            this.bumpSpace(), E = this.parseIdentifierIfPossible(), C = f.val;
          }
          var b = this.tryParsePluralOrSelectOptions(t, u, n, E);
          if (b.err)
            return b;
          var g = this.tryParseArgumentClose(i);
          if (g.err)
            return g;
          var S = Pe(i, this.clonePosition());
          return u === "select" ? {
            val: {
              type: Ye.select,
              value: r,
              options: os(b.val),
              location: S
            },
            err: null
          } : {
            val: {
              type: Ye.plural,
              value: r,
              options: os(b.val),
              offset: C,
              pluralType: u === "plural" ? "cardinal" : "ordinal",
              location: S
            },
            err: null
          };
        }
        default:
          return this.error(He.INVALID_ARGUMENT_TYPE, Pe(o, l));
      }
    }, e.prototype.tryParseArgumentClose = function(t) {
      return this.isEOF() || this.char() !== 125 ? this.error(He.EXPECT_ARGUMENT_CLOSING_BRACE, Pe(t, this.clonePosition())) : (this.bump(), { val: !0, err: null });
    }, e.prototype.parseSimpleArgStyleIfPossible = function() {
      for (var t = 0, n = this.clonePosition(); !this.isEOF(); ) {
        var r = this.char();
        switch (r) {
          case 39: {
            this.bump();
            var i = this.clonePosition();
            if (!this.bumpUntil("'"))
              return this.error(He.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, Pe(i, this.clonePosition()));
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
        r = Vd(t);
      } catch {
        return this.error(He.INVALID_NUMBER_SKELETON, n);
      }
      return {
        val: {
          type: qr.number,
          tokens: r,
          location: n,
          parsedOptions: this.shouldParseSkeletons ? Wd(r) : {}
        },
        err: null
      };
    }, e.prototype.tryParsePluralOrSelectOptions = function(t, n, r, i) {
      for (var a, o = !1, u = [], l = /* @__PURE__ */ new Set(), s = i.value, d = i.location; ; ) {
        if (s.length === 0) {
          var f = this.clonePosition();
          if (n !== "select" && this.bumpIf("=")) {
            var v = this.tryParseDecimalInteger(He.EXPECT_PLURAL_ARGUMENT_SELECTOR, He.INVALID_PLURAL_ARGUMENT_SELECTOR);
            if (v.err)
              return v;
            d = Pe(f, this.clonePosition()), s = this.message.slice(f.offset, this.offset());
          } else
            break;
        }
        if (l.has(s))
          return this.error(n === "select" ? He.DUPLICATE_SELECT_ARGUMENT_SELECTOR : He.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, d);
        s === "other" && (o = !0), this.bumpSpace();
        var h = this.clonePosition();
        if (!this.bumpIf("{"))
          return this.error(n === "select" ? He.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : He.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, Pe(this.clonePosition(), this.clonePosition()));
        var g = this.parseMessage(t + 1, n, r);
        if (g.err)
          return g;
        var p = this.tryParseArgumentClose(h);
        if (p.err)
          return p;
        u.push([
          s,
          {
            value: g.val,
            location: Pe(h, this.clonePosition())
          }
        ]), l.add(s), this.bumpSpace(), a = this.parseIdentifierIfPossible(), s = a.value, d = a.location;
      }
      return u.length === 0 ? this.error(n === "select" ? He.EXPECT_SELECT_ARGUMENT_SELECTOR : He.EXPECT_PLURAL_ARGUMENT_SELECTOR, Pe(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !o ? this.error(He.MISSING_OTHER_CLAUSE, Pe(this.clonePosition(), this.clonePosition())) : { val: u, err: null };
    }, e.prototype.tryParseDecimalInteger = function(t, n) {
      var r = 1, i = this.clonePosition();
      this.bumpIf("+") || this.bumpIf("-") && (r = -1);
      for (var a = !1, o = 0; !this.isEOF(); ) {
        var u = this.char();
        if (u >= 48 && u <= 57)
          a = !0, o = o * 10 + (u - 48), this.bump();
        else
          break;
      }
      var l = Pe(i, this.clonePosition());
      return a ? (o *= r, of(o) ? { val: o, err: null } : this.error(n, l)) : this.error(t, l);
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
      var n = Jl(this.message, t);
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
      if (as(this.message, t, this.offset())) {
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
      for (; !this.isEOF() && eu(this.char()); )
        this.bump();
    }, e.prototype.peek = function() {
      if (this.isEOF())
        return null;
      var t = this.char(), n = this.offset(), r = this.message.charCodeAt(n + (t >= 65536 ? 2 : 1));
      return r ?? null;
    }, e;
  }()
);
function ao(e) {
  return e >= 97 && e <= 122 || e >= 65 && e <= 90;
}
function df(e) {
  return ao(e) || e === 47;
}
function ff(e) {
  return e === 45 || e === 46 || e >= 48 && e <= 57 || e === 95 || e >= 97 && e <= 122 || e >= 65 && e <= 90 || e == 183 || e >= 192 && e <= 214 || e >= 216 && e <= 246 || e >= 248 && e <= 893 || e >= 895 && e <= 8191 || e >= 8204 && e <= 8205 || e >= 8255 && e <= 8256 || e >= 8304 && e <= 8591 || e >= 11264 && e <= 12271 || e >= 12289 && e <= 55295 || e >= 63744 && e <= 64975 || e >= 65008 && e <= 65533 || e >= 65536 && e <= 983039;
}
function eu(e) {
  return e >= 9 && e <= 13 || e === 32 || e === 133 || e >= 8206 && e <= 8207 || e === 8232 || e === 8233;
}
function hf(e) {
  return e >= 33 && e <= 35 || e === 36 || e >= 37 && e <= 39 || e === 40 || e === 41 || e === 42 || e === 43 || e === 44 || e === 45 || e >= 46 && e <= 47 || e >= 58 && e <= 59 || e >= 60 && e <= 62 || e >= 63 && e <= 64 || e === 91 || e === 92 || e === 93 || e === 94 || e === 96 || e === 123 || e === 124 || e === 125 || e === 126 || e === 161 || e >= 162 && e <= 165 || e === 166 || e === 167 || e === 169 || e === 171 || e === 172 || e === 174 || e === 176 || e === 177 || e === 182 || e === 187 || e === 191 || e === 215 || e === 247 || e >= 8208 && e <= 8213 || e >= 8214 && e <= 8215 || e === 8216 || e === 8217 || e === 8218 || e >= 8219 && e <= 8220 || e === 8221 || e === 8222 || e === 8223 || e >= 8224 && e <= 8231 || e >= 8240 && e <= 8248 || e === 8249 || e === 8250 || e >= 8251 && e <= 8254 || e >= 8257 && e <= 8259 || e === 8260 || e === 8261 || e === 8262 || e >= 8263 && e <= 8273 || e === 8274 || e === 8275 || e >= 8277 && e <= 8286 || e >= 8592 && e <= 8596 || e >= 8597 && e <= 8601 || e >= 8602 && e <= 8603 || e >= 8604 && e <= 8607 || e === 8608 || e >= 8609 && e <= 8610 || e === 8611 || e >= 8612 && e <= 8613 || e === 8614 || e >= 8615 && e <= 8621 || e === 8622 || e >= 8623 && e <= 8653 || e >= 8654 && e <= 8655 || e >= 8656 && e <= 8657 || e === 8658 || e === 8659 || e === 8660 || e >= 8661 && e <= 8691 || e >= 8692 && e <= 8959 || e >= 8960 && e <= 8967 || e === 8968 || e === 8969 || e === 8970 || e === 8971 || e >= 8972 && e <= 8991 || e >= 8992 && e <= 8993 || e >= 8994 && e <= 9e3 || e === 9001 || e === 9002 || e >= 9003 && e <= 9083 || e === 9084 || e >= 9085 && e <= 9114 || e >= 9115 && e <= 9139 || e >= 9140 && e <= 9179 || e >= 9180 && e <= 9185 || e >= 9186 && e <= 9254 || e >= 9255 && e <= 9279 || e >= 9280 && e <= 9290 || e >= 9291 && e <= 9311 || e >= 9472 && e <= 9654 || e === 9655 || e >= 9656 && e <= 9664 || e === 9665 || e >= 9666 && e <= 9719 || e >= 9720 && e <= 9727 || e >= 9728 && e <= 9838 || e === 9839 || e >= 9840 && e <= 10087 || e === 10088 || e === 10089 || e === 10090 || e === 10091 || e === 10092 || e === 10093 || e === 10094 || e === 10095 || e === 10096 || e === 10097 || e === 10098 || e === 10099 || e === 10100 || e === 10101 || e >= 10132 && e <= 10175 || e >= 10176 && e <= 10180 || e === 10181 || e === 10182 || e >= 10183 && e <= 10213 || e === 10214 || e === 10215 || e === 10216 || e === 10217 || e === 10218 || e === 10219 || e === 10220 || e === 10221 || e === 10222 || e === 10223 || e >= 10224 && e <= 10239 || e >= 10240 && e <= 10495 || e >= 10496 && e <= 10626 || e === 10627 || e === 10628 || e === 10629 || e === 10630 || e === 10631 || e === 10632 || e === 10633 || e === 10634 || e === 10635 || e === 10636 || e === 10637 || e === 10638 || e === 10639 || e === 10640 || e === 10641 || e === 10642 || e === 10643 || e === 10644 || e === 10645 || e === 10646 || e === 10647 || e === 10648 || e >= 10649 && e <= 10711 || e === 10712 || e === 10713 || e === 10714 || e === 10715 || e >= 10716 && e <= 10747 || e === 10748 || e === 10749 || e >= 10750 && e <= 11007 || e >= 11008 && e <= 11055 || e >= 11056 && e <= 11076 || e >= 11077 && e <= 11078 || e >= 11079 && e <= 11084 || e >= 11085 && e <= 11123 || e >= 11124 && e <= 11125 || e >= 11126 && e <= 11157 || e === 11158 || e >= 11159 && e <= 11263 || e >= 11776 && e <= 11777 || e === 11778 || e === 11779 || e === 11780 || e === 11781 || e >= 11782 && e <= 11784 || e === 11785 || e === 11786 || e === 11787 || e === 11788 || e === 11789 || e >= 11790 && e <= 11798 || e === 11799 || e >= 11800 && e <= 11801 || e === 11802 || e === 11803 || e === 11804 || e === 11805 || e >= 11806 && e <= 11807 || e === 11808 || e === 11809 || e === 11810 || e === 11811 || e === 11812 || e === 11813 || e === 11814 || e === 11815 || e === 11816 || e === 11817 || e >= 11818 && e <= 11822 || e === 11823 || e >= 11824 && e <= 11833 || e >= 11834 && e <= 11835 || e >= 11836 && e <= 11839 || e === 11840 || e === 11841 || e === 11842 || e >= 11843 && e <= 11855 || e >= 11856 && e <= 11857 || e === 11858 || e >= 11859 && e <= 11903 || e >= 12289 && e <= 12291 || e === 12296 || e === 12297 || e === 12298 || e === 12299 || e === 12300 || e === 12301 || e === 12302 || e === 12303 || e === 12304 || e === 12305 || e >= 12306 && e <= 12307 || e === 12308 || e === 12309 || e === 12310 || e === 12311 || e === 12312 || e === 12313 || e === 12314 || e === 12315 || e === 12316 || e === 12317 || e >= 12318 && e <= 12319 || e === 12320 || e === 12336 || e === 64830 || e === 64831 || e >= 65093 && e <= 65094;
}
function oo(e) {
  e.forEach(function(t) {
    if (delete t.location, ql(t) || zl(t))
      for (var n in t.options)
        delete t.options[n].location, oo(t.options[n].value);
    else Gl(t) && Wl(t.style) || (jl(t) || Vl(t)) && to(t.style) ? delete t.style.location : Xl(t) && oo(t.children);
  });
}
function vf(e, t) {
  t === void 0 && (t = {}), t = te({ shouldParseSkeletons: !0, requiresOtherClause: !0 }, t);
  var n = new cf(e, t).parse();
  if (n.err) {
    var r = SyntaxError(He[n.err.kind]);
    throw r.location = n.err.location, r.originalMessage = n.err.message, r;
  }
  return t != null && t.captureLocation || oo(n.val), n.val;
}
var zr;
(function(e) {
  e.MISSING_VALUE = "MISSING_VALUE", e.INVALID_VALUE = "INVALID_VALUE", e.MISSING_INTL_API = "MISSING_INTL_API";
})(zr || (zr = {}));
var pa = (
  /** @class */
  function(e) {
    mt(t, e);
    function t(n, r, i) {
      var a = e.call(this, n) || this;
      return a.code = r, a.originalMessage = i, a;
    }
    return t.prototype.toString = function() {
      return "[formatjs Error: ".concat(this.code, "] ").concat(this.message);
    }, t;
  }(Error)
), ls = (
  /** @class */
  function(e) {
    mt(t, e);
    function t(n, r, i, a) {
      return e.call(this, 'Invalid values for "'.concat(n, '": "').concat(r, '". Options are "').concat(Object.keys(i).join('", "'), '"'), zr.INVALID_VALUE, a) || this;
    }
    return t;
  }(pa)
), gf = (
  /** @class */
  function(e) {
    mt(t, e);
    function t(n, r, i) {
      return e.call(this, 'Value for "'.concat(n, '" must be of type ').concat(r), zr.INVALID_VALUE, i) || this;
    }
    return t;
  }(pa)
), pf = (
  /** @class */
  function(e) {
    mt(t, e);
    function t(n, r) {
      return e.call(this, 'The intl string context variable "'.concat(n, '" was not provided to the string "').concat(r, '"'), zr.MISSING_VALUE, r) || this;
    }
    return t;
  }(pa)
), xt;
(function(e) {
  e[e.literal = 0] = "literal", e[e.object = 1] = "object";
})(xt || (xt = {}));
function mf(e) {
  return e.length < 2 ? e : e.reduce(function(t, n) {
    var r = t[t.length - 1];
    return !r || r.type !== xt.literal || n.type !== xt.literal ? t.push(n) : r.value += n.value, t;
  }, []);
}
function bf(e) {
  return typeof e == "function";
}
function Xi(e, t, n, r, i, a, o) {
  if (e.length === 1 && ts(e[0]))
    return [
      {
        type: xt.literal,
        value: e[0].value
      }
    ];
  for (var u = [], l = 0, s = e; l < s.length; l++) {
    var d = s[l];
    if (ts(d)) {
      u.push({
        type: xt.literal,
        value: d.value
      });
      continue;
    }
    if (Nd(d)) {
      typeof a == "number" && u.push({
        type: xt.literal,
        value: n.getNumberFormat(t).format(a)
      });
      continue;
    }
    var f = d.value;
    if (!(i && f in i))
      throw new pf(f, o);
    var v = i[f];
    if (Fd(d)) {
      (!v || typeof v == "string" || typeof v == "number") && (v = typeof v == "string" || typeof v == "number" ? String(v) : ""), u.push({
        type: typeof v == "string" ? xt.literal : xt.object,
        value: v
      });
      continue;
    }
    if (jl(d)) {
      var h = typeof d.style == "string" ? r.date[d.style] : to(d.style) ? d.style.parsedOptions : void 0;
      u.push({
        type: xt.literal,
        value: n.getDateTimeFormat(t, h).format(v)
      });
      continue;
    }
    if (Vl(d)) {
      var h = typeof d.style == "string" ? r.time[d.style] : to(d.style) ? d.style.parsedOptions : r.time.medium;
      u.push({
        type: xt.literal,
        value: n.getDateTimeFormat(t, h).format(v)
      });
      continue;
    }
    if (Gl(d)) {
      var h = typeof d.style == "string" ? r.number[d.style] : Wl(d.style) ? d.style.parsedOptions : void 0;
      h && h.scale && (v = v * (h.scale || 1)), u.push({
        type: xt.literal,
        value: n.getNumberFormat(t, h).format(v)
      });
      continue;
    }
    if (Xl(d)) {
      var g = d.children, p = d.value, y = i[p];
      if (!bf(y))
        throw new gf(p, "function", o);
      var _ = Xi(g, t, n, r, i, a), T = y(_.map(function(C) {
        return C.value;
      }));
      Array.isArray(T) || (T = [T]), u.push.apply(u, T.map(function(C) {
        return {
          type: typeof C == "string" ? xt.literal : xt.object,
          value: C
        };
      }));
    }
    if (ql(d)) {
      var w = d.options[v] || d.options.other;
      if (!w)
        throw new ls(d.value, v, Object.keys(d.options), o);
      u.push.apply(u, Xi(w.value, t, n, r, i));
      continue;
    }
    if (zl(d)) {
      var w = d.options["=".concat(v)];
      if (!w) {
        if (!Intl.PluralRules)
          throw new pa(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`, zr.MISSING_INTL_API, o);
        var E = n.getPluralRules(t, { type: d.pluralType }).select(v - (d.offset || 0));
        w = d.options[E] || d.options.other;
      }
      if (!w)
        throw new ls(d.value, v, Object.keys(d.options), o);
      u.push.apply(u, Xi(w.value, t, n, r, i, v - (d.offset || 0)));
      continue;
    }
  }
  return mf(u);
}
function _f(e, t) {
  return t ? te(te(te({}, e || {}), t || {}), Object.keys(e).reduce(function(n, r) {
    return n[r] = te(te({}, e[r]), t[r] || {}), n;
  }, {})) : e;
}
function yf(e, t) {
  return t ? Object.keys(e).reduce(function(n, r) {
    return n[r] = _f(e[r], t[r]), n;
  }, te({}, e)) : e;
}
function Oa(e) {
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
function Ef(e) {
  return e === void 0 && (e = {
    number: {},
    dateTime: {},
    pluralRules: {}
  }), {
    getNumberFormat: wa(function() {
      for (var t, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((t = Intl.NumberFormat).bind.apply(t, Or([void 0], n, !1)))();
    }, {
      cache: Oa(e.number),
      strategy: La.variadic
    }),
    getDateTimeFormat: wa(function() {
      for (var t, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((t = Intl.DateTimeFormat).bind.apply(t, Or([void 0], n, !1)))();
    }, {
      cache: Oa(e.dateTime),
      strategy: La.variadic
    }),
    getPluralRules: wa(function() {
      for (var t, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((t = Intl.PluralRules).bind.apply(t, Or([void 0], n, !1)))();
    }, {
      cache: Oa(e.pluralRules),
      strategy: La.variadic
    })
  };
}
var tu = (
  /** @class */
  function() {
    function e(t, n, r, i) {
      n === void 0 && (n = e.defaultLocale);
      var a = this;
      if (this.formatterCache = {
        number: {},
        dateTime: {},
        pluralRules: {}
      }, this.format = function(l) {
        var s = a.formatToParts(l);
        if (s.length === 1)
          return s[0].value;
        var d = s.reduce(function(f, v) {
          return !f.length || v.type !== xt.literal || typeof f[f.length - 1] != "string" ? f.push(v.value) : f[f.length - 1] += v.value, f;
        }, []);
        return d.length <= 1 ? d[0] || "" : d;
      }, this.formatToParts = function(l) {
        return Xi(a.ast, a.locales, a.formatters, a.formats, l, void 0, a.message);
      }, this.resolvedOptions = function() {
        var l;
        return {
          locale: ((l = a.resolvedLocale) === null || l === void 0 ? void 0 : l.toString()) || Intl.NumberFormat.supportedLocalesOf(a.locales)[0]
        };
      }, this.getAst = function() {
        return a.ast;
      }, this.locales = n, this.resolvedLocale = e.resolveLocale(n), typeof t == "string") {
        if (this.message = t, !e.__parse)
          throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");
        var o = i || {};
        o.formatters;
        var u = Ld(o, ["formatters"]);
        this.ast = e.__parse(t, te(te({}, u), { locale: this.resolvedLocale }));
      } else
        this.ast = t;
      if (!Array.isArray(this.ast))
        throw new TypeError("A message must be provided as a String or AST.");
      this.formats = yf(e.formats, r), this.formatters = i && i.formatters || Ef(this.formatterCache);
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
    }, e.__parse = vf, e.formats = {
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
function Sf(e, t) {
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
const Nn = {}, Cf = (e, t, n) => n && (t in Nn || (Nn[t] = {}), e in Nn[t] || (Nn[t][e] = n), n), nu = (e, t) => {
  if (t == null)
    return;
  if (t in Nn && e in Nn[t])
    return Nn[t][e];
  const n = Ii(t);
  for (let r = 0; r < n.length; r++) {
    const i = n[r], a = If(i, e);
    if (a)
      return Cf(e, t, a);
  }
};
let Oo;
const Ai = Ot({});
function Af(e) {
  return Oo[e] || null;
}
function ru(e) {
  return e in Oo;
}
function If(e, t) {
  if (!ru(e))
    return null;
  const n = Af(e);
  return Sf(n, t);
}
function xf(e) {
  if (e == null)
    return;
  const t = Ii(e);
  for (let n = 0; n < t.length; n++) {
    const r = t[n];
    if (ru(r))
      return r;
  }
}
function iu(e, ...t) {
  delete Nn[e], Ai.update((n) => (n[e] = wd.all([n[e] || {}, ...t]), n));
}
Qr(
  [Ai],
  ([e]) => Object.keys(e)
);
Ai.subscribe((e) => Oo = e);
const Wi = {};
function wf(e, t) {
  Wi[e].delete(t), Wi[e].size === 0 && delete Wi[e];
}
function au(e) {
  return Wi[e];
}
function Lf(e) {
  return Ii(e).map((t) => {
    const n = au(t);
    return [t, n ? [...n] : []];
  }).filter(([, t]) => t.length > 0);
}
function Ji(e) {
  return e == null ? !1 : Ii(e).some(
    (t) => {
      var n;
      return (n = au(t)) == null ? void 0 : n.size;
    }
  );
}
function Tf(e, t) {
  return Promise.all(
    t.map((r) => (wf(e, r), r().then((i) => i.default || i)))
  ).then((r) => iu(e, ...r));
}
const oi = {};
function ou(e) {
  if (!Ji(e))
    return e in oi ? oi[e] : Promise.resolve();
  const t = Lf(e);
  return oi[e] = Promise.all(
    t.map(
      ([n, r]) => Tf(n, r)
    )
  ).then(() => {
    if (Ji(e))
      return ou(e);
    delete oi[e];
  }), oi[e];
}
var us = Object.getOwnPropertySymbols, Of = Object.prototype.hasOwnProperty, Rf = Object.prototype.propertyIsEnumerable, Hf = (e, t) => {
  var n = {};
  for (var r in e)
    Of.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && us)
    for (var r of us(e))
      t.indexOf(r) < 0 && Rf.call(e, r) && (n[r] = e[r]);
  return n;
};
const Df = {
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
function Pf({ locale: e, id: t }) {
  console.warn(
    `[svelte-i18n] The message "${t}" was not found in "${Ii(
      e
    ).join('", "')}".${Ji(Kn()) ? `

Note: there are at least one loader still registered to this locale that wasn't executed.` : ""}`
  );
}
const Mf = {
  fallbackLocale: null,
  loadingDelay: 200,
  formats: Df,
  warnOnMissingMessages: !0,
  handleMissingMessage: void 0,
  ignoreTag: !0
}, ci = Mf;
function Xr() {
  return ci;
}
function Bf(e) {
  const t = e, { formats: n } = t, r = Hf(t, ["formats"]);
  let i = e.fallbackLocale;
  if (e.initialLocale)
    try {
      tu.resolveLocale(e.initialLocale) && (i = e.initialLocale);
    } catch {
      console.warn(
        `[svelte-i18n] The initial locale "${e.initialLocale}" is not a valid locale.`
      );
    }
  return r.warnOnMissingMessages && (delete r.warnOnMissingMessages, r.handleMissingMessage == null ? r.handleMissingMessage = Pf : console.warn(
    '[svelte-i18n] The "warnOnMissingMessages" option is deprecated. Please use the "handleMissingMessage" option instead.'
  )), Object.assign(ci, r, { initialLocale: i }), n && ("number" in n && Object.assign(ci.formats.number, n.number), "date" in n && Object.assign(ci.formats.date, n.date), "time" in n && Object.assign(ci.formats.time, n.time)), yr.set(i);
}
const Ra = Ot(!1);
var Uf = Object.defineProperty, Ff = Object.defineProperties, Nf = Object.getOwnPropertyDescriptors, cs = Object.getOwnPropertySymbols, kf = Object.prototype.hasOwnProperty, Gf = Object.prototype.propertyIsEnumerable, ds = (e, t, n) => t in e ? Uf(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, jf = (e, t) => {
  for (var n in t || (t = {}))
    kf.call(t, n) && ds(e, n, t[n]);
  if (cs)
    for (var n of cs(t))
      Gf.call(t, n) && ds(e, n, t[n]);
  return e;
}, Vf = (e, t) => Ff(e, Nf(t));
let so;
const $i = Ot(null);
function fs(e) {
  return e.split("-").map((t, n, r) => r.slice(0, n + 1).join("-")).reverse();
}
function Ii(e, t = Xr().fallbackLocale) {
  const n = fs(e);
  return t ? [.../* @__PURE__ */ new Set([...n, ...fs(t)])] : n;
}
function Kn() {
  return so ?? void 0;
}
$i.subscribe((e) => {
  so = e ?? void 0, typeof window < "u" && e != null && document.documentElement.setAttribute("lang", e);
});
const qf = (e) => {
  if (e && xf(e) && Ji(e)) {
    const { loadingDelay: t } = Xr();
    let n;
    return typeof window < "u" && Kn() != null && t ? n = window.setTimeout(
      () => Ra.set(!0),
      t
    ) : Ra.set(!0), ou(e).then(() => {
      $i.set(e);
    }).finally(() => {
      clearTimeout(n), Ra.set(!1);
    });
  }
  return $i.set(e);
}, yr = Vf(jf({}, $i), {
  set: qf
}), zf = () => typeof window > "u" ? null : window.navigator.language || window.navigator.languages[0], ma = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (r) => {
    const i = JSON.stringify(r);
    return i in t ? t[i] : t[i] = e(r);
  };
};
var Xf = Object.defineProperty, ea = Object.getOwnPropertySymbols, su = Object.prototype.hasOwnProperty, lu = Object.prototype.propertyIsEnumerable, hs = (e, t, n) => t in e ? Xf(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Ro = (e, t) => {
  for (var n in t || (t = {}))
    su.call(t, n) && hs(e, n, t[n]);
  if (ea)
    for (var n of ea(t))
      lu.call(t, n) && hs(e, n, t[n]);
  return e;
}, Jr = (e, t) => {
  var n = {};
  for (var r in e)
    su.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && ea)
    for (var r of ea(e))
      t.indexOf(r) < 0 && lu.call(e, r) && (n[r] = e[r]);
  return n;
};
const mi = (e, t) => {
  const { formats: n } = Xr();
  if (e in n && t in n[e])
    return n[e][t];
  throw new Error(`[svelte-i18n] Unknown "${t}" ${e} format.`);
}, Wf = ma(
  (e) => {
    var t = e, { locale: n, format: r } = t, i = Jr(t, ["locale", "format"]);
    if (n == null)
      throw new Error('[svelte-i18n] A "locale" must be set to format numbers');
    return r && (i = mi("number", r)), new Intl.NumberFormat(n, i);
  }
), Zf = ma(
  (e) => {
    var t = e, { locale: n, format: r } = t, i = Jr(t, ["locale", "format"]);
    if (n == null)
      throw new Error('[svelte-i18n] A "locale" must be set to format dates');
    return r ? i = mi("date", r) : Object.keys(i).length === 0 && (i = mi("date", "short")), new Intl.DateTimeFormat(n, i);
  }
), Yf = ma(
  (e) => {
    var t = e, { locale: n, format: r } = t, i = Jr(t, ["locale", "format"]);
    if (n == null)
      throw new Error(
        '[svelte-i18n] A "locale" must be set to format time values'
      );
    return r ? i = mi("time", r) : Object.keys(i).length === 0 && (i = mi("time", "short")), new Intl.DateTimeFormat(n, i);
  }
), Kf = (e = {}) => {
  var t = e, {
    locale: n = Kn()
  } = t, r = Jr(t, [
    "locale"
  ]);
  return Wf(Ro({ locale: n }, r));
}, Qf = (e = {}) => {
  var t = e, {
    locale: n = Kn()
  } = t, r = Jr(t, [
    "locale"
  ]);
  return Zf(Ro({ locale: n }, r));
}, Jf = (e = {}) => {
  var t = e, {
    locale: n = Kn()
  } = t, r = Jr(t, [
    "locale"
  ]);
  return Yf(Ro({ locale: n }, r));
}, $f = ma(
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  (e, t = Kn()) => new tu(e, t, Xr().formats, {
    ignoreTag: Xr().ignoreTag
  })
), eh = (e, t = {}) => {
  var n, r, i, a;
  let o = t;
  typeof e == "object" && (o = e, e = o.id);
  const {
    values: u,
    locale: l = Kn(),
    default: s
  } = o;
  if (l == null)
    throw new Error(
      "[svelte-i18n] Cannot format a message without first setting the initial locale."
    );
  let d = nu(e, l);
  if (!d)
    d = (a = (i = (r = (n = Xr()).handleMissingMessage) == null ? void 0 : r.call(n, { locale: l, id: e, defaultValue: s })) != null ? i : s) != null ? a : e;
  else if (typeof d != "string")
    return console.warn(
      `[svelte-i18n] Message with id "${e}" must be of type "string", found: "${typeof d}". Gettin its value through the "$format" method is deprecated; use the "json" method instead.`
    ), d;
  if (!u)
    return d;
  let f = d;
  try {
    f = $f(d, l).format(u);
  } catch (v) {
    v instanceof Error && console.warn(
      `[svelte-i18n] Message "${e}" has syntax error:`,
      v.message
    );
  }
  return f;
}, th = (e, t) => Jf(t).format(e), nh = (e, t) => Qf(t).format(e), rh = (e, t) => Kf(t).format(e), ih = (e, t = Kn()) => nu(e, t), ah = Qr([yr, Ai], () => eh);
Qr([yr], () => th);
Qr([yr], () => nh);
Qr([yr], () => rh);
Qr([yr, Ai], () => ih);
function oh(e, t) {
  Object.entries(e).forEach(([a, o]) => {
    iu(a, o);
  });
  const n = localStorage.getItem("language"), r = "en", i = n ?? zf();
  console.log("Initial: Setting the language to", i), Bf({
    fallbackLocale: r,
    initialLocale: i
  }), window.addEventListener("oscd-language-changed", (a) => {
    const o = a;
    if (!o.detail.language) {
      console.error("No translations for language");
      return;
    }
    console.log("Updating the language to", o.detail.language), yr.set(o.detail.language);
  });
}
const sh = "Suche", lh = "Standort hinzufügen", uh = "Aktualisieren", ch = "Standort {name} löschen?", dh = "Bestätigen", fh = "Abbrechen", hh = "Speichern", vh = "Neuer Standort", gh = "Standort: {name}", ph = "Name", mh = "Schlüssel", bh = "Beschreibung", _h = "Standort-Tabelle", yh = "UUID", Eh = "Zugewiesene Ressourcen", Sh = {
  search: sh,
  add_location: lh,
  refresh: uh,
  delete_location: ch,
  confirm: dh,
  cancel: fh,
  save: hh,
  new_location: vh,
  location: gh,
  name: ph,
  key: mh,
  description: bh,
  location_table: _h,
  uuid: yh,
  assigned_resources: Eh
}, Ch = "Search", Ah = "Add Location", Ih = "Refresh", xh = "Delete location {name}?", wh = "Confirm", Lh = "Cancel", Th = "Save", Oh = "New Location", Rh = "Location: {name}", Hh = "Name", Dh = "Key", Ph = "Description", Mh = "Location Table", Bh = "UUID", Uh = "Assigned Resources", Fh = {
  search: Ch,
  add_location: Ah,
  refresh: Ih,
  delete_location: xh,
  confirm: wh,
  cancel: Lh,
  save: Th,
  new_location: Oh,
  location: Rh,
  name: Hh,
  key: Dh,
  description: Ph,
  location_table: Mh,
  uuid: Bh,
  assigned_resources: Uh
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
function ta(e, t) {
  let n = Object.getOwnPropertyNames(e);
  const r = {};
  for (let i = 0; i < n.length; i++) {
    const a = n[i], o = a.indexOf("$");
    o !== -1 && t.indexOf(a.substring(0, o + 1)) !== -1 || t.indexOf(a) === -1 && (r[a] = e[a]);
  }
  return r;
}
function rn(e, t) {
  let n = Object.getOwnPropertyNames(e);
  const r = {};
  for (let i = 0; i < n.length; i++) {
    const a = n[i];
    a.substring(0, t.length) === t && (r[a.substring(t.length)] = e[a]);
  }
  return r;
}
class $r {
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
    n in a || (a[n] = /* @__PURE__ */ new Map()), a[n].set(r, Nc(t, n, r, i));
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
function Nh(e, t) {
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
function kh(e, t, n) {
  if (!e)
    return { x: 0, y: 0 };
  var r = t.x, i = t.y, a = r + n.left, o = i + n.top, u, l;
  if (e.type === "touchstart") {
    var s = e;
    u = s.changedTouches[0].pageX - a, l = s.changedTouches[0].pageY - o;
  } else {
    var d = e;
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
var mn = (
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
function Gh(e) {
  return e === void 0 && (e = window), jh(e) ? { passive: !0 } : !1;
}
function jh(e) {
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
const uu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  applyPassive: Gh
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
function Vh(e, t) {
  if (e.closest)
    return e.closest(t);
  for (var n = e; n; ) {
    if (cu(n, t))
      return n;
    n = n.parentElement;
  }
  return null;
}
function cu(e, t) {
  var n = e.matches || e.webkitMatchesSelector || e.msMatchesSelector;
  return n.call(e, t);
}
function qh(e) {
  var t = e;
  if (t.offsetParent !== null)
    return t.scrollWidth;
  var n = t.cloneNode(!0);
  n.style.setProperty("position", "absolute"), n.style.setProperty("transform", "translate(-9999px, -9999px)"), document.documentElement.appendChild(n);
  var r = n.scrollWidth;
  return document.documentElement.removeChild(n), r;
}
const Ho = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  closest: Vh,
  estimateScrollWidth: qh,
  matches: cu
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
var zh = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  BG_FOCUSED: "mdc-ripple-upgraded--background-focused",
  FG_ACTIVATION: "mdc-ripple-upgraded--foreground-activation",
  FG_DEACTIVATION: "mdc-ripple-upgraded--foreground-deactivation",
  ROOT: "mdc-ripple-upgraded",
  UNBOUNDED: "mdc-ripple-upgraded--unbounded"
}, Xh = {
  VAR_FG_SCALE: "--mdc-ripple-fg-scale",
  VAR_FG_SIZE: "--mdc-ripple-fg-size",
  VAR_FG_TRANSLATE_END: "--mdc-ripple-fg-translate-end",
  VAR_FG_TRANSLATE_START: "--mdc-ripple-fg-translate-start",
  VAR_LEFT: "--mdc-ripple-left",
  VAR_TOP: "--mdc-ripple-top"
}, vs = {
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
var gs = [
  "touchstart",
  "pointerdown",
  "mousedown",
  "keydown"
], ps = [
  "touchend",
  "pointerup",
  "mouseup",
  "contextmenu"
], Bi = [], Wh = (
  /** @class */
  function(e) {
    mt(t, e);
    function t(n) {
      var r = e.call(this, te(te({}, t.defaultAdapter), n)) || this;
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
        return zh;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t, "strings", {
      get: function() {
        return Xh;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t, "numbers", {
      get: function() {
        return vs;
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
          for (var a = At(gs), o = a.next(); !o.done; o = a.next()) {
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
    }, t.prototype.registerDeactivationHandlers = function(n) {
      var r, i;
      if (n.type === "keydown")
        this.adapter.registerInteractionHandler("keyup", this.deactivateHandler);
      else
        try {
          for (var a = At(ps), o = a.next(); !o.done; o = a.next()) {
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
    }, t.prototype.deregisterRootHandlers = function() {
      var n, r;
      try {
        for (var i = At(gs), a = i.next(); !a.done; a = i.next()) {
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
    }, t.prototype.deregisterDeactivationHandlers = function() {
      var n, r;
      this.adapter.deregisterInteractionHandler("keyup", this.deactivateHandler);
      try {
        for (var i = At(ps), a = i.next(); !a.done; a = i.next()) {
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
            var u = n !== void 0 && Bi.length > 0 && Bi.some(function(l) {
              return r.adapter.containsEventTarget(l);
            });
            if (u) {
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
      var n = this, r = t.strings, i = r.VAR_FG_TRANSLATE_START, a = r.VAR_FG_TRANSLATE_END, o = t.cssClasses, u = o.FG_DEACTIVATION, l = o.FG_ACTIVATION, s = t.numbers.DEACTIVATION_TIMEOUT_MS;
      this.layoutInternal();
      var d = "", f = "";
      if (!this.adapter.isUnbounded()) {
        var v = this.getFgTranslationCoordinates(), h = v.startPoint, g = v.endPoint;
        d = h.x + "px, " + h.y + "px", f = g.x + "px, " + g.y + "px";
      }
      this.adapter.updateCssVariable(i, d), this.adapter.updateCssVariable(a, f), clearTimeout(this.activationTimer), clearTimeout(this.fgDeactivationRemovalTimer), this.rmBoundedActivationClasses(), this.adapter.removeClass(u), this.adapter.computeBoundingRect(), this.adapter.addClass(l), this.activationTimer = setTimeout(function() {
        n.activationTimerCallback();
      }, s);
    }, t.prototype.getFgTranslationCoordinates = function() {
      var n = this.activationState, r = n.activationEvent, i = n.wasActivatedByPointer, a;
      i ? a = kh(r, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect()) : a = {
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
      var n = this, r = t.cssClasses.FG_DEACTIVATION, i = this.activationState, a = i.hasDeactivationUXRun, o = i.isActivated, u = a || !o;
      u && this.activationAnimationHasEnded && (this.rmBoundedActivationClasses(), this.adapter.addClass(r), this.fgDeactivationRemovalTimer = setTimeout(function() {
        n.adapter.removeClass(r);
      }, vs.FG_DEACTIVATION_MS));
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
        var i = te({}, r);
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
  }(mn)
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
var Ha = "mdc-dom-focus-sentinel", Zh = (
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
      [].slice.call(this.root.querySelectorAll("." + Ha)).forEach(function(t) {
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
        var i = r.getAttribute("aria-disabled") === "true" || r.getAttribute("disabled") != null || r.getAttribute("hidden") != null || r.getAttribute("aria-hidden") === "true", a = r.tabIndex >= 0 && r.getBoundingClientRect().width > 0 && !r.classList.contains(Ha) && !i, o = !1;
        if (a) {
          var u = getComputedStyle(r);
          o = u.display === "none" || u.visibility === "hidden";
        }
        return a && !o;
      });
    }, e.prototype.createSentinel = function() {
      var t = document.createElement("div");
      return t.setAttribute("tabindex", "0"), t.setAttribute("aria-hidden", "true"), t.classList.add(Ha), t;
    }, e;
  }()
);
const Yh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  FocusTrap: Zh
}, Symbol.toStringTag, { value: "Module" })), { applyPassive: ms } = uu, { matches: Kh } = Ho;
function Hn(e, { ripple: t = !0, surface: n = !1, unbounded: r = !1, disabled: i = !1, color: a, active: o, rippleElement: u, eventTarget: l, activeTarget: s, addClass: d = (g) => e.classList.add(g), removeClass: f = (g) => e.classList.remove(g), addStyle: v = (g, p) => e.style.setProperty(g, p), initPromise: h = Promise.resolve() } = {}) {
  let g, p = new $r(), y = be("SMUI:addLayoutListener"), _, T = o, w = l, E = s;
  function C() {
    n ? (d("mdc-ripple-surface"), a === "primary" ? (d("smui-ripple-surface--primary"), f("smui-ripple-surface--secondary")) : a === "secondary" ? (f("smui-ripple-surface--primary"), d("smui-ripple-surface--secondary")) : (f("smui-ripple-surface--primary"), f("smui-ripple-surface--secondary"))) : (f("mdc-ripple-surface"), f("smui-ripple-surface--primary"), f("smui-ripple-surface--secondary")), g && T !== o && (T = o, o ? g.activate() : o === !1 && g.deactivate()), t && !g ? (g = new Wh({
      addClass: d,
      browserSupportsCssVars: () => Nh(window),
      computeBoundingRect: () => (u || e).getBoundingClientRect(),
      containsEventTarget: (S) => e.contains(S),
      deregisterDocumentInteractionHandler: (S, x) => p.off(document.documentElement, S, x),
      deregisterInteractionHandler: (S, x) => p.off(l || e, S, x),
      deregisterResizeHandler: (S) => window.removeEventListener("resize", S),
      getWindowPageOffset: () => {
        var S, x;
        return {
          x: (S = window.pageXOffset) !== null && S !== void 0 ? S : window.scrollX,
          y: (x = window.pageYOffset) !== null && x !== void 0 ? x : window.scrollY
        };
      },
      isSurfaceActive: () => o ?? Kh(s || e, ":active"),
      isSurfaceDisabled: () => !!i,
      isUnbounded: () => !!r,
      registerDocumentInteractionHandler: (S, x) => {
        const O = ms();
        p.on(document.documentElement, S, x, typeof O == "boolean" ? { capture: O } : O);
      },
      registerInteractionHandler: (S, x) => {
        const O = ms();
        p.on(l || e, S, x, typeof O == "boolean" ? { capture: O } : O);
      },
      registerResizeHandler: (S) => p.on(window, "resize", S),
      removeClass: f,
      updateCssVariable: v
    }), h.then(() => {
      g && (g.init(), g.setUnbounded(r));
    })) : g && !t && h.then(() => {
      g && (g.destroy(), g = void 0, p.clear());
    }), g && (w !== l || E !== s) && (w = l, E = s, g.destroy(), requestAnimationFrame(() => {
      g && (g.init(), g.setUnbounded(r));
    })), !t && r && d("mdc-ripple-upgraded--unbounded");
  }
  C(), y && (_ = y(b));
  function b() {
    g && g.layout();
  }
  return {
    update(S) {
      ({
        ripple: t,
        surface: n,
        unbounded: r,
        disabled: i,
        color: a,
        active: o,
        rippleElement: u,
        eventTarget: l,
        activeTarget: s,
        addClass: d,
        removeClass: f,
        addStyle: v,
        initPromise: h
      } = Object.assign({ ripple: !0, surface: !1, unbounded: !1, disabled: !1, color: void 0, active: void 0, rippleElement: void 0, eventTarget: void 0, activeTarget: void 0, addClass: (x) => e.classList.add(x), removeClass: (x) => e.classList.remove(x), addStyle: (x, O) => e.style.setProperty(x, O), initPromise: Promise.resolve() }, S)), C();
    },
    destroy() {
      g && (g.destroy(), g = void 0, p.clear(), f("mdc-ripple-surface"), f("smui-ripple-surface--primary"), f("smui-ripple-surface--secondary")), _ && _();
    }
  };
}
function $n(e, t) {
  Te(t, !0);
  let n = m(t, "use", 19, () => []), r = m(t, "class", 3, ""), i = m(t, "component", 3, xi), a = m(t, "tag", 3, "span"), o = /* @__PURE__ */ Ve(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "component",
    "tag",
    "children"
  ]), u;
  const l = be("SMUI:label:context"), s = be("SMUI:label:tabindex");
  function d() {
    return u.getElement();
  }
  var f = { getElement: d }, v = Z(), h = V(v);
  {
    let g = /* @__PURE__ */ pe(() => je({
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
    Kr(h, i, (p, y) => {
      Ee(
        y(p, ut(
          {
            get tag() {
              return a();
            },
            get use() {
              return n();
            },
            get class() {
              return c(g);
            }
          },
          () => l === "snackbar" ? { "aria-atomic": "false" } : {},
          {
            get tabindex() {
              return s;
            }
          },
          () => o,
          {
            children: (_, T) => {
              var w = Z(), E = V(w);
              se(E, () => t.children ?? $), I(_, w);
            },
            $$slots: { default: !0 }
          }
        )),
        (_) => u = _,
        () => u
      );
    });
  }
  return I(e, v), Oe(f);
}
function Qh(e, t) {
  Te(t, !0);
  let n = m(t, "use", 19, () => []), r = m(t, "class", 3, ""), i = m(t, "on", 3, !1), a = m(t, "component", 3, xi), o = m(t, "tag", 3, "i"), u = /* @__PURE__ */ Ve(t, [
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
  const s = /* @__PURE__ */ pe(() => o() === "svg" || a() === ev), d = be("SMUI:icon:context");
  function f() {
    return l.getElement();
  }
  var v = { getElement: f }, h = Z(), g = V(h);
  {
    let p = /* @__PURE__ */ pe(() => je({
      "mdc-button__icon": d === "button",
      "mdc-fab__icon": d === "fab",
      "mdc-icon-button__icon": d === "icon-button",
      "mdc-icon-button__icon--on": d === "icon-button" && i(),
      "mdc-tab__icon": d === "tab",
      "mdc-banner__icon": d === "banner",
      "mdc-segmented-button__icon": d === "segmented-button",
      [r()]: !0
    }));
    Kr(g, a, (y, _) => {
      Ee(
        _(y, ut(
          {
            get tag() {
              return o();
            },
            get use() {
              return n();
            },
            get class() {
              return c(p);
            },
            "aria-hidden": "true"
          },
          () => c(s) ? { focusable: "false", tabindex: "-1" } : {},
          () => u,
          {
            children: (T, w) => {
              var E = Z(), C = V(E);
              se(C, () => t.children ?? $), I(T, E);
            },
            $$slots: { default: !0 }
          }
        )),
        (T) => l = T,
        () => l
      );
    });
  }
  return I(e, h), Oe(v);
}
var Jh = /* @__PURE__ */ qt("<svg><!></svg>");
function xi(e, t) {
  Te(t, !0);
  let n = m(t, "use", 19, () => []), r = m(t, "tag", 3, "div"), i = /* @__PURE__ */ Ve(t, ["$$slots", "$$events", "$$legacy", "use", "tag", "children"]);
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
  function u() {
    return o;
  }
  var l = { getElement: u }, s = Z(), d = V(s);
  {
    var f = (h) => {
      var g = Jh();
      We(g, () => ({ ...i }));
      var p = de(g);
      se(p, () => t.children ?? $), Ee(g, (y) => o = y, () => o), Xe(g, (y, _) => q == null ? void 0 : q(y, _), n), I(h, g);
    }, v = (h) => {
      var g = Z(), p = V(g);
      {
        var y = (T) => {
          var w = Z(), E = V(w);
          Wo(E, r, !1, (C, b) => {
            Ee(C, (S) => o = S, () => o), Xe(C, (S, x) => q == null ? void 0 : q(S, x), n), We(C, () => ({ ...i }));
          }), I(T, w);
        }, _ = (T) => {
          var w = Z(), E = V(w);
          Wo(E, r, !1, (C, b) => {
            Ee(C, (O) => o = O, () => o), Xe(C, (O, D) => q == null ? void 0 : q(O, D), n), We(C, () => ({ ...i }));
            var S = Z(), x = V(S);
            se(x, () => t.children ?? $), I(b, S);
          }), I(T, w);
        };
        re(
          p,
          (T) => {
            c(a) ? T(y) : T(_, !1);
          },
          !0
        );
      }
      I(h, g);
    };
    re(d, (h) => {
      r() === "svg" ? h(f) : h(v, !1);
    });
  }
  return I(e, s), Oe(l);
}
var $h = /* @__PURE__ */ qt("<svg><!></svg>");
function ev(e, t) {
  Te(t, !0), console && console.warn && console.warn('The @smui/common Svg component is deprecated. You can use `tag="svg"` now.');
  let n = m(t, "use", 19, () => []), r = /* @__PURE__ */ Ve(t, ["$$slots", "$$events", "$$legacy", "use", "children"]), i;
  function a() {
    return i;
  }
  var o = { getElement: a }, u = $h();
  We(u, () => ({ ...r }));
  var l = de(u);
  return se(l, () => t.children ?? $), Ee(u, (s) => i = s, () => i), Xe(u, (s, d) => q == null ? void 0 : q(s, d), n), I(e, u), Oe(o);
}
function Ui(e, t) {
  Te(t, !0);
  const [n, r] = Yn(), i = Ot(t.value);
  ue(t.key, i), Be(() => {
    Fn(i, t.value);
  }), _r(() => {
    i.set(void 0);
  });
  var a = Z(), o = V(a);
  se(o, () => t.children ?? $), I(e, a), Oe(), r();
}
var tv = /* @__PURE__ */ J('<div class="mdc-button__touch"></div>'), nv = /* @__PURE__ */ J('<div class="mdc-button__ripple"></div> <!><!>', 1);
function rv(e, t) {
  Te(t, !0);
  let n = m(t, "use", 19, () => []), r = m(t, "class", 3, ""), i = m(t, "style", 3, ""), a = m(t, "ripple", 3, !0), o = m(t, "color", 3, "primary"), u = m(t, "variant", 3, "text"), l = m(t, "touch", 3, !1), s = m(t, "action", 3, "close"), d = m(t, "defaultAction", 3, !1), f = m(t, "secondary", 3, !1), v = m(t, "component", 3, xi), h = m(t, "tag", 19, () => t.href == null ? "button" : "a"), g = /* @__PURE__ */ Ve(t, [
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
  ]), p, y = _e({}), _ = _e({}), T = be("SMUI:button:context");
  const w = /* @__PURE__ */ pe(() => T === "dialog:action" && s() != null ? { "data-mdc-dialog-action": s() } : { action: s() }), E = /* @__PURE__ */ pe(() => T === "dialog:action" && d() ? { "data-mdc-dialog-button-default": "" } : {}), C = /* @__PURE__ */ pe(() => T === "banner" ? {} : { secondary: f() });
  let b = t.disabled;
  Be(() => {
    if (b !== t.disabled) {
      if (p) {
        const F = U();
        "blur" in F && F.blur();
      }
      b = g.disabled;
    }
  }), ue("SMUI:label:context", "button"), ue("SMUI:icon:context", "button");
  function S(F) {
    y[F] || (y[F] = !0);
  }
  function x(F) {
    (!(F in y) || y[F]) && (y[F] = !1);
  }
  function O(F, H) {
    _[F] != H && (H === "" || H == null ? delete _[F] : _[F] = H);
  }
  function D() {
    T === "banner" && nt(U(), f() ? "SMUIBannerButtonSecondaryActionClick" : "SMUIBannerButtonPrimaryActionClick");
  }
  function U() {
    return p.getElement();
  }
  var W = { getElement: U }, Y = Z(), me = V(Y);
  {
    let F = /* @__PURE__ */ pe(() => [
      [
        Hn,
        {
          ripple: a(),
          unbounded: !1,
          color: o(),
          disabled: !!t.disabled,
          addClass: S,
          removeClass: x,
          addStyle: O
        }
      ],
      ...n()
    ]), H = /* @__PURE__ */ pe(() => je({
      "mdc-button": !0,
      "mdc-button--raised": u() === "raised",
      "mdc-button--unelevated": u() === "unelevated",
      "mdc-button--outlined": u() === "outlined",
      "smui-button--color-secondary": o() === "secondary",
      "mdc-button--touch": l(),
      "mdc-card__action": T === "card:action",
      "mdc-card__action--button": T === "card:action",
      "mdc-dialog__button": T === "dialog:action",
      "mdc-top-app-bar__navigation-icon": T === "top-app-bar:navigation",
      "mdc-top-app-bar__action-item": T === "top-app-bar:action",
      "mdc-snackbar__action": T === "snackbar:actions",
      "mdc-banner__secondary-action": T === "banner" && f(),
      "mdc-banner__primary-action": T === "banner" && !f(),
      "mdc-tooltip__action": T === "tooltip:rich-actions",
      ...y,
      [r()]: !0
    })), P = /* @__PURE__ */ pe(() => Object.entries(_).map(([j, K]) => `${j}: ${K};`).concat([i()]).join(" "));
    Kr(me, v, (j, K) => {
      Ee(
        K(j, ut(
          {
            get tag() {
              return h();
            },
            get use() {
              return c(F);
            },
            get class() {
              return c(H);
            },
            get style() {
              return c(P);
            }
          },
          () => c(w),
          () => c(E),
          () => c(C),
          {
            get href() {
              return t.href;
            }
          },
          () => g,
          {
            onclick: (G) => {
              var A;
              D(), (A = t.onclick) == null || A.call(t, G);
            },
            children: (G, A) => {
              var M = nv(), ie = ae(V(M), 2);
              se(ie, () => t.children ?? $);
              var he = ae(ie);
              {
                var oe = (ee) => {
                  var Q = tv();
                  I(ee, Q);
                };
                re(he, (ee) => {
                  l() && ee(oe);
                });
              }
              I(G, M);
            },
            $$slots: { default: !0 }
          }
        )),
        (G) => p = G,
        () => p
      );
    });
  }
  return I(e, Y), Oe(W);
}
function nr(e, t) {
  Te(t, !0);
  let n = m(t, "callback", 3, () => {
  }), r = m(t, "disabled", 3, !1), i = m(t, "variant", 3, "default"), a = m(t, "isAbortAction", 3, !1), o = m(t, "backgroundColor", 3, void 0);
  {
    let u = /* @__PURE__ */ pe(() => a() ? "background-color: #ff3e00;" : "background-color: " + o());
    rv(e, {
      onclick: () => n()(),
      get variant() {
        return i();
      },
      get disabled() {
        return r();
      },
      get style() {
        return c(u);
      },
      children: (l, s) => {
        var d = Z(), f = V(d);
        se(f, () => t.children ?? $), I(l, d);
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
}, _n = {
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
var iv = (
  /** @class */
  function(e) {
    mt(t, e);
    function t(n) {
      var r = e.call(this, te(te({}, t.defaultAdapter), n)) || this;
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
        return _n;
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
      var n = this.adapter.getAttr(_n.DATA_ARIA_LABEL_ON), r = this.adapter.getAttr(_n.DATA_ARIA_LABEL_OFF);
      if (n && r) {
        if (this.adapter.getAttr(_n.ARIA_PRESSED) !== null)
          throw new Error("MDCIconButtonToggleFoundation: Button should not set `aria-pressed` if it has a toggled aria label.");
        this.hasToggledAriaLabel = !0;
      } else
        this.adapter.setAttr(_n.ARIA_PRESSED, String(this.isOn()));
    }, t.prototype.handleClick = function() {
      this.toggle(), this.adapter.notifyChange({ isOn: this.isOn() });
    }, t.prototype.isOn = function() {
      return this.adapter.hasClass(Fi.ICON_BUTTON_ON);
    }, t.prototype.toggle = function(n) {
      if (n === void 0 && (n = !this.isOn()), n ? this.adapter.addClass(Fi.ICON_BUTTON_ON) : this.adapter.removeClass(Fi.ICON_BUTTON_ON), this.hasToggledAriaLabel) {
        var r = n ? this.adapter.getAttr(_n.DATA_ARIA_LABEL_ON) : this.adapter.getAttr(_n.DATA_ARIA_LABEL_OFF);
        this.adapter.setAttr(_n.ARIA_LABEL, r || "");
      } else
        this.adapter.setAttr(_n.ARIA_PRESSED, "" + n);
    }, t;
  }(mn)
), av = /* @__PURE__ */ J('<div class="mdc-icon-button__touch"></div>'), ov = /* @__PURE__ */ J('<div class="mdc-icon-button__ripple"></div> <!><!>', 1);
function sv(e, t) {
  Te(t, !0);
  let n = () => {
  };
  function r(A) {
    return A === n;
  }
  let i = m(t, "use", 19, () => []), a = m(t, "class", 3, ""), o = m(t, "style", 3, ""), u = m(t, "ripple", 3, !0), l = m(t, "toggle", 3, !1), s = m(t, "pressed", 15, n), d = m(t, "touch", 3, !1), f = m(t, "displayFlex", 3, !0), v = m(t, "size", 3, "normal"), h = m(t, "component", 3, xi), g = m(t, "tag", 19, () => t.href == null ? "button" : "a"), p = /* @__PURE__ */ Ve(t, [
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
  ]), y, _, T = /* @__PURE__ */ ye(_e({})), w = _e({}), E = /* @__PURE__ */ ye(_e({})), C = be("SMUI:icon-button:context"), b = be("SMUI:icon-button:aria-describedby");
  const S = /* @__PURE__ */ pe(() => {
    if (C === "data-table:pagination")
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
    else return C === "dialog:header" || C === "dialog:sheet" ? { "data-mdc-dialog-action": t.action } : { action: t.action };
  });
  let x = !!t.disabled;
  Be(() => {
    if (x != !!t.disabled) {
      if (y) {
        const A = P();
        "blur" in A && A.blur();
      }
      x = !!t.disabled;
    }
  }), ue("SMUI:icon:context", "icon-button");
  let O = null;
  Be(() => {
    y && P() && l() !== O && (l() && !_ ? (_ = new iv({
      addClass: U,
      hasClass: D,
      notifyChange: (A) => {
        H(A), nt(P(), "SMUIIconButtonToggleChange", A);
      },
      removeClass: W,
      getAttr: me,
      setAttr: F
    }), _.init()) : !l() && _ && (_.destroy(), _ = void 0, z(T, {}, !0), z(E, {}, !0)), O = l());
  }), Be(() => {
    _ && !r(s()) && _.isOn() !== s() && _.toggle(s());
  }), _r(() => {
    _ && _.destroy();
  });
  function D(A) {
    return A in c(T) ? c(T)[A] : P().classList.contains(A);
  }
  function U(A) {
    c(T)[A] || (c(T)[A] = !0);
  }
  function W(A) {
    (!(A in c(T)) || c(T)[A]) && (c(T)[A] = !1);
  }
  function Y(A, M) {
    w[A] != M && (M === "" || M == null ? delete w[A] : w[A] = M);
  }
  function me(A) {
    return A in c(E) ? c(E)[A] ?? null : P().getAttribute(A);
  }
  function F(A, M) {
    c(E)[A] !== M && (c(E)[A] = M);
  }
  function H(A) {
    s(A.isOn);
  }
  function P() {
    return y.getElement();
  }
  var j = { getElement: P }, K = Z(), G = V(K);
  {
    let A = /* @__PURE__ */ pe(() => [
      [
        Hn,
        {
          ripple: u(),
          unbounded: !0,
          color: t.color,
          disabled: !!t.disabled,
          addClass: U,
          removeClass: W,
          addStyle: Y
        }
      ],
      ...i()
    ]), M = /* @__PURE__ */ pe(() => je({
      "mdc-icon-button": !0,
      "mdc-icon-button--on": !r(s()) && s(),
      "mdc-icon-button--touch": d(),
      "mdc-icon-button--display-flex": f(),
      "smui-icon-button--size-button": v() === "button",
      "smui-icon-button--size-mini": v() === "mini",
      "mdc-icon-button--reduced-size": v() === "mini" || v() === "button",
      "mdc-card__action": C === "card:action",
      "mdc-card__action--icon": C === "card:action",
      "mdc-top-app-bar__navigation-icon": C === "top-app-bar:navigation",
      "mdc-top-app-bar__action-item": C === "top-app-bar:action",
      "mdc-snackbar__dismiss": C === "snackbar:actions",
      "mdc-data-table__pagination-button": C === "data-table:pagination",
      "mdc-data-table__sort-icon-button": C === "data-table:sortable-header-cell",
      "mdc-dialog__close": (C === "dialog:header" || C === "dialog:sheet") && t.action === "close",
      ...c(T),
      [a()]: !0
    })), ie = /* @__PURE__ */ pe(() => Object.entries(w).map(([ee, Q]) => `${ee}: ${Q};`).concat([o()]).join(" ")), he = /* @__PURE__ */ pe(() => r(s()) ? null : s() ? "true" : "false"), oe = /* @__PURE__ */ pe(() => s() ? t.ariaLabelOn : t.ariaLabelOff);
    Kr(G, h, (ee, Q) => {
      Ee(
        Q(ee, ut(
          {
            get tag() {
              return g();
            },
            get use() {
              return c(A);
            },
            get class() {
              return c(M);
            },
            get style() {
              return c(ie);
            },
            get "aria-pressed"() {
              return c(he);
            },
            get "aria-label"() {
              return c(oe);
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
          () => c(S),
          () => c(E),
          () => p,
          {
            onclick: (fe) => {
              var Le;
              _ && _.handleClick(), C === "top-app-bar:navigation" && nt(P(), "SMUITopAppBarIconButtonNav"), (Le = t.onclick) == null || Le.call(t, fe);
            },
            children: (fe, Le) => {
              var Re = ov(), ve = ae(V(Re), 2);
              se(ve, () => t.children ?? $);
              var le = ae(ve);
              {
                var Ue = (xe) => {
                  var Se = av();
                  I(xe, Se);
                };
                re(le, (xe) => {
                  d() && xe(Ue);
                });
              }
              I(fe, Re);
            },
            $$slots: { default: !0 }
          }
        )),
        (fe) => y = fe,
        () => y
      );
    });
  }
  return I(e, K), Oe(j);
}
function lv(e, t) {
  let n = m(t, "callback", 3, () => {
  }), r = m(t, "icon", 3, ""), i = m(t, "disabled", 3, !1);
  sv(e, {
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
      Qh(a, {
        class: "material-icons",
        children: (u, l) => {
          var s = St();
          Ae(() => et(s, r())), I(u, s);
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
var uv = {
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
var cv = (
  /** @class */
  function(e) {
    mt(t, e);
    function t(n) {
      var r = e.call(this, te(te({}, t.defaultAdapter), n)) || this;
      return r.shakeAnimationEndHandler = function() {
        r.handleShakeAnimationEnd();
      }, r;
    }
    return Object.defineProperty(t, "cssClasses", {
      get: function() {
        return uv;
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
  }(mn)
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
var er = {
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
var dv = (
  /** @class */
  function(e) {
    mt(t, e);
    function t(n) {
      var r = e.call(this, te(te({}, t.defaultAdapter), n)) || this;
      return r.transitionEndHandler = function(i) {
        r.handleTransitionEnd(i);
      }, r;
    }
    return Object.defineProperty(t, "cssClasses", {
      get: function() {
        return er;
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
      this.adapter.removeClass(er.LINE_RIPPLE_DEACTIVATING), this.adapter.addClass(er.LINE_RIPPLE_ACTIVE);
    }, t.prototype.setRippleCenter = function(n) {
      this.adapter.setStyle("transform-origin", n + "px center");
    }, t.prototype.deactivate = function() {
      this.adapter.addClass(er.LINE_RIPPLE_DEACTIVATING);
    }, t.prototype.handleTransitionEnd = function(n) {
      var r = this.adapter.hasClass(er.LINE_RIPPLE_DEACTIVATING);
      n.propertyName === "opacity" && r && (this.adapter.removeClass(er.LINE_RIPPLE_ACTIVE), this.adapter.removeClass(er.LINE_RIPPLE_DEACTIVATING));
    }, t;
  }(mn)
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
var fv = {
  NOTCH_ELEMENT_SELECTOR: ".mdc-notched-outline__notch"
}, bs = {
  // This should stay in sync with $mdc-notched-outline-padding * 2.
  NOTCH_ELEMENT_PADDING: 8
}, hv = {
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
var vv = (
  /** @class */
  function(e) {
    mt(t, e);
    function t(n) {
      return e.call(this, te(te({}, t.defaultAdapter), n)) || this;
    }
    return Object.defineProperty(t, "strings", {
      get: function() {
        return fv;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t, "cssClasses", {
      get: function() {
        return hv;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t, "numbers", {
      get: function() {
        return bs;
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
      n > 0 && (n += bs.NOTCH_ELEMENT_PADDING), this.adapter.setNotchWidthProperty(n), this.adapter.addClass(r);
    }, t.prototype.closeNotch = function() {
      var n = t.cssClasses.OUTLINE_NOTCHED;
      this.adapter.removeClass(n), this.adapter.removeNotchWidthProperty();
    }, t;
  }(mn)
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
var Da = {
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
}, gv = {
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
}, _s = {
  LABEL_SCALE: 0.75
}, pv = [
  "pattern",
  "min",
  "max",
  "required",
  "step",
  "minlength",
  "maxlength"
], mv = [
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
var ys = ["mousedown", "touchstart"], Es = ["click", "keydown"], bv = (
  /** @class */
  function(e) {
    mt(t, e);
    function t(n, r) {
      r === void 0 && (r = {});
      var i = e.call(this, te(te({}, t.defaultAdapter), n)) || this;
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
        return gv;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t, "strings", {
      get: function() {
        return Da;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t, "numbers", {
      get: function() {
        return _s;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t.prototype, "shouldAlwaysFloat", {
      get: function() {
        var n = this.getNativeInput().type;
        return mv.indexOf(n) >= 0;
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
        for (var o = At(ys), u = o.next(); !u.done; u = o.next()) {
          var l = u.value;
          this.adapter.registerInputInteractionHandler(l, this.setPointerXOffset);
        }
      } catch (f) {
        n = { error: f };
      } finally {
        try {
          u && !u.done && (r = o.return) && r.call(o);
        } finally {
          if (n) throw n.error;
        }
      }
      try {
        for (var s = At(Es), d = s.next(); !d.done; d = s.next()) {
          var l = d.value;
          this.adapter.registerTextFieldInteractionHandler(l, this.textFieldInteractionHandler);
        }
      } catch (f) {
        i = { error: f };
      } finally {
        try {
          d && !d.done && (a = s.return) && a.call(s);
        } finally {
          if (i) throw i.error;
        }
      }
      this.validationObserver = this.adapter.registerValidationAttributeChangeHandler(this.validationAttributeChangeHandler), this.setcharacterCounter(this.getValue().length);
    }, t.prototype.destroy = function() {
      var n, r, i, a;
      this.adapter.deregisterInputInteractionHandler("focus", this.inputFocusHandler), this.adapter.deregisterInputInteractionHandler("blur", this.inputBlurHandler), this.adapter.deregisterInputInteractionHandler("input", this.inputInputHandler);
      try {
        for (var o = At(ys), u = o.next(); !u.done; u = o.next()) {
          var l = u.value;
          this.adapter.deregisterInputInteractionHandler(l, this.setPointerXOffset);
        }
      } catch (f) {
        n = { error: f };
      } finally {
        try {
          u && !u.done && (r = o.return) && r.call(o);
        } finally {
          if (n) throw n.error;
        }
      }
      try {
        for (var s = At(Es), d = s.next(); !d.done; d = s.next()) {
          var l = d.value;
          this.adapter.deregisterTextFieldInteractionHandler(l, this.textFieldInteractionHandler);
        }
      } catch (f) {
        i = { error: f };
      } finally {
        try {
          d && !d.done && (a = s.return) && a.call(s);
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
        return pv.indexOf(i) > -1 ? (r.styleValidity(!0), r.adapter.setLabelRequired(r.getNativeInput().required), !0) : !1;
      }), n.indexOf("maxlength") > -1 && this.setcharacterCounter(this.getValue().length);
    }, t.prototype.notchOutline = function(n) {
      if (!(!this.adapter.hasOutline() || !this.adapter.hasLabel()))
        if (n) {
          var r = this.adapter.getLabelWidth() * _s.LABEL_SCALE;
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
        a && o ? this.adapter.setInputAttr(Da.ARIA_DESCRIBEDBY, o) : this.adapter.removeInputAttr(Da.ARIA_DESCRIBEDBY);
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
  }(mn)
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
var Ss = {
  ICON_EVENT: "MDCTextField:icon",
  ICON_ROLE: "button"
}, _v = {
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
var Cs = ["click", "keydown"], yv = (
  /** @class */
  function(e) {
    mt(t, e);
    function t(n) {
      var r = e.call(this, te(te({}, t.defaultAdapter), n)) || this;
      return r.savedTabIndex = null, r.interactionHandler = function(i) {
        r.handleInteraction(i);
      }, r;
    }
    return Object.defineProperty(t, "strings", {
      get: function() {
        return Ss;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t, "cssClasses", {
      get: function() {
        return _v;
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
        for (var i = At(Cs), a = i.next(); !a.done; a = i.next()) {
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
    }, t.prototype.destroy = function() {
      var n, r;
      try {
        for (var i = At(Cs), a = i.next(); !a.done; a = i.next()) {
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
    }, t.prototype.setDisabled = function(n) {
      this.savedTabIndex && (n ? (this.adapter.setAttr("tabindex", "-1"), this.adapter.removeAttr("role")) : (this.adapter.setAttr("tabindex", this.savedTabIndex), this.adapter.setAttr("role", Ss.ICON_ROLE)));
    }, t.prototype.setAriaLabel = function(n) {
      this.adapter.setAttr("aria-label", n);
    }, t.prototype.setContent = function(n) {
      this.adapter.setContent(n);
    }, t.prototype.handleInteraction = function(n) {
      var r = n.key === "Enter" || n.keyCode === 13;
      (n.type === "click" || r) && (n.preventDefault(), this.adapter.notifyIconAction());
    }, t;
  }(mn)
), Ev = /* @__PURE__ */ J("<span><!></span>"), Sv = /* @__PURE__ */ J("<label><!></label>");
function As(e, t) {
  Te(t, !0);
  let n = m(t, "use", 19, () => []), r = m(t, "class", 3, ""), i = m(t, "style", 3, ""), a = m(t, "floatAbove", 15, !1), o = m(t, "required", 15, !1), u = m(t, "wrapped", 3, !1), l = /* @__PURE__ */ Ve(t, [
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
  ]), s, d = /* @__PURE__ */ ye(void 0), f = new $r(), v = _e({}), h = _e({}), g = be("SMUI:generic:input:props") ?? {}, p = a();
  Be(() => {
    c(d) && p !== a() && (p = a(), c(d).float(a()));
  });
  let y = o();
  Be(() => {
    c(d) && y !== o() && (y = o(), c(d).setRequired(o()));
  });
  const _ = be("SMUI:floating-label:mount"), T = be("SMUI:floating-label:unmount");
  pt(() => {
    z(
      d,
      new cv({
        addClass: w,
        removeClass: E,
        getWidth: () => {
          var A, M;
          const j = U(), K = j.cloneNode(!0);
          (A = j.parentNode) == null || A.appendChild(K), K.classList.add("smui-floating-label--remove-transition"), K.classList.add("smui-floating-label--force-size"), K.classList.remove("mdc-floating-label--float-above");
          const G = K.scrollWidth;
          return (M = j.parentNode) == null || M.removeChild(K), G;
        },
        registerInteractionHandler: (j, K) => f.on(U(), j, K),
        deregisterInteractionHandler: (j, K) => f.off(U(), j, K)
      }),
      !0
    );
    const P = {
      get element() {
        return U();
      },
      addStyle: C,
      removeStyle: b
    };
    return _ && _(P), c(d).init(), () => {
      var j;
      T && T(P), (j = c(d)) == null || j.destroy(), f.clear();
    };
  });
  function w(P) {
    v[P] || (v[P] = !0);
  }
  function E(P) {
    (!(P in v) || v[P]) && (v[P] = !1);
  }
  function C(P, j) {
    h[P] != j && (j === "" || j == null ? delete h[P] : h[P] = j);
  }
  function b(P) {
    P in h && delete h[P];
  }
  function S(P) {
    var j;
    (j = c(d)) == null || j.shake(P);
  }
  function x(P) {
    a(P);
  }
  function O(P) {
    o(P);
  }
  function D() {
    if (c(d) == null)
      throw new Error("Instance is undefined.");
    return c(d).getWidth();
  }
  function U() {
    return s;
  }
  var W = { shake: S, float: x, setRequired: O, getWidth: D, getElement: U }, Y = Z(), me = V(Y);
  {
    var F = (P) => {
      var j = Ev();
      We(j, (G, A) => ({ class: G, style: A, ...l }), [
        () => je({
          "mdc-floating-label": !0,
          "mdc-floating-label--float-above": a(),
          "mdc-floating-label--required": o(),
          ...v,
          [r()]: !0
        }),
        () => Object.entries(h).map(([G, A]) => `${G}: ${A};`).concat([i()]).join(" ")
      ]);
      var K = de(j);
      se(K, () => t.children ?? $), Ee(j, (G) => s = G, () => s), Xe(j, (G, A) => q == null ? void 0 : q(G, A), n), I(P, j);
    }, H = (P) => {
      var j = Sv();
      We(
        j,
        (G, A) => ({
          class: G,
          style: A,
          for: t.for || (g ? g.id : void 0),
          ...l
        }),
        [
          () => je({
            "mdc-floating-label": !0,
            "mdc-floating-label--float-above": a(),
            "mdc-floating-label--required": o(),
            ...v,
            [r()]: !0
          }),
          () => Object.entries(h).map(([G, A]) => `${G}: ${A};`).concat([i()]).join(" ")
        ]
      );
      var K = de(j);
      se(K, () => t.children ?? $), Ee(j, (G) => s = G, () => s), Xe(j, (G, A) => q == null ? void 0 : q(G, A), n), I(P, j);
    };
    re(me, (P) => {
      u() ? P(F) : P(H, !1);
    });
  }
  return I(e, Y), Oe(W);
}
var Cv = /* @__PURE__ */ J("<div></div>");
function Av(e, t) {
  Te(t, !0);
  let n = m(t, "use", 19, () => []), r = m(t, "class", 3, ""), i = m(t, "style", 3, ""), a = m(t, "active", 3, !1), o = /* @__PURE__ */ Ve(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "style",
    "active"
  ]), u, l = /* @__PURE__ */ ye(void 0), s = new $r(), d = _e({}), f = _e({});
  pt(() => (z(
    l,
    new dv({
      addClass: h,
      removeClass: g,
      hasClass: v,
      setStyle: p,
      registerEventHandler: (b, S) => s.on(w(), b, S),
      deregisterEventHandler: (b, S) => s.off(w(), b, S)
    }),
    !0
  ), c(l).init(), () => {
    var b;
    (b = c(l)) == null || b.destroy(), s.clear();
  }));
  function v(b) {
    return b in d ? d[b] : w().classList.contains(b);
  }
  function h(b) {
    d[b] || (d[b] = !0);
  }
  function g(b) {
    (!(b in d) || d[b]) && (d[b] = !1);
  }
  function p(b, S) {
    f[b] != S && (S === "" || S == null ? delete f[b] : f[b] = S);
  }
  function y() {
    var b;
    (b = c(l)) == null || b.activate();
  }
  function _() {
    var b;
    (b = c(l)) == null || b.deactivate();
  }
  function T(b) {
    var S;
    (S = c(l)) == null || S.setRippleCenter(b);
  }
  function w() {
    return u;
  }
  var E = { activate: y, deactivate: _, setRippleCenter: T, getElement: w }, C = Cv();
  return We(C, (b, S) => ({ class: b, style: S, ...o }), [
    () => je({
      "mdc-line-ripple": !0,
      "mdc-line-ripple--active": a(),
      ...d,
      [r()]: !0
    }),
    () => Object.entries(f).map(([b, S]) => `${b}: ${S};`).concat([i()]).join(" ")
  ]), Ee(C, (b) => u = b, () => u), Xe(C, (b, S) => q == null ? void 0 : q(b, S), n), I(e, C), Oe(E);
}
var Iv = /* @__PURE__ */ J('<div class="mdc-notched-outline__notch"><!></div>'), xv = /* @__PURE__ */ J('<div><div class="mdc-notched-outline__leading"></div> <!> <div class="mdc-notched-outline__trailing"></div></div>');
function wv(e, t) {
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
  ]), u, l = /* @__PURE__ */ ye(void 0), s = /* @__PURE__ */ ye(void 0), d = _e({}), f = _e({}), v;
  Be(() => {
    c(s) !== v && (c(s) ? (c(s).addStyle("transition-duration", "0s"), h("mdc-notched-outline--upgraded"), requestAnimationFrame(() => {
      c(s) && c(s).removeStyle("transition-duration");
    })) : g("mdc-notched-outline--upgraded"), v = c(s));
  }), ue("SMUI:floating-label:mount", (x) => {
    z(s, x, !0);
  }), ue("SMUI:floating-label:unmount", () => {
    z(s, void 0);
  }), pt(() => (z(
    l,
    new vv({
      addClass: h,
      removeClass: g,
      setNotchWidthProperty: (x) => p("width", x + "px"),
      removeNotchWidthProperty: () => y("width")
    }),
    !0
  ), c(l).init(), () => {
    var x;
    (x = c(l)) == null || x.destroy();
  }));
  function h(x) {
    d[x] || (d[x] = !0);
  }
  function g(x) {
    (!(x in d) || d[x]) && (d[x] = !1);
  }
  function p(x, O) {
    f[x] != O && (O === "" || O == null ? delete f[x] : f[x] = O);
  }
  function y(x) {
    x in f && delete f[x];
  }
  function _(x) {
    var O;
    (O = c(l)) == null || O.notch(x);
  }
  function T() {
    var x;
    (x = c(l)) == null || x.closeNotch();
  }
  function w() {
    return u;
  }
  var E = { notch: _, closeNotch: T, getElement: w }, C = xv();
  We(C, (x) => ({ class: x, ...o }), [
    () => je({
      "mdc-notched-outline": !0,
      "mdc-notched-outline--notched": i(),
      "mdc-notched-outline--no-label": a(),
      ...d,
      [r()]: !0
    })
  ]);
  var b = ae(de(C), 2);
  {
    var S = (x) => {
      var O = Iv(), D = de(O);
      se(D, () => t.children ?? $), Ae((U) => Dt(O, U), [
        () => Object.entries(f).map(([U, W]) => `${U}: ${W};`).join(" ")
      ]), I(x, O);
    };
    re(b, (x) => {
      a() || x(S);
    });
  }
  return Ee(C, (x) => u = x, () => u), Xe(C, (x, O) => q == null ? void 0 : q(x, O), n), I(e, C), Oe(E);
}
function wi(e, t) {
  Te(t, !0);
  let n = m(t, "use", 19, () => []), r = m(t, "class", 3, ""), i = m(t, "component", 3, xi), a = m(t, "tag", 3, "div"), o = m(t, "_smuiClass", 3, ""), u = m(t, "_smuiClassMap", 23, () => ({})), l = m(t, "_smuiContexts", 19, () => ({})), s = m(t, "_smuiProps", 19, () => ({})), d = /* @__PURE__ */ Ve(t, [
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
  Object.entries(u()).forEach(([_, T]) => {
    const w = be(T);
    w && "subscribe" in w && v.push(w.subscribe((E) => {
      u()[_] = E;
    }));
  });
  for (let _ in l())
    l().hasOwnProperty(_) && ue(_, l()[_]);
  _r(() => {
    for (const _ of v)
      _();
  });
  function h() {
    return f.getElement();
  }
  var g = { getElement: h }, p = Z(), y = V(p);
  {
    let _ = /* @__PURE__ */ pe(() => je({
      [o()]: !0,
      ...u(),
      [r()]: !0
    }));
    Kr(y, i, (T, w) => {
      Ee(
        w(T, ut(
          {
            get tag() {
              return a();
            },
            get use() {
              return n();
            },
            get class() {
              return c(_);
            }
          },
          s,
          () => d,
          {
            children: (E, C) => {
              var b = Z(), S = V(b);
              se(S, () => t.children ?? $), I(E, b);
            },
            $$slots: { default: !0 }
          }
        )),
        (E) => f = E,
        () => f
      );
    });
  }
  return I(e, p), Oe(g);
}
function Lv(e, t) {
  Te(t, !0);
  let n = /* @__PURE__ */ Ve(t, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return Ee(
    wi(e, ut({ _smuiClass: "mdc-text-field-helper-line", tag: "div" }, () => n, {
      children: (o, u) => {
        var l = Z(), s = V(l);
        se(s, () => t.children ?? $), I(o, l);
      },
      $$slots: { default: !0 }
    })),
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
    wi(e, ut(
      {
        _smuiClass: "mdc-text-field__affix mdc-text-field__affix--prefix",
        tag: "span"
      },
      () => n,
      {
        children: (o, u) => {
          var l = Z(), s = V(l);
          se(s, () => t.children ?? $), I(o, l);
        },
        $$slots: { default: !0 }
      }
    )),
    (o) => r = o,
    () => r
  ), Oe(a);
}
function Ov(e, t) {
  Te(t, !0);
  let n = /* @__PURE__ */ Ve(t, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return Ee(
    wi(e, ut(
      {
        _smuiClass: "mdc-text-field__affix mdc-text-field__affix--suffix",
        tag: "span"
      },
      () => n,
      {
        children: (o, u) => {
          var l = Z(), s = V(l);
          se(s, () => t.children ?? $), I(o, l);
        },
        $$slots: { default: !0 }
      }
    )),
    (o) => r = o,
    () => r
  ), Oe(a);
}
var Rv = /* @__PURE__ */ J("<input/>");
function Hv(e, t) {
  Te(t, !0);
  let n = m(t, "use", 19, () => []), r = m(t, "class", 3, ""), i = m(t, "type", 3, "text"), a = m(t, "placeholder", 3, " "), o = m(t, "value", 15), u = m(t, "files", 15, null), l = m(t, "dirty", 15, !1), s = m(t, "invalid", 15, !1), d = m(t, "updateInvalid", 3, !0), f = m(t, "initialInvalid", 3, !1), v = m(t, "emptyValueNull", 19, () => o() === null), h = m(t, "emptyValueUndefined", 19, () => o() === void 0), g = /* @__PURE__ */ Ve(t, [
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
  ]), p, y = _e({}), _ = _e({});
  Be(() => {
    i() === "file" ? delete _.value : _.value = o() == null ? "" : o();
  }), pt(() => {
    d() && f() && s(D().matches(":invalid"));
  });
  function T(F) {
    return F === "" ? Number.NaN : +F;
  }
  function w(F) {
    if (i() === "file") {
      u(F.currentTarget.files);
      return;
    }
    if (F.currentTarget.value === "" && v()) {
      o(null);
      return;
    }
    if (F.currentTarget.value === "" && h()) {
      o(void 0);
      return;
    }
    switch (i()) {
      case "number":
      case "range":
        o(T(F.currentTarget.value));
        break;
      default:
        o(F.currentTarget.value);
        break;
    }
  }
  function E(F) {
    (i() === "file" || i() === "range") && w(F), l(!0), d() && s(D().matches(":invalid"));
  }
  function C(F) {
    return F in y ? y[F] ?? null : D().getAttribute(F);
  }
  function b(F, H) {
    y[F] !== H && (y[F] = H);
  }
  function S(F) {
    (!(F in y) || y[F] != null) && (y[F] = void 0);
  }
  function x() {
    D().focus();
  }
  function O() {
    D().blur();
  }
  function D() {
    return p;
  }
  var U = { getAttr: C, addAttr: b, removeAttr: S, focus: x, blur: O, getElement: D }, W = Rv(), Y = (F) => {
    var H;
    i() !== "file" && w(F), (H = t.oninput) == null || H.call(t, F);
  }, me = (F) => {
    var H;
    E(F), (H = t.onchange) == null || H.call(t, F);
  };
  return We(
    W,
    (F) => ({
      class: F,
      type: i(),
      placeholder: a(),
      ..._,
      ...y,
      ...g,
      oninput: Y,
      onchange: me
    }),
    [
      () => je({ "mdc-text-field__input": !0, [r()]: !0 })
    ],
    void 0,
    void 0,
    !0
  ), Ee(W, (F) => p = F, () => p), Xe(W, (F, H) => q == null ? void 0 : q(F, H), n), I(e, W), Oe(U);
}
var Dv = /* @__PURE__ */ J("<textarea></textarea>");
function Pv(e, t) {
  Te(t, !0);
  let n = m(t, "use", 19, () => []), r = m(t, "class", 3, ""), i = m(t, "style", 3, ""), a = m(t, "value", 15, ""), o = m(t, "dirty", 15, !1), u = m(t, "invalid", 15, !1), l = m(t, "updateInvalid", 3, !0), s = m(t, "initialInvalid", 3, !1), d = m(t, "resizable", 3, !0), f = /* @__PURE__ */ Ve(t, [
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
  ]), v, h = _e({});
  pt(() => {
    l() && s() && u(E().matches(":invalid"));
  });
  function g() {
    o(!0), l() && u(E().matches(":invalid"));
  }
  function p(x) {
    return x in h ? h[x] ?? null : E().getAttribute(x);
  }
  function y(x, O) {
    h[x] !== O && (h[x] = O);
  }
  function _(x) {
    (!(x in h) || h[x] != null) && (h[x] = void 0);
  }
  function T() {
    E().focus();
  }
  function w() {
    E().blur();
  }
  function E() {
    return v;
  }
  var C = { getAttr: p, addAttr: y, removeAttr: _, focus: T, blur: w, getElement: E }, b = Dv(), S = (x) => {
    var O;
    g(), (O = t.onchange) == null || O.call(t, x);
  };
  return We(
    b,
    (x) => ({
      class: x,
      style: `${d() ? "" : "resize: none; "}${i()}`,
      ...h,
      ...f,
      onchange: S
    }),
    [
      () => je({ "mdc-text-field__input": !0, [r()]: !0 })
    ]
  ), Ee(b, (x) => v = x, () => v), Xe(b, (x, O) => q == null ? void 0 : q(x, O), n), Ci(() => Qa(b, a)), I(e, b), Oe(C);
}
var Mv = /* @__PURE__ */ J('<span class="mdc-text-field__ripple"></span>'), Bv = /* @__PURE__ */ J("<!> <!>", 1), Uv = /* @__PURE__ */ J("<span><!> <!></span>"), Fv = /* @__PURE__ */ J("<!> <!> <!>", 1), Nv = /* @__PURE__ */ J("<label><!> <!> <!> <!> <!> <!> <!></label>"), kv = /* @__PURE__ */ J("<div><!> <!> <!> <!> <!></div>"), Gv = /* @__PURE__ */ J("<!> <!>", 1);
function Is(e, t) {
  Te(t, !0);
  const { applyPassive: n } = uu;
  let r = () => {
  };
  function i(B) {
    return B === r;
  }
  let a = m(t, "use", 19, () => []), o = m(t, "class", 3, ""), u = m(t, "style", 3, ""), l = m(t, "ripple", 3, !0), s = m(t, "disabled", 3, !1), d = m(t, "required", 3, !1), f = m(t, "textarea", 3, !1), v = m(t, "variant", 19, () => f() ? "outlined" : "standard"), h = m(t, "noLabel", 3, !1), g = m(t, "type", 3, "text"), p = m(t, "value", 15), y = m(t, "files", 15, r), _ = m(t, "invalid", 15, r), T = m(t, "updateInvalid", 19, () => i(_())), w = m(t, "initialInvalid", 3, !1), E = m(t, "dirty", 15, !1), C = m(t, "validateOnValueChange", 19, T), b = m(t, "useNativeValidation", 19, T), S = m(t, "withLeadingIcon", 3, r), x = m(t, "withTrailingIcon", 3, r), O = m(t, "input", 7), D = m(t, "floatingLabel", 7), U = m(t, "lineRipple", 7), W = m(t, "notchedOutline", 7), Y = /* @__PURE__ */ Ve(t, [
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
  const me = p() !== void 0 || p() === void 0 && t.input$emptyValueUndefined || !i(y());
  i(y()) && y(null), i(_()) && _(!1);
  let F, H = /* @__PURE__ */ ye(void 0), P = new $r(), j = _e({}), K = _e({}), G = /* @__PURE__ */ ye(void 0), A = /* @__PURE__ */ ye(!1), M = /* @__PURE__ */ ye(_e(w())), ie = be("SMUI:addLayoutListener"), he, oe, ee = new Promise((B) => oe = B), Q, fe, Le, Re;
  const ve = /* @__PURE__ */ pe(() => O() && O().getElement());
  Be(() => {
    (E() || c(M) || !T()) && c(H) && c(H).isValid() !== !_() && (T() ? _(!c(H).isValid()) : c(H).setValid(!_()));
  }), Be(() => {
    c(H) && c(H).getValidateOnValueChange() !== C() && c(H).setValidateOnValueChange(i(C()) ? !1 : C());
  }), Be(() => {
    c(H) && c(H).setUseNativeValidation(i(b()) ? !0 : b());
  }), Be(() => {
    c(H) && c(H).setDisabled(s());
  });
  let le = p();
  Be(() => {
    if (c(H) && me && le !== p()) {
      le = p();
      const B = `${p() == null ? "" : p()}`;
      c(H).getValue() !== B && c(H).setValue(B);
    }
  }), ie && (he = ie(L)), ue("SMUI:textfield:leading-icon:mount", (B) => {
    Q = B;
  }), ue("SMUI:textfield:leading-icon:unmount", () => {
    Q = void 0;
  }), ue("SMUI:textfield:trailing-icon:mount", (B) => {
    fe = B;
  }), ue("SMUI:textfield:trailing-icon:unmount", () => {
    fe = void 0;
  }), ue("SMUI:textfield:helper-text:id", (B) => {
    z(G, B, !0);
  }), ue("SMUI:textfield:helper-text:mount", (B) => {
    Le = B;
  }), ue("SMUI:textfield:helper-text:unmount", () => {
    z(G, void 0), Le = void 0;
  }), ue("SMUI:textfield:character-counter:mount", (B) => {
    Re = B;
  }), ue("SMUI:textfield:character-counter:unmount", () => {
    Re = void 0;
  }), pt(() => {
    var B;
    if (z(
      H,
      new bv(
        {
          // getRootAdapterMethods_
          addClass: xe,
          removeClass: Se,
          hasClass: Ue,
          registerTextFieldInteractionHandler: (X, Ze) => P.on(R(), X, Ze),
          deregisterTextFieldInteractionHandler: (X, Ze) => P.off(R(), X, Ze),
          registerValidationAttributeChangeHandler: (X) => {
            const Ze = (ct) => ct.map((Jt) => Jt.attributeName).filter((Jt) => Jt), ot = new MutationObserver((ct) => {
              b() && X(Ze(ct));
            }), Qe = { attributes: !0 };
            return O() && ot.observe(O().getElement(), Qe), ot;
          },
          deregisterValidationAttributeChangeHandler: (X) => {
            X.disconnect();
          },
          // getInputAdapterMethods_
          getNativeInput: () => {
            var X;
            return ((X = O()) == null ? void 0 : X.getElement()) ?? null;
          },
          setInputAttr: (X, Ze) => {
            var ot;
            (ot = O()) == null || ot.addAttr(X, Ze);
          },
          removeInputAttr: (X) => {
            var Ze;
            (Ze = O()) == null || Ze.removeAttr(X);
          },
          isFocused: () => {
            var X;
            return document.activeElement === ((X = O()) == null ? void 0 : X.getElement());
          },
          registerInputInteractionHandler: (X, Ze) => {
            var Qe;
            const ot = (Qe = O()) == null ? void 0 : Qe.getElement();
            if (ot) {
              const ct = n();
              P.on(ot, X, Ze, typeof ct == "boolean" ? { capture: ct } : ct);
            }
          },
          deregisterInputInteractionHandler: (X, Ze) => {
            var Qe;
            const ot = (Qe = O()) == null ? void 0 : Qe.getElement();
            ot && P.off(ot, X, Ze);
          },
          // getLabelAdapterMethods_
          floatLabel: (X) => D() && D().float(X),
          getLabelWidth: () => D() ? D().getWidth() : 0,
          hasLabel: () => !!D(),
          shakeLabel: (X) => D() && D().shake(X),
          setLabelRequired: (X) => D() && D().setRequired(X),
          // getLineRippleAdapterMethods_
          activateLineRipple: () => U() && U().activate(),
          deactivateLineRipple: () => U() && U().deactivate(),
          setLineRippleTransformOrigin: (X) => U() && U().setRippleCenter(X),
          // getOutlineAdapterMethods_
          closeOutline: () => W() && W().closeNotch(),
          hasOutline: () => !!W(),
          notchOutline: (X) => W() && W().notch(X)
        },
        {
          get helperText() {
            return Le;
          },
          get characterCounter() {
            return Re;
          },
          get leadingIcon() {
            return Q;
          },
          get trailingIcon() {
            return fe;
          }
        }
      ),
      !0
    ), me) {
      if (O() == null)
        throw new Error("SMUI Textfield must be initialized with either a non-undefined initial value or an Input component.");
      (B = c(H)) == null || B.init();
    } else
      Al().then(() => {
        var X;
        if (O() == null)
          throw new Error("SMUI Textfield must be initialized with either a non-undefined initial value or an Input component.");
        (X = c(H)) == null || X.init();
      });
    return oe(), () => {
      var X;
      (X = c(H)) == null || X.destroy(), P.clear();
    };
  }), _r(() => {
    he && he();
  });
  function Ue(B) {
    return B in j ? j[B] ?? null : R().classList.contains(B);
  }
  function xe(B) {
    j[B] || (j[B] = !0);
  }
  function Se(B) {
    (!(B in j) || j[B]) && (j[B] = !1);
  }
  function ce(B, X) {
    K[B] != X && (X === "" || X == null ? delete K[B] : K[B] = X);
  }
  function De() {
    var B;
    (B = O()) == null || B.focus();
  }
  function bt() {
    var B;
    (B = O()) == null || B.blur();
  }
  function L() {
    if (c(H)) {
      const B = c(H).shouldFloat;
      c(H).notchOutline(B);
    }
  }
  function R() {
    return F;
  }
  var ne = { focus: De, blur: bt, layout: L, getElement: R }, Ke = Gv(), Pt = V(Ke);
  {
    var zt = (B) => {
      var X = Nv();
      We(X, (Ce, qe, $e) => ({ class: Ce, style: qe, for: void 0, ...$e }), [
        () => je({
          "mdc-text-field": !0,
          "mdc-text-field--disabled": s(),
          "mdc-text-field--textarea": f(),
          "mdc-text-field--filled": v() === "filled",
          "mdc-text-field--outlined": v() === "outlined",
          "smui-text-field--standard": v() === "standard" && !f(),
          "mdc-text-field--no-label": h() || t.label == null,
          "mdc-text-field--label-floating": c(A) || p() != null && p() !== "",
          "mdc-text-field--with-leading-icon": i(S()) ? t.leadingIcon : S(),
          "mdc-text-field--with-trailing-icon": i(x()) ? t.trailingIcon : x(),
          "mdc-text-field--with-internal-counter": f() && t.internalCounter,
          "mdc-text-field--invalid": _(),
          ...j,
          [o()]: !0
        }),
        () => Object.entries(K).map(([Ce, qe]) => `${Ce}: ${qe};`).concat([u()]).join(" "),
        () => ta(Y, ["input$", "label$", "ripple$", "outline$", "helperLine$"])
      ]);
      var Ze = de(X);
      {
        var ot = (Ce) => {
          var qe = Bv(), $e = V(qe);
          {
            var It = (it) => {
              var dt = Mv();
              I(it, dt);
            };
            re($e, (it) => {
              v() === "filled" && it(It);
            });
          }
          var $t = ae($e, 2);
          {
            var Ge = (it) => {
              {
                let dt = /* @__PURE__ */ pe(() => c(A) || p() != null && p() !== "" && (typeof p() != "number" || !isNaN(p()))), Fe = /* @__PURE__ */ pe(() => rn(Y, "label$"));
                Ee(
                  As(it, ut(
                    {
                      get floatAbove() {
                        return c(dt);
                      },
                      get required() {
                        return d();
                      },
                      wrapped: !0
                    },
                    () => c(Fe),
                    {
                      children: (ft, Ft) => {
                        var Nt = Z(), st = V(Nt);
                        {
                          var _t = (at) => {
                          }, en = (at) => {
                            var Ti = Z(), Qn = V(Ti);
                            {
                              var Oi = (On) => {
                                var Jn = St();
                                Ae(() => et(Jn, t.label)), I(On, Jn);
                              }, ya = (On) => {
                                var Jn = Z(), Rn = V(Jn);
                                se(Rn, () => t.label), I(On, Jn);
                              };
                              re(
                                Qn,
                                (On) => {
                                  typeof t.label == "string" ? On(Oi) : On(ya, !1);
                                },
                                !0
                              );
                            }
                            I(at, Ti);
                          };
                          re(st, (at) => {
                            t.label == null ? at(_t) : at(en, !1);
                          });
                        }
                        I(ft, Nt);
                      },
                      $$slots: { default: !0 }
                    }
                  )),
                  (ft) => D(ft),
                  () => D()
                );
              }
            };
            re($t, (it) => {
              !h() && t.label != null && it(Ge);
            });
          }
          I(Ce, qe);
        };
        re(Ze, (Ce) => {
          !f() && v() !== "outlined" && Ce(ot);
        });
      }
      var Qe = ae(Ze, 2);
      {
        var ct = (Ce) => {
          {
            let qe = /* @__PURE__ */ pe(() => h() || t.label == null), $e = /* @__PURE__ */ pe(() => rn(Y, "outline$"));
            Ee(
              wv(Ce, ut(
                {
                  get noLabel() {
                    return c(qe);
                  }
                },
                () => c($e),
                {
                  children: (It, $t) => {
                    var Ge = Z(), it = V(Ge);
                    {
                      var dt = (Fe) => {
                        {
                          let ft = /* @__PURE__ */ pe(() => c(A) || p() != null && p() !== "" && (typeof p() != "number" || !isNaN(p()))), Ft = /* @__PURE__ */ pe(() => rn(Y, "label$"));
                          Ee(
                            As(Fe, ut(
                              {
                                get floatAbove() {
                                  return c(ft);
                                },
                                get required() {
                                  return d();
                                },
                                wrapped: !0
                              },
                              () => c(Ft),
                              {
                                children: (Nt, st) => {
                                  var _t = Z(), en = V(_t);
                                  {
                                    var at = (Qn) => {
                                    }, Ti = (Qn) => {
                                      var Oi = Z(), ya = V(Oi);
                                      {
                                        var On = (Rn) => {
                                          var ti = St();
                                          Ae(() => et(ti, t.label)), I(Rn, ti);
                                        }, Jn = (Rn) => {
                                          var ti = Z(), Pu = V(ti);
                                          se(Pu, () => t.label), I(Rn, ti);
                                        };
                                        re(
                                          ya,
                                          (Rn) => {
                                            typeof t.label == "string" ? Rn(On) : Rn(Jn, !1);
                                          },
                                          !0
                                        );
                                      }
                                      I(Qn, Oi);
                                    };
                                    re(en, (Qn) => {
                                      t.label == null ? Qn(at) : Qn(Ti, !1);
                                    });
                                  }
                                  I(Nt, _t);
                                },
                                $$slots: { default: !0 }
                              }
                            )),
                            (Nt) => D(Nt),
                            () => D()
                          );
                        }
                      };
                      re(it, (Fe) => {
                        !h() && t.label != null && Fe(dt);
                      });
                    }
                    I(It, Ge);
                  },
                  $$slots: { default: !0 }
                }
              )),
              (It) => W(It),
              () => W()
            );
          }
        };
        re(Qe, (Ce) => {
          (f() || v() === "outlined") && Ce(ct);
        });
      }
      var Jt = ae(Qe, 2);
      Ui(Jt, {
        key: "SMUI:textfield:icon:leading",
        value: !0,
        children: (Ce, qe) => {
          var $e = Z(), It = V($e);
          se(It, () => t.leadingIcon ?? $), I(Ce, $e);
        },
        $$slots: { default: !0 }
      });
      var Cr = ae(Jt, 2);
      se(Cr, () => t.children ?? $);
      var Je = ae(Cr, 2);
      {
        var tt = (Ce) => {
          var qe = Uv(), $e = de(qe);
          {
            let $t = /* @__PURE__ */ pe(() => rn(Y, "input$"));
            Ee(
              Pv($e, ut(
                {
                  get disabled() {
                    return s();
                  },
                  get required() {
                    return d();
                  },
                  get updateInvalid() {
                    return T();
                  },
                  get initialInvalid() {
                    return c(M);
                  },
                  get "aria-controls"() {
                    return c(G);
                  },
                  get "aria-describedby"() {
                    return c(G);
                  }
                },
                () => c($t),
                {
                  onblur: (Ge) => {
                    var it;
                    z(A, !1), z(M, !0), nt(R(), "blur", Ge), (it = t.input$onblur) == null || it.call(t, Ge);
                  },
                  onfocus: (Ge) => {
                    var it;
                    z(A, !0), nt(R(), "focus", Ge), (it = t.input$onfocus) == null || it.call(t, Ge);
                  },
                  get value() {
                    return p();
                  },
                  set value(Ge) {
                    p(Ge);
                  },
                  get dirty() {
                    return E();
                  },
                  set dirty(Ge) {
                    E(Ge);
                  },
                  get invalid() {
                    return _();
                  },
                  set invalid(Ge) {
                    _(Ge);
                  }
                }
              )),
              (Ge) => O(Ge),
              () => O()
            );
          }
          var It = ae($e, 2);
          se(It, () => t.internalCounter ?? $), Ae(($t) => Hl(qe, 1, $t), [
            () => Rl(je({
              "mdc-text-field__resizer": !("input$resizable" in Y) || t.input$resizable
            }))
          ]), I(Ce, qe);
        }, Mt = (Ce) => {
          var qe = Fv(), $e = V(qe);
          {
            var It = (dt) => {
              var Fe = Z(), ft = V(Fe);
              {
                var Ft = (st) => {
                  Tv(st, {
                    children: (_t, en) => {
                      var at = St();
                      Ae(() => et(at, t.prefix)), I(_t, at);
                    },
                    $$slots: { default: !0 }
                  });
                }, Nt = (st) => {
                  var _t = Z(), en = V(_t);
                  se(en, () => t.prefix ?? $), I(st, _t);
                };
                re(ft, (st) => {
                  typeof t.prefix == "string" ? st(Ft) : st(Nt, !1);
                });
              }
              I(dt, Fe);
            };
            re($e, (dt) => {
              t.prefix != null && dt(It);
            });
          }
          var $t = ae($e, 2);
          {
            let dt = /* @__PURE__ */ pe(() => rn(Y, "input$"));
            Ee(
              Hv($t, ut(
                {
                  get type() {
                    return g();
                  },
                  get disabled() {
                    return s();
                  },
                  get required() {
                    return d();
                  },
                  get updateInvalid() {
                    return T();
                  },
                  get initialInvalid() {
                    return c(M);
                  },
                  get "aria-controls"() {
                    return c(G);
                  },
                  get "aria-describedby"() {
                    return c(G);
                  }
                },
                () => h() && t.label != null && typeof t.label == "string" ? { placeholder: t.label } : {},
                () => c(dt),
                {
                  onblur: (Fe) => {
                    var ft;
                    z(A, !1), z(M, !0), nt(R(), "blur", Fe), (ft = t.input$onblur) == null || ft.call(t, Fe);
                  },
                  onfocus: (Fe) => {
                    var ft;
                    z(A, !0), nt(R(), "focus", Fe), (ft = t.input$onfocus) == null || ft.call(t, Fe);
                  },
                  get value() {
                    return p();
                  },
                  set value(Fe) {
                    p(Fe);
                  },
                  get files() {
                    return y();
                  },
                  set files(Fe) {
                    y(Fe);
                  },
                  get dirty() {
                    return E();
                  },
                  set dirty(Fe) {
                    E(Fe);
                  },
                  get invalid() {
                    return _();
                  },
                  set invalid(Fe) {
                    _(Fe);
                  }
                }
              )),
              (Fe) => O(Fe),
              () => O()
            );
          }
          var Ge = ae($t, 2);
          {
            var it = (dt) => {
              var Fe = Z(), ft = V(Fe);
              {
                var Ft = (st) => {
                  Ov(st, {
                    children: (_t, en) => {
                      var at = St();
                      Ae(() => et(at, t.suffix)), I(_t, at);
                    },
                    $$slots: { default: !0 }
                  });
                }, Nt = (st) => {
                  var _t = Z(), en = V(_t);
                  se(en, () => t.suffix ?? $), I(st, _t);
                };
                re(ft, (st) => {
                  typeof t.suffix == "string" ? st(Ft) : st(Nt, !1);
                });
              }
              I(dt, Fe);
            };
            re(Ge, (dt) => {
              t.suffix != null && dt(it);
            });
          }
          I(Ce, qe);
        };
        re(Je, (Ce) => {
          f() && typeof p() == "string" ? Ce(tt) : Ce(Mt, !1);
        });
      }
      var Tn = ae(Je, 2);
      Ui(Tn, {
        key: "SMUI:textfield:icon:leading",
        value: !1,
        children: (Ce, qe) => {
          var $e = Z(), It = V($e);
          se(It, () => t.trailingIcon ?? $), I(Ce, $e);
        },
        $$slots: { default: !0 }
      });
      var ba = ae(Tn, 2);
      {
        var _a = (Ce) => {
          {
            let qe = /* @__PURE__ */ pe(() => rn(Y, "ripple$"));
            Ee(Av(Ce, ut(() => c(qe))), ($e) => U($e), () => U());
          }
        };
        re(ba, (Ce) => {
          !f() && v() !== "outlined" && l() && Ce(_a);
        });
      }
      Ee(X, (Ce) => F = Ce, () => F), Xe(X, (Ce, qe) => Hn == null ? void 0 : Hn(Ce, qe), () => ({
        ripple: !f() && v() === "filled",
        unbounded: !1,
        addClass: xe,
        removeClass: Se,
        addStyle: ce,
        eventTarget: c(ve),
        activeTarget: c(ve),
        initPromise: ee
      })), Xe(X, (Ce, qe) => q == null ? void 0 : q(Ce, qe), a), I(B, X);
    }, bn = (B) => {
      var X = kv();
      We(X, (Je, tt, Mt) => ({ class: Je, style: tt, ...Mt }), [
        () => je({
          "mdc-text-field": !0,
          "mdc-text-field--disabled": s(),
          "mdc-text-field--textarea": f(),
          "mdc-text-field--filled": v() === "filled",
          "mdc-text-field--outlined": v() === "outlined",
          "smui-text-field--standard": v() === "standard" && !f(),
          "mdc-text-field--no-label": h() || t.label == null,
          "mdc-text-field--with-leading-icon": t.leadingIcon,
          "mdc-text-field--with-trailing-icon": t.trailingIcon,
          "mdc-text-field--invalid": _(),
          ...j,
          [o()]: !0
        }),
        () => Object.entries(K).map(([Je, tt]) => `${Je}: ${tt};`).concat([u()]).join(" "),
        () => ta(Y, ["input$", "label$", "ripple$", "outline$", "helperLine$"])
      ]);
      var Ze = de(X);
      {
        var ot = (Je) => {
          var tt = Z(), Mt = V(tt);
          se(Mt, () => t.label ?? $), I(Je, tt);
        };
        re(Ze, (Je) => {
          typeof t.label != "string" && Je(ot);
        });
      }
      var Qe = ae(Ze, 2);
      Ui(Qe, {
        key: "SMUI:textfield:icon:leading",
        value: !0,
        children: (Je, tt) => {
          var Mt = Z(), Tn = V(Mt);
          se(Tn, () => t.leadingIcon ?? $), I(Je, Mt);
        },
        $$slots: { default: !0 }
      });
      var ct = ae(Qe, 2);
      se(ct, () => t.children ?? $);
      var Jt = ae(ct, 2);
      Ui(Jt, {
        key: "SMUI:textfield:icon:leading",
        value: !1,
        children: (Je, tt) => {
          var Mt = Z(), Tn = V(Mt);
          se(Tn, () => t.trailingIcon ?? $), I(Je, Mt);
        },
        $$slots: { default: !0 }
      });
      var Cr = ae(Jt, 2);
      se(Cr, () => t.line ?? $), Ee(X, (Je) => F = Je, () => F), Xe(X, (Je, tt) => Hn == null ? void 0 : Hn(Je, tt), () => ({
        ripple: l(),
        unbounded: !1,
        addClass: xe,
        removeClass: Se,
        addStyle: ce
      })), Xe(X, (Je, tt) => q == null ? void 0 : q(Je, tt), a), I(B, X);
    };
    re(Pt, (B) => {
      me ? B(zt) : B(bn, !1);
    });
  }
  var ei = ae(Pt, 2);
  {
    var N = (B) => {
      {
        let X = /* @__PURE__ */ pe(() => rn(Y, "helperLine$"));
        Lv(B, ut(() => c(X), {
          children: (Ze, ot) => {
            var Qe = Z(), ct = V(Qe);
            se(ct, () => t.helper ?? $), I(Ze, Qe);
          },
          $$slots: { default: !0 }
        }));
      }
    };
    re(ei, (B) => {
      t.helper && B(N);
    });
  }
  return I(e, Ke), Oe(ne);
}
var jv = /* @__PURE__ */ J("<i><!></i>");
function Vv(e, t) {
  Te(t, !0);
  const n = () => In(g, "$leadingStore", r), [r, i] = Yn();
  let a = m(t, "use", 19, () => []), o = m(t, "class", 3, ""), u = m(t, "tabindex", 19, () => t.role === "button" ? 0 : -1), l = m(t, "disabled", 3, !1), s = /* @__PURE__ */ Ve(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "role",
    "tabindex",
    "disabled",
    "children"
  ]), d, f = /* @__PURE__ */ ye(void 0), v = new $r(), h = _e({});
  const g = be("SMUI:textfield:icon:leading"), p = n();
  let y = /* @__PURE__ */ ye(void 0);
  const _ = /* @__PURE__ */ pe(() => ({ role: t.role, tabindex: u() })), T = be("SMUI:textfield:leading-icon:mount"), w = be("SMUI:textfield:leading-icon:unmount"), E = be("SMUI:textfield:trailing-icon:mount"), C = be("SMUI:textfield:trailing-icon:unmount");
  pt(() => (z(
    f,
    new yv({
      getAttr: b,
      setAttr: S,
      removeAttr: x,
      setContent: (H) => {
        z(y, H, !0);
      },
      registerInteractionHandler: (H, P) => v.on(O(), H, P),
      deregisterInteractionHandler: (H, P) => v.off(O(), H, P),
      notifyIconAction: () => nt(O(), "SMUITextFieldIcon")
    }),
    !0
  ), p ? T && T(c(f)) : E && E(c(f)), c(f).init(), () => {
    var H;
    c(f) && (p ? w && w(c(f)) : C && C(c(f))), (H = c(f)) == null || H.destroy(), v.clear();
  }));
  function b(H) {
    return H in h ? h[H] ?? null : O().getAttribute(H);
  }
  function S(H, P) {
    h[H] !== P && (h[H] = P);
  }
  function x(H) {
    (!(H in h) || h[H] != null) && (h[H] = void 0);
  }
  function O() {
    return d;
  }
  var D = { getElement: O }, U = jv();
  We(
    U,
    (H) => ({
      class: H,
      "aria-hidden": u() === -1 ? "true" : "false",
      "aria-disabled": t.role === "button" ? l() ? "true" : "false" : void 0,
      ...c(_),
      ...h,
      ...s
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
  var W = de(U);
  {
    var Y = (H) => {
      var P = Z(), j = V(P);
      se(j, () => t.children ?? $), I(H, P);
    }, me = (H) => {
      var P = St();
      Ae(() => et(P, c(y))), I(H, P);
    };
    re(W, (H) => {
      c(y) == null ? H(Y) : H(me, !1);
    });
  }
  Ee(U, (H) => d = H, () => d), Xe(U, (H, P) => q == null ? void 0 : q(H, P), a), I(e, U);
  var F = Oe(D);
  return i(), F;
}
function Pa(e, t) {
  Te(t, !0);
  let n = m(t, "placeholder", 3, ""), r = m(t, "label", 3, ""), i = m(t, "icon", 3, ""), a = m(t, "value", 15, ""), o = m(t, "variant", 3, "standard"), u = m(t, "styles", 3, ""), l = m(t, "required", 3, !1), s = m(t, "oninput", 3, () => {
  });
  var d = Z(), f = V(d);
  {
    var v = (g) => {
      {
        const p = (_) => {
          Vv(_, {
            class: "material-icons",
            children: (T, w) => {
              var E = St();
              Ae(() => et(E, i())), I(T, E);
            },
            $$slots: { default: !0 }
          });
        };
        let y = /* @__PURE__ */ pe(() => `width: 100%; ${u()}`);
        Is(g, {
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
            return c(y);
          },
          get variant() {
            return o();
          },
          get oninput() {
            return s();
          },
          get value() {
            return a();
          },
          set value(_) {
            a(_);
          },
          leadingIcon: p,
          $$slots: { leadingIcon: !0 }
        });
      }
    }, h = (g) => {
      Is(g, {
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
          return s();
        },
        get value() {
          return a();
        },
        set value(p) {
          a(p);
        }
      });
    };
    re(f, (g) => {
      i() ? g(v) : g(h, !1);
    });
  }
  I(e, d), Oe();
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
var xs = {
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
function qv(e) {
  return !!e.document && typeof e.document.createElement == "function";
}
function zv(e, t) {
  if (qv(e) && t in xs) {
    var n = e.document.createElement("div"), r = xs[t], i = r.standard, a = r.prefixed, o = i in n.style;
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
function Xv(e) {
  return e ? e.scrollHeight > e.offsetHeight : !1;
}
function Wv(e) {
  return e ? e.scrollTop === 0 : !1;
}
function Zv(e) {
  return e ? Math.ceil(e.scrollHeight - e.scrollTop) === e.clientHeight : !1;
}
function Yv(e) {
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
var Kv = (
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
}, si = {
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
}, Ma = {
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
var na;
(function(e) {
  e.POLL_SCROLL_POS = "poll_scroll_position", e.POLL_LAYOUT_CHANGE = "poll_layout_change";
})(na || (na = {}));
var Qv = (
  /** @class */
  function(e) {
    mt(t, e);
    function t(n) {
      var r = e.call(this, te(te({}, t.defaultAdapter), n)) || this;
      return r.dialogOpen = !1, r.isFullscreen = !1, r.animationFrame = 0, r.animationTimer = 0, r.escapeKeyAction = si.CLOSE_ACTION, r.scrimClickAction = si.CLOSE_ACTION, r.autoStackButtons = !0, r.areButtonsStacked = !1, r.suppressDefaultPressSelector = si.SUPPRESS_DEFAULT_PRESS_SELECTOR, r.animFrame = new Kv(), r.contentScrollHandler = function() {
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
        return si;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t, "numbers", {
      get: function() {
        return Ma;
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
        }, Ma.DIALOG_ANIMATION_OPEN_TIME_MS);
      });
    }, t.prototype.close = function(n) {
      var r = this;
      n === void 0 && (n = ""), this.dialogOpen && (this.dialogOpen = !1, this.adapter.notifyClosing(n), this.adapter.addClass(Ne.CLOSING), this.adapter.removeClass(Ne.OPEN), this.adapter.removeBodyClass(Ne.SCROLL_LOCK), this.isFullscreen && this.adapter.deregisterContentEventHandler("scroll", this.contentScrollHandler), this.adapter.deregisterWindowEventHandler("resize", this.windowResizeHandler), this.adapter.deregisterWindowEventHandler("orientationchange", this.windowOrientationChangeHandler), cancelAnimationFrame(this.animationFrame), this.animationFrame = 0, clearTimeout(this.animationTimer), this.animationTimer = setTimeout(function() {
        r.adapter.releaseFocus(), r.handleAnimationTimerEnd(), r.adapter.notifyClosed(n);
      }, Ma.DIALOG_ANIMATION_CLOSE_TIME_MS));
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
      this.animFrame.request(na.POLL_LAYOUT_CHANGE, function() {
        n.layoutInternal();
      });
    }, t.prototype.handleClick = function(n) {
      var r = this.adapter.eventTargetMatches(n.target, si.SCRIM_SELECTOR);
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
      this.animFrame.request(na.POLL_SCROLL_POS, function() {
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
  }(mn)
), Jv = /* @__PURE__ */ J('<div class="mdc-dialog__surface-scrim"></div>'), $v = /* @__PURE__ */ J('<div><div><div><!> <!></div></div> <div class="mdc-dialog__scrim"></div></div> <!>', 1);
function eg(e, t) {
  Te(t, !0);
  const n = () => In(W, "$aboveFullscreenShown", r), [r, i] = Yn(), { FocusTrap: a } = Yh, { closest: o, matches: u } = Ho;
  let l = m(t, "use", 19, () => []), s = m(t, "class", 3, ""), d = m(t, "open", 15, !1), f = m(t, "selection", 3, !1), v = m(t, "escapeKeyAction", 3, "close"), h = m(t, "scrimClickAction", 3, "close"), g = m(t, "autoStackButtons", 3, !0), p = m(t, "fullscreen", 3, !1), y = m(t, "sheet", 3, !1), _ = m(t, "noContentPadding", 3, !1), T = m(t, "container$class", 3, ""), w = m(t, "surface$class", 3, ""), E = /* @__PURE__ */ Ve(t, [
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
  ]), C, b = /* @__PURE__ */ ye(void 0), S = new $r(), x = _e({}), O, D = Ot(!1), U = be("SMUI:dialog:aboveFullscreen"), W = be("SMUI:dialog:aboveFullscreenShown") ?? Ot(!1), Y = be("SMUI:addLayoutListener"), me, F = [], H = (N) => (F.push(N), () => {
    const B = F.indexOf(N);
    B >= 0 && F.splice(B, 1);
  });
  ue("SMUI:dialog:actions:reversed", D), ue("SMUI:addLayoutListener", H), ue("SMUI:dialog:selection", f()), ue("SMUI:dialog:aboveFullscreen", U || p()), ue("SMUI:dialog:aboveFullscreenShown", W), y() && ue("SMUI:icon-button:context", "dialog:sheet"), Be(() => {
    c(b) && c(b).getEscapeKeyAction() !== v() && c(b).setEscapeKeyAction(v());
  }), Be(() => {
    c(b) && c(b).getScrimClickAction() !== h() && c(b).setScrimClickAction(h());
  }), Be(() => {
    c(b) && c(b).getAutoStackButtons() !== g() && c(b).setAutoStackButtons(g());
  }), Be(() => {
    g() || Fn(D, !0);
  }), Y && (me = Y(Re)), Be(() => {
    c(b) && c(b).isOpen() !== d() && (d() ? c(b).open({ isAboveFullscreenDialog: !!U }) : c(b).close());
  });
  let P = n();
  Be(() => {
    p() && c(b) && P !== n() && (P = n(), n() ? c(b).showSurfaceScrim() : c(b).hideSurfaceScrim());
  }), pt(() => (O = new a(C, { initialFocusEl: he() ?? void 0 }), z(
    b,
    new Qv({
      addBodyClass: (N) => document.body.classList.add(N),
      addClass: K,
      areButtonsStacked: () => Yv(A()),
      clickDefaultButton: () => {
        const N = M();
        N && N.click();
      },
      eventTargetMatches: (N, B) => N ? u(N, B) : !1,
      getActionFromEvent: (N) => {
        if (!N.target)
          return "";
        const B = o(N.target, "[data-mdc-dialog-action]");
        return B && B.getAttribute("data-mdc-dialog-action");
      },
      getInitialFocusEl: he,
      hasClass: j,
      isContentScrollable: () => Xv(ie()),
      notifyClosed: (N) => {
        d(!1), nt(ve(), "SMUIDialogClosed", N ? { action: N } : {});
      },
      notifyClosing: (N) => nt(ve(), "SMUIDialogClosing", N ? { action: N } : {}),
      notifyOpened: () => nt(ve(), "SMUIDialogOpened", {}),
      notifyOpening: () => nt(ve(), "SMUIDialogOpening", {}),
      releaseFocus: () => O.releaseFocus(),
      removeBodyClass: (N) => document.body.classList.remove(N),
      removeClass: G,
      reverseButtons: () => {
        Fn(D, !0);
      },
      trapFocus: () => O.trapFocus(),
      registerContentEventHandler: (N, B) => {
        const X = ie();
        X instanceof HTMLElement && S.on(X, N, B);
      },
      deregisterContentEventHandler: (N, B) => {
        const X = ie();
        X instanceof HTMLElement && S.off(X, N, B);
      },
      isScrollableContentAtTop: () => Wv(ie()),
      isScrollableContentAtBottom: () => Zv(ie()),
      registerWindowEventHandler: (N, B) => S.on(window, N, B),
      deregisterWindowEventHandler: (N, B) => S.off(window, N, B)
    }),
    !0
  ), c(b).init(), () => {
    var N;
    (N = c(b)) == null || N.destroy(), S.clear();
  })), _r(() => {
    me && me();
  });
  function j(N) {
    return N in x ? x[N] : ve().classList.contains(N);
  }
  function K(N) {
    x[N] || (x[N] = !0);
  }
  function G(N) {
    (!(N in x) || x[N]) && (x[N] = !1);
  }
  function A() {
    return [].slice.call(ve().querySelectorAll(".mdc-dialog__button"));
  }
  function M() {
    return ve().querySelector("[data-mdc-dialog-button-default]");
  }
  function ie() {
    return ve().querySelector(".mdc-dialog__content");
  }
  function he() {
    return ve().querySelector("[data-mdc-dialog-initial-focus]");
  }
  function oe() {
    U && Fn(W, !0), requestAnimationFrame(() => {
      F.forEach((N) => N());
    });
  }
  function ee() {
    F.forEach((N) => N());
  }
  function Q() {
    U && Fn(W, !1);
  }
  function fe() {
    return d();
  }
  function Le(N) {
    d(N);
  }
  function Re() {
    var N;
    return (N = c(b)) == null ? void 0 : N.layout();
  }
  function ve() {
    return C;
  }
  var le = { isOpen: fe, setOpen: Le, layout: Re, getElement: ve }, Ue = $v();
  Un("resize", Ki, () => d() && c(b) && c(b).layout()), Un("orientationchange", Ki, () => d() && c(b) && c(b).layout()), Un("keydown", ul.body, (N) => c(b) && c(b).handleDocumentKeydown(N));
  var xe = V(Ue), Se = (N) => {
    var B;
    oe(), (B = t.onSMUIDialogOpening) == null || B.call(t, N);
  }, ce = (N) => {
    var B;
    ee(), (B = t.onSMUIDialogOpened) == null || B.call(t, N);
  }, De = (N) => {
    var B;
    Q(), (B = t.onSMUIDialogClosed) == null || B.call(t, N);
  }, bt = (N) => {
    var B;
    c(b) && c(b).handleClick(N), (B = t.onclick) == null || B.call(t, N);
  }, L = (N) => {
    var B;
    c(b) && c(b).handleKeydown(N), (B = t.onkeydown) == null || B.call(t, N);
  };
  We(
    xe,
    (N, B) => ({
      class: N,
      role: "alertdialog",
      "aria-modal": "true",
      ...B,
      onSMUIDialogOpening: Se,
      onSMUIDialogOpened: ce,
      onSMUIDialogClosed: De,
      onclick: bt,
      onkeydown: L
    }),
    [
      () => je({
        "mdc-dialog": !0,
        "mdc-dialog--stacked": !g(),
        "mdc-dialog--fullscreen": p(),
        "mdc-dialog--sheet": y(),
        "mdc-dialog--no-content-padding": _(),
        "smui-dialog--selection": f(),
        ...x,
        [s()]: !0
      }),
      () => ta(E, ["container$", "surface$"])
    ]
  );
  var R = de(xe);
  We(R, (N, B) => ({ class: N, ...B }), [
    () => je({ "mdc-dialog__container": !0, [T()]: !0 }),
    () => rn(E, "container$")
  ]);
  var ne = de(R);
  We(ne, (N, B) => ({ class: N, role: "alertdialog", "aria-modal": "true", ...B }), [
    () => je({ "mdc-dialog__surface": !0, [w()]: !0 }),
    () => rn(E, "surface$")
  ]);
  var Ke = de(ne);
  se(Ke, () => t.children ?? $);
  var Pt = ae(Ke, 2);
  {
    var zt = (N) => {
      var B = Jv();
      Un("transitionend", B, () => c(b) && c(b).handleSurfaceScrimTransitionEnd()), I(N, B);
    };
    re(Pt, (N) => {
      p() && N(zt);
    });
  }
  Ee(xe, (N) => C = N, () => C), Xe(xe, (N, B) => q == null ? void 0 : q(N, B), l);
  var bn = ae(xe, 2);
  se(bn, () => t.over ?? $), I(e, Ue);
  var ei = Oe(le);
  return i(), ei;
}
function tg(e, t) {
  Te(t, !0);
  let n = /* @__PURE__ */ Ve(t, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return Ee(
    wi(e, ut({ _smuiClass: "mdc-dialog__content", tag: "div" }, () => n, {
      children: (o, u) => {
        var l = Z(), s = V(l);
        se(s, () => t.children ?? $), I(o, l);
      },
      $$slots: { default: !0 }
    })),
    (o) => r = o,
    () => r
  ), Oe(a);
}
function ng(e, t) {
  Te(t, !0);
  let n = /* @__PURE__ */ Ve(t, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return Ee(
    wi(e, ut(
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
          var l = Z(), s = V(l);
          se(s, () => t.children ?? $), I(o, l);
        },
        $$slots: { default: !0 }
      }
    )),
    (o) => r = o,
    () => r
  ), Oe(a);
}
var rg = /* @__PURE__ */ J('<div class="dialog-title svelte-187m1sc"><!></div> <!> <!>', 1);
function ws(e, t) {
  Te(t, !0);
  let n = m(t, "open", 15, !1), r = m(t, "onClose", 3, () => {
  });
  eg(e, {
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
      var o = rg(), u = V(o), l = de(u);
      se(l, () => t.title ?? $);
      var s = ae(u, 2);
      tg(s, {
        id: "large-scroll-content",
        children: (f, v) => {
          var h = Z(), g = V(h);
          se(g, () => t.content ?? $), I(f, h);
        },
        $$slots: { default: !0 }
      });
      var d = ae(s, 2);
      ng(d, {
        children: (f, v) => {
          var h = Z(), g = V(h);
          se(g, () => t.actions ?? $), I(f, h);
        },
        $$slots: { default: !0 }
      }), I(i, o);
    },
    $$slots: { default: !0 }
  }), Oe();
}
const ht = [];
for (let e = 0; e < 256; ++e)
  ht.push((e + 256).toString(16).slice(1));
function ig(e, t = 0) {
  return (ht[e[t + 0]] + ht[e[t + 1]] + ht[e[t + 2]] + ht[e[t + 3]] + "-" + ht[e[t + 4]] + ht[e[t + 5]] + "-" + ht[e[t + 6]] + ht[e[t + 7]] + "-" + ht[e[t + 8]] + ht[e[t + 9]] + "-" + ht[e[t + 10]] + ht[e[t + 11]] + ht[e[t + 12]] + ht[e[t + 13]] + ht[e[t + 14]] + ht[e[t + 15]]).toLowerCase();
}
let Ba;
const ag = new Uint8Array(16);
function og() {
  if (!Ba) {
    if (typeof crypto > "u" || !crypto.getRandomValues)
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    Ba = crypto.getRandomValues.bind(crypto);
  }
  return Ba(ag);
}
const sg = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), Ls = { randomUUID: sg };
function lg(e, t, n) {
  var i;
  if (Ls.randomUUID && !t && !e)
    return Ls.randomUUID();
  e = e || {};
  const r = e.random ?? ((i = e.rng) == null ? void 0 : i.call(e)) ?? og();
  if (r.length < 16)
    throw new Error("Random bytes length must be >= 16");
  if (r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, t) {
    if (n = n || 0, n < 0 || n + 16 > t.length)
      throw new RangeError(`UUID byte range ${n}:${n + 15} is out of buffer bounds`);
    for (let a = 0; a < 16; ++a)
      t[n + a] = r[a];
    return t;
  }
  return ig(r);
}
var ug = /* @__PURE__ */ J('<span class="oscd-icon"><!></span>');
function Ln(e, t) {
  var n = ug(), r = de(n);
  se(r, () => t.children ?? $), I(e, n);
}
var cg = /* @__PURE__ */ qt('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"></path></svg>');
function du(e, t) {
  let n = m(t, "svgStyles", 3, "");
  Ln(e, {
    children: (r, i) => {
      var a = cg();
      Ae(() => Dt(a, n())), I(r, a);
    }
  });
}
var dg = /* @__PURE__ */ qt('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"></path></svg>');
function lo(e, t) {
  let n = m(t, "svgStyles", 3, "");
  Ln(e, {
    children: (r, i) => {
      var a = dg();
      Ae(() => Dt(a, n())), I(r, a);
    }
  });
}
var fg = /* @__PURE__ */ qt('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z"></path></svg>');
function hg(e, t) {
  let n = m(t, "svgStyles", 3, "");
  Ln(e, {
    children: (r, i) => {
      var a = fg();
      Ae(() => Dt(a, n())), I(r, a);
    }
  });
}
var vg = /* @__PURE__ */ qt('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="m590-160 80 80H240q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h360l200 240v480q0 20-8.5 36.5T768-96L560-302q-17 11-37 16.5t-43 5.5q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 23-5.5 43T618-360l102 104v-356L562-800H240v640h350ZM480-360q33 0 56.5-23.5T560-440q0-33-23.5-56.5T480-520q-33 0-56.5 23.5T400-440q0 33 23.5 56.5T480-360Zm0-80Zm0 0Z"></path></svg>');
function gg(e, t) {
  let n = m(t, "svgStyles", 3, "");
  Ln(e, {
    children: (r, i) => {
      var a = vg();
      Ae(() => Dt(a, n())), I(r, a);
    }
  });
}
var pg = /* @__PURE__ */ qt('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-160q-134 0-227-93t-93-227q0-134 93-227t227-93q69 0 132 28.5T720-690v-110h80v280H520v-80h168q-32-56-87.5-88T480-720q-100 0-170 70t-70 170q0 100 70 170t170 70q77 0 139-44t87-116h84q-28 106-114 173t-196 67Z"></path></svg>');
function fu(e, t) {
  let n = m(t, "svgStyles", 3, "");
  Ln(e, {
    children: (r, i) => {
      var a = pg();
      Ae(() => Dt(a, n())), I(r, a);
    }
  });
}
var mg = /* @__PURE__ */ qt('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M840-680v480q0 33-23.5 56.5T760-120H200q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h480l160 160Zm-80 34L646-760H200v560h560v-446ZM480-240q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35ZM240-560h360v-160H240v160Zm-40-86v446-560 114Z"></path></svg>');
function Ts(e, t) {
  let n = m(t, "svgStyles", 3, "");
  Ln(e, {
    children: (r, i) => {
      var a = mg();
      Ae(() => Dt(a, n())), I(r, a);
    }
  });
}
var bg = /* @__PURE__ */ qt('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M200-440v-80h560v80H200Z"></path></svg>');
function _g(e, t) {
  let n = m(t, "svgStyles", 3, "");
  Ln(e, {
    children: (r, i) => {
      var a = bg();
      Ae(() => Dt(a, n())), I(r, a);
    }
  });
}
var yg = /* @__PURE__ */ qt('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"></path></svg>');
function Eg(e, t) {
  let n = m(t, "svgStyles", 3, "");
  Ln(e, {
    children: (r, i) => {
      var a = yg();
      Ae(() => Dt(a, n())), I(r, a);
    }
  });
}
var Sg = /* @__PURE__ */ qt('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"></path></svg>');
function Cg(e, t) {
  let n = m(t, "svgStyles", 3, "");
  Ln(e, {
    children: (r, i) => {
      var a = Sg();
      Ae(() => Dt(a, n())), I(r, a);
    }
  });
}
oc();
Qt(["change"]);
var Ag = /* @__PURE__ */ J('<div class="overlay svelte-14uvd2z"><div class="loading-spinner-container svelte-14uvd2z"><div class="loading-spinner svelte-14uvd2z"></div> <span class="loading-message svelte-14uvd2z"> </span></div></div>'), Ig = /* @__PURE__ */ J('<div class="svelte-14uvd2z"><!></div>');
function Os(e, t) {
  let n = m(t, "loadingDone", 3, !0), r = m(t, "message", 3, "Loading...");
  var i = Ig(), a = de(i);
  {
    var o = (u) => {
      var l = Ag(), s = de(l), d = ae(de(s), 2), f = de(d);
      Ae(() => et(f, r())), I(u, l);
    };
    re(a, (u) => {
      n() || u(o);
    });
  }
  I(e, i);
}
Qt(["change"]);
function xg(e, t, n, r) {
  t() && ((e.key === "Enter" || e.key === " ") && (e.preventDefault(), n()), e.key === "Escape" && (e.preventDefault(), r()));
}
var wg = /* @__PURE__ */ J('<span role="button" tabindex="0" aria-labelledby="tooltip"><!></span>');
function Rs(e, t) {
  Te(t, !0);
  let n = m(t, "content", 3, ""), r = m(t, "side", 3, "top"), i = m(t, "hoverDelay", 3, 0), a = m(t, "transitionDuration", 3, 80), o = m(t, "disabled", 3, !1);
  const u = `tt-${Math.random().toString(36).slice(2)}`;
  let l = /* @__PURE__ */ ye(null), s = /* @__PURE__ */ ye(null), d = /* @__PURE__ */ ye(null), f = /* @__PURE__ */ ye(null), v = /* @__PURE__ */ ye(!1), h = /* @__PURE__ */ ye(null), g = /* @__PURE__ */ ye(null);
  function p() {
    !n() || o() || (c(h) && clearTimeout(c(h)), i() > 0 ? z(h, setTimeout(() => z(v, !0), i()), !0) : z(v, !0));
  }
  function y() {
    c(h) && clearTimeout(c(h)), z(v, !1);
  }
  function _() {
    p();
  }
  function T() {
    y();
  }
  function w() {
    p();
  }
  function E() {
    y();
  }
  function C() {
    if (!c(s) || !c(f) || !c(l) || o()) return;
    const O = c(l).getBoundingClientRect(), D = c(f).getBoundingClientRect();
    let U = 0, W = 0;
    const Y = 8;
    switch (r()) {
      case "top":
        U = O.top - D.height - Y, W = O.left + O.width / 2 - D.width / 2;
        break;
      case "bottom":
        U = O.bottom + Y, W = O.left + O.width / 2 - D.width / 2;
        break;
      case "left":
        U = O.top + O.height / 2 - D.height / 2, W = O.left - D.width - Y;
        break;
      case "right":
        U = O.top + O.height / 2 - D.height / 2, W = O.right + Y;
        break;
    }
    c(s).style.top = `${U + window.scrollY}px`, c(s).style.left = `${W + window.scrollX}px`;
  }
  function b() {
    var O;
    (O = c(g)) == null || O.disconnect(), z(g, null), c(s) && c(s).parentNode && c(s).parentNode.removeChild(c(s)), z(s, null), z(f, null), z(d, null), c(h) && clearTimeout(c(h));
  }
  _r(b), Be(() => {
    if (!(!c(v) || !n() || o())) {
      if (!c(s)) {
        z(s, document.createElement("div"), !0), c(s).style.position = "absolute", c(s).style.zIndex = "9999", c(s).style.pointerEvents = "none", c(s).style.opacity = "0", c(s).style.transition = `opacity ${a()}ms ease`, c(s).id = u, c(s).setAttribute("role", "tooltip"), document.body.appendChild(c(s)), z(d, c(s).attachShadow({ mode: "open" }), !0);
        const O = document.createElement("style");
        O.textContent = `
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
      `, c(d).appendChild(O), z(f, document.createElement("div"), !0), c(d).appendChild(c(f)), z(
          g,
          new MutationObserver(() => {
            c(v) && C();
          }),
          !0
        ), c(g).observe(document.body, { childList: !0, subtree: !0 });
      }
      c(f) && (c(f).className = `bubble ${r()}`, c(f).innerHTML = n()), c(s) && (c(s).style.opacity = "1", C());
    }
  }), Be(() => {
    if (c(v) || !c(s))
      return;
    c(s).style.opacity = "0";
    const O = c(s), D = setTimeout(
      () => {
        O && O.parentNode && O.parentNode.removeChild(O), c(s) === O && b();
      },
      a()
    );
    return () => clearTimeout(D);
  });
  var S = wg();
  S.__keydown = [xg, n, p, y];
  var x = de(S);
  se(x, () => t.children ?? $), Ee(S, (O) => z(l, O), () => c(l)), Ae(() => {
    Vn(S, "aria-describedby", n() && !o() ? u : void 0), Vn(S, "aria-haspopup", n() ? "true" : void 0), Vn(S, "aria-expanded", n() ? c(v) ? "true" : "false" : void 0);
  }), Un("mouseenter", S, _), Un("mouseleave", S, T), Un("focus", S, w), Un("blur", S, E), I(e, S), Oe();
}
Qt(["keydown"]);
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
}, tn = {
  ARIA_HIDDEN: "aria-hidden",
  ARIA_VALUEMAX: "aria-valuemax",
  ARIA_VALUEMIN: "aria-valuemin",
  ARIA_VALUENOW: "aria-valuenow",
  BUFFER_BAR_SELECTOR: ".mdc-linear-progress__buffer-bar",
  FLEX_BASIS: "flex-basis",
  PRIMARY_BAR_SELECTOR: ".mdc-linear-progress__primary-bar"
}, li = {
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
var Lg = (
  /** @class */
  function(e) {
    mt(t, e);
    function t(n) {
      var r = e.call(this, te(te({}, t.defaultAdapter), n)) || this;
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
        return tn;
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
            for (var o = At(r), u = o.next(); !u.done; u = o.next()) {
              var l = u.value;
              l.contentRect && n.calculateAndSetDimensions(l.contentRect.width);
            }
          } catch (s) {
            i = { error: s };
          } finally {
            try {
              u && !u.done && (a = o.return) && a.call(o);
            } finally {
              if (i) throw i.error;
            }
          }
      }), !this.determinate && this.observer && this.calculateAndSetDimensions(this.adapter.getWidth());
    }, t.prototype.setDeterminate = function(n) {
      if (this.determinate = n, this.determinate) {
        this.adapter.removeClass(kt.INDETERMINATE_CLASS), this.adapter.setAttribute(tn.ARIA_VALUENOW, this.progress.toString()), this.adapter.setAttribute(tn.ARIA_VALUEMAX, "1"), this.adapter.setAttribute(tn.ARIA_VALUEMIN, "0"), this.setPrimaryBarProgress(this.progress), this.setBufferBarProgress(this.buffer);
        return;
      }
      this.observer && this.calculateAndSetDimensions(this.adapter.getWidth()), this.adapter.addClass(kt.INDETERMINATE_CLASS), this.adapter.removeAttribute(tn.ARIA_VALUENOW), this.adapter.removeAttribute(tn.ARIA_VALUEMAX), this.adapter.removeAttribute(tn.ARIA_VALUEMIN), this.setPrimaryBarProgress(1), this.setBufferBarProgress(1);
    }, t.prototype.isDeterminate = function() {
      return this.determinate;
    }, t.prototype.setProgress = function(n) {
      this.progress = n, this.determinate && (this.setPrimaryBarProgress(n), this.adapter.setAttribute(tn.ARIA_VALUENOW, n.toString()));
    }, t.prototype.getProgress = function() {
      return this.progress;
    }, t.prototype.setBuffer = function(n) {
      this.buffer = n, this.determinate && this.setBufferBarProgress(n);
    }, t.prototype.getBuffer = function() {
      return this.buffer;
    }, t.prototype.open = function() {
      this.adapter.removeClass(kt.CLOSED_CLASS), this.adapter.removeClass(kt.CLOSED_ANIMATION_OFF_CLASS), this.adapter.removeAttribute(tn.ARIA_HIDDEN);
    }, t.prototype.close = function() {
      this.adapter.addClass(kt.CLOSED_CLASS), this.adapter.setAttribute(tn.ARIA_HIDDEN, "true");
    }, t.prototype.isClosed = function() {
      return this.adapter.hasClass(kt.CLOSED_CLASS);
    }, t.prototype.handleTransitionEnd = function() {
      this.adapter.hasClass(kt.CLOSED_CLASS) && this.adapter.addClass(kt.CLOSED_ANIMATION_OFF_CLASS);
    }, t.prototype.destroy = function() {
      e.prototype.destroy.call(this), this.observer && this.observer.disconnect();
    }, t.prototype.restartAnimation = function() {
      this.adapter.removeClass(kt.ANIMATION_READY_CLASS), this.adapter.forceLayout(), this.adapter.addClass(kt.ANIMATION_READY_CLASS);
    }, t.prototype.setPrimaryBarProgress = function(n) {
      var r = "scaleX(" + n + ")", i = typeof window < "u" ? zv(window, "transform") : "transform";
      this.adapter.setPrimaryBarStyle(i, r);
    }, t.prototype.setBufferBarProgress = function(n) {
      var r = n * 100 + "%";
      this.adapter.setBufferBarStyle(tn.FLEX_BASIS, r);
    }, t.prototype.calculateAndSetDimensions = function(n) {
      var r = n * li.PRIMARY_HALF, i = n * li.PRIMARY_FULL, a = n * li.SECONDARY_QUARTER, o = n * li.SECONDARY_HALF, u = n * li.SECONDARY_FULL;
      this.adapter.setStyle("--mdc-linear-progress-primary-half", r + "px"), this.adapter.setStyle("--mdc-linear-progress-primary-half-neg", -r + "px"), this.adapter.setStyle("--mdc-linear-progress-primary-full", i + "px"), this.adapter.setStyle("--mdc-linear-progress-primary-full-neg", -i + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-quarter", a + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-quarter-neg", -a + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-half", o + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-half-neg", -o + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-full", u + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-full-neg", -u + "px"), this.restartAnimation();
    }, t;
  }(mn)
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
var yn = {
  HEADER_CELL_SORTED: "mdc-data-table__header-cell--sorted",
  HEADER_CELL_SORTED_DESCENDING: "mdc-data-table__header-cell--sorted-descending",
  IN_PROGRESS: "mdc-data-table--in-progress",
  ROW_SELECTED: "mdc-data-table__row--selected"
}, Hs = {
  ARIA_SELECTED: "aria-selected",
  ARIA_SORT: "aria-sort"
}, tr = {
  ARIA_SELECTED: Hs.ARIA_SELECTED,
  ARIA_SORT: Hs.ARIA_SORT
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
var Tg = (
  /** @class */
  function(e) {
    mt(t, e);
    function t(n) {
      return e.call(this, te(te({}, t.defaultAdapter), n)) || this;
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
      return Fl(this, void 0, void 0, function() {
        return To(this, function(n) {
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
        o !== i && (this.adapter.removeClassNameByHeaderCellIndex(o, yn.HEADER_CELL_SORTED), this.adapter.removeClassNameByHeaderCellIndex(o, yn.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(o, tr.ARIA_SORT, jt.NONE), this.adapter.setSortStatusLabelByHeaderCellIndex(o, jt.NONE));
      this.adapter.setClassNameByHeaderCellIndex(i, yn.HEADER_CELL_SORTED);
      var u = this.adapter.getAttributeByHeaderCellIndex(i, tr.ARIA_SORT), l = jt.NONE;
      u === jt.ASCENDING ? (this.adapter.setClassNameByHeaderCellIndex(i, yn.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(i, tr.ARIA_SORT, jt.DESCENDING), l = jt.DESCENDING) : u === jt.DESCENDING ? (this.adapter.removeClassNameByHeaderCellIndex(i, yn.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(i, tr.ARIA_SORT, jt.ASCENDING), l = jt.ASCENDING) : (this.adapter.setAttributeByHeaderCellIndex(i, tr.ARIA_SORT, jt.ASCENDING), l = jt.ASCENDING), this.adapter.setSortStatusLabelByHeaderCellIndex(i, l), this.adapter.notifySortAction({
        columnId: r,
        columnIndex: i,
        headerCell: a,
        sortValue: l
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
      }), this.adapter.addClass(yn.IN_PROGRESS);
    }, t.prototype.hideProgress = function() {
      this.adapter.removeClass(yn.IN_PROGRESS);
    }, t.prototype.setHeaderRowCheckboxState = function() {
      this.adapter.getSelectedRowCount() === 0 ? (this.adapter.setHeaderRowCheckboxChecked(!1), this.adapter.setHeaderRowCheckboxIndeterminate(!1)) : this.adapter.getSelectedRowCount() === this.adapter.getRowCount() ? (this.adapter.setHeaderRowCheckboxChecked(!0), this.adapter.setHeaderRowCheckboxIndeterminate(!1)) : (this.adapter.setHeaderRowCheckboxIndeterminate(!0), this.adapter.setHeaderRowCheckboxChecked(!1));
    }, t.prototype.selectRowAtIndex = function(n, r) {
      r ? (this.adapter.addClassAtRowIndex(n, yn.ROW_SELECTED), this.adapter.setAttributeAtRowIndex(n, tr.ARIA_SELECTED, "true")) : (this.adapter.removeClassAtRowIndex(n, yn.ROW_SELECTED), this.adapter.setAttributeAtRowIndex(n, tr.ARIA_SELECTED, "false"));
    }, t;
  }(mn)
), Og = /* @__PURE__ */ J('<div class="mdc-data-table__progress-indicator"><div class="mdc-data-table__scrim"></div> <!></div>'), Rg = /* @__PURE__ */ J("<div><div><table><!></table></div> <!> <!></div>");
function Hg(e, t) {
  Te(t, !0);
  const n = () => In(Y, "$progressClosed", r), [r, i] = Yn(), { closest: a } = Ho;
  let o = m(t, "use", 19, () => []), u = m(t, "class", 3, ""), l = m(t, "stickyHeader", 3, !1), s = m(t, "sortable", 3, !1), d = m(t, "sort", 15, null), f = m(t, "sortDirection", 15, "ascending"), v = m(t, "sortAscendingAriaLabel", 3, "sorted, ascending"), h = m(t, "sortDescendingAriaLabel", 3, "sorted, descending"), g = m(t, "container$use", 19, () => []), p = m(t, "container$class", 3, ""), y = m(t, "table$use", 19, () => []), _ = m(t, "table$class", 3, ""), T = /* @__PURE__ */ Ve(t, [
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
  ]), w, E = /* @__PURE__ */ ye(void 0), C, b = /* @__PURE__ */ ye(void 0), S = /* @__PURE__ */ ye(void 0), x = _e({}), O = /* @__PURE__ */ ye(_e({ height: "auto", top: "initial" })), D = be("SMUI:addLayoutListener"), U, W = !1, Y = Ot(!1), me = Ot(d());
  Be(() => {
    Fn(me, d());
  });
  let F = Ot(f());
  Be(() => {
    Fn(F, f());
  }), ue("SMUI:checkbox:context", "data-table"), ue("SMUI:linear-progress:context", "data-table"), ue("SMUI:linear-progress:closed", Y), ue("SMUI:data-table:sortable", s()), ue("SMUI:data-table:sort", me), ue("SMUI:data-table:sortDirection", F), ue("SMUI:data-table:sortAscendingAriaLabel", v()), ue("SMUI:data-table:sortDescendingAriaLabel", h()), D && (U = D(he));
  let H;
  Be(() => {
    t.progress && c(E) && H !== n() && (H = n(), n() ? c(E).hideProgress() : c(E).showProgress());
  }), ue("SMUI:checkbox:mount", () => {
    c(E) && W && c(E).layout();
  }), ue("SMUI:data-table:header:mount", (L) => {
    z(b, L, !0);
  }), ue("SMUI:data-table:header:unmount", () => {
    z(b, void 0);
  }), ue("SMUI:data-table:body:mount", (L) => {
    z(S, L, !0);
  }), ue("SMUI:data-table:body:unmount", () => {
    z(S, void 0);
  }), pt(() => (z(
    E,
    new Tg({
      addClass: j,
      removeClass: K,
      getHeaderCellElements: () => {
        var L;
        return ((L = c(b)) == null ? void 0 : L.cells.map((R) => R.element)) ?? [];
      },
      getHeaderCellCount: () => {
        var L;
        return ((L = c(b)) == null ? void 0 : L.cells.length) ?? 0;
      },
      getAttributeByHeaderCellIndex: (L, R) => {
        var ne;
        return ((ne = c(b)) == null ? void 0 : ne.orderedCells[L].getAttr(R)) ?? null;
      },
      setAttributeByHeaderCellIndex: (L, R, ne) => {
        var Ke;
        (Ke = c(b)) == null || Ke.orderedCells[L].addAttr(R, ne);
      },
      setClassNameByHeaderCellIndex: (L, R) => {
        var ne;
        (ne = c(b)) == null || ne.orderedCells[L].addClass(R);
      },
      removeClassNameByHeaderCellIndex: (L, R) => {
        var ne;
        (ne = c(b)) == null || ne.orderedCells[L].removeClass(R);
      },
      notifySortAction: (L) => {
        d(L.columnId), f(L.sortValue), nt(oe(), "SMUIDataTableSorted", L);
      },
      getTableContainerHeight: () => C.getBoundingClientRect().height,
      getTableHeaderHeight: () => {
        const L = oe().querySelector(".mdc-data-table__header-row");
        if (!L)
          throw new Error("MDCDataTable: Table header element not found.");
        return L.getBoundingClientRect().height;
      },
      setProgressIndicatorStyles: (L) => {
        z(O, L, !0);
      },
      addClassAtRowIndex: (L, R) => {
        var ne;
        (ne = c(S)) == null || ne.orderedRows[L].addClass(R);
      },
      getRowCount: () => {
        var L;
        return ((L = c(S)) == null ? void 0 : L.rows.length) ?? 0;
      },
      getRowElements: () => {
        var L;
        return ((L = c(S)) == null ? void 0 : L.rows.map((R) => R.element)) ?? [];
      },
      getRowIdAtIndex: (L) => {
        var R;
        return ((R = c(S)) == null ? void 0 : R.orderedRows[L].rowId) ?? null;
      },
      getRowIndexByChildElement: (L) => {
        var R;
        return ((R = c(S)) == null ? void 0 : R.orderedRows.map((ne) => ne.element).indexOf(a(L, ".mdc-data-table__row"))) ?? -1;
      },
      getSelectedRowCount: () => {
        var L;
        return ((L = c(S)) == null ? void 0 : L.rows.filter((R) => R.selected).length) ?? 0;
      },
      isCheckboxAtRowIndexChecked: (L) => {
        var ne;
        const R = (ne = c(S)) == null ? void 0 : ne.orderedRows[L].checkbox;
        return R ? R.checked : !1;
      },
      isHeaderRowCheckboxChecked: () => {
        var R;
        const L = (R = c(b)) == null ? void 0 : R.checkbox;
        return L ? L.checked : !1;
      },
      isRowsSelectable: () => !!oe().querySelector(".mdc-data-table__row-checkbox") || !!oe().querySelector(".mdc-data-table__header-row-checkbox"),
      notifyRowSelectionChanged: (L) => {
        var ne;
        const R = (ne = c(S)) == null ? void 0 : ne.orderedRows[L.rowIndex];
        R && nt(oe(), "SMUIDataTableSelectionChanged", {
          row: R.element,
          rowId: R.rowId,
          rowIndex: L.rowIndex,
          selected: L.selected
        });
      },
      notifySelectedAll: () => {
        G(!1), nt(oe(), "SMUIDataTableSelectedAll");
      },
      notifyUnselectedAll: () => {
        G(!1), nt(oe(), "SMUIDataTableUnselectedAll");
      },
      notifyRowClick: (L) => nt(oe(), "SMUIDataTableClickRow", L),
      registerHeaderRowCheckbox: () => {
      },
      registerRowCheckboxes: () => {
      },
      removeClassAtRowIndex: (L, R) => {
        var ne;
        (ne = c(S)) == null || ne.orderedRows[L].removeClass(R);
      },
      setAttributeAtRowIndex: (L, R, ne) => {
        var Ke;
        (Ke = c(S)) == null || Ke.orderedRows[L].addAttr(R, ne);
      },
      setHeaderRowCheckboxChecked: (L) => {
        var ne;
        const R = (ne = c(b)) == null ? void 0 : ne.checkbox;
        R && (R.checked = L);
      },
      setHeaderRowCheckboxIndeterminate: G,
      setRowCheckboxCheckedAtIndex: (L, R) => {
        var Ke;
        const ne = (Ke = c(S)) == null ? void 0 : Ke.orderedRows[L].checkbox;
        ne && (ne.checked = R);
      },
      setSortStatusLabelByHeaderCellIndex: (L, R) => {
      }
    }),
    !0
  ), c(E).init(), c(E).layout(), W = !0, () => {
    var L;
    (L = c(E)) == null || L.destroy();
  })), _r(() => {
    U && U();
  });
  function P(L) {
    c(E) && c(E).handleRowCheckboxChange(L);
  }
  function j(L) {
    x[L] || (x[L] = !0);
  }
  function K(L) {
    (!(L in x) || x[L]) && (x[L] = !1);
  }
  function G(L) {
    var ne;
    const R = (ne = c(b)) == null ? void 0 : ne.checkbox;
    R && (R.indeterminate = L);
  }
  function A(L) {
    if (!c(E) || !L.detail.target)
      return;
    const R = a(L.detail.target, ".mdc-data-table__header-cell--with-sort");
    R && ie(R);
  }
  function M(L) {
    if (!c(E) || !L.detail.target)
      return;
    const R = a(L.detail.target, ".mdc-data-table__row");
    R && c(E) && c(E).handleRowClick({ rowId: L.detail.rowId, row: R });
  }
  function ie(L) {
    var Pt, zt;
    const R = ((Pt = c(b)) == null ? void 0 : Pt.orderedCells) ?? [], ne = R.map((bn) => bn.element).indexOf(L);
    if (ne === -1)
      return;
    const Ke = R[ne].columnId ?? null;
    (zt = c(E)) == null || zt.handleSortAction({ columnId: Ke, columnIndex: ne, headerCell: L });
  }
  function he() {
    var L;
    return (L = c(E)) == null ? void 0 : L.layout();
  }
  function oe() {
    return w;
  }
  var ee = { layout: he, getElement: oe }, Q = Rg(), fe = (L) => {
    var R;
    c(E) && c(E).handleHeaderRowCheckboxChange(), (R = t.onSMUIDataTableHeaderCheckboxChange) == null || R.call(t, L);
  }, Le = (L) => {
    var R;
    A(L), (R = t.onSMUIDataTableHeaderClick) == null || R.call(t, L);
  }, Re = (L) => {
    var R;
    M(L), (R = t.onSMUIDataTableRowClick) == null || R.call(t, L);
  }, ve = (L) => {
    var R;
    P(L), (R = t.onSMUIDataTableBodyCheckboxChange) == null || R.call(t, L);
  };
  We(
    Q,
    (L, R) => ({
      class: L,
      ...R,
      onSMUIDataTableHeaderCheckboxChange: fe,
      onSMUIDataTableHeaderClick: Le,
      onSMUIDataTableRowClick: Re,
      onSMUIDataTableBodyCheckboxChange: ve
    }),
    [
      () => je({
        "mdc-data-table": !0,
        "mdc-data-table--sticky-header": l(),
        ...x,
        [u()]: !0
      }),
      () => ta(T, ["container$", "table$"])
    ]
  );
  var le = de(Q);
  We(le, (L, R) => ({ class: L, ...R }), [
    () => je({
      "mdc-data-table__table-container": !0,
      [p()]: !0
    }),
    () => rn(T, "container$")
  ]);
  var Ue = de(le);
  We(Ue, (L, R) => ({ class: L, ...R }), [
    () => je({ "mdc-data-table__table": !0, [_()]: !0 }),
    () => rn(T, "table$")
  ]);
  var xe = de(Ue);
  se(xe, () => t.children ?? $), Xe(Ue, (L, R) => q == null ? void 0 : q(L, R), y), Ee(le, (L) => C = L, () => C), Xe(le, (L, R) => q == null ? void 0 : q(L, R), g);
  var Se = ae(le, 2);
  {
    var ce = (L) => {
      var R = Og(), ne = ae(de(R), 2);
      se(ne, () => t.progress ?? $), Ae((Ke) => Dt(R, Ke), [
        () => Object.entries(c(O)).map(([Ke, Pt]) => `${Ke}: ${Pt};`).join(" ")
      ]), I(L, R);
    };
    re(Se, (L) => {
      t.progress && L(ce);
    });
  }
  var De = ae(Se, 2);
  se(De, () => t.paginate ?? $), Ee(Q, (L) => w = L, () => w), Xe(Q, (L, R) => q == null ? void 0 : q(L, R), o), I(e, Q);
  var bt = Oe(ee);
  return i(), bt;
}
var Dg = /* @__PURE__ */ J("<thead><!></thead>");
function Pg(e, t) {
  Te(t, !0);
  let n = m(t, "use", 19, () => []), r = /* @__PURE__ */ Ve(t, ["$$slots", "$$events", "$$legacy", "use", "children"]), i, a = /* @__PURE__ */ ye(void 0), o = [];
  const u = /* @__PURE__ */ new WeakMap();
  ue("SMUI:data-table:row:header", !0);
  const l = be("SMUI:checkbox:mount");
  ue("SMUI:checkbox:mount", (_) => {
    z(a, _, !0), l && l(_);
  });
  const s = be("SMUI:checkbox:unmount");
  ue("SMUI:checkbox:unmount", (_) => {
    z(a, void 0), s && s(_);
  }), ue("SMUI:data-table:cell:mount", (_) => {
    o.push(_), u.set(_.element, _);
  }), ue("SMUI:data-table:cell:unmount", (_) => {
    const T = o.findIndex((w) => w === _);
    T !== -1 && o.splice(T, 1), u.delete(_.element);
  });
  const d = be("SMUI:data-table:header:mount"), f = be("SMUI:data-table:header:unmount");
  pt(() => {
    const _ = {
      get cells() {
        return o;
      },
      get orderedCells() {
        return v();
      },
      get checkbox() {
        return c(a);
      }
    };
    return d && d(_), () => {
      f && f(_);
    };
  });
  function v() {
    return [
      ...h().querySelectorAll(".mdc-data-table__header-cell")
    ].map((_) => u.get(_)).filter((_) => _ && _._smui_data_table_header_cell_accessor);
  }
  function h() {
    return i;
  }
  var g = { getElement: h }, p = Dg();
  We(p, () => ({ ...r }));
  var y = de(p);
  return se(y, () => t.children ?? $), Ee(p, (_) => i = _, () => i), Xe(p, (_, T) => q == null ? void 0 : q(_, T), n), I(e, p), Oe(g);
}
var Mg = /* @__PURE__ */ J("<tbody><!></tbody>");
function Bg(e, t) {
  Te(t, !0);
  let n = m(t, "use", 19, () => []), r = m(t, "class", 3, ""), i = /* @__PURE__ */ Ve(t, [
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
    const y = o.findIndex((_) => _ === p);
    y !== -1 && o.splice(y, 1), u.delete(p.element);
  });
  const l = be("SMUI:data-table:body:mount"), s = be("SMUI:data-table:body:unmount");
  pt(() => {
    const p = {
      get rows() {
        return o;
      },
      get orderedRows() {
        return d();
      }
    };
    return l && l(p), () => {
      s && s(p);
    };
  });
  function d() {
    return [...f().querySelectorAll(".mdc-data-table__row")].map((p) => u.get(p)).filter((p) => p && p._smui_data_table_row_accessor);
  }
  function f() {
    return a;
  }
  var v = { getElement: f }, h = Mg();
  We(h, (p) => ({ class: p, ...i }), [
    () => je({ "mdc-data-table__content": !0, [r()]: !0 })
  ]);
  var g = de(h);
  return se(g, () => t.children ?? $), Ee(h, (p) => a = p, () => a), Xe(h, (p, y) => q == null ? void 0 : q(p, y), n), I(e, h), Oe(v);
}
let Ug = 0;
var Fg = /* @__PURE__ */ J("<tr><!></tr>");
function Ua(e, t) {
  Te(t, !0);
  let n = m(t, "use", 19, () => []), r = m(t, "class", 3, ""), i = m(t, "rowId", 19, () => "SMUI-data-table-row-" + Ug++), a = /* @__PURE__ */ Ve(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "rowId",
    "children"
  ]), o, u = /* @__PURE__ */ ye(void 0), l = _e({}), s = _e({}), d = be("SMUI:data-table:row:header");
  const f = be("SMUI:checkbox:mount");
  ue("SMUI:checkbox:mount", (D) => {
    z(u, D, !0), f && f(D);
  });
  const v = be("SMUI:checkbox:unmount");
  ue("SMUI:checkbox:unmount", (D) => {
    z(u, void 0), v && v(D);
  });
  const h = be("SMUI:data-table:row:mount"), g = be("SMUI:data-table:row:unmount");
  pt(() => {
    const D = d ? {
      _smui_data_table_row_accessor: !1,
      get element() {
        return C();
      },
      get checkbox() {
        return c(u);
      },
      get rowId() {
      },
      get selected() {
        return (c(u) && c(u).checked) ?? !1;
      },
      addClass: p,
      removeClass: y,
      getAttr: _,
      addAttr: T
    } : {
      _smui_data_table_row_accessor: !0,
      get element() {
        return C();
      },
      get checkbox() {
        return c(u);
      },
      get rowId() {
        return i();
      },
      get selected() {
        return (c(u) && c(u).checked) ?? !1;
      },
      addClass: p,
      removeClass: y,
      getAttr: _,
      addAttr: T
    };
    return h && h(D), () => {
      g && g(D);
    };
  });
  function p(D) {
    l[D] || (l[D] = !0);
  }
  function y(D) {
    (!(D in l) || l[D]) && (l[D] = !1);
  }
  function _(D) {
    return D in s ? s[D] ?? null : C().getAttribute(D);
  }
  function T(D, U) {
    s[D] !== U && (s[D] = U);
  }
  function w(D) {
    nt(C(), "SMUIDataTableHeaderClick", D);
  }
  function E(D) {
    nt(C(), "SMUIDataTableRowClick", { rowId: i(), target: D.target });
  }
  function C() {
    return o;
  }
  var b = { getElement: C }, S = Fg(), x = (D) => {
    var U;
    d ? w(D) : E(D), (U = t.onclick) == null || U.call(t, D);
  };
  We(
    S,
    (D) => ({
      class: D,
      "aria-selected": c(u) ? c(u).checked ? "true" : "false" : void 0,
      ...s,
      ...a,
      onclick: x
    }),
    [
      () => je({
        "mdc-data-table__header-row": d,
        "mdc-data-table__row": !d,
        "mdc-data-table__row--selected": !d && c(u) && c(u).checked,
        ...l,
        [r()]: !0
      })
    ]
  );
  var O = de(S);
  return se(O, () => t.children ?? $), Ee(S, (D) => o = D, () => o), Xe(S, (D, U) => q == null ? void 0 : q(D, U), n), I(e, S), Oe(b);
}
let Ng = 0;
var kg = /* @__PURE__ */ J('<div class="mdc-data-table__header-cell-wrapper"><!> <div class="mdc-data-table__sort-status-label" aria-hidden="true"> </div></div>'), Gg = /* @__PURE__ */ J("<th><!></th>"), jg = /* @__PURE__ */ J("<td><!></td>");
function Ni(e, t) {
  Te(t, !0);
  const n = () => In(_, "$sort", i), r = () => In(T, "$sortDirection", i), [i, a] = Yn();
  let o = be("SMUI:data-table:row:header"), u = m(t, "use", 19, () => []), l = m(t, "class", 3, ""), s = m(t, "numeric", 3, !1), d = m(t, "checkbox", 3, !1), f = m(t, "columnId", 19, () => o ? "SMUI-data-table-column-" + Ng++ : "SMUI-data-table-unused"), v = m(t, "sortable", 19, () => be("SMUI:data-table:sortable")), h = /* @__PURE__ */ Ve(t, [
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
  ]), g, p = _e({}), y = _e({}), _ = be("SMUI:data-table:sort"), T = be("SMUI:data-table:sortDirection"), w = be("SMUI:data-table:sortAscendingAriaLabel"), E = be("SMUI:data-table:sortDescendingAriaLabel");
  v() && (ue("SMUI:label:context", "data-table:sortable-header-cell"), ue("SMUI:icon-button:context", "data-table:sortable-header-cell"), ue("SMUI:icon-button:aria-describedby", f() + "-status-label"));
  const C = be("SMUI:data-table:cell:mount"), b = be("SMUI:data-table:cell:unmount");
  pt(() => {
    const G = o ? {
      _smui_data_table_header_cell_accessor: !0,
      get element() {
        return Y();
      },
      get columnId() {
        return f();
      },
      addClass: S,
      removeClass: x,
      getAttr: O,
      addAttr: D
    } : {
      _smui_data_table_header_cell_accessor: !1,
      get element() {
        return Y();
      },
      get columnId() {
      },
      addClass: S,
      removeClass: x,
      getAttr: O,
      addAttr: D
    };
    return C && C(G), () => {
      b && b(G);
    };
  });
  function S(G) {
    p[G] || (p[G] = !0);
  }
  function x(G) {
    (!(G in p) || p[G]) && (p[G] = !1);
  }
  function O(G) {
    return G in y ? y[G] ?? null : Y().getAttribute(G);
  }
  function D(G, A) {
    y[G] !== A && (y[G] = A);
  }
  function U(G) {
    nt(Y(), "SMUIDataTableHeaderCheckboxChange", G);
  }
  function W(G) {
    nt(Y(), "SMUIDataTableBodyCheckboxChange", G);
  }
  function Y() {
    return g;
  }
  var me = { getElement: Y }, F = Z(), H = V(F);
  {
    var P = (G) => {
      var A = Gg(), M = (ee) => {
        var Q;
        d() && U(ee), (Q = t.onchange) == null || Q.call(t, ee);
      };
      We(
        A,
        (ee) => ({
          class: ee,
          role: "columnheader",
          scope: "col",
          "data-column-id": f(),
          "aria-sort": v() ? n() === f() ? r() : "none" : void 0,
          ...y,
          ...h,
          onchange: M
        }),
        [
          () => je({
            "mdc-data-table__header-cell": !0,
            "mdc-data-table__header-cell--numeric": s(),
            "mdc-data-table__header-cell--checkbox": d(),
            "mdc-data-table__header-cell--with-sort": v(),
            "mdc-data-table__header-cell--sorted": v() && n() === f(),
            ...p,
            [l()]: !0
          })
        ]
      );
      var ie = de(A);
      {
        var he = (ee) => {
          var Q = kg(), fe = de(Q);
          se(fe, () => t.children ?? $);
          var Le = ae(fe, 2), Re = de(Le);
          Ae(() => {
            Vn(Le, "id", `${f() ?? ""}-status-label`), et(Re, n() === f() ? r() === "ascending" ? w : E : "");
          }), I(ee, Q);
        }, oe = (ee) => {
          var Q = Z(), fe = V(Q);
          se(fe, () => t.children ?? $), I(ee, Q);
        };
        re(ie, (ee) => {
          v() ? ee(he) : ee(oe, !1);
        });
      }
      Ee(A, (ee) => g = ee, () => g), Xe(A, (ee, Q) => q == null ? void 0 : q(ee, Q), u), I(G, A);
    }, j = (G) => {
      var A = jg(), M = (he) => {
        var oe;
        d() && W(he), (oe = t.onchange) == null || oe.call(t, he);
      };
      We(
        A,
        (he) => ({
          class: he,
          ...y,
          ...h,
          onchange: M
        }),
        [
          () => je({
            "mdc-data-table__cell": !0,
            "mdc-data-table__cell--numeric": s(),
            "mdc-data-table__cell--checkbox": d(),
            ...p,
            [l()]: !0
          })
        ]
      );
      var ie = de(A);
      se(ie, () => t.children ?? $), Ee(A, (he) => g = he, () => g), Xe(A, (he, oe) => q == null ? void 0 : q(he, oe), u), I(G, A);
    };
    re(H, (G) => {
      o ? G(P) : G(j, !1);
    });
  }
  I(e, F);
  var K = Oe(me);
  return a(), K;
}
Qt(["click"]);
Qt(["click"]);
function uo(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
var Vg = Object.freeze({
  // This flag exists as a workaround for issue 454 (basically a browser bug) - seems like these rect values take time to update when in grid layout. Setting it to true can cause strange behaviour in the REPL for non-grid zones, see issue 470
  USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT: "USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT"
});
uo({}, Vg.USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT, !1);
var ki, Ds = {
  DND_ZONE_ACTIVE: "dnd-zone-active",
  DND_ZONE_DRAG_DISABLED: "dnd-zone-drag-disabled"
};
ki = {}, uo(ki, Ds.DND_ZONE_ACTIVE, "Tab to one the items and press space-bar or enter to start dragging it"), uo(ki, Ds.DND_ZONE_DRAG_DISABLED, "This is a disabled drag and drop list");
const qg = Ot([]);
qg.subscribe;
Qt([
  "click",
  "keydown",
  "pointerdown",
  "pointerup",
  "pointermove"
]);
Qt(["click"]);
const zg = 4e3;
function Xg() {
  let e = _e({ items: [] }), t = 0;
  const n = (i) => {
    e.items = e.items.filter((a) => a.id !== i);
  }, r = (i, a, o, u = zg) => {
    const l = t++, s = { id: l, summary: a, detail: o, type: i };
    return e.items = [...e.items, s], setTimeout(
      () => {
        n(l);
      },
      u
    ), l;
  };
  return {
    /** readonly state for UI host */
    get toasts() {
      return e;
    },
    success: (i, a, o) => r("success", i, a, o),
    error: (i, a, o) => r("error", i, a, o),
    info: (i, a, o) => r("info", i, a, o),
    warn: (i, a, o) => r("warn", i, a, o),
    remove: n
  };
}
Xg();
Qt(["click"]);
Qt(["click"]);
Qt(["click"]);
var Wg = /* @__PURE__ */ J('<div><div class="mdc-linear-progress__buffer"><div class="mdc-linear-progress__buffer-bar"></div> <div class="mdc-linear-progress__buffer-dots"></div></div> <div class="mdc-linear-progress__bar mdc-linear-progress__primary-bar"><span class="mdc-linear-progress__bar-inner"></span></div> <div class="mdc-linear-progress__bar mdc-linear-progress__secondary-bar"><span class="mdc-linear-progress__bar-inner"></span></div></div>');
function Zg(e, t) {
  Te(t, !0);
  const [n, r] = Yn();
  let i = m(t, "use", 19, () => []), a = m(t, "class", 3, ""), o = m(t, "style", 3, ""), u = m(t, "indeterminate", 3, !1), l = m(t, "closed", 3, !1), s = m(t, "progress", 3, 0), d = m(t, "buffer", 3, void 0), f = /* @__PURE__ */ Ve(t, [
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
  ]), v, h = /* @__PURE__ */ ye(void 0), g = _e({}), p = _e({}), y = _e({}), _ = _e({}), T = _e({}), w = be("SMUI:linear-progress:context"), E = be("SMUI:linear-progress:closed");
  Be(() => {
    E && Fn(E, l());
  }), Be(() => {
    c(h) && c(h).isDeterminate() !== !u() && c(h).setDeterminate(!u());
  }), Be(() => {
    c(h) && c(h).getProgress() !== s() && c(h).setProgress(s());
  }), Be(() => {
    c(h) && (d() == null ? c(h).setBuffer(1) : c(h).setBuffer(d()));
  }), Be(() => {
    c(h) && (l() ? c(h).close() : c(h).open());
  }), pt(() => (z(
    h,
    new Lg({
      addClass: b,
      forceLayout: () => {
        Y().getBoundingClientRect();
      },
      setBufferBarStyle: U,
      setPrimaryBarStyle: W,
      hasClass: C,
      removeAttribute: O,
      removeClass: S,
      setAttribute: x,
      setStyle: D,
      attachResizeObserver: (A) => {
        const M = window.ResizeObserver;
        if (M) {
          const ie = new M(A);
          return ie.observe(Y()), ie;
        }
        return null;
      },
      getWidth: () => Y().offsetWidth
    }),
    !0
  ), c(h).init(), () => {
    var A;
    (A = c(h)) == null || A.destroy();
  }));
  function C(A) {
    return A in g ? g[A] : Y().classList.contains(A);
  }
  function b(A) {
    g[A] || (g[A] = !0);
  }
  function S(A) {
    (!(A in g) || g[A]) && (g[A] = !1);
  }
  function x(A, M) {
    p[A] !== M && (p[A] = M);
  }
  function O(A) {
    (!(A in p) || p[A] != null) && (p[A] = void 0);
  }
  function D(A, M) {
    y[A] != M && (M === "" || M == null ? delete y[A] : y[A] = M);
  }
  function U(A, M) {
    _[A] != M && (M === "" || M == null ? delete _[A] : _[A] = M);
  }
  function W(A, M) {
    T[A] != M && (M === "" || M == null ? delete T[A] : T[A] = M);
  }
  function Y() {
    return v;
  }
  var me = { getElement: Y }, F = Wg(), H = (A) => {
    var M;
    c(h) && c(h).handleTransitionEnd(), (M = t.ontransitionend) == null || M.call(t, A);
  };
  We(
    F,
    (A, M) => ({
      class: A,
      style: M,
      role: "progressbar",
      "aria-valuemin": 0,
      "aria-valuemax": 1,
      "aria-valuenow": u() ? void 0 : s(),
      ...p,
      ...f,
      ontransitionend: H
    }),
    [
      () => je({
        "mdc-linear-progress": !0,
        "mdc-linear-progress--indeterminate": u(),
        "mdc-linear-progress--closed": l(),
        "mdc-data-table__linear-progress": w === "data-table",
        ...g,
        [a()]: !0
      }),
      () => Object.entries(y).map(([A, M]) => `${A}: ${M};`).concat([o()]).join(" ")
    ]
  );
  var P = de(F), j = de(P), K = ae(P, 2);
  Ee(F, (A) => v = A, () => v), Xe(F, (A, M) => q == null ? void 0 : q(A, M), i), Ae(
    (A, M) => {
      Dt(j, A), Dt(K, M);
    },
    [
      () => Object.entries(_).map(([A, M]) => `${A}: ${M};`).join(" "),
      () => Object.entries(T).map(([A, M]) => `${A}: ${M};`).join(" ")
    ]
  ), I(e, F);
  var G = Oe(me);
  return r(), G;
}
var Yg = /* @__PURE__ */ qt('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor" class="svelte-1mj71p3"><path d="M12 4l-8 8h16l-8-8z"></path></svg>'), Kg = /* @__PURE__ */ qt('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor" class="svelte-1mj71p3"><path d="M12 20l8-8H4l8 8z"></path></svg>'), Qg = /* @__PURE__ */ J('<div class="custom-cell-container svelte-1mj71p3"><div class="cell-header svelte-1mj71p3"><span class="header-title svelte-1mj71p3"> </span> <!></div></div>'), Jg = (e, t) => t(), $g = /* @__PURE__ */ J('<input type="text" class="svelte-1mj71p3"/>'), ep = (e, t) => t(), tp = /* @__PURE__ */ J('<input type="number" class="svelte-1mj71p3"/>'), np = /* @__PURE__ */ J("<!> <!>", 1), rp = /* @__PURE__ */ J("<!> <!>", 1), ip = /* @__PURE__ */ J('<div class="cell-actions svelte-1mj71p3"></div>'), ap = /* @__PURE__ */ J("<!> <!>", 1);
function op(e, t) {
  Te(t, !0);
  const n = () => In(p, "$sortColumn", a), r = () => In(y, "$sortDirection", a), i = () => In(g, "$filteredData", a), [a, o] = Yn();
  let u = m(t, "loadingDone", 15, !0), l = m(t, "label", 19, lg), s = m(t, "columnDefs", 19, () => []), d = m(t, "rowData", 31, () => _e([])), f = m(t, "rowActions", 19, () => []), v = m(t, "searchInputLabel", 3, "Search"), h = _e({ name: "", color: "", number: "" }), g = Ot([]), p = Ot(null), y = Ot(null), _ = /* @__PURE__ */ pe(() => s().some((C) => C.filter));
  t.store.store.subscribe((C) => {
    d([...C]), T();
  });
  function T() {
    let C = d().filter((b) => s().every((S) => {
      const x = h[S.field], O = S.filterValueGetter ? S.filterValueGetter(b) : b[S.field];
      return x ? S.filterType === "number" ? O == x : O.toString().toLowerCase().includes(x.toLowerCase()) : !0;
    }));
    C = w(C), g.set(C);
  }
  function w(C) {
    let b, S;
    return p.subscribe((x) => b = x), y.subscribe((x) => S = x), !b || !S ? C : C.sort((x, O) => {
      let D = x[b], U = O[b];
      return D == null && (D = ""), U == null && (U = ""), S === "asc" ? D.toString().localeCompare(U.toString()) : U.toString().localeCompare(D.toString());
    });
  }
  function E(C) {
    p.update((b) => {
      if (b === C)
        y.update((S) => S === "asc" ? "desc" : S === "desc" ? null : "asc");
      else
        return y.set("asc"), C;
      return C;
    }), T();
  }
  g.set(d()), Hg(e, {
    get "table$aria-label"() {
      return l();
    },
    style: "max-width: 100%; width: 100%;",
    progress: (b) => {
      Zg(b, {
        indeterminate: !0,
        "aria-label": "Data is being loaded...",
        get closed() {
          return u();
        },
        set closed(S) {
          u(S);
        }
      });
    },
    children: (b, S) => {
      var x = ap(), O = V(x);
      Pg(O, {
        children: (U, W) => {
          var Y = rp(), me = V(Y);
          Ua(me, {
            class: "header-title-row",
            children: (P, j) => {
              var K = Z(), G = V(K);
              ri(G, 17, s, Hi, (A, M) => {
                Ni(A, {
                  onclick: () => c(M).sortable && E(c(M).field),
                  get style() {
                    return c(M).headerStyle;
                  },
                  children: (ie, he) => {
                    var oe = Qg(), ee = de(oe), Q = de(ee), fe = de(Q), Le = ae(Q, 2);
                    {
                      var Re = (ve) => {
                        var le = Z(), Ue = V(le);
                        {
                          var xe = (Se) => {
                            var ce = Z(), De = V(ce);
                            {
                              var bt = (R) => {
                                var ne = Yg();
                                I(R, ne);
                              }, L = (R) => {
                                var ne = Z(), Ke = V(ne);
                                {
                                  var Pt = (zt) => {
                                    var bn = Kg();
                                    I(zt, bn);
                                  };
                                  re(
                                    Ke,
                                    (zt) => {
                                      r() === "desc" && zt(Pt);
                                    },
                                    !0
                                  );
                                }
                                I(R, ne);
                              };
                              re(De, (R) => {
                                r() === "asc" ? R(bt) : R(L, !1);
                              });
                            }
                            I(Se, ce);
                          };
                          re(Ue, (Se) => {
                            n() === c(M).field && r() !== null && Se(xe);
                          });
                        }
                        I(ve, le);
                      };
                      re(Le, (ve) => {
                        c(M).sortable && ve(Re);
                      });
                    }
                    Ae(() => {
                      Dt(oe, `min-width: ${c(M).minWidth ?? 0 ?? ""}`), et(fe, c(M).headerName);
                    }), I(ie, oe);
                  },
                  $$slots: { default: !0 }
                });
              }), I(P, K);
            },
            $$slots: { default: !0 }
          });
          var F = ae(me, 2);
          {
            var H = (P) => {
              Ua(P, {
                class: "header-filter-row",
                children: (j, K) => {
                  var G = Z(), A = V(G);
                  ri(A, 17, s, Hi, (M, ie) => {
                    Ni(M, {
                      children: (he, oe) => {
                        var ee = Z(), Q = V(ee);
                        {
                          var fe = (Le) => {
                            var Re = np(), ve = V(Re);
                            {
                              var le = (Se) => {
                                var ce = $g();
                                ce.__input = [Jg, T], Ae(() => Vn(ce, "placeholder", `${v()} ${c(ie).headerName}`)), Qa(ce, () => h[c(ie).field], (De) => h[c(ie).field] = De), I(Se, ce);
                              };
                              re(ve, (Se) => {
                                c(ie).filterType === "text" && Se(le);
                              });
                            }
                            var Ue = ae(ve, 2);
                            {
                              var xe = (Se) => {
                                var ce = tp();
                                ce.__input = [ep, T], Ae(() => Vn(ce, "placeholder", `${v()} ${c(ie).headerName}`)), Qa(ce, () => h[c(ie).field], (De) => h[c(ie).field] = De), I(Se, ce);
                              };
                              re(Ue, (Se) => {
                                c(ie).filterType === "number" && Se(xe);
                              });
                            }
                            I(Le, Re);
                          };
                          re(Q, (Le) => {
                            c(ie).filter && Le(fe);
                          });
                        }
                        I(he, ee);
                      },
                      $$slots: { default: !0 }
                    });
                  }), I(j, G);
                },
                $$slots: { default: !0 }
              });
            };
            re(F, (P) => {
              c(_) && P(H);
            });
          }
          I(U, Y);
        },
        $$slots: { default: !0 }
      });
      var D = ae(O, 2);
      Bg(D, {
        children: (U, W) => {
          var Y = Z(), me = V(Y);
          ri(me, 1, i, Hi, (F, H) => {
            Ua(F, {
              children: (P, j) => {
                var K = Z(), G = V(K);
                ri(G, 17, s, (A) => A.field, (A, M) => {
                  var ie = Z(), he = V(ie);
                  {
                    var oe = (Q) => {
                      Ni(Q, {
                        children: (fe, Le) => {
                          var Re = ip();
                          ri(Re, 21, f, Hi, (ve, le) => {
                            var Ue = Z(), xe = V(Ue);
                            {
                              var Se = (De) => {
                                Rs(De, {
                                  get content() {
                                    return c(le).tooltip;
                                  },
                                  hoverDelay: 500,
                                  children: (bt, L) => {
                                    {
                                      let R = /* @__PURE__ */ pe(() => c(le).disabled(c(H)));
                                      lv(bt, {
                                        get iconComponent() {
                                          return c(le).iconComponent;
                                        },
                                        get iconStyles() {
                                          return c(le).iconStyles;
                                        },
                                        callback: () => c(le).callback(c(H)),
                                        get disabled() {
                                          return c(R);
                                        }
                                      });
                                    }
                                  },
                                  $$slots: { default: !0 }
                                });
                              }, ce = (De) => {
                                Rs(De, {
                                  get content() {
                                    return c(le).tooltip;
                                  },
                                  hoverDelay: 500,
                                  children: (bt, L) => {
                                    {
                                      let R = /* @__PURE__ */ pe(() => c(le).disabled(c(H)));
                                      nr(bt, {
                                        class: "button",
                                        variant: "raised",
                                        callback: () => c(le).callback(c(H)),
                                        get disabled() {
                                          return c(R);
                                        },
                                        children: (ne, Ke) => {
                                          var Pt = Z(), zt = V(Pt);
                                          {
                                            var bn = (N) => {
                                              du(N, { svgStyles: "margin: unset" });
                                            }, ei = (N) => {
                                              var B = Z(), X = V(B);
                                              {
                                                var Ze = (Qe) => {
                                                  lo(Qe, { svgStyles: "margin: unset" });
                                                }, ot = (Qe) => {
                                                  var ct = Z(), Jt = V(ct);
                                                  {
                                                    var Cr = (tt) => {
                                                      hg(tt, { svgStyles: "margin: unset" });
                                                    }, Je = (tt) => {
                                                      var Mt = Z(), Tn = V(Mt);
                                                      {
                                                        var ba = (Ce) => {
                                                          gg(Ce, { svgStyles: "margin: unset" });
                                                        }, _a = (Ce) => {
                                                          var qe = Z(), $e = V(qe);
                                                          {
                                                            var It = (Ge) => {
                                                              _g(Ge, { svgStyles: "margin: unset" });
                                                            }, $t = (Ge) => {
                                                              var it = Z(), dt = V(it);
                                                              {
                                                                var Fe = (Ft) => {
                                                                  Eg(Ft, { svgStyles: "margin: unset" });
                                                                }, ft = (Ft) => {
                                                                  var Nt = Z(), st = V(Nt);
                                                                  {
                                                                    var _t = (at) => {
                                                                      Cg(at, { svgStyles: "margin: unset" });
                                                                    }, en = (at) => {
                                                                      fu(at, { svgStyles: "margin: unset" });
                                                                    };
                                                                    re(
                                                                      st,
                                                                      (at) => {
                                                                        c(le).icon === "delete" ? at(_t) : at(en, !1);
                                                                      },
                                                                      !0
                                                                    );
                                                                  }
                                                                  I(Ft, Nt);
                                                                };
                                                                re(
                                                                  dt,
                                                                  (Ft) => {
                                                                    c(le).icon === "edit" ? Ft(Fe) : Ft(ft, !1);
                                                                  },
                                                                  !0
                                                                );
                                                              }
                                                              I(Ge, it);
                                                            };
                                                            re(
                                                              $e,
                                                              (Ge) => {
                                                                c(le).icon === "remove" ? Ge(It) : Ge($t, !1);
                                                              },
                                                              !0
                                                            );
                                                          }
                                                          I(Ce, qe);
                                                        };
                                                        re(
                                                          Tn,
                                                          (Ce) => {
                                                            c(le).icon === "find-in-page" ? Ce(ba) : Ce(_a, !1);
                                                          },
                                                          !0
                                                        );
                                                      }
                                                      I(tt, Mt);
                                                    };
                                                    re(
                                                      Jt,
                                                      (tt) => {
                                                        c(le).icon === "download" ? tt(Cr) : tt(Je, !1);
                                                      },
                                                      !0
                                                    );
                                                  }
                                                  I(Qe, ct);
                                                };
                                                re(
                                                  X,
                                                  (Qe) => {
                                                    c(le).icon === "cancel" ? Qe(Ze) : Qe(ot, !1);
                                                  },
                                                  !0
                                                );
                                              }
                                              I(N, B);
                                            };
                                            re(zt, (N) => {
                                              c(le).icon === "add" ? N(bn) : N(ei, !1);
                                            });
                                          }
                                          I(ne, Pt);
                                        },
                                        $$slots: { default: !0 }
                                      });
                                    }
                                  },
                                  $$slots: { default: !0 }
                                });
                              };
                              re(xe, (De) => {
                                c(le).iconComponent ? De(Se) : De(ce, !1);
                              });
                            }
                            I(ve, Ue);
                          }), I(fe, Re);
                        },
                        $$slots: { default: !0 }
                      });
                    }, ee = (Q) => {
                      Ni(Q, {
                        get numeric() {
                          return c(M).numeric;
                        },
                        get style() {
                          return c(M).cellStyle;
                        },
                        children: (fe, Le) => {
                          var Re = Z(), ve = V(Re);
                          {
                            var le = (xe) => {
                              const Se = /* @__PURE__ */ pe(() => c(M).cellRenderer);
                              var ce = Z(), De = V(ce);
                              Kr(De, () => c(Se), (bt, L) => {
                                L(bt, ut(
                                  {
                                    get row() {
                                      return c(H);
                                    },
                                    get value() {
                                      return c(H)[c(M).field];
                                    },
                                    get col() {
                                      return c(M);
                                    }
                                  },
                                  () => c(M).cellRendererProps ?? {}
                                ));
                              }), I(xe, ce);
                            }, Ue = (xe) => {
                              var Se = Z(), ce = V(Se);
                              {
                                var De = (L) => {
                                  var R = St();
                                  Ae((ne) => et(R, ne), [
                                    () => c(M).valueFormatter(c(H)[c(M).field])
                                  ]), I(L, R);
                                }, bt = (L) => {
                                  var R = St();
                                  Ae(() => et(R, c(H)[c(M).field] ?? "")), I(L, R);
                                };
                                re(
                                  ce,
                                  (L) => {
                                    c(M).valueFormatter ? L(De) : L(bt, !1);
                                  },
                                  !0
                                );
                              }
                              I(xe, Se);
                            };
                            re(ve, (xe) => {
                              c(M).cellRenderer ? xe(le) : xe(Ue, !1);
                            });
                          }
                          I(fe, Re);
                        },
                        $$slots: { default: !0 }
                      });
                    };
                    re(he, (Q) => {
                      c(M).field === "actions" ? Q(oe) : Q(ee, !1);
                    });
                  }
                  I(A, ie);
                }), I(P, K);
              },
              $$slots: { default: !0 }
            });
          }), I(U, Y);
        },
        $$slots: { default: !0 }
      }), I(b, x);
    },
    $$slots: { progress: !0, default: !0 }
  }), Oe(), o();
}
Qt(["input"]);
var sp = /* @__PURE__ */ J("<div><!></div>");
function lp(e, t) {
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
  ]), u;
  function l() {
    return u;
  }
  var s = { getElement: l }, d = sp();
  We(d, (v) => ({ class: v, ...o }), [
    () => je({
      "mdc-card": !0,
      "mdc-card--outlined": i() === "outlined",
      "smui-card--padded": a(),
      [r()]: !0
    })
  ]);
  var f = de(d);
  return se(f, () => t.children ?? $), Ee(d, (v) => u = v, () => u), Xe(d, (v, h) => q == null ? void 0 : q(v, h), n), I(e, d), Oe(s);
}
function rt(e) {
  return typeof e == "function";
}
function hu(e) {
  var t = function(r) {
    Error.call(r), r.stack = new Error().stack;
  }, n = e(t);
  return n.prototype = Object.create(Error.prototype), n.prototype.constructor = n, n;
}
var Fa = hu(function(e) {
  return function(n) {
    e(this), this.message = n ? n.length + ` errors occurred during unsubscription:
` + n.map(function(r, i) {
      return i + 1 + ") " + r.toString();
    }).join(`
  `) : "", this.name = "UnsubscriptionError", this.errors = n;
  };
});
function Ps(e, t) {
  if (e) {
    var n = e.indexOf(t);
    0 <= n && e.splice(n, 1);
  }
}
var Do = function() {
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
            for (var u = At(o), l = u.next(); !l.done; l = u.next()) {
              var s = l.value;
              s.remove(this);
            }
          } catch (p) {
            t = { error: p };
          } finally {
            try {
              l && !l.done && (n = u.return) && n.call(u);
            } finally {
              if (t) throw t.error;
            }
          }
        else
          o.remove(this);
      var d = this.initialTeardown;
      if (rt(d))
        try {
          d();
        } catch (p) {
          a = p instanceof Fa ? p.errors : [p];
        }
      var f = this._finalizers;
      if (f) {
        this._finalizers = null;
        try {
          for (var v = At(f), h = v.next(); !h.done; h = v.next()) {
            var g = h.value;
            try {
              Ms(g);
            } catch (p) {
              a = a ?? [], p instanceof Fa ? a = Or(Or([], eo(a)), eo(p.errors)) : a.push(p);
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
        throw new Fa(a);
    }
  }, e.prototype.add = function(t) {
    var n;
    if (t && t !== this)
      if (this.closed)
        Ms(t);
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
    n === t ? this._parentage = null : Array.isArray(n) && Ps(n, t);
  }, e.prototype.remove = function(t) {
    var n = this._finalizers;
    n && Ps(n, t), t instanceof e && t._removeParent(this);
  }, e.EMPTY = function() {
    var t = new e();
    return t.closed = !0, t;
  }(), e;
}();
Do.EMPTY;
function vu(e) {
  return e instanceof Do || e && "closed" in e && rt(e.remove) && rt(e.add) && rt(e.unsubscribe);
}
function Ms(e) {
  rt(e) ? e() : e.unsubscribe();
}
var up = {
  Promise: void 0
}, cp = {
  setTimeout: function(e, t) {
    for (var n = [], r = 2; r < arguments.length; r++)
      n[r - 2] = arguments[r];
    return setTimeout.apply(void 0, Or([e, t], eo(n)));
  },
  clearTimeout: function(e) {
    return clearTimeout(e);
  },
  delegate: void 0
};
function gu(e) {
  cp.setTimeout(function() {
    throw e;
  });
}
function Bs() {
}
function dp(e) {
  e();
}
var Po = function(e) {
  mt(t, e);
  function t(n) {
    var r = e.call(this) || this;
    return r.isStopped = !1, n ? (r.destination = n, vu(n) && n.add(r)) : r.destination = vp, r;
  }
  return t.create = function(n, r, i) {
    return new co(n, r, i);
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
}(Do), fp = function() {
  function e(t) {
    this.partialObserver = t;
  }
  return e.prototype.next = function(t) {
    var n = this.partialObserver;
    if (n.next)
      try {
        n.next(t);
      } catch (r) {
        Gi(r);
      }
  }, e.prototype.error = function(t) {
    var n = this.partialObserver;
    if (n.error)
      try {
        n.error(t);
      } catch (r) {
        Gi(r);
      }
    else
      Gi(t);
  }, e.prototype.complete = function() {
    var t = this.partialObserver;
    if (t.complete)
      try {
        t.complete();
      } catch (n) {
        Gi(n);
      }
  }, e;
}(), co = function(e) {
  mt(t, e);
  function t(n, r, i) {
    var a = e.call(this) || this, o;
    return rt(n) || !n ? o = {
      next: n ?? void 0,
      error: r ?? void 0,
      complete: i ?? void 0
    } : o = n, a.destination = new fp(o), a;
  }
  return t;
}(Po);
function Gi(e) {
  gu(e);
}
function hp(e) {
  throw e;
}
var vp = {
  closed: !0,
  next: Bs,
  error: hp,
  complete: Bs
}, Mo = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}();
function pu(e) {
  return e;
}
function gp(e) {
  return e.length === 0 ? pu : e.length === 1 ? e[0] : function(n) {
    return e.reduce(function(r, i) {
      return i(r);
    }, n);
  };
}
var ln = function() {
  function e(t) {
    t && (this._subscribe = t);
  }
  return e.prototype.lift = function(t) {
    var n = new e();
    return n.source = this, n.operator = t, n;
  }, e.prototype.subscribe = function(t, n, r) {
    var i = this, a = mp(t) ? t : new co(t, n, r);
    return dp(function() {
      var o = i, u = o.operator, l = o.source;
      a.add(u ? u.call(a, l) : l ? i._subscribe(a) : i._trySubscribe(a));
    }), a;
  }, e.prototype._trySubscribe = function(t) {
    try {
      return this._subscribe(t);
    } catch (n) {
      t.error(n);
    }
  }, e.prototype.forEach = function(t, n) {
    var r = this;
    return n = Us(n), new n(function(i, a) {
      var o = new co({
        next: function(u) {
          try {
            t(u);
          } catch (l) {
            a(l), o.unsubscribe();
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
  }, e.prototype[Mo] = function() {
    return this;
  }, e.prototype.pipe = function() {
    for (var t = [], n = 0; n < arguments.length; n++)
      t[n] = arguments[n];
    return gp(t)(this);
  }, e.prototype.toPromise = function(t) {
    var n = this;
    return t = Us(t), new t(function(r, i) {
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
function Us(e) {
  var t;
  return (t = e ?? up.Promise) !== null && t !== void 0 ? t : Promise;
}
function pp(e) {
  return e && rt(e.next) && rt(e.error) && rt(e.complete);
}
function mp(e) {
  return e && e instanceof Po || pp(e) && vu(e);
}
function bp(e) {
  return rt(e == null ? void 0 : e.lift);
}
function Er(e) {
  return function(t) {
    if (bp(t))
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
function Wr(e, t, n, r, i) {
  return new _p(e, t, n, r, i);
}
var _p = function(e) {
  mt(t, e);
  function t(n, r, i, a, o, u) {
    var l = e.call(this, n) || this;
    return l.onFinalize = o, l.shouldUnsubscribe = u, l._next = r ? function(s) {
      try {
        r(s);
      } catch (d) {
        n.error(d);
      }
    } : e.prototype._next, l._error = a ? function(s) {
      try {
        a(s);
      } catch (d) {
        n.error(d);
      } finally {
        this.unsubscribe();
      }
    } : e.prototype._error, l._complete = i ? function() {
      try {
        i();
      } catch (s) {
        n.error(s);
      } finally {
        this.unsubscribe();
      }
    } : e.prototype._complete, l;
  }
  return t.prototype.unsubscribe = function() {
    var n;
    if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
      var r = this.closed;
      e.prototype.unsubscribe.call(this), !r && ((n = this.onFinalize) === null || n === void 0 || n.call(this));
    }
  }, t;
}(Po), yp = new ln(function(e) {
  return e.complete();
});
function Ep(e) {
  return e && rt(e.schedule);
}
function Sp(e) {
  return e[e.length - 1];
}
function Cp(e) {
  return Ep(Sp(e)) ? e.pop() : void 0;
}
var mu = function(e) {
  return e && typeof e.length == "number" && typeof e != "function";
};
function bu(e) {
  return rt(e == null ? void 0 : e.then);
}
function _u(e) {
  return rt(e[Mo]);
}
function yu(e) {
  return Symbol.asyncIterator && rt(e == null ? void 0 : e[Symbol.asyncIterator]);
}
function Eu(e) {
  return new TypeError("You provided " + (e !== null && typeof e == "object" ? "an invalid object" : "'" + e + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
}
function Ap() {
  return typeof Symbol != "function" || !Symbol.iterator ? "@@iterator" : Symbol.iterator;
}
var Su = Ap();
function Cu(e) {
  return rt(e == null ? void 0 : e[Su]);
}
function Au(e) {
  return Td(this, arguments, function() {
    var n, r, i, a;
    return To(this, function(o) {
      switch (o.label) {
        case 0:
          n = e.getReader(), o.label = 1;
        case 1:
          o.trys.push([1, , 9, 10]), o.label = 2;
        case 2:
          return [4, Rr(n.read())];
        case 3:
          return r = o.sent(), i = r.value, a = r.done, a ? [4, Rr(void 0)] : [3, 5];
        case 4:
          return [2, o.sent()];
        case 5:
          return [4, Rr(i)];
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
function Iu(e) {
  return rt(e == null ? void 0 : e.getReader);
}
function Li(e) {
  if (e instanceof ln)
    return e;
  if (e != null) {
    if (_u(e))
      return Ip(e);
    if (mu(e))
      return xp(e);
    if (bu(e))
      return wp(e);
    if (yu(e))
      return xu(e);
    if (Cu(e))
      return Lp(e);
    if (Iu(e))
      return Tp(e);
  }
  throw Eu(e);
}
function Ip(e) {
  return new ln(function(t) {
    var n = e[Mo]();
    if (rt(n.subscribe))
      return n.subscribe(t);
    throw new TypeError("Provided object does not correctly implement Symbol.observable");
  });
}
function xp(e) {
  return new ln(function(t) {
    for (var n = 0; n < e.length && !t.closed; n++)
      t.next(e[n]);
    t.complete();
  });
}
function wp(e) {
  return new ln(function(t) {
    e.then(function(n) {
      t.closed || (t.next(n), t.complete());
    }, function(n) {
      return t.error(n);
    }).then(null, gu);
  });
}
function Lp(e) {
  return new ln(function(t) {
    var n, r;
    try {
      for (var i = At(e), a = i.next(); !a.done; a = i.next()) {
        var o = a.value;
        if (t.next(o), t.closed)
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
    t.complete();
  });
}
function xu(e) {
  return new ln(function(t) {
    Op(e, t).catch(function(n) {
      return t.error(n);
    });
  });
}
function Tp(e) {
  return xu(Au(e));
}
function Op(e, t) {
  var n, r, i, a;
  return Fl(this, void 0, void 0, function() {
    var o, u;
    return To(this, function(l) {
      switch (l.label) {
        case 0:
          l.trys.push([0, 5, 6, 11]), n = Od(e), l.label = 1;
        case 1:
          return [4, n.next()];
        case 2:
          if (r = l.sent(), !!r.done) return [3, 4];
          if (o = r.value, t.next(o), t.closed)
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
          return t.complete(), [2];
      }
    });
  });
}
function dr(e, t, n, r, i) {
  r === void 0 && (r = 0), i === void 0 && (i = !1);
  var a = t.schedule(function() {
    n(), i ? e.add(this.schedule(null, r)) : this.unsubscribe();
  }, r);
  if (e.add(a), !i)
    return a;
}
function wu(e, t) {
  return t === void 0 && (t = 0), Er(function(n, r) {
    n.subscribe(Wr(r, function(i) {
      return dr(r, e, function() {
        return r.next(i);
      }, t);
    }, function() {
      return dr(r, e, function() {
        return r.complete();
      }, t);
    }, function(i) {
      return dr(r, e, function() {
        return r.error(i);
      }, t);
    }));
  });
}
function Lu(e, t) {
  return t === void 0 && (t = 0), Er(function(n, r) {
    r.add(e.schedule(function() {
      return n.subscribe(r);
    }, t));
  });
}
function Rp(e, t) {
  return Li(e).pipe(Lu(t), wu(t));
}
function Hp(e, t) {
  return Li(e).pipe(Lu(t), wu(t));
}
function Dp(e, t) {
  return new ln(function(n) {
    var r = 0;
    return t.schedule(function() {
      r === e.length ? n.complete() : (n.next(e[r++]), n.closed || this.schedule());
    });
  });
}
function Pp(e, t) {
  return new ln(function(n) {
    var r;
    return dr(n, t, function() {
      r = e[Su](), dr(n, t, function() {
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
      return rt(r == null ? void 0 : r.return) && r.return();
    };
  });
}
function Tu(e, t) {
  if (!e)
    throw new Error("Iterable cannot be null");
  return new ln(function(n) {
    dr(n, t, function() {
      var r = e[Symbol.asyncIterator]();
      dr(n, t, function() {
        r.next().then(function(i) {
          i.done ? n.complete() : n.next(i.value);
        });
      }, 0, !0);
    });
  });
}
function Mp(e, t) {
  return Tu(Au(e), t);
}
function Bp(e, t) {
  if (e != null) {
    if (_u(e))
      return Rp(e, t);
    if (mu(e))
      return Dp(e, t);
    if (bu(e))
      return Hp(e, t);
    if (yu(e))
      return Tu(e, t);
    if (Cu(e))
      return Pp(e, t);
    if (Iu(e))
      return Mp(e, t);
  }
  throw Eu(e);
}
function Up(e, t) {
  return t ? Bp(e, t) : Li(e);
}
function Fp() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t];
  var n = Cp(e);
  return Up(e, n);
}
function vn(e, t) {
  return Er(function(n, r) {
    var i = 0;
    n.subscribe(Wr(r, function(a) {
      r.next(e.call(t, a, i++));
    }));
  });
}
function Np(e, t, n, r, i, a, o, u) {
  var l = [], s = 0, d = 0, f = !1, v = function() {
    f && !l.length && !s && t.complete();
  }, h = function(p) {
    return s < r ? g(p) : l.push(p);
  }, g = function(p) {
    s++;
    var y = !1;
    Li(n(p, d++)).subscribe(Wr(t, function(_) {
      t.next(_);
    }, function() {
      y = !0;
    }, void 0, function() {
      if (y)
        try {
          s--;
          for (var _ = function() {
            var T = l.shift();
            o || g(T);
          }; l.length && s < r; )
            _();
          v();
        } catch (T) {
          t.error(T);
        }
    }));
  };
  return e.subscribe(Wr(t, h, function() {
    f = !0, v();
  })), function() {
  };
}
function fo(e, t, n) {
  return n === void 0 && (n = 1 / 0), rt(t) ? fo(function(r, i) {
    return vn(function(a, o) {
      return t(r, a, i, o);
    })(Li(e(r, i)));
  }, n) : (typeof t == "number" && (n = t), Er(function(r, i) {
    return Np(r, i, e, n);
  }));
}
function kp(e, t) {
  return rt(t) ? fo(e, t, 1) : fo(e, 1);
}
function Fs(e) {
  return e <= 0 ? function() {
    return yp;
  } : Er(function(t, n) {
    var r = 0;
    t.subscribe(Wr(n, function(i) {
      ++r <= e && (n.next(i), e <= r && n.complete());
    }));
  });
}
function Ns(e) {
  return Er(function(t, n) {
    try {
      t.subscribe(n);
    } finally {
      n.add(e);
    }
  });
}
function ks(e, t, n) {
  var r = rt(e) || t || n ? { next: e, error: t, complete: n } : e;
  return r ? Er(function(i, a) {
    var o;
    (o = r.subscribe) === null || o === void 0 || o.call(r);
    var u = !0;
    i.subscribe(Wr(a, function(l) {
      var s;
      (s = r.next) === null || s === void 0 || s.call(r, l), a.next(l);
    }, function() {
      var l;
      u = !1, (l = r.complete) === null || l === void 0 || l.call(r), a.complete();
    }, function(l) {
      var s;
      u = !1, (s = r.error) === null || s === void 0 || s.call(r, l), a.error(l);
    }, function() {
      var l, s;
      u && ((l = r.unsubscribe) === null || l === void 0 || l.call(r)), (s = r.finalize) === null || s === void 0 || s.call(r);
    }));
  }) : pu;
}
function Ou(e) {
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
var Gp = /* @__PURE__ */ function() {
  function e(t, n, r, i) {
    i === void 0 && (i = "download_load"), this.originalEvent = t, this.xhr = n, this.request = r, this.type = i;
    var a = n.status, o = n.responseType;
    this.status = a ?? 0, this.responseType = o ?? "";
    var u = n.getAllResponseHeaders();
    this.responseHeaders = u ? u.split(`
`).reduce(function(d, f) {
      var v = f.indexOf(": ");
      return d[f.slice(0, v)] = f.slice(v + 2), d;
    }, {}) : {}, this.response = Ou(n);
    var l = t.loaded, s = t.total;
    this.loaded = l, this.total = s;
  }
  return e;
}(), ra = hu(function(e) {
  return function(n, r, i) {
    this.message = n, this.name = "AjaxError", this.xhr = r, this.request = i, this.status = r.status, this.responseType = r.responseType;
    var a;
    try {
      a = Ou(r);
    } catch {
      a = r.responseText;
    }
    this.response = a;
  };
}), jp = function() {
  function e(t, n) {
    return ra.call(this, "ajax timeout", t, n), this.name = "AjaxTimeoutError", this;
  }
  return e.prototype = Object.create(ra.prototype), e;
}();
function Vp(e, t) {
  return Sr({ method: "GET", url: e, headers: t });
}
function qp(e, t, n) {
  return Sr({ method: "POST", url: e, body: t, headers: n });
}
function zp(e, t) {
  return Sr({ method: "DELETE", url: e, headers: t });
}
function Xp(e, t, n) {
  return Sr({ method: "PUT", url: e, body: t, headers: n });
}
function Wp(e, t, n) {
  return Sr({ method: "PATCH", url: e, body: t, headers: n });
}
var Zp = vn(function(e) {
  return e.response;
});
function Yp(e, t) {
  return Zp(Sr({
    method: "GET",
    url: e,
    headers: t
  }));
}
var Sr = function() {
  var e = function(t) {
    var n = typeof t == "string" ? {
      url: t
    } : t;
    return Qp(n);
  };
  return e.get = Vp, e.post = qp, e.delete = zp, e.put = Xp, e.patch = Wp, e.getJSON = Yp, e;
}(), Kp = "upload", Gs = "download", Na = "loadstart", ka = "progress", js = "load";
function Qp(e) {
  return new ln(function(t) {
    var n, r, i = te({ async: !0, crossDomain: !1, withCredentials: !1, method: "GET", timeout: 0, responseType: "json" }, e), a = i.queryParams, o = i.body, u = i.headers, l = i.url;
    if (!l)
      throw new TypeError("url is required");
    if (a) {
      var s;
      if (l.includes("?")) {
        var d = l.split("?");
        if (2 < d.length)
          throw new TypeError("invalid url");
        s = new URLSearchParams(d[1]), new URLSearchParams(a).forEach(function(P, j) {
          return s.set(j, P);
        }), l = d[0] + "?" + s;
      } else
        s = new URLSearchParams(a), l = l + "?" + s;
    }
    var f = {};
    if (u)
      for (var v in u)
        u.hasOwnProperty(v) && (f[v.toLowerCase()] = u[v]);
    var h = i.crossDomain;
    !h && !("x-requested-with" in f) && (f["x-requested-with"] = "XMLHttpRequest");
    var g = i.withCredentials, p = i.xsrfCookieName, y = i.xsrfHeaderName;
    if ((g || !h) && p && y) {
      var _ = (r = (n = document == null ? void 0 : document.cookie.match(new RegExp("(^|;\\s*)(" + p + ")=([^;]*)"))) === null || n === void 0 ? void 0 : n.pop()) !== null && r !== void 0 ? r : "";
      _ && (f[y] = _);
    }
    var T = Jp(o, f), w = te(te({}, i), {
      url: l,
      headers: f,
      body: T
    }), E;
    E = e.createXHR ? e.createXHR() : new XMLHttpRequest();
    {
      var C = e.progressSubscriber, b = e.includeDownloadProgress, S = b === void 0 ? !1 : b, x = e.includeUploadProgress, O = x === void 0 ? !1 : x, D = function(P, j) {
        E.addEventListener(P, function() {
          var K, G = j();
          (K = C == null ? void 0 : C.error) === null || K === void 0 || K.call(C, G), t.error(G);
        });
      };
      D("timeout", function() {
        return new jp(E, w);
      }), D("abort", function() {
        return new ra("aborted", E, w);
      });
      var U = function(P, j) {
        return new Gp(j, E, w, P + "_" + j.type);
      }, W = function(P, j, K) {
        P.addEventListener(j, function(G) {
          t.next(U(K, G));
        });
      };
      O && [Na, ka, js].forEach(function(P) {
        return W(E.upload, P, Kp);
      }), C && [Na, ka].forEach(function(P) {
        return E.upload.addEventListener(P, function(j) {
          var K;
          return (K = C == null ? void 0 : C.next) === null || K === void 0 ? void 0 : K.call(C, j);
        });
      }), S && [Na, ka].forEach(function(P) {
        return W(E, P, Gs);
      });
      var Y = function(P) {
        var j = "ajax error" + (P ? " " + P : "");
        t.error(new ra(j, E, w));
      };
      E.addEventListener("error", function(P) {
        var j;
        (j = C == null ? void 0 : C.error) === null || j === void 0 || j.call(C, P), Y();
      }), E.addEventListener(js, function(P) {
        var j, K, G = E.status;
        if (G < 400) {
          (j = C == null ? void 0 : C.complete) === null || j === void 0 || j.call(C);
          var A = void 0;
          try {
            A = U(Gs, P);
          } catch (M) {
            t.error(M);
            return;
          }
          t.next(A), t.complete();
        } else
          (K = C == null ? void 0 : C.error) === null || K === void 0 || K.call(C, P), Y(G);
      });
    }
    var me = w.user, F = w.method, H = w.async;
    me ? E.open(F, l, H, me, w.password) : E.open(F, l, H), H && (E.timeout = w.timeout, E.responseType = w.responseType), "withCredentials" in E && (E.withCredentials = w.withCredentials);
    for (var v in f)
      f.hasOwnProperty(v) && E.setRequestHeader(v, f[v]);
    return T ? E.send(T) : E.send(), function() {
      E && E.readyState !== 4 && E.abort();
    };
  });
}
function Jp(e, t) {
  var n;
  if (!e || typeof e == "string" || im(e) || am(e) || em(e) || tm(e) || nm(e) || om(e))
    return e;
  if (rm(e))
    return e.buffer;
  if (typeof e == "object")
    return t["content-type"] = (n = t["content-type"]) !== null && n !== void 0 ? n : "application/json;charset=utf-8", JSON.stringify(e);
  throw new TypeError("Unknown body type");
}
var $p = Object.prototype.toString;
function Bo(e, t) {
  return $p.call(e) === "[object " + t + "]";
}
function em(e) {
  return Bo(e, "ArrayBuffer");
}
function tm(e) {
  return Bo(e, "File");
}
function nm(e) {
  return Bo(e, "Blob");
}
function rm(e) {
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView(e);
}
function im(e) {
  return typeof FormData < "u" && e instanceof FormData;
}
function am(e) {
  return typeof URLSearchParams < "u" && e instanceof URLSearchParams;
}
function om(e) {
  return typeof ReadableStream < "u" && e instanceof ReadableStream;
}
class sm {
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
const lm = new sm("https://demo.compas.energy", {}, "DSOM Versatel Production URL"), um = [lm], cm = um[0].getUrl();
class Ru {
  constructor(t = {}) {
    this.configuration = t;
  }
  get basePath() {
    return this.configuration.basePath ?? cm;
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
class dm {
  constructor(t = new Ru()) {
    this.configuration = t, this.middleware = [], this.withMiddleware = (n) => {
      const r = this.clone();
      return r.middleware = r.middleware.concat(n), r;
    }, this.withPreMiddleware = (n) => this.withMiddleware(n.map((r) => ({ pre: r }))), this.withPostMiddleware = (n) => this.withMiddleware(n.map((r) => ({ post: r }))), this.createRequestArgs = ({ url: n, query: r, method: i, headers: a, body: o, responseType: u }) => ({
      url: `${this.configuration.basePath}${n}${r && Object.keys(r).length ? `?${fm(r)}` : ""}`,
      method: i,
      headers: a,
      body: o instanceof FormData ? o : JSON.stringify(o),
      responseType: u ?? "json"
    }), this.rxjsRequest = (n) => Fp(n).pipe(
      vn((r) => (this.middleware.filter((i) => i.pre).forEach((i) => r = i.pre(r)), r)),
      kp(
        (r) => Sr(r).pipe(
          vn((i) => (this.middleware.filter((a) => a.post).forEach((a) => i = a.post(i)), i))
        )
      )
    ), this.clone = () => Object.assign(Object.create(Object.getPrototypeOf(this)), this), this.middleware = t.middleware;
  }
  request(t, n) {
    return this.rxjsRequest(this.createRequestArgs(t)).pipe(
      vn((r) => {
        const { status: i, response: a } = r;
        if (i >= 200 && i < 300)
          return (n == null ? void 0 : n.response) === "raw" ? r : a;
        throw r;
      })
    );
  }
}
const an = (e) => encodeURIComponent(`${e}`), fm = (e) => Object.entries(e).map(
  ([t, n]) => n instanceof Array ? n.map((r) => `${an(t)}=${an(r)}`).join("&") : `${an(t)}=${an(n)}`
).join("&"), En = (e, t, n) => {
  if (e == null)
    throw new Error(`Parameter "${t}" was null or undefined when calling "${n}".`);
};
class hm extends dm {
  assignResourceToLocation({ locationId: t, uuid: n }, r) {
    En(t, "locationId", "assignResourceToLocation"), En(n, "uuid", "assignResourceToLocation");
    const i = {};
    return this.request({
      url: "/api/locations/{locationId}/resources/{uuid}/assign".replace("{locationId}", an(t)).replace("{uuid}", an(n)),
      method: "POST",
      headers: i
    }, r == null ? void 0 : r.responseOpts);
  }
  createLocation({ location: t }, n) {
    En(t, "location", "createLocation");
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
    En(t, "locationId", "deleteLocation");
    const r = {};
    return this.request({
      url: "/api/locations/{locationId}".replace("{locationId}", an(t)),
      method: "DELETE",
      headers: r
    }, n == null ? void 0 : n.responseOpts);
  }
  getLocation({ locationId: t }, n) {
    En(t, "locationId", "getLocation");
    const r = {};
    return this.request({
      url: "/api/locations/{locationId}".replace("{locationId}", an(t)),
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
    En(t, "locationId", "unassignResourceFromLocation"), En(n, "uuid", "unassignResourceFromLocation");
    const i = {};
    return this.request({
      url: "/api/locations/{locationId}/resources/{uuid}/unassign".replace("{locationId}", an(t)).replace("{uuid}", an(n)),
      method: "POST",
      headers: i
    }, r == null ? void 0 : r.responseOpts);
  }
  updateLocation({ locationId: t, location: n }, r) {
    En(t, "locationId", "updateLocation"), En(n, "location", "updateLocation");
    const i = {
      "Content-Type": "application/json"
    };
    return this.request({
      url: "/api/locations/{locationId}".replace("{locationId}", an(t)),
      method: "PUT",
      headers: i,
      body: n
    }, r == null ? void 0 : r.responseOpts);
  }
}
class hi {
  constructor(t, n, r, i, a) {
    this.uuid = a, this.key = t, this.name = n, this.description = r, this.assignedResources = i;
  }
  static from(t) {
    return new hi(t.key, t.name, t.description, t.assignedResources, t.uuid);
  }
}
class Lr {
  constructor() {
    this.endpoint = "/compas-scl-data-service", this.locationsApiClient = this.createApiClient(this.endpoint);
  }
  static getInstance() {
    return Lr.instance || (Lr.instance = new Lr()), Lr.instance;
  }
  getLocations(t) {
    return this.locationsApiClient.getLocations({
      page: t == null ? void 0 : t.page,
      pageSize: t == null ? void 0 : t.pageSize
    }).pipe(
      vn((n) => n || []),
      vn((n) => n.map((r) => hi.from(r)))
    );
  }
  createLocation(t) {
    return this.locationsApiClient.createLocation({ location: t }).pipe(
      vn((n) => hi.from(n))
    );
  }
  deleteLocation(t) {
    return this.locationsApiClient.deleteLocation({ locationId: t }).pipe(vn(() => {
    }));
  }
  updateLocation(t) {
    return this.locationsApiClient.updateLocation({ locationId: t.locationId, location: t.location }).pipe(
      vn((n) => hi.from(n))
    );
  }
  createApiClient(t) {
    const n = new Ru({
      basePath: t
      // accessToken: authInfo.token,
    });
    return new hm(n);
  }
}
var Cn;
class vm {
  constructor() {
    Me(this, Cn, Ot([]));
  }
  get store() {
    return k(this, Cn);
  }
  set(t) {
    k(this, Cn).set(t);
  }
  update(t) {
    k(this, Cn).update((n) => n.map((r) => r.uuid === t.uuid ? t : r));
  }
  add(t) {
    k(this, Cn).update((n) => [...n, t]);
  }
  remove(t) {
    k(this, Cn).update((n) => n.filter((r) => r.uuid !== t));
  }
  findById(t) {
    return Bl(k(this, Cn)).find((n) => n.uuid === t);
  }
}
Cn = new WeakMap();
oh({ en: Fh, de: Sh });
var gm = /* @__PURE__ */ J("<h3> </h3>"), pm = /* @__PURE__ */ J("<!> <!>", 1), mm = /* @__PURE__ */ J("<!> <!>", 1), bm = /* @__PURE__ */ J("<div><!> <!></div>"), _m = /* @__PURE__ */ J("<h3> </h3>"), ym = /* @__PURE__ */ J("<!> <!> <!> <!>", 1), Em = /* @__PURE__ */ J("<div><!></div>"), Sm = /* @__PURE__ */ J("<!> <!>", 1), Cm = /* @__PURE__ */ J("<!> <!>", 1), Am = /* @__PURE__ */ J("<div><!> <!></div>"), Im = /* @__PURE__ */ J("<!> <!>", 1), xm = /* @__PURE__ */ J("<!> <!>", 1), wm = /* @__PURE__ */ J('<h3 style="margin-bottom: 1rem;"> </h3> <!>', 1), Lm = /* @__PURE__ */ J('<div class="location-manager-container"><!> <!> <!> <div style="margin-top: 10px; margin-bottom: 10px"><!> <!></div> <div class="table-container"><!></div></div>');
function Tm(e, t) {
  Te(t, !0);
  const n = () => In(ah, "$_", r), [r, i] = Yn(), a = Lr.getInstance(), o = new vm(), u = {
    Closed: "closed",
    Update: "update",
    Create: "create",
    Remove: "remove"
  };
  let l = /* @__PURE__ */ ye(!1), s = /* @__PURE__ */ ye(_e(u.Closed)), d = /* @__PURE__ */ ye(!1), f = /* @__PURE__ */ ye(_e(v()));
  function v() {
    return {
      uuid: void 0,
      key: "",
      name: "",
      description: "",
      assignedResources: void 0
    };
  }
  let h = /* @__PURE__ */ pe(() => [
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
      filter: !1,
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
  ]), g = /* @__PURE__ */ ye(!0);
  pt(() => {
    setTimeout(
      () => {
        z(g, !1);
      },
      1e3
    );
  });
  const p = [
    {
      icon: "edit",
      callback: (U) => y(U),
      disabled: () => !1
    },
    {
      icon: "delete",
      callback: (U) => T(U),
      disabled: () => !1
    }
  ];
  function y(U) {
    z(f, { ...U }, !0), z(d, !0), z(s, u.Update, !0);
  }
  function _() {
    z(f, { ...v() }, !0), z(d, !0), z(s, u.Create, !0);
  }
  function T(U) {
    z(f, { ...U }, !0), z(d, !0), z(s, u.Remove, !0);
  }
  function w() {
    var U;
    try {
      const W = ((U = c(f)) == null ? void 0 : U.uuid) !== void 0 && c(f).uuid !== "";
      (W ? a.updateLocation({
        locationId: c(f).uuid,
        location: c(f)
      }) : a.createLocation(c(f))).pipe(
        Fs(1),
        ks((me) => {
          W ? o.update(me) : o.add(me);
        }),
        Ns(C)
      ).subscribe();
    } catch (W) {
      console.error("Error saving location", W);
    }
  }
  function E() {
    a.deleteLocation(c(f).uuid).subscribe({
      next: () => {
        o.remove(c(f).uuid), C();
      }
    });
  }
  function C() {
    z(s, u.Closed, !0), z(d, !1), z(f, { ...v() }, !0);
  }
  function b() {
    z(l, !1), a.getLocations().pipe(
      Fs(1),
      ks((U) => {
        o.set(U);
      }),
      Ns(() => {
        z(l, !0);
      })
    ).subscribe();
  }
  pt(() => {
    b();
  });
  var S = Z(), x = V(S);
  {
    var O = (U) => {
      {
        let W = /* @__PURE__ */ pe(() => !c(g));
        Os(U, {
          get loadingDone() {
            return c(W);
          }
        });
      }
    }, D = (U) => {
      var W = Lm(), Y = de(W);
      Os(Y, {
        get loadingDone() {
          return c(l);
        }
      });
      var me = ae(Y, 2);
      {
        const A = (he) => {
          var oe = gm(), ee = de(oe);
          Ae((Q) => et(ee, Q), [
            () => {
              var Q;
              return n()("delete_location", { values: { name: (Q = c(f)) == null ? void 0 : Q.name } });
            }
          ]), I(he, oe);
        }, M = (he) => {
          var oe = bm(), ee = de(oe);
          nr(ee, {
            callback: E,
            variant: "raised",
            children: (fe, Le) => {
              var Re = pm(), ve = V(Re);
              Ts(ve, {});
              var le = ae(ve, 2);
              $n(le, {
                children: (Ue, xe) => {
                  var Se = St();
                  Ae((ce) => et(Se, ce), [() => n()("confirm")]), I(Ue, Se);
                },
                $$slots: { default: !0 }
              }), I(fe, Re);
            },
            $$slots: { default: !0 }
          });
          var Q = ae(ee, 2);
          nr(Q, {
            callback: C,
            variant: "raised",
            isAbortAction: !0,
            children: (fe, Le) => {
              var Re = mm(), ve = V(Re);
              lo(ve, {});
              var le = ae(ve, 2);
              $n(le, {
                children: (Ue, xe) => {
                  var Se = St();
                  Ae((ce) => et(Se, ce), [() => n()("cancel")]), I(Ue, Se);
                },
                $$slots: { default: !0 }
              }), I(fe, Re);
            },
            $$slots: { default: !0 }
          }), I(he, oe);
        };
        let ie = /* @__PURE__ */ pe(() => c(s) === u.Remove);
        ws(me, {
          get open() {
            return c(ie);
          },
          onClose: C,
          title: A,
          actions: M,
          $$slots: { title: !0, actions: !0 }
        });
      }
      var F = ae(me, 2);
      {
        const A = (oe) => {
          var ee = _m(), Q = de(ee);
          Ae((fe) => et(Q, fe), [
            () => {
              var fe;
              return c(s) === u.Update ? n()("location", { values: { name: (fe = c(f)) == null ? void 0 : fe.name } }) : n()("new_location");
            }
          ]), I(oe, ee);
        }, M = (oe) => {
          var ee = Em(), Q = de(ee);
          {
            var fe = (Le) => {
              var Re = ym(), ve = V(Re);
              {
                var le = (ce) => {
                  $n(ce, {
                    children: (De, bt) => {
                      var L = St();
                      Ae(() => et(L, c(f).uuid)), I(De, L);
                    },
                    $$slots: { default: !0 }
                  });
                };
                re(ve, (ce) => {
                  c(s) === u.Update && ce(le);
                });
              }
              var Ue = ae(ve, 2);
              {
                let ce = /* @__PURE__ */ pe(() => n()("name"));
                Pa(Ue, {
                  get label() {
                    return c(ce);
                  },
                  get value() {
                    return c(f).name;
                  },
                  set value(De) {
                    c(f).name = De;
                  }
                });
              }
              var xe = ae(Ue, 2);
              {
                let ce = /* @__PURE__ */ pe(() => n()("key"));
                Pa(xe, {
                  get label() {
                    return c(ce);
                  },
                  get value() {
                    return c(f).key;
                  },
                  set value(De) {
                    c(f).key = De;
                  }
                });
              }
              var Se = ae(xe, 2);
              {
                let ce = /* @__PURE__ */ pe(() => n()("description"));
                Pa(Se, {
                  get label() {
                    return c(ce);
                  },
                  get value() {
                    return c(f).description;
                  },
                  set value(De) {
                    c(f).description = De;
                  }
                });
              }
              I(Le, Re);
            };
            re(Q, (Le) => {
              c(f) && Le(fe);
            });
          }
          I(oe, ee);
        }, ie = (oe) => {
          var ee = Am(), Q = de(ee);
          nr(Q, {
            callback: w,
            variant: "raised",
            children: (Le, Re) => {
              var ve = Sm(), le = V(ve);
              Ts(le, {});
              var Ue = ae(le, 2);
              $n(Ue, {
                children: (xe, Se) => {
                  var ce = St();
                  Ae((De) => et(ce, De), [() => n()("save")]), I(xe, ce);
                },
                $$slots: { default: !0 }
              }), I(Le, ve);
            },
            $$slots: { default: !0 }
          });
          var fe = ae(Q, 2);
          nr(fe, {
            callback: C,
            variant: "raised",
            isAbortAction: !0,
            children: (Le, Re) => {
              var ve = Cm(), le = V(ve);
              lo(le, {});
              var Ue = ae(le, 2);
              $n(Ue, {
                children: (xe, Se) => {
                  var ce = St();
                  Ae((De) => et(ce, De), [() => n()("cancel")]), I(xe, ce);
                },
                $$slots: { default: !0 }
              }), I(Le, ve);
            },
            $$slots: { default: !0 }
          }), I(oe, ee);
        };
        let he = /* @__PURE__ */ pe(() => c(s) === u.Update || c(s) === u.Create);
        ws(F, {
          get open() {
            return c(he);
          },
          onClose: C,
          title: A,
          content: M,
          actions: ie,
          $$slots: { title: !0, content: !0, actions: !0 }
        });
      }
      var H = ae(F, 2), P = de(H);
      nr(P, {
        class: "button",
        callback: _,
        variant: "raised",
        children: (A, M) => {
          var ie = Im(), he = V(ie);
          du(he, {});
          var oe = ae(he, 2);
          $n(oe, {
            children: (ee, Q) => {
              var fe = St();
              Ae((Le) => et(fe, Le), [() => n()("add_location")]), I(ee, fe);
            },
            $$slots: { default: !0 }
          }), I(A, ie);
        },
        $$slots: { default: !0 }
      });
      var j = ae(P, 2);
      nr(j, {
        class: "button",
        callback: b,
        variant: "raised",
        children: (A, M) => {
          var ie = xm(), he = V(ie);
          fu(he, {});
          var oe = ae(he, 2);
          $n(oe, {
            children: (ee, Q) => {
              var fe = St();
              Ae((Le) => et(fe, Le), [() => n()("refresh")]), I(ee, fe);
            },
            $$slots: { default: !0 }
          }), I(A, ie);
        },
        $$slots: { default: !0 }
      });
      var K = ae(H, 2), G = de(K);
      lp(G, {
        style: "padding: 1rem; width: 100%; height: 100%;",
        children: (A, M) => {
          var ie = wm(), he = V(ie), oe = de(he), ee = ae(he, 2);
          {
            let Q = /* @__PURE__ */ pe(() => n()("search"));
            op(ee, {
              get columnDefs() {
                return c(h);
              },
              get store() {
                return o;
              },
              get loadingDone() {
                return c(l);
              },
              get rowActions() {
                return p;
              },
              get searchInputLabel() {
                return c(Q);
              }
            });
          }
          Ae((Q) => et(oe, Q), [() => n()("location_table")]), I(A, ie);
        },
        $$slots: { default: !0 }
      }), I(U, W);
    };
    re(x, (U) => {
      c(g) ? U(O) : U(D, !1);
    });
  }
  I(e, S), Oe(), i();
}
const Hu = "location-manager", Du = "0.0.1";
var Om = /* @__PURE__ */ J('<!> <input type="hidden" name="package-name"/> <input type="hidden" name="package-version"/>', 1);
function Rm(e, t) {
  Te(t, !0);
  let n = m(t, "dev", 3, !1);
  var r = Om(), i = V(r);
  {
    var a = (l) => {
      Tm(l, {});
    };
    re(i, (l) => {
      (t.doc || n()) && l(a);
    });
  }
  var o = ae(i, 2), u = ae(o, 2);
  Ae(() => {
    Qo(o, Hu), Qo(u, Du);
  }), I(e, r), Oe();
}
var Ur;
class Bm extends HTMLElement {
  constructor() {
    super();
    Me(this, Ur);
    ge(this, Ur, /* @__PURE__ */ ye(_e({ doc: void 0, editCount: void 0 })));
  }
  get props() {
    return c(k(this, Ur));
  }
  set props(n) {
    z(k(this, Ur), n, !0);
  }
  connectedCallback() {
    var r;
    this.attachShadow({ mode: "open" }), this.props.doc = this._doc, this.props.editCount = this.editCount, Zc(Rm, { target: this.shadowRoot, props: this.props });
    const n = Hm();
    (r = this.shadowRoot) == null || r.appendChild(n);
  }
  set doc(n) {
    this._doc = n, this.props.doc = n;
  }
  set editCount(n) {
    this._editCount = n, this.props.editCount = n;
  }
}
Ur = new WeakMap();
function Hm() {
  const e = `${Hu}-v${Du}-style`, t = Dm(), n = document.createElement("link");
  return n.rel = "stylesheet", n.type = "text/css", n.href = t, n.id = e, n;
}
function Dm() {
  const e = new URL(import.meta.url), t = e.origin, n = e.pathname.split("/").slice(0, -1).filter(Boolean).join("/");
  return [t, n, "style.css"].filter(Boolean).join("/");
}
export {
  Bm as default
};
