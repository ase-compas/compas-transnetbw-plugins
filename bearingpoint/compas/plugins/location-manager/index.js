var Mu = Object.defineProperty;
var Bo = (e) => {
  throw TypeError(e);
};
var Bu = (e, t, n) => t in e ? Mu(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Ar = (e, t, n) => Bu(e, typeof t != "symbol" ? t + "" : t, n), _a = (e, t, n) => t.has(e) || Bo("Cannot " + n);
var F = (e, t, n) => (_a(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Be = (e, t, n) => t.has(e) ? Bo("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), he = (e, t, n, r) => (_a(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), Et = (e, t, n) => (_a(e, t, "access private method"), n);
const lt = Symbol(), Uu = "http://www.w3.org/1999/xhtml", Fu = "http://www.w3.org/2000/svg", Nu = "@attach", qs = !1;
var oa = Array.isArray, ku = Array.prototype.indexOf, ho = Array.from, Wi = Object.defineProperty, Nn = Object.getOwnPropertyDescriptor, zs = Object.getOwnPropertyDescriptors, Gu = Object.prototype, ju = Array.prototype, vo = Object.getPrototypeOf, Uo = Object.isExtensible;
function ri(e) {
  return typeof e == "function";
}
const Q = () => {
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
const Dt = 2, go = 4, po = 8, vr = 16, An = 32, gr = 64, mo = 128, Zt = 256, Zi = 512, At = 1024, jt = 2048, Vn = 4096, rn = 8192, pr = 16384, bo = 32768, mr = 65536, Fo = 1 << 17, Vu = 1 << 18, Kr = 1 << 19, qu = 1 << 20, ka = 1 << 21, sa = 1 << 22, ur = 1 << 23, hn = Symbol("$state"), Zs = Symbol("legacy props"), zu = Symbol(""), wr = new class extends Error {
  constructor() {
    super(...arguments);
    Ar(this, "name", "StaleReactionError");
    Ar(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
function _o(e) {
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
function yo(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Ks(e) {
  return !yo(e, this.v);
}
let Qr = !1, ac = !1;
function oc() {
  Qr = !0;
}
let qe = null;
function Nr(e) {
  qe = e;
}
function me(e) {
  return (
    /** @type {T} */
    Qs().get(e)
  );
}
function se(e, t) {
  return Qs().set(e, t), t;
}
function we(e, t = !1, n) {
  qe = {
    p: qe,
    c: null,
    e: null,
    s: e,
    x: null,
    l: Qr && !t ? { s: null, u: null, $: [] } : null
  };
}
function Le(e) {
  var t = (
    /** @type {ComponentContext} */
    qe
  ), n = t.e;
  if (n !== null) {
    t.e = null;
    for (var r of n)
      hl(r);
  }
  return e !== void 0 && (t.x = e), qe = t.p, e ?? /** @type {T} */
  {};
}
function Ei() {
  return !Qr || qe !== null && qe.l === null;
}
function Qs(e) {
  return qe === null && _o(), qe.c ?? (qe.c = new Map(sc(qe) || void 0));
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
function jn(e) {
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
  var t = xe;
  if (t === null)
    return Ie.f |= ur, e;
  if (t.f & bo)
    kr(e, t);
  else {
    if (!(t.f & mo))
      throw !t.parent && e instanceof Error && el(e), e;
    t.b.error(e);
  }
}
function kr(e, t) {
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
  throw e instanceof Error && el(e), e;
}
function el(e) {
  const t = uc.get(e);
  t && (Wi(e, "message", {
    value: t.message
  }), Wi(e, "stack", {
    value: t.stack
  }));
}
const Ri = /* @__PURE__ */ new Set();
let ke = null, Gi = null, ht = null, Ga = /* @__PURE__ */ new Set(), dn = [], la = null, ja = !1, di = !1;
var Dr, Pr, ir, bi, Mr, Br, ar, Ur, _i, yi, Yt, Va, ji, qa;
const ra = class ra {
  constructor() {
    Be(this, Yt);
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
    Be(this, Dr, /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<() => void>}
     */
    Be(this, Pr, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    Be(this, ir, 0);
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    Be(this, bi, null);
    /**
     * Async effects inside a newly-created `<svelte:boundary>`
     * — these do not prevent the batch from committing
     * @type {Effect[]}
     */
    Be(this, Mr, []);
    /**
     * Template effects and `$effect.pre` effects, which run when
     * a batch is committed
     * @type {Effect[]}
     */
    Be(this, Br, []);
    /**
     * The same as `#render_effects`, but for `$effect` (which runs after)
     * @type {Effect[]}
     */
    Be(this, ar, []);
    /**
     * Block effects, which may need to re-run on subsequent flushes
     * in order to update internal sources (e.g. each block items)
     * @type {Effect[]}
     */
    Be(this, Ur, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Effect[]}
     */
    Be(this, _i, []);
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Effect[]}
     */
    Be(this, yi, []);
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
    dn = [], Gi = null, this.apply();
    for (const o of t)
      Et(this, Yt, Va).call(this, o);
    if (F(this, ir) === 0) {
      var n = ht;
      Et(this, Yt, qa).call(this);
      var r = F(this, Br), i = F(this, ar);
      he(this, Br, []), he(this, ar, []), he(this, Ur, []), Gi = this, ke = null, ht = n, No(r), No(i), Gi = null, (a = F(this, bi)) == null || a.resolve();
    } else
      Et(this, Yt, ji).call(this, F(this, Br)), Et(this, Yt, ji).call(this, F(this, ar)), Et(this, Yt, ji).call(this, F(this, Ur));
    ht = null;
    for (const o of F(this, Mr))
      gi(o);
    he(this, Mr, []);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Source} source
   * @param {any} value
   */
  capture(t, n) {
    F(this, Dr).has(t) || F(this, Dr).set(t, n), this.current.set(t, t.v), ht == null || ht.set(t, t.v);
  }
  activate() {
    ke = this;
  }
  deactivate() {
    ke = null, ht = null;
  }
  flush() {
    if (dn.length > 0) {
      if (this.activate(), tl(), ke !== null && ke !== this)
        return;
    } else F(this, ir) === 0 && Et(this, Yt, qa).call(this);
    this.deactivate();
    for (const t of Ga)
      if (Ga.delete(t), t(), ke !== null)
        break;
  }
  increment() {
    he(this, ir, F(this, ir) + 1);
  }
  decrement() {
    he(this, ir, F(this, ir) - 1);
    for (const t of F(this, _i))
      Ot(t, jt), fr(t);
    for (const t of F(this, yi))
      Ot(t, Vn), fr(t);
    this.flush();
  }
  /** @param {() => void} fn */
  add_callback(t) {
    F(this, Pr).add(t);
  }
  settled() {
    return (F(this, bi) ?? he(this, bi, Ws())).promise;
  }
  static ensure() {
    if (ke === null) {
      const t = ke = new ra();
      Ri.add(ke), di || ra.enqueue(() => {
        ke === t && t.flush();
      });
    }
    return ke;
  }
  /** @param {() => void} task */
  static enqueue(t) {
    jn(t);
  }
  apply() {
  }
};
Dr = new WeakMap(), Pr = new WeakMap(), ir = new WeakMap(), bi = new WeakMap(), Mr = new WeakMap(), Br = new WeakMap(), ar = new WeakMap(), Ur = new WeakMap(), _i = new WeakMap(), yi = new WeakMap(), Yt = new WeakSet(), /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 */
Va = function(t) {
  var u;
  t.f ^= At;
  for (var n = t.first; n !== null; ) {
    var r = n.f, i = (r & (An | gr)) !== 0, a = i && (r & At) !== 0, o = a || (r & rn) !== 0 || this.skipped_effects.has(n);
    if (!o && n.fn !== null) {
      i ? n.f ^= At : r & go ? F(this, ar).push(n) : r & At || (r & sa && ((u = n.b) != null && u.is_pending()) ? F(this, Mr).push(n) : va(n) && (n.f & vr && F(this, Ur).push(n), gi(n)));
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
    (n.f & jt ? F(this, _i) : F(this, yi)).push(n), Ot(n, At);
  t.length = 0;
}, /**
 * Append and remove branches to/from the DOM
 */
qa = function() {
  var t;
  for (const n of F(this, Pr))
    n();
  if (F(this, Pr).clear(), Ri.size > 1) {
    F(this, Dr).clear();
    let n = !0;
    for (const r of Ri) {
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
          nl(o, a);
        if (dn.length > 0) {
          ke = r, r.apply();
          for (const o of dn)
            Et(t = r, Yt, Va).call(t, o);
          dn = [], r.deactivate();
        }
      }
    }
    ke = null;
  }
  Ri.delete(this);
};
let Sn = ra;
function cc(e) {
  var t = di;
  di = !0;
  try {
    for (var n; ; ) {
      if (lc(), dn.length === 0 && (ke == null || ke.flush(), dn.length === 0))
        return la = null, /** @type {T} */
        n;
      tl();
    }
  } finally {
    di = t;
  }
}
function tl() {
  var e = Or;
  ja = !0;
  try {
    var t = 0;
    for (jo(!0); dn.length > 0; ) {
      var n = Sn.ensure();
      if (t++ > 1e3) {
        var r, i;
        dc();
      }
      n.process(dn), kn.clear();
    }
  } finally {
    ja = !1, jo(e), la = null;
  }
}
function dc() {
  try {
    Ku();
  } catch (e) {
    kr(e, la);
  }
}
let yn = null;
function No(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t; ) {
      var r = e[n++];
      if (!(r.f & (pr | rn)) && va(r) && (yn = [], gi(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null && r.ac === null ? pl(r) : r.fn = null), (yn == null ? void 0 : yn.length) > 0)) {
        kn.clear();
        for (const i of yn)
          gi(i);
        yn = [];
      }
    }
    yn = null;
  }
}
function nl(e, t) {
  if (e.reactions !== null)
    for (const n of e.reactions) {
      const r = n.f;
      r & Dt ? nl(
        /** @type {Derived} */
        n,
        t
      ) : r & (sa | vr) && rl(n, t) && (Ot(n, jt), fr(
        /** @type {Effect} */
        n
      ));
    }
}
function rl(e, t) {
  if (e.deps !== null) {
    for (const n of e.deps)
      if (t.includes(n) || n.f & Dt && rl(
        /** @type {Derived} */
        n,
        t
      ))
        return !0;
  }
  return !1;
}
function fr(e) {
  for (var t = la = e; t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if (ja && t === xe && n & vr)
      return;
    if (n & (gr | An)) {
      if (!(n & At)) return;
      t.f ^= At;
    }
  }
  dn.push(t);
}
function fc(e) {
  let t = 0, n = hr(0), r;
  return () => {
    Oc() && (c(n), fa(() => (t === 0 && (r = Xn(() => e(() => fi(n)))), t += 1, () => {
      jn(() => {
        t -= 1, t === 0 && (r == null || r(), r = void 0, fi(n));
      });
    })));
  };
}
var hc = mr | Kr | mo;
function vc(e, t, n) {
  new gc(e, t, n);
}
var $t, Xt, fo, ln, or, un, Wt, Mt, cn, Dn, sr, Pn, lr, Mn, ia, aa, Ht, pc, mc, Vi, qi, za;
class gc {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   */
  constructor(t, n, r) {
    Be(this, Ht);
    /** @type {Boundary | null} */
    Ar(this, "parent");
    Be(this, $t, !1);
    /** @type {TemplateNode} */
    Be(this, Xt);
    /** @type {TemplateNode | null} */
    Be(this, fo, null);
    /** @type {BoundaryProps} */
    Be(this, ln);
    /** @type {((anchor: Node) => void)} */
    Be(this, or);
    /** @type {Effect} */
    Be(this, un);
    /** @type {Effect | null} */
    Be(this, Wt, null);
    /** @type {Effect | null} */
    Be(this, Mt, null);
    /** @type {Effect | null} */
    Be(this, cn, null);
    /** @type {DocumentFragment | null} */
    Be(this, Dn, null);
    Be(this, sr, 0);
    Be(this, Pn, 0);
    Be(this, lr, !1);
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    Be(this, Mn, null);
    Be(this, ia, () => {
      F(this, Mn) && Gr(F(this, Mn), F(this, sr));
    });
    Be(this, aa, fc(() => (he(this, Mn, hr(F(this, sr))), () => {
      he(this, Mn, null);
    })));
    he(this, Xt, t), he(this, ln, n), he(this, or, r), this.parent = /** @type {Effect} */
    xe.b, he(this, $t, !!F(this, ln).pending), he(this, un, zn(() => {
      xe.b = this;
      {
        try {
          he(this, Wt, St(() => r(F(this, Xt))));
        } catch (i) {
          this.error(i);
        }
        F(this, Pn) > 0 ? Et(this, Ht, qi).call(this) : he(this, $t, !1);
      }
    }, hc));
  }
  /**
   * Returns `true` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_pending() {
    return F(this, $t) || !!this.parent && this.parent.is_pending();
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
    Et(this, Ht, za).call(this, t), he(this, sr, F(this, sr) + t), Ga.add(F(this, ia));
  }
  get_effect_pending() {
    return F(this, aa).call(this), c(
      /** @type {Source<number>} */
      F(this, Mn)
    );
  }
  /** @param {unknown} error */
  error(t) {
    var n = F(this, ln).onerror;
    let r = F(this, ln).failed;
    if (F(this, lr) || !n && !r)
      throw t;
    F(this, Wt) && (vt(F(this, Wt)), he(this, Wt, null)), F(this, Mt) && (vt(F(this, Mt)), he(this, Mt, null)), F(this, cn) && (vt(F(this, cn)), he(this, cn, null));
    var i = !1, a = !1;
    const o = () => {
      if (i) {
        rc();
        return;
      }
      i = !0, a && tc(), Sn.ensure(), he(this, sr, 0), F(this, cn) !== null && Gn(F(this, cn), () => {
        he(this, cn, null);
      }), he(this, $t, this.has_pending_snippet()), he(this, Wt, Et(this, Ht, Vi).call(this, () => (he(this, lr, !1), St(() => F(this, or).call(this, F(this, Xt)))))), F(this, Pn) > 0 ? Et(this, Ht, qi).call(this) : he(this, $t, !1);
    };
    var l = Ie;
    try {
      Bt(null), a = !0, n == null || n(t, o), a = !1;
    } catch (s) {
      kr(s, F(this, un) && F(this, un).parent);
    } finally {
      Bt(l);
    }
    r && jn(() => {
      he(this, cn, Et(this, Ht, Vi).call(this, () => {
        he(this, lr, !0);
        try {
          return St(() => {
            r(
              F(this, Xt),
              () => t,
              () => o
            );
          });
        } catch (s) {
          return kr(
            s,
            /** @type {Effect} */
            F(this, un).parent
          ), null;
        } finally {
          he(this, lr, !1);
        }
      }));
    });
  }
}
$t = new WeakMap(), Xt = new WeakMap(), fo = new WeakMap(), ln = new WeakMap(), or = new WeakMap(), un = new WeakMap(), Wt = new WeakMap(), Mt = new WeakMap(), cn = new WeakMap(), Dn = new WeakMap(), sr = new WeakMap(), Pn = new WeakMap(), lr = new WeakMap(), Mn = new WeakMap(), ia = new WeakMap(), aa = new WeakMap(), Ht = new WeakSet(), pc = function() {
  try {
    he(this, Wt, St(() => F(this, or).call(this, F(this, Xt))));
  } catch (t) {
    this.error(t);
  }
  he(this, $t, !1);
}, mc = function() {
  const t = F(this, ln).pending;
  t && (he(this, Mt, St(() => t(F(this, Xt)))), Sn.enqueue(() => {
    he(this, Wt, Et(this, Ht, Vi).call(this, () => (Sn.ensure(), St(() => F(this, or).call(this, F(this, Xt)))))), F(this, Pn) > 0 ? Et(this, Ht, qi).call(this) : (Gn(
      /** @type {Effect} */
      F(this, Mt),
      () => {
        he(this, Mt, null);
      }
    ), he(this, $t, !1));
  }));
}, /**
 * @param {() => Effect | null} fn
 */
Vi = function(t) {
  var n = xe, r = Ie, i = qe;
  vn(F(this, un)), Bt(F(this, un)), Nr(F(this, un).ctx);
  try {
    return t();
  } catch (a) {
    return $s(a), null;
  } finally {
    vn(n), Bt(r), Nr(i);
  }
}, qi = function() {
  const t = (
    /** @type {(anchor: Node) => void} */
    F(this, ln).pending
  );
  F(this, Wt) !== null && (he(this, Dn, document.createDocumentFragment()), bc(F(this, Wt), F(this, Dn))), F(this, Mt) === null && he(this, Mt, St(() => t(F(this, Xt))));
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 */
za = function(t) {
  var n;
  if (!this.has_pending_snippet()) {
    this.parent && Et(n = this.parent, Ht, za).call(n, t);
    return;
  }
  he(this, Pn, F(this, Pn) + t), F(this, Pn) === 0 && (he(this, $t, !1), F(this, Mt) && Gn(F(this, Mt), () => {
    he(this, Mt, null);
  }), F(this, Dn) && (F(this, Xt).before(F(this, Dn)), he(this, Dn, null)), jn(() => {
    Sn.ensure().flush();
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
  const r = Ei() ? ua : Eo;
  if (t.length === 0) {
    n(e.map(r));
    return;
  }
  var i = ke, a = (
    /** @type {Effect} */
    xe
  ), o = _c();
  Promise.all(t.map((l) => /* @__PURE__ */ yc(l))).then((l) => {
    o();
    try {
      n([...e.map(r), ...l]);
    } catch (s) {
      a.f & pr || kr(s, a);
    }
    i == null || i.deactivate(), Xa();
  }).catch((l) => {
    kr(l, a);
  });
}
function _c() {
  var e = xe, t = Ie, n = qe, r = ke;
  return function() {
    vn(e), Bt(t), Nr(n), r == null || r.activate();
  };
}
function Xa() {
  vn(null), Bt(null), Nr(null);
}
// @__NO_SIDE_EFFECTS__
function ua(e) {
  var t = Dt | jt, n = Ie !== null && Ie.f & Dt ? (
    /** @type {Derived} */
    Ie
  ) : null;
  return xe === null || n !== null && n.f & Zt ? t |= Zt : xe.f |= Kr, {
    ctx: qe,
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
    parent: n ?? xe,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function yc(e, t) {
  let n = (
    /** @type {Effect | null} */
    xe
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
  ), o = !Ie, l = /* @__PURE__ */ new Map();
  return Hc(() => {
    var v;
    var s = Ws();
    i = s.promise;
    try {
      Promise.resolve(e()).then(s.resolve, s.reject).then(Xa);
    } catch (h) {
      s.reject(h), Xa();
    }
    var u = (
      /** @type {Batch} */
      ke
    ), d = r.is_pending();
    o && (r.update_pending_count(1), d || (u.increment(), (v = l.get(u)) == null || v.reject(wr), l.delete(u), l.set(u, s)));
    const f = (h, g = void 0) => {
      if (d || u.activate(), g)
        g !== wr && (a.f |= ur, Gr(a, g));
      else {
        a.f & ur && (a.f ^= ur), Gr(a, h);
        for (const [p, E] of l) {
          if (l.delete(p), p === u) break;
          E.reject(wr);
        }
      }
      o && (r.update_pending_count(-1), d || u.decrement());
    };
    s.promise.then(f, (h) => f(null, h || "unknown"));
  }), da(() => {
    for (const s of l.values())
      s.reject(wr);
  }), new Promise((s) => {
    function u(d) {
      function f() {
        d === i ? s(a) : u(i);
      }
      d.then(f, f);
    }
    u(i);
  });
}
// @__NO_SIDE_EFFECTS__
function pe(e) {
  const t = /* @__PURE__ */ ua(e);
  return _l(t), t;
}
// @__NO_SIDE_EFFECTS__
function Eo(e) {
  const t = /* @__PURE__ */ ua(e);
  return t.equals = Ks, t;
}
function al(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1)
      vt(
        /** @type {Effect} */
        t[n]
      );
  }
}
function Ec(e) {
  for (var t = e.parent; t !== null; ) {
    if (!(t.f & Dt))
      return (
        /** @type {Effect} */
        t
      );
    t = t.parent;
  }
  return null;
}
function So(e) {
  var t, n = xe;
  vn(Ec(e));
  try {
    al(e), t = Cl(e);
  } finally {
    vn(n);
  }
  return t;
}
function ol(e) {
  var t = So(e);
  if (e.equals(t) || (e.v = t, e.wv = El()), !br)
    if (ht !== null)
      ht.set(e, e.v);
    else {
      var n = (Bn || e.f & Zt) && e.deps !== null ? Vn : At;
      Ot(e, n);
    }
}
const kn = /* @__PURE__ */ new Map();
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
  return t || (r.equals = Ks), Qr && n && qe !== null && qe.l !== null && ((i = qe.l).s ?? (i.s = [])).push(r), r;
}
function z(e, t, n = !1) {
  Ie !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!nn || Ie.f & Fo) && Ei() && Ie.f & (Dt | vr | sa | Fo) && !(Tt != null && Tt.includes(e)) && ec();
  let r = n ? be(t) : t;
  return Gr(e, r);
}
function Gr(e, t) {
  if (!e.equals(t)) {
    var n = e.v;
    br ? kn.set(e, t) : kn.set(e, n), e.v = t;
    var r = Sn.ensure();
    r.capture(e, n), e.f & Dt && (e.f & jt && So(
      /** @type {Derived} */
      e
    ), Ot(e, e.f & Zt ? Vn : At)), e.wv = El(), ll(e, jt), Ei() && xe !== null && xe.f & At && !(xe.f & (An | gr)) && (zt === null ? Mc([e]) : zt.push(e));
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
      var o = n[a], l = o.f;
      if (!(!r && o === xe)) {
        var s = (l & jt) === 0;
        s && Ot(o, t), l & Dt ? ll(
          /** @type {Derived} */
          o,
          Vn
        ) : s && (l & vr && yn !== null && yn.push(
          /** @type {Effect} */
          o
        ), fr(
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
  if (t !== Gu && t !== ju)
    return e;
  var n = /* @__PURE__ */ new Map(), r = oa(e), i = /* @__PURE__ */ ye(0), a = cr, o = (l) => {
    if (cr === a)
      return l();
    var s = Ie, u = cr;
    Bt(null), qo(a);
    var d = l();
    return Bt(s), qo(u), d;
  };
  return r && n.set("length", /* @__PURE__ */ ye(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(l, s, u) {
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && Ju();
        var d = n.get(s);
        return d === void 0 ? d = o(() => {
          var f = /* @__PURE__ */ ye(u.value);
          return n.set(s, f), f;
        }) : z(d, u.value, !0), !0;
      },
      deleteProperty(l, s) {
        var u = n.get(s);
        if (u === void 0) {
          if (s in l) {
            const d = o(() => /* @__PURE__ */ ye(lt));
            n.set(s, d), fi(i);
          }
        } else
          z(u, lt), fi(i);
        return !0;
      },
      get(l, s, u) {
        var h;
        if (s === hn)
          return e;
        var d = n.get(s), f = s in l;
        if (d === void 0 && (!f || (h = Nn(l, s)) != null && h.writable) && (d = o(() => {
          var g = be(f ? l[s] : lt), p = /* @__PURE__ */ ye(g);
          return p;
        }), n.set(s, d)), d !== void 0) {
          var v = c(d);
          return v === lt ? void 0 : v;
        }
        return Reflect.get(l, s, u);
      },
      getOwnPropertyDescriptor(l, s) {
        var u = Reflect.getOwnPropertyDescriptor(l, s);
        if (u && "value" in u) {
          var d = n.get(s);
          d && (u.value = c(d));
        } else if (u === void 0) {
          var f = n.get(s), v = f == null ? void 0 : f.v;
          if (f !== void 0 && v !== lt)
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
        var u = n.get(s), d = u !== void 0 && u.v !== lt || Reflect.has(l, s);
        if (u !== void 0 || xe !== null && (!d || (v = Nn(l, s)) != null && v.writable)) {
          u === void 0 && (u = o(() => {
            var h = d ? be(l[s]) : lt, g = /* @__PURE__ */ ye(h);
            return g;
          }), n.set(s, u));
          var f = c(u);
          if (f === lt)
            return !1;
        }
        return d;
      },
      set(l, s, u, d) {
        var x;
        var f = n.get(s), v = s in l;
        if (r && s === "length")
          for (var h = u; h < /** @type {Source<number>} */
          f.v; h += 1) {
            var g = n.get(h + "");
            g !== void 0 ? z(g, lt) : h in l && (g = o(() => /* @__PURE__ */ ye(lt)), n.set(h + "", g));
          }
        if (f === void 0)
          (!v || (x = Nn(l, s)) != null && x.writable) && (f = o(() => /* @__PURE__ */ ye(void 0)), z(f, be(u)), n.set(s, f));
        else {
          v = f.v !== lt;
          var p = o(() => be(u));
          z(f, p);
        }
        var E = Reflect.getOwnPropertyDescriptor(l, s);
        if (E != null && E.set && E.set.call(d, u), !v) {
          if (r && typeof s == "string") {
            var y = (
              /** @type {Source<number>} */
              n.get("length")
            ), L = Number(s);
            Number.isInteger(L) && L >= y.v && z(y, L + 1);
          }
          fi(i);
        }
        return !0;
      },
      ownKeys(l) {
        c(i);
        var s = Reflect.ownKeys(l).filter((f) => {
          var v = n.get(f);
          return v === void 0 || v.v !== lt;
        });
        for (var [u, d] of n)
          d.v !== lt && !(u in l) && s.push(u);
        return s;
      },
      setPrototypeOf() {
        $u();
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
function Sc(e, t) {
  return Object.is(ko(e), ko(t));
}
var Yi, ul, cl, dl, fl;
function Cc() {
  if (Yi === void 0) {
    Yi = window, ul = document, cl = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    dl = Nn(t, "firstChild").get, fl = Nn(t, "nextSibling").get, Uo(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), Uo(n) && (n.__t = void 0);
  }
}
function qn(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function jr(e) {
  return dl.call(e);
}
// @__NO_SIDE_EFFECTS__
function Si(e) {
  return fl.call(e);
}
function ce(e, t) {
  return /* @__PURE__ */ jr(e);
}
function V(e, t = !1) {
  {
    var n = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ jr(
        /** @type {Node} */
        e
      )
    );
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ Si(n) : n;
  }
}
function ie(e, t = 1, n = !1) {
  let r = e;
  for (; t--; )
    r = /** @type {TemplateNode} */
    /* @__PURE__ */ Si(r);
  return r;
}
function Ac(e) {
  e.textContent = "";
}
function Co() {
  return !1;
}
function Ic(e, t) {
  if (t) {
    const n = document.body;
    e.autofocus = !0, jn(() => {
      document.activeElement === n && e.focus();
    });
  }
}
let Go = !1;
function xc() {
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
  var t = Ie, n = xe;
  Bt(null), vn(null);
  try {
    return e();
  } finally {
    Bt(t), vn(n);
  }
}
function wc(e, t, n, r = n) {
  e.addEventListener(t, () => ca(n));
  const i = e.__on_r;
  i ? e.__on_r = () => {
    i(), r(!0);
  } : e.__on_r = () => r(!0), xc();
}
function Lc(e) {
  xe === null && Ie === null && Yu(), Ie !== null && Ie.f & Zt && xe === null && Zu(), br && Wu();
}
function Tc(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function In(e, t, n, r = !0) {
  var i = xe;
  i !== null && i.f & rn && (e |= rn);
  var a = {
    ctx: qe,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | jt,
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
      gi(a), a.f |= bo;
    } catch (s) {
      throw vt(a), s;
    }
  else t !== null && fr(a);
  if (r) {
    var o = a;
    if (n && o.deps === null && o.teardown === null && o.nodes_start === null && o.first === o.last && // either `null`, or a singular child
    !(o.f & Kr) && (o = o.first), o !== null && (o.parent = i, i !== null && Tc(o, i), Ie !== null && Ie.f & Dt && !(e & gr))) {
      var l = (
        /** @type {Derived} */
        Ie
      );
      (l.effects ?? (l.effects = [])).push(o);
    }
  }
  return a;
}
function Oc() {
  return Ie !== null && !nn;
}
function da(e) {
  const t = In(po, null, !1);
  return Ot(t, At), t.teardown = e, t;
}
function Ue(e) {
  Lc();
  var t = (
    /** @type {Effect} */
    xe.f
  ), n = !Ie && (t & An) !== 0 && (t & bo) === 0;
  if (n) {
    var r = (
      /** @type {ComponentContext} */
      qe
    );
    (r.e ?? (r.e = [])).push(e);
  } else
    return hl(e);
}
function hl(e) {
  return In(go | qu, e, !1);
}
function Rc(e) {
  Sn.ensure();
  const t = In(gr | Kr, e, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? Gn(t, () => {
      vt(t), r(void 0);
    }) : (vt(t), r(void 0));
  });
}
function Ci(e) {
  return In(go, e, !1);
}
function Hc(e) {
  return In(sa | Kr, e, !0);
}
function fa(e, t = 0) {
  return In(po | t, e, !0);
}
function Ae(e, t = [], n = []) {
  il(t, n, (r) => {
    In(po, () => e(...r.map(c)), !0);
  });
}
function zn(e, t = 0) {
  var n = In(vr | t, e, !0);
  return n;
}
function St(e, t = !0) {
  return In(An | Kr, e, !0, t);
}
function vl(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = br, r = Ie;
    Vo(!0), Bt(null);
    try {
      t.call(null);
    } finally {
      Vo(n), Bt(r);
    }
  }
}
function gl(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    const i = n.ac;
    i !== null && ca(() => {
      i.abort(wr);
    });
    var r = n.next;
    n.f & gr ? n.parent = null : vt(n, t), n = r;
  }
}
function Dc(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    t.f & An || vt(t), t = n;
  }
}
function vt(e, t = !0) {
  var n = !1;
  (t || e.f & Vu) && e.nodes_start !== null && e.nodes_end !== null && (Pc(
    e.nodes_start,
    /** @type {TemplateNode} */
    e.nodes_end
  ), n = !0), gl(e, t && !n), Ki(e, 0), Ot(e, pr);
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
function Gn(e, t) {
  var n = [];
  Ao(e, n, !0), ml(n, () => {
    vt(e), t && t();
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
function Ao(e, t, n) {
  if (!(e.f & rn)) {
    if (e.f ^= rn, e.transitions !== null)
      for (const o of e.transitions)
        (o.is_global || n) && t.push(o);
    for (var r = e.first; r !== null; ) {
      var i = r.next, a = (r.f & mr) !== 0 || (r.f & An) !== 0;
      Ao(r, t, a ? n : !1), r = i;
    }
  }
}
function ha(e) {
  bl(e, !0);
}
function bl(e, t) {
  if (e.f & rn) {
    e.f ^= rn, e.f & At || (Ot(e, jt), fr(e));
    for (var n = e.first; n !== null; ) {
      var r = n.next, i = (n.f & mr) !== 0 || (n.f & An) !== 0;
      bl(n, i ? t : !1), n = r;
    }
    if (e.transitions !== null)
      for (const a of e.transitions)
        (a.is_global || t) && a.in();
  }
}
let Or = !1;
function jo(e) {
  Or = e;
}
let br = !1;
function Vo(e) {
  br = e;
}
let Ie = null, nn = !1;
function Bt(e) {
  Ie = e;
}
let xe = null;
function vn(e) {
  xe = e;
}
let Tt = null;
function _l(e) {
  Ie !== null && (Tt === null ? Tt = [e] : Tt.push(e));
}
let Lt = null, kt = 0, zt = null;
function Mc(e) {
  zt = e;
}
let yl = 1, vi = 0, cr = vi;
function qo(e) {
  cr = e;
}
let Bn = !1;
function El() {
  return ++yl;
}
function va(e) {
  var f;
  var t = e.f;
  if (t & jt)
    return !0;
  if (t & Vn) {
    var n = e.deps, r = (t & Zt) !== 0;
    if (n !== null) {
      var i, a, o = (t & Zi) !== 0, l = r && xe !== null && !Bn, s = n.length;
      if ((o || l) && (xe === null || !(xe.f & pr))) {
        var u = (
          /** @type {Derived} */
          e
        ), d = u.parent;
        for (i = 0; i < s; i++)
          a = n[i], (o || !((f = a == null ? void 0 : a.reactions) != null && f.includes(u))) && (a.reactions ?? (a.reactions = [])).push(u);
        o && (u.f ^= Zi), l && d !== null && !(d.f & Zt) && (u.f ^= Zt);
      }
      for (i = 0; i < s; i++)
        if (a = n[i], va(
          /** @type {Derived} */
          a
        ) && ol(
          /** @type {Derived} */
          a
        ), a.wv > e.wv)
          return !0;
    }
    (!r || xe !== null && !Bn) && Ot(e, At);
  }
  return !1;
}
function Sl(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null && !(Tt != null && Tt.includes(e)))
    for (var i = 0; i < r.length; i++) {
      var a = r[i];
      a.f & Dt ? Sl(
        /** @type {Derived} */
        a,
        t,
        !1
      ) : t === a && (n ? Ot(a, jt) : a.f & At && Ot(a, Vn), fr(
        /** @type {Effect} */
        a
      ));
    }
}
function Cl(e) {
  var p;
  var t = Lt, n = kt, r = zt, i = Ie, a = Bn, o = Tt, l = qe, s = nn, u = cr, d = e.f;
  Lt = /** @type {null | Value[]} */
  null, kt = 0, zt = null, Bn = (d & Zt) !== 0 && (nn || !Or || Ie === null), Ie = d & (An | gr) ? null : e, Tt = null, Nr(e.ctx), nn = !1, cr = ++vi, e.ac !== null && (ca(() => {
    e.ac.abort(wr);
  }), e.ac = null);
  try {
    e.f |= ka;
    var f = (
      /** @type {Function} */
      e.fn
    ), v = f(), h = e.deps;
    if (Lt !== null) {
      var g;
      if (Ki(e, kt), h !== null && kt > 0)
        for (h.length = kt + Lt.length, g = 0; g < Lt.length; g++)
          h[kt + g] = Lt[g];
      else
        e.deps = h = Lt;
      if (!Bn || // Deriveds that already have reactions can cleanup, so we still add them as reactions
      d & Dt && /** @type {import('#client').Derived} */
      e.reactions !== null)
        for (g = kt; g < h.length; g++)
          ((p = h[g]).reactions ?? (p.reactions = [])).push(e);
    } else h !== null && kt < h.length && (Ki(e, kt), h.length = kt);
    if (Ei() && zt !== null && !nn && h !== null && !(e.f & (Dt | Vn | jt)))
      for (g = 0; g < /** @type {Source[]} */
      zt.length; g++)
        Sl(
          zt[g],
          /** @type {Effect} */
          e
        );
    return i !== null && i !== e && (vi++, zt !== null && (r === null ? r = zt : r.push(.../** @type {Source[]} */
    zt))), e.f & ur && (e.f ^= ur), v;
  } catch (E) {
    return $s(E);
  } finally {
    e.f ^= ka, Lt = t, kt = n, zt = r, Ie = i, Bn = a, Tt = o, Nr(l), nn = s, cr = u;
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
  n === null && t.f & Dt && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Lt === null || !Lt.includes(t)) && (Ot(t, Vn), t.f & (Zt | Zi) || (t.f ^= Zi), al(
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
      Bc(e, n[r]);
}
function gi(e) {
  var t = e.f;
  if (!(t & pr)) {
    Ot(e, At);
    var n = xe, r = Or;
    xe = e, Or = !0;
    try {
      t & vr ? Dc(e) : gl(e), vl(e);
      var i = Cl(e);
      e.teardown = typeof i == "function" ? i : null, e.wv = yl;
      var a;
      qs && ac && e.f & jt && e.deps;
    } finally {
      Or = r, xe = n;
    }
  }
}
async function Al() {
  await Promise.resolve(), cc();
}
function c(e) {
  var t = e.f, n = (t & Dt) !== 0;
  if (Ie !== null && !nn) {
    var r = xe !== null && (xe.f & pr) !== 0;
    if (!r && !(Tt != null && Tt.includes(e))) {
      var i = Ie.deps;
      if (Ie.f & ka)
        e.rv < vi && (e.rv = vi, Lt === null && i !== null && i[kt] === e ? kt++ : Lt === null ? Lt = [e] : (!Bn || !Lt.includes(e)) && Lt.push(e));
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
    ), l = o.parent;
    l !== null && !(l.f & Zt) && (o.f ^= Zt);
  }
  if (br) {
    if (kn.has(e))
      return kn.get(e);
    if (n) {
      o = /** @type {Derived} */
      e;
      var s = o.v;
      return (!(o.f & At) && o.reactions !== null || Il(o)) && (s = So(o)), kn.set(o, s), s;
    }
  } else if (n) {
    if (o = /** @type {Derived} */
    e, ht != null && ht.has(o))
      return ht.get(o);
    va(o) && ol(o);
  }
  if (ht != null && ht.has(e))
    return ht.get(e);
  if (e.f & ur)
    throw e.v;
  return e.v;
}
function Il(e) {
  if (e.v === lt) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (kn.has(t) || t.f & Dt && Il(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function Xn(e) {
  var t = nn;
  try {
    return nn = !0, e();
  } finally {
    nn = t;
  }
}
const Uc = -7169;
function Ot(e, t) {
  e.f = e.f & Uc | t;
}
function Fc(e) {
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
const xl = /* @__PURE__ */ new Set(), Za = /* @__PURE__ */ new Set();
function Io(e, t, n, r = {}) {
  function i(a) {
    if (r.capture || ui.call(t, a), !a.cancelBubble)
      return ca(() => n == null ? void 0 : n.call(this, a));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? jn(() => {
    t.addEventListener(e, i, r);
  }) : t.addEventListener(e, i, r), i;
}
function Nc(e, t, n, r = {}) {
  var i = Io(t, e, n, r);
  return () => {
    e.removeEventListener(t, i, r);
  };
}
function Lr(e, t, n, r, i) {
  var a = { capture: r, passive: i }, o = Io(e, t, n, a);
  (t === document.body || // @ts-ignore
  t === window || // @ts-ignore
  t === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  t instanceof HTMLMediaElement) && da(() => {
    t.removeEventListener(e, o, a);
  });
}
function Wn(e) {
  for (var t = 0; t < e.length; t++)
    xl.add(e[t]);
  for (var n of Za)
    n(e);
}
let zo = null;
function ui(e) {
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
    var d = Ie, f = xe;
    Bt(null), vn(null);
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
      e.__root = t, delete e.currentTarget, Bt(d), vn(f);
    }
  }
}
function wl(e) {
  var t = document.createElement("template");
  return t.innerHTML = e.replaceAll("<!>", "<!---->"), t.content;
}
function Vr(e, t) {
  var n = (
    /** @type {Effect} */
    xe
  );
  n.nodes_start === null && (n.nodes_start = e, n.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function J(e, t) {
  var n = (t & 1) !== 0, r = (t & 2) !== 0, i, a = !e.startsWith("<!>");
  return () => {
    i === void 0 && (i = wl(a ? e : "<!>" + e), n || (i = /** @type {Node} */
    /* @__PURE__ */ jr(i)));
    var o = (
      /** @type {TemplateNode} */
      r || cl ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (n) {
      var l = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ jr(o)
      ), s = (
        /** @type {TemplateNode} */
        o.lastChild
      );
      Vr(l, s);
    } else
      Vr(o, o);
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
      ), l = (
        /** @type {Element} */
        /* @__PURE__ */ jr(o)
      );
      a = /** @type {Element} */
      /* @__PURE__ */ jr(l);
    }
    var s = (
      /** @type {TemplateNode} */
      a.cloneNode(!0)
    );
    return Vr(s, s), s;
  };
}
// @__NO_SIDE_EFFECTS__
function Vt(e, t) {
  return /* @__PURE__ */ kc(e, t, "svg");
}
function Ct(e = "") {
  {
    var t = qn(e + "");
    return Vr(t, t), t;
  }
}
function W() {
  var e = document.createDocumentFragment(), t = document.createComment(""), n = qn();
  return e.append(t, n), Vr(t, n), e;
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
function nt(e, t) {
  var n = t == null ? "" : typeof t == "object" ? t + "" : t;
  n !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = n, e.nodeValue = n + "");
}
function Zc(e, t) {
  return Yc(e, t);
}
const Ir = /* @__PURE__ */ new Map();
function Yc(e, { target: t, anchor: n, props: r = {}, events: i, context: a, intro: o = !0 }) {
  Cc();
  var l = /* @__PURE__ */ new Set(), s = (f) => {
    for (var v = 0; v < f.length; v++) {
      var h = f[v];
      if (!l.has(h)) {
        l.add(h);
        var g = Wc(h);
        t.addEventListener(h, ui, { passive: g });
        var p = Ir.get(h);
        p === void 0 ? (document.addEventListener(h, ui, { passive: g }), Ir.set(h, 1)) : Ir.set(h, p + 1);
      }
    }
  };
  s(ho(xl)), Za.add(s);
  var u = void 0, d = Rc(() => {
    var f = n ?? t.appendChild(qn());
    return vc(
      /** @type {TemplateNode} */
      f,
      {
        pending: () => {
        }
      },
      (v) => {
        if (a) {
          we({});
          var h = (
            /** @type {ComponentContext} */
            qe
          );
          h.c = a;
        }
        i && (r.$$events = i), u = e(v, r) || {}, a && Le();
      }
    ), () => {
      var g;
      for (var v of l) {
        t.removeEventListener(v, ui);
        var h = (
          /** @type {number} */
          Ir.get(v)
        );
        --h === 0 ? (document.removeEventListener(v, ui), Ir.delete(v)) : Ir.set(v, h);
      }
      Za.delete(s), f !== n && ((g = f.parentNode) == null || g.removeChild(f));
    };
  });
  return Kc.set(u, d), u;
}
let Kc = /* @__PURE__ */ new WeakMap();
function oe(e, t, ...n) {
  var r = e, i = Q, a;
  zn(() => {
    i !== (i = t()) && (a && (vt(a), a = null), a = St(() => (
      /** @type {SnippetFn} */
      i(r, ...n)
    )));
  }, mr);
}
function gt(e) {
  qe === null && _o(), Qr && qe.l !== null ? Qc(qe).m.push(e) : Ue(() => {
    const t = Xn(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function _r(e) {
  qe === null && _o(), gt(() => () => Xn(e));
}
function Qc(e) {
  var t = (
    /** @type {ComponentContextLegacy} */
    e.l
  );
  return t.u ?? (t.u = { a: [], b: [], m: [] });
}
function re(e, t, n = !1) {
  var r = e, i = null, a = null, o = lt, l = n ? mr : 0, s = !1;
  const u = (h, g = !0) => {
    s = !0, v(g, h);
  };
  var d = null;
  function f() {
    d !== null && (d.lastChild.remove(), r.before(d), d = null);
    var h = o ? i : a, g = o ? a : i;
    h && ha(h), g && Gn(g, () => {
      o ? a = null : i = null;
    });
  }
  const v = (h, g) => {
    if (o !== (o = h)) {
      var p = Co(), E = r;
      if (p && (d = document.createDocumentFragment(), d.append(E = qn())), o ? i ?? (i = g && St(() => g(E))) : a ?? (a = g && St(() => g(E))), p) {
        var y = (
          /** @type {Batch} */
          ke
        ), L = o ? i : a, x = o ? a : i;
        L && y.skipped_effects.delete(L), x && y.skipped_effects.add(x), y.add_callback(f);
      } else
        f();
    }
  };
  zn(() => {
    s = !1, t(u), s || v(null, null);
  }, l);
}
function ya(e, t) {
  return t;
}
function Jc(e, t, n) {
  for (var r = e.items, i = [], a = t.length, o = 0; o < a; o++)
    Ao(t[o].e, i, !0);
  var l = a > 0 && i.length === 0 && n !== null;
  if (l) {
    var s = (
      /** @type {Element} */
      /** @type {Element} */
      n.parentNode
    );
    Ac(s), s.append(
      /** @type {Element} */
      n
    ), r.clear(), sn(e, t[0].prev, t[a - 1].next);
  }
  ml(i, () => {
    for (var u = 0; u < a; u++) {
      var d = t[u];
      l || (r.delete(d.k), sn(e, d.prev, d.next)), vt(d.e, !l);
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
    o = u.appendChild(qn());
  }
  var d = null, f = !1, v = /* @__PURE__ */ new Map(), h = /* @__PURE__ */ Eo(() => {
    var y = n();
    return oa(y) ? y : y == null ? [] : ho(y);
  }), g, p;
  function E() {
    $c(
      p,
      g,
      l,
      v,
      o,
      i,
      t,
      r,
      n
    ), a !== null && (g.length === 0 ? d ? ha(d) : d = St(() => a(o)) : d !== null && Gn(d, () => {
      d = null;
    }));
  }
  zn(() => {
    p ?? (p = /** @type {Effect} */
    xe), g = /** @type {V[]} */
    c(h);
    var y = g.length;
    if (!(f && y === 0)) {
      f = y === 0;
      var L, x, m, S;
      if (Co()) {
        var b = /* @__PURE__ */ new Set(), C = (
          /** @type {Batch} */
          ke
        );
        for (x = 0; x < y; x += 1) {
          m = g[x], S = r(m, x);
          var w = l.items.get(S) ?? v.get(S);
          w ? t & 3 && Ll(w, m, x, t) : (L = Tl(
            null,
            l,
            null,
            null,
            m,
            S,
            x,
            i,
            t,
            n,
            !0
          ), v.set(S, L)), b.add(S);
        }
        for (const [H, M] of l.items)
          b.has(H) || C.skipped_effects.add(M.e);
        C.add_callback(E);
      } else
        E();
      c(h);
    }
  });
}
function $c(e, t, n, r, i, a, o, l, s) {
  var K, U, A, j;
  var u = (o & 8) !== 0, d = (o & 3) !== 0, f = t.length, v = n.items, h = n.first, g = h, p, E = null, y, L = [], x = [], m, S, b, C;
  if (u)
    for (C = 0; C < f; C += 1)
      m = t[C], S = l(m, C), b = v.get(S), b !== void 0 && ((K = b.a) == null || K.measure(), (y ?? (y = /* @__PURE__ */ new Set())).add(b));
  for (C = 0; C < f; C += 1) {
    if (m = t[C], S = l(m, C), b = v.get(S), b === void 0) {
      var w = r.get(S);
      if (w !== void 0) {
        r.delete(S), v.set(S, w);
        var H = E ? E.next : g;
        sn(n, E, w), sn(n, w, H), Ea(w, H, i), E = w;
      } else {
        var M = g ? (
          /** @type {TemplateNode} */
          g.e.nodes_start
        ) : i;
        E = Tl(
          M,
          n,
          E,
          E === null ? n.first : E.next,
          m,
          S,
          C,
          a,
          o,
          s
        );
      }
      v.set(S, E), L = [], x = [], g = E.next;
      continue;
    }
    if (d && Ll(b, m, C, o), b.e.f & rn && (ha(b.e), u && ((U = b.a) == null || U.unfix(), (y ?? (y = /* @__PURE__ */ new Set())).delete(b))), b !== g) {
      if (p !== void 0 && p.has(b)) {
        if (L.length < x.length) {
          var G = x[0], Z;
          E = G.prev;
          var te = L[0], ve = L[L.length - 1];
          for (Z = 0; Z < L.length; Z += 1)
            Ea(L[Z], G, i);
          for (Z = 0; Z < x.length; Z += 1)
            p.delete(x[Z]);
          sn(n, te.prev, ve.next), sn(n, E, te), sn(n, ve, G), g = G, E = ve, C -= 1, L = [], x = [];
        } else
          p.delete(b), Ea(b, g, i), sn(n, b.prev, b.next), sn(n, b, E === null ? n.first : E.next), sn(n, E, b), E = b;
        continue;
      }
      for (L = [], x = []; g !== null && g.k !== S; )
        g.e.f & rn || (p ?? (p = /* @__PURE__ */ new Set())).add(g), x.push(g), g = g.next;
      if (g === null)
        continue;
      b = g;
    }
    L.push(b), E = b, g = b.next;
  }
  if (g !== null || p !== void 0) {
    for (var R = p === void 0 ? [] : ho(p); g !== null; )
      g.e.f & rn || R.push(g), g = g.next;
    var D = R.length;
    if (D > 0) {
      var O = o & 4 && f === 0 ? i : null;
      if (u) {
        for (C = 0; C < D; C += 1)
          (A = R[C].a) == null || A.measure();
        for (C = 0; C < D; C += 1)
          (j = R[C].a) == null || j.fix();
      }
      Jc(n, R, O);
    }
  }
  u && jn(() => {
    var ge;
    if (y !== void 0)
      for (b of y)
        (ge = b.a) == null || ge.apply();
  }), e.first = n.first && n.first.e, e.last = E && E.e;
  for (var N of r.values())
    vt(N.e);
  r.clear();
}
function Ll(e, t, n, r) {
  r & 1 && Gr(e.v, t), r & 2 ? Gr(
    /** @type {Value<number>} */
    e.i,
    n
  ) : e.i = n;
}
function Tl(e, t, n, r, i, a, o, l, s, u, d) {
  var f = (s & 1) !== 0, v = (s & 16) === 0, h = f ? v ? /* @__PURE__ */ sl(i, !1, !1) : hr(i) : i, g = s & 2 ? hr(o) : o, p = {
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
      E.append(e = qn());
    }
    return p.e = St(() => l(
      /** @type {Node} */
      e,
      h,
      g,
      u
    ), ic), p.e.prev = n && n.e, p.e.next = r && r.e, n === null ? d || (t.first = p) : (n.next = p, n.e.next = p.e), r !== null && (r.prev = p, r.e.prev = p.e), p;
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
      /* @__PURE__ */ Si(a)
    );
    i.before(a), a = o;
  }
}
function sn(e, t, n) {
  t === null ? e.first = n : (t.next = n, t.e.next = n && n.e), n !== null && (n.prev = t, n.e.prev = t && t.e);
}
function Jr(e, t, n) {
  var r = e, i, a, o = null, l = null;
  function s() {
    a && (Gn(a), a = null), o && (o.lastChild.remove(), r.before(o), o = null), a = l, l = null;
  }
  zn(() => {
    if (i !== (i = t())) {
      var u = Co();
      if (i) {
        var d = r;
        u && (o = document.createDocumentFragment(), o.append(d = qn()), a && ke.skipped_effects.add(a)), l = St(() => n(d, i));
      }
      u ? ke.add_callback(s) : s();
    }
  }, mr);
}
function Xo(e, t, n, r, i, a) {
  var o, l, s = null, u = (
    /** @type {TemplateNode} */
    e
  ), d;
  zn(() => {
    const f = t() || null;
    var v = f === "svg" ? Fu : null;
    f !== o && (d && (f === null ? Gn(d, () => {
      d = null, l = null;
    }) : f === l ? ha(d) : vt(d)), f && f !== l && (d = St(() => {
      if (s = v ? document.createElementNS(v, f) : document.createElement(f), Vr(s, s), r) {
        var h = (
          /** @type {TemplateNode} */
          s.appendChild(qn())
        );
        r(s, h);
      }
      xe.nodes_end = s, u.before(s);
    })), o = f, o && (l = o));
  }, mr);
}
function ze(e, t, n) {
  Ci(() => {
    var r = Xn(() => t(e, n == null ? void 0 : n()) || {});
    if (n && (r != null && r.update)) {
      var i = !1, a = (
        /** @type {any} */
        {}
      );
      fa(() => {
        var o = n();
        Fc(o), i && yo(a, o) && (a = o, r.update(o));
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
  zn(() => {
    n !== (n = t()) && (r && (vt(r), r = null), n && (r = St(() => {
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
const Wo = [...` 	
\r\f \v\uFEFF`];
function nd(e, t, n) {
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
function rd(e, t) {
  if (t) {
    var n = "", r, i;
    if (Array.isArray(t) ? (r = t[0], i = t[1]) : r = t, e) {
      e = String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var a = !1, o = 0, l = !1, s = [];
      r && s.push(...Object.keys(r).map(Sa)), i && s.push(...Object.keys(i).map(Sa));
      var u = 0, d = -1;
      const p = e.length;
      for (var f = 0; f < p; f++) {
        var v = e[f];
        if (l ? v === "/" && e[f - 1] === "*" && (l = !1) : a ? a === v && (a = !1) : v === "/" && e[f + 1] === "*" ? l = !0 : v === '"' || v === "'" ? a = v : v === "(" ? o++ : v === ")" && o--, !l && a === !1 && o === 0) {
          if (v === ":" && d === -1)
            d = f;
          else if (v === ";" || f === p - 1) {
            if (d !== -1) {
              var h = Sa(e.substring(u, d).trim());
              if (!s.includes(h)) {
                v !== ";" && f++;
                var g = e.substring(u, f).trim();
                n += " " + g + ";";
              }
            }
            u = f + 1, d = -1;
          }
        }
      }
    }
    return r && (n += Zo(r)), i && (n += Zo(i, !0)), n = n.trim(), n === "" ? null : n;
  }
  return e == null ? null : String(e);
}
function Hl(e, t, n, r, i, a) {
  var o = e.__className;
  if (o !== n || o === void 0) {
    var l = nd(n, r, a);
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
function Pt(e, t, n, r) {
  var i = e.__style;
  if (i !== t) {
    var a = rd(t, r);
    a == null ? e.removeAttribute("style") : e.style.cssText = a, e.__style = t;
  } else r && (Array.isArray(r) ? (Ca(e, n == null ? void 0 : n[0], r[0]), Ca(e, n == null ? void 0 : n[1], r[1], "important")) : Ca(e, n, r));
  return r;
}
function Ya(e, t, n = !1) {
  if (e.multiple) {
    if (t == null)
      return;
    if (!oa(t))
      return nc();
    for (var r of e.options)
      r.selected = t.includes(Yo(r));
    return;
  }
  for (r of e.options) {
    var i = Yo(r);
    if (Sc(i, t)) {
      r.selected = !0;
      return;
    }
  }
  (!n || t !== void 0) && (e.selectedIndex = -1);
}
function id(e) {
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
const ii = Symbol("class"), ai = Symbol("style"), Dl = Symbol("is custom element"), Pl = Symbol("is html");
function Ko(e, t) {
  var n = xo(e);
  n.value === (n.value = // treat null and undefined the same for the initial value
  t ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  e.value === t && (t !== 0 || e.nodeName !== "PROGRESS") || (e.value = t ?? "");
}
function ad(e, t) {
  t ? e.hasAttribute("selected") || e.setAttribute("selected", "") : e.removeAttribute("selected");
}
function qr(e, t, n, r) {
  var i = xo(e);
  i[t] !== (i[t] = n) && (t === "loading" && (e[zu] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && Ml(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function od(e, t, n, r, i = !1, a = !1) {
  var o = xo(e), l = o[Dl], s = !o[Pl], u = t || {}, d = e.tagName === "OPTION";
  for (var f in t)
    f in n || (n[f] = null);
  n.class ? n.class = Rl(n.class) : n[ii] && (n.class = null), n[ai] && (n.style ?? (n.style = null));
  var v = Ml(e);
  for (const x in n) {
    let m = n[x];
    if (d && x === "value" && m == null) {
      e.value = e.__value = "", u[x] = m;
      continue;
    }
    if (x === "class") {
      var h = e.namespaceURI === "http://www.w3.org/1999/xhtml";
      Hl(e, h, m, r, t == null ? void 0 : t[ii], n[ii]), u[x] = m, u[ii] = n[ii];
      continue;
    }
    if (x === "style") {
      Pt(e, m, t == null ? void 0 : t[ai], n[ai]), u[x] = m, u[ai] = n[ai];
      continue;
    }
    var g = u[x];
    if (!(m === g && !(m === void 0 && e.hasAttribute(x)))) {
      u[x] = m;
      var p = x[0] + x[1];
      if (p !== "$$")
        if (p === "on") {
          const S = {}, b = "$$" + x;
          let C = x.slice(2);
          var E = Vc(C);
          if (Gc(C) && (C = C.slice(0, -7), S.capture = !0), !E && g) {
            if (m != null) continue;
            e.removeEventListener(C, u[b], S), u[b] = null;
          }
          if (m != null)
            if (E)
              e[`__${C}`] = m, Wn([C]);
            else {
              let w = function(H) {
                u[x].call(this, H);
              };
              u[b] = Io(C, e, w, S);
            }
          else E && (e[`__${C}`] = void 0);
        } else if (x === "style")
          qr(e, x, m);
        else if (x === "autofocus")
          Ic(
            /** @type {HTMLElement} */
            e,
            !!m
          );
        else if (!l && (x === "__value" || x === "value" && m != null))
          e.value = e.__value = m;
        else if (x === "selected" && d)
          ad(
            /** @type {HTMLOptionElement} */
            e,
            m
          );
        else {
          var y = x;
          s || (y = zc(y));
          var L = y === "defaultValue" || y === "defaultChecked";
          if (m == null && !l && !L)
            if (o[x] = null, y === "value" || y === "checked") {
              let S = (
                /** @type {HTMLInputElement} */
                e
              );
              const b = t === void 0;
              if (y === "value") {
                let C = S.defaultValue;
                S.removeAttribute(y), S.defaultValue = C, S.value = S.__value = b ? C : null;
              } else {
                let C = S.defaultChecked;
                S.removeAttribute(y), S.defaultChecked = C, S.checked = b ? C : !1;
              }
            } else
              e.removeAttribute(x);
          else L || v.includes(y) && (l || typeof m != "string") ? (e[y] = m, y in o && (o[y] = lt)) : typeof m != "function" && qr(e, y, m);
        }
    }
  }
  return u;
}
function Xe(e, t, n = [], r = [], i, a = !1, o = !1) {
  il(n, r, (l) => {
    var s = void 0, u = {}, d = e.nodeName === "SELECT", f = !1;
    if (zn(() => {
      var h = t(...l.map(c)), g = od(
        e,
        s,
        h,
        i,
        a,
        o
      );
      f && d && "value" in h && Ya(
        /** @type {HTMLSelectElement} */
        e,
        h.value
      );
      for (let E of Object.getOwnPropertySymbols(u))
        h[E] || vt(u[E]);
      for (let E of Object.getOwnPropertySymbols(h)) {
        var p = h[E];
        E.description === Nu && (!s || p !== s[E]) && (u[E] && vt(u[E]), u[E] = St(() => ed(e, () => p))), g[E] = p;
      }
      s = g;
    }), d) {
      var v = (
        /** @type {HTMLSelectElement} */
        e
      );
      Ci(() => {
        Ya(
          v,
          /** @type {Record<string | symbol, any>} */
          s.value,
          !0
        ), id(v);
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
      [Dl]: e.nodeName.includes("-"),
      [Pl]: e.namespaceURI === Uu
    })
  );
}
var Qo = /* @__PURE__ */ new Map();
function Ml(e) {
  var t = e.getAttribute("is") || e.nodeName, n = Qo.get(t);
  if (n) return n;
  Qo.set(t, n = []);
  for (var r, i = e, a = Element.prototype; a !== i; ) {
    r = zs(i);
    for (var o in r)
      r[o].set && n.push(o);
    i = vo(i);
  }
  return n;
}
function Ka(e, t, n = t) {
  var r = /* @__PURE__ */ new WeakSet();
  wc(e, "input", async (i) => {
    var a = i ? e.defaultValue : e.value;
    if (a = Aa(e) ? Ia(a) : a, n(a), ke !== null && r.add(ke), await Al(), a !== (a = t())) {
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
  Xn(t) == null && e.value && (n(Aa(e) ? Ia(e.value) : e.value), ke !== null && r.add(ke)), fa(() => {
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
function Se(e = {}, t, n, r) {
  return Ci(() => {
    var i, a;
    return fa(() => {
      i = a, a = [], Xn(() => {
        e !== n(...a) && (t(e, ...a), i && Jo(n(...i), e) && t(null, ...i));
      });
    }), () => {
      jn(() => {
        a && Jo(n(...a), e) && t(null, ...a);
      });
    };
  }), e;
}
function wo(e, t, n) {
  if (e == null)
    return t(void 0), n && n(void 0), Q;
  const r = Xn(
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
    subscribe: Rt(e, t).subscribe
  };
}
function Rt(e, t = Q) {
  let n = null;
  const r = /* @__PURE__ */ new Set();
  function i(l) {
    if (yo(e, l) && (e = l, n)) {
      const s = !xr.length;
      for (const u of r)
        u[1](), xr.push(u, e);
      if (s) {
        for (let u = 0; u < xr.length; u += 2)
          xr[u][0](xr[u + 1]);
        xr.length = 0;
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
function $r(e, t, n) {
  const r = !Array.isArray(e), i = r ? [e] : e;
  if (!i.every(Boolean))
    throw new Error("derived() expects stores as input, got a falsy value");
  const a = t.length < 2;
  return sd(n, (o, l) => {
    let s = !1;
    const u = [];
    let d = 0, f = Q;
    const v = () => {
      if (d)
        return;
      f();
      const g = t(r ? u[0] : u, o, l);
      a ? o(g) : f = typeof g == "function" ? g : Q;
    }, h = i.map(
      (g, p) => wo(
        g,
        (E) => {
          u[p] = E, d &= ~(1 << p), s && v();
        },
        () => {
          d |= 1 << p;
        }
      )
    );
    return s = !0, v(), function() {
      Xs(h), f(), s = !1;
    };
  });
}
function Bl(e) {
  let t;
  return wo(e, (n) => t = n)(), t;
}
let Di = !1, Qa = Symbol();
function Cn(e, t, n) {
  const r = n[t] ?? (n[t] = {
    store: null,
    source: /* @__PURE__ */ sl(void 0),
    unsubscribe: Q
  });
  if (r.store !== e && !(Qa in n))
    if (r.unsubscribe(), r.store = e ?? null, e == null)
      r.source.v = void 0, r.unsubscribe = Q;
    else {
      var i = !0;
      r.unsubscribe = wo(e, (a) => {
        i ? r.source.v = a : z(r.source, a);
      }), i = !1;
    }
  return e && Qa in n ? Bl(e) : c(r.source);
}
function Un(e, t) {
  return e.set(t), t;
}
function Zn() {
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
      if (ri(r) && (r = r()), typeof r == "object" && r !== null && t in r) return r[t];
    }
  },
  set(e, t, n) {
    let r = e.props.length;
    for (; r--; ) {
      let i = e.props[r];
      ri(i) && (i = i());
      const a = Nn(i, t);
      if (a && a.set)
        return a.set(n), !0;
    }
    return !1;
  },
  getOwnPropertyDescriptor(e, t) {
    let n = e.props.length;
    for (; n--; ) {
      let r = e.props[n];
      if (ri(r) && (r = r()), typeof r == "object" && r !== null && t in r) {
        const i = Nn(r, t);
        return i && !i.configurable && (i.configurable = !0), i;
      }
    }
  },
  has(e, t) {
    if (t === hn || t === Zs) return !1;
    for (let n of e.props)
      if (ri(n) && (n = n()), n != null && t in n) return !0;
    return !1;
  },
  ownKeys(e) {
    const t = [];
    for (let n of e.props)
      if (ri(n) && (n = n()), !!n) {
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
function _(e, t, n, r) {
  var x;
  var i = !Qr || (n & 2) !== 0, a = (n & 8) !== 0, o = (n & 16) !== 0, l = (
    /** @type {V} */
    r
  ), s = !0, u = () => (s && (s = !1, l = o ? Xn(
    /** @type {() => V} */
    r
  ) : (
    /** @type {V} */
    r
  )), l), d;
  if (a) {
    var f = hn in e || Zs in e;
    d = ((x = Nn(e, t)) == null ? void 0 : x.set) ?? (f && t in e ? (m) => e[t] = m : void 0);
  }
  var v, h = !1;
  a ? [v, h] = ld(() => (
    /** @type {V} */
    e[t]
  )) : v = /** @type {V} */
  e[t], v === void 0 && r !== void 0 && (v = u(), d && (i && Qu(), d(v)));
  var g;
  if (i ? g = () => {
    var m = (
      /** @type {V} */
      e[t]
    );
    return m === void 0 ? u() : (s = !0, m);
  } : g = () => {
    var m = (
      /** @type {V} */
      e[t]
    );
    return m !== void 0 && (l = /** @type {V} */
    void 0), m === void 0 ? l : m;
  }, i && !(n & 4))
    return g;
  if (d) {
    var p = e.$$legacy;
    return (
      /** @type {() => V} */
      function(m, S) {
        return arguments.length > 0 ? ((!i || !S || p || h) && d(S ? g() : m), m) : g();
      }
    );
  }
  var E = !1, y = (n & 1 ? ua : Eo)(() => (E = !1, g()));
  a && c(y);
  var L = (
    /** @type {Effect} */
    xe
  );
  return (
    /** @type {() => V} */
    function(m, S) {
      if (arguments.length > 0) {
        const b = S ? c(y) : i && a ? be(m) : m;
        return z(y, b), E = !0, l !== void 0 && (l = b), m;
      }
      return br && E || L.f & pr ? y.v : c(y);
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
  return t.clone !== !1 && t.isMergeableObject(e) ? zr(_d(e), e, t) : e;
}
function yd(e, t, n) {
  return e.concat(t).map(function(r) {
    return pi(r, n);
  });
}
function Ed(e, t) {
  if (!t.customMerge)
    return zr;
  var n = t.customMerge(e);
  return typeof n == "function" ? n : zr;
}
function Sd(e) {
  return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e).filter(function(t) {
    return Object.propertyIsEnumerable.call(e, t);
  }) : [];
}
function $o(e) {
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
  return n.isMergeableObject(e) && $o(e).forEach(function(i) {
    r[i] = pi(e[i], n);
  }), $o(t).forEach(function(i) {
    Cd(e, i) || (Ul(e, i) && n.isMergeableObject(t[i]) ? r[i] = Ed(i, n)(e[i], t[i], n) : r[i] = pi(t[i], n));
  }), r;
}
function zr(e, t, n) {
  n = n || {}, n.arrayMerge = n.arrayMerge || yd, n.isMergeableObject = n.isMergeableObject || hd, n.cloneUnlessOtherwiseSpecified = pi;
  var r = Array.isArray(t), i = Array.isArray(e), a = r === i;
  return a ? r ? n.arrayMerge(e, t, n) : Ad(e, t, n) : pi(t, n);
}
zr.all = function(t, n) {
  if (!Array.isArray(t))
    throw new Error("first argument should be an array");
  return t.reduce(function(r, i) {
    return zr(r, i, n);
  }, {});
};
var Id = zr, xd = Id;
const wd = /* @__PURE__ */ fd(xd);
var Ja = function(e, t) {
  return Ja = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, r) {
    n.__proto__ = r;
  } || function(n, r) {
    for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (n[i] = r[i]);
  }, Ja(e, t);
};
function pt(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  Ja(e, t);
  function n() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
}
var ee = function() {
  return ee = Object.assign || function(t) {
    for (var n, r = 1, i = arguments.length; r < i; r++) {
      n = arguments[r];
      for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a]);
    }
    return t;
  }, ee.apply(this, arguments);
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
    function l(d) {
      try {
        u(r.next(d));
      } catch (f) {
        o(f);
      }
    }
    function s(d) {
      try {
        u(r.throw(d));
      } catch (f) {
        o(f);
      }
    }
    function u(d) {
      d.done ? a(d.value) : i(d.value).then(l, s);
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
    return function(d) {
      return s([u, d]);
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
    } catch (d) {
      u = [6, d], i = 0;
    } finally {
      r = a = 0;
    }
    if (u[0] & 5) throw u[1];
    return { value: u[0] ? u[1] : void 0, done: !0 };
  }
}
function It(e) {
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
function Rr(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, i = t.length, a; r < i; r++)
    (a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
  return e.concat(a || Array.prototype.slice.call(t));
}
function Hr(e) {
  return this instanceof Hr ? (this.v = e, this) : new Hr(e);
}
function Td(e, t, n) {
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
    h.value instanceof Hr ? Promise.resolve(h.value.v).then(d, f) : v(a[0][2], h);
  }
  function d(h) {
    s("next", h);
  }
  function f(h) {
    s("throw", h);
  }
  function v(h, g) {
    h(g), a.shift(), a.length && s(a[0][0], a[0][1]);
  }
}
function Od(e) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var t = e[Symbol.asyncIterator], n;
  return t ? t.call(e) : (e = typeof It == "function" ? It(e) : e[Symbol.iterator](), n = {}, r("next"), r("throw"), r("return"), n[Symbol.asyncIterator] = function() {
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
}, wa = {
  variadic: Pd
}, He;
(function(e) {
  e[e.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", e[e.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", e[e.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", e[e.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", e[e.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", e[e.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", e[e.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", e[e.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", e[e.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", e[e.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", e[e.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", e[e.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", e[e.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", e[e.INVALID_TAG = 23] = "INVALID_TAG", e[e.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", e[e.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", e[e.UNCLOSED_TAG = 27] = "UNCLOSED_TAG";
})(He || (He = {}));
var Ke;
(function(e) {
  e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag";
})(Ke || (Ke = {}));
var Xr;
(function(e) {
  e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime";
})(Xr || (Xr = {}));
function es(e) {
  return e.type === Ke.literal;
}
function Fd(e) {
  return e.type === Ke.argument;
}
function Gl(e) {
  return e.type === Ke.number;
}
function jl(e) {
  return e.type === Ke.date;
}
function Vl(e) {
  return e.type === Ke.time;
}
function ql(e) {
  return e.type === Ke.select;
}
function zl(e) {
  return e.type === Ke.plural;
}
function Nd(e) {
  return e.type === Ke.pound;
}
function Xl(e) {
  return e.type === Ke.tag;
}
function Wl(e) {
  return !!(e && typeof e == "object" && e.type === Xr.number);
}
function eo(e) {
  return !!(e && typeof e == "object" && e.type === Xr.dateTime);
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
    for (var l = o[0], s = o.slice(1), u = 0, d = s; u < d.length; u++) {
      var f = d[u];
      if (f.length === 0)
        throw new Error("Invalid number skeleton");
    }
    n.push({ stem: l, options: s });
  }
  return n;
}
function qd(e) {
  return e.replace(/^(.*?)-/, "");
}
var ts = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g, Yl = /^(@+)?(\+|#+)?[rs]?$/g, zd = /(\*)(0+)|(#+)(0+)|(0+)/g, Kl = /^(0+)$/;
function ns(e) {
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
function rs(e) {
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
        t = ee(ee(ee({}, t), { notation: "scientific" }), i.options.reduce(function(s, u) {
          return ee(ee({}, s), rs(u));
        }, {}));
        continue;
      case "engineering":
        t = ee(ee(ee({}, t), { notation: "engineering" }), i.options.reduce(function(s, u) {
          return ee(ee({}, s), rs(u));
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
        i.options[0].replace(zd, function(s, u, d, f, v, h) {
          if (u)
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
    if (ts.test(i.stem)) {
      if (i.options.length > 1)
        throw new RangeError("Fraction-precision stems only accept a single optional option");
      i.stem.replace(ts, function(s, u, d, f, v, h) {
        return d === "*" ? t.minimumFractionDigits = u.length : f && f[0] === "#" ? t.maximumFractionDigits = f.length : v && h ? (t.minimumFractionDigits = v.length, t.maximumFractionDigits = v.length + h.length) : (t.minimumFractionDigits = u.length, t.maximumFractionDigits = u.length), "";
      });
      var a = i.options[0];
      a === "w" ? t = ee(ee({}, t), { trailingZeroDisplay: "stripIfInteger" }) : a && (t = ee(ee({}, t), ns(a)));
      continue;
    }
    if (Yl.test(i.stem)) {
      t = ee(ee({}, t), ns(i.stem));
      continue;
    }
    var o = Ql(i.stem);
    o && (t = ee(ee({}, t), o));
    var l = Xd(i.stem);
    l && (t = ee(ee({}, t), l));
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
      var o = 1 + (a & 1), l = a < 2 ? 1 : 3 + (a >> 1), s = "a", u = Yd(t);
      for ((u == "H" || u == "k") && (l = 0); l-- > 0; )
        n += s;
      for (; o-- > 0; )
        n = u + n;
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
var La, Kd = new RegExp("^".concat(Zl.source, "*")), Qd = new RegExp("".concat(Zl.source, "*$"));
function De(e, t) {
  return { start: e, end: t };
}
var Jd = !!String.prototype.startsWith && "_a".startsWith("a", 1), $d = !!String.fromCodePoint, ef = !!Object.fromEntries, tf = !!String.prototype.codePointAt, nf = !!String.prototype.trimStart, rf = !!String.prototype.trimEnd, af = !!Number.isSafeInteger, of = af ? Number.isSafeInteger : function(e) {
  return typeof e == "number" && isFinite(e) && Math.floor(e) === e && Math.abs(e) <= 9007199254740991;
}, to = !0;
try {
  var sf = $l("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  to = ((La = sf.exec("a")) === null || La === void 0 ? void 0 : La[0]) === "a";
} catch {
  to = !1;
}
var is = Jd ? (
  // Native
  function(t, n, r) {
    return t.startsWith(n, r);
  }
) : (
  // For IE11
  function(t, n, r) {
    return t.slice(r, r + n.length) === n;
  }
), no = $d ? String.fromCodePoint : (
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
  ef ? Object.fromEntries : (
    // Ponyfill
    function(t) {
      for (var n = {}, r = 0, i = t; r < i.length; r++) {
        var a = i[r], o = a[0], l = a[1];
        n[o] = l;
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
var ro;
if (to) {
  var os = $l("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  ro = function(t, n) {
    var r;
    os.lastIndex = n;
    var i = os.exec(t);
    return (r = i[1]) !== null && r !== void 0 ? r : "";
  };
} else
  ro = function(t, n) {
    for (var r = []; ; ) {
      var i = Jl(t, n);
      if (i === void 0 || eu(i) || hf(i))
        break;
      r.push(i), n += i >= 65536 ? 2 : 1;
    }
    return no.apply(void 0, r);
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
            var l = this.clonePosition();
            this.bump(), i.push({
              type: Ke.pound,
              location: De(l, this.clonePosition())
            });
          } else if (a === 60 && !this.ignoreTag && this.peek() === 47) {
            if (r)
              break;
            return this.error(He.UNMATCHED_CLOSING_TAG, De(this.clonePosition(), this.clonePosition()));
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
            location: De(r, this.clonePosition())
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
            return this.error(He.INVALID_TAG, De(l, this.clonePosition()));
          var s = this.clonePosition(), u = this.parseTagName();
          return i !== u ? this.error(He.UNMATCHED_CLOSING_TAG, De(s, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
            val: {
              type: Ke.tag,
              value: i,
              children: o,
              location: De(r, this.clonePosition())
            },
            err: null
          } : this.error(He.INVALID_TAG, De(l, this.clonePosition())));
        } else
          return this.error(He.UNCLOSED_TAG, De(r, this.clonePosition()));
      } else
        return this.error(He.INVALID_TAG, De(r, this.clonePosition()));
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
        var l = this.tryParseLeftAngleBracket();
        if (l) {
          i += l;
          continue;
        }
        break;
      }
      var s = De(r, this.clonePosition());
      return {
        val: { type: Ke.literal, value: i, location: s },
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
      return no.apply(void 0, n);
    }, e.prototype.tryParseUnquoted = function(t, n) {
      if (this.isEOF())
        return null;
      var r = this.char();
      return r === 60 || r === 123 || r === 35 && (n === "plural" || n === "selectordinal") || r === 125 && t > 0 ? null : (this.bump(), no(r));
    }, e.prototype.parseArgument = function(t, n) {
      var r = this.clonePosition();
      if (this.bump(), this.bumpSpace(), this.isEOF())
        return this.error(He.EXPECT_ARGUMENT_CLOSING_BRACE, De(r, this.clonePosition()));
      if (this.char() === 125)
        return this.bump(), this.error(He.EMPTY_ARGUMENT, De(r, this.clonePosition()));
      var i = this.parseIdentifierIfPossible().value;
      if (!i)
        return this.error(He.MALFORMED_ARGUMENT, De(r, this.clonePosition()));
      if (this.bumpSpace(), this.isEOF())
        return this.error(He.EXPECT_ARGUMENT_CLOSING_BRACE, De(r, this.clonePosition()));
      switch (this.char()) {
        case 125:
          return this.bump(), {
            val: {
              type: Ke.argument,
              // value does not include the opening and closing braces.
              value: i,
              location: De(r, this.clonePosition())
            },
            err: null
          };
        case 44:
          return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(He.EXPECT_ARGUMENT_CLOSING_BRACE, De(r, this.clonePosition())) : this.parseArgumentOptions(t, n, i, r);
        default:
          return this.error(He.MALFORMED_ARGUMENT, De(r, this.clonePosition()));
      }
    }, e.prototype.parseIdentifierIfPossible = function() {
      var t = this.clonePosition(), n = this.offset(), r = ro(this.message, n), i = n + r.length;
      this.bumpTo(i);
      var a = this.clonePosition(), o = De(t, a);
      return { value: r, location: o };
    }, e.prototype.parseArgumentOptions = function(t, n, r, i) {
      var a, o = this.clonePosition(), l = this.parseIdentifierIfPossible().value, s = this.clonePosition();
      switch (l) {
        case "":
          return this.error(He.EXPECT_ARGUMENT_TYPE, De(o, s));
        case "number":
        case "date":
        case "time": {
          this.bumpSpace();
          var u = null;
          if (this.bumpIf(",")) {
            this.bumpSpace();
            var d = this.clonePosition(), f = this.parseSimpleArgStyleIfPossible();
            if (f.err)
              return f;
            var v = uf(f.val);
            if (v.length === 0)
              return this.error(He.EXPECT_ARGUMENT_STYLE, De(this.clonePosition(), this.clonePosition()));
            var h = De(d, this.clonePosition());
            u = { style: v, styleLocation: h };
          }
          var g = this.tryParseArgumentClose(i);
          if (g.err)
            return g;
          var p = De(i, this.clonePosition());
          if (u && is(u == null ? void 0 : u.style, "::", 0)) {
            var E = lf(u.style.slice(2));
            if (l === "number") {
              var f = this.parseNumberSkeletonFromString(E, u.styleLocation);
              return f.err ? f : {
                val: { type: Ke.number, value: r, location: p, style: f.val },
                err: null
              };
            } else {
              if (E.length === 0)
                return this.error(He.EXPECT_DATE_TIME_SKELETON, p);
              var y = E;
              this.locale && (y = Zd(E, this.locale));
              var v = {
                type: Xr.dateTime,
                pattern: y,
                location: u.styleLocation,
                parsedOptions: this.shouldParseSkeletons ? Gd(y) : {}
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
            return this.error(He.EXPECT_SELECT_ARGUMENT_OPTIONS, De(x, ee({}, x)));
          this.bumpSpace();
          var m = this.parseIdentifierIfPossible(), S = 0;
          if (l !== "select" && m.value === "offset") {
            if (!this.bumpIf(":"))
              return this.error(He.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, De(this.clonePosition(), this.clonePosition()));
            this.bumpSpace();
            var f = this.tryParseDecimalInteger(He.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, He.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);
            if (f.err)
              return f;
            this.bumpSpace(), m = this.parseIdentifierIfPossible(), S = f.val;
          }
          var b = this.tryParsePluralOrSelectOptions(t, l, n, m);
          if (b.err)
            return b;
          var g = this.tryParseArgumentClose(i);
          if (g.err)
            return g;
          var C = De(i, this.clonePosition());
          return l === "select" ? {
            val: {
              type: Ke.select,
              value: r,
              options: as(b.val),
              location: C
            },
            err: null
          } : {
            val: {
              type: Ke.plural,
              value: r,
              options: as(b.val),
              offset: S,
              pluralType: l === "plural" ? "cardinal" : "ordinal",
              location: C
            },
            err: null
          };
        }
        default:
          return this.error(He.INVALID_ARGUMENT_TYPE, De(o, s));
      }
    }, e.prototype.tryParseArgumentClose = function(t) {
      return this.isEOF() || this.char() !== 125 ? this.error(He.EXPECT_ARGUMENT_CLOSING_BRACE, De(t, this.clonePosition())) : (this.bump(), { val: !0, err: null });
    }, e.prototype.parseSimpleArgStyleIfPossible = function() {
      for (var t = 0, n = this.clonePosition(); !this.isEOF(); ) {
        var r = this.char();
        switch (r) {
          case 39: {
            this.bump();
            var i = this.clonePosition();
            if (!this.bumpUntil("'"))
              return this.error(He.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, De(i, this.clonePosition()));
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
          type: Xr.number,
          tokens: r,
          location: n,
          parsedOptions: this.shouldParseSkeletons ? Wd(r) : {}
        },
        err: null
      };
    }, e.prototype.tryParsePluralOrSelectOptions = function(t, n, r, i) {
      for (var a, o = !1, l = [], s = /* @__PURE__ */ new Set(), u = i.value, d = i.location; ; ) {
        if (u.length === 0) {
          var f = this.clonePosition();
          if (n !== "select" && this.bumpIf("=")) {
            var v = this.tryParseDecimalInteger(He.EXPECT_PLURAL_ARGUMENT_SELECTOR, He.INVALID_PLURAL_ARGUMENT_SELECTOR);
            if (v.err)
              return v;
            d = De(f, this.clonePosition()), u = this.message.slice(f.offset, this.offset());
          } else
            break;
        }
        if (s.has(u))
          return this.error(n === "select" ? He.DUPLICATE_SELECT_ARGUMENT_SELECTOR : He.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, d);
        u === "other" && (o = !0), this.bumpSpace();
        var h = this.clonePosition();
        if (!this.bumpIf("{"))
          return this.error(n === "select" ? He.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : He.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, De(this.clonePosition(), this.clonePosition()));
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
            location: De(h, this.clonePosition())
          }
        ]), s.add(u), this.bumpSpace(), a = this.parseIdentifierIfPossible(), u = a.value, d = a.location;
      }
      return l.length === 0 ? this.error(n === "select" ? He.EXPECT_SELECT_ARGUMENT_SELECTOR : He.EXPECT_PLURAL_ARGUMENT_SELECTOR, De(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !o ? this.error(He.MISSING_OTHER_CLAUSE, De(this.clonePosition(), this.clonePosition())) : { val: l, err: null };
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
      var s = De(i, this.clonePosition());
      return a ? (o *= r, of(o) ? { val: o, err: null } : this.error(n, s)) : this.error(t, s);
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
function io(e) {
  return e >= 97 && e <= 122 || e >= 65 && e <= 90;
}
function df(e) {
  return io(e) || e === 47;
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
function ao(e) {
  e.forEach(function(t) {
    if (delete t.location, ql(t) || zl(t))
      for (var n in t.options)
        delete t.options[n].location, ao(t.options[n].value);
    else Gl(t) && Wl(t.style) || (jl(t) || Vl(t)) && eo(t.style) ? delete t.style.location : Xl(t) && ao(t.children);
  });
}
function vf(e, t) {
  t === void 0 && (t = {}), t = ee({ shouldParseSkeletons: !0, requiresOtherClause: !0 }, t);
  var n = new cf(e, t).parse();
  if (n.err) {
    var r = SyntaxError(He[n.err.kind]);
    throw r.location = n.err.location, r.originalMessage = n.err.message, r;
  }
  return t != null && t.captureLocation || ao(n.val), n.val;
}
var Wr;
(function(e) {
  e.MISSING_VALUE = "MISSING_VALUE", e.INVALID_VALUE = "INVALID_VALUE", e.MISSING_INTL_API = "MISSING_INTL_API";
})(Wr || (Wr = {}));
var ga = (
  /** @class */
  function(e) {
    pt(t, e);
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
    pt(t, e);
    function t(n, r, i, a) {
      return e.call(this, 'Invalid values for "'.concat(n, '": "').concat(r, '". Options are "').concat(Object.keys(i).join('", "'), '"'), Wr.INVALID_VALUE, a) || this;
    }
    return t;
  }(ga)
), gf = (
  /** @class */
  function(e) {
    pt(t, e);
    function t(n, r, i) {
      return e.call(this, 'Value for "'.concat(n, '" must be of type ').concat(r), Wr.INVALID_VALUE, i) || this;
    }
    return t;
  }(ga)
), pf = (
  /** @class */
  function(e) {
    pt(t, e);
    function t(n, r) {
      return e.call(this, 'The intl string context variable "'.concat(n, '" was not provided to the string "').concat(r, '"'), Wr.MISSING_VALUE, r) || this;
    }
    return t;
  }(ga)
), wt;
(function(e) {
  e[e.literal = 0] = "literal", e[e.object = 1] = "object";
})(wt || (wt = {}));
function mf(e) {
  return e.length < 2 ? e : e.reduce(function(t, n) {
    var r = t[t.length - 1];
    return !r || r.type !== wt.literal || n.type !== wt.literal ? t.push(n) : r.value += n.value, t;
  }, []);
}
function bf(e) {
  return typeof e == "function";
}
function zi(e, t, n, r, i, a, o) {
  if (e.length === 1 && es(e[0]))
    return [
      {
        type: wt.literal,
        value: e[0].value
      }
    ];
  for (var l = [], s = 0, u = e; s < u.length; s++) {
    var d = u[s];
    if (es(d)) {
      l.push({
        type: wt.literal,
        value: d.value
      });
      continue;
    }
    if (Nd(d)) {
      typeof a == "number" && l.push({
        type: wt.literal,
        value: n.getNumberFormat(t).format(a)
      });
      continue;
    }
    var f = d.value;
    if (!(i && f in i))
      throw new pf(f, o);
    var v = i[f];
    if (Fd(d)) {
      (!v || typeof v == "string" || typeof v == "number") && (v = typeof v == "string" || typeof v == "number" ? String(v) : ""), l.push({
        type: typeof v == "string" ? wt.literal : wt.object,
        value: v
      });
      continue;
    }
    if (jl(d)) {
      var h = typeof d.style == "string" ? r.date[d.style] : eo(d.style) ? d.style.parsedOptions : void 0;
      l.push({
        type: wt.literal,
        value: n.getDateTimeFormat(t, h).format(v)
      });
      continue;
    }
    if (Vl(d)) {
      var h = typeof d.style == "string" ? r.time[d.style] : eo(d.style) ? d.style.parsedOptions : r.time.medium;
      l.push({
        type: wt.literal,
        value: n.getDateTimeFormat(t, h).format(v)
      });
      continue;
    }
    if (Gl(d)) {
      var h = typeof d.style == "string" ? r.number[d.style] : Wl(d.style) ? d.style.parsedOptions : void 0;
      h && h.scale && (v = v * (h.scale || 1)), l.push({
        type: wt.literal,
        value: n.getNumberFormat(t, h).format(v)
      });
      continue;
    }
    if (Xl(d)) {
      var g = d.children, p = d.value, E = i[p];
      if (!bf(E))
        throw new gf(p, "function", o);
      var y = zi(g, t, n, r, i, a), L = E(y.map(function(S) {
        return S.value;
      }));
      Array.isArray(L) || (L = [L]), l.push.apply(l, L.map(function(S) {
        return {
          type: typeof S == "string" ? wt.literal : wt.object,
          value: S
        };
      }));
    }
    if (ql(d)) {
      var x = d.options[v] || d.options.other;
      if (!x)
        throw new ss(d.value, v, Object.keys(d.options), o);
      l.push.apply(l, zi(x.value, t, n, r, i));
      continue;
    }
    if (zl(d)) {
      var x = d.options["=".concat(v)];
      if (!x) {
        if (!Intl.PluralRules)
          throw new ga(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`, Wr.MISSING_INTL_API, o);
        var m = n.getPluralRules(t, { type: d.pluralType }).select(v - (d.offset || 0));
        x = d.options[m] || d.options.other;
      }
      if (!x)
        throw new ss(d.value, v, Object.keys(d.options), o);
      l.push.apply(l, zi(x.value, t, n, r, i, v - (d.offset || 0)));
      continue;
    }
  }
  return mf(l);
}
function _f(e, t) {
  return t ? ee(ee(ee({}, e || {}), t || {}), Object.keys(e).reduce(function(n, r) {
    return n[r] = ee(ee({}, e[r]), t[r] || {}), n;
  }, {})) : e;
}
function yf(e, t) {
  return t ? Object.keys(e).reduce(function(n, r) {
    return n[r] = _f(e[r], t[r]), n;
  }, ee({}, e)) : e;
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
function Ef(e) {
  return e === void 0 && (e = {
    number: {},
    dateTime: {},
    pluralRules: {}
  }), {
    getNumberFormat: xa(function() {
      for (var t, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((t = Intl.NumberFormat).bind.apply(t, Rr([void 0], n, !1)))();
    }, {
      cache: Ta(e.number),
      strategy: wa.variadic
    }),
    getDateTimeFormat: xa(function() {
      for (var t, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((t = Intl.DateTimeFormat).bind.apply(t, Rr([void 0], n, !1)))();
    }, {
      cache: Ta(e.dateTime),
      strategy: wa.variadic
    }),
    getPluralRules: xa(function() {
      for (var t, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((t = Intl.PluralRules).bind.apply(t, Rr([void 0], n, !1)))();
    }, {
      cache: Ta(e.pluralRules),
      strategy: wa.variadic
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
      }, this.format = function(s) {
        var u = a.formatToParts(s);
        if (u.length === 1)
          return u[0].value;
        var d = u.reduce(function(f, v) {
          return !f.length || v.type !== wt.literal || typeof f[f.length - 1] != "string" ? f.push(v.value) : f[f.length - 1] += v.value, f;
        }, []);
        return d.length <= 1 ? d[0] || "" : d;
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
        var l = Ld(o, ["formatters"]);
        this.ast = e.__parse(t, ee(ee({}, l), { locale: this.resolvedLocale }));
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
const Fn = {}, Cf = (e, t, n) => n && (t in Fn || (Fn[t] = {}), e in Fn[t] || (Fn[t][e] = n), n), nu = (e, t) => {
  if (t == null)
    return;
  if (t in Fn && e in Fn[t])
    return Fn[t][e];
  const n = Ii(t);
  for (let r = 0; r < n.length; r++) {
    const i = n[r], a = If(i, e);
    if (a)
      return Cf(e, t, a);
  }
};
let To;
const Ai = Rt({});
function Af(e) {
  return To[e] || null;
}
function ru(e) {
  return e in To;
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
  delete Fn[e], Ai.update((n) => (n[e] = wd.all([n[e] || {}, ...t]), n));
}
$r(
  [Ai],
  ([e]) => Object.keys(e)
);
Ai.subscribe((e) => To = e);
const Xi = {};
function wf(e, t) {
  Xi[e].delete(t), Xi[e].size === 0 && delete Xi[e];
}
function au(e) {
  return Xi[e];
}
function Lf(e) {
  return Ii(e).map((t) => {
    const n = au(t);
    return [t, n ? [...n] : []];
  }).filter(([, t]) => t.length > 0);
}
function Qi(e) {
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
  if (!Qi(e))
    return e in oi ? oi[e] : Promise.resolve();
  const t = Lf(e);
  return oi[e] = Promise.all(
    t.map(
      ([n, r]) => Tf(n, r)
    )
  ).then(() => {
    if (Qi(e))
      return ou(e);
    delete oi[e];
  }), oi[e];
}
var ls = Object.getOwnPropertySymbols, Of = Object.prototype.hasOwnProperty, Rf = Object.prototype.propertyIsEnumerable, Hf = (e, t) => {
  var n = {};
  for (var r in e)
    Of.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && ls)
    for (var r of ls(e))
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
    ).join('", "')}".${Qi(Yn()) ? `

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
function Zr() {
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
const Oa = Rt(!1);
var Uf = Object.defineProperty, Ff = Object.defineProperties, Nf = Object.getOwnPropertyDescriptors, us = Object.getOwnPropertySymbols, kf = Object.prototype.hasOwnProperty, Gf = Object.prototype.propertyIsEnumerable, cs = (e, t, n) => t in e ? Uf(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, jf = (e, t) => {
  for (var n in t || (t = {}))
    kf.call(t, n) && cs(e, n, t[n]);
  if (us)
    for (var n of us(t))
      Gf.call(t, n) && cs(e, n, t[n]);
  return e;
}, Vf = (e, t) => Ff(e, Nf(t));
let oo;
const Ji = Rt(null);
function ds(e) {
  return e.split("-").map((t, n, r) => r.slice(0, n + 1).join("-")).reverse();
}
function Ii(e, t = Zr().fallbackLocale) {
  const n = ds(e);
  return t ? [.../* @__PURE__ */ new Set([...n, ...ds(t)])] : n;
}
function Yn() {
  return oo ?? void 0;
}
Ji.subscribe((e) => {
  oo = e ?? void 0, typeof window < "u" && e != null && document.documentElement.setAttribute("lang", e);
});
const qf = (e) => {
  if (e && xf(e) && Qi(e)) {
    const { loadingDelay: t } = Zr();
    let n;
    return typeof window < "u" && Yn() != null && t ? n = window.setTimeout(
      () => Oa.set(!0),
      t
    ) : Oa.set(!0), ou(e).then(() => {
      Ji.set(e);
    }).finally(() => {
      clearTimeout(n), Oa.set(!1);
    });
  }
  return Ji.set(e);
}, yr = Vf(jf({}, Ji), {
  set: qf
}), zf = () => typeof window > "u" ? null : window.navigator.language || window.navigator.languages[0], pa = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (r) => {
    const i = JSON.stringify(r);
    return i in t ? t[i] : t[i] = e(r);
  };
};
var Xf = Object.defineProperty, $i = Object.getOwnPropertySymbols, su = Object.prototype.hasOwnProperty, lu = Object.prototype.propertyIsEnumerable, fs = (e, t, n) => t in e ? Xf(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Oo = (e, t) => {
  for (var n in t || (t = {}))
    su.call(t, n) && fs(e, n, t[n]);
  if ($i)
    for (var n of $i(t))
      lu.call(t, n) && fs(e, n, t[n]);
  return e;
}, ei = (e, t) => {
  var n = {};
  for (var r in e)
    su.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && $i)
    for (var r of $i(e))
      t.indexOf(r) < 0 && lu.call(e, r) && (n[r] = e[r]);
  return n;
};
const mi = (e, t) => {
  const { formats: n } = Zr();
  if (e in n && t in n[e])
    return n[e][t];
  throw new Error(`[svelte-i18n] Unknown "${t}" ${e} format.`);
}, Wf = pa(
  (e) => {
    var t = e, { locale: n, format: r } = t, i = ei(t, ["locale", "format"]);
    if (n == null)
      throw new Error('[svelte-i18n] A "locale" must be set to format numbers');
    return r && (i = mi("number", r)), new Intl.NumberFormat(n, i);
  }
), Zf = pa(
  (e) => {
    var t = e, { locale: n, format: r } = t, i = ei(t, ["locale", "format"]);
    if (n == null)
      throw new Error('[svelte-i18n] A "locale" must be set to format dates');
    return r ? i = mi("date", r) : Object.keys(i).length === 0 && (i = mi("date", "short")), new Intl.DateTimeFormat(n, i);
  }
), Yf = pa(
  (e) => {
    var t = e, { locale: n, format: r } = t, i = ei(t, ["locale", "format"]);
    if (n == null)
      throw new Error(
        '[svelte-i18n] A "locale" must be set to format time values'
      );
    return r ? i = mi("time", r) : Object.keys(i).length === 0 && (i = mi("time", "short")), new Intl.DateTimeFormat(n, i);
  }
), Kf = (e = {}) => {
  var t = e, {
    locale: n = Yn()
  } = t, r = ei(t, [
    "locale"
  ]);
  return Wf(Oo({ locale: n }, r));
}, Qf = (e = {}) => {
  var t = e, {
    locale: n = Yn()
  } = t, r = ei(t, [
    "locale"
  ]);
  return Zf(Oo({ locale: n }, r));
}, Jf = (e = {}) => {
  var t = e, {
    locale: n = Yn()
  } = t, r = ei(t, [
    "locale"
  ]);
  return Yf(Oo({ locale: n }, r));
}, $f = pa(
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  (e, t = Yn()) => new tu(e, t, Zr().formats, {
    ignoreTag: Zr().ignoreTag
  })
), eh = (e, t = {}) => {
  var n, r, i, a;
  let o = t;
  typeof e == "object" && (o = e, e = o.id);
  const {
    values: l,
    locale: s = Yn(),
    default: u
  } = o;
  if (s == null)
    throw new Error(
      "[svelte-i18n] Cannot format a message without first setting the initial locale."
    );
  let d = nu(e, s);
  if (!d)
    d = (a = (i = (r = (n = Zr()).handleMissingMessage) == null ? void 0 : r.call(n, { locale: s, id: e, defaultValue: u })) != null ? i : u) != null ? a : e;
  else if (typeof d != "string")
    return console.warn(
      `[svelte-i18n] Message with id "${e}" must be of type "string", found: "${typeof d}". Gettin its value through the "$format" method is deprecated; use the "json" method instead.`
    ), d;
  if (!l)
    return d;
  let f = d;
  try {
    f = $f(d, s).format(l);
  } catch (v) {
    v instanceof Error && console.warn(
      `[svelte-i18n] Message "${e}" has syntax error:`,
      v.message
    );
  }
  return f;
}, th = (e, t) => Jf(t).format(e), nh = (e, t) => Qf(t).format(e), rh = (e, t) => Kf(t).format(e), ih = (e, t = Yn()) => nu(e, t), ah = $r([yr, Ai], () => eh);
$r([yr], () => th);
$r([yr], () => nh);
$r([yr], () => rh);
$r([yr, Ai], () => ih);
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
function rt(e, t, n, r = { bubbles: !0 }) {
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
function en(e, t) {
  let n = Object.getOwnPropertyNames(e);
  const r = {};
  for (let i = 0; i < n.length; i++) {
    const a = n[i];
    a.substring(0, t.length) === t && (r[a.substring(t.length)] = e[a]);
  }
  return r;
}
class ti {
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
  var r = t.x, i = t.y, a = r + n.left, o = i + n.top, l, s;
  if (e.type === "touchstart") {
    var u = e;
    l = u.changedTouches[0].pageX - a, s = u.changedTouches[0].pageY - o;
  } else {
    var d = e;
    l = d.pageX - a, s = d.pageY - o;
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
const Ro = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
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
], Bi = [], Wh = (
  /** @class */
  function(e) {
    pt(t, e);
    function t(n) {
      var r = e.call(this, ee(ee({}, t.defaultAdapter), n)) || this;
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
          for (var a = It(vs), o = a.next(); !o.done; o = a.next()) {
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
          for (var a = It(gs), o = a.next(); !o.done; o = a.next()) {
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
        for (var i = It(vs), a = i.next(); !a.done; a = i.next()) {
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
        for (var i = It(gs), a = i.next(); !a.done; a = i.next()) {
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
      var d = "", f = "";
      if (!this.adapter.isUnbounded()) {
        var v = this.getFgTranslationCoordinates(), h = v.startPoint, g = v.endPoint;
        d = h.x + "px, " + h.y + "px", f = g.x + "px, " + g.y + "px";
      }
      this.adapter.updateCssVariable(i, d), this.adapter.updateCssVariable(a, f), clearTimeout(this.activationTimer), clearTimeout(this.fgDeactivationRemovalTimer), this.rmBoundedActivationClasses(), this.adapter.removeClass(l), this.adapter.computeBoundingRect(), this.adapter.addClass(s), this.activationTimer = setTimeout(function() {
        n.activationTimerCallback();
      }, u);
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
        var i = ee({}, r);
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
var Ra = "mdc-dom-focus-sentinel", Zh = (
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
const Yh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  FocusTrap: Zh
}, Symbol.toStringTag, { value: "Module" })), { applyPassive: ps } = uu, { matches: Kh } = Ro;
function Hn(e, { ripple: t = !0, surface: n = !1, unbounded: r = !1, disabled: i = !1, color: a, active: o, rippleElement: l, eventTarget: s, activeTarget: u, addClass: d = (g) => e.classList.add(g), removeClass: f = (g) => e.classList.remove(g), addStyle: v = (g, p) => e.style.setProperty(g, p), initPromise: h = Promise.resolve() } = {}) {
  let g, p = new ti(), E = me("SMUI:addLayoutListener"), y, L = o, x = s, m = u;
  function S() {
    n ? (d("mdc-ripple-surface"), a === "primary" ? (d("smui-ripple-surface--primary"), f("smui-ripple-surface--secondary")) : a === "secondary" ? (f("smui-ripple-surface--primary"), d("smui-ripple-surface--secondary")) : (f("smui-ripple-surface--primary"), f("smui-ripple-surface--secondary"))) : (f("mdc-ripple-surface"), f("smui-ripple-surface--primary"), f("smui-ripple-surface--secondary")), g && L !== o && (L = o, o ? g.activate() : o === !1 && g.deactivate()), t && !g ? (g = new Wh({
      addClass: d,
      browserSupportsCssVars: () => Nh(window),
      computeBoundingRect: () => (l || e).getBoundingClientRect(),
      containsEventTarget: (C) => e.contains(C),
      deregisterDocumentInteractionHandler: (C, w) => p.off(document.documentElement, C, w),
      deregisterInteractionHandler: (C, w) => p.off(s || e, C, w),
      deregisterResizeHandler: (C) => window.removeEventListener("resize", C),
      getWindowPageOffset: () => {
        var C, w;
        return {
          x: (C = window.pageXOffset) !== null && C !== void 0 ? C : window.scrollX,
          y: (w = window.pageYOffset) !== null && w !== void 0 ? w : window.scrollY
        };
      },
      isSurfaceActive: () => o ?? Kh(u || e, ":active"),
      isSurfaceDisabled: () => !!i,
      isUnbounded: () => !!r,
      registerDocumentInteractionHandler: (C, w) => {
        const H = ps();
        p.on(document.documentElement, C, w, typeof H == "boolean" ? { capture: H } : H);
      },
      registerInteractionHandler: (C, w) => {
        const H = ps();
        p.on(s || e, C, w, typeof H == "boolean" ? { capture: H } : H);
      },
      registerResizeHandler: (C) => p.on(window, "resize", C),
      removeClass: f,
      updateCssVariable: v
    }), h.then(() => {
      g && (g.init(), g.setUnbounded(r));
    })) : g && !t && h.then(() => {
      g && (g.destroy(), g = void 0, p.clear());
    }), g && (x !== s || m !== u) && (x = s, m = u, g.destroy(), requestAnimationFrame(() => {
      g && (g.init(), g.setUnbounded(r));
    })), !t && r && d("mdc-ripple-upgraded--unbounded");
  }
  S(), E && (y = E(b));
  function b() {
    g && g.layout();
  }
  return {
    update(C) {
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
        addClass: d,
        removeClass: f,
        addStyle: v,
        initPromise: h
      } = Object.assign({ ripple: !0, surface: !1, unbounded: !1, disabled: !1, color: void 0, active: void 0, rippleElement: void 0, eventTarget: void 0, activeTarget: void 0, addClass: (w) => e.classList.add(w), removeClass: (w) => e.classList.remove(w), addStyle: (w, H) => e.style.setProperty(w, H), initPromise: Promise.resolve() }, C)), S();
    },
    destroy() {
      g && (g.destroy(), g = void 0, p.clear(), f("mdc-ripple-surface"), f("smui-ripple-surface--primary"), f("smui-ripple-surface--secondary")), y && y();
    }
  };
}
function $n(e, t) {
  we(t, !0);
  let n = _(t, "use", 19, () => []), r = _(t, "class", 3, ""), i = _(t, "component", 3, xi), a = _(t, "tag", 3, "span"), o = /* @__PURE__ */ Ve(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "component",
    "tag",
    "children"
  ]), l;
  const s = me("SMUI:label:context"), u = me("SMUI:label:tabindex");
  function d() {
    return l.getElement();
  }
  var f = { getElement: d }, v = W(), h = V(v);
  {
    let g = /* @__PURE__ */ pe(() => je({
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
    Jr(h, i, (p, E) => {
      Se(
        E(p, ut(
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
          () => s === "snackbar" ? { "aria-atomic": "false" } : {},
          {
            get tabindex() {
              return u;
            }
          },
          () => o,
          {
            children: (y, L) => {
              var x = W(), m = V(x);
              oe(m, () => t.children ?? Q), I(y, x);
            },
            $$slots: { default: !0 }
          }
        )),
        (y) => l = y,
        () => l
      );
    });
  }
  return I(e, v), Le(f);
}
function Qh(e, t) {
  we(t, !0);
  let n = _(t, "use", 19, () => []), r = _(t, "class", 3, ""), i = _(t, "on", 3, !1), a = _(t, "component", 3, xi), o = _(t, "tag", 3, "i"), l = /* @__PURE__ */ Ve(t, [
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
  const u = /* @__PURE__ */ pe(() => o() === "svg" || a() === ev), d = me("SMUI:icon:context");
  function f() {
    return s.getElement();
  }
  var v = { getElement: f }, h = W(), g = V(h);
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
    Jr(g, a, (E, y) => {
      Se(
        y(E, ut(
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
          () => c(u) ? { focusable: "false", tabindex: "-1" } : {},
          () => l,
          {
            children: (L, x) => {
              var m = W(), S = V(m);
              oe(S, () => t.children ?? Q), I(L, m);
            },
            $$slots: { default: !0 }
          }
        )),
        (L) => s = L,
        () => s
      );
    });
  }
  return I(e, h), Le(v);
}
var Jh = /* @__PURE__ */ Vt("<svg><!></svg>");
function xi(e, t) {
  we(t, !0);
  let n = _(t, "use", 19, () => []), r = _(t, "tag", 3, "div"), i = /* @__PURE__ */ Ve(t, ["$$slots", "$$events", "$$legacy", "use", "tag", "children"]);
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
  function l() {
    return o;
  }
  var s = { getElement: l }, u = W(), d = V(u);
  {
    var f = (h) => {
      var g = Jh();
      Xe(g, () => ({ ...i }));
      var p = ce(g);
      oe(p, () => t.children ?? Q), Se(g, (E) => o = E, () => o), ze(g, (E, y) => q == null ? void 0 : q(E, y), n), I(h, g);
    }, v = (h) => {
      var g = W(), p = V(g);
      {
        var E = (L) => {
          var x = W(), m = V(x);
          Xo(m, r, !1, (S, b) => {
            Se(S, (C) => o = C, () => o), ze(S, (C, w) => q == null ? void 0 : q(C, w), n), Xe(S, () => ({ ...i }));
          }), I(L, x);
        }, y = (L) => {
          var x = W(), m = V(x);
          Xo(m, r, !1, (S, b) => {
            Se(S, (H) => o = H, () => o), ze(S, (H, M) => q == null ? void 0 : q(H, M), n), Xe(S, () => ({ ...i }));
            var C = W(), w = V(C);
            oe(w, () => t.children ?? Q), I(b, C);
          }), I(L, x);
        };
        re(
          p,
          (L) => {
            c(a) ? L(E) : L(y, !1);
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
  return I(e, u), Le(s);
}
var $h = /* @__PURE__ */ Vt("<svg><!></svg>");
function ev(e, t) {
  we(t, !0), console && console.warn && console.warn('The @smui/common Svg component is deprecated. You can use `tag="svg"` now.');
  let n = _(t, "use", 19, () => []), r = /* @__PURE__ */ Ve(t, ["$$slots", "$$events", "$$legacy", "use", "children"]), i;
  function a() {
    return i;
  }
  var o = { getElement: a }, l = $h();
  Xe(l, () => ({ ...r }));
  var s = ce(l);
  return oe(s, () => t.children ?? Q), Se(l, (u) => i = u, () => i), ze(l, (u, d) => q == null ? void 0 : q(u, d), n), I(e, l), Le(o);
}
function Ui(e, t) {
  we(t, !0);
  const [n, r] = Zn(), i = Rt(t.value);
  se(t.key, i), Ue(() => {
    Un(i, t.value);
  }), _r(() => {
    i.set(void 0);
  });
  var a = W(), o = V(a);
  oe(o, () => t.children ?? Q), I(e, a), Le(), r();
}
var tv = /* @__PURE__ */ J('<div class="mdc-button__touch"></div>'), nv = /* @__PURE__ */ J('<div class="mdc-button__ripple"></div> <!><!>', 1);
function rv(e, t) {
  we(t, !0);
  let n = _(t, "use", 19, () => []), r = _(t, "class", 3, ""), i = _(t, "style", 3, ""), a = _(t, "ripple", 3, !0), o = _(t, "color", 3, "primary"), l = _(t, "variant", 3, "text"), s = _(t, "touch", 3, !1), u = _(t, "action", 3, "close"), d = _(t, "defaultAction", 3, !1), f = _(t, "secondary", 3, !1), v = _(t, "component", 3, xi), h = _(t, "tag", 19, () => t.href == null ? "button" : "a"), g = /* @__PURE__ */ Ve(t, [
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
  ]), p, E = be({}), y = be({}), L = me("SMUI:button:context");
  const x = /* @__PURE__ */ pe(() => L === "dialog:action" && u() != null ? { "data-mdc-dialog-action": u() } : { action: u() }), m = /* @__PURE__ */ pe(() => L === "dialog:action" && d() ? { "data-mdc-dialog-button-default": "" } : {}), S = /* @__PURE__ */ pe(() => L === "banner" ? {} : { secondary: f() });
  let b = t.disabled;
  Ue(() => {
    if (b !== t.disabled) {
      if (p) {
        const R = G();
        "blur" in R && R.blur();
      }
      b = g.disabled;
    }
  }), se("SMUI:label:context", "button"), se("SMUI:icon:context", "button");
  function C(R) {
    E[R] || (E[R] = !0);
  }
  function w(R) {
    (!(R in E) || E[R]) && (E[R] = !1);
  }
  function H(R, D) {
    y[R] != D && (D === "" || D == null ? delete y[R] : y[R] = D);
  }
  function M() {
    L === "banner" && rt(G(), f() ? "SMUIBannerButtonSecondaryActionClick" : "SMUIBannerButtonPrimaryActionClick");
  }
  function G() {
    return p.getElement();
  }
  var Z = { getElement: G }, te = W(), ve = V(te);
  {
    let R = /* @__PURE__ */ pe(() => [
      [
        Hn,
        {
          ripple: a(),
          unbounded: !1,
          color: o(),
          disabled: !!t.disabled,
          addClass: C,
          removeClass: w,
          addStyle: H
        }
      ],
      ...n()
    ]), D = /* @__PURE__ */ pe(() => je({
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
    })), O = /* @__PURE__ */ pe(() => Object.entries(y).map(([N, K]) => `${N}: ${K};`).concat([i()]).join(" "));
    Jr(ve, v, (N, K) => {
      Se(
        K(N, ut(
          {
            get tag() {
              return h();
            },
            get use() {
              return c(R);
            },
            get class() {
              return c(D);
            },
            get style() {
              return c(O);
            }
          },
          () => c(x),
          () => c(m),
          () => c(S),
          {
            get href() {
              return t.href;
            }
          },
          () => g,
          {
            onclick: (U) => {
              var A;
              M(), (A = t.onclick) == null || A.call(t, U);
            },
            children: (U, A) => {
              var j = nv(), ge = ie(V(j), 2);
              oe(ge, () => t.children ?? Q);
              var de = ie(ge);
              {
                var le = (Y) => {
                  var ne = tv();
                  I(Y, ne);
                };
                re(de, (Y) => {
                  s() && Y(le);
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
  return I(e, te), Le(Z);
}
function nr(e, t) {
  we(t, !0);
  let n = _(t, "callback", 3, () => {
  }), r = _(t, "disabled", 3, !1), i = _(t, "variant", 3, "default"), a = _(t, "isAbortAction", 3, !1), o = _(t, "backgroundColor", 3, void 0);
  {
    let l = /* @__PURE__ */ pe(() => a() ? "background-color: #ff3e00;" : "background-color: " + o());
    rv(e, {
      onclick: () => n()(),
      get variant() {
        return i();
      },
      get disabled() {
        return r();
      },
      get style() {
        return c(l);
      },
      children: (s, u) => {
        var d = W(), f = V(d);
        oe(f, () => t.children ?? Q), I(s, d);
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
var iv = (
  /** @class */
  function(e) {
    pt(t, e);
    function t(n) {
      var r = e.call(this, ee(ee({}, t.defaultAdapter), n)) || this;
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
), av = /* @__PURE__ */ J('<div class="mdc-icon-button__touch"></div>'), ov = /* @__PURE__ */ J('<div class="mdc-icon-button__ripple"></div> <!><!>', 1);
function sv(e, t) {
  we(t, !0);
  let n = () => {
  };
  function r(A) {
    return A === n;
  }
  let i = _(t, "use", 19, () => []), a = _(t, "class", 3, ""), o = _(t, "style", 3, ""), l = _(t, "ripple", 3, !0), s = _(t, "toggle", 3, !1), u = _(t, "pressed", 15, n), d = _(t, "touch", 3, !1), f = _(t, "displayFlex", 3, !0), v = _(t, "size", 3, "normal"), h = _(t, "component", 3, xi), g = _(t, "tag", 19, () => t.href == null ? "button" : "a"), p = /* @__PURE__ */ Ve(t, [
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
  ]), E, y, L = /* @__PURE__ */ ye(be({})), x = be({}), m = /* @__PURE__ */ ye(be({})), S = me("SMUI:icon-button:context"), b = me("SMUI:icon-button:aria-describedby");
  const C = /* @__PURE__ */ pe(() => {
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
        const A = O();
        "blur" in A && A.blur();
      }
      w = !!t.disabled;
    }
  }), se("SMUI:icon:context", "icon-button");
  let H = null;
  Ue(() => {
    E && O() && s() !== H && (s() && !y ? (y = new iv({
      addClass: G,
      hasClass: M,
      notifyChange: (A) => {
        D(A), rt(O(), "SMUIIconButtonToggleChange", A);
      },
      removeClass: Z,
      getAttr: ve,
      setAttr: R
    }), y.init()) : !s() && y && (y.destroy(), y = void 0, z(L, {}, !0), z(m, {}, !0)), H = s());
  }), Ue(() => {
    y && !r(u()) && y.isOn() !== u() && y.toggle(u());
  }), _r(() => {
    y && y.destroy();
  });
  function M(A) {
    return A in c(L) ? c(L)[A] : O().classList.contains(A);
  }
  function G(A) {
    c(L)[A] || (c(L)[A] = !0);
  }
  function Z(A) {
    (!(A in c(L)) || c(L)[A]) && (c(L)[A] = !1);
  }
  function te(A, j) {
    x[A] != j && (j === "" || j == null ? delete x[A] : x[A] = j);
  }
  function ve(A) {
    return A in c(m) ? c(m)[A] ?? null : O().getAttribute(A);
  }
  function R(A, j) {
    c(m)[A] !== j && (c(m)[A] = j);
  }
  function D(A) {
    u(A.isOn);
  }
  function O() {
    return E.getElement();
  }
  var N = { getElement: O }, K = W(), U = V(K);
  {
    let A = /* @__PURE__ */ pe(() => [
      [
        Hn,
        {
          ripple: l(),
          unbounded: !0,
          color: t.color,
          disabled: !!t.disabled,
          addClass: G,
          removeClass: Z,
          addStyle: te
        }
      ],
      ...i()
    ]), j = /* @__PURE__ */ pe(() => je({
      "mdc-icon-button": !0,
      "mdc-icon-button--on": !r(u()) && u(),
      "mdc-icon-button--touch": d(),
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
      ...c(L),
      [a()]: !0
    })), ge = /* @__PURE__ */ pe(() => Object.entries(x).map(([Y, ne]) => `${Y}: ${ne};`).concat([o()]).join(" ")), de = /* @__PURE__ */ pe(() => r(u()) ? null : u() ? "true" : "false"), le = /* @__PURE__ */ pe(() => u() ? t.ariaLabelOn : t.ariaLabelOff);
    Jr(U, h, (Y, ne) => {
      Se(
        ne(Y, ut(
          {
            get tag() {
              return g();
            },
            get use() {
              return c(A);
            },
            get class() {
              return c(j);
            },
            get style() {
              return c(ge);
            },
            get "aria-pressed"() {
              return c(de);
            },
            get "aria-label"() {
              return c(le);
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
          () => c(C),
          () => c(m),
          () => p,
          {
            onclick: (ue) => {
              var Ee;
              y && y.handleClick(), S === "top-app-bar:navigation" && rt(O(), "SMUITopAppBarIconButtonNav"), (Ee = t.onclick) == null || Ee.call(t, ue);
            },
            children: (ue, Ee) => {
              var Pe = ov(), $ = ie(V(Pe), 2);
              oe($, () => t.children ?? Q);
              var Te = ie($);
              {
                var Oe = (_e) => {
                  var Ce = av();
                  I(_e, Ce);
                };
                re(Te, (_e) => {
                  d() && _e(Oe);
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
  return I(e, K), Le(N);
}
function lv(e, t) {
  let n = _(t, "callback", 3, () => {
  }), r = _(t, "icon", 3, ""), i = _(t, "disabled", 3, !1);
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
        children: (l, s) => {
          var u = Ct();
          Ae(() => nt(u, r())), I(l, u);
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
    pt(t, e);
    function t(n) {
      var r = e.call(this, ee(ee({}, t.defaultAdapter), n)) || this;
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
    pt(t, e);
    function t(n) {
      var r = e.call(this, ee(ee({}, t.defaultAdapter), n)) || this;
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
var fv = {
  NOTCH_ELEMENT_SELECTOR: ".mdc-notched-outline__notch"
}, ms = {
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
    pt(t, e);
    function t(n) {
      return e.call(this, ee(ee({}, t.defaultAdapter), n)) || this;
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
}, bs = {
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
var _s = ["mousedown", "touchstart"], ys = ["click", "keydown"], bv = (
  /** @class */
  function(e) {
    pt(t, e);
    function t(n, r) {
      r === void 0 && (r = {});
      var i = e.call(this, ee(ee({}, t.defaultAdapter), n)) || this;
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
        for (var o = It(_s), l = o.next(); !l.done; l = o.next()) {
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
        for (var u = It(ys), d = u.next(); !d.done; d = u.next()) {
          var s = d.value;
          this.adapter.registerTextFieldInteractionHandler(s, this.textFieldInteractionHandler);
        }
      } catch (f) {
        i = { error: f };
      } finally {
        try {
          d && !d.done && (a = u.return) && a.call(u);
        } finally {
          if (i) throw i.error;
        }
      }
      this.validationObserver = this.adapter.registerValidationAttributeChangeHandler(this.validationAttributeChangeHandler), this.setcharacterCounter(this.getValue().length);
    }, t.prototype.destroy = function() {
      var n, r, i, a;
      this.adapter.deregisterInputInteractionHandler("focus", this.inputFocusHandler), this.adapter.deregisterInputInteractionHandler("blur", this.inputBlurHandler), this.adapter.deregisterInputInteractionHandler("input", this.inputInputHandler);
      try {
        for (var o = It(_s), l = o.next(); !l.done; l = o.next()) {
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
        for (var u = It(ys), d = u.next(); !d.done; d = u.next()) {
          var s = d.value;
          this.adapter.deregisterTextFieldInteractionHandler(s, this.textFieldInteractionHandler);
        }
      } catch (f) {
        i = { error: f };
      } finally {
        try {
          d && !d.done && (a = u.return) && a.call(u);
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
var Ss = ["click", "keydown"], yv = (
  /** @class */
  function(e) {
    pt(t, e);
    function t(n) {
      var r = e.call(this, ee(ee({}, t.defaultAdapter), n)) || this;
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
        for (var i = It(Ss), a = i.next(); !a.done; a = i.next()) {
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
        for (var i = It(Ss), a = i.next(); !a.done; a = i.next()) {
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
), Ev = /* @__PURE__ */ J("<span><!></span>"), Sv = /* @__PURE__ */ J("<label><!></label>");
function Cs(e, t) {
  we(t, !0);
  let n = _(t, "use", 19, () => []), r = _(t, "class", 3, ""), i = _(t, "style", 3, ""), a = _(t, "floatAbove", 15, !1), o = _(t, "required", 15, !1), l = _(t, "wrapped", 3, !1), s = /* @__PURE__ */ Ve(t, [
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
  ]), u, d = /* @__PURE__ */ ye(void 0), f = new ti(), v = be({}), h = be({}), g = me("SMUI:generic:input:props") ?? {}, p = a();
  Ue(() => {
    c(d) && p !== a() && (p = a(), c(d).float(a()));
  });
  let E = o();
  Ue(() => {
    c(d) && E !== o() && (E = o(), c(d).setRequired(o()));
  });
  const y = me("SMUI:floating-label:mount"), L = me("SMUI:floating-label:unmount");
  gt(() => {
    z(
      d,
      new cv({
        addClass: x,
        removeClass: m,
        getWidth: () => {
          var A, j;
          const N = G(), K = N.cloneNode(!0);
          (A = N.parentNode) == null || A.appendChild(K), K.classList.add("smui-floating-label--remove-transition"), K.classList.add("smui-floating-label--force-size"), K.classList.remove("mdc-floating-label--float-above");
          const U = K.scrollWidth;
          return (j = N.parentNode) == null || j.removeChild(K), U;
        },
        registerInteractionHandler: (N, K) => f.on(G(), N, K),
        deregisterInteractionHandler: (N, K) => f.off(G(), N, K)
      }),
      !0
    );
    const O = {
      get element() {
        return G();
      },
      addStyle: S,
      removeStyle: b
    };
    return y && y(O), c(d).init(), () => {
      var N;
      L && L(O), (N = c(d)) == null || N.destroy(), f.clear();
    };
  });
  function x(O) {
    v[O] || (v[O] = !0);
  }
  function m(O) {
    (!(O in v) || v[O]) && (v[O] = !1);
  }
  function S(O, N) {
    h[O] != N && (N === "" || N == null ? delete h[O] : h[O] = N);
  }
  function b(O) {
    O in h && delete h[O];
  }
  function C(O) {
    var N;
    (N = c(d)) == null || N.shake(O);
  }
  function w(O) {
    a(O);
  }
  function H(O) {
    o(O);
  }
  function M() {
    if (c(d) == null)
      throw new Error("Instance is undefined.");
    return c(d).getWidth();
  }
  function G() {
    return u;
  }
  var Z = { shake: C, float: w, setRequired: H, getWidth: M, getElement: G }, te = W(), ve = V(te);
  {
    var R = (O) => {
      var N = Ev();
      Xe(N, (U, A) => ({ class: U, style: A, ...s }), [
        () => je({
          "mdc-floating-label": !0,
          "mdc-floating-label--float-above": a(),
          "mdc-floating-label--required": o(),
          ...v,
          [r()]: !0
        }),
        () => Object.entries(h).map(([U, A]) => `${U}: ${A};`).concat([i()]).join(" ")
      ]);
      var K = ce(N);
      oe(K, () => t.children ?? Q), Se(N, (U) => u = U, () => u), ze(N, (U, A) => q == null ? void 0 : q(U, A), n), I(O, N);
    }, D = (O) => {
      var N = Sv();
      Xe(
        N,
        (U, A) => ({
          class: U,
          style: A,
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
          () => Object.entries(h).map(([U, A]) => `${U}: ${A};`).concat([i()]).join(" ")
        ]
      );
      var K = ce(N);
      oe(K, () => t.children ?? Q), Se(N, (U) => u = U, () => u), ze(N, (U, A) => q == null ? void 0 : q(U, A), n), I(O, N);
    };
    re(ve, (O) => {
      l() ? O(R) : O(D, !1);
    });
  }
  return I(e, te), Le(Z);
}
var Cv = /* @__PURE__ */ J("<div></div>");
function Av(e, t) {
  we(t, !0);
  let n = _(t, "use", 19, () => []), r = _(t, "class", 3, ""), i = _(t, "style", 3, ""), a = _(t, "active", 3, !1), o = /* @__PURE__ */ Ve(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "style",
    "active"
  ]), l, s = /* @__PURE__ */ ye(void 0), u = new ti(), d = be({}), f = be({});
  gt(() => (z(
    s,
    new dv({
      addClass: h,
      removeClass: g,
      hasClass: v,
      setStyle: p,
      registerEventHandler: (b, C) => u.on(x(), b, C),
      deregisterEventHandler: (b, C) => u.off(x(), b, C)
    }),
    !0
  ), c(s).init(), () => {
    var b;
    (b = c(s)) == null || b.destroy(), u.clear();
  }));
  function v(b) {
    return b in d ? d[b] : x().classList.contains(b);
  }
  function h(b) {
    d[b] || (d[b] = !0);
  }
  function g(b) {
    (!(b in d) || d[b]) && (d[b] = !1);
  }
  function p(b, C) {
    f[b] != C && (C === "" || C == null ? delete f[b] : f[b] = C);
  }
  function E() {
    var b;
    (b = c(s)) == null || b.activate();
  }
  function y() {
    var b;
    (b = c(s)) == null || b.deactivate();
  }
  function L(b) {
    var C;
    (C = c(s)) == null || C.setRippleCenter(b);
  }
  function x() {
    return l;
  }
  var m = { activate: E, deactivate: y, setRippleCenter: L, getElement: x }, S = Cv();
  return Xe(S, (b, C) => ({ class: b, style: C, ...o }), [
    () => je({
      "mdc-line-ripple": !0,
      "mdc-line-ripple--active": a(),
      ...d,
      [r()]: !0
    }),
    () => Object.entries(f).map(([b, C]) => `${b}: ${C};`).concat([i()]).join(" ")
  ]), Se(S, (b) => l = b, () => l), ze(S, (b, C) => q == null ? void 0 : q(b, C), n), I(e, S), Le(m);
}
var Iv = /* @__PURE__ */ J('<div class="mdc-notched-outline__notch"><!></div>'), xv = /* @__PURE__ */ J('<div><div class="mdc-notched-outline__leading"></div> <!> <div class="mdc-notched-outline__trailing"></div></div>');
function wv(e, t) {
  we(t, !0);
  let n = _(t, "use", 19, () => []), r = _(t, "class", 3, ""), i = _(t, "notched", 3, !1), a = _(t, "noLabel", 3, !1), o = /* @__PURE__ */ Ve(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "notched",
    "noLabel",
    "children"
  ]), l, s = /* @__PURE__ */ ye(void 0), u = /* @__PURE__ */ ye(void 0), d = be({}), f = be({}), v;
  Ue(() => {
    c(u) !== v && (c(u) ? (c(u).addStyle("transition-duration", "0s"), h("mdc-notched-outline--upgraded"), requestAnimationFrame(() => {
      c(u) && c(u).removeStyle("transition-duration");
    })) : g("mdc-notched-outline--upgraded"), v = c(u));
  }), se("SMUI:floating-label:mount", (w) => {
    z(u, w, !0);
  }), se("SMUI:floating-label:unmount", () => {
    z(u, void 0);
  }), gt(() => (z(
    s,
    new vv({
      addClass: h,
      removeClass: g,
      setNotchWidthProperty: (w) => p("width", w + "px"),
      removeNotchWidthProperty: () => E("width")
    }),
    !0
  ), c(s).init(), () => {
    var w;
    (w = c(s)) == null || w.destroy();
  }));
  function h(w) {
    d[w] || (d[w] = !0);
  }
  function g(w) {
    (!(w in d) || d[w]) && (d[w] = !1);
  }
  function p(w, H) {
    f[w] != H && (H === "" || H == null ? delete f[w] : f[w] = H);
  }
  function E(w) {
    w in f && delete f[w];
  }
  function y(w) {
    var H;
    (H = c(s)) == null || H.notch(w);
  }
  function L() {
    var w;
    (w = c(s)) == null || w.closeNotch();
  }
  function x() {
    return l;
  }
  var m = { notch: y, closeNotch: L, getElement: x }, S = xv();
  Xe(S, (w) => ({ class: w, ...o }), [
    () => je({
      "mdc-notched-outline": !0,
      "mdc-notched-outline--notched": i(),
      "mdc-notched-outline--no-label": a(),
      ...d,
      [r()]: !0
    })
  ]);
  var b = ie(ce(S), 2);
  {
    var C = (w) => {
      var H = Iv(), M = ce(H);
      oe(M, () => t.children ?? Q), Ae((G) => Pt(H, G), [
        () => Object.entries(f).map(([G, Z]) => `${G}: ${Z};`).join(" ")
      ]), I(w, H);
    };
    re(b, (w) => {
      a() || w(C);
    });
  }
  return Se(S, (w) => l = w, () => l), ze(S, (w, H) => q == null ? void 0 : q(w, H), n), I(e, S), Le(m);
}
function wi(e, t) {
  we(t, !0);
  let n = _(t, "use", 19, () => []), r = _(t, "class", 3, ""), i = _(t, "component", 3, xi), a = _(t, "tag", 3, "div"), o = _(t, "_smuiClass", 3, ""), l = _(t, "_smuiClassMap", 23, () => ({})), s = _(t, "_smuiContexts", 19, () => ({})), u = _(t, "_smuiProps", 19, () => ({})), d = /* @__PURE__ */ Ve(t, [
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
    const x = me(L);
    x && "subscribe" in x && v.push(x.subscribe((m) => {
      l()[y] = m;
    }));
  });
  for (let y in s())
    s().hasOwnProperty(y) && se(y, s()[y]);
  _r(() => {
    for (const y of v)
      y();
  });
  function h() {
    return f.getElement();
  }
  var g = { getElement: h }, p = W(), E = V(p);
  {
    let y = /* @__PURE__ */ pe(() => je({
      [o()]: !0,
      ...l(),
      [r()]: !0
    }));
    Jr(E, i, (L, x) => {
      Se(
        x(L, ut(
          {
            get tag() {
              return a();
            },
            get use() {
              return n();
            },
            get class() {
              return c(y);
            }
          },
          u,
          () => d,
          {
            children: (m, S) => {
              var b = W(), C = V(b);
              oe(C, () => t.children ?? Q), I(m, b);
            },
            $$slots: { default: !0 }
          }
        )),
        (m) => f = m,
        () => f
      );
    });
  }
  return I(e, p), Le(g);
}
function Lv(e, t) {
  we(t, !0);
  let n = /* @__PURE__ */ Ve(t, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return Se(
    wi(e, ut({ _smuiClass: "mdc-text-field-helper-line", tag: "div" }, () => n, {
      children: (o, l) => {
        var s = W(), u = V(s);
        oe(u, () => t.children ?? Q), I(o, s);
      },
      $$slots: { default: !0 }
    })),
    (o) => r = o,
    () => r
  ), Le(a);
}
function Tv(e, t) {
  we(t, !0);
  let n = /* @__PURE__ */ Ve(t, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return Se(
    wi(e, ut(
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
  ), Le(a);
}
function Ov(e, t) {
  we(t, !0);
  let n = /* @__PURE__ */ Ve(t, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return Se(
    wi(e, ut(
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
  ), Le(a);
}
var Rv = /* @__PURE__ */ J("<input/>");
function Hv(e, t) {
  we(t, !0);
  let n = _(t, "use", 19, () => []), r = _(t, "class", 3, ""), i = _(t, "type", 3, "text"), a = _(t, "placeholder", 3, " "), o = _(t, "value", 15), l = _(t, "files", 15, null), s = _(t, "dirty", 15, !1), u = _(t, "invalid", 15, !1), d = _(t, "updateInvalid", 3, !0), f = _(t, "initialInvalid", 3, !1), v = _(t, "emptyValueNull", 19, () => o() === null), h = _(t, "emptyValueUndefined", 19, () => o() === void 0), g = /* @__PURE__ */ Ve(t, [
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
  }), gt(() => {
    d() && f() && u(M().matches(":invalid"));
  });
  function L(R) {
    return R === "" ? Number.NaN : +R;
  }
  function x(R) {
    if (i() === "file") {
      l(R.currentTarget.files);
      return;
    }
    if (R.currentTarget.value === "" && v()) {
      o(null);
      return;
    }
    if (R.currentTarget.value === "" && h()) {
      o(void 0);
      return;
    }
    switch (i()) {
      case "number":
      case "range":
        o(L(R.currentTarget.value));
        break;
      default:
        o(R.currentTarget.value);
        break;
    }
  }
  function m(R) {
    (i() === "file" || i() === "range") && x(R), s(!0), d() && u(M().matches(":invalid"));
  }
  function S(R) {
    return R in E ? E[R] ?? null : M().getAttribute(R);
  }
  function b(R, D) {
    E[R] !== D && (E[R] = D);
  }
  function C(R) {
    (!(R in E) || E[R] != null) && (E[R] = void 0);
  }
  function w() {
    M().focus();
  }
  function H() {
    M().blur();
  }
  function M() {
    return p;
  }
  var G = { getAttr: S, addAttr: b, removeAttr: C, focus: w, blur: H, getElement: M }, Z = Rv(), te = (R) => {
    var D;
    i() !== "file" && x(R), (D = t.oninput) == null || D.call(t, R);
  }, ve = (R) => {
    var D;
    m(R), (D = t.onchange) == null || D.call(t, R);
  };
  return Xe(
    Z,
    (R) => ({
      class: R,
      type: i(),
      placeholder: a(),
      ...y,
      ...E,
      ...g,
      oninput: te,
      onchange: ve
    }),
    [
      () => je({ "mdc-text-field__input": !0, [r()]: !0 })
    ],
    void 0,
    void 0,
    !0
  ), Se(Z, (R) => p = R, () => p), ze(Z, (R, D) => q == null ? void 0 : q(R, D), n), I(e, Z), Le(G);
}
var Dv = /* @__PURE__ */ J("<textarea></textarea>");
function Pv(e, t) {
  we(t, !0);
  let n = _(t, "use", 19, () => []), r = _(t, "class", 3, ""), i = _(t, "style", 3, ""), a = _(t, "value", 15, ""), o = _(t, "dirty", 15, !1), l = _(t, "invalid", 15, !1), s = _(t, "updateInvalid", 3, !0), u = _(t, "initialInvalid", 3, !1), d = _(t, "resizable", 3, !0), f = /* @__PURE__ */ Ve(t, [
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
  gt(() => {
    s() && u() && l(m().matches(":invalid"));
  });
  function g() {
    o(!0), s() && l(m().matches(":invalid"));
  }
  function p(w) {
    return w in h ? h[w] ?? null : m().getAttribute(w);
  }
  function E(w, H) {
    h[w] !== H && (h[w] = H);
  }
  function y(w) {
    (!(w in h) || h[w] != null) && (h[w] = void 0);
  }
  function L() {
    m().focus();
  }
  function x() {
    m().blur();
  }
  function m() {
    return v;
  }
  var S = { getAttr: p, addAttr: E, removeAttr: y, focus: L, blur: x, getElement: m }, b = Dv(), C = (w) => {
    var H;
    g(), (H = t.onchange) == null || H.call(t, w);
  };
  return Xe(
    b,
    (w) => ({
      class: w,
      style: `${d() ? "" : "resize: none; "}${i()}`,
      ...h,
      ...f,
      onchange: C
    }),
    [
      () => je({ "mdc-text-field__input": !0, [r()]: !0 })
    ]
  ), Se(b, (w) => v = w, () => v), ze(b, (w, H) => q == null ? void 0 : q(w, H), n), Ci(() => Ka(b, a)), I(e, b), Le(S);
}
var Mv = /* @__PURE__ */ J('<span class="mdc-text-field__ripple"></span>'), Bv = /* @__PURE__ */ J("<!> <!>", 1), Uv = /* @__PURE__ */ J("<span><!> <!></span>"), Fv = /* @__PURE__ */ J("<!> <!> <!>", 1), Nv = /* @__PURE__ */ J("<label><!> <!> <!> <!> <!> <!> <!></label>"), kv = /* @__PURE__ */ J("<div><!> <!> <!> <!> <!></div>"), Gv = /* @__PURE__ */ J("<!> <!>", 1);
function As(e, t) {
  we(t, !0);
  const { applyPassive: n } = uu;
  let r = () => {
  };
  function i(B) {
    return B === r;
  }
  let a = _(t, "use", 19, () => []), o = _(t, "class", 3, ""), l = _(t, "style", 3, ""), s = _(t, "ripple", 3, !0), u = _(t, "disabled", 3, !1), d = _(t, "required", 3, !1), f = _(t, "textarea", 3, !1), v = _(t, "variant", 19, () => f() ? "outlined" : "standard"), h = _(t, "noLabel", 3, !1), g = _(t, "type", 3, "text"), p = _(t, "value", 15), E = _(t, "files", 15, r), y = _(t, "invalid", 15, r), L = _(t, "updateInvalid", 19, () => i(y())), x = _(t, "initialInvalid", 3, !1), m = _(t, "dirty", 15, !1), S = _(t, "validateOnValueChange", 19, L), b = _(t, "useNativeValidation", 19, L), C = _(t, "withLeadingIcon", 3, r), w = _(t, "withTrailingIcon", 3, r), H = _(t, "input", 7), M = _(t, "floatingLabel", 7), G = _(t, "lineRipple", 7), Z = _(t, "notchedOutline", 7), te = /* @__PURE__ */ Ve(t, [
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
  const ve = p() !== void 0 || p() === void 0 && t.input$emptyValueUndefined || !i(E());
  i(E()) && E(null), i(y()) && y(!1);
  let R, D = /* @__PURE__ */ ye(void 0), O = new ti(), N = be({}), K = be({}), U = /* @__PURE__ */ ye(void 0), A = /* @__PURE__ */ ye(!1), j = /* @__PURE__ */ ye(be(x())), ge = me("SMUI:addLayoutListener"), de, le, Y = new Promise((B) => le = B), ne, ue, Ee, Pe;
  const $ = /* @__PURE__ */ pe(() => H() && H().getElement());
  Ue(() => {
    (m() || c(j) || !L()) && c(D) && c(D).isValid() !== !y() && (L() ? y(!c(D).isValid()) : c(D).setValid(!y()));
  }), Ue(() => {
    c(D) && c(D).getValidateOnValueChange() !== S() && c(D).setValidateOnValueChange(i(S()) ? !1 : S());
  }), Ue(() => {
    c(D) && c(D).setUseNativeValidation(i(b()) ? !0 : b());
  }), Ue(() => {
    c(D) && c(D).setDisabled(u());
  });
  let Te = p();
  Ue(() => {
    if (c(D) && ve && Te !== p()) {
      Te = p();
      const B = `${p() == null ? "" : p()}`;
      c(D).getValue() !== B && c(D).setValue(B);
    }
  }), ge && (de = ge(T)), se("SMUI:textfield:leading-icon:mount", (B) => {
    ne = B;
  }), se("SMUI:textfield:leading-icon:unmount", () => {
    ne = void 0;
  }), se("SMUI:textfield:trailing-icon:mount", (B) => {
    ue = B;
  }), se("SMUI:textfield:trailing-icon:unmount", () => {
    ue = void 0;
  }), se("SMUI:textfield:helper-text:id", (B) => {
    z(U, B, !0);
  }), se("SMUI:textfield:helper-text:mount", (B) => {
    Ee = B;
  }), se("SMUI:textfield:helper-text:unmount", () => {
    z(U, void 0), Ee = void 0;
  }), se("SMUI:textfield:character-counter:mount", (B) => {
    Pe = B;
  }), se("SMUI:textfield:character-counter:unmount", () => {
    Pe = void 0;
  }), gt(() => {
    var B;
    if (z(
      D,
      new bv(
        {
          // getRootAdapterMethods_
          addClass: _e,
          removeClass: Ce,
          hasClass: Oe,
          registerTextFieldInteractionHandler: (X, Ye) => O.on(P(), X, Ye),
          deregisterTextFieldInteractionHandler: (X, Ye) => O.off(P(), X, Ye),
          registerValidationAttributeChangeHandler: (X) => {
            const Ye = (mt) => mt.map((Qt) => Qt.attributeName).filter((Qt) => Qt), Qe = new MutationObserver((mt) => {
              b() && X(Ye(mt));
            }), at = { attributes: !0 };
            return H() && Qe.observe(H().getElement(), at), Qe;
          },
          deregisterValidationAttributeChangeHandler: (X) => {
            X.disconnect();
          },
          // getInputAdapterMethods_
          getNativeInput: () => {
            var X;
            return ((X = H()) == null ? void 0 : X.getElement()) ?? null;
          },
          setInputAttr: (X, Ye) => {
            var Qe;
            (Qe = H()) == null || Qe.addAttr(X, Ye);
          },
          removeInputAttr: (X) => {
            var Ye;
            (Ye = H()) == null || Ye.removeAttr(X);
          },
          isFocused: () => {
            var X;
            return document.activeElement === ((X = H()) == null ? void 0 : X.getElement());
          },
          registerInputInteractionHandler: (X, Ye) => {
            var at;
            const Qe = (at = H()) == null ? void 0 : at.getElement();
            if (Qe) {
              const mt = n();
              O.on(Qe, X, Ye, typeof mt == "boolean" ? { capture: mt } : mt);
            }
          },
          deregisterInputInteractionHandler: (X, Ye) => {
            var at;
            const Qe = (at = H()) == null ? void 0 : at.getElement();
            Qe && O.off(Qe, X, Ye);
          },
          // getLabelAdapterMethods_
          floatLabel: (X) => M() && M().float(X),
          getLabelWidth: () => M() ? M().getWidth() : 0,
          hasLabel: () => !!M(),
          shakeLabel: (X) => M() && M().shake(X),
          setLabelRequired: (X) => M() && M().setRequired(X),
          // getLineRippleAdapterMethods_
          activateLineRipple: () => G() && G().activate(),
          deactivateLineRipple: () => G() && G().deactivate(),
          setLineRippleTransformOrigin: (X) => G() && G().setRippleCenter(X),
          // getOutlineAdapterMethods_
          closeOutline: () => Z() && Z().closeNotch(),
          hasOutline: () => !!Z(),
          notchOutline: (X) => Z() && Z().notch(X)
        },
        {
          get helperText() {
            return Ee;
          },
          get characterCounter() {
            return Pe;
          },
          get leadingIcon() {
            return ne;
          },
          get trailingIcon() {
            return ue;
          }
        }
      ),
      !0
    ), ve) {
      if (H() == null)
        throw new Error("SMUI Textfield must be initialized with either a non-undefined initial value or an Input component.");
      (B = c(D)) == null || B.init();
    } else
      Al().then(() => {
        var X;
        if (H() == null)
          throw new Error("SMUI Textfield must be initialized with either a non-undefined initial value or an Input component.");
        (X = c(D)) == null || X.init();
      });
    return le(), () => {
      var X;
      (X = c(D)) == null || X.destroy(), O.clear();
    };
  }), _r(() => {
    de && de();
  });
  function Oe(B) {
    return B in N ? N[B] ?? null : P().classList.contains(B);
  }
  function _e(B) {
    N[B] || (N[B] = !0);
  }
  function Ce(B) {
    (!(B in N) || N[B]) && (N[B] = !1);
  }
  function fe(B, X) {
    K[B] != X && (X === "" || X == null ? delete K[B] : K[B] = X);
  }
  function Me() {
    var B;
    (B = H()) == null || B.focus();
  }
  function $e() {
    var B;
    (B = H()) == null || B.blur();
  }
  function T() {
    if (c(D)) {
      const B = c(D).shouldFloat;
      c(D).notchOutline(B);
    }
  }
  function P() {
    return R;
  }
  var ae = { focus: Me, blur: $e, layout: T, getElement: P }, We = Gv(), Kt = V(We);
  {
    var wn = (B) => {
      var X = Nv();
      Xe(X, (Re, Ze, et) => ({ class: Re, style: Ze, for: void 0, ...et }), [
        () => je({
          "mdc-text-field": !0,
          "mdc-text-field--disabled": u(),
          "mdc-text-field--textarea": f(),
          "mdc-text-field--filled": v() === "filled",
          "mdc-text-field--outlined": v() === "outlined",
          "smui-text-field--standard": v() === "standard" && !f(),
          "mdc-text-field--no-label": h() || t.label == null,
          "mdc-text-field--label-floating": c(A) || p() != null && p() !== "",
          "mdc-text-field--with-leading-icon": i(C()) ? t.leadingIcon : C(),
          "mdc-text-field--with-trailing-icon": i(w()) ? t.trailingIcon : w(),
          "mdc-text-field--with-internal-counter": f() && t.internalCounter,
          "mdc-text-field--invalid": y(),
          ...N,
          [o()]: !0
        }),
        () => Object.entries(K).map(([Re, Ze]) => `${Re}: ${Ze};`).concat([l()]).join(" "),
        () => ea(te, ["input$", "label$", "ripple$", "outline$", "helperLine$"])
      ]);
      var Ye = ce(X);
      {
        var Qe = (Re) => {
          var Ze = Bv(), et = V(Ze);
          {
            var xt = (ot) => {
              var dt = Mv();
              I(ot, dt);
            };
            re(et, (ot) => {
              v() === "filled" && ot(xt);
            });
          }
          var bt = ie(et, 2);
          {
            var Je = (ot) => {
              {
                let dt = /* @__PURE__ */ pe(() => c(A) || p() != null && p() !== "" && (typeof p() != "number" || !isNaN(p()))), Fe = /* @__PURE__ */ pe(() => en(te, "label$"));
                Se(
                  Cs(ot, ut(
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
                      children: (tt, pn) => {
                        var qt = W(), st = V(qt);
                        {
                          var _t = (Ft) => {
                          }, yt = (Ft) => {
                            var Ti = W(), Qn = V(Ti);
                            {
                              var Oi = (On) => {
                                var Jn = Ct();
                                Ae(() => nt(Jn, t.label)), I(On, Jn);
                              }, ba = (On) => {
                                var Jn = W(), Rn = V(Jn);
                                oe(Rn, () => t.label), I(On, Jn);
                              };
                              re(
                                Qn,
                                (On) => {
                                  typeof t.label == "string" ? On(Oi) : On(ba, !1);
                                },
                                !0
                              );
                            }
                            I(Ft, Ti);
                          };
                          re(st, (Ft) => {
                            t.label == null ? Ft(_t) : Ft(yt, !1);
                          });
                        }
                        I(tt, qt);
                      },
                      $$slots: { default: !0 }
                    }
                  )),
                  (tt) => M(tt),
                  () => M()
                );
              }
            };
            re(bt, (ot) => {
              !h() && t.label != null && ot(Je);
            });
          }
          I(Re, Ze);
        };
        re(Ye, (Re) => {
          !f() && v() !== "outlined" && Re(Qe);
        });
      }
      var at = ie(Ye, 2);
      {
        var mt = (Re) => {
          {
            let Ze = /* @__PURE__ */ pe(() => h() || t.label == null), et = /* @__PURE__ */ pe(() => en(te, "outline$"));
            Se(
              wv(Re, ut(
                {
                  get noLabel() {
                    return c(Ze);
                  }
                },
                () => c(et),
                {
                  children: (xt, bt) => {
                    var Je = W(), ot = V(Je);
                    {
                      var dt = (Fe) => {
                        {
                          let tt = /* @__PURE__ */ pe(() => c(A) || p() != null && p() !== "" && (typeof p() != "number" || !isNaN(p()))), pn = /* @__PURE__ */ pe(() => en(te, "label$"));
                          Se(
                            Cs(Fe, ut(
                              {
                                get floatAbove() {
                                  return c(tt);
                                },
                                get required() {
                                  return d();
                                },
                                wrapped: !0
                              },
                              () => c(pn),
                              {
                                children: (qt, st) => {
                                  var _t = W(), yt = V(_t);
                                  {
                                    var Ft = (Qn) => {
                                    }, Ti = (Qn) => {
                                      var Oi = W(), ba = V(Oi);
                                      {
                                        var On = (Rn) => {
                                          var ni = Ct();
                                          Ae(() => nt(ni, t.label)), I(Rn, ni);
                                        }, Jn = (Rn) => {
                                          var ni = W(), Pu = V(ni);
                                          oe(Pu, () => t.label), I(Rn, ni);
                                        };
                                        re(
                                          ba,
                                          (Rn) => {
                                            typeof t.label == "string" ? Rn(On) : Rn(Jn, !1);
                                          },
                                          !0
                                        );
                                      }
                                      I(Qn, Oi);
                                    };
                                    re(yt, (Qn) => {
                                      t.label == null ? Qn(Ft) : Qn(Ti, !1);
                                    });
                                  }
                                  I(qt, _t);
                                },
                                $$slots: { default: !0 }
                              }
                            )),
                            (qt) => M(qt),
                            () => M()
                          );
                        }
                      };
                      re(ot, (Fe) => {
                        !h() && t.label != null && Fe(dt);
                      });
                    }
                    I(xt, Je);
                  },
                  $$slots: { default: !0 }
                }
              )),
              (xt) => Z(xt),
              () => Z()
            );
          }
        };
        re(at, (Re) => {
          (f() || v() === "outlined") && Re(mt);
        });
      }
      var Qt = ie(at, 2);
      Ui(Qt, {
        key: "SMUI:textfield:icon:leading",
        value: !0,
        children: (Re, Ze) => {
          var et = W(), xt = V(et);
          oe(xt, () => t.leadingIcon ?? Q), I(Re, et);
        },
        $$slots: { default: !0 }
      });
      var Cr = ie(Qt, 2);
      oe(Cr, () => t.children ?? Q);
      var Ge = ie(Cr, 2);
      {
        var ct = (Re) => {
          var Ze = Uv(), et = ce(Ze);
          {
            let bt = /* @__PURE__ */ pe(() => en(te, "input$"));
            Se(
              Pv(et, ut(
                {
                  get disabled() {
                    return u();
                  },
                  get required() {
                    return d();
                  },
                  get updateInvalid() {
                    return L();
                  },
                  get initialInvalid() {
                    return c(j);
                  },
                  get "aria-controls"() {
                    return c(U);
                  },
                  get "aria-describedby"() {
                    return c(U);
                  }
                },
                () => c(bt),
                {
                  onblur: (Je) => {
                    var ot;
                    z(A, !1), z(j, !0), rt(P(), "blur", Je), (ot = t.input$onblur) == null || ot.call(t, Je);
                  },
                  onfocus: (Je) => {
                    var ot;
                    z(A, !0), rt(P(), "focus", Je), (ot = t.input$onfocus) == null || ot.call(t, Je);
                  },
                  get value() {
                    return p();
                  },
                  set value(Je) {
                    p(Je);
                  },
                  get dirty() {
                    return m();
                  },
                  set dirty(Je) {
                    m(Je);
                  },
                  get invalid() {
                    return y();
                  },
                  set invalid(Je) {
                    y(Je);
                  }
                }
              )),
              (Je) => H(Je),
              () => H()
            );
          }
          var xt = ie(et, 2);
          oe(xt, () => t.internalCounter ?? Q), Ae((bt) => Hl(Ze, 1, bt), [
            () => Rl(je({
              "mdc-text-field__resizer": !("input$resizable" in te) || t.input$resizable
            }))
          ]), I(Re, Ze);
        }, Ut = (Re) => {
          var Ze = Fv(), et = V(Ze);
          {
            var xt = (dt) => {
              var Fe = W(), tt = V(Fe);
              {
                var pn = (st) => {
                  Tv(st, {
                    children: (_t, yt) => {
                      var Ft = Ct();
                      Ae(() => nt(Ft, t.prefix)), I(_t, Ft);
                    },
                    $$slots: { default: !0 }
                  });
                }, qt = (st) => {
                  var _t = W(), yt = V(_t);
                  oe(yt, () => t.prefix ?? Q), I(st, _t);
                };
                re(tt, (st) => {
                  typeof t.prefix == "string" ? st(pn) : st(qt, !1);
                });
              }
              I(dt, Fe);
            };
            re(et, (dt) => {
              t.prefix != null && dt(xt);
            });
          }
          var bt = ie(et, 2);
          {
            let dt = /* @__PURE__ */ pe(() => en(te, "input$"));
            Se(
              Hv(bt, ut(
                {
                  get type() {
                    return g();
                  },
                  get disabled() {
                    return u();
                  },
                  get required() {
                    return d();
                  },
                  get updateInvalid() {
                    return L();
                  },
                  get initialInvalid() {
                    return c(j);
                  },
                  get "aria-controls"() {
                    return c(U);
                  },
                  get "aria-describedby"() {
                    return c(U);
                  }
                },
                () => h() && t.label != null && typeof t.label == "string" ? { placeholder: t.label } : {},
                () => c(dt),
                {
                  onblur: (Fe) => {
                    var tt;
                    z(A, !1), z(j, !0), rt(P(), "blur", Fe), (tt = t.input$onblur) == null || tt.call(t, Fe);
                  },
                  onfocus: (Fe) => {
                    var tt;
                    z(A, !0), rt(P(), "focus", Fe), (tt = t.input$onfocus) == null || tt.call(t, Fe);
                  },
                  get value() {
                    return p();
                  },
                  set value(Fe) {
                    p(Fe);
                  },
                  get files() {
                    return E();
                  },
                  set files(Fe) {
                    E(Fe);
                  },
                  get dirty() {
                    return m();
                  },
                  set dirty(Fe) {
                    m(Fe);
                  },
                  get invalid() {
                    return y();
                  },
                  set invalid(Fe) {
                    y(Fe);
                  }
                }
              )),
              (Fe) => H(Fe),
              () => H()
            );
          }
          var Je = ie(bt, 2);
          {
            var ot = (dt) => {
              var Fe = W(), tt = V(Fe);
              {
                var pn = (st) => {
                  Ov(st, {
                    children: (_t, yt) => {
                      var Ft = Ct();
                      Ae(() => nt(Ft, t.suffix)), I(_t, Ft);
                    },
                    $$slots: { default: !0 }
                  });
                }, qt = (st) => {
                  var _t = W(), yt = V(_t);
                  oe(yt, () => t.suffix ?? Q), I(st, _t);
                };
                re(tt, (st) => {
                  typeof t.suffix == "string" ? st(pn) : st(qt, !1);
                });
              }
              I(dt, Fe);
            };
            re(Je, (dt) => {
              t.suffix != null && dt(ot);
            });
          }
          I(Re, Ze);
        };
        re(Ge, (Re) => {
          f() && typeof p() == "string" ? Re(ct) : Re(Ut, !1);
        });
      }
      var Ln = ie(Ge, 2);
      Ui(Ln, {
        key: "SMUI:textfield:icon:leading",
        value: !1,
        children: (Re, Ze) => {
          var et = W(), xt = V(et);
          oe(xt, () => t.trailingIcon ?? Q), I(Re, et);
        },
        $$slots: { default: !0 }
      });
      var ma = ie(Ln, 2);
      {
        var Tn = (Re) => {
          {
            let Ze = /* @__PURE__ */ pe(() => en(te, "ripple$"));
            Se(Av(Re, ut(() => c(Ze))), (et) => G(et), () => G());
          }
        };
        re(ma, (Re) => {
          !f() && v() !== "outlined" && s() && Re(Tn);
        });
      }
      Se(X, (Re) => R = Re, () => R), ze(X, (Re, Ze) => Hn == null ? void 0 : Hn(Re, Ze), () => ({
        ripple: !f() && v() === "filled",
        unbounded: !1,
        addClass: _e,
        removeClass: Ce,
        addStyle: fe,
        eventTarget: c($),
        activeTarget: c($),
        initPromise: Y
      })), ze(X, (Re, Ze) => q == null ? void 0 : q(Re, Ze), a), I(B, X);
    }, Kn = (B) => {
      var X = kv();
      Xe(X, (Ge, ct, Ut) => ({ class: Ge, style: ct, ...Ut }), [
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
        () => Object.entries(K).map(([Ge, ct]) => `${Ge}: ${ct};`).concat([l()]).join(" "),
        () => ea(te, ["input$", "label$", "ripple$", "outline$", "helperLine$"])
      ]);
      var Ye = ce(X);
      {
        var Qe = (Ge) => {
          var ct = W(), Ut = V(ct);
          oe(Ut, () => t.label ?? Q), I(Ge, ct);
        };
        re(Ye, (Ge) => {
          typeof t.label != "string" && Ge(Qe);
        });
      }
      var at = ie(Ye, 2);
      Ui(at, {
        key: "SMUI:textfield:icon:leading",
        value: !0,
        children: (Ge, ct) => {
          var Ut = W(), Ln = V(Ut);
          oe(Ln, () => t.leadingIcon ?? Q), I(Ge, Ut);
        },
        $$slots: { default: !0 }
      });
      var mt = ie(at, 2);
      oe(mt, () => t.children ?? Q);
      var Qt = ie(mt, 2);
      Ui(Qt, {
        key: "SMUI:textfield:icon:leading",
        value: !1,
        children: (Ge, ct) => {
          var Ut = W(), Ln = V(Ut);
          oe(Ln, () => t.trailingIcon ?? Q), I(Ge, Ut);
        },
        $$slots: { default: !0 }
      });
      var Cr = ie(Qt, 2);
      oe(Cr, () => t.line ?? Q), Se(X, (Ge) => R = Ge, () => R), ze(X, (Ge, ct) => Hn == null ? void 0 : Hn(Ge, ct), () => ({
        ripple: s(),
        unbounded: !1,
        addClass: _e,
        removeClass: Ce,
        addStyle: fe
      })), ze(X, (Ge, ct) => q == null ? void 0 : q(Ge, ct), a), I(B, X);
    };
    re(Kt, (B) => {
      ve ? B(wn) : B(Kn, !1);
    });
  }
  var on = ie(Kt, 2);
  {
    var k = (B) => {
      {
        let X = /* @__PURE__ */ pe(() => en(te, "helperLine$"));
        Lv(B, ut(() => c(X), {
          children: (Ye, Qe) => {
            var at = W(), mt = V(at);
            oe(mt, () => t.helper ?? Q), I(Ye, at);
          },
          $$slots: { default: !0 }
        }));
      }
    };
    re(on, (B) => {
      t.helper && B(k);
    });
  }
  return I(e, We), Le(ae);
}
var jv = /* @__PURE__ */ J("<i><!></i>");
function Vv(e, t) {
  we(t, !0);
  const n = () => Cn(g, "$leadingStore", r), [r, i] = Zn();
  let a = _(t, "use", 19, () => []), o = _(t, "class", 3, ""), l = _(t, "tabindex", 19, () => t.role === "button" ? 0 : -1), s = _(t, "disabled", 3, !1), u = /* @__PURE__ */ Ve(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "role",
    "tabindex",
    "disabled",
    "children"
  ]), d, f = /* @__PURE__ */ ye(void 0), v = new ti(), h = be({});
  const g = me("SMUI:textfield:icon:leading"), p = n();
  let E = /* @__PURE__ */ ye(void 0);
  const y = /* @__PURE__ */ pe(() => ({ role: t.role, tabindex: l() })), L = me("SMUI:textfield:leading-icon:mount"), x = me("SMUI:textfield:leading-icon:unmount"), m = me("SMUI:textfield:trailing-icon:mount"), S = me("SMUI:textfield:trailing-icon:unmount");
  gt(() => (z(
    f,
    new yv({
      getAttr: b,
      setAttr: C,
      removeAttr: w,
      setContent: (D) => {
        z(E, D, !0);
      },
      registerInteractionHandler: (D, O) => v.on(H(), D, O),
      deregisterInteractionHandler: (D, O) => v.off(H(), D, O),
      notifyIconAction: () => rt(H(), "SMUITextFieldIcon")
    }),
    !0
  ), p ? L && L(c(f)) : m && m(c(f)), c(f).init(), () => {
    var D;
    c(f) && (p ? x && x(c(f)) : S && S(c(f))), (D = c(f)) == null || D.destroy(), v.clear();
  }));
  function b(D) {
    return D in h ? h[D] ?? null : H().getAttribute(D);
  }
  function C(D, O) {
    h[D] !== O && (h[D] = O);
  }
  function w(D) {
    (!(D in h) || h[D] != null) && (h[D] = void 0);
  }
  function H() {
    return d;
  }
  var M = { getElement: H }, G = jv();
  Xe(
    G,
    (D) => ({
      class: D,
      "aria-hidden": l() === -1 ? "true" : "false",
      "aria-disabled": t.role === "button" ? s() ? "true" : "false" : void 0,
      ...c(y),
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
  var Z = ce(G);
  {
    var te = (D) => {
      var O = W(), N = V(O);
      oe(N, () => t.children ?? Q), I(D, O);
    }, ve = (D) => {
      var O = Ct();
      Ae(() => nt(O, c(E))), I(D, O);
    };
    re(Z, (D) => {
      c(E) == null ? D(te) : D(ve, !1);
    });
  }
  Se(G, (D) => d = D, () => d), ze(G, (D, O) => q == null ? void 0 : q(D, O), a), I(e, G);
  var R = Le(M);
  return i(), R;
}
function Da(e, t) {
  we(t, !0);
  let n = _(t, "placeholder", 3, ""), r = _(t, "label", 3, ""), i = _(t, "icon", 3, ""), a = _(t, "value", 15, ""), o = _(t, "variant", 3, "standard"), l = _(t, "styles", 3, ""), s = _(t, "required", 3, !1);
  var u = W(), d = V(u);
  {
    var f = (h) => {
      {
        const g = (E) => {
          Vv(E, {
            class: "material-icons",
            children: (y, L) => {
              var x = Ct();
              Ae(() => nt(x, i())), I(y, x);
            },
            $$slots: { default: !0 }
          });
        };
        let p = /* @__PURE__ */ pe(() => `width: 100%; ${l()}`);
        As(h, {
          get label() {
            return r();
          },
          get required() {
            return s();
          },
          get placeholder() {
            return n();
          },
          get style() {
            return c(p);
          },
          get variant() {
            return o();
          },
          get value() {
            return a();
          },
          set value(E) {
            a(E);
          },
          leadingIcon: g,
          $$slots: { leadingIcon: !0 }
        });
      }
    }, v = (h) => {
      As(h, {
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
          return s();
        },
        get value() {
          return a();
        },
        set value(g) {
          a(g);
        }
      });
    };
    re(d, (h) => {
      i() ? h(f) : h(v, !1);
    });
  }
  I(e, u), Le();
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
function qv(e) {
  return !!e.document && typeof e.document.createElement == "function";
}
function zv(e, t) {
  if (qv(e) && t in Is) {
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
var Qv = (
  /** @class */
  function(e) {
    pt(t, e);
    function t(n) {
      var r = e.call(this, ee(ee({}, t.defaultAdapter), n)) || this;
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
), Jv = /* @__PURE__ */ J('<div class="mdc-dialog__surface-scrim"></div>'), $v = /* @__PURE__ */ J('<div><div><div><!> <!></div></div> <div class="mdc-dialog__scrim"></div></div> <!>', 1);
function eg(e, t) {
  we(t, !0);
  const n = () => Cn(Z, "$aboveFullscreenShown", r), [r, i] = Zn(), { FocusTrap: a } = Yh, { closest: o, matches: l } = Ro;
  let s = _(t, "use", 19, () => []), u = _(t, "class", 3, ""), d = _(t, "open", 15, !1), f = _(t, "selection", 3, !1), v = _(t, "escapeKeyAction", 3, "close"), h = _(t, "scrimClickAction", 3, "close"), g = _(t, "autoStackButtons", 3, !0), p = _(t, "fullscreen", 3, !1), E = _(t, "sheet", 3, !1), y = _(t, "noContentPadding", 3, !1), L = _(t, "container$class", 3, ""), x = _(t, "surface$class", 3, ""), m = /* @__PURE__ */ Ve(t, [
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
  ]), S, b = /* @__PURE__ */ ye(void 0), C = new ti(), w = be({}), H, M = Rt(!1), G = me("SMUI:dialog:aboveFullscreen"), Z = me("SMUI:dialog:aboveFullscreenShown") ?? Rt(!1), te = me("SMUI:addLayoutListener"), ve, R = [], D = (k) => (R.push(k), () => {
    const B = R.indexOf(k);
    B >= 0 && R.splice(B, 1);
  });
  se("SMUI:dialog:actions:reversed", M), se("SMUI:addLayoutListener", D), se("SMUI:dialog:selection", f()), se("SMUI:dialog:aboveFullscreen", G || p()), se("SMUI:dialog:aboveFullscreenShown", Z), E() && se("SMUI:icon-button:context", "dialog:sheet"), Ue(() => {
    c(b) && c(b).getEscapeKeyAction() !== v() && c(b).setEscapeKeyAction(v());
  }), Ue(() => {
    c(b) && c(b).getScrimClickAction() !== h() && c(b).setScrimClickAction(h());
  }), Ue(() => {
    c(b) && c(b).getAutoStackButtons() !== g() && c(b).setAutoStackButtons(g());
  }), Ue(() => {
    g() || Un(M, !0);
  }), te && (ve = te(Pe)), Ue(() => {
    c(b) && c(b).isOpen() !== d() && (d() ? c(b).open({ isAboveFullscreenDialog: !!G }) : c(b).close());
  });
  let O = n();
  Ue(() => {
    p() && c(b) && O !== n() && (O = n(), n() ? c(b).showSurfaceScrim() : c(b).hideSurfaceScrim());
  }), gt(() => (H = new a(S, { initialFocusEl: de() ?? void 0 }), z(
    b,
    new Qv({
      addBodyClass: (k) => document.body.classList.add(k),
      addClass: K,
      areButtonsStacked: () => Yv(A()),
      clickDefaultButton: () => {
        const k = j();
        k && k.click();
      },
      eventTargetMatches: (k, B) => k ? l(k, B) : !1,
      getActionFromEvent: (k) => {
        if (!k.target)
          return "";
        const B = o(k.target, "[data-mdc-dialog-action]");
        return B && B.getAttribute("data-mdc-dialog-action");
      },
      getInitialFocusEl: de,
      hasClass: N,
      isContentScrollable: () => Xv(ge()),
      notifyClosed: (k) => {
        d(!1), rt($(), "SMUIDialogClosed", k ? { action: k } : {});
      },
      notifyClosing: (k) => rt($(), "SMUIDialogClosing", k ? { action: k } : {}),
      notifyOpened: () => rt($(), "SMUIDialogOpened", {}),
      notifyOpening: () => rt($(), "SMUIDialogOpening", {}),
      releaseFocus: () => H.releaseFocus(),
      removeBodyClass: (k) => document.body.classList.remove(k),
      removeClass: U,
      reverseButtons: () => {
        Un(M, !0);
      },
      trapFocus: () => H.trapFocus(),
      registerContentEventHandler: (k, B) => {
        const X = ge();
        X instanceof HTMLElement && C.on(X, k, B);
      },
      deregisterContentEventHandler: (k, B) => {
        const X = ge();
        X instanceof HTMLElement && C.off(X, k, B);
      },
      isScrollableContentAtTop: () => Wv(ge()),
      isScrollableContentAtBottom: () => Zv(ge()),
      registerWindowEventHandler: (k, B) => C.on(window, k, B),
      deregisterWindowEventHandler: (k, B) => C.off(window, k, B)
    }),
    !0
  ), c(b).init(), () => {
    var k;
    (k = c(b)) == null || k.destroy(), C.clear();
  })), _r(() => {
    ve && ve();
  });
  function N(k) {
    return k in w ? w[k] : $().classList.contains(k);
  }
  function K(k) {
    w[k] || (w[k] = !0);
  }
  function U(k) {
    (!(k in w) || w[k]) && (w[k] = !1);
  }
  function A() {
    return [].slice.call($().querySelectorAll(".mdc-dialog__button"));
  }
  function j() {
    return $().querySelector("[data-mdc-dialog-button-default]");
  }
  function ge() {
    return $().querySelector(".mdc-dialog__content");
  }
  function de() {
    return $().querySelector("[data-mdc-dialog-initial-focus]");
  }
  function le() {
    G && Un(Z, !0), requestAnimationFrame(() => {
      R.forEach((k) => k());
    });
  }
  function Y() {
    R.forEach((k) => k());
  }
  function ne() {
    G && Un(Z, !1);
  }
  function ue() {
    return d();
  }
  function Ee(k) {
    d(k);
  }
  function Pe() {
    var k;
    return (k = c(b)) == null ? void 0 : k.layout();
  }
  function $() {
    return S;
  }
  var Te = { isOpen: ue, setOpen: Ee, layout: Pe, getElement: $ }, Oe = $v();
  Lr("resize", Yi, () => d() && c(b) && c(b).layout()), Lr("orientationchange", Yi, () => d() && c(b) && c(b).layout()), Lr("keydown", ul.body, (k) => c(b) && c(b).handleDocumentKeydown(k));
  var _e = V(Oe), Ce = (k) => {
    var B;
    le(), (B = t.onSMUIDialogOpening) == null || B.call(t, k);
  }, fe = (k) => {
    var B;
    Y(), (B = t.onSMUIDialogOpened) == null || B.call(t, k);
  }, Me = (k) => {
    var B;
    ne(), (B = t.onSMUIDialogClosed) == null || B.call(t, k);
  }, $e = (k) => {
    var B;
    c(b) && c(b).handleClick(k), (B = t.onclick) == null || B.call(t, k);
  }, T = (k) => {
    var B;
    c(b) && c(b).handleKeydown(k), (B = t.onkeydown) == null || B.call(t, k);
  };
  Xe(
    _e,
    (k, B) => ({
      class: k,
      role: "alertdialog",
      "aria-modal": "true",
      ...B,
      onSMUIDialogOpening: Ce,
      onSMUIDialogOpened: fe,
      onSMUIDialogClosed: Me,
      onclick: $e,
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
      () => ea(m, ["container$", "surface$"])
    ]
  );
  var P = ce(_e);
  Xe(P, (k, B) => ({ class: k, ...B }), [
    () => je({ "mdc-dialog__container": !0, [L()]: !0 }),
    () => en(m, "container$")
  ]);
  var ae = ce(P);
  Xe(ae, (k, B) => ({ class: k, role: "alertdialog", "aria-modal": "true", ...B }), [
    () => je({ "mdc-dialog__surface": !0, [x()]: !0 }),
    () => en(m, "surface$")
  ]);
  var We = ce(ae);
  oe(We, () => t.children ?? Q);
  var Kt = ie(We, 2);
  {
    var wn = (k) => {
      var B = Jv();
      Lr("transitionend", B, () => c(b) && c(b).handleSurfaceScrimTransitionEnd()), I(k, B);
    };
    re(Kt, (k) => {
      p() && k(wn);
    });
  }
  Se(_e, (k) => S = k, () => S), ze(_e, (k, B) => q == null ? void 0 : q(k, B), s);
  var Kn = ie(_e, 2);
  oe(Kn, () => t.over ?? Q), I(e, Oe);
  var on = Le(Te);
  return i(), on;
}
function tg(e, t) {
  we(t, !0);
  let n = /* @__PURE__ */ Ve(t, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return Se(
    wi(e, ut({ _smuiClass: "mdc-dialog__content", tag: "div" }, () => n, {
      children: (o, l) => {
        var s = W(), u = V(s);
        oe(u, () => t.children ?? Q), I(o, s);
      },
      $$slots: { default: !0 }
    })),
    (o) => r = o,
    () => r
  ), Le(a);
}
function ng(e, t) {
  we(t, !0);
  let n = /* @__PURE__ */ Ve(t, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return Se(
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
        children: (o, l) => {
          var s = W(), u = V(s);
          oe(u, () => t.children ?? Q), I(o, s);
        },
        $$slots: { default: !0 }
      }
    )),
    (o) => r = o,
    () => r
  ), Le(a);
}
var rg = /* @__PURE__ */ J('<div class="dialog-title svelte-187m1sc"><!></div> <!> <!>', 1);
function xs(e, t) {
  we(t, !0);
  let n = _(t, "open", 15, !1), r = _(t, "onClose", 3, () => {
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
      var o = rg(), l = V(o), s = ce(l);
      oe(s, () => t.title ?? Q);
      var u = ie(l, 2);
      tg(u, {
        id: "large-scroll-content",
        children: (f, v) => {
          var h = W(), g = V(h);
          oe(g, () => t.content ?? Q), I(f, h);
        },
        $$slots: { default: !0 }
      });
      var d = ie(u, 2);
      ng(d, {
        children: (f, v) => {
          var h = W(), g = V(h);
          oe(g, () => t.actions ?? Q), I(f, h);
        },
        $$slots: { default: !0 }
      }), I(i, o);
    },
    $$slots: { default: !0 }
  }), Le();
}
const ft = [];
for (let e = 0; e < 256; ++e)
  ft.push((e + 256).toString(16).slice(1));
function ig(e, t = 0) {
  return (ft[e[t + 0]] + ft[e[t + 1]] + ft[e[t + 2]] + ft[e[t + 3]] + "-" + ft[e[t + 4]] + ft[e[t + 5]] + "-" + ft[e[t + 6]] + ft[e[t + 7]] + "-" + ft[e[t + 8]] + ft[e[t + 9]] + "-" + ft[e[t + 10]] + ft[e[t + 11]] + ft[e[t + 12]] + ft[e[t + 13]] + ft[e[t + 14]] + ft[e[t + 15]]).toLowerCase();
}
let Ma;
const ag = new Uint8Array(16);
function og() {
  if (!Ma) {
    if (typeof crypto > "u" || !crypto.getRandomValues)
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    Ma = crypto.getRandomValues.bind(crypto);
  }
  return Ma(ag);
}
const sg = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), ws = { randomUUID: sg };
function lg(e, t, n) {
  var i;
  if (ws.randomUUID && !t && !e)
    return ws.randomUUID();
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
function xn(e, t) {
  var n = ug(), r = ce(n);
  oe(r, () => t.children ?? Q), I(e, n);
}
var cg = /* @__PURE__ */ Vt('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"></path></svg>');
function du(e, t) {
  let n = _(t, "svgStyles", 3, "");
  xn(e, {
    children: (r, i) => {
      var a = cg();
      Ae(() => Pt(a, n())), I(r, a);
    }
  });
}
var dg = /* @__PURE__ */ Vt('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="24px"><path d="m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"></path></svg>');
function so(e, t) {
  let n = _(t, "svgStyles", 3, "");
  xn(e, {
    children: (r, i) => {
      var a = dg();
      Ae(() => Pt(a, n())), I(r, a);
    }
  });
}
var fg = /* @__PURE__ */ Vt('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z"></path></svg>');
function hg(e, t) {
  let n = _(t, "svgStyles", 3, "");
  xn(e, {
    children: (r, i) => {
      var a = fg();
      Ae(() => Pt(a, n())), I(r, a);
    }
  });
}
var vg = /* @__PURE__ */ Vt('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="m590-160 80 80H240q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h360l200 240v480q0 20-8.5 36.5T768-96L560-302q-17 11-37 16.5t-43 5.5q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 23-5.5 43T618-360l102 104v-356L562-800H240v640h350ZM480-360q33 0 56.5-23.5T560-440q0-33-23.5-56.5T480-520q-33 0-56.5 23.5T400-440q0 33 23.5 56.5T480-360Zm0-80Zm0 0Z"></path></svg>');
function gg(e, t) {
  let n = _(t, "svgStyles", 3, "");
  xn(e, {
    children: (r, i) => {
      var a = vg();
      Ae(() => Pt(a, n())), I(r, a);
    }
  });
}
var pg = /* @__PURE__ */ Vt('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-160q-134 0-227-93t-93-227q0-134 93-227t227-93q69 0 132 28.5T720-690v-110h80v280H520v-80h168q-32-56-87.5-88T480-720q-100 0-170 70t-70 170q0 100 70 170t170 70q77 0 139-44t87-116h84q-28 106-114 173t-196 67Z"></path></svg>');
function fu(e, t) {
  let n = _(t, "svgStyles", 3, "");
  xn(e, {
    children: (r, i) => {
      var a = pg();
      Ae(() => Pt(a, n())), I(r, a);
    }
  });
}
var mg = /* @__PURE__ */ Vt('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M840-680v480q0 33-23.5 56.5T760-120H200q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h480l160 160Zm-80 34L646-760H200v560h560v-446ZM480-240q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35ZM240-560h360v-160H240v160Zm-40-86v446-560 114Z"></path></svg>');
function Ls(e, t) {
  let n = _(t, "svgStyles", 3, "");
  xn(e, {
    children: (r, i) => {
      var a = mg();
      Ae(() => Pt(a, n())), I(r, a);
    }
  });
}
var bg = /* @__PURE__ */ Vt('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M200-440v-80h560v80H200Z"></path></svg>');
function _g(e, t) {
  let n = _(t, "svgStyles", 3, "");
  xn(e, {
    children: (r, i) => {
      var a = bg();
      Ae(() => Pt(a, n())), I(r, a);
    }
  });
}
var yg = /* @__PURE__ */ Vt('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"></path></svg>');
function Eg(e, t) {
  let n = _(t, "svgStyles", 3, "");
  xn(e, {
    children: (r, i) => {
      var a = yg();
      Ae(() => Pt(a, n())), I(r, a);
    }
  });
}
var Sg = /* @__PURE__ */ Vt('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"></path></svg>');
function Cg(e, t) {
  let n = _(t, "svgStyles", 3, "");
  xn(e, {
    children: (r, i) => {
      var a = Sg();
      Ae(() => Pt(a, n())), I(r, a);
    }
  });
}
oc();
Wn(["change"]);
var Ag = /* @__PURE__ */ J('<div class="overlay svelte-14uvd2z"><div class="loading-spinner-container svelte-14uvd2z"><div class="loading-spinner svelte-14uvd2z"></div> <span class="loading-message svelte-14uvd2z"> </span></div></div>'), Ig = /* @__PURE__ */ J('<div class="svelte-14uvd2z"><!></div>');
function Ts(e, t) {
  let n = _(t, "loadingDone", 3, !0), r = _(t, "message", 3, "Loading...");
  var i = Ig(), a = ce(i);
  {
    var o = (l) => {
      var s = Ag(), u = ce(s), d = ie(ce(u), 2), f = ce(d);
      Ae(() => nt(f, r())), I(l, s);
    };
    re(a, (l) => {
      n() || l(o);
    });
  }
  I(e, i);
}
Wn(["change"]);
var xg = /* @__PURE__ */ J('<span role="tooltip" aria-labelledby="tooltip"><!></span>');
function Os(e, t) {
  we(t, !0);
  let n = _(t, "content", 3, ""), r = _(t, "side", 3, "top"), i = _(t, "hoverDelay", 3, 0), a = _(t, "transitionDuration", 3, 80);
  const o = `tt-${Math.random().toString(36).slice(2)}`;
  let l = /* @__PURE__ */ ye(null), s = /* @__PURE__ */ ye(null), u = /* @__PURE__ */ ye(null), d = /* @__PURE__ */ ye(null), f = /* @__PURE__ */ ye(!1), v = /* @__PURE__ */ ye(null), h = /* @__PURE__ */ ye(null);
  function g() {
    n() && (i() > 0 ? z(v, setTimeout(() => z(f, !0), i()), !0) : z(f, !0));
  }
  function p() {
    c(v) && clearTimeout(c(v)), z(f, !1);
  }
  function E() {
    if (!c(s) || !c(d) || !c(l)) return;
    const m = c(l).getBoundingClientRect(), S = c(d).getBoundingClientRect();
    let b = 0, C = 0;
    const w = 8;
    switch (r()) {
      case "top":
        b = m.top - S.height - w, C = m.left + m.width / 2 - S.width / 2;
        break;
      case "bottom":
        b = m.bottom + w, C = m.left + m.width / 2 - S.width / 2;
        break;
      case "left":
        b = m.top + m.height / 2 - S.height / 2, C = m.left - S.width - w;
        break;
      case "right":
        b = m.top + m.height / 2 - S.height / 2, C = m.right + w;
        break;
    }
    c(s).style.top = `${b + window.scrollY}px`, c(s).style.left = `${C + window.scrollX}px`;
  }
  function y() {
    var m;
    (m = c(h)) == null || m.disconnect(), z(h, null), c(s) && c(s).parentNode && c(s).parentNode.removeChild(c(s)), z(s, null), z(d, null), z(u, null), c(v) && clearTimeout(c(v));
  }
  _r(y), Ue(() => {
    if (!(!c(f) || !n())) {
      if (!c(s)) {
        z(s, document.createElement("div"), !0), c(s).style.position = "absolute", c(s).style.zIndex = "9999", c(s).style.pointerEvents = "none", c(s).style.opacity = "0", c(s).style.transition = `opacity ${a()}ms ease`, c(s).id = o, c(s).setAttribute("role", "tooltip"), document.body.appendChild(c(s)), z(u, c(s).attachShadow({ mode: "open" }), !0);
        const m = document.createElement("style");
        m.textContent = `
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
      `, c(u).appendChild(m), z(d, document.createElement("div"), !0), c(u).appendChild(c(d)), z(
          h,
          new MutationObserver(() => {
            c(f) && E();
          }),
          !0
        ), c(h).observe(document.body, { childList: !0, subtree: !0 });
      }
      c(d) && (c(d).className = `bubble ${r()}`, c(d).innerHTML = n()), c(s) && (c(s).style.opacity = "1", E());
    }
  }), Ue(() => {
    if (c(f) || !c(s))
      return;
    c(s).style.opacity = "0";
    const m = c(s), S = setTimeout(
      () => {
        m && m.parentNode && m.parentNode.removeChild(m), c(s) === m && y();
      },
      a()
    );
    return () => clearTimeout(S);
  });
  var L = xg(), x = ce(L);
  oe(x, () => t.children ?? Q), Se(L, (m) => z(l, m), () => c(l)), Ae(() => qr(L, "aria-describedby", n() ? o : void 0)), Lr("mouseenter", L, g), Lr("mouseleave", L, p), I(e, L), Le();
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
var Nt = {
  CLOSED_CLASS: "mdc-linear-progress--closed",
  CLOSED_ANIMATION_OFF_CLASS: "mdc-linear-progress--closed-animation-off",
  INDETERMINATE_CLASS: "mdc-linear-progress--indeterminate",
  REVERSED_CLASS: "mdc-linear-progress--reversed",
  ANIMATION_READY_CLASS: "mdc-linear-progress--animation-ready"
}, Jt = {
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
var wg = (
  /** @class */
  function(e) {
    pt(t, e);
    function t(n) {
      var r = e.call(this, ee(ee({}, t.defaultAdapter), n)) || this;
      return r.observer = null, r;
    }
    return Object.defineProperty(t, "cssClasses", {
      get: function() {
        return Nt;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t, "strings", {
      get: function() {
        return Jt;
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
      this.determinate = !this.adapter.hasClass(Nt.INDETERMINATE_CLASS), this.adapter.addClass(Nt.ANIMATION_READY_CLASS), this.progress = 0, this.buffer = 1, this.observer = this.adapter.attachResizeObserver(function(r) {
        var i, a;
        if (!n.determinate)
          try {
            for (var o = It(r), l = o.next(); !l.done; l = o.next()) {
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
        this.adapter.removeClass(Nt.INDETERMINATE_CLASS), this.adapter.setAttribute(Jt.ARIA_VALUENOW, this.progress.toString()), this.adapter.setAttribute(Jt.ARIA_VALUEMAX, "1"), this.adapter.setAttribute(Jt.ARIA_VALUEMIN, "0"), this.setPrimaryBarProgress(this.progress), this.setBufferBarProgress(this.buffer);
        return;
      }
      this.observer && this.calculateAndSetDimensions(this.adapter.getWidth()), this.adapter.addClass(Nt.INDETERMINATE_CLASS), this.adapter.removeAttribute(Jt.ARIA_VALUENOW), this.adapter.removeAttribute(Jt.ARIA_VALUEMAX), this.adapter.removeAttribute(Jt.ARIA_VALUEMIN), this.setPrimaryBarProgress(1), this.setBufferBarProgress(1);
    }, t.prototype.isDeterminate = function() {
      return this.determinate;
    }, t.prototype.setProgress = function(n) {
      this.progress = n, this.determinate && (this.setPrimaryBarProgress(n), this.adapter.setAttribute(Jt.ARIA_VALUENOW, n.toString()));
    }, t.prototype.getProgress = function() {
      return this.progress;
    }, t.prototype.setBuffer = function(n) {
      this.buffer = n, this.determinate && this.setBufferBarProgress(n);
    }, t.prototype.getBuffer = function() {
      return this.buffer;
    }, t.prototype.open = function() {
      this.adapter.removeClass(Nt.CLOSED_CLASS), this.adapter.removeClass(Nt.CLOSED_ANIMATION_OFF_CLASS), this.adapter.removeAttribute(Jt.ARIA_HIDDEN);
    }, t.prototype.close = function() {
      this.adapter.addClass(Nt.CLOSED_CLASS), this.adapter.setAttribute(Jt.ARIA_HIDDEN, "true");
    }, t.prototype.isClosed = function() {
      return this.adapter.hasClass(Nt.CLOSED_CLASS);
    }, t.prototype.handleTransitionEnd = function() {
      this.adapter.hasClass(Nt.CLOSED_CLASS) && this.adapter.addClass(Nt.CLOSED_ANIMATION_OFF_CLASS);
    }, t.prototype.destroy = function() {
      e.prototype.destroy.call(this), this.observer && this.observer.disconnect();
    }, t.prototype.restartAnimation = function() {
      this.adapter.removeClass(Nt.ANIMATION_READY_CLASS), this.adapter.forceLayout(), this.adapter.addClass(Nt.ANIMATION_READY_CLASS);
    }, t.prototype.setPrimaryBarProgress = function(n) {
      var r = "scaleX(" + n + ")", i = typeof window < "u" ? zv(window, "transform") : "transform";
      this.adapter.setPrimaryBarStyle(i, r);
    }, t.prototype.setBufferBarProgress = function(n) {
      var r = n * 100 + "%";
      this.adapter.setBufferBarStyle(Jt.FLEX_BASIS, r);
    }, t.prototype.calculateAndSetDimensions = function(n) {
      var r = n * li.PRIMARY_HALF, i = n * li.PRIMARY_FULL, a = n * li.SECONDARY_QUARTER, o = n * li.SECONDARY_HALF, l = n * li.SECONDARY_FULL;
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
}, Rs = {
  ARIA_SELECTED: "aria-selected",
  ARIA_SORT: "aria-sort"
}, tr = {
  ARIA_SELECTED: Rs.ARIA_SELECTED,
  ARIA_SORT: Rs.ARIA_SORT
}, Gt;
(function(e) {
  e.ASCENDING = "ascending", e.DESCENDING = "descending", e.NONE = "none", e.OTHER = "other";
})(Gt || (Gt = {}));
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
var Lg = (
  /** @class */
  function(e) {
    pt(t, e);
    function t(n) {
      return e.call(this, ee(ee({}, t.defaultAdapter), n)) || this;
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
        o !== i && (this.adapter.removeClassNameByHeaderCellIndex(o, bn.HEADER_CELL_SORTED), this.adapter.removeClassNameByHeaderCellIndex(o, bn.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(o, tr.ARIA_SORT, Gt.NONE), this.adapter.setSortStatusLabelByHeaderCellIndex(o, Gt.NONE));
      this.adapter.setClassNameByHeaderCellIndex(i, bn.HEADER_CELL_SORTED);
      var l = this.adapter.getAttributeByHeaderCellIndex(i, tr.ARIA_SORT), s = Gt.NONE;
      l === Gt.ASCENDING ? (this.adapter.setClassNameByHeaderCellIndex(i, bn.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(i, tr.ARIA_SORT, Gt.DESCENDING), s = Gt.DESCENDING) : l === Gt.DESCENDING ? (this.adapter.removeClassNameByHeaderCellIndex(i, bn.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(i, tr.ARIA_SORT, Gt.ASCENDING), s = Gt.ASCENDING) : (this.adapter.setAttributeByHeaderCellIndex(i, tr.ARIA_SORT, Gt.ASCENDING), s = Gt.ASCENDING), this.adapter.setSortStatusLabelByHeaderCellIndex(i, s), this.adapter.notifySortAction({
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
      r ? (this.adapter.addClassAtRowIndex(n, bn.ROW_SELECTED), this.adapter.setAttributeAtRowIndex(n, tr.ARIA_SELECTED, "true")) : (this.adapter.removeClassAtRowIndex(n, bn.ROW_SELECTED), this.adapter.setAttributeAtRowIndex(n, tr.ARIA_SELECTED, "false"));
    }, t;
  }(gn)
), Tg = /* @__PURE__ */ J('<div class="mdc-data-table__progress-indicator"><div class="mdc-data-table__scrim"></div> <!></div>'), Og = /* @__PURE__ */ J("<div><div><table><!></table></div> <!> <!></div>");
function Rg(e, t) {
  we(t, !0);
  const n = () => Cn(te, "$progressClosed", r), [r, i] = Zn(), { closest: a } = Ro;
  let o = _(t, "use", 19, () => []), l = _(t, "class", 3, ""), s = _(t, "stickyHeader", 3, !1), u = _(t, "sortable", 3, !1), d = _(t, "sort", 15, null), f = _(t, "sortDirection", 15, "ascending"), v = _(t, "sortAscendingAriaLabel", 3, "sorted, ascending"), h = _(t, "sortDescendingAriaLabel", 3, "sorted, descending"), g = _(t, "container$use", 19, () => []), p = _(t, "container$class", 3, ""), E = _(t, "table$use", 19, () => []), y = _(t, "table$class", 3, ""), L = /* @__PURE__ */ Ve(t, [
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
  ]), x, m = /* @__PURE__ */ ye(void 0), S, b = /* @__PURE__ */ ye(void 0), C = /* @__PURE__ */ ye(void 0), w = be({}), H = /* @__PURE__ */ ye(be({ height: "auto", top: "initial" })), M = me("SMUI:addLayoutListener"), G, Z = !1, te = Rt(!1), ve = Rt(d());
  Ue(() => {
    Un(ve, d());
  });
  let R = Rt(f());
  Ue(() => {
    Un(R, f());
  }), se("SMUI:checkbox:context", "data-table"), se("SMUI:linear-progress:context", "data-table"), se("SMUI:linear-progress:closed", te), se("SMUI:data-table:sortable", u()), se("SMUI:data-table:sort", ve), se("SMUI:data-table:sortDirection", R), se("SMUI:data-table:sortAscendingAriaLabel", v()), se("SMUI:data-table:sortDescendingAriaLabel", h()), M && (G = M(de));
  let D;
  Ue(() => {
    t.progress && c(m) && D !== n() && (D = n(), n() ? c(m).hideProgress() : c(m).showProgress());
  }), se("SMUI:checkbox:mount", () => {
    c(m) && Z && c(m).layout();
  }), se("SMUI:data-table:header:mount", (T) => {
    z(b, T, !0);
  }), se("SMUI:data-table:header:unmount", () => {
    z(b, void 0);
  }), se("SMUI:data-table:body:mount", (T) => {
    z(C, T, !0);
  }), se("SMUI:data-table:body:unmount", () => {
    z(C, void 0);
  }), gt(() => (z(
    m,
    new Lg({
      addClass: N,
      removeClass: K,
      getHeaderCellElements: () => {
        var T;
        return ((T = c(b)) == null ? void 0 : T.cells.map((P) => P.element)) ?? [];
      },
      getHeaderCellCount: () => {
        var T;
        return ((T = c(b)) == null ? void 0 : T.cells.length) ?? 0;
      },
      getAttributeByHeaderCellIndex: (T, P) => {
        var ae;
        return ((ae = c(b)) == null ? void 0 : ae.orderedCells[T].getAttr(P)) ?? null;
      },
      setAttributeByHeaderCellIndex: (T, P, ae) => {
        var We;
        (We = c(b)) == null || We.orderedCells[T].addAttr(P, ae);
      },
      setClassNameByHeaderCellIndex: (T, P) => {
        var ae;
        (ae = c(b)) == null || ae.orderedCells[T].addClass(P);
      },
      removeClassNameByHeaderCellIndex: (T, P) => {
        var ae;
        (ae = c(b)) == null || ae.orderedCells[T].removeClass(P);
      },
      notifySortAction: (T) => {
        d(T.columnId), f(T.sortValue), rt(le(), "SMUIDataTableSorted", T);
      },
      getTableContainerHeight: () => S.getBoundingClientRect().height,
      getTableHeaderHeight: () => {
        const T = le().querySelector(".mdc-data-table__header-row");
        if (!T)
          throw new Error("MDCDataTable: Table header element not found.");
        return T.getBoundingClientRect().height;
      },
      setProgressIndicatorStyles: (T) => {
        z(H, T, !0);
      },
      addClassAtRowIndex: (T, P) => {
        var ae;
        (ae = c(C)) == null || ae.orderedRows[T].addClass(P);
      },
      getRowCount: () => {
        var T;
        return ((T = c(C)) == null ? void 0 : T.rows.length) ?? 0;
      },
      getRowElements: () => {
        var T;
        return ((T = c(C)) == null ? void 0 : T.rows.map((P) => P.element)) ?? [];
      },
      getRowIdAtIndex: (T) => {
        var P;
        return ((P = c(C)) == null ? void 0 : P.orderedRows[T].rowId) ?? null;
      },
      getRowIndexByChildElement: (T) => {
        var P;
        return ((P = c(C)) == null ? void 0 : P.orderedRows.map((ae) => ae.element).indexOf(a(T, ".mdc-data-table__row"))) ?? -1;
      },
      getSelectedRowCount: () => {
        var T;
        return ((T = c(C)) == null ? void 0 : T.rows.filter((P) => P.selected).length) ?? 0;
      },
      isCheckboxAtRowIndexChecked: (T) => {
        var ae;
        const P = (ae = c(C)) == null ? void 0 : ae.orderedRows[T].checkbox;
        return P ? P.checked : !1;
      },
      isHeaderRowCheckboxChecked: () => {
        var P;
        const T = (P = c(b)) == null ? void 0 : P.checkbox;
        return T ? T.checked : !1;
      },
      isRowsSelectable: () => !!le().querySelector(".mdc-data-table__row-checkbox") || !!le().querySelector(".mdc-data-table__header-row-checkbox"),
      notifyRowSelectionChanged: (T) => {
        var ae;
        const P = (ae = c(C)) == null ? void 0 : ae.orderedRows[T.rowIndex];
        P && rt(le(), "SMUIDataTableSelectionChanged", {
          row: P.element,
          rowId: P.rowId,
          rowIndex: T.rowIndex,
          selected: T.selected
        });
      },
      notifySelectedAll: () => {
        U(!1), rt(le(), "SMUIDataTableSelectedAll");
      },
      notifyUnselectedAll: () => {
        U(!1), rt(le(), "SMUIDataTableUnselectedAll");
      },
      notifyRowClick: (T) => rt(le(), "SMUIDataTableClickRow", T),
      registerHeaderRowCheckbox: () => {
      },
      registerRowCheckboxes: () => {
      },
      removeClassAtRowIndex: (T, P) => {
        var ae;
        (ae = c(C)) == null || ae.orderedRows[T].removeClass(P);
      },
      setAttributeAtRowIndex: (T, P, ae) => {
        var We;
        (We = c(C)) == null || We.orderedRows[T].addAttr(P, ae);
      },
      setHeaderRowCheckboxChecked: (T) => {
        var ae;
        const P = (ae = c(b)) == null ? void 0 : ae.checkbox;
        P && (P.checked = T);
      },
      setHeaderRowCheckboxIndeterminate: U,
      setRowCheckboxCheckedAtIndex: (T, P) => {
        var We;
        const ae = (We = c(C)) == null ? void 0 : We.orderedRows[T].checkbox;
        ae && (ae.checked = P);
      },
      setSortStatusLabelByHeaderCellIndex: (T, P) => {
      }
    }),
    !0
  ), c(m).init(), c(m).layout(), Z = !0, () => {
    var T;
    (T = c(m)) == null || T.destroy();
  })), _r(() => {
    G && G();
  });
  function O(T) {
    c(m) && c(m).handleRowCheckboxChange(T);
  }
  function N(T) {
    w[T] || (w[T] = !0);
  }
  function K(T) {
    (!(T in w) || w[T]) && (w[T] = !1);
  }
  function U(T) {
    var ae;
    const P = (ae = c(b)) == null ? void 0 : ae.checkbox;
    P && (P.indeterminate = T);
  }
  function A(T) {
    if (!c(m) || !T.detail.target)
      return;
    const P = a(T.detail.target, ".mdc-data-table__header-cell--with-sort");
    P && ge(P);
  }
  function j(T) {
    if (!c(m) || !T.detail.target)
      return;
    const P = a(T.detail.target, ".mdc-data-table__row");
    P && c(m) && c(m).handleRowClick({ rowId: T.detail.rowId, row: P });
  }
  function ge(T) {
    var Kt, wn;
    const P = ((Kt = c(b)) == null ? void 0 : Kt.orderedCells) ?? [], ae = P.map((Kn) => Kn.element).indexOf(T);
    if (ae === -1)
      return;
    const We = P[ae].columnId ?? null;
    (wn = c(m)) == null || wn.handleSortAction({ columnId: We, columnIndex: ae, headerCell: T });
  }
  function de() {
    var T;
    return (T = c(m)) == null ? void 0 : T.layout();
  }
  function le() {
    return x;
  }
  var Y = { layout: de, getElement: le }, ne = Og(), ue = (T) => {
    var P;
    c(m) && c(m).handleHeaderRowCheckboxChange(), (P = t.onSMUIDataTableHeaderCheckboxChange) == null || P.call(t, T);
  }, Ee = (T) => {
    var P;
    A(T), (P = t.onSMUIDataTableHeaderClick) == null || P.call(t, T);
  }, Pe = (T) => {
    var P;
    j(T), (P = t.onSMUIDataTableRowClick) == null || P.call(t, T);
  }, $ = (T) => {
    var P;
    O(T), (P = t.onSMUIDataTableBodyCheckboxChange) == null || P.call(t, T);
  };
  Xe(
    ne,
    (T, P) => ({
      class: T,
      ...P,
      onSMUIDataTableHeaderCheckboxChange: ue,
      onSMUIDataTableHeaderClick: Ee,
      onSMUIDataTableRowClick: Pe,
      onSMUIDataTableBodyCheckboxChange: $
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
  var Te = ce(ne);
  Xe(Te, (T, P) => ({ class: T, ...P }), [
    () => je({
      "mdc-data-table__table-container": !0,
      [p()]: !0
    }),
    () => en(L, "container$")
  ]);
  var Oe = ce(Te);
  Xe(Oe, (T, P) => ({ class: T, ...P }), [
    () => je({ "mdc-data-table__table": !0, [y()]: !0 }),
    () => en(L, "table$")
  ]);
  var _e = ce(Oe);
  oe(_e, () => t.children ?? Q), ze(Oe, (T, P) => q == null ? void 0 : q(T, P), E), Se(Te, (T) => S = T, () => S), ze(Te, (T, P) => q == null ? void 0 : q(T, P), g);
  var Ce = ie(Te, 2);
  {
    var fe = (T) => {
      var P = Tg(), ae = ie(ce(P), 2);
      oe(ae, () => t.progress ?? Q), Ae((We) => Pt(P, We), [
        () => Object.entries(c(H)).map(([We, Kt]) => `${We}: ${Kt};`).join(" ")
      ]), I(T, P);
    };
    re(Ce, (T) => {
      t.progress && T(fe);
    });
  }
  var Me = ie(Ce, 2);
  oe(Me, () => t.paginate ?? Q), Se(ne, (T) => x = T, () => x), ze(ne, (T, P) => q == null ? void 0 : q(T, P), o), I(e, ne);
  var $e = Le(Y);
  return i(), $e;
}
var Hg = /* @__PURE__ */ J("<thead><!></thead>");
function Dg(e, t) {
  we(t, !0);
  let n = _(t, "use", 19, () => []), r = /* @__PURE__ */ Ve(t, ["$$slots", "$$events", "$$legacy", "use", "children"]), i, a = /* @__PURE__ */ ye(void 0), o = [];
  const l = /* @__PURE__ */ new WeakMap();
  se("SMUI:data-table:row:header", !0);
  const s = me("SMUI:checkbox:mount");
  se("SMUI:checkbox:mount", (y) => {
    z(a, y, !0), s && s(y);
  });
  const u = me("SMUI:checkbox:unmount");
  se("SMUI:checkbox:unmount", (y) => {
    z(a, void 0), u && u(y);
  }), se("SMUI:data-table:cell:mount", (y) => {
    o.push(y), l.set(y.element, y);
  }), se("SMUI:data-table:cell:unmount", (y) => {
    const L = o.findIndex((x) => x === y);
    L !== -1 && o.splice(L, 1), l.delete(y.element);
  });
  const d = me("SMUI:data-table:header:mount"), f = me("SMUI:data-table:header:unmount");
  gt(() => {
    const y = {
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
    return d && d(y), () => {
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
  var g = { getElement: h }, p = Hg();
  Xe(p, () => ({ ...r }));
  var E = ce(p);
  return oe(E, () => t.children ?? Q), Se(p, (y) => i = y, () => i), ze(p, (y, L) => q == null ? void 0 : q(y, L), n), I(e, p), Le(g);
}
var Pg = /* @__PURE__ */ J("<tbody><!></tbody>");
function Mg(e, t) {
  we(t, !0);
  let n = _(t, "use", 19, () => []), r = _(t, "class", 3, ""), i = /* @__PURE__ */ Ve(t, [
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
  const s = me("SMUI:data-table:body:mount"), u = me("SMUI:data-table:body:unmount");
  gt(() => {
    const p = {
      get rows() {
        return o;
      },
      get orderedRows() {
        return d();
      }
    };
    return s && s(p), () => {
      u && u(p);
    };
  });
  function d() {
    return [...f().querySelectorAll(".mdc-data-table__row")].map((p) => l.get(p)).filter((p) => p && p._smui_data_table_row_accessor);
  }
  function f() {
    return a;
  }
  var v = { getElement: f }, h = Pg();
  Xe(h, (p) => ({ class: p, ...i }), [
    () => je({ "mdc-data-table__content": !0, [r()]: !0 })
  ]);
  var g = ce(h);
  return oe(g, () => t.children ?? Q), Se(h, (p) => a = p, () => a), ze(h, (p, E) => q == null ? void 0 : q(p, E), n), I(e, h), Le(v);
}
let Bg = 0;
var Ug = /* @__PURE__ */ J("<tr><!></tr>");
function Hs(e, t) {
  we(t, !0);
  let n = _(t, "use", 19, () => []), r = _(t, "class", 3, ""), i = _(t, "rowId", 19, () => "SMUI-data-table-row-" + Bg++), a = /* @__PURE__ */ Ve(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "rowId",
    "children"
  ]), o, l = /* @__PURE__ */ ye(void 0), s = be({}), u = be({}), d = me("SMUI:data-table:row:header");
  const f = me("SMUI:checkbox:mount");
  se("SMUI:checkbox:mount", (M) => {
    z(l, M, !0), f && f(M);
  });
  const v = me("SMUI:checkbox:unmount");
  se("SMUI:checkbox:unmount", (M) => {
    z(l, void 0), v && v(M);
  });
  const h = me("SMUI:data-table:row:mount"), g = me("SMUI:data-table:row:unmount");
  gt(() => {
    const M = d ? {
      _smui_data_table_row_accessor: !1,
      get element() {
        return S();
      },
      get checkbox() {
        return c(l);
      },
      get rowId() {
      },
      get selected() {
        return (c(l) && c(l).checked) ?? !1;
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
        return c(l);
      },
      get rowId() {
        return i();
      },
      get selected() {
        return (c(l) && c(l).checked) ?? !1;
      },
      addClass: p,
      removeClass: E,
      getAttr: y,
      addAttr: L
    };
    return h && h(M), () => {
      g && g(M);
    };
  });
  function p(M) {
    s[M] || (s[M] = !0);
  }
  function E(M) {
    (!(M in s) || s[M]) && (s[M] = !1);
  }
  function y(M) {
    return M in u ? u[M] ?? null : S().getAttribute(M);
  }
  function L(M, G) {
    u[M] !== G && (u[M] = G);
  }
  function x(M) {
    rt(S(), "SMUIDataTableHeaderClick", M);
  }
  function m(M) {
    rt(S(), "SMUIDataTableRowClick", { rowId: i(), target: M.target });
  }
  function S() {
    return o;
  }
  var b = { getElement: S }, C = Ug(), w = (M) => {
    var G;
    d ? x(M) : m(M), (G = t.onclick) == null || G.call(t, M);
  };
  Xe(
    C,
    (M) => ({
      class: M,
      "aria-selected": c(l) ? c(l).checked ? "true" : "false" : void 0,
      ...u,
      ...a,
      onclick: w
    }),
    [
      () => je({
        "mdc-data-table__header-row": d,
        "mdc-data-table__row": !d,
        "mdc-data-table__row--selected": !d && c(l) && c(l).checked,
        ...s,
        [r()]: !0
      })
    ]
  );
  var H = ce(C);
  return oe(H, () => t.children ?? Q), Se(C, (M) => o = M, () => o), ze(C, (M, G) => q == null ? void 0 : q(M, G), n), I(e, C), Le(b);
}
let Fg = 0;
var Ng = /* @__PURE__ */ J('<div class="mdc-data-table__header-cell-wrapper"><!> <div class="mdc-data-table__sort-status-label" aria-hidden="true"> </div></div>'), kg = /* @__PURE__ */ J("<th><!></th>"), Gg = /* @__PURE__ */ J("<td><!></td>");
function Ba(e, t) {
  we(t, !0);
  const n = () => Cn(y, "$sort", i), r = () => Cn(L, "$sortDirection", i), [i, a] = Zn();
  let o = me("SMUI:data-table:row:header"), l = _(t, "use", 19, () => []), s = _(t, "class", 3, ""), u = _(t, "numeric", 3, !1), d = _(t, "checkbox", 3, !1), f = _(t, "columnId", 19, () => o ? "SMUI-data-table-column-" + Fg++ : "SMUI-data-table-unused"), v = _(t, "sortable", 19, () => me("SMUI:data-table:sortable")), h = /* @__PURE__ */ Ve(t, [
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
  ]), g, p = be({}), E = be({}), y = me("SMUI:data-table:sort"), L = me("SMUI:data-table:sortDirection"), x = me("SMUI:data-table:sortAscendingAriaLabel"), m = me("SMUI:data-table:sortDescendingAriaLabel");
  v() && (se("SMUI:label:context", "data-table:sortable-header-cell"), se("SMUI:icon-button:context", "data-table:sortable-header-cell"), se("SMUI:icon-button:aria-describedby", f() + "-status-label"));
  const S = me("SMUI:data-table:cell:mount"), b = me("SMUI:data-table:cell:unmount");
  gt(() => {
    const U = o ? {
      _smui_data_table_header_cell_accessor: !0,
      get element() {
        return te();
      },
      get columnId() {
        return f();
      },
      addClass: C,
      removeClass: w,
      getAttr: H,
      addAttr: M
    } : {
      _smui_data_table_header_cell_accessor: !1,
      get element() {
        return te();
      },
      get columnId() {
      },
      addClass: C,
      removeClass: w,
      getAttr: H,
      addAttr: M
    };
    return S && S(U), () => {
      b && b(U);
    };
  });
  function C(U) {
    p[U] || (p[U] = !0);
  }
  function w(U) {
    (!(U in p) || p[U]) && (p[U] = !1);
  }
  function H(U) {
    return U in E ? E[U] ?? null : te().getAttribute(U);
  }
  function M(U, A) {
    E[U] !== A && (E[U] = A);
  }
  function G(U) {
    rt(te(), "SMUIDataTableHeaderCheckboxChange", U);
  }
  function Z(U) {
    rt(te(), "SMUIDataTableBodyCheckboxChange", U);
  }
  function te() {
    return g;
  }
  var ve = { getElement: te }, R = W(), D = V(R);
  {
    var O = (U) => {
      var A = kg(), j = (Y) => {
        var ne;
        d() && G(Y), (ne = t.onchange) == null || ne.call(t, Y);
      };
      Xe(
        A,
        (Y) => ({
          class: Y,
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
            "mdc-data-table__header-cell--checkbox": d(),
            "mdc-data-table__header-cell--with-sort": v(),
            "mdc-data-table__header-cell--sorted": v() && n() === f(),
            ...p,
            [s()]: !0
          })
        ]
      );
      var ge = ce(A);
      {
        var de = (Y) => {
          var ne = Ng(), ue = ce(ne);
          oe(ue, () => t.children ?? Q);
          var Ee = ie(ue, 2), Pe = ce(Ee);
          Ae(() => {
            qr(Ee, "id", `${f() ?? ""}-status-label`), nt(Pe, n() === f() ? r() === "ascending" ? x : m : "");
          }), I(Y, ne);
        }, le = (Y) => {
          var ne = W(), ue = V(ne);
          oe(ue, () => t.children ?? Q), I(Y, ne);
        };
        re(ge, (Y) => {
          v() ? Y(de) : Y(le, !1);
        });
      }
      Se(A, (Y) => g = Y, () => g), ze(A, (Y, ne) => q == null ? void 0 : q(Y, ne), l), I(U, A);
    }, N = (U) => {
      var A = Gg(), j = (de) => {
        var le;
        d() && Z(de), (le = t.onchange) == null || le.call(t, de);
      };
      Xe(
        A,
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
            "mdc-data-table__cell--checkbox": d(),
            ...p,
            [s()]: !0
          })
        ]
      );
      var ge = ce(A);
      oe(ge, () => t.children ?? Q), Se(A, (de) => g = de, () => g), ze(A, (de, le) => q == null ? void 0 : q(de, le), l), I(U, A);
    };
    re(D, (U) => {
      o ? U(O) : U(N, !1);
    });
  }
  I(e, R);
  var K = Le(ve);
  return a(), K;
}
Wn(["click"]);
Wn(["click"]);
function lo(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
var jg = Object.freeze({
  // This flag exists as a workaround for issue 454 (basically a browser bug) - seems like these rect values take time to update when in grid layout. Setting it to true can cause strange behaviour in the REPL for non-grid zones, see issue 470
  USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT: "USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT"
});
lo({}, jg.USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT, !1);
var Ni, Ds = {
  DND_ZONE_ACTIVE: "dnd-zone-active",
  DND_ZONE_DRAG_DISABLED: "dnd-zone-drag-disabled"
};
Ni = {}, lo(Ni, Ds.DND_ZONE_ACTIVE, "Tab to one the items and press space-bar or enter to start dragging it"), lo(Ni, Ds.DND_ZONE_DRAG_DISABLED, "This is a disabled drag and drop list");
const Vg = Rt([]);
Vg.subscribe;
Wn(["click", "pointerdown", "pointerup", "pointermove"]);
Wn(["click"]);
const qg = 4e3;
function zg() {
  let e = be({ items: [] }), t = 0;
  const n = (i) => {
    e.items = e.items.filter((a) => a.id !== i);
  }, r = (i, a, o, l = qg) => {
    const s = t++, u = { id: s, summary: a, detail: o, type: i };
    return e.items = [...e.items, u], setTimeout(
      () => {
        n(s);
      },
      l
    ), s;
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
zg();
var Xg = /* @__PURE__ */ J('<div><div class="mdc-linear-progress__buffer"><div class="mdc-linear-progress__buffer-bar"></div> <div class="mdc-linear-progress__buffer-dots"></div></div> <div class="mdc-linear-progress__bar mdc-linear-progress__primary-bar"><span class="mdc-linear-progress__bar-inner"></span></div> <div class="mdc-linear-progress__bar mdc-linear-progress__secondary-bar"><span class="mdc-linear-progress__bar-inner"></span></div></div>');
function Wg(e, t) {
  we(t, !0);
  const [n, r] = Zn();
  let i = _(t, "use", 19, () => []), a = _(t, "class", 3, ""), o = _(t, "style", 3, ""), l = _(t, "indeterminate", 3, !1), s = _(t, "closed", 3, !1), u = _(t, "progress", 3, 0), d = _(t, "buffer", 3, void 0), f = /* @__PURE__ */ Ve(t, [
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
  ]), v, h = /* @__PURE__ */ ye(void 0), g = be({}), p = be({}), E = be({}), y = be({}), L = be({}), x = me("SMUI:linear-progress:context"), m = me("SMUI:linear-progress:closed");
  Ue(() => {
    m && Un(m, s());
  }), Ue(() => {
    c(h) && c(h).isDeterminate() !== !l() && c(h).setDeterminate(!l());
  }), Ue(() => {
    c(h) && c(h).getProgress() !== u() && c(h).setProgress(u());
  }), Ue(() => {
    c(h) && (d() == null ? c(h).setBuffer(1) : c(h).setBuffer(d()));
  }), Ue(() => {
    c(h) && (s() ? c(h).close() : c(h).open());
  }), gt(() => (z(
    h,
    new wg({
      addClass: b,
      forceLayout: () => {
        te().getBoundingClientRect();
      },
      setBufferBarStyle: G,
      setPrimaryBarStyle: Z,
      hasClass: S,
      removeAttribute: H,
      removeClass: C,
      setAttribute: w,
      setStyle: M,
      attachResizeObserver: (A) => {
        const j = window.ResizeObserver;
        if (j) {
          const ge = new j(A);
          return ge.observe(te()), ge;
        }
        return null;
      },
      getWidth: () => te().offsetWidth
    }),
    !0
  ), c(h).init(), () => {
    var A;
    (A = c(h)) == null || A.destroy();
  }));
  function S(A) {
    return A in g ? g[A] : te().classList.contains(A);
  }
  function b(A) {
    g[A] || (g[A] = !0);
  }
  function C(A) {
    (!(A in g) || g[A]) && (g[A] = !1);
  }
  function w(A, j) {
    p[A] !== j && (p[A] = j);
  }
  function H(A) {
    (!(A in p) || p[A] != null) && (p[A] = void 0);
  }
  function M(A, j) {
    E[A] != j && (j === "" || j == null ? delete E[A] : E[A] = j);
  }
  function G(A, j) {
    y[A] != j && (j === "" || j == null ? delete y[A] : y[A] = j);
  }
  function Z(A, j) {
    L[A] != j && (j === "" || j == null ? delete L[A] : L[A] = j);
  }
  function te() {
    return v;
  }
  var ve = { getElement: te }, R = Xg(), D = (A) => {
    var j;
    c(h) && c(h).handleTransitionEnd(), (j = t.ontransitionend) == null || j.call(t, A);
  };
  Xe(
    R,
    (A, j) => ({
      class: A,
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
      () => Object.entries(E).map(([A, j]) => `${A}: ${j};`).concat([o()]).join(" ")
    ]
  );
  var O = ce(R), N = ce(O), K = ie(O, 2);
  Se(R, (A) => v = A, () => v), ze(R, (A, j) => q == null ? void 0 : q(A, j), i), Ae(
    (A, j) => {
      Pt(N, A), Pt(K, j);
    },
    [
      () => Object.entries(y).map(([A, j]) => `${A}: ${j};`).join(" "),
      () => Object.entries(L).map(([A, j]) => `${A}: ${j};`).join(" ")
    ]
  ), I(e, R);
  var U = Le(ve);
  return r(), U;
}
var Zg = /* @__PURE__ */ Vt('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor" class="svelte-1mj71p3"><path d="M12 4l-8 8h16l-8-8z"></path></svg>'), Yg = /* @__PURE__ */ Vt('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor" class="svelte-1mj71p3"><path d="M12 20l8-8H4l8 8z"></path></svg>'), Kg = (e, t) => t(), Qg = /* @__PURE__ */ J('<input type="text" class="svelte-1mj71p3"/>'), Jg = (e, t) => t(), $g = /* @__PURE__ */ J('<input type="number" class="svelte-1mj71p3"/>'), ep = /* @__PURE__ */ J("<!> <!>", 1), tp = /* @__PURE__ */ J('<div class="custom-cell-container svelte-1mj71p3"><div class="cell-header svelte-1mj71p3"><span class="header-title svelte-1mj71p3"> </span> <!></div> <!></div>'), np = /* @__PURE__ */ J('<div class="cell-actions svelte-1mj71p3"></div>'), rp = /* @__PURE__ */ J("<!> <!>", 1);
function ip(e, t) {
  we(t, !0);
  const n = () => Cn(p, "$sortColumn", a), r = () => Cn(E, "$sortDirection", a), i = () => Cn(g, "$filteredData", a), [a, o] = Zn();
  let l = _(t, "loadingDone", 15, !0), s = _(t, "label", 19, lg), u = _(t, "columnDefs", 19, () => []), d = _(t, "rowData", 31, () => be([])), f = _(t, "rowActions", 19, () => []), v = _(t, "searchInputLabel", 3, "Search"), h = be({ name: "", color: "", number: "" }), g = Rt([]), p = Rt(null), E = Rt(null);
  t.store.store.subscribe((m) => {
    d([...m]), y();
  });
  function y() {
    let m = d().filter((S) => u().every((b) => {
      const C = h[b.field], w = b.filterValueGetter ? b.filterValueGetter(S) : S[b.field];
      return C ? b.filterType === "number" ? w == C : w.toString().toLowerCase().includes(C.toLowerCase()) : !0;
    }));
    m = L(m), g.set(m);
  }
  function L(m) {
    let S, b;
    return p.subscribe((C) => S = C), E.subscribe((C) => b = C), !S || !b ? m : m.sort((C, w) => {
      let H = C[S], M = w[S];
      return H == null && (H = ""), M == null && (M = ""), b === "asc" ? H.toString().localeCompare(M.toString()) : M.toString().localeCompare(H.toString());
    });
  }
  function x(m) {
    p.update((S) => {
      if (S === m)
        E.update((b) => b === "asc" ? "desc" : b === "desc" ? null : "asc");
      else
        return E.set("asc"), m;
      return m;
    }), y();
  }
  g.set(d()), Rg(e, {
    get "table$aria-label"() {
      return s();
    },
    style: "max-width: 100%; width: 100%;",
    progress: (S) => {
      Wg(S, {
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
      var C = rp(), w = V(C);
      Dg(w, {
        children: (M, G) => {
          Hs(M, {
            class: "header-row",
            children: (Z, te) => {
              var ve = W(), R = V(ve);
              Hi(R, 17, u, ya, (D, O) => {
                Ba(D, {
                  onclick: () => c(O).sortable && x(c(O).field),
                  get style() {
                    return c(O).headerStyle;
                  },
                  children: (N, K) => {
                    var U = tp(), A = ce(U), j = ce(A), ge = ce(j), de = ie(j, 2);
                    {
                      var le = (ue) => {
                        var Ee = W(), Pe = V(Ee);
                        {
                          var $ = (Te) => {
                            var Oe = W(), _e = V(Oe);
                            {
                              var Ce = (Me) => {
                                var $e = Zg();
                                I(Me, $e);
                              }, fe = (Me) => {
                                var $e = W(), T = V($e);
                                {
                                  var P = (ae) => {
                                    var We = Yg();
                                    I(ae, We);
                                  };
                                  re(
                                    T,
                                    (ae) => {
                                      r() === "desc" && ae(P);
                                    },
                                    !0
                                  );
                                }
                                I(Me, $e);
                              };
                              re(_e, (Me) => {
                                r() === "asc" ? Me(Ce) : Me(fe, !1);
                              });
                            }
                            I(Te, Oe);
                          };
                          re(Pe, (Te) => {
                            n() === c(O).field && r() !== null && Te($);
                          });
                        }
                        I(ue, Ee);
                      };
                      re(de, (ue) => {
                        c(O).sortable && ue(le);
                      });
                    }
                    var Y = ie(A, 2);
                    {
                      var ne = (ue) => {
                        var Ee = ep(), Pe = V(Ee);
                        {
                          var $ = (_e) => {
                            var Ce = Qg();
                            Ce.__input = [Kg, y], Ae(() => qr(Ce, "placeholder", `${v()} ${c(O).headerName}`)), Ka(Ce, () => h[c(O).field], (fe) => h[c(O).field] = fe), I(_e, Ce);
                          };
                          re(Pe, (_e) => {
                            c(O).filterType === "text" && _e($);
                          });
                        }
                        var Te = ie(Pe, 2);
                        {
                          var Oe = (_e) => {
                            var Ce = $g();
                            Ce.__input = [Jg, y], Ae(() => qr(Ce, "placeholder", `${v()} ${c(O).headerName}`)), Ka(Ce, () => h[c(O).field], (fe) => h[c(O).field] = fe), I(_e, Ce);
                          };
                          re(Te, (_e) => {
                            c(O).filterType === "number" && _e(Oe);
                          });
                        }
                        I(ue, Ee);
                      };
                      re(Y, (ue) => {
                        c(O).filter && ue(ne);
                      });
                    }
                    Ae(() => {
                      Pt(U, `min-width: ${c(O).minWidth ?? 0 ?? ""}`), nt(ge, c(O).headerName);
                    }), I(N, U);
                  },
                  $$slots: { default: !0 }
                });
              }), I(Z, ve);
            },
            $$slots: { default: !0 }
          });
        },
        $$slots: { default: !0 }
      });
      var H = ie(w, 2);
      Mg(H, {
        children: (M, G) => {
          var Z = W(), te = V(Z);
          Hi(te, 1, i, ya, (ve, R) => {
            Hs(ve, {
              children: (D, O) => {
                var N = W(), K = V(N);
                Hi(K, 17, u, (U) => U.field, (U, A) => {
                  var j = W(), ge = V(j);
                  {
                    var de = (Y) => {
                      Ba(Y, {
                        children: (ne, ue) => {
                          var Ee = np();
                          Hi(Ee, 21, f, ya, (Pe, $) => {
                            var Te = W(), Oe = V(Te);
                            {
                              var _e = (fe) => {
                                Os(fe, {
                                  get content() {
                                    return c($).tooltip;
                                  },
                                  hoverDelay: 500,
                                  children: (Me, $e) => {
                                    {
                                      let T = /* @__PURE__ */ pe(() => c($).disabled(c(R)));
                                      lv(Me, {
                                        get iconComponent() {
                                          return c($).iconComponent;
                                        },
                                        get iconStyles() {
                                          return c($).iconStyles;
                                        },
                                        callback: () => c($).callback(c(R)),
                                        get disabled() {
                                          return c(T);
                                        }
                                      });
                                    }
                                  },
                                  $$slots: { default: !0 }
                                });
                              }, Ce = (fe) => {
                                Os(fe, {
                                  get content() {
                                    return c($).tooltip;
                                  },
                                  hoverDelay: 500,
                                  children: (Me, $e) => {
                                    {
                                      let T = /* @__PURE__ */ pe(() => c($).disabled(c(R)));
                                      nr(Me, {
                                        class: "button",
                                        variant: "raised",
                                        callback: () => c($).callback(c(R)),
                                        get disabled() {
                                          return c(T);
                                        },
                                        children: (P, ae) => {
                                          var We = W(), Kt = V(We);
                                          {
                                            var wn = (on) => {
                                              du(on, { svgStyles: "margin: unset" });
                                            }, Kn = (on) => {
                                              var k = W(), B = V(k);
                                              {
                                                var X = (Qe) => {
                                                  so(Qe, { svgStyles: "margin: unset" });
                                                }, Ye = (Qe) => {
                                                  var at = W(), mt = V(at);
                                                  {
                                                    var Qt = (Ge) => {
                                                      hg(Ge, { svgStyles: "margin: unset" });
                                                    }, Cr = (Ge) => {
                                                      var ct = W(), Ut = V(ct);
                                                      {
                                                        var Ln = (Tn) => {
                                                          gg(Tn, { svgStyles: "margin: unset" });
                                                        }, ma = (Tn) => {
                                                          var Re = W(), Ze = V(Re);
                                                          {
                                                            var et = (bt) => {
                                                              _g(bt, { svgStyles: "margin: unset" });
                                                            }, xt = (bt) => {
                                                              var Je = W(), ot = V(Je);
                                                              {
                                                                var dt = (tt) => {
                                                                  Eg(tt, { svgStyles: "margin: unset" });
                                                                }, Fe = (tt) => {
                                                                  var pn = W(), qt = V(pn);
                                                                  {
                                                                    var st = (yt) => {
                                                                      Cg(yt, { svgStyles: "margin: unset" });
                                                                    }, _t = (yt) => {
                                                                      fu(yt, { svgStyles: "margin: unset" });
                                                                    };
                                                                    re(
                                                                      qt,
                                                                      (yt) => {
                                                                        c($).icon === "delete" ? yt(st) : yt(_t, !1);
                                                                      },
                                                                      !0
                                                                    );
                                                                  }
                                                                  I(tt, pn);
                                                                };
                                                                re(
                                                                  ot,
                                                                  (tt) => {
                                                                    c($).icon === "edit" ? tt(dt) : tt(Fe, !1);
                                                                  },
                                                                  !0
                                                                );
                                                              }
                                                              I(bt, Je);
                                                            };
                                                            re(
                                                              Ze,
                                                              (bt) => {
                                                                c($).icon === "remove" ? bt(et) : bt(xt, !1);
                                                              },
                                                              !0
                                                            );
                                                          }
                                                          I(Tn, Re);
                                                        };
                                                        re(
                                                          Ut,
                                                          (Tn) => {
                                                            c($).icon === "find-in-page" ? Tn(Ln) : Tn(ma, !1);
                                                          },
                                                          !0
                                                        );
                                                      }
                                                      I(Ge, ct);
                                                    };
                                                    re(
                                                      mt,
                                                      (Ge) => {
                                                        c($).icon === "download" ? Ge(Qt) : Ge(Cr, !1);
                                                      },
                                                      !0
                                                    );
                                                  }
                                                  I(Qe, at);
                                                };
                                                re(
                                                  B,
                                                  (Qe) => {
                                                    c($).icon === "cancel" ? Qe(X) : Qe(Ye, !1);
                                                  },
                                                  !0
                                                );
                                              }
                                              I(on, k);
                                            };
                                            re(Kt, (on) => {
                                              c($).icon === "add" ? on(wn) : on(Kn, !1);
                                            });
                                          }
                                          I(P, We);
                                        },
                                        $$slots: { default: !0 }
                                      });
                                    }
                                  },
                                  $$slots: { default: !0 }
                                });
                              };
                              re(Oe, (fe) => {
                                c($).iconComponent ? fe(_e) : fe(Ce, !1);
                              });
                            }
                            I(Pe, Te);
                          }), I(ne, Ee);
                        },
                        $$slots: { default: !0 }
                      });
                    }, le = (Y) => {
                      Ba(Y, {
                        get numeric() {
                          return c(A).numeric;
                        },
                        get style() {
                          return c(A).cellStyle;
                        },
                        children: (ne, ue) => {
                          var Ee = W(), Pe = V(Ee);
                          {
                            var $ = (Oe) => {
                              const _e = /* @__PURE__ */ pe(() => c(A).cellRenderer);
                              var Ce = W(), fe = V(Ce);
                              Jr(fe, () => c(_e), (Me, $e) => {
                                $e(Me, ut(
                                  {
                                    get row() {
                                      return c(R);
                                    },
                                    get value() {
                                      return c(R)[c(A).field];
                                    },
                                    get col() {
                                      return c(A);
                                    }
                                  },
                                  () => c(A).cellRendererProps ?? {}
                                ));
                              }), I(Oe, Ce);
                            }, Te = (Oe) => {
                              var _e = W(), Ce = V(_e);
                              {
                                var fe = ($e) => {
                                  var T = Ct();
                                  Ae((P) => nt(T, P), [
                                    () => c(A).valueFormatter(c(R)[c(A).field])
                                  ]), I($e, T);
                                }, Me = ($e) => {
                                  var T = Ct();
                                  Ae(() => nt(T, c(R)[c(A).field] ?? "")), I($e, T);
                                };
                                re(
                                  Ce,
                                  ($e) => {
                                    c(A).valueFormatter ? $e(fe) : $e(Me, !1);
                                  },
                                  !0
                                );
                              }
                              I(Oe, _e);
                            };
                            re(Pe, (Oe) => {
                              c(A).cellRenderer ? Oe($) : Oe(Te, !1);
                            });
                          }
                          I(ne, Ee);
                        },
                        $$slots: { default: !0 }
                      });
                    };
                    re(ge, (Y) => {
                      c(A).field === "actions" ? Y(de) : Y(le, !1);
                    });
                  }
                  I(U, j);
                }), I(D, N);
              },
              $$slots: { default: !0 }
            });
          }), I(M, Z);
        },
        $$slots: { default: !0 }
      }), I(S, C);
    },
    $$slots: { progress: !0, default: !0 }
  }), Le(), o();
}
Wn(["input"]);
var ap = /* @__PURE__ */ J("<div><!></div>");
function op(e, t) {
  we(t, !0);
  let n = _(t, "use", 19, () => []), r = _(t, "class", 3, ""), i = _(t, "variant", 3, "raised"), a = _(t, "padded", 3, !1), o = /* @__PURE__ */ Ve(t, [
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
  var u = { getElement: s }, d = ap();
  Xe(d, (v) => ({ class: v, ...o }), [
    () => je({
      "mdc-card": !0,
      "mdc-card--outlined": i() === "outlined",
      "smui-card--padded": a(),
      [r()]: !0
    })
  ]);
  var f = ce(d);
  return oe(f, () => t.children ?? Q), Se(d, (v) => l = v, () => l), ze(d, (v, h) => q == null ? void 0 : q(v, h), n), I(e, d), Le(u);
}
function it(e) {
  return typeof e == "function";
}
function hu(e) {
  var t = function(r) {
    Error.call(r), r.stack = new Error().stack;
  }, n = e(t);
  return n.prototype = Object.create(Error.prototype), n.prototype.constructor = n, n;
}
var Ua = hu(function(e) {
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
            for (var l = It(o), s = l.next(); !s.done; s = l.next()) {
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
      var d = this.initialTeardown;
      if (it(d))
        try {
          d();
        } catch (p) {
          a = p instanceof Ua ? p.errors : [p];
        }
      var f = this._finalizers;
      if (f) {
        this._finalizers = null;
        try {
          for (var v = It(f), h = v.next(); !h.done; h = v.next()) {
            var g = h.value;
            try {
              Ms(g);
            } catch (p) {
              a = a ?? [], p instanceof Ua ? a = Rr(Rr([], $a(a)), $a(p.errors)) : a.push(p);
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
Ho.EMPTY;
function vu(e) {
  return e instanceof Ho || e && "closed" in e && it(e.remove) && it(e.add) && it(e.unsubscribe);
}
function Ms(e) {
  it(e) ? e() : e.unsubscribe();
}
var sp = {
  Promise: void 0
}, lp = {
  setTimeout: function(e, t) {
    for (var n = [], r = 2; r < arguments.length; r++)
      n[r - 2] = arguments[r];
    return setTimeout.apply(void 0, Rr([e, t], $a(n)));
  },
  clearTimeout: function(e) {
    return clearTimeout(e);
  },
  delegate: void 0
};
function gu(e) {
  lp.setTimeout(function() {
    throw e;
  });
}
function Bs() {
}
function up(e) {
  e();
}
var Do = function(e) {
  pt(t, e);
  function t(n) {
    var r = e.call(this) || this;
    return r.isStopped = !1, n ? (r.destination = n, vu(n) && n.add(r)) : r.destination = fp, r;
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
}(Ho), cp = function() {
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
  pt(t, e);
  function t(n, r, i) {
    var a = e.call(this) || this, o;
    return it(n) || !n ? o = {
      next: n ?? void 0,
      error: r ?? void 0,
      complete: i ?? void 0
    } : o = n, a.destination = new cp(o), a;
  }
  return t;
}(Do);
function ki(e) {
  gu(e);
}
function dp(e) {
  throw e;
}
var fp = {
  closed: !0,
  next: Bs,
  error: dp,
  complete: Bs
}, Po = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}();
function pu(e) {
  return e;
}
function hp(e) {
  return e.length === 0 ? pu : e.length === 1 ? e[0] : function(n) {
    return e.reduce(function(r, i) {
      return i(r);
    }, n);
  };
}
var an = function() {
  function e(t) {
    t && (this._subscribe = t);
  }
  return e.prototype.lift = function(t) {
    var n = new e();
    return n.source = this, n.operator = t, n;
  }, e.prototype.subscribe = function(t, n, r) {
    var i = this, a = gp(t) ? t : new uo(t, n, r);
    return up(function() {
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
    return n = Us(n), new n(function(i, a) {
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
    return hp(t)(this);
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
  return (t = e ?? sp.Promise) !== null && t !== void 0 ? t : Promise;
}
function vp(e) {
  return e && it(e.next) && it(e.error) && it(e.complete);
}
function gp(e) {
  return e && e instanceof Do || vp(e) && vu(e);
}
function pp(e) {
  return it(e == null ? void 0 : e.lift);
}
function Er(e) {
  return function(t) {
    if (pp(t))
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
function Yr(e, t, n, r, i) {
  return new mp(e, t, n, r, i);
}
var mp = function(e) {
  pt(t, e);
  function t(n, r, i, a, o, l) {
    var s = e.call(this, n) || this;
    return s.onFinalize = o, s.shouldUnsubscribe = l, s._next = r ? function(u) {
      try {
        r(u);
      } catch (d) {
        n.error(d);
      }
    } : e.prototype._next, s._error = a ? function(u) {
      try {
        a(u);
      } catch (d) {
        n.error(d);
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
}(Do), bp = new an(function(e) {
  return e.complete();
});
function _p(e) {
  return e && it(e.schedule);
}
function yp(e) {
  return e[e.length - 1];
}
function Ep(e) {
  return _p(yp(e)) ? e.pop() : void 0;
}
var mu = function(e) {
  return e && typeof e.length == "number" && typeof e != "function";
};
function bu(e) {
  return it(e == null ? void 0 : e.then);
}
function _u(e) {
  return it(e[Po]);
}
function yu(e) {
  return Symbol.asyncIterator && it(e == null ? void 0 : e[Symbol.asyncIterator]);
}
function Eu(e) {
  return new TypeError("You provided " + (e !== null && typeof e == "object" ? "an invalid object" : "'" + e + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
}
function Sp() {
  return typeof Symbol != "function" || !Symbol.iterator ? "@@iterator" : Symbol.iterator;
}
var Su = Sp();
function Cu(e) {
  return it(e == null ? void 0 : e[Su]);
}
function Au(e) {
  return Td(this, arguments, function() {
    var n, r, i, a;
    return Lo(this, function(o) {
      switch (o.label) {
        case 0:
          n = e.getReader(), o.label = 1;
        case 1:
          o.trys.push([1, , 9, 10]), o.label = 2;
        case 2:
          return [4, Hr(n.read())];
        case 3:
          return r = o.sent(), i = r.value, a = r.done, a ? [4, Hr(void 0)] : [3, 5];
        case 4:
          return [2, o.sent()];
        case 5:
          return [4, Hr(i)];
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
  return it(e == null ? void 0 : e.getReader);
}
function Li(e) {
  if (e instanceof an)
    return e;
  if (e != null) {
    if (_u(e))
      return Cp(e);
    if (mu(e))
      return Ap(e);
    if (bu(e))
      return Ip(e);
    if (yu(e))
      return xu(e);
    if (Cu(e))
      return xp(e);
    if (Iu(e))
      return wp(e);
  }
  throw Eu(e);
}
function Cp(e) {
  return new an(function(t) {
    var n = e[Po]();
    if (it(n.subscribe))
      return n.subscribe(t);
    throw new TypeError("Provided object does not correctly implement Symbol.observable");
  });
}
function Ap(e) {
  return new an(function(t) {
    for (var n = 0; n < e.length && !t.closed; n++)
      t.next(e[n]);
    t.complete();
  });
}
function Ip(e) {
  return new an(function(t) {
    e.then(function(n) {
      t.closed || (t.next(n), t.complete());
    }, function(n) {
      return t.error(n);
    }).then(null, gu);
  });
}
function xp(e) {
  return new an(function(t) {
    var n, r;
    try {
      for (var i = It(e), a = i.next(); !a.done; a = i.next()) {
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
function xu(e) {
  return new an(function(t) {
    Lp(e, t).catch(function(n) {
      return t.error(n);
    });
  });
}
function wp(e) {
  return xu(Au(e));
}
function Lp(e, t) {
  var n, r, i, a;
  return Fl(this, void 0, void 0, function() {
    var o, l;
    return Lo(this, function(s) {
      switch (s.label) {
        case 0:
          s.trys.push([0, 5, 6, 11]), n = Od(e), s.label = 1;
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
    n.subscribe(Yr(r, function(i) {
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
function Tp(e, t) {
  return Li(e).pipe(Lu(t), wu(t));
}
function Op(e, t) {
  return Li(e).pipe(Lu(t), wu(t));
}
function Rp(e, t) {
  return new an(function(n) {
    var r = 0;
    return t.schedule(function() {
      r === e.length ? n.complete() : (n.next(e[r++]), n.closed || this.schedule());
    });
  });
}
function Hp(e, t) {
  return new an(function(n) {
    var r;
    return dr(n, t, function() {
      r = e[Su](), dr(n, t, function() {
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
      return it(r == null ? void 0 : r.return) && r.return();
    };
  });
}
function Tu(e, t) {
  if (!e)
    throw new Error("Iterable cannot be null");
  return new an(function(n) {
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
function Dp(e, t) {
  return Tu(Au(e), t);
}
function Pp(e, t) {
  if (e != null) {
    if (_u(e))
      return Tp(e, t);
    if (mu(e))
      return Rp(e, t);
    if (bu(e))
      return Op(e, t);
    if (yu(e))
      return Tu(e, t);
    if (Cu(e))
      return Hp(e, t);
    if (Iu(e))
      return Dp(e, t);
  }
  throw Eu(e);
}
function Mp(e, t) {
  return t ? Pp(e, t) : Li(e);
}
function Bp() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t];
  var n = Ep(e);
  return Mp(e, n);
}
function fn(e, t) {
  return Er(function(n, r) {
    var i = 0;
    n.subscribe(Yr(r, function(a) {
      r.next(e.call(t, a, i++));
    }));
  });
}
function Up(e, t, n, r, i, a, o, l) {
  var s = [], u = 0, d = 0, f = !1, v = function() {
    f && !s.length && !u && t.complete();
  }, h = function(p) {
    return u < r ? g(p) : s.push(p);
  }, g = function(p) {
    u++;
    var E = !1;
    Li(n(p, d++)).subscribe(Yr(t, function(y) {
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
  return e.subscribe(Yr(t, h, function() {
    f = !0, v();
  })), function() {
  };
}
function co(e, t, n) {
  return n === void 0 && (n = 1 / 0), it(t) ? co(function(r, i) {
    return fn(function(a, o) {
      return t(r, a, i, o);
    })(Li(e(r, i)));
  }, n) : (typeof t == "number" && (n = t), Er(function(r, i) {
    return Up(r, i, e, n);
  }));
}
function Fp(e, t) {
  return it(t) ? co(e, t, 1) : co(e, 1);
}
function Fs(e) {
  return e <= 0 ? function() {
    return bp;
  } : Er(function(t, n) {
    var r = 0;
    t.subscribe(Yr(n, function(i) {
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
  var r = it(e) || t || n ? { next: e, error: t, complete: n } : e;
  return r ? Er(function(i, a) {
    var o;
    (o = r.subscribe) === null || o === void 0 || o.call(r);
    var l = !0;
    i.subscribe(Yr(a, function(s) {
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
var Np = /* @__PURE__ */ function() {
  function e(t, n, r, i) {
    i === void 0 && (i = "download_load"), this.originalEvent = t, this.xhr = n, this.request = r, this.type = i;
    var a = n.status, o = n.responseType;
    this.status = a ?? 0, this.responseType = o ?? "";
    var l = n.getAllResponseHeaders();
    this.responseHeaders = l ? l.split(`
`).reduce(function(d, f) {
      var v = f.indexOf(": ");
      return d[f.slice(0, v)] = f.slice(v + 2), d;
    }, {}) : {}, this.response = Ou(n);
    var s = t.loaded, u = t.total;
    this.loaded = s, this.total = u;
  }
  return e;
}(), na = hu(function(e) {
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
}), kp = function() {
  function e(t, n) {
    return na.call(this, "ajax timeout", t, n), this.name = "AjaxTimeoutError", this;
  }
  return e.prototype = Object.create(na.prototype), e;
}();
function Gp(e, t) {
  return Sr({ method: "GET", url: e, headers: t });
}
function jp(e, t, n) {
  return Sr({ method: "POST", url: e, body: t, headers: n });
}
function Vp(e, t) {
  return Sr({ method: "DELETE", url: e, headers: t });
}
function qp(e, t, n) {
  return Sr({ method: "PUT", url: e, body: t, headers: n });
}
function zp(e, t, n) {
  return Sr({ method: "PATCH", url: e, body: t, headers: n });
}
var Xp = fn(function(e) {
  return e.response;
});
function Wp(e, t) {
  return Xp(Sr({
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
    return Yp(n);
  };
  return e.get = Gp, e.post = jp, e.delete = Vp, e.put = qp, e.patch = zp, e.getJSON = Wp, e;
}(), Zp = "upload", Gs = "download", Fa = "loadstart", Na = "progress", js = "load";
function Yp(e) {
  return new an(function(t) {
    var n, r, i = ee({ async: !0, crossDomain: !1, withCredentials: !1, method: "GET", timeout: 0, responseType: "json" }, e), a = i.queryParams, o = i.body, l = i.headers, s = i.url;
    if (!s)
      throw new TypeError("url is required");
    if (a) {
      var u;
      if (s.includes("?")) {
        var d = s.split("?");
        if (2 < d.length)
          throw new TypeError("invalid url");
        u = new URLSearchParams(d[1]), new URLSearchParams(a).forEach(function(O, N) {
          return u.set(N, O);
        }), s = d[0] + "?" + u;
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
    var L = Kp(o, f), x = ee(ee({}, i), {
      url: s,
      headers: f,
      body: L
    }), m;
    m = e.createXHR ? e.createXHR() : new XMLHttpRequest();
    {
      var S = e.progressSubscriber, b = e.includeDownloadProgress, C = b === void 0 ? !1 : b, w = e.includeUploadProgress, H = w === void 0 ? !1 : w, M = function(O, N) {
        m.addEventListener(O, function() {
          var K, U = N();
          (K = S == null ? void 0 : S.error) === null || K === void 0 || K.call(S, U), t.error(U);
        });
      };
      M("timeout", function() {
        return new kp(m, x);
      }), M("abort", function() {
        return new na("aborted", m, x);
      });
      var G = function(O, N) {
        return new Np(N, m, x, O + "_" + N.type);
      }, Z = function(O, N, K) {
        O.addEventListener(N, function(U) {
          t.next(G(K, U));
        });
      };
      H && [Fa, Na, js].forEach(function(O) {
        return Z(m.upload, O, Zp);
      }), S && [Fa, Na].forEach(function(O) {
        return m.upload.addEventListener(O, function(N) {
          var K;
          return (K = S == null ? void 0 : S.next) === null || K === void 0 ? void 0 : K.call(S, N);
        });
      }), C && [Fa, Na].forEach(function(O) {
        return Z(m, O, Gs);
      });
      var te = function(O) {
        var N = "ajax error" + (O ? " " + O : "");
        t.error(new na(N, m, x));
      };
      m.addEventListener("error", function(O) {
        var N;
        (N = S == null ? void 0 : S.error) === null || N === void 0 || N.call(S, O), te();
      }), m.addEventListener(js, function(O) {
        var N, K, U = m.status;
        if (U < 400) {
          (N = S == null ? void 0 : S.complete) === null || N === void 0 || N.call(S);
          var A = void 0;
          try {
            A = G(Gs, O);
          } catch (j) {
            t.error(j);
            return;
          }
          t.next(A), t.complete();
        } else
          (K = S == null ? void 0 : S.error) === null || K === void 0 || K.call(S, O), te(U);
      });
    }
    var ve = x.user, R = x.method, D = x.async;
    ve ? m.open(R, s, D, ve, x.password) : m.open(R, s, D), D && (m.timeout = x.timeout, m.responseType = x.responseType), "withCredentials" in m && (m.withCredentials = x.withCredentials);
    for (var v in f)
      f.hasOwnProperty(v) && m.setRequestHeader(v, f[v]);
    return L ? m.send(L) : m.send(), function() {
      m && m.readyState !== 4 && m.abort();
    };
  });
}
function Kp(e, t) {
  var n;
  if (!e || typeof e == "string" || nm(e) || rm(e) || Jp(e) || $p(e) || em(e) || im(e))
    return e;
  if (tm(e))
    return e.buffer;
  if (typeof e == "object")
    return t["content-type"] = (n = t["content-type"]) !== null && n !== void 0 ? n : "application/json;charset=utf-8", JSON.stringify(e);
  throw new TypeError("Unknown body type");
}
var Qp = Object.prototype.toString;
function Mo(e, t) {
  return Qp.call(e) === "[object " + t + "]";
}
function Jp(e) {
  return Mo(e, "ArrayBuffer");
}
function $p(e) {
  return Mo(e, "File");
}
function em(e) {
  return Mo(e, "Blob");
}
function tm(e) {
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView(e);
}
function nm(e) {
  return typeof FormData < "u" && e instanceof FormData;
}
function rm(e) {
  return typeof URLSearchParams < "u" && e instanceof URLSearchParams;
}
function im(e) {
  return typeof ReadableStream < "u" && e instanceof ReadableStream;
}
class am {
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
const om = new am("https://demo.compas.energy", {}, "DSOM Versatel Production URL"), sm = [om], lm = sm[0].getUrl();
class Ru {
  constructor(t = {}) {
    this.configuration = t;
  }
  get basePath() {
    return this.configuration.basePath ?? lm;
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
class um {
  constructor(t = new Ru()) {
    this.configuration = t, this.middleware = [], this.withMiddleware = (n) => {
      const r = this.clone();
      return r.middleware = r.middleware.concat(n), r;
    }, this.withPreMiddleware = (n) => this.withMiddleware(n.map((r) => ({ pre: r }))), this.withPostMiddleware = (n) => this.withMiddleware(n.map((r) => ({ post: r }))), this.createRequestArgs = ({ url: n, query: r, method: i, headers: a, body: o, responseType: l }) => ({
      url: `${this.configuration.basePath}${n}${r && Object.keys(r).length ? `?${cm(r)}` : ""}`,
      method: i,
      headers: a,
      body: o instanceof FormData ? o : JSON.stringify(o),
      responseType: l ?? "json"
    }), this.rxjsRequest = (n) => Bp(n).pipe(
      fn((r) => (this.middleware.filter((i) => i.pre).forEach((i) => r = i.pre(r)), r)),
      Fp(
        (r) => Sr(r).pipe(
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
const tn = (e) => encodeURIComponent(`${e}`), cm = (e) => Object.entries(e).map(
  ([t, n]) => n instanceof Array ? n.map((r) => `${tn(t)}=${tn(r)}`).join("&") : `${tn(t)}=${tn(n)}`
).join("&"), _n = (e, t, n) => {
  if (e == null)
    throw new Error(`Parameter "${t}" was null or undefined when calling "${n}".`);
};
class dm extends um {
  assignResourceToLocation({ locationId: t, uuid: n }, r) {
    _n(t, "locationId", "assignResourceToLocation"), _n(n, "uuid", "assignResourceToLocation");
    const i = {};
    return this.request({
      url: "/api/locations/{locationId}/resources/{uuid}/assign".replace("{locationId}", tn(t)).replace("{uuid}", tn(n)),
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
      url: "/api/locations/{locationId}".replace("{locationId}", tn(t)),
      method: "DELETE",
      headers: r
    }, n == null ? void 0 : n.responseOpts);
  }
  getLocation({ locationId: t }, n) {
    _n(t, "locationId", "getLocation");
    const r = {};
    return this.request({
      url: "/api/locations/{locationId}".replace("{locationId}", tn(t)),
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
      url: "/api/locations/{locationId}/resources/{uuid}/unassign".replace("{locationId}", tn(t)).replace("{uuid}", tn(n)),
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
      url: "/api/locations/{locationId}".replace("{locationId}", tn(t)),
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
class Tr {
  constructor() {
    this.endpoint = "/compas-scl-data-service", this.locationsApiClient = this.createApiClient(this.endpoint);
  }
  static getInstance() {
    return Tr.instance || (Tr.instance = new Tr()), Tr.instance;
  }
  getLocations(t) {
    return this.locationsApiClient.getLocations({
      page: t == null ? void 0 : t.page,
      pageSize: t == null ? void 0 : t.pageSize
    }).pipe(
      fn((n) => n || []),
      fn((n) => n.map((r) => hi.from(r)))
    );
  }
  createLocation(t) {
    return this.locationsApiClient.createLocation({ location: t }).pipe(
      fn((n) => hi.from(n))
    );
  }
  deleteLocation(t) {
    return this.locationsApiClient.deleteLocation({ locationId: t }).pipe(fn(() => {
    }));
  }
  updateLocation(t) {
    return this.locationsApiClient.updateLocation({ locationId: t.locationId, location: t.location }).pipe(
      fn((n) => hi.from(n))
    );
  }
  createApiClient(t) {
    const n = new Ru({
      basePath: t
      // accessToken: authInfo.token,
    });
    return new dm(n);
  }
}
var En;
class fm {
  constructor() {
    Be(this, En, Rt([]));
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
    return Bl(F(this, En)).find((n) => n.uuid === t);
  }
}
En = new WeakMap();
oh({ en: Fh, de: Sh });
var hm = /* @__PURE__ */ J("<h3> </h3>"), vm = /* @__PURE__ */ J("<!> <!>", 1), gm = /* @__PURE__ */ J("<!> <!>", 1), pm = /* @__PURE__ */ J("<div><!> <!></div>"), mm = /* @__PURE__ */ J("<h3> </h3>"), bm = /* @__PURE__ */ J("<!> <!> <!> <!>", 1), _m = /* @__PURE__ */ J("<div><!></div>"), ym = /* @__PURE__ */ J("<!> <!>", 1), Em = /* @__PURE__ */ J("<!> <!>", 1), Sm = /* @__PURE__ */ J("<div><!> <!></div>"), Cm = /* @__PURE__ */ J("<!> <!>", 1), Am = /* @__PURE__ */ J("<!> <!>", 1), Im = /* @__PURE__ */ J('<h3 style="margin-bottom: 1rem;"> </h3> <!>', 1), xm = /* @__PURE__ */ J('<div class="location-manager-container"><!> <!> <!> <div style="margin-top: 10px; margin-bottom: 10px"><!> <!></div> <div class="table-container"><!></div></div>');
function wm(e, t) {
  we(t, !0);
  const n = () => Cn(ah, "$_", r), [r, i] = Zn(), a = Tr.getInstance(), o = new fm(), l = {
    Closed: "closed",
    Update: "update",
    Create: "create",
    Remove: "remove"
  };
  let s = /* @__PURE__ */ ye(!1), u = /* @__PURE__ */ ye(be(l.Closed)), d = /* @__PURE__ */ ye(!1), f = /* @__PURE__ */ ye(be(v()));
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
  ]), g = /* @__PURE__ */ ye(!0);
  gt(() => {
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
      callback: (G) => E(G),
      disabled: () => !1
    },
    {
      icon: "delete",
      callback: (G) => L(G),
      disabled: () => !1
    }
  ];
  function E(G) {
    z(f, { ...G }, !0), z(d, !0), z(u, l.Update, !0);
  }
  function y() {
    z(f, { ...v() }, !0), z(d, !0), z(u, l.Create, !0);
  }
  function L(G) {
    z(f, { ...G }, !0), z(d, !0), z(u, l.Remove, !0);
  }
  function x() {
    var G;
    try {
      const Z = ((G = c(f)) == null ? void 0 : G.uuid) !== void 0 && c(f).uuid !== "";
      (Z ? a.updateLocation({
        locationId: c(f).uuid,
        location: c(f)
      }) : a.createLocation(c(f))).pipe(
        Fs(1),
        ks((ve) => {
          Z ? o.update(ve) : o.add(ve);
        }),
        Ns(S)
      ).subscribe();
    } catch (Z) {
      console.error("Error saving location", Z);
    }
  }
  function m() {
    a.deleteLocation(c(f).uuid).subscribe({
      next: () => {
        o.remove(c(f).uuid), S();
      }
    });
  }
  function S() {
    z(u, l.Closed, !0), z(d, !1), z(f, { ...v() }, !0);
  }
  function b() {
    z(s, !1), a.getLocations().pipe(
      Fs(1),
      ks((G) => {
        o.set(G);
      }),
      Ns(() => {
        z(s, !0);
      })
    ).subscribe();
  }
  gt(() => {
    b();
  });
  var C = W(), w = V(C);
  {
    var H = (G) => {
      {
        let Z = /* @__PURE__ */ pe(() => !c(g));
        Ts(G, {
          get loadingDone() {
            return c(Z);
          }
        });
      }
    }, M = (G) => {
      var Z = xm(), te = ce(Z);
      Ts(te, {
        get loadingDone() {
          return c(s);
        }
      });
      var ve = ie(te, 2);
      {
        const A = (de) => {
          var le = hm(), Y = ce(le);
          Ae((ne) => nt(Y, ne), [
            () => {
              var ne;
              return n()("delete_location", { values: { name: (ne = c(f)) == null ? void 0 : ne.name } });
            }
          ]), I(de, le);
        }, j = (de) => {
          var le = pm(), Y = ce(le);
          nr(Y, {
            callback: m,
            variant: "raised",
            children: (ue, Ee) => {
              var Pe = vm(), $ = V(Pe);
              Ls($, {});
              var Te = ie($, 2);
              $n(Te, {
                children: (Oe, _e) => {
                  var Ce = Ct();
                  Ae((fe) => nt(Ce, fe), [() => n()("confirm")]), I(Oe, Ce);
                },
                $$slots: { default: !0 }
              }), I(ue, Pe);
            },
            $$slots: { default: !0 }
          });
          var ne = ie(Y, 2);
          nr(ne, {
            callback: S,
            variant: "raised",
            isAbortAction: !0,
            children: (ue, Ee) => {
              var Pe = gm(), $ = V(Pe);
              so($, {});
              var Te = ie($, 2);
              $n(Te, {
                children: (Oe, _e) => {
                  var Ce = Ct();
                  Ae((fe) => nt(Ce, fe), [() => n()("cancel")]), I(Oe, Ce);
                },
                $$slots: { default: !0 }
              }), I(ue, Pe);
            },
            $$slots: { default: !0 }
          }), I(de, le);
        };
        let ge = /* @__PURE__ */ pe(() => c(u) === l.Remove);
        xs(ve, {
          get open() {
            return c(ge);
          },
          onClose: S,
          title: A,
          actions: j,
          $$slots: { title: !0, actions: !0 }
        });
      }
      var R = ie(ve, 2);
      {
        const A = (le) => {
          var Y = mm(), ne = ce(Y);
          Ae((ue) => nt(ne, ue), [
            () => {
              var ue;
              return c(u) === l.Update ? n()("location", { values: { name: (ue = c(f)) == null ? void 0 : ue.name } }) : n()("new_location");
            }
          ]), I(le, Y);
        }, j = (le) => {
          var Y = _m(), ne = ce(Y);
          {
            var ue = (Ee) => {
              var Pe = bm(), $ = V(Pe);
              {
                var Te = (fe) => {
                  $n(fe, {
                    children: (Me, $e) => {
                      var T = Ct();
                      Ae(() => nt(T, c(f).uuid)), I(Me, T);
                    },
                    $$slots: { default: !0 }
                  });
                };
                re($, (fe) => {
                  c(u) === l.Update && fe(Te);
                });
              }
              var Oe = ie($, 2);
              {
                let fe = /* @__PURE__ */ pe(() => n()("name"));
                Da(Oe, {
                  get label() {
                    return c(fe);
                  },
                  get value() {
                    return c(f).name;
                  },
                  set value(Me) {
                    c(f).name = Me;
                  }
                });
              }
              var _e = ie(Oe, 2);
              {
                let fe = /* @__PURE__ */ pe(() => n()("key"));
                Da(_e, {
                  get label() {
                    return c(fe);
                  },
                  get value() {
                    return c(f).key;
                  },
                  set value(Me) {
                    c(f).key = Me;
                  }
                });
              }
              var Ce = ie(_e, 2);
              {
                let fe = /* @__PURE__ */ pe(() => n()("description"));
                Da(Ce, {
                  get label() {
                    return c(fe);
                  },
                  get value() {
                    return c(f).description;
                  },
                  set value(Me) {
                    c(f).description = Me;
                  }
                });
              }
              I(Ee, Pe);
            };
            re(ne, (Ee) => {
              c(f) && Ee(ue);
            });
          }
          I(le, Y);
        }, ge = (le) => {
          var Y = Sm(), ne = ce(Y);
          nr(ne, {
            callback: x,
            variant: "raised",
            children: (Ee, Pe) => {
              var $ = ym(), Te = V($);
              Ls(Te, {});
              var Oe = ie(Te, 2);
              $n(Oe, {
                children: (_e, Ce) => {
                  var fe = Ct();
                  Ae((Me) => nt(fe, Me), [() => n()("save")]), I(_e, fe);
                },
                $$slots: { default: !0 }
              }), I(Ee, $);
            },
            $$slots: { default: !0 }
          });
          var ue = ie(ne, 2);
          nr(ue, {
            callback: S,
            variant: "raised",
            isAbortAction: !0,
            children: (Ee, Pe) => {
              var $ = Em(), Te = V($);
              so(Te, {});
              var Oe = ie(Te, 2);
              $n(Oe, {
                children: (_e, Ce) => {
                  var fe = Ct();
                  Ae((Me) => nt(fe, Me), [() => n()("cancel")]), I(_e, fe);
                },
                $$slots: { default: !0 }
              }), I(Ee, $);
            },
            $$slots: { default: !0 }
          }), I(le, Y);
        };
        let de = /* @__PURE__ */ pe(() => c(u) === l.Update || c(u) === l.Create);
        xs(R, {
          get open() {
            return c(de);
          },
          onClose: S,
          title: A,
          content: j,
          actions: ge,
          $$slots: { title: !0, content: !0, actions: !0 }
        });
      }
      var D = ie(R, 2), O = ce(D);
      nr(O, {
        class: "button",
        callback: y,
        variant: "raised",
        children: (A, j) => {
          var ge = Cm(), de = V(ge);
          du(de, {});
          var le = ie(de, 2);
          $n(le, {
            children: (Y, ne) => {
              var ue = Ct();
              Ae((Ee) => nt(ue, Ee), [() => n()("add_location")]), I(Y, ue);
            },
            $$slots: { default: !0 }
          }), I(A, ge);
        },
        $$slots: { default: !0 }
      });
      var N = ie(O, 2);
      nr(N, {
        class: "button",
        callback: b,
        variant: "raised",
        children: (A, j) => {
          var ge = Am(), de = V(ge);
          fu(de, {});
          var le = ie(de, 2);
          $n(le, {
            children: (Y, ne) => {
              var ue = Ct();
              Ae((Ee) => nt(ue, Ee), [() => n()("refresh")]), I(Y, ue);
            },
            $$slots: { default: !0 }
          }), I(A, ge);
        },
        $$slots: { default: !0 }
      });
      var K = ie(D, 2), U = ce(K);
      op(U, {
        style: "padding: 1rem; width: 100%; height: 100%;",
        children: (A, j) => {
          var ge = Im(), de = V(ge), le = ce(de), Y = ie(de, 2);
          {
            let ne = /* @__PURE__ */ pe(() => n()("search"));
            ip(Y, {
              get columnDefs() {
                return c(h);
              },
              get store() {
                return o;
              },
              get loadingDone() {
                return c(s);
              },
              get rowActions() {
                return p;
              },
              get searchInputLabel() {
                return c(ne);
              }
            });
          }
          Ae((ne) => nt(le, ne), [() => n()("location_table")]), I(A, ge);
        },
        $$slots: { default: !0 }
      }), I(G, Z);
    };
    re(w, (G) => {
      c(g) ? G(H) : G(M, !1);
    });
  }
  I(e, C), Le(), i();
}
const Hu = "location-manager", Du = "0.0.1";
var Lm = /* @__PURE__ */ J('<!> <input type="hidden" name="package-name"/> <input type="hidden" name="package-version"/>', 1);
function Tm(e, t) {
  we(t, !0);
  let n = _(t, "dev", 3, !1);
  var r = Lm(), i = V(r);
  {
    var a = (s) => {
      wm(s, {});
    };
    re(i, (s) => {
      (t.doc || n()) && s(a);
    });
  }
  var o = ie(i, 2), l = ie(o, 2);
  Ae(() => {
    Ko(o, Hu), Ko(l, Du);
  }), I(e, r), Le();
}
var Fr;
class Pm extends HTMLElement {
  constructor() {
    super();
    Be(this, Fr);
    he(this, Fr, /* @__PURE__ */ ye(be({ doc: void 0, editCount: void 0 })));
  }
  get props() {
    return c(F(this, Fr));
  }
  set props(n) {
    z(F(this, Fr), n, !0);
  }
  connectedCallback() {
    var r;
    this.attachShadow({ mode: "open" }), this.props.doc = this._doc, this.props.editCount = this.editCount, Zc(Tm, { target: this.shadowRoot, props: this.props });
    const n = Om();
    (r = this.shadowRoot) == null || r.appendChild(n);
  }
  set doc(n) {
    this._doc = n, this.props.doc = n;
  }
  set editCount(n) {
    this._editCount = n, this.props.editCount = n;
  }
}
Fr = new WeakMap();
function Om() {
  const e = `${Hu}-v${Du}-style`, t = Rm(), n = document.createElement("link");
  return n.rel = "stylesheet", n.type = "text/css", n.href = t, n.id = e, n;
}
function Rm() {
  const e = new URL(import.meta.url), t = e.origin, n = e.pathname.split("/").slice(0, -1).filter(Boolean).join("/");
  return [t, n, "style.css"].filter(Boolean).join("/");
}
export {
  Pm as default
};
