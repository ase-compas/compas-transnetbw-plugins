var Mu = Object.defineProperty;
var Uo = (e) => {
  throw TypeError(e);
};
var Bu = (e, t, n) => t in e ? Mu(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var xr = (e, t, n) => Bu(e, typeof t != "symbol" ? t + "" : t, n), Ea = (e, t, n) => t.has(e) || Uo("Cannot " + n);
var N = (e, t, n) => (Ea(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Pe = (e, t, n) => t.has(e) ? Uo("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), ve = (e, t, n, r) => (Ea(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), Et = (e, t, n) => (Ea(e, t, "access private method"), n);
const lt = Symbol(), Uu = "http://www.w3.org/1999/xhtml", Fu = "http://www.w3.org/2000/svg", Nu = "@attach", qs = !1;
var la = Array.isArray, ku = Array.prototype.indexOf, vo = Array.from, Yi = Object.defineProperty, Gn = Object.getOwnPropertyDescriptor, zs = Object.getOwnPropertyDescriptors, Gu = Object.prototype, ju = Array.prototype, go = Object.getPrototypeOf, Fo = Object.isExtensible;
function ri(e) {
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
const Dt = 2, po = 4, mo = 8, pr = 16, An = 32, mr = 64, bo = 128, Yt = 256, Ki = 512, At = 1024, Vt = 2048, Xn = 4096, rn = 8192, br = 16384, _o = 32768, _r = 65536, No = 1 << 17, Vu = 1 << 18, Kr = 1 << 19, qu = 1 << 20, Ga = 1 << 21, ua = 1 << 22, dr = 1 << 23, hn = Symbol("$state"), Zs = Symbol("legacy props"), zu = Symbol(""), Tr = new class extends Error {
  constructor() {
    super(...arguments);
    xr(this, "name", "StaleReactionError");
    xr(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
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
let Qr = !1, ac = !1;
function oc() {
  Qr = !0;
}
let ze = null;
function kr(e) {
  ze = e;
}
function pe(e) {
  return (
    /** @type {T} */
    Qs().get(e)
  );
}
function le(e, t) {
  return Qs().set(e, t), t;
}
function Le(e, t = !1, n) {
  ze = {
    p: ze,
    c: null,
    e: null,
    s: e,
    x: null,
    l: Qr && !t ? { s: null, u: null, $: [] } : null
  };
}
function Te(e) {
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
function Si() {
  return !Qr || ze !== null && ze.l === null;
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
let ar = [];
function Js() {
  var e = ar;
  ar = [], Xs(e);
}
function zn(e) {
  if (ar.length === 0 && !fi) {
    var t = ar;
    queueMicrotask(() => {
      t === ar && Js();
    });
  }
  ar.push(e);
}
function lc() {
  for (; ar.length > 0; )
    Js();
}
const uc = /* @__PURE__ */ new WeakMap();
function $s(e) {
  var t = we;
  if (t === null)
    return xe.f |= dr, e;
  if (t.f & _o)
    Gr(e, t);
  else {
    if (!(t.f & bo))
      throw !t.parent && e instanceof Error && el(e), e;
    t.b.error(e);
  }
}
function Gr(e, t) {
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
  t && (Yi(e, "message", {
    value: t.message
  }), Yi(e, "stack", {
    value: t.stack
  }));
}
const Hi = /* @__PURE__ */ new Set();
let Ne = null, Vi = null, ht = null, ja = /* @__PURE__ */ new Set(), dn = [], ca = null, Va = !1, fi = !1;
var Pr, Mr, or, _i, Br, Ur, sr, Fr, yi, Ei, Kt, qa, qi, za;
const aa = class aa {
  constructor() {
    Pe(this, Kt);
    /**
     * The current values of any sources that are updated in this batch
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Source, any>}
     */
    xr(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any sources that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Source, any>}
     */
    Pe(this, Pr, /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<() => void>}
     */
    Pe(this, Mr, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    Pe(this, or, 0);
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    Pe(this, _i, null);
    /**
     * Async effects inside a newly-created `<svelte:boundary>`
     * — these do not prevent the batch from committing
     * @type {Effect[]}
     */
    Pe(this, Br, []);
    /**
     * Template effects and `$effect.pre` effects, which run when
     * a batch is committed
     * @type {Effect[]}
     */
    Pe(this, Ur, []);
    /**
     * The same as `#render_effects`, but for `$effect` (which runs after)
     * @type {Effect[]}
     */
    Pe(this, sr, []);
    /**
     * Block effects, which may need to re-run on subsequent flushes
     * in order to update internal sources (e.g. each block items)
     * @type {Effect[]}
     */
    Pe(this, Fr, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Effect[]}
     */
    Pe(this, yi, []);
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Effect[]}
     */
    Pe(this, Ei, []);
    /**
     * A set of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`
     * @type {Set<Effect>}
     */
    xr(this, "skipped_effects", /* @__PURE__ */ new Set());
  }
  /**
   *
   * @param {Effect[]} root_effects
   */
  process(t) {
    var a;
    dn = [], Vi = null, this.apply();
    for (const o of t)
      Et(this, Kt, qa).call(this, o);
    if (N(this, or) === 0) {
      var n = ht;
      Et(this, Kt, za).call(this);
      var r = N(this, Ur), i = N(this, sr);
      ve(this, Ur, []), ve(this, sr, []), ve(this, Fr, []), Vi = this, Ne = null, ht = n, ko(r), ko(i), Vi = null, (a = N(this, _i)) == null || a.resolve();
    } else
      Et(this, Kt, qi).call(this, N(this, Ur)), Et(this, Kt, qi).call(this, N(this, sr)), Et(this, Kt, qi).call(this, N(this, Fr));
    ht = null;
    for (const o of N(this, Br))
      pi(o);
    ve(this, Br, []);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Source} source
   * @param {any} value
   */
  capture(t, n) {
    N(this, Pr).has(t) || N(this, Pr).set(t, n), this.current.set(t, t.v), ht == null || ht.set(t, t.v);
  }
  activate() {
    Ne = this;
  }
  deactivate() {
    Ne = null, ht = null;
  }
  flush() {
    if (dn.length > 0) {
      if (this.activate(), tl(), Ne !== null && Ne !== this)
        return;
    } else N(this, or) === 0 && Et(this, Kt, za).call(this);
    this.deactivate();
    for (const t of ja)
      if (ja.delete(t), t(), Ne !== null)
        break;
  }
  increment() {
    ve(this, or, N(this, or) + 1);
  }
  decrement() {
    ve(this, or, N(this, or) - 1);
    for (const t of N(this, yi))
      Ot(t, Vt), vr(t);
    for (const t of N(this, Ei))
      Ot(t, Xn), vr(t);
    this.flush();
  }
  /** @param {() => void} fn */
  add_callback(t) {
    N(this, Mr).add(t);
  }
  settled() {
    return (N(this, _i) ?? ve(this, _i, Ws())).promise;
  }
  static ensure() {
    if (Ne === null) {
      const t = Ne = new aa();
      Hi.add(Ne), fi || aa.enqueue(() => {
        Ne === t && t.flush();
      });
    }
    return Ne;
  }
  /** @param {() => void} task */
  static enqueue(t) {
    zn(t);
  }
  apply() {
  }
};
Pr = new WeakMap(), Mr = new WeakMap(), or = new WeakMap(), _i = new WeakMap(), Br = new WeakMap(), Ur = new WeakMap(), sr = new WeakMap(), Fr = new WeakMap(), yi = new WeakMap(), Ei = new WeakMap(), Kt = new WeakSet(), /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 */
qa = function(t) {
  var u;
  t.f ^= At;
  for (var n = t.first; n !== null; ) {
    var r = n.f, i = (r & (An | mr)) !== 0, a = i && (r & At) !== 0, o = a || (r & rn) !== 0 || this.skipped_effects.has(n);
    if (!o && n.fn !== null) {
      i ? n.f ^= At : r & po ? N(this, sr).push(n) : r & At || (r & ua && ((u = n.b) != null && u.is_pending()) ? N(this, Br).push(n) : pa(n) && (n.f & pr && N(this, Fr).push(n), pi(n)));
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
qi = function(t) {
  for (const n of t)
    (n.f & Vt ? N(this, yi) : N(this, Ei)).push(n), Ot(n, At);
  t.length = 0;
}, /**
 * Append and remove branches to/from the DOM
 */
za = function() {
  var t;
  for (const n of N(this, Mr))
    n();
  if (N(this, Mr).clear(), Hi.size > 1) {
    N(this, Pr).clear();
    let n = !0;
    for (const r of Hi) {
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
          Ne = r, r.apply();
          for (const o of dn)
            Et(t = r, Kt, qa).call(t, o);
          dn = [], r.deactivate();
        }
      }
    }
    Ne = null;
  }
  Hi.delete(this);
};
let Sn = aa;
function cc(e) {
  var t = fi;
  fi = !0;
  try {
    for (var n; ; ) {
      if (lc(), dn.length === 0 && (Ne == null || Ne.flush(), dn.length === 0))
        return ca = null, /** @type {T} */
        n;
      tl();
    }
  } finally {
    fi = t;
  }
}
function tl() {
  var e = Rr;
  Va = !0;
  try {
    var t = 0;
    for (Vo(!0); dn.length > 0; ) {
      var n = Sn.ensure();
      if (t++ > 1e3) {
        var r, i;
        dc();
      }
      n.process(dn), jn.clear();
    }
  } finally {
    Va = !1, Vo(e), ca = null;
  }
}
function dc() {
  try {
    Ku();
  } catch (e) {
    Gr(e, ca);
  }
}
let yn = null;
function ko(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t; ) {
      var r = e[n++];
      if (!(r.f & (br | rn)) && pa(r) && (yn = [], pi(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null && r.ac === null ? pl(r) : r.fn = null), (yn == null ? void 0 : yn.length) > 0)) {
        jn.clear();
        for (const i of yn)
          pi(i);
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
      ) : r & (ua | pr) && rl(n, t) && (Ot(n, Vt), vr(
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
function vr(e) {
  for (var t = ca = e; t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if (Va && t === we && n & pr)
      return;
    if (n & (mr | An)) {
      if (!(n & At)) return;
      t.f ^= At;
    }
  }
  dn.push(t);
}
function fc(e) {
  let t = 0, n = gr(0), r;
  return () => {
    Oc() && (c(n), va(() => (t === 0 && (r = Yn(() => e(() => hi(n)))), t += 1, () => {
      zn(() => {
        t -= 1, t === 0 && (r == null || r(), r = void 0, hi(n));
      });
    })));
  };
}
var hc = _r | Kr | bo;
function vc(e, t, n) {
  new gc(e, t, n);
}
var $t, Wt, ho, ln, lr, un, Zt, Mt, cn, Pn, ur, Mn, cr, Bn, oa, sa, Ht, pc, mc, zi, Xi, Xa;
class gc {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   */
  constructor(t, n, r) {
    Pe(this, Ht);
    /** @type {Boundary | null} */
    xr(this, "parent");
    Pe(this, $t, !1);
    /** @type {TemplateNode} */
    Pe(this, Wt);
    /** @type {TemplateNode | null} */
    Pe(this, ho, null);
    /** @type {BoundaryProps} */
    Pe(this, ln);
    /** @type {((anchor: Node) => void)} */
    Pe(this, lr);
    /** @type {Effect} */
    Pe(this, un);
    /** @type {Effect | null} */
    Pe(this, Zt, null);
    /** @type {Effect | null} */
    Pe(this, Mt, null);
    /** @type {Effect | null} */
    Pe(this, cn, null);
    /** @type {DocumentFragment | null} */
    Pe(this, Pn, null);
    Pe(this, ur, 0);
    Pe(this, Mn, 0);
    Pe(this, cr, !1);
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    Pe(this, Bn, null);
    Pe(this, oa, () => {
      N(this, Bn) && jr(N(this, Bn), N(this, ur));
    });
    Pe(this, sa, fc(() => (ve(this, Bn, gr(N(this, ur))), () => {
      ve(this, Bn, null);
    })));
    ve(this, Wt, t), ve(this, ln, n), ve(this, lr, r), this.parent = /** @type {Effect} */
    we.b, ve(this, $t, !!N(this, ln).pending), ve(this, un, Zn(() => {
      we.b = this;
      {
        try {
          ve(this, Zt, St(() => r(N(this, Wt))));
        } catch (i) {
          this.error(i);
        }
        N(this, Mn) > 0 ? Et(this, Ht, Xi).call(this) : ve(this, $t, !1);
      }
    }, hc));
  }
  /**
   * Returns `true` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_pending() {
    return N(this, $t) || !!this.parent && this.parent.is_pending();
  }
  has_pending_snippet() {
    return !!N(this, ln).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   */
  update_pending_count(t) {
    Et(this, Ht, Xa).call(this, t), ve(this, ur, N(this, ur) + t), ja.add(N(this, oa));
  }
  get_effect_pending() {
    return N(this, sa).call(this), c(
      /** @type {Source<number>} */
      N(this, Bn)
    );
  }
  /** @param {unknown} error */
  error(t) {
    var n = N(this, ln).onerror;
    let r = N(this, ln).failed;
    if (N(this, cr) || !n && !r)
      throw t;
    N(this, Zt) && (vt(N(this, Zt)), ve(this, Zt, null)), N(this, Mt) && (vt(N(this, Mt)), ve(this, Mt, null)), N(this, cn) && (vt(N(this, cn)), ve(this, cn, null));
    var i = !1, a = !1;
    const o = () => {
      if (i) {
        rc();
        return;
      }
      i = !0, a && tc(), Sn.ensure(), ve(this, ur, 0), N(this, cn) !== null && Vn(N(this, cn), () => {
        ve(this, cn, null);
      }), ve(this, $t, this.has_pending_snippet()), ve(this, Zt, Et(this, Ht, zi).call(this, () => (ve(this, cr, !1), St(() => N(this, lr).call(this, N(this, Wt)))))), N(this, Mn) > 0 ? Et(this, Ht, Xi).call(this) : ve(this, $t, !1);
    };
    var l = xe;
    try {
      Bt(null), a = !0, n == null || n(t, o), a = !1;
    } catch (s) {
      Gr(s, N(this, un) && N(this, un).parent);
    } finally {
      Bt(l);
    }
    r && zn(() => {
      ve(this, cn, Et(this, Ht, zi).call(this, () => {
        ve(this, cr, !0);
        try {
          return St(() => {
            r(
              N(this, Wt),
              () => t,
              () => o
            );
          });
        } catch (s) {
          return Gr(
            s,
            /** @type {Effect} */
            N(this, un).parent
          ), null;
        } finally {
          ve(this, cr, !1);
        }
      }));
    });
  }
}
$t = new WeakMap(), Wt = new WeakMap(), ho = new WeakMap(), ln = new WeakMap(), lr = new WeakMap(), un = new WeakMap(), Zt = new WeakMap(), Mt = new WeakMap(), cn = new WeakMap(), Pn = new WeakMap(), ur = new WeakMap(), Mn = new WeakMap(), cr = new WeakMap(), Bn = new WeakMap(), oa = new WeakMap(), sa = new WeakMap(), Ht = new WeakSet(), pc = function() {
  try {
    ve(this, Zt, St(() => N(this, lr).call(this, N(this, Wt))));
  } catch (t) {
    this.error(t);
  }
  ve(this, $t, !1);
}, mc = function() {
  const t = N(this, ln).pending;
  t && (ve(this, Mt, St(() => t(N(this, Wt)))), Sn.enqueue(() => {
    ve(this, Zt, Et(this, Ht, zi).call(this, () => (Sn.ensure(), St(() => N(this, lr).call(this, N(this, Wt)))))), N(this, Mn) > 0 ? Et(this, Ht, Xi).call(this) : (Vn(
      /** @type {Effect} */
      N(this, Mt),
      () => {
        ve(this, Mt, null);
      }
    ), ve(this, $t, !1));
  }));
}, /**
 * @param {() => Effect | null} fn
 */
zi = function(t) {
  var n = we, r = xe, i = ze;
  vn(N(this, un)), Bt(N(this, un)), kr(N(this, un).ctx);
  try {
    return t();
  } catch (a) {
    return $s(a), null;
  } finally {
    vn(n), Bt(r), kr(i);
  }
}, Xi = function() {
  const t = (
    /** @type {(anchor: Node) => void} */
    N(this, ln).pending
  );
  N(this, Zt) !== null && (ve(this, Pn, document.createDocumentFragment()), bc(N(this, Zt), N(this, Pn))), N(this, Mt) === null && ve(this, Mt, St(() => t(N(this, Wt))));
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 */
Xa = function(t) {
  var n;
  if (!this.has_pending_snippet()) {
    this.parent && Et(n = this.parent, Ht, Xa).call(n, t);
    return;
  }
  ve(this, Mn, N(this, Mn) + t), N(this, Mn) === 0 && (ve(this, $t, !1), N(this, Mt) && Vn(N(this, Mt), () => {
    ve(this, Mt, null);
  }), N(this, Pn) && (N(this, Wt).before(N(this, Pn)), ve(this, Pn, null)), zn(() => {
    Sn.ensure().flush();
  }));
};
function bc(e, t) {
  for (var n = e.nodes_start, r = e.nodes_end; n !== null; ) {
    var i = n === r ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Ci(n)
    );
    t.append(n), n = i;
  }
}
function il(e, t, n) {
  const r = Si() ? da : So;
  if (t.length === 0) {
    n(e.map(r));
    return;
  }
  var i = Ne, a = (
    /** @type {Effect} */
    we
  ), o = _c();
  Promise.all(t.map((l) => /* @__PURE__ */ yc(l))).then((l) => {
    o();
    try {
      n([...e.map(r), ...l]);
    } catch (s) {
      a.f & br || Gr(s, a);
    }
    i == null || i.deactivate(), Wa();
  }).catch((l) => {
    Gr(l, a);
  });
}
function _c() {
  var e = we, t = xe, n = ze, r = Ne;
  return function() {
    vn(e), Bt(t), kr(n), r == null || r.activate();
  };
}
function Wa() {
  vn(null), Bt(null), kr(null);
}
// @__NO_SIDE_EFFECTS__
function da(e) {
  var t = Dt | Vt, n = xe !== null && xe.f & Dt ? (
    /** @type {Derived} */
    xe
  ) : null;
  return we === null || n !== null && n.f & Yt ? t |= Yt : we.f |= Kr, {
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
  ), a = gr(
    /** @type {V} */
    lt
  ), o = !xe, l = /* @__PURE__ */ new Map();
  return Hc(() => {
    var v;
    var s = Ws();
    i = s.promise;
    try {
      Promise.resolve(e()).then(s.resolve, s.reject).then(Wa);
    } catch (h) {
      s.reject(h), Wa();
    }
    var u = (
      /** @type {Batch} */
      Ne
    ), d = r.is_pending();
    o && (r.update_pending_count(1), d || (u.increment(), (v = l.get(u)) == null || v.reject(Tr), l.delete(u), l.set(u, s)));
    const f = (h, g = void 0) => {
      if (d || u.activate(), g)
        g !== Tr && (a.f |= dr, jr(a, g));
      else {
        a.f & dr && (a.f ^= dr), jr(a, h);
        for (const [p, E] of l) {
          if (l.delete(p), p === u) break;
          E.reject(Tr);
        }
      }
      o && (r.update_pending_count(-1), d || u.decrement());
    };
    s.promise.then(f, (h) => f(null, h || "unknown"));
  }), ha(() => {
    for (const s of l.values())
      s.reject(Tr);
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
function ge(e) {
  const t = /* @__PURE__ */ da(e);
  return _l(t), t;
}
// @__NO_SIDE_EFFECTS__
function So(e) {
  const t = /* @__PURE__ */ da(e);
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
function Co(e) {
  var t, n = we;
  vn(Ec(e));
  try {
    al(e), t = Cl(e);
  } finally {
    vn(n);
  }
  return t;
}
function ol(e) {
  var t = Co(e);
  if (e.equals(t) || (e.v = t, e.wv = El()), !yr)
    if (ht !== null)
      ht.set(e, e.v);
    else {
      var n = (Un || e.f & Yt) && e.deps !== null ? Xn : At;
      Ot(e, n);
    }
}
const jn = /* @__PURE__ */ new Map();
function gr(e, t) {
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
function _e(e, t) {
  const n = gr(e);
  return _l(n), n;
}
// @__NO_SIDE_EFFECTS__
function sl(e, t = !1, n = !0) {
  var i;
  const r = gr(e);
  return t || (r.equals = Ks), Qr && n && ze !== null && ze.l !== null && ((i = ze.l).s ?? (i.s = [])).push(r), r;
}
function X(e, t, n = !1) {
  xe !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!nn || xe.f & No) && Si() && xe.f & (Dt | pr | ua | No) && !(Tt != null && Tt.includes(e)) && ec();
  let r = n ? me(t) : t;
  return jr(e, r);
}
function jr(e, t) {
  if (!e.equals(t)) {
    var n = e.v;
    yr ? jn.set(e, t) : jn.set(e, n), e.v = t;
    var r = Sn.ensure();
    r.capture(e, n), e.f & Dt && (e.f & Vt && Co(
      /** @type {Derived} */
      e
    ), Ot(e, e.f & Yt ? Xn : At)), e.wv = El(), ll(e, Vt), Si() && we !== null && we.f & At && !(we.f & (An | mr)) && (Xt === null ? Mc([e]) : Xt.push(e));
  }
  return t;
}
function hi(e) {
  X(e, e.v + 1);
}
function ll(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var r = Si(), i = n.length, a = 0; a < i; a++) {
      var o = n[a], l = o.f;
      if (!(!r && o === we)) {
        var s = (l & Vt) === 0;
        s && Ot(o, t), l & Dt ? ll(
          /** @type {Derived} */
          o,
          Xn
        ) : s && (l & pr && yn !== null && yn.push(
          /** @type {Effect} */
          o
        ), vr(
          /** @type {Effect} */
          o
        ));
      }
    }
}
function me(e) {
  if (typeof e != "object" || e === null || hn in e)
    return e;
  const t = go(e);
  if (t !== Gu && t !== ju)
    return e;
  var n = /* @__PURE__ */ new Map(), r = la(e), i = /* @__PURE__ */ _e(0), a = fr, o = (l) => {
    if (fr === a)
      return l();
    var s = xe, u = fr;
    Bt(null), zo(a);
    var d = l();
    return Bt(s), zo(u), d;
  };
  return r && n.set("length", /* @__PURE__ */ _e(
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
          var f = /* @__PURE__ */ _e(u.value);
          return n.set(s, f), f;
        }) : X(d, u.value, !0), !0;
      },
      deleteProperty(l, s) {
        var u = n.get(s);
        if (u === void 0) {
          if (s in l) {
            const d = o(() => /* @__PURE__ */ _e(lt));
            n.set(s, d), hi(i);
          }
        } else
          X(u, lt), hi(i);
        return !0;
      },
      get(l, s, u) {
        var h;
        if (s === hn)
          return e;
        var d = n.get(s), f = s in l;
        if (d === void 0 && (!f || (h = Gn(l, s)) != null && h.writable) && (d = o(() => {
          var g = me(f ? l[s] : lt), p = /* @__PURE__ */ _e(g);
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
        if (u !== void 0 || we !== null && (!d || (v = Gn(l, s)) != null && v.writable)) {
          u === void 0 && (u = o(() => {
            var h = d ? me(l[s]) : lt, g = /* @__PURE__ */ _e(h);
            return g;
          }), n.set(s, u));
          var f = c(u);
          if (f === lt)
            return !1;
        }
        return d;
      },
      set(l, s, u, d) {
        var w;
        var f = n.get(s), v = s in l;
        if (r && s === "length")
          for (var h = u; h < /** @type {Source<number>} */
          f.v; h += 1) {
            var g = n.get(h + "");
            g !== void 0 ? X(g, lt) : h in l && (g = o(() => /* @__PURE__ */ _e(lt)), n.set(h + "", g));
          }
        if (f === void 0)
          (!v || (w = Gn(l, s)) != null && w.writable) && (f = o(() => /* @__PURE__ */ _e(void 0)), X(f, me(u)), n.set(s, f));
        else {
          v = f.v !== lt;
          var p = o(() => me(u));
          X(f, p);
        }
        var E = Reflect.getOwnPropertyDescriptor(l, s);
        if (E != null && E.set && E.set.call(d, u), !v) {
          if (r && typeof s == "string") {
            var y = (
              /** @type {Source<number>} */
              n.get("length")
            ), T = Number(s);
            Number.isInteger(T) && T >= y.v && X(y, T + 1);
          }
          hi(i);
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
function Go(e) {
  try {
    if (e !== null && typeof e == "object" && hn in e)
      return e[hn];
  } catch {
  }
  return e;
}
function Sc(e, t) {
  return Object.is(Go(e), Go(t));
}
var Qi, ul, cl, dl, fl;
function Cc() {
  if (Qi === void 0) {
    Qi = window, ul = document, cl = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    dl = Gn(t, "firstChild").get, fl = Gn(t, "nextSibling").get, Fo(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), Fo(n) && (n.__t = void 0);
  }
}
function Wn(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function Vr(e) {
  return dl.call(e);
}
// @__NO_SIDE_EFFECTS__
function Ci(e) {
  return fl.call(e);
}
function ce(e, t) {
  return /* @__PURE__ */ Vr(e);
}
function j(e, t = !1) {
  {
    var n = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ Vr(
        /** @type {Node} */
        e
      )
    );
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ Ci(n) : n;
  }
}
function ie(e, t = 1, n = !1) {
  let r = e;
  for (; t--; )
    r = /** @type {TemplateNode} */
    /* @__PURE__ */ Ci(r);
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
    e.autofocus = !0, zn(() => {
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
function fa(e) {
  var t = xe, n = we;
  Bt(null), vn(null);
  try {
    return e();
  } finally {
    Bt(t), vn(n);
  }
}
function wc(e, t, n, r = n) {
  e.addEventListener(t, () => fa(n));
  const i = e.__on_r;
  i ? e.__on_r = () => {
    i(), r(!0);
  } : e.__on_r = () => r(!0), xc();
}
function Lc(e) {
  we === null && xe === null && Yu(), xe !== null && xe.f & Yt && we === null && Zu(), yr && Wu();
}
function Tc(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function In(e, t, n, r = !0) {
  var i = we;
  i !== null && i.f & rn && (e |= rn);
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
      pi(a), a.f |= _o;
    } catch (s) {
      throw vt(a), s;
    }
  else t !== null && vr(a);
  if (r) {
    var o = a;
    if (n && o.deps === null && o.teardown === null && o.nodes_start === null && o.first === o.last && // either `null`, or a singular child
    !(o.f & Kr) && (o = o.first), o !== null && (o.parent = i, i !== null && Tc(o, i), xe !== null && xe.f & Dt && !(e & mr))) {
      var l = (
        /** @type {Derived} */
        xe
      );
      (l.effects ?? (l.effects = [])).push(o);
    }
  }
  return a;
}
function Oc() {
  return xe !== null && !nn;
}
function ha(e) {
  const t = In(mo, null, !1);
  return Ot(t, At), t.teardown = e, t;
}
function Me(e) {
  Lc();
  var t = (
    /** @type {Effect} */
    we.f
  ), n = !xe && (t & An) !== 0 && (t & _o) === 0;
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
  return In(po | qu, e, !1);
}
function Rc(e) {
  Sn.ensure();
  const t = In(mr | Kr, e, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? Vn(t, () => {
      vt(t), r(void 0);
    }) : (vt(t), r(void 0));
  });
}
function Ai(e) {
  return In(po, e, !1);
}
function Hc(e) {
  return In(ua | Kr, e, !0);
}
function va(e, t = 0) {
  return In(mo | t, e, !0);
}
function Ae(e, t = [], n = []) {
  il(t, n, (r) => {
    In(mo, () => e(...r.map(c)), !0);
  });
}
function Zn(e, t = 0) {
  var n = In(pr | t, e, !0);
  return n;
}
function St(e, t = !0) {
  return In(An | Kr, e, !0, t);
}
function vl(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = yr, r = xe;
    qo(!0), Bt(null);
    try {
      t.call(null);
    } finally {
      qo(n), Bt(r);
    }
  }
}
function gl(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    const i = n.ac;
    i !== null && fa(() => {
      i.abort(Tr);
    });
    var r = n.next;
    n.f & mr ? n.parent = null : vt(n, t), n = r;
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
  ), n = !0), gl(e, t && !n), Ji(e, 0), Ot(e, br);
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
      /* @__PURE__ */ Ci(e)
    );
    e.remove(), e = n;
  }
}
function pl(e) {
  var t = e.parent, n = e.prev, r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function Vn(e, t) {
  var n = [];
  Io(e, n, !0), ml(n, () => {
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
function Io(e, t, n) {
  if (!(e.f & rn)) {
    if (e.f ^= rn, e.transitions !== null)
      for (const o of e.transitions)
        (o.is_global || n) && t.push(o);
    for (var r = e.first; r !== null; ) {
      var i = r.next, a = (r.f & _r) !== 0 || (r.f & An) !== 0;
      Io(r, t, a ? n : !1), r = i;
    }
  }
}
function ga(e) {
  bl(e, !0);
}
function bl(e, t) {
  if (e.f & rn) {
    e.f ^= rn, e.f & At || (Ot(e, Vt), vr(e));
    for (var n = e.first; n !== null; ) {
      var r = n.next, i = (n.f & _r) !== 0 || (n.f & An) !== 0;
      bl(n, i ? t : !1), n = r;
    }
    if (e.transitions !== null)
      for (const a of e.transitions)
        (a.is_global || t) && a.in();
  }
}
let Rr = !1;
function Vo(e) {
  Rr = e;
}
let yr = !1;
function qo(e) {
  yr = e;
}
let xe = null, nn = !1;
function Bt(e) {
  xe = e;
}
let we = null;
function vn(e) {
  we = e;
}
let Tt = null;
function _l(e) {
  xe !== null && (Tt === null ? Tt = [e] : Tt.push(e));
}
let Lt = null, Gt = 0, Xt = null;
function Mc(e) {
  Xt = e;
}
let yl = 1, gi = 0, fr = gi;
function zo(e) {
  fr = e;
}
let Un = !1;
function El() {
  return ++yl;
}
function pa(e) {
  var f;
  var t = e.f;
  if (t & Vt)
    return !0;
  if (t & Xn) {
    var n = e.deps, r = (t & Yt) !== 0;
    if (n !== null) {
      var i, a, o = (t & Ki) !== 0, l = r && we !== null && !Un, s = n.length;
      if ((o || l) && (we === null || !(we.f & br))) {
        var u = (
          /** @type {Derived} */
          e
        ), d = u.parent;
        for (i = 0; i < s; i++)
          a = n[i], (o || !((f = a == null ? void 0 : a.reactions) != null && f.includes(u))) && (a.reactions ?? (a.reactions = [])).push(u);
        o && (u.f ^= Ki), l && d !== null && !(d.f & Yt) && (u.f ^= Yt);
      }
      for (i = 0; i < s; i++)
        if (a = n[i], pa(
          /** @type {Derived} */
          a
        ) && ol(
          /** @type {Derived} */
          a
        ), a.wv > e.wv)
          return !0;
    }
    (!r || we !== null && !Un) && Ot(e, At);
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
      ) : t === a && (n ? Ot(a, Vt) : a.f & At && Ot(a, Xn), vr(
        /** @type {Effect} */
        a
      ));
    }
}
function Cl(e) {
  var p;
  var t = Lt, n = Gt, r = Xt, i = xe, a = Un, o = Tt, l = ze, s = nn, u = fr, d = e.f;
  Lt = /** @type {null | Value[]} */
  null, Gt = 0, Xt = null, Un = (d & Yt) !== 0 && (nn || !Rr || xe === null), xe = d & (An | mr) ? null : e, Tt = null, kr(e.ctx), nn = !1, fr = ++gi, e.ac !== null && (fa(() => {
    e.ac.abort(Tr);
  }), e.ac = null);
  try {
    e.f |= Ga;
    var f = (
      /** @type {Function} */
      e.fn
    ), v = f(), h = e.deps;
    if (Lt !== null) {
      var g;
      if (Ji(e, Gt), h !== null && Gt > 0)
        for (h.length = Gt + Lt.length, g = 0; g < Lt.length; g++)
          h[Gt + g] = Lt[g];
      else
        e.deps = h = Lt;
      if (!Un || // Deriveds that already have reactions can cleanup, so we still add them as reactions
      d & Dt && /** @type {import('#client').Derived} */
      e.reactions !== null)
        for (g = Gt; g < h.length; g++)
          ((p = h[g]).reactions ?? (p.reactions = [])).push(e);
    } else h !== null && Gt < h.length && (Ji(e, Gt), h.length = Gt);
    if (Si() && Xt !== null && !nn && h !== null && !(e.f & (Dt | Xn | Vt)))
      for (g = 0; g < /** @type {Source[]} */
      Xt.length; g++)
        Sl(
          Xt[g],
          /** @type {Effect} */
          e
        );
    return i !== null && i !== e && (gi++, Xt !== null && (r === null ? r = Xt : r.push(.../** @type {Source[]} */
    Xt))), e.f & dr && (e.f ^= dr), v;
  } catch (E) {
    return $s(E);
  } finally {
    e.f ^= Ga, Lt = t, Gt = n, Xt = r, xe = i, Un = a, Tt = o, kr(l), nn = s, fr = u;
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
  (Lt === null || !Lt.includes(t)) && (Ot(t, Xn), t.f & (Yt | Ki) || (t.f ^= Ki), al(
    /** @type {Derived} **/
    t
  ), Ji(
    /** @type {Derived} **/
    t,
    0
  ));
}
function Ji(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var r = t; r < n.length; r++)
      Bc(e, n[r]);
}
function pi(e) {
  var t = e.f;
  if (!(t & br)) {
    Ot(e, At);
    var n = we, r = Rr;
    we = e, Rr = !0;
    try {
      t & pr ? Dc(e) : gl(e), vl(e);
      var i = Cl(e);
      e.teardown = typeof i == "function" ? i : null, e.wv = yl;
      var a;
      qs && ac && e.f & Vt && e.deps;
    } finally {
      Rr = r, we = n;
    }
  }
}
async function Al() {
  await Promise.resolve(), cc();
}
function c(e) {
  var t = e.f, n = (t & Dt) !== 0;
  if (xe !== null && !nn) {
    var r = we !== null && (we.f & br) !== 0;
    if (!r && !(Tt != null && Tt.includes(e))) {
      var i = xe.deps;
      if (xe.f & Ga)
        e.rv < gi && (e.rv = gi, Lt === null && i !== null && i[Gt] === e ? Gt++ : Lt === null ? Lt = [e] : (!Un || !Lt.includes(e)) && Lt.push(e));
      else {
        (xe.deps ?? (xe.deps = [])).push(e);
        var a = e.reactions;
        a === null ? e.reactions = [xe] : a.includes(xe) || a.push(xe);
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
  if (yr) {
    if (jn.has(e))
      return jn.get(e);
    if (n) {
      o = /** @type {Derived} */
      e;
      var s = o.v;
      return (!(o.f & At) && o.reactions !== null || Il(o)) && (s = Co(o)), jn.set(o, s), s;
    }
  } else if (n) {
    if (o = /** @type {Derived} */
    e, ht != null && ht.has(o))
      return ht.get(o);
    pa(o) && ol(o);
  }
  if (ht != null && ht.has(e))
    return ht.get(e);
  if (e.f & dr)
    throw e.v;
  return e.v;
}
function Il(e) {
  if (e.v === lt) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (jn.has(t) || t.f & Dt && Il(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function Yn(e) {
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
      Za(e);
    else if (!Array.isArray(e))
      for (let t in e) {
        const n = e[t];
        typeof n == "object" && n && hn in n && Za(n);
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
    if (r.capture || ci.call(t, a), !a.cancelBubble)
      return fa(() => n == null ? void 0 : n.call(this, a));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? zn(() => {
    t.addEventListener(e, i, r);
  }) : t.addEventListener(e, i, r), i;
}
function Nc(e, t, n, r = {}) {
  var i = xo(t, e, n, r);
  return () => {
    e.removeEventListener(t, i, r);
  };
}
function Fn(e, t, n, r, i) {
  var a = { capture: r, passive: i }, o = xo(e, t, n, a);
  (t === document.body || // @ts-ignore
  t === window || // @ts-ignore
  t === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  t instanceof HTMLMediaElement) && ha(() => {
    t.removeEventListener(e, o, a);
  });
}
function xn(e) {
  for (var t = 0; t < e.length; t++)
    xl.add(e[t]);
  for (var n of Ya)
    n(e);
}
let Xo = null;
function ci(e) {
  var T;
  var t = this, n = (
    /** @type {Node} */
    t.ownerDocument
  ), r = e.type, i = ((T = e.composedPath) == null ? void 0 : T.call(e)) || [], a = (
    /** @type {null | Element} */
    i[0] || e.target
  );
  Xo = e;
  var o = 0, l = Xo === e && e.__root;
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
    Yi(e, "currentTarget", {
      configurable: !0,
      get() {
        return a || n;
      }
    });
    var d = xe, f = we;
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
            if (la(p)) {
              var [E, ...y] = p;
              E.apply(a, [e, ...y]);
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
      e.__root = t, delete e.currentTarget, Bt(d), vn(f);
    }
  }
}
function wl(e) {
  var t = document.createElement("template");
  return t.innerHTML = e.replaceAll("<!>", "<!---->"), t.content;
}
function qr(e, t) {
  var n = (
    /** @type {Effect} */
    we
  );
  n.nodes_start === null && (n.nodes_start = e, n.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function Q(e, t) {
  var n = (t & 1) !== 0, r = (t & 2) !== 0, i, a = !e.startsWith("<!>");
  return () => {
    i === void 0 && (i = wl(a ? e : "<!>" + e), n || (i = /** @type {Node} */
    /* @__PURE__ */ Vr(i)));
    var o = (
      /** @type {TemplateNode} */
      r || cl ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (n) {
      var l = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Vr(o)
      ), s = (
        /** @type {TemplateNode} */
        o.lastChild
      );
      qr(l, s);
    } else
      qr(o, o);
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
        /* @__PURE__ */ Vr(o)
      );
      a = /** @type {Element} */
      /* @__PURE__ */ Vr(l);
    }
    var s = (
      /** @type {TemplateNode} */
      a.cloneNode(!0)
    );
    return qr(s, s), s;
  };
}
// @__NO_SIDE_EFFECTS__
function qt(e, t) {
  return /* @__PURE__ */ kc(e, t, "svg");
}
function Ct(e = "") {
  {
    var t = Wn(e + "");
    return qr(t, t), t;
  }
}
function Z() {
  var e = document.createDocumentFragment(), t = document.createComment(""), n = Wn();
  return e.append(t, n), qr(t, n), e;
}
function x(e, t) {
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
const wr = /* @__PURE__ */ new Map();
function Yc(e, { target: t, anchor: n, props: r = {}, events: i, context: a, intro: o = !0 }) {
  Cc();
  var l = /* @__PURE__ */ new Set(), s = (f) => {
    for (var v = 0; v < f.length; v++) {
      var h = f[v];
      if (!l.has(h)) {
        l.add(h);
        var g = Wc(h);
        t.addEventListener(h, ci, { passive: g });
        var p = wr.get(h);
        p === void 0 ? (document.addEventListener(h, ci, { passive: g }), wr.set(h, 1)) : wr.set(h, p + 1);
      }
    }
  };
  s(vo(xl)), Ya.add(s);
  var u = void 0, d = Rc(() => {
    var f = n ?? t.appendChild(Wn());
    return vc(
      /** @type {TemplateNode} */
      f,
      {
        pending: () => {
        }
      },
      (v) => {
        if (a) {
          Le({});
          var h = (
            /** @type {ComponentContext} */
            ze
          );
          h.c = a;
        }
        i && (r.$$events = i), u = e(v, r) || {}, a && Te();
      }
    ), () => {
      var g;
      for (var v of l) {
        t.removeEventListener(v, ci);
        var h = (
          /** @type {number} */
          wr.get(v)
        );
        --h === 0 ? (document.removeEventListener(v, ci), wr.delete(v)) : wr.set(v, h);
      }
      Ya.delete(s), f !== n && ((g = f.parentNode) == null || g.removeChild(f));
    };
  });
  return Kc.set(u, d), u;
}
let Kc = /* @__PURE__ */ new WeakMap();
function oe(e, t, ...n) {
  var r = e, i = $, a;
  Zn(() => {
    i !== (i = t()) && (a && (vt(a), a = null), a = St(() => (
      /** @type {SnippetFn} */
      i(r, ...n)
    )));
  }, _r);
}
function gt(e) {
  ze === null && yo(), Qr && ze.l !== null ? Qc(ze).m.push(e) : Me(() => {
    const t = Yn(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function Er(e) {
  ze === null && yo(), gt(() => () => Yn(e));
}
function Qc(e) {
  var t = (
    /** @type {ComponentContextLegacy} */
    e.l
  );
  return t.u ?? (t.u = { a: [], b: [], m: [] });
}
function re(e, t, n = !1) {
  var r = e, i = null, a = null, o = lt, l = n ? _r : 0, s = !1;
  const u = (h, g = !0) => {
    s = !0, v(g, h);
  };
  var d = null;
  function f() {
    d !== null && (d.lastChild.remove(), r.before(d), d = null);
    var h = o ? i : a, g = o ? a : i;
    h && ga(h), g && Vn(g, () => {
      o ? a = null : i = null;
    });
  }
  const v = (h, g) => {
    if (o !== (o = h)) {
      var p = Ao(), E = r;
      if (p && (d = document.createDocumentFragment(), d.append(E = Wn())), o ? i ?? (i = g && St(() => g(E))) : a ?? (a = g && St(() => g(E))), p) {
        var y = (
          /** @type {Batch} */
          Ne
        ), T = o ? i : a, w = o ? a : i;
        T && y.skipped_effects.delete(T), w && y.skipped_effects.add(w), y.add_callback(f);
      } else
        f();
    }
  };
  Zn(() => {
    s = !1, t(u), s || v(null, null);
  }, l);
}
function Di(e, t) {
  return t;
}
function Jc(e, t, n) {
  for (var r = e.items, i = [], a = t.length, o = 0; o < a; o++)
    Io(t[o].e, i, !0);
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
function ii(e, t, n, r, i, a = null) {
  var o = e, l = { flags: t, items: /* @__PURE__ */ new Map(), first: null }, s = (t & 4) !== 0;
  if (s) {
    var u = (
      /** @type {Element} */
      e
    );
    o = u.appendChild(Wn());
  }
  var d = null, f = !1, v = /* @__PURE__ */ new Map(), h = /* @__PURE__ */ So(() => {
    var y = n();
    return la(y) ? y : y == null ? [] : vo(y);
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
    ), a !== null && (g.length === 0 ? d ? ga(d) : d = St(() => a(o)) : d !== null && Vn(d, () => {
      d = null;
    }));
  }
  Zn(() => {
    p ?? (p = /** @type {Effect} */
    we), g = /** @type {V[]} */
    c(h);
    var y = g.length;
    if (!(f && y === 0)) {
      f = y === 0;
      var T, w, _, S;
      if (Ao()) {
        var m = /* @__PURE__ */ new Set(), I = (
          /** @type {Batch} */
          Ne
        );
        for (w = 0; w < y; w += 1) {
          _ = g[w], S = r(_, w);
          var C = l.items.get(S) ?? v.get(S);
          C ? t & 3 && Ll(C, _, w, t) : (T = Tl(
            null,
            l,
            null,
            null,
            _,
            S,
            w,
            i,
            t,
            n,
            !0
          ), v.set(S, T)), m.add(S);
        }
        for (const [O, R] of l.items)
          m.has(O) || I.skipped_effects.add(R.e);
        I.add_callback(E);
      } else
        E();
      c(h);
    }
  });
}
function $c(e, t, n, r, i, a, o, l, s) {
  var K, P, A, V;
  var u = (o & 8) !== 0, d = (o & 3) !== 0, f = t.length, v = n.items, h = n.first, g = h, p, E = null, y, T = [], w = [], _, S, m, I;
  if (u)
    for (I = 0; I < f; I += 1)
      _ = t[I], S = l(_, I), m = v.get(S), m !== void 0 && ((K = m.a) == null || K.measure(), (y ?? (y = /* @__PURE__ */ new Set())).add(m));
  for (I = 0; I < f; I += 1) {
    if (_ = t[I], S = l(_, I), m = v.get(S), m === void 0) {
      var C = r.get(S);
      if (C !== void 0) {
        r.delete(S), v.set(S, C);
        var O = E ? E.next : g;
        sn(n, E, C), sn(n, C, O), Sa(C, O, i), E = C;
      } else {
        var R = g ? (
          /** @type {TemplateNode} */
          g.e.nodes_start
        ) : i;
        E = Tl(
          R,
          n,
          E,
          E === null ? n.first : E.next,
          _,
          S,
          I,
          a,
          o,
          s
        );
      }
      v.set(S, E), T = [], w = [], g = E.next;
      continue;
    }
    if (d && Ll(m, _, I, o), m.e.f & rn && (ga(m.e), u && ((P = m.a) == null || P.unfix(), (y ?? (y = /* @__PURE__ */ new Set())).delete(m))), m !== g) {
      if (p !== void 0 && p.has(m)) {
        if (T.length < w.length) {
          var F = w[0], z;
          E = F.prev;
          var ee = T[0], be = T[T.length - 1];
          for (z = 0; z < T.length; z += 1)
            Sa(T[z], F, i);
          for (z = 0; z < w.length; z += 1)
            p.delete(w[z]);
          sn(n, ee.prev, be.next), sn(n, E, ee), sn(n, be, F), g = F, E = be, I -= 1, T = [], w = [];
        } else
          p.delete(m), Sa(m, g, i), sn(n, m.prev, m.next), sn(n, m, E === null ? n.first : E.next), sn(n, E, m), E = m;
        continue;
      }
      for (T = [], w = []; g !== null && g.k !== S; )
        g.e.f & rn || (p ?? (p = /* @__PURE__ */ new Set())).add(g), w.push(g), g = g.next;
      if (g === null)
        continue;
      m = g;
    }
    T.push(m), E = m, g = m.next;
  }
  if (g !== null || p !== void 0) {
    for (var H = p === void 0 ? [] : vo(p); g !== null; )
      g.e.f & rn || H.push(g), g = g.next;
    var M = H.length;
    if (M > 0) {
      var D = o & 4 && f === 0 ? i : null;
      if (u) {
        for (I = 0; I < M; I += 1)
          (A = H[I].a) == null || A.measure();
        for (I = 0; I < M; I += 1)
          (V = H[I].a) == null || V.fix();
      }
      Jc(n, H, D);
    }
  }
  u && zn(() => {
    var ue;
    if (y !== void 0)
      for (m of y)
        (ue = m.a) == null || ue.apply();
  }), e.first = n.first && n.first.e, e.last = E && E.e;
  for (var k of r.values())
    vt(k.e);
  r.clear();
}
function Ll(e, t, n, r) {
  r & 1 && jr(e.v, t), r & 2 ? jr(
    /** @type {Value<number>} */
    e.i,
    n
  ) : e.i = n;
}
function Tl(e, t, n, r, i, a, o, l, s, u, d) {
  var f = (s & 1) !== 0, v = (s & 16) === 0, h = f ? v ? /* @__PURE__ */ sl(i, !1, !1) : gr(i) : i, g = s & 2 ? gr(o) : o, p = {
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
      E.append(e = Wn());
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
      /* @__PURE__ */ Ci(a)
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
    a && (Vn(a), a = null), o && (o.lastChild.remove(), r.before(o), o = null), a = l, l = null;
  }
  Zn(() => {
    if (i !== (i = t())) {
      var u = Ao();
      if (i) {
        var d = r;
        u && (o = document.createDocumentFragment(), o.append(d = Wn()), a && Ne.skipped_effects.add(a)), l = St(() => n(d, i));
      }
      u ? Ne.add_callback(s) : s();
    }
  }, _r);
}
function Wo(e, t, n, r, i, a) {
  var o, l, s = null, u = (
    /** @type {TemplateNode} */
    e
  ), d;
  Zn(() => {
    const f = t() || null;
    var v = f === "svg" ? Fu : null;
    f !== o && (d && (f === null ? Vn(d, () => {
      d = null, l = null;
    }) : f === l ? ga(d) : vt(d)), f && f !== l && (d = St(() => {
      if (s = v ? document.createElementNS(v, f) : document.createElement(f), qr(s, s), r) {
        var h = (
          /** @type {TemplateNode} */
          s.appendChild(Wn())
        );
        r(s, h);
      }
      we.nodes_end = s, u.before(s);
    })), o = f, o && (l = o));
  }, _r);
}
function Xe(e, t, n) {
  Ai(() => {
    var r = Yn(() => t(e, n == null ? void 0 : n()) || {});
    if (n && (r != null && r.update)) {
      var i = !1, a = (
        /** @type {any} */
        {}
      );
      va(() => {
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
  Zn(() => {
    n !== (n = t()) && (r && (vt(r), r = null), n && (r = St(() => {
      Ai(() => (
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
          var l = o + a;
          (o === 0 || Zo.includes(r[o - 1])) && (l === r.length || Zo.includes(r[l])) ? r = (o === 0 ? "" : r.substring(0, o)) + r.substring(l + 1) : o = l;
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
      var a = !1, o = 0, l = !1, s = [];
      r && s.push(...Object.keys(r).map(Ca)), i && s.push(...Object.keys(i).map(Ca));
      var u = 0, d = -1;
      const p = e.length;
      for (var f = 0; f < p; f++) {
        var v = e[f];
        if (l ? v === "/" && e[f - 1] === "*" && (l = !1) : a ? a === v && (a = !1) : v === "/" && e[f + 1] === "*" ? l = !0 : v === '"' || v === "'" ? a = v : v === "(" ? o++ : v === ")" && o--, !l && a === !1 && o === 0) {
          if (v === ":" && d === -1)
            d = f;
          else if (v === ";" || f === p - 1) {
            if (d !== -1) {
              var h = Ca(e.substring(u, d).trim());
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
    return r && (n += Yo(r)), i && (n += Yo(i, !0)), n = n.trim(), n === "" ? null : n;
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
function Aa(e, t = {}, n, r) {
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
  } else r && (Array.isArray(r) ? (Aa(e, n == null ? void 0 : n[0], r[0]), Aa(e, n == null ? void 0 : n[1], r[1], "important")) : Aa(e, n, r));
  return r;
}
function Ka(e, t, n = !1) {
  if (e.multiple) {
    if (t == null)
      return;
    if (!la(t))
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
  }), ha(() => {
    t.disconnect();
  });
}
function Ko(e) {
  return "__value" in e ? e.__value : e.value;
}
const ai = Symbol("class"), oi = Symbol("style"), Dl = Symbol("is custom element"), Pl = Symbol("is html");
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
function qn(e, t, n, r) {
  var i = wo(e);
  i[t] !== (i[t] = n) && (t === "loading" && (e[zu] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && Ml(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function od(e, t, n, r, i = !1, a = !1) {
  var o = wo(e), l = o[Dl], s = !o[Pl], u = t || {}, d = e.tagName === "OPTION";
  for (var f in t)
    f in n || (n[f] = null);
  n.class ? n.class = Rl(n.class) : n[ai] && (n.class = null), n[oi] && (n.style ?? (n.style = null));
  var v = Ml(e);
  for (const w in n) {
    let _ = n[w];
    if (d && w === "value" && _ == null) {
      e.value = e.__value = "", u[w] = _;
      continue;
    }
    if (w === "class") {
      var h = e.namespaceURI === "http://www.w3.org/1999/xhtml";
      Hl(e, h, _, r, t == null ? void 0 : t[ai], n[ai]), u[w] = _, u[ai] = n[ai];
      continue;
    }
    if (w === "style") {
      Pt(e, _, t == null ? void 0 : t[oi], n[oi]), u[w] = _, u[oi] = n[oi];
      continue;
    }
    var g = u[w];
    if (!(_ === g && !(_ === void 0 && e.hasAttribute(w)))) {
      u[w] = _;
      var p = w[0] + w[1];
      if (p !== "$$")
        if (p === "on") {
          const S = {}, m = "$$" + w;
          let I = w.slice(2);
          var E = Vc(I);
          if (Gc(I) && (I = I.slice(0, -7), S.capture = !0), !E && g) {
            if (_ != null) continue;
            e.removeEventListener(I, u[m], S), u[m] = null;
          }
          if (_ != null)
            if (E)
              e[`__${I}`] = _, xn([I]);
            else {
              let C = function(O) {
                u[w].call(this, O);
              };
              u[m] = xo(I, e, C, S);
            }
          else E && (e[`__${I}`] = void 0);
        } else if (w === "style")
          qn(e, w, _);
        else if (w === "autofocus")
          Ic(
            /** @type {HTMLElement} */
            e,
            !!_
          );
        else if (!l && (w === "__value" || w === "value" && _ != null))
          e.value = e.__value = _;
        else if (w === "selected" && d)
          ad(
            /** @type {HTMLOptionElement} */
            e,
            _
          );
        else {
          var y = w;
          s || (y = zc(y));
          var T = y === "defaultValue" || y === "defaultChecked";
          if (_ == null && !l && !T)
            if (o[w] = null, y === "value" || y === "checked") {
              let S = (
                /** @type {HTMLInputElement} */
                e
              );
              const m = t === void 0;
              if (y === "value") {
                let I = S.defaultValue;
                S.removeAttribute(y), S.defaultValue = I, S.value = S.__value = m ? I : null;
              } else {
                let I = S.defaultChecked;
                S.removeAttribute(y), S.defaultChecked = I, S.checked = m ? I : !1;
              }
            } else
              e.removeAttribute(w);
          else T || v.includes(y) && (l || typeof _ != "string") ? (e[y] = _, y in o && (o[y] = lt)) : typeof _ != "function" && qn(e, y, _);
        }
    }
  }
  return u;
}
function We(e, t, n = [], r = [], i, a = !1, o = !1) {
  il(n, r, (l) => {
    var s = void 0, u = {}, d = e.nodeName === "SELECT", f = !1;
    if (Zn(() => {
      var h = t(...l.map(c)), g = od(
        e,
        s,
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
      Ai(() => {
        Ka(
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
    if (a = Ia(e) ? xa(a) : a, n(a), Ne !== null && r.add(Ne), await Al(), a !== (a = t())) {
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
  Yn(t) == null && e.value && (n(Ia(e) ? xa(e.value) : e.value), Ne !== null && r.add(Ne)), va(() => {
    var i = t();
    if (e === document.activeElement) {
      var a = (
        /** @type {Batch} */
        Vi ?? Ne
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
  return e === t || (e == null ? void 0 : e[hn]) === t;
}
function Ee(e = {}, t, n, r) {
  return Ai(() => {
    var i, a;
    return va(() => {
      i = a, a = [], Yn(() => {
        e !== n(...a) && (t(e, ...a), i && $o(n(...i), e) && t(null, ...i));
      });
    }), () => {
      zn(() => {
        a && $o(n(...a), e) && t(null, ...a);
      });
    };
  }), e;
}
function Lo(e, t, n) {
  if (e == null)
    return t(void 0), n && n(void 0), $;
  const r = Yn(
    () => e.subscribe(
      t,
      // @ts-expect-error
      n
    )
  );
  return r.unsubscribe ? () => r.unsubscribe() : r;
}
const Lr = [];
function sd(e, t) {
  return {
    subscribe: Rt(e, t).subscribe
  };
}
function Rt(e, t = $) {
  let n = null;
  const r = /* @__PURE__ */ new Set();
  function i(l) {
    if (Eo(e, l) && (e = l, n)) {
      const s = !Lr.length;
      for (const u of r)
        u[1](), Lr.push(u, e);
      if (s) {
        for (let u = 0; u < Lr.length; u += 2)
          Lr[u][0](Lr[u + 1]);
        Lr.length = 0;
      }
    }
  }
  function a(l) {
    i(l(
      /** @type {T} */
      e
    ));
  }
  function o(l, s = $) {
    const u = [l, s];
    return r.add(u), r.size === 1 && (n = t(i, a) || $), l(
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
    let d = 0, f = $;
    const v = () => {
      if (d)
        return;
      f();
      const g = t(r ? u[0] : u, o, l);
      a ? o(g) : f = typeof g == "function" ? g : $;
    }, h = i.map(
      (g, p) => Lo(
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
  return Lo(e, (n) => t = n)(), t;
}
let Pi = !1, Ja = Symbol();
function Cn(e, t, n) {
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
        i ? r.source.v = a : X(r.source, a);
      }), i = !1;
    }
  return e && Ja in n ? Bl(e) : c(r.source);
}
function Nn(e, t) {
  return e.set(t), t;
}
function Kn() {
  const e = {};
  function t() {
    ha(() => {
      for (var n in e)
        e[n].unsubscribe();
      Yi(e, Ja, {
        enumerable: !1,
        value: !0
      });
    });
  }
  return [e, t];
}
function ld(e) {
  var t = Pi;
  try {
    return Pi = !1, [e(), Pi];
  } finally {
    Pi = t;
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
function qe(e, t, n) {
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
      const a = Gn(i, t);
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
        const i = Gn(r, t);
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
function b(e, t, n, r) {
  var w;
  var i = !Qr || (n & 2) !== 0, a = (n & 8) !== 0, o = (n & 16) !== 0, l = (
    /** @type {V} */
    r
  ), s = !0, u = () => (s && (s = !1, l = o ? Yn(
    /** @type {() => V} */
    r
  ) : (
    /** @type {V} */
    r
  )), l), d;
  if (a) {
    var f = hn in e || Zs in e;
    d = ((w = Gn(e, t)) == null ? void 0 : w.set) ?? (f && t in e ? (_) => e[t] = _ : void 0);
  }
  var v, h = !1;
  a ? [v, h] = ld(() => (
    /** @type {V} */
    e[t]
  )) : v = /** @type {V} */
  e[t], v === void 0 && r !== void 0 && (v = u(), d && (i && Qu(), d(v)));
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
  if (d) {
    var p = e.$$legacy;
    return (
      /** @type {() => V} */
      function(_, S) {
        return arguments.length > 0 ? ((!i || !S || p || h) && d(S ? g() : _), _) : g();
      }
    );
  }
  var E = !1, y = (n & 1 ? da : So)(() => (E = !1, g()));
  a && c(y);
  var T = (
    /** @type {Effect} */
    we
  );
  return (
    /** @type {() => V} */
    function(_, S) {
      if (arguments.length > 0) {
        const m = S ? c(y) : i && a ? me(_) : _;
        return X(y, m), E = !0, l !== void 0 && (l = m), _;
      }
      return yr && E || T.f & br ? y.v : c(y);
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
function mi(e, t) {
  return t.clone !== !1 && t.isMergeableObject(e) ? zr(_d(e), e, t) : e;
}
function yd(e, t, n) {
  return e.concat(t).map(function(r) {
    return mi(r, n);
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
    r[i] = mi(e[i], n);
  }), es(t).forEach(function(i) {
    Cd(e, i) || (Ul(e, i) && n.isMergeableObject(t[i]) ? r[i] = Ed(i, n)(e[i], t[i], n) : r[i] = mi(t[i], n));
  }), r;
}
function zr(e, t, n) {
  n = n || {}, n.arrayMerge = n.arrayMerge || yd, n.isMergeableObject = n.isMergeableObject || hd, n.cloneUnlessOtherwiseSpecified = mi;
  var r = Array.isArray(t), i = Array.isArray(e), a = r === i;
  return a ? r ? n.arrayMerge(e, t, n) : Ad(e, t, n) : mi(t, n);
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
var $a = function(e, t) {
  return $a = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, r) {
    n.__proto__ = r;
  } || function(n, r) {
    for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (n[i] = r[i]);
  }, $a(e, t);
};
function pt(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  $a(e, t);
  function n() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
}
var ne = function() {
  return ne = Object.assign || function(t) {
    for (var n, r = 1, i = arguments.length; r < i; r++) {
      n = arguments[r];
      for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a]);
    }
    return t;
  }, ne.apply(this, arguments);
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
function To(e, t) {
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
function eo(e, t) {
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
function Hr(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, i = t.length, a; r < i; r++)
    (a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
  return e.concat(a || Array.prototype.slice.call(t));
}
function Dr(e) {
  return this instanceof Dr ? (this.v = e, this) : new Dr(e);
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
    h.value instanceof Dr ? Promise.resolve(h.value.v).then(d, f) : v(a[0][2], h);
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
}, Re;
(function(e) {
  e[e.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", e[e.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", e[e.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", e[e.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", e[e.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", e[e.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", e[e.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", e[e.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", e[e.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", e[e.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", e[e.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", e[e.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", e[e.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", e[e.INVALID_TAG = 23] = "INVALID_TAG", e[e.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", e[e.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", e[e.UNCLOSED_TAG = 27] = "UNCLOSED_TAG";
})(Re || (Re = {}));
var Qe;
(function(e) {
  e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag";
})(Qe || (Qe = {}));
var Xr;
(function(e) {
  e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime";
})(Xr || (Xr = {}));
function ts(e) {
  return e.type === Qe.literal;
}
function Fd(e) {
  return e.type === Qe.argument;
}
function Gl(e) {
  return e.type === Qe.number;
}
function jl(e) {
  return e.type === Qe.date;
}
function Vl(e) {
  return e.type === Qe.time;
}
function ql(e) {
  return e.type === Qe.select;
}
function zl(e) {
  return e.type === Qe.plural;
}
function Nd(e) {
  return e.type === Qe.pound;
}
function Xl(e) {
  return e.type === Qe.tag;
}
function Wl(e) {
  return !!(e && typeof e == "object" && e.type === Xr.number);
}
function to(e) {
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
        t = ne(ne(ne({}, t), { notation: "scientific" }), i.options.reduce(function(s, u) {
          return ne(ne({}, s), is(u));
        }, {}));
        continue;
      case "engineering":
        t = ne(ne(ne({}, t), { notation: "engineering" }), i.options.reduce(function(s, u) {
          return ne(ne({}, s), is(u));
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
    if (ns.test(i.stem)) {
      if (i.options.length > 1)
        throw new RangeError("Fraction-precision stems only accept a single optional option");
      i.stem.replace(ns, function(s, u, d, f, v, h) {
        return d === "*" ? t.minimumFractionDigits = u.length : f && f[0] === "#" ? t.maximumFractionDigits = f.length : v && h ? (t.minimumFractionDigits = v.length, t.maximumFractionDigits = v.length + h.length) : (t.minimumFractionDigits = u.length, t.maximumFractionDigits = u.length), "";
      });
      var a = i.options[0];
      a === "w" ? t = ne(ne({}, t), { trailingZeroDisplay: "stripIfInteger" }) : a && (t = ne(ne({}, t), rs(a)));
      continue;
    }
    if (Yl.test(i.stem)) {
      t = ne(ne({}, t), rs(i.stem));
      continue;
    }
    var o = Ql(i.stem);
    o && (t = ne(ne({}, t), o));
    var l = Xd(i.stem);
    l && (t = ne(ne({}, t), l));
  }
  return t;
}
var Mi = {
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
  var i = Mi[r || ""] || Mi[n || ""] || Mi["".concat(n, "-001")] || Mi["001"];
  return i[0];
}
var Ta, Kd = new RegExp("^".concat(Zl.source, "*")), Qd = new RegExp("".concat(Zl.source, "*$"));
function He(e, t) {
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
            var l = this.clonePosition();
            this.bump(), i.push({
              type: Qe.pound,
              location: He(l, this.clonePosition())
            });
          } else if (a === 60 && !this.ignoreTag && this.peek() === 47) {
            if (r)
              break;
            return this.error(Re.UNMATCHED_CLOSING_TAG, He(this.clonePosition(), this.clonePosition()));
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
            type: Qe.literal,
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
          if (this.isEOF() || !ao(this.char()))
            return this.error(Re.INVALID_TAG, He(l, this.clonePosition()));
          var s = this.clonePosition(), u = this.parseTagName();
          return i !== u ? this.error(Re.UNMATCHED_CLOSING_TAG, He(s, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
            val: {
              type: Qe.tag,
              value: i,
              children: o,
              location: He(r, this.clonePosition())
            },
            err: null
          } : this.error(Re.INVALID_TAG, He(l, this.clonePosition())));
        } else
          return this.error(Re.UNCLOSED_TAG, He(r, this.clonePosition()));
      } else
        return this.error(Re.INVALID_TAG, He(r, this.clonePosition()));
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
      var s = He(r, this.clonePosition());
      return {
        val: { type: Qe.literal, value: i, location: s },
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
        return this.error(Re.EXPECT_ARGUMENT_CLOSING_BRACE, He(r, this.clonePosition()));
      if (this.char() === 125)
        return this.bump(), this.error(Re.EMPTY_ARGUMENT, He(r, this.clonePosition()));
      var i = this.parseIdentifierIfPossible().value;
      if (!i)
        return this.error(Re.MALFORMED_ARGUMENT, He(r, this.clonePosition()));
      if (this.bumpSpace(), this.isEOF())
        return this.error(Re.EXPECT_ARGUMENT_CLOSING_BRACE, He(r, this.clonePosition()));
      switch (this.char()) {
        case 125:
          return this.bump(), {
            val: {
              type: Qe.argument,
              // value does not include the opening and closing braces.
              value: i,
              location: He(r, this.clonePosition())
            },
            err: null
          };
        case 44:
          return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(Re.EXPECT_ARGUMENT_CLOSING_BRACE, He(r, this.clonePosition())) : this.parseArgumentOptions(t, n, i, r);
        default:
          return this.error(Re.MALFORMED_ARGUMENT, He(r, this.clonePosition()));
      }
    }, e.prototype.parseIdentifierIfPossible = function() {
      var t = this.clonePosition(), n = this.offset(), r = io(this.message, n), i = n + r.length;
      this.bumpTo(i);
      var a = this.clonePosition(), o = He(t, a);
      return { value: r, location: o };
    }, e.prototype.parseArgumentOptions = function(t, n, r, i) {
      var a, o = this.clonePosition(), l = this.parseIdentifierIfPossible().value, s = this.clonePosition();
      switch (l) {
        case "":
          return this.error(Re.EXPECT_ARGUMENT_TYPE, He(o, s));
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
              return this.error(Re.EXPECT_ARGUMENT_STYLE, He(this.clonePosition(), this.clonePosition()));
            var h = He(d, this.clonePosition());
            u = { style: v, styleLocation: h };
          }
          var g = this.tryParseArgumentClose(i);
          if (g.err)
            return g;
          var p = He(i, this.clonePosition());
          if (u && as(u == null ? void 0 : u.style, "::", 0)) {
            var E = lf(u.style.slice(2));
            if (l === "number") {
              var f = this.parseNumberSkeletonFromString(E, u.styleLocation);
              return f.err ? f : {
                val: { type: Qe.number, value: r, location: p, style: f.val },
                err: null
              };
            } else {
              if (E.length === 0)
                return this.error(Re.EXPECT_DATE_TIME_SKELETON, p);
              var y = E;
              this.locale && (y = Zd(E, this.locale));
              var v = {
                type: Xr.dateTime,
                pattern: y,
                location: u.styleLocation,
                parsedOptions: this.shouldParseSkeletons ? Gd(y) : {}
              }, T = l === "date" ? Qe.date : Qe.time;
              return {
                val: { type: T, value: r, location: p, style: v },
                err: null
              };
            }
          }
          return {
            val: {
              type: l === "number" ? Qe.number : l === "date" ? Qe.date : Qe.time,
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
          var w = this.clonePosition();
          if (this.bumpSpace(), !this.bumpIf(","))
            return this.error(Re.EXPECT_SELECT_ARGUMENT_OPTIONS, He(w, ne({}, w)));
          this.bumpSpace();
          var _ = this.parseIdentifierIfPossible(), S = 0;
          if (l !== "select" && _.value === "offset") {
            if (!this.bumpIf(":"))
              return this.error(Re.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, He(this.clonePosition(), this.clonePosition()));
            this.bumpSpace();
            var f = this.tryParseDecimalInteger(Re.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, Re.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);
            if (f.err)
              return f;
            this.bumpSpace(), _ = this.parseIdentifierIfPossible(), S = f.val;
          }
          var m = this.tryParsePluralOrSelectOptions(t, l, n, _);
          if (m.err)
            return m;
          var g = this.tryParseArgumentClose(i);
          if (g.err)
            return g;
          var I = He(i, this.clonePosition());
          return l === "select" ? {
            val: {
              type: Qe.select,
              value: r,
              options: os(m.val),
              location: I
            },
            err: null
          } : {
            val: {
              type: Qe.plural,
              value: r,
              options: os(m.val),
              offset: S,
              pluralType: l === "plural" ? "cardinal" : "ordinal",
              location: I
            },
            err: null
          };
        }
        default:
          return this.error(Re.INVALID_ARGUMENT_TYPE, He(o, s));
      }
    }, e.prototype.tryParseArgumentClose = function(t) {
      return this.isEOF() || this.char() !== 125 ? this.error(Re.EXPECT_ARGUMENT_CLOSING_BRACE, He(t, this.clonePosition())) : (this.bump(), { val: !0, err: null });
    }, e.prototype.parseSimpleArgStyleIfPossible = function() {
      for (var t = 0, n = this.clonePosition(); !this.isEOF(); ) {
        var r = this.char();
        switch (r) {
          case 39: {
            this.bump();
            var i = this.clonePosition();
            if (!this.bumpUntil("'"))
              return this.error(Re.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, He(i, this.clonePosition()));
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
        return this.error(Re.INVALID_NUMBER_SKELETON, n);
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
            var v = this.tryParseDecimalInteger(Re.EXPECT_PLURAL_ARGUMENT_SELECTOR, Re.INVALID_PLURAL_ARGUMENT_SELECTOR);
            if (v.err)
              return v;
            d = He(f, this.clonePosition()), u = this.message.slice(f.offset, this.offset());
          } else
            break;
        }
        if (s.has(u))
          return this.error(n === "select" ? Re.DUPLICATE_SELECT_ARGUMENT_SELECTOR : Re.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, d);
        u === "other" && (o = !0), this.bumpSpace();
        var h = this.clonePosition();
        if (!this.bumpIf("{"))
          return this.error(n === "select" ? Re.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : Re.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, He(this.clonePosition(), this.clonePosition()));
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
        ]), s.add(u), this.bumpSpace(), a = this.parseIdentifierIfPossible(), u = a.value, d = a.location;
      }
      return l.length === 0 ? this.error(n === "select" ? Re.EXPECT_SELECT_ARGUMENT_SELECTOR : Re.EXPECT_PLURAL_ARGUMENT_SELECTOR, He(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !o ? this.error(Re.MISSING_OTHER_CLAUSE, He(this.clonePosition(), this.clonePosition())) : { val: l, err: null };
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
  t === void 0 && (t = {}), t = ne({ shouldParseSkeletons: !0, requiresOtherClause: !0 }, t);
  var n = new cf(e, t).parse();
  if (n.err) {
    var r = SyntaxError(Re[n.err.kind]);
    throw r.location = n.err.location, r.originalMessage = n.err.message, r;
  }
  return t != null && t.captureLocation || oo(n.val), n.val;
}
var Wr;
(function(e) {
  e.MISSING_VALUE = "MISSING_VALUE", e.INVALID_VALUE = "INVALID_VALUE", e.MISSING_INTL_API = "MISSING_INTL_API";
})(Wr || (Wr = {}));
var ma = (
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
), ls = (
  /** @class */
  function(e) {
    pt(t, e);
    function t(n, r, i, a) {
      return e.call(this, 'Invalid values for "'.concat(n, '": "').concat(r, '". Options are "').concat(Object.keys(i).join('", "'), '"'), Wr.INVALID_VALUE, a) || this;
    }
    return t;
  }(ma)
), gf = (
  /** @class */
  function(e) {
    pt(t, e);
    function t(n, r, i) {
      return e.call(this, 'Value for "'.concat(n, '" must be of type ').concat(r), Wr.INVALID_VALUE, i) || this;
    }
    return t;
  }(ma)
), pf = (
  /** @class */
  function(e) {
    pt(t, e);
    function t(n, r) {
      return e.call(this, 'The intl string context variable "'.concat(n, '" was not provided to the string "').concat(r, '"'), Wr.MISSING_VALUE, r) || this;
    }
    return t;
  }(ma)
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
function Wi(e, t, n, r, i, a, o) {
  if (e.length === 1 && ts(e[0]))
    return [
      {
        type: wt.literal,
        value: e[0].value
      }
    ];
  for (var l = [], s = 0, u = e; s < u.length; s++) {
    var d = u[s];
    if (ts(d)) {
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
      var h = typeof d.style == "string" ? r.date[d.style] : to(d.style) ? d.style.parsedOptions : void 0;
      l.push({
        type: wt.literal,
        value: n.getDateTimeFormat(t, h).format(v)
      });
      continue;
    }
    if (Vl(d)) {
      var h = typeof d.style == "string" ? r.time[d.style] : to(d.style) ? d.style.parsedOptions : r.time.medium;
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
      var y = Wi(g, t, n, r, i, a), T = E(y.map(function(S) {
        return S.value;
      }));
      Array.isArray(T) || (T = [T]), l.push.apply(l, T.map(function(S) {
        return {
          type: typeof S == "string" ? wt.literal : wt.object,
          value: S
        };
      }));
    }
    if (ql(d)) {
      var w = d.options[v] || d.options.other;
      if (!w)
        throw new ls(d.value, v, Object.keys(d.options), o);
      l.push.apply(l, Wi(w.value, t, n, r, i));
      continue;
    }
    if (zl(d)) {
      var w = d.options["=".concat(v)];
      if (!w) {
        if (!Intl.PluralRules)
          throw new ma(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`, Wr.MISSING_INTL_API, o);
        var _ = n.getPluralRules(t, { type: d.pluralType }).select(v - (d.offset || 0));
        w = d.options[_] || d.options.other;
      }
      if (!w)
        throw new ls(d.value, v, Object.keys(d.options), o);
      l.push.apply(l, Wi(w.value, t, n, r, i, v - (d.offset || 0)));
      continue;
    }
  }
  return mf(l);
}
function _f(e, t) {
  return t ? ne(ne(ne({}, e || {}), t || {}), Object.keys(e).reduce(function(n, r) {
    return n[r] = ne(ne({}, e[r]), t[r] || {}), n;
  }, {})) : e;
}
function yf(e, t) {
  return t ? Object.keys(e).reduce(function(n, r) {
    return n[r] = _f(e[r], t[r]), n;
  }, ne({}, e)) : e;
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
      return new ((t = Intl.NumberFormat).bind.apply(t, Hr([void 0], n, !1)))();
    }, {
      cache: Oa(e.number),
      strategy: La.variadic
    }),
    getDateTimeFormat: wa(function() {
      for (var t, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((t = Intl.DateTimeFormat).bind.apply(t, Hr([void 0], n, !1)))();
    }, {
      cache: Oa(e.dateTime),
      strategy: La.variadic
    }),
    getPluralRules: wa(function() {
      for (var t, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((t = Intl.PluralRules).bind.apply(t, Hr([void 0], n, !1)))();
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
      }, this.format = function(s) {
        var u = a.formatToParts(s);
        if (u.length === 1)
          return u[0].value;
        var d = u.reduce(function(f, v) {
          return !f.length || v.type !== wt.literal || typeof f[f.length - 1] != "string" ? f.push(v.value) : f[f.length - 1] += v.value, f;
        }, []);
        return d.length <= 1 ? d[0] || "" : d;
      }, this.formatToParts = function(s) {
        return Wi(a.ast, a.locales, a.formatters, a.formats, s, void 0, a.message);
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
        this.ast = e.__parse(t, ne(ne({}, l), { locale: this.resolvedLocale }));
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
const kn = {}, Cf = (e, t, n) => n && (t in kn || (kn[t] = {}), e in kn[t] || (kn[t][e] = n), n), nu = (e, t) => {
  if (t == null)
    return;
  if (t in kn && e in kn[t])
    return kn[t][e];
  const n = xi(t);
  for (let r = 0; r < n.length; r++) {
    const i = n[r], a = If(i, e);
    if (a)
      return Cf(e, t, a);
  }
};
let Oo;
const Ii = Rt({});
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
  const t = xi(e);
  for (let n = 0; n < t.length; n++) {
    const r = t[n];
    if (ru(r))
      return r;
  }
}
function iu(e, ...t) {
  delete kn[e], Ii.update((n) => (n[e] = wd.all([n[e] || {}, ...t]), n));
}
$r(
  [Ii],
  ([e]) => Object.keys(e)
);
Ii.subscribe((e) => Oo = e);
const Zi = {};
function wf(e, t) {
  Zi[e].delete(t), Zi[e].size === 0 && delete Zi[e];
}
function au(e) {
  return Zi[e];
}
function Lf(e) {
  return xi(e).map((t) => {
    const n = au(t);
    return [t, n ? [...n] : []];
  }).filter(([, t]) => t.length > 0);
}
function $i(e) {
  return e == null ? !1 : xi(e).some(
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
const si = {};
function ou(e) {
  if (!$i(e))
    return e in si ? si[e] : Promise.resolve();
  const t = Lf(e);
  return si[e] = Promise.all(
    t.map(
      ([n, r]) => Tf(n, r)
    )
  ).then(() => {
    if ($i(e))
      return ou(e);
    delete si[e];
  }), si[e];
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
    `[svelte-i18n] The message "${t}" was not found in "${xi(
      e
    ).join('", "')}".${$i(Qn()) ? `

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
}, di = Mf;
function Zr() {
  return di;
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
  )), Object.assign(di, r, { initialLocale: i }), n && ("number" in n && Object.assign(di.formats.number, n.number), "date" in n && Object.assign(di.formats.date, n.date), "time" in n && Object.assign(di.formats.time, n.time)), Sr.set(i);
}
const Ra = Rt(!1);
var Uf = Object.defineProperty, Ff = Object.defineProperties, Nf = Object.getOwnPropertyDescriptors, cs = Object.getOwnPropertySymbols, kf = Object.prototype.hasOwnProperty, Gf = Object.prototype.propertyIsEnumerable, ds = (e, t, n) => t in e ? Uf(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, jf = (e, t) => {
  for (var n in t || (t = {}))
    kf.call(t, n) && ds(e, n, t[n]);
  if (cs)
    for (var n of cs(t))
      Gf.call(t, n) && ds(e, n, t[n]);
  return e;
}, Vf = (e, t) => Ff(e, Nf(t));
let so;
const ea = Rt(null);
function fs(e) {
  return e.split("-").map((t, n, r) => r.slice(0, n + 1).join("-")).reverse();
}
function xi(e, t = Zr().fallbackLocale) {
  const n = fs(e);
  return t ? [.../* @__PURE__ */ new Set([...n, ...fs(t)])] : n;
}
function Qn() {
  return so ?? void 0;
}
ea.subscribe((e) => {
  so = e ?? void 0, typeof window < "u" && e != null && document.documentElement.setAttribute("lang", e);
});
const qf = (e) => {
  if (e && xf(e) && $i(e)) {
    const { loadingDelay: t } = Zr();
    let n;
    return typeof window < "u" && Qn() != null && t ? n = window.setTimeout(
      () => Ra.set(!0),
      t
    ) : Ra.set(!0), ou(e).then(() => {
      ea.set(e);
    }).finally(() => {
      clearTimeout(n), Ra.set(!1);
    });
  }
  return ea.set(e);
}, Sr = Vf(jf({}, ea), {
  set: qf
}), zf = () => typeof window > "u" ? null : window.navigator.language || window.navigator.languages[0], ba = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (r) => {
    const i = JSON.stringify(r);
    return i in t ? t[i] : t[i] = e(r);
  };
};
var Xf = Object.defineProperty, ta = Object.getOwnPropertySymbols, su = Object.prototype.hasOwnProperty, lu = Object.prototype.propertyIsEnumerable, hs = (e, t, n) => t in e ? Xf(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Ro = (e, t) => {
  for (var n in t || (t = {}))
    su.call(t, n) && hs(e, n, t[n]);
  if (ta)
    for (var n of ta(t))
      lu.call(t, n) && hs(e, n, t[n]);
  return e;
}, ei = (e, t) => {
  var n = {};
  for (var r in e)
    su.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && ta)
    for (var r of ta(e))
      t.indexOf(r) < 0 && lu.call(e, r) && (n[r] = e[r]);
  return n;
};
const bi = (e, t) => {
  const { formats: n } = Zr();
  if (e in n && t in n[e])
    return n[e][t];
  throw new Error(`[svelte-i18n] Unknown "${t}" ${e} format.`);
}, Wf = ba(
  (e) => {
    var t = e, { locale: n, format: r } = t, i = ei(t, ["locale", "format"]);
    if (n == null)
      throw new Error('[svelte-i18n] A "locale" must be set to format numbers');
    return r && (i = bi("number", r)), new Intl.NumberFormat(n, i);
  }
), Zf = ba(
  (e) => {
    var t = e, { locale: n, format: r } = t, i = ei(t, ["locale", "format"]);
    if (n == null)
      throw new Error('[svelte-i18n] A "locale" must be set to format dates');
    return r ? i = bi("date", r) : Object.keys(i).length === 0 && (i = bi("date", "short")), new Intl.DateTimeFormat(n, i);
  }
), Yf = ba(
  (e) => {
    var t = e, { locale: n, format: r } = t, i = ei(t, ["locale", "format"]);
    if (n == null)
      throw new Error(
        '[svelte-i18n] A "locale" must be set to format time values'
      );
    return r ? i = bi("time", r) : Object.keys(i).length === 0 && (i = bi("time", "short")), new Intl.DateTimeFormat(n, i);
  }
), Kf = (e = {}) => {
  var t = e, {
    locale: n = Qn()
  } = t, r = ei(t, [
    "locale"
  ]);
  return Wf(Ro({ locale: n }, r));
}, Qf = (e = {}) => {
  var t = e, {
    locale: n = Qn()
  } = t, r = ei(t, [
    "locale"
  ]);
  return Zf(Ro({ locale: n }, r));
}, Jf = (e = {}) => {
  var t = e, {
    locale: n = Qn()
  } = t, r = ei(t, [
    "locale"
  ]);
  return Yf(Ro({ locale: n }, r));
}, $f = ba(
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  (e, t = Qn()) => new tu(e, t, Zr().formats, {
    ignoreTag: Zr().ignoreTag
  })
), eh = (e, t = {}) => {
  var n, r, i, a;
  let o = t;
  typeof e == "object" && (o = e, e = o.id);
  const {
    values: l,
    locale: s = Qn(),
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
}, th = (e, t) => Jf(t).format(e), nh = (e, t) => Qf(t).format(e), rh = (e, t) => Kf(t).format(e), ih = (e, t = Qn()) => nu(e, t), ah = $r([Sr, Ii], () => eh);
$r([Sr], () => th);
$r([Sr], () => nh);
$r([Sr], () => rh);
$r([Sr, Ii], () => ih);
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
    console.log("Updating the language to", o.detail.language), Sr.set(o.detail.language);
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
function Ve(e) {
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
function na(e, t) {
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
var Bi;
function Nh(e, t) {
  t === void 0 && (t = !1);
  var n = e.CSS, r = Bi;
  if (typeof Bi == "boolean" && !t)
    return Bi;
  var i = n && typeof n.supports == "function";
  if (!i)
    return !1;
  var a = n.supports("--css-vars", "yes"), o = n.supports("(--css-vars: yes)") && n.supports("color", "#00000000");
  return r = a || o, t || (Bi = r), r;
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
], Ui = [], Wh = (
  /** @class */
  function(e) {
    pt(t, e);
    function t(n) {
      var r = e.call(this, ne(ne({}, t.defaultAdapter), n)) || this;
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
          for (var a = It(gs), o = a.next(); !o.done; o = a.next()) {
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
          for (var a = It(ps), o = a.next(); !o.done; o = a.next()) {
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
        for (var i = It(gs), a = i.next(); !a.done; a = i.next()) {
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
        for (var i = It(ps), a = i.next(); !a.done; a = i.next()) {
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
            var l = n !== void 0 && Ui.length > 0 && Ui.some(function(s) {
              return r.adapter.containsEventTarget(s);
            });
            if (l) {
              this.resetActivationState();
              return;
            }
            n !== void 0 && (Ui.push(n.target), this.registerDeactivationHandlers(n)), i.wasElementMadeActive = this.checkElementMadeActive(n), i.wasElementMadeActive && this.animateActivation(), requestAnimationFrame(function() {
              Ui = [], !i.wasElementMadeActive && n !== void 0 && (n.key === " " || n.keyCode === 32) && (i.wasElementMadeActive = r.checkElementMadeActive(n), i.wasElementMadeActive && r.animateActivation()), i.wasElementMadeActive || (r.activationState = r.defaultActivationState());
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
        var i = ne({}, r);
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
          var l = getComputedStyle(r);
          o = l.display === "none" || l.visibility === "hidden";
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
function Dn(e, { ripple: t = !0, surface: n = !1, unbounded: r = !1, disabled: i = !1, color: a, active: o, rippleElement: l, eventTarget: s, activeTarget: u, addClass: d = (g) => e.classList.add(g), removeClass: f = (g) => e.classList.remove(g), addStyle: v = (g, p) => e.style.setProperty(g, p), initPromise: h = Promise.resolve() } = {}) {
  let g, p = new ti(), E = pe("SMUI:addLayoutListener"), y, T = o, w = s, _ = u;
  function S() {
    n ? (d("mdc-ripple-surface"), a === "primary" ? (d("smui-ripple-surface--primary"), f("smui-ripple-surface--secondary")) : a === "secondary" ? (f("smui-ripple-surface--primary"), d("smui-ripple-surface--secondary")) : (f("smui-ripple-surface--primary"), f("smui-ripple-surface--secondary"))) : (f("mdc-ripple-surface"), f("smui-ripple-surface--primary"), f("smui-ripple-surface--secondary")), g && T !== o && (T = o, o ? g.activate() : o === !1 && g.deactivate()), t && !g ? (g = new Wh({
      addClass: d,
      browserSupportsCssVars: () => Nh(window),
      computeBoundingRect: () => (l || e).getBoundingClientRect(),
      containsEventTarget: (I) => e.contains(I),
      deregisterDocumentInteractionHandler: (I, C) => p.off(document.documentElement, I, C),
      deregisterInteractionHandler: (I, C) => p.off(s || e, I, C),
      deregisterResizeHandler: (I) => window.removeEventListener("resize", I),
      getWindowPageOffset: () => {
        var I, C;
        return {
          x: (I = window.pageXOffset) !== null && I !== void 0 ? I : window.scrollX,
          y: (C = window.pageYOffset) !== null && C !== void 0 ? C : window.scrollY
        };
      },
      isSurfaceActive: () => o ?? Kh(u || e, ":active"),
      isSurfaceDisabled: () => !!i,
      isUnbounded: () => !!r,
      registerDocumentInteractionHandler: (I, C) => {
        const O = ms();
        p.on(document.documentElement, I, C, typeof O == "boolean" ? { capture: O } : O);
      },
      registerInteractionHandler: (I, C) => {
        const O = ms();
        p.on(s || e, I, C, typeof O == "boolean" ? { capture: O } : O);
      },
      registerResizeHandler: (I) => p.on(window, "resize", I),
      removeClass: f,
      updateCssVariable: v
    }), h.then(() => {
      g && (g.init(), g.setUnbounded(r));
    })) : g && !t && h.then(() => {
      g && (g.destroy(), g = void 0, p.clear());
    }), g && (w !== s || _ !== u) && (w = s, _ = u, g.destroy(), requestAnimationFrame(() => {
      g && (g.init(), g.setUnbounded(r));
    })), !t && r && d("mdc-ripple-upgraded--unbounded");
  }
  S(), E && (y = E(m));
  function m() {
    g && g.layout();
  }
  return {
    update(I) {
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
      } = Object.assign({ ripple: !0, surface: !1, unbounded: !1, disabled: !1, color: void 0, active: void 0, rippleElement: void 0, eventTarget: void 0, activeTarget: void 0, addClass: (C) => e.classList.add(C), removeClass: (C) => e.classList.remove(C), addStyle: (C, O) => e.style.setProperty(C, O), initPromise: Promise.resolve() }, I)), S();
    },
    destroy() {
      g && (g.destroy(), g = void 0, p.clear(), f("mdc-ripple-surface"), f("smui-ripple-surface--primary"), f("smui-ripple-surface--secondary")), y && y();
    }
  };
}
function tr(e, t) {
  Le(t, !0);
  let n = b(t, "use", 19, () => []), r = b(t, "class", 3, ""), i = b(t, "component", 3, wi), a = b(t, "tag", 3, "span"), o = /* @__PURE__ */ qe(t, [
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
  function d() {
    return l.getElement();
  }
  var f = { getElement: d }, v = Z(), h = j(v);
  {
    let g = /* @__PURE__ */ ge(() => Ve({
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
      Ee(
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
            children: (y, T) => {
              var w = Z(), _ = j(w);
              oe(_, () => t.children ?? $), x(y, w);
            },
            $$slots: { default: !0 }
          }
        )),
        (y) => l = y,
        () => l
      );
    });
  }
  return x(e, v), Te(f);
}
function Qh(e, t) {
  Le(t, !0);
  let n = b(t, "use", 19, () => []), r = b(t, "class", 3, ""), i = b(t, "on", 3, !1), a = b(t, "component", 3, wi), o = b(t, "tag", 3, "i"), l = /* @__PURE__ */ qe(t, [
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
  const u = /* @__PURE__ */ ge(() => o() === "svg" || a() === ev), d = pe("SMUI:icon:context");
  function f() {
    return s.getElement();
  }
  var v = { getElement: f }, h = Z(), g = j(h);
  {
    let p = /* @__PURE__ */ ge(() => Ve({
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
      Ee(
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
            children: (T, w) => {
              var _ = Z(), S = j(_);
              oe(S, () => t.children ?? $), x(T, _);
            },
            $$slots: { default: !0 }
          }
        )),
        (T) => s = T,
        () => s
      );
    });
  }
  return x(e, h), Te(v);
}
var Jh = /* @__PURE__ */ qt("<svg><!></svg>");
function wi(e, t) {
  Le(t, !0);
  let n = b(t, "use", 19, () => []), r = b(t, "tag", 3, "div"), i = /* @__PURE__ */ qe(t, ["$$slots", "$$events", "$$legacy", "use", "tag", "children"]);
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
  function l() {
    return o;
  }
  var s = { getElement: l }, u = Z(), d = j(u);
  {
    var f = (h) => {
      var g = Jh();
      We(g, () => ({ ...i }));
      var p = ce(g);
      oe(p, () => t.children ?? $), Ee(g, (E) => o = E, () => o), Xe(g, (E, y) => q == null ? void 0 : q(E, y), n), x(h, g);
    }, v = (h) => {
      var g = Z(), p = j(g);
      {
        var E = (T) => {
          var w = Z(), _ = j(w);
          Wo(_, r, !1, (S, m) => {
            Ee(S, (I) => o = I, () => o), Xe(S, (I, C) => q == null ? void 0 : q(I, C), n), We(S, () => ({ ...i }));
          }), x(T, w);
        }, y = (T) => {
          var w = Z(), _ = j(w);
          Wo(_, r, !1, (S, m) => {
            Ee(S, (O) => o = O, () => o), Xe(S, (O, R) => q == null ? void 0 : q(O, R), n), We(S, () => ({ ...i }));
            var I = Z(), C = j(I);
            oe(C, () => t.children ?? $), x(m, I);
          }), x(T, w);
        };
        re(
          p,
          (T) => {
            c(a) ? T(E) : T(y, !1);
          },
          !0
        );
      }
      x(h, g);
    };
    re(d, (h) => {
      r() === "svg" ? h(f) : h(v, !1);
    });
  }
  return x(e, u), Te(s);
}
var $h = /* @__PURE__ */ qt("<svg><!></svg>");
function ev(e, t) {
  Le(t, !0), console && console.warn && console.warn('The @smui/common Svg component is deprecated. You can use `tag="svg"` now.');
  let n = b(t, "use", 19, () => []), r = /* @__PURE__ */ qe(t, ["$$slots", "$$events", "$$legacy", "use", "children"]), i;
  function a() {
    return i;
  }
  var o = { getElement: a }, l = $h();
  We(l, () => ({ ...r }));
  var s = ce(l);
  return oe(s, () => t.children ?? $), Ee(l, (u) => i = u, () => i), Xe(l, (u, d) => q == null ? void 0 : q(u, d), n), x(e, l), Te(o);
}
function Fi(e, t) {
  Le(t, !0);
  const [n, r] = Kn(), i = Rt(t.value);
  le(t.key, i), Me(() => {
    Nn(i, t.value);
  }), Er(() => {
    i.set(void 0);
  });
  var a = Z(), o = j(a);
  oe(o, () => t.children ?? $), x(e, a), Te(), r();
}
var tv = /* @__PURE__ */ Q('<div class="mdc-button__touch"></div>'), nv = /* @__PURE__ */ Q('<div class="mdc-button__ripple"></div> <!><!>', 1);
function rv(e, t) {
  Le(t, !0);
  let n = b(t, "use", 19, () => []), r = b(t, "class", 3, ""), i = b(t, "style", 3, ""), a = b(t, "ripple", 3, !0), o = b(t, "color", 3, "primary"), l = b(t, "variant", 3, "text"), s = b(t, "touch", 3, !1), u = b(t, "action", 3, "close"), d = b(t, "defaultAction", 3, !1), f = b(t, "secondary", 3, !1), v = b(t, "component", 3, wi), h = b(t, "tag", 19, () => t.href == null ? "button" : "a"), g = /* @__PURE__ */ qe(t, [
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
  ]), p, E = me({}), y = me({}), T = pe("SMUI:button:context");
  const w = /* @__PURE__ */ ge(() => T === "dialog:action" && u() != null ? { "data-mdc-dialog-action": u() } : { action: u() }), _ = /* @__PURE__ */ ge(() => T === "dialog:action" && d() ? { "data-mdc-dialog-button-default": "" } : {}), S = /* @__PURE__ */ ge(() => T === "banner" ? {} : { secondary: f() });
  let m = t.disabled;
  Me(() => {
    if (m !== t.disabled) {
      if (p) {
        const H = F();
        "blur" in H && H.blur();
      }
      m = g.disabled;
    }
  }), le("SMUI:label:context", "button"), le("SMUI:icon:context", "button");
  function I(H) {
    E[H] || (E[H] = !0);
  }
  function C(H) {
    (!(H in E) || E[H]) && (E[H] = !1);
  }
  function O(H, M) {
    y[H] != M && (M === "" || M == null ? delete y[H] : y[H] = M);
  }
  function R() {
    T === "banner" && rt(F(), f() ? "SMUIBannerButtonSecondaryActionClick" : "SMUIBannerButtonPrimaryActionClick");
  }
  function F() {
    return p.getElement();
  }
  var z = { getElement: F }, ee = Z(), be = j(ee);
  {
    let H = /* @__PURE__ */ ge(() => [
      [
        Dn,
        {
          ripple: a(),
          unbounded: !1,
          color: o(),
          disabled: !!t.disabled,
          addClass: I,
          removeClass: C,
          addStyle: O
        }
      ],
      ...n()
    ]), M = /* @__PURE__ */ ge(() => Ve({
      "mdc-button": !0,
      "mdc-button--raised": l() === "raised",
      "mdc-button--unelevated": l() === "unelevated",
      "mdc-button--outlined": l() === "outlined",
      "smui-button--color-secondary": o() === "secondary",
      "mdc-button--touch": s(),
      "mdc-card__action": T === "card:action",
      "mdc-card__action--button": T === "card:action",
      "mdc-dialog__button": T === "dialog:action",
      "mdc-top-app-bar__navigation-icon": T === "top-app-bar:navigation",
      "mdc-top-app-bar__action-item": T === "top-app-bar:action",
      "mdc-snackbar__action": T === "snackbar:actions",
      "mdc-banner__secondary-action": T === "banner" && f(),
      "mdc-banner__primary-action": T === "banner" && !f(),
      "mdc-tooltip__action": T === "tooltip:rich-actions",
      ...E,
      [r()]: !0
    })), D = /* @__PURE__ */ ge(() => Object.entries(y).map(([k, K]) => `${k}: ${K};`).concat([i()]).join(" "));
    Jr(be, v, (k, K) => {
      Ee(
        K(k, ut(
          {
            get tag() {
              return h();
            },
            get use() {
              return c(H);
            },
            get class() {
              return c(M);
            },
            get style() {
              return c(D);
            }
          },
          () => c(w),
          () => c(_),
          () => c(S),
          {
            get href() {
              return t.href;
            }
          },
          () => g,
          {
            onclick: (P) => {
              var A;
              R(), (A = t.onclick) == null || A.call(t, P);
            },
            children: (P, A) => {
              var V = nv(), ue = ie(j(V), 2);
              oe(ue, () => t.children ?? $);
              var de = ie(ue);
              {
                var ae = (Y) => {
                  var J = tv();
                  x(Y, J);
                };
                re(de, (Y) => {
                  s() && Y(ae);
                });
              }
              x(P, V);
            },
            $$slots: { default: !0 }
          }
        )),
        (P) => p = P,
        () => p
      );
    });
  }
  return x(e, ee), Te(z);
}
function ir(e, t) {
  Le(t, !0);
  let n = b(t, "callback", 3, () => {
  }), r = b(t, "disabled", 3, !1), i = b(t, "variant", 3, "default"), a = b(t, "isAbortAction", 3, !1), o = b(t, "backgroundColor", 3, void 0);
  {
    let l = /* @__PURE__ */ ge(() => a() ? "background-color: #ff3e00;" : "background-color: " + o());
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
        var d = Z(), f = j(d);
        oe(f, () => t.children ?? $), x(s, d);
      },
      $$slots: { default: !0 }
    });
  }
  Te();
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
      var r = e.call(this, ne(ne({}, t.defaultAdapter), n)) || this;
      return r.hasToggledAriaLabel = !1, r;
    }
    return Object.defineProperty(t, "cssClasses", {
      get: function() {
        return Ni;
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
      return this.adapter.hasClass(Ni.ICON_BUTTON_ON);
    }, t.prototype.toggle = function(n) {
      if (n === void 0 && (n = !this.isOn()), n ? this.adapter.addClass(Ni.ICON_BUTTON_ON) : this.adapter.removeClass(Ni.ICON_BUTTON_ON), this.hasToggledAriaLabel) {
        var r = n ? this.adapter.getAttr(mn.DATA_ARIA_LABEL_ON) : this.adapter.getAttr(mn.DATA_ARIA_LABEL_OFF);
        this.adapter.setAttr(mn.ARIA_LABEL, r || "");
      } else
        this.adapter.setAttr(mn.ARIA_PRESSED, "" + n);
    }, t;
  }(gn)
), av = /* @__PURE__ */ Q('<div class="mdc-icon-button__touch"></div>'), ov = /* @__PURE__ */ Q('<div class="mdc-icon-button__ripple"></div> <!><!>', 1);
function sv(e, t) {
  Le(t, !0);
  let n = () => {
  };
  function r(A) {
    return A === n;
  }
  let i = b(t, "use", 19, () => []), a = b(t, "class", 3, ""), o = b(t, "style", 3, ""), l = b(t, "ripple", 3, !0), s = b(t, "toggle", 3, !1), u = b(t, "pressed", 15, n), d = b(t, "touch", 3, !1), f = b(t, "displayFlex", 3, !0), v = b(t, "size", 3, "normal"), h = b(t, "component", 3, wi), g = b(t, "tag", 19, () => t.href == null ? "button" : "a"), p = /* @__PURE__ */ qe(t, [
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
  ]), E, y, T = /* @__PURE__ */ _e(me({})), w = me({}), _ = /* @__PURE__ */ _e(me({})), S = pe("SMUI:icon-button:context"), m = pe("SMUI:icon-button:aria-describedby");
  const I = /* @__PURE__ */ ge(() => {
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
  let C = !!t.disabled;
  Me(() => {
    if (C != !!t.disabled) {
      if (E) {
        const A = D();
        "blur" in A && A.blur();
      }
      C = !!t.disabled;
    }
  }), le("SMUI:icon:context", "icon-button");
  let O = null;
  Me(() => {
    E && D() && s() !== O && (s() && !y ? (y = new iv({
      addClass: F,
      hasClass: R,
      notifyChange: (A) => {
        M(A), rt(D(), "SMUIIconButtonToggleChange", A);
      },
      removeClass: z,
      getAttr: be,
      setAttr: H
    }), y.init()) : !s() && y && (y.destroy(), y = void 0, X(T, {}, !0), X(_, {}, !0)), O = s());
  }), Me(() => {
    y && !r(u()) && y.isOn() !== u() && y.toggle(u());
  }), Er(() => {
    y && y.destroy();
  });
  function R(A) {
    return A in c(T) ? c(T)[A] : D().classList.contains(A);
  }
  function F(A) {
    c(T)[A] || (c(T)[A] = !0);
  }
  function z(A) {
    (!(A in c(T)) || c(T)[A]) && (c(T)[A] = !1);
  }
  function ee(A, V) {
    w[A] != V && (V === "" || V == null ? delete w[A] : w[A] = V);
  }
  function be(A) {
    return A in c(_) ? c(_)[A] ?? null : D().getAttribute(A);
  }
  function H(A, V) {
    c(_)[A] !== V && (c(_)[A] = V);
  }
  function M(A) {
    u(A.isOn);
  }
  function D() {
    return E.getElement();
  }
  var k = { getElement: D }, K = Z(), P = j(K);
  {
    let A = /* @__PURE__ */ ge(() => [
      [
        Dn,
        {
          ripple: l(),
          unbounded: !0,
          color: t.color,
          disabled: !!t.disabled,
          addClass: F,
          removeClass: z,
          addStyle: ee
        }
      ],
      ...i()
    ]), V = /* @__PURE__ */ ge(() => Ve({
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
      ...c(T),
      [a()]: !0
    })), ue = /* @__PURE__ */ ge(() => Object.entries(w).map(([Y, J]) => `${Y}: ${J};`).concat([o()]).join(" ")), de = /* @__PURE__ */ ge(() => r(u()) ? null : u() ? "true" : "false"), ae = /* @__PURE__ */ ge(() => u() ? t.ariaLabelOn : t.ariaLabelOff);
    Jr(P, h, (Y, J) => {
      Ee(
        J(Y, ut(
          {
            get tag() {
              return g();
            },
            get use() {
              return c(A);
            },
            get class() {
              return c(V);
            },
            get style() {
              return c(ue);
            },
            get "aria-pressed"() {
              return c(de);
            },
            get "aria-label"() {
              return c(ae);
            },
            get "data-aria-label-on"() {
              return t.ariaLabelOn;
            },
            get "data-aria-label-off"() {
              return t.ariaLabelOff;
            },
            get "aria-describedby"() {
              return m;
            },
            get href() {
              return t.href;
            }
          },
          () => c(I),
          () => c(_),
          () => p,
          {
            onclick: (fe) => {
              var ye;
              y && y.handleClick(), S === "top-app-bar:navigation" && rt(D(), "SMUITopAppBarIconButtonNav"), (ye = t.onclick) == null || ye.call(t, fe);
            },
            children: (fe, ye) => {
              var De = ov(), te = ie(j(De), 2);
              oe(te, () => t.children ?? $);
              var Se = ie(te);
              {
                var he = (Ie) => {
                  var Be = av();
                  x(Ie, Be);
                };
                re(Se, (Ie) => {
                  d() && Ie(he);
                });
              }
              x(fe, De);
            },
            $$slots: { default: !0 }
          }
        )),
        (fe) => E = fe,
        () => E
      );
    });
  }
  return x(e, K), Te(k);
}
function lv(e, t) {
  let n = b(t, "callback", 3, () => {
  }), r = b(t, "icon", 3, ""), i = b(t, "disabled", 3, !1);
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
          Ae(() => nt(u, r())), x(l, u);
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
      var r = e.call(this, ne(ne({}, t.defaultAdapter), n)) || this;
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
var nr = {
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
      var r = e.call(this, ne(ne({}, t.defaultAdapter), n)) || this;
      return r.transitionEndHandler = function(i) {
        r.handleTransitionEnd(i);
      }, r;
    }
    return Object.defineProperty(t, "cssClasses", {
      get: function() {
        return nr;
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
      this.adapter.removeClass(nr.LINE_RIPPLE_DEACTIVATING), this.adapter.addClass(nr.LINE_RIPPLE_ACTIVE);
    }, t.prototype.setRippleCenter = function(n) {
      this.adapter.setStyle("transform-origin", n + "px center");
    }, t.prototype.deactivate = function() {
      this.adapter.addClass(nr.LINE_RIPPLE_DEACTIVATING);
    }, t.prototype.handleTransitionEnd = function(n) {
      var r = this.adapter.hasClass(nr.LINE_RIPPLE_DEACTIVATING);
      n.propertyName === "opacity" && r && (this.adapter.removeClass(nr.LINE_RIPPLE_ACTIVE), this.adapter.removeClass(nr.LINE_RIPPLE_DEACTIVATING));
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
    pt(t, e);
    function t(n) {
      return e.call(this, ne(ne({}, t.defaultAdapter), n)) || this;
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
    pt(t, e);
    function t(n, r) {
      r === void 0 && (r = {});
      var i = e.call(this, ne(ne({}, t.defaultAdapter), n)) || this;
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
        for (var o = It(ys), l = o.next(); !l.done; l = o.next()) {
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
        for (var u = It(Es), d = u.next(); !d.done; d = u.next()) {
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
        for (var o = It(ys), l = o.next(); !l.done; l = o.next()) {
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
        for (var u = It(Es), d = u.next(); !d.done; d = u.next()) {
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
    pt(t, e);
    function t(n) {
      var r = e.call(this, ne(ne({}, t.defaultAdapter), n)) || this;
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
        for (var i = It(Cs), a = i.next(); !a.done; a = i.next()) {
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
        for (var i = It(Cs), a = i.next(); !a.done; a = i.next()) {
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
      this.savedTabIndex && (n ? (this.adapter.setAttr("tabindex", "-1"), this.adapter.removeAttr("role")) : (this.adapter.setAttr("tabindex", this.savedTabIndex), this.adapter.setAttr("role", Ss.ICON_ROLE)));
    }, t.prototype.setAriaLabel = function(n) {
      this.adapter.setAttr("aria-label", n);
    }, t.prototype.setContent = function(n) {
      this.adapter.setContent(n);
    }, t.prototype.handleInteraction = function(n) {
      var r = n.key === "Enter" || n.keyCode === 13;
      (n.type === "click" || r) && (n.preventDefault(), this.adapter.notifyIconAction());
    }, t;
  }(gn)
), Ev = /* @__PURE__ */ Q("<span><!></span>"), Sv = /* @__PURE__ */ Q("<label><!></label>");
function As(e, t) {
  Le(t, !0);
  let n = b(t, "use", 19, () => []), r = b(t, "class", 3, ""), i = b(t, "style", 3, ""), a = b(t, "floatAbove", 15, !1), o = b(t, "required", 15, !1), l = b(t, "wrapped", 3, !1), s = /* @__PURE__ */ qe(t, [
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
  ]), u, d = /* @__PURE__ */ _e(void 0), f = new ti(), v = me({}), h = me({}), g = pe("SMUI:generic:input:props") ?? {}, p = a();
  Me(() => {
    c(d) && p !== a() && (p = a(), c(d).float(a()));
  });
  let E = o();
  Me(() => {
    c(d) && E !== o() && (E = o(), c(d).setRequired(o()));
  });
  const y = pe("SMUI:floating-label:mount"), T = pe("SMUI:floating-label:unmount");
  gt(() => {
    X(
      d,
      new cv({
        addClass: w,
        removeClass: _,
        getWidth: () => {
          var A, V;
          const k = F(), K = k.cloneNode(!0);
          (A = k.parentNode) == null || A.appendChild(K), K.classList.add("smui-floating-label--remove-transition"), K.classList.add("smui-floating-label--force-size"), K.classList.remove("mdc-floating-label--float-above");
          const P = K.scrollWidth;
          return (V = k.parentNode) == null || V.removeChild(K), P;
        },
        registerInteractionHandler: (k, K) => f.on(F(), k, K),
        deregisterInteractionHandler: (k, K) => f.off(F(), k, K)
      }),
      !0
    );
    const D = {
      get element() {
        return F();
      },
      addStyle: S,
      removeStyle: m
    };
    return y && y(D), c(d).init(), () => {
      var k;
      T && T(D), (k = c(d)) == null || k.destroy(), f.clear();
    };
  });
  function w(D) {
    v[D] || (v[D] = !0);
  }
  function _(D) {
    (!(D in v) || v[D]) && (v[D] = !1);
  }
  function S(D, k) {
    h[D] != k && (k === "" || k == null ? delete h[D] : h[D] = k);
  }
  function m(D) {
    D in h && delete h[D];
  }
  function I(D) {
    var k;
    (k = c(d)) == null || k.shake(D);
  }
  function C(D) {
    a(D);
  }
  function O(D) {
    o(D);
  }
  function R() {
    if (c(d) == null)
      throw new Error("Instance is undefined.");
    return c(d).getWidth();
  }
  function F() {
    return u;
  }
  var z = { shake: I, float: C, setRequired: O, getWidth: R, getElement: F }, ee = Z(), be = j(ee);
  {
    var H = (D) => {
      var k = Ev();
      We(k, (P, A) => ({ class: P, style: A, ...s }), [
        () => Ve({
          "mdc-floating-label": !0,
          "mdc-floating-label--float-above": a(),
          "mdc-floating-label--required": o(),
          ...v,
          [r()]: !0
        }),
        () => Object.entries(h).map(([P, A]) => `${P}: ${A};`).concat([i()]).join(" ")
      ]);
      var K = ce(k);
      oe(K, () => t.children ?? $), Ee(k, (P) => u = P, () => u), Xe(k, (P, A) => q == null ? void 0 : q(P, A), n), x(D, k);
    }, M = (D) => {
      var k = Sv();
      We(
        k,
        (P, A) => ({
          class: P,
          style: A,
          for: t.for || (g ? g.id : void 0),
          ...s
        }),
        [
          () => Ve({
            "mdc-floating-label": !0,
            "mdc-floating-label--float-above": a(),
            "mdc-floating-label--required": o(),
            ...v,
            [r()]: !0
          }),
          () => Object.entries(h).map(([P, A]) => `${P}: ${A};`).concat([i()]).join(" ")
        ]
      );
      var K = ce(k);
      oe(K, () => t.children ?? $), Ee(k, (P) => u = P, () => u), Xe(k, (P, A) => q == null ? void 0 : q(P, A), n), x(D, k);
    };
    re(be, (D) => {
      l() ? D(H) : D(M, !1);
    });
  }
  return x(e, ee), Te(z);
}
var Cv = /* @__PURE__ */ Q("<div></div>");
function Av(e, t) {
  Le(t, !0);
  let n = b(t, "use", 19, () => []), r = b(t, "class", 3, ""), i = b(t, "style", 3, ""), a = b(t, "active", 3, !1), o = /* @__PURE__ */ qe(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "style",
    "active"
  ]), l, s = /* @__PURE__ */ _e(void 0), u = new ti(), d = me({}), f = me({});
  gt(() => (X(
    s,
    new dv({
      addClass: h,
      removeClass: g,
      hasClass: v,
      setStyle: p,
      registerEventHandler: (m, I) => u.on(w(), m, I),
      deregisterEventHandler: (m, I) => u.off(w(), m, I)
    }),
    !0
  ), c(s).init(), () => {
    var m;
    (m = c(s)) == null || m.destroy(), u.clear();
  }));
  function v(m) {
    return m in d ? d[m] : w().classList.contains(m);
  }
  function h(m) {
    d[m] || (d[m] = !0);
  }
  function g(m) {
    (!(m in d) || d[m]) && (d[m] = !1);
  }
  function p(m, I) {
    f[m] != I && (I === "" || I == null ? delete f[m] : f[m] = I);
  }
  function E() {
    var m;
    (m = c(s)) == null || m.activate();
  }
  function y() {
    var m;
    (m = c(s)) == null || m.deactivate();
  }
  function T(m) {
    var I;
    (I = c(s)) == null || I.setRippleCenter(m);
  }
  function w() {
    return l;
  }
  var _ = { activate: E, deactivate: y, setRippleCenter: T, getElement: w }, S = Cv();
  return We(S, (m, I) => ({ class: m, style: I, ...o }), [
    () => Ve({
      "mdc-line-ripple": !0,
      "mdc-line-ripple--active": a(),
      ...d,
      [r()]: !0
    }),
    () => Object.entries(f).map(([m, I]) => `${m}: ${I};`).concat([i()]).join(" ")
  ]), Ee(S, (m) => l = m, () => l), Xe(S, (m, I) => q == null ? void 0 : q(m, I), n), x(e, S), Te(_);
}
var Iv = /* @__PURE__ */ Q('<div class="mdc-notched-outline__notch"><!></div>'), xv = /* @__PURE__ */ Q('<div><div class="mdc-notched-outline__leading"></div> <!> <div class="mdc-notched-outline__trailing"></div></div>');
function wv(e, t) {
  Le(t, !0);
  let n = b(t, "use", 19, () => []), r = b(t, "class", 3, ""), i = b(t, "notched", 3, !1), a = b(t, "noLabel", 3, !1), o = /* @__PURE__ */ qe(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "notched",
    "noLabel",
    "children"
  ]), l, s = /* @__PURE__ */ _e(void 0), u = /* @__PURE__ */ _e(void 0), d = me({}), f = me({}), v;
  Me(() => {
    c(u) !== v && (c(u) ? (c(u).addStyle("transition-duration", "0s"), h("mdc-notched-outline--upgraded"), requestAnimationFrame(() => {
      c(u) && c(u).removeStyle("transition-duration");
    })) : g("mdc-notched-outline--upgraded"), v = c(u));
  }), le("SMUI:floating-label:mount", (C) => {
    X(u, C, !0);
  }), le("SMUI:floating-label:unmount", () => {
    X(u, void 0);
  }), gt(() => (X(
    s,
    new vv({
      addClass: h,
      removeClass: g,
      setNotchWidthProperty: (C) => p("width", C + "px"),
      removeNotchWidthProperty: () => E("width")
    }),
    !0
  ), c(s).init(), () => {
    var C;
    (C = c(s)) == null || C.destroy();
  }));
  function h(C) {
    d[C] || (d[C] = !0);
  }
  function g(C) {
    (!(C in d) || d[C]) && (d[C] = !1);
  }
  function p(C, O) {
    f[C] != O && (O === "" || O == null ? delete f[C] : f[C] = O);
  }
  function E(C) {
    C in f && delete f[C];
  }
  function y(C) {
    var O;
    (O = c(s)) == null || O.notch(C);
  }
  function T() {
    var C;
    (C = c(s)) == null || C.closeNotch();
  }
  function w() {
    return l;
  }
  var _ = { notch: y, closeNotch: T, getElement: w }, S = xv();
  We(S, (C) => ({ class: C, ...o }), [
    () => Ve({
      "mdc-notched-outline": !0,
      "mdc-notched-outline--notched": i(),
      "mdc-notched-outline--no-label": a(),
      ...d,
      [r()]: !0
    })
  ]);
  var m = ie(ce(S), 2);
  {
    var I = (C) => {
      var O = Iv(), R = ce(O);
      oe(R, () => t.children ?? $), Ae((F) => Pt(O, F), [
        () => Object.entries(f).map(([F, z]) => `${F}: ${z};`).join(" ")
      ]), x(C, O);
    };
    re(m, (C) => {
      a() || C(I);
    });
  }
  return Ee(S, (C) => l = C, () => l), Xe(S, (C, O) => q == null ? void 0 : q(C, O), n), x(e, S), Te(_);
}
function Li(e, t) {
  Le(t, !0);
  let n = b(t, "use", 19, () => []), r = b(t, "class", 3, ""), i = b(t, "component", 3, wi), a = b(t, "tag", 3, "div"), o = b(t, "_smuiClass", 3, ""), l = b(t, "_smuiClassMap", 23, () => ({})), s = b(t, "_smuiContexts", 19, () => ({})), u = b(t, "_smuiProps", 19, () => ({})), d = /* @__PURE__ */ qe(t, [
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
  Object.entries(l()).forEach(([y, T]) => {
    const w = pe(T);
    w && "subscribe" in w && v.push(w.subscribe((_) => {
      l()[y] = _;
    }));
  });
  for (let y in s())
    s().hasOwnProperty(y) && le(y, s()[y]);
  Er(() => {
    for (const y of v)
      y();
  });
  function h() {
    return f.getElement();
  }
  var g = { getElement: h }, p = Z(), E = j(p);
  {
    let y = /* @__PURE__ */ ge(() => Ve({
      [o()]: !0,
      ...l(),
      [r()]: !0
    }));
    Jr(E, i, (T, w) => {
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
              return c(y);
            }
          },
          u,
          () => d,
          {
            children: (_, S) => {
              var m = Z(), I = j(m);
              oe(I, () => t.children ?? $), x(_, m);
            },
            $$slots: { default: !0 }
          }
        )),
        (_) => f = _,
        () => f
      );
    });
  }
  return x(e, p), Te(g);
}
function Lv(e, t) {
  Le(t, !0);
  let n = /* @__PURE__ */ qe(t, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return Ee(
    Li(e, ut({ _smuiClass: "mdc-text-field-helper-line", tag: "div" }, () => n, {
      children: (o, l) => {
        var s = Z(), u = j(s);
        oe(u, () => t.children ?? $), x(o, s);
      },
      $$slots: { default: !0 }
    })),
    (o) => r = o,
    () => r
  ), Te(a);
}
function Tv(e, t) {
  Le(t, !0);
  let n = /* @__PURE__ */ qe(t, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return Ee(
    Li(e, ut(
      {
        _smuiClass: "mdc-text-field__affix mdc-text-field__affix--prefix",
        tag: "span"
      },
      () => n,
      {
        children: (o, l) => {
          var s = Z(), u = j(s);
          oe(u, () => t.children ?? $), x(o, s);
        },
        $$slots: { default: !0 }
      }
    )),
    (o) => r = o,
    () => r
  ), Te(a);
}
function Ov(e, t) {
  Le(t, !0);
  let n = /* @__PURE__ */ qe(t, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return Ee(
    Li(e, ut(
      {
        _smuiClass: "mdc-text-field__affix mdc-text-field__affix--suffix",
        tag: "span"
      },
      () => n,
      {
        children: (o, l) => {
          var s = Z(), u = j(s);
          oe(u, () => t.children ?? $), x(o, s);
        },
        $$slots: { default: !0 }
      }
    )),
    (o) => r = o,
    () => r
  ), Te(a);
}
var Rv = /* @__PURE__ */ Q("<input/>");
function Hv(e, t) {
  Le(t, !0);
  let n = b(t, "use", 19, () => []), r = b(t, "class", 3, ""), i = b(t, "type", 3, "text"), a = b(t, "placeholder", 3, " "), o = b(t, "value", 15), l = b(t, "files", 15, null), s = b(t, "dirty", 15, !1), u = b(t, "invalid", 15, !1), d = b(t, "updateInvalid", 3, !0), f = b(t, "initialInvalid", 3, !1), v = b(t, "emptyValueNull", 19, () => o() === null), h = b(t, "emptyValueUndefined", 19, () => o() === void 0), g = /* @__PURE__ */ qe(t, [
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
  ]), p, E = me({}), y = me({});
  Me(() => {
    i() === "file" ? delete y.value : y.value = o() == null ? "" : o();
  }), gt(() => {
    d() && f() && u(R().matches(":invalid"));
  });
  function T(H) {
    return H === "" ? Number.NaN : +H;
  }
  function w(H) {
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
        o(T(H.currentTarget.value));
        break;
      default:
        o(H.currentTarget.value);
        break;
    }
  }
  function _(H) {
    (i() === "file" || i() === "range") && w(H), s(!0), d() && u(R().matches(":invalid"));
  }
  function S(H) {
    return H in E ? E[H] ?? null : R().getAttribute(H);
  }
  function m(H, M) {
    E[H] !== M && (E[H] = M);
  }
  function I(H) {
    (!(H in E) || E[H] != null) && (E[H] = void 0);
  }
  function C() {
    R().focus();
  }
  function O() {
    R().blur();
  }
  function R() {
    return p;
  }
  var F = { getAttr: S, addAttr: m, removeAttr: I, focus: C, blur: O, getElement: R }, z = Rv(), ee = (H) => {
    var M;
    i() !== "file" && w(H), (M = t.oninput) == null || M.call(t, H);
  }, be = (H) => {
    var M;
    _(H), (M = t.onchange) == null || M.call(t, H);
  };
  return We(
    z,
    (H) => ({
      class: H,
      type: i(),
      placeholder: a(),
      ...y,
      ...E,
      ...g,
      oninput: ee,
      onchange: be
    }),
    [
      () => Ve({ "mdc-text-field__input": !0, [r()]: !0 })
    ],
    void 0,
    void 0,
    !0
  ), Ee(z, (H) => p = H, () => p), Xe(z, (H, M) => q == null ? void 0 : q(H, M), n), x(e, z), Te(F);
}
var Dv = /* @__PURE__ */ Q("<textarea></textarea>");
function Pv(e, t) {
  Le(t, !0);
  let n = b(t, "use", 19, () => []), r = b(t, "class", 3, ""), i = b(t, "style", 3, ""), a = b(t, "value", 15, ""), o = b(t, "dirty", 15, !1), l = b(t, "invalid", 15, !1), s = b(t, "updateInvalid", 3, !0), u = b(t, "initialInvalid", 3, !1), d = b(t, "resizable", 3, !0), f = /* @__PURE__ */ qe(t, [
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
  ]), v, h = me({});
  gt(() => {
    s() && u() && l(_().matches(":invalid"));
  });
  function g() {
    o(!0), s() && l(_().matches(":invalid"));
  }
  function p(C) {
    return C in h ? h[C] ?? null : _().getAttribute(C);
  }
  function E(C, O) {
    h[C] !== O && (h[C] = O);
  }
  function y(C) {
    (!(C in h) || h[C] != null) && (h[C] = void 0);
  }
  function T() {
    _().focus();
  }
  function w() {
    _().blur();
  }
  function _() {
    return v;
  }
  var S = { getAttr: p, addAttr: E, removeAttr: y, focus: T, blur: w, getElement: _ }, m = Dv(), I = (C) => {
    var O;
    g(), (O = t.onchange) == null || O.call(t, C);
  };
  return We(
    m,
    (C) => ({
      class: C,
      style: `${d() ? "" : "resize: none; "}${i()}`,
      ...h,
      ...f,
      onchange: I
    }),
    [
      () => Ve({ "mdc-text-field__input": !0, [r()]: !0 })
    ]
  ), Ee(m, (C) => v = C, () => v), Xe(m, (C, O) => q == null ? void 0 : q(C, O), n), Ai(() => Qa(m, a)), x(e, m), Te(S);
}
var Mv = /* @__PURE__ */ Q('<span class="mdc-text-field__ripple"></span>'), Bv = /* @__PURE__ */ Q("<!> <!>", 1), Uv = /* @__PURE__ */ Q("<span><!> <!></span>"), Fv = /* @__PURE__ */ Q("<!> <!> <!>", 1), Nv = /* @__PURE__ */ Q("<label><!> <!> <!> <!> <!> <!> <!></label>"), kv = /* @__PURE__ */ Q("<div><!> <!> <!> <!> <!></div>"), Gv = /* @__PURE__ */ Q("<!> <!>", 1);
function Is(e, t) {
  Le(t, !0);
  const { applyPassive: n } = uu;
  let r = () => {
  };
  function i(U) {
    return U === r;
  }
  let a = b(t, "use", 19, () => []), o = b(t, "class", 3, ""), l = b(t, "style", 3, ""), s = b(t, "ripple", 3, !0), u = b(t, "disabled", 3, !1), d = b(t, "required", 3, !1), f = b(t, "textarea", 3, !1), v = b(t, "variant", 19, () => f() ? "outlined" : "standard"), h = b(t, "noLabel", 3, !1), g = b(t, "type", 3, "text"), p = b(t, "value", 15), E = b(t, "files", 15, r), y = b(t, "invalid", 15, r), T = b(t, "updateInvalid", 19, () => i(y())), w = b(t, "initialInvalid", 3, !1), _ = b(t, "dirty", 15, !1), S = b(t, "validateOnValueChange", 19, T), m = b(t, "useNativeValidation", 19, T), I = b(t, "withLeadingIcon", 3, r), C = b(t, "withTrailingIcon", 3, r), O = b(t, "input", 7), R = b(t, "floatingLabel", 7), F = b(t, "lineRipple", 7), z = b(t, "notchedOutline", 7), ee = /* @__PURE__ */ qe(t, [
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
  const be = p() !== void 0 || p() === void 0 && t.input$emptyValueUndefined || !i(E());
  i(E()) && E(null), i(y()) && y(!1);
  let H, M = /* @__PURE__ */ _e(void 0), D = new ti(), k = me({}), K = me({}), P = /* @__PURE__ */ _e(void 0), A = /* @__PURE__ */ _e(!1), V = /* @__PURE__ */ _e(me(w())), ue = pe("SMUI:addLayoutListener"), de, ae, Y = new Promise((U) => ae = U), J, fe, ye, De;
  const te = /* @__PURE__ */ ge(() => O() && O().getElement());
  Me(() => {
    (_() || c(V) || !T()) && c(M) && c(M).isValid() !== !y() && (T() ? y(!c(M).isValid()) : c(M).setValid(!y()));
  }), Me(() => {
    c(M) && c(M).getValidateOnValueChange() !== S() && c(M).setValidateOnValueChange(i(S()) ? !1 : S());
  }), Me(() => {
    c(M) && c(M).setUseNativeValidation(i(m()) ? !0 : m());
  }), Me(() => {
    c(M) && c(M).setDisabled(u());
  });
  let Se = p();
  Me(() => {
    if (c(M) && be && Se !== p()) {
      Se = p();
      const U = `${p() == null ? "" : p()}`;
      c(M).getValue() !== U && c(M).setValue(U);
    }
  }), ue && (de = ue(L)), le("SMUI:textfield:leading-icon:mount", (U) => {
    J = U;
  }), le("SMUI:textfield:leading-icon:unmount", () => {
    J = void 0;
  }), le("SMUI:textfield:trailing-icon:mount", (U) => {
    fe = U;
  }), le("SMUI:textfield:trailing-icon:unmount", () => {
    fe = void 0;
  }), le("SMUI:textfield:helper-text:id", (U) => {
    X(P, U, !0);
  }), le("SMUI:textfield:helper-text:mount", (U) => {
    ye = U;
  }), le("SMUI:textfield:helper-text:unmount", () => {
    X(P, void 0), ye = void 0;
  }), le("SMUI:textfield:character-counter:mount", (U) => {
    De = U;
  }), le("SMUI:textfield:character-counter:unmount", () => {
    De = void 0;
  }), gt(() => {
    var U;
    if (X(
      M,
      new bv(
        {
          // getRootAdapterMethods_
          addClass: Ie,
          removeClass: Be,
          hasClass: he,
          registerTextFieldInteractionHandler: (W, Ke) => D.on(B(), W, Ke),
          deregisterTextFieldInteractionHandler: (W, Ke) => D.off(B(), W, Ke),
          registerValidationAttributeChangeHandler: (W) => {
            const Ke = (mt) => mt.map((Qt) => Qt.attributeName).filter((Qt) => Qt), Je = new MutationObserver((mt) => {
              m() && W(Ke(mt));
            }), at = { attributes: !0 };
            return O() && Je.observe(O().getElement(), at), Je;
          },
          deregisterValidationAttributeChangeHandler: (W) => {
            W.disconnect();
          },
          // getInputAdapterMethods_
          getNativeInput: () => {
            var W;
            return ((W = O()) == null ? void 0 : W.getElement()) ?? null;
          },
          setInputAttr: (W, Ke) => {
            var Je;
            (Je = O()) == null || Je.addAttr(W, Ke);
          },
          removeInputAttr: (W) => {
            var Ke;
            (Ke = O()) == null || Ke.removeAttr(W);
          },
          isFocused: () => {
            var W;
            return document.activeElement === ((W = O()) == null ? void 0 : W.getElement());
          },
          registerInputInteractionHandler: (W, Ke) => {
            var at;
            const Je = (at = O()) == null ? void 0 : at.getElement();
            if (Je) {
              const mt = n();
              D.on(Je, W, Ke, typeof mt == "boolean" ? { capture: mt } : mt);
            }
          },
          deregisterInputInteractionHandler: (W, Ke) => {
            var at;
            const Je = (at = O()) == null ? void 0 : at.getElement();
            Je && D.off(Je, W, Ke);
          },
          // getLabelAdapterMethods_
          floatLabel: (W) => R() && R().float(W),
          getLabelWidth: () => R() ? R().getWidth() : 0,
          hasLabel: () => !!R(),
          shakeLabel: (W) => R() && R().shake(W),
          setLabelRequired: (W) => R() && R().setRequired(W),
          // getLineRippleAdapterMethods_
          activateLineRipple: () => F() && F().activate(),
          deactivateLineRipple: () => F() && F().deactivate(),
          setLineRippleTransformOrigin: (W) => F() && F().setRippleCenter(W),
          // getOutlineAdapterMethods_
          closeOutline: () => z() && z().closeNotch(),
          hasOutline: () => !!z(),
          notchOutline: (W) => z() && z().notch(W)
        },
        {
          get helperText() {
            return ye;
          },
          get characterCounter() {
            return De;
          },
          get leadingIcon() {
            return J;
          },
          get trailingIcon() {
            return fe;
          }
        }
      ),
      !0
    ), be) {
      if (O() == null)
        throw new Error("SMUI Textfield must be initialized with either a non-undefined initial value or an Input component.");
      (U = c(M)) == null || U.init();
    } else
      Al().then(() => {
        var W;
        if (O() == null)
          throw new Error("SMUI Textfield must be initialized with either a non-undefined initial value or an Input component.");
        (W = c(M)) == null || W.init();
      });
    return ae(), () => {
      var W;
      (W = c(M)) == null || W.destroy(), D.clear();
    };
  }), Er(() => {
    de && de();
  });
  function he(U) {
    return U in k ? k[U] ?? null : B().classList.contains(U);
  }
  function Ie(U) {
    k[U] || (k[U] = !0);
  }
  function Be(U) {
    (!(U in k) || k[U]) && (k[U] = !1);
  }
  function Ce(U, W) {
    K[U] != W && (W === "" || W == null ? delete K[U] : K[U] = W);
  }
  function ke() {
    var U;
    (U = O()) == null || U.focus();
  }
  function Ye() {
    var U;
    (U = O()) == null || U.blur();
  }
  function L() {
    if (c(M)) {
      const U = c(M).shouldFloat;
      c(M).notchOutline(U);
    }
  }
  function B() {
    return H;
  }
  var se = { focus: ke, blur: Ye, layout: L, getElement: B }, Ge = Gv(), Ut = j(Ge);
  {
    var Ln = (U) => {
      var W = Nv();
      We(W, (Oe, Ze, et) => ({ class: Oe, style: Ze, for: void 0, ...et }), [
        () => Ve({
          "mdc-text-field": !0,
          "mdc-text-field--disabled": u(),
          "mdc-text-field--textarea": f(),
          "mdc-text-field--filled": v() === "filled",
          "mdc-text-field--outlined": v() === "outlined",
          "smui-text-field--standard": v() === "standard" && !f(),
          "mdc-text-field--no-label": h() || t.label == null,
          "mdc-text-field--label-floating": c(A) || p() != null && p() !== "",
          "mdc-text-field--with-leading-icon": i(I()) ? t.leadingIcon : I(),
          "mdc-text-field--with-trailing-icon": i(C()) ? t.trailingIcon : C(),
          "mdc-text-field--with-internal-counter": f() && t.internalCounter,
          "mdc-text-field--invalid": y(),
          ...k,
          [o()]: !0
        }),
        () => Object.entries(K).map(([Oe, Ze]) => `${Oe}: ${Ze};`).concat([l()]).join(" "),
        () => na(ee, ["input$", "label$", "ripple$", "outline$", "helperLine$"])
      ]);
      var Ke = ce(W);
      {
        var Je = (Oe) => {
          var Ze = Bv(), et = j(Ze);
          {
            var xt = (ot) => {
              var dt = Mv();
              x(ot, dt);
            };
            re(et, (ot) => {
              v() === "filled" && ot(xt);
            });
          }
          var bt = ie(et, 2);
          {
            var $e = (ot) => {
              {
                let dt = /* @__PURE__ */ ge(() => c(A) || p() != null && p() !== "" && (typeof p() != "number" || !isNaN(p()))), Ue = /* @__PURE__ */ ge(() => en(ee, "label$"));
                Ee(
                  As(ot, ut(
                    {
                      get floatAbove() {
                        return c(dt);
                      },
                      get required() {
                        return d();
                      },
                      wrapped: !0
                    },
                    () => c(Ue),
                    {
                      children: (tt, pn) => {
                        var zt = Z(), st = j(zt);
                        {
                          var _t = (Nt) => {
                          }, yt = (Nt) => {
                            var Oi = Z(), $n = j(Oi);
                            {
                              var Ri = (Rn) => {
                                var er = Ct();
                                Ae(() => nt(er, t.label)), x(Rn, er);
                              }, ya = (Rn) => {
                                var er = Z(), Hn = j(er);
                                oe(Hn, () => t.label), x(Rn, er);
                              };
                              re(
                                $n,
                                (Rn) => {
                                  typeof t.label == "string" ? Rn(Ri) : Rn(ya, !1);
                                },
                                !0
                              );
                            }
                            x(Nt, Oi);
                          };
                          re(st, (Nt) => {
                            t.label == null ? Nt(_t) : Nt(yt, !1);
                          });
                        }
                        x(tt, zt);
                      },
                      $$slots: { default: !0 }
                    }
                  )),
                  (tt) => R(tt),
                  () => R()
                );
              }
            };
            re(bt, (ot) => {
              !h() && t.label != null && ot($e);
            });
          }
          x(Oe, Ze);
        };
        re(Ke, (Oe) => {
          !f() && v() !== "outlined" && Oe(Je);
        });
      }
      var at = ie(Ke, 2);
      {
        var mt = (Oe) => {
          {
            let Ze = /* @__PURE__ */ ge(() => h() || t.label == null), et = /* @__PURE__ */ ge(() => en(ee, "outline$"));
            Ee(
              wv(Oe, ut(
                {
                  get noLabel() {
                    return c(Ze);
                  }
                },
                () => c(et),
                {
                  children: (xt, bt) => {
                    var $e = Z(), ot = j($e);
                    {
                      var dt = (Ue) => {
                        {
                          let tt = /* @__PURE__ */ ge(() => c(A) || p() != null && p() !== "" && (typeof p() != "number" || !isNaN(p()))), pn = /* @__PURE__ */ ge(() => en(ee, "label$"));
                          Ee(
                            As(Ue, ut(
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
                                children: (zt, st) => {
                                  var _t = Z(), yt = j(_t);
                                  {
                                    var Nt = ($n) => {
                                    }, Oi = ($n) => {
                                      var Ri = Z(), ya = j(Ri);
                                      {
                                        var Rn = (Hn) => {
                                          var ni = Ct();
                                          Ae(() => nt(ni, t.label)), x(Hn, ni);
                                        }, er = (Hn) => {
                                          var ni = Z(), Pu = j(ni);
                                          oe(Pu, () => t.label), x(Hn, ni);
                                        };
                                        re(
                                          ya,
                                          (Hn) => {
                                            typeof t.label == "string" ? Hn(Rn) : Hn(er, !1);
                                          },
                                          !0
                                        );
                                      }
                                      x($n, Ri);
                                    };
                                    re(yt, ($n) => {
                                      t.label == null ? $n(Nt) : $n(Oi, !1);
                                    });
                                  }
                                  x(zt, _t);
                                },
                                $$slots: { default: !0 }
                              }
                            )),
                            (zt) => R(zt),
                            () => R()
                          );
                        }
                      };
                      re(ot, (Ue) => {
                        !h() && t.label != null && Ue(dt);
                      });
                    }
                    x(xt, $e);
                  },
                  $$slots: { default: !0 }
                }
              )),
              (xt) => z(xt),
              () => z()
            );
          }
        };
        re(at, (Oe) => {
          (f() || v() === "outlined") && Oe(mt);
        });
      }
      var Qt = ie(at, 2);
      Fi(Qt, {
        key: "SMUI:textfield:icon:leading",
        value: !0,
        children: (Oe, Ze) => {
          var et = Z(), xt = j(et);
          oe(xt, () => t.leadingIcon ?? $), x(Oe, et);
        },
        $$slots: { default: !0 }
      });
      var Ir = ie(Qt, 2);
      oe(Ir, () => t.children ?? $);
      var je = ie(Ir, 2);
      {
        var ct = (Oe) => {
          var Ze = Uv(), et = ce(Ze);
          {
            let bt = /* @__PURE__ */ ge(() => en(ee, "input$"));
            Ee(
              Pv(et, ut(
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
                    return c(V);
                  },
                  get "aria-controls"() {
                    return c(P);
                  },
                  get "aria-describedby"() {
                    return c(P);
                  }
                },
                () => c(bt),
                {
                  onblur: ($e) => {
                    var ot;
                    X(A, !1), X(V, !0), rt(B(), "blur", $e), (ot = t.input$onblur) == null || ot.call(t, $e);
                  },
                  onfocus: ($e) => {
                    var ot;
                    X(A, !0), rt(B(), "focus", $e), (ot = t.input$onfocus) == null || ot.call(t, $e);
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
              ($e) => O($e),
              () => O()
            );
          }
          var xt = ie(et, 2);
          oe(xt, () => t.internalCounter ?? $), Ae((bt) => Hl(Ze, 1, bt), [
            () => Rl(Ve({
              "mdc-text-field__resizer": !("input$resizable" in ee) || t.input$resizable
            }))
          ]), x(Oe, Ze);
        }, Ft = (Oe) => {
          var Ze = Fv(), et = j(Ze);
          {
            var xt = (dt) => {
              var Ue = Z(), tt = j(Ue);
              {
                var pn = (st) => {
                  Tv(st, {
                    children: (_t, yt) => {
                      var Nt = Ct();
                      Ae(() => nt(Nt, t.prefix)), x(_t, Nt);
                    },
                    $$slots: { default: !0 }
                  });
                }, zt = (st) => {
                  var _t = Z(), yt = j(_t);
                  oe(yt, () => t.prefix ?? $), x(st, _t);
                };
                re(tt, (st) => {
                  typeof t.prefix == "string" ? st(pn) : st(zt, !1);
                });
              }
              x(dt, Ue);
            };
            re(et, (dt) => {
              t.prefix != null && dt(xt);
            });
          }
          var bt = ie(et, 2);
          {
            let dt = /* @__PURE__ */ ge(() => en(ee, "input$"));
            Ee(
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
                    return T();
                  },
                  get initialInvalid() {
                    return c(V);
                  },
                  get "aria-controls"() {
                    return c(P);
                  },
                  get "aria-describedby"() {
                    return c(P);
                  }
                },
                () => h() && t.label != null && typeof t.label == "string" ? { placeholder: t.label } : {},
                () => c(dt),
                {
                  onblur: (Ue) => {
                    var tt;
                    X(A, !1), X(V, !0), rt(B(), "blur", Ue), (tt = t.input$onblur) == null || tt.call(t, Ue);
                  },
                  onfocus: (Ue) => {
                    var tt;
                    X(A, !0), rt(B(), "focus", Ue), (tt = t.input$onfocus) == null || tt.call(t, Ue);
                  },
                  get value() {
                    return p();
                  },
                  set value(Ue) {
                    p(Ue);
                  },
                  get files() {
                    return E();
                  },
                  set files(Ue) {
                    E(Ue);
                  },
                  get dirty() {
                    return _();
                  },
                  set dirty(Ue) {
                    _(Ue);
                  },
                  get invalid() {
                    return y();
                  },
                  set invalid(Ue) {
                    y(Ue);
                  }
                }
              )),
              (Ue) => O(Ue),
              () => O()
            );
          }
          var $e = ie(bt, 2);
          {
            var ot = (dt) => {
              var Ue = Z(), tt = j(Ue);
              {
                var pn = (st) => {
                  Ov(st, {
                    children: (_t, yt) => {
                      var Nt = Ct();
                      Ae(() => nt(Nt, t.suffix)), x(_t, Nt);
                    },
                    $$slots: { default: !0 }
                  });
                }, zt = (st) => {
                  var _t = Z(), yt = j(_t);
                  oe(yt, () => t.suffix ?? $), x(st, _t);
                };
                re(tt, (st) => {
                  typeof t.suffix == "string" ? st(pn) : st(zt, !1);
                });
              }
              x(dt, Ue);
            };
            re($e, (dt) => {
              t.suffix != null && dt(ot);
            });
          }
          x(Oe, Ze);
        };
        re(je, (Oe) => {
          f() && typeof p() == "string" ? Oe(ct) : Oe(Ft, !1);
        });
      }
      var Tn = ie(je, 2);
      Fi(Tn, {
        key: "SMUI:textfield:icon:leading",
        value: !1,
        children: (Oe, Ze) => {
          var et = Z(), xt = j(et);
          oe(xt, () => t.trailingIcon ?? $), x(Oe, et);
        },
        $$slots: { default: !0 }
      });
      var _a = ie(Tn, 2);
      {
        var On = (Oe) => {
          {
            let Ze = /* @__PURE__ */ ge(() => en(ee, "ripple$"));
            Ee(Av(Oe, ut(() => c(Ze))), (et) => F(et), () => F());
          }
        };
        re(_a, (Oe) => {
          !f() && v() !== "outlined" && s() && Oe(On);
        });
      }
      Ee(W, (Oe) => H = Oe, () => H), Xe(W, (Oe, Ze) => Dn == null ? void 0 : Dn(Oe, Ze), () => ({
        ripple: !f() && v() === "filled",
        unbounded: !1,
        addClass: Ie,
        removeClass: Be,
        addStyle: Ce,
        eventTarget: c(te),
        activeTarget: c(te),
        initPromise: Y
      })), Xe(W, (Oe, Ze) => q == null ? void 0 : q(Oe, Ze), a), x(U, W);
    }, Jn = (U) => {
      var W = kv();
      We(W, (je, ct, Ft) => ({ class: je, style: ct, ...Ft }), [
        () => Ve({
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
          ...k,
          [o()]: !0
        }),
        () => Object.entries(K).map(([je, ct]) => `${je}: ${ct};`).concat([l()]).join(" "),
        () => na(ee, ["input$", "label$", "ripple$", "outline$", "helperLine$"])
      ]);
      var Ke = ce(W);
      {
        var Je = (je) => {
          var ct = Z(), Ft = j(ct);
          oe(Ft, () => t.label ?? $), x(je, ct);
        };
        re(Ke, (je) => {
          typeof t.label != "string" && je(Je);
        });
      }
      var at = ie(Ke, 2);
      Fi(at, {
        key: "SMUI:textfield:icon:leading",
        value: !0,
        children: (je, ct) => {
          var Ft = Z(), Tn = j(Ft);
          oe(Tn, () => t.leadingIcon ?? $), x(je, Ft);
        },
        $$slots: { default: !0 }
      });
      var mt = ie(at, 2);
      oe(mt, () => t.children ?? $);
      var Qt = ie(mt, 2);
      Fi(Qt, {
        key: "SMUI:textfield:icon:leading",
        value: !1,
        children: (je, ct) => {
          var Ft = Z(), Tn = j(Ft);
          oe(Tn, () => t.trailingIcon ?? $), x(je, Ft);
        },
        $$slots: { default: !0 }
      });
      var Ir = ie(Qt, 2);
      oe(Ir, () => t.line ?? $), Ee(W, (je) => H = je, () => H), Xe(W, (je, ct) => Dn == null ? void 0 : Dn(je, ct), () => ({
        ripple: s(),
        unbounded: !1,
        addClass: Ie,
        removeClass: Be,
        addStyle: Ce
      })), Xe(W, (je, ct) => q == null ? void 0 : q(je, ct), a), x(U, W);
    };
    re(Ut, (U) => {
      be ? U(Ln) : U(Jn, !1);
    });
  }
  var on = ie(Ut, 2);
  {
    var G = (U) => {
      {
        let W = /* @__PURE__ */ ge(() => en(ee, "helperLine$"));
        Lv(U, ut(() => c(W), {
          children: (Ke, Je) => {
            var at = Z(), mt = j(at);
            oe(mt, () => t.helper ?? $), x(Ke, at);
          },
          $$slots: { default: !0 }
        }));
      }
    };
    re(on, (U) => {
      t.helper && U(G);
    });
  }
  return x(e, Ge), Te(se);
}
var jv = /* @__PURE__ */ Q("<i><!></i>");
function Vv(e, t) {
  Le(t, !0);
  const n = () => Cn(g, "$leadingStore", r), [r, i] = Kn();
  let a = b(t, "use", 19, () => []), o = b(t, "class", 3, ""), l = b(t, "tabindex", 19, () => t.role === "button" ? 0 : -1), s = b(t, "disabled", 3, !1), u = /* @__PURE__ */ qe(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "role",
    "tabindex",
    "disabled",
    "children"
  ]), d, f = /* @__PURE__ */ _e(void 0), v = new ti(), h = me({});
  const g = pe("SMUI:textfield:icon:leading"), p = n();
  let E = /* @__PURE__ */ _e(void 0);
  const y = /* @__PURE__ */ ge(() => ({ role: t.role, tabindex: l() })), T = pe("SMUI:textfield:leading-icon:mount"), w = pe("SMUI:textfield:leading-icon:unmount"), _ = pe("SMUI:textfield:trailing-icon:mount"), S = pe("SMUI:textfield:trailing-icon:unmount");
  gt(() => (X(
    f,
    new yv({
      getAttr: m,
      setAttr: I,
      removeAttr: C,
      setContent: (M) => {
        X(E, M, !0);
      },
      registerInteractionHandler: (M, D) => v.on(O(), M, D),
      deregisterInteractionHandler: (M, D) => v.off(O(), M, D),
      notifyIconAction: () => rt(O(), "SMUITextFieldIcon")
    }),
    !0
  ), p ? T && T(c(f)) : _ && _(c(f)), c(f).init(), () => {
    var M;
    c(f) && (p ? w && w(c(f)) : S && S(c(f))), (M = c(f)) == null || M.destroy(), v.clear();
  }));
  function m(M) {
    return M in h ? h[M] ?? null : O().getAttribute(M);
  }
  function I(M, D) {
    h[M] !== D && (h[M] = D);
  }
  function C(M) {
    (!(M in h) || h[M] != null) && (h[M] = void 0);
  }
  function O() {
    return d;
  }
  var R = { getElement: O }, F = jv();
  We(
    F,
    (M) => ({
      class: M,
      "aria-hidden": l() === -1 ? "true" : "false",
      "aria-disabled": t.role === "button" ? s() ? "true" : "false" : void 0,
      ...c(y),
      ...h,
      ...u
    }),
    [
      () => Ve({
        "mdc-text-field__icon": !0,
        "mdc-text-field__icon--leading": p,
        "mdc-text-field__icon--trailing": !p,
        [o()]: !0
      })
    ]
  );
  var z = ce(F);
  {
    var ee = (M) => {
      var D = Z(), k = j(D);
      oe(k, () => t.children ?? $), x(M, D);
    }, be = (M) => {
      var D = Ct();
      Ae(() => nt(D, c(E))), x(M, D);
    };
    re(z, (M) => {
      c(E) == null ? M(ee) : M(be, !1);
    });
  }
  Ee(F, (M) => d = M, () => d), Xe(F, (M, D) => q == null ? void 0 : q(M, D), a), x(e, F);
  var H = Te(R);
  return i(), H;
}
function Pa(e, t) {
  Le(t, !0);
  let n = b(t, "placeholder", 3, ""), r = b(t, "label", 3, ""), i = b(t, "icon", 3, ""), a = b(t, "value", 15, ""), o = b(t, "variant", 3, "standard"), l = b(t, "styles", 3, ""), s = b(t, "required", 3, !1);
  var u = Z(), d = j(u);
  {
    var f = (h) => {
      {
        const g = (E) => {
          Vv(E, {
            class: "material-icons",
            children: (y, T) => {
              var w = Ct();
              Ae(() => nt(w, i())), x(y, w);
            },
            $$slots: { default: !0 }
          });
        };
        let p = /* @__PURE__ */ ge(() => `width: 100%; ${l()}`);
        Is(h, {
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
      Is(h, {
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
  x(e, u), Te();
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
var Fe = {
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
}, li = {
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
var ra;
(function(e) {
  e.POLL_SCROLL_POS = "poll_scroll_position", e.POLL_LAYOUT_CHANGE = "poll_layout_change";
})(ra || (ra = {}));
var Qv = (
  /** @class */
  function(e) {
    pt(t, e);
    function t(n) {
      var r = e.call(this, ne(ne({}, t.defaultAdapter), n)) || this;
      return r.dialogOpen = !1, r.isFullscreen = !1, r.animationFrame = 0, r.animationTimer = 0, r.escapeKeyAction = li.CLOSE_ACTION, r.scrimClickAction = li.CLOSE_ACTION, r.autoStackButtons = !0, r.areButtonsStacked = !1, r.suppressDefaultPressSelector = li.SUPPRESS_DEFAULT_PRESS_SELECTOR, r.animFrame = new Kv(), r.contentScrollHandler = function() {
        r.handleScrollEvent();
      }, r.windowResizeHandler = function() {
        r.layout();
      }, r.windowOrientationChangeHandler = function() {
        r.layout();
      }, r;
    }
    return Object.defineProperty(t, "cssClasses", {
      get: function() {
        return Fe;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t, "strings", {
      get: function() {
        return li;
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
      this.adapter.hasClass(Fe.STACKED) && this.setAutoStackButtons(!1), this.isFullscreen = this.adapter.hasClass(Fe.FULLSCREEN);
    }, t.prototype.destroy = function() {
      this.animationTimer && (clearTimeout(this.animationTimer), this.handleAnimationTimerEnd()), this.isFullscreen && this.adapter.deregisterContentEventHandler("scroll", this.contentScrollHandler), this.animFrame.cancelAll(), this.adapter.deregisterWindowEventHandler("resize", this.windowResizeHandler), this.adapter.deregisterWindowEventHandler("orientationchange", this.windowOrientationChangeHandler);
    }, t.prototype.open = function(n) {
      var r = this;
      this.dialogOpen = !0, this.adapter.notifyOpening(), this.adapter.addClass(Fe.OPENING), this.isFullscreen && this.adapter.registerContentEventHandler("scroll", this.contentScrollHandler), n && n.isAboveFullscreenDialog && this.adapter.addClass(Fe.SCRIM_HIDDEN), this.adapter.registerWindowEventHandler("resize", this.windowResizeHandler), this.adapter.registerWindowEventHandler("orientationchange", this.windowOrientationChangeHandler), this.runNextAnimationFrame(function() {
        r.adapter.addClass(Fe.OPEN), r.adapter.addBodyClass(Fe.SCROLL_LOCK), r.layout(), r.animationTimer = setTimeout(function() {
          r.handleAnimationTimerEnd(), r.adapter.trapFocus(r.adapter.getInitialFocusEl()), r.adapter.notifyOpened();
        }, Ma.DIALOG_ANIMATION_OPEN_TIME_MS);
      });
    }, t.prototype.close = function(n) {
      var r = this;
      n === void 0 && (n = ""), this.dialogOpen && (this.dialogOpen = !1, this.adapter.notifyClosing(n), this.adapter.addClass(Fe.CLOSING), this.adapter.removeClass(Fe.OPEN), this.adapter.removeBodyClass(Fe.SCROLL_LOCK), this.isFullscreen && this.adapter.deregisterContentEventHandler("scroll", this.contentScrollHandler), this.adapter.deregisterWindowEventHandler("resize", this.windowResizeHandler), this.adapter.deregisterWindowEventHandler("orientationchange", this.windowOrientationChangeHandler), cancelAnimationFrame(this.animationFrame), this.animationFrame = 0, clearTimeout(this.animationTimer), this.animationTimer = setTimeout(function() {
        r.adapter.releaseFocus(), r.handleAnimationTimerEnd(), r.adapter.notifyClosed(n);
      }, Ma.DIALOG_ANIMATION_CLOSE_TIME_MS));
    }, t.prototype.showSurfaceScrim = function() {
      var n = this;
      this.adapter.addClass(Fe.SURFACE_SCRIM_SHOWING), this.runNextAnimationFrame(function() {
        n.adapter.addClass(Fe.SURFACE_SCRIM_SHOWN);
      });
    }, t.prototype.hideSurfaceScrim = function() {
      this.adapter.removeClass(Fe.SURFACE_SCRIM_SHOWN), this.adapter.addClass(Fe.SURFACE_SCRIM_HIDING);
    }, t.prototype.handleSurfaceScrimTransitionEnd = function() {
      this.adapter.removeClass(Fe.SURFACE_SCRIM_HIDING), this.adapter.removeClass(Fe.SURFACE_SCRIM_SHOWING);
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
      this.animFrame.request(ra.POLL_LAYOUT_CHANGE, function() {
        n.layoutInternal();
      });
    }, t.prototype.handleClick = function(n) {
      var r = this.adapter.eventTargetMatches(n.target, li.SCRIM_SELECTOR);
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
      this.animFrame.request(ra.POLL_SCROLL_POS, function() {
        n.toggleScrollDividerHeader(), n.toggleScrollDividerFooter();
      });
    }, t.prototype.layoutInternal = function() {
      this.autoStackButtons && this.detectStackedButtons(), this.toggleScrollableClasses();
    }, t.prototype.handleAnimationTimerEnd = function() {
      this.animationTimer = 0, this.adapter.removeClass(Fe.OPENING), this.adapter.removeClass(Fe.CLOSING);
    }, t.prototype.runNextAnimationFrame = function(n) {
      var r = this;
      cancelAnimationFrame(this.animationFrame), this.animationFrame = requestAnimationFrame(function() {
        r.animationFrame = 0, clearTimeout(r.animationTimer), r.animationTimer = setTimeout(n, 0);
      });
    }, t.prototype.detectStackedButtons = function() {
      this.adapter.removeClass(Fe.STACKED);
      var n = this.adapter.areButtonsStacked();
      n && this.adapter.addClass(Fe.STACKED), n !== this.areButtonsStacked && (this.adapter.reverseButtons(), this.areButtonsStacked = n);
    }, t.prototype.toggleScrollableClasses = function() {
      this.adapter.removeClass(Fe.SCROLLABLE), this.adapter.isContentScrollable() && (this.adapter.addClass(Fe.SCROLLABLE), this.isFullscreen && (this.toggleScrollDividerHeader(), this.toggleScrollDividerFooter()));
    }, t.prototype.toggleScrollDividerHeader = function() {
      this.adapter.isScrollableContentAtTop() ? this.adapter.hasClass(Fe.SCROLL_DIVIDER_HEADER) && this.adapter.removeClass(Fe.SCROLL_DIVIDER_HEADER) : this.adapter.addClass(Fe.SCROLL_DIVIDER_HEADER);
    }, t.prototype.toggleScrollDividerFooter = function() {
      this.adapter.isScrollableContentAtBottom() ? this.adapter.hasClass(Fe.SCROLL_DIVIDER_FOOTER) && this.adapter.removeClass(Fe.SCROLL_DIVIDER_FOOTER) : this.adapter.addClass(Fe.SCROLL_DIVIDER_FOOTER);
    }, t;
  }(gn)
), Jv = /* @__PURE__ */ Q('<div class="mdc-dialog__surface-scrim"></div>'), $v = /* @__PURE__ */ Q('<div><div><div><!> <!></div></div> <div class="mdc-dialog__scrim"></div></div> <!>', 1);
function eg(e, t) {
  Le(t, !0);
  const n = () => Cn(z, "$aboveFullscreenShown", r), [r, i] = Kn(), { FocusTrap: a } = Yh, { closest: o, matches: l } = Ho;
  let s = b(t, "use", 19, () => []), u = b(t, "class", 3, ""), d = b(t, "open", 15, !1), f = b(t, "selection", 3, !1), v = b(t, "escapeKeyAction", 3, "close"), h = b(t, "scrimClickAction", 3, "close"), g = b(t, "autoStackButtons", 3, !0), p = b(t, "fullscreen", 3, !1), E = b(t, "sheet", 3, !1), y = b(t, "noContentPadding", 3, !1), T = b(t, "container$class", 3, ""), w = b(t, "surface$class", 3, ""), _ = /* @__PURE__ */ qe(t, [
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
  ]), S, m = /* @__PURE__ */ _e(void 0), I = new ti(), C = me({}), O, R = Rt(!1), F = pe("SMUI:dialog:aboveFullscreen"), z = pe("SMUI:dialog:aboveFullscreenShown") ?? Rt(!1), ee = pe("SMUI:addLayoutListener"), be, H = [], M = (G) => (H.push(G), () => {
    const U = H.indexOf(G);
    U >= 0 && H.splice(U, 1);
  });
  le("SMUI:dialog:actions:reversed", R), le("SMUI:addLayoutListener", M), le("SMUI:dialog:selection", f()), le("SMUI:dialog:aboveFullscreen", F || p()), le("SMUI:dialog:aboveFullscreenShown", z), E() && le("SMUI:icon-button:context", "dialog:sheet"), Me(() => {
    c(m) && c(m).getEscapeKeyAction() !== v() && c(m).setEscapeKeyAction(v());
  }), Me(() => {
    c(m) && c(m).getScrimClickAction() !== h() && c(m).setScrimClickAction(h());
  }), Me(() => {
    c(m) && c(m).getAutoStackButtons() !== g() && c(m).setAutoStackButtons(g());
  }), Me(() => {
    g() || Nn(R, !0);
  }), ee && (be = ee(De)), Me(() => {
    c(m) && c(m).isOpen() !== d() && (d() ? c(m).open({ isAboveFullscreenDialog: !!F }) : c(m).close());
  });
  let D = n();
  Me(() => {
    p() && c(m) && D !== n() && (D = n(), n() ? c(m).showSurfaceScrim() : c(m).hideSurfaceScrim());
  }), gt(() => (O = new a(S, { initialFocusEl: de() ?? void 0 }), X(
    m,
    new Qv({
      addBodyClass: (G) => document.body.classList.add(G),
      addClass: K,
      areButtonsStacked: () => Yv(A()),
      clickDefaultButton: () => {
        const G = V();
        G && G.click();
      },
      eventTargetMatches: (G, U) => G ? l(G, U) : !1,
      getActionFromEvent: (G) => {
        if (!G.target)
          return "";
        const U = o(G.target, "[data-mdc-dialog-action]");
        return U && U.getAttribute("data-mdc-dialog-action");
      },
      getInitialFocusEl: de,
      hasClass: k,
      isContentScrollable: () => Xv(ue()),
      notifyClosed: (G) => {
        d(!1), rt(te(), "SMUIDialogClosed", G ? { action: G } : {});
      },
      notifyClosing: (G) => rt(te(), "SMUIDialogClosing", G ? { action: G } : {}),
      notifyOpened: () => rt(te(), "SMUIDialogOpened", {}),
      notifyOpening: () => rt(te(), "SMUIDialogOpening", {}),
      releaseFocus: () => O.releaseFocus(),
      removeBodyClass: (G) => document.body.classList.remove(G),
      removeClass: P,
      reverseButtons: () => {
        Nn(R, !0);
      },
      trapFocus: () => O.trapFocus(),
      registerContentEventHandler: (G, U) => {
        const W = ue();
        W instanceof HTMLElement && I.on(W, G, U);
      },
      deregisterContentEventHandler: (G, U) => {
        const W = ue();
        W instanceof HTMLElement && I.off(W, G, U);
      },
      isScrollableContentAtTop: () => Wv(ue()),
      isScrollableContentAtBottom: () => Zv(ue()),
      registerWindowEventHandler: (G, U) => I.on(window, G, U),
      deregisterWindowEventHandler: (G, U) => I.off(window, G, U)
    }),
    !0
  ), c(m).init(), () => {
    var G;
    (G = c(m)) == null || G.destroy(), I.clear();
  })), Er(() => {
    be && be();
  });
  function k(G) {
    return G in C ? C[G] : te().classList.contains(G);
  }
  function K(G) {
    C[G] || (C[G] = !0);
  }
  function P(G) {
    (!(G in C) || C[G]) && (C[G] = !1);
  }
  function A() {
    return [].slice.call(te().querySelectorAll(".mdc-dialog__button"));
  }
  function V() {
    return te().querySelector("[data-mdc-dialog-button-default]");
  }
  function ue() {
    return te().querySelector(".mdc-dialog__content");
  }
  function de() {
    return te().querySelector("[data-mdc-dialog-initial-focus]");
  }
  function ae() {
    F && Nn(z, !0), requestAnimationFrame(() => {
      H.forEach((G) => G());
    });
  }
  function Y() {
    H.forEach((G) => G());
  }
  function J() {
    F && Nn(z, !1);
  }
  function fe() {
    return d();
  }
  function ye(G) {
    d(G);
  }
  function De() {
    var G;
    return (G = c(m)) == null ? void 0 : G.layout();
  }
  function te() {
    return S;
  }
  var Se = { isOpen: fe, setOpen: ye, layout: De, getElement: te }, he = $v();
  Fn("resize", Qi, () => d() && c(m) && c(m).layout()), Fn("orientationchange", Qi, () => d() && c(m) && c(m).layout()), Fn("keydown", ul.body, (G) => c(m) && c(m).handleDocumentKeydown(G));
  var Ie = j(he), Be = (G) => {
    var U;
    ae(), (U = t.onSMUIDialogOpening) == null || U.call(t, G);
  }, Ce = (G) => {
    var U;
    Y(), (U = t.onSMUIDialogOpened) == null || U.call(t, G);
  }, ke = (G) => {
    var U;
    J(), (U = t.onSMUIDialogClosed) == null || U.call(t, G);
  }, Ye = (G) => {
    var U;
    c(m) && c(m).handleClick(G), (U = t.onclick) == null || U.call(t, G);
  }, L = (G) => {
    var U;
    c(m) && c(m).handleKeydown(G), (U = t.onkeydown) == null || U.call(t, G);
  };
  We(
    Ie,
    (G, U) => ({
      class: G,
      role: "alertdialog",
      "aria-modal": "true",
      ...U,
      onSMUIDialogOpening: Be,
      onSMUIDialogOpened: Ce,
      onSMUIDialogClosed: ke,
      onclick: Ye,
      onkeydown: L
    }),
    [
      () => Ve({
        "mdc-dialog": !0,
        "mdc-dialog--stacked": !g(),
        "mdc-dialog--fullscreen": p(),
        "mdc-dialog--sheet": E(),
        "mdc-dialog--no-content-padding": y(),
        "smui-dialog--selection": f(),
        ...C,
        [u()]: !0
      }),
      () => na(_, ["container$", "surface$"])
    ]
  );
  var B = ce(Ie);
  We(B, (G, U) => ({ class: G, ...U }), [
    () => Ve({ "mdc-dialog__container": !0, [T()]: !0 }),
    () => en(_, "container$")
  ]);
  var se = ce(B);
  We(se, (G, U) => ({ class: G, role: "alertdialog", "aria-modal": "true", ...U }), [
    () => Ve({ "mdc-dialog__surface": !0, [w()]: !0 }),
    () => en(_, "surface$")
  ]);
  var Ge = ce(se);
  oe(Ge, () => t.children ?? $);
  var Ut = ie(Ge, 2);
  {
    var Ln = (G) => {
      var U = Jv();
      Fn("transitionend", U, () => c(m) && c(m).handleSurfaceScrimTransitionEnd()), x(G, U);
    };
    re(Ut, (G) => {
      p() && G(Ln);
    });
  }
  Ee(Ie, (G) => S = G, () => S), Xe(Ie, (G, U) => q == null ? void 0 : q(G, U), s);
  var Jn = ie(Ie, 2);
  oe(Jn, () => t.over ?? $), x(e, he);
  var on = Te(Se);
  return i(), on;
}
function tg(e, t) {
  Le(t, !0);
  let n = /* @__PURE__ */ qe(t, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return Ee(
    Li(e, ut({ _smuiClass: "mdc-dialog__content", tag: "div" }, () => n, {
      children: (o, l) => {
        var s = Z(), u = j(s);
        oe(u, () => t.children ?? $), x(o, s);
      },
      $$slots: { default: !0 }
    })),
    (o) => r = o,
    () => r
  ), Te(a);
}
function ng(e, t) {
  Le(t, !0);
  let n = /* @__PURE__ */ qe(t, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return Ee(
    Li(e, ut(
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
          var s = Z(), u = j(s);
          oe(u, () => t.children ?? $), x(o, s);
        },
        $$slots: { default: !0 }
      }
    )),
    (o) => r = o,
    () => r
  ), Te(a);
}
var rg = /* @__PURE__ */ Q('<div class="dialog-title svelte-187m1sc"><!></div> <!> <!>', 1);
function ws(e, t) {
  Le(t, !0);
  let n = b(t, "open", 15, !1), r = b(t, "onClose", 3, () => {
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
      var o = rg(), l = j(o), s = ce(l);
      oe(s, () => t.title ?? $);
      var u = ie(l, 2);
      tg(u, {
        id: "large-scroll-content",
        children: (f, v) => {
          var h = Z(), g = j(h);
          oe(g, () => t.content ?? $), x(f, h);
        },
        $$slots: { default: !0 }
      });
      var d = ie(u, 2);
      ng(d, {
        children: (f, v) => {
          var h = Z(), g = j(h);
          oe(g, () => t.actions ?? $), x(f, h);
        },
        $$slots: { default: !0 }
      }), x(i, o);
    },
    $$slots: { default: !0 }
  }), Te();
}
const ft = [];
for (let e = 0; e < 256; ++e)
  ft.push((e + 256).toString(16).slice(1));
function ig(e, t = 0) {
  return (ft[e[t + 0]] + ft[e[t + 1]] + ft[e[t + 2]] + ft[e[t + 3]] + "-" + ft[e[t + 4]] + ft[e[t + 5]] + "-" + ft[e[t + 6]] + ft[e[t + 7]] + "-" + ft[e[t + 8]] + ft[e[t + 9]] + "-" + ft[e[t + 10]] + ft[e[t + 11]] + ft[e[t + 12]] + ft[e[t + 13]] + ft[e[t + 14]] + ft[e[t + 15]]).toLowerCase();
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
var ug = /* @__PURE__ */ Q('<span class="oscd-icon"><!></span>');
function wn(e, t) {
  var n = ug(), r = ce(n);
  oe(r, () => t.children ?? $), x(e, n);
}
var cg = /* @__PURE__ */ qt('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"></path></svg>');
function du(e, t) {
  let n = b(t, "svgStyles", 3, "");
  wn(e, {
    children: (r, i) => {
      var a = cg();
      Ae(() => Pt(a, n())), x(r, a);
    }
  });
}
var dg = /* @__PURE__ */ qt('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="24px"><path d="m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"></path></svg>');
function lo(e, t) {
  let n = b(t, "svgStyles", 3, "");
  wn(e, {
    children: (r, i) => {
      var a = dg();
      Ae(() => Pt(a, n())), x(r, a);
    }
  });
}
var fg = /* @__PURE__ */ qt('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z"></path></svg>');
function hg(e, t) {
  let n = b(t, "svgStyles", 3, "");
  wn(e, {
    children: (r, i) => {
      var a = fg();
      Ae(() => Pt(a, n())), x(r, a);
    }
  });
}
var vg = /* @__PURE__ */ qt('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="m590-160 80 80H240q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h360l200 240v480q0 20-8.5 36.5T768-96L560-302q-17 11-37 16.5t-43 5.5q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 23-5.5 43T618-360l102 104v-356L562-800H240v640h350ZM480-360q33 0 56.5-23.5T560-440q0-33-23.5-56.5T480-520q-33 0-56.5 23.5T400-440q0 33 23.5 56.5T480-360Zm0-80Zm0 0Z"></path></svg>');
function gg(e, t) {
  let n = b(t, "svgStyles", 3, "");
  wn(e, {
    children: (r, i) => {
      var a = vg();
      Ae(() => Pt(a, n())), x(r, a);
    }
  });
}
var pg = /* @__PURE__ */ qt('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-160q-134 0-227-93t-93-227q0-134 93-227t227-93q69 0 132 28.5T720-690v-110h80v280H520v-80h168q-32-56-87.5-88T480-720q-100 0-170 70t-70 170q0 100 70 170t170 70q77 0 139-44t87-116h84q-28 106-114 173t-196 67Z"></path></svg>');
function fu(e, t) {
  let n = b(t, "svgStyles", 3, "");
  wn(e, {
    children: (r, i) => {
      var a = pg();
      Ae(() => Pt(a, n())), x(r, a);
    }
  });
}
var mg = /* @__PURE__ */ qt('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M840-680v480q0 33-23.5 56.5T760-120H200q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h480l160 160Zm-80 34L646-760H200v560h560v-446ZM480-240q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35ZM240-560h360v-160H240v160Zm-40-86v446-560 114Z"></path></svg>');
function Ts(e, t) {
  let n = b(t, "svgStyles", 3, "");
  wn(e, {
    children: (r, i) => {
      var a = mg();
      Ae(() => Pt(a, n())), x(r, a);
    }
  });
}
var bg = /* @__PURE__ */ qt('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M200-440v-80h560v80H200Z"></path></svg>');
function _g(e, t) {
  let n = b(t, "svgStyles", 3, "");
  wn(e, {
    children: (r, i) => {
      var a = bg();
      Ae(() => Pt(a, n())), x(r, a);
    }
  });
}
var yg = /* @__PURE__ */ qt('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"></path></svg>');
function Eg(e, t) {
  let n = b(t, "svgStyles", 3, "");
  wn(e, {
    children: (r, i) => {
      var a = yg();
      Ae(() => Pt(a, n())), x(r, a);
    }
  });
}
var Sg = /* @__PURE__ */ qt('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"></path></svg>');
function Cg(e, t) {
  let n = b(t, "svgStyles", 3, "");
  wn(e, {
    children: (r, i) => {
      var a = Sg();
      Ae(() => Pt(a, n())), x(r, a);
    }
  });
}
oc();
xn(["change"]);
var Ag = /* @__PURE__ */ Q('<div class="overlay svelte-14uvd2z"><div class="loading-spinner-container svelte-14uvd2z"><div class="loading-spinner svelte-14uvd2z"></div> <span class="loading-message svelte-14uvd2z"> </span></div></div>'), Ig = /* @__PURE__ */ Q('<div class="svelte-14uvd2z"><!></div>');
function Os(e, t) {
  let n = b(t, "loadingDone", 3, !0), r = b(t, "message", 3, "Loading...");
  var i = Ig(), a = ce(i);
  {
    var o = (l) => {
      var s = Ag(), u = ce(s), d = ie(ce(u), 2), f = ce(d);
      Ae(() => nt(f, r())), x(l, s);
    };
    re(a, (l) => {
      n() || l(o);
    });
  }
  x(e, i);
}
xn(["change"]);
function xg(e, t, n, r) {
  t() && ((e.key === "Enter" || e.key === " ") && (e.preventDefault(), n()), e.key === "Escape" && (e.preventDefault(), r()));
}
var wg = /* @__PURE__ */ Q('<span role="button" tabindex="0" aria-labelledby="tooltip"><!></span>');
function Rs(e, t) {
  Le(t, !0);
  let n = b(t, "content", 3, ""), r = b(t, "side", 3, "top"), i = b(t, "hoverDelay", 3, 0), a = b(t, "transitionDuration", 3, 80);
  const o = `tt-${Math.random().toString(36).slice(2)}`;
  let l = /* @__PURE__ */ _e(null), s = /* @__PURE__ */ _e(null), u = /* @__PURE__ */ _e(null), d = /* @__PURE__ */ _e(null), f = /* @__PURE__ */ _e(!1), v = /* @__PURE__ */ _e(null), h = /* @__PURE__ */ _e(null);
  function g() {
    n() && (c(v) && clearTimeout(c(v)), i() > 0 ? X(v, setTimeout(() => X(f, !0), i()), !0) : X(f, !0));
  }
  function p() {
    c(v) && clearTimeout(c(v)), X(f, !1);
  }
  function E() {
    g();
  }
  function y() {
    p();
  }
  function T() {
    g();
  }
  function w() {
    p();
  }
  function _() {
    if (!c(s) || !c(d) || !c(l)) return;
    const C = c(l).getBoundingClientRect(), O = c(d).getBoundingClientRect();
    let R = 0, F = 0;
    const z = 8;
    switch (r()) {
      case "top":
        R = C.top - O.height - z, F = C.left + C.width / 2 - O.width / 2;
        break;
      case "bottom":
        R = C.bottom + z, F = C.left + C.width / 2 - O.width / 2;
        break;
      case "left":
        R = C.top + C.height / 2 - O.height / 2, F = C.left - O.width - z;
        break;
      case "right":
        R = C.top + C.height / 2 - O.height / 2, F = C.right + z;
        break;
    }
    c(s).style.top = `${R + window.scrollY}px`, c(s).style.left = `${F + window.scrollX}px`;
  }
  function S() {
    var C;
    (C = c(h)) == null || C.disconnect(), X(h, null), c(s) && c(s).parentNode && c(s).parentNode.removeChild(c(s)), X(s, null), X(d, null), X(u, null), c(v) && clearTimeout(c(v));
  }
  Er(S), Me(() => {
    if (!(!c(f) || !n())) {
      if (!c(s)) {
        X(s, document.createElement("div"), !0), c(s).style.position = "absolute", c(s).style.zIndex = "9999", c(s).style.pointerEvents = "none", c(s).style.opacity = "0", c(s).style.transition = `opacity ${a()}ms ease`, c(s).id = o, c(s).setAttribute("role", "tooltip"), document.body.appendChild(c(s)), X(u, c(s).attachShadow({ mode: "open" }), !0);
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
      `, c(u).appendChild(C), X(d, document.createElement("div"), !0), c(u).appendChild(c(d)), X(
          h,
          new MutationObserver(() => {
            c(f) && _();
          }),
          !0
        ), c(h).observe(document.body, { childList: !0, subtree: !0 });
      }
      c(d) && (c(d).className = `bubble ${r()}`, c(d).innerHTML = n()), c(s) && (c(s).style.opacity = "1", _());
    }
  }), Me(() => {
    if (c(f) || !c(s))
      return;
    c(s).style.opacity = "0";
    const C = c(s), O = setTimeout(
      () => {
        C && C.parentNode && C.parentNode.removeChild(C), c(s) === C && S();
      },
      a()
    );
    return () => clearTimeout(O);
  });
  var m = wg();
  m.__keydown = [xg, n, g, p];
  var I = ce(m);
  oe(I, () => t.children ?? $), Ee(m, (C) => X(l, C), () => c(l)), Ae(() => {
    qn(m, "aria-haspopup", n() ? "true" : void 0), qn(m, "aria-expanded", n() ? c(f) ? "true" : "false" : void 0), qn(m, "aria-describedby", n() ? o : void 0);
  }), Fn("mouseenter", m, E), Fn("mouseleave", m, y), Fn("focus", m, T), Fn("blur", m, w), x(e, m), Te();
}
xn(["keydown"]);
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
}, Jt = {
  ARIA_HIDDEN: "aria-hidden",
  ARIA_VALUEMAX: "aria-valuemax",
  ARIA_VALUEMIN: "aria-valuemin",
  ARIA_VALUENOW: "aria-valuenow",
  BUFFER_BAR_SELECTOR: ".mdc-linear-progress__buffer-bar",
  FLEX_BASIS: "flex-basis",
  PRIMARY_BAR_SELECTOR: ".mdc-linear-progress__primary-bar"
}, ui = {
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
    pt(t, e);
    function t(n) {
      var r = e.call(this, ne(ne({}, t.defaultAdapter), n)) || this;
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
      this.determinate = !this.adapter.hasClass(kt.INDETERMINATE_CLASS), this.adapter.addClass(kt.ANIMATION_READY_CLASS), this.progress = 0, this.buffer = 1, this.observer = this.adapter.attachResizeObserver(function(r) {
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
        this.adapter.removeClass(kt.INDETERMINATE_CLASS), this.adapter.setAttribute(Jt.ARIA_VALUENOW, this.progress.toString()), this.adapter.setAttribute(Jt.ARIA_VALUEMAX, "1"), this.adapter.setAttribute(Jt.ARIA_VALUEMIN, "0"), this.setPrimaryBarProgress(this.progress), this.setBufferBarProgress(this.buffer);
        return;
      }
      this.observer && this.calculateAndSetDimensions(this.adapter.getWidth()), this.adapter.addClass(kt.INDETERMINATE_CLASS), this.adapter.removeAttribute(Jt.ARIA_VALUENOW), this.adapter.removeAttribute(Jt.ARIA_VALUEMAX), this.adapter.removeAttribute(Jt.ARIA_VALUEMIN), this.setPrimaryBarProgress(1), this.setBufferBarProgress(1);
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
      this.adapter.removeClass(kt.CLOSED_CLASS), this.adapter.removeClass(kt.CLOSED_ANIMATION_OFF_CLASS), this.adapter.removeAttribute(Jt.ARIA_HIDDEN);
    }, t.prototype.close = function() {
      this.adapter.addClass(kt.CLOSED_CLASS), this.adapter.setAttribute(Jt.ARIA_HIDDEN, "true");
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
      this.adapter.setBufferBarStyle(Jt.FLEX_BASIS, r);
    }, t.prototype.calculateAndSetDimensions = function(n) {
      var r = n * ui.PRIMARY_HALF, i = n * ui.PRIMARY_FULL, a = n * ui.SECONDARY_QUARTER, o = n * ui.SECONDARY_HALF, l = n * ui.SECONDARY_FULL;
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
}, Hs = {
  ARIA_SELECTED: "aria-selected",
  ARIA_SORT: "aria-sort"
}, rr = {
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
    pt(t, e);
    function t(n) {
      return e.call(this, ne(ne({}, t.defaultAdapter), n)) || this;
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
        o !== i && (this.adapter.removeClassNameByHeaderCellIndex(o, bn.HEADER_CELL_SORTED), this.adapter.removeClassNameByHeaderCellIndex(o, bn.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(o, rr.ARIA_SORT, jt.NONE), this.adapter.setSortStatusLabelByHeaderCellIndex(o, jt.NONE));
      this.adapter.setClassNameByHeaderCellIndex(i, bn.HEADER_CELL_SORTED);
      var l = this.adapter.getAttributeByHeaderCellIndex(i, rr.ARIA_SORT), s = jt.NONE;
      l === jt.ASCENDING ? (this.adapter.setClassNameByHeaderCellIndex(i, bn.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(i, rr.ARIA_SORT, jt.DESCENDING), s = jt.DESCENDING) : l === jt.DESCENDING ? (this.adapter.removeClassNameByHeaderCellIndex(i, bn.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(i, rr.ARIA_SORT, jt.ASCENDING), s = jt.ASCENDING) : (this.adapter.setAttributeByHeaderCellIndex(i, rr.ARIA_SORT, jt.ASCENDING), s = jt.ASCENDING), this.adapter.setSortStatusLabelByHeaderCellIndex(i, s), this.adapter.notifySortAction({
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
      r ? (this.adapter.addClassAtRowIndex(n, bn.ROW_SELECTED), this.adapter.setAttributeAtRowIndex(n, rr.ARIA_SELECTED, "true")) : (this.adapter.removeClassAtRowIndex(n, bn.ROW_SELECTED), this.adapter.setAttributeAtRowIndex(n, rr.ARIA_SELECTED, "false"));
    }, t;
  }(gn)
), Og = /* @__PURE__ */ Q('<div class="mdc-data-table__progress-indicator"><div class="mdc-data-table__scrim"></div> <!></div>'), Rg = /* @__PURE__ */ Q("<div><div><table><!></table></div> <!> <!></div>");
function Hg(e, t) {
  Le(t, !0);
  const n = () => Cn(ee, "$progressClosed", r), [r, i] = Kn(), { closest: a } = Ho;
  let o = b(t, "use", 19, () => []), l = b(t, "class", 3, ""), s = b(t, "stickyHeader", 3, !1), u = b(t, "sortable", 3, !1), d = b(t, "sort", 15, null), f = b(t, "sortDirection", 15, "ascending"), v = b(t, "sortAscendingAriaLabel", 3, "sorted, ascending"), h = b(t, "sortDescendingAriaLabel", 3, "sorted, descending"), g = b(t, "container$use", 19, () => []), p = b(t, "container$class", 3, ""), E = b(t, "table$use", 19, () => []), y = b(t, "table$class", 3, ""), T = /* @__PURE__ */ qe(t, [
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
  ]), w, _ = /* @__PURE__ */ _e(void 0), S, m = /* @__PURE__ */ _e(void 0), I = /* @__PURE__ */ _e(void 0), C = me({}), O = /* @__PURE__ */ _e(me({ height: "auto", top: "initial" })), R = pe("SMUI:addLayoutListener"), F, z = !1, ee = Rt(!1), be = Rt(d());
  Me(() => {
    Nn(be, d());
  });
  let H = Rt(f());
  Me(() => {
    Nn(H, f());
  }), le("SMUI:checkbox:context", "data-table"), le("SMUI:linear-progress:context", "data-table"), le("SMUI:linear-progress:closed", ee), le("SMUI:data-table:sortable", u()), le("SMUI:data-table:sort", be), le("SMUI:data-table:sortDirection", H), le("SMUI:data-table:sortAscendingAriaLabel", v()), le("SMUI:data-table:sortDescendingAriaLabel", h()), R && (F = R(de));
  let M;
  Me(() => {
    t.progress && c(_) && M !== n() && (M = n(), n() ? c(_).hideProgress() : c(_).showProgress());
  }), le("SMUI:checkbox:mount", () => {
    c(_) && z && c(_).layout();
  }), le("SMUI:data-table:header:mount", (L) => {
    X(m, L, !0);
  }), le("SMUI:data-table:header:unmount", () => {
    X(m, void 0);
  }), le("SMUI:data-table:body:mount", (L) => {
    X(I, L, !0);
  }), le("SMUI:data-table:body:unmount", () => {
    X(I, void 0);
  }), gt(() => (X(
    _,
    new Tg({
      addClass: k,
      removeClass: K,
      getHeaderCellElements: () => {
        var L;
        return ((L = c(m)) == null ? void 0 : L.cells.map((B) => B.element)) ?? [];
      },
      getHeaderCellCount: () => {
        var L;
        return ((L = c(m)) == null ? void 0 : L.cells.length) ?? 0;
      },
      getAttributeByHeaderCellIndex: (L, B) => {
        var se;
        return ((se = c(m)) == null ? void 0 : se.orderedCells[L].getAttr(B)) ?? null;
      },
      setAttributeByHeaderCellIndex: (L, B, se) => {
        var Ge;
        (Ge = c(m)) == null || Ge.orderedCells[L].addAttr(B, se);
      },
      setClassNameByHeaderCellIndex: (L, B) => {
        var se;
        (se = c(m)) == null || se.orderedCells[L].addClass(B);
      },
      removeClassNameByHeaderCellIndex: (L, B) => {
        var se;
        (se = c(m)) == null || se.orderedCells[L].removeClass(B);
      },
      notifySortAction: (L) => {
        d(L.columnId), f(L.sortValue), rt(ae(), "SMUIDataTableSorted", L);
      },
      getTableContainerHeight: () => S.getBoundingClientRect().height,
      getTableHeaderHeight: () => {
        const L = ae().querySelector(".mdc-data-table__header-row");
        if (!L)
          throw new Error("MDCDataTable: Table header element not found.");
        return L.getBoundingClientRect().height;
      },
      setProgressIndicatorStyles: (L) => {
        X(O, L, !0);
      },
      addClassAtRowIndex: (L, B) => {
        var se;
        (se = c(I)) == null || se.orderedRows[L].addClass(B);
      },
      getRowCount: () => {
        var L;
        return ((L = c(I)) == null ? void 0 : L.rows.length) ?? 0;
      },
      getRowElements: () => {
        var L;
        return ((L = c(I)) == null ? void 0 : L.rows.map((B) => B.element)) ?? [];
      },
      getRowIdAtIndex: (L) => {
        var B;
        return ((B = c(I)) == null ? void 0 : B.orderedRows[L].rowId) ?? null;
      },
      getRowIndexByChildElement: (L) => {
        var B;
        return ((B = c(I)) == null ? void 0 : B.orderedRows.map((se) => se.element).indexOf(a(L, ".mdc-data-table__row"))) ?? -1;
      },
      getSelectedRowCount: () => {
        var L;
        return ((L = c(I)) == null ? void 0 : L.rows.filter((B) => B.selected).length) ?? 0;
      },
      isCheckboxAtRowIndexChecked: (L) => {
        var se;
        const B = (se = c(I)) == null ? void 0 : se.orderedRows[L].checkbox;
        return B ? B.checked : !1;
      },
      isHeaderRowCheckboxChecked: () => {
        var B;
        const L = (B = c(m)) == null ? void 0 : B.checkbox;
        return L ? L.checked : !1;
      },
      isRowsSelectable: () => !!ae().querySelector(".mdc-data-table__row-checkbox") || !!ae().querySelector(".mdc-data-table__header-row-checkbox"),
      notifyRowSelectionChanged: (L) => {
        var se;
        const B = (se = c(I)) == null ? void 0 : se.orderedRows[L.rowIndex];
        B && rt(ae(), "SMUIDataTableSelectionChanged", {
          row: B.element,
          rowId: B.rowId,
          rowIndex: L.rowIndex,
          selected: L.selected
        });
      },
      notifySelectedAll: () => {
        P(!1), rt(ae(), "SMUIDataTableSelectedAll");
      },
      notifyUnselectedAll: () => {
        P(!1), rt(ae(), "SMUIDataTableUnselectedAll");
      },
      notifyRowClick: (L) => rt(ae(), "SMUIDataTableClickRow", L),
      registerHeaderRowCheckbox: () => {
      },
      registerRowCheckboxes: () => {
      },
      removeClassAtRowIndex: (L, B) => {
        var se;
        (se = c(I)) == null || se.orderedRows[L].removeClass(B);
      },
      setAttributeAtRowIndex: (L, B, se) => {
        var Ge;
        (Ge = c(I)) == null || Ge.orderedRows[L].addAttr(B, se);
      },
      setHeaderRowCheckboxChecked: (L) => {
        var se;
        const B = (se = c(m)) == null ? void 0 : se.checkbox;
        B && (B.checked = L);
      },
      setHeaderRowCheckboxIndeterminate: P,
      setRowCheckboxCheckedAtIndex: (L, B) => {
        var Ge;
        const se = (Ge = c(I)) == null ? void 0 : Ge.orderedRows[L].checkbox;
        se && (se.checked = B);
      },
      setSortStatusLabelByHeaderCellIndex: (L, B) => {
      }
    }),
    !0
  ), c(_).init(), c(_).layout(), z = !0, () => {
    var L;
    (L = c(_)) == null || L.destroy();
  })), Er(() => {
    F && F();
  });
  function D(L) {
    c(_) && c(_).handleRowCheckboxChange(L);
  }
  function k(L) {
    C[L] || (C[L] = !0);
  }
  function K(L) {
    (!(L in C) || C[L]) && (C[L] = !1);
  }
  function P(L) {
    var se;
    const B = (se = c(m)) == null ? void 0 : se.checkbox;
    B && (B.indeterminate = L);
  }
  function A(L) {
    if (!c(_) || !L.detail.target)
      return;
    const B = a(L.detail.target, ".mdc-data-table__header-cell--with-sort");
    B && ue(B);
  }
  function V(L) {
    if (!c(_) || !L.detail.target)
      return;
    const B = a(L.detail.target, ".mdc-data-table__row");
    B && c(_) && c(_).handleRowClick({ rowId: L.detail.rowId, row: B });
  }
  function ue(L) {
    var Ut, Ln;
    const B = ((Ut = c(m)) == null ? void 0 : Ut.orderedCells) ?? [], se = B.map((Jn) => Jn.element).indexOf(L);
    if (se === -1)
      return;
    const Ge = B[se].columnId ?? null;
    (Ln = c(_)) == null || Ln.handleSortAction({ columnId: Ge, columnIndex: se, headerCell: L });
  }
  function de() {
    var L;
    return (L = c(_)) == null ? void 0 : L.layout();
  }
  function ae() {
    return w;
  }
  var Y = { layout: de, getElement: ae }, J = Rg(), fe = (L) => {
    var B;
    c(_) && c(_).handleHeaderRowCheckboxChange(), (B = t.onSMUIDataTableHeaderCheckboxChange) == null || B.call(t, L);
  }, ye = (L) => {
    var B;
    A(L), (B = t.onSMUIDataTableHeaderClick) == null || B.call(t, L);
  }, De = (L) => {
    var B;
    V(L), (B = t.onSMUIDataTableRowClick) == null || B.call(t, L);
  }, te = (L) => {
    var B;
    D(L), (B = t.onSMUIDataTableBodyCheckboxChange) == null || B.call(t, L);
  };
  We(
    J,
    (L, B) => ({
      class: L,
      ...B,
      onSMUIDataTableHeaderCheckboxChange: fe,
      onSMUIDataTableHeaderClick: ye,
      onSMUIDataTableRowClick: De,
      onSMUIDataTableBodyCheckboxChange: te
    }),
    [
      () => Ve({
        "mdc-data-table": !0,
        "mdc-data-table--sticky-header": s(),
        ...C,
        [l()]: !0
      }),
      () => na(T, ["container$", "table$"])
    ]
  );
  var Se = ce(J);
  We(Se, (L, B) => ({ class: L, ...B }), [
    () => Ve({
      "mdc-data-table__table-container": !0,
      [p()]: !0
    }),
    () => en(T, "container$")
  ]);
  var he = ce(Se);
  We(he, (L, B) => ({ class: L, ...B }), [
    () => Ve({ "mdc-data-table__table": !0, [y()]: !0 }),
    () => en(T, "table$")
  ]);
  var Ie = ce(he);
  oe(Ie, () => t.children ?? $), Xe(he, (L, B) => q == null ? void 0 : q(L, B), E), Ee(Se, (L) => S = L, () => S), Xe(Se, (L, B) => q == null ? void 0 : q(L, B), g);
  var Be = ie(Se, 2);
  {
    var Ce = (L) => {
      var B = Og(), se = ie(ce(B), 2);
      oe(se, () => t.progress ?? $), Ae((Ge) => Pt(B, Ge), [
        () => Object.entries(c(O)).map(([Ge, Ut]) => `${Ge}: ${Ut};`).join(" ")
      ]), x(L, B);
    };
    re(Be, (L) => {
      t.progress && L(Ce);
    });
  }
  var ke = ie(Be, 2);
  oe(ke, () => t.paginate ?? $), Ee(J, (L) => w = L, () => w), Xe(J, (L, B) => q == null ? void 0 : q(L, B), o), x(e, J);
  var Ye = Te(Y);
  return i(), Ye;
}
var Dg = /* @__PURE__ */ Q("<thead><!></thead>");
function Pg(e, t) {
  Le(t, !0);
  let n = b(t, "use", 19, () => []), r = /* @__PURE__ */ qe(t, ["$$slots", "$$events", "$$legacy", "use", "children"]), i, a = /* @__PURE__ */ _e(void 0), o = [];
  const l = /* @__PURE__ */ new WeakMap();
  le("SMUI:data-table:row:header", !0);
  const s = pe("SMUI:checkbox:mount");
  le("SMUI:checkbox:mount", (y) => {
    X(a, y, !0), s && s(y);
  });
  const u = pe("SMUI:checkbox:unmount");
  le("SMUI:checkbox:unmount", (y) => {
    X(a, void 0), u && u(y);
  }), le("SMUI:data-table:cell:mount", (y) => {
    o.push(y), l.set(y.element, y);
  }), le("SMUI:data-table:cell:unmount", (y) => {
    const T = o.findIndex((w) => w === y);
    T !== -1 && o.splice(T, 1), l.delete(y.element);
  });
  const d = pe("SMUI:data-table:header:mount"), f = pe("SMUI:data-table:header:unmount");
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
  var g = { getElement: h }, p = Dg();
  We(p, () => ({ ...r }));
  var E = ce(p);
  return oe(E, () => t.children ?? $), Ee(p, (y) => i = y, () => i), Xe(p, (y, T) => q == null ? void 0 : q(y, T), n), x(e, p), Te(g);
}
var Mg = /* @__PURE__ */ Q("<tbody><!></tbody>");
function Bg(e, t) {
  Le(t, !0);
  let n = b(t, "use", 19, () => []), r = b(t, "class", 3, ""), i = /* @__PURE__ */ qe(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "children"
  ]), a, o = [];
  const l = /* @__PURE__ */ new WeakMap();
  le("SMUI:data-table:row:header", !1), le("SMUI:data-table:row:mount", (p) => {
    o.push(p), l.set(p.element, p);
  }), le("SMUI:data-table:row:unmount", (p) => {
    const E = o.findIndex((y) => y === p);
    E !== -1 && o.splice(E, 1), l.delete(p.element);
  });
  const s = pe("SMUI:data-table:body:mount"), u = pe("SMUI:data-table:body:unmount");
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
  var v = { getElement: f }, h = Mg();
  We(h, (p) => ({ class: p, ...i }), [
    () => Ve({ "mdc-data-table__content": !0, [r()]: !0 })
  ]);
  var g = ce(h);
  return oe(g, () => t.children ?? $), Ee(h, (p) => a = p, () => a), Xe(h, (p, E) => q == null ? void 0 : q(p, E), n), x(e, h), Te(v);
}
let Ug = 0;
var Fg = /* @__PURE__ */ Q("<tr><!></tr>");
function Ua(e, t) {
  Le(t, !0);
  let n = b(t, "use", 19, () => []), r = b(t, "class", 3, ""), i = b(t, "rowId", 19, () => "SMUI-data-table-row-" + Ug++), a = /* @__PURE__ */ qe(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "rowId",
    "children"
  ]), o, l = /* @__PURE__ */ _e(void 0), s = me({}), u = me({}), d = pe("SMUI:data-table:row:header");
  const f = pe("SMUI:checkbox:mount");
  le("SMUI:checkbox:mount", (R) => {
    X(l, R, !0), f && f(R);
  });
  const v = pe("SMUI:checkbox:unmount");
  le("SMUI:checkbox:unmount", (R) => {
    X(l, void 0), v && v(R);
  });
  const h = pe("SMUI:data-table:row:mount"), g = pe("SMUI:data-table:row:unmount");
  gt(() => {
    const R = d ? {
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
      addAttr: T
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
      addAttr: T
    };
    return h && h(R), () => {
      g && g(R);
    };
  });
  function p(R) {
    s[R] || (s[R] = !0);
  }
  function E(R) {
    (!(R in s) || s[R]) && (s[R] = !1);
  }
  function y(R) {
    return R in u ? u[R] ?? null : S().getAttribute(R);
  }
  function T(R, F) {
    u[R] !== F && (u[R] = F);
  }
  function w(R) {
    rt(S(), "SMUIDataTableHeaderClick", R);
  }
  function _(R) {
    rt(S(), "SMUIDataTableRowClick", { rowId: i(), target: R.target });
  }
  function S() {
    return o;
  }
  var m = { getElement: S }, I = Fg(), C = (R) => {
    var F;
    d ? w(R) : _(R), (F = t.onclick) == null || F.call(t, R);
  };
  We(
    I,
    (R) => ({
      class: R,
      "aria-selected": c(l) ? c(l).checked ? "true" : "false" : void 0,
      ...u,
      ...a,
      onclick: C
    }),
    [
      () => Ve({
        "mdc-data-table__header-row": d,
        "mdc-data-table__row": !d,
        "mdc-data-table__row--selected": !d && c(l) && c(l).checked,
        ...s,
        [r()]: !0
      })
    ]
  );
  var O = ce(I);
  return oe(O, () => t.children ?? $), Ee(I, (R) => o = R, () => o), Xe(I, (R, F) => q == null ? void 0 : q(R, F), n), x(e, I), Te(m);
}
let Ng = 0;
var kg = /* @__PURE__ */ Q('<div class="mdc-data-table__header-cell-wrapper"><!> <div class="mdc-data-table__sort-status-label" aria-hidden="true"> </div></div>'), Gg = /* @__PURE__ */ Q("<th><!></th>"), jg = /* @__PURE__ */ Q("<td><!></td>");
function ki(e, t) {
  Le(t, !0);
  const n = () => Cn(y, "$sort", i), r = () => Cn(T, "$sortDirection", i), [i, a] = Kn();
  let o = pe("SMUI:data-table:row:header"), l = b(t, "use", 19, () => []), s = b(t, "class", 3, ""), u = b(t, "numeric", 3, !1), d = b(t, "checkbox", 3, !1), f = b(t, "columnId", 19, () => o ? "SMUI-data-table-column-" + Ng++ : "SMUI-data-table-unused"), v = b(t, "sortable", 19, () => pe("SMUI:data-table:sortable")), h = /* @__PURE__ */ qe(t, [
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
  ]), g, p = me({}), E = me({}), y = pe("SMUI:data-table:sort"), T = pe("SMUI:data-table:sortDirection"), w = pe("SMUI:data-table:sortAscendingAriaLabel"), _ = pe("SMUI:data-table:sortDescendingAriaLabel");
  v() && (le("SMUI:label:context", "data-table:sortable-header-cell"), le("SMUI:icon-button:context", "data-table:sortable-header-cell"), le("SMUI:icon-button:aria-describedby", f() + "-status-label"));
  const S = pe("SMUI:data-table:cell:mount"), m = pe("SMUI:data-table:cell:unmount");
  gt(() => {
    const P = o ? {
      _smui_data_table_header_cell_accessor: !0,
      get element() {
        return ee();
      },
      get columnId() {
        return f();
      },
      addClass: I,
      removeClass: C,
      getAttr: O,
      addAttr: R
    } : {
      _smui_data_table_header_cell_accessor: !1,
      get element() {
        return ee();
      },
      get columnId() {
      },
      addClass: I,
      removeClass: C,
      getAttr: O,
      addAttr: R
    };
    return S && S(P), () => {
      m && m(P);
    };
  });
  function I(P) {
    p[P] || (p[P] = !0);
  }
  function C(P) {
    (!(P in p) || p[P]) && (p[P] = !1);
  }
  function O(P) {
    return P in E ? E[P] ?? null : ee().getAttribute(P);
  }
  function R(P, A) {
    E[P] !== A && (E[P] = A);
  }
  function F(P) {
    rt(ee(), "SMUIDataTableHeaderCheckboxChange", P);
  }
  function z(P) {
    rt(ee(), "SMUIDataTableBodyCheckboxChange", P);
  }
  function ee() {
    return g;
  }
  var be = { getElement: ee }, H = Z(), M = j(H);
  {
    var D = (P) => {
      var A = Gg(), V = (Y) => {
        var J;
        d() && F(Y), (J = t.onchange) == null || J.call(t, Y);
      };
      We(
        A,
        (Y) => ({
          class: Y,
          role: "columnheader",
          scope: "col",
          "data-column-id": f(),
          "aria-sort": v() ? n() === f() ? r() : "none" : void 0,
          ...E,
          ...h,
          onchange: V
        }),
        [
          () => Ve({
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
      var ue = ce(A);
      {
        var de = (Y) => {
          var J = kg(), fe = ce(J);
          oe(fe, () => t.children ?? $);
          var ye = ie(fe, 2), De = ce(ye);
          Ae(() => {
            qn(ye, "id", `${f() ?? ""}-status-label`), nt(De, n() === f() ? r() === "ascending" ? w : _ : "");
          }), x(Y, J);
        }, ae = (Y) => {
          var J = Z(), fe = j(J);
          oe(fe, () => t.children ?? $), x(Y, J);
        };
        re(ue, (Y) => {
          v() ? Y(de) : Y(ae, !1);
        });
      }
      Ee(A, (Y) => g = Y, () => g), Xe(A, (Y, J) => q == null ? void 0 : q(Y, J), l), x(P, A);
    }, k = (P) => {
      var A = jg(), V = (de) => {
        var ae;
        d() && z(de), (ae = t.onchange) == null || ae.call(t, de);
      };
      We(
        A,
        (de) => ({
          class: de,
          ...E,
          ...h,
          onchange: V
        }),
        [
          () => Ve({
            "mdc-data-table__cell": !0,
            "mdc-data-table__cell--numeric": u(),
            "mdc-data-table__cell--checkbox": d(),
            ...p,
            [s()]: !0
          })
        ]
      );
      var ue = ce(A);
      oe(ue, () => t.children ?? $), Ee(A, (de) => g = de, () => g), Xe(A, (de, ae) => q == null ? void 0 : q(de, ae), l), x(P, A);
    };
    re(M, (P) => {
      o ? P(D) : P(k, !1);
    });
  }
  x(e, H);
  var K = Te(be);
  return a(), K;
}
xn(["click"]);
xn(["click"]);
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
var Gi, Ds = {
  DND_ZONE_ACTIVE: "dnd-zone-active",
  DND_ZONE_DRAG_DISABLED: "dnd-zone-drag-disabled"
};
Gi = {}, uo(Gi, Ds.DND_ZONE_ACTIVE, "Tab to one the items and press space-bar or enter to start dragging it"), uo(Gi, Ds.DND_ZONE_DRAG_DISABLED, "This is a disabled drag and drop list");
const qg = Rt([]);
qg.subscribe;
xn([
  "click",
  "keydown",
  "pointerdown",
  "pointerup",
  "pointermove"
]);
xn(["click"]);
const zg = 4e3;
function Xg() {
  let e = me({ items: [] }), t = 0;
  const n = (i) => {
    e.items = e.items.filter((a) => a.id !== i);
  }, r = (i, a, o, l = zg) => {
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
Xg();
var Wg = /* @__PURE__ */ Q('<div><div class="mdc-linear-progress__buffer"><div class="mdc-linear-progress__buffer-bar"></div> <div class="mdc-linear-progress__buffer-dots"></div></div> <div class="mdc-linear-progress__bar mdc-linear-progress__primary-bar"><span class="mdc-linear-progress__bar-inner"></span></div> <div class="mdc-linear-progress__bar mdc-linear-progress__secondary-bar"><span class="mdc-linear-progress__bar-inner"></span></div></div>');
function Zg(e, t) {
  Le(t, !0);
  const [n, r] = Kn();
  let i = b(t, "use", 19, () => []), a = b(t, "class", 3, ""), o = b(t, "style", 3, ""), l = b(t, "indeterminate", 3, !1), s = b(t, "closed", 3, !1), u = b(t, "progress", 3, 0), d = b(t, "buffer", 3, void 0), f = /* @__PURE__ */ qe(t, [
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
  ]), v, h = /* @__PURE__ */ _e(void 0), g = me({}), p = me({}), E = me({}), y = me({}), T = me({}), w = pe("SMUI:linear-progress:context"), _ = pe("SMUI:linear-progress:closed");
  Me(() => {
    _ && Nn(_, s());
  }), Me(() => {
    c(h) && c(h).isDeterminate() !== !l() && c(h).setDeterminate(!l());
  }), Me(() => {
    c(h) && c(h).getProgress() !== u() && c(h).setProgress(u());
  }), Me(() => {
    c(h) && (d() == null ? c(h).setBuffer(1) : c(h).setBuffer(d()));
  }), Me(() => {
    c(h) && (s() ? c(h).close() : c(h).open());
  }), gt(() => (X(
    h,
    new Lg({
      addClass: m,
      forceLayout: () => {
        ee().getBoundingClientRect();
      },
      setBufferBarStyle: F,
      setPrimaryBarStyle: z,
      hasClass: S,
      removeAttribute: O,
      removeClass: I,
      setAttribute: C,
      setStyle: R,
      attachResizeObserver: (A) => {
        const V = window.ResizeObserver;
        if (V) {
          const ue = new V(A);
          return ue.observe(ee()), ue;
        }
        return null;
      },
      getWidth: () => ee().offsetWidth
    }),
    !0
  ), c(h).init(), () => {
    var A;
    (A = c(h)) == null || A.destroy();
  }));
  function S(A) {
    return A in g ? g[A] : ee().classList.contains(A);
  }
  function m(A) {
    g[A] || (g[A] = !0);
  }
  function I(A) {
    (!(A in g) || g[A]) && (g[A] = !1);
  }
  function C(A, V) {
    p[A] !== V && (p[A] = V);
  }
  function O(A) {
    (!(A in p) || p[A] != null) && (p[A] = void 0);
  }
  function R(A, V) {
    E[A] != V && (V === "" || V == null ? delete E[A] : E[A] = V);
  }
  function F(A, V) {
    y[A] != V && (V === "" || V == null ? delete y[A] : y[A] = V);
  }
  function z(A, V) {
    T[A] != V && (V === "" || V == null ? delete T[A] : T[A] = V);
  }
  function ee() {
    return v;
  }
  var be = { getElement: ee }, H = Wg(), M = (A) => {
    var V;
    c(h) && c(h).handleTransitionEnd(), (V = t.ontransitionend) == null || V.call(t, A);
  };
  We(
    H,
    (A, V) => ({
      class: A,
      style: V,
      role: "progressbar",
      "aria-valuemin": 0,
      "aria-valuemax": 1,
      "aria-valuenow": l() ? void 0 : u(),
      ...p,
      ...f,
      ontransitionend: M
    }),
    [
      () => Ve({
        "mdc-linear-progress": !0,
        "mdc-linear-progress--indeterminate": l(),
        "mdc-linear-progress--closed": s(),
        "mdc-data-table__linear-progress": w === "data-table",
        ...g,
        [a()]: !0
      }),
      () => Object.entries(E).map(([A, V]) => `${A}: ${V};`).concat([o()]).join(" ")
    ]
  );
  var D = ce(H), k = ce(D), K = ie(D, 2);
  Ee(H, (A) => v = A, () => v), Xe(H, (A, V) => q == null ? void 0 : q(A, V), i), Ae(
    (A, V) => {
      Pt(k, A), Pt(K, V);
    },
    [
      () => Object.entries(y).map(([A, V]) => `${A}: ${V};`).join(" "),
      () => Object.entries(T).map(([A, V]) => `${A}: ${V};`).join(" ")
    ]
  ), x(e, H);
  var P = Te(be);
  return r(), P;
}
var Yg = /* @__PURE__ */ qt('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor" class="svelte-1mj71p3"><path d="M12 4l-8 8h16l-8-8z"></path></svg>'), Kg = /* @__PURE__ */ qt('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor" class="svelte-1mj71p3"><path d="M12 20l8-8H4l8 8z"></path></svg>'), Qg = /* @__PURE__ */ Q('<div class="custom-cell-container svelte-1mj71p3"><div class="cell-header svelte-1mj71p3"><span class="header-title svelte-1mj71p3"> </span> <!></div></div>'), Jg = (e, t) => t(), $g = /* @__PURE__ */ Q('<input type="text" class="svelte-1mj71p3"/>'), ep = (e, t) => t(), tp = /* @__PURE__ */ Q('<input type="number" class="svelte-1mj71p3"/>'), np = /* @__PURE__ */ Q("<!> <!>", 1), rp = /* @__PURE__ */ Q("<!> <!>", 1), ip = /* @__PURE__ */ Q('<div class="cell-actions svelte-1mj71p3"></div>'), ap = /* @__PURE__ */ Q("<!> <!>", 1);
function op(e, t) {
  Le(t, !0);
  const n = () => Cn(p, "$sortColumn", a), r = () => Cn(E, "$sortDirection", a), i = () => Cn(g, "$filteredData", a), [a, o] = Kn();
  let l = b(t, "loadingDone", 15, !0), s = b(t, "label", 19, lg), u = b(t, "columnDefs", 19, () => []), d = b(t, "rowData", 31, () => me([])), f = b(t, "rowActions", 19, () => []), v = b(t, "searchInputLabel", 3, "Search"), h = me({ name: "", color: "", number: "" }), g = Rt([]), p = Rt(null), E = Rt(null);
  t.store.store.subscribe((_) => {
    d([..._]), y();
  });
  function y() {
    let _ = d().filter((S) => u().every((m) => {
      const I = h[m.field], C = m.filterValueGetter ? m.filterValueGetter(S) : S[m.field];
      return I ? m.filterType === "number" ? C == I : C.toString().toLowerCase().includes(I.toLowerCase()) : !0;
    }));
    _ = T(_), g.set(_);
  }
  function T(_) {
    let S, m;
    return p.subscribe((I) => S = I), E.subscribe((I) => m = I), !S || !m ? _ : _.sort((I, C) => {
      let O = I[S], R = C[S];
      return O == null && (O = ""), R == null && (R = ""), m === "asc" ? O.toString().localeCompare(R.toString()) : R.toString().localeCompare(O.toString());
    });
  }
  function w(_) {
    p.update((S) => {
      if (S === _)
        E.update((m) => m === "asc" ? "desc" : m === "desc" ? null : "asc");
      else
        return E.set("asc"), _;
      return _;
    }), y();
  }
  g.set(d()), Hg(e, {
    get "table$aria-label"() {
      return s();
    },
    style: "max-width: 100%; width: 100%;",
    progress: (S) => {
      Zg(S, {
        indeterminate: !0,
        "aria-label": "Data is being loaded...",
        get closed() {
          return l();
        },
        set closed(m) {
          l(m);
        }
      });
    },
    children: (S, m) => {
      var I = ap(), C = j(I);
      Pg(C, {
        children: (R, F) => {
          var z = rp(), ee = j(z);
          Ua(ee, {
            class: "header-title-row",
            children: (H, M) => {
              var D = Z(), k = j(D);
              ii(k, 17, u, Di, (K, P) => {
                ki(K, {
                  onclick: () => c(P).sortable && w(c(P).field),
                  get style() {
                    return c(P).headerStyle;
                  },
                  children: (A, V) => {
                    var ue = Qg(), de = ce(ue), ae = ce(de), Y = ce(ae), J = ie(ae, 2);
                    {
                      var fe = (ye) => {
                        var De = Z(), te = j(De);
                        {
                          var Se = (he) => {
                            var Ie = Z(), Be = j(Ie);
                            {
                              var Ce = (Ye) => {
                                var L = Yg();
                                x(Ye, L);
                              }, ke = (Ye) => {
                                var L = Z(), B = j(L);
                                {
                                  var se = (Ge) => {
                                    var Ut = Kg();
                                    x(Ge, Ut);
                                  };
                                  re(
                                    B,
                                    (Ge) => {
                                      r() === "desc" && Ge(se);
                                    },
                                    !0
                                  );
                                }
                                x(Ye, L);
                              };
                              re(Be, (Ye) => {
                                r() === "asc" ? Ye(Ce) : Ye(ke, !1);
                              });
                            }
                            x(he, Ie);
                          };
                          re(te, (he) => {
                            n() === c(P).field && r() !== null && he(Se);
                          });
                        }
                        x(ye, De);
                      };
                      re(J, (ye) => {
                        c(P).sortable && ye(fe);
                      });
                    }
                    Ae(() => {
                      Pt(ue, `min-width: ${c(P).minWidth ?? 0 ?? ""}`), nt(Y, c(P).headerName);
                    }), x(A, ue);
                  },
                  $$slots: { default: !0 }
                });
              }), x(H, D);
            },
            $$slots: { default: !0 }
          });
          var be = ie(ee, 2);
          Ua(be, {
            class: "header-filter-row",
            children: (H, M) => {
              var D = Z(), k = j(D);
              ii(k, 17, u, Di, (K, P) => {
                ki(K, {
                  children: (A, V) => {
                    var ue = Z(), de = j(ue);
                    {
                      var ae = (Y) => {
                        var J = np(), fe = j(J);
                        {
                          var ye = (Se) => {
                            var he = $g();
                            he.__input = [Jg, y], Ae(() => qn(he, "placeholder", `${v()} ${c(P).headerName}`)), Qa(he, () => h[c(P).field], (Ie) => h[c(P).field] = Ie), x(Se, he);
                          };
                          re(fe, (Se) => {
                            c(P).filterType === "text" && Se(ye);
                          });
                        }
                        var De = ie(fe, 2);
                        {
                          var te = (Se) => {
                            var he = tp();
                            he.__input = [ep, y], Ae(() => qn(he, "placeholder", `${v()} ${c(P).headerName}`)), Qa(he, () => h[c(P).field], (Ie) => h[c(P).field] = Ie), x(Se, he);
                          };
                          re(De, (Se) => {
                            c(P).filterType === "number" && Se(te);
                          });
                        }
                        x(Y, J);
                      };
                      re(de, (Y) => {
                        c(P).filter && Y(ae);
                      });
                    }
                    x(A, ue);
                  },
                  $$slots: { default: !0 }
                });
              }), x(H, D);
            },
            $$slots: { default: !0 }
          }), x(R, z);
        },
        $$slots: { default: !0 }
      });
      var O = ie(C, 2);
      Bg(O, {
        children: (R, F) => {
          var z = Z(), ee = j(z);
          ii(ee, 1, i, Di, (be, H) => {
            Ua(be, {
              children: (M, D) => {
                var k = Z(), K = j(k);
                ii(K, 17, u, (P) => P.field, (P, A) => {
                  var V = Z(), ue = j(V);
                  {
                    var de = (Y) => {
                      ki(Y, {
                        children: (J, fe) => {
                          var ye = ip();
                          ii(ye, 21, f, Di, (De, te) => {
                            var Se = Z(), he = j(Se);
                            {
                              var Ie = (Ce) => {
                                Rs(Ce, {
                                  get content() {
                                    return c(te).tooltip;
                                  },
                                  hoverDelay: 500,
                                  children: (ke, Ye) => {
                                    {
                                      let L = /* @__PURE__ */ ge(() => c(te).disabled(c(H)));
                                      lv(ke, {
                                        get iconComponent() {
                                          return c(te).iconComponent;
                                        },
                                        get iconStyles() {
                                          return c(te).iconStyles;
                                        },
                                        callback: () => c(te).callback(c(H)),
                                        get disabled() {
                                          return c(L);
                                        }
                                      });
                                    }
                                  },
                                  $$slots: { default: !0 }
                                });
                              }, Be = (Ce) => {
                                Rs(Ce, {
                                  get content() {
                                    return c(te).tooltip;
                                  },
                                  hoverDelay: 500,
                                  children: (ke, Ye) => {
                                    {
                                      let L = /* @__PURE__ */ ge(() => c(te).disabled(c(H)));
                                      ir(ke, {
                                        class: "button",
                                        variant: "raised",
                                        callback: () => c(te).callback(c(H)),
                                        get disabled() {
                                          return c(L);
                                        },
                                        children: (B, se) => {
                                          var Ge = Z(), Ut = j(Ge);
                                          {
                                            var Ln = (on) => {
                                              du(on, { svgStyles: "margin: unset" });
                                            }, Jn = (on) => {
                                              var G = Z(), U = j(G);
                                              {
                                                var W = (Je) => {
                                                  lo(Je, { svgStyles: "margin: unset" });
                                                }, Ke = (Je) => {
                                                  var at = Z(), mt = j(at);
                                                  {
                                                    var Qt = (je) => {
                                                      hg(je, { svgStyles: "margin: unset" });
                                                    }, Ir = (je) => {
                                                      var ct = Z(), Ft = j(ct);
                                                      {
                                                        var Tn = (On) => {
                                                          gg(On, { svgStyles: "margin: unset" });
                                                        }, _a = (On) => {
                                                          var Oe = Z(), Ze = j(Oe);
                                                          {
                                                            var et = (bt) => {
                                                              _g(bt, { svgStyles: "margin: unset" });
                                                            }, xt = (bt) => {
                                                              var $e = Z(), ot = j($e);
                                                              {
                                                                var dt = (tt) => {
                                                                  Eg(tt, { svgStyles: "margin: unset" });
                                                                }, Ue = (tt) => {
                                                                  var pn = Z(), zt = j(pn);
                                                                  {
                                                                    var st = (yt) => {
                                                                      Cg(yt, { svgStyles: "margin: unset" });
                                                                    }, _t = (yt) => {
                                                                      fu(yt, { svgStyles: "margin: unset" });
                                                                    };
                                                                    re(
                                                                      zt,
                                                                      (yt) => {
                                                                        c(te).icon === "delete" ? yt(st) : yt(_t, !1);
                                                                      },
                                                                      !0
                                                                    );
                                                                  }
                                                                  x(tt, pn);
                                                                };
                                                                re(
                                                                  ot,
                                                                  (tt) => {
                                                                    c(te).icon === "edit" ? tt(dt) : tt(Ue, !1);
                                                                  },
                                                                  !0
                                                                );
                                                              }
                                                              x(bt, $e);
                                                            };
                                                            re(
                                                              Ze,
                                                              (bt) => {
                                                                c(te).icon === "remove" ? bt(et) : bt(xt, !1);
                                                              },
                                                              !0
                                                            );
                                                          }
                                                          x(On, Oe);
                                                        };
                                                        re(
                                                          Ft,
                                                          (On) => {
                                                            c(te).icon === "find-in-page" ? On(Tn) : On(_a, !1);
                                                          },
                                                          !0
                                                        );
                                                      }
                                                      x(je, ct);
                                                    };
                                                    re(
                                                      mt,
                                                      (je) => {
                                                        c(te).icon === "download" ? je(Qt) : je(Ir, !1);
                                                      },
                                                      !0
                                                    );
                                                  }
                                                  x(Je, at);
                                                };
                                                re(
                                                  U,
                                                  (Je) => {
                                                    c(te).icon === "cancel" ? Je(W) : Je(Ke, !1);
                                                  },
                                                  !0
                                                );
                                              }
                                              x(on, G);
                                            };
                                            re(Ut, (on) => {
                                              c(te).icon === "add" ? on(Ln) : on(Jn, !1);
                                            });
                                          }
                                          x(B, Ge);
                                        },
                                        $$slots: { default: !0 }
                                      });
                                    }
                                  },
                                  $$slots: { default: !0 }
                                });
                              };
                              re(he, (Ce) => {
                                c(te).iconComponent ? Ce(Ie) : Ce(Be, !1);
                              });
                            }
                            x(De, Se);
                          }), x(J, ye);
                        },
                        $$slots: { default: !0 }
                      });
                    }, ae = (Y) => {
                      ki(Y, {
                        get numeric() {
                          return c(A).numeric;
                        },
                        get style() {
                          return c(A).cellStyle;
                        },
                        children: (J, fe) => {
                          var ye = Z(), De = j(ye);
                          {
                            var te = (he) => {
                              const Ie = /* @__PURE__ */ ge(() => c(A).cellRenderer);
                              var Be = Z(), Ce = j(Be);
                              Jr(Ce, () => c(Ie), (ke, Ye) => {
                                Ye(ke, ut(
                                  {
                                    get row() {
                                      return c(H);
                                    },
                                    get value() {
                                      return c(H)[c(A).field];
                                    },
                                    get col() {
                                      return c(A);
                                    }
                                  },
                                  () => c(A).cellRendererProps ?? {}
                                ));
                              }), x(he, Be);
                            }, Se = (he) => {
                              var Ie = Z(), Be = j(Ie);
                              {
                                var Ce = (Ye) => {
                                  var L = Ct();
                                  Ae((B) => nt(L, B), [
                                    () => c(A).valueFormatter(c(H)[c(A).field])
                                  ]), x(Ye, L);
                                }, ke = (Ye) => {
                                  var L = Ct();
                                  Ae(() => nt(L, c(H)[c(A).field] ?? "")), x(Ye, L);
                                };
                                re(
                                  Be,
                                  (Ye) => {
                                    c(A).valueFormatter ? Ye(Ce) : Ye(ke, !1);
                                  },
                                  !0
                                );
                              }
                              x(he, Ie);
                            };
                            re(De, (he) => {
                              c(A).cellRenderer ? he(te) : he(Se, !1);
                            });
                          }
                          x(J, ye);
                        },
                        $$slots: { default: !0 }
                      });
                    };
                    re(ue, (Y) => {
                      c(A).field === "actions" ? Y(de) : Y(ae, !1);
                    });
                  }
                  x(P, V);
                }), x(M, k);
              },
              $$slots: { default: !0 }
            });
          }), x(R, z);
        },
        $$slots: { default: !0 }
      }), x(S, I);
    },
    $$slots: { progress: !0, default: !0 }
  }), Te(), o();
}
xn(["input"]);
var sp = /* @__PURE__ */ Q("<div><!></div>");
function lp(e, t) {
  Le(t, !0);
  let n = b(t, "use", 19, () => []), r = b(t, "class", 3, ""), i = b(t, "variant", 3, "raised"), a = b(t, "padded", 3, !1), o = /* @__PURE__ */ qe(t, [
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
  var u = { getElement: s }, d = sp();
  We(d, (v) => ({ class: v, ...o }), [
    () => Ve({
      "mdc-card": !0,
      "mdc-card--outlined": i() === "outlined",
      "smui-card--padded": a(),
      [r()]: !0
    })
  ]);
  var f = ce(d);
  return oe(f, () => t.children ?? $), Ee(d, (v) => l = v, () => l), Xe(d, (v, h) => q == null ? void 0 : q(v, h), n), x(e, d), Te(u);
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
          a = p instanceof Fa ? p.errors : [p];
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
              a = a ?? [], p instanceof Fa ? a = Hr(Hr([], eo(a)), eo(p.errors)) : a.push(p);
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
  return e instanceof Do || e && "closed" in e && it(e.remove) && it(e.add) && it(e.unsubscribe);
}
function Ms(e) {
  it(e) ? e() : e.unsubscribe();
}
var up = {
  Promise: void 0
}, cp = {
  setTimeout: function(e, t) {
    for (var n = [], r = 2; r < arguments.length; r++)
      n[r - 2] = arguments[r];
    return setTimeout.apply(void 0, Hr([e, t], eo(n)));
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
  pt(t, e);
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
        ji(r);
      }
  }, e.prototype.error = function(t) {
    var n = this.partialObserver;
    if (n.error)
      try {
        n.error(t);
      } catch (r) {
        ji(r);
      }
    else
      ji(t);
  }, e.prototype.complete = function() {
    var t = this.partialObserver;
    if (t.complete)
      try {
        t.complete();
      } catch (n) {
        ji(n);
      }
  }, e;
}(), co = function(e) {
  pt(t, e);
  function t(n, r, i) {
    var a = e.call(this) || this, o;
    return it(n) || !n ? o = {
      next: n ?? void 0,
      error: r ?? void 0,
      complete: i ?? void 0
    } : o = n, a.destination = new fp(o), a;
  }
  return t;
}(Po);
function ji(e) {
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
var an = function() {
  function e(t) {
    t && (this._subscribe = t);
  }
  return e.prototype.lift = function(t) {
    var n = new e();
    return n.source = this, n.operator = t, n;
  }, e.prototype.subscribe = function(t, n, r) {
    var i = this, a = mp(t) ? t : new co(t, n, r);
    return dp(function() {
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
      var o = new co({
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
  return e && it(e.next) && it(e.error) && it(e.complete);
}
function mp(e) {
  return e && e instanceof Po || pp(e) && vu(e);
}
function bp(e) {
  return it(e == null ? void 0 : e.lift);
}
function Cr(e) {
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
function Yr(e, t, n, r, i) {
  return new _p(e, t, n, r, i);
}
var _p = function(e) {
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
}(Po), yp = new an(function(e) {
  return e.complete();
});
function Ep(e) {
  return e && it(e.schedule);
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
  return it(e == null ? void 0 : e.then);
}
function _u(e) {
  return it(e[Mo]);
}
function yu(e) {
  return Symbol.asyncIterator && it(e == null ? void 0 : e[Symbol.asyncIterator]);
}
function Eu(e) {
  return new TypeError("You provided " + (e !== null && typeof e == "object" ? "an invalid object" : "'" + e + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
}
function Ap() {
  return typeof Symbol != "function" || !Symbol.iterator ? "@@iterator" : Symbol.iterator;
}
var Su = Ap();
function Cu(e) {
  return it(e == null ? void 0 : e[Su]);
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
          return [4, Dr(n.read())];
        case 3:
          return r = o.sent(), i = r.value, a = r.done, a ? [4, Dr(void 0)] : [3, 5];
        case 4:
          return [2, o.sent()];
        case 5:
          return [4, Dr(i)];
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
function Ti(e) {
  if (e instanceof an)
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
  return new an(function(t) {
    var n = e[Mo]();
    if (it(n.subscribe))
      return n.subscribe(t);
    throw new TypeError("Provided object does not correctly implement Symbol.observable");
  });
}
function xp(e) {
  return new an(function(t) {
    for (var n = 0; n < e.length && !t.closed; n++)
      t.next(e[n]);
    t.complete();
  });
}
function wp(e) {
  return new an(function(t) {
    e.then(function(n) {
      t.closed || (t.next(n), t.complete());
    }, function(n) {
      return t.error(n);
    }).then(null, gu);
  });
}
function Lp(e) {
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
    var o, l;
    return To(this, function(s) {
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
function hr(e, t, n, r, i) {
  r === void 0 && (r = 0), i === void 0 && (i = !1);
  var a = t.schedule(function() {
    n(), i ? e.add(this.schedule(null, r)) : this.unsubscribe();
  }, r);
  if (e.add(a), !i)
    return a;
}
function wu(e, t) {
  return t === void 0 && (t = 0), Cr(function(n, r) {
    n.subscribe(Yr(r, function(i) {
      return hr(r, e, function() {
        return r.next(i);
      }, t);
    }, function() {
      return hr(r, e, function() {
        return r.complete();
      }, t);
    }, function(i) {
      return hr(r, e, function() {
        return r.error(i);
      }, t);
    }));
  });
}
function Lu(e, t) {
  return t === void 0 && (t = 0), Cr(function(n, r) {
    r.add(e.schedule(function() {
      return n.subscribe(r);
    }, t));
  });
}
function Rp(e, t) {
  return Ti(e).pipe(Lu(t), wu(t));
}
function Hp(e, t) {
  return Ti(e).pipe(Lu(t), wu(t));
}
function Dp(e, t) {
  return new an(function(n) {
    var r = 0;
    return t.schedule(function() {
      r === e.length ? n.complete() : (n.next(e[r++]), n.closed || this.schedule());
    });
  });
}
function Pp(e, t) {
  return new an(function(n) {
    var r;
    return hr(n, t, function() {
      r = e[Su](), hr(n, t, function() {
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
    hr(n, t, function() {
      var r = e[Symbol.asyncIterator]();
      hr(n, t, function() {
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
  return t ? Bp(e, t) : Ti(e);
}
function Fp() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t];
  var n = Cp(e);
  return Up(e, n);
}
function fn(e, t) {
  return Cr(function(n, r) {
    var i = 0;
    n.subscribe(Yr(r, function(a) {
      r.next(e.call(t, a, i++));
    }));
  });
}
function Np(e, t, n, r, i, a, o, l) {
  var s = [], u = 0, d = 0, f = !1, v = function() {
    f && !s.length && !u && t.complete();
  }, h = function(p) {
    return u < r ? g(p) : s.push(p);
  }, g = function(p) {
    u++;
    var E = !1;
    Ti(n(p, d++)).subscribe(Yr(t, function(y) {
      t.next(y);
    }, function() {
      E = !0;
    }, void 0, function() {
      if (E)
        try {
          u--;
          for (var y = function() {
            var T = s.shift();
            o || g(T);
          }; s.length && u < r; )
            y();
          v();
        } catch (T) {
          t.error(T);
        }
    }));
  };
  return e.subscribe(Yr(t, h, function() {
    f = !0, v();
  })), function() {
  };
}
function fo(e, t, n) {
  return n === void 0 && (n = 1 / 0), it(t) ? fo(function(r, i) {
    return fn(function(a, o) {
      return t(r, a, i, o);
    })(Ti(e(r, i)));
  }, n) : (typeof t == "number" && (n = t), Cr(function(r, i) {
    return Np(r, i, e, n);
  }));
}
function kp(e, t) {
  return it(t) ? fo(e, t, 1) : fo(e, 1);
}
function Fs(e) {
  return e <= 0 ? function() {
    return yp;
  } : Cr(function(t, n) {
    var r = 0;
    t.subscribe(Yr(n, function(i) {
      ++r <= e && (n.next(i), e <= r && n.complete());
    }));
  });
}
function Ns(e) {
  return Cr(function(t, n) {
    try {
      t.subscribe(n);
    } finally {
      n.add(e);
    }
  });
}
function ks(e, t, n) {
  var r = it(e) || t || n ? { next: e, error: t, complete: n } : e;
  return r ? Cr(function(i, a) {
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
var Gp = /* @__PURE__ */ function() {
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
}(), ia = hu(function(e) {
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
    return ia.call(this, "ajax timeout", t, n), this.name = "AjaxTimeoutError", this;
  }
  return e.prototype = Object.create(ia.prototype), e;
}();
function Vp(e, t) {
  return Ar({ method: "GET", url: e, headers: t });
}
function qp(e, t, n) {
  return Ar({ method: "POST", url: e, body: t, headers: n });
}
function zp(e, t) {
  return Ar({ method: "DELETE", url: e, headers: t });
}
function Xp(e, t, n) {
  return Ar({ method: "PUT", url: e, body: t, headers: n });
}
function Wp(e, t, n) {
  return Ar({ method: "PATCH", url: e, body: t, headers: n });
}
var Zp = fn(function(e) {
  return e.response;
});
function Yp(e, t) {
  return Zp(Ar({
    method: "GET",
    url: e,
    headers: t
  }));
}
var Ar = function() {
  var e = function(t) {
    var n = typeof t == "string" ? {
      url: t
    } : t;
    return Qp(n);
  };
  return e.get = Vp, e.post = qp, e.delete = zp, e.put = Xp, e.patch = Wp, e.getJSON = Yp, e;
}(), Kp = "upload", Gs = "download", Na = "loadstart", ka = "progress", js = "load";
function Qp(e) {
  return new an(function(t) {
    var n, r, i = ne({ async: !0, crossDomain: !1, withCredentials: !1, method: "GET", timeout: 0, responseType: "json" }, e), a = i.queryParams, o = i.body, l = i.headers, s = i.url;
    if (!s)
      throw new TypeError("url is required");
    if (a) {
      var u;
      if (s.includes("?")) {
        var d = s.split("?");
        if (2 < d.length)
          throw new TypeError("invalid url");
        u = new URLSearchParams(d[1]), new URLSearchParams(a).forEach(function(D, k) {
          return u.set(k, D);
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
    var T = Jp(o, f), w = ne(ne({}, i), {
      url: s,
      headers: f,
      body: T
    }), _;
    _ = e.createXHR ? e.createXHR() : new XMLHttpRequest();
    {
      var S = e.progressSubscriber, m = e.includeDownloadProgress, I = m === void 0 ? !1 : m, C = e.includeUploadProgress, O = C === void 0 ? !1 : C, R = function(D, k) {
        _.addEventListener(D, function() {
          var K, P = k();
          (K = S == null ? void 0 : S.error) === null || K === void 0 || K.call(S, P), t.error(P);
        });
      };
      R("timeout", function() {
        return new jp(_, w);
      }), R("abort", function() {
        return new ia("aborted", _, w);
      });
      var F = function(D, k) {
        return new Gp(k, _, w, D + "_" + k.type);
      }, z = function(D, k, K) {
        D.addEventListener(k, function(P) {
          t.next(F(K, P));
        });
      };
      O && [Na, ka, js].forEach(function(D) {
        return z(_.upload, D, Kp);
      }), S && [Na, ka].forEach(function(D) {
        return _.upload.addEventListener(D, function(k) {
          var K;
          return (K = S == null ? void 0 : S.next) === null || K === void 0 ? void 0 : K.call(S, k);
        });
      }), I && [Na, ka].forEach(function(D) {
        return z(_, D, Gs);
      });
      var ee = function(D) {
        var k = "ajax error" + (D ? " " + D : "");
        t.error(new ia(k, _, w));
      };
      _.addEventListener("error", function(D) {
        var k;
        (k = S == null ? void 0 : S.error) === null || k === void 0 || k.call(S, D), ee();
      }), _.addEventListener(js, function(D) {
        var k, K, P = _.status;
        if (P < 400) {
          (k = S == null ? void 0 : S.complete) === null || k === void 0 || k.call(S);
          var A = void 0;
          try {
            A = F(Gs, D);
          } catch (V) {
            t.error(V);
            return;
          }
          t.next(A), t.complete();
        } else
          (K = S == null ? void 0 : S.error) === null || K === void 0 || K.call(S, D), ee(P);
      });
    }
    var be = w.user, H = w.method, M = w.async;
    be ? _.open(H, s, M, be, w.password) : _.open(H, s, M), M && (_.timeout = w.timeout, _.responseType = w.responseType), "withCredentials" in _ && (_.withCredentials = w.withCredentials);
    for (var v in f)
      f.hasOwnProperty(v) && _.setRequestHeader(v, f[v]);
    return T ? _.send(T) : _.send(), function() {
      _ && _.readyState !== 4 && _.abort();
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
    }, this.withPreMiddleware = (n) => this.withMiddleware(n.map((r) => ({ pre: r }))), this.withPostMiddleware = (n) => this.withMiddleware(n.map((r) => ({ post: r }))), this.createRequestArgs = ({ url: n, query: r, method: i, headers: a, body: o, responseType: l }) => ({
      url: `${this.configuration.basePath}${n}${r && Object.keys(r).length ? `?${fm(r)}` : ""}`,
      method: i,
      headers: a,
      body: o instanceof FormData ? o : JSON.stringify(o),
      responseType: l ?? "json"
    }), this.rxjsRequest = (n) => Fp(n).pipe(
      fn((r) => (this.middleware.filter((i) => i.pre).forEach((i) => r = i.pre(r)), r)),
      kp(
        (r) => Ar(r).pipe(
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
const tn = (e) => encodeURIComponent(`${e}`), fm = (e) => Object.entries(e).map(
  ([t, n]) => n instanceof Array ? n.map((r) => `${tn(t)}=${tn(r)}`).join("&") : `${tn(t)}=${tn(n)}`
).join("&"), _n = (e, t, n) => {
  if (e == null)
    throw new Error(`Parameter "${t}" was null or undefined when calling "${n}".`);
};
class hm extends dm {
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
class vi {
  constructor(t, n, r, i, a) {
    this.uuid = a, this.key = t, this.name = n, this.description = r, this.assignedResources = i;
  }
  static from(t) {
    return new vi(t.key, t.name, t.description, t.assignedResources, t.uuid);
  }
}
class Or {
  constructor() {
    this.endpoint = "/compas-scl-data-service", this.locationsApiClient = this.createApiClient(this.endpoint);
  }
  static getInstance() {
    return Or.instance || (Or.instance = new Or()), Or.instance;
  }
  getLocations(t) {
    return this.locationsApiClient.getLocations({
      page: t == null ? void 0 : t.page,
      pageSize: t == null ? void 0 : t.pageSize
    }).pipe(
      fn((n) => n || []),
      fn((n) => n.map((r) => vi.from(r)))
    );
  }
  createLocation(t) {
    return this.locationsApiClient.createLocation({ location: t }).pipe(
      fn((n) => vi.from(n))
    );
  }
  deleteLocation(t) {
    return this.locationsApiClient.deleteLocation({ locationId: t }).pipe(fn(() => {
    }));
  }
  updateLocation(t) {
    return this.locationsApiClient.updateLocation({ locationId: t.locationId, location: t.location }).pipe(
      fn((n) => vi.from(n))
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
var En;
class vm {
  constructor() {
    Pe(this, En, Rt([]));
  }
  get store() {
    return N(this, En);
  }
  set(t) {
    N(this, En).set(t);
  }
  update(t) {
    N(this, En).update((n) => n.map((r) => r.uuid === t.uuid ? t : r));
  }
  add(t) {
    N(this, En).update((n) => [...n, t]);
  }
  remove(t) {
    N(this, En).update((n) => n.filter((r) => r.uuid !== t));
  }
  findById(t) {
    return Bl(N(this, En)).find((n) => n.uuid === t);
  }
}
En = new WeakMap();
oh({ en: Fh, de: Sh });
var gm = /* @__PURE__ */ Q("<h3> </h3>"), pm = /* @__PURE__ */ Q("<!> <!>", 1), mm = /* @__PURE__ */ Q("<!> <!>", 1), bm = /* @__PURE__ */ Q("<div><!> <!></div>"), _m = /* @__PURE__ */ Q("<h3> </h3>"), ym = /* @__PURE__ */ Q("<!> <!> <!> <!>", 1), Em = /* @__PURE__ */ Q("<div><!></div>"), Sm = /* @__PURE__ */ Q("<!> <!>", 1), Cm = /* @__PURE__ */ Q("<!> <!>", 1), Am = /* @__PURE__ */ Q("<div><!> <!></div>"), Im = /* @__PURE__ */ Q("<!> <!>", 1), xm = /* @__PURE__ */ Q("<!> <!>", 1), wm = /* @__PURE__ */ Q('<h3 style="margin-bottom: 1rem;"> </h3> <!>', 1), Lm = /* @__PURE__ */ Q('<div class="location-manager-container"><!> <!> <!> <div style="margin-top: 10px; margin-bottom: 10px"><!> <!></div> <div class="table-container"><!></div></div>');
function Tm(e, t) {
  Le(t, !0);
  const n = () => Cn(ah, "$_", r), [r, i] = Kn(), a = Or.getInstance(), o = new vm(), l = {
    Closed: "closed",
    Update: "update",
    Create: "create",
    Remove: "remove"
  };
  let s = /* @__PURE__ */ _e(!1), u = /* @__PURE__ */ _e(me(l.Closed)), d = /* @__PURE__ */ _e(!1), f = /* @__PURE__ */ _e(me(v()));
  function v() {
    return {
      uuid: void 0,
      key: "",
      name: "",
      description: "",
      assignedResources: void 0
    };
  }
  let h = /* @__PURE__ */ ge(() => [
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
  ]), g = /* @__PURE__ */ _e(!0);
  gt(() => {
    setTimeout(
      () => {
        X(g, !1);
      },
      1e3
    );
  });
  const p = [
    {
      icon: "edit",
      callback: (F) => E(F),
      disabled: () => !1
    },
    {
      icon: "delete",
      callback: (F) => T(F),
      disabled: () => !1
    }
  ];
  function E(F) {
    X(f, { ...F }, !0), X(d, !0), X(u, l.Update, !0);
  }
  function y() {
    X(f, { ...v() }, !0), X(d, !0), X(u, l.Create, !0);
  }
  function T(F) {
    X(f, { ...F }, !0), X(d, !0), X(u, l.Remove, !0);
  }
  function w() {
    var F;
    try {
      const z = ((F = c(f)) == null ? void 0 : F.uuid) !== void 0 && c(f).uuid !== "";
      (z ? a.updateLocation({
        locationId: c(f).uuid,
        location: c(f)
      }) : a.createLocation(c(f))).pipe(
        Fs(1),
        ks((be) => {
          z ? o.update(be) : o.add(be);
        }),
        Ns(S)
      ).subscribe();
    } catch (z) {
      console.error("Error saving location", z);
    }
  }
  function _() {
    a.deleteLocation(c(f).uuid).subscribe({
      next: () => {
        o.remove(c(f).uuid), S();
      }
    });
  }
  function S() {
    X(u, l.Closed, !0), X(d, !1), X(f, { ...v() }, !0);
  }
  function m() {
    X(s, !1), a.getLocations().pipe(
      Fs(1),
      ks((F) => {
        o.set(F);
      }),
      Ns(() => {
        X(s, !0);
      })
    ).subscribe();
  }
  gt(() => {
    m();
  });
  var I = Z(), C = j(I);
  {
    var O = (F) => {
      {
        let z = /* @__PURE__ */ ge(() => !c(g));
        Os(F, {
          get loadingDone() {
            return c(z);
          }
        });
      }
    }, R = (F) => {
      var z = Lm(), ee = ce(z);
      Os(ee, {
        get loadingDone() {
          return c(s);
        }
      });
      var be = ie(ee, 2);
      {
        const A = (de) => {
          var ae = gm(), Y = ce(ae);
          Ae((J) => nt(Y, J), [
            () => {
              var J;
              return n()("delete_location", { values: { name: (J = c(f)) == null ? void 0 : J.name } });
            }
          ]), x(de, ae);
        }, V = (de) => {
          var ae = bm(), Y = ce(ae);
          ir(Y, {
            callback: _,
            variant: "raised",
            children: (fe, ye) => {
              var De = pm(), te = j(De);
              Ts(te, {});
              var Se = ie(te, 2);
              tr(Se, {
                children: (he, Ie) => {
                  var Be = Ct();
                  Ae((Ce) => nt(Be, Ce), [() => n()("confirm")]), x(he, Be);
                },
                $$slots: { default: !0 }
              }), x(fe, De);
            },
            $$slots: { default: !0 }
          });
          var J = ie(Y, 2);
          ir(J, {
            callback: S,
            variant: "raised",
            isAbortAction: !0,
            children: (fe, ye) => {
              var De = mm(), te = j(De);
              lo(te, {});
              var Se = ie(te, 2);
              tr(Se, {
                children: (he, Ie) => {
                  var Be = Ct();
                  Ae((Ce) => nt(Be, Ce), [() => n()("cancel")]), x(he, Be);
                },
                $$slots: { default: !0 }
              }), x(fe, De);
            },
            $$slots: { default: !0 }
          }), x(de, ae);
        };
        let ue = /* @__PURE__ */ ge(() => c(u) === l.Remove);
        ws(be, {
          get open() {
            return c(ue);
          },
          onClose: S,
          title: A,
          actions: V,
          $$slots: { title: !0, actions: !0 }
        });
      }
      var H = ie(be, 2);
      {
        const A = (ae) => {
          var Y = _m(), J = ce(Y);
          Ae((fe) => nt(J, fe), [
            () => {
              var fe;
              return c(u) === l.Update ? n()("location", { values: { name: (fe = c(f)) == null ? void 0 : fe.name } }) : n()("new_location");
            }
          ]), x(ae, Y);
        }, V = (ae) => {
          var Y = Em(), J = ce(Y);
          {
            var fe = (ye) => {
              var De = ym(), te = j(De);
              {
                var Se = (Ce) => {
                  tr(Ce, {
                    children: (ke, Ye) => {
                      var L = Ct();
                      Ae(() => nt(L, c(f).uuid)), x(ke, L);
                    },
                    $$slots: { default: !0 }
                  });
                };
                re(te, (Ce) => {
                  c(u) === l.Update && Ce(Se);
                });
              }
              var he = ie(te, 2);
              {
                let Ce = /* @__PURE__ */ ge(() => n()("name"));
                Pa(he, {
                  get label() {
                    return c(Ce);
                  },
                  get value() {
                    return c(f).name;
                  },
                  set value(ke) {
                    c(f).name = ke;
                  }
                });
              }
              var Ie = ie(he, 2);
              {
                let Ce = /* @__PURE__ */ ge(() => n()("key"));
                Pa(Ie, {
                  get label() {
                    return c(Ce);
                  },
                  get value() {
                    return c(f).key;
                  },
                  set value(ke) {
                    c(f).key = ke;
                  }
                });
              }
              var Be = ie(Ie, 2);
              {
                let Ce = /* @__PURE__ */ ge(() => n()("description"));
                Pa(Be, {
                  get label() {
                    return c(Ce);
                  },
                  get value() {
                    return c(f).description;
                  },
                  set value(ke) {
                    c(f).description = ke;
                  }
                });
              }
              x(ye, De);
            };
            re(J, (ye) => {
              c(f) && ye(fe);
            });
          }
          x(ae, Y);
        }, ue = (ae) => {
          var Y = Am(), J = ce(Y);
          ir(J, {
            callback: w,
            variant: "raised",
            children: (ye, De) => {
              var te = Sm(), Se = j(te);
              Ts(Se, {});
              var he = ie(Se, 2);
              tr(he, {
                children: (Ie, Be) => {
                  var Ce = Ct();
                  Ae((ke) => nt(Ce, ke), [() => n()("save")]), x(Ie, Ce);
                },
                $$slots: { default: !0 }
              }), x(ye, te);
            },
            $$slots: { default: !0 }
          });
          var fe = ie(J, 2);
          ir(fe, {
            callback: S,
            variant: "raised",
            isAbortAction: !0,
            children: (ye, De) => {
              var te = Cm(), Se = j(te);
              lo(Se, {});
              var he = ie(Se, 2);
              tr(he, {
                children: (Ie, Be) => {
                  var Ce = Ct();
                  Ae((ke) => nt(Ce, ke), [() => n()("cancel")]), x(Ie, Ce);
                },
                $$slots: { default: !0 }
              }), x(ye, te);
            },
            $$slots: { default: !0 }
          }), x(ae, Y);
        };
        let de = /* @__PURE__ */ ge(() => c(u) === l.Update || c(u) === l.Create);
        ws(H, {
          get open() {
            return c(de);
          },
          onClose: S,
          title: A,
          content: V,
          actions: ue,
          $$slots: { title: !0, content: !0, actions: !0 }
        });
      }
      var M = ie(H, 2), D = ce(M);
      ir(D, {
        class: "button",
        callback: y,
        variant: "raised",
        children: (A, V) => {
          var ue = Im(), de = j(ue);
          du(de, {});
          var ae = ie(de, 2);
          tr(ae, {
            children: (Y, J) => {
              var fe = Ct();
              Ae((ye) => nt(fe, ye), [() => n()("add_location")]), x(Y, fe);
            },
            $$slots: { default: !0 }
          }), x(A, ue);
        },
        $$slots: { default: !0 }
      });
      var k = ie(D, 2);
      ir(k, {
        class: "button",
        callback: m,
        variant: "raised",
        children: (A, V) => {
          var ue = xm(), de = j(ue);
          fu(de, {});
          var ae = ie(de, 2);
          tr(ae, {
            children: (Y, J) => {
              var fe = Ct();
              Ae((ye) => nt(fe, ye), [() => n()("refresh")]), x(Y, fe);
            },
            $$slots: { default: !0 }
          }), x(A, ue);
        },
        $$slots: { default: !0 }
      });
      var K = ie(M, 2), P = ce(K);
      lp(P, {
        style: "padding: 1rem; width: 100%; height: 100%;",
        children: (A, V) => {
          var ue = wm(), de = j(ue), ae = ce(de), Y = ie(de, 2);
          {
            let J = /* @__PURE__ */ ge(() => n()("search"));
            op(Y, {
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
                return c(J);
              }
            });
          }
          Ae((J) => nt(ae, J), [() => n()("location_table")]), x(A, ue);
        },
        $$slots: { default: !0 }
      }), x(F, z);
    };
    re(C, (F) => {
      c(g) ? F(O) : F(R, !1);
    });
  }
  x(e, I), Te(), i();
}
const Hu = "location-manager", Du = "0.0.1";
var Om = /* @__PURE__ */ Q('<!> <input type="hidden" name="package-name"/> <input type="hidden" name="package-version"/>', 1);
function Rm(e, t) {
  Le(t, !0);
  let n = b(t, "dev", 3, !1);
  var r = Om(), i = j(r);
  {
    var a = (s) => {
      Tm(s, {});
    };
    re(i, (s) => {
      (t.doc || n()) && s(a);
    });
  }
  var o = ie(i, 2), l = ie(o, 2);
  Ae(() => {
    Qo(o, Hu), Qo(l, Du);
  }), x(e, r), Te();
}
var Nr;
class Bm extends HTMLElement {
  constructor() {
    super();
    Pe(this, Nr);
    ve(this, Nr, /* @__PURE__ */ _e(me({ doc: void 0, editCount: void 0 })));
  }
  get props() {
    return c(N(this, Nr));
  }
  set props(n) {
    X(N(this, Nr), n, !0);
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
Nr = new WeakMap();
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
